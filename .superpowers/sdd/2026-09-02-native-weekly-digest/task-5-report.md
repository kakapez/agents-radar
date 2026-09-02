# Task 5 Report

## Status

Complete.

## Changes

- Updated `/D:/github/monitoring/agents-radar/.claude/worktrees/native-weekly-digest/.github/workflows/daily-digest.yml` to:
  - use the visible workflow name `Weekly Agents Radar`;
  - schedule only on Sunday at 23:00 UTC with `cron: "0 23 * * 0"`;
  - retain `workflow_dispatch`;
  - rename the concurrency group to `weekly-digest` and update concurrency comments;
  - update guard step labels/messages and digest commit/action labels to weekly semantics;
  - preserve permissions, provider/API secret environment names, and all digest, manifest/feed, Pages deployment, notification, and stale-issue steps.
- Deleted the obsolete `/D:/github/monitoring/agents-radar/.claude/worktrees/native-weekly-digest/.github/workflows/weekly-digest.yml` and `monthly-digest.yml` entry points.
- Added `/D:/github/monitoring/agents-radar/.claude/worktrees/native-weekly-digest/src/__tests__/workflow.test.ts`, which deterministically verifies the weekly cron, manual dispatch, weekly workflow/concurrency semantics, publication steps, absent obsolete workflow files, and absence of `pnpm weekly`/`pnpm monthly` in remaining workflows.

## Validation

- Focused workflow test: passed (3 tests).
- `pnpm typecheck`: passed.
- `pnpm lint`: passed.
- `pnpm format:check`: passed.
- `pnpm test`: 17 test files / 268 tests passed; 3 pre-existing Windows path-separator failures in `src/__tests__/report.test.ts` (`saveFile` expects POSIX `/` paths but receives Windows `\\` paths). The new workflow test passed as part of the suite.
- Static search under `.github`, `package.json`, and `src`: the only active weekly cron is in `daily-digest.yml`; no active workflow invokes `pnpm weekly` or `pnpm monthly`, and deleted workflow paths are absent. Matches in the new test are intentional assertions.

## Concerns

The full suite remains non-zero on Windows because of the existing platform-sensitive `saveFile` path assertions; this task did not alter that code. No secrets or secret values were changed or printed.
