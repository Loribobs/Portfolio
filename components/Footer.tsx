import MailIcon from "./MailIcon";
import { contact } from "@/lib/content";

/** "Let's chat" footer, shared by every page */
export default function Footer() {
  return (
  <footer className="footer" id="contact">
    <div className="footer-main">
      <MailIcon />
      <h2 className="footer-title" data-split>
        {contact.heading}
      </h2>
      <a className="btn" href={contact.button.href} data-reveal style={{ "--d": "0.3s" } as React.CSSProperties}>
        {contact.button.label}
      </a>
    </div>
    <nav className="footer-nav" aria-label="Contact" data-reveal>
      <div className="footer-track">
        <div className="footer-group">
          {contact.left.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="footer-group">
          {contact.right.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  </footer>
  );
}
