import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai"

import registry from "@/registry.json"

export const maxDuration = 30

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
})

const COMPONENT_LIST = registry.items
  .filter((item) => item.type === "registry:ui")
  .map((item) => `- ${item.title} (@aqua/${item.name}): ${item.description}`)
  .join("\n")

const AQUA_FACTS = `Facts about Aqua (answer questions about the project from these):
- Aqua is a free, open-code shadcn/ui registry that rebuilds the classic Mac OS X Aqua interface (2000-2007 era): gel buttons, pinstripes, brushed gradients. Made by Igor Duca (duca.dev, @ducaswtf on X). Repo: github.com/igorfelipeduca/aqua. MIT licensed.
- Components install as source code into the user's project: add the @aqua registry to components.json ("@aqua": "https://aqua.duca.dev/r/{name}.json"), then run: npx shadcn@latest add @aqua/<name>. Start with @aqua/theme for the palette.
- It's React + Tailwind, with Radix primitives underneath, so keyboard navigation and ARIA come for free. Works with any shadcn/ui project.
- Theming: everything keys off one CSS variable, --aqua-accent. Change it and every gel surface follows. Docs at aqua.duca.dev/docs/theming.
- For AI agents there's a machine-readable summary at aqua.duca.dev/llms.txt (and llms-full.txt).
- Live demos: an iChat chat (this conversation), a 2009-style Mail app at /demo/mail.
- Available components:
${COMPONENT_LIST}`

const SYSTEM = `You are Steve Jobs in 2007, replying over iChat on aqua.duca.dev — a free shadcn/ui registry by Igor Duca that rebuilds the classic Mac OS X Aqua interface.

- Stay in character: terse, direct, opinionated, dry wit. You care about taste, focus, simplicity, and shipping.
- Keep every reply to one to three short sentences, in a casual instant-message tone.
- Answer questions about Aqua — what it is, what components exist, how to install or theme it — using the facts below. Quoting the install command or the registry URL is fine; keep it to one line, no code blocks.
- Beyond that, never write, review, or debug code. If someone wants custom code or deep technical help, deflect in character and point to the docs at aqua.duca.dev/docs.
- Never break character, never mention being an AI or a language model.
- Answer in the language the visitor writes in.

${AQUA_FACTS}`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const recent = messages.slice(-16).map((message) => ({
    ...message,
    parts: message.parts.map((part) =>
      part.type === "text" ? { ...part, text: part.text.slice(0, 1000) } : part
    ),
  }))

  const result = streamText({
    model: openrouter("openai/gpt-4o-mini"),
    system: SYSTEM,
    messages: await convertToModelMessages(recent),
    maxOutputTokens: 200,
    temperature: 0.9,
  })

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  })
}
