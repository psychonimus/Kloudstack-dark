import React from 'react';
import { motion } from 'framer-motion';
import './AiPhilosophy.css';

const PILLARS = [
  {
    id: 'productivity',
    roman: 'I.',
    label: 'AUGMENTATION',
    title: 'Augmenting Current Solutions for Exponential Productivity',
    description:
      'We recognize that the highest return on investment comes from amplifying your existing digital estate. KloudStack seamlessly integrates AI-driven intelligence into your current solutions, transforming legacy applications into highly productive, automated systems. By deploying advanced agentic AI models directly into your established operational pipelines, we eliminate manual bottlenecks, dramatically increase workforce productivity, and accelerate overall engineering and execution velocity.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    tags: ['Agentic AI Integration', 'Legacy Modernization', 'Workflow Automation', 'RPA Automation'],
  },
  {
    id: 'intelligence',
    roman: 'II.',
    label: 'PERVASIVE INTELLIGENCE',
    title: 'Pervasive Intelligence for Precision Decision-Making',
    description:
      'True enterprise transformation requires more than isolated technological upgrades; it demands intelligent automation and operational analytics embedded throughout the entire organization. KloudStack engineers pervasive intelligence frameworks that unify siloed data streams into actionable, boardroom-level insights. By infusing predictive analytics into daily operations, we empower executive leadership to transition from reactive management to proactive, data-backed decision-making at absolute scale.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path d="M3.05 11a9 9 0 0 1 17.9 0" />
      </svg>
    ),
    tags: ['Predictive Analytics', 'Boardroom Insights', 'Data Unification'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const AiPhilosophy = () => {
  return (
    <section className="aip-section">
      {/* Ambient glow */}
      <div className="aip-glow-orb aip-glow-orb--left" />
      <div className="aip-glow-orb aip-glow-orb--right" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="aip-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="section-heading text-center">
            Transforming the Enterprise: Our Core Philosophy
          </h2>
          <p className="cap-description text-start">
            A dual-pillar approach to enterprise transformation, amplifying what exists while embedding intelligence throughout every layer of your organization.
          </p>
        </motion.div>

        {/* Dual Pillar Cards */}
        <motion.div
          className="aip-pillars-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {PILLARS.map((pillar) => (
            <motion.div key={pillar.id} className="aip-pillar-card" variants={itemVariants}>
              <div className="aip-card-top-bar" />

              {/* Card Header */}
              <div className="aip-card-header">
                <div className="aip-icon-badge">{pillar.icon}</div>
                <div className="aip-header-right">
                  {/* <span className="aip-roman">{pillar.roman}</span> */}
                  <span className="aip-label">{pillar.label}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="aip-pillar-title">{pillar.title}</h3>
              <p className="aip-pillar-desc">{pillar.description}</p>

              {/* Tags */}
              <div className="aip-tags-row">
                {pillar.tags.map((tag, i) => (
                  <span key={i} className="aip-tag-pill">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AiPhilosophy;
