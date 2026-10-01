import React, { useState } from 'react'
import './EngagementMethod.css'

const STEPS = [
  {
    step: "01",
    title: "Discover & Assess",
    description: "Automated data gathering, cloud readiness evaluation, and architectural dependency mapping.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    )
  },
  {
    step: "02",
    title: "Architect & Align",
    description: "Designing tailored cloud blueprints and landing zones aligned to key business outcomes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    step: "03",
    title: "Migrate & Modernize",
    description: "Executing structured transitions via automated pipelines ensuring zero-downtime cutover.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m16 16-4-4-4 4" />
      </svg>
    )
  },
  {
    step: "04",
    title: "Optimize & Manage",
    description: "Continuous FinOps cost optimization, performance tuning, and 24/7 proactive maintenance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20v-6M6 20V10M18 20V4" />
      </svg>
    )
  }
]

const EngagementMethod = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="em-section">
      <div className="container">
        {/* Section Header */}
        <div className="em-header text-start">
          <h2 className="section-heading">The KloudStack Engagement Methodology</h2>
          <p className="cap-description">
            A structured, battle-tested 4-step framework engineered for seamless enterprise cloud transformation.
          </p>
        </div>

        {/* Step-by-Step Flow */}
        <div className="em-stepper-container">
          <div className="em-stepper-track">
            {STEPS.map((item, index) => {
              const isActive = activeStep === index
              const isPassed = activeStep > index
              return (
                <div
                  key={item.step}
                  className={`em-step-item ${isActive ? 'em-step--active' : ''} ${isPassed ? 'em-step--passed' : ''}`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Connector Line */}
                  {index < STEPS.length - 1 && (
                    <div className="em-connector-line">
                      <div className="em-connector-arrow">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Step Node Icon & Number */}
                  <div className="em-node-wrapper">
                    <div className="em-step-node">
                      <span className="em-step-num">{item.step}</span>
                      <span className="em-step-icon">{item.icon}</span>
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="em-step-card">
                    <div className="em-step-pill">Step {item.step}</div>
                    <h3 className="em-step-title">{item.title}</h3>
                    <p className="em-step-desc">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngagementMethod
