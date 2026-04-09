import { motion } from "motion/react"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { CodeBlock } from "@/components/codeBlock.tsx"

const NPM_PACKAGE = "@shan8851/fuel-cli"

export const InstallSection = () => (
  <section className="py-24 px-6" id="install">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="Get started"
          subtitle="Install globally, set your Fuel Finder credentials, and you're good to go. BYOK — bring your own key."
        />
      </motion.div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div>
          <p className="text-text-muted text-sm font-medium mb-2">Install</p>
          <CodeBlock code={`npm install -g ${NPM_PACKAGE}`} />
        </div>

        <div>
          <p className="text-text-muted text-sm font-medium mb-2">Set credentials</p>
          <div className="rounded-lg border border-border bg-terminal-bg p-4 font-mono text-sm space-y-1">
            <p className="text-terminal-comment"># Register at https://www.fuel-finder.service.gov.uk</p>
            <p className="text-terminal-output">{"export FUEL_FINDER_CLIENT_ID=your_client_id"}</p>
            <p className="text-terminal-output">{"export FUEL_FINDER_CLIENT_SECRET=your_client_secret"}</p>
          </div>
        </div>

        <div>
          <p className="text-text-muted text-sm font-medium mb-2">Run</p>
          <CodeBlock code={'fuel near "SE1 9SG" --fuel E10'} />
        </div>
      </motion.div>
    </div>
  </section>
)
