"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  ArrowUpRight,
  Award,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/header";
import { certifications, experience, projects, skills } from "@/lib/content";
import { site } from "@/lib/site";

const tagColorClasses: Record<string, string> = {
  "Penetration Testing": "tag-penetration",
  "Vulnerability Assessment": "tag-vulnerability-assessment",
  Exploitation: "tag-exploitation",
  "Attack Simulation": "tag-attack-simulation",
  "Security Monitoring": "tag-security-monitoring",
  "Incident Response": "tag-incident-response",
  "Risk Assessment": "tag-risk",
  "Security Controls": "tag-controls",
  SIEM: "tag-siem",
  Wazuh: "tag-wazuh",
  "Log Analysis": "tag-log-analysis",
  "Threat Detection": "tag-threat-detection",
  "Web Development": "tag-web-development",
  "REST APIs": "tag-rest-apis",
  Databases: "tag-databases",
  Python: "tag-python",
};

const experienceColorClasses: Record<string, string> = {
  "Security monitoring & vulnerability assessment": "experience-security",
  "IT risk assessment & controls": "experience-risk",
  "Security documentation & compliance": "experience-compliance",
  "Network security operations": "experience-network",
  "Full-stack web development": "experience-development",
  "Reporting systems": "experience-reporting",
  "API development": "experience-api",
  "System design & implementation": "experience-system-design",
  "Database management": "experience-database",
  "Web application development": "experience-web-app",
  "Web applications and API development": "experience-practice-web",
  "Security monitoring and log analysis": "experience-practice-monitoring",
  "Vulnerability assessment and risk awareness": "experience-practice-risk",
};

export default function Home() {
  const year = new Date().getFullYear();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main id="main-content" className="main">
        <section className="hero section" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="live-dot" aria-hidden="true" />
                Available for opportunities
              </p>
              <h1 className="hero-title">
                {site.name.split(" ")[0]}
                <span className="hero-title-accent">
                  {" "}
                  {site.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="hero-role">
                Cybersecurity · Software Development
              </p>
              <p className="hero-intro">
                I build practical web applications and help protect systems through security operations, vulnerability assessment, and penetration testing.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  Contact me
                </a>
                <a className="btn btn-secondary" href="#experience">
                  View experience
                </a>
              </div>
              <ul className="hero-stats" aria-label="Focus areas">
                <li>
                  <strong>Build</strong>
                  <span>Full-stack apps &amp; APIs</span>
                </li>
                <li>
                  <strong>Assess</strong>
                  <span>Pen testing &amp; vulnerabilities</span>
                </li>
                <li>
                  <strong>Defend</strong>
                  <span>Monitoring &amp; risk operations</span>
                </li>
              </ul>
            </div>

            <aside className="hero-panel" aria-label="Profile summary">
              <div className="panel-header">
                <span className="panel-dot" />
                <span className="panel-dot" />
                <span className="panel-dot" />
              </div>
              <div className="panel-body">
                {site.profilePhoto ? (
                  <div className="panel-avatar">
                    <Image
                      src={site.profilePhoto}
                      alt={site.name}
                      className="profile-photo"
                      width={160}
                      height={160}
                    />
                  </div>
                ) : (
                  <div className="panel-avatar">{site.shortName}</div>
                )}
                <p className="panel-name">{site.name}</p>
                <p className="panel-meta">
                  <MapPin size={14} aria-hidden="true" /> {site.location}
                </p>
                <div className="panel-divider" />
                <dl className="panel-facts">
                  <div>
                    <dt>Focus</dt>
                    <dd>Cybersecurity &amp; software</dd>
                  </div>
                  <div>
                    <dt>Education</dt>
                    <dd>BSc Computer Engineering</dd>
                  </div>
                  <div>
                    <dt>Experience</dt>
                    <dd>Work &amp; projects</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-head reveal">
            <span className="section-label">About</span>
            <h2>Software Development &amp; Cybersecurity</h2>
            <p className="section-lead">
              I bring both disciplines together: developing useful software and strengthening the systems it depends on.
            </p>
          </div>
          <div className="about-grid">
            <p className="prose reveal">
              I am a Computer Engineering graduate with experience across software development and cybersecurity operations. My work includes web applications and APIs, security monitoring, vulnerability assessment, risk controls, and network security.
            </p>
            <article className="info-card reveal">
              <div className="info-card-icon">
                <GraduationCap size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="info-card-label">Education</p>
                <h3 className="education-degree">BSc Computer Engineering</h3>
                <p className="education-institution">Bahir Dar University</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-brand" id="brand">
          <div className="brand-grid">
            <div className="brand-card reveal">
              <span className="section-label">Personal brand</span>
              <h2>Strengthening security across the organization.</h2>
              <p>
                My primary focus is organization-wide cybersecurity: protecting networks, endpoints, data, and business operations through security monitoring, vulnerability assessment, risk management, and effective security controls.
              </p>
            </div>
            <div className="brand-metrics reveal">
              <div className="brand-metric">
                <strong>Cybersecurity</strong>
                <span>Monitoring, risk assessment, and system protection</span>
              </div>
              <div className="brand-metric">
                <strong>Offensive security</strong>
                <span>Penetration testing and vulnerability assessment</span>
              </div>
              <div className="brand-metric">
                <strong>Organization-wide security</strong>
                <span>Networks, endpoints, data, operations, and risk controls</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head reveal">
            <span className="section-label">Experience</span>
            <h2>Experience across development and security</h2>
          </div>
          {experience.map((exp) => (
            <article className="timeline-card reveal" key={exp.company}>
              <div className="timeline-icon">
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <p className="timeline-org">{exp.company}</p>
                    <h3>{exp.role}</h3>
                  </div>
                  {exp.duration ? (
                    <span className="timeline-badge">{exp.duration}</span>
                  ) : null}
                </div>
                <p className="timeline-location">{exp.location}</p>
                <p className="prose muted">{exp.summary}</p>
                <ul className="timeline-list">
                  {exp.highlights.map((point) => (
                    <li className={experienceColorClasses[point]} key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="section" id="projects">
          <div className="section-head reveal">
            <span className="section-label">Selected work</span>
            <h2>Software &amp; cybersecurity focus</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-topline">
                  <span className="project-category">{project.category}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-impact">{project.impact}</div>
                <div className="tags">
                  {project.tags.map((tag) => (
                  <span
                    className={tagColorClasses[tag]}
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-head reveal">
            <span className="section-label">Capabilities</span>
            <h2>Skills & Expertise</h2>
          </div>
          <div className="bento-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article className="bento-card reveal" key={skill.title}>
                  <div className="bento-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="tags">
                    {skill.tags.map((tag) => (
                      <span
                        className={tagColorClasses[tag]}
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="section-head">
            <span className="section-label">Certification</span>
            <h2>Cybersecurity &amp; digital risk</h2>
          </div>
          <div className="certification-list">
            {certifications.map((certification) => (
              <article className="certification-card" key={certification.title}>
                <div className="info-card-icon">
                  <Award size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="info-card-label">{certification.provider}</p>
                  <h3>{certification.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="contact-shell">
            <div className="contact-copy">
              <span className="section-label">Contact</span>
              <h2>Let&apos;s connect</h2>
              <p>{site.availability}</p>
            </div>
            <div className="contact-links">
              <a className="btn btn-primary btn-lg" href={`mailto:${site.email}`}>
                <Mail size={18} aria-hidden="true" />
                {site.email}
              </a>
              <a
                className="link-chip"
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              {site.github ? (
                <a
                  className="link-chip"
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} aria-hidden="true" />
                  GitHub
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ) : null}
              {site.cvPath ? (
                <a className="link-chip" href={site.cvPath} download>
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>
            © {year} {site.name}
          </span>
          <span>Cybersecurity · Software Development</span>
          <a href="#home">Back to top</a>
        </footer>
      </main>
    </>
  );
}
