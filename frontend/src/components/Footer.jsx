import React from 'react'
import { motion } from 'framer-motion'
import NewsletterSignup from './NewsletterSignup'

const Footer = ({ onJoinWaitlist }) => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Universe', href: '#universe' },
      { name: 'Roadmap', href: '#roadmap' },
      { name: 'Documentation', href: '#docs' },
    ],
    community: [
      { name: 'Discord', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Medium', href: '#' },
      { name: 'YouTube', href: '#' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  }

  return (
    <footer className="bg-voice-dark border-t border-voice-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-6"
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
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future of voice-powered digital experiences where sound shapes reality and every voice matters.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-voice-cyan">Stay Updated</p>
              <NewsletterSignup size="compact" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-voice-cyan transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-voice-cyan transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-voice-cyan transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-voice-cyan transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { name: 'Discord', icon: '💬', color: 'hover:text-purple-400' },
            { name: 'Twitter', icon: '🐦', color: 'hover:text-blue-400' },
            { name: 'Medium', icon: '📝', color: 'hover:text-green-400' },
            { name: 'YouTube', icon: '📺', color: 'hover:text-red-400' },
            { name: 'LinkedIn', icon: '💼', color: 'hover:text-blue-500' },
            { name: 'GitHub', icon: '⚡', color: 'hover:text-gray-300' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              className={`text-2xl text-gray-500 ${social.color} transition-colors duration-300`}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-voice-purple/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 VoiceVerse. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with ❤️ for the future</span>
              <span>•</span>
              <span className="text-voice-cyan">Powered by Avalanche</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-400">Status:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-voice-purple via-voice-pink to-voice-cyan"></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-voice-cyan/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer
