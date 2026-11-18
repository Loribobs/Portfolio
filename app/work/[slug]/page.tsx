import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Blocks from "@/components/work/Blocks";
import Facts from "@/components/work/Facts";
import MediaFrame from "@/components/work/MediaFrame";
import NextProject from "@/components/work/NextProject";
import { caseStudies, getCaseStudy, readingMinutes } from "@/lib/work";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => caseStudies.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  if (!c) return {};
  return {
    title: `${c.title} — Loromi`,
    description: c.summary,
    openGraph: { title: `${c.title} — Loromi`, description: c.summary, images: c.hero.poster ? [c.hero.poster] : [] },
  };
}

/** Step 1: the visual showcase. Readable in about a minute. */
export default async function ShowcasePage({ params }: Params) {
  const c = getCaseStudy((await params).slug);
  if (!c) notFound();

  return (
    <>
      <Nav />
      <main className="wk">
        <header className="wk-hero wrap">
          <Link href="/#work" className="wk-back">
            <span aria-hidden="true">←</span> All projects
          </Link>
          <p className="wk-tags" data-reveal>
            {c.tags.map((t) => (
              <span key={t}>[ {t} ]</span>
            ))}
          </p>
          <h1 className="wk-title" data-split>
            {c.title}
          </h1>
          <p className="wk-summary" data-split style={{ "--step": "18ms", "--d": "0.15s" } as React.CSSProperties}>
            {c.summary}
          </p>
          <Facts facts={c.facts} />
        </header>

        <div className="wrap">
          <figure className="wk-hero-media" data-reveal>
            <MediaFrame media={c.hero} />
          </figure>
        </div>

        <section className="wk-short wrap" aria-label="The short version">
          <p className="wk-label" data-reveal>[ The short version ]</p>
          <div className="wk-short-grid">
            {(
              [
                ["The product", c.short.product],
                ["The problem", c.short.problem],
                ["The outcome", c.short.outcome],
              ] as const
            ).map(([h, t], i) => (
              <div key={h} data-reveal style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}>
                <h2 className="wk-short-h">{h}</h2>
                <p className="wk-short-p">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {c.stats && (
          <section className="wk-section wrap" aria-label="Results">
            <Blocks blocks={[{ type: "stats", items: c.stats }]} />
          </section>
        )}

        <section className="wk-body wrap">
          <Blocks blocks={c.showcase} />
        </section>

        {c.full && (
          <section className="wk-cta wrap">
            <p className="wk-label" data-reveal>[ Full case study · {readingMinutes(c)} min read ]</p>
            <h2 className="wk-cta-title" data-split>
              Want the whole story?
            </h2>
            <p className="wk-cta-text" data-reveal>
              {c.full.standfirst}
            </p>
            <Link href={`/work/${c.slug}/case-study`} className="btn wk-cta-btn" data-reveal>
              Read the full case study <span aria-hidden="true">→</span>
            </Link>
          </section>
        )}

        <NextProject slug={c.slug} />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
