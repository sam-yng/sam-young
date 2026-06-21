---
name: finish-change
description: Perform a proportionate final review of completed work in this portfolio repository. Use when implementation or content editing is complete and before reporting completion, handing work back, committing, or preparing a pull request.
---

# Finish Change

1. Review the diff and repository status. Confirm every changed file belongs to
   the requested outcome; preserve unrelated user work.
2. Re-read the request and identify any acceptance criterion that has not been
   demonstrated.
3. Run `bun run check`. Fix failures caused by the change. Report unrelated
   baseline failures instead of silently broadening scope.
4. If the output is visible, run `verify-site-change`.
5. Check whether `docs/CONTENT.md`, `docs/DESIGN.md`, or
   `docs/ARCHITECTURE.md` needs to change with the implementation. Do not add
   documentation merely to narrate obvious code.
6. Summarize the outcome, verification performed, and any real limitation.

Do not commit, push, deploy, merge, discard, or clean up branches unless the
user explicitly requested that action.
