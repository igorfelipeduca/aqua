"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-3.5 w-full overflow-hidden rounded-full bg-[#d7dbe2] shadow-[inset_0_1px_3px_rgba(0,0,0,0.25)]",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full rounded-full bg-[linear-gradient(180deg,#a5d0fa_0%,#4a95ef_50%,#2f7de0_55%,#6fb4f7_100%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] transition-transform duration-300 after:absolute after:inset-0 after:animate-[aqua-progress-stripes_0.8s_linear_infinite] after:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_7px,transparent_7px,transparent_14px)] after:content-[''] motion-reduce:after:animate-none"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
