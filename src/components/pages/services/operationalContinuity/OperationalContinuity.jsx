import React, { useEffect, useRef } from 'react'
import { FaDotCircle } from 'react-icons/fa'
import BcpPillars from './BcpPillars/BcpPillars'
import BcpTechMatrix from './BcpTechMatrix/BcpTechMatrix'
import BcpLifecycle from './BcpLifecycle/BcpLifecycle'
import BcpOutcomes from './BcpOutcomes/BcpOutcomes'

const OperationalContinuity = () => {

    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !imageRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.bottom > 0 && rect.top < windowHeight) {
                const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                const translateY = (progress - 0.5) * 150;
                imageRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <>
            <section className="hero-section d-flex flex-column justify-content-center">
                <video
                    className="hero-section-video-bg"
                    src="/videos/ai-bg.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="container content-overlay">
                    <div className="hero-text">
                        <div className="service-badge mb-3">
                            <FaDotCircle className='me-2 mb-1' size={12} />Disaster Recovery & BCP
                        </div>
                        <h2 className='hero-section-heading mb-4 section-heading text-start' style={{ width: 'fit-content' }}>
                            Architecting Cyber-Resilient Business <br /> Continuity Foundations for the <br /> Uninterrupted Enterprise.
                        </h2>
                        <p className='hero-section-para text-start'>
                            In an era of hyper-distributed workloads, sophisticated ransomware threats, and unpredictable macroeconomic disruptions, operational downtime is no longer just a technical failure — it is a material business crisis.
                        </p><br />
                        <p className='hero-section-para text-start'>
                            KloudStack's Disaster Recovery & BCP practice delivers next-generation operational resilience engineered to mitigate systemic risk, satisfy stringent compliance mandates, and protect institutional data asset value. By integrating best-in-class recovery frameworks with premier technology alliances — Commvault and Perpetuuiti — we guarantee near-zero data loss and rapid service restoration across complex hybrid and multi-cloud environments.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-5 hero-image">
                <div className="hero-img-container" ref={containerRef}>
                    <img
                        ref={imageRef}
                        src="/images/oc-img.png"
                        alt="Disaster Recovery & Business Continuity"
                    />
                </div>
            </section>

            <BcpPillars />
            <BcpTechMatrix />
            <BcpLifecycle />
            <BcpOutcomes />
        </>
    )
}

export default OperationalContinuity
