# Hibiscus Executive Suites - Headless WordPress + Astro Build

## Project Overview
Real client project replicating https://hornetbear.com/hibiscus/ as a headless WordPress + Astro + Vercel stack.

Client: Hibiscus Executive Suites, executive office space business in Sarasota, Florida.

## Tech Stack
- Astro (latest) for the frontend
- Tailwind CSS via Astro v4 Vite plugin integration
- Plain HTML/CSS, no React or Vue
- Headless WordPress at https://hornetbear.com/hibiscuexessuites/
- WPGraphQL for data fetching
- Vercel for deployment (later)

## Reference Design
images/reference-design.png is the source of truth. Match it precisely.

## Design System

### Colors
- Background cream: #FAF8F4
- Header peach gradient: #F5C8B8 → #FAE4DA → #FFFFFF
- Coral accent: #E8A89A (Work Connect Create section)
- Dark navy (nav, footer): #1B3A4B
- Charcoal text: #2A2A2A
- Body gray: #4A4A4A
- Muted gray: #8A8A8A
- Card light gray: #F5F5F5
- White: #FFFFFF
- Walkthrough gradient: pink/blue/green/purple radial blend

### Typography
- Sans-serif font family (Lato or Inter)
- Headings: 38-44px desktop, 28-32px mobile, weight 700-800
- Section labels: 14-16px uppercase, letter-spacing 0.05em
- Body: 15-16px, line-height 1.5-1.6
- Brand name: uppercase, letter-spacing 0.1em

### Layout
- Container max-width: 1200-1280px
- Section vertical padding: 80-100px
- Card border radius: 12-16px (small), 20-24px (large)
- Grid gaps: 16-24px
- Mobile-first responsive

## Build Approach (strict order, do not skip ahead)

Phase 1: Foundation - Header, Footer, basic Layout
Phase 2: Quick Action Bar (4 icon cards)
Phase 3: Hero Intro paragraph
Phase 4: Audience Grid (6 photo cards)
Phase 5: Core Services Carousel
Phase 6: Sarasota Waterfront split section
Phase 7: Benefits Grid (5 rounded cards)
Phase 8: Walkthrough CTA (gradient section)
Phase 9: Workplace Features (4 icon pills)
Phase 10: Testimonials with video play overlays
Phase 11: Closing coral section "Work, Connect, Create"
Phase 12: Footer with 4 columns

After each phase, verify match against reference before proceeding.

## Content Writing Rules
- No em dashes anywhere
- Banned words: leverage, utilize, comprehensive, robust, streamline, crucial, pivotal, multifaceted, nuanced, landscape, ecosystem, furthermore, additionally, therefore, however
- Use contractions, mix sentence lengths, active voice
- US English (Sarasota client)
- Phone format: (XXX) XXX-XXXX
- Currency: USD

## Technical Rules
- ACF URL fields use 'type' => 'text' not 'url'
- Use pages(where: {name: $slug}) GraphQL pattern, not pageBy(uri:)
- Always use environment variable WP_GRAPHQL_URL
- All images live in public/images/ in Astro
- Reference images as /images/filename.ext

## Things to Never Do
- Don't paraphrase original copy without approval
- Don't add features not in reference design
- Don't use Unsplash placeholder images
- Don't generate fake testimonial content
- Don't change design system without confirmation
- Don't jump build phases out of order

## Commands
- npm run dev: local preview at localhost:4321
- git add . / commit / push: deploy to Vercel
- /init: regenerate CLAUDE.md baseline
