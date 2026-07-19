import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function ChatPanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="chat-panel"
      className={cn(
        "flex w-full flex-col gap-2.5 overflow-hidden rounded-xl border border-[#c9ccd1] bg-[#f4f5f8] p-5 [--chat-panel:#f4f5f8]",
        className
      )}
      {...props}
    />
  )
}

const chatBubbleVariants = cva(
  "relative w-fit max-w-[85%] rounded-[18px] px-4 py-2.5 text-[15px] leading-[1.35] before:absolute before:top-0 before:bottom-[-2px] before:w-5 before:content-[''] after:absolute after:top-0 after:bottom-[-2px] after:w-[26px] after:bg-[var(--chat-panel,#f4f5f8)] after:content-['']",
  {
    variants: {
      from: {
        me: "self-start bg-[linear-gradient(180deg,#e4f1fd_0%,#b8d8f7_55%,#8dbdf0_100%)] text-[#1a2a44] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(30,60,110,0.18)] before:left-[-7px] before:rounded-tl-[18px] before:rounded-br-[16px_14px] before:bg-[linear-gradient(180deg,#e4f1fd_0%,#b8d8f7_55%,#8dbdf0_100%)] after:left-[-26px] after:rounded-br-[10px]",
        them: "self-end bg-[linear-gradient(180deg,#fde8d2_0%,#f8c99a_55%,#f2ae6e_100%)] text-[#4a2a10] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(120,70,20,0.18)] before:right-[-7px] before:rounded-tr-[18px] before:rounded-bl-[16px_14px] before:bg-[linear-gradient(180deg,#fde8d2_0%,#f8c99a_55%,#f2ae6e_100%)] after:right-[-26px] after:rounded-bl-[10px]",
      },
    },
    defaultVariants: {
      from: "me",
    },
  }
)

function ChatBubble({
  className,
  from,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof chatBubbleVariants>) {
  return (
    <div
      data-slot="chat-bubble"
      className={cn(chatBubbleVariants({ from, className }))}
      {...props}
    />
  )
}

export { ChatPanel, ChatBubble, chatBubbleVariants }
