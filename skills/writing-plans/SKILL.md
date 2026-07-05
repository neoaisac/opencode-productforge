---
name: writing-plans
description: Use when you have a PRD + ADRs and need an implementation plan with bite-sized tasks
---

# Writing Plans

Given a PRD, ADRs, and user research, produce a concrete implementation plan broken into independent tasks suitable for subagent dispatch.

## Context

The forge orchestrator has already completed ideation, user research, and architecture (ADRs + PRD). You are called during **Phase 3: Plan** to decompose the PRD into executable tasks. You have access to:
- `docs/prds/YYYY-MM-DD-feature-name.md` — the PRD with scope, architecture, data model, requirements
- `docs/adrs/` — architecture decisions
- `docs/ux/` or user research output if available

## Output

Save the plan to `docs/plans/YYYY-MM-DD-feature-name.md`

## Process

### 1. Review Inputs

Read the PRD and all ADRs. Identify the core subsystems, integration points, and dependencies between components.

### 2. Decompose Into Tasks

Break the feature into independent tasks. Each task should produce a self-contained, testable change. Tasks that depend on each other must be ordered correctly.

**Task right-sizing:** A task is the smallest unit that carries its own test cycle. Fold setup, configuration, and scaffolding steps into the task whose deliverable needs them. Split only where a reviewer could meaningfully reject one task while approving its neighbor.

### 3. Write Plan

Use this format:

```markdown
# [Feature Name] Implementation Plan

**Goal:** [One sentence]

**Architecture:** [2-3 sentences]

**Prerequisites:** [Any prior tasks or context needed]

---

### Task 1: [Component Name]

**Files:**
- Create: `path/to/new/file.ext`
- Modify: `path/to/existing/file.ext`
- Test: `tests/path/to/test_file.ext`

**Depends on:** [Task N or "None"]

**Interfaces:**
- Consumes: [what this task uses from earlier tasks]
- Produces: [what later tasks rely on — exact function names, types]

- [ ] **Step 1: Write the failing test**
  ```python
  def test_behavior():
      result = function(input)
      assert result == expected
  ```

- [ ] **Step 2: Run test to verify it fails**
  Command: `pytest tests/path/test_file.py::test_name -v`
  Expected: FAIL

- [ ] **Step 3: Write minimal implementation**
  ```python
  def function(input):
      return expected
  ```

- [ ] **Step 4: Run test to verify it passes**
  Command: `pytest tests/path/test_file.py::test_name -v`
  Expected: PASS

- [ ] **Step 5: Commit**
  ```bash
  git add -A
  git commit -m "feat: add component name"
  ```
```

Repeat for each task. Every task must include exact file paths, complete code, exact test commands, and expected output.

### 4. Self-Review

Check the plan against the PRD:
- Does every PRD requirement have a task? List any gaps.
- Are there placeholder patterns ("TBD", "TODO", "fill in details", "add appropriate handling")? Fix them.
- Are type signatures, function names, and property names consistent across tasks?

Fix issues inline. No re-review needed.

## Execution Handoff

After saving the plan, hand off to `subagent-driven-development` for execution.

## Key Rules

- Exact file paths always
- Complete code in every step
- Exact commands with expected output
- TDD: red → green → refactor per task
- DRY, YAGNI, frequent commits
