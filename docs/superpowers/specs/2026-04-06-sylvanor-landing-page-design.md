# Sylvanor — Landing Page Design

## Overview

A static landing page for selling the children's fantasy book "Sylvanor" in PDF format. The page serves as a beautiful showcase of the book with purchase links to Gumroad. Bilingual (CZ/EN).

## Tech Stack

- **HTML/CSS/JS** — single static page, no frameworks
- **Hosting:** GitHub Pages (free, HTTPS included)
- **Sales platform:** Gumroad (handles payments, PDF delivery, taxes)
- **Domain:** `sylvanor.github.io` (free) or custom domain later (~250 CZK/year)

## Visual Identity

- **Color palette:** Dark forest greens (#050f0a, #0a2e1a, #1a4a2e) with gold accents (#c8a96e)
- **Typography:** Serif font for headings (fairy-tale feel), clean sans-serif for body text
- **Imagery:** Author's existing illustrations — forest emblem (circular tree labyrinth), mystical forest path with bioluminescent light
- **Atmosphere:** Enchanted, mysterious, calm — matching the book's philosophy of slowing down and listening
- **Animations:** Subtle fade-in on scroll for sections, no heavy animations

## Bilingual Support

- CZ/EN toggle in the navigation bar
- All text exists in both languages in the HTML
- JavaScript toggles visibility based on selected language
- Language preference saved in localStorage
- Default: Czech

## Page Structure

### 1. Navigation Bar
- Fixed at top on scroll
- Logo/name "Sylvanor" on the left
- Section links: O knize | Svět | Bytosti | Ukázka | Koupit | O autorce
- CZ/EN language toggle on the right
- Semi-transparent dark background, becomes solid on scroll

### 2. Hero Section
- Full-viewport height
- Background: mystical forest image (the existing dark forest path photo)
- Centered content: book title "SYLVANOR" in large gold serif
- Subtitle: „Les, který ukazuje cesty těm, kteří umí naslouchat"
- CTA button: "Koupit PDF →" linking to buy section
- Subtle scroll indicator at bottom

### 3. O knize (About the Book)
- 2–3 paragraphs describing the story
- What Sylvanor is — a magical, ever-changing forest labyrinth
- Who the book is for — children (and adults) who want to learn to listen
- What the reader learns — patience, calm, inner wisdom
- Accompanied by the forest emblem illustration

### 4. Svět Beastorie (The World of Beastorie)
- Grid of 7 cards, one per realm:
  - Sylvanor — Forest of listening
  - Olyrion — Land of deep waters
  - Pyrrath — Fiery plains
  - Noxmar — Realm of shadows and dreams
  - Sahariel — Golden sands
  - Aurethys — Land of wind and sky
  - Drakemount — Mountains of strength
- Each card: name, short description (1–2 sentences), thematic color accent
- Responsive: 3 columns on desktop, 2 on tablet, 1 on mobile

### 5. Bytosti Sylvanoru (Creatures of Sylvanor)
- 3 featured creatures:
  - **Tarnen** — Guardian of the threshold (wolf/stag/eagle/dragon)
  - **Stínolísek** — Guide between steps (owl/fox/deer)
  - **Lurein** — Weaver (snail/snake/swan)
- Each: name, role, ancestor spirits, short description
- If illustrations are available, display them; otherwise use thematic decorative elements

### 6. Ukázka z knihy (Book Preview)
- A short excerpt from the book text
- Styled as a quote/reading experience — larger text, generous spacing, decorative borders
- Gives the reader a taste of the writing style and atmosphere

### 7. Koupit (Buy)
- Prominent section with distinct background (darker or gold-accented)
- Price display
- Two purchase buttons: "Koupit česky (PDF)" and "Buy in English (PDF)" → Gumroad links
- Additional link: "Také na Google Books" for those who prefer that platform
- Brief note about what they get (PDF, instant download via Gumroad)

### 8. O autorce (About the Author)
- Short bio of Lenka Vavrisova
- Why she wrote the book
- Optional: photo placeholder

### 9. Patička (Footer)
- © 2026 Sylvanor / Lenka Vavrisova
- Contact email
- Social media links (if applicable)

## Responsive Design

- **Desktop (>1024px):** Full layout, side-by-side cards, large hero
- **Tablet (768–1024px):** 2-column grids, slightly smaller hero
- **Mobile (<768px):** Single column, hamburger nav menu, stacked cards

## File Structure

```
Sylvanor/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Language toggle, scroll animations, nav behavior
├── images/             # Book illustrations, hero background, emblem
├── docs/               # Design docs
└── README.md           # GitHub Pages setup instructions
```

## External Dependencies

- **Google Fonts** — 1 serif + 1 sans-serif font (loaded via CDN)
- **No JavaScript frameworks** — vanilla JS only
- **No build tools** — edit HTML/CSS/JS directly

## Out of Scope

- Email collection / newsletter signup
- Blog or news section
- Shopping cart or direct payment processing
- Analytics (can be added later if needed)
- SEO optimization beyond basic meta tags
