"use client"

import { useEffect, useRef, useState } from "react"
import { CheckIcon, SparklesIcon } from "lucide-react"

export function CopyPromptButton({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const copy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-7 select-none items-center gap-1.5 rounded-full border border-[#9599a1] bg-[linear-gradient(180deg,#fdfdfe_0%,#e4e7ec_48%,#d3d7de_52%,#eceef2_100%)] px-3 text-[12px] font-semibold text-[#3a3f47] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(20,30,50,0.2)] outline-none transition-[filter] [text-shadow:0_1px_0_rgba(255,255,255,0.8)] hover:brightness-103 focus-visible:ring-[3px] focus-visible:ring-[var(--aqua-ring,#6cb0f7)]/70 active:brightness-95"
    >
      {copied ? (
        <CheckIcon className="size-3.5 text-[#2c8a2c]" strokeWidth={3} />
      ) : (
        <SparklesIcon className="size-3.5 text-[#1c5fb8]" />
      )}
      {copied ? "Copied" : "Copy AI prompt"}
    </button>
  )
}
