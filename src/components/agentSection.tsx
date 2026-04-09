import { motion } from "motion/react"
import { AlertTriangle, Braces, Terminal } from "lucide-react"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { TerminalWindow } from "@/components/terminalWindow.tsx"
import {
  AGENT_JSON_EXAMPLE,
  JSON_ERROR_EXAMPLE,
} from "@/data/terminalExamples.ts"

const AGENT_FEATURES = [
  {
    icon: Braces,
    title: "Stable JSON envelope",
    description:
      "Consistent ok, schemaVersion, command, requestedAt, and data across every command",
  },
  {
    icon: Terminal,
    title: "Output mode that matches context",
    description:
      "Readable text in a TTY, JSON when piped, with --json / --text when you want to force it",
  },
  {
    icon: AlertTriangle,
    title: "Structured JSON errors",
    description:
      "Errors include a machine-friendly code, message, and retryable flag — no parsing required",
  },
] as const

export const AgentSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="Built for AI agents"
          subtitle="The same top-level shape everywhere, data-quality advisories baked in, and --output projection so agents can grab one field without parsing the full response."
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Fuel price lookups often end up in shell pipelines, scripts, or
            the next agent step. The CLI behaves sensibly by default — text for
            humans, JSON for machines — with a boring, predictable contract when
            you need to parse it.
          </p>

          <div className="space-y-4">
            {AGENT_FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-accent-glow text-accent shrink-0">
                  <feature.icon size={16} />
                </div>
                <div>
                  <h4 className="text-text font-medium text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-text-muted text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TerminalWindow title="success envelope" lines={AGENT_JSON_EXAMPLE} />
          <TerminalWindow title="structured error" lines={JSON_ERROR_EXAMPLE} />
        </motion.div>
      </div>
    </div>
  </section>
)
