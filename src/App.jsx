import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/home/Home'
import Footer from './components/Footer/Footer'

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
      <Home />
      <Footer />
    </>
  )
}

export default App