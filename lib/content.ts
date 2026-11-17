// All site copy lives here, so text edits never touch layout code.

export const nav = {
  logo: "LOROMI",
  links: [
    { label: "PROJECTS", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "RESUME", href: "#" }, // TODO: link to résumé PDF
  ],
  cta: { label: "LET'S CHAT", href: "#contact" },
};

export const hero = ["Digital Experiences", "Designed for", "People & Businesses"];

export const intro =
  "I'm Loromi - a digital experience designer with experience across Fintech, B2B, SaaS and emerging technology.";

export type Project = {
  slug: string;
  title: string;
  description: string;
  /** Placeholder colour until the real video goes in */
  color: string;
  /** Light placeholder needs dark label text */
  light?: boolean;
  /** Width / height of the media box on phones (matches the live site) */
  mobileRatio: number;
};

export const projects: Project[] = [
  {
    slug: "fora",
    title: "Fora",
    description:
      "End-to-end product and visual design to simplify investment management for modern investors",
    color: "#1E1E21",
    mobileRatio: 358 / 234,
  },
  {
    slug: "an-urban-rose",
    title: "An Urban Rose",
    description: "A digital experience to bring an immersive experience for conscious fashion.",
    color: "#EFF1F5",
    light: true,
    mobileRatio: 358 / 400,
  },
  {
    slug: "socius-ai",
    title: "Socius AI",
    description:
      "Bringing transparency and control to workplace AI, enabling teams to collaborate with AI more confidently and responsibly.",
    color: "#03798A",
    mobileRatio: 358 / 245,
  },
  {
    slug: "includeme",
    title: "IncludeMe",
    description:
      "A mobile experience that helps neurodivergent employees understand their workplace rights and access reasonable adjustments.",
    color: "#504EF6",
    mobileRatio: 358 / 416,
  },
  {
    slug: "kicksmart",
    title: "KickSmart",
    description:
      "A smarter way for amateur EA FC players to sharpen their skills, elevate performance, and maintain their wellbeing.",
    color: "#9455E6",
    mobileRatio: 358 / 150,
  },
  {
    slug: "control-lane",
    title: "Control Lane",
    description: "Bringing client accounts, compliance, and transactions into one control centre.",
    color: "#1E1E21",
    mobileRatio: 358 / 150,
  },
];

export const about = {
  highlight: "Over six years of experience building thoughtful digital experiences that scale.",
  paragraphs: [
    "I’m Loromi, a London-based Product Designer with over six years of experience creating digital products, primarily in fintech. I specialise in simplifying complex problems and transforming them into intuitive, accessible experiences that balance user needs with business goals.",
    "Having recently completed my MSc in User Experience Design at Kingston University, I continue to build on my experience with a deeper understanding of user behaviour, research, and design strategy.",
    "I’m a systems thinker who believes the best design decisions come from understanding the problem before jumping to solutions. I draw on user research, qualitiative and quantitative analysis, and usability testing to uncover insights, challenge assumptions, and guide the design process. From mapping complex user journeys to refining the smallest interface details, I approach each project with curiosity, structure, and a focus on the bigger picture.",
    "My goal is to create products that feel effortless to use, solve meaningful problems, and deliver lasting value for both people and businesses.",
  ],
};

export const roles = [
  {
    years: "2020 - Now",
    company: "Kudy Financials",
    title: "Lead Product Designer",
    location: "Milton Keynes, United Kingdom",
    description:
      "At Kudy Financials, a global alternative investment manager operating across Nigeria, Europe, and the US, I lead product design for digital investment platforms, creating intuitive experiences that simplify investment management and help clients manage their portfolios with confidence",
  },
  {
    years: "2019 - 2020",
    company: "Crubles",
    title: "UI/UX Designer",
    location: "Lagos, Nigeria",
    description:
      "At Crubles, a book-lending platform, I worked as a UI/UX Designer, designing intuitive digital experiences that made it easier for users to discover, borrow, and manage books.",
  },
  {
    years: "2018 - 2019",
    company: "Oouth",
    title: "Design Intern",
    location: "Lagos, Nigeria",
    description:
      "I worked as a Design Intern at OOUTH (Olabisi Onabanjo University Teaching Hospital), contributing to digital design projects and applying UI/UX principles to create intuitive, user-centred experiences.",
  },
];

export const contact = {
  heading: "LET'S CHAT",
  button: { label: "EMAIL ME", href: "#" }, // TODO: mailto:
  left: [
    { label: "LINKEDIN", href: "#" },
    { label: "TWITTER", href: "#" },
  ],
  right: [
    { label: "JOLUBOMEHIN@GMAIL.COM", href: "#" },
    { label: "BEHANCE", href: "#" },
    { label: "DRIBBBLE", href: "#" },
  ],
};
