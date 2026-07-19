import { ImageResponse } from "next/og"

import { OgCard, OG_SIZE } from "@/lib/og-card"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Aqua — the classic Apple UI, as a shadcn registry"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        title="aqua"
        description="The classic Mac OS X interface — gel buttons, pinstripes, brushed metal — rebuilt as a shadcn/ui registry."
        install="npx shadcn@latest add @aqua/button"
      />
    ),
    size
  )
}
