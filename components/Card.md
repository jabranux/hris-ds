# Card

The primary surface container for grouping related content. Used throughout the application as the default white-on-grey elevated container.

**Figma:** [Card in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=19-23)

---

## When to use

- Group logically related content — employee details, KPI stats, form sections, approval detail panels
- Provide visual separation between content sections on a page
- Wrap a DataTable or ListRow collection to give it a contained surface

## When NOT to use

- Do not use Card for single standalone values — use a StatTile for KPI numbers
- Do not nest Cards — a card inside a card creates excessive visual depth

---

## Anatomy

```
┌─────────────────────────────────┐  ← border, shadow/1, radius/lg
│  [card__header] (optional)      │
│    Title text    [action link]  │
│                                 │
│  [children / slot]              │
│                                 │
└─────────────────────────────────┘
```

- **container** — the white surface with padding, border, shadow, and radius
- **card__header** (optional) — a title + optional action link row, added by pages as a child div
- **children** — any content

---

## Variants

| Property | Values | Default |
|---|---|---|
| `flush` | `boolean` | `false` |

| Variant | Behavior |
|---|---|
| Default | `padding: var(--s-5)` on all sides |
| `flush` | `padding: 0; overflow: hidden` — child content is full-bleed |

The `flush` variant is used when a DataTable or a list needs to extend edge-to-edge within the card (header cells align with the card border). A `card--flush > .card__header` rule still adds padding to an internal header child.

---

## States

Card has no interactive states — it is a passive surface container.

---

## Sizing and spacing

- Padding (default): `--s-5` (20px)
- Border radius: `--r-lg`
- Border: `1px solid var(--border)` (`--ink-200`)
- Shadow: `--sh-1`
- Background: `--surface-card` (`--white`)
- Width: fills container (100%)
- Height: Hug (auto) — height follows content

---

## Do / Don't

**Do:** Use `flush` when embedding DataTable or ListRow inside a card to allow full-bleed row borders.

**Don't:** Apply `flush` and then add internal padding manually — the `card--flush > .card__header` rule handles header padding automatically.

**Do:** Add a `.card__header` div with a title and optional action link for sections that need a heading.

---

## Accessibility

Card is a passive container — no specific ARIA attributes are required. If a Card represents a distinct content region, the consuming page should wrap it in a `<section>` with an `aria-label` or `aria-labelledby`.

---

## Code example

```tsx
import { Card } from '@xhr/ui'

// Default padded card
<Card>
  <div className="card__header">
    <span className="h3">Employee Details</span>
    <a href="/employees/123/edit">Edit</a>
  </div>
  <p>Full name, department, position...</p>
</Card>

// Flush card with DataTable
<Card flush>
  <div className="card__header">
    <span className="h3">Leave History</span>
  </div>
  <DataTable columns={columns} rows={rows} />
</Card>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `flush` | `boolean` | `false` | Removes padding and clips overflow for full-bleed content |
| `...rest` | All native `<div>` props | — | |

---

## Token usage

| Layer | Token |
|---|---|
| Background fill | `--surface-card` → `--white` |
| Border | `--border` → `--ink-200` |
| Border radius | `--r-lg` |
| Shadow | `--sh-1` |
| Default padding | `--s-5` |
| Card title font size | `--fs-16` |
| Card title weight | 600 |
| Card title color | `--ink-900` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:36`  
CSS: `packages/xhr-ui/app.css` (`.card`, `.card--flush`, `.card__header`)

## Related

- [StatTile](/components/StatTile) — a card-like tile for KPI numbers
- [DataTable](/components/DataTable) — commonly embedded in a `flush` Card
- [ListRow](/components/ListRow) — commonly embedded in a `flush` Card
- [FilteredTable pattern](/patterns/FilteredTable) — Card flush wrapping a toolbar + DataTable
