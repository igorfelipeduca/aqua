import { DocsSidebar } from "@/components/docs-sidebar"
import { Menubar } from "@/components/menubar"

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Menubar />
      <div className="flex">
        <DocsSidebar />
        <main className="mx-auto w-full max-w-3xl px-6 py-10">{children}</main>
      </div>
    </>
  )
}
