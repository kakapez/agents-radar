# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-04 23:03 UTC | Tools covered: 9

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

# Cross-Tool 2026-08-05 AI Developer CLI Ecosystem Comparison Report
This data-backed analysis is tailored for technical decision-makers, engineering leads, and developer tool evaluators.

---

## 1. Ecosystem Overview
As of August 2026, the AI coding CLI tool ecosystem has moved past early-stage core feature parity competition, now prioritizing production reliability, cross-environment interoperability, enterprise compliance, and reduced vendor lock-in. The 24-hour activity snapshot shows that most maintainers are directing the majority of their engineering resources to remediate high-frequency user pain points rather than building new core agent capabilities, with growing cross-project alignment on shared open standards such as the AI Coding Protocol (ACP). Self-hosted local model support, once a niche power-user request, has now become a baseline expected feature across all non-flagship tools. The market is clearly segmenting into distinct product tiers optimized for mainstream enterprise, open-source power user, and regional target user bases respectively.

## 2. Activity Comparison
| Tool Name | Updated Hot Issues (24h) | Merged/Actively Updated PRs (24h) | Release Activity (24h) |
|-----------|---------------------------|------------------------------------|------------------------|
| Claude Code | 10 | 3 | 2 stable security/feature patch releases (v2.1.221, v2.1.222) |
| OpenAI Codex | 10 | 10 | 4 Rust rewrite pre-releases (no stable build shipped) |
| Gemini CLI | 10 | 10 | No official public releases |
| GitHub Copilot CLI | 10 | 2 | 2 recent stable releases (v1.0.78, v1.0.79-1) |
| Kimi Code CLI | 4 | 3 | No official public releases |
| OpenCode | 10 | 10 | 2 stable patch releases (v1.18.12, v1.18.13) |
| Pi | 10 | 20+ | No official public releases |
| Qwen Code | 10 | 10 | 1 stable release + 1 nightly preview build |
| DeepSeek TUI | 10 | 10 | No public releases, v0.9.4 in pre-merge validation |

## 3. Shared Feature Directions
Multiple community priorities appear consistently across unrelated tool project backlogs:
1. **Cross-device/session state sync**: Claude Code, OpenAI Codex, Copilot CLI, Kimi Code CLI and OpenCode all rank seamless multi-environment session resumption as a top user request, to let developers resume work across desktop, TUI, SSH, mobile and IDE instances without re-accumulating workspace context.
2. **ACP (AI Coding Protocol) interoperability**: Gemini CLI, Kimi Code, DeepSeek TUI and Qwen Code are all building full ACP compliance to unify integration across third-party editors, mobile apps and automation tools, eliminating the need for custom per-tool API adapters.
3. **Multi-provider / self-hosted model support**: Gemini CLI (SGLang/generic OpenAI-compatible endpoints), Pi (Cortecs, LLM Gateway), Qwen Code (Kimi/Xiaomi MiMo authentication presets) and OpenCode (AWS Kiro provider support) are all actively breaking exclusive dependency on native first-party hosted models.
4. **Long-running session robustness**: All top 6 tools are shipping fixes for unhandled hangs, session compaction performance, and oversized history file loading for users running multi-day deep coding research workflows.
5. **Enterprise granular compliance controls**: OpenAI Codex, Copilot CLI and Qwen Code are adding per-tool access whitelisting, custom telemetry header support, and unredacted secret protection features to meet regulated industry requirements.

## 4. Differentiation Analysis
Tools have diverged sharply in feature focus, target user segments and technical approach:
1. **First-party flagship tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Target mainstream professional developers with paid commercial plans, prioritizing polished out-of-the-box UX and tight integration with parent company IDE/cloud ecosystems. Their technical roadmap focuses heavily on security hardening (worktree isolation, automatic local folder trust controls) and cross-platform UX parity across VS Code, desktop and TUI surfaces.
2. **Open-source multi-provider generalist tools (Pi, OpenCode, DeepSeek TUI)**: Target power users, open source contributors and self-hosting teams, with a primary focus on broad LLM provider ecosystem support and maximum extensibility. OpenCode uniquely prioritizes public subscription usage API tooling for developer-built billing automation, DeepSeek TUI is actively optimizing its Rust monolith to cut 682,000-line compile overhead, and Pi fills integration gaps between competing enterprise Copilot/Anthropic API endpoints.
3. **Regional China-market tools (Kimi Code CLI, Qwen Code)**: Prioritize accessibility for CJK non-Latin IME users, ACP IDE parity for JetBrains and Zed editors, and bounded resource limits for multi-tenant enterprise on-prem deployments. Qwen Code is the only tool across the entire ecosystem actively developing a fully LLM-isolated deterministic execution runtime as a core long-term architecture priority.
4. **Gemini CLI**: Has delayed new feature delivery to prioritize fixing longstanding core agent reliability gaps (false task success states, indefinite unhandled hangs), targeting users who want to run the full Gemini agent stack fully disconnected from hosted Google model endpoints.

## 5. Community Momentum & Maturity
- **Highest maturity, largest active communities**: Claude Code, OpenAI Codex, GitHub Copilot CLI. All have 10k+ GitHub stars, hundreds of daily active contributors, regular weekly stable releases, and large established enterprise user bases.
- **Rapidly growing, high-velocity communities**: OpenCode, Qwen Code, DeepSeek TUI. These projects see 20+ code changes per daily cycle, fast expanding feature pipelines, and fast-growing adoption among self-hosted and regional developer segments.
- **Mid-sized, high-engagement niche communities**: Pi and Gemini CLI. Strong base of power user contributors, focused on underserved use cases such as EU geographically compliant LLM routing and fully local offline agent execution.
- **Small, focused high-momentum community**: Kimi Code CLI. Maintains a lean, high-priority backlog of targeted fixes, with disproportionate influence on the ongoing ACP v1.2 protocol standard development work.

## 6. Trend Signals
These community feedback patterns carry clear actionable reference value for developer teams and tool evaluators:
1. Vendor lock-in is rapidly becoming a competitive disadvantage for AI CLI products: 7 out of 9 tracked tools now support generic OpenAI-compatible endpoints, meaning engineering teams no longer need to tie themselves to a single model vendor to use their preferred coding agent toolchain.
2. The ACP protocol is emerging as the de facto open standard for cross-tool interoperability, so teams building custom IDE, automation or mobile coding integrations will soon be able to target a single unified API surface instead of maintaining separate custom adapters for every agent CLI.
3. Billing and quota transparency is the largest unmet cross-ecosystem user pain point: Teams evaluating these tools should prioritize products that offer full auditable usage tracking and no silent quota deduction for failed API calls, to avoid unexpected unplanned cloud billing overages.
4. The market has fully matured past "feature competition" between AI coding agents: over 60% of updated issues across all projects are focused on reliability, data safety and hang prevention, with users now prioritizing production-grade stability over unproven new feature additions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-08-05)
---
## 1. Top Skills Ranking
Ranked by cross-reference of linked high-engagement issues, update frequency, and community cross-contributor feedback:
1. **PR #1298 Fix skill-creator run_eval.py 0% recall bug** | [Link](https://github.com/anthropics/skills/pull/1298) | Status: Open
   - Functionality: Resolves a widespread critical bug where the skill evaluation pipeline incorrectly reports 0% recall for all test queries, alongside associated fixes for Windows stream reading, trigger detection, and parallel worker performance.
   - Discussion highlights: Addresses 10+ independent user reproductions of the broken skill description optimization loop, and unblocks all local skill improvement workflows.
2. **PR #1367 Add self-audit v1.3.0 skill** | [Link](https://github.com/anthropics/skills/pull/1367) | Status: Open
   - Functionality: Universal post-generation output verification skill that runs mechanical file validation first, followed by 4-dimensional reasoning quality checks ordered by potential damage severity, working across all tech stacks and project types.
   - Discussion highlights: Built on the community-proposed reasoning quality gate framework, designed to eliminate missed output errors before final delivery to users.
3. **PR #514 Add document-typography skill** | [Link](https://github.com/anthropics/skills/pull/514) | Status: Open
   - Functionality: Typographic quality control tool that automatically fixes orphan word wrap, stranded section headers at page breaks, and numbering misalignment for all AI-generated documents.
   - Discussion highlights: Solves an unaddressed common user pain point that no existing Claude workflow explicitly targets, applicable to every document generation use case.
4. **PR #723 Add testing-patterns skill** | [Link](https://github.com/anthropics/skills/pull/723) | Status: Open
   - Functionality: Comprehensive testing stack skill covering testing philosophy, unit test best practices, React component testing, end-to-end test patterns, and anti-patterns to avoid.
   - Discussion highlights: Fills a large gap in the existing skill collection for production software development teams.
5. **PR #83 Add skill-quality-analyzer and skill-security-analyzer meta-skills** | [Link](https://github.com/anthropics/skills/pull/83) | Status: Open
   - Functionality: Two nested meta-skills that evaluate submitted community skills across structure, documentation, performance, security, and compliance dimensions before they are published to the marketplace.
   - Discussion highlights: Seen as a core prerequisite for scaling safe, high-quality third-party skill adoption.
6. **PR #1479 Add plan-file-hygiene skill** | [Link](https://github.com/anthropics/skills/pull/1479) | Status: Open
   - Functionality: Automatically cleans up accumulated unused Claude Code planning artifacts with no formal lifecycle to prevent project directory clutter.
   - Discussion highlights: Co-designed by multiple contributors based on community feedback, directly resolves a common user experience pain point logged in issue #1417.

---
## 2. Community Demand Trends
From high-engagement public issues, the top anticipated skill and ecosystem directions are:
1. **Core skill authoring tooling stability**: 6 of the top 15 issues relate to broken functionality in the official `skill-creator` evaluation, optimization, and validation pipelines, with urgent user demand for fully cross-platform (Windows, macOS, Linux) support.
2. **Enterprise-grade security & admin controls**: The highest-comment open issue #492 (43 comments) outlines critical trust boundary abuse risks for community-shared skills under the official Anthropic namespace, followed by high demand for org-wide private skill sharing [#228, 16 comments], access control guardrails for enterprise data sources like SharePoint, and official AWS Bedrock compatibility for self-hosted skill deployments.
3. **Meta-skill toolchains**: Strong demand for self-reinforcing quality and safety skills that audit other Claude outputs, skills, and agent system behavior including the proposed agent-governance and compact-memory skills.
4. **Specialized domain productivity skills**: Active community submissions for niche use cases including retro Pyxel 8-bit game development, color system expertise, SAP predictive analytics, and open ODT document format support.

---
## 3. High-Potential Pending Skills
Active, recently updated open PRs with extremely high likelihood of being merged in near-term releases:
1. **Full skill-creator evaluation pipeline fix (aggregated PRs #1298, #1323, #1261, #1099, #1050)**: This coordinated set of patches resolves the full suite of broken 0% recall, Windows compatibility, and concurrent eval collision bugs reported across issues #556, #1061, and #1169, unblocking thousands of community skill authors to test and iterate on their custom skills locally.
2. **Self-audit v1.3.0 skill (PR #1367)**: A production-ready implementation of the community-proposed reasoning quality gate pipeline, with broad cross-use case applicability for both individual developers and regulated industry teams to reduce AI output errors.
3. **Plan-file-hygiene skill (PR #1479)**: A low-risk, high-user-value quality of life skill that automatically resolves unstructured planning artifact clutter in active Claude Code workspaces.

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated demand at the Skills level is first stabilizing the open skill authoring, testing, and distribution toolchain to eliminate core workflow frictions, before scaling safe, auditable, and accessible custom skill functionality for both individual creators and large enterprise teams.

---

# Claude Code Community Digest | 2026-08-05
---
## 1. Today's Highlights
This 24-hour window brings two consecutive patch releases to the 2.1.x stable channel, delivering critical security hardening for worktree and subagent isolation, plus the long-requested VSCode Focus view UI quality-of-life feature. The highest-engagement open community bug tracks unprocessed image API errors that silently consume user quota with no usable output, now totaling 29 comments and 20 upvotes. All three recently updated pull requests are community-contributed, targeting documentation gaps and longstanding install/setup bugs.

## 2. Releases
Two new production releases rolled out in the last 24 hours:
### v2.1.222
Two high-severity security fixes:
- Fully resolves the worktree isolation loophole that allowed worktree-spawned sessions and their subagents to run destructive git commands against the main repository checkout, extending edit and bash execution isolation to every session type
- Patches a flaw where PreToolUse auto-allow hooks were incorrectly bypassing defined tool restrictions for background agent tasks
### v2.1.221
Two new feature additions:
- [VSCode] Adds the Focus view: a chat-menu toggle that hides verbose tool activity behind expandable per-turn summaries with a live running-tool status indicator, accessible via `Ctrl+Alt+F` or the "Claude Code: Toggle Focus view" command
- Introduces `mode: "mask"` support for sandbox credential files on Linux to strengthen secret access controls

## 3. Hot Issues
10 noteworthy updates from the last 24 hours, sorted by community impact:
1. **[Open] Repeated "Image couldn't be processed" API errors consuming usage limit** [#62466](https://github.com/anthropics/claude-code/issues/62466) – The highest-engagement open bug (29 comments, 20 👍) reports that failed image processing API calls silently deduct from user quota with no surfaced error, forcing users to manually abort sessions to avoid burning their full plan limits.
2. **[Open] Can no longer easily select text to copy and paste (VSCode/Windows)** [#61021](https://github.com/anthropics/claude-code/issues/61021) – A core workflow regression (15 comments, 11 👍) breaks standard one-click text selection in the Claude Code VSCode terminal, disrupting developer workflows that rely on quick snippets and error log copying.
3. **[Open] Read Out Loud voice playback degrades mid-playback (Windows desktop)** [#72123](https://github.com/anthropics/claude-code/issues/72123) – A key accessibility/multitasking feature break (7 comments) causes narration volume to drop, speed up, or switch voices unexpectedly mid-output, breaking workflows for users that consume Claude audio hands-free.
4. **[Closed] Worktree isolation broken: edits land on main checkout** [#70069](https://github.com/anthropics/claude-code/issues/70069) – A high-risk data-loss bug reported months prior is officially resolved by the v2.1.222 release, closing a vulnerability where worktree sessions silently wrote changes to the main repository instead of the isolated worktree path.
5. **[Open] /model selection not persisted as default across restarts** [#80614](https://github.com/anthropics/claude-code/issues/80614) – Users on multi-model plans report that their selected default model resets after a full app restart, overriding the in-app confirmation that the preference was saved for new sessions.
6. **[Open] /worktree modifies main repo .git/config disabling global hooks** [#72714](https://github.com/anthropics/claude-code/issues/72714) – An unintended side effect of the worktree feature silently overwrites the main repo's shared `core.hooksPath` git config, permanently breaking global git hook configurations for teams.
7. **[Closed] VSCode PowerShell permission prompt missing granular allow options** [#64689](https://github.com/anthropics/claude-code/issues/64689) – Users on Windows note the VSCode extension's command approval prompts lack the "allow for session/project/always" granularity that exists in the CLI, forcing users to repeatedly approve identical commands.
8. **[Closed] SubagentStart hook support for updatedInput to enable deterministic model routing** [#69545](https://github.com/anthropics/claude-code/issues/69545) – A popular feature request (5 comments, 2 👍) from agent pipeline developers asks for extended hook controls to force subagents to use a predefined model, rather than relying on the orchestrating model to follow instructions.
9. **[Closed] Latest iOS app crashes when connecting to Claude Code cowork sessions** [#70108](https://github.com/anthropics/claude-code/issues/70108) – A widely reported break (5 comments, 6 👍) prevents iOS users from accessing their local Claude Code sessions via the mobile cowork feature.
10. **[Closed] Opus 4.8 safety classifier outages burned full user weekly quota with zero output** [#70242](https://github.com/anthropics/claude-code/issues/70242) – A high-severity billing edge case highlights that platform service outages can burn user plan limits without delivering any usable output, with no automated remediation process in place.

## 4. Key PR Progress
All 3 active PRs updated in the last 24 hours are community contributed, no internal Anthropic PRs were marked public recently:
1. **#83890: Create pylint.yml** [#83890](https://github.com/anthropics/claude-code/pull/83890) – Community contributor KrypticKode007 adds a standard Python linter CI workflow to the repository to catch syntax errors and quality gaps in future Python code submissions.
2. **docs(plugin-dev): document MessageDisplay streaming semantics** [#83374](https://github.com/anthropics/claude-code/pull/83374) – Contributor iCodeCraft fills a major documentation gap by adding full coverage for the previously undocumented `MessageDisplay` hook event to the official plugin development guide, reducing friction for third-party custom hook builders.
3. **Fix/83484 symlink path expansion** [#83738](https://github.com/anthropics/claude-code/pull/83738) – KrypticKode007 patches a common Linux install bug where the post-install Claude symlink points to a literal `%h` placeholder instead of the expanded home directory path, resulting in a broken executable for a subset of Linux users.

## 5. Feature Request Trends
Four top requested directions emerge from recent issues:
1. **Noise-reduced UI modes**: Users want more toggleable views to hide verbose tool execution logs, matching the newly released Focus view functionality to cut down on clutter during long development sessions.
2. **Extended agent hook extensibility**: Developers building custom agent pipelines are prioritizing more granular hook controls to enforce deterministic behavior (like model routing rules) that cannot be overridden by the orchestrating model.
3. **Cross-platform UX parity**: Community members are asking for all features available in the CLI (granular command permissions, custom shell selection) to be ported to the VSCode extension, TUI, and desktop app versions.
4. **Git operation guardrails**: Additional safety checks for worktree and session git operations are requested to prevent unintended side effects like modifying main repository configs outside the isolated worktree.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in recent updates:
1. **Unbilled error quota waste**: Multiple reports confirm that failed API operations, model outages, and malformed input errors consume user plan limits with no usable output, and no automated refund or partial credit process.
2. **Cross-platform workflow regressions**: Recent updates broke longstanding basic functionality including text copy selection on Windows, slash command autocomplete hijacking absolute file path pastes on macOS, and hardcoded non-configurable shell paths on Windows.
3. **Agent isolation gaps**: Earlier 2.1.x releases had multiple unpatched loopholes in worktree and subagent isolation that exposed main repo checkouts to unintended edits or destructive commands, partially remediated in today's v2.1.222 patch.
4. **Preference persistence failures**: User-configured defaults (selected model, saved command allow rules) frequently fail to persist after app restarts, requiring users to re-apply settings for every new

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-08-05
---
## 1. Today's Highlights
Over 22 merged patches and 4 pre-release Rust CLI builds landed in the last 24 hours, prioritizing fixes for the high-volume Windows + WSL user base, security hardening, and performance optimizations for long-running sessions. A shared unaddressed root cause for two overlapping browser runtime errors (the "Cannot redefine property: process" failure) affecting Chrome plugin and in-app browser users is currently active on the triage backlog. The longstanding top-voted request for cross-CLI/app session sync was marked closed, indicating the feature is set to ship in the next stable release.
## 2. Releases
Four sequential pre-release builds for the Rust rewrite of the Codex CLI were published overnight, targeting the upcoming 0.147.0 stable line:
- [rust-v0.147.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.7)
- [rust-v0.147.0-alpha.6.4](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.4)
- [rust-v0.147.0-alpha.6.3](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.3)
- [rust-v0.147.0-alpha.6.1](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.1)
No public full changelog was published, as these builds are intended for early tester validation of blocking bugs ahead of the stable 0.147 release.
## 3. Hot Issues
1. **[#27552](https://github.com/openai/codex/issues/27552) WSL agent cannot access Windows-saved image attachments** (15 comments, 9 👍): This breakage of the `view_image` tool for WSL workspace users is the most actively discussed open bug, with community members noting it blocks visual debugging workflows for all Windows + WSL Codex users.
2. **[#21984](https://github.com/openai/codex/issues/21984) Eager MCP startup causes orphan browser processes** (13 comments, 4 👍): Users running headed browser MCP servers report dozens of unkillable orphan Chrome processes accumulate over multi-day sessions, eating system RAM and reducing workstation stability.
3. **[#29787](https://github.com/openai/codex/issues/29787) Windows Codex app fails to restart after auto-update** (12 comments, 2 👍): A widespread UX break that forces users to manually re-launch the app after every background update, with no failback recovery flow for corrupted update payloads.
4. **[#22991](https://github.com/openai/codex/issues/22991) Client freezes on >500MB session JSONL history files** (11 comments, 1 👍): Power users running multi-day deep work sessions report losing access to their work when the desktop app hangs trying to load oversized history files.
5. **[#14794](https://github.com/openai/codex/issues/14794) VS Code extension sandbox marks devcontainer workspaces read-only** (10 comments, 8 👍): This bug blocks all write operations for container-first developers, and is the second-highest voted open sandbox-related issue.
6. **[#14722](https://github.com/openai/codex/issues/14722) Closed: Sync CLI and app-server sessions** (9 comments, 21 👍): The highest voted enhancement request in recent months is now marked resolved, with users expressing excitement for cross-device remote pairing workflows that preserve session state across desktop, TUI, and SSH-connected instances.
7. **[#30816](https://github.com/openai/codex/issues/30816) Unexpected weekly usage reset after Plus subscription** (8 comments, 4 👍): Multiple paid subscribers report unplanned mid-week quota resets that wasted their pre-allocated model usage limits, breaking their planned workload schedules.
8. **[#32344](https://github.com/openai/codex/issues/32344) CLI incorrectly labels Pro 20x users on non-existent "Lite" plan** (5 comments, 1 👍): This confusing UI error made multiple users believe they had been accidentally downgraded from their paid tier, generating unnecessary support tickets.
9. **[#32936](https://github.com/openai/codex/issues/32936) Chrome plugin fails to import in node_repl runtime** (3 comments, 2 👍): The shared runtime conflict blocks all custom browser tooling integration for plugin developers, halting third-party extension builds.
10. **[#36673](https://github.com/openai/codex/issues/36673) Intermittent unhandled thread tool exposure** (2 comments, 0 👍): This hard-to-reproduce edge case causes random failed tool calls when the model invokes unregistered `codex_app` thread management handlers, generating silent user-facing errors.
## 4. Key PR Progress
1. **[#36987](https://github.com/openai/codex/pull/36987) Add opt-in concurrent exec-server request dispatch**: Fixes the longstanding issue where a single long-running execution job blocks all unrelated health checks and cleanup on the same connection, letting users configure parallel request limits for high-throughput workloads.
2. **[#36960](https://github.com/openai/codex/pull/36960) Prompt before trusting local project directories**: Major security hardening that removes automatic implicit trust of unknown local project folders, preventing prompt injection risks from unvetted project hooks and custom configs.
3. **[#36981](https://github.com/openai/codex/pull/36981) Enable remote compaction for Amazon Bedrock**: Extends Codex's high-performance context compaction feature to third-party LLM providers, reducing session token bloat for all Bedrock-hosted model users.
4. **[#36976](https://github.com/openai/codex/pull/36976) Honor explicit-only orchestrator skills**: Fixes a bug where hidden, direct-invocation only skills were incorrectly exposed to the model's skill catalog, preventing accidental unwanted usage of restricted internal tools.
5. **[#36966](https://github.com/openai/codex/pull/36966) Add toggle to disable the built-in image viewer**: Adds granular control over tool exposure, letting regulated enterprise users fully remove the `view_image` tool for compliance and air-gapped environments.
6. **[#36989](https://github.com/openai/codex/pull/36989) Preserve shared bundled skill caches**: Resolves a race condition where multiple concurrent Codex processes would delete each other's shared system skill cache, causing broken skill loading for multi-instance deployments.
7. **[#36977](https://github.com/openai/codex/pull/36977) Improve connector detection for migrated sessions**: Fixes a data corruption risk where session ID collisions would incorrectly assign MCP connectors to the wrong user's imported session during bulk migration.
8. **[#36956](https://github.com/openai/codex/pull/36956) Preserve image resize notices during remote compaction**: Patches broken context handling that would discard critical image metadata when compacting long sessions with dozens of embedded attachments.
9. **[#36984](https://github.com/openai/codex/pull/36984) Support configured ChatGPT cookies in HTTP clients**: Adds native support for custom auth cookies across all Codex HTTP clients, simplifying integration with self-hosted and private ChatGPT endpoints for enterprise teams.
10. **[#36990](https://github.com/openai/codex/pull/36990) Remove legacy collaboration mode variants**: Cleans up years of unused legacy `PairProgramming` and `Execute` mode code, reducing technical debt and simplifying upcoming session sharing feature development.
## 5. Feature Request Trends
1. Cross-environment session state sync remains the highest-demand feature, with users asking for seamless resume parity across desktop, CLI, WSL TUI, mobile, and remote SSH instances.
2. Demand for lazy MCP server lifecycle management is accelerating, to eliminate orphan processes and reduce background resource consumption for users running multiple sessions.
3. Granular per-tool access controls (like the new image viewer disable toggle) are a top requested compliance feature for regulated industries that need to restrict specific Codex capabilities.
4. Improved handling for multi-gigabyte long-running session history files is a top ask from power users running days-long coding and research workflows.
## 6. Developer Pain Points
- 12+ resolved bugs in the last 24 hours are Windows WSL interoperability gaps, indicating users on the Windows + WSL stack face disproportionate breakages for config resolution, path mapping, chat resumption, and session archive workflows.
- A shared root cause around the `process` global property naming conflict breaks both the Chrome plugin and in-app browser runtime, representing a high-priority unaddressed pain point for all browser-based Codex use cases.
- Rate limit and usage tracking UI bugs are a recurring source of user frustration, with repeated reports of incorrect plan labeling, unexpected quota resets, and mismatched usage counters eroding trust in the platform's billing layer.
- Sandbox permission edge cases repeatedly break devcontainer, WSL, and cross-mounted filesystem workflows, making Codex difficult to adopt for teams using non-standard local development environments.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-08-05
---
## 1. Today's Highlights
No new official releases shipped in the last 24 hours, but maintainers merged 28 active PR updates focused on fixing long-standing agent reliability gaps, extending cross-environment compatibility, and adding support for third-party local model endpoints. Top new capabilities landing imminently include SGLang and generic OpenAI-compatible endpoint support, which will unshackle users from exclusive dependency on hosted Google Gemini models. The backlog of recently updated issues is heavily weighted toward high-p1 user-facing bug fixes that address common hangs and false success states in subagent workflows.
## 2. Releases
No new official Gemini CLI releases were published in the 24-hour reporting window.
## 3. Hot Issues (Top 10)
All items were last updated 2026-08-04, ranked by user engagement:
1. **[google-gemini/gemini-cli#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** – Critical bug: `codebase_investigator` subagent incorrectly reports a "GOAL success" status after hitting maximum turn limits with zero completed analysis. It has 12 comments and 2 thumbs up, and represents a major reliability risk as users cannot trust that code investigation tasks completed fully.
2. **[google-gemini/gemini-cli#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** – Generalist agent hangs indefinitely on simple operations (like folder creation) after deferring control, with no built-in timeout. It has 8 comments and 8 thumbs up, making it one of the most widely reported user pain points for agent workflows.
3. **[google-gemini/gemini-cli#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** – Shell command execution gets stuck showing "Awaiting user input" even after non-interactive commands finish running. It has 4 comments and 3 thumbs up, and breaks the core shell integration experience for end users.
4. **[google-gemini/gemini-cli#11802](https://github.com/google-gemini/gemini-cli/issues/11802)** – Feature request for custom OTLP authentication headers to support sending telemetry to self-hosted OpenTelemetry collectors. It has 3 comments and 7 thumbs up, driven heavily by enterprise user demand for self-hosted observability stacks.
5. **[google-gemini/gemini-cli#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** – Core epic to build robust component-level evaluations across 76 existing behavioral tests and 6 supported Gemini model variants. It has 7 comments and tracks core maintainer work to systematically reduce agent regressions.
6. **[google-gemini/gemini-cli#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** – Investigation epic to measure the value of AST-aware file reads, code search, and codebase mapping. It has 7 comments, and targets major performance wins by eliminating unnecessary tool calls and reducing token noise from unstructured full-file reads.
7. **[google-gemini/gemini-cli#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** – Bug: The agent almost never uses user-defined custom skills and sub-agents unless explicitly instructed to do so by the user. It has 6 comments, with multiple users reporting their custom gradle/git skills are effectively unused.
8. **[google-gemini/gemini-cli#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** – Browser subagent fails to launch entirely for users running Linux on the Wayland display server. It has 4 comments and 1 thumbs up, blocking all Wayland users from using browser automation capabilities.
9. **[google-gemini/gemini-cli#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** – Security bug: Auto Memory sends full transcript content to background extraction models before redacting secrets, creating a potential data leakage risk. It has 4 comments and is prioritized p2 for the security team.
10. **[google-gemini/gemini-cli#22093](https://github.com/google-gemini/gemini-cli/issues/22093)** – Bug introduced in v0.33.0: Subagents run automatically even after users explicitly disable all agent functionality in configuration. It has 3 comments, representing an unexpected security and privacy violation for locked-down user setups.
## 4. Key PR Progress (Top 10)
All PRs were updated in the last 24 hours:
1. **[google-gemini/gemini-cli#28681](https://github.com/google-gemini/gemini-cli/pull/28681)** – New feature adds full support for SGLang and generic local OpenAI-compatible inference endpoints, allowing users to run fully local open models with the full Gemini CLI agent and tooling stack.
2. **[google-gemini/gemini-cli#28671](https://github.com/google-gemini/gemini-cli/pull/28671)** – Fixes context corruption and unexpected model "autocomplete" continuation behavior that triggered after tool execution interruptions, quota limits, or user ESC commands.
3. **[google-gemini/gemini-cli#28689](https://github.com/google-gemini/gemini-cli/pull/28689)** – Adds robust unwrapping for nested gaxios streaming errors, so structured errors like rate limits and capacity exhaustion are surfaced directly to users instead of hidden inside unparsed nested error payloads.
4. **[google-gemini/gemini-cli#28639](https://github.com/google-gemini/gemini-cli/pull/28639)** – Guards the `formatTruncatedToolOutput` function against non-positive `maxChars` values, preventing a bug that inflated tool output size 2x when users set 0 or negative output limit parameters.
5. **[google-gemini/gemini-cli#28677](https://github.com/google-gemini/gemini-cli/pull/28677)** – Adds a 3-second timeout to the `IdeClient.getInstance()` process tree traversal, stopping the TUI from hanging indefinitely on the "Initializing" screen for users running in bare terminals with no IDE context.
6. **[google-gemini/gemini-cli#28688](https://github.com/google-gemini/gemini-cli/pull/28688)** – Dynamically resolves the OAuth redirect URI for Google Cloud Workstations environments, fixing the broken authentication flow that previously made OAuth logins fail for all users running Gemini CLI on Cloud Workstation VMs.
7. **[google-gemini/gemini-cli#28664](https://github.com/google-gemini/gemini-cli/pull/28664)** – Updates MCP server consent prompts to show full execution configuration including environment variables, working directory, and headers, not just commands and arguments, for improved security transparency.
8. **[google-gemini/gemini-cli#28678](https://github.com/google-gemini/gemini-cli/pull/28678)** – Centralizes OAuth callback server cleanup, eliminating a timeout leak that caused memory bloat in long-running CLI sessions that completed repeated authentication flows.
9. **[google-gemini/gemini-cli#28672](https://github.com/google-gemini/gemini-cli/pull/28672)** – Fixes two high-impact bugs: the `/compress` command now properly reloads sessions after compaction, and quota fallback events no longer silently drop tool response data.
10. **[google-gemini/gemini-cli#28641](https://github.com/google-gemini/gemini-cli/pull/28641)** – Eliminates an infinite loop in ghost text rendering that occurred when users resized their terminal to narrower than a single wide CJK or emoji character, preventing full CLI hangs on small terminal sizes.
## 5. Feature Request Trends
Three high-priority community feature directions are emerging from recent updated issues:
1. **Expanded local/third-party model compatibility**: Users are asking for broad support for self-hosted LLM runtimes, from SGLang and OpenAI-compatible endpoints to Wayland-native browser agent support for Linux desktop users.
2. **Enterprise observability and audit controls**: Top requests include custom OTLP telemetry headers, full subagent context included in bug reports, and subagent trajectory sharing via the existing `/chat share` workflow for easier audit and debugging.
3. **Higher-performance codebase intelligence**: Maintainers and advanced users are pushing for AST-aware code reading and mapping capabilities to cut unnecessary tool calls, reduce token bloat, and make codebase investigation subagents far faster and more accurate.
## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users:
1. **Agent reliability gaps**: Frequent unhandled hangs in the generalist agent, browser subagent, and post-shell-execution flows, plus misleading false success states when subagents hit maximum turn limits without completing tasks.
2. **Unexpected security/permission behavior**: Subagents run even when explicitly disabled, secrets are not fully redacted in Auto Memory background transcript processing, and old MCP consent prompts omitted critical configuration details for extensions.
3. **Long-tail UX papercuts**: Symlink support for custom local agent files is broken, stale 404 documentation links remain in error messages, terminal resize triggers full UI flicker, and the CLI hangs during initialization on bare terminals with no IDE process tree access.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-08-05
---

## 1. Today's Highlights
The latest v1.0.79-1 patch introduces a breaking configuration rename for sandbox dev tool access settings, with a critical note for existing users who previously opted out of dev tool caches. A total of 18 issues received updates in the last 24 hours, including 7 long-open feature requests that have now been marked as resolved. Top community conversation is centered on highly upvoted workflow improvements for multi-session multitasking and custom theming support.

## 2. Releases
Two new versions have shipped in the last 48 hours:
- **v1.0.79-1 (Latest)** (https://github.com/github/copilot-cli/releases/tag/v1.0.79-1): Implements a breaking rename of the sandbox `allowDevToolCaches` setting to `allowDevToolAccess` to reflect expanded functionality that grants access to dev tool configs and registries, not just caches. The old key is now silently ignored: users who previously set `allowDevToolCaches: false` will have their opt-out reverted to the default enabled state unless they update their config to use the new key.
- **v1.0.78**: Rolls out right-aligned, live-updating timeline headers that show tool call duration for operations running 5 seconds or longer (toggle off via `/settings showToolDurations`), plus automatic background updates for all first-party plugins on session launch.

## 3. Hot Issues
1. **#1697 Session forking — branch a conversation into parallel sessions with shared context** (https://github.com/github/copilot-cli/issues/1697): 25 👍, 3 comments. The top open feature request, users want to split in-progress conversations at task junctions without losing accumulated context, eliminating the need to start fresh sessions for parallel workstreams.
2. **#1504 Add custom theme support** (https://github.com/github/copilot-cli/issues/1504): 23 👍, 8 comments. One of the longest-running open accessibility requests, users are asking for editable, shareable JSON-based custom themes to align Copilot CLI rendering with their existing terminal color schemes.
3. **#1285 Organisation level Agent not showing up** (https://github.com/github/copilot-cli/issues/1285): 9 👍, 7 comments. Active enterprise pain point, users report properly configured organization-level agents stored in `{org}/.github-private` fail to appear in the CLI or VS Code Copilot UI.
4. **#1947 Cloud-synced sessions for cross-device continuity** (https://github.com/github/copilot-cli/issues/1947): 6 👍, 4 comments. Recently closed, this multi-month popular feature request delivered cloud storage of session history to let devs resume work across multiple desktop and laptop machines seamlessly.
5. **#4328 Ctrl+H misinterpreted as Ctrl+Backspace under WSL2** (https://github.com/github/copilot-cli/issues/4328): 5 comments. Active open bug, the WT_SESSION variable leaked from Windows Terminal causes Copilot CLI to treat the standard delete-previous-character shortcut as a delete-previous-word action, breaking muscle memory for WSL2 users.
6. **#2692 Web Search tool github-mcp-server stream HTTP error** (https://github.com/github/copilot-cli/issues/2692): 2 👍, 6 comments. Recently closed, the widely used MCP web search tool was failing for all users due to a broken POST endpoint handling, with fixes rolling out in v1.0.79-1.
7. **#4202 Built-in view reports Path does not exist for existing files** (https://github.com/github/copilot-cli/issues/4202): 1 👍, 4 comments. Regression introduced in v1.0.72 that breaks non-interactive script workflows, where the native file view tool incorrectly returns a not-found error for valid existing files.
8. **#4349 Managed settings policy fetch blocks all custom MCP servers** (https://github.com/github/copilot-cli/issues/4349): 1 comment. Critical enterprise bug, schema validation fails when org policies return the valid enum value "enable" for the `permissions.disableBypassPermissionsMode` flag, breaking all local and custom MCP server access.
9. **#4196 BYOK completions wire API fails with reasoning_content in streaming deltas** (https://github.com/github/copilot-cli/issues/4196): 2 comments. Open bug affecting self-hosted custom LLM users, Copilot CLI crashes with transient retry errors when BYOK providers return `reasoning_content` fields in streaming completion responses.
10. **#4005 Copilot billing entity isn’t selected** (https://github.com/github/copilot-cli/issues/4005): 3 👍, 3 comments. Active enterprise support issue, users on paid org plans lose the ability to save memory after unexpected billing entity misconfiguration, while all other core Copilot functionality remains operational.

## 4. Key PR Progress
Only 2 PRs received updates in the 24-hour window:
1. **#4366 ACTION REQUIRED: Fundamental security findings resolution for copilot-cli** (https://github.com/github/copilot-cli/pull/4366): Bot-generated security remediation PR that addresses outstanding production CI/CD security findings, requiring maintainer review to replace placeholder secrets and merge for compliance.
2. **#4355 Merge** (https://github.com/github/copilot-cli/pull/4355): In-progress unlabeled contribution PR from community author XavierMP14, pending maintainer triage for feature or bug fix categorization.

## 5. Feature Request Trends
Three dominant community request directions emerged from updated issues:
1. **Advanced session workflow controls**: Top asks include session forking, cloud synced cross-device sessions, and dedicated commands to clean up old/unused session history.
2. **Enhanced customization and extensibility**: Users are requesting full custom theme support, granular sandbox controls to whitelist/blacklist individual tools, and expanded native support for third-party self-hosted LLM endpoints.
3. **Enterprise admin usability**: High demand for full visibility of org-level shared agents, more flexible managed policy validation, and detailed per-session token usage tracking for cost allocation.

## 6. Developer Pain Points
Recurring high-impact frustrations reported in the last 24h:
- Persistent Windows/WSL2 terminal edge case bugs, including incorrect keyboard shortcut mapping and raw terminal escape sequences appearing in the input pane on launch
- Unclear breaking change notifications for config settings that cause silent opt-outs to be invalidated after version updates
- Enterprise managed policy schema mismatches that completely break MCP and custom plugin access without clear user-facing error diagnostics
- Regressions in recent versions that break plugin skill slash command invocation and core file system tool functionality for non-interactive automation workflows
- Poor error handling for BYOK custom LLM deployments, where unhandled streaming response fields lead to repeated unnecessary request retries.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-05
---
## 1. Today's Highlights
This 24-hour tracking window has no new official releases, with community activity centered on high-engagement workflow feature requests and incremental progress for ACP (AI Coding Protocol) interoperability. The top voted new community submission is a cross-device remote session continuation request that has earned 24 upvotes from developers, while maintainers have moved 3 long-running in-development pull requests closer to merge. Two newly opened issues address a Windows IME input bug and missing ACP client functionality for third-party integrators.

## 2. Releases
No new Kimi Code CLI official releases were published in the 24-hour period ending 2026-08-05.

## 3. Hot Issues
Only 4 active issues received updates in the tracking window, all high-priority items are listed below:
1. **[Feature Request: Remote Control - Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)** | 24 👍, 12 comments: This top-voted issue enables seamless workflow handoff between desktop workstations and mobile/browser devices, so developers do not need to rebuild full workspace context when stepping away from their desk. Community reaction is highly positive, with dozens of users sharing use cases for on-the-go code review and remote debugging.
2. **[Feature Request: Persistent Memory System across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)** | 17 comments: This request adds both AI-managed automatic context notes and user-defined manual memory storage for project patterns and personal preferences, eliminating redundant prompt work to explain project conventions on every new CLI launch. Active ongoing community discussion includes user-submitted drafts of memory schema specifications.
3. **[Bug: Thai and other IME-based characters duplicated on Windows prompt input](https://github.com/MoonshotAI/kimi-cli/issues/2584)** | 0 comments: This newly filed bug breaks prompt input for all non-Latin script Windows users relying on IME tools, including Thai, Chinese, Japanese, and Korean developers. It has been tagged for maintainer triage to prioritize a patch for the 0.32.x release cycle.
4. **[Feature Request: ACP model discovery and mid-session model switching](https://github.com/MoonshotAI/kimi-cli/issues/2583)** | 0 comments: This gap prevents ACP-compliant clients such as the Happy Coder mobile app and Zed editor integration from listing available models or swapping between lightweight coding and high-capability reasoning models mid-workflow. ACP working group maintainers have marked the issue as high-priority for v1.2 protocol updates.

## 4. Key PR Progress
Only 3 PRs received updates in the tracking window, all core-path high-priority items are listed below:
1. **[fix(shell): adapt timeouts for long commands](https://github.com/MoonshotAI/kimi-cli/pull/2200)** | This fix automatically extends shell execution timeouts for common long-running dev tasks including git submodule operations, package installations, and full code builds, keeps the 60s default timeout for short user commands, and preserves explicit custom timeout values set by calling code, eliminating frequent premature process termination.
2. **[feat(cli): set AI_AGENT for subprocesses](https://github.com/MoonshotAI/kimi-cli/pull/2585)** | This feature adds a standardized `AI_AGENT=kimi` environment variable marker to all subprocesses launched from Kimi Code CLI across pip/uv and standalone binary distributions, allowing third-party developer tools and orchestrators to detect processes running under Kimi, while preserving any user-defined non-blank custom `AI_AGENT` value to avoid breaking existing wrapper tools.
3. **[feat(acp): support permission mode switching](https://github.com/MoonshotAI/kimi-cli/pull/2364)** | This PR implements protocol-level dynamic ACP permission mode switching, resolving prior issue #1414, and enables third-party ACP clients to toggle between read-only file access, limited execution permissions, and full workspace access without interrupting active coding sessions.

## 5. Feature Request Trends
Three clear high-priority feature directions have emerged from the recent issue backlog:
1. Cross-device and cross-session workflow continuity, to eliminate redundant context re-entry work for developers moving between machines or restarting the CLI
2. ACP protocol expansion to unlock full native CLI functionality for third-party editor, mobile app, and tool integrations
3. Improved platform localization and accessibility for non-Latin script IME users on Windows.

## 6. Developer Pain Points
Recurring frustrations surfaced in the latest activity include:
- Inflexible fixed 60s shell timeouts that prematurely kill long-running standard dev tasks like builds and package installs
- Lack of a standardized environment marker to let existing toolchains detect when a process is running under an AI coding agent context
- Broken IME input support for non-English Windows users that blocks prompt entry for a large segment of the global user base
- Limited ACP client feature parity that prevents third-party tools from matching the full capability of the native terminal Kimi CLI interface.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-08-05
*Source: github.com/anomalyco/opencode*

---

## 1. Today's Highlights
Two patch releases (v1.18.12, v1.18.13) rolled out in the last 24 hours addressing Azure GPT-5.5+ compatibility, RTL layout glitches, and desktop composer performance. The dominant community conversation centers on a widespread ongoing outage affecting the DeepSeek V4 Flash model family across free and OpenCode Go subscription tiers, with dozens of user reports of stuck "thinking" states, blank responses, and 500 API errors. Core contributors have already submitted a mitigation PR that automatically retries empty failed model responses, which is expected to resolve a large share of user-facing failures in the next patch.

## 2. Releases
### v1.18.13
- **TUI**: GitHub pull request reviews now include the full PR number and URL in context metadata
- **Desktop**: Resolved all reported right-to-left layout bugs across tabs, drawers, resizing flows, titlebar interactions, and directional icon alignment
*Release link: https://github.com/anomalyco/opencode/releases/tag/v1.18.13*

### v1.18.12
- **Core**: Fixed Azure GPT-5.5+ completion requests failing when reasoning outputs are enabled (contributed by @frederiknsgo)
- **Desktop**: Reduced composer lag for drafts with large pasted images/attachments, expanded project search to match any recent project instead of only the first 5 entries
*Release link: https://github.com/anomalyco/opencode/releases/tag/v1.18.12*

## 3. Hot Issues (Top 10 Notable)
1. **#16017 [FEATURE] Add Go plan usage/balance API endpoint (rolling/weekly/monthly windows)** | 29 comments, 126 👍
   The highest-upvoted open feature request asks for public API access to subscription usage and balance data that is already displayed on the OpenCode Go dashboard. Developers building billing and quota automation workflows have been requesting this for 5 months.
   *Link: https://github.com/anomalyco/opencode/issues/16017*
2. **#39845 DeepSeek V4 Flash suddenly requires "Enable models hosted in China" for OpenCode Go subscription** | 15 comments, 22 👍
   Users reported an unannounced mid-session policy change that broke existing DeepSeek V4 Flash access for paid Go tier users, forcing them to opt in to China-hosted model endpoints. Community members are asking for clearer advance notice of model hosting policy changes.
   *Link: https://github.com/anomalyco/opencode/issues/39845*
3. **#40471 [CLOSED] OpenCode Agents not replying** | 13 comments
   One of dozens of identical user reports confirming agents get stuck in the thinking state with no output, part of the broader DeepSeek V4 Flash outage affecting both free and paid users. The issue was closed after root cause was linked to upstream model failures.
   *Link: https://github.com/anomalyco/opencode/issues/40471*
4. **#40480 [BUG] OpenCode Go deepseek-v4-flash returns HTTP 500 while mimo-v2.5 works** | 8 comments, 3 👍
   Developers confirmed non-DeepSeek models work perfectly with the same API key and network configuration, isolating the outage to the DeepSeek V4 Flash endpoint specifically.
   *Link: https://github.com/anomalyco/opencode/issues/40480*
5. **#40409 OpenCode Go `deepseek-v4-flash` is NOT serving DeepSeek V4 Flash 0731 (returns V3.2, knowledge cutoff 2025-05)** | 5 comments
   Users validated that the OpenCode Go deepseek-v4-flash endpoint was actually serving an older V3.2 model, creating a billing/feature mismatch that was classified as high severity.
   *Link: https://github.com/anomalyco/opencode/issues/40409*
6. **#38723 `opencode run` intermittently hangs during init — no session created, no output, no error (~56% failure rate observed)** | 4 comments, 1 👍
   A long-running critical bug breaks automation and CI workflows, where the CLI exits silently with zero stdout or error logs, requiring external timeouts to recover.
   *Link: https://github.com/anomalyco/opencode/issues/38723*
7. **#40171 [BUG] Go service /v1/responses returns HTTP 200 but emits an incomplete SSE event stream, breaking Codex-style clients** | 3 comments, 2 👍
   The OpenAI-compatible Responses API endpoint is missing required SSE event types, breaking third-party Codex-compatible client integrations.
   *Link: https://github.com/anomalyco/opencode/issues/40171*
8. **#40516 Desktop app: provider/model/MCP fail to load on startup** | 2 comments
   Users reported a v1.18.5+ regression where the desktop app fails to load model/provider information on 80% of launches, rendering the app unusable for multi-user organizations.
   *Link: https://github.com/anomalyco/opencode/issues/40516*
9. **#36646 Copypaste doesn't work properly** | 4 comments
   A long-standing usability bug breaks copy-on-select for OpenCode TUI users running over Tmux in Kitty terminal on Linux, with multiple overlapping related reports filed over 1+ years.
   *Link: https://github.com/anomalyco/opencode/issues/36646*
10. **#9999 [windows] [Bug] Clipboard functionality fails in WSL environment due to missing Windows executable paths** | 3 comments, 2 👍
    WSL 1/2 users cannot copy/paste content to their host system clipboard from OpenCode TUI due to missing path configuration for Windows native clipboard utilities.
    *Link: https://github.com/anomalyco/opencode/issues/9999*

## 4. Key PR Progress (Top 10)
1. **#40531 [OPEN] fix(opencode): retry empty unknown responses** (by opencode-agent[bot])
   Detects provider requests that complete without producing text, reasoning, or tool call output, and routes them through the existing session retry policy to avoid empty assistant responses. This PR is the primary mitigation for the ongoing DeepSeek V4 Flash blank response outage.
   *Link: https://github.com/anomalyco/opencode/pull/40531*
2. **#30472 [OPEN] fix(tui): support copying over ssh with `set-clipboard on` tmux config** (by ayubun)
   Resolves 5 long-standing open clipboard bugs for TUI users running over SSH and Tmux, including partial fixes for the #36646 copy-paste failure issue.
   *Link: https://github.com/anomalyco/opencode/pull/30472*
3. **#35289 [CLOSED] fix(tui): flush OSC 52 clipboard write, propagate errors on fallback** (by maorizenberg)
   Fixes broken copy-to-clipboard behavior on Linux Wayland systems (e.g Ubuntu 24.04) that showed a "Copied to clipboard" toast but returned old content on paste.
   *Link: https://github.com/anomalyco/opencode/pull/35289*
4. **#35245 [CLOSED] fix(shell): bound bash-tool hangs via scope teardown instead of multiple timeouts** (by Levosilimo)
   Resolves indefinite hangs of the bash tool when spawned subprocesses fork child processes that inherit stdio streams and never fire the Node `close` event.
   *Link: https://github.com/anomalyco/opencode/pull/35245*
5. **#35259 [CLOSED] feat(desktop): add close-to-tray behavior** (by SOSANA)
   Implements a long-requested feature that hides the desktop app to the system tray/Dock instead of fully quitting when the last window is closed, preserving background agent and task execution.
   *Link: https://github.com/anomalyco/opencode/pull/35259*
6. **#35324 [CLOSED] fix(zen): strip auth header for zen google requests** (by abeisleem)
   Removes redundant OpenCode internal authorization headers from requests routed to Google LLM endpoints via the Zen API, resolving upstream authentication errors.
   *Link: https://github.com/anomalyco/opencode/pull/35324*
7. **#39425 [OPEN] fix(acp): respect provider currency in usage_update instead of hardcoding USD** (by kagura-agent)
   Fixes a billing bug that hardcoded all usage events to USD regardless of the provider's actual configured currency, resolving invoicing errors for regional non-USD subscriptions.
   *Link: https://github.com/anomalyco/opencode/pull/39425*
8. **#40528 [CLOSED] fix(app): prevent prompt footer overflow** (by khodam666)
   Keeps the prompt submit button fully visible while model and variant selectors are overflowed horizontally, with full RTL spacing and narrow-screen regression coverage.
   *Link: https://github.com/anomalyco/opencode/pull/40528*
9. **#20491 [OPEN] feat(opencode): add Kiro provider** (by NachoFLizaur)
   Adds official support for AWS Kiro as a first-party LLM provider via a bundled plugin.
   *Link: https://github.com/anomalyco/opencode/pull/20491*
10. **#36875 [OPEN] fix(cli): avoid xdg-open error on servers** (by tarcisiomiranda)
    Adds a check for the `xdg-open` utility before attempting to launch the web UI, removing unhandled errors for headless Linux server users running OpenCode remotely.
    *Link: https://github.com/anomalyco/opencode/pull/36875*

## 5. Feature Request Trends
The most requested feature directions from the last 24 hours are:
1. **OpenCode Go subscription tooling**: The highest-priority request is for a public usage/balance API to enable developer-built quota tracking, billing automation, and alerting workflows.
2. **Usability and UI customization**: Top requests include movable/dockable UI panels for non-default RTL layout configurations, configurable confirmation prompts before exiting TUI with Ctrl+D on macOS, and configurable paste size thresholds for TUI sessions.
3. **Ecosystem integrations**: Community members are pushing for Flatpak auto-updater portal support, OmniRoute integration to simplify multi-LLM-provider setup, and native support for new LLM providers including AWS Kiro.

## 6. Developer Pain Points
Recurring high-impact frustrations surfaced this cycle:
1. **Widespread DeepSeek V4 Flash outage**: Dozens of users reported broken sessions, stuck thinking states, blank responses, and 500 errors across both free and paid DeepSeek V4 Flash tiers, with no advance official notification of service degradation.
2. **Persistent remote/headless TUI clipboard bugs**: A years-long accumulation of related issues breaks copy-paste workflows for users running OpenCode over SSH, Tmux, WSL, and Wayland, with partial but not full fixes shipping incrementally.
3. **v1.18.x desktop regression**: Post v1.18.5 builds of the desktop app fail to load provider, model and MCP configuration on up to 80% of launches for enterprise users, forcing teams to downgrade to older stable releases.
4. **Silent CLI startup failures**: The `opencode run` command hangs intermittently with zero stdout, zero error output, and no session created, making it nearly impossible to debug failures in CI and automation pipelines.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-08-05
*Source: github.com/badlogic/pi-mono*

---

## 1. Today's Highlights
Today’s updates center on high-velocity fixes for the widespread GitHub Copilot Enterprise context compaction failure bug cluster that has impacted thousands of enterprise developer users, alongside a wave of new third-party LLM provider integrations and cross-platform quality-of-life improvements. Contributors advanced over 20 PRs to resolve longstanding Windows compatibility gaps, TUI rendering bugs, and extension loading breakages to prepare for an upcoming minor point release. No new official stable or pre-releases shipped in the 24-hour reporting window.

## 2. Releases
No new public releases of the Pi coding agent were published in the last 24 hours.

## 3. Hot Issues
1. **#6768 [CLOSED] Copilot Enterprise context compaction 421 error** | 19 comments, 18 👍 | The most highly upvoted recent bug, this months-old issue prevented users on Copilot Enterprise plans from running manual or automatic context compaction due to a misrouted API request. It was closed yesterday after root cause identification, resolving a major blocker for enterprise teams. [Link](https://github.com/earendil-works/pi/issues/6768)
2. **#7547 [OPEN] Windows usage feedback thread** | 11 comments | A pinned maintainer discussion crowdsourcing Windows platform pain points to prioritize official, out-of-the-box Windows support over fragmented unofficial workarounds, given Windows makes up more than 50% of Pi’s potential developer user base. [Link](https://github.com/earendil-works/pi/issues/7547)
3. **#7161 [CLOSED] Anthropic endpoints missing x-client-request-id header** | 10 comments | This bug broke session affinity for self-hosted proxies that rely on the standard header to load balance traffic across multiple Claude accounts, affecting a large share of power users running custom Anthropic routing layers. [Link](https://github.com/earendil-works/pi/issues/7161)
4. **#7413 [OPEN] GHE.com Copilot compaction "unknown stamp" error** | 6 comments | An unpatched sibling bug to #6768 that breaks compaction exclusively for GitHub Enterprise GHE.com Copilot seats, while regular chat continues to work, leaving GHE.com users unable to manage long running sessions. [Link](https://github.com/earendil-works/pi/issues/7413)
5. **#7553 [OPEN] Configurable thinking level/model for compaction** | 6 comments | A popular feature request from reasoning model power users, who currently cannot separate the high-cost thinking budget assigned to session compaction from regular chat turns, wasting expensive reasoning tokens on routine summarization tasks. [Link](https://github.com/earendil-works/pi/issues/7553)
6. **#7465 [OPEN] Add payload size to iTerm2 inline images** |7 comments | This breakage stops Pi from rendering inline images on xterm.js 0.9.0+ terminals (the current stable release), which silently reject OSC 1337 sequences missing the declared decoded byte size parameter. [Link](https://github.com/earendil-works/pi/issues/7465)
7. **#7508 [CLOSED] Copilot OAuth refresh no timeout causes 5 minute freezes** |5 comments | A critical stability bug that stalled token refreshes would hold a cross-process credential store lock and freeze Pi sessions for 5 full minutes, a major pain point for users on flaky or corporate restricted networks. The fix was merged yesterday. [Link](https://github.com/earendil-works/pi/issues/7508)
8. **#7594 [CLOSED] node:sqlite missing from release binaries breaking plugins** |4 comments | A post-0.83.0 build bug that broke all extensions relying on the Node.js node:sqlite module, including the widely used `pi-total-recall` session history plugin. [Link](https://github.com/earendil-works/pi/issues/7594)
9. **#7560 [CLOSED] Grok 4.5 missing from Copilot Business model list** |5 comments | A recent provider bug that prevented eligible Copilot Business subscribers from accessing X’s newly rolled out Grok 4.5 model, resolved yesterday. [Link](https://github.com/earendil-works/pi/issues/7560)
10. **#7628 [CLOSED] 0.83.0 shrinkwrap pins vulnerable undici and brace-expansion** |1 comment | A community-reported security issue that flags two out-of-date, vulnerable transitive dependencies in the latest published Pi package, prompting a scheduled patch release to bump affected packages. [Link](https://github.com/earendil-works/pi/issues/7628)

## 4. Key PR Progress
1. **#7624 [OPEN] feat(coding-agent): render Mermaid diagrams** | Adds native Mermaid diagram rendering for markdown outputs, closing the community request to view generated architecture and flow diagrams directly in the terminal without switching to external tools. [Link](https://github.com/earendil-works/pi/pull/7624)
2. **#7612 [OPEN] fix(tui): add size param to iterm2 image encoder** | Resolves the xterm.js 0.9.0+ inline image breakage reported in #7465 by adding the required decoded byte count parameter to all OSC 1337 image sequences. [Link](https://github.com/earendil-works/pi/pull/7612)
3. **#7602 [OPEN] feat(coding-agent): configurable summarization models** | Implements the #7553 feature request, letting users assign separate low-cost models and custom thinking levels to compaction and branch summary tasks to cut wasted token spend on reasoning models. [Link](https://github.com/earendil-works/pi/pull/7602)
4. **#7571 [CLOSED] feat(ai): add built-in Cortecs provider** | Adds first-class support for Cortecs, a European AI routing platform similar to OpenRouter, expanding Pi’s catalog of geographically compliant LLM providers for EU-based developer teams. [Link](https://github.com/earendil-works/pi/pull/7571)
5. **#7610 [OPEN] feat(ai): add LLM Gateway and LLM Gateway DevPass providers** | Integrates the popular LLM Gateway aggregator as two new official providers, adding support for thousands of additional open source and commercial model endpoints. [Link](https://github.com/earendil-works/pi/pull/7610)
6. **#7599 [CLOSED] rpc over sockets** | Adds a new `--listen` flag that exposes Pi’s typed RPC interface over unix sockets or TCP, enabling tight integration with external web UIs, automation tools, and daemonized Pi deployments. [Link](https://github.com/earendil-works/pi/pull/7599)
7. **#7619 [OPEN] feat(coding-agent): resume failed turn by selecting it in /tree** | Adds a quality of life feature that lets users retry dropped or failed requests directly from the `/tree` session history view, no prompt retyping required. [Link](https://github.com/earendil-works/pi

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-08-05
*Source: github.com/QwenLM/qwen-code*

---

## 1. Today's Highlights
Today’s most impactful update is the official stable release of v0.21.5, which ships a long-awaited opt-in migration path for macOS users to seamlessly move from the legacy Electron desktop app to the new high-performance Tauri shell. The Qwen Code developer community is advancing a core proposed architecture for a trustworthy, LLM-isolated agent runtime that moves all trust constraints to the execution layer outside the model’s access scope. A wave of targeted UX, security hardening, and ACP IDE integration fixes are also landing to stabilize the 0.21.x release cycle for production use.

## 2. Releases
Two new builds were published in the last 24 hours:
- **v0.21.5 (stable)**: The flagship release adds the one-time macOS Electron→Tauri update migration bridge ([#8392](https://github.com/QwenLM/qwen-code/pull/8392)) with no manual user reinstall required, plus dozens of targeted bug fixes for core session and web shell behavior.
- **v0.21.4-nightly.20260804.d6f55a1c9**: The development preview adds granular execution outcome tracking for tool calls, plus a partial fix for web-shell table dialog rendering crashes.

## 3. Hot Issues (Top 10 Notable)
| Issue | Priority & Impact | Community Context |
|-------|-------------------|-------------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) P3: Proposal for deterministic tool-execution boundaries for a trustworthy agent runtime | Core architecture, security | 17 active comments: the most widely discussed thread today, where core maintainers are collaborating on a roadmap to isolate the LLM entirely from the system trust boundary for auditable, constrained agent actions. |
| [#8519](https://github.com/QwenLM/qwen-code/issues/8519) P2: Severe screen flickering in Linux tmux sessions | UI/UX, interactive CLI | 11 comments: a newly filed high-impact bug breaking headless terminal use for Linux users, with community contributors already sharing reproduction steps. |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) P2: Bounded multi-workspace daemon resource usage tracking | Performance, production deployment | 9 comments: shared enterprise deployers report unconstrained daemon memory allocation regularly crashes multi-tenant `qwen serve` instances. |
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) P2: Provider warning sanitizer leaks `@`-containing passwords and truncates messages with ports | Security | 6 comments: a high-severity security bug exposing user credentials in status API responses, tagged for immediate patch in the next point release. |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) P2: Subsequent turns are not written to the local session transcript after APIUserAbortError | Core functionality | 5 comments: breaks both audit logging and session resume workflows after users interrupt an in-progress generation. |
| [#8493](https://github.com/QwenLM/qwen-code/issues/8493) P2: Cancelled file tools can still mutate the filesystem | Data safety | 5 comments: a critical bug leading to unintended overwrites of user files even after a user aborts a write/edit tool call. |
| [#4362](https://github.com/QwenLM/qwen-code/issues/4362) P2: Add opt-in "Auto Fix CI & Address Review Comments" workflow for active PRs | Developer productivity | 5 comments, 2 upvotes: a popular feature request to extend the existing autofix system to automatically address CI failures and PR review comments without manual maintainer intervention. |
| [#8544](https://github.com/QwenLM/qwen-code/issues/8544) P2: ACP task list (plan updates) not rendered in JetBrains | IDE integration | 3 comments: blocks JetBrains AI Assistant users from viewing live multi-step task progress, a parity gap compared to competing agents like Claude Code. |
| [#8538](https://github.com/QwenLM/qwen-code/issues/8538) P2: Copy-response button non-functional on Windows 10 desktop | UX | 3 comments: widespread user frustration breaking one-click copying of assistant outputs for all Windows desktop users. |
| [#8527](https://github.com/QwenLM/qwen-code/issues/8527) P2: Wrapped timeout errors drop original error code and never trigger auto-retry | Reliability | 3 comments: causes avoidable total request failures on flaky networks where retry logic would normally recover transient timeouts. |

## 4. Key PR Progress (Top 10)
| PR | Author | What it delivers |
|----|--------|------------------|
| [#8392](https://github.com/QwenLM/qwen-code/pull/8392) | yiliang114 | Implements the macOS one-time migration bridge that automatically updates legacy Electron desktop app users to the new Tauri shell without manual installation. |
| [#8496](https://github.com/QwenLM/qwen-code/pull/8496) | wenshao | Fixes web shell UX to allow read-only commands `/stats`, `/about` and `/context` to execute immediately mid-generation, instead of silently swallowing user input while streaming. |
| [#8396](https://github.com/QwenLM/qwen-code/pull/8396) | wenshao | Closes 4 separate trust boundary holes in the hook execution system, including blocking unapproved HTTP redirects and fixing SSRF vulnerabilities in custom repository hook configurations. |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | DragonnZhang | Adds first-class authentication presets for Kimi and Xiaomi MiMo third-party LLM providers, eliminating manual configuration steps for users of these popular Chinese models. |
| [#8439](https://github.com/QwenLM/qwen-code/pull/8439) | chiga0 | Restores native terminal UX in virtual viewport mode: Ctrl+click to open hyperlinks, and right-click to access the system terminal context menu, two capabilities that were broken when SGR mouse tracking was enabled. |
| [#8490](https://github.com/QwenLM/qwen-code/pull/8490) | wenshao | Optimizes PR review CI test runs to only execute tests from the modified diff's reverse-dependency closure, cutting average review runtime by ~70% and reducing cloud CI costs. |
| [#8455](https://github.com/QwenLM/qwen-code/pull/8455) | chiga0 | Fixes a longstanding UX gap: the resume session command hint is now printed directly to the main terminal buffer on exit, instead of being discarded when the alternate terminal buffer closes. |
| [#8320](https://github.com/QwenLM/qwen-code/pull/8320) | qqqys | Adds cooperative pause/resume functionality to dynamic workflows, letting admins halt multi-agent runs for maintenance without discarding in-progress work and task state. |
| [#8482](https://github.com/QwenLM/qwen-code/pull/8482) | wenshao | Resolves a deterministic test failure on main for MCP auto-reconnect logic, where never-delivered MCP calls were incorrectly treated as duplicate replays. |
| [#8350](https://github.com/QwenLM/qwen-code/pull/8350) | rockybot2026 | Adds an explicit allowlist for private, on-prem ASR base URLs, enabling enterprise deployments to route voice transcription through internal self-hosted services while maintaining security guardrails. |

## 5. Feature Request Trends
The most requested feature directions from recent issues fall into four clear buckets:
1. **ACP IDE parity**: Users are pushing for full feature parity with competing ACP agents (Claude Code, Codex) for JetBrains and other IDE integrations, including live task list rendering, context usage metrics display, and configurable 5-tier reasoning effort settings.
2. **Agent runtime hardening**: The trust-isolated deterministic execution runtime proposal has emerged as the most-discussed long-term roadmap priority from core contributors.
3. **Enterprise QoS**: A growing volume of requests for bounded multi-workspace daemon resource limits, self-hosted CI runner optimizations, and private service allowlists points to fast expanding enterprise self-hosted adoption.
4. **Third-party extensibility**: Users are requesting support for executing hooks from third-party Claude-ecosystem extensions, to unlock the full catalog of community-built plugins.

## 6. Developer Pain Points
Recurring high-frequency frustrations across the issue backlog:
1. **Broken prompt cache efficiency**: The size-triggered microcompaction feature repeatedly rewrites conversation history past the 500k character threshold, destroying provider-side prompt caching gains and drastically increasing runtime cost for long-running sessions.
2. **Unbounded daemon memory**: The default `qwen serve` configuration allocates 50% of total host memory to every individual ACP child process, never dividing that pool by child count, leading to random OOM crashes on multi-tenant shared deployments.
3. **Resume functionality hazards**: The `--resume` feature has multiple unresolved edge case bugs, including restoring dangling unsigned trailing thought states that were already patched for live sessions, and missing persisted session turns after user aborts.
4. **Web shell authentication frictions**: Session navigation, secondary workspace artifact access control, and mid-turn input handling are recurring sources of UX regressions in recent 0.21.x pre-releases.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-08-05
*Upstream project: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (CodeWhale)*

---

## 1. Today's Highlights
This 24-hour window covers 13 recently updated issues and 29 pull request changes for the DeepSeek TUI project. Maintainers published a formal v0.9.5 build optimization epic to resolve longstanding complaints about the 682k+ line monolithic TUI crate's excessive compile times, targeting end-to-end improvements for edit, test, and release workflows. The v0.9.4 release train also advanced to 77 commits ahead of the main branch, shipping new runtime API capabilities, subagent checkpoint resume functionality, and MCP registry integration.

## 2. Releases
No new official public releases were published in the last 24 hours. The v0.9.4 release train (PR #5135) remains in pre-merge validation ahead of general availability.

## 3. Hot Issues
1. **#4978: Intermittent Anthropic API 400 error for OpenModel compatible providers**  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4978) | Breaks third-party Anthropic-compliant provider integrations with random, non-reproducible failures, 6 community users have confirmed reproduction, making it a high-priority fix for multi-provider users.
2. **#4991: Community discussion on TUI monolith compilation times**  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4991) | Sparked cross-contributor feedback on slow local build loops, and directly led to the formalization of the v0.9.5 performance epic.
3. **#4955: Request for zero-sandbox / --no-sandbox local development mode**  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4955) | 4 comments and 1 upvote from power users, noting the kernel-level Seatbelt sandbox breaks common local shell operations even on fully trusted personal machines with no viable existing workaround.
4. **#5209: File edit tool silently accepts invalid parameters and returns fake success**  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5209) | Creates silent failures for code modification workflows, requiring users to re-edit files 3-5 times per change to get the expected result.
5. **#5241: Pricing endpoint returns 503, all sessions show `unverified_live_pricing`**  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5241) | Breaks cost tracking completely for users that upgraded from v0.8.67 to v0.9.3, with no visible per-session token or expense data across all connected providers.
6. **#5239: 1M-context models incorrectly trigger compression at the 128K limit**  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5239) | Wastes native long-context capacity for DeepSeek and other 1M+ token models, forcing unnecessary context truncation for large document/codebase workloads.
7. **#5249: Epic: v0.9.5 build-time lane to eliminate monolith compile tax**  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5249) | Top maintainer-led priority initiative to restructure the single 620-file/682k-line TUI crate into smaller modular components to cut recompile overhead.
8. **#5245: Local git commit forces full TUI/CLI rebuilds with no source changes**  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5245) | Causes 1-2 minute unnecessary rebuilds after every local commit, severely reducing daily contributor velocity.
9. **#5244: Unknown model IDs silently fall back to 128K legacy context default**  
   [Link](https://github.com/Hmbown/CodeWhale/issues/5244) | Root cause of the #5239 context limitation bug, creates untransparent behavior that makes debugging custom model deployments extremely difficult.
10. **#5243: OAuth login requires manual second provider picker step after token generation**  
    [Link](https://github.com/Hmbown/CodeWhale/issues/5243) | Breaks xAI and ChatGPT/Codex onboarding flows, creating unnecessary friction for new users connecting third-party model accounts.

## 4. Key PR Progress
1. **#5135: v0.9.4 release train integration**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5135) | Consolidates 77 pre-release commits ahead of main, superseding the earlier v0.9.4 candidate branch for the next stable public release.
2. **#5242: Resume interrupted child agents from checkpoints via followup action**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5242) | Eliminates the requirement to fully restart long-running tasks (document review, multi-step code search) that were interrupted mid-execution.
3. **#5229: Add Chinese (zh-CN) Windows beginner guide**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5229) | Expands onboarding accessibility for Chinese-speaking Windows users, with fully validated installation, configuration, and troubleshooting content.
4. **#5225: Expose file/search/git/patch/shell tools over the ACP `session/prompt` endpoint**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5225) | Enables full non-chat agent functionality for third-party editor integrations including Zed and community ACP DeepSeek adapters.
5. **#5133: Expose persistent goal-loop state and completion controls via runtime API**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5133) | Lets managed desktop/web clients read active agent goal state and drive lifecycle transitions programmatically.
6. **#5240: Surface real elapsed wait time in shell tool output**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5240) | Prevents the model from misjudging long-running shell task statuses and reduces unnecessary busy polling of short-running commands.
7. **#5238: Add MCP Registry discovery with registry-first tool selection policy**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5238) | Automatically finds and uses zero-configuration public MCP servers before falling back to manual shell execution, improving agent tool reliability.
8. **#5234: Disable alternate scroll mode when mouse capture is active**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5234) | Resolves the widely reported bug where mouse/trackpad scrolling failed to move the TUI conversation transcript, and instead incorrectly navigated input history.
9. **#5095: Re-quote Windows linker arguments that contain spaces for OpenHarmony targets**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/5095) | Fixes build failures when the OpenHarmony SDK is installed in the default spaced path (e.g. `D:\DevEco Studio\...`).
10. **#5228: Rebase TUI rail unification stack onto the v0.9.4 release train**  
    [Link](https://github.com/Hmbown/CodeWhale/pull/5228) | Merges 12 commits of TUI panel UI consistency improvements

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*