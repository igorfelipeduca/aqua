import { notFound } from "next/navigation"

import { CopyPromptButton } from "@/components/copy-prompt-button"
import { DOCS } from "@/components/docs-content"
import { buildComponentPrompt } from "@/lib/ai-prompt"
import { REGISTRY_SLUGS } from "@/lib/registry-slugs"

export function generateStaticParams() {
  return Object.keys(DOCS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = DOCS[slug]

  if (!doc) return {}

  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/docs/${slug}` },
    openGraph: {
      title: `${doc.title} — Aqua`,
      description: doc.description,
      url: `/docs/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${doc.title} — Aqua`,
      description: doc.description,
    },
  }
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = DOCS[slug]

  if (!doc) notFound()

  const isComponent = REGISTRY_SLUGS.includes(slug)

  return (
    <article className="flex flex-col gap-5">
      <header className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
          {isComponent ? (
            <CopyPromptButton
              prompt={buildComponentPrompt({
                name: slug,
                title: doc.title,
                description: doc.description,
              })}
            />
          ) : null}
        </div>
        <p className="text-muted-foreground">{doc.description}</p>
      </header>
      <div className="flex flex-col gap-5 text-[15px] leading-7 [&_code]:font-mono [&_code]:text-[13px]">
        {doc.body}
      </div>
    </article>
  )
}
