import React from "react";

/**
 * Aroa & Jon — Stat / credential
 * A large serif figure over a wide-tracked label. Used for "+25M€ · Patrimonio gestionado".
 */
export function Stat({ value, label, tone = "ink", align = "left" }) {
  const onDark = tone === "onDark";
  return (
    <div style={{ textAlign: align }}>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.25rem, 3.4vw, 3.25rem)",
          fontWeight: 500,
          lineHeight: 1,
          color: onDark ? "var(--aj-gold)" : "var(--aj-ink)",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginTop: 12,
          color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
