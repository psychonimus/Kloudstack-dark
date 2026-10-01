import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import './BackToTop.css'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      
      // Calculate progress (0 - 100)
      if (scrollHeight > 0) {
        const progress = (scrollTop / scrollHeight) * 100
        setScrollProgress(progress)
      }

      // Show button after scrolling past 300px
      if (scrollTop > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  // Circle radius and circumference calculation
  const radius = 23
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="back-to-top-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-label="Back to top"
          title="Back to top"
        >
          <svg className="back-to-top-svg" viewBox="0 0 52 52">
            <defs>
              <linearGradient id="btt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4a04a" />
                <stop offset="50%" stopColor="#f5c96a" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {/* Background ring */}
            <circle
              className="back-to-top-bg-circle"
              cx="26"
              cy="26"
              r={radius}
            />
            {/* Progress indicator ring */}
            <circle
              className="back-to-top-progress-circle"
              cx="26"
              cy="26"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>

          <FaArrowUp className="back-to-top-icon" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
