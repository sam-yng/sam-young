# Claude design handoff

The Claude design handoff received on 22 June 2026 is preserved here in two
forms. Both are reference material, not production code.

## Source archive

[`sam-young-design-system.zip`](sam-young-design-system.zip)

- SHA-256:
  `e204e73630b7cb7d6d5fb6ccc103ac6fc870ca173447c4ae32023f97edd97d70`
- Original filename: `Sam Young — Design System.zip`
- Contents: design tokens, component and UI-kit references, the personal-site
  template, screenshots, source imagery, and the handoff’s own guidance.

## Standalone export

[`sam-young-personal-site-standalone.html`](sam-young-personal-site-standalone.html)

- SHA-256:
  `0889caf4366c9c4a25c2f4d40c6879d7fb721b1d114d1d7ec50b5daacec6e418`
- Original filename: `Sam Young - Personal Site (standalone).html`
- Reviewed on 23 June 2026. A self-contained build of the same design system:
  the canonical token sheet plus working React components (Header, Hero, Work,
  About, Footer) with fonts and imagery inlined as gzip-packed assets.
- It is the same system as the ZIP, not a new direction. Its only material
  difference from the live site is fabricated demo content — six invented
  projects, a fake-success contact form, an “Open to work” tag, a multi-year
  duration claim, a generic tool list, and placeholder social links — none of
  which is accepted as factual. See [`../CONTENT.md`](../CONTENT.md).

The accepted durable decisions and deliberate departures are distilled in
[`../DESIGN.md`](../DESIGN.md). Content-truth boundaries are recorded in
[`../CONTENT.md`](../CONTENT.md).

Notably, both artifacts contain `sam-cloud` and `sam-hero`; the live site
intentionally imports only `sam-cloud`.
