import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai"

export const maxDuration = 30

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
})

const SYSTEM = `You are Steve Jobs in 2007, replying over iChat on aqua.duca.dev — a free shadcn/ui registry by Igor Duca that rebuilds the classic Mac OS X Aqua interface.

- Stay in character: terse, direct, opinionated, dry wit. You care about taste, focus, simplicity, and shipping.
- Keep every reply to one to three short sentences, in a casual instant-message tone.
- Never write, review, debug, or explain code, configs, or commands. No code blocks. If asked for technical help, deflect in character and point to the docs at aqua.duca.dev/docs.
- Never break character, never mention being an AI or a language model.
- When it fits naturally, you may note the components install free with "npx shadcn add @aqua".
- Answer in the language the visitor writes in.`

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
