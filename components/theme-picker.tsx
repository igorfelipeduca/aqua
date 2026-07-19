"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/aqua/ui/button"
import { Checkbox } from "@/registry/aqua/ui/checkbox"
import { Progress } from "@/registry/aqua/ui/progress"
import { Slider } from "@/registry/aqua/ui/slider"
import { Switch } from "@/registry/aqua/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/aqua/ui/tabs"

const THEMES = [
  { name: "Aqua", accent: "#2f7de0" },
  { name: "Graphite", accent: "#7d8694" },
  { name: "Sunset", accent: "#e0742f" },
  { name: "Lime", accent: "#58b52f" },
  { name: "Strawberry", accent: "#e02f6b" },
]

export function ThemePicker() {
  const [theme, setTheme] = useState(THEMES[0])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {THEMES.map((option) => (
          <button
            key={option.name}
            type="button"
            onClick={() => setTheme(option)}
            className={cn(
              "flex items-center gap-2 rounded-full border px-3 py-1 text-[13px] transition-[filter] hover:brightness-103",
              option.name === theme.name
                ? "border-[#1c5fb8] bg-[#e7f0fb] font-semibold text-[#1c5fb8]"
                : "border-[#aeb3bc] bg-white text-[#3a3f47]"
            )}
          >
            <span
              className="size-3 rounded-full border border-black/20"
              style={{ background: option.accent }}
            />
            {option.name}
          </button>
        ))}
      </div>

      <div
        style={{ "--aqua-accent": theme.accent } as React.CSSProperties}
        className="flex flex-col items-center gap-6 rounded-xl border border-[#aeb3bc] bg-white p-10 shadow-[0_2px_10px_rgba(20,30,50,0.08)]"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button>default</Button>
          <Button size="sm">small</Button>
          <label className="flex items-center gap-2 text-[13px]">
            <Checkbox defaultChecked /> checked
          </label>
          <Switch defaultChecked />
        </div>
        <Tabs defaultValue="one" className="w-full max-w-sm">
          <TabsList>
            <TabsTrigger value="one">General</TabsTrigger>
            <TabsTrigger value="two">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="one">
            <p className="text-sm">One accent variable, every gel surface.</p>
          </TabsContent>
          <TabsContent value="two">
            <p className="text-sm">Graphite was a real Apple option too.</p>
          </TabsContent>
        </Tabs>
        <div className="flex w-full max-w-sm flex-col gap-4">
          <Progress value={62} />
          <Slider defaultValue={[62]} />
        </div>
      </div>
    </div>
  )
}
