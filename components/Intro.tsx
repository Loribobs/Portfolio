"use client";

import { useEffect } from "react";
import { nav } from "@/lib/content";

/**
 * Page-load intro, modelled on bitwip.fr's "Tech meets creativity" hero (timings taken
 * from their CSS):
 *  0.15s  A cream curtain covers the screen; "LOROMI" types itself in, letter by letter,
 *         each one springing up from below, while a thin orange bar fills underneath.
 *  1.4s   The curtain wipes down, revealing the headline small and white.
 *  1.75s  The headline grows from 40% to full size...
 *  2.1s   ...while its three lines slide out from the centre to their final positions.
 *  2.6s   The showreel and nav fade in. At ~3.5s the marble takes over the headline.
 *
 * A tiny script in layout.tsx adds `html.intro` before the first paint, so the curtain
 * is already there when the page appears. Skipped for reduced motion, when the page
 * loads scrolled down, or if the JavaScript is slow to arrive.
 */
export const INTRO_DONE = "loromi:intro-done";
const TOTAL_MS = 3550;

export default function Intro() {
  useEffect(() => {
    const root = document.documentElement;
    const finish = () => {
      root.classList.remove("intro", "intro-run");
      window.dispatchEvent(new Event(INTRO_DONE));
    };

    const title = document.querySelector<HTMLElement>(".hero-title");
    if (!root.classList.contains("intro") || !title || window.scrollY > 80) {
      finish();
      return;
    }

    // The real headline is already shrunk to 40%; measure where it sits.
    const box = title.getBoundingClientRect();
    const scale = box.width / title.offsetWidth || 0.4;
    const cx = box.left + box.width / 2;

    // Lines of the real headline start gathered in the centre, then spread out
    title.querySelectorAll<HTMLElement>(".hero-line").forEach((line) => {
      const range = document.createRange();
      range.selectNodeContents(line);
      const r = range.getBoundingClientRect();
      line.style.setProperty("--dx", `${(cx - (r.left + r.width / 2)) / scale}px`);
    });

    requestAnimationFrame(() => root.classList.add("intro-run"));
    const timer = window.setTimeout(finish, TOTAL_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="intro-curtain" aria-hidden="true">
      <div className="intro-inner">
        <div className="intro-mark">
          <span className="intro-word">
            {Array.from(nav.logo).map((ch, n) => (
              <span className="intro-char" key={n} style={{ "--n": n } as React.CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
          <span className="intro-bar">
            <span />
          </span>
        </div>
      </div>
    </div>
  );
}
