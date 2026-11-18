"use client";

import { useEffect, useRef, useState } from "react";

/** Thin orange bar along the top of the screen that fills as you read */
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
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
    <div className="wk-progress" aria-hidden="true">
      <div ref={ref} />
    </div>
  );
}

/** Chapter list beside the full case study; highlights the chapter you're reading */
export function ChapterNav({ chapters }: { chapters: { id: string; title: string }[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const els = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => !!el);
    const onScroll = () => {
      // the last chapter whose top has passed 35% of the screen
      const line = window.innerHeight * 0.35;
      let current = els[0]?.id;
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [chapters]);

  return (
    <nav className="wk-toc" aria-label="Chapters">
      <ol>
        {chapters.map((c, i) => (
          <li key={c.id}>
            <a href={`#${c.id}`} className={active === c.id ? "is-active" : undefined}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {c.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
