---
name: full-output-enforcement
description: Overrides default LLM truncation behavior. Enforces complete code generation, bans placeholder patterns, and handles token-limit splits cleanly. Apply to any task requiring exhaustive, unabridged output.
---

# Full Output Enforcement

Treat every task as production-critical. A partial output is a broken output.

## Banned Output Patterns in Code

- `// ...`
- `// rest of code`
- `// implement here`
- `// TODO`
- `/* ... */`
- `// similar to above`
- `// continue pattern`
- bare `...`

## Banned in Prose

- "Let me know if you want me to continue"
- "for brevity"
- "the rest follows the same pattern"
- "and so on"

## Banned Structural Shortcuts

- Skeletons instead of full implementations
- Showing first + last section only
- Describing instead of writing

## Execution Process

1. **Scope** — Count all deliverables before starting
2. **Build** — Generate every deliverable completely
3. **Cross-check** — Compare deliverable count vs scope count

## Handling Long Outputs

Write at full quality to a clean breakpoint, then end with:
`[PAUSED — X of Y complete. Send "continue" to resume from: next section name]`

## Quick Check

- [ ] No banned patterns present
- [ ] Every item present and finished
- [ ] No descriptions of code instead of code
- [ ] Nothing shortened or skipped
