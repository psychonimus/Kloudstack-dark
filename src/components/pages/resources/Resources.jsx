import React, { useEffect, useRef, useState } from 'react'
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
    downloadHref: '#',
    pages: '38 Pages',
    year: '2025',
  },
  {
    id: 2,
    image: '/images/whitepaper-2.png',
    tag: 'AI & Cyber Intelligence',
    title: 'AI-Driven SOC Transformation: Redefining Enterprise Cyber Resilience',
    subtitle:
      'How next-generation AI automation is radically reducing Mean Time to Detect and Respond (MTTD/MTTR) in enterprise SOC operations.',
    keypoints: [
      'AI/ML-powered threat detection & predictive analytics',
      'Automated SOAR playbooks reducing analyst fatigue',
      'XDR integration with unified telemetry pipelines',
      'Real-world MTTD reduction benchmarks & ROI analysis',
    ],
    downloadHref: '#',
    pages: '44 Pages',
    year: '2025',
  },
]

/* ─── Blog Posts Data ─── */
const BLOG_POSTS = [
  {
    id: 1,
    category: 'Cloud Strategy',
    readTime: '7 min read',
    date: 'Aug 12, 2025',
    title: "Why Multi-Cloud Is No Longer Optional: A CTO Perspective on Workload Portability",
    excerpt:
      'As vendor lock-in risks escalate and regulatory pressures mount, enterprises are rearchitecting their infrastructure around portability-first principles.',
    authorName: 'Shyaam Sunder',
    authorRole: 'Chief Technology Officer',
    authorImg: '/images/shyaam-sir.png',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    accentColor: '#5b9cf6',
  },
  {
    id: 2,
    category: 'Cybersecurity',
    readTime: '5 min read',
    date: 'Jul 28, 2025',
    title: 'Ransomware Readiness in 2025: Building a Layered Cyber Defense That Actually Works',
    excerpt:
      "Modern ransomware campaigns exploit trust gaps between security layers. Here is how to architect a defence posture that closes those gaps before attackers do.",
    authorName: 'Jawad Siddiqui',
    authorRole: 'Head of Cybersecurity',
    authorImg: '/images/jawad-sir.png',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d1010 100%)',
    accentColor: '#d4a04a',
  },
  {
    id: 3,
    category: 'AI & Automation',
    readTime: '6 min read',
    date: 'Jul 10, 2025',
    title: 'From Reactive to Predictive: Deploying AI Agents in Enterprise IT Operations',
    excerpt:
      'AIOps platforms are evolving from monitoring dashboards into autonomous reasoning agents. We explore real deployment patterns and the operational outcomes they unlock.',
    authorName: 'Vishal Kapoor',
    authorRole: 'VP – AI & Analytics',
    authorImg: '/images/vishal-sir.png',
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #102d10 100%)',
    accentColor: '#6be88a',
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
        {/* Left — document preview */}
        <div className="wp-preview">
          <div className="wp-preview-inner">
            <img src={paper.image} alt={paper.title} className="wp-img" />
            <div className="wp-preview-overlay">
              <span className="wp-preview-label">Preview</span>
            </div>
          </div>
          {/* decorative shadow pages */}
          <div className="wp-shadow-page wp-shadow-page--1" />
          <div className="wp-shadow-page wp-shadow-page--2" />
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
        {/* Card top gradient band */}
        <div className="blog-card-band" style={{ background: post.gradient }} />

        {/* Content */}
        <div className="blog-card-body">
          <div className="blog-card-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read-time">{post.readTime}</span>
            <span className="blog-meta-sep">·</span>
            <span className="blog-date">{post.date}</span>
          </div>

          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-excerpt">{post.excerpt}</p>
        </div>

        {/* Author + Read More */}
        <div className="blog-card-footer">
          <div className="blog-author">
            <div className="blog-author-avatar">
              <img src={post.authorImg} alt={post.authorName} />
            </div>
            <div className="blog-author-info">
              <span className="blog-author-name">{post.authorName}</span>
              <span className="blog-author-role">{post.authorRole}</span>
            </div>
          </div>

          <a href="#" className="blog-read-more">
            Read Article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="blog-arrow">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* accent line on hover */}
        <div className="blog-card-accent-line" />
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
            <h1 className="hero-section-heading mb-4 section-heading text-start res-hero-heading" style={{width:"fit-content"}}>
              Insights, Research Intelligence for the Enterprise Edge.
            </h1>
            <p className="hero-section-para text-start res-hero-para">
              Explore KloudStack's curated library of white papers, technical deep-dives, and
              thought-leadership articles — distilled from thousands of enterprise engagements
              across cybersecurity, cloud infrastructure, AI operations and beyond.
            </p>

            {/* Stat pills */}
            <div className="res-hero-stats">
              {[
                { value: '12+', label: 'White Papers' },
                { value: '40+', label: 'Expert Articles' },
                { value: '6', label: 'Practice Areas' },
              ].map((s) => (
                <div key={s.label} className="res-stat-pill">
                  <span className="res-stat-value">{s.value}</span>
                  <span className="res-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
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
                White Papers Technical Reports
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
              <p className="res-section-desc">
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

          <FadeUp delay={0.3}>
            <div className="res-blogs-cta">
              <a href="#" className="res-view-all-btn">
                View All Articles
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

export default Resources
