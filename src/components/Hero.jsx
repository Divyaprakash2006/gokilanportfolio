import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

const professions = ['Pre-Final Year CSBS Student', 'MERN Stack Developer', 'Aspiring Software Engineer']

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [professionIndex, setProfessionIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const vantaRef = useRef(null)
  const [typedName, setTypedName] = useState('')
  const [isNameTyped, setIsNameTyped] = useState(false)
  const fullName = 'Gokilan Thangavel'

  // Name typing animation
  useEffect(() => {
    let index = 0
    const nameTimer = setInterval(() => {
      setTypedName(fullName.substring(0, index + 1))
      index++
      if (index >= fullName.length) {
        clearInterval(nameTimer)
        setIsNameTyped(true)
      }
    }, 100)
    return () => clearInterval(nameTimer)
  }, [])

  // Profession typing animation
  useEffect(() => {
    if (!isNameTyped) return

    const currentText = professions[professionIndex]
    let timer

    if (!isDeleting && charIndex === currentText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false)
        setProfessionIndex((prev) => (prev + 1) % professions.length)
      }, 500)
    } else {
      const typingSpeed = isDeleting ? 40 : 100
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentText.substring(0, charIndex - 1)
            : currentText.substring(0, charIndex + 1)
        )
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1))
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, professionIndex, isNameTyped])

  useEffect(() => {
    let effect = null
    const initVanta = () => {
      if (window.VANTA && window.VANTA.DOTS) {
        effect = window.VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x2070ff,
          color2: 0x2021ff,
          backgroundColor: 0x030712,
          showLines: false
        })
      }
    }

    // Wait a brief moment or try immediately to ensure the window.VANTA scripts are parsed
    initVanta()

    return () => {
      if (effect) effect.destroy()
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030712]">
      {/* Vanta background canvas container */}
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      {/* Background Orbs */}
      <div className="glow-orb-indigo top-[10%] left-[-10%] opacity-50 z-10 pointer-events-none" />
      <div className="glow-orb-cyan bottom-[10%] right-[-10%] opacity-40 z-10 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text/Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white mb-6"
            >
              Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">{typedName}</span>
              {!isNameTyped && <span className="text-indigo-400 animate-pulse font-light">|</span>}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-3xl font-medium text-gray-300 mb-8 min-h-[40px]"
            >
              I'm a <span className="text-indigo-400 cursor-blink font-display">{typedText}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-gray-400 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg mb-10 leading-relaxed font-sans"
            >
              I am a pre-final year CSBS student skilled in the MERN stack, REST APIs, and cloud basics. Interested in backend development, building scalable systems, and solving real-world challenges.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-12 w-full"
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 cursor-pointer text-center"
              >
                View Work
              </Link>

              <a
                href="/gokilanresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-700 hover:border-gray-500 bg-gray-900/40 text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Resume
              </a>
            </motion.div>
          </div>

          {/* Profile Photo Column */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              {/* Outer decorative gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full filter blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border border-white/10 bg-slate-900/60 p-2">
                <img
                  src={profileImg}
                  alt="Gokilan Thangavel"
                  className="w-full h-full object-cover rounded-full transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
