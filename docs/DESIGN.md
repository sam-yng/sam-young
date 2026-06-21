# Design

## Status

**A Claude design handoff is expected soon.** It will inform the site's UI and
UX direction. Until that artifact is available, avoid committing the repository
to an elaborate visual system or making speculative decisions on its behalf.

When the handoff arrives:

1. Store the source material, or a faithful text export of it, under
   [`design-handoff/`](design-handoff/README.md).
2. Record the accepted, durable decisions in this document.
3. Record deliberate departures and their rationale here rather than silently
   diverging from the handoff.
4. Translate repeated values into code-native tokens where useful.

The checked-in repository is the operational source of truth. The handoff is
an important design input; accepted decisions must still be made legible here
so future agents do not depend on a missing chat or external document.

## Current principles

These are safe defaults, not a substitute for the handoff:

- Let the shipped work lead; decoration should support it.
- Prefer a small number of intentional interactions over ambient motion.
- Use semantic structure, visible focus, sufficient contrast, and reduced-motion
  behavior from the beginning.
- Design mobile and desktop together rather than treating mobile as cleanup.
- Keep provisional styling easy to replace.

## Verification

Visible changes must be checked in the rendered site at representative mobile
and desktop widths. Review hierarchy, overflow, interaction states, keyboard
access, console errors, and motion behavior—not only whether the page builds.
