# Foundations

All design tokens are CSS custom properties defined in `:root` within `packages/xhr-ui/app.css`. There is no JSON token file, Tailwind config, or JS token object — the CSS file is the sole source of truth.

## Token categories

| Category | Count | Source lines |
|---|---|---|
| [Color primitives](/foundations/colors#primitives) | 19 (brand + neutral) | app.css:1–55 |
| [Color semantics](/foundations/colors#semantics) | 8 (status) + 5 (surface aliases) | app.css:56–95 |
| [Typography sizes](/foundations/typography) | 10 (`--fs-*`) + 3 line-heights | app.css:96–130 |
| [Spacing](/foundations/spacing) | 10 steps (`--s-1` → `--s-12`) | app.css:131–145 |
| [Radius](/foundations/radius) | 5 (`--r-sm` → `--r-pill`) | app.css:146–155 |
| [Shadows](/foundations/shadows) | 4 (`--sh-1` → `--sh-pop`) | app.css:156–165 |
| Layout constants | 5 (`--topbar-h`, etc.) | app.css:166–175 |

## Styling approach

The design system uses a **CSS class + custom property** approach:

1. **Token layer** — `:root` custom properties for all values
2. **Component classes** — BEM-like selectors (`.btn`, `.btn--primary`, `.card`, etc.)
3. **Utility helpers** — layout helpers (`.grid`, `.row`, `.stack`, `.mt-*`, `.mb-*`)
4. **Responsive rules** — `@media (max-width: 900px)` breakpoints

No Tailwind, no CSS Modules, no CSS-in-JS. Inline `style={{ }}` is used sparingly in page files for one-off adjustments only.

## Token naming convention

| Category | Pattern | Example |
|---|---|---|
| Brand color | `--qx-orange-{step}` | `--qx-orange-500` |
| Neutral color | `--ink-{step}` | `--ink-900` |
| Status color | `--{status}-{step}` | `--success-500` |
| Surface alias | `--surface-{role}` | `--surface-card` |
| Border alias | `--border`, `--border-strong` | |
| Font size | `--fs-{px}` | `--fs-14` |
| Line height | `--lh-{name}` | `--lh-base` |
| Spacing | `--s-{step}` | `--s-4` |
| Radius | `--r-{name}` | `--r-md` |
| Shadow | `--sh-{name}` | `--sh-1` |
| Layout | `--{name}` | `--topbar-h` |

## Gap: no semantic role tokens

The current token layer has primitives and status tokens but **no semantic role aliases** for `--color-primary`, `--color-on-primary`, `--color-text-default`, etc. Component classes reference raw primitives directly (e.g. `var(--qx-orange-500)`). This makes rebrand or dark-mode work expensive — a future token extraction pass would add a semantic alias layer.
