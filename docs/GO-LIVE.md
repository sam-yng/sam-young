# Go-live checklist

Tasks that must be completed outside this repository before or at launch.
Items marked *(then in repo)* unblock a small, already-scoped code change once
the external decision or account exists. Check items off as they complete and
delete this file once the launch is verified.

## Blocking launch

- [ ] **Choose the production domain** and purchase/confirm DNS control.
  *(then in repo: set `site` in `astro.config.mjs` — this automatically
  activates the canonical URL and `og:url` tags already wired in
  `src/layouts/Layout.astro`.)*
- [ ] **Pick a static host** (e.g. Cloudflare Pages, Netlify, Vercel) and
  connect the GitHub repository. Build command `bun run build`, output
  directory `dist/`, Bun 1.3.x / Node ≥ 22.12. Point the domain at it and
  verify HTTPS.
- [ ] **Activate contact-form delivery**: the form is wired to FormSubmit →
  `young142001@gmail.com`. Submit the form once (locally or on the live site),
  then click the activation link FormSubmit emails to that inbox — nothing is
  delivered until you do. Afterwards, send a real test submission end to end
  and confirm the confirmation dialog appears and the email arrives.
  - [ ] Optional hardening: after activation, FormSubmit provides a random
        alias for your address — swap it into `ContactFooter.astro` (action,
        AJAX endpoint) to keep the raw email out of the page source.
- [ ] **Confirm content claims with Sam** (see [`CONTENT.md`](CONTENT.md)):
  - [ ] `app.lumenmono.com` is ready to receive public sign-ups from the card
        link;
  - [ ] `github.com/sam-yng` is the profile Sam wants linked in the footer;
  - [ ] decide whether `sam-yng/h-alter` stays private — the card links only
        to npm today. *(then in repo: add a Code link to the h-alter card if
        the repo goes public.)*

## Strongly recommended before launch

- [ ] **Require the merge gate on GitHub**: in the repository’s `main` ruleset,
  require the `Formatting and linting` status check (the workflow already
  publishes it; only the ruleset makes it blocking).
- [ ] **Decide on fonts**: the site currently loads Bricolage Grotesque, Geist,
  and JetBrains Mono from Google Fonts at runtime — the only third-party
  request. Self-host if privacy or performance requirements say so.
  *(then in repo: swap the `@import` in `src/styles/global.css` for
  `@font-face` files.)*
- [ ] **Create a social-share (Open Graph) image** in the site’s visual
  language. *(then in repo: add the asset and an `og:image` tag — needs the
  domain first.)*

## Optional / post-launch

- [ ] Privacy-friendly analytics or uptime monitoring, if wanted.
- [ ] Submit the domain to Google Search Console / Bing Webmaster Tools.
- [ ] Post-deploy QA on the live URL: real phone and desktop, Lighthouse pass,
  social-preview debuggers (opengraph.xyz or platform-native), and an
  end-to-end contact-form submission once delivery exists.
