import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Contact.css';

/* ── Animation helpers ────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const variant = direction === 'left' ? fadeLeft : direction === 'right' ? fadeRight : fadeUp;
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/* ── Contact details data ─────────────────────── */
const DETAILS = [
  {
    icon: '📍',
    label: 'Address',
    value: 'J-201, Tower 5, International Infotech Park, Sector 30, Vashi, Navi Mumbai - 400703, MH, India',
    href: null,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '022 46639667',
    href: 'tel:+9102246639667',
  },
  {
    icon: '✉️',
    label: 'General Enquiries',
    value: 'info@kloudstack.com',
    href: 'mailto:info@kloudstack.com',
  },
  
];

const SOCIAL = [
  { icon: 'bi bi-linkedin',   href: '#' },
  { icon: 'bi bi-twitter-x',  href: '#' },
  { icon: 'bi bi-facebook',   href: '#' },
  { icon: 'bi bi-instagram',  href: '#' },
];

const SERVICES_OPTIONS = [
  'Cloud Infrastructure',
  'Cyber Defense & Compliance',
  'DevOps & Automation',
  'Observability & AIOps',
  'Vendor & Cloud Readiness',
  'Business-IT Alignment',
  'Other / General Enquiry',
];

/* ═══════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════ */
const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="ct-hero">
        <div className="ct-hero-bg" />
        <div className="ct-grid-lines" />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="ct-eyebrow">
              <span className="ct-eyebrow-dot" />
              Get in Touch
            </div>
          </motion.div>

          <motion.h1
            className="ct-hero-heading"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            Power Your Business with Reliable {' '}
            <span className="ct-gold">Infrastructure</span>
          </motion.h1>

          <motion.p
            className="ct-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            Whether you're planning a cloud migration, tightening your security
            posture, or just exploring options — we're ready to talk. No sales
            pressure, just an honest conversation.
          </motion.p>
        </div>
      </section>

      {/* ════════════ MAIN ════════════ */}
      <section className="ct-main">
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* ── Left: Info + Map ── */}
            <div className="col-lg-4">
              <Reveal direction="left" className="h-100">
                <div className="ct-card h-100" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="ct-info-panel">
                    <div>
                      <h2 className="ct-info-heading">Contact Details</h2>
                      <p className="ct-info-sub">
                        Reach us through any of the channels below or fill in the
                        enquiry form and we'll respond within one business day.
                      </p>
                    </div>

                    <div className="ct-detail-list">
                      {DETAILS.map((d, i) => (
                        <motion.div
                          key={d.label}
                          className="ct-detail-row"
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        >
                          <div className="ct-detail-icon">{d.icon}</div>
                          <div>
                            <div className="ct-detail-label">{d.label}</div>
                            {d.href ? (
                              <a href={d.href} className="ct-detail-value">
                                {d.value}
                              </a>
                            ) : (
                              <span className="ct-detail-value" style={{ whiteSpace: 'pre-line' }}>
                                {d.value}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div>
                      <div className="ct-divider" />
                      <div style={{ marginTop: 20 }}>
                        <p className="ct-social-heading">Follow Us</p>
                        <div className="ct-social-row">
                          {SOCIAL.map((s, i) => (
                            <motion.a
                              key={i}
                              href={s.href}
                              className="ct-social-btn"
                              whileHover={{ scale: 1.12, y: -2 }}
                              whileTap={{ scale: 0.94 }}
                            >
                              <i className={s.icon} />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map embed */}
                  <motion.div
                    className="ct-map-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                  >
                    <iframe
                      title="KloudStack Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d77.0800!3d28.4950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sCyberCity%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="ct-map-overlay-label">📍 Gurugram HQ</div>
                  </motion.div>
                </div>
              </Reveal>
            </div>

            {/* ── Right: Form ── */}
            <div className="col-lg-8">
              <Reveal direction="right" className="h-100">
                <div className="ct-card ct-form-panel h-100">
                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35 }}
                      >
                        <h2 className="ct-form-heading">Send an Enquiry</h2>
                        <p className="ct-form-sub">
                          Fill in the details below and a member of our team will
                          reach out within one business day.
                        </p>

                        <form onSubmit={handleSubmit}>
                          <div className="ct-form-grid">

                            {/* First name */}
                            <motion.div
                              className="ct-field"
                              whileFocusWithin={{ scale: 1.01 }}
                            >
                              <label className="ct-label" htmlFor="firstName">First Name *</label>
                              <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                className="ct-input"
                                placeholder="Vishal"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>

                            {/* Last name */}
                            <motion.div className="ct-field">
                              <label className="ct-label" htmlFor="lastName">Last Name *</label>
                              <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                className="ct-input"
                                placeholder="Goyal"
                                value={form.lastName}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>

                            {/* Email */}
                            <motion.div className="ct-field">
                              <label className="ct-label" htmlFor="email">Work Email *</label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                className="ct-input"
                                placeholder="vishal@company.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>

                            {/* Phone */}
                            <motion.div className="ct-field">
                              <label className="ct-label" htmlFor="phone">Phone Number</label>
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                className="ct-input"
                                placeholder="+91 98765 43210"
                                value={form.phone}
                                onChange={handleChange}
                              />
                            </motion.div>

                            {/* Company */}
                            <motion.div className="ct-field">
                              <label className="ct-label" htmlFor="company">Company / Organisation *</label>
                              <input
                                id="company"
                                name="company"
                                type="text"
                                className="ct-input"
                                placeholder="Acme Corp"
                                value={form.company}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>

                            {/* Service */}
                            <motion.div className="ct-field">
                              <label className="ct-label" htmlFor="service">Service Interest</label>
                              <select
                                id="service"
                                name="service"
                                className="ct-select"
                                value={form.service}
                                onChange={handleChange}
                              >
                                <option value="" disabled>Select a service…</option>
                                {SERVICES_OPTIONS.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                            </motion.div>

                            {/* Message */}
                            <motion.div className="ct-field ct-form-full">
                              <label className="ct-label" htmlFor="message">Message *</label>
                              <textarea
                                id="message"
                                name="message"
                                className="ct-textarea"
                                placeholder="Tell us about your project, challenge, or question…"
                                value={form.message}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>

                            {/* Submit */}
                            <div className="ct-submit-row">
                              <p className="ct-submit-note">
                                By submitting, you agree to our Privacy Policy.<br />
                                We never share your data with third parties.
                              </p>
                              <motion.button
                                type="submit"
                                className="ct-submit-btn"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                disabled={loading}
                              >
                                {loading ? (
                                  <>
                                    <motion.span
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                                      style={{ display: 'inline-block', fontSize: '1rem' }}
                                    >
                                      ⏳
                                    </motion.span>
                                    Sending…
                                  </>
                                ) : (
                                  <>Send Enquiry ›</>
                                )}
                              </motion.button>
                            </div>

                          </div>
                        </form>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="success"
                        className="ct-success"
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.div
                          className="ct-success-icon"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', damping: 14, stiffness: 220, delay: 0.1 }}
                        >
                          ✅
                        </motion.div>
                        <h3>Message Received!</h3>
                        <p>
                          Thank you for reaching out. A member of the KloudStack
                          team will get back to you within one business day.
                        </p>
                        <motion.button
                          className="ct-submit-btn"
                          style={{ marginTop: 8 }}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                        >
                          Send Another Enquiry
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
