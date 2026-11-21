export const companyInfo = {
  name: "SPECTRANETS",
  tagline: "Dedicated Internet Leased Line • SIP Trunking • Managed Wi-Fi, Cloud & Security",
  topTagline: "Dedicated Internet Leased Line • SIP Trunking • Managed Wi-Fi, Cloud & Security",
  contactPhone: "9891406594",
  formattedPhone: "+91 98914 06594",
  whatsappUrl: "https://wa.me/919891406594?text=Hello%20Spectranets,%20I%20would%20like%20to%20enquire%20about%20enterprise%20connectivity%20services%20for%20my%20business.",
  callUrl: "tel:+919891406594",
  address: "A 64, Sector 63, Noida, Uttar Pradesh – 201301, India",
  addressLine1: "A 64, Sector 63",
  addressLine2: "Noida, Uttar Pradesh – 201301, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=A+64,+Sector+63,+Noida,+Uttar+Pradesh+201301,+India",
  badge: "B2B Enterprise Only",
  b2bNotice: "SPECTRANETS delivers dedicated network and communication solutions exclusively to corporate enterprises, offices, and commercial organizations."
};

export const whyChooseData = [
  {
    id: 1,
    title: "Enterprise-Grade Connectivity",
    description: "Uncompromised 1:1 dedicated, uncontended bandwidth engineered to deliver deterministic speed, symmetrical throughput, and zero consumer interference for corporate workloads.",
    icon: "ShieldAlert",
    highlights: ["1:1 Uncontended Bandwidth", "Symmetric Speeds", "Low Latency Routing"]
  },
  {
    id: 2,
    title: "Reliable Network Infrastructure",
    description: "Robust multi-homed optical fiber backbone backed by redundant ring architectures, carrier-grade core switching, and proactive path failover for maximum business resilience.",
    icon: "Network",
    highlights: ["Redundant Fiber Rings", "Multi-POP Topologies", "Zero Single Points of Failure"]
  },
  {
    id: 3,
    title: "Dedicated Business Support",
    description: "Round-the-clock enterprise support delivered by network engineers and dedicated technical account personnel who understand enterprise uptime priorities.",
    icon: "Headphones",
    highlights: ["24/7/365 NOC Engineers", "Priority Enterprise SLAs", "Dedicated Account Escalation"]
  },
  {
    id: 4,
    title: "Scalable Technology Solutions",
    description: "Modular bandwidth sizing, SD-WAN intelligent overlays, and elastic multi-cloud interconnects that seamlessly expand alongside your corporate footprint and digital adoption.",
    icon: "TrendingUp",
    highlights: ["On-Demand Capacity Scaling", "Multi-Branch Ready", "Cloud & Hybrid Compatible"]
  }
];

export const enterpriseSolutionsData = [
  {
    id: "dedicated-bandwidth",
    title: "Dedicated Bandwidth",
    description: "Guaranteed 1:1 uncontended data transmission capacity reserved exclusively for your corporate network, ensuring zero congestion during peak business traffic hours.",
    icon: "Layers",
    points: [
      "Strict 1:1 symmetric allocation with no bandwidth throttling",
      "Sustained throughput for high-concurrency enterprise workloads",
      "Continuous packet integrity for critical ERP & cloud applications"
    ]
  },
  {
    id: "high-speed-connectivity",
    title: "High-Speed Connectivity",
    description: "Carrier-grade multi-gigabit fiber feeds delivering ultra-fast data transfers, real-time synchronization, and flawless enterprise collaboration across global teams.",
    icon: "Zap",
    points: [
      "Low-hop direct routing to global IXPs and tier-1 carriers",
      "Deterministic low latency for financial & real-time protocols",
      "High-throughput optical transceivers for data centers"
    ]
  },
  {
    id: "secure-networking",
    title: "Secure Networking",
    description: "Enterprise-grade perimeter protection, deep packet inspection, automated DDoS mitigation, and encrypted tunneling to safeguard organizational digital assets.",
    icon: "Lock",
    points: [
      "Layer 3 to Layer 7 threat detection & edge firewalling",
      "Encrypted IPsec & MPLS site-to-site connectivity",
      "Isolated corporate traffic paths protected from public exposure"
    ]
  },
  {
    id: "business-continuity",
    title: "Business Continuity",
    description: "Architected for zero downtime with automated dual-path fiber failover, redundant core routing, and proactive health checks to keep operations running.",
    icon: "RefreshCw",
    points: [
      "Dual diverse-path fiber entry points for corporate offices",
      "Sub-second automated route switching during network anomalies",
      "Comprehensive Disaster Recovery (DR) link topologies"
    ]
  },
  {
    id: "scalable-infrastructure",
    title: "Scalable Infrastructure",
    description: "Agile network architectures designed to smoothly scale as your organization expands across new office locations, campuses, and hybrid working environments.",
    icon: "Maximize",
    points: [
      "Rapid bandwidth upgrades without hardware replacement",
      "Cloud-orchestrated SD-WAN for effortless branch rollouts",
      "Seamless integration with corporate legacy and future tech stacks"
    ]
  },
  {
    id: "enterprise-communication",
    title: "Enterprise Communication",
    description: "Unified corporate voice, SIP trunking, interactive IVR systems, and verified messaging channels uniting your internal teams and customer touchpoints.",
    icon: "MessageSquare",
    points: [
      "High-density SIP lines integrating with modern IP-PBX setups",
      "Official Meta-verified WhatsApp Business API infrastructure",
      "Carrier-grade high-throughput SMS & cloud telephony systems"
    ]
  }
];

export const industriesData = [
  {
    id: "it-technology",
    name: "IT & Technology",
    icon: "Cpu",
    tagline: "High-throughput data pipes for developers and cloud engineering",
    description: "Software developers, SaaS companies, and technology firms depend on ultra-low latency, symmetric bandwidth for continuous CI/CD pipelines, remote code repositories, and hybrid cloud migrations.",
    keyCapabilities: ["Low Latency Code Deployments", "Direct Cloud Interconnects", "Static IP Pools"]
  },
  {
    id: "corporate-offices",
    name: "Corporate Offices",
    icon: "Building",
    tagline: "Always-on connectivity for enterprise campuses and headquarters",
    description: "Modern commercial headquarters and multi-floor office complexes require robust, high-density fiber to support hundreds of concurrent workstations, video conferences, and collaboration tools.",
    keyCapabilities: ["High-Concurrency Wi-Fi Backhaul", "Centralized Bandwidth Management", "Priority VoIP Routing"]
  },
  {
    id: "banking-financial-services",
    name: "Banking & Financial Services",
    icon: "Landmark",
    tagline: "Ultra-secure, low-latency links for real-time transactions",
    description: "Banks, fintech startups, and trading institutions require maximum security, low-latency financial gateways, and encrypted site-to-site tunnels compliant with strict regulatory standards.",
    keyCapabilities: ["Encrypted IPsec Tunnels", "Sub-Millisecond Financial Routing", "DDoS In-Line Scrubbing"]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "Activity",
    tagline: "Critical uptime for hospital networks, telemedicine, and PACS",
    description: "Hospitals, diagnostic clinics, and medical research institutes rely on uninterrupted connectivity for transmitting high-resolution imaging (PACS/DICOM), electronic health records, and telemedicine.",
    keyCapabilities: ["Zero-Downtime Ring Topologies", "Secure HIPAA-Aligned Data Paths", "Tele-Health Priority QoS"]
  },
  {
    id: "education",
    name: "Education",
    icon: "GraduationCap",
    tagline: "Campus-wide fiber for universities and educational institutions",
    description: "Universities, research institutes, and educational campuses need high-capacity broadband and smart traffic shaping to handle large student populations, online exam portals, and digital libraries.",
    keyCapabilities: ["Smart Bandwidth Allocation", "Campus-Wide Fiber Backbones", "Content Filtering & Security"]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    tagline: "Industrial IoT connectivity and automated supply chain telemetry",
    description: "Manufacturing plants and industrial facilities require resilient, secure connections linking shop-floor IoT sensors, automated inventory systems, and enterprise resource planning (ERP) hubs.",
    keyCapabilities: ["Industrial IoT Telemetry", "Supply Chain ERP Synchronization", "Resilient Factory Perimeter"]
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: "Hotel",
    tagline: "Premium guest connectivity and integrated hotel management",
    description: "Hotels, resorts, and convention venues require enterprise-grade bandwidth separation to deliver flawless guest internet while securing property management, point-of-sale, and VoIP telephone systems.",
    keyCapabilities: ["Guest & Operational Network Slicing", "High-Volume SIP Trunking", "Convention Bandwidth Sizing"]
  },
  {
    id: "commercial-enterprises",
    name: "Commercial Enterprises",
    icon: "Briefcase",
    tagline: "Tailored business connectivity for SMEs and commercial properties",
    description: "Commercial complexes, real estate properties, and expanding enterprises benefit from turnkey connectivity, shared tenant infrastructure, and unified communication packages.",
    keyCapabilities: ["Multi-Tenant Infrastructure", "Dedicated Commercial Support", "Flexible Scaling"]
  }
];

export const networkInfrastructureData = [
  {
    id: "fiber-optic-network",
    title: "Fiber Optic Network",
    short: "End-to-end underground optical fiber network delivering carrier-grade symmetric transmission with ultra-low optical attenuation and vast spectral capacity.",
    icon: "Cable",
    badge: "Core Transmission",
    details: [
      "Pure single-mode optical fiber architecture",
      "Underground armored routing minimizing external disruptions",
      "Dense Wavelength Division Multiplexing (DWDM) ready",
      "Direct termination into enterprise switchgear"
    ]
  },
  {
    id: "enterprise-connectivity",
    title: "Enterprise Connectivity",
    short: "Direct Layer 2 / Layer 3 carrier-grade transport interconnecting client office nodes, data centers, and multi-tenant commercial towers seamlessly.",
    icon: "GitFork",
    badge: "Metro Ethernet",
    details: [
      "Carrier Ethernet 2.0 (CE 2.0) standard compliance",
      "Dedicated point-to-point and point-to-multipoint circuits",
      "MPLS-based secure site interconnectivity",
      "VLAN segmentation for department isolation"
    ]
  },
  {
    id: "secure-infrastructure",
    title: "Secure Infrastructure",
    short: "Hardened physical POP locations and virtual perimeter defenses engineered to safeguard corporate data transmission against external threats and interception.",
    icon: "ShieldCheck",
    badge: "Hardened Defense",
    details: [
      "Physical biometric access controls at core distribution nodes",
      "Automated edge DDoS detection and deflection scrubbing",
      "Continuous network vulnerability scanning",
      "Encrypted transit options for sensitive data flows"
    ]
  },
  {
    id: "high-availability",
    title: "High Availability",
    short: "Architected around self-healing optical rings with dual route diversity, redundant power feeds, and hot-standby routing engines guaranteeing uptime.",
    icon: "Server",
    badge: "Self-Healing Ring",
    details: [
      "Resilient self-healing ring topologies",
      "Redundant BGP multihoming with top-tier transit providers",
      "Dual battery-bank and automated generator backup at nodes",
      "Sub-second link failure failover mechanism"
    ]
  },
  {
    id: "network-monitoring",
    title: "Network Monitoring",
    short: "Centralized 24/7/365 Network Operations Center (NOC) actively overseeing link latency, packet loss, optical power levels, and bandwidth utilization.",
    icon: "Activity",
    badge: "24/7 NOC Overseeing",
    details: [
      "Proactive automated threshold and telemetry alerts",
      "Real-time SNMP and telemetry packet monitoring",
      "Rapid dispatch field engineering teams",
      "Comprehensive performance and SLA reporting"
    ]
  }
];
