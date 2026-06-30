# Chip

A compact pill-shaped label used to display categorical status, classification, or metadata inline. Used extensively as attendance status badges, approval status indicators, and chip filters.

**Figma:** [Chip in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=16-38)

---

## When to use

- Display an item's status (approval state, attendance state, SLA countdown)
- Label a category or classification inline in a list or table
- Show a count badge in a navigation item or tab bar

## When NOT to use

- Do not use Chip for interactive filters — it has no selected state built in (the Schedule page applies an active class manually for filter chips)
- Do not use Chip where full-sentence context is needed — keep labels short (1–3 words)
- Do not use multiple chips of the same tone next to each other without clear distinction

---

## Anatomy

```
┌──────────────────────┐
│ [●] [Label text]     │
└──────────────────────┘
  container  dot(opt)  label
```

- **container** — pill shape (`--r-pill`), auto-layout horizontal, tone-specific fill
- **dot** — optional 6×6px static circle before the label (in `currentColor`)
- **label** — text node in `--fs-12` / weight 600

---

## Variants

| Property | Values | Default |
|---|---|---|
| `tone` | `default` / `success` / `warning` / `danger` / `info` / `brand` | `default` |
| `dot` | `boolean` | `false` |

| Tone | Background | Text color | Use case |
|---|---|---|---|
| `default` | `--ink-100` | `--ink-600` | Neutral labels, "scheduled" state |
| `success` | `--success-50` | `--success-500` | Approved, complete, active |
| `warning` | `--warning-50` | `--warning-500` | Pending, overdue (yellow level) |
| `danger` | `--danger-50` | `--danger-500` | Rejected, absent, overdue (red level) |
| `info` | `--info-50` | `--info-500` | In-transit, pending review, informational |
| `brand` | `--qx-orange-50` | `--qx-orange-700` | Brand-colored classification labels |

---

## States

Chip has no built-in interactive states. If used as a toggle filter, apply an active class at the page level.

---

## Sizing and spacing

- Height: auto (follows content)
- Padding: 4px / 10px
- Font: `--fs-12` / weight 600
- Radius: `--r-pill`
- Dot size: 6×6px, `border-radius: 50%`

---

## Content guidance

- Labels should be 1–3 words maximum
- Use Title Case for status labels (e.g. "In Progress", "Approved")
- The `dot` prop is a static circle — it carries no independent meaning; do not use it as a sole status indicator

---

## Do / Don't

**Do:** Use tone to communicate semantic meaning — success for positive, danger for negative, warning for cautionary.

**Don't:** Use color without meaning — `brand` and `info` should be used consistently and not decoratively.

**Do:** Use `dot` to add extra visual emphasis to a status label.

**Don't:** Use Chip for multi-word or sentence-length content — it will overflow visually.

---

## Accessibility

- Chip does not add any ARIA attributes — consuming views should provide context via table headers, `aria-label`, or surrounding text
- Do not rely on color alone to communicate status — pair with text labels
- The dot (`dot` prop) is `aria-hidden` by default at the CSS level (a visual indicator only)

---

## Code example

```tsx
import { Chip } from '@xhr/ui'

// Status labels
<Chip tone="success">Approved</Chip>
<Chip tone="danger">Rejected</Chip>
<Chip tone="warning" dot>Pending</Chip>
<Chip tone="info">In Review</Chip>
<Chip tone="default">Scheduled</Chip>

// SLA countdown (from ApprovalsInbox)
<Chip tone="danger">Overdue</Chip>
<Chip tone="warning">Due in 3h</Chip>

// Brand category label
<Chip tone="brand">Leave</Chip>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tone` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'brand'` | `'default'` | Color and semantic tone |
| `dot` | `boolean` | `false` | Show a leading 6px circle dot |
| `children` | `ReactNode` | — | Chip label text |

---

## Token usage

| Layer | Token |
|---|---|
| `default` background | `--ink-100` |
| `success` background | `--success-50` |
| `warning` background | `--warning-50` |
| `danger` background | `--danger-50` |
| `info` background | `--info-50` |
| `brand` background | `--qx-orange-50` |
| `default` text | `--ink-600` |
| `success` text | `--success-500` |
| `warning` text | `--warning-500` |
| `danger` text | `--danger-500` |
| `info` text | `--info-500` |
| `brand` text | `--qx-orange-700` |
| Radius | `--r-pill` |
| Font size | `--fs-12` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:41`  
CSS: `packages/xhr-ui/app.css` (`.chip`, `.chip--success`, `.chip--warning`, `.chip--danger`, `.chip--info`, `.chip--brand`, `.chip--dot`)

## Related

- [Banner](/components/Banner) — for full-width status messages
- [StatTile](/components/StatTile) — for KPI numbers with a tone-colored icon box
- [ApprovalsInbox pattern](/patterns/ApprovalsInbox) — uses SLA countdown chips
- [WeekGrid pattern](/patterns/WeekGrid) — uses attendance status chips per day cell
