import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CyberOutcomes.css';

const OUTCOMES = [
  {
    id: 'risk',
    title: 'Risk Eradication & Board Transparency',
    metricTag: 'FINANCIAL RISK LANGUAGE',
    description:
      'Shifting from reactive technical metrics to a financial cyber risk language that boards understand and insurers validate, transforming security from a cost center into a strategic asset.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    id: 'spend',
    title: 'Consolidated Security Spend',
    metricTag: 'OPEX OPTIMIZATION',
    description:
      'Unifying disparate security platforms, tools, and regulatory audits into a streamlined, automated OPEX model, eliminating vendor sprawl and reducing total cost of security ownership.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    id: 'velocity',
    title: 'Uninterrupted Velocity',
    metricTag: 'CONTINUOUS DELIVERY',
    description:
      'Driving continuous software and application delivery via integrated DevSecOps, virtual patching, and real-time automated alerting, security engineered as an accelerator, not a blocker.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
];

const CyberOutcomes = () => {
  const [activeId, setActiveId] = useState('risk');

  return (
    <section className="co-section">
      <div className="container">
        <div className="co-card-outer">
          {/* Header */}
          <motion.div
            className="co-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* <span className="co-eyebrow">The KloudStack Advantage</span> */}
            <h2 className="section-heading text-center">Measurable Enterprise Business Outcomes</h2>
            <p className="cap-description text-start">
              Quantifiable security value delivered at every layer of your enterprise architecture.
            </p>
          </motion.div>

          {/* Outcome Cards */}
          <motion.div
            className="co-grid"
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
                  className={`co-card ${isActive ? 'co-card--active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  {/* Top Accent Bar */}
                  <div className="co-card-top-bar" />

                  {/* Header Row */}
                  <div className="co-card-header">
                    <div className="co-icon-badge">{item.icon}</div>
                    <span className="co-metric-tag">{item.metricTag}</span>
                  </div>

                  {/* Content */}
                  <h3 className="co-card-title">{item.title}</h3>
                  <p className="co-card-desc">{item.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CyberOutcomes;
