# Reference Benchmark

**Reference:** `http://localhost:5173/design-system` (run locally in the source application)

> **Note:** This reference runs on localhost and is not accessible from this documentation site. Benchmarking against it requires running the source application locally. The information below captures criteria to evaluate when the reference is accessible.

---

## How to use this file

1. Start the source application: `cd "C:\Users\james\Projects\QuadX HRIS" && pnpm dev`
2. Navigate to `http://localhost:5173/design-system`
3. Use the criteria below to benchmark this site against the reference

---

## Benchmark criteria

### Information architecture

| Criterion | Target | Status |
|---|---|---|
| Navigation structure | All token categories, all components, all patterns have dedicated pages | To verify |
| Sidebar organization | Components grouped by type (Shared / Custom) | Implemented |
| Home page | Quick links, audit date, inventory counts | Implemented |
| Search | Site-wide search | Implemented (VitePress local search) |

### Foundations coverage

| Page | Criterion | Status |
|---|---|---|
| Colors | All primitive + semantic tokens documented with swatches | Implemented |
| Colors | A11y contrast table | Implemented |
| Typography | Full type scale with live rendered examples | Implemented |
| Spacing | Scale + layout constants + grid utilities | Implemented |
| Radius | All tokens with visual examples | Implemented |
| Shadows | All tokens with visual examples | Implemented |
| Motion | Token table | Not applicable (no motion tokens in source) |

### Component documentation quality

| Criterion | Target | Status |
|---|---|---|
| All 13 shared components have pages | 100% coverage | Implemented |
| All 5 custom components have pages | 100% coverage | Implemented |
| Props tables for all components | Complete | Implemented |
| Accessibility notes on every component | Complete | Implemented |
| Known gaps surfaced | Focus trap, contrast failures | Implemented |
| Implementation flags noted | Fixed-height risk, missing states | Implemented (in component pages) |

### Traceability

| Criterion | Target | Status |
|---|---|---|
| Source file references on every component page | All components | Implemented |
| Figma node links | All confirmed nodes | Implemented |
| Traceability index | Complete cross-reference table | Implemented |
| Known gaps documented | Gap components list | Implemented |

---

## Gaps identified (compared to ideal)

| Gap | Priority | Notes |
|---|---|---|
| Tabs component not documented | High | CSS exists but no React wrapper |
| Switch component not documented | High | CSS exists but no React wrapper |
| Icon library page | Medium | Only emoji + 8 SVG tab icons exist |
| Motion tokens | Low | None present in source |
| Dark mode tokens | Low | Not implemented in source |
| Code Connect mappings | Low | Requires Figma Org/Enterprise plan |
