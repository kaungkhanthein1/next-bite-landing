import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { LoyaltySection } from './components/LoyaltySection'
import { ReorderSection } from './components/ReorderSection'
import { QrSection } from './components/QrSection'
import { ContactForm } from './components/ContactForm'

function App() {
  return (
    <div className="page-gradient relative min-h-screen overflow-hidden text-white">
      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-6 sm:px-6 sm:pt-10 lg:gap-20 lg:px-8 lg:pt-14">
          <HeroSection />
          <LoyaltySection />
          <ReorderSection />
          <QrSection />
          <ContactForm />
        </main>

        
      </div>
    </div>
  )
}

export default App
