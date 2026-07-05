import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const logoLetters = Array.from("Gokilan");

const containerVariants = {
  initial: {},
  animate: {}
}

const letterVariants = {
  initial: { opacity: 0, y: 8 },
  animate: (index) => ({ 
    opacity: 1, 
    y: [0, -6, 0],
    color: ["#ffffff", "#818cf8", "#ffffff"],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
        delay: index * 0.1,
        repeatDelay: 3
      },
      color: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
        delay: index * 0.1,
        repeatDelay: 3
      },
      opacity: {
        duration: 0.4,
        delay: index * 0.05
      }
    }
  })
}

const dotVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: [0, -8, 0],
    color: ["#6366f1", "#22d3ee", "#6366f1"],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
        delay: 7 * 0.1,
        repeatDelay: 3
      },
      color: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
        delay: 7 * 0.1,
        repeatDelay: 3
      },
      scale: {
        type: "spring",
        damping: 8,
        stiffness: 200,
        delay: 0.35
      },
      opacity: {
        duration: 0.4,
        delay: 0.35
      }
    }
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Initialize audio once
  useEffect(() => {
    const audio = new Audio('/Aylex - Option (freetouse.com).mp3')
    audio.loop = true
    audio.volume = 0.5
    audio.addEventListener('ended', () => setIsPlaying(false))
    audioRef.current = audio
    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const toggleBGM = (e) => {
    e.preventDefault()  // don't navigate — just toggle music
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <span
          onClick={toggleBGM}
          className="text-2xl font-bold font-display cursor-pointer tracking-wider text-white select-none"
          title={isPlaying ? 'Pause BGM' : 'Play BGM'}
        >
          <motion.span
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="inline-flex items-center"
          >
            {logoLetters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {/* Dot with playing pulse */}
            <span className="relative inline-flex items-center ml-0.5">
              {isPlaying && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0.6, 0, 0.6], scale: [1, 2.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full bg-indigo-400/40 pointer-events-none"
                />
              )}
              <motion.span
                variants={dotVariants}
                className="inline-block font-sans relative z-10"
                style={{ color: isPlaying ? '#22d3ee' : undefined }}
              >
                .
              </motion.span>
            </span>
          </motion.span>
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-wide relative group transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-indigo-400 font-semibold' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="px-5 py-2 rounded-full border border-indigo-500/50 hover:border-indigo-400 text-indigo-400 hover:text-white hover:bg-indigo-500/10 transition-all duration-300 text-sm font-medium cursor-pointer shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            Hire Me
          </NavLink>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base py-2 cursor-pointer transition-all duration-200 ${
                      isActive ? 'text-indigo-400 font-semibold pl-2 border-l-2 border-indigo-400' : 'text-gray-300 hover:text-white'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="w-full text-center px-5 py-2.5 rounded-full border border-indigo-500 text-indigo-400 hover:text-white hover:bg-indigo-500/10 transition-all duration-200 text-sm font-medium cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
