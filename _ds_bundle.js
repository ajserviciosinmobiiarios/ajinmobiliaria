/* @ds-bundle: {"format":3,"namespace":"AroaJonDesignSystem_6ad0b0","components":[{"name":"PillarCard","sourcePath":"components/content/PillarCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"ReviewCard","sourcePath":"components/content/ReviewCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"}],"sourceHashes":{"components/content/PillarCard.jsx":"cbd2ae9dd627","components/content/Quote.jsx":"bd7e54036b2f","components/content/ReviewCard.jsx":"6e64da686235","components/core/Badge.jsx":"3460b3b4e2c2","components/core/Button.jsx":"7327c354c8bf","components/core/Card.jsx":"5af9c281f81e","components/core/Eyebrow.jsx":"e13ffee86ce8","components/core/Stat.jsx":"707620615547","components/forms/Field.jsx":"ce687be671a8","ui_kits/auth/Login.jsx":"b0778565463d","ui_kits/landing/Hero.jsx":"9362319eb397","ui_kits/landing/PainPromise.jsx":"d02acf785f21","ui_kits/landing/Sections.jsx":"cb9ee61b8d85"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AroaJonDesignSystem_6ad0b0 = window.AroaJonDesignSystem_6ad0b0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/PillarCard.jsx
try { (() => {
/**
 * Aroa & Jon — PillarCard
 * Editorial numbered feature block. Serif index number in gold, title, body.
 */
function PillarCard({
  index,
  title,
  children,
  tone = "light",
  divider = true
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: divider ? 28 : 0,
      borderTop: divider ? "1px solid " + (onDark ? "var(--line-on-dark)" : "var(--line-soft)") : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 34,
      fontWeight: 500,
      lineHeight: 1,
      color: "var(--aj-gold)",
      marginBottom: 18
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h3)",
      fontWeight: 500,
      lineHeight: 1.2,
      margin: "0 0 12px",
      color: onDark ? "var(--text-on-dark)" : "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.65,
      margin: 0,
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
/**
 * Aroa & Jon — Quote
 * Large italic editorial pull-quote with optional attribution.
 */
function Quote({
  children,
  cite,
  tone = "light",
  size = "lg"
}) {
  const onDark = tone === "dark";
  const fs = size === "lg" ? "var(--fs-quote)" : "1.5rem";
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: fs,
      fontStyle: "italic",
      fontWeight: 400,
      lineHeight: 1.35,
      margin: 0,
      color: onDark ? "var(--text-on-dark)" : "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--aj-gold)"
    }
  }, "\u201C"), children, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--aj-gold)"
    }
  }, "\u201D")), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginTop: 22,
      color: onDark ? "var(--aj-gold-soft)" : "var(--text-muted)"
    }
  }, cite));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/ReviewCard.jsx
try { (() => {
/**
 * Aroa & Jon — ReviewCard
 * Google review card: gold stars, quote, name + source. Squared, hairline.
 */
function ReviewCard({
  name,
  source = "Google",
  stars = 5,
  children,
  tone = "light"
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: onDark ? "var(--surface-inverse-2)" : "var(--surface-card)",
      border: "1px solid " + (onDark ? "rgba(198,167,94,0.22)" : "var(--line-soft)"),
      borderRadius: "var(--radius-none)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      boxSizing: "border-box",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--aj-gold)",
      fontSize: 15,
      letterSpacing: "0.18em"
    },
    "aria-label": stars + " de 5 estrellas"
  }, "★★★★★".slice(0, stars), /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? "rgba(198,167,94,0.25)" : "var(--line-soft)"
    }
  }, "★★★★★".slice(stars))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 15.5,
      lineHeight: 1.65,
      margin: 0,
      color: onDark ? "var(--text-on-dark)" : "var(--text-heading)"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 6,
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      color: onDark ? "var(--text-on-dark)" : "var(--text-heading)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "\xB7 ", source)));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aroa & Jon — Badge
 * Small squared label. Outline gold by default; solid + soft variants.
 */
function Badge({
  children,
  variant = "outline",
  ...rest
}) {
  const variants = {
    outline: {
      background: "transparent",
      color: "var(--aj-gold-deep)",
      border: "1px solid var(--aj-gold)"
    },
    solid: {
      background: "var(--aj-gold)",
      color: "var(--aj-ink)",
      border: "1px solid var(--aj-gold)"
    },
    soft: {
      background: "var(--aj-gold-tint)",
      color: "var(--aj-gold-deep)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--aj-ink)",
      color: "var(--aj-gold-soft)",
      border: "1px solid var(--aj-ink)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...variants[variant]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aroa & Jon — Button
 * Editorial, squared. Variants: primary (gold), dark, outline, text (underline CTA), whatsapp.
 */
function Button({
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
    lg: "19px 36px"
  }[size];
  const fz = {
    sm: 12,
    md: 13,
    lg: 14
  }[size];
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
    boxSizing: "border-box"
  };
  const variants = {
    primary: {
      background: "var(--aj-gold)",
      color: "var(--aj-ink)",
      borderColor: "var(--aj-gold)"
    },
    dark: {
      background: "var(--aj-ink)",
      color: "var(--aj-paper)",
      borderColor: "var(--aj-ink)"
    },
    outline: {
      background: "transparent",
      color: "var(--aj-ink)",
      borderColor: "var(--aj-ink)"
    },
    text: {
      background: "transparent",
      color: "var(--aj-ink)",
      borderColor: "transparent",
      borderBottom: "1px solid var(--aj-gold)",
      borderRadius: 0,
      padding: "0 0 4px",
      letterSpacing: "0.16em"
    },
    whatsapp: {
      background: "#25D366",
      color: "#FFFFFF",
      borderColor: "#25D366"
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const handleEnter = e => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === "primary") el.style.background = "var(--aj-gold-deep)";else if (variant === "dark") el.style.background = "var(--aj-graphite)";else if (variant === "outline") {
      el.style.background = "var(--aj-ink)";
      el.style.color = "var(--aj-paper)";
    } else if (variant === "whatsapp") {
      el.style.background = "#1EBE57";
      el.style.borderColor = "#1EBE57";
    } else if (variant === "text") el.style.borderBottomColor = "var(--aj-ink)";
  };
  const handleLeave = e => {
    const el = e.currentTarget;
    Object.assign(el.style, variants[variant]);
    el.style.background = variants[variant].background;
    el.style.color = variants[variant].color;
  };
  const Tag = href ? "a" : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    "aria-disabled": disabled || undefined
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aroa & Jon — Card
 * Squared surface. tone: light (white on paper) or dark (raised on black).
 * Optional gold top rule for emphasis.
 */
function Card({
  children,
  tone = "light",
  elevation = "flat",
  topRule = false,
  padding = 32,
  style = {},
  ...rest
}) {
  const tones = {
    light: {
      background: "var(--surface-card)",
      color: "var(--text-body)"
    },
    paper: {
      background: "var(--surface-canvas)",
      color: "var(--text-body)"
    },
    cream: {
      background: "var(--aj-cream)",
      color: "var(--aj-ink)"
    },
    dark: {
      background: "var(--surface-inverse-2)",
      color: "var(--text-on-dark)"
    }
  };
  const elevations = {
    flat: {
      border: "1px solid var(--line-soft)",
      boxShadow: "none"
    },
    flatDark: {
      border: "1px solid rgba(198,167,94,0.22)",
      boxShadow: "none"
    },
    card: {
      border: "1px solid transparent",
      boxShadow: "var(--shadow-card)"
    },
    lift: {
      border: "1px solid transparent",
      boxShadow: "var(--shadow-lift)"
    }
  };
  const el = tone === "dark" && elevation === "flat" ? elevations.flatDark : elevations[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-none)",
      padding,
      boxSizing: "border-box",
      borderTop: topRule ? "2px solid var(--aj-gold)" : el.border,
      ...tones[tone],
      ...el,
      ...(topRule ? {
        borderTop: "2px solid var(--aj-gold)"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aroa & Jon — Eyebrow
 * Wide-tracked uppercase overline. Sits above headings; gold by default.
 */
function Eyebrow({
  children,
  tone = "gold",
  as = "span",
  ...rest
}) {
  const colors = {
    gold: "var(--aj-gold)",
    ink: "var(--aj-ink)",
    muted: "var(--text-muted)",
    onDark: "var(--aj-gold-soft)"
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: colors[tone],
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * Aroa & Jon — Stat / credential
 * A large serif figure over a wide-tracked label. Used for "+25M€ · Patrimonio gestionado".
 */
function Stat({
  value,
  label,
  tone = "ink",
  align = "left"
}) {
  const onDark = tone === "onDark";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(2.25rem, 3.4vw, 3.25rem)",
      fontWeight: 500,
      lineHeight: 1,
      color: onDark ? "var(--aj-gold)" : "var(--aj-ink)",
      letterSpacing: "-0.01em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginTop: 12,
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aroa & Jon — Field (label + input/textarea)
 * Squared, hairline underline-forward inputs. Gold focus.
 */
function Field({
  label,
  type = "text",
  as = "input",
  placeholder,
  value,
  onChange,
  required = false,
  options = [],
  rows = 4,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const ctrl = {
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    color: "var(--aj-ink)",
    background: "var(--aj-white)",
    border: "1px solid " + (focused ? "var(--aj-gold)" : "var(--line-soft)"),
    borderRadius: "var(--radius-none)",
    padding: "14px 16px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color var(--t-fast)"
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 10
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--aj-gold-deep)"
    }
  }, " *")), as === "textarea" ? /*#__PURE__*/React.createElement("textarea", _extends({
    style: {
      ...ctrl,
      resize: "vertical"
    },
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)) : as === "select" ? /*#__PURE__*/React.createElement("select", _extends({
    style: ctrl,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))) : /*#__PURE__*/React.createElement("input", _extends({
    style: ctrl,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auth/Login.jsx
try { (() => {
/* Aroa & Jon — Auth UI kit: client-portal login (split editorial layout) */
const {
  Button,
  Eyebrow
} = window.AroaJonDesignSystem_6ad0b0;
function AuthField({
  label,
  type = "text",
  placeholder,
  autoComplete
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 9
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    autoComplete: autoComplete,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--aj-ink)",
      background: "var(--aj-white)",
      border: "1px solid " + (f ? "var(--aj-gold)" : "var(--line-soft)"),
      padding: "14px 16px",
      width: "100%",
      boxSizing: "border-box",
      outline: "none",
      borderRadius: 0
    }
  }));
}
function Login() {
  const [sent, setSent] = React.useState(false);
  const [remember, setRemember] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "100vh",
      background: "var(--surface-canvas)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "relative",
      background: "var(--aj-black)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "48px clamp(32px, 4vw, 64px)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/aroa-jon-plaza.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.78) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 22,
      border: "1px solid rgba(198,167,94,0.22)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-gold.png",
    alt: "Aroa & Jon \xB7 Servicios Inmobiliarios",
    style: {
      height: 60,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "\xC1rea de clientes"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(2rem, 3vw, 2.75rem)",
      fontWeight: 500,
      lineHeight: 1.12,
      letterSpacing: "-0.01em",
      color: "var(--aj-paper)",
      margin: "22px 0 0"
    }
  }, "El seguimiento de tu venta, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--aj-gold)"
    }
  }, "siempre a mano"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--text-on-dark-muted)",
      margin: "18px 0 0"
    }
  }, "Documentaci\xF3n, visitas, ofertas y cada paso del proceso \u2014 en un solo sitio. Como siempre: sabes lo que pasa sin tener que preguntar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      letterSpacing: "0.06em",
      color: "var(--text-on-dark-muted)"
    }
  }, "Bidasoa \xB7 Donostialdea \xB7 Gipuzkoa")), /*#__PURE__*/React.createElement("main", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px clamp(24px, 4vw, 80px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 400
    }
  }, sent ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Revisa tu correo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 32,
      fontWeight: 500,
      lineHeight: 1.15,
      color: "var(--text-heading)",
      margin: "18px 0 14px"
    }
  }, "Te hemos enviado un enlace."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--text-body)",
      margin: "0 0 28px"
    }
  }, "Entra desde el enlace para acceder a tu \xE1rea de cliente. Si no lo ves, revisa la carpeta de spam."), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: () => setSent(false)
  }, "Volver a iniciar sesi\xF3n")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Bienvenido de nuevo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 34,
      fontWeight: 500,
      lineHeight: 1.12,
      color: "var(--text-heading)",
      margin: "18px 0 6px"
    }
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: "0 0 34px"
    }
  }, "Accede al seguimiento de tu inmueble."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(AuthField, {
    label: "Email",
    type: "email",
    placeholder: "tu@email.com",
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AuthField, {
    label: "Contrase\xF1a",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    autoComplete: "current-password"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      userSelect: "none"
    },
    onClick: () => setRemember(r => !r)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      border: "1px solid " + (remember ? "var(--aj-gold)" : "var(--line-soft)"),
      background: remember ? "var(--aj-gold)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      transition: "all var(--t-fast)"
    }
  }, remember && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--aj-ink)",
      fontSize: 12,
      lineHeight: 1
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--text-body)"
    }
  }, "Recordarme")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--aj-gold-deep)",
      textDecoration: "none",
      borderBottom: "1px solid var(--aj-gold)",
      paddingBottom: 2
    }
  }, "\xBFOlvidaste tu contrase\xF1a?"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    as: "button"
  }, "Entrar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      margin: "30px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--line-soft)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "o"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--line-soft)"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Recibir un enlace de acceso"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      color: "var(--text-muted)",
      textAlign: "center",
      margin: "32px 0 0"
    }
  }, "\xBFA\xFAn no eres cliente?", " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--aj-ink)",
      fontWeight: 600,
      textDecoration: "none",
      borderBottom: "1px solid var(--aj-gold)",
      paddingBottom: 2
    }
  }, "Quiero que me llamen"))))));
}
Object.assign(window, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auth/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
/* Aroa & Jon — Landing UI kit: Header + Hero (dark) */
/* design-system components are read at render time so load order can't break them */

function Logo({
  onDark = true
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWordmark || "../../assets/logo-wordmark-gold.png",
    alt: "Aroa & Jon \xB7 Servicios Inmobiliarios",
    style: {
      height: 58,
      width: "auto",
      display: "block"
    }
  }));
}
function Header() {
  const {
    Button
  } = window.AroaJonDesignSystem_6ad0b0;
  const items = ["Servicios", "Nosotros", "Reseñas", "Personal Shopper"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "30px clamp(24px, 5vw, 72px)"
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 38
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-on-dark)",
      textDecoration: "none",
      opacity: 0.82
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--aj-gold)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-on-dark)"
  }, it))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Quiero que me llamen"));
}
function Hero() {
  const {
    Button,
    Eyebrow,
    Stat
  } = window.AroaJonDesignSystem_6ad0b0;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--aj-black)",
      backgroundImage: "url('" + (window.__resources && window.__resources.plaza || "../../assets/aroa-jon-plaza.jpg") + "')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "var(--text-on-dark)",
      overflow: "hidden",
      minHeight: 760
    }
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    poster: window.__resources && window.__resources.plaza || "../../assets/aroa-jon-plaza.jpg",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: window.__resources && window.__resources.heroVideo || "../../assets/hero.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(100deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 42%, rgba(0,0,0,0.42) 72%, rgba(0,0,0,0.5) 100%)",
      zIndex: 1,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 35%)",
      zIndex: 1,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "20px",
      border: "1px solid rgba(198,167,94,0.18)",
      pointerEvents: "none",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 3,
      maxWidth: 1240,
      margin: "0 auto",
      padding: "200px clamp(24px, 5vw, 72px) 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Bidasoa \xB7 Donostialdea \xB7 Gipuzkoa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
      fontWeight: 500,
      lineHeight: 1.05,
      letterSpacing: "-0.015em",
      margin: "26px 0 0",
      color: "var(--aj-paper)"
    }
  }, "Tu inmueble se merece algo ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--aj-gold)"
    }
  }, "mejor"), " que un cartel y a esperar."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      lineHeight: 1.7,
      color: "var(--text-on-dark-muted)",
      margin: "30px 0 0",
      maxWidth: 560
    }
  }, "Somos Aroa y Jon y hemos acompa\xF1ado a propietarios a gestionar m\xE1s de 25 millones de euros en patrimonio. Casi una d\xE9cada vendiendo en Gipuzkoa con estrategia a medida y comunicaci\xF3n constante."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      marginTop: 38
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Quiero que me llamen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      marginTop: 64,
      paddingTop: 36,
      borderTop: "1px solid rgba(198,167,94,0.25)",
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+25M\u20AC",
    label: "Patrimonio gestionado",
    tone: "onDark"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "Galardonado",
    label: "Premios Century 21",
    tone: "onDark"
  })))));
}
Object.assign(window, {
  Logo,
  Header,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/PainPromise.jsx
try { (() => {
/* Aroa & Jon — Landing UI kit: Pain points + Promise */
/* design-system components are read at render time so load order can't break them */

const PAINS = [["01", "Quieres vender pero no sabes a dónde irte", "Tienes claro que quieres vender, pero no qué viene después. Ese miedo a quedarte en el aire te paraliza."], ["02", "No conoces el proceso y te da miedo meter la pata", "Documentación, plazos, contratos, impuestos… Nadie te ha explicado cómo funciona esto de verdad."], ["03", "Crees que una inmobiliaria te costará más de lo que da", "La comisión te parece alta. Pero una buena estrategia no es un gasto — determina cuánto metes en el bolsillo."], ["04", "Lo has intentado solo y no llega nadie", "Publicaste el inmueble, fotos del móvil, semanas esperando. Vender bien no es colgar un anuncio."], ["05", "Ya trabajaste con una inmobiliaria y no funcionó", "Mucho al principio. Luego silencio. Tú llamando y ellos sin respuestas. El inmueble seguía igual."]];
function Pain() {
  const {
    Eyebrow,
    PillarCard
  } = window.AroaJonDesignSystem_6ad0b0;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-canvas)",
      padding: "var(--section-y) clamp(24px, 5vw, 72px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\xBFTe suena?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h2)",
      fontWeight: 500,
      lineHeight: 1.12,
      margin: "22px 0 0",
      color: "var(--text-heading)"
    }
  }, "Si coincides con alguna de estas situaciones, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--aj-gold)"
    }
  }, "sigue leyendo"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "44px 56px"
    }
  }, PAINS.map(([i, t, b]) => /*#__PURE__*/React.createElement(PillarCard, {
    key: i,
    index: i,
    title: t
  }, b)))));
}
function BrandPromise() {
  const {
    Eyebrow,
    PillarCard,
    Quote
  } = window.AroaJonDesignSystem_6ad0b0;
  const pillars = [["01", "Estrategia a medida", "Diseñamos un plan específico para tu inmueble. No hay dos propiedades iguales y no hay dos estrategias iguales."], ["02", "Comunicación constante", "Sabes lo que pasa con tu venta sin tener que preguntar. Nosotros te lo contamos."], ["03", "Confianza operativa", "Procesos claros, documentación en orden y sin sorpresas de última hora. De principio a fin."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--aj-black)",
      color: "var(--text-on-dark)",
      padding: "var(--section-y) clamp(24px, 5vw, 72px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 72,
      alignItems: "stretch",
      marginBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "As\xED es como trabajamos nosotros"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    tone: "dark",
    cite: "Aroa & Jon \xB7 Servicios Inmobiliarios"
  }, "Trabajamos en exclusiva. No porque sea una condici\xF3n que imponemos, sino porque es la \xFAnica manera de hacer las cosas bien.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.75,
      color: "var(--text-on-dark-muted)",
      margin: "32px 0 22px"
    }
  }, "No somos una inmobiliaria tradicional. Nos hemos formado, nos seguimos formando y adaptamos nuestras estrategias al mercado de hoy \u2014 porque el mercado cambia y nosotros cambiamos con \xE9l."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.75,
      color: "var(--text-on-dark-muted)",
      margin: 0
    }
  }, "Cuando cogemos tu inmueble tenemos dos objetivos: que no tengas que preocuparte por nada y que, cuando llegues a notar\xEDa, hayas sacado el mejor precio posible. No te prometemos magia. Te prometemos trabajo y m\xE9todo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      minHeight: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "82%",
      height: "70%",
      background: "radial-gradient(60% 60% at 50% 80%, rgba(198,167,94,0.16) 0%, rgba(198,167,94,0) 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "8% 8% 0 8%",
      borderTop: "1px solid rgba(198,167,94,0.28)",
      borderLeft: "1px solid rgba(198,167,94,0.28)",
      borderRight: "1px solid rgba(198,167,94,0.28)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.friendly || "../../assets/aroa-jon-friendly.png",
    alt: "Aroa y Jon \xB7 Servicios Inmobiliarios",
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 480,
      height: "auto",
      display: "block",
      filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.55))"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 48
    }
  }, pillars.map(([i, t, b]) => /*#__PURE__*/React.createElement(PillarCard, {
    key: i,
    index: i,
    title: t,
    tone: "dark"
  }, b)))));
}
Object.assign(window, {
  Pain,
  BrandPromise
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/PainPromise.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
/* Aroa & Jon — Landing UI kit: Reviews + Personal Shopper + Contact + Footer */
/* design-system components are read at render time so load order can't break them */

const REVIEWS = [["Iker Aranburu", "Vendimos la casa antes de publicarla en ningún portal inmobiliario y todo gracias al buen hacer de Jon y Aroa. Profesionalidad, claridad y fluidez informativa. Os recomendaremos sin ninguna duda."], ["Rafa Munduate", "¡Qué equipazo! Ha sido un trabajo duro y con mucho esfuerzo por ambas partes. Comunicación, empatía, eficacia… y podría seguir añadiendo."], ["Ricardo Irazoki", "Jon y Aroa marcan la diferencia con el resto de las inmobiliarias convencionales. Un gran marketing acompañado de una excelente gestión y asesoramiento. Así da gusto."], ["Silvia Bailador", "Mi experiencia fue fantástica. Desde el primer momento conectamos y supieron entender lo que necesitábamos. Sin dudarlo, siempre."]];
function Reviews() {
  const {
    Eyebrow,
    ReviewCard
  } = window.AroaJonDesignSystem_6ad0b0;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-canvas)",
      padding: "var(--section-y) clamp(24px, 5vw, 72px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Rese\xF1as reales de Google"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h2)",
      fontWeight: 500,
      lineHeight: 1.12,
      margin: "22px 0 14px",
      color: "var(--text-heading)"
    }
  }, "No hace falta que lo digamos ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--aj-gold)"
    }
  }, "nosotros"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: 0
    }
  }, "Sin editar y sin filtrar. Preferimos que lo cuenten ellos.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 24
    }
  }, REVIEWS.map(([n, t]) => /*#__PURE__*/React.createElement(ReviewCard, {
    key: n,
    name: n,
    stars: 5
  }, t)))));
}
function PersonalShopper() {
  const {
    Badge,
    Button
  } = window.AroaJonDesignSystem_6ad0b0;
  const list = ["Búsqueda activa dentro y fuera de portales", "Solo visitas inmuebles que ya hemos filtrado para ti", "Negociamos para que compres al mejor precio posible", "Contigo hasta que tengas las llaves en la mano"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--aj-cream)",
      padding: "var(--section-y) clamp(24px, 5vw, 72px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.street || "../../assets/aroa-jon-street.jpg",
    alt: "Aroa y Jon en Gipuzkoa",
    style: {
      width: "100%",
      height: 480,
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 14,
      border: "1px solid rgba(255,255,255,0.4)",
      pointerEvents: "none"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid"
  }, "Servicio Personal Shopper"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h2)",
      fontWeight: 500,
      lineHeight: 1.14,
      margin: "24px 0 0",
      color: "var(--text-heading)"
    }
  }, "\xBFBuscas comprar en Gipuzkoa y no encuentras lo que necesitas?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.7,
      color: "var(--text-body)",
      margin: "22px 0 0"
    }
  }, "Nosotros buscamos por ti. Escuchamos lo que necesitas \u2014 y tambi\xE9n lo que todav\xEDa no sabes que necesitas. Filtramos, seleccionamos y solo te presentamos lo que tiene sentido. Tambi\xE9n fuera de los portales, donde otros no miran."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "28px 0 32px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, list.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-heading)",
      display: "flex",
      gap: 14,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--aj-gold-deep)",
      fontFamily: "var(--font-serif)",
      fontSize: 18
    }
  }, "\u2192"), x))), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg"
  }, "Quiero m\xE1s informaci\xF3n"))));
}
function Contact() {
  const {
    Eyebrow,
    Quote
  } = window.AroaJonDesignSystem_6ad0b0;
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: "var(--aj-black)",
      color: "var(--text-on-dark)",
      padding: "var(--section-y) clamp(24px, 5vw, 72px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Contacto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h2)",
      fontWeight: 500,
      lineHeight: 1.12,
      margin: "22px 0 28px",
      color: "var(--aj-paper)"
    }
  }, "El primer paso es una llamada. Sin compromiso, sin prisa."), /*#__PURE__*/React.createElement(Quote, {
    tone: "dark",
    size: "md"
  }, "Cu\xE9ntanos tu situaci\xF3n. Te decimos con honestidad si somos la opci\xF3n adecuada para ti \u2014 y si lo somos, c\xF3mo lo har\xEDamos."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--aj-gold-soft)",
      marginBottom: 6
    }
  }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 24,
      color: "var(--aj-paper)"
    }
  }, "+34 637 33 89 03"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--text-on-dark-muted)",
      marginTop: 4
    }
  }, "Lunes a viernes \xB7 9h \u2013 19h")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--aj-gold-soft)",
      marginBottom: 6
    }
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 24,
      color: "var(--aj-paper)"
    }
  }, "info@ajinmobiliaria.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--text-on-dark-muted)",
      marginTop: 4
    }
  }, "Respondemos en menos de 24h")))), /*#__PURE__*/React.createElement(ContactForm, null)));
}
function ContactForm() {
  const {
    Button
  } = window.AroaJonDesignSystem_6ad0b0;
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-inverse-2)",
        border: "1px solid rgba(198,167,94,0.3)",
        padding: 48,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: 420
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 30,
        color: "var(--aj-gold)",
        marginBottom: 16
      }
    }, "Mensaje recibido."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        lineHeight: 1.6,
        color: "var(--text-on-dark-muted)",
        margin: 0
      }
    }, "Aroa o Jon te contactar\xE1n en menos de 24 horas."));
  }
  return /*#__PURE__*/React.createElement("form", {
    style: {
      background: "var(--surface-inverse-2)",
      border: "1px solid rgba(198,167,94,0.22)",
      padding: 40,
      display: "flex",
      flexDirection: "column",
      gap: 20
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(DarkField, {
    label: "Nombre"
  }), /*#__PURE__*/React.createElement(DarkField, {
    label: "Tel\xE9fono"
  })), /*#__PURE__*/React.createElement(DarkField, {
    label: "Email"
  }), /*#__PURE__*/React.createElement(DarkField, {
    label: "\xBFQu\xE9 necesitas?",
    as: "select",
    options: ["Quiero vender mi propiedad", "Información sobre Personal Shopper", "Valoración gratuita de mi inmueble", "Otra consulta"]
  }), /*#__PURE__*/React.createElement(DarkField, {
    label: "Cu\xE9ntanos algo m\xE1s (opcional)",
    as: "textarea",
    rows: 3
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    as: "button"
  }, "Enviar"));
}

/* dark-mode field variant for the contact form */
function DarkField({
  label,
  as = "input",
  options = [],
  rows = 4
}) {
  const [f, setF] = React.useState(false);
  const ctrl = {
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    color: "var(--aj-paper)",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid " + (f ? "var(--aj-gold)" : "rgba(198,167,94,0.28)"),
    padding: "13px 15px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    borderRadius: 0
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--aj-gold-soft)",
      marginBottom: 9
    }
  }, label), as === "textarea" ? /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    style: {
      ...ctrl,
      resize: "vertical"
    },
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }) : as === "select" ? /*#__PURE__*/React.createElement("select", {
    style: ctrl,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))) : /*#__PURE__*/React.createElement("input", {
    style: ctrl,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--aj-black)",
      borderTop: "1px solid rgba(198,167,94,0.22)",
      color: "var(--text-on-dark-muted)",
      padding: "44px clamp(24px, 5vw, 72px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWordmark || "../../assets/logo-wordmark-gold.png",
    alt: "Aroa & Jon \xB7 Servicios Inmobiliarios",
    style: {
      height: 44,
      width: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.06em"
    }
  }, "\xA9 2026 \xB7 Servicios Inmobiliarios \xB7 Bidasoa \xB7 Donostialdea \xB7 Gipuzkoa")));
}
Object.assign(window, {
  Reviews,
  PersonalShopper,
  Contact,
  Footer
});

/* Render the full page from the last-loaded module so every section is defined. */
function LandingApp() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Pain, null), /*#__PURE__*/React.createElement(BrandPromise, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(PersonalShopper, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
/* Mount only once the DS namespace and all section modules are ready,
   reusing a single root — resilient to script load order (live or bundled). */
/* mountLanding is handled exclusively by Sections.jsx to avoid stale renders */
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Field = __ds_scope.Field;

})();
