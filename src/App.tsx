import { BusinessInfo } from './components/BusinessInfo'
import { ContactForm } from './components/ContactForm'
import { DeviceShowcase } from './components/DeviceShowcase'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { RepairEstimator } from './components/RepairEstimator'

export function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DeviceShowcase />
        <RepairEstimator />
        <BusinessInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
