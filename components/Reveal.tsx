"use client";

import { useEffect } from "react";
import { INTRO_DONE } from "./Intro";

/**
 * Scroll-in animations, modelled on bitwip.fr:
 * - [data-split]  headings: split into words; each word slides up from behind a mask,
 *                 one after another (1.1s, staggered by --step, default 45ms).
 * - [data-reveal] blocks: fade in while rising 28px (1s). Stagger siblings with --d.
 * Each element animates once, the first time it scrolls into view.
 */
export default function Reveal() {
  useEffect(() => {
    const splitWords = (el: HTMLElement) => {
      let i = 0;
      const frag = document.createDocumentFragment();
      Array.from(el.childNodes).forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE) {
          frag.append(node);
          return;
        }
        (node.nodeValue || "").split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.append(document.createTextNode(part));
            return;
          }
          const mask = document.createElement("span");
          mask.className = "sw";
          const word = document.createElement("span");
          word.className = "sw__in";
          word.style.setProperty("--i", String(i++));
          word.textContent = part;
          mask.append(word);
          frag.append(mask);
        });
      });
      el.replaceChildren(frag);
      el.classList.add("is-split");
    };

    document.querySelectorAll<HTMLElement>("[data-split]:not(.is-split)").forEach(splitWords);
    const els = document.querySelectorAll<HTMLElement>("[data-reveal], [data-split]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    const start = () => els.forEach((el) => io.observe(el));

    // Hold everything until the page-load intro has finished
    if (document.documentElement.classList.contains("intro")) {
      window.addEventListener(INTRO_DONE, start, { once: true });
    } else start();

    return () => {
      io.disconnect();
      window.removeEventListener(INTRO_DONE, start);
    };
  }, []);

  return null;
}
