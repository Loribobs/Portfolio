"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: an outline ring with a small filled dot in the centre.
 * - The dot follows the pointer exactly; the ring trails slightly behind.
 * - The ring grows over links and buttons.
 * - Over anything marked data-cursor="locked" (projects without a page yet) it shows a padlock.
 * - Uses mix-blend-mode: difference so it stays visible on light and dark areas.
 * - Only on devices with a mouse/trackpad; touch screens keep their normal behaviour.
 */
export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const ring = ringRef.current, dot = dotRef.current;
    if (!ring || !dot) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const LAG = reduce ? 1 : 0.2; // 1 = no trailing

    document.documentElement.classList.add("has-cursor");
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;

    const loop = () => {
      rx += (x - rx) * LAG;
      ry += (y - ry) * LAG;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) raf = requestAnimationFrame(loop);
      else raf = 0;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      document.documentElement.classList.add("cursor-visible");
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onOver = (e: Event) => {
      const t = e.target as Element | null;
      const locked = !!t?.closest("[data-cursor='locked']");
      ring.classList.toggle("is-locked", locked);
      dot.classList.toggle("is-hidden", locked);
      ring.classList.toggle("is-hover", !locked && !!t?.closest("a, button, [role='button'], input, textarea, select, label"));
    };
    const onLeave = () => document.documentElement.classList.remove("cursor-visible");
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.classList.remove("has-cursor", "cursor-visible");
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        <svg className="cursor-lock" viewBox="0 0 24 24" width="24" height="24">
          <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1.4" fill="currentColor" />
        </svg>
      </div>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
