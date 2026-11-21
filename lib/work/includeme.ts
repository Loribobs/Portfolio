import type { CaseStudy, Media } from "./types";

// Research figures come from the project boards. High-fidelity screens are placeholders
// until the exports are added: put them in public/work/includeme/ and set `src`.
const dir = "/work/includeme";
const PURPLE = "#504EF6";

const figure = (name: string, ratio: number, label: string, bg = "#FFFFFF"): Media => ({
  src: `${dir}/${name}.jpg`,
  ratio,
  label,
  bg,
  fit: "contain",
});

/** Phone screen placeholder, on the brand purple */
const screen = (label: string, ratio = 4 / 5): Media => ({ label, ratio, bg: PURPLE });

export const includeme: CaseStudy = {
  slug: "includeme",
  tags: ["Inclusion", "Accessibility", "Mobile app", "2026"],
  title: "IncludeMe",
  summary:
    "An app for neurodivergent employees in the UK. It explains their rights at work in plain language and writes the request for adjustments for them, so they don't have to explain their condition first.",
  facts: [
    { label: "Role", value: "Sole designer and researcher" },
    { label: "Context", value: "MSc UX Design, Design Thinking module, Kingston University" },
    { label: "Timeline", value: "Spring 2026" },
    { label: "Methods", value: "7 interviews, co-creation workshop, 2 rounds of testing" },
  ],
  hero: {
    src: "/videos/includeme.mp4",
    poster: "/videos/posters/includeme.jpg",
    ratio: 16 / 9,
    videoRatio: 930 / 1080,
    fit: "contain",
    bg: PURPLE,
    label: "IncludeMe app",
  },
  short: {
    product:
      "IncludeMe helps neurodivergent employees understand what support they're entitled to at work and ask for it. It explains the law simply, drafts the request letter for you, and keeps track of what you've asked for. Your employer can't see any of it.",
    problem:
      "UK employers have to make reasonable adjustments, but most people I interviewed had never heard of the Equality Act 2010 and none knew about Access to Work. On top of that, the people who did ask for help often had to explain their condition and justify their needs before anything happened.",
    outcome:
      "People completed 92% of tasks in mid-fidelity testing. The request letter was the feature everyone mentioned in both rounds, and all seven people I interviewed said they would use an app like this.",
  },
  stats: [
    { value: "92%", label: "task success rate in mid-fidelity testing" },
    { value: "7/7", label: "interviewees said they would use an app like this" },
    { value: "0/7", label: "had heard of the Access to Work scheme" },
    { value: "3 in 10", label: "neurodivergent employees never disclose at work (CIPD, 2024)" },
  ],
  showcase: [
    {
      type: "statement",
      label: "Know your rights",
      text: "What the Equality Act covers, what Access to Work can pay for, and whether you need a diagnosis to ask, written the way you'd explain it to a friend.",
    },
    {
      type: "grid",
      items: [
        { media: screen("Home screen"), caption: "Home, with any open requests at the top." },
        { media: screen("My Rights: Equality Act 2010"), caption: "The Equality Act without the legal language." },
      ],
    },
    {
      type: "statement",
      label: "Asking for support",
      text: "You pick what would help and IncludeMe writes the request letter. Nobody has to make a case for their own needs.",
    },
    {
      type: "grid",
      items: [
        { media: screen("Choosing an adjustment"), caption: "Choosing from common adjustments." },
        { media: screen("Generated request letter"), caption: "The letter, ready to send." },
      ],
    },
    {
      type: "statement",
      label: "Keeping track",
      text: "All your requests in one place, so you can update one after your manager agrees to it.",
    },
    {
      type: "grid",
      items: [
        { media: screen("Requests list"), caption: "Pending and agreed requests." },
        { media: screen("Updating a request"), caption: "Updating a request after a meeting." },
      ],
    },
    {
      type: "statement",
      label: "Accessibility",
      text: "You can change the text size and switch to a dyslexia-friendly font, because people read in different ways.",
    },
    {
      type: "grid",
      items: [
        { media: screen("Accessibility settings"), caption: "Text size and font." },
        { media: screen("Disclosure and privacy settings"), caption: "Choosing what gets shared and with whom." },
      ],
    },
  ],
  full: {
    title: "Asking for help without having to prove it",
    standfirst:
      "I started out designing an app to tell people their rights. After talking to seven neurodivergent employees, it became an app that does the explaining for them.",
    chapters: [
      {
        id: "problem",
        title: "A right most people don't know they have",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Under the Equality Act 2010, UK employers have to make reasonable adjustments for employees whose neurodivergence counts as a disability. There's also Access to Work, a government scheme that can pay for support.",
              "On paper that's a decent safety net, but very few people use it. Up to 20% of people may be neurodivergent, yet three in ten neurodivergent employees have never told their manager or HR, mostly because they're worried about stigma or what it might do to their career. Only 31% of people with a neurodivergent condition are in work at all.",
              "IncludeMe was my project for the Design Thinking module of my MSc. I did the research, ran the workshop, designed the app and tested it.",
            ],
          },
        ],
      },
      {
        id: "gap",
        title: "Most tools are sold to employers",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "When I looked at what already existed, most of it was sold to employers. ClearTalents lets employees share their adjustment needs, but only if their company has paid for it. Neurobox offers assessments and training, mainly to organisations. Apps like Tiimo help with personal planning but don't touch work.",
              "I couldn't find anything free and private that let an employee understand their rights and ask for adjustments on their own. That's where I decided to focus.",
            ],
          },
        ],
      },
      {
        id: "listening",
        title: "Seven interviews",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I interviewed seven neurodivergent employees working in marketing, insurance, the public sector and the creative industries. Most of them have ADHD. I colour-coded the transcripts, grouped them on an affinity map and ended up with five themes.",
            ],
          },
          { type: "media", media: figure("affinity", 2400 / 1442, "Affinity map"), caption: "Grouping quotes from the interview transcripts." },
          {
            type: "points",
            items: [
              { title: "Fear of being judged stops people speaking up", body: "It was the main reason people hadn't told anyone. The ones who had did it to work better, not because they knew they had rights." },
              { title: "Almost nobody knew the law", body: "Most had never heard of the Equality Act. None knew about Access to Work. All of them said knowing earlier would have made them more confident asking for help." },
              { title: "Managers make a huge difference", body: "A supportive manager was the main reason people felt safe opening up, though even good managers rarely understood neurodivergence." },
              { title: "Everyone was coping on their own", body: "Moving to quieter rooms, buying their own headphones and managing without any formal support." },
              { title: "Privacy and simplicity decided everything", body: "If they didn't trust how their data was handled, they wouldn't use the app. The people with ADHD also said too many steps or a busy screen would put them off." },
            ],
          },
          {
            type: "quote",
            text: "I didn't know that you could request your stuff. I always saw it as, oh, it's my problem, so I need to go out and purchase this for myself.",
            by: "Interview participant",
          },
          {
            type: "grid",
            items: [
              { media: figure("empathy-1", 2400 / 1553, "Empathy map: employee who hasn't disclosed"), caption: "Hasn't told their employer" },
              { media: figure("empathy-2", 2400 / 1553, "Empathy map: employee who has disclosed"), caption: "Has told their employer" },
            ],
          },
        ],
      },
      {
        id: "people",
        title: "Prince and Erica",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "From the research I made two personas. Prince hasn't told anyone at work and gets by on his own. Erica has told her employer, and now spends time educating them before she can even ask for anything. They're in different situations, but they're both doing the work of justifying their own needs.",
            ],
          },
          { type: "media", media: figure("persona-1", 2400 / 1294, "Persona: Prince"), caption: "Prince: \"I'd rather manage it myself than risk being seen differently.\"" },
          { type: "media", media: figure("persona-2", 2400 / 1287, "Persona: Erica"), caption: "Erica: \"Not only do you have to explain why you need the support, but then you have to explain what the condition is.\"" },
          { type: "media", media: figure("journey", 2400 / 1089, "Prince's journey map"), caption: "Prince's journey map." },
        ],
      },
      {
        id: "workshop",
        title: "The co-creation workshop",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Before designing anything, I ran a workshop on Teams and Miro with two neurodivergent participants. We turned the pain points into How Might We questions, did a round of Crazy 8s, and finished with Worst Possible Idea, where you come up with the worst ways to support neurodivergent staff and then flip them.",
              "That last exercise gave us the most. \"Make employees present a business case for themselves\" turned into letting people prepare properly and never making them justify a request. \"Only support diagnosed employees with documentation\" turned into paying attention to what people actually need instead of asking for paperwork.",
            ],
          },
          { type: "media", media: figure("worst", 2046 / 1356, "Worst Possible Idea and dot voting"), caption: "Flipping the worst ideas, then dot voting." },
          {
            type: "text",
            paragraphs: [
              "By the end, all three activities had landed in the same place: the app should take the burden of proof off the person asking for help. A few specific ideas came out of that:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "A letter that's already written", body: "So nobody has to build their case from scratch." },
              { title: "Pre-approved adjustments", body: "Common options people can choose without explaining why." },
              { title: "A pack for managers", body: "The app explains neurodivergence to the manager so the employee doesn't have to." },
              { title: "Private by default", body: "People need to know their employer can't see what they do in the app." },
            ],
          },
        ],
      },
      {
        id: "structure",
        title: "Keeping it to four sections",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Because people told me a complicated app would put them off, I kept the structure to four sections: Home, My Rights, Requests and Settings. Home has the three things people come for: making a request, checking their rights and preparing for a meeting. Settings is where you control disclosure, accessibility and privacy.",
            ],
          },
          { type: "media", media: figure("ia", 2400 / 1186, "Information architecture"), caption: "The information architecture." },
        ],
      },
      {
        id: "testing",
        title: "Two rounds of testing",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I tested the low-fidelity version with four new people as open walkthroughs, asking what they thought each screen was for and whether it felt trustworthy. Then I tested the mid-fidelity version with five more on five real tasks, like signing up without a diagnosis, asking for noise-cancelling headphones and switching to a dyslexia-friendly font.",
            ],
          },
          {
            type: "stats",
            items: [
              { value: "92%", label: "task success rate at mid fidelity" },
              { value: "5", label: "tasks tested with 5 new participants" },
            ],
          },
          {
            type: "points",
            heading: "What I changed",
            items: [
              { title: "\"Chase\" became \"Update\"", body: "Someone stopped at the Chase button because they weren't sure what it would do. Update was clearer." },
              { title: "Open requests on the home screen", body: "One tester said seeing a pending request there would make it \"feel like my next job to be done\", so I moved them onto Home." },
              { title: "One category instead of two", body: "People mixed up sensory overload and concentration, so I merged them into Concentration." },
              { title: "New Request always visible", body: "With a long list, the button scrolled out of view. I pinned it above the navigation." },
              { title: "Removed the Save button", body: "A tester pointed out that being able to save a request before sending makes it easy to never send it, so I took it out." },
            ],
          },
          {
            type: "quote",
            text: "I feel all this information is necessary, but it felt like a lot to read all at once.",
            by: "Mid-fidelity tester, on the request form",
          },
          {
            type: "text",
            paragraphs: [
              "That comment led to the biggest change going into high fidelity: the request form is now broken into steps. People also asked to go straight back to their requests after sending one, and for a text size slider instead of three fixed sizes.",
            ],
          },
        ],
      },
      {
        id: "final",
        title: "The final design",
        blocks: [
          {
            type: "grid",
            items: [
              { media: screen("Onboarding"), caption: "Onboarding" },
              { media: screen("Home screen"), caption: "Home" },
              { media: screen("Do I need a diagnosis?"), caption: "Do I need a diagnosis?" },
            ],
          },
          {
            type: "grid",
            items: [
              { media: screen("Multi-step request form"), caption: "The request, step by step" },
              { media: screen("Generated request letter"), caption: "The letter" },
              { media: screen("Accessibility settings"), caption: "Accessibility settings" },
            ],
          },
        ],
      },
      {
        id: "reflection",
        title: "What I'd do differently",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Most of the people I spoke to have ADHD. I struggled to recruit autistic participants, and that matters, because an app shaped mostly by one group can easily miss what others need. Next time I'd recruit through autism-specific communities and change how the sessions run to make it easier to take part.",
              "I'd also want to test the step-by-step form and the text size slider with real users, and build the manager pack, which came out of the workshop but never made it into testing.",
              "The thing that stuck with me is that telling people their rights only went so far. What people really wanted was not having to explain themselves, and the letter did more for that than any amount of information.",
            ],
          },
        ],
      },
    ],
  },
};
