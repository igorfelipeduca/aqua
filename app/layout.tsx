import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqua — the classic Apple UI, as a shadcn registry",
  description:
    "Glossy Mac OS X era components for shadcn/ui. Radix underneath, Aqua on top. Install with npx shadcn add @aqua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var a=localStorage.getItem("aqua-accent");if(a)document.documentElement.style.setProperty("--aqua-accent",a)}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
