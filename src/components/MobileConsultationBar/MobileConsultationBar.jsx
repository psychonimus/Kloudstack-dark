import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EnquiryModal from '../EnquiryModal/EnquiryModal'
import './MobileConsultationBar.css'

const MobileConsultationBar = () => {
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  /* Slide in after a short delay so it doesn't fight the hero animation */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            className="mob-consult-fab"
            onClick={() => setModalOpen(true)}
            id="mob-consult-cta"
            aria-label="Book a consultation"
            initial={{ opacity: 0, scale: 0.6, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.6, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Calendar icon in a small circle */}
            <span className="mob-consult-icon" aria-hidden="true">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <span className="mob-consult-label">Consult</span>
          </motion.button>
        )}
      </AnimatePresence>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}

export default MobileConsultationBar
