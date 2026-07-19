import { notFound } from "next/navigation"

import { DOCS } from "@/components/docs-content"

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

  return { title: `${doc.title} — aqua`, description: doc.description }
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = DOCS[slug]

  if (!doc) notFound()

  return (
    <article className="flex flex-col gap-5">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
        <p className="text-muted-foreground">{doc.description}</p>
      </header>
      <div className="flex flex-col gap-5 text-[15px] leading-7 [&_code]:font-mono [&_code]:text-[13px]">
        {doc.body}
      </div>
    </article>
  )
}
