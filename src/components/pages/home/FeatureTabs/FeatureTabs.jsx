import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FeatureTabs.css";

const TABS = [
  {
    id: "smart-response",
    label: "Pulse",
    heading: "AI-Powered Continuous Monitoring",
    description:
      "Pulse provides ongoing detection, anomaly tracking, and intelligent alerting.",
    expertise: [
      "Log ingestion & analysis",
      "Event correlation",
      "Behavior anomaly detection",
      "Real-time alerting",
      "Security posture monitoring",
      "Incident trend reports",
      "Cloud & infrastructure visibility",
      "Automated policy violation detection",
    ],
    capabilities: [
      {
        title: "AI-Based Threat Detection",
        detail: "Detect anomalies, zero-day threats, and unusual patterns.",
      },
      {
        title: "24/7 Continuous Monitoring",
        detail: "Always-on visibility across your infrastructure.",
      },
      {
        title: "Contextual Log & Event Analysis",
        detail: "Meaningful insights without alert fatigue.",
      },
      {
        title: "Intelligent Alerting & Risk Scoring",
        detail: "Alerts prioritized by impact and severity.",
      },
    ],
    cta: "Know more",
    img: "/images/tab1.png",
  },
  {
    id: "automation",
    label: "Fortress",
    heading: "Enterprise Cyber Risk Platform",
    description:
      "Fortress quantifies cyber threats, predicts potential attacks, and provides clear financial impact analysis, while supporting alignment with key cybersecurity and regulatory frameworks including SEBI CSF and DPDPA.",
    expertise: [
      "Risk quantification",
      "Threat prediction",
      "MITRE ATT&CK mapping",
      "Cyber hygiene scoring",
      "Enterprise risk dashboards",
      "Vulnerability prioritization",
      "Executive-ready reports",
      "Insurance readiness insights",
    ],
    capabilities: [
      {
        title: "Proactive Threat Monitoring",
        detail:
          "AI analyzes attack patterns and vulnerabilities mapped to MITRE ATT&CK.",
      },
      {
        title: "Financial Risk Quantification",
        detail:
          "Convert cyber exposure into clear, board-ready financial metrics.",
      },
      {
        title: "Cyber Hygiene Score",
        detail:
          "A credit-score-style rating of your organization's security posture.",
      },
      {
        title: "Integrated Insurance Access",
        detail:
          "Match your risk insights with tailored cyber insurance options.",
      },
    ],
    cta: "Know more",
    img: "/images/tab2.png",
  },
  {
    id: "security",
    label: "Compass",
    heading: "Cyber Risk Insights for Insurers & Brokers",
    description:
      "Compass transforms technical data into underwriting-ready intelligence.",
    expertise: [
      "Applicant risk scoring",
      "Exposure modeling",
      "Claims risk correlation",
      "Premium recommendation support",
      "Portfolio risk overview",
      "Automated reporting",
      "Underwriting workflow integration",
      "Security posture benchmarking",
    ],
    capabilities: [
      {
        title: "Customer Risk Dashboards",
        detail: "Instant evaluation of organizational cyber posture.",
      },
      {
        title: "Financial Exposure Analysis",
        detail: "Understand potential loss scenarios and impact.",
      },
      {
        title: "Policy Recommendations",
        detail: "Generate accurate, data-aligned coverage suggestions.",
      },
      {
        title: "Seamless Integration & Reporting",
        detail: "Integrates directly with underwriting workflows.",
      },
    ],
    cta: "Know more",
    img: "/images/tab3.png",
  },
  {
    id: "cloud",
    label: "Accord",
    heading: "AI Governance, Compliance & Insurability",
    description:
      "Accord simplifies responsible AI deployment and regulatory alignment.",
    expertise: [
      "EU AI Act alignment",
      "NIST AI RMF mapping",
      "System-level risk scoring",
      "Governance workflows",
      "Policy automation",
      "Regulatory reporting",
      "Insurability assessments",
      "Ethical AI controls",
    ],
    capabilities: [
      {
        title: "AI Risk & Compliance Dashboard",
        detail: "Monitor AI systems against laws like the EU AI Act.",
      },
      {
        title: "Policy Management",
        detail: "Centralize and automate governance workflows.",
      },
      {
        title: "Insurability Assessment",
        detail: "Improve transparency and insurer confidence.",
      },
      {
        title: "Standards Alignment",
        detail: "Map systems to frameworks like NIST AI RMF.",
      },
    ],
    cta: "Know more",
    img: "/images/tab4.png",
  },
];

const contentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const imageVariants = {
  enter: {
    scale: 0.97,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 },
  },
  exit: {
    scale: 0.97,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function FeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleTabChange = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const activeTab = TABS[activeIndex];

  return (
    <section className="ft-section">
      <div className="container">
        <div className="os-left mb-4">
          <p className="os-eyebrow mb-2">Our Productline</p>
          <h2 className="os-headline section-heading text-start mb-2">
            Cyber risk solutions for every stage of your security journey
          </h2>
        </div>

        <div className="ft-wrapper">
          {/* ── Tab Bar ── */}
          <div className="ft-tabbar" role="tablist">
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={i === activeIndex}
                className={`ft-tab ${i === activeIndex ? "ft-tab--active" : ""}`}
                onClick={() => handleTabChange(i)}
              >
                {i === activeIndex && (
                  <motion.span
                    className="ft-tab-bg"
                    layoutId="ft-active-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="ft-tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* ── Content Panel ── */}
          <div className="ft-panel">
            {/* Left: text */}
            <div className="ft-panel-left">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeTab.id}
                  custom={direction}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="ft-content"
                >
                  <h3 className="ft-heading">{activeTab.heading}</h3>
                  <p className="ft-description">{activeTab.description}</p>

                  {/* ── Expertise We Provide ── */}
                  <div className="ft-expertise">
                    <p className="ft-expertise-label">Expertise We Provide</p>
                    <div className="ft-expertise-grid">
                      {activeTab.expertise.map((item, idx) => (
                        <span key={idx} className="ft-expertise-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Key Capabilities ── */}
                  <div className="ft-capabilities">
                    <p className="ft-capabilities-label">Key Capabilities</p>
                    <ul className="ft-capabilities-list">
                      {activeTab.capabilities.map((cap, idx) => (
                        <li key={idx} className="ft-capability-item">
                          <span className="ft-capability-dot" />
                          <div>
                            <span className="ft-capability-title">{cap.title}</span>
                            <span className="ft-capability-sep"> — </span>
                            <span className="ft-capability-detail">{cap.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href="#"
                    className="ft-cta"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {activeTab.cta}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ft-cta-icon"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8l4 4-4 4M8 12h8" />
                    </svg>
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: image */}
            <div className="ft-panel-right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id + "-img"}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="ft-img-wrapper"
                >
                  <img
                    src={activeTab.img}
                    alt={activeTab.heading}
                    className="ft-img"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Progress dots ── */}
          <div className="ft-dots">
            {TABS.map((_, i) => (
              <button
                key={i}
                className={`ft-dot ${i === activeIndex ? "ft-dot--active" : ""}`}
                onClick={() => handleTabChange(i)}
                aria-label={`Go to tab ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
