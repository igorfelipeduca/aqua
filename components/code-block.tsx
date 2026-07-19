export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-[#aeb3bc] bg-white p-5 font-mono text-[13px] leading-6 text-[#3a3f47] shadow-[0_2px_10px_rgba(20,30,50,0.08)]">
      {code}
    </pre>
  )
}

export function InstallCommand({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto rounded-xl border border-[#aeb3bc] bg-[repeating-linear-gradient(180deg,#f4f6fa_0px,#f4f6fa_2px,#eaeef4_2px,#eaeef4_4px)] px-5 py-3 shadow-[0_2px_10px_rgba(20,30,50,0.08)]">
      <span className="shrink-0 rounded-full border border-[#93a7c2] bg-[#e7f0fb] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#1c5fb8]">
        install
      </span>
      <code className="whitespace-nowrap font-mono text-[13px] text-[#3a3f47]">
        npx shadcn@latest add @aqua/{name}
      </code>
    </div>
  )
}
