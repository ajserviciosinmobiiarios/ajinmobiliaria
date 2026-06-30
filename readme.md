# Aroa & Jon · Servicios Inmobiliarios — Design System

A luxury, formal design system for **Aroa & Jon Servicios Inmobiliarios**, a premium real-estate
service operating in **Bidasoa · Donostialdea · Gipuzkoa** (Basque Country, Spain). Founders **Aroa
Zapata** and **Jon González** are a Century 21–awarded team who have helped owners manage **+25M€**
in property over nearly a decade. The brand voice is confident, honest and personal — boutique, never
corporate.

This system powers the marketing landing page and any future branded collateral (decks, social,
proposals). Everything is in **Spanish**.

## Sources provided
- **Color palette** — `uploads/PALETA DE COLORES A&J.png` (client-supplied; see Colors below). This
  palette **overrides** the muted forest/sand palette in the earlier production extract.
- **Typography direction** — client instruction: **Playfair Display** (display serif) + **Montserrat**
  (sans), all weights. This **overrides** the DM Serif Display / Inter pairing in the old extract.
- **Web copy** — `uploads/Contenido Web v5 · Aroa y Jon Servicios Inmobiliarios.md` (final v5 copy, in
  Spanish). All landing-page text is drawn verbatim from here.
- **Logos** — `uploads/1.png` (gold wordmark), `uploads/2.png` (A&J monogram on black).
- **Photography** — founder portraits & cut-outs (`uploads/Aroa y Jon (*).jpg`, `Fondo … eliminado.png`).
- **Legacy tokens** — `uploads/aj-tokens.css` / `aj-tokens.json` (from `aj-inmobiliaria.vercel.app`).
  Kept for reference; structural rules (squared corners, text-CTA pattern, generous section rhythm) were
  honoured, but colour and type were replaced per client direction.
- Reference doc: `uploads/AJ-Inmobiliaria-Sistema-de-Diseno.docx` (not re-parsed — superseded by the
  instructions above).

---

## CONTENT FUNDAMENTALS

**Language:** Spanish (Castilian). Warm, direct, plain-spoken — never jargon-heavy or salesy.

**Person & address:** Speaks as **"nosotros"** (Aroa & Jon, a real two-person team) directly to **"tú"**
(the owner). Highly personal: *"Somos Aroa y Jon…"*, *"Nosotros buscamos por ti."* It names the founders
constantly — the people ARE the brand.

**Tone:** Confident but humble and honest. It acknowledges the reader's fears and frustrations before
selling. It under-promises: *"No te prometemos magia. Te prometemos trabajo, método y que estaremos ahí
en cada paso."* Honesty is a selling point: *"Te decimos con honestidad si somos la opción adecuada para ti."*

**Structure of persuasion:** Pain → Promise → Proof. The site opens by naming the owner's situations
("Si coincides con alguna de estas situaciones, sigue leyendo"), states how they work (exclusivity, three
pillars), then lets **real, unedited Google reviews** do the talking ("No hace falta que lo digamos
nosotros").

**Casing:**
- Headlines: sentence case, serif. The emphasised word is set in *italic* (and usually gold): *"se merece
  algo **mejor**"*, *"sigue **leyendo**"*.
- Eyebrows / labels / nav / buttons: **UPPERCASE**, wide letter-spacing (≈0.18–0.22em), Montserrat.
- Body: sentence case, normal.

**Punctuation & quirks:** Em-dashes for asides ("— y lo hacemos de una única manera"). Arrow bullets
("→") in service lists. Numbers written compactly ("+25M€", "24h", "9h – 19h"). Section titles often end
in a full stop for a calm, declarative cadence ("Lo que no se puede inventar.").

**Emoji:** **None.** The brand is formal and editorial — never use emoji.

**Voice examples (verbatim):**
- *"Tu inmueble se merece algo mejor que un cartel y a esperar."*
- *"Trabajamos en exclusiva. No porque sea una condición que imponemos, sino porque es la única manera de
  hacer las cosas bien."*
- *"Sabes lo que pasa con tu venta sin tener que preguntar. Nosotros te lo contamos."*

---

## VISUAL FOUNDATIONS

**Overall vibe:** Editorial luxury. Think estate-agency-meets-fashion-magazine: lots of warm off-white
space, one restrained gold accent, large italic serif headlines, crisp uppercase micro-type. Calm,
expensive, trustworthy.

**Colour** (`tokens/colors.css`) — client palette:
- Neutrals: **Black `#000000`**, warm **Ink `#15140F`** (text), **Graphite `#3A382F`**, **Mist `#8C897E`**
  (secondary), **Stone `#C8C3B6`** (lines), **Cream `#E6DAC9`** (champagne), **Sand `#EFEAE0`**, **Paper
  `#F4F1EA`** (the base canvas — *never pure white*), **White `#FFFFFF`** (crisp accents only).
- Accent: a single **Gold `#C6A75E`** (+ `#A8884A` deep / `#D8C190` soft / `#F0E7D2` tint). Gold is used
  sparingly — wordmark, hairline rules, the emphasised headline word, button fills, stars, top-rules.
  Never large gold fills.
- Two background worlds: warm **Paper** (light sections) and true **Black** (hero, promise, contact).

**Typography** (`tokens/typography.css`):
- **Playfair Display** for all display/editorial — headings, quotes, stats, the logo wordmark. Weight
  400–700. The key word in a headline is *italic*. High contrast, refined.
- **Montserrat** for everything functional — body, lead, nav, labels, buttons, form controls. Weights
  300–700. Uppercase + wide tracking for labels.

**Spacing & layout** (`tokens/spacing.css`): 8px grid; very generous vertical rhythm — sections are
128px tall (80px mobile). Max content width 1240px. Two-column editorial splits (text + image / text +
form) are the dominant layout. Breakpoint at 768px.

**Corners:** **Squared — radius 0 everywhere.** This is a defining brand trait (carried from the legacy
system). No rounded cards, no pill buttons. The only curve is the gold stars in reviews.

**Borders:** 1px **hairlines** (Stone on light, translucent gold `rgba(198,167,94,0.22)` on dark). Used as
dividers above pillar blocks, around cards, and as a decorative inset frame on hero/imagery
(`inset:14–20px` thin gold/white rule). A 2px **gold top-rule** marks emphasised cards.

**Shadows** (`tokens/effects.css`): soft, warm-tinted, restrained — `--shadow-card` for resting cards,
`--shadow-lift` for hover/modal. Never heavy or coloured (except an optional faint gold lift). Most
surfaces use hairline borders rather than shadow.

**Backgrounds:** flat colour fills (Paper / Cream / Black). Real **photography** is used full-bleed or in
two-column splits, often with a thin inset frame. No gradients as decoration (only functional scrims over
photos for text protection — `--scrim-bottom` / `--scrim-full`). No textures, no patterns, no hand-drawn
illustration.

**Imagery vibe:** warm, natural daylight, Basque street/plaza settings; founders in white/blue shirts.
Editorial but candid. Cut-out PNGs of the founders are placed over the black hero. Colour is warm, not
graded to b&w.

**Animation:** minimal and tasteful. Standard transition `0.15–0.25s cubic-bezier(0.4,0,0.2,1)`; an
ease-out `cubic-bezier(0.16,1,0.3,1)` for entrances. Fades and subtle moves only — no bounce, no infinite
loops.

**Hover states:** buttons darken (gold → gold-deep; ink → graphite); outline button inverts to solid ink;
text-CTA underline darkens gold → ink; nav links turn gold. No scale-up.

**Press / focus:** form controls take a **gold 1px border** on focus. Buttons use colour change, not
shrink.

**Transparency & blur:** used very sparingly — translucent gold hairlines on dark, faint white field fills
inside the dark contact form (`rgba(255,255,255,0.03)`). No glassmorphism.

---

## ICONOGRAPHY

The brand is **near-iconless** by design — it leans on typography, gold rules and photography instead of
an icon set. There is **no built-in icon font** and **no icon library** in the source material.

- **Numerals as markers:** the primary "icon" is a large serif **index number** in gold (`01`, `02`, `03`)
  introducing pillars and pain points (see `PillarCard`).
- **Stars:** Google-review ratings use the Unicode star **★** in gold (filled) over Stone (empty). This is
  the only glyph used as a rating icon.
- **Arrows:** service lists use a serif **→** in gold-deep as the bullet.
- **Emoji:** never.
- **Logos/marks:** `assets/logo-wordmark-gold.png` (full gold wordmark, for light backgrounds) and
  `assets/logo-monogram-gold.png` (A&J monogram, gold on black — for dark/social). The header logo is also
  reproducible as live text (Playfair "Aroa & Jon" in gold + Montserrat tagline) — preferred when crisp
  scaling matters.

**If you need UI icons** (phone, mail, WhatsApp, arrows) for a future surface, use **Lucide**
(`https://unpkg.com/lucide-static`) at ~1.5px stroke to match the thin, refined line weight — and flag it
as a substitution, since no icon set was supplied by the client.

---

## FONT SUBSTITUTION NOTE
Fonts are loaded as **Google Fonts webfonts** (Playfair Display + Montserrat) via `tokens/fonts.css` — no
local binaries were shipped, so the system reports 0 `@font-face` files. These are the exact families the
client requested. If you need self-hosted binaries for offline/production use, drop the `.woff2` files in
`assets/fonts/` and replace the `@import` with `@font-face` rules. **Flag to client if self-hosting is
required.**

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill manifest for Claude Code.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — logos (`logo-wordmark-gold.png`, `logo-monogram-gold.png`), photography
  (`aroa-jon-cutout-1/2.png`, `aroa-jon-street.jpg`, `aroa-jon-plaza.jpg`, `aroa-jon-portrait.jpg`).

**Components** (`window.AroaJonDesignSystem_6ad0b0`)
- `components/core/` — **Button**, **Eyebrow**, **Badge**, **Stat**, **Card**
- `components/forms/` — **Field** (input / select / textarea)
- `components/content/` — **PillarCard**, **Quote**, **ReviewCard**

**UI kit**
- `ui_kits/landing/` — full Aroa & Jon landing page (`index.html`) composed from the components:
  `Hero.jsx` (header + dark hero), `PainPromise.jsx` (pain points + brand promise), `Sections.jsx`
  (reviews, personal shopper, contact form, footer).

**Design System tab cards** — foundation specimens live in `guidelines/` (Colors, Type, Spacing, Brand);
component & landing cards are tagged in their own directories.
