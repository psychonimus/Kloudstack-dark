import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import './WhitePaperDownloadModal.css'

/* ─── Service options (mirror EnquiryModal) ─── */
const SERVICES_OPTIONS = [
  'Cybersecurity & ZTNA',
  'AI & Business Intelligence',
  'Cloud & Hybrid Foundations',
  'Operational Continuity',
  'Modular Open Stack',
  'Custom Software Development',
  'DevOps & Automation',
  'Other / General Enquiry',
]

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

/* ─── Tiny inline spinner icon ─── */
const Spinner = () => <span className="wpdl-spinner" />

/* ─────────────────────────────────────────────────────────────
   WhitePaperDownloadModal
   Props:
     isOpen      – boolean
     onClose     – () => void
     paperTitle  – string  (used in heading)
     downloadHref – string (the PDF path to download after submit)
───────────────────────────────────────────────────────────── */
const WhitePaperDownloadModal = ({ isOpen, onClose, paperTitle, downloadHref }) => {
  const [form, setForm] = useState(EMPTY_FORM)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* Reset state when modal reopens */
  useEffect(() => {
    if (isOpen) {
      setForm(EMPTY_FORM)
      setSubmitted(false)
      setLoading(false)
    }
  }, [isOpen])

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    /* Simulate API call, then trigger the download */
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)

      /* Programmatically trigger PDF download */
      const link = document.createElement('a')
      link.href = downloadHref
      link.download = downloadHref.split('/').pop() || 'whitepaper.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 1200)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="wpdl-backdrop"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Download White Paper Form"
        >
          <motion.div
            className="wpdl-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button */}
            <button
              type="button"
              className="wpdl-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <IoClose />
            </button>

            {!submitted ? (
              <div className="wpdl-form-wrapper">
                {/* Header */}
                <div className="wpdl-header">
                  <div className="wpdl-tag">Free Download</div>
                  <h2 className="wpdl-title">Access the White Paper</h2>
                  <p className="wpdl-subtitle">
                    Complete the form below to download&nbsp;
                    <span className="wpdl-paper-name">{paperTitle}</span>
                    . Your download will begin immediately after submission.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="wpdl-form" noValidate>
                  <div className="wpdl-grid">

                    {/* First Name */}
                    <div className="wpdl-field">
                      <label className="wpdl-label" htmlFor="wpdl-firstName">
                        FIRST NAME *
                      </label>
                      <input
                        id="wpdl-firstName"
                        name="firstName"
                        type="text"
                        className="wpdl-input"
                        placeholder="Vishal"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Last Name */}
                    <div className="wpdl-field">
                      <label className="wpdl-label" htmlFor="wpdl-lastName">
                        LAST NAME *
                      </label>
                      <input
                        id="wpdl-lastName"
                        name="lastName"
                        type="text"
                        className="wpdl-input"
                        placeholder="Goyal"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Work Email */}
                    <div className="wpdl-field">
                      <label className="wpdl-label" htmlFor="wpdl-email">
                        WORK EMAIL *
                      </label>
                      <input
                        id="wpdl-email"
                        name="email"
                        type="email"
                        className="wpdl-input"
                        placeholder="vishal@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="wpdl-field">
                      <label className="wpdl-label" htmlFor="wpdl-phone">
                        PHONE NUMBER
                      </label>
                      <input
                        id="wpdl-phone"
                        name="phone"
                        type="tel"
                        className="wpdl-input"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Company */}
                    <div className="wpdl-field">
                      <label className="wpdl-label" htmlFor="wpdl-company">
                        COMPANY / ORGANISATION *
                      </label>
                      <input
                        id="wpdl-company"
                        name="company"
                        type="text"
                        className="wpdl-input"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Service Interest */}
                    <div className="wpdl-field">
                      <label className="wpdl-label" htmlFor="wpdl-service">
                        SERVICE INTEREST
                      </label>
                      <select
                        id="wpdl-service"
                        name="service"
                        className="wpdl-select"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES_OPTIONS.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="wpdl-field wpdl-field-full">
                      <label className="wpdl-label" htmlFor="wpdl-message">
                        MESSAGE *
                      </label>
                      <textarea
                        id="wpdl-message"
                        name="message"
                        className="wpdl-textarea"
                        placeholder="Tell us about your project, challenge, or question..."
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="wpdl-footer">
                    <div className="wpdl-disclaimer">
                      <span>By submitting, you agree to our Privacy Policy.</span>
                      <span>We never share your data with third parties.</span>
                    </div>

                    <button
                      type="submit"
                      className="wpdl-submit-btn"
                      disabled={loading}
                      id="wpdl-submit-btn"
                    >
                      {loading ? (
                        <span className="wpdl-btn-loading">
                          <Spinner />
                          Preparing Download…
                        </span>
                      ) : (
                        <span className="wpdl-btn-inner">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="wpdl-dl-icon"
                          >
                            <path
                              d="M12 3v13M7 11l5 5 5-5M3 21h18"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Submit &amp; Download
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success state */
              <div className="wpdl-success">
                <div className="wpdl-success-ring">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#d4a04a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="wpdl-success-title">Download Started!</h3>
                <p className="wpdl-success-text">
                  Thank you! Your white paper download has begun. If it did not start
                  automatically,&nbsp;
                  <a
                    href={downloadHref}
                    download
                    className="wpdl-manual-link"
                  >
                    click here to download
                  </a>
                  .
                </p>
                <div className="wpdl-success-actions">
                  <button
                    type="button"
                    className="wpdl-submit-btn"
                    onClick={onClose}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default WhitePaperDownloadModal
