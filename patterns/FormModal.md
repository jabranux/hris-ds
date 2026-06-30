# FormModal

The standard HRIS pattern for presenting a data-entry form inside a Modal. Used in at least 3 places in the application with consistent structure: a danger Banner for errors, FormField rows, and a Cancel + primary action footer.

**Figma:** [FormModal in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=40-23)

---

## Product context

This pattern standardizes the form-inside-modal experience across the HRIS application. All form modals follow the same structural rules, ensuring consistent user experience regardless of which specific modal is open.

**Known instances:**
1. **LeaveModal** — leave filing (`LeaveModal.tsx`)
2. **CorrectionModal** — time correction (`CorrectionModal.tsx`)
3. **ImportModal** — CSV employee import (`/hr/employees` inline component)

---

## Composed from

- [Modal](/components/Modal) — the outer shell (`size="md"` standard; `size="lg"` for wide forms)
- [Banner](/components/Banner) — `tone="danger"` for server error display (conditional)
- [FormField](/components/FormField) — each form control
- [Input](/components/Input), [Select](/components/Select), [Textarea](/components/Textarea) — as appropriate
- [Button](/components/Button) — footer actions (`ghost` Cancel + `primary` Submit)

---

## Anatomy

```
┌─── Modal ──────────────────────────────────────────┐
│  [Action Title]                            [×]    │  ← header
├────────────────────────────────────────────────────┤
│  [Banner tone="danger" — conditional]              │  ← API error
│                                                    │
│  FormField                                         │
│  └── [Input / Select / Textarea]                  │
│                                                    │
│  FormField                                         │
│  └── [Input / Select / Textarea]                  │
│                                                    │
│  [2-col grid of FormFields — optional]             │
│                                                    │
├────────────────────────────────────────────────────┤
│                     [Cancel]   [Submit Action]     │  ← footer
└────────────────────────────────────────────────────┘
```

---

## Rules of the pattern

1. **Modal title is action-oriented** — verb + noun (e.g. "File Leave Request", "Request Time Correction", "Import Employees")
2. **Banner comes first in the body** — conditional danger banner at the top, before any form fields, so the error is immediately visible
3. **Footer has exactly 2 buttons** — ghost `Cancel` (left) and primary `Submit action` (right)
4. **Submit disables + text swaps during mutation** — `disabled` + text change to `'Submitting…'` or `'Uploading…'`
5. **Form resets on close** — `useEffect(() => { reset() }, [open])` ensures clean state when reopened
6. **Size is `md` by default** — use `lg` only for forms with 5+ fields or a wide data preview (e.g. import CSV preview table)

---

## State management convention

```
idle       → form is empty, submit enabled
filled     → required fields have values, submit enabled
submitting → mutation pending, submit disabled + text swaps
error      → Banner danger visible, submit re-enabled
success    → onDone() is called, modal closes externally
```

---

## Example implementation structure

```tsx
import { Modal, Banner, FormField, Input, Select, Button } from '@xhr/ui'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

function ExampleFormModal({ open, onClose, onDone }) {
  const [error, setError] = useState<string | null>(null)
  const [field, setField] = useState('')

  const mutation = useMutation({
    mutationFn: (data) => api.submitSomething(data),
    onSuccess: () => onDone(),
    onError: (e) => setError(e.message),
  })

  useEffect(() => {
    if (!open) {
      setField('')
      setError(null)
    }
  }, [open])

  return (
    <Modal
      open={open}
      title="Do Something"
      onClose={onClose}
      size="md"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button
            variant="primary"
            disabled={mutation.isPending || !field}
            onClick={() => mutation.mutate({ field })}
          >
            {mutation.isPending ? 'Submitting…' : 'Submit'}
          </Button>
        </>
      }
    >
      {error && <Banner tone="danger">{error}</Banner>}
      <FormField label="Field Label" hint="Helper text">
        <Input value={field} onChange={e => setField(e.target.value)} />
      </FormField>
    </Modal>
  )
}
```

---

## Known instances

| Instance | File | Size | Fields |
|---|---|---|---|
| LeaveModal | `LeaveModal.tsx` | `md` | Leave type, from/to dates, reason, attachment |
| CorrectionModal | `CorrectionModal.tsx` | `md` | Date, clock-in time, clock-out time, reason |
| ImportModal | `Employees.tsx` (inline) | `lg` | CSV file upload + result preview table |

---

## Do / Don't

**Do:** Always place the Banner before the first FormField in the modal body.

**Don't:** Show hint text on a field that already has an error — the FormField component shows only error text when both are set.

**Do:** Disable the submit button while the mutation is pending and restore it if an error occurs.

**Don't:** Close the modal on API error — keep it open so the user can correct and resubmit.

---

## Accessibility

- See [Modal accessibility notes](/components/Modal#accessibility) — focus trap is not yet implemented
- All form controls must have labels via FormField
- Submit button state change (disabled + text swap) should not rely on color alone — the text change makes it perceivable
- Error Banner should have `role="alert"` so it is announced immediately when it appears

---

## Source reference

Pattern synthesized from:
- `apps/web/src/components/LeaveModal.tsx`
- `apps/web/src/components/CorrectionModal.tsx`
- `apps/web/src/pages/hr/Employees.tsx` (ImportModal inline component)
