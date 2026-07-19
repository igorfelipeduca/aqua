import Link from "next/link"

import { CodeBlock } from "@/components/code-block"
import { ComponentDemo } from "@/components/component-demo"
import { Button } from "@/registry/aqua/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/aqua/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aqua/ui/tooltip"

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-14 px-4 py-16">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="bg-[linear-gradient(180deg,#8ec2f9_0%,#2f7de0_55%,#1c5fb8_100%)] bg-clip-text text-6xl font-bold tracking-tight text-transparent [filter:drop-shadow(0_1px_0_rgba(255,255,255,0.9))]">
          aqua
        </h1>
        <p className="max-w-md text-balance text-muted-foreground">
          The classic Apple interface, rebuilt for shadcn/ui. Radix underneath,
          gloss on top. Your components, your code.
        </p>
        <div className="mt-2 flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/docs/installation">get started</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/docs/button">components</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a
              href="https://github.com/igorfelipeduca"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          100% open code. mac os x 10.3 or higher.
        </p>
      </header>

      <section id="install" className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight">setup</h2>
        <p className="text-sm text-muted-foreground">
          Point your components.json at the registry, then add anything under
          the @aqua namespace.
        </p>
        <CodeBlock
          lang="json"
          code={`{
  "registries": {
    "@aqua": "https://aqua.duca.dev/r/{name}.json"
  }
}`}
        />
      </section>

      <ComponentDemo
        title="Button"
        description="The glossy gel pill. Blue for primary, capsule for everything else, red when things get serious."
        name="button"
      >
        <Button>default</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="destructive">destructive</Button>
        <Button size="lg">large</Button>
        <Button size="sm">small</Button>
        <Button disabled>disabled</Button>
      </ComponentDemo>

      <ComponentDemo
        title="Tabs"
        description="A gel segmented control seated on the top edge of a pinstripe pane, the way NSTabView drew it."
        name="tabs"
      >
        <Tabs defaultValue="general" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <p className="text-sm">
              Every component ships as open code into your project. Change
              anything, own everything.
            </p>
          </TabsContent>
          <TabsContent value="appearance">
            <p className="text-sm">
              Gradients, pinstripes and gel highlights are plain Tailwind
              classes. No images, no extra CSS files.
            </p>
          </TabsContent>
          <TabsContent value="advanced">
            <p className="text-sm">
              Radix primitives underneath: full keyboard navigation, focus
              management and ARIA out of the box.
            </p>
          </TabsContent>
        </Tabs>
      </ComponentDemo>

      <ComponentDemo
        title="Tooltip"
        description="The Dock label: a dark translucent capsule that floats above its trigger."
        name="tooltip"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Aqua Tooltip</TooltipContent>
        </Tooltip>
      </ComponentDemo>

      <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-[#c9ccd1] pt-6 text-xs text-muted-foreground">
        <span>
          Made by{" "}
          <a
            className="font-semibold text-[#1c5fb8] hover:underline"
            href="https://duca.dev"
            target="_blank"
            rel="noreferrer"
          >
            Igor Duca
          </a>{" "}
          <a
            className="text-[#1c5fb8] hover:underline"
            href="https://x.com/ducaswtf"
            target="_blank"
            rel="noreferrer"
          >
            @ducaswtf
          </a>
        </span>
        <span>© 2026 igor duca</span>
      </footer>
    </div>
  )
}
