import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaDotCircle,
  FaDesktop,
  FaDatabase,
  FaShieldAlt,
  FaLock,
  FaSearch,
  FaNetworkWired,
  FaSyncAlt,
  FaCogs,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaLayerGroup,
  FaFileAlt,
  FaMicrochip,
  FaMobileAlt,
} from "react-icons/fa";
import "./CustomSoftwareDevelopment.css";

const STACK_CARDS = [
  {
    id: "frontend-mobile",
    roman: "I.",
    label: "CLIENT TIER",
    title: "Frontend & Mobile Engineering",
    description:
      "Deploying responsive, high-performance web applications and native-feel cross-platform mobile solutions tailored for high transaction volumes and seamless user experiences.",
    icon: <FaDesktop size={22} />,
    tags: [
      "React.js",
      "Next.js",
      "Flutter",
      "TypeScript",
      "Responsive Web",
      "Cross-Platform Mobile",
    ],
    items: [
      { label: "Web Platform", sub: "TypeScript, JavaScript, React.js" },
      {
        label: "Mobile Solutions",
        sub: "Flutter (Native-feel cross-platform execution)",
      },
    ],
  },
  {
    id: "backend-data",
    roman: "II.",
    label: "CORE ARCHITECTURE",
    title: "Backend & Data Architecture",
    description:
      "Engineering high-throughput, decoupled microservices and resilient data pipelines engineered for sub-second query latency and cloud-native horizontal scalability.",
    icon: <FaDatabase size={22} />,
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Microservices",
      "REST & GraphQL",
    ],
    items: [
      {
        label: "Backend Microservices",
        sub: "Node.js, Express.js API gateways",
      },
      {
        label: "Distributed Database",
        sub: "MongoDB & PostgreSQL scalable clusters",
      },
    ],
  },
  {
    id: "quality-assurance",
    roman: "III.",
    label: "VERIFICATION",
    title: "Quality Assurance & CI/CD",
    description:
      "Injecting comprehensive automated and manual testing suites into declarative CI/CD delivery tracks to ensure bulletproof release stability and zero production regression.",
    icon: <FaCogs size={22} />,
    tags: [
      "Automated Testing",
      "Manual QA",
      "Regression Suites",
      "CI/CD Pipelines",
    ],
    items: [
      {
        label: "Testing Frameworks",
        sub: "Unit, integration, E2E, and regression test suites",
      },
      {
        label: "Continuous Delivery",
        sub: "Automated build validation & quality gates",
      },
    ],
  },
  {
    id: "zero-trust",
    roman: "IV.",
    label: "SECURITY PROTOCOLS",
    title: "Zero-Trust Security Protocols",
    description:
      "Enforcing strict least-privilege RBAC, encrypted data states at rest and in transit, and infrastructure hardening to guarantee compliance-ready enterprise deployments.",
    icon: <FaLock size={22} />,
    tags: [
      "Zero-Trust",
      "RBAC & IAM",
      "AES-256 Encryption",
      "API Gateways",
      "Hardened Infra",
    ],
    items: [
      {
        label: "Infrastructure",
        sub: "Hardening, backups, and compliance-ready deployment",
      },
      {
        label: "Access Control",
        sub: "Role-based access control (RBAC) and secure API gateways",
      },
    ],
  },
];

const CAPABILITIES = [
  {
    id: "apis-modernisation",
    roman: "I.",
    category: "CUSTOM ENGINEERING & APIS",
    title: "Custom Engineering : APIs & System Modernisation",
    subtitle:
      "We transform disconnected infrastructure into modern, cloud-native microservices.",
    services: [
      {
        title: "Discovery & Audit",
        desc: "Rigorous requirement mapping and architectural blueprinting before a single line of code is written.",
        tag: "DISCOVERY",
        icon: <FaSearch size={20} />,
      },
      {
        title: "Bespoke API Architecture",
        desc: "Building secure, high-throughput microservices and APIs to connect disconnected enterprise tools.",
        tag: "APIs & MICROSERVICES",
        icon: <FaNetworkWired size={20} />,
      },
      {
        title: "Legacy Modernisation",
        desc: "Rebuilding outdated monolithic on-premise systems into agile, cloud-native enterprise applications. Full IP ownership transfer upon deployment.",
        tag: "CLOUD NATIVE",
        icon: <FaSyncAlt size={20} />,
      },
    ],
  },
  {
    id: "uiux-frontend",
    roman: "II.",
    category: "UI/UX & FRONTEND ENGINEERING",
    title: "UI/UX & Frontend Engineering",
    subtitle:
      "Translating complex enterprise workflows into intuitive user journeys.",
    services: [
      {
        title: "Interface Mapping",
        desc: "Translating complex workflows into intuitive user journeys using advanced prototyping tools.",
        tag: "UI DESIGN",
        icon: <FaLayerGroup size={20} />,
      },
      {
        title: "High-Fidelity Prototyping",
        desc: "Validating user interactions and logic flows prior to development sprints.",
        tag: "PROTOTYPING",
        icon: <FaDesktop size={20} />,
      },
      {
        title: "Cross-Platform Execution",
        desc: "Deploying responsive, high-performance web applications via React.js and native-feel mobile experiences via Flutter.",
        tag: "REACT & FLUTTER",
        icon: <FaMobileAlt size={20} />,
      },
    ],
  },
];

const USE_CASES = [
  {
    id: "use-case-1",
    category: "Enterprise Transformation",
    title: "Enterprise Application Modernisation",
    subtitle:
      "Overcoming legacy bottlenecks through custom full-stack microservices architecture.",
    steps: [
      {
        label: "The Challenge (Before)",
        tag: "CHALLENGE",
        desc: "Over-reliance on disconnected off-the-shelf tools, fragmented data silos, and legacy systems that bottleneck scale.",
        icon: <FaLayerGroup size={18} />,
      },
      {
        label: "Our Architecture",
        tag: "ARCHITECTURE",
        desc: "Full-stack bespoke engineering to map unique business logic. Custom API gateways built via Node.js to bridge legacy databases with modern cloud infrastructure.",
        icon: <FaNetworkWired size={18} />,
      },
      {
        label: "The Impact (After)",
        tag: "IMPACT",
        desc: "100% IP ownership. Elimination of manual reconciliation. Unrestricted scalability without third-party licensing constraints. Unified architecture and continuous data streams.",
        icon: <FaChartLine size={18} />,
      },
    ],
  },
  {
    id: "use-case-2",
    category: "Partner Ecosystem",
    title: "External Partner Enablement Portal",
    subtitle:
      "Standardising partner operations and intelligence with real-time AI assistance.",
    steps: [
      {
        label: "The Challenge (Before)",
        tag: "CHALLENGE",
        desc: "Difficulty standardising knowledge, SOPs, and product updates for external vendors, channel partners, and franchise networks.",
        icon: <FaUsers size={18} />,
      },
      {
        label: "Our Architecture",
        tag: "ARCHITECTURE",
        desc: "A white-labelled, mobile-responsive external portal. Integration of an AI Learning Assistant for 24/7 on-demand query resolution via secure messaging APIs.",
        icon: <FaFileAlt size={18} />,
      },
      {
        label: "The Impact (After)",
        tag: "IMPACT",
        desc: "Real-time tracking of partner compliance and competency. Reduced support desk headcount costs. Always-on first response for partner queries.",
        icon: <FaChartLine size={18} />,
      },
    ],
  },
];

const DEPLOYMENT_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "Rigorous business-IT alignment, architecture mapping, tech stack evaluation, and security auditing.",
    icon: <FaSearch size={20} />,
  },
  {
    step: "02",
    title: "Prototype & Architecture",
    desc: "High-fidelity wireframing, cloud infrastructure provisioning, data modeling, and API blueprinting.",
    icon: <FaLayerGroup size={20} />,
  },
  {
    step: "03",
    title: "Full-Stack Engineering",
    desc: "Agile development sprints, CI/CD pipeline integration, automated unit testing, and code quality audits.",
    icon: <FaMicrochip size={20} />,
  },
  {
    step: "04",
    title: "Managed Deployment",
    desc: "Zero-disruption migration, automated environment parity checks, and 24/7 proactive threat monitoring.",
    icon: <FaShieldAlt size={20} />,
  },
  {
    step: "05",
    title: "Launch & Handover",
    desc: "Your custom software goes live, fully secured and optimized for scale with 100% intellectual property transfer.",
    icon: <FaRocket size={20} />,
  },
];

const OUTCOMES = [
  {
    id: "ip-ownership",
    title: "100% Full IP Ownership",
    metricTag: "ZERO VENDOR LOCK-IN",
    description:
      "Complete transfer of all source code, architecture blueprints, and digital assets with zero recurring per-seat vendor licensing constraints.",
    icon: <FaShieldAlt size={22} />,
  },
  {
    id: "latency",
    title: "Sub-Second API Latency",
    metricTag: "OPTIMIZED THROUGHPUT",
    description:
      "Engineered cloud-native microservices ensuring high-throughput transaction processing, instant query response, and seamless multi-region synchronization.",
    icon: <FaChartLine size={22} />,
  },
  {
    id: "agility",
    title: "Accelerated Release Agility",
    metricTag: "RAPID TIME-TO-MARKET",
    description:
      "Modular architecture coupled with automated CI/CD tracks accelerating feature delivery and shortening iteration cycles from months to days.",
    icon: <FaRocket size={22} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const CustomSoftwareDevelopment = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("apis-modernisation");
  const [activeOutcomeId, setActiveOutcomeId] = useState("ip-ownership");

  // Parallax Scroll Effect for banner image
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);
        const translateY = (progress - 0.5) * 150;
        imageRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let isVisible = true;
    let time = 0;

    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / (width || 1) - 0.5;
      const relativeY = (e.clientY - rect.top) / (height || 1) - 0.5;
      mouse.targetX = relativeX * 22; 
      mouse.targetY = relativeY * 16;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    const heroSection = heroSectionRef.current;
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove, { passive: true });
      heroSection.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    if (heroSection) observer.observe(heroSection);

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : 700;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 32 : 68;

    class NetworkParticle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        const preferRight = Math.random() > 0.28;
        this.x = preferRight
          ? width * 0.44 + Math.random() * (width * 0.56)
          : Math.random() * width;

        this.y = Math.random() * height;

        this.size = Math.random() * 1.8 + 0.9;
        this.baseAlpha = Math.random() * 0.5 + 0.25;
        this.alpha = this.baseAlpha;

        this.vx = (Math.random() - 0.48) * 0.20;
        this.vy = (Math.random() - 0.5) * 0.16;

        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.015 + 0.008;

        this.isMajorNode = Math.random() < 0.18;
        this.glowSize = this.isMajorNode ? Math.random() * 6 + 6 : 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        this.alpha = this.baseAlpha * (0.75 + 0.25 * Math.sin(this.pulse));
      }

      draw(offsetX, offsetY) {
        const drawX = this.x + offsetX * (this.size * 0.6);
        const drawY = this.y + offsetY * (this.size * 0.6);

        if (this.isMajorNode) {
          const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, this.glowSize);
          grad.addColorStop(0, `rgba(255, 240, 200, ${this.alpha * 0.95})`);
          grad.addColorStop(0.35, `rgba(223, 165, 75, ${this.alpha * 0.65})`);
          grad.addColorStop(0.8, `rgba(212, 160, 74, ${this.alpha * 0.15})`);
          grad.addColorStop(1, "rgba(212, 160, 74, 0)");

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(drawX, drawY, this.glowSize, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(drawX, drawY, this.size * 1.25, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(drawX, drawY, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(223, 175, 85, ${this.alpha})`;
          ctx.fill();
        }
      }
    }

    const particles = Array.from({ length: particleCount }, () => new NetworkParticle());
    const maxLineDist = isMobile ? 85 : 125;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      if (isVisible) {
        time += prefersReducedMotion ? 0.002 : 0.012;

        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        ctx.fillStyle = "#050505ff";
        ctx.fillRect(0, 0, width, height);

        const rightGlow = ctx.createRadialGradient(
          width * 0.78 + mouse.x * 0.4,
          height * 0.48 + mouse.y * 0.4,
          10,
          width * 0.78,
          height * 0.48,
          width * 0.5
        );
        rightGlow.addColorStop(0, "rgba(212, 160, 74, 0.085)");
        rightGlow.addColorStop(0.4, "rgba(184, 134, 11, 0.035)");
        rightGlow.addColorStop(1, "rgba(5, 5, 5, 0)");
        ctx.fillStyle = rightGlow;
        ctx.fillRect(0, 0, width, height);

        const leftSoftLight = ctx.createRadialGradient(
          0,
          0,
          0,
          width * 0.15,
          height * 0.2,
          width * 0.45
        );
        leftSoftLight.addColorStop(0, "rgba(212, 160, 74, 0.06)");
        leftSoftLight.addColorStop(1, "rgba(5, 5, 5, 0)");
        ctx.fillStyle = leftSoftLight;
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];

            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxLineDist) {
              const lineAlpha = (1 - dist / maxLineDist) * 0.28 * Math.min(p1.alpha, p2.alpha);

              ctx.beginPath();
              ctx.strokeStyle = `rgba(212, 160, 74, ${lineAlpha})`;
              ctx.lineWidth = 0.55;

              const x1 = p1.x + mouse.x * (p1.size * 0.6);
              const y1 = p1.y + mouse.y * (p1.size * 0.6);
              const x2 = p2.x + mouse.x * (p2.size * 0.6);
              const y2 = p2.y + mouse.y * (p2.size * 0.6);

              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          }
        }

        particles.forEach((p) => {
          if (!prefersReducedMotion) p.update();
          p.draw(mouse.x, mouse.y);
        });

        ctx.save();
        const waveY = height * 0.82;
        const wavePointsCount = isMobile ? 24 : 48;
        const step = width / wavePointsCount;

        for (let layer = 0; layer < 2; layer++) {
          const layerOffset = layer * 16;
          const speedMultiplier = layer === 0 ? 1 : 0.7;
          const waveAlpha = layer === 0 ? 0.22 : 0.12;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(223, 165, 75, ${waveAlpha})`;
          ctx.lineWidth = layer === 0 ? 1 : 0.6;

          for (let i = 0; i <= wavePointsCount; i++) {
            const wx = i * step;
            const sineFactor = Math.sin(time * speedMultiplier + i * 0.18 + layer * 1.5);
            const cosineFactor = Math.cos(time * 0.8 * speedMultiplier + i * 0.12);
            const wy = waveY + layerOffset + (sineFactor * 22 + cosineFactor * 14) + mouse.y * 0.5;

            if (i === 0) ctx.moveTo(wx, wy);
            else ctx.lineTo(wx, wy);

            if (i % 3 === 0) {
              const pointAlpha = (Math.sin(time * 2 + i) * 0.5 + 0.5) * waveAlpha * 1.8;
              ctx.fillStyle = `rgba(255, 235, 180, ${pointAlpha})`;
              ctx.fillRect(wx - 1, wy - 1, 2, 2);
            }
          }
          ctx.stroke();
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
      if (heroSection) {
        heroSection.removeEventListener("mousemove", handleMouseMove);
        heroSection.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const activeCapability = CAPABILITIES.find((c) => c.id === activeTab);

  return (
    <>
      <section
        ref={heroSectionRef}
        className="hero-section csd-hero-section d-flex flex-column justify-content-center"
      >
        <canvas
          ref={canvasRef}
          className="csd-hero-particles-canvas"
          aria-hidden="true"
        />

        <div className="container content-overlay">
          <div className="hero-text">
            <div className="service-badge mb-3">
              <FaDotCircle className="me-2 mb-1" size={12} />
              Enterprise Custom Software
            </div>
            <h2
              className="hero-section-heading mb-4 section-heading text-start"
              style={{ width: "fit-content" }}
            >
              Custom Software Development : <br /> Strategic IT. Measurable
              Impact.
            </h2>
            <p className="hero-section-para text-start">
              We engineer secure, scalable, and bespoke digital solutions that
              modernise legacy systems, eliminate data silos, and drive
              enterprise growth.
            </p>
            <br />
            <p className="hero-section-para text-start">
              KloudStack’s Custom Software practice transforms disconnected
              business operations into agile, high-performance digital engines —
              delivering tailor-made full-stack architectures, API-driven
              integrations, and cross-platform experiences backed by Zero-Trust
              security and 100% IP ownership.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 hero-image">
        <div className="hero-img-container" ref={containerRef}>
          <img
            ref={imageRef}
            src="/images/Golden Cloud Computing Nexus.png"
            alt="Custom Software Development Architecture"
          />
        </div>
      </section>

      <section className="aip-section csd-stack-section">
        <div className="container">
          <motion.div
            className="aip-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-heading text-center">
              The Stack & Security Protocols
            </h2>
            <p className="cap-description text-start">
              We leverage modern, high-performance technologies to build robust
              applications backed by Zero-Trust security and enterprise
              reliability.
            </p>
          </motion.div>

          <motion.div
            className="aip-pillars-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            {STACK_CARDS.map((card) => (
              <motion.div
                key={card.id}
                className="aip-pillar-card"
                variants={itemVariants}
              >
                <div className="aip-card-top-bar" />

                <div className="aip-card-header">
                  <div className="aip-icon-badge">{card.icon}</div>
                  <div className="aip-header-right">
                    <span className="aip-label">{card.label}</span>
                  </div>
                </div>

                <h3 className="aip-pillar-title">{card.title}</h3>
                <p className="aip-pillar-desc">{card.description}</p>

                <div className="csd-stack-items-preview mb-3">
                  {card.items.map((it, idx) => (
                    <div key={idx} className="csd-stack-item-row">
                      <FaCheckCircle
                        className="text-warning me-2 mt-1 flex-shrink-0"
                        size={13}
                      />
                      <div>
                        <strong className="text-white d-block">
                          {it.label}
                        </strong>
                        <span className="text-white-50 small">{it.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="aip-tags-row">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="aip-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="lcf-section csd-capabilities-section">
        <div className="container">
          <motion.div
            className="lcf-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-heading text-center">
              Our Engineering Capabilities
            </h2>
            <p className="cap-description text-start">
              A comprehensive capability matrix detailing our bespoke
              microservices engineering, modern API development, and
              cross-platform UI/UX execution.
            </p>
          </motion.div>

          <div className="lcf-tab-bar">
            {CAPABILITIES.map((cap) => (
              <button
                key={cap.id}
                className={`lcf-tab-btn ${activeTab === cap.id ? "lcf-tab-btn--active" : ""}`}
                onClick={() => setActiveTab(cap.id)}
              >
                <span className="lcf-tab-label">{cap.category}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lcf-panel"
            >
              <div className="lcf-panel-header">
                <div className="lcf-panel-label">
                  {activeCapability.category}
                </div>
                <h3 className="lcf-panel-title section-heading">
                  {activeCapability.title}
                </h3>
                <p className="lcf-panel-subtitle">
                  {activeCapability.subtitle}
                </p>
              </div>

              <motion.div
                className="lcf-cards-grid"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {activeCapability.services.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="lcf-card"
                    variants={itemVariants}
                  >
                    <div className="lcf-card-top-bar" />
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="lcf-icon-wrap">{item.icon}</div>
                      <span className="lcf-card-tag">{item.tag}</span>
                    </div>
                    <h4 className="lcf-card-title">{item.title}</h4>
                    <p className="lcf-card-desc">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="ose-section csd-use-cases-section">
        <div className="container">
          <motion.div
            className="ose-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-heading text-start">
              Proven Enterprise Use Cases
            </h2>
            <p className="cap-description text-start">
              Real-world transformation blueprints highlighting how custom
              engineering solves critical enterprise bottlenecks and delivers
              measurable ROI.
            </p>
          </motion.div>

          <div className="ose-groups">
            {USE_CASES.map((useCase, gIdx) => (
              <div key={useCase.id} className="ose-group">
                <motion.div
                  className="ose-group-header"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: gIdx * 0.05,
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span className="ose-group-line" />
                    <span className="ose-group-name">{useCase.title}</span>
                  </div>
                  <p className="ose-group-desc">{useCase.subtitle}</p>
                </motion.div>

                <motion.div
                  className="ose-cards-grid ose-cards-count-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={containerVariants}
                >
                  {useCase.steps.map((st, sIdx) => (
                    <motion.div
                      key={sIdx}
                      className="ose-tech-card"
                      variants={itemVariants}
                    >
                      <div className="ose-card-top-bar" />
                      <div className="ose-card-header">
                        <div className="lcf-icon-wrap">{st.icon}</div>
                        <span className="ose-role-tag">{st.tag}</span>
                      </div>
                      <h3 className="ose-tech-name">{st.label}</h3>
                      <p className="ose-tech-desc">{st.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lcf-section csd-strategy-section">
        <div className="container">
          <motion.div
            className="lcf-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="section-heading text-center">
              Technical Deployment Strategy
            </h2>
            <p className="cap-description text-start">
              A rigorous, transparent 5-stage methodology ensuring predictable,
              secure delivery from blueprint through to live production
              handover.
            </p>
          </motion.div>

          <div className="csd-strategy-grid-5">
            {DEPLOYMENT_STEPS.map((st, idx) => (
              <motion.div
                key={st.step}
                className="lcf-card csd-step-card-custom"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="lcf-card-top-bar" />
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="csd-strategy-num-badge">{st.step}</span>
                  <div className="lcf-icon-wrap">{st.icon}</div>
                </div>
                <h4 className="lcf-card-title">{st.title}</h4>
                <p className="lcf-card-desc">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="aio-section csd-outcomes-section">
        <div className="container">
          <div className="aio-card-outer">
            <motion.div
              className="aio-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="section-heading text-center">
                Strategic Business Outcomes
              </h2>
              <p className="cap-description text-start">
                Measurable Enterprise Value Delivered: Callout benchmarks
                engineered to maximize software delivery agility, cost
                efficiency, and architectural freedom.
              </p>
            </motion.div>

            <motion.div
              className="aio-grid"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.15,
              }}
            >
              {OUTCOMES.map((item) => {
                const isActive = activeOutcomeId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`aio-card ${isActive ? "aio-card--active" : ""}`}
                    onClick={() => setActiveOutcomeId(item.id)}
                    onMouseEnter={() => setActiveOutcomeId(item.id)}
                  >
                    <div className="aio-card-top-bar" />
                    <div className="aio-card-header">
                      <div className="aio-icon-badge">{item.icon}</div>
                      <span className="aio-metric-tag">{item.metricTag}</span>
                    </div>
                    <h3 className="aio-card-title">{item.title}</h3>
                    <p className="aio-card-desc">{item.description}</p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              className="csd-bottom-cta-box text-center mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3
                className="text-white mb-2"
                style={{ fontFamily: "Plus Jakarta Sans", fontWeight: 800 }}
              >
                Ready to build software that{" "}
                <span style={{ color: "#d4a04a" }}>
                  scales with your enterprise?
                </span>
              </h3>
              <p
                className="text-white-50 mb-4 mx-auto"
                style={{ maxWidth: "600px", fontSize: "0.92rem" }}
              >
                Let&apos;s map out your unique business logic and build a
                bespoke solution with full IP ownership and Zero-Trust security.
              </p>
              <Link to="/contact" className="csd-cta-gold-btn">
                <span>Start Your Discovery &amp; Audit</span>
                <FaArrowRight className="ms-2" size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomSoftwareDevelopment;
