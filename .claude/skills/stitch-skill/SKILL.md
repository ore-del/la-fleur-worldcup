---
name: stitch-design-taste
description: Semantic Design System Skill for Google Stitch. Generates agent-friendly DESIGN.md files that enforce premium, anti-generic UI standards — strict typography, calibrated color, asymmetric layouts, perpetual micro-motion, and hardware-accelerated performance.
---

# Stitch Design Taste

Generates `DESIGN.md` files enforcing premium, anti-generic UI standards.

## 9 Synthesis Instructions

### 1. Atmosphere
Set density/variance/motion dials. Default: Variance 8, Motion 6, Density 4.
Impression: expensive, intentional, alive.

### 2. Color Palette
- Max 1 accent below 80% saturation
- Ban AI Purple / Blue Neon
- Off-black only — never #000000
- Whisper borders: rgba(226,232,240,0.5)

### 3. Typography
- Inter BANNED — use Geist / Outfit / Cabinet Grotesk / Satoshi
- Serif banned in dashboards
- Display: track-tight (-0.025em), weight 700-900, leading 1.1
- Body: leading 1.65, 65ch max-width

### 4. Hero Section
- Inline image typography between words
- No centered layout above variance 4
- Max 1 CTA
- No filler text ("Scroll to explore", bouncing chevrons)

### 5. Component Stylings
- Buttons with tactile push (scale 0.98 on active)
- Cards only when elevation serves hierarchy
- Skeletal loaders matching exact layout dimensions
- No circular spinners

### 6. Layout Principles
- No overlapping elements
- 3-column equal grid BANNED
- CSS Grid over Flexbox
- Max-width containment
- `min-h-[100dvh]` not `h-screen`

### 7. Responsive Rules
- Mobile-first collapse < 768px
- clamp() for typography scaling
- 44px touch targets minimum

### 8. Motion Philosophy
- Spring physics default: stiffness 100, damping 20
- Perpetual micro-interactions
- Hardware-accelerated transform/opacity only
- Isolated Client Components for CPU-heavy animations

### 9. Anti-Patterns (Banned)
- No emojis in UI
- No Inter font
- No generic serifs (Times, Georgia, Garamond)
- No pure black #000000
- No neon/glow effects
- No oversaturated accents
- No 3-column equal card grids
- No generic placeholder names ("John Doe", "Acme")
- No broken image links
- No centered Hero for variance > 4
- No filler UI text
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"

## DESIGN.md Output Format

```
# Design System: [Project Title]
## 1. Visual Theme & Atmosphere
## 2. Color Palette & Roles
## 3. Typography Rules
## 4. Component Stylings
## 5. Layout Principles
## 6. Motion & Interaction
## 7. Anti-Patterns (Banned)
```
