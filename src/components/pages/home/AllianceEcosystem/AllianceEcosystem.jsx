import React, { useState, useRef, useEffect } from 'react'
import './AllianceEcosystem.css'

/* ─── Cloud, OS & Open Source ─── */
const AWSLogo         = () => <img src="/images/alliance-logos/aws.svg"          alt="AWS"          className="ae-logo-svg" />
const MicrosoftLogo   = () => <img src="/images/alliance-logos/microsoft.svg"    alt="Microsoft"    className="ae-logo-svg" />
const GoogleLogo      = () => <img src="/images/alliance-logos/google.svg"        alt="Google Cloud" className="ae-logo-svg" />
const RedHatLogo      = () => <img src="/images/alliance-logos/redhat.svg"        alt="Red Hat"      className="ae-logo-svg" />
const UbuntuLogo      = () => <img src="/images/alliance-logos/ubuntu.svg"        alt="Ubuntu"       className="ae-logo-svg" />
const SUSELogo        = () => <img src="/images/alliance-logos/suse.svg"          alt="SUSE"         className="ae-logo-svg" />
const OpenShiftLogo   = () => <img src="/images/alliance-logos/openshift.svg"     alt="OpenShift"    className="ae-logo-svg" />
const OpenStackLogo   = () => <img src="/images/alliance-logos/openstack.svg"     alt="OpenStack"    className="ae-logo-svg" />
const KubernetesLogo  = () => <img src="/images/alliance-logos/kubernetes.svg"    alt="Kubernetes"   className="ae-logo-svg" />
const AnsibleLogo     = () => <img src="/images/alliance-logos/ansible.svg"       alt="Ansible"      className="ae-logo-svg" />
const TerraformLogo   = () => <img src="/images/alliance-logos/teerraform.svg"    alt="Terraform"    className="ae-logo-svg" />

/* ─── Server, Storage & Network ─── */
const DellLogo        = () => <img src="/images/alliance-logos/dell.svg"          alt="Dell"         className="ae-logo-svg" />
const HPLogo          = () => <img src="/images/alliance-logos/hp.svg"            alt="HP"           className="ae-logo-svg" />
const CiscoLogo       = () => <img src="/images/alliance-logos/cisco.svg"         alt="Cisco"        className="ae-logo-svg" />
const NutanixLogo     = () => <img src="/images/alliance-logos/nutanix.svg"       alt="Nutanix"      className="ae-logo-svg" />
const NetAppLogo      = () => <img src="/images/alliance-logos/netapp.svg"        alt="NetApp"       className="ae-logo-svg" />
const ArubaLogo       = () => <img src="/images/alliance-logos/aruba.svg"         alt="Aruba"        className="ae-logo-svg" />
const RuckusLogo      = () => <img src="/images/alliance-logos/ruckus.svg"        alt="Ruckus"       className="ae-logo-svg" />

/* ─── Enterprise Cyber Security ─── */
const FortinetLogo    = () => <img src="/images/alliance-logos/fortniet.svg"      alt="Fortinet"     className="ae-logo-svg" />
const ZscalerLogo     = () => <img src="/images/alliance-logos/zscaler.svg"       alt="Zscaler"      className="ae-logo-svg" />
const TrendMicroLogo  = () => <img src="/images/alliance-logos/trendmicro.svg"    alt="Trend Micro"  className="ae-logo-svg" />
const NetscopeLogo    = () => <img src="/images/alliance-logos/netskope.svg"      alt="Netskope"     className="ae-logo-svg" />
const IndusfaceLogo   = () => <img src="/images/alliance-logos/indusface.svg"     alt="Indusface"    className="ae-logo-svg" />
const MSPurviewLogo   = () => <img src="/images/alliance-logos/ms-purview.svg"    alt="MS Purview"   className="ae-logo-svg" />
const CheckPointLogo  = () => <img src="/images/alliance-logos/checkpoint.svg"    alt="Check Point"  className="ae-logo-svg" />
const PaloAltoLogo    = () => <img src="/images/alliance-logos/paloalto.svg"      alt="Palo Alto Networks" className="ae-logo-svg" />
const CrowdStrikeLogo = () => <img src="/images/alliance-logos/crowdstrike.svg"    alt="CrowdStrike"  className="ae-logo-svg" />
const SentinelOneLogo = () => <img src="/images/alliance-logos/sentinelone.svg"    alt="SentinelOne"  className="ae-logo-svg" />
const DefenderLogo    = () => <img src="/images/alliance-logos/ms-defender.svg"    alt="Microsoft Defender" className="ae-logo-svg" />

/* ─── BCP & Enterprise Applications ─── */
const CommvaultLogo    = () => <img src="/images/alliance-logos/commvault.svg"    alt="Commvault"    className="ae-logo-svg" />
const BigFixLogo       = () => <img src="/images/alliance-logos/bigfix.svg"       alt="BigFix"       className="ae-logo-svg" />
const ManageEngineLogo = () => <img src="/images/alliance-logos/manageengine.svg" alt="ManageEngine" className="ae-logo-svg" />
const IrajeLogo        = () => <img src="/images/alliance-logos/iraje.svg"        alt="Iraje"        className="ae-logo-svg" />

/* ─── Access Control & Lifecycle Automation ─── */
const SailPointLogo   = () => <img src="/images/alliance-logos/sailpoint.svg"    alt="SailPoint"    className="ae-logo-svg" />
const SaviyntLogo     = () => <img src="/images/alliance-logos/saviynt.svg"      alt="Saviynt"      className="ae-logo-svg" />
const OktaLogo        = () => <img src="/images/alliance-logos/okta.svg"         alt="Okta"         className="ae-logo-svg" />
const CyberArkLogo    = () => <img src="/images/alliance-logos/cyberark-idira.svg"     alt="CyberArk"     className="ae-logo-svg" />
const F5Logo          = () => <img src="/images/alliance-logos/F5-logo.svg"          alt="F5"           className="ae-logo-svg" />

/* ─── Endpoint Detection & Analysis ─── */
const SophosLogo      = () => <img src="/images/alliance-logos/sophos.svg"       alt="Sophos"       className="ae-logo-svg" />

/* ─── Perimeter, Edge & Zero Trust ─── */
const CloudflareLogo  = () => <img src="/images/alliance-logos/cloudflare.svg"   alt="Cloudflare"   className="ae-logo-svg" />
const AkamaiLogo      = () => <img src="/images/alliance-logos/akamai.svg"       alt="Akamai"       className="ae-logo-svg" />

/* ─── Application & API Security ─── */
const BurpSuiteLogo   = () => <img src="/images/alliance-logos/burpsuite.svg"   alt="Burp Suite"   className="ae-logo-svg" />

const VerifiedBadge = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ae-badge-icon" aria-hidden="true">
        <path d="M12 2L14.7 4.2L18.1 3.8L19.1 7.1L22.2 8.7L21.4 12L22.2 15.3L19.1 16.9L18.1 20.2L14.7 19.8L12 22L9.3 19.8L5.9 20.2L4.9 16.9L1.8 15.3L2.6 12L1.8 8.7L4.9 7.1L5.9 3.8L9.3 4.2L12 2Z" fill="#D4A04A" />
        <path d="M9 12L11 14L15 9" stroke="#121417" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

/* ─────────────────────────────────────────────────────────────
   Categories Data
   ───────────────────────────────────────────────────────────── */
const categories = [
    {
        id: 'cloud-infra',
        label: 'Cloud, OS & Open Source',
        logos: [
            {
                id: 'aws',
                label: 'Amazon Web Services',
                render: () => <AWSLogo />,
                description: 'Premier Cloud Alliance Partner. Scalable compute, managed Kubernetes, serverless architectures, and deep security integration with AWS Security Hub.',
                capabilities: ['EKS Managed Kubernetes', 'AWS Security Hub', 'Multi-Account Governance']
            },
            {
                id: 'microsoft',
                label: 'Microsoft Azure',
                render: () => <MicrosoftLogo />,
                description: 'Gold Cloud Alliance Partner. Enterprise hybrid identity, Sentinel SIEM ingestion, and automated Azure Lighthouse management.',
                capabilities: ['Azure Sentinel Ingestion', 'Lighthouse Automation', 'ExpressRoute Monitoring']
            },
            {
                id: 'google',
                label: 'Google Cloud Platform',
                render: () => <GoogleLogo />,
                description: 'Strategic Cloud Partner. AI-powered infrastructure, GKE container orchestration, and enterprise-grade data analytics across global regions.',
                capabilities: ['GKE Autopilot', 'BigQuery Analytics', 'Security Command Center']
            },
            {
                id: 'redhat',
                label: 'Red Hat Enterprise',
                render: () => <RedHatLogo />,
                description: 'Our capabilities span Red Hat Enterprise Linux (RHEL), Red Hat OpenShift, Ansible Automation Platform, and Red Hat virtualization technologies, enabling organizations to build scalable, secure, automated, and highly available enterprise platforms.',
                capabilities: ['Architecture & Design ', 'Implementation & Deployment', 'Migration & Transformation', 'OpenShift']
            },
            {
                id: 'ubuntu',
                label: 'Canonical Ubuntu',
                render: () => <UbuntuLogo />,
                description: 'End-to-end expertise in designing, deploying, managing, and optimizing Canonical Ubuntu solutions across complex enterprise IT environments. Strong delivery capabilities across Ubuntu Server, Ubuntu Pro, Landscape, MAAS, OpenStack, and Kubernetes, supporting on-premises, cloud, and hybrid infrastructure.',
                capabilities: ['Ubuntu Server', 'Ubuntu Pro', 'Landscape', 'MAAS', 'OpenStack', 'Kubernetes']
            },
            {
                id: 'suse',
                label: 'SUSE Linux Enterprise',
                render: () => <SUSELogo />,
                description: 'End-to-End SUSE Enterprise Expertise in designing, deploying, managing, and optimizing SUSE solutions across complex enterprise IT environments. Proven capabilities across SUSE Linux Enterprise Server (SLES), SUSE Manager, Rancher, Kubernetes, and cloud-native platforms, supporting mission-critical workloads across on-premises, cloud, and hybrid environments.',
                capabilities: ['SUSE Linux Enterprise Server (SLES)', 'SUSE Manager', 'Rancher', 'Kubernetes']
            },
            {
                id: 'openshift',
                label: 'Red Hat OpenShift',
                render: () => <OpenShiftLogo />,
                description: 'Hybrid cloud container platform with built-in DevSecOps tooling, mesh routing, and automated compliance.',
                capabilities: ['Multi-Cluster Mgmt', 'GitOps Workflows', 'Service Mesh Security']
            },
            {
                id: 'openstack',
                label: 'OpenStack Platform',
                render: () => <OpenStackLogo />,
                description: 'Open-source cloud operating system delivering resilient software-defined compute, storage, and networking.',
                capabilities: ['IaaS Orchestration', 'Neutron Networking', 'Cinder Storage API']
            },
            {
                id: 'kubernetes',
                label: 'Kubernetes Cloud Native',
                render: () => <KubernetesLogo />,
                description: 'De-facto container orchestration engine enabling automated scaling, self-healing, and declarative ops.',
                capabilities: ['Custom Controllers', 'Ingress Routing', 'Auto-Scaling Policies']
            },
            {
                id: 'ansible',
                label: 'Red Hat Ansible',
                render: () => <AnsibleLogo />,
                description: 'Agentless IT automation engine simplifying multi-cloud configuration, patching, and provisioning.',
                capabilities: ['Playbook Orchestration', 'AAP Automation Controller', 'Drift Remediation']
            },
            {
                id: 'terraform',
                label: 'HashiCorp Terraform',
                render: () => <TerraformLogo />,
                description: 'Infrastructure as Code provider standardizing multi-cloud provisioning and state governance.',
                capabilities: ['State Lock & Sync', 'Drift Detection', 'CI/CD Pipeline Integration']
            }
        ]
    },
    {
        id: 'server-storage-network',
        label: 'Server, Storage & Network',
        logos: [
            {
                id: 'dell',
                label: 'Dell Enterprise Infrastructure',
                render: () => <DellLogo />,
                description: 'Next-gen enterprise server and storage infrastructure with automated telemetry and integrated lifecycle management.',
                capabilities: ['iDRAC Telemetry', 'PowerStore API', 'VxRail Hyperconverged']
            },
            {
                id: 'hp',
                label: 'Hewlett Packard',
                render: () => <HPLogo />,
                description: 'Edge-to-cloud compute platform delivering high-density performance and hybrid cloud management.',
                capabilities: ['iLO RESTful API', 'GreenLake Integration', 'ProLiant Performance']
            },
            {
                id: 'cisco',
                label: 'Cisco Systems',
                render: () => <CiscoLogo />,
                description: 'Software-defined networking, fabric switching, and real-time network telemetry for enterprise data centers.',
                capabilities: ['ACI Fabric Control', 'Intersight Cloud Mgmt', 'DNA Center Integration']
            },
            {
                id: 'nutanix',
                label: 'Nutanix Cloud',
                render: () => <NutanixLogo />,
                description: 'Hyperconverged infrastructure platform unifying compute, virtualization, and storage management.',
                capabilities: ['AHV Hypervisor Mgmt', 'Prism Central Automation', 'Flow Security Policies']
            },
            {
                id: 'netapp',
                label: 'NetApp Storage',
                render: () => <NetAppLogo />,
                description: 'Intelligent data infrastructure delivering unified storage, data management, and cloud data services across hybrid environments.',
                capabilities: ['ONTAP Data Management', 'StorageGRID Object Store', 'Cloud Volumes ONTAP']
            },
            {
                id: 'aruba',
                label: 'Aruba Networks',
                render: () => <ArubaLogo />,
                description: 'AI-driven wired and wireless networking with automated policy enforcement and edge-to-cloud security integration.',
                capabilities: ['Aruba Central AIOps', 'ClearPass NAC', 'SD-WAN Orchestration']
            },
            {
                id: 'ruckus',
                label: 'Ruckus Networks',
                render: () => <RuckusLogo />,
                description: 'High-density wireless and wired networking solutions with intelligent traffic management for enterprise deployments.',
                capabilities: ['SmartZone Controller', 'BeamFlex+ Antenna', 'IoT Device Management']
            }
        ]
    },
    {
        id: 'cyber-security',
        label: 'Enterprise Cyber Security',
        logos: [
            {
                id: 'fortinet',
                label: 'Fortinet Security Fabric',
                render: () => <FortinetLogo />,
                description: 'Proven experience in designing and managing Fortinet security ecosystems, including next-generation firewalls, secure SD-WAN, and Zero Trust Network Access solutions. Our capabilities span network segmentation, threat prevention, secure remote access, and enterprise-wide security architecture modernization.',
                capabilities: ['FortiGate Firewalls', 'FortiManager Orchestration', 'ZTNA Access Control']
            },
            {
                id: 'zscaler',
                label: 'Zscaler Zero Trust',
                render: () => <ZscalerLogo />,
                description: 'Extensive experience in implementing Zscaler Zero Trust Exchange solutions, enabling secure access to applications, internet resources, and cloud services without dependence on traditional VPN architectures. Our expertise includes ZIA, ZPA, policy optimization, secure access controls, and cloud-delivered security transformation initiatives.',
                capabilities: ['ZIA Internet Access', 'ZPA Private Access', 'Zero Trust Architecture']
            },
            {
                id: 'trendmicro',
                label: 'Trend Micro',
                render: () => <TrendMicroLogo />,
                description: 'Experienced in implementing Trend Micro Vision One and endpoint security solutions to strengthen threat detection, response, and attack surface management capabilities. Our expertise includes endpoint protection, XDR integration, threat hunting, incident response, and security operations enhancement.',
                capabilities: ['Trend Vision One XDR', 'Cloud One Security', 'Deep Security Agent']
            },
            {
                id: 'netskope',
                label: 'Netskope SASE',
                render: () => <NetscopeLogo />,
                description: 'Strong expertise in deploying Netskope Secure Access Service Edge (SASE) and Cloud Access Security Broker (CASB) solutions to enhance visibility, data protection, and secure cloud adoption. Our experience includes implementing Zero Trust policies, DLP controls, SaaS security governance, and user activity monitoring across hybrid environments.',
                capabilities: ['Netskope CASB', 'Inline DLP Inspection', 'ZTNA Secure Access']
            },
            {
                id: 'indusface',
                label: 'Indusface AppTrana',
                render: () => <IndusfaceLogo />,
                description: 'Fully managed web application and API protection with risk-based monitoring and zero false-positive WAF enforcement.',
                capabilities: ['Managed WAF Service', 'API Security Testing', 'DDoS Protection']
            },
            {
                id: 'ms-purview',
                label: 'Microsoft Purview',
                render: () => <MSPurviewLogo />,
                description: 'Unified data governance and compliance platform delivering sensitive data discovery, classification, and risk management.',
                capabilities: ['Data Loss Prevention', 'Information Protection', 'Insider Risk Management']
            },
            {
                id: 'checkpoint',
                label: 'Check Point',
                render: () => <CheckPointLogo />,
                description: 'Extensive knowledge in deploying Check Point security platforms for network security, threat prevention, cloud security, and Zero Trust initiatives. We have significant experience in policy management, intrusion prevention, advanced threat protection, and securing distributed enterprise environments.',
                capabilities: ['Threat Prevention', 'Cloud & Network Security', 'Zero Trust Architecture']
            },
            {
                id: 'paloalto',
                label: 'Palo Alto Networks',
                render: () => <PaloAltoLogo />,
                description: 'Strong expertise in deploying and evaluating Palo Alto Networks security solutions, including Prisma Access and Zero Trust architectures. Experienced in securing users, applications, and cloud environments against evolving cyber threats.',
                capabilities: ['Prisma Access SASE', 'Zero Trust Architecture', 'Next-Gen Firewalls']
            },
            {
                id: 'crowdstrike',
                label: 'CrowdStrike',
                render: () => <CrowdStrikeLogo />,
                description: 'Strong expertise in deploying and optimizing CrowdStrike Falcon for endpoint protection, threat detection, and incident response. Experienced in improving threat visibility and enhancing security operations capabilities.',
                capabilities: ['Falcon Endpoint Protection', 'Threat Detection & XDR', 'Incident Response']
            },
            {
                id: 'sentinelone',
                label: 'SentinelOne',
                render: () => <SentinelOneLogo />,
                description: 'Hands-on experience in implementing SentinelOne for autonomous endpoint protection and advanced threat response. Proven ability to strengthen endpoint security posture and accelerate threat containment.',
                capabilities: ['Autonomous EDR / XDR', 'Threat Containment', 'Endpoint Security Posture']
            },
            {
                id: 'ms-defender',
                label: 'Microsoft Defender for Endpoint',
                render: () => <DefenderLogo />,
                description: 'Extensive experience in implementing and assessing Microsoft Defender for Endpoint security controls and EDR capabilities. Expertise in vulnerability management, endpoint protection, and threat monitoring.',
                capabilities: ['EDR & Threat Monitoring', 'Vulnerability Management', 'Endpoint Protection']
            }
        ]
    },
    {
        id: 'bcp-enterprise-apps',
        label: 'BCP & Enterprise Applications',
        logos: [
            {
                id: 'commvault',
                label: 'Commvault Data Platform',
                render: () => <CommvaultLogo />,
                description: 'Enterprise backup, recovery, and data resilience solution across multi-cloud, virtual, and physical workloads.',
                capabilities: ['Intelligent Recovery', 'Ransomware Protection', 'Multi-Cloud Replication']
            },
            {
                id: 'bigfix',
                label: 'HCL BigFix',
                render: () => <BigFixLogo />,
                description: 'Unified endpoint management and security compliance automation for large-scale enterprise endpoint governance.',
                capabilities: ['Patch Management', 'Compliance Reporting', 'Software Distribution']
            },
            {
                id: 'manageengine',
                label: 'ManageEngine',
                render: () => <ManageEngineLogo />,
                description: 'Comprehensive IT management suite covering service desk, unified endpoint management, and security analytics.',
                capabilities: ['ServiceDesk Plus', 'Endpoint Central UEM', 'Log360 SIEM']
            },
            {
                id: 'iraje',
                label: 'Iraje PAM',
                render: () => <IrajeLogo />,
                description: 'Privileged Access Management solution providing granular session recording, just-in-time access, and audit compliance.',
                capabilities: ['Session Recording', 'Just-In-Time Access', 'Privileged Audit Trails']
            }
        ]
    },
    {
        id: 'access-control-lifecycle',
        label: 'Access Control & Lifecycle Automation',
        logos: [
            {
                id: 'microsoft',
                label: 'Microsoft Entra ID',
                render: () => <MicrosoftLogo />,
                description: 'Hands-on experience in implementing and assessing Microsoft Entra ID security controls and identity governance capabilities. Expertise in Conditional Access, Privileged Identity Management (PIM), and Zero Trust adoption.',
                capabilities: ['Conditional Access', 'Privileged Identity Management (PIM)', 'Zero Trust adoption']
            },
            {
                id: 'cyberArk',
                label: 'IDIRA (Previously CyberArk)',
                render: () => <CyberArkLogo />,
                description: 'Extensive experience in Privileged Access Management (PAM) assessments and CyberArk implementations. Skilled in securing privileged accounts, enforcing least-privilege principles, and reducing insider threats.',
                capabilities: ['Session Recording', 'Just-In-Time Access', 'Privileged Audit Trails']
            },
        ]
    },
    {
        id: 'endpoint-detection-analysis',
        label: 'Endpoint Detection & Analysis (EDR & XDR)',
        logos: [
            {
                id: 'crowdstrike',
                label: 'CrowdStrike',
                render: () => <CrowdStrikeLogo />,
                description: 'Strong expertise in deploying and optimizing CrowdStrike Falcon for endpoint protection, threat detection, and incident response. Experienced in improving threat visibility and enhancing security operations capabilities.',
                capabilities: ['Falcon Endpoint Protection', 'Threat Detection & XDR', 'Incident Response']
            },
            {
                id: 'sentinelone',
                label: 'SentinelOne',
                render: () => <SentinelOneLogo />,
                description: 'Hands-on experience in implementing SentinelOne for autonomous endpoint protection and advanced threat response. Proven ability to strengthen endpoint security posture and accelerate threat containment.',
                capabilities: ['Autonomous EDR / XDR', 'Threat Containment', 'Endpoint Security Posture']
            },
            {
                id: 'ms-defender',
                label: 'Microsoft Defender for Endpoint',
                render: () => <DefenderLogo />,
                description: 'Extensive experience in implementing and assessing Microsoft Defender for Endpoint security controls and EDR capabilities. Expertise in vulnerability management, endpoint protection, and threat monitoring.',
                capabilities: ['EDR & Threat Monitoring', 'Vulnerability Management', 'Endpoint Protection']
            },
            {
                id: 'trendmicro',
                label: 'Trend Micro',
                render: () => <TrendMicroLogo />,
                description: 'Experienced in implementing Trend Micro Vision One and endpoint security solutions to strengthen threat detection, response, and attack surface management capabilities. Our expertise includes endpoint protection, XDR integration, threat hunting, incident response, and security operations enhancement.',
                capabilities: ['Trend Vision One XDR', 'Cloud One Security', 'Deep Security Agent']
            },
        ]
    },
    {
        id: 'perimeter-edge-zero-trust',
        label: 'Perimeter, Edge & Zero Trust',
        logos: [
            {
                id: 'zscaler',
                label: 'Zscaler Zero Trust',
                render: () => <ZscalerLogo />,
                description: 'Extensive experience in implementing Zscaler Zero Trust Exchange solutions, enabling secure access to applications, internet resources, and cloud services without dependence on traditional VPN architectures. Our expertise includes ZIA, ZPA, policy optimization, secure access controls, and cloud-delivered security transformation initiatives.',
                capabilities: ['ZIA Internet Access', 'ZPA Private Access', 'Zero Trust Architecture']
            },
            {
                id: 'netskope',
                label: 'Netskope SASE',
                render: () => <NetscopeLogo />,
                description: 'Strong expertise in deploying Netskope Secure Access Service Edge (SASE) and Cloud Access Security Broker (CASB) solutions to enhance visibility, data protection, and secure cloud adoption. Our experience includes implementing Zero Trust policies, DLP controls, SaaS security governance, and user activity monitoring across hybrid environments.',
                capabilities: ['Netskope CASB', 'Inline DLP Inspection', 'ZTNA Secure Access']
            },
            {
                id: 'fortinet',
                label: 'Fortinet Security Fabric',
                render: () => <FortinetLogo />,
                description: 'Proven experience in designing and managing Fortinet security ecosystems, including next-generation firewalls, secure SD-WAN, and Zero Trust Network Access solutions. Our capabilities span network segmentation, threat prevention, secure remote access, and enterprise-wide security architecture modernization.',
                capabilities: ['FortiGate Firewalls', 'FortiManager Orchestration', 'ZTNA Access Control']
            },
            {
                id: 'checkpoint',
                label: 'Check Point',
                render: () => <CheckPointLogo />,
                description: 'Extensive knowledge in deploying Check Point security platforms for network security, threat prevention, cloud security, and Zero Trust initiatives. We have significant experience in policy management, intrusion prevention, advanced threat protection, and securing distributed enterprise environments.',
                capabilities: ['Threat Prevention', 'Cloud & Network Security', 'Zero Trust Architecture']
            },
            {
                id: 'paloalto',
                label: 'Palo Alto Networks',
                render: () => <PaloAltoLogo />,
                description: 'Strong expertise in deploying and evaluating Palo Alto Networks security solutions, including Prisma Access and Zero Trust architectures. Experienced in securing users, applications, and cloud environments against evolving cyber threats.',
                capabilities: ['Prisma Access SASE', 'Zero Trust Architecture', 'Next-Gen Firewalls']
            },
            
        ]
    },
    {
        id: 'app-api-security',
        label: 'Application & API Security',
        logos: [
            {
                id: 'indusface',
                label: 'Indusface',
                render: () => <IndusfaceLogo />,
                description: 'Proven expertise in securing web applications and APIs through advanced Web Application Firewall (WAF), API security, bot mitigation, and DDoS protection capabilities. Experienced in helping organizations strengthen application security, improve threat visibility, and protect critical digital assets from evolving cyber threats.',
                capabilities: ['Web Application Firewall (WAF)', 'API Security Testing', 'DDoS Protection']
            },
            {
                id: 'f5',
                label: 'F5',
                render: () => <F5Logo />,
                description: 'Proven expertise in deploying F5 application delivery and security solutions, including Web Application Firewall (WAF), API protection, DDoS mitigation, and traffic management. We have successfully enhanced application availability, performance, and security across on-premises, cloud, and hybrid infrastructures.',
                capabilities: ['Web Application Firewall (WAF)', 'API Protection', 'DDoS Mitigation']
            },
        ]
    }
]

/* ─────────────────────────────────────────────────────────────
   Main AllianceEcosystem Component
   ───────────────────────────────────────────────────────────── */
const AllianceEcosystem = () => {
    const [activeCatId, setActiveCatId] = useState('cloud-infra')
    const [activeLogoId, setActiveLogoId] = useState('aws')
    const sectionRef = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const activeCat = categories.find((c) => c.id === activeCatId) || categories[0]
    
    // Ensure active logo matches current category
    const activeLogo = activeCat.logos.find((l) => l.id === activeLogoId) || activeCat.logos[0]

    const handleCatChange = (catId) => {
        setActiveCatId(catId)
        const newCat = categories.find((c) => c.id === catId)
        if (newCat && newCat.logos.length > 0) {
            setActiveLogoId(newCat.logos[0].id)
        }
    }

    return (
        <section className="ae-section" ref={sectionRef} aria-label="Vendor-Agnostic Alliance Ecosystem">
            <div className="container">
                <div className="ae-inner">
                    {/* Heading */}
                    <div className={`ae-heading-wrap ${inView ? 'ae-heading-wrap--visible' : ''}`}>
                        <h2 className="section-heading text-start">
                            Vendor–Agnostic Alliance Ecosystem
                        </h2>
                    </div>

                    {/* Category Nav Tabs */}
                    <div className="ae-tabs-nav" role="tablist" aria-label="Alliance Categories">
                        {categories.map((cat) => {
                            const isActive = activeCatId === cat.id
                            return (
                                <button
                                    key={cat.id}
                                    role="tab"
                                    aria-selected={isActive}
                                    className={`ae-tab-btn ${isActive ? 'ae-tab-btn--active' : ''}`}
                                    onClick={() => handleCatChange(cat.id)}
                                >
                                    {cat.label}
                                </button>
                            )
                        })}
                    </div>

                    {/* Main Content Grid: Logos on Left, Details on Right */}
                    <div className="ae-content-grid">
                        {/* Logos Grid */}
                        <div className="ae-logos-grid">
                            {activeCat.logos.map((logo) => {
                                const isSelected = activeLogo.id === logo.id
                                return (
                                    <button
                                        key={logo.id}
                                        className={`ae-logo-card ${isSelected ? 'ae-logo-card--active' : ''}`}
                                        onClick={() => setActiveLogoId(logo.id)}
                                        aria-label={`Select ${logo.label}`}
                                    >
                                        {logo.render()}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Details Pane */}
                        <div className="ae-details-card">
                            <span className="ae-details-cat">{activeCat.label}</span>

                            <div className="ae-details-title-row">
                                <h3 className="ae-details-title">{activeLogo.label}</h3>
                                <VerifiedBadge />
                            </div>

                            <p className="ae-details-desc">{activeLogo.description}</p>

                            <div className="ae-capabilities-section">
                                <span className="ae-capabilities-label">CORE CAPABILITIES</span>
                                <div className="ae-capabilities-list">
                                    {activeLogo.capabilities.map((cap, i) => (
                                        <span key={i} className="ae-capability-pill">
                                            {cap}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a href="#integration-docs" className="ae-docs-btn">
                                VIEW INTEGRATION DOCS <span className="ae-btn-arrow">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="ae-divider" aria-hidden="true" />
            </div>
        </section>
    )
}

export default AllianceEcosystem

