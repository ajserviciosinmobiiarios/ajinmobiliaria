import React from "react";

/**
 * Aroa & Jon — Quote
 * Large italic editorial pull-quote with optional attribution.
 */
export function Quote({ children, cite, tone = "light", size = "lg" }) {
  const onDark = tone === "dark";
  const fs = size === "lg" ? "var(--fs-quote)" : "1.5rem";
  return (
    <figure style={{ margin: 0 }}>
      <blockquote
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: fs,
          fontStyle: "italic",
          fontWeight: 400,
          lineHeight: 1.35,
          margin: 0,
          color: onDark ? "var(--text-on-dark)" : "var(--text-heading)",
        }}
      >
        <span style={{ color: "var(--aj-gold)" }}>“</span>
        {children}
        <span style={{ color: "var(--aj-gold)" }}>”</span>
      </blockquote>
      {cite && (
        <figcaption style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 22, color: onDark ? "var(--aj-gold-soft)" : "var(--text-muted)" }}>
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
