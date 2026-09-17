import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaDotCircle } from 'react-icons/fa'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Resources.css'

/* ─── White Papers Data ─── */
const WHITE_PAPERS = [
  {
    id: 1,
    image: '/images/whitepaper-1.png',
    tag: 'Security Architecture',
    title: 'Zero Trust Security Architecture in Hybrid Cloud Environments',
    subtitle:
      'A comprehensive analysis of Zero Trust principles applied to multi-cloud and hybrid infrastructure deployments.',
    keypoints: [
      'ZTNA framework design across public, private & edge clouds',
      'Identity-centric micro-segmentation strategies',
      'Continuous verification & least-privilege access models',
      'Compliance alignment: NIST 800-207, ISO 27001, SOC 2',
    ],
    downloadHref: '/docs/kloudstack-whitepaper.pdf',
    pages: '38 Pages',
    year: '2025',
  },
  // {
  //   id: 2,
  //   image: '/images/whitepaper-2.png',
  //   tag: 'AI & Cyber Intelligence',
  //   title: 'AI-Driven SOC Transformation: Redefining Enterprise Cyber Resilience',
  //   subtitle:
  //     'How next-generation AI automation is radically reducing Mean Time to Detect and Respond (MTTD/MTTR) in enterprise SOC operations.',
  //   keypoints: [
  //     'AI/ML-powered threat detection & predictive analytics',
  //     'Automated SOAR playbooks reducing analyst fatigue',
  //     'XDR integration with unified telemetry pipelines',
  //     'Real-world MTTD reduction benchmarks & ROI analysis',
  //   ],
  //   downloadHref: '/docs/kloudstack-whitepaper.pdf',
  //   pages: '44 Pages',
  //   year: '2025',
  // },
]

/* ─── Blog Posts Data ─── */
const BLOG_POSTS = [
  {
    id: 1,
    image: '/images/cybersecurity.png',
    category: 'Cybersecurity Strategy',
    readTime: '6 min read',
    date: 'Aug 12, 2025',
    title: "Cybersecurity is No Longer an IT Budget. It’s a Business Growth Strategy",
    excerpt:
      'Today, cybersecurity has fundamentally transformed into a strategic business enabler—building trust, accelerating digital adoption, and unlocking revenue.',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    accentColor: '#5b9cf6',
    link: '/resources/cybersecurity-growth-strategy',
  },
  {
    id: 2,
    image: '/images/zts.png',
    category: 'Third-Party Risk',
    readTime: '5 min read',
    date: 'Jul 28, 2025',
    title: 'The Silent Cyber Risk: Third-Party Vendors Could Be Your Biggest Vulnerability',
    excerpt:
      'Over 50% of organizations have experienced a breach caused by a third party. Here is why vendor risk is a board-level priority and how to architect a resilient vendor ecosystem.',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d1010 100%)',
    accentColor: '#d4a04a',
    link: '/resources/third-party-vendor-risk',
  },
  {
    id: 3,
    image: '/images/ai-and-security.png',
    category: 'AI & Financial Security',
    readTime: '7 min read',
    date: 'Jul 10, 2025',
    title: 'AI is Transforming Banking Faster Than Security Can Keep Up',
    excerpt:
      'From algorithmic credit to autonomous fraud detection, AI is reshaping banking. Here is why security teams struggle to keep pace and how to govern AI risk.',
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #102d10 100%)',
    accentColor: '#6be88a',
    link: '/resources/ai-transforming-banking-security',
  },
  {
    id: 4,
    image: '/images/cyber-security.png',
    category: 'Security Metrics & Governance',
    readTime: '6 min read',
    date: 'Jun 24, 2025',
    title: 'Your Cybersecurity Dashboard Is Full of Metrics. But Are You Measuring What Matters?',
    excerpt:
      'The dashboard paradox: more metrics, less clarity. Learn why activity metrics fail, what security metrics boards actually care about, and how to build an executive cyber scorecard.',
    gradient: 'linear-gradient(135deg, #10121a 0%, #1a1e2d 100%)',
    accentColor: '#4a90e2',
    link: '/resources/cybersecurity-dashboard-metrics',
  },
  {
    id: 5,
    image: '/images/cubersecurity-img.jpg',
    category: 'Strategic Cyber Leadership',
    readTime: '5 min read',
    date: 'Jun 12, 2025',
    title: "The Biggest Cybersecurity Mistakes Aren't Technical. They're Strategic.",
    excerpt:
      "Most breaches don't happen because a firewall rule was misconfigured. They happen because leadership treated cybersecurity as an IT problem instead of a business risk.",
    gradient: 'linear-gradient(135deg, #241408 0%, #150c05 100%)',
    accentColor: '#d4a04a',
    link: '/resources/strategic-cybersecurity-mistakes',
  },
  {
    id: 6,
    image: '/images/extended-detection-and-responce.png',
    category: 'Incident Response & Crisis Management',
    readTime: '6 min read',
    date: 'May 29, 2025',
    title: 'What Happens After a Cyberattack? The First 24 Hours Decide Everything',
    excerpt:
      'In the first hours of an attack, attackers are still active, data may be exfiltrating, and every decision matters. Learn how to contain, coordinate crisis roles, and recover.',
    gradient: 'linear-gradient(135deg, #1b0a0a 0%, #2f1212 100%)',
    accentColor: '#f87171',
    link: '/resources/cyberattack-first-24-hours',
  },
]

/* ─── Doc Preview Carousel Images ─── */
const CAROUSEL_SLIDES = [
  '/docs/kswp-preview-1.png',
  '/docs/kswp-preview-2.png',
  '/docs/kswp-preview-3.png',
  '/docs/kswp-preview-4.png',
]

/* ─── Fade-up Wrapper ─── */
const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Doc Preview Carousel ─── */
const DocCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CAROUSEL_SLIDES.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="doc-carousel">
      <div className="doc-carousel-frame">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={CAROUSEL_SLIDES[current]}
            alt={`White Paper Preview ${current + 1}`}
            className="doc-carousel-img"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        {/* decorative stacked pages behind */}
        <div className="doc-carousel-page doc-carousel-page--1" />
        <div className="doc-carousel-page doc-carousel-page--2" />
      </div>

      {/* dot nav */}
      <div className="doc-carousel-dots">
        {CAROUSEL_SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`doc-dot${idx === current ? ' doc-dot--active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ─── White Paper Card ─── */
const WhitePaperCard = ({ paper, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeUp delay={index * 0.12}>
      <div
        className={`wp-card${hovered ? ' wp-card--hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left — carousel preview */}
        <div className="wp-preview">
          <DocCarousel />
        </div>

        {/* Right — content */}
        <div className="wp-content">
          <div className="wp-meta">
            <span className="wp-tag">{paper.tag}</span>
            <span className="wp-meta-sep">·</span>
            <span className="wp-meta-info">{paper.pages}</span>
            <span className="wp-meta-sep">·</span>
            <span className="wp-meta-info">{paper.year}</span>
          </div>

          <h3 className="wp-title">{paper.title}</h3>
          <p className="wp-subtitle">{paper.subtitle}</p>

          <ul className="wp-keypoints">
            {paper.keypoints.map((kp, i) => (
              <li key={i} className="wp-keypoint">
                <span className="wp-keypoint-dot" />
                {kp}
              </li>
            ))}
          </ul>

          <a href={paper.downloadHref} className="wp-download-btn" download>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="wp-dl-icon">
              <path d="M12 3v13M7 11l5 5 5-5M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download White Paper
          </a>
        </div>

        {/* Hover glow */}
        <div className="wp-card-glow" />
      </div>
    </FadeUp>
  )
}

/* ─── Blog Card ─── */
const BlogCard = ({ post, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeUp delay={index * 0.1}>
      <article
        className={`blog-card${hovered ? ' blog-card--hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ '--blog-accent': post.accentColor }}
      >
        {/* Card Cover Image */}
        <div className="blog-card-band">
          {post.image ? (
            <img src={post.image} alt={post.title} className="blog-card-cover-img" />
          ) : (
            <div className="blog-card-gradient-bg" style={{ background: post.gradient }} />
          )}
          <div className="blog-card-cover-overlay" />
        </div>

        {/* Content */}
        <div className="blog-card-body">
          <div className="blog-card-meta">
            <span className="blog-category">{post.category}</span>
            {/* <span className="blog-meta-sep">·</span> */}
            {/* <span className="blog-read-time">{post.readTime}</span> */}
            {/* <span className="blog-meta-sep">·</span> */}
            {/* <span className="blog-date">{post.date}</span> */}
          </div>

          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-excerpt">{post.excerpt}</p>
        </div>

        {/* Card Footer / Read More */}
        <div className="blog-card-footer">
          

          <Link to={post.link || '/resources/cybersecurity-growth-strategy'} className="blog-read-more">
            Read Blog
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="blog-arrow">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* accent line on hover */}
        <div className="blog-card-accent-line" />
      </article>
    </FadeUp>
  )
}

/* ─── Case Studies Data ─── */
const CASE_STUDIES = [
  {
    id: 1,
    image: '/images/security-built-in.png',
    industry: 'Financial Services',
    title: 'Zero Trust SOC Transformation for Multi-Cloud Banking',
    excerpt:
      'Engineered an automated detection and response fabric across 10M+ daily transactions, maintaining 100% SEBI CSF compliance.',
    metrics: [
      { label: 'MTTR Cut', value: '65%' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Compliance', value: '100%' },
    ],
    link: '/contact',
  },
  {
    id: 2,
    image: '/images/ai_security_intelligence.png',
    industry: 'Healthcare',
    title: 'Securing 50+ Hospital Workloads & Patient Telemetry',
    excerpt:
      'Deployed continuous posture monitoring and cyber risk quantification to protect sensitive healthcare data across 10,000+ endpoints.',
    metrics: [
      { label: 'Endpoints', value: '10k+' },
      { label: 'Prevented Loss', value: '$2.4M' },
      { label: 'Breach Count', value: '0' },
    ],
    link: '/contact',
  },
  {
    id: 3,
    image: '/images/cloud-without-complexity.png',
    industry: 'Enterprise Cloud',
    title: 'Multi-Cloud Resilience & Insurability Optimization',
    excerpt:
      'Transformed cloud governance into quantifiable insurability telemetry, securing premier tier cyber coverage with 40% premium savings.',
    metrics: [
      { label: 'Premium Saved', value: '40%' },
      { label: 'Underwriting', value: '3x Faster' },
      { label: 'Disaster RTO', value: '15 Min' },
    ],
    link: '/contact',
  },
]

/* ─── Case Study Card ─── */
const CaseStudyCard = ({ study, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeUp delay={index * 0.12} className="cs-card-wrapper">
      <article
        className={`cs-card${hovered ? ' cs-card--hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Cover Image */}
        <div className="cs-card-cover">
          <img src={study.image} alt={study.title} className="cs-cover-img" />
          <div className="cs-cover-overlay" />
          <span className="cs-industry-badge">{study.industry}</span>
        </div>

        {/* Card Body */}
        <div className="cs-card-body">
          <h3 className="cs-title">{study.title}</h3>
          <p className="cs-excerpt">{study.excerpt}</p>

          {/* Metrics Bar */}
          <div className="cs-metrics-grid">
            {study.metrics.map((m, i) => (
              <div key={i} className="cs-metric-box">
                <span className="cs-metric-value">{m.value}</span>
                <span className="cs-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="cs-card-footer">
          <Link to={study.link || '/contact'} className="cs-read-link">
            <span>Explore Case Study</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="cs-arrow">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="cs-accent-glow" />
      </article>
    </FadeUp>
  )
}

/* ─── Section Label ─── */
const SectionLabel = ({ children }) => (
  <div className="res-section-label">
    <span className="res-label-dot" />
    {children}
  </div>
)

/* ─── Main Component ─── */
const Resources = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const wh = window.innerHeight
      if (rect.bottom > 0 && rect.top < wh) {
        const progress = (wh - rect.top) / (wh + rect.height)
        const ty = (progress - 0.5) * 150
        imageRef.current.style.transform = `translate3d(0, ${ty}px, 0)`
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="hero-section res-hero d-flex flex-column justify-content-center">
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
              <FaDotCircle className="me-2 mb-1" size={12} />
              Knowledge Hub
            </div>
            <h1 className="hero-section-heading mb-4 section-heading text-start res-hero-heading" style={{ width: 'fit-content' }}>
              Insights, Research Intelligence for the Enterprise Edge.
            </h1>
            <p className="hero-section-para text-start res-hero-para">
              Explore KloudStack's curated library of white papers, technical deep-dives, case studies, and
              thought-leadership articles — distilled from thousands of enterprise engagements
              across cybersecurity, cloud infrastructure, AI operations and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ── White Papers ─────────────────────────── */}
      <section className="res-section res-wp-section">
        {/* Background grid */}
        <div className="res-bg-grid" />

        <div className="container">
          <FadeUp>
            <div className="res-section-header">
              <SectionLabel>Research &amp; Publications</SectionLabel>
              <h2 className="res-section-title section-heading">
                White Papers &amp; Technical Reports
              </h2>
              <p className="res-section-desc text-start">
                In-depth analyses from KloudStack's practice leads — each paper synthesises real-world
                deployment experience with emerging research.
              </p>
            </div>
          </FadeUp>

          <div className="wp-list">
            {WHITE_PAPERS.map((paper, idx) => (
              <WhitePaperCard key={paper.id} paper={paper} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies Section ─────────────────── */}
      <section className="res-section res-cs-section">
        <div className="res-bg-grid" />

        <div className="container">
          <FadeUp>
            <div className="res-section-header">
              <SectionLabel>Proven Impact</SectionLabel>
              <h2 className="res-section-title section-heading">
                Customer Success &amp; Case Studies
              </h2>
              <p className="res-section-desc text-start">
                Explore how leading enterprises solve critical cybersecurity, compliance, and multi-cloud resilience challenges with KloudStack.
              </p>
            </div>
          </FadeUp>

          <div className="cs-grid">
            {CASE_STUDIES.map((study, idx) => (
              <CaseStudyCard key={study.id} study={study} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Blogs ────────────────────────────────── */}
      <section className="res-section res-blogs-section">
        <div className="res-bg-grid res-bg-grid--offset" />

        <div className="container">
          <FadeUp>
            <div className="res-section-header">
              <SectionLabel>Thought Leadership</SectionLabel>
              <h2 className="res-section-title section-heading">
                Latest Insights Articles
              </h2>
              <p className="res-section-desc text-start">
                Perspectives from KloudStack's senior leadership on technology trends, strategic
                decisions, and the future of enterprise IT.
              </p>
            </div>
          </FadeUp>

          <div className="blogs-grid">
            {BLOG_POSTS.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Resources
