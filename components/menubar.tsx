import Link from "next/link"

import { CommandPalette } from "@/components/command-palette"
import { MobileNav } from "@/components/mobile-nav"

export function Menubar() {
  return (
    <nav className="sticky top-0 z-40 flex items-center gap-3 border-b border-[#aeb3bc] bg-[linear-gradient(180deg,#fbfcfd_0%,#e8ebef_55%,#dcdfe4_100%)] px-4 py-2 text-[13px] shadow-[0_1px_3px_rgba(20,30,50,0.15)] md:gap-6 md:px-6">
      <MobileNav />
      <Link
        href="/"
        className="font-bold tracking-tight text-[#1c5fb8] [text-shadow:0_1px_0_rgba(255,255,255,0.8)]"
      >
        aqua
      </Link>
      <Link
        href="/docs/introduction"
        className="hidden hover:text-[#1c5fb8] sm:block"
      >
        docs
      </Link>
      <Link
        href="/docs/button"
        className="hidden hover:text-[#1c5fb8] sm:block"
      >
        components
      </Link>
      <CommandPalette />
      <a
        href="https://github.com/igorfelipeduca/aqua"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#1c5fb8]"
      >
        github
      </a>
    </nav>
  )
}
