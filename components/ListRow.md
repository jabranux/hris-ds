# ListRow

A single list item with an optional leading icon tile, a title + subtitle body, and an optional trailing meta value. Used for notification feeds, settings navigation, and approval detail payloads.

**Figma:** [ListRow in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=20-16)

---

## When to use

- Render a vertical list of items with consistent visual structure
- Notification feed items, settings menu items, approval detail fields
- Any list where each item has a primary label and optional secondary label + trailing value

## When NOT to use

- For tabular data with multiple comparable columns, use [DataTable](/components/DataTable)
- For a single navigation link, use a native `<a>` element

---

## Anatomy

```
┌────────────────────────────────────────────────┐
│ ┌──────────┐  [title]               [meta]    │
│ │  icon    │  [sub]                            │
│ └──────────┘                                   │
│ ───────────────────────────────────────────── │  ← bottom border
└────────────────────────────────────────────────┘
  container  icon-box(opt)  body  meta(opt)
```

- **container** — horizontal flex with padding and bottom border divider
- **icon-box** — optional 40×40px square tile with `--ink-100` fill
- **body** — vertical stack of title + sub
- **meta** — optional trailing text (right-aligned)

---

## States

| State | Visual |
|---|---|
| Default | White background |
| Hover | `--ink-50` fill background |

---

## Sizing and spacing

- Padding: `--s-4` / `--s-5`
- Icon box: 40×40px, `--r-md`
- Icon box background: `--ink-100`
- Gap between icon and body: `--s-3`
- Bottom border: `1px solid var(--border)`
- Title font: `--fs-14` / 600 / `--ink-900`
- Sub font: `--fs-13` / `--ink-500`
- Meta font: `--fs-13` / `--ink-500`

---

## Code example

```tsx
import { ListRow } from '@xhr/ui'

// Notification item
<ListRow
  icon="🔔"
  title="Leave request approved"
  sub="Annual Leave · 3 days"
  meta="2h ago"
/>

// Settings nav item
<ListRow
  title="Section Visibility"
  sub="Control which modules are visible to each role"
/>

// Approval detail field
<ListRow
  title="Department"
  meta="Engineering"
/>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `ReactNode` | — | Leading icon tile content |
| `title` | `ReactNode` | — | Primary label |
| `sub` | `ReactNode` | — | Secondary/supporting label |
| `meta` | `ReactNode` | — | Trailing metadata value |

---

## Token usage

| Layer | Token |
|---|---|
| Container hover fill | `--surface-bg` |
| Bottom border | `--border` |
| Icon box fill | `--ink-100` |
| Icon box radius | `--r-md` |
| Padding | `--s-4` / `--s-5` |
| Gap | `--s-3` |
| Title font | `--fs-14` / 600 |
| Title color | `--ink-900` |
| Sub font | `--fs-13` |
| Sub / meta color | `--ink-500` |

---

## Source reference

`packages/xhr-ui/src/index.tsx:249`  
CSS: `packages/xhr-ui/app.css` (`.list-row`, `.list-row__icon`, `.list-row__body`, `.list-row__meta`)

## Related

- [DataTable](/components/DataTable) — for multi-column tabular data
- [ApprovalsInbox pattern](/patterns/ApprovalsInbox) — uses ListRow-like items in the inbox panel
