# Creature Images in Cards — Design Spec

## Summary

Replace emoji icons (🦌🦉🐌) in the "Bytosti Sylvanoru" section with actual PNG illustrations of each creature, displayed as circular images with a golden border and glow effect.

## Creatures

| Creature | Current Emoji | Image File |
|----------|--------------|------------|
| Tarnen | 🦌 | `images/tarnen.png` |
| Stínolísek | 🦉 | `images/stinolisek.png` |
| Lurein | 🐌 | `images/lurein.png` |

## Visual Specification

- **Shape:** Circle (border-radius: 50%)
- **Size:** 220px diameter on desktop
- **Border:** 2px solid `rgba(200,169,110,0.4)` (gold, semi-transparent)
- **Glow:** `box-shadow: 0 0 30px rgba(200,169,110,0.15)`
- **Background:** Transparent PNG — dark card background shows through
- **Responsive:** Scale down proportionally on smaller screens (e.g. 160px on mobile)

## HTML Changes

In `index.html`, within each `.creature-card`:
- Remove the `<div class="creature-icon">` containing the emoji span
- Replace with an `<img>` element:
  - `src="images/<creature>.png"`
  - `alt` text describing the creature (bilingual not needed — decorative context)
  - `loading="lazy"`
  - CSS class for circular styling (e.g. `.creature-img`)

## CSS Changes

In `css/style.css`:
- Add `.creature-img` class:
  - `width: 220px; height: 220px`
  - `border-radius: 50%`
  - `object-fit: cover`
  - `border: 2px solid rgba(200,169,110,0.4)`
  - `box-shadow: 0 0 30px rgba(200,169,110,0.15)`
- Mobile breakpoint (`max-width: 768px`): reduce to ~160px
- Remove or keep `.creature-icon` styling (it styled the emoji — no longer needed)

## What Stays the Same

- Card grid layout (3 columns desktop, 1 mobile)
- Card text content (name, role, ancestors, description)
- Hover effects on cards
- Bilingual CZ/EN toggle
- Fade-in scroll animations

## Prerequisites

User must place the 3 PNG files into the `images/` directory before implementation.
