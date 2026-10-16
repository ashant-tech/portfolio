import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.siteUrl,
    siteName: site.name,
    title: `${site.name} | ${site.title}`,
    description: site.description,
    images: site.profilePhoto
      ? [{ url: site.profilePhoto, width: 1200, height: 630, alt: site.name }]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.description,
    images: site.profilePhoto ? [site.profilePhoto] : [],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: site.email,
  url: site.siteUrl,
  jobTitle: "Cybersecurity and Software Development Professional",
  image: site.profilePhoto ? new URL(site.profilePhoto, site.siteUrl).href : undefined,
  knowsAbout: [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Secure Software Development",
    "Penetration Testing",
    "Red Team Operations",
    "Blue Team Operations",
    "Vulnerability Assessment",
    "Security Monitoring",
    "Risk Assessment",
  ],
  sameAs: [site.linkedIn, site.github].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-bg" aria-hidden="true">
          <div className="page-bg-glow page-bg-glow-a" />
          <div className="page-bg-glow page-bg-glow-b" />
        </div>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
