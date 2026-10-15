"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label={`${site.name} home`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="wordmark-mark">{site.shortName}</span>
          <span className="wordmark-name">{site.name}</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          id="site-navigation"
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.href === "#contact" ? "nav-cta" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
