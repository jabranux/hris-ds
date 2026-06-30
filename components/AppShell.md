# AppShell

The root layout host for the QuadX HRIS application. Renders the desktop side rail + topbar or the mobile topbar + bottom nav, along with role-based navigation groups, auth guards, and notification polling.

**Figma:** [AppShell in HRIS-DS](https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=53-5) (Desktop frame: 53-5, Mobile frame: 53-43)

---

## Purpose

AppShell is the persistent outer shell that all authenticated routes render inside. It is not a reusable component in the generic sense — it is the single application layout host. It handles:

- Role-based navigation group rendering (from `nav.ts`)
- Active route highlighting (longest-path match)
- Mobile drawer state (menu / notifications / profile)
- Notification polling (30s interval via TanStack Query)
- Auth and feature-visibility route guards
- Sign-out flow

---

## Anatomy

### Desktop layout (≥901px)

```
┌──────────────┬────────────────────────────────────┐
│              │  Topbar (60px sticky)               │
│  Side Rail   ├────────────────────────────────────┤
│  (240px)     │                                    │
│  Logo        │  <main> (max-width 1180px)         │
│  Nav groups  │                                    │
│  Sign out    │  <Outlet /> — page content         │
│              │                                    │
└──────────────┴────────────────────────────────────┘
```

- **Rail** — sticky 240px sidebar with logo, role-specific nav groups, spacer, sign-out
- **Topbar** — 60px header with page title, notifications bell, avatar menu
- **Main** — scrollable content area, `max-width: 1180px`, padded

### Mobile layout (≤900px)

```
┌────────────────────────────────────┐
│  Topbar (logo + hamburger + bell)  │  60px
├────────────────────────────────────┤
│  <main> (full-width)               │
│  (padded bottom for nav)           │
│                                    │
├────────────────────────────────────┤
│  Bottom nav (5 tabs max)           │  64px + safe area
└────────────────────────────────────┘
```

- **Topbar** (mobile) — hamburger icon, logo, notification bell
- **Main** — full-width, padded at bottom for bottom nav clearance
- **Bottom nav** — up to 5 tab items with icon + label; active tab has orange 3px top indicator
- **Drawer** — slide-up bottom sheet for full nav tree, notifications, profile

---

## Nav link states

| State | Visual |
|---|---|
| Default | Gray text, no background |
| Hover | `--ink-100` fill |
| Active | `--qx-orange-50` fill, `--qx-orange-500` text, 3px left-border inset |

---

## Route guards

| Guard component | Behavior |
|---|---|
| `ProtectedShell` | Requires authentication + role tier check |
| `RequireVisible` | Enforces HR-configured feature visibility (fails closed while loading) |
| `RequireEmployeeFlag` | Enforces per-employee flag gates (`rto_enabled`, `ot_allowed`, `clock_enabled`) |

---

## Layout constants used

| Token | Value |
|---|---|
| `--topbar-h` | `60px` |
| `--bottomnav-h` | `64px` |
| `--rail-w` | `240px` |
| `--safe-bottom` | `env(safe-area-inset-bottom, 0px)` |
| `--container-max` | `1180px` |

---

## Responsive breakpoints

| Breakpoint | Change |
|---|---|
| `≤900px` | Mobile layout (rail → bottom nav + drawer) |
| `≤860px` | Pane layouts collapse to single column |
| `≤720px` | Week grid collapses; tap targets enforced |
| `≤380px` | Bottom nav font/icon sizes reduce |

---

## Accessibility

- Rail and topbar use `<nav>` with appropriate `aria-label` attributes
- Active nav item has `aria-current="page"`
- Notification bell uses `aria-label="Notifications"` with an unread count badge
- Bottom nav tab items are `<button>` elements with visible labels
- **Gap:** Mobile drawer does not implement a focus trap

---

## Code example

```tsx
// AppShell wraps routes in App.tsx — not called directly by pages
// Consume via the route guard wrappers:
import { ProtectedShell, RequireVisible } from '@/components/AppShell'

// In router config (App.tsx):
<Route element={<ProtectedShell />}>
  <Route path="/hr/reports" element={
    <RequireVisible flag="hr-reports">
      <Reports />
    </RequireVisible>
  } />
</Route>
```

---

## Source reference

`apps/web/src/components/AppShell.tsx:32`  
Nav config: `apps/web/src/nav.ts`  
CSS: `packages/xhr-ui/app.css` (`.app-shell`, `.rail`, `.topbar`, `.bottomnav`, `.bottomnav__item`)

## Related

- [WeekGrid pattern](/patterns/WeekGrid)
- [ApprovalsInbox pattern](/patterns/ApprovalsInbox)
