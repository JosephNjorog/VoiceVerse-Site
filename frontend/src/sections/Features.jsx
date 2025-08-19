import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  SpeakerWaveIcon, 
  CubeTransparentIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const Features = ({ onJoinWaitlist }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: SpeakerWaveIcon,
      title: 'Voice-Powered Mechanics',
      description: 'Revolutionary gameplay where your voice literally becomes part of your character\'s power. AI-driven systems analyze voice tones to create tactical resonance.',
      gradient: 'from-voice-purple to-voice-pink'
    },
    {
      icon: CubeTransparentIcon,
      title: 'Blockchain Integration',
      description: 'Built on Avalanche for true ownership, fairness, and transparency. All assets exist as NFTs with complete control and tradability.',
      gradient: 'from-voice-cyan to-voice-purple'
    },
    {
      icon: UserGroupIcon,
      title: 'Community Governance',
      description: 'Players vote on future story arcs, seasonal events, and economy adjustments. The world grows organically, shaped by its inhabitants.',
      gradient: 'from-voice-pink to-voice-cyan'
    },
    {
      icon: LightBulbIcon,
      title: 'AI-Driven World',
      description: 'Dynamic storylines that evolve based on player actions. NPCs adapt to global interactions, making the world feel alive and reactive.',
      gradient: 'from-voice-purple to-voice-cyan'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Fair',
      description: 'Immutable records of achievements and ownership. High-speed, low-cost transactions that enhance rather than interfere with gameplay.',
      gradient: 'from-voice-cyan to-voice-pink'
    },
    {
      icon: ChartBarIcon,
      title: 'Player-Driven Economy',
      description: 'Create, trade, and profit from your creations. Seasonal drops and limited editions become highly sought-after collectibles.',
      gradient: 'from-voice-pink to-voice-purple'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="features" ref={ref} className="py-20 bg-voice-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-voice-purple via-voice-pink to-voice-cyan bg-clip-text text-transparent">
              Revolutionary Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge technology that redefines what's possible in digital interaction and gaming.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full bg-voice-gray/30 rounded-2xl p-8 backdrop-blur-sm border border-voice-purple/20 hover:border-voice-cyan/40 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="w-full h-full bg-voice-dark rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-voice-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-white">
            Powered by Cutting-Edge Technology
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {[
              { name: 'Avalanche', color: 'text-red-400' },
              { name: 'Three.js', color: 'text-green-400' },
              { name: 'AI/ML', color: 'text-blue-400' },
              { name: 'WebRTC', color: 'text-purple-400' },
              { name: 'React', color: 'text-cyan-400' },
              { name: 'Node.js', color: 'text-yellow-400' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className={`px-6 py-3 bg-voice-gray/50 rounded-full ${tech.color} font-semibold backdrop-blur-sm border border-voice-purple/20`}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-voice-purple/20 to-voice-cyan/20 rounded-2xl p-8 backdrop-blur-sm border border-voice-cyan/20"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h4 className="text-2xl font-display font-semibold mb-4 text-voice-cyan">
              Ready to Experience the Future?
            </h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of early adopters who are already shaping the VoiceVerse. 
              Be part of the revolution where your voice literally matters.
            </p>
            <motion.button
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-voice-purple to-voice-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-voice-purple/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Early Access
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
