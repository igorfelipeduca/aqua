"use client"

import { useRef, useState } from "react"
import Link from "next/link"

import { Button } from "@/registry/aqua/ui/button"
import { Input } from "@/registry/aqua/ui/input"
import {
  TrafficLights,
  Window,
  WindowTitle,
  WindowTitlebar,
} from "@/registry/aqua/ui/window"

const MESSAGES = [
  {
    from: "Steve Jobs",
    address: "sjobs@apple.com",
    subject: "Re: Aqua, my shadcn registry",
    date: "Today, 9:41 AM",
    body: "Igor,\n\nSaw the registry. When we designed Aqua we wanted buttons you'd want to lick. Yours pass the test.\n\nThe first tabs were wrong. Folder tabs are a Windows thing. You fixed it before I had to call. Good.\n\nSteve",
  },
  {
    from: "Steve Jobs",
    address: "sjobs@apple.com",
    subject: "One more thing",
    date: "Today, 8:12 AM",
    body: "The Dock magnification on hover. The label. The little running dot.\n\nThat's the kind of detail people don't notice consciously, but they feel it.\n\nDon't ship anything that doesn't have that.\n\nSteve\n\nSent from my iPhone",
  },
  {
    from: "Steve Jobs",
    address: "sjobs@apple.com",
    subject: "Re: can I show you the striped progress bar?",
    date: "Yesterday",
    body: "No need. If the stripes don't march, it's broken. If they march under prefers-reduced-motion, it's also broken.\n\nI assume you got both right.\n\nSteve",
  },
  {
    from: "Steve Jobs",
    address: "sjobs@apple.com",
    subject: "Re: pricing the UI kit",
    date: "Yesterday",
    body: "Free. Open code.\n\nYou're not selling components, you're selling taste. The components are the demo.\n\nReal artists ship.\n\nSteve\n\nSent from my iPhone",
  },
  {
    from: "Steve Jobs",
    address: "sjobs@apple.com",
    subject: "Focus",
    date: "Monday",
    body: "You asked what to build next. Wrong question.\n\nDeciding what not to do is as important as deciding what to do. Ship the twelve components you have. Deploy the site. Then we talk.\n\nSteve",
  },
]

const MAILBOXES = [
  { name: "Inbox", badge: 5, selected: true },
  { name: "Sent", badge: 0, selected: false },
  { name: "Drafts", badge: 1, selected: false },
  { name: "Junk", badge: 0, selected: false },
  { name: "Trash", badge: 0, selected: false },
]

export default function MailDemo() {
  const [selected, setSelected] = useState(0)
  const [query, setQuery] = useState("")
  const [composing, setComposing] = useState(false)
  const [composePos, setComposePos] = useState({ x: 0, y: 0 })
  const dragRef = useRef<{
    startX: number
    startY: number
    baseX: number
    baseY: number
  } | null>(null)

  const openCompose = () => {
    setComposePos({ x: 0, y: 0 })
    setComposing(true)
  }

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      baseX: composePos.x,
      baseY: composePos.y,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag) return
    setComposePos({
      x: drag.baseX + event.clientX - drag.startX,
      y: drag.baseY + event.clientY - drag.startY,
    })
  }

  const endDrag = () => {
    dragRef.current = null
  }

  const needle = query.trim().toLowerCase()
  const visible = MESSAGES.map((msg, index) => ({ msg, index })).filter(
    ({ msg }) =>
      needle === "" ||
      `${msg.from} ${msg.subject} ${msg.body}`.toLowerCase().includes(needle)
  )
  const selectedVisible = visible.some(({ index }) => index === selected)
  const shownEntry = selectedVisible
    ? { msg: MESSAGES[selected], index: selected }
    : visible[0]
  const paragraphs = shownEntry ? shownEntry.msg.body.split("\n\n") : []

  return (
    <div className="flex h-svh flex-col">
      <Window className="flex h-full w-full flex-col rounded-none shadow-none">
        <WindowTitlebar>
          <TrafficLights />
          <WindowTitle>Inbox (5 messages)</WindowTitle>
        </WindowTitlebar>

        <div className="flex items-center gap-2.5 px-4 pb-3 pt-0.5">
          <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
            Get Mail
          </Button>
          <Button variant="secondary" size="sm" onClick={openCompose}>
            New Message
          </Button>
          <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
            Reply
          </Button>
          <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
            Delete
          </Button>
          <Input
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="ml-auto h-7 max-w-32 rounded-full sm:max-w-44"
          />
        </div>

        <div className="flex min-h-0 flex-1 border-t border-[#8b909a] bg-[#f4f5f8] text-[13px]">
          <aside className="hidden w-44 shrink-0 overflow-y-auto border-r border-[#b6bcc6] bg-[#dde4ed] py-3 sm:block">
            <p className="px-4 pb-1 text-[11px] font-bold uppercase tracking-wide text-[#7a8089] [text-shadow:0_1px_0_rgba(255,255,255,0.7)]">
              Mailboxes
            </p>
            <ul>
              {MAILBOXES.map((box) => (
                <li key={box.name}>
                  <button
                    type="button"
                    className={
                      box.selected
                        ? "flex w-full items-center justify-between bg-[linear-gradient(180deg,#7db9f5_0%,#3c86e4_50%,#2668c4_51%,#5da3ef_100%)] px-4 py-1 font-semibold text-white [text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]"
                        : "flex w-full items-center justify-between px-4 py-1 text-[#3a3f47] hover:bg-white/60"
                    }
                  >
                    {box.name}
                    {box.badge > 0 ? (
                      <span
                        className={
                          box.selected
                            ? "rounded-full bg-white/90 px-2 text-[11px] font-bold text-[#2668c4]"
                            : "rounded-full bg-[#8fa3b8] px-2 text-[11px] font-bold text-white"
                        }
                      >
                        {box.badge}
                      </span>
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="h-[38%] min-h-[150px] overflow-y-auto border-b border-[#b6bcc6]">
              <div className="sticky top-0 flex border-b border-[#9599a1] bg-[linear-gradient(180deg,#fbfcfd_0%,#e8ebef_55%,#dcdfe4_100%)] px-3 py-1 text-[11px] font-bold text-[#43484f] [text-shadow:0_1px_0_rgba(255,255,255,0.7)]">
                <span className="w-24 shrink-0 sm:w-36">From</span>
                <span className="flex-1">Subject</span>
                <span className="hidden w-28 shrink-0 text-right sm:block">
                  Date Received
                </span>
              </div>
              {visible.map(({ msg, index }, i) => {
                const rowTint = i % 2 === 0 ? "bg-white" : "bg-[#f0f4fa]"

                return (
                  <button
                    key={msg.subject}
                    type="button"
                    onClick={() => setSelected(index)}
                    className={
                      shownEntry && index === shownEntry.index
                        ? "flex w-full bg-[linear-gradient(180deg,#7db9f5_0%,#3c86e4_50%,#2668c4_51%,#5da3ef_100%)] px-3 py-1.5 text-left text-white [text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]"
                        : `flex w-full ${rowTint} px-3 py-1.5 text-left text-[#33383f] hover:bg-[#e7f0fb]`
                    }
                  >
                    <span className="w-24 shrink-0 truncate font-semibold sm:w-36">
                      {msg.from}
                    </span>
                    <span className="flex-1 truncate">{msg.subject}</span>
                    <span className="hidden w-28 shrink-0 text-right text-[12px] opacity-80 sm:block">
                      {msg.date}
                    </span>
                  </button>
                )
              })}
              {visible.length === 0 ? (
                <p className="px-3 py-6 text-center text-[#7a8089]">
                  No messages found for &ldquo;{query}&rdquo;
                </p>
              ) : null}
            </div>

            <div className="flex-1 overflow-y-auto bg-white">
              {shownEntry ? (
                <>
                  <div className="border-b border-[#dcdfe4] px-5 py-3">
                    <p className="text-[15px] font-bold">
                      {shownEntry.msg.subject}
                    </p>
                    <p className="text-[#7a8089]">
                      {shownEntry.msg.from} &lt;{shownEntry.msg.address}&gt;
                    </p>
                    <p className="text-[#7a8089]">
                      To: Igor Duca &lt;igor@duca.dev&gt;
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 px-5 py-4 leading-6">
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph} className="whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </>
              ) : (
                <p className="px-5 py-10 text-center text-[#7a8089]">
                  No message selected
                </p>
              )}
            </div>
          </div>
        </div>
        {composing ? (
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-6">
            <Window
              className="pointer-events-auto w-full max-w-lg"
              style={{
                transform: `translate(${composePos.x}px, ${composePos.y}px)`,
              }}
            >
              <WindowTitlebar
                className="cursor-move touch-none select-none"
                onPointerDown={startDrag}
                onPointerMove={moveDrag}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
              >
                <button
                  type="button"
                  aria-label="Close"
                  className="z-10 transition-[filter] hover:brightness-90"
                  onClick={() => setComposing(false)}
                >
                  <TrafficLights />
                </button>
                <WindowTitle>New Message</WindowTitle>
              </WindowTitlebar>
              <div className="flex flex-col gap-2.5 bg-[#f4f5f8] p-4 text-[13px]">
                <label className="flex items-center gap-2">
                  <span className="w-14 text-right text-[#7a8089]">To:</span>
                  <Input defaultValue="sjobs@apple.com" className="h-7" />
                </label>
                <label className="flex items-center gap-2">
                  <span className="w-14 text-right text-[#7a8089]">Subject:</span>
                  <Input defaultValue="Re: Focus" className="h-7" />
                </label>
                <textarea
                  rows={9}
                  defaultValue={
                    "Steve,\n\nTwelve components shipped. Site deployed next.\n\nIgor"
                  }
                  className="resize-none rounded-lg border border-[#9599a1] bg-white px-3 py-2 shadow-[inset_0_2px_3px_rgba(20,30,50,0.15)] outline-none focus-visible:border-[#6cb0f7] focus-visible:ring-[3px] focus-visible:ring-[#6cb0f7]/70"
                />
                <div className="flex justify-end gap-2.5">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setComposing(false)}
                  >
                    Cancel
                  </Button>
                  <Button size="sm" onClick={() => setComposing(false)}>
                    Send
                  </Button>
                </div>
              </div>
            </Window>
          </div>
        ) : null}

        <div className="flex items-center justify-between border-t border-[#b6bcc6] bg-[#dde4ed] px-4 py-1 text-[11px] text-[#7a8089]">
          <span>Built entirely from @aqua registry components.</span>
          <Link href="/docs/introduction" className="text-[#1c5fb8] hover:underline">
            Read the docs
          </Link>
        </div>
      </Window>
    </div>
  )
}
