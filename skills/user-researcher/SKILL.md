# Skill: User Researcher

Given a feature or product area, researches industry-leading systems and synthesizes user sentiment into actionable product requirements.

## When to Use

Invoke after ideate identifies a feature area but before ANY design or implementation work. The output feeds directly into the Architect (ADRs) and Writing-Plans (implementation tasks).

## Process

### Phase 1 — Discover Industry Landscape

Search for:
- Leading systems/products in this space ("best [domain] tools 2026", "[domain] software comparison")
- Open-source and commercial alternatives
- How each system implements the core feature

Use web search extensively. Cover at least 3-5 systems.

For each system, document:
- Name, category (open-source/commercial/hybrid)
- How they implement the feature
- Key differentiators

### Phase 2 — Research User Sentiment

For each leading system, research what *real users* say:
- Reddit: search "[system name] sucks", "[system name] problems", "why I stopped using [system]"
- GitHub issues: filter by "enhancement" or "feature" labels, sort by most reactions
- Reviews: G2, Product Hunt, Hacker News comments
- Wishes: "what I wish [system] did", "[domain] wishlist"

Synthesize findings into raw sentiment data — not conclusions yet.

### Phase 3 — Categorize Into 4 Levels

Return findings structured as:

#### 1. Disruptive Features

Genuinely new opportunities. These can be:
- Something entirely new no one has done
- A combination of existing features that hasn't been tried together
- An evolution of something that exists but nobody has cracked well yet
- A novel approach to a known pain point

*For each: explain what it is, why it's disruptive, and which leading systems (if any) partially address it.*

#### 2. Must-Haves

Table stakes. Features users assume will be there. The product is subpar without them.
- These are expected by everyone who evaluates the product
- Not including them creates an immediate negative first impression
- Often the reason users switch away from incomplete tools

*For each: explain what it is and which systems implement it well (with links/patterns).*

#### 3. Nice-to-Haves

Features people like and use, but are non-essential:
- Useful in specific scenarios but not daily drivers for most users
- Niche use cases that a subset of power users love
- Quality-of-life improvements that delight but don't block adoption

*For each: explain what it is, who uses it, and priority level within this category.*

#### 4. No-Gos

Things to actively avoid:
- Features users hate in existing tools (even if they're widely implemented)
- Patterns that were tried and superseded by better approaches
- Industry-standard features that users are actively wishing to replace
- Anti-patterns that create maintenance burden without proportional value

*For each: explain what it is, why to avoid it, and what users wish existed instead.*

### Phase 4 — Deliver

Present findings as structured Markdown suitable for:
- The Architect to write ADRs about tech decisions
- The PRD to define scope
- The Writing-Plans skill to create implementation tasks

## Output Format

```markdown
# User Research: [Feature Name]

## Industry Landscape
| System | Approach | Key Differentiator |
|---|---|---|
| System A | ... | ... |
| System B | ... | ... |

## User Sentiment Summary
[Key themes from research]

## Feature Prioritization

### Disruptive
1. [Feature] — [why]

### Must-Haves
1. [Feature] — [reference implementations]

### Nice-to-Haves
1. [Feature] — [who benefits]

### No-Gos
1. [Pattern] — [what to do instead]
```

## Checklist

- [ ] Search for industry-leading systems (3-5 minimum)
- [ ] Research user sentiment for each system
- [ ] Identify disruptive opportunities
- [ ] Identify must-have features
- [ ] Identify nice-to-have features
- [ ] Identify no-go patterns
- [ ] Deliver structured findings
- [ ] Hand off to Architect + ideate for next steps
