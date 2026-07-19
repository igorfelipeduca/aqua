"use client"

import { useEffect, useRef, useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function CopyButton({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy code"}
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-[#9599a1] bg-[linear-gradient(180deg,#fdfdfe_0%,#e4e7ec_48%,#d3d7de_52%,#eceef2_100%)] text-[#4a5058] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,30,50,0.2)] outline-none transition-[filter] hover:brightness-103 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 active:brightness-95",
        className
      )}
    >
      {copied ? (
        <CheckIcon className="size-3.5 text-[#2c8a2c]" strokeWidth={3} />
      ) : (
        <CopyIcon className="size-3.5" />
      )}
    </button>
  )
}
