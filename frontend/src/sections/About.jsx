import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-voice-dark to-voice-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-voice-purple to-voice-cyan bg-clip-text text-transparent">
              About VoiceVerse
            </span>
          </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're pioneering the next generation of interactive technology, where sound, voice, 
            and blockchain converge to create unprecedented digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-3xl font-display font-bold mb-4 text-white">
                Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                VoiceVerse represents a paradigm shift in digital interaction. We believe that sound and voice 
                are the most natural and powerful forms of human expression, and we're harnessing cutting-edge 
                technology to unlock their full potential in the digital realm.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-3xl font-display font-bold mb-4 text-white">
                Innovation at Core
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team combines expertise in artificial intelligence, blockchain technology, game development, 
                and sound engineering to create experiences that transcend traditional boundaries between 
                gaming, social interaction, and digital ownership.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-display font-bold mb-4 text-white">
                Future-Forward Vision
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're not just building a game or platform—we're crafting a living ecosystem where every voice 
                matters, every action has consequence, and every participant helps shape the future of digital interaction.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Stats & Values */}
          <motion.div
            className="space-y-8"
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Company Values */}
            <motion.div variants={fadeInUp} className="bg-voice-gray/50 rounded-2xl p-8 backdrop-blur-sm border border-voice-purple/20">
              <h4 className="text-2xl font-display font-semibold mb-6 text-voice-cyan">Our Values</h4>
              <div className="space-y-4">
                {[
                  { title: 'Innovation', desc: 'Pushing the boundaries of what\'s possible' },
                  { title: 'Community', desc: 'Building together, growing together' },
                  { title: 'Transparency', desc: 'Open development, honest communication' },
                  { title: 'Inclusivity', desc: 'Every voice deserves to be heard' },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2 h-2 bg-voice-purple rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-white">{value.title}</h5>
                      <p className="text-gray-400 text-sm">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Team Stats */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-voice-purple/20 to-voice-cyan/20 rounded-2xl p-8 backdrop-blur-sm border border-voice-cyan/20">
              <h4 className="text-2xl font-display font-semibold mb-6 text-voice-pink">Team Excellence</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Years Combined Experience', value: '150+' },
                  { label: 'Games Shipped', value: '25+' },
                  { label: 'AI Patents', value: '12' },
                  { label: 'Blockchain Projects', value: '8' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-voice-cyan mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="text-center">
              <motion.button
                className="bg-gradient-to-r from-voice-purple to-voice-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-voice-purple/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Our Team
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
