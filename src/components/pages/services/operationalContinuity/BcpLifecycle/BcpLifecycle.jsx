import React, { useState } from 'react';
import './BcpLifecycle.css';

const PHASES = [
  {
    number: '01',
    subtitle: 'PHASE 01',
    title: 'Business Impact Analysis',
    description:
      'Executive alignment and data-layer indexing to determine precise financial risk exposure, mapping system dependencies and finalizing compliance targets.',
    tags: ['Risk Quantification', 'Dependency Mapping', 'Compliance Scoping'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    number: '02',
    subtitle: 'PHASE 02',
    title: 'Architectural Blueprinting',
    description:
      'Engineering the technical foundation using Commvault and Perpetuuiti to build the bespoke failover models required to eliminate every single point of failure across the estate.',
    tags: ['Failover Modeling', 'Alliance Integration', 'Zero-SPF Design'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    number: '03',
    subtitle: 'PHASE 03',
    title: 'Deployment & Hardening',
    description:
      'Standing up redundant infrastructure targets, locking down immutable parameters, and establishing isolated, air-gapped data vaults aligned to regulatory and operational standards.',
    tags: ['WORM Enforcement', 'Air-Gap Vaulting', 'Redundant Targets'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    number: '04',
    subtitle: 'PHASE 04',
    title: 'Validation & Managed Enforcement',
    description:
      'Initiating automated testing loops and transitioning operations into a state of continuous 24/7 predictive operational monitoring and SLA-governed enforcement.',
    tags: ['Automated DR Drills', '24/7 Monitoring', 'SLA Governance'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20v-6M6 20V10M18 20V4" />
      </svg>
    ),
  },
];

const BcpLifecycle = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bcl-section">
      <div className="container">
        {/* Section Header */}
        <div className="bcl-header">
          <h2 className="section-heading text-center">BCP Strategy Lifecycle & Consulting Methodology</h2>
          <p className="cap-description text-start">
            A structured, battle-tested 4-phase framework engineered to establish and enforce enterprise resilience from Day One engagement through continuous managed operations.
          </p>
        </div>

        {/* Phase Cards Grid */}
        <div className="bcl-cards-grid">
          {PHASES.map((phase, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={phase.number}
                className={`bcl-card ${isActive ? 'bcl-card--active' : ''}`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Top Glowing Accent */}
                <div className="bcl-card-top-bar" />

                {/* Card Header */}
                <div className="bcl-card-header">
                  <span className="bcl-phase-badge">{phase.subtitle}</span>
                  <div className="bcl-icon-wrap">{phase.icon}</div>
                </div>

                {/* Number Watermark */}
                <div className="bcl-num-accent">{phase.number}</div>

                {/* Content */}
                <h3 className="bcl-card-title">{phase.title}</h3>
                <p className="bcl-card-desc">{phase.description}</p>

                {/* Tags */}
                <div className="bcl-tags-list">
                  {phase.tags.map((tag, i) => (
                    <span key={i} className="bcl-tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BcpLifecycle;
