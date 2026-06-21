# Architecture

## Current shape

The portfolio is a static Astro site built with Bun. Pages live in `src/pages/`,
shared shells in `src/layouts/`, reusable UI in `src/components/`, and assets in
`src/assets/` or `public/` according to whether Astro should process them.

GSAP and Lenis are installed for intentional motion and scrolling behavior.
Their presence is not a requirement to animate every view. Respect reduced
motion and prefer native browser behavior when it is sufficient.

Biome is the repository's formatter and linter for supported source and
configuration files. Its pinned version and rules live in `package.json` and
`biome.json`; `bun run check` verifies formatting, recommended lint rules,
documentation integrity, and the production build.

GitHub Actions mirrors that gate in `.github/workflows/quality.yml` for pull
requests targeting `main`, merge-queue validation, and pushes to `main`. Its
stable `Formatting and linting` job name is intended to be required by the
repository's `main` branch ruleset; workflow YAML cannot enable that GitHub
repository setting by itself.

## Boundaries

- Keep the default output static unless a real feature requires server runtime.
- Prefer Astro components and platform HTML/CSS before adding client-side UI.
- Hydrate only interactive islands that need browser JavaScript.
- Keep content close to the repository while the site remains small. Introduce
  a CMS only when editing needs justify its operational cost.
- Add dependencies for a demonstrated capability, not anticipated complexity.
- Preserve fast loading, semantic markup, and straightforward local setup.

## Decision rule

Record a decision here when it changes how future work should be built. Avoid
turning ordinary implementation details into architecture policy.
