# Installing productforge for OpenCode

## Prerequisites

- [OpenCode.ai](https://opencode.ai) installed

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

Restart OpenCode. The plugin auto-installs via Bun, registers all skills, and deploys the `/forge` command and `@forge` subagent automatically.

## Usage

All you need: **`/forge <your premise>`** — it handles the rest.

- `/forge build a second brain`
- `/forge add dark mode to our app`
- `/forge refactor the auth module`

Or invoke skills manually via the `skill` tool if you prefer granular control:

- `forge` — Orchestrates the full lifecycle automatically
- `project-initialization` — Scaffold docs structure
- `ideate` — Refine rough ideas into clear designs
- `user-researcher` — Market + user sentiment research
- `architect` — Decision ADRs + continuity + deployability
- `retrospective` — Learn and automate on commit/compaction
