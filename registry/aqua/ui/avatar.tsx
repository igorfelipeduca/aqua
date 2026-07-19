import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const AVATAR_COLORS = [
  "#2f7de0",
  "#58b52f",
  "#e0742f",
  "#e02f6b",
  "#8a56c9",
  "#1fa8a0",
  "#7d8694",
]

function seededColor(seed: string) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }
  return AVATAR_COLORS[hash % AVATAR_COLORS.length]
}

function gelBackground(color: string) {
  return `linear-gradient(180deg, color-mix(in oklab, ${color} 38%, white) 0%, color-mix(in oklab, ${color} 90%, white) 50%, color-mix(in oklab, ${color} 85%, black) 51%, color-mix(in oklab, ${color} 62%, white) 100%)`
}

const avatarVariants = cva(
  "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden border border-[#7d828c] bg-[linear-gradient(180deg,var(--aqua-gel-hi,#a8d0f7)_0%,var(--aqua-gel-mid,#4a90ec)_50%,var(--aqua-gel-deep,#2a6fd0)_51%,var(--aqua-gel-light,#6aabf3)_100%)] font-bold uppercase text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_1px_2px_rgba(20,30,50,0.25)] [text-shadow:0_-1px_1px_rgba(10,30,70,0.4)] before:pointer-events-none before:absolute before:inset-x-[2px] before:top-[1px] before:z-10 before:h-[45%] before:rounded-t-[inherit] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.08))]",
  {
    variants: {
      size: {
        sm: "size-7 rounded-[5px] text-[10px]",
        default: "size-10 rounded-[7px] text-[13px]",
        lg: "size-16 rounded-[10px] text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function AvatarSilhouette() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="absolute -bottom-[8%] left-1/2 h-[88%] w-auto -translate-x-1/2 text-white/90 drop-shadow-[0_1px_1px_rgba(10,30,70,0.35)]"
      fill="currentColor"
    >
      <circle cx="12" cy="8" r="4.6" />
      <path d="M12 14.2c-4.8 0-8.4 2.8-8.4 7v2.8h16.8v-2.8c0-4.2-3.6-7-8.4-7Z" />
    </svg>
  )
}

export type AvatarProps = React.ComponentProps<"span"> &
  VariantProps<typeof avatarVariants> & {
    src?: string
    alt?: string
    initials?: string
    color?: string
    randomColor?: boolean
  }

function Avatar({
  className,
  size,
  src,
  alt,
  initials,
  color,
  randomColor,
  ...props
}: AvatarProps) {
  const resolvedColor =
    color ?? (randomColor ? seededColor(initials ?? alt ?? "aqua") : undefined)

  return (
    <span
      data-slot="avatar"
      role={src ? undefined : "img"}
      aria-label={src ? undefined : alt ?? initials ?? "avatar"}
      className={cn(avatarVariants({ size }), className)}
      style={resolvedColor ? { background: gelBackground(resolvedColor) } : undefined}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          className="absolute inset-0 z-0 size-full object-cover"
        />
      ) : initials ? (
        <span className="relative">{initials.slice(0, 2)}</span>
      ) : (
        <AvatarSilhouette />
      )}
    </span>
  )
}

export { Avatar, avatarVariants }
