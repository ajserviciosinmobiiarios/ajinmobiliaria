/* Aroa & Jon — Landing UI kit: todas las secciones */

function useIsMobileLocal() {
  var state = React.useState(window.innerWidth < 768);
  var mobile = state[0];
  var setMobile = state[1];
  React.useEffect(function() {
    var handler = function() { setMobile(window.innerWidth < 768); };
    window.addEventListener("resize", handler);
    return function() { window.removeEventListener("resize", handler); };
  }, []);
  return mobile;
}

/* Inyecta el keyframe de marquee una sola vez */
(function() {
  if (document.getElementById("aj-marquee-style")) return;
  var s = document.createElement("style");
  s.id = "aj-marquee-style";
  s.textContent = "@keyframes ajMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }";
  document.head.appendChild(s);
})();

/* ── EN CARTERA ─────────────────────────────────────────────── */

function PropCard(props) {
  var p = props.prop;
  var fotos = p.fotos || [];
  var state = React.useState(0);
  var photoIdx = state[0];
  var setPhotoIdx = state[1];
  return (
    <div style={{ background: "var(--aj-paper)", border: "1px solid rgba(198,167,94,0.22)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ position: "relative", paddingBottom: "68%", overflow: "hidden", background: "#e8e3da", flexShrink: 0 }}>
        <img src={fotos[photoIdx] || ""} alt={p.titulo}
             style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        {p.destacado ? (
          <span style={{ position: "absolute", top: 12, left: 12, background: "var(--aj-gold)", color: "var(--aj-black)", fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px" }}>Destacado</span>
        ) : null}
        {fotos.length > 1 ? (
          <div style={{ position: "absolute", bottom: 10, right: 10, display: "flex", gap: 5 }}>
            {fotos.map(function(_, i) {
              return (
                <button key={i} onClick={function() { setPhotoIdx(i); }}
                  style={{ width: 6, height: 6, borderRadius: "50%", border: "none", padding: 0, cursor: "pointer", background: i === photoIdx ? "var(--aj-gold)" : "rgba(10,8,5,0.3)" }} />
              );
            })}
          </div>
        ) : null}
      </div>
      <div style={{ padding: "20px 20px 22px", display: "grid", gridTemplateRows: "auto auto 1fr auto auto", gap: 8, flex: 1 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--aj-gold)" }}>{p.tipo} · {p.zona}</div>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 500, color: "var(--aj-black)", lineHeight: 1.25 }}>{p.titulo}</div>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 12.5, lineHeight: 1.65, color: "rgba(10,8,5,0.58)", margin: 0, alignSelf: "start" }}>{p.descripcionCorta}</p>
        <div style={{ display: "flex", borderTop: "1px solid rgba(198,167,94,0.2)", borderBottom: "1px solid rgba(198,167,94,0.2)", margin: "6px 0 0" }}>
          <div style={{ flex: 1, textAlign: "center", padding: "9px 2px", borderRight: "1px solid rgba(198,167,94,0.15)" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.85rem", color: "var(--aj-black)" }}>{p.m2}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 8, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10,8,5,0.4)", marginTop: 2 }}>Sup.</div>
          </div>
          <div style={{ flex: 1, textAlign: "center", padding: "9px 2px", borderRight: "1px solid rgba(198,167,94,0.15)" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.85rem", color: "var(--aj-black)" }}>{p.habitaciones}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 8, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10,8,5,0.4)", marginTop: 2 }}>Hab.</div>
          </div>
          <div style={{ flex: 1, textAlign: "center", padding: "9px 2px", borderRight: "1px solid rgba(198,167,94,0.15)" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.85rem", color: "var(--aj-black)" }}>{p.banos}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 8, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10,8,5,0.4)", marginTop: 2 }}>Baños</div>
          </div>
          <div style={{ flex: 1, textAlign: "center", padding: "9px 2px" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", color: "var(--aj-gold)", fontWeight: 500, lineHeight: 1.2 }}>{p.precio}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 8, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10,8,5,0.4)", marginTop: 2 }}>Precio</div>
          </div>
        </div>
        <a href={p.idealista} target="_blank" rel="noopener noreferrer"
           style={{ display: "block", textAlign: "center", background: "transparent", border: "1px solid rgba(198,167,94,0.5)", color: "var(--aj-gold)", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "10px 0", textDecoration: "none" }}>
          Ver en Idealista →
        </a>
      </div>
    </div>
  );
}

function EnCartera() {
  var Eyebrow = window.AroaJonDesignSystem_6ad0b0.Eyebrow;
  var isMobile = useIsMobileLocal();
  var listings = window.AJ_PROPERTIES || [];
  return (
    <section id="cartera" style={{ background: "var(--surface-canvas)", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", justifyContent: "space-between", flexDirection: isMobile ? "column" : "row", gap: 20, marginBottom: 52 }}>
          <div style={{ maxWidth: 560 }}>
            <Eyebrow>Inmuebles en exclusiva</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.12, margin: "22px 0 0", color: "var(--text-heading)" }}>
              En <span style={{ fontStyle: "italic", color: "var(--aj-gold)" }}>cartera</span>.
            </h2>
          </div>
          <a href="/cartera" style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--aj-gold)", textDecoration: "none", whiteSpace: "nowrap", opacity: 0.85 }}>Ver todos →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(270px, 1fr))", gap: isMobile ? 28 : 32, alignItems: "stretch" }}>
          {listings.map(function(p) {
            return React.createElement(PropCard, { key: p.id, prop: p });
          })}
        </div>
      </div>
    </section>
  );
}

/* ── RESEÑAS MARQUEE INFINITO ────────────────────────────────── */

var REVIEWS_DATA = [
  { name: "Iker Aranburu", text: "Vendimos la casa antes de publicarla en ningún portal inmobiliario y todo gracias al buen hacer de Jon y Aroa. Profesionalidad, claridad y fluidez informativa. Os recomendaremos sin ninguna duda." },
  { name: "Rafa Munduate", text: "¡Qué equipazo! Ha sido un trabajo duro y con mucho esfuerzo por ambas partes. Comunicación, empatía, eficacia… y podría seguir añadiendo." },
  { name: "Ricardo Irazoki", text: "Jon y Aroa marcan la diferencia con el resto de las inmobiliarias convencionales. Un gran marketing acompañado de una excelente gestión y asesoramiento. Así da gusto." },
  { name: "Silvia Bailador", text: "Mi experiencia fue fantástica. Desde el primer momento conectamos y supieron entender lo que necesitábamos. Sin dudarlo, siempre." },
  { name: "Maite Odriozola", text: "Desde el primer momento me sentí en buenas manos. Transparencia total, proceso sin estrés y resultado por encima de lo esperado. Totalmente recomendables." },
  { name: "Joseba Kortabarria", text: "Profesionales de verdad. Sabían exactamente cómo posicionar el inmueble y los resultados lo demostraron. Cerrado en tiempo récord y al precio que queríamos." },
];

function StarRow() {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
      {[1,2,3,4,5].map(function(i) {
        return (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--aj-gold)">
            <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.43L7 8.885l-3.09 1.615.59-3.43L2 4.635l3.455-.505z"/>
          </svg>
        );
      })}
    </div>
  );
}

var REVIEWS_DOUBLED = REVIEWS_DATA.concat(REVIEWS_DATA);

function Reviews() {
  var Eyebrow = window.AroaJonDesignSystem_6ad0b0.Eyebrow;
  var isMobile = useIsMobileLocal();
  return (
    <section id="resenas" style={{ background: "var(--aj-black)", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <Eyebrow tone="onDark">Reseñas reales de Google</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.12, margin: "22px 0 0", color: "var(--aj-paper)" }}>
            No hace falta que lo digamos <span style={{ fontStyle: "italic", color: "var(--aj-gold)" }}>nosotros</span>.
          </h2>
        </div>
      </div>
      {/* Marquee ancho completo, sin contenedor limitado */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{ display: "flex", gap: 20, width: "max-content", animation: "ajMarquee 40s linear infinite" }}
          onMouseEnter={function(e) { e.currentTarget.style.animationPlayState = "paused"; }}
          onMouseLeave={function(e) { e.currentTarget.style.animationPlayState = "running"; }}
        >
          {REVIEWS_DOUBLED.map(function(r, i) {
            return (
              <div key={i} style={{ flexShrink: 0, width: 320, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(198,167,94,0.18)", padding: "28px 26px", display: "flex", flexDirection: "column", gap: 14 }}>
                <StarRow />
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.5, lineHeight: 1.7, color: "rgba(245,240,232,0.82)", margin: 0, flex: 1 }}>"{r.text}"</p>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 15, color: "var(--aj-gold)", fontStyle: "italic" }}>{r.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIOS EN VÍDEO (3 centrados) ─────────────────────── */

var VIDEO_TESTIMONIALS = [
  { name: "Cliente 1", location: "Irun", duration: "1:24" },
  { name: "Cliente 2", location: "Hondarribia", duration: "2:08" },
  { name: "Cliente 3", location: "San Sebastián", duration: "1:47" },
  { name: "Cliente 4", location: "Donostia", duration: "0:58" },
];
var VIDEO_DOUBLED = VIDEO_TESTIMONIALS.concat(VIDEO_TESTIMONIALS);

function VideoReviews() {
  var Eyebrow = window.AroaJonDesignSystem_6ad0b0.Eyebrow;
  return (
    <section style={{ background: "var(--aj-black)", padding: "0 0 var(--section-y)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(24px, 5vw, 72px)", marginBottom: 48 }}>
        <Eyebrow tone="onDark">Testimonios en vídeo</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.12, margin: "22px 0 0", color: "var(--aj-paper)" }}>
          Sus palabras, no las <span style={{ fontStyle: "italic", color: "var(--aj-gold)" }}>nuestras</span>.
        </h2>
      </div>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{ display: "flex", gap: 20, width: "max-content", animation: "ajMarquee 28s linear infinite" }}
          onMouseEnter={function(e) { e.currentTarget.style.animationPlayState = "paused"; }}
          onMouseLeave={function(e) { e.currentTarget.style.animationPlayState = "running"; }}
        >
          {VIDEO_DOUBLED.map(function(t, i) {
            return (
              <div key={i} style={{ flexShrink: 0, width: 300, border: "1px solid rgba(198,167,94,0.2)", overflow: "hidden", cursor: "pointer" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(198,167,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(198,167,94,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
                      <circle cx="26" cy="26" r="25.5" stroke="rgba(198,167,94,0.8)" strokeWidth="1"/>
                      <path d="M21 17.5L37 26L21 34.5V17.5Z" fill="var(--aj-gold)"/>
                    </svg>
                  </div>
                  <div style={{ position: "absolute", bottom: 12, right: 12, background: "rgba(0,0,0,0.7)", color: "var(--aj-gold)", fontFamily: "var(--font-sans)", fontSize: 11, padding: "3px 8px", border: "1px solid rgba(198,167,94,0.3)" }}>{t.duration}</div>
                </div>
                <div style={{ padding: "16px 18px", borderTop: "1px solid rgba(198,167,94,0.12)" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "var(--aj-paper)", marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(198,167,94,0.7)" }}>{t.location}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ maxWidth: 1240, margin: "32px auto 0", padding: "0 clamp(24px, 5vw, 72px)" }}>
        <div style={{ padding: "16px 20px", border: "1px dashed rgba(198,167,94,0.3)", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--aj-gold)", flexShrink: 0 }} />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(245,240,232,0.45)", margin: 0 }}>Los vídeos de clientes se añadirán próximamente.</p>
        </div>
      </div>
    </section>
  );
}

/* ── PERSONAL SHOPPER (parallax más pronunciado) ────────────── */

function PersonalShopper() {
  var ds = window.AroaJonDesignSystem_6ad0b0;
  var Badge = ds.Badge;
  var Button = ds.Button;
  var isMobile = useIsMobileLocal();
  var bgRef = React.useRef(null);
  var sectionRef = React.useRef(null);

  React.useEffect(function() {
    var el = bgRef.current;
    var section = sectionRef.current;
    if (!el || !section) return;
    var handleScroll = function() {
      var rect = section.getBoundingClientRect();
      var progress = rect.top / window.innerHeight;
      el.style.transform = "translateY(" + (progress * 280) + "px)";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return function() { window.removeEventListener("scroll", handleScroll); };
  }, []);

  var list = [
    "Búsqueda activa dentro y fuera de portales",
    "Solo visitas inmuebles que ya hemos filtrado para ti",
    "Negociamos para que compres al mejor precio posible",
    "Contigo hasta que tengas las llaves en la mano",
    "Te ayudamos a gestionar la hipoteca que necesites",
  ];

  return (
    <section ref={sectionRef} id="personal-shopper" style={{ position: "relative", overflow: "hidden", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div ref={bgRef} style={{ position: "absolute", inset: "-35%", zIndex: 0, backgroundImage: "url(../../assets/fondo-parallax.jpg)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.32) saturate(0.7)", willChange: "transform" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(135deg, rgba(10,8,5,0.45) 0%, rgba(30,20,5,0.28) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 72, alignItems: "center" }}>
        <div style={{ position: "relative", order: isMobile ? 2 : 1 }}>
          <img src="../../assets/aroa-jon-irun.jpg" alt="Aroa y Jon en Irun" style={{ width: "100%", height: isMobile ? 300 : 520, objectFit: "cover", objectPosition: "center", display: "block" }} />
          <div style={{ position: "absolute", inset: 14, border: "1px solid rgba(198,167,94,0.3)", pointerEvents: "none" }} />
        </div>
        <div style={{ order: isMobile ? 1 : 2 }}>
          <Badge variant="solid">Servicio Personal Shopper</Badge>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.14, margin: "24px 0 0", color: "var(--aj-paper)" }}>
            ¿Buscas comprar en Gipuzkoa y no encuentras lo que necesitas?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: "rgba(245,240,232,0.65)", margin: "22px 0 0" }}>
            Nosotros buscamos por ti. Escuchamos lo que necesitas — y también lo que todavía no sabes que necesitas. Filtramos, seleccionamos y solo te presentamos lo que tiene sentido.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
            {list.map(function(x) {
              return (
                <li key={x} style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--aj-paper)", display: "flex", gap: 14, alignItems: "baseline" }}>
                  <span style={{ color: "var(--aj-gold)", fontFamily: "var(--font-serif)", fontSize: 18, flexShrink: 0 }}>→</span>{x}
                </li>
              );
            })}
          </ul>
          <Button variant="primary" size="lg" onClick={function() { document.getElementById("contacto").scrollIntoView({ behavior: "smooth" }); }}>Quiero más información</Button>
        </div>
      </div>
    </section>
  );
}

/* ── NOTICIAS ────────────────────────────────────────────────── */

var RSS2JSON = "https://api.rss2json.com/v1/api.json?rss_url=";

var NEWS_FEEDS = [
  { urls: ["https://www.elmundo.es/rss/economia/vivienda.xml"], source: "El Mundo" },
  {
    urls: [
      "https://www.fotocasa.es/fotocasa-life/feed/",
      "https://www.fotocasa.es/feed/",
      "https://cincodias.elpais.com/seccion/inmobiliario/rss/",
      "https://www.expansion.com/rss/mercadoinmobiliario.xml",
    ],
    source: "Fotocasa"
  },
  {
    urls: [
      "https://www.20minutos.es/rss/vivienda/",
      "https://www.20minutos.es/rss/",
    ],
    source: "20 Minutos"
  },
];

function fetchOneFeed(feedObj) {
  var tryUrls = feedObj.urls.slice();
  function tryNext() {
    if (!tryUrls.length) return Promise.resolve(null);
    var url = tryUrls.shift();
    return fetch(RSS2JSON + encodeURIComponent(url))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.status !== "ok" || !data.items || !data.items.length) return tryNext();
        var it = data.items[0];
        var thumbnail = it.thumbnail || (it.enclosure && it.enclosure.link) || null;
        if (!thumbnail) {
          var m = (it.content || it.description || "").match(/<img[^>]+src=["']([^"']+)["']/i);
          if (m) thumbnail = m[1];
        }
        return { title: it.title || "", link: it.link || "#", pubDate: it.pubDate || "", thumbnail: thumbnail, source: feedObj.source };
      })
      .catch(function() { return tryNext(); });
  }
  return tryNext();
}

function NewsCard(props) {
  var state = React.useState(false);
  var hovered = state[0];
  var setHovered = state[1];
  var date = props.pubDate ? new Date(props.pubDate).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }) : "";
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
       onMouseEnter={function() { setHovered(true); }} onMouseLeave={function() { setHovered(false); }}
       style={{ display: "flex", flexDirection: "column", textDecoration: "none", background: "var(--surface-canvas)", border: "1px solid " + (hovered ? "rgba(198,167,94,0.5)" : "rgba(198,167,94,0.14)"), transition: "border-color 0.25s, transform 0.25s", transform: hovered ? "translateY(-3px)" : "none" }}>
      {props.thumbnail ? (
        <div style={{ width: "100%", paddingBottom: "52%", position: "relative", overflow: "hidden" }}>
          <img src={props.thumbnail} alt={props.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ) : (
        <div style={{ width: "100%", paddingBottom: "52%", position: "relative", background: "linear-gradient(135deg, #f5f0e8 0%, #ede7d9 100%)" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: 48, color: "rgba(198,167,94,0.25)" }}>A&J</div>
        </div>
      )}
      <div style={{ padding: "18px 20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(198,167,94,0.8)" }}>{props.source}{date ? " · " + date : ""}</div>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 500, lineHeight: 1.35, color: "var(--text-heading)", flex: 1 }}>{props.title}</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--aj-gold)", opacity: hovered ? 1 : 0.6, transition: "opacity 0.2s" }}>Leer →</div>
      </div>
    </a>
  );
}

function NewsSection() {
  var Eyebrow = window.AroaJonDesignSystem_6ad0b0.Eyebrow;
  var isMobile = useIsMobileLocal();
  var itemsState = React.useState([]);
  var items = itemsState[0];
  var setItems = itemsState[1];
  var loadingState = React.useState(true);
  var loading = loadingState[0];
  var setLoading = loadingState[1];

  React.useEffect(function() {
    var cancelled = false;
    Promise.all(NEWS_FEEDS.map(fetchOneFeed)).then(function(results) {
      if (cancelled) return;
      setItems(results.filter(Boolean));
      setLoading(false);
    });
    return function() { cancelled = true; };
  }, []);

  return (
    <section id="noticias" style={{ background: "var(--surface-canvas)", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: isMobile ? "flex-start" : "baseline", justifyContent: "space-between", flexDirection: isMobile ? "column" : "row", gap: 16, marginBottom: 52 }}>
          <div style={{ maxWidth: 560 }}>
            <Eyebrow>Mercado inmobiliario</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.12, margin: "22px 0 0", color: "var(--text-heading)" }}>
              Qué está pasando en el <span style={{ fontStyle: "italic", color: "var(--aj-gold)" }}>sector</span>.
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)", opacity: 0.6, margin: 0, maxWidth: 260, lineHeight: 1.6 }}>
            Actualizado automáticamente desde fuentes del sector.
          </p>
        </div>
        {loading ? (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {[1,2,3].map(function(i) { return <div key={i} style={{ height: 280, background: "rgba(198,167,94,0.06)", border: "1px solid rgba(198,167,94,0.1)" }} />; })}
          </div>
        ) : items.length ? (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {items.map(function(it, i) {
              return React.createElement(NewsCard, { key: i, title: it.title, link: it.link, pubDate: it.pubDate, thumbnail: it.thumbnail, source: it.source });
            })}
          </div>
        ) : (
          <div style={{ padding: "40px 0", textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(10,8,5,0.4)" }}>No se pudieron cargar las noticias.</div>
        )}
      </div>
    </section>
  );
}

/* ── CONTACTO ────────────────────────────────────────────────── */

function Contact() {
  var Eyebrow = window.AroaJonDesignSystem_6ad0b0.Eyebrow;
  var isMobile = useIsMobileLocal();
  return (
    <section id="contacto" style={{ background: "var(--aj-black)", color: "var(--text-on-dark)", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 48 : 80 }}>
        <div>
          <Eyebrow tone="onDark">Contacto</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.12, margin: "22px 0 28px", color: "var(--aj-paper)" }}>
            El primer paso es una llamada. Sin compromiso, sin prisa.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: "rgba(245,240,232,0.82)", margin: 0 }}>
            Cuéntanos tu situación. Te decimos con honestidad si somos la opción adecuada para ti — y si lo somos, cómo lo haríamos.
          </p>
          <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 22 }}>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(198,167,94,0.7)", marginBottom: 6 }}>Teléfono</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: isMobile ? 20 : 24, color: "var(--aj-paper)" }}>+34 637 33 89 03</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(245,240,232,0.4)", marginTop: 4 }}>Lunes a viernes · 9h – 19h</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(198,167,94,0.7)", marginBottom: 6 }}>Email</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: isMobile ? 17 : 22, color: "var(--aj-paper)" }}>info@ajinmobiliaria.com</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(245,240,232,0.4)", marginTop: 4 }}>Respondemos en menos de 24h</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(198,167,94,0.7)", marginBottom: 6 }}>Dirección</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: isMobile ? 16 : 18, color: "var(--aj-paper)" }}>Av. Navarra 3, Irun</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(245,240,232,0.4)", marginTop: 4 }}>Gipuzkoa</div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  var Button = window.AroaJonDesignSystem_6ad0b0.Button;
  var sentState = React.useState(false);
  var sent = sentState[0];
  var setSent = sentState[1];
  var loadingState = React.useState(false);
  var loading = loadingState[0];
  var setLoading = loadingState[1];
  var errorState = React.useState(null);
  var error = errorState[0];
  var setError = errorState[1];

  function handleSubmit(e) {
    e.preventDefault();
    var fd = new FormData(e.target);
    var nombre = fd.get("nombre") || "";
    var email = fd.get("email") || "";
    var telefono = fd.get("telefono") || "";
    var reason = fd.get("reason") || "";
    if (!email) return;
    setLoading(true);
    setError(null);
    fetch("https://api.convertkit.com/v3/forms/9633762/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: "sIwxIVz8VzunIvELlu4jBA",
        first_name: nombre,
        email: email,
        fields: { phone: telefono, reason: reason }
      })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      setLoading(false);
      if (data.subscription || data.subscriber) { setSent(true); }
      else { setError("Ha habido un problema. Inténtalo de nuevo."); }
    })
    .catch(function() {
      setLoading(false);
      setError("Ha habido un problema. Inténtalo de nuevo.");
    });
  }

  if (sent) {
    return (
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(198,167,94,0.3)", padding: 48, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 420 }}>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: 30, color: "var(--aj-gold)", marginBottom: 16 }}>Mensaje recibido.</div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "rgba(245,240,232,0.55)", margin: 0 }}>Aroa o Jon te contactarán en menos de 24 horas.</p>
      </div>
    );
  }
  return (
    <form style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(198,167,94,0.22)", padding: 40, display: "flex", flexDirection: "column", gap: 20 }}
          onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <DarkField label="Nombre" name="nombre" />
        <DarkField label="Teléfono" name="telefono" />
      </div>
      <DarkField label="Email" name="email" type="email" required />
      <DarkField label="¿Qué necesitas?" name="reason" fieldAs="select" options={["Quiero vender mi propiedad", "Información sobre Personal Shopper", "Valoración gratuita de mi inmueble"]} />
      <DarkField label="Cuéntanos algo más (opcional)" name="mensaje" fieldAs="textarea" rows={3} />
      <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
        <input type="checkbox" name="privacidad" required style={{ marginTop: 3, accentColor: "var(--aj-gold)", width: 16, height: 16, flexShrink: 0 }} />
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.6, color: "rgba(245,240,232,0.55)" }}>
          He leído y acepto la <a href="/politica-de-privacidad" target="_blank" style={{ color: "var(--aj-gold)", textDecoration: "underline" }}>Política de Privacidad</a>. Consiento el tratamiento de mis datos para recibir información sobre los servicios de Aroa & Jon Servicios Inmobiliarios.
        </span>
      </label>
      {error && <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--aj-gold)" }}>{error}</div>}
      <Button variant="primary" size="lg" fullWidth as="button" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
}

function DarkField(props) {
  var fState = React.useState(false);
  var f = fState[0];
  var setF = fState[1];
  var fieldAs = props.fieldAs || "input";
  var ctrl = { fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--aj-paper)", background: "rgba(255,255,255,0.03)", border: "1px solid " + (f ? "var(--aj-gold)" : "rgba(198,167,94,0.28)"), padding: "13px 15px", width: "100%", boxSizing: "border-box", outline: "none", borderRadius: 0 };
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(198,167,94,0.7)", marginBottom: 9 }}>{props.label}</span>
      {fieldAs === "textarea" ? (
        <textarea name={props.name} rows={props.rows || 4} style={Object.assign({}, ctrl, { resize: "vertical" })} onFocus={function() { setF(true); }} onBlur={function() { setF(false); }} />
      ) : fieldAs === "select" ? (
        <select name={props.name} style={ctrl} onFocus={function() { setF(true); }} onBlur={function() { setF(false); }}>
          {(props.options || []).map(function(o) { return <option key={o}>{o}</option>; })}
        </select>
      ) : (
        <input name={props.name} type={props.type || "text"} required={props.required} style={ctrl} onFocus={function() { setF(true); }} onBlur={function() { setF(false); }} />
      )}
    </label>
  );
}

/* ── FOOTER ──────────────────────────────────────────────────── */

function Footer() {
  var isMobile = useIsMobileLocal();
  var igState = React.useState(false);
  var igH = igState[0];
  var setIgH = igState[1];
  var waState = React.useState(false);
  var waH = waState[0];
  var setWaH = waState[1];
  var iconBase = { display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, textDecoration: "none", transition: "color 0.2s, border-color 0.2s" };
  return (
    <footer style={{ background: "var(--aj-black)", borderTop: "1px solid rgba(198,167,94,0.22)", color: "rgba(245,240,232,0.45)", padding: "36px clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 28 }}>
        <img src="../../assets/logo-wordmark-gold.png" alt="Aroa & Jon" style={{ height: 96, width: "auto", display: "block" }} />
        <div style={{ display: "flex", gap: 12 }}>
          <a href="https://www.instagram.com/jon.gonzalez.morales/" target="_blank" rel="noopener noreferrer"
             onMouseEnter={function() { setIgH(true); }} onMouseLeave={function() { setIgH(false); }}
             style={Object.assign({}, iconBase, { border: "1px solid " + (igH ? "rgba(198,167,94,0.8)" : "rgba(198,167,94,0.35)"), color: igH ? "var(--aj-gold)" : "rgba(198,167,94,0.6)" })} aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://wa.me/34637338903" target="_blank" rel="noopener noreferrer"
             onMouseEnter={function() { setWaH(true); }} onMouseLeave={function() { setWaH(false); }}
             style={Object.assign({}, iconBase, { border: "1px solid " + (waH ? "rgba(198,167,94,0.8)" : "rgba(198,167,94,0.35)"), color: waH ? "var(--aj-gold)" : "rgba(198,167,94,0.6)" })} aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.532 5.857L.057 23.25a.75.75 0 0 0 .916.932l5.565-1.463A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.704 9.704 0 0 1-4.95-1.355l-.355-.21-3.676.966.983-3.585-.23-.368A9.699 9.699 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: isMobile ? "flex-start" : "flex-end" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 12 }}>© 2026 · Servicios Inmobiliarios · Bidasoa · Donostialdea · Gipuzkoa</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/aviso-legal" style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(245,240,232,0.35)", textDecoration: "none", letterSpacing: "0.06em" }}>Aviso Legal</a>
            <a href="/politica-de-privacidad" style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(245,240,232,0.35)", textDecoration: "none", letterSpacing: "0.06em" }}>Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── APP ─────────────────────────────────────────────────────── */

function LandingApp() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <BrandPromise />
      <PersonalShopper />
      <EnCartera />
      <Reviews />
      <VideoReviews />
      <NewsSection />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { EnCartera: EnCartera, Reviews: Reviews, VideoReviews: VideoReviews, NewsSection: NewsSection, PersonalShopper: PersonalShopper, Contact: Contact, Footer: Footer, LandingApp: LandingApp });

(function mountLanding() {
  var ns = window.AroaJonDesignSystem_6ad0b0;
  var ready = ns && ns.Button && ns.Eyebrow && window.Hero && window.BrandPromise;
  if (!ready) { return setTimeout(mountLanding, 30); }
  if (!window.__ajLandingRoot) {
    window.__ajLandingRoot = ReactDOM.createRoot(document.getElementById("root"));
  }
  window.__ajLandingRoot.render(React.createElement(LandingApp, null));
  setTimeout(function() { window.__ajLandingRoot.render(React.createElement(LandingApp, null)); }, 80);
})();
