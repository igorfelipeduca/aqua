import Image from "next/image"

import { CodeBlock, InstallCommand } from "@/components/code-block"
import { IPodDemo } from "@/components/ipod-demo"
import { ThemePicker } from "@/components/theme-picker"
import { Badge } from "@/registry/aqua/ui/badge"
import { Button } from "@/registry/aqua/ui/button"
import { ChatBubble, ChatPanel } from "@/registry/aqua/ui/chat-bubble"
import { Checkbox } from "@/registry/aqua/ui/checkbox"
import { Dock, DockItem } from "@/registry/aqua/ui/dock"
import {
  TrafficLights,
  Window,
  WindowContent,
  WindowTitle,
  WindowTitlebar,
} from "@/registry/aqua/ui/window"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/aqua/ui/dialog"
import { Input } from "@/registry/aqua/ui/input"
import { Progress } from "@/registry/aqua/ui/progress"
import { Slider } from "@/registry/aqua/ui/slider"
import { Switch } from "@/registry/aqua/ui/switch"
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
      "Every gel surface derives from a single accent variable. Change one line, retint the whole kit.",
    body: (
      <>
        <p>
          The <code>@aqua/theme</code> item overrides the shadcn CSS variables
          with the Mac OS X palette: Aqua blue <code>#2f7de0</code> as primary,
          the soft gray paper background, and the Lucida Grande font stack.
          Components you already have keep working; they just put on the suit.
        </p>
        <InstallCommand name="theme" />
        <SectionTitle>Accent color</SectionTitle>
        <p>
          Buttons, tabs, checkboxes, switches, sliders and progress bars all
          mix their gradients from <code>--aqua-accent</code> with{" "}
          <code>color-mix()</code>. Try it live:
        </p>
        <ThemePicker />
        <p>
          It also works scoped: set the variable on any element and everything
          inside picks it up.
        </p>
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
  badge: {
    title: "Badge",
    description: "Tinted capsule label in blue, glossy gray and red.",
    body: (
      <>
        <Preview>
          <Badge>install</Badge>
          <Badge variant="secondary">software engineer</Badge>
          <Badge variant="destructive">deprecated</Badge>
        </Preview>
        <InstallCommand name="badge" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Badge } from "@/components/ui/badge"

<Badge>install</Badge>
<Badge variant="secondary">software engineer</Badge>`}
        />
      </>
    ),
  },
  "chat-bubble": {
    title: "Chat Bubble",
    description:
      "iChat gradient bubbles with sculpted tails, in blue and orange.",
    body: (
      <>
        <Preview>
          <ChatPanel className="max-w-sm">
            <ChatBubble>hey, did you ship the registry?</ChatBubble>
            <ChatBubble from="them">
              just did. npx shadcn add @aqua/chat-bubble
            </ChatBubble>
            <ChatBubble>gorgeous</ChatBubble>
          </ChatPanel>
        </Preview>
        <InstallCommand name="chat-bubble" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { ChatBubble, ChatPanel } from "@/components/ui/chat-bubble"

<ChatPanel>
  <ChatBubble>hey, did you ship the registry?</ChatBubble>
  <ChatBubble from="them">just did.</ChatBubble>
</ChatPanel>`}
        />
        <p>
          The tails are sculpted from two pseudo-elements, so bubbles need the
          solid panel background to sit on. <code>ChatPanel</code> provides it
          and exposes it as the <code>--chat-panel</code> variable if you
          restyle.
        </p>
      </>
    ),
  },
  checkbox: {
    title: "Checkbox",
    description: "Glossy square that fills with blue gel when checked.",
    body: (
      <>
        <Preview>
          <label className="flex items-center gap-2 text-[13px]">
            <Checkbox defaultChecked /> Open windows at login
          </label>
          <label className="flex items-center gap-2 text-[13px]">
            <Checkbox /> Empty Trash securely
          </label>
          <label className="flex items-center gap-2 text-[13px] opacity-70">
            <Checkbox disabled /> Requires restart
          </label>
        </Preview>
        <InstallCommand name="checkbox" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Checkbox } from "@/components/ui/checkbox"

<Checkbox defaultChecked />`}
        />
      </>
    ),
  },
  dialog: {
    title: "Dialog",
    description:
      "The Aqua alert panel: soft gradient sheet with a deep drop shadow.",
    body: (
      <>
        <Preview>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">show dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Are you sure you want to empty the Trash?
                </DialogTitle>
                <DialogDescription>
                  You cannot undo this action. Items in the Trash will be
                  deleted permanently.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary" size="sm">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="destructive" size="sm">
                    Empty Trash
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
        <InstallCommand name="dialog" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">show dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button size="sm">OK</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        />
      </>
    ),
  },
  dock: {
    title: "Dock",
    description:
      "The translucent shelf: magnifying items, hover labels and running indicators.",
    body: (
      <>
        <Preview>
          <Dock>
            <DockItem label="Finder" active>
              <Image src="/icons/finder.png" alt="Finder" width={58} height={58} />
            </DockItem>
            <DockItem label="Mail" active>
              <Image src="/icons/mail.png" alt="Mail" width={58} height={58} />
            </DockItem>
            <DockItem label="Safari">
              <Image src="/icons/safari.png" alt="Safari" width={58} height={58} />
            </DockItem>
            <DockItem label="iTunes" active>
              <Image src="/icons/itunes.png" alt="iTunes" width={58} height={58} />
            </DockItem>
            <DockItem label="iChat">
              <Image src="/icons/ichat.png" alt="iChat" width={58} height={58} />
            </DockItem>
            <DockItem label="GarageBand">
              <Image
                src="/icons/garageband.png"
                alt="GarageBand"
                width={58}
                height={58}
              />
            </DockItem>
            <DockItem label="System Preferences">
              <Image
                src="/icons/system-preferences.png"
                alt="System Preferences"
                width={58}
                height={58}
              />
            </DockItem>
            <DockItem label="Trash">
              <Image src="/icons/trash.png" alt="Trash" width={58} height={58} />
            </DockItem>
          </Dock>
        </Preview>
        <InstallCommand name="dock" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Dock, DockIcon, DockItem } from "@/components/ui/dock"

<Dock>
  <DockItem label="Finder" active>
    <img src="/icons/finder.png" alt="Finder" width={58} height={58} />
  </DockItem>
  <DockItem label="iTunes">
    <DockIcon>♪</DockIcon>
  </DockItem>
</Dock>`}
        />
        <p>
          <code>DockItem</code> takes any icon content. Era app icons are
          freeform artwork, so drop an <code>&lt;img&gt;</code> straight in;{" "}
          <code>DockIcon</code> is the glossy rounded tile for when you
          don&apos;t have artwork. <code>active</code> shows the running-app dot.
        </p>
      </>
    ),
  },
  input: {
    title: "Input",
    description:
      "The classic Aqua text field: white well with an inset shadow and blue focus halo.",
    body: (
      <>
        <Preview>
          <div className="flex w-full max-w-xs flex-col gap-3">
            <Input placeholder="Search" />
            <Input type="email" placeholder="steve@apple.com" />
            <Input disabled placeholder="Disabled" />
          </div>
        </Preview>
        <InstallCommand name="input" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Input } from "@/components/ui/input"

<Input type="email" placeholder="steve@apple.com" />`}
        />
      </>
    ),
  },
  progress: {
    title: "Progress",
    description: "The iconic striped blue barber-pole progress bar.",
    body: (
      <>
        <Preview>
          <div className="flex w-full max-w-xs flex-col gap-4">
            <Progress value={62} />
            <Progress value={90} />
          </div>
        </Preview>
        <InstallCommand name="progress" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Progress } from "@/components/ui/progress"

<Progress value={62} />`}
        />
        <p>
          The stripes march to the right while work is in progress, and stand
          still under <code>prefers-reduced-motion</code>.
        </p>
      </>
    ),
  },
  slider: {
    title: "Slider",
    description:
      "iTunes volume slider: groove track, blue gel range, polished knob.",
    body: (
      <>
        <Preview>
          <div className="w-full max-w-xs">
            <Slider defaultValue={[62]} />
          </div>
        </Preview>
        <InstallCommand name="slider" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[62]} max={100} step={1} />`}
        />
      </>
    ),
  },
  switch: {
    title: "Switch",
    description: "Gel toggle with a polished metal thumb.",
    body: (
      <>
        <Preview>
          <label className="flex items-center gap-2 text-[13px]">
            <Switch defaultChecked /> Wi-Fi
          </label>
          <label className="flex items-center gap-2 text-[13px]">
            <Switch /> Bluetooth
          </label>
        </Preview>
        <InstallCommand name="switch" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Switch } from "@/components/ui/switch"

<Switch defaultChecked />`}
        />
      </>
    ),
  },
  tabs: {
    title: "Tabs",
    description:
      "A gel segmented control seated on the top edge of a pinstripe pane, the way NSTabView drew it.",
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
  ipod: {
    title: "iPod",
    description:
      "The classic iPod: white shell, LCD screen and a working click wheel.",
    body: (
      <>
        <Preview>
          <IPodDemo />
        </Preview>
        <InstallCommand name="ipod" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { ClickWheel, IPod, IPodHeader, IPodScreen } from "@/components/ui/ipod"

<IPod>
  <IPodScreen>
    <IPodHeader>Now Playing</IPodHeader>
    <div className="px-4 py-3 text-center text-[13px]">
      <p className="font-bold">The American Dawn</p>
      <p>Her</p>
    </div>
  </IPodScreen>
  <ClickWheel
    onPlayPause={togglePlayback}
    onPrev={previousTrack}
    onNext={nextTrack}
  />
</IPod>`}
        />
        <p>
          The screen takes any content: menus, album art, a game of Brick.
          Every wheel button and the center click accept a handler.
        </p>
      </>
    ),
  },
  window: {
    title: "Window",
    description:
      "Brushed metal window chrome with traffic lights and a titlebar.",
    body: (
      <>
        <Preview>
          <Window className="w-full max-w-md">
            <WindowTitlebar>
              <TrafficLights />
              <WindowTitle>About This Mac</WindowTitle>
            </WindowTitlebar>
            <WindowContent className="flex flex-col gap-1 p-6">
              <p className="font-semibold">Mac OS X</p>
              <p className="text-[#7a8089]">Version 10.3.9</p>
              <p className="pt-2">
                Processor: 1.25 GHz PowerPC G4
                <br />
                Memory: 512 MB DDR SDRAM
              </p>
            </WindowContent>
          </Window>
        </Preview>
        <InstallCommand name="window" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import {
  TrafficLights,
  Window,
  WindowContent,
  WindowTitle,
  WindowTitlebar,
} from "@/components/ui/window"

<Window>
  <WindowTitlebar>
    <TrafficLights />
    <WindowTitle>About This Mac</WindowTitle>
  </WindowTitlebar>
  <WindowContent className="p-6">...</WindowContent>
</Window>`}
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
