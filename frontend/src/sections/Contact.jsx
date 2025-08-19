import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'Get in touch with our team',
      contact: 'hello@voiceverse.io',
      gradient: 'from-voice-purple to-voice-pink'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      gradient: 'from-voice-cyan to-voice-purple'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      description: 'Our headquarters',
      contact: 'San Francisco, CA',
      gradient: 'from-voice-pink to-voice-cyan'
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-voice-gray to-voice-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-voice-cyan to-voice-purple bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about VoiceVerse? Want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="text-3xl font-display font-bold mb-6 text-white">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're interested in partnerships, investment opportunities, or just want to learn more about VoiceVerse, we're here to help. Our team is passionate about building the future of voice-powered digital experiences.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-voice-gray/30 rounded-2xl p-6 backdrop-blur-sm border border-voice-purple/20 hover:border-voice-cyan/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} p-0.5`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full h-full bg-voice-dark rounded-xl flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-white group-hover:text-voice-cyan transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-1">{info.description}</p>
                      <p className="text-voice-cyan font-semibold">{info.contact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 p-6 bg-gradient-to-r from-voice-purple/20 to-voice-cyan/20 rounded-2xl backdrop-blur-sm border border-voice-cyan/20"
            >
              <h4 className="text-xl font-display font-bold mb-4 text-white">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {['Discord', 'Twitter', 'LinkedIn', 'Medium'].map((platform, index) => (
                  <motion.button
                    key={platform}
                    className="px-4 py-2 bg-voice-dark/50 rounded-lg text-voice-cyan hover:text-white hover:bg-voice-dark/70 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {platform}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-voice-gray/30 rounded-2xl p-8 backdrop-blur-sm border border-voice-purple/20">
              <h3 className="text-3xl font-display font-bold mb-6 text-white">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-voice-dark/50 border border-voice-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-voice-cyan transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-voice-dark/50 border border-voice-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-voice-cyan transition-colors duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-voice-dark/50 border border-voice-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-voice-cyan transition-colors duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-voice-dark/50 border border-voice-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-voice-cyan transition-colors duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-voice-purple to-voice-pink text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-voice-purple/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.0 }}
                >
                  <span>Send Message</span>
                  <PaperAirplaneIcon className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
