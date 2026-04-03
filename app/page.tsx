import { LanguageProvider } from '@/lib/LanguageContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CTASpots from '@/components/CTASpots'
import EconomicSurge from '@/components/EconomicSurge'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import OurWork from '@/components/OurWork'
import ClaimSpot from '@/components/ClaimSpot'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#080603]">
        <Header />
        <Hero />
        <CTASpots />
        <EconomicSurge />
        <Pricing />
        <HowItWorks />
        <OurWork />
        <ClaimSpot />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
