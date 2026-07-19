export type DocsNavItem = {
  title: string
  slug: string
  href?: string
  external?: boolean
}

export type DocsNavSection = {
  label: string
  items: DocsNavItem[]
}

export const DOCS_NAV: DocsNavSection[] = [
  {
    label: "Getting Started",
    items: [
      { title: "Introduction", slug: "introduction" },
      { title: "Installation", slug: "installation" },
      { title: "Theming", slug: "theming" },
    ],
  },
  {
    label: "Components",
    items: [
      { title: "Badge", slug: "badge" },
      { title: "Button", slug: "button" },
      { title: "Checkbox", slug: "checkbox" },
      { title: "Dialog", slug: "dialog" },
      { title: "Input", slug: "input" },
      { title: "Progress", slug: "progress" },
      { title: "Slider", slug: "slider" },
      { title: "Switch", slug: "switch" },
      { title: "Tabs", slug: "tabs" },
      { title: "Tooltip", slug: "tooltip" },
    ],
  },
  {
    label: "Demos",
    items: [
      { title: "Chat", slug: "chat", href: "/demo/chat", external: true },
      { title: "Mail (2009)", slug: "mail", href: "/demo/mail", external: true },
    ],
  },
  {
    label: "Signature",
    items: [
      { title: "Chat Bubble", slug: "chat-bubble" },
      { title: "Dock", slug: "dock" },
      { title: "iPod", slug: "ipod" },
      { title: "Window", slug: "window" },
    ],
  },
]
