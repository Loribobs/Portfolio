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
  tags: ["Fintech", "Web & mobile", "2022 – 2024"],
  title: "Fora",
  summary:
    "A self-service investment dashboard that lets Kudy's clients get verified, buy and sell funds, and track their money without waiting on an account manager.",
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
      "Fora is Kudy's client dashboard on web and mobile. Investors use it to verify their identity, read up on funds, subscribe or sell, and keep track of how their money is doing.",
    problem:
      "Kudy started as a private investment club, where an account manager handled every subscription, withdrawal and question. That works for a club. It doesn't work for a global investment manager.",
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
      label: "Getting verified",
      text: "Before anyone can invest, they have to prove who they are. That used to go through an account manager. Now it happens in a few screens.",
    },
    {
      type: "media",
      media: slot("KYC document upload flow (screen recording)"),
      caption: "Clients upload their KYC documents and personal details themselves, so verification no longer waits on support.",
    },
    {
      type: "statement",
      label: "Choosing a fund",
      text: "Enough detail to make a decision, without needing someone to explain it.",
    },
    {
      type: "grid",
      items: [
        { media: slot("Fund detail page", 4 / 3), caption: "Fund details: what it invests in, rate, minimums." },
        { media: slot("Subscribe / sell flow", 4 / 3), caption: "Subscribing and selling, with no account manager in the loop." },
      ],
    },
    {
      type: "media",
      media: slot("Portfolio overview dashboard"),
      caption: "One place to see every fund a client holds and how it's doing.",
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
      "How a private investment club's back-office became a dashboard 2,000+ clients run on their own.",
    chapters: [
      {
        id: "setting",
        title: "From investment club to investment manager",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Kudy began as a private investment club. Members knew each other, and an account manager took care of almost everything: getting new members set up, putting money into funds, taking it out, answering questions about how a fund worked.",
              "As Kudy grew into a global investment manager, that model hit a ceiling. More clients meant more documents to chase, more emails to answer and longer waits for everyone. The business needed clients to be able to help themselves.",
              "Fora was the answer: a client dashboard on web and mobile. It launched in late 2024. I led the design, from the UX and visual identity to the design system the product is built on, working with one product manager and six engineers.",
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
        id: "onboarding",
        title: "The first door: getting verified",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Nobody can invest until they've been verified. Regulations require identity documents and personal details for every client, and before Fora, collecting them went through an account manager.",
              "I designed an upload flow that collects KYC documents and personal information inside the dashboard. Clients can get through compliance on their own, and it took a lot of repetitive work off the support team.",
            ],
          },
          {
            type: "media",
            media: slot("KYC document upload flow (screen recording)"),
            caption: "The document upload flow, from first screen to submitted.",
          },
        ],
      },
      {
        id: "investing",
        title: "Making the money part effortless",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Once a client is verified, Fora comes down to three jobs: understand a fund, put money in or take it out, and see how it's doing. I kept the dashboard deliberately minimal and built it around those three jobs, so the important actions are never buried.",
            ],
          },
          {
            type: "grid",
            items: [
              { media: slot("Fund detail page", 4 / 3), caption: "Fund details" },
              { media: slot("Subscribe / sell flow", 4 / 3), caption: "Subscribe and sell" },
            ],
          },
          { type: "media", media: slot("Portfolio overview dashboard"), caption: "Tracking every holding in one place" },
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
