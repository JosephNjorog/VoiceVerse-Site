import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const News = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const newsItems = [
    {
      id: 1,
      title: 'VoiceVerse Alpha Testing Begins Q1 2026',
      excerpt: 'We\'re excited to announce that alpha testing for VoiceVerse will begin in Q1 2026. Community members will get first access to experience revolutionary voice-powered mechanics.',
      date: 'Dec 15, 2025',
      category: 'Development',
      image: '🎮',
      readTime: '3 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with Avalanche Foundation',
      excerpt: 'Official partnership announced with Avalanche to leverage their high-speed, low-cost blockchain infrastructure for seamless gaming experiences.',
      date: 'Dec 10, 2025',
      category: 'Partnership',
      image: '🤝',
      readTime: '2 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Community Governance Token Launch',
      excerpt: 'Introducing the VOICE token for community governance. Token holders will vote on game features, storylines, and ecosystem decisions.',
      date: 'Dec 5, 2025',
      category: 'Tokenomics',
      image: '🪙',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 4,
      title: 'AI Voice Recognition Technology Demo',
      excerpt: 'Behind-the-scenes look at our cutting-edge AI that analyzes voice patterns to create unique gameplay mechanics for each player.',
      date: 'Nov 28, 2025',
      category: 'Technology',
      image: '🔬',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 5,
      title: '50K Discord Members Milestone',
      excerpt: 'Our community has reached 50,000 Discord members! Special celebration events and exclusive NFT drops coming this week.',
      date: 'Nov 20, 2025',
      category: 'Community',
      image: '🎉',
      readTime: '2 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Faction System Deep Dive',
      excerpt: 'Explore the three major factions in VoiceVerse: Resonance Guardians, Echo Hunters, and Sound Weavers. Each offers unique gameplay experiences.',
      date: 'Nov 15, 2025',
      category: 'Gameplay',
      image: '⚔️',
      readTime: '6 min read',
      featured: false
    }
  ]

  const categories = ['All', 'Development', 'Partnership', 'Technology', 'Community', 'Gameplay', 'Tokenomics']

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
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  return (
    <section id="news" ref={ref} className="py-20 bg-voice-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-voice-purple to-voice-cyan bg-clip-text text-transparent">
              Latest News & Updates
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay up to date with the latest developments, partnerships, and community milestones.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={fadeInUp}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-voice-purple to-voice-cyan text-white'
                  : 'bg-voice-gray/50 text-gray-400 hover:text-white hover:bg-voice-gray/70'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {newsItems.filter(item => item.featured).map((article, index) => (
            <motion.article
              key={article.id}
              variants={fadeInUp}
              className="group bg-voice-gray/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-voice-purple/20 hover:border-voice-cyan/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Article Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-voice-purple/30 to-voice-cyan/30 flex items-center justify-center">
                <div className="text-6xl">{article.image}</div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-voice-dark/70 backdrop-blur-sm rounded-full text-xs font-semibold text-voice-cyan">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-voice-cyan transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <motion.button
                  className="inline-flex items-center space-x-2 text-voice-cyan hover:text-white font-semibold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>Read More</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Regular Articles Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {newsItems.filter(item => !item.featured).map((article, index) => (
            <motion.article
              key={article.id}
              variants={fadeInUp}
              className="group bg-voice-gray/20 rounded-xl p-6 backdrop-blur-sm border border-voice-purple/10 hover:border-voice-cyan/30 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Article Icon */}
              <div className="text-3xl mb-4">{article.image}</div>

              {/* Category & Date */}
              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <span className="px-2 py-1 bg-voice-purple/20 rounded text-voice-purple font-medium">
                  {article.category}
                </span>
                <span>{article.date}</span>
              </div>

              {/* Title */}
              <h4 className="text-lg font-display font-bold mb-3 text-white group-hover:text-voice-cyan transition-colors duration-300 line-clamp-2">
                {article.title}
              </h4>

              {/* Excerpt */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              {/* Read More */}
              <motion.button
                className="text-voice-cyan hover:text-white text-sm font-semibold transition-colors duration-300"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Read More →
              </motion.button>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-gradient-to-r from-voice-purple/20 to-voice-cyan/20 rounded-2xl p-8 backdrop-blur-sm border border-voice-cyan/20">
            <h3 className="text-3xl font-display font-bold mb-4 text-white">
              Never Miss an Update
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive insights, early announcements, and behind-the-scenes content.
            </p>
            <motion.button
              className="bg-gradient-to-r from-voice-purple to-voice-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-voice-purple/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Newsletter
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default News
