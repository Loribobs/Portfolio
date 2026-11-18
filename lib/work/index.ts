import type { CaseStudy } from "./types";
import { fora } from "./fora";
import { anUrbanRose } from "./an-urban-rose";
import { sociusAi } from "./socius-ai";
import { includeme } from "./includeme";

// Add each new project here once its file exists in lib/work/
export const caseStudies: CaseStudy[] = [fora, anUrbanRose, sociusAi, includeme];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

/** Rough reading time for the full case study */
export const readingMinutes = (c: CaseStudy) => {
  if (!c.full) return 0;
  const words = c.full.chapters
    .flatMap((ch) => ch.blocks)
    .flatMap((b) => {
      if (b.type === "text") return b.paragraphs;
      if (b.type === "points") return b.items.flatMap((i) => [i.title, i.body]);
      if (b.type === "quote" || b.type === "statement") return [b.text];
      return [];
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};
