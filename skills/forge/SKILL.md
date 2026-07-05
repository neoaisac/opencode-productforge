---
name: forge
description: "USE THIS FIRST on any new project or feature request. The top-level orchestrator that runs the full AIPDLC lifecycle: discover, design, plan, gate, build, learn."
---

# Forge — ProjectLifecycle Orchestrator

Given a premise (project idea, feature request, problem statement), runs the full AIPDLC lifecycle by invoking the appropriate skills and agents in sequence. This is the single entry point — you do not need to invoke other skills manually.

## The Lifecycle

```mermaid
flowchart LR
    P[Premise] --> D[Discover]
    D --> D2[Design]
    D2 --> P2[Plan]
    P2 --> G[Gate<br>User Approves]
    G --> B[Build]
    G -->|Iterate| D2
    B --> L[Learn]
    L -->|Next feature| P

    subgraph D[Discover]
        Init["project-initialization<br>Docs scaffold"]
        ID["ideate<br>Design premise + spec"]
        UR["user-researcher<br>Market + sentiment"]
    end

    subgraph D2[Design]
        Arch["architect<br>ADRs + diagrams"]
    end

    subgraph P2[Plan]
        WP["writing-plans<br>Implementation tasks"]
    end

    subgraph B[Build]
        Exec["subagent-driven-development<br>or executing-plans"]
    end

    subgraph L[Learn]
        Retro["retrospective<br>Gaps + automation"]
    end
```

## When to Use

**Invoke this skill FIRST** whenever someone says:
- "I want to build X"
- "We need to add Y feature"
- "Let's start a new project"
- Any project scaffolding, design, or implementation request

Do NOT manually invoke project-initialization, ideate, user-researcher, architect, or writing-plans — those are called by this orchestrator as needed.

## Process

Follow these phases in order. Create a todo for each phase and mark complete as you go.

### Phase 1: Discover

- [ ] **If no docs structure exists**, invoke `project-initialization` to scaffold it
- [ ] **Invoke `ideate`** to refine the premise into a clear design. Follow its full process: choose autonomy level → orient → discover → design → document → hand off. Ideate writes to `docs/features/<topic>-ideation.md`.
- [ ] **Invoke `user-researcher`** to research the feature area. Provide the approved design direction as context. Wait for the 4-level categorization (disruptive, must-haves, nice-to-haves, no-gos).

### Phase 2: Design

- [ ] **Invoke `architect`** to write ADRs for all technology and architecture decisions made during ideate + research. Ensure Mermaid diagrams are added to the PRD.
- [ ] **Write the PRD** at `docs/prds/YYYY-MM-DD-feature-name.md` consolidating: scope, architecture diagram, data model, functional requirements, non-functional requirements.

### Phase 3: Plan

- [ ] **Invoke `writing-plans`** to produce an implementation plan at `docs/plans/YYYY-MM-DD-feature-name.md` with bite-sized tasks.

### Phase 4: Decision Gate

- [ ] **Present the full picture to the user:**
  1. ADRs written (what was decided and why)
  2. PRD (feature scope)
  3. Implementation plan (tasks)
  4. User research findings (market context)

- [ ] **Ask**: "Ready to proceed with implementation? Yes / No / Iterate on X"

  - **Yes** → proceed to Phase 5
  - **No** → go back to the relevant phase and loop
  - **Iterate on X** → refine the specific deliverable, then return to gate

### Phase 5: Build

- [ ] **Invoke `subagent-driven-development`** (recommended) or `executing-plans` to execute the plan. Follow the chosen skill's process exactly.

### Phase 6: Learn

- [ ] **Invoke `retrospective`** to identify gaps, update docs, and propose automation improvements.

Then present a summary of what was built, what was learned, and what automation was added.

## Key Principles

- **Single entry point**: The user only invokes `forge`. Do not make them orchestrate skills manually.
- **Follow each skill exactly**: When you invoke ideate, follow its full process. Same for all others.
- **Gate before build**: Never proceed to implementation without explicit user approval at the gate.
- **Parallel where possible**: User-researcher can run concurrently with ideate's research phase if they cover different ground.
- **Failures → retrospective**: If a skill's output is rejected at the gate, note the pattern for the retrospective.
