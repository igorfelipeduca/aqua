"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { Button } from "@/registry/aqua/ui/button"
import { ChatBubble } from "@/registry/aqua/ui/chat-bubble"
import { Input } from "@/registry/aqua/ui/input"
import {
  TrafficLights,
  Window,
  WindowTitle,
  WindowTitlebar,
} from "@/registry/aqua/ui/window"

type Message = {
  id: number
  from: "me" | "them"
  text: string
}

const OPENING: Message[] = [
  { id: 1, from: "me", text: "so you built a whole UI kit out of my design language" },
  { id: 2, from: "them", text: "yeah. it installs with one command" },
  { id: 3, from: "me", text: "show me something worth shipping" },
]

const STEVE_REPLIES = [
  "Simplify. Then simplify again.",
  "That's shipping this week, right?",
  "Focus means saying no.",
  "Details matter. That gloss is 1px too low. Fix it.",
  "People don't know what they want until you show them.",
  "Real artists ship.",
  "One more thing...",
]

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>(OPENING)
  const [draft, setDraft] = useState("")
  const [typing, setTyping] = useState(false)
  const replyIndex = useRef(0)
  const nextId = useRef(OPENING.length + 1)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, typing])

  const send = () => {
    const text = draft.trim()
    if (!text || typing) return
    setDraft("")
    setMessages((prev) => [...prev, { id: nextId.current++, from: "them", text }])
    setTyping(true)
    const reply = STEVE_REPLIES[replyIndex.current % STEVE_REPLIES.length]
    replyIndex.current += 1
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, from: "me", text: reply },
      ])
      setTyping(false)
    }, 1100)
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-4 py-10">
      <Window className="flex h-[560px] w-full max-w-lg flex-col">
        <WindowTitlebar>
          <TrafficLights />
          <WindowTitle>sjobs &mdash; Instant Message</WindowTitle>
        </WindowTitlebar>
        <div className="flex min-h-0 flex-1 flex-col border-t border-[#8b909a] bg-[#f4f5f8] [--chat-panel:#f4f5f8]">
          <div
            ref={scrollRef}
            className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto p-5"
          >
            {messages.map((message) => (
              <ChatBubble key={message.id} from={message.from}>
                {message.text}
              </ChatBubble>
            ))}
            {typing ? (
              <ChatBubble from="me" className="text-[#4a6285]">
                &hellip;
              </ChatBubble>
            ) : null}
          </div>
          <div className="flex items-center gap-2.5 border-t border-[#c9ccd1] bg-[linear-gradient(180deg,#fbfcfd_0%,#e8ebef_100%)] p-3">
            <Input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") send()
              }}
              placeholder="Type a message"
              className="h-8 rounded-full"
            />
            <Button size="sm" onClick={send} disabled={!draft.trim() || typing}>
              Send
            </Button>
          </div>
        </div>
      </Window>
      <p className="text-xs text-muted-foreground">
        Built from @aqua registry components.{" "}
        <Link href="/docs/chat-bubble" className="text-[#1c5fb8] hover:underline">
          See the chat bubble docs
        </Link>
      </p>
    </div>
  )
}
