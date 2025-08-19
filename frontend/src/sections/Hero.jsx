import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

// 3D Resonance Orb Component
const ResonanceOrb = () => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y += 0.01
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color={hovered ? "#ec4899" : "#6366f1"}
          wireframe={true}
          emissive={hovered ? "#ec4899" : "#6366f1"}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

// Sound Wave Rings
const SoundWaves = () => {
  const ringsRef = useRef([])

  useFrame((state) => {
    ringsRef.current.forEach((ring, index) => {
      if (ring) {
        ring.rotation.z += 0.005 * (index + 1)
        ring.scale.setScalar(1 + Math.sin(state.clock.elapsedTime + index) * 0.1)
      }
    })
  })

  return (
    <>
      {[1, 2, 3].map((_, index) => (
        <mesh
          key={index}
          ref={(el) => (ringsRef.current[index] = el)}
          position={[0, 0, -index * 2]}
        >
          <torusGeometry args={[3 + index, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#06b6d4"
            transparent
            opacity={0.6 - index * 0.2}
            emissive="#06b6d4"
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </>
  )
}

const Hero = ({ onJoinWaitlist }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-voice-dark via-voice-gray to-voice-dark" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-voice-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl lg:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-voice-purple via-voice-pink to-voice-cyan bg-clip-text text-transparent">
              VoiceVerse
            </span>
            <br />
            <span className="text-white text-4xl lg:text-6xl">
              Where Sound
            </span>
            <br />
            <span className="text-white text-4xl lg:text-6xl">
              Shapes Reality
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of interactive technology where voice, resonance, and blockchain 
            converge to create immersive digital experiences beyond imagination.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-voice-purple to-voice-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-voice-purple/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('universe').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-voice-cyan text-voice-cyan hover:bg-voice-cyan hover:text-voice-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Universe
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { label: 'Pre-Alpha Users', value: '10K+' },
              { label: 'Community Members', value: '25K+' },
              { label: 'NFTs Created', value: '5K+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-voice-cyan">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right 3D Scene */}
        <motion.div
          className="h-96 lg:h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
            
            <ResonanceOrb />
            <SoundWaves />
            
            <Environment preset="city" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-voice-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-voice-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
