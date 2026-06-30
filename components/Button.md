# Button

The primary interactive element in the QuadX HRIS system. Used for all user-initiated actions — form submissions, navigation triggers, modal openers, and inline data actions.

**Figma:** [Button in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=15-62)

---

## When to use

- Submit a form or confirm an action
- Open a modal or drawer
- Trigger a navigation action where a link is not appropriate
- Provide a destructive action (danger variant) with explicit confirmation context

## When NOT to use

- Do not use Button for in-page navigation — use a `<Link>` element
- Do not use Button as a menu toggle unless wrapped with proper aria controls
- Do not use multiple `primary` buttons in the same view — there should be one primary CTA per screen section

---

## Anatomy

```
┌─────────────────────┐
│     [Label text]    │
└─────────────────────┘
  container   label
```

- **container** — the `<button>` element with auto-layout, padding, and background fill
- **label** — the text node; no icon slot in the component (icons added as inline text by pages)

---

## Variants

| Property | Values | Default |
|---|---|---|
| `variant` | `primary` / `secondary` / `ghost` / `danger` / `success` | `primary` |
| `size` | `sm` / `lg` | (default, no prop) |
| `block` | `boolean` | `false` |
| `disabled` | native HTML | `false` |

### Variant descriptions

| Variant | Fill | Use case |
|---|---|---|
| `primary` | Orange-500 fill, white text | Primary CTA — one per section |
| `secondary` | White fill, strong border, body text | Secondary actions alongside a primary |
| `ghost` | Transparent, body text | Tertiary or text-only actions; toolbar actions |
| `danger` | Red-500 fill, white text | Destructive actions (delete, reject, revoke) |
| `success` | Green-500 fill, white text | Positive confirmations (approve, complete) |

### Size descriptions

| Size | Height | Padding | Font | Use case |
|---|---|---|---|---|
| `sm` | 28px | 6/12px | 12px / 600 | Dense toolbars, inline table actions |
| (default) | 36px | 10/16px | 14px / 600 | Standard buttons |
| `lg` | 44px | 14/20px | 15px / 600 | Primary hero CTAs (ClockCard, form footers) |

---

## States

| State | Visual | How implemented |
|---|---|---|
| Default | Full color fill | — |
| Hover | Darker background | CSS `:hover` darkens fill color |
| Focus | Orange ring (3px) | CSS `:focus-visible` with `--qx-orange-300` |
| Active | 1px Y-translate down | CSS `:active` with `translateY(1px)` |
| Disabled | 55% opacity, `not-allowed` cursor | `disabled` HTML attribute |
| Loading | Not built in | Pages swap text to `'Submitting…'` + `disabled` |

---

## Sizing and spacing

| Size | Min-height | Padding inline | Padding block |
|---|---|---|---|
| `sm` | 28px | 12px | 6px |
| default | 36px | 16px | 10px |
| `lg` | 44px | 20px | 14px |

`block` prop sets `width: 100%`.

On mobile (≤720px), the `sm` size gets `min-height: 36px` to meet touch target requirements.

---

## Accessibility

- Renders a native `<button>` element — keyboard and screen-reader semantics are inherited
- `:focus-visible` ring uses `--qx-orange-300` (3px spread) for keyboard visibility
- Disabled state uses the native `disabled` attribute — correctly communicated to assistive technology
- `sm` size (28px) is below the 44px touch target minimum — do not use `sm` for primary mobile actions

**Touch target note:** Only `lg` size (44px) meets the WCAG 2.5.5 AAA touch target guideline. Default (36px) is acceptable for desktop. Avoid `sm` on mobile primary actions.

---

## Do / Don't

**Do:** Use one `primary` button per section to establish clear visual hierarchy.

**Don't:** Stack multiple `primary` buttons side by side — use `primary` + `secondary` or `primary` + `ghost`.

**Do:** Use `danger` variant only when the action is irreversible or requires explicit user intent.

**Don't:** Use `ghost` for primary CTAs — it will not draw sufficient attention.

---

## Code example

```tsx
import { Button } from '@xhr/ui'

// Primary action
<Button variant="primary" onClick={handleSubmit}>
  Submit
</Button>

// Secondary alongside primary
<div className="row row--end">
  <Button variant="ghost" onClick={onCancel}>Cancel</Button>
  <Button variant="primary" onClick={onConfirm}>Confirm</Button>
</div>

// Danger with disabled state
<Button variant="danger" disabled={isPending} onClick={handleDelete}>
  {isPending ? 'Deleting…' : 'Delete Employee'}
</Button>

// Full-width large CTA
<Button variant="primary" size="lg" block onClick={handleClockIn}>
  Clock In
</Button>

// Small toolbar action
<Button variant="ghost" size="sm" onClick={handleExport}>
  Export
</Button>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger' \| 'success'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'lg'` | — | Size modifier; omit for default (medium) |
| `block` | `boolean` | `false` | If true, button fills container width |
| `disabled` | `boolean` | `false` | Native disabled state |
| `onClick` | `() => void` | — | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Native button type |
| `...rest` | All native `<button>` props | — | |

---

## Token usage

| Layer | Token |
|---|---|
| `primary` fill | `--qx-orange-500` |
| `primary` hover fill | `--qx-orange-600` |
| `secondary` border | `--border-strong` (`--ink-300`) |
| `secondary` fill | `--white` |
| `ghost` hover fill | `--ink-100` |
| `danger` fill | `--danger-500` |
| `success` fill | `--success-500` |
| All text (primary/danger/success) | `--white` |
| All text (secondary/ghost) | `--ink-800` |
| Focus ring | `--qx-orange-300` |
| Disabled opacity | 55% |
| Radius (default, lg) | `--r-md` |
| Radius (sm) | `--r-sm` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:12`  
CSS: `packages/xhr-ui/app.css` (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`, `.btn--success`, `.btn--sm`, `.btn--lg`, `.btn--block`)

## Related

- [FormField](/components/FormField) — wraps buttons in form contexts
- [Modal](/components/Modal) — footer slot accepts button rows
- [ClockCard](/components/ClockCard) — uses `lg block` primary button as primary CTA
