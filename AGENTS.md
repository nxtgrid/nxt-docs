# Agent Collaboration Contract (Tool-Agnostic)

This file defines how AI agents/models should collaborate in this repository, independent of platform (CLI, IDE, cloud, etc.).

## 1) Working style

- Start with a short plan and explicit step-by-step TODOs before making code changes.
- Prefer answering, clarifying, and proposing options first; do not jump into coding unless the user asks to proceed.
- Work in small, incremental slices with clear boundaries and review checkpoints.
- After each slice, summarize what changed and what to verify next.

## 2) Review and commits

- The human user is the sole committer.
- Do not create commits unless explicitly requested by the user.
- Do not push unless explicitly requested by the user.
- Keep diffs focused and avoid bundling unrelated changes.

## 3) Project direction

- This repository is the documentation hub for the NXT open-source suite.
- Use "NXT" as the product/suite name in documentation copy.
- Keep technical GitHub identifiers (`nxtgrid/...`) unchanged where required.
- Prefer practical, system-oriented documentation over boilerplate setup content.

## 4) Documentation conventions

- Prefer concise pages with clear structure over long narrative docs.
- Expand documentation breadth-first across repositories before deep-diving one repository, unless the user requests otherwise.
- For monorepos, use parent pages with nested component subpages.
- For one-app-one-repo projects, keep one baseline page each.
- Keep repository ordering consistent:
  - `nxt-*` first, alphabetical
  - `lorawan-*` second, alphabetical

## 5) Decision defaults

- If uncertain, ask briefly and proceed incrementally.
- Prefer reversible, low-risk edits over sweeping refactors.
- Preserve existing user-approved direction unless the user asks to change it.
