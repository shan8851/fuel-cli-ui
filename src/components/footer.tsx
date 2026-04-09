import { Github, Package } from "lucide-react"

export const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div>
        <span className="font-mono text-accent font-semibold text-sm">fuel-cli</span>
        <p className="text-text-dim text-sm mt-2">
          UK fuel prices in your terminal.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <a
          href="https://github.com/shan8851/fuel-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
        >
          <Github size={14} />
          GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/@shan8851/fuel-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
        >
          <Package size={14} />
          npm
        </a>
        <span className="text-text-dim">MIT License</span>
      </div>

      <div className="text-sm">
        <p className="text-text-muted">
          Built by{" "}
          <a
            href="https://x.com/shan8851"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            @shan8851
          </a>
        </p>
        <p className="text-text-dim text-xs mt-3">
          Uses data from the UK Government Fuel Finder service.
        </p>
      </div>
    </div>
  </footer>
)
