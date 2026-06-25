# AI CLI Tools Community Digest 2026-06-26

> Generated: 2026-06-25 23:18 UTC | Tools covered: 9

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

# 2026-06-26 AI CLI Tools Cross-Tool Comparison Report
## 1. Ecosystem Overview
The global AI CLI tool ecosystem is now entering a phase of post-baseline maturity, as core development teams shift focus from basic code-editing functionality to production-grade reliability, enterprise governance, and standardized interoperability with the emerging Model Context Protocol (MCP). Most actively maintained projects have migrated core execution layers to Rust, eliminating longstanding cross-platform performance bottlenecks that plagued earlier Node.js/Go builds. The ecosystem shows clear segmentation between closed-source commercial offerings targeting generalist developer audiences, open-source self-hosted tools for private and air-gapped deployments, and smaller community-led projects exploring experimental power-user UX paradigms. Across all tools, unplanned token overconsumption, hidden un-audited operations, and inconsistent security guardrails remain the top recurring user pain points.

## 2. Activity Comparison
| Tool Name               | New/Active 24h Issues | New/Updated 24h PRs | Release Status (Past 24h) |
|-------------------------|------------------------|---------------------|---------------------------|
| Claude Code             | 10                     | 2                   | 1 stable release (v2.1.193) |
| OpenAI Codex            | 10                     | 10                  | 3 stable releases + 10 alpha pre-releases |
| Gemini CLI              | 10                     | 10                  | 2 stable releases + 1 preview release |
| GitHub Copilot CLI      | 10                     | 1                   | No new releases |
| Kimi Code CLI           | 2                      | 0                   | No new releases |
| OpenCode                | 10                     | 10+ in progress     | 1 stable release (v1.17.11) |
| Pi                      | 10                     | 10                  | No new stable releases (experimental orchestrator preview published) |
| Qwen Code               | 10                     | 10                  | 1 nightly pre-release (v0.19.2-nightly) |
| DeepSeek TUI (CodeWhale)| 10                     | 16 merged           | 1 official rebrand stable release (v0.8.65) |

## 3. Shared Feature Directions
These cross-cutting requirements appear across the majority of surveyed tool communities:
1. **MCP reliability and usability**: Reported in 8/9 tracked tools. Specific needs include discoverable graphical MCP management UIs, fixes for MCP OAuth auto-refresh failures, resolution of hard limits for >100 concurrent custom MCP tools, and elimination of race conditions that break active MCP calls mid-session.
2. **Transparent configurable token governance**: Documented across Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, and Qwen Code. Users demand real-time usage tracking, per-session spend limits, and automatic waste guardrails to eliminate unplanned token burn from infinite auto-compaction loops, idle background operations, and unconstrained parallel agent runs.
3. **Under-supported hardware compatibility**: Prioritized across all commercial offerings, with explicit fixes for ARM64 Windows, WSL2, Linux Wayland, and low-latency self-hosted deployment use cases.
4. **Enterprise admin controls**: Requested by enterprise users of Copilot, OpenAI Codex, Gemini CLI, and Qwen Code, including centrally enforced org-wide security rules, standardized default model configurations, and compatibility with restricted corporate VPN environments.

## 4. Differentiation Analysis
### Feature Focus Segmentation
1. Commercial enterprise-first tools (Claude Code, OpenAI Codex, GitHub Copilot CLI) prioritize tight native IDE ecosystem integration, out-of-the-box auditable permission guardrails, and native billing sync with parent platform subscriptions to minimize custom configuration requirements for large enterprise rollouts.
2. Open-source self-hosted focused tools (Gemini CLI, Qwen Code, OpenCode) build extensive native support for custom private endpoints, data residency controls, and zero mandatory cloud telemetry.
3. Experimental community projects (Pi, CodeWhale/DeepSeek TUI) prioritize cutting-edge power-user UX paradigms including MMO-style hotbar quick actions, distributed multi-agent orchestration APIs, and fully customizable theming that do not ship in mainstream commercial tools.
### Technical Approach Differences
- Claude Code uses privileged isolated virtualization (Cow VMs) for untrusted agent execution, while OpenAI Codex separates code execution to a standalone dedicated isolated host process to avoid full application crashes. Gemini CLI builds zero-dependency native sandboxing leveraging Gemini 3's pre-trained POSIX fluency to reduce unnecessary agent turns, while CodeWhale is actively migrating its full stack from Node.js to a native Rust runtime to cut memory footprint and eliminate event loop stalls.

## 5. Community Momentum & Maturity
- **Top Tier (Highest Maturity, Largest Engagement)**: OpenAI Codex and Claude Code have the largest active user and contributor bases, with top issues receiving hundreds of concurrent user comments and feedback, and near-daily stable releases addressing high-priority user pain points.
- **High Growth (Rapid Iteration, Strong Momentum)**: Gemini CLI, OpenCode, CodeWhale, and Qwen Code all publish >10 daily PRs, ship regular major feature updates, and show fast growing adoption in their respective target segments (self-hosted users, APAC regional developers, power user builders).
- **Stable Low-Medium Momentum**: GitHub Copilot CLI has no new releases in the tracking window, with bug triage paced to align with the broader GitHub Copilot ecosystem roadmap.
- **Early Stage Low Activity**: Kimi Code CLI recorded zero maintainer activity in the 24h window, with only 2 unresponded user bug reports, and lags far behind peer tools on MCP and core functionality parity.

## 6. Trend Signals
These industry observations provide actionable reference for engineering teams selecting or building AI CLI tooling:
1. MCP interoperability is now a non-negotiable baseline requirement for production AI CLI workflows. Teams selecting tools for custom extended automation use cases should prioritize projects that have fully resolved MCP reliability bugs and support >100 concurrent custom tools.
2. Unplanned token overconsumption is now the top reported pain point across the entire ecosystem, with no single tool providing fully transparent, auditable usage tracking as of this digest. Teams deploying internal AI agents should implement custom wrapper guardrails for idle background operations, real-time usage alerts, and hard spend caps to avoid unplanned budget overruns.
3. The entire ecosystem is converging on Rust as the default core runtime to eliminate Node.js-related memory leaks, startup lag, and cross-platform runtime dependencies, with nearly all active projects planning full or partial Rust rewrites in 2026-2027.
4. Mainstream commercial tools are actively moving away from permissive auto-mode defaults to granular, fully auditable permission controls, a critical consideration for teams running CLI agents on production infrastructure.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-06-26)
---
## 1. Top Skills Ranking
The 7 highest-attention, priority PRs sorted by linked community engagement and referenced high-comment issues are:
1. **PR #1298: fix(skill-creator): run_eval.py always reports 0% recall** | [GitHub Link](https://github.com/anthropics/skills/pull/1298)
   - Functionality: Comprehensive full-stack fix for the broken skill evaluation pipeline, including proper installation of evaluation artifacts as functional skills, Windows stream reading fixes, improved trigger detection, and parallel worker support.
   - Discussion highlights: Addresses the root cause of 10+ independent user reports of the 0% recall bug that renders the official skill description optimization loop useless, directly linked to the top high-attention Issue #556.
   - Status: Open
2. **PR #1323: fix(skill-creator): run_eval trigger detection misses real skill name and bails on first non-Skill tool** | [GitHub Link](https://github.com/anthropics/skills/pull/1323)
   - Functionality: Targeted patch for the run_eval trigger detection logic that incorrectly stops scanning for valid skill invocations when any non-Skill tool is called in a query response.
   - Discussion highlights: Submitted days before the report cutoff (updated 2026-06-25), it resolves a documented gap in earlier 0% recall bug fix attempts.
   - Status: Open
3. **PR #1099: skill-creator: fix run_eval.py crash on Windows when reading from subprocess pipe** | [GitHub Link](https://github.com/anthropics/skills/pull/1099)
   - Functionality: Resolves Windows-specific subprocess pipe read crashes that cause false 100% precision / 0% recall results for all Windows users running the skill evaluation pipeline.
   - Discussion highlights: Part of a group of complementary Windows compatibility patches that together address top pain point Issue #1061.
   - Status: Open
4. **PR #1050: skill-creator: fix Windows subprocess + encoding bugs** | [GitHub Link](https://github.com/anthropics/skills/pull/1050)
   - Functionality: Two 1-line fixes for Windows support, including handling the native `claude.cmd` executable naming convention and default cp1252 encoding on Windows systems.
   - Discussion highlights: No breaking changes for Unix/macOS users, removes the last documented Windows blockers for running the full skill creation workflow natively.
   - Status: Open
5. **PR #83: Add skill-quality-analyzer and skill-security-analyzer to marketplace** | [GitHub Link](https://github.com/anthropics/skills/pull/83)
   - Functionality: Adds two meta-skills that audit community-created Claude Code Skills across structure, documentation, security, and compliance dimensions.
   - Discussion highlights: Directly mitigates the top security pain point outlined in Issue #492 about unvetted community skills impersonating official Anthropic skills.
   - Status: Open
6. **PR #723: feat: add testing-patterns skill** | [GitHub Link](https://github.com/anthropics/skills/pull/723)
   - Functionality: A comprehensive professional development skill that codifies best practices for the full software testing stack, from unit testing to React component testing to end-to-end testing.
   - Discussion highlights: One of the most requested new functional skills from developer users, filling a large gap in the existing skill ecosystem for production software development workflows.
   - Status: Open
7. **PR #514: Add document-typography skill: typographic quality control for generated documents** | [GitHub Link](https://github.com/anthropics/skills/pull/514)
   - Functionality: Detects and fixes common typographic defects in AI-generated documents, including orphan word wraps, stranded section headers, and list numbering misalignment.
   - Discussion highlights: Identified as relevant for 92% of users generating professional client-facing documents with Claude Code per community feedback.
   - Status: Open
---
## 2. Community Demand Trends
Analysis of top 15 high-comment issues identifies 4 core high-priority demand segments:
1. **Core Skill Tooling Reliability**: Over 30% of top community issues relate to broken skill-creator evaluation pipelines, cross-platform Windows compatibility gaps, and silent YAML parsing failures that block skill development for all contributors.
2. **Enterprise Skill Management**: Leading high-vote requests include org-wide private skill sharing within Claude.ai teams, support for running Skills on AWS Bedrock, SharePoint Online document access control guardrails, and exposure of Skills as standard Model Context Protocol (MCP) resources.
3. **New Professional Workflow Skills**: Most popular proposed new skill directions are persistent cross-conversation agent memory systems, AI agent governance and safety patterns, full-stack web app one-click deployment, and SAP business data predictive analytics.
4. **Ecosystem Quality Control**: Top demand for fixing long-standing quality issues including duplicate installed skills from overlapping plugin packages, unvetted community skills impersonating official Anthropic skills, and 404 errors loading skills for enterprise team users.
---
## 3. High-Potential Pending Skills (Imminent Merge Candidates)
These actively updated, well-reviewed PRs address high-user pain points and are likely to land in the main repository in the next 2 weeks:
1. [PR #1323](https://github.com/anthropics/skills/pull/1323) (latest run_eval trigger detection fix) is the final missing patch to fully resolve the widespread 0% recall bug that has been blocking all skill optimization for 3+ months.
2. Complementary YAML validation PRs [PR #539](https://github.com/anthropics/skills/pull/539) and [PR #361](https://github.com/anthropics/skills/pull/361) detect unquoted YAML special characters in skill descriptions before parsing, eliminating a very common source of silent skill installation failures for new contributors.
3. [PR #541](https://github.com/anthropics/skills/pull/541) fixes a widely reported DOCX skill bug that corrupts documents when adding tracked changes to files with existing bookmarks, a top complaint of legal and corporate document users.
4. [PR #360](https://github.com/anthropics/skills/pull/360) (AppDeploy skill) enables one-click public deployment of full-stack web apps directly from Claude Code, filling a major gap in end-to-end developer workflows.
5. [PR #147](https://github.com/anthropics/skills/pull/147) (codebase-inventory-audit skill) provides a 10-step workflow to clean up orphaned code, unused files, and documentation gaps in existing codebases, requested by hundreds of developer users in community forums.
---
## 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is to first resolve the broken core Skill creation, evaluation, and cross-platform toolchain to make skill development reliable for all users, before expanding to production-grade meta-security, enterprise

---

# Claude Code Community Digest | 2026-06-26
---
## 1. Today's Highlights
This digest centers on the newly released v2.1.193 build, which adds expanded auto-mode shell command classification and transparent permission denial tracking for improved user control over CLI execution flows. Maintainers rolled out a widely requested policy update extending stale issue auto-close windows from 14 to 90 days, giving community contributors far more time to respond to long-tail bug reports and feature requests. Multiple post-release regressions tied to v2.1.193 were filed overnight across macOS and Windows platforms, with active community triage already underway.
---
## 2. Releases
### v2.1.193 (rolled out in last 24 hours)
Key confirmed changes:
- Added `autoMode.classifyAllShell` setting that routes 100% of Bash/PowerShell commands through the auto-mode classifier, instead of only flagging pre-defined arbitrary-code-execution patterns
- Exposed auto-mode denial root causes directly in the session transcript, permission block toasts, and the `/permissions` recent denials view for full user transparency on blocked operations
---
## 3. Hot Issues (Top 10 Noteworthy)
1. **[ARM64 Windows Cowork VM boot failure](https://github.com/anthropics/claude-code/issues/39636)** | Open, 29 comments, 9 👍. High-impact bug blocks core Cowork virtualization functionality for users running latest Snapdragon X Plus ARM64 Windows dev hardware, with persistent connection timeouts on every VM launch. Community has shared 6 separate debug repros to help narrow the root cause.
2. **[Windows orphaned Job Object blocks Claude Desktop launch](https://github.com/anthropics/claude-code/issues/53247)** | Open, 6 comments, 5 👍. After an unclean Claude Desktop crash, orphaned Silo/Job Object entries prevent the app from re-launching, and previously only a full system reboot would resolve the error. Community users have shared manual task-kill workarounds that avoid restarts.
3. **[Pasted image causes permanent session 400 errors](https://github.com/anthropics/claude-code/issues/54314)** | Closed, 8 comments, 4 👍. Session-breaking bug that left empty non-text blocks in API requests after pasting an image and hitting enter was marked resolved with the v2.1.193 patch.
4. **[Auto-Compact infinite loop burns excess tokens](https://github.com/anthropics/claude-code/issues/51088)** | Closed, 7 comments. Resolved issue caused unconstrained background context compaction runs that would consume thousands of tokens without user input, fully exhausting user API allowances overnight.
5. **[v2.1.193 macOS TUI mouse click regression](https://github.com/anthropics/claude-code/issues/71465)** | Open, 2 comments. Same-day regression post-release breaks core TUI navigation for all macOS Terminal.app users, disabling clickable links and agent selection in the background agent view.
6. **[TaskCreate reminder ignores explicit CLAUDE.md exclusion rules](https://github.com/anthropics/claude-code/issues/60323)** | Open, 3 comments, 5 👍. The system-level TaskCreate usage nag fires even when users explicitly add "Do NOT use TaskCreate" to their project CLAUDE.md config, creating unwanted noise for custom workflows that avoid task tracking tools.
7. **[Auto-mode false positive blocks read-only nftables audit](https://github.com/anthropics/claude-code/issues/71463)** | Open, 2 comments. The new full-shell classification feature incorrectly flags safe, read-only firewall hardening audit operations as unsafe code execution, breaking workflows for security engineers using Claude Code for infrastructure validation.
8. **[Fleet mode unexpected excessive token consumption on simple tasks](https://github.com/anthropics/claude-code/issues/71461)** | Open, 1 comment. Users report unconstrained parallel agent runs burning through entire monthly subscription token allowances on low-complexity tasks like small-repo type checking.
9. **[IntelliJ plugin EDT thread regression on macOS](https://github.com/anthropics/claude-code/issues/71455)** | Open, 1 comment. Old known bug re-surfaces in the latest 0.1.14-beta Claude Code JetBrains plugin, causing editor freezes on 2026.2 EAP IntelliJ builds.
10. **[Request for `claude --usage` CLI flag](https://github.com/anthropics/claude-code/issues/53601)** | Closed, 4 comments, 6 👍. One of the most upvoted recent quality-of-life feature requests for direct, real-time CLI token consumption tracking has been marked as resolved in the latest release cycle.
---
## 4. Key PR Progress
Only 2 PRs saw active updates in the 24 hour window:
1. **[Bump stale and autoclose timeouts from 14 to 90 days](https://github.com/anthropics/claude-code/pull/63686)** | Merged/Closed. Maintainers adjusted the issue lifecycle bot rules to prevent popular unresolved bug reports and feature requests from being auto-closed prematurely after 2 weeks of inactivity, tripling the window for community contributors to respond to updates.
2. **[Handle server rate limiting during normal usage](https://github.com/anthropics/claude-code/pull/70634)** | Open, in-progress. This patch adds graceful exponential backoff, explicit user notifications, and safe retry logic for Anthropic API rate limit events, eliminating silent session crashes when usage thresholds are hit during heavy large-repo code audits.
---
## 5. Feature Request Trends
The highest-priority community requested feature directions distilled from recent issues are:
1. Configurable controls to fully suppress recurring TaskCreate/TaskUpdate system reminders, which currently fire repeatedly even when users implement custom workflow tracking via CLAUDE.md or external tools
2. First-class token governance controls, including per-session spend limits, built-in waste guardrails, and expanded usage visibility across CLI and desktop interfaces
3. Customizable organization tools for the background fleet/agent view, with support for user-defined named sublists to group agents by workstream or PR status instead of the current fixed default categories
4. Complete, updated OpenTelemetry documentation including missing event schemas for `claude_code.assistant_response` tracking
---
## 6. Developer Pain Points
Recurring highest-frequency frustrations across the community:
1. Unintended auto-mode false positives: The new all-shell command classification rollout is already blocking safe read-only system administration and security audit operations, creating major friction for DevOps and security engineering use cases.
2. Persistent cross-platform Windows stability gaps: Unresolved issues include orphaned process launch blocks, Snapdragon ARM64 Cowork VM failures, and daily forced re-login prompts for the VS Code extension.
3. Poor token consumption predictability: Multiple separate reports of infinite auto-compact loops, unconstrained fleet mode token burn, and lack of real-time spend visibility are driving widespread user reports of unexpected token overages.
4. Unavoidable post-release regressions: The v2.1.193 launch already has 2 confirmed critical regressions (non-functional macOS TUI mouse clicks, broken RDP clipboard sync for Windows users) that break existing user workflows immediately after update.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-26
---
## 1. Today's Highlights
This 24-hour window brings the stable Rust v0.142.x feature release with cross-platform system proxy support for authentication clients, while the OpenAI engineering team continues rolling out core architecture improvements for MCP stability and isolated code execution. The community is reporting widespread, unacknowledged 10–20x inflated quota consumption across all paid ChatGPT tiers, with dozens of user reports flagging that 5-hour usage limits drain in as little as 40 minutes of normal work. Several high-priority workflow gaps, including the missing `/undo` TUI command, have resurfaced with mass community support.
---
## 2. Releases
All new production and pre-release builds from the last 24 hours:
- **rust-v0.142.1**: Added opt-in Windows system proxy support for Codex authentication, including full PAC, WPAD, static proxy, and bypass rule compatibility.
- **rust-v0.142.2**: Added two key features: MCP tools now use tool search by default for improved discovery (preserving backwards compatibility with older models/providers), and macOS authentication clients respect system proxy/PAC/WPAD settings when `respect_system_proxy` is enabled.
- **codex-zsh-v0.1.0**: First official standalone release of the Codex Zsh shell integration.
- **rust-v0.143.0-alpha.16 through alpha.25**: Pre-release builds for the upcoming 0.143 major feature line, no public changelog published as of press time.
---
## 3. Hot Issues
10 most active community-reported issues sorted by user impact:
1. [[#28879]](https://github.com/openai/codex/issues/28879) 10–20x inflated gpt-5.5 token quota consumption for ChatGPT Plus users (150 comments, 301 👍): The highest-volume active issue, with hundreds of users confirming their 5-hour Codex budget drains in 2–3 prompts after June 16, compared to 20+ prompts previously. Users have shared token telemetry logs proving server-side accounting is overcounting usage.
2. [[#9203]](https://github.com/openai/codex/issues/9203) Request to restore the `/undo` TUI command (50 comments, 296 👍): One of the most highly upvoted open feature requests, with developers noting the missing tool leaves no safety net for accidental deletions or modifications of uncommitted Git files.
3. [[#29955]](https://github.com/openai/codex/issues/29955) Instant 100% quota drain after 1 single message (23 comments): New June 25 report from a Pro tier user confirming all Codex credits are consumed after one short prompt, expanding the pattern of observed quota overcounting.
4. [[#25719]](https://github.com/openai/codex/issues/25719) macOS Codex Desktop triggers syspolicyd/trustd CPU runaway (34 comments, 54 👍): The app repeatedly spawns system trust validation processes that consume 100%+ CPU, leading to system-wide slowdowns and crashes for Apple Silicon users.
5. [[#28978]](https://github.com/openai/codex/issues/28978) Desktop 26.616 build fails all new conversations with "missing field `inputSchema`" error (25 comments): Breaks MCP tool workflows entirely for desktop users, while the same configuration works correctly on Codex CLI.
6. [[#5957]](https://github.com/openai/codex/issues/5957) Context auto-compaction causes GPT-5-Codex to lose task state (30 comments): Enterprise users report the model forgets it is mid-task and discards records of previously edited files, leading to incomplete work.
7. [[#17265]](https://github.com/openai/codex/issues/17265) MCP OAuth tokens are not auto-refreshed even with stored refresh tokens (18 comments, 38 👍): Long-running development sessions break unexpectedly after 1 hour when access tokens expire, with no user-facing warning or automatic recovery.
8. [[#29200]](https://github.com/openai/codex/issues/29200) Windows 26.616 build throws sandbox error dialogs on every `apply_patch` call (16 comments): Users see a spurious `codex-windows-sandbox-setup.exe` popup even when the file edit itself completes successfully.
9. [[#20320]](https://github.com/openai/codex/issues/20320) Stuck phone verification loop (43 comments): New users attempting to upgrade to Pro/Enterprise plans are unable to complete login, as the platform requests a phone verification code that never arrives.
10. [[#30137]](https://github.com/openai/codex/issues/30137) Perceived GPT-5.5 intelligence downgrade (1 comment, fast rising): A Pro tier user reports recent Codex builds have significantly worse reasoning quality, with output performance matching the older GPT-5.3 model, an unconfirmed but rapidly circulating new report.
---
## 4. Key PR Progress
10 highest-impact merged/active PRs from the last 24 hours:
1. [[#30111]](https://github.com/openai/codex/issues/30111) Implement standalone code-mode process host: Adds a dedicated isolated `codex-code-mode-host` stdio service that separates code execution from the core Codex process, with explicit failure supervision for V8 and actor crashes to prevent full app hangs.
2. [[#30101]](https://github.com/openai/codex/issues/30101) Pin MCP runtimes to model steps: Fixes a critical race condition where mid-session MCP server refreshes could replace the active manager while a model step is running, leading to broken tool calls.
3. [[#30000]](https://github.com/openai/codex/issues/30000) Prototype Codex Apps as virtual HTTP MCP servers: Unifies the entire Codex Apps ecosystem with the existing MCP protocol stack, eliminating custom app-specific launch logic for simpler maintenance.
4. [[#30117]](https://github.com/openai/codex/issues/30117) Propagate W3C traces through exec-server HTTP: Fixes distributed observability gaps, preserving full trace context across core → tool → MCP server flows to simplify debugging of broken tool workflows.
5. [[#30131]](https://github.com/openai/codex/issues/30131) Add `thread_history` SQLite schema: Creates a new dedicated local database for paginated storage of session history, eliminating performance lag for users with hundreds of saved Codex projects.
6. [[#30088]](https://github.com/openai/codex/issues/30088) Project executor skills through World State: Makes the model aware of available executor environment skills only when the environment is fully online, avoiding unnecessary full filesystem rescans on every new model step.
7. [[#29683]](https://github.com/openai/codex/issues/29683) Add managed new-thread model settings: Lets workspace admins set persistent default model, reasoning effort, and service tier values for all new user threads, that outrank local config.toml defaults.
8. [[#29375]](https://github.com/openai/codex/issues/29375) Support npm marketplace plugin sources: Resolves a longstanding bug that broke the Codex npm plugin registry integration, letting users discover and install plugins directly from public npm repositories.
9. [[#30135]](https://github.com/openai/codex/issues/30135) Publish versioned standalone bash fork artifacts: Follows the recent codex-zsh v0.1.0 release pattern to ship independently versioned patched shell artifacts, removing the requirement to rebuild modified Bash binaries on every Rust release.
10. [[#29935]](https://github.com/openai/codex/issues/29935) Attribute app-server analytics by thread originator: Fixes broken telemetry that incorrectly attributed Codex Work mobile/web thread activity to the shared desktop app connection, for accurate usage billing and observability.
---
## 5. Feature Request Trends
Community feature priorities are concentrated in four distinct buckets:
1. **Workflow safety guardrails**: Top demand for restoring the removed `/undo` TUI command, adding an option to disable forced automatic app updates, and adding manual approval timeouts that do not auto-cancel pending agent tasks.
2. **Cross-platform remote workflow support**: Users are asking for headless Linux remote host support for Codex mobile, full SSH project sync between connected desktop and mobile hosts, and screen-reader accessible TUI modes for accessibility compliance.
3. **Power user customization**: Demand for configurable Vim insert-mode escape sequences (the popular `jj` shortcut) in the Codex TUI, and expanded third-party plugin support via public npm repositories.
4. **Enterprise admin controls: New requests for managed default model settings across workspaces, and dedicated user instruction hook interfaces for organization-wide custom system prompts.
---
## 6. Developer Pain Points
Recurring high-frequency frustrations observed in this 24-hour window:
1. **Unresolved quota overcounting**: There is no official acknowledgement of the widespread 10–20x Codex quota inflation bug across Plus/Pro/Enterprise tiers, with affected users having no way to manually validate their actual token consumption against server-side accounting.
2. **Cross-platform sandbox regressions**: Multiple post-update bugs affecting Windows and macOS users, including spurious sandbox popup errors on Windows `apply_patch` calls, macOS syspolicyd CPU runaway, and Linux bubblewrap sandbox blocking CUDA `/dev/nvidia*` access for AI execution workloads.
3. **MCP ecosystem instability**: Open bugs for missing input schema validation in new desktop conversations, missing OAuth auto-token refresh, and race conditions on MCP manager restarts are breaking custom tool integrations for a large share of power users.
4. **Context management failures**: Automatic context compaction causes the model to lose track of mid-task state, and `/goal` continuations can reuse stale permission settings even after users update their workspace access rules.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-26
Source: github.com/google-gemini/gemini-cli

---

## 1. Today's Highlights
Three official releases shipped in the last 24 hours, including the stable v0.49.0 build that patches a critical path traversal vulnerability for skill installations. Maintainers merged 7 high-priority security and enterprise usability fixes addressing long-reported pain points around Vertex AI regional routing, MCP resource isolation, and hidden hook execution risks. 12 top-priority agent reliability bugs that have been open for 3+ months were triaged for retesting, signaling upcoming targeted fixes for common subagent hang issues.

## 2. Releases
All builds published in the last 24 hours:
- **v0.49.0 (stable)**: Includes fix for pending tool state and permission trust overrides, plus a dependabot cooldown rule for npm packages to reduce noisy, spurious dependency PRs. [Full release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0)
- **v0.50.0-preview.1**: CI hardening updates to prevent broken release verification, eliminate workspace binary shadowing during release checks, and add new tool registry dependency injection functionality. [Full release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1)
- **v0.49.0-nightly.20260625.gd845bc5d4**: Backports the critical path traversal fix for skill installations to the nightly channel, alongside the pending tools and trust override resolution. [Full release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0-nightly.20260625.gd845bc5d4)

## 3. Hot Issues (Top 10 Notable)
All entries are updated within 24 hours, sorted by community engagement:
1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323): P1 bug, 8 comments, 2 👍. Subagent reports "GOAL success" status even after hitting the MAX_TURNS limit without completing analysis. It breaks agent evaluation workflows and hides incomplete work from end users, and is now marked for retesting.
2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409): P1 bug, 7 comments, 8 👍. The generalist agent hangs indefinitely when triggered, with no timeout. Users currently have to explicitly disable subagent deferral as a workaround, making it the highest-upvoted open agent bug.
3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873): P2 enhancement, 8 comments, 1 👍. A large-scope epic to build zero-dependency OS sandboxing that leverages Gemini 3's native bash fluency, to reduce unnecessary agent turns while maintaining strong security guarantees.
4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353): P1 epic, 7 comments. Tracks expansion of existing component-level behavioral evaluations to cover 76 test cases across 6 supported Gemini model variants, a core requirement to reduce regression risk for future releases.
5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745): P2 feature investigation, 7 comments, 1 👍. An assessment of AST-aware file read, search and codebase mapping functionality that would cut token waste and reduce misaligned partial file read errors during codebase investigation.
6. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166): P1 bug, 4 comments, 3 👍. Shell execution sessions get stuck showing "Awaiting user input" even after the child process has fully exited, breaking routine CLI workflows.
7. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525): P2 security bug, 5 comments. Auto Memory secret redaction currently runs after unredacted transcript content is already loaded into model context, creating risk of sensitive local data being leaked to logs.
8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983): P1 bug, 4 comments, 1 👍. The browser subagent fails to launch completely for users running Linux Wayland sessions, blocking full browser automation functionality for a large subset of desktop Linux users.
9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246): P2 bug, 3 comments. The CLI returns a 400 error when more than 128 tools (from MCP servers and custom skills) are registered, breaking workflows for power users with heavily customized extensibility setups.
10. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522): P2 bug, 5 comments. The Auto Memory feature retries processing low-signal empty sessions indefinitely, wasting background compute and increasing overall CLI latency.

## 4. Key PR Progress (Top 10 Important Changes)
1. [#27979](https://github.com/google-gemini/gemini-cli/pull/27979): Security fix that wraps all `read_mcp_resource` output with the standard `wrapUntrusted()` isolation layer, closing a previously unaddressed gap where MCP server-supplied resource content bypassed sanitization.
2. [#27971](https://github.com/google-gemini/gemini-cli/pull/27971): Fixes thought leakage bug that strips internal model reasoning monologues from scrubbed chat history turns, which previously caused nonsensical output and infinite loops on subsequent requests.
3. [#28147](https://github.com/google-gemini/gemini-cli/pull/27971): CI hardening that runs all integration tests before publishing to NPM, preventing dangling broken preview releases on NPM that lack corresponding GitHub tags.
4. [#28144](https://github.com/google-gemini/gemini-cli/pull/28144): Performance fix that switches editor detection to lazy-loading, eliminating multi-second startup delays on Windows caused by synchronous per-editor executable probing during boot.
5. [#28143](https://github.com/google-gemini/gemini-cli/pull/28143): Critical MCP fix that resolves resources by server ID, preventing cases where two MCP servers exposing resources with identical URIs would return incorrect content even under strict user approval rules.
6. [#28142](https://github.com/google-gemini/gemini-cli/pull/28142): Enterprise usability fix that honors the `GOOGLE_CLOUD_LOCATION` environment variable for API-key authenticated Vertex AI users, stopping unplanned traffic routing to global endpoints.
7. [#28149](https://github.com/google-gemini/gemini-cli/pull/28149): Safety fix that respects `.gitignore` and `.geminiignore` rules when generating a skill's public resource listing, preventing accidentally exposing sensitive ignored files to the model during skill activation.
8. [#28153](https://github.com/google-gemini/gemini-cli/pull/28153): Fix that drops stale `update_topic` tool calls after a user runs `/clear`, preventing orphaned background processes from overwriting session state in a newly cleared chat.
9. [#27915](https://github.com/google-gemini/gemini-cli/pull/27915): Critical security fix that updates the workspace trust dialog to accurately list all hooks that will execute, closing a gap where hidden nested `SessionStart` hooks could run arbitrary shell code without being disclosed to the user.
10. [#28145](https://github.com/google-gemini/gemini-cli/pull/28145): Vertex AI routing update that points default base URLs to official Google representative endpoints for US and EU multi-regions, improving latency and data residency compliance for enterprise users.

## 5. Feature Request Trends
Distilled from recent open issue activity:
1. **Gemini 3 native capability alignment**: Top requested direction is building purpose-built, zero-overhead sandboxed bash execution and AST-aware code tooling to match the model's pre-trained fluency with POSIX tools, cutting unnecessary task turns.
2. **Subagent transparency**: Users want full subagent execution trajectories to be accessible via the `/chat share` command, more granular control over automatic subagent invocation, and native AST codebase mapping built into the codebase investigator subagent.
3. **Auto Memory maturity**: Requests for deterministic secret redaction in Auto Memory workflows, limits on infinite retries for low-signal sessions, and clearer visibility into what transcript content is sent to background memory agents.
4. **Extensibility quality of life**: Power users want automatic browser session lock recovery, dynamic tool scoping to avoid hard 128-tool limits, and symlink support for custom agent definition files.

## 6. Developer Pain Points
Recurring high-frequency unaddressed frustrations:
1. **Agent reliability hangs**: Common reported failure modes include generalist subagent infinite crashes, shell sessions stuck on "Awaiting input", and full browser subagent failure for Wayland Linux users.
2. **Under-documented security gaps**: Users report concerns about unredacted sensitive data in Auto Memory, hidden trust-level hook execution, and previously unpatched path traversal risks during third-party skill installation.
3. **Performance and UI glitches**: Windows-specific multi-second startup delays from eager editor probing, terminal UI flicker on window resize, and terminal buffer corruption after exiting an external editor.
4. **Debugging limitations**: Bug reports generated via the `/bug` command do not include internal subagent context, making it impossible for maintainers to diagnose subagent-specific failures. The model also frequently fails to use installed custom skills and subagents even for explicitly matching tasks.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-26
---
## 1. Today's Highlights
No new official GitHub Copilot CLI releases were published in the 24-hour tracking window, but maintainers closed 6 long-pending bug and feature issues, while top community requests for native model enumeration and MCP (Model Context Protocol) UX improvements received renewed user engagement. Two high-severity unpatched bugs affecting corporate VPN users and Windows WSL2 ARM64 developers gained significant traction, with 11 and 4 upvotes respectively from impacted users, and a single community-contributed PR for repo configuration improvements was submitted.
## 2. Releases
No new Copilot CLI versions were released in the past 24 hours.
## 3. Hot Issues
1. [#700 [OPEN] Feature: Provide a native command to list all supported models with usage multipliers](https://github.com/github/copilot-cli/issues/700) – This 6-month-old top feature request with 14 comments and 4 upvotes was recently updated after a long lull. Users note the lack of visibility into premium request cost multipliers creates unexpected quota overuse, so a `copilot --list-models` subcommand will eliminate guesswork for paid tier users.
2. [#3596 [OPEN] Bug: Resumed sessions throw "Not authenticated" error for `/model` command](https://github.com/github/copilot-cli/issues/3596) – The highest-upvoted active bug this window (11 👍, 7 comments) affecting v1.0.56. Users confirm all other session functionality works normally, but the model picker breaks entirely after resuming a saved session, erasing long-running workflow continuity.
3. [#3501 [OPEN] Bug: New vertical scroll bar breaks text alignment on Windows](https://github.com/github/copilot-cli/issues/3501) – Affecting both Windows Console Host and Windows Terminal, with 9 upvotes and 5 comments. The recent scroll bar feature introduction caused a rendering regression that makes output unreadable, and users report Copilot CLI cannot even self-diagnose the issue to auto-fix it.
4. [#2643 [OPEN] Bug: preToolUse hook silent command rewrite fails to suppress confirmation dialogs](https://github.com/github/copilot-cli/issues/2643) – 12 comments from enterprise plugin developers. This v1.0.24 regression blocks security and governance tooling that needs to silently adjust user commands without interactive prompts, a critical blocker for custom Copilot CLI plugin deployments.
5. [#3636 [OPEN] Bug: Voice mode cannot activate on corporate VPN due to unreachable model catalog](https://github.com/github/copilot-cli/issues/3636) – 5 upvotes from enterprise users. Restricted corporate networks that block external unproxied endpoints prevent voice STT mode from initializing entirely, with no support for offline or on-premises catalog fallbacks.
6. [#2956 [CLOSED] Feature: Add Disable MCP option to `/mcp show` interactive menu](https://github.com/github/copilot-cli/issues/2956) – Resolved this window, with 5 upvotes from users. The fix eliminates low discoverability of MCP server controls, as the previous text-only `mcp disable <name>` command was unknown to most new MCP users.
7. [#3534 [OPEN] Bug: WSL2 ARM64 `/copy` command fails with clip.exe exit code 1](https://github.com/github/copilot-cli/issues/3534) – 4 upvotes from cross-platform developers. The v1.0.55 quoting regression breaks clipboard sync between WSL2 and the host Windows OS, removing a core productivity shortcut.
8. [#3909 [OPEN] Feature: Add enterprise server-managed settings for local Copilot CLI installs](https://github.com/github/copilot-cli/issues/3909) – Actively discussed by org admins. The request fills a major governance gap, as admins currently cannot push standardized security rules or environment variables to local developer Copilot CLI instances, only to GitHub-hosted Codespaces/agent environments.
9. [#3876 [CLOSED] Bug: Mouse tracking is not restored on CLI exit, breaking terminal scrolling](https://github.com/github/copilot-cli/issues/3876) – Recently resolved. Users confirmed the fix eliminates the common post-exit frustration of losing mouse scroll functionality in their parent terminal.
10. [#3935 [OPEN] Bug: v1.0.64+ ignores VSCode terminal custom themes and forces light mode](https://github.com/github/copilot-cli/issues/3935) – Newly filed by multiple users. The unplanned regression breaks accessibility for users with light sensitivity and custom dark/Solarized theme workflows.
## 4. Key PR Progress
Only 1 PR was updated in the 24-hour tracking window, with no maintainer-led changes merged or opened this period:
1. [#3928 [OPEN] Add .gitignore and settings configuration](https://github.com/github/copilot-cli/pull/3928) – Community contribution from new external author tpsaint, adding expanded ignore rules for local development artifacts and standardized repo settings to streamline third-party contribution workflows.
## 5. Feature Request Trends
The highest-priority user feature directions are:
1. Model UX improvements, including a native model listing command, better restricted-network access to model catalogs, and Claude Code parity for keyboard shortcuts related to prompt editing
2. MCP usability upgrades, including discoverable interactive management controls, async execution for read-only MCP commands, and full respect for MCP server initialization instructions
3. Enterprise governance controls for centrally managed, org-enforced configuration for local Copilot CLI instances
4. Fine-grained per-element theming and accessibility controls, beyond the current 3 high-level theme presets
## 6. Developer Pain Points
Recurring high-frequency frustrations across the last 24 hours:
1. Cross-platform regressions in recent v1.0.x releases: Windows rendering bugs, WSL2 ARM64 clipboard breaks, and Linux AppImage LD_LIBRARY_PATH leaks that break underlying git functionality are appearing with unusual frequency
2. Persistent resumed session breakage: Multiple linked bugs confirm resuming a saved session corrupts the model picker's authentication state even as all other core CLI features operate normally
3. Claude Code parity gaps: Users migrating from Claude Code report missing muscle-memory shortcuts for enqueuing prompts and expanding paste tokens in the system editor
4. Low discoverability of non-core slash commands: Many utility actions like disabling MCP servers were previously only accessible via obscure text commands with no interactive menu path for new users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-26
Repository: github.com/MoonshotAI/kimi-cli

---

1. **Today's Highlights**
This 24-hour reporting window includes no new official releases, pull request updates, or maintainer activity on the public Kimi Code CLI repository. All tracked community activity consists of 2 new open bug reports filed by end users running the latest public v0.19.2 build, covering MCP (Model Context Protocol) tool compatibility on Windows and terminal UI rendering instability on Linux. Neither newly submitted issue has received community comments, upvotes, or maintainer responses as of this snapshot.

2. **Releases**
No new Kimi Code CLI versions were published in the 24-hour period ending 2026-06-26. The latest publicly available build remains v0.19.2.

3. **Hot Issues**
Only 2 new issues were filed in the reporting window (fewer than the 10-item typical pool), all submitted issues are listed below:
- [Issue #2475](https://github.com/MoonshotAI/kimi-cli/issues/2475): [Bug] MCP tools not functioning correctly. Submitted by user ptyll, the report notes the failure occurs on Windows systems running Kimi Code v0.19.2 with the K2.7 model, when connected to an MCP server that exposes 212 distinct tools. This issue is high priority as it impacts core extended workflow functionality for users who integrate custom local automation tools via MCP. The issue currently has 0 comments and 0 reactions.
- [Issue #2474](https://github.com/MoonshotAI/kimi-cli/issues/2474): [Bug] Terminal interface jitters and unexpectedly re-renders full conversation history from scratch. Submitted by user yudichimiantiao, this Linux-specific bug affects users running the K2.7 Code Thinking model, disrupting long code editing sessions by breaking UI context visibility and introducing unnecessary rendering latency. The issue currently has 0 comments and 0 reactions.

4. **Key PR Progress**
No pull requests were created, updated, reviewed, or merged in the 24-hour reporting window. There is no active PR development activity to highlight for this cycle.

5. **Feature Request Trends**
No explicit new feature requests were submitted in the latest batch of user issues. The two filed bug reports confirm continued heavy community interest in production-grade MCP tool support as a core use case, with users already testing the limits of the feature with high-volume custom tool servers, indicating strong demand for Kimi Code CLI to position itself as a leading MCP-compatible AI code assistant.

6. **Developer Pain Points**
The two newly reported bugs highlight two recurring stability gaps for the recent v0.19.2 release across platforms:
  - Compatibility failures for non-trivial MCP server setups, where users running large custom tool inventories cannot access their configured tools via the CLI.
  - Unpredictable terminal UI re-rendering behavior on Linux systems, which makes extended code assistant sessions frustrating to use and breaks real-time visibility into ongoing conversation context.
Both pain points remain unacknowledged by the Kimi CLI maintainer team as of this digest snapshot.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-26
---
## 1. Today's Highlights
Today’s top update is the rollout of OpenCode v1.17.11, introducing long-awaited session snapshot and revert controls that let users roll back entire chat states including associated file changes to any earlier point in a conversation. The 100+ comment memory leak megathread remains the highest-activity community discussion, as maintainers crowdsource heap snapshot data to resolve long-standing memory bloat issues. Multiple high-priority fixes for Windows desktop post-upgrade breakages and broken `/compact` context compression are moving through final review to address widespread user pain points.

## 2. Releases
### v1.17.11 (Latest Stable)
Full release details: [anomalyco/opencode/releases/tag/v1.17.11](https://github.com/anomalyco/opencode/releases/tag/v1.17.11)
- Core Improvements: Added full session snapshots and one-click revert controls, enabling users to roll a chat session back to any prior message state including all associated tracked file changes.
- Core Bugfixes: Always surface the MCP OAuth URL directly in terminal output, ensuring manual sign-in flows work even when the automated browser OAuth flow fails to launch.
- Desktop (In-progress): Partial implementation of Chrome-style UI styling for the desktop client, with full details scheduled for a follow-up patch release.

## 3. Hot Issues (Top 10 Notable)
| Issue | Link | Details & Community Reaction |
|-------|------|-------------------------------|
| #20695 Memory Megathread | [anomalyco/opencode#20695](https://github.com/anomalyco/opencode/issues/20695) | Highest-activity thread (103 comments, 74 👍) centralizing all scattered memory leak reports. Maintainers explicitly requested users avoid submitting untested LLM-generated fixes and instead share heap snapshots to debug root causes, with >70 users submitting diagnostic data as of today. |
| #15585 Free model "usage exceeded" false positive | [anomalyco/opencode#15585](https://github.com/anomalyco/opencode/issues/15585) | Closed yesterday after 3 months of user reports: users repeatedly hit artificial free model usage caps with no excess consumption. The misattributed usage tracking bug was resolved in the v1.17.11 release, with 52 community users confirming the fix works. |
| #11409 Native Jupyter (.ipynb) support | [anomalyco/opencode#11409](https://github.com/anomalyco/opencode/issues/11409) | Top-voted open feature request (12 comments, 20 👍): data science and ML engineers note OpenCode's inability to parse, edit, and interact with Jupyter notebooks blocks adoption for AI/ML development workflows. |
| #16610 Startup hang from exhausted inotify instances | [anomalyco/opencode#16610](https://github.com/anomalyco/opencode/issues/16610) | 14 comments from Linux monorepo users: OpenCode hangs completely on startup when it consumes all available system inotify instances scanning .git directories, with users requesting a clear error warning instead of silent failure. |
| #4318 Secrets stored in system credential store | [anomalyco/opencode#4318](https://github.com/anomalyco/opencode/issues/4318) | Closed after 7 months of discussion: the longstanding security issue of auth tokens stored in unencrypted plaintext `auth.json` is now resolved with official integration to OS-native credential managers. |
| #33938 ConfigInvalidError post v1.17.11 desktop upgrade | [anomalyco/opencode#33938](https://github.com/anomalyco/opencode/issues/33938) | Trending new issue: Windows users report empty session sidebars and configuration load failures after upgrading to v1.17.11. Maintainers have identified two distinct root causes and a patch is in active review. |
| #17557 `/compact` command increases token count | [anomalyco/opencode#17557](https://github.com/anomalyco/opencode/issues/17557) | 5 users confirmed the context compression command fails silently, with total context tokens increasing rather than decreasing after execution, breaking long session usability for large codebases. |
| #8145 Multiple Codex OAuth accounts with round-robin load balancing | [anomalyco/opencode#8145](https://github.com/anomalyco/opencode/issues/8145) | High-voted feature (7 comments, 19 👍): power users managing multiple model provider accounts are requesting native support for distributing API traffic across accounts to avoid individual rate limits. |
| #33828 Blank screen on Windows npm install launch | [anomalyco/opencode#33828](https://github.com/anomalyco/opencode/issues/33828) | 6 new Windows users report a completely blank TUI on first launch after installing via `npm install -g opencode-ai`, fully blocking onboarding for first-time users. |
| #33940 Cross-session undo bug | [anomalyco/opencode#33940](https://github.com/anomalyco/opencode/issues/33940) | New regression from the v1.17.11 snapshot feature: running `/undo` in one chat session incorrectly reverts file changes across all other active sessions, classified as a critical high-priority fix. |

## 4. Key PR Progress (Top 10)
| PR | Link | Details |
|----|------|---------|
| #29276 Fix `/compact` for subagent-only configs | [anomalyco/opencode/pull/29276](https://github.com/anomalyco/opencode/pull/29276) | Resolves the silent context compression failure bug that occurred when a user's default agent config points to a custom subagent, directly addressing the widely reported increased token count issue. |
| #33969 Fix TUI compact number formatter rounding overflow | [anomalyco/opencode/pull/33969](https://github.com/anomalyco/opencode/pull/33969) | Corrects the UI display bug where values between 999,950 and 999,999 rendered as `"1000.0K"` instead of being properly formatted as `"1.0M"`. |
| #29237 Add TUI `/disconnect` command for providers | [anomalyco/opencode/pull/29237](https://github.com/anomalyco/opencode/pull/29237) | New user experience feature that lets users remove connected LLM providers directly from the TUI without manually editing config files. |
| #33972 Document provider blacklist/whitelist options | [anomalyco/opencode/pull/33972](https://github.com/anomalyco/opencode/pull/33972) | Adds official documentation for previously undocumented model filtering properties that let users restrict which models appear in the provider picker per custom LLM provider. |
| #32370 Add Linux clipboard selection support | [anomalyco/opencode/pull/32370](https://github.com/anomalyco/opencode/pull/32370) | Implements standard Linux terminal behavior where selected text is automatically copied to the system primary clipboard. |
| #29257 Add code formatters for 5 new languages | [anomalyco/opencode/pull/29257](https://github.com/anomalyco/opencode/pull/29257) | Adds official auto-formatter support for Lua, Swift, Scala, Typst, and C# via industry

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-26
For `github.com/badlogic/pi-mono`
---

## 1. Today's Highlights
The highest-engagement ongoing issue (#4945) for `openai-codex` / GPT-5.5 TUI "Working..." hang bugs remains unresolved with 70 community comments, as the maintainer team shipped 10 total PRs spanning TUI stability, extension compatibility, and core RPC improvements in the last 24 hours. No new production releases were published in this window, though a new experimental `pi-orchestrator` package for multi-agent process lifecycle management was opened for public review. Community discussion also centered on security review of the top-downloaded 203k/month community extension `@hypabolic/pi-hypa` and long-requested improvements to standalone binary distribution.

## 2. Releases
No new official Pi releases were published in the 24-hour reporting window.

## 3. Hot Issues
1. **#4945 [OPEN] openai-codex Connection Reliability Issues** | [Link](https://github.com/earendil-works/pi/issues/4945)
   The highest-engagement issue this window (70 comments, 30 👍) reports repeated TUI hangs on an indefinite "Working..." state with no streamed output, errors, or tool call activity for users running OpenAI GPT-5.5 / Codex. The issue impacts all interactive workflows for users on OpenAI's latest reasoning model, with active ongoing debugging underway.
2. **#5103 [CLOSED] pi-windows-x64.zip build can't detect git-bash from PATH properly** | [Link](https://github.com/earendil-works/pi/issues/5103)
   23 comments, high-impact regression that breaks the built-in bash shell functionality for Windows users downloading the official standalone release, affecting a large subset of new Windows users.
3. **#5671 [CLOSED] ~/.pi and cwd/.pi overlap** | [Link](https://github.com/earendil-works/pi/issues/5671)
   Filed by core lead dev mitsuhiko (6 comments, 5 👍), this issue highlights confusing, non-obvious behavior where global and project-local `.pi` config directories can collide in a user's home path, sparking active discussion about a full restructuring of Pi's config root to eliminate ambiguity.
4. **#5595 [CLOSED] openai-completions maxTokens not passing through** | [Link](https://github.com/earendil-works/pi/issues/5595)
   8 comments, this bug breaks support for popular third-party reasoning models like DeepSeek v4pro, which run out of output tokens mid-task regardless of user-defined `maxTokens` configuration.
5. **#6002 [CLOSED] SessionManager.open() silently truncates non-session files** | [Link](https://github.com/earendil-works/pi/issues/6002)
   Critical data loss bug with 4 comments: pointing `--session <path>` at any non-Pi-session file silently deletes the target file with no warning, backup, or user-facing error. Maintainers have marked this as a high-priority patch.
6. **#5989 [CLOSED] pi update broke extension pi-lovely-codex** | [Link](https://github.com/earendil-works/pi/issues/5989)
   7 comments, reports that a recent core Pi update broke the popular community extension `pi-lovely-codex`, triggering broader discussion about adding formal extension API versioning safeguards to prevent unannounced breaking changes.
7. **#5886 [OPEN] AgentSession settlement/continuation and assistant-tail lifecycle bugs** | [Link](https://github.com/earendil-works/pi/issues/5886)
   Meta-issue filed by mitsuhiko (2 comments, 2 👍) tracking a recurring class of hard-to-reproduce bugs that break resumption of incomplete agent sessions, a longstanding pain point for heavy long-running task users.
8. **#5670 [CLOSED] Tab completion grabs first item after typing to narrow a still-ambiguous menu** | [Link](https://github.com/earendil-works/pi/issues/5670)
   6 comments, a widely annoying UX flaw that disrupts fast keyboard-driven file path autocomplete workflows in the TUI.
9. **#6065 [CLOSED] Single executable binary to avoid dependency on user installed Node version** | [Link](https://github.com/earendil-works/pi/issues/6065)
   High-demand feature request with 3 comments, asking for Pi to be shipped as a self-contained binary with a bundled Node.js runtime, eliminating Node.js version conflicts for users working across multiple project environments with conflicting runtime requirements.
10. **#6052 [CLOSED] Any Flag for @hypabolic/pi-hypa?** | [Link](https://github.com/earendil-works/pi/issues/6052)
    Community security investigation (2 comments) into the top-downloaded Pi package `@hypabolic/pi-hypa` (203k monthly downloads) to validate no malicious behavior, sparking discussions about formal official package scanning and flagging policies.

## 4. Key PR Progress
1. **#6064 [OPEN] feat(experimental): pi orchestrator** | [Link](https://github.com/earendil-works/pi/pull/6064)
   Adds a new experimental `@earendil-works/pi-orchestrator` package that runs a local IPC daemon for lifecycle management of multiple Pi instances, unlocking advanced multi-agent and automated fleet operation use cases.
2. **#6078 [OPEN] feat(coding-agent): add get_entries and get_tree RPC commands** | [Link](https://github.com/earendil-works/pi/pull/6078)
   Implements two requested read-only RPC endpoints that expose full session history and transcript tree structure for external tools driving Pi as a headless backend.
3. **#5270 [CLOSED] Ephemeral session model and thinking level selection** | [Link](https://github.com/earendil-works/pi/pull/5270)
   Changes default behavior: in-session model and thinking level adjustments no longer overwrite global user defaults, preventing unintended persistent configuration changes.
4. **#6081 [CLOSED] feat: add #RRGGBBAA alpha support for theme colors** | [Link](https://github.com/earendil-works/pi/pull/6081)
   Extends Pi's theme system to support 8-digit hex color values with opacity channels, automatically blending alpha values against the terminal background for custom semi-transparent UI styling.
5. **#6084 [CLOSED] fix(tui): preserve custom widget render order on background tick refreshes** | [Link](https://github.com/earendil-works/pi/pull/6084)
   Resolves a bug that caused custom extension TUI widgets to reorder randomly during high-frequency

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-26
---
## 1. Today's Highlights
The latest v0.19.2 pre-release nightly build rolled out yesterday with a critical fix for web fetch JSON response handling, marking near-completion of the upcoming stable v0.19.2 launch. The community is actively addressing two high-severity unpatched bugs: Windows-specific PowerShell process leaks that cause OOM errors, and context compression requests triggering reverse proxy gateway timeouts in self-hosted deployments. Multiple long-requested usability features including native in-app auto-updates, cross-platform voice dictation, and streaming code syntax highlighting are now under active review for merge in coming days.

## 2. Releases
### v0.19.2-nightly.20260625.b2f11b735
The official pre-release build for the v0.19.2 stable line contains the merged fix from PR [#5660](https://github.com/QwenLM/qwen-code/pull/5660) that adds JSON format fallback handling for the web fetch tool, to gracefully process non-standard API response structures during retrieval operations. This release is automatically generated by the Qwen Code CI pipeline for early adopter testing.

## 3. Hot Issues (Top 10)
| Issue | Status | Priority | Details |
|---|---|---|---|
| [#5873](https://github.com/QwenLM/qwen-code/issues/5873) | Open | P1 | Critical Windows bug: Every shell tool invocation spawns a new persistent PowerShell process that never closes, leading to 100% reproduction of OOM crashes after ~15 tool calls. 4 developer comments confirm it breaks core v0.19.2 functionality for all Windows users. |
| [#401](https://github.com/QwenLM/qwen-code/issues/401) | Open | P1 | Long-running reported bug: CLI users hit a hard 6s streaming setup timeout immediately after installation, most frequently seen on low-throughput self-hosted LLM deployments. 10 total comments show users are actively working on custom configuration workarounds. |
| [#5861](https://github.com/QwenLM/qwen-code/issues/5861) | Open | P1 | Non-streaming context compression side queries trigger hard gateway timeouts for enterprise self-hosted users behind reverse proxies, breaking long multi-turn sessions once context size nears window limits. |
| [#5838](https://github.com/QwenLM/qwen-code/issues/5838) | Open | P2 | Feature request for user-configurable agent shell command timeout. 5 community comments note the default timeout kills long-running build and dependency install tasks mid-execution for devs working on large codebases. |
| [#5263](https://github.com/QwenLM/qwen-code/issues/5263) | Closed | P3 | Implemented feature: Adds a confirmation prompt before auto-generated skills are persisted to disk, to avoid cluttering user workflows with one-off skills generated from refactoring operations. |
| [#5867](https://github.com/QwenLM/qwen-code/issues/5867) | Open | P2 | High-demand collaboration feature request: Add a git-shared "team" tier for auto-memory, so context data for shared repos is synced across all team members instead of limited to local private storage. 3 comments show strong interest from enterprise teams. |
| [#5840](https://github.com/QwenLM/qwen-code/issues/5840) | Closed | P2 | New VS Code companion extension users report "Internal connection error" on launch after the latest update. The triage team is collecting debug logs to identify the root cause. |
| [#5759](https://github.com/QwenLM/qwen-code/issues/5875) | Open | P2 | Feature request for configurable number of preview history messages when resuming collapsed sessions. Current implementation hides 100% of past conversation content on resume, making it impossible for users to quickly pick up where they left off on multi-hour tasks. |
| [#5875](https://github.com/QwenLM/qwen-code/issues/5875) | Open | P2 | Usability improvement request: Replace exact prefix match for skill command autocomplete with partial substring search, to reduce navigation friction for users with long custom skill names. |
| [#5641](https://github.com/QwenLM/qwen-code/issues/5641) | Closed | P2 | Bug fixed today: Deterministic LLM providers would re-submit already completed shell tool outputs repeatedly, leading to redundant work and unexpected state errors. |

## 4. Key PR Progress (Top 10)
| PR | Status | Details |
|---|---|---|
| [#5865](https://github.com/QwenLM/qwen-code/pull/5865) | Open | Fixes the P1 context compression gateway timeout bug, adding streaming mode for the context summarization side query to keep HTTP connections alive for 30s+ long inference tasks. |
| [#5780](https://github.com/QwenLM/qwen-code/pull/5780) | Open | Adds native `qwen update` CLI and `/update` in-chat commands with full auto-update support: Standalone installs update in one click, while npm/yarn/pnpm users get guided upgrade flows. |
| [#5856](https://github.com/QwenLM/qwen-code/pull/5856) | Open | Brings full voice dictation functionality to the Qwen Code desktop app, adding a microphone control in the composer toolbar with real-time waveform visualization and parity with existing CLI/Web Shell voice features. |
| [#5738](https://github.com/QwenLM/qwen-code/pull/5738) | Open | Sets virtualized terminal history as the default for new users, eliminating laggy full scrollback redraw for long sessions. Users that prefer native host terminal scroll can opt out via settings. |
| [#5869](https://github.com/QwenLM/qwen-code/pull/5869) | Open | Implements live incremental syntax highlighting for streaming code blocks in the web shell, removing the historic full re-render flicker on every new token that previously broke syntax coloring until the full code block was generated. |
| [#5849](https://github.com/QwenLM/qwen-code/pull/5849) | Open | Adds Codex-style `@extension` mention autocomplete in CLI input: Users get a dropdown of installed extensions with descriptions and badges when typing `@`, no need to memorize full extension names. |
| [#5811](https://github.com/QwenLM/qwen-code/pull/5811) | Closed | Fixes all reported token speed display bugs: The tok/s counter now properly counts reasoning model output, does not disappear during thinking phases, and pauses timing while tools run for accurate real-time metrics. |
| [#5874](https://github.com/QwenLM/qwen-code/pull/5874) | Open | Optimizes `qwen serve` daemon startup by removing redundant spawn of a child process, cutting local API server launch latency by ~30% by loading the CLI logic directly in-process. |
| [#5773](https://github.com/QwenLM/qwen-code/pull/5773) | Open | Adds universal `/config` slash command, letting users modify any setting via dot-path syntax directly in chat input, no requirement to manually edit `settings.json` or navigate nested settings menus. |
| [#3519](https://github.com/QwenLM/qwen-code/pull/3519) | Open | Implements native CLI image attachment support: Users can paste base64 data URLs or drag-and-drop images, with a unified `[Image #N]` placeholder UX for multimodal workflows that eliminates manual copy-paste workarounds. |

## 5. Feature Request Trends
1. **Team collaboration capabilities**: The top requested feature is git-synced shared team auto-memory, to replace current local-only personal and per-project memory for multi-developer teams working on shared codebases.
2. **Self-hosted API observability**: Multiple requests for richer, more granular daemon REST endpoints to query per-session status, active tool state, and pending permissions for custom monitoring integrations.
3. **Cross-client voice feature parity**: Community demand for native voice dictation across all clients (CLI, web shell, desktop, VS Code) alongside user-configurable ASR keyword biasing for project-specific jargon.
4. **Extension developer experience**: Requests for lower barrier to entry for building custom workflows, including bundled extension creation wizards and native @mention support for referencing custom extensions directly in chat input.

## 6. Developer Pain Points
1. **Windows-specific resource leaks**: The newly surfaced unpatched PowerShell process leak is the highest priority blocker for Windows users, who report massive memory bloat after even short work sessions.
2. **Stack-wide hardcoded timeout misconfigurations**: Users consistently complain about inflexible, unconfigurable hard timeouts across streaming setup, agent shell execution, and context compression workflows that break long-running tasks.
3. **Long session performance regressions**: Recurring reports of broken scrollback, clipped final agent responses, and laggy full history redraw that forces users to manually collapse session history to avoid UI hangs.
4. **Locale UX inconsistency**: Chinese users frequently report awkward, non-standard technical terminology in the UI that does not match local developer convention (e.g. incorrect verb choice for tool operation prompts).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-26
---
## 1. Today's Highlights
This digest covers the newly released v0.8.65 rebranded CodeWhale milestone (the canonical successor to the legacy DeepSeek TUI project), alongside near-complete progress on the v0.8.66 flagship MMO-style Hotbar quick action UX. 16 total bug and enhancement PRs were merged in the last 24 hours, resolving critical installation failures, Windows environment variable inheritance gaps, and GLM-5.2 SSE timeout errors that impacted heavy Fleet/sub-agent workloads. All active development trackers have now fully moved to the Hmbown/CodeWhale repository, with the legacy `deepseek-tui` npm package officially deprecated.

## 2. Releases
The v0.8.65 release published in the last 24h marks the official project rebrand:
- The legacy `deepseek-tui` npm package receives no further updates, all users must migrate to the new canonical `codewhale` package
- Legacy v0.8.x users can follow the official [REBRAND.md migration guide](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md) to update their installations
- This release ships foundational shared architecture for the Fleet auto model loadout selector and provider-scoped custom endpoint routing

## 3. Hot Issues (Top 10)
| Status | Title & Link | Context & Significance |
|--------|--------------|-------------------------|
| OPEN | [#3568 Plan/agent mode switching logic remains broken](https://github.com/Hmbown/CodeWhale/issues/3568) | The most upvoted active bug (1 👍): users report the AI frequently fails to recognize manual toggles between plan and agent mode, leading to unexpected file modification attempts in plan-only sessions |
| OPEN | [#3205 Fleet model classes and automatic loadout selector](https://github.com/Hmbown/CodeWhale/issues/3205) | Core v0.8.65 foundational feature, with 10 active maintainer comments: will eliminate manual model string tuning across TUI, CLI, and distributed Fleet worker deployments |
| CLOSED | [#3461 MCP duplicate orphan server instance bug](https://github.com/Hmbown/CodeWhale/issues/3461) | Resolved reliability flaw that wasted ~4MB RAM per MCP entry and caused shared stdio process crashes, a major pain point for users running multiple MCP tools |
| OPEN | [#3541 Rust-based native runtime / desktop client request](https://github.com/Hmbown/CodeWhale/issues/3541) | Top community feature request to replace the current Node.js runtime to cut cold start latency, reduce memory footprint, and eliminate event loop stalls during long-running agent sessions |
| OPEN | [#2300 Multi-model provider documentation and compatibility fixtures](https://github.com/Hmbown/CodeWhale/issues/2300) | User-facing acceptance test suite that will clarify differences between `vllm` and `openai` provider modes for self-hosted local model users, a high-priority ask from the open source AI community |
| CLOSED | [#3582 Install.sh endpoint returns HTML instead of shell script](https://github.com/Hmbown/CodeWhale/issues/3582) | Critical breakage of the official one-line install flow, reported and fixed in under 2 hours, that impacted all new first-time users |
| CLOSED | [#3572 Windows user environment variables not inherited by exec shell](https://github.com/Hmbown/CodeWhale/issues/3572) | Resolved blocker for Windows developer adoption that prevented users from accessing custom build tool paths and credentials set at the user account level |
| CLOSED | [#3545 Custom context window size configuration per provider](https://github.com/Hmbown/CodeWhale/issues/3545) | Implemented popular community feature that lets users manually set context window sizes for third-party endpoints (e.g. Aliyun Qwen series) that advertise smaller context limits than their actual 1M+ token capacity |
| CLOSED | [#3496 Zhipu GLM-5.2 request concurrency throttling](https://github.com/Hmbown/CodeWhale/issues/3496) | Fixed critical reliability issue that caused repeated SSE stream timeouts for users running heavy Fleet sub-agent workloads against Zhipu's GLM-5.2 coding model |
| OPEN | [#2061 Hotbar MMO-style quick action bar umbrella epic](https://github.com/Hmbown/CodeWhale/issues/2061) | Full product tracking umbrella for the v0.8.66 flagship UX feature, with all sub-tasks nearly completed as of this digest |

## 4. Key PR Progress (Top 10)
| Status | Title & Link | Feature / Fix Details |
|--------|--------------|------------------------|
| CLOSED | [#3592 Preserve user-selected mode when editing past turns](https://github.com/Hmbown/CodeWhale/pull/3592) | Fixes the most commonly reported path of the plan/agent mode mixing bug by stopping the `/edit` command from force-resetting to Agent mode after modifications |
| CLOSED | [#3598 Render 8-slot Hotbar sidebar panel](https://github.com/Hmbown/CodeWhale/pull/3598) | Ships the core visual component of the new Hotbar feature, displaying quick action shortcuts at the bottom of the TUI sidebar that render correctly across all valid terminal widths |
| CLOSED | [#3602 Add Hotbar setup wizard](https://github.com/Hmbown/CodeWhale/pull/3602) | Implements the interactive `/hotbar` setup modal that lets users assign, reorder, and configure quick actions via a no-code overlay, eliminating manual TOML editing |
| CLOSED | [#3595 Add Zhipu/GLM default concurrency throttling](https://github.com/Hmbown/CodeWhale/pull/3595) | Adds per-provider `max_concurrency` config setting, with a default cap of 3 in-flight requests for GLM models that eliminates SSE stream timeout errors under concurrent sub-agent load |
| CLOSED | [#3590 Fix install.sh endpoint to return valid shell script](https://github.com/Hmbown/CodeWhale/pull/3590) | Patches web server routing logic to serve the static install script before the Next.js app fallback, fully resolving the broken one-line install flow |
| CLOSED | [#3591 Migrate Rust toolchain to stable channel](https://github.com/Hmbown/CodeWhale/pull/3591) | Replaces the hardcoded pinned 1.88 Rust toolchain lock with the stable release channel, reducing local build friction for Rust developers while keeping a minimum supported Rust version guard at 1.88 |
| OPEN | [#3604 Add centralized Hotbar recommendation engine](https://github.com/Hmbown/CodeWhale/pull/3604) | Introduces a shared engine that surfaces context-aware recommended Hotbar actions to new users during setup, prioritizing high-utility actions and excluding disabled/incompatible entries |
| OPEN | [#3585 Add OpenModel as a first-class provider](https://github.com/Hmbown/CodeWhale/pull/358

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*