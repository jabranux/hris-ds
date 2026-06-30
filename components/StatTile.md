# StatTile

A card-like tile used to display a single KPI metric with a colored icon box, a numeric or text value, and a supporting label. Used in dashboard grids across all three user roles.

**Figma:** [StatTile in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=19-38)

---

## When to use

- Display a single KPI with a clear value and label (e.g. "47 employees", "3 pending leaves")
- Compose a dashboard summary grid (2–4 tiles per row)
- Highlight a metric with semantic color context (green for positive, red for alert)

## When NOT to use

- Do not use StatTile for multi-metric displays — use a separate tile per metric
- Do not use StatTile inside another Card — it already has its own surface elevation

---

## Anatomy

```
┌───────────────────────────────────────┐
│  ┌──────────┐   label text (muted)    │
│  │  icon    │   value (large, bold)   │
│  └──────────┘                         │
└───────────────────────────────────────┘
  container  icon-box  text-stack
```

- **container** — horizontal flex card with border, shadow, and radius
- **icon-box** — 44×44px box with tone-colored fill (radius `--r-md`)
- **text-stack** — vertical stack
  - **label** — small muted label text
  - **value** — large bold numeric/text

---

## Variants

| Property | Values | Default |
|---|---|---|
| `tone` | `default` / `green` / `blue` / `amber` / `red` | `default` (brand orange) |
| `icon` | `ReactNode` | — |

| Tone | Icon box fill | Icon color | Use case |
|---|---|---|---|
| `default` | `--qx-orange-50` | `--qx-orange-700` | Generic, brand-colored KPIs |
| `green` | `--success-50` | `--success-500` | Positive metrics (headcount, approved count) |
| `blue` | `--info-50` | `--info-500` | Informational metrics (holidays, schedule count) |
| `amber` | `--warning-50` | `--warning-500` | Cautionary metrics (pending, late) |
| `red` | `--danger-50` | `--danger-500` | Alert metrics (absent, overdue) |

---

## Sizing and spacing

- Container padding: `--s-4` / `--s-5` (16px/20px with gap `--s-3`)
- Icon box: 44×44px, `--r-md`
- Label font: `--fs-13` / `--ink-500`
- Value font: `--fs-20` / 700 / `--ink-900`
- Width: fills grid column

---

## Do / Don't

**Do:** Use tone to reinforce the metric's meaning — `green` for positive outcomes, `red` for alerts.

**Don't:** Use `default` tone for all tiles — it reduces the communicative value of the color system.

**Do:** Use the same grid layout class (`.grid--4` or `.grid--2`) for all tiles in a row to ensure visual consistency.

---

## Accessibility

- The icon is a visual aid only — ensure the label provides a text description of the metric
- Do not rely on color alone to convey meaning — the label and value should be self-descriptive

---

## Code example

```tsx
import { StatTile } from '@xhr/ui'

// HR dashboard grid
<div className="grid grid--4">
  <StatTile label="Total Employees" value={47} tone="green" icon="👥" />
  <StatTile label="Leave Types" value={8} tone="blue" icon="📅" />
  <StatTile label="Pending Leaves" value={3} tone="amber" icon="🌴" />
  <StatTile label="Absent Today" value={1} tone="red" icon="⚠️" />
</div>

// No icon
<StatTile label="Days Present" value={22} />
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Metric label |
| `value` | `ReactNode` | — | Metric value (number, string, or node) |
| `icon` | `ReactNode` | — | Leading icon content |
| `tone` | `'default' \| 'green' \| 'blue' \| 'amber' \| 'red'` | `'default'` | Color tone for icon box |

---

## Token usage

| Layer | Token |
|---|---|
| Container fill | `--surface-card` |
| Container border | `--border` |
| Container radius | `--r-lg` |
| Container shadow | `--sh-1` |
| Icon box size | 44×44px |
| Icon box radius | `--r-md` |
| `default` icon box fill | `--qx-orange-50` |
| `green` icon box fill | `--success-50` |
| `blue` icon box fill | `--info-50` |
| `amber` icon box fill | `--warning-50` |
| `red` icon box fill | `--danger-50` |
| Label font | `--fs-13` |
| Label color | `--ink-500` |
| Value font | `--fs-20` / 700 |
| Value color | `--ink-900` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:59`  
CSS: `packages/xhr-ui/app.css` (`.stat-tile`, `.stat-tile__icon`, `.stat-tile--green`, etc.)

## Related

- [Card](/components/Card) — general-purpose content container
- [Chip](/components/Chip) — for inline status labels
