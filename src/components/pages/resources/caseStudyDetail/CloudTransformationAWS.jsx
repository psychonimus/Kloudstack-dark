import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { 
  FaDotCircle, 
  FaArrowLeft, 
  FaCheck, 
  FaLink, 
  FaLinkedinIn, 
  FaTwitter, 
  FaCloud, 
  FaDatabase, 
  FaServer, 
  FaShieldAlt, 
  FaBolt, 
  FaChartLine, 
  FaCheckCircle, 
  FaLock, 
  FaIndustry, 
  FaArrowRight, 
  FaUsers, 
  FaExchangeAlt, 
  FaCogs, 
  FaSyncAlt, 
  FaLayerGroup 
} from 'react-icons/fa'
import { 
  MdSpeed, 
  MdOutlineSecurity, 
  MdOutlineCloudDone, 
  MdAutoGraph, 
  MdVerified, 
  MdStorage, 
  MdTimer 
} from 'react-icons/md'
import { LuBookmark, LuCheckCheck } from 'react-icons/lu'
import './ManufacturingDisasterRecovery.css'

const CloudTransformationAWS = () => {
  const [activeSection, setActiveSection] = useState('client-context')
  const [copied, setCopied] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'client-context',
        'catalyst',
        'blueprint',
        'methodology',
        'business-value',
        'insights',
      ]

      const scrollPos = window.scrollY + 220

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
    <div className="cs-detail-wrapper">
      {/* ── Reading Progress Bar ─────────────────────── */}
      <motion.div className="cs-reading-progress" style={{ scaleX }} />

      {/* ── Ambient Background & Grid ────────────────── */}
      <div className="cs-bg-grid" />
      <div className="cs-ambient-orb cs-ambient-orb--top" />
      <div className="cs-ambient-orb cs-ambient-orb--middle" />
      <div className="cs-ambient-orb cs-ambient-orb--bottom" />

      {/* ── Hero Section ────────────────────────────── */}
      <header className="cs-hero-section">
        <div className="container">
          {/* Navigation & Tag Badges */}
          <div className="cs-top-nav">
            <Link to="/resources" className="cs-back-btn">
              <FaArrowLeft className="me-2" />
              Back to Resources
            </Link>
            <div className="cs-tag-badges">
              <span className="cs-tag-badge cs-tag-badge--primary">
                <FaDotCircle className="me-2 text-warning" size={9} />
                Client Success Story
              </span>
              <span className="cs-tag-badge cs-tag-badge--secondary">
                <FaIndustry className="me-2" size={11} />
                Enterprise Manufacturing
              </span>
              <span className="cs-tag-badge cs-tag-badge--aws">
                <FaCloud className="me-2" size={11} />
                AWS Cloud Migration &amp; DMS Modernization
              </span>
            </div>
          </div>

          {/* Title and Lead */}
          <h1 className="cs-main-title section-heading text-start">
            Client Success Story: <br />
            <span className="cs-title-gradient">
              Accelerating Operational Agility through AWS Cloud Transformation
            </span>
          </h1>

          <p className="cs-header-lead">
            How a leading manufacturing enterprise partnered with KloudStack to modernize their mission-critical Dealer Management System (DMS)—migrating 6TB of core transactional data to AWS within a narrow 6–7 hour window, boosting performance by 25% and reducing infrastructure TCO by 20–30%.
          </p>

          {/* Executive Overview Profile Bar */}
          <div className="cs-exec-card">
            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaIndustry />
              </div>
              <div>
                <div className="cs-exec-label">Client Profile</div>
                <div className="cs-exec-value">Leading Manufacturing Enterprise</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaDatabase />
              </div>
              <div>
                <div className="cs-exec-label">Core Workload</div>
                <div className="cs-exec-value">VST Dealer Management System (6TB DMS)</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaCloud />
              </div>
              <div>
                <div className="cs-exec-label">Target Architecture</div>
                <div className="cs-exec-value">Scalable, Resilient AWS Cloud</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaShieldAlt />
              </div>
              <div>
                <div className="cs-exec-label">Strategic Partner</div>
                <div className="cs-exec-value">KloudStack Computes</div>
              </div>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="cs-metrics-banner">
            <div className="cs-metric-card">
              <div className="cs-metric-highlight">+20–25%</div>
              <div className="cs-metric-title">Performance Boost</div>
              <div className="cs-metric-sub">Faster response for 250+ concurrent users</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">6–7 Hours</div>
              <div className="cs-metric-title">Off-Peak Cut-Over</div>
              <div className="cs-metric-sub">Zero unscheduled downtime achieved</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">20–30%</div>
              <div className="cs-metric-title">TCO Reduction</div>
              <div className="cs-metric-sub">Eliminated legacy DC hardware overhead</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">100%</div>
              <div className="cs-metric-title">Data Integrity</div>
              <div className="cs-metric-sub">6TB migrated with zero corruption</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content Layout ─────────────────────── */}
      <div className="cs-content-layout">
        <div className="container">
          <div className="cs-grid-layout">
            {/* ── Sidebar (TOC & Share) ── */}
            <aside className="cs-sidebar">
              <div className="cs-toc-box">
                <div className="cs-toc-title">
                  <LuBookmark size={15} />
                  Case Study Outline
                </div>
                <ul className="cs-toc-list">
                  <li className={`cs-toc-item ${activeSection === 'client-context' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('client-context')}>
                      <span>1. The Client Context</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'catalyst' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('catalyst')}>
                      <span>2. Catalyst for Change</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'blueprint' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('blueprint')}>
                      <span>3. Strategic Blueprint</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'methodology' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('methodology')}>
                      <span>4. Execution &amp; Methodology</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'business-value' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('business-value')}>
                      <span>5. Value Delivered</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'insights' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('insights')}>
                      <span>6. Strategic Insights</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="cs-share-box">
                <span className="cs-share-label">Share Case Study</span>
                <div className="cs-share-btns">
                  <button className="cs-share-btn" onClick={handleCopyLink} title="Copy Link">
                    {copied ? <LuCheckCheck className="text-success" /> : <FaLink />}
                  </button>
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://kloudstack.com"
                    target="_blank"
                    rel="noreferrer"
                    className="cs-share-btn"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://twitter.com/intent/tweet?text=AWS+Cloud+Transformation+Case+Study"
                    target="_blank"
                    rel="noreferrer"
                    className="cs-share-btn"
                    title="Share on X"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </aside>

            {/* ── Main Article Body ── */}
            <main className="cs-main-body">
              {/* Executive Overview Highlight */}
              <div className="cs-overview-box">
                <div className="cs-section-header-pill">
                  <MdVerified />
                  Executive Summary
                </div>
                <ul className="cs-overview-list">
                  <li className="cs-overview-point">
                    <FaIndustry className="cs-point-icon" />
                    <div className="cs-point-text">
                      <strong>Industry:</strong> Manufacturing (Automotive / Machinery Equipment).
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaDatabase className="cs-point-icon text-info" />
                    <div className="cs-point-text">
                      <strong>Core Workload:</strong> VST Dealer Management System (DMS) handling end-to-end dealer workflows, inventory dispatch, and financial settlements.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaServer className="cs-point-icon text-warning" />
                    <div className="cs-point-text">
                      <strong>Legacy Infrastructure:</strong> On-premise environment featuring a CentOS 7.9 application tier and a production Windows database.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaCloud className="cs-point-icon text-primary" />
                    <div className="cs-point-text">
                      <strong>Target Architecture:</strong> Highly scalable, secure, and fault-tolerant Amazon Web Services (AWS) cloud ecosystem.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaCheckCircle className="cs-point-icon text-success" />
                    <div className="cs-point-text">
                      <strong>Core Outcome:</strong> 20–25% faster system responsiveness, batch runs slashed from 2 hours to under 1 hour, 20–30% TCO savings, and 65% higher user satisfaction across 250+ users.
                    </div>
                  </li>
                </ul>
              </div>

              {/* ── Section 1: The Client Context ── */}
              <section id="client-context" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaIndustry />
                  Section 01
                </div>
                <h2 className="cs-section-heading">
                  The Client Context: Mission-Critical DMS Infrastructure
                </h2>
                <p className="cs-para">
                  The client is a large-scale manufacturing enterprise relying on its <strong>Dealer Management System (VST DMS)</strong> as the central nervous system for core business operations, nationwide dealership relationships, order processing, warranty management, and daily financial transaction processing.
                </p>
                <p className="cs-para">
                  Historically, this complex ecosystem was bound to a rigid on-premise infrastructure consisting of an application layer running on <strong>CentOS 7.9</strong> and a high-throughput production database hosted on <strong>Windows</strong>. With daily data volume surging past 6TB, the on-premise hardware constraints began throttling organizational velocity.
                </p>
              </section>

              {/* ── Section 2: Catalyst for Change ── */}
              <section id="catalyst" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaBolt />
                  Section 02
                </div>
                <h2 className="cs-section-heading">
                  The Catalyst for Change: Overcoming Legacy Roadblocks
                </h2>
                <p className="cs-para">
                  As the enterprise expanded its dealership network and product lines, the physical limitations of the legacy data center transformed from an IT constraint into an acute operational bottleneck:
                </p>

                <div className="cs-cards-grid">
                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <MdSpeed />
                    </div>
                    <h3 className="cs-card-title">Performance Degradation</h3>
                    <p className="cs-card-desc">
                      Aging server hardware and IOPS bottlenecks throttled system responsiveness, creating cascading operational delays for a concurrent user base of <strong>250+ active dealership personnel</strong>.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaExchangeAlt />
                    </div>
                    <h3 className="cs-card-title">Business Continuity Risks</h3>
                    <p className="cs-card-desc">
                      Migrating <strong>6TB of highly sensitive, transactional enterprise data</strong> carried an immense risk of revenue-impacting downtime if cut-over windows were breached.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaShieldAlt />
                    </div>
                    <h3 className="cs-card-title">Data Integrity Imperative</h3>
                    <p className="cs-card-desc">
                      The enterprise demanded an auditable, zero-tolerance policy for data loss, transactional corruption, or schema degradation during the migration sequence.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaLayerGroup />
                    </div>
                    <h3 className="cs-card-title">Scalability Roadblocks</h3>
                    <p className="cs-card-desc">
                      The fixed compute capacity of the physical data center prohibited the elastic auto-scaling required for seasonal spikes and aggressive business growth trajectories.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 3: Strategic Blueprint ── */}
              <section id="blueprint" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaCloud />
                  Section 03
                </div>
                <h2 className="cs-section-heading">
                  Strategic Blueprint: Cloud Transformation on AWS
                </h2>
                <p className="cs-para">
                  To eliminate these vulnerabilities, <strong>KloudStack Computes</strong> architected a comprehensive cloud transformation strategy centered on migrating the VST DMS infrastructure to a highly available, fault-tolerant environment on Amazon Web Services (AWS).
                </p>
                <p className="cs-para">
                  The blueprint was anchored on three foundational pillars: <strong>Resilience, Security, and Seamless Continuity</strong>.
                </p>

                <div className="cs-blueprint-box">
                  <div className="cs-blueprint-grid">
                    <div className="cs-pillar-box">
                      <div className="cs-pillar-tag">Pillar 01 • Data Transfer &amp; Sync</div>
                      <h4 className="cs-pillar-heading">AWS DataSync High-Throughput Pipeline</h4>
                      <p className="cs-pillar-desc">
                        Leveraged AWS DataSync with AES-256 encryption in-flight and at-rest to migrate 6TB of database snapshots into provisioned AWS storage with continuous checksum verification.
                      </p>
                    </div>

                    <div className="cs-pillar-box">
                      <div className="cs-pillar-tag">Pillar 02 • Enterprise Hardening</div>
                      <h4 className="cs-pillar-heading">AWS WAF, IAM &amp; KMS Governance</h4>
                      <p className="cs-pillar-desc">
                        Constructed an isolated Virtual Private Cloud (VPC) with granular security groups, Web Application Firewall (WAF) threat filtering, and KMS-encrypted volume architectures.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="cs-para">
                  We engineered a tightly orchestrated cut-over protocol scheduled during a narrow off-peak window of <strong>6 to 7 hours</strong>, fortified by automated backup redundancies and zero-loss failover mechanisms.
                </p>
              </section>

              {/* ── Section 4: Execution & Methodology ── */}
              <section id="methodology" className="cs-section">
                <div className="cs-section-header-pill">
                  <MdAutoGraph />
                  Section 04
                </div>
                <h2 className="cs-section-heading">
                  Execution &amp; Methodology: 6-Stage Disciplined Migration
                </h2>
                <p className="cs-para">
                  The deployment was executed through a rigorous, disciplined approach characterized by agile collaboration between the client’s internal VST stakeholders and KloudStack’s cloud engineers:
                </p>

                <div className="cs-phases-container">
                  {/* Phase 1 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 01</div>
                    <h3 className="cs-phase-title">Environment Lockdown &amp; User Quiescing</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Temporarily locked out all 250+ end-users from the legacy on-premise system to guarantee a static data state and prevent transactional mutations.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 02</div>
                    <h3 className="cs-phase-title">Immutable Baseline Establishment</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>The joint VST-KloudStack team captured a full, verified online backup of the production database, establishing an immutable cryptographic baseline.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 03</div>
                    <h3 className="cs-phase-title">Encrypted Data Transfer via AWS DataSync</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Utilizing AWS DataSync, the delivery team executed an accelerated, end-to-end encrypted migration of the 6TB database backup into the newly provisioned AWS environment.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 4 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 04</div>
                    <h3 className="cs-phase-title">Precision Cut-Over Execution</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Initiated a tightly orchestrated cut-over sequence during the 6–7 hour off-peak window, definitively halting legacy replication and bringing AWS instances online.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 5 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 05</div>
                    <h3 className="cs-phase-title">Infrastructure &amp; Security Validation</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Validated target AWS VPC routing, IAM access roles, firewall policies, network latency, and automated backup schedules.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 6 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 06</div>
                    <h3 className="cs-phase-title">Quality Assurance, Penetration Testing &amp; UAT</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Conducted rigorous load testing, penetration verification, and user acceptance testing (UAT) with business stakeholders before opening the system for full enterprise production.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── Section 5: Value Delivered ── */}
              <section id="business-value" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaChartLine />
                  Section 05
                </div>
                <h2 className="cs-section-heading">
                  Value Delivered: Tangible Business Outcomes
                </h2>
                <p className="cs-para">
                  The AWS cloud migration immediately transformed IT agility and financial efficiency for the enterprise:
                </p>

                <div className="cs-table-wrapper">
                  <table className="cs-table">
                    <thead>
                      <tr>
                        <th>Strategic Benefit</th>
                        <th>Measurable Business &amp; Operational Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaCheckCircle className="text-success" size={18} />
                            Absolute Business Continuity
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">100% Data Integrity:</span> Migration completed with zero data degradation, zero schema anomalies, and zero unscheduled downtime.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <MdSpeed className="text-warning" size={18} />
                            Optimized Application Performance
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">20–25% Faster Responsiveness:</span> Vital batch processing times were slashed from 1–2 hours down to less than 1 hour.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaChartLine className="text-info" size={16} />
                            TCO &amp; Operational Savings
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">20–30% Cost Reduction:</span> Retiring aging on-premise hardware eliminated ongoing maintenance contracts, power costs, and physical refresh cycles.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaShieldAlt className="text-warning" size={18} />
                            Elevated Security Posture
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">AWS WAF, IAM &amp; KMS:</span> Fully aligned with modern enterprise cybersecurity frameworks and encryption standards.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaUsers className="text-primary" size={18} />
                            End-User Empowerment
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">65% Higher User Satisfaction:</span> UAT metrics recorded rapid query response and fluid dealer transaction workflows for 250+ users.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Quote Box */}
                <div className="cs-quote-card">
                  <div className="cs-quote-glow" />
                  <blockquote className="cs-quote-text">
                    "The KloudStack methodology ensured our most critical data was secured, and our business operations didn't skip a beat during the cut-over. This AWS transition is a foundational milestone for our future scalability."
                  </blockquote>
                  <div className="cs-quote-author">
                    <div className="cs-quote-avatar">
                      <FaIndustry />
                    </div>
                    <div>
                      <div className="cs-author-name">Enterprise Technology Leadership</div>
                      <div className="cs-author-role">Chief Information Officer, Leading Manufacturing Enterprise</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Section 6: Strategic Insights ── */}
              <section id="insights" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaBolt />
                  Section 06
                </div>
                <h2 className="cs-section-heading">
                  Strategic Insights &amp; Lessons Learned
                </h2>

                <div className="cs-insights-grid">
                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <FaUsers /> Principle 01
                    </div>
                    <h3 className="cs-insight-title">Organizational Readiness Equals Technical Readiness</h3>
                    <p className="cs-insight-desc">
                      The flawless cut-over proved that rigorous, proactive communication and alignment across dealership stakeholders and business units is just as critical as the underlying cloud architecture.
                    </p>
                  </div>

                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <FaDatabase /> Principle 02
                    </div>
                    <h3 className="cs-insight-title">Data Integrity as the Ultimate Metric</h3>
                    <p className="cs-insight-desc">
                      Implementing automated pre- and post-migration data validation routines with cryptographic checksums proved to be the strongest defense against operational disruption.
                    </p>
                  </div>

                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <FaCogs /> Principle 03
                    </div>
                    <h3 className="cs-insight-title">Consultative Synergy &amp; Joint Task Forces</h3>
                    <p className="cs-insight-desc">
                      The seamless integration between the internal IT unit and KloudStack’s cloud architecture team was the deciding factor in accelerating roadblock resolution and completing the cut-over ahead of schedule.
                    </p>
                  </div>
                </div>

                {/* Confidentiality Notice */}
                <div className="cs-confidential-banner">
                  <FaLock className="cs-confidential-icon" />
                  <div>
                    <strong>STRICTLY CONFIDENTIAL:</strong> The information contained in this document is proprietary to KloudStack Computes. By accepting this document, the recipient agrees to keep its contents confidential and to not reproduce, disclose, or distribute this information to any third party without express written authorization.
                  </div>
                </div>

                {/* CTA Card */}
                <div className="cs-cta-section">
                  <div className="cs-cta-glow" />
                  <h3 className="cs-cta-title">Planning a Mission-Critical Cloud Migration?</h3>
                  <p className="cs-cta-desc">
                    Explore how KloudStack's cloud migration practice can help engineer a zero-loss, high-performance migration to AWS for your ERP, DMS, and enterprise databases.
                  </p>
                  <Link to="/contact" className="cs-cta-btn">
                    Schedule a Cloud Migration Consultation
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudTransformationAWS
