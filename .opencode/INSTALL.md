# Installing ProjectForge for OpenCode

## Prerequisites

- [OpenCode.ai](https://opencode.ai) installed

## Installation

Add ProjectForge to the `plugin` array in your `opencode.json` (global or project-level):

```json
{
  "plugin": ["D:\\code\\opencode-projectforge"]
}
```

For a git-backed install (once published):

```json
{
  "plugin": ["projectforge@git+https://github.com/isaac/opencode-projectforge.git"]
}
```

Restart OpenCode. The plugin installs through OpenCode's plugin manager and registers all skills.

## Usage

Invoke skills via OpenCode's native `skill` tool:

- `project-initialization` — Start a new project with docs structure, ADR workflow, and lifecycle governance
- `architect` — Record decisions as ADRs, enforce continuity, verify deployability
- `retrospective` — Learn from vibe-coding loops, keep docs current, propose automation

## What It Replaces

ProjectForge is designed to replace the superpowers plugin. It provides a focused set of lifecycle governance skills without the broader superpowers suite.
