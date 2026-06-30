# ClockCard

A self-contained full-width hero component for the employee Home page. Displays the current time, work arrangement status, and a clock-in / clock-out CTA. Only renders when `clock_enabled === true` for the employee.

**Figma:** [ClockCard in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=25-32)

---

## Purpose

ClockCard is the primary time-tracking entry point for employees. It occupies the top of the employee Home page, above the KPI stats grid. It handles its own data fetching (attendance + employee profile) and coordinates with the page's query cache via shared query keys.

---

## Anatomy

```
┌──────────────────────────────────────────────────────┐
│                                  [glow circle - dec] │
│  Asia/Manila · Wednesday, 30 June 2026               │  ← eyebrow label
│                                                      │
│  08:45:32                                            │  ← live time display
│                                                      │
│  [Work from Home]  [Clocked In]                      │  ← status chips row
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │            Clock Out                         │   │  ← CTA button
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  [Error banner - conditional]                        │
└──────────────────────────────────────────────────────┘
  gradient background: #0F1320 → #2A1B1A → brand-orange
```

- **container** — full-width, `--r-xl`, dark-to-orange gradient, `--sh-3`, `overflow: hidden`
- **glow-circle** — absolute top-right radial gradient overlay (decorative)
- **label** — timezone + date in eyebrow style, white 80% opacity
- **time-display** — large tabular numeric clock, white, updates every 30s
- **chips-row** — work arrangement + attendance status chips
- **error-banner** — danger Banner, shown on API error
- **cta-button** — full-width; white (clocked-out) or frosted (clocked-in)

---

## Variants / States

| State | CTA label | CTA style | Description |
|---|---|---|---|
| `clocked-out` | "Clock In" | White fill, orange text | Employee has not clocked in today |
| `clocked-in` | "Clock Out" | Frosted (18% white fill, white text, white stroke) | Employee is currently clocked in |
| `done` | "Done for today ✓" | Disabled (55% opacity) | Employee has clocked out for the day |

---

## Business logic (not reflected in Figma)

- Uses idempotency keys (`clockin-YYYY-MM-DD`) to prevent double recording
- Captures geolocation on every clock action
- Polls attendance and employee data — shares `['employee','me']` and `['attendance','me']` query caches with host page
- Returns `null` when `clock_enabled === false` (per-employee flag)
- Live clock updates every 30s via `setInterval`

---

## Responsive behavior

ClockCard is full-width and responds to the AppShell's main content area width. On mobile, the padding reduces (from `--s-6` to `--s-4`). The time display font size scales down slightly.

---

## Do / Don't

**Do:** Place ClockCard as the first element in the employee Home page, before the stats grid.

**Don't:** Render ClockCard for employees where `clock_enabled === false` — the component already returns null in that case, but do not conditionally render it from the page either (double guard).

---

## Accessibility

- CTA button is a native `<button>` — keyboard accessible
- Live time region should have `aria-live="polite"` and `aria-atomic="true"` to announce time updates to screen readers (not currently implemented)
- Status chips provide text labels — not color-only
- Error banner should use `role="alert"` (not currently set)

---

## Code example

```tsx
import { ClockCard } from '@/components/ClockCard'

// In employee Home page — no props needed
function EmployeeHome() {
  return (
    <div className="stack">
      <ClockCard />
      <div className="grid grid--4">
        {/* StatTile KPIs */}
      </div>
    </div>
  )
}
```

---

## Props

ClockCard accepts no props. It is fully self-contained and sources all data internally.

---

## Token usage

| Layer | Token / Value |
|---|---|
| Background gradient start | `#0F1320` (not tokenized) |
| Background gradient mid | `#2A1B1A` (not tokenized — gap) |
| Background gradient end | `--qx-orange-700` |
| Container radius | `--r-xl` |
| Container shadow | `--sh-3` |
| Time display color | `white` |
| Time display font | `--fs-32` (approx), 800 weight, tabular-nums |
| Eyebrow label color | `rgba(255,255,255,0.80)` |
| CTA (clocked-out) fill | `white` |
| CTA (clocked-out) text | `--qx-orange-700` |
| CTA (clocked-in) fill | `rgba(255,255,255,0.18)` |
| CTA (clocked-in) border | `rgba(255,255,255,0.30)` |
| CTA (done) opacity | 55% |
| Padding | `--s-6` |

**Token gaps:** Gradient mid-stop `#2A1B1A` is not a defined token. Should be extracted in a future token pass.

---

## Source reference

`apps/web/src/components/ClockCard.tsx:14`  
CSS: `packages/xhr-ui/app.css:485` (`.clockcard`, `.clockcard__time`, `.clockcard__label`, `.clockcard__cta`, `.clockcard__cta--out`)

## Related

- [RtoCard pattern](/patterns/RtoCard) — mirrors this hero gradient card pattern for RTO quota display
- [StatTile](/components/StatTile) — appears below ClockCard in the Home page stats grid
- [Banner](/components/Banner) — used inside ClockCard for inline API errors
