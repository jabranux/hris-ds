# Banner

An inline alert or callout block used to surface contextual feedback — form errors, import results, workflow status notices, and API errors. Not dismissable by default.

**Figma:** [Banner in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=19-22)

---

## When to use

- Display a form validation error summary above the form
- Communicate the result of a server action (success, warning, error)
- Surface a workflow notice that applies to the full view (e.g. "Leave request pending approval")
- Show an API error inline within a modal or form

## When NOT to use

- Do not use Banner for transient, auto-dismissing notifications — use a toast/snackbar pattern
- Do not use Banner for empty states — use the `.empty` pattern
- Do not stack multiple Banners in one view without clear separation

---

## Anatomy

```
┌─────────────────────────────────────────┐
│ [icon]  [Content / message text]        │
└─────────────────────────────────────────┘
  container  icon (opt)  content
```

- **container** — flex row with tone-specific fill and border
- **icon** — optional leading slot (currently added as text/emoji in page code)
- **content** — any ReactNode (text, list, etc.)

---

## Variants

| Property | Values | Default |
|---|---|---|
| `tone` | `info` / `warning` / `success` / `danger` | `info` |

| Tone | Fill | Border | Text | Use case |
|---|---|---|---|---|
| `info` | `--info-50` | `#BCD2FF`* | `#1E3A8A`* | Informational notices, pending states |
| `warning` | `--warning-50` | `#FDE2B3`* | `#92400E`* | Cautions, soft failures |
| `success` | `--success-50` | `#B8E2C4`* | `#14532D`* | Completed actions, confirmations |
| `danger` | `--danger-50` | `#F5B5B5`* | `#7F1D1D`* | Errors, destructive outcomes |

*Border and text colors for Banner tones are hardcoded in source — not yet tokenized. A future token pass should add `color/semantic/{tone}-border` and `color/semantic/{tone}-on-subtle` variables.

---

## States

Banner has no interactive states — it is static and not dismissable.

---

## Sizing and spacing

- Padding: 12/16px (`--s-3` / `--s-4`)
- Radius: `--r-md`
- Border: 1px solid (tone-specific color)
- Width: 100% of its container

---

## Content guidance

- Keep banner messages concise — one to two sentences
- If listing multiple errors, use an unordered list inside the `children` prop
- Do not place interactive controls inside a banner

---

## Do / Don't

**Do:** Place the `danger` banner at the top of a form to summarize API errors returned from the server.

**Don't:** Use `info` tone for errors — tone must match the severity of the message.

**Do:** Use `children` to render structured content (list of validation errors, file import summary).

**Don't:** Place Banner inside another Banner or nest alerts.

---

## Accessibility

- No role attribute is set by the component — the consuming page should wrap in `role="alert"` or `role="status"` as appropriate
- `danger` and `warning` banners that appear after a user action should announce to screen readers via `aria-live="assertive"` or `role="alert"`
- Ensure sufficient color contrast — `danger` text on `danger-50` currently meets minimum contrast; `success` and `warning` foreground/background pairs are borderline (see [Colors accessibility](/foundations/colors#accessibility))

---

## Code example

```tsx
import { Banner } from '@xhr/ui'

// Error from API
<Banner tone="danger">
  Failed to submit correction request. Please try again.
</Banner>

// With structured content
<Banner tone="warning">
  <strong>2 issues found:</strong>
  <ul>
    <li>End date must be after start date</li>
    <li>Leave type selection is required</li>
  </ul>
</Banner>

// Confirmation
<Banner tone="success">
  Import complete — 47 records updated, 3 skipped.
</Banner>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tone` | `'info' \| 'warning' \| 'success' \| 'danger'` | `'info'` | Color and semantic context |
| `children` | `ReactNode` | — | Banner content |

---

## Token usage

| Layer | Token |
|---|---|
| `info` background | `--info-50` |
| `warning` background | `--warning-50` |
| `success` background | `--success-50` |
| `danger` background | `--danger-50` |
| Border colors | Hardcoded (token gap — see variants table) |
| Text colors | Hardcoded (token gap — see variants table) |
| Radius | `--r-md` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:83`  
CSS: `packages/xhr-ui/app.css` (`.banner`, `.banner--info`, `.banner--warning`, `.banner--success`, `.banner--danger`)

## Related

- [FormField](/components/FormField) — displays field-level errors (not banner-level)
- [Modal](/components/Modal) — banners often appear at the top of modal body slots
- [FormModal pattern](/patterns/FormModal) — pattern that always includes a conditional danger Banner
