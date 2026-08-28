import React from 'react';
import { motion } from 'framer-motion';
import './BcpTechMatrix.css';

const PARTNERS = [
  {
    id: 'commvault',
    name: 'Commvault',
    tagline: 'Advanced Intelligent Data Protection',
    description:
      'To secure vast digital estates and multi-cloud configurations, KloudStack orchestrates Commvault\'s premier data protection and active defense platforms for unified, AI-augmented resilience.',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    capabilities: [
      {
        title: 'Unified Multi-Cloud Data Management',
        desc: 'Consolidating distributed datasets — across AWS, Azure, on-premise arrays, and SaaS environments — under a single, centrally governed backup protocol.',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        ),
      },
      {
        title: 'AI-Powered Threat Early Detection',
        desc: 'Leveraging Commvault\'s early-warning behavioral heuristics to identify zero-day ransomware activity and unauthorized encryption patterns at the data layer before they propagate.',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
      },
      {
        title: 'High-Velocity Mass Restoration',
        desc: 'Utilizing intelligent stream allocation to accelerate mass data restorations, shrinking RTOs and minimizing the commercial footprint of systemic outages.',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'perpetuuiti',
    name: 'Perpetuuiti',
    tagline: 'Enterprise Resiliency & Continuity Orchestration',
    description:
      'For complex, multi-tiered business infrastructures, KloudStack deploys Perpetuuiti\'s leading continuity software suites to drive fully automated recovery workflows with board-level visibility.',
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    capabilities: [
      {
        title: 'End-to-End Workflow Automation',
        desc: 'Replacing manual, error-prone recovery scripts with Perpetuuiti\'s declarative automation blueprints, orchestrating one-click application stack recovery during complex failovers.',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        title: 'Real-Time Resiliency Telemetry',
        desc: 'Integrating continuous dependency analytics and business impact analysis (BIA) monitors to deliver high-fidelity visibility into current risk metrics and availability positions.',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
      {
        title: 'Compliance Automation & Audit Logs',
        desc: 'Programmatically recording every DR simulation, failover sequence, and data replication health vector, producing rigorous, tamper-proof logs optimized to pass regulatory scrutiny.',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const BcpTechMatrix = () => {
  return (
    <section className="btm-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="btm-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="section-heading text-center">Technology Orchestration Matrix</h2>
          <p className="cap-description text-start">
            KloudStack enhances its vendor-agnostic alliance philosophy by deeply integrating elite business continuity tools — Commvault and Perpetuuiti — to engineer cohesive, high-performance resilience platforms.
          </p>
        </motion.div>

        {/* Dual Partner Panels */}
        <div className="btm-dual-grid">
          {PARTNERS.map((partner, pIdx) => (
            <motion.div
              key={partner.id}
              className="btm-partner-panel"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              transition={{ delay: pIdx * 0.15 }}
            >
              <div className="btm-panel-top-bar" />

              {/* Partner Header */}
              <div className="btm-partner-header">
                <div className="btm-partner-logo">{partner.logo}</div>
                <div className="btm-partner-info">
                  <span className="btm-partner-tagline">{partner.tagline}</span>
                  <h3 className="btm-partner-name">{partner.name}</h3>
                </div>
              </div>

              {/* Partner Overview */}
              <p className="btm-partner-desc">{partner.description}</p>

              {/* Divider */}
              <div className="btm-divider" />

              {/* Capability Items */}
              <div className="btm-capabilities">
                {partner.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="btm-cap-item">
                    <div className="btm-cap-icon">{cap.icon}</div>
                    <div className="btm-cap-content">
                      <h4 className="btm-cap-title">{cap.title}</h4>
                      <p className="btm-cap-desc">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BcpTechMatrix;
