import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import './ApplicationPerimeter.css';

const solutionSteps = [
  {
    id: 1,
    number: '01',
    title: 'Fully Managed Web Application Firewall (WAF) & WAAP',
    description:
      "We deploy Indusface’s advanced WAF to continuously analyze traffic behavior, instantly blocking OWASP Top 10 vulnerabilities, zero-day exploits, and sophisticated botnets. Utilizing fully managed tuning, we ensure that legitimate business traffic flows unhindered while malicious requests are surgically blocked.",
  },
  {
    id: 2,
    number: '02',
    title: 'Continuous Dynamic Application Security Testing (DAST)',
    description:
      'We integrate Indusface’s comprehensive DAST scanners directly into your development pipelines, automatically identifying architectural flaws and code vulnerabilities before they reach production.',
  },
  {
    id: 3,
    number: '03',
    title: 'Autonomous Virtual Patching',
    description:
      'When a vulnerability is discovered, KloudStack utilizes Indusface’s intelligence to apply custom, instantaneous "virtual patches." This capability shields the flaw from exploitation immediately, buying your engineering teams the necessary time to rewrite code without enduring unscheduled downtime.',
  },
  {
    id: 4,
    number: '04',
    title: 'India DPDP Act & Global Compliance Readiness',
    description:
      "As the data governance landscape evolves, protecting consumer data is a legal imperative. We leverage Indusface’s deep visibility capabilities to help organizations map sensitive data flows, ensuring the stringent access controls required for seamless DPDPA Assessment and Remediation.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ApplicationPerimeter = () => {
  return (
    <section className="ap-section">
      <div className="container">
        <div className="row g-5">
          {/* Left Column */}
          <motion.div
            className="col-lg-5 col-xl-4 pe-lg-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftVariants}
          >
            <div className="ap-header-wrapper">

              <h2 className="section-heading text-start">
                Securing the Application Perimeter with Indusface
              </h2>
              <p className='cap-description text-start mb-3'>As enterprise applications and APIs increasingly become the primary vectors for sophisticated attacks, perimeter firewalls alone are insufficient. We deeply integrate Indusface solutions to provide unmatched Web Application and API Protection (WAAP). This strategic focus empowers organizations to discover vulnerabilities, virtually patch threats with zero downtime, and ensure rigorous adherence to complex data privacy regulations.</p>
            </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="col-lg-7 col-xl-8">
            <motion.div
              className="ap-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {solutionSteps.map((step) => (
                <motion.div
                  key={step.id}
                  className="ap-card"
                  variants={itemVariants}
                >
                  <div className="ap-card-top-bar" />
                  <div className="ap-card-header">
                    <span className="ap-num-accent">{step.number}</span>
                  </div>
                  <h3 className="ap-card-title">{step.title}</h3>
                  <p className="ap-card-desc">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationPerimeter;

