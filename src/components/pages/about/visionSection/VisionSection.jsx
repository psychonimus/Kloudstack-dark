import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaCheckCircle,
  FaArrowRight,
  FaLayerGroup
} from 'react-icons/fa';
import './VisionSection.css';

const PILLARS = [
  {
    number: '01',
    icon: FaChartLine,
    title: 'Business-IT Alignment',
    tagline: 'Strategic Velocity & Governance',
    color: '#d4a04a',
    accentGradient: 'linear-gradient(135deg, rgba(212, 160, 74, 0.2) 0%, rgba(212, 160, 74, 0.03) 100%)',
    glowColor: 'rgba(212, 160, 74, 0.25)',
    description:
      'We translate complex boardroom imperatives into governed, production-ready technology frameworks, ensuring high-availability and strategic acceleration without operational disruption.',
    highlights: [
      'Multi-Cloud Strategic Roadmap',
      'Auto-Scaling Resilient Infrastructure',
      'High-Availability Architecture',
      'TCO & Continuous Cost Optimization',
    ],
  },
  {
    number: '02',
    icon: FaShieldAlt,
    title: 'Proactive Cyber Defense & Compliance',
    tagline: 'Zero-Trust Resilience & Audit Assurance',
    color: '#e5a13c',
    accentGradient: 'linear-gradient(135deg, rgba(229, 161, 60, 0.2) 0%, rgba(229, 161, 60, 0.03) 100%)',
    glowColor: 'rgba(229, 161, 60, 0.25)',
    description:
      'We fortify enterprise infrastructure through pervasive end-to-end security, Zero-Trust Network Access (ZTNA), and rigorous regulatory compliance frameworks (DPDPA, GDPR, HIPAA, SEBI CSF).',
    highlights: [
      'Zero-Trust Network Architecture',
      'Automated Compliance & DPDPA Readiness',
      'Continuous Threat Monitoring & XDR',
      'Forensics & Audit Trail Protection',
    ],
  },
  {
    number: '03',
    icon: FaNetworkWired,
    title: 'Vendor & Cloud Readiness',
    tagline: 'Unrestricted Ecosystem Freedom',
    color: '#f5c96a',
    accentGradient: 'linear-gradient(135deg, rgba(245, 201, 106, 0.2) 0%, rgba(245, 201, 106, 0.03) 100%)',
    glowColor: 'rgba(245, 201, 106, 0.25)',
    description:
      'Leveraging our vendor-agnostic alliance ecosystem, we empower organizations to operate in environments that best serve their operational requirements, completely eliminating platform lock-in.',
    highlights: [
      'Vendor-Agnostic Cloud Mesh',
      'Zero Platform & Vendor Lock-in',
      'Hybrid & Multi-Cloud Interoperability',
      'Seamless Cross-Cloud Migration',
    ],
  },
];

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const VisionSection = () => {
  return (
    <section className="vision-section" id="vision-pillars">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="vision-header mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="vision-eyebrow">
            <FaLayerGroup className="me-2" />
            Strategic Foundations &amp; Purpose
          </span>
          <h2 className="section-heading text-uppercase text-start">
            Our Vision &amp; Strategic Pillars
          </h2>
          <p className="cap-description text-start vision-subtitle">
            Our methodology is anchored in rigorous execution, enterprise-grade security, and vendor-agnostic flexibility. We align to your strategic priorities to engineer the precise technology foundation required for operational excellence.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div 
          className="vision-pillars-grid"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div 
                key={pillar.number}
                className="vision-card"
                variants={cardItemVariants}
                style={{
                  '--pillar-color': pillar.color,
                  '--pillar-glow': pillar.glowColor,
                }}
              >
                {/* Glowing Top Border Bar */}
                <div className="vision-card-top-bar" />

                {/* Ambient Card Background Glow */}
                <div 
                  className="vision-card-ambient" 
                  style={{ background: pillar.accentGradient }}
                />

                {/* Card Header: Number pill & Icon */}
                <div className="vision-card-head">
                  <div className="vision-icon-box">
                    <Icon />
                  </div>
                  <span className="vision-number-badge">
                    Pillar {pillar.number}
                  </span>
                </div>

                {/* Card Body */}
                <div className="vision-card-body">
                  <span className="vision-card-tagline">{pillar.tagline}</span>
                  <h3 className="vision-card-title">{pillar.title}</h3>
                  <p className="vision-card-desc">{pillar.description}</p>
                </div>

                {/* Highlights List */}
                <div className="vision-card-highlights">
                  <span className="vision-highlights-title">Core Focus Areas</span>
                  <ul className="vision-highlights-list">
                    {pillar.highlights.map((item, idx) => (
                      <li key={idx} className="vision-highlight-item">
                        <FaCheckCircle className="vision-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom Indicator */}
                <div className="vision-card-footer">
                  <span className="vision-footer-line" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
