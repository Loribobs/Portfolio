type Props = { label: string; color: string; light?: boolean; className?: string };

/** Stand-in for a video until the real file is added. */
export default function Placeholder({ label, color, light, className }: Props) {
  return (
    <div
      className={`placeholder ${className ?? ""}`}
      style={{ background: color, color: light ? "rgba(8,8,8,.55)" : "rgba(236,240,228,.6)" }}
      role="img"
      aria-label={`${label} preview`}
    >
      <span>[ {label} — video placeholder ]</span>
    </div>
  );
}
