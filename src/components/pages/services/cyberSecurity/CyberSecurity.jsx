import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaDotCircle, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import ApplicationPerimeter from './applicationPerimeter/ApplicationPerimeter';
import UnifiedDataGovernance from './UnifiedDataGovernance/UnifiedDataGovernance';
import DPDPAAssessment from './DPDPAAssessment/DPDPAAssessment';
import DPDPServicesFramework from './DPDPServicesFramework/DPDPServicesFramework';
import CyberServiceCatalogue from './CyberServiceCatalogue/CyberServiceCatalogue';
import CyberCertifications from './CyberCertifications/CyberCertifications';
import DefenseEcosystem from './DefenseEcosystem/DefenseEcosystem';
import CyberOutcomes from './CyberOutcomes/CyberOutcomes';
import './CyberSecurity.css';

const CyberSecurity = () => {

    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !imageRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Only animate while visible
            if (rect.bottom > 0 && rect.top < windowHeight) {
                const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

                // Movement amount (adjust to your liking)
                const translateY = (progress - 0.5) * 150;

                imageRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <>
            <section className="hero-section d-flex flex-column justify-content-center">
                <video
                    className="hero-section-video-bg"
                    src="/videos/cloud-bg-2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="container content-overlay">
                    <div className="hero-text">
                        <div className="service-badge mb-3"><FaDotCircle className='me-2 mb-1' size={12} />Enterprise Cyber Security</div>
                        <h2 className='hero-section-heading mb-4 section-heading text-start'>Proactive Cyber Defense: <br className="d-none d-md-block" /> Securing the Borderless Enterprise.</h2>
                        <p className='hero-section-para text-start'>KloudStack’s Enterprise Security practice engineers highly resilient, proactive defense postures that protect your critical assets without impeding operational velocity. Our security methodology orchestrates zero-trust architectures, advanced compliance frameworks, and cutting-edge threat intelligence. </p> <br />
                        <p className='hero-section-para text-start'>By aligning our extensive infrastructure engineering expertise with premier ecosystem partners, primarily Indusface for unparalleled application defense, integrated seamlessly with Microsoft for comprehensive data governance, we transition your organization from a reactive security stance to an adaptive, predictive model of total enterprise protection. </p>
                    </div>
                </div>
            </section>

            <section className="px-3 px-md-5 hero-image">
                <div className="hero-img-container" ref={containerRef}>
                    <img
                        ref={imageRef}
                        src="/images/cybersecurity.png"
                        alt="About"
                    />
                </div>
            </section>

            <div className="mt-5">
                <ApplicationPerimeter />
            </div>
            <UnifiedDataGovernance />
            <DPDPAAssessment />
            <DPDPServicesFramework />
            <CyberServiceCatalogue />
            <CyberCertifications />
            <DefenseEcosystem />
            <CyberOutcomes />

            {/* Floating Quick Assessment Button */}
            <motion.div 
                className="cyber-assessment-floating-wrap"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                <Link 
                    to="/cyber-risk-assessment" 
                    className="cyber-assessment-floating-btn"
                    aria-label="Take a Quick Cybersecurity Assessment"
                >
                    <span className="cyber-btn-icon-box">
                        <span className="cyber-btn-pulse"></span>
                        <FaShieldAlt />
                    </span>
                    <span className="cyber-btn-label">
                        <span className="cyber-btn-sub">Interactive Tool</span>
                        <span className="cyber-btn-title">Take a Quick Cybersecurity Assessment</span>
                    </span>
                    <FaArrowRight className="cyber-btn-arrow" />
                </Link>
            </motion.div>
        </>
    )
}

export default CyberSecurity