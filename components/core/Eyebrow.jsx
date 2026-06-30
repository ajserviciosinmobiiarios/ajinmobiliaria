import React from "react";

/**
 * Aroa & Jon — Eyebrow
 * Wide-tracked uppercase overline. Sits above headings; gold by default.
 */
export function Eyebrow({ children, tone = "gold", as = "span", ...rest }) {
  const colors = {
    gold: "var(--aj-gold)",
    ink: "var(--aj-ink)",
    muted: "var(--text-muted)",
    onDark: "var(--aj-gold-soft)",
  };
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-eyebrow)",
        fontWeight: 600,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: colors[tone],
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
