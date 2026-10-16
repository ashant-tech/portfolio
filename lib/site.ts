/** Update social URLs and siteUrl before deploying. */
export const site = {
  name: "Ashenafi Haile",
  shortName: "AH",
  title: "Cybersecurity & Software Development",
  description:
    "Portfolio of Ashenafi Haile, focused on cybersecurity operations, penetration testing, secure software development, and full-stack engineering.",
  email: "ashenafihaile993@gmail.com",
  location: "Ethiopia",
  /** Production URL (used for Open Graph and sitemap). Set in env or replace here. */
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashenafihaile.dev",
  linkedIn: "https://www.linkedin.com/in/ashenafi-haile",
  github: "https://github.com/ashenafihaile993",
  /** Place your PDF in `public/` and set the path, e.g. `/Ashenafi-Haile-CV.pdf`. Leave empty to hide the button. */
  cvPath: "" as string,
  /** Place your profile photo in `public/` and set the path, e.g. `/profile.jpg`. Leave empty to use initials. */
  profilePhoto: "/profile.jpg" as string,
  availability: "Open to software development and security opportunities",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
