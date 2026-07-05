# Skill: Project Initialization

The entry point for any new project. Scaffolds documentation structure, sets up lifecycle governance, and hands off to brainstorming.

## When to Use

Invoke this skill when starting work in any new or empty project directory. It establishes the foundation that all subsequent AIPDLC skills build on.

## What It Creates

### Phase 1 — Docs Scaffold

```
docs/
├── adrs/index.md          ← "Architecture Decision Records"
├── prds/index.md          ← "Product Requirements Documents"
├── ux/index.md            ← "Design documents + Mermaid diagrams"
├── features/index.md      ← "Current feature documentation"
└── ROADMAP.md             ← "Feature roadmap"
README.md                  ← project overview with doc table
```

### Phase 2 — Orient the User

Explain the available lifecycle skills and the workflow:

```
project-initialization (you are here)
  → brainstorming (design the first feature)
    → architect (write ADRs for every decision)
      → writing-plans (break into tasks)
        → implementation
          → retrospective (learn + automate on commit/compaction)
```

Tell the user:
- **Architect** is globally available for decision recording and continuity checking
- **Retrospective** runs on pre-commit and compaction to learn from gaps
- Design content goes into `adrs/`, `prds/`, `ux/`, `features/` — never create new top-level doc folders
- All architecture diagrams use Mermaid

### Phase 3 — First ADR

Ask what the project is about. Use the answer to create the first ADR at `docs/adrs/2026-07-04-initial-direction.md` capturing the initial scope and intent. This ensures every session has continuity from day one.

```
# Initial Direction

**Status**: Accepted

**Context**: Starting a new project: [project description].

**Decision**: Build [brief direction]. Will follow the AIPDLC lifecycle: brainstorm → design → ADRs → implement → retro.

**Consequences**: The docs scaffold is in place. First brainstorming session will refine scope.
```

### Phase 4 — Handoff

Invoke the `brainstorming` skill to continue into the design phase.

## Checklist

- [ ] Create docs structure (adrs, prds, ux, features)
- [ ] Create README.md with documentation table
- [ ] Create ROADMAP.md
- [ ] Create index.md for each docs subfolder
- [ ] Explain the workflow to the user
- [ ] Ask for project description
- [ ] Write first ADR capturing initial direction
- [ ] Hand off to brainstorming skill
