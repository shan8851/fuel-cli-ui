import { CopyButton } from "@/components/copyButton.tsx"

type CodeBlockProps = {
  readonly code: string
  readonly className?: string
}

export const CodeBlock = ({ code, className = "" }: CodeBlockProps) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-terminal-bg font-mono text-sm ${className}`}
  >
    <code className="text-terminal-output flex-1">{code}</code>
    <CopyButton text={code} />
  </div>
)
