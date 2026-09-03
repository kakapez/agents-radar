# Task 5 Report

## Status

Complete; review follow-up changes are intentionally uncommitted pending coordinator confirmation.

## Changes

- Updated `/D:/github/monitoring/agents-radar/.claude/worktrees/native-weekly-digest/.github/workflows/daily-digest.yml` to:
  - use the visible workflow name `Weekly Agents Radar`;
  - schedule only on Sunday at 23:00 UTC with `cron: "0 23 * * 0"`;
  - retain `workflow_dispatch`;
  - rename the concurrency group to `weekly-digest` and update concurrency comments;
  - update guard step labels/messages and digest commit/action labels to weekly semantics;
  - preserve permissions, provider/API secret environment names, and all digest, manifest/feed, Pages deployment, notification, and stale-issue steps.
- Deleted the obsolete `/D:/github/monitoring/agents-radar/.claude/worktrees/native-weekly-digest/.github/workflows/weekly-digest.yml` and `monthly-digest.yml` entry points.
- Added `/D:/github/monitoring/agents-radar/.claude/worktrees/native-weekly-digest/src/__tests__/workflow.test.ts`, which parses the workflow with `js-yaml` JSON_SCHEMA and verifies the sole weekly cron, manual dispatch, permissions, weekly concurrency, provider environment contract, publication steps, absent obsolete workflow files, and absence of `pnpm weekly`/`pnpm monthly` in remaining workflows.
- Changed the report key in `/D:/github/monitoring/agents-radar/.claude/worktrees/native-weekly-digest/src/date.ts` and `src/index.ts` to the Monday CST date via `toCstWeekStartDateStr`. The workflow guard computes the same Monday key, preventing delayed runs from creating duplicate reports later in the same week while retaining manual-run escape hatch behavior.

## Validation

- Focused workflow/date tests: passed (12 tests).
- `pnpm typecheck`: passed after review changes.
- `pnpm lint`: passed after review changes.
- `pnpm format:check`: passed after formatting the strengthened workflow test.
- `pnpm test`: 17 test files / 268 tests passed; 3 pre-existing Windows path-separator failures in `src/__tests__/report.test.ts` (`saveFile` expects POSIX `/` paths but receives Windows `\\` paths). The new workflow test passed as part of the suite.
- Static search under `.github`, `package.json`, and `src`: the only active weekly cron is in `daily-digest.yml`; no active workflow invokes `pnpm weekly` or `pnpm monthly`, and deleted workflow paths are absent. Matches in the new test are intentional assertions.

## Concerns

The full suite remains non-zero on Windows because of the existing platform-sensitive `saveFile` path assertions; this task did not alter that code. No secrets or secret values were changed or printed.
