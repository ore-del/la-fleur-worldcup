---
name: brutalist-industrial-ui
description: "BETA — Industrial Brutalism and Tactical Telemetry UI. Merges mid-century Swiss typography with military/aerospace interface aesthetics. Data-dense, mechanically precise. Choose: Swiss Industrial Print (light, newsprint) OR Tactical Telemetry (dark, CRT terminal)."
---

# Brutalist Skill — Industrial Tactical UI (BETA)

## Two Modes (Never Mix)

### Swiss Industrial Print
- Light substrate: matte off-white `#F4F4F0`
- Carbon ink: `#050505`
- Newsprint energy, editorial grids, ink bleeds

### Tactical Telemetry
- Near-black terminal: `#0A0A0A`
- Phosphor white: `#EAEAEA`
- CRT scan lines, military HUD aesthetics

## Typography Dominance

**Macro typography** (headlines):
- Neue Haas Grotesk, Archivo Black, or similar heavy grotesque
- Scale: `clamp(4rem, 10vw, 15rem)`
- Tracking: extremely tight or negative (`-0.04em`)
- Weight: 800-900

**Micro typography** (data, labels):
- Monospaced fonts at fixed small sizes
- Generous letter-spacing: `0.1em`–`0.2em`
- Simulates mechanical typewriter spacing

## Color Discipline

- **Light mode**: Off-white `#F4F4F0` + Carbon `#050505`
- **Dark mode**: Near-black `#0A0A0A` + Phosphor `#EAEAEA`
- **Single accent**: Aviation red `#E61919` only
- **Banned**: Gradients, soft drop shadows, modern translucency, neon, glassmorphism

## Spatial Engineering

- Rigid CSS Grid with visible `1px`–`2px` borders
- Grid lines compartmentalize information like instrument panels
- Sharp 90-degree corners — no `border-radius`
- Oscillate between extreme data density and vast negative space
- Alignment is strict: everything on the grid

## Degradation Effects

- ASCII framing: `[ DATA ]`, `// CLASSIFIED`, `▒▒▒`
- CRT scanlines via CSS gradient: `repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)`
- Halftone dithering on images
- Noise overlay on non-interactive pseudo-elements
- Redacted text blocks (black bars)

## Layout Rules

- No centered layouts — everything aligned to grid edges or explicit columns
- Data tables over cards (always)
- Monochromatic photography only (or none)
- Iconography: geometric, stroke-based, no fill gradients
- Borders as information separators, not decoration

## Banned

- Rounded corners (`border-radius`)
- Gradients of any kind
- `box-shadow` with blur
- Glassmorphism / backdrop-filter
- Neon or glow effects
- Soft/friendly typography (no humanist sans)
- Animation beyond functional state changes
- Emojis or decorative iconography
- Accent colors beyond aviation red

## Use Cases

- Developer tools and CLIs
- Data analysis dashboards
- Tactical/operational software
- Digital art and portfolio projects
- Experimental editorial sites
