# RtoCard

A gradient hero card displaying an employee's Return-to-Office quota, remaining balance, and a progress bar. Mirrors the structure of [ClockCard](/components/ClockCard) with a blue-to-orange gradient.

**Figma:** [RtoCard in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=26-23)

---

## Product context

Used on the employee `/employee/rto` page. Only visible to employees with `rto_enabled = true` and `work_arrangement = 'hybrid'`. Displayed alongside a list panel of upcoming RTO obligations in a `1.2fr / 1fr` CSS grid.

---

## Composed from

- [Button](/components/Button) — `size="lg"` `block` primary CTA and optional ghost secondary CTA
- [Chip](/components/Chip) — status label (healthy/low/exhausted states)

---

## Anatomy

```
┌──────────────────────────────────────────────────────┐
│                                  [glow circle - dec] │
│  Return-to-Office Balance                            │  ← eyebrow label
│                                                      │
│  12.5 days                                           │  ← counter (big)
│  remaining this quarter                              │  ← unit label
│                                                      │
│  ████████████░░░░░░░░░░░░░░░░░░░░░░  8 / 20 used    │  ← progress bar
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │            File RTO                          │   │  ← primary CTA
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  [View History]  (ghost, optional)                   │
└──────────────────────────────────────────────────────┘
  gradient background: #1e3a8a → #1d2952 → brand-orange
```

- **container** — full-width, `--r-xl`, blue-to-orange gradient, `--sh-3`
- **glow-circle** — same decorative overlay as ClockCard
- **label** — section eyebrow, white 80%
- **counter** — large quota number, white, 800 weight, tabular-nums
- **unit-label** — small white label ("remaining this quarter")
- **progress-bar** — full-width bar; white fill on semi-transparent track
- **cta-primary** — `size="lg"` `block` Button in white-fill style
- **cta-ghost** — optional secondary ghost button

---

## Variants / States

| State | Chip tone | Visual |
|---|---|---|
| Healthy | `success` | Large counter, normal progress |
| Low | `warning` | Counter in amber, progress near full |
| Exhausted | `danger` | Zero counter, full progress bar |
| `show-ghost-cta` | — | Shows or hides the secondary ghost button |

---

## Responsive behavior

RtoCard is full-width within its grid column. The `.rto-top` grid (1.2fr / 1fr) collapses to single column on mobile. RtoCard becomes full-width and the list panel stacks below it.

---

## Do / Don't

**Do:** Show RtoCard only for `hybrid` employees with `rto_enabled = true` — server and client both gate this.

**Don't:** Show RtoCard to `on-site` or `remote` employees — RTO is a hybrid-arrangement concept.

---

## Token usage

| Layer | Value / Token |
|---|---|
| Background gradient start | `#1e3a8a` (not tokenized) |
| Background gradient mid | `#1d2952` (not tokenized — gap) |
| Background gradient end | `--qx-orange-700` |
| Container radius | `--r-xl` |
| Container shadow | `--sh-3` |
| Progress bar track | `rgba(255,255,255,0.20)` |
| Progress bar fill | `white` |
| Counter color | white |
| Padding | `--s-6` |

**Token gaps:** Blue gradient colors `#1e3a8a` and `#1d2952` are not defined tokens. Should be extracted to `color/primitive/blue-900` and `color/primitive/blue-950` in a future token pass.

---

## Source reference

CSS: `packages/xhr-ui/app.css:652` (`.rto-top`, `.rto-card`, `.rto-card__big`, `.rto-card__bar`)  
Page: `apps/web/src/pages/employee/Rto.tsx`
