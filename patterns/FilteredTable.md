# FilteredTable

A search + filter toolbar above a DataTable, all contained in a flush Card. The standard pattern for HR administrative list views — employee directory, audit log.

**Figma:** [FilteredTable in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=55-5)

---

## Product context

Used in the HR role pages: `/hr/employees` (employee directory) and `/hr/audit` (audit log). The pattern handles search, categorical filtering, bulk data export, and CSV import — all within a single contained surface.

---

## Composed from

- [Card](/components/Card) — `flush` container
- [Input](/components/Input) — search input
- [Select](/components/Select) — filter dropdowns (department, status, date range)
- [Button](/components/Button) — export, import, clear filters actions (`ghost`, `sm`)
- [DataTable](/components/DataTable) — the table with checkbox + data columns
- [Chip](/components/Chip) — status labels within table cells
- [Modal](/components/Modal) — import modal (triggered from toolbar)

---

## Anatomy

```
┌─── Card (flush) ─────────────────────────────────────────────────────────────────┐
│                                                                                   │
│  ┌─ toolbar ─────────────────────────────────────────────────────────────────┐   │
│  │ [🔍 Search employees…]  [All Departments ▼]  [Status ▼]  ·  [↑ Import]   │   │
│  │                                                         [↓ Export]        │   │
│  └────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                   │
│  ┌─ DataTable ───────────────────────────────────────────────────────────────┐   │
│  │  ☐   Name ↕        Department      Status        Actions                 │   │
│  │  ☐   Maria Santos  Engineering   [Active ●]     [View] [Edit]            │   │
│  │  ☐   Carlos Reyes  HR            [Inactive ●]   [View] [Edit]            │   │
│  │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │   │
│  │                     No employees found                                   │   │
│  └────────────────────────────────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────────────────────────────┘
```

### Toolbar structure

- **Search Input** — text search, full client-side filter or server-sent query param
- **Filter Selects** — 1–3 dropdowns for categorical filters (department, status, type)
- **Spacer** (`.spacer`) — pushes action buttons to the right
- **Action buttons** — export (CSV download) and import (opens ImportModal)

---

## States

| State | Table display |
|---|---|
| Loading | Empty row with "Loading…" message (via DataTable `empty` prop) |
| No results | "No matching employees" message |
| With data | Full table with rows |
| Filtered | Rows filtered by active search/select values |

---

## Responsive behavior

- **Toolbar**: wraps to multiple lines on mobile (`flex-wrap: wrap`)
- **Table**: uses `table--stack` — rows collapse to labeled card-style blocks on mobile (≤720px)

---

## Do / Don't

**Do:** Use `flush` on the Card container so DataTable row borders align with the card edge.

**Don't:** Add pagination within the component — the current implementation fetches `per_page=300`. If pagination is needed in the future, it should be added to the toolbar (not inside the table).

**Do:** Provide an `aria-label` on the search Input identifying what is being searched.

---

## Accessibility

- Search Input should have `aria-label="Search employees"` (label not provided visually via FormField in toolbar context)
- Filter Selects should have `aria-label` describing the filter dimension
- DataTable checkbox column must have `aria-label` per row and `aria-checked` state
- Export and import buttons must have accessible labels (current icon-only buttons need `aria-label`)

---

## Source reference

`apps/web/src/pages/hr/Employees.tsx`  
`apps/web/src/pages/hr/Audit.tsx`  
CSS: `packages/xhr-ui/app.css` (`.emp-toolbar`, `.table`, `.table--stack`, `.empty`)
