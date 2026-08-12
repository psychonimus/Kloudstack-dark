import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ImageAccordion.css'

import img1 from '/images/cyber-security.png'
import img2 from '/images/cloud-2.png'
import img3 from '/images/modular.png'
import img4 from '/images/operational_continuity-2.png'
import img5 from '/images/ai-and-security.png'

const items = [
  {
    id: 1,
    img: img1,
    title: 'Cybersecurity & ZTNA',
    subtitle: 'Pervasive End-to-End Security, Zero Trust Network Access, WAAP, Extended Detection & Response (XDR), and global compliance frameworks.',
    url: '',
  },
  {
    id: 2,
    img: img5,
    title: 'AI & Security Intelligence',
    subtitle: 'End-to-end artificial intelligence strategies, predictive threat intelligence, automated compliance, and intelligent SOC augmentation.',
    url: '',
  },
  {
    id: 3,
    img: img2,
    title: 'Cloud & Hybrid Foundations',
    subtitle: 'Seamless workload migration, infrastructure modernization, high-availability enterprise networking, and cost-optimized delivery.',
    url: '',
  },
  
  {
    id: 4,
    img: img4,
    title: 'Operational Continuity',
    subtitle: 'Next-generation SOC & NOC intelligence centers ensuring zero-downtime resilience and complete product lifecycle management.',
    url: '',
  },
  {
    id: 5,
    img: img3,
    title: 'Modular Open-Source Stack',
    subtitle: 'Accelerating modern app engineering via scalable microservices frameworks, IaC automated testing, and containerized deployment.',
    url: '',
  },
  

]

const ImageAccordion = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="ia-section pt-5 pb-4" aria-label="Image Accordion">
      <div className="container">
        <div className="os-left mb-4">
          <p className="os-eyebrow mb-2">What We Do</p>
          <h2 className="os-headline section-heading text-start mb-2">
            CORE
            TECHNOLOGY
            OFFERINGS
          </h2>
          <p className="os-body">
            Beyond our strategic AI and Security imperatives, our holistic
            infrastructure practices ensure secure, highly available, and
            scalable operations across your entire digital estate.
          </p>

        </div>
        <div className="ia-wrapper">
          {items.map((item) => {
            const isActive = hovered === item.id
            const isIdle = hovered !== null && hovered !== item.id

            return (
              <motion.div
                key={item.id}
                className={`ia-panel${isActive ? ' ia-panel--active' : ''}${isIdle ? ' ia-panel--idle' : ''}`}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  flex: isActive ? 3.2 : isIdle ? 0.55 : 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Background Image */}
                <motion.div
                  className="ia-img-wrap"
                  animate={{ scale: isActive ? 1 : 1 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img src={item.img} alt={item.title} className="ia-img" />
                </motion.div>

                {/* Gradient overlay */}
                <div className="ia-overlay" />

                {/* Label — always visible but repositions on expand */}
                <div className="ia-label">
                  {/* Vertical label shown when collapsed */}
                  <motion.span
                    className="ia-label-vertical"
                    animate={{ opacity: isActive ? 0 : isIdle ? 0.7 : 1 }}
                    transition={{ duration: 0.35 }}
                  >
                    {item.title}
                  </motion.span>

                  {/* Bottom label shown when expanded */}
                  <motion.div
                    className="ia-label-bottom"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                    transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
                  >
                    <p className="ia-label-title">{item.title}</p>
                    <p className="ia-label-subtitle">{item.subtitle}</p>
                    <button class="learn-more mt-2">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
                  </motion.div>
                </div>

                {/* Corner number */}
                <motion.span
                  className="ia-number"
                  animate={{ opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.35 }}
                >
                  {String(item.id + 1).padStart(2, '0')}
                </motion.span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImageAccordion
