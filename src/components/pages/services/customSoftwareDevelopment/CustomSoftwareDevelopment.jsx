import React from 'react';
import { motion } from 'framer-motion';
import {
  LuBot,
  LuDatabase,
  LuGlobe,
  LuLayers,
  LuLayoutGrid,
  LuLock,
  LuMonitor,
  LuNetwork,
  LuRefreshCw,
  LuSearchCode,
  LuServer,
  LuSettings,
  LuShieldCheck,
  LuSmartphone,
  LuTrendingUp,
  LuUsers,
  LuChevronRight,
  LuFileText,
  LuRocket,
  LuCpu,
  LuArrowRight,
  LuSparkles,
} from 'react-icons/lu';
import { Link } from 'react-router-dom';
import './CustomSoftwareDevelopment.css';

const STACK_CARDS = [
  {
    id: 'frontend-mobile',
    topIcon: <LuMonitor />,
    titlePrefix: 'Frontend & Mobile',
    titleGold: 'Engineering',
    items: [
      {
        icon: <LuGlobe />,
        label: 'Web',
        sub: 'TypeScript, JavaScript, React.js',
      },
      {
        icon: <LuSmartphone />,
        label: 'Mobile',
        sub: 'Flutter (Native-feel cross-platform execution)',
      },
    ],
  },
  {
    id: 'backend-data',
    topIcon: <LuDatabase />,
    titlePrefix: 'Backend &',
    titleGold: 'Data Architecture',
    items: [
      {
        icon: <LuServer />,
        label: 'Backend',
        sub: 'Node.js, Express.js',
      },
      {
        icon: <LuDatabase />,
        label: 'Database',
        sub: 'MongoDB',
      },
    ],
  },
  {
    id: 'quality-assurance',
    topIcon: <LuSettings />,
    titlePrefix: 'Quality',
    titleGold: 'Assurance',
    items: [
      {
        icon: <LuShieldCheck />,
        label: 'Automated & Manual',
        sub: 'Testing Frameworks',
      },
    ],
  },
  {
    id: 'zero-trust',
    topIcon: <LuLock />,
    titlePrefix: 'Zero-Trust',
    titleGold: 'Security Protocols',
    items: [
      {
        icon: <LuServer />,
        label: 'Infrastructure',
        sub: 'Hardening, backups, and compliance-ready deployment.',
      },
      {
        icon: <LuUsers />,
        label: 'Access',
        sub: 'Role-based access control (RBAC) and secure API gateways.',
      },
      {
        icon: <LuShieldCheck />,
        label: 'Data',
        sub: 'Encrypted data states and secure multi-tenant architecture.',
      },
    ],
  },
];

const CAPABILITIES_DATA = [
  {
    id: 'apis-modernisation',
    titlePrefix: 'Custom Engineering :',
    titleGold: 'APIs & System Modernisation',
    subtext: 'We transform disconnected infrastructure into modern, cloud-native microservices.',
    cards: [
      {
        id: 'discovery-audit',
        icon: <LuSearchCode />,
        title: 'Discovery & Audit',
        desc: 'Rigorous requirement mapping and architectural blueprinting before a single line of code is written.',
      },
      {
        id: 'bespoke-api',
        icon: <LuNetwork />,
        title: 'Bespoke API Architecture',
        desc: 'Building secure, high-throughput microservices and APIs to connect disconnected enterprise tools.',
      },
      {
        id: 'legacy-modernisation',
        icon: <LuRefreshCw />,
        title: 'Legacy Modernisation',
        desc: 'Rebuilding outdated monolithic on-premise systems into agile, cloud-native enterprise applications. Full IP ownership transfer upon deployment.',
      },
    ],
  },
  {
    id: 'uiux-frontend',
    titlePrefix: 'UI/UX &',
    titleGold: 'Frontend Engineering',
    subtext: 'Translating complex workflows into intuitive user journeys.',
    cards: [
      {
        id: 'interface-mapping',
        icon: <LuLayoutGrid />,
        title: 'Interface Mapping',
        desc: 'Translating complex workflows into intuitive user journeys using advanced prototyping tools.',
      },
      {
        id: 'high-fidelity',
        icon: <LuLayers />,
        title: 'High-Fidelity Prototyping',
        desc: 'Validating user interactions and logic flows prior to development sprints.',
      },
      {
        id: 'cross-platform',
        icon: <LuSmartphone />,
        title: 'Cross-Platform Execution',
        desc: 'Deploying responsive, high-performance web applications via React.js and native-feel mobile experiences via Flutter.',
      },
    ],
  },
];

const USE_CASES_DATA = [
  {
    id: 'use-case-1',
    number: 'Use Case 1:',
    title: 'Enterprise Application Modernisation',
    points: [
      {
        label: 'The Challenge (Before)',
        icon: <LuLayers />,
        text: 'Over-reliance on disconnected off-the-shelf tools, fragmented data silos, and legacy systems that bottleneck scale.',
      },
      {
        label: 'Our Architecture',
        icon: <LuNetwork />,
        text: 'Full-stack bespoke engineering to map unique business logic. Custom API gateways built via Node.js to bridge legacy databases with modern cloud infrastructure.',
      },
      {
        label: 'The Impact (After)',
        icon: <LuTrendingUp />,
        text: '100% IP ownership. Elimination of manual reconciliation. Unrestricted scalability without third-party licensing constraints. Unified architecture and continuous data streams.',
      },
    ],
  },
  {
    id: 'use-case-2',
    number: 'Use Case 2:',
    title: 'External Partner Enablement Portal',
    points: [
      {
        label: 'The Challenge',
        icon: <LuUsers />,
        text: 'Difficulty standardising knowledge, SOPs, and product updates for external vendors, channel partners, and franchise networks.',
      },
      {
        label: 'Our Architecture',
        icon: <LuFileText />,
        text: 'A white-labelled, mobile-responsive external portal. Integration of an AI Learning Assistant for 24/7 on-demand query resolution via secure messaging APIs.',
      },
      {
        label: 'The Impact',
        icon: <LuTrendingUp />,
        text: 'Real-time tracking of partner compliance and competency. Reduced support desk headcount costs. Always-on first response for partner queries.',
      },
    ],
  }]
const DEPLOYMENT_STRATEGY_STEPS = [
  {
    step: '01',
    title: 'Discovery & Audit',
    desc: 'Rigorous business-IT alignment, architecture mapping, and security auditing.',
    icon: <LuSearchCode />,
  },
  {
    step: '02',
    title: 'Prototype & Architecture',
    desc: 'High-fidelity wireframing, cloud infrastructure provisioning, and API blueprinting.',
    icon: <LuLayoutGrid />,
  },
  {
    step: '03',
    title: 'Full-Stack Engineering',
    desc: 'Agile development sprints, CI/CD pipeline integration, and rigorous QA testing.',
    icon: <LuCpu />,
  },
  {
    step: '04',
    title: 'Managed Deployment',
    desc: 'Zero-disruption migration, 24/7 proactive threat hunting, and continuous predictive maintenance.',
    icon: <LuShieldCheck />,
  },
  {
    step: '05',
    title: 'Launch',
    desc: 'Your custom software goes live, fully secured and optimized for scale.',
    icon: <LuRocket />
  }
]

const CustomSoftwareDevelopment = () => {
  return (
    <>
      {/* SECTION 1 — HERO SECTION */}
      <section className="csd-hero-section">
        <div className="csd-hero-bg-glow" aria-hidden="true" />
        <div className="csd-hero-grid-overlay" aria-hidden="true" />

        <div className="container csd-hero-container">
          <div className="csd-hero-row">
            <motion.div
              className="csd-hero-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="csd-hero-heading">
                Custom Software Development:{' '}
                <span className="csd-hero-gold">Strategic IT. Measurable Impact.</span>
              </h1>

              <p className="csd-hero-para">
                We engineer secure, scalable, and bespoke digital solutions that
                modernise legacy systems, eliminate data silos, and drive
                enterprise growth.
              </p>

              <div className="csd-hero-btn-wrap">
                <Link to="/contact" className="csd-hero-btn">
                  <span>Schedule a Discovery &amp; Audit</span>
                  <span className="csd-hero-btn-arrow">&rarr;</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="csd-hero-right"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="csd-hero-image-wrapper">
                <img
                  src="/images/custom-software-hero.png"
                  alt="Custom Software Development Architecture"
                  className="csd-hero-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE STACK & SECURITY PROTOCOLS */}
      <section className="csd-stack-section">
        <div className="container csd-stack-container">
          <div className="csd-stack-top-row">
            <motion.div
              className="csd-stack-header-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="csd-stack-title">
                The Stack &amp; <span className="csd-stack-gold">Security Protocols</span>
              </h2>
              <p className="csd-stack-desc">
                We leverage modern, high-performance technologies to build robust
                applications backed by Zero-Trust security.
              </p>
            </motion.div>
          </div>

          <div className="csd-cards-grid">
            {STACK_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                className="csd-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1 + 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="csd-card-header">
                  <div className="csd-card-top-icon">{card.topIcon}</div>
                  <h3 className="csd-card-title">
                    {card.titlePrefix}{' '}
                    <span className="csd-card-title-gold">{card.titleGold}</span>
                  </h3>
                </div>

                <div className="csd-card-list">
                  {card.items.map((item, i) => (
                    <div key={i} className="csd-list-item">
                      <div className="csd-item-icon-circle">{item.icon}</div>
                      <div className="csd-item-text">
                        <span className="csd-item-label">{item.label}</span>
                        <span className="csd-item-sub">{item.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR ENGINEERING CAPABILITIES */}
      <section className="csd-capabilities-section">
        <div className="container csd-capabilities-container">
          <motion.div
            className="csd-capabilities-header-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="csd-section-tag">OUR ENGINEERING CAPABILITIES</div>
          </motion.div>

          {CAPABILITIES_DATA.map((block) => (
            <div key={block.id} className="csd-cap-block">
              <motion.div
                className="csd-cap-block-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2 className="csd-cap-heading">
                  {block.titlePrefix}{' '}
                  <span className="csd-cap-gold">{block.titleGold}</span>
                </h2>
                <p className="csd-cap-desc">{block.subtext}</p>
              </motion.div>

              <div className="csd-cap-cards-grid">
                {block.cards.map((card, idx) => (
                  <motion.div
                    key={card.id}
                    className="csd-cap-card"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.1 + 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <div className="csd-cap-card-icon">{card.icon}</div>
                    <h3 className="csd-cap-card-title">{card.title}</h3>
                    <p className="csd-cap-card-desc">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — PROVEN USE CASES */}
      <section className="csd-use-cases-section">
        <div className="container csd-use-cases-container">
          <div className="csd-puc-layout">
            <div className="csd-puc-left">
              <motion.div
                className="csd-puc-main-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <div className="csd-puc-gold-bar" />
                <h2 className="csd-puc-main-title">
                  Proven <span className="csd-puc-gold-text">Use Cases</span>
                </h2>
              </motion.div>

              <div className="csd-puc-list">
                {USE_CASES_DATA.map((useCase, idx) => (
                  <React.Fragment key={useCase.id}>
                    {idx > 0 && <div className="csd-puc-divider" />}
                    <motion.div
                      className="csd-puc-block"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: idx * 0.1 }}
                    >
                      <div className="csd-puc-subtag">
                        <span className="csd-puc-subtag-bar" />
                        <span className="csd-puc-subtag-text">{useCase.number}</span>
                      </div>
                      <h3 className="csd-puc-case-title">{useCase.title}</h3>

                      <div className="csd-puc-cards-row">
                        {useCase.points.map((pt, pIdx) => (
                          <React.Fragment key={pIdx}>
                            <div className="csd-puc-card">
                              <div className="csd-puc-card-header">
                                <div className="csd-puc-card-icon">{pt.icon}</div>
                                <h4 className="csd-puc-card-title">{pt.label}</h4>
                              </div>
                              <p className="csd-puc-card-text">{pt.text}</p>
                            </div>
                            {pIdx < useCase.points.length - 1 && (
                              <div className="csd-puc-arrow" aria-hidden="true">
                                <LuChevronRight />
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </motion.div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <motion.div
              className="csd-puc-right"
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="csd-puc-image-frame">
                <img
                  src="/images/SectionFourImage.png"
                  alt="Enterprise Modernisation & Consolidation"
                  className="csd-puc-core-img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — TECHNICAL DEPLOYMENT STRATEGY */}
      <section className="csd-strategy-section">
        <div className="container csd-strategy-container">
          {/* Header */}
          <div className="csd-strategy-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="csd-section-tag">TECHNICAL DEPLOYMENT STRATEGY</div>
              <h2 className="csd-section-heading">
                Our Deployment <span className="csd-gold-text">Strategy</span>
              </h2>
              <p className="csd-strategy-subtext">
                A rigorous, transparent methodology from blueprint to launch.
              </p>
            </motion.div>
          </div>

          {/* 5-Step Pipeline Grid */}
          <div className="csd-strategy-grid">
            {DEPLOYMENT_STRATEGY_STEPS.map((stepItem, idx) => (
              <motion.div
                key={stepItem.step}
                className="csd-strategy-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Step Top Bar: Node & Phase Number */}
                <div className="csd-strategy-card-top">
                  <div className="csd-strategy-step-badge">{stepItem.step}</div>
                  <div className="csd-strategy-icon-box">{stepItem.icon}</div>
                </div>

                {/* Content */}
                <h3 className="csd-strategy-card-title">{stepItem.title}</h3>
                <p className="csd-strategy-card-desc">{stepItem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CLOSING CTA */}
      <section className="csd-cta-section">
        <div className="csd-cta-bg-glow" aria-hidden="true" />
        <div className="container csd-cta-container">
          <motion.div
            className="csd-cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="csd-section-tag csd-cta-tag">GET STARTED</div>
            
            <h3 className="csd-cta-heading">
              Ready to build software that{' '}
              <span className="csd-gold-text">scales with your enterprise?</span>
            </h3>

            <p className="csd-cta-subtext">
              Let&apos;s map out your unique business logic and build a bespoke solution with full IP ownership.
            </p>

            <div className="csd-cta-btn-wrap">
              <Link to="/contact" className="csd-btn-primary csd-cta-btn">
                <span>Start Your Discovery & Audit</span>
                <LuArrowRight className="csd-btn-arrow-icon" />
              </Link>
            </div>

            <div className="csd-cta-tagline-wrap">
              <div className="csd-cta-tagline-pill">
                <LuSparkles className="csd-tagline-icon" />
                <span>Strategic IT.</span>
              </div>
              <span className="csd-cta-tagline-dot">•</span>
              <div className="csd-cta-tagline-pill">
                <LuTrendingUp className="csd-tagline-icon" />
                <span>Measurable Impact.</span>
              </div>
              <span className="csd-cta-tagline-dot">•</span>
              <div className="csd-cta-tagline-pill">
                <LuShieldCheck className="csd-tagline-icon" />
                <span>Built for Today.</span>
              </div>
              <span className="csd-cta-tagline-dot">•</span>
              <div className="csd-cta-tagline-pill">
                <LuRocket className="csd-tagline-icon" />
                <span>Ready for Tomorrow.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CustomSoftwareDevelopment;
