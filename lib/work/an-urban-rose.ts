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
    "A small organic T-shirt brand sells mostly at pop-up events. We designed what happens when a shopper scans the tag: they try the tee on with AI, see why it costs £18, and find out where the cotton came from.",
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
      "An Urban Rose makes organic cotton tees and sells most of them at pop-up events. We designed a mobile web experience that opens when a shopper scans the QR code on the hang tag, with no app to download.",
    problem:
      "Lots of people say they care about sustainable fashion and then buy the £8 tee anyway. At a pop-up they decide quickly, can't try anything on, and have heard so many green claims that they've stopped believing them. We needed to get them past that without lecturing them.",
    outcome:
      "The prototype scored 81.5 on the System Usability Scale in moderated testing, which is a grade A. People found the try-on easily, said the claims felt believable, and several explained the £18 price back to us without being asked.",
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
      text: "Everything starts from the QR code on the hang tag. It opens in the phone's browser, because nobody at a pop-up is going to download an app.",
    },
    {
      type: "media",
      media: clip("landing", "Landing page after scanning the tag", 16 / 9),
      caption: "Scanning takes you straight to the brand and the try-on.",
    },
    {
      type: "statement",
      label: "Try it on",
      text: "Fit was the first thing people worried about. You pick a colour, take a photo, and AI shows you wearing the tee.",
    },
    {
      type: "grid",
      items: [
        { media: clip("tryon", "Choosing a tee colour in the try-on"), caption: "Trying colours on with the live camera." },
        { media: clip("ai-shots", "AI generating shots of the shopper wearing the tee"), caption: "AI puts you in the tee in a few different scenes." },
      ],
    },
    {
      type: "statement",
      label: "Why £18?",
      text: "Price was the biggest objection in our research, so we put the tee next to a typical £8 high-street one and compared them.",
    },
    {
      type: "media",
      media: clip("compare", "Comparison of fast fashion and An Urban Rose", 16 / 9),
      caption: "Cost per wear, how long it lasts and fabric quality, side by side.",
    },
    {
      type: "statement",
      label: "The story",
      text: "Where the cotton comes from, how it's made and who it supports, told mostly in pictures.",
    },
    {
      type: "grid",
      items: [
        { media: clip("story", "Product story carousel"), caption: "The product story on your phone." },
        { media: clip("ar-story", "Product story playing in AR on the pop-up table"), caption: "The same story playing in AR on the display table at the pop-up." },
      ],
    },
    {
      type: "statement",
      label: "What didn't work",
      text: "Our first try-on had people holding their phone at arm's length. We tested it early, saw it wasn't going to work, and switched to AI.",
    },
    {
      type: "media",
      media: figure("explorations", 1468 / 1186, "Sprint 1 try-on explorations"),
      caption: "Sprint 1: the original AR try-on using the front camera.",
    },
    {
      type: "media",
      media: figure("merged-flow", 1682 / 1046, "Sprint 2 merged AI and AR flow"),
      caption: "Sprint 2: the flow we tested, from scanning the tag to the story.",
    },
    {
      type: "statement",
      label: "Design system",
      text: "I set up tokens for colour, type and grid, and wrote a spec with every measurement and state so a developer could build it.",
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
      "A team of six, twelve weeks, and one question: how do you get someone at a pop-up to trust a sustainable brand enough to pay more?",
    chapters: [
      {
        id: "brief",
        title: "The £8 T-shirt problem",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "An Urban Rose makes organic cotton tees and sells most of them at pop-up events. When we interviewed Marion, the founder, she told us how those sales usually happen. Visitors, roughly 25 to 50, decide quickly, based on the colours, how soft the fabric feels and how she talks about where it comes from.",
              "That works when Marion is there to tell the story. Our job was the gap between people saying they care about sustainable fashion and actually buying it. Plenty of people say they'd pay more for organic, then pick the £8 high-street tee over the £18 one. There's a name for it in the research, the value-action gap, and we saw it all over our interviews.",
              "This was a group project for the Digital Studio Practice module of my MSc at Kingston. The brief asked for a digital experience built on radical transparency, a look that felt urban rather than the usual beige eco style, and giving people more say over what happens to the product over its life.",
            ],
          },
          {
            type: "points",
            heading: "What I did",
            items: [
              { title: "UI designer in a team of six", body: "Alongside a project manager, three researchers and a UX designer." },
              { title: "Early explorations", body: "Sketched the first try-on concepts with our project manager." },
              { title: "Try-on camera view", body: "Designed the mid-fidelity camera screen with the colour picker and size dropdown." },
              { title: "High-fidelity UI", body: "Designed the final interface." },
              { title: "Design system and spec", body: "Set up Figma tokens and wrote the developer handoff spec." },
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
              "Our researchers ran nine interviews in November as well as the one with Marion. When we coded them, five reasons people don't buy sustainable clothes kept coming up:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Fit", body: "People weren't sure how the tee would fit or look on them." },
              { title: "Trust", body: "Shoppers were sceptical of sustainability claims they had no way to check." },
              { title: "Price", body: "By far the most common one, with 23 coded mentions of high prices and no clear reason for them." },
              { title: "Awareness", body: "Marion had noticed customers don't know much about certifications unless they're shown in a really obvious way." },
              { title: "Style", body: "Some people worried sustainable clothes wouldn't match how they dress." },
            ],
          },
        ],
      },
      {
        id: "bets",
        title: "What we bet on",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "We worked in a Lean UX way, so each barrier became a hypothesis we could test with as little as possible. Three of them made it into the prototype:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "Seeing it on yourself will help with fit", body: "If people can see the tee on themselves, they'll feel more confident buying it. We wanted at least 4 out of 5 for finding the try-on and feeling confident using it." },
              { title: "Showing the supply chain will build trust", body: "If we show the sourcing, wages and certifications visually, the claims will feel real rather than like greenwashing." },
              { title: "A comparison will explain the price", body: "If people see the tee next to fast fashion on cost per wear, lifespan and impact, they'll understand the price on their own." },
            ],
          },
          {
            type: "text",
            paragraphs: [
              "We had a fourth one, that customer testimonials would make people more confident, but we ran out of time to build it into the prototype we tested.",
            ],
          },
        ],
      },
      {
        id: "sprint-1",
        title: "The first try-on didn't work",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Our first idea was a straightforward AR try-on. I designed the mid-fidelity camera view: a virtual tee over the front camera, a switch between tees and tote bags, and pickers for size and colour.",
              "Before we spent time on high fidelity, three of us tested it on ourselves, and two problems showed up straight away. To see the whole tee you had to hold your phone at arm's length, and even then the camera sat at chest height. And nobody saw why you'd want to try on a tote bag. You can see what a bag looks like without AR.",
              "When we tried a mirror-style view instead, everyone rated it 4 or 5 out of 5 for feeling natural. So we moved to a mix: AR for flicking through colours, then AI to generate photos of you wearing the tee. The tote bag was dropped.",
            ],
          },
          {
            type: "media",
            media: figure("explorations", 1468 / 1186, "Sprint 1 try-on explorations"),
            caption: "Our first explorations with the front camera.",
          },
          {
            type: "text",
            paragraphs: [
              "Testing on ourselves is obviously biased, and we knew that. But it caught a problem that would have cost us a lot more to find after building everything properly.",
            ],
          },
        ],
      },
      {
        id: "sprint-2",
        title: "Designing the high-fidelity version",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Once we'd settled the direction, I designed the high-fidelity interface. The brief asked for something more urban than the usual eco look, so I kept the UI quiet and let the photography and brand carry it. Over the sprint the screens went from text-heavy to mostly images and icons with short lines of copy, because people at a pop-up aren't going to read paragraphs.",
              "The flow goes from the QR code on the tag, to the try-on, the AI photos, the price comparison and then the product story. At the pop-up, the story also plays in AR on the display table.",
            ],
          },
          {
            type: "grid",
            items: [
              { media: clip("tryon", "Choosing a tee colour in the try-on"), caption: "Try-on and colours" },
              { media: clip("ai-shots", "AI generating shots of the shopper wearing the tee"), caption: "AI photos" },
            ],
          },
          {
            type: "grid",
            items: [
              { media: clip("compare", "Comparison of fast fashion and An Urban Rose"), caption: "Why the higher price?" },
              { media: clip("story", "Product story carousel"), caption: "The product story" },
            ],
          },
          {
            type: "media",
            media: figure("merged-flow", 1682 / 1046, "Sprint 2 merged AI and AR flow"),
            caption: "The full flow.",
          },
        ],
      },
      {
        id: "testing",
        title: "What testing showed us",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "In January we ran six moderated usability tests over Teams, about 30 minutes each. People talked us through three tasks: try the tee on, work out why it costs £18 rather than £8, and decide whether it's worth it. Then they filled in a questionnaire.",
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
              "Five of the six described the design as clean and modern, and people explained the price to us without being prompted. All three bets held up. But testing also found things that were broken:",
            ],
          },
          {
            type: "points",
            items: [
              { title: "People got stuck in the story", body: "Two of the six couldn't get out of the story carousel and kept tapping a back button that didn't work. We marked it as critical." },
              { title: "It was slow on older phones", body: "Four people waited 3 to 8 seconds for the AR to load on phones over two years old. One gave up on the try-on." },
              { title: "The camera icon was misread", body: "One person thought it meant take a photo, not start the try-on." },
              { title: "Two buttons failed contrast", body: "Our own check found two buttons that didn't meet WCAG AA." },
              { title: "People wanted pounds, not percentages", body: "Two people asked for an actual breakdown, like £2.50 for labour and £3 for materials." },
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
              "Between 5 and 11 January we fixed what we could. We compressed the AR and image files to cut loading times, put the try-on button in the same place on every screen, and fixed the back button.",
            ],
          },
          {
            type: "media",
            media: figure("key-states", 1686 / 774, "Key interface states"),
            caption: "Key screens: browsing colours in AR, the AI try-on with the comparison, and the story.",
          },
        ],
      },
      {
        id: "system",
        title: "Making it buildable",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "To keep the screens consistent and give a developer something to work from, I set up Figma tokens for colour, typography, grids and component properties. I also wrote a design spec with exact measurements, spacing rules and every state each component can be in.",
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
        id: "next",
        title: "What I'd do next",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "The results were good, but I don't want to oversell them. We tested with six people, all aged 26 to 34 and already interested in sustainable fashion, so it was a small and fairly friendly group. Most of them had newer phones. Our Figma prototype faked the AR with still images, which hid the lag and tracking problems a real build would have. And a Teams call is nothing like standing at a pop-up with the music on and the fabric in your hands.",
              "If we kept going, I'd test with a wider range of people and phones, build the testimonials we never got to, and properly test the care, repair and recycling features that didn't make it into Sprint 2.",
              "The thing I'll remember most is Participant 5's question. Showing certifications and real sourcing helped, but people still wanted proof they could check, and real numbers in pounds would have done more than percentages did.",
            ],
          },
        ],
      },
    ],
  },
};
