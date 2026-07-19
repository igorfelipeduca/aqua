export function ComponentDemo({
  title,
  description,
  name,
  children,
}: {
  title: string
  description: string
  name: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#aeb3bc] bg-white shadow-[0_2px_10px_rgba(20,30,50,0.08)]">
        <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-4 p-10">
          {children}
        </div>
        <div className="flex items-center gap-3 border-t border-[#c9ccd1] bg-[repeating-linear-gradient(180deg,#f4f6fa_0px,#f4f6fa_2px,#eaeef4_2px,#eaeef4_4px)] px-5 py-3">
          <span className="rounded-full border border-[#93a7c2] bg-[#e7f0fb] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#1c5fb8]">
            install
          </span>
          <code className="font-mono text-[13px] text-[#3a3f47]">
            npx shadcn@latest add @aqua/{name}
          </code>
        </div>
      </div>
    </section>
  )
}
