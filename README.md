# ForgeUp Landing

Marketing site for ForgeUp — AI strength-training coach, featuring Milo. **Iron sharpens iron.**

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4 (PostCSS plugin)
- TypeScript 5
- Deploys on Vercel

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

```bash
npx vercel --prod
```

Project is linked via `.vercel/`. Custom domain: `forgeup.app`.

## What's in here

- `/` — main landing (Nav, Hero, WhyLift, Differentiators, MiloDemo, AIScreenshots, SocialProof, Pricing, FAQ, FinalCTA, Footer)
- `/waitlist` — email capture form → `POST /api/waitlist`
- `/privacy`, `/terms` — stubs

## TODOs before public launch

- Replace App Store + Play Store URLs in `components/Nav.tsx`
- Swap AI screenshot mockups in `components/AIScreenshots.tsx` for real PNGs
- Wire `/api/waitlist` to ConvertKit / Resend / Loops
- Fill in real Privacy + Terms copy
- Fill in real testimonials once public beta opens
