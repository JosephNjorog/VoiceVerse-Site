import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  PlusIcon, 
  XMarkIcon,
  SparklesIcon,
  UserGroupIcon,
  BellIcon
} from '@heroicons/react/24/outline'

const FloatingCTA = ({ onJoinWaitlist }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling down 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ctaOptions = [
    {
      icon: SparklesIcon,
      label: 'Join Waitlist',
      action: onJoinWaitlist,
      gradient: 'from-voice-purple to-voice-pink'
    },
    {
      icon: UserGroupIcon,
      label: 'Join Discord',
      action: () => window.open('#', '_blank'),
      gradient: 'from-voice-cyan to-voice-purple'
    },
    {
      icon: BellIcon,
      label: 'Get Updates',
      action: () => document.getElementById('community').scrollIntoView({ behavior: 'smooth' }),
      gradient: 'from-voice-pink to-voice-cyan'
    }
  ]

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="mb-4 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {ctaOptions.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  option.action()
                  setIsExpanded(false)
                }}
                className={`flex items-center space-x-3 bg-gradient-to-r ${option.gradient} text-white px-4 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 min-w-[160px]`}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <option.icon className="w-5 h-5" />
                <span className="text-sm">{option.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-voice-purple to-voice-cyan text-white flex items-center justify-center hover:shadow-lg hover:shadow-voice-purple/25 transition-all duration-300 ${
          isExpanded ? 'rotate-45' : ''
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isExpanded ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {isExpanded ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <PlusIcon className="w-6 h-6" />
        )}
      </motion.button>

      {/* Pulse Effect */}
      {!isExpanded && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-voice-purple to-voice-cyan animate-ping opacity-20" />
      )}
    </motion.div>
  )
}

export default FloatingCTA
