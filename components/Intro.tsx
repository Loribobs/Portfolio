"use client";

import { useEffect, useRef } from "react";

/**
 * Page-load intro, modelled on bitwip.fr's "Tech meets creativity" hero (timings taken
 * from their CSS):
 *  0.15s  A cream curtain covers the screen; a small dark copy of the headline types
 *         itself in, letter by letter, each one springing up from below.
 *  1.4s   The curtain wipes down, revealing the real (white) headline in the same spot.
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
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const finish = () => {
      root.classList.remove("intro", "intro-run");
      window.dispatchEvent(new Event(INTRO_DONE));
    };

    const inner = innerRef.current;
    const title = document.querySelector<HTMLElement>(".hero-title");
    if (!root.classList.contains("intro") || !inner || !title || window.scrollY > 80) {
      finish();
      return;
    }

    // The real headline is already shrunk to 40%; measure where it sits.
    const box = title.getBoundingClientRect();
    const scale = box.width / title.offsetWidth || 0.4;
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;

    // Dark copy for the curtain, letter by letter, laid out exactly like the real one
    const copy = document.createElement("div");
    copy.className = "hero-title intro-copy";
    copy.style.width = `${title.offsetWidth}px`;
    copy.style.left = `${cx - title.offsetWidth / 2}px`;
    copy.style.top = `${cy - title.offsetHeight / 2}px`;

    let n = 0;
    title.querySelectorAll<HTMLElement>(".hero-line").forEach((line) => {
      // How far this line's text is from the centre: lines start gathered in the middle
      const range = document.createRange();
      range.selectNodeContents(line);
      const r = range.getBoundingClientRect();
      const dx = `${(cx - (r.left + r.width / 2)) / scale}px`;
      line.style.setProperty("--dx", dx);

      const clone = document.createElement("span");
      clone.className = line.className;
      clone.style.setProperty("--dx", dx);
      (line.textContent || "").split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          clone.append(" ");
          return;
        }
        const word = document.createElement("span");
        word.className = "intro-word";
        for (const ch of part) {
          const c = document.createElement("span");
          c.className = "intro-char";
          c.textContent = ch;
          c.style.setProperty("--n", String(n++));
          word.append(c);
        }
        clone.append(word);
      });
      copy.append(clone);
    });
    inner.replaceChildren(copy);

    requestAnimationFrame(() => root.classList.add("intro-run"));
    const timer = window.setTimeout(finish, TOTAL_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="intro-curtain" aria-hidden="true">
      <div className="intro-inner" ref={innerRef} />
    </div>
  );
}
