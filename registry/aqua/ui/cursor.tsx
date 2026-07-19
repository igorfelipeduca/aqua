import * as React from "react"

import { cn } from "@/lib/utils"

const ARROW_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.9 2.5 L5.9 17.5 L9.5 14.1 L11.9 19.6 L14.5 18.4 L12.1 13 L17.1 13 Z" fill="#000" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>`

const HAND_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.2 3.2c0-1.6 2.6-1.6 2.6 0v6.2h0.3c0-1.4 2.5-1.4 2.5 0h0.3c0-1.2 2.3-1.2 2.3 0h0.3c0-1 2.1-1 2.1 0v4.8c0 3.6-2.3 5.6-5.8 5.6h-2.6c-1.9 0-3.2-0.8-4.2-2.3l-2.6-3.9c-0.9-1.3 0.7-2.8 2-2l1.4 0.9Z" fill="#fff" stroke="#000" stroke-width="1.2" stroke-linejoin="round"/></svg>`

const IBEAM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round"><path d="M8.5 3.5c1.5 0 2.5 0.5 3.5 1.5c1-1 2-1.5 3.5-1.5M8.5 20.5c1.5 0 2.5-0.5 3.5-1.5c1 1 2 1.5 3.5 1.5M12 5v14" stroke="#fff" stroke-width="3.4"/><path d="M8.5 3.5c1.5 0 2.5 0.5 3.5 1.5c1-1 2-1.5 3.5-1.5M8.5 20.5c1.5 0 2.5-0.5 3.5-1.5c1 1 2 1.5 3.5 1.5M12 5v14" stroke="#000" stroke-width="1.4"/></g></svg>`

function cursorValue(svg: string, x: number, y: number, fallback: string) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${x} ${y}, ${fallback}`
}

const ARROW = cursorValue(ARROW_SVG, 6, 3, "default")
const HAND = cursorValue(HAND_SVG, 11, 3, "pointer")
const IBEAM = cursorValue(IBEAM_SVG, 12, 12, "text")

const CURSOR_CSS = `
[data-aqua-cursor], [data-aqua-cursor] * { cursor: ${ARROW}; }
[data-aqua-cursor] :where(p, h1, h2, h3, h4, h5, h6, li, dt, dd, blockquote, pre, code, td, th, figcaption, caption, span, em, strong, small, mark, sub, sup):not(:where(a, button, [role="button"], label, summary, select) *) { cursor: ${IBEAM}; }
[data-aqua-cursor] a, [data-aqua-cursor] a * { cursor: ${HAND}; }
[data-aqua-cursor] input, [data-aqua-cursor] textarea, [data-aqua-cursor] [contenteditable] { cursor: ${IBEAM}; }
[data-aqua-cursor] input[type="checkbox"], [data-aqua-cursor] input[type="radio"], [data-aqua-cursor] input[type="range"], [data-aqua-cursor] input[type="color"], [data-aqua-cursor] input[type="button"], [data-aqua-cursor] input[type="submit"] { cursor: ${ARROW}; }
`

function AquaCursor({ className, children }: React.ComponentProps<"div">) {
  return (
    <div data-aqua-cursor="" className={cn("contents", className)}>
      <style dangerouslySetInnerHTML={{ __html: CURSOR_CSS }} />
      {children}
    </div>
  )
}

export { AquaCursor }
