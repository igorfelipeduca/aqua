"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { DOCS_NAV } from "@/lib/docs-nav"
import { cn } from "@/lib/utils"

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <>
      {DOCS_NAV.map((section) => (
        <div key={section.label} className="mb-5">
          <p className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wide text-[#7a8089] [text-shadow:0_1px_0_rgba(255,255,255,0.7)]">
            {section.label}
          </p>
          <ul className="flex flex-col gap-px">
            {section.items.map((item) => {
              const href = item.href ?? `/docs/${item.slug}`
              const active = pathname === href

              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    target={item.external ? "_blank" : undefined}
                    onClick={onNavigate}
                    className={cn(
                      "block rounded-md px-3 py-1 text-[13px] transition-colors",
                      active
                        ? "bg-[linear-gradient(180deg,var(--aqua-gel-hi,#7db9f5)_0%,var(--aqua-gel-mid,#3c86e4)_50%,var(--aqua-gel-deep,#2668c4)_51%,var(--aqua-gel-light,#5da3ef)_100%)] font-semibold text-white [text-shadow:0_-1px_1px_rgba(10,40,90,0.4)]"
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
      <div className="mt-8 border-t border-[#b6bcc6] px-3 pt-3 text-[11px] leading-5 text-[#7a8089]">
        Made by{" "}
        <a
          href="https://duca.dev"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[#1c5fb8] hover:underline"
        >
          Igor Duca
        </a>
        <br />
        <a
          href="https://x.com/ducaswtf"
          target="_blank"
          rel="noreferrer"
          className="text-[#1c5fb8] hover:underline"
        >
          @ducaswtf
        </a>
      </div>
    </>
  )
}

export function DocsSidebar() {
  return (
    <aside className="sticky top-[37px] hidden h-[calc(100dvh-37px)] w-56 shrink-0 overflow-y-auto border-r border-[#b6bcc6] bg-[#dde4ed] px-3 py-4 md:block">
      <SidebarNav />
    </aside>
  )
}
