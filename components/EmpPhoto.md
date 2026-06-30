# EmpPhoto

A square-cropped employee photo tile with an initials-based fallback. Used consistently across the employee list table, detail view, team roster, and org chart.

**Figma:** [EmpPhoto in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=40-19)

---

## When to use

- Display an employee's photo wherever an employee is identified by name (list rows, headers, cards)
- When a photo URL is unavailable, the initials fallback handles gracefully without extra code

## When NOT to use

- Do not use EmpPhoto for non-employee entities (documents, departments, settings)
- Do not use EmpPhoto in dense tables where 24px or smaller would be needed — at that size an initial is unreadable

---

## Anatomy

```
┌──────────────┐          ┌──────────────┐
│  [photo]     │   OR     │     MS       │  ← initials fallback
└──────────────┘          └──────────────┘
  .emp-photo                .emp-photo--fallback
```

- **photo** — `<img>` with `object-fit: cover`, square, `border-radius: 12px`
- **fallback** — `<span>` with gradient fill (`--qx-orange-50` → `#FFE9DD`), centered initials text, orange border

---

## Variants

| Property | Values | Default |
|---|---|---|
| `type` | `photo` / `fallback` | auto (based on `url` prop) |
| `size` | `36` / `40` / `56` / (custom number) | `40` |

| Size value | Typical use |
|---|---|
| 36px | Compact list rows, notification drawer |
| 40px | Default — employee list table, team roster |
| 56px | Detail view header, org chart node |
| Custom | Pass any integer for one-off sizes |

---

## Responsive behavior

EmpPhoto has no responsive behavior — it renders at the specified size regardless of breakpoint. Pages are responsible for choosing an appropriate size.

---

## Do / Don't

**Do:** Always pass `name` even when `url` is present — it is used as the `alt` attribute on the image.

**Don't:** Use EmpPhoto without a `name` prop — the fallback will render empty initials.

---

## Accessibility

- `<img>` renders with `alt={name}` for screen readers
- Fallback `<span>` uses `aria-hidden="true"` — the surrounding context (table cell, list row) must provide the employee name as text
- Ensure sufficient contrast for the initials text — orange gradient background with `--qx-orange-700` text passes WCAG AA

---

## Code example

```tsx
import { EmpPhoto } from '@xhr/ui'

// With photo
<EmpPhoto
  url="https://api.example.com/photos/emp-1042.jpg"
  name="Maria Santos"
  size={40}
/>

// Initials fallback
<EmpPhoto url={null} name="Carlos Reyes" size={56} />

// Default size (40px)
<EmpPhoto url={employee.photoUrl} name={employee.fullName} />
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `url` | `string \| null \| undefined` | — | Photo URL. If falsy, renders initials fallback |
| `name` | `string` | — | Employee name — used for alt text and initials |
| `size` | `number` | `40` | Square size in pixels |

---

## Token usage

| Layer | Token |
|---|---|
| Photo border-radius | `12px` (not a token) |
| Fallback gradient from | `--qx-orange-50` |
| Fallback gradient to | `#FFE9DD` (not tokenized — gap) |
| Fallback border | `--qx-orange-200` |
| Fallback initials color | `--qx-orange-700` |

**Token gap:** The fallback gradient end stop `#FFE9DD` is not a defined token — it should be extracted to `color/primitive/orange-25` or similar in a future token pass.

---

## Source reference

`apps/web/src/components/Photo.tsx:10`  
CSS: `packages/xhr-ui/app.css` (`.emp-photo`, `.emp-photo--fallback`)

## Related

- [AppShell](/components/AppShell) — profile avatar in topbar uses EmpPhoto
- [OrgChart pattern](/patterns/OrgChart) — node avatars use a smaller EmpPhoto size
