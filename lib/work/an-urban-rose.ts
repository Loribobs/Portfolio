import type { CaseStudy, Media } from "./types";

// Clips are cut from the team's demo video; figures come from the final report.
const dir = "/work/an-urban-rose";
const WHITE = "#FFFFFF";

/** Silent phone clip from the demo (800 x 1000 crop), centred on white */
const clip = (name: string, label: string, ratio = 1): Media => ({
  src: `${dir}/${name}.mp4`,
  poster: `${dir}/posters/${name}.jpg`,
  ratio,
  videoRatio: 832 / 1040,
  fit: "contain",
  bg: WHITE,
  label,
});

const figure = (name: string, ratio: number, label: string): Media => ({
  src: `${dir}/${name}.jpg`,
  ratio,
  label,
  bg: "#E6E6E6",
});

const slot = (label: string, ratio = 16 / 10): Media => ({ label, ratio, bg: "#1E1E21" });

export const anUrbanRose: CaseStudy = {
  slug: "an-urban-rose",
  tags: ["Sustainable fashion", "AI & AR", "Mobile web", "2025 – 2026"],
  title: "An Urban Rose",
  summary:
    "A phone experience for a sustainable fashion brand's pop-up shoppers. Scan the tag, try the tee on with AI, see why it costs £18, and follow the story behind the cotton.",
  facts: [
    { label: "Role", value: "UI Designer" },
    { label: "Team", value: "6: PM, 3 researchers, UX designer, UI designer" },
    { label: "Timeline", value: "12 weeks, Oct 2025 – Jan 2026" },
    { label: "Context", value: "MSc UX Design, Kingston University, for a real brand" },
  ],
  hero: {
    src: "/videos/an-urban-rose.mp4",
    poster: "/videos/posters/an-urban-rose.jpg",
    ratio: 16 / 9,
    videoRatio: 966 / 1080,
    fit: "contain",
    bg: "#EFF1F5",
    label: "Scanning the QR code on an An Urban Rose hang tag",
  },
  short: {
    product:
      "An Urban Rose is a small sustainable fashion brand that sells organic cotton tees at pop-up events. We designed a mobile web experience shoppers open from the QR code on the tag: try the tee on, compare it with fast fashion, and see where it came from.",
    problem:
      "People say they care about sustainable fashion, then buy the £8 tee anyway. At a pop-up, shoppers decide in seconds, aren't sure about fit, and have heard every green claim before. The job was to close that gap without guilt-tripping anyone.",
    outcome:
      "In moderated testing the prototype scored 81.5 on the System Usability Scale, a grade A. People found the try-on easily, trusted the sustainability claims, and explained the price in their own words without being prompted.",
  },
  stats: [
    { value: "81.5", label: "System Usability Scale score (grade A)" },
    { value: "4.6/5", label: "how easily people found the virtual try-on" },
    { value: "4.2/5", label: "felt they could verify the sustainability claims" },
    { value: "80%", label: "rated it simple to use (2 out of 5 for complexity)" },
  ],
  showcase: [
    {
      type: "statement",
      label: "Scan the tag",
      text: "It starts with the QR code on the hang tag. Nothing to download. The brand's story opens right in the browser.",
    },
    {
      type: "media",
      media: clip("landing", "Landing page after scanning the tag", 16 / 9),
      caption: "Scan, and you're straight into the brand and the try-on.",
    },
    {
      type: "statement",
      label: "Try it on",
      text: "Fit is the first worry at a pop-up. Pick a colour, snap a photo, and see yourself in the tee.",
    },
    {
      type: "grid",
      items: [
        { media: clip("tryon", "Choosing a tee colour in the try-on"), caption: "Browse colours on yourself, live." },
        { media: clip("ai-shots", "AI generating shots of the shopper wearing the tee"), caption: "AI puts you in the tee across a few different scenes." },
      ],
    },
    {
      type: "statement",
      label: "Why £18?",
      text: "Next to an £8 high-street tee, £18 needs a reason. So we put the two side by side.",
    },
    {
      type: "media",
      media: clip("compare", "Comparison of fast fashion and An Urban Rose", 16 / 9),
      caption: "Cost per wear, lifespan and quality: fast fashion against An Urban Rose.",
    },
    {
      type: "statement",
      label: "The story",
      text: "Organic cotton, fair wages, certified at every step. Told in pictures, not paragraphs.",
    },
    {
      type: "grid",
      items: [
        { media: clip("story", "Product story carousel"), caption: "Where the cotton comes from, how it's made, who it supports." },
        { media: clip("ar-story", "Product story playing in AR on the pop-up table"), caption: "At the pop-up, the same story plays in AR on the display table." },
      ],
    },
    {
      type: "statement",
      label: "How it got here",
      text: "The first try-on asked people to hold their phone at arm's length. We caught that early and moved to AI.",
    },
    {
      type: "media",
      media: figure("explorations", 1468 / 1186, "Sprint 1 try-on explorations"),
      caption: "Sprint 1: the first AR try-on, front camera at arm's length.",
    },
    {
      type: "media",
      media: figure("merged-flow", 1682 / 1046, "Sprint 2 merged AI and AR flow"),
      caption: "Sprint 2: the merged AI and AR flow, from scanning the tag to the story.",
    },
    {
      type: "statement",
      label: "Design system",
      text: "Tokens for colour, type and grid, and a spec with every measurement and state, ready for a developer.",
    },
    {
      type: "grid",
      items: [
        { media: slot("Design system: colour and type tokens (Figma)", 4 / 3) },
        { media: slot("Design system: components and states", 4 / 3) },
      ],
    },
  ],
  full: {
    title: "Making an £18 T-shirt make sense",
    standfirst:
      "How a team of six designed a try-on and storytelling experience to help pop-up shoppers trust a sustainable brand, and what testing taught us.",
    chapters: [
      {
        id: "brief",
        title: "The £8 T-shirt problem",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "An Urban Rose makes organic cotton tees and sells most of them at pop-up events. Its founder, Marion, told us how those sales happen: visitors aged roughly 25 to 50 decide quickly, based on the colours, how soft the fabric feels and how she talks about the brand's sustainability.",
              "That works when Marion is standing there. The harder question is what happens in the gap between caring and buying. Plenty of people say they want sustainable clothes, then pick the £8 high-street tee over the £18 organic one. Researchers call it the value-action gap.",
              "The brief, for our Digital Studio Practice module at Kingston, was to design a disruptive digital experience for circular fashion, built on three ideas: radical transparency, an urban look rather than the usual eco-minimalism, and giving people agency over the product's whole life.",
            ],
          },
          {
            type: "points",
            heading: "My part",
            items: [
              { title: "UI designer in a team of six", body: "Alongside a project manager, three researchers and a UX designer, over 12 weeks." },
              { title: "Early explorations", body: "Hand-drawn concepts with the project manager to map the core UI for the try-on." },
              { title: "Try-on camera view", body: "The mid-fidelity camera view, with the colour selector and size dropdown." },
              { title: "High-fidelity interface", body: "The final UI, designed to feel like the brand rather than a generic eco app." },
              { title: "Design system and spec", body: "Figma tokens for colour, typography, grid and components, plus a handoff spec with measurements, spacing and states." },
            ],
          },
        ],
      },
      {
        id: "research",
        title: "Why people walk away",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Our researchers ran nine interviews in November, alongside the interview with Marion. Five barriers kept coming up:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Fit uncertainty", body: "Shoppers aren't sure how a tee will fit or look on them." },
              { title: "Lack of trust", body: "Shoppers are sceptical of sustainability claims they can't check for themselves." },
              { title: "Unclear value", body: "The most common barrier by far: 23 coded mentions of high prices with no clear reason for them." },
              { title: "Low awareness", body: "Marion found customers don't know much about certifications unless they're shown in an obvious, visual way." },
              { title: "Style worries", body: "Worry that sustainable clothes won't match their style." },
            ],
          },
        ],
      },
      {
        id: "bets",
        title: "Three bets",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "We worked in a Lean UX way: turn each barrier into a hypothesis, build just enough to test it, learn and change course. Three bets made it into the prototype:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "A virtual try-on will ease fit doubts", body: "If people can see the tee on themselves, they'll feel confident enough to buy. Target: 4 out of 5 or better for finding it and feeling confident using it." },
              { title: "A product story will build trust", body: "Showing the sourcing, the wages and the certifications, visually, will make the claims believable instead of sounding like greenwashing." },
              { title: "A side-by-side comparison will justify the price", body: "Put the organic tee next to fast fashion on cost, lifespan and impact, and people will explain the price to themselves." },
            ],
          },
          {
            type: "text",
            paragraphs: [
              "A fourth bet, that customer testimonials would increase confidence, was planned but didn't make it into the tested prototype.",
            ],
          },
        ],
      },
      {
        id: "sprint-1",
        title: "Sprint 1: the arm's-length problem",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The first version was a straight AR try-on. I designed the mid-fidelity camera view: a virtual tee laid over the front camera, a switch between tees and tote bags, and selectors for size and colour.",
              "Before spending time on high fidelity, three of us tested it internally. It surfaced two problems quickly. To see the whole tee, you'd have to hold your phone out at arm's length, and the camera would end up at chest height instead of showing your torso. And nobody saw the point of trying on a tote bag. As one of us put it, you can see how a bag looks without AR.",
              "When we tried a mirror-style view instead, everyone rated it 4 or 5 out of 5 for feeling natural. That pushed us to a hybrid: keep AR for browsing colours, and use AI to generate photos of you wearing the tee, with no arm-stretching. The tote bag went.",
            ],
          },
          {
            type: "media",
            media: figure("explorations", 1468 / 1186, "Sprint 1 try-on explorations"),
            caption: "The first explorations: front camera, arm's length, tees and tote bags.",
          },
          {
            type: "quote",
            text: "Internal testing is biased, and we knew it. But it caught a problem that would have been expensive to discover after building everything in high fidelity.",
          },
        ],
      },
      {
        id: "sprint-2",
        title: "Sprint 2: designing the real thing",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "With the direction settled, I designed the high-fidelity interface. The brief asked us to move past eco-minimalism towards something more urban, so the UI stays quiet and lets the product photography and the brand do the talking. Over the sprint the screens moved from text-heavy to image- and icon-led, with short supporting copy.",
              "The flow runs from the QR code on the hang tag to the try-on, the AI shots, the price comparison and finally the product story, which also plays in AR on the display table at the pop-up.",
            ],
          },
          {
            type: "grid",
            items: [
              { media: clip("tryon", "Choosing a tee colour in the try-on"), caption: "Try-on and colours" },
              { media: clip("ai-shots", "AI generating shots of the shopper wearing the tee"), caption: "AI shots" },
            ],
          },
          {
            type: "grid",
            items: [
              { media: clip("compare", "Comparison of fast fashion and An Urban Rose"), caption: "Why the premium price?" },
              { media: clip("story", "Product story carousel"), caption: "The product story" },
            ],
          },
          {
            type: "media",
            media: figure("merged-flow", 1682 / 1046, "Sprint 2 merged AI and AR flow"),
            caption: "The full flow, end to end.",
          },
        ],
      },
      {
        id: "testing",
        title: "What testing told us",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "In January we ran six moderated usability tests over Teams, about 30 minutes each. Participants thought aloud through three tasks (try the tee on, understand why it costs £18 rather than £8, decide whether it's worth it) and then filled in a questionnaire.",
            ],
          },
          {
            type: "stats",
            items: [
              { value: "81.5", label: "System Usability Scale score (grade A)" },
              { value: "4.6/5", label: "finding the virtual try-on" },
              { value: "4.33/5", label: "felt it avoided greenwashing" },
              { value: "4.2/5", label: "clarity of the environmental data" },
            ],
          },
          {
            type: "text",
            paragraphs: [
              "Five of the six called the design clean and modern, and people explained the price without being prompted. All three bets held up. But the test also showed us what was broken:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "People got stuck in the story", body: "Two of six couldn't get out of the product story carousel and kept tapping a back button that didn't respond. We rated it critical." },
              { title: "It was slow on older phones", body: "Four of six waited 3 to 8 seconds for AR assets on phones more than two years old. One gave up on the try-on." },
              { title: "The camera icon was misread", body: "One participant read it as 'take a photo' rather than 'start the try-on'." },
              { title: "Two buttons failed contrast", body: "Our own review found two calls to action that didn't meet WCAG AA." },
              { title: "Percentages weren't enough", body: "Two of six wanted an actual breakdown in pounds, like £2.50 labour and £3 materials, not percentages." },
            ],
          },
          {
            type: "quote",
            text: "All brands say this stuff, how do I know it's true?",
            by: "Participant 5, during testing",
          },
          {
            type: "text",
            paragraphs: [
              "Between 5 and 11 January we fixed what we could: compressed the AR and image assets to cut load times, put the try-on button in the same centred position everywhere, and fixed the back navigation.",
            ],
          },
          {
            type: "media",
            media: figure("key-states", 1686 / 774, "Key interface states"),
            caption: "Key states: AR colour browsing, AI try-on with the comparison chart, and the story carousel.",
          },
        ],
      },
      {
        id: "system",
        title: "A system someone could build",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "To keep the screens consistent, and to make the design buildable, I set up a design system with Figma tokens for colour, typography, grid layouts and component properties. I also wrote a design specification for development, with exact measurements, spacing guidelines and every component state.",
            ],
          },
          {
            type: "grid",
            items: [
              { media: slot("Design system: colour and type tokens (Figma)", 4 / 3) },
              { media: slot("Design system: components and states", 4 / 3) },
            ],
          },
        ],
      },
      {
        id: "ai",
        title: "Where AI helped",
        blocks: [
          {
            type: "points",
            items: [
              { title: "In the product", body: "AI is the core of the try-on: instead of holding a phone at arm's length, shoppers get generated shots of themselves wearing the tee." },
              { title: "In the visuals", body: "We used Figma AI to create variations of models wearing An Urban Rose tees for the prototype screens, and Higgsfield AI for the storyboard illustrations in our final presentation." },
              { title: "In the process", body: "ChatGPT helped organise early research notes and draft follow-up questions for interviews and tests. The design decisions, analysis and findings were the team's own." },
            ],
          },
        ],
      },
      {
        id: "next",
        title: "What I'd do next",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The results are encouraging, but the limits are real. Six participants, all aged 26 to 34 and already interested in sustainable fashion, is a small and friendly sample. Most had newer phones. Our Figma prototype simulated AR with still images, so it hid the latency and tracking issues a real build would bring. And testing over Teams can't recreate the feel of a pop-up: the fabric, the music, other shoppers.",
              "Next, I'd test on a wider range of people and devices, build the testimonials we never got to, and properly test the end-of-life features (care, repair and recycling) that didn't make it into Sprint 2.",
            ],
          },
          {
            type: "points",
            heading: "What I'm taking with me",
            items: [
              { title: "Test the awkward part first", body: "A quick internal test killed the arm's-length try-on before we'd built it in high fidelity." },
              { title: "Show, don't claim", body: "Trust came from proof: certifications, sourcing and real numbers. One participant's 'how do I know it's true?' is a reminder that claims alone aren't enough." },
              { title: "Use numbers people can picture", body: "Percentages explained the price. Pounds and pence would have convinced people." },
            ],
          },
        ],
      },
    ],
  },
};
