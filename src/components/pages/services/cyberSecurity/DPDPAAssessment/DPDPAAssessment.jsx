import React from 'react';
import { motion } from 'framer-motion';
import './DPDPAAssessment.css';

const dpdpaSteps = [
  {
    id: 1,
    number: '01',
    title: 'Comprehensive Data Mapping & Discovery',
    description:
      'We systematically discover, track, and map the lifecycle of all personally identifiable information (PII) across hybrid infrastructure, cloud landing zones, and database environments.',
  },
  {
    id: 2,
    number: '02',
    title: 'Consent Management & Notice Auditing',
    description:
      "Reviewing, structural engineering, and automating consent workflows to ensure all data collection mechanisms strictly satisfy the Act's notice, purpose-limitation, and explicit consent obligations.",
  },
  {
    id: 3,
    number: '03',
    title: 'Gap Assessment & Risk Modeling',
    description:
      'Evaluating data processing pipelines against localized legislative mandates, utilizing our unified risk dashboards to surface and prioritize compliance liabilities.',
  },
  {
    id: 4,
    number: '04',
    title: 'Remediation & Safeguard Implementation',
    description:
      'Deploying advanced technical safeguards—including automated data classification rules via Microsoft Purview and application-layer visibility protections through Indusface WAF—to virtually patch cross-border and regional data flow vulnerabilities.',
  },
  {
    id: 5,
    number: '05',
    title: 'Continuous Compliance & Audit Readiness',
    description:
      'Integrating ongoing DPDPA compliance telemetry directly into our continuous auditing platforms, generating board-ready evidence logs and streamlining multi-framework verification tracks.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const DPDPAAssessment = () => {
  return (
    <section className="dpdpa-section">
      <div className="container">
        {/* Section Badge & Intro */}
        <motion.div
          className="dpdpa-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="dpdpa-eyebrow">Specialized Focus</span>
          <h2 className="section-heading text-start">
            India DPDPA Assessment &amp; <br />Remediation Services
          </h2>
          <p className="cap-description text-start dpdpa-subtitle">
            Navigating the regulatory complexities of India's Digital Personal Data Protection (DPDP) Act to secure
            citizen data and eliminate corporate liability.
          </p>
          <p className="dpdpa-body-text">
            As compliance under India's Digital Personal Data Protection Act transitions from a legal roadmap into a
            strict enforcement reality, organizations processing personal data must establish continuous, auditable data
            protection safeguards. KloudStack provides a dedicated end-to-end DPDPA Assessment and Remediation framework
            designed to align enterprise architectures with national data privacy mandates without compromising
            operational velocity.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="dpdpa-steps-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {dpdpaSteps.map((step) => (
            <motion.div key={step.id} className="dpdpa-step-card" variants={itemVariants}>
              <div className="dpdpa-card-top-bar" />
              <span className="dpdpa-num">{step.number}</span>
              <h3 className="dpdpa-step-title">{step.title}</h3>
              <p className="dpdpa-step-desc">{step.description}</p>
            </motion.div>
          ))}

          {/* India Flag Accent Card */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default DPDPAAssessment;
