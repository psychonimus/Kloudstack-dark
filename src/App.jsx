import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import CloudInfrastructure from './components/pages/services/cloudInfrastructure/CloudInfrastructure'
import CyberSecurity from './components/pages/services/cyberSecurity/CyberSecurity'
import Contact from './components/pages/contact/Contact'
import ProductsCyberSecurity from './components/pages/products/cyberSecurity/ProductsCyberSecurity'
import AISolutions from './components/pages/products/aiSolutions/AISolutions'
import LMS from './components/pages/products/lms/LMS'
import AiIntelligence from './components/pages/services/aiIntelligence/AiIntelligence'
import OperationalContinuity from './components/pages/services/operationalContinuity/OperationalContinuity'
import ModularOpenStack from './components/pages/services/modularOpenStack/ModularOpenStack'
import Resources from './components/pages/resources/Resources'
import CybersecurityGrowthStrategy from './components/pages/resources/blogDetail/CybersecurityGrowthStrategy'
import ThirdPartyVendorRisk from './components/pages/resources/blogDetail/ThirdPartyVendorRisk'
import AIBankingSecurity from './components/pages/resources/blogDetail/AIBankingSecurity'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    window.lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    // GSAP Context for cleanup in React StrictMode
    const ctx = gsap.context(() => {
      // Find all elements with .section-heading and animate them on scroll
      gsap.utils.toArray('.section-heading').forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none none' // Play once, don't reverse on scroll up
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out'
        });
      });
    });

    return () => {
      window.lenis = null;
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services/cloud-infrastructure' element={<CloudInfrastructure />} />
        <Route path='/services/cyber-security' element={<CyberSecurity />} />
        <Route path='/products/cyber-security' element={<ProductsCyberSecurity />} />
        <Route path='/products/ai-solutions' element={<AISolutions />} />
        <Route path='/products/lms' element={<LMS />} />
        <Route path='/services/ai-intelligence' element={<AiIntelligence />} />
        <Route path='/services/operational-continuity' element={<OperationalContinuity />} />
        <Route path='/services/modular-open-source-stack' element={<ModularOpenStack />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/resources/cybersecurity-growth-strategy' element={<CybersecurityGrowthStrategy />} />
        <Route path='/resources/third-party-vendor-risk' element={<ThirdPartyVendorRisk />} />
        <Route path='/resources/ai-transforming-banking-security' element={<AIBankingSecurity />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App