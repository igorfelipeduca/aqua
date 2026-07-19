"use client"

import { useState } from "react"
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

  const message = MESSAGES[selected]
  const paragraphs = message.body.split("\n\n")

  return (
    <div className="flex h-svh flex-col">
      <Window className="flex h-full w-full flex-col rounded-none shadow-none">
        <WindowTitlebar>
          <TrafficLights />
          <WindowTitle>Inbox (5 messages)</WindowTitle>
        </WindowTitlebar>

        <div className="flex items-center gap-2.5 px-4 pb-3 pt-0.5">
          <Button variant="secondary" size="sm">
            Get Mail
          </Button>
          <Button variant="secondary" size="sm">
            New Message
          </Button>
          <Button variant="secondary" size="sm">
            Reply
          </Button>
          <Button variant="secondary" size="sm">
            Delete
          </Button>
          <Input placeholder="Search" className="ml-auto h-7 max-w-44 rounded-full" />
        </div>

        <div className="flex min-h-0 flex-1 border-t border-[#8b909a] bg-[#f4f5f8] text-[13px]">
          <aside className="w-44 shrink-0 overflow-y-auto border-r border-[#b6bcc6] bg-[#dde4ed] py-3">
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
                <span className="w-36 shrink-0">From</span>
                <span className="flex-1">Subject</span>
                <span className="w-28 shrink-0 text-right">Date Received</span>
              </div>
              {MESSAGES.map((msg, i) => {
                const rowTint = i % 2 === 0 ? "bg-white" : "bg-[#f0f4fa]"

                return (
                  <button
                    key={msg.subject}
                    type="button"
                    onClick={() => setSelected(i)}
                    className={
                      i === selected
                        ? "flex w-full bg-[linear-gradient(180deg,#7db9f5_0%,#3c86e4_50%,#2668c4_51%,#5da3ef_100%)] px-3 py-1.5 text-left text-white [text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]"
                        : `flex w-full ${rowTint} px-3 py-1.5 text-left text-[#33383f] hover:bg-[#e7f0fb]`
                    }
                  >
                    <span className="w-36 shrink-0 truncate font-semibold">
                      {msg.from}
                    </span>
                    <span className="flex-1 truncate">{msg.subject}</span>
                    <span className="w-28 shrink-0 text-right text-[12px] opacity-80">
                      {msg.date}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="flex-1 overflow-y-auto bg-white">
              <div className="border-b border-[#dcdfe4] px-5 py-3">
                <p className="text-[15px] font-bold">{message.subject}</p>
                <p className="text-[#7a8089]">
                  {message.from} &lt;{message.address}&gt;
                </p>
                <p className="text-[#7a8089]">To: Igor Duca &lt;igor@duca.dev&gt;</p>
              </div>
              <div className="flex flex-col gap-3 px-5 py-4 leading-6">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
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
