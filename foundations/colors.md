# Colors

All color tokens are CSS custom properties defined in `:root` within `packages/xhr-ui/app.css`.

**Figma:** [Color Primitives + Semantics in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz)

---

## Primitives {#primitives}

### Brand — `--qx-orange-*`

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;margin:16px 0">
  <div style="background:#FFF1EB;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px"><strong>orange-50</strong><br/>#FFF1EB</div>
  <div style="background:#FFDFD0;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px"><strong>orange-100</strong><br/>#FFDFD0</div>
  <div style="background:#FFB596;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px"><strong>orange-200</strong><br/>#FFB596</div>
  <div style="background:#F88C63;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>orange-300</strong><br/>#F88C63</div>
  <div style="background:#F26A2E;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>orange-400</strong><br/>#F26A2E</div>
  <div style="background:#E94E1B;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>orange-500 ★</strong><br/>#E94E1B<br/>Primary</div>
  <div style="background:#C53E12;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>orange-600</strong><br/>#C53E12</div>
  <div style="background:#9A300C;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>orange-700</strong><br/>#9A300C</div>
</div>

| Token | Value | Usage |
|---|---|---|
| `--qx-orange-50` | `#FFF1EB` | Tinted backgrounds, brand-subtle surfaces |
| `--qx-orange-100` | `#FFDFD0` | Avatar border, chip background |
| `--qx-orange-200` | `#FFB596` | Borders on brand surfaces |
| `--qx-orange-300` | `#F88C63` | Focus ring |
| `--qx-orange-400` | `#F26A2E` | Input focus border, today indicator |
| `--qx-orange-500` | `#E94E1B` | **Primary** — buttons, active nav, links |
| `--qx-orange-600` | `#C53E12` | Hover state for primary actions |
| `--qx-orange-700` | `#9A300C` | Text on brand-tint surfaces |

Scale: 8 steps (50–700). No 800 or 900.

### Neutral — `--ink-*` + `--white`

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;margin:16px 0">
  <div style="background:#0F1320;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>ink-900</strong><br/>#0F1320</div>
  <div style="background:#1F2330;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>ink-800</strong><br/>#1F2330</div>
  <div style="background:#2E3344;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>ink-700</strong><br/>#2E3344</div>
  <div style="background:#4A5063;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>ink-600</strong><br/>#4A5063</div>
  <div style="background:#6B7185;border-radius:8px;padding:12px;font-size:12px;color:white"><strong>ink-500</strong><br/>#6B7185</div>
  <div style="background:#9099AE;border-radius:8px;padding:12px;font-size:12px"><strong>ink-400</strong><br/>#9099AE</div>
  <div style="background:#C2C8D6;border-radius:8px;padding:12px;font-size:12px"><strong>ink-300</strong><br/>#C2C8D6</div>
  <div style="background:#E2E6EE;border-radius:8px;padding:12px;font-size:12px"><strong>ink-200</strong><br/>#E2E6EE</div>
  <div style="background:#EEF1F6;border-radius:8px;padding:12px;font-size:12px"><strong>ink-100</strong><br/>#EEF1F6</div>
  <div style="background:#F6F8FB;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px"><strong>ink-50</strong><br/>#F6F8FB</div>
  <div style="background:#FFFFFF;border:1px solid #E2E6EE;border-radius:8px;padding:12px;font-size:12px"><strong>white</strong><br/>#FFFFFF</div>
</div>

| Token | Value | Role |
|---|---|---|
| `--ink-900` | `#0F1320` | Headings, primary text |
| `--ink-800` | `#1F2330` | Body text |
| `--ink-700` | `#2E3344` | Nav items, labels |
| `--ink-600` | `#4A5063` | Secondary text |
| `--ink-500` | `#6B7185` | Muted text, icons |
| `--ink-400` | `#9099AE` | Placeholders, disabled |
| `--ink-300` | `#C2C8D6` | Strong borders |
| `--ink-200` | `#E2E6EE` | Default borders |
| `--ink-100` | `#EEF1F6` | Subtle fills, hover backgrounds |
| `--ink-50` | `#F6F8FB` | Page background |
| `--white` | `#FFFFFF` | Card surface, modal, rail |

Scale: 11 steps (900–50 + white).

---

## Semantics {#semantics}

### Status colors

Each status has exactly two steps: a full-saturation `500` for text, icons, and borders, and a `50` tint for backgrounds.

| Token | Value | Usage |
|---|---|---|
| `--success-500` | `#16A34A` | Approved chip, positive icon, success button |
| `--success-50` | `#E8F7EE` | Success chip/banner background |
| `--warning-500` | `#D97706` | Warning chip, overdue indicator |
| `--warning-50` | `#FEF3E7` | Warning chip/banner background |
| `--danger-500` | `#DC2626` | Danger button, error text, notification dot |
| `--danger-50` | `#FDEAEA` | Danger chip/banner background |
| `--info-500` | `#2563EB` | Info chip, in-transit state |
| `--info-50` | `#E8F0FE` | Info chip/banner background |

### Surface and border aliases

| Token | Resolves to | Role |
|---|---|---|
| `--surface-bg` | `var(--ink-50)` | Page / app background |
| `--surface-card` | `var(--white)` | Card and modal background |
| `--surface-elev` | `var(--white)` | Elevated surfaces |
| `--border` | `var(--ink-200)` | Default dividers, card borders |
| `--border-strong` | `var(--ink-300)` | Input borders, strong dividers |

---

## Usage guidance

### Do
- Use `--qx-orange-500` for all primary interactive elements (buttons, active nav links, focus indicators)
- Use `--ink-*` for all text — prefer `ink-900` for headings, `ink-800` for body, `ink-500` for muted
- Use `--surface-bg` for page backgrounds, `--surface-card` for raised surfaces
- Use `--border` for default borders, `--border-strong` for input field borders
- Use status token pairs: `*-500` for foreground, `*-50` for background

### Don't
- Do not hardcode hex values in new component CSS — all colors should reference a token
- Do not use `--qx-orange-*` for non-brand UI — prefer `--ink-*` for neutral states
- Do not use status tokens for decorative purposes — they carry semantic meaning

---

## Accessibility

| Color pair | Ratio | Status | Notes |
|---|---|---|---|
| White on `--qx-orange-500` (Button labels) | 3.77:1 | ⚠ Borderline | Passes 3:1 for bold ≥14px (WCAG AA Large). Source brand color — accepted. |
| `--success-500` on `--success-50` | 2.98:1 | ⚠ Fail | Below 3:1 — flag for accessibility review |
| `--warning-500` on `--warning-50` | 2.91:1 | ⚠ Fail | Below 3:1 — flag for accessibility review |
| `--ink-500` on `--ink-100` (muted text on hover) | 4.29:1 | ⚠ Low | Below 4.5:1 for body-size text |
| `--ink-900` on `--surface-card` | 18.51:1 | ✅ Pass | |
| `--qx-orange-700` on `--qx-orange-50` | 6.79:1 | ✅ Pass | |
| `--ink-500` on `--surface-card` | 4.85:1 | ✅ Pass | |

**Known gap:** Status chip foreground/background pairs fail WCAG 3:1 for UI components. The source app inherits this from its token values. Recommended: darken `--success-500` to ≥ #15803D and `--warning-500` to ≥ #B45309 in a future token revision.

---

## Dark mode

Not implemented. No `prefers-color-scheme` media query or `data-theme` toggle. All tokens are light-mode only.

---

## CSS usage

```css
/* Reference a token in component CSS */
.my-element {
  background-color: var(--surface-card);
  border: 1px solid var(--border);
  color: var(--ink-800);
}

/* Status-aware styling */
.status-success {
  background-color: var(--success-50);
  color: var(--success-500);
}
```
