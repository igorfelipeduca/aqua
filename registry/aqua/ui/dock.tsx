import * as React from "react"

import { cn } from "@/lib/utils"

function Dock({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dock"
      className={cn(
        "flex w-fit items-end gap-[18px] rounded-[22px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(235,238,243,0.75)_100%)] px-[26px] pb-2.5 pt-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_0_0_1px_rgba(20,40,80,0.08),0_16px_38px_rgba(30,40,60,0.18)]",
        className
      )}
      {...props}
    />
  )
}

function DockItem({
  label,
  active = false,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  label?: string
  active?: boolean
}) {
  return (
    <div
      data-slot="dock-item"
      className={cn(
        "group relative flex flex-col items-center gap-[5px] transition-transform duration-200 ease-out hover:-translate-y-2.5 hover:scale-[1.12] motion-reduce:transition-none motion-reduce:hover:transform-none",
        className
      )}
      {...props}
    >
      {label ? (
        <span className="pointer-events-none absolute -top-[30px] whitespace-nowrap text-[13px] font-semibold text-white opacity-0 transition-opacity [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_0_5px_rgba(0,0,0,0.65),0_0_10px_rgba(0,0,0,0.45)] group-hover:opacity-100">
          {label}
        </span>
      ) : null}
      {children}
      <span
        className={cn(
          "size-[4px] rounded-full bg-[#5a6270]",
          active ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  )
}

function DockIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dock-icon"
      className={cn(
        "relative flex size-[58px] items-center justify-center overflow-hidden rounded-[14px] bg-[linear-gradient(180deg,#8ec2f9_0%,#4a90ec_55%,#2f7de0_100%)] text-[26px] font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_3px_8px_rgba(20,30,50,0.25)] before:absolute before:inset-x-[8%] before:top-[4%] before:h-[45%] before:rounded-[12px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0.1))] before:content-[''] [text-shadow:0_-1px_1px_rgba(0,0,0,0.3)]",
        className
      )}
      {...props}
    />
  )
}

export { Dock, DockItem, DockIcon }
