export type DocsNavItem = {
  title: string
  slug: string
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
]
