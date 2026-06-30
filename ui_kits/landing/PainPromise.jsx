/* Aroa & Jon — Landing UI kit: Pains + Promise (fusionados) */

function useIsMobilePP() {
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

var PAINS = [
  "Quieres vender pero no sabes a dónde irte",
  "No conoces el proceso y te da miedo meter la pata",
  "Crees que una inmobiliaria te costará más de lo que da",
  "Lo has intentado solo y no llega nadie",
  "Ya trabajaste con una inmobiliaria y no funcionó",
];

var PILLARS = [
  ["01", "Estrategia a medida", "Diseñamos un plan específico para tu inmueble. No hay dos propiedades iguales y no hay dos estrategias iguales."],
  ["02", "Comunicación constante", "Sabes lo que pasa con tu venta sin tener que preguntar. Nosotros te lo contamos."],
  ["03", "Confianza operativa", "Procesos claros, documentación en orden y sin sorpresas de última hora. De principio a fin."],
];

var sectionLabel = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--aj-gold)",
  marginBottom: 28,
  display: "block",
};

function BrandPromise() {
  var isMobile = useIsMobilePP();

  return (
    <section id="nosotros" style={{ background: "var(--surface-canvas)", color: "var(--text-heading)", padding: "clamp(48px, 6vw, 72px) clamp(24px, 5vw, 72px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Foto: en móvil va antes del bloque ¿Te suena? */}
        {isMobile ? (
          <div style={{ position: "relative", overflow: "hidden", marginBottom: 36 }}>
            <div style={{ position: "absolute", inset: 10, border: "1px solid rgba(198,167,94,0.3)", pointerEvents: "none", zIndex: 1 }} />
            <img src="../../assets/aroa-jon-street.jpg" alt="Aroa y Jon" style={{ width: "100%", height: 280, objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>
        ) : null}

        {/* BLOQUE 1: ¿Te suena? + dolores */}
        <div style={{ marginBottom: isMobile ? 48 : 64 }}>
          <span style={sectionLabel}>¿Te suena?</span>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)", gap: isMobile ? 0 : "0 40px" }}>
            {PAINS.map(function(text, i) {
              return (
                <div key={i} style={{ borderTop: "1px solid rgba(198,167,94,0.3)", paddingTop: 20, paddingBottom: 8 }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.82rem, 1.3vw, 0.9rem)", fontWeight: 300, lineHeight: 1.6, color: "var(--text-heading)" }}>{text}</div>
                </div>
              );
            })}
          </div>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", fontStyle: "italic", color: "var(--aj-black)", marginTop: 32, marginBottom: 0 }}>
            Si coincides con alguna de estas situaciones, sigue leyendo.
          </p>
        </div>

        {/* BLOQUE 2: texto izquierda + foto derecha */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "center", marginBottom: isMobile ? 36 : 48 }}>
          <div>
            <span style={sectionLabel}>Así es como trabajamos nosotros</span>
            <blockquote style={{ margin: "0 0 24px", padding: "0 0 0 20px", borderLeft: "2px solid var(--aj-gold)", fontFamily: "var(--font-serif)", fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.65, color: "var(--aj-black)", fontStyle: "italic" }}>
              "Trabajamos en exclusiva. No porque sea una condición que imponemos, sino porque es la única manera de hacer las cosas bien."
              <footer style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(10,8,5,0.4)", marginTop: 12 }}>Aroa & Jon · Servicios Inmobiliarios</footer>
            </blockquote>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15.5, lineHeight: 1.75, color: "var(--text-body)", margin: "0 0 18px", textAlign: "justify" }}>
              No somos una inmobiliaria tradicional. Nos hemos formado, nos seguimos formando y adaptamos nuestras estrategias al mercado de hoy — porque el mercado cambia y nosotros cambiamos con él.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15.5, lineHeight: 1.75, color: "var(--text-body)", margin: 0, textAlign: "justify" }}>
              Cuando cogemos tu inmueble tenemos dos objetivos: que no tengas que preocuparte por nada y que, cuando llegues a notaría, hayas sacado el mejor precio posible. No te prometemos magia. Te prometemos trabajo y método.
            </p>
          </div>
          {isMobile ? null : (
            <div style={{ position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 10, border: "1px solid rgba(198,167,94,0.3)", pointerEvents: "none", zIndex: 1 }} />
              <img src="../../assets/aroa-jon-street.jpg" alt="Aroa y Jon" style={{ width: "100%", height: 440, objectFit: "cover", objectPosition: "center", display: "block" }} />
            </div>
          )}
        </div>

        {/* BLOQUE 3: pilares con números grandes */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 36 : 52 }}>
          {PILLARS.map(function(p) {
            return (
              <div key={p[0]}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 5.5vw, 4.5rem)", fontWeight: 500, lineHeight: 1, color: "rgba(198,167,94,0.18)", marginBottom: 6, userSelect: "none" }}>{p[0]}</div>
                <div style={{ borderTop: "2px solid var(--aj-gold)", paddingTop: 18 }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 500, fontStyle: "italic", color: "var(--aj-black)", marginBottom: 12, lineHeight: 1.3 }}>{p[1]}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: "rgba(10,8,5,0.62)" }}>{p[2]}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

Object.assign(window, { BrandPromise: BrandPromise });
