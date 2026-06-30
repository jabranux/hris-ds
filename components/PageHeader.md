# PageHeader

A page-level header that combines a title, optional subtitle, and an optional right-aligned actions slot. Appears at the top of every main content area.

**Figma:** [PageHeader in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=20-17)

---

## When to use

- Place at the top of every page or major content section to establish context
- Provide a consistent title + actions layout (e.g. "Employees" + "Add Employee" button)

## When NOT to use

- Do not use PageHeader inside a Card — use `.card__header` instead
- Do not use PageHeader for section-level headings within a page

---

## Anatomy

```
┌───────────────────────────────────────────────────┐
│  [title]                          [actions slot]  │
│  [subtitle]                                       │
└───────────────────────────────────────────────────┘
  text-stack (left)                actions (right)
```

- **container** — flex row with `justify-content: space-between`, bottom margin `--s-5`
- **text-stack** — vertical flex: title (h1 style) + optional subtitle (muted)
- **actions** — optional trailing slot (row of Buttons)

---

## Responsive behavior

On mobile (≤720px), the layout flips to `flex-direction: column; align-items: flex-start`. The actions slot moves below the title+subtitle stack.

---

## Sizing and spacing

- Container bottom margin: `--s-5`
- Title font: `--fs-24` / 700 / `--ink-900` / `--lh-tight`
- Subtitle font: `--fs-14` / `--ink-500`
- Gap between title and subtitle: `--s-1`

---

## Do / Don't

**Do:** Keep page title text short and action-oriented (noun or noun phrase: "Employees", "My Schedule", "Leave History").

**Don't:** Place more than 2 action buttons in the `actions` slot — if more are needed, use a dropdown.

---

## Code example

```tsx
import { PageHeader, Button } from '@xhr/ui'

// Title only
<PageHeader title="My Schedule" />

// With subtitle
<PageHeader
  title="Employees"
  subtitle="47 active employees"
/>

// With actions
<PageHeader
  title="Employees"
  subtitle="47 active employees"
  actions={
    <>
      <Button variant="ghost" size="sm" onClick={handleExport}>Export</Button>
      <Button variant="primary" size="sm" onClick={handleAdd}>Add Employee</Button>
    </>
  }
/>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Page title (h1 style) |
| `subtitle` | `string` | — | Optional supporting line |
| `actions` | `ReactNode` | — | Optional right-aligned action slot |

---

## Token usage

| Layer | Token |
|---|---|
| Title font | `--fs-24` |
| Title weight | 700 |
| Title color | `--ink-900` |
| Title line-height | `--lh-tight` |
| Subtitle font | `--fs-14` |
| Subtitle color | `--ink-500` |
| Container bottom margin | `--s-5` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:273`  
CSS: `packages/xhr-ui/app.css` (`.page-header`, `.page-header__text`, `.page-header__actions`)

## Related

- [Button](/components/Button) — used in the actions slot
- [AppShell](/components/AppShell) — topbar has its own title area distinct from PageHeader
