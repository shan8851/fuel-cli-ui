import { motion } from "motion/react"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { CodeBlock } from "@/components/codeBlock.tsx"

export const SkillSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Agent Skill" />
      </motion.div>

      <motion.p
        className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Install the skill so your agent knows every command. Grab it from the
        skills collection for any agent framework.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.div
          className="rounded-lg border border-border bg-surface p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <h3 className="text-text font-mono font-semibold text-sm mb-3">
            Skills Collection
          </h3>
          <CodeBlock code="npx skills add shan8851/agent-skills --skill fuel-cli" />
          <p className="text-text-dim text-xs mt-3">For any agent framework</p>
          <a
            href="https://skills.shan8851.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs text-text-muted hover:text-accent transition-colors"
          >
            Browse all skills →
          </a>
        </motion.div>

        <motion.div
          className="rounded-lg border border-border bg-surface p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <h3 className="text-text font-mono font-semibold text-sm mb-3">
            Hermes / Nigel
          </h3>
          <CodeBlock code="hermes skills enable fuel-cli" />
          <p className="text-text-dim text-xs mt-3">Built-in skill for Hermes agents</p>
          <a
            href="https://github.com/shan8851/agent-skills/tree/main/skills/fuel-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs text-text-muted hover:text-accent transition-colors"
          >
            View source →
          </a>
        </motion.div>
      </div>
    </div>
  </section>
)
