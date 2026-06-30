# Border Radius

Border radius tokens are CSS custom properties in `packages/xhr-ui/app.css`.

**Figma:** [Radius & Shadows in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz)

---

## Radius scale

| Token | Value | Usage |
|---|---|---|
| `--r-sm` | `8px` | Small button (`.btn--sm`), switch track |
| `--r-md` | `12px` | Default button, inputs, list icon tiles, chip-like elements |
| `--r-lg` | `16px` | Card, modal panel, bottom sheet |
| `--r-xl` | `22px` | ClockCard hero, RtoCard hero, drawer sheet |
| `--r-pill` | `999px` | Chips, progress bars, nav count badges, avatars |

<div style="display:flex;gap:16px;flex-wrap:wrap;margin:16px 0;align-items:center">
  <div style="background:#E94E1B;width:48px;height:48px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;flex-direction:column"><strong>sm</strong><span>8px</span></div>
  <div style="background:#E94E1B;width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;flex-direction:column"><strong>md</strong><span>12px</span></div>
  <div style="background:#E94E1B;width:48px;height:48px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;flex-direction:column"><strong>lg</strong><span>16px</span></div>
  <div style="background:#E94E1B;width:48px;height:48px;border-radius:22px;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;flex-direction:column"><strong>xl</strong><span>22px</span></div>
  <div style="background:#E94E1B;height:32px;padding:0 16px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;flex-direction:column"><strong>pill</strong><span>999px</span></div>
</div>

---

## Usage guidance

| Component type | Radius |
|---|---|
| Buttons (default, lg) | `--r-md` |
| Buttons (sm) | `--r-sm` |
| Inputs, selects, textareas | `--r-md` |
| Cards | `--r-lg` |
| Modals | `--r-lg` |
| Hero cards (ClockCard, RtoCard) | `--r-xl` |
| Chips, badges, pills | `--r-pill` |
| Avatar | `--r-pill` (circle) |
| Bottom sheet / drawer | `--r-xl` (top corners only) |

### Do
- Use `--r-pill` for all fully rounded elements (chips, badges, count indicators)
- Use `--r-lg` for all card and modal surfaces
- Use `--r-xl` only for prominent hero-style cards

### Don't
- Do not use arbitrary border-radius values outside the scale
- Do not apply `--r-pill` to rectangular containers — reserve it for elements that are visually pill-shaped

---

## CSS usage

```css
.my-card {
  border-radius: var(--r-lg);
}

.my-badge {
  border-radius: var(--r-pill);
}
```

## Source reference

`packages/xhr-ui/app.css` — lines 146–155
