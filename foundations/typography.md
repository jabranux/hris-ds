# Typography

All type sizes are CSS custom properties in `packages/xhr-ui/app.css`. Named text styles are expressed as CSS class combinations — there is no separate text-style token file.

**Font family:** Inter (referenced by name; loaded by the host application, not by `@xhr/ui` itself)

**Figma:** [Typography page in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz)

---

## Font family

| Token | Value |
|---|---|
| `--font-sans` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` |

No monospace font token is defined. Tabular numeric display uses `font-variant-numeric: tabular-nums` and the `.mono` utility class.

---

## Type scale — `--fs-*`

| Token | Value | px | Primary usage |
|---|---|---|---|
| `--fs-12` | `0.75rem` | 12 | Eyebrows, table headers, chip text, sub-labels |
| `--fs-13` | `0.8125rem` | 13 | Secondary meta, list sub-text, hint text |
| `--fs-14` | `0.875rem` | 14 | Body, nav links, form labels, table cells |
| `--fs-15` | `0.9375rem` | 15 | Default body (`font-size` on `<body>`) |
| `--fs-16` | `1rem` | 16 | Card titles, tab items |
| `--fs-18` | `1.125rem` | 18 | Modal titles, large avatar label |
| `--fs-20` | `1.25rem` | 20 | h2, stat values |
| `--fs-24` | `1.5rem` | 24 | h1, page titles |
| `--fs-28` | `1.75rem` | 28 | Defined — not observed in use |
| `--fs-32` | `2rem` | 32 | Defined — not observed in use |

Scale: 10 steps. `--fs-28` and `--fs-32` are defined but have no current component usage.

---

## Line heights

| Token | Value | Usage |
|---|---|---|
| `--lh-tight` | `1.2` | Headings |
| `--lh-base` | `1.45` | Body text |
| `--lh-loose` | `1.6` | Defined — not observed in use |

---

## Named text styles

Named styles are implicit — expressed as class combinations, not explicit text-style tokens.

<div style="margin:16px 0">

<p style="font-size:1.5rem;font-weight:700;line-height:1.2;color:#0F1320;margin:8px 0">h1 — 24px / 700 / tight</p>
<p style="font-size:1.25rem;font-weight:700;line-height:1.2;color:#0F1320;margin:8px 0">h2 — 20px / 700 / tight</p>
<p style="font-size:1rem;font-weight:600;line-height:1.2;color:#0F1320;margin:8px 0">h3 — 16px / 600 / tight</p>
<p style="font-size:0.875rem;font-weight:600;line-height:1.2;color:#0F1320;margin:8px 0">h4 — 14px / 600 / tight</p>
<p style="font-size:0.9375rem;font-weight:400;line-height:1.45;color:#1F2330;margin:8px 0">Body — 15px / 400 / base</p>
<p style="font-size:0.875rem;font-weight:400;line-height:1.45;color:#1F2330;margin:8px 0">Body sm — 14px / 400 / base</p>
<p style="font-size:0.75rem;font-weight:600;line-height:1.2;color:#6B7185;margin:8px 0;letter-spacing:0.05em;text-transform:uppercase">EYEBROW — 12px / 600 / tight / uppercase</p>
<p style="font-size:0.75rem;font-weight:400;line-height:1.45;color:#6B7185;margin:8px 0">Muted — 12px / 400 / base / ink-500</p>
<p style="font-size:1.25rem;font-weight:700;line-height:1.2;color:#0F1320;font-variant-numeric:tabular-nums;margin:8px 0">Stat value — 20px / 700 / tabular</p>
<p style="font-size:0.8125rem;font-weight:400;line-height:1.45;color:#6B7185;margin:8px 0">Stat label — 13px / 400 / ink-500</p>

</div>

| Class | Font size | Weight | Color | Line height | Notes |
|---|---|---|---|---|---|
| `h1` / `.page__title` | `--fs-24` | 700 | `--ink-900` | `--lh-tight` | Page-level headings |
| `h2` | `--fs-20` | 700 | `--ink-900` | `--lh-tight` | Section headings |
| `h3` / `.card__title` | `--fs-16` | 600 | `--ink-900` | `--lh-tight` | Card sub-headings |
| `h4` | `--fs-14` | 600 | `--ink-900` | `--lh-tight` | Small labels |
| body | `--fs-15` | 400 | `--ink-800` | `--lh-base` | Default body text |
| `.eyebrow` | `--fs-12` | 600 | `--ink-500` | `--lh-tight` | Uppercase section labels, table headers |
| `.muted` | inherited | — | `--ink-500` | — | Secondary / helper text |
| `.mono` | inherited | — | inherited | — | Tabular-numeric numbers |
| `.stat__value` | `--fs-20` | 700 | `--ink-900` | `--lh-tight` | KPI numbers |
| `.stat__label` | `--fs-13` | 400 | `--ink-500` | `--lh-base` | KPI labels |
| Modal title | `--fs-18` | 600 | `--ink-900` | `--lh-tight` | Modal header |

---

## Usage guidance

### Do
- Use the `--fs-*` scale steps for all font sizes — never hardcode `px` or `rem` font sizes
- Default to `--fs-15` / `--lh-base` for body text
- Use `--lh-tight` for headings and UI labels
- Apply `.eyebrow` for section labels and table column headers

### Don't
- Do not mix arbitrary font sizes outside the scale (e.g. 11px, 17px)
- Do not use `--fs-28` or `--fs-32` — they have no established usage in the product

---

## Accessibility

- Minimum rendered size is 12px (`--fs-12`) — used only for chip labels and eyebrows, never for body text
- All interactive labels (buttons, nav items, form labels) use `--fs-14` or larger
- `.eyebrow` text must not be the sole indicator of a section — pair with ARIA region labels

---

## CSS usage

```css
.my-element {
  font-family: var(--font-sans);
  font-size: var(--fs-14);
  line-height: var(--lh-base);
  color: var(--ink-800);
}

.my-heading {
  font-size: var(--fs-24);
  font-weight: 700;
  line-height: var(--lh-tight);
  color: var(--ink-900);
}
```

## Source reference

`packages/xhr-ui/app.css` — lines 96–175
