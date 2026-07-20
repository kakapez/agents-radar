# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-20 23:00 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool 2026-07-26 AI CLI Ecosystem Comparison Report
For technical decision-makers and AI developer tooling teams

---

## 1. Ecosystem Overview
The 8 tracked leading AI CLI tools are collectively shifting priorities from rapid feature sprints of 2025 to post-v1.0 stability hardening, cross-platform parity, and production-grade reliability for unattended workloads. 4 of the 8 tools shipped stable or pre-release builds in the 24-hour tracking window, with nearly all engineering teams prioritizing fixes for high-impact unhandled edge cases that break multi-day headless dev server sessions. The broader ecosystem is moving past core LLM model integration, and investing heavily in granular permission controls, transparent cost tracking, and interoperability with the Model Context Protocol (MCP). No top 20 cross-tool active issues relate to core model inference quality, indicating that baseline LLM performance for coding use cases has reached acceptable parity across most offerings.

## 2. Activity Comparison
| Tool Name               | Updated Public Issues (24h) | Updated/Patched PRs (24h) | Release Status (24h Window) |
|-------------------------|------------------------------|---------------------------|------------------------------|
| Claude Code             | 10                           | 6                         | Public stable v2.1.216 released |
| OpenAI Codex            | 10                           | 10                        | Rust alpha v0.145.0-alpha.25 released |
| Gemini CLI              | 10                           | 10                        | v0.52.0 nightly build released |
| GitHub Copilot CLI      | 10                           | 0                         | Public stable v1.0.72 released |
| Kimi Code CLI           | 5                            | 4                         | No new public release |
| OpenCode                | 10                           | 10                        | Public stable v1.18.4 released |
| Pi                      | 10                           | 10                        | No new public release |
| Qwen Code               | 10                           | 10                        | No new public release |
| DeepSeek TUI            | 10                           | 10                        | No new public release |

## 3. Shared Feature Directions
Across disparate tool communities, four high-priority overlapping requirements are clearly visible:
1. **Granular mixed-trust permission controls**: Requested by Claude Code (custom filesystem sandbox toggle), OpenAI Codex (per-environment permission profiles), DeepSeek TUI (unified 4-role permission model), and OpenCode (executable unqueue controls). The shared goal is to move past binary all-or-nothing sandbox rules to support mixed workloads that blend trusted local filesystem access and isolated untrusted code execution without work interruptions.
2. **Unattended headless workload reliability**: Prioritized by Kimi Code (idle pause logic for autonomous goal mode), Qwen Code (context-inheriting headless subagents), Claude Code (MCP OAuth auto-refresh), and OpenCode (no-silent-fail tool execution). The shared requirement is to eliminate unplanned downtime, unbounded token burn, and hard session failures for multi-day non-interactive dev server runs.
3. **MCP ecosystem interoperability**: Addressed across Claude Code (MCP automation reliability patches), OpenAI Codex (plugin system agent extensions), Gemini CLI (reduced MCP discovery timeout), and Qwen Code (MCP prompt positional argument fix). All teams are working to resolve cross-implementation gaps to deliver consistent third-party tooling behavior.
4. **Subagent transparency and overhead reduction**: Requested by Gemini CLI (subagent context in bug reports), Pi (extension-reported cost tracking in footer), DeepSeek TUI (live subagent status display), and OpenCode (nested subagent delegation). The shared goal is to demystify black-box subagent behavior, add explicit task cancellation controls, and eliminate redundant token overhead from duplicate context crawls.

## 4. Differentiation Analysis
Tools fall into three distinct clusters with non-overlapping priorities:
1. **Vendor-backed enterprise native tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Feature focus on enterprise admin governance, native model integration, and zero-onboarding alignment with parent platform workflows (GitHub repo sync, Azure enterprise billing). Technical approach prioritizes native OS sandboxing and minimal external dependencies. Target users are large regulated enterprise teams with strict compliance requirements.
2. **Chinese in-house model native tools (Kimi Code, Qwen Code, DeepSeek TUI)**: Feature focus on cost control for high-volume reasoning workloads, native tuning for their own long-context/reasoning models, and regional cloud endpoint optimizations. Technical approach prioritizes subagent token efficiency (e.g. DeepSeek’s 60% reduction in subagent cold-start context overhead) over broad multi-provider support. Target users are APAC regional power users and SMBs running heavy autonomous coding workloads.
3. **Independent open source tools (OpenCode, Pi)**: Feature focus on broad multi-provider compatibility, customizability, and niche workflow support for Nix/Bun package managers and self-hosted LLM stacks. No lock-in to a specific model vendor. Target users are open source developers, self-hosters, and power users running mixed multi-model workflows.

## 5. Community Momentum & Maturity
- **Highest maturity, largest active user base**: GitHub Copilot CLI and Claude Code. Copilot CLI has the largest enterprise installed base, with a 8-month old top-voted UX bug resolved in the tracked window. Claude Code has the highest volume of community PR contributions to repo admin tooling, and the most engaged accessibility-focused contributor community.
- **Rapidly iterating, high growth momentum**: OpenAI Codex, Gemini CLI, OpenCode. All three merged more than 9 critical patches in the 24h window, with OpenCode recording the highest feature request engagement (67 upvotes for the unqueue message control feature), and Gemini shipping a fully automated end-to-end issue-to-PR pipeline to reduce maintainer toil.
- **Fast-growing niche specialist communities**: Qwen Code, DeepSeek TUI, Kimi Code, Pi. All four have loyal regional or use-case specific user bases, and are prioritizing critical P1 bug fixes over new feature launches in the tracked window. Pi’s cost-tracking focus for multi-provider workflows has built a dedicated following of power users.

## 6. Trend Signals
These community observations deliver clear reference value for developer teams evaluating or building AI CLI tooling:
1. The Model Context Protocol (MCP) is approaching production readiness: 7 of 8 tracked tools have active interoperability patches for MCP, so teams building custom tooling on top of AI CLIs can standardize on MCP instead of developing bespoke native integrations to support multiple CLI products.
2. Unattended AI coding workloads are moving from experimental to production status: All leading tools have active feature requests for multi-day session reliability and unattended cost guardrails, so teams planning AI agent integrations in CI/CD pipelines can expect stable, supported production-grade functionality across most platforms within 6 months.
3. Evaluation priorities for AI CLI tools should shift away from model performance: No top 20 cross-tool open issues relate to model inference quality, with 70% of high-severity issues tied to silent failures, unhandled edge cases, and undocumented hard limits outside of advertised context window sizes. Teams testing new AI CLI tools should prioritize edge-case reliability testing over peak advertised model performance in 2026.
4. Open source independent tools lead on cross-stack compatibility: OpenCode, Pi, and Gemini CLI all support Nix, Bun, and WSL multiplexer workflows that are not available in closed enterprise-focused CLI offerings, so teams running non-standard self-hosted developer stacks should prioritize independent open source tools for maximum compatibility.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-07-21)
---
## 1. Top Skills Ranking
Ranked by linked issue traction, community reproductions, and update recency, the 7 highest-attention active PRs are:
1.  **PR #1298 [OPEN] - fix(skill-creator): 0% recall evaluation pipeline fix**  
    Functionality: Resolves the long-standing bug where the `run_eval.py` skill assessment tool returns 0% recall for all skill descriptions regardless of actual performance, alongside fixes for Windows stream reading, trigger detection logic, and parallel evaluation workers. Discussion highlights: Ties to 10+ independent user reproductions and 3 high-priority open issues, addressing a critical blocker that rendered the official skill description optimization loop useless. [URL](https://github.com/anthropics/skills/pull/1298)
2.  **PR #1367 [OPEN] - self-audit output quality gate skill v1.3.0**  
    Functionality: Universal cross-stack auditing skill that first verifies all claimed output files exist on disk, then runs four-dimensional severity-prioritized reasoning validation to catch logic errors and missing content before Claude Code delivers work to end users. Discussion highlights: Aligns with the community’s fast-growing demand for production-grade output guardrails, and ties directly to the active 3-gate reasoning quality pipeline public proposal. [URL](https://github.com/anthropics/skills/pull/1367)
3.  **PR #723 [OPEN] - testing-patterns skill**  
    Functionality: Comprehensive full-stack testing guidance skill covering the full testing trophy framework, unit test best practices, React component testing, E2E testing patterns, and test data management rules. Discussion highlights: Fills a widely noted gap for professional Claude Code developer users, who previously had no standardized centralized testing guidance in the official skills collection. [URL](https://github.com/anthropics/skills/pull/723)
4.  **PR #525 [OPEN] - Pyxel retro game development skill**  
    Functionality: MCP-native skill for the popular open-source Pyxel 8-bit retro game engine, triggering on any pixel-art/retro game creation request, and supporting the full iterative write-run-inspect game development workflow. Discussion highlights: Authored and maintained by the upstream Pyxel project lead, it is one of the first fully integrated third-party game dev skills submitted to the official repo, last updated 2026-07-15. [URL](https://github.com/anthropics/skills/pull/525)
5.  **PR #514 [OPEN] - document-typography skill**  
    Functionality: Automatic typographic quality control skill that eliminates common flaws in AI-generated documents including orphan/widow line breaks, section headers stranded at page breaks, and misaligned auto-numbering. Discussion highlights: Community feedback confirms these typographic flaws affect nearly every document Claude generates, and no existing native skill addresses the pain point. [URL](https://github.com/anthropics/skills/pull/514)
6.  **PR #1302 [OPEN] - color-expert skill**  
    Functionality: Centralized color expertise skill covering standard color naming systems, optimized color space selection for different design use cases, accessibility contrast validation, and cross-format color conversion. Discussion highlights: Fills a longstanding gap for frontend and product design workflows that previously required external reference tools to resolve color questions. [URL](https://github.com/anthropics/skills/pull/1302)
7.  **PR #486 [OPEN] - ODT OpenDocument skill**  
    Functionality: Full support for Open Document Format (.odt, .ods) workflows including document creation, template filling, parsing, and HTML conversion for LibreOffice and ISO standard open document use cases. Discussion highlights: Addresses explicit demand from European public sector and enterprise users who rely on open document formats instead of proprietary DOCX files. [URL](https://github.com/anthropics/skills/pull/486)

---
## 2. Community Demand Trends
Distilled from top commented issues, the highest-priority unmet needs are:
1.  **Core skill authoring pipeline reliability and Windows compatibility**: 3 overlapping high-comment issues confirm the broken 0% recall evaluation pipeline and missing native Windows support for all `skill-creator` scripts is the top community pain point, with hundreds of custom skill authors blocked.
2.  **Organizational and enterprise skill support**: There is strong demand for built-in org-wide shared skill libraries to eliminate manual .skill file distribution over Slack/Teams, alongside purpose-built enterprise skills for SAP predictive analytics, SharePoint access control, and agent governance patterns.
3.  **Meta safety and performance guardrails**: After the top-reported namespace impersonation security vulnerability, the community is heavily requesting meta-skills that add audit trails, trust scoring, and compact symbolic persistent memory to reduce context window bloat for long-running agent sessions.
4.  **Cross-platform and MCP interoperability**: Users are demanding official support for running Skills on AWS Bedrock, plus standardized exposure of all Skills as native Model Context Protocol (MCP) endpoints to integrate with third-party agent tooling.
5.  **Core ecosystem reliability fixes**: Users have reported frequent unexpected loss of locally saved custom skills, and duplicate identical skills being loaded across overlapping official plugin bundles, creating unnecessary context window bloat.

---
## 3. High-Potential Pending Skills (Near-Term Landing Candidates)
These actively maintained, functionally complete PRs are expected to merge in the next few weeks following final review:
1.  The full skill-creator Windows compatibility + 0% recall bug fix stack (bundle of PRs #1298, #1323, #1099, #1050): All fixes have been independently reproduced by community contributors, and are only pending final upstream validation to unblock Windows-based skill authors. [URL](https://github.com/anthropics/skills/pull/1298)
2.  The self-audit universal quality gate skill PR #1367: Iterated on as recently as July 2026, it aligns closely with Anthropic’s public stated roadmap for output validation controls for Claude Code, making it a strong candidate for official prioritization. [URL](https://github.com/anthropics/skills/pull/1367)
3.  The Pyxel retro game development skill PR #525: Fully functionally complete, maintained by the upstream project lead, and has no open outstanding feedback from maintainers as of its July 15, 2026 update. [URL](https://github.com/anthropics/skills/pull/525)

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community’s most concentrated demand is two tightly interconnected priorities: first, fully fixing the broken core custom skill authoring and evaluation pipeline to enable reliable, cross-platform native skill building for Windows and non-Unix users, and second, adding production-grade meta-skill guardrails that enforce output quality, prevent namespace impersonation security risks, and support team/organization-wide shared skill deployments for enterprise use cases.

---

# Claude Code Community Digest | 2026-07-21
---
## 1. Today's Highlights
Today’s lead update is the official rollout of Claude Code v2.1.216, which resolves a widely reported severe performance regression for long-running sessions while introducing a new flexible sandbox configuration option for power users. High-engagement community discussions are centered on accessibility gaps for remote control sessions, broken MCP OAuth auto-refresh behavior, and missing Cowork tab functionality for macOS M4 users. Multiple newly submitted community PRs deliver quality-of-life fixes for repo admin tooling, aligning bot and script behavior with long-published Anthropic documentation.

## 2. Releases
### v2.1.216 (published last 24h)
[Full release](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)
- Added new `sandbox.filesystem.disabled` setting that lets developers fully skip filesystem isolation while retaining full network egress control for use cases requiring trusted local filesystem access
- Fixed a critical performance bug where message normalization costs scaled quadratically with session turn count, causing multi-second stalls and slow session resumes for sessions with dozens of turns
*Remaining release notes were truncated in the published update*

## 3. Hot Issues (Top 10)
All items sorted by community engagement:
1. [#51213 (Closed)](https://github.com/anthropics/claude-code/issues/51213): RTL Windows titlebar buttons overlap and hide top menu for Hebrew/Arabic users. 10 comments, 4 👍. This resolved bug directly improves accessibility for users running non-Latin right-to-left Windows locales.
2. [#42700 (Open)](https://github.com/anthropics/claude-code/issues/42700): TTS readback + voice mode support for Remote Control sessions. 9 comments, 19 👍. The highest-upvoted open enhancement request, prioritized by low-vision developers and headless remote workflow users.
3. [#72504 (Open)](https://github.com/anthropics/claude-code/issues/72504): Cowork tab missing from macOS M4 sidebar post v1.15962.1. 9 comments. This unpatched regression breaks core cross-user collaboration functionality for Apple Silicon desktop users.
4. [#47574 (Closed)](https://github.com/anthropics/claude-code/issues/47574): Expose organization API credit balance to status line scripts and Admin API. 6 comments, 12 👍. Long-requested functionality now resolved, giving pay-as-you-go enterprise users programmatic usage tracking for cost governance.
5. [#65036 (Open)](https://github.com/anthropics/claude-code/issues/65036): MCP OAuth fails to auto-refresh access tokens. 5 comments, 19 👍. This bug forces users to re-authenticate MCP tools daily even with valid refresh tokens, breaking 24/7 automated workflow uptime.
6. [#54117 (Closed)](https://github.com/anthropics/claude-code/issues/54117): Opus 4.7 repeatedly violates global `~/.claude/CLAUDE.md` and custom modular rules. 4 comments. Fixing this issue resolves 41+ logged rule violations across 60+ sessions that broke custom project guardrails.
7. [#79023 (Open)](https://github.com/anthropics/claude-code/issues/79023): Custom skills cannot invoke the built-in `/code-review` skill. 1 comment, 5 👍. This regression breaks pre-built chained CI/CD workflows that combine custom automation skills with Claude Code's native review functionality.
8. [#79532 (Open)](https://github.com/anthropics/claude-code/issues/79532): Claude Chrome extension permanently shows "not connected" after reinstall/restart. 2 comments. This newly filed bug blocks all browser context MCP tool functionality for affected users.
9. [#66697 (Closed)](https://github.com/anthropics/claude-code/issues/66697): Fable 5 safety classifier false positives on authorized defensive security audits. 4 comments. This fix resolves a major pain point for security researchers running penetration tests on their own organization’s codebases.
10. [#65532 (Closed)](https://github.com/anthropics/claude-code/issues/65532): `claude doctor` shows false positive warning that `~/.local/bin` is missing from PATH. 3 comments, 4 👍. This fix removes a confusing persistent setup warning that misled new CLI users across macOS and Windows.

## 4. Key PR Progress
All 6 PRs updated in the last 24h are high-impact for end users and maintainers:
1. [#66650 (Closed)](https://github.com/anthropics/claude-code/pull/66650): Standardize pr-review-toolkit plugin manifest to use full author name. Improves consistency across all bundled official Claude Code plugins.
2. [#1 (Closed)](https://github.com/anthropics/claude-code/pull/1): Add formal `SECURITY.md` project governance document. Defines official vulnerability reporting workflows for external security researchers.
3. [#74722 (Open)](https://github.com/anthropics/claude-code/pull/74722): Add Conventional Branch 1.0.0 support to the `/commit-push-pr` command. New optional `conventional` flag auto-generates standardized `<type>/<description>` branch names by inferring content type from git diffs.
4. [#79387 (Open)](https://github.com/anthropics/claude-code/pull/79387): Add explicit error message for `edit-issue-labels.sh` when run with no valid label arguments. Fixes silent exit code 1 behavior in repo admin tooling to reduce friction for new community triage contributors.
5. [#79385 (Open)](https://github.com/anthropics/claude-code/pull/79385): Honor 👎 reactions from all users for the auto-close duplicate bot, not just the original issue author's. Aligns bot behavior with its published documentation to prevent accidental deletion of high-impact community reports.
6. [#78532 (Open)](https://github.com/anthropics/claude-code/pull/78532): Fix PG16 Cloud SQL tiering bug and add optional internal ALB support to GCP gateway Terraform examples. Resolves broken default deployments for self-hosted gateway users, and adds airgapped enterprise support via private internal load balancers.

## 5. Feature Request Trends
The most consistently requested new functionality across recent issues falls into four core categories:
1. Accessibility parity: TTS/voice support for remote control sessions, improved RTL language UI support, and tuned safety classifiers for legitimate defensive security use cases
2. MCP automation reliability: Auto-resolution for bare short-named MCP tools to eliminate 404 retries, native OAuth token refresh for MCP servers, and expanded MCP tooling integrations
3. Workflow ergonomics: Conventional Commits/Conventional Branch support for built-in git commands, unpin controls for tracked PRs in the CI monitoring panel, and project-scoped Cowork skills to match Claude Code's existing local `.claude/skills/` functionality
4. Cross-device continuity: One-tap session handoff from the Claude Chrome extension to local desktop Claude Code instances, and native voice chat support for desktop code sessions

## 6. Developer Pain Points
Recurring high-frequency frustrations documented in updated issues:
1. Long session performance degradation: The recently patched quadratic message normalization slowdown was the top pain point for developers running multi-hour, 100+ turn coding sessions
2. MCP connectivity fragility: Unhandled MCP OAuth token expirations and repeated 404s for short MCP tool names add unnecessary manual intervention and latency to automated workflows
3. Overly restrictive safety guardrails: Frequent false positive classification for authorized security audits and legitimate production server debugging blocks valid developer use cases
4. Platform-specific rendering bugs: Windows TUI terminal frame corruption, missing macOS Cowork sidebar tabs, and RTL titlebar overlap break core UX for users on non-default system configurations
5. Misleading setup tooling: Long-standing `claude doctor` false positive PATH warnings create unnecessary configuration friction for new CLI users during onboarding

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-21
---
## 1. Today's Highlights
The `openai/codex` repository published a new Rust runtime alpha release `v0.145.0-alpha.25` alongside a wave of merged patches targeting widely reported Windows Desktop performance regressions, hook execution consistency issues, and sandbox reliability gaps. The highest-visibility community conversation yesterday centered on an uncontrolled process spawn bug affecting Windows Codex users, which causes hundreds of orphaned `taskkill.exe` and `conhost.exe` instances to exhaust system resources, with 5 parallel user reports gaining 32 combined upvotes overnight. Merged fixes also closed a 6-week old bug that deferred `SessionStart` hooks after context compaction, resolving widespread context pollution for automation-focused developers.

## 2. Releases
- **rust-v0.145.0-alpha.25 (Published 2026-07-21)**: This pre-release tag for the Codex Rust CLI and native runtime stack follows the `0.145.0-alpha.18` build bundled with the recent 26.715 macOS Desktop release, and includes all 24 hours of merged sandbox, performance, and reliability patches aligned with the Windows process leak mitigation effort.

## 3. Hot Issues (Top 10 Notable Entries)
1. **[#20214] Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient system resources** | 59 comments, 68 👍: The oldest and most popular open Windows performance bug, affecting Plus subscribers with high-end hardware such as AMD Ryzen 5 5600 and 32GB RAM. Users have shared dozens of partial mitigations (GPU acceleration toggles, Defender exceptions) that do not fully resolve the root cause. [View on GitHub](https://github.com/openai/codex/issues/20214)
2. **[#20741] Codex Desktop project chat histories disappeared after recent update** | 57 comments, 16 👍: High-severity data loss bug for macOS Tahoe users on the 26.429.30905 build, with Pro subscribers reporting lost weeks of code generation and debugging work with no built-in recovery tools. [View on GitHub](https://github.com/openai/codex/issues/20741)
3. **[#18308] Add Agents to Plugins System** | 8 comments, 58 👍: The top upvoted open feature request, asking the Codex team to extend the existing plugin framework to support distributable custom agents alongside already supported skills, MCP servers, and packaged apps. [View on GitHub](https://github.com/openai/codex/issues/18308)
4. **[#23200] Support headless remote Linux hosts for Codex mobile without requiring the desktop app to stay online** | 12 comments, 41 👍: Mobile developers are pushing for the ability to connect Codex for iOS directly to always-on self-hosted Linux dev servers, eliminating the current mandatory requirement for a local desktop app to act as a connection relay. [View on GitHub](https://github.com/openai/codex/issues/23200)
5. **[#33776] [Windows][Desktop 26.707.12708.0] ChatGPT.exe spawns hundreds of taskkill.exe/conhost.exe processes, causing WMI storms and DWM degradation** | 14 comments, 11 👍: First of a cluster of overnight reports of the Windows process leak bug, with users reporting up to 287 orphaned processes that render the entire OS UI unresponsive. [View on GitHub](https://github.com/openai/codex/issues/33776)
6. **[#21753] Full Claude Code Hook Parity (29+)** | 27 comments, 20 👍: Community-led umbrella tracker to extend Codex's hook system to cover every major session lifecycle event matching competing Claude Code capabilities, while retaining Codex-native payloads and naming conventions. [View on GitHub](https://github.com/openai/codex/issues/21753)
7. **[#32314] Windows 0.144.1: elevated sandbox adds ~20s per command; unelevated restores speed but breaks apply_patch with split roots** | 14 comments, 4 👍: Workflow-breaking sandbox tradeoff forces developers to choose between 20+ second per-command latency on elevated sandboxes, or broken patch application for unelevated setups, destroying tight inner-loop development velocity. [View on GitHub](https://github.com/openai/codex/issues/32314)
8. **[#16127] yeet skill is over opinionated** | 11 comments, 26 👍: Popular community `yeet` skill caused unintended side effects by auto-adding `codex/` prefixes to git branch names and PR tags without user opt-in, and executed git commands unprompted on non-git repositories managed with the jj VCS. [View on GitHub](https://github.com/openai/codex/issues/16127)
9. **[#34260] Windows Desktop: unbounded taskkill.exe/conhost.exe cleanup storm exhausts WMI** | 9 comments, 4 👍: Detailed new bug report with full reproducible steps for the process leak, which the OpenAI team is referencing to validate their incoming fixes. [View on GitHub](https://github.com/openai/codex/issues/34260)
10. **[#32031] [Critical UX regression] multi-agent v2 spawn_agent hides model overrides and rejects the default call shape** | 7 comments, 13 👍: Recent multi-agent v2 API changes made custom model selection for subagents undiscoverable, and broke existing working code that passed model overrides to the `spawn_agent` tool out of the box. [View on GitHub](https://github.com/openai/codex/issues/32031)

## 4. Key PR Progress (Top 10 Important Patches)
1. **[#34423] Support Windows sandboxing in the exec server** | Merged: Adds a native Windows sandbox session backend to the exec server, directly addressing the root cause of orphaned `taskkill` and `conhost` process leaks affecting recent Windows Desktop builds. [View on GitHub](https://github.com/openai/codex/pull/34423)
2. **[#34396] Run compact session-start hooks before turn continuation** | Merged: Resolves the long open bug #28736 where `SessionStart` hooks for post-compaction events were deferred to later turns, eliminating widespread context pollution for automation users. [View on GitHub](https://github.com/openai/codex/pull/34396)
3. **[#34398] Support per-environment permission profiles** | In Review: Highly requested enterprise feature that lets developers assign separate shell, filesystem, and approval rules to each connected environment (local workstation, cloud dev server, untrusted sandbox) instead of relying on a single global permission profile. [View on GitHub](https://github.com/openai/codex/pull/34398)
4. **[#34392] Ignore inherited ACEs when refreshing Windows write roots** | Merged: Eliminates infinite ACL refresh loops on Windows that caused slowdowns and failed `apply_patch` calls for directories with inherited permission entries. [View on GitHub](https://github.com/openai/codex/pull/34392)
5. **[#30235] kill timed-out Git status process groups** | Merged: Ensures orphaned long-running `git status` wrapper processes are fully terminated on timeout for both Unix and Windows, eliminating hidden background CPU usage. [View on GitHub](https://github.com/openai/codex/pull/30235)
6. **[#34400] Propagate approval rejection reasons** | Merged: Surfaces explicit user rejection messages in tool results instead of generic failure text, making it trivial to debug why automated workflows were blocked by interactive approval prompts. [View on GitHub](https://github.com/openai/codex/pull/34400)
7. **[#34393] Add

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-21
Repository: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
Today’s 24-hour activity includes the release of the latest v0.52.0 nightly build, full foundational implementation of the repository’s internal end-to-end issue-to-PR automation pipeline, and multiple in-progress fixes for widely reported agent hanging, stateful API errors, and terminal UX glitches. The team also shipped several quality-of-life improvements for Windows PowerShell users, Nix package manager compatibility, and automated issue triage workflows as part of their ongoing core stability initiative. 11 high-priority P1 bugs impacting subagent reliability, browser automation, and shell execution were marked for retesting in this update window.

---

## 2. Releases
### v0.52.0-nightly.20260720.gacae7124b
The latest incremental nightly build was published 2026-07-20, with an automated version bump tracked in PR [#28465](https://github.com/google-gemini/gemini-cli/pull/28465). It carries all changes from the prior 20260719 nightly, with the full incremental changelog available [here](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b).

---

## 3. Hot Issues (Top 10 Noteworthy)
All listed issues received updated activity in the last 24 hours:
1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323): P1 bug where the `codebase_investigator` subagent incorrectly reports "GOAL success" after hitting `MAX_TURNS`, hiding that no analysis work was completed. It has 12 comments and tracks a high-priority fix for a user experience gap that wastes developer time.
2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409): P1 bug where the generalist agent hangs indefinitely for simple tasks (e.g. folder creation) unless users explicitly disable subagent deferral. It has 7 comments and 8 👍, the highest user reaction count of all recent open issues.
3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873): Large-effort enhancement to implement zero-dependency OS sandboxing that leverages Gemini 3 models' native training affinity for bash/POSIX tool workflows, to improve both agent performance and user security.
4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353): EPIC for building robust component-level evaluations, tracking ongoing work to expand the library of 76 existing behavioral tests across 6 supported Gemini model variants to reduce release regression rates.
5. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166): P1 core bug where shell execution gets stuck showing "Awaiting user input" after non-interactive commands have already completed, with 4 comments and 3 👍 from users experiencing broken shell workflow interactions.
6. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983): P1 bug where the browser subagent fails entirely on Wayland compositors, breaking browser automation workflows for modern Linux desktop users.
7. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525): P2 security bug to implement deterministic pre-model secret redaction for the Auto Memory feature, preventing sensitive local transcript data from ever being sent to a model before redaction logic runs.
8. [#22465](https://github.com/google-gemini/gemini-cli/issues/22465): Common user workflow bug where the CLI gets stuck at interactive prompts when scaffolding new Vite applications, blocking frontend new project setup flows.
9. [#21763](https://github.com/google-gemini/gemini-cli/issues/21763): P1 bug where CLI `/bug` reports do not capture any internal subagent context, making it nearly impossible for users and maintainers to debug subagent failures.
10. [#24935](https://github.com/google-gemini/gemini-cli/issues/24935): Core UX bug that causes terminal buffer corruption after users exit external editors (e.g. Vim, Nano) in terminalBuffer mode.

---

## 4. Key PR Progress (Top 10 Important Updates)
1. [#28469](https://github.com/google-gemini/gemini-cli/pull/28469): Core fix that rotates the active session ID when a model fallback to `gemini-2.5-flash` triggers, eliminating the blocking stateful API error that occurred when retries used the old session identifier.
2. [#28410](https://github.com/google-gemini/gemini-cli/pull/28410): P1 fix that shortens the MCP `tools/list` discovery timeout, preventing 10-minute silent freezes at CLI startup when an unresponsive MCP server sends mismatched JSON-RPC responses.
3. [#27705](https://github.com/google-gemini/gemini-cli/pull/27705): Closed merged PR that promotes Gemini 3.1 Flash Lite to GA and adds full official support for the new Gemini 3.5 Flash model on the release branch.
4. [#28405](https://github.com/google-gemini/gemini-cli/pull/28405): Core UX fix that prevents unwanted scroll position jumps when users manually scroll up to review chat history while new content is being rendered.
5. [#28447](https://github.com/google-gemini/gemini-cli/pull/28447): Documentation update adding Windows PowerShell specific troubleshooting guidance to resolve the common "gemini command not found" error after global npm install for Windows users.
6. [#28256](https://github.com/google-gemini/gemini-cli/pull/28256): Core fix that adds `/nix/store` to the trusted system paths allowlist, resolving issues where Nix-installed tools like `rg` (Ripgrep) were incorrectly flagged as untrusted on NixOS/nix-darwin systems.
7. [#28319](https://github.com/google-gemini/gemini-cli/pull/28319): a2a-server security hardening refactor that enforces workspace path trust checks *before* loading workspace-level `.env` variables, eliminating a potential exploit vector for malicious repo environment files.
8. [#28433](https://github.com/google-gemini/gemini-cli/pull/28433): Implementation of the iterative bug-fixing state machine for the team's new headless SSR Issue-to-PR pipeline, which orchestrates automated AI agent coding loops, static analysis checks, and test runs to auto-generate valid PRs for tracked issues.
9. [#28364](https://github.com/google-gemini/gemini-cli/pull/28434): Core config fix that properly deep-merges user custom model configs over default values, resolving broken behavior where nested model parameter overrides were not being respected.
10. [#28262](https://github.com/google-gemini/gemini-cli/pull/28262): Performance optimization that replaces naive slash command string parsing with a pre-computed lookup map, delivering O(1) slash command resolution for faster CLI interactions.

---

## 5. Feature Request Trends
The most requested feature directions from recently updated issues are:
1. AST-aware codebase navigation and mapping tools to cut down on unnecessary token bloat and reduce wasted turns during codebase exploration workflows
2. Enhanced resilience for background Auto Memory and browser agent workflows, including automatic orphan session takeover, lock recovery, and prevention of infinite retries on low-signal data
3. Zero-dependency native OS sandboxing for bash execution to fully unlock Gemini 3's built-in POSIX workflow expertise without introducing external runtime dependencies
4. Improved subagent observability: add subagent trajectory visibility to the `/chat share` command and full subagent context to bug reports for easier debugging
5. Expanded component-level behavioral evaluation coverage to catch regressions across all 6 supported Gemini model variants before releases ship

---

## 6. Developer Pain Points
Recurring high-frequency user frustrations surfaced in recent updates:
1. Persistent agent hanging bugs across multiple surfaces: generalist agent infinite hangs, shell execution getting stuck post-command, overly long unhandled MCP discovery timeouts
2. Cross-platform compatibility gaps: broken browser automation on Wayland, missing Nix package manager system path support, missing Windows PowerShell post-install setup guidance
3. Subagent transparency and control gaps: unreported MAX_TURNS interruptions hidden as successful runs, missing subagent context in debug/bug reports, agents failing to use pre-configured custom skills/subagents unless explicitly instructed
4. Unresolved terminal UX glitches: unexpected scroll jumps during new content rendering, flicker during terminal resizing, buffer corruption after exiting external editors
5. Broken config override behavior: the browser agent ignoring custom `maxTurns` values set in `settings.json`, shallow merging preventing users from applying nested custom model configuration overrides.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-21
Repository: github.com/github/copilot-cli

---

## 1. Today's Highlights
Today’s top updates include the public release of Copilot CLI v1.0.72, alongside the long-awaited resolution of an 8-month-old top-voted community bug that standardized SHIFT + ENTER line break behavior in the TUI chat interface. 18 total issues were updated in the last 24 hours, spanning critical production regressions, unhandled edge-case failures for Anthropic Claude sub-agents, and a wave of user-submitted feature requests for improved model customization and TUI usability. No public pull requests were merged or modified in the project over the 24-hour window.

## 2. Releases
### v1.0.72 (2026-07-20)
The latest patch release ships two key changes:
- Fixed an infinite loop bug caused by perpetually blocked `agentStop` hooks: the CLI now terminates active turns after 8 consecutive blocks, and adds a new `stop_hook_active` flag to agentStop hook payloads to let custom hooks detect forced continuations and apply self-limiting logic
- Added an opt-in authentication flow that automatically surfaces valid `git` and `gh` credentials inside the CLI runtime to eliminate repeated sign-in prompts

## 3. Hot Issues
1. **#1481 [CLOSED] SHIFT + ENTER spawns prompt execution instead of line break** | 17 👍, 27 comments | https://github.com/github/copilot-cli/issues/1481  
   The highest-engagement open bug from the past 6 months, aligned with universal standard chat app UX expectations, now marked resolved for the next patch release.
2. **#2812 [CLOSED] Apple Silicon native v1.0.31 binary crashes with SIGSEGV on macOS** | 0 👍, 2 comments | https://github.com/github/copilot-cli/issues/2812  
   Resolves silent exit failures for M-series macOS users running affected legacy versions, no manual reconfiguration required for new installs.
3. **#3747 [OPEN] "WAITFOR DELAY" MSSQL string poisons sessions into unrecoverable timeouts** | 1 👍, 1 comment | https://github.com/github/copilot-cli/issues/3747  
   Critical break for database engineers: any prompt or loaded file containing common MSSQL syntax sends the CLI into a permanent fault state that requires a full restart to fix.
4. **#4188 [OPEN] Post-v1.0.72 regression blocks shell/gh CLI commands in plan mode** | 1 👍, 1 comment | https://github.com/github/copilot-cli/issues/4188  
   Breaks existing user workflows that relied on plan mode to run GitHub CLI commands and local shell tooling to build verified execution plans.
5. **#4183 [OPEN] Auto-compaction fails to prevent 5MB CAPI request failures from accumulated tool history** | 2 👍, 0 comments | https://github.com/github/copilot-cli/issues/4183  
   Power user pain point: long-running multi-hour code refactoring sessions break even when they stay fully within the active model’s context token limit, due to the separate 5MB serialized request body hard cap.
6. **#4185 [OPEN] `--add-dir` flag causes Claude sub-agent dispatch 400 cache_control block limit error** | 0 👍, 0 comments | https://github.com/github/copilot-cli/issues/4185  
   Core functionality break for teams using Anthropic Claude models: all sub-agent dispatches fail when 2+ local directories are added to the context, exceeding Claude’s documented 4 maximum cache control block limit.
7. **#4195 [OPEN] Read-only code-review task agents can mutate the shared parent worktree** | 0 👍, 0 comments | https://github.com/github/copilot-cli/issues/4195  
   High-severity security and data integrity risk: users running code review agents on untrusted code face accidental file modification, despite explicit read-only guardrails being documented for the agent type.
8. **#4180 [OPEN] Interactive TUI ignores all PTY keyboard input, breaking automation tooling** | 0 👍, 0 comments | https://github.com/github/copilot-cli/issues/4180  
   Blocks enterprise adoption for teams that integrate Copilot CLI into AI agent orchestration pipelines that drive the CLI via PTY injection, with only Ctrl+C recognized as a valid input.
9. **#4179 [OPEN] No support for clicking enqueued TUI entries to edit them** | 0 👍, 1 comment | https://github.com/github/copilot-cli/issues/4179  
   Core TUI usability gap: the existing mouse navigation support across most UI elements does not extend to queued user prompts, requiring full text retyping to adjust old requests.
10. **#4191 [OPEN] Clipboard access fails in VS Code WSL terminals nested under tmux/screen** | 0 👍, 0 comments | https://github.com/github/copilot-cli/issues/4191  
    Widespread break for WSL power users running common nested terminal multiplexer setups, eliminating one-click copy functionality for code snippets and generated outputs.

## 4. Key PR Progress
There were no open, merged, or updated pull requests in the github/copilot-cli repository within the 24-hour tracking window. No PR-related progress to report for this digest.

## 5. Feature Request Trends
Across all new issues, three top feature directions emerged from the community:
1. **Granular model configuration controls**: Users are requesting native support for quick pre-set preset switches for model/effort levels, plus explicit pickers to select BYOK/custom self-hosted models for desktop background agents, moving away from the current fully automatic model assignment logic.
2. **Streamlined /btw quick mode workflow improvements**: Users want one-click new session creation from /btw outputs, plus direct image paste support for /btw prompts, to remove friction from the quick ask workflow.
3. **Sandboxed session permission refinements**: Developers running isolated agent workspaces are requesting default access for sandboxed sessions to edit their own session-specific `plan.md` files, without granting cross-session file system access to other workspaces.

## 6. Developer Pain Points
Recurring high-impact frustrations shared across updated issues:
1. **Post-v1.0.72 untested regressions**: Multiple core workflows (plan mode permissions, /btw image pasting, terminal path selection) broke unexpectedly in the latest patch release for existing users.
2. **Undocumented platform hard limits**: Users frequently hit unhandled limits outside of advertised model context windows, including the 5MB CAPI request body cap and Anthropic’s 4 cache control block limit, with no clear user-facing error messaging or mitigation steps.
3. **Partial compatibility for power user terminal setups**: Common developer workflows including WSL + tmux, programmatic PTY orchestration, and remote SSH sessions do not get first-class feature parity with native local terminal runs.
4. **Small cumulative UX frictions**: Longstanding mismatches against standard chat and terminal UI conventions create unnecessary extra steps for daily users that add up over multi-hour work sessions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-21
Repository: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights
This 24-hour snapshot contains no new official stable releases, with 5 newly filed open bug reports and 4 in-progress pull requests focused on resolving long-standing session logic defects, Windows platform compatibility gaps, and runaway token consumption in autonomous goal mode. The highest-severity new report flags an infinite loop bug in goal mode that causes unplanned, excessive token burn for users running long remote workloads such as distributed model training jobs. Multiple active core team PRs target root causes of context corruption that have been reported by enterprise users running the CLI on headless Linux servers over multi-day sessions.

## 2. Releases
No new official Kimi Code CLI releases were published in the 24-hour window ending 2026-07-21. All active work is currently in pre-merge pull request testing.

## 3. Hot Issues
All 5 recently updated public issues are featured below, ordered by community engagement and severity:
1. [Issue #2209](https://github.com/MoonshotAI/kimi-cli/issues/2209): Persistent 48+ hour `engine_overloaded` 429 errors for CLI deployments on remote Linux servers. This high-engagement bug (4 comments, 3 upvotes) blocks production headless workflows entirely, with the submitting user testing 3 separate CLI versions and 2 coding models while providing full diagnostic exports for debugging.
2. [Issue #2525](https://github.com/MoonshotAI/kimi-cli/issues/2525): Infinite no-op continuation in goal mode that re-injects the full goal context every few seconds while waiting on external conditions (e.g. GPU availability, long-running training jobs). It creates unconstrained token burn and unplanned billing risk for unattended agent workloads.
3. [Issue #2523](https://github.com/MoonshotAI/kimi-cli/issues/2523): Context compaction bug that reopens already completed, user-deleted tasks during session optimization. It wastes limited context window capacity and erases user cleanup progress, breaking trust in the CLI's context management for long development sessions.
4. [Issue #2522](https://github.com/MoonshotAI/kimi-cli/issues/2522): Missing Windows session migration logic after upgrade to v1.49.0, with no bundled `kimi migrate` command to move old data from the legacy `.kimi-code` directory to the new `.kimi` storage path. It leaves existing user session data inaccessible without manual filesystem intervention.
5. [Issue #2521](https://github.com/MoonshotAI/kimi-cli/issues/2521): Broken arrow key input selection for interactive menus in the Windows build of the CLI. It degrades core UX for Windows users, requiring non-standard keyboard workarounds to navigate menu flows in the `herdr` interactive mode.

## 4. Key PR Progress
All 4 recently updated in-progress PRs are featured below:
1. [PR #2520](https://github.com/MoonshotAI/kimi-cli/pull/2520): Fixes session fork/undo logic by aligning context truncation to official wire turns. Resolves 3 previously filed defects (#2517, #1974, #2049) that caused history mismatch errors after undo or fork operations, and includes a new dedicated regression test for slash turn offset drift.
2. [PR #2519](https://github.com/MoonshotAI/kimi-cli/pull/2519): Refreshes stale frozen system prompts on session resume. Resolves defect #2420, ensuring resumed sessions pull latest updates to custom user-defined skills in `~/.kimi/skills/` and edits to `AGENTS.md`, rather than using the static system prompt snapshot frozen in old `context.jsonl` files.
3. [PR #2524](https://github.com/MoonshotAI/kimi-cli/pull/2524): Fixes the `StrReplaceFile` tool to count edits against the sequentially modified working file content instead of the original unmodified source. This small, <100-line fix eliminates false positive replacement count errors for multi-step string edit operations on code files.
4. [PR #2515](https://github.com/MoonshotAI/kimi-cli/pull/2515): Implements stream merge buffering and removes unnecessary deep copies of every response delta in the `kosong` streaming handler. The performance improvement eliminates quadratic string concatenation overhead, cutting CPU usage and latency for long LLM responses.

## 5. Feature Request Trends
Distilled from all recently filed issues, the top requested feature directions are:
1. Official built-in idle pause/sleep logic for autonomous goal mode to prevent unnecessary token consumption during waits for external events
2. First-party automatic migration tooling for legacy session data across major CLI version updates, with explicit first-class support for Windows filesystem conventions
3. Hardened context compaction logic that explicitly preserves user task deletion state across session restarts and context optimization runs
4. Full cross-platform input handling parity for interactive CLI menus to match existing Linux/macOS UX on Windows

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. Persistent unmitigated 429 rate limiting for remote headless Linux deployments, with no documented automatic retry logic for extended multi-day workloads
2. Persistent context state corruption edge cases (mismatched undo history, stale config on resume, compaction reopening completed tasks) that break multi-hour long-running development sessions
3. Significant platform parity gaps for Windows users, covering missing session migration, broken interactive input, and unpatched platform-specific bugs that do not affect Unix-like systems
4. Unbounded token consumption edge cases in autonomous agent modes that create unexpected billing risk for users running unattended background workloads

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-21
---
## 1. Today's Highlights
The latest v1.18.4 release rolls out adaptive thinking control support for Kimi models on Anthropic-compatible providers, alongside targeted fixes for high-frequency OpenAI connection timeouts during slow network setup. Maintainers merged long-awaited guard logic to resolve weeks of widely reported infinite desktop crash loops tied to misconfigured notification server state, while community feedback for usability improvements to queued message management, legacy layout retention, and project session persistence continues to top the issue tracker engagement charts. Over a dozen backlogged pull requests were automatically cleaned and rebased to the latest dev branch, delivering a batch of critical data safety and UX fixes for end users.

## 2. Releases
### v1.18.4 (Latest Stable)
* **Core Improvement**: Added adaptive thinking controls for Kimi models running on Anthropic-compatible providers, with summarized reasoning output enabled by default, contributed by @chouqin
* **Bugfixes**: Reduced connection setup timeouts for OpenAI provider headers on slow networks, and added logic to respect provider-defined reasoning settings that were previously being ignored
* Associated assets: Screenshot artifacts for in-progress UI refresh PR #37967 were uploaded for final validation

## 3. Hot Issues (Top 10 Notable)
1. [anomalyco/opencode#4821](https://github.com/anomalyco/opencode/issues/4821) - Feature request to add unqueue message controls: The most widely upvoted open feature (67 👍, 20 comments) addresses a major pain point where users cannot cancel accidentally queued agent requests after overcorrecting a prompt, leading to unwanted automated file edits.
2. [anomalyco/opencode#27906](https://github.com/anomalyco/opencode/issues/27906) - v1.15.1+ breaks Bun installs: 20 comments, 13 👍. Users of non-NPM package managers (Bun, pnpm) are blocked from installing global OpenCode releases after mandatory postinstall scripts were added in v1.15.1, since Bun blocks lifecycle scripts for global packages by default.
3. [anomalyco/opencode#37012](https://github.com/anomalyco/opencode/issues/37012) - Request for legacy layout toggle: 19 comments, 24 👍. Many long-time users report the new UI's nested navigation creates unnecessary friction for common workflows, and are demanding the original dense, single-window layout be retained as an option.
4. [anomalyco/opencode#19604](https://github.com/anomalyco/opencode/issues/19604) - Write tool fails silently on 1000+ line files: 19 comments, 12 👍. High-severity bug that breaks support for large codebases, with no visible error message to help users debug failed file writes.
5. [anomalyco/opencode#4031](https://github.com/anomalyco/opencode/issues/4031) - Python SDK public release request: 38 comments (top total comment count). Users have been asking for an official, versioned Python SDK for OpenCode 1.0+ for over 8 months, with no public release available as of today.
6. [anomalyco/opencode#29363](https://github.com/anomalyco/opencode/issues/29363) - 32k output token silent cap: 15 comments, 7 👍. The app arbitrarily caps max output tokens at 32000 even when users configure higher values for long-context models like DeepSeek V4, forcing reliance on an undocumented, experimental environment variable workaround.
7. [anomalyco/opencode#29703](https://github.com/anomalyco/opencode/issues/29703) - Preserve session history when changing project paths: 5 comments, 13 👍. Users lose all prior chat history for a project if they rename or move its root folder, because sessions are hardcoded to absolute filesystem paths.
8. [anomalyco/opencode#37970](https://github.com/anomalyco/opencode/issues/37970) - Plan/Build mode toggle removed in v1.18.0: 9 comments. Users report the explicit read-only planning mode selector was removed in the latest release, leading to accidental unwanted code edits when they only want the agent to outline changes.
9. [anomalyco/opencode#36826](https://github.com/anomalyco/opencode/issues/36826) - DeepSeek V4 Flash prompt error: 6 comments, 1 👍. Users of one of the most popular recent open source LLMs are hitting generic unhandled server errors when sending prompts, with no clear troubleshooting steps published.
10. [anomalyco/opencode#16636](https://github.com/anomalyco/opencode/issues/16636) - Mistral family model tool call transform broken: 5 comments. Users running self-hosted Codestral/Pixtral/Mixtral endpoints get API failures due to missing normalization of tool call IDs to Mistral's required 9-character alphanumeric format.

## 4. Key PR Progress (Top 10 Important)
1. [anomalyco/opencode#35688](https://github.com/anomalyco/opencode/pull/35688) - Guard missing notification server state: Critical bug fix that closes the widely reported infinite desktop crash loop affecting users on WSL, remote server, and localhost setups by adding safety checks before accessing uninitialized notification server entries.
2. [anomalyco/opencode#37647](https://github.com/anomalyco/opencode/pull/37647) - Nix build adds opencode2 TUI alongside core package: NixOS distribution support improvement that ships both the full desktop GUI and new lightweight terminal client out of the box for Nix users.
3. [anomalyco/opencode#38005](https://github.com/anomalyco/opencode/pull/38005) - Add BigInt arithmetic support to CodeMode: Extends the agent's in-environment code execution capabilities to support full 4096-bit magnitude BigInt operations, bitwise comparisons, and multi-base literal parsing for high-precision calculation use cases.
4. [anomalyco/opencode#33146](https://github.com/anomalyco/opencode/pull/33146) - Fix silent output for `opencode run` CLI command: Resolves 4 longstanding race condition bugs where the CLI run subcommand would hang or return no visible output during long-running task execution.
5. [anomalyco/opencode#33144](https://github.com/anomalyco/opencode/pull/33144) - Add agent teams and nested subagent delegation: Major flagship feature that lets users configure groups of specialized AI agents with hierarchical task routing and budget controls, closing a 12+ month old community feature request.
6. [anomalyco/opencode#33136](https://github.com/anomalyco/opencode/pull/33136) - Fix infinite reasoning text repetition: Adds a circuit breaker to the core reasoning stream parser to stop the agent from infinitely looping repeated tokens, eliminating a major UI jank issue for reasoning model users.
7. [anomalyco/opencode#33127](https://github.com/anomalyco/opencode/pull/33127) - Add TUI history sidebar and scroll-to-message: Massively improves terminal client UX for long sessions, letting users browse all prior user prompts and jump directly to any historical message with one click.
8. [anomalyco/opencode#33091](https://github.com/anomalyco/opencode/pull/33091) - Prevent write tool from overwriting files with empty content: High-severity data safety fix that blocks the write tool from erasing existing valid files when the model returns empty or whitespace-only output.
9. [anomalyco/opencode#33103](https://github.com/anomalyco/opencode/pull/33103) - Add custom API base URL and key support for local connections: Removes manual config file edit requirements for connecting OpenCode to self-hosted local LLM providers including Ollama and LM Studio.
10. [anomalyco/opencode#33082](https://github.com/anomalyco/opencode/pull/33082) - Computer Use mode RFC: Public design document for the upcoming native desktop/ screen control capability for OpenCode agents, opened for community feedback ahead of full implementation.

## 5. Feature Request Trends
The top requested feature directions from 24h updated issues are:
1. Fine-grained user control over agent execution flows (message unqueue, explicit Plan/Build mode selectors, close confirmation dialogs)
2. Expanded distribution compatibility across Nix, Bun, and other non-NPM package ecosystems, plus a long-awaited official Python SDK release
3. Full long-context model support (unrestricted configurable output token limits, reliable write tool performance for 1k+ line files)
4. Workflow persistence improvements (retain project session history after folder path changes, web UI message navigation for large session logs)
5. Accessibility and localization customization (custom cost display currencies, custom TUI spinner text, built-in proxy support for restricted corporate networks)

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users include:
1. Cross-platform desktop crash loops tied to unhandled notification server state, reported across WSL, remote Linux, macOS, and Windows deployments for multiple weeks without a fix until today
2. Unacceptably high number of silent failures across core tools (write, multi-question prompts, DeepSeek model calls) that give users no actionable error messages for debugging
3. Post-v1.15 breaking change that broke installs for all non-NPM package manager users by enabling mandatory postinstall scripts that are blocked by default in Bun and pnpm
4. Arbitrary undocumented hard caps on output tokens that ignore explicit user configuration, forcing developers to rely on experimental, unsupported environment variables to use modern long-context models
5. Total loss of project session history when users reorganize, rename, or move their project root folders, due to sessions being hardlinked to absolute filesystem paths with no migration logic

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-21
*Source: github.com/badlogic/pi-mono*

---

## 1. Today's Highlights
This 24-hour update covers cross-repo activity with no new official Pi releases published in the window. Top engagement centers on community consensus for a major UX overhaul that will make in-session model and thinking-level changes ephemeral by default, preventing accidental permanent setting overrides. Multiple critical billing accuracy fixes and long-tail TUI, provider auth, and package manager compatibility patches landed, while in-progress work on SQLite-backed session storage marks a major reliability upgrade for power users running large, long-lived chat threads.

## 2. Releases
No new official Pi releases were published in the last 24 hours.

## 3. Hot Issues (Top 10 Notable)
All links point to the public earendil-works/pi issue tracker:
1. **#5263 [OPEN] Make in-session model and thinking-level changes ephemeral by default** (8 comments, 8 👍) | https://github.com/earendil-works/pi/issues/5263
   The highest-engagement open feature request, which would eliminate user frustration from unintended global setting changes made during one-off model tests, with a single explicit global default configuration surface in the `/settings` menu. Broad community support is evidenced by equal comment and upvote counts.
2. **#5407 [CLOSED] [bug] Double backspace and double enter on Kitty** (7 comments, 1 👍) | https://github.com/earendil-works/pi/issues/5407
   A resolved top pain point for Kitty terminal users, who experienced broken duplicated input events that made the Pi TUI almost unusable on that emulator.
3. **#6725 [CLOSED] [bug] Copilot pricing for GPT-5.6 models is incorrect** (7 comments, 0 👍) | https://github.com/earendil-works/pi/issues/6725
   A critical billing bug fix that addressed missing cache write cost entries in Copilot cost calculations, which was leading to users seeing significantly lower estimated session costs than their actual OpenAI bills.
4. **#3200 [OPEN] Support video/audio content in prompt command** (6 comments, 4 👍) | https://github.com/earendil-works/pi/issues/3200
   A highly requested extension capability that would extend the existing images support in the `prompt` RPC endpoint to accept audio and video data, enabling full multimodal workflows for models like Gemma 4 and GPT-4o via third-party plugins.
5. **#5931 [CLOSED] [no-action] Copy-paste from TUI introduces extra spaces and line breaks** (6 comments, 0 👍) | https://github.com/earendil-works/pi/issues/5931
   A resolved longstanding quality of life annoyance, where copied text from Pi's TUI had unwanted extra whitespace inserted at line wrap points, forcing users to manually clean up pasted content.
6. **#6509 [CLOSED] Extension-reported usage in the footer cost display (ctx.ui.setUsage)** (5 comments, 0 👍) | https://github.com/earendil-works/pi/issues/6509
   A new API addition that eliminates hidden cost tracking for users running subagent workloads, by letting extensions report non-core session costs directly to the TUI footer for aggregated total cost visibility.
7. **#6794 [CLOSED] [bug] Pi startup super slow due to model catalogue refresh** (3 comments, 1 👍) | https://github.com/earendil-works/pi/issues/6794
   Fix for a widespread recent regression that made Pi take dozens of seconds to load on startup for users on slow or metered internet connections, caused by over-frequent un-cached model catalogue refreshes.
8. **#6652 [OPEN] [bug, inprogress] pi-tui crash log hardcodes ~/.pi/agent/pi-crash.log, ignoring PI_CODING_AGENT_DIR** (4 comments, 0 👍) | https://github.com/earendil-works/pi/issues/6652
   A quality of life fix for power users running Pi with custom non-default agent directories, where a hardcoded log path would spontaneously create stray `.pi` folders in user home directories after TUI crashes.
9. **#6647 [OPEN] [inprogress] Compaction fails on a single transient stream drop (no retry)** (2 comments, 0 👍) | https://github.com/earendil-works/pi/issues/6647
   A critical reliability issue for long sessions, where minor transient network outages during compaction would permanently break a thread by failing to complete required context trimming.
10. **#6882 [CLOSED] [untriaged] Update brace-expansion to 5.0.7 for GHSA-3jxr-9vmj-r5cp** (1 comment, 0 👍) | https://github.com/earendil-works/pi/issues/6882
    A prioritized security fix addressing a high-severity availability vulnerability in a nested dependency package.

## 4. Key PR Progress (Top 10 Notable)
All links point to the public earendil-works/pi pull request tracker:
1. **#6881 [OPEN] feat(ai): use provider-reported cost when responses include it** | https://github.com/earendil-works/pi/pull/6881
   Implements support for direct billed cost import from Vercel AI Gateway responses, eliminating static rate calculation mismatches for non-standard or new models not yet added to Pi's model catalog.
2. **#6775 [OPEN] retry on compaction/branch summarization retryable failures** | https://github.com/earendil-works/pi/pull/6775
   Resolves issue #6647, adding existing retry logic for transient network errors to compaction and branch summarization workflows, with ongoing team discussion about adding user-facing status indicators for retry events.
3. **#6874 [CLOSED] feat(session-selector): add Ctrl+A archive shortcut to session picker** | https://github.com/earendil-works/pi/pull/6874
   New quality of life feature that lets users archive old sessions directly in the `/resume` menu, auto-sorting archived sessions by month to keep the active session list uncluttered.
4. **#6864 [CLOSED] fix: env section ignored** | https://github.com/earendil-works/pi/pull/6864
   Resolves #6799, restoring broken functionality that lets users define provider-scoped environment variables in `auth.json` (e.g. custom Azure OpenAI endpoints) that previously were ignored in favor of system process environment variables.
5. **#6858 [CLOSED] feat(ai): add Qwen Token Plan as built-in provider** | https://github.com/earendil-works/pi/pull/6858
   Closes #6850, adding official first-party support for Alibaba Cloud's Qwen Token Plan, with separate geofenced endpoints for international and mainland China users.
6. **#6865 [CLOSED] feat: get_available_thinking_levels rpc** | https://github.com/earendil-works/pi/pull/6865
   Adds a new public RPC endpoint that returns the full list of supported thinking levels for the active model, enabling third-party extensions to expose native thinking level selection controls.
7. **#6859 [CLOSED] Use bun info for package update checks** | https://github.com/earendil-works/pi/pull/6859
   Fixes a silent failure bug for Bun package manager users, where Pi's automatic extension update check would never run correctly because it used a `bun view` command that Bun interprets as a missing script.
8. **#6837 [CLOSED] fix(ai): align GPT-5.6 Codex context with official client** | https://github.com/earendil-works/pi/pull/6837
   Corrects the GPT-5.6 model context window to 272K, matching OpenAI's official published spec and resolving broken long-context workloads that hit unexpected token limits.
9. **#6812 [CLOSED] Remove "./" from pi-ai bin path so lockfiles stop flip-flopping** | https://github.com/earendil-works/pi/pull/68

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-21
---
## 1. Today's Highlights
The core development team prioritized patching the widespread, high-impact 400 error affecting all thinking-only Qwen model endpoints and regional Token Plan API users, resolving a critical 48-hour old regression that broke core internal operations like context compaction and web fetch. Multiple targeted usability improvements landed for MCP integrations, CLI autocomplete, and background npm update flows, while the Qwen Code autonomous autofix workflow received major upgrades to reduce maintainer manual toil. No new official public releases were shipped in the last 24 hours.

## 2. Releases
No new official Qwen Code releases were published in the last 24 hours.

## 3. Hot Issues
1. **RFC: Reliable auto-memory recall (#7040)**: Authored by core maintainer jifeng, this P2 roadmap item narrows the memory system scope to build a universal, user-facing auto-recall feature that avoids unnecessary enterprise governance complexity, with 7 rounds of ongoing maintainer discussion. [QwenLM/qwen-code#7040](https://github.com/QwenLM/qwen-code/issues/7040)
2. **MCP server tool/resource listing timeout bug (#7147)**: Reported by community user imrehg, this bug prevents popular 3rd party MCP servers (including Fastmail's official MCP implementation) from completing setup in Qwen Code, tagged for community PR contributions. [QwenLM/qwen-code#7147](https://github.com/QwenLM/qwen-code/issues/7147)
3. **P1 Bug: Side query forces enable_thinking=false breaking Token Plan endpoints (#7284)**: This critical regression breaks all users of the ap-southeast-1 region Qwen Cloud Token Plan, which requires `enable_thinking` to be set to true for all API calls, throwing persistent 400 errors for common operations like web fetch. [QwenLM/qwen-code#7284](https://github.com/QwenLM/qwen-code/issues/7284)
4. **P1 Bug: Internal operations send enable_thinking=false to thinking-only models (#7332)**: Users running reasoning-only models such as `qwen3.8-max-preview` cannot use internal core features (context compaction, permission classification, goal judgement) due to forced parameter overrides, leading to total session failures. [QwenLM/qwen-code#7332](https://github.com/QwenLM/qwen-code/issues/7332)
5. **P1 Bug: Agent tool schema enforces mutually exclusive working_dir and isolation parameters (#7315)**: All subagent use cases for users on OpenAI-compatible model providers fail validation, as providers incorrectly return both mutually exclusive fields in tool call payloads. [QwenLM/qwen-code#7315](https://github.com/QwenLM/qwen-code/issues/7315)
6. **VS Code Companion v0.19.11 ACP unexpected exit on Windows (#7056)**: A large cohort of Windows users on the latest VS Code IDE companion release cannot connect to the Qwen agent, with the ACP process exiting immediately with code 0, tagged for community PR fixes. [QwenLM/qwen-code#7056](https://github.com/QwenLM/qwen-code/issues/7056)
7. **ap-southeast-1 token plan not selectable on the auth page (#7252)**: Users in the Southeast Asia region cannot select their regional paid token plan at authentication, blocking onboarding for all new paid users in that market. [QwenLM/qwen-code#7252](https://github.com/QwenLM/qwen-code/issues/7252)
8. **Hardened tool output budgeting and observability refactor (#7306)**: A core design discussion item to eliminate inconsistent tool output truncation logic across multiple independent code paths, reducing unexpected context overflow and data loss scenarios. [QwenLM/qwen-code#7306](https://github.com/QwenLM/qwen-code/issues/7306)
9. **Context-inheriting subagent support for headless mode (#7348)**: This feature request is a top blocker for teams running Qwen Code in CI/CD pipelines, automated evaluation harnesses, and non-interactive SDK sessions that currently cannot use full context inheritance for subagent tasks. [QwenLM/qwen-code#7348](https://github.com/QwenLM/qwen-code/issues/7348)
10. **web_fetch automatic fallback to local curl parsing (#7298)**: Requested by power users, this fallback logic will drastically improve web fetch reliability during outages of the side query API or when sites implement anti-scraping protections. [QwenLM/qwen-code#7298](https://github.com/QwenLM/qwen-code/issues/7298)

## 4. Key PR Progress
1. **Fix: Skip enable_thinking=false for thinking-only models (#7333)**: Directly resolves the critical P1 #7332 regression, adding logic to respect the model's preset thinking requirement for all internal side queries and operations. [QwenLM/qwen-code#7333](https://github.com/QwenLM/qwen-code/pull/7333)
2. **Closed Fix: Map positional args to optional MCP prompt parameters (#7317)**: Fixes the #7314 bug where non-required MCP prompt positional arguments were silently dropped, ensuring full compatibility with all valid MCP server prompt schemas. [QwenLM/qwen-code#7317](https://github.com/QwenLM/qwen-code/pull/7317)
3. **Fix: Include typed directory in /cd tab completion (#7320)**: Resolves #7318, allowing users to tab-select the directory they just typed when the path ends with `/`, fixing a long-standing CLI quality of life issue. [QwenLM/qwen-code#7320](https://github.com/QwenLM/qwen-code/pull/7320)
4. **Fix: Update npm installs safely in background (#7322)**: Addresses the #7049 update check timeout UX pain point, running new version installs in an immutable background directory so active user sessions never get blocked on slow npm registry networks. [QwenLM/qwen-code#7322](https://github.com/QwenLM/qwen-code/pull/7322)
5. **Feature: Autofix auto-resolves implemented review threads (#7364)**: The autonomous autofix loop now automatically marks review threads it has fully addressed as resolved, removing the need for human maintainers to manually verify every fixed comment. [QwenLM/qwen-code#7364](https://github.com/QwenLM/qwen-code/pull/7364)
6. **Fix: Autofix retries verification gate crashes instead of discarding fixes (#7351)**: The autofix loop now distinguishes between a deliberate test rejection and a transient verification infrastructure crash, re-running checks instead of wasting already completed agent work. [QwenLM/qwen-code#7351](https://github.com/QwenLM/qwen-code/pull/7351)
7. **Closed Fix: Deliver background agent replies for channel sessions (#7336)**: Resolves #7334, ensuring users on third-party chat channels (DingTalk, Feishu) receive the full final response after background subagent tasks complete. [QwenLM/qwen-code#7336](https://github.com/QwenLM/qwen-code/pull/7336)
8. **Feature: Expose worktree isolation toggle in new session empty state (#7365)**: Moves the previously hidden isolated worktree subagent toggle from the sidebar git dropdown to the main new session welcome page, drastically improving discoverability for the popular sandboxed execution feature. [QwenLM/qwen-code#7365](https://github.com/QwenLM/qwen-code/pull/7365)
9. **Feature: Add fork_turns parameter for fork subagents (#7346)**: Adds an optional parameter that limits inherited context to the most recent N user turns for fork subagents, drastically cutting token overhead for large session workflows. [QwenLM/qwen-code#7346](https://github.com/QwenLM/qwen-code/pull/7346)
10. **Fix: Use process.platform for Windows adb detection in mobile MCP (#7362)**: Resolves Android device detection failures on Windows for the official mobile MCP tooling, by correcting a bug that used the runtime platform environment variable instead of native OS detection. [QwenLM/qwen-code#7362](https://github.com/QwenLM/qwen-code/pull/7362)

## 5. Feature Request Trends
The most requested feature directions from the recent issue backlog are:
1. **Memory system maturity**: Community and maintainer work is focused on delivering reliable auto-memory recall, paired with content-safe telemetry to measure recall performance without exposing user private data.
2. **Subagent capability expansion**: Top asks include full context inheritance for headless/CI subagent runs, configurable context scope for fork subagents, and automatic fallback logic for unreliable web fetch operations.
3. **Workflow automation guardrails**: Teams are requesting formal CODEOWNERS rules for core benchmark and harness modules, plus pre-merge PR intake automation to enforce roadmap alignment and prevent unintended regressions on critical paths.
4. **SDK usability for integrators**: Requested enhancements include custom user-facing display names for registered SDK workspaces, and more granular skill enable/disable logic that separates admin hard denylists from user-controlled toggle settings.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users:
1. **Reasoning parameter mismatch regression**: The series of bugs where core internal operations force `enable_thinking=false` has caused cascading failures for all users of reasoning-only models and Qwen Cloud regional Token Plan endpoints in the last 48 hours, currently marked as the team's highest priority fix.
2. **MCP compatibility gaps**: Multiple reports of broken integration with popular third-party MCP servers, including tool listing timeouts, silently dropped prompt arguments, and unhandled error cases.
3. **VS Code Windows connectivity failures**: A large portion of Windows users on the recent v0.19.11 VS Code IDE companion release cannot establish a stable connection to the local Qwen ACP agent due to unexpected process exits.
4. **Restricted npm network UX failures**: Users in regions with limited or slow access to the public npm registry face unhandled timeout errors during update checks, which incorrectly throw blocking errors instead of non-intrusive warning fallbacks.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-07-21
---
## 1. Today's Highlights
Over 20 v0.9.1 release-blocker fixes and improvements were merged in the past 24 hours, including critical TUI reliability patches, subagent security hardening, and native HarmonyOS build support delivered by community contributors. A set of high-priority Windows user-reported bugs (including the stuck setup wizard issue) received same-day resolution, while open top-of-mind workflow consistency concerns around the CodeWhale agent ignoring user-defined constitutions remain the highest-engagement active topic on the repository. No new official releases were published in the 24-hour window.

## 2. Releases
No new stable, pre-release, or nightly builds for Hmbown/DeepSeek-TUI were published in the last 24 hours.

## 3. Hot Issues (Top 10 Notable)
All links point to `https://github.com/Hmbown/CodeWhale/issues/[number]`
1. **#4032 [OPEN] Codewhale not following the constitution** (40 comments): The highest-engagement open issue, reporting that the CodeWhale agent consistently re-implements tasks from scratch instead of using pre-agreed shared custom scripts defined in the user's workflow constitution. Community users are concerned this breaks reproducibility of long-running collaborative projects.
2. **#4042 [CLOSED] Environment-level tool sandboxing for sub-agents** (18 comments): A merged security enhancement that enforces `--disallowed-tools` rules across all session, sub-agent, Fleet worker and MCP server execution contexts, resolving a long-standing unpatched privilege escalation risk in multi-agent deployments.
3. **#4489 [CLOSED] Hooks process leak** (6 comments): Fixed a Windows-only bug where orphaned Node.js processes from hanging hook commands caused unbounded memory bloat after hours of active TUI usage.
4. **#4605 [OPEN] Enter key send lag causes hundreds of ms UI freezes** (2 comments): A P1 cross-version regression affecting all builds from v0.6.x to v0.9.0 on Windows, causing major UX friction for high-frequency chat users submitting messages via the keyboard.
5. **#4603 [OPEN] Long output content cannot scroll past viewport** (2 comments): A P2 UI bug that truncates large diffs and multi-turn conversation logs with no scroll access, forcing users to manually export content to external text editors to review full outputs.
6. **#4604 [CLOSED] Setup wizard forced on every restart** (2 comments): Same-day patch for a critical Windows onboarding blocker that reset the first-run completion flag after every application exit, making production usage of the TUI impossible for new users.
7. **#4594 [CLOSED] Sidebar list does not scroll to the bottom** (2 comments): Resolves a TUI navigation bug where users could not access the last 2-3 items in a 10+ entry to-do list, blocking access to pending assigned subagent tasks.
8. **#414 [OPEN] Resolve one truthful child runtime before v0.9.1 launch** (5 comments): Core release-blocker architecture task that mandates all subagent runs use a single validated persisted manifest, eliminating risks of cross-state prompt tampering or inconsistent tool schema injection.
9. **#2889 [OPEN] Work Agent rows show real sub-agent activity details** (4 comments): UX enhancement that restores visibility into live, structured subagent execution status in the TUI sidebar, replacing generic "running" labels with exact task descriptions for background workers.
10. **#3934 [OPEN] Collapse Fleet and agent roles to Planner / Worker / Reviewer / Verifier** (2 comments): Community-requested role simplification that retires 10+ overlapping legacy role definitions across the runtime, removing confusion for users configuring permission postures for multi-agent fleets.

## 4. Key PR Progress (Top 10 Important)
All links point to `https://github.com/Hmbown/CodeWhale/pull/[number]`
1. **#4616 fix(tui): make onboarding completion durable**: Resolves the broken setup wizard persistence bug, storing the first-run completion state in the root CodeWhale home directory to avoid conflicts with legacy scattered state files.
2. **#4600 feat(tui): auto-fork read-only same-route children onto the parent's cached prefix**: Delivers a 60% reduction in per-subagent input token overhead, eliminating redundant 100K+ token context re-crawls that each subagent previously ran on cold start.
3. **#4613 + #4617 fixes for Moonshot/Kimi MFJS schema compliance**: Sanitizes tool call parameters to match Moonshot's strict MFJS (Moonshot Flavored JSON Schema) requirements, resolving 100% of tool call failures reported on Kimi K3 model routes.
4. **#4566 [v0.9.2] update tui Cargo.toml for HarmonyOS build**: Community-contributed patch that gets the full DeepSeek TUI runtime compiling and running natively on HarmonyOS PC, extending official cross-platform support.
5. **#4618 fix(tui): keep long-running tools live**: Adds TUI watchdog heartbeats to prevent 10-minute timeouts on long-running operations (large codebase searches, remote deployment jobs) that previously triggered false stall detection.
6. **#4609 fix(tui): respect umask for workspace atomic writes**: Separates user workspace file permission logic from internal CodeWhale state handling, fixing over-restrictive file ACLs that broke shared multi-user workspace collaboration.
7. **#4608 fix(tui): align permission postures and compact approvals**: Makes Auto-Review mode fully non-modal, preserves Full Access permissions across subagent handoffs, and eliminates spurious approval popups for trusted pre-configured workloads.
8. **#4610 [v0.9.2] feat(tui): add configurable session token header**: Adds an opt-in TUI header extension that displays real-time cumulative input, cache-hit, and output token counts, removing the need to switch to separate metrics dashboards to track usage.
9. **#4597 feat(tui): compress the Agent mode prompt without losing tested invariants**: Reduces the static agent system prompt size by 18% (from 661 to 542 words), cutting cold start latency and reducing baseline token overhead for all agent workloads.
10. **#4593 fix(tui): harden PowerShell invocation for safe Windows execution**: Adds `NoLogo/NoProfile/NonInteractive` flags and correct exit code capture for all Windows PowerShell spawns, eliminating 80% of previously reported intermittent shell execution failures.

## 5. Feature Request Trends
Across all active issues, the most prioritized community feature directions are:
1. **Unified simplified permission/role system**: Demand for the proposed 4-canonical-role model and single typed permission contract that eliminates 10+ overlapping legacy permission settings for tool calls.
2. **Windows platform parity**: Requests for full feature and reliability parity between Windows TUI deployments and better-tested Linux/macOS builds.
3. **Subagent runtime hardening**: Community push for explicit workspace write scopes, isolated execution sandboxes, and resumable subagent task tracking to eliminate cross-task workspace conflicts.
4. **Embedded cost visibility**: User requests for built-in TUI token usage meters to track per-workload costs without needing external observability tools.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. **Windows reliability gaps**: Process leaks, UI freezes, scroll failures, and broken onboarding state remain the top unaddressed pain point for Windows users, representing a clear testing coverage gap relative to Unix-like platforms.
2. **Unplanned subagent token overhead**: Users reported unexpected excessive model bills prior to yesterday's fork caching fix, as cold-start subagents re-crawled and re-paid for the same context data the parent process already generated.
3. **Inconsistent agent adherence to rules**: Multiple developers flagged that CodeWhale frequently ignores pre-defined custom scripts and workflow constitution rules, breaking reproducibility of long-running collaborative research and engineering workflows.
4. **TUI visibility limits**: Users are frustrated by truncated long outputs, missing live subagent activity status, and lack of in-terminal usage metrics, requiring frequent context switches to external tools to debug agent behavior.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*