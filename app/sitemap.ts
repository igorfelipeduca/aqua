import type { MetadataRoute } from "next"

import { DOCS_NAV } from "@/lib/docs-nav"

const SITE_URL = "https://aqua.duca.dev"

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = DOCS_NAV.flatMap((section) => section.items).map((item) => ({
    url: item.external
      ? `${SITE_URL}${item.href}`
      : `${SITE_URL}/docs/${item.slug}`,
    changeFrequency: "weekly" as const,
    priority: item.external ? 0.5 : 0.7,
  }))

  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ...docs,
  ]
}
