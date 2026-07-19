# Aqua component reference

Per-component imports and usage. Everything installs with `npx shadcn@latest add @aqua/<name>` and imports from the project's own `@/components/ui/<name>`. For the always-current version of this reference, fetch https://aqua.duca.dev/llms-full.txt

## theme (@aqua/theme)

Installs the Aqua palette (light gray `#eef0f3` background, `#2f7de0` accent), the Lucida Grande font stack and the `--aqua-*` derived color variables. Install this first.

## button

```tsx
import { Button } from "@/components/ui/button"

<Button>Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="destructive">Delete</Button>
```

Variants: `default` (blue gel), `secondary` (glossy capsule), `destructive` (red gel). Sizes: `sm`, `default`, `lg`. Supports `asChild`.

## badge

```tsx
import { Badge } from "@/components/ui/badge"

<Badge>new</Badge>
```

Variants: `default` (blue), `secondary` (gray), `destructive` (red).

## input

```tsx
import { Input } from "@/components/ui/input"

<Input placeholder="Search" />
```

White well, inset shadow, blue focus halo.

## textarea

```tsx
import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Message" />
```

Multi-line version of the Input well.

## label

```tsx
import { Label } from "@/components/ui/label"

<Label htmlFor="name">Account Name</Label>
```

Pairs with Input/Textarea via `htmlFor`.

## checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox"

<Checkbox defaultChecked />
```

Glossy square that fills with gel when checked.

## radio-group

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="a">
  <label><RadioGroupItem value="a" /> Option A</label>
</RadioGroup>
```

## switch

```tsx
import { Switch } from "@/components/ui/switch"

<Switch defaultChecked />
```

Gel toggle with polished metal thumb.

## select

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select defaultValue="blue">
  <SelectTrigger><SelectValue /></SelectTrigger>
  <SelectContent><SelectItem value="blue">Blue</SelectItem></SelectContent>
</Select>
```

Also exports `SelectGroup`, `SelectLabel`, `SelectSeparator`. Styled as the classic NSPopUpButton.

## slider

```tsx
import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[60]} max={100} step={1} />
```

iTunes-style groove with gel range.

## progress

```tsx
import { Progress } from "@/components/ui/progress"

<Progress value={62} />
```

The striped barber-pole bar; stripes animate while in progress.

## tabs

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="a">
  <TabsList><TabsTrigger value="a">General</TabsTrigger></TabsList>
  <TabsContent value="a">…</TabsContent>
</Tabs>
```

Renders as a gel segmented control seated on a pinstripe pane (NSTabView style).

## dialog

```tsx
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
```

Standard Radix dialog composition, styled as the Aqua alert sheet.

## tooltip

```tsx
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
```

Styled as the classic yellow help tag (`#ffffc7`).

## alert

```tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

<Alert variant="warning">
  <AlertTitle>Low battery</AlertTitle>
  <AlertDescription>…</AlertDescription>
</Alert>
```

Variants: `default` (note/blue), `warning` (caution/yellow), `destructive` (stop/red). Accepts an svg icon as first child.

## toast

```tsx
import { Toaster, toast } from "@/components/ui/toast"
```

Mount `<Toaster />` once near the root, then call `toast({ title, description, variant, duration })` from anywhere. Growl-style: slides in top-right, auto-dismisses after 5s. Depends on `@aqua/alert` (installed automatically).

## dropdown-menu

```tsx
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
```

Also exports `CheckboxItem`, `RadioGroup`/`RadioItem`, `Label`, `Separator`, `Shortcut`, sub menus. Item `variant="destructive"` gets red gel highlight.

## avatar

```tsx
import { Avatar } from "@/components/ui/avatar"

<Avatar src="/me.png" />
<Avatar initials="SJ" />
<Avatar initials="ID" color="#e02f6b" />
<Avatar initials="JI" randomColor />
<Avatar /> {/* generic silhouette */}
```

Props: `size` (`sm`|`default`|`lg`), `shape` (`square`|`circle`), `color` (any hex, rendered as gel), `randomColor` (stable hash of initials).

## loader

```tsx
import { Loader } from "@/components/ui/loader"

<Loader />
<Loader className="size-4 text-white" />
```

The twelve-spoke spinner ticking in `steps(12)`; size and color via className (`currentColor`).

## cursor

```tsx
import { AquaCursor } from "@/components/ui/cursor"

<AquaCursor>{children}</AquaCursor>
```

Wrap the app once. Swaps cursors app-wide for the era set: black arrow with white outline, pointing hand on links, seriffed I-beam over text. Renders `display: contents` (no layout box).

## code-block

```tsx
import { CodeBlock } from "@/components/ui/code-block"

<CodeBlock code={"const x = 1"} lang="ts" />
```

Async server component (shiki highlighting at render time) with an Aqua copy button. Next.js App Router only.

## window

```tsx
import { Window, WindowTitlebar, WindowTitle, WindowContent, TrafficLights } from "@/components/ui/window"
```

Brushed metal window chrome with red/yellow/green traffic lights.

## dock

```tsx
import { Dock, DockItem, DockIcon } from "@/components/ui/dock"

<Dock>
  <DockItem label="Finder" active><img src="/icons/finder.png" /></DockItem>
</Dock>
```

Hover magnification, haloed labels, running-app dots.

## chat-bubble

```tsx
import { ChatBubble, ChatPanel } from "@/components/ui/chat-bubble"

<ChatPanel>
  <ChatBubble from="me">hi</ChatBubble>
  <ChatBubble from="them">hey</ChatBubble>
</ChatPanel>
```

iChat gradient bubbles with sculpted tails; `"me"` is blue/left, `"them"` orange/right.

## ipod

```tsx
import { IPod, IPodScreen, IPodHeader, ClickWheel } from "@/components/ui/ipod"
```

The classic iPod shell with LCD screen and a working click wheel (`onMenu`, `onPrev`, `onNext`, `onPlayPause`, `onSelect` handlers).
