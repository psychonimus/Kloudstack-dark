import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaDotCircle, 
  FaArrowLeft, 
  FaArrowRight, 
  FaRedo, 
  FaCalendarAlt, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaLock, 
  FaExclamationTriangle,
  FaCheck
} from 'react-icons/fa'
import { 
  MdSpeed, 
  MdOutlineSecurity, 
  MdVerified, 
  MdOutlineEmail, 
  MdOutlineAssessment 
} from 'react-icons/md'
import './CyberRiskAssessment.css'

/* ─── 12 Comprehensive Risk Questions ─── */
const QUESTIONS = [
  {
    domain: 'Identity & Access',
    text: 'Is multi-factor authentication (MFA) enforced on email and business applications?',
    options: [
      { k: 'Everywhere, for all users', d: 'Including admins, employees, and third parties', s: 100 },
      { k: 'On most systems', d: 'Some legacy systems or gaps remain', s: 65 },
      { k: 'Only for a few users or systems', d: 'Limited to IT admins or executive accounts', s: 30 },
      { k: 'Not in place', d: 'Single-factor passwords only', s: 0 },
    ],
  },
  {
    domain: 'Identity & Access',
    text: 'How are user accounts de-provisioned when someone leaves the organisation?',
    options: [
      { k: 'A defined process, completed on the last day', d: 'With automated offboarding and periodic access reviews', s: 100 },
      { k: 'Usually handled, but not formally tracked', d: 'Manual offboarding with occasional delays', s: 60 },
      { k: 'Handled when someone remembers', d: 'Ad-hoc notification from managers', s: 25 },
      { k: 'We don’t have a defined process', d: 'Accounts remain active indefinitely', s: 0 },
    ],
  },
  {
    domain: 'Endpoint & Infrastructure',
    text: 'What protection runs on laptops, desktops, and server workloads?',
    options: [
      { k: 'EDR with 24/7 central monitoring', d: 'Alerts are actively triaged and contained by a security team', s: 100 },
      { k: 'EDR or antivirus, not actively monitored', d: 'Installed on devices but alerts are checked ad-hoc', s: 55 },
      { k: 'Basic built-in antivirus only', d: 'OS-default security mechanisms only', s: 30 },
      { k: 'Nothing consistent across devices', d: 'Unmanaged or unmonitored endpoints', s: 0 },
    ],
  },
  {
    domain: 'Endpoint & Infrastructure',
    text: 'How quickly are critical security patches and CVE updates applied?',
    options: [
      { k: 'Within days, on a defined schedule', d: 'Automated patch management with tracked exceptions', s: 100 },
      { k: 'Within a few weeks', d: 'Regular manual maintenance cycles', s: 60 },
      { k: 'Whenever there’s time', d: 'Quarterly or irregular updates', s: 25 },
      { k: 'We don’t track patching', d: 'Firmware and OS remain outdated', s: 0 },
    ],
  },
  {
    domain: 'Data Protection',
    text: 'Do you know where your sensitive and personal data is stored and who can access it?',
    options: [
      { k: 'Yes — documented data inventory and access map', d: 'Continuously reviewed and mapped to DPDPA / GDPR controls', s: 100 },
      { k: 'Partly — for the main production databases only', d: 'Shadow data and cloud storage unmapped', s: 55 },
      { k: 'Broadly, but nothing documented', d: 'Institutional knowledge without audits', s: 25 },
      { k: 'No data mapping in place', d: 'Data locations and permissions unknown', s: 0 },
    ],
  },
  {
    domain: 'Data Protection',
    text: 'How are backups handled, isolated, and tested for recovery?',
    options: [
      { k: 'Automated, immutable/offline copies with regular restore drills', d: 'RPO/RTO validated quarterly', s: 100 },
      { k: 'Automated cloud/on-premise backups, restores rarely tested', d: 'Backups run but recovery drills unproven', s: 60 },
      { k: 'Manual or partial backups', d: 'Inconsistent coverage across workloads', s: 25 },
      { k: 'No reliable backup strategy', d: 'High risk of irreversible data loss', s: 0 },
    ],
  },
  {
    domain: 'Detection & Response',
    text: 'Who actively watches your security alerts, telemetry, and network logs?',
    options: [
      { k: 'A 24/7 Managed SOC / SIEM with continuous correlation', d: 'Real-time threat hunting and automated response', s: 100 },
      { k: 'Internal IT during business hours only', d: 'No night or weekend threat triage', s: 60 },
      { k: 'Only when something looks suspicious or crashes', d: 'Reactive post-incident investigation', s: 25 },
      { k: 'Nobody is reviewing security logs', d: 'Zero visibility into threat lateral movement', s: 0 },
    ],
  },
  {
    domain: 'Detection & Response',
    text: 'Do you have a tested and rehearsed Cyber Incident Response Plan (CIRP)?',
    options: [
      { k: 'Documented, with named roles and tabletop drills yearly', d: 'Tested with executive & technical stakeholders', s: 100 },
      { k: 'Documented runbook, but never rehearsed', d: 'Static PDF on file', s: 55 },
      { k: 'An informal understanding only', d: 'No structured escalation hierarchy', s: 25 },
      { k: 'No incident response plan', d: 'Unprepared for active breaches', s: 0 },
    ],
  },
  {
    domain: 'Governance & Compliance',
    text: 'Which best describes your organization’s dedicated cybersecurity leadership?',
    options: [
      { k: 'A CISO / vCISO with a quantified risk roadmap and budget', d: 'Direct board-level risk reporting', s: 100 },
      { k: 'Shared responsibility distributed within the IT team', d: 'Generalist IT managing security tasks', s: 55 },
      { k: 'One person handles it alongside other primary IT duties', d: 'Security is a secondary priority', s: 30 },
      { k: 'Nobody owns security formally', d: 'Ad-hoc governance', s: 0 },
    ],
  },
  {
    domain: 'Governance & Compliance',
    text: 'How are regulatory cybersecurity mandates (DPDPA, SEBI CSCRF, RBI, SOC 2, ISO 27001) handled?',
    options: [
      { k: 'Mapped to controls with automated evidence collection', d: 'Continuous compliance posture tracking', s: 100 },
      { k: 'A gap assessment has been conducted, remediation in progress', d: 'Roadmap defined for key regulations', s: 60 },
      { k: 'We know they apply, but formal implementation has not started', d: 'Pending compliance initiatives', s: 25 },
      { k: 'We are unsure which compliance frameworks apply to us', d: 'High regulatory exposure risk', s: 0 },
    ],
  },
  {
    domain: 'Third-Party & Awareness',
    text: 'How do you assess and govern the security of vendors and partners with access to your data?',
    options: [
      { k: 'Formal vendor risk assessments and contractual security SLAs', d: 'Continuous third-party posture audits', s: 100 },
      { k: 'A basic security questionnaire for major vendors only', d: 'Limited to Tier-1 suppliers', s: 55 },
      { k: 'Only when a client or auditor explicitly mandates it', d: 'Ad-hoc vendor reviews', s: 25 },
      { k: 'We do not formally assess third-party vendors', d: 'Unchecked supply chain risk', s: 0 },
    ],
  },
  {
    domain: 'Third-Party & Awareness',
    text: 'How frequently do employees receive security awareness training and simulated phishing drills?',
    options: [
      { k: 'Regular automated simulations with remedial coaching', d: 'Continuous training across all staff', s: 100 },
      { k: 'Annual compliance awareness presentations', d: 'Once a year classroom session', s: 55 },
      { k: 'Only during new employee onboarding', d: 'One-time briefing', s: 25 },
      { k: 'Never', d: 'High vulnerability to social engineering', s: 0 },
    ],
  },
]

/* ─── Domain Specific Advisory & KloudStack Solutions ─── */
const ADVICE = {
  'Identity & Access': {
    title: 'Identity & Access Controls',
    text: 'Stolen or over-privileged credentials remain the primary vector for enterprise incursions. Enforcing mandatory MFA across all workloads, establishing strict de-provisioning runbooks, and conducting periodic access audits eliminates lateral movement vulnerabilities.',
    offer: 'Recommended: KloudStack Zero Trust Access + vCISO Governance',
  },
  'Endpoint & Infrastructure': {
    title: 'Endpoint & Infrastructure Hardening',
    text: 'Unmonitored endpoints and unpatched vulnerabilities give attackers critical dwell time. Deploying continuous EDR with managed detection and automated patch cycles severely restricts threat propagation.',
    offer: 'Recommended: KloudStack Pulse EDR + Vulnerability Management',
  },
  'Data Protection': {
    title: 'Data Protection & Disaster Resilience',
    text: 'Unmapped sensitive assets and untested backups lead to catastrophic operational failure during ransomware events. Structured data discovery, encryption at rest, and verified immutable recovery pipelines ensure business continuity.',
    offer: 'Recommended: KloudStack DPDP Readiness + Cloud DR Blueprint',
  },
  'Detection & Response': {
    title: 'Continuous Detection & Incident Response',
    text: 'Most breaches go undetected for months without 24/7 log correlation and threat hunting. A managed SOC and rehearsed incident response plan turn critical threats into contained non-events.',
    offer: 'Recommended: KloudStack Managed SOC + Pulse SIEM Platform',
  },
  'Governance & Compliance': {
    title: 'Cyber Governance & Regulatory Alignment',
    text: 'Without dedicated security leadership and framework mapping (DPDPA, SEBI CSCRF, ISO 27001), cyber spend drifts and audits become emergency fire drills. Quantifying cyber risk in financial terms aligns security with executive strategy.',
    offer: 'Recommended: KloudStack Fortress Platform + vCISO Advisory',
  },
  'Third-Party & Awareness': {
    title: 'Third-Party Risk & Human Firewall',
    text: 'External vendor access and employee phishing susceptibility constitute the majority of real-world entry points. Implementing automated supplier assessments and recurring phishing drills fortifies human and partner resilience.',
    offer: 'Recommended: KloudStack Vendor Risk Management + Phishing Drills',
  },
}

/* ─── Posture Bands ─── */
const BANDS = [
  { min: 80, name: 'Strong Security Posture', color: '#22c55e', text: 'Your responses indicate mature controls across key areas. The priority now is continuous validation—through red teaming, automated evidence collection, and board-level risk quantification.' },
  { min: 60, name: 'Moderate Exposure', color: '#84cc16', text: 'A solid baseline with addressable vulnerabilities. Targeted remediation in your lowest-scoring domains will meaningfully reduce enterprise risk without massive operational friction.' },
  { min: 40, name: 'Elevated Cyber Risk', color: '#eab308', text: 'Multiple critical controls are missing or unmonitored. An adversary or ransomware payload would likely find viable ingress routes, and compliance audits will flag key deficiencies.' },
  { min: 0,  name: 'Critical Exposure', color: '#ef4444', text: 'Fundamental defenses are absent or misconfigured. Immediate prioritization of identity hygiene, endpoint visibility, automated backups, and 24/7 monitoring is strongly advised.' },
]

const CyberRiskAssessment = () => {
  const [viewState, setViewState] = useState('intro') // 'intro' | 'quiz' | 'results'
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState(new Array(QUESTIONS.length).fill(null))
  const [leadSent, setLeadSent] = useState(false)
  const [leadLoading, setLeadLoading] = useState(false)
  const [formErr, setFormErr] = useState('')

  // Form Fields
  const [fullName, setFullName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [orgSize, setOrgSize] = useState('')
  const [consent, setConsent] = useState(false)

  // Animated Score Counter
  const [displayScore, setDisplayScore] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [viewState])

  const handleStart = () => {
    setViewState('quiz')
    setCurrentIdx(0)
  }

  const handleSelectOption = (optionIdx) => {
    const updated = [...answers]
    updated[currentIdx] = optionIdx
    setAnswers(updated)

    // Auto-advance to next question after small delay
    if (currentIdx < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentIdx((prev) => prev + 1)
      }, 200)
    }
  }

  const handleNext = () => {
    if (answers[currentIdx] === null) return
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1)
    } else {
      calculateAndShowResults()
    }
  }

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1)
    }
  }

  // Calculate scores
  const calculateScores = () => {
    const byDomain = {}
    QUESTIONS.forEach((q, i) => {
      const score = answers[i] === null ? 0 : q.options[answers[i]].s
      if (!byDomain[q.domain]) byDomain[q.domain] = []
      byDomain[q.domain].push(score)
    })

    const domains = Object.keys(byDomain).map((domain) => {
      const scoresArr = byDomain[domain]
      const avg = Math.round(scoresArr.reduce((a, b) => a + b, 0) / scoresArr.length)
      return { name: domain, score: avg }
    })

    const overall = Math.round(domains.reduce((a, d) => a + d.score, 0) / domains.length)
    return { overall, domains }
  }

  const calculateAndShowResults = () => {
    const { overall } = calculateScores()
    setViewState('results')

    // Animated score count-up
    setDisplayScore(0)
    let current = 0
    const step = Math.max(1, Math.round(overall / 30))
    const timer = setInterval(() => {
      current = Math.min(overall, current + step)
      setDisplayScore(current)
      if (current >= overall) clearInterval(timer)
    }, 25)
  }

  const handleRestart = () => {
    setAnswers(new Array(QUESTIONS.length).fill(null))
    setCurrentIdx(0)
    setLeadSent(false)
    setFormErr('')
    setViewState('intro')
  }

  const handleLeadSubmit = async (e) => {
    e.preventDefault()
    setFormErr('')

    if (!fullName.trim() || !workEmail.trim() || !company.trim()) {
      setFormErr('Please provide your name, work email, and company.')
      return
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(workEmail)) {
      setFormErr('Please enter a valid work email address.')
      return
    }

    if (!consent) {
      setFormErr('Please confirm your consent to receive the assessment report.')
      return
    }

    setLeadLoading(true)

    const { overall, domains } = calculateScores()
    const payload = {
      name: fullName,
      email: workEmail,
      company,
      phone,
      orgSize,
      overallScore: overall,
      domainScores: domains,
      answers: QUESTIONS.map((q, i) => ({
        question: q.text,
        domain: q.domain,
        selectedAnswer: answers[i] !== null ? q.options[answers[i]].k : 'Unanswered',
        score: answers[i] !== null ? q.options[answers[i]].s : 0,
      })),
      timestamp: new Date().toISOString(),
    }

    // Mock API dispatch or logging
    console.log('KloudStack Cyber Risk Assessment Payload:', payload)

    setTimeout(() => {
      setLeadLoading(false)
      setLeadSent(true)
    }, 800)
  }

  const { overall, domains } = calculateScores()
  const currentBand = BANDS.find((b) => overall >= b.min) || BANDS[BANDS.length - 1]
  const weakestDomains = [...domains].sort((a, b) => a.score - b.score).slice(0, 3)

  const currentQ = QUESTIONS[currentIdx]
  const progressPercent = ((currentIdx) / QUESTIONS.length) * 100

  return (
    <div className="cra-wrapper">
      <div className="cra-bg-grid" />
      <div className="cra-ambient-orb cra-ambient-orb--top" />
      <div className="cra-ambient-orb cra-ambient-orb--bottom" />

      <div className="container cra-container">
        <Link to="/" className="cra-back-link">
          <FaArrowLeft size={12} />
          Back to Home
        </Link>

        {/* ═══════════════ INTRO VIEW ═══════════════ */}
        {viewState === 'intro' && (
          <motion.div 
            className="cra-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="cra-eyebrow">
              <FaDotCircle size={10} className="text-warning" />
              KloudStack Security Snapshot
            </div>
            <h1 className="cra-title">
              How Exposed is Your Enterprise Posture Right Now?
            </h1>
            <p className="cra-desc">
              Answer 12 rapid diagnostic questions about how your organization handles identity, endpoints, cloud workloads, governance, and detection. You’ll receive an instant, multi-domain risk rating and a prioritized remediation roadmap.
            </p>

            <div className="cra-meta-grid">
              <div className="cra-meta-pill">
                <span className="cra-meta-val">12</span>
                <span className="cra-meta-lbl">Targeted Questions</span>
              </div>
              <div className="cra-meta-pill">
                <span className="cra-meta-val">~3 Min</span>
                <span className="cra-meta-lbl">Quick Assessment</span>
              </div>
              <div className="cra-meta-pill">
                <span className="cra-meta-val">6 Areas</span>
                <span className="cra-meta-lbl">Risk Domains</span>
              </div>
              <div className="cra-meta-pill">
                <span className="cra-meta-val">Instant</span>
                <span className="cra-meta-lbl">Score &amp; Insights</span>
              </div>
            </div>

            <button className="cra-btn" onClick={handleStart}>
              Start the Risk Assessment
              <FaArrowRight size={14} />
            </button>

            <p className="cra-note">
              * This assessment provides an executive-level posture snapshot based on self-reported operational practices and does not replace a technical VAPT or regulatory compliance audit.
            </p>
          </motion.div>
        )}

        {/* ═══════════════ QUIZ VIEW ═══════════════ */}
        {viewState === 'quiz' && (
          <motion.div 
            className="cra-card"
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="cra-progress-wrap">
              <div className="cra-count">
                <span>Question {currentIdx + 1} of {QUESTIONS.length}</span>
                <span>{Math.round(((currentIdx + 1) / QUESTIONS.length) * 100)}% Complete</span>
              </div>
              <div className="cra-progress-bar">
                <div 
                  className="cra-progress-fill" 
                  style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="cra-qdomain">
              <FaShieldAlt size={12} />
              {currentQ.domain}
            </div>

            <h2 className="cra-qtext">{currentQ.text}</h2>

            <div className="cra-options-list">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = answers[currentIdx] === oIdx
                return (
                  <button
                    key={oIdx}
                    className={`cra-opt ${isSelected ? 'sel' : ''}`}
                    onClick={() => handleSelectOption(oIdx)}
                  >
                    <div className="cra-opt-k">
                      <div className="cra-opt-radio">
                        {isSelected && <div className="cra-opt-radio-inner" />}
                      </div>
                      <span>{opt.k}</span>
                    </div>
                    {opt.d && <span className="cra-opt-d">{opt.d}</span>}
                  </button>
                )
              })}
            </div>

            <div className="cra-nav-row">
              <button 
                className="cra-btn cra-btn--ghost" 
                onClick={handleBack}
                disabled={currentIdx === 0}
                style={{ visibility: currentIdx === 0 ? 'hidden' : 'visible' }}
              >
                <FaArrowLeft size={12} />
                Previous
              </button>

              <button 
                className="cra-btn"
                onClick={handleNext}
                disabled={answers[currentIdx] === null}
              >
                {currentIdx === QUESTIONS.length - 1 ? 'View Risk Snapshot' : 'Next Question'}
                <FaArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        )}

        {/* ═══════════════ RESULTS VIEW ═══════════════ */}
        {viewState === 'results' && (
          <motion.div 
            className="cra-card"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="cra-results-header">
              <div className="cra-eyebrow">
                <MdVerified size={14} />
                Your Cyber Risk Snapshot
              </div>
              <h1 className="cra-title" style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
                Executive Posture Evaluation
              </h1>
            </div>

            {/* Score & Dial */}
            <div className="cra-score-card">
              <div 
                className="cra-dial" 
                style={{ 
                  background: `radial-gradient(circle, ${currentBand.color}22 0%, ${currentBand.color}11 70%)`,
                  border: `2px solid ${currentBand.color}`
                }}
              >
                <span className="cra-dial-val" style={{ color: currentBand.color }}>
                  {displayScore}
                </span>
                <span className="cra-dial-sub">Score / 100</span>
              </div>

              <div className="cra-band-info">
                <div className="cra-band-name" style={{ color: currentBand.color }}>
                  {currentBand.name}
                </div>
                <p className="cra-band-text">{currentBand.text}</p>
              </div>
            </div>

            <div className="cra-divider" />

            {/* Domain-by-Domain Progress */}
            <div>
              <h2 className="cra-section-title">Where You Stand Across 6 Risk Domains</h2>
              <div className="cra-domains-list">
                {domains.map((d, i) => {
                  const bandColor = BANDS.find((b) => d.score >= b.min)?.color || '#ef4444'
                  return (
                    <div key={i} className="cra-dbar">
                      <div className="cra-dbar-header">
                        <span className="cra-dbar-title">{d.name}</span>
                        <span className="cra-dbar-score" style={{ color: bandColor }}>
                          {d.score} / 100
                        </span>
                      </div>
                      <div className="cra-track">
                        <div 
                          className="cra-track-fill" 
                          style={{ 
                            width: `${d.score}%`, 
                            backgroundColor: bandColor 
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="cra-divider" />

            {/* Fix These First (Top 3 Weakest Gaps) */}
            <div>
              <h2 className="cra-section-title">Priority Remediation Areas (Fix These First)</h2>
              <p className="cra-desc" style={{ marginBottom: '16px', fontSize: '0.95rem' }}>
                Based on your answers, these three domains represent your highest potential exposure vectors.
              </p>

              <div className="cra-gaps-list">
                {weakestDomains.map((d, i) => {
                  const advice = ADVICE[d.name] || {
                    title: d.name,
                    text: 'Enhance controls and governance across this security domain.',
                    offer: 'Recommended: KloudStack Advisory',
                  }
                  const bandColor = BANDS.find((b) => d.score >= b.min)?.color || '#ef4444'

                  return (
                    <div key={i} className="cra-gap-card">
                      <div className="cra-gap-header">
                        <h3 className="cra-gap-title">{advice.title}</h3>
                        <span className="cra-gap-score-badge" style={{ color: bandColor }}>
                          {d.score} / 100
                        </span>
                      </div>
                      <p className="cra-gap-desc">{advice.text}</p>
                      <span className="cra-gap-tag">
                        <FaCheck size={10} />
                        {advice.offer}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="cra-divider" />

            {/* Lead Capture or Success Message */}
            {!leadSent ? (
              <div>
                <h2 className="cra-section-title">Receive Your Detailed Breakdown</h2>
                <p className="cra-desc" style={{ marginBottom: '18px', fontSize: '0.95rem' }}>
                  We’ll send a comprehensive PDF report of your results along with tailored engineering recommendations from KloudStack's cyber practice.
                </p>

                <form onSubmit={handleLeadSubmit} className="cra-form">
                  <div>
                    <label className="cra-label">Full Name *</label>
                    <input 
                      className="cra-input" 
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="cra-label">Work Email *</label>
                    <input 
                      type="email"
                      className="cra-input" 
                      placeholder="e.g. rahul@company.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="cra-label">Company Name *</label>
                    <input 
                      className="cra-input" 
                      placeholder="e.g. Acme Corp"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="cra-label">Phone Number (Optional)</label>
                    <input 
                      className="cra-input" 
                      placeholder="+91"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="cra-form-full">
                    <label className="cra-label">Organization Size</label>
                    <select 
                      className="cra-select"
                      value={orgSize}
                      onChange={(e) => setOrgSize(e.target.value)}
                    >
                      <option value="">Select size...</option>
                      <option value="1-50">1–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-1000">201–1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>

                  <div className="cra-form-full cra-consent">
                    <input 
                      type="checkbox" 
                      id="cra-consent-check"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <label htmlFor="cra-consent-check">
                      I agree to be contacted by KloudStack regarding my security assessment and consent to my details being processed as described in the Privacy Policy.
                    </label>
                  </div>

                  {formErr && <div className="cra-form-full cra-err">{formErr}</div>}

                  <div className="cra-form-full" style={{ marginTop: '10px' }}>
                    <button 
                      type="submit" 
                      className="cra-btn"
                      disabled={leadLoading}
                    >
                      {leadLoading ? 'Generating Report...' : 'Send Me the Detailed Snapshot'}
                      <FaArrowRight size={13} />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="cra-ok">
                <FaCheckCircle size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Thank you, {fullName}!</strong> Your detailed security snapshot report has been generated. A KloudStack cyber resilience lead will share the complete architectural breakdown with your team.
                </div>
              </div>
            )}

            <div className="cra-divider" />

            {/* Footer Navigation Actions */}
            <div className="cra-footer-actions">
              <button className="cra-btn cra-btn--ghost" onClick={handleRestart}>
                <FaRedo size={12} />
                Retake Assessment
              </button>

              <Link to="/contact" className="cra-btn cra-btn--dark">
                <FaCalendarAlt size={13} />
                Book a 30-Minute Security Review
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default CyberRiskAssessment
