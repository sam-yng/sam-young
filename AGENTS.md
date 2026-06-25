# Sam Young — agent map

This repository is Sam Young's personal portfolio: a small Astro site for
showing work that has genuinely shipped. Prefer clarity, character, speed, and
accessibility over application-scale machinery.

This file is a map, not an encyclopedia. Durable repository knowledge lives in
`docs/` and must change with the code or content it describes.

## Commands

```bash
bun install      # install pinned dependencies
bun run dev      # local site at http://localhost:4321
bun run check    # required gate: docs + Biome + production build
bun run lint     # Biome lint only
bun run format   # apply Biome formatting
bun run build    # production build only
bun run preview  # preview the production build
```

## Repository map

- `src/pages/` — routes.
- `src/layouts/` — shared document shells and metadata.
- `src/components/` — reusable page sections and UI.
- `src/assets/` — source-controlled assets processed by Astro.
- `public/` — files served without processing.
- [`docs/DESIGN.md`](docs/DESIGN.md) — UI/UX principles and design-handoff status.
- [`docs/CONTENT.md`](docs/CONTENT.md) — content truth and portfolio claims.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — technical boundaries and decisions.
- [`docs/plans/README.md`](docs/plans/README.md) — when and how to keep execution plans.

## Non-negotiable rules

1. Never invent clients, collaborators, outcomes, metrics, testimonials, dates,
   or shipped work. Mark unknown content clearly instead of filling gaps.
2. Never commit secrets, private contact details, or third-party material that
   Sam has not authorized for publication.
3. Treat the archived Claude design handoff as the original UI and UX reference.
   Preserve it under `docs/design-handoff/`, follow the accepted decisions in
   `docs/DESIGN.md`, and record deliberate departures there.
4. Preserve semantic HTML, keyboard access, visible focus, readable contrast,
   reduced-motion preferences, and useful alternative text.
5. Keep the site responsive and dependency-light. Do not introduce a framework,
   service, CMS, or state layer without a concrete need.
6. Do not publish, deploy, push, merge, or perform destructive Git operations
   unless the user explicitly asks.
7. Update repository knowledge in the same change when a durable content,
   design, or architectural decision changes.
8. Do not bypass or weaken the formatting-and-linting merge gate to make a
   change pass. Fix the cause or document why a narrowly scoped rule exception
   is correct.

## Working rhythm

- Inspect the relevant code and docs before editing.
- For a small, reversible change, work directly. Create an execution plan only
  when work is risky, ambiguous, spans several systems, or is likely to cross
  sessions.
- Use focused checks while iterating. Run `bun run check` before declaring the
  work complete.
- Let Biome own formatting for supported files. Run `bun run format` rather
  than manually fighting its output, and do not weaken rules merely to silence
  a valid diagnostic.
- For visible changes, use the `verify-site-change` skill and inspect the actual
  rendered page at representative mobile and desktop widths.
- When repository knowledge may have drifted, use `check-repo-knowledge`.
- At completion, use `finish-change` for a proportionate final review.
- Report pre-existing failures clearly. Fix them only when they block the task
  or the user expands the scope.

## Definition of done

A change is done when the requested outcome works, `bun run check` passes,
visible changes have been inspected in a browser, relevant docs are current,
and remaining limitations are stated plainly.
