import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import CloudInfrastructure from './components/pages/services/cloudInfrastructure/CloudInfrastructure'
import CyberSecurity from './components/pages/services/cyberSecurity/CyberSecurity'
import Contact from './components/pages/contact/Contact'
import ProductsCyberSecurity from './components/pages/products/cyberSecurity/ProductsCyberSecurity'
import AISolutions from './components/pages/products/aiSolutions/AISolutions'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

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
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services/cloud-infrastructure' element={<CloudInfrastructure />} />
        <Route path='/services/cyber-security' element={<CyberSecurity />} />
        <Route path='/products/cyber-security' element={<ProductsCyberSecurity />} />
        <Route path='/products/ai-solutions' element={<AISolutions />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App