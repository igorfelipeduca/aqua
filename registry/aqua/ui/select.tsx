"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex h-8 w-fit min-w-36 select-none items-center justify-between gap-3 whitespace-nowrap rounded-md border border-[#8b909a] bg-[linear-gradient(180deg,#fdfdfe_0%,#e4e7ec_48%,#d3d7de_52%,#eceef2_100%)] py-0 pl-3 pr-1 text-[13px] text-[#33383f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,60,130,0.2)] outline-none transition-[filter] [text-shadow:0_1px_0_rgba(255,255,255,0.8)] hover:brightness-103 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 active:brightness-95 disabled:pointer-events-none disabled:opacity-50 [&_[data-slot=select-value]]:truncate",
        className
      )}
      {...props}
    >
      {children}
      <span className="flex h-6 w-5 shrink-0 flex-col items-center justify-center rounded-[4px] border border-[var(--aqua-edge,#1c5fb8)] bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a8d0f7)_0%,var(--aqua-gel-mid,#4a90ec)_50%,var(--aqua-gel-deep,#2a6fd0)_51%,var(--aqua-gel-light,#6aabf3)_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
        <ChevronUpIcon className="size-2.5" strokeWidth={3} />
        <ChevronDownIcon className="size-2.5" strokeWidth={3} />
      </span>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        sideOffset={4}
        className={cn(
          "relative z-50 max-h-[min(24rem,var(--radix-select-content-available-height))] min-w-[var(--radix-select-trigger-width)] overflow-y-auto overflow-x-hidden rounded-lg border border-[#9599a1] bg-white py-1 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_28px_rgba(20,30,50,0.3),0_2px_6px_rgba(20,30,50,0.15)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          className
        )}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton className="flex h-5 items-center justify-center text-[#7a8089]">
          <ChevronUpIcon className="size-3.5" />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="p-0">
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex h-5 items-center justify-center text-[#7a8089]">
          <ChevronDownIcon className="size-3.5" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#7a8089]",
        className
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center gap-2 py-1 pl-7 pr-3 text-[13px] text-[#33383f] outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-[linear-gradient(180deg,var(--aqua-gel-hi,#7db9f5)_0%,var(--aqua-gel-mid,#3c86e4)_50%,var(--aqua-gel-deep,#2668c4)_51%,var(--aqua-gel-light,#5da3ef)_100%)] data-[highlighted]:text-white data-[highlighted]:[text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-3.5" strokeWidth={3} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("my-1 h-px bg-[#d3d7de]", className)}
      {...props}
    />
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
