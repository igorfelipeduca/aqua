"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "size-[18px] shrink-0 rounded-[5px] border border-[#9599a1] bg-[linear-gradient(180deg,#ffffff_0%,#e8ebef_55%,#dcdfe4_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(20,30,50,0.2)] outline-none transition-[filter] hover:brightness-103 focus-visible:ring-[3px] focus-visible:ring-[#6cb0f7]/70 active:brightness-95 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#1c5fb8] data-[state=checked]:bg-[linear-gradient(180deg,#a8d0f7_0%,#4a90ec_50%,#2a6fd0_51%,#6aabf3_100%)] data-[state=checked]:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(20,60,130,0.35)]",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-white [filter:drop-shadow(0_-1px_1px_rgba(10,40,90,0.4))]"
      >
        <CheckIcon className="size-3.5" strokeWidth={3.5} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
