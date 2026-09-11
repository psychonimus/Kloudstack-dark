import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { 
  FaDotCircle, 
  FaTwitter, 
  FaLinkedinIn, 
  FaLink, 
  FaCheck, 
  FaArrowLeft, 
  FaShieldAlt, 
  FaChartLine, 
  FaUserTie, 
  FaLock, 
  FaExclamationTriangle,
  FaArrowRight,
  FaQuestionCircle,
  FaSyncAlt,
  FaLayerGroup,
  FaHandshake,
  FaSignOutAlt,
  FaUsersCog
} from 'react-icons/fa'
import { 
  MdOutlineSecurity, 
  MdSpeed, 
  MdOutlineAccountBalance,
  MdOutlineWarningAmber,
  MdFactCheck,
  MdDns
} from 'react-icons/md'
import { LuBookmark, LuCheckCheck } from 'react-icons/lu'
import './CybersecurityGrowthStrategy.css'

const ThirdPartyVendorRisk = () => {
  const [activeSection, setActiveSection] = useState('intro')
  const [copied, setCopied] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Track active section for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'intro',
        'boardroom-issue',
        'due-diligence-gaps',
        'vendor-questions',
        'continuous-monitoring',
        'resilient-ecosystem'
      ]

      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -90
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="blog-detail-wrapper">
      {/* ── Reading Progress Bar ─────────────────────── */}
      <motion.div className="blog-reading-progress" style={{ scaleX }} />

      {/* ── Background Glows & Grid ─────────────────── */}
      <div className="blog-bg-grid" />
      <div className="blog-ambient-orb blog-ambient-orb--top" />
      <div className="blog-ambient-orb blog-ambient-orb--right" />

      {/* ── Hero Section ────────────────────────────── */}
      <header className="blog-hero-section">
        <div className="container">
          {/* Breadcrumb & Navigation */}
          <div className="blog-top-nav">
            <Link to="/resources" className="blog-back-btn">
              <FaArrowLeft className="me-2" />
              Back to Resources
            </Link>
            <div className="blog-tag-badge">
              <FaDotCircle className="me-2 text-warning" size={10} />
              Third-Party Risk Management (TPRM)
            </div>
          </div>

          {/* Article Header */}
          <div className="blog-header-content">
            <h1 className="blog-main-title section-heading text-start">
              The Silent Cyber Risk: <br />
              <span className="blog-title-gradient">Third-Party Vendors Could Be Your Biggest Vulnerability.</span>
            </h1>

            <p className="blog-header-lead">
              Your security is only as strong as your weakest vendor. In today's hyper-connected enterprise environment, over 50% of breaches originate through external partners, suppliers, and digital supply chains.
            </p>

            {/* Article Metadata Bar */}
            <div className="blog-meta-bar">
              <div className="blog-publisher-card">
                <div className="blog-publisher-icon">
                  <MdOutlineSecurity />
                </div>
                <div className="blog-author-details">
                  <span className="blog-author-name">KloudStack Cyber Practice</span>
                  <span className="blog-author-title">Third-Party Risk &amp; Compliance Advisory</span>
                </div>
              </div>

              <div className="blog-article-meta">
                <div className="blog-meta-item">
                  <span className="blog-meta-label">Published</span>
                  <span className="blog-meta-val">Jul 28, 2025</span>
                </div>
                <div className="blog-meta-divider" />
                <div className="blog-meta-item">
                  <span className="blog-meta-label">Read Time</span>
                  <span className="blog-meta-val">5 min read</span>
                </div>
                <div className="blog-meta-divider" />
                <div className="blog-share-tools">
                  <button 
                    onClick={handleCopyLink} 
                    className={`blog-share-btn${copied ? ' copied' : ''}`}
                    title="Copy Link"
                  >
                    {copied ? <FaCheck className="text-success" /> : <FaLink />}
                    <span>{copied ? 'Copied!' : 'Share'}</span>
                  </button>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="blog-share-icon-btn"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('The Silent Cyber Risk: Third-Party Vendors Could Be Your Biggest Vulnerability by KloudStack')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="blog-share-icon-btn"
                    title="Share on X (Twitter)"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="blog-key-metrics-grid">
            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <MdOutlineWarningAmber />
              </div>
              <div>
                <div className="metric-val">&gt; 50% of Breaches</div>
                <div className="metric-desc">Originate from third-party ecosystems</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <FaSyncAlt />
              </div>
              <div>
                <div className="metric-val">Continuous Posture</div>
                <div className="metric-desc">Real-time telemetry vs annual audits</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <FaShieldAlt />
              </div>
              <div>
                <div className="metric-val">Shared Responsibility</div>
                <div className="metric-desc">Tiered governance across supply chains</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content & Sidebar Layout ───────────── */}
      <main className="blog-body-section">
        <div className="container">
          <div className="blog-layout-grid">
            
            {/* ── Sticky Sidebar (Left) ── */}
            <aside className="blog-sidebar">
              <div className="blog-sidebar-sticky">
                
                {/* Table of Contents */}
                <div className="blog-toc-card">
                  <div className="toc-title">
                    <LuBookmark className="me-2 text-warning" />
                    Table of Contents
                  </div>
                  <nav className="toc-nav">
                    {[
                      { id: 'intro', label: 'The Weakest Link' },
                      { id: 'boardroom-issue', label: 'Vendor Risk in Boardrooms' },
                      { id: 'due-diligence-gaps', label: 'Due Diligence Gaps' },
                      { id: 'vendor-questions', label: 'Key Onboarding Questions' },
                      { id: 'continuous-monitoring', label: 'Continuous vs One-Time' },
                      { id: 'resilient-ecosystem', label: 'Building Resilient Ecosystems' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        className={`toc-item-link${activeSection === item.id ? ' active' : ''}`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        <span className="toc-indicator" />
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Advisory Widget */}
                <div className="blog-advisory-card">
                  <div className="advisory-badge">
                    <MdOutlineSecurity className="me-1" />
                    TPRM Advisory
                  </div>
                  <h4 className="advisory-title">Assess Your Third-Party Attack Surface</h4>
                  <p className="advisory-text">
                    KloudStack delivers comprehensive supply chain audits and continuous vendor security monitoring.
                  </p>
                  <Link to="/contact" className="advisory-btn">
                    Request Vendor Audit
                    <FaArrowRight className="ms-2" size={12} />
                  </Link>
                </div>

              </div>
            </aside>

            {/* ── Article Content (Right) ── */}
            <article className="blog-article-content">
              
              {/* Intro Block */}
              <section id="intro" className="blog-content-block">
                <p className="blog-lead-text">
                  Your security is only as strong as your weakest vendor. It's a sobering reality that keeps CISOs up at night. In today's hyper-connected business environment, organizations don't just manage their own networks; they rely on an intricate web of suppliers, partners, and service providers. And each of these connections represents a potential entry point for attackers.
                </p>

                <div className="blog-pullquote">
                  <div className="quote-mark">“</div>
                  <p className="quote-text">
                    The numbers tell a stark story: over 50% of organizations have experienced a data breach caused by a third party. Yet many still treat vendor security as an afterthought. Here's why that needs to change and how to fix it.
                  </p>
                </div>
              </section>

              {/* Section 1 */}
              <section id="boardroom-issue" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  01. Boardroom Accountability
                </div>
                <h2 className="blog-section-title">
                  Why Vendor Risk Is Becoming a Board-Level Issue
                </h2>

                <p>
                  Board members are waking up to a critical truth: a breach at a vendor can be just as damaging as a direct attack on their own organization.
                </p>

                <p>
                  The SolarWinds attack, the Target breach through an HVAC vendor, and countless others have demonstrated that threat actors increasingly target the "weakest link" in the supply chain. This isn't a technical IT problem; it's a business continuity risk that can impact revenue, reputation, and regulatory compliance.
                </p>

                <p>
                  When a third-party vendor is compromised, the affected organization bears the brunt of customer outrage, regulatory fines, and operational disruption even if they weren't the direct target. This is why boards now demand visibility into the entire vendor ecosystem, treating third-party risk with the same gravity as internal security gaps.
                </p>

                <div className="blog-highlight-card">
                  <div className="highlight-icon">
                    <MdOutlineAccountBalance size={24} />
                  </div>
                  <div className="highlight-text">
                    <strong>Enterprise Blast Radius:</strong> Attackers no longer breach perimeters directly when they can compromise trusted third-party credentials and privileged integrations.
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="due-diligence-gaps" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  02. Vulnerability Blindspots
                </div>
                <h2 className="blog-section-title">
                  Typical Gaps in Third-Party Security Due Diligence
                </h2>

                <p>
                  Many organizations are flying blind when it comes to vendor security. Common pitfalls include:
                </p>

                <div className="cxo-steps-container">
                  {[
                    {
                      num: 'A',
                      title: 'Checklist Mentality',
                      desc: 'Treating vendor security as a simple questionnaire rather than a meaningful assessment. Vendors can easily check boxes without demonstrating real security maturity.',
                      icon: <MdFactCheck />
                    },
                    {
                      num: 'B',
                      title: 'Insufficient Depth',
                      desc: 'Focusing only on initial onboarding and failing to dig into actual security controls, incident response capabilities, and past breach history.',
                      icon: <MdOutlineSecurity />
                    },
                    {
                      num: 'C',
                      title: 'No Tiered Approach',
                      desc: 'Treating all vendors the same, rather than applying more rigorous scrutiny to those with access to sensitive data or critical systems.',
                      icon: <FaLayerGroup />
                    },
                    {
                      num: 'D',
                      title: 'Over-Reliance on Self-Assessments',
                      desc: "Trusting vendors' self-reported security postures without independent verification. Let's face it, no vendor is going to highlight their weaknesses.",
                      icon: <FaExclamationTriangle />
                    },
                    {
                      num: 'E',
                      title: 'Ignoring Subcontractors (4th & 5th Party Risk)',
                      desc: "Failing to assess whether your vendor's vendors are secure. Many breaches occur through fourth- and fifth-party relationships that the primary organization never vetted.",
                      icon: <MdDns />
                    }
                  ].map((gap) => (
                    <div key={gap.num} className="cxo-step-card">
                      <div className="step-num-badge">{gap.num}</div>
                      <div className="step-content">
                        <div className="step-header">
                          <span className="step-icon">{gap.icon}</span>
                          <h3 className="step-title">{gap.title}</h3>
                        </div>
                        <p className="step-desc">{gap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3 */}
              <section id="vendor-questions" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  03. Practical Framework
                </div>
                <h2 className="blog-section-title">
                  Questions to Ask Before Onboarding Vendors
                </h2>

                <p>
                  A robust due diligence process starts with asking the right questions. Here are essential inquiries across five core pillars:
                </p>

                <div className="features-grid">
                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaShieldAlt />
                    </div>
                    <h3 className="feature-heading">Security Governance</h3>
                    <ul className="wp-keypoints" style={{ padding: 0 }}>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        Do you have a formal information security program? Who owns it at the executive level?
                      </li>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        Do you conduct regular third-party risk assessments of your own vendors?
                      </li>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        Do you have a clear incident response plan? Have you tested it recently?
                      </li>
                    </ul>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaLock />
                    </div>
                    <h3 className="feature-heading">Data Protection</h3>
                    <ul className="wp-keypoints" style={{ padding: 0 }}>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        What types of our data will you access, store, or process?
                      </li>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        Where will data reside (geographically and across cloud providers)?
                      </li>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        Is data encrypted at rest and in transit? Who holds the encryption keys?
                      </li>
                    </ul>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaUserTie />
                    </div>
                    <h3 className="feature-heading">Access &amp; Identity</h3>
                    <ul className="wp-keypoints" style={{ padding: 0 }}>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        Do you enforce multi-factor authentication (MFA) for all administrative access?
                      </li>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        How do you manage privileged access? Is it logged and monitored?
                      </li>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        How quickly can you revoke access for departing employees?
                      </li>
                    </ul>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <MdOutlineAccountBalance />
                    </div>
                    <h3 className="feature-heading">Compliance &amp; Continuity</h3>
                    <ul className="wp-keypoints" style={{ padding: 0 }}>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        Which security frameworks do you follow (ISO 27001, SOC 2, NIST)?
                      </li>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        Can you provide recent audit reports or penetration test results?
                      </li>
                      <li className="wp-keypoint">
                        <span className="wp-keypoint-dot" />
                        What is your disaster recovery plan and recovery time objective (RTO)?
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="continuous-monitoring" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  04. Modern Methodology
                </div>
                <h2 className="blog-section-title">
                  Continuous Monitoring vs. One-Time Assessments
                </h2>

                <p>
                  One of the biggest mistakes organizations make is treating vendor security as a <em>"set it and forget it"</em> activity.
                </p>

                <p>
                  <strong>One-time assessments</strong> provide only a static snapshot at onboarding. But vendors change constantly: they acquire new entities, hire staff, deploy new technologies, and modify configurations. A clean bill of health from twelve months ago is practically obsolete today.
                </p>

                <div className="blog-callout-box">
                  <div className="callout-header">
                    <FaSyncAlt className="text-warning me-2" />
                    <strong>The Continuous Monitoring Imperative</strong>
                  </div>
                  <ul className="wp-keypoints mt-2" style={{ padding: 0 }}>
                    <li className="wp-keypoint">
                      <span className="wp-keypoint-dot" />
                      <strong>Automated Risk Scoring:</strong> Continuous scanning for exposed credentials, unpatched CVEs, and security control drift.
                    </li>
                    <li className="wp-keypoint">
                      <span className="wp-keypoint-dot" />
                      <strong>Ongoing Compliance Tracking:</strong> Automated alerts whenever a vendor's SOC 2 or ISO certification lapses.
                    </li>
                    <li className="wp-keypoint">
                      <span className="wp-keypoint-dot" />
                      <strong>Real-Time Threat Intelligence:</strong> Immediate detection when a vendor appears in dark-web breach telemetry.
                    </li>
                    <li className="wp-keypoint">
                      <span className="wp-keypoint-dot" />
                      <strong>Periodic Re-assessments:</strong> Triggered reviews for high-risk vendors at structured intervals.
                    </li>
                  </ul>
                </div>

                <p>
                  The operational cost of continuous monitoring is a tiny fraction of the cost of a breach. When automated, it empowers security teams to focus on strategic risk mitigation rather than chasing static spreadsheets.
                </p>
              </section>

              {/* Section 5 */}
              <section id="resilient-ecosystem" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  05. Actionable Roadmap
                </div>
                <h2 className="blog-section-title">
                  Building a Resilient Vendor Ecosystem
                </h2>

                <p>
                  Creating a truly resilient vendor ecosystem requires moving beyond compliance to cultivate a culture of shared security responsibility:
                </p>

                <div className="cxo-steps-container">
                  {[
                    {
                      num: '01',
                      title: 'Tier Your Vendors',
                      desc: 'Categorize suppliers by criticality, sensitive data access, and integration depth. Apply high-touch due diligence for critical vendors and lighter controls for low-risk suppliers.',
                      icon: <FaLayerGroup />
                    },
                    {
                      num: '02',
                      title: 'Standardize Security Requirements',
                      desc: 'Enforce clear, non-negotiable contractual clauses covering encryption standards, breach notification SLAs (e.g., 24-48 hours), and mandatory right-to-audit clauses.',
                      icon: <MdOutlineSecurity />
                    },
                    {
                      num: '03',
                      title: 'Collaborate, Don’t Dictate',
                      desc: 'Cultivate security partnerships. Share threat intelligence, offer remediation guidance, and assist smaller vendors in elevating their baseline posture.',
                      icon: <FaHandshake />
                    },
                    {
                      num: '04',
                      title: 'Build Exit Strategies',
                      desc: 'Every vendor engagement must include a definitive offboarding playbook: cryptographic data destruction certificates, access revocation, and migration paths.',
                      icon: <FaSignOutAlt />
                    },
                    {
                      num: '05',
                      title: 'Practice Incident Response Together',
                      desc: 'Execute joint tabletop simulation exercises with critical suppliers. When an incident occurs, response mechanisms must be muscle memory, not discovery.',
                      icon: <FaUsersCog />
                    }
                  ].map((item) => (
                    <div key={item.num} className="cxo-step-card">
                      <div className="step-num-badge">{item.num}</div>
                      <div className="step-content">
                        <div className="step-header">
                          <span className="step-icon">{item.icon}</span>
                          <h3 className="step-title">{item.title}</h3>
                        </div>
                        <p className="step-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Final Wrap-up Box */}
                <div className="blog-conclusion-box">
                  <div className="conclusion-badge">
                    <LuCheckCheck className="me-2" />
                    Key Takeaway
                  </div>
                  <h3 className="conclusion-title">Protecting the Entire Digital Supply Chain</h3>
                  <p className="conclusion-text">
                    Your organization is only as secure as the vendors you trust. Third-party risk isn't going away — as supply chains become more interconnected, it only compounds. Treat vendor security not as a paperwork exercise, but as a strategic business imperative. Don't let your biggest vulnerability be the one you didn't see coming.
                  </p>
                </div>
              </section>

            </article>

          </div>
        </div>
      </main>

      {/* ── Related Articles Section ────────────────── */}
      <section className="blog-related-section">
        <div className="container">
          <div className="res-section-header mb-4">
            <div className="res-section-label">
              <span className="res-label-dot" />
              Keep Reading
            </div>
            <h2 className="res-section-title section-heading">
              Related Insights &amp; Perspectives
            </h2>
          </div>

          <div className="blogs-grid">
            <article className="blog-card" style={{ '--blog-accent': '#5b9cf6' }}>
              <div className="blog-card-band">
                <img src="/images/cybersecurity.png" alt="Cybersecurity Strategy" className="blog-card-cover-img" />
                <div className="blog-card-cover-overlay" />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-category">Cybersecurity Strategy</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-read-time">6 min read</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-date">Aug 12, 2025</span>
                </div>
                <h3 className="blog-title">
                  Cybersecurity is No Longer an IT Budget. It’s a Business Growth Strategy
                </h3>
                <p className="blog-excerpt">
                  Today, cybersecurity has fundamentally transformed into a strategic business enabler—building trust, accelerating digital adoption, and unlocking revenue.
                </p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-card-footer-tag">
                  <FaDotCircle className="me-2 text-warning" size={8} />
                  Executive Insight
                </div>
                <Link to="/resources/cybersecurity-growth-strategy" className="blog-read-more">
                  Read Article
                  <FaArrowRight className="blog-arrow" size={12} />
                </Link>
              </div>
            </article>

            <article className="blog-card" style={{ '--blog-accent': '#6be88a' }}>
              <div className="blog-card-band">
                <img src="/images/ai-and-security.png" alt="AI in Banking" className="blog-card-cover-img" />
                <div className="blog-card-cover-overlay" />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-category">AI &amp; Financial Security</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-read-time">7 min read</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-date">Jul 10, 2025</span>
                </div>
                <h3 className="blog-title">
                  AI is Transforming Banking Faster Than Security Can Keep Up
                </h3>
                <p className="blog-excerpt">
                  From algorithmic credit to autonomous fraud detection, AI is reshaping banking. Here is why security teams struggle to keep pace and how to govern AI risk.
                </p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-card-footer-tag">
                  <FaDotCircle className="me-2 text-success" size={8} />
                  Executive Insight
                </div>
                <Link to="/resources/ai-transforming-banking-security" className="blog-read-more">
                  Read Article
                  <FaArrowRight className="blog-arrow" size={12} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────── */}
      <section className="blog-bottom-cta">
        <div className="container">
          <div className="blog-cta-banner">
            <div className="cta-content">
              <span className="cta-kicker">KloudStack TPRM Practice</span>
              <h2 className="cta-heading">Gain Uncompromised Visibility Across Your Vendor Ecosystem</h2>
              <p className="cta-sub">
                Our security architects help enterprise leaders implement continuous vendor risk assessments, third-party governance, and automated supply chain defense.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-gold-primary">
                Schedule TPRM Audit
              </Link>
              <Link to="/services/cyber-security" className="btn-dark-outline">
                Explore Cyber Defense
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThirdPartyVendorRisk
