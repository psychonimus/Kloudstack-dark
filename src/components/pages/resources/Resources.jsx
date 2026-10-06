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
    previewImages: [
      '/docs/kswp-preview-1.png',
      '/docs/kswp-preview-2.png',
      '/docs/kswp-preview-3.png',
      '/docs/kswp-preview-4.png',
    ],
    downloadHref: '/docs/kloudstack-whitepaper.pdf',
    pages: '38 Pages',
    year: '2025',
  },

  {
    id: 2,
    image: '/images/dpdpa.png',
    tag: 'Data Privacy & Governance',
    title: 'The DPDPA Readiness Blueprint for Banks',
    subtitle:
      'A Practical Guide to Building Trust Through Data Governance',
    keypoints: [
      'Navigating DPDPA obligations—and turning compliance into a competitive advantage',
      'The 5-pillar trust framework: Consent, Transparency, Control, Accountability, and Security',
      'Aligning with global standards (GDPR, ISO 27701) while meeting unique Indian regulatory needs',
      'Practical roadmap: Data mapping, consent workflows, and breach-ready response playbooks',
      'Case studies from leading Indian banks that turned DPDPA compliance into market trust',
    ],
    previewImages: [
      '/docs/kswp2-preview-1.png',
      '/docs/kswp2-preview-2.png',
      '/docs/kswp2-preview-3.png',
      '/docs/kswp2-preview-4.png',
    ],
    downloadHref: '/docs/kloudstack-whitepaper-2.pdf',
    pages: '25 Pages',
    year: '2026',
  },

  {
    id: 3,
    image: '/images/dpdpa.png',
    tag: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    title: 'Before Hackers Find It',
    subtitle:
      'The Executive Guide to VAPT & Continuous Security Testing',
    keypoints: [
      'Why traditional perimeter security fails in today’s hybrid-cloud reality',
      'The mindset shift: From periodic audits to continuous security validation',
      'Real-world case studies: The cost of ignoring vulnerabilities vs the ROI of proactive testing',
      'The hybrid-first playbook: Integrating VAPT into cloud-native, DevOps, and remote-first environments',
      'Beyond checklists: Building a security culture that hunts for weaknesses before attackers do',
    ],
    previewImages: [
      '/docs/kswp3-preview-1.png',
      '/docs/kswp3-preview-2.png',
      '/docs/kswp3-preview-3.png',
      '/docs/kswp3-preview-4.png',
    ],
    downloadHref: '/docs/kloudstack-whitepaper-3.pdf',
    pages: '55 Pages',
    year: '2026',
  },

  {
    id: 4,
    image: '/images/dpdpa.png',
    tag: 'Managed Security Services Provider (MSSP)',
    title: 'The Modern SOC Playbook',
    subtitle:
      'From Monitoring to Cyber Resilience',
    keypoints: [
      'Why traditional perimeter security fails in today’s hybrid-cloud reality',
      'The mindset shift: From periodic audits to continuous security validation',
      'Real-world case studies: The cost of ignoring vulnerabilities vs the ROI of proactive testing',
      'The hybrid-first playbook: Integrating VAPT into cloud-native, DevOps, and remote-first environments',
      'Beyond checklists: Building a security culture that hunts for weaknesses before attackers do',
    ],
    previewImages: [
      '/docs/kswp4-preview-1.png',
      '/docs/kswp4-preview-2.png',
      '/docs/kswp4-preview-3.png',
      '/docs/kswp4-preview-4.png',
    ],
    downloadHref: '/docs/kloudstack-whitepaper-4.pdf',
    pages: '13 Pages',
    year: '2026',
  },
  
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
const DocCarousel = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!slides || slides.length === 0) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [slides])

  if (!slides || slides.length === 0) return null

  return (
    <div className="doc-carousel">
      <div className="doc-carousel-frame">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current]}
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
        {slides.map((_, idx) => (
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
          <DocCarousel slides={paper.previewImages} />
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
    image: '/images/operational_continuity.png',
    industry: 'Manufacturing & Agri-Tech',
    title: 'Safeguarding Enterprise Manufacturing with Cloud-Native Disaster Recovery',
    excerpt:
      'Engineered an elastic AWS EDR & SAP HANA replication pilot-light architecture for VST Tillers, achieving sub-hour RTO and 40–60% TCO savings.',
    metrics: [
      { label: 'RTO SLA', value: '< 60 Min' },
      { label: 'RPO Target', value: 'Near-Zero' },
      { label: 'TCO Saved', value: '40–60%' },
    ],
    link: '/resources/manufacturing-cloud-disaster-recovery',
  },
  {
    id: 2,
    image: '/images/security-built-in.png',
    industry: 'Global Shipping & Logistics',
    title: 'Securing Global Maritime Operations with Zero Trust Architecture',
    excerpt:
      'Modernized SI Shipping’s remote infrastructure across 300+ personnel with Check Point Harmony ZTNA, slashing security incidents by 60% and operational TCO by 25%.',
    metrics: [
      { label: 'Threats Cut', value: '60%' },
      { label: 'Speed Boost', value: '40%' },
      { label: 'TCO Saved', value: '25%' },
    ],
    link: '/resources/maritime-zero-trust-architecture',
  },
  {
    id: 3,
    image: '/images/ai_security_intelligence.png',
    industry: 'Automotive & Manufacturing',
    title: 'Fortifying Manufacturing Enterprise Networks Against Advanced Cyber Threats',
    excerpt:
      'Engineered a perimeter security overhaul for India’s premier auto enterprise, eliminating 117k+ botnet attacks and plummeting critical intrusions from 97.2% to 6.7%.',
    metrics: [
      { label: 'Threat Drop', value: '97% → 6.7%' },
      { label: 'Botnets Cut', value: '117k+' },
      { label: 'IPS Hardened', value: '10.5k+' },
    ],
    link: '/resources/manufacturing-network-threat-fortification',
  },
  {
    id: 4,
    image: '/images/cloud-without-complexity.png',
    industry: 'Enterprise Manufacturing',
    title: 'Accelerating Operational Agility through AWS Cloud Transformation',
    excerpt:
      'Migrated a 6TB mission-critical Dealer Management System (DMS) to AWS with zero unscheduled downtime, boosting performance by 25% and cutting TCO by 20–30%.',
    metrics: [
      { label: 'Performance', value: '+20–25%' },
      { label: 'TCO Reduction', value: '20–30%' },
      { label: 'Cut-Over SLA', value: '6–7 Hrs' },
    ],
    link: '/resources/cloud-transformation-aws-migration',
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
            <h1 className="hero-section-heading mb-4 section-heading text-start res-hero-heading">
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
                In-depth analyses from KloudStack's practice leads, each paper synthesises real-world
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
