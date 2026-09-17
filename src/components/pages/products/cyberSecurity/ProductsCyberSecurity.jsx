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

/* ── Product-Specific FAQs ── */
const PRODUCT_FAQS = {
  pulse: {
    id: 'pulse',
    name: 'Pulse',
    tagline: 'AI-Powered Continuous Monitoring & Anomaly Detection',
    badge: 'Continuous Monitoring',
    faqs: [
      {
        q: 'How does Pulse provide 24/7 continuous monitoring across hybrid environments?',
        a: 'Pulse continuously ingests, parses, and correlates telemetry across cloud workloads, on-premises networks, endpoint agents, and application logs. Using machine learning models, it identifies anomalous traffic, lateral movement, and zero-day threat patterns in real time without manual rule overhead.',
      },
      {
        q: 'How does Pulse prevent alert fatigue for internal security operations teams?',
        a: 'Pulse applies contextual event correlation and risk scoring to filter out benign noise. It automatically clusters related alerts into unified, prioritized incident timelines categorized by business impact.',
      },
      {
        q: 'Can Pulse integrate with our existing SIEM, SOAR, and cloud environments?',
        a: 'Yes. Pulse provides out-of-the-box connectors and REST APIs for major SIEM/SOAR platforms, cloud providers (AWS, Microsoft Azure, Google Cloud), and incident notification systems like Slack, Microsoft Teams, and PagerDuty.',
      },
      {
        q: 'Does Pulse support automated security policy violation detection?',
        a: 'Yes. Pulse continuously benchmarks environment telemetry against enterprise security baselines, immediately alerting on configuration drift, unauthorized privilege escalations, and unapproved external connections.',
      },
    ],
  },
  fortress: {
    id: 'fortress',
    name: 'Fortress',
    tagline: 'Enterprise Cyber Risk Platform & Financial Quantification',
    badge: 'Risk Quantification',
    faqs: [
      {
        q: 'How does Fortress translate technical cyber risks into financial metrics?',
        a: 'Fortress maps potential threat vectors and vulnerabilities directly to your revenue-critical business assets. It calculates quantified loss exposure ($ and projected business downtime), enabling CFOs, CISOs, and boards to make data-backed capital allocation decisions.',
      },
      {
        q: 'What is the Cyber Hygiene Score and how is it calculated?',
        a: 'The Cyber Hygiene Score provides a credit-score-style rating of your organization’s overall security posture. It continuously assesses patch velocity, endpoint coverage, credential hygiene, and external attack surfaces into a single benchmarkable metric.',
      },
      {
        q: 'How does Fortress align with MITRE ATT&CK, SEBI CSF, and DPDPA frameworks?',
        a: 'Fortress automatically correlates active exposures to MITRE ATT&CK adversary techniques and maps your controls directly to regional and international compliance mandates, including SEBI CSF, India DPDPA 2023, ISO 27001, and NIST CSF.',
      },
      {
        q: 'How does Fortress assist with cyber insurance readiness and underwriting?',
        a: 'Fortress generates verified posture reports and actuarially aligned risk metrics that demonstrate control effectiveness to cyber insurance carriers, accelerating underwriting cycles and optimizing policy premiums.',
      },
    ],
  },
  compass: {
    id: 'compass',
    name: 'Compass',
    tagline: 'Cyber Risk Intelligence for Insurers & Brokers',
    badge: 'Insurability Intelligence',
    faqs: [
      {
        q: 'How does Compass streamline the cyber insurance underwriting workflow?',
        a: 'Compass transforms static questionnaires into automated, evidence-backed security assessments. Insurers and brokers gain instant applicant risk scoring, exposure modeling, and objective posture verification before binding coverage.',
      },
      {
        q: 'Can Compass evaluate portfolio-wide cyber risk accumulation?',
        a: 'Yes. Compass aggregates policyholder data into macro-level portfolio dashboards, highlighting systemic vendor dependencies, shared cloud infrastructure vulnerabilities, and catastrophe loss scenarios across your entire book of business.',
      },
      {
        q: 'What metrics does Compass provide for premium recommendation support?',
        a: 'Compass analyzes claims correlation data, historical attack frequencies, and applicant hygiene scores to deliver data-backed coverage limit guidance and risk-adjusted pricing recommendations.',
      },
      {
        q: 'How does Compass monitor insured organizations throughout the policy lifecycle?',
        a: 'Compass provides continuous posture monitoring, alerting carriers and brokers to critical security degradations, unpatched vulnerabilities, or major compliance lapses that occur post-bind.',
      },
    ],
  },
  accord: {
    id: 'accord',
    name: 'Accord',
    tagline: 'AI Governance, Compliance & Insurability',
    badge: 'AI Governance',
    faqs: [
      {
        q: 'How does Accord support compliance with the EU AI Act and NIST AI RMF?',
        a: 'Accord classifies enterprise AI systems across risk tiers (unacceptable, high, limited, and minimal risk), automating mandatory technical documentation, human-oversight logging, and standards mapping required under the EU AI Act and NIST AI Risk Management Framework.',
      },
      {
        q: 'What specific AI risks and vulnerabilities does Accord monitor?',
        a: 'Accord continuously evaluates model transparency, training data integrity, prompt injection vulnerabilities, data leakage (PII), algorithmic bias, model drift, and unauthorized shadow AI tool usage across corporate departments.',
      },
      {
        q: 'What is an AI Insurability Assessment in Accord?',
        a: 'The Insurability Assessment evaluates the governance maturity, safety guardrails, and liability controls of your AI deployments, giving cyber insurance underwriters the validated transparency needed to write enterprise AI liability coverage.',
      },
      {
        q: 'Can Accord automate AI policy workflows and internal approval gates?',
        a: 'Yes. Accord centralizes your AI asset inventory, enforces risk review gates before models deploy to production, and maintains immutable audit logs of model validation tests and approval sign-offs.',
      },
    ],
  },
};

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
  const [activeProductTab, setActiveProductTab] = useState('pulse');
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const currentProductFaq = PRODUCT_FAQS[activeProductTab] || PRODUCT_FAQS.pulse;

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

      {/* ══════ FAQ SECTION WITH 4 PRODUCT TABS ══════ */}
      <section className="pcs-faq" id="pcs-faq">
        <div className="container text-start">
          {/* Header */}
          <motion.div
            className="pcs-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="pcs-faq-label">FAQ Questions</span>
            <h2 className="section-heading text-center">Frequently Asked Questions</h2>
            <p className="cap-description text-start">
              Explore product-specific questions and technical details across our cyber risk &amp; governance suite.
            </p>
          </motion.div>

          {/* 4 Product Tabs at Top */}
          <motion.div
            className="pcs-faq-tabs-nav"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {Object.values(PRODUCT_FAQS).map((prod) => {
              const isActive = activeProductTab === prod.id;
              return (
                <button
                  key={prod.id}
                  className={`pcs-faq-tab-btn ${isActive ? 'pcs-faq-tab-btn--active' : ''}`}
                  onClick={() => {
                    setActiveProductTab(prod.id);
                    setOpenFaq(0);
                  }}
                  type="button"
                >
                  <div className="pcs-faq-tab-title">{prod.name}</div>
                  <span className="pcs-faq-tab-badge">{prod.badge}</span>
                  {isActive && (
                    <motion.div
                      className="pcs-faq-tab-indicator"
                      layoutId="pcsFaqActiveTab"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* FAQ Content Grid */}
          <div className="pcs-faq-inner">
            {/* Left: Product Info Card */}
            <motion.div
              className="pcs-faq-left"
              key={currentProductFaq.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="pcs-faq-prod-card">
                <div className="pcs-faq-prod-tag">{currentProductFaq.badge}</div>
                <h3 className="pcs-faq-prod-title">{currentProductFaq.name}</h3>
                <p className="pcs-faq-prod-tagline">{currentProductFaq.tagline}</p>
                <div className="pcs-faq-prod-divider" />
                <p className="pcs-faq-prod-hint">
                  Need custom deployment architecture or enterprise integration guidance?
                </p>
                <a href="/contact" className="pcs-faq-prod-cta">
                  <span>Speak with our Team</span>
                  <span className="pcs-faq-arrow">&rarr;</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Accordion */}
            <motion.div
              className="pcs-faq-right"
              key={`faq-list-${currentProductFaq.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {currentProductFaq.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="pcs-faq-item">
                    <button
                      className={`pcs-faq-question ${isOpen ? 'pcs-faq-question--open' : ''}`}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      type="button"
                    >
                      <span>{faq.q}</span>
                      <span className={`pcs-faq-chevron ${isOpen ? 'rotated' : ''}`}>&#9662;</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
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
                  </div>
                );
              })}
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
