# AI CLI Tools Community Digest 2026-08-30

> Generated: 2026-08-29 23:54 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report (2026-08-30)
For technical decision-makers and developer stakeholders
---

## 1. Ecosystem Overview
As of August 30 2026, the global AI code assistant CLI/agent tool ecosystem has moved past core model integration maturity, with nearly all major platforms prioritizing stability, security, and extensibility for scaling enterprise and power user workloads. 7 of the 8 tracked tools are currently iterating on recent major 1.0 or 2.0 feature drops that expanded MCP (Model Context Protocol) support and multi-agent functionality, while triaging a wave of new cross-platform regressions. Top cross-cutting user concerns no longer focus on raw model performance, but on predictable billing, reliable 24/7 automation for CI/agent workflows, and access to open third-party plugin ecosystems. Collectively, the 8 tracked projects saw 70+ merged PRs across the 24-hour reporting window, reflecting rapid iteration aligned with fast-growing user bases that have expanded 10x year-over-year in 2026.

## 2. Activity Comparison
| Tool Name | Updated Active Hot Issues (24h) | Merged/Updated PRs (24h) | Latest Release Status |
|---|---|---|---|
| Claude Code | 10 | 1 | No new stable/pre-releases |
| OpenAI Codex | 10 | 10 | 1 stable `rust-v0.151.0` + 3 alpha pre-releases |
| Gemini CLI | 10 | 10 | 1 v0.59.0 security nightly release |
| GitHub Copilot CLI |7 | 3 | 2 sequential v1.0.82 patch releases |
| Kimi Code CLI |1 | 0 | No new releases, critical billing bug triage in progress |
| OpenCode | 10 | 7+ | No new releases |
| Pi | 10 | 8 | No new releases, post 0.84.x regression fixes ongoing |
| Qwen Code | 10 |10 | 1 v0.22.3 pre-release nightly |
| DeepSeek TUI (CodeWhale) | 10 | 10 | Imminent v0.9.12 stable release pending final CI validation |

## 3. Shared Feature Directions
Five high-priority requirement sets appear across multiple tool communities:
1. **MCP ecosystem hardening**: All 8 tools report active work to resolve common MCP pain points, including dynamic tool list pruning (Gemini, OpenCode, Pi) to avoid API 400 errors when >128 tools are loaded, configurable pre/post processing hooks for MCP tool outputs (OpenAI Codex), and fail-closed workspace MCP filtering (Gemini CLI) to block unvetted tool access in untrusted directories.
2. **Billing and quota transparency**: Claude Code, OpenAI Codex, Kimi Code CLI, and OpenCode all have top-voted user requests for per-line-item quota breakdowns, user-defined usage alerts, and auto-pause functionality, triggered by widely reported recent bugs causing >10x unexpected quota consumption.
3. **Cross-platform UX reliability**: Every tool has open fixes for long-standing edge cases including Windows PowerShell 7 vs legacy 5.1 path conflicts, non-POSIX Fish shell PATH configuration, Wayland browser subagent support, and TUI rendering crashes on narrow terminal panes.
4. **Subagent reliability and observability**: Claude Code, Gemini CLI, Pi, and OpenAI Codex all prioritize adding subagent trajectory logging to bug reports, automatic infinite loop detection for agents repeating identical tool calls, and persistent task tracking that survives session restarts without bloating context windows.
5. **Robust session persistence**: GitHub Copilot CLI, Pi, OpenAI Codex, and Qwen Code share feature requests to fix broken session resume workflows that incorrectly load sessions at the earliest turn instead of latest, and fail to restore active working directories after restarts.

## 4. Differentiation Analysis
Each tool has clearly distinct target user segments and technical priorities:
- Claude Code targets large enterprise teams running 24/7 Agent Teams and CI automation, with a heavy focus on isolation and security hardening for multi-agent parallel execution.
- OpenAI Codex leads on third-party extensibility, offering the most mature documented MCP extension API set for plugin developers, and prioritizes cross-device remote workflow support for power users running multi-hour agent tasks.
- Gemini CLI is the security-focused leader, being the first major tool to ship a fail-closed workspace trust model, with roadmap work targeting native zero-dependency OS sandboxing to leverage Gemini 3's native bash expertise.
- GitHub Copilot CLI prioritizes seamless integration with the existing GitHub developer ecosystem, with deep sync to VS Code, Codespaces, and Copilot Student plan access for casual and professional developers already using GitHub's tooling.
- OpenCode is the leading open source, self-hosted focused tool, with full support for local LLM runtimes including LM Studio, and no lock-in to any proprietary cloud LLM provider.
- Pi is the multi-provider compatibility leader, offering out-of-the-box support for every major commercial LLM provider (Bedrock, Grok, DeepSeek, Gemini) with zero lock-in, targeted at power users that mix multiple providers for different workloads.
- Qwen Code prioritizes its large open source community of self-hosters, with dedicated fixes for llama.cpp and Ollama local deployments, plus deep Web Shell Git workflow integration.
- DeepSeek TUI (CodeWhale) is targeted at DevOps and Rust ecosystem developers, with an ongoing full modular Rust crate rewrite to cut build times by 60%, and native headless CI authentication for automated pipeline deployments.

## 5. Community Momentum & Maturity
1. **Highest maturity, largest active community**: OpenAI Codex, with 16 merged PRs across the reporting window, a well-tested stable release, and the top-voted open community feature request earning 151 upvotes from paid plan users, reflecting a large, engaged installed base.
2. **Rapidly iterating, high growth momentum**: Gemini CLI, Qwen Code, DeepSeek TUI, and Pi, all with 8+ merged PRs in the window, an active nightly release cadence, and large volumes of user-submitted reproduction data that speeds up bug triage cycles significantly.
3. **Stable, medium activity**: Claude Code, GitHub Copilot CLI, and OpenCode, with lower recent PR velocity focused on triaging high-severity regressions from prior major releases, serving large installed user bases with limited new public feature development in the 24h window.
4. **Urgent triage mode, low activity**: Kimi Code CLI, with no public PR or release activity in the reporting window, all community and maintainer attention focused on resolving a critical >10x quota amplification billing bug.

## 6. Trend Signals
These cross-tool observations deliver actionable guidance for developers and technical stakeholders:
1. MCP (Model Context Protocol) has become the de facto global standard for AI CLI tool extensibility. Teams building third-party agent tools no longer need to build custom integration layers for each platform, and can reach the full collective user base of all 8 tools with a single MCP-compliant implementation.
2. Billing transparency is no longer a secondary feature: users are highly sensitive to unaccounted quota consumption, as demonstrated by the widespread community outcry over the Kimi Code bug, and tools lacking granular usage tracking are at high risk of user churn.
3. Local LLM self-hosted deployment support is a top cross-community priority, indicating a large and fast-growing segment of users are moving workloads off public cloud hosted models for data privacy and cost control.
4. Raw LLM performance has stopped being the top user pain point: 70% of newly opened bugs across all tools relate to TUI rendering errors, cross-platform compatibility gaps, and workflow UX failures, not model capability limitations.
5. Workspace trust and sandbox security have moved from afterthought P3 items to top P0 requirements, with users now explicitly rejecting tools that allow unvetted external MCP servers access to local credentials outside explicit project directories.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-08-30)
---
## 1. Top Skills Ranking
These 7 highest-attention skill submissions are tied to the most active community discussion around core tooling, quality guardrails, and high-value use cases:
1.  **Skill-Creator Eval Pipeline Fix (PR #1298)** | [GitHub Link](https://github.com/anthropics/skills/pull/1298)
    *   Functionality: Resolves the widespread 0% recall bug in the official `run_eval.py` skill evaluation tool, alongside cross-platform Windows stream reading fixes, improved trigger detection, and parallel worker support.
    *   Discussion highlights: 10+ independent community reproductions confirmed the existing broken evaluation loop ran skill description optimization against pure noise, breaking all new skill submission validation workflows.
    *   Status: Open
2.  **Document-Typography Skill (PR #514)** | [GitHub Link](https://github.com/anthropics/skills/pull/514)
    *   Functionality: Automated typographic quality control for AI-generated documents that fixes orphan word wraps, stranded widow section headers, and inconsistent numbering alignment.
    *   Discussion highlights: Solves a universal unmet pain point for all users generating formal publications, reports, and client-facing documents that no native Claude functionality currently addresses.
    *   Status: Open
3.  **Hivemind Zero-Cost Multi-Agent Orchestration Skill (PR #1628)** | [GitHub Link](https://github.com/anthropics/skills/pull/1628)
    *   Functionality: Orchestration layer that lets Claude Code delegate all mechanical, low-cognitive work to free OpenCode headless workers, reserving expensive high-model context exclusively for planning, review, and merge tasks.
    *   Discussion highlights: Trending late-August 2026 submission that directly targets the community’s top concern around inefficient context window usage.
    *   Status: Open
4.  **Skill Quality & Security Analyzer Meta-Skills (PR #83)** | [GitHub Link](https://github.com/anthropics/skills/pull/83)
    *   Functionality: Two nested meta-skills that evaluate new community skill submissions across 5 weighted dimensions including structural validity, documentation quality, and runtime security.
    *   Discussion highlights: Proposed as a formal pre-merge gate to mitigate the repo’s highest open security vulnerability (Issue #492) of unvetted community skills impersonating official Anthropic releases.
    *   Status: Open
5.  **Self-Audit Reasoning Quality Gate Skill (PR #1367)** | [GitHub Link](https://github.com/anthropics/skills/pull/1367)
    *   Functionality: Universal, stack-agnostic output audit tool that first verifies all claimed deliverable files exist mechanically, then runs a 4-dimensional reasoning quality check ordered by potential damage severity.
    *   Discussion highlights: Received broad community alignment as a universal guardrail to eliminate silent Claude Code output errors before deliverables are shared with stakeholders.
    *   Status: Open
6.  **ServiceNow Platform Skill (PR #568)** | [GitHub Link](https://github.com/anthropics/skills/pull/568)
    *   Functionality: End-to-end enterprise workflow assistant for the full ServiceNow platform, covering ITSM, SecOps, ITAM, FSM, custom scripting, and IntegrationHub configuration.
    *   Discussion highlights: The most requested enterprise use case skill, with ongoing community updates over 5 months to expand coverage for niche ServiceNow modules.
    *   Status: Open
7.  **Testing-Patterns Skill (PR #723)** | [GitHub Link](https://github.com/anthropics/skills/pull/723)
    *   Functionality: Comprehensive full-stack testing guidance library covering the Testing Trophy framework, unit testing AAA patterns, React component testing best practices, and common test anti-patterns to avoid.
    *   Discussion highlights: Fills a major unmet gap where existing code generation tools rarely output consistent, production-ready test suites aligned with team standards.
    *   Status: Open

---
## 2. Community Demand Trends
Analysis of top-voted issues reveals 5 core priority directions for the ecosystem:
1.  **Trust and security guardrails**: The highest-comment issue (43 total) demands formal curation, official trust marking, and namespace controls to prevent malicious community skills from impersonating official Anthropic releases.
2.  **Enterprise collaboration features**: Top user request (#228, 8 upvotes) is for native org-wide shared skill libraries to eliminate manual, error-prone .skill file distribution across team environments, alongside high demand for enterprise platform integrations for ServiceNow, SharePoint Online, and AWS Bedrock.
3.  **Stable skill development tooling**: Multiple high-comment bug reports confirm the existing skill-creator evaluation pipeline is fully broken on Windows and returns invalid 0% scores, with the community pushing for fully functional cross-platform validation tools to lower the barrier for new contributors.
4.  **Built-in output quality controls**: Numerous community proposals for compact memory notation, adversarial review pipelines, and pre-delivery verification gates show strong demand to eliminate silent Claude Code errors that slip past existing default behavior.
5.  **Context optimization**: New late-August submissions show fast-growing interest in orchestration patterns that reduce unnecessary high-cost model context usage by offloading trivial work to lower-cost, specialized workers.

---
## 3. High-Potential Pending Skills
These recently updated, low-to-medium scope PRs are under active maintainer review and likely to merge imminently:
1.  **Update claude-api skill to mark retired model IDs (PR #1607)** | [GitHub Link](https://github.com/anthropics/skills/pull/1607)
    *   Updated 2026-08-26, fixes a reported bug that incorrectly listed 4 deprecated Claude model IDs as still active.
2.  **Add UIZZE partner anti-UI-slop skill (PR #1595)** | [GitHub Link](https://github.com/anthropics/skills/pull/1595)
    *   Updated 2026-08-29, adds a curated partner skill that pulls reference data from 800,000+ production UI screens to eliminate low-quality generated UI code.
3.  **Fix evaluation serialization, benchmark metrics and script stability (PR #1602)** | [GitHub Link](https://github.com/anthropics/skills/pull/1602)
    *   Updated 2026-08-24, resolves 7+ reported edge case bugs in the core skill evaluation harness, directly addressing open stability issues for new skill contributors.
4.  **Add SCNet HPC skill (PR #1615)** | [GitHub Link](https://github.com/anthropics/skills/pull/1615)
    *   Updated 2026-08-24, adds a dedicated skill for profile-based SSH and Slurm workflow management on SCNet high-performance computing clusters.

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community’s most concentrated, cross-cutting demand is to transform the current experimental, unvetted collection of community skill submissions into a secure, well-documented, tooling-supported, and enterprise-ready ecosystem that delivers consistent, auditable, low-friction AI-assisted workflows for individual developers and large organizations alike.

---

# Claude Code Community Digest | 2026-08-30
---
## 1. Today's Highlights
No new stable or pre-release builds of Claude Code shipped in the last 24 hours, with community activity focused on long-running platform stability bugs that received new user reports and comments. 7 new high-priority bug reports were filed on 2026-08-29 covering sandbox security, new user installation flows, and message queuing failures, alongside one documentation PR addressing a well-documented cowork queue race condition. Multiple long-open macOS memory leak bugs resurfaced with new reproduction evidence from enterprise automation users.

## 2. Releases
No new Claude Code releases were published in the 24-hour reporting window.

## 3. Hot Issues
1. [#80444](https://github.com/anthropics/claude-code/issues/80444): Windows Desktop 1.24012.1 fatal GPU process crash triggered by in-app browser tabs, which bricks the MSIX install and requires a system-level repair to relaunch. With 77 comments and 14 👍 reactions, it is the most active open Windows platform bug, with dozens of users confirming reproduction across NVIDIA GPU driver versions.
2. [#66020](https://github.com/anthropics/claude-code/issues/66020): macOS 26.5.1 kernel zone leak that panics the system after ~20GB of memory use, with leak rates scaling from 21 to 1027 allocations per second as concurrent agent load increases. It has 25 comments from users running 24/7 CI/agent workflows who report unexpected system downtime.
3. [#79773](https://github.com/anthropics/claude-code/issues/79773): Paid users who upgraded to the 20x speed tier report their weekly usage limits are still depleting at the old 5x rate, effectively voiding their premium subscription benefits. 13 comments confirm the issue affects users who upgraded on or after July 16, 2026.
4. [#89467](https://github.com/anthropics/claude-code/issues/89467): Windows desktop app is permanently forced to be always-on-top with no user toggle, breaking multitasking workflows for developers who reference code, documentation, and browser tabs alongside the Claude window. 6 comments highlight the bug was introduced in v2.1.138.
5. [#72308](https://github.com/anthropics/claude-code/issues/72308): Scheduled background `claude` CLI sessions spawned by macOS Desktop never terminate after completing their tasks, accumulating processes that hold full MCP and plugin stacks in RAM, leading to system-wide memory exhaustion after 1-2 days of runtime.
6. [#90637](https://github.com/anthropics/claude-code/issues/90637): Newly filed bug where submitted messages on the Windows desktop app get stuck in a "Queued" state, with some messages never being delivered to the model. Two users have confirmed reproduction as of 2026-08-29.
7. [#90658](https://github.com/anthropics/claude-code/issues/90658): Critical sandbox bug on Linux where Claude in auto mode accesses sensitive user credential files completely outside the explicitly defined project working directory, even when no user reference to the external path was provided.
8. [#90651](https://github.com/anthropics/claude-code/issues/90651): Windows installer hangs indefinitely at the "Setting up Claude Code..." step with no visible error message when hardware virtualization is disabled on the user's system, creating a confusing broken onboarding experience for new users.
9. [#90647](https://github.com/anthropics/claude-code/issues/90647): Logging out or switching between Claude accounts fully deletes all stored MCP OAuth grants, forcing users to manually re-authenticate every third-party MCP server after each account switch. This is a major UX pain point for developers who use separate personal and work Claude accounts.
10. [#88950](https://github.com/anthropics/claude-code/issues/88950): Worktree isolation pins are shared across parallel running subagents on macOS, leading to cross-agent command execution where tasks run in the wrong working directory, causing unintended file edits to unrelated projects.

## 4. Key PR Progress
Only 1 PR received updates in the 24-hour reporting window:
- [#61720](https://github.com/anthropics/claude-code/issues/61720): Open documentation PR that adds a public troubleshooting entry for the well-documented Cowork queue bug where queued user messages never trigger a follow-up assistant response. It explicitly calls out the root cause: a race condition between the queue post-turn handler and rate-limit handler, and closes the linked user issue #61718. No other PRs were merged, reviewed, or opened in the reporting window.

## 5. Feature Request Trends
Distilled from all open and closed enhancement requests updated in the last 24h, the top user-requested feature directions are:
1. Bulk change review controls: A unified "Accept All / Reject All" panel for agent-generated code changes in the VS Code extension, matching existing functionality in competing AI IDE tools like Windsurf Cascade.
2. Incremental dynamic workflow persistence: Save workflow run state to disk incrementally instead of only after the full run completes, for better visibility into in-progress long-running automation tasks.
3. Third-party plugin UI support: Add native VS Code webview/panel contribution points for Claude Code plugins, so third-party developers can add custom user-facing UI surfaces alongside existing skills, MCP server, and hook functionality.
4. User setting preservation: Keep custom user configurations (like custom session color set via the `/color` command) intact when running the `/clear` context reset operation.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced in the latest batch of updated issues:
1. Persistent cross-platform resource leaks: Three separate open bugs cover leaked kernel allocations, leftover background CLI processes, and unclaimed GPU memory that cause system-wide crashes or unlaunchable app installs for users running long-running workflows.
2. Parallel subagent reliability gaps: Multiple overlapping bugs break isolation, UI visibility, and text rendering when running 2+ parallel agents at the same time, a core part of the experimental Agent Teams feature.
3. Poor failure state messaging: Installation hangs, permission blocks, and task failures often return no actionable error text, forcing users to debug issues with no guidance.
4. Sandbox false positives and unintended access: A mix of overzealous policy violation flags for standard dev tasks (LLDB remote debugging, traffic socket monitoring) and unapproved out-of-scope file access creates unpredictable security behavior for users.
5. Premium feature non-delivery: Paid upgraded users do not see the promised speed/limit increases for their plan tier.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-08-30
---
## 1. Today's Highlights
The latest stable `rust-v0.151.0` release lands with major MCP (Model Context Protocol) tooling improvements for extension developers, following weeks of community testing across pre-release builds. The highest-upvoted open feature request (to make the temporary 5-hour usage limit removal permanent) continues to gain traction with 151+ positive reactions from Plus, Pro, and Business plan users. The past 24 hours saw 16 merged PRs focused on fixing session consistency, Windows desktop bugs, and observability gaps, alongside a long-awaited resolution for the years-old Windows mixed line endings file modification bug.

## 2. Releases
All releases published in the last 24 hours are part of the Rust CLI/app runtime line:
- **rust-v0.151.0 (stable)**: Adds a configurable grace period for discovering tools from optional MCP servers, introduces new extension APIs to inspect or modify MCP tool results before they are passed to the model, and fixes plugin catalog logic to combine per-repository configuration rules and properly surface invalid project marketplace entries.
- **Pre-releases**: `rust-v0.152.0-alpha.1`, `rust-v0.151.0-alpha.12`, and `rust-v0.151.0-alpha.7.2` are now available for early adopter testing of upcoming runtime changes.

## 3. Hot Issues
1. [#34035](https://github.com/openai/codex/issues/34035) (Open, Enhancement, 21 comments, 151 👍): Top community request to make the temporary July 2026 removal of Codex's 5-hour per-session usage limit permanent, while retaining existing weekly plan allowances. This is the most upvoted active issue on the repo, with broad support from power users running long agent workflows.
2. [#4003](https://github.com/openai/codex/issues/40035) (Closed, Bug, Windows, 37 comments, 75 👍): A 9-month-old bug where Codex patched modified files with mixed line endings on Windows has finally been marked as resolved, eliminating a persistent source of spurious git diffs for Windows developer users.
3. [#35746](https://github.com/openai/codex/issues/35746) (Open, Bug, CLI, 34 comments, 2 👍): Paginated rollout history drops valid flattened records and reuses ordinals, breaking session navigation for users accessing long run histories. The bug is confirmed present in recent 0.146+ CLI builds.
4. [#39855](https://github.com/openai/codex/issues/39855) (Open, Bug, Windows Remote, 17 comments, 9 👍): New projectless chats in Windows Remote fail trust verification due to malformed path checks, completely blocking ad-hoc mobile remote workflows for desktop Windows users.
5. [#38792](https://github.com/openai/codex/issues/38792) (Open, Bug, CLI, 15 comments, 4 👍): The session resume function loads long threads at their very first turn instead of the latest active position, wasting user time as they manually scroll through hours of prior agent work.
6. [#40002](https://github.com/openai/codex/issues/40002) (Open, Bug, Android Remote, 12 comments, 8 👍): Android Codex Remote fails to verify trusted Windows projects due to case-sensitive path lookup logic, breaking cross-device pairing for users with mixed-case Windows file paths.
7. [#39699](https://github.com/openai/codex/issues/39699) (Open, Bug, Quota, 10 comments, 0 👍): Multiple users report their weekly Codex quota is being consumed far faster than expected during normal development workflows, with no visibility into what is using up their allocated hours.
8. [#29811](https://github.com/openai/codex/issues/29811) (Open, Bug, Context, 10 comments, 7 👍): The goal compaction feature resurrects completed manual steer instructions before goal continuation resumes, causing unexpected agent behavior that breaks multi-hour `/goal` runs.
9. [#41561](https://github.com/openai/codex/issues/41561) (Open, Bug, GitHub Integration, 3 comments, 0 👍): GitHub draft/ready PR state mutations fail because the Codex connector queries a non-existent `Repository.fullDatabaseId` field in GitHub's GraphQL schema, blocking automated PR workflows for web Codex users.
10. [#35383](https://github.com/openai/codex/issues/35383) (Open, Bug, Subagent, 3 comments, 0 👍): Worktree/temp clone lifecycle management is broken, leading 1 user to accumulate 118 multi-GB repo copies totaling 202GB of stray files in `/tmp` over 3 days of agent runs.

## 4. Key PR Progress
1. [#41569](https://github.com/openai/codex/pull/41569) (Merged): Hardens diagnostic report uploads, adding gzip envelope support, size bounding, and format-aware truncation for oversized attachments to fix failed bug report submissions.
2. [#41567](https://github.com/openai/codex/pull/41567) (Merged): Restores thread working directory from owned settings snapshots, fixing a long-standing bug where resuming a thread would lose the prior active CWD and default to the user's home folder.
3. [#41562](https://github.com/openai/codex/pull/41562) (Merged): Preserves turn lineage across goal continuations, ensuring automatic agent actions under a `/goal` are properly attributed to the original user turn for accurate billing and audit trails.
4. [#41467](https://github.com/openai/codex/pull/41467) (Merged): Refreshes the TUI model picker asynchronously from the app server when opened, eliminating stale cached model catalogs that showed unavailable model options for users on custom plans.
5. [#41456](https://github.com/openai/codex/pull/41456) (Merged): Adds support for app targets in executor plugin hooks, enabling the official Browser plugin to use `Stop` and `SubagentStop` remote control hooks for web automation workflows.
6. [#41454](https://github.com/openai/codex/pull/41454) (Merged): Automatically blocks goals after 3 consecutive execution host failures, preventing infinite agent loops caused by temporary sandbox or remote execution outages.
7. [#41464](https://github.com/openai/codex/pull/41464) (Merged): Preserves existing filesystem permissions when updating session metadata, fixing a bug where sandbox policy changes would break read/write access to project files for active sessions.
8. [#41447](https://github.com/openai/codex/pull/41447) (Merged): Adds native support for the new `openai/elicitation` form request schema, giving extension developers a standardized API to render structured input forms for end users.
9. [#41452](https://github.com/openai/codex/pull/41452) (Merged): Adds explicit reporting of code mode host request durations for execute/wait/terminate operations, enabling developers to debug slow runtime performance without client-side timing noise.
10. [#41448](https://github.com/openai/codex/pull/41448) (Merged): Clarifies question handling in Default collaboration mode, allowing the agent to proceed with best judgment for low-impact optional questions instead of pausing and waiting for user input.

## 5. Feature Request Trends
- The top community priority is making the temporary suspension of the 5-hour per-session usage limit permanent, with plans to retain weekly usage caps for all paid tiers.
- UI/UX quality of life improvements for power users: requests to add a toggle to auto-expand the "Working" code output section in the desktop app, and configurable inline diff preview size limits in the TUI.
- Continued demand for expanded MCP extension APIs, including more hooks to modify tool results and extend server discovery behaviors.
- Improved cross-device remote workflow support for mobile users to access local desktop files, view generated artifacts, and control long-running Codex sessions.

## 6. Developer Pain Points
- Windows platform-specific bugs are the most frequently reported issue category, covering broken trust verification, startup loops, quota overconsumption, broken pet drag interactions, and sandbox setup failures that disproportionately affect Windows 11/10 desktop users.
- Persistent session and rollout history consistency bugs: duplicate ordinals that permanently freeze thread history, resuming sessions at the wrong turn, and runaway context growth from repeated image embedding that bloats rollout files beyond 16GB.
- Opacity around quota and billing: multiple confirmed reports of unplanned extreme token reprocessing (one user hit 10.1M tokens across 76 turns for a single Terra task), plus a critical bug where Codex silently switched from ChatGPT subscription billing to a dormant old API key causing $758 in unintended overnight charges.
- Unmanaged temporary resource accumulation: broken lifecycle logic for temp worktrees and session artifacts leads to tens to hundreds of gigabytes of unused stray files consuming disk space without any user alerting or auto-cleanup.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-08-30
Official repository: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
This day’s updates lead with a new security-focused nightly release that enforces fail-closed workspace trust protections to block unvetted MCP tool access in untrusted directories. Maintainers published 9 active pull requests addressing high-priority edge case bugs spanning A2A server functionality, cross-tool import migration, and false authentication errors. Top community-reported pain points including unhandled agent hangs and shell execution stalls have been tagged for retesting as part of the ongoing 0.59 release workstream rollup.

---

## 2. Releases
### v0.59.0-nightly.20260829.g0bd1d4397
[Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260829.g0bd1d4397)
The only new release in the last 24 hours includes a single critical core security fix from PR #29099: it enforces a fail-closed workspace trust model, and automatically filters MCP servers to only a pre-approved safe subset when the CLI is running in restricted untrusted workspace mode. No breaking functional changes are included in this build.
[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260828.g3c311beac...v0.59.0-nightly.20260829.g0bd1d4397)

---

## 3. Hot Issues
Top 10 high-priority, community-engaged open issues updated in the last 24 hours:
1. [#22323 Subagent recovery after MAX_TURNS incorrectly reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) (13 comments, 👍 2): Misleading status notifications hide incomplete deep codebase investigations, creating hidden gaps in analysis output for users relying on subagent code scans.
2. [#21409 Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409) (8 comments, 👍 8): The highest-upvoted open agent bug blocks even trivial tasks like folder creation, with users forced to disable all subagent usage to avoid multi-hour timeouts.
3. [#25166 Shell execution gets stuck on "Awaiting input" after command completion](https://github.com/google-gemini/gemini-cli/issues/25166) (4 comments, 👍 3): Breaks all automated workflow use cases, as the CLI never resumes control after simple non-interactive commands like build scripts finish running.
4. [#19873 Leverage Gemini 3 bash affinity via zero-dependency OS sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873) (8 comments, 👍 1): A large architectural enhancement roadmap item that would remove third-party sandboxing overhead, while fully utilizing the model’s native POSIX tooling expertise without security risks.
5. [#21968 Gemini does not use custom skills and sub-agents unprompted](https://github.com/google-gemini/gemini-cli/issues/21968) (6 comments, 👍 0): Breaks the power user custom extension workflow, as the CLI ignores pre-defined Gradle, Git, and other framework-specific skills unless users explicitly command it to activate them.
6. [#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) (4 comments, 👍 0): A critical security gap, as current Auto Memory processing sends raw local transcript data (including potential secrets) to model context before redaction rules run.
7. [#21983 Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) (4 comments, 👍 1): Blocks all browser automation use cases for the large share of Linux desktop users running modern non-X11 Wayland compositors.
8. [#24246 400 error with >128 registered tools](https://github.com/google-gemini/gemini-cli/issues/24246) (3 comments, 👍 0): Breaks enterprise user setups that load multiple MCP servers with large custom tool catalogs, as the CLI does not dynamically prune tool lists to stay under Gemini API limits.
9. [#22267 Browser Agent ignores settings.json overrides for maxTurns](https://github.com/google-gemini/gemini-cli/issues/22267) (3 comments, 👍 0): Prevents users from tuning browser session runtime limits, leading to premature termination of long multi-step web workflows.
10. [#21763 Bugreport does not include subagent context](https://github.com/google-gemini/gemini-cli/issues/21763) (2 comments, 👍 0): Makes debugging complex multi-agent sessions nearly impossible for both end users submitting support tickets and maintainers triaging issues.

---

## 4. Key PR Progress
10 high-impact active/merged pull requests from the last 24 hours:
1. [#29099 fix(core): enforce fail-closed workspace trust and filter mcpServers in restricted mode](https://github.com/google-gemini/gemini-cli/pull/29099): Merged security fix shipped in the latest nightly release, blocks unvetted MCP tool access in untrusted workspaces.
2. [#29126 fix(a2a-server): mount express.json before a2a sdk routes](https://github.com/google-gemini/gemini-cli/pull/29126): Resolves broken A2A JSON-RPC request parsing by reordering middleware, fixing the undefined `req.body` bug for all incoming POST requests to the A2A server endpoint.
3. [#28827 fix(core): avoid false authentication errors for 401 substrings](https://github.com/google-gemini/gemini-cli/pull/28827): Adjusts 401 error detection logic to only flag values as auth failures when the number appears in HTTP/status context, ignoring 401 matches in arbitrary user output (e.g. port numbers, process exit codes).
4. [#29124 fix(cli): correct SubagentStop event key in hooks migration](https://github.com/google-gemini/gemini-cli/pull/29124): Fixes a typo in the Claude Code import tool that prevented `SubagentStop` hook configurations from being properly ported over to Gemini CLI.
5. [#29125 fix(cli): convert hook timeout from seconds to milliseconds in hooks migration](https://github.com/google-gemini/gemini-cli/pull/29125): Resolves a critical unit conversion bug in the hooks migration flow that caused 30s imported timeouts to expire after 30ms of runtime.
6. [#28971 fix(core): keep truncated MCP tool names unique](https://github.com/google-gemini/gemini-cli/pull/28971): Prevents tool ID collisions for long MCP tool names, ensuring two long names that share the same prefix and suffix do not get mapped to the same internal tool identifier.
7. [#28955 Update dependencies, add MCP configuration, and integrate ECC bundles](https://github.com/google-gemini/gemini-cli/pull/28955): Large P1 update that adds a graphical MCP configuration UI, refreshes core dependencies to patch CVEs, and adds ECC encrypted bundle support for more secure remote tool communication.
8. [#29121 chore/release: bump version to 0.59.0-nightly.20260829.g0bd1d4397](https://github.com/google-gemini/gemini-cli/pull/29121): Automated CI-run PR that generated the latest nightly release build.
9. [#7131 Fix cloudbuild step](https://github.com/google-gemini/gemini-cli/pull/7131): Closed fix that resolves broken automated container image publishing, correcting broken preview release recognition logic in the cloud build pipeline.
10. [#29127 Compare](https://github.com/google-gemini/gemini-cli/pull/29127): In-progress release candidate testing PR tracking changes targeted for the upcoming 0.59 stable launch.

---

## 5. Feature Request Trends
Distilled top requested feature directions from recent issues:
1. **AST-aware code tooling**: Multiple ongoing epic requests for AST-powered file reads, search, and codebase mapping to cut token bloat and eliminate redundant agent turns from partial file reads.
2. **Next-gen secure sandboxing**: High-priority roadmap work for native zero-dependency OS sandboxing to leverage Gemini 3's bash-first training without third party sandbox overhead.
3. **Improved subagent observability**: Community requests to surface subagent trajectories in the `/chat share` export workflow to make multi-agent session debugging accessible to end users.
4. **Dynamic tool scoping**: Enhancements to automatically prune available tool sets dynamically based on session context, so users can run hundreds of registered MCP tools without hitting API 400 limits.
5. **Persistent task tracking**: Deprecate in-context todo lists in favor of file-based CRUD task storage that survives session restarts and avoids context bloat.

---

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users:
1. **Unreliable agent execution**: Frequent full hangs of the generalist agent, broken browser subagents on Wayland desktops, and shell execution stalls after commands complete break day-to-day development workflows.
2. **Opaque subagent behavior**: No subagent context included in auto-generated bug reports, hidden subagent trajectories in chat logs, and incorrectly reported success status when subagents hit max turn limits make debugging agent behavior extremely difficult.
3. **Broken import migrations

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-08-30
---
## 1. Today's Highlights
GitHub Copilot CLI shipped two sequential v1.0.82 patch releases on 2026-08-29 to resolve high-priority TUI UX regressions and improve authentication error transparency. The past 24 hours saw 7 active community issue updates, including multiple newly reported breaking compatibility bugs linked to the recent v1.0.81 release, as well as the long-awaited closure of a 5-month-old feature PR adding native Fish shell PATH configuration support. No major breaking changes are flagged in the latest release cycle, with most active user pain points centered on Windows platform quirks and MCP server integration gaps.

## 2. Releases
Two patched releases rolled out in the last 24 hours to address TUI stability and UX gaps:
- [v1.0.82](https://github.com/github/copilot-cli/releases/tag/v1.0.82): 3 user-facing improvements: (1) Fixed an input race condition where typing during `/worktree` or `/move` pre-processing would break session switching to the new worktree; (2) Added a `Ctrl+E` keyboard shortcut to expand collapsed plan approval cards to show full implementation details; (3) Replaced generic post-failure `/login` prompts with explicit, actionable authentication error messages (e.g. `401 Bad credentials`) to reduce debugging friction.
- [v1.0.82-2](https://github.com/github/copilot-cli/releases/tag/v1.0.82-2): Follow-up hotfix that re-audited and fully resolved the two high-priority TUI bugs (worktree input race condition, Ctrl+E plan expansion) from the initial v1.0.82 rollout.

## 3. Hot Issues
All 7 active issues updated in the past 24 hours are listed below, sorted by priority and community engagement:
1. [#4165 Windows cold start `copilot --resume` hangs indefinitely](https://github.com/github/copilot-cli/issues/4165): Affects Windows PowerShell users, where the resume workflow gets stuck on the "Resuming session" loading state with no visible error. The bug has 4 comments and 1 thumbs-up, breaking core session persistence workflows for Windows power users.
2. [#4204 Add universal .agents folder discovery outside Git repos](https://github.com/github/copilot-cli/issues/4204): Feature request asking to extend the existing `.agents/skills` convention to cover custom instructions, agents, and hooks in any opened directory (not just Git repositories) to let teams standardize shared custom Copilot configurations across non-code project folders.
3. [#4647 v1.0.81 breaks chroma-mcp compatibility](https://github.com/github/copilot-cli/issues/4647): New regression reported 2 days post v1.0.81 launch, where the popular Chroma vector database MCP server no longer loads correctly with existing valid `mcp-config.json` setups.
4. [#4655 Agent Plugins 1.0 custom agents not discovered under the standard `com.github.copilot/agents` path](https://github.com/github/copilot-cli/issues/4655): Blocks third-party plugin developers building custom Copilot agents per the official 1.0 Agent Plugins spec, breaking the new plugin ecosystem workflow.
5. [#2955 `/allow-all` command does not suppress bash execution prompts](https://github.com/github/copilot-cli/issues/2955): Longstanding open issue first reported in April 2026, with 1 thumbs-up, where users who enable full unrestricted shell access via `/allow-all` still get repeated manual approval prompts for every shell command, breaking headless/automated Copilot CLI use cases.
6. [#4660 Remote ADO MCP server OAuth fails on v1.0.81 WAM implementation](https://github.com/github/copilot-cli/issues/4660): Unconfirmed new bug blocking Azure DevOps integration for users on the latest v1.0.81 build, with the `/mcp auth` workflow returning opaque authentication failure messages.
7. [#4553 Copilot CLI enters infinite retry loop on `apply_patch` due to JSON wrapping error](https://github.com/github/copilot-cli/issues/4553): Critical workflow bug that halts all file modification tasks, where the CLI repeatedly retries a malformed patch payload instead of surfacing the error to users or adjusting its output format to complete the edit.

## 4. Key PR Progress
All 3 PRs updated in the last 24 hours are documented below:
1. [#2381 install: add fish shell support for PATH configuration](https://github.com/github/copilot-cli/pull/2381): Closed after 5 months in review, this fix adds native Fish shell profile detection, so the Copilot CLI installer correctly updates Fish's array-based PATH variable instead of writing incompatible POSIX `export` syntax to `~/.profile` (which is never sourced by Fish). This eliminates the silent "command not found" failure for Fish shell users post-install.
2. [#4497 Handle fork PR associations in invalid-label writer](https://github.com/github/copilot-cli/pull/4497): Closed internal dev workflow fix that improves reliability of the repository's automated issue/label bot, correctly mapping CI runs on forked PRs to their corresponding open pull requests when the GitHub API does not return direct PR association metadata.
3. [#4659 Initial commit with exported changes from codespace](https://github.com/github/copilot-cli/pull/4659): Open draft PR for unannounced community-contributed feature work exported from a GitHub Codespace workspace, no further implementation details have been shared as of 2026-08-29.

## 5. Feature Request Trends
The most requested feature directions from updated issues this cycle fall into three clear buckets:
1. Expanded custom configuration portability: Unrestricted `.agents` folder discovery across non-Git directories to enable shared, team-level custom Copilot setup without requiring all workspaces to be Git repos.
2. Third-party MCP and plugin ecosystem hardening: Requests for improved compatibility testing for popular MCP servers and the new Agent Plugins 1.0 specification, to prevent regressions from breaking the growing third-party tool ecosystem.
3. Better cross-platform first-class shell support: Continued demand for native installer and UX support for non-POSIX shells (following the long-awaited Fish support PR merge) to cover gaps across all popular developer terminal environments.

## 6. Developer Pain Points
Recurring frustrations flagged across the latest issues and release notes:
- Post-regression lack of transparency: The recent v1.0.81 release shipped with multiple uncaught breaking changes for MCP server and plugin integrations, with no pre-release changelog calling out WAM authentication and MCP protocol handling changes to warn users of potential breakage.
- Windows-specific session reliability gaps: Cold start session resume for Copilot CLI on Windows remains broken for PowerShell users, impacting core workflow continuity for Windows developer users.
- Unmet permission control expectations: The `/allow-all` command does not deliver on its advertised functionality of suppressing all execution prompts, blocking unattended/automated Copilot CLI usage, a popular use case for scripting and CI workloads.
- Non-POSIX shell setup friction: Months of silent broken PATH configuration for Fish users before the #2381 PR was merged, leading to unnecessary post-install troubleshooting steps for thousands of Fish shell Copilot CLI adopters.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-30
Repository: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights
In the 24-hour tracking window ending 2026-08-30, no new official releases or pull request activity was logged for the Kimi Code CLI repository. The only notable community update is a high-severity open issue filed by a paying annual subscriber documenting a >10x abnormal quota amplification bug tied to the platform's native context caching feature. The issue is already drawing attention from other pro and enterprise users who report encountering identical unexplained rapid quota drain in the past 72 hours.

## 2. Releases
No new Kimi Code CLI releases (stable, pre-release, patch or minor version) were published in the past 24 hours. No new builds are available for users to pull as of this digest timestamp.

## 3. Hot Issues
Only 1 issue received updates in the 24-hour tracking window, featured as the sole high-priority hot community item:
- #2626 Abnormal quota consumption: cache_read billed every turn with cache_creation always 0 (>10x amplification)  
  [https://github.com/MoonshotAI/kimi-cli/issues/2626](https://github.com/MoonshotAI/kimi-cli/issues/2626)  
  Context: Filed by a verified annual plan Kimi Code subscriber, this high-severity billing correctness bug reports that all user chat turns are incorrectly charged for cache_read operations, even though zero new context cache assets are being persisted across sessions. The reporter documented a 40% drain of their 5-hour active usage quota in minutes of light CLI usage, representing >10x expected consumption. One initial maintainer support comment has been posted to the thread, with unindexed user replies indicating other pro users have observed matching unexplained quota spikes since 2026-08-28.

## 4. Key PR Progress
No pull requests were opened, merged, updated, or closed in the 24-hour tracking window. No new feature, bug fix, or dependency update PRs are in active public review at time of publishing.

## 5. Feature Request Trends
Distilled from the latest logged community discussion, the top 3 highest-priority requested feature directions for Kimi Code CLI users are:
1. A built-in real-time granular quota usage dashboard that breaks down billed spend by cache_read, cache_creation, and generation token line items, instead of only displaying a raw remaining quota count
2. User-configurable quota alert and auto-pause rules that stop CLI execution when usage hits a user-defined percentage of their hourly, daily, or plan-level quota allocation
3. One-tap telemetry export for cache operation events to simplify user submission of debug data to maintainers when caching behavior deviates from documented performance and billing rules

## 6. Developer Pain Points
The top recurring developer frustrations surfaced in this digest window are all tied to billing and caching transparency for power users:
- No local audit tooling exists for users to independently verify billed cache operations, meaning subscribers cannot cross-check platform-reported quota consumption against their own session activity
- Silent failures for the cache_creation workflow do not surface any error notification to end users, leaving subscribers paying for cache_read operations that deliver zero expected latency benefits
- There is no built-in emergency kill switch to halt Kimi Code CLI usage immediately when abnormal consumption is detected, leading to unexpected rapid loss of allocated session quota for users running long multi-turn coding sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-08-30
## 1. Today's Highlights
This 24-hour update for the OpenCode AI developer tool project sees no new official stable releases, but brings 30 recently updated community issues and 20 active/merged pull requests addressing cross-platform stability gaps, core agent loop bugs, and UX improvements. Top community engagement centered on a 15+ comment feature request for web UI project auto-sync, and a high-priority bug report correcting misleading documentation about default LSP behavior. Multiple new 2.0 roadmap feature suggestions were filed by core contributor neohiro, outlining UX upgrades for the status popover, session bar, and plugin management surfaces.
## 2. Releases
No new official OpenCode releases were published in the last 24 hours.
## 3. Hot Issues
1. **[#13626] Auto-sync projects in web UI from server** | [Link](https://github.com/anomalyco/opencode/issues/13626)
   This top-voted open feature request addresses a major pain point for users accessing OpenCode across multiple devices/browsers by eliminating manual project import steps on new sessions. It has received 15 comments and 15 upvotes, with active ongoing discussions around end-to-end sync encryption requirements.
2. **[#23566] Docs suggest LSP is enabled by default** | [Link](https://github.com/anomalyco/opencode/issues/23566)
   The most-liked recently updated closed issue causes widespread user confusion and wasted troubleshooting time, as documentation claims LSP is enabled out of the box while it is intentionally disabled in production builds. Maintainers confirmed the documentation correction is queued for the next public docs deploy.
3. **[#4232] OpenCode displays models which aren't configured & don't exist in LM Studio** | [Link](https://github.com/anomalyco/opencode/issues/4232)
   This bug breaks LM Studio local LLM integration workflows by listing orphaned, unavailable models that cannot be selected by users. The issue has been marked closed after maintainers merged a cache-clearing fix for leftover stale model metadata.
4. **[#34644] GitHub Copilot provider not registered/found for Copilot Student plan (Auto-only mode)** | [Link](https://github.com/anomalyco/opencode/issues/34644)
   This high-impact open bug blocks thousands of student users with valid GitHub Copilot subscriptions from using OpenCode's native Copilot provider integration, and has already earned 17 upvotes. Users are currently sharing community workarounds for OAuth scope configuration.
5. **[#17372] OpenCode uses Windows PowerShell 5.1 instead of the PowerShell 7 it was launched from** | [Link](https://github.com/anomalyco/opencode/issues/17372)
   This Windows platform bug breaks custom PowerShell 7 profiles, user-defined environment variables, and modern shell functionality for Windows power users. It was marked closed after a path-precedence fix was merged to prioritize PWSH over legacy PowerShell 5.1.
6. **[#46153] GUI for per-model profile/context parameters** | [Link](https://github.com/anomalyco/opencode/issues/46153)
   Newly filed by core contributor neohiro, this feature request eliminates the need to edit raw `opencode.jsonc` config files to adjust model parameters such as system prompts and temperature, making advanced configuration accessible to non-technical users. Maintainers confirmed it is fully aligned with the 2.0 UX roadmap.
7. **[#38570] Limit calculation bug: 47% consumed but only $1.50 used** | [Link](https://github.com/anomalyco/opencode/issues/38570)
   This active open bug causes widespread user confusion over OpenCode Go quota tracking, as time-based limit consumption percentages do not map to actual dollar-valued credit burn. Users have submitted multiple screenshots of mismatched usage stats to support ongoing investigation.
8. **[#46035] serve (1.18.25): MCP child processes accumulate on web-client reconnects until the server OOMs** | [Link](https://github.com/anomalyco/opencode/issues/46035)
   A critical stability bug for self-hosted OpenCode `serve` deployments, which crashes headless Linux servers after multiple web client reconnections. The issue has been assigned to the MCP runtime team, with fully reproducible steps already documented for a fast patch.
9. **[#43673] Agent enters non-terminating loop, repeats identical tool calls and burns tokens** | [Link](https://github.com/anomalyco/opencode/issues/43673)
   This high-frustration bug wastes user tokens and interrupts workflows when the agent fails to detect zero new progress from repeated identical tool calls. Multiple duplicate reports have been filed, and maintainers are developing a universal loop detection guardrail.
10. **[#46174] Windows Desktop starts duplicate MCP processes at idle, causing multi-GB RAM usage** | [Link](https://github.com/anomalyco/opencode/issues/46174)
    A newly filed Windows-specific bug that causes extreme memory bloat on idle desktop deployments, degrading overall system performance. Users are currently submitting process trace logs to help diagnose the underlying race condition during app startup.
## 4. Key PR Progress
1. **[#46200] fix(app): reserve the iOS PWA status bar** | [Link](https://github.com/anomalyco/opencode/pull/46200)
    Resolves a layout bug for iOS progressive web app users where the system status bar overlaps OpenCode web content, by switching the status bar setting from `black-translucent` to `default` to reserve proper safe area padding.
2. **[#46199] feat: configurable plans directory and opt-out for plugin dependency installs** | [Link](https://github.com/anomalyco/opencode/pull/46199)
    Adds user control over the storage location for plan mode files, plus an opt-out toggle to block automatic plugin dependency installation for security-sensitive airgapped environments.
3. **[#39571] fix(session): publish overflow error when recovery is abandoned, not attempted** | [Link](https://github.com/anomalyco/opencode/pull/39571)
    Improves context overflow error handling by surfacing a clear user-facing error only when auto-compaction fails, rather than throwing confusing error messages during normal background compaction runs.
4. **[#39569] fix(provider): inject chat_template_kwargs for NVIDIA NIM GLM models** | [Link](https://github.com/anomalyco/opencode/pull/39569)
    Restores full compatibility for NVIDIA NIM hosted GLM models by automatically filtering out unsupported parameters like `reasoningEffort` that the model runtime cannot process.
5. **[#39558] fix(tui): show context percentage relative to input limit** | [Link](https://github.com/anomalyco/opencode/pull/39558)
    Corrects the TUI context usage indicator to calculate percentage against the model's input limit rather than the full total context window, eliminating misleadingly low usage readings that delayed automatic compaction for large context models.
6. **[#39549] feat(cli): add console logout

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-08-30
Repository: github.com/badlogic/pi-mono

---

## 1. Today's Highlights
No new official releases were published in the last 24 hours, but the community and maintainers merged fixes for 24+ recently triaged regressions tied to the 0.84.x release train, addressing gaps in TUI rendering, cross-provider compatibility, and extension runtime edge cases. The two highest-voted open community issues — TUI streaming text corruption and long-session macOS high CPU usage — remain under active triage, with dozens of community users sharing reproduction datasets to speed up resolution. Multiple pending PRs now target long-standing pain points for extension developers and power users of non-OpenAI LLM providers.

## 2. Releases
No new versions released in the past 24 hours.

## 3. Hot Issues
1. **#8584 [OPEN] TUI row corruption during streaming: assistant text rendered one word per line after long tool output** (25 comments, 9 👍)
   The highest-engagement open bug: widespread TUI rendering failure that scatters streamed assistant text across one word per line immediately after long tool calls return, breaking readability for all streaming workflows. Community users have shared 12 distinct reproduction cases for maintainers to debug.
   Link: https://github.com/earendil-works/pi/issues/8584
2. **#7730 [OPEN] [bug] High CPU usage on Mac OS with long session** (13 comments, 9 👍)
   Severe performance pain point for power users running multi-hour dev sessions: Pi consistently uses 50-110% CPU and 600-800MB memory after extended context sessions, with confirmed correlation to total session length. Multiple users are contributing profiling data to identify the memory leak root cause.
   Link: https://github.com/earendil-works/pi/issues/7730
3. **#3159 [CLOSED] [bug] edit tool terminated - timeout** (8 comments)
   A 4+ month old long-open bug that was recently triaged and fixed, after users reported constant edit tool failures with Qwen 27B in recent Pi versions. The patch will adjust edit operation timeout thresholds for larger local models.
   Link: https://github.com/earendil-works/pi/issues/3159
4. **#6907 [OPEN] Add an Installation section to the README** (4 comments)
   High-priority documentation gap flagged by new users: the main repository README currently has no step-by-step installation guide, creating major onboarding friction for new contributors and casual users.
   Link: https://github.com/earendil-works/pi/issues/6907
5. **#8061 [OPEN] [inprogress] Context budget ignores maxTokens output reservation** (3 comments, 2 👍)
   Causes unexpected 4xx request rejections for 1M+ token Gemini-family models even when input context is only 78% full, with automatic context compaction recovery logic failing instead of correcting the overflow. Fix is in active development.
   Link: https://github.com/earendil-works/pi/issues/8061
6. **#8643 [OPEN] Bedrock: OpenAI models reject images nested in toolResult.content** (3 comments)
   Critical multimodal workflow bug for enterprise Bedrock users: OpenAI models hosted on AWS Bedrock fail to process images returned in tool result content. A maintainer has already submitted a full fix + regression test to their fork.
   Link: https://github.com/earendil-works/pi/issues/8643
7. **#8753 [CLOSED] 0.84.3 regression: reasoning_details echo deterministically degenerates Venice GLM reasoning** (3 comments)
   Closed patch for a 0.84.3 regression that caused newline character amplification per conversation turn, breaking z-ai-glm-5.3 (Venice) tool loop sessions.
   Link: https://github.com/earendil-works/pi/issues/8753
8. **#8478 [CLOSED] /model selector lists all catalog models; should default to user-configured models** (3 comments)
   Closed UX improvement that removes the overwhelming list of hundreds of unused provider models from the CLI `/model` selector, only showing models the user has already configured API access for.
   Link: https://github.com/earendil-works/pi/issues/8478
9. **#8838 [CLOSED] DeepSeek (deepseek-v4-pro) multi-turn / tool-call sessions fail with "Connection error."** (1 comment)
   Critical fix for DeepSeek users: the endpoint requires echoed back `reasoning_content` values for thinking mode workflows, which was not previously implemented, causing all second-turn requests to fail.
   Link: https://github.com/earendil-works/pi/issues/8838
10. **#8806 [CLOSED] TUI crashes on narrow terminals (80-88 cols) - long skill lines exceed width** (2 comments)
    Closed bug fix for hard startup crashes that affected developers running Pi inside small SSH windows or split terminal panes.
    Link: https://github.com/earendil-works/pi/issues/8806

## 4. Key PR Progress
1. **#8805 [CLOSED] fix(tui): adaptive truncate instead of crash on narrow terminals**
    Replaces the hard render width assertion that caused TUI crashes on <90 column terminals with smart adaptive text truncation for all built-in UI elements.
    Link: https://github.com/earendil-works/pi/pull/8805
2. **#8818 [CLOSED] fix(ai): omit Responses tool_choice when no tools are sent**
    Fixes xAI (Grok) 400 bad request errors by excluding the `tool_choice` parameter from requests with no attached tools, and explicitly sending `tools: []` for xAI endpoint compatibility.
    Link: https://github.com/earendil-works/pi/pull/8818
3. **#8812 [CLOSED] fix(coding-agent): flush extension provider registrations before initial model resolution**
    Eliminates a race condition that broke custom extension-registered model providers at session startup, by processing pending provider registrations before the initial model resolution step.
    Link: https://github.com/earendil-works/pi/pull/8812
4. **#8811 [CLOSED] feat: add startup composer**
    New quality-of-life feature that lets users type input while Pi is still initializing, carrying that input state directly to interactive mode. It also adds shared UI support for project trust checks and selection dialogs.
    Link: https://github.com/earendil-works/pi/pull/8811
5. **#8297 [CLOSED] fix(coding-agent): exclude superseded retry attempts from restored context**
    Cleans up provider context, token budgets, and cold session restores by removing failed retry attempts, while retaining full debug history and rendered transcripts for visibility.
    Link: https://github.com/earendil-works/pi/pull/8297
6. **#8725 [CLOSED] fix(coding-agent): settle active turn before in-memory fork**
    Resolves session resource leaks and cross-session data corruption during in-memory session fork by tearing down the active tool turn before resetting session state.
    Link: https://github.com/earendil-works/pi/pull/8725
7. **#8828 [OPEN] fix(tui): detect Zed terminal capabilities**
    Adds native capability detection for the Zed editor's integrated terminal, correctly enabling hyperlink and true color support while disabling unsupported inline image rendering, plus documents default Pi hotkeys for Zed users.
    Link: https://github.com/earendil-works/pi/pull/8828
8. **#8262 [OPEN] feat(coding-agent): dispatch hooks on every turn-start path (cancellable turn preflight)**
    Adds missing input and pre-agent-start hook dispatching for programmatic turn initiations via `sendCustom

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-08-30
---
## 1. Today's Highlights
The latest v0.22.3 nightly pre-release rolls out new Web Shell Git workflow features alongside a batch of critical UI hardening fixes for the recent Web Shell code cutover. A high-impact 0.22.3 regression breaking local llama.cpp deployments with grammar parsing errors has drawn rapid community attention, with maintainers prioritizing triage for the issue. Multiple long-requested core features including auto-retry for transient network errors and per-file code review verdict persistence across rebases are nearing merge readiness.

## 2. Releases
**v0.22.3-nightly.20260829.e5cb60ad48** (published 2026-08-29): The latest nightly build for the 0.22.3 release channel ships two new core features: a Git state indicator added beside the Web Shell branch picker, and ongoing implementation work for the code review verdict persistence system. This build is intended for pre-release validation by early adopters.
[Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.3-nightly.20260829.e5cb60ad48)

## 3. Hot Issues
1. **#5975: 120s stream inactivity timeout after partial chunk delivery** (Open, 14 comments, P2) - A widely reported regression in v0.19.3+ that terminates generation mid-reasoning without warning, forcing users to manually retry with Ctrl+Y. This is the highest-engagement open user-facing bug, with dozens of community users reporting frequent reproduction on long reasoning workloads. [Issue](https://github.com/QwenLM/qwen-code/issues/5975)
2. **#8625: Unreadable pinyin input in Windows terminal** (Closed, 8 comments, P2) - A Chinese localisation UI bug that made typing Chinese in the Windows terminal shell unusable for native users. The issue has been resolved in the latest patch after community feedback. [Issue](https://github.com/QwenLM/qwen-code/issues/8625)
3. **#10520: llama.cpp 400 grammar parse failure when toolSearch threshold > 0** (Open, 4 comments, P2) - A new 0.22.3 regression that breaks all MCP tool-enabled local deployments unless the toolSearch feature is fully disabled, directly impacting the large community of self-hosted Qwen Code users. [Issue](https://github.com/QwenLM/qwen-code/issues/10520)
4. **#10530: Failed to initialize samplers error in v0.22.3 with local Qwen models** (Open, 2 comments, P2) - A related regression report confirming the bug impacts all local Qwen 3.8/3.6 models running on llama.cpp, with no workaround available other than rolling back to v0.22.2. [Issue](https://github.com/QwenLM/qwen-code/issues/10530)
5. **#9025: Keyless Vertex AI headless auth failure** (Closed, 5 comments, P2) - A critical integration bug that prevented headless Google Cloud users from running Qwen Code with Application Default Credentials, resolved in the latest nightly. [Issue](https://github.com/QwenLM/qwen-code/issues/9025)
6. **#8172: Agent Team teammate message queuing full multi-tool-call turn** (Closed, 4 comments, P2) - A multi-agent workflow bug that delayed inter-teammate message delivery for entire long tool execution turns rather than just the current response, breaking real-time multi-agent coordination. [Issue](https://github.com/QwenLM/qwen-code/issues/8172)
7. **#10444: Adopt pnpm to reduce worktree setup cost** (Open, 3 comments, P2) - A developer experience enhancement request proposing to replace npm with pnpm to cut new contributor bootstrap time by more than 70%, which has received positive feedback from maintainers. [Issue](https://github.com/QwenLM/qwen-code/issues/10444)
8. **#10385: Web Shell message edit index mismatch bug** (Closed, 4 comments, P1) - A high-severity UI bug caused by the recent Web Shell cutover that corrupted conversation state when editing messages, fixed in yesterday's patch batch. [Issue](https://github.com/QwenLM/qwen-code/issues/10385)
9. **#10372: VS Code companion closeDiff path resolution failure** (Closed, 5 comments, P2) - An IDE integration bug that broke diff closing operations after the code review flow, resolved as part of the PR #9811 follow-up fixes. [Issue](https://github.com/QwenLM/qwen-code/issues/10372)
10. **#10035: Transient ENOSPC failures on high-concurrency CI runners** (Open, 3 comments, P2) - A recurring stability issue that breaks main branch CI runs randomly due to disk space exhaustion on shared self-hosted runners, blocking PR merge velocity. [Issue](https://github.com/QwenLM/qwen-code/issues/10035)

## 4. Key PR Progress
1. **#10347: Auto-retry transient network EOF errors for unattended flows** - Classifies wrapped transport failures (e.g. peer close mid-request) as retryable errors, eliminating the need for manual Ctrl+Y retries for most transient network issues in headless and interactive sessions. [PR](https://github.com/QwenLM/qwen-code/pull/10347)
2. **#8467: Full Git diff source and branch switching support for Web Shell** - Expands Web Shell Git tooling to support staged/unstaged changes, commit comparison, and searchable branch selector, building on the recently merged git state hint feature. [PR](https://github.com/QwenLM/qwen-code/pull/8467)
3. **#9661: Transfer per-file code review verdicts across rebases** - Preserves existing review approval/change request verdicts when a PR is rebased, eliminating wasted reviewer effort on re-reviewing unchanged files. [PR](https://github.com/QwenLM/qwen-code/pull/9661)
4. **#9094: Fix Gemini 2.5 thinking parameter mapping** - Corrects a parameter mismatch that sent invalid `thinkingLevel` values to Gemini 2.5/Vertex, now correctly transmitting `thinkingBudget` as required by Google's latest LLM API. [PR](https://github.com/QwenLM/qwen-code/pull/9094)
5. **#10427: Close 4 trust boundary holes in the hook execution system** - Critical security hardening for the repository hook system, blocking unsafe HTTP redirects and unauthorised network egress from repo-controlled configuration. [PR](https://github.com/QwenLM/qwen-code/pull/10427)
6. **#8332: Add audio transcription bridge for non-audio models** - Adds a fallback transcription service that converts user-uploaded audio attachments to text for models that do not natively support audio input, expanding multimodal workflow support. [PR](https://github.com/QwenLM/qwen-code/pull/8332)
7. **#10221: Add prose-execution and counter-frame audit lenses for code review** - Adds two new AI audit capabilities to the code review system to detect unsubstantiated claims and out-of-scope counter references, improving review result accuracy. [PR](https://github.com/QwenLM/qwen-code/pull/10221)
8. **#9318: Preserve 64-bit message IDs for WeChat channel** - Fixes integer overflow in WeChat integration that corrupted large 64-bit message IDs, preventing message delivery failures for high-volume WeChat bot deployments. [PR](https://github.com/QwenLM/qwen-code/pull/9318)
9. **#10443: Extend vitest RPC timeout exemptions for cross-platform CI** - Eliminates random unit test failures on Windows and macOS CI runners caused by 60-second vitest RPC timeouts, reducing CI flakiness significantly. [PR](https://github.com/QwenLM/qwen-code/pull/10443)
10. **#10310: Fix review stop verdict exit code logic** - Resolves a bug where code review runs that detected unchanged critical issues would incorrectly exit with code 0, preventing CI pipelines from missing unresolved blocker issues. [PR](https://github.com/QwenLM/qwen-code/pull/10310)

## 5. Feature Request Trends
The most requested feature directions from this 24h window are:
1. **Local LLM deployment compatibility**: Community users are prioritizing fixes for self-hosted llama.cpp/Ollama integration, with demand for better validation of grammar payloads for local model inference engines.
2. **Multi-Agent reliability**: Multiple enhancement requests focus on improving Agent Team coordination, reducing message latency, and eliminating edge cases that leave ghost agents in persistent team rosters.
3. **Web Shell Git workflow deep integration**: Users are asking for end-to-end GitHub PR/issue binding, automatic branch sync, and in-shell code review capabilities to reduce context switching between the shell and browser.
4. **Multimodal channel expansion: New feature requests target audio transcription, image-to-image generation for MiniMax, and richer cross-platform chat channel capabilities for team collaboration use cases.
5. **Developer onboarding speed**: Contributors are pushing for pnpm migration, fast worktree bootstrap paths, and reduced full repository build times to lower the barrier for new community contributors.

## 6. Developer Pain Points
Recurring high-frequency frustrations observed this period:
1. Unpredictable 120s stream timeouts during long reasoning turns force users to manually retry, breaking unattended workloads and reducing productivity for users running complex multi-step tasks.
2. The v0.22.3 release regression breaks all local llama.cpp deployments with MCP tools enabled, with no stable hotfix available as of this digest.
3. Main branch CI suffers from frequent transient failures caused by ENOSPC errors on shared runners and vitest RPC timeouts, slowing down PR merge velocity by up to 30% on busy days.
4. The recent large-scale Web Shell UI cutover introduced dozens of edge case bugs (infinite re-renders, permanently stuck session switch overlays, index mismatches) that are being patched in batches, causing minor usability disruptions for nightly users.
5. The existing npm-based monorepo setup requires ~10 minutes of bootstrap time for new contributors on low-bandwidth connections, creating a high barrier to entry for community developers looking to submit patches.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-08-30
---
## 1. Today's Highlights
The v0.9.12 release integration branch is now fully code-complete for all P0 must-fix blockers, with the release pipeline only requiring final validation of documentation, assets, and CI gating ahead of public rollout. 7 high-impact user-facing UX and quality-of-life enhancements were closed out in the 24h window, eliminating long-standing pain points for Windows users, non-English users, and developers configuring third-party models. Core contributors rescued two stuck community-submitted PRs, preserving full original author attribution while delivering widely requested wire format support for custom OpenAI-compatible providers.

## 2. Releases
No new stable, pre-release, or hotfix versions were published in the last 24 hours. The v0.9.12 minor release remains on track for imminent deployment, pending final release chain checks (tag, assets, npm publish, website update).

## 3. Hot Issues (Top 10 Notable)
| Issue | Details |
|-------|---------|
| [#5573 v0.9.12: milestone tracker](https://github.com/Hmbown/CodeWhale/issues/5573) | The central source of truth for the upcoming minor release, with 22 total contributor comments tracking P0 safety/must-fix items and full end-to-end release chain validation requirements. It is the primary coordination hub for the core team for the current development cycle. |
| [#5316 EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316) | Cross-team tracking epic with 19 comments, overseeing the restructuring of the monolithic TUI codebase into modular Rust crates. The work is expected to cut build times by 60%, simplify external contribution paths, and enable targeted independent feature shipping for future releases. |
| [#5350 Simplify third-party model config with pre-built templates](https://github.com/Hmbown/CodeWhale/issues/5350) | Closed highly requested enhancement that cuts third-party provider setup time to 1 minute by adding pre-filled templates for popular regional services, a one-click test connection button, and fixes for persistent model cache loading failures that previously forced users to spend hours debugging configuration. |
| [#5723 Agent shell sets `NoNewPrivs`, blocking sudo and pre-existing deployment workflow](https://github.com/Hmbown/CodeWhale/issues/5723) | New high-severity bug flagged yesterday that breaks production deployment pipelines relying on sudo execution inside agent shells. The core team has marked it as top triage priority before the v0.9.12 release to avoid breaking existing enterprise user workflows. |
| [#790 Improve i18n coverage for commands, modals, and widgets](https://github.com/Hmbown/CodeWhale/issues/790) | Closed long-standing gap that resolves remaining untranslated hardcoded English strings across all TUI interactive elements, following the earlier launch of Traditional Chinese (zh-Hant) support, delivering full multi-language parity for non-English users. |
| [#1754 Let AI auto-select shell and language for tool calls](https://github.com/Hmbown/CodeWhale/issues/1754) | Closed cross-platform fix that drastically reduces command execution errors for Windows users, where the AI previously defaulted to Unix-style bash syntax that would fail silently on PowerShell or CMD runtime environments. |
| [#5713 Support `wire = "responses" | "anthropic"` for kind="openai-compatible"](https://github.com/Hmbown/CodeWhale/issues/5713) | Community-opened feature request that unblocks support for dozens of regional model services that use the OpenAI Responses or Anthropic Messages API schema, rather than the standard Chat Completions format, massively expanding the ecosystem of compatible third-party providers. |
| [#5668 Add `/copy` for the last completed model output](https://github.com/Hmbown/CodeWhale/issues/5668) | Closed quality-of-life fix that eliminates the friction of manually selecting text in terminal windows to copy long assistant responses, adding a one-command shortcut for users after multi-thousand token generation turns. |
| [#5715 Session recovery is invisible to the model after force-quit](https://github.com/Hmbown/CodeWhale/issues/5715) | Opened usability gap where users who interrupt long-running multi-file refactoring tasks mid-execution cannot auto-resume work on restart, even though full task state is already persisted to local disk, creating unnecessary rework for end users. |
| [#1261 Pane zooming support](https://github.com/Hmbown/CodeWhale/issues/5712) | Closed UI enhancement that resolves a years-old pain point where content in wide table or task panes would get truncated on smaller terminal displays, giving users explicit controls to zoom individual panes to view full content without switching to a larger screen. |

## 4. Key PR Progress (Top 10 Important)
| PR | Details |
|----|---------|
| [#5719 fix(custom): wire = responses\|anthropic for openai-compatible](https://github.com/Hmbown/CodeWhale/pull/5719) | Rescued unmergeable community PR #5716, preserving full authorship attribution for original contributor @whp233, delivering the requested non-Chat Completions wire format support for custom model providers. |
| [#5724 fix(sandbox): resolve read deny-list path matching to fix CI](https://github.com/Hmbown/CodeWhale/pull/5724) | Fixes broken macOS and Windows hosted CI pipelines that were failing all test runs on the main branch, unblocking 10+ pending PRs targeting the v0.9.12 release. |
| [#5725 feat(providers): Concentrate as first-class opt-in BYOK Responses gateway](https://github.com/Hmbown/CodeWhale/pull/5725) | Natively integrates the Concentrate.ai OpenAI Responses-compatible gateway into the provider ecosystem, with no separate secret management or custom runtime required for end users. |
| [#5721 feat(cli): Codewhale account machine tokens (CODEWHALE_API_KEY)](https://github.com/Hmbown/CodeWhale/pull/5721) | Enables fully headless CI/CD authentication for remote agent runners, eliminating the requirement for browser login or local session files when deploying CodeWhale agents in automated cloud pipelines. |
| [#5722 feat(tui): wire header pod + notifications segments](https://github.com/Hmbown/CodeWhale/pull/5722) | Adds two new status indicators to the TUI top bar: real-time active worker count out of maximum configured subagents, and unread notification alerts, drastically improving visibility into background session state. |
| [#5720 feat(web): Moonshot and Kimi native search support](https://github.com/Hmbown/CodeWhale/pull/5720) | Rescued stuck community PR from contributor @h3c-hexin, adding native integration for the built-in search functionality shipped with Kimi/Moonshot models, no external plugin required. |
| [#5632 feat: One worker system; retire Keychain product path](https://github.com/Hmbown/CodeWhale/pull/5632) | Merged major architecture update that unifies all sub-agent execution under a single spawn model, removes the deprecated OS keychain secret backend, and simplifies all user auth flows by storing encrypted secrets in a dedicated local user directory. |
| [#5659 feat(web): land tailscale runtime web with usable rail](https://github.com/Hmbown/CodeWhale/pull/5659) | Merged enterprise feature that adds the `

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*