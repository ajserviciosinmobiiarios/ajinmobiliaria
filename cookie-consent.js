/* ============================================================================
   Aroa & Jon · Gestor de consentimiento de cookies (RGPD / LSSI-CE)
   ----------------------------------------------------------------------------
   Vanilla JS, sin dependencias ni build. Debe cargarse en <head> ANTES de
   cualquier etiqueta de Google/Meta: fija los valores por defecto de Google
   Consent Mode v2 (todo denegado) antes de que nada pueda escribir cookies.

   Categorías:
     necesarias  — siempre activas, no se pueden desactivar.
     analiticas  — Google Analytics 4        → analytics_storage
     marketing   — Meta Pixel, Vimeo         → ad_storage, ad_user_data,
                                               ad_personalization

   API pública:
     window.ajConsent.open()   — reabre el panel de preferencias
     window.ajConsent.get()    — devuelve {necesarias, analiticas, marketing}
     window.ajConsent.reset()  — borra la decisión y vuelve a preguntar

   Evento:
     document.addEventListener('aj-consent-change', e => e.detail.marketing)
============================================================================ */
(function () {
  "use strict";

  /* --- Configuración ------------------------------------------------------ */

  // GA4 — propiedad de Aroa & Jon. NO pegar aquí el snippet que da Google:
  // ese carga gtag.js de inmediato y se salta el consentimiento. Aquí el ID se
  // usa solo desde loadGA(), que corre únicamente si hay consentimiento analítico.
  var GA_MEASUREMENT_ID = "G-BVCRT1P6JN";

  // Meta Pixel — pendiente de instalar. Mismo criterio que arriba.
  var META_PIXEL_ID = "[PLACEHOLDER_META_PIXEL_ID]";

  var STORAGE_KEY = "aj_consent";
  var CONSENT_VERSION = 1; // subir al cambiar categorías → vuelve a preguntar
  var RENEW_MONTHS = 24;   // la AEPD recomienda renovar el consentimiento

  /* --- Consent Mode v2: denegar todo por defecto -------------------------- */

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500
  });

  /* --- Persistencia ------------------------------------------------------- */

  function isPlaceholder(v) { return !v || v.indexOf("[PLACEHOLDER") === 0; }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var d = JSON.parse(raw);
      if (d.version !== CONSENT_VERSION) return null;
      var age = Date.now() - (d.timestamp || 0);
      if (age > RENEW_MONTHS * 30 * 24 * 60 * 60 * 1000) return null;
      return d;
    } catch (e) { return null; }
  }

  function save(consent) {
    var record = {
      version: CONSENT_VERSION,
      timestamp: Date.now(),
      necesarias: true,
      analiticas: !!consent.analiticas,
      marketing: !!consent.marketing
    };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(record)); } catch (e) {}
    return record;
  }

  /* --- Aplicar consentimiento --------------------------------------------- */

  var gaLoaded = false, metaLoaded = false;

  function loadGA() {
    if (gaLoaded || isPlaceholder(GA_MEASUREMENT_ID)) return;
    gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function loadMeta() {
    if (metaLoaded || isPlaceholder(META_PIXEL_ID)) return;
    metaLoaded = true;
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }

  function apply(consent, persist) {
    if (persist !== false) save(consent);

    gtag("consent", "update", {
      ad_storage: consent.marketing ? "granted" : "denied",
      ad_user_data: consent.marketing ? "granted" : "denied",
      ad_personalization: consent.marketing ? "granted" : "denied",
      analytics_storage: consent.analiticas ? "granted" : "denied",
      personalization_storage: consent.marketing ? "granted" : "denied"
    });

    if (consent.analiticas) loadGA();
    if (consent.marketing) loadMeta();
    runGuard(!!consent.marketing);

    document.dispatchEvent(new CustomEvent("aj-consent-change", {
      detail: {
        necesarias: true,
        analiticas: !!consent.analiticas,
        marketing: !!consent.marketing
      }
    }));
  }

  /* --- Guardián de iframes estáticos -------------------------------------- */
  /* Cualquier <iframe data-ajc-src="..."> queda bloqueado hasta que haya
     consentimiento de marketing. Se usa en /kit; los vídeos de la home los
     gestiona React en Sections.jsx. */

  function guardIframes(granted) {
    var frames = document.querySelectorAll("iframe[data-ajc-src]");
    Array.prototype.forEach.call(frames, function (f) {
      var holder = f.parentNode;
      var block = holder && holder.querySelector(".ajc-vblock");

      if (granted) {
        if (block) block.parentNode.removeChild(block);
        if (!f.getAttribute("src")) f.setAttribute("src", f.getAttribute("data-ajc-src"));
        f.style.visibility = "";
        return;
      }

      f.removeAttribute("src");
      f.style.visibility = "hidden";
      if (block || !holder) return;

      if (getComputedStyle(holder).position === "static") holder.style.position = "relative";
      var d = document.createElement("div");
      d.className = "ajc-vblock";
      d.innerHTML =
        '<p>Este vídeo está alojado en Vimeo, que instala cookies propias al reproducirlo.</p>' +
        '<button type="button" class="ajc-vbtn">Cargar vídeo</button>' +
        '<button type="button" class="ajc-vlink">Configurar cookies</button>';
      d.querySelector(".ajc-vbtn").addEventListener("click", function () {
        window.ajConsent.grantMarketing();
      });
      d.querySelector(".ajc-vlink").addEventListener("click", function () {
        window.ajConsent.open();
      });
      holder.appendChild(d);
    });
  }

  function runGuard(granted) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () { guardIframes(granted); });
    } else {
      guardIframes(granted);
    }
  }

  /* --- Estilos ------------------------------------------------------------ */

  var CSS = [
    '.ajc-backdrop{position:fixed;inset:0;background:rgba(10,8,5,.55);z-index:2147483646;opacity:0;transition:opacity .25s ease}',
    '.ajc-backdrop.ajc-on{opacity:1}',
    '.ajc{position:fixed;left:0;right:0;bottom:0;z-index:2147483647;background:#0A0805;color:#F5F0E8;',
      'border-top:1px solid rgba(198,167,94,.35);box-shadow:0 -12px 40px rgba(0,0,0,.5);',
      'font-family:Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;',
      'transform:translateY(100%);transition:transform .35s cubic-bezier(.16,1,.3,1)}',
    '.ajc.ajc-on{transform:translateY(0)}',
    '.ajc-in{max-width:1240px;margin:0 auto;padding:28px clamp(20px,5vw,72px)}',
    '.ajc-t{font-family:"Playfair Display",Georgia,serif;font-size:22px;font-weight:500;margin:0 0 10px;color:#F5F0E8}',
    '.ajc-p{font-size:14px;line-height:1.6;margin:0 0 20px;color:#C8C3B6;max-width:70ch}',
    '.ajc-p a{color:#C6A75E;text-decoration:underline;text-underline-offset:2px}',
    '.ajc-btns{display:flex;flex-wrap:wrap;gap:12px;align-items:center}',
    '.ajc-b{font-family:inherit;font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;',
      'padding:13px 26px;border-radius:2px;cursor:pointer;border:1px solid transparent;transition:all .2s ease}',
    '.ajc-b:focus-visible{outline:2px solid #C6A75E;outline-offset:3px}',
    '.ajc-acc{background:#C6A75E;color:#0A0805;border-color:#C6A75E}',
    '.ajc-acc:hover{background:#D8C190;border-color:#D8C190}',
    '.ajc-rej{background:transparent;color:#F5F0E8;border-color:rgba(245,240,232,.45)}',
    '.ajc-rej:hover{border-color:#F5F0E8;background:rgba(245,240,232,.07)}',
    '.ajc-cfg{background:transparent;color:#C8C3B6;border-color:transparent;text-decoration:underline;',
      'text-underline-offset:3px;padding:13px 8px}',
    '.ajc-cfg:hover{color:#C6A75E}',
    /* panel */
    '.ajc-panel{display:none;margin-top:26px;padding-top:24px;border-top:1px solid rgba(198,167,94,.22)}',
    '.ajc-panel.ajc-open{display:block}',
    '.ajc-row{display:flex;gap:18px;align-items:flex-start;padding:16px 0;border-bottom:1px solid rgba(245,240,232,.08)}',
    '.ajc-row:last-of-type{border-bottom:0}',
    '.ajc-rt{font-size:14px;font-weight:600;margin:0 0 5px;color:#F5F0E8}',
    '.ajc-rd{font-size:13px;line-height:1.55;margin:0;color:#8C897E}',
    '.ajc-sw{position:relative;flex:0 0 46px;width:46px;height:26px;margin-top:2px}',
    '.ajc-sw input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer}',
    '.ajc-sl{position:absolute;inset:0;background:#3A382F;border-radius:26px;transition:background .2s ease;pointer-events:none}',
    '.ajc-sl::before{content:"";position:absolute;width:20px;height:20px;left:3px;top:3px;background:#F5F0E8;',
      'border-radius:50%;transition:transform .2s ease}',
    '.ajc-sw input:checked + .ajc-sl{background:#C6A75E}',
    '.ajc-sw input:checked + .ajc-sl::before{transform:translateX(20px)}',
    '.ajc-sw input:disabled + .ajc-sl{background:#A8884A;opacity:.55;cursor:not-allowed}',
    '.ajc-sw input:focus-visible + .ajc-sl{outline:2px solid #C6A75E;outline-offset:3px}',
    '.ajc-save{margin-top:22px}',
    '@media(max-width:600px){',
      '.ajc-in{padding:22px 20px}.ajc-t{font-size:19px}',
      '.ajc-btns{flex-direction:column;align-items:stretch}',
      '.ajc-b{width:100%;text-align:center}',
    '}',
    /* placeholder de vídeo bloqueado */
    '.ajc-vblock{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;',
      'gap:14px;padding:24px;text-align:center;background:#111009;color:#F5F0E8;',
      'font-family:Montserrat,-apple-system,sans-serif;z-index:3}',
    '.ajc-vblock p{margin:0;font-size:13px;line-height:1.55;color:#C8C3B6;max-width:34ch}',
    '.ajc-vbtn{font-family:inherit;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;',
      'padding:11px 22px;border-radius:2px;cursor:pointer;background:#C6A75E;color:#0A0805;border:1px solid #C6A75E}',
    '.ajc-vbtn:hover{background:#D8C190;border-color:#D8C190}',
    '.ajc-vlink{background:none;border:0;color:#8C897E;font-family:inherit;font-size:12px;text-decoration:underline;',
      'text-underline-offset:2px;cursor:pointer;padding:0}',
    '.ajc-vlink:hover{color:#C6A75E}'
  ].join("");

  function injectCSS() {
    if (document.getElementById("ajc-style")) return;
    var st = document.createElement("style");
    st.id = "ajc-style";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* --- Banner ------------------------------------------------------------- */

  var bannerEl = null, backdropEl = null, lastFocus = null;

  function buildBanner(current) {
    injectCSS();

    backdropEl = document.createElement("div");
    backdropEl.className = "ajc-backdrop";

    var el = document.createElement("div");
    el.className = "ajc";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-labelledby", "ajc-title");
    el.setAttribute("aria-describedby", "ajc-desc");

    var a = current && current.analiticas ? " checked" : "";
    var m = current && current.marketing ? " checked" : "";

    el.innerHTML =
      '<div class="ajc-in">' +
        '<h2 class="ajc-t" id="ajc-title">Tu privacidad, en tus manos</h2>' +
        '<p class="ajc-p" id="ajc-desc">Usamos cookies propias necesarias para que la web funcione y, ' +
          'si nos das permiso, cookies de terceros para entender cómo se navega por el sitio y para ' +
          'mostrarte nuestros contenidos en redes. Tú decides — y puedes cambiar de opinión cuando quieras. ' +
          'Más detalle en la <a href="/politica-de-cookies">Política de Cookies</a>.</p>' +
        '<div class="ajc-btns">' +
          '<button type="button" class="ajc-b ajc-acc" data-act="all">Aceptar todas</button>' +
          '<button type="button" class="ajc-b ajc-rej" data-act="none">Rechazar todas</button>' +
          '<button type="button" class="ajc-b ajc-cfg" data-act="cfg" aria-expanded="false" ' +
            'aria-controls="ajc-panel">Configurar</button>' +
        '</div>' +
        '<div class="ajc-panel" id="ajc-panel">' +
          row("necesarias", "Necesarias", "Imprescindibles para que la web funcione: navegación, seguridad y tu propia elección de cookies. No se pueden desactivar y no requieren consentimiento.", true, true) +
          row("analiticas", "Analíticas", "Google Analytics. Nos dicen qué páginas se visitan y cuánto tiempo se permanece, en conjunto y de forma anónima, para mejorar la web. Nunca te identifican personalmente.", a === " checked", false) +
          row("marketing", "Marketing y contenido externo", "Permiten reproducir los vídeos de testimonios alojados en Vimeo y medir la eficacia de nuestras campañas en redes sociales.", m === " checked", false) +
          '<div class="ajc-btns ajc-save">' +
            '<button type="button" class="ajc-b ajc-acc" data-act="save">Guardar preferencias</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    function row(id, title, desc, checked, locked) {
      return '<div class="ajc-row">' +
        '<label class="ajc-sw">' +
          '<input type="checkbox" id="ajc-' + id + '"' +
            (checked ? " checked" : "") + (locked ? " disabled" : "") +
            ' aria-describedby="ajc-d-' + id + '">' +
          '<span class="ajc-sl"></span>' +
        '</label>' +
        '<div><p class="ajc-rt">' + title + '</p>' +
        '<p class="ajc-rd" id="ajc-d-' + id + '">' + desc + '</p></div>' +
      '</div>';
    }

    document.body.appendChild(backdropEl);
    document.body.appendChild(el);
    bannerEl = el;

    el.addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-act]");
      if (!b) return;
      var act = b.getAttribute("data-act");

      if (act === "cfg") {
        var panel = el.querySelector("#ajc-panel");
        var open = panel.classList.toggle("ajc-open");
        b.setAttribute("aria-expanded", String(open));
        if (open) el.querySelector("#ajc-analiticas").focus();
        return;
      }
      if (act === "all")  return close({ analiticas: true,  marketing: true  });
      if (act === "none") return close({ analiticas: false, marketing: false });
      if (act === "save") return close({
        analiticas: el.querySelector("#ajc-analiticas").checked,
        marketing:  el.querySelector("#ajc-marketing").checked
      });
    });

    // Trampa de foco mínima — el diálogo es modal.
    el.addEventListener("keydown", function (ev) {
      if (ev.key !== "Tab") return;
      var f = el.querySelectorAll("button, input:not([disabled]), a[href]");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    });

    requestAnimationFrame(function () {
      backdropEl.classList.add("ajc-on");
      el.classList.add("ajc-on");
      var f = el.querySelector(".ajc-acc");
      if (f) f.focus();
    });
  }

  function close(consent) {
    apply(consent);
    if (bannerEl) {
      bannerEl.classList.remove("ajc-on");
      backdropEl.classList.remove("ajc-on");
      var b = bannerEl, bd = backdropEl;
      bannerEl = backdropEl = null;
      setTimeout(function () {
        if (b.parentNode) b.parentNode.removeChild(b);
        if (bd.parentNode) bd.parentNode.removeChild(bd);
      }, 400);
    }
    if (lastFocus && lastFocus.focus) { lastFocus.focus(); lastFocus = null; }
  }

  function show(current) {
    if (bannerEl) return;
    lastFocus = document.activeElement;
    if (document.body) buildBanner(current);
    else document.addEventListener("DOMContentLoaded", function () { buildBanner(current); });
  }

  /* --- Arranque ----------------------------------------------------------- */

  // El CSS se inyecta siempre, no solo con el banner: los placeholders de vídeo
  // bloqueado lo necesitan aunque el visitante ya decidiera en otra sesión.
  if (document.head) injectCSS();
  else document.addEventListener("DOMContentLoaded", injectCSS);

  var stored = load();
  if (stored) {
    apply(stored, false); // ya decidió: aplicar sin reescribir la fecha
  } else {
    runGuard(false);      // sin decisión: bloquear vídeos y preguntar
    show(null);
  }

  window.ajConsent = {
    open: function () { show(load()); },
    get: function () {
      var c = load();
      return c ? { necesarias: true, analiticas: c.analiticas, marketing: c.marketing }
               : { necesarias: true, analiticas: false, marketing: false };
    },
    reset: function () {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      show(null);
    },
    // Consentimiento explícito de marketing dado desde un placeholder de vídeo:
    // el visitante pulsa "Cargar vídeo" sabiendo lo que acepta.
    grantMarketing: function () {
      var c = load();
      apply({ analiticas: c ? c.analiticas : false, marketing: true });
    }
  };
})();
