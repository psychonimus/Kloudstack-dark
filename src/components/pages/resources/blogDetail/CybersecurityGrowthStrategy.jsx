import React, { useEffect, useState, useRef } from 'react'
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
  FaRocket, 
  FaExclamationTriangle,
  FaArrowRight
} from 'react-icons/fa'
import { 
  MdOutlineSecurity, 
  MdSpeed, 
  MdOutlineTrendingUp,
  MdOutlineAccountBalance,
  MdAutoGraph
} from 'react-icons/md'
import { LuCheckCheck, LuBookmark } from 'react-icons/lu'
import './CybersecurityGrowthStrategy.css'

const CybersecurityGrowthStrategy = () => {
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
        'boardroom-shift',
        'trust-adoption',
        'accelerating-cloud-ai',
        'cost-of-delay',
        'resilience-advantage',
        'cxo-action-points'
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
              Cybersecurity Strategy
            </div>
          </div>

          {/* Article Header */}
          <div className="blog-header-content">
            <h1 className="blog-main-title section-heading text-start">
              Cybersecurity is No Longer an IT Budget. <br />
              <span className="blog-title-gradient">It’s a Business Growth Strategy.</span>
            </h1>

            <p className="blog-header-lead">
              For years, cybersecurity was treated as a cost centre and an impediment to innovation. Today, forward-looking enterprises are reframing security as their sharpest competitive differentiator and the catalyst for rapid digital expansion.
            </p>

            {/* Article Metadata Bar */}
            <div className="blog-meta-bar">
              <div className="blog-publisher-card">
                <div className="blog-publisher-icon">
                  <MdOutlineSecurity />
                </div>
                <div className="blog-author-details">
                  <span className="blog-author-name">KloudStack Advisory</span>
                  <span className="blog-author-title">Cybersecurity &amp; Enterprise Architecture</span>
                </div>
              </div>

              <div className="blog-article-meta">
                <div className="blog-meta-item">
                  <span className="blog-meta-label">Published</span>
                  <span className="blog-meta-val">Aug 12, 2025</span>
                </div>
                <div className="blog-meta-divider" />
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
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Cybersecurity is No Longer an IT Budget. It’s a Business Growth Strategy by KloudStack')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                <MdOutlineAccountBalance />
              </div>
              <div>
                <div className="metric-val">Boardroom Shift</div>
                <div className="metric-desc">Co-equal with financial risk</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <MdAutoGraph />
              </div>
              <div>
                <div className="metric-val">Growth Catalyst</div>
                <div className="metric-desc">Unlocks enterprise deal velocity</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <FaExclamationTriangle />
              </div>
              <div>
                <div className="metric-val">$300,000+</div>
                <div className="metric-desc">Cost per hour of enterprise downtime</div>
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
                      { id: 'intro', label: 'The Paradigm Shift' },
                      { id: 'boardroom-shift', label: 'Boards & Financial Risk' },
                      { id: 'trust-adoption', label: 'Trust & Digital Adoption' },
                      { id: 'accelerating-cloud-ai', label: 'Accelerating Cloud & AI' },
                      { id: 'cost-of-delay', label: 'The Cost of Delay' },
                      { id: 'resilience-advantage', label: 'Resilience & Speed' },
                      { id: 'cxo-action-points', label: 'Action Points for CXOs' },
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
                    Executive Advisory
                  </div>
                  <h4 className="advisory-title">Transform Your Cyber Posture Into a Revenue Driver</h4>
                  <p className="advisory-text">
                    Learn how KloudStack helps enterprises engineer zero-trust resilience and quantify cyber posture for growth.
                  </p>
                  <Link to="/contact" className="advisory-btn">
                    Schedule CXO Briefing
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
                  For years, cybersecurity was viewed as a necessary evil; a cost centre that drained IT budgets and slowed down innovation. The prevailing mindset was simple: security was about defense, not offense; about prevention, not growth.
                </p>

                <div className="blog-pullquote">
                  <div className="quote-mark">“</div>
                  <p className="quote-text">
                    That era is over. Today, cybersecurity has fundamentally transformed into a strategic business enabler. It's not just about preventing breaches anymore; it's about building the trust and resilience required to accelerate digital adoption, enter new markets, and unlock revenue.
                  </p>
                </div>
              </section>

              {/* Section 1 */}
              <section id="boardroom-shift" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  01. Governance & Risk
                </div>
                <h2 className="blog-section-title">
                  Why Boards Now Discuss Cyber Risk Alongside Financial Risk
                </h2>

                <p>
                  The boardroom conversation has shifted dramatically. Cyber risk is no longer a technical subplot discussed in the IT committee; it stands alongside financial, operational, and strategic risks as a primary concern for the entire board.
                </p>

                <p>
                  This elevation is driven by the sheer magnitude of potential impact: A major cyber incident can disrupt operations, trigger regulatory fines exceeding billions, and permanently damage brand reputation. Board members, recognizing this existential threat, are increasingly insisting on clear, jargon-free reporting that translates technical vulnerabilities into direct financial and operational impact.
                </p>

                <div className="blog-highlight-card">
                  <div className="highlight-icon">
                    <MdOutlineAccountBalance size={24} />
                  </div>
                  <div className="highlight-text">
                    <strong>The Boardroom Metric Shift:</strong> The fundamental question is no longer <em>"Are we secure?"</em> but <strong>"How much risk are we carrying, and what is it costing our business?"</strong>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="trust-adoption" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  02. Market Differentiator
                </div>
                <h2 className="blog-section-title">
                  The Relationship Between Trust and Digital Adoption
                </h2>

                <p>
                  Digital trust has become a non-negotiable currency in the modern economy. Whether in B2B partnerships or B2C markets, customers and partners expect their data to be protected. Strong cybersecurity directly influences this trust and becomes a prerequisite for adoption.
                </p>

                <p>
                  Research consistently shows that perceptions of security significantly enhance user trust, which is a key predictor of whether people will adopt digital services, payment systems, and new technologies.
                </p>

                <div className="blog-callout-box">
                  <div className="callout-header">
                    <FaChartLine className="text-warning me-2" />
                    <strong>Competitive Advantage in Deal Velocity</strong>
                  </div>
                  <p className="callout-body">
                    In practice, this means companies with demonstrably robust security postures are seeing it become a competitive differentiator. Enterprise clients, particularly in regulated sectors, are making deals conditional on detailed cybersecurity evaluations.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="accelerating-cloud-ai" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  03. Velocity & Scale
                </div>
                <h2 className="blog-section-title">
                  How Strong Security Accelerates Cloud, AI, and Digital Initiatives
                </h2>

                <p>
                  Far from slowing down innovation, a mature security program is the engine that powers it. When security is embedded from the start, it provides the confidence needed to move fast.
                </p>

                <div className="features-grid">
                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaRocket />
                    </div>
                    <h3 className="feature-heading">Cloud &amp; AI Adoption</h3>
                    <p className="feature-desc">
                      Organizations are moving to the cloud and adopting AI at a rapid pace. However, these initiatives introduce new and complex risks. Instead of being a blocker, integrated security simplifies operations and provides the governance required to innovate securely. Leaders are realizing that a durable AI roadmap cannot rely on a single model or provider, and securing these multi-AI, multi-cloud environments is becoming a core business priority.
                    </p>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <MdSpeed />
                    </div>
                    <h3 className="feature-heading">Faster Innovation</h3>
                    <p className="feature-desc">
                      Effective cybersecurity leaders are changing their role from the team that says "no" to the team that helps the organization say "yes". By building security into development processes and product roadmaps from day one, they allow teams to innovate with confidence, knowing that risk is being managed proactively rather than reactively. This approach helps organizations avoid costly last-minute changes and accelerates time-to-market for new products and services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="cost-of-delay" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  04. Compounding Risks
                </div>
                <h2 className="blog-section-title">
                  The Hidden Cost of Delaying Security Investments
                </h2>

                <p>
                  Postponing cybersecurity investments in favour of short-term cost savings creates what experts call <strong>"cybersecurity debt"</strong> — a backlog of unaddressed vulnerabilities that compounds over time. This debt is far more expensive than any initial savings.
                </p>

                <div className="blog-warning-banner">
                  <div className="warning-banner-top">
                    <FaExclamationTriangle className="warning-icon" />
                    <span className="warning-title">The High-Risk Gamble of Inaction</span>
                  </div>
                  <p className="warning-text">
                    The cost of inaction can be devastating. The average cost of a data breach has reached record highs, and breaches with longer lifecycles carry significantly higher costs. Beyond direct financial penalties, an hour of downtime can cost large enterprises <strong>over $300,000</strong>, with some attacks leading to multi-week production shutdowns. Delaying security isn't a cost-saving measure; it's a high-risk gamble that often leads to exponentially larger losses, reputational damage, and even bankruptcy.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="resilience-advantage" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  05. Modern Engineering
                </div>
                <h2 className="blog-section-title">
                  Why Resilient Organizations Innovate Faster
                </h2>

                <p>
                  Resilience is the new competitive advantage. Organizations that invest in cyber resilience don't just survive incidents; they are better positioned to thrive. A resilient company has the confidence to experiment with new business models, enter new markets, and adopt cutting-edge technology because they have the systems and processes in place to quickly recover from disruption.
                </p>

                <p>
                  This resilience, built from engineering-first security practices, allows for faster innovation. As AI and other technologies compress the time between vulnerability and exploitation, companies that have integrated security into their engineering workflows can remediate risks faster and continuously. Their security becomes a continuous, automated process, not a bottleneck.
                </p>
              </section>

              {/* Section 6: Action Points */}
              <section id="cxo-action-points" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  06. Executive Roadmap
                </div>
                <h2 className="blog-section-title">
                  Action Points for CXOs
                </h2>

                <p>
                  The path forward requires a fundamental change in how leadership views and invests in cybersecurity.
                </p>

                <div className="cxo-steps-container">
                  {[
                    {
                      num: '01',
                      title: 'Reframe the Conversation',
                      desc: 'Stop treating cybersecurity as a cost. It’s an investment in revenue, trust, and resilience. Start conversations by asking, "What business value does security enable?" rather than "How much does it cost?".',
                      icon: <FaChartLine />
                    },
                    {
                      num: '02',
                      title: 'Elevate Cyber to a Strategic Priority',
                      desc: 'Ensure cybersecurity is a standing agenda item at the board level, discussed alongside financial and operational risk. Demand clear, business-relevant metrics that translate technical risk into potential financial impact.',
                      icon: <FaShieldAlt />
                    },
                    {
                      num: '03',
                      title: 'Shift from Reactive to Proactive',
                      desc: 'Shift the focus from solely preventing breaches to building an engineering-led culture of resilience that assumes a breach will happen and prioritizes fast recovery. This includes scenario planning and robust business continuity strategies.',
                      icon: <MdOutlineTrendingUp />
                    },
                    {
                      num: '04',
                      title: "Embed Security, Don't Layer It",
                      desc: 'Integrate security early in all business and technology decisions, from new product development to entering new partnerships. It should be part of the roadmap from day one, not a final checkpoint before launch.',
                      icon: <FaLock />
                    },
                    {
                      num: '05',
                      title: 'Invest in Talent and Culture',
                      desc: 'Foster a security-first culture from the C-suite to the front lines. Invest in training and champion a culture of resilience, recognizing that security is everyone’s responsibility.',
                      icon: <FaUserTie />
                    }
                  ].map((step) => (
                    <div key={step.num} className="cxo-step-card">
                      <div className="step-num-badge">{step.num}</div>
                      <div className="step-content">
                        <div className="step-header">
                          <span className="step-icon">{step.icon}</span>
                          <h3 className="step-title">{step.title}</h3>
                        </div>
                        <p className="step-desc">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Final Wrap-up Box */}
                <div className="blog-conclusion-box">
                  <div className="conclusion-badge">
                    <LuCheckCheck className="me-2" />
                    Strategic Conclusion
                  </div>
                  <h3 className="conclusion-title">The Foundation for Sustained Growth</h3>
                  <p className="conclusion-text">
                    The organizations that embrace this new reality will do more than just weather the storm of modern cyber threats; they will use their security posture as a foundation for innovation, trust, and sustained growth.
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
            <article className="blog-card" style={{ '--blog-accent': '#d4a04a' }}>
              <div className="blog-card-band">
                <img src="/images/zts.png" alt="Third-Party Risk" className="blog-card-cover-img" />
                <div className="blog-card-cover-overlay" />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-category">Third-Party Risk</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-read-time">5 min read</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-date">Jul 28, 2025</span>
                </div>
                <h3 className="blog-title">
                  The Silent Cyber Risk: Third-Party Vendors Could Be Your Biggest Vulnerability
                </h3>
                <p className="blog-excerpt">
                  Over 50% of organizations have experienced a data breach caused by a third party. Here is why vendor risk is a board-level issue and how to build a resilient ecosystem.
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
              <span className="cta-kicker">KloudStack Cybersecurity Practice</span>
              <h2 className="cta-heading">Ready to Turn Cyber Resilience into Business Velocity?</h2>
              <p className="cta-sub">
                Our specialists help enterprises design zero-trust architectures, eliminate cybersecurity debt, and prepare for board-level risk quantification.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-gold-primary">
                Schedule Executive Briefing
              </Link>
              <Link to="/services/cyber-security" className="btn-dark-outline">
                Explore Security Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CybersecurityGrowthStrategy
