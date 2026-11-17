"use client";

import { useEffect, useRef } from "react";
import Placeholder from "./Placeholder";
import { intro } from "@/lib/content";

/**
 * Wokine-style showreel, measured frame by frame from wokine.com (1440×900):
 * 1. The reel sits just below the hero and scrolls up normally.
 * 2. When its top reaches 25px from the top of the screen it pins and, tied directly
 *    to the scroll position (not a timed animation), shrinks over ~1.5 screen heights
 *    with an ease-in-out curve, gliding down and to the right.
 * 3. It ends 20% of the screen wide (16:9), right-aligned to the content edge, its
 *    bottom level with the bottom of the intro text, which scrolls up normally.
 * 4. From there both scroll away together and a "Play showreel" label fades in.
 * Phones get a plain 16:9 card, as on Wokine.
 */

const PIN_TOP = 25; // px from top of screen while pinned
const FULL_INSET = 32; // px either side at full size
const FULL_GAP_Y = 60; // full height = screen height − this
const FINAL_WIDTH = 0.2; // share of screen width at the end
const DURATION = 1.528; // scroll distance of the shrink, in screen heights

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function ReelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const playRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const section = sectionRef.current, reel = reelRef.current;
      const text = textRef.current, play = playRef.current;
      if (!section || !reel || !text || !play) return;

      const vw = document.documentElement.clientWidth;
      const vh = window.innerHeight;

      if (vw < 810) {
        reel.removeAttribute("style");
        play.classList.remove("is-visible");
        return;
      }

      const y = window.scrollY;
      const sec = section.getBoundingClientRect();
      const secTop = sec.top + y;
      const pad = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pad")) || 64;

      const fullW = vw - FULL_INSET * 2;
      const fullH = vh - FULL_GAP_Y;
      const finalW = vw * FINAL_WIDTH;
      const finalH = (finalW * 9) / 16;

      const start = secTop - PIN_TOP;
      const end = start + DURATION * vh;
      const textBottom = text.getBoundingClientRect().bottom + y;
      const finalTop = textBottom - finalH;
      const drift = Math.max(0, finalTop - end - PIN_TOP);

      const p = Math.min(1, Math.max(0, (y - start) / (end - start)));
      const e = easeInOutCubic(p);

      const top = y < start ? secTop : y > end ? finalTop : y + PIN_TOP + drift * e;
      const w = lerp(fullW, finalW, e);
      const h = lerp(fullH, finalH, e);
      const right = lerp(FULL_INSET, pad, e);
      const left = vw - right - w;

      reel.style.top = `${top - secTop}px`;
      reel.style.left = `${left - sec.left}px`;
      reel.style.width = `${w}px`;
      reel.style.height = `${h}px`;

      play.classList.toggle("is-visible", y >= end - 1);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="reel-section" ref={sectionRef} aria-label="Showreel">
      <div className="reel-slot" aria-hidden="true" />
      <div className="reel-content">
        <p className="side-text" ref={textRef}>
          {intro}
        </p>
      </div>
      <div className="reel" ref={reelRef}>
        <div className="reel-media">
          <Placeholder label="Showreel" color="#1E1E21" />
        </div>
        <button className="play-btn" type="button" ref={playRef}>
          <span>Play showreel</span>
          <span className="play-icon" aria-hidden="true">
            <svg viewBox="0 0 50 63" width="10" height="12">
              <path d="M47.9 27.6c2.8 1.6 2.8 5.6 0 7.2L7.3 58.3C4.5 59.9 1 57.9 1 54.7V7.8C1 4.6 4.5 2.6 7.3 4.2z" fill="currentColor" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
