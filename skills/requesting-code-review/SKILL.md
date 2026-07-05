---
name: requesting-code-review
description: Use after implementation to dispatch a reviewer subagent — catches issues before they compound
---

# Requesting Code Review

Dispatch a code reviewer subagent to evaluate work against requirements. The reviewer receives focused context (diff + requirements) — never your session history.

## When to Request

- After each task in `subagent-driven-development`
- After completing a major feature
- Before merge

## How to Request

### 1. Get the diff range

```bash
BASE_SHA=<commit before changes started>
HEAD_SHA=$(git rev-parse HEAD)
```

### 2. Dispatch reviewer subagent

Use the `task` tool with `subagent_type: "general"`. Include:

**What changed:** `git log --oneline`, `git diff --stat`, and `git diff -U10 BASE_SHA..HEAD_SHA`

**What to evaluate against:**
- The task description or PRD requirements
- The plan's constraints

**Review format requested:**
```markdown
## Strengths
[What was done well]

## Issues
### Critical (fix immediately)
- [ ] Finding — with location and reasoning

### Important (fix before proceeding)
- [ ] Finding — with location and reasoning

### Minor (note for later)
- Finding — with location

## Assessment
Ready to merge / Needs fixes / Rethink approach
```

### 3. Act on feedback

- Fix Critical issues immediately via a fix subagent
- Fix Important issues before proceeding
- Note Minor issues for later
- If reviewer is wrong, push back with technical reasoning

## Integration

- Called by: `subagent-driven-development` (per-task and final review)
- Uses: `task` tool with `subagent_type: "general"` for reviewer dispatch
