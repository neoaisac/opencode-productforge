# productforge — AI-Powered Project Lifecycle for OpenCode

Initialize, govern, and learn from every project with a repeatable lifecycle.

**Start every project or feature by invoking `forge`** — it orchestrates the full lifecycle automatically.

## Skills

| Skill | Purpose |
|---|---|
| **forge** | **START HERE.** Orchestrates the full lifecycle: discover → design → plan → gate → build → learn |
| **project-initialization** | Scaffold a new project with docs structure, ADR workflow, and lifecycle governance |
| **ideate** | Refine rough ideas into clear designs with 3 autonomy levels: Drive (full auto), Guided (ask on conflict), Collaborate (co-create) |
| **user-researcher** | Research industry-leading systems and user sentiment for any feature, categorized by priority |
| **architect** | Record every architectural decision, enforce continuity, verify deployability |
| **retrospective** | Learn from vibe-coding loops, keep docs current, propose automation |

## Workflow

```mermaid
flowchart TB
    CMD["/forge &lt;premise&gt;"] --> AGT["@forge subagent"]
    AGT -->|"phase 1: parallel dispatch"| ID["ideate task"]
    AGT -->|"phase 1: parallel dispatch"| UR["user-researcher task"]
    ID --> D2[Design]
    UR --> D2
    D2 --> P2[Plan]
    P2 --> G[Gate<br>User Approves]
    G --> B[Build]
    G -->|Iterate| D2
    B --> L[Learn]
    L -->|Next feature| P

    subgraph P[Premise]
        P1["$ARGUMENTS"]
    end

    subgraph D2[Design]
        Arch["architect task"]
    end

    subgraph P2[Plan]
        WP["writing-plans task"]
    end

    subgraph B[Build]
        Exec["subagent-driven-development task"]
    end

    subgraph L[Learn]
        Retro["retrospective task"]
    end
```

## Installation

Add productforge to the `plugin` array in your `opencode.json` (global or project-level):

**Via git (recommended):**
```json
{
  "plugin": ["opencode-productforge@git+https://github.com/neoaisac/opencode-productforge.git"]
}
```

**Via local path (development):**
```json
{
  "plugin": ["<path-to-cloned-repo>"]
}
```

**Via npm (once published):**
```json
{
  "plugin": ["opencode-productforge"]
}
```

Restart OpenCode. The plugin auto-installs via Bun, registers all skills, and deploys the `/forge` command and `@forge` subagent.

### Use it

```
/forge build a second brain
```

That's it. Here's what happens:

```
/forge build a second brain
  │
  ▼
forge.md (command) ── passes premise to ──► forge.md (subagent)
                                               │
                            ┌──────────────────┼──────────────────┐
                            ▼                  ▼                   ▼
                    ideate task        user-researcher      (Phase 1)
                    (design doc)       (market research)     parallel
                            │                  │
                            └──────┬───────────┘
                                   ▼
                            architect task          (Phase 2)
                            (ADRs + PRD)
                                   │
                                   ▼
                            writing-plans task      (Phase 3)
                            (implementation plan)
                                   │
                                   ▼
                              [GATE]                (Phase 4)
                            you approve?
                            ├─ Yes → Build
                            ├─ No  → stop
                            └─ Iterate → refine
                                   │
                                   ▼
                    subagent-driven-development    (Phase 5)
                    (one subagent per task)
                                   │
                                   ▼
                            retrospective           (Phase 6)
                            (automate gaps)
```

No other skills to remember — `/forge` is the sole entry point.

### 4. How it works

The forge orchestrator runs the full lifecycle autonomously. Each phase dispatches a fresh subagent that loads the relevant skill and executes its process. You only interact at the **Gate** (Phase 4), where you approve the design, request iterations, or stop.

- **Phase 1-3** — fully autonomous research, design, and planning
- **Phase 4 (Gate)** — you review ADRs, PRD, and plan; decide next steps
- **Phase 5-6** — autonomous build and retrospective

## License

MIT
