import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaAward, 
  FaCertificate, 
  FaUserShield, 
  FaCheckCircle, 
  FaFingerprint,
  FaNetworkWired,
  FaServer
} from 'react-icons/fa';
import './CyberCertifications.css';

const CATEGORIES = [
  { id: 'all', label: 'All Certifications' },
  { id: 'offensive', label: 'Offensive & Penetration Testing' },
  { id: 'governance', label: 'Governance & Management' },
  { id: 'infrastructure', label: 'Enterprise Systems' },
];

const CERTIFICATIONS = [
  {
    id: 'cism',
    category: 'governance',
    code: 'CISM',
    countBadge: '2 Certified',
    title: 'Certified Information Security Manager',
    issuer: 'ISACA',
    badge: 'Security Governance & Risk',
    description: 'Expertise in developing and managing enterprise information security programs, risk governance, regulatory compliance, and incident management.',
    icon: <FaAward />,
    skills: ['Security Governance', 'Information Risk Management', 'Program Development', 'Incident Management'],
    level: 'ISACA Certified',
  },
  {
    id: 'ceh',
    category: 'offensive',
    code: 'CEH',
    countBadge: '4 Certified',
    title: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    badge: 'Threat & Vulnerability Assessment',
    description: 'Proficiency in contemporary attack vectors, malware threats, vulnerability discovery methodologies, and perimeter counter-measures.',
    icon: <FaUserShield />,
    skills: ['Network Scanning & Enumeration', 'Threat Modeling', 'Web App Vulnerabilities', 'System Hardening'],
    level: 'EC-Council Certified',
  },
  {
    id: 'ewptx',
    category: 'offensive',
    code: 'eWPTX',
    countBadge: '2 Certified',
    title: 'Web Application Penetration Tester eXtreme',
    issuer: 'INE Security / eLearnSecurity',
    badge: 'Advanced Web App VAPT',
    description: 'Advanced practical web application penetration testing covering WAF evasion, complex injection techniques, and business logic flaw exploitation.',
    icon: <FaNetworkWired />,
    skills: ['Advanced WAF Evasion', 'Custom Exploit Development', 'API & Web App Pentesting', 'Logic Flaw Exploitation'],
    level: 'INE Security Certified',
  },
  {
    id: 'rhce',
    category: 'infrastructure',
    code: 'RHCE',
    countBadge: '1 Certified',
    title: 'Red Hat Certified Engineer',
    issuer: 'Red Hat',
    badge: 'Linux & Systems Automation',
    description: 'Advanced Linux enterprise system engineering, automated deployment orchestration, security configuration, and infrastructure automation.',
    icon: <FaServer />,
    skills: ['Enterprise Linux Hardening', 'Ansible Automation', 'Service Security', 'Infrastructure as Code'],
    level: 'Red Hat Certified',
  },
  {
    id: 'oscp',
    category: 'offensive',
    code: 'OSCP',
    countBadge: '1 Certified',
    title: 'Offensive Security Certified Professional',
    issuer: 'OffSec',
    badge: 'Hands-on Penetration Testing',
    description: 'Rigorous 24-hour practical penetration testing examination proving real-world adversary simulation, exploit modification, and attack mitigation.',
    icon: <FaFingerprint />,
    skills: ['Adversary Simulation', 'Privilege Escalation', 'Buffer Overflow & Exploits', 'Penetration Testing'],
    level: 'OffSec Certified',
  },
];

export default function CyberCertifications() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCerts = selectedCategory === 'all'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.category === selectedCategory);

  return (
    <section className="cert-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="cert-header text-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="cert-eyebrow">
            <FaCertificate className="me-2 text-warning" />
            Accreditations & Competencies
          </div>
          <h2 className="section-heading text-start">
            Service Capabilities & Security Certifications
          </h2>
          <p className="cap-description text-start mx-auto">
            Our multi-disciplinary security engineering team holds globally recognized industry accreditations, delivering validated technical excellence, regulatory compliance, and resilient defense postures.
          </p>
        </motion.div>

       

        {/* Filter Tabs */}
        <div className="cert-tabs-wrapper">
          <div className="cert-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`cert-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="cert-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                className="cert-card"
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
              >
                <div className="cert-card-top-bar" />
                <div className="cert-card-inner">
                  {/* Card Header */}
                  <div className="cert-card-header">
                    <div className="cert-icon-wrapper">
                      {cert.icon}
                    </div>
                    <div className="cert-badges-group">
                      <div className="d-flex align-items-center gap-2">
                        <span className="cert-badge-code">{cert.code}</span>
                        {cert.countBadge && <span className="cert-badge-count">{cert.countBadge}</span>}
                      </div>
                      <span className="cert-badge-level">{cert.level}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">
                    <FaAward className="me-1 text-warning opacity-75" />
                    <span>{cert.issuer}</span>
                  </div>
                  <p className="cert-description">{cert.description}</p>

                  {/* Skills Tag Pills */}
                  <div className="cert-skills-list">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="cert-skill-tag">
                        <FaCheckCircle className="cert-skill-check" />
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="cert-card-footer">
                    <span className="cert-verified-label">
                      <span className="cert-status-dot" /> Verified Competency
                    </span>
                    <span className="cert-focus-tag">{cert.badge}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

       
      </div>
    </section>
  );
}
