
import ExtraFeatures from "@/components/ExtraFeatures"
import Feature from "@/components/Features"
import Hero from "@/components/Hero"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Feature autoCycle={true} cycleMs={4000} />

      {/* Extra Features Section */}
      <ExtraFeatures />
    </>
  )
}
