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
    "A private app that helps neurodivergent employees in the UK understand their workplace rights and ask for adjustments, without having to explain themselves first.",
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
      "IncludeMe is a mobile app for neurodivergent employees. It explains your rights in plain language, writes the adjustment request letter for you, and keeps track of what you've asked for, all without your employer seeing any of it.",
    problem:
      "Up to one in five people may be neurodivergent, yet three in ten never tell their manager, mostly for fear of being judged. Most of the people I spoke to had never heard of the Equality Act 2010, and none knew about Access to Work.",
    outcome:
      "People completed 92% of tasks in mid-fidelity testing. The automatic request letter was the standout feature in both rounds, and every interviewee said they would use an app like this.",
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
      text: "The law in plain language. What the Equality Act covers, what Access to Work pays for, and whether you need a diagnosis to ask.",
    },
    {
      type: "grid",
      items: [
        { media: screen("Home screen"), caption: "Home: your open requests, and what to do next." },
        { media: screen("My Rights: Equality Act 2010"), caption: "Rights explained without legal jargon." },
      ],
    },
    {
      type: "statement",
      label: "Ask without explaining yourself",
      text: "Pick what would help. IncludeMe writes the request letter for you, so you never have to build a case for your own needs.",
    },
    {
      type: "grid",
      items: [
        { media: screen("Choosing an adjustment"), caption: "Common adjustments, ready to pick." },
        { media: screen("Generated request letter"), caption: "A ready-to-send letter, grounded in the law." },
      ],
    },
    {
      type: "statement",
      label: "Keep track",
      text: "Every request in one place, and a quick way to update it when your manager says yes.",
    },
    {
      type: "grid",
      items: [
        { media: screen("Requests list"), caption: "Pending and agreed requests." },
        { media: screen("Updating a request"), caption: "Update a request after a conversation." },
      ],
    },
    {
      type: "statement",
      label: "Made to be read your way",
      text: "Adjustable text size and a dyslexia-friendly font, because neurodivergence isn't one experience.",
    },
    {
      type: "grid",
      items: [
        { media: screen("Accessibility settings"), caption: "Text size and font settings." },
        { media: screen("Disclosure and privacy settings"), caption: "You decide what's shared, and with whom." },
      ],
    },
  ],
  full: {
    title: "Asking for help without having to prove it",
    standfirst:
      "How talking to neurodivergent employees turned a rights app into a tool that does the explaining for them.",
    chapters: [
      {
        id: "problem",
        title: "A right most people don't know they have",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Under the Equality Act 2010, UK employers have a legal duty to make reasonable adjustments for employees whose neurodivergence counts as a disability. Access to Work, a government scheme, can even pay for support.",
              "On paper, that's a strong safety net. In practice, very few people use it. As many as 20% of people may be neurodivergent, but three in ten neurodivergent employees never tell their manager or HR, mostly because they're afraid of stigma or of it hurting their career. Only 31% of people with a neurodivergent condition are in work at all.",
              "IncludeMe was my project for the Design Thinking module of my MSc. I did the research, ran the workshop, designed the app and tested it.",
            ],
          },
        ],
      },
      {
        id: "gap",
        title: "Built for employers, not employees",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Looking at what already exists, the pattern was clear. ClearTalents lets employees share their adjustment needs, but only if their employer has bought it. Neurobox offers assessments and training, mostly sold to organisations. Tools like Tiimo help with personal productivity but not with work.",
              "There was no free, private tool that let an employee understand their rights and ask for adjustments on their own. That gap became the brief.",
            ],
          },
        ],
      },
      {
        id: "listening",
        title: "What seven people told me",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I interviewed seven neurodivergent employees across marketing, insurance, the public sector and the creative industries, most of them with ADHD. I colour-coded the transcripts, built an affinity map and pulled out five themes.",
            ],
          },
          { type: "media", media: figure("affinity", 2400 / 1442, "Affinity map"), caption: "Affinity mapping the interview transcripts." },
          {
            type: "points",
            items: [
              { title: "Fear of judgement keeps people quiet", body: "It was the biggest barrier to disclosure. Those who did disclose did it to be more productive, not because they knew their rights." },
              { title: "Nobody knew the law", body: "Most had never heard of the Equality Act 2010. Not one knew about Access to Work. All said knowing earlier would have given them the confidence to speak up." },
              { title: "The manager makes or breaks it", body: "A supportive manager was the single biggest factor in whether people felt safe to open up. Even good managers rarely understood neurodivergence." },
              { title: "Everyone was coping alone", body: "Moving to quieter rooms, buying their own headphones, self-managing without any formal support." },
              { title: "Privacy first, simplicity second", body: "Data privacy decided whether they'd trust the app at all. Too many steps or a cluttered screen and the people with ADHD said they'd drop it." },
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
              { media: figure("empathy-1", 2400 / 1553, "Empathy map: employee who hasn't disclosed"), caption: "Hasn't disclosed" },
              { media: figure("empathy-2", 2400 / 1553, "Empathy map: employee who has disclosed"), caption: "Has disclosed" },
            ],
          },
        ],
      },
      {
        id: "people",
        title: "Two people, one burden",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I turned the research into two personas. Prince hasn't told anyone at work and manages on his own. Erica has disclosed, and now finds herself educating her employer before she can even ask for help. Different starting points, but both carry the work of justifying their own needs.",
            ],
          },
          { type: "media", media: figure("persona-1", 2400 / 1294, "Persona: Prince"), caption: "\"I'd rather manage it myself than risk being seen differently.\"" },
          { type: "media", media: figure("persona-2", 2400 / 1287, "Persona: Erica"), caption: "\"Not only do you have to explain why you need the support, but then you have to explain what the condition is.\"" },
          { type: "media", media: figure("journey", 2400 / 1089, "Prince's journey map"), caption: "Prince's journey, from struggling to giving up." },
        ],
      },
      {
        id: "workshop",
        title: "Designing with, not for",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Before designing anything, I ran a co-creation workshop with two neurodivergent participants on Teams and Miro. We reframed the pain points as How Might We questions, did a Crazy 8s round, then a Worst Possible Idea exercise: come up with the worst ways to support neurodivergent staff, then flip them.",
              "The worst ideas were telling. \"Make employees present a business case for themselves\" flipped into \"let people prepare, and never make them justify a request\". \"Only support diagnosed employees with documentation\" flipped into observing what people need instead of demanding paperwork.",
            ],
          },
          { type: "media", media: figure("worst", 2046 / 1356, "Worst Possible Idea and dot voting"), caption: "Worst Possible Idea, flipped, then dot voted." },
          {
            type: "quote",
            text: "Every activity pointed the same way: take the burden of proof off the person asking for help.",
          },
          {
            type: "points",
            heading: "What came out of it",
            items: [
              { title: "A letter that writes itself", body: "A ready-made request letter, so nobody has to build a case from scratch." },
              { title: "Pre-approved adjustments", body: "Common options people can pick without having to justify them." },
              { title: "A pack for managers", body: "Let the app do the educating, so the employee doesn't have to." },
              { title: "Private by default", body: "Users need to know their employer can't see what they do in the app." },
            ],
          },
        ],
      },
      {
        id: "structure",
        title: "Four sections, nothing more",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Simplicity wasn't a style choice, it was a requirement. The app has four sections: Home, My Rights, Requests and Settings. Home holds the three things people come for: make a request, know your rights and prepare for a meeting. Settings is where you control disclosure, accessibility and privacy.",
            ],
          },
          { type: "media", media: figure("ia", 2400 / 1186, "Information architecture"), caption: "The information architecture." },
        ],
      },
      {
        id: "testing",
        title: "Testing, twice",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I tested the low-fidelity prototype with four new participants as open walkthroughs, asking what each screen meant and whether it felt trustworthy. Then I tested the mid-fidelity prototype with five more on five real tasks, like onboarding without a diagnosis, requesting noise-cancelling headphones and switching to a dyslexia-friendly font.",
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
            heading: "What changed",
            items: [
              { title: "\"Chase\" became \"Update\"", body: "One tester paused on the Chase button, unsure what it would do. Update says what happens." },
              { title: "Open requests on Home", body: "\"It makes it feel like my next job to be done.\" Pending requests now sit on the home screen." },
              { title: "One clear category", body: "People mixed up sensory overload and concentration, so the two became one: Concentration." },
              { title: "New Request always in reach", body: "With a long list, the button scrolled out of view. It's now fixed above the navigation." },
              { title: "No early exit", body: "A Save button before sending made it easy to never send. Removing it nudged people to finish." },
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
              "That quote led to the biggest change going into high fidelity: the request form is now split into steps. People also asked to be taken straight back to their requests after sending, and for a text size slider instead of fixed sizes.",
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
              { media: screen("Multi-step request form"), caption: "Request, step by step" },
              { media: screen("Generated request letter"), caption: "The letter" },
              { media: screen("Accessibility settings"), caption: "Read it your way" },
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
              "Most participants had ADHD. Recruiting autistic participants was hard, and that matters: an app shaped mostly by one profile can miss what others need. Next time I'd recruit through autism-specific communities and adapt the sessions to make taking part easier.",
              "I'd also test the multi-step form and the text size slider with real users, and build out the manager pack, which came from the workshop but didn't make it into testing.",
            ],
          },
          {
            type: "points",
            heading: "What I'm taking with me",
            items: [
              { title: "Remove the burden, don't just inform", body: "Knowing your rights helped. Not having to explain yourself helped more." },
              { title: "Privacy is the product", body: "For people who fear being judged, trust in how data is handled decides whether they open the app at all." },
              { title: "Co-create when the stakes are personal", body: "The workshop produced the app's best ideas. I wouldn't have reached them alone." },
            ],
          },
        ],
      },
    ],
  },
};
