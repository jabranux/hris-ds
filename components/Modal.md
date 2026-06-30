# Modal

A centered overlay dialog used for confirmations, data entry forms, and detail views that require focused user attention.

**Figma:** [Modal in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=22-30)

---

## When to use

- Present a form that requires focused input before returning to the page (leave filing, time correction)
- Confirm a destructive or irreversible action
- Display supplementary detail without navigating away from the current context

## When NOT to use

- Do not use Modal for complex multi-step workflows that exceed 2–3 steps — use a full page or dedicated flow
- Do not use Modal for simple confirmation messages where a banner or inline message would suffice
- Do not use Modal for non-dismissable content — users must always be able to close via the backdrop or close button

---

## Anatomy

```
┌────────── overlay (scrim) ────────────┐
│                                       │
│  ┌─────────── panel ────────────┐     │
│  │  [Title]              [×]   │     │
│  ├──────────────────────────────┤     │
│  │  [body / children slot]      │     │
│  ├──────────────────────────────┤     │
│  │  [footer slot]               │     │
│  └──────────────────────────────┘     │
│                                       │
└───────────────────────────────────────┘
```

- **overlay** — full-viewport scrim (`rgba(15,19,32,0.45)`); clicking it calls `onClose`
- **panel** — centered white card with `shadow/pop`, `radius/lg`
- **header** — flex row: title (left) + close icon button (right)
- **body** — slot for content; scrollable (max-height constrained)
- **footer** — optional slot for action buttons (right-aligned)

---

## Variants

| Property | Values | Default |
|---|---|---|
| `size` | `'md'` / `'lg'` | `'md'` |

| Size | Max-width | Use case |
|---|---|---|
| `md` | 520px | Standard forms, confirmations |
| `lg` | 880px | Wide forms, data review panels, CSV import |

---

## States

| State | Behavior |
|---|---|
| Open | Panel and overlay rendered |
| Closed | Component returns `null` — no DOM presence, no animation |

Note: There is no open/close animation in the current implementation. The modal is either present or absent.

---

## Sizing and spacing

- Panel padding: `--s-5` / `--s-6`
- Header padding: `--s-4` / `--s-5`
- Footer padding: `--s-4` / `--s-5` (right-aligned)
- Shadow: `--sh-pop`
- Radius: `--r-lg`

---

## Content guidance

- Modal `title` should be short (3–5 words) and action-oriented ("File Leave Request", "Approve Overtime")
- Footer should contain at most 2 buttons: a primary action and a Cancel/ghost action
- Body content that may overflow should handle its own scroll — the modal body has a max-height

---

## Do / Don't

**Do:** Always provide an `onClose` handler and ensure the backdrop click also closes the modal.

**Don't:** Block backdrop close for non-critical modals — always give the user an escape route.

**Do:** Place the Banner (danger) at the top of the modal body for API errors.

**Don't:** Stack multiple modals — only one modal should be open at a time.

---

## Accessibility

**⚠ Known gap:** Focus trap is NOT implemented. When the modal opens, focus does not automatically move to the modal content. Keyboard users can tab out of the modal. This is a known accessibility debt.

Recommended remediation:
- Add `focus-trap` library or implement `inert` attribute on the background
- Move focus to the modal title or first interactive element on open
- Return focus to the triggering element on close
- Add `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` pointing to the title

Current implementation: `role="dialog"` and `aria-modal` are set on the panel. Focus management and trap are absent.

---

## Code example

```tsx
import { Modal, Button, FormField, Input } from '@xhr/ui'
import { useState } from 'react'

function LeaveFormExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>File Leave</Button>
      <Modal
        open={open}
        title="File Leave Request"
        onClose={() => setOpen(false)}
        size="md"
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </>
        }
      >
        <FormField label="Leave Type">
          <Select>...</Select>
        </FormField>
        <FormField label="Start Date">
          <Input type="date" />
        </FormField>
      </Modal>
    </>
  )
}
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controls visibility |
| `title` | `string` | — | Modal header title |
| `onClose` | `() => void` | — | Called on backdrop click or close button click |
| `children` | `ReactNode` | — | Modal body content |
| `footer` | `ReactNode` | — | Optional footer content (action buttons) |
| `size` | `'md' \| 'lg'` | `'md'` | Panel max-width |

---

## Token usage

| Layer | Token |
|---|---|
| Overlay fill | `rgba(15,19,32,0.45)` (not tokenized) |
| Panel fill | `--surface-card` |
| Panel shadow | `--sh-pop` |
| Panel radius | `--r-lg` |
| Title font | `--fs-18` / 600 |
| Title color | `--ink-900` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:173`  
CSS: `packages/xhr-ui/app.css` (`.modal`, `.modal__overlay`, `.modal__panel`, `.modal__header`, `.modal__body`, `.modal__footer`, `.modal--lg`)

## Related

- [FormModal pattern](/patterns/FormModal) — the standard pattern for forms inside Modal
- [LeaveModal](/components/LeaveModal) — product instance of FormModal
- [CorrectionModal](/components/CorrectionModal) — product instance of FormModal
