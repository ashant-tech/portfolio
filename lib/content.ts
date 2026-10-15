import {
  Code2,
  LockKeyhole,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

export type Lab = {
  number: string;
  category: string;
  title: string;
  description: string;
  tools: string[];
  status: string;
};

export const skills: Skill[] = [
  {
    icon: Network,
    title: "Networking",
    description:
      "TCP/IP, DNS, IP addressing, subnetting, connectivity troubleshooting, and network infrastructure concepts.",
    tags: ["TCP/IP", "DNS", "Subnetting"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Defensive security concepts, vulnerability assessment, security monitoring, and SIEM fundamentals.",
    tags: ["Security Monitoring", "Vulnerability Assessment", "SIEM"],
  },
  {
    icon: LockKeyhole,
    title: "Digital Risk Management",
    description:
      "Digital risk awareness, security controls, risk identification, and secure technology practices.",
    tags: ["Risk Awareness", "Security Controls", "Governance"],
  },
  {
    icon: Code2,
    title: "Software & IT",
    description:
      "Python, JavaScript, REST APIs, databases, troubleshooting, and web application development.",
    tags: ["Python", "JavaScript", "REST APIs", "Databases"],
  },
];

export const labs: Lab[] = [
  {
    number: "01",
    category: "Security monitoring",
    title: "SIEM & log monitoring lab",
    description:
      "Endpoint event collection, alert visibility, and security monitoring workflows in a controlled lab environment.",
    tools: ["Wazuh", "Windows", "Log analysis"],
    status: "Documented lab",
  },
  {
    number: "02",
    category: "Vulnerability assessment",
    title: "Vulnerability assessment lab",
    description:
      "Identifying, reviewing, and prioritizing security findings in an authorized test environment.",
    tools: ["Greenbone / OpenVAS", "Kali Linux", "Reporting"],
    status: "Documented lab",
  },
  {
    number: "03",
    category: "Network defense",
    title: "Network security fundamentals",
    description:
      "Network traffic concepts, defensive monitoring, and common network services in hands-on practice.",
    tools: ["TCP/IP", "Snort concepts", "DNS"],
    status: "Documented lab",
  },
];

export const experience = {
  company: "Sidama Bank",
  role: "ICT — Networking & Security Focus",
  location: "Addis Ababa Main Office, Ethiopia",
  duration: "8 months",
  summary:
    "Professional experience in a banking IT environment with a primary focus on networking and security.",
  highlights: [
    "Supported networking and IT infrastructure in a regulated banking environment.",
    "Troubleshot network connectivity and access-related issues.",
    "Applied security-aware practices to help protect organizational systems.",
    "Contributed to reliable network services and day-to-day IT operations.",
  ],
};
