import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import BrandValue from '@/components/BrandValue'
import ProcessSection from '@/components/ProcessSection'
import TrustProofs from '@/components/TrustProofs'
import MarketRegions from '@/components/MarketRegions'
import MaterialQuality from '@/components/MaterialQuality'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <BrandValue />
        <ProcessSection />
        <TrustProofs />
        <MaterialQuality />
        <MarketRegions />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
