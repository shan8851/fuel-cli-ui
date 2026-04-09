import { Header } from "@/components/header.tsx"
import { HeroSection } from "@/components/heroSection.tsx"
import { InstallSection } from "@/components/installSection.tsx"
import { FeaturesSection } from "@/components/featuresSection.tsx"
import { ExamplesSection } from "@/components/examplesSection.tsx"
import { AgentSection } from "@/components/agentSection.tsx"
import { SkillSection } from "@/components/skillSection.tsx"
import { Footer } from "@/components/footer.tsx"

export const App = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <InstallSection />
      <FeaturesSection />
      <ExamplesSection />
      <AgentSection />
      <SkillSection />
    </main>
    <Footer />
  </>
)
