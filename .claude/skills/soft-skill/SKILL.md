---
name: soft-ui-vanguard
description: "High-end premium soft UI design skill. Produces agency-caliber digital experiences with Ethereal Glass, Editorial Luxury, or Soft Structuralism vibes. Double-Bezel technique, spring physics, haptic micro-details, performance-optimized animations."
---

# Soft Skill — Premium Soft UI Design

## Persona: Vanguard_UI_Architect

Produces premium, agency-caliber digital experiences through strict design governance.

## Absolute Zero (Banned)

- Common fonts: Inter, Roboto, DM Sans, system-ui
- Standard icon sets: Lucide, Feather, Heroicons
- Flat borders without depth
- Symmetrical layouts
- Linear animations (`ease-in-out`, `linear`)
- Box shadows: `shadow-md`, `shadow-lg`, `shadow-xl`
- Pure white `#FFFFFF` or pure black `#000000`

## Vibe Archetypes (choose one)

1. **Ethereal Glass** — tech/AI products. Frosted glass, luminous accents, depth via blur layers
2. **Editorial Luxury** — lifestyle/fashion. Serif headlines, generous whitespace, ink-on-paper contrast
3. **Soft Structuralism** — consumer/health. Rounded geometry, warm off-whites, soft shadows

## Layout Archetypes (choose one)

1. **Asymmetrical Bento** — unequal grid cells, dominant hero quadrant, negative space as design
2. **Z-Axis Cascading** — cards overlapping at depth, parallax scroll, layered hierarchy
3. **Editorial Split** — 40/60 or 30/70 column compositions, full-bleed image panels

## Double-Bezel Technique

Nested enclosures: outer shell has subtle background + hairline border. Inner core has its own distinct material. Creates depth without shadow abuse.

```css
.bezel-outer { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 6px; }
.bezel-inner { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; }
```

## Motion Standards

- Spring physics: `cubic-bezier(0.32, 0.72, 0, 1)` — simulates mass and momentum
- Framer Motion: `{ type: "spring", stiffness: 80, damping: 18 }`
- Hardware-accelerated only: `transform` + `opacity`
- Blur filters: restricted to fixed/sticky elements only
- Grain overlays: `::before`/`::after` pseudo-elements, non-interactive

## Haptic Details

- Button-in-button icon nesting (icon has its own bordered container)
- Eyebrow badge tags above headlines
- Staggered reveal animations on lists (60ms per item)
- `scale(0.97)` press feedback on buttons
- Shimmer loading skeletons matching exact element dimensions

## Performance Constraints

- Animations: `transform` + `opacity` only
- Blur: fixed elements only
- Grain: pseudo-elements only, `pointer-events: none`
- z-index: documented layers (base: 0, content: 10, overlay: 20, modal: 30, toast: 40)
- Client Components isolated for heavy animations

## Execution Protocol

1. Choose Vibe Archetype
2. Choose Layout Archetype
3. Apply Double-Bezel to key surfaces
4. Set spring physics globally
5. Define color material (not just hex — think light, texture, translucency)
6. Add haptic micro-details to all interactive elements
7. Stagger all list/grid entrances
8. Verify pre-output checklist

## Pre-Output Checklist

- [ ] Vibe archetype declared and consistent
- [ ] Layout archetype applied
- [ ] No Inter, Roboto, or system-ui
- [ ] Double-Bezel on primary surfaces
- [ ] Spring physics on all transitions
- [ ] Hardware-accelerated only
- [ ] No linear easing anywhere
- [ ] Button press states (scale 0.97)
- [ ] Loading shimmer skeletons
- [ ] Grain via pseudo-elements only
- [ ] z-index documented
