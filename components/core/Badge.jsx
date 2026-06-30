import React from "react";

/**
 * Aroa & Jon — Badge
 * Small squared label. Outline gold by default; solid + soft variants.
 */
export function Badge({ children, variant = "outline", ...rest }) {
  const variants = {
    outline: { background: "transparent", color: "var(--aj-gold-deep)", border: "1px solid var(--aj-gold)" },
    solid: { background: "var(--aj-gold)", color: "var(--aj-ink)", border: "1px solid var(--aj-gold)" },
    soft: { background: "var(--aj-gold-tint)", color: "var(--aj-gold-deep)", border: "1px solid transparent" },
    dark: { background: "var(--aj-ink)", color: "var(--aj-gold-soft)", border: "1px solid var(--aj-ink)" },
  };
  return (
    <span
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        padding: "7px 14px",
        borderRadius: "var(--radius-none)",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        lineHeight: 1,
        ...variants[variant],
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
