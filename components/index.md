# Components

All components are self-contained and import styles from `packages/xhr-ui/app.css`. Component code is in `packages/xhr-ui/src/index.tsx`.

## Shared components — `@xhr/ui`

These are the reusable primitives and composites exported from the internal `@xhr/ui` package. They are used across all roles and pages.

| Component | Layer | Source line | Variants |
|---|---|---|---|
| [Banner](/components/Banner) | Primitive | :83 | 4 tones |
| [Button](/components/Button) | Primitive | :12 | 5 variants × 3 sizes |
| [Card](/components/Card) | Primitive | :36 | 2 (default/flush) |
| [Chip](/components/Chip) | Primitive | :41 | 6 tones × dot |
| [DataTable](/components/DataTable) | Composite | :207 | generic typed |
| [FormField](/components/FormField) | Composite | :117 | 3 states |
| [Input](/components/Input) | Primitive | :96 | 4 states |
| [ListRow](/components/ListRow) | Primitive | :249 | icon/sub/meta optional |
| [Modal](/components/Modal) | Composite | :173 | 2 sizes |
| [PageHeader](/components/PageHeader) | Layout | :273 | subtitle/actions optional |
| [Select](/components/Select) | Primitive | :102 | 4 states |
| [StatTile](/components/StatTile) | Primitive | :59 | 5 tones |
| [Textarea](/components/Textarea) | Primitive | :109 | 4 states |

Source: `packages/xhr-ui/src/index.tsx`

---

## Custom components — product-specific

These components live in `apps/web/src/components/` and are specific to the QuadX HRIS product. They compose shared components and contain product business logic.

| Component | Description |
|---|---|
| [AppShell](/components/AppShell) | Root layout host with role-based nav, guards, and mobile drawer |
| [ClockCard](/components/ClockCard) | Self-contained clock-in/out hero with geolocation |
| [CorrectionModal](/components/CorrectionModal) | Time correction form modal with approval routing |
| [EmpPhoto](/components/EmpPhoto) | Employee photo tile with initials fallback |
| [LeaveModal](/components/LeaveModal) | Leave filing modal with eligibility filtering |

---

## Missing / gap components

These CSS classes exist in `app.css` and are used in the UI but have no React wrapper component:

| Component | CSS classes | Priority |
|---|---|---|
| Tabs | `.tabs`, `.tabs__item` | High — used on 3+ pages |
| Switch | `.switch`, `.switch__track` | Medium |
| Progress bar | `.progress`, `.progress > span` | Medium |
| Avatar (standalone) | `.avatar`, `.avatar--lg` | Medium |
| Icon button | `.iconbtn` | Medium |
| Empty state | `.empty`, `.empty__icon`, `.empty__title` | Low |
| Pagination | (not implemented) | Medium |
