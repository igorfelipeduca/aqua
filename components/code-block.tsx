import { codeToHtml } from "shiki"

import { CopyButton } from "@/components/copy-button"
import { Badge } from "@/registry/aqua/ui/badge"

export async function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string
  lang?: string
}) {
  const html = await codeToHtml(code, { lang, theme: "github-light" })

  return (
    <div className="relative">
      <div
        className="overflow-x-auto rounded-xl border border-[#aeb3bc] bg-white shadow-[0_2px_10px_rgba(20,30,50,0.08)] [&_pre]:!bg-transparent [&_pre]:p-5 [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:leading-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <CopyButton text={code} className="absolute right-3 top-3" />
    </div>
  )
}

export function InstallCommand({ name }: { name: string }) {
  const command = `npx shadcn@latest add @aqua/${name}`

  return (
    <div className="flex items-center gap-3 overflow-x-auto rounded-xl border border-[#aeb3bc] bg-[repeating-linear-gradient(180deg,#f4f6fa_0px,#f4f6fa_2px,#eaeef4_2px,#eaeef4_4px)] px-5 py-3 shadow-[0_2px_10px_rgba(20,30,50,0.08)]">
      <Badge>install</Badge>
      <code className="whitespace-nowrap font-mono text-[13px] text-[#3a3f47]">
        {command}
      </code>
      <CopyButton text={command} className="ml-auto" />
    </div>
  )
}
