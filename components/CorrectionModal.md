# CorrectionModal

A time correction form modal. Allows employees to correct their clock-in, clock-out, or both on a given date. Routes the correction request to a supervisor for approval. Follows the [FormModal pattern](/patterns/FormModal).

**Figma:** [FormModal in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=40-23) (part of FormModal pattern page)

---

## Purpose

CorrectionModal is used in the employee Schedule and Attendance pages for days where `correction_allowed` is true. The button is gated client-side (`correction_allowed` employee flag) and the server also enforces the permission.

---

## Anatomy

Follows the [FormModal pattern](/patterns/FormModal):

```
┌─── Modal (md) ───────────────────────────────────┐
│  Request Time Correction               [×]       │
├──────────────────────────────────────────────────┤
│  [Banner danger — conditional API error]         │
│                                                  │
│  FormField: Date  (pre-filled, read-only)        │
│                                                  │
│  FormField: Clock In Time                        │
│  └── Input type=time                            │
│                                                  │
│  FormField: Clock Out Time                       │
│  └── Input type=time                            │
│                                                  │
│  FormField: Reason (Textarea)                    │
├──────────────────────────────────────────────────┤
│                       [Cancel]  [Submit Request] │
└──────────────────────────────────────────────────┘
```

---

## Business logic

- Handles overnight shifts: if clock-out time ≤ clock-in time, the out time is assigned to the next calendar day
- Routes to supervisor approval server-side — the employee does not approve their own correction
- `correction_allowed` flag is enforced by the server; the schedule page also gates the trigger button client-side
- Submit button disables + text swaps during pending mutation state

---

## Code example

```tsx
import { CorrectionModal } from '@/components/CorrectionModal'

<CorrectionModal
  open={correctionOpen}
  onClose={() => setCorrectionOpen(false)}
  onDone={() => {
    setCorrectionOpen(false)
    refetchAttendance()
  }}
  initialDate="2026-06-29"
  initialField="clock_in_at"
  initialValue="08:15"
/>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls modal visibility |
| `onClose` | `() => void` | — | Called on cancel or close |
| `onDone` | `() => void` | — | Called on successful submission |
| `initialDate` | `string` | — | Pre-fills the date field (ISO date) |
| `initialField` | `'clock_in_at' \| 'clock_out_at'` | — | Which field to pre-focus/pre-fill |
| `initialValue` | `string` | — | Pre-fills the selected time field (HH:MM) |

---

## Source reference

`apps/web/src/components/CorrectionModal.tsx:28`

## Related

- [FormModal pattern](/patterns/FormModal)
- [Modal](/components/Modal)
- [LeaveModal](/components/LeaveModal) — sibling form modal
- [WeekGrid pattern](/patterns/WeekGrid) — triggers CorrectionModal from absent day cells
