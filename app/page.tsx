import Nav from "@/components/Nav";
import HeroTitle from "@/components/HeroTitle";
import ReelSection from "@/components/ReelSection";
import Placeholder from "@/components/Placeholder";
import MailIcon from "@/components/MailIcon";
import { hero, projects, about, roles, contact } from "@/lib/content";

export default function Home() {
  // Projects are laid out in rows of two (matches the live grid's spacing)
  const rows = [projects.slice(0, 2), projects.slice(2, 4), projects.slice(4, 6)];

  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero wrap">
          <HeroTitle lines={hero} />
        </section>

        <div className="wrap">
          <ReelSection />
        </div>

        <section className="work wrap" id="work">
          <h2 className="section-title">Selected Work</h2>
          <div className="work-rows">
            {rows.map((row, r) => (
              <div className="work-row" key={r}>
                {row.map((p) => (
                  <article className="card" key={p.slug}>
                    <div
                      className="card-media"
                      style={{ "--m-ratio": p.mobileRatio } as React.CSSProperties}
                    >
                      <Placeholder label={p.title} color={p.color} light={p.light} />
                    </div>
                    <div className="card-text">
                      <h3 className="card-title">{p.title}</h3>
                      <p className="card-desc">{p.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="about wrap" id="about">
          <h2 className="section-title">About</h2>
          <div className="about-grid">
            <p className="about-highlight">{about.highlight}</p>
            <div className="about-desc">
              {about.paragraphs.map((t) => (
                <p key={t.slice(0, 20)}>{t}</p>
              ))}
            </div>
          </div>

          <p className="mono-label roles-label">Recent Roles</p>
          <div className="jobs">
            {roles.map((r) => (
              <div className="job" key={r.company}>
                <h4 className="job-years">{r.years}</h4>
                <div className="job-title">
                  <h4 className="job-company">{r.company}</h4>
                  <p className="job-role">{r.title}</p>
                  <p className="job-location">{r.location}</p>
                </div>
                <p className="job-desc">{r.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-main">
          <MailIcon />
          <h2 className="footer-title">{contact.heading}</h2>
          <a className="btn" href={contact.button.href}>
            {contact.button.label}
          </a>
        </div>
        <nav className="footer-nav" aria-label="Contact">
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
    </>
  );
}
