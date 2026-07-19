"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function IPod({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="ipod"
      className={cn(
        "flex w-[290px] shrink-0 flex-col items-center gap-6 rounded-[36px] bg-[linear-gradient(160deg,#ffffff_0%,#eceef2_55%,#d8dbe1_100%)] px-[22px] pb-[30px] pt-6 shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-4px_10px_rgba(20,30,50,0.08),0_0_0_1px_rgba(20,30,50,0.12),0_26px_55px_rgba(20,30,50,0.28),0_4px_10px_rgba(20,30,50,0.12)]",
        className
      )}
      {...props}
    />
  )
}

function IPodScreen({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="ipod-screen"
      className={cn(
        "w-full rounded-[10px] bg-[linear-gradient(180deg,#23262c,#3a3e46)] p-[7px] shadow-[inset_0_2px_5px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.8)]",
        className
      )}
      {...props}
    >
      <div className="overflow-hidden rounded-[5px] bg-[#f2f6fb] shadow-[inset_0_0_8px_rgba(40,70,120,0.15)]">
        {children}
      </div>
    </div>
  )
}

function IPodHeader({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="ipod-header"
      className={cn(
        "relative flex h-6 items-center justify-center border-b border-[#93a7c2] bg-[linear-gradient(180deg,#fdfefe_0%,#cfdcec_50%,#b6c9e0_100%)] text-[12px] font-bold text-[#2c3e58] [text-shadow:0_1px_0_rgba(255,255,255,0.7)]",
        className
      )}
      {...props}
    >
      {children}
      <span className="absolute right-2 h-[10px] w-5 rounded-[2px] border border-[#6b7f9c] bg-[linear-gradient(180deg,#d9f5c0,#7fce4f)] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] after:absolute after:right-[-3px] after:top-[2px] after:h-1 after:w-[2px] after:rounded-r-[1px] after:bg-[#6b7f9c] after:content-['']" />
    </div>
  )
}

const WHEEL_BUTTON =
  "absolute p-1.5 text-[11px] font-bold tracking-[0.06em] text-[#9aa0aa] outline-none transition-[filter] [text-shadow:0_1px_0_rgba(255,255,255,0.8)] hover:brightness-95 focus-visible:text-[#6b7f9c] active:brightness-90"

function ClickWheel({
  className,
  onMenu,
  onPrev,
  onNext,
  onPlayPause,
  onSelect,
  ...props
}: React.ComponentProps<"div"> & {
  onMenu?: () => void
  onPrev?: () => void
  onNext?: () => void
  onPlayPause?: () => void
  onSelect?: () => void
}) {
  return (
    <div
      data-slot="click-wheel"
      className={cn(
        "relative size-[188px] rounded-full bg-[radial-gradient(circle_at_50%_32%,#fcfdfe,#e2e5ea_62%,#d0d4db_100%)] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(20,30,50,0.12),0_1px_2px_rgba(20,30,50,0.1)]",
        className
      )}
      {...props}
    >
      <button
        type="button"
        onClick={onMenu}
        className={cn(WHEEL_BUTTON, "left-1/2 top-2 -translate-x-1/2")}
      >
        MENU
      </button>
      <button
        type="button"
        aria-label="Previous"
        onClick={onPrev}
        className={cn(WHEEL_BUTTON, "left-2 top-1/2 -translate-y-1/2")}
      >
        &#9668;&#9668;
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={onNext}
        className={cn(WHEEL_BUTTON, "right-2 top-1/2 -translate-y-1/2")}
      >
        &#9658;&#9658;
      </button>
      <button
        type="button"
        aria-label="Play or pause"
        onClick={onPlayPause}
        className={cn(WHEEL_BUTTON, "bottom-2 left-1/2 -translate-x-1/2")}
      >
        &#9658;&#10073;&#10073;
      </button>
      <button
        type="button"
        aria-label="Select"
        onClick={onSelect}
        className="absolute left-1/2 top-1/2 size-[72px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_35%,#f7f8fa,#dcdfe5_70%,#ced2d9_100%)] shadow-[inset_0_2px_5px_rgba(20,30,50,0.18),0_1px_0_rgba(255,255,255,0.9)] outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 active:shadow-[inset_0_3px_7px_rgba(20,30,50,0.28),0_1px_0_rgba(255,255,255,0.9)]"
      />
    </div>
  )
}

export { IPod, IPodScreen, IPodHeader, ClickWheel }
