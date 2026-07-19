"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("relative z-10 -mb-px flex items-end gap-1 px-3", className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "rounded-t-lg border border-b-0 border-[#9599a1] bg-[linear-gradient(180deg,#f2f3f5_0%,#d8dade_55%,#c9ccd1_100%)] px-[22px] pb-2 pt-[7px] text-[13px] text-[#43484f] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition-[filter] [text-shadow:0_1px_0_rgba(255,255,255,0.7)] hover:brightness-103 focus-visible:ring-[3px] focus-visible:ring-[#6cb0f7]/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-[#1c5fb8] data-[state=active]:bg-[linear-gradient(180deg,#a8d0f7_0%,#4a90ec_50%,#2a6fd0_51%,#6aabf3_100%)] data-[state=active]:text-white data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] data-[state=active]:[text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "rounded-md border border-[#a9adb5] bg-[repeating-linear-gradient(180deg,#f4f6fa_0px,#f4f6fa_2px,#eaeef4_2px,#eaeef4_4px)] p-6 shadow-[inset_0_1px_4px_rgba(20,30,50,0.12)] outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
