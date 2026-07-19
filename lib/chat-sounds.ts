let ctx: AudioContext | null = null

function audioContext() {
  if (typeof window === "undefined") return null
  if (!ctx) ctx = new AudioContext()
  if (ctx.state === "suspended") void ctx.resume()
  return ctx
}

// A short rising noise swoosh, in the spirit of iChat's send "fwip".
export function playSendSound() {
  const ac = audioContext()
  if (!ac) return

  const now = ac.currentTime
  const duration = 0.22

  const buffer = ac.createBuffer(1, ac.sampleRate * duration, ac.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1
  }

  const noise = ac.createBufferSource()
  noise.buffer = buffer

  const filter = ac.createBiquadFilter()
  filter.type = "bandpass"
  filter.Q.value = 2.5
  filter.frequency.setValueAtTime(500, now)
  filter.frequency.exponentialRampToValueAtTime(3200, now + duration)

  const gain = ac.createGain()
  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(0.18, now + 0.04)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

  noise.connect(filter).connect(gain).connect(ac.destination)
  noise.start(now)
  noise.stop(now + duration)
}

// A soft two-note chime, in the spirit of iChat's receive ding.
export function playReceiveSound() {
  const ac = audioContext()
  if (!ac) return

  const now = ac.currentTime
  const notes = [
    { freq: 587.33, start: 0, length: 0.28 },
    { freq: 880, start: 0.09, length: 0.42 },
  ]

  for (const note of notes) {
    const osc = ac.createOscillator()
    osc.type = "triangle"
    osc.frequency.value = note.freq

    const gain = ac.createGain()
    const t = now + note.start
    gain.gain.setValueAtTime(0.0001, t)
    gain.gain.exponentialRampToValueAtTime(0.14, t + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + note.length)

    osc.connect(gain).connect(ac.destination)
    osc.start(t)
    osc.stop(t + note.length)
  }
}
