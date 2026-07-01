/* Aroa & Jon — Landing UI kit: Header + Hero (dark) */

const HERO_VIDEOS = [
  (window.__resources && window.__resources.heroVideo) || "../../assets/hero.mp4",
  "../../assets/hero2.mp4",
  "../../assets/hero3.mp4",
];

function useIsMobile() {
  const [mobile, setMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
}

function Logo() {
  return (
    <a href="#" style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
      <img src="../../assets/logo-dorado-transparente.png"
           alt="Aroa & Jon · Servicios Inmobiliarios"
           style={{ height: 88, width: "auto", display: "block" }} />
    </a>
  );
}

function Header() {
  const { Button } = window.AroaJonDesignSystem_6ad0b0;
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const items = [
    ["Quiénes somos", "#nosotros"],
    ["Inmuebles", "#cartera"],
    ["Personal Shopper", "#personal-shopper"],
  ];

  const linkStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: 12.5,
    fontWeight: 500,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--text-on-dark)",
    textDecoration: "none",
    opacity: 0.82,
  };

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isMobile ? "10px 24px" : "12px clamp(24px, 5vw, 72px)",
      background: open ? "rgba(10,10,10,0.98)" : "rgba(10,10,10,0.72)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(198,167,94,0.14)",
      transition: "background 0.3s",
    }}>
      <Logo />

      {/* Desktop nav */}
      {!isMobile && (
        <nav style={{ display: "flex", gap: 38 }}>
          {items.map(([label, href]) => (
            <a key={label} href={href} style={linkStyle}
               onMouseEnter={(e) => { e.currentTarget.style.color = "var(--aj-gold)"; e.currentTarget.style.opacity = "1"; }}
               onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-on-dark)"; e.currentTarget.style.opacity = "0.82"; }}>
              {label}
            </a>
          ))}
        </nav>
      )}

      {/* Desktop CTA */}
      {!isMobile && (
        <Button variant="primary" size="sm" onClick={function() { window.open("https://wa.me/34637338903", "_blank"); }}>Quiero que me llamen</Button>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
          <span style={{ display: "block", width: open ? 24 : 24, height: 2, background: "var(--aj-gold)", transition: "transform 0.25s, opacity 0.25s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 16, height: 2, background: "var(--aj-gold)", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: open ? 24 : 20, height: 2, background: "var(--aj-gold)", transition: "transform 0.25s, opacity 0.25s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      )}

      {/* Mobile dropdown */}
      {isMobile && open && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(198,167,94,0.2)",
          padding: "24px 24px 32px",
          display: "flex", flexDirection: "column", gap: 0,
        }}>
          {items.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
               style={{ ...linkStyle, padding: "14px 0", borderBottom: "1px solid rgba(198,167,94,0.1)", display: "block", opacity: 1, fontSize: 13 }}>
              {label}
            </a>
          ))}
          <div style={{ marginTop: 24 }}>
            <Button variant="primary" size="sm" onClick={function() { window.open("https://wa.me/34637338903", "_blank"); }}>Quiero que me llamen</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function VideoCarousel() {
  const [current, setCurrent] = React.useState(0);
  const [next, setNext] = React.useState(null);
  const [fading, setFading] = React.useState(false);
  const poster = (window.__resources && window.__resources.plaza) || "../../assets/aroa-jon-plaza.jpg";

  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextIdx = (current + 1) % HERO_VIDEOS.length;
      setNext(nextIdx);
      setFading(true);
      setTimeout(() => {
        setCurrent(nextIdx);
        setNext(null);
        setFading(false);
      }, 900);
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

  const videoBase = {
    position: "absolute", inset: 0,
    width: "100%", height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      {/* Current video */}
      <video key={`v-${current}`} autoPlay muted loop playsInline
             style={{ ...videoBase, zIndex: 0, opacity: fading ? 0 : 1, transition: "opacity 0.9s ease" }}>
        <source src={HERO_VIDEOS[current]} type="video/mp4" />
      </video>
      {/* Next video fading in */}
      {next !== null && (
        <video key={`v-next-${next}`} autoPlay muted loop playsInline
               style={{ ...videoBase, zIndex: 0, opacity: fading ? 1 : 0, transition: "opacity 0.9s ease" }}>
          <source src={HERO_VIDEOS[next]} type="video/mp4" />
        </video>
      )}
      {/* Dots indicator */}
      <div style={{ position: "absolute", bottom: 28, right: 32, display: "flex", gap: 8, zIndex: 4 }}>
        {HERO_VIDEOS.map((_, i) => (
          <button key={i} onClick={() => { setCurrent(i); setNext(null); setFading(false); }}
                  aria-label={`Vídeo ${i + 1}`}
                  style={{ width: i === current ? 22 : 7, height: 7, borderRadius: 4, border: "none", cursor: "pointer", padding: 0,
                           background: i === current ? "var(--aj-gold)" : "rgba(255,255,255,0.4)",
                           transition: "all 0.35s" }} />
        ))}
      </div>
    </>
  );
}

function Hero() {
  const { Button, Eyebrow, Stat } = window.AroaJonDesignSystem_6ad0b0;
  const isMobile = useIsMobile();

  return (
    <section id="inicio" style={{ position: "relative", background: "var(--aj-black)", color: "var(--text-on-dark)", overflow: "hidden", minHeight: isMobile ? "100svh" : 760 }}>
      <VideoCarousel />

      {/* scrims */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.28) 72%, rgba(0,0,0,0.38) 100%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 35%)", zIndex: 1, pointerEvents: "none" }} />
      {/* gold frame */}
      <div style={{ position: "absolute", inset: "20px", border: "1px solid rgba(198,167,94,0.18)", pointerEvents: "none", zIndex: 2 }} />

      <div style={{ position: "relative", zIndex: 3, maxWidth: 1240, margin: "0 auto", padding: isMobile ? "120px 24px 80px" : "200px clamp(24px, 5vw, 72px) 64px" }}>
        <div style={{ maxWidth: isMobile ? "100%" : 720 }}>
          <Eyebrow tone="onDark">Bidasoa · Donostialdea · Gipuzkoa</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: isMobile ? "clamp(2rem, 8vw, 2.75rem)" : "clamp(2.75rem, 5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.015em", margin: "26px 0 0", color: "var(--aj-paper)" }}>
            Tu inmueble se merece algo <span style={{ fontStyle: "italic", color: "var(--aj-gold)" }}>mejor</span> que un anuncio en un portal inmobiliario y a esperar.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: isMobile ? 15 : 17, lineHeight: 1.7, color: "var(--text-on-dark-muted)", margin: "30px 0 0", maxWidth: 560 }}>
            Somos Aroa y Jon y hemos acompañado a propietarios a gestionar más de 25 millones de euros en patrimonio. Casi una década vendiendo en Gipuzkoa con estrategia a medida y comunicación constante.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 38 }}>
            <Button variant="primary" size={isMobile ? "md" : "lg"} onClick={function() { window.open("https://wa.me/34637338903", "_blank"); }}>Quiero que me llamen</Button>
          </div>
          <div style={{ display: "flex", gap: isMobile ? 32 : 64, marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(198,167,94,0.25)", maxWidth: 540 }}>
            <Stat value="+25M€" label="Patrimonio gestionado" tone="onDark" />
            <Stat value="Galardonado" label="Premios Century 21" tone="onDark" />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Logo, Header, Hero, useIsMobile });
