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
  FaBullhorn,
  FaBalanceScale,
  FaBriefcase,
  FaClipboardList,
  FaHistory
} from 'react-icons/fa'
import { 
  MdOutlineSecurity, 
  MdSpeed, 
  MdOutlineAccountBalance,
  MdOutlineTrendingUp,
  MdOutlineCrisisAlert,
  MdOutlineNotificationsActive,
  MdOutlineFactCheck,
  MdGavel
} from 'react-icons/md'
import { LuCheckCheck, LuBookmark, LuTimer, LuRadio, LuShieldAlert } from 'react-icons/lu'
import './CybersecurityGrowthStrategy.css'

const CyberattackFirst24Hours = () => {
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
        'critical-first-hours',
        'incident-roles',
        'crisis-communication',
        'regulatory-reporting',
        'recovery-priorities',
        'post-incident-learning'
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
              Incident Response &amp; Crisis Management
            </div>
          </div>

          {/* Article Header */}
          <div className="blog-header-content">
            <h1 className="blog-main-title section-heading text-start">
              What Happens After a Cyberattack? <br />
              <span className="blog-title-gradient">The First 24 Hours Decide Everything.</span>
            </h1>

            <p className="blog-header-lead">
              In the first hours of a breach, attackers are still active, data may be exfiltrating, and every decision matters. Speed matters, but so does accuracy—rushing without a plan can destroy forensic evidence or lose control of the incident.
            </p>

            {/* Article Metadata Bar */}
            <div className="blog-meta-bar">
              <div className="blog-publisher-card">
                <div className="blog-publisher-icon">
                  <MdOutlineCrisisAlert />
                </div>
                <div className="blog-author-details">
                  <span className="blog-author-name">KloudStack Advisory</span>
                  <span className="blog-author-title">Digital Forensics &amp; Incident Response (DFIR)</span>
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
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('What Happens After a Cyberattack? The First 24 Hours Decide Everything by KloudStack')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                <LuTimer />
              </div>
              <div>
                <div className="metric-val">Golden Hours</div>
                <div className="metric-desc">Containment vs. total enterprise loss</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <MdGavel />
              </div>
              <div>
                <div className="metric-val">72h Regulatory Clock</div>
                <div className="metric-desc">Mandatory GDPR &amp; DPDPA notification</div>
              </div>
            </div>

            <div className="metric-pill">
              <div className="metric-icon-wrap">
                <FaUsers />
              </div>
              <div>
                <div className="metric-val">5 Crisis Roles</div>
                <div className="metric-desc">Pre-assigned command structure</div>
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
                      { id: 'intro', label: 'Overview & Crisis Reality' },
                      { id: 'critical-first-hours', label: '1. Why First Hours Are Critical' },
                      { id: 'incident-roles', label: '2. Incident Roles & Command' },
                      { id: 'crisis-communication', label: '3. Crisis Communication' },
                      { id: 'regulatory-reporting', label: '4. Regulatory Considerations' },
                      { id: 'recovery-priorities', label: '5. Business Recovery Priorities' },
                      { id: 'post-incident-learning', label: '6. Post-Mortem & Resilience' },
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
                    24/7 DFIR Readiness
                  </div>
                  <h4 className="advisory-title">Stand Up 24/7 Incident Response Retainers</h4>
                  <p className="advisory-text">
                    KloudStack delivers on-demand digital forensics, threat containment, and crisis tabletop simulations for modern enterprises.
                  </p>
                  <Link to="/contact" className="advisory-btn">
                    Consult DFIR Team
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
                  A cyberattack is a test of preparation, not luck. When intrusion sirens sound, organizations quickly discover whether they have clear command structures, practiced communication channels, regulatory awareness, and a validated recovery blueprint.
                </p>

                <div className="blog-pullquote">
                  <div className="quote-mark">“</div>
                  <p className="quote-text">
                    You cannot prevent every attack. But you can determine how your organization responds. Prepare now, so when the clock starts, you are already ahead.
                  </p>
                </div>

                <p>
                  In the immediate aftermath of a breach, confusion is the adversary's greatest asset. What leadership does in the initial 24 hours directly dictates whether the incident remains a contained operational issue or cascades into a catastrophic business failure.
                </p>
              </section>

              {/* Section 1: Why the First Few Hours Are Critical */}
              <section id="critical-first-hours" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  01. The Golden Window
                </div>
                <h2 className="blog-section-title">
                  Why the First Few Hours Are Critical
                </h2>

                <p>
                  In the first hours of an intrusion, attackers are still active inside the perimeter. Sensitive data may still be mid-exfiltration. Immutable backups may still be clean. Every single minute of operational delay gives the adversary more time to entrench, escalate privileges, encrypt databases, or wipe audit logs.
                </p>

                <p>
                  The immediate decisions made—contain, isolate, sever external links, shut down servers, or monitor—determine whether you contain the breach or lose control entirely. Speed matters immensely, but so does forensic precision. Rushing into hasty decisions without an established playbook can destroy crucial volatile memory evidence or tip off the adversary.
                </p>

                <div className="blog-highlight-card">
                  <div className="highlight-icon">
                    <LuTimer size={24} />
                  </div>
                  <div className="highlight-text">
                    <strong>The First-Response Triad:</strong> The goal in the first hours is simple: <strong>contain fast</strong>, <strong>investigate carefully</strong>, and <strong>communicate deliberately</strong>.
                  </div>
                </div>
              </section>

              {/* Section 2: Incident Response Roles and Responsibilities */}
              <section id="incident-roles" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  02. Command Structure
                </div>
                <h2 className="blog-section-title">
                  Incident Response Roles and Responsibilities
                </h2>

                <p>
                  In chaotic crisis conditions, everyone wants to assist. Without predetermined, clear-cut roles, nobody knows who holds final decision authority.
                </p>

                <p>
                  A functional enterprise incident response structure requires five specialized command positions:
                </p>

                <div className="features-grid">
                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaUserShield />
                    </div>
                    <h3 className="feature-heading">Incident Commander</h3>
                    <p className="feature-desc">
                      Owns the overall response lifecycle, leads cross-functional triage, and makes definitive operational calls.
                    </p>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <MdSpeed />
                    </div>
                    <h3 className="feature-heading">Technical Lead</h3>
                    <p className="feature-desc">
                      Directs hands-on containment, adversary eradication, forensic evidence acquisition, and technical restoration tracks.
                    </p>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaBullhorn />
                    </div>
                    <h3 className="feature-heading">Communications Lead</h3>
                    <p className="feature-desc">
                      Manages all internal employee updates, public PR, customer disclosures, and media relations through a single unified voice.
                    </p>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaBalanceScale />
                    </div>
                    <h3 className="feature-heading">Legal &amp; Compliance Lead</h3>
                    <p className="feature-desc">
                      Protects attorney-client privilege, evaluates statutory breach notification clocks, and manages cyber insurance carrier requirements.
                    </p>
                  </div>
                </div>

                <div className="blog-callout-box">
                  <div className="callout-header">
                    <FaBriefcase className="text-warning me-2" />
                    <strong>The Business Liaison Role</strong>
                  </div>
                  <p className="callout-body">
                    The Business Liaison represents executive leadership and operational units. They determine business recovery sequence, quantify financial downtime impact, and align security decisions with customer commitments.
                    <br /><br />
                    <em>Define these roles before an incident. Practice them in regular executive tabletop exercises. When the real crisis hits, there is zero time to negotiate who is in charge.</em>
                  </p>
                </div>
              </section>

              {/* Section 3: Internal and External Communication */}
              <section id="crisis-communication" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  03. Crisis Messaging
                </div>
                <h2 className="blog-section-title">
                  Internal and External Communication
                </h2>

                <p>
                  Poor communication rapidly transforms a technical containment challenge into an existential reputational disaster. Inconsistency erodes stakeholder trust faster than the breach itself.
                </p>

                <div className="features-grid">
                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <FaUsers />
                    </div>
                    <h3 className="feature-heading">Internal Communication</h3>
                    <p className="feature-desc">
                      Keep employees continuously informed with concise, honest updates. Clearly communicate what to do, what systems to avoid, and where to route external inquiries. Silence breeds damaging rumors, speculation, and panic.
                    </p>
                  </div>

                  <div className="feature-item-card">
                    <div className="feature-icon-badge">
                      <MdOutlineNotificationsActive />
                    </div>
                    <h3 className="feature-heading">External Communication</h3>
                    <p className="feature-desc">
                      Customers, partners, and regulators require timely, verified facts. Never speculate or prematurely minimize the blast radius. Acknowledge the incident transparently, state confirmed facts, and commit to scheduled updates.
                    </p>
                  </div>
                </div>

                <div className="blog-highlight-card">
                  <div className="highlight-icon">
                    <MdOutlineSecurity size={24} />
                  </div>
                  <div className="highlight-text">
                    <strong>Crisis Communication Rule:</strong> Prepare pre-approved disclosure templates in advance. Designate a single corporate spokesperson. Ensure all staff know that unauthorized public commentary is strictly prohibited.
                  </div>
                </div>
              </section>

              {/* Section 4: Regulatory Reporting Considerations */}
              <section id="regulatory-reporting" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  04. Compliance Clocks
                </div>
                <h2 className="blog-section-title">
                  Regulatory Reporting Considerations
                </h2>

                <p>
                  The countdown clock on statutory regulatory reporting starts the exact moment you confirm a breach—not when digital forensics wraps up weeks later.
                </p>

                <div className="blog-warning-banner">
                  <div className="warning-banner-top">
                    <FaExclamationTriangle className="warning-icon" />
                    <span className="warning-title">Strict Global Notification Mandates</span>
                  </div>
                  <p className="warning-text">
                    Depending on your operating jurisdiction and industry, you may be legally required to notify:
                  </p>
                  <ul className="mt-2 text-start ps-3" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}>
                    <li><strong>Data Protection Authorities:</strong> Within 72 hours under GDPR, DPDPA 2023, and regional privacy frameworks.</li>
                    <li><strong>Financial Sector Regulators:</strong> SEC 4-day disclosure rules, RBI cyber directives, and DORA incident standards.</li>
                    <li><strong>Law Enforcement:</strong> Regional cybercrime divisions, CERT-In, and international federal agencies.</li>
                    <li><strong>Impacted Individuals:</strong> Strict statutory timelines for notifying customers whose PII or credentials were exposed.</li>
                  </ul>
                  <p className="warning-text mt-2">
                    Involve legal counsel immediately. Understand your compliance obligations before you are in the hot seat. Missing a reporting deadline can turn a security incident into catastrophic fines and executive liabilities.
                  </p>
                </div>
              </section>

              {/* Section 5: Business Continuity and Recovery Priorities */}
              <section id="recovery-priorities" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  05. Strategic Triage
                </div>
                <h2 className="blog-section-title">
                  Business Continuity and Recovery Priorities
                </h2>

                <p>
                  Not everything can be restored simultaneously under crisis conditions. Organizations must operate from a strict business-impact triage plan.
                </p>

                <p>
                  Leadership must ask: <em>Which systems are revenue-critical? Which support safety or regulatory survival? What can safely wait?</em> Recovery priorities should strictly follow business impact rather than technical convenience.
                </p>

                <div className="cxo-steps-container">
                  <div className="cxo-step-card">
                    <div className="step-num-badge">Tier 1</div>
                    <div className="step-content">
                      <div className="step-header">
                        <FaShieldAlt className="step-icon" />
                        <h4 className="step-title">Life Safety &amp; Critical Infrastructure</h4>
                      </div>
                      <p className="step-desc">
                        Physical security systems, medical life-support links, identity authentication cores, and foundational networking.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">Tier 2</div>
                    <div className="step-content">
                      <div className="step-header">
                        <MdOutlineAccountBalance className="step-icon" />
                        <h4 className="step-title">Revenue-Generating Workloads</h4>
                      </div>
                      <p className="step-desc">
                        Core transactional processing, payment gateways, e-commerce engines, and production manufacturing lines.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">Tier 3</div>
                    <div className="step-content">
                      <div className="step-header">
                        <FaUsers className="step-icon" />
                        <h4 className="step-title">Customer-Facing Services</h4>
                      </div>
                      <p className="step-desc">
                        Customer support portals, web applications, client communication gateways, and public APIs.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">Tier 4</div>
                    <div className="step-content">
                      <div className="step-header">
                        <FaServer className="step-icon" />
                        <h4 className="step-title">Internal Business Operations</h4>
                      </div>
                      <p className="step-desc">
                        Corporate ERP, internal email, HR systems, and administrative collaboration platforms.
                      </p>
                    </div>
                  </div>

                  <div className="cxo-step-card">
                    <div className="step-num-badge">Tier 5</div>
                    <div className="step-content">
                      <div className="step-header">
                        <FaClipboardList className="step-icon" />
                        <h4 className="step-title">Non-Essential &amp; Archival Systems</h4>
                      </div>
                      <p className="step-desc">
                        Development sandbox environments, internal staging repositories, and legacy reporting tools.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="blog-highlight-card">
                  <div className="highlight-icon">
                    <LuShieldAlert size={24} />
                  </div>
                  <div className="highlight-text">
                    <strong>Verify Backups Before Restoring:</strong> Attackers often target backup repositories first to seed latent malware. Always conduct malware scanning on restore points in clean-room environments. Clean recovery is always superior to fast recovery.
                  </div>
                </div>
              </section>

              {/* Section 6: Post-Incident Learning and Resilience */}
              <section id="post-incident-learning" className="blog-content-block">
                <div className="section-subtitle-tag">
                  <span className="subtag-dot" />
                  06. Continuous Resilience
                </div>
                <h2 className="blog-section-title">
                  Post-Incident Learning and Resilience
                </h2>

                <p>
                  The first 24 hours end, but the real security evolution begins. After containment and stabilization, organizations must immediately shift from reactive crisis to institutional learning.
                </p>

                <p>
                  Conduct a rigorous, <strong>blameless post-mortem</strong>. Executive and technical teams must answer five fundamental questions:
                </p>

                <div className="blog-callout-box">
                  <div className="callout-header">
                    <FaHistory className="text-warning me-2" />
                    <strong>The 5 Post-Mortem Inquiry Pillars</strong>
                  </div>
                  <ul className="mt-2 text-start ps-3" style={{ fontSize: '0.94rem', color: 'rgba(255,255,255,0.78)', lineHeight: '1.8' }}>
                    <li><strong>1. Initial Vector:</strong> How did the adversary penetrate our perimeter?</li>
                    <li><strong>2. Telemetry Gaps:</strong> What visibility blinds or alert signals did we miss?</li>
                    <li><strong>3. Effective Controls:</strong> What defensive layers and playbooks performed as intended?</li>
                    <li><strong>4. Bottlenecks:</strong> What operational or legal hurdles slowed our response down?</li>
                    <li><strong>5. Remediation Roadmap:</strong> What architectural changes are required immediately?</li>
                  </ul>
                </div>

                {/* Conclusion Box */}
                <div className="blog-conclusion-box">
                  <div className="conclusion-badge">
                    <FaShieldAlt className="me-1" />
                    Executive Takeaway
                  </div>
                  <h3 className="conclusion-title">Resilience is an Ongoing Cycle</h3>
                  <p className="conclusion-text">
                    Turn all post-incident findings into concrete action items with assigned executive owners and strict remediation deadlines. Update your crisis playbooks, address architectural gaps, and schedule follow-up simulations. In modern enterprise security, resilience isn't a final destination—it is a continuous operational cycle.
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
                    <h4 className="bio-name">KloudStack Digital Forensics &amp; IR Practice</h4>
                    <p className="bio-desc">
                      Empowering enterprises with round-the-clock threat containment, DFIR retainers, crisis communication blueprints, and cyber resilience architectures.
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
            <article className="blog-card" style={{ '--blog-accent': '#d4a04a' }}>
              <div className="blog-card-band">
                <img src="/images/cubersecurity-img.jpg" alt="Strategic Cybersecurity Mistakes" className="blog-card-cover-img" />
                <div className="blog-card-cover-overlay" />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-category">Strategic Cyber Leadership</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-read-time">5 min read</span>
                </div>
                <h3 className="blog-title">
                  The Biggest Cybersecurity Mistakes Aren't Technical. They're Strategic.
                </h3>
                <p className="blog-excerpt">
                  Most breaches happen because leadership treated cybersecurity as an IT problem instead of a business risk.
                </p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-card-footer-tag">
                  <FaDotCircle className="me-2 text-warning" size={8} />
                  Executive Insight
                </div>
                <Link to="/resources/strategic-cybersecurity-mistakes" className="blog-read-more">
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
                  Today, cybersecurity has fundamentally transformed into a strategic business enabler—building trust and accelerating growth.
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
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Banner ────────────────────────── */}
      <section className="blog-bottom-cta">
        <div className="container">
          <div className="blog-cta-banner">
            <div className="cta-content">
              <span className="cta-kicker">Emergency Incident Response</span>
              <h2 className="cta-heading">Need Immediate Incident Response or Tabletop Readiness?</h2>
              <p className="cta-sub">
                Connect with KloudStack's 24/7 Digital Forensics &amp; Incident Response team to contain threats, investigate blast radius, and protect operations.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-gold-primary">
                Engage DFIR Retainer <FaArrowRight className="ms-2" size={12} />
              </Link>
              <Link to="/services/cyber-security" className="btn-dark-outline">
                View Security Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default CyberattackFirst24Hours
