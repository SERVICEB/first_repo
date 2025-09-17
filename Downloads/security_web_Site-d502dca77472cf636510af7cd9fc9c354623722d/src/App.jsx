import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Sectors from './components/Sectors'
import CTAContact from './components/CTAContact'
import A_propos from './components/A_propos'
import Footer from './components/Footer'
import SocialFooter from './components/SocialFooter'
import SocialMedia from './components/SocialMedia'
import WhatsAppButton from './components/WhatsAppButton'
//import WhatsAppContactForm from './components/WhatsAppContactForm'

export default function App(){
  return (
    <>
      {/* Background global fixe */}
      <div
        className="fixed inset-0 -z-50 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bacground.png')",
        }}
        aria-hidden="true"
      />
      {/* Le reste de ton site */}
      <div className="bg-slate-950 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Sectors />
          <A_propos /> {/* Add this line */}
          <CTAContact />
          <WhatsAppButton />
          {/* <WhatsAppContactForm /> */}
          <SocialFooter />
        </main>
        <Footer />
      </div>
    </>
  )
}