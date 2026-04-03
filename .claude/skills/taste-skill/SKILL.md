---
name: design-taste-frontend
description: "Senior UI/UX Engineer design skill for premium frontend code. Anti-generic, anti-slop. Enforces asymmetric layouts, spring physics motion, tight typography, and complete interaction states. Bans Inter, neon glows, pure black, emoji, and AI Purple/Blue aesthetics. Settings: DESIGN_VARIANCE (8), MOTION_INTENSITY (6), VISUAL_DENSITY (4)."
---

# Taste Skill — Premium Frontend Design

## Settings (override dynamically)

- **DESIGN_VARIANCE**: 8 — Asymmetric/modern layouts
- **MOTION_INTENSITY**: 6 — Spring physics + scroll-triggered
- **VISUAL_DENSITY**: 4 — Balanced, not cramped

## Architecture

- React/Next.js with Server Components as default
- Tailwind CSS (v3/v4) for styling
- Verify dependencies exist before importing
- `min-h-[100dvh]` — NEVER `h-screen`

## Typography Defaults

- Headlines: `text-4xl md:text-6xl tracking-tighter font-bold`
- Body: `leading-[1.65]` max `65ch` width
- Max 1 accent color
- Inter BANNED — use Geist, Outfit, Satoshi, Cabinet Grotesk

## Forbidden Patterns

**Visual:**
- Neon glows
- Pure black `#000000`
- Oversaturated accents
- AI Purple/Blue aesthetics
- Equal 3-column card grids
- Centered hero when DESIGN_VARIANCE > 4

**Content:**
- Emojis in UI (use icon libraries instead)
- "John Doe" / "Acme Corp" placeholders
- Lorem ipsum
- Fake round numbers ("10,000+ users")
- AI clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer"
- Exclamation marks in success messages

**Code:**
- `transition: all` (specify properties)
- Layout-triggering animations (top, left, width, height)
- `h-screen`
- Hardcoded pixel widths
- Import hallucinations

## Design Engineering Rules

1. **Typography**: Headlines `tracking-tighter`, bold, large scale — not default size
2. **Color**: Single accent, muted, below 80% saturation — no AI palette
3. **Layout**: Asymmetric when DESIGN_VARIANCE > 4. No 3-column equal grids
4. **Cards**: Discouraged in dense dashboards — prefer borders + spacing + dividers
5. **States**: Every interactive element needs loading, empty, and error states
6. **Forms**: Labels above inputs, errors below, gold focus ring

## Motion Engine

Spring physics for all animations:
- `cubic-bezier(0.34, 1.56, 0.64, 1)` for entrances (spring overshoot)
- `cubic-bezier(0.16, 1, 0.3, 1)` for exits (ease-out)
- Framer Motion: `{ type: "spring", stiffness: 100, damping: 20 }`
- Perpetual micro-interactions on active elements
- Staggered cascade: 50-80ms between items
- Hardware-accelerated only: `transform` + `opacity`
- Isolated in Client Components for performance

## Layout Asymmetry (DESIGN_VARIANCE > 4)

- Broken grid / offset columns
- One dominant element off-center
- Unequal column splits (40/60, 30/70)
- Whitespace used intentionally as design element
- Z-axis depth: cards overlap background elements

## Pre-Flight Checklist

- [ ] No emojis anywhere
- [ ] No Inter font
- [ ] No pure black background
- [ ] No equal 3-col grid
- [ ] Spring physics on all transitions
- [ ] Button hover + active states
- [ ] Loading / empty / error states present
- [ ] Labels above inputs
- [ ] Mobile tested at 320px
- [ ] `min-h-[100dvh]` not `h-screen`
- [ ] No `transition: all`
- [ ] No AI copywriting clichés
- [ ] Hardware-accelerated animations only
