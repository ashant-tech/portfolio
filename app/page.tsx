import {
  ArrowUpRight,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Network,
} from "lucide-react";
import { Header } from "@/components/header";
import { experience, labs, skills } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  const year = new Date().getFullYear();

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
                Networking · Cybersecurity · Software Engineering
              </p>
              <p className="hero-intro">
                Computer Engineering graduate with banking IT experience in
                networking and security. I build reliable systems and practice
                defensive security through hands-on labs and clear documentation.
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
                  <strong>Networking</strong>
                  <span>Infrastructure &amp; connectivity</span>
                </li>
                <li>
                  <strong>Security</strong>
                  <span>Monitoring &amp; assessment</span>
                </li>
                <li>
                  <strong>Software</strong>
                  <span>APIs &amp; web development</span>
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
                <div className="panel-avatar">{site.shortName}</div>
                <p className="panel-name">{site.name}</p>
                <p className="panel-meta">
                  <MapPin size={14} aria-hidden="true" /> {site.location}
                </p>
                <div className="panel-divider" />
                <dl className="panel-facts">
                  <div>
                    <dt>Focus</dt>
                    <dd>Network &amp; security operations</dd>
                  </div>
                  <div>
                    <dt>Education</dt>
                    <dd>BSc Computer Engineering</dd>
                  </div>
                  <div>
                    <dt>Experience</dt>
                    <dd>Banking ICT · {experience.duration}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-head">
            <span className="section-label">About</span>
            <h2>Security-minded engineer with a systems-first mindset</h2>
            <p className="section-lead">
              I combine engineering fundamentals with real IT operations
              experience—focused on how networks behave, where risk appears, and
              how software supports secure infrastructure.
            </p>
          </div>
          <div className="about-grid">
            <p className="prose">
              My background spans Computer Engineering, professional work in a
              banking environment, and continued learning in cybersecurity and
              digital risk management. I care about reliability, traceability,
              and honest documentation.
            </p>
            <article className="info-card">
              <div className="info-card-icon">
                <GraduationCap size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="info-card-label">Education</p>
                <h3>BSc in Computer Engineering</h3>
                <p>Bahir Dar University</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head">
            <span className="section-label">Experience</span>
            <h2>Professional context</h2>
          </div>
          <article className="timeline-card">
            <div className="timeline-icon">
              <Network size={22} aria-hidden="true" />
            </div>
            <div className="timeline-content">
              <div className="timeline-top">
                <div>
                  <p className="timeline-org">{experience.company}</p>
                  <h3>{experience.role}</h3>
                </div>
                <span className="timeline-badge">{experience.duration}</span>
              </div>
              <p className="timeline-location">{experience.location}</p>
              <p className="prose muted">{experience.summary}</p>
              <ul className="timeline-list">
                {experience.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className="section" id="skills">
          <div className="section-head">
            <span className="section-label">Capabilities</span>
            <h2>Skills across infrastructure and application layers</h2>
          </div>
          <div className="bento-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article className="bento-card" key={skill.title}>
                  <div className="bento-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="tags">
                    {skill.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="labs">
          <div className="section-head">
            <span className="section-label">Labs</span>
            <h2>Practical security learning</h2>
            <p className="section-lead">
              Documented lab work in monitoring, vulnerability assessment, and
              network defense.
            </p>
          </div>
          <div className="lab-grid">
            {labs.map((lab) => (
              <article className="lab-card" key={lab.number}>
                <div className="lab-card-top">
                  <span className="lab-num">{lab.number}</span>
                  <span className="lab-pill">{lab.status}</span>
                </div>
                <p className="lab-cat">{lab.category}</p>
                <h3>{lab.title}</h3>
                <p className="prose muted">{lab.description}</p>
                <div className="tags">
                  {lab.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
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
          <span>Networking · Cybersecurity · Software</span>
          <a href="#home">Back to top</a>
        </footer>
      </main>
    </>
  );
}
