import { CopyButton } from "@/components/copyButton.tsx"
import type { TerminalLine } from "@/data/terminalExamples.ts"

type TerminalWindowProps = {
  readonly title?: string
  readonly lines: ReadonlyArray<TerminalLine>
  readonly className?: string
}

export const TerminalWindow = ({ title = "fuel -- zsh", lines, className = "" }: TerminalWindowProps) => (
  <div
    className={`rounded-lg border border-border bg-terminal-bg overflow-hidden ${className}`}
  >
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
      <span className="text-text-dim text-xs font-mono ml-2">{title}</span>
    </div>
    <div className="p-4 font-mono text-sm leading-relaxed">
      {lines.map((line, index) => {
        if (line.type === "blank") {
          return <div key={index} className="h-4" />
        }

        if (line.type === "prompt") {
          return (
            <div key={index} className="flex items-center gap-2">
              <span className="text-terminal-prompt select-none shrink-0">$</span>
              <span className="text-terminal-output">{line.text}</span>
              {index === 0 && <CopyButton text={line.text} />}
            </div>
          )
        }

        return (
          <div key={index} className="text-terminal-output pl-4 whitespace-pre">
            {line.text}
          </div>
        )
      })}
    </div>
  </div>
)
