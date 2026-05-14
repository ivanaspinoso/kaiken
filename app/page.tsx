import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import DateElGustoSection from '@/components/DateElGustoSection'
import SaboresSection from '@/components/SaboresSection'
import TentasteSection from '@/components/TentasteSection'
import DeliverySection from '@/components/DeliverySection'
import HistoriaSection from '@/components/HistoriaSection'
import FranquiciasSection from '@/components/FranquiciasSection'
import GustosSection from '@/components/GustosSection'
import InstagramSection from '@/components/InstagramSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <HistoriaSection />
      
      <DateElGustoSection />
      
    
      <SaboresSection />
      <DeliverySection />
      <GustosSection />
      {/* <TentasteSection /> */}
    
      
      
      {/* <FranquiciasSection /> */}
     
      <InstagramSection />
      <Footer />
    </main>
  )
}
