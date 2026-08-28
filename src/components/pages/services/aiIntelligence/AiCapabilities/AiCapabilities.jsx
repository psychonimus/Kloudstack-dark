import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AiCapabilities.css';

const CAPABILITIES = [
  {
    id: 'intelligence',
    roman: 'I.',
    category: 'INTELLIGENCE & DEPLOYMENT',
    title: 'Intelligence & Model Deployment',
    subtitle: 'Bridging the gap between conceptual AI and production-ready enterprise execution.',
    services: [
      {
        title: 'Agentic AI Integration',
        desc: 'End-to-end orchestration and deployment of advanced agentic AI models customized for complex, multi-variable enterprise workflows.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        ),
      },
      {
        title: 'Marketplace-Ready Enablement',
        desc: 'Designing robust, scalable solution bundles that allow ISVs and enterprises to build and deploy AI-native platforms seamlessly across cloud marketplaces.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'automation',
    roman: 'II.',
    category: 'PROCESS AUTOMATION',
    title: 'Intelligent Process Automation',
    subtitle: 'Eliminating operational friction through programmatic efficiency.',
    services: [
      {
        title: 'Workflow Orchestration',
        desc: 'Streamlining complex, multi-step corporate processes using advanced automation protocols to eliminate manual overhead and drastically reduce human error rates.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        title: 'Operational Analytics',
        desc: 'Deploying intelligent operational analytics that continuously monitor automated pipelines, optimizing performance and resource consumption in real time.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'predictive',
    roman: 'III.',
    category: 'PREDICTIVE ANALYTICS',
    title: 'Predictive Analytics & Maintenance',
    subtitle: 'Harnessing historical data to forecast future operational and market realities.',
    services: [
      {
        title: '24/7 Predictive Maintenance',
        desc: 'Applying AI models to IT infrastructure to identify degradation and anomalies before they result in unscheduled downtime, ensuring zero-disruption delivery.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        ),
      },
      {
        title: 'Forecasting & Modeling',
        desc: 'Utilizing deep machine learning algorithms to uncover hidden data correlations, enabling predictive modeling that directly supports strategic boardroom initiatives.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'infrastructure',
    roman: 'IV.',
    category: 'AI-READY INFRASTRUCTURE',
    title: 'AI-Ready Infrastructure Design',
    subtitle: 'Building the foundational compute architectures required for cognitive workloads.',
    services: [
      {
        title: 'High-Performance Cloud Architectures',
        desc: 'Designing secure, scalable, and AI-ready cloud environments across AWS, Azure, and GCP that are specifically tuned to support intensive data processing and model training.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        ),
      },
      {
        title: 'Governance-by-Design',
        desc: 'Establishing rigorous security, compliance, and governance frameworks to ensure that all AI processing aligns with international data regulations and internal corporate policies.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
      },
    ],
  },
];

const AiCapabilities = () => {
  const [activeTab, setActiveTab] = useState('intelligence');

  const activeData = CAPABILITIES.find((c) => c.id === activeTab);

  return (
    <section className="aic-section">
      <div className="container">
        {/* Header */}
        <div className="aic-header">
          <h2 className="section-heading text-center">Core AI & Automation Capabilities</h2>
          <p className="cap-description text-start">
            A comprehensive capability matrix detailing the granular services KloudStack provides to operationalize AI across your enterprise.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="aic-tab-bar">
          {CAPABILITIES.map((cap) => (
            <button
              key={cap.id}
              className={`aic-tab-btn ${activeTab === cap.id ? 'aic-tab-btn--active' : ''}`}
              onClick={() => setActiveTab(cap.id)}
            >
              {/* <span className="aic-tab-roman">{cap.roman}</span> */}
              <span className="aic-tab-label">{cap.category}</span>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="aic-content-panel"
          >
            {/* Panel Header */}
            <div className="aic-panel-header">
              <h3 className="aic-panel-title section-heading">{activeData.title}</h3>
              <p className="aic-panel-subtitle">{activeData.subtitle}</p>
            </div>

            {/* Services Grid */}
            <motion.div
              className="aic-services-grid"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              {activeData.services.map((svc, idx) => (
                <motion.div
                  key={idx}
                  className="aic-service-card"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                  }}
                >
                  <div className="aic-card-top-bar" />
                  <div className="aic-icon-wrap">{svc.icon}</div>
                  <h4 className="aic-svc-title">{svc.title}</h4>
                  <p className="aic-svc-desc">{svc.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AiCapabilities;
