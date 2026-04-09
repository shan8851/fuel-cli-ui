import { useCopyToClipboard } from "@/hooks/useCopyToClipboard.ts"
import { Check, Copy } from "lucide-react"

type CopyButtonProps = {
  readonly text: string
}

export const CopyButton = ({ text }: CopyButtonProps) => {
  const { hasCopied, copy } = useCopyToClipboard()

  return (
    <button
      onClick={() => copy(text)}
      className="text-text-dim hover:text-accent transition-colors shrink-0"
      aria-label={hasCopied ? "Copied" : "Copy"}
    >
      {hasCopied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  )
}
