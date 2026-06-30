# ApprovalsInbox

A master/detail two-column approval queue. The left column is a scrollable inbox list with checkboxes and SLA countdown chips; the right column shows the full detail of the selected request with approve/reject actions.

**Figma:** [ApprovalsInbox in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=26-24)

---

## Product context

Used exclusively on the leader `/leader/approvals` page. Aggregates all pending approval requests across types (Leave, Overtime, Correction, RTO) in a single inbox. Leaders can approve or reject individually or in bulk.

---

## Composed from

- [Card](/components/Card) — inbox panel (flush) and detail panel
- [Chip](/components/Chip) — SLA countdown, approval type labels
- [Button](/components/Button) — approve/reject actions, tab filter bar
- [Banner](/components/Banner) — bulk action info banner
- [Textarea](/components/Textarea) — optional note before approval/rejection
- [ListRow](/components/ListRow) — detail field display

---

## Anatomy

```
[Tab filter: All | Leave | Overtime | Corrections | RTO]

┌──── Inbox panel (Card flush) ───────────┬──── Detail panel (Card) ──────────────────┐
│ ☐  Select all                           │  [Title] Sick Leave – 3 days  [Leave ●]   │
│                                         │                                            │
│ ☐ ┌──┐  Maria Santos – Annual Leave     │  Employee:     Maria Santos               │
│   │🌴│  3 days · Due in 2h      [!]    │  Department:   Engineering                │
│   └──┘                                 │  Leave Type:   Annual Leave               │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │  From / To:    June 30 – July 2           │
│ ● ┌──┐  Carlos Reyes – Overtime         │  Reason:       Family emergency            │
│   │＋│  4 hours · Overdue       [!!]   │                                            │
│   └──┘                                 │  [Notes (optional)  Textarea ]             │
│                                         │                                            │
│                                         │  [Reject]                   [Approve]     │
└─────────────────────────────────────────┴────────────────────────────────────────────┘

(Bulk banner — conditional when ≥1 checked)
┌─── [info] 2 selected   [Approve All]  [Reject All] ───────────────────────────────┐
```

---

## InboxRow anatomy

- **checkbox** — leading multi-select
- **kind-icon** — 34×34px rounded tile with emoji/icon for the request type
- **body** — employee name + summary (bold) + sub-label (type · duration)
- **sla-chip** — trailing Chip indicating time until SLA breach
- **active-indicator** — 3px left-border inset in `--qx-orange-500` for selected row

---

## SLA chip logic

| Remaining time | Chip tone | Label example |
|---|---|---|
| Overdue | `danger` | "Overdue" |
| ≤ 4 hours | `warning` | "Due in 3h" |
| > 4 hours | `info` | "Due in 14h" |

---

## Tab filter bar

Buttons styled as a tab group (primary = active, secondary = inactive). Counts shown in trailing pill badges. Types: All, Leave, Overtime, Corrections, RTO.

---

## Responsive behavior

- **≥861px**: 2-column split layout (inbox left, detail right)
- **≤860px**: Single-column stacked; detail panel moves below inbox on selection

---

## Accessibility

- Checkboxes must have `aria-label` describing the request
- "Select all" checkbox should support indeterminate state (`ref.indeterminate = true`) — currently implemented via DOM ref
- Active inbox row should have `aria-selected="true"`
- Tab filter buttons should use `role="tab"` with `aria-selected` if implementing proper tab panel semantics

---

## Source reference

`apps/web/src/pages/leader/Approvals.tsx`  
CSS: `packages/xhr-ui/app.css:689` (`.approvals`, `.approvals__list`, `.inbox-row`, `.inbox-row__body`, `.inbox-row.is-active`)
