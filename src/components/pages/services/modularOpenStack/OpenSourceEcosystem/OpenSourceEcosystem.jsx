import React from 'react';
import { motion } from 'framer-motion';
import './OpenSourceEcosystem.css';

const ECOSYSTEM_GROUPS = [
  {
    id: 'orchestration',
    category: 'Orchestration & Platforms',
    description: 'Scalable container management and cloud-native computing platforms supporting resilient enterprise microservices.',
    technologies: [
      {
        name: 'Red Hat OpenShift',
        role: 'Enterprise Kubernetes Platform',
        logo: '/images/alliance-logos/redhat-openshift.svg',
        desc: 'Enterprise-grade turnkey application platform with automated operations, enterprise security, and unified multi-cloud management.',
        tags: ['Enterprise K8s', 'Hybrid Cloud', 'DevSecOps'],
      },
      {
        name: 'Kubernetes',
        role: 'Cloud-Native Container Orchestration',
        logo: '/images/alliance-logos/kubernetes.svg',
        desc: 'Production-grade container scheduling, automated scaling, declarative desired-state management, and automated rollouts.',
        tags: ['Container Engine', 'Auto-Scaling', 'Self-Healing'],
      },
      {
        name: 'OpenStack',
        role: 'Infrastructure-as-a-Service (IaaS)',
        logo: '/images/alliance-logos/openstack.svg',
        desc: 'Massive-scale private cloud infrastructure orchestration providing programmable compute, storage, and networking pools.',
        tags: ['Private Cloud', 'Bare-Metal & VM', 'Open IaaS'],
      },
    ],
  },
  {
    id: 'iac-automation',
    category: 'Automation & Declarative IaC',
    description: 'Programmable infrastructure and automated configuration frameworks eliminating environmental drift and human latency.',
    technologies: [
      {
        name: 'Terraform',
        role: 'Declarative Infrastructure Provisioning',
        logo: '/images/alliance-logos/teerraform.svg',
        desc: 'Standardized infrastructure-as-code for provisioning, updating, and versioning across multi-cloud and on-premise footprints.',
        tags: ['Multi-Cloud IaC', 'State Mgmt', 'Immutable Infra'],
      },
      {
        name: 'Ansible',
        role: 'Configuration & Delivery Automation',
        logo: '/images/alliance-logos/ansible.svg',
        desc: 'Agentless IT automation, configuration deployment, and multi-tier orchestration for rapid software release workflows.',
        tags: ['Agentless', 'Declarative Playbooks', 'Drift Control'],
      },
    ],
  },
  {
    id: 'runtimes-os',
    category: 'Operating Systems & Core Runtimes',
    description: 'Hardened, enterprise-certified Linux distributions engineered for deterministic security, isolation, and maximum compute throughput.',
    technologies: [
      {
        name: 'Enterprise Red Hat Linux',
        role: 'Enterprise Linux Runtime (RHEL)',
        logo: '/images/alliance-logos/redhat.svg',
        desc: 'Hardened enterprise operating foundation delivering deterministic security, SELinux enforcement, and certified platform reliability.',
        tags: ['Enterprise Linux', 'SELinux Hardened', 'Mission-Critical'],
      },
      {
        name: 'Ubuntu',
        role: 'Cloud & Container Optimized OS',
        logo: '/images/alliance-logos/ubuntu.svg',
        desc: 'Agile Linux operating system powering container engines, public cloud instances, and continuous delivery toolchains.',
        tags: ['Cloud-Native OS', 'Container Base', 'High Velocity'],
      },
      {
        name: 'SUSE Linux',
        role: 'High-Availability Enterprise OS',
        logo: '/images/alliance-logos/suse.svg',
        desc: 'Resilient, high-availability open-source infrastructure foundation optimized for critical enterprise database and ERP workloads.',
        tags: ['High Availability', 'Enterprise Workloads', 'Zero-Downtime Live Patching'],
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const OpenSourceEcosystem = () => {
  return (
    <section className="ose-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="ose-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="section-heading text-start">Supported Open-Source & Enterprise Ecosystem</h2>
          <p className="cap-description text-start">
            We integrate the industry's most robust, enterprise-validated open-source and cloud-native solutions to engineer bespoke software delivery platforms without vendor lock-in.
          </p>
        </motion.div>

        {/* Group Blocks */}
        <div className="ose-groups">
          {ECOSYSTEM_GROUPS.map((group, gIdx) => (
            <div key={group.id} className="ose-group">
              {/* Group Header */}
              <motion.div
                className="ose-group-header"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: gIdx * 0.05 }}
              >
                <div className="d-flex align-items-center gap-3">
                  <span className="ose-group-line" />
                  <span className="ose-group-name">{group.category}</span>
                </div>
                <p className="ose-group-desc">{group.description}</p>
              </motion.div>

              {/* Cards Grid */}
              <motion.div
                className={`ose-cards-grid ose-cards-count-${group.technologies.length}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={containerVariants}
              >
                {group.technologies.map((tech, tIdx) => (
                  <motion.div key={tIdx} className="ose-tech-card" variants={itemVariants}>
                    <div className="ose-card-top-bar" />
                    <div className="ose-card-header">
                      <div className="ose-logo-wrap">
                        <img src={tech.logo} alt={tech.name} className="ose-tech-logo" />
                      </div>
                      <span className="ose-role-tag">{tech.role}</span>
                    </div>
                    <h3 className="ose-tech-name">{tech.name}</h3>
                    <p className="ose-tech-desc">{tech.desc}</p>
                    <div className="ose-tags-row">
                      {tech.tags.map((tag, idx) => (
                        <span key={idx} className="ose-tag-pill">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceEcosystem;
