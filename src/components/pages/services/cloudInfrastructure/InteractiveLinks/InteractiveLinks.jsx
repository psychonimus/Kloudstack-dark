import { motion } from "framer-motion";
import React, { useState } from "react";
import "./InteractiveLinks.css";

const INTERACTIVE_LINKS = [
  {
    number: "I",
    title: "Cloud Migration Strategy",
    cards: [
      {
        title: "COMPREHENSIVE ASSESSMENT",
        description: "Deep-dive analysis of existing legacy systems, identifying dependencies, evaluating current security postures, and uncovering cost-optimization opportunities prior to any structural migration."
      },
      {
        title: "STRATEGIC PLANNING",
        description: "Architecting a meticulous, phased migration blueprint designed to ensure zero operational downtime, mapping out precise and secure pathways to target hybrid or multi-cloud environments."
      },
      {
        title: "HYPERSCALER ALIGNMENT",
        description: "Strategic mapping of workloads to the optimal hyperscaler capabilities across AWS, Azure, and Google Cloud, ensuring maximum performance yield and strategic vendor alignment."
      }
    ]
  },
  {
    number: "II",
    title: "Enterprise Workload Migration",
    cards: [
      {
        title: "MULTI-CLOUD MOBILITY",
        description: "Flawless execution of workload transitions across private, public, and hybrid cloud environments (including AWS, Azure, and OpenShift environments)."
      },
      {
        title: "ZERO-DATA-LOSS EXECUTION",
        description: "Specialized methodologies for migrating highly sensitive and complex workloads—such as core SAP and SAP HANA databases—ensuring absolute data integrity and continuous availability."
      },
      {
        title: "PHASED CUTOVERS",
        description: "Rigorously engineered migration windows and roll-back strategies designed to bypass unscheduled downtime and safeguard operational continuity."
      }
    ]
  },
  {
    number: "III",
    title: "Infrastructure Modernization",
    cards: [
      {
        title: "STRATEGIC REPLATFORMING",
        description: "Transitioning rigid monolithic applications into modern, scalable cloud-native frameworks without complete code rewrites."
      },
      {
        title: "SERVER & STORAGE OPTIMIZATION",
        description: "Continuous right-sizing, compute tiering, and performance optimization to maximize resource utilization and drive down runtime expenses."
      },
      {
        title: "MODERN DATABASE ARCHITECTURES",
        description: "Modernizing core transactional databases to achieve substantial performance enhancements and lower data management overhead."
      }
    ]
  },
  {
    number: "IV",
    title: "Next-Generation Enterprise Networking",
    cards: [
      {
        title: "HYBRID CONNECTIVITY",
        description: "Deploying robust, high-performance network paths bridging on-premise data centers, edge sites, and multi-cloud landing zones."
      },
      {
        title: "SOFTWARE-DEFINED INFRASTRUCTURE",
        description: "Implementing advanced SD-WAN and software-defined architectures to provide dynamic traffic routing, orchestration simplicity, and unified control."
      },
      {
        title: "BANDWIDTH & PATH OPTIMIZATION",
        description: "Maximizing network throughput and application responsiveness across complex global networks with intelligent traffic shaping."
      }
    ]
  },
  {
    number: "V",
    title: "Secure Application Delivery",
    cards: [
      {
        title: "ZERO TRUST ARCHITECTURE",
        description: "Implementing identity-centric micro-segmentation and strict least-privilege access across all application endpoints and microservices."
      },
      {
        title: "WAF & DDOS MITIGATION",
        description: "Deploying intelligent layer 7 web application firewalls and automated threat protection to neutralize multi-vector cyber attacks."
      },
      {
        title: "AUTOMATED COMPLIANCE",
        description: "Continuous security policy enforcement, automated auditing, and real-time vulnerability scanning integrated into deployment pipelines."
      }
    ]
  }
];

function AccordionLink({ number, title, cards, isOpen, onToggle }) {
  return (
    <div className={`il-item ${isOpen ? "il-item--open" : ""}`}>
      {/* Header Row */}
      <button
        onClick={onToggle}
        className="il-header"
        aria-expanded={isOpen}
      >
        <div className="il-header-left">
          {isOpen && <span className="il-gold-bar" />}
          <span className="il-number">{number}</span>
          <h3 className="il-title">{title}</h3>
        </div>

        <div className="il-chevron">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`il-chevron-icon ${isOpen ? "il-chevron-icon--open" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* Expandable Accordion Body */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.3, delay: isOpen ? 0.05 : 0 },
        }}
        style={{ overflow: "hidden" }}
        className="il-accordion-body"
      >
        <div className="il-body-inner">
          <div className="il-cards-grid">
            {cards.map((card, idx) => (
              <div key={idx} className="il-card">
                <h4 className="il-card-title">{card.title}</h4>
                <p className="il-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function InteractiveLinks() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="il-section">
      <div className="container headings">
        <h2 className="section-heading text-center mb-5">Core Service Offerings</h2>
      </div>
      <div className="container il-container">
        {INTERACTIVE_LINKS.map((link, index) => (
          <AccordionLink
            key={link.title}
            {...link}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}

