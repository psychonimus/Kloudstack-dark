import React from 'react';
import { motion } from 'framer-motion';
import './ApplicationPerimeter.css';

const solutionSteps = [
  {
    id: 1,
    number: '01',
    title: 'Fully Managed Web Application Firewall (WAF) & WAAP',
    description:
      "We deploy Indusface's advanced WAF to continuously analyze traffic behavior, instantly blocking OWASP Top 10 vulnerabilities, zero-day exploits, and sophisticated botnets. Utilizing fully managed tuning, we ensure that legitimate business traffic flows unhindered while malicious requests are surgically blocked.",
  },
  {
    id: 2,
    number: '02',
    title: 'Continuous Dynamic Application Security Testing (DAST)',
    description:
      "We integrate Indusface's comprehensive DAST scanners directly into your development pipelines, automatically identifying architectural flaws and code vulnerabilities before they reach production.",
  },
  {
    id: 3,
    number: '03',
    title: 'Autonomous Virtual Patching',
    description:
      "When a vulnerability is discovered, KloudStack utilizes Indusface's intelligence to apply custom, instantaneous 'virtual patches.' This capability shields the flaw from exploitation immediately, buying your engineering teams the necessary time to rewrite code without enduring unscheduled downtime.",
  },
  {
    id: 4,
    number: '04',
    title: 'India DPDP Act & Global Compliance Readiness',
    description:
      "As the data governance landscape evolves, protecting consumer data is a legal imperative. We leverage Indusface's deep visibility capabilities to help organizations map sensitive data flows, ensuring the stringent access controls required for seamless DPDPA Assessment and Remediation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ApplicationPerimeter = () => {
  return (
    <section className="ap-section">
      {/* Ambient glow */}
      <div className="ap-glow-orb ap-glow-orb--left" />
      <div className="ap-glow-orb ap-glow-orb--right" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="ap-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="section-heading text-center">
            Securing the Application Perimeter with Indusface
          </h2>
          <p className="cap-description text-start">
            As enterprise applications and APIs increasingly become the primary vectors for sophisticated attacks, perimeter firewalls alone are insufficient. We deeply integrate Indusface solutions to provide unmatched Web Application and API Protection (WAAP). This strategic focus empowers organizations to discover vulnerabilities, virtually patch threats with zero downtime, and ensure rigorous adherence to complex data privacy regulations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="ap-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {solutionSteps.map((step) => (
            <motion.div key={step.id} className="ap-card" variants={itemVariants}>
              <div className="ap-card-top-bar" />

              {/* Card Header */}
              <div className="ap-card-header">
                <div className="ap-num-badge">
                  <span className="ap-num-accent">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="ap-card-title">{step.title}</h3>
              <p className="ap-card-desc">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationPerimeter;
