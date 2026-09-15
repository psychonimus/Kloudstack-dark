import React, { useEffect, useRef } from 'react';
import { FaDotCircle } from 'react-icons/fa';
import LifecycleFramework from './LifecycleFramework/LifecycleFramework';
import OpenSourceEcosystem from './OpenSourceEcosystem/OpenSourceEcosystem';
import ModularOutcomes from './ModularOutcomes/ModularOutcomes';
import './ModularOpenStack.css';

const ModularOpenStack = () => {
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
      {/* 1. Executive Summary & Market Imperative (Hero Section) */}
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
          <div className="hero-text">
            <div className="service-badge mb-3">
              <FaDotCircle className="me-2 mb-1" size={12} /> Modular Open-Source Stack
            </div>
            <h2 className="hero-section-heading mb-4 section-heading text-start" style={{ width: 'fit-content' }}>
              Accelerating Software Delivery and Engineering Velocity via Enterprise Open-Source Orchestration.
            </h2>
            <p className="hero-section-para text-start">
              In the era of hyper-scaled software architecture, legacy development cycles and proprietary vendor lock-in create significant barriers to innovation, scaling, and market agility. Modern enterprises require highly composable, standardized, and secure environments that decouple application development from underlying infrastructural constraints.
            </p>
            <br />
            <p className="hero-section-para text-start">
              KloudStack’s Modular Open-Source Stack practice delivers an enterprise-grade framework designed to optimize software delivery across the entire engineering lifecycle: Build, Test, and Deploy. By orchestrating top-tier open-source technologies with Infrastructure as Code (IaC) and declarative pipelines, we help organizations accelerate engineering throughput, eliminate proprietary licensing overhead, and ensure predictable, secure software delivery at cloud scale.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Parallax Banner Image */}
      <section className="px-5 hero-image">
        <div className="hero-img-container" ref={containerRef}>
          <img
            ref={imageRef}
            src="/images/modular.png"
            alt="Modular Open-Source Stack Orchestration"
          />
        </div>
      </section>

      {/* 2. The Core Lifecycle Framework (Build, Test, Deploy) */}
      <LifecycleFramework />

      {/* 3. Supported Open-Source & Enterprise Ecosystem */}
      <OpenSourceEcosystem />

      {/* 4. Strategic Business Outcomes */}
      <ModularOutcomes />
    </>
  );
};

export default ModularOpenStack;
