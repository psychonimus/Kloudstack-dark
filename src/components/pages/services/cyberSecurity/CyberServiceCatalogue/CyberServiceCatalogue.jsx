import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CyberServiceCatalogue.css';

const CATALOGUE = [
  {
    id: 'penetration',
    roman: 'I.',
    category: 'VAPT & TESTING',
    title: 'Penetration Testing & VAPT',
    subtitle: 'Delivered by certified professionals to test resilience across all corporate attack surfaces.',
    services: [
      {
        title: 'Web Application VAPT',
        desc: 'OWASP Top 10 testing, authentication/authorization flaw audits, business logic vulnerabilities, and session management reviews.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8M12 17v4"/>
          </svg>
        ),
      },
      {
        title: 'Mobile Application VAPT',
        desc: 'Android & iOS security reviews, reverse engineering, analysis, and insecure data storage testing.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/>
          </svg>
        ),
      },
      {
        title: 'Network Penetration Testing',
        desc: 'External & internal network VAPT, firewall rule bypass audits, and Active Directory attack path mapping.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        ),
      },
      {
        title: 'API Security Testing',
        desc: 'REST, SOAP, and GraphQL testing covering broken object-level authorization, rate limiting, and injection attacks.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        ),
      },
      {
        title: 'AI/ML Penetration Testing',
        desc: 'Advanced security validation including model inversion, data poisoning, prompt injection (LLMs), and training data leakage assessments.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
        ),
      },
      {
        title: 'Threat Modelling & Code Review',
        desc: 'Secure source code review (SAST), dependency scanning, supply chain risk management, and framework modeling (STRIDE / PASTA).',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: 'compliance',
    roman: 'II.',
    category: 'COMPLIANCE & DEVSECOPS',
    title: 'Compliance, Audit & DevSecOps',
    subtitle: 'Audit readiness and framework implementation embedded into your technology lifecycle.',
    services: [
      {
        title: 'DevSecOps Integration',
        desc: 'Secure CI/CD pipeline integration, container and Kubernetes security, and Infrastructure as Code (IaC) protection.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        ),
      },
      {
        title: 'Enterprise Framework Audits',
        desc: 'Full readiness gap assessments, evidence collection, and validation protocols across ISO 27001, SOC 2 Type 2, PCI-DSS, and CIS Controls v8.1 (across all 18 families).',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
        ),
      },
      {
        title: 'Data Privacy Compliance',
        desc: 'Structural safeguard implementation and data mapping for regional and global mandates: India DPDP Act 2023, GDPR, and HIPAA.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: 'managed',
    roman: 'III.',
    category: 'MANAGED SERVICES',
    title: 'Enterprise & Cloud Managed Services',
    subtitle: 'Strategic leadership and outsourced defense mechanisms tailored to your maturity level.',
    services: [
      {
        title: 'Virtual CISO (vCISO) Services',
        desc: 'Fractional CISO leadership providing security strategy, policy design, board communication, and third-party risk management.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        ),
      },
      {
        title: 'Security Operations Centre (SOC)',
        desc: '24/7 security event monitoring, log management, threat hunting, incident triage, and full Managed SOC-as-a-Service.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        ),
      },
      {
        title: 'Cloud Security Services',
        desc: 'Infrastructure hardening across AWS, Azure, and GCP, cloud architecture reviews, and continuous vulnerability management.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
          </svg>
        ),
      },
      {
        title: 'Incident Response & Retainers',
        desc: 'Guaranteed incident response availability combined with real-time threat intelligence subscriptions.',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        ),
      },
    ],
  },
];

const CyberServiceCatalogue = () => {
  const [activeTab, setActiveTab] = useState('penetration');

  const activeData = CATALOGUE.find((c) => c.id === activeTab);

  return (
    <section className="csc-section">
      <div className="container">
        {/* Header */}
        <div className="csc-header">
          {/* <span className="csc-eyebrow">Service Catalogue</span> */}
          <h2 className="section-heading text-center">Comprehensive Cyber Security Service Catalogue</h2>
          <p className="cap-description text-start">
            End-to-end security services engineered for the modern enterprise threat landscape.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="csc-tab-bar">
          {CATALOGUE.map((cat) => (
            <button
              key={cat.id}
              className={`csc-tab-btn ${activeTab === cat.id ? 'csc-tab-btn--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {/* <span className="csc-tab-roman">{cat.roman}</span> */}
              <span className="csc-tab-label">{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="csc-content-panel"
          >
            {/* Panel Header */}
            <div className="csc-panel-header">
              <h3 className="csc-panel-title">{activeData.title}</h3>
              <p className="csc-panel-subtitle">{activeData.subtitle}</p>
            </div>

            {/* Services Grid */}
            <motion.div
              className="csc-services-grid"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
              }}
            >
              {activeData.services.map((svc, idx) => (
                <motion.div
                  key={idx}
                  className="csc-service-card"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                  }}
                >
                  <div className="csc-card-top-bar" />
                  <div className="csc-icon-wrap">{svc.icon}</div>
                  <h4 className="csc-svc-title">{svc.title}</h4>
                  <p className="csc-svc-desc">{svc.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CyberServiceCatalogue;
