"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Freeze the page behind the open mobile menu
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${open ? "is-open" : ""}`}>
      <div className="nav-bar">
        <a className="nav-logo" href="#top" onClick={close}>
          {nav.logo}
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="btn nav-cta" href={nav.cta.href}>
          {nav.cta.label}
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="menu-line l1" />
          <span className="menu-line l2" />
        </button>
      </div>

      <div className="menu-sheet" hidden={!open}>
        <nav className="menu-links" aria-label="Mobile">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn menu-cta" href={nav.cta.href} onClick={close}>
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
