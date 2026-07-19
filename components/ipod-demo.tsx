"use client"

import { useEffect, useState } from "react"

import {
  ClickWheel,
  IPod,
  IPodHeader,
  IPodScreen,
} from "@/registry/aqua/ui/ipod"

const TRACK = {
  title: "Vertigo",
  artist: "U2",
  album: "How to Dismantle an Atomic Bomb",
  index: 1,
  total: 11,
  duration: 194,
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${String(s).padStart(2, "0")}`
}

export function IPodDemo() {
  const [playing, setPlaying] = useState(true)
  const [elapsed, setElapsed] = useState(74)

  useEffect(() => {
    if (!playing) return
    const timer = setInterval(() => {
      setElapsed((s) => (s + 1) % TRACK.duration)
    }, 1000)
    return () => clearInterval(timer)
  }, [playing])

  const progress = (elapsed / TRACK.duration) * 100

  return (
    <IPod>
      <IPodScreen>
        <IPodHeader>
          <span className="absolute left-2 text-[10px]">
            {playing ? "▶" : "❚❚"}
          </span>
          Now Playing
        </IPodHeader>
        <div className="flex flex-col gap-1.5 px-4 py-3 text-center text-[13px] text-[#2c3e58]">
          <p className="text-[11px] text-[#6b7f9c]">
            {TRACK.index} of {TRACK.total}
          </p>
          <p className="font-bold">{TRACK.title}</p>
          <p>{TRACK.artist}</p>
          <p className="truncate text-[11px] text-[#6b7f9c]">{TRACK.album}</p>
          <div className="mt-2 h-[9px] overflow-hidden rounded-[3px] border border-[#93a7c2] bg-[#e2e9f2] shadow-[inset_0_1px_2px_rgba(40,70,120,0.2)]">
            <div
              className="h-full bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a5d0fa)_0%,var(--aqua-gel-mid,#4a95ef)_50%,var(--aqua-accent,#2f7de0)_55%,var(--aqua-gel-light,#6fb4f7)_100%)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-[#6b7f9c]">
            <span>{formatTime(elapsed)}</span>
            <span>-{formatTime(TRACK.duration - elapsed)}</span>
          </div>
        </div>
      </IPodScreen>
      <ClickWheel
        onPlayPause={() => setPlaying((p) => !p)}
        onSelect={() => setPlaying((p) => !p)}
        onPrev={() => setElapsed(0)}
        onNext={() => setElapsed(TRACK.duration - 10)}
      />
    </IPod>
  )
}
