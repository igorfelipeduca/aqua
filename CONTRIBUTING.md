# Contributing

Thanks for wanting to make Aqua glossier.

## Setup

```bash
bun install
bun run dev
```

The docs site runs on `localhost:3000`. Component sources live in `registry/aqua/ui/`, one file per component.

## Adding or changing a component

1. Create or edit the component in `registry/aqua/ui/<name>.tsx`. Components must work standalone: use `var(--aqua-*, #fallback)` for every themable color so the component renders correctly without the theme installed.
2. Register it in `registry.json` (dependencies, description, any `css` keyframes).
3. Run `bun run registry:build` to regenerate `public/r/<name>.json`.
4. Add it to the sidebar in `lib/docs-nav.ts` and write a docs entry in `components/docs-content.tsx` with a preview and usage snippet.
5. `bun run lint` and `bun run build` must pass.

## Era accuracy

This is the hill we die on. Before styling anything, check how it actually looked between 2000 and 2007 — real Aqua used the arrow cursor on buttons, yellow help tags for tooltips, and pill-shaped segmented controls for tabs. Screenshots of the era beat memory.

## Commits

Plain English, imperative mood, no scopes: `Add select: Aqua popup button on Radix Select`.
