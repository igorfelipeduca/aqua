import { ImageResponse } from "next/og"

import { DOCS } from "@/components/docs-content"
import { OgCard, OG_SIZE } from "@/lib/og-card"
import { REGISTRY_SLUGS } from "@/lib/registry-slugs"

export const size = OG_SIZE
export const contentType = "image/png"

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = DOCS[slug]

  return new ImageResponse(
    (
      <OgCard
        title={doc?.title ?? "Aqua"}
        description={doc?.description ?? ""}
        install={
          REGISTRY_SLUGS.includes(slug)
            ? `npx shadcn@latest add @aqua/${slug}`
            : undefined
        }
      />
    ),
    size
  )
}
