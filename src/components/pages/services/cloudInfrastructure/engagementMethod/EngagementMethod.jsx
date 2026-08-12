import React, { useState } from 'react'
import './EngagementMethod.css'

const STEPS = [
  {
    number: "01",
    subtitle: "PHASE 01",
    title: "Discover & Assess",
    description: "Thorough automated data gathering, cloud readiness positioning, and architectural dependency mapping.",
    tags: ["Automated Discovery", "TCO Modeling", "Dependency Map"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    )
  },
  {
    number: "02",
    subtitle: "PHASE 02",
    title: "Architect & Align",
    description: "Designing bespoke hybrid blueprints that align technical investments directly to specific operational and commercial outcomes.",
    tags: ["Hybrid Blueprints", "Landing Zones", "Zero-Trust Security"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    number: "03",
    subtitle: "PHASE 03",
    title: "Migrate & Modernize",
    description: "Executing structured transitions and modernization routines utilizing automated pipelines to ensure speed, accuracy, and compliance.",
    tags: ["Zero-Downtime Cutover", "Automated CI/CD", "SAP & DB Migration"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m16 16-4-4-4 4" />
      </svg>
    )
  },
  {
    number: "04",
    subtitle: "PHASE 04",
    title: "Optimize & Manage",
    description: "Post-migration validation, financial optimization (FinOps), and transition into 24/7 predictive maintenance and monitoring lifecycle stages.",
    tags: ["FinOps Cost Control", "24/7 AIOps Monitoring", "SLA Governance"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="em-header">
          <h2 className="section-heading text-center">The KloudStack Engagement Methodology</h2>
          <p className="cap-description text-start">
            A structured, battle-tested 4-phase framework engineered for zero-downtime enterprise cloud evolution.
          </p>
        </div>

        {/* Modern 4-Cards Grid */}
        <div className="em-cards-grid">
          {STEPS.map((step, index) => {
            const isActive = activeStep === index
            return (
              <div
                key={step.number}
                className={`em-card ${isActive ? 'em-card--active' : ''}`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Top Glowing Accent Line */}
                <div className="em-card-top-bar" />

                {/* Card Header */}
                <div className="em-card-header">
                  <span className="em-phase-badge">{step.subtitle}</span>
                  <div className="em-icon-wrap">{step.icon}</div>
                </div>

                {/* Number Accent */}
                <div className="em-num-accent">{step.number}</div>

                {/* Title & Description */}
                <h3 className="em-card-title">{step.title}</h3>
                <p className="em-card-desc">{step.description}</p>

                {/* Deliverables Tags */}
                <div className="em-tags-list">
                  {step.tags.map((tag, i) => (
                    <span key={i} className="em-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EngagementMethod

