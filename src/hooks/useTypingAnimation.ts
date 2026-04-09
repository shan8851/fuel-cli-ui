import { useState, useEffect, useRef } from "react"
import type { TerminalLine } from "@/data/terminalExamples.ts"

type UseTypingAnimationOptions = {
  readonly lines: ReadonlyArray<TerminalLine>
  readonly typingSpeed?: number
  readonly lineDelay?: number
  readonly startDelay?: number
  readonly enabled?: boolean
}

export const useTypingAnimation = ({
  lines,
  typingSpeed = 50,
  lineDelay = 30,
  startDelay = 600,
  enabled = true,
}: UseTypingAnimationOptions): ReadonlyArray<TerminalLine> => {
  const [visibleLines, setVisibleLines] = useState<ReadonlyArray<TerminalLine>>([])
  const animationRef = useRef<number | null>(null)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    if (!enabled || hasStartedRef.current) return
    hasStartedRef.current = true

    const promptLine = lines[0]
    const outputLines = lines.slice(1)

    if (!promptLine) return

    const promptText = promptLine.text
    let charIndex = 0

    const startTimeout = window.setTimeout(() => {
      const typeChar = () => {
        if (charIndex <= promptText.length) {
          setVisibleLines([
            { type: "prompt", text: promptText.slice(0, charIndex) },
          ])
          charIndex++
          animationRef.current = window.requestAnimationFrame(() => {
            window.setTimeout(typeChar, typingSpeed)
          })
        } else {
          let lineIndex = 0
          const showLine = () => {
            if (lineIndex <= outputLines.length) {
              setVisibleLines([
                promptLine,
                ...outputLines.slice(0, lineIndex),
              ])
              lineIndex++
              if (lineIndex <= outputLines.length) {
                animationRef.current = window.requestAnimationFrame(() => {
                  window.setTimeout(showLine, lineDelay)
                })
              }
            }
          }
          window.setTimeout(showLine, 300)
        }
      }
      typeChar()
    }, startDelay)

    return () => {
      window.clearTimeout(startTimeout)
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current)
      }
    }
  }, [enabled, lines, typingSpeed, lineDelay, startDelay])

  return visibleLines
}
