import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SONG_TITLE = 'Option'
const SONG_ARTIST = 'Aylex'
const SONG_SRC = '/Aylex - Option (freetouse.com).mp3'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStopped, setIsStopped] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.7)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0)
    }
    const onLoadedMetadata = () => setDuration(audio.duration)
    const onEnded = () => {
      setIsPlaying(false)
      setIsStopped(true)
      setProgress(0)
      setCurrentTime(0)
      audio.currentTime = 0
    }

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const handlePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.play()
    setIsPlaying(true)
    setIsStopped(false)
  }

  const handlePause = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    setIsPlaying(false)
  }

  const handleStop = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    setIsPlaying(false)
    setIsStopped(true)
    setProgress(0)
    setCurrentTime(0)
  }

  const handleTogglePlay = () => {
    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const ratio = Math.max(0, Math.min(1, x / rect.width))
    audio.currentTime = ratio * audio.duration
    if (isStopped) {
      setIsStopped(false)
      audio.play()
      setIsPlaying(true)
    }
  }

  const formatTime = (t) => {
    if (!t || isNaN(t)) return '0:00'
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  const bars = [3, 5, 8, 5, 7, 4, 6, 3, 5, 8]

  return (
    <>
      <audio ref={audioRef} src={SONG_SRC} preload="metadata" />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 200 }}
        style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 100 }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
              style={{
                width: '288px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
                background: 'rgba(10, 15, 30, 0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
              }}
            >
              {/* Header */}
              <div style={{ padding: '16px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* Spinning vinyl disc */}
                  <motion.div
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={isPlaying ? { repeat: Infinity, duration: 3, ease: 'linear' } : { duration: 0.3 }}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #a78bfa, #6366f1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#0a0f1e' }} />
                  </motion.div>
                  <div>
                    <p style={{ color: '#fff', fontSize: '12px', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{SONG_TITLE}</p>
                    <p style={{ color: '#9ca3af', fontSize: '10px', margin: 0 }}>{SONG_ARTIST}</p>
                  </div>
                </div>

                {/* Animated sound bars */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '20px', marginRight: '8px' }}>
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      style={{ width: '3px', borderRadius: '2px', background: '#818cf8' }}
                      animate={isPlaying
                        ? { height: [h * 2, h * 3.5, h * 1.5, h * 3, h * 2], opacity: 1 }
                        : { height: 3, opacity: 0.3 }
                      }
                      transition={isPlaying ? {
                        repeat: Infinity,
                        duration: 0.6 + i * 0.07,
                        ease: 'easeInOut',
                        delay: i * 0.05
                      } : { duration: 0.3 }}
                    />
                  ))}
                </div>

                {/* Collapse */}
                <button
                  onClick={() => setIsExpanded(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#9ca3af',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                  title="Minimize"
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Progress bar */}
              <div style={{ padding: '4px 16px 4px' }}>
                <div
                  onClick={handleSeek}
                  style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      borderRadius: '9999px',
                      background: 'linear-gradient(to right, #6366f1, #22d3ee)',
                      transition: 'width 0.1s linear',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                  <span style={{ fontSize: '10px', color: '#6b7280' }}>{formatTime(currentTime)}</span>
                  <span style={{ fontSize: '10px', color: '#6b7280' }}>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div style={{ padding: '8px 16px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Stop */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleStop}
                  title="Stop"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    border: 'none',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#9ca3af',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#9ca3af' }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="5" y="5" width="14" height="14" rx="2" />
                  </svg>
                </motion.button>

                {/* Play / Pause */}
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={handleTogglePlay}
                  title={isPlaying ? 'Pause' : 'Play'}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: 'none',
                    background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isPlaying
                      ? '0 0 20px rgba(99,102,241,0.5), 0 4px 15px rgba(0,0,0,0.3)'
                      : '0 4px 15px rgba(0,0,0,0.4)',
                    transition: 'box-shadow 0.3s',
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isPlaying ? (
                      <motion.svg
                        key="pause"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.15 }}
                        width="20" height="20" fill="white" viewBox="0 0 24 24"
                      >
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        key="play"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.15 }}
                        width="20" height="20" fill="white" viewBox="0 0 24 24"
                        style={{ marginLeft: '2px' }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Volume */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="14" height="14" fill="#9ca3af" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                  </svg>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    style={{ width: '60px', cursor: 'pointer', accentColor: '#6366f1' }}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            /* Collapsed pill */
            <motion.button
              key="collapsed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsExpanded(true)}
              title="Open Music Player"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 16px',
                borderRadius: '9999px',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                background: 'rgba(10, 15, 30, 0.9)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: isPlaying
                  ? '0 0 20px rgba(99,102,241,0.3), 0 8px 20px rgba(0,0,0,0.4)'
                  : '0 8px 20px rgba(0,0,0,0.4)',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s',
              }}
            >
              {/* Spinning disc */}
              <motion.div
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={isPlaying ? { repeat: Infinity, duration: 3, ease: 'linear' } : { duration: 0.3 }}
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #a78bfa, #6366f1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0a0f1e' }} />
              </motion.div>

              {/* Mini bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '16px' }}>
                {[3, 5, 7, 5, 3].map((h, i) => (
                  <motion.div
                    key={i}
                    style={{ width: '2px', borderRadius: '2px', background: '#818cf8' }}
                    animate={isPlaying
                      ? { height: [h * 1.5, h * 3, h * 1.5, h * 2.5, h * 1.5], opacity: 1 }
                      : { height: 3, opacity: 0.4 }
                    }
                    transition={isPlaying ? {
                      repeat: Infinity,
                      duration: 0.5 + i * 0.1,
                      ease: 'easeInOut',
                      delay: i * 0.06
                    } : { duration: 0.3 }}
                  />
                ))}
              </div>

              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 500 }}>
                {isPlaying ? 'Playing' : isStopped ? 'Music' : 'Paused'}
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
