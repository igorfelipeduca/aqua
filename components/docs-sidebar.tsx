"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { DOCS_NAV } from "@/lib/docs-nav"
import { cn } from "@/lib/utils"

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-[37px] hidden h-[calc(100dvh-37px)] w-56 shrink-0 overflow-y-auto border-r border-[#b6bcc6] bg-[#dde4ed] px-3 py-4 md:block">
      {DOCS_NAV.map((section) => (
        <div key={section.label} className="mb-5">
          <p className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wide text-[#7a8089] [text-shadow:0_1px_0_rgba(255,255,255,0.7)]">
            {section.label}
          </p>
          <ul className="flex flex-col gap-px">
            {section.items.map((item) => {
              const href = `/docs/${item.slug}`
              const active = pathname === href

              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    className={cn(
                      "block rounded-md px-3 py-1 text-[13px] transition-colors",
                      active
                        ? "bg-[linear-gradient(180deg,#7db9f5_0%,#3c86e4_50%,#2668c4_51%,#5da3ef_100%)] font-semibold text-white [text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]"
                        : "text-[#3a3f47] hover:bg-white/60"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </aside>
  )
}
