import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaDotCircle } from "react-icons/fa";
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
} from "react-icons/lu";
import { Link } from "react-router-dom";
import heroVideo from "./video/goldenHeroBannerCustomSoftware.mp4";
import "./CustomSoftwareDevelopment.css";

const STACK_CARDS = [
  {
    id: "frontend-mobile",
    topIcon: <LuMonitor />,
    titlePrefix: "Frontend & Mobile",
    titleGold: "Engineering",
    items: [
      {
        icon: <LuGlobe />,
        label: "Web",
        sub: "TypeScript, JavaScript, React.js",
      },
      {
        icon: <LuSmartphone />,
        label: "Mobile",
        sub: "Flutter (Native-feel cross-platform execution)",
      },
    ],
  },
  {
    id: "backend-data",
    topIcon: <LuDatabase />,
    titlePrefix: "Backend &",
    titleGold: "Data Architecture",
    items: [
      {
        icon: <LuServer />,
        label: "Backend",
        sub: "Node.js, Express.js",
      },
      {
        icon: <LuDatabase />,
        label: "Database",
        sub: "MongoDB",
      },
    ],
  },
  {
    id: "quality-assurance",
    topIcon: <LuSettings />,
    titlePrefix: "Quality",
    titleGold: "Assurance",
    items: [
      {
        icon: <LuShieldCheck />,
        label: "Automated & Manual",
        sub: "Testing Frameworks",
      },
    ],
  },
  {
    id: "zero-trust",
    topIcon: <LuLock />,
    titlePrefix: "Zero-Trust",
    titleGold: "Security Protocols",
    items: [
      {
        icon: <LuServer />,
        label: "Infrastructure",
        sub: "Hardening, backups, and compliance-ready deployment.",
      },
      {
        icon: <LuUsers />,
        label: "Access",
        sub: "Role-based access control (RBAC) and secure API gateways.",
      },
      {
        icon: <LuShieldCheck />,
        label: "Data",
        sub: "Encrypted data states and secure multi-tenant architecture.",
      },
    ],
  },
];

const CAPABILITIES_DATA = [
  {
    id: "apis-modernisation",
    titlePrefix: "Custom Engineering :",
    titleGold: "APIs & System Modernisation",
    subtext:
      "We transform disconnected infrastructure into modern, cloud-native microservices.",
    cards: [
      {
        id: "discovery-audit",
        icon: <LuSearchCode />,
        title: "Discovery & Audit",
        desc: "Rigorous requirement mapping and architectural blueprinting before a single line of code is written.",
      },
      {
        id: "bespoke-api",
        icon: <LuNetwork />,
        title: "Bespoke API Architecture",
        desc: "Building secure, high-throughput microservices and APIs to connect disconnected enterprise tools.",
      },
      {
        id: "legacy-modernisation",
        icon: <LuRefreshCw />,
        title: "Legacy Modernisation",
        desc: "Rebuilding outdated monolithic on-premise systems into agile, cloud-native enterprise applications. Full IP ownership transfer upon deployment.",
      },
    ],
  },
  {
    id: "uiux-frontend",
    titlePrefix: "UI/UX &",
    titleGold: "Frontend Engineering",
    subtext: "Translating complex workflows into intuitive user journeys.",
    cards: [
      {
        id: "interface-mapping",
        icon: <LuLayoutGrid />,
        title: "Interface Mapping",
        desc: "Translating complex workflows into intuitive user journeys using advanced prototyping tools.",
      },
      {
        id: "high-fidelity",
        icon: <LuLayers />,
        title: "High-Fidelity Prototyping",
        desc: "Validating user interactions and logic flows prior to development sprints.",
      },
      {
        id: "cross-platform",
        icon: <LuSmartphone />,
        title: "Cross-Platform Execution",
        desc: "Deploying responsive, high-performance web applications via React.js and native-feel mobile experiences via Flutter.",
      },
    ],
  },
];

const USE_CASES_DATA = [
  {
    id: "use-case-1",
    titlePrefix: "Enterprise Application",
    titleGold: "Modernisation",
    points: [
      {
        label: "The Challenge (Before)",
        icon: <LuLayers />,
        text: "Over-reliance on disconnected off-the-shelf tools, fragmented data silos, and legacy systems that bottleneck scale.",
      },
      {
        label: "Our Architecture",
        icon: <LuNetwork />,
        text: "Full-stack bespoke engineering to map unique business logic. Custom API gateways built via Node.js to bridge legacy databases with modern cloud infrastructure.",
      },
      {
        label: "The Impact (After)",
        icon: <LuTrendingUp />,
        text: "100% IP ownership. Elimination of manual reconciliation. Unrestricted scalability without third-party licensing constraints. Unified architecture and continuous data streams.",
      },
    ],
  },
  {
    id: "use-case-2",
    titlePrefix: "External Partner",
    titleGold: "Enablement Portal",
    points: [
      {
        label: "The Challenge",
        icon: <LuUsers />,
        text: "Difficulty standardising knowledge, SOPs, and product updates for external vendors, channel partners, and franchise networks.",
      },
      {
        label: "Our Architecture",
        icon: <LuFileText />,
        text: "A white-labelled, mobile-responsive external portal. Integration of an AI Learning Assistant for 24/7 on-demand query resolution via secure messaging APIs.",
      },
      {
        label: "The Impact",
        icon: <LuTrendingUp />,
        text: "Real-time tracking of partner compliance and competency. Reduced support desk headcount costs. Always-on first response for partner queries.",
      },
    ],
  },
];
const DEPLOYMENT_STRATEGY_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "Rigorous business-IT alignment, architecture mapping, and security auditing.",
    icon: <LuSearchCode />,
  },
  {
    step: "02",
    title: "Prototype & Architecture",
    desc: "High-fidelity wireframing, cloud infrastructure provisioning, and API blueprinting.",
    icon: <LuLayoutGrid />,
  },
  {
    step: "03",
    title: "Full-Stack Engineering",
    desc: "Agile development sprints, CI/CD pipeline integration, and rigorous QA testing.",
    icon: <LuCpu />,
  },
  {
    step: "04",
    title: "Managed Deployment",
    desc: "Zero-disruption migration, 24/7 proactive threat hunting, and continuous predictive maintenance.",
    icon: <LuShieldCheck />,
  },
  {
    step: "05",
    title: "Launch",
    desc: "Your custom software goes live, fully secured and optimized for scale.",
    icon: <LuRocket />,
  },
];

const CustomSoftwareDevelopment = () => {
  const pucContainerRef = useRef(null);
  const pucImageRef = useRef(null);
  const mobileCanvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!pucContainerRef.current || !pucImageRef.current) return;

      const rect = pucContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);

        const translateY = (progress - 0.5) * 150;

        pucImageRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Mobile Pure Visual Particle & Cyber Constellation Engine (100% Visual, Zero Text/Logos)
  useEffect(() => {
    const canvas = mobileCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = 0;
    let height = 0;
    let time = 0;

    const particleCount = 55;
    const particles = [];
    const energyPulses = [];

    const resize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      width = canvas.width = parent ? parent.clientWidth : window.innerWidth;
      height = canvas.height = parent
        ? parent.clientHeight
        : window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialize pure visual geometric particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (width || 400),
        y: Math.random() * (height || 700),
        radius: Math.random() * 2.6 + 1.2,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseAlpha: Math.random() * 0.55 + 0.35,
        pulse: Math.random() * Math.PI * 2,
        isHub: i % 7 === 0, // Major glowing nexus node
      });
    }

    // Spawn periodic glowing energy pulses traveling between nexus nodes
    const pulseInterval = setInterval(() => {
      if (particles.length > 1 && window.innerWidth < 768) {
        const p1 = particles[Math.floor(Math.random() * particles.length)];
        const p2 = particles[Math.floor(Math.random() * particles.length)];
        if (p1 !== p2) {
          energyPulses.push({
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
            progress: 0,
            speed: Math.random() * 0.02 + 0.015,
          });
        }
      }
    }, 450);

    const render = () => {
      if (window.innerWidth >= 768) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      time += 0.018;

      // 1. Perspective Cyber Grid
      ctx.strokeStyle = "rgba(212, 160, 74, 0.035)";
      ctx.lineWidth = 1;
      const gridSize = 44;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Glowing Golden Nexus Centerpiece Rings
      const centerX = width * 0.65;
      const centerY = height * 0.42;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Rotating Outer Luminous Orbital Ring
      ctx.rotate(time * 0.25);
      ctx.beginPath();
      ctx.arc(0, 0, 75, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(223, 165, 75, 0.18)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Rotating Inner Hexagonal Wireframe
      ctx.rotate(-time * 0.5);
      ctx.beginPath();
      for (let s = 0; s < 6; s++) {
        const angle = (s * Math.PI) / 3;
        const hx = Math.cos(angle) * 45;
        const hy = Math.sin(angle) * 45;
        if (s === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(255, 215, 0, 0.28)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Center glowing energy core
      const corePulse = Math.sin(time * 2) * 4;
      const gradient = ctx.createRadialGradient(0, 0, 2, 0, 0, 28 + corePulse);
      gradient.addColorStop(0, "rgba(255, 235, 180, 0.8)");
      gradient.addColorStop(0.4, "rgba(223, 165, 75, 0.35)");
      gradient.addColorStop(1, "rgba(223, 165, 75, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, 28 + corePulse, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // 3. Connect Constellation Mesh Nodes with Glowing Golden Filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * (p1.isHub || p2.isHub ? 0.45 : 0.22);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(223, 165, 75, ${lineAlpha})`;
            ctx.lineWidth = p1.isHub || p2.isHub ? 1 : 0.6;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 4. Render Live Energy Pulse Photons
      for (let eIdx = energyPulses.length - 1; eIdx >= 0; eIdx--) {
        const pulse = energyPulses[eIdx];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          energyPulses.splice(eIdx, 1);
          continue;
        }

        const px = pulse.x1 + (pulse.x2 - pulse.x1) * pulse.progress;
        const py = pulse.y1 + (pulse.y2 - pulse.y1) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(255, 215, 0, 1)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 5. Update and Draw Glowing Geometric Particle Nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(p.pulse));

        if (p.isHub) {
          // Major Hub Diamond Node
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(time + i);
          ctx.beginPath();
          const s = p.radius * 2.2;
          ctx.rect(-s / 2, -s / 2, s, s);
          ctx.fillStyle = `rgba(255, 220, 140, ${currentAlpha})`;
          ctx.shadowColor = "rgba(255, 215, 0, 0.9)";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        } else {
          // Shimmering Circular Photon Node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(247, 215, 148, ${currentAlpha})`;
          ctx.shadowColor = "rgba(223, 165, 75, 0.75)";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      clearInterval(pulseInterval);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* SECTION 1 — HERO SECTION */}
      <section className="hero-section csd-custom-hero-wrap d-flex flex-column justify-content-center">
        {/* Desktop / Tablet Video Background */}
        <video
          className="hero-section-video-bg csd-hero-video-bg"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Mobile-Only Interactive Golden Waves & Particles Canvas */}
        <canvas
          ref={mobileCanvasRef}
          className="csd-mobile-waves-canvas"
          aria-hidden="true"
        />

        <div className="csd-hero-ambient-sheen" aria-hidden="true" />

        <div className="container content-overlay csd-hero-container">
          <div className="hero-text csd-hero-full-text">
            <h2 className="hero-section-heading mb-4 section-heading text-start">
              <span className="csd-hero-title-main">
                Custom Software Development :
              </span>{" "}
              <br className="csd-hero-title-br" />
              <span className="csd-hero-gold csd-hero-title-sub">
                Strategic IT. Measurable Impact.
              </span>
            </h2>

            <p className="hero-section-para text-start">
              We engineer secure, scalable, and bespoke digital solutions that
              modernise legacy systems, eliminate data silos, and drive
              enterprise growth.
            </p>

            <div className="csd-hero-btn-wrap mt-4">
              <Link to="/contact" className="csd-hero-btn">
                <span>Schedule a Discovery &amp; Audit</span>
                <span className="csd-hero-btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE STACK & SECURITY PROTOCOLS */}
      <section className="csd-stack-section">
        <div className="container csd-stack-container">
          <div className="csd-stack-top-row">
            <motion.div
              className="csd-stack-header-left"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="csd-stack-title">
                The Stack &amp;{" "}
                <span className="csd-stack-gold">Security Protocols</span>
              </h2>
              <p className="csd-stack-desc">
                We leverage modern, high-performance technologies to build
                robust applications backed by Zero-Trust security.
              </p>
            </motion.div>
          </div>

          <div className="csd-cards-grid">
            {STACK_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                className="csd-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="csd-card-header">
                  <div className="csd-card-top-icon">{card.topIcon}</div>
                  <h3 className="csd-card-title">
                    {card.titlePrefix}{" "}
                    <span className="csd-card-title-gold">
                      {card.titleGold}
                    </span>
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
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="csd-section-tag">OUR ENGINEERING CAPABILITIES</div>
          </motion.div>

          {CAPABILITIES_DATA.map((block) => (
            <div key={block.id} className="csd-cap-block">
              <motion.div
                className="csd-cap-block-header"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2 className="csd-cap-heading">
                  {block.titlePrefix}{" "}
                  <span className="csd-cap-gold">{block.titleGold}</span>
                </h2>
                <p className="csd-cap-desc">{block.subtext}</p>
              </motion.div>

              <div className="csd-cap-cards-grid">
                {block.cards.map((card, idx) => (
                  <motion.div
                    key={card.id}
                    className="csd-cap-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.1 + 0.05,
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
          <div className="csd-puc-banner" ref={pucContainerRef}>
            <img
              ref={pucImageRef}
              src="/images/Golden Cloud Computing Nexus.png"
              alt="Cloud Modernisation Architecture"
              className="csd-puc-banner-img"
            />
          </div>

          <div className="csd-puc-section-divider" />

          <div className="csd-puc-full-list">
            {USE_CASES_DATA.map((useCase, idx) => (
              <React.Fragment key={useCase.id}>
                {idx > 0 && <div className="csd-puc-section-divider" />}
                <motion.div
                  className="csd-puc-case-block"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="csd-puc-gold-bar" />
                  <h3 className="csd-puc-case-title">
                    {useCase.titlePrefix}{" "}
                    <span className="csd-puc-gold-text">
                      {useCase.titleGold}
                    </span>
                  </h3>

                  <div className="csd-puc-cards-row">
                    {useCase.points.map((pt, pIdx) => (
                      <React.Fragment key={pIdx}>
                        <motion.div
                          className="csd-puc-card"
                          whileHover={{
                            y: -4,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <div className="csd-puc-card-header">
                            <div className="csd-puc-card-icon">{pt.icon}</div>
                            <h4 className="csd-puc-card-title">{pt.label}</h4>
                          </div>
                          <p className="csd-puc-card-text">{pt.text}</p>
                        </motion.div>
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
      </section>

      {/* SECTION 5 — TECHNICAL DEPLOYMENT STRATEGY */}
      <section className="csd-strategy-section">
        <div className="container csd-strategy-container">
          <div className="csd-strategy-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65 }}
            >
              <div className="csd-section-tag">
                TECHNICAL DEPLOYMENT STRATEGY
              </div>
              <h2 className="csd-section-heading">
                Our Deployment <span className="csd-gold-text">Strategy</span>
              </h2>
              <p className="csd-strategy-subtext">
                A rigorous, transparent methodology from blueprint to launch.
              </p>
            </motion.div>
          </div>

          <div className="csd-strategy-grid">
            {DEPLOYMENT_STRATEGY_STEPS.map((stepItem, idx) => (
              <motion.div
                key={stepItem.step}
                className="csd-strategy-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="csd-strategy-card-top">
                  <div className="csd-strategy-step-badge">{stepItem.step}</div>
                  <div className="csd-strategy-icon-box">{stepItem.icon}</div>
                </div>

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
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="csd-section-tag csd-cta-tag">GET STARTED</div>

            <h3 className="csd-cta-heading">
              Ready to build software that{" "}
              <span className="csd-gold-text">
                scales with your enterprise?
              </span>
            </h3>

            <p className="csd-cta-subtext">
              Let&apos;s map out your unique business logic and build a bespoke
              solution with full IP ownership.
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
