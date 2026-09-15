import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LifecycleFramework.css';

const PILLARS = [
  {
    id: 'build',
    number: 'I',
    label: 'I. BUILD',
    category: 'BUILD: APPLICATION ARCHITECTURE & CI',
    title: 'Scalable Application Frameworks & Microservices Architecture',
    subtitle: 'Establishing a unified, modular foundation for rapid software creation, decoupling microservices to enhance operational agility.',
    items: [
      {
        title: 'Scalable App Frameworks',
        desc: 'Designing robust, cloud-native application architectures leveraging enterprise-supported open-source frameworks to ensure code maintainability, scalability, and modular growth.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        ),
        tag: 'MODULAR ARCHITECTURE'
      },
      {
        title: 'Microservices Decomposition',
        desc: 'Decoupling bloated, monolithic application estates into independent, loosely coupled microservices networks to improve fault isolation, system resilience, and horizontal scaling capabilities.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="8" height="8" rx="2" />
            <rect x="14" y="2" width="8" height="8" rx="2" />
            <rect x="2" y="14" width="8" height="8" rx="2" />
            <rect x="14" y="14" width="8" height="8" rx="2" />
            <path d="M10 6h4M6 10v4M18 10v4M10 18h4" />
          </svg>
        ),
        tag: 'DECOUPLED SERVICES'
      },
      {
        title: 'Continuous Integration (CI) Automation',
        desc: 'Engineering highly performant, automated build pipelines that continuously compile, validate, and integrate source code, minimizing branch friction and ensuring a constantly releasable code state.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
        tag: 'AUTOMATED PIPELINES'
      },
    ],
  },
  {
    id: 'test',
    number: 'II',
    label: 'II. TEST',
    category: 'TEST: IaC & QUALITY ENGINEERING',
    title: 'Automated Infrastructure as Code (IaC) & Quality Engineering',
    subtitle: 'Injecting consistency, absolute environmental parity, and programmatic verification across the software development lifecycle.',
    items: [
      {
        title: 'Declarative Infrastructure as Code (IaC)',
        desc: 'Eliminating environmental drift and manual infrastructure provisioning by defining entire computing landscapes programmatically. Utilizing advanced automation tools like Terraform and Ansible, we treat environment setups as immutable, auditable, and version-controlled artifacts.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
        ),
        tag: 'TERRAFORM & ANSIBLE'
      },
      {
        title: 'Automated Continuous Deployment (CD) Testing',
        desc: 'Seamlessly embedding smoke tests, unit tests, and security scanning directly into your automated deployment tracks to ensure bulletproof release stability.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        ),
        tag: 'AUTOMATED CD TESTS'
      },
      {
        title: 'Environmental Parity Optimization',
        desc: 'Ensuring that development, staging, and production environments are programmatically identical, reducing hidden integration anomalies and accelerating troubleshooting timelines.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
        tag: '100% PARITY ASSURANCE'
      },
    ],
  },
  {
    id: 'deploy',
    number: 'III',
    label: 'III. DEPLOY',
    category: 'DEPLOY: CONTAINERIZATION & GITOPS',
    title: 'Advanced Containerization & Cloud-Native Orchestration',
    subtitle: 'Standardizing delivery runtimes to ensure immutable operational stability across hybrid and multi-cloud landing zones.',
    items: [
      {
        title: 'Advanced Containerization Engineering',
        desc: 'Packaging application runtime dependencies, configurations, and core binaries into lightweight, isolated container units to achieve absolute cross-platform portability.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        ),
        tag: 'IMMUTABLE RUNTIMES'
      },
      {
        title: 'Enterprise Kubernetes Orchestration',
        desc: 'Architecting, scaling, and operating high-availability container clusters utilizing Kubernetes and Red Hat OpenShift to handle dynamic traffic scaling, automated service self-healing, and seamless rollouts.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="12 6 17 15 7 15" />
          </svg>
        ),
        tag: 'K8S & OPENSHIFT'
      },
      {
        title: 'Declarative GitOps Pipelines',
        desc: 'Transforming deployment workflows into declarative, auditable operations where the state of the infrastructure and container applications is entirely managed through Git repositories, accelerating audit compliance and recovery procedures.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <path d="M13 6h3a2 2 0 0 1 2 2v7" />
            <line x1="6" y1="9" x2="6" y2="21" />
          </svg>
        ),
        tag: 'DECLARATIVE GITOPS'
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

const LifecycleFramework = () => {
  const [activeId, setActiveId] = useState('build');
  const activeData = PILLARS.find((p) => p.id === activeId);

  return (
    <section className="lcf-section">
      <div className="container pt-5">
        {/* Header */}
        <motion.div
          className="lcf-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="section-heading text-center">The Core Lifecycle Framework</h2>
          <p className="cap-description text-start">
            A comprehensive three-pillar architectural stack explicitly mapping out how KloudStack injects automation, security, and open-source discipline into every phase of the software delivery pipeline.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="lcf-tab-bar">
          {PILLARS.map((p) => (
            <button
              key={p.id}
              className={`lcf-tab-btn ${activeId === p.id ? 'lcf-tab-btn--active' : ''}`}
              onClick={() => setActiveId(p.id)}
            >
              <span className="lcf-tab-num">{p.number}</span>
              <span className="lcf-tab-label">{p.label}</span>
            </button>
          ))}
        </div>

        {/* Active Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lcf-panel"
          >
            {/* Panel Header */}
            <div className="lcf-panel-header">
              <div className="lcf-panel-label">{activeData.category}</div>
              <h3 className="lcf-panel-title section-heading">{activeData.title}</h3>
              <p className="lcf-panel-subtitle">{activeData.subtitle}</p>
            </div>

            {/* Cards Grid */}
            <motion.div
              className="lcf-cards-grid"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {activeData.items.map((item, idx) => (
                <motion.div key={idx} className="lcf-card" variants={itemVariants}>
                  <div className="lcf-card-top-bar" />
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="lcf-icon-wrap">{item.icon}</div>
                    <span className="lcf-card-tag">{item.tag}</span>
                  </div>
                  <h4 className="lcf-card-title">{item.title}</h4>
                  <p className="lcf-card-desc">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LifecycleFramework;
