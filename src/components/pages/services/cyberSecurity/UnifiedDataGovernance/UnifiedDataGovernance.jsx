import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import './UnifiedDataGovernance.css';

const UDG_DATA = [
    {
        id: '01',
        number: '01',
        title: 'Zero-Trust Identity & Access Management (IAM)',
        headline: 'Data Discovery & Classification',
        description:
            'We design and deploy robust Zero-Trust Network Access (ZTNA) frameworks utilizing Microsoft Entra ID (formerly Azure Active Directory). By enforcing strict, context-aware access policies and Multi-Factor Authentication (MFA), we protect directory services from credential theft and prevent lateral threat movement.',
        tags: ['Positioning', 'Visual Identity', 'Design System'],
        shapeType: 'swirl',
    },
    {
        id: '02',
        number: '02',
        title: 'Enterprise Data Governance with Microsoft Purview',
        headline: 'Zero-Trust Access & Governance',
        description:
            'We deploy Microsoft Purview to automate data discovery, classify sensitive information, and enforce strict Data Loss Prevention (DLP) policies across the entire digital estate, ensuring rigorous adherence to GDPR, HIPAA, and PCI-DSS.',
        tags: ['Conversion Rate Optimization', 'Analytics', 'A/B Testing'],
        shapeType: 'star',
    },
    {
        id: '03',
        number: '03',
        title: 'Extended Detection and Response (XDR)',
        headline: 'Autonomous Risk & DLP Remediation',
        description:
            'Integrating Microsoft Defender to provide continuous monitoring and automated remediation across endpoints, cloud workloads, and collaboration suites.',
        tags: ['Content Strategy', 'Creative Production', 'Campaign Management'],
        shapeType: 'sphere',
    },
    {
        id: '04',
        number: '04',
        title: 'Intelligent Security Operations (SIEM)',
        headline: 'Continuous DPDP Act & Audit Readiness',
        description:
            'Architecting Microsoft Sentinel to aggregate massive volumes of security data, leveraging machine learning to automate threat detection and response at cloud scale.',
        tags: ['DPDPA Assessment', 'Audit Trail', 'Regulatory Reporting'],
        shapeType: 'ring',
    },
];

// SVG 3D Shapes Renderer
const ShapeGraphic = ({ type }) => {
    if (type === 'swirl') {
        return (
            <img src='/images/zero-trust-iam.png' style={{ width: "100%" }} />
        );
    }

    if (type === 'star') {
        return (
            <img src='/images/enterprise-data-gov.png' style={{ width: "100%" }} />
        );
    }

    if (type === 'sphere') {
        return (
            <img src='/images/extended-detection-and-responce.png' style={{ width: "100%" }} />
        );
    }

    return (
        <img src='/images/siem.png' style={{ width: "100%" }} />
    );
};

const UnifiedDataGovernance = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        // Map scroll progress 0 -> 1 into index 0 -> UDG_DATA.length - 1
        const newIndex = Math.min(
            Math.floor(latest * UDG_DATA.length),
            UDG_DATA.length - 1
        );
        if (newIndex !== activeIndex && newIndex >= 0) {
            setActiveIndex(newIndex);
        }
    });

    const currentStep = UDG_DATA[activeIndex];

    // Arc calculation for step indicators
    // We place steps on a circle arc: angle offsets relative to active step
    const radius = 320;

    return (
        <section className="udg-scroll-section" ref={containerRef}>
            <div className="udg-sticky-container">
                {/* Left Arc Wheel */}
                <div className="udg-arc-container">
                    <svg className="udg-arc-svg" viewBox="0 0 500 800">
                        {/* Background Arc Line */}
                        <path
                            d="M -50, 50 A 380,380 0 0,1 -50, 750"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.12)"
                            strokeWidth="1.5"
                        />
                    </svg>

                    {/* Active Red Dot Pivot Indicator */}
                    <div className="udg-pivot-indicator">
                        <span className="udg-red-dot" />
                    </div>

                    {/* Step Numbers orbiting along the Arc */}
                    <div className="udg-numbers-orbit">
                        {UDG_DATA.map((step, idx) => {
                            const offset = idx - activeIndex;
                            // Y displacement relative to center
                            const translateY = offset * 115;
                            // X displacement along arc curvature
                            const translateX = (1 - Math.cos((offset * 20 * Math.PI) / 180)) * -35;
                            const isActive = idx === activeIndex;

                            return (
                                <motion.div
                                    key={step.id}
                                    className={`udg-orbit-number ${isActive ? 'udg-num-active' : ''}`}
                                    animate={{
                                        y: translateY,
                                        x: translateX,
                                        opacity: isActive ? 1 : Math.max(0.15, 0.45 - Math.abs(offset) * 0.15),
                                        scale: isActive ? 2.6 : 0.85,

                                    }}
                                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    <span>{step.number}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Center Content Section */}
                <div className="udg-content-wrapper">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep.id}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -25 }}
                            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="udg-content-body"
                        >
                            <h2 className="udg-title">{currentStep.title}</h2>
                            <p className="udg-description">{currentStep.description}</p>

                            <div className="udg-tags-row">
                                {currentStep.tags.map((tag, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                                        className="udg-tag-pill"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right 3D Visual Graphic */}
                <div className="udg-graphic-wrapper">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep.id}
                            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
                            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="udg-graphic-inner"
                        >
                            <ShapeGraphic type={currentStep.shapeType} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default UnifiedDataGovernance;