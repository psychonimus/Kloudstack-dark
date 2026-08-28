import React, { useEffect, useRef } from 'react'
import { FaDotCircle } from 'react-icons/fa'
import AiPhilosophy from './AiPhilosophy/AiPhilosophy'
import AiCapabilities from './AiCapabilities/AiCapabilities'
import AiOutcomes from './AiOutcomes/AiOutcomes'

const AiIntelligence = () => {

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
                    src="/videos/ai-bg.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="container content-overlay">
                    <div className="hero-text">
                        <div className="service-badge mb-3"><FaDotCircle className='me-2 mb-1' size={12} />Enterprise AI & Analytics</div>
                        <h2 className='hero-section-heading mb-4 section-heading text-start' style={{ width: "fit-content" }}>
                            Enterprise AI & Intelligent Automation: <br /> Engineering the Cognitive Business.
                        </h2>
                        <p className='hero-section-para text-start'>
                            In the modern digital economy, data generation outpaces human processing capacity. KloudStack's AI & Analytics practice bridges the gap between boardroom objectives and flawless technical execution by embedding advanced artificial intelligence and automation directly into the core of your enterprise.
                        </p> <br />
                        <p className='hero-section-para text-start'>
                            We engineer solutions that shift your technology from a reactive burden into a proactive, intelligent engine for growth — architecting AI-ready infrastructure and intelligent automation frameworks that ensure unparalleled precision, governance, and operational efficiency.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-5 hero-image">
                <div className="hero-img-container" ref={containerRef}>
                    <img
                        ref={imageRef}
                        src="/images/ai-img.jpg"
                        alt="AI & Analytics"
                    />
                </div>
            </section>

            <AiPhilosophy />
            <AiCapabilities />
            <AiOutcomes />
        </>
    )
}

export default AiIntelligence