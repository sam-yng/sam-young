---
name: check-repo-knowledge
description: Audit the portfolio's checked-in knowledge for broken links, stale statements, duplicated rules, unreachable documents, and disagreement with the live code. Use after structural changes, when documentation seems unreliable, before a substantial handoff, or when AGENTS.md may be growing beyond its role as a map.
---

# Check Repo Knowledge

1. Run `bun run check:docs` for deterministic link and structure checks.
2. Read `AGENTS.md` as a map, then inspect the documents it routes to.
3. Compare claims about commands, dependencies, directories, content, design,
   and architecture with the current repository.
4. Report findings before changing human-authored meaning:
   - `BROKEN`: dead link or demonstrably false current instruction.
   - `DRIFT`: code and repository knowledge disagree.
   - `DUPLICATE`: a rule has multiple competing sources.
   - `STALE`: likely outdated but requiring human judgment.
5. Fix `BROKEN` and unambiguous `DRIFT` findings when the task authorizes
   repository maintenance. Ask before changing product intent, design intent,
   or historical records.
6. Keep `AGENTS.md` short. Move detail into the nearest durable document and
   link it rather than expanding the map.

Never fabricate missing design-handoff content or portfolio facts to make the
documentation appear complete.
