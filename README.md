# Sam Young

Personal portfolio for showing work Sam has genuinely shipped. Built with
[Astro](https://astro.build/) and Bun.

## Local development

```bash
bun install
bun run dev
```

Run the completion gate with:

```bash
bun run check
```

Biome provides linting and formatting:

```bash
bun run lint
bun run format
```

## Pull-request checks

The `Code quality` GitHub Actions workflow runs documentation integrity,
formatting, linting, and a production build for pull requests targeting `main`,
merge-queue checks, and pushes to `main`.

To make it a hard merge gate, configure the repository's `main` ruleset to
require the `Formatting and linting` status check. The workflow publishes that
check, while the GitHub ruleset controls whether a merge may bypass it.

Repository conventions and agent guardrails start in [`AGENTS.md`](AGENTS.md).
The UI and UX direction will be informed by a forthcoming Claude design
handoff, tracked in [`docs/DESIGN.md`](docs/DESIGN.md).
