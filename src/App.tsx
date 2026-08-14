import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { ContactForm } from './components/ContactForm'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0F19] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[900px] bg-[url('/assets/gradient.png')] bg-[length:100%_auto] bg-top bg-no-repeat sm:h-[1050px] lg:h-[1200px]"
      />
      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-6 sm:px-6 sm:pt-10 lg:gap-20 lg:px-8 lg:pt-14">
          <HeroSection />
          <FeaturesSection />
          <ContactForm />
        </main>
      </div>
    </div>
  )
}

export default App
