# Development Documentation

## 1. Research summary (www.3cs.lk)
- **Business:** web design & development, e-commerce, Internet Payment Gateway (IPG), SEO, digital marketing (incl. PPC), social media marketing, website security, AI agents, photography/videography, cloud hosting and consulting.
- **Heritage:** founded 1997; Bestweb "Best Web Developer" every year 2010–2019; also Topweb, Manthan (South Asia), e-Swabhimani, SLT Zero One and Sri Lanka Tourism awards.
- **Specialism:** travel & leisure (80+ hotel/travel sites).
- **Clients:** blue chips, conglomerates, SMEs, institutions, NGOs (e.g. JAT Holdings, CIC Holdings, Carson Cumberbatch).
- **Audience:** corporate decision-makers and marketing/IT leads in Sri Lanka and internationally who want a trustworthy long-term technology partner.
- **Values:** Passion, Client Focus, Innovation, Integrity, Quality, Diversity.
- **Data caveat:** the live site shows animated counters (0+ when scraped) and says "24", "25+" and "28" years in different places. To avoid inventing or contradicting figures, this build only uses unambiguous facts: founded 1997, Bestweb 2010–2019, 80+ travel sites.

## 2. Visual direction – "Secure web core"
Dark ink background (#05070d) with cyan → blue → violet accents used sparingly: gradient text for one phrase per heading, glow only behind the hero and CTA, glass only on cards. Typography: Space Grotesk (display) + Inter (body). Large headlines, generous spacing, 56px grid texture masked to fade out.

**3D concept:** a faceted wireframe core (the platform at the heart of every project) with a solid emissive inner crystal, three orbiting rings whose nodes represent the service families (web, security, AI) and a sparse particle field. It tilts toward the pointer with damped easing.

## 3. Layout & components
Navbar → Hero → About (sticky headline + three "chapter" cards) → Services (bento grid, cursor spotlight) → Why 3CS (count-up stats, awards, values) → Work (generated art tiles linking to client sites) → CTA → Contact (+ mailto form) → Footer. All content lives in `src/data/content.ts`; `Reveal`, `Button`, `CountUp` and `Logo` are reused throughout.

## 4. Animation & performance
- Framer Motion: staggered hero entrance, `whileInView` reveals (once), hamburger morph, mobile menu, scroll parallax (`useScroll`/`useTransform`), count-up.
- Smooth scrolling via CSS `scroll-behavior` (no extra library).
- **Reduced motion:** `useReducedMotion` disables reveals/parallax/count-up; the 3D canvas switches to `frameloop="demand"` (one static frame); CSS media query shortens transitions.
- **Mobile:** fewer particles, DPR capped at 1.5, antialiasing off, smaller canvas.
- Three.js is lazy-loaded and split into its own chunk so text content paints first; an error boundary hides the canvas if WebGL is unavailable.

## 5. Accessibility & SEO
Semantic landmarks, skip link, labelled nav/buttons, `aria-expanded` menu, visible focus rings, labelled form fields, decorative elements `aria-hidden`, external links with `rel="noopener noreferrer"`. Meta description, Open Graph/Twitter tags, JSON-LD Organization data.

## 6. Known limitations / next steps
- The contact form opens the visitor's mail client (no backend). Swap `onSubmit` for a Vercel serverless function or form service for production.
- Add a 1200×630 PNG Open Graph image to `public/` and reference it in `index.html`.
- Client tiles use generated abstract art; replace with original screenshots/mockups if you have permission.

## 7. Pre-submission testing checklist
- [ ] `npm install` and `npm run build` finish with no errors or TypeScript warnings
- [ ] `npm run preview`: page loads, browser console has no errors
- [ ] Every nav link scrolls to the right section; logo scrolls to top; Escape closes mobile menu
- [ ] Hamburger animates, menu locks body scroll, links close it
- [ ] Hero 3D scene renders, follows the pointer, sections reveal on scroll
- [ ] All external links (client sites, WhatsApp, maps, 3cs.lk pages) open correctly
- [ ] Phone, email and WhatsApp links work on a phone
- [ ] Form validates required fields and opens the mail client
- [ ] Test widths 360, 390, 768, 1024, 1280, 1536 – no horizontal scroll
- [ ] OS "Reduce motion" on: no parallax/reveals, 3D static
- [ ] Keyboard only: tab order logical, focus visible, skip link works
- [ ] Lighthouse: Performance, Accessibility, SEO, Best Practices ≥ 90 (mobile)
- [ ] Deployed Vercel URL opens in an incognito window; URL added to your submission
