---
name: aqua
description: Installs and uses Aqua, the shadcn/ui registry that recreates the classic Mac OS X (2000-2007) interface — gel buttons, pinstripes, brushed metal, the Dock, the iPod — as accessible React components. Use when a project wants Aqua components, a retro Apple / Mac OS X / iChat / iPod aesthetic, or mentions the @aqua registry or aqua.duca.dev.
license: MIT
metadata:
  author: igorfelipeduca
  website: https://aqua.duca.dev
---

# Aqua

Aqua distributes the classic Apple interface as a [shadcn/ui](https://ui.shadcn.com) registry: Radix primitives underneath, Tailwind CSS gel gradients on top. Components are **copied into the project as open source code** under the `@aqua` namespace — there is no package to import, and the user owns every file.

## Setup

1. The project must have shadcn/ui initialized. If it doesn't, run `npx shadcn@latest init` first.
2. Register the namespace in the project's `components.json`:

```json
{
  "registries": {
    "@aqua": "https://aqua.duca.dev/r/{name}.json"
  }
}
```

3. Install the theme **first** (palette, Lucida Grande font stack, derived `--aqua-*` variables):

```bash
npx shadcn@latest add @aqua/theme
```

4. Add components as needed:

```bash
npx shadcn@latest add @aqua/button @aqua/tabs @aqua/select
```

Components land in the project and import from it, e.g. `import { Button } from "@/components/ui/button"`. Dependencies (Radix packages, lucide-react, shiki) and internal registry dependencies (e.g. toast depends on alert) install automatically.

## Theming

Every component derives its color from one CSS variable and falls back to Aqua blue (`#2f7de0`) when unset:

```css
:root {
  --aqua-accent: #e02f6b; /* strawberry */
}
```

Gel gradients, edges and focus rings are computed with `color-mix`, so this one line rethemes everything. Scoped themes work too — set `--aqua-accent` on any element and its subtree recomputes.

## Components

**Core:** alert, avatar, badge, button, checkbox, code-block, dialog, dropdown-menu, input, label, loader, progress, radio-group, select, slider, switch, tabs, textarea, toast, tooltip

**Signature:** window (brushed metal chrome + traffic lights), dock (magnifying icons), chat-bubble (iChat bubbles), ipod (working click wheel), cursor (era arrow/hand/I-beam)

All install as `npx shadcn@latest add @aqua/<name>`. Docs per component at `https://aqua.duca.dev/docs/<name>`.

## Gotchas

- Install `@aqua/theme` before any component, or everything falls back to defaults without the palette and typography.
- `toast`: mount `<Toaster />` once near the root, then call `toast({ title, description })` from anywhere.
- `cursor`: wrap the app once — `<AquaCursor>{children}</AquaCursor>`; it renders `display: contents`.
- `code-block` is an async server component (shiki at render time) — Next.js App Router only.

## Reference

- Import statements and props for every component: [reference.md](reference.md)
- Always-current machine-readable docs: https://aqua.duca.dev/llms.txt (index) and https://aqua.duca.dev/llms-full.txt (full usage)
- Live demos built entirely from Aqua: https://aqua.duca.dev/demo/mail and https://aqua.duca.dev/demo/chat
