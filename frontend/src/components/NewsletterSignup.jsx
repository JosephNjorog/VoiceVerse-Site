import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const NewsletterSignup = ({ className = '', size = 'default' }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus({ type: 'loading', message: 'Subscribing...' })
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus({ 
        type: 'success', 
        message: 'Welcome aboard! Check your email for confirmation.' 
      })
      setEmail('')
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 3000)
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      })
    }
  }

  const isCompact = size === 'compact'
  const isLarge = size === 'large'

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div className={`flex ${isCompact ? 'flex-row space-x-2' : 'flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'}`}>
          <div className="flex-1 relative">
            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={status.type === 'loading'}
              className={`w-full pl-10 ${
                isCompact ? 'pr-4 py-2 text-sm' : 
                isLarge ? 'pr-6 py-4 text-lg' : 'pr-4 py-3'
              } bg-voice-dark/50 border border-voice-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-voice-cyan transition-colors duration-300 disabled:opacity-50`}
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={status.type === 'loading' || !email}
            className={`${
              isCompact ? 'px-4 py-2 text-sm' :
              isLarge ? 'px-8 py-4 text-lg' : 'px-6 py-3'
            } bg-gradient-to-r from-voice-purple to-voice-cyan text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-voice-purple/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 whitespace-nowrap`}
            whileHover={{ scale: status.type === 'loading' ? 1 : 1.05 }}
            whileTap={{ scale: status.type === 'loading' ? 1 : 0.95 }}
          >
            {status.type === 'loading' ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Subscribing...</span>
              </>
            ) : (
              <>
                <SparklesIcon className="w-4 h-4" />
                <span>Subscribe</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Status Message */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center space-x-2 ${isCompact ? 'text-xs' : 'text-sm'} ${
              status.type === 'success' 
                ? 'text-green-400'
                : status.type === 'error'
                ? 'text-red-400'
                : 'text-voice-purple'
            }`}
          >
            {status.type === 'success' && <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />}
            {status.type === 'error' && <ExclamationTriangleIcon className="w-4 h-4 flex-shrink-0" />}
            <span>{status.message}</span>
          </motion.div>
        )}

        {/* Privacy Note */}
        {!isCompact && (
          <p className="text-xs text-gray-400">
            We respect your privacy. Unsubscribe at any time. No spam, ever.
          </p>
        )}
      </form>
    </div>
  )
}

export default NewsletterSignup
