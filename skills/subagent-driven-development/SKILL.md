---
name: subagent-driven-development
description: Use when executing implementation plans — dispatches a subagent per task with per-task review and final code review
---

# Subagent-Driven Development

Execute an implementation plan by dispatching a fresh subagent per task, reviewing each task for spec compliance and code quality, and running a final whole-branch review at the end.

## Core Principle

Fresh subagent per task + task review (spec + quality) + final review = high quality, fast iteration.

## When to Use

- You have a written implementation plan (from `writing-plans`)
- Tasks are mostly independent
- You want to stay in the current session

## Process

### 0. Pre-Flight

Read the plan file. Create todos for all tasks. Record the current git HEAD as BASE.

### 1. Per-Task Loop

For each task in the plan:

**a. Dispatch implementer subagent**

Use the `task` tool with `subagent_type: "general"`. Include in the prompt:
- The task's full description (copied from the plan)
- Which files to create/modify and their purpose
- The interfaces it consumes and produces
- A report template: after completing, the subagent returns DONE (with commit SHA and test results), NEEDS_CONTEXT, or BLOCKED

**b. Handle implementer response**

- **DONE**: Proceed to review
- **DONE_WITH_CONCERNS**: Read concerns. Address correctness issues before review; note observations and proceed.
- **NEEDS_CONTEXT**: Provide missing context and re-dispatch
- **BLOCKED**: Assess why. If context issue, re-dispatch. If task is too complex, break it down. If plan is wrong, escalate.

**c. Task review**

Dispatch a reviewer subagent via `task` tool. Provide:
- The task description and requirements
- The diff: `git log --oneline`, `git diff --stat`, and `git diff -U10` for the task's commits
- The reviewer reports on: spec compliance (all requirements met, nothing extra) and code quality (test coverage, edge cases, naming, structure)

Review verdict must include BOTH spec compliance (✅/❌) and task quality (Approved/Needs fixes).

**d. Handle review findings**

- **Spec ❌ or quality not approved**: Dispatch a fix subagent with all findings. Re-review after fixes. Loop until clean.
- **⚠️ Cannot verify from diff**: You resolve these yourself using cross-task context. If a real gap, send back to implementer.
- **All clean**: Mark task complete.

### 2. Final Code Review

After all tasks complete, dispatch a final code reviewer using `requesting-code-review`. Provide the branch-wide diff (from BASE to HEAD). Fix any Critical or Important findings.

### 3. Handoff

Return control to the forge orchestrator for Phase 6 (Learn / retrospective).

## Important Rules

- Do not start implementation on main/master without explicit consent
- Do not skip task review
- Do not proceed with unfixed Critical or Important issues
- Do not dispatch multiple implementation subagents in parallel (causes conflicts)
- Do not let the implementer's self-review replace the actual review
- If a subagent asks questions, answer before they proceed
- Record BASE before dispatching the first implementer

## Integration

- Created by: `writing-plans`
- Final review: `requesting-code-review`
- Called by: `forge` (Phase 5: Build)
