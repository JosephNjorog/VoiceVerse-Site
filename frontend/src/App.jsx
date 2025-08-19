import React from 'react'
import { motion } from 'framer-motion'
import Hero from './sections/Hero'
import About from './sections/About'
import Universe from './sections/Universe'
import Features from './sections/Features'
import Community from './sections/Community'
import News from './sections/News'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-voice-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Universe />
        <Features />
        <Community />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
