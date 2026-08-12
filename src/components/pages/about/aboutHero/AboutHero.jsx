import React, { useEffect, useRef } from 'react'
import './AboutHero.css'


const AboutHero = () => {

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
                    src="/videos/background-vid-2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="container content-overlay">
                    <div className="hero-text text-center">
                        <h2 className='hero-section-heading mb-4 section-heading text-center '>Empowering Enterprise Transformation <br /> Through Strategic IT Enablement</h2>
                        <p className='hero-section-para'>At KloudStack, we bridge the gap between boardroom objectives and flawless technical execution. We specialize in delivering Next-Generation IT Infrastructure and Strategic Enablement, partnering with forward-looking organizations to shift technology from a static operational cost center into a sustainable competitive advantage. Through 24/7 predictive maintenance, unified multi-cloud architectures, and zero-trust proactive threat hunting, our strategic advisory practice ensures every IT investment directly drives measurable business outcomes.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 hero-image">
                <div className="hero-img-container" ref={containerRef}>
                    <img
                        ref={imageRef}
                        src="/images/about-img.png"
                        alt="About"
                    />
                </div>
            </section>
        </>
    )
}

export default AboutHero