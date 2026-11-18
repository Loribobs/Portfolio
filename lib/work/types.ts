// Shape of a project page. Each project is one file in lib/work/ that fills this in.
// Pages are built from "blocks", so every project can pick its own mix and order.

/** A video, an image, or a labelled placeholder until the real file exists */
export type Media = {
  /** /videos/... (.mp4) or /work/<slug>/... (.jpg/.png/.webp). Leave out for a placeholder */
  src?: string;
  /** Still frame shown before a video loads */
  poster?: string;
  /** Width / height, e.g. 16 / 10 */
  ratio: number;
  /** What it shows (alt text for images, label for placeholders) */
  label: string;
  /** Background behind it, also used for placeholders */
  bg?: string;
  /** "contain" for phone mockups so nothing is cropped */
  fit?: "cover" | "contain";
};

export type Block =
  /** Big statement with an optional mono label, used to introduce a group of visuals */
  | { type: "statement"; label?: string; text: string }
  /** One piece of media, full content width */
  | { type: "media"; media: Media; caption?: string }
  /** Two or three pieces side by side (stack on phones) */
  | { type: "grid"; items: { media: Media; caption?: string }[] }
  /** Large figures */
  | { type: "stats"; label?: string; items: { value: string; label: string }[] }
  /** Reading text: paragraphs */
  | { type: "text"; heading?: string; paragraphs: string[] }
  /** Numbered points with a short title and body */
  | { type: "points"; heading?: string; items: { title: string; body: string }[] }
  /** Pulled-out insight or quote */
  | { type: "quote"; text: string; by?: string };

export type Chapter = { id: string; title: string; blocks: Block[] };

export type CaseStudy = {
  slug: string;
  /** Small mono line above the title */
  tags: string[];
  /** Giant title on the showcase page */
  title: string;
  /** One sentence: what it is and who it's for */
  summary: string;
  facts: { label: string; value: string }[];
  hero: Media;
  /** The 30-second version */
  short: { product: string; problem: string; outcome: string };
  stats?: { value: string; label: string }[];
  /** Visual-led showcase body */
  showcase: Block[];
  /** Optional deep dive at /work/<slug>/case-study */
  full?: {
    title: string;
    standfirst: string;
    chapters: Chapter[];
  };
};
