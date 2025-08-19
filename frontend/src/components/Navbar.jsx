import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Universe', href: '#universe' },
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#community' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-voice-dark/95 backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-voice-purple to-voice-cyan rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">V</span>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-voice-purple to-voice-cyan bg-clip-text text-transparent">
              VoiceVerse
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-voice-purple to-voice-cyan"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-voice-purple to-voice-cyan text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-voice-purple/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-voice-dark/95 backdrop-blur-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="w-full bg-gradient-to-r from-voice-purple to-voice-cyan text-white px-6 py-3 rounded-full font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Join Waitlist
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
