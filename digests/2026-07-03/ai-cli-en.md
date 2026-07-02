# AI CLI Tools Community Digest 2026-07-03

> Generated: 2026-07-02 23:07 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
*Report Date: 2026-07-03 | Audience: Technical decision-makers, enterprise devops teams, AI tooling developers*

---

## 1. Ecosystem Overview
The 2026 AI CLI tools landscape is transitioning rapidly from early adopter hobbyist deployments to production-grade enterprise usage, with all major tracked projects prioritizing core reliability hardening over flagship new feature launches this cycle. Months of rapid multi-agent capability development have given way to cross-tool alignment on fixing long-unaddressed edge cases for security, cross-platform parity, and usage transparency, as teams deploy AI CLI agents for critical production development workflows. The ecosystem is clearly split between six vendor-backed tools that optimize for first-party model and IDE integration, and three independent open source projects that prioritize extensibility and multi-provider customizability. MCP (Model Context Protocol) compliance, native multi-session orchestration, and local self-hosted model support have emerged as baseline expected features for all competitive tools in the space.

---

## 2. Activity Comparison
| Tool Name | New Updated Hot Issues | Active/Updated PRs | 24-Hour Release Status |
|-----------|-------------------------|--------------------|-------------------------|
| Claude Code | 10 | 4 (2 documentation, 1 devcontainer fix, 1 WIP draft) | 0 new releases |
| OpenAI Codex | 10 | 10 (all core security/performance hardening) | 2 new Rust CLI pre-releases (0.143.0-alpha.33/34) |
| Gemini CLI | 10 | 10 (mix of security fixes and QoL improvements) | 1 new nightly security patch release |
| GitHub Copilot CLI | 10 | 2 (both non-core, no production functionality changes) | 1 new stable release (v1.0.69-0) |
| Kimi Code CLI | 2 | 1 (community-submitted media paste fix) | 0 new releases |
| OpenCode | 10 | 10 (all core feature/bug fixes for 2.0 pre-release) | 0 new releases |
| Pi (badlogic/pi-mono) | 10 | 10 (refactor + multi-provider bug fixes) | 0 new releases |
| Qwen Code | 10 | 10 (feature + bug fix PRs) | 2 new releases (v0.19.5 stable, 1 nightly) |
| DeepSeek TUI | 10 | 8 (core refactor + v0.8.67 blocker fixes) | 0 new releases (v0.8.67 in pre-validation) |

---

## 3. Shared Feature Directions
These high-priority requirements appear across multiple tool communities, representing universal unmet user needs across the ecosystem:
1. **Multi-agent / multi-session orchestration**: Requested by Claude Code (inter-session sync, agent monitoring dashboard), Qwen Code (configurable nested sub-agent depth), DeepSeek TUI (Fleet per-role model routing), and OpenCode (command-level model metadata routing). Specific user need: teams running 10+ parallel agent instances on large modular projects require native guardrails to eliminate silent git state conflicts, optimize workload routing to balance cost and performance, and debug distributed agent workflow failures.
2. **Cross-platform + private network parity**: Observed across 6 tools (Claude Code, OpenAI Codex, Gemini CLI, Kimi Code CLI, Qwen Code, Pi). Specific user need: teams using WSL, macOS, Windows, Linux, and enterprise private mesh networks (Tailscale, ZeroTier) require unbroken authentication and connectivity, no unplanned forced restarts or manual workarounds to resolve websocket routing failures.
3. **Sandbox security hardening**: Prioritized by OpenAI Codex, Gemini CLI, OpenCode, and DeepSeek TUI. Specific user need: developers working with untrusted Git repositories require fully closed escape vectors for malicious symlinks, custom Git hooks, and patched path validation logic to prevent unauthorized system file access and credential leaks.
4. **Full MCP / custom model endpoint compliance**: Requested by GitHub Copilot CLI, Kimi Code CLI, Pi, and OpenCode. Specific user need: enterprise teams running private self-hosted model deployments require 100% MCP spec support and parity with official model SDK environment variable conventions to avoid broken drop-in custom endpoint workflows.

---

## 4. Differentiation Analysis
Tools are clearly segmented by use case and developer priority:
- **First-party vendor tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI)**: Feature focus is on tight integration with their native model ecosystems and flagship IDE (VS Code) workflows, target individual professional developers and enterprise teams with formal SLA requirements. Technical approach prioritizes backwards compatibility over rapid extensibility changes to avoid introducing regression risk for large existing user bases.
- **APAC regional vendor tools (Kimi Code CLI, Qwen Code)**: Feature focus is on regional platform support (WeCom, QQ channel adapters, CNY token cost tracking, non-UTF8 Windows code page fixes) for domestic shared team deployments. Technical approach is optimized for operation on on-premise private cloud instances common in Chinese enterprise environments.
- **Independent open source projects (OpenCode, Pi, DeepSeek TUI)**: Feature focus is maximum extensibility, broad multi-provider model support, and low-level customization, target power users, self-hosted operators, and teams building custom agent orchestration stacks. Technical approach permits frequent core codebase refactors and fast community patch merging to rapidly address niche use cases ignored by vendor tools.

---

## 5. Community Momentum & Maturity
- **High-activity, fast-iterating mature tools**: OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code. All 5 projects processed 10+ updated hot issues and 10+ core functional PRs this cycle, with large, active contributor bases balancing new feature development, bug triage, and long-term roadmap work for upcoming major releases.
- **Steady-maturity, focused community tools**: Claude Code, DeepSeek TUI, GitHub Copilot CLI. Claude Code has among the highest user demand for enterprise multi-agent features, but slower PR velocity this cycle as maintainers focus on resolving the top 201-upvote cross-platform timeout bug. Copilot CLI shipped a stable release but no core PR activity this cycle, while DeepSeek TUI is in final validation for its major v0.8.67 constitution-first onboarding refresh.
- **Small, use-case focused community**: Kimi Code CLI. The project saw only 2 updated issues and 1 community PR this cycle, with maintainers prioritizing critical bug fixes for its existing user base rather than expanding new feature surface at this time.

---

## 6. Trend Signals
These industry patterns have direct operational reference value for engineering teams:
1. **Sandbox security is now a critical production risk**: Four leading tools closed high-severity untrusted repository escape vectors this cycle, as maliciously constructed Git repos can now bypass existing AI CLI safety checks to run arbitrary code. Teams that use AI CLI tools to analyze unvetted open source repos must upgrade to latest patched builds immediately.
2. **Usage accounting infrastructure remains immature**: Both OpenAI Codex and OpenCode reported critical unprovoked quota draining bugs in this window, demonstrating that even leading vendors lack robust, auditable billing event logging. Enterprise teams should implement independent sidecar usage tracking to avoid unplanned cost overruns and unexpected service outages.
3. **Minimal vendor lock-in is now achievable**: All tracked tools are converging on shared standards for MCP, model routing, and session persistence, meaning teams can build portable custom agent workflows that work across multiple AI CLI vendors in the next 6 months with minimal rework.
4. **Self-hosted local model support is now table stakes**: Every tracked tool has active high-voted feature requests for native local model compatibility, so teams planning private air-gapped AI deployments can expect production-grade support for self-hosted models across almost all leading AI CLI tools in the next 2-3 consecutive releases.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-07-03)
---
## 1. Top Skills Ranking
Ranked by cross-issue reference, community engagement volume, and recency of activity:
1.  **`run_eval.py` 0% Recall Fix Skill Creator Patch | PR #1298** | Status: Open | <https://github.com/anthropics/skills/pull/1298>
    Functionality: Resolves the widely reproduced core bug in the skill evaluation pipeline that reports 0% recall for all skill descriptions regardless of content, alongside separate fixes for Windows stream reading, trigger detection logic, and parallel worker performance. Discussion highlights: Directly addresses the blocking bug referenced in 3 high-traffic community issues, with 10+ independent user reproductions logged that broke the entire skill description optimization workflow.
2.  **Self-Audit Output Quality Gate Skill | PR #1367** | Status: Open | <https://github.com/anthropics/skills/pull/1367>
    Functionality: A universal cross-stack skill that audits AI output before delivery, running mechanical file verification first, followed by a 4-dimension reasoning quality check prioritized by damage severity. Discussion highlights: Proposed as a default base layer for all Claude Code workflows, with no unresolved open feedback after its late June 2026 submission.
3.  **Document Typography Quality Control Skill | PR #514** | Status: Open | <https://github.com/anthropics/skills/pull/514>
    Functionality: Detects and fixes common typographic defects across all AI-generated documents, including orphan word wraps, stranded section headers (widows), and multi-list numbering misalignment. Discussion highlights: Noted as a universal utility that improves every document Claude generates, a gap no existing official skill addresses.
4.  **ODT OpenDocument Format Skill | PR #486** | Status: Open | <https://github.com/anthropics/skills/pull/486>
    Functionality: Adds full support for creating, editing, filling templates, parsing, and converting OpenDocument Format files (.odt, .ods) used by LibreOffice and compliant with the ISO open document standard. Discussion highlights: Fills a longstanding gap for users working in open-source, non-Microsoft document workflows.
5.  **Full Testing Patterns Skill | PR #723** | Status: Open | <https://github.com/anthropics/skills/pull/723>
    Functionality: A comprehensive testing reference skill spanning the full test stack, including testing philosophy (Testing Trophy model), unit testing best practices, and React component testing workflows. Discussion highlights: Addresses community feedback that existing testing skills only cover narrow, use-case specific scenarios.
6.  **Dual Meta Skill Quality + Security Analyzer | PR #83** | Status: Open | <https://github.com/anthropics/skills/pull/83>
    Functionality: Two nested meta-skills that validate custom Claude Skills for 5 dimensions of structural quality and 7 categories of security risk prior to marketplace submission. Discussion highlights: Proposed as the official community submission check to eliminate low-quality or malicious skills from the public collection.
7.  **macOS Native AppleScript Automation Skill | PR #806** | Status: Open | <https://github.com/anthropics/skills/pull/806>
    Functionality: Enables Claude to control macOS natively via `osascript` without relying on slower, less accurate screenshot-based computer use, with a 2-tier permission model that separates pre-approved application scripting from restricted UI automation workflows.

---
## 2. Community Demand Trends
From top-comment public issues, the highest priority community needs fall into 4 clear categories:
1.  **Platform Safety & Governance**: The #1 most discussed topic is fixing the `anthropic/` namespace trust boundary vulnerability that allows unvetted community skills to impersonate official Anthropic tools, followed by demand for native org-wide shared skill libraries to eliminate manual .skill file distribution across team members.
2.  **Stable Skill Authoring Tooling**: There is overwhelming, cross-user demand for fixing the broken `skill-creator` evaluation pipeline (the 0% recall bug affects all skill optimization workflows), alongside full Windows compatibility for all skill development scripts and YAML validation safeguards to prevent silent parsing failures.
3.  **Enterprise Workflow Skills**: High anticipated new skill directions include SAP predictive analytics integration, agent governance safety pattern libraries, and permission-aware SharePoint Online document processing for regulated enterprise environments.
4.  **Ecosystem Usability Improvements**: Users are asking for fixes that eliminate duplicate skills from conflicting plugin installs, full AWS Bedrock compatibility for self-hosted Claude deployments, and exposure of existing Skills as standardized Model Context Protocol (MCP) endpoints.

---
## 3. High-Potential Pending Skills
All of the following active PRs have fully tested community-submitted fixes and are on track to be merged imminently pending core Anthropic team review:
1.  **Full Skill Creator Fix Stack (PRs #1298, #1323, #1099, #1050)** | <https://github.com/anthropics/skills/pull/1298>: The complete set of patches that resolves the 0% recall bug, Windows subprocess compatibility errors, and trigger detection failures for the entire skill evaluation workflow, all updated within the last 3 weeks of the reporting period.
2.  **PDF + DOCX Skill Stability Fixes (PRs #538, #541)** | <https://github.com/anthropics/skills/pull/538>: Patches that resolve case-sensitive file reference breaks on Unix systems and tracked change w:id collisions that caused document corruption in the official document processing skills.
3.  **Contributing Guide PR #509** | <https://github.com/anthropics/skills/pull/509>: A drafted full `CONTRIBUTING.md` that resolves the repo's 25% GitHub community health score gap, with all requirements from the linked issue #452 fully met.
4.  **Self-Audit Skill PR #1367** | <https://github.com/anthropics/skills/pull/1367>: The universal pre-delivery output quality gate, updated 1 day before the reporting cutoff with no outstanding requested changes.

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated cross-cutting demand is resolving broken, Unix-first skill-creator tooling gaps to enable reliable low-friction custom skill development, while establishing clear safety guardrails for shared community skills to unlock broader enterprise and organizational adoption of the platform.

---

# Claude Code Community Digest | 2026-07-03
---
## 1. Today's Highlights
No new official Claude Code releases shipped in the 24-hour reporting window. The highest-trending community issue is a cross-platform AskUserQuestion timeout bug that earned 201 upvotes, impacting interactive approval flows for users running the tool on Bedrock, Linux, VS Code, and TUI deployments. Community discussion activity is heavily focused on multi-session and multi-agent workflow enhancement, with 4 total pull requests updated including a critical devcontainer startup fix and two duplicate documentation typo patches.

## 2. Releases
No new official Claude Code versions were published in the last 24 hours.

## 3. Hot Issues
1. **[#73125](https://github.com/anthropics/claude-code/issues/73125) [BUG] AskUserQuestion 60s no response error** (53 comments, 201 👍) – The highest-engagement open bug breaks all interactive user confirmation flows for cross-platform deployments across Bedrock, Linux, VS Code, and the TUI, forcing users to restart sessions to continue tool execution.
2. **[#24798](https://github.com/anthropics/claude-code/issues/24798) Inter-session communication for multi-Claude workflows** (53 comments, 18 👍) – Long-running feature request to let parallel siloed Claude Code sessions sync outputs and dependencies for large modular projects, a top priority for enterprise dev teams running dozens of Claude instances at once.
3. **[#53717](https://github.com/anthropics/claude-code/issues/53717) Windows Desktop session content loss after auto-update** (14 comments, 6 👍) – Critical data loss bug where session metadata appears in the sidebar but chat history is never persisted to local JSONL storage, leaving users unable to recover hours of work post-update.
4. **[#24537](https://github.com/anthropics/claude-code/issues/24537) Agent Hierarchy Dashboard for multi-agent workflows** (13 comments, 15 👍) – Request for a unified real-time visualization layer across TUI and desktop to monitor running multi-agent task stacks, filling a gap for teams building custom agent orchestration on Claude Code.
5. **[#11825](https://github.com/anthropics/claude-code/issues/11825) Runtime keyboard shortcuts for permission mode toggling** (7 comments, 22 👍) – Highly requested quality-of-life feature matching Gemini CLI functionality, letting users avoid pausing workflows to navigate config menus to adjust execution permissions.
6. **[#60295](https://github.com/anthropics/claude-code/issues/60295) Cross-session git branch swap in shared repos** (4 comments) – Dangerous footgun where two Claude Code sessions running in the same working directory on different branches can silently overwrite each other's branch state, breaking user expectations and risking uncommitted code loss.
7. **[#71837](https://github.com/anthropics/claude-code/issues/71837) Windows Desktop no root path change UI on startup failure** (4 comments) – Blocks startup for users who move their project root folder after their last session, forcing users to find undocumented manual workarounds to reset their working directory.
8. **[#73400](https://github.com/anthropics/claude-code/issues/73400) macOS sub-agents stuck in "Running" state post-completion** (2 comments) – Newly opened bug that breaks agent debugging, as users have no way to confirm background tasks have fully finished execution via the activity panel.
9. **[#72233](https://github.com/anthropics/claude-code/issues/72233) macOS Apple Silicon daemon respawn every 52s** (2 comments) – Causes constant agent reconnection events and failures for any long-running background agent task that does not complete within a 1-minute window.
10. **[#73403](https://github.com/anthropics/claude-code/issues/73403) Windows first run ignores pre-configured OAuth tokens** (1 comment) – Breaks automated enterprise VDI deployments, where admins pre-provision `CLAUDE_CODE_OAUTH_TOKEN` to avoid forcing end-users through manual onboarding login flows.

## 4. Key PR Progress
Only 4 total PRs saw updates in the reporting window, all listed below:
1. **[#72451](https://github.com/anthropics/claude-code/pull/72451) fix: remove statsig.anthropic.com from init-firewall.sh** – Critical unblocking fix that deletes an obsolete DNS hostname from the devcontainer startup allowlist, stopping firewall initialization from hard failing when the hostname fails to resolve.
2. **[#73476](https://github.com/anthropics/claude-code/pull/73476) docs: fix GitHub capitalization in README** – Minor documentation patch correcting "Github" to the official proper "GitHub" spelling, no functional impact.
3. **[#72866](https://github.com/anthropics/claude-code/pull/72866) docs: fix Github -> GitHub typo in README** – Duplicate documentation patch addressing the exact same capitalization typo, indicating the issue was widely noticed by casual contributors.
4. **[#72543](https://github.com/anthropics/claude-code/pull/72543) Create Cha** – Untitled work-in-progress draft PR with no public description or linked code changes, likely an uncompleted contribution from a first-time author.

## 5. Feature Request Trends
Top community feature priorities break down into three distinct clusters:
1. Multi-agent / multi-session orchestration: Two of the highest-voted enhancement requests focus on enabling inter-session communication and a unified agent monitoring dashboard, showing teams building large parallel workflows are prioritizing native Claude Code orchestration tooling.
2. Workflow quality of life: Top requests include customizable runtime permission shortcuts, a recent projects picker for fast CLI launch, and session forking to decouple new instances from existing working directory state.
3. Democratized access to existing features: Users are asking for the `/fast` Opus 4.6 low-latency mode to be unlocked for all paid users without an extra-usage opt-in requirement, plus exposed live tool output streaming events for custom third-party integrations.

## 6. Developer Pain Points
Recurring, high-frequency frustrations surfaced in the latest issue updates:
1. Cross-platform edge cases for authentication and startup: Windows fails to respect pre-provisioned OAuth tokens for automated deployments, while macOS suffers from periodic keychain ACL resets and daemon crashes that interrupt long-running tasks.
2. Unintended cross-session interference: No locking on shared state leads to silent git branch swaps, lost concurrent subagent messages, and unexpected task interruptions when multiple Claude instances run in the same repo.
3. Unaccounted resource waste: Extended thinking loops can hang indefinitely burning through user token credits with no results returned, and unprompted user approval timeouts break in-progress work without warning.
4. Unreliable session persistence: Windows desktop auto-updates regularly corrupt local chat history storage, creating avoidable data loss risk for unbacked up work.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-03
---
## 1. Today's Highlights
July 3, 2026 Codex activity is centered on two new pre-release Rust CLI builds, a wave of critical security hardening patches that close multiple unaddressed Git workspace sandbox escape and unsafe patching vectors, and newly surfaced widespread reports of abnormal usage quota draining impacting ChatGPT Plus and Pro subscribers. The longstanding request for a native Linux Codex desktop app has now hit 680 upvotes, making it the most popular open enhancement request in the project’s issue tracker. Recent partial fixes for the earlier 640TB/year SQLite log SSD endurance bug are being validated by the community as engineers work to eliminate remaining edge cases.

## 2. Releases
Two new Rust CLI pre-releases shipped in the last 24 hours, building on the 0.142.0 stable release that resolved 85% of the excessive SQLite log SSD wear issue:
- **rust-v0.143.0-alpha.33**: Unreleased testing build for new patch safety and interleaved response features
- **rust-v0.143.0-alpha.34**: Follow-up alpha with bug fixes for issues identified in the preceding alpha build

## 3. Hot Issues (Top 10 Notable)
All items link to their GitHub issue pages for full context:
1. **[#11023 Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**: The most upvoted open issue (680 👍, 139 comments) from open source developers who report the current macOS app has unworkable power consumption on their laptops, and want a native build to run on their primary Linux development workstations.
2. **[#28224 Codex SQLite feedback logs can write ~640 TB/year and rapidly consume SSD endurance](https://github.com/openai/codex/issues/28224)**: 418 👍, 128 comments. Even after 3 official merged PRs fixed 85% of the excessive logging, users are actively testing edge cases to push for full resolution to prevent premature consumer SSD burnout.
3. **[#13041 WebSocket upgrade succeeds then server closes with 1008 Policy (falls back to HTTPS)](https://github.com/openai/codex/issues/13041)**: 161 👍, 74 comments. This connectivity bug forces all tool call operations over slower HTTPS transport, adds 2-3x latency to agent sessions, and disproportionately impacts Arch Linux users.
4. **[#8648 Codex replies to earlier messages instead of latest one in conversations](https://github.com/openai/codex/issues/8648)**: 55 👍, 73 comments. A context tracking bug that breaks multi-turn complex development workflows, observed most frequently on the high-performance gpt-5.2-xhigh model.
5. **[#28969 Add setting to disable the auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)**: 73 👍, 10 comments. Power CLI users complain the forced 60-second auto-submit for unresolved agent interrupts breaks deliberate debugging workflows, making this one of the highest-rated small quality-of-life requests.
6. **[#30918 Usage limits draining abnormally fast on Plus: 70% to 100% in about 6 minutes on July 2, 2026](https://github.com/openai/codex/issues/30918)**: Newly opened critical bug from multiple Plus users that reports paid 5-hour usage quotas are being fully exhausted during casual interactive sessions with no heavy agent activity.
7. **[#30943 Usage hit 0% with zero messages sent, quota draining with no activity at all](https://github.com/openai/codex/issues/30943)**: Follow-up bug to the above that proves the issue is a pure accounting error rather than actual usage, leaving Pro users locked out of the service unexpectedly.
8. **[#18115 Repository-scoped marketplace and plugin configuration in project config](https://github.com/openai/codex/issues/18115)**: 45 👍, 7 comments. Engineering teams want the ability to share standardized MCP/plugin settings via a checked-in `./.codex/config.toml` file rather than forcing individual users to apply their own user-level config.
9. **[#16857 High GPU usage while the app is “thinking” due to tiny useless animation](https://github.com/openai/codex/issues/16857)**: 39 👍, 37 comments. A low-effort performance fix that would eliminate excessive idle GPU usage and 30%+ extra battery drain on macOS MacBook systems.
10. **[#20214 Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient system resources](https://github.com/openai/codex/issues/20214)**: 39 👍, 22 comments. Widely reported desktop instability affecting even high-spec Windows 11 systems with 32GB+ RAM and modern x86 CPUs.

## 4. Key PR Progress (Top 10 Important)
All items link to their GitHub pull request pages:
1. **[#30833 Bind Git worktree helpers to a trusted executable](https://github.com/openai/codex/pull/30833)**: Security hardening that blocks malicious PATH overrides from running unvetted user-controlled Git binaries before Codex's safety checks execute.
2. **[#30896 Centralize repository authority for Git helper launches](https://github.com/openai/codex/pull/30896)**: Eliminates race conditions where Git repository state could be modified after trust validation, while cutting multi-step Git operation latency by 70% to reduce frequent Windows timeout errors.
3. **[#30876 [core] Support interleaved response items](https://github.com/openai/codex/pull/30876)**: Fixes TUI and app output rendering bugs that caused broken deduplication and missing text when extended reasoning streams and final answer events are interleaved in Responses API streams.
4. **[#30752 [codex] Wire reasoning summary delivery configuration](https://github.com/openai/codex/pull/30752)**: Adds 3 new user-selectable reasoning streaming modes (sequential, concurrent, concurrent_cutoff) to let users tune the balance of response speed and output readability.
5. **[#30837 Derive effective patch paths through Git](https://github.com/openai/codex/pull/30837)**: Resolves mismatches between user-parsed diff headers and actual Git modified file paths, which prevents broken policy checks for renamed, copied, or headerless patches.
6. **[#30628 [codex] Trust only system PowerShell parsers on Windows](https://github.com/openai/codex/pull/30628)**: Blocks malicious repository-controlled fake `powershell.exe` or `pwsh.exe` binaries from bypassing Codex's command safety approval flows on Windows systems.
7. **[#30844 Confine staged patch paths to the parent worktree](https://github.com/openai/codex/pull/30844)**: Closes a major sandbox escape vector that could allow maliciously crafted patches to write files outside the target working directory via symlinks, junctions, or submodules.
8. **[#30956 refactor(protocol): isolate legacy item fanout](https://github.com/openai/codex/pull/30956)**: First in a 3-PR refactor stack that rewrites Codex's core conversation event system to enable stable, long-requested paginated thread persistence for large chat histories.
9. **[#28714 Require approval for generic Git commands](https://github.com/openai/codex/pull/28714)**: Treats all Git operations as potentially unsafe (as they can run custom repository-defined filters, hooks, and merge drivers) to eliminate unvetted arbitrary code execution paths.
10. **[#29470 Deny implicit transport for local-only Git operations](https://github.com/openai/codex/pull/29470)**: Prevents apparently local Git metadata and patching commands from accidentally connecting to remote endpoints via automatic partial clone object fetches without user consent.

## 5. Feature Request Trends
The top user-requested feature directions from recent issues are:
1. **Cross-platform parity**: Highest priority demand is a native Linux desktop app, followed by feature parity for existing macOS/Windows capabilities (including Computer Use) on the Codex CLI.
2. **Git and conversation workflow improvements**: Tree-based branching chat history for easy context rollback, support for attaching existing Git worktrees to new sessions, and repository-scoped shared plugin/marketplace config for team use cases.
3. **Fine-grained user controls**: Toggle to disable the 60-second automatic interrupt resolve on CLI, and configurable reasoning streaming delivery modes to balance speed and readability.
4. **Low-friction quality of life**: Elimination of idle CPU/GPU usage from decorative UI animations, and native background refresh for embedded GitHub/PR integrations.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported this cycle:
1. **Cluster of Windows-specific desktop bugs**: Unpredictable app freezes, broken `apply_patch` sandbox operations, missing Node.js REPL tools for Computer Use, system temperature spikes, and broken terminal reading make Windows the least stable platform for Codex desktop users currently.
2. **Urgent usage accounting failures**: Widespread unprovoked quota draining with zero active model usage is locking paid Plus and Pro users out of the service unexpectedly, with no official status update or ETA for a fix.
3. **Performance gaps across all platforms**: Residual excessive SQLite logging wear on SSDs, idle GPU drain from UI animations, and frequent WebSocket connection drops that force high-latency HTTPS transport for all operations.
4. **Unpatched sandbox edge cases**: Multiple documented but not yet fully addressed escape vectors for maliciously configured Git repositories that can run unapproved code via custom hooks, filters, and merge drivers, which the current batch of OAI security PRs is actively targeting.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-03
---
## 1. Today's Highlights
This 24-hour update cycle is focused on critical security hardening, agent reliability fixes, and community-contributed quality-of-life improvements for the Gemini CLI. The latest nightly release ships a high-impact symbolic link path escape vulnerability patch, while maintainers triage 50 updated open issues including a top P1 bug where subagents incorrectly report full success even after hitting maximum execution turns. 20 total updated pull requests include user-submitted patches for longstanding pain points ranging from corrupted Jupyter notebook edits to broken emoji rendering in terminal UIs.

## 2. Releases
### v0.51.0-nightly.20260702.gff00dacd9
This latest nightly release contains a single high-priority core fix: resolve symbolic link directory escape vulnerabilities in the memory import processor, contributed by @luisfelipe-alt via [PR #28233](https://github.com/google-gemini/gemini-cli/pull/28233). Full changelog is available [here](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260701.g7f00c5fe5...v0.51.0-nightly.20260702.gff00dacd9).

## 3. Hot Issues (Top 10 Notable)
1.  [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, 9 comments, 2 👍): Subagents incorrectly report `GOAL` success after hitting MAX_TURNS limits, hiding the fact that no actual work or analysis completed. This breaks agent workflow debugging, and maintainers have marked it for retesting as a top priority bug.
2.  [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, 7 comments, 8 👍): Generalist agent hangs indefinitely even for trivial operations like folder creation, forcing users to disable all subagents as a workaround. It is one of the highest-engagement user-reported bugs in the current backlog.
3.  [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353) (P1, 7 comments): Epic tracking robust component-level evaluations for agents, which builds on the existing 76 behavioral test suite to run across 6 supported Gemini model variants, critical for eliminating regressions in future releases.
4.  [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745) (P2, 7 comments, 1 👍): Investigation epic for AST-aware file reads, search and codebase mapping that is projected to cut token overhead and excess tool call turns by over 30% for codebase investigation use cases.
5.  [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166) (P1, 4 comments, 3 👍): Shell execution gets stuck at "Waiting input" after a command fully completes, breaking unattended automation workflows and requiring manual user intervention for every simple shell operation.
6.  [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525) (P2, 5 comments): Security bug where Auto Memory sends unredacted local transcript content to the model context before secret masking runs, exposing users to accidental credential leaks during background processing.
7.  [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522) (P2, 5 comments): Auto Memory retries low-signal empty/short sessions indefinitely, wasting user CPU and API credits on processing sessions with no actionable information to extract.
8.  [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968) (P2, 6 comments): Users report custom domain skills and sub-agents are almost never invoked by the model unless explicitly instructed, wasting the time users spend setting up custom skill definitions for their workflows.
9.  [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079) (P2, 4 comments): Symlinked agent files in the `~/.gemini/agents` directory are not recognized by the CLI, breaking a very common shared team agent workflow where users sync central agent definitions via symlinks from shared repos.
10. [Issue #28231](https://github.com/google-gemini/gemini-cli/issues/28231) (P2, 2 comments): Policy engine documentation included a dangerous `rm -rf /` example as a test case, creating high risk of accidental full system data loss for new users following the tutorial.

## 4. Key PR Progress (Top 10 Important)
1.  [PR #28233](https://github.com/google-gemini/gemini-cli/pull/28233) (merged in nightly): Critical security fix that blocks symbolic link directory escapes in the memory import processor, preventing malicious symlinks from letting the memory scanner read files outside the allowed user workspace root.
2.  [PR #28244](https://github.com/google-gemini/gemini-cli/pull/28244): Community-contributed patch that replaces the dangerous `rm -rf /` policy engine docs example with a safe no-op test command, resolving the urgent documentation bug within hours of it being filed.
3.  [PR #28223](https://github.com/google-gemini/gemini-cli/pull/28223): Fix for `write_file` and `replace` tools that bypasses unnecessary LLM correction logic for `.json` and `.ipynb` files, eliminating the widely reported bug where Gemini would corrupt structured Jupyter notebook and JSON assets during edits.
4.  [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164): Implements a strict default 15-turn recursive reasoning limit per user request, preventing infinite agent loops from draining user API credits and local CPU, with the limit configurable via the existing `maxSessionTurns` setting.
5.  [PR #28240](https://github.com/google-gemini/gemini-cli/pull/28240): Adds out-of-the-box support for `AGENTS.md` context files, so users no longer need to manually add the file path to their settings for the memory tool to load it, aligning with popular AI tooling conventions.
6.  [PR #28224](https://github.com/google-gemini/gemini-cli/pull/28224): Fixes a longstanding UI bug that split UTF-16 emoji surrogate pairs during string truncation, eliminating the ugly replacement character artifacts that appeared in terminal displays when rendering strings with emojis.
7.  [PR #28103](https://github.com/google-gemini/gemini-cli/pull/28103): Resolves OAuth token exchange failures on Node.js 22.23.0+, 24.17.0+, and 26.3.0+ releases that shipped the CVE-2026-48931 security patch, fixing the "Premature close" Google sign-in error that impacted thousands of recent Node installations.
8.  [PR #28126](https://github.com/google-gemini/gemini-cli/pull/28126): Adds ellipsis indicators to multi-line edit snippets displayed to users in the terminal, so users can immediately see when a proposed edit hides additional content that does not fit in the displayed preview.
9.  [PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971) (recently merged): Strips the model's internal reasoning "thought" content from scrubbed conversation history turns, eliminating the "thought leakage" bug where internal model monologues polluted history and caused subsequent infinite reasoning loops.
10. [PR #28167](https://github.com/google-gemini/gemini-cli/pull/28167) (recently merged): Adds the full skeleton for the caretaker agent Egress Cloud Run service, laying the foundation for secure remote action auditing and event logging for enterprise Gemini CLI deployments.

## 5. Feature Request Trends
The most active feature directions from the 24-hour updated backlog are:
1.  AST-native codebase processing: Users are requesting built-in AST-aware file read, search and mapping tools to reduce token overhead, cut unnecessary tool calls, and improve code edit precision.
2.  Full subagent observability: Multiple high-votes requests to expose full subagent execution trajectories in `/chat share` outputs and standard bug reports, to make debugging agent workflows far easier.
3.  Browser agent resilience: Feature asks for automatic locked session recovery and persistent session takeovers for the browser subagent, replacing the current fail-fast behavior that interrupts long-running automation tasks.
4.  Dynamic tool scoping: Users want the CLI to automatically prune the active tool list to stay under 128 tools, preventing the 400 API error that triggers in very large workspaces with many installed tools.

## 6. Developer Pain Points
Recurring top frustrations reported in updated issues:
1.  Agent unreliability: The most common complaint is unexpected hangs, incorrect success status reporting after MAX_TURNS hits, and subagents ignoring user-defined configuration overrides (such as `maxTurns` settings in `settings.json`).
2.  Structured file edit data loss: High frequency of user reports about corrupted edits for Jupyter notebooks, JSON files, and symlinked agent definitions, creating avoidable workflow downtime.
3.  Terminal UI glitches: Persistent low-quality UX including broken emoji rendering, full-screen flicker on terminal resize, and terminal buffer corruption after exiting external

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-03
---
## 1. Today's Highlights
Yesterday’s top update is the release of Copilot CLI v1.0.69-0, which ships sandbox path file/folder completions and critical performance fixes for session management and MCP reload logic. The community saw longstanding high-impact bugs related to the recent terminal scrollbar rollout receive renewed triage attention, while new feature requests focused on parity with VS Code’s custom model endpoint capabilities gathered early engagement. Two previously open sandbox-related production bugs were marked as closed, confirming full functionality of the June 2026 public preview sandbox feature across Linux and custom skill use cases.

## 2. Releases
### v1.0.69-0 (Released last 24h)
- **Added**: File and folder completion support for `/sandbox` path entries to streamline sandboxed file workflow navigation
- **Fixed**:
  - Updates backgrounded session branch labels in the Sessions split view when the working directory is modified
  - Eliminates unnecessary MCP reload overhead when returning to an already active, loaded session
  - Partial in-progress fix to prevent runaway execution of the tgrep indexer

## 3. Hot Issues
1. [#3501](https://github.com/github/copilot-cli/issues/3501) Windows scroll bar misaligns text | 9 👍, 6 comments
   The highest-voted open bug, affecting all Windows terminal users with both Windows Console Host and modern Windows Terminal. The scrollbar rollout introduced widespread rendering breakage that Copilot CLI cannot self-resolve via agent prompts.
2. [#3997](https://github.com/github/copilot-cli/issues/3997) Model "gpt-5.3-codex" is unavailable in Copilot Web | 6 comments
   Active triage issue that breaks core agent execution entirely for web Copilot CLI users, with a runtime session creation error blocking all code generation actions.
3. [#4003](https://github.com/github/copilot-cli/issues/4003) Support custom model endpoints (VS Code parity) | 2 comments
   High-priority new feature request that would enable local model testing, enterprise private model deployments, and full BYOK workflow support equivalent to the VS Code Copilot experience.
4. [#3158](https://github.com/github/copilot-cli/issues/3158) Plan→Compact→Re-Plan infinite loop | 3 comments
   High-severity context memory bug that causes the agent to run 200+ idle cycles with zero actual code execution once session context hits ~75% capacity.
5. [#4014](https://github.com/github/copilot-cli/issues/4014) Broken rendering during `/mcp add` workflow | 0 👍, 0 comments
   Confirmed regression in the latest v1.0.69-0 release that completely breaks the UI for adding new MCP servers.
6. [#4009](https://github.com/github/copilot-cli/issues/4009) Scrollbar character leaks into copied output | 0 👍, 0 comments
   Annoying usability breakage where the right-aligned scrollbar `┃` glyph is appended to every line of copied session output, requiring manual cleanup after copying text from responses.
7. [#3936](https://github.com/github/copilot-cli/issues/3936) Ctrl+G should expand paste tokens to full text in $EDITOR | 1 👍, 3 comments
   Claude Code parity request that fixes a broken workflow where collapsed paste tokens are written as literal placeholder text to external editor temp files instead of the full pasted content.
8. [#3653](https://github.com/github/copilot-cli/issues/3653) Local sandbox mode fixed for Linux | Closed, 2 comments
   Resolution for a preview feature bug that left sandboxing completely non-functional for all Linux users for 1 month post-launch.
9. [#3165](https://github.com/github/copilot-cli/issues/3165) allowed-tools shell auto-approve for compound commands fixed | Closed, 1 comment
   Fix that resolves broken custom skill workflows, where compound shell commands with pipes, redirects, or chaining operators were incorrectly triggering manual permission prompts.
10. [#4006](https://github.com/github/copilot-cli/issues/4006) MCP `tools/list` pagination not respected | 0 👍, 0 comments
    Spec compliance bug that breaks MCP servers exposing > 1 page of tools, as Copilot CLI only loads the first page of available tools and silently ignores all subsequent paginated results.

## 4. Key PR Progress
No core production-focused pull requests were updated in the 24-hour window. The two open PRs marked as updated are unrelated to Copilot CLI core functionality:
- [#3880](https://github.com/github/copilot-cli/pull/3880): Stray React UI component snippet with no relevance to the CLI codebase
- [#3873](https://github.com/github/copilot-cli/pull/3873): Empty draft PR with no substantive code changes
No active fixes or feature implementation PRs moved through review or merge in this period.

## 5. Feature Request Trends
Across recent updated issues, the most requested feature directions are:
1. Full VS Code parity for custom model endpoint configuration to support local, private, and BYOK model deployments
2. Full MCP protocol compliance, including pagination support, automatic MCP server registration for installed plugins, and duplicate server name warning guardrails
3. Sandbox usability improvements, building on the latest path completion launch to expand the restricted execution feature’s practical utility for developers
4. Non-interactive, scriptable CLI commands (most notably `/init`) to enable Copilot CLI integration into CI/CD and automated devops workflows
5. Expanded extension API capabilities to allow plugins to render dynamic live progress panels in the terminal, rather than only appending static text to the session log

## 6. Developer Pain Points
Recurring high-frequency frustrations reported across the last 24h of issues:
1. Widespread regressions tied to the recent vertical scrollbar rollout, including misaligned text, corrupted copied output, and broken workflow UI
2. Incomplete MCP implementation that breaks spec compliance and core third-party plugin workflows
3. Consistent cross-platform consistency gaps on Windows, where repo hooks, terminal rendering, and skill loaders all exhibit unique failure modes not present on macOS/Linux
4. Buggy BYOK and custom model behavior including silent fallback to non-BYOK models after session resume, and unsupported reasoning effort flags for non-default model endpoints
5. Major accessibility gaps, including no screen reader echo for text typed directly into the Copilot CLI prompt, making the tool unusable for low-vision developer users

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-03
Repository: github.com/MoonshotAI/kimi-cli

---
## 1. Today's Highlights
No new public stable releases were published for Kimi Code CLI in the 24-hour reporting window, while maintainers formally resolved a longstanding Tailscale private network websocket connection bug that affected macOS enterprise users. An unresolved infinite file-reading loop bug impacting custom Anthropic endpoint users on Linux remains the top active community discussion thread with 16 accumulated user comments. A new community-submitted pull request advances a widely requested fix for silent paste failures of image media on Windows terminals and VS Code integrated terminals.

## 2. Releases
No new official Kimi Code CLI releases were issued in the 24-hour period ending 2026-07-03. No pre-release or hotfix builds were announced in the repository over the window.

## 3. Hot Issues
Only 2 total issues received updates in the last 24 hours, both listed below:
1. **[Open Bug: Kimi CLI stuck in repeating infinite file read loop](https://github.com/MoonshotAI/kimi-cli/issues/640)**
   This 6-month-old bug affects users running Kimi CLI v0.76 with custom Anthropic endpoints configured via `config.toml` on Linux systems. The 16 accumulated comments show community users are actively sharing edge-case workarounds for problematic file types while waiting for an official root-cause patch, making this the highest-engagement active open bug in the repository right now.
2. **[Closed Bug: Kimi websocket connection error when using Tailscale](https://github.com/MoonshotAI/kimi-cli/issues/1111)**
   This 5-month-old macOS-specific bug affecting Kimi Code CLI v1.12.0 users running on Tailscale private mesh networks was fully resolved in the last 24 hours via a merged edge routing patch, with the original issue reporter confirming full functionality is restored in their closing update.

## 4. Key PR Progress
Only 1 pull request received updates in the 24-hour reporting window:
1. **[Open Fix: Read clipboard media on BracketedPaste for Windows terminals](https://github.com/MoonshotAI/kimi-cli/pull/2481)**
   Submitted by community contributor redjade75723, this PR addresses a well-documented quality-of-life pain point where Ctrl+V pastes of binary image content in Windows Terminal and VS Code’s Windows integrated terminal fail silently. The fix modifies the `_handle_bracketed_paste()` handler to fall back to native system clipboard access for media content when text-only bracketed paste events are detected, eliminating the need for users to manually input local file paths to attach screenshots or diagrams to Kimi CLI prompts.

## 5. Feature Request Trends
Derived from recently updated issues and pending community contributions, the three top requested feature directions for the Kimi Code CLI community are:
1. Expanded robustness and first-class support for third-party custom LLM endpoints (Anthropic, open-source local model backends) beyond the default Moonshot model stack
2. Explicit, out-of-the-box compatibility for private mesh/VPN environments including Tailscale and ZeroTier, to eliminate manual websocket proxy configuration for enterprise teams
3. Cross-platform native rich media paste support across all major terminal emulators, no manual file path entry required

## 6. Developer Pain Points
Three recurring high-frequency developer frustrations are visible in the latest repository activity:
1. Users running non-Moonshot custom endpoints frequently encounter untested edge-case behavior (such as the infinite file read loop) that is not caught in default core team testing workflows
2. Cross-platform terminal input inconsistencies on Windows break core paste workflows, adding unnecessary friction for developers who paste visual assets directly into their Kimi CLI chat sessions
3. Private network enterprise users face unhandled websocket errors with no official troubleshooting documentation, requiring them to find informal workarounds shared by other community members

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-03
---
## 1. Today's Highlights
The highest-engagement community feature request to adjust OpenCode Go subscription usage limits following DeepSeek V4 Pro's announced 75% permanent price reduction was formally closed this 24-hour window, confirming the team is prioritizing updated tier pricing for paid users. The engineering team published 7 structured V2 core tracking issues from their recent Discord "gang-grill" event to define deterministic session event schemas and execution lifecycle standards for the upcoming 2.0 release. New pull requests for xAI Grok prompt cache optimization were also merged to cut latency and API costs for users on xAI models. No new public releases were published in the last 24 hours.
---
## 2. Releases
No new official releases were rolled out in the 24-hour reporting window.
---
## 3. Hot Issues
1. **[#28846 CLOSED](https://github.com/anomalyco/opencode/issues/28846): Adjust Go usage limits post DeepSeek V4 Pro 75% price reduction** | 90 comments, 82 👍: The most widely discussed community request signals official confirmation that the paid Go tier will be updated to reflect the recent DeepSeek pricing drop, a move that will materially improve value for thousands of paid subscribers.
2. **[#8003 OPEN](https://github.com/anomalyco/opencode/issues/8003): VS Code native diff preview integration for OpenCode changes** | 16 comments, 73 👍: Top requested quality-of-life feature eliminates the painful workflow of reviewing hundreds of lines of code changes in the OpenCode TUI, directly aligning with developer preferences to stay in their primary code editor.
3. **[#34884 OPEN](https://github.com/anomalyco/opencode/issues/34884): False provider rate limit errors on Go tier with 0% rolling usage** | 14 comments, 6 👍: Newly reported regression breaks core functionality for paid Go subscribers, even as free Zen model access continues to work normally.
4. **[#10272 CLOSED](https://github.com/anomalyco/opencode/issues/10272): Silent hidden billing calls to Claude Haiku 4.5 for users who selected MiniMax M2.1** | 9 comments, 5 👍: High-severity billing correctness bug that charged users for models they never explicitly selected is now marked closed, confirming a fix has been deployed.
5. **[#31041 OPEN](https://github.com/anomalyco/opencode/issues/31041): Zen API endpoints return 404 on CORS preflight requests** | 8 comments, 2 👍: Routing bug completely blocks all browser-based custom clients from using the OpenCode Zen API, halting development for teams building web-native OpenCode integrations.
6. **[#31972 OPEN](https://github.com/anomalyco/opencode/issues/31972): New layout feature flag breaks Plan/Build mode toggle on Windows 10** | 6 comments, 7 👍: Core workflow break for users testing the upcoming new 1.16.x UI, with both the UI toggle and keyboard shortcut failing to switch modes.
7. **[#33106 OPEN](https://github.com/anomalyco/opencode/issues/33106): Desktop app crashes rendering large session diff summaries** | 3 comments, 1 👍: Severe UX break that causes unresponsive behavior and Electron main process crashes for long-running sessions with hundreds of file changes.
8. **[#34984 OPEN](https://github.com/anomalyco/opencode/issues/34984): AsyncQueue memory leak on abandoned for-await-of iteration** | 2 comments, 0 👍: Low-level core infrastructure bug that causes gradual memory bloat on long-running self-hosted OpenCode deployments.
9. **[#28402 OPEN](https://github.com/anomalyco/opencode/issues/28402): Stripe webhook duplicate deliveries grant unintended free credits** | 1 comment, 0 👍: Idempotency gap in the billing system creates unplanned revenue leakage as Stripe's at-least-once webhook retries generate duplicate payment credit grants.
10. **[#34970 OPEN](https://github.com/anomalyco/opencode/issues/34970): Command-level model/agent routing via metadata** | 2 comments, 0 👍: Enterprise user feature request that enables granular control to route specific code tasks to different models/providers based on task type.
---
## 4. Key PR Progress
1. **[#35031 OPEN](https://github.com/anomalyco/opencode/pull/35031): feat(core): Route xAI models through native Responses runner** | Fixes long-standing UnsupportedApiError for xAI Grok catalog models in the V2 runner, restoring full native xAI functionality for 2.0 pre-release users.
2. **[#35030 OPEN](https://github.com/anomalyco/opencode/pull/35030): fix(opencode): Send xAI prompt cache routing header** | Implements xAI's documented `x-grok-conv-id` routing key to improve prompt cache hit rates across load-balanced xAI servers, cutting end-user latency and token costs.
3. **[#30466 CLOSED](https://github.com/anomalyco/opencode/pull/30466): feat(console): Ingest Stripe webhook events into data lake** | Adds standardized, auditable billing event logging infrastructure that lays groundwork to resolve the duplicate free credit bug #28402.
4. **[#30457 CLOSED](https://github.com/anomalyco/opencode/pull/30457): feat(plugin): Add request-scoped chat.model hook** | New plugin API capability lets extension developers dynamically swap models per individual request, enabling custom multi-model routing workflows requested by enterprise users.
5. **[#30444 CLOSED](https://github.com/anomalyco/opencode/pull/30444): fix(tui): Always show model variant selection dialog** | Resolves a TUI UX gap where users could not select between different model size/optimization variants when choosing a model via the CLI `/models` picker.
6. **[#30441 CLOSED](https://github.com/anomalyco/opencode/pull/30441): fix(app): Avoid O(n²) dedup hang on large diff summaries** | Patches the root cause of #33106, replacing inefficient nested-loop diff deduplication logic with linear-time processing to stop desktop app crashes on large session histories.
7. **[#30397 CLOSED](https://github.com/anomalyco/opencode/pull/30397): fix(opencode): Serialize concurrent auth.json writes** | Prevents corrupted local auth state when multiple OpenCode processes run on the same machine, eliminating random unexplained login failures.
8. **[#30352 CLOSED](https://github.com/anomalyco/opencode/pull/30352): fix(app): Restore build/plan agent picker in v2 layout** | Directly resolves the broken Plan/Build mode toggle bug #31972 for users testing the new 2026 UI refresh.
9. **[#30324 CLOSED](https://github.com/anomalyco/opencode/pull/30324): fix(desktop): Support Bun plugin runtime APIs** | Unlocks high-performance Bun-native plugins for the desktop client, addressing 18 months of community requests to support faster plugin execution.
10. **[#30339 CLOSED](https://github.com/anomalyco/opencode/pull/30339): fix(opencode): Improve free tier limit error CTAs** | Adds context-aware upgrade prompts that correctly suggest targeted next steps (switch provider, switch paid model, or subscribe to Go) based on the exact limit a user has hit.
---
## 5. Feature Request Trends
Three clear high-priority feature directions emerged from the issue backlog this window:
1. Native IDE ecosystem integration, with VS Code diff preview support leading the most widely voted feature requests to reduce context switching for devs working in external editors.
2. 2.0 core infrastructure hardening, with 7 new tracking issues defining deterministic event logging, session replay, and execution lifecycle standards coming out of the recent Discord engineering brainstorm session.
3. Expanded custom integration support, including command-level model routing for enterprise multi-model workflows, and fixes to unblock browser-based custom client development for the Zen API.
---
## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users in this window:
1. Post-update desktop regressions: v1.17.13 desktop clients are reporting unexpected 1GB+ RAM usage, renderer process lag, and uncaught main process "Object has been destroyed" errors that did not exist in prior v1.17.x builds.
2. Core SDK reliability gaps: No deterministic way for SDK developers to detect when an OpenCode agent session has fully finished executing, plus unpatched low-level memory leaks in the AsyncQueue utility that cause bloat on long-running self-hosted instances.
3. API usability inconsistencies: The OpenCode Anthropic provider interprets the `ANTHROPIC_BASE_URL` environment variable differently than official Anthropic SDK and Claude Code conventions, breaking drop-in custom endpoint compatibility.
4. Paid tier reliability gaps: Paid Go subscribers are encountering unexplained false rate limit errors at 0% usage, creating unexpected downtime for users paying for guaranteed capacity.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi (badlogic/pi-mono) Community Digest | 2026-07-03
---
## 1. Today's Highlights
Multiple long-standing high-impact bugs affecting provider streaming, multi-turn tool use, and WSL authentication were resolved yesterday via ongoing codebase-wide refactors, with zero new releases shipped in the past 24 hours. Contributors merged 9 functional patches including a brand new DeepInfra provider, TUI quality-of-life upgrades, and critical data integrity fixes for session storage, while 2 active open PRs preview upcoming SQLite-backed session storage and improved Anthropic edit tool accuracy. The vast majority of recently closed issues address common user pain points reported across the last 3 months of public testing.

## 2. Releases
No new stable, pre-release, or nightly builds of Pi were published in the 24 hour window ending 2026-07-03.

## 3. Hot Issues
Top 10 notable issues from the last 24 hours of activity:
1. **[#4228 Fix OpenAI completions delta handling](https://github.com/earendil-works/pi/issues/4228)** (Closed, 19 comments): A long-open bug where streaming deltas containing mixed reasoning content, regular text, and tool calls were processed incorrectly, breaking output for most OpenAI-compatible reasoning model users. It was fully resolved as part of the ongoing big refactor.
2. **[#4505 400 errors with MiMo models on multi-turn tool use](https://github.com/earendil-works/pi/issues/4505)** (Closed, 12 comments, 4 👍): High-impact bug for Xiaomi MiMo users that blocked any workflow using tool calls on their second turn, the fix is now shipped via refactor.
3. **[#6187 Pi login hangs in WSL after GitHub Copilot auth](https://github.com/earendil-works/pi/issues/6187)** (Closed, 9 comments): A widely reported pain point for WSL users where browser-based device auth would complete successfully, but the local Pi terminal process would never detect the registered state and hang indefinitely.
4. **[#6215 `pi update` fails on v0.80.3 due to missing transitive dependency](https://github.com/earendil-works/pi/issues/6215)** (Closed, 5 comments): A broken release that blocked upgrades for all users on v0.80.3, as the required `@smithy/node-http-handler@^4.9.1` version did not exist on public package registries.
5. **[#4981 Typed extension settings schema API](https://github.com/earendil-works/pi/issues/4981)** (Closed, 4 comments): A highly requested new Extension API endpoint that lets devs register validated, typed settings schemas for their extensions with global/project precedence handling out of the box.
6. **[#6231 Unnecessary auth prompts for local models](https://github.com/earendil-works/pi/issues/6231)** (Closed, 4 comments): Bug that blocked users running fully local self-hosted models (e.g. DeepSeek v4 Flash via DS4 engine) from using Pi without entering an OAuth or API key for remote providers.
7. **[#6262 DS4 local model context overflows not caught by auto-compaction](https://github.com/earendil-works/pi/issues/6262)** (Closed, 3 comments): Users running local DeepSeek instances were still hitting 400 context limit errors even when auto-compaction was enabled, as Pi could not detect the vendor-specific overflow error message format.
8. **[#6235 AWS Bedrock Fable 5 missing prompt caching support](https://github.com/earendil-works/pi/issues/6235)** (Closed, 3 comments, 1 👍): An oversight that left Fable 5 models on Bedrock with caching disabled, leading to unexpected 429 throttling and 2-3x higher inference costs for users.
9. **[#6204 Unavailable `mimo-v2-omni` model listed in catalog](https://github.com/earendil-works/pi/issues/6204)** (Open, 3 comments): All three MiMo regional provider catalogs list `mimo-v2-omni` as an available model, but the underlying Xiaomi endpoints do not support it, leading to confusing 400 errors for users who select it.
10. **[#6265 OpenAI Responses API throws 400 error near context limit](https://github.com/earendil-works/pi/issues/6265)** (Closed, 1 comment): A regression that set `max_output_tokens` to 1 (below OpenAI's 16 minimum) when the session neared the full context window, breaking all long-running sessions using the OpenAI Responses provider.

## 4. Key PR Progress
1. **[#6266 Anthropic strict tool use for edit tool](https://github.com/earendil-works/pi/pull/6266)** (Open): Upcoming patch that reduces Claude's edit tool error rate by ~10% by enabling Anthropic's native strict schema mode for file edits.
2. **[#6264 Fix OpenAI Responses output token clamping](https://github.com/earendil-works/pi/pull/6264)** (Closed): Resolves the v0.80.3 regression that threw 400 errors when `max_output_tokens` fell below 16 near the context limit.
3. **[#6263 Add DeepInfra provider for text and image generation](https://github.com/earendil-works/pi/pull/6263)** (Closed): Full new built-in provider that supports DeepInfra's full catalog of chat models (via OpenAI-compatible API) and image generation endpoints, with auto-generated model listings.
4. **[#6258 Guard against null message content](https://github.com/earendil-works/pi/pull/6258)** (Closed): Patches all unguarded code paths that iterated over potentially null `message.content` values, resolving the 3-month long recurring "content is not iterable" crash that broke every extension in edge cases.
5. **[#6227 SQLite session storage preview](https://github.com/earendil-works/pi/pull/6227)** (Open): New experimental feature behind the `PI_SQLITE_SESSION_STORAGE=1` flag that writes sessions in parallel to the default JSONL store and a SQLite database, enabling much faster full-text searches and session querying.
6. **[#6252 Fix Windows drive root find paths](https://github.com/earendil-works/pi/pull/6252)** (Closed): Resolves broken file search behavior when users run the Pi find tool at the root of a Windows drive, eliminating invalid path formatting bugs.
7. **[#6248 Remove TUI trailing spaces](https://github.com/earendil-works/pi/pull/6248)** (Closed): Stops the Pi TUI from padding every rendered line to full terminal width with trailing spaces, fixing the annoyance of unwanted whitespace when copying output from VS Code's integrated xterm.js terminal.
8. **[#6244 Add TUI sticky bottom layout](https://github.com/earendil-works/pi/pull/6244)** (Closed): New TUI API that pins the user input field, footer, and interactive widgets to the bottom of the screen, so users do not lose access to the prompt when scrolling through long session history.
9. **[#6243 Fix session storage UUID race conditions](https://github.com/earendil-works/pi/pull/6243)** (Closed): Resolves 3 critical data integrity bugs in the session storage layer that could cause corrupted session trees, duplicate entry IDs, and permanently unreadable sessions after concurrent writes.
10. **[#6236 Partial fix for project-level skill settings](https://github.com/earendil-works/pi/pull/6236)** (Closed): Adds support for configuring `--no-skills` and custom skill paths directly in per-repo `.pi/settings.json`, so teams no longer need to pass CLI flags on every launch.

## 5. Feature Request Trends
The top requested feature directions from recent issues are:
1. **Granular configuration controls**: Per-repo skill whitelists/blacklists, configurable tool truncation limits, and `PI_SKILL_PATH` environment variable support for organizations that store custom skills in non-standard locations across different codebases.
2. **Model ecosystem parity**: Updating existing provider catalogs to add newly released models (Claude Sonnet 5, Kimi K2.7) that are already available via underlying cloud/enterprise endpoints, and adding full support for new third-party providers like DeepInfra.
3. **Localization and usability**: Multi-language support for session compaction summaries that auto-adapts to the user's conversational language, plus optimized SQLite session storage for faster history lookups.
4. **TUI accessibility**: Proper native support for Home/End keybindings to jump to scrollback start/end, and correct handling for extended F13-F24 function keys via the Kitty keyboard protocol.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. Unhandled null message content crashes: The "content is not iterable" bug was reported 3 separate times across 3 months before a full fix landed, breaking all extensions for a subset of users running reasoning models.
2. Version upgrade breakages: The recent v0.80.3 release shipped with an invalid transitive dependency version that blocked updates for all users, highlighting gaps in pre-release dependency validation.
3. Provider parity gaps: Newly added models on AWS Bedrock and other third-party providers often ship missing prompt caching flags, leading to unexpected cost spikes and 429 throttling for end users.
4. Local model usability blockers: Self-hosted local model users frequently hit unneeded auth prompts, unrecognized vendor-specific error codes, and missing context overflow detection that are not prioritized against cloud provider feature work.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-03
---
## 1. Today's Highlights
Today’s top updates include the official v0.19.5 stable release and matching 2026-07-02 nightly build, delivering production-grade hardening for daemon-managed CLI channel workers and a web-shell optimization that defers session initialization until the first user prompt to cut idle resource overhead. The engineering team landed multiple critical P0 bug fixes this cycle addressing widely reported pain points including macOS sandbox launch crashes, janky mobile web-shell session switching, and slow CLI one-shot command startup. Active development also advanced on high-demand feature lines: nested configurable-depth sub-agents, native Enterprise WeChat (WeCom) channel support, and a new bundled data visualization skill for the Artifact tool.

## 2. Releases
Two new versions were published in the last 24 hours:
- **v0.19.5 (Stable)**: Includes two core updates from merged PRs: hardened daemon-managed channel worker processes for the CLI, and a web-shell performance optimization that delays session creation until the first user prompt to reduce unused resource consumption.
- **v0.19.4-nightly.20260702.46814e4f1 (Pre-release)**: Incremental nightly build carrying the same v0.19.5 core changes for pre-production validation, based on commit hash 46814e4f1.

## 3. Hot Issues (Top 10 Notable)
All items below are community-reported, updated in the last 24 hours:
1. [#6181 P1] Web-shell mobile session switching jank: A top user experience blocker affecting all mobile `qwen serve` users, caused by unoptimized full transcript re-rendering that leads to multi-second interface freezes when switching sessions. Active triage and fix work is in progress.
2. [#6144 P2] Incorrect context window calculation for self-hosted Qwen3-Coder: Breaks expected context capacity for local large-context model deployments, leading to unintended truncation of long code files and reasoning chains, and already has 1 upvote from affected self-hosted users.
3. [#6199 P1] VSCode companion release CI failure: Blocks the official v0.19.5 VS Code extension launch, triggered by vsce's built-in secret scanning that incorrectly flags a bundled Slack token regex pattern as a malicious secret, halting the entire VSIX packaging workflow.
4. [#6077 P3] False multi-sentence filter for follow-up suggestions: Breaks natural follow-up prompts containing common abbreviations, leading valid single-sentence suggestions to be incorrectly removed from the interactive suggestion menu. Marked as ready for automatic agent fix.
5. [#6195 P2] Missing vision bridge model selection UI in daemon: A usability gap for non-CLI users, as the CLI already supports custom vision model configuration but no equivalent UI exists in the web-shell for users to set and save multimodal preferences.
6. [#5979 P2] 401 auth error after editing model provider config via `/auth`: A widely reported Windows bug where new sessions do not inherit updated API key settings after a user edits configurations via the interactive `/auth` command, requiring full restarts for changes to take effect.
7. [#6175 P2] Broken reasoning display for OpenAI-compatible models: Affects all users running OpenAI-spec models that return streaming `reasoning_content` (such as self-hosted Qwen 3), showing a permanent "Thought for 0s" label and non-streaming reasoning output that breaks real-time visibility of model thinking.
8. [#6214 P2] Garbled shell output on Windows non-UTF8 code pages: Breaks shell command usability for non-English Windows users in Cyrillic, Chinese, and Japanese regions that use legacy system code pages, leading to unreadable tool output.
9. [#6094 P2] QQ bot duplicate message + instruction timing bugs: Remaining unresolved issues from the QQ channel adapter PR review, causing duplicate outgoing messages when `blockStreaming` mode is enabled, and delayed `botOpenId` instruction application that breaks automated QQ group workflows.
10. [#6131 P2] YOLO mode MCP invocation freeze: Completely blocks unattended zero-confirmation YOLO mode users from accessing configured MCP tools, as the MCP permission prompt never surfaces in non-interactive mode leading to total process hang.

## 4. Key PR Progress (Top 10 Important Updates)
1. [#6189] feat(core): Configurable nested sub-agent depth: Implements support for sub-agents to spawn their own child sub-agents up to a user-defined maximum depth (default 5, set to 1 to restore original single-level delegation behavior), enabling far more complex task decomposition for large engineering projects.
2. [#6210] feat(channels): Official WeCom channel adapter: Adds first-class built-in support for Enterprise WeChat custom application workflows, including callback signature verification, message normalization, and full compatibility with the shared channel routing and policy enforcement stack for enterprise internal team deployments.
3. [#6209] feat(web-shell): Vision model selection daemon UI: Delivers the pending UI for issue #6195, adding vision bridge model picker functionality to the web-shell settings panel that matches existing main/fast/voice model selection workflows.
4. [#6188] fix(cli): Bootstrap fast paths: Resolves the slow one-shot command startup issue from #6185, cutting startup overhead for `--version`, `--help`, and MCP help commands by skipping the full interactive CLI initialization graph, reducing invocation latency by ~70% for lightweight commands.
5. [#6172] fix(cli): macOS sandbox profile path resolution: Patches the widely reported v0.19.3 fatal macOS launch error from #6089, resolving `.sb` seatbelt profile files from the bundle root directory instead of the moved `lib/chunks` path to prevent missing file crashes on packaged Apple Silicon installs.
6. [#6183] fix(web-shell): Mobile session switch jank fix: Resolves the P1 mobile lag issue in #6181, memoizing the full message list component and optimizing timeline signature calculation to avoid full transcript re-computation during session switches, eliminating multi-second freezes.
7. [#6217] fix(core): Windows cmd.exe UTF-8 output support: Fixes the garbled shell output bug from #6214 by adding a missing UTF-8 activation prefix for cmd.exe sessions, ensuring correct character rendering across all regional legacy code pages on Windows.
8. [#6198] feat(core): Bundled dataviz skill for Artifact tool: Ships the new design guidance skill requested in #6190, adding chart design heuristics, accessibility palette references, and a local color validator to help the Artifact tool generate production-quality data visualizations automatically.
9. [#6200/#6201] QQ bot security hardening + core fixes: Splits the long-delayed monolithic QQ bot PR #5902 into incremental shippable chunks, adding SSRF protection for gateway URLs, markdown-first message sending logic, and stale message ID cleanup to resolve the issues tracked in #6094.
10. [#6124] feat(scheduler): Opt-in per-tool-call execution timeout: Adds experimental support for global configurable tool execution timeouts via the `QWEN_CODE_TOOL_EXECUTION_TIMEOUT_MS` environment variable, preventing long-running hung tool calls from blocking session processing indefinitely.

## 5. Feature Request Trends
The highest-priority user requested feature directions fall into 3 core categories:
1. **Background automation & shared channel support**: Leading requests include persistent cron/scheduled task support that runs without open interactive sessions, plus new official channel adapters (WeCom, DingTalk proactive send, QQ bot) to enable team shared agent deployments.
2. **Enhanced autonomous agent capabilities**: Users are asking for configurable nested sub-agent spawning limits, automatic retry for transient network errors during MCP capability discovery, and dedicated design guidance skills for the Artifact tool to improve generated output quality.
3. **Cross-UI feature parity**: A large share of requests focus on bringing existing CLI-only features to the web-shell and daemon UI, most notably vision bridge model selection controls for multim

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-07-03
*Source: github.com/Hmbown/DeepSeek-TUI*

---

## 1. Today's Highlights
No new official releases shipped in the last 24 hours, but the team prioritized resolving critical Fleet multi-agent memory exhaustion issues after a user reported a 15.26GB RAM spike during parallel sub-agent workloads, marking the fix as a v0.8.67 release blocker. Maintainers are concurrently landing core UX infrastructure for the planned constitution-first first-run onboarding flow, while executing a planned Rust codebase refactor to split long monolithic TUI modules into focused, testable subcomponents. Multiple community-submitted PRs addressing Windows platform stability, multi-language support, and project context auto-discovery are being reviewed ahead of the next patch release.

## 2. Releases
No new public releases were published in the past 24 hours. The v0.8.67 build is in final pre-release validation, with all high-severity blocking issues closed as of 2026-07-02.

## 3. Hot Issues
1. **#3793: Build guided localized constitution creator (not blank prompt editor) for v0.8.67 setup** | [Hmbown/DeepSeek-TUI#3793](https://github.com/Hmbown/DeepSeek-TUI/issues/3793)
   14 comments, lead maintainer-authored: This is the core UX priority for the v0.8.67 release, defining a language-first guided flow that prevents users from accidentally overriding enforced runtime security controls via custom constitution files, with broad alignment across maintainers on the new design spec.
2. **#1812: Intermittent Windows TUI freeze via crossterm poll** | [Hmbown/DeepSeek-TUI/issues/1812](https://github.com/Hmbown/DeepSeek-TUI/issues/1812)
   10 comments: The highest-reported Windows reliability bug, affecting all v0.8.39+ users on Windows 11. The TUI becomes fully unresponsive to input and screen updates but does not crash, forcing users to terminate the process manually.
3. **#3792: Refactor first-run onboarding to avoid config editor feel** | [Hmbown/DeepSeek-TUI/issues/3792](https://github.com/Hmbown/DeepSeek-TUI/issues/3792)
   7 comments: Addresses documented new-user dropoff, reworking the initial setup flow to center the custom assistant constitution rather than exposing raw config values, as a core part of the v0.8.67 user experience refresh.
4. **#3882: Bound Fleet sub-agent output to prevent TUI memory exhaustion** | [Hmbown/DeepSeek-TUI/issues/3882](https://github.com/Hmbown/DeepSeek-TUI/issues/3882)
   2 comments, now closed: Marked as a release blocker after a user reported 15GB+ memory usage during large Fleet workloads. The fix caps maximum output per sub-agent to prevent OOM crashes even when spawning dozens of parallel workers.
5. **#1607: Add multi-currency support for token cost estimation** | [Hmbown/DeepSeek-TUI/issues/1607](https://github.com/Hmbown/DeepSeek-TUI/issues/1607)
   6 comments: High demand from the large APAC user base to support CNY and other local currency units for token usage tracking, moving beyond the default USD-only cost display.
6. **#2261: TUI crash leaks unfiltered input to PowerShell terminal** | [Hmbown/DeepSeek-TUI/issues/2261](https://github.com/Hmbown/DeepSeek-TUI/issues/2261)
   5 comments: Critical UX/security bug for Windows 10/11 users. If the TUI loses focus mid-conversation, all subsequent user input is directly executed as PowerShell commands, risking unintended system modifications.
7. **#1835: Windows TUI input field deadlocks during Chinese IME composition** | [Hmbown/DeepSeek-TUI/issues/1835](https://github.com/Hmbown/DeepSeek-TUI/issues/1835)
   4 comments, 1 upvote: Top reported bug for Chinese-language Windows users, fully blocking text entry when using Sogou or other standard Chinese input methods.
8. **#2934: Add persistent sidebar sessions panel with auto-resume** | [Hmbown/DeepSeek-TUI/issues/2934](https://github.com/Hmbown/DeepSeek-TUI/issues/2934)
   4 comments: Long-requested power user feature that eliminates the friction of switching between sessions exclusively via the `Ctrl+R` popup or CLI startup flags, for users managing 10+ active conversations.
9. **#3314: Extract 150-field App god object into owned submodules** | [Hmbown/DeepSeek-TUI/issues/3314](https://github.com/Hmbown/DeepSeek-TUI/issues/3314)
   3 comments: Core Rust refactor to untangle the thousands of lines of mixed logic in `app.rs`, significantly reducing contributor friction for new PRs touching core TUI state management.
10. **#3932: Fleet agent tool lacks schema support for per-role model selection** | [Hmbown/DeepSeek-TUI/issues/3932](https://github.com/Hmbown/DeepSeek-TUI/issues/3932)
    2 comments: Prevents the Fleet orchestration layer from routing low-complexity tasks to small, fast models and high-complexity tasks to larger models, blocking full workload optimization for multi-agent deployments.

## 4. Key PR Progress
1. **#3901: Fix Fleet local worker memory usage reporting (salvaged community PR)** | [Hmbown/DeepSeek-TUI/pull/3901](https://github.com/Hmbown/DeepSeek-TUI/pull/3901)
   Merges the previously failed CI community PR #3895, adding per-worker RSS memory sampling for Unix Fleet hosts and surfacing `memory_mb` metrics in worker status to enable proactive OOM prevention.
2. **#3931: Enforce Fleet absolute recursion depth ceiling + widen task ID entropy** | [Hmbown/DeepSeek-TUI/pull/3931](https://github.com/Hmbown/DeepSeek-TUI/pull/3931)
   Two correctness fixes that confirm the global 200-agent admission cap is properly enforced, preventing runaway sub-agent spawning and eliminating rare task ID collisions during heavy Fleet workloads.
3. **#3936: Use unique temp path per sub-agent state write to fix concurrent persist corruption** | [Hmbown/DeepSeek-TUI/pull/3936](https://github.com/Hmbown/DeepSeek-TUI/pull/3936)
   Fixes a race condition where multiple OS threads writing to the same shared sub-agent state JSON file would corrupt persisted conversation and task data.
4. **#3892: Auto-discover `.codewhale/rules/` and `.claude/rules/` directories as project context** | [Hmbown/DeepSeek-TUI/pull/3892](https://github.com/Hmbown/DeepSeek-TUI/pull/3892)
   Community-contributed feature that automatically loads shared team workflow rules at session start, eliminating friction for users migrating from competing LLM CLI tools.
5. **#3902: Fix 5 TUI render/input hot paths** | [Hmbown/DeepSeek-TUI/pull/3902](https://github.com/Hmbown/DeepSeek-TUI/pull/3902)
   Performance optimization patch that resolves duplicate row calculations on the tasks sidebar and other render bottlenecks, cutting frame latency by ~40% during high-activity multi-agent sessions.
6. **#3861: v0.8.67 constitution-first setup core implementation** | [Hmbown/DeepSeek-TUI/pull/3861](https://github.com/Hmbown/DeepSeek-TUI/pull/3861)
   Lands the core v0.8.67 feature that replaces legacy config-form first-run flows with a model-assisted constitution drafting wizard, enforcing strict separation between user-defined assistant rules and unmodifiable runtime security guardrails.
7. **#3789: Add current safety policy display to `/status` output** | [Hmbown/DeepSeek-TUI/pull/3789](https://github.com/Hmbown/DeepSeek-TUI/pull/3789)
   Community PR that displays active sandbox/network permissions (Plan / Auto / Yolo modes) directly in the status view, eliminating user confusion about what runtime operations are allowed.
8. **#3865: Persist sub-agent state to `.codewhale/` instead of legacy `.deepseek/` directory** | [Hmbown

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*