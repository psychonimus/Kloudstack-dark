import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AISolutions = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 40% 30%, rgba(212,160,74,0.08) 0%, transparent 60%), #050505',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(212,160,74,0.09) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '120px', paddingBottom: '80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="service-badge mb-3">
            <FaDotCircle className="me-2 mb-1" size={12} />
            AI Solutions
          </div>
          <h1 className="section-heading text-start" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', maxWidth: '700px' }}>
            Intelligent AI Solutions <br />Coming Soon
          </h1>
          <p style={{ fontFamily: "'Inter', 'DM Sans', sans-serif", fontSize: '1.05rem', lineHeight: 1.72, color: 'rgba(255,255,255,0.6)', maxWidth: '520px', marginTop: '1.5rem' }}>
            Our AI-powered solutions for governance, risk automation, and intelligent compliance are currently in development. Stay tuned.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginTop: '2.5rem',
              padding: '14px 32px',
              background: 'linear-gradient(90deg, #d4a04a, #b8860b)',
              color: '#ffffff',
              fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              borderRadius: '50px',
              boxShadow: '0 4px 20px rgba(212,160,74,0.3)',
              transition: 'transform 0.25s ease',
            }}
          >
            Get Notified
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AISolutions;
