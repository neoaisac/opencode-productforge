# Installing ProjectForge for OpenCode

## Prerequisites

- [OpenCode.ai](https://opencode.ai) installed

## Installation

### Plugin

Add ProjectForge to the `plugin` array in your `opencode.json` (global or project-level):

**Via git (recommended):**
```json
{
  "plugin": ["projectforge@git+https://github.com/isaac/opencode-projectforge.git"]
}
```

**Via local clone (development):**
```json
{
  "plugin": ["<path-to-cloned-repo>"]
}
```

Restart OpenCode. The plugin installs through OpenCode's plugin manager and registers all skills.

### Forge agent + command (one-time)

```powershell
# Windows
copy install\forge-agent.md "$env:USERPROFILE\.config\opencode\agents\forge.md"
copy install\forge-command.md "$env:USERPROFILE\.config\opencode\commands\forge.md"
```

```bash
# macOS / Linux
cp install/forge-agent.md ~/.config/opencode/agents/forge.md
cp install/forge-command.md ~/.config/opencode/commands/forge.md
```

This gives you:
- `/forge <premise>` — slash command to start the lifecycle
- `@forge` — subagent that can also be dispatched by other agents

## Usage

All you need: **`/forge <your premise>`** — it handles the rest.

- `/forge build a second brain`
- `/forge add dark mode to our app`
- `/forge refactor the auth module`

Or invoke skills manually via the `skill` tool if you prefer granular control:

- `forge` — Orchestrates the full lifecycle automatically
- `project-initialization` — Scaffold docs structure
- `user-researcher` — Market + user sentiment research
- `architect` — Decision ADRs + continuity + deployability
- `retrospective` — Learn and automate on commit/compaction
