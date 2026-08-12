import React, {useEffect, useRef} from 'react'
import './CloudInfraHero.css'
import { FaDotCircle } from "react-icons/fa";

const CloudInfraHero = () => {

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
                        <div className="service-badge mb-3"><FaDotCircle className='me-2 mb-1' size={12} />Cloud & Hybrid Foundations</div>
                        <h2 className='hero-section-heading mb-4 section-heading text-start'>Architecting Agile, Resilient, and Unified Cloud Foundations for the Modern Enterprise.</h2>
                        <p className='hero-section-para text-start'>Architecting Agile, Resilient, and Unified Cloud Foundations for the Modern Enterprise.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 hero-image">
                <div className="hero-img-container" ref={containerRef}>
                    <img
                        ref={imageRef}
                        src="/images/cloud-tech.png"
                        alt="About"
                    />
                </div>
            </section>
        </>
    )
}

export default CloudInfraHero