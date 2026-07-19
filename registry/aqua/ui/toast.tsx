"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/registry/aqua/ui/alert"

type ToastVariant = "default" | "warning" | "destructive"

export type ToastOptions = {
  title: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

type ToastItem = ToastOptions & {
  id: number
  leaving: boolean
}

let toastCount = 0
let toasts: ToastItem[] = []
const listeners = new Set<(items: ToastItem[]) => void>()

function emit() {
  for (const listener of listeners) listener(toasts)
}

function subscribe(listener: (items: ToastItem[]) => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot() {
  return toasts
}

function toast(options: ToastOptions) {
  const id = ++toastCount
  toasts = [...toasts, { duration: 5000, ...options, id, leaving: false }]
  emit()
  return id
}

function dismissToast(id: number) {
  if (!toasts.some((item) => item.id === id && !item.leaving)) return
  toasts = toasts.map((item) =>
    item.id === id ? { ...item, leaving: true } : item
  )
  emit()
  setTimeout(() => {
    toasts = toasts.filter((item) => item.id !== id)
    emit()
  }, 200)
}

function Toaster({ className }: { className?: string }) {
  const items = React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  const scheduled = React.useRef(new Set<number>())

  React.useEffect(() => {
    for (const item of items) {
      if (item.leaving || scheduled.current.has(item.id)) continue
      scheduled.current.add(item.id)
      setTimeout(() => dismissToast(item.id), item.duration)
    }
  }, [items])

  return (
    <div
      className={cn(
        "pointer-events-none fixed right-4 top-4 z-[100] flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-2.5",
        className
      )}
    >
      {items.map((item) => (
        <Alert
          key={item.id}
          variant={item.variant}
          className={cn(
            "group pointer-events-auto relative shadow-[0_1px_3px_rgba(20,30,50,0.12),0_10px_28px_rgba(20,30,50,0.3)]",
            item.leaving
              ? "animate-out fade-out-0 slide-out-to-right-8 fill-mode-forwards duration-200"
              : "animate-in fade-in-0 slide-in-from-right-8 duration-300"
          )}
        >
          <AlertTitle>{item.title}</AlertTitle>
          {item.description ? (
            <AlertDescription>{item.description}</AlertDescription>
          ) : null}
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => dismissToast(item.id)}
            className="absolute -left-2 -top-2 flex size-5 items-center justify-center rounded-full border border-[#5a5f66] bg-[radial-gradient(circle_at_35%_30%,#9aa0a8_0%,#5f646b_60%,#43474d_100%)] text-white opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_1px_2px_rgba(20,30,50,0.4)] transition-opacity focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 group-hover:opacity-100"
          >
            <XIcon className="size-3" strokeWidth={3} />
          </button>
        </Alert>
      ))}
    </div>
  )
}

export { toast, dismissToast, Toaster }
