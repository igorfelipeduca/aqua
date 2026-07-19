import registry from "@/registry.json"

export const dynamic = "force-static"

const SITE_URL = "https://aqua.duca.dev"

const USAGE: Record<string, string> = {
  theme: `Installs the Aqua palette (light gray #eef0f3 background, #2f7de0 accent), the Lucida Grande font stack and the --aqua-* derived color variables. Install this first.`,
  button: `import { Button } from "@/components/ui/button"
<Button>Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="destructive">Delete</Button>
Variants: default (blue gel), secondary (glossy capsule), destructive (red gel). Sizes: sm, default, lg. Supports asChild.`,
  badge: `import { Badge } from "@/components/ui/badge"
<Badge>new</Badge> — variants: default (blue), secondary (gray), destructive (red).`,
  input: `import { Input } from "@/components/ui/input"
<Input placeholder="Search" /> — white well, inset shadow, blue focus halo.`,
  textarea: `import { Textarea } from "@/components/ui/textarea"
<Textarea placeholder="Message" /> — multi-line version of the Input well.`,
  label: `import { Label } from "@/components/ui/label"
<Label htmlFor="name">Account Name</Label> — pairs with Input/Textarea via htmlFor.`,
  checkbox: `import { Checkbox } from "@/components/ui/checkbox"
<Checkbox defaultChecked /> — glossy square that fills with gel when checked.`,
  "radio-group": `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
<RadioGroup defaultValue="a"><label><RadioGroupItem value="a" /> Option A</label></RadioGroup>`,
  switch: `import { Switch } from "@/components/ui/switch"
<Switch defaultChecked /> — gel toggle with polished metal thumb.`,
  select: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
<Select defaultValue="blue"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="blue">Blue</SelectItem></SelectContent></Select>
Also exports SelectGroup, SelectLabel, SelectSeparator. Styled as the classic NSPopUpButton.`,
  slider: `import { Slider } from "@/components/ui/slider"
<Slider defaultValue={[60]} max={100} step={1} /> — iTunes-style groove with gel range.`,
  progress: `import { Progress } from "@/components/ui/progress"
<Progress value={62} /> — the striped barber-pole bar; stripes animate while in progress.`,
  tabs: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
<Tabs defaultValue="a"><TabsList><TabsTrigger value="a">General</TabsTrigger></TabsList><TabsContent value="a">…</TabsContent></Tabs>
Renders as a gel segmented control seated on a pinstripe pane (NSTabView style).`,
  dialog: `import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
Standard Radix dialog composition, styled as the Aqua alert sheet.`,
  tooltip: `import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
Styled as the classic yellow help tag (#ffffc7).`,
  alert: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
<Alert variant="warning"><AlertTitle>Low battery</AlertTitle><AlertDescription>…</AlertDescription></Alert>
Variants: default (note/blue), warning (caution/yellow), destructive (stop/red). Accepts an svg icon as first child.`,
  toast: `import { Toaster, toast } from "@/components/ui/toast"
Mount <Toaster /> once near the root, then call toast({ title, description, variant, duration }) from anywhere. Growl-style: slides in top-right, auto-dismisses after 5s. Depends on @aqua/alert (installed automatically).`,
  "dropdown-menu": `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
Also exports CheckboxItem, RadioGroup/RadioItem, Label, Separator, Shortcut, Sub menus. Item variant="destructive" gets red gel highlight.`,
  avatar: `import { Avatar } from "@/components/ui/avatar"
<Avatar src="/me.png" /> | <Avatar initials="SJ" /> | <Avatar initials="ID" color="#e02f6b" /> | <Avatar initials="JI" randomColor /> | <Avatar /> (generic silhouette)
Props: size (sm|default|lg), shape (square|circle), color (any hex, rendered as gel), randomColor (stable hash of initials).`,
  loader: `import { Loader } from "@/components/ui/loader"
<Loader /> | <Loader className="size-4 text-white" /> — the twelve-spoke spinner ticking in steps(12); size and color via className (currentColor).`,
  cursor: `import { AquaCursor } from "@/components/ui/cursor"
Wrap the app once: <AquaCursor>{children}</AquaCursor>. Swaps cursors app-wide for the era set: black arrow with white outline, pointing hand on links, seriffed I-beam over text. Renders display:contents (no layout box).`,
  "code-block": `import { CodeBlock } from "@/components/ui/code-block"
<CodeBlock code={"const x = 1"} lang="ts" /> — async server component (shiki highlighting at render time) with an Aqua copy button. Next.js App Router only.`,
  window: `import { Window, WindowTitlebar, WindowTitle, WindowContent, TrafficLights } from "@/components/ui/window"
Brushed metal window chrome with red/yellow/green traffic lights.`,
  dock: `import { Dock, DockItem, DockIcon } from "@/components/ui/dock"
<Dock><DockItem label="Finder" active><img src="/icons/finder.png" /></DockItem></Dock>
Hover magnification, haloed labels, running-app dots.`,
  "chat-bubble": `import { ChatBubble, ChatPanel } from "@/components/ui/chat-bubble"
<ChatPanel><ChatBubble from="me">hi</ChatBubble><ChatBubble from="them">hey</ChatBubble></ChatPanel>
iChat gradient bubbles with sculpted tails; "me" is blue/left, "them" orange/right.`,
  ipod: `import { IPod, IPodScreen, IPodHeader, ClickWheel } from "@/components/ui/ipod"
The classic iPod shell with LCD screen and a working click wheel (onMenu, onPrev, onNext, onPlayPause, onSelect handlers).`,
}

export function GET() {
  const sections = registry.items
    .filter((item) => item.type === "registry:ui")
    .map((item) => {
      const usage = USAGE[item.name] ?? ""
      return `## ${item.title} (@aqua/${item.name})

${item.description}

Install: npx shadcn@latest add @aqua/${item.name}
Docs: ${SITE_URL}/docs/${item.name}
Registry JSON: ${SITE_URL}/r/${item.name}.json

${usage}`
    })
    .join("\n\n")

  const body = `# Aqua — full component reference for LLMs

> Aqua recreates the classic Mac OS X (2000–2007) interface as a shadcn/ui registry: accessible React components on Radix primitives, styled with Tailwind CSS into gel gradients, pinstripes and brushed metal. Made by Igor Duca (https://duca.dev, @ducaswtf on X).

## Setup

1. The project must have shadcn/ui initialized (npx shadcn@latest init).
2. Register the namespace in components.json:

{
  "registries": {
    "@aqua": "${SITE_URL}/r/{name}.json"
  }
}

3. Install the theme first: npx shadcn@latest add @aqua/theme
4. Add components as needed: npx shadcn@latest add @aqua/button @aqua/tabs

Components are copied into the project as source files and import as @/components/ui/<name>. Dependencies (Radix packages, lucide-react, shiki) install automatically.

## Theming

Every component derives its color from the --aqua-accent CSS variable and falls back to Aqua blue (#2f7de0) when the theme is absent. To retheme globally:

:root { --aqua-accent: #e02f6b; }

Scoped themes work too — set --aqua-accent on any element and its subtree recomputes (the derived --aqua-gel-* variables are declared on the universal selector).

${sections}
`

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
