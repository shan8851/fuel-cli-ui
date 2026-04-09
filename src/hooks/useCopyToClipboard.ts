import { useState, useCallback } from "react"

export const useCopyToClipboard = (resetDelay = 2000) => {
  const [hasCopied, setHasCopied] = useState(false)

  const copy = useCallback(
    async (text: string) => {
      await navigator.clipboard.writeText(text)
      setHasCopied(true)
      window.setTimeout(() => setHasCopied(false), resetDelay)
    },
    [resetDelay],
  )

  return { hasCopied, copy } as const
}
