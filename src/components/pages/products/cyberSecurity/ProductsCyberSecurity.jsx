import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDotCircle } from 'react-icons/fa';
import FeatureTabs from '../../home/FeatureTabs/FeatureTabs';
import './ProductsCyberSecurity.css';

/* ── Target Audience ── */
const AUDIENCES = [
  {
    id: 'enterprise',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Mid-Size & Enterprise Organizations',
    desc: 'Strengthen security posture with AI-driven visibility, monitoring, and risk quantification.',
  },
  {
    id: 'insurance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Cyber Insurance Carriers & Brokers',
    desc: 'Leverage accurate, data-backed insights for underwriting, pricing, and portfolio management.',
  },
  {
    id: 'ai-business',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Technology & AI-Driven Businesses',
    desc: 'Ensuring responsible AI deployment, governance, and compliance across operations.',
  },
  {
    id: 'compliance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'Security & Compliance Teams',
    desc: 'Streamlining risk assessment, reporting, and policy management with automated tools.',
  },
  {
    id: 'individuals',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Individuals & Families',
    desc: 'Strengthening personal digital safety with alerts, risk scoring, and cyber insurance options.',
  },
];

/* ── Testimonials ── */
const TESTIMONIALS = [
  {
    id: 'abid',
    quote: "The insights and actionable recommendations from the Risknox platform will make a significant difference in how we approach cybersecurity. These data-driven suggestions would allow me to make informed decisions and prioritize our security efforts effectively.",
    name: 'Abid Sherrif',
    role: 'CIO, SP Medifort Hospital',
    initials: 'AS',
  },
  {
    id: 'michael',
    quote: "The Risknox platform provides invaluable insights into our enterprise security. Their actionable recommendations help us address critical risks, allowing us to strengthen our defenses and ensure comprehensive protection for our business.",
    name: 'Michael Smith',
    role: 'Security Consultant',
    initials: 'MS',
  },
  {
    id: 'aman',
    quote: "Risknox's automation features have been a game-changer for our follow-ups, ensuring nothing slips through the cracks!",
    name: 'Aman S',
    role: 'Operations Head',
    initials: 'AS',
  },
];

/* ── FAQ ── */
const FAQS = [
  {
    q: 'What makes Risknox different from traditional security tools?',
    a: 'Risknox quantifies risk financially, predicts threats using AI, and connects cyber posture directly to insurability — giving you complete visibility and actionability.',
  },
  {
    q: 'Can Risknox integrate with our existing systems?',
    a: 'Yes. Risknox integrates seamlessly with SIEMs, cloud environments, logs, and enterprise security tools.',
  },
  {
    q: 'Do I need a dedicated cybersecurity team to use Risknox?',
    a: 'Not at all. The platform is designed for both security teams and business leaders, with intuitive dashboards and automated insights.',
  },
  {
    q: 'Can Risknox help with compliance?',
    a: 'Yes. Risknox provides automated compliance tracking for frameworks like NIST, ISO 27001, and emerging AI governance regulations.',
  },
  {
    q: 'Does Risknox provide 24/7 monitoring?',
    a: 'Yes. Our AI-powered Resolute Pulse module continuously monitors your systems and alerts you in real time.',
  },
];

/* ── Animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* ── Component ── */
const ProductsCyberSecurity = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* ══════ HERO SECTION ══════ */}
      <section className="pcs-hero d-flex flex-column justify-content-center">
        <div className="pcs-hero-glow" />
        <div className="container pcs-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="service-badge mb-3">
              <FaDotCircle className="me-2 mb-1" size={12} />
              AI-Powered Cyber Risk Platform
            </div>
            <h1 className="pcs-hero-heading section-heading text-start">
              AI-Powered Cyber Risk, <br />Governance &amp; Protection Solutions
            </h1>
            <p className="pcs-hero-sub text-start">
              Built to quantify risk, predict threats, ensure compliance, and strengthen insurability — all from one unified platform.
            </p>

            {/* Stat callout */}
            <motion.div
              className="pcs-stat-callout"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="pcs-stat-number">60%</div>
              <div className="pcs-stat-text">
                <span className="pcs-stat-label">lower cyber exposure within the first 90 days</span>
                <span className="pcs-stat-support">Organizations using Risknox experience measurable improvements in risk visibility, security hygiene, and insurer confidence.</span>
              </div>
            </motion.div>

            <div className="pcs-hero-actions">
              <a href="/contact" className="pcs-btn-primary">Book a Demo</a>
              <a href="#pcs-audience" className="pcs-btn-ghost">Learn More</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ FEATURE TABS (reused as-is) ══════ */}
      <FeatureTabs />

      {/* ══════ TARGET AUDIENCE ══════ */}
      <section className="pcs-audience" id="pcs-audience">
        <div className="container">
          <motion.div
            className="pcs-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="section-heading text-center">Who Uses Our Products</h2>
            <p className="cap-description text-start">Our solutions support</p>
          </motion.div>

          <motion.div
            className="pcs-audience-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {AUDIENCES.map((aud) => (
              <motion.div key={aud.id} className="pcs-audience-card" variants={fadeUp}>
                <div className="pcs-aud-card-top-bar" />
                <div className="pcs-aud-icon-wrap">{aud.icon}</div>
                <h3 className="pcs-aud-title">{aud.title}</h3>
                <p className="pcs-aud-desc">{aud.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="pcs-testimonials">
        <div className="container">
          <motion.div
            className="pcs-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="section-heading text-center">Our Testimonials</h2>
            <p className="cap-description text-start">Trusted by Clients Worldwide</p>
          </motion.div>

          <div className="pcs-testimonials-wrapper">
            {/* Main testimonial display */}
            <motion.div
              className="pcs-testi-outer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="pcs-quote-mark">"</div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="pcs-testi-body"
                >
                  <p className="pcs-testi-quote">{TESTIMONIALS[activeTestimonial].quote}</p>
                  <div className="pcs-testi-author">
                    <div className="pcs-testi-avatar">{TESTIMONIALS[activeTestimonial].initials}</div>
                    <div className="pcs-testi-meta">
                      <span className="pcs-testi-name">{TESTIMONIALS[activeTestimonial].name}</span>
                      <span className="pcs-testi-role">{TESTIMONIALS[activeTestimonial].role}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="pcs-testi-dots">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    className={`pcs-testi-dot ${i === activeTestimonial ? 'pcs-testi-dot--active' : ''}`}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Side nav buttons */}
              <div className="pcs-testi-nav">
                <button
                  className="pcs-testi-nav-btn"
                  onClick={() => setActiveTestimonial((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  aria-label="Previous"
                >
                  &#8592;
                </button>
                <button
                  className="pcs-testi-nav-btn"
                  onClick={() => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length)}
                  aria-label="Next"
                >
                  &#8594;
                </button>
              </div>
            </motion.div>

            {/* Side cards */}
            <div className="pcs-testi-sidebar">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  className={`pcs-testi-side-card ${i === activeTestimonial ? 'pcs-testi-side-card--active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                >
                  <div className="pcs-testi-side-avatar">{t.initials}</div>
                  <div>
                    <div className="pcs-testi-side-name">{t.name}</div>
                    <div className="pcs-testi-side-role">{t.role}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="pcs-faq">
        <div className="container">
          <div className="pcs-faq-inner">
            {/* Left */}
            <motion.div
              className="pcs-faq-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <span className="pcs-faq-label">FAQ Questions</span>
              <h2 className="section-heading text-start">Questions</h2>
              <p className="cap-description text-start">Looking for answers? We're here to help!</p>
            </motion.div>

            {/* Right: accordion */}
            <motion.div
              className="pcs-faq-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              {FAQS.map((faq, i) => (
                <motion.div key={i} className="pcs-faq-item" variants={fadeUp}>
                  <button
                    className={`pcs-faq-question ${openFaq === i ? 'pcs-faq-question--open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    <span className={`pcs-faq-chevron ${openFaq === i ? 'rotated' : ''}`}>&#9662;</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        className="pcs-faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="pcs-faq-answer-text">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section className="pcs-cta">
        <div className="container">
          <motion.div
            className="pcs-cta-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="pcs-cta-glow" />
            <h2 className="section-heading text-center pcs-cta-heading">
              Ready to Strengthen Your Cyber Defense?
            </h2>
            <p className="cap-description text-center pcs-cta-sub">
              Simple, transparent plans designed for businesses of all sizes.
            </p>
            <a href="/contact" className="pcs-btn-primary pcs-cta-btn">Book a Demo</a>
            <p className="pcs-cta-tagline">Measured &nbsp;·&nbsp; Secured &nbsp;·&nbsp; Insured.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProductsCyberSecurity;
