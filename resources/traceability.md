# Traceability

Cross-reference between audited source code, Figma HRIS-DS library, and this documentation site.

**Figma library:** [HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz)  
**Audit date:** 2026-06-30  
**Source:** `C:\Users\james\Projects\QuadX HRIS`

---

## Foundations

| Token / Category | Source file | Figma | Web DS |
|---|---|---|---|
| Color primitives (orange + ink) | `packages/xhr-ui/app.css:1–55` | [Color Primitives](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz) | [/foundations/colors](/foundations/colors) |
| Color semantics (status + surface) | `packages/xhr-ui/app.css:56–95` | [Color Semantics](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz) | [/foundations/colors#semantics](/foundations/colors#semantics) |
| Typography (`--font-sans`, `--fs-*`, `--lh-*`) | `packages/xhr-ui/app.css:96–130` | [Typography](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz) | [/foundations/typography](/foundations/typography) |
| Spacing (`--s-1` → `--s-12`) | `packages/xhr-ui/app.css:131–145` | [Spacing & Grid](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz) | [/foundations/spacing](/foundations/spacing) |
| Radius (`--r-sm` → `--r-pill`) | `packages/xhr-ui/app.css:146–155` | [Radius & Shadows](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz) | [/foundations/radius](/foundations/radius) |
| Shadows (`--sh-1` → `--sh-pop`) | `packages/xhr-ui/app.css:156–165` | [Radius & Shadows](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz) | [/foundations/shadows](/foundations/shadows) |
| Layout constants (`--topbar-h`, etc.) | `packages/xhr-ui/app.css:166–175` | [Spacing & Grid](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz) | [/foundations/spacing#layout-constants](/foundations/spacing#layout-constants) |

---

## Shared components (@xhr/ui)

| Component | Source file | Figma node | Web DS |
|---|---|---|---|
| Banner | `packages/xhr-ui/src/index.tsx:83` | [19-22](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=19-22) | [/components/Banner](/components/Banner) |
| Button | `packages/xhr-ui/src/index.tsx:12` | [15-62](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=15-62) | [/components/Button](/components/Button) |
| Card | `packages/xhr-ui/src/index.tsx:36` | [19-23](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=19-23) | [/components/Card](/components/Card) |
| Chip | `packages/xhr-ui/src/index.tsx:41` | [16-38](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=16-38) | [/components/Chip](/components/Chip) |
| DataTable | `packages/xhr-ui/src/index.tsx:207` | [23-2](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=23-2) | [/components/DataTable](/components/DataTable) |
| FormField | `packages/xhr-ui/src/index.tsx:117` | [21-23](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=21-23) | [/components/FormField](/components/FormField) |
| Input | `packages/xhr-ui/src/index.tsx:96` | [18-30](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=18-30) | [/components/Input](/components/Input) |
| ListRow | `packages/xhr-ui/src/index.tsx:249` | [20-16](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=20-16) | [/components/ListRow](/components/ListRow) |
| Modal | `packages/xhr-ui/src/index.tsx:173` | [22-30](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=22-30) | [/components/Modal](/components/Modal) |
| PageHeader | `packages/xhr-ui/src/index.tsx:273` | [20-17](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=20-17) | [/components/PageHeader](/components/PageHeader) |
| Select | `packages/xhr-ui/src/index.tsx:102` | [18-31](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=18-31) | [/components/Select](/components/Select) |
| StatTile | `packages/xhr-ui/src/index.tsx:59` | [19-38](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=19-38) | [/components/StatTile](/components/StatTile) |
| Textarea | `packages/xhr-ui/src/index.tsx:109` | [18-32](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=18-32) | [/components/Textarea](/components/Textarea) |

---

## Custom product components

| Component | Source file | Figma node | Web DS |
|---|---|---|---|
| AppShell | `apps/web/src/components/AppShell.tsx:32` | [53-5](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=53-5) (desktop) / [53-43](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=53-43) (mobile) | [/components/AppShell](/components/AppShell) |
| ClockCard | `apps/web/src/components/ClockCard.tsx:14` | [25-32](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=25-32) | [/components/ClockCard](/components/ClockCard) |
| CorrectionModal | `apps/web/src/components/CorrectionModal.tsx:28` | [40-23](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=40-23) | [/components/CorrectionModal](/components/CorrectionModal) |
| EmpPhoto | `apps/web/src/components/Photo.tsx:10` | [40-19](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=40-19) | [/components/EmpPhoto](/components/EmpPhoto) |
| LeaveModal | `apps/web/src/components/LeaveModal.tsx:25` | [40-23](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=40-23) | [/components/LeaveModal](/components/LeaveModal) |

---

## Patterns

| Pattern | Source file(s) | Figma node | Web DS |
|---|---|---|---|
| ApprovalsInbox | `apps/web/src/pages/leader/Approvals.tsx` | [26-24](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=26-24) | [/patterns/ApprovalsInbox](/patterns/ApprovalsInbox) |
| FilteredTable | `apps/web/src/pages/hr/Employees.tsx` + `Audit.tsx` | [55-5](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=55-5) | [/patterns/FilteredTable](/patterns/FilteredTable) |
| FormModal | `LeaveModal.tsx`, `CorrectionModal.tsx`, `Employees.tsx` | [40-23](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=40-23) | [/patterns/FormModal](/patterns/FormModal) |
| OrgChart | `apps/web/src/pages/leader/Team.tsx` | (in Figma components spec) | [/patterns/OrgChart](/patterns/OrgChart) |
| RtoCard | `apps/web/src/pages/employee/Rto.tsx` | [26-23](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=26-23) | [/patterns/RtoCard](/patterns/RtoCard) |
| WeekGrid | `apps/web/src/pages/employee/Schedule.tsx` | [54-5](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=54-5) | [/patterns/WeekGrid](/patterns/WeekGrid) |

---

## Icons

| Item | Source | Figma node | Notes |
|---|---|---|---|
| Tab bar SVG icons (8 icons) | `apps/web/src/components/tabIcons.tsx` | [39-49](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=39-49) | Only SVG icon usage in the product |
| Emoji icons | Used throughout source | Documented in [Icons page](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=39-49) | No library — Unicode emoji |

---

## Known gaps

| Item | Gap |
|---|---|
| Tabs component | CSS classes exist (`.tabs`, `.tabs__item`) but no React wrapper or Figma component |
| Switch component | CSS exists (`.switch`, `.switch__track`) but no wrapper or Figma component |
| Progress bar component | CSS exists (`.progress`) but no wrapper or Figma component |
| Icon button | CSS exists (`.iconbtn`) but no wrapper or Figma component |
| Pagination | Not implemented in code or Figma |
| RtoCard token gaps | `#1e3a8a`, `#1d2952` gradient colors not tokenized |
| ClockCard token gap | `#2A1B1A` gradient mid-stop not tokenized |
| EmpPhoto fallback gradient | `#FFE9DD` end stop not tokenized |
| Banner border/text colors | Hardcoded per tone — not yet in token system |
| Modal focus trap | Not implemented — known a11y debt |
| Status chip contrast | `success` and `warning` chip foreground/background pairs fail WCAG 3:1 |
