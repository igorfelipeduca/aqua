"use client"

import { Button } from "@/registry/aqua/ui/button"
import { toast } from "@/registry/aqua/ui/toast"

export function ToastPromoButton() {
  return (
    <Button
      size="sm"
      onClick={() =>
        toast({
          title: "Thanks for your order",
          description: "One Toast, shipped as open code. No returns needed.",
        })
      }
    >
      Try it now &#9656;
    </Button>
  )
}
