# FormField

A composite wrapper that pairs a label, a form control (Input, Select, or Textarea), a hint message, and an error message. Wires the label to the control automatically via `React.useId()`.

**Figma:** [FormField in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=21-23)

---

## When to use

- Wrap every Input, Select, or Textarea used in a form
- Provides consistent label/error/hint layout across all forms in the application

## When NOT to use

- Do not use FormField without a control child — it provides the wrapper only
- Do not manually implement label+error layout outside FormField for form controls

---

## Anatomy

```
[label text]
┌─────────────────────────────────────┐
│ [Input / Select / Textarea]         │
└─────────────────────────────────────┘
[hint or error text]
```

- **container** — vertical flex, gap 6px
- **label** — optional `<label>` wired to the control via generated id
- **control** — the single child (Input, Select, or Textarea)
- **hint** — optional helper text (gray, below control)
- **error** — shown instead of hint when an error string is provided (red text)

---

## Variants

| State | Description |
|---|---|
| Default | Label + control + optional hint |
| Error | Label + control + error text (hint replaced) |
| No label | Control only; pass `htmlFor` explicitly if needed |

Hint and error are **mutually exclusive** — when both `hint` and `error` are set, `error` takes priority and `hint` is hidden.

---

## Sizing and spacing

- Container gap: 6px (not a token)
- Label font: `--fs-14` / weight 600 / `--ink-700`
- Hint font: `--fs-12` / `--ink-500`
- Error font: `--fs-12` / `--danger-500`
- Margin between fields: `--s-4`

---

## Do / Don't

**Do:** Always use FormField around Input, Select, or Textarea in forms.

**Don't:** Use `hint` and `error` simultaneously — the component silently drops the hint when an error is present. This is intentional behavior, not a bug.

**Do:** Use `htmlFor` when the child control has a specific external `id` (e.g., a Select with custom option handling).

---

## Accessibility

- Label is auto-wired to the child control via `React.useId()` — no manual `id`/`htmlFor` needed in most cases
- Error text should be associated with the control via `aria-describedby` — the consuming page should add `aria-invalid="true"` and `aria-describedby` to the Input/Select when an error is shown
- Do not rely on color alone to communicate the error state — the error message text is always required

---

## Code example

```tsx
import { FormField, Input, Select, Textarea } from '@xhr/ui'

// Standard field with hint
<FormField label="Start Date" hint="Format: YYYY-MM-DD">
  <Input type="date" />
</FormField>

// Field with error
<FormField label="Leave Type" error="Please select a leave type">
  <Select value="" onChange={handleChange}>
    <option value="">Select…</option>
  </Select>
</FormField>

// Field without label (aria-label on control)
<FormField>
  <Input type="search" aria-label="Search employees" placeholder="Search…" />
</FormField>

// Reason textarea
<FormField
  label="Reason"
  hint="Required for sick leave and emergency leave"
  error={errors.reason}
>
  <Textarea value={reason} onChange={e => setReason(e.target.value)} />
</FormField>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Label text above the control |
| `hint` | `string` | — | Helper text below the control |
| `error` | `string` | — | Error text — shown instead of hint |
| `htmlFor` | `string` | — | Override the generated label `for` attribute |
| `children` | `ReactNode` | — | The form control (Input, Select, or Textarea) |

---

## Token usage

| Layer | Token |
|---|---|
| Label font size | `--fs-14` |
| Label weight | 600 |
| Label color | `--ink-700` |
| Hint font size | `--fs-12` |
| Hint color | `--ink-500` |
| Error font size | `--fs-12` |
| Error color | `--danger-500` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:117`  
CSS: `packages/xhr-ui/app.css` (`.form-field`, `.form-field__label`, `.form-field__hint`, `.form-field__error`)

## Related

- [Input](/components/Input)
- [Select](/components/Select)
- [Textarea](/components/Textarea)
- [FormModal pattern](/patterns/FormModal)
