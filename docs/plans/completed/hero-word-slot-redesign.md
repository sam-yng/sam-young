# Hero word-slot redesign

## Outcome

Implement the agreed hero direction as a production-ready revision of the
existing Astro hero:

- restore Bricolage Grotesque as the main hero display face;
- use upright Gloock only for the animated adjective and the matching `weird`
  treatment in the work marquee;
- animate the adjective through `weird`, `fast`, and `useful`, returning to
  `weird` at rest;
- treat the thought cloud as oversized punctuation beside the final headline
  line, rather than as a separate column or a background behind the text;
- preserve the current `sam.young` wordmark, JetBrains Mono navigation, hero
  introduction, and both sticker-button designs; and
- eliminate clipping of glyphs, animation, and the cloud at every state and
  supported width.

The default motion proposal is a one-time adjective sequence on page entry.
The cloud keeps its existing slow bob. Both become static when reduced motion
is requested.

## Non-goals

- Do not change the paper, ink, or Volt palette.
- Do not redesign the header, wordmark, navigation, or sticker buttons.
- Do not change work cards, About, the contact footer, or the cloud cameos in
  other sections.
- Do not add an animation library, client-side framework, or state layer.
- Do not invent or revise portfolio claims.
- Do not deploy, publish, push, or merge as part of this work.

## Constraints and sources

- Follow [`docs/DESIGN.md`](../../DESIGN.md), especially the accepted palette,
  accessibility requirements, motion rules, and preserved design handoff.
- Keep the claims and copy within [`docs/CONTENT.md`](../../CONTENT.md).
- The primary implementation surfaces are:
  - `src/components/Hero.astro`;
  - `src/components/Marquee.astro`;
  - `src/styles/global.css`; and
  - `src/layouts/Layout.astro` only if shared motion setup needs a small update.
- `src/components/Header.astro` and `src/components/Logo.astro` are reference
  surfaces, not expected edit targets.
- Preserve semantic HTML, keyboard access, visible focus, useful alternative
  text, readable contrast, and `prefers-reduced-motion` behavior.
- Keep the implementation dependency-free and compatible with content visible
  before JavaScript runs.

## Clipping strategy

The prototype exposed two different clipping bugs that must not be reproduced:

1. Tight headline line boxes cut descenders such as the `g` in `things`.
2. Applying a reveal mask or `clip-path` to the whole final line also clips the
   cloud and constrains its bob to the text line box.

Implement the production structure so those concerns are isolated:

- Headline line wrappers use `overflow: visible` and enough block-axis room for
  Bricolage Grotesque's ascenders and descenders.
- Any line-reveal mask wraps text only. Give that inner mask explicit
  block-axis breathing room and compensate its spacing outside the mask if a
  tight optical rhythm is still wanted.
- The word-slot window clips only the animated adjective. Size it for the
  widest word (`useful`) plus Gloock's overshoot, and add vertical padding so
  no serif detail is lost during the flip/slide.
- The cloud is a sibling of the final line's text mask, positioned relative to
  the overall headline lockup. It must not live inside a clipped line or mask.
- Run the cloud bob on its own wrapper so its full silhouette remains visible
  at both animation extrema.

## Implementation sequence

1. **Add the accent type role**
   - Add Gloock to the existing font import.
   - Introduce one accent-font token rather than using an ad hoc family in
     multiple components.
   - Keep Bricolage Grotesque as the hero display token, Geist for body/buttons,
     and JetBrains Mono for labels/navigation.

2. **Restructure the hero headline**
   - Replace the current line breaks with the centered three-part lockup:
     `Building` / animated adjective + `things` / `for the web.`
   - Keep one stable accessible heading name describing the complete idea,
     while treating visual word changes as presentational so screen readers are
     not repeatedly interrupted.
   - Keep `weird` visible as the no-JavaScript and reduced-motion fallback.

3. **Implement the adjective animation**
   - Use a small component-local script and CSS classes/keyframes; add no
     dependency.
   - Play `weird → fast → useful → weird` once after the hero becomes visible,
     then stop.
   - Keep the slot width stable so changing words causes no horizontal layout
     shift.
   - Ensure timers cannot leave the word in an intermediate hidden state.

4. **Place the cloud as punctuation**
   - Anchor the cloud immediately after and slightly above the final headline
     line at desktop widths.
   - Scale and reposition it beside or just beneath the final line on narrow
     screens without overlapping copy or creating horizontal overflow.
   - Preserve the existing cloud asset, alternative text, drop shadow, and
     five-second bob.
   - Keep the cloud outside all text reveal masks and clipped word-slot
     containers.

5. **Preserve and align supporting content**
   - Center the existing introduction and sticker buttons under the headline.
   - Preserve button typography, borders, radii, hard shadows, hover, active,
     and focus behavior exactly.
   - Leave the header and logo implementation unchanged.
   - Replace the marquee's italic `weird` with the same upright accent-font
     treatment for consistency; retain its existing copy and motion.

6. **Tune responsive behavior**
   - Check the lockup at 320px, 375px, tablet, 1024px, and a wide desktop.
   - Keep all headline words readable without collision, truncation, or
     accidental wrapping.
   - Keep both hero actions side by side where they comfortably fit and allow a
     clean wrap where they do not.
   - Confirm the header remains unchanged at its existing breakpoints.

7. **Update durable design knowledge**
   - Record the accepted hero layout, Gloock accent role, adjective motion, and
     cloud-punctuation treatment in [`docs/DESIGN.md`](../../DESIGN.md).
   - Do not update `CONTENT.md` unless implementation changes approved copy.
   - Do not update `ARCHITECTURE.md` unless the implementation introduces an
     architectural decision beyond this plan.

## Verification

During implementation:

- run focused formatting/lint checks while iterating;
- use the `verify-site-change` skill to inspect the rendered site at the listed
  mobile, tablet, and desktop widths;
- inspect the start, midpoint, and resting states of the word animation;
- inspect both extrema of the cloud bob;
- test with reduced motion enabled;
- test the no-JavaScript fallback;
- confirm keyboard focus remains visible on both hero actions;
- confirm there are no console errors or horizontal overflow; and
- run `bun run check` before completion.

## Acceptance criteria

- The main hero type is Bricolage Grotesque; Gloock is confined to the animated
  adjective and the corresponding marquee emphasis.
- The visible word sequence is `weird → fast → useful → weird`, has no layout
  shift, and rests on `weird`.
- The `g` in `Building` and `things`, every Gloock glyph, and all other
  ascenders/descenders remain fully visible throughout their animations.
- The cloud reads as punctuation attached to the final headline line, never as
  a background layer or detached side column.
- The entire cloud silhouette and drop shadow remain visible through the full
  bob; its animation is not constrained by headline line-height or reveal
  clipping.
- The hero is readable and overflow-free from 320px through wide desktop
  widths.
- Reduced motion shows a static `weird` and a static cloud without an empty or
  transitional frame.
- Header typography, the `sam.young` wordmark, and both sticker buttons are
  visually and behaviorally unchanged.
- Existing content claims remain unchanged, relevant design documentation is
  current, and `bun run check` passes.

## Decisions for the implementation session

- Proceed with a one-time word sequence rather than a perpetual loop unless Sam
  asks for continuous cycling.
- Tune the exact cloud scale and optical offset in the rendered page; the
  structural rule is that it remains outside all clipped text containers.
- If the three-line headline cannot stay legible at the narrowest breakpoint,
  introduce a deliberate mobile line break rather than reducing the display
  type below a useful size.

## Implementation result — 2026-07-21

Implemented the centered three-line lockup with Bricolage Grotesque as the
primary face, Gloock confined to the adjective track and matching marquee
emphasis, and the existing cloud positioned outside all clipped text. The cloud
sits beside the final line from tablet widths upward and beneath its last word
on phones. Supporting copy and the unchanged sticker buttons are stacked and
centered beneath the title.

The word track runs once through `weird → fast → useful → weird` when the hero
enters the viewport. Its four pre-rendered frames give no-JavaScript and reduced
motion users a stable first `weird`, while the heading exposes one fixed
accessible name containing all three adjectives.

Verification completed at 320px, 375px, 500px, 1024px, and 1440px widths. The
normal-motion midpoint (`useful`) and resting (`weird`) states, cloud placement,
reduced-motion rendering, keyboard-reachable hero actions, accessible heading,
and browser console were inspected in the rendered site. `bun run check` passed
with documentation checks, Biome, and the production Astro build.
