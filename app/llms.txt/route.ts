import registry from "@/registry.json"
import { DOCS_NAV } from "@/lib/docs-nav"

export const dynamic = "force-static"

const SITE_URL = "https://aqua.duca.dev"

export function GET() {
  const components = registry.items
    .filter((item) => item.type === "registry:ui")
    .map(
      (item) =>
        `- [${item.title}](${SITE_URL}/docs/${item.name}): ${item.description} Install: \`npx shadcn@latest add @aqua/${item.name}\` — registry JSON: ${SITE_URL}/r/${item.name}.json`
    )
    .join("\n")

  const guides = DOCS_NAV[0].items
    .map((item) => `- [${item.title}](${SITE_URL}/docs/${item.slug})`)
    .join("\n")

  const body = `# Aqua

> Aqua is a shadcn/ui component registry that recreates the classic Mac OS X (2000–2007) interface — gel buttons, pinstripes, brushed metal, the Dock, the iPod — as accessible React components built on Radix primitives and Tailwind CSS. Components are distributed as open code under the @aqua namespace and copied into the user's project, shadcn-style. Made by Igor Duca (https://duca.dev, @ducaswtf on X).

To install components, first register the namespace in the project's components.json:

{
  "registries": {
    "@aqua": "${SITE_URL}/r/{name}.json"
  }
}

Then add components with the shadcn CLI, e.g. \`npx shadcn@latest add @aqua/theme @aqua/button\`. Components import as \`@/components/ui/<name>\`. Install \`@aqua/theme\` first to get the palette and Lucida Grande typography. Theming: every component derives its color from the \`--aqua-accent\` CSS variable (set it on :root, or on any subtree for scoped themes).

For complete per-component usage with code examples, see ${SITE_URL}/llms-full.txt

## Getting Started

${guides}

## Components

${components}

## Live Demos

- [Mail (2009)](${SITE_URL}/demo/mail): an Apple Mail clone built entirely from Aqua components
- [Chat](${SITE_URL}/demo/chat): an iChat-style conversation with gradient bubbles
`

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
