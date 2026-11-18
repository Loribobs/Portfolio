import Video from "../Video";
import type { Media } from "@/lib/work/types";

/** Rounded frame for a project video, image or (until the file exists) a labelled placeholder */
export default function MediaFrame({ media, className }: { media: Media; className?: string }) {
  const { src, poster, ratio, label, bg = "#1E1E21", fit = "cover" } = media;
  const isVideo = !!src && /\.(mp4|webm|mov)$/i.test(src);

  return (
    <div
      className={`wk-media ${className ?? ""}`}
      style={{ aspectRatio: String(ratio), background: bg }}
    >
      {isVideo ? (
        <Video src={src!} poster={poster ?? ""} label={label} fit={fit} ratio={ratio} />
      ) : src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={label} loading="lazy" style={{ objectFit: fit }} />
      ) : (
        <div className="wk-placeholder" role="img" aria-label={label}>
          <span>[ {label} ]</span>
        </div>
      )}
    </div>
  );
}
