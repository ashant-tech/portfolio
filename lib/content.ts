import {
  Code2,
  LockKeyhole,
  ShieldCheck,
  FileCheck,
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

export type Project = {
  category: string;
  title: string;
  description: string;
  impact: string;
  status: string;
  tags: string[];
};

export const skills: Skill[] = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building web applications, APIs, and full-stack solutions.",
    tags: ["Web Development", "Python", "JavaScript", "REST APIs", "Databases"],
  },
  {
    icon: ShieldCheck,
    title: "Red Team & Pen Testing",
    description:
      "Offensive security testing, vulnerability assessment, and penetration testing.",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Exploitation", "Attack Simulation"],
  },
  {
    icon: LockKeyhole,
    title: "Blue Team Operations",
    description:
      "Security monitoring, incident response, and defensive security operations.",
    tags: ["Security Monitoring", "SIEM", "Incident Response", "Threat Detection"],
  },
  {
    icon: FileCheck,
    title: "Risk Assessment",
    description:
      "IT risk management, security controls, and governance frameworks.",
    tags: ["Risk Assessment", "Security Controls", "Governance", "Compliance"],
  },
];

export const labs: Lab[] = [
  {
    number: "01",
    category: "Security Monitoring",
    title: "SIEM & Log Analysis",
    description: "Endpoint event collection and security monitoring.",
    tools: ["Wazuh", "Windows", "Log Analysis"],
    status: "Completed",
  },
  {
    number: "02",
    category: "Vulnerability Assessment",
    title: "Security Assessment",
    description: "Identifying and prioritizing security findings.",
    tools: ["OpenVAS", "Kali Linux", "Reporting"],
    status: "Completed",
  },
  {
    number: "03",
    category: "Network Defense",
    title: "Network Security",
    description: "Network traffic analysis and defensive monitoring.",
    tools: ["TCP/IP", "Snort", "DNS"],
    status: "Completed",
  },
];

export const projects: Project[] = [
  {
    category: "Cybersecurity · Defense",
    title: "Security Monitoring & Log Analysis",
    description:
      "Security operations experience focused on monitoring events, reviewing logs, and supporting incident triage.",
    impact: "Relevant practice: SIEM monitoring, log analysis, and threat detection.",
    status: "Security focus",
    tags: ["SIEM", "Wazuh", "Log Analysis", "Threat Detection"],
  },
  {
    category: "Software · Development",
    title: "Web Applications & APIs",
    description:
      "Software development experience building web applications, reporting systems, and APIs for practical workflows.",
    impact: "Core practice: full-stack delivery, API development, and database-backed features.",
    status: "Development focus",
    tags: ["Web Development", "REST APIs", "Databases", "Python"],
  },
  {
    category: "Cybersecurity · Assessment",
    title: "Vulnerability & Risk Assessment",
    description:
      "Security assessment work identifying vulnerabilities, reviewing risk, and supporting security controls and reporting.",
    impact: "Connects technical findings with risk-based prioritization and defensive action.",
    status: "Security focus",
    tags: ["Penetration Testing", "OpenVAS", "Risk Assessment", "Security Controls"],
  },
];

export const experience = [
  {
    company: "Sidama Bank",
    role: "Junior Cybersecurity Professional",
    location: "Addis Ababa, Ethiopia",
    duration: "8 months",
    summary: "Banking IT security operations and risk management.",
    highlights: [
      "Security monitoring & vulnerability assessment",
      "IT risk assessment & controls",
      "Security documentation & compliance",
      "Network security operations",
    ],
  },
  {
    company: "Sidama Science and Technology Agency",
    role: "Software Development Intern",
    location: "Hawassa, Ethiopia",
    duration: "Internship",
    summary: "Web application development.",
    highlights: [
      "Full-stack web development",
      "Reporting systems",
      "API development",
    ],
  },
  {
    company: "Bahir Dar University",
    role: "Final-Year Project",
    location: "Bahir Dar, Ethiopia",
    duration: "Academic Project",
    summary: "Software application development.",
    highlights: [
      "System design & implementation",
      "Database management",
      "Web application development",
    ],
  },
];

export const training = [
  {
    provider: "Qiyas Project",
    title: "Advanced Cybersecurity & Digital Risk Management",
    description: "Advanced security and risk management training.",
  },
  {
    provider: "Five Million Ethiopian Coders",
    title: "Android Development Fundamentals",
    description: "Mobile app development basics.",
  },
];
