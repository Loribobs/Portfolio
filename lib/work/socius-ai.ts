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
    "A desktop app that shows you what your AI agents have done in Slack, Gmail and Atlassian, why they did it, and holds anything that goes out in your name until you approve it.",
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
      "Socius sits on top of the tools people already work in. For every action an AI agent takes, it shows what happened and which messages or files it was based on. Anything that would reach another person waits for your approval.",
    problem:
      "AI agents are already summarising meetings, replying to emails and moving tasks around for people at work, mostly where nobody can see. If one gets something wrong, the person whose name is on it often can't tell what happened or why.",
    outcome:
      "The prototype scored 90.6 on the System Usability Scale, and people passed 27 of 30 tasks in the final round. When I asked why they trusted it, most pointed to the same thing: they could see the AI's reasoning and had to say yes before it acted.",
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
      label: "Setting expectations",
      text: "Before you connect any tools, Socius tells you three things it will always do. You can't switch them off, because they're how the app works.",
    },
    {
      type: "media",
      media: clip("onboarding", "Onboarding: the three rules, then connecting Slack"),
      caption: "Onboarding, then connecting Slack.",
    },
    {
      type: "statement",
      label: "Approving a draft",
      text: "Your agent can write the reply, but it doesn't send anything until you've looked at it.",
    },
    {
      type: "media",
      media: clip("approval", "Approving an AI-drafted email"),
      caption: "Reviewing a drafted reply to Kenneth, with the email and calendar it was based on.",
    },
    {
      type: "statement",
      label: "Meeting summaries",
      text: "People told me they wanted to know who said what, so every decision in a summary is credited and links back to the transcript.",
    },
    {
      type: "media",
      media: clip("summary", "Meeting summary with decisions and transcript links"),
      caption: "Decisions credited to the person who made them, with a link to the transcript.",
    },
    {
      type: "statement",
      label: "The activity log",
      text: "If something goes wrong later, you can search the log and see exactly what your agents did and why.",
    },
    {
      type: "grid",
      items: [
        { media: clip("activity-log", "Activity log"), caption: "Every action, the reason for it, and whether you approved it." },
        { media: clip("inferred-task", "Reviewing a task the AI inferred from a meeting"), caption: "Tasks picked up from a meeting wait for you before they go on the board." },
      ],
    },
    {
      type: "statement",
      label: "Permissions",
      text: "You choose what Socius can do in each tool, one ability at a time.",
    },
    {
      type: "media",
      media: clip("permissions", "Permissions for Slack, Gmail and Atlassian"),
      caption: "Turning individual permissions on and off for Slack, Gmail and Atlassian.",
    },
  ],
  full: {
    title: "Opening the double black box",
    standfirst:
      "AI agents are starting to do work in our name, mostly out of sight. This was my attempt to design a way to see what they're doing and stop them before they act.",
    chapters: [
      {
        id: "problem",
        title: "Work done in your name",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "A lot of AI at work no longer waits to be asked. It summarises your meetings, drafts your replies and reorganises your tasks. Microsoft's 2026 Work Trend Index said the number of active AI agents in Microsoft 365 grew fifteen times in a year.",
              "The trouble is that most of this happens where nobody can see it. One paper I read called it a double black box: you can't see how a colleague used AI, and you can't see how the AI got to its answer either. As agents start dealing with other agents, there's even less of a person involved.",
              "Socius was my MSc major project, and I worked on it alone, from the literature review and research through to design and testing.",
            ],
          },
          { type: "media", media: figure("problem-statement", 2400 / 2038, "Problem statement") },
        ],
      },
      {
        id: "tension",
        title: "Why showing everything doesn't work",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "My first instinct was to show everything the AI did. The research talked me out of it. People who watch an algorithm make one mistake tend to stop trusting it, even when it's more accurate than they are. And dumping detail or confidence scores on people tends to overwhelm them rather than help.",
              "So the question changed. It wasn't how much to show, but which explanations actually help, when to show them, and how much control to give back.",
            ],
          },
        ],
      },
      {
        id: "research",
        title: "Talking to people who use AI at work",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I interviewed eight people who use AI at work, including software developers, lawyers, a product designer and a project control engineer, and ran a survey that got 16 responses. I coded the interviews in Miro, and five themes came out of it.",
            ],
          },
          { type: "media", media: figure("affinity-map", 1, "Affinity map from the interviews"), caption: "Grouping interview notes in Miro." },
          {
            type: "points",
            items: [
              { title: "How much oversight depends on the stakes", body: "Moving a meeting by fifteen minutes was fine. Anything involving money, deadlines or another person needed a yes first. 11 of 16 survey respondents strongly agreed they want to approve anything sent for them." },
              { title: "Agents talking to agents worried people most", body: "It was the lowest-scoring question in the survey and the strongest objection in the interviews. One respondent said nothing would make them comfortable with it." },
              { title: "A reason mattered more than a score", body: "People trusted an action more when it came with a simple reason and showed what it was based on." },
              { title: "Labels, but not on everything", body: "A text label was the most popular way to mark AI work (11 of 16), but people warned that labelling everything makes the label meaningless." },
              { title: "Undo came first", body: "After an AI mistake, most people wanted to undo it straight away (8 of 16). Being told about it afterwards came well behind." },
            ],
          },
          {
            type: "quote",
            text: "I would say no, because there's no human control at both ends of the conversation.",
            by: "P08, on agents talking to agents",
          },
          { type: "media", media: figure("empathy-map", 2400 / 1553, "Empathy map"), caption: "Empathy map from the interviews and survey." },
          { type: "media", media: figure("persona", 2400 / 957, "Persona: James Hill"), caption: "James, the persona I built from the research." },
        ],
      },
      {
        id: "landscape",
        title: "What other tools do",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I compared Microsoft 365 Copilot, Perplexity Computer and Claude Cowork. Copilot is good at pointing to the exact file or message an answer came from, and both Copilot and Perplexity pause before some actions. None of the three gives an employee real-time visibility or control when their agent deals with someone else's. That was the gap I decided to focus on.",
            ],
          },
          { type: "media", media: figure("competitive", 1203 / 367, "Competitive analysis", "#FFFFFF"), caption: "How three AI agent products handle transparency, approval and agent-to-agent work." },
        ],
      },
      {
        id: "requirements",
        title: "Turning research into rules",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I turned the findings into nine design requirements, each tied back to a quote or a survey result. These are the ones that shaped the product most:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Ask before, not after", body: "Anything with real consequences needs approval before it happens. \"If you're going to change these, we have to be aware.\" (P01)" },
              { title: "Small things can just happen", body: "\"Changing a time from 10pm to 10:15, that is not that deep. You don't have to alert me.\" (P01)" },
              { title: "Show where it came from", body: "\"I will give it more trust if it gives me an answer and it explains to me why that is the answer.\" (P01)" },
              { title: "Let people choose what it can access", body: "\"I would only want the AI to be able to access what I give to it.\" (P05)" },
              { title: "No agent-to-agent conversations in the background", body: "These need to be visible and approved by a person." },
            ],
          },
          { type: "media", media: figure("ia", 2400 / 1158, "Information architecture", "#FFFFFF"), caption: "The five sections: Home, Agents, Activity Log, Permissions and Settings." },
        ],
      },
      {
        id: "iterations",
        title: "Three rounds of testing",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "I tested at low, mid and high fidelity with 14 people in total and changed the design after each round. A few of the changes:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Low fidelity", body: "One person asked, \"Is there a way for me to know that Slack has connected?\" I added a confirmation message. The Approve button was vague too, so it became Send email." },
              { title: "Mid fidelity", body: "Three of four people said, without being prompted, that tasks the AI picked up should wait for them before going on their board. I added that step." },
              { title: "High fidelity", body: "The first person was confused that a task had \"already been added\" to their board. I changed \"added\" to \"drafted\" between sessions, and the next two people weren't confused." },
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
        title: "The final prototype",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The final prototype covers setting up, seeing what needs your attention, approving actions with the reasons in view, checking the log, and deciding what each tool is allowed to do.",
            ],
          },
          { type: "media", media: clip("approval", "Approving an AI-drafted email"), caption: "Approving a drafted reply, with the email and calendar it was based on." },
          {
            type: "grid",
            items: [
              { media: clip("summary", "Meeting summary"), caption: "Meeting summary" },
              { media: clip("inferred-task", "Inferred task review"), caption: "Reviewing a task from a meeting" },
            ],
          },
          { type: "media", media: figure("design-system", 1142 / 609, "Design system"), caption: "IBM Plex Sans on an eight-step type scale, yellow and green colour ramps with their WCAG ratings, and the core components." },
        ],
      },
      {
        id: "results",
        title: "How it tested",
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
              "What I most wanted to know was whether people would trust it, and why. They mostly put it down to seeing the reasoning and having to approve things, rather than the interface being simple, which is what I'd hoped.",
              "I'm careful about what the numbers can't tell me. The groups were small and came from my own networks. Each person used it once, so I can't say whether trust would hold up over months. On one task, three of five people only just passed. And the \"drafted\" wording didn't work for everyone: one later tester was still unsure.",
            ],
          },
        ],
      },
      {
        id: "next",
        title: "What I didn't get to",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The biggest finding is the one I never designed for. People were most uneasy about agents dealing with other agents, but I didn't build or test an interface for that. Socius helps you see what your own agent is doing. It doesn't yet help with the conversation between your agent and someone else's.",
              "If I carried on, I'd start there: design an agent-to-agent exchange you can review, and test it with a real team rather than one person at a time. I'd also add the \"changes saved\" message people asked for in Settings, and run a longer study to see whether the trust lasts.",
              "The most useful thing I learned was how much one word can matter. Changing \"added\" to \"drafted\" fixed most of the confusion in the task flow. It was a small change, but it showed me the copy needs testing as carefully as the layout.",
            ],
          },
        ],
      },
    ],
  },
};
