import * as React from "react"

import { cn } from "@/lib/utils"

function Window({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="window"
      className={cn(
        "overflow-hidden rounded-[10px] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,rgba(0,0,0,0.03)_1px,rgba(0,0,0,0.03)_2px),linear-gradient(180deg,#d9dbde_0%,#c3c6ca_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_0_0_1px_rgba(40,45,55,0.35),0_18px_40px_rgba(30,40,60,0.3),0_4px_10px_rgba(30,40,60,0.2)]",
        className
      )}
      {...props}
    />
  )
}

function WindowTitlebar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="window-titlebar"
      className={cn("relative flex h-[34px] items-center px-3", className)}
      {...props}
    />
  )
}

function WindowTitle({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="window-title"
      className={cn(
        "pointer-events-none absolute inset-x-0 text-center text-[13px] font-semibold text-[#43484f] [text-shadow:0_1px_0_rgba(255,255,255,0.6)]",
        className
      )}
      {...props}
    />
  )
}

const LIGHT_TINTS = {
  red: "border-[#c93a2b] bg-[radial-gradient(circle_at_50%_30%,#ff8a80,#ec4c3c_70%)]",
  yellow: "border-[#cf9325] bg-[radial-gradient(circle_at_50%_30%,#ffe082,#f5b731_70%)]",
  green: "border-[#43a12f] bg-[radial-gradient(circle_at_50%_30%,#b9f6a5,#56c93f_70%)]",
} as const

function TrafficLights({ className, ...props }: React.ComponentProps<"div">) {
  const lights = Object.keys(LIGHT_TINTS) as Array<keyof typeof LIGHT_TINTS>

  return (
    <div
      data-slot="traffic-lights"
      className={cn("z-10 flex gap-2", className)}
      {...props}
    >
      {lights.map((tint) => (
        <span
          key={tint}
          className={cn(
            "relative size-[13px] rounded-full border shadow-[inset_0_1px_2px_rgba(0,0,0,0.25),0_1px_0_rgba(255,255,255,0.5)] after:absolute after:left-[3px] after:right-[3px] after:top-px after:h-[5px] after:rounded-full after:bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.15))] after:content-['']",
            LIGHT_TINTS[tint]
          )}
        />
      ))}
    </div>
  )
}

function WindowContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="window-content"
      className={cn("bg-[#f4f5f8] text-[13px] text-[#33383f]", className)}
      {...props}
    />
  )
}

export { Window, WindowTitlebar, WindowTitle, WindowContent, TrafficLights }
