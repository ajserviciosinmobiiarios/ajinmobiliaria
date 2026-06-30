/* Aroa & Jon — Auth UI kit: client-portal login (split editorial layout) */
const { Button, Eyebrow } = window.AroaJonDesignSystem_6ad0b0;

function AuthField({ label, type = "text", placeholder, autoComplete }) {
  const [f, setF] = React.useState(false);
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 9 }}>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onFocus={() => setF(true)}
        onBlur={() => setF(false)}
        style={{
          fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--aj-ink)",
          background: "var(--aj-white)", border: "1px solid " + (f ? "var(--aj-gold)" : "var(--line-soft)"),
          padding: "14px 16px", width: "100%", boxSizing: "border-box", outline: "none", borderRadius: 0,
        }}
      />
    </label>
  );
}

function Login() {
  const [sent, setSent] = React.useState(false);
  const [remember, setRemember] = React.useState(true);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh", background: "var(--surface-canvas)" }}>
      {/* ---- Left: brand panel (black, photographic) ---- */}
      <aside style={{ position: "relative", background: "var(--aj-black)", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "48px clamp(32px, 4vw, 64px)" }}>
        <img src="../../assets/aroa-jon-plaza.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.32 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.78) 100%)" }} />
        <div style={{ position: "absolute", inset: 22, border: "1px solid rgba(198,167,94,0.22)", pointerEvents: "none" }} />

        {/* logo */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <img src="../../assets/logo-wordmark-gold.png" alt="Aroa & Jon · Servicios Inmobiliarios" style={{ height: 60, width: "auto", display: "block" }} />
        </div>

        {/* editorial line */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 420 }}>
          <Eyebrow tone="onDark">Área de clientes</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3vw, 2.75rem)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.01em", color: "var(--aj-paper)", margin: "22px 0 0" }}>
            El seguimiento de tu venta, <span style={{ fontStyle: "italic", color: "var(--aj-gold)" }}>siempre a mano</span>.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7, color: "var(--text-on-dark-muted)", margin: "18px 0 0" }}>
            Documentación, visitas, ofertas y cada paso del proceso — en un solo sitio. Como siempre: sabes lo que pasa sin tener que preguntar.
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 2, fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.06em", color: "var(--text-on-dark-muted)" }}>
          Bidasoa · Donostialdea · Gipuzkoa
        </div>
      </aside>

      {/* ---- Right: form ---- */}
      <main style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px clamp(24px, 4vw, 80px)" }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          {sent ? (
            <div>
              <Eyebrow>Revisa tu correo</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 500, lineHeight: 1.15, color: "var(--text-heading)", margin: "18px 0 14px" }}>Te hemos enviado un enlace.</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7, color: "var(--text-body)", margin: "0 0 28px" }}>
                Entra desde el enlace para acceder a tu área de cliente. Si no lo ves, revisa la carpeta de spam.
              </p>
              <Button variant="text" onClick={() => setSent(false)}>Volver a iniciar sesión</Button>
            </div>
          ) : (
            <React.Fragment>
              <Eyebrow>Bienvenido de nuevo</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 34, fontWeight: 500, lineHeight: 1.12, color: "var(--text-heading)", margin: "18px 0 6px" }}>Iniciar sesión</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 34px" }}>
                Accede al seguimiento de tu inmueble.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <AuthField label="Email" type="email" placeholder="tu@email.com" autoComplete="email" />
                <div>
                  <AuthField label="Contraseña" type="password" placeholder="••••••••" autoComplete="current-password" />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", userSelect: "none" }} onClick={() => setRemember((r) => !r)}>
                      <span style={{ width: 18, height: 18, border: "1px solid " + (remember ? "var(--aj-gold)" : "var(--line-soft)"), background: remember ? "var(--aj-gold)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", transition: "all var(--t-fast)" }}>
                        {remember && <span style={{ color: "var(--aj-ink)", fontSize: 12, lineHeight: 1 }}>✓</span>}
                      </span>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)" }}>Recordarme</span>
                    </label>
                    <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--aj-gold-deep)", textDecoration: "none", borderBottom: "1px solid var(--aj-gold)", paddingBottom: 2 }}>¿Olvidaste tu contraseña?</a>
                  </div>
                </div>
                <Button variant="primary" size="lg" fullWidth as="button">Entrar</Button>
              </form>

              <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "30px 0" }}>
                <span style={{ flex: 1, height: 1, background: "var(--line-soft)" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>o</span>
                <span style={{ flex: 1, height: 1, background: "var(--line-soft)" }} />
              </div>

              <Button variant="outline" size="lg" fullWidth onClick={() => setSent(true)}>Recibir un enlace de acceso</Button>

              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "var(--text-muted)", textAlign: "center", margin: "32px 0 0" }}>
                ¿Aún no eres cliente?{" "}
                <a href="#" style={{ color: "var(--aj-ink)", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--aj-gold)", paddingBottom: 2 }}>Quiero que me llamen</a>
              </p>
            </React.Fragment>
          )}
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { Login });
