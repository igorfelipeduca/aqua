import Image from "next/image"
import Link from "next/link"
import { InfoIcon, OctagonXIcon, TriangleAlertIcon } from "lucide-react"

import { CodeBlock, InstallCommand } from "@/components/code-block"
import { Alert, AlertDescription, AlertTitle } from "@/registry/aqua/ui/alert"
import { Avatar } from "@/registry/aqua/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/aqua/ui/dropdown-menu"
import { Label } from "@/registry/aqua/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/aqua/ui/radio-group"
import { Textarea } from "@/registry/aqua/ui/textarea"
import { IPodDemo } from "@/components/ipod-demo"
import { ThemePicker } from "@/components/theme-picker"
import { ToastDemo } from "@/components/toast-demo"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/aqua/ui/select"
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
  alert: {
    title: "Alert",
    description: "Soft gradient notice panel in note, caution and stop flavors.",
    body: (
      <>
        <Preview>
          <div className="flex w-full max-w-md flex-col gap-3">
            <Alert>
              <InfoIcon />
              <AlertTitle>Software Update</AlertTitle>
              <AlertDescription>
                Mac OS X 10.4 &quot;Tiger&quot; is available for your computer.
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <TriangleAlertIcon />
              <AlertTitle>Low battery</AlertTitle>
              <AlertDescription>
                You are now running on reserve power. Plug in your PowerBook.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <OctagonXIcon />
              <AlertTitle>Disk not ejected properly</AlertTitle>
              <AlertDescription>
                Eject a disk before disconnecting it, or you may lose data.
              </AlertDescription>
            </Alert>
          </div>
        </Preview>
        <InstallCommand name="alert" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

<Alert variant="warning">
  <InfoIcon />
  <AlertTitle>Low battery</AlertTitle>
  <AlertDescription>Plug in your PowerBook.</AlertDescription>
</Alert>`}
        />
        <p>
          Alerts render inline. To pop them onto the screen from an event, use
          the{" "}
          <Link href="/docs/toast" className="text-[#1c5fb8] hover:underline">
            Toast
          </Link>{" "}
          component, which wraps these same panels in a Growl-style notifier.
        </p>
      </>
    ),
  },
  avatar: {
    title: "Avatar",
    description:
      "The iChat buddy icon: photo, initials over a gel color, or the classic generic silhouette.",
    body: (
      <>
        <Preview>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <Avatar size="lg" src="https://github.com/igorfelipeduca.png" alt="Igor Duca" />
              <Avatar size="lg" initials="SJ" />
              <Avatar size="lg" initials="ID" color="#e02f6b" />
              <Avatar size="lg" initials="JI" randomColor />
              <Avatar size="lg" alt="Unknown buddy" />
            </div>
            <div className="flex items-center gap-4">
              <Avatar size="lg" shape="circle" src="https://github.com/igorfelipeduca.png" alt="Igor Duca" />
              <Avatar size="lg" shape="circle" initials="SJ" />
              <Avatar size="lg" shape="circle" initials="ID" color="#e02f6b" />
              <Avatar size="lg" shape="circle" initials="JI" randomColor />
              <Avatar size="lg" shape="circle" alt="Unknown buddy" />
            </div>
          </div>
        </Preview>
        <InstallCommand name="avatar" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Avatar } from "@/components/ui/avatar"

<Avatar src="/buddy.png" alt="Igor Duca" />
<Avatar initials="SJ" />
<Avatar initials="ID" color="#e02f6b" />
<Avatar initials="JI" randomColor />
<Avatar shape="circle" initials="SJ" />
<Avatar />`}
        />
        <p>
          With no <code>src</code> or <code>initials</code>, the avatar renders
          the generic buddy silhouette. Without an explicit color, the gel
          background follows the theme accent; <code>randomColor</code> picks a
          stable era color from the initials, so the same buddy always gets the
          same gel. Sizes come as <code>sm</code>, <code>default</code> and{" "}
          <code>lg</code>; the shape is the square buddy well by default, or a
          full circle with <code>shape=&quot;circle&quot;</code>.
        </p>
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
  cursor: {
    title: "Cursor",
    description:
      "Wrap your app and get the classic Aqua arrow, pointing hand and I-beam cursors.",
    body: (
      <>
        <Preview>
          <div className="flex flex-col items-center gap-4 text-[13px]">
            <p className="text-muted-foreground">
              Move your mouse around — this whole site is wrapped in{" "}
              <code>AquaCursor</code>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button>arrow on buttons</Button>
              <Link
                href="/docs/introduction"
                className="text-[#1c5fb8] hover:underline"
              >
                hand on links
              </Link>
              <Input placeholder="I-beam on text" className="w-44" />
            </div>
          </div>
        </Preview>
        <InstallCommand name="cursor" />
        <SectionTitle>Usage</SectionTitle>
        <p>
          Wrap your app once — <code>cursor</code> is an inherited CSS
          property, so everything inside gets the era pointers:
        </p>
        <CodeBlock
          code={`import { AquaCursor } from "@/components/ui/cursor"

<body>
  <AquaCursor>{children}</AquaCursor>
</body>`}
        />
        <p>
          The three cursors are inline SVG data URIs: the black arrow with its
          white outline, the white pointing hand for links, and a seriffed
          I-beam for text fields. No image assets, and the native cursor stays
          as a fallback. The wrapper renders with{" "}
          <code>display:&nbsp;contents</code>, so it adds no box to your
          layout.
        </p>
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
  "dropdown-menu": {
    title: "Dropdown Menu",
    description:
      "Aqua context menu: white panel, gel highlight, checkable items and submenus.",
    body: (
      <>
        <Preview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Action</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                Get Info<DropdownMenuShortcut>&#8984;I</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Duplicate<DropdownMenuShortcut>&#8984;D</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Show Item Info
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Arrange By</DropdownMenuLabel>
              <DropdownMenuRadioGroup value="name">
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="kind">Kind</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                Move to Trash
                <DropdownMenuShortcut>&#8984;&#9003;</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Preview>
        <InstallCommand name="dropdown-menu" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">Action</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Get Info</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Move to Trash</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        />
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
  label: {
    title: "Label",
    description: "Etched form label in classic panel typography.",
    body: (
      <>
        <Preview>
          <div className="grid w-full max-w-xs gap-2">
            <Label htmlFor="account-name">Account Name</Label>
            <Input id="account-name" placeholder="Igor Duca" />
          </div>
        </Preview>
        <InstallCommand name="label" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Label } from "@/components/ui/label"

<Label htmlFor="account-name">Account Name</Label>
<Input id="account-name" />`}
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
  "radio-group": {
    title: "Radio Group",
    description:
      "Glossy round radios that fill with gel and a white pip when selected.",
    body: (
      <>
        <Preview>
          <RadioGroup defaultValue="genie">
            <label className="flex items-center gap-2 text-[13px]">
              <RadioGroupItem value="genie" /> Genie Effect
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <RadioGroupItem value="scale" /> Scale Effect
            </label>
            <label className="flex items-center gap-2 text-[13px]">
              <RadioGroupItem value="suck" disabled /> Suck Effect (hidden)
            </label>
          </RadioGroup>
        </Preview>
        <InstallCommand name="radio-group" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="genie">
  <label className="flex items-center gap-2">
    <RadioGroupItem value="genie" /> Genie Effect
  </label>
  <label className="flex items-center gap-2">
    <RadioGroupItem value="scale" /> Scale Effect
  </label>
</RadioGroup>`}
        />
      </>
    ),
  },
  select: {
    title: "Select",
    description:
      "The Aqua popup button: glossy capsule with a gel arrow box, menu with gel highlight.",
    body: (
      <>
        <Preview>
          <Select defaultValue="aqua">
            <SelectTrigger>
              <SelectValue placeholder="Appearance" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Appearance</SelectLabel>
                <SelectItem value="aqua">Blue</SelectItem>
                <SelectItem value="graphite">Graphite</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Highlight Color</SelectLabel>
                <SelectItem value="gold">Gold</SelectItem>
                <SelectItem value="lime">Lime</SelectItem>
                <SelectItem value="strawberry">Strawberry</SelectItem>
                <SelectItem value="tangerine" disabled>
                  Tangerine (requires 10.4)
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Preview>
        <InstallCommand name="select" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select defaultValue="aqua">
  <SelectTrigger>
    <SelectValue placeholder="Appearance" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="aqua">Blue</SelectItem>
    <SelectItem value="graphite">Graphite</SelectItem>
  </SelectContent>
</Select>`}
        />
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
      <p className="font-bold">Vertigo</p>
      <p>U2</p>
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
  textarea: {
    title: "Textarea",
    description: "Multi-line Aqua text well with an inset shadow and blue focus halo.",
    body: (
      <>
        <Preview>
          <Textarea
            className="max-w-sm"
            placeholder="Dear Steve, about that one more thing..."
          />
        </Preview>
        <InstallCommand name="textarea" />
        <SectionTitle>Usage</SectionTitle>
        <CodeBlock
          code={`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Type your message here." />`}
        />
      </>
    ),
  },
  toast: {
    title: "Toast",
    description:
      "Growl-style notifications: call toast() and an Alert slides in from the corner.",
    body: (
      <>
        <Preview>
          <ToastDemo />
        </Preview>
        <InstallCommand name="toast" />
        <SectionTitle>Usage</SectionTitle>
        <p>
          Mount the <code>Toaster</code> once, near the root of your app:
        </p>
        <CodeBlock
          code={`import { Toaster } from "@/components/ui/toast"

<body>
  {children}
  <Toaster />
</body>`}
        />
        <p>
          Then fire notifications from anywhere with <code>toast()</code>:
        </p>
        <CodeBlock
          code={`import { toast } from "@/components/ui/toast"

toast({
  title: "Software Update",
  description: "Mac OS X 10.4 “Tiger” is available.",
})

toast({ variant: "destructive", title: "Disk not ejected properly" })`}
        />
        <p>
          Toasts dismiss themselves after five seconds (tune with{" "}
          <code>duration</code>), or on the little Aqua close pearl that shows
          on hover. Installing <code>@aqua/toast</code> pulls in{" "}
          <code>@aqua/alert</code> automatically, so the three variants match
          your inline alerts.
        </p>
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
