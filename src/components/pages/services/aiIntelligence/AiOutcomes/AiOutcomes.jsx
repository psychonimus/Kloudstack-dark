import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AiOutcomes.css';

const OUTCOMES = [
  {
    id: 'productivity',
    title: 'Maximized Productivity & ROI',
    metricTag: 'WORKFORCE ELEVATION',
    description:
      'Elevating workforce output by automating repetitive tasks, allowing human capital to focus exclusively on high-value, strategic execution. AI-driven efficiency translates directly to measurable returns on technology investment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'clarity',
    title: 'Data-Driven Executive Clarity',
    metricTag: 'PREDICTIVE GOVERNANCE',
    description:
      'Replacing intuition with empirical, AI-generated insights, ensuring that every boardroom objective is backed by rigorous predictive analytics. Decision-making becomes faster, more accurate, and resilient to market volatility.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
  },
  {
    id: 'scalability',
    title: 'Future-Proof Scalability',
    metricTag: 'STRATEGIC ALIGNMENT',
    description:
      'Architecting technical solutions that are not only robust and operationally viable today but are strategically aligned to absorb the next generation of artificial intelligence advancements without architectural rework.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

const AiOutcomes = () => {
  const [activeId, setActiveId] = useState('productivity');

  return (
    <section className="aio-section">
      <div className="container">
        <div className="aio-card-outer">
          {/* Header */}
          <motion.div
            className="aio-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-heading text-center">Strategic Business Outcomes</h2>
            <p className="cap-description text-start">
              Measurable enterprise value delivered — translating deep technical AI integration into quantifiable commercial impact.
            </p>
          </motion.div>

          {/* Outcome Cards */}
          <motion.div
            className="aio-grid"
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
                  className={`aio-card ${isActive ? 'aio-card--active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  {/* Top Accent Bar */}
                  <div className="aio-card-top-bar" />

                  {/* Header Row */}
                  <div className="aio-card-header">
                    <div className="aio-icon-badge">{item.icon}</div>
                    <span className="aio-metric-tag">{item.metricTag}</span>
                  </div>

                  {/* Content */}
                  <h3 className="aio-card-title">{item.title}</h3>
                  {/* <p className="aio-card-desc">{item.description}</p> */}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiOutcomes;
