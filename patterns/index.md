# Patterns

Patterns are recurring page-level compositions specific to the QuadX HRIS product. Each pattern is assembled from shared and custom components and represents a repeatable UI solution for a common HRIS use case.

## Pattern list

| Pattern | Description | Pages where used |
|---|---|---|
| [ApprovalsInbox](/patterns/ApprovalsInbox) | Master/detail approval queue with SLA chips | `/leader/approvals` |
| [FilteredTable](/patterns/FilteredTable) | Search + filter toolbar + DataTable | `/hr/employees`, `/hr/audit` |
| [FormModal](/patterns/FormModal) | Standardized form-inside-modal template | Leave, Correction, Import modals |
| [OrgChart](/patterns/OrgChart) | CSS tree of org-node cards with connectors | `/leader/team` |
| [RtoCard](/patterns/RtoCard) | Gradient hero card for RTO quota + progress | `/employee/rto` |
| [WeekGrid](/patterns/WeekGrid) | 7-column schedule grid with attendance status | `/employee/schedule`, `/leader/schedule` |

## What makes a pattern

Unlike components, patterns:
- Are **page-level compositions** assembled from multiple components
- Address a **domain-specific HRIS concern** (scheduling, approvals, org hierarchy)
- Are **not reusable in isolation** — they are meaningful only in their product context
- Are represented in Figma as **frame specimens**, not as component sets with variants

## Icons in patterns

The HRIS application uses Unicode emoji as icons throughout. Patterns that display icons (approval type icons, shift type indicators, holiday chips) use emoji characters. The tab bar SVG icons from `tabIcons.tsx` are the only SVG icon usage found in the audit.
