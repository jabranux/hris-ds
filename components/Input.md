# Input

A `forwardRef` text input wrapper that injects the `.input` CSS class. Accepts all native HTML `<input>` attributes and exposes a ref for programmatic focus.

**Figma:** [Input in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=18-30)

---

## When to use

- Collect single-line text, date, time, number, or password input from the user
- Always wrap inside a [FormField](/components/FormField) to provide label and error handling

## When NOT to use

- For multi-line input, use [Textarea](/components/Textarea)
- For enumerated options, use [Select](/components/Select)
- Do not use Input directly without a FormField unless the label is provided by other means (e.g. `aria-label`)

---

## Anatomy

```
┌─────────────────────────────────────┐
│ placeholder or typed value          │
└─────────────────────────────────────┘
  input-field (full-width, fixed height)
```

Single element — the styled `<input>` itself.

---

## Variants

Input has no variant prop. States are applied via native HTML attributes and CSS pseudo-classes.

| State | Visual | How triggered |
|---|---|---|
| Default | Gray border (`--border-strong`) | No user interaction |
| Focus | Orange border + orange background ring | `:focus-visible` |
| Disabled | 55% opacity, `not-allowed` cursor | `disabled` HTML attribute |
| Error | Red border | Outer FormField adds `.form-field--error` class |

---

## Sizing and spacing

- Height: 40px (fixed — intentional control height)
- Padding: 11px / 14px
- Border radius: `--r-md`
- Font: `--fs-14`
- Width: 100% of container

---

## Do / Don't

**Do:** Always pair with FormField to provide a label and error state.

**Don't:** Use `type="text"` for dates — use `type="date"` which applies proper native controls.

**Do:** Use `placeholder` for format hints, not for label replacement.

---

## Accessibility

- Renders a native `<input>` — all native keyboard, focus, and assistive-technology behaviors are inherited
- When used inside FormField, the label is wired via `React.useId()` — no manual `id`/`htmlFor` needed
- Focus ring uses `--qx-orange-300` for visibility
- Error state: the parent FormField conveys the error message; the input itself should also receive `aria-invalid="true"` and `aria-describedby` pointing to the error message — see FormField for details

---

## Code example

```tsx
import { Input, FormField } from '@xhr/ui'

// Standard usage inside FormField
<FormField label="Employee Name" hint="Enter the full legal name">
  <Input type="text" placeholder="e.g. Maria Santos" />
</FormField>

// With error state
<FormField label="Start Date" error="Start date is required">
  <Input type="date" />
</FormField>

// Disabled
<FormField label="Employee ID">
  <Input type="text" value="EMP-1042" disabled />
</FormField>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | `'text'` | Native input type |
| `disabled` | `boolean` | `false` | Native disabled state |
| `placeholder` | `string` | — | Placeholder text |
| `value` | `string` | — | Controlled value |
| `onChange` | `ChangeEventHandler` | — | Change handler |
| `ref` | `Ref<HTMLInputElement>` | — | Forwarded ref |
| `...rest` | All native `<input>` props | — | |

---

## Token usage

| Layer | Token |
|---|---|
| Fill | `--surface-card` → `--white` |
| Border (default) | `--border-strong` → `--ink-300` |
| Border (focus) | `--qx-orange-400` |
| Focus ring fill | `--qx-orange-100` (3px spread) |
| Text color | `--ink-900` |
| Placeholder color | `--ink-400` |
| Radius | `--r-md` |
| Font | `--fs-14` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:96`  
CSS: `packages/xhr-ui/app.css` (`.input`)

## Related

- [FormField](/components/FormField) — always wrap Input in FormField
- [Select](/components/Select) — for enumerated options
- [Textarea](/components/Textarea) — for multi-line input
