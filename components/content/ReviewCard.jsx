import React from "react";

/**
 * Aroa & Jon — ReviewCard
 * Google review card: gold stars, quote, name + source. Squared, hairline.
 */
export function ReviewCard({ name, source = "Google", stars = 5, children, tone = "light" }) {
  const onDark = tone === "dark";
  return (
    <div
      style={{
        background: onDark ? "var(--surface-inverse-2)" : "var(--surface-card)",
        border: "1px solid " + (onDark ? "rgba(198,167,94,0.22)" : "var(--line-soft)"),
        borderRadius: "var(--radius-none)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        boxSizing: "border-box",
        height: "100%",
      }}
    >
      <div style={{ color: "var(--aj-gold)", fontSize: 15, letterSpacing: "0.18em" }} aria-label={stars + " de 5 estrellas"}>
        {"★★★★★".slice(0, stars)}
        <span style={{ color: onDark ? "rgba(198,167,94,0.25)" : "var(--line-soft)" }}>{"★★★★★".slice(stars)}</span>
      </div>
      <p style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 15.5, lineHeight: 1.65, margin: 0, color: onDark ? "var(--text-on-dark)" : "var(--text-heading)" }}>
        {children}
      </p>
      <div style={{ marginTop: "auto", paddingTop: 6, display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: onDark ? "var(--text-on-dark)" : "var(--text-heading)" }}>{name}</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>· {source}</span>
      </div>
    </div>
  );
}
