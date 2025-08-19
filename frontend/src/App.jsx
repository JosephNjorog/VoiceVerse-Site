import React, { useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Universe from './sections/Universe'
import Features from './sections/Features'
import Community from './sections/Community'
import News from './sections/News'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal'
import FloatingCTA from './components/FloatingCTA'

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const openWaitlist = () => setIsWaitlistOpen(true)
  const closeWaitlist = () => setIsWaitlistOpen(false)

  return (
    <div className="min-h-screen bg-voice-dark text-white">
      <Navbar onJoinWaitlist={openWaitlist} />
      <main>
        <Hero onJoinWaitlist={openWaitlist} />
        <About />
        <Universe />
        <Features />
        <Community />
        <News />
        <Contact />
      </main>
      <Footer onJoinWaitlist={openWaitlist} />
      
      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
      
      {/* Floating CTA */}
      <FloatingCTA onJoinWaitlist={openWaitlist} />
    </div>
  )
}

export default App
