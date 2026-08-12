import React from 'react';
import { motion } from 'framer-motion';
import './DefenseEcosystem.css';

const PARTNER_GROUPS = [
  {
    id: 'perimeter',
    category: 'Perimeter, Edge & Zero Trust',
    partners: [
      {
        name: 'Fortinet',
        logo : '/images/alliance-logos/fortniet.svg',
        role: 'Perimeter Firewall Defense',
        desc: 'Enterprise-grade next-generation firewalls for comprehensive perimeter security and advanced threat protection.',
        tags: ['NGFW', 'Perimeter Defense'],
      },
      {
        name: 'Zscaler',
        role: 'ZTNA & CSPM',
        logo : '/images/alliance-logos/zscaler.svg',
        desc: 'Zero Trust Network Access, Cloud Security Posture Management, and CASB capabilities for cloud-native architectures.',
        tags: ['ZTNA', 'CASB', 'CSPM'],
      },
      {
        name: 'Netskope',
        logo : '/images/alliance-logos/netskope.svg',
        role: 'CASB & Secure Access',
        desc: 'Inline cloud security, data protection, and secure access for modern hybrid workforces accessing cloud services.',
        tags: ['CASB', 'SWG', 'Zero Trust'],
      },
    ],
  },
  {
    id: 'access',
    category: 'Access Control & Lifecycle Automation',
    partners: [
      {
        name: 'i Raje',
        role: 'PIM / PAM',
        logo : '/images/alliance-logos/iraje.svg',
        desc: 'Specialized Privileged Identity Management and Privileged Access Management pathways for sensitive enterprise accounts.',
        tags: ['PIM', 'PAM', 'Privileged Access'],
      },
      {
        name: 'BigFix',
        role: 'Patch & Compliance',
        logo : '/images/alliance-logos/bigfix.svg',
        desc: 'Automated endpoint patch management, configuration compliance validation, and software distribution across large estates.',
        tags: ['Patch Mgmt', 'Compliance'],
      },
      {
        name: 'ManageEngine',
        logo : '/images/alliance-logos/manageengine.svg',
        role: 'SSO & MFA',
        desc: 'Unified identity platform covering SSO, MFA validation loops, and IT operations management for access lifecycle control.',
        tags: ['SSO', 'MFA', 'IAM'],
      },
    ],
  },
  {
    id: 'endpoint',
    category: 'Endpoint Detection & Analysis',
    partners: [
      {
        name: 'Trend Micro',
        role: 'EDR & XDR',
        logo : '/images/alliance-logos/trendmicro.svg',
        desc: 'Endpoint Detection and Response combined with Extended Detection and Response for comprehensive behavioral infrastructure visibility across the enterprise.',
        tags: ['EDR', 'XDR', 'Behavioral Analytics'],
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const DefenseEcosystem = () => {
  return (
    <section className="de-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="de-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* <span className="de-eyebrow">Partner Ecosystem</span> */}
          <h2 className="section-heading text-start">Comprehensive Defense Partner Ecosystem</h2>
          <p className="cap-description text-start ">
            KloudStack strategically deploys and supports targeted solutions from key alliance partners to complement
            our primary application, compliance, and identity strategies.
          </p>
        </motion.div>

        {/* Partner Group Blocks */}
        <div className="de-groups">
          {PARTNER_GROUPS.map((group, gIdx) => (
            <div key={group.id} className="de-group">
              {/* Group Label */}
              <motion.div
                className="de-group-label"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: gIdx * 0.05 }}
              >
                <span className="de-group-line" />
                <span className="de-group-name">{group.category}</span>
              </motion.div>

              {/* Partner Cards */}
              <motion.div
                className={`de-cards-grid de-cards-count-${group.partners.length}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={containerVariants}
              >
                {group.partners.map((partner, pIdx) => (
                  <motion.div key={pIdx} className="de-partner-card" variants={itemVariants}>
                    <div className="de-card-top-bar" />
                    <div className="de-card-header">
                      <img src={partner.logo} style={{width:"140px"}} alt={partner.name} />
                      <span className="de-role-tag">{partner.role}</span>
                    </div>
                    <h3 className="de-partner-name">{partner.name}</h3>
                    <p className="de-partner-desc">{partner.desc}</p>
                    <div className="de-tags-row">
                      {partner.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="de-tag-pill">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefenseEcosystem;
