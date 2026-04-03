---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web and mobile. Includes 50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, and 25 chart types across 10 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, and HTML/CSS). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, and check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, and mobile app. Elements: button, modal, navbar, sidebar, card, table, form, and chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, and flat design. Topics: color systems, accessibility, animation, layout, typography, font pairing, spacing, interaction states, shadow, and gradient. Integrations: shadcn/ui MCP for component search and examples."
---

# UI/UX Pro Max

Design intelligence for professional UI/UX across multiple platforms and frameworks.

## When to Apply

**Must use:** Building or reviewing any UI component, page, or flow. Design system generation. Component implementation.
**Recommended:** Refactoring existing UI. Adding animations. Reviewing accessibility.
**Skip:** Pure backend tasks, data migrations, non-visual scripts.

## Rule Categories (by Priority)

### CRITICAL — Accessibility
- color-contrast: min 4.5:1 for body text, 3:1 for large/UI text
- focus-visible: all interactive elements must show visible focus ring
- aria-labels: all icon-only buttons must have aria-label
- keyboard-nav: all interactions must be keyboard accessible

### CRITICAL — Touch & Interaction
- touch-target-size: min 44×44px for all tap targets
- tap-feedback: visual feedback within 100ms of touch
- no-hover-only: never gate functionality behind hover alone

### HIGH — Performance
- image-optimization: use next/image or lazy loading
- animation-gpu: use transform/opacity only (hardware accelerated)
- no-layout-thrash: batch DOM reads before writes

### HIGH — Style Selection
- dark-mode-contrast: use rgba overlays, not pure black/white
- spring-physics: all animations use spring (stiffness:100, damping:20) not linear
- consistent-radius: pick one radius scale and apply everywhere

### HIGH — Layout & Responsive
- mobile-first: design 320px upward
- max-width-container: constrain readable content to max-w-4xl/5xl
- grid-over-flex: prefer CSS Grid for 2D layouts

### MEDIUM — Typography & Color
- type-scale: use a 1.25 or 1.333 modular scale
- max-line-length: 65ch for body text
- one-accent: max 1 accent color per section

### MEDIUM — Animation
- entrance-animation: translateY(20px) + opacity:0 → 500ms ease-out
- stagger: cascade list items 50-80ms apart
- reduce-motion: respect prefers-reduced-motion

### MEDIUM — Forms & Feedback
- label-above: always place labels above inputs
- error-below: place error messages directly below the field
- loading-state: all async actions need loading indicator

### HIGH — Navigation Patterns
- sticky-nav: use position:sticky not fixed where possible
- scroll-progress: consider progress indicator for long pages
- active-state: always indicate current section in nav

### LOW — Charts & Data
- chart-type: bar=comparison, line=trend, pie=proportion (max 5 slices)
- data-labels: always label axes and provide a legend

## Pre-Delivery Checklist

- [ ] Color contrast passes WCAG AA
- [ ] All interactive elements keyboard accessible
- [ ] Touch targets ≥ 44px
- [ ] Animations use transform/opacity only
- [ ] prefers-reduced-motion respected
- [ ] Mobile layout tested at 320px
- [ ] No layout shift on load
- [ ] Form validation with clear error messages
