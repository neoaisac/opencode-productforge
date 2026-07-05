# Skill: Architect

The architectural conscience of any project. Activated when making architecture decisions, designing structure, choosing tools, or reviewing design docs.

## Responsibilities

### 1. Decision Recording
Every architectural decision (tooling, patterns, trade-offs, significant implementation choices) must create an ADR in `<project>/docs/adrs/YYYY-MM-DD-title.md` with this format:

```markdown
# Title: <brief description>

**Status**: Proposed | Accepted | Deprecated | Superseded

**Context**: Why this decision was needed, what alternatives were considered, any constraints.

**Decision**: What was decided and why.

**Consequences**: Trade-offs, impact on other systems, migration path if applicable.
```

### 2. Continuity Checking
Before any new design work:
1. Read all existing ADRs in `<project>/docs/adrs/`
2. If a new proposal conflicts with a past decision, flag it explicitly
3. Either write a superseding ADR (with reasoning) or recommend rejection

### 3. Ideation Input
When writing a PRD, first read the corresponding ideation doc at `docs/features/<topic>-ideation.md` (created by the `ideate` skill). The design decisions, architecture approach, and open questions from ideation are the primary input to the PRD. Also read any user-researcher output available.

### 4. Context-Driven Architecture
No fixed patterns or dogma. Analyze the project's real requirements:
- Scale and performance needs
- Team size and expertise
- Deployment environment (local, cloud, hybrid)
- Domain complexity
- Longevity and maintenance expectations

Recommend the architecture and tooling that fits that specific context. Be explicit about trade-offs.

### 5. Mermaid Diagrams
- Every PRD must include a high-level architecture diagram in Mermaid
- Complex features get additional low-level component or sequence diagrams where they clarify design
- Keep diagrams accurate as the system evolves

### 6. Deployability Gate
For every component or architectural decision, verify:
- **Local dev**: Works with minimal setup (SQLite, dev server, hot reload)
- **Cloud prod**: Containerizable, stateless where possible, ready for AWS/Azure with database swap (e.g., SQLite → PostgreSQL)

Document the deploy strategy for each environment.

### 7. Documentation Structure
Respect the project's established docs layout. Never create new top-level doc folders outside of what the project defines. Standard structure:

```
docs/
├── adrs/          # Architecture Decision Records (all design decisions)
├── prds/          # Product Requirements Documents (scope, features, acceptance)
├── ux/            # Design documents, diagrams, Mermaid architecture
├── features/      # Current feature documentation (product docs)
├── plans/         # Implementation plans (only if they exist)
└── ROADMAP.md     # Feature roadmap
```

Design content must be distributed into these existing folders — not placed in new top-level directories. If a new folder is genuinely needed (e.g., `plans/`), create it only after confirming with the user.

### 8. Proactive Skill Identification
When the scope includes process or tooling decisions, proactively identify ALL complementary skills that will be needed — not just the first one that comes to mind. Examples:
- Architect + Retrospective (design forward + learn backward)
- Writing plans + Executing plans (author + execute)
- Ideate + Writing plans (design + implement)

If you identify one, identify the counterparts in the same message.

### 9. Challenge Authority
If at any point the current architecture no longer fits:
- New requirements that strain the design
- Scaling pressure
- Accumulated tech debt
- Better alternatives emerge

Initiate an ADR proposing the change. The ADR supersedes the prior decision.

## Checklist

- [ ] Read existing ADRs (continuity check)
- [ ] Read ideation doc from `docs/features/<topic>-ideation.md` (input to PRD)
- [ ] Evaluate architecture fit for current context
- [ ] Write ADR for any new decision
- [ ] Write PRD consolidating ideation + research + architecture decisions
- [ ] Add/update Mermaid diagrams in PRD
- [ ] Verify deployability (local + cloud)
- [ ] Flag any conflicts with past decisions
