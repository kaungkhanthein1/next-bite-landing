import cornerTopRight from './assets/corner-shape-top-right.png'
import cornerBottomLeft from './assets/corner-shape-bottom-left.png'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { QrSection } from './components/QrSection'
import { FeaturesSection } from './components/FeaturesSection'
import { ContactForm } from './components/ContactForm'

function App() {
  return (
    <div className="relative overflow-hidden">
      <img
        src={cornerTopRight}
        alt=""
        className="absolute top-0 right-0 w-24 sm:w-32 md:w-56 h-auto pointer-events-none select-none z-0"
      />
      <img
        src={cornerBottomLeft}
        alt=""
        className="absolute bottom-0 left-0 w-20 sm:w-28 md:w-44 h-auto pointer-events-none select-none z-0"
      />
      <Navbar />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-28 md:pb-8">
        <HeroSection />
        <QrSection />
        <FeaturesSection />
        <ContactForm />
      </div>
    </div>
  )
}

export default App
