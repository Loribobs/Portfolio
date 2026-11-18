import Link from "next/link";
import MediaFrame from "./MediaFrame";
import { caseStudies } from "@/lib/work";
import { projects } from "@/lib/content";

/** Link to the next project that has a page (in homepage order), or back to all work */
export default function NextProject({ slug }: { slug: string }) {
  const order = projects.map((p) => p.slug);
  const start = order.indexOf(slug);
  const nextSlug = [...order.slice(start + 1), ...order.slice(0, start)].find((s) =>
    caseStudies.some((c) => c.slug === s)
  );
  const next = caseStudies.find((c) => c.slug === nextSlug);

  if (!next) {
    return (
      <section className="wk-next wrap">
        <p className="wk-label">[ More work ]</p>
        <Link href="/#work" className="wk-next-title">
          All projects <span aria-hidden="true">→</span>
        </Link>
      </section>
    );
  }

  return (
    <section className="wk-next wrap">
      <p className="wk-label">[ Next project ]</p>
      <Link href={`/work/${next.slug}`} className="wk-next-link">
        <span className="wk-next-title">
          {next.title} <span aria-hidden="true">→</span>
        </span>
        <MediaFrame media={next.hero} />
      </Link>
    </section>
  );
}
