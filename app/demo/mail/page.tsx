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
    subject: "One more thing",
    date: "Today, 9:41 AM",
    body: "We've been working on something really big. I can't say much yet, but let's just say the demo on Friday is going to be insanely great.\n\nKeep it quiet.\n\nSteve",
  },
  {
    from: "MobileMe",
    address: "noreply@me.com",
    subject: "Welcome to MobileMe",
    date: "Today, 8:12 AM",
    body: "Your me.com account is ready. Mail, contacts and calendars now sync between your Mac, iPhone and the web.\n\nExperience the cloud, before we call it that.",
  },
  {
    from: "iTunes Store",
    address: "store@itunes.com",
    subject: "Your receipt No. 118813",
    date: "Yesterday",
    body: "Thank you for your purchase.\n\n1x Album: In Rainbows — Radiohead ....... $9.99\n\nTotal: $9.99\n\nAvailable to play on up to 5 authorized computers.",
  },
  {
    from: "Ars Technica",
    address: "rss@arstechnica.com",
    subject: "Snow Leopard review: under the hood",
    date: "Yesterday",
    body: "No new features. That was the promise, and somehow it made everyone want it more. John Siracusa needs 23 pages to explain why.",
  },
]

const MAILBOXES = [
  { name: "Inbox", badge: 4, selected: true },
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
    <div className="flex min-h-svh flex-col items-center justify-center gap-5 px-4 py-10">
      <Window className="w-full max-w-4xl">
        <WindowTitlebar>
          <TrafficLights />
          <WindowTitle>Inbox (4 messages)</WindowTitle>
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

        <div className="flex h-[440px] border-t border-[#8b909a] bg-[#f4f5f8] text-[13px]">
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
            <div className="h-[190px] overflow-y-auto border-b border-[#b6bcc6]">
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
                <p className="text-[#7a8089]">To: Igor Duca &lt;user@duca.dev&gt;</p>
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
      </Window>

      <p className="text-xs text-muted-foreground">
        Built entirely from @aqua registry components.{" "}
        <Link href="/docs/introduction" className="text-[#1c5fb8] hover:underline">
          Read the docs
        </Link>
      </p>
    </div>
  )
}
