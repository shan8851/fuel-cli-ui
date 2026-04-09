import { useState, useEffect, useRef } from "react"
import { motion } from "motion/react"
import { Github, Package } from "lucide-react"
import { useNpmVersion } from "@/hooks/useNpmVersion.ts"
import { useTypingAnimation } from "@/hooks/useTypingAnimation.ts"
import { CopyButton } from "@/components/copyButton.tsx"
import { TerminalWindow } from "@/components/terminalWindow.tsx"
import { HERO_EXAMPLE } from "@/data/terminalExamples.ts"

const INSTALL_COMMAND = "npm install -g @shan8851/fuel-cli"

const AnimatedTerminal = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const animatedLines = useTypingAnimation({
    lines: HERO_EXAMPLE,
    enabled: isVisible,
    typingSpeed: 45,
    lineDelay: 25,
    startDelay: 800,
  })

  return (
    <div ref={ref}>
      <TerminalWindow
        title="fuel -- zsh"
        lines={animatedLines}
        className="shadow-[0_0_60px_var(--color-accent-glow)]"
      />
    </div>
  )
}

export const HeroSection = () => {
  const npmVersion = useNpmVersion()

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow)_0%,transparent_70%)] opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-text-dim) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {npmVersion && (
              <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-border-bright text-accent bg-accent-glow mb-8">
                v{npmVersion} -- now on npm
              </span>
            )}
          </motion.div>

          <motion.h1
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-text leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            UK fuel prices
            <br />
            <span className="text-accent">in your terminal</span>
          </motion.h1>

          <motion.p
            className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find the cheapest petrol and diesel nearby. Ranked by price,
            distance, or freshness. Readable text in a TTY, stable JSON when
            piped — handy for humans, sane for agents.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border-bright bg-terminal-bg font-mono text-sm mb-8 max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-terminal-prompt select-none">$</span>
            <code className="text-terminal-output flex-1">{INSTALL_COMMAND}</code>
            <CopyButton text={INSTALL_COMMAND} />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://github.com/shan8851/fuel-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-medium text-sm hover:brightness-110 transition-all duration-200"
            >
              <Github size={16} />
              View on GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@shan8851/fuel-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-bright text-text-muted font-medium text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Package size={16} />
              npm
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AnimatedTerminal />
        </motion.div>
      </div>
    </section>
  )
}
