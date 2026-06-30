/* Aroa & Jon — Landing (single-file build for standalone export, generated) */
/* Aroa & Jon — Landing UI kit: Header + Hero (dark) */
/* design-system components are read at render time so load order can't break them */

function Logo({ onDark = true }) {
  return (
    <a href="#" style={{ display: "inline-flex", alignItems: "center" }}>
      <img src={(window.__resources && window.__resources.logoWordmark) || "../../assets/logo-wordmark-gold.png"} alt="Aroa & Jon · Servicios Inmobiliarios"
           style={{ height: 58, width: "auto", display: "block" }} />
    </a>
  );
}

function Header() {
  const { Button } = window.AroaJonDesignSystem_6ad0b0;
  const items = ["Servicios", "Nosotros", "Reseñas", "Personal Shopper"];
  return (
    <header style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "30px clamp(24px, 5vw, 72px)" }}>
      <Logo />
      <nav style={{ display: "flex", gap: 38 }}>
        {items.map((it) => (
          <a key={it} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-on-dark)", textDecoration: "none", opacity: 0.82 }}
             onMouseEnter={(e) => (e.currentTarget.style.color = "var(--aj-gold)")}
             onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-on-dark)")}>
            {it}
          </a>
        ))}
      </nav>
      <Button variant="primary" size="sm">Quiero que me llamen</Button>
    </header>
  );
}

function Hero() {
  const { Button, Eyebrow, Stat } = window.AroaJonDesignSystem_6ad0b0;
  return (
    <section style={{ position: "relative", background: "var(--aj-black)", backgroundImage: "url('" + ((window.__resources && window.__resources.plaza) || "../../assets/aroa-jon-plaza.jpg") + "')", backgroundSize: "cover", backgroundPosition: "center", color: "var(--text-on-dark)", overflow: "hidden", minHeight: 760 }}>
      <Header />
      {/* full-bleed background video (drop your file at assets/hero.mp4; poster shows until then) */}
      <video
        autoPlay muted loop playsInline
        poster={(window.__resources && window.__resources.plaza) || "../../assets/aroa-jon-plaza.jpg"}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      >
        <source src={(window.__resources && window.__resources.heroVideo) || "../../assets/hero.mp4"} type="video/mp4" />
      </video>
      {/* text-protection scrim: darker on the left where the copy sits */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 42%, rgba(0,0,0,0.42) 72%, rgba(0,0,0,0.5) 100%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 35%)", zIndex: 1, pointerEvents: "none" }} />
      {/* gold hairline frame accent */}
      <div style={{ position: "absolute", inset: "20px", border: "1px solid rgba(198,167,94,0.18)", pointerEvents: "none", zIndex: 2 }} />

      <div style={{ position: "relative", zIndex: 3, maxWidth: 1240, margin: "0 auto", padding: "200px clamp(24px, 5vw, 72px) 64px" }}>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow tone="onDark">Bidasoa · Donostialdea · Gipuzkoa</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.75rem, 5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.015em", margin: "26px 0 0", color: "var(--aj-paper)" }}>
            Tu inmueble se merece algo <span style={{ fontStyle: "italic", color: "var(--aj-gold)" }}>mejor</span> que un cartel y a esperar.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7, color: "var(--text-on-dark-muted)", margin: "30px 0 0", maxWidth: 560 }}>
            Somos Aroa y Jon y hemos acompañado a propietarios a gestionar más de 25 millones de euros en patrimonio. Casi una década vendiendo en Gipuzkoa con estrategia a medida y comunicación constante.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 38 }}>
            <Button variant="primary" size="lg">Quiero que me llamen</Button>
          </div>
          <div style={{ display: "flex", gap: 64, marginTop: 64, paddingTop: 36, borderTop: "1px solid rgba(198,167,94,0.25)", maxWidth: 540 }}>
            <Stat value="+25M€" label="Patrimonio gestionado" tone="onDark" />
            <Stat value="Galardonado" label="Premios Century 21" tone="onDark" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Aroa & Jon — Landing UI kit: Pain points + Promise */
/* design-system components are read at render time so load order can't break them */

const PAINS = [
  ["01", "Quieres vender pero no sabes a dónde irte", "Tienes claro que quieres vender, pero no qué viene después. Ese miedo a quedarte en el aire te paraliza."],
  ["02", "No conoces el proceso y te da miedo meter la pata", "Documentación, plazos, contratos, impuestos… Nadie te ha explicado cómo funciona esto de verdad."],
  ["03", "Crees que una inmobiliaria te costará más de lo que da", "La comisión te parece alta. Pero una buena estrategia no es un gasto — determina cuánto metes en el bolsillo."],
  ["04", "Lo has intentado solo y no llega nadie", "Publicaste el inmueble, fotos del móvil, semanas esperando. Vender bien no es colgar un anuncio."],
  ["05", "Ya trabajaste con una inmobiliaria y no funcionó", "Mucho al principio. Luego silencio. Tú llamando y ellos sin respuestas. El inmueble seguía igual."],
];

function Pain() {
  const { Eyebrow, PillarCard } = window.AroaJonDesignSystem_6ad0b0;
  return (
    <section style={{ background: "var(--surface-canvas)", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <Eyebrow>¿Te suena?</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.12, margin: "22px 0 0", color: "var(--text-heading)" }}>
            Si coincides con alguna de estas situaciones, <span style={{ fontStyle: "italic", color: "var(--aj-gold)" }}>sigue leyendo</span>.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "44px 56px" }}>
          {PAINS.map(([i, t, b]) => (
            <PillarCard key={i} index={i} title={t}>{b}</PillarCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandPromise() {
  const { Eyebrow, PillarCard, Quote } = window.AroaJonDesignSystem_6ad0b0;
  const pillars = [
    ["01", "Estrategia a medida", "Diseñamos un plan específico para tu inmueble. No hay dos propiedades iguales y no hay dos estrategias iguales."],
    ["02", "Comunicación constante", "Sabes lo que pasa con tu venta sin tener que preguntar. Nosotros te lo contamos."],
    ["03", "Confianza operativa", "Procesos claros, documentación en orden y sin sorpresas de última hora. De principio a fin."],
  ];
  return (
    <section style={{ background: "var(--aj-black)", color: "var(--text-on-dark)", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 72, alignItems: "stretch", marginBottom: 88 }}>
          <div style={{ alignSelf: "center" }}>
            <Eyebrow tone="onDark">Así es como trabajamos nosotros</Eyebrow>
            <div style={{ marginTop: 28 }}>
              <Quote tone="dark" cite="Aroa & Jon · Servicios Inmobiliarios">
                Trabajamos en exclusiva. No porque sea una condición que imponemos, sino porque es la única manera de hacer las cosas bien.
              </Quote>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: "var(--text-on-dark-muted)", margin: "32px 0 22px" }}>
              No somos una inmobiliaria tradicional. Nos hemos formado, nos seguimos formando y adaptamos nuestras estrategias al mercado de hoy — porque el mercado cambia y nosotros cambiamos con él.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: "var(--text-on-dark-muted)", margin: 0 }}>
              Cuando cogemos tu inmueble tenemos dos objetivos: que no tengas que preocuparte por nada y que, cuando llegues a notaría, hayas sacado el mejor precio posible. No te prometemos magia. Te prometemos trabajo y método.
            </p>
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", minHeight: 460 }}>
            {/* soft glow to lift the cutout off the black */}
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "82%", height: "70%", background: "radial-gradient(60% 60% at 50% 80%, rgba(198,167,94,0.16) 0%, rgba(198,167,94,0) 70%)", pointerEvents: "none" }} />
            {/* gold hairline baseline frame */}
            <div style={{ position: "absolute", inset: "8% 8% 0 8%", borderTop: "1px solid rgba(198,167,94,0.28)", borderLeft: "1px solid rgba(198,167,94,0.28)", borderRight: "1px solid rgba(198,167,94,0.28)", pointerEvents: "none" }} />
            <img src={(window.__resources && window.__resources.friendly) || "../../assets/aroa-jon-friendly.png"} alt="Aroa y Jon · Servicios Inmobiliarios"
                 style={{ position: "relative", width: "100%", maxWidth: 480, height: "auto", display: "block", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.55))" }} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
          {pillars.map(([i, t, b]) => (
            <PillarCard key={i} index={i} title={t} tone="dark">{b}</PillarCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Aroa & Jon — Landing UI kit: Reviews + Personal Shopper + Contact + Footer */
/* design-system components are read at render time so load order can't break them */

const REVIEWS = [
  ["Iker Aranburu", "Vendimos la casa antes de publicarla en ningún portal inmobiliario y todo gracias al buen hacer de Jon y Aroa. Profesionalidad, claridad y fluidez informativa. Os recomendaremos sin ninguna duda."],
  ["Rafa Munduate", "¡Qué equipazo! Ha sido un trabajo duro y con mucho esfuerzo por ambas partes. Comunicación, empatía, eficacia… y podría seguir añadiendo."],
  ["Ricardo Irazoki", "Jon y Aroa marcan la diferencia con el resto de las inmobiliarias convencionales. Un gran marketing acompañado de una excelente gestión y asesoramiento. Así da gusto."],
  ["Silvia Bailador", "Mi experiencia fue fantástica. Desde el primer momento conectamos y supieron entender lo que necesitábamos. Sin dudarlo, siempre."],
];

function Reviews() {
  const { Eyebrow, ReviewCard } = window.AroaJonDesignSystem_6ad0b0;
  return (
    <section style={{ background: "var(--surface-canvas)", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <Eyebrow>Reseñas reales de Google</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.12, margin: "22px 0 14px", color: "var(--text-heading)" }}>
            No hace falta que lo digamos <span style={{ fontStyle: "italic", color: "var(--aj-gold)" }}>nosotros</span>.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "var(--text-body)", margin: 0 }}>
            Sin editar y sin filtrar. Preferimos que lo cuenten ellos.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {REVIEWS.map(([n, t]) => <ReviewCard key={n} name={n} stars={5}>{t}</ReviewCard>)}
        </div>
      </div>
    </section>
  );
}

function PersonalShopper() {
  const { Badge, Button } = window.AroaJonDesignSystem_6ad0b0;
  const list = [
    "Búsqueda activa dentro y fuera de portales",
    "Solo visitas inmuebles que ya hemos filtrado para ti",
    "Negociamos para que compres al mejor precio posible",
    "Contigo hasta que tengas las llaves en la mano",
  ];
  return (
    <section style={{ background: "var(--aj-cream)", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <img src={(window.__resources && window.__resources.street) || "../../assets/aroa-jon-street.jpg"} alt="Aroa y Jon en Gipuzkoa" style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 14, border: "1px solid rgba(255,255,255,0.4)", pointerEvents: "none" }} />
        </div>
        <div>
          <Badge variant="solid">Servicio Personal Shopper</Badge>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.14, margin: "24px 0 0", color: "var(--text-heading)" }}>
            ¿Buscas comprar en Gipuzkoa y no encuentras lo que necesitas?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7, color: "var(--text-body)", margin: "22px 0 0" }}>
            Nosotros buscamos por ti. Escuchamos lo que necesitas — y también lo que todavía no sabes que necesitas. Filtramos, seleccionamos y solo te presentamos lo que tiene sentido. También fuera de los portales, donde otros no miran.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
            {list.map((x) => (
              <li key={x} style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-heading)", display: "flex", gap: 14, alignItems: "baseline" }}>
                <span style={{ color: "var(--aj-gold-deep)", fontFamily: "var(--font-serif)", fontSize: 18 }}>→</span>{x}
              </li>
            ))}
          </ul>
          <Button variant="dark" size="lg">Quiero más información</Button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { Eyebrow, Quote } = window.AroaJonDesignSystem_6ad0b0;
  return (
    <section id="contacto" style={{ background: "var(--aj-black)", color: "var(--text-on-dark)", padding: "var(--section-y) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <div>
          <Eyebrow tone="onDark">Contacto</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.12, margin: "22px 0 28px", color: "var(--aj-paper)" }}>
            El primer paso es una llamada. Sin compromiso, sin prisa.
          </h2>
          <Quote tone="dark" size="md">
            Cuéntanos tu situación. Te decimos con honestidad si somos la opción adecuada para ti — y si lo somos, cómo lo haríamos.
          </Quote>
          <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 22 }}>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--aj-gold-soft)", marginBottom: 6 }}>Teléfono</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, color: "var(--aj-paper)" }}>+34 637 33 89 03</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-on-dark-muted)", marginTop: 4 }}>Lunes a viernes · 9h – 19h</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--aj-gold-soft)", marginBottom: 6 }}>Email</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, color: "var(--aj-paper)" }}>info@ajinmobiliaria.com</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-on-dark-muted)", marginTop: 4 }}>Respondemos en menos de 24h</div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const { Button } = window.AroaJonDesignSystem_6ad0b0;
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return (
      <div style={{ background: "var(--surface-inverse-2)", border: "1px solid rgba(198,167,94,0.3)", padding: 48, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 420 }}>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: 30, color: "var(--aj-gold)", marginBottom: 16 }}>Mensaje recibido.</div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "var(--text-on-dark-muted)", margin: 0 }}>
          Aroa o Jon te contactarán en menos de 24 horas.
        </p>
      </div>
    );
  }
  return (
    <form style={{ background: "var(--surface-inverse-2)", border: "1px solid rgba(198,167,94,0.22)", padding: 40, display: "flex", flexDirection: "column", gap: 20 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <DarkField label="Nombre" />
        <DarkField label="Teléfono" />
      </div>
      <DarkField label="Email" />
      <DarkField label="¿Qué necesitas?" as="select" options={["Quiero vender mi propiedad", "Información sobre Personal Shopper", "Valoración gratuita de mi inmueble", "Otra consulta"]} />
      <DarkField label="Cuéntanos algo más (opcional)" as="textarea" rows={3} />
      <Button variant="primary" size="lg" fullWidth as="button">Enviar</Button>
    </form>
  );
}

/* dark-mode field variant for the contact form */
function DarkField({ label, as = "input", options = [], rows = 4 }) {
  const [f, setF] = React.useState(false);
  const ctrl = {
    fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--aj-paper)",
    background: "rgba(255,255,255,0.03)", border: "1px solid " + (f ? "var(--aj-gold)" : "rgba(198,167,94,0.28)"),
    padding: "13px 15px", width: "100%", boxSizing: "border-box", outline: "none", borderRadius: 0,
  };
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--aj-gold-soft)", marginBottom: 9 }}>{label}</span>
      {as === "textarea" ? <textarea rows={rows} style={{ ...ctrl, resize: "vertical" }} onFocus={() => setF(true)} onBlur={() => setF(false)} />
        : as === "select" ? <select style={ctrl} onFocus={() => setF(true)} onBlur={() => setF(false)}>{options.map((o) => <option key={o}>{o}</option>)}</select>
        : <input style={ctrl} onFocus={() => setF(true)} onBlur={() => setF(false)} />}
    </label>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--aj-black)", borderTop: "1px solid rgba(198,167,94,0.22)", color: "var(--text-on-dark-muted)", padding: "44px clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        <img src={(window.__resources && window.__resources.logoWordmark) || "../../assets/logo-wordmark-gold.png"} alt="Aroa & Jon · Servicios Inmobiliarios" style={{ height: 44, width: "auto", display: "block" }} />
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.06em" }}>© 2026 · Servicios Inmobiliarios · Bidasoa · Donostialdea · Gipuzkoa</span>
      </div>
    </footer>
  );
}


/* Render the full page from the last-loaded module so every section is defined. */
function LandingApp() {
  return (
    <React.Fragment>
      <Hero />
      <Pain />
      <BrandPromise />
      <Reviews />
      <PersonalShopper />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

/* Single guarded mount — all components live in this one scope */
(function mountLanding() {
  const ns = window.AroaJonDesignSystem_6ad0b0;
  const ready = ns && ns.Button && ns.Eyebrow && ns.ReviewCard && ns.PillarCard && ns.Quote && ns.Stat && ns.Badge;
  if (!ready) { return setTimeout(mountLanding, 30); }
  if (window.__ajMounted) return;
  window.__ajMounted = true;
  ReactDOM.createRoot(document.getElementById("root")).render(<LandingApp />);
})();
