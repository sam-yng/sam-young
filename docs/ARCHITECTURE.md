# Architecture

## Current shape

The portfolio is a static, single-page Astro site built with Bun. The `/` route
composes section components for Header, Hero, Work, About, and ContactFooter.
Small reusable brand pieces such as Logo and Marquee remain Astro components;
site-wide tokens and accessibility defaults live in `src/styles/global.css`.

Styling is authored with Tailwind utility classes in component markup. The
design tokens in `src/styles/global.css` stay the single source of truth: a
`@theme inline` block bridges them into Tailwind (e.g. `bg-volt-500`,
`font-display`, `shadow-hard`, `animate-cloud-bob`) without emitting duplicate
variables, so utilities resolve straight to the tokens and no parallel palette
or type scale is introduced. Components reference fluid `clamp()` sizing and the
semantic type roles through arbitrary-value utilities (e.g.
`[font:var(--type-body-lg)]`). The design system's base reset and component
classes (`.sticker-button`, `.eyebrow`, the reveal states) sit in `@layer base`
so utilities can compose over them; a few JS-toggled or child-targeting rules
(the scrolled header, the logo wordmark) stay in scoped component `<style>`.

Raster site assets live in `src/assets/`: the cloud mascot plus one current
public site image per public project card, rendered responsively through
`astro:assets` `<Image>`. Astro owns imported asset URLs and dimensions. The
type-set logo and SVG favicon are code-native.

The page ships ordinary semantic HTML by default. Small bundled scripts add the
sticky-header state, Intersection Observer reveals, and Lenis smooth scrolling.
No component framework or client-side state layer is required.

## Dependencies and gates

Lenis is active only when the visitor has not requested reduced motion. The
current motion layer uses CSS for decorative animation and Lenis for smooth
scrolling. GSAP was removed because the production site did not import it.

`@samyng/h-alter` is development-only harness tooling. It supports repository
maintenance but is not imported by the Astro site or shipped to visitors.

The design handoff’s fonts currently load from Google Fonts; replace them with
self-hosted `@font-face` files if privacy, performance, or licensing
requirements change. The only remote runtime service is FormSubmit
(`formsubmit.co`), which delivers contact-form submissions to Sam’s inbox: the
form element posts to it directly as a no-JavaScript fallback, and a small
script upgrades that to an AJAX submission with an in-page confirmation dialog.
No form data is stored in this codebase or its host.

Tailwind (v4, via the `@tailwindcss/vite` plugin wired in `astro.config.mjs`) is
a build-time dependency only — it adds no runtime payload beyond the generated,
tree-shaken stylesheet. It was adopted to author styling as utilities while the
token sheet remains canonical; it does not introduce a component framework or
client runtime, so it stays within the dependency-light boundary.

Biome is the repository’s formatter and linter for supported source and
configuration files. Its pinned version and rules live in `package.json` and
`biome.json`; `bun run check` verifies documentation integrity, formatting,
recommended lint rules, and the production build.

GitHub Actions mirrors that gate in `.github/workflows/quality.yml` for pull
requests targeting `main`, merge-queue validation, and pushes to `main`. Its
stable `Formatting and linting` job name is intended to be required by the
repository’s `main` branch ruleset; workflow YAML cannot enable that repository
setting by itself.

## Boundaries

- Keep the default output static unless a real feature requires server runtime.
- Prefer Astro components and platform HTML/CSS before adding client-side UI.
- Hydrate only interactive islands that need browser JavaScript.
- Keep content close to the repository while the site remains small. Introduce
  a CMS only when editing needs justify its operational cost.
- Keep contact-form feedback truthful to the network result: confirm delivery
  only after the endpoint accepts the submission, and give a direct email
  address on failure.
- Add dependencies for a demonstrated capability, not anticipated complexity.
- Preserve fast loading, semantic markup, and straightforward local setup.

## Decision rule

Record a decision here when it changes how future work should be built. Avoid
turning ordinary implementation details into architecture policy.
