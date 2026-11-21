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
    "Kudy's investment platform. I designed it so clients could pick a fund, invest in dollars or naira and keep an eye on their money without having to call their account manager every time.",
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
      "Fora is where Kudy's clients manage their investments, on web and mobile. It sits in the same space as Wealthsimple or Cowrywise: you browse funds like Eurobonds and hedge funds, put money in, take it out, and see how your portfolio is doing.",
    problem:
      "Kudy started as a private investment club, and for years an account manager handled everything for every client. As the company grew into a global fund manager, that stopped scaling. Clients waited on replies, and the team spent their days on requests clients could have done themselves.",
    outcome:
      "Since launch, more than 2,000 clients have signed up and use Fora, and millions in dollar and naira subscriptions have gone through it. Client satisfaction and engagement rose 25%, and company revenue grew 7%.",
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
      text: "Clients told us they couldn't tell funds apart, so each one now has its own page with what it invests in, the rate and the minimum.",
    },
    {
      type: "grid",
      items: [
        { media: slot("Funds list", 4 / 3), caption: "All of Kudy's funds in one list, from Eurobonds to hedge funds." },
        { media: slot("Fund detail page", 4 / 3), caption: "The fund page answers the questions clients used to email about." },
      ],
    },
    {
      type: "statement",
      label: "Investing",
      text: "Subscribing to a fund or selling out of one used to mean an email and a wait. Now clients do it in the app, in dollars or naira.",
    },
    {
      type: "grid",
      items: [
        { media: slot("Subscribe flow", 4 / 3), caption: "Subscribing to a fund." },
        { media: slot("Redeem / sell flow", 4 / 3), caption: "Selling, which follows the same steps." },
      ],
    },
    {
      type: "statement",
      label: "The dashboard",
      text: "I kept the dashboard deliberately quiet. Most clients open it to check one thing: how their money is doing.",
    },
    {
      type: "media",
      media: slot("Portfolio overview dashboard"),
      caption: "Every holding across funds and currencies on one screen.",
    },
    {
      type: "statement",
      label: "Onboarding",
      text: "Regulators still need ID documents before anyone can invest. We moved that step into the app so it stopped going through an account manager.",
    },
    {
      type: "media",
      media: slot("Onboarding and KYC upload (screen recording)"),
      caption: "Uploading KYC documents during sign-up.",
    },
    {
      type: "statement",
      label: "Design system",
      text: "With six engineers building web and mobile at the same time, I needed one set of parts we all worked from, so I built a design system from scratch.",
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
      text: "Once the basics worked, we added two things the business had wanted for a while: referrals and Kudy Kredit.",
    },
    {
      type: "grid",
      items: [
        { media: slot("Kudy Kredit loan flow", 4 / 3), caption: "Kudy Kredit lets clients borrow against their own portfolio." },
        { media: slot("Referral rewards", 4 / 3), caption: "Referral rewards for clients who bring someone in." },
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
      "How we took Kudy from a club where an account manager did everything to a platform 2,000+ clients use on their own.",
    chapters: [
      {
        id: "setting",
        title: "Where Kudy started",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Kudy is an alternative investment manager, licensed in Luxembourg and, since 2023, by Nigeria's SEC. It gives clients access to funds like Eurobonds and hedge funds, in dollars and naira.",
              "It didn't start that way. Kudy began as a private investment club, and an account manager looked after every member. If you wanted to put money into a fund, take some out or understand how a fund worked, you messaged them and waited.",
              "That was fine with a small group of people who knew each other. As Kudy grew, it became the bottleneck. More clients meant more messages, longer waits and an operations team spending most of its time on requests that didn't really need a person.",
              "Fora was our answer. I was the only designer on it, working with a product manager and six engineers from 2022 until it launched in late 2024. I designed the product end to end, including its visual identity and the design system it's built on.",
            ],
          },
          { type: "media", media: slot("Fora on web and mobile, side by side") },
        ],
      },
      {
        id: "research",
        title: "Looking at what clients already used",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Our clients weren't comparing Kudy with other fund managers. They were comparing it with the apps on their phones. PiggyVest and Cowrywise had already shown people in Nigeria that investing could happen in an app, so I started by looking closely at how they handled the basics and where our own process fell short.",
              "Three problems kept coming up when I compared the two:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Fund information was unclear", body: "Clients couldn't find enough about a fund to decide on their own, so they asked their account manager." },
              { title: "Moving money needed a person", body: "Every deposit and withdrawal went through an account manager, even routine ones." },
              { title: "Replies were slow", body: "Anything that needed an answer sat in someone's inbox until they got to it." },
            ],
          },
          {
            type: "text",
            paragraphs: [
              "Looking at them side by side, I realised they were really one problem. Clients couldn't do anything without asking someone first, and that's what we had to fix.",
            ],
          },
        ],
      },
      {
        id: "principles",
        title: "What every screen had to do",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The goal we agreed on was simple to say and harder to design: give clients enough information to make their own decisions, let them invest and withdraw without help, and make it easy to see where their money is. I wrote it down as three checks I used in every review:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Does the fund explain itself?", body: "If a client would still need to ask what something means, the screen isn't finished." },
              { title: "Can they finish without us?", body: "Subscribing and selling should work from start to end inside the product." },
              { title: "Is this the first place they'd go?", body: "The dashboard had to be where clients went first, not what they tried when their account manager was busy." },
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
              "Most of what clients do in Fora comes down to three things: find a fund, put money in or take it out, and check how they're doing. I built the dashboard around those and kept everything else out of the way.",
              "Each fund has its own page with what it invests in, its rate and its minimum. The goal was that a client could compare a Eurobond fund with a hedge fund without needing someone to explain the difference. Subscribing and selling happen from that page, in dollars or naira.",
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
          { type: "media", media: slot("Portfolio overview dashboard"), caption: "The portfolio view." },
        ],
      },
      {
        id: "onboarding",
        title: "Getting the paperwork out of the way",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Before anyone can invest, regulators require identity documents and personal details. That step used to go through an account manager as well, with documents sent back and forth by email.",
              "I designed an upload flow inside the app, so new clients can get through KYC on their own and go straight to investing. It also took a lot of repetitive work off the support team.",
            ],
          },
          {
            type: "media",
            media: slot("Onboarding and KYC upload (screen recording)"),
            caption: "Onboarding, from the first screen to ready to invest.",
          },
        ],
      },
      {
        id: "system",
        title: "Building the design system",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "As Fora grew across web and mobile, keeping track of every component by hand got messy quickly. I built a design system from scratch using atomic design: grids, side navigation, colour, type, segmented controls, cards and so on, each defined once and reused.",
              "It made my own work faster, but the bigger win was for the engineers. They were building from the same parts I was designing with, so there was less back and forth about spacing and states.",
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
        title: "What happened after launch",
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
              "With onboarding and investing working without help, we had room to add more. We built a referral rewards programme and Kudy Kredit, which lets clients take out a loan backed by their own investment portfolio. Kudy Kredit also gave the business a new source of revenue.",
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
        title: "Looking back",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Kudy's clients are mostly high-net-worth individuals and corporate clients, and a lot of them are older and don't spend their day in apps. Early on I leaned on patterns from consumer fintech that assume a younger, app-native user. I had to pull back from some of that and make things more explicit than I would for a typical consumer app.",
              "Building the design system from scratch was one of the most useful things I did on the project. Every feature after it was quicker to design and easier for the team to build, and I'd start one earlier next time.",
              "It also changed how I think about financial products in general. People are trusting you with their money, so I found myself asking of every screen whether it made the product feel more trustworthy or less.",
            ],
          },
        ],
      },
    ],
  },
};
