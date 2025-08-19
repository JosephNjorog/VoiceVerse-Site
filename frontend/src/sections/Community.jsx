import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import NewsletterSignup from '../components/NewsletterSignup'

const Community = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const communityStats = [
    { number: '50K+', label: 'Discord Members', color: 'text-voice-purple' },
    { number: '25K+', label: 'Twitter Followers', color: 'text-voice-cyan' },
    { number: '15K+', label: 'Waitlist Users', color: 'text-voice-pink' },
    { number: '100+', label: 'Countries', color: 'text-voice-purple' },
  ]

  const socialPlatforms = [
    {
      name: 'Discord',
      description: 'Join our vibrant community for real-time discussions, announcements, and exclusive events.',
      icon: '💬',
      members: '50K+ Members',
      gradient: 'from-purple-500 to-purple-700',
      cta: 'Join Discord'
    },
    {
      name: 'Twitter',
      description: 'Follow us for the latest updates, behind-the-scenes content, and community highlights.',
      icon: '🐦',
      members: '25K+ Followers',
      gradient: 'from-cyan-500 to-blue-500',
      cta: 'Follow Us'
    },
    {
      name: 'Medium',
      description: 'Deep dives into our technology, development progress, and vision for the future.',
      icon: '📝',
      members: '5K+ Readers',
      gradient: 'from-green-500 to-emerald-600',
      cta: 'Read Blog'
    },
    {
      name: 'YouTube',
      description: 'Watch developer streams, community events, and behind-the-scenes development footage.',
      icon: '📺',
      members: '10K+ Subscribers',
      gradient: 'from-red-500 to-red-600',
      cta: 'Subscribe'
    }
  ]

  const events = [
    {
      title: 'Community AMA',
      date: 'Every Friday',
      time: '3 PM EST',
      description: 'Ask anything about VoiceVerse development, roadmap, and future plans.',
      type: 'Weekly'
    },
    {
      title: 'Alpha Testing',
      date: 'Q1 2026',
      time: 'TBA',
      description: 'Exclusive access to early builds for community members and feedback sessions.',
      type: 'Exclusive'
    },
    {
      title: 'Developer Streams',
      date: 'Tuesdays',
      time: '7 PM EST',
      description: 'Watch our development process live and interact with the team.',
      type: 'Weekly'
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
    <section id="community" ref={ref} className="py-20 bg-gradient-to-b from-voice-dark to-voice-gray">
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
              Join Our Community
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a revolutionary community where every voice matters and every member helps shape the future of VoiceVerse.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center bg-voice-gray/30 rounded-2xl p-6 backdrop-blur-sm border border-voice-purple/20 hover:border-voice-cyan/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Platforms */}
        <motion.div
          className="mb-16"
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-3xl font-display font-bold text-center mb-12 text-white"
          >
            Connect With Us
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-voice-gray/30 rounded-2xl p-8 backdrop-blur-sm border border-voice-purple/20 hover:border-voice-cyan/40 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{platform.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-2xl font-display font-bold text-white group-hover:text-voice-cyan transition-colors duration-300">
                        {platform.name}
                      </h4>
                      <span className="text-sm text-voice-cyan font-medium">{platform.members}</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {platform.description}
                    </p>
                    <motion.button
                      className={`bg-gradient-to-r ${platform.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {platform.cta}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-3xl font-display font-bold text-center mb-12 text-white"
          >
            Upcoming Events
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-voice-purple/20 to-voice-cyan/20 rounded-2xl p-6 backdrop-blur-sm border border-voice-cyan/20 hover:border-voice-purple/40 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-display font-bold text-white">{event.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === 'Weekly' ? 'bg-voice-purple/30 text-voice-purple' :
                    event.type === 'Exclusive' ? 'bg-voice-pink/30 text-voice-pink' :
                    'bg-voice-cyan/30 text-voice-cyan'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <div className="text-voice-cyan font-semibold mb-1">{event.date}</div>
                <div className="text-gray-400 text-sm mb-3">{event.time}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-voice-purple/20 to-voice-pink/20 rounded-2xl p-8 backdrop-blur-sm border border-voice-purple/20 text-center"
          >
            <h4 className="text-3xl font-display font-bold mb-4 text-white">
              Stay in the Loop
            </h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive updates, early access opportunities, and behind-the-scenes content delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup size="large" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community
