# Spacing

Spacing tokens are CSS custom properties in `packages/xhr-ui/app.css`. The scale is named by step number; values are absolute pixels (not rem).

**Figma:** [Spacing & Grid in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz)

---

## Spacing scale

| Token | Value | Common usage |
|---|---|---|
| `--s-1` | `4px` | Dot margin, icon gap |
| `--s-2` | `8px` | Button icon gap, nav count padding, chip gap |
| `--s-3` | `12px` | Rail padding, list row gap, card header gap |
| `--s-4` | `16px` | Card padding (mobile), grid gap, form field margin-bottom |
| `--s-5` | `20px` | Card padding (desktop), rail top padding |
| `--s-6` | `24px` | Main content padding, ClockCard padding |
| `--s-8` | `32px` | Defined — no direct observation in component CSS |
| `--s-10` | `40px` | Empty state vertical padding |
| `--s-12` | `48px` | Defined — no direct observation in component CSS |

<div style="margin:16px 0">
  <div style="display:flex;align-items:flex-end;gap:8px;flex-wrap:wrap">
    <div style="text-align:center;font-size:11px;color:#6B7185">
      <div style="background:#E94E1B;height:4px;width:32px;margin:0 auto 4px"></div>4px
    </div>
    <div style="text-align:center;font-size:11px;color:#6B7185">
      <div style="background:#E94E1B;height:8px;width:32px;margin:0 auto 4px"></div>8px
    </div>
    <div style="text-align:center;font-size:11px;color:#6B7185">
      <div style="background:#E94E1B;height:12px;width:32px;margin:0 auto 4px"></div>12px
    </div>
    <div style="text-align:center;font-size:11px;color:#6B7185">
      <div style="background:#E94E1B;height:16px;width:32px;margin:0 auto 4px"></div>16px
    </div>
    <div style="text-align:center;font-size:11px;color:#6B7185">
      <div style="background:#E94E1B;height:20px;width:32px;margin:0 auto 4px"></div>20px
    </div>
    <div style="text-align:center;font-size:11px;color:#6B7185">
      <div style="background:#E94E1B;height:24px;width:32px;margin:0 auto 4px"></div>24px
    </div>
    <div style="text-align:center;font-size:11px;color:#6B7185">
      <div style="background:#E94E1B;height:32px;width:32px;margin:0 auto 4px"></div>32px
    </div>
    <div style="text-align:center;font-size:11px;color:#6B7185">
      <div style="background:#E94E1B;height:40px;width:32px;margin:0 auto 4px"></div>40px
    </div>
    <div style="text-align:center;font-size:11px;color:#6B7185">
      <div style="background:#E94E1B;height:48px;width:32px;margin:0 auto 4px"></div>48px
    </div>
  </div>
</div>

Scale: 10 steps. There are gaps at s-7, s-9, s-11. When mid-range spacing is needed between defined steps, some page files fall back to raw `px` values rather than tokens — this is a known consistency gap.

---

## Layout constants

These are not part of the spacing scale but are defined in the same token block:

| Token | Value | Role |
|---|---|---|
| `--topbar-h` | `60px` | Topbar height (desktop + mobile) |
| `--bottomnav-h` | `64px` | Mobile bottom nav height |
| `--rail-w` | `240px` | Desktop side rail width |
| `--safe-bottom` | `env(safe-area-inset-bottom, 0px)` | iOS home indicator clearance |
| `--container-max` | `1180px` | Max-width clamp on `<main>` content |

---

## Grid and layout utilities

The `@xhr/ui` package ships layout utility classes:

| Class | Behavior |
|---|---|
| `.grid` | `display: grid; gap: var(--s-4)` |
| `.grid--2` | 2-column equal-width |
| `.grid--3` | 3-column equal-width |
| `.grid--4` | 4-column equal-width |
| `.grid--keep` | Stays 2-column on mobile (overrides default 1-column collapse) |
| `.row` | `display: flex; gap: var(--s-3); align-items: center` |
| `.row--wrap` | + `flex-wrap: wrap` |
| `.row--end` | + `justify-content: flex-end` |
| `.row--between` | + `justify-content: space-between` |
| `.stack` | `display: flex; flex-direction: column; gap: var(--s-3)` |
| `.stack--lg` | + `gap: var(--s-5)` |
| `.spacer` | `flex: 1` |
| `.mt-{N}` / `.mb-{N}` | Margin top/bottom using step N value |

---

## Usage guidance

### Do
- Always use `var(--s-*)` for padding, gap, and margin in component CSS
- Use `.grid`, `.row`, `.stack` utility classes for layout composition
- Match padding to the card context: `--s-4` on mobile, `--s-5` on desktop

### Don't
- Do not hardcode px spacing values in component CSS
- Do not use `--s-8` or `--s-12` without checking that the visual output is intentional — they have no documented usage

---

## CSS usage

```css
.my-component {
  padding: var(--s-4) var(--s-5);
  gap: var(--s-3);
}
```

## Source reference

`packages/xhr-ui/app.css` — lines 131–175
