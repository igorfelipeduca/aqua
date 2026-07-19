import * as React from "react"

import { cn } from "@/lib/utils"

const SPOKES = Array.from({ length: 12 }, (_, index) => index)

function Loader({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label="Loading"
      className={cn(
        "size-6 animate-[spin_0.9s_steps(12)_infinite] text-[#5a6069] motion-reduce:animate-none",
        className
      )}
      {...props}
    >
      {SPOKES.map((spoke) => (
        <rect
          key={spoke}
          x="11.3"
          y="2"
          width="1.4"
          height="5.6"
          rx="0.7"
          fill="currentColor"
          opacity={(spoke + 1) / 12}
          transform={`rotate(${spoke * 30} 12 12)`}
        />
      ))}
    </svg>
  )
}

export { Loader }
