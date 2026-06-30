import React from "react";

/**
 * Aroa & Jon — Button
 * Editorial, squared. Variants: primary (gold), dark, outline, text (underline CTA), whatsapp.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  onClick,
  ...rest
}) {
  const pad = {
    sm: "10px 18px",
    md: "15px 28px",
    lg: "19px 36px",
  }[size];
  const fz = { sm: 12, md: 13, lg: 14 }[size];

  const base = {
    fontFamily: "var(--font-sans)",
    fontSize: fz,
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: pad,
    border: "1px solid transparent",
    borderRadius: "var(--radius-none)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--t-base), color var(--t-base), border-color var(--t-base), transform var(--t-fast)",
    opacity: disabled ? 0.45 : 1,
    boxSizing: "border-box",
  };

  const variants = {
    primary: { background: "var(--aj-gold)", color: "var(--aj-ink)", borderColor: "var(--aj-gold)" },
    dark: { background: "var(--aj-ink)", color: "var(--aj-paper)", borderColor: "var(--aj-ink)" },
    outline: { background: "transparent", color: "var(--aj-ink)", borderColor: "var(--aj-ink)" },
    text: {
      background: "transparent",
      color: "var(--aj-ink)",
      borderColor: "transparent",
      borderBottom: "1px solid var(--aj-gold)",
      borderRadius: 0,
      padding: "0 0 4px",
      letterSpacing: "0.16em",
    },
    whatsapp: { background: "#25D366", color: "#FFFFFF", borderColor: "#25D366" },
  };

  const style = { ...base, ...variants[variant] };

  const handleEnter = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === "primary") el.style.background = "var(--aj-gold-deep)";
    else if (variant === "dark") el.style.background = "var(--aj-graphite)";
    else if (variant === "outline") { el.style.background = "var(--aj-ink)"; el.style.color = "var(--aj-paper)"; }
    else if (variant === "whatsapp") { el.style.background = "#1EBE57"; el.style.borderColor = "#1EBE57"; }
    else if (variant === "text") el.style.borderBottomColor = "var(--aj-ink)";
  };
  const handleLeave = (e) => {
    const el = e.currentTarget;
    Object.assign(el.style, variants[variant]);
    el.style.background = variants[variant].background;
    el.style.color = variants[variant].color;
  };

  const Tag = href ? "a" : as;
  return (
    <Tag
      style={style}
      href={href}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
