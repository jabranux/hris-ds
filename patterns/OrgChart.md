# OrgChart

A CSS-rendered hierarchical tree of employee nodes with connector lines. Used on the leader `/leader/team` page to visualize the reporting structure.

**Figma:** [OrgChart — referenced in components spec](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz)

---

## Product context

The OrgChart appears on the leader's Team page, showing direct and indirect reports. Each node displays an employee's avatar, name, and position. The current user's node is highlighted with an orange ring. Nodes optionally include a "Move" button for org restructuring.

---

## Composed from

- [EmpPhoto](/components/EmpPhoto) — 30×30px avatar per node (circle crop)
- [Button](/components/Button) — `variant="ghost"` `size="sm"` "Move" button (optional)

---

## Anatomy

```
              ┌──────────────────┐
              │  [▪] Ana Reyes   │  ← root node (Manager)
              │  Senior Manager  │
              └────────┬─────────┘
              ┌────────┴─────────────────────────────────┐
              │                                          │
    ┌──────────────────┐                    ┌──────────────────┐
    │  [▪] ● Maria S.  │  ← current user   │  [▪] Carlos R.   │
    │  Engineer        │    (orange ring)   │  Engineer        │
    └──────────────────┘                    └──────────────────┘
```

- **tree** — scrollable container (`overflow: auto`)
- **org-node** — inline-flex card per person
  - **avatar** — 30×30px circle, orange tint
  - **text-stack** — name (label/md semibold) + position (body/xs, muted)
  - **move-btn** — ghost icon button (optional)
- **connector-lines** — CSS `border-left` + `border-top` on `::before`/`::after` pseudo-elements of nested `<ul>` list items

---

## Node variants

| Property | Values |
|---|---|
| `is-current-user` | `false` / `true` — orange ring highlight on the current user's node |
| `show-move-button` | `false` / `true` — shows the move/reorg ghost button |

---

## Connector line approach

Connectors are rendered using CSS pseudo-elements on the nested `<ul>` list structure:
- Vertical line: `border-left` on `::before` of `<li>` elements
- Horizontal line: `border-top` on `::before` of `<li>` elements

This is a CSS-only approach — no SVG or canvas. The connector line color uses `--border` (`--ink-200`).

---

## Responsive behavior

OrgChart is horizontally scrollable on mobile. Tree nodes do not collapse or reflow — the user scrolls to see the full tree.

---

## Accessibility

- The tree should use `role="tree"` on the outer container and `role="treeitem"` on each node for screen reader semantics
- The current user node should have `aria-current="true"` or `aria-selected="true"`
- Move button should have `aria-label="Move [employee name] in org chart"`
- Connector lines are decorative CSS — no ARIA needed for them

---

## Source reference

CSS: `packages/xhr-ui/app.css:723` (`.orgtree`, `.org-node`, `.org-node.is-me`, `.org-node__move`)  
Page: implied in `apps/web/src/pages/leader/Team.tsx`
