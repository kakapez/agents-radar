# AI CLI Tools Community Digest 2026-08-01

> Generated: 2026-07-31 22:59 UTC | Tools covered: 9

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
*Report Date: 2026-08-01*

---

## 1. Ecosystem Overview
As of August 2026, the production AI terminal code assistant ecosystem has reached a state of functional parity for core base capabilities including sandboxed file editing, MCP tool interoperability, and basic multi-agent orchestration, with competitive differentiation now shifting to three high-priority areas: reliability hardening for long-running sessions, enterprise deployment controls, and native support for emerging frontier model APIs. All tracked tools are actively resolving widespread user pain points including cross-platform compatibility gaps, spurious error states, and unplanned token consumption, while expanding extensibility for custom internal developer workflows. Security hardening is a near-universal top priority this cycle, following multiple high-profile reports of data leaks, unauthorized subagent quota burns, and unpatched SSRF vulnerabilities across all major offerings. No single tool has captured a dominant market share, as the segment serves a diverse user base ranging from hobbyist self-hosters to large regulated enterprise engineering teams.

## 2. Activity Comparison
The table below summarizes verified 24-hour activity metrics from each tool’s official community digest:

| Tool Name | Active Updated Issues (24h) | Updated Pull Requests (24h) | 24-Hour Release Activity |
|---|---|---|---|
| Claude Code | 10 | 5 | No new official public releases |
| OpenAI Codex | 10 | 10 | 3 incremental Rust v0.147 alpha pre-releases for early testers |
| Gemini CLI | 10 | 10 | 2 patch releases: `v0.53.1` stable, `v0.54.0-preview.1` |
| GitHub Copilot CLI | 10 | 2 | 1 pre-release: `v1.0.78-0` |
| Kimi Code CLI | 3 | 1 | No new official public releases |
| OpenCode | 10 | 10 | No new public releases; v1.19 minor release in preparation |
| Pi | 10 | 10 | No new official public releases |
| Qwen Code | 10 | 10 | 2 releases: `v0.21.2` stable, `v0.21.1` nightly |
| DeepSeek TUI (CodeWhale) | 10 | 10 | 1 full rebranded stable release: `v0.9.3` |

## 3. Shared Feature Directions
Multiple high-priority user requirements appear across unrelated tool communities, indicating widespread unmet cross-market demand:
1. **Cross-session state persistence and continuity**: Requested by Claude Code (cross-machine CLI-to-CLI session handoff), Kimi Code CLI (persistent cross-session memory system), and Pi (low-overhead SQLite session snapshot loading) to eliminate redundant re-sharing of repo context, coding rules, and past work history for users switching workstations or restarting sessions.
2. **Multi-provider extensibility and emerging API support**: Shared by OpenCode (DeepSeek V4 Flash + native Responses API support), Qwen Code (Anthropic 5.x + OpenAI Responses API compatibility), and Pi (native Baseten + AWS Bedrock Mantle provider integrations) to eliminate vendor lock-in and let users access benchmark-leading new models immediately after public launch.
3. **Enterprise multi-tenant deployment tooling**: Prioritized by GitHub Copilot CLI (centralized org configuration), Qwen Code (single-daemon multi-workspace support), and OpenCode (local LAN mDNS model discovery) to bring feature parity between cloud-hosted AI assistants and on-premises, locally deployed CLI instances for regulated teams.
4. **Token and performance optimization**: Requested across Gemini CLI (AST-native code mapping to reduce context bloat), OpenAI Codex (paginated session history loading), and DeepSeek TUI (shortened system prompt tool descriptions) to cut unnecessary inference costs and latency for long-running multi-step agent workflows.

## 4. Differentiation Analysis
Tools in the segment fall into three distinct groups with divergent strategic priorities:
1. **First-party vendor native tools** (Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, Kimi Code): These offerings are built and maintained by parent LLM vendors, with a primary focus on seamless native compatibility with their respective proprietary model families, minimal user setup, and fast patching for breaking model API changes. They target generalist professional developers looking for zero-friction production AI coding workflows.
2. **Ecosystem-agnostic independent tools** (OpenCode, Pi, CodeWhale): These community-led or independent projects prioritize broad multi-provider support, fully open extension APIs, and transparent telemetry controls, with a target user base of power users, self-hosters, and teams running custom internal model deployments.
3. **Ecosystem-niche tooling**: GitHub Copilot CLI is the only major offering built exclusively for tight native integration with GitHub’s existing developer stack, including its proprietary ACP protocol, Codespaces management plane, and CI/CD workflows, targeting teams already fully embedded in the GitHub developer ecosystem.
Technical approach differences also stand out: OpenAI Codex is undergoing a full Rust core rewrite for performance and security sandbox parity, while Claude Code maintains a Node.js runtime optimized for a large, existing plugin developer ecosystem.

## 5. Community Momentum & Maturity
- **Rapidly iterating, high-activity mature tools**: OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI all recorded 10+ active PR updates alongside full top-10 issue triage cycles in the 24-hour window, indicating large, engaged contributor bases and consistent release velocity.
- **Stable, guarded release cycle tools**: Claude Code and GitHub Copilot CLI have lower 24-hour PR counts (5 and 2 respectively) reflecting a deliberate focus on production stability over new feature velocity, with very large paid installed user bases and formal enterprise support SLAs.
- **Small, focused growing communities**: Kimi Code CLI has a small but active user base with a minimal open bug backlog, prioritizing resolution of high-impact core usability issues before expanding new feature scope.

## 6. Trend Signals
These 2026-08-01 community observations deliver actionable guidance for engineering decision-makers and developers:
1. Core feature parity across the AI CLI segment is now largely complete, so tool selection for most teams will soon be determined by existing ecosystem alignment (compatibility with your current LLM vendor, code host platform, and compliance rules) rather than base functionality.
2. Unregulated subagent busy-waiting that burns full user weekly token quotas with no productive work has emerged as the top unmitigated user risk across multiple platforms; teams should prioritize tools with explicit subagent depth caps, real-time usage telemetry, and hard session termination controls.
3. Extensible custom workflow protocols (MCP, ACP) are the next major competitive battleground, as teams are increasingly investing in building reusable, tailored AI workflows for internal codebases rather than relying on generic off-the-shelf tool capabilities.
4. The shift to hybrid local/cloud inference is accelerating, with widespread user requests for NPU-accelerated execution of trivial coding tasks to cut cloud token consumption and eliminate network round-trip latency.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-01)
---
## 1. Top Skills Ranking
Ranked by cross-referenced linked issue engagement, number of community contributor follow-ups, and update recency (the highest-attention PRs, as raw comment counts were marked undefined in the sourced dataset):
1.  **Skill-Creator Full 0% Recall Fix** ([PR #1298](https://github.com/anthropics/skills/pull/1298)): Patches the broken `run_eval.py` pipeline that was reporting 0% recall for all skill description tests, which made the core skill description optimization loop run against random noise. It also resolves Windows stream reading, trigger detection, and parallel worker bugs, with 10+ independent user reproductions of the underlying bug. Status: Open, stacked with 4 related incremental fix PRs.
2.  **Self-Audit Reasoning Quality Gate Skill** ([PR #1367](https://github.com/anthropics/skills/pull/1367)): A universal, stack-agnostic pre-delivery audit skill that first verifies mechanical file existence, then runs 4-dimensional damage-severity prioritized reasoning checks on all AI output to reduce harmful errors. Status: Open, aligned with a community proposal issue.
3.  **Document-Typography Skill** ([PR #514](https://github.com/anthropics/skills/pull/514)): A widely applicable quality control skill that eliminates common typographic defects in AI-generated documents including orphan line wraps, stranded section header widows, and numbering misalignment. Status: Open, no outstanding conflicts.
4.  **ODT OpenDocument Skill** ([PR #486](https://github.com/anthropics/skills/pull/486)): Adds full support for creating, parsing, converting, and template-filling OpenDocument Format files (.odt, .ods) for LibreOffice and open-standard document workflows. Status: Open.
5.  **Testing-Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723)): A comprehensive testing reference skill that covers the full modern testing stack including testing philosophy, unit testing, React component testing, and end-to-end testing best practices. Status: Open.
6.  **Skill-Quality + Skill-Security Analyzer Meta-Skills** ([PR #83](https://github.com/anthropics/skills/pull/83)): Two governance meta-skills for the official marketplace that evaluate submitted skills across 5 structure, documentation, performance, and security dimensions before public release. Status: Open.
7.  **Color-Expert Skill** ([PR #1302](https://github.com/anthropics/skills/pull/1302)): A specialized creative/design skill with full coverage of all major color naming systems, color space guidance, accessibility checks, and professional color production workflows. Status: Open, last updated 2026-07-21.

## 2. Community Demand Trends
Sorted by issue comment and reaction engagement:
1.  **Trust & Security for Shared Skills**: The highest-engagement open issue ([#492](https://github.com/anthropics/skills/issues/492), 43 comments) calls for namespace controls to block community skills from impersonating official Anthropic offerings and abusing user trust boundaries.
2.  **Enterprise Admin & Workflow Support**: Users are prioritizing org-wide native skill sharing ([#228](https://github.com/anthropics/skills/issues/228), 16 comments), SAP predictive analytics, SharePoint access control, and AWS Bedrock compatibility for regulated corporate environments.
3.  **Mature Skill Development Tooling**: The community is heavily invested in fixing the broken core `run_eval.py` optimization pipeline and full Windows compatibility for skill-creator scripts, to eliminate the 0% recall bug that blocks all custom skill development workflows.
4.  **Agent Output Quality Controls**: Proposals for compact persistent memory notation, agent governance guardrails, and multi-stage adversarial reasoning quality gates are gaining traction to reduce AI hallucination and error rates for long-running sessions.
5.  **Full Document Format Support**: Users are requesting fixes for existing DOCX and PDF skill bugs, plus new support for open standard document formats to avoid file corruption and broken cross-platform workflows.

## 3. High-Potential Pending Skills
Active open PRs with no outstanding merge blockers that are highly likely to land in upcoming releases:
1.  Full stack of Skill-Creator Windows & 0% recall fixes (PRs [1298](https://github.com/anthropics/skills/pull/1298), [1323](https://github.com/anthropics/skills/pull/1323), [1261](https://github.com/anthropics/skills/pull/1261), [1099](https://github.com/anthropics/skills/pull/1099), [1050](https://github.com/anthropics/skills/pull/1050)): These are all small, focused 1-3 line changes that resolve long-standing blocker bugs for the 1000+ users who have reported issues with the skill creation pipeline.
2.  **Plan-File-Hygiene Skill** ([PR #1479](https://github.com/anthropics/skills/pull/1479)): A co-designed community skill that solves the unaddressed lifecycle gap of accumulated stale planning artifacts in active projects, last updated 2026-07-27.
3.  **Pyxel Retro Game Dev Skill** ([PR #525](https://github.com/anthropics/skills/pull/525)): Officially contributed by the upstream Pyxel retro game engine maintainer, no conflicting changes, last updated 2026-07-15.
4.  **CONTRIBUTING.md Documentation** ([PR #509](https://github.com/anthropics/skills/pull/509)): Low-effort high-impact addition that resolves the repo's 25% GitHub community health score gap, and closes a 6-month old open issue.

## 4. Skills Ecosystem Insight
The Claude Code Skills community’s most concentrated demand is first maturing the core skill creation, validation, and trust governance tooling to establish a safe, consistent foundation that supports a scalable library of high-quality domain-specific skills for both individual developers and regulated enterprise use cases.

---

# Claude Code Community Digest | 2026-08-01
---
## 1. Today's Highlights
No new official Claude Code releases shipped in the last 24 hours, but 30 high-engagement community issues received status updates, mostly adding stale labels to older unresolved bug reports, alongside 5 recently modified pull requests focused on CI stability, workflow improvements, and documentation gaps. The highest traction updates include a widely upvoted cross-machine session resume feature request, a confirmed regression in the 2.1.217 desktop engine update that breaks session filtering, and a new critical compatibility bug for users running the macOS 27 beta.

## 2. Releases
No new official Claude Code versions were published in the 24-hour window ending 2026-08-01.

## 3. Hot Issues
Selected 10 high-impact updated issues, sorted by engagement:
1. [#80279](https://github.com/anthropics/claude-code/issues/80279) – Regression in 2.1.217: "Last Activity" filter missing when grouping sessions by Project. 9 comments, 12 👍. This top open regression breaks navigation for power users with large multi-project session libraries, and has been under active discussion since users reported the break after an auto-update.
2. [#31992](https://github.com/anthropics/claude-code/issues/31992) – Feature request: Cross-machine session resume to sync state for CLI-to-CLI handoff. 8 comments, 15 👍. The highest-voted open feature request from developers who split work between home, office, and cloud workstations.
3. [#64029](https://github.com/anthropics/claude-code/issues/64029) – Bug: Claude Desktop MSIX installation fails with HRESULT 0x80073CFF on Windows 11 Pro Build 26200. 5 comments. Blocks users on Windows preview builds from installing the Claude app even after exhausting all documented workarounds.
4. [#65034](https://github.com/anthropics/claude-code/issues/65034) – Critical data loss bug: Claude deletes environment .env files during code operations on macOS. 5 comments. Marked stale after no reproduction was provided, prompting community discussion of improved default file protection guardrails.
5. [#67239](https://github.com/anthropics/claude-code/issues/67239) – Bug: Bash tool results are silently lost, causing agents to hang indefinitely with no timeout. 4 comments. Breaks long-running terminal workflows especially in remote control shared sessions, with no error or debug context for end users.
6. [#74422](https://github.com/anthropics/claude-code/issues/74422) – Bug: Fable 5 safeguards over-flag legitimate defensive security audit workflows. 1 comment. Newly reported false positive that blocks security researchers running authorized vulnerability scans on their own organizational code archives.
7. [#83011](https://github.com/anthropics/claude-code/issues/83011) – Bug: iOS Simulator helper crashes on macOS 27 beta via uncaught Metal CoreImage exception. 1 comment. Brand new report breaking mobile development testing workflows for users on Apple's latest beta OS.
8. [#68910](https://github.com/anthropics/claude-code/issues/68910) – Bug: Bash tool emits false "temp filesystem full / 0MB free" ENOSPC errors despite 148GB of free space. 3 comments, 2 👍. Causes unnecessary token waste and forced re-runs of operations for macOS users.
9. [#63353](https://github.com/anthropics/claude-code/issues/63353) – Long-running bug: Cannot open folders in Claude Desktop on Windows, 7 closed related issues with no fix. 3 comments, 2 👍. Frustrates paying Windows users who have been locked out of core IDE functionality for more than 2 months.
10. [#66079](https://github.com/anthropics/claude-code/issues/66079) – Privacy regression: Git Co-authored-by trailer leaks user's real email even when a noreply address is configured. 3 comments. Harms open source contributors who rely on GitHub noreply addresses to protect their personal contact information.

## 4. Key PR Progress
All 5 PRs updated in the last 24 hours are summarized below:
1. [#17776](https://github.com/anthropics/claude-code/pull/17776) (Closed) – Adds a full README.md for the previously undocumented security-guidance official plugin, outlining 9 built-in security patterns and usage workflows for users running code audits.
2. [#82987](https://github.com/anthropics/claude-code/pull/82987) (Open) – Fixes GitHub Actions cron job failures, excludes stale PRs from automated workflow runs, and includes a proposed architectural fix for TUI input latency degradation under heavy multi-agent workloads.
3. [#82794](https://github.com/anthropics/claude-code/pull/82794) (Open) – Implements long-documented 0-100 confidence scoring for the `code-review` plugin plus a new `--threshold` CLI flag, resolving drift between public documentation and actual binary-only validation behavior.
4. [#39872](https://github.com/anthropics/claude-code/pull/39872) (Open) – Upgrades the project's Node.js runtime from version 20 to 24 to align with upcoming LTS support cutoffs for long-term security and performance improvements.
5. [#82981](https://github.com/anthropics/claude-code/pull/82981) (Open) – Community contributed Spanish-language PR to add pre-built inventory automation workflows for enterprise operational teams using Claude Code on internal supply chain tracking systems.

## 5. Feature Request Trends
Recent updated issues highlight three clear top user priority feature directions:
1. Cross-device continuity: Session state sync and cross-machine session resume for seamless workflow handoffs between CLI and desktop, different OSes, and remote workstations.
2. Adaptive model orchestration: Built-in automatic model selection that routes trivial tasks to lower-cost models (Haiku) and complex engineering work to higher-performance models (Sonnet/Opus) to cut unnecessary spend.
3. Configuration live reloading: Hot-reloading support for project-level `CLAUDE.md` global config files so workflow rules and context instructions update without forcing users to restart active sessions.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in updated issues:
1. Large backlog of critical bugs marked `stale` with no resolution path, including data loss risks for env file deletion, indefinite bash tool hangs, and long-unresolved Windows folder open failures.
2. Persistent Windows platform gaps including broken MSIX installation on preview builds, corrupted session transcript persistence for programmatically spawned sessions, and missing core desktop functionality for paying users.
3. Unacceptable privacy guardrail gaps that leak user emails in Git commit metadata even when users explicitly configure noreply addresses.
4. Extraneous token waste from spurious false error states including fake "temp disk full" ENOSPC messages that cause users to rerun already-completed work.
5. Poor first-class WSL compatibility, including plugins that accidentally execute Windows x86 binaries directly on Linux WSL2 environments instead of native Linux builds.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-08-01
*Source: github.com/openai/codex*

---
## 1. Today's Highlights
This 24-hour digest covers active core engineering work focused on memory leak mitigations, Windows platform stability patches, and MCP ecosystem hardening. Three new Rust-based CLI/app-server alpha pre-releases rolled out for early testers, while community users surfaced critical high-severity issues tied to unregulated subagent polling that burned through full weeks of user token quotas without productive work. Maintainers merged 18+ auto-bot PRs advancing V8 sandbox hardening, long chat session performance, and cross-tool skill interoperability.

## 2. Releases
Three incremental pre-release builds for the Codex Rust rewrite shipped this window:
- `rust-v0.147.0-alpha.4`, `rust-v0.147.0-alpha.3`, `rust-v0.147.0-alpha.1.1`: Unstable early-access builds targeting bug fixes for the upcoming v0.147 stable cycle, focused on MCP routing and performance improvements for CLI and app-server components. No formal public changelog has been published for these incremental alpha releases.
[View full release list](https://github.com/openai/codex/releases)

## 3. Hot Issues (Top 10 Notable)
All links point to GitHub issue pages:
1. [#30408 MCP server processes leak: per-thread processes never cleaned up (9+ GB RSS)](https://github.com/openai/codex/issues/30408): 21 comments, 6 👍. Critical impact for users running multi-day Codex Desktop sessions, orphaned MCP processes bloat system RAM unboundedly, with active community debugging ongoing alongside maintainers.
2. [#30712 Codex desktop app on Windows injects split writable roots, causing `apply_patch` to fail](https://github.com/openai/codex/issues/30712): 16 comments, 13 👍. Breaks the secure sandboxed file editing path for all Windows users, forcing agents to fall back to insecure PowerShell file writes that bypass all security guardrails.
3. [#9615 Codex VS Code Extension becomes all blank (Windows)](https://github.com/openai/codex/issues/9615): 15 comments, 14 👍. Top-voted Papercuts 2026 bug that blocks IDE integration for thousands of Windows developers, open for 7 months with no published root-cause fix to date.
4. [#14144 MCP OAuth reauth succeeds but active session still uses stale refresh token](https://github.com/openai/codex/issues/14144): 11 comments, 13 👍. Breaks third-party MCP integrations (GitHub, Notion, etc.) even after users successfully re-authenticate, requiring a full app restart to resolve the `invalid_grant` error.
5. [#36396 Sub-agent busy-waiting burns a week of quota](https://github.com/openai/codex/issues/36396): Newly filed high-severity report documenting 6,932 empty blocking wait calls that consumed 71% of a user's 11-day token allocation on non-productive status checks.
6. [#36353 Possible incorrect Codex weekly usage accounting on ChatGPT Plus](https://github.com/openai/codex/issues/36353): 6 comments. User reports their full weekly Codex allowance was exhausted in less than 24 hours of light use, prompting community audit of usage tracking logic.
7. [#31864 All GPT-5.6 Sol turns fail because MultiAgentV2 uses reserved collaboration.spawn_agent](https://github.com/openai/codex/issues/31864): 6 comments, 14 👍. Fully breaking bug for multi-agent users on the latest GPT-5.6 Sol model, with no public workaround available as of this update.
8. [#25779 Codex Desktop meta-bug: unbounded session/turn state causes freezes](https://github.com/openai/codex/issues/25779): 13 comments, 8 👍. Long-standing performance bug that degrades UI responsiveness for sessions with 50+ turns, leading to lost active-turn control during long coding tasks.
9. [#36225 Windows unified app 26.721.11231.0 crashes on startup: "Invalid weekday string: MON"](https://github.com/openai/codex/issues/36225): New critical bug that bricks the newly merged ChatGPT/Codex Windows desktop app immediately after update, caused by a localization parsing error.
10. [#19932 Intel macOS: Computer Use unavailable because bundled plugin is missing](https://github.com/openai/codex/issues/19932): 8 comments. Blocks the full Computer Use feature for all x86 Intel Mac users, a large installed base of pro developers yet to upgrade to Apple Silicon hardware.

## 4. Key PR Progress (Top 10)
All links point to GitHub pull request pages:
1. [#36374 Enable sandboxed V8 for code mode](https://github.com/openai/codex/pull/36374): Delivers full Windows code execution sandbox parity with macOS/Linux builds, eliminating a security gap that previously used non-sandboxed V8 prebuilts on Windows.
2. [#36373 Add an `--approve-for-me` CLI flag](https://github.com/openai/codex/pull/36373): New CLI argument that routes all workspace write approvals through automatic review for trusted local workspaces, supporting uninterrupted long batch automation workflows.
3. [#36361 Migrate Cursor-managed skills into Codex](https://github.com/openai/codex/pull/36361): Natively imports all existing community-built skills for the Cursor IDE into Codex, unlocking access to tens of thousands of pre-built open source coding workflows.
4. [#36384 Load turn summaries with paginated queries](https://github.com/openai/codex/pull/36384): Fixes a major performance bottleneck that previously ran separate queries for every turn in chat history, cutting long session summary view load times by ~70% per internal benchmarks.
5. [#36355 Keep MCP tool calls bound to their thread](https://github.com/openai/codex/pull/36355): Eliminates a class of cross-thread MCP routing bugs that incorrectly called the wrong MCP server instance in multi-conversation sessions, resolving hundreds of intermittent reported failures.
6. [#36393 Avoid redundant filesystem probes](https://github.com/openai/codex/pull/36393): Optimizes Codex cold startup speed by removing unnecessary file system checks for daemon sockets and config files, cutting CLI/TUI launch latency for power users.
7. [#36380 Add thread section management APIs](https://github.com/openai/codex/pull/36380): Exposes new public app-server APIs for MCP tools to programmatically create, edit, and delete custom chat thread sections, enabling third-party tools to organize long chat history content.
8. [#36365 Add strict automatic review for MCP elicitations](https://github.com/openai/codex/pull/36365): Adds a standard MCP marker that lets enterprise-administrator trusted MCP connectors request fully automatic approval for pre-vetted operations, eliminating redundant repeated approval prompts.
9. [#36378 Load local session pickers from the state DB first](https://github.com/openai/codex/pull/36378): Cuts session resume picker load time drastically by serving cached metadata from SQLite instead of scanning every session file on disk for workspaces with hundreds of past projects.
10. [#36389 Enforce single-writer ownership for all thread histories](https://github.com/openai/codex/pull/36389): Prevents race condition data corruption from concurrent multi-process edits to the same chat thread, eliminating a rare class of lost chat history user reports.

## 5. Feature Request Trends
Three highest-priority community feature directions surfaced this window:
1. Hybrid local/cloud "Instant" models that leverage Apple/Intel/AMD NPUs to run low-latency trivial coding tasks locally, reducing cloud token consumption and eliminating round-trip latency.
2. Human-readable dynamic sub-agent naming, to replace opaque autogenerated nicknames in multi-agent sessions and let users easily track which worker is assigned to a specific task.
3. Restored easy access to archived chats from the main Codex UI, moving archived conversations out of the deeply buried Settings menu for faster retrieval of old project work.

## 6

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-08-01
Source: github.com/google-gemini/gemini-cli

---
## 1. Today's Highlights
The 2026-08-01 update delivers two critical patched releases for both stable and preview channels, shipping a long-awaited fix to surface actionable error context directly in the CLI UI instead of generic unhelpful failure messages. Maintainers have prioritized fast resolution of high-impact user-reported bugs including 404 failures for the Gemini 3.1 Pro Preview model, an SSRF vulnerability in the web-fetch module, and widespread agent hangs reported across desktop environments. Multiple community-contributed fixes for recent v0.53.0 regressions are now under active review for inclusion in upcoming patch releases.

---
## 2. Releases
Two new patch releases rolled out in the last 24 hours:
- **v0.53.1 (Stable)**: Applies the core fix from PR #28566 that propagates `InvalidStreamError` backend details to the UI, showing users targeted troubleshooting guidance (e.g. recommending the `/compress` command for oversize context) instead of opaque empty error states. Full changelog: https://github.com/google-gemini/gemini-cli/compare/v0.53.0...v0.53.1
- **v0.54.0-preview.1 (Preview Channel)**: The same error propagation patch is cherry-picked to the 0.54 preview line for early testers.

---
## 3. Hot Issues
Top 10 most active updated issues from the last 24h:
1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (12 comments, 👍 2): P1 bug where subagents incorrectly report success after hitting MAX_TURNS limits, hiding interrupted execution and breaking debugging for codebase investigation workflows.
2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (8 comments, 👍 8): Top voted P1 bug causing the generalist agent to hang indefinitely, even for trivial tasks like folder creation. Users report manually disabling subagent deferral as the only workaround.
3. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) (7 comments): Core infrastructure epic to build robust component-level evaluations, tracking expansion of the existing 76 behavioral test suite across all 6 supported Gemini model families.
4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (7 comments): P2 feature epic investigating AST-aware file read and search functionality, projected to reduce unnecessary LLM turns and cut token noise by precisely returning method-level code bounds.
5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) (6 comments): P2 bug where the model almost never automatically invokes user-defined custom skills and sub-agents, requiring explicit user prompts to trigger related workflows.
6. [#28600](https://github.com/google-gemini/gemini-cli/issues/28600) (5 comments): Fresh P2 user-reported bug causing 404 errors when accessing the gemini-3.1pro-preview model, impacting users whose Gemini API keys do not have preview access enabled.
7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (4 comments, 👍 3): P1 core bug where shell execution gets stuck showing "Awaiting user input" even after a fully non-interactive command has already completed.
8. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) (4 comments): P2 security bug requesting deterministic client-side secret redaction for Auto Memory transcripts, eliminating the risk of unredacted sensitive data being sent to the LLM before model-side redaction runs.
9. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (4 comments, 👍 1): P1 bug breaking the browser subagent for all Wayland Linux desktop users, preventing web navigation workflows from running out of the box.
10. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) (3 comments): P2 bug returning 400 errors for users who have more than 128 connected tools, blocking power users running multiple MCP servers simultaneously.

---
## 4. Key PR Progress
10 highest-impact PRs updated in the last 24h:
1. [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) (Closed): Core merged fix that propagates `InvalidStreamError` type and message details to the CLI UI to show users targeted troubleshooting guidance for empty response errors. Shipped in both new patch releases.
2. [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) (Open): Fix for #28600 that adds automatic fallback to stable Gemini models if a preview model returns 404 for API keys that lack preview access, eliminating hard failures for end users.
3. [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) (Open): Fix for macOS sandbox mode startup crashes, falling back to embedded Seatbelt profiles when static .sb assets are missing from runfiles on gMac enterprise environments.
4. [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) (Open): Critical security patch that fixes an SSRF vulnerability in the web-fetch module by using async DNS resolution to validate private host access, blocking attacks targeting local cloud metadata endpoints.
5. [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) (Open): Regression fix for v0.53.0 that preserves `thoughtSignature` metadata when stripping thought parts from function call history, eliminating 400 errors for standard tool call flows.
6. [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) (Open): Fix for MCP OAuth token refresh that uses the stored client ID during refresh flows, stopping forced re-authentication on every MCP session restart.
7. [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) (Open): Fix for infinite authentication loops that correctly awaits async credential save operations before triggering user consent prompts.
8. [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) (Open): Community contributed fix that preserves `thoughtSignature` metadata during parallel tool calls, resolving a separate 400 error regression for multi-tool execution.
9. [#28609](https://github.com/google-gemini/gemini-cli/pull/28609) (Closed): Automated cherry pick PR that applied the core error propagation fix to the v0.54.0-preview release line, building the v0.54.0-preview.1 release.
10. [#28610](https://github.com/google-gemini/gemini-cli/pull/28610) (Closed): Automated cherry pick PR that applied the core error propagation fix to the stable v0.53 release line, building the v0.53.1 stable release despite initial reported merge conflicts.

---
## 5. Feature Request Trends
Across all recently updated issues, the most requested feature directions are:
1. AST-native codebase mapping and tooling to reduce token bloat, cut unnecessary LLM turns, and improve code search accuracy.
2. Browser agent resilience upgrades including automatic locked session recovery and full respect for user-defined settings.json configuration overrides.
3. Expanded debugging and sharing tools, with subagent trajectory visibility via the `/chat share` command and full subagent context included in bug reports.
4. Auto Memory privacy and quality improvements including deterministic client-side secret redaction, elimination of infinite retries for low-signal sessions, and proper handling of invalid memory patches.
5. Agent self-awareness functionality, so the CLI can accurately explain its own hotkeys, CLI flags, and operation mechanics to end users via natural language queries.

---
## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users:
1. Widespread subagent reliability issues including random hangs, false success reporting after MAX_TURNS limits, ignoring user configuration to disable agents by default, and underutilization of custom user-defined skills.
2. Opaque unhelpful error states, with 400/404 model errors previously providing zero troubleshooting context, alongside broken flows like infinite auth loops and shell execution that hangs after a command completes.
3. Data privacy concerns around Auto Memory, where local session transcript data is sent to the LLM for redaction before any secret sanitization is applied.
4. Platform-specific desktop bugs including browser agent failures on Wayland Linux, macOS sandbox mode startup crashes, and terminal flicker/corruption on window resize or after exiting external editors.
5. Hard limits for MCP power users, where the current tool count cap of 128 triggers 400 errors for users running many connected tool servers simultaneously.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-08-01
Source: github.com/github/copilot-cli

---

## 1. Today's Highlights
Today’s activity is anchored by the rollout of the new `v1.0.78-0` pre-release, headlined by the new `/permissions` quick mode switch command and long-awaited ACP session termination support. 7 high-priority regressions from the recent 1.0.7x release line were marked resolved in the last 24 hours, eliminating widely reported broken behavior for plan mode and ACP power users. Enterprise centralized configuration and ACP protocol expansion remain the most active community discussion topics this period.

## 2. Releases
Two releases are documented from the last 48 hours:
- **v1.0.78-0 (Pre-release, last 24h)**
  Added: New `/permissions` top-level command to swap between approval modes instantly; ACP protocol now supports closing sessions via the `closeSession` request.
  Improved: New default-on sandbox setting `allowDevToolCaches` grants sandboxed builds access to local toolchain caches, registries and install directories to eliminate redundant dependency download overhead.
- **v1.0.77 (Stable, 2026-07-30)**
  Changes: Unconditional autopilot approval automatically disables the sandbox for the active session when bypass is permitted; new `Ctrl+G` shortcut opens the user’s default editor to edit freeform `ask_user` inputs without closing the prompt; browser-based web OAuth flow is now the default for `copilot login` to reduce local authentication friction.

## 3. Hot Issues (10 Noteworthy Items)
1. [#4188 [CLOSED] Plan mode shell command blocking regression](https://github.com/github/copilot-cli/issues/4188) | 3 👍: Resolved bug that broke plan mode workflows by blocking CLI tools like `gh` that users relied on to populate enriched context for task plans, one of the most widely reported regressions from the 1.0.7x line.
2. [#4305 [CLOSED] Undefined JS to Rust string conversion error on 1.0.76+](https://github.com/github/copilot-cli/issues/4305) | 4 👍: Fixed breaking bug that threw unhandled errors for almost all user commands after upgrading to 1.0.76 pre-releases.
3. [#4161 [CLOSED] `task_complete` tool missing after switching to autopilot](https://github.com/github/copilot-cli/issues/4161) | 4 👍: Resolved regression that left users stuck in endless autopilot execution loops with no way to properly terminate a session.
4. [#2109 [OPEN] ACP support for `ask_user` extension method](https://github.com/github/copilot-cli/issues/2109) | 6 👍: Top-voted ACP feature request that would let custom ACP clients surface structured clarifying questions to end users, instead of only supporting permission prompts.
5. [#3712 [OPEN] Windows ReFS/Dev Drive sandbox limitation documentation request](https://github.com/github/copilot-cli/issues/3712) | 4 👍: High-priority request from Windows enterprise devs to document an unmarked platform restriction that breaks local sandbox access for users running Dev Drives.
6. [#3909 [OPEN] Org server-managed settings for local Copilot CLI](https://github.com/github/copilot-cli/issues/3909): Enterprise admin blocker that prevents teams from centrally pushing shared environment variables and compliance configurations to local Copilot CLI installs, a capability already supported for cloud Codespaces agents.
7. [#1352 [OPEN] `sessionStart` hook stdout not displayed in terminal UI](https://github.com/github/copilot-cli/issues/1352) | 3 👍: Bug that blocks common team workflow use cases including pre-session compliance reminders, environment checklists, and shared workspace banners.
8. [#4317 [OPEN] Installer ignores explicit version pins and always pulls latest release](https://github.com/github/copilot-cli/issues/4317): Newly reported critical bug that breaks reproducible deployments in Docker and CI environments, forcing users to run unvetted breaking updates.
9. [#4113 [CLOSED] ACP no `session/close` protocol support](https://github.com/github/copilot-cli/issues/4113) | 3 👍: Resolved as part of v1.0.78-0, this bug previously caused orphaned hanging ACP processes that could not be terminated by third-party ACP clients.
10. [#4323 [OPEN] Comments not supported in `.mcp.json` config files](https://github.com/github/copilot-cli/issues/4323): Bug that causes entire shared workspace MCP server configurations to be silently skipped if they include standard documentation comments, making maintainable repo-level MCP setups impossible.

## 4. Key PR Progress
Only 2 PRs received updates in the 24 hour reporting window:
1. [#4316 [OPEN] Add official devcontainer.json definition](https://github.com/github/copilot-cli/pull/4316): Community-contributed PR that adds a reproducible development container setup for the Copilot CLI repository, lowering the barrier for new open source contributors to set up a local build environment.
2. [#3163 [OPEN] CI runner monitor tracker](https://github.com/github/copilot-cli/pull/3163): Long-running stale draft PR referencing older open issues related to repository GitHub action runner monitoring, with no current actionable changes to core Copilot CLI functionality.

## 5. Feature Request Trends
The most requested feature directions from this period’s issue activity are:
1. **ACP Protocol Expansion**: Users are prioritizing extended ACP capabilities beyond base permission prompts, including structured `ask_user` methods, token usage telemetry exposure, and full end-to-end session lifecycle controls.
2. **Enterprise Admin Tooling**: Large regulated teams are requesting parity between local Copilot CLI and cloud Codespaces management tooling, including centrally pushed configs, secrets, and access policies.
3. **Terminal UX Quality of Life**: Top user-facing requests include full keyboard navigation for the session sidebar, scrollable conversation history, and a dedicated pinned sessions section in the nav UI.
4. **Configuration Flexibility**: Community requests include comment support for JSON config files, explicit version pinning for automated deployments, and clear documentation for all platform-specific sandbox restrictions.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported this period:
1. **Recent 1.0.7x Regressions**: Multiple successive releases introduced untested breaking changes to plan mode, autopilot tool availability, and ACP session handling, though most of these issues have now been patched in the latest v1.0.78-0 pre-release.
2. **Silent Failure Edge Cases**: Users repeatedly report hard-to-debug unmarked failures, including skipped MCP servers from minor invalid JSON, orphaned `tool_use` blocks after hard session kills, and blank transcript rendering with no explicit error messaging.
3. **Missing Telemetry for ACP Deployments**: Custom ACP users have no access to token consumption or context usage metrics, making it impossible to meter costs or debug unexpected context window overrun errors.
4. **Broken Reproducible Deployments**: The latest universal installer’s behavior of ignoring explicit version tags blocks stable CI/CD and Docker workflows that depend on pinned Copilot CLI versions to avoid unplanned breakage.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-01
Tracked repo: github.com/MoonshotAI/kimi-cli | 24-hour activity window ending 2026-08-01

---

## 1. Today's Highlights
Over the tracked 24-hour period, the Kimi Code CLI community recorded 3 updated GitHub issues, including the resolution of a long-open message parsing bug for macOS v1.3 users, plus 1 community-contributed pull request targeting pervasive tool call validation failures. The highest engagement ongoing conversation remained centered on a widely requested cross-session persistent memory system, while a recently introduced auto-scroll bug for post-conversation content picked up new upvotes from Linux platform users confirming the broken usability for long code output review.

## 2. Releases
No new official Kimi Code CLI versions were published in the 24-hour tracking window.

## 3. Hot Issues
Fewer than 10 total issues received updates in the tracked cycle, all 3 relevant active/resolved issues are featured below:
1. [#2422] [Bug] After conversation completion, scrolling to view output content auto-jumps to the bottom: https://github.com/MoonshotAI/kimi-cli/issues/2422
   This bug impacts all Linux users running Kimi Code CLI v1.46.0 with the Kimi 2.6 model, and breaks core usability for reviewing multi-page code generation outputs. It has earned 1 community thumbs up and 2 comment confirmations from other affected users reporting identical behavior.
2. [#1283] [Enhancement] Feature request for persistent cross-session memory system: https://github.com/MoonshotAI/kimi-cli/issues/1283
   This 6-month old open enhancement request remains one of the highest engagement feature threads in the repo, with 8 total community comments from users collaborating on requirements for both automatic AI-managed context and explicit user-defined memory storage.
3. [#796] [Closed] LLM provider 400 error for misformatted message at role position 1: https://github.com/MoonshotAI/kimi-cli/issues/796
   This previously unresolved macOS platform bug affecting Kimi CLI v1.3 users running setup flows was formally closed yesterday, with the original issue submitter confirming the merged fix resolves their workflow breaking parsing error.

## 4. Key PR Progress
Only 1 pull request received activity in the tracked cycle, the single high-impact PR is featured below:
1. [#2572] [Fix] Recursively unwrap double-encoded JSON in tool-call arguments: https://github.com/MoonshotAI/kimi-cli/pull/2572
   Authored by external open source contributor aalhadxx, this patch addresses unhandled Pydantic validation crashes for core tool calls including SetTodoList, ExitPlanMode, and StrReplaceFile, which previously failed when the Moonshot API returns nested array/object function parameters as double-encoded JSON strings.

## 5. Feature Request Trends
The clear top requested feature direction from recent community activity is a dual-mode persistent memory system that eliminates redundant context sharing across CLI sessions, supporting both automatically curated AI-managed project pattern notes and user-configurable explicit preference storage. Secondary trending enhancement asks center on UI navigation polish for long-form generation outputs, to support more granular control of chat viewport behavior post-completion.

## 6. Developer Pain Points
Recurring documented frustrations this cycle include: 1) Opaque tool call validation errors triggered by double-encoded JSON parameters, which give no actionable remediation steps for end users and break common file editing workflow tools; 2) Forced auto-scroll on completed chat outputs that blocks review of long code generation snippets, a post-v1.46.0 regression impacting Linux users; 3) No built-in cross-session context persistence that requires users to re-share repo structure, coding style rules, and past work history every time they launch a new Kimi Code CLI instance.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-08-01
*Source: github.com/anomalyco/opencode*

---

## 1. Today's Highlights
Today’s top updates center on a widespread, unresolved upstream authorization outage impacting paid OpenCode Go and Zen subscribers that blocks chat completion endpoints, with over 40 combined user reports filed in the 24-hour window. The community is buzzing around DeepSeek’s July 31 formal launch of DeepSeek V4 Flash, with users asking for immediate native support for the new model’s benchmark-leading agent capabilities (82.7 Terminal Bench score). The engineering team landed a large batch of technical debt reduction PRs alongside critical reliability improvements for long-running SSE streams, ahead of an upcoming minor v1.19 release.

## 2. Releases
No new official OpenCode releases were published in the 24-hour window ending 2026-08-01.

## 3. Hot Issues
1. **[OPEN] OpenCode Go returns 401 blocked error on chat/completions (v1/models works fine)** | 42 comments, 11 👍 | https://github.com/anomalyco/opencode/issues/38257  
   This critical bug breaks core functionality for paid Go subscribers, confirmed to be a server-side upstream routing issue rather than a client configuration error, with users across multiple regions reporting the same failure.
2. **[CLOSED] TUI black screen on versions >1.0.46** | 37 comments, 13 👍 | https://github.com/anomalyco/opencode/issues/4140  
   A long-persisting TUI rendering regression that resurfaced recently requires users to manually kill the unresponsive process to recover, with dozens of users sharing OS-specific workarounds in the thread.
3. **[CLOSED] Full black screen on fresh OpenCode install** | 33 comments, 17 👍 | https://github.com/anomalyco/opencode/issues/10221  
   A first-run break that blocks new users immediately after installation across Windows, macOS and Linux, with multiple overlapping bug reports confirming it is tied to GPU acceleration auto-detection logic.
4. **[OPEN] DeepSeek V4 Flash formal 0731 version availability on OpenCode Go/Zen** | 22 comments, 20 👍 | https://github.com/anomalyco/opencode/issues/39823  
   The highest-upvoted user feature request today, with users eager to access the newly released model’s improved tool calling and software engineering performance.
5. **[OPEN] Unified Plugin/Agent/Skills marketplace** | 6 comments, 23 👍 | https://github.com/anomalyco/opencode/issues/28696  
   A long-running master issue for a community package registry, with strong support from indie agent developers who want a standardized way to distribute custom OpenCode extensions.
6. **[CLOSED] Native text selection support in TUI** | 13 comments, 29 👍 | https://github.com/anomalyco/opencode/issues/927  
   The most upvoted quality-of-life request from the last 12 months, recently marked resolved after users were forced to rely on external terminal hacks to copy prompt outputs.
7. **[OPEN] Restore privacy policy transparency and add telemetry disclosures** | 4 comments, 20 👍 | https://github.com/anomalyco/opencode/issues/39875  
   Go subscribers are pushing the team to revert unannounced silent changes to platform privacy wording, and add clear documentation for data retention practices and telemetry opt-out options.
8. **[OPEN] OpenCode Zen full model outage with 401 blocked error** | 2 comments, 2 👍 | https://github.com/anomalyco/opencode/issues/39827  
   Parallel outage report confirming the upstream authorization break impacts the entire Zen tier as well as Go, ruling out isolated user-side configuration issues.
9. **[OPEN] Native Responses API support for DeepSeek V4 Flash on OpenCode Go** | 4 comments, 10 👍 | https://github.com/anomalyco/opencode/issues/39829  
   Follow-up request for native support of DeepSeek’s new API standard that eliminates common streaming tool call parsing bugs, rather than wrapping it in legacy Chat Completions format.
10. **[OPEN] Abnormal high-frequency billing deductions for Qwen 3.7 Max on Go plan** | 3 comments | https://github.com/anomalyco/opencode/issues/36399  
    Paid users report unprompted auto-generated calls to Qwen 3.7 Max every 30 seconds incurring unplanned costs, with the support team confirming active ticket reviews are ongoing.

## 4. Key PR Progress
1. **refactor(ai): unify prompt cache configuration** | https://github.com/anomalyco/opencode/pull/39965  
   Adds configurable inference caching modes (disabled, automatic with affinity, explicit breakpoint control) across all OpenAI-compatible routes, cutting inference costs by up to 60% for long-running multi-step agent sessions.
2. **fix(opencode): make long-lived provider streams robust to silent SSE terminations** | https://github.com/anomalyco/opencode/pull/39970  
   Fixes three separate defects where gateway stalls or silent SSE connection cuts would break active tool call sessions, eliminating partial output data loss on stream termination.
3. **feat(opencode): local LAN provider discovery + auto-discover models** | https://github.com/anomalyco/opencode/pull/27554  
   Long-awaited feature that scans local networks for self-hosted OpenAI-compatible model servers via mDNS, automatically populating available models in the `/connect` menu, closing two 1+ year old feature requests.
4. **feat(core): per-agent subagent_depth override** | https://github.com/anomalyco/opencode/pull/37226  
   Lets developers set custom maximum subagent nesting levels per custom agent definition in `opencode.json`, instead of relying on the global hardcoded limit, ideal for specialized code review and DevOps agents.
5. **feat(theme): export expandTheme public API** | https://github.com/anomalyco/opencode/pull/39967  
   Exposes the previously internal theme customization API from the public `@opencode-ai/theme/tui` entrypoint, allowing enterprise users to build fully branded custom TUI interfaces.
6. **refactor(core): remove unused core dependencies** | https://github.com/anomalyco/opencode/pull/39973  
   Removes unused `semver` and legacy sqlite dependencies from the core package, reducing total bundle size by ~1.2MB and eliminating unused vulnerability attack surface.
7. **refactor(tui): remove unused stop voice operation** | https://github.com/anomalyco/opencode/pull/39969  
   Cleans up unreachable audio code left in the TUI after the voice call feature was migrated to a separate plugin, reducing unhandled edge case crash risks.
8. **refactor(tui): remove deprecated ignored kv option from TUI attention system** | https://github.com/anomalyco/opencode/pull/39956  
   Deletes a leftover V1 config parameter that was no longer read by any active component, fixing rare silent configuration parsing errors that occurred on version upgrade.
9. **refactor(cli): remove unused CLI warning helper** | https://github.com/anomalyco/opencode/pull/39962  
   Eliminates orphaned rendering code that never executes in production, reducing the CLI binary size and simplifying error handling pathing for new contributors.
10. **refactor(core): remove orphaned V2 MoveSession control plane service** | https://github.com/anomalyco/opencode/pull/39974  
    Deletes a legacy unused service implementation that was replaced by the current TUI session move flow, reducing core test runtime by 12% and eliminating stale test technical debt.

## 5. Feature Request Trends
The most requested feature directions from the community this window are:
1. **Ecosystem extensibility**: Top priority is a unified marketplace for custom agents, skills and plugins, followed by support for authenticated private GitHub repo references in `opencode.json` instructions for enterprise teams.
2. **Cutting-edge model parity**: Users are pushing for immediate full support for the newly released DeepSeek V4 Flash and its native OpenAI Responses API compatibility, to leverage the model’s improved agent performance and avoid tool call parsing bugs.
3. **Session

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-08-01
*Source: github.com/badlogic/pi-mono*

---
## 1. Today's Highlights
No new official releases shipped in the last 24 hours, but the core team merged a wave of high-priority session persistence refactors, cross-platform UX fixes, and new model provider integrations that address many of the highest-voted community pain points. Active work is ongoing to resolve overlapping context compaction race conditions and performance bottlenecks that degrade experience for long-running multi-hour agent sessions. Multiple community contributors also submitted production-grade PRs adding support for popular model hosting platforms including Baseten and AWS Bedrock Mantle.

## 2. Releases
There are no new public stable or pre-releases of Pi published in the 24-hour window preceding this digest.

## 3. Hot Issues
1. **[#6187] WSL GitHub Copilot device authorization login hang** (19 comments)  
   URL: https://github.com/earendil-works/pi/issues/6187  
   The highest-activity open issue: Pi fails to detect completed browser-based Copilot auth on WSL and hangs indefinitely, blocking a large subset of Windows + WSL users from finishing setup. Community members are actively sharing port forwarding workarounds to bypass the cross-OS event detection gap.
2. **[#6665] TUI pins 1 full CPU core during LLM streaming** (11 comments)  
   URL: https://github.com/earendil-works/pi/issues/6665  
   Root traced to uncached `Intl.Segmenter` calls and per-chunk full Markdown rebuilds, causing noticeable lag on lower-spec hardware. The team has already validated the root cause and is prioritizing a caching fix for the next patch release.
3. **[#7267] Custom provider docs/Extension API implementation mismatch** (8 comments, closed)  
   URL: https://github.com/earendil-works/pi/issues/7267  
   A critical breaking issue for extension developers building custom LLM providers, where the published documentation did not match the actual runtime `registerProvider` logic. The fix was merged and closed within 48 hours of the issue being filed.
4. **[#6879] Auto-compaction never triggers past 100% of the model context window** (7 comments, 5 👍)  
   URL: https://github.com/earendil-works/pi/issues/6879  
   One of the highest-upvoted active bugs: long agent sessions run for hours past the documented compaction threshold, only triggering compaction after the upstream LLM API hard-rejects the request for exceeding token limits.
5. **[#7020] Pi stops responding entirely after context compaction completes** (7 comments, 2 👍)  
   URL: https://github.com/earendil-works/pi/issues/7020  
   Breaks long-running coordinator-style sessions that many power users rely on for multi-task project orchestration, causing silent hangs with no user-facing error.
6. **[#7161] Anthropic API paths do not send required x-client-request-id header** (6 comments)  
   URL: https://github.com/earendil-works/pi/issues/7161  
   Breaks session affinity for enterprise users running multi-account Claude proxies, causing requests for a single conversation to be incorrectly routed across different Claude accounts.
7. **[#7062] OpenAI completions handler fails on non-standard array content and missing finish_reason** (5 comments)  
   URL: https://github.com/earendil-works/pi/issues/7062  
   Breaks support for Databricks-hosted open-source models including Qwen3 and gpt-oss reasoning models that return schema-divergent streaming payloads when tools are enabled.
8. **[#7149] Standalone Linux x64 binary crashes with SIGILL on pre-Haswell Intel CPUs** (2 comments)  
   URL: https://github.com/earendil-works/pi/issues/7149  
   Blocks installation on older developer laptops and air-gapped hardware running Intel Sandy Bridge generation chips, as the build unknowingly uses BMI2 vector instructions not supported on legacy x86 hardware.
9. **[#7290] `--mode json` outputs O(n²) cumulative payloads causing OOM crashes** (2 comments)  
   URL: https://github.com/earendil-works/pi/issues/7290  
   Breaks third-party extension workflows that rely on Pi's structured JSON output mode, causing 10+ minute hangs and out-of-memory crashes when generating large code or documentation artifacts.
10. **[#7385] Keystroke input lag scales linearly with total conversation length** (2 comments)  
    URL: https://github.com/earendil-works/pi/issues/7385  
    Causes 350-500ms per-character input lag on sessions with 100+ stored tool calls, as the tool result renderer bypasses Text component caches and re-processes all historical tool output on every keystroke.

## 4. Key PR Progress
1. **[#7404] feat(ai): Add Baseten built-in provider** (closed)  
   URL: https://github.com/earendil-works/pi/issues/7404  
   Adds full OpenAI-compatible support for the Baseten model serving platform, letting users access any custom or public model hosted on Baseten by setting a single `BASETEN_API_KEY` environment variable.
2. **[#7408] feat(agent): Add storage-owned session readers** (closed)  
   URL: https://github.com/earendil-works/pi/issues/7408  
   Replaces eager full `SessionSnapshot` loading with SQLite-optimized indexed cursor reads, cutting memory overhead for large multi-thousand turn sessions by up to 70%.
3. **[#7387] fix(coding-agent): Read clipboard text on Wayland** (closed)  
   URL: https://github.com/earendil-works/pi/issues/7387  
   Resolves the long-running Wayland Ctrl+V paste failure bug by adding a `wl-paste` fallback before attempting X11 native clipboard reads, with full regression test coverage.
4. **[#7389] Add native prompt API for extensions** (closed)  
   URL: https://github.com/earendil-works/pi/issues/7389  
   Exposes a new official `pi.prompt()` method for extension developers, routing extension-submitted user input through Pi's native command, skill, and prompt template handling without unofficial workarounds.
5. **[#7396] feat(coding-agent): Add server session backend** (open)  
   URL: https://github.com/earendil-works/pi/issues/7396  
   Delivers a durable, production-grade `PiServer` backend that persists sessions as JSONL with cross-process exclusive locking and crash recovery, targeted at enterprise multi-user deployments.
6. **[#7390] fix(coding-agent): Target baseline x64 CPUs** (open)  
   URL: https://github.com/earendil-works/pi/issues/7390  
   Fully resolves issue #7149 SIGILL crashes on pre-Haswell Intel hardware by removing all AVX2/BMI2 instruction dependencies from the official standalone Linux binary.
7. **[#7370] fix(coding-agent): Prevent auto-compaction race during manual compaction** (open)  
   URL: https://github.com/earendil-works/pi/issues/7370  
   Eliminates the infinite duplicate `/compact` trigger loop bug where manual compaction run at 90% context window would trigger overlapping auto-compaction runs until interrupted by the user.
8. **[#7394] fix(coding-agent): Make JSON streaming output linear** (open)  
   URL: https://github.com/earendil-works/pi/issues/7394  
   Addresses the #7290 OOM bug by switching to delta-only `message_update` records in JSON and RPC output modes, removing the O(n²) cumulative payload growth pattern.
9. **[#7383] fix(coding-agent): Reject prompts during manual compaction** (open)  
   URL: https://github.com/earendil-works/pi/issues/7383  
   Closes the #7150 silent data loss bug where prompts submitted over RPC while compaction was in-flight would return a `success: true` ACK but never be added to the active session.
10. **[#6216] feat: Add Amazon Bedrock Mantle OpenAI Responses provider** (open)  
    URL: https://github.com/earendil-works/pi/issues/6216  
    Adds native support for AWS Bedrock's new Mantle API, allowing enterprise users to run Pi against their internal, compliant Bedrock model deployments without custom proxy layers.

## 5. Feature Request Trends
1. **Expanded LLM provider coverage**: The most common community request is for official first-party support for popular OpenAI-compatible model hosting platforms, with recent submissions prioritizing Baseten, AWS Bedrock Mantle, and additional self-hosted gateway integrations.
2. **Enhanced extension API capabilities**: Developers are requesting more explicit, less error-prone extension hooks, including support for running registered extension commands after agent execution settles, opt-out auto-activation for newly registered tools, and improved access to session state.
3. **Enterprise-grade deployment tooling**: High-demand requests from business users include session affinity header support for Anthropic APIs, bounded retries for shared proxy deployments, and multi-process safe session persistence for shared hosted Pi instances.

## 6. Developer Pain Points
1. **Context compaction unreliability**: A cluster of overlapping open bugs around missed auto-compaction triggers, race conditions between manual and automatic compaction, and hung sessions post-compaction is the top reported pain point for power users running multi-hour agent workflows.
2. **Cross-platform compatibility gaps**: Recurring breakage for under-served developer subsets including WSL2 users, Wayland Linux desktop users, and owners of older pre-Haswell x86 hardware leads to broken default out-of-the-box UX.
3. **Schema divergence for non-standard LLM providers**: Third-party and open-source LLM APIs frequently return streaming payloads that deviate slightly from OpenAI's published schema, causing hard-to-debug silent failures for tool use, discarded message content, and unhandled auth errors that require frequent upstream parser updates.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-08-01
Official GitHub repo: https://github.com/QwenLM/qwen-code

---

## 1. Today's Highlights
The 24h window of 2026-07-31 delivered the stable v0.21.2 release with major Autofix experience improvements, alongside final merged support for the long-awaited single-daemon multi-workspace deployment model. Maintainers also landed stacked upgrades to the project's native AI-powered PR review workflow, resolved critical P1 compatibility bugs for Anthropic Claude 4.6+/5.x model families, and made steady progress on packaging Web Shell as a production-ready native desktop application.

---

## 2. Releases
Two official releases were published in the last 24 hours:
- **v0.21.2 (stable)**: Ships the updated Autofix logic that defers low-severity suggestions after 5 execution rounds, plus clear visible notifications when Autofix stops due to round limit constraints.
- **v0.21.1-nightly.20260731.702932cc7**: Nightly build including CI fixes for the qwen-triage workflow and unshipped Web Shell stability patches.

---

## 3. Hot Issues (Top 10 Notable)
All issues below were updated in the last 24h and represent highest community engagement or production impact:
1. **[#6378][CLOSED] Multi-workspace support for single `qwen serve` daemon (31 comments)**: Finalized RFC for the top-requested deployment feature that allows one daemon process to host multiple independent workspaces while preserving backwards compatibility with existing single-workspace clients, critical for small team and enterprise multi-tenant use cases.
2. **[#8051][OPEN] Bounded multi-workspace daemon resource usage (9 comments)**: Tracking issue for implementing hard memory and compute limits for the new multi-workspace daemon, addressing unconstrained resource overflow risks that would prevent production rollout of the feature.
3. **[#5199][OPEN] Windows UI Minified React error #185 (9 comments)**: Affects Windows users running Qwen Code via Cherry Studio, causing core IDE and UI components to crash with no actionable debug information for end users.
4. **[#6721][OPEN] Deferred tool discovery invalidates prompt cache prefixes (7 comments)**: A performance bug that wastes cached prompt tokens during dynamic tool lookup, increasing per-request context window usage, latency, and inference costs for long-running sessions.
5. **[#8039][CLOSED] Anthropic 4.6+ prefill 400 error and thinking.display default omission (6 comments)**: P1 priority bug that broke full compatibility with all recent Claude Opus/Sonnet 4.6+ and 5.x model families, now fully resolved for production use.
6. **[#8182][OPEN] ACP child processes over-allocate host memory (3 comments)**: The `qwen serve` daemon reserves 50% of total host memory for every single ACP child process, no matter how many children run in parallel, which easily triggers OOM crashes on multi-process deployments.
7. **[#8227][OPEN] Windows @-file read security weakness (3 comments)**: The symlink TOCTOU protection added for validated file reads does not properly function on Windows, leaving users exposed to potential path traversal and symlink attacks.
8. **[#8232][OPEN] QQBot channel truncates sender openid (3 comments)**: The official QQ chat platform integration cuts off the full sender openid when building prompts, which prevents the model from correctly @-mentioning users in group chat replies.
9. **[#8003][CLOSED] Long 180K+ context sessions output XML tool calls as plain text (3 comments)**: Fixed edge case bug in qwen3.8-max-preview where the model occasionally emits unparsed raw XML tool call tags instead of structured OpenAI-compatible `tool_calls` arrays after 200+ multi-turn interactions.
10. **[#8252][OPEN] File search runs 41x redundant directory ignore checks (2 comments)**: Performance defect that drastically slows down full codebase crawls for large monorepos, wasting CPU cycles on repeated identical checks for the same directory against gitignore/ripgrep rules.

---

## 4. Key PR Progress (Top 10 High-Impact Changes)
1. **[#8132] feat(desktop): Package Web Shell as release-ready desktop app**: Converts the existing Tauri proof of concept into a production native desktop client that reuses the full Web Shell codebase, adding native lifecycle management, startup recovery states, and native workspace selector without rewriting the full UI stack.
2. **[#8261] feat(review): Add mined verification disciplines for PR workflow**: Implements 7 new automated review lenses and an effective diff guard for the project's native `/review` command, boosting the AI reviewer's ability to catch logic gaps and regressions before human maintainer review.
3. **[#8213] feat(serve): Establish workspace runtime ownership**: Foundational PR for the multi-workspace daemon feature, adding 5-state runtime snapshots, workspace-scoped monotonic epochs, physical work leases, and bounded startup/teardown logic for ACP child processes.
4. **[#8257] fix(autofix): Explicitly set primary agent budget to use full step headroom**: Resolves the long-standing Autofix premature timeout bug that wasted 2/3 of allocated step runtime, eliminating frequent false "AutoFix ran out of time" errors.
5. **[#8005] feat(cli): Adopt Goal v3 in interactive TUI**: Upgrades the terminal interactive interface with full `/goal` lifecycle commands, persistent progress cards, resume support after disconnects, and a two-lane input queue that separates regular chat messages from goal execution tasks.
6. **[#8169] feat(core): Add OpenAI Responses API content generator**: Delivers native support for OpenAI's latest Responses API, unlocking advanced structured tool calling, reasoning trace, and state persistence capabilities for GPT-4o and newer OpenAI models.
7. **[#8250] fix(web-shell): Deduplicate tool permission options by label**: Patches the reported duplicate "Yes, allow once" button bug in the Web Shell tool approval dialog by adding a deduplication pass for permission options with identical display labels.
8. **[#8260] fix(core): Preserve all reasoning episode signatures during history consolidation**: Fixes the Gemini history processing bug that discarded later reasoning episode signatures for sessions with multiple parallel tool calls, preventing corrupted context state across multi-turn interactions.
9. **[#8116] feat(cli): Add custom export path support for `/summary`**: Implements the widely requested feature that lets users specify a custom file path when running the `/summary` command, matching existing functionality for the `/export` command.
10. **[#7206] fix(cli): Complete image routing across all entry points**: Finalizes cross-entry-point (TUI, ACP, non-interactive CLI) support for image `@` reference imports, with full workspace boundary validation, MIME type checking, and symlink hardening.

---

## 5. Feature Request Trends
The top community-requested feature directions from updated issues are:
1. **Multi-workspace daemon production readiness**: Most popular roadmap item, with active tracking for resource bounding, security hardening, and fault tolerance for multi-tenant deployments.
2. **Expanded native client ecosystem**: High demand for a standalone desktop app, Chrome browser extension alpha release, and broader native platform support outside the existing terminal/Web Shell interfaces.
3. **Advanced automated developer workflow tools**: Growing interest in the project's native AI-powered PR review system, with requests for more verification capabilities, custom rule support, and better integration with GitHub CI flows.
4. **Wider LLM provider and IM platform compatibility**: Community is submitting feature and bug reports for Anthropic 5.x model support, OpenAI Responses API integration, and third-party chat platform (QQBot, etc.) integration improvements.

---

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by contributors and end users:
1. **CI pipeline flakiness**: Intermittent E2E test failures for SDK MCP server and subagent delegation tests are creating constant unplanned triage work for maintainers, with multiple auto-created CI failure issues filed on the main branch today.
2. **Daemon memory management gaps**: The current `qwen serve` daemon has multiple unpatched memory over-allocation and unbounded usage bugs that cause frequent OOM crashes on multi-process and multi-workspace deployments.
3. **Cross-platform gaps**: Windows users face disproportionate unpatched defects including broken React UI rendering, incomplete symlink security hardening, and missing features that already work reliably on Linux and macOS.
4. **Long session edge cases**: Persistent edge cases in high-context (100K+ token) sessions where the model deviates from expected structured tool call formatting, leading to hanging sessions and broken workflow execution.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-08-01
Repo: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) (formerly the deprecated `deepseek-tui` legacy NPM package)

---

## 1. Today's Highlights
The v0.9.3 official release train is now finalized under the project's new official CodeWhale branding from Shannon Labs, marking the end of support for the legacy `deepseek-tui` package. Critical user-facing bug fixes for Windows keyboard layout conflicts, large multi-line file edit failures, and broken long PATH overwrites are landing in lockstep with the release candidate. The community is also advancing high-priority roadmap items for third-party agent interoperability, remote SSH deployment support, and token efficiency optimizations for small fast models like DeepSeek V4 Flash.

## 2. Releases
### v0.9.3 (Released 2026-08-01)
This rebranded release drops all references to the deprecated `deepseek-tui` NPM identifier, with all new commands, package names, and assets using the lowercase `codewhale` technical identifier. Key improvements include native optimized handling for DeepSeek V4 Flash responses, a cleaned up canonical tool catalog, and full removal of the unmaintained ttf-parser PDF transitive dependency chain to resolve the RUSTSEC-2026-0192 maintenance advisory.

## 3. Hot Issues
1. [#4949: Discussion on Chinese translation of "Constitution"](https://github.com/Hmbown/CodeWhale/issues/4949) | 5 comments, 0 👍: Chinese-speaking users are debating between the original "协作准则" (Collaboration Guideline) and revert "宪法" (Constitution) to avoid unintended political connotations while preserving the document's intended meaning as the project's foundational governance rule, driving inclusive localization decision-making.
2. [#5007: Content creators using alternative TUIs for DeepSeek V4 Flash](https://github.com/Hmbown/CodeWhale/issues/5007) | 4 comments, 0 👍: A community member noted popular DeepSeek tutorial YouTubers are not currently adopting CodeWhale, sparking discussions on project discoverability even as maintainers clarify CodeWhale is an independent community-led project, not the official DeepSeek TUI.
3. [#5003: Severe repeated failure of multi-line write functionality for medium-long texts](https://github.com/Hmbown/CodeWhale/issues/5003) | 2 comments, 0 👍: A high-severity functional bug where the File edit/patch tool fails 15+ times applying large 100+ line changes to CRLF, Chinese-comment heavy codebases, triggering repeated full `git checkout` rollbacks, requiring users to fall back to external Python scripts to complete edits.
4. [#5005: Add sandbox filesystem path whitelist support for accessing external logs and build artifacts](https://github.com/Hmbown/CodeWhale/issues/5005) | 1 comment, 0 👍: A top request for Xcode developers working on macOS, who cannot access Xcode's default DerivedData build artifacts and logs stored outside the workspace due to the default `workspace-write` sandbox hard restrictions.
5. [#5000: Store interrupted partial assistant output as a durable first-class session item](https://github.com/Hmbown/CodeWhale/issues/5000) | 1 comment, 0 👍: Fixes a critical UX gap where all partial generated text is lost when a user interrupts a response before the MessageComplete event, breaking workflow continuity for long-form writing and large code generation tasks.
6. [#5002: Runtime error: Tool 'task' is not available](https://github.com/Hmbown/CodeWhale/issues/5002) | 1 comment, 0 👍: A common misconfiguration edge case paired with unhelpful Anthropic API 400 error messaging, pointing to a need for better user-facing diagnostic guidance to reduce support tickets.
7. [#4991: Discussion: Slow compilation of the TUI crate monolith](https://github.com/Hmbown/CodeWhale/issues/4991) | 1 comment, 0 👍: A contributor working on slash command refactoring polls the community to confirm widespread frustration with long Rust compile times, to justify potential crate splitting work to speed up development cycles.
8. [#4599: Build a single source of truth for per-model capabilities](https://github.com/Hmbown/CodeWhale/issues/4599) | 0 comments, 0 👍: Fixes scattered hardcoded context window, max output token, and capability values across multiple crates that currently cause mismatched behavior between the TUI, config layer, and runtime.
9. [#4708: Shorten tool descriptions and progressively disclose advanced schemas](https://github.com/Hmbown/CodeWhale/issues/4708) | 0 comments, 0 👍: A high-impact performance optimization that cuts wasted prefix tokens in system prompts, reduces tool selection errors, and makes the client run far more reliably on smaller, faster models.
10. [#4998: Generic PKCE headless OAuth with manual redirect fallback](https://github.com/Hmbown/CodeWhale/issues/4998) | 0 comments, 0 👍: Unblocks usage of CodeWhale on remote SSH servers, air-gapped containers, and headless machines that have no access to a local browser to complete the standard browser-based OAuth flow.

## 4. Key PR Progress
1. [#4993 (CLOSED): Release v0.9.3: DeepSeek V4 Flash Responses and canonical tools](https://github.com/Hmbown/CodeWhale/pull/4993): The full 72-commit v0.9.3 release integration train, fast-forwarded from isolated clean dev branches, delivering the first official CodeWhale rebranded build.
2. [#5008 (OPEN): fix(tui): actionable File edit diagnostics and stale-line-number tolerance](https://github.com/Hmbown/CodeWhale/pull/5008): Directly resolves the large patch failure bug from #5003, adding clear user-facing error messages and tolerance for stale line number ranges to eliminate 15+ repeated broken edit attempts.
3. [#4977 (CLOSED): fix(tui): let AltGr-typed "/" reach the composer instead of opening help](https://github.com/Hmbown/CodeWhale/pull/4977): Fixes a long-running keyboard layout bug on Brazilian ABNT2 and European AZERTY Windows systems, where AltGr+Q for / was incorrectly interpreted as the Ctrl+/ help keyboard shortcut.
4. [#5001 (OPEN): fix(tui): measure circled digits and keycaps as 2 columns everywhere](https://github.com/Hmbown/CodeWhale/pull/5001): Resolves intermittent TUI rendering glitches across CJK terminals, where wide circled digits, emoji keycaps, and dingbat symbols were incorrectly measured as 1 character wide instead of 2, causing phantom spaces and missing characters.
5. [#5006 (OPEN): fix(installer): preserve long Windows user PATH](https://github.com/Hmbown/CodeWhale/pull/5006): Patches an NSIS installer buffer overflow bug that overwrote long existing user PATH values for power users, preventing breaking post-install failures.
6. [#5004 (CLOSED): fix(docs): restore the v0.9.3 rustdoc gate](https://github.com/Hmbown/CodeWhale/pull/5004): Re-enables the CI `RUSTDOCFLAGS=-Dwarnings` documentation quality gate that broke pre-release, ensuring 100% clean documentation builds for the v0.9.3 launch.
7. [#5013 (OPEN): chore(deps): bump ratatui from 0.30.0 to 0.30.2](https://github.com/Hmbown/CodeWhale/pull/5013): Pulls in latest upstream TUI rendering bug fixes and performance improvements for the terminal UI stack.
8. [#5016 (OPEN): chore(deps): bump libc from 0.2.186 to 0.2.189](https://github.com/Hmbown/CodeWhale/pull/5016): Adds Emscripten and new BSD platform support, expanding cross-compile compatibility for WASM and niche operating system targets.
9. [#4910 (OPEN): docs: sanity check for deterministic verification surface](https://github.com/Hmbown/CodeWhale/pull/4910): A draft onboarding suite PR that will deliver a standardized way for new contributors to confirm their local dev environment is fully functional and correctly configured.
10. [#5010 (OPEN): chore(deps): bump actions/stale from 10.4.0

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*