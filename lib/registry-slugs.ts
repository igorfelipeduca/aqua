import registry from "@/registry.json"

export const REGISTRY_SLUGS = registry.items
  .filter((item) => item.type === "registry:ui")
  .map((item) => item.name)
