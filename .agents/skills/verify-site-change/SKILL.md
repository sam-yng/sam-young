---
name: verify-site-change
description: Validate visible changes to this Astro portfolio in the rendered site. Use after changing layout, styling, content presentation, navigation, animation, responsive behavior, accessibility, or other UI/UX behavior, and before declaring that work complete.
---

# Verify Site Change

1. Read `docs/DESIGN.md` and any relevant material under
   `docs/design-handoff/`. Do not invent guidance for a handoff that is still
   pending.
2. Run the narrowest useful check while iterating, then run `bun run check`.
3. Start or reuse the local site and inspect the actual rendered page. Check at
   least one narrow mobile width and one desktop width; add an intermediate
   width when layout behavior changes materially.
4. Exercise affected links and interactions. Inspect keyboard focus, overflow,
   readable hierarchy, alternative text, reduced-motion behavior, and browser
   console errors as relevant to the change.
5. Compare the result with the request and checked-in design guidance. Treat a
   successful build as necessary, not sufficient.
6. Fix regressions within scope and repeat the affected checks. Report any
   limitation that requires user judgment or unavailable content.

Capture screenshots only when they materially help the user review the result.
Do not approve an unseen UI change from source inspection alone.
