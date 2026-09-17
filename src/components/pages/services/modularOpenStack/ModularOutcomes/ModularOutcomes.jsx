import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ModularOutcomes.css';

const OUTCOMES = [
  {
    id: 'velocity',
    title: 'Accelerated Time-to-Market',
    metricTag: 'SDLC ACCELERATION',
    description:
      'Drastic reductions in the software development lifecycle (SDLC) through optimized CI/CD, enabling rapid, automated feature releases with minimal human intervention.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'lock-in',
    title: 'Elimination of Proprietary Lock-In',
    metricTag: 'ZERO VENDOR LOCK-IN',
    description:
      'Shifting critical software infrastructure to open-source foundations, giving enterprises the freedom to deploy workloads across any hyperscaler or on-premise footprint without licensing constraints.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
      </svg>
    ),
  },
  {
    id: 'predictability',
    title: 'Total Environmental Predictability',
    metricTag: '100% PREDICTABLE PARITY',
    description:
      'Leveraging IaC and automated testing to achieve complete environmental consistency, dropping integration failures and boosting post-deployment reliability.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

const ModularOutcomes = () => {
  const [activeId, setActiveId] = useState('velocity');

  return (
    <section className="mdo-section">
      <div className="container">
        <div className="mdo-card-outer">
          {/* Header */}
          <motion.div
            className="mdo-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-heading text-center">Strategic Business Outcomes</h2>
            <p className="cap-description text-start">
              Measurable Enterprise Value Delivered: Callout benchmarks engineered to maximize software delivery agility, cost efficiency, and architectural freedom.
            </p>
          </motion.div>

          {/* Outcome Cards Grid */}
          <motion.div
            className="mdo-grid"
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
                  className={`mdo-card ${isActive ? 'mdo-card--active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  <div className="mdo-card-top-bar" />
                  <div className="mdo-card-header">
                    <div className="mdo-icon-badge">{item.icon}</div>
                    <span className="mdo-metric-tag">{item.metricTag}</span>
                  </div>
                  <h3 className="mdo-card-title">{item.title}</h3>
                  {/* <p className="mdo-card-desc">{item.description}</p> */}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModularOutcomes;
