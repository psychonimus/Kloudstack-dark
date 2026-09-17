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
  FaLock, 
  FaExclamationTriangle,
  FaArrowRight,
  FaUsers,
  FaUserShield,
  FaServer,
  FaFileContract,
  FaRegLightbulb
} from 'react-icons/fa'
import { 
  MdOutlineSecurity, 
  MdSpeed, 
  MdOutlineAccountBalance,
  MdOutlineTrendingUp,
  MdOutlineCrisisAlert,
  MdPolicy,
  MdChecklistRtl
} from 'react-icons/md'
import { LuCheckCheck, LuBookmark, LuShieldAlert, LuHardDriveDownload } from 'react-icons/lu'
import './CybersecurityGrowthStrategy.css'

const StrategicCybersecurityMistakes = () => {
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
        'it-project-trap',
        'delaying-ownership',
        'insider-risk',
        'resilience-planning',
        'tools-vs-governance'
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
              Strategic Cyber Leadership
            </div>
          </div>

          {/* Article Header */}
          <div className="blog-header-content">
            <h1 className="blog-main-title section-heading text-start">
              The Biggest Cybersecurity Mistakes Aren’t Technical. <br />
              <span className="blog-title-gradient">They’re Strategic.</span>
            </h1>

            <p className="blog-header-lead">
              Most breaches don't happen because a firewall rule was misconfigured. They happen because leadership treated cybersecurity as a technology problem instead of an enterprise business risk.
            </p>

            {/* Article Metadata Bar */}
            <div className="blog-meta-bar">
              <div className="blog-publisher-card">
                <div className="blog-publisher-icon">
                  <MdOutlineSecurity />
                </div>
                <div className="blog-author-details">
                  <span className="blog-author-name">KloudStack Advisory</span>
                  <span className="blog-author-title">Executive Governance &amp; Strategy</span>
                </div>
              </div>

              <div className="blog-article-meta">
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
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('The Biggest Cybersecurity Mistakes Aren’t Technical. They’re Strategic by KloudStack')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                <FaRegLightbulb />
              </div>
              <div>
                <div className="metric-val">Business Risk</div>
                <div className="metric-desc">Beyond traditional IT budgeting</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <LuShieldAlert />
              </div>
              <div>
                <div className="metric-val">5 Blind Spots</div>
                <div className="metric-desc">Strategic flaws behind major breaches</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <MdPolicy />
              </div>
              <div>
                <div className="metric-val">Governance First</div>
                <div className="metric-desc">Outcomes over endless tool purchases</div>
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
                      { id: 'intro', label: 'Overview & The Core Flaw' },
                      { id: 'it-project-trap', label: '1. The IT Project Trap' },
                      { id: 'delaying-ownership', label: '2. Delaying Executive Ownership' },
                      { id: 'insider-risk', label: '3. Underestimating Insider Risk' },
                      { id: 'resilience-planning', label: '4. Ignoring Cyber Resilience' },
                      { id: 'tools-vs-governance', label: '5. Tools vs. Governance' },
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
                    Strategic Advisory
                  </div>
                  <h4 className="advisory-title">Upgrade from Reactive IT to Enterprise Resilience</h4>
                  <p className="advisory-text">
                    KloudStack aligns board-level governance, zero-trust architectures, and immutable resilience planning.
                  </p>
                  <Link to="/contact" className="advisory-btn">
                    Schedule CXO Session
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
                  Most breaches don't happen because a firewall rule was misconfigured. They happen because leadership treated cybersecurity as a technology problem instead of an enterprise business risk.
                </p>

                <div className="blog-pullquote">
                  <div className="quote-mark">“</div>
                  <p className="quote-text">
                    The breaches that make headlines rarely start with an unstoppable zero-day exploit. They start with a strategic blind spot in the boardroom.
                  </p>
                </div>

                <p>
                  When cybersecurity is relegated to a technical silo, organizations misjudge their true exposure. Below are the five fundamental strategic mistakes that cost enterprises far more than any missing software patch.
                </p>
              </section>

              {/* Section 1: Treating Cybersecurity as an IT Project */}
              <section id="it-project-trap" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  Mistake 01
                </div>
                <h2 className="blog-section-title">
                  Treating Cybersecurity as an IT Project
                </h2>

                <p>
                  When security sits strictly under IT operations, it is forced to compete with helpdesk tickets, network infrastructure upgrades, and daily software rollouts. In this model, security inevitably gets treated as a cost centre and a speed bump rather than a foundational strategic capability.
                </p>

                <div className="blog-highlight-card">
                  <div className="highlight-icon">
                    <MdOutlineAccountBalance size={24} />
                  </div>
                  <div className="highlight-text">
                    <strong>The Strategic Remedy:</strong> Treat cybersecurity as enterprise risk. It belongs in business strategy, capital planning, budgeting, and M&amp;A vendor evaluations—not just in the IT sprint backlog. Every major system, acquisition, and third-party integration must pass through a security review before production release.
                  </div>
                </div>
              </section>

              {/* Section 2: Delaying Executive Ownership */}
              <section id="delaying-ownership" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  Mistake 02
                </div>
                <h2 className="blog-section-title">
                  Delaying Executive Ownership
                </h2>

                <p>
                  Many executive teams and boards engage with cybersecurity only after an incident or regulatory notice hits. By then, the damage is already done.
                </p>

                <p>
                  Executives do not need to understand packet inspection or cryptographic hashes. They <em>do</em> need to own corporate risk appetite, capital allocation decisions, and organizational accountability. When leadership delays ownership, security teams are forced to make high-stakes business risk trade-offs they were never empowered to make—and when a breach occurs, no one takes ownership of the outcome.
                </p>

                <div className="blog-callout-box">
                  <div className="callout-header">
                    <FaUserShield className="text-warning me-2" />
                    <strong>Governance vs. Technical Delegation</strong>
                  </div>
                  <p className="callout-body">
                    The strongest enterprise security programs establish a named executive sponsor, regular board-level reporting, and clear crisis escalation paths. Cybersecurity is a governance duty, not a delegated technical task.
                  </p>
                </div>
              </section>

              {/* Section 3: Underestimating Insider Risk */}
              <section id="insider-risk" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  Mistake 03
                </div>
                <h2 className="blog-section-title">
                  Underestimating Insider Risk
                </h2>

                <p>
                  Insider risk is not limited to rogue, malicious employees. It encompasses negligent staff, compromised credentials, unmonitored contractors, and departing employees with lingering access rights.
                </p>

                <p>
                  Most organizations disproportionately focus on perimeter defenses while ignoring internal access sprawl:
                </p>

                <div className="features-grid">
                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaUsers />
                    </div>
                    <h3 className="feature-heading">Access &amp; Identity Sprawl</h3>
                    <p className="feature-desc">
                      Former employees retain active SSO credentials weeks after departure. Shared passwords persist across teams without multi-factor enforcement.
                    </p>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaLock />
                    </div>
                    <h3 className="feature-heading">Unmonitored Data Repositories</h3>
                    <p className="feature-desc">
                      Sensitive customer data, PII, and financial records reside in unencrypted, unmonitored cloud buckets and public collaboration spaces.
                    </p>
                  </div>
                </div>

                <div className="blog-highlight-card">
                  <div className="highlight-icon">
                    <FaShieldAlt size={24} />
                  </div>
                  <div className="highlight-text">
                    <strong>Mitigating Insider Exposure:</strong> Enforce strict least-privilege access, automate same-day offboarding workflows, deploy behavioral anomaly detection, and cultivate a culture where employees feel safe reporting mistakes immediately without fear of retribution.
                  </div>
                </div>
              </section>

              {/* Section 4: Ignoring Cyber Resilience Planning */}
              <section id="resilience-planning" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  Mistake 04
                </div>
                <h2 className="blog-section-title">
                  Ignoring Cyber Resilience Planning
                </h2>

                <p>
                  Prevention will inevitably fail under sophisticated adversary pressure. The decisive question for executive survival is: <strong>How fast can you recover?</strong>
                </p>

                <p>
                  Many organizations invest heavily in blocking cyber attacks but have zero tested recovery capabilities. Backups exist but are never restored during live drills. Incident response playbooks are drafted into PDF binders but never practiced. External crisis communication plans are missing.
                </p>

                <div className="blog-warning-banner">
                  <div className="warning-banner-top">
                    <FaExclamationTriangle className="warning-icon" />
                    <span className="warning-title">The Resilience Test</span>
                  </div>
                  <p className="warning-text">
                    Cyber resilience means surviving digital disruption. That requires immutable, air-gapped backups, executive tabletop simulations, well-defined recovery roles, and realistic downtime cost models. If leadership cannot answer: <strong>"How long can our revenue-critical systems remain offline before our business fails?"</strong>, the organization does not have a true resilience plan.
                  </p>
                </div>
              </section>

              {/* Section 5: Focusing on Tools Instead of Governance */}
              <section id="tools-vs-governance" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  Mistake 05
                </div>
                <h2 className="blog-section-title">
                  Focusing on Tools Instead of Governance
                </h2>

                <p>
                  Procuring more software licenses feels like tangible progress. But tool proliferation without sound governance creates dangerous blind spots, widespread alert fatigue, and organizational finger-pointing when incidents occur.
                </p>

                <p>
                  Governance establishes policies, ownership, quantifiable metrics, and third-party vendor oversight. It determines who makes decisions, who reports risk, and how success is measured. Tools exist to support governance—they can never replace it.
                </p>

                <div className="cxo-steps-container">
                  <div className="cxo-step-card">
                    <div className="step-num-badge">01</div>
                    <div className="step-content">
                      <div className="step-header">
                        <FaUsers className="step-icon" />
                        <h4 className="step-title">Assign Dedicated Risk Owners</h4>
                      </div>
                      <p className="step-desc">
                        Every critical asset and data domain must have an executive owner accountable for its protection posture.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">02</div>
                    <div className="step-content">
                      <div className="step-header">
                        <MdPolicy className="step-icon" />
                        <h4 className="step-title">Define Explicit Risk Appetite</h4>
                      </div>
                      <p className="step-desc">
                        Establish formal boundaries for acceptable residual risk, third-party reliance, and maximum tolerable downtime.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">03</div>
                    <div className="step-content">
                      <div className="step-header">
                        <MdChecklistRtl className="step-icon" />
                        <h4 className="step-title">Enforce Remediation Deadlines</h4>
                      </div>
                      <p className="step-desc">
                        Track vulnerability mitigation strictly against SLAs tied directly to revenue-critical business services.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">04</div>
                    <div className="step-content">
                      <div className="step-header">
                        <MdOutlineAccountBalance className="step-icon" />
                        <h4 className="step-title">Report Progress to Leadership Monthly</h4>
                      </div>
                      <p className="step-desc">
                        Provide clean, jargon-free board scorecards focused on risk reduction trends rather than raw alert volumes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conclusion Box */}
                <div className="blog-conclusion-box">
                  <div className="conclusion-badge">
                    <FaShieldAlt className="me-1" />
                    Executive Summary
                  </div>
                  <h3 className="conclusion-title">Cybersecurity is a Strategic Discipline</h3>
                  <p className="conclusion-text">
                    Stop treating cybersecurity as a technical project. Start treating it as a core strategic business capability. Assign named ownership, plan rigorously for operational failure, govern your security ecosystem, and measure what matters.
                  </p>
                </div>

                {/* Author Bio Footer Card */}
                <div className="blog-author-bio-card">
                  <img 
                    src="/images/vishal-sir.png" 
                    alt="Cybersecurity Practice Leader" 
                    className="bio-author-img"
                  />
                  <div className="bio-content">
                    <div className="bio-role-tag">Executive Practice Lead</div>
                    <h4 className="bio-name">KloudStack Enterprise Advisory Practice</h4>
                    <p className="bio-desc">
                      Partnering with boardrooms and enterprise CISOs to transform security postures into competitive growth drivers, eliminate governance blind spots, and guarantee continuous cyber resilience.
                    </p>
                  </div>
                </div>

              </section>

            </article>

          </div>
        </div>
      </main>

      {/* ── Related Articles Section ─────────────────── */}
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

            <article className="blog-card" style={{ '--blog-accent': '#4a90e2' }}>
              <div className="blog-card-band">
                <img src="/images/cyber-security.png" alt="Cybersecurity Dashboard Metrics" className="blog-card-cover-img" />
                <div className="blog-card-cover-overlay" />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-category">Security Metrics &amp; Governance</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-read-time">6 min read</span>
                </div>
                <h3 className="blog-title">
                  Your Cybersecurity Dashboard Is Full of Metrics. But Are You Measuring What Matters?
                </h3>
                <p className="blog-excerpt">
                  The dashboard paradox: more metrics, less clarity. Learn why activity metrics fail and how to build an executive cyber scorecard.
                </p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-card-footer-tag">
                  <FaDotCircle className="me-2 text-warning" size={8} />
                  Executive Insight
                </div>
                <Link to="/resources/cybersecurity-dashboard-metrics" className="blog-read-more">
                  Read Article
                  <FaArrowRight className="blog-arrow" size={12} />
                </Link>
              </div>
            </article>

            <article className="blog-card" style={{ '--blog-accent': '#d4a04a' }}>
              <div className="blog-card-band">
                <img src="/images/zts.png" alt="Third Party Vendor Risk" className="blog-card-cover-img" />
                <div className="blog-card-cover-overlay" />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-category">Third-Party Risk</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-read-time">5 min read</span>
                </div>
                <h3 className="blog-title">
                  The Silent Cyber Risk: Third-Party Vendors Could Be Your Biggest Vulnerability
                </h3>
                <p className="blog-excerpt">
                  Over 50% of organizations have experienced a breach caused by a third party. Here is why vendor risk is a board-level priority.
                </p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-card-footer-tag">
                  <FaDotCircle className="me-2 text-warning" size={8} />
                  Executive Insight
                </div>
                <Link to="/resources/third-party-vendor-risk" className="blog-read-more">
                  Read Article
                  <FaArrowRight className="blog-arrow" size={12} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Banner ────────────────────────── */}
      <section className="blog-bottom-cta">
        <div className="container">
          <div className="blog-cta-banner">
            <div className="cta-content">
              <span className="cta-kicker">Strategic Cyber Transformation</span>
              <h2 className="cta-heading">Eliminate Strategic Blind Spots in Your Security Posture</h2>
              <p className="cta-sub">
                Partner with KloudStack to establish executive-level cyber governance, quantify resilience metrics, and build defensive architectures that withstand enterprise disruptions.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-gold-primary">
                Schedule Strategic Consultation <FaArrowRight className="ms-2" size={12} />
              </Link>
              <Link to="/services/cyber-security" className="btn-dark-outline">
                Explore Enterprise Security
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default StrategicCybersecurityMistakes
