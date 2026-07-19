import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,60,130,0.2)] [text-shadow:0_1px_0_rgba(255,255,255,0.8)]",
  {
    variants: {
      variant: {
        default:
          "border-[#93a7c2] bg-[linear-gradient(180deg,#f4f9fe_0%,#d9e8fa_48%,#c3dbf6_52%,#e2eefb_100%)] text-[#1c5fb8]",
        secondary:
          "border-[#aeb3bc] bg-[linear-gradient(180deg,#fdfdfe_0%,#e4e7ec_48%,#d3d7de_52%,#eceef2_100%)] text-[#3a3f47]",
        destructive:
          "border-[#d9958d] bg-[linear-gradient(180deg,#fef6f5_0%,#fadfdc_48%,#f5c9c4_52%,#fbe7e5_100%)] text-[#a81f1f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(130,20,20,0.2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
