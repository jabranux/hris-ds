# Contributing

This document describes how to update the QuadX HRIS Design System documentation site (`hris-ds-web/`).

---

## Scope

This site is a **documentation site only**. It does not contain the actual component source code. All component implementation lives in the source application:

- Shared components: `packages/xhr-ui/src/index.tsx`
- CSS tokens and styles: `packages/xhr-ui/app.css`
- Custom components: `apps/web/src/components/`

Do not import from those paths in this project. Code examples in `.md` files are documentation strings, not live imports.

---

## Adding a new component page

1. Create `hris-ds-web/components/<ComponentName>.md` using the 9-section template:
   - Overview, When to use, Anatomy, Variants, States, Responsive behavior, Accessibility, Code example, Props, Source reference
2. Add the component to the sidebar in `.vitepress/config.mts` under the appropriate group (Shared `@xhr/ui` or Custom)
3. Add a row to `resources/traceability.md`
4. Add an entry to the component inventory table in `components/index.md`
5. Record the change in `resources/changelog.md`

---

## Adding a new pattern page

1. Create `hris-ds-web/patterns/<PatternName>.md` using the component template plus:
   - "Composed from" section listing component links
   - "Product context" section explaining where and why
2. Add to the sidebar in `.vitepress/config.mts`
3. Add a row to `resources/traceability.md`
4. Add an entry in `patterns/index.md`
5. Record in `resources/changelog.md`

---

## Updating token documentation

Token values come from `packages/xhr-ui/app.css` in the source application. When tokens change:

1. Run `/audit-app-ds <source-path>` to regenerate the audit manifest
2. Compare token changes in the new `audit/02-tokens.md`
3. Update the relevant `foundations/*.md` page
4. Update the changelog

---

## Running the dev server

```bash
cd hris-ds-web
npm install    # first time only
npm run dev
```

The site runs at `http://localhost:5173/` (or the next available port).

---

## Building for production

```bash
cd hris-ds-web
npm run build   # outputs to .vitepress/dist/
npm run preview # preview the built output locally
```

---

## Traceability

The `resources/traceability.md` table is the alignment backbone used by `/verify-ds`. Keep it in sync with every component and token addition. When in doubt, add a row with a `<!-- TODO -->` Figma link rather than omitting the row.

---

## Figma links

Figma node links follow this format:

```
https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz?node-id=NODE-ID
```

Where `NODE-ID` uses hyphens (e.g. `15-62`), not colons (e.g. `15:62`).

---

## What to run after updating the source application

If the source application has changed (new components, token updates, new patterns):

1. Run `/audit-app-ds` to regenerate `audit/00-manifest.md`
2. Run `/verify-ds` to check coverage against this site
3. Add any missing pages, update changed values, update changelog
