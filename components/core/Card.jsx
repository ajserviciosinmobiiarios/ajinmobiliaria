import React from "react";

/**
 * Aroa & Jon — Card
 * Squared surface. tone: light (white on paper) or dark (raised on black).
 * Optional gold top rule for emphasis.
 */
export function Card({ children, tone = "light", elevation = "flat", topRule = false, padding = 32, style = {}, ...rest }) {
  const tones = {
    light: { background: "var(--surface-card)", color: "var(--text-body)" },
    paper: { background: "var(--surface-canvas)", color: "var(--text-body)" },
    cream: { background: "var(--aj-cream)", color: "var(--aj-ink)" },
    dark: { background: "var(--surface-inverse-2)", color: "var(--text-on-dark)" },
  };
  const elevations = {
    flat: { border: "1px solid var(--line-soft)", boxShadow: "none" },
    flatDark: { border: "1px solid rgba(198,167,94,0.22)", boxShadow: "none" },
    card: { border: "1px solid transparent", boxShadow: "var(--shadow-card)" },
    lift: { border: "1px solid transparent", boxShadow: "var(--shadow-lift)" },
  };
  const el = tone === "dark" && elevation === "flat" ? elevations.flatDark : elevations[elevation];
  return (
    <div
      style={{
        borderRadius: "var(--radius-none)",
        padding,
        boxSizing: "border-box",
        borderTop: topRule ? "2px solid var(--aj-gold)" : el.border,
        ...tones[tone],
        ...el,
        ...(topRule ? { borderTop: "2px solid var(--aj-gold)" } : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
