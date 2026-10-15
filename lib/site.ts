/** Update social URLs and siteUrl before deploying. */
export const site = {
  name: "Ashenafi Haile",
  shortName: "AH",
  title: "Networking, Cybersecurity & Software",
  description:
    "Portfolio of Ashenafi Haile — Computer Engineering graduate focused on networking, cybersecurity, digital risk management, and software development.",
  email: "ashenafihaile993@gmail.com",
  location: "Ethiopia",
  /** Production URL (used for Open Graph and sitemap). Set in env or replace here. */
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashenafihaile.dev",
  linkedIn: "https://www.linkedin.com/in/ashenafi-haile",
  github: "https://github.com/ashenafihaile993",
  /** Place your PDF in `public/` and set the path, e.g. `/Ashenafi-Haile-CV.pdf`. Leave empty to hide the button. */
  cvPath: "" as string,
  availability: "Open to opportunities in networking, security, and software",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#training", label: "Training" },
  { href: "#skills", label: "Skills" },
  { href: "#labs", label: "Labs" },
  { href: "#contact", label: "Contact" },
] as const;
