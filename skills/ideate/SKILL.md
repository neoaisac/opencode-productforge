---
name: ideate
description: "Refine rough ideas into clear designs through interactive, autonomy-scalable dialogue. Replaces brainstorming — more collaborative, with user-selectable autonomy levels."
---

# Ideate — Collaborative Idea Refinement

Transform rough ideas into clear designs and specs. The user may choose their preferred autonomy level, but ideate defaults to **Drive mode (full autonomy)** and always produces a concrete design document.

<HARD-GATE>
Do NOT invoke any implementation skill, write any code, or take any implementation action until you have presented a design and the user has approved it.
</HARD-GATE>

## Autonomy Levels

| Level | Name | Behavior |
|---|---|---|
| 1 | Drive | Full autonomy. Execute end-to-end without pausing. Present final spec only. |
| 2 | Guided | Move fast on clear decisions. Pause when there is conflict, ambiguity, or no clear winner. |
| 3 | Collaborate | Full design partnership. Present everything, discuss together, co-create. |

**Default: Drive (Level 1).** Proceed immediately with drafting the design. If the user interjects, adapt to their preferred level.

## Process

Create a todo for each phase and mark complete as you go.

### Phase 0: Start

Announce: "I'll draft an initial design for this in Drive mode. If you'd like a different level of collaboration (Guided or Collaborate), just let me know — otherwise I'll proceed."

Reflect back your understanding of the premise: "Here is what I understand — [premise summary]." If the user corrects you, update and proceed. Do NOT wait — move to Phase 1 within the same message.

### Phase 1: Discover

- [ ] **Clarify the idea** — Ask 2-3 questions in a single batch if anything is ambiguous: purpose, constraints, success criteria, audience, integration points. Present them concisely and proceed.
- [ ] **Research technical landscape** — Use `websearch` to find relevant patterns, existing solutions, and potential pitfalls. "I found X and Y — here is what matters for our approach."
- [ ] **Scope check** — If the request spans multiple independent subsystems, flag decomposition and suggest tackling one first.

### Phase 2: Design

- [ ] **Propose approach** — Present your recommended architecture/approach with alternatives briefly noted.
  - Architecture overview (Mermaid diagram)
  - Component breakdown
  - Data flow
  - Key design decisions with rationale
- [ ] **Identify gaps** — Scan the design for:
  - Ambiguities or missing details
  - Assumptions that need validation
  - Integration points or dependencies not yet addressed
  - Open questions requiring user input

### Phase 3: Document

- [ ] **Write design doc** — Save to `docs/features/<topic>-design.md` with:
  - Premise
  - Design decisions (with rationale)
  - Architecture approach / Mermaid diagram
  - Component breakdown
  - Data flow
  - Open questions and gaps

- [ ] **Self-review** — Scan for placeholders, contradictions, ambiguity. Fix inline.

### Phase 4: Return

- [ ] **Present the output** — Summarize the design and key decisions. List the open questions and gaps found.
- [ ] **Hand off** — Return control to the forge orchestrator. The forge passes the design doc to the architect skill for PRD creation.

## Design Principles

- **Autonomy is a slider, not a mode switch.** Even in Drive mode, if the user interjects, adapt. Even in Collaborate mode, move fast on obvious decisions.
- **Default to Drive.** Produce a complete design before waiting for feedback.
- **YAGNI ruthlessly.** Remove unnecessary features from all designs.
- **Be flexible.** Go back and clarify when something does not make sense.

## Relationship to Forge

Ideate runs in the Discover phase. The forge orchestrator invokes this skill and receives the design doc at `docs/features/<topic>-design.md` for the architect to consume when writing the PRD.

Ideate runs in parallel with user-researcher (market analysis). They cover different angles — ideate on technical design, user-researcher on market fit.
