# LeaveModal

A leave filing form modal. Fetches the eligible leave type catalog from the server, validates dates, and submits the leave request. Follows the [FormModal pattern](/patterns/FormModal).

**Figma:** [FormModal in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=40-23) (part of FormModal pattern page)

---

## Purpose

LeaveModal is the primary leave filing entry point. It appears in the employee Leave page, the employee Schedule page (when tapping an absent day), and the HR employee detail view. It handles eligibility filtering, attachment requirements, and pool validation from the server.

---

## Anatomy

Follows the [FormModal pattern](/patterns/FormModal):

```
┌─── Modal (md) ──────────────────────────────────┐
│  File Leave Request                    [×]      │
├─────────────────────────────────────────────────┤
│  [Banner danger — conditional API error]        │
│                                                 │
│  FormField: Leave Type                          │
│  ├── Select (filtered to eligible types)        │
│                                                 │
│  ┌── 2-col grid ──────────────────────────────┐ │
│  │  FormField: From    │  FormField: To       │ │
│  │  └── Input type=date└── Input type=date   │ │
│  └────────────────────────────────────────────┘ │
│                                                 │
│  FormField: Reason (Textarea)                   │
│  FormField: Attachment (conditional)            │
├─────────────────────────────────────────────────┤
│                      [Cancel]  [Submit Request] │
└─────────────────────────────────────────────────┘
```

---

## Business logic

- Fetches leave types from `/v1/leave/types` — filters to `eligible: true` for the current user (server-computed)
- `needsAttachment` and `drawsFromPool` flags come from the selected leave type
- UI validates `end_date ≥ start_date` before submission
- Mutation resets form state when `open` changes (via `useEffect`)
- Submit button disables during pending state; text changes to `'Submitting…'`

---

## States

| State | Description |
|---|---|
| Loading types | Select shows "Loading…" option |
| Idle | Empty form |
| Filled | Valid date range + type selected |
| API error | Banner danger appears above the form |
| Submitting | Submit button disabled + text "Submitting…" |

---

## Code example

```tsx
import { LeaveModal } from '@/components/LeaveModal'

function LeavePage() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>File Leave</Button>
      <LeaveModal
        open={open}
        onClose={() => setOpen(false)}
        onDone={() => {
          setOpen(false)
          refetchLeaveHistory()
        }}
      />
    </>
  )
}

// Pre-fill from schedule absent-day action
<LeaveModal
  open={open}
  onClose={handleClose}
  onDone={handleDone}
  initialDate="2026-07-15"
/>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls modal visibility |
| `onClose` | `() => void` | — | Called on cancel or close button |
| `onDone` | `() => void` | — | Called on successful submission |
| `initialDate` | `string` | — | Pre-fills both from and to date fields (ISO date) |

---

## Source reference

`apps/web/src/components/LeaveModal.tsx:25`

## Related

- [FormModal pattern](/patterns/FormModal) — the general pattern this follows
- [Modal](/components/Modal) — the shell component
- [CorrectionModal](/components/CorrectionModal) — sibling form modal for time corrections
- [Banner](/components/Banner) — used for API error display
