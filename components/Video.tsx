"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  label: string;
  /** "cover" fills the box (may crop edges); "contain" shows the whole video on the box colour */
  fit?: "cover" | "contain";
  /** Video width / height (needed for "contain") */
  ratio?: number;
  className?: string;
};

/**
 * Silent looping preview video.
 * - Shows the poster (first frame) instantly; nothing downloads until it's near the screen.
 * - Plays while on screen, pauses when scrolled away (saves battery and data).
 * - With reduced motion turned on it stays on the poster.
 * - "contain" videos (phone mockups) sit centred at their own shape on the card colour,
 *   with their left/right edges softly faded. Browsers render video colours a few shades
 *   differently from page colours (and differently from each other), so the fade hides
 *   any seam between the video's background and the card.
 */
export default function Video({ src, poster, label, fit = "cover", ratio, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.preload !== "auto") video.preload = "auto";
          video.play().catch(() => {});
        } else video.pause();
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={`media-video ${fit === "contain" ? "is-contain" : ""} ${className ?? ""}`}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`${label} preview`}
      style={fit === "contain" && ratio ? { aspectRatio: String(ratio) } : undefined}
    />
  );
}
