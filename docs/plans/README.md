# Execution plans

Plans are optional backpressure for work that is risky, ambiguous, spans
multiple systems, or is likely to continue across sessions. Small, reversible
site changes do not need one.

When a plan is useful, create `active/<short-name>.md` containing:

- the outcome and non-goals;
- relevant constraints and source documents;
- a short implementation sequence;
- verification and acceptance criteria; and
- decisions or discoveries needed by the next session.

Move it to `completed/` when the outcome ships, adding a brief verification
note. Completed plans are historical records: do not rewrite them to pretend
later implementation changes were known earlier.
