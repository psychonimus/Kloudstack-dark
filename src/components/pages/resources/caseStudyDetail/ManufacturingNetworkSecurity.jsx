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
  FaShieldAlt, 
  FaNetworkWired, 
  FaBug, 
  FaServer, 
  FaExclamationTriangle, 
  FaChartLine, 
  FaCheckCircle, 
  FaLock, 
  FaIndustry, 
  FaCar, 
  FaArrowRight, 
  FaCogs, 
  FaFireExtinguisher,
  FaShieldVirus
} from 'react-icons/fa'
import { 
  MdSpeed, 
  MdOutlineSecurity, 
  MdOutlineShield, 
  MdAutoGraph, 
  MdVerified, 
  MdOutlinePolicy, 
  MdOutlineWarningAmber 
} from 'react-icons/md'
import { LuBookmark, LuCheckCheck } from 'react-icons/lu'
import './ManufacturingDisasterRecovery.css'

const ManufacturingNetworkSecurity = () => {
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
                Automotive &amp; Consumer Goods
              </span>
              <span className="cs-tag-badge cs-tag-badge--aws">
                <FaShieldAlt className="me-2" size={11} />
                Fortinet Security Fabric on AWS
              </span>
            </div>
          </div>

          {/* Title and Lead */}
          <h1 className="cs-main-title section-heading text-start">
            Client Success Story: <br />
            <span className="cs-title-gradient">
              Fortifying Manufacturing Enterprise Networks Against Advanced Cyber Threats
            </span>
          </h1>

          <p className="cs-header-lead">
            How India’s premier automotive and consumer goods manufacturing conglomerate partnered with Kloudstack Computes to overhaul an obsolete, misconfigured UTM gateway—eliminating over 117,000 active botnet attacks and driving critical network intrusions down from 97.23% to 6.69%.
          </p>

          {/* Executive Overview Profile Bar */}
          <div className="cs-exec-card">
            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaCar />
              </div>
              <div>
                <div className="cs-exec-label">Client Profile</div>
                <div className="cs-exec-value">Leading Automotive &amp; Consumer Goods Enterprise</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaExclamationTriangle />
              </div>
              <div>
                <div className="cs-exec-label">Initial Vulnerability</div>
                <div className="cs-exec-value">100K+ Botnet Incursions &amp; EOL UTM Firmware</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaShieldVirus />
              </div>
              <div>
                <div className="cs-exec-label">Target Architecture</div>
                <div className="cs-exec-value">Hardened Fortinet Security Fabric on AWS</div>
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
              <div className="cs-metric-highlight">97% → 6.6%</div>
              <div className="cs-metric-title">Critical Intrusion Rate</div>
              <div className="cs-metric-sub">Plummeted after forensic policy overhaul</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">117,571</div>
              <div className="cs-metric-title">Botnet Attacks Blocked</div>
              <div className="cs-metric-sub">C&amp;C server communication severed</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">10,527</div>
              <div className="cs-metric-title">IPS Signatures Hardened</div>
              <div className="cs-metric-sub">Reprogrammed from passive pass to block</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">100%</div>
              <div className="cs-metric-title">Zero Trust Perimeter</div>
              <div className="cs-metric-sub">Sanitized internal &amp; external ports</div>
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
                      <span>3. Perimeter Blueprint</span>
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
                    href="https://twitter.com/intent/tweet?text=Manufacturing+Enterprise+Network+Security+Case+Study"
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
                    <FaIndustry className="cs-point-icon" />
                    <div className="cs-point-text">
                      <strong>Industry:</strong> Manufacturing (Automotive &amp; Consumer Goods).
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaCar className="cs-point-icon text-info" />
                    <div className="cs-point-text">
                      <strong>Client Profile:</strong> India’s leading automotive manufacturing brand, featuring a multi-product portfolio that includes water purification, vacuum cleaning, and home security solutions.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaExclamationTriangle className="cs-point-icon text-warning" />
                    <div className="cs-point-text">
                      <strong>The Vulnerability:</strong> Severe network compromises due to unmonitored UTM infrastructure, exposing the enterprise to over 100,000 botnet attacks, unchecked anomaly flooding, and critical firmware obsolescence (4 years without upgrade).
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaShieldAlt className="cs-point-icon text-primary" />
                    <div className="cs-point-text">
                      <strong>The Architecture:</strong> Fortinet Security Fabric (FortiGate UTM, FortiAnalyzer, FortiGuard) integrated seamlessly within an AWS cloud environment.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaCheckCircle className="cs-point-icon text-success" />
                    <div className="cs-point-text">
                      <strong>The Impact:</strong> Engineered a comprehensive perimeter security overhaul, successfully plummeting critical network intrusion levels from a peak of 97.23% down to 6.69%.
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
                  The Macro Context: Security in the Multi-Channel Manufacturing Sector
                </h2>
                <p className="cs-para">
                  In the modern manufacturing landscape, converging IT and OT (Operational Technology) environments requires airtight perimeter security. The client operates a massive, multi-channel enterprise spanning automotive manufacturing, smart home automation, water purification systems, and commercial cleaning equipment.
                </p>
                <p className="cs-para">
                  Protecting this diverse enterprise ecosystem requires proactive, highly configured network defenses to ensure that business-critical production data, SAP ERP instances, dealer networks, and cloud workloads running on <strong>Amazon Web Services (AWS)</strong> remain impenetrable to advanced persistent threats and automated cyber cartels.
                </p>
              </section>

              {/* ── Section 2: Catalyst for Transformation ── */}
              <section id="catalyst" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaBug />
                  Section 02
                </div>
                <h2 className="cs-section-heading">
                  The Catalyst for Transformation: Uncovering Critical Network Flaws
                </h2>
                <p className="cs-para">
                  Despite having previously deployed a FortiGate UTM managed by an external vendor, the client’s network was operating with severe blind spots, misconfigured rule sets, and unmonitored vulnerabilities. A forensic deployment of FortiAnalyzer revealed that the network was heavily saturated with non-legitimate traffic and active malicious payloads.
                </p>
                <p className="cs-para">
                  <strong>Kloudstack Computes</strong> was engaged to conduct an exhaustive forensic assessment, uncovering critical security gaps:
                </p>

                <div className="cs-cards-grid">
                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaBug />
                    </div>
                    <h3 className="cs-card-title">Active Botnet &amp; C&amp;C Infections</h3>
                    <p className="cs-card-desc">
                      The network was under active siege, logging <strong>1,17,571 attacks</strong> from external Botnet Command &amp; Control (C&amp;C) servers continuously probing and exfiltrating telemetry.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaCogs />
                    </div>
                    <h3 className="cs-card-title">Critical Firmware Obsolescence</h3>
                    <p className="cs-card-desc">
                      Perimeter firewalls were running on End-of-Life (EOL) FortiOS version 5.2.10 that had not been updated in four years, leaving the gateway blind to modern threat signatures.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <MdOutlineWarningAmber />
                    </div>
                    <h3 className="cs-card-title">Misconfigured Defense Actions</h3>
                    <p className="cs-card-desc">
                      Intrusion Prevention System (IPS) and Denial of Service (DoS) policies were improperly set to "pass" rather than "block," allowing L3 and L4 anomaly floods to freely breach internal segments.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaServer />
                    </div>
                    <h3 className="cs-card-title">Internal Suspicious AD Traffic</h3>
                    <p className="cs-card-desc">
                      Active Directory (AD) domain controllers were generating anomalous, unacknowledged requests over UDP port 8002 instead of standard keep-alive packets, signalling lateral compromise.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaLock />
                    </div>
                    <h3 className="cs-card-title">High-Risk Third-Party Backdoor</h3>
                    <p className="cs-card-desc">
                      The previous service provider had left active, unrestricted routing paths open from the customer's DMZ directly back to the provider's external NOC/SOC.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaExclamationTriangle />
                    </div>
                    <h3 className="cs-card-title">Single Point of Failure (No HA)</h3>
                    <p className="cs-card-desc">
                      Despite being intended for a High Availability (HA) cluster, the firewall had never been configured in HA mode, leaving the enterprise vulnerable to catastrophic single-point hardware failure.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 3: The Strategic Blueprint ── */}
              <section id="blueprint" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaShieldAlt />
                  Section 03
                </div>
                <h2 className="cs-section-heading">
                  The Strategic Blueprint: Perimeter Hardening &amp; Threat Eradication
                </h2>
                <p className="cs-para">
                  To neutralize the active threats and future-proof the network perimeter, <strong>Kloudstack Computes</strong> designed a comprehensive remediation and modernization architecture.
                </p>
                <p className="cs-para">
                  Rather than merely patching symptoms, the blueprint established an immutable Zero Trust perimeter defense across both cloud and on-premise ingress/egress boundaries:
                </p>

                <div className="cs-blueprint-box">
                  <div className="cs-blueprint-grid">
                    <div className="cs-pillar-box">
                      <div className="cs-pillar-tag">Pillar 01 • Firmware &amp; Intelligence</div>
                      <h4 className="cs-pillar-heading">FortiOS Upgrade &amp; FortiGuard Telemetry</h4>
                      <p className="cs-pillar-desc">
                        Upgraded the core FortiOS kernel to enable next-generation Application Control, hardware-accelerated SSL inspection, and dynamic real-time FortiGuard threat signature streaming.
                      </p>
                    </div>

                    <div className="cs-pillar-box">
                      <div className="cs-pillar-tag">Pillar 02 • Active Threat Mitigation</div>
                      <h4 className="cs-pillar-heading">Enforced DoS &amp; Rate-Based IPS Hardening</h4>
                      <p className="cs-pillar-desc">
                        Restructured the entire policy matrix to enforce aggressive packet dropping on DoS threshold breaches, while filtering CVE-specific exploits and eliminating unauthorized inter-subnet ports.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Section 4: Execution & Methodology ── */}
              <section id="methodology" className="cs-section">
                <div className="cs-section-header-pill">
                  <MdAutoGraph />
                  Section 04
                </div>
                <h2 className="cs-section-heading">
                  Execution &amp; Methodology: Phased Forensic Remediation
                </h2>
                <p className="cs-para">
                  Kloudstack Computes executed the remediation through a four-stage methodology designed to systematically eradicate botnet infections and exploit vectors with zero downtime to active manufacturing production:
                </p>

                <div className="cs-phases-container">
                  {/* Phase 1 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Phase 01</div>
                    <h3 className="cs-phase-title">Core Infrastructure &amp; FortiOS Modernization</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Upgraded the FortiOS firmware from deprecated version 5.2.10 to a hardened, verified 5.6.5 release without configuration corruption.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Instantly eliminated 40% to 50% of active intrusion noise and unlocked Application Control, deeper FortiView session debugging, and accelerated policy compilation.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Phase 02</div>
                    <h3 className="cs-phase-title">Network Optimization &amp; Flood Prevention (DoS)</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Engineered and applied strict DoS mitigation policies across all ingress and egress network interfaces.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Configured calibrated threshold values with actions explicitly set to "block", neutralizing TCP SYN floods, UDP volumetric storms, ICMP sweeps, and SCTP scans.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Phase 03</div>
                    <h3 className="cs-phase-title">Custom IPS Profiling &amp; Vulnerability Mitigation</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Restructured the IPS security profile, switching the default action for <strong>10,527 threat signatures</strong> from "pass" to "block" while whitelisting genuine enterprise traffic.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Activated rate-based signatures and designed custom filters forcefully blocking Drupal SQL Injections, MS Windows OLE Remote Code Execution, and Jboss exploit vectors.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 4 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Phase 04</div>
                    <h3 className="cs-phase-title">Access Control &amp; Internal Traffic Sanitization</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Implemented strict Infrastructure Access Control Lists (ACLs) to block unauthorized RSH IPv4/IPv6 packets over TCP port 514.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Terminated anomalous UDP/8002 port traffic flowing between primary and secondary Active Directory servers, and severed obsolete DMZ vendor backdoors.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Engineered custom security rules to block unauthenticated JDWP debug service ports across the firewall.</span>
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
                  Quantifiable Business Value &amp; Security Outcomes
                </h2>
                <p className="cs-para">
                  The forensic intervention by Kloudstack Computes fundamentally sanitized the client's AWS cloud and on-premise manufacturing networks, delivering dramatic, measurable security outcomes:
                </p>

                <div className="cs-table-wrapper">
                  <table className="cs-table">
                    <thead>
                      <tr>
                        <th>Performance Metric</th>
                        <th>Strategic Business &amp; Security Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaShieldAlt className="text-warning" size={18} />
                            Threat Neutralization
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">Pre-Mitigation Anomaly Peak:</span> Prior to Kloudstack's intervention, critical L3/L4 anomaly threats reached peak intrusion levels of 91.63%, 94.91%, and 97.23% across consecutive monitoring periods.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <MdSpeed className="text-info" size={18} />
                            Drastic Risk Reduction
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">Plummeted to 6.69%:</span> Following policy restructuring and firmware modernization, the critical threat saturation plunged from 97.23% down to just 6.69%.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaBug className="text-danger" size={16} />
                            Botnet Eradication
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">117,571 Attacks Severed:</span> Successfully identified, blocked, and severed all persistent communication from external C&amp;C servers targeting internal endpoints.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <MdVerified className="text-success" size={18} />
                            Operational Visibility
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">Granular Real-Time Governance:</span> Upgraded firmware provided the enterprise with continuous FortiAnalyzer logging, automated endpoint scanning, and deep Application Control policies.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Quote Box */}
                <div className="cs-quote-card">
                  <div className="cs-quote-glow" />
                  <blockquote className="cs-quote-text">
                    "The Kloudstack Computes methodology transformed our perimeter from a passive, highly vulnerable gateway into an active, intelligent defense system. Their forensic precision in tuning our UTM eradicated active botnet threats and drastically reduced our critical intrusion footprint."
                  </blockquote>
                  <div className="cs-quote-author">
                    <div className="cs-quote-avatar">
                      <FaCar />
                    </div>
                    <div>
                      <div className="cs-author-name">Enterprise Cybersecurity Leadership</div>
                      <div className="cs-author-role">Chief Information Security Officer, Automotive &amp; Consumer Manufacturing Enterprise</div>
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
                      <FaExclamationTriangle /> Insight 01
                    </div>
                    <h3 className="cs-insight-title">Deployment Does Not Equal Security</h3>
                    <p className="cs-insight-desc">
                      Simply purchasing and deploying enterprise-grade UTM hardware is insufficient. If IPS and DoS actions are left in passive "monitor" or "pass" modes, the network remains completely defenseless against automated flood and exploit attacks.
                    </p>
                  </div>

                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <FaCogs /> Insight 02
                    </div>
                    <h3 className="cs-insight-title">The Hidden Cost of Technical Debt</h3>
                    <p className="cs-insight-desc">
                      Running critical security gateways on End-of-Life firmware for four years created a massive capability gap, preventing the perimeter from recognizing or blocking modern zero-day threat signatures.
                    </p>
                  </div>

                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <FaLock /> Insight 03
                    </div>
                    <h3 className="cs-insight-title">Third-Party Risk &amp; Backdoor Management</h3>
                    <p className="cs-insight-desc">
                      Stale, full-access routes left open for previous service providers represent a critical backdoor vulnerability. Continuous auditing of DMZ access policies is a mandatory component of enterprise risk posture.
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
                  <h3 className="cs-cta-title">Is Your Enterprise Perimeter Actively Defending or Just Monitoring?</h3>
                  <p className="cs-cta-desc">
                    Connect with Kloudstack’s Network Security &amp; SOC practice to perform an exhaustive UTM/firewall forensic audit, tune IPS/DoS policies, and eradicate hidden botnet threats.
                  </p>
                  <Link to="/contact" className="cs-cta-btn">
                    Schedule a Perimeter Forensic Assessment
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

export default ManufacturingNetworkSecurity
