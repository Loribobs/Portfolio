# Loromi — Portfolio

A code rebuild of the Framer site, made to deploy on Vercel.
Next.js (App Router) · plain CSS · no other dependencies.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Where things live

| What | File |
|---|---|
| All text (hero, projects, about, roles, contact links) | `lib/content.ts` |
| Every style, colour and breakpoint | `app/globals.css` |
| Page structure | `app/page.tsx` |
| Reel scroll animation | `components/ReelSection.tsx` |
| Nav + mobile menu | `components/Nav.tsx` |
| Video placeholders | `components/Placeholder.tsx` |

Breakpoints match Framer: Desktop ≥ 1440 · Tablet 810–1439 · Phone < 810.

## Still to do

- Swap placeholders for compressed videos (put files in `public/videos/`).
- Fill in real links in `lib/content.ts` (every `href: "#"`).
- Case study pages.

## Deploy to Vercel

1. Create a new GitHub repository and upload this folder (without `node_modules` and `.next`).
2. On vercel.com → **Add New → Project** → import the repository.
3. Leave every setting as detected (Framework: Next.js) → **Deploy**.

Every push to GitHub redeploys automatically.
