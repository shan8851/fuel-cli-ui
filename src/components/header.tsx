import { useState, useEffect } from "react"
import { Github, Package } from "lucide-react"

const NAV_LINKS = [
  { label: "Install", href: "#install" },
  { label: "Features", href: "#features" },
  { label: "Examples", href: "#examples" },
] as const

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-accent font-semibold text-sm tracking-tight"
        >
          fuel-cli
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shan8851/fuel-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.npmjs.com/package/@shan8851/fuel-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-accent transition-colors duration-200"
              aria-label="npm"
            >
              <Package size={18} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
