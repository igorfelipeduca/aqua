import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex shrink-0 select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-semibold tracking-[-0.01em] outline-none transition-[filter] before:pointer-events-none before:absolute before:left-[7%] before:right-[7%] before:top-[2px] before:h-[46%] before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.08))] before:content-[''] hover:brightness-105 focus-visible:ring-[3px] focus-visible:ring-[#6cb0f7]/70 active:translate-y-px active:brightness-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-[#1c5fb8] bg-[linear-gradient(180deg,#b9dcff_0%,#6cb0f7_42%,#2f7de0_50%,#4d9cf2_78%,#9fd7ff_100%)] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),inset_0_-3px_7px_rgba(255,255,255,0.6),0_1px_3px_rgba(20,60,130,0.35)] [text-shadow:0_-1px_1px_rgba(10,40,90,0.45)]",
        secondary:
          "border border-[#aeb3bc] bg-[linear-gradient(180deg,#fdfdfe_0%,#e4e7ec_48%,#d3d7de_52%,#eceef2_100%)] text-[#3a3f47] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,60,130,0.2)] before:opacity-60 [text-shadow:0_1px_0_rgba(255,255,255,0.8)]",
        destructive:
          "border border-[#a81f1f] bg-[linear-gradient(180deg,#ffc4c4_0%,#f7826c_42%,#e03a2f_50%,#f2604d_78%,#ffb09f_100%)] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),inset_0_-3px_7px_rgba(255,255,255,0.5),0_1px_3px_rgba(130,20,20,0.35)] [text-shadow:0_-1px_1px_rgba(90,10,10,0.45)]",
      },
      size: {
        sm: "px-5 py-[7px] text-sm",
        default: "px-7 py-2.5 text-base",
        lg: "px-8 py-[13px] text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
