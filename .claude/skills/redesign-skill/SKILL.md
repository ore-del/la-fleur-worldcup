---
name: redesign-existing-projects
description: "Upgrades existing websites and apps to premium quality. Audits current design, identifies generic AI patterns, and applies high-end design standards without breaking functionality. Scan → Diagnose → Fix. Works with any CSS framework or vanilla CSS."
---

# Redesign Skill — Upgrade Existing Projects

## Workflow: Scan → Diagnose → Fix

1. **Scan** — Read the codebase. Identify framework, styling method (Tailwind, vanilla CSS, styled-components), and current design patterns.
2. **Diagnose** — Run the full audit below. List every generic pattern, weak point, and missing state.
3. **Fix** — Apply targeted upgrades working with the existing stack. Do not rewrite from scratch.

## Design Audit Checklist

### Typography
- [ ] Browser default fonts or Inter everywhere
- [ ] Headlines lacking typographic presence
- [ ] Body text too wide (> 70ch)
- [ ] Only Regular/Bold weights (no Medium, SemiBold, Light)
- [ ] Missing letter-spacing on labels/caps
- [ ] All-caps subheaders without proper weight
- [ ] Orphaned words on last line of paragraphs

### Color & Surfaces
- [ ] Pure `#000000` background
- [ ] Oversaturated accent colors (> 80% saturation)
- [ ] More than one accent color
- [ ] Mixed warm/cool gray systems
- [ ] AI Purple/Blue gradient aesthetic
- [ ] Generic `box-shadow` (no depth consideration)
- [ ] Flat design with zero texture or material
- [ ] Inconsistent lighting direction across shadows

### Layout
- [ ] Everything centered and symmetrical
- [ ] Three equal card columns
- [ ] `height: 100vh` (use `min-h-[100dvh]`)
- [ ] Complex flexbox percentage math
- [ ] No `max-width` container
- [ ] Uniform `border-radius` everywhere
- [ ] No overlap, depth, or Z-axis
- [ ] Mathematically aligned but optically wrong
- [ ] Symmetrical vertical padding top/bottom

### Interactivity & States
- [ ] No hover states on buttons/cards
- [ ] No `active`/pressed feedback
- [ ] Instant transitions (no easing)
- [ ] Missing visible `focus-visible` ring
- [ ] No loading states on async actions
- [ ] No empty states for zero-data views
- [ ] No error states on form submission
- [ ] Animations using `top`/`left`/`width`/`height` (layout-triggering)

### Content
- [ ] Generic names: "John Doe", "Acme Corp", "Jane Smith"
- [ ] Fake round numbers: "10,000+ users", "99% uptime"
- [ ] Lorem ipsum text anywhere
- [ ] AI clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve", "Tapestry"
- [ ] Exclamation marks in success/confirmation messages
- [ ] Identical dates on multiple blog posts
- [ ] Same avatar for multiple testimonials

### Components
- [ ] Generic card look (white bg, gray border, rounded, shadow)
- [ ] Always one filled + one ghost button (no variation)
- [ ] Pill-shaped badges exclusively
- [ ] Accordion FAQ as default interaction
- [ ] 3-card carousel testimonials
- [ ] Pricing table with 3 identical-width towers
- [ ] Modals for everything (even simple confirmations)

### Code Quality
- [ ] `transition: all` (specify properties)
- [ ] Hardcoded pixel widths
- [ ] Missing `alt` text on images
- [ ] Arbitrary z-index values (3, 99, 9999)
- [ ] Commented-out dead code
- [ ] Missing `<meta name="description">`
- [ ] No favicon

### Strategic Omissions
- [ ] No legal/privacy links in footer
- [ ] No keyboard navigation / skip-to-content
- [ ] No custom 404 page
- [ ] No form validation messages
- [ ] No cookie consent (if applicable)

## Fix Priority Order

1. **Font swap** — biggest instant improvement, lowest risk
2. **Color palette cleanup** — remove clashing/oversaturated colors
3. **Hover + active states** — makes interface feel alive
4. **Layout & spacing** — proper grid, max-width, consistent padding
5. **Replace generic components** — swap cliché patterns for modern alternatives
6. **Add loading/empty/error states** — makes it feel finished
7. **Polish typography scale** — the premium final touch

## Upgrade Techniques

**Typography:** Variable font animation; outlined-to-fill text transitions; text mask reveals
**Layout:** Broken grid asymmetry; whitespace maximization; parallax card stacks; split-screen scroll
**Motion:** Smooth scroll with inertia; staggered entry; spring physics; scroll-driven reveals
**Surfaces:** True glassmorphism (beyond `backdrop-filter: blur`); spotlight borders; grain/noise overlays; colored tinted shadows

## Rules

- Work with the existing tech stack — do not migrate frameworks
- Do not break existing functionality — test after every change
- Check dependency files before importing any new library
- Check Tailwind version (v3 vs v4) before modifying config
- Small, targeted improvements over big rewrites
