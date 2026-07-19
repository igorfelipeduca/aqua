import type { Metadata } from "next";
import "./globals.css";

import { AquaCursor } from "@/registry/aqua/ui/cursor";
import { Toaster } from "@/registry/aqua/ui/toast";

const SITE_URL = "https://aqua.duca.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aqua — the classic Apple UI, as a shadcn registry",
    template: "%s — Aqua",
  },
  description:
    "Glossy Mac OS X era components for shadcn/ui: gel buttons, pinstripes, brushed metal, the Dock and the iPod. Radix underneath, Aqua on top. Install with npx shadcn add @aqua.",
  keywords: [
    "aqua",
    "mac os x",
    "skeuomorphism",
    "shadcn",
    "shadcn registry",
    "react components",
    "design system",
    "tailwind",
    "radix",
    "retro ui",
    "apple aqua interface",
  ],
  authors: [{ name: "Igor Duca", url: "https://duca.dev" }],
  creator: "Igor Duca",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Aqua",
    title: "Aqua — the classic Apple UI, as a shadcn registry",
    description:
      "Glossy Mac OS X era components for shadcn/ui. Radix underneath, Aqua on top.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ducaswtf",
    title: "Aqua — the classic Apple UI, as a shadcn registry",
    description:
      "Glossy Mac OS X era components for shadcn/ui. Radix underneath, Aqua on top.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Aqua",
      url: SITE_URL,
      description:
        "Glossy Mac OS X era components for shadcn/ui. Radix underneath, Aqua on top.",
      author: { "@type": "Person", name: "Igor Duca", url: "https://duca.dev" },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Aqua UI",
      url: SITE_URL,
      codeRepository: "https://github.com/igorfelipeduca/aqua",
      programmingLanguage: ["TypeScript", "React"],
      runtimePlatform: "React 19",
      description:
        "A shadcn/ui registry of skeuomorphic Mac OS X era components: buttons, tabs, dialogs, the Dock, the iPod and more.",
      author: { "@type": "Person", name: "Igor Duca", url: "https://duca.dev" },
    },
  ],
});

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON_LD }}
        />
        <AquaCursor>
          {children}
          <Toaster />
        </AquaCursor>
      </body>
    </html>
  );
}
