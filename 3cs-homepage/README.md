# 3CS Solutions – Homepage Redesign

A premium, dark, technology-focused homepage concept for [3CS Solutions](https://www.3cs.lk), built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and React Three Fiber.

## Requirements
Node.js 18.18+ (20 LTS recommended) and npm.

## Install
```bash
npm install
```

## Develop
```bash
npm run dev        # http://localhost:5173
npm run typecheck  # TypeScript check
```

## Production build
```bash
npm run build      # type-checks, then outputs ./dist
npm run preview    # serve the production build locally
```

## Deploy to Vercel
**Dashboard (easiest):** push this folder to a GitHub repo → vercel.com/new → import the repo. Vercel detects Vite; `vercel.json` already sets the build command (`npm run build`) and output (`dist`). Click Deploy, then copy the public URL.

**CLI:**
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Structure
```
src/
  components/   Navbar, Hero, HeroScene (R3F), About, Services, WhyUs, Work, CTA, Contact, Footer, Reveal, Button, CountUp, Logo
  data/content.ts   All copy, services, stats, clients and contact details (single source of truth)
  index.css     Tailwind layers + small design-system utilities
docs/DEVELOPMENT.md   Process, design decisions, implementation notes, pre-submission checklist
```

## Content & assets
All text facts come from the public 3cs.lk pages (services, history, awards, contact, client names). No images, video or icons were copied; visuals are CSS/SVG/Three.js generated in code. Icons are from Lucide.
