# WeekGrid

A 7-column CSS grid showing Monday–Sunday schedule cells for the employee and leader schedule pages. Each cell shows a day label, shift type, attendance status, and optional holiday or correction action.

**Figma:** [WeekGrid in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=54-5)

---

## Product context

The WeekGrid is the primary view on the employee `/employee/schedule` page and the leader `/leader/schedule` page. It lets employees review their weekly schedule, check attendance status per day, and trigger leave or correction actions for eligible days. The leader schedule uses a tabular row-per-employee variant (`.sched-grid`) rather than the day-cell grid.

---

## Composed from

- [Card](/components/Card) — week header nav card (prev/this/next)
- [Chip](/components/Chip) — attendance status chips + holiday indicator chips
- [Button](/components/Button) — correction CTA on absent days (`size="sm"`)
- [CorrectionModal](/components/CorrectionModal) — triggered from absent-day cells

---

## Anatomy

```
┌─── Week header card ──────────────────────────────────────────────┐
│  [◄ Prev]    Week of 23–29 June 2026    [This Week]  [Next ►]    │
└───────────────────────────────────────────────────────────────────┘

┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ Mon  │ │ Tue  │ │ Wed ★│ │ Thu  │ │ Fri  │ │ Sat  │ │ Sun  │
│  23  │ │  24  │ │  25  │ │  26  │ │  27  │ │  28  │ │  29  │
│ ●DAY │ │ ●DAY │ │ ●DAY │ │ ●DAY │ │ REST │ │ REST │ │ REST │
│Complete│ │Complete│ │Open  │ │Absent│ │      │ │      │ │      │
│      │ │      │ │      │ │[Fix] │ │      │ │      │ │      │
└──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘
  DayCell (7 per row — CSS grid)

[Legend: ● Day Shift  ● Night Shift  — Rest]
```

### DayCell anatomy

- **day-label** — weekday abbreviation (eyebrow) + date number (large)
- **shift-pill** — color-coded pill for shift type (day/night/rest)
- **status-chip** — Chip with attendance status
- **holiday-badge** — conditional Chip for holidays with rate
- **correction-btn** — "Request Correction" Button (sm, ghost) — shows on absent days

---

## Variants

| Property | Values |
|---|---|
| `is-today` | `false` / `true` — orange border highlight on today's cell |
| `shift-type` | `day` (orange pill) / `night` (gray pill) / `rest` (neutral) / `empty` |
| `status` | See precedence table below |

### Attendance status precedence

Status chips are assigned using a defined precedence order:

| Priority | Status | Chip tone |
|---|---|---|
| 1 (highest) | REST | `default` |
| 2 | Leave approved | `success` |
| 3 | Leave pending | `warning` |
| 4 | Complete | `success` |
| 5 | Open | `default` |
| 6 | Absent | `danger` + correction CTA |
| 7 | Scheduled (future) | `info` |
| 8 | — (no record) | none |

---

## Responsive behavior

- **≥721px**: 7-column CSS grid (`grid-template-columns: repeat(7, 1fr)`)
- **≤720px**: Single-column stacked cards; each cell flips to row layout (day info left, shift/status right)

---

## Do / Don't

**Do:** Show the correction CTA button only on `absent` days where `correction_allowed` is true for the employee.

**Don't:** Show both a holiday chip and a shift pill for rest days — rest days should not show a shift pill.

---

## Accessibility

- Day cells should have `role="listitem"` or appropriate grid role attributes
- Today's highlighted cell should be indicated via `aria-label` containing the date and "(today)"
- Correction button should have a clear `aria-label`: `"Request time correction for June 26"`
- Status chip colors must not be the sole status indicator — the text label is always required

---

## Source reference

`apps/web/src/pages/employee/Schedule.tsx`  
CSS: `packages/xhr-ui/app.css:631` (`.week-grid`, `.day-cell`, `.day-cell.is-today`, `.shift-pill`)
