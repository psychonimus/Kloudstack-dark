import React from 'react';
import { motion } from 'framer-motion';
import './DefenseEcosystem.css';


const PARTNER_GROUPS = [
  {
    id: 'perimeter',
    category: 'Perimeter, Edge & Zero Trust',
    partners: [
      // {
      //   name: 'Fortinet',
      //   logo: '/images/alliance-logos/fortniet.svg',
      //   role: 'Perimeter Firewall Defense',
      //   desc: 'Enterprise-grade next-generation firewalls for comprehensive perimeter security and advanced threat protection.',
      //   tags: ['NGFW', 'Perimeter Defense'],
      // },
      // {
      //   name: 'Zscaler',
      //   role: 'ZTNA & CSPM',
      //   logo: '/images/alliance-logos/zscaler.svg',
      //   desc: 'Zero Trust Network Access, Cloud Security Posture Management, and CASB capabilities for cloud-native architectures.',
      //   tags: ['ZTNA', 'CASB', 'CSPM'],
      // },
      // {
      //   name: 'Netskope',
      //   logo: '/images/alliance-logos/netskope.svg',
      //   role: 'CASB & Secure Access',
      //   desc: 'Inline cloud security, data protection, and secure access for modern hybrid workforces accessing cloud services.',
      //   tags: ['CASB', 'SWG', 'Zero Trust'],
      // },
      {
        name: 'Cloudflare',
        logo: '/images/alliance-logos/cloudflare.svg',
        role: 'ZTNA & Edge Security',
        desc: 'Edge security, Zero Trust Network Access (ZTNA), Secure Web Gateway, and application protection through a globally distributed network.',
        tags: ['Zero Trust Network Access', 'Secure Web Gateway', 'DDoS & WAF Protection']
      },
      {
        name: 'Akamai',
        logo: '/images/alliance-logos/akamai.svg',
        role: 'Edge Security & WAF',
        desc: 'Enterprise-grade edge security, application protection, and Zero Trust access solutions for digital assets and applications.',
        tags: ['Edge Security & WAF', 'Zero Trust Enterprise Access', 'App & API Protection']
      }
    ],
  },
  {
    id: 'access',
    category: 'Access Control & Lifecycle Automation',
    partners: [
      // {
      //   name: 'i Raje',
      //   role: 'PIM / PAM',
      //   logo: '/images/alliance-logos/iraje.svg',
      //   desc: 'Specialized Privileged Identity Management and Privileged Access Management pathways for sensitive enterprise accounts.',
      //   tags: ['PIM', 'PAM', 'Privileged Access'],
      // },
      // {
      //   name: 'BigFix',
      //   role: 'Patch & Compliance',
      //   logo: '/images/alliance-logos/bigfix.svg',
      //   desc: 'Automated endpoint patch management, configuration compliance validation, and software distribution across large estates.',
      //   tags: ['Patch Mgmt', 'Compliance'],
      // },
      // {
      //   name: 'ManageEngine',
      //   logo: '/images/alliance-logos/manageengine.svg',
      //   role: 'SSO & MFA',
      //   desc: 'Unified identity platform covering SSO, MFA validation loops, and IT operations management for access lifecycle control.',
      //   tags: ['SSO', 'MFA', 'IAM'],
      // },
      {

        name: 'SailPoint',
        logo: '/images/alliance-logos/sailpoint.svg',
        role: 'IGA',
        desc: 'Identity Governance and Administration (IGA) platform enabling automated access management and compliance.',
        tags: ['Identity Governance', 'Access Management Automation', 'Compliance & Audit Controls']
      },
      {
        name: 'Saviynt',
        role: 'IGA',
        logo: '/images/alliance-logos/saviynt.svg',
        desc: 'Cloud-native identity security platform supporting identity governance, access management, and lifecycle automation.',
        tags: ['Cloud-Native IGA', 'Identity Lifecycle Automation', 'Application Access Governance']
      },
      {
        name: 'Okta',
        logo: '/images/alliance-logos/okta.svg',
        role: 'IAM',
        desc: 'Identity and Access Management (IAM) platform offering secure authentication, SSO, and user lifecycle management.',
        tags: ['Single Sign-On (SSO)', 'Multi-Factor Authentication', 'User Lifecycle Management']
      }
    ],
  },
  {
    id: 'endpoint',
    category: 'Endpoint Detection & Analysis',
    partners: [
      // {
      //   name: 'Trend Micro',
      //   role: 'EDR & XDR',
      //   logo: '/images/alliance-logos/trendmicro.svg',
      //   desc: 'Endpoint Detection and Response combined with Extended Detection and Response for comprehensive behavioral infrastructure visibility across the enterprise.',
      //   tags: ['EDR', 'XDR', 'Behavioral Analytics'],
      // },
      {
        name: 'Sophos',
        role: 'MDR',
        logo: '/images/alliance-logos/sophos.svg',
        desc: 'Endpoint security and Managed Detection & Response (MDR) solution focused on proactive threat monitoring and response.',
        tags: ['Managed Detection & Response', 'Endpoint Threat Hunting', 'Synchronized Security']
      }
    ],
  },
  {
    id: 'application-api',
    category: 'Application & API Security',
    partners: [
      {
        name: 'Burp Suite',
        logo: '/images/alliance-logos/burpsuite.svg',
        role: 'Application Security',
        desc: 'Extensive experience in utilizing Burp Suite Professional for comprehensive web application and API security assessments, identifying vulnerabilities aligned with OWASP Top 10 and industry best practices. Our expertise includes manual penetration testing, automated vulnerability discovery, API security testing, authentication and session management analysis, and secure application validation across development and production environments.',
        tags: ['Manual Penetration Testing', 'Automated Vulnerability Discovery', 'API Security Testing']
      }
    ]
  }
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
          <h2 className="section-heading text-start">Technology Ecosystem Expertise</h2>
          <p className="cap-description text-start ">
            Our expertise spans a broad ecosystem of leading security, identity, compliance, and application technologies, enabling us to design, integrate and support solutions aligned to specific enterprise requirements.
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
                      <img src={partner.logo} style={{ width: "140px" }} alt={partner.name} />
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
