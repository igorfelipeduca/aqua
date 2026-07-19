import Link from "next/link"
import { HomeIcon, ShoppingCartIcon } from "lucide-react"

import { CommandPalette } from "@/components/command-palette"
import { ToastPromoButton } from "@/components/store-promos"
import { Avatar } from "@/registry/aqua/ui/avatar"
import { Badge } from "@/registry/aqua/ui/badge"
import { Button } from "@/registry/aqua/ui/button"
import { ChatBubble, ChatPanel } from "@/registry/aqua/ui/chat-bubble"
import { Checkbox } from "@/registry/aqua/ui/checkbox"
import { Dock, DockIcon, DockItem } from "@/registry/aqua/ui/dock"
import { ClickWheel, IPod, IPodHeader, IPodScreen } from "@/registry/aqua/ui/ipod"
import { Loader } from "@/registry/aqua/ui/loader"
import { Progress } from "@/registry/aqua/ui/progress"
import { Slider } from "@/registry/aqua/ui/slider"
import { Switch } from "@/registry/aqua/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aqua/ui/tooltip"
import {
  TrafficLights,
  Window,
  WindowContent,
  WindowTitle,
  WindowTitlebar,
} from "@/registry/aqua/ui/window"

const NAV_TABS = [
  { label: "Store", href: "/", active: true },
  { label: "Components", href: "/docs/button" },
  { label: "Docs", href: "/docs/introduction" },
  { label: "Demos", href: "/demo/mail" },
  { label: "GitHub", href: "https://github.com/igorfelipeduca/aqua", external: true },
]

const FORM_PICKS = [
  { title: "Input", slug: "input" },
  { title: "Checkbox", slug: "checkbox" },
  { title: "Radio Group", slug: "radio-group" },
  { title: "Select", slug: "select" },
  { title: "Slider", slug: "slider" },
  { title: "Switch", slug: "switch" },
  { title: "Textarea", slug: "textarea" },
  { title: "Label", slug: "label" },
]

const FEEDBACK_PICKS = [
  { title: "Alert", slug: "alert" },
  { title: "Toast", slug: "toast" },
  { title: "Loader", slug: "loader" },
  { title: "Progress", slug: "progress" },
  { title: "Tooltip", slug: "tooltip" },
  { title: "Dialog", slug: "dialog" },
]

const NEW_TO_STORE = [
  { title: "Loader", slug: "loader" },
  { title: "Code Block", slug: "code-block" },
  { title: "Cursor", slug: "cursor" },
  { title: "Toast", slug: "toast" },
  { title: "Alert", slug: "alert" },
  { title: "Avatar", slug: "avatar" },
  { title: "Dropdown Menu", slug: "dropdown-menu" },
  { title: "Radio Group", slug: "radio-group" },
  { title: "Label", slug: "label" },
  { title: "Textarea", slug: "textarea" },
]

const TOP_SELLERS_CORE = ["button", "tabs", "input", "select", "dialog", "switch"]
const TOP_SELLERS_SIGNATURE = ["ipod", "dock", "window", "chat-bubble", "cursor"]

const SLUG_TITLES: Record<string, string> = {
  button: "Button",
  tabs: "Tabs",
  input: "Input",
  select: "Select",
  dialog: "Dialog",
  switch: "Switch",
  ipod: "iPod",
  dock: "Dock",
  window: "Window",
  "chat-bubble": "Chat Bubble",
  cursor: "Cursor",
}

function StoreHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-8 items-center bg-[linear-gradient(180deg,#4a6f9e_0%,#2c5083_50%,#1d3d6b_51%,#2a4b7c_100%)] px-3 text-[13px] font-bold text-white [text-shadow:0_-1px_0_rgba(0,0,0,0.35)]">
      {children}
    </div>
  )
}

function StoreBox({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`overflow-hidden rounded-[4px] border border-[#c4c9d1] bg-white ${className}`}>
      {children}
    </div>
  )
}

function ProductCell({
  title,
  slug,
  price,
  children,
  tall = false,
}: {
  title: string
  slug: string
  price: string
  children: React.ReactNode
  tall?: boolean
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-3 py-5">
      <div
        className={`flex w-full items-center justify-center overflow-hidden ${
          tall ? "h-40" : "h-16"
        }`}
      >
        {children}
      </div>
      <Link
        href={`/docs/${slug}`}
        className="text-[13px] font-bold text-[#1c5fb8] hover:underline"
      >
        {title}
      </Link>
      <span className="text-[12px] text-[#7a8089]">{price}</span>
    </div>
  )
}

function SideLink({ title, slug }: { title: string; slug: string }) {
  return (
    <li>
      <Link
        href={`/docs/${slug}`}
        className="block px-3 py-[3px] text-[12px] text-[#1c5fb8] hover:underline"
      >
        {title}
      </Link>
    </li>
  )
}

export default function Home() {
  return (
    <div className="min-h-svh bg-white pb-10">
      <div className="mx-auto max-w-[1160px] px-3 pt-3">
        <nav className="flex h-9 items-stretch overflow-hidden rounded-[5px] bg-[linear-gradient(180deg,#bdbdbd_0%,#8f8f8f_48%,#767676_52%,#888888_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.25)]">
          <Link
            href="/"
            aria-label="Aqua home"
            className="flex w-14 items-center justify-center border-r border-black/25"
          >
            <span className="size-4 rounded-full bg-[radial-gradient(circle_at_50%_30%,#a5d0fa,#2f7de0_70%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.4)]" />
          </Link>
          {NAV_TABS.map((tab) =>
            tab.external ? (
              <a
                key={tab.label}
                href={tab.href}
                target="_blank"
                rel="noreferrer"
                className="hidden flex-1 items-center justify-center border-r border-black/25 text-[13px] font-medium text-white [text-shadow:0_-1px_0_rgba(0,0,0,0.4)] hover:bg-white/10 sm:flex"
              >
                {tab.label}
              </a>
            ) : (
              <Link
                key={tab.label}
                href={tab.href}
                className={
                  tab.active
                    ? "flex flex-1 items-center justify-center border-r border-black/25 bg-[linear-gradient(180deg,#5a5a5a_0%,#2e2e2e_50%,#151515_51%,#2b2b2b_100%)] text-[13px] font-semibold text-white [text-shadow:0_-1px_0_rgba(0,0,0,0.6)]"
                    : "flex flex-1 items-center justify-center border-r border-black/25 text-[13px] font-medium text-white [text-shadow:0_-1px_0_rgba(0,0,0,0.4)] hover:bg-white/10"
                }
              >
                {tab.label}
              </Link>
            )
          )}
          <div className="flex items-center px-2">
            <CommandPalette />
          </div>
        </nav>

        <div className="mt-3 flex h-9 items-center gap-2 rounded-[4px] border border-[#d2d5da] bg-[linear-gradient(180deg,#fcfcfd_0%,#e9ebee_100%)] px-3 text-[12px] text-[#5a6069]">
          <HomeIcon className="size-3.5 text-[#7a8089]" />
          <span className="text-[#9aa0aa]">&rsaquo;</span>
          <span>Welcome to the Aqua Store</span>
          <span className="ml-auto hidden items-center gap-3 sm:flex">
            <Link href="/docs/installation" className="hover:underline">
              Help
            </Link>
            <span className="text-[#c9ccd1]">|</span>
            <a
              href="https://github.com/igorfelipeduca"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Account
            </a>
            <span className="text-[#c9ccd1]">|</span>
            <span className="flex items-center gap-1">
              Cart <ShoppingCartIcon className="size-3.5" />
            </span>
          </span>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[200px_minmax(0,1fr)_210px]">
          <aside className="order-2 flex flex-col gap-3 lg:order-1">
            <StoreBox>
              <div className="flex flex-col gap-2 bg-[linear-gradient(180deg,#37598a_0%,#26456f_100%)] p-4">
                <h1 className="text-[24px] font-bold leading-none tracking-tight text-white [text-shadow:0_-1px_0_rgba(0,0,0,0.35)]">
                  Aqua Store
                </h1>
                <p className="font-mono text-[10px] text-white/80">
                  npx shadcn add @aqua
                </p>
                <div className="mt-1 flex items-center justify-between rounded-full bg-white px-3 py-1 text-[11px] text-[#7a8089] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                  Search Store
                  <kbd className="font-sans text-[10px] text-[#9aa0aa]">&#8984;K</kbd>
                </div>
              </div>
            </StoreBox>

            <StoreBox className="bg-[#f4f5f8]">
              <ul className="flex flex-col gap-0.5 p-3 text-[13px] font-bold">
                <li>
                  <Link href="/docs/button" className="text-[#1c5fb8] hover:underline">
                    Shop Components
                  </Link>
                </li>
                <li>
                  <Link href="/docs/ipod" className="text-[#1c5fb8] hover:underline">
                    Shop Signature
                  </Link>
                </li>
                <li>
                  <Link href="/demo/mail" className="text-[#1c5fb8] hover:underline">
                    Shop Demos
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-0.5 border-t border-[#d2d5da] p-3 text-[12px]">
                <li>
                  <Link href="/docs/introduction" className="text-[#1c5fb8] hover:underline">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="/docs/installation" className="text-[#1c5fb8] hover:underline">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="/docs/theming" className="text-[#1c5fb8] hover:underline">
                    Theming
                  </Link>
                </li>
                <li>
                  <a href="/llms.txt" className="text-[#1c5fb8] hover:underline">
                    For AI Agents
                  </a>
                </li>
              </ul>
            </StoreBox>

            <StoreBox>
              <StoreHeader>Popular Components</StoreHeader>
              <p className="border-b border-[#e0e3e8] bg-[#eceef2] px-3 py-1 text-[11px] font-bold text-[#43484f]">
                For Forms
              </p>
              <ul className="py-1.5">
                {FORM_PICKS.map((item) => (
                  <SideLink key={item.slug} {...item} />
                ))}
              </ul>
              <p className="border-y border-[#e0e3e8] bg-[#eceef2] px-3 py-1 text-[11px] font-bold text-[#43484f]">
                For Feedback
              </p>
              <ul className="py-1.5">
                {FEEDBACK_PICKS.map((item) => (
                  <SideLink key={item.slug} {...item} />
                ))}
              </ul>
            </StoreBox>
          </aside>

          <main className="order-1 flex min-w-0 flex-col gap-3 lg:order-2">
            <StoreBox>
              <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-[#e5e7eb]">
                <ProductCell title="iPod" slug="ipod" price="From $0" tall>
                  <div className="h-[142px] w-[100px] shrink-0">
                    <IPod className="origin-top-left scale-[0.34] shadow-[0_0_0_1px_rgba(20,30,50,0.12),0_10px_25px_rgba(20,30,50,0.2)]">
                      <IPodScreen>
                        <IPodHeader>iPod</IPodHeader>
                        <ul className="text-[12px] font-semibold text-[#2c3e58]">
                          <li className="bg-[linear-gradient(180deg,#7db9f5_0%,#3c86e4_50%,#2668c4_51%,#5da3ef_100%)] px-2 py-0.5 text-white">
                            Music
                          </li>
                          <li className="px-2 py-0.5">Photos</li>
                          <li className="px-2 py-0.5">Extras</li>
                          <li className="px-2 py-0.5">Settings</li>
                        </ul>
                      </IPodScreen>
                      <ClickWheel />
                    </IPod>
                  </div>
                </ProductCell>
                <ProductCell title="Window" slug="window" price="Just $0" tall>
                  <Window className="w-[185px]">
                    <WindowTitlebar>
                      <TrafficLights />
                      <WindowTitle>Aqua</WindowTitle>
                    </WindowTitlebar>
                    <WindowContent className="px-3 py-4 text-center text-[11px]">
                      Pinstripes included.
                    </WindowContent>
                  </Window>
                </ProductCell>
                <ProductCell title="Dock" slug="dock" price="Now $0" tall>
                  <Dock className="gap-2.5 px-3.5 pb-2 pt-2.5">
                    <DockItem label="Finder">
                      <DockIcon className="size-9 rounded-[9px] text-sm">A</DockIcon>
                    </DockItem>
                    <DockItem label="Mail">
                      <DockIcon className="size-9 rounded-[9px] bg-[linear-gradient(180deg,#b8f2a2_0%,#6cc94a_55%,#4aa82e_100%)] text-sm">
                        Q
                      </DockIcon>
                    </DockItem>
                    <DockItem label="iTunes">
                      <DockIcon className="size-9 rounded-[9px] bg-[linear-gradient(180deg,#fbd58e_0%,#f2a83e_55%,#e08c1d_100%)] text-sm">
                        U
                      </DockIcon>
                    </DockItem>
                  </Dock>
                </ProductCell>
                <ProductCell title="Chat Bubble" slug="chat-bubble" price="From $0" tall>
                  <ChatPanel className="w-[170px] gap-1.5 p-3 text-[12px]">
                    <ChatBubble className="px-3 py-1.5 text-[12px]">
                      we&apos;re so back
                    </ChatBubble>
                    <ChatBubble from="them" className="px-3 py-1.5 text-[12px]">
                      aqua never left
                    </ChatBubble>
                  </ChatPanel>
                </ProductCell>
              </div>

              <div className="grid grid-cols-2 border-t border-[#e5e7eb] sm:grid-cols-3 md:grid-cols-5 md:divide-x md:divide-[#e5e7eb]">
                <ProductCell title="Button" slug="button" price="Free">
                  <Button size="sm">Buy Now</Button>
                </ProductCell>
                <ProductCell title="Switch" slug="switch" price="Free">
                  <Switch defaultChecked />
                </ProductCell>
                <ProductCell title="Slider" slug="slider" price="From $0">
                  <Slider defaultValue={[60]} max={100} className="w-24" />
                </ProductCell>
                <ProductCell title="Progress" slug="progress" price="From $0">
                  <Progress value={65} className="w-24" />
                </ProductCell>
                <ProductCell title="Avatar" slug="avatar" price="Just $0">
                  <Avatar initials="SJ" shape="circle" />
                </ProductCell>
              </div>
            </StoreBox>

            <div className="grid gap-3 md:grid-cols-3">
              <StoreBox className="flex flex-col items-center gap-2 bg-[linear-gradient(180deg,#fafbfc_0%,#e9edf2_100%)] p-6 text-center">
                <h2 className="text-[21px] font-bold leading-tight tracking-tight text-[#23272e]">
                  The new Toast
                </h2>
                <p className="text-[12px] text-[#5a6069]">
                  A little Growl for everyone.
                </p>
                <div className="mt-auto flex flex-col items-center gap-2 pt-3">
                  <ToastPromoButton />
                  <span className="text-[11px] text-[#7a8089]">From $0</span>
                </div>
              </StoreBox>

              <StoreBox className="flex flex-col items-center gap-2 bg-[linear-gradient(180deg,#fafbfc_0%,#e9edf2_100%)] p-6 text-center">
                <h2 className="text-[21px] font-bold leading-tight tracking-tight text-[#23272e]">
                  Agent Gifts
                </h2>
                <p className="text-[12px] text-[#5a6069]">
                  Give your coding agent the ultimate context: every component,
                  one llms.txt.
                </p>
                <div className="mt-auto flex flex-col items-center gap-2 pt-3">
                  <Button asChild variant="secondary" size="sm">
                    <a href="/llms.txt">Learn more &#9656;</a>
                  </Button>
                  <span className="text-[11px] text-[#7a8089]">
                    Special pricing available.
                  </span>
                </div>
              </StoreBox>

              <StoreBox className="flex flex-col items-start gap-2 border-[#1a1a1a] bg-[linear-gradient(180deg,#2b2b2b_0%,#000000_100%)] p-6">
                <h2 className="text-[21px] font-bold leading-tight tracking-tight text-white">
                  Say hello to Cursor.
                </h2>
                <div className="flex w-full items-center justify-between gap-3">
                  <div className="flex flex-col gap-1 text-[12px] text-white/70">
                    <span>Now $0</span>
                    <span>Ships within 24 hours.</span>
                  </div>
                  <svg viewBox="0 0 20 22" aria-hidden="true" className="h-12 w-11">
                    <path
                      d="M5.9 2.5 L5.9 17.5 L9.5 14.1 L11.9 19.6 L14.5 18.4 L12.1 13 L17.1 13 Z"
                      fill="#fff"
                      stroke="#000"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="mt-auto pt-3">
                  <Button asChild variant="secondary" size="sm">
                    <Link href="/docs/cursor">Buy now &#9656;</Link>
                  </Button>
                </div>
              </StoreBox>
            </div>

            <StoreBox>
              <StoreHeader>Staff Picks</StoreHeader>
              <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-[#e5e7eb]">
                <div className="flex flex-col items-center gap-3 px-4 py-5">
                  <Link
                    href="/docs/badge"
                    className="text-[12px] font-bold text-[#1c5fb8] hover:underline"
                  >
                    Aqua Badge
                  </Link>
                  <div className="flex flex-col items-center gap-1.5">
                    <Badge>New</Badge>
                    <Badge variant="destructive">Sale</Badge>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 px-4 py-5">
                  <Link
                    href="/docs/tooltip"
                    className="text-[12px] font-bold text-[#1c5fb8] hover:underline"
                  >
                    Aqua Tooltip
                  </Link>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary" size="sm">
                        hover me
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Add to cart</TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex flex-col items-center gap-3 px-4 py-5">
                  <Link
                    href="/docs/loader"
                    className="text-[12px] font-bold text-[#1c5fb8] hover:underline"
                  >
                    Aqua Loader
                  </Link>
                  <div className="flex items-center gap-2 text-[11px] text-[#7a8089]">
                    <Loader className="size-4" />
                    Checking stock&hellip;
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 px-4 py-5">
                  <Link
                    href="/docs/checkbox"
                    className="text-[12px] font-bold text-[#1c5fb8] hover:underline"
                  >
                    Aqua Checkbox
                  </Link>
                  <label className="flex items-center gap-2 text-[11px] text-[#43484f]">
                    <Checkbox defaultChecked /> Gift wrap
                  </label>
                </div>
              </div>
            </StoreBox>
          </main>

          <aside className="order-3 flex flex-col gap-3">
            <StoreBox>
              <StoreHeader>New to the Store</StoreHeader>
              <ul className="py-1.5">
                {NEW_TO_STORE.map((item) => (
                  <SideLink key={item.slug} {...item} />
                ))}
              </ul>
            </StoreBox>

            <StoreBox>
              <StoreHeader>Top Sellers</StoreHeader>
              <p className="border-b border-[#e0e3e8] bg-[#eceef2] px-3 py-1 text-[11px] font-bold text-[#43484f]">
                Core
              </p>
              <ol className="list-decimal py-1.5 pl-8 pr-3 text-[12px] text-[#5a6069]">
                {TOP_SELLERS_CORE.map((slug) => (
                  <li key={slug} className="py-[2px] pl-1">
                    <Link
                      href={`/docs/${slug}`}
                      className="text-[#1c5fb8] hover:underline"
                    >
                      {SLUG_TITLES[slug]}
                    </Link>
                  </li>
                ))}
              </ol>
              <p className="border-y border-[#e0e3e8] bg-[#eceef2] px-3 py-1 text-[11px] font-bold text-[#43484f]">
                Signature
              </p>
              <ol className="list-decimal py-1.5 pl-8 pr-3 text-[12px] text-[#5a6069]">
                {TOP_SELLERS_SIGNATURE.map((slug) => (
                  <li key={slug} className="py-[2px] pl-1">
                    <Link
                      href={`/docs/${slug}`}
                      className="text-[#1c5fb8] hover:underline"
                    >
                      {SLUG_TITLES[slug]}
                    </Link>
                  </li>
                ))}
              </ol>
            </StoreBox>
          </aside>
        </div>

        <footer className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#d2d5da] pt-3 text-[11px] text-[#7a8089]">
          <span>
            All components ship free, as open code, via npx shadcn. A tribute
            to the 2007 Apple Store &mdash; no affiliation with Apple.
          </span>
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
            </a>{" "}
            &middot; &copy; 2026
          </span>
        </footer>
      </div>
    </div>
  )
}
