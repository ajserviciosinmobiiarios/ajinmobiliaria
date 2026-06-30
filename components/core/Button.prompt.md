Editorial CTA button for Aroa & Jon — squared corners, uppercase Montserrat, wide letter-spacing.

```jsx
<Button variant="primary">Quiero que me llamen</Button>
<Button variant="whatsapp" iconLeft={<WhatsappIcon/>}>Escribir por WhatsApp</Button>
<Button variant="text">Quiero más información</Button>
```

Variants: `primary` (gold fill), `dark` (ink fill), `outline` (ink border, inverts on hover), `text` (gold underline CTA, no padding), `whatsapp` (deep green). Sizes `sm | md | lg`. Pass `href` to render an `<a>`. Never use rounded corners.
