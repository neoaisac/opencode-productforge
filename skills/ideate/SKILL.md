---
name: ideate
description: "Refine rough ideas into clear designs through interactive, autonomy-scalable dialogue. Replaces brainstorming — more collaborative, with user-selectable autonomy levels."
---

# Ideate — Collaborative Idea Refinement

Transform rough ideas into clear designs and specs through collaborative dialogue. The user selects their preferred autonomy level first, then the entire process adapts to match.

<HARD-GATE>
Do NOT invoke any implementation skill, write any code, or take any implementation action until you have presented a design and the user has approved it.
</HARD-GATE>

## Autonomy Levels

The very first thing ideate does is ask the user how they want to work together:

| Level | Name | Behavior |
|---|---|---|
| 1 | Drive | Full autonomy. Execute end-to-end without pausing. Present final spec only. |
| 2 | Guided | Move fast on clear decisions. Pause when there is conflict, ambiguity, or no clear winner. |
| 3 | Collaborate | Full design partnership. Present everything, discuss together, co-create. |

Default to **Level 2 (Guided)** if the user does not express a strong preference.

## Process

Create a todo for each item. Adapt depth/frequency of check-ins based on autonomy level.

### Phase 0: Choose Autonomy Level

Start every ideate session by presenting the three levels:

> "Before we dive in, how would you like to work together on this?
> 
> **1. Drive** — I will run the full ideation end-to-end autonomously. I will ask a few upfront questions, then go design and write the spec. You will see the final output.
> **2. Guided** (recommended) — I will move fast on clear decisions but loop you in when there is conflict, ambiguity, or no clear winner.
> **3. Collaborate** — Full design partnership. We discuss everything together, sketch ideas, co-create step by step.
> 
> Which feels right for this one?"

Wait for the response before proceeding.

### Phase 1: Orient

- [ ] **Warm-up reflection** — Reflect back your understanding of the premise: "Here is what I am hearing — did I capture that?" Wait for confirmation before proceeding.
- [ ] **Offer visual companion proactively** — "This session might benefit from having a browser tab for sketches and diagrams as we go. Want me to open one?" Offer once, accept or decline, then proceed.
- [ ] **Explore project context** — Check files, docs, recent commits. Share relevant findings conversationally.

### Phase 2: Discover

- [ ] **Clarify the idea** through dialogue, adapted to autonomy level:
  - **Drive**: Ask 2-3 questions in a batch, then move on.
  - **Guided**: Ask questions one at a time. After 2-3, check in: "Am I going in a useful direction?"
  - **Collaborate**: Frame each question as a discussion. After each answer, reflect and explore before asking the next.

  Focus on: purpose, constraints, success criteria, audience, integration points.

- [ ] **Research technical landscape** — Look for relevant patterns, existing solutions, potential pitfalls. Share findings proportional to mode:
  - **Drive**: "I found X and Y patterns. Here is what matters for our approach."
  - **Guided**: "Found X and Y. Z is interesting but I am unsure of fit — what do you think?"
  - **Collaborate**: Walk through findings together, let the user react to each one.

- [ ] **Scope check** — If the request spans multiple independent subsystems, flag decomposition. Help the user decide what to tackle first. Otherwise proceed.

### Phase 3: Design

- [ ] **Explore directions** — Propose approaches adapted to mode:
  - **Drive**: Present your recommended approach with alternatives briefly noted. Move to design.
  - **Guided**: Present 2-3 approaches. Flag which has a clear winner and which needs input. Ask only on the unclear ones.
  - **Collaborate**: "What directions come to mind for you? Here is what I am seeing..." Build the option set together, then decide.

- [ ] **Present design** — Cover: architecture, components, data flow, error handling, testing.
  - **Drive**: Full design presented at once.
  - **Guided**: Present sections. Flag straightforward sections as proceeding. Pause on ambiguous ones.
  - **Collaborate**: One section at a time. "What do you think of this part?" Wait for reaction.

- [ ] **Synthesis pause** (Guided + Collaborate only) — Before writing the spec, summarize everything decided: "Here is what we have settled on together — [summary]. Anything we missed or want to change?"

  Drive mode: the written spec IS the synthesis.

### Phase 4: Document

- [ ] **Write design doc** — Save to docs/features/<topic>-ideation.md with:
  - Premise
  - Design decisions (with rationale)
  - Architecture approach / Mermaid diagram
  - Component breakdown
  - Data flow
  - Open questions (if any)

  Format so the architect skill can consume it as input when writing the PRD.

- [ ] **Self-review** — Scan for placeholders, contradictions, ambiguity. Fix inline.
- [ ] **User review** — Present the spec: "Ideation written to <path>. Please review." Wait for approval or changes.

### Phase 5: Return

- [ ] **Hand off** — Confirm the completed ideation is ready. Return control to the forge orchestrator, which passes the ideation doc to the architect skill for PRD creation.

## Design Principles

- **Autonomy is a slider, not a mode switch.** Even in Drive mode, if the user interjects, adapt. Even in Collaborate mode, move fast on obvious decisions.
- **One question at a time in collaborative modes.** Do not overwhelm.
- **YAGNI ruthlessly.** Remove unnecessary features from all designs.
- **Be flexible.** Go back and clarify when something does not make sense.
- **Visual companion:** Use for architecture diagrams, layout sketches, comparison boards. In Collaborate mode, use it extensively. In Drive mode, only for complex diagrams.

## Relationship to Forge

Ideate replaces the rainstorming skill in the AIPDLC lifecycle. The forge orchestrator invokes this skill during the Discover phase. The output at docs/features/<topic>-ideation.md is consumed by the architect skill when writing the PRD.

Ideate runs in parallel with user-researcher (market analysis). They cover different angles — ideate on technical design, user-researcher on market fit.
