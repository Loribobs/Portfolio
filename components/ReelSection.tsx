"use client";

import { useEffect, useRef } from "react";
import Placeholder from "./Placeholder";
import { intro } from "@/lib/content";

/**
 * Recreates the Framer setup:
 * - Pin sticks for the length of the section.
 * - When the Shrink Marker reaches mid-screen, the reel animates (0.8s) into the corner.
 * - While the Text Marker scrolls past mid-screen, the side text rises 424px with the scroll.
 * Phones get no animation, like the live site.
 */
export default function ReelSection() {
  const shrinkRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const reel = reelRef.current, side = sideRef.current;
      const shrink = shrinkRef.current, text = textRef.current;
      if (!reel || !side || !shrink || !text) return;

      if (window.innerWidth < 810) {
        reel.classList.remove("is-small");
        side.style.transform = "";
        return;
      }
      const mid = window.innerHeight / 2;
      reel.classList.toggle("is-small", shrink.getBoundingClientRect().top <= mid);

      const t = text.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (mid - t.top) / t.height));
      side.style.transform = `translate3d(0, ${-424 * p}px, 0)`;
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
    <section className="reel-section" aria-label="Showreel">
      <div className="pin">
        <p className="side-text" ref={sideRef}>
          {intro}
        </p>
        <div className="reel" ref={reelRef}>
          <Placeholder label="Showreel" color="#1E1E21" className="reel-media" />
        </div>
      </div>
      <div className="shrink-marker" ref={shrinkRef} aria-hidden="true" />
      <div className="text-marker" ref={textRef} aria-hidden="true" />
    </section>
  );
}
