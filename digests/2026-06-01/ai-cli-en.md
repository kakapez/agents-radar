# AI CLI Tools Community Digest 2026-06-01

> Generated: 2026-05-31 23:00 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report | 2026-06-01
*For technical decision-makers and developer teams*

---

## 1. Ecosystem Overview
As of June 2026, the 9 tracked AI code CLI tools have reached a mature post-innovation inflection point, shifting core development priorities from demonstrating basic agent tool execution functionality to targeted reliability hardening, enterprise workflow parity, cross-platform compatibility, and reduction of unintended side effects from autonomous agent operation. Both large vendor-backed and independent open source projects are now prioritizing fixing long-standing user pain points over chasing headline LLM model integration features. A fast-growing share of high-impact bug fixes and feature implementations are now community-contributed, even for commercial closed-source tools. The ecosystem is also increasingly optimizing for underserved non-Western regional developer segments, rather than defaulting to English-only, Western market use case assumptions.

## 2. Activity Comparison
| Tool Name | New 24h Release | Tracked High-Priority Active Issues | Merged/Updated PRs (24h) | Activity Context Note |
|---|---|---|---|---|
| Claude Code | v2.1.159 (internal infrastructure only) | 10 | 0 | No user-facing public code changes; zero recent engineering activity in the public repository |
| OpenAI Codex | rust-v0.136.0-alpha.2 (Rust port pre-release) | 10 | 10 | Engineering teams triaged 50+ total active community issues in the window |
| Gemini CLI | No new public release | 10 | 10 | All work focused on merging critical P1 bug fixes for post-v0.33.0 breakages |
| GitHub Copilot CLI | v1.0.57-4 (stability quality-of-life patch) | 10 | 0 | Full engineering bandwidth dedicated to triaging widespread regressions from the recent v1.0.56 release |
| Kimi Code CLI | No new public release | 10 | 2 | Only two community-authored high-priority fix PRs are active |
| OpenCode | v1.15.13 (stable feature + bugfix) | 10 | 10 | Core team crowdsources heap snapshots via a public memory leak megathread |
| Pi | No new public release | 10 | 10 | 27 total merges across bug fix and feature PRs focused on provider compatibility |
| Qwen Code | v0.17.0-nightly.20260531 (pre-release) | 10 | 4 | Active development of daemon mode observability for enterprise self-hosted deployments |
| CodeWhale (DeepSeek TUI) | v0.8.48 (full project rebrand finalization) | 10 | 10 | 14 total merges focused on expanding test coverage across core modules |

## 3. Shared Feature Directions
These high-priority requirements appear across multiple independent tool communities:
1. **Granular permission and security hardening**: Requested for Codex (`.codexignore` for sensitive file exclusion), CodeWhale (typed persistent execution permission rules), Gemini CLI (destructive operation guardrails), and Copilot CLI (preToolUse hook validation for unsafe executions). Specific needs include scoped permanent allow/deny rules, deterministic secret redaction, and explicit user controls for high-risk autonomous agent actions.
2. **Cross-surface MCP configuration parity**: Prioritized by Claude Code (third-party provider customization), OpenAI Codex (CLI/VS Code/desktop config parity), and Gemini CLI (RFC 9728 MCP OAuth compliance). Users require shared repo-level committed MCP configurations that work seamlessly across all app surfaces without manual reconfiguration for distributed team workflows.
3. **Robust session persistence and management UX**: Requested for OpenCode (archive/unarchive UX), Codex (permanent thread deletion), Copilot CLI (orphaned session bulk cleanup), and Pi (ephemeral by default in-session setting changes). Users want no silent data loss on session resume, easy bulk cleanup of stale historical sessions, and prevention of accidental overwrites of global settings from temporary in-session adjustments.
4. **Non-English localization and regional usability**: Prioritized by CodeWhale (Simplified Chinese i18n), Qwen Code (user-configurable output language), and Claude Code (Japanese UI localization). Common pain points addressed include elimination of forced C locale that strips non-ASCII characters, full correct CJK text rendering, and region-aware web search providers for non-Western users.
5. **Enterprise observability and usage controls**: Requested for Codex (status line credit balance visibility), Claude Code (programmatic credit API access), and Qwen Code (OpenTelemetry tracing for daemon deployments). Self-hosted enterprise teams require programmatic access to usage data, credit balance alerts, and distributed tracing for shared internal agent infrastructure.

## 4. Differentiation Analysis
### Feature Focus Differences
- Closed-source first-party tools (Claude Code, OpenAI Codex, GitHub Copilot CLI) prioritize native integration with their parent company’s existing cloud, IDE, and git ecosystems, and deliver centrally managed enterprise admin controls for large managed team deployments.
- Regionally focused and open source APAC tools (Kimi Code, Qwen Code, CodeWhale) prioritize local/self-hosted model compatibility, regional user experience fixes, and OpenAI-compatible API interoperability to serve offline-first teams and fast-growing non-Western developer bases.
- Fully independent open source tools (OpenCode, Pi) prioritize maximum extensibility, custom LLM provider support, and zero vendor lock-in, with unique features like native dynamic workflow specification and official reference extension libraries.
### Technical Approach Differences
- OpenAI Codex is uniquely executing a full rewrite of its core runtime from TypeScript to Rust to eliminate memory bloat and improve performance, no other tracked tool is pursuing this full scale port.
- CodeWhale uses a full Rust TUI stack with a focus on 100% test coverage for core modules, prioritizing runtime stability over rapid new feature rollouts.
- Qwen Code is building unique end-to-end OpenTelemetry tracing support for shared daemon deployments, the only tool in the set explicitly targeted for large on-premise enterprise multi-user instances.
- Claude Code relies almost entirely on internal backend infrastructure updates, with no public client-side code changes visible for multi-day stretches.

## 5. Community Momentum & Maturity
1. **Highest maturity, largest active user bases**: OpenAI Codex and GitHub Copilot CLI. Codex has 50+ active daily triaged issues and a massive enterprise VS Code business tier user base, while Copilot CLI’s recent v1.0 stable release generated a flood of user-reported regressions that signal very high daily active usage.
2. **Rapidly iterating high-engagement power user communities**: Pi, CodeWhale, Qwen Code, and OpenCode. All four ship multiple patches and new features daily, with crowdsourcing initiatives (like OpenCode’s memory leak megathread) and large volumes of community-contributed code indicating highly dedicated power user ecosystems.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-06-01)
---
## 1. Top Skills Ranking
Ranked by community impact, active update recency, and alignment with high-discussion open issues:
1. **agent-creator meta-skill** ([PR #1140](https://github.com/anthropics/skills/pull/1140)): Automates building task-specific custom agent sets, fixes broken multi-tool evaluation logic, and adds native Windows path support for core skill validation scripts. It directly addresses the popular open community request #1120 for simplified custom agent orchestration. Current status: Open, last updated 2026-05-31.
2. **testing-patterns skill** ([PR #723](https://github.com/anthropics/skills/pull/723)): Delivers end-to-end standardized guidance for the full testing stack, including unit test AAA patterns, React component testing best practices, and E2E test strategy aligned to the Testing Trophy framework. It fills a widely reported gap for consistent test workflow enforcement for Claude Code code generation outputs. Current status: Open, last updated 2026-04-21.
3. **ServiceNow platform skill** ([PR #568](https://github.com/anthropics/skills/pull/568)): A full-featured enterprise assistant covering ServiceNow use cases spanning ITSM, SecOps, ITAM, FSM, and IntegrationHub for platform admins. It is one of the most requested purpose-built enterprise workflow skills targeted at large Claude for Enterprise deployments. Current status: Open, last updated 2026-04-23.
4. **AURELION cognitive memory skill suite** ([PR #444](https://github.com/anthropics/skills/pull/444)): A 4-part structured framework of skills for structured thinking templates, persistent cross-conversation agent memory, and enterprise knowledge management. It addresses long-running community demand for native persistent context for Claude agents that does not rely on external plugins. Current status: Open, last updated 2026-05-06.
5. **skill-quality-analyzer + skill-security-analyzer meta-skills** ([PR #83](https://github.com/anthropics/skills/pull/83)): Automated validation tools that score submitted community Skills across 5 dimensions of quality, documentation, and security to catch malicious or low-quality submissions pre-publication. It is a direct mitigation for the top security vulnerability documented in Issue #492 around unvetted community skills impersonating official Anthropic assets. Current status: Open, last updated 2026-01-07.
6. **Masonry image & video generation skill** ([PR #335](https://github.com/anthropics/skills/pull/335)): Native integration with Masonry AI to generate Imagen 3.0 text-to-image and Veo 3.1 text-to-video outputs directly within Claude Code conversations, extending support for full multimodal creative workflows. Current status: Open, last updated 2026-03-14.
7. **n8n automation skill suite** ([PR #190](https://github.com/anthropics/skills/pull/190)): Two production-tested skills for building, debugging, and optimizing low-code n8n automation workflows, paired with a FAF persistent project context skill for cross-conversation project state sync. It addresses high demand for no-code/low-code workflow automation support for non-technical enterprise users. Current status: Open, last updated 2026-05-18.

---
## 2. Community Demand Trends
Distilled from top commented public Issues:
1. **Enterprise skill distribution tooling**: The #1 most discussed request is native org-wide skill sharing (Issue #228) that eliminates the current clunky manual workflow of downloading skill files and manually uploading them to teammate instances via Settings. Users are asking for centralized shared org skill libraries and one-click shareable skill links.
2. **Polished skill creation and validation workflows**: Multiple top issues document broken core tooling including 0% trigger rate bugs in the official run_eval.py script, duplicate skills being loaded across overlapping plugin installs, and low token-efficiency default skill-creator guidance.
3. **Cross-platform and cloud provider compatibility**: High unmet demand exists for native Windows support for all skill CLI utilities, AWS Bedrock skill interoperability, and pre-built official skills for widely used enterprise platforms including SAP and SharePoint Online.
4. **MCP interoperability**: Users are requesting standardized conversion paths for existing Skills to the Model Context Protocol, plus built-in optimizations to prevent context window bloat from excess MCP return data.

---
## 3. High-Potential Pending Skills
These actively updated PRs resolve widely reported pain points and are on track to merge in the near term:
1. **Windows skill-creator bug fix set** ([PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1099](https://github.com/anthropics/skills/pull/1099)): The paired 1-line fixes resolve the long-standing run_eval.py subprocess crash and missing .cmd path handling issues that make the entire skill creation workflow completely unusable on Windows 11. Both PRs received updates on 2026-05-24.
2. **Core document skill robustness patches** ([PR #538](https://github.com/anthropics/skills/pull/538), [PR #541](https://github.com/anthropics/skills/pull/541)): These low-risk patches fix common case-sensitivity broken references in the PDF skill, and prevent DOCX document corruption from w:id ID collisions between tracked changes and existing user bookmarks. Both are targeted patches for the most widely used official Skills.
3. **Official CONTRIBUTING.md documentation** ([PR #509](https://github.com/anthropics/skills/pull/509)): This documentation addition closes Issue #452, raises the repo's 25% GitHub community health score, and delivers clear structured guidance for new community skill contributors.

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community’s most concentrated demand at the Skills level is for production-grade, security-audited enterprise workflow automation and administrative tooling, paired with standardized guardrails for skill distribution, validation, and cross-platform compatibility to support large-scale organizational deployment of custom private skill ecosystems.

---

# Claude Code Community Digest | 2026-06-01
---
## 1. Today's Highlights
Anthropic released a new minor v2.1.159 build in the last 24 hours that exclusively includes internal infrastructure updates with no user-facing feature or bug fixes. The community’s top unresolved concern remains the year-long broken permission matching system, which has 30+ linked open issues and no meaningful staff engagement since September 2025. A wave of newly reported cross-platform tool result delivery bugs are breaking parallel workflow reliability for both macOS and Linux users.

## 2. Releases
- **v2.1.159**: The latest public release contains no user-facing changes, consisting entirely of internal infrastructure improvements for Anthropic’s backend deployment pipelines.

## 3. Hot Issues
| Issue | Summary | Context & Community Reaction |
|---|---|---|
| [#30519](https://github.com/anthropics/claude-code/issues/30519) | Permissions matching system is fundamentally broken | The highest-engagement open issue (23 comments, 73 👍), with 30+ linked related reports and only one non-actionable staff comment posted in September 2025. The community is now building custom permission pre-processing workarounds to avoid unprompted file access blocks. |
| [#63797](https://github.com/anthropics/claude-code/issues/63797) | Intermittent empty Bash/Read tool returns on Linux | 10 comments, reproducible independent of session concurrency, with successful commands returning empty content to the model before being redundantly flushed later. Breaks long-running debug and deployment sessions. |
| [#63966](https://github.com/anthropics/claude-code/issues/63966) | Late/out-of-order tool result flushes on macOS Opus 4.8 | 6 👍, affects all parallel tool calls including MCP and advisor workflows, causing UI desync and agent logic failures that require manual user correction. |
| [#63887](https://github.com/anthropics/claude-code/issues/63887) | Agent spams no-op `echo sN` probe commands to flush laggy shell output | 13 👍, one of the top-voted recent bug reports, where the model can emit dozens of throwaway echo or sleep commands wasting tokens and extending session run times for no productive purpose. |
| [#60707](https://github.com/anthropics/claude-code/issues/60707) | False "Usage credits required" error blocking access to 1M context Sonnet | Closed duplicate bug, 7 👍, affecting users on v2.1.145 who had already enabled usage credits for extended context windows and were incorrectly locked out of large context workflows. |
| [#46416](https://github.com/anthropics/claude-code/issues/46416) | Third-party Anthropic-compatible providers get hardcoded 200k token context limits | 3 👍, blocks self-hosted and third-party model users (e.g. MiniMax) from accessing their model’s full advertised context window, restricting custom inference workflow utility. |
| [#64346](https://github.com/anthropics/claude-code/issues/64346) | Single benign parallel tool error cancels all sibling calls in a batch | Newly filed bug, where any minor error in a parallel tool batch cancels all remaining pending calls, causing the agent to misinterpret the shell as broken and enter inefficient recovery loops. |
| [#54647](https://github.com/anthropics/claude-code/issues/54647) | `disableAutoUpdates` flag locks entire third-party inference configuration UI | Open invalid bug, where users who disable automatic updates for stability testing are fully blocked from modifying custom provider and model settings with no documented workaround. |
| [#47574](https://github.com/anthropics/claude-code/issues/47574) | No programmatic organization API credit balance exposure in status line scripts | 7 👍, highly requested enhancement for pay-as-you-go enterprise users who have no automated way to monitor remaining credit to avoid unexpected service outages mid-workflow. |
| [#63138](https://github.com/anthropics/claude-code/issues/63138) | Garbled non-Latin symbol text output in macOS VSCode integrated TUI | 3 comments, breaks readability of embedded Claude Code CLI sessions for developers working exclusively inside VSCode environments. |

## 4. Key PR Progress
No pull requests were opened, merged, or updated in the 24-hour reporting window. No public code changes are visible in the repository’s recent activity log.

## 5. Feature Request Trends
The top community requested feature directions distilled from recent issues are:
1. Accessibility enhancements: Native text-to-speech voice output support for Cowork and Claude Code session workflows
2. Third-party provider customization: Native auto-detection of context window limits for custom Anthropic-compatible inference providers, and full exposed model configuration controls for dynamic subagent orchestration workflows
3. Enterprise admin tooling: Exposed organization API credit balance data for status line hooks and admin reporting APIs
4. Globalization: Full localization support for non-English UI languages including Japanese
5. Documentation clarity: Explicit, unambiguous specification of CLAUDE.md file concatenation order and priority logic

## 6. Developer Pain Points
Recurring high-frequency frustrations reported across recent issues include:
1. Unresolved multi-platform tool delivery bugs spanning empty results, late out-of-order flushes, cascade cancellation, and spammy echo probes that make parallel workflow execution highly unreliable
2. Years-long unaddressed core permission matching system breakage that Anthropic engineering has not acknowledged or prioritized, forcing the community to build and maintain custom workarounds
3. Inconsistent cost and usage tracking: Drifting weekly usage limit reset timelines that shift 2-3 days forward each week, unexpected excess token burn with non-Anthropic subagents, and no programmatic credit monitoring tools
4. Plugin ecosystem breakages: Auto-update workflows that fail to sync the `installed_plugins.json` manifest, leaving hooks pinned to stale file paths, and incorrect project-specific install path selection for multi-repo workspaces
5. Unnecessary UI locks for power users: Users who disable auto-updates for stability testing are incorrectly locked out of custom third-party inference configuration panes

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-01
---
## 1. Today's Highlights
This 24-hour window delivers a new Rust pre-release build of the Codex runtime, critical progress on resolving the highest-voted community bug of excessive unexpected token consumption for VS Code extension enterprise users, and the final phases of a large infrastructure rollout for cloud-managed enterprise configuration controls. OpenAI engineering teams triaged nearly 50 active community issues, while advancing core sandbox reliability, multi-agent runtime consistency, and Model Context Protocol (MCP) parity improvements across CLI, desktop, and IDE extension surfaces.

## 2. Releases
**rust-v0.136.0-alpha.2**: New pre-release tag for the ongoing Rust port of the Codex core CLI execution engine, targeted at early adopters testing native performance and memory efficiency improvements over the existing TypeScript runtime. No full public changelog was published for this alpha build in the reporting window.
> https://github.com/openai/codex/releases/tag/rust-v0.136.0-alpha.2

## 3. Hot Issues (Top 10 Notable)
1. **[#14593] Burning tokens very fast**: With 593 comments and 261 👍, this is the highest-activity open bug: VS Code Business tier extension users report unprompted rapid token depletion even during idle sessions, resulting in unpredictable over-billing. Enterprise teams have been testing user-submitted workarounds for 3+ months waiting for an official root cause fix.
> https://github.com/openai/codex/issues/14593
2. **[#2847] Add a mechanism to exclude sensitive files**: The highest-voted open enhancement request (396 👍), users are pushing for a `.codexignore` repo-local and global ignore system to explicitly block private secrets, PII, or restricted files from being read and sent to Codex models, addressing the top user security concern for repository-level agent work.
> https://github.com/openai/codex/issues/2847
3. **[#8745] Auto-detect + auto-install LSP integration for Codex CLI**: 360 👍, this popular feature request asks for built-in Language Server Protocol support that lets Codex pull live compiler diagnostics and symbol metadata from local language servers, to generate far more accurate, syntactically valid code edits without manual LSP setup.
> https://github.com/openai/codex/issues/8745
4. **[#14860] Error running remote compact task**: 89 comments 68 👍, this bug breaks context compression for Pro tier Linux CLI users running gpt-5.4, making large repository work impossible as the agent cannot trim context windows to fit model limits.
> https://github.com/openai/codex/issues/14860
5. **[#6465] MCP servers not detected in Codex VS Code extension**: 54 comments, MCP tool configurations that work fully in Codex CLI fail to load in the VS Code extension, breaking all custom MCP workflows for developers using Codex directly in their IDE.
> https://github.com/openai/codex/issues/6465
6. **[#18258] macOS Codex app shows "Computer Use plugin unavailable"**: 38 comments 41 👍, the flagship Computer Use skill is broken for macOS desktop users; the community has shared a widely circulated manual config workaround while waiting for an official patched release.
> https://github.com/openai/codex/issues/18258
7. **[#13025] Project-level .codex/config.toml MCP servers ignored in Codex Desktop**: 18 comments 35 👍, shared team MCP configs committed to repo-level Codex configuration files fail to load, forcing every team member to manually redefine MCP servers in their global user config.
> https://github.com/openai/codex/issues/13025
8. **[#25201] "Copy as Markdown" disappeared from the Codex Desktop copy menu**: 22 👍, this recent regression in the 26.527 desktop build breaks a core UX workflow for users that rely on copying formatted Codex output directly to documentation, support tickets, and team chat tools.
> https://github.com/openai/codex/issues/25201
9. **[#25203] GitHub OAuth callback fails with "Unable to find Electron app" on Windows**: 16 comments, this bug fully breaks GitHub integration for Windows desktop users, preventing repository context sync and git operation support.
> https://github.com/openai/codex/issues/25203
10. **[#25453] Windows Codex Desktop spawns powershell.exe every second causing high CPU usage**: Newly reported critical performance bug, users see 100%+ idle CPU utilization on Windows machines due to unnecessary repeated full process polling.
> https://github.com/openai/codex/issues/25453

## 4. Key PR Progress (Top 10)
1. **[#25457] Cache remote plugin catalog for suggestions**: This PR adds persistent caching of OpenAI's curated global remote plugin catalog, warming it on app startup to cut latency for plugin installation and discovery workflows.
> https://github.com/openai/codex/pull/25457
2. **[#24622] Switch runtime to cloud config bundle**: The final PR in the 5-part enterprise cloud-managed config stack, this change lets IT admins centrally distribute Codex settings, access rules, and feature flags across all team/enterprise endpoints instead of relying only on local user config.
> https://github.com/openai/codex/pull/24622
3. **[#24812] Show enterprise monthly credit limits in status**: Adds new visibility to the CLI `/status` command that surfaces allocated monthly enterprise credit limits and current spend, eliminating the need for users to manually navigate to the OpenAI billing portal to check usage.
> https://github.com/openai/codex/pull/24812
4. **[#25450] Remove legacy SandboxPolicy from production core**: Cleans up deprecated compatibility sandbox code, replacing it with a standardized canonical `PermissionProfile` model for more granular, reliable filesystem and network access control.
> https://github.com/openai/codex/pull/25450
5. **[#25351] Lock multi-agent runtime version per thread**: Fixes a long-running consistency bug where resumed or forked old threads would inherit new multi-agent runtime feature flags, resulting in unexpected broken behavior for existing saved workflows.
> https://github.com/openai/codex/pull/25351
6. **[#25427] Select multi-agent version from model info**: Ties multi-agent system behavior directly to the official model catalog entry for the selected LLM, eliminating feature flag drift between model versions and runtime logic.
> https://github.com/openai/codex/pull/25427
7. **[#25018] Add app-server `thread/delete` API**: Implements permanent full thread deletion support that automatically cleans up all linked subagent threads and orphaned metadata left behind by previous archive operations.
> https://github.com/openai/codex/pull/25018
8. **[#25096] Add Goal extension GoalApi**: Creates a public dedicated API for get/set/clear thread goal operations, laying the foundation for third-party extensions to integrate with Codex's automated pursue-goal workflow mode.
> https://github.com/openai/codex/pull/25096
9. **[#25329] TUI keymap support for function keys through F24**: Resolves a long-standing user request by extending the CLI TUI keymap system to support function keys up to F24, enabling common popular keyboard remappings such as mapping Caps Lock to F13 for custom shortcuts.
> https://github.com/openai/codex/pull/25329
10. **[#24982] Honor parent approvals for intercepted execs**: Fixes a major sandbox UX pain point that forced users to manually re-approve every child process of an already user-approved parent command, cutting redundant approval prompts for multi-step command chains.
> https://github.com/openai/codex/pull/24982

## 5. Feature Request Trends
The highest-priority community feature directions this window are:
1. Sandbox and security hardening, led by native `.codexignore` support to block sensitive files from accidental upload to models
2. Native, zero-config LSP integration for Codex CLI that leverages local compiler and language server context to generate higher quality, bug-free code edits
3. Full config parity across CLI, VS Code extension, and desktop app surfaces, specifically for project-level committed MCP server definitions for team shared workflows
4. Granular user-controlled UX toggles for desktop apps, including an option to disable the automatic long-prompt conversion to .txt attachments for power users.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported this window include:
1. An outsized volume of unpatched Windows-specific desktop bugs, covering OAuth callback failures, excessive idle CPU usage, broken chat history post-update, unapplied language localization settings, and TUI scroll rendering inconsistencies compared to macOS and Linux builds
2. Persistent remote context compaction reliability gaps across all platforms and subscription tiers, with frequent stream disconnection errors that break work with large repositories
3. MCP functionality parity gaps: working MCP server configs in CLI do not load in IDE/desktop surfaces, project-level MCP settings are ignored, and inline MCP App UI resources fail to render, breaking third-party tool integrations
4. The open VS Code Business extension unexpected token burn bug, which remains the highest-activity community issue causing unplanned excessive usage and unpredictable billing for enterprise Codex teams.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-01
---
## 1. Today's Highlights
No new public releases were published in the last 24 hours, with all recent activity focused on maintainer triage of backlogged high-priority bugs and final reviews of pending critical core fixes. Top priority P1 fixes for concurrent edit race conditions, PTY memory leaks, and custom gateway auth validation are nearing merge, alongside ongoing work to harden Auto Memory security and resolve widespread agent hanging issues reported by end users. Multiple closed PRs resolved long-standing session resume and configuration loading breakages that affected thousands of post-v0.33.0 users.

## 2. Releases
No new official gemini-cli releases were published in the 24-hour reporting window.

## 3. Hot Issues (Top 10 Notable)
All below issues received new maintainer updates in the last 24 hours:
1. [Issue #21409: Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, 8 👍, 7 comments) – The highest-upvoted user-facing bug on the backlog, where any task that defers to the generalist subagent (including trivial operations like folder creation) hangs indefinitely for up to an hour. The only known workaround requires manually telling the model to never use subagents, breaking default feature behavior for all users.
2. [Issue #24353: Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) (P1, 7 comments) – A core infrastructure epic that builds on the existing 76 behavioral eval tests to add granular per-agent component testing, critical for catching regressions in agent logic before they reach end users.
3. [Issue #22745: Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) (P2, 1 👍, 7 comments) – A cross-team investigation to validate if AST-native tooling can cut down unnecessary tool turns, reduce token noise from over-broad file reads, and drastically improve speed for large codebase navigation tasks.
4. [Issue #22323: Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, 2 👍, 6 comments) – A high-impact logic bug where subagents that hit the maximum allowed turn limit incorrectly report that they fully completed their task successfully, leaving users unaware that their codebase analysis was cut off mid-operation.
5. [Issue #25166: Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166) (P1, 3 👍, 4 comments) – A recurring workflow-breaking hang where non-interactive shell commands that finish running still leave the CLI stuck waiting for user input indefinitely, even for trivial operations like `ls` or `mkdir`.
6. [Issue #26525: Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) (P2, security) – A critical security gap fix that addresses the current flaw where user transcript content is sent to the background Auto Memory extraction model before secret redaction runs, exposing sensitive values to unintended model context.
7. [Issue #22267: Browser Agent ignores settings.json overrides (e.g. maxTurns)](https://github.com/google-gemini/gemini-cli/issues/22267) (P2, 3 comments) – A configuration bug where all user-defined custom settings for the browser subagent (including custom max turn limits, persistent session preferences) are completely ignored, breaking all custom browser workflow setups.
8. [Issue #22093: (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093) (P2, 2 comments) – A post-update regression where users who explicitly disabled all subagents in their config after upgrading to v0.33.0 still see subagents activate unexpectedly, against their documented preference settings.
9. [Issue #20878: [Epic] Server-Driven Model Management](https://github.com/google-gemini/gemini-cli/issues/20878) (P2, customer issue) – A long-planned feature that will replace hardcoded local model lists with a remote fetch via the `LoadCodeAssist` endpoint, eliminating stale local config mismatches and enabling Google to roll out new model routing rules centrally without requiring CLI updates.
10. [Issue #22672: Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672) (P2, 1 👍, 2 comments) – A feature request to add guardrails that block or prompt for confirmation before the agent runs high-risk operations (such as `git --force` resets or destructive database edits) where safer alternatives are available.

## 4. Key PR Progress (Top 10)
1. [PR #27553: fix(cli): add GATEWAY auth type to validateAuthMethod](https://github.com/google-gemini/gemini-cli/pull/27553) (Open, P1, area/security) – Resolves an unhandled error for users using custom `GOOGLE_GEMINI_BASE_URL` environment variables, by adding the new `GATEWAY` auth type to the auth validation logic that was previously missing after the custom base URL feature launched.
2. [PR #27153: fix(core): serialize concurrent edits to the same file](https://github.com/google-gemini/gemini-cli/pull/27153) (Closed, P1, area/agent) – Fixes a high-risk data loss race condition where parallel file edit/write tool calls operating on the same path would overwrite each other's changes, by adding per-file locking to the `EditTool` and `WriteFileTool` implementations.
3. [PR #27147: fix(core): upgrade pty dependencies](https://github.com/google-gemini/gemini-cli/pull/27147) (Closed, P1, area/core) – Upgrades all PTY dependencies to v1.2.0-beta.12 to pull in the upstream fix for a long-standing macOS `/dev/ptmx` file descriptor leak that affected all long-running sessions on Apple Silicon.
4. [PR #27154: fix(core): prevent PTY memory leak by synchronously deleting active entries](https://github.com/google-gemini/gemini-cli/pull/27154) (Closed, P2, area/core) – Moves the active PTY entry deletion operation out of an async `.then()` callback, ensuring PTY resources are immediately garbage collected after sessions close instead of lingering in memory indefinitely.
5. [PR #27371: fix(core): "gemini --resume crash" handle EBADF error when PTY fd is stale on session resume](https://github.com/google-gemini/gemini-cli/pull/27371) (Closed, P1, area/core) – Adds safe handling for the `EBADF` (bad file descriptor) error that triggers a full crash when users try to resume a session with a stale, invalidated PTY handle.
6. [PR #27505: Prevent extra spaces on width-0 CJK continuation cells](https://github.com/google-gemini/gemini-cli/pull/27505) (Open, P2, area/core) – Fixes a rendering bug that injected spurious extra spaces between wide CJK characters in terminal output, which caused broken text formatting and copy-paste errors for East Asian users.
7. [PR #27137: fix(cli): make --skip-trust actually load workspace settings](https://github.com/google-gemini/gemini-cli/pull/27137) (Closed, P2, area/core) – Resolves a long-standing documentation mismatch, ensuring that workspace hooks, extensions, and MCP servers all load as expected when the `--skip-trust` flag is used, rather than being silently dropped.
8. [PR #27329: fix(core): skip missing includeDirectories instead of crashing CLI startup](https://github.com/google-gemini/gemini-cli/pull/27329) (Open, P1/P2, area/core) – Changes the config loading logic so that a single missing/invalid path in the `context.includeDirectories` list does not abort the entire CLI startup, degrading gracefully instead of failing to launch entirely.
9. [PR #27139: fix(core): validate MCP OAuth resources from metadata URL](https://github.com/google-gemini/gemini-cli/pull/27139) (Closed, P2, area/extensions) – Updates MCP OAuth validation to align with RFC 9728 specifications, resolving broken auth flows for custom third-party MCP servers.
10. [PR #27385: Fix Node 20 Compatibility and Windows symlink Test Failures](https://github.com/google-gemini/gemini-cli/pull/27385) (Open) – Fixes a runtime crash that broke production execution on Node 20.x, alongside resolving flaky platform-specific symlink test failures on Windows.

## 5. Feature Request Trends
Distilled from the full issue backlog, the highest-priority upcoming feature directions are:
1. AST-native codebase navigation tooling, with three linked workstreams exploring AST greps, AST file reads, and AST codebase mapping to drastically reduce agent tool turns and token overhead for large code projects.
2. Full Auto Memory security and UX hardening, covering deterministic secret redaction, quarantine for invalid memory patches, and elimination of infinite retries for low-signal user sessions.
3. Agent resilience improvements, including automatic browser session lock recovery, full agent self-awareness of all CLI flags/hotkeys, and support for fully persistent remote background agents.
4. Server-driven model management to eliminate stale local model configs, remove the need for manual model update CLI releases, and enable centralized dynamic model routing.

## 6. Developer Pain Points
Recurring high-frequency user frustrations identified in the updated backlog:
1. Multiple widespread unresolved P1 agent hanging issues that break even trivial workflow operations, including generalist agent hangs, shell execution "waiting for input" deadlocks, and hidden MAX_TURNS interruption that returns false success states.
2. Post-v0.33.0 unexpected configuration behavior, including subagents activating even when explicitly disabled, and user-defined browser agent setting overrides being completely ignored.
3. Unresolved core PTY stability gaps including memory leaks, stale file descriptor crashes on session resume, and excessive terminal flicker during window resize that breaks long-running session usability.
4. Unpatched Auto Memory security gaps where sensitive transcript

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-01
Source: github.com/github/copilot-cli
---

## 1. Today's Highlights
June 1, 2026’s update leads with the release of v1.0.57-4, a quality-of-life patch that resolves longstanding tmux keyboard navigation flaws and case-sensitive @-mention file search inconsistencies. Multiple high-severity post-v1.0.56 upgrade bugs were surfaced by the community overnight, including forced repeated re-authentication across multiple user machines, prompting active triage from maintainers. No new pull requests were updated or merged in the 24-hour window, with all recent engineering bandwidth focused on stabilizing the post-1.0.56 release line.

## 2. Releases
The only new version published in the reporting window is v1.0.57-4, with the following changes:
- **New feature**: Users can click any diff line with their mouse to directly select it for edit or comment workflows
- **Improvement**: preToolUse hook errors now properly block tool execution, closing a previous gap that allowed unsafe tool calls even when hooks failed validation
- **Fixes**: Resolved broken behavior for modified keys (including Ctrl+C) inside tmux sessions, and standardized @-mention file search to run case-insensitive matching for all queries regardless of input casing.
> Release page: https://github.com/github/copilot-cli/releases/tag/v1.0.57-4

## 3. Hot Issues
1. **#1632: Support subfolders for skills** – 14 👍, 6 comments. This top-voted feature request solves pain points for power users with 10+ custom skills who cannot organize their plugin library in the current flat skills folder structure. https://github.com/github/copilot-cli/issues/1632
2. **#3597: Constant re-login required since v1.0.56 upgrade** – A critical new regression where users are prompted to re-authenticate 8+ times per 24 hours even during active sessions, breaking workflow continuity across multiple machines. https://github.com/github/copilot-cli/issues/3597
3. **#3600: No native way to remove 2+ month old orphaned sessions** – Marked critical, this bug leaves users with stale, unused sessions that hog local storage and cloud compute resources with no built-in bulk deletion workflow. https://github.com/github/copilot-cli/issues/3600
4. **#2675: Support pasting clipboard images into conversations** – 5 👍, 2 comments. This highly requested feature would enable visual debugging, UI mockup review, and architecture diagram analysis workflows that are impossible on the text-only CLI today. https://github.com/github/copilot-cli/issues/2675
5. **#3586: Copy functionality broken on Linux since v1.0.49** – A confirmed regression that breaks core user workflows on Linux, with no fix available after 2 days of open triage. https://github.com/github/copilot-cli/issues/3586
6. **#2653: Native Git worktree support** – 4 👍. Power Git users that rely on worktrees for parallel, non-conflicting development on the same repository cannot use Copilot CLI consistently across worktree instances. https://github.com/github/copilot-cli/issues/2653
7. **#3601: Bash tool strips non-ASCII characters due to forced `LC_CTYPE=C`** – This high-severity bug breaks all workflows for non-English users working with file paths that include Chinese, Japanese, Korean, or accented Latin characters. https://github.com/github/copilot-cli/issues/3601
8. **#3598: Session resume fails with negative `tokensRemoved` value** – Recently closed, this fix resolves a schema validation mismatch that rendered completed sessions unloadable after compaction, preventing total loss of user conversation history. https://github.com/github/copilot-cli/issues/3598
9. **#3595: AutoPilot mode requires user confirmation for high-stakes decisions** – A widely requested safety feature for code review workflows, preventing Copilot from applying unapproved, unintended fixes automatically during autonomous operation. https://github.com/github/copilot-cli/issues/3595
10. **#3602: @github/copilot SDK mutates global `process.env`** – An unexpected side effect that overwrites user-defined custom Git configs in shared environments, breaking downstream tooling that embeds the Copilot SDK. https://github.com/github/copilot-cli/issues/3602

## 4. Key PR Progress
No pull requests were created, updated, merged, or closed in the 24-hour reporting window. All active engineering work is currently focused on triaging and resolving the high volume of regressions introduced in the recent v1.0.56 release cycle.

## 5. Feature Request Trends
The most requested feature directions from the latest issue batch are:
1. **Plugin/skill organization upgrades**: Top priority for power users, including nested subfolder support for custom skills, transparent skill loading validation, and full parity between repository-level marketplace overrides in CLI commands and interactive slash workflows.
2. **Multi-modal input support**: Consistent high demand for native clipboard image pasting to extend the CLI beyond text-only workflows.
3. **Safer autonomous operation controls**: Granular user confirmation prompts for high-risk AutoPilot actions to reduce unintended code changes.
4. **Advanced Git workflow compatibility**: Native support for worktrees and non-UTF-8 file encodings to align Copilot CLI with existing enterprise developer workflows.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced in the last 24 hours:
1. **Widespread post-v1.0.56 regressions**: Two separate core authentication bugs cause constant forced re-logins, and broken model list loading for resumed sessions, severely breaking workflow continuity.
2. **Platform-specific core functionality breaks**: Copy operations are non-functional on Linux builds, unexpected OS crashes on Windows corrupt the session `events.jsonl` file, and remote session features return 404 errors for free plan Mac/iOS users.
3. **Unintended environment side effects**: The Copilot SDK modifies global `process.env` values unprompted, and the bash tool forces a C locale that strips non-ASCII characters for global users.
4. **Inconsistent session persistence**: Users face unresumable sessions from invalid compaction event data, and no native tooling to clean up orphaned sessions that accumulate over months of use.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-01
Repository: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
This 24-hour tracking window has no new official Kimi Code CLI releases, with all community activity centered on post-1.46 version bug triage, community-contributed targeted fixes, and feature request submissions. Two open pull requests directly resolve high-impact bugs related to tool call encoding and client timeout misconfiguration, while 10 updated tracked issues cover cross-platform breakages, long-session reliability gaps, and usability pain points. The community is increasingly prioritizing interoperability with third-party IDE tools and more granular customization of CLI runtime behavior for power user workflows.

## 2. Releases
No new official Kimi Code CLI releases were published in the 24-hour period ending 2026-06-01.

## 3. Hot Issues
All 10 updated issues from the last 24 hours are prioritized below:
1. [#2208 OpenAI-compatible API support request](https://github.com/MoonshotAI/kimi-cli/issues/2208) | Critical for editor workflow users: Native OpenAI format endpoint support will let users run K2.6 directly in popular IDE tools like Cursor without custom workarounds, addressing a top community interoperability request.
2. [#2403 1.46 version login failure on Linux](https://github.com/MoonshotAI/kimi-cli/issues/2403) | Post-upgrade critical breakage that blocks all access to Kimi.com services for Linux users who updated to the latest CLI release.
3. [#2410 1.46 Linux CLI input exception](https://github.com/MoonshotAI/kimi-cli/issues/2410) | Breaks core terminal interaction on Linux, preventing users from executing privileged commands that require interactive input prompts.
4. [#2384 Non-configurable httpx timeout causes frequent ConnectTimeout for 120k+ context sessions](https://github.com/MoonshotAI/kimi-cli/issues/2384) | Impairs power users working with large codebases, as Kimi's 256k+ context window cannot be leveraged reliably for long full-repo analysis sessions.
5. [#2412 `kimi acp` command no response on WSL2](https://github.com/MoonshotAI/kimi-cli/issues/2412) | Breaks core automation functionality for Windows devs using WSL2, one of the most widely adopted cross-platform development environments.
6. [#2411 Request to expand thinking process window to 5-10 lines](https://github.com/MoonshotAI/kimi-cli/issues/2411) | Improves transparency of Kimi's internal reasoning steps, helping developers debug unexpected outputs and follow complex multi-step coding workflows.
7. [#2408 Foreground subagent hardcoded 120s timeout contradicts documentation](https://github.com/MoonshotAI/kimi-cli/issues/2408) | Causes unexpected premature termination of long-running subagent tasks, violating user expectations set by official documentation that states no default timeout is applied.
8. [#2406 Double-encoded tool call arguments break array/dict parameters](https://github.com/MoonshotAI/kimi-cli/issues/2406) | Core functionality break that renders popular built-in tools including `SetTodoList` and `StrReplaceFile` unusable due to Pydantic validation failures.
9. [#2405 K2.6 model 400 API error for unpaired tool_call_id responses](https://github.com/MoonshotAI/kimi-cli/issues/2405) | Crashes advanced agent workflows that run multiple parallel tool calls, blocking full utilization of the latest K2.6 top-tier coding model.
10. [#2404 Request for `/goal` autonomous mission command](https://github.com/MoonshotAI/kimi-cli/issues/2404) | Eliminates repetitive manual approval prompts for every tool call, cutting down workflow friction for long complex coding tasks.

## 4. Key PR Progress
Only 2 pull requests were updated in the 24-hour tracking window, both high-priority community-authored fixes listed below:
1. [#2409 Add default 120s timeout to create_openai_client](https://github.com/MoonshotAI/kimi-cli/pull/2409) | Fixes a gap where the OpenAI SDK's default 600s timeout leaves users waiting 5+ minutes for silent failures when upstream public API proxies time out earlier, drastically reducing unnecessary wait times for error diagnosis.
2. [#2407 Fix double-encoded JSON handling for Moonshot API tool call arguments](https://github.com/MoonshotAI/kimi-cli/pull/2407) | Directly resolves issue #2406, fixing Pydantic validation failures for all nested array/object parameters across built-in tools.

## 5. Feature Request Trends
The most requested feature directions from the user base are:
1. **Interoperability**: Full OpenAI-compatible API endpoints to enable seamless integration with third-party IDEs and existing LLM toolchains that use the OpenAI API format
2. **Workflow Autonomy**: One-click high-level mission execution commands that remove repetitive manual approvals for multi-step agent tasks
3. **Customizable UX**: Configurable CLI display settings, especially for the model's internal thinking process to give users full visibility into reasoning steps
4. **Granular Configuration**: Expose hidden runtime parameters (timeouts, context limits) as user-editable options in the config file

## 6. Developer Pain Points
Recurring high-frequency frustrations across recent user reports:
1. Post 1.46 upgrade breakages: Multiple overlapping critical bugs on Linux and WSL2 environments that block core CLI functionality for a large share of the user base
2. Overly rigid hardcoded defaults: Non-adjustable values for httpx timeouts, subagent timeouts, and thinking window size that break edge case workflows for power users working with large codebases
3. API format edge case bugs: Unhandled encoding edge cases and invalid tool response handling that break native agent functionality on the latest K2.6 model
4. Lack of out-of-the-box editor integration: Forcing users to build custom workarounds to connect Kimi Code CLI to popular IDEs instead of supporting native OpenAI-compatible connections

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-01
---
## 1. Today's Highlights
The latest v1.15.13 release ships critical fixes for Anthropic Opus extended reasoning blocks, alongside new support for custom session metadata via the public API and SDK. The core team has launched a centralized memory leak megathread to crowdsource heap snapshots for long-unresolved scattered memory issues, while a wave of recent community PRs land fixes for top-priority bugs including infinite retries and multi-turn Claude thinking block failures. Reports of widespread v1.15.13 Desktop MCP UI sync regressions are the top trending user topic for the day.

## 2. Releases
### v1.15.13
Latest stable release updates include:
- Bugfix: Anthropic Opus 4.7+ adaptive reasoning no longer discards summarized thinking content, eliminating empty thinking block return errors
- New feature: Sessions now support custom metadata storage via the public API and SDK, contributed by community developer @shantur
- Improvement: Configuration now loads recursively upward from the user's opened working directory for more intuitive project-level config resolution

## 3. Hot Issues (Top 10)
All items are sorted by community engagement and user impact:
1. **#20695 Memory Megathread** | 83 comments, 60 👍 | https://github.com/anomalyco/opencode/issues/20695  
   Core devs have created a centralized hub to collect user-submitted heap snapshots for unresolved, scattered memory leaks (rejecting LLM-generated "solution" PRs that have historically failed to address root causes). This is the highest-priority open issue for the core team.
2. **#11532 [CLOSED] AGENTS.md not loaded after /new** | 22 comments, 16 👍 | https://github.com/anomalyco/opencode/issues/11532  
   Months-long quality of life bug is now resolved, ensuring custom agent definitions persist across new session starts instead of requiring manual re-reading of the AGENTS.md file.
3. **#20995 Gemma 4 (e4b) Ollama streaming tool calls not recognized** | 19 comments, 45 👍 | https://github.com/anomalyco/opencode/issues/20995  
   The highest-voted local model compatibility bug breaks all tool use for self-hosted Gemma 4 users running via Ollama's OpenAI-compatible API, blocking adoption for offline-first teams.
4. **#21034 Gemma-4-26b/31b interaction failures causing tool loops** | 17 comments, 18 👍 | https://github.com/anomalyco/opencode/issues/21034  
   Even with the latest tokenizer and engine patches, larger 26B/31B Gemma 4 variants produce infinite tool execution loops, rendering them unusable without custom workarounds.
5. **#12393 [CLOSED] Missing session unarchive workflow for Desktop** | 12 comments, 16 👍 | https://github.com/anomalyco/opencode/issues/12393  
   Resolved longstanding UX gap that left users with no discoverable way to restore accidentally archived work sessions in the desktop app.
6. **#16885 JSON->SQLite migration reruns on dev/non-latest channels** |7 comments, 8 👍 | https://github.com/anomalyco/opencode/issues/16885  
   Critical bug that reruns the one-time database migration on every launch for non-stable builds, creating high risk of unintended DB corruption for core contributors running dev channel builds.
7. **#30104 Desktop v1.15.13 shows no configured MCP servers despite working CLI** |4 comments, 4 👍 | https://github.com/anomalyco/opencode/issues/30104  
   New regression in the latest stable release that breaks MCP UI discoverability for Windows desktop users, even though configured MCP tools work correctly in active sessions.
8. **#22813 Anthropic thinking signature lost on model switch** |3 comments, 10 👍 | https://github.com/anomalyco/opencode/issues/22813  
   API error affecting all users of Claude models with extended thinking enabled, that breaks multi-turn conversations if the model variant changes mid-session.
9. **#30135 Feature request: Re-add "Open in external editor" to new TUI** |4 comments | https://github.com/anomalyco/opencode/issues/30135  
   Widely requested missing feature removed during the recent TUI rewrite, that restores one-click access to edit files in the user's native local IDE.
10. **#26038 /exit command closes full PowerShell terminal** |7 comments | https://github.com/anomalyco/opencode/issues/26038  
   UX edge case bug that terminates the user's entire PowerShell session on Windows when running the OpenCode /exit command, creating unexpected workflow interruptions.

## 4. Key PR Progress (Top 10)
1. **#30046 [CLOSED] Preserve Anthropic thinking signature across different models** | https://github.com/anomalyco/opencode/pull/30046  
   Fully resolves issue #22813, eliminating the mid-conversation extended thinking API error for multi-turn Claude sessions.
2. **#26369 [OPEN] Cap retry schedule at 3 maximum attempts** | https://github.com/anomalyco/opencode/pull/26369  
   Fixes infinite session hangs by adding a hard limit to previously unbounded retries for rate limited/overloaded provider responses.
3. **#30145 [OPEN] Honor session/cancel by aborting running ACP turns** | https://github.com/anomalyco/opencode/pull/30145  
   Restores missing cancel functionality for ACP agent sessions, that previously rejected all stop commands and ran prompts to completion no matter what.
4. **#12633 [OPEN] Add TUI auto-accept mode for permission requests** | https://github.com/anomalyco/opencode/pull/12633  
   Adds a shift+tab toggleable "autoedit" mode that automatically approves one-time file edit permissions, cutting repetitive user input for long-running agent tasks.
5. **#29789 [OPEN] Add Dynamic Workflows support** | https://github.com/anomalyco/opencode/pull/29789  
   Implements native support for Anthropic's new dynamic workflow specification, letting users define and run project-local custom tasks via the `/workflow` CLI command.
6. **#26861 [OPEN] Add lazy scroll loading for old TUI messages** | https://github.com/anomalyco/opencode/pull/26861  
   Fixes disappearing old messages bugs in long sessions by loading batches of 50 older messages only when the user scrolls near the top of the session history.
7. **#30127 [CLOSED] Remove automatic full session diffs** | https://github.com/anomalyco/opencode/pull/30127  
   Eliminates session load hangs caused by oversized full-session snapshot diff generation, while retaining message-scoped turn diffs for explicit revert workflows.
8. **#30115 [CLOSED] Add full Italian localization** | https://github.com/anomalyco/opencode/pull/30115  
   Ships complete i18n support for Italian across the TUI, web UI, and desktop app, with the new locale added to the in-app language picker.
9. **#28589 [CLOSED] Add SQLite schema sync layer** | https://github.com/anomalyco/opencode/pull/28589  
   Introduces a new Effect-backed core SQLite database module with automated schema migration helpers to improve database reliability for all future feature rollouts.
10. **#27662 [OPEN] Push VS Code active editor selection to TUI via lock file** | https://github.com/anomalyco/opencode/pull/27662  
    Restores the long-broken VS Code extension context awareness feature, that automatically surfaces the user's currently open editor file to OpenCode's context window.

## 5. Feature Request Trends
The highest-demand user feature directions this week are:
1. Restoring high-legacy TUI functionality removed during the recent OpenTUI rewrite, most notably external editor integration
2. Native support for user-defined, project-local custom workflow definitions aligned with Anthropic's new dynamic workflows standard
3. Extended session management quality of life tools, including session renaming, explicit labeling, and improved archive/unarchive

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi (pi-mono) Community Digest | 2026-06-01
---

## 1. Today's Highlights
No new stable releases shipped in the 24-hour tracking window, but the repository saw 27 bug fixes and feature merges focused on LLM provider compatibility and core agent stability. High-priority patches resolved broken connectivity for top models including Claude Opus 4.8 and Qwen 3.7 Max on OpenRouter, while new native functionality adds support for Anthropic Claude on Google Cloud Vertex AI. The community’s highest-engagement open issue, documenting a TUI hang for OpenAI Codex/GPT-5.5 sessions, remains under active investigation with 49 user comments and 24 upvotes.

## 2. Releases
No new public versions of `badlogic/pi-mono` were published in the last 24 hours.

## 3. Hot Issues (Top 10 Notable)
1. **[#4945] openai-codex hangs on "Working..." for zero-usage aborted turns** (49 comments, 24 👍) | https://github.com/earendil-works/pi/issues/4945
   The highest-engagement open issue affecting power users of the latest GPT-5.5 integration, with consistent reports of unresponsive TUI sessions that require a manual Escape key press to recover.
2. **[#1436] Auto-detect and sync system light/dark mode** (8 comments, 2 👍) | https://github.com/earendil-works/pi/issues/1436
   Long-standing feature request filed in February 2026 that was just closed, with community praise for the removal of required restarts or manual UI adjustments for theme switching.
3. **[#5223] Anthropic provider breaks Opus 4.8 adaptive thinking sessions with 400 errors** (7 comments, 4 👍) | https://github.com/earendil-works/pi/issues/5223
   Blocks multi-turn high-reasoning Claude sessions, a top use case for enterprise power users of Pi.
4. **[#5117] Qwen 3.7 Max on OpenRouter returns 400 invalid role error** (6 comments, 4 👍) | https://github.com/earendil-works/pi/issues/5117
   Recently resolved breakage for one of the most popular open source 100B+ models accessed via OpenRouter.
5. **[#4666] 429 Retry-After logic ignores `maxRetryDelayMs` cap** (6 comments, 1 👍) | https://github.com/earendil-works/pi/issues/4666
   Causes Pi to silently wait for hours when providers return overly long server-side retry windows, breaking workflows for heavily rate-limited users.
6. **[#4611] Installation fails due to missing provenance attestation for clipboard dependencies** (2 comments, 6 👍) | https://github.com/earendil-works/pi/issues/4611
   High-impact resolved bug that blocked new user onboarding via the aube package manager.
7. **[#4975] Bedrock Converse API rejects requests with empty text blocks** (2 comments) | https://github.com/earendil-works/pi/issues/4975
   Open unpatched bug that breaks enterprise AWS Bedrock deployments of Pi.
8. **[#5263] Make in-session model and thinking-level changes ephemeral by default** (2 comments) | https://github.com/earendil-works/pi/issues/5263
   Newly filed proposal to eliminate the common footgun where temporary in-session model edits accidentally overwrite global user defaults.
9. **[#4920] Windows bash tool creates undeletable literal `nul` files** (3 comments) | https://github.com/earendil-works/pi/issues/4920
   Resolved critical Windows-specific bug that broke user filesystem state by creating reserved DOS device files that cannot be deleted via standard Explorer or CLI commands.
10. **[#4748] pi-tui keybindings singleton breaks third-party extensions** (2 comments, 2 👍) | https://github.com/earendil-works/pi/issues/4748
    Open blocker for extension developers caused by duplicate module singleton instances across isolated node_modules directories for loaded extensions.

## 4. Key PR Progress
1. **[#5262] Add Anthropic Vertex provider** | https://github.com/earendil-works/pi/pull/5262
   Introduces a native first-party provider to run Claude models directly on Google Cloud Vertex AI, reusing all existing Pi Anthropic streaming, tool calling, and reasoning logic without breaking changes.
2. **[#5247] Add infinite loop protection to AgentHarness** | https://github.com/earendil-works/pi/pull/5247
   Critical core stability patch that adds configurable `maxTurns` limits and unregistered tool call detection to prevent agents from hanging infinitely due to orchestration bugs or model hallucinations.
3. **[#5221] Fix OpenRouter reasoning instruction role** | https://github.com/earendil-works/pi/pull/5221
   Resolves the broken Qwen 3.7 Max OpenRouter bug (#5117) by switching OpenRouter requests to use the valid `system` message role instead of the OpenAI-specific `developer` role.
4. **[#5251] Suppress deprecated temperature parameter for Claude Opus 4.7+** | https://github.com/earendil-works/pi/pull/5251
   Eliminates 400 errors on Opus 4.8 adaptive reasoning sessions (#5223) by omitting the `temperature` parameter that Anthropic no longer accepts for its latest reasoning-only models.
5. **[#5256] Add optional session name parameter to `/new`, `/clone`, and `/fork` commands** | https://github.com/earendil-works/pi/pull/5256
   Quality of life improvement that removes the need for a separate `/name` command after creating a new session, streamlining multi-session organization workflows.
6. **[#5233] Fix Kitty inline image rendering in WezTerm** | https://github.com/earendil-works/pi/pull/5233
   Regression patch that fixes an issue where only the top strip of Kitty-format inline images rendered incorrectly in the WezTerm terminal emulator.
7. **[#5257] Demote extension load failures from fatal exit to non-fatal warning** | https://github.com/earendil-works/pi/pull/5257
   Prevents Pi from failing to boot entirely due to a single broken third-party extension, drastically improving reliability for users with custom extension ecosystems.
8. **[#5254] Replace `chalk` with native Node.js `util.styleText`** | https://github.com/earendil-works/pi/pull/5254
   Reduces third-party dependency count by replacing the popular terminal styling package with native Node 22+ functionality aligned with Pi's minimum engine requirements.
9. **[#5246] Add packaged worktree agent extension example** | https://github.com/earendil-works/pi/pull/5246
   Official new reference extension that spins up isolated child Pi agents in separate Git worktrees to run parallel code change tests without modifying the user's main working directory.
10. **[#5237] Disable auto-continue after pre-prompt threshold compaction** | https://github.com/earendil-works/pi/pull/5237
    Eliminates spurious duplicate agent turns after context compaction for very long sessions, removing unexpected duplicate work for power users with multi-hour active sessions.

## 5. Feature Request Trends
Top user-requested feature directions distilled from tracked issues:
1.  **TUI personalization**: System theme auto-sync, calendar-style heatmaps to visualize daily session activity and token consumption, and improved terminal accessibility controls.
2.  **Extension ecosystem improvements**: New first-class UI components (like the recently added multi-select list component) for custom extensions, plus official reference extensions for common agent workflows.
3.  **Smarter session management**: Ephemeral by default in-session setting changes, and percentage-based context compaction thresholds that automatically scale with a model's context window size.
4.  **Expanded LLM hosting support**: Native first-party provider adapters for additional major enterprise LLM endpoints beyond existing OpenAI, Anthropic, OpenRouter, and AWS Bedrock support.

## 6. Developer Pain Points
Recurring high-frequency frustrations for Pi contributors and power users:
1.  Cross-platform TUI stability gaps: Slow full redraws on long history in iTerm2, stale Git branch labels for repositories stored on WSL `/mnt/c` Windows-backed paths, and unhandled overlay focus state bugs.
2.  Frequent provider API drift: Unannounced breaking changes from Anthropic, OpenAI, and OpenRouter that cause hard 400 errors mid-session, requiring continuous upstream compatibility patches.
3.  Third-party extension friction: Shared singleton state breaks when extensions import separate copies of pi-tui, with no isolated state boundaries for custom extension dependencies.
4.  Performance and memory bloat: OOM crashes when resuming large multi-hundred-megabyte sessions due to full JSONL loading into memory, plus uncaught null reference errors for abort signals during auto-compaction of overflowing context.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-01
---
## 1. Today's Highlights
Today’s update delivers the first v0.17.0 20260531 nightly pre-release, packed with critical stability fixes, observability overhauls, and quality-of-life improvements for local deployment, daemon mode, and IDE integration workflows. High-priority resolved bugs eliminate dead-end authentication states for JetBrains users and recurring infinite loop failures for local Qwen 3.6 self-hosted deployments. New previews include automatic on-pressure memory diagnostic dumps to simplify debugging of hard-to-reproduce OOM crashes for long-running sessions.

## 2. Releases
### v0.17.0-nightly.20260531.c699738f9
Published 2026-05-31 by the Qwen Code CI bot, this is the first public pre-release for the upcoming v0.17.0 stable cycle. Key changes include a new baseline for daemon mode feature development, plus a fix for the false "compressed turn" error that previously triggered incorrectly during mid-turn message interruptions.
- Release tracking PR: https://github.com/QwenLM/qwen-code/pull/4626

## 3. Hot Issues
1. **#4493: Rider OAuth login infinite redirect bug**  
   9 user comments: This top user pain point blocks JetBrains Rider users from accessing Alibaba Cloud hosted model plans, even when they are already authenticated in the web portal. Users report consistent failed token plan invocations after the endless redirect loop.
   Link: https://github.com/QwenLM/qwen-code/issues/4493
2. **#3881: Local Qwen 3.6-27b infinite "/" return on first prompt (Closed)**  
   7 user comments: Widely encountered by self-hosted users running local models on OpenAI-compatible backends, this bug wasted tokens and hung sessions permanently. It has been resolved in recent v0.17 pre-release builds.
   Link: https://github.com/QwenLM/qwen-code/issues/3881
3. **#4514: qwen serve daemon capability gaps backlog tracking**  
   10 user comments: This central maintainer-led tracking issue documents all remaining non-interactive serve surface features post v0.16-alpha, and is highly anticipated by engineering teams deploying Qwen Code as a shared internal service.
   Link: https://github.com/QwenLM/qwen-code/issues/4514
4. **#4637: Discontinued qwen-oauth trapping JetBrains users (Closed, P1 priority)**  
   2 comments, 1 upvote: This critical bug left users with legacy `qwen-oauth` set in their config stuck in an unresolvable dead-end authentication state that blocked all IDE login flows. It was patched in the latest nightly build.
   Link: https://github.com/QwenLM/qwen-code/issues/4637
5. **#4609: "Value of this must be of DOMException" error on local Ollama runs (Closed)**  
   4 user comments: Widespread reported by v0.16.2 users running Qwen via Ollama, this breaking issue blocked all prompts for local model deployments, and has now been fully resolved.
   Link: https://github.com/QwenLM/qwen-code/issues/4609
6. **#4657: v0.17.0 Ollama + Qwen 3.6 task completion failure**  
   2 early adopter comments: Newly filed by nightly testers, users report large end-to-end tasks like generating full HTML e-books fail to complete despite working reliably in v0.16 stable.
   Link: https://github.com/QwenLM/qwen-code/issues/4657
7. **#4651: Auto memory diagnostic dump on pressure detection**  
   1 upvote, marked ready-for-agent: This requested feature solves a long-standing pain point where OOM crashes leave zero debug artifacts for maintainers to diagnose, forcing users to manually run memory checks before crashes.
   Link: https://github.com/QwenLM/qwen-code/issues/4651
8. **#4494: Side queries ignore user configured output language (Closed)**  
   1 comment: The fix resolves broken localization for multilingual users, who previously saw recap, title generation, and tool summary outputs return in English even when their preferred output language was set to Chinese or other locales.
   Link: https://github.com/QwenLM/qwen-code/issues/4494
9. **#4643: Auto-update fallback to standalone when npm prefix is not writable**  
   1 comment: This requested fix solves a common permission error for users who installed Qwen Code via global `sudo npm install`, which previously failed auto-updates with EACCES errors for non-root users.
   Link: https://github.com/QwenLM/qwen-code/issues/4643
10. **#4554: OpenTelemetry coverage for qwen serve daemon end-to-end**  
    4 enterprise user comments: Teams running production Qwen Code serve instances are waiting for full OTel tracing to monitor daemon performance and debug request failures that are otherwise opaque with current stderr-only logging.
    Link: https://github.com/QwenLM/qwen-code/issues/4554

## 4. Key PR Progress
1. **#4654: Auto-dump memory diagnostics to disk on memory pressure detection**  
   Implements the requested feature from #4651: writes lightweight diagnostic JSON to the project's `.qwen/diagnostics` folder before cleanup runs when hard/critical memory pressure is detected, ensuring debug artifacts survive subsequent OOM crashes.
   Link: https://github.com/QwenLM/qwen-code/pull/4654
2. **#4661: Per-prompt traceId for bounded, renderable OpenTelemetry traces**  
   Overhauls tracing behavior to assign a fresh unique trace ID to every individual user prompt instead of reusing a single session-level trace ID, making traces far easier to render, query, and debug for long-running sessions.
   Link: https://github.com/QwenLM/qwen-code/pull/4661
3. **#4647: Use platform-native tools for Linux image paste**  
   Replaces the third-party clipboard native module with `wl-paste`/`xclip` calls on Linux, resolving broken image paste functionality for WSL2 + Wayland environments.
   Link: https://github.com/QwenLM/qwen-code/pull/4647
4. **#4662: Include git submodule files in file

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# CodeWhale (Formerly DeepSeek TUI) Community Digest | 2026-06-01
Source: github.com/Hmbown/CodeWhale

---

## 1. Today's Highlights
The biggest announcement of the day is the official v0.8.48 release, which completes the project’s full public rebrand from DeepSeek TUI to CodeWhale, with temporary legacy binary shims shipped to avoid breaking existing user workflows. The past 24 hours saw 14 merged pull requests focused on expanding test coverage, fixing search reliability gaps, and resolving TUI quality-of-life issues, with the community aligning around priorities for the upcoming v0.9.0 milestone. Multiple long-standing bug reports for cross-platform Windows shell behavior and tool availability inconsistencies were marked resolved after targeted triage.

## 2. Releases
### v0.8.48
The release finalizes the project rename to CodeWhale. Legacy `deepseek` and `deepseek-tui` binaries are retained as deprecation shims for one full release cycle: they print a single rename warning and forward execution to the new `codewhale` / `codewhale-tui` entrypoints, and will be fully removed in v0.9.0. Full rebrand transition details are published in `docs/REBRAND.md`.
> Release link: https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.48

## 3. Hot Issues
1. **#1120 (Open, 21 comments)**: The highest-engagement active discussion tracks persistent low cache hit ratios that users report even for identical repeated project work, one of the largest contributing factors to high LLM inference costs for power users. Ties directly to the project’s v0.9.0 "cache-maximalism" roadmap.
> Link: https://github.com/Hmbown/CodeWhale/issues/1120
2. **#1186 (Open, 5 comments)**: Core tracking issue for implementing typed persistent execution permission rules, a top-priority security hardening feature that will let users define permanent allow/deny/ask rules scoped to tool name, command pattern, and workspace path.
> Link: https://github.com/Hmbown/CodeWhale/issues/1186
3. **#1681 (Open, 2 upvotes)**: Highly voted feature request for region-aware web search providers, noting that China-based users cannot reliably access the project’s default search tools. One of the most requested quality-of-life improvements for non-Western users.
> Link: https://github.com/Hmbown/CodeWhale/issues/1681
4. **#2127 (Closed, 3 comments)**: v0.9.0 tracking issue for the "Slop Ledger" feature, which surfaces untracked technical debt (unused shims, stale docs, dead code paths) that agents miss even after successfully completing a user task. Led by the project maintainer, it is positioned as a key differentiator for the next major release.
> Link: https://github.com/Hmbown/CodeWhale/issues/2127
5. **#2328 (Open, 3 comments)**: Bug report for inconsistent `exec_shell` availability, where the tool works as expected in YOLO mode but throws an unavailable error in default Agent mode, a mismatch that breaks documented shell automation workflows.
> Link: https://github.com/Hmbown/CodeWhale/issues/2328
6. **#2132 (Open, 2 comments)**: Maintainer-opened evaluation to switch the default web search provider from Bing to DuckDuckGo, noting that Bing silently returns empty results for complex technical queries that make up most of the project’s user search volume.
> Link: https://github.com/Hmbown/CodeWhale/issues/2132
7. **#2211 (Open, 2 comments)**: Release-blocking bug that causes TUI saturation and UI freezes when running parallel multi-sub-agent workflows alongside hidden worktree operations, flagged as critical for v0.9.0 stabilization.
> Link: https://github.com/Hmbown/CodeWhale/issues/2211
8. **#2438 (Open, 1 comment)**: Bug breaking Kimi (Moonshot) Coding Plan support, where CodeWhale’s default tool schema format fails validation against Kimi’s custom API requirements, leaving users on Kimi tiers unable to leverage function calling.
> Link: https://github.com/Hmbown/CodeWhale/issues/2438
9. **#1172 (Open, 2 comments)**: Community request for a native plugin system and public plugin marketplace, submitted by a developer with portable workflow plugins already built for competing AI coding TUI tools. Highlights strong demand for broader ecosystem extensibility.
> Link: https://github.com/Hmbown/CodeWhale/issues/1172
10. **#2309 (Open, 4 comments)**: UX bug where the `/statusline` customization picker only shows status items already manually added to the user’s config, hiding undocumented available options and making it impossible for new users to discover full TUI customization features.
> Link: https://github.com/Hmbown/CodeWhale/issues/2309

## 4. Key PR Progress
1. **#2462 (Merged)**: Final release preparation PR that bumps all workspace crate versions to 0.8.48, finalizes the rebrand changelog, and adds full attribution for all contributors to the release.
> Link: https://github.com/Hmbown/CodeWhale/pull/2462
2. **#2467 (Merged)**: Migrates all file-backed secrets from the legacy `~/.deepseek` directory to the new `~/.codewhale` home path, with automatic non-destructive migration of existing credentials for long-time users to avoid breakage during the rebrand transition.
> Link: https://github.com/Hmbown/CodeWhale/pull/2467
3. **#2441 (Merged)**: Adds 36 comprehensive unit tests for the previously untested MCP manager module, closing full test coverage gaps for the entire third-party tool integration layer.
> Link: https://github.com/Hmbown/CodeWhale/pull/2441
4. **#2440 (Merged)**: Adds 35 unit tests covering JobManager lifecycle, exponential backoff logic, and session history management, significantly improving runtime stability for long-running background tasks.
> Link: https://github.com/Hmbown/CodeWhale/pull/2440
5. **#2464 (Merged)**: Implements two requested configuration options that make the `@` mention autocomplete menu size limit and directory walk depth user-editable via `settings.toml`, closing two long-standing enhancement requests.
> Link: https://github.com/Hmbown/CodeWhale/pull/2464
6. **#2439 (Merged)**: Improves Volcengine web search reliability with a 90-second timeout, automatic retries, and updated underlying inference model, resolving frequent timeout failures for Chinese users using local search providers.
> Link: https://github.com/Hmbown/CodeWhale/pull/2439
7. **#2461 (Merged)**: Adds full registry support for 2026 Q2 large models on OpenRouter, including Qwen 3.7 Max, Kimi K2.6, GLM 5.1, Xiaomi MiMo V2.5, and Gemma 4, with normalized model shorthand aliases for easier user input.
> Link: https://github.com/Hmbown/CodeWhale/pull/2461
8. **#2443 (Merged)**: Enhances the project CI workflow to run Clippy linting and documentation build checks for all incoming PRs (not just final release builds), catching quality issues early before merge.
> Link: https://github.com/Hmbown/CodeWhale/pull/2443
9. **#2242 (Open, In Progress)**: Community contributed full end-to-end implementation of the typed persistent execution permission system, the first major milestone for the project’s security hardening roadmap.
> Link: https://github.com/Hmbown/CodeWhale/pull/2242
10. **#2239 (Open, In Progress)**: Large in-progress PR that wires Phase 1-4b i18n localization support across 47 TUI source files, adding full Simplified Chinese interface support as the project’s first non-English language.
> Link: https://github.com/Hmbown/CodeWhale/pull/223

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*