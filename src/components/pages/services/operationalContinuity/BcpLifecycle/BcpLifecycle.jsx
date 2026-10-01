import React, { useState } from 'react';
import './BcpLifecycle.css';

const STEPS = [
  {
    step: '01',
    title: 'Business Impact Analysis',
    description:
      'Executive alignment and risk quantification to determine financial exposure and map critical dependencies.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Architectural Blueprinting',
    description:
      'Designing failover architecture and automated replication models to eliminate single points of failure.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Deployment & Hardening',
    description:
      'Implementing redundant targets, immutable WORM parameters, and isolated air-gapped data vaults.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Validation & Managed Enforcement',
    description:
      'Continuous automated testing loops, 24/7 predictive operational monitoring, and SLA governance.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="bcl-header text-start">
          <h2 className="section-heading">BCP Strategy Lifecycle & Consulting Methodology</h2>
          <p className="cap-description">
            A structured, battle-tested 4-step framework engineered to establish and enforce enterprise resilience from Day One engagement through continuous managed operations.
          </p>
        </div>

        {/* Step-by-Step Flow */}
        <div className="bcl-stepper-container">
          <div className="bcl-stepper-track">
            {STEPS.map((item, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep > index;
              return (
                <div
                  key={item.step}
                  className={`bcl-step-item ${isActive ? 'bcl-step--active' : ''} ${isPassed ? 'bcl-step--passed' : ''}`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Connector Line */}
                  {index < STEPS.length - 1 && (
                    <div className="bcl-connector-line">
                      <div className="bcl-connector-arrow">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Step Node Icon & Number */}
                  <div className="bcl-node-wrapper">
                    <div className="bcl-step-node">
                      <span className="bcl-step-num">{item.step}</span>
                      <span className="bcl-step-icon">{item.icon}</span>
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="bcl-step-card">
                    <div className="bcl-step-pill">Step {item.step}</div>
                    <h3 className="bcl-step-title">{item.title}</h3>
                    <p className="bcl-step-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BcpLifecycle;
