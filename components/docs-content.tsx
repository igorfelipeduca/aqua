import { CodeBlock, InstallCommand } from "@/components/code-block"
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

function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-4 rounded-xl border border-[#aeb3bc] bg-white p-10 shadow-[0_2px_10px_rgba(20,30,50,0.08)]">
      {children}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-lg font-semibold tracking-tight">{children}</h2>
  )
}

export type Doc = {
  title: string
  description: string
  body: React.ReactNode
}

export const DOCS: Record<string, Doc> = {
  introduction: {
    title: "Introduction",
    description:
      "The classic Apple interface from the Mac OS X era, rebuilt as a shadcn/ui registry.",
    body: (
      <>
        <p>
          Aqua is a set of glossy, skeuomorphic components in the visual
          language Apple shipped between 2000 and 2007: gel buttons, pinstripe
          panes, brushed metal and Dock labels. Underneath the gloss, every
          component is built on Radix primitives, so keyboard navigation, focus
          management and ARIA semantics come for free.
        </p>
        <p>
          Like everything in the shadcn ecosystem, Aqua is not a package you
          import. Components are copied into your project as open code: change
          anything, own everything.
        </p>
        <Preview>
          <Button>gorgeous</Button>
          <Button variant="secondary">honest</Button>
          <Button variant="destructive">yours</Button>
        </Preview>
      </>
    ),
  },
  installation: {
    title: "Installation",
    description: "Point the shadcn CLI at the Aqua registry and start adding.",
    body: (
      <>
        <p>
          Aqua works in any project already set up with shadcn/ui. Register the
          namespace in your <code>components.json</code>:
        </p>
        <CodeBlock
          code={`{
  "registries": {
    "@aqua": "https://aqua.duca.dev/r/{name}.json"
  }
}`}
        />
        <p>Then install components under the @aqua namespace:</p>
        <CodeBlock code={`npx shadcn@latest add @aqua/button @aqua/tabs`} />
        <p>
          Start with the theme to bring the full palette and typography into
          your project:
        </p>
        <CodeBlock code={`npx shadcn@latest add @aqua/theme`} />
      </>
    ),
  },
  theming: {
    title: "Theming",
    description:
      "One theme item maps the Aqua palette onto the standard shadcn tokens.",
    body: (
      <>
        <p>
          The <code>@aqua/theme</code> item overrides the shadcn CSS variables
          with the Mac OS X palette: Aqua blue <code>#2f7de0</code> as primary,
          the soft gray paper background, and the Lucida Grande font stack.
          Components you already have keep working; they just put on the suit.
        </p>
        <InstallCommand name="theme" />
        <SectionTitle>Signature surfaces</SectionTitle>
        <p>
          The era look leans on a few recurring textures, all done in plain CSS
          gradients inside the components themselves: the gel highlight (a
          white-to-transparent cap on buttons and tabs), pinstripes (a 4px
          repeating gradient) and the dotted desktop background.
        </p>
      </>
    ),
  },
  button: {
    title: "Button",
    description:
      "The glossy gel pill. Blue for primary, capsule for everything else, red when things get serious.",
    body: (
      <>
        <Preview>
          <Button>default</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="destructive">destructive</Button>
          <Button size="lg">large</Button>
          <Button size="sm">small</Button>
          <Button disabled>disabled</Button>
        </Preview>
        <InstallCommand name="button" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"

<Button>save</Button>
<Button variant="secondary">cancel</Button>
<Button variant="destructive" size="sm">delete</Button>`}
        />
      </>
    ),
  },
  tabs: {
    title: "Tabs",
    description:
      "Glossy tab bar over a pinstripe pane, straight out of System Preferences.",
    body: (
      <>
        <Preview>
          <Tabs defaultValue="general" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <p className="text-sm">
                Every component ships as open code into your project.
              </p>
            </TabsContent>
            <TabsContent value="appearance">
              <p className="text-sm">
                Gradients and pinstripes are plain Tailwind classes. No images.
              </p>
            </TabsContent>
            <TabsContent value="advanced">
              <p className="text-sm">
                Radix primitives underneath: keyboard navigation and ARIA out
                of the box.
              </p>
            </TabsContent>
          </Tabs>
        </Preview>
        <InstallCommand name="tabs" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="advanced">Advanced</TabsTrigger>
  </TabsList>
  <TabsContent value="general">...</TabsContent>
  <TabsContent value="advanced">...</TabsContent>
</Tabs>`}
        />
      </>
    ),
  },
  tooltip: {
    title: "Tooltip",
    description:
      "The Dock label: a dark translucent capsule that floats above its trigger.",
    body: (
      <>
        <Preview>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Aqua Tooltip</TooltipContent>
          </Tooltip>
        </Preview>
        <InstallCommand name="tooltip" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="secondary">hover me</Button>
  </TooltipTrigger>
  <TooltipContent>Aqua Tooltip</TooltipContent>
</Tooltip>`}
        />
      </>
    ),
  },
}
