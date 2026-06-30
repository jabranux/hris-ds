# Shadows & Elevation

Shadow tokens are CSS custom properties in `packages/xhr-ui/app.css`. Four levels of elevation are defined.

**Figma:** [Radius & Shadows in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz)

---

## Shadow scale

| Token | Value | Usage |
|---|---|---|
| `--sh-1` | `0 1px 2px rgba(15,19,32,.05)` | Card resting elevation — default Card, StatTile |
| `--sh-2` | `0 2px 8px rgba(15,19,32,.08)` | Defined — no observed component usage (reserved) |
| `--sh-3` | `0 10px 30px rgba(15,19,32,.12)` | ClockCard hero, RtoCard hero |
| `--sh-pop` | `0 18px 40px rgba(15,19,32,.18)` | Modal overlay panel, mobile drawer sheet |

<div style="display:flex;gap:24px;flex-wrap:wrap;margin:16px 0">
  <div style="background:white;border-radius:12px;padding:20px 24px;box-shadow:0 1px 2px rgba(15,19,32,.05);font-size:13px;min-width:100px;text-align:center"><strong>sh-1</strong><br/>Card</div>
  <div style="background:white;border-radius:12px;padding:20px 24px;box-shadow:0 2px 8px rgba(15,19,32,.08);font-size:13px;min-width:100px;text-align:center"><strong>sh-2</strong><br/>Reserved</div>
  <div style="background:white;border-radius:12px;padding:20px 24px;box-shadow:0 10px 30px rgba(15,19,32,.12);font-size:13px;min-width:100px;text-align:center"><strong>sh-3</strong><br/>Hero card</div>
  <div style="background:white;border-radius:12px;padding:20px 24px;box-shadow:0 18px 40px rgba(15,19,32,.18);font-size:13px;min-width:100px;text-align:center"><strong>sh-pop</strong><br/>Modal</div>
</div>

---

## Elevation model

| Elevation level | Token | Surface type |
|---|---|---|
| 0 — Flat | none | Page background, table rows |
| 1 — Resting | `--sh-1` | Cards, tiles, list containers |
| 2 — Reserved | `--sh-2` | (Not in current use) |
| 3 — Raised | `--sh-3` | Hero feature cards |
| 4 — Overlay | `--sh-pop` | Modals, drawers, floating panels |

---

## Usage guidance

### Do
- Use `--sh-1` for all Card and StatTile components at their resting state
- Use `--sh-pop` for all modal panels and bottom-sheet drawers
- Use `--sh-3` only for full-width hero cards (ClockCard, RtoCard) that need strong visual separation

### Don't
- Do not use `--sh-pop` for non-overlay components — it creates false hierarchy
- Do not layer multiple shadows on one element

---

## CSS usage

```css
.my-card {
  box-shadow: var(--sh-1);
}

.my-modal {
  box-shadow: var(--sh-pop);
}
```

## Source reference

`packages/xhr-ui/app.css` — lines 156–165
