import React from 'react'
import './VisionSection.css'
import CardFlip from './CardFlip'

const CARDS = [
  {
    color: '#d4a04a',
    title: 'Business-IT Alignment',
    // subtitle: 'Align IT with strategic goals',
    description:
      'We translate complex boardroom imperatives into governed, production-ready technology frameworks, ensuring high-availability and strategic acceleration without operational disruption.',
    features: [
      'Multi-Cloud Strategy',
      'Auto-Scaling Infra',
      'High Availability',
      'Cost Optimization',
    ],
  },
  {
    color: '#c27c2c',
    title: 'Proactive Cyber Defense & Compliance',
    // subtitle: 'Ship faster with confidence',
    description:
      'We fortify enterprise infrastructure through pervasive end-to-end security, Zero-Trust Network Access (ZTNA), and rigorous regulatory compliance frameworks (GDPR, HIPAA, DPDP).',
    features: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'GitOps Workflows',
      'Automated Testing',
    ],
  },
  {
    color: '#e8be6b',
    title: 'Vendor & Cloud Readiness',
    // subtitle: 'Zero-trust from the ground up',
    description:
      'Leveraging our vendor-agnostic alliance ecosystem, we empower organizations to operate in environments that best serve their operational requirements, completely eliminating platform lock-in.',
    features: [
      'Zero-Trust IAM',
      'Threat Detection',
      'Audit & Compliance',
      'Secrets Management',
    ],
  },
  
]

const VisionSection = () => {
  return (
    <>
      <section className="vision-section my-5">
        <div className="container mb-5">
          <h2 className='section-heading text-uppercase'>Our Vision &amp; Strategic Pillars</h2>

          <p className='cap-description'>Our methodology is anchored in rigorous execution, enterprise-grade security, and vendor-agnostic flexibility. We align to your strategic priorities to engineer the precise technology foundation required for operational excellence.</p>
        </div>

        <div className="container">
          <div className="cf-grid">
            {CARDS.map((card) => (
              <CardFlip key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default VisionSection
