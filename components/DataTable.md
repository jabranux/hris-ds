# DataTable

A generic typed table component that renders a responsive HTML table with column definitions and row data. Handles the empty state. Does not include built-in sorting, filtering, or pagination — those are implemented at the page level.

**Figma:** [DataTable in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=23-2)

---

## When to use

- Display structured tabular data (employee list, attendance records, approval history, audit log)
- Any view that benefits from the mobile stacking behavior (rows collapse to labeled cards on mobile)

## When NOT to use

- For simple list views without multiple columns, use [ListRow](/components/ListRow) instead
- For a single row of summary data, use [StatTile](/components/StatTile)

---

## Anatomy

```
┌─────────────────────────────────────────────────┐
│  Column A    Column B    Column C    Column D   │  ← thead (eyebrow style)
├─────────────────────────────────────────────────┤
│  Cell A1     Cell B1     Cell C1     Cell D1   │  ← tbody row
│  Cell A2     Cell B2     Cell C2     Cell D2   │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│          No records (empty state)               │  ← empty state
└─────────────────────────────────────────────────┘
```

- **thead** — sticky header row with eyebrow-style column labels
- **tbody** — data rows with bottom border and hover fill
- **empty-state** — centered message when `rows` is empty

---

## Variants / States

| State | Behavior |
|---|---|
| Default (with data) | Full table renders |
| Empty | Single-cell row with `empty` text message |
| Loading | Pages show `"Loading…"` in the `empty` prop — no loading skeleton built in |

---

## Responsive behavior

On mobile (`≤720px`), the `table--stack` class hides `<thead>` and makes each cell show its column header via `data-label` in a `td::before` pseudo-element. Rows become labeled card-like blocks.

---

## Sizing and spacing

- Width: 100% of container
- `thead` background: `--surface-bg`
- `thead` text: `--fs-12` / 600 / `--ink-500` (eyebrow style)
- `tbody` row border: `1px solid var(--border)`
- `tbody` hover: `--ink-50` fill
- Cell padding: `--s-3` / `--s-4`

---

## Do / Don't

**Do:** Wrap DataTable in a `<Card flush>` to give it a contained surface with edge-to-edge row borders.

**Don't:** Add sorting or filtering to the DataTable itself — those belong at the page/FilteredTable pattern level.

**Do:** Use the `render` column property to inject custom JSX (Chip, Button, EmpPhoto) into cells.

**Don't:** Render DataTable with 0 columns — always define at least one `Column<T>`.

---

## Accessibility

- Uses a semantic `<table>` element with `<thead>`, `<th>`, and `<td>` — accessible to screen readers by default
- Column headers (`<th>`) have implicit `scope="col"` — add explicitly if needed for complex tables
- On mobile, the `data-label` approach provides context but may not be fully accessible to all screen readers — test with VoiceOver/NVDA for critical tables
- Checkbox columns: add `aria-label` to each checkbox and a `aria-checked` state

---

## Code example

```tsx
import { DataTable } from '@xhr/ui'
import type { Column } from '@xhr/ui'
import { Chip, Button } from '@xhr/ui'

type Employee = {
  id: string
  name: string
  department: string
  status: 'active' | 'inactive'
}

const columns: Column<Employee>[] = [
  { key: 'name', header: 'Employee' },
  { key: 'department', header: 'Department' },
  {
    key: 'status',
    header: 'Status',
    render: (row) => (
      <Chip tone={row.status === 'active' ? 'success' : 'default'}>
        {row.status}
      </Chip>
    ),
  },
  {
    key: 'id',
    header: '',
    render: (row) => (
      <Button size="sm" variant="ghost" onClick={() => viewEmployee(row.id)}>
        View
      </Button>
    ),
  },
]

// With data
<DataTable columns={columns} rows={employees} />

// Empty state
<DataTable columns={columns} rows={[]} empty="No employees found" />

// Loading state (pages use the empty prop)
<DataTable columns={columns} rows={[]} empty="Loading…" />
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `Column<T>[]` | — | Column definitions |
| `rows` | `T[]` | — | Data rows |
| `empty` | `string` | `'No records'` | Message shown when rows is empty |

### Column&lt;T&gt; type

| Field | Type | Description |
|---|---|---|
| `key` | `keyof T` | Property key to read from each row |
| `header` | `string` | Column header label |
| `render` | `(row: T) => ReactNode` | Optional custom cell renderer |

---

## Token usage

| Layer | Token |
|---|---|
| `thead` background | `--surface-bg` → `--ink-50` |
| `thead` text | `--fs-12` / 600 / `--ink-500` |
| `tbody` row border | `--border` |
| `tbody` hover fill | `--surface-bg` |
| `td` font | `--fs-14` |
| `td` padding | `--s-3` / `--s-4` |
| Empty state color | `--ink-500` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:207`  
CSS: `packages/xhr-ui/app.css` (`.table`, `.table--stack`, `.empty`)

## Related

- [Card](/components/Card) — use `flush` Card to wrap DataTable
- [FilteredTable pattern](/patterns/FilteredTable) — full pattern with search, filters, and DataTable
- [Chip](/components/Chip) — used in table cells for status display
