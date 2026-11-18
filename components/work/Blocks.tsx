import MediaFrame from "./MediaFrame";
import type { Block } from "@/lib/work/types";

const pad = (n: number) => String(n).padStart(2, "0");

/** Renders a project's list of blocks. Used by both the showcase and the full case study. */
export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "statement":
            return (
              <div className="wk-statement" key={i}>
                {b.label && <p className="wk-label" data-reveal>[ {b.label} ]</p>}
                <p className="wk-statement-text" data-split style={{ "--step": "22ms" } as React.CSSProperties}>
                  {b.text}
                </p>
              </div>
            );

          case "media":
            return (
              <figure className="wk-figure" key={i} data-reveal>
                <MediaFrame media={b.media} />
                {b.caption && <figcaption className="wk-caption">{b.caption}</figcaption>}
              </figure>
            );

          case "grid":
            return (
              <div className={`wk-grid cols-${b.items.length}`} key={i}>
                {b.items.map((it, j) => (
                  <figure
                    className="wk-figure"
                    key={j}
                    data-reveal
                    style={{ "--d": `${j * 0.1}s` } as React.CSSProperties}
                  >
                    <MediaFrame media={it.media} />
                    {it.caption && <figcaption className="wk-caption">{it.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            );

          case "stats":
            return (
              <div className="wk-stats-block" key={i}>
                {b.label && <p className="wk-label">[ {b.label} ]</p>}
                <dl className="wk-stats">
                  {b.items.map((s, j) => (
                    <div
                      className="wk-stat"
                      key={j}
                      data-reveal
                      style={{ "--d": `${j * 0.08}s` } as React.CSSProperties}
                    >
                      <dt className="wk-stat-value">{s.value}</dt>
                      <dd className="wk-stat-label">{s.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            );

          case "text":
            return (
              <div className="wk-text" key={i}>
                {b.heading && <h3 className="wk-text-heading">{b.heading}</h3>}
                {b.paragraphs.map((p, j) => (
                  <p key={j} data-reveal>
                    {p}
                  </p>
                ))}
              </div>
            );

          case "points":
            return (
              <div className="wk-points-block" key={i}>
                {b.heading && <h3 className="wk-text-heading">{b.heading}</h3>}
                <ol className="wk-points">
                  {b.items.map((it, j) => (
                    <li key={j} data-reveal style={{ "--d": `${j * 0.08}s` } as React.CSSProperties}>
                      <span className="wk-point-n">{pad(j + 1)}</span>
                      <div>
                        <p className="wk-point-title">{it.title}</p>
                        <p className="wk-point-body">{it.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            );

          case "quote":
            return (
              <blockquote className="wk-quote" key={i}>
                <p data-split style={{ "--step": "22ms" } as React.CSSProperties}>
                  {b.text}
                </p>
                {b.by && <cite>{b.by}</cite>}
              </blockquote>
            );
        }
      })}
    </>
  );
}
