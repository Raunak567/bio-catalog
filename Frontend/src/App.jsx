import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SearchFilter from './components/SearchFilter'
import Stats from './components/Stats'
import SpeciesCatalog from './components/SpeciesCatalog'
import EndangeredSection from './components/EndangeredSection'
import MicrobesSection from './components/MicrobesSection'
import About from './components/About'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <HeroSection />
      <SearchFilter />
      <Stats />
      <SpeciesCatalog />
      <EndangeredSection />
      <MicrobesSection />
      <About />
      <Footer />
      <Modal />
    </div>
  )
}
