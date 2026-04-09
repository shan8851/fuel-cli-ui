import type { LucideIcon } from "lucide-react"

type FeatureCardProps = {
  readonly name: string
  readonly fullCommand: string
  readonly description: string
  readonly icon: LucideIcon
  readonly example: string
}

export const FeatureCard = ({ name, fullCommand, description, icon: Icon, example }: FeatureCardProps) => (
  <div className="rounded-lg border border-border bg-surface p-5 hover:border-border-bright hover:bg-surface-hover transition-all duration-200">
    <div className="flex items-start gap-3 mb-3">
      <div className="p-2 rounded-md bg-accent-glow text-accent shrink-0">
        <Icon size={16} />
      </div>
      <div>
        <h3 className="text-text font-medium text-sm">{name}</h3>
        <code className="text-accent text-xs font-mono">{fullCommand}</code>
      </div>
    </div>
    <p className="text-text-muted text-sm mb-3">{description}</p>
    <code className="text-text-dim text-xs font-mono block bg-terminal-bg px-3 py-1.5 rounded">
      {example}
    </code>
  </div>
)
