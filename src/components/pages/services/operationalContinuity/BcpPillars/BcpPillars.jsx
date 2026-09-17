import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BcpPillars.css';

const PILLARS = [
  {
    id: 'immutable',
    number: 'III',
    label: 'IMMUTABLE BACKUPS & AIR-GAP',
    title: 'Cyber-Resilient Immutable Backups & Air-Gapped Vaults',
    subtitle: 'Defending critical enterprise memory fields against destructive ransomware and insider manipulation.',
    items: [
      {
        title: 'Immutable Storage Architectures',
        desc: 'Establishing strict write-once-read-many (WORM) parameters on core enterprise backups, preventing malware or rogue actors from encrypting, altering, or erasing archive points.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ),
      },
      {
        title: 'Air-Gapped Data Vaulting',
        desc: 'Deploying logically or physically isolated air-gapped data vaults to ensure a clean, uncorrupted baseline of corporate databases can be securely extracted and restored under crisis conditions.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
          </svg>
        ),
      },
      {
        title: 'Rapid Clean-Room Recovery',
        desc: 'Integrating automated malware scanning routines into restoration tracks to verify backup integrity, ensuring threat anomalies are not reintroduced into production spaces during bare-metal recovery loops.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'failover',
    number: 'I',
    label: 'GLOBAL DISASTER RECOVERY',
    title: 'Global Disaster Recovery & Automated Failover Orchestration',
    subtitle: 'Transforming failover protocols into a software-defined, zero-friction operational switch.',
    items: [
      {
        title: 'Geographic Redundancy',
        desc: 'Designing and operating multi-region landing zones that support instantaneous workload and traffic redirection to isolated, secondary targets upon a primary site disruption.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
      {
        title: 'Application Availability Mapping',
        desc: 'Mapping system dependencies and multi-tier application architectures to enforce clear recovery order priorities, preserving data consistency across ERPs, financial ledgers, and edge workloads.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
          </svg>
        ),
      },
      {
        title: 'Continuous Synchronization',
        desc: 'Implementing low-latency replication pipelines that maintain tight target-to-source alignment, lowering standard Recovery Point Objectives (RPOs) to near-zero thresholds.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'validation',
    number: 'II',
    label: 'DR VALIDATION & SIMULATION',
    title: 'Automated DR Validation & Simulation',
    subtitle: 'Replacing assumptions with programmatic proof through continuous, non-disruptive validation.',
    items: [
      {
        title: 'Non-Disruptive Auditing',
        desc: 'Conducting programmatic, background disaster recovery drills and validation loops that completely eliminate regular testing overhead or production disruption.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
      },
      {
        title: 'RTO & RPO Tracking',
        desc: 'Delivering live, dashboard-driven metrics that audit real-world Recovery Time Objectives against established SLA targets, providing transparent compliance data for internal and external auditors.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
      {
        title: 'Continuous Strategy Tuning',
        desc: 'Automatically logging validation gaps, configuration drifts, or data delivery constraints to refine orchestrations dynamically before an actual disruption event occurs.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
          </svg>
        ),
      },
    ],
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const BcpPillars = () => {
  const [activeId, setActiveId] = useState('immutable');
  const activeData = PILLARS.find((p) => p.id === activeId);

  return (
    <section className="bcp-section">
      <div className="container pt-5">
        {/* Header */}
        <motion.div
          className="bcp-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="section-heading text-center">Core Strategic Pillars of KloudStack BCP</h2>
          <p className="cap-description text-start">
            Three distinct layers of protection engineered to render your enterprise footprint resilient against every class of operational disruption.
          </p>
        </motion.div>

        {/* Pillar Selector Tabs */}
        <div className="bcp-tab-bar">
          {PILLARS.map((p) => (
            <button
              key={p.id}
              className={`bcp-tab-btn ${activeId === p.id ? 'bcp-tab-btn--active' : ''}`}
              onClick={() => setActiveId(p.id)}
            >
              {/* <span className="bcp-tab-num">{p.number}</span> */}
              <span className="bcp-tab-label">{p.label}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bcp-panel"
          >
            {/* Panel Header */}
            <div className="bcp-panel-header">
              <div className="bcp-panel-label">{activeData.label}</div>
              <h3 className="bcp-panel-title section-heading">{activeData.title}</h3>
              <p className="bcp-panel-subtitle">{activeData.subtitle}</p>
            </div>

            {/* Cards */}
            <motion.div
              className="bcp-cards-grid"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {activeData.items.map((item, idx) => (
                <motion.div key={idx} className="bcp-card" variants={itemVariants}>
                  <div className="bcp-card-top-bar" />
                  <div className="bcp-icon-wrap">{item.icon}</div>
                  <h4 className="bcp-card-title">{item.title}</h4>
                  <p className="bcp-card-desc">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BcpPillars;
