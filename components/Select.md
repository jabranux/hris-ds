# Select

A `forwardRef` styled select wrapper. Visually identical to [Input](/components/Input), with a custom chevron indicator replacing the native `<select>` arrow.

**Figma:** [Select in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=18-31)

---

## When to use

- Provide a dropdown of enumerated options (leave type, department, status filter)
- When the option list is fixed and known at render time

## When NOT to use

- For free-text input, use [Input](/components/Input)
- For large or searchable option sets, consider a custom combobox (not yet implemented)
- Do not use Select when fewer than 3 options exist — use radio buttons or Chips as toggles instead

---

## Anatomy

```
┌─────────────────────────────────────┐
│ Selected value                  ▼   │
└─────────────────────────────────────┘
  select-field (full-width, fixed height) + chevron overlay
```

- The chevron (▼) is applied via an inline SVG `background-image` on the `.select` class — it is decorative and not interactive separately

---

## States

Same 4 states as Input: default, focus, disabled, error.

---

## Sizing and spacing

- Height: 40px (fixed — matches Input)
- Padding: 11px / 14px (right padding extended for chevron)
- Border radius: `--r-md`
- Font: `--fs-14`
- Width: 100% of container

---

## Code example

```tsx
import { Select, FormField } from '@xhr/ui'

<FormField label="Leave Type">
  <Select value={leaveType} onChange={e => setLeaveType(e.target.value)}>
    <option value="">Select a type…</option>
    <option value="annual">Annual Leave</option>
    <option value="sick">Sick Leave</option>
    <option value="emergency">Emergency Leave</option>
  </Select>
</FormField>

// Filter toolbar (no FormField needed — label provided contextually)
<Select
  value={departmentFilter}
  onChange={e => setDepartmentFilter(e.target.value)}
  aria-label="Filter by department"
>
  <option value="">All Departments</option>
  {departments.map(d => (
    <option key={d.id} value={d.id}>{d.name}</option>
  ))}
</Select>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Native disabled state |
| `value` | `string` | — | Controlled value |
| `onChange` | `ChangeEventHandler` | — | Change handler |
| `ref` | `Ref<HTMLSelectElement>` | — | Forwarded ref |
| `children` | `ReactNode` | — | `<option>` elements |
| `...rest` | All native `<select>` props | — | |

---

## Token usage

Same token bindings as [Input](/components/Input). Right-padding extended to accommodate the chevron.

---

## Source reference

`packages/xhr-ui/src/index.tsx:102`  
CSS: `packages/xhr-ui/app.css` (`.select`)

## Related

- [Input](/components/Input)
- [FormField](/components/FormField)
