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
  FaShip, 
  FaNetworkWired, 
  FaLock, 
  FaUserShield, 
  FaChartLine, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaKey, 
  FaGlobeAmericas, 
  FaArrowRight,
  FaCogs,
  FaLaptopCode,
  FaCompass
} from 'react-icons/fa'
import { 
  MdSpeed, 
  MdOutlineSecurity, 
  MdOutlineVpnKeyOff, 
  MdAutoGraph, 
  MdVerified, 
  MdOutlinePolicy,
  MdOutlineCloudDone
} from 'react-icons/md'
import { LuBookmark, LuCheckCheck } from 'react-icons/lu'
import './ManufacturingDisasterRecovery.css'

const MaritimeZeroTrust = () => {
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
                <FaShip className="me-2" size={11} />
                Global Shipping &amp; Logistics
              </span>
              <span className="cs-tag-badge cs-tag-badge--aws">
                <FaShieldAlt className="me-2" size={11} />
                Check Point Harmony ZTNA &amp; SASE
              </span>
            </div>
          </div>

          {/* Title and Lead */}
          <h1 className="cs-main-title section-heading text-start">
            Client Success Story: <br />
            <span className="cs-title-gradient">
              Securing Global Maritime Operations with Zero Trust Architecture
            </span>
          </h1>

          <p className="cs-header-lead">
            To securely enable a highly distributed workforce across international ports, warehousing hubs, and cargo fleets, SI Shipping partnered with Kloudstack Computes to replace legacy hardware VPNs with Check Point Harmony Connect ZTNA and SASE—cutting security incidents by 60% and boosting application speeds by 40%.
          </p>

          {/* Executive Overview Profile Bar */}
          <div className="cs-exec-card">
            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaShip />
              </div>
              <div>
                <div className="cs-exec-label">Client Profile</div>
                <div className="cs-exec-value">SI Shipping (Global Maritime Logistics)</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <MdOutlineVpnKeyOff />
              </div>
              <div>
                <div className="cs-exec-label">Legacy State</div>
                <div className="cs-exec-value">Hardware-Based Perimeter VPNs</div>
              </div>
            </div>

            <div className="cs-exec-item">
              <div className="cs-exec-icon-wrap">
                <FaUserShield />
              </div>
              <div>
                <div className="cs-exec-label">Target Architecture</div>
                <div className="cs-exec-value">Check Point Harmony ZTNA &amp; SASE</div>
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
              <div className="cs-metric-highlight">60% Cut</div>
              <div className="cs-metric-title">Security Incidents</div>
              <div className="cs-metric-sub">Reduced in first 6 months via ZTNA</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">40% Faster</div>
              <div className="cs-metric-title">App Access Speeds</div>
              <div className="cs-metric-sub">Direct-to-cloud SASE connectivity</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">25% Saved</div>
              <div className="cs-metric-title">Operational TCO</div>
              <div className="cs-metric-sub">Retired costly legacy VPN hardware</div>
            </div>

            <div className="cs-metric-card">
              <div className="cs-metric-highlight">100% Audit</div>
              <div className="cs-metric-title">IMO &amp; GDPR Compliance</div>
              <div className="cs-metric-sub">Granular, auditable access governance</div>
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
                    href="https://twitter.com/intent/tweet?text=Maritime+Zero+Trust+Architecture+Case+Study"
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
                    <FaShip className="cs-point-icon" />
                    <div className="cs-point-text">
                      <strong>Industry:</strong> Global Shipping and Logistics.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaLaptopCode className="cs-point-icon text-info" />
                    <div className="cs-point-text">
                      <strong>Core Workload:</strong> Enterprise Application Access &amp; Distributed Remote Connectivity.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <MdOutlineVpnKeyOff className="cs-point-icon text-warning" />
                    <div className="cs-point-text">
                      <strong>Legacy Infrastructure:</strong> Traditional Hardware-Based VPNs with broad network visibility and lateral movement risk.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaShieldAlt className="cs-point-icon text-primary" />
                    <div className="cs-point-text">
                      <strong>Target Architecture:</strong> Check Point Harmony Connect ZTNA alongside Harmony SASE Private Access and Internet Access.
                    </div>
                  </li>
                  <li className="cs-overview-point">
                    <FaCheckCircle className="cs-point-icon text-success" />
                    <div className="cs-point-text">
                      <strong>Core Outcome:</strong> 60% reduction in security incidents in 6 months, 40% faster application access, 25% lower remote access operational cost, and full alignment with IMO &amp; GDPR compliance.
                    </div>
                  </li>
                </ul>
              </div>

              {/* ── Section 1: The Client Context ── */}
              <section id="client-context" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaGlobeAmericas />
                  Section 01
                </div>
                <h2 className="cs-section-heading">
                  The Client Context: High-Stakes Global Maritime Operations
                </h2>
                <p className="cs-para">
                  SI Shipping operates a complex, high-stakes global logistics network encompassing fleets of cargo ships, warehousing facilities, and international ports across multiple continents. The enterprise supports a diverse workforce of over 300 employees, including offshore maritime crews, corporate headquarters staff, and third-party logistics partners.
                </p>
                <p className="cs-para">
                  In maritime supply chains where vessel routing, cargo manifests, and port dispatch schedules operate in real time, seamless and secure connectivity is the critical lifeblood ensuring smooth, uninterrupted operations. Any network downtime or compromised credentials directly jeopardize vessel operations and regulatory compliance.
                </p>
              </section>

              {/* ── Section 2: Catalyst for Change ── */}
              <section id="catalyst" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaExclamationTriangle />
                  Section 02
                </div>
                <h2 className="cs-section-heading">
                  The Catalyst for Change: Customer Challenges
                </h2>
                <p className="cs-para">
                  Historically, SI Shipping relied on broad, traditional VPNs for internal system access, a strategy that became increasingly untenable during the surge in remote work adoption. This legacy perimeter-based architecture introduced severe operational and security roadblocks:
                </p>

                <div className="cs-cards-grid">
                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaNetworkWired />
                    </div>
                    <h3 className="cs-card-title">Expanded Attack Surface &amp; Lateral Movement</h3>
                    <p className="cs-card-desc">
                      Broad VPN access granted users excessive network visibility upon authentication. In the event of a single credential breach, adversaries could move laterally across sensitive internal subnets. Furthermore, granting secure access to third-party contractors and port inspectors was precarious and difficult to isolate.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <MdSpeed />
                    </div>
                    <h3 className="cs-card-title">Operational Friction &amp; Bandwidth Latency</h3>
                    <p className="cs-card-desc">
                      Remote maritime personnel and branch offices experienced severe latency and connection drops when hair-pinning traffic through centralized VPN concentrators to reach cloud-hosted SaaS applications.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <FaCogs />
                    </div>
                    <h3 className="cs-card-title">Heavy Administrative Overhead</h3>
                    <p className="cs-card-desc">
                      The internal IT and security teams were constantly bogged down by manual configuration patches, client-side VPN troubleshooting, hardware appliance maintenance, and static ACL management.
                    </p>
                  </div>

                  <div className="cs-feature-card">
                    <div className="cs-card-icon-badge">
                      <MdOutlinePolicy />
                    </div>
                    <h3 className="cs-card-title">Strict Compliance Mandates</h3>
                    <p className="cs-card-desc">
                      The enterprise faced mounting regulatory pressure to comply with the <strong>International Maritime Organization’s (IMO)</strong> cybersecurity guidelines and <strong>GDPR</strong> data sovereignty requirements, demanding immutable, granular, and auditable access controls.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 3: Strategic Blueprint ── */}
              <section id="blueprint" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaShieldAlt />
                  Section 03
                </div>
                <h2 className="cs-section-heading">
                  Strategic Blueprint: Check Point Harmony ZTNA &amp; SASE Architecture
                </h2>
                <p className="cs-para">
                  To eliminate these vulnerabilities, <strong>Kloudstack Computes Private Limited</strong> architected a modern security transformation centered on Check Point’s Zero Trust Network Access (ZTNA) solution.
                </p>
                <p className="cs-para">
                  Moving completely away from perimeter-based defense, the solution was built on the core principle of <em>"Never Trust, Always Verify"</em> and strict least-privilege enforcement:
                </p>

                <div className="cs-blueprint-box">
                  <div className="cs-blueprint-grid">
                    <div className="cs-pillar-box">
                      <div className="cs-pillar-tag">Pillar 01 • Application-Level Access</div>
                      <h4 className="cs-pillar-heading">Check Point Harmony Connect ZTNA</h4>
                      <p className="cs-pillar-desc">
                        Grants users micro-segmented access strictly to the specific applications they are authorized to use, concealing the broader internal network and eliminating lateral movement vectors entirely.
                      </p>
                    </div>

                    <div className="cs-pillar-box">
                      <div className="cs-pillar-tag">Pillar 02 • Cloud-Delivered Protection</div>
                      <h4 className="cs-pillar-heading">Harmony SASE Private &amp; Internet Access</h4>
                      <p className="cs-pillar-desc">
                        Provides secure direct-to-cloud connectivity with built-in ThreatCloud AI threat prevention, ensuring crew members and remote staff connect directly without backhauling traffic through legacy data centers.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="cs-para">
                  This identity-aware cloud fabric unifies policy enforcement across all endpoints, providing comprehensive visibility into user sessions, device postures, and anomalous access requests in real time.
                </p>
              </section>

              {/* ── Section 4: Execution & Methodology ── */}
              <section id="methodology" className="cs-section">
                <div className="cs-section-header-pill">
                  <MdAutoGraph />
                  Section 04
                </div>
                <h2 className="cs-section-heading">
                  Execution &amp; Methodology: Our Phased Approach
                </h2>
                <p className="cs-para">
                  Kloudstack Computes executed the deployment through a highly structured, five-stage methodology engineered to minimize disruption across SI Shipping's distributed maritime operations:
                </p>

                <div className="cs-phases-container">
                  {/* Phase 1 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 01</div>
                    <h3 className="cs-phase-title">Comprehensive Architecture &amp; Role Assessment</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Conducted a granular audit of the legacy remote access infrastructure and traffic topology.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Meticulously mapped user roles, offshore crew profiles, and application dependencies to define strict least-privilege access matrices.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 02</div>
                    <h3 className="cs-phase-title">Enterprise Identity &amp; Azure AD Integration</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Seamlessly integrated the Check Point ZTNA solution with the client’s existing Microsoft Azure AD environment.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Enabled multi-factor authentication (MFA) and Single Sign-On (SSO) for a frictionless, unified authentication experience.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 03</div>
                    <h3 className="cs-phase-title">Deployment &amp; Technical Roadblock Mitigation</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Deployed Harmony SASE packages with pre-configured posture-validation rules and SSL inspection policies.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Overcame initial maritime routing complexities through agile stakeholder alignment and rapid configuration tuning, ensuring zero schedule slippage.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 4 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 04</div>
                    <h3 className="cs-phase-title">Controlled Pilot &amp; Rigorous Penetration Testing</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Conducted controlled migration waves across pilot user groups to baseline throughput and latency metrics.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Executed comprehensive penetration tests and simulated breach exercises to validate that lateral traversal was fully prevented before full rollout.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 5 */}
                  <div className="cs-phase-item">
                    <div className="cs-phase-badge">Stage 05</div>
                    <h3 className="cs-phase-title">Enterprise-Wide Enablement &amp; User Training</h3>
                    <ul className="cs-phase-bullets">
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Scaled ZTNA across 300+ employees, offshore vessels, port stations, and third-party vendor access portals.</span>
                      </li>
                      <li>
                        <FaCheck className="cs-bullet-icon" />
                        <span>Delivered role-tailored training sessions, runbooks, and self-service guides to accelerate adoption and eliminate support friction.</span>
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
                  Value Delivered: Business Outcomes &amp; Measurable Benefits
                </h2>
                <p className="cs-para">
                  The Zero Trust transformation translated advanced cybersecurity engineering into direct, quantifiable operational and financial dividends:
                </p>

                <div className="cs-table-wrapper">
                  <table className="cs-table">
                    <thead>
                      <tr>
                        <th>Strategic Benefit</th>
                        <th>Measurable Business Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaShieldAlt className="text-warning" size={18} />
                            Drastic Threat Reduction
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">60% Incident Drop:</span> By enforcing Zero Trust principles and leveraging Check Point’s ThreatCloud for real-time monitoring, security incidents related to remote access plummeted by 60% in just six months.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <MdSpeed className="text-info" size={18} />
                            Optimized User Experience
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">40% Speed Improvement:</span> Direct-to-cloud connectivity eliminated legacy VPN bottlenecks, yielding a 40% improvement in application access times for the remote and maritime workforce.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <FaChartLine className="text-success" size={16} />
                            Streamlined Operations &amp; TCO
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">25% Cost Savings:</span> Centralized policy management and automated provisioning reduced IT administrative overhead, while retiring hardware-based VPNs drove a 25% decrease in annual operational costs.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="cs-table-metric">
                            <MdVerified className="text-warning" size={18} />
                            Assured Compliance
                          </div>
                        </td>
                        <td>
                          <span className="cs-table-highlight">Full Regulatory Compliance:</span> Granular access controls and detailed activity logging successfully aligned the enterprise with IMO cybersecurity guidelines and GDPR data privacy mandates.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Quote Box */}
                <div className="cs-quote-card">
                  <div className="cs-quote-glow" />
                  <blockquote className="cs-quote-text">
                    "Transitioning from legacy VPNs to Check Point's Zero Trust architecture engineered by Kloudstack has transformed our global security posture. Our crews and partners now access critical applications with lightning speed, while our attack surface has been fundamentally shut down."
                  </blockquote>
                  <div className="cs-quote-author">
                    <div className="cs-quote-avatar">
                      <FaShip />
                    </div>
                    <div>
                      <div className="cs-author-name">Global IT &amp; Security Leadership</div>
                      <div className="cs-author-role">Head of Information Security, SI Shipping</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Section 6: Strategic Insights ── */}
              <section id="insights" className="cs-section">
                <div className="cs-section-header-pill">
                  <FaKey />
                  Section 06
                </div>
                <h2 className="cs-section-heading">
                  Strategic Insights &amp; Lessons Learned
                </h2>

                <div className="cs-insights-grid">
                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <MdOutlineSecurity /> Lesson 01
                    </div>
                    <h3 className="cs-insight-title">Zero Trust is a Business Enabler</h3>
                    <p className="cs-insight-desc">
                      The transition demonstrated that moving to an identity-first, Zero Trust architecture does not just improve security—it actively enhances end-user productivity, speeds up daily workflows, and eliminates operational friction.
                    </p>
                  </div>

                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <FaCheckCircle /> Lesson 02
                    </div>
                    <h3 className="cs-insight-title">The Power of Stakeholder Synergy</h3>
                    <p className="cs-insight-desc">
                      Overcoming technical deployment hurdles in a complex, globally distributed environment requires tight, continuous coordination between the client, the technology vendor (Check Point), and the consulting partner (Kloudstack).
                    </p>
                  </div>

                  <div className="cs-insight-box">
                    <div className="cs-insight-tag">
                      <MdOutlinePolicy /> Lesson 03
                    </div>
                    <h3 className="cs-insight-title">Compliance through Architecture</h3>
                    <p className="cs-insight-desc">
                      Meeting stringent maritime (IMO) and data governance (GDPR) regulations is most effectively achieved when granular access controls are built directly into the foundational network architecture, rather than bolted on as an afterthought.
                    </p>
                  </div>
                </div>

                {/* Confidentiality Notice */}
                <div className="cs-confidential-banner">
                  <FaLock className="cs-confidential-icon" />
                  <div>
                    <strong>STRICTLY CONFIDENTIAL:</strong> The information contained in this document is proprietary to KloudStack Computes Private Limited. By accepting this document, the recipient agrees to keep its contents confidential and to not reproduce, disclose, or distribute this information to any third party without express written authorization.
                  </div>
                </div>

                {/* CTA Card */}
                <div className="cs-cta-section">
                  <div className="cs-cta-glow" />
                  <h3 className="cs-cta-title">Ready to Modernize Your Remote Access Posture?</h3>
                  <p className="cs-cta-desc">
                    Connect with Kloudstack's Zero Trust &amp; SASE practice to evaluate your current network architecture, eliminate legacy VPN vulnerabilities, and accelerate remote workforce productivity.
                  </p>
                  <Link to="/contact" className="cs-cta-btn">
                    Schedule a Zero Trust Architecture Consultation
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

export default MaritimeZeroTrust
