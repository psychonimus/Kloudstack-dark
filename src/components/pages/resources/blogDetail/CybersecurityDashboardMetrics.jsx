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
  FaFileAlt,
  FaLayerGroup,
  FaUsers
} from 'react-icons/fa'
import { 
  MdOutlineSecurity, 
  MdSpeed, 
  MdOutlineAccountBalance,
  MdOutlineTrendingUp,
  MdAutoGraph,
  MdOutlineDashboardCustomize,
  MdInsights,
  MdChecklistRtl
} from 'react-icons/md'
import { LuCheckCheck, LuBookmark, LuGauge } from 'react-icons/lu'
import './CybersecurityGrowthStrategy.css'

const CybersecurityDashboardMetrics = () => {
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
        'why-dashboards-fail',
        'metrics-execs-care',
        'board-vs-it-kpis',
        'activity-vs-risk',
        'executive-scorecard'
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
              Security Metrics &amp; Governance
            </div>
          </div>

          {/* Article Header */}
          <div className="blog-header-content">
            <h1 className="blog-main-title section-heading text-start">
              Your Cybersecurity Dashboard Is Full of Metrics. <br />
              <span className="blog-title-gradient">But Are You Measuring What Matters?</span>
            </h1>

            <p className="blog-header-lead">
              Security teams report activity. Executives need to understand business risk. When those two worlds don't connect, funding gets delayed, priorities become reactive, and accountability stays vague.
            </p>

            {/* Article Metadata Bar */}
            <div className="blog-meta-bar">
              <div className="blog-publisher-card">
                <div className="blog-publisher-icon">
                  <MdOutlineDashboardCustomize />
                </div>
                <div className="blog-author-details">
                  <span className="blog-author-name">KloudStack Advisory</span>
                  <span className="blog-author-title">Cyber Risk &amp; Executive Governance</span>
                </div>
              </div>

              <div className="blog-article-meta">
                <div className="blog-meta-item">
                  <span className="blog-meta-label">Read Time</span>
                  <span className="blog-meta-val">6 min read</span>
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
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Your Cybersecurity Dashboard Is Full of Metrics. But Are You Measuring What Matters? by KloudStack')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                <LuGauge />
              </div>
              <div>
                <div className="metric-val">10,000 Alerts</div>
                <div className="metric-desc">Activity vs. True Risk Reduction</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <FaExclamationTriangle />
              </div>
              <div>
                <div className="metric-val">61 Discrete Tools</div>
                <div className="metric-desc">Average enterprise tool sprawl</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <MdChecklistRtl />
              </div>
              <div>
                <div className="metric-val">5-Metric Model</div>
                <div className="metric-desc">Actionable Executive Cyber Scorecard</div>
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
                      { id: 'intro', label: '1. The Dashboard Paradox' },
                      { id: 'why-dashboards-fail', label: '2. Why More Dashboards Fail' },
                      { id: 'metrics-execs-care', label: '3. Metrics Executives Care About' },
                      { id: 'board-vs-it-kpis', label: '4. KPIs: Boards vs IT Teams' },
                      { id: 'activity-vs-risk', label: '5. Activity vs Risk Indicators' },
                      { id: 'executive-scorecard', label: '6. The 5-Metric Scorecard' },
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
                    Executive Governance
                  </div>
                  <h4 className="advisory-title">Translate Telemetry into Financial Risk Language</h4>
                  <p className="advisory-text">
                    KloudStack bridges SOC operations and boardroom oversight with quantified loss exposure and executive scorecards.
                  </p>
                  <Link to="/contact" className="advisory-btn">
                    Schedule Executive Briefing
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
                  Your SOC team just closed 10,000 alerts this quarter. Phishing incidents dropped 25%. Endpoint coverage hit 98%. The dashboard looks impressive. And yet, when a board member asks <em>"Are we safer than we were six months ago?"</em> nobody can answer with confidence.
                </p>

                <div className="blog-pullquote">
                  <div className="quote-mark">“</div>
                  <p className="quote-text">
                    This is the dashboard paradox: more metrics, less clarity. Security teams report activity. Executives need to understand business risk. When those two worlds don't connect, funding gets delayed, priorities become reactive, and accountability stays vague.
                  </p>
                </div>

                <p>
                  This guide cuts through the noise. We'll cover why more dashboards don't equal better decisions, the security metrics executives actually care about, how board and IT KPIs differ, why activity metrics fail, and how to build an executive cyber scorecard that drives decisive action.
                </p>
              </section>

              {/* Section 1: Why More Dashboards Don't Equal Better Decisions */}
              <section id="why-dashboards-fail" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  01. Visibility vs. Action
                </div>
                <h2 className="blog-section-title">
                  Why More Dashboards Don't Equal Better Decisions
                </h2>

                <p>
                  Security dashboards are designed to simplify complexity. But in cybersecurity, that simplification can quickly become distortion. Many cybersecurity programs are failing on decision quality because they've optimized for visibility instead of meaningful action.
                </p>

                <p>
                  When teams are rewarded for output rather than outcomes, they optimize for what can be shown, not for what can be prevented. Dashboards flooded with alerts, scan counts, and incident volumes create an illusion of diligence. But they rarely answer the question executives care about: <strong>Are we becoming less exposed to meaningful risk?</strong>
                </p>

                <div className="blog-warning-banner">
                  <div className="warning-banner-top">
                    <FaExclamationTriangle className="warning-icon" />
                    <span className="warning-title">The Tool Proliferation Paradox</span>
                  </div>
                  <p className="warning-text">
                    Enterprise organizations now manage an average of <strong>61 discrete security tools</strong>, yet tool proliferation has not produced proportional improvements in security outcomes—it has introduced complexity that directly enables control failures. More data doesn't mean more clarity. It often means more noise.
                  </p>
                </div>
              </section>

              {/* Section 2: Security Metrics That Executives Actually Care About */}
              <section id="metrics-execs-care" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  02. Executive Risk Language
                </div>
                <h2 className="blog-section-title">
                  Security Metrics That Executives Actually Care About
                </h2>

                <p>
                  Executives don't manage firewalls, SIEM alerts, or endpoint telemetry directly. But they are accountable for the consequences when those controls fail. The metrics that matter to them are tied to financial impact, risk exposure, third-party risk, and how threats affect revenue or reputation.
                </p>

                <div className="features-grid">
                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <MdSpeed />
                    </div>
                    <h3 className="feature-heading">MTTR Tied to Business Downtime</h3>
                    <p className="feature-desc">
                      It's not about how fast the SOC closes tickets. It's about how long a critical business service remains exposed or non-operational when an incident strikes.
                    </p>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaShieldAlt />
                    </div>
                    <h3 className="feature-heading">Real-World Attack Simulation</h3>
                    <p className="feature-desc">
                      Paper audits and compliance checklists don't tell you whether your defences actually work. Continuous red teaming and adversary attack simulations do.
                    </p>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaLayerGroup />
                    </div>
                    <h3 className="feature-heading">Exposure Per Business Unit</h3>
                    <p className="feature-desc">
                      How much risk does each line of business carry? Which revenue-generating systems are least protected? Pinpoints where executive intervention is required most.
                    </p>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <MdOutlineTrendingUp />
                    </div>
                    <h3 className="feature-heading">Attack Surface Reduction Trend</h3>
                    <p className="feature-desc">
                      Demonstrable proof that security capital investments are actively shrinking attack surfaces—not just shifting exposure from one silo to another.
                    </p>
                  </div>
                </div>

                <div className="blog-callout-box">
                  <div className="callout-header">
                    <FaChartLine className="text-warning me-2" />
                    <strong>Quantified Loss Exposure in Action</strong>
                  </div>
                  <p className="callout-body">
                    Instead of telling the board: <em>"15% of our ecosystem uses a single critical vendor,"</em> frame it in financial terms: <strong>"If this one vendor goes down, 15% of our supply chain stops, leading to a potential $X million loss in revenue and Y days of downtime."</strong>
                  </p>
                </div>
              </section>

              {/* Section 3: KPIs for Boards vs IT Teams */}
              <section id="board-vs-it-kpis" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  03. Priorities &amp; Translation
                </div>
                <h2 className="blog-section-title">
                  KPIs for Boards vs. IT Teams: Bridging the Disconnect
                </h2>

                <p>
                  The disconnect between board-level reporting and IT metrics isn't about competence—it's about different priorities and different languages.
                </p>

                <div className="features-grid">
                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <MdOutlineAccountBalance />
                    </div>
                    <h3 className="feature-heading">What Boards Need</h3>
                    <p className="feature-desc">
                      Boards care about three core priorities: money coming in, money going out, and who is accountable when controls fail:
                    </p>
                    <ul className="mt-2 text-start ps-3" style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                      <li><strong>Financial Impact:</strong> Incident costs, downtime impact, and security ROI.</li>
                      <li><strong>Cyber Resilience:</strong> Recovery speed, survival posture, and ownership.</li>
                      <li><strong>Regulatory Posture:</strong> DORA, NIS 2, DPDPA readiness, and fine liabilities.</li>
                    </ul>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <MdOutlineSecurity />
                    </div>
                    <h3 className="feature-heading">What IT Teams Need</h3>
                    <p className="feature-desc">
                      Security teams work with operational telemetry on a daily basis:
                    </p>
                    <ul className="mt-2 text-start ps-3" style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                      <li><strong>Operational Telemetry:</strong> MTTD, MTTR, patch compliance, vulnerability counts.</li>
                      <li><strong>Operational Purpose:</strong> Essential for day-to-day triage, but ineffective at board level.</li>
                      <li><strong>The Translation Rule:</strong> Convert raw vulnerability counts into SLA reduction on revenue-critical services.</li>
                    </ul>
                  </div>
                </div>

                <div className="blog-highlight-card">
                  <div className="highlight-icon">
                    <MdAutoGraph size={24} />
                  </div>
                  <div className="highlight-text">
                    <strong>The Translation Rule:</strong> A raw vulnerability count means nothing to a CFO. But stating <strong>"92% of critical vulnerabilities remediated within SLA, reducing exposure on revenue-critical systems"</strong> tells an actionable story about risk reduction.
                  </div>
                </div>
              </section>

              {/* Section 4: Moving from Activity Metrics to Business Risk Indicators */}
              <section id="activity-vs-risk" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  04. Key Risk Indicators
                </div>
                <h2 className="blog-section-title">
                  Moving from Activity Metrics to Business Risk Indicators
                </h2>

                <p>
                  Activity metrics measure <em>work</em>. Risk intelligence measures <em>meaning</em>. Activity metrics help operate the program. Risk intelligence helps govern the business.
                </p>

                <p>
                  Consider common dashboard favorites: number of attacks blocked, alerts generated, vulnerabilities discovered, phishing emails intercepted. These aren't useless—security teams need them for monitoring operations. But when activity is confused with security outcomes, they create a false sense of security.
                </p>

                <p>
                  Your organization blocked 500,000 malicious connections this quarter. Is that good news? It could mean your controls are working. Or it could mean threat activity against you has increased dramatically. <strong>Without context, the number cannot tell you which interpretation is correct.</strong>
                </p>

                <div className="cxo-steps-container">
                  <div className="cxo-step-card">
                    <div className="step-num-badge">Tier 1</div>
                    <div className="step-content">
                      <div className="step-header">
                        <MdSpeed className="step-icon" />
                        <h4 className="step-title">Metric: "What is happening?"</h4>
                      </div>
                      <p className="step-desc">
                        Raw operational activity, event volume, firewall connection blocks, and SIEM ingest logs.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">Tier 2</div>
                    <div className="step-content">
                      <div className="step-header">
                        <MdOutlineTrendingUp className="step-icon" />
                        <h4 className="step-title">KPI: "Are we performing as expected?"</h4>
                      </div>
                      <p className="step-desc">
                        Process execution against internal benchmarks, mean time to triage, and patch deployment cycles.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">Tier 3</div>
                    <div className="step-content">
                      <div className="step-header">
                        <FaShieldAlt className="step-icon" />
                        <h4 className="step-title">KRI: "Is our risk changing?"</h4>
                      </div>
                      <p className="step-desc">
                        Executive governance indicating whether residual risk exposure remains compatible with corporate objectives, risk appetite, and capital priorities.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Building an Executive Cyber Scorecard */}
              <section id="executive-scorecard" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  05. Practical Governance
                </div>
                <h2 className="blog-section-title">
                  Building an Executive Cyber Scorecard That Drives Action
                </h2>

                <p>
                  An executive scorecard should answer the questions that matter most: <em>Where are our greatest risks? Which issues require immediate attention? How do these risks impact business operations? What should we prioritize next?</em>
                </p>

                <div className="blog-callout-box">
                  <div className="callout-header">
                    <LuCheckCheck className="text-warning me-2" />
                    <strong>Core Design Principles for Executive Dashboards</strong>
                  </div>
                  <p className="callout-body">
                    <strong>1. Start with business outcomes, not tool data:</strong> Focus on risk acceptance, capital allocation, business resilience, and regulatory exposure.<br />
                    <strong>2. Show trend, impact, and ownership:</strong> A useful KPI shows whether risk is changing, why it matters, and who is accountable.<br />
                    <strong>3. Use maturity steps:</strong> Build clear maturity stages—from basic to mature—so progress is visible and measurable across quarters.
                  </p>
                </div>

                <h3 className="blog-section-title mt-4" style={{ fontSize: '1.35rem' }}>
                  The Five-Metric Executive Scorecard
                </h3>

                <div className="cxo-steps-container">
                  <div className="cxo-step-card">
                    <div className="step-num-badge">01</div>
                    <div className="step-content">
                      <div className="step-header">
                        <FaUsers className="step-icon" />
                        <h4 className="step-title">Completion of Mandatory Cyber Activities by Name</h4>
                      </div>
                      <p className="step-desc">
                        Participation compliance should be 100% at the executive level. When someone misses, it is recorded and reported to establish named cultural accountability.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">02</div>
                    <div className="step-content">
                      <div className="step-header">
                        <MdChecklistRtl className="step-icon" />
                        <h4 className="step-title">Control Implementation Status by Executive Owner</h4>
                      </div>
                      <p className="step-desc">
                        Shows which business leaders are actively advancing their assigned remediation items—and which are lagging behind on corporate risk mitigation.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">03</div>
                    <div className="step-content">
                      <div className="step-header">
                        <FaFileAlt className="step-icon" />
                        <h4 className="step-title">Incident Response &amp; Risk Acceptance Decisions</h4>
                      </div>
                      <p className="step-desc">
                        Documented decisions where business executives choose to override security recommendations, along with explicit, signed financial risk acceptance.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">04</div>
                    <div className="step-content">
                      <div className="step-header">
                        <MdOutlineAccountBalance className="step-icon" />
                        <h4 className="step-title">Quantified Loss Exposure from Top Cyber Risks</h4>
                      </div>
                      <p className="step-desc">
                        Trend of residual risk over time, modeled and expressed directly in monetary terms and projected business downtime.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">05</div>
                    <div className="step-content">
                      <div className="step-header">
                        <FaLock className="step-icon" />
                        <h4 className="step-title">Critical Asset Coverage</h4>
                      </div>
                      <p className="step-desc">
                        Percentage of revenue-critical systems protected by essential controls (MFA, EDR, immutable backups, logging). Control gaps on critical assets create outsized exposure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conclusion Box */}
                <div className="blog-conclusion-box">
                  <div className="conclusion-badge">
                    <FaShieldAlt className="me-1" />
                    Key Takeaway
                  </div>
                  <h3 className="conclusion-title">From Operational Reporting to Active Governance</h3>
                  <p className="conclusion-text">
                    Metrics that don't provoke action are just decorations for your next breach report. Boards don't need more cybersecurity data. They need a clearer view of cyber risk. When you translate technical activity into financial impact, operational resilience, and named accountability, you move from reporting to governing.
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
                    <h4 className="bio-name">KloudStack Cybersecurity &amp; Risk Advisory</h4>
                    <p className="bio-desc">
                      Helping enterprise CISOs and boardrooms engineer zero-trust resilience, quantify digital risk exposure, and build executive cyber scorecards that accelerate strategic growth.
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

            <article className="blog-card" style={{ '--blog-accent': '#6be88a' }}>
              <div className="blog-card-band">
                <img src="/images/ai-and-security.png" alt="AI in Banking Security" className="blog-card-cover-img" />
                <div className="blog-card-cover-overlay" />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-category">AI &amp; Financial Security</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-read-time">7 min read</span>
                </div>
                <h3 className="blog-title">
                  AI is Transforming Banking Faster Than Security Can Keep Up
                </h3>
                <p className="blog-excerpt">
                  From algorithmic credit to autonomous fraud detection, AI is reshaping banking. Here is why security teams struggle to keep pace.
                </p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-card-footer-tag">
                  <FaDotCircle className="me-2 text-warning" size={8} />
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

      {/* ── Bottom CTA Banner ────────────────────────── */}
      <section className="blog-bottom-cta">
        <div className="container">
          <div className="blog-cta-banner">
            <div className="cta-content">
              <span className="cta-kicker">Next-Gen Cyber Governance</span>
              <h2 className="cta-heading">Ready to Align Your Cyber Metrics with Board Value?</h2>
              <p className="cta-sub">
                Connect with KloudStack's Cyber Advisory team to build executive-level KRIs, evaluate control effectiveness, and quantify financial loss exposure.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-gold-primary">
                Consult Our Security Team <FaArrowRight className="ms-2" size={12} />
              </Link>
              <Link to="/services/cyber-security" className="btn-dark-outline">
                Explore Cyber Practices
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default CybersecurityDashboardMetrics
