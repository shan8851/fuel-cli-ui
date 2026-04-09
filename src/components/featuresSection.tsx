import { motion } from "motion/react"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { FeatureCard } from "@/components/featureCard.tsx"
import { COMMANDS } from "@/data/commands.ts"

export const FeaturesSection = () => (
  <section className="py-24 px-6" id="features">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="Commands & features"
          subtitle="Two commands cover the main use cases. Every response includes data-quality advisories so you know what you're working with."
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COMMANDS.map((command, index) => (
          <motion.div
            key={command.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <FeatureCard {...command} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 rounded-lg border border-border bg-surface px-5 py-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-text-muted text-sm">
          Stable JSON envelope on every response: <code className="text-accent font-mono text-xs">{"{ ok, schemaVersion, command, requestedAt, data }"}</code>
        </p>
      </motion.div>
    </div>
  </section>
)
