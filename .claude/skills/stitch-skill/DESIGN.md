# Design System: La Fleur World Cup 2026
**Skill:** stitch-design-taste

## Configuration

| Dial | Level | Description |
|------|-------|-------------|
| Creativity | 8 | Expressive editorial, bold typography, strong asymmetry |
| Density | 5 | Balanced — conversion-focused sections |
| Variance | 8 | Confident asymmetric layouts |
| Motion Intent | 7 | Spring physics + scroll-triggered entrances |

## 1. Visual Theme & Atmosphere

Dark luxury campaign page. Impression: premium, urgent, alive. Clinical gold-on-black palette with cinematic motion. Like a stadium broadcast — high contrast, high energy, purposeful.

## 2. Color Palette & Roles

- Canvas `#080603` — Primary background (near-black, warm)
- Surface `#0e0a04` / `#0a0804` — Section variation
- Charcoal Footer `#050402` — Footer depth
- Gold Primary `#CB983A` — CTAs, accents, progress
- Gold Light `#F0C060` — Numbers, highlights, hero text accent
- Gold Banner `#D2A822` — Header stripe
- Red Signal `#C41E1E` — Danger stat card only
- Body text: `rgba(255,255,255,0.85)` / `0.65` / `0.50` / `0.30`
- Borders: `rgba(255,255,255,0.10)` / `rgba(203,152,58,0.25)`

Banned: Purple/violet neon, pure white #FFFFFF backgrounds, pure black #000000, blue neon

## 3. Typography Rules

- Family: Inter (Figma spec — exception to Inter ban for brand fidelity)
- Display: 56px / bold / tracking -1.5px / leading 1.08
- Section heads: 44px / bold / tracking -1px
- Sub-heads: 24px / bold
- Body: 14-17px / regular / leading 1.55-1.6
- Labels: 10-11px / bold / tracking 1.5-2px / UPPERCASE
- Price: 48-52px / bold / tracking -2px / gold color
- Step numbers: 56px / bold / tracking -2px / `#F0C060`

## 4. Component Stylings

- **Buttons (Primary):** `#CB983A` fill, `#080603` text, 8px radius, `scale(0.98)` on press, translateY(-1px) on hover — spring physics
- **Buttons (Outline):** 1.5px `rgba(203,152,58,0.6)` border, `#CB983A` text, same hover spring
- **Cards:** `rgba(255,255,255,0.03)` fill, 12-16px radius, colored left border (3px), hover to `rgba(255,255,255,0.05-0.07)`
- **Price Box (Premium):** `rgba(203,152,58,0.15)` fill, `rgba(203,152,58,0.4)` border, 8px radius
- **Badges:** `rgba(203,152,58,0.12)` fill, `rgba(203,152,58,0.3)` border, rounded-full, 11px semibold
- **Progress bar:** 6px height, `#CB983A` fill, `rgba(255,255,255,0.10)` track
- **Form inputs:** `rgba(255,255,255,0.06)` fill, `rgba(203,152,58,0.3)` border, gold focus ring
- **Inputs focus:** border shifts to `#CB983A`, subtle gold glow `0 0 0 2px rgba(203,152,58,0.15)`

## 5. Layout Principles

- Full-width sections, contained content at `max-w-[1312px]` with `px-16`
- Section heights: Hero 680px, CTASpots 180px, others auto
- Grid: 3-col for stats/steps/portfolio (asymmetric allowed), 2-col for pricing
- No 3-column equal-height rigid grids — allow natural height variation
- Left-aligned section labels (gold vertical bar + small caps)
- Countdown in pill container at top of hero

## 6. Motion & Interaction

Spring physics everywhere: `cubic-bezier(0.34, 1.56, 0.64, 1)` for entrances.

- **Section entrance:** `translateY(24px) opacity:0` → `translateY(0) opacity:1` / 600ms spring / trigger at 15% viewport
- **Card hover:** `translateY(-4px)` + border brightens / 300ms spring
- **Button hover:** `translateY(-1px) scale(1.01)` / 200ms spring
- **Button press:** `translateY(1px) scale(0.98)` / 100ms
- **Countdown digits:** flip animation on change / 300ms
- **Progress bar:** width transition 1200ms ease-out on mount
- **Client badges:** staggered fade-in 40ms apart
- **Stat card numbers:** count-up animation on viewport entry
- **Perpetual:** subtle pulse glow on gold CTA button (2s cycle, opacity 0.6→1)

Banned: linear easing, `transition-all` on layout props, non-transform animations.

## 7. Anti-Patterns (Banned)

- No Inter size below 11px
- No pure black backgrounds (#000000)
- No centered hero layout (headline is centered — exception per Figma)
- No placeholder lorem ipsum
- No generic testimonials ("John D., CEO")
- No stock Unsplash URLs
- No `transition-all` (performance — specify properties)
- No layout-triggering animations (width, height, top, left)
- No `h-screen` (use `min-h-[100dvh]`)
- No filler CTAs ("Learn More", "Get Started" without specificity)
- No equal 3-column card grids without visual hierarchy variation
