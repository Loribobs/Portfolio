import type { CaseStudy, Media } from "./types";

// Media without a `src` shows as a labelled placeholder.
// To add the real file: put it in public/work/fora/ and set src: "/work/fora/<file>".
const slot = (label: string, ratio = 16 / 10, fit?: Media["fit"]): Media => ({
  label,
  ratio,
  bg: "#1E1E21",
  fit,
});

export const fora: CaseStudy = {
  slug: "fora",
  tags: ["Fintech", "Wealth management", "Web & mobile", "2022 – 2024"],
  title: "Fora",
  summary:
    "The investment platform for Kudy, a global fund manager. Clients explore funds, invest in dollars or naira, and manage their wealth on web and mobile, without going through an account manager.",
  facts: [
    { label: "Role", value: "Product Designer, design lead" },
    { label: "Team", value: "1 designer, 1 PM, 6 engineers" },
    { label: "Timeline", value: "2022 – 2024, launched late 2024" },
    { label: "Delivered", value: "Design system, component library, hi-fi designs, prototypes" },
  ],
  hero: {
    src: "/videos/fora.mp4",
    poster: "/videos/posters/fora.jpg",
    ratio: 2202 / 1440,
    label: "Fora dashboard",
    bg: "#1E1E21",
  },
  short: {
    product:
      "Fora is Kudy's investment platform on web and mobile, in the same space as Wealthsimple or Cowrywise. Clients explore funds, from Eurobonds to hedge funds, invest or withdraw, and keep track of how their portfolio is doing.",
    problem:
      "Kudy started as a private investment club, where an account manager handled every investment, withdrawal and question. That works for a club. It doesn't work for a global investment manager with clients investing in more than one currency.",
    outcome:
      "Clients now do it themselves. Over 2,000 have signed up and actively use Fora, millions have gone through it in fund subscriptions, and company revenue grew 7%.",
  },
  stats: [
    { value: "2,000+", label: "clients signed up and actively using Fora" },
    { value: "Millions", label: "in dollar and naira fund subscriptions processed" },
    { value: "+25%", label: "in client satisfaction and engagement" },
    { value: "+7%", label: "in company revenue" },
  ],
  showcase: [
    {
      type: "statement",
      label: "Finding a fund",
      text: "Every fund explains itself: what it invests in, its rate, the minimums. Enough to decide without calling anyone.",
    },
    {
      type: "grid",
      items: [
        { media: slot("Funds list", 4 / 3), caption: "Kudy's funds side by side, from Eurobonds to hedge funds." },
        { media: slot("Fund detail page", 4 / 3), caption: "Everything about a fund on one page." },
      ],
    },
    {
      type: "statement",
      label: "Investing",
      text: "Putting money in or taking it out happens in the app, start to finish, in dollars or naira.",
    },
    {
      type: "grid",
      items: [
        { media: slot("Subscribe flow", 4 / 3), caption: "Investing in a fund, with no account manager in the loop." },
        { media: slot("Redeem / sell flow", 4 / 3), caption: "Selling out of a fund just as easily." },
      ],
    },
    {
      type: "statement",
      label: "Managing wealth",
      text: "One view of everything a client owns and how it's performing.",
    },
    {
      type: "media",
      media: slot("Portfolio overview dashboard"),
      caption: "Every holding, across funds and currencies, in one place.",
    },
    {
      type: "statement",
      label: "Getting started",
      text: "Regulators still need the paperwork. Onboarding collects it in the app, so new clients can get to investing.",
    },
    {
      type: "media",
      media: slot("Onboarding and KYC upload (screen recording)"),
      caption: "Clients upload their documents and details themselves instead of sending them to an account manager.",
    },
    {
      type: "statement",
      label: "Design system",
      text: "Built from atoms up, so eight people could ship web and mobile without the product drifting apart.",
    },
    {
      type: "grid",
      items: [
        { media: slot("Design system: colour, type, grid", 4 / 3) },
        { media: slot("Design system: components (cards, segmented controls, side nav)", 4 / 3) },
      ],
    },
    {
      type: "statement",
      label: "After launch",
      text: "Once clients could manage their own money, Fora had room to grow.",
    },
    {
      type: "grid",
      items: [
        { media: slot("Kudy Kredit loan flow", 4 / 3), caption: "Kudy Kredit: loans backed by a client's own investment portfolio." },
        { media: slot("Referral rewards", 4 / 3), caption: "Referral rewards for clients who bring others in." },
      ],
    },
    {
      type: "grid",
      items: [
        { media: slot("Mobile screen 1", 9 / 16, "contain") },
        { media: slot("Mobile screen 2", 9 / 16, "contain") },
        { media: slot("Mobile screen 3", 9 / 16, "contain") },
      ],
    },
  ],
  full: {
    title: "Making wealth creation accessible",
    standfirst:
      "How a private investment club became an investment platform 2,000+ clients use to manage their own money.",
    chapters: [
      {
        id: "setting",
        title: "From investment club to investment manager",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Kudy is a global alternative investment manager, licensed in Luxembourg and, since 2023, by Nigeria's SEC. It gives clients access to funds like Eurobonds and hedge funds, in dollars and naira.",
              "It began as a private investment club. Members knew each other, and an account manager took care of almost everything: putting money into funds, taking it out, answering questions about how a fund worked.",
              "As Kudy grew into a global investment manager, that model hit a ceiling. More clients meant more requests to handle, more emails to answer and longer waits for everyone. The business needed clients to be able to invest on their own.",
              "Fora is the platform that made that possible: the place clients explore funds, invest, withdraw and manage their portfolio on web and mobile, much like Wealthsimple or Cowrywise do for their users. It launched in late 2024. I led the design, from the UX and visual identity to the design system the product is built on, working with one product manager and six engineers.",
            ],
          },
          { type: "media", media: slot("Fora on web and mobile, side by side") },
        ],
      },
      {
        id: "research",
        title: "What was getting in the way",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "PiggyVest and Cowrywise had already shown investors in Nigeria that saving and investing could happen in an app, so that's where I started: a comparative look at what they got right, and where Kudy's own process fell short.",
              "Three problems kept coming up:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Fund information was unclear", body: "Clients couldn't see enough about a fund to make a decision on their own." },
              { title: "Moving money needed a person", body: "Deposits and withdrawals went through an account manager, adding friction to the simplest task." },
              { title: "Answers were slow", body: "Anything that needed a reply sat in a queue until someone got to it." },
            ],
          },
          {
            type: "quote",
            text: "On their own they looked like three separate problems. Underneath, they were the same one: clients couldn't do anything without asking someone first.",
          },
        ],
      },
      {
        id: "principles",
        title: "Three principles",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "That gave the project a clear goal. Give clients enough detail to make informed decisions about funds, make subscribing and selling effortless, and make it easy to keep track of everything, all without relying on an account manager. I turned it into three principles that every screen had to pass:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Show the detail", body: "Every fund explains itself. If a client needs to ask what something means, the screen hasn't done its job." },
              { title: "Automate the transaction", body: "Subscribing and selling happen in the product, start to finish." },
              { title: "Self-serve by default", body: "The dashboard is the first place a client goes, not a fallback for when their account manager is busy." },
            ],
          },
        ],
      },
      {
        id: "investing",
        title: "Investing, start to finish",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "At its core, Fora does three jobs: help clients find the right fund, let them put money in or take it out, and show them how their portfolio is doing. I kept the dashboard deliberately minimal and built it around those three jobs, so the important actions are never buried.",
              "Each fund gets its own page with what it invests in, its rate and its minimums, so clients can compare a Eurobond fund with a hedge fund without needing someone to explain the difference. Subscribing and redeeming happen right there, in dollars or naira.",
            ],
          },
          {
            type: "grid",
            items: [
              { media: slot("Funds list", 4 / 3), caption: "Funds" },
              { media: slot("Fund detail page", 4 / 3), caption: "Fund details" },
            ],
          },
          {
            type: "grid",
            items: [
              { media: slot("Subscribe flow", 4 / 3), caption: "Investing" },
              { media: slot("Redeem / sell flow", 4 / 3), caption: "Withdrawing" },
            ],
          },
          { type: "media", media: slot("Portfolio overview dashboard"), caption: "Tracking every holding in one place" },
        ],
      },
      {
        id: "onboarding",
        title: "Getting started without the paperwork",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Before anyone can invest, regulators require identity documents and personal details. That step used to go through an account manager too.",
              "I designed onboarding so clients upload their KYC documents and details inside the app and move straight on to investing. It also took a lot of repetitive work off the support team.",
            ],
          },
          {
            type: "media",
            media: slot("Onboarding and KYC upload (screen recording)"),
            caption: "Onboarding, from first screen to ready to invest.",
          },
        ],
      },
      {
        id: "system",
        title: "A system so eight people could move fast",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "As Fora grew across web and mobile, managing UI elements one by one became unwieldy. So I built the design system from scratch using atomic design: grids, side navigation, colour, typography, segmented controls, cards and the rest, each defined once and reused everywhere.",
              "It made design faster, and it made implementation smoother for the six engineers building it, because they were working from the same parts I was.",
            ],
          },
          {
            type: "grid",
            items: [
              { media: slot("Design system: colour, type, grid", 4 / 3) },
              { media: slot("Design system: components", 4 / 3) },
            ],
          },
        ],
      },
      {
        id: "outcome",
        title: "What changed",
        blocks: [
          {
            type: "stats",
            items: [
              { value: "2,000+", label: "clients signed up and actively using Fora" },
              { value: "Millions", label: "in dollar and naira fund subscriptions processed" },
              { value: "+25%", label: "in client satisfaction and engagement" },
              { value: "+7%", label: "in company revenue" },
            ],
          },
          {
            type: "text",
            paragraphs: [
              "With onboarding and investing working on their own, Fora had room to do more. We added a referral rewards programme, and Kudy Kredit: loans backed by a client's own investment portfolio, which gave the business a new source of revenue.",
            ],
          },
          {
            type: "grid",
            items: [
              { media: slot("Kudy Kredit loan flow", 4 / 3), caption: "Kudy Kredit" },
              { media: slot("Referral rewards", 4 / 3), caption: "Referral rewards" },
            ],
          },
        ],
      },
      {
        id: "learnings",
        title: "What I'm taking with me",
        blocks: [
          {
            type: "points",
            items: [
              {
                title: "Know exactly who you're designing for",
                body: "Kudy's clients are high-net-worth individuals and corporate clients. Many are older and don't live on their phones. Designing for them meant looking past the patterns that work for younger, app-native users.",
              },
              {
                title: "Build the system early",
                body: "Building a design system from scratch was one of the most valuable things I did on this project. Every feature after it was quicker to design and easier to build.",
              },
              {
                title: "Trust is the product",
                body: "In financial services, people are handing you their money. Every screen either earns a bit of trust or spends some, and that question sat behind every decision on Fora.",
              },
            ],
          },
        ],
      },
    ],
  },
};
