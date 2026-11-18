import type { CaseStudy, Media } from "./types";

// Clips are cut (and sped up) from the prototype walkthrough; figures come from the report.
const dir = "/work/socius-ai";
const WALK = 1152 / 720;

const clip = (name: string, label: string): Media => ({
  src: `${dir}/${name}.mp4`,
  poster: `${dir}/posters/${name}.jpg`,
  ratio: WALK,
  bg: "#FFFFFF",
  label,
});

const figure = (name: string, ratio: number, label: string, bg = "#E6E6E6"): Media => ({
  src: `${dir}/${name}.jpg`,
  ratio,
  label,
  bg,
  fit: "contain",
});

export const sociusAi: CaseStudy = {
  slug: "socius-ai",
  tags: ["AI & trust", "B2B SaaS", "Desktop", "2026"],
  title: "Socius AI",
  summary:
    "A desktop app that shows you what your AI agents are doing across Slack, Gmail and Atlassian, and why, and asks before anything goes out in your name.",
  facts: [
    { label: "Role", value: "Sole designer and researcher" },
    { label: "Context", value: "MSc UX Design major project, Kingston University" },
    { label: "Year", value: "2026" },
    { label: "Methods", value: "8 interviews, 16 surveys, 3 rounds of testing with 14 people" },
  ],
  hero: {
    src: "/videos/socius-ai.mp4",
    poster: "/videos/posters/socius-ai.jpg",
    ratio: 1580 / 1080,
    label: "Socius home screen",
    bg: "#03798A",
  },
  short: {
    product:
      "Socius sits on top of the tools people already work in. It shows what each AI agent has done and the sources it used, and it holds anything that reaches another person until you approve it.",
    problem:
      "AI agents now summarise meetings, reply to emails and move tasks for people. Most of it happens out of sight, so when something goes wrong, the person whose name is on it can't see what happened or why.",
    outcome:
      "In testing, the prototype scored 90.6 on the System Usability Scale and people completed 90% of tasks. They tied their trust to one thing: seeing the AI's reasoning and saying yes before it acted.",
  },
  stats: [
    { value: "90.6", label: "System Usability Scale score (top 10% is 80.3)" },
    { value: "90%", label: "task pass rate in high-fidelity testing (27 of 30)" },
    { value: "11/16", label: "strongly wanted to approve anything sent on their behalf" },
    { value: "9", label: "design requirements, each traced to research" },
  ],
  showcase: [
    {
      type: "statement",
      label: "Ground rules",
      text: "Before you connect anything, Socius tells you three things it will always do. They aren't settings you can switch off. They're how the app works.",
    },
    {
      type: "media",
      media: clip("onboarding", "Onboarding: the three rules, then connecting Slack"),
      caption: "Onboarding: three promises up front, then connect the tools you use.",
    },
    {
      type: "statement",
      label: "Nothing goes out without you",
      text: "Your agent can draft the reply. You decide whether it gets sent.",
    },
    {
      type: "media",
      media: clip("approval", "Approving an AI-drafted email"),
      caption: "A notification, the draft, and exactly what was used to write it: Kenneth's email and your calendar. Send, edit or reject.",
    },
    {
      type: "statement",
      label: "Show your sources",
      text: "Every summary points back to who said what, and links to the moment in the transcript.",
    },
    {
      type: "media",
      media: clip("summary", "Meeting summary with decisions and transcript links"),
      caption: "Decisions are attributed to the person who made them, with a jump to the transcript.",
    },
    {
      type: "statement",
      label: "A record you can search",
      text: "Everything your agents did, when, and why, in one log.",
    },
    {
      type: "grid",
      items: [
        { media: clip("activity-log", "Activity log"), caption: "Every action, its reason, and whether you approved it." },
        { media: clip("inferred-task", "Reviewing a task the AI inferred from a meeting"), caption: "Tasks drafted from a meeting wait for you before they reach the board." },
      ],
    },
    {
      type: "statement",
      label: "You choose what it can touch",
      text: "Permissions per tool and per action, not one big yes.",
    },
    {
      type: "media",
      media: clip("permissions", "Permissions for Slack, Gmail and Atlassian"),
      caption: "Turn individual abilities on or off for each connected tool.",
    },
  ],
  full: {
    title: "Opening the double black box",
    standfirst:
      "AI agents are starting to act on our behalf at work, mostly out of sight. This is how I designed a way to see what they do and approve it before it happens.",
    chapters: [
      {
        id: "problem",
        title: "Work done in your name, out of sight",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "AI has moved from something you use to something that acts for you. It summarises your meetings, drafts your replies and reorganises your tasks. Microsoft's 2026 Work Trend Index reported a fifteen-fold rise in active AI agents in a year.",
              "The problem is that most of this happens where nobody can see it. Researchers call it the double black box: you can't see how a colleague used AI, and you can't see how the AI reached its answer. As agents start talking to other agents, there's even less of a person in the loop.",
              "Socius was my MSc major project. I did all of it: the literature review, the research, the design and the testing.",
            ],
          },
          { type: "media", media: figure("problem-statement", 2400 / 2038, "Problem statement") },
        ],
      },
      {
        id: "tension",
        title: "More information isn't the answer",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The obvious fix is to show everything. The research says that backfires. People who see an algorithm make one mistake tend to abandon it, even when it outperforms them. And explanations that dump detail or confidence scores overwhelm people instead of helping them.",
              "So the question wasn't how to show more. It was what kind of transparency actually builds trust: which explanations, when, and how much control to hand back.",
            ],
          },
          {
            type: "quote",
            text: "Transparency is necessary for trust, but transparency that exposes every error risks driving people away. The design had to sit between the two.",
          },
        ],
      },
      {
        id: "research",
        title: "What people actually wanted",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I interviewed eight people who use AI at work (engineers, lawyers, a product designer, a project control engineer) and ran a survey with sixteen more. I coded the interviews in Miro, which surfaced five themes across control, transparency and trust.",
            ],
          },
          { type: "media", media: figure("affinity-map", 1, "Affinity map from the interviews"), caption: "Affinity mapping the interviews into themes." },
          {
            type: "points",
            items: [
              { title: "Oversight should scale with the stakes", body: "Moving a meeting from 10:00 to 10:15 is fine. Anything involving money, deadlines or another person needs a yes first. 11 of 16 strongly agreed they want to approve anything sent for them." },
              { title: "Agents talking to agents was the biggest worry", body: "It was the lowest-scoring survey item and the strongest objection in interviews. One respondent said nothing would make them comfortable with it." },
              { title: "A reason beats a confidence score", body: "People trusted an action more when it came with a simple reason and its sources." },
              { title: "Label it, but not everywhere", body: "A text label was the preferred way to mark AI work (11 of 16), but people warned that tagging everything makes the tag meaningless." },
              { title: "Undo first, apologies later", body: "After an AI mistake, the top choice was an immediate undo (8 of 16), well ahead of being told about it afterwards." },
            ],
          },
          {
            type: "quote",
            text: "I would say no, because there's no human control at both ends of the conversation.",
            by: "P08, on agents talking to agents",
          },
          { type: "media", media: figure("empathy-map", 2400 / 1553, "Empathy map"), caption: "Empathy map built from the interviews and survey." },
          { type: "media", media: figure("persona", 2400 / 957, "Persona: James Hill"), caption: "James, the persona built from the research." },
        ],
      },
      {
        id: "landscape",
        title: "Where existing tools stop",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I compared three products: Microsoft 365 Copilot, Perplexity Computer and Claude Cowork. Copilot sets a high bar for citing the exact file or message an answer came from. Copilot and Perplexity both pause before some actions. But none of them gives an employee real-time visibility or control when their agent deals with someone else's agent. That gap became Socius's clearest reason to exist.",
            ],
          },
          { type: "media", media: figure("competitive", 1203 / 367, "Competitive analysis", "#FFFFFF"), caption: "How three AI agent products handle transparency, approval and agent-to-agent work." },
        ],
      },
      {
        id: "requirements",
        title: "Nine rules, all traceable",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I turned the findings into nine design requirements. Each one points back to a quote or a survey result rather than a hunch. The ones that shaped the product most:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Approve before, not after", body: "Every consequential action needs a yes before it happens. \"If you're going to change these, we have to be aware.\" (P01)" },
              { title: "Low-risk can just happen", body: "\"Changing a time from 10pm to 10:15, that is not that deep. You don't have to alert me.\" (P01)" },
              { title: "Every action shows its sources", body: "\"I will give it more trust if it gives me an answer and it explains to me why that is the answer.\" (P01)" },
              { title: "You choose what data it gets", body: "\"I would only want the AI to be able to access what I give to it.\" (P05)" },
              { title: "Agents don't talk behind your back", body: "Agent-to-agent exchanges need to be visible and approved, never left to run in the background." },
            ],
          },
          { type: "media", media: figure("ia", 2400 / 1158, "Information architecture", "#FFFFFF"), caption: "Five sections: Home, Agents, Activity Log, Permissions, Settings." },
        ],
      },
      {
        id: "iterations",
        title: "Three rounds of testing",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I tested at low, mid and high fidelity with 14 people in total, changing the design after each round.",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Low fidelity: did it connect?", body: "One tester asked, \"Is there a way for me to know that Slack has connected?\" I added a confirmation toast. \"Approve\" was also vague, so it became \"Send email\"." },
              { title: "Mid fidelity: review before it's added", body: "Three of four testers independently wanted AI-inferred tasks to wait for approval before going on their board. I added that step." },
              { title: "High fidelity: one word mattered", body: "The first tester was confused that a task had \"already been added\" to the board. I changed \"added\" to \"drafted\" mid-round, and the next testers weren't confused." },
            ],
          },
          {
            type: "grid",
            items: [
              { media: figure("lofi", 1193 / 656, "Low-fidelity screens"), caption: "Low fidelity" },
              { media: figure("midfi", 881 / 607, "Mid-fidelity screens"), caption: "Mid fidelity" },
            ],
          },
          { type: "media", media: figure("hifi", 1199 / 677, "High-fidelity prototype"), caption: "High fidelity" },
          {
            type: "quote",
            text: "I like the fact that I can review before anything happens… that's control over it.",
            by: "High-fidelity test participant",
          },
        ],
      },
      {
        id: "product",
        title: "The product",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The final prototype covers the full loop: set up, see what needs you, approve with the reasons in view, check the record, and decide what each tool is allowed to do.",
            ],
          },
          { type: "media", media: clip("approval", "Approving an AI-drafted email"), caption: "Approving a drafted reply, with the email and calendar it was based on." },
          {
            type: "grid",
            items: [
              { media: clip("summary", "Meeting summary"), caption: "Attributed meeting summary" },
              { media: clip("inferred-task", "Inferred task review"), caption: "Approving an inferred task" },
            ],
          },
          { type: "media", media: figure("design-system", 1142 / 609, "Design system"), caption: "IBM Plex Sans on an eight-step scale, yellow and green colour ramps with WCAG ratings, and core components." },
        ],
      },
      {
        id: "results",
        title: "What testing showed",
        blocks: [
          {
            type: "stats",
            items: [
              { value: "90.6", label: "mean SUS score at mid fidelity" },
              { value: "27/30", label: "tasks passed at high fidelity" },
              { value: "5/5", label: "changed Slack permissions without help" },
            ],
          },
          {
            type: "text",
            paragraphs: [
              "People linked their trust to seeing the reasoning and approving it, not just to the interface being simple. That was the main thing I wanted to learn, and it held up.",
              "I'm also careful about what the numbers don't show. The samples were small and drawn from my own networks. Testing was one session each, so it says nothing about trust over months. On one task, three of five people only just cleared the pass mark. And the \"drafted\" fix didn't work for everyone: one later tester was still unsure.",
            ],
          },
        ],
      },
      {
        id: "next",
        title: "The question I couldn't close",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The biggest finding is the one I didn't get to design. People were most uneasy about agents dealing with other agents, but I never built or tested an interface for it. Socius narrows the double black box for your own agent. It doesn't close it for the conversation between yours and someone else's.",
              "Next, I'd design and test a reviewable agent-to-agent exchange, test with real teams rather than individuals, add the missing \"changes saved\" confirmation, and run a longer study to see whether trust holds up over weeks of real use.",
            ],
          },
          {
            type: "points",
            heading: "What I'm taking with me",
            items: [
              { title: "Trust comes from reasons, not volume", body: "One clear reason with its sources did more than any amount of detail." },
              { title: "Scale control to the stakes", body: "Asking permission for everything is as broken as asking for nothing." },
              { title: "Words are interface", body: "Changing one word, \"added\" to \"drafted\", fixed most of the confusion in a whole flow." },
            ],
          },
        ],
      },
    ],
  },
};
