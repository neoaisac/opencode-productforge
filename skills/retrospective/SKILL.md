# Skill: Retrospective

A global skill triggered on pre-commit hooks and context compaction events. It does not produce standalone retrospective files — instead, it applies learnings directly back into the project's documentation and toolchain.

## Trigger

- Pre-commit hook
- Context compaction events

## Behavior

### 1. Scan What Changed
Compare current state against the last trigger point:
- New or modified ADRs, PRDs, UX docs, feature docs
- New or modified skills, MCP servers, agent configs
- New or modified code that reflects architectural decisions
- Commands the user ran manually (vibe-coding loops)

### 2. Apply Learnings to Existing Docs
Do not create a separate retrospective file. Instead:
- If a decision changed, update the relevant ADR (add a superseding entry or update the status)
- If a feature evolved, update the PRD or feature doc
- If a UX pattern changed, update the UX doc and Mermaid diagrams
- If a skill gap was discovered, update the skill or create a new one

### 3. Identify Skill / Agent / Tool Gaps
For each vibe-coding loop (where the user had to correct output, retry, or manually fix):
- **Was this a skill issue?** Does an existing skill need refinement, or is a new skill needed?
- **Was this a tool issue?** Could an MCP server, linter, or pre-commit hook catch this?
- **Was this a context issue?** Was important context lost between prompts that a command or template could preserve?

### 4. Produce Actionable Recommendations
Output a structured list of automation recommendations:

```
[AUTOMATION] Skill: <skill name> needs update — <reason>
[AUTOMATION] MCP: Consider <tool name> to automate <pattern>
[AUTOMATION] Hook: Add pre-commit check for <pattern>
```

These recommendations should be immediately actionable — not vague suggestions.

## What NOT to Do
- Do NOT create standalone retrospective files
- Do NOT write to `docs/retrospectives/` or similar folders
- Do NOT log decisions that are already captured in ADRs
- Do NOT generate recommendations that require further research — be specific

## Checklist

- [ ] Scan changes since last trigger
- [ ] Update affected ADRs, PRDs, UX docs, feature docs
- [ ] Check Mermaid diagrams for staleness
- [ ] Identify vibe-coding patterns
- [ ] Propose specific automation fixes (skills, MCP servers, hooks, commands)
- [ ] Update any affected skill files
