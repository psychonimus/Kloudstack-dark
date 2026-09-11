import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './UnifiedDataGovernance.css';

const UDG_DATA = [
    {
        id: 'iam',
        number: '01',
        category: 'ZERO-TRUST IAM',
        title: 'Zero-Trust Identity & Access Management (IAM)',
        description:
            'We design and deploy robust Zero-Trust Network Access (ZTNA) frameworks utilizing Microsoft Entra ID (formerly Azure Active Directory). By enforcing strict, context-aware access policies and Multi-Factor Authentication (MFA), we protect directory services from credential theft and prevent lateral threat movement.',
        tags: ['ZTNA Deployment', 'Entra ID', 'MFA Enforcement'],
        image: '/images/zero-trust-iam.png',
    },
    {
        id: 'purview',
        number: '02',
        category: 'DATA GOVERNANCE',
        title: 'Enterprise Data Governance with Microsoft Purview',
        description:
            'We deploy Microsoft Purview to automate data discovery, classify sensitive information, and enforce strict Data Loss Prevention (DLP) policies across the entire digital estate, ensuring rigorous adherence to GDPR, HIPAA, and PCI-DSS.',
        tags: ['Data Classification', 'DLP Policies', 'Compliance Readiness'],
        image: '/images/enterprise-data-gov.png',
    },
    {
        id: 'xdr',
        number: '03',
        category: 'THREAT DETECTION',
        title: 'Extended Detection and Response (XDR)',
        description:
            'Integrating Microsoft Defender to provide continuous monitoring and automated remediation across endpoints, cloud workloads, and collaboration suites.',
        tags: ['Microsoft Defender', 'Endpoint Security', 'Auto-Remediation'],
        image: '/images/extended-detection-and-responce.png',
    },
    {
        id: 'siem',
        number: '04',
        category: 'SECURITY OPERATIONS',
        title: 'Intelligent Security Operations (SIEM)',
        description:
            'Architecting Microsoft Sentinel to aggregate massive volumes of security data, leveraging machine learning to automate threat detection and response at cloud scale.',
        tags: ['Microsoft Sentinel', 'ML Threat Detection', 'Cloud-Scale SIEM'],
        image: '/images/siem.png',
    },
];

const UnifiedDataGovernance = () => {
    const [activeTab, setActiveTab] = useState('iam');

    const activeData = UDG_DATA.find((d) => d.id === activeTab);

    return (
        <section className="udg-section">
            <div className="container">
                {/* Header */}
                <div className="udg-header">
                    <h2 className="section-heading text-center">
                        Unified Data Governance & Microsoft Security
                    </h2>
                    <p className="cap-description text-start">
                        A comprehensive Microsoft-powered security stack that enforces zero-trust access, governs your entire data estate, and delivers intelligent threat detection — all engineered by KloudStack to meet the most demanding compliance mandates.
                    </p>
                </div>

                {/* Tab Bar */}
                <div className="udg-tab-bar">
                    {UDG_DATA.map((item) => (
                        <button
                            key={item.id}
                            className={`udg-tab-btn ${activeTab === item.id ? 'udg-tab-btn--active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <span className="udg-tab-num">{item.number}</span>
                            <span className="udg-tab-label">{item.category}</span>
                        </button>
                    ))}
                </div>

                {/* Content Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="udg-content-panel"
                    >
                        {/* Left — Text */}
                        <div className="udg-panel-text">
                            <h3 className="udg-panel-title">{activeData.title}</h3>
                            <p className="udg-panel-desc">{activeData.description}</p>

                            <motion.div
                                className="udg-tags-row"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
                                }}
                            >
                                {activeData.tags.map((tag, i) => (
                                    <motion.span
                                        key={i}
                                        className="udg-tag-pill"
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.9 },
                                            visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                                        }}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right — Visual */}
                        <div className="udg-panel-visual">
                            <img src={activeData.image} alt={activeData.title} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default UnifiedDataGovernance;