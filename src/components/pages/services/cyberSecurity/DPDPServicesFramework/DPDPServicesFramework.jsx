import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, 
  FaCogs, 
  FaShieldAlt, 
  FaLaptopCode, 
  FaUserTie, 
  FaLayerGroup,
  FaCheckCircle,
  FaArrowRight,
  FaBoxOpen,
  FaFileContract
} from 'react-icons/fa';
import './DPDPServicesFramework.css';

const TABS_DATA = [
  {
    id: 'assess',
    tabNumber: '2.1',
    label: 'Assess',
    tagline: 'Establish the Baseline',
    icon: FaSearch,
    badge: 'Phase 1',
    description: 'Diagnose exposure, identify data repositories, categorize personal data flows, and establish clear technical & legal benchmarks.',
    items: [
      {
        id: 1,
        offering: 'DPDP applicability and scoping assessment',
        deliverable: 'Confirmation of role as Data Fiduciary or Processor, entities and systems in scope, and likely Significant Data Fiduciary status.',
        delivery: 'C',
        deliveryLabel: 'Consulting'
      },
      {
        id: 2,
        offering: 'Gap assessment against the Act and Rules',
        deliverable: 'Obligation-by-obligation gap report with severity, owner, and effort estimation for remediation.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 3,
        offering: 'Personal data discovery and inventory',
        deliverable: 'Automated inventory of where personal data lives across applications, databases, endpoints, cloud landing zones, and third parties.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 4,
        offering: 'Data flow mapping',
        deliverable: 'Documented visual flows showing collection, purpose, processing, sharing, storage location, and cross-border movement.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 5,
        offering: 'Processing activity register',
        deliverable: 'A maintained record of processing activities, purposes, and legal bases, kept continuously current in Fortress.',
        delivery: 'P',
        deliveryLabel: 'Platform'
      },
      {
        id: 6,
        offering: 'Data Protection Impact Assessment (DPIA)',
        deliverable: 'DPIA methodology and completed assessments for high-risk processing; mandatory and annual for Significant Data Fiduciaries.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 7,
        offering: 'Cross-border transfer assessment',
        deliverable: 'Review of international transfers and hosting against statutory restrictions, accompanied by actionable remediation options.',
        delivery: 'C',
        deliveryLabel: 'Consulting'
      },
      {
        id: 8,
        offering: 'Processor and vendor risk assessment',
        deliverable: 'Assessment of every processor handling personal data, including risk ratings and vendor contract gap analysis.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 9,
        offering: 'Readiness roadmap and budget',
        deliverable: 'Phased implementation blueprint leading up to the 13 May 2027 enforcement deadline with effort, cost, and sequencing.',
        delivery: 'C',
        deliveryLabel: 'Consulting'
      }
    ]
  },
  {
    id: 'implement',
    tabNumber: '2.2',
    label: 'Implement',
    tagline: 'Build the Controls',
    icon: FaCogs,
    badge: 'Phase 2',
    description: 'Engineer and deploy operational, consent, technical, and governance controls required under the statutory rules.',
    items: [
      {
        id: 10,
        offering: 'Consent management',
        deliverable: 'Consent capture, withdrawal, and renewal flows; consent artefacts and an auditable consent record; readiness to integrate with registered Consent Managers.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 11,
        offering: 'Privacy notice framework',
        deliverable: 'Itemised, plain-language notices per collection touchpoint, including multi-language versions as mandated by the Act.',
        delivery: 'C',
        deliveryLabel: 'Consulting'
      },
      {
        id: 12,
        offering: 'Data principal rights management',
        deliverable: 'Request intake portal, identity verification, SLA tracking, and fulfilment for access, correction, erasure, nomination, and grievance redressal.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 13,
        offering: 'Grievance redressal mechanism',
        deliverable: 'Published grievance channel, transparent escalation path, response timeline enforcement, and regulator reporting.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 14,
        offering: 'Retention and erasure controls',
        deliverable: 'Retention schedules categorized by data classification, automated erasure triggers, advance notice to data principals, and deletion evidence logs.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 15,
        offering: 'Reasonable security safeguards',
        deliverable: 'Encryption, access control, centralized logging and retention of logs, DLP, and telemetry monitoring mapped to the Rules and implemented with Pulse.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 16,
        offering: 'Personal data breach management',
        deliverable: 'Detection-to-notification automated workflow, Board and data principal notification templates, strict statutory timelines, and forensics evidence trail.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 17,
        offering: "Children's data & verifiable parental consent",
        deliverable: 'Age-assurance architecture, parental consent verification flows, and enforcement of restrictions on behavioral tracking and targeted advertising.',
        delivery: 'C',
        deliveryLabel: 'Consulting'
      },
      {
        id: 18,
        offering: 'Significant Data Fiduciary obligations',
        deliverable: 'DPO appointment support, annual DPIA framework, independent audit readiness, and algorithmic due diligence reviews.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 19,
        offering: 'Processor contracts and DPAs',
        deliverable: 'Reviewed, legally remediated contract clauses and Data Processing Agreements for every external processor and sub-processor.',
        delivery: 'C',
        deliveryLabel: 'Consulting'
      },
      {
        id: 20,
        offering: 'Policies and governance framework',
        deliverable: 'Comprehensive privacy policy set, operational roles & responsibilities, approval workflows, and board-level reporting structures.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 21,
        offering: 'Training and awareness',
        deliverable: 'Role-based compliance training for staff, engineering teams, and the DPO office, with completion tracking held as audit evidence.',
        delivery: 'C',
        deliveryLabel: 'Consulting'
      }
    ]
  },
  {
    id: 'sustain',
    tabNumber: '2.3',
    label: 'Sustain',
    tagline: 'Keep It Compliant',
    icon: FaShieldAlt,
    badge: 'Phase 3',
    description: 'Ensure ongoing posture assurance, continuous audit readiness, fast breach response retainers, and outsourced DPO leadership.',
    items: [
      {
        id: 22,
        offering: 'DPO as a service',
        deliverable: 'A designated privacy officer, continuous grievance handling, internal oversight, and official regulator correspondence support.',
        delivery: 'C',
        deliveryLabel: 'Consulting'
      },
      {
        id: 23,
        offering: 'Annual DPIA & independent audit support',
        deliverable: 'Yearly risk re-assessment, control verification, and third-party audit preparation for Significant Data Fiduciaries.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      },
      {
        id: 24,
        offering: 'Continuous compliance monitoring',
        deliverable: 'Live control verification, automated configuration drift alerts, and periodic re-assessment cycles managed in Fortress.',
        delivery: 'P',
        deliveryLabel: 'Platform'
      },
      {
        id: 25,
        offering: 'Breach response retainer',
        deliverable: 'Pre-agreed DFIR (Digital Forensics & Incident Response) support with notification decision-making inside the statutory reporting window.',
        delivery: 'C',
        deliveryLabel: 'Consulting'
      },
      {
        id: 26,
        offering: 'Quarterly compliance review',
        deliverable: 'Executive posture report, active gap tracking, risk exposure trending, and quarterly board presentation pack.',
        delivery: 'P+C',
        deliveryLabel: 'Platform + Consulting'
      }
    ]
  }
];

const PACKAGES = [
  {
    id: 'snapshot',
    name: 'Snapshot',
    tag: 'Quick Start',
    scope: 'Items 1–2',
    scopeDesc: 'Applicability, scoping and gap assessment with a prioritised roadmap',
    bestFor: 'Any organisation that has not started, and every sales conversation as the entry offer.',
    highlight: false
  },
  {
    id: 'readiness',
    name: 'Readiness',
    tag: 'Popular',
    scope: 'Items 1–9',
    scopeDesc: 'Full assessment, discovery, flow mapping, DPIA and vendor review plus the roadmap',
    bestFor: 'Organisations that know they are exposed and need a costed, sequenced plan.',
    highlight: true
  },
  {
    id: 'implementation',
    name: 'Implementation',
    tag: 'Execution',
    scope: 'Items 10–21',
    scopeDesc: 'Delivered in Fortress with hands-on consulting support across all controls',
    bestFor: 'Organisations executing against the May 2027 statutory enforcement deadline.',
    highlight: false
  },
  {
    id: 'managed',
    name: 'Managed DPDP',
    tag: 'Annual Retainer',
    scope: 'Items 22–26',
    scopeDesc: 'Ongoing monitoring, DPO support, annual audits, and incident retainers',
    bestFor: 'Significant Data Fiduciaries and organisations without an internal privacy function.',
    highlight: false
  }
];

const DPDPServicesFramework = () => {
  const [activeTab, setActiveTab] = useState('assess');

  const currentTabContent = TABS_DATA.find((tab) => tab.id === activeTab) || TABS_DATA[0];

  return (
    <section className="dpdp-framework-section" id="dpdp-framework">
      <div className="container">
        {/* Header Block */}
        <motion.div 
          className="dpdp-framework-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="dpdp-framework-eyebrow">
            <FaLayerGroup className="me-2" />
            DPDP Service Framework
          </span>
          <h2 className="section-heading text-start">
            Comprehensive DPDP Compliance Lifecycle
          </h2>
          <p className="cap-description text-start dpdp-framework-subtitle">
            A structured, 3-phase methodology to navigate the Digital Personal Data Protection Act—from initial scoping and technical discovery to operational implementation and continuous compliance assurance.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="dpdp-tabs-nav-wrapper">
          <div className="dpdp-tabs-nav" role="tablist">
            {TABS_DATA.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`dpdp-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="dpdp-tab-indicator-bar" />
                  <div className="dpdp-tab-btn-header">
                    {/* <span className="dpdp-tab-number-pill">{tab.tabNumber}</span> */}
                    {/* <span className="dpdp-tab-phase-badge">{tab.badge}</span> */}
                  </div>
                  <div className="dpdp-tab-btn-body">
                    <div className="dpdp-tab-icon-box">
                      <Icon />
                    </div>
                    <div className="dpdp-tab-text">
                      <span className="dpdp-tab-title">{tab.label}</span>
                      <span className="dpdp-tab-tagline">{tab.tagline}</span>
                    </div>
                  </div>
                  <span className="dpdp-tab-count">{tab.items.length} Offerings</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Delivery Legend Bar */}
        <div className="dpdp-legend-bar">
          <span className="dpdp-legend-label">Delivery Modes:</span>
          <div className="dpdp-legend-items">
            <div className="dpdp-legend-item">
              <span className="dpdp-badge dpdp-badge-platform">
                <FaLaptopCode /> P
              </span>
              <span className="dpdp-legend-desc"><strong>Fortress platform</strong> </span>
            </div>
            <div className="dpdp-legend-item">
              <span className="dpdp-badge dpdp-badge-consulting">
                <FaUserTie /> C
              </span>
              <span className="dpdp-legend-desc"><strong>Consulting</strong></span>
            </div>
            <div className="dpdp-legend-item">
              <span className="dpdp-badge dpdp-badge-hybrid">
                <FaShieldAlt /> P+C
              </span>
              <span className="dpdp-legend-desc"><strong>Both:</strong></span>
            </div>
          </div>
        </div>

        {/* Tab Content Panel */}
        <div className="dpdp-tab-content-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="dpdp-tab-pane"
            >
              {/* Phase Banner */}
              <div className="dpdp-phase-intro">
                <div className="dpdp-phase-badge-lg">{currentTabContent.tabNumber} {currentTabContent.label}</div>
                <h3 className="dpdp-phase-heading">{currentTabContent.tagline}</h3>
                <p className="dpdp-phase-desc">{currentTabContent.description}</p>
              </div>

              {/* Offerings Table / Card View */}
              <div className="dpdp-offerings-table-container">
                <div className="dpdp-table-header d-none d-lg-grid">
                  <div className="dpdp-th-num">#</div>
                  <div className="dpdp-th-offering">Offering</div>
                  <div className="dpdp-th-gets">What the Client Gets</div>
                  <div className="dpdp-th-delivery">Delivery</div>
                </div>

                <div className="dpdp-offerings-list">
                  {currentTabContent.items.map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className="dpdp-offering-row"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                    >
                      <div className="dpdp-cell-num">
                        <span className="dpdp-num-pill">{String(item.id).padStart(2, '0')}</span>
                      </div>
                      
                      <div className="dpdp-cell-offering">
                        <h4 className="dpdp-offering-name">{item.offering}</h4>
                      </div>

                      <div className="dpdp-cell-gets">
                        <p className="dpdp-gets-text">{item.deliverable}</p>
                      </div>

                      <div className="dpdp-cell-delivery">
                        <span 
                          className={`dpdp-badge ${
                            item.delivery === 'P' 
                              ? 'dpdp-badge-platform' 
                              : item.delivery === 'C' 
                              ? 'dpdp-badge-consulting' 
                              : 'dpdp-badge-hybrid'
                          }`}
                          title={`Delivery Mode: ${item.deliveryLabel}`}
                        >
                          {item.delivery === 'P' && <FaLaptopCode />}
                          {item.delivery === 'C' && <FaUserTie />}
                          {item.delivery === 'P+C' && <FaShieldAlt />}
                          <span>{item.delivery}</span>
                          <span className="dpdp-badge-sublabel">{item.deliveryLabel}</span>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Suggested Packages Section */}
        <div className="dpdp-packages-wrapper">
          <div className="dpdp-packages-header">
            <div className="dpdp-packages-title-wrap">
              <span className="dpdp-packages-eyebrow">Engagement Options</span>
              <h3 className="dpdp-packages-heading">Suggested DPDP Packages</h3>
            </div>
            <p className="dpdp-packages-sub">
              Pre-scoped engagement bundles tailored to your organizational maturity and compliance roadmap.
            </p>
          </div>

          <div className="dpdp-packages-grid">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                className={`dpdp-package-card ${pkg.highlight ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {pkg.highlight && <div className="dpdp-package-featured-tag">Most Recommended</div>}
                <div className="dpdp-package-card-header">
                  <span className="dpdp-pkg-badge">{pkg.tag}</span>
                  <h4 className="dpdp-pkg-name">{pkg.name}</h4>
                </div>

                <div className="dpdp-pkg-scope-box">
                  <div className="dpdp-pkg-scope-label">Scope</div>
                  <div className="dpdp-pkg-scope-val">{pkg.scope}</div>
                  <p className="dpdp-pkg-scope-desc">{pkg.scopeDesc}</p>
                </div>

                <div className="dpdp-pkg-bestfor">
                  <span className="dpdp-pkg-bestfor-label">Best For</span>
                  <p className="dpdp-pkg-bestfor-text">{pkg.bestFor}</p>
                </div>

                <div className="dpdp-pkg-footer">
                  <a href="#contact" className="dpdp-pkg-btn">
                    <span>Inquire About Package</span>
                    <FaArrowRight size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DPDPServicesFramework;
