# Design

## Status and source

The Claude design handoff was received on 22 June 2026. Its original ZIP is
preserved in [`design-handoff/`](design-handoff/README.md). This document records
the decisions accepted into the live Astro site so future work does not depend
on unpacking the source artifact.

The intended experience is a high-fidelity, single-page personal portfolio with
a sticky header, hero, selected-work marquee and grid, inverted about section,
and contact footer. Its visual character is “monospace editorial”: warm paper,
near-black ink, one acid-lime Volt accent, hard offset shadows, and restrained
motion.

## Accepted foundations

- Use `#FBF8F1` paper, `#0E0E0C` ink, and `#D6FF3F` Volt as the default site
  palette. Cobalt, Flush, and gradients are not part of the default UI.
- Use Bricolage Grotesque for display type, Geist for body/UI copy, and
  JetBrains Mono for labels and metadata. The handoff supplies Google Fonts
  stand-ins, not self-hosted font files.
- Keep a 4px spacing rhythm, fluid gutters, containers up to 1320px, small
  technical radii, structural ink borders, and blur-free hard shadows.
- Typeset the `SY` tile and `sam.young` wordmark in markup. There is no raster
  logo asset.
- Keep copy direct, compact, first-person, and lightly playful. Mono labels use
  uppercase code-comment styling such as `// about`.

The code-native design tokens live in `src/styles/global.css`. Component-scoped
styles may compose those tokens but should not create a parallel palette or type
system.

## Site map

1. Sticky header with the logo and Work, About, and Contact anchors.
2. Hero with the design-engineer label, oversized headline, short introduction,
   work/contact calls to action, and the thought-cloud mascot.
3. Full-width selected-work marquee followed by a responsive project-card grid.
4. Inverted About section with a cloud cameo and compact site-stack chips.
5. Contact footer with a large invitation, contact card, cloud cameo, logo, and
   build note.

## Motion and interaction

- The header gains translucent paper, blur, and an ink border after 30px of
  scroll.
- Lenis provides smooth wheel scrolling when reduced motion is not requested.
- Reveals use Intersection Observer and a 22px rise. Content is visible without
  JavaScript, and a safety timeout reveals any observed element after 1.6s.
- The marquee loops in 26 seconds and pauses on hover.
- Buttons lift and grow their hard shadow on hover, then press flat on active.
- Hero, About, and footer cloud instances use distinct transform-only motion.
- `prefers-reduced-motion` disables smooth scrolling, cloud motion, the marquee,
  and reveal movement.

## Deliberate departures

- `sam-hero` is not used. Per Sam’s direction, `sam-cloud` is enlarged to occupy
  the hero-image position by itself and remains the only raster site asset.
- Prototype projects, years, metrics, tools, links, social profiles, and contact
  details were not accepted as factual portfolio content. The live grid and
  contact card use explicit placeholders until Sam supplies verified details.
- The prototype’s fake-success contact form is not reproduced. A form must not
  claim delivery until a real endpoint and approved contact destination exist.
- The starter Astro favicon was replaced with a code-native Volt `SY` mark.

## Verification

Visible changes must be checked in the rendered site at representative mobile
and desktop widths. Review hierarchy, overflow, anchors, focus visibility,
alternative text, reduced-motion behavior, and console errors—not only whether
the page builds.
