"use client"

import { Button } from "@/registry/aqua/ui/button"
import { toast } from "@/registry/aqua/ui/toast"

export function ToastDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        onClick={() =>
          toast({
            title: "Software Update",
            description: "Mac OS X 10.4 “Tiger” is available for your computer.",
          })
        }
      >
        Note
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            variant: "warning",
            title: "Low battery",
            description: "You are now running on reserve power.",
          })
        }
      >
        Caution
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast({
            variant: "destructive",
            title: "Disk not ejected properly",
            description: "Eject a disk before disconnecting it.",
          })
        }
      >
        Stop
      </Button>
    </div>
  )
}
