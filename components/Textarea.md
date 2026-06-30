# Textarea

A `forwardRef` styled multi-line text input wrapper. Visually identical to [Input](/components/Input) but taller and resizable vertically.

**Figma:** [Textarea in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=18-32)

---

## When to use

- Collect multi-line text: leave reasons, correction notes, HR comments
- When a single line of text is insufficient for the expected content length

## When NOT to use

- For single-line input, use [Input](/components/Input)
- For rich-text or formatted content (not needed in the current HRIS scope)

---

## States

Same 4 states as Input: default, focus, disabled, error.

---

## Sizing and spacing

- Min-height: 96px (fixed minimum — resizable upward)
- `resize: vertical` — users can resize upward
- Padding: 11px / 14px
- Border radius: `--r-md`
- Font: `--fs-14`
- Width: 100% of container

---

## Code example

```tsx
import { Textarea, FormField } from '@xhr/ui'

<FormField label="Reason for leave" hint="Please describe your leave reason">
  <Textarea
    value={reason}
    onChange={e => setReason(e.target.value)}
    placeholder="Enter reason…"
  />
</FormField>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Native disabled |
| `value` | `string` | — | Controlled value |
| `onChange` | `ChangeEventHandler` | — | Change handler |
| `rows` | `number` | — | Optional row count override |
| `ref` | `Ref<HTMLTextAreaElement>` | — | Forwarded ref |
| `...rest` | All native `<textarea>` props | — | |

---

## Token usage

Same as [Input](/components/Input). Min-height is 96px, not a token value.

## Source reference

`packages/xhr-ui/src/index.tsx:109`  
CSS: `packages/xhr-ui/app.css` (`.textarea`)

## Related

- [FormField](/components/FormField)
- [Input](/components/Input)
