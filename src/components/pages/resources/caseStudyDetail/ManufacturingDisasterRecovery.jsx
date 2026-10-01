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
  FaDatabase, 
  FaCloud, 
  FaShieldAlt, 
  FaBolt, 
  FaServer, 
  FaNetworkWired, 
  FaSyncAlt, 
  FaChartLine, 
  FaCheckCircle, 
  FaBuilding, 
  FaExclamationTriangle, 
  FaIndustry, 
  FaLock, 
  FaArrowRight 
} from 'react-icons/fa'
import { 
  MdSpeed, 
  MdOutlineSecurity, 
  MdOutlineCloudSync, 
  MdOutlineStorage, 
  MdAutoGraph, 
  MdVerified 
} from 'react-icons/md'
import { LuBookmark, LuCheckCheck } from 'react-icons/lu'
import './ManufacturingDisasterRecovery.css'

const ManufacturingDisasterRecovery = () => {
  const [activeSection, setActiveSection] = useState('macro-context')
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
        'macro-context',
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
                Manufacturing &amp; Agri-Tech
              </span>
              <span className="cs-tag-badge cs-tag-badge--aws">
                <FaCloud className="me-2" size={11} />
                AWS EDR + SAP HANA HSR
              </span>
            </div>
          </div>

          {/* Title and Lead */}
          <h1 className="cs-main-title section-heading text-start">
            Client Success Story: <br />
            <span className="cs-title-gradient">
              Safeguarding Enterprise Manufacturing with Cloud-Native Disaster Recovery
            </span>
          </h1>

          <p className="cs-header-lead">
            How VST Tillers partnered with Kloudstack Computes to replace single-site on-premise SAP HANA vulnerabilities with an elastic, cloud-native AWS pilot-light DR architecture—achieving sub-hour RTO and near-zero RPO with 40–60% TCO reduction.
          </p>

          {/* Executive Overview Profile Bar */}
          <div className="cs-exec-card">
            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaIndustry />
              </div>
              <div>
                <div className="cs-exec-label">Client Profile</div>
                <div className="cs-exec-value">VST Tillers (Agri-Equipment Leader)</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaDatabase />
              </div>
              <div>
                <div className="cs-exec-label">Core Workload</div>
                <div className="cs-exec-value">Mission-Critical SAP HANA ERP</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaCloud />
              </div>
              <div>
                <div className="cs-exec-label">Target Architecture</div>
                <div className="cs-exec-value">AWS EDR + SAP Native HSR</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaShieldAlt />
              </div>
              <div>
                <div className="cs-exec-label">Strategic Partner</div>
                <div className="cs-exec-value">Kloudstack Computes</div>
              </div>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="cs-metrics-banner">
            <div className="cs-metric-card">
              <div className="cs-metric-highlight">Near-Zero</div>
              <div className="cs-metric-title">Recovery Point (RPO)</div>
              <div className="cs-metric-sub">Continuous block &amp; DB replication</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">30–60 Min</div>
              <div className="cs-metric-title">Recovery Time (RTO)</div>
              <div className="cs-metric-sub">Rapid dynamic scale-up on failover</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">40–60%</div>
              <div className="cs-metric-title">TCO Optimization</div>
              <div className="cs-metric-sub">Slashed standby compute overhead</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">100%</div>
              <div className="cs-metric-title">Drill Autonomy</div>
              <div className="cs-metric-sub">Full failover &amp; failback validation</div>
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
                  <li className={`cs-toc-item ${activeSection === 'macro-context' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('macro-context')}>
                      <span>1. Macro Context</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'catalyst' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('catalyst')}>
                      <span>2. Catalyst for Transformation</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'blueprint' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('blueprint')}>
                      <span>3. Cloud-Native Blueprint</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'methodology' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('methodology')}>
                      <span>4. Execution &amp; Methodology</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'business-value' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('business-value')}>
                      <span>5. Quantifiable Value</span>
                    </button>
                  </li>
                  <li className={`cs-toc-item ${activeSection === 'insights' ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('insights')}>
                      <span>6. Executive Insights</span>
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
                    href="https://twitter.com/intent/tweet?text=Cloud-Native+Disaster+Recovery+Case+Study"
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
                  Executive Overview
                </div>
                <ul className="cs-overview-list">
                  <li className="cs-overview-point">
                    <FaBuilding className="cs-point-icon" />
                    <div className="cs-point-text">
                      <strong>Industry &amp; Profile:</strong> Manufacturing (Agricultural Equipment) — VST Tillers, an industry-leading agricultural machinery enterprise.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaExclamationTriangle className="cs-point-icon text-warning" />
                    <div className="cs-point-text">
                      <strong>The Vulnerability:</strong> Reliance on a single-site, on-premise SAP HANA database, exposing the enterprise to severe localized outage risks, physical disruptions, and unacceptable operational downtime.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaCloud className="cs-point-icon text-info" />
                    <div className="cs-point-text">
                      <strong>The Architecture:</strong> AWS Elastic Disaster Recovery (EDR) coupled with application-aware SAP Native HANA System Replication (HSR) on a cost-optimized pilot light model.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaShieldAlt className="cs-point-icon text-warning" />
                    <div className="cs-point-text">
                      <strong>The Partner:</strong> Kloudstack Computes (Enterprise Cloud Infrastructure &amp; Cyber Resilience Practice).
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaCheckCircle className="cs-point-icon text-success" />
                    <div className="cs-point-text">
                      <strong>The Impact:</strong> Established a highly elastic, active-passive DR posture ensuring continuous data replication, sub-hour RTO (30–60 mins), near-zero RPO, and a 40–60% reduction in total cost of ownership.
                    </div>
                  </li>
                </ul>
              </div>

              {/* ── Section 1: The Macro Context ── */}
              <section id="macro-context" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaIndustry />
                  Section 01
                </div>
                <h2 className="cs-section-heading">
                  The Macro Context: Continuity in the Manufacturing Sector
                </h2>
                <p className="cs-para">
                  In the modern manufacturing landscape, supply chain velocity is entirely dependent on continuous IT operations. For an agricultural machinery manufacturer operating assembly lines across distributed plants, inventory synchronicity, dealer order dispatch, and shop-floor manufacturing execution systems must operate in lockstep.
                </p>
                <p className="cs-para">
                  VST Tillers relies on its mission-critical <strong>SAP HANA database</strong> as the central nervous system for its enterprise operations—processing real-time inventory, production schedules, bill-of-materials workflows, and financial transactions. Historically, this entire infrastructure was confined to an on-premise data center. This single point of failure exposed critical production pipelines to localized disruptions, prompting executive leadership to mandate a comprehensive enterprise resilience overhaul.
                </p>
              </section>

              {/* ── Section 2: Catalyst for Transformation ── */}
              <section id="catalyst" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaBolt />
                  Section 02
                </div>
                <h2 className="cs-section-heading">
                  The Catalyst for Transformation
                </h2>
                <p className="cs-para">
                  Operating a monolithic on-premise data center inherently exposes an enterprise to localized disasters, power grid instability, physical hardware failures, and systemic cyber threats. VST Tillers recognized that prolonged operational downtime was an unacceptable business risk that could cause cascading factory halts and millions in delayed revenue.
                </p>
                <p className="cs-para">
                  To guarantee uninterrupted operations, the enterprise engaged <strong>Kloudstack Computes</strong> to overcome three complex architectural hurdles:
                </p>

                <div className="cs-cards-grid">
                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <MdSpeed />
                    </div>
                    <h3 className="cs-card-title">Stringent RPO/RTO Mandates</h3>
                    <p className="cs-card-desc">
                      The business required guaranteed virtually zero data loss (near-zero RPO) and rapid sub-hour system recovery, necessitating highly secure, low-latency replication between on-premises and AWS.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaDatabase />
                    </div>
                    <h3 className="cs-card-title">Architectural Complexity</h3>
                    <p className="cs-card-desc">
                      Engineering a reliable, synchronized disaster recovery environment for a massive, heavy-duty in-memory SAP HANA database required precision kernel tuning, storage IOPS alignment, and continuous validation.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaNetworkWired />
                    </div>
                    <h3 className="cs-card-title">Operational Orchestration</h3>
                    <p className="cs-card-desc">
                      Executing seamless failover and failback processes required aligning highly siloed network, database, ERP basis, and infrastructure teams into unified, automated runbooks.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 3: The Strategic Blueprint ── */}
              <section id="blueprint" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaCloud />
                  Section 03
                </div>
                <h2 className="cs-section-heading">
                  The Strategic Blueprint: Cloud-Native "Pilot Light" Architecture
                </h2>
                <p className="cs-para">
                  Rather than mirroring the on-premise data center with expensive, idle physical hardware, Kloudstack Computes architected an elastic, cloud-native Disaster Recovery strategy on Amazon Web Services (AWS).
                </p>
                <p className="cs-para">
                  The blueprint utilized a highly optimized <strong>"Pilot Light" approach</strong> built upon two core technological pillars:
                </p>

                <div className="cs-blueprint-box">
                  <div className="cs-blueprint-grid">
                    <div className="cs-pillar-box">
                      <div className="cs-pillar-tag">Pillar 01 • AWS Cloud-Native</div>
                      <h4 className="cs-pillar-heading">AWS Elastic Disaster Recovery (EDR)</h4>
                      <p className="cs-pillar-desc">
                        Provides continuous, non-disruptive block-level replication into a low-cost staging area in AWS, maintaining up-to-the-second delta updates without taxing primary compute capacity.
                      </p>
                    </div>

                    <div className="cs-pillar-box">
                      <div className="cs-pillar-tag">Pillar 02 • ERP-Aware Native Layer</div>
                      <h4 className="cs-pillar-heading">SAP HANA System Replication (HSR)</h4>
                      <p className="cs-pillar-desc">
                        Delivers application-aware in-memory database synchronization, guaranteeing transactional consistency, atomic redo log replication, and immediate readiness for instant takeover.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="cs-para">
                  This hybrid dual-pillar design allowed the DR environment to run on minimal compute configurations during normal operations, instantly auto-scaling to full production capacity only during a declared failover event or scheduled validation drill.
                </p>
              </section>

              {/* ── Section 4: Execution & Methodology ── */}
              <section id="methodology" className="cs-section">
                <div className="cs-section-header-pill">
                  <MdAutoGraph />
                  Section 04
                </div>
                <h2 className="cs-section-heading">
                  Execution &amp; Methodology
                </h2>
                <p className="cs-para">
                  Kloudstack Computes executed the migration through a rigorous, multi-phased methodology designed to ensure absolute data integrity with zero disruption to active manufacturing cycles:
                </p>

                <div className="cs-phases-container">
                  {/* Phase 1 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Phase 01</div>
                    <h3 className="cs-phase-title">Secure Network Foundation</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Audited and verified all AWS VST-VPC configurations, establishing a robust Site-to-Site IPsec VPN to bridge the VST on-premises infrastructure securely with AWS.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Validated end-to-end telemetry, routing tables, and low-latency connectivity between source servers and isolated AWS staging subnets.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Phase 02</div>
                    <h3 className="cs-phase-title">EDR Configuration &amp; Agent Deployment</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Engineered tailored replication settings, strategically selecting optimal AWS instance families and EBS volume types (gp3/io2) to balance high performance and cost.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Enforced stringent security governance by encrypting all data at rest using AWS KMS within the staging area and applying least-privilege security groups.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Deployed EDR agents with network bandwidth throttling enabled, ensuring continuous replication did not cannibalize active production bandwidth during daytime factory shifts.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Phase 03</div>
                    <h3 className="cs-phase-title">SAP Native Replication (HSR) Setup</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Provisioned the passive SAP HANA database in AWS on a reduced footprint to optimize standby infrastructure costs while preserving full memory compatibility.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Finalized hostnames, IP routing, OS kernel parameters, and storage prerequisites on AWS before executing the HANA application installation and binding the HSR replication mode.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 4 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Phase 04</div>
                    <h3 className="cs-phase-title">Rigorous Failover &amp; Failback Validation</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span><strong>Failover Drill:</strong> Locked SAP production users and executed a clean pre-drill state verification before dynamically scaling up the AWS SAP HANA DB and application servers. Completed deep transactional integrity checks and integration validation before releasing the system.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span><strong>Failback Drill:</strong> Initiated reverse replication from AWS back to the primary on-premise site. Successfully executed an SAP HANA DB takeover, returning the enterprise to its primary state with zero data degradation.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── Section 5: Quantifiable Business Value ── */}
              <section id="business-value" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaChartLine />
                  Section 05
                </div>
                <h2 className="cs-section-heading">
                  Quantifiable Business Value
                </h2>
                <p className="cs-para">
                  The partnership with Kloudstack Computes fundamentally transformed VST Tillers’ risk profile, delivering measurable strategic value across all business continuity dimensions:
                </p>

                <div className="cs-table-wrapper">
                  <table className="cs-table">
                    <thead>
                      <tr>
                        <th>Performance Metric</th>
                        <th>Strategic Business Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <MdSpeed className="text-warning" size={18} />
                            Recovery Point Objective (RPO)
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">Near-Zero Data Loss:</span> Achieved continuous, secure data replication via SAP HSR and AWS EDR, eliminating batch lag.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaSyncAlt className="text-info" size={16} />
                            Recovery Time Objective (RTO)
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">30–60 Minutes:</span> Streamlined failover orchestration enabled rapid scale-up of cloud instances, drastically slashing recovery window.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaChartLine className="text-success" size={16} />
                            TCO Optimization
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">40–60% Cost Reduction:</span> By utilizing minimized AWS configurations during passive standby phases, infrastructure costs were slashed compared to traditional physical DR.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <MdVerified className="text-warning" size={18} />
                            Operational Autonomy
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">Full Runbook Independence:</span> Delivered comprehensive operational runbooks, architecture documentation, and live drill training empowering internal IT teams.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Testimonial Quote */}
                <div className="cs-quote-card">
                  <div className="cs-quote-glow" />
                  <blockquote className="cs-quote-text">
                    "The implementation of our SAP HANA DR environment on AWS has fundamentally shifted our operational risk profile. With Kloudstack's technical methodology, we have transitioned from legacy vulnerabilities to a highly resilient, cost-optimized cloud infrastructure."
                  </blockquote>
                  <div className="cs-quote-author">
                    <div className="cs-quote-avatar">
                      <FaBuilding />
                    </div>
                    <div>
                      <div className="cs-author-name">Enterprise Technology Leadership</div>
                      <div className="cs-author-role">Chief Information Officer, VST Tillers</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Section 6: Executive Insights ── */}
              <section id="insights" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaShieldAlt />
                  Section 06
                </div>
                <h2 className="cs-section-heading">
                  Executive Insights &amp; Strategic Takeaways
                </h2>

                <div className="cs-insights-grid">
                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <FaBolt /> Strategic Principle 01
                    </div>
                    <h3 className="cs-insight-title">Elasticity is the New Economics of DR</h3>
                    <p className="cs-insight-desc">
                      Cloud-native DR allows enterprises to eliminate the capital expenditure of idle disaster recovery data centers. By leveraging elastic compute—running small and scaling up only during a crisis—enterprises achieve premium resilience without the premium price tag.
                    </p>
                  </div>

                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <FaCheckCircle /> Strategic Principle 02
                    </div>
                    <h3 className="cs-insight-title">Testing is the Ultimate Validation</h3>
                    <p className="cs-insight-desc">
                      The flawless execution of full failover and failback drills proves that rigorous operational runbooks and cross-team coordination are just as critical as the underlying replication technologies.
                    </p>
                  </div>

                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <FaServer /> Strategic Principle 03
                    </div>
                    <h3 className="cs-insight-title">Synergistic Integration (EDR + HSR)</h3>
                    <p className="cs-insight-desc">
                      Combining cloud-native services (AWS EDR) with application-native intelligence (SAP HSR) creates a defense-in-depth data protection strategy perfectly tailored to complex enterprise workloads.
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
                  <h3 className="cs-cta-title">Is Your Enterprise DR Strategy Cloud-Resilient?</h3>
                  <p className="cs-cta-desc">
                    Discover how Kloudstack Computes can help architect, test, and optimize an elastic disaster recovery posture for your SAP, ERP, and mission-critical cloud workloads.
                  </p>
                  <Link to="/contact" className="cs-cta-btn">
                    Schedule an Architecture Assessment
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

export default ManufacturingDisasterRecovery
