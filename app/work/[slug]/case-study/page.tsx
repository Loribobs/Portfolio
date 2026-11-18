import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Blocks from "@/components/work/Blocks";
import Facts from "@/components/work/Facts";
import NextProject from "@/components/work/NextProject";
import { ChapterNav, ReadingProgress } from "@/components/work/ReadingAids";
import { caseStudies, getCaseStudy, readingMinutes } from "@/lib/work";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  caseStudies.filter((c) => c.full).map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  if (!c?.full) return {};
  const title = `${c.title}: ${c.full.title} — Loromi`;
  return {
    title,
    description: c.full.standfirst,
    openGraph: { title, description: c.full.standfirst, images: c.hero.poster ? [c.hero.poster] : [] },
  };
}

/** Step 2: the full case study, for readers who want the detail */
export default async function CaseStudyPage({ params }: Params) {
  const c = getCaseStudy((await params).slug);
  if (!c?.full) notFound();
  const { full } = c;

  return (
    <>
      <Nav />
      <ReadingProgress />
      <main className="wk wk-full">
        <header className="wk-hero wrap">
          <Link href={`/work/${c.slug}`} className="wk-back">
            <span aria-hidden="true">←</span> {c.title} overview
          </Link>
          <p className="wk-tags" data-reveal>
            <span>[ {c.title} ]</span>
            <span>[ Full case study ]</span>
            <span>[ {readingMinutes(c)} min read ]</span>
          </p>
          <h1 className="wk-title wk-title-sm" data-split>
            {full.title}
          </h1>
          <p className="wk-summary" data-split style={{ "--step": "18ms", "--d": "0.15s" } as React.CSSProperties}>
            {full.standfirst}
          </p>
          <Facts facts={c.facts} />
        </header>

        <div className="wk-article wrap">
          <aside className="wk-aside">
            <ChapterNav chapters={full.chapters.map(({ id, title }) => ({ id, title }))} />
          </aside>
          <div className="wk-chapters">
            {full.chapters.map((ch, i) => (
              <section className="wk-chapter" id={ch.id} key={ch.id}>
                <p className="wk-chapter-n" data-reveal>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="wk-chapter-title" data-split>
                  {ch.title}
                </h2>
                <Blocks blocks={ch.blocks} />
              </section>
            ))}
          </div>
        </div>

        <NextProject slug={c.slug} />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
