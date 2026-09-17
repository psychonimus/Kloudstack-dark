import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BcpOutcomes.css';

const OUTCOMES = [
  {
    id: 'boardroom',
    title: 'Boardroom Peace of Mind',
    metricTag: 'EXECUTIVE ASSURANCE',
    description:
      'Shifting disaster recovery from a speculative operational capability to a validated, auditable financial protection matrix — delivering the confidence that boards and insurers require.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'ransomware',
    title: 'Ransomware Immunity',
    metricTag: 'ZERO EXTORTION SURFACE',
    description:
      'Restricting corporate vulnerability to data extortion through immutable WORM storage blocks and air-gapped data extraction zones that no ransomware variant can penetrate or corrupt.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: 'continuity',
    title: 'Zero-Disruption Continuity',
    metricTag: '100% OPERATIONAL HEALTH',
    description:
      'Guaranteeing long-term operational health across regulated, multi-vendor hybrid landscapes without inducing technical debt or unexpected performance bottlenecks that compromise delivery velocity.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const BcpOutcomes = () => {
  const [activeId, setActiveId] = useState('boardroom');

  return (
    <section className="bco-section">
      <div className="container">
        <div className="bco-card-outer">
          {/* Header */}
          <motion.div
            className="bco-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-heading text-center">Measurable Enterprise Business Outcomes</h2>
            <p className="cap-description text-start">
              Quantifiable resilience value delivered at every layer of your enterprise architecture.
            </p>
          </motion.div>

          {/* Outcome Cards */}
          <motion.div
            className="bco-grid"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            {OUTCOMES.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  className={`bco-card ${isActive ? 'bco-card--active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  <div className="bco-card-top-bar" />
                  <div className="bco-card-header">
                    <div className="bco-icon-badge">{item.icon}</div>
                    <span className="bco-metric-tag">{item.metricTag}</span>
                  </div>
                  <h3 className="bco-card-title">{item.title}</h3>
                  {/* <p className="bco-card-desc">{item.description}</p> */}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BcpOutcomes;
