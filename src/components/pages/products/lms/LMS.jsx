import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDotCircle, FaPlay, FaCheck, FaTimes, FaCheckCircle } from 'react-icons/fa';
import { 
  LuGraduationCap, 
  LuBrainCircuit, 
  LuShieldCheck, 
  LuClipboardCheck, 
  LuZap, 
  LuFolderGit2, 
  LuTrophy, 
  LuVideo, 
  LuChartBar, 
  LuNetwork,
  LuServer,
  LuLock,
  LuLayers,
  LuSparkles,
  LuArrowRight
} from 'react-icons/lu';
import './LMS.css';

/* ── 2. Performance Metrics Data ── */
const METRICS = [
  { value: '99.9%', label: 'Uptime SLA', sublabel: 'Enterprise-grade cloud availability' },
  { value: '40%', label: 'Cost Savings', sublabel: 'Reduced training & travel overheads' },
  { value: '70%', label: 'Faster Deploy', sublabel: 'Rapid modular cloud setup' },
  { value: 'AWS', label: 'Qualified Software', sublabel: 'Validated security & architecture' },
];

/* ── 4. Platform Capabilities Data ── */
const CAPABILITIES = [
  {
    icon: <LuBrainCircuit size={26} />,
    title: 'AI-Powered Learning Paths',
    desc: 'Leverage AI-driven recommendations to customize journeys based on performance, skill gaps, and progress.',
    tag: 'Adaptive AI',
  },
  {
    icon: <LuShieldCheck size={26} />,
    title: 'Role-Based Access Control',
    desc: 'Securely manage permissions for employees, managers, trainers, vendors, and partners through flexible RBAC.',
    tag: 'Zero-Trust Security',
  },
  {
    icon: <LuClipboardCheck size={26} />,
    title: 'Assessments & Evaluations',
    desc: 'Quizzes, assignments, certifications, and scenario-based evaluations with automated tracking and reporting.',
    tag: 'Automated Scoring',
  },
  {
    icon: <LuZap size={26} />,
    title: 'Micro & Nano Learning',
    desc: 'Short-form modules that dramatically improve knowledge retention and engagement across the workforce.',
    tag: 'High Retention',
  },
  {
    icon: <LuFolderGit2 size={26} />,
    title: 'MindSphere Document Repository',
    desc: 'Securely store, manage, and distribute SOPs, manuals, white papers, and organizational knowledge.',
    tag: 'Knowledge Base',
  },
  {
    icon: <LuTrophy size={26} />,
    title: 'Rewards & Gamification',
    desc: 'Drive engagement through badges, points, leaderboards, achievements, and personalized recognition.',
    tag: 'Behavioral Engagement',
  },
  {
    icon: <LuVideo size={26} />,
    title: 'Classroom & Virtual Training',
    desc: 'Plan, schedule, and manage classroom sessions, webinars, and live learning events efficiently.',
    tag: 'Hybrid Delivery',
  },
  {
    icon: <LuChartBar size={26} />,
    title: 'Surveys & Feedback Analytics',
    desc: 'Conduct engagement surveys, assessments, and evaluation programs with detailed real-time analytics.',
    tag: 'Predictive Insights',
  },
  {
    icon: <LuNetwork size={26} />,
    title: 'HRMS & API Integrations',
    desc: 'Seamlessly connect with HRMS platforms, third-party tools, and MOOC providers via open APIs.',
    tag: 'Open Ecosystem',
  },
  {
    icon: <LuNetwork size={26} />,
    title: 'Multilingual Support',
    desc: 'Deliver learning experiences across multiple languages with localized content and user interfaces.',
    tag: 'Language Learning',
  },
];

/* ── 6. Business Challenges Solved ── */
const CHALLENGES = [
  {
    num: '01',
    title: 'High Training Costs',
    challenge: 'Traditional training methods often involve travel expenses, venue arrangements, printed materials, and operational overheads that increase costs significantly.',
    solutions: [
      'Centralized content management',
      'Digital training delivery',
      'Reduced travel & logistics expenses',
      'Easy administration and tracking',
    ],
  },
  {
    num: '02',
    title: 'Inconsistent Training Delivery',
    challenge: 'Organizations operating across multiple locations often struggle to maintain training quality and standardization across teams.',
    solutions: [
      'Standardized training modules',
      'Uniform learning experience across branches',
      'Centralized learning content',
      'Controlled access and compliance tracking',
    ],
  },
  {
    num: '03',
    title: 'Scalability Limitations',
    challenge: 'Growing organizations require flexible systems that can expand without major infrastructure investments or downtime.',
    solutions: [
      'Cloud-based modular architecture',
      'Plug-and-play deployment',
      'Easy integration with existing systems',
      'High scalability for enterprise growth',
    ],
  },
  {
    num: '04',
    title: 'Partner & Vendor Training',
    challenge: 'Managing external stakeholders such as distributors, vendors, and channel partners requires secure, structured access control.',
    solutions: [
      'Role-Based Access Control (RBAC)',
      'Dedicated partner learning spaces',
      'Controlled content distribution',
      'Collaborative learning environment',
    ],
  },
];

/* ── 7. Why Choose GoldCrest.AI ── */
const WHY_CHOOSE = [
  {
    id: 'cloud',
    num: '01',
    icon: <LuServer size={28} />,
    title: 'Modern Cloud Infrastructure',
    desc: 'Built on secure AWS and Microsoft cloud, ensuring enterprise-grade reliability, 99.9% uptime, and infinite scalability.',
    metric: '99.9% Uptime SLA',
    tags: ['Enterprise-grade', 'Always-on', 'Globally available'],
  },
  {
    id: 'ai',
    num: '02',
    icon: <LuSparkles size={28} />,
    title: 'AI-Driven Learning',
    desc: 'Intelligent recommendations, automated content generation, and personalized learning paths powered by advanced AI.',
    metric: '3× Faster Onboarding',
    tags: ['Enterprise-grade', 'Always-on', 'Globally available'],
  },
  {
    id: 'security',
    num: '03',
    icon: <LuLock size={28} />,
    title: 'Enterprise Security',
    desc: 'Role-based access, AES-256 data encryption, and compliance-ready architecture for complete peace of mind.',
    metric: '100% Data Encrypted',
    tags: ['Enterprise-grade', 'Always-on', 'Globally available'],
  },
  {
    id: 'scalability',
    num: '04',
    icon: <LuLayers size={28} />,
    title: 'Scalable Architecture',
    desc: 'Modular design that grows with your organization — from small teams to global enterprises without re-implementation.',
    metric: '50+ Deployments',
    tags: ['Enterprise-grade', 'Always-on', 'Globally available'],
  },
];

const LMS = () => {
  const [activeWeek, setActiveWeek] = useState('W4');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="lms-page-wrapper">
      {/* ══════════════════════════════════════════
          1. HERO SECTION
          ══════════════════════════════════════════ */}
      <section className="hero-section d-flex flex-column justify-content-center lms-hero-container">
        <video
          className="hero-section-video-bg"
          src="/videos/cloud-bg-2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="container content-overlay">
          <div className="hero-text lms-hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="service-badge mb-3">
                <FaDotCircle className="me-2 mb-1" size={12} />
                AWS Qualified Software · Enterprise LMS
              </div>
            </motion.div>

            <motion.h1
              className="hero-section-heading mb-4 section-heading text-start"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Elevate Your Learning with <span className="lms-gold-gradient-text">LMS</span>
            </motion.h1>

            <motion.p
              className="hero-section-para text-start lms-hero-description"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              LMS delivers secure, flexible learning experiences backed by AWS certification — giving organizations of all sizes the power to train smarter, measure impact, and drive real results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="lms-hero-cta-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link to="/contact" className="lms-btn-primary">
                <span>Book a Demo</span>
                <LuArrowRight size={18} />
              </Link>
              <button 
                type="button" 
                className="lms-btn-secondary"
                onClick={() => setVideoModalOpen(true)}
              >
                <div className="lms-play-icon-circle">
                  <FaPlay size={10} style={{ marginLeft: '2px' }} />
                </div>
                <span>Watch Platform Tour</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. KEY PERFORMANCE METRICS STRIP
          ══════════════════════════════════════════ */}
      <section className="lms-metrics-section">
        <div className="container">
          <motion.div 
            className="lms-metrics-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {METRICS.map((item, idx) => (
              <div key={idx} className="lms-metric-card">
                <div className="lms-metric-value">{item.value}</div>
                <div className="lms-metric-label">{item.label}</div>
                <div className="lms-metric-sublabel">{item.sublabel}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. DASHBOARD / PRODUCT PREVIEW (LIVE UI MOCKUP)
          ══════════════════════════════════════════ */}
      <section className="lms-preview-section">
        <div className="container">
          <div className="text-start mb-5">
            <div className="lms-section-eyebrow">
              <LuSparkles className="me-2" size={14} />
              INTERACTIVE EXPERIENCE
            </div>
            <h2 className="section-heading lms-center-heading text-start">
              Intelligent Management at Your Fingertips
            </h2>
            <p className="lms-section-subtext text-start">
              Real-time analytics, automated skill mapping, and instant compliance oversight in one command center.
            </p>
          </div>

          <motion.div
            className="lms-dashboard-window"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Window Browser Top Bar */}
            <div className="lms-dash-topbar">
              <div className="lms-window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="lms-dash-url-bar">
                <span className="lms-lock-icon"><LuLock size={12} /></span>
                {/* <span className="lms-url-text">https://goldcrest.ai/dashboard</span> */}
                <span className="lms-live-badge">
                  <span className="lms-live-pulse" /> Live
                </span>
              </div>
              <div className="lms-dash-badges">
                <span className="lms-trust-pill">AWS Qualified</span>
                <span className="lms-trust-pill">SOC 2 Ready</span>
              </div>
            </div>

            {/* Dashboard Inner Body */}
            <div className="lms-dash-body">
              {/* Header inside Dashboard */}
              <div className="lms-dash-header">
                <div>
                  <h3 className="lms-dash-title">LMS Dashboard</h3>
                  <div className="lms-dash-greeting">Hello, Admin 👋</div>
                </div>
                <div className="lms-dash-header-actions">
                  <span className="lms-time-filter">Last 30 Days</span>
                  <div className="lms-admin-avatar">AD</div>
                </div>
              </div>

              {/* 4 Stat KPI Cards */}
              <div className="lms-dash-kpi-grid">
                <div className="lms-kpi-card">
                  <div className="lms-kpi-header">
                    <span className="lms-kpi-title">Completion Rate</span>
                    <span className="lms-kpi-trend positive">+4.2%</span>
                  </div>
                  <div className="lms-kpi-number">87%</div>
                  <div className="lms-progress-bar-bg">
                    <div className="lms-progress-bar-fill" style={{ width: '87%' }} />
                  </div>
                </div>

                <div className="lms-kpi-card">
                  <div className="lms-kpi-header">
                    <span className="lms-kpi-title">Satisfaction</span>
                    <span className="lms-kpi-trend positive">+6.8%</span>
                  </div>
                  <div className="lms-kpi-number">92%</div>
                  <div className="lms-progress-bar-bg">
                    <div className="lms-progress-bar-fill" style={{ width: '92%' }} />
                  </div>
                </div>

                <div className="lms-kpi-card">
                  <div className="lms-kpi-header">
                    <span className="lms-kpi-title">Active Learners</span>
                    <span className="lms-kpi-trend positive">Real-time</span>
                  </div>
                  <div className="lms-kpi-number">245</div>
                  <div className="lms-progress-bar-bg">
                    <div className="lms-progress-bar-fill" style={{ width: '75%' }} />
                  </div>
                </div>

                <div className="lms-kpi-card">
                  <div className="lms-kpi-header">
                    <span className="lms-kpi-title">Knowledge Gain</span>
                    <span className="lms-kpi-trend positive">+12.4%</span>
                  </div>
                  <div className="lms-kpi-number">78%</div>
                  <div className="lms-progress-bar-bg">
                    <div className="lms-progress-bar-fill" style={{ width: '78%' }} />
                  </div>
                </div>
              </div>

              {/* Lower Section: Weekly Engagement + Recent Activity */}
              <div className="lms-dash-bottom-grid">
                {/* Engagement chart */}
                <div className="lms-dash-panel">
                  <div className="lms-panel-title-row">
                    <h4 className="lms-panel-title">Learner Engagement Trend</h4>
                    <span className="lms-panel-subtitle">Last 5 Weeks</span>
                  </div>
                  
                  <div className="lms-chart-bars">
                    {[
                      { week: 'W1', height: '48%', active: activeWeek === 'W1', value: '64%' },
                      { week: 'W2', height: '62%', active: activeWeek === 'W2', value: '72%' },
                      { week: 'W3', height: '78%', active: activeWeek === 'W3', value: '85%' },
                      { week: 'W4', height: '94%', active: activeWeek === 'W4', value: '96%' },
                      { week: 'W5', height: '88%', active: activeWeek === 'W5', value: '91%' },
                    ].map((bar) => (
                      <div 
                        key={bar.week} 
                        className={`lms-bar-col ${bar.active ? 'active' : ''}`}
                        onClick={() => setActiveWeek(bar.week)}
                      >
                        <span className="lms-bar-val">{bar.value}</span>
                        <div className="lms-bar-track">
                          <motion.div 
                            className="lms-bar-fill" 
                            style={{ height: bar.height }}
                            initial={{ height: 0 }}
                            whileInView={{ height: bar.height }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                        <span className="lms-bar-label">{bar.week}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity List */}
                <div className="lms-dash-panel">
                  <div className="lms-panel-title-row">
                    <h4 className="lms-panel-title">Live Activity Stream</h4>
                    <span className="lms-live-dot-pulse">● Live feed</span>
                  </div>

                  <div className="lms-activity-list">
                    <div className="lms-activity-item">
                      <div className="lms-activity-avatar">PS</div>
                      <div className="lms-activity-content">
                        <div className="lms-activity-text">
                          <strong>Priya S.</strong> Completed Module 4: Cloud Architecture
                        </div>
                        <div className="lms-activity-time">2m ago</div>
                      </div>
                    </div>

                    <div className="lms-activity-item">
                      <div className="lms-activity-avatar avatar-blue">RK</div>
                      <div className="lms-activity-content">
                        <div className="lms-activity-text">
                          <strong>Rahul K.</strong> Started AWS Fundamentals Certification
                        </div>
                        <div className="lms-activity-time">5m ago</div>
                      </div>
                    </div>

                    <div className="lms-activity-item">
                      <div className="lms-activity-avatar avatar-gold">AM</div>
                      <div className="lms-activity-content">
                        <div className="lms-activity-text">
                          <strong>Amit M.</strong> Scored 98% on Security Assessment
                        </div>
                        <div className="lms-activity-time">12m ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. PLATFORM CAPABILITIES (9 CARDS)
          ══════════════════════════════════════════ */}
      <section className="lms-capabilities-section">
        <div className="container">
          <div className="lms-capabilities-header text-start mb-5">
            <div className="lms-section-eyebrow">
              <LuGraduationCap className="me-2" size={15} />
              PLATFORM CAPABILITIES
            </div>
            <h2 className="section-heading lms-center-heading">
              Everything on One Intelligent Platform
            </h2>
            <p className="lms-section-subtext text-start">
              A unified suite built to transform how your organization learns, trains, and grows — from day one to enterprise scale.
            </p>
          </div>

          <div className="lms-capabilities-grid">
            {CAPABILITIES.map((cap, idx) => (
              <motion.div
                key={idx}
                className="lms-cap-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="lms-cap-top-bar" />
                <div className="lms-cap-icon-box">{cap.icon}</div>
                <span className="lms-cap-tag">{cap.tag}</span>
                <h3 className="lms-cap-title">{cap.title}</h3>
                {/* <p className="lms-cap-desc">{cap.desc}</p> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. BUSINESS IMPACT / CHALLENGES SOLVED
          ══════════════════════════════════════════ */}
      <section className="lms-challenges-section">
        <div className="container">
          <div className="text-start mb-5">
            <div className="lms-section-eyebrow">
              <LuShieldCheck className="me-2" size={15} />
              BUSINESS IMPACT & VALUE
            </div>
            <h2 className="section-heading lms-center-heading">
              Key Business Challenges We Solve
            </h2>
            <p className="lms-section-subtext text-start">
              Organizations face critical challenges in training and development that impact growth, efficiency, and competitive advantage — LMS solves them at enterprise scale.
            </p>
          </div>

          <div className="lms-challenges-grid">
            {CHALLENGES.map((ch, idx) => (
              <motion.div
                key={idx}
                className="lms-challenge-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="lms-challenge-num">{ch.num}</div>
                <h3 className="lms-challenge-title">{ch.title}</h3>
                
                {/* Challenge description */}
                <div className="lms-challenge-problem-box">
                  <div className="lms-challenge-badge-problem">
                    <FaTimes size={10} className="me-1" />
                    The Challenge
                  </div>
                  <p className="lms-problem-text">{ch.challenge}</p>
                </div>

                {/* Solution */}
                <div className="lms-challenge-solution-box">
                  <div className="lms-challenge-badge-solution">
                    <FaCheck size={10} className="me-1" />
                    LMS Solves This:
                  </div>
                  <ul className="lms-solution-list">
                    {ch.solutions.map((sol, sIdx) => (
                      <li key={sIdx}>
                        <FaCheckCircle className="lms-sol-bullet" size={14} />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. WHY CHOOSE GOLDCREST.AI
          ══════════════════════════════════════════ */}
      <section className="lms-why-section">
        <div className="container">
          <div className="text-start mb-5">
            <div className="lms-section-eyebrow">
              <LuSparkles className="me-2" size={15} />
              THE ENTERPRISE EDGE
            </div>
            <h2 className="section-heading lms-center-heading">
              Why Choose LMS?
            </h2>
            <p className="lms-section-subtext text-start">
              LMS combines modern cloud infrastructure, AI-driven learning, enterprise-grade security, and scalable architecture to transform learning into a strategic business advantage.
            </p>
          </div>

          <div className="lms-why-grid">
            {WHY_CHOOSE.map((item, idx) => (
              <motion.div
                key={item.id}
                className="lms-why-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="lms-why-top">
                  <span className="lms-why-num">{item.num}</span>
                  <div className="lms-why-icon-badge">{item.icon}</div>
                </div>

                <h3 className="lms-why-title">{item.title}</h3>
                <p className="lms-why-desc">{item.desc}</p>

                {/* Metric Highlight */}
                <div className="lms-why-metric-box">
                  <span className="lms-why-metric-label">Key Metric</span>
                  <span className="lms-why-metric-val">{item.metric}</span>
                </div>

                {/* Tags */}
                <div className="lms-why-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="lms-why-tag-pill">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CALL TO ACTION BANNER
          ══════════════════════════════════════════ */}
      <section className="lms-cta-banner-section">
        <div className="container">
          <motion.div 
            className="lms-cta-banner"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="lms-cta-glow" />
            <div className="lms-cta-content">
              <span className="lms-section-eyebrow mb-2">GET STARTED TODAY</span>
              <h2 className="lms-cta-heading">Ready to Transform Your Organization’s Learning?</h2>
              <p className="lms-cta-sub">
                Join forward-thinking enterprises leveraging LMS's AWS-backed intelligence to scale skills and drive measurable business impact.
              </p>
              <div className="lms-cta-buttons">
                <Link to="/contact" className="lms-btn-primary">
                  <span>Book a Personalized Demo</span>
                  <LuArrowRight size={18} />
                </Link>
                <Link to="/contact" className="lms-btn-secondary">
                  <span>Contact Sales</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div 
            className="lms-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div 
              className="lms-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lms-modal-close"
                onClick={() => setVideoModalOpen(false)}
              >
                <FaTimes size={18} />
              </button>
              <div className="lms-modal-video-wrapper">
                <video 
                  src="/videos/cloud-bg-2.mp4" 
                  controls 
                  autoPlay 
                  className="lms-modal-video"
                />
              </div>
              <div className="lms-modal-footer">
                <h4>LMS Platform Overview</h4>
                <p>Explore how our AWS Qualified software powers enterprise-grade training and analytics.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LMS;
