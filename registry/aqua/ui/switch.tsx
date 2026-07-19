"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "inline-flex h-[24px] w-[44px] shrink-0 items-center rounded-full border border-[#8b909a] bg-[linear-gradient(180deg,#c9ccd1_0%,#dfe2e6_60%,#eceef2_100%)] shadow-[inset_0_2px_3px_rgba(20,30,50,0.25)] outline-none transition-[background,filter] focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[var(--aqua-edge,#1c5fb8)] data-[state=checked]:bg-[linear-gradient(180deg,var(--aqua-gel-deep,#2a6fd0)_0%,var(--aqua-gel-mid,#4a90ec)_55%,var(--aqua-gel-hi,#a8d0f7)_100%)] data-[state=checked]:shadow-[inset_0_2px_3px_rgba(10,40,90,0.35)]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-[20px] translate-x-px rounded-full border border-[#8b909a] bg-[radial-gradient(circle_at_50%_30%,#ffffff,#d5d9df_70%,#c3c8cf_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(20,30,50,0.35)] transition-transform data-[state=checked]:translate-x-[21px]"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
