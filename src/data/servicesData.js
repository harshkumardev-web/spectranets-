export const servicesData = [
  {
    id: "managed-internet-leased-line",
    title: "Managed Internet Leased Line",
    category: "Connectivity",
    tagline: "Dedicated 1:1 Symmetric Enterprise Bandwidth with Managed SLA",
    shortDescription: "Carrier-grade symmetric connectivity with end-to-end active management, proactive uptime monitoring, and guaranteed throughput for critical business applications.",
    icon: "Network",
    badge: "Enterprise Flagship",
    fullDescription: "Spectranets Managed Internet Leased Line (MILL) is specifically engineered for corporate headquarters, data centers, and multi-branch enterprises requiring continuous, uncompromised connectivity. Unlike shared connections, MILL delivers dedicated 1:1 symmetric upload and download speeds, fully managed CPE (Customer Premises Equipment), and enterprise-grade SLA backing.",
    features: [
      "Dedicated 1:1 uncontended bandwidth (no sharing)",
      "Symmetric upload and download capacity",
      "End-to-end proactive 24/7 network monitoring & NOC management",
      "Enterprise SLA commitment for latency, packet delivery, and uptime",
      "Dual-homing / path redundancy options available",
      "Managed router and security CPE included"
    ],
    technicalSpecs: [
      { label: "Contention Ratio", value: "Strict 1:1 Dedicated" },
      { label: "SLA Commitment", value: "99.5%+ Enterprise SLA" },
      { label: "Network Architecture", value: "Direct Tier-1 Fiber Backbone" },
      { label: "Monitoring", value: "24/7/365 Centralized NOC" }
    ],
    targetUseCases: [
      "Corporate Head Offices & Enterprise Campuses",
      "Core ERP, SAP, and Cloud Infrastructure access",
      "High-concurrency video conferencing & VoIP trunks"
    ]
  },
  {
    id: "sip-line",
    title: "SIP Line",
    category: "Communication",
    tagline: "Scalable IP-Based Enterprise Trunking for High-Volume Voice",
    shortDescription: "Next-generation digital voice trunking connecting your IP-PBX seamlessly over enterprise data networks, delivering crystalline call quality and limitless scalability.",
    icon: "PhoneCall",
    badge: "Next-Gen Voice",
    fullDescription: "Spectranets SIP Line (Session Initiation Protocol Trunking) replaces legacy analog and PRI lines with high-capacity digital voice streaming directly over our secure IP network. Designed for high-volume enterprise call centers, customer support hubs, and corporate switchboards.",
    features: [
      "Direct digital integration with all major IP-PBX systems",
      "Elastic channel scaling based on business call volume",
      "Crystal clear HD Voice codecs with low packet delay",
      "Direct Inward Dialing (DID) support for corporate extensions",
      "Disaster recovery call rerouting and failover routing",
      "Centralized billing and consolidated multi-location trunks"
    ],
    technicalSpecs: [
      { label: "Protocol Support", value: "SIP v2 / RFC 3261 Compliant" },
      { label: "Voice Codecs", value: "G.711u/a, G.729, HD Audio" },
      { label: "Channel Density", value: "Up to 1500+ Concurrent Channels" },
      { label: "Redundancy", value: "Multi-POP Automatic Failover" }
    ],
    targetUseCases: [
      "Enterprise Contact Centers & BPOs",
      "Multi-Branch Corporate Offices",
      "Financial Services & Customer Care Networks"
    ]
  },
  {
    id: "security-services",
    title: "Security Services",
    category: "Cloud & Security",
    tagline: "Multi-Layered Perimeter, Endpoint and Threat Defense for Business Networks",
    shortDescription: "Comprehensive enterprise cyber defense shielding corporate networks, cloud endpoints, and branch offices against ransomware, DDoS, and sophisticated intrusions.",
    icon: "ShieldCheck",
    badge: "Cyber Defense",
    fullDescription: "Protect critical corporate data assets with Spectranets Managed Security Services. We deploy multi-layered perimeter firewalls, automated DDoS mitigation, continuous threat inspection, and zero-trust network architectures tailored to business compliance and regulatory standards.",
    features: [
      "Next-Generation Firewall (NGFW) deployment and management",
      "Layer 3/4 and Layer 7 Enterprise DDoS attack mitigation",
      "Intrusion Detection & Prevention Systems (IDS/IPS)",
      "Zero Trust Network Access (ZTNA) and Secure Web Gateways",
      "Branch-to-Cloud encrypted IPsec & SSL VPN tunnels",
      "Compliance audit reporting (ISO, SOC, PCI-DSS aligned)"
    ],
    technicalSpecs: [
      { label: "Threat Engine", value: "AI-Powered Deep Packet Inspection" },
      { label: "DDoS Capacity", value: "Multi-Gigabit In-Line Scrubbing" },
      { label: "Encryption", value: "AES-256 IPsec / TLS 1.3" },
      { label: "Policy Management", value: "Centralized Enterprise Governance" }
    ],
    targetUseCases: [
      "Banking, Fintech & Financial Transactions",
      "Healthcare patient records & HIPAA compliant data",
      "Distributed corporate branch networking"
    ]
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    category: "Cloud & Security",
    tagline: "Direct Enterprise Interconnect to AWS, Azure, Google Cloud & Private Clouds",
    shortDescription: "High-speed, low-latency private cloud on-ramps and multi-cloud interconnects bypassing public internet congestion for maximum speed, consistency, and compliance.",
    icon: "Cloud",
    badge: "Cloud Direct",
    fullDescription: "Spectranets Enterprise Cloud Services establish dedicated, carrier-grade private connectivity between your corporate infrastructure and leading hyperscalers including AWS Direct Connect, Microsoft Azure ExpressRoute, and Google Cloud Interconnect.",
    features: [
      "Private bypass connectivity bypassing noisy public internet",
      "Ultra-low deterministic latency for hybrid cloud architectures",
      "Scalable bandwidth dynamically adjustable on enterprise demand",
      "Multi-cloud redundant meshed interconnects",
      "Guaranteed packet delivery and zero public exposure",
      "Private cloud storage and backup synchronization trunks"
    ],
    technicalSpecs: [
      { label: "Cloud Partners", value: "AWS, Azure, GCP, Oracle Cloud" },
      { label: "Connection Type", value: "Dedicated Layer 2 / Layer 3 Circuits" },
      { label: "Packet Loss", value: "< 0.05% Enterprise Standard" },
      { label: "Throughput", value: "100 Mbps to 10 Gbps Scalable" }
    ],
    targetUseCases: [
      "Hybrid & Multi-Cloud enterprise migrations",
      "Real-time database replication and disaster recovery",
      "Enterprise SaaS and remote desktop acceleration"
    ]
  },
  {
    id: "internet-leased-line",
    title: "Internet Leased Line",
    category: "Connectivity",
    tagline: "Pure Dedicated Fiber Pipe for High-Throughput Corporate Workloads",
    shortDescription: "High-bandwidth dedicated optical fiber circuit providing clean, unthrottled internet capacity with symmetric upstream and downstream speeds.",
    icon: "Cpu",
    badge: "High Throughput",
    fullDescription: "Spectranets Internet Leased Line (ILL) delivers a dedicated, uncontended transmission circuit connecting your corporate premises directly to our core fiber backbone. Engineered for mission-critical software, large file transfers, and uninterrupted operational reliability.",
    features: [
      "Unshared 1:1 dedicated fiber optic conduit",
      "Symmetric upload and download transmission speeds",
      "Static enterprise IPv4 and IPv6 block allocations",
      "Low-hop routing optimized for corporate global destinations",
      "Service Level Agreement for availability and performance",
      "Direct peering with major content delivery and cloud hubs"
    ],
    technicalSpecs: [
      { label: "Medium", value: "End-to-End Fiber Optic Cable" },
      { label: "IP Addressing", value: "Public Static IPv4/IPv6 Pool" },
      { label: "Availability", value: "High-Availability Ring Topology" },
      { label: "MTTR", value: "Industry-leading Mean Time to Restore" }
    ],
    targetUseCases: [
      "IT & Software Development Centers",
      "Corporate Headquarters & Technology Parks",
      "Heavy file transfer, CAD/CAM, and media processing"
    ]
  },
  {
    id: "smart-internet",
    title: "Smart Internet",
    category: "Connectivity",
    tagline: "SD-WAN Driven Intelligent Bandwidth Optimization & Application Control",
    shortDescription: "Software-defined smart connectivity with real-time application prioritization, dynamic bandwidth allocation, and multi-link intelligent failover.",
    icon: "Zap",
    badge: "SD-WAN Powered",
    fullDescription: "Smart Internet merges enterprise-grade fiber connectivity with intelligent SD-WAN edge software. It automatically detects and prioritizes business-critical applications such as Zoom, ERP, Teams, and VoIP over routine traffic, ensuring peak performance even during demand spikes.",
    features: [
      "Application-aware traffic steering and dynamic QoS prioritization",
      "Real-time dashboard with granular traffic analysis and device visibility",
      "Automatic failover between primary fiber and secondary links",
      "Content filtering, URL categorization, and employee bandwidth management",
      "Zero-touch automated edge deployment for rapid branch onboarding",
      "Centralized cloud console for enterprise IT management"
    ],
    technicalSpecs: [
      { label: "Technology", value: "Next-Gen SD-WAN Edge Controller" },
      { label: "Failover Speed", value: "Sub-second seamless link failover" },
      { label: "Application Visibility", value: "3000+ recognized enterprise apps" },
      { label: "Policy Control", value: "Role-based per-department rules" }
    ],
    targetUseCases: [
      "Fast-growing multi-location enterprise branches",
      "Offices running intensive hybrid cloud & SaaS apps",
      "Modern agile IT organizations needing centralized control"
    ]
  },
  {
    id: "business-broadband",
    title: "Business Broadband",
    category: "Connectivity",
    tagline: "High-Capacity Enterprise-Grade Fiber for Commercial Offices & SMEs",
    shortDescription: "Commercial-grade high-speed fiber internet designed exclusively for business offices, commercial buildings, and SMEs needing robust, reliable connectivity.",
    icon: "Building2",
    badge: "B2B Only",
    fullDescription: "Spectranets Business Broadband provides commercial buildings, offices, and SMEs with reliable high-speed internet built on enterprise fiber infrastructure. Unlike residential internet, this service delivers business-class routing, static IP configuration, and priority commercial support.",
    features: [
      "Commercial fiber infrastructure (strictly non-residential)",
      "High-speed throughput tailored for multi-user office environments",
      "Static IP support for office servers, biometrics, and CCTV systems",
      "Priority business-hours resolution and dedicated corporate helpdesk",
      "Clean commercial routing without consumer network congestion",
      "Scalable bandwidth upgrades as your office headcount expands"
    ],
    technicalSpecs: [
      { label: "Target Segment", value: "Commercial Offices & Business Parks" },
      { label: "IP Option", value: "Business Static IP included" },
      { label: "Bandwidth Tier", value: "Custom Enterprise Sizing" },
      { label: "Support Tier", value: "Dedicated Business Desk" }
    ],
    targetUseCases: [
      "Commercial Office Spaces & Co-working Centers",
      "SME Corporate Headquarters & Branch Outlets",
      "Office IoT, Biometric Access & Surveillance setups"
    ]
  },
  {
    id: "ivr-solutions",
    title: "IVR Solutions",
    category: "Communication",
    tagline: "Intelligent Multi-Level Cloud Interactive Voice Response Systems",
    shortDescription: "Automate, route, and streamline incoming enterprise customer calls with intelligent cloud IVR workflows, CRM integration, and 24/7 call tracking.",
    icon: "PhoneCall",
    badge: "Cloud Voice",
    fullDescription: "Spectranets Cloud IVR Solutions empower organizations to deliver smooth, professional telephone customer journeys. With customizable multi-level call routing, real-time call recording, agent analytics, and seamless CRM integrations, never miss a vital customer interaction.",
    features: [
      "Multi-level interactive voice menus with multi-lingual audio prompts",
      "Skill-based and department-based intelligent call routing",
      "Live call recording, cloud archiving, and quality auditing",
      "Real-time analytics dashboard with agent performance metrics",
      "Seamless API webhook integration with Salesforce, Zoho, HubSpot",
      "Virtual number hosting with custom welcome announcements"
    ],
    technicalSpecs: [
      { label: "Deployment", value: "100% Cloud Hosted Infrastructure" },
      { label: "Capacity", value: "Unlimited concurrent incoming channels" },
      { label: "CRM Sync", value: "REST API & Webhook Connectors" },
      { label: "Recording Storage", value: "Secure Encrypted Cloud Vault" }
    ],
    targetUseCases: [
      "Corporate Customer Care & Helplines",
      "Sales Lead Ingestion & Qualification teams",
      "Financial Services support & verification desks"
    ]
  },
  {
    id: "bulk-whatsapp-marketing",
    title: "Bulk WhatsApp Marketing",
    category: "Communication",
    tagline: "Official Meta-Approved WhatsApp Business API Messaging for Enterprise",
    shortDescription: "Drive high-engagement customer outreach, transactional alerts, and automated conversational journeys via verified enterprise WhatsApp Business API.",
    icon: "MessageSquare",
    badge: "Official API",
    fullDescription: "Spectranets Enterprise WhatsApp Business Solutions offer official, verified WhatsApp API integration for large-scale corporate communication. Broadcast announcements, automate customer onboarding, send OTPs and billing notifications, and deploy interactive chatbots.",
    features: [
      "Official Meta WhatsApp Business API with Green Tick verification support",
      "High-throughput transactional notifications, OTPs, and statements",
      "Interactive rich media messages: buttons, lists, catalogs, and PDFs",
      "Automated conversational AI chatbots and live agent inbox routing",
      "Complete delivery, read, and interaction analytics reporting",
      "Strict data privacy and end-to-end encryption compliance"
    ],
    technicalSpecs: [
      { label: "API Protocol", value: "Official Meta Cloud/On-Premises API" },
      { label: "Throughput", value: "Up to 500+ messages per second" },
      { label: "Security", value: "End-to-End Enterprise Encrypted" },
      { label: "Integration", value: "Webhooks, SDKs, REST APIs" }
    ],
    targetUseCases: [
      "Enterprise Transaction Alerts & Billing Notices",
      "Customer Support & Automated Bot Workflows",
      "E-Commerce & Service Renewal Notifications"
    ]
  },
  {
    id: "bulk-sms-services",
    title: "Bulk SMS Services",
    category: "Communication",
    tagline: "Carrier-Grade High-Throughput SMS Gateways for Critical Business Messaging",
    shortDescription: "Ultra-fast transactional, promotional, and OTP message delivery via direct enterprise telecom gateways with high delivery rates and DLT compliance.",
    icon: "Send",
    badge: "DLT Compliant",
    fullDescription: "Deliver mission-critical communications instantaneously with Spectranets Enterprise Bulk SMS infrastructure. Featuring direct multi-operator telecom interconnects, our platform guarantees rapid OTP delivery, high volume transactional throughput, and full regulatory compliance.",
    features: [
      "Direct Tier-1 telecom operator signaling links for instant delivery",
      "High-speed OTP routing with sub-5 second delivery guarantees",
      "Complete DLT registration support and template management",
      "Scalable RESTful API for seamless backend software integration",
      "Real-time delivery status reports (DLR) and detailed error analytics",
      "Two-way SMS messaging with virtual shortcodes and longcodes"
    ],
    technicalSpecs: [
      { label: "Delivery Speed", value: "Sub-5 seconds for Transactional/OTP" },
      { label: "Gateway Type", value: "Direct Multi-Telco SMPP 3.4 / HTTP API" },
      { label: "Compliance", value: "100% DLT / Regulatory Compliant" },
      { label: "Capacity", value: "Millions of messages/hour throughput" }
    ],
    targetUseCases: [
      "Banking & Payment Two-Factor Authentication (OTP)",
      "Logistics dispatch & operational tracking updates",
      "Enterprise service alerts & system outage broadcasts"
    ]
  },
  {
    id: "voice-call-solutions",
    title: "Voice Call Solutions",
    category: "Communication",
    tagline: "Enterprise Cloud Telephony, Click-to-Call & Automated Voice Broadcasting",
    shortDescription: "Robust cloud telephony architectures offering automated voice broadcasting, click-to-call integrations, and virtual number infrastructure for businesses.",
    icon: "Headphones",
    badge: "Cloud Telephony",
    fullDescription: "Spectranets Voice Call Solutions modernize how enterprise teams handle outbound and inbound telephony. From automated voice reminders and verification calls to secure number masking and CRM click-to-call, our cloud platform scales with your operational footprint.",
    features: [
      "Automated voice broadcasts with dynamic text-to-speech personalization",
      "Click-to-call browser & CRM extensions for sales teams",
      "Secure number masking to protect client and executive phone privacy",
      "Automated appointment reminders and survey polling",
      "Comprehensive call recordings with secure cloud retention",
      "Multi-agent call conferencing and enterprise hunt groups"
    ],
    technicalSpecs: [
      { label: "Deployment", value: "Enterprise Cloud / Hybrid Telephony" },
      { label: "Concurrent Lines", value: "Elastic multi-line scaling" },
      { label: "Privacy", value: "Full Number Masking & Data Masking" },
      { label: "Voice Engine", value: "Neural Text-To-Speech & Multi-Language" }
    ],
    targetUseCases: [
      "Healthcare patient appointment reminders",
      "Fintech collection & account verification notices",
      "E-commerce delivery agent number masking"
    ]
  }
];

export const serviceCategories = [
  "All Services",
  "Connectivity",
  "Cloud & Security",
  "Communication"
];
