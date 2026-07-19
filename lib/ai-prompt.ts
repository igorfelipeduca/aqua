const SITE_URL = "https://aqua.duca.dev"

export function buildComponentPrompt({
  name,
  title,
  description,
}: {
  name: string
  title: string
  description: string
}) {
  return `Add the ${title} component from Aqua to my project.

Aqua is a shadcn/ui registry of skeuomorphic Mac OS X era components (gel gradients, pinstripes, brushed metal) built on Radix primitives and Tailwind CSS, by Igor Duca. ${title}: ${description}

Steps:

1. Make sure shadcn/ui is initialized (npx shadcn@latest init) and register the Aqua namespace in components.json:

{
  "registries": {
    "@aqua": "${SITE_URL}/r/{name}.json"
  }
}

2. Install the theme (first time only) and the component:

npx shadcn@latest add @aqua/theme @aqua/${name}

3. Import it from @/components/ui/${name} and use it. The component is themable through the --aqua-accent CSS variable and falls back to Aqua blue when the theme is absent.

References:
- Docs: ${SITE_URL}/docs/${name}
- Component source and dependencies (registry JSON): ${SITE_URL}/r/${name}.json
- Full library reference for LLMs: ${SITE_URL}/llms-full.txt`
}
