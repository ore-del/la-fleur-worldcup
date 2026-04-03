---
name: minimalist-ui
description: Clean editorial-style interfaces. Warm monochrome palette, typographic contrast, flat bento grids, muted pastels. No gradients, no heavy shadows.
---

# Premium Utilitarian Minimalism

## Absolute Negative Constraints (Banned)

- No Inter/Roboto/Open Sans as primary display font
- No Lucide/Feather icons (use Phosphor or Radix)
- No shadow-md/lg/xl
- No bright primary color backgrounds
- No gradients, neon, glassmorphism
- No rounded-full on containers (only pills/tags)
- No emojis in UI
- No Lorem Ipsum
- No AI clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"

## Typographic Architecture

- **UI:** SF Pro Display / Geist Sans / Switzer
- **Editorial:** Lyon Text / Newsreader / Playfair Display / Instrument Serif
- **Code:** Geist Mono / JetBrains Mono
- Body: #111111 or #2F3437
- Secondary: #787774

## Color Palette — Warm Monochrome + Spot Pastels

- Canvas: #FFFFFF or #F7F6F3
- Borders: #EAEAEA or rgba(0,0,0,0.06)
- Accent pastels only:
  - Pale Red: #FDEBEC
  - Pale Blue: #E1F3FE
  - Pale Green: #EDF3EC
  - Pale Yellow: #FBF3DB

## Component Specs

- Cards: asymmetric CSS Grid bento, border 1px #EAEAEA, radius 8-12px
- CTAs: #111111 fill, 4-6px radius
- Tags: pastel background pills
- Icons: Phosphor Bold/Fill, monochromatic

## Subtle Motion

- Scroll entry: translateY(12px) + opacity:0 → 600ms cubic-bezier(0.16,1,0.3,1)
- Card hover: ultra-subtle shadow increase
- Staggered cascade reveals

## Execution Protocol

1. Macro-whitespace first (py-24/32)
2. Constrain to max-w-4xl/5xl
3. Typography hierarchy
4. 1px border rule
5. Scroll animations
6. Visual depth between sections
