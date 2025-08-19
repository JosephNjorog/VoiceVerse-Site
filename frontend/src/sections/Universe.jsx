import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, OrbitControls, Environment, Sphere } from '@react-three/drei'

// 3D Echo Node Component
const EchoNode = ({ position, color, size = 1 }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.scale.setScalar(size + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

// Faction Territory Visualization
const FactionTerritory = () => {
  const factions = [
    { name: 'Resonance Guardians', color: '#6366f1', position: [-3, 2, 0] },
    { name: 'Echo Hunters', color: '#ec4899', position: [3, -1, 0] },
    { name: 'Sound Weavers', color: '#06b6d4', position: [0, 3, -2] },
  ]

  return (
    <>
      {factions.map((faction, index) => (
        <EchoNode
          key={index}
          position={faction.position}
          color={faction.color}
          size={1.2}
        />
      ))}
      
      {/* Connecting lines between nodes */}
      {factions.map((_, index) => (
        <mesh key={`line-${index}`} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 8, 8]} />
          <meshStandardMaterial color="#ffffff" opacity={0.2} transparent />
        </mesh>
      ))}
    </>
  )
}

const Universe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState('world')

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const tabs = [
    { id: 'world', label: 'World & Lore', icon: '🌍' },
    { id: 'factions', label: 'Factions', icon: '⚔️' },
    { id: 'gameplay', label: 'Gameplay', icon: '🎮' },
    { id: 'economy', label: 'Economy', icon: '💎' },
  ]

  const content = {
    world: {
      title: 'The VoiceVerse Universe',
      description: 'A dystopian future where sound has become both weapon and currency. After centuries of silence, humanity rediscovers the power of voice and resonance in a sprawling digital frontier.',
      features: [
        'Echo Nodes - Ancient sound-cores that grant power and knowledge',
        'Dynamic environments that respond to sound frequencies',
        'Evolving storylines based on player collective actions',
        'AI-driven NPCs that adapt to global player interactions'
      ]
    },
    factions: {
      title: 'Choose Your Alliance',
      description: 'Three major factions battle for control over Echo Nodes, each with unique philosophies about the use of sound and resonance.',
      features: [
        'Resonance Guardians - Protectors of ancient sound wisdom',
        'Echo Hunters - Aggressive seekers of sonic power',
        'Sound Weavers - Masters of harmonic manipulation',
        'Form alliances and influence the political landscape'
      ]
    },
    gameplay: {
      title: 'Sound-Driven Combat',
      description: 'Revolutionary mechanics where voice frequencies dictate combat styles. Coordinate with teammates through voice patterns to unlock devastating abilities.',
      features: [
        'Resonance Gear - Weapons powered by sound waves',
        'Voice-activated commands trigger in-game effects',
        'Chorus abilities unlocked through team coordination',
        'Tactical combat combining strategy with expression'
      ]
    },
    economy: {
      title: 'Blockchain-Powered Economy',
      description: 'True ownership of all in-game assets through Avalanche blockchain. Trade, collect, and shape the economy with complete transparency.',
      features: [
        'NFT-based Resonance Gear and rare artifacts',
        'Player-owned territories and Echo Nodes',
        'Seasonal drops and limited-edition collectibles',
        'Community governance through token voting'
      ]
    }
  }

  return (
    <section id="universe" ref={ref} className="py-20 bg-gradient-to-b from-voice-gray to-voice-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-voice-cyan to-voice-purple bg-clip-text text-transparent">
              Explore the Universe
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into the VoiceVerse—a living, breathing digital frontier where every voice shapes reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Interactive 3D Scene */}
          <motion.div
            className="h-96 lg:h-[500px] relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-voice-purple/20 to-voice-cyan/20 rounded-2xl" />
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
              
              <FactionTerritory />
              
              <Environment preset="night" />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
            
            <div className="absolute bottom-4 left-4 bg-voice-dark/80 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm text-voice-cyan">Interactive 3D Universe Map</p>
              <p className="text-xs text-gray-400">Drag to explore • Auto-rotating</p>
            </div>
          </motion.div>

          {/* Right - Tabbed Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-voice-purple to-voice-cyan text-white'
                      : 'bg-voice-gray/50 text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-voice-gray/30 rounded-2xl p-8 backdrop-blur-sm border border-voice-purple/20"
            >
              <h3 className="text-3xl font-display font-bold mb-4 text-white">
                {content[activeTab].title}
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {content[activeTab].description}
              </p>
              
              <div className="space-y-3">
                {content[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-voice-cyan rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-voice-cyan to-voice-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-voice-cyan/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Enter the VoiceVerse
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Universe
