import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  XMarkIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  UserIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    company: '',
    interests: [],
    referralSource: '',
    newsletter: true
  })
  
  const [formStatus, setFormStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  })

  const roles = [
    'Gamer/Player',
    'Developer',
    'Investor',
    'Content Creator',
    'Business Executive',
    'Entrepreneur',
    'Student',
    'Other'
  ]

  const interests = [
    'Alpha/Beta Testing',
    'Voice Technology',
    'Blockchain/NFTs',
    'Community Events',
    'Investment Opportunities',
    'Partnership',
    'Technical Documentation',
    'Content Creation'
  ]

  const referralSources = [
    'Social Media',
    'Friend/Colleague',
    'Gaming Community',
    'Tech Blog/News',
    'Search Engine',
    'Conference/Event',
    'Cryptocurrency Community',
    'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ type: 'loading', message: 'Adding you to the waitlist...' })
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFormStatus({ 
        type: 'success', 
        message: 'Welcome to VoiceVerse! You\'re now on our exclusive waitlist. Check your email for confirmation and next steps.' 
      })
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          role: '',
          company: '',
          interests: [],
          referralSource: '',
          newsletter: true
        })
        setFormStatus({ type: '', message: '' })
        onClose()
      }, 3000)
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, something went wrong. Please try again or contact us directly.' 
      })
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-voice-dark border border-voice-purple/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-300 z-10"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="p-8 pb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-voice-purple to-voice-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-2">
                  <span className="bg-gradient-to-r from-voice-purple to-voice-cyan bg-clip-text text-transparent">
                    Join the VoiceVerse Waitlist
                  </span>
                </h2>
                <p className="text-gray-300">
                  Be among the first to experience the future of voice-powered digital interaction. 
                  Waitlist members get exclusive early access and special perks.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  '🚀 Early Alpha Access',
                  '🎁 Exclusive NFT Drops',
                  '💎 Founder Benefits',
                  '👥 VIP Community Access'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-voice-gray/30 rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-sm font-medium text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-voice-cyan mb-2">
                    <UserIcon className="w-4 h-4 inline mr-1" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-voice-gray/50 border border-voice-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-voice-cyan transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-voice-cyan mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-voice-gray/50 border border-voice-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-voice-cyan transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-voice-cyan mb-2">
                  <EnvelopeIcon className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-voice-gray/50 border border-voice-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-voice-cyan transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Role & Company */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-voice-cyan mb-2">
                    Role/Profession *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-voice-gray/50 border border-voice-purple/30 rounded-lg text-white focus:outline-none focus:border-voice-cyan transition-colors duration-300"
                  >
                    <option value="">Select your role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-voice-cyan mb-2">
                    <BriefcaseIcon className="w-4 h-4 inline mr-1" />
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-voice-gray/50 border border-voice-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-voice-cyan transition-colors duration-300"
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-semibold text-voice-cyan mb-3">
                  What interests you most? (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((interest) => (
                    <motion.button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        formData.interests.includes(interest)
                          ? 'bg-voice-purple text-white'
                          : 'bg-voice-gray/30 text-gray-400 hover:text-white hover:bg-voice-gray/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {interest}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Referral Source */}
              <div>
                <label className="block text-sm font-semibold text-voice-cyan mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-voice-gray/50 border border-voice-purple/30 rounded-lg text-white focus:outline-none focus:border-voice-cyan transition-colors duration-300"
                >
                  <option value="">Select source</option>
                  {referralSources.map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-voice-purple bg-voice-gray border-voice-purple/30 rounded focus:ring-voice-purple focus:ring-2"
                />
                <label className="text-sm text-gray-300">
                  Subscribe to our newsletter for updates and exclusive content
                </label>
              </div>

              {/* Status Message */}
              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-3 p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                      : formStatus.type === 'error'
                      ? 'bg-red-500/20 border border-red-500/30 text-red-400'
                      : 'bg-voice-purple/20 border border-voice-purple/30 text-voice-purple'
                  }`}
                >
                  {formStatus.type === 'success' && <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />}
                  {formStatus.type === 'error' && <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />}
                  {formStatus.type === 'loading' && (
                    <div className="w-5 h-5 border-2 border-voice-purple/30 border-t-voice-purple rounded-full animate-spin flex-shrink-0" />
                  )}
                  <span className="text-sm">{formStatus.message}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="w-full bg-gradient-to-r from-voice-purple to-voice-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-voice-purple/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: formStatus.type === 'loading' ? 1 : 1.02, y: formStatus.type === 'loading' ? 0 : -2 }}
                whileTap={{ scale: formStatus.type === 'loading' ? 1 : 0.98 }}
              >
                {formStatus.type === 'loading' ? 'Joining Waitlist...' : 'Join the Waitlist'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default WaitlistModal
