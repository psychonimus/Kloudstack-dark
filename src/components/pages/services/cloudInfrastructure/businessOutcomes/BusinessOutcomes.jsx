import React, { useState } from 'react'
import './BusinessOutcomes.css'

const OUTCOMES = [
  {
    id: 'financial-flexibility',
    title: 'Financial Flexibility',
    metricTag: 'CAPEX TO OPEX',
    description: 'Accelerated shift from intensive Capital Expenditure (CAPEX) to highly predictable, optimized Operational Expenditure (OPEX) models, driving significant IT spend reductions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    id: 'operational-resilience',
    title: 'Operational Resilience',
    metricTag: '24/7 PREDICTIVE',
    description: 'Transitioning infrastructure support into a proactive 24/7 predictive maintenance model, significantly lowering total system downtime risk.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    )
  },
  {
    id: 'zero-disruption-engineering',
    title: 'Zero-Disruption Engineering',
    metricTag: '100% CONTINUITY',
    description: 'Validated delivery frameworks designed to ensure total business continuity across highly regulated, multi-vendor environments.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
]

const BusinessOutcomes = () => {
  const [activeId, setActiveId] = useState('financial-flexibility')

  return (
    <section className="bo-section">
      <div className="container">
        <div className="bo-card-outer">
          {/* Header */}
          <div className="bo-header">
            <h2 className="section-heading text-center">Strategic Business Outcomes</h2>
            <p className="cap-description text-start">
              Measurable Enterprise Value Delivered Across Your Infrastructure
            </p>
          </div>

          {/* 3 Outcome Cards Grid */}
          <div className="bo-grid">
            {OUTCOMES.map((item) => {
              const isActive = activeId === item.id
              return (
                <div
                  key={item.id}
                  className={`bo-card ${isActive ? 'bo-card--active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  {/* Top Glowing Accent Line */}
                  <div className="bo-card-top-bar" />

                  {/* Top Row: Icon Badge & Metric Tag */}
                  <div className="bo-card-header">
                    <div className="bo-icon-badge">{item.icon}</div>
                    <span className="bo-metric-tag">{item.metricTag}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="bo-card-title">{item.title}</h3>
                  <p className="bo-card-desc">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessOutcomes

