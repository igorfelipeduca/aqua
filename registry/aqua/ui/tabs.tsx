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
      className={cn("flex flex-col items-center", className)}
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
      className={cn(
        "z-10 -mb-[14px] inline-flex rounded-full shadow-[0_1px_3px_rgba(20,30,50,0.25)]",
        className
      )}
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
        "relative -ml-px border border-[#8b909a] bg-[linear-gradient(180deg,#fdfdfe_0%,#e4e7ec_48%,#d3d7de_52%,#eceef2_100%)] px-5 py-[5px] text-[13px] text-[#3a3f47] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-[filter] first:ml-0 first:rounded-l-full last:rounded-r-full hover:brightness-103 focus-visible:z-10 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 active:brightness-95 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-[var(--aqua-edge,#1c5fb8)] data-[state=active]:bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a8d0f7)_0%,var(--aqua-gel-mid,#4a90ec)_50%,var(--aqua-gel-deep,#2a6fd0)_51%,var(--aqua-gel-light,#6aabf3)_100%)] data-[state=active]:text-white data-[state=active]:shadow-[inset_0_2px_4px_rgba(10,40,90,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] data-[state=active]:[text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]",
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
        "w-full rounded-lg border border-[#a9adb5] bg-[repeating-linear-gradient(180deg,#f4f6fa_0px,#f4f6fa_2px,#eaeef4_2px,#eaeef4_4px)] p-6 pt-8 shadow-[inset_0_1px_4px_rgba(20,30,50,0.12)] outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
