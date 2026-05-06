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
- For single-repo pages, prioritize concrete operational facts over process/status commentary.
- Treat single-repo types explicitly:
  - frontend-heavy apps: route/UX/realtime behavior.
  - backend-only services: API/job/datastore/runtime behavior.
  - shared libraries: consumer contract, compatibility boundaries, and change-impact expectations.
  - automation/ops utilities: execution flow, prerequisites, artifact outputs, and operational failure handling.
- Keep repository ordering consistent:
  - `nxt-*` first, alphabetical
  - `lorawan-*` second, alphabetical

## 5) Decision defaults

- If uncertain, ask briefly and proceed incrementally.
- Prefer reversible, low-risk edits over sweeping refactors.
- Preserve existing user-approved direction unless the user asks to change it.

## 6) Documentation lifecycle and sync workflow

- Use `docs/ops/repo-doc-sync-state.yaml` as the source of truth for repository documentation mode and sync status.
- Supported `doc_mode` values:
  - `bootstrap`: create or upgrade repository docs to checklist-defined standard compliance.
  - `maintenance`: update existing docs from source repository commit deltas since `last_synced_sha`.
- If the human gives an explicit mode in the prompt, follow the prompt mode for that run and then update state if appropriate.
- For `bootstrap` mode:
  - Prioritize structure, ownership boundaries, interfaces, runtime behavior, and integration coverage.
  - Meet evidence threshold: at least 5 concrete facts tied to source artifacts, 2 end-to-end workflows, and 3 failure/edge cases.
  - Promote to `maintenance` only after checklist quality gates and docs build pass.
- For `maintenance` mode:
  - Compare `last_synced_sha..HEAD` in the source repository.
  - Update only affected sections and avoid unrelated rewrites.
  - Advance `last_synced_sha` and `last_synced_at` after successful update.
- If `last_synced_sha` is missing in `maintenance`, stop and request clarification or set a baseline SHA before proceeding.
