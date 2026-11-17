"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  label: string;
  /** "cover" fills the box (may crop edges); "contain" shows the whole video on the box colour */
  fit?: "cover" | "contain";
  className?: string;
};

/**
 * Silent looping preview video.
 * - Shows the poster (first frame) instantly; nothing downloads until it's near the screen.
 * - Plays while on screen, pauses when scrolled away (saves battery and data).
 * - With reduced motion turned on it stays on the poster.
 * - "contain" videos: once the first frame is decoded, the box behind it is painted with
 *   the video's own corner colour, so there's no visible seam in any browser.
 */
export default function Video({ src, poster, label, fit = "cover", className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const matchEdges = () => {
      if (fit !== "contain" || !video.parentElement || !video.videoWidth) return;
      try {
        const c = document.createElement("canvas");
        c.width = c.height = 1;
        const ctx = c.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;
        // average a small patch near the top-left corner
        ctx.drawImage(video, 4, 4, 12, 12, 0, 0, 1, 1);
        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        video.parentElement.style.background = `rgb(${r}, ${g}, ${b})`;
      } catch {}
    };
    video.addEventListener("loadeddata", matchEdges, { once: true });

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
    return () => {
      io.disconnect();
      video.removeEventListener("loadeddata", matchEdges);
    };
  }, [fit]);

  return (
    <video
      ref={ref}
      className={`media-video ${className ?? ""}`}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`${label} preview`}
      style={{ objectFit: fit }}
    />
  );
}
