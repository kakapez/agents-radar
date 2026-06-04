# AI CLI Tools Community Digest 2026-06-05

> Generated: 2026-06-04 23:09 UTC | Tools covered: 9

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

# 2026-06-05 AI Developer CLI Tools Cross-Tool Comparison Report
Prepared for technical decision-makers and developer teams

---

## 1. Ecosystem Overview
As of early June 2026, the global AI CLI developer tools landscape has matured into a highly competitive, segmented market of 8 mainstream offerings, spanning enterprise-grade proprietary solutions, regionalized open-core tools, and fully community-driven open source alternatives. Across the ecosystem, vendors have shifted priority from rapid raw feature expansion to targeted stability improvements, addressing long unpatched edge cases around session reliability, cross-platform compatibility, and enterprise access controls that were overlooked in earlier fast iteration cycles. The industry is rapidly converging on the Model Context Protocol (MCP) as a universal interoperability standard for third-party tool integrations, with almost all tools now building native support for the spec. Vendors are also carving out clear, non-overlapping niches to avoid direct feature parity competition, catering to distinct user groups from regulated enterprise fleet admins to privacy-focused self-hosting power users.

---

## 2. Activity Comparison
| Tool Name | Top Hot Issues Count | PRs Updated/Merged (24h) | New Release Status (24h Window) |
|-----------|---------------------|---------------------------|---------------------------------|
| Claude Code | 10 | 7 | Shipped v2.1.163 stable |
| OpenAI Codex | 10 | 6 | Shipped v0.137.0 stable + 4 sequential v0.138.0 alpha builds |
| Gemini CLI | 10 | 8 | Shipped v0.45.1 stable + v0.47.0 nightly preview |
| GitHub Copilot CLI | 10 | 0 (no non-spam technical PR activity) | Shipped v1.0.60-0 stable |
| Kimi Code CLI | 7 | 6 | No new official release |
| OpenCode | 10 | 10 | No new official release |
| Pi | 10 | 10 | Shipped v0.78.1 stable |
| Qwen Code | 10 | 10 | Shipped v0.17.1 nightly pre-release |
| DeepSeek TUI (CodeWhale) | 10 | 10 | Shipped v0.8.53 stable (official post-rebrand release) |

---

## 3. Shared Feature Directions
Multiple high-priority feature requirements are observed across tool communities, indicating widespread unmet user demand:
1. **Enterprise fleet admin controls**: 4 enterprise-focused tools (Claude Code, OpenAI Codex, GitHub Copilot CLI, Qwen Code) are actively building centralized management capabilities, with Claude Code recently shipping version range enforcement, Codex rolling out cloud-managed config bundles, and Copilot adding shared session permission templates for teams.
2. **MCP scalability and reliability**: All 9 tools are actively fixing MCP edge cases, including lazy loading of tool schemas, stale auth auto-refresh, proper parsing of underscored server names, and workspace-level config merging, to resolve workflow breakages for power users running 10+ MCP connectors.
3. **Session persistence hardening**: 7 of 9 tools are implementing event-sourced session storage, to eliminate corrupted interrupted session state, support seamless cross-device resume, and prevent work loss after unexpected CLI termination.
4. **TUI core UX reliability**: 6 of 9 tools are actively addressing widespread copy-paste regressions, adding custom user keybindings, and implementing native backgroundable subagent shortcuts to reduce friction for terminal-first power users.
5. **Expanded LLM provider support**: All non-first-party native model tools (Pi, OpenCode, Qwen Code, CodeWhale) are rapidly adding support for new regional model endpoints, popular LLM gateways, and local inference providers to support diverse user deployment needs.

---

## 4. Differentiation Analysis
The ecosystem has clearly segmented into 3 distinct groups with differing priorities and target user bases:
1. **Big 3 Proprietary Enterprise Tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Target regulated large enterprise dev teams with native deep integration to their respective upstream ecosystems (Anthropic model APIs, OpenAI cloud services, GitHub repository infrastructure). Technical prioritization focuses on zero-config out-of-the-box setup, compliance controls, and no self-hosting support, with minimal customizability for non-standard use cases.
2. **Regional Chinese Developer Tools (Kimi Code CLI, Qwen Code, CodeWhale)**: Target domestic Chinese dev communities, with explicit product roadmap priority on full feature parity with Western leading tools, plus native optimized support for low-cost regional model endpoints, and compatibility for low-bandwidth mainland China network conditions. The open-core model allows fast community contribution and fast nightly iteration cycles.
3. **Fully Open Source Community Tools (OpenCode, Pi)**: Target privacy-focused power users, self-hosters, and tinkerers who require full control over their execution pipeline. Feature focus is on maximum extensibility via rich public extension APIs, no mandatory telemetry, and advanced security hardening (such as mandatory read-before-edit file modification enforcement) that no closed-source tool has implemented to date.

---

## 5. Community Momentum & Maturity
- **Established high-maturity tools**: Claude Code, OpenAI Codex, and GitHub Copilot CLI are the most widely adopted production-grade solutions with 100k+ active enterprise users, thousands of resolved bugs, and well-documented stable release cycles. GitHub Copilot CLI has the lowest iteration velocity of this group, with no technical PRs merged in the 24h reporting window post its v1.0 launch.
- **High-velocity rapidly iterating tools**: CodeWhale, Pi, Qwen Code, and OpenCode demonstrate the highest community activity, with 10+ PRs updated/merged in a single 24h window, active public roadmaps, and large volumes of volunteer community contributions. CodeWhale’s 15+ merged PRs aligned to its recent full public rebrand shows exceptional contributor velocity unmatched by other open source alternatives.
- **Steady-maturity tools**: Gemini CLI and Kimi Code CLI have moderate, stable community momentum, with their maintainer teams prioritizing targeted security hardening and widespread bug fixes over new feature development in this reporting window.

---

## 6. Trend Signals
These community observations deliver clear actionable guidance for developer teams and technology decision makers:
1. MCP has effectively become the universal standard for AI tool interoperability, so teams building internal AI automation workflows should prioritize tools with mature production MCP support to avoid costly vendor lock-in in the next 12 months.
2. Regulated enterprise teams managing large distributed dev fleets should select Claude Code or OpenAI Codex for their current production deployments, as they are the only two offerings that ship native out-of-the-box centralized fleet version enforcement and enterprise audit controls.
3. Teams requiring self-hosting capabilities or support for custom regional LLM providers should evaluate OpenCode or Pi first, as they have the broadest multi-provider support, no mandatory telemetry, and fully open source execution pipelines.
4. Core TUI cross-platform UX gaps (including persistent copy-paste regressions and broken remote SSH session path handling) are still widespread across 70% of the ecosystem, so teams deploying AI CLI tools to mixed OS environments should plan for an additional 1-2 quarters of stability improvements before these core usability gaps are fully resolved.
5. Unaddressed long-session context degradation from flawed context compaction logic is a universal unpatched pain point across all evaluated tools, so users working on 100+ message full codebase refactoring tasks should proactively reset sessions every ~50 turns to avoid cascading AI output errors and lost work.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-06-05)
---
## 1. Top Skills Ranking
*Ranked by relative community attention (proxied by update recency, alignment with high-vote open community issues, and associated supporting work, as raw comment metrics returned undefined for all PRs):*
1.  **Agent-Creator Meta-Skill (PR #1140, Status: [Open](https://github.com/anthropics/skills/pull/1140))**: Functionality: Generates custom task-specific agent sets, fixes multi-tool parallel evaluation logic, and adds native Windows support for skill recalculation scripts. Discussion highlights: This is the most recently updated (2026-06-02) high-priority PR, directly addressing the unmet demand for no-code custom agent creation raised in community Issue #1120.
2.  **Comprehensive Testing-Patterns Skill (PR #723, Status: [Open](https://github.com/anthropics/skills/pull/723))**: Functionality: Provides end-to-end testing guidance covering the full testing stack, including testing philosophy, unit testing best practices, React component testing, and end-to-end test patterns. Discussion highlights: Fills a large gap in the official skills collection for production-grade software development workflows.
3.  **ServiceNow Platform Skill (PR #568, Status: [Open](https://github.com/anthropics/skills/pull/568))**: Functionality: A broad enterprise assistant skill covering the full ServiceNow ecosystem, including ITSM, SecOps, IT asset management, field service management, and IntegrationHub workflows. Discussion highlights: The first widely requested enterprise SaaS platform skill targeting large corporate Claude Code deployments.
4.  **OpenDocument (ODT) Skill (PR #486, Status: [Open](https://github.com/anthropics/skills/pull/486))**: Functionality: Enables creation, parsing, template filling, and format conversion for open-standard ODT/ODS files (LibreOffice/ISO ODF). Discussion highlights: Addresses longstanding community demand for open, non-Microsoft proprietary document handling tools.
5.  **Document Typography Quality Control Skill (PR #514, Status: [Open](https://github.com/anthropics/skills/pull/514))**: Functionality: Automatically fixes common typographic defects in generated documents, including orphan/widow line breaks and list numbering misalignment. Discussion highlights: The only skill targeting universal, cross-use-case document quality improvements for all Claude generated output.
6.  **Masonry Image/Video Generation Skill (PR #335, Status: [Open](https://github.com/anthropics/skills/pull/335))**: Functionality: Integrates Google Imagen 3.0 and Veo 3.1 via the Masonry CLI to enable native text-to-image and text-to-video generation workflows inside Claude Code. Discussion highlights: One of the first requested multi-modal skills for extended creative workflows.
7.  **Shodh Persistent Memory Skill (PR #154, Status: [Open](https://github.com/anthropics/skills/pull/154))**: Functionality: Adds cross-conversation persistent context retrieval for AI agents to retain relevant memories across sessions. Discussion highlights: Solves a top community-reported pain point of lost long-running project context between Claude restarts.

---
## 2. Community Demand Trends
Distilled from top-voted, highest-comment open issues:
1.  **Organizational skill sharing usability**: The top comment issue (#228, 13 comments, 7 👍) shows overwhelming demand for native org-wide shared skill libraries, eliminating the current friction of manually distributing and uploading .skill files via third-party tools.
2.  **Cross-platform compatibility**: Multiple overlapping Windows compatibility bug reports for skill-creator evaluation scripts, plus requests for AWS Bedrock skill support, indicate users need skills to work reliably across all official and self-hosted Claude deployment targets.
3.  **Skill security and governance**: Issues around unvetted community skills impersonating the `anthropic/` official namespace, duplicate overlapping skills across default plugins, and broken evaluation tooling highlight urgent demand for built-in skill trust validation and quality scoring systems.
4.  **Enterprise pre-built skill coverage**: Strong demand for out-of-the-box skills for common B2B tools including SAP, ServiceNow, n8n automation, and SharePoint, to reduce custom skill development labor for enterprise teams.
5.  **MCP native integration**: Multiple requests to expose skills directly as Model Control Protocol (MCP) endpoints, plus optimizations to reduce excess MCP data returns, show the community wants deep interoperability between skills and the broader MCP ecosystem.

---
## 3. High-Potential Pending Skills (Imminent Merge Candidates)
These recently updated, low-conflict open PRs directly resolve top community pain points and are prioritized for near-term release:
1.  **Feature-Dev Workflow Bug Fix (PR #363, Status: [Open](https://github.com/anthropics/skills/pull/363))**: Updated 2026-06-03, this fix resolves the widely reported TodoWrite overwrite bug that skipped mandatory quality review and summary phases of the core feature development workflow.
2.  **Skill-Creator Validation & Windows Fix Stack**: A set of 3 aligned PRs (#1099, #1050, #539) that fully resolve the community top bug (Issue #556) of 0% skill trigger rates in the run_eval.py tool, plus full native Windows 11 compatibility for all skill authoring workflows.
3.  **DOCX Corruption Bug Fix (PR #541, Status: [Open](https://github.com/anthropics/skills/pull/541))**: Fixes the shared ID space collision bug that causes DOCX document corruption when applying tracked changes to files with existing bookmarks, a critical stability fix for the widely used DOCX document skill.
4.  **Official CONTRIBUTING.md Addition (PR #509, Status: [Open](https://github.com/anthropics/skills/pull/509))**: Adds a missing official contribution guide that will fix the repo's current 25% GitHub community health score, lowering barriers for new community contributors.

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community’s most concentrated, cross-cutting demand is for a polished, cross-platform, secure, enterprise-ready skill ecosystem with native organizational sharing capabilities, robust built-in quality validation tooling, and pre-built, production-tested skills for common enterprise, productivity, and AI workflow use cases.

---

# Claude Code Community Digest | 2026-06-05
---
## 1. Today's Highlights
Anthropic released Claude Code v2.1.163 in the last 24 hours, adding enterprise fleet version enforcement controls and a new native plugin listing command for easier plugin management. The highest-engagement community topic is a widely reproduced bug that permanently breaks extended-thinking sessions on macOS after a resume, with nearly 60 comments from affected power users. Community contributors landed 8 pull requests including fixes for longstanding Windows MCP connector failures, a new secret detection pre-hook plugin, and automated triage scripts for the maintainer team.

## 2. Releases
### v2.1.163
Two new user-facing features are shipped in this minor update:
1.  Added `requiredMinimumVersion` and `requiredMaximumVersion` managed settings for enterprise admins: Claude Code will refuse to launch if its active version falls outside the approved range, and directs users to the official approved version download to enforce fleet-wide consistency.
2.  Added the new `/plugin list` CLI slash command to enumerate all installed plugins, with partial support for `--enabled` and `--disabled` flags to filter results by activation status.

## 3. Hot Issues (Top 10 Notable)
1.  [#63147](https://github.com/anthropics/claude-code/issues/63147) [OPEN, 58 comments, 48 👍] A high-severity macOS bug that permanently corrupts extended-thinking sessions with tool calls: resuming a broken session returns a 400 "thinking blocks cannot be modified" error, as the transcript stores empty thinking text but retains an invalid non-matching signature. Affects users on v2.1.153 with extended thinking enabled, and no public workaround has been posted yet.
2.  [#36179](https://github.com/anthropics/claude-code/issues/36179) [OPEN, 25 comments, 16 👍] Persistent Windows VS Code plugin runtime error that throws "Unsupported content type: redacted_thinking" during MCP and third-party plugin interactions, breaking tool execution for Windows devs.
3.  [#46647](https://github.com/anthropics/claude-code/issues/46647) [CLOSED, 10 comments] Longstanding Windows VS Code MCP handshake timeout bug resolved for users where the standalone Claude CLI worked normally, but the IDE extension failed with a 30000ms startup timeout.
4.  [#49128](https://github.com/anthropics/claude-code/issues/49128) [CLOSED, 7 comments] Fixed TUI `/resume` slash command bug that showed "No conversations found to resume" even when valid session files existed on disk, while the equivalent `claude --resume <id>` CLI command worked correctly.
5.  [#65328](https://github.com/anthropics/claude-code/issues/65328) [OPEN, 5 comments] Newly reported wave of false-positive Usage Policy blocks starting June 3 UTC, where plain benign dev prompts (including Italian-language non-sensitive audio DSP work) get incorrectly flagged for policy violations. Marked as a duplicate of an internal Anthropic backend tracking issue.
6.  [#54471](https://github.com/anthropics/claude-code/issues/54471) [OPEN, 3 comments] OpenTelemetry monitoring documentation gap that omits required numeric type definitions for `api_request` and `api_error` event attributes, breaking enterprise observability pipeline integrations.
7.  [#54174](https://github.com/anthropics/claude-code/issues/54174) [OPEN, 3 comments] Missing documentation for the VS Code `/context` command that does not cover native token usage dialog behavior when running the command directly from the VS Code command prompt menu.
8.  [#55194](https://github.com/anthropics/claude-code/issues/55194) [OPEN, 3 comments] OAuth login troubleshooting gap that lacks guidance for users on slow, proxied, or IPv6-only networks who hit unlabeled login timeouts during initial auth.
9.  [#62175](https://github.com/anthropics/claude-code/issues/62175) [OPEN, 2 comments] Bug on claude.ai where the "Load tools when needed" setting does not actually defer MCP connector schema loading, causing context limit overflow for users with 11+ connected tools before they send their first message.
10. [#57065](https://github.com/anthropics/claude-code/issues/57065) [CLOSED, 3 comments] Resolved Windows UNC path full process crash: the unhandled `pathToFileURL` error that terminated Claude Code immediately when working with SMB network project directories no longer occurs.

## 4. Key PR Progress
1.  [#44742](https://github.com/anthropics/claude-code/pull/44742) [CLOSED] Adds a new user-run `diagnose-session-persistence.ts` script to debug the longstanding VS Code extension bug that failed to reliably persist conversation transcripts across IDE restarts, resolving 12+ duplicate community reports dating back to December 2025.
2.  [#65286](https://github.com/anthropics/claude-code/pull/65286) [OPEN] Fixes the missing `plugin.json` manifest for the official `plugin-dev` development tool, restoring normal discovery and installation via Claude Code's native plugin manager.
3.  [#65344](https://github.com/anthropics/claude-code/pull/65344) [OPEN] Resolves a premature return logic bug in the maintainer `markStale()` triage script that incorrectly skipped over older open issues, and adds a `--debug` flag to the auto-close-duplicates script for more transparent maintenance logging.
4.  [#65314](https://github.com/anthropics/claude-code/pull/65314) [OPEN] Adds a new automated triage script that scans open issues for reports of unreadable text on light terminal themes, and clusters them under the known `color7`/`color0` color collision root issue to reduce duplicate triage work.
5.  [#65223](https://github.com/anthropics/claude-code/pull/65223) [CLOSED] Fixes a small typo in the official security guidance plugin, correcting the misspelling "reqwest" to "request".
6.  [#61691](https://github.com/anthropics/claude-code/pull/61691) [OPEN] Adds a new PowerShell diagnostic/repair script for Windows users affected by the recurring bug where the GitHub MCP connector shows a "Connected" status but exposes zero available tools.
7.  [#62099](https://github.com/anthropics/claude-code/pull/62099) [OPEN] Community-contributed new `credential-guard` plugin that uses a PreToolUse hook to scan 20+ common hardcoded credential patterns across `Write`, `Edit`, `MultiEdit`, and Bash redirect operations, blocking accidental secret leaks before content is written to disk.

## 5. Feature Request Trends
1.  Enterprise fleet management: High demand for centralized version enforcement and admin controls for large distributed dev teams, aligned with the new v2.1.163 version range settings that shipped today.
2.  Plugin ecosystem quality of life: Strong user interest in better plugin visibility, validation, and pre-execution hook capabilities, as evidenced by the new community contributed credential guard plugin and multiple plugin manager improvement requests.
3.  Agent run UX improvements: Top requests include soft-pause triggers for when a user starts typing mid-agent generation, clearer state spinners for long-running operations, and better visibility into background subagent run times.
4.  MCP scalability: Teams running 10+ MCP connectors at scale are requesting proper lazy loading of tool schemas, deduplication logic for duplicate connector registrations, and explicit error states for failed connections.

## 6. Developer Pain Points
1.  Session reliability bugs are the highest priority complaint: Multiple overlapping unresolved issues around resume failures, corrupted extended thinking transcripts, and missing persisted history break workflows for daily power users.
2.  Disproportionate Windows-specific edge case bugs: A consistent long tail of issues including UNC path crashes, MCP handshake timeouts, and redacted thinking plugin errors that do not impact macOS or Linux users.
3.  Extensive documentation gaps: A large volume of missing, outdated, or incorrect documentation for advanced features (OpenTelemetry, OAuth, MCP, subagents, permission modes) creates unnecessary troubleshooting friction for power users.
4.  Unplanned workflow interruptions: The recent wave of false-positive Usage Policy blocks for completely benign local dev work breaks development sessions unexpectedly with no user-controlled bypass.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-05
---
## 1. Today's Highlights
Today’s community activity centers on the official release of Rust Codex CLI v0.137.0 alongside four incremental 0.138.0 alpha builds, prioritizing TUI usability and enterprise admin workflow improvements. OpenAI maintainers shipped targeted PRs addressing the most widely reported recent bugs, including opaque Windows sandbox failures, stale MCP connector auth, and TUI cold-start latency. The long-running top community feature request for a native Linux Codex desktop app crossed 473 👍 reactions, cementing its status as one of the most in-demand pending roadmap items.

## 2. Releases
5 new Rust-based Codex releases shipped in the last 24 hours:
- **v0.137.0 (Stable)**: Ships two major new capabilities: 1) TUI controls now support F13-F24 custom keybindings, paste functionality in searchable menus, and a compact reasoning-only status bar item, 2) Enterprise and EDU admin workflows now display explicit monthly credit limits, with full support for rolling out cloud-managed configuration bundles across all organization workspaces.
- **rust-v0.138.0-alpha.1 through alpha.4**: Four sequential pre-release builds with incremental bug fixes, performance stabilizations, and early testing hooks for upcoming TUI shell integration features.

## 3. Hot Issues
1. **[#11023] Codex desktop app for Linux** (84 comments, 473 👍): The highest-voted open feature request, filed by users noting current Mac Codex builds have unacceptable battery drain, and a native Linux build would enable far better power efficiency for devs running Codex on dedicated local workstations. https://github.com/openai/codex/issues/11023
2. **[#24391] Windows sandbox spawn setup refresh fails on Codex CLI 0.133.0** (21 comments, 22 👍): Blocks all Windows sandbox CLI users from running Codex workflows, a critical breakage for enterprise Windows deployments that rely on sandboxed execution. https://github.com/openai/codex/issues/24391
3. **[#25715] Codex App is unusably slow with WSL as the agent environment** (19 comments, 21 👍): Impacts millions of Windows devs who use WSL as their primary development environment, with every agent turn taking multiple seconds to complete for no obvious cause. https://github.com/openai/codex/issues/25715
4. **[#24675] Codex Desktop retains stale app connector links after 401 reauth required** (20 comments, 13 👍): Breaks third-party plugin integrations (Linear, Jira, GitHub) for users when their auth token expires, with no obvious user-facing resolution other than manually wiping the hidden Codex app cache. https://github.com/openai/codex/issues/24675
5. **[#25882] macOS Codex app enters tight relaunch loop that exhausts syspolicyd file descriptors** (8 comments, 9 👍): Severe platform-level stability bug that can freeze *all* app launches on a user’s entire macOS system, not just Codex itself. https://github.com/openai/codex/issues/25882
6. **[#15347] Support moving workspace folders without losing thread history** (11 comments, 20 👍): High-priority quality of life ask for devs who reorganize their local projects frequently, who currently have to manually edit hidden Codex database files to restore lost session history. https://github.com/openai/codex/issues/15347
7. **[#25391] Windows Computer Use plugin fails to bootstrap (native pipe path unavailable)** (20 comments): Breaks the flagship new Computer Use capability entirely for Windows desktop users, a core advertised feature in recent releases. https://github.com/openai/codex/issues/25391
8. **[#1281] Add native Git commit signing support for Codex Web environments** (14 comments, 14 👍): Long-running request from devs who currently have to manually inject GPG configuration into every new Codex environment to get verified signed commits. https://github.com/openai/codex/issues/1281
9. **[#26149] Windows + WSL Codex repeatedly scans /mnt/c/.codex/.tmp/plugins causing latency** (7 comments, 9 👍): Community members successfully root-caused the underlying bug for the WSL slowness issue, giving maintainers a clear path to a targeted fix. https://github.com/openai/codex/issues/26149
10. **[#25828] Codex phone verification fails to send codes for regional numbers** (13 comments): Blocks entire regional user bases (e.g Indonesia) from completing Codex login and onboarding, a critical global access gap. https://github.com/openai/codex/issues/25828

## 4. Key PR Progress
1. **[#26471] Improve Windows sandbox setup refresh diagnostics**: Fixes the opaque error state reported in #24391, adding structured error reporting so users and support teams can debug sandbox failures without blind reinstalls. https://github.com/openai/codex/pull/26471
2. **[#26482] Refresh expired OAuth tokens before RMCP startup**: Resolves the stale connector link bug reported in #24675, adding logic to use valid refresh tokens instead of sending known-expired access tokens to MCP services. https://github.com/openai/codex/pull/26482
3. **[#26469] Speed up TUI startup by reusing plugin discovery**: Eliminates redundant filesystem plugin scanning across all startup paths, cutting TUI cold-start time drastically for users with large local plugin directories. https://github.com/openai/codex/pull/26469
4. **[#26431] Reduce plugin service sync download frequency**: Cuts global GitHub plugin repository traffic by replacing full shallow clones with incremental syncs on startup, reducing rate limit risks and improving performance for all users. https://github.com/openai/codex/pull/26431
5. **[#26474] Add native iTerm2 tab status support**: Delivers a top-requested TUI feature, showing idle/working/waiting-for-input state directly in the iTerm2 tab bar via OSC 21337, without modifying terminal titles. https://github.com/openai/codex/pull/26474
6. **[#26462] Use state DB first for `codex resume --last`**: Reduces resume

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-05
Repository: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
Today brings two new production and nightly releases, headlined by the v0.45.1 stable patch that unlocks full Gemini 3.5 Flash GA access for all users. Top active P1 priority updates include critical fixes for long-reported generalist agent hangs, intermittent terminal resize crashes, and multiple new security hardening patches to block indirect prompt injection (IPI) and unauthorized internal host access. The maintainer team also merged CI workflow improvements to streamline PR testing for contributions from forked public repos.

## 2. Releases
Two new builds shipped in the last 24 hours:
- **v0.45.1 (Stable)** ([Release Link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.1)): Patch release cherry-picked from the v0.45 release branch that backports the Gemini Flash GA transition logic, resolving the earlier rollout gap that blocked stable channel users from accessing the new 3.5 Flash model.
- **v0.47.0-nightly.20260604.g4196596f7 (Nightly)** ([Release Link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-nightly.20260604.g4196596f7)): Preview build that adds optimized PR size labeling, and fixes CI permission gaps to grant proper workflow write access for PRs submitted from public forks.

## 3. Hot Issues
1. **#21409: Generalist agent hangs indefinitely** ([Link](https://github.com/google-gemini/gemini-cli/issues/21409)): 7 comments, 8 upvotes, P1 critical bug. Users report the CLI hangs for hours when deferring to the generalist agent even for trivial tasks such as folder creation, with no way to recover outside of explicitly disabling subagent deferral, breaking routine code editing workflows.
2. **#24353: Robust component-level evaluations** ([Link](https://github.com/google-gemini/gemini-cli/issues/24353)): 7 comments, P1 epic. Maintainers are scaling behavioral test coverage across 7 supported Gemini models to reduce regressions for core agent functionality, building on the existing 76 existing behavioral test suite.
3. **#22745: Assess AST-aware file reads and code mapping** ([Link](https://github.com/google-gemini/gemini-cli/issues/22745)): 7 comments, 1 upvote. High-priority roadmap investigation to reduce unnecessary agent turns, cut token noise, and enable precise method-level code navigation via AST parsing tools, to drastically speed up large codebase investigation workflows.
4. **#22323: Subagent incorrectly reports success after MAX_TURNS hit** ([Link](https://github.com/google-gemini/gemini-cli/issues/22323)): 6 comments, 2 upvotes. UX bug that hides incomplete analysis results, as users cannot distinguish between a fully completed subagent task and one that was force-terminated for exceeding allowed turn limits.
5. **#25166: Shell execution stuck on "Awaiting user input" after command completion** ([Link](https://github.com/google-gemini/gemini-cli/issues/25166)): 4 comments, 3 upvotes, P1 core bug. Blocks automated scripting workflows entirely, as the CLI remains unresponsive until fully restarted even after non-interactive shell commands finish executing.
6. **#21968: CLI fails to use preconfigured custom skills and sub-agents** ([Link](https://github.com/google-gemini/gemini-cli/issues/21968)): 6 comments. Users report custom configured skills (e.g. gradle, git helpers) are completely ignored by the agent unless explicitly instructed to use them, defeating the purpose of custom agent setup.
7. **#26525: Deterministic secret redaction for Auto Memory** ([Link](https://github.com/google-gemini/gemini-cli/issues/26525)): 3 comments, P2 security issue. Current Auto Memory implementations only redact secrets after user transcript content is already sent to model context, creating accidental local credential leakage risks.
8. **#21983: Browser subagent fails on Wayland** ([Link](https://github.com/google-gemini/gemini-cli/issues/21983)): 4 comments, 1 upvote. Blocks all browser automation functionality for Linux users running modern Wayland desktop environments.
9. **#22093: Subagents run unexpectedly post v0.33.0** ([Link](https://github.com/google-gemini/gemini-cli/issues/22093)): 2 comments. Users who explicitly disabled all subagent functionality in settings report subagents launching automatically, violating user privacy and permission controls.
10. **#24246: 400 API error when more than 128 tools are enabled** ([Link](https://github.com/google-gemini/gemini-cli/issues/24246)): 3 comments. Breaks workflows for power users with large custom skill and MCP tool stacks, as the CLI does not intelligently prune unused tools before calling the Gemini API.

## 4. Key PR Progress
1. **#27667: Cherry-pick Gemini 3.5 Flash GA patch for v0.45.1** ([Link](https://github.com/google-gemini/gemini-cli/pull/27667)): Closed PR that backports the full Gemini 3.5 Flash GA rollout logic to the stable release branch, delivering the latest model performance improvements to all stable channel users.
2. **#27267: Prevent SIGHUP kills in PTY environments** ([Link](https://github.com/google-gemini/gemini-cli/pull/27267)): Closed P1 fix that stops unexpected process termination for users on WSL2, Kitty, and Alacritty terminals, resolving a 1+ year old highly requested community pain point.
3. **#27472: Truncation lockout for tool confirmations** ([Link](https://github.com/google-gemini/gemini-cli/pull/27472)): Open P1 security fix that blocks IPI attacks by forcing users to fully expand and view complete file diffs or command content before approving tool execution, eliminating a previously documented human-in-the-loop bypass vulnerability.
4. **#27473: Resolve hostnames before private IP check** ([Link](https://github.com/google-gemini/gemini-cli/pull/27473)): Open P2 security fix that closes an SSRF gap, as previously hostnames resolving to private local IP addresses bypassed the CLI's existing private IP access blocklist.
5. **#27502: Fix ioctl EBADF crash on terminal resize** ([Link](https://github.com/google-gemini/gemini-cli/pull/27502)): Open P1 fix for a widespread intermittent race condition crash that triggers when resizing the terminal immediately after a shell process exits, removing a top reported UI stability issue.
6. **#27341: Strip function call/response ID fields pre-API call** ([Link](https://github.com/google-gemini/gemini-cli/pull/27341)): Open fix that resolves a widespread 400 "Unknown name 'id'" error that occurred on every second tool call turn, caused by internal UI rendering IDs being incorrectly forwarded to the Gemini API.
7. **#27572: Fix tmux false positive background detection** ([Link](https://github.com/google-gemini/gemini-cli/pull/27572)): Open fix for a regression that misdetected terminal background color when running the CLI inside tmux or mosh, eliminating broken theme rendering and spurious compatibility warnings.
8. **#27568: Ripgrep execution failure fallback** ([Link](https://github.com/google-gemini/gemini-cli/pull/27568))

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-05
---
## 1. Today's Highlights
The GitHub Copilot CLI team released minor v1.0.60-0 with targeted quality-of-life improvements for session management, navigation, and billing visibility. Community feedback for recent preview features including local sandboxing and voice mode ramped up sharply this 24-hour window, with multiple high-impact cross-platform copy-paste regressions drawing heavy user engagement. Enterprise developers are also surfacing consistent gaps for corporate VPN and self-hosted BYOK Azure OpenAI deployments.
---
## 2. Releases
### v1.0.60-0 (Latest, last 24h)
This incremental feature release adds four public user-facing capabilities plus in-progress work on LSP server configuration:
1.  New `billing` help topic documenting AI credit usage tracking features
2.  Vim-style navigation keys (g, G, Ctrl+D, Ctrl+U) added to the `/diff` view for faster code review
3.  Mission Control sharing status for synced sessions is now displayed in the `/session info` view
4.  Added `-r` as an official shorthand flag for the `--resume` session resume command
---
## 3. Hot Issues (Top 10)
All links point directly to the public GitHub issue thread:
1.  [Issue #2082](https://github.com/github/copilot-cli/issues/2082): Linux users report Ctrl+Shift+C no longer copies selected text to the clipboard, breaking the standard default terminal workflow. This is the highest-engagement open issue from the past 24h, with 19 comments and 8 upvotes, reported first in v1.0.4.
2.  [Issue #2398](https://github.com/github/copilot-cli/issues/2398): The highest-upvoted feature request (10 👍) asks for support for a default shared config file for session permissions, to eliminate repeated manual permission setup for every new Copilot session.
3.  [Issue #3659](https://github.com/github/copilot-cli/issues/3659): Users report all CLI prompts fail with preToolUse hook exceptions starting in v1.0.57, breaking custom enterprise plugin workflows relying on audit and governance hooks.
4.  [Issue #3636](https://github.com/github/copilot-cli/issues/3636): Voice mode fails to enable on corporate VPNs because the STT model catalog endpoint is unreachable, blocking many enterprise users from testing the recently launched voice preview.
5.  [Issue #3677](https://github.com/github/copilot-cli/issues/3677): Users report the Claude Opus 4.7 1M long-context model triggers context compaction at 18% of its advertised capacity, wasting 86% of the 936K token context window due to conflicting model capability data sources.
6.  [Issue #3676](https://github.com/github/copilot-cli/issues/3676): A confirmed regression in v1.0.59 breaks the `/session` command, which no longer lists sessions across multiple workspaces making cross-project session resumption impossible (marked closed within 24h of filing).
7.  [Issue #3666](https://github.com/github/copilot-cli/issues/3666): Copying wrapped CLI output strips spaces from pasted code snippets (for example turning `var c` into `varc`), creating broken generated code when users copy long output. The issue was marked closed same-day as filing.
8.  [Issue #3260](https://github.com/github/copilot-cli/issues/3260): Copy/paste is fully broken for users accessing Copilot CLI running on Windows Server 2025 via SSH from inside a tmux session on macOS/Linux, breaking a common remote development workflow.
9.  [Issue #2783](https://github.com/github/copilot-cli/issues/2783): Security researchers note HTTP MCP server OAuth tokens are stored as unencrypted plaintext on disk at `~/.copilot/mcp-oauth-config/`, introducing credential theft risk for shared developer workstations.
10. [Issue #3680](https://github.com/github/copilot-cli/issues/3680): Sessions resumed via the new `-r`/`--resume` flag block access to the model picker `/model` command with a false "not authenticated" error, even as all other CLI functionality works normally.
---
## 4. Key PR Progress
No legitimate feature, bug fix, or documentation PRs were filed or updated in the last 24 hours. The only open PR updated in this window is unrelated spam promotional content with no technical changes to the Copilot CLI codebase.
---
## 5. Feature Request Trends
The top user-requested capability directions distilled from recent issues are:
1.  **Global UX customization**: Support for custom user keyboard shortcuts (e.g. dedicated toggle for `/voice` dictation), and full i18n/localization for non-English terminal environments (including Spanish command description localization requested this week).
2.  **Enterprise admin deployment support**: Machine-level cross-project custom slash commands, centralized default permissions configs, automatic background credential refresh for short-lived BYOK (Azure AD, AWS STS) OAuth tokens, and configurable retry backoff logic for Azure OpenAI self-hosted deployments.
3.  **Session workflow improvements**: Auto-cleaning, consistently named session worktrees, user-configurable agent effort levels and context length limits for custom agent definitions.
---
## 6. Developer Pain Points
Recurring high-frequency frustrations reported this 24h window include:
1.  Persistent cross-platform copy/paste regressions: 5 distinct open bugs break clipboard functionality across Linux native, Windows native, SSH + tmux remote sessions, and wrapped output copy flows, making clipboard reliability a top usability blocker.
2.  Enterprise environment compatibility gaps: Broken voice mode on corporate VPNs, unencrypted MCP token storage, broken hook path resolution that tilde (`~`) does not expand, and instant 429 throttling retry exhaustion for BYOK Azure OpenAI deployments that fail to respect service recommended backoff rules.
3.  Recent v1.0.57+ regressions: Missing cross-workspace session listings, `/undo` incorrectly restoring deleted git files and overwriting user manual changes, and background sub-agents hanging indefinitely with `gpt-5.5` with zero progress made.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-05
---
## 1. Today's Highlights
No new official releases were published in the last 24 hours, but the top trending community issue is a widespread 403 access block for users of the `kimi-for-coding` model, impacting both legacy v0.9.0 and latest v1.46.0 versions across MacOS, WSL2, and native Linux environments. A community contributor submitted a direct fix for the long-reported forced auto-scroll UX bug on Linux terminals, while 5 other core maintainer PRs targeting session reliability and media handling were updated. Multiple user reports of performance degradation on the latest 1.46.0 release have surfaced, indicating maintainers are likely to prioritize stability patches for the current stable version in upcoming builds.

## 2. Releases
No new official Kimi Code CLI releases were published in the 24-hour window ending 2026-06-05.

## 3. Hot Issues
All 7 newly opened/updated bug reports from the past 24 hours are listed below:
1. [#2425](https://github.com/MoonshotAI/kimi-cli/issues/2425) (10 comments, 3 👍): 403 "Kimi For Coding is restricted to coding agents" error for v0.9.0 MacOS users. This is the top trending blocking issue, with multiple users in the thread reporting unexpected blocks even with valid active Kimi Code subscriptions.
2. [#2427](https://github.com/MoonshotAI/kimi-cli/issues/2427) (2 comments): Identical 403 restriction error reported by v1.46.0 users running the K2.6 model in Debian WSL2. It confirms the bug is not isolated to specific versions or operating systems, disrupting cross-platform web developer workflows.
3. [#2422](https://github.com/MoonshotAI/kimi-cli/issues/2422): Forced auto-scroll to conversation bottom after generation completes on Linux terminals. It blocks users from reviewing long code generation logs without exiting the active session, a major UX pain point for users debugging large outputs.
4. [#2430](https://github.com/MoonshotAI/kimi-cli/issues/2430): Unexpected auto-logout mid-task for v1.36.0 users on Windows 10. This creates risk of partial data loss for long-running repo-wide refactoring or full codebase scanning jobs.
5. [#2428](https://github.com/MoonshotAI/kimi-cli/issues/2428): Missing `/title` slash command functionality in the VS Code Kimi Code extension. The breakage destroys existing custom automations that use the command to name and organize saved work sessions.
6. [#2424](https://github.com/MoonshotAI/kimi-cli/issues/2424): Frequent "engine overloaded" errors for K2.5 model users on Debian 13 over the past 48 hours. It signals potential platform capacity bottlenecks disrupting power user workflows.
7. [#2423](https://github.com/MoonshotAI/kimi-cli/issues/2423): Notable speed regression on v1.46.0 running K2.6 on ARM64 Linux devices. It degrades experience for edge developers running Kimi CLI on resource-constrained ARM hardware.

## 4. Key PR Progress
All 6 updated pull requests from the past 24 hours are listed below:
1. [#2429](https://github.com/MoonshotAI/kimi-cli/pull/2429): Community-submitted fix that blocks idle cursor blink events from triggering unwanted forced scroll to bottom on Linux terminals, directly resolving issue #2422.
2. [#2388](https://github.com/MoonshotAI/kimi-cli/pull/2388): Persists folded pasted text placeholders across session reloads, fixing a long-standing bug where markers like `[Pasted text #1]` broke after users reopened saved history.
3. [#2387](https://github.com/MoonshotAI/kimi-cli/pull/2387): Prevents over-truncation of long shell command headlines, so users can view the full name of any agent-executed command from the conversation UI at a glance.
4. [#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386): Fixes mapping between wire turn indices and context turn indices, resolving inconsistent `/undo` behavior that previously corrupted chat history when session fork operations were used.
5. [#2383](https://github.com/MoonshotAI/kimi-cli/pull/2383): Repairs orphaned tool call entries in interrupted sessions, eliminating corrupted context state that occurred if the CLI was terminated mid-turn via OOM, unexpected terminal close, or manual force-kill.
6. [#2382](https://github.com/MoonshotAI/kimi-cli/pull/2382): Adds automatic conversion of unsupported image formats (including .ico files) to PNG in the `ReadMediaFile` tool, eliminating user-facing vision model upload errors.

## 5. Feature Request Trends
Based on this week's issue submissions, the top community requested feature directions are:
1. Clearer, actionable context in error messages instead of generic 403 restriction alerts, including explicit steps to verify valid agent credentials for Kimi-for-Coding access.
2. Full parity for all native CLI slash commands and features in the VS Code Kimi extension, to eliminate workflow breaks for users who switch between terminal and IDE contexts.
3. A user-configurable toggle to disable auto-scroll behavior entirely, to simplify reviewing very long code generation outputs without interruptions.
4. Official performance benchmarks for different hardware architectures (x86, ARM64) to help users select compatible stable CLI versions for their devices.

## 6. Developer Pain Points
The highest-frequency recurring frustrations surfaced this 24-hour window are:
1. Unclear access blocks: Generic 403 errors with no troubleshooting guidance are disrupting users with valid paid Kimi Code subscriptions across multiple environments.
2. Unexpected post-release regressions: The latest v1.46.0 release has measurable performance degradations compared to earlier stable versions, reducing response speeds for most users.
3. Session state unreliability: Mid-task auto-logouts, corrupted interrupted session history, and broken undo operations create high risk of lost work for users running long code automation jobs.
4. Cross-platform UX inconsistencies: Unmatched behavior across Linux, Windows, WSL2, and the VS Code extension create unnecessary workflow friction for developers who use Kimi CLI across multiple workstations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-05
---
## 1. Today's Highlights
No official new releases shipped in the 24-hour reporting window. The community made major cross-cutting progress on open memory leak debugging, with 89 contributions to a central memory investigation megathread to avoid unvetted LLM-generated bad fixes. A dedicated security contributor also surfaced 7+ unpatched read-before-edit file write enforcement bypasses, driving a full wave of targeted fixes across the tool pipeline. Multiple merged PRs expanded LLM provider support, TUI workflow capabilities, and desktop error handling for end users.

## 2. Releases
No new official OpenCode versions were published in the last 24 hours.

## 3. Hot Issues (Top 10 Notable)
1. **[#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (Open, 89 comments, 63 👍): Centralizes all scattered memory leak reports, with maintainers explicitly banning untested LLM-generated fix suggestions and requesting community-submitted heap snapshots for root cause analysis. It is the highest-traffic active issue as the team prioritizes memory stability for long-running self-hosted deployments.
2. **[#28846 Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)** (Closed, 68 comments, 74 👍): Resolved feature request to raise usage caps for OpenCode Go subscribers following DeepSeek's permanent price cut, with widespread positive feedback from power users who get 4x the token volume at no extra cost.
3. **[#4695 Speech-to-Text Voice Input for Lazy People in OpenCode](https://github.com/anomalyco/opencode/issues/4695)** (Closed, 33 comments, 162 👍): A 1.5-year-old highly upvoted feature request for hands-free voice coding input that is now marked resolved, to ship in an upcoming minor release.
4. **[#1168 Feature Request: Make Links Clickable (Ctrl+Left Click to Open)](https://github.com/anomalyco/opencode/issues/1168)** (Open, 6 comments, 91 👍): Top UX improvement request for the TUI and web UI, to eliminate manual copy-paste of long URLs shared in chat outputs.
5. **[#27589 TUI fails on Alpine Linux (musl) in 1.14.50: getcontext symbol not found](https://github.com/anomalyco/opencode/issues/27589)** (Open, 27 comments, 12 👍): Regression from v1.14.50 that fully breaks TUI execution on musl-based distros, blocking thousands of self-hosted and containerized OpenCode users.
6. **[#30791 No code-level read-before-edit enforcement across all file-modifying tools](https://github.com/anomalyco/opencode/issues/30791)** (Open, 2 comments): Public disclosure of the full scope of read-before-edit bypasses, spanning write tools, bash execution, and MCP/plugin interfaces, driving a full audit of the permission and file mutation pipeline.
7. **[#30811 Code quality gets worse as conversations get longer — compaction loses context, no automatic verification after edits](https://github.com/anomalyco/opencode/issues/30811)** (Open, 6 comments): Widely reported user pain point where chat compaction logic discards critical context as sessions grow, leading to cascading AI errors on long-running projects.
8. **[#21632 subagent model variants are parsed but not applied at runtime in v1.4.0](https://github.com/anomalyco/opencode/issues/21632)** (Open, 6 comments): Post-v1.4.0 regression that breaks custom subagent model variant configurations for power users running complex multi-agent workflows.
9. **[#30799 Prompt injection via <system-reminder> tags in file content](https://github.com/anomalyco/opencode/issues/30799)** (Open, 3 comments): Unpatched security vulnerability where un-sanitized user-controlled file content read by the tool can inject authoritative system prompts to override expected agent behavior.
10. **[#30777 MCP tools, plugin tools, and custom local tools bypass read-before-edit protection entirely](https://github.com/anomalyco/opencode/issues/30777)** (Closed, 4 comments): One of the fixed file mutation bypasses that previously allowed third-party plugins to modify arbitrary user files without any read verification step.

## 4. Key PR Progress (Top 10)
1. **[#30820 feat(provider): support Bedrock OpenAI model URLs](https://github.com/anomalyco/opencode/pull/30820)** (Open): Adds native support for Amazon Bedrock's newly GA OpenAI GPT-5.5 and GPT-5.4 models, closing corresponding feature request #30819.
2. **[#30824 feat(app): color themes](https://github.com/anomalyco/opencode/pull/30824)** (Open): Implements dynamic v2 theme token generation, enabling full custom user-defined color themes across both web UI and TUI.
3. **[#30488 feat(tui): allow backgrounding synchronous subagents](https://github.com/anomalyco/opencode/pull/30488)** (Open): Adds a new `Ctrl+B` TUI shortcut to detach running synchronous subagent tasks to background, freeing the user to interact with the main session without interrupting in-progress work.
4. **[#30822 feat(desktop): surface local server startup failures](https://github.com/anomalyco/opencode/pull/30822)** (Closed): Fixes the longstanding bug where OpenCode Desktop hangs on a loading animation indefinitely if its local backend fails to start, replacing it with an actionable error page.
5. **[#7763 fix: add persistent cost to prevent under-reporting spent value](https://github.com/anomalyco/opencode/pull/7763)** (Open): Adds a permanent session-level cost tracking field to fix inaccurate billing/usage reporting that previously only counted tokens from the last 100 messages.
6. **[#30821 feat(opencode): support multiple config overrides with OPENCODE_CONFIG_DIRS (plural)](https://github.com/anomalyco/opencode/pull/30821)** (Open): Introduces a new PATH-style environment variable that accepts multiple layered config directories, enabling team/enterprise shared configuration workflows.
7. **[#25762 fix: prevent shell commands from killing all Node.js processes](https://github.com/anomalyco/opencode/pull/25762)** (Closed): Blocks dangerous shell commands like `killall node` that previously would terminate the entire OpenCode runtime, breaking active sessions.
8. **[#25706 feat: add FastRouter as an LLM provider](https://github.com/anomalyco/opencode/pull/25706)** (Closed): Adds new support for FastRouter, a popular OpenAI-compatible LLM gateway, to the official list of provider integrations.
9. **[#25700 feat: add copy_on_select tui config to control auto-copy behavior](https://github.com/anomalyco/opencode/pull/25700)** (Closed): Exposes the previously experimental TUI auto-copy-on-text-select feature as a user-editable configuration toggle.
10. **[#30785 refactor(core): make v2 session inputs event sourced](https://github.com/anomalyco/opencode/pull/30785)** (Open): Refactors session prompt storage to an event-sourced architecture, ensuring pending in-progress work persists across local app restarts and can be synced across multiple devices.

## 5. Feature Request Trends
Top user-requested feature directions for this reporting window:
1. **LLM provider ecosystem expansion**: Adding support for newly released model endpoints on Amazon Bedrock and popular third-party LLM gateways.
2. **TUI UX quality of life**: Backgroundable subagent tasks, configurable auto-copy behavior, native voice input, and clickable URLs for terminal-first developers.
3. **Enterprise and power user workflows**: Layered multi-directory config management, named session resume functionality, and full customizable UI color themes.
4. **Accessibility**: Native speech-to-text input to support hands-free coding for accessibility use cases.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. **Cross-platform regressions**: Broken TUI execution on musl Alpine Linux, lost vLLM compatibility post v1.3.8, and non-functional Ctrl+V paste on Windows 10 TUI deployments.
2. **Unpatched security gaps**: Multiple bypass vectors for the advertised read-before-edit file protection, and prompt injection risks from un-sanitized user-controlled file content.
3. **Long session degradation**: Context loss from the chat compaction system leads to progressively worse AI output quality as sessions scale to hundreds of messages.
4. **TUI multiplexer incompatibilities**: No system notification support when running OpenCode TUI inside tmux or zellij terminal multiplexers.
5. **Observability and usability issues**: UTC-only session timestamps that mismatch local user timezones, and under-reported token cost for long sessions.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-05
Repository: [github.com/earendil-works/pi](https://github.com/earendil-works/pi)

---

## 1. Today's Highlights
Today’s updates follow the release of v0.78.1, which adds support for three new major LLM providers and extends the extension API for developers. The most active community discussion centers on a persistent, widely reported `openai-codex` TUI hang bug affecting gpt-5.5 users, with 51 total comments from users reporting repeated unresponsive sessions. Merged PRs deliver critical bug fixes for provider compatibility, cross-platform TUI UX, and security hardening for workspace extensions.

---

## 2. Releases
### v0.78.1
This minor release adds two core features:
1. Expanded built-in provider coverage with pre-configured setup for Ant Ling and NVIDIA NIM, plus MiniMax-M3 support for the direct MiniMax provider
2. New richer extension context API, exposing `ctx.mode` and `ctx.getSystemPromptOptions()` for extensions to access runtime execution state and system prompt configuration
Full documentation is available at [Providers](https://github.com/earendil-works/pi/blob/master/docs/providers.md).

---

## 3. Hot Issues
1. [#4945](https://github.com/earendil-works/pi/issues/4945) **OpenAI Codex TUI hangs on "Working..." with zero-usage aborted turns**: The highest-engagement active issue (51 comments, 27 👍) reports unresponsive sessions for gpt-5.5 users, with no error or streamed output, requiring users to manually press Escape to recover. The dev team is investigating a root cause linked to the `openclaw-clanker` subsystem.
2. [#5341](https://github.com/earendil-works/pi/issues/5341) **Port coding-agent to ExecutionEnv for remote SSH container support**: A now-closed feature request widely celebrated by users for unlocking native remote development workflows, letting local Pi sessions route all filesystem and process execution to remote Linux hosts over SSH.
3. [#5188](https://github.com/earendil-works/pi/issues/5188) **Shift+Enter submits input instead of creating a new line**: A top UX pain point (4 comments, 1 👍) for TUI power users with custom keybindings, who expect shift+enter to create new lines instead of submitting prompts.
4. [#5363](https://github.com/earendil-works/pi/issues/5363) **Add amazon-bedrock-mantle provider for OpenAI-compatible models**: An open feature request to add native support for AWS Bedrock Mantle models, which use a non-standard OpenAI-compatible API incompatible with the existing Bedrock Converse API provider.
5. [#5386](https://github.com/earendil-works/pi/issues/5386) **getSessionStats() crashes for Ollama models missing usage fields**: A critical open bug that breaks session token usage tracking for fully local Ollama users, throwing an undefined property error when assistant responses do not return token counts.
6. [#5373](https://github.com/earendil-works/pi/issues/5373) **High idle CPU usage for 150k+ token large sessions**: A now-closed performance bug that caused Pi to consume ~24% CPU at idle for long-running codebase sessions, with no active generation or UI activity.
7. [#4728](https://github.com/earendil-works/pi/issues/4728) **Native mouse support (clicks, scroll, hover) for TUI**: A long-requested feature that will enable richer custom extension overlays, smooth scroll for long code views, and drag-select text editing in the TUI.
8. [#5350](https://github.com/earendil-works/pi/issues/5350) **Custom file tools receive host-resolved paths breaking Windows → Linux remote sessions**: An open cross-OS bug that corrupts file path formatting for Windows users running Pi against remote Linux SSH hosts, breaking custom remote file operation extensions.
9. [#5357](https://github.com/earendil-works/pi/issues/5357) **Altbuf TUI rendering mode proposal**: A popular closed feature request to replace the current scrollback rendering system, eliminating lag on terminal resize and full-screen redraw issues for long markdown responses.
10. [#5365](https://github.com/earendil-works/pi/issues/5365) **Bun-installed Pi incorrectly loads Node.js under the hood**: A closed bug causing runtime crashes for users who install Pi globally via the Bun package manager, due to incompatible undici library execution paths.

---

## 4. Key PR Progress
1. [#5410](https://github.com/earendil-works/pi/pull/5410) **Persist restored session model as default for new sessions**: Fixes the long-standing confusing behavior where the model used in a continued session would not carry over as the default for future new sessions.
2. [#5400](https://github.com/earendil-works/pi/pull/5400) **Map maxTokens to max_tokens for opencode providers**: Resolves issue #5331, where the `maxTokens` parameter was silently ignored by the opencode-go backend that expects the `max_tokens` API field.
3. [#5379](https://github.com/earendil-works/pi/pull/5379) **Store user-scoped local extension installs as absolute paths**: Closes #5378, eliminating broken extension paths when users move their project directory to a new location.
4. [#5397](https://github.com/earendil-works/pi/pull/5397) **Fix Alt+Delete word deletion on MacOS**: Delivers expected native text editing behavior matching default MacOS text field conventions for all users.
5. [#5399](https://github.com/earendil-works/pi/pull/5399) **Surface deferred-extension commands in autocomplete**: Fixes missing command suggestions for lazy-loaded extensions, preserving sub-300ms startup performance while maintaining full command discoverability.
6. [#5412](https://github.com/earendil-works/pi/pull/5412) **Alias firepass model references to fireworks provider**: Normalizes shorthand Fireworks model references to the canonical provider naming, fixing broken saved model lookups.
7. [#5371](https://github.com/earendil-works/pi/pull/5371) **Add missing space between skill outputs and user messages**: Polishes the slash skill command UX to eliminate malformed merged text between custom skill outputs and user prompt input.
8. [#5281](https://github.com/earendil-works/pi/pull/5281) **Support custom keybindings for all commands**: Unifies handling for built-in and extension registered commands, letting users map custom key combinations for every Pi action.
9. [#5385](https://github.com/earendil-works/pi/pull/5385) **Auto-detect first-run terminal theme**: Queries the terminal via OSC escape sequences to automatically set Pi’s initial light/dark theme to match the user’s existing terminal configuration.
10. [#5332](https://github.com/earendil-works/pi/pull/5332) **Add approval system for workspaces**: Implements a security gate that requires explicit user confirmation before loading extensions from new untrusted `.pi` and `.pi.user` directories, blocking malicious workspace-level extension execution.

---

## 5. Feature Request Trends
The most requested feature directions from recent issues include:
1. Broader LLM provider coverage, especially for AWS Bedrock Mantle, NVIDIA NIM, and improved GCP Vertex metadata server authentication
2. Native remote execution workflow support, including full SSH container session routing to avoid installing Pi locally on target development hosts
3. TUI UX modernization, covering altbuf rendering mode, full mouse input support, custom loader components, and global custom keybindings
4. Expanded extension API surface, including hooks for customizing the built-in grep tool, public methods to run slash commands from extensions, and richer runtime context access.

---

## 6. Developer Pain Points
Recurring high-priority frustrations reported by the community:
1. Persistent provider compatibility inconsistencies across third-party endpoints, including incorrect API parameter mapping, broken `developer` role handling for proxied models, and missing auto-auth workflows for GCP/Vertex
2. Cross-platform TUI text editing inconsistencies, including broken shift+enter behavior and non-standard MacOS keyboard shortcuts that break power user muscle memory
3. Severe performance degradation for large sessions with >100k tokens of context, leading to excessive idle CPU and syscall rates
4. Broken cross-OS path resolution for custom tool operations, a major blocker for Windows users running Pi against remote Linux servers over SSH.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-05
---
## 1. Today's Highlights
A new v0.17.1 nightly pre-release was published yesterday, alongside multiple high-priority feature patches that deliver long-awaited Claude Code parity capabilities including cross-session usage tracking and global cross-project user memory. The community is actively triaging a top 10-comment JetBrains Rider OAuth login bug that blocks IDE ecosystem access, while daemon-side ACP transport improvements will soon enable zero-adapter native connectivity for editors like Zed and Goose. Multiple core stability fixes for context compression, model persistence, and headless Linux deployments were merged in the last 24 hours to reduce runtime crash rates.

## 2. Releases
- **v0.17.1-nightly.20260604.16dd99fa3**: Pre-release rolled out via [PR #4742](https://github.com/QwenLM/qwen-code/pull/4742) by the Qwen Code CI bot. This is the first nightly build targeting the upcoming v0.17.1 stable release, focused on daemon stability, UX bug fixes, and initial ACP native transport support. Full changelog is available [here](https://github.com/QwenLM/qwen-code/compare/v0.17.0...v0.17.1-nightly.20260604.16dd99fa3).

## 3. Hot Issues
1. **[#4493](https://github.com/QwenLM/qwen-code/issues/4493) JetBrains Rider OAuth login infinite redirect bug**: 10 comments (highest engagement yesterday), open and awaiting triage. The bug breaks Alibaba Cloud token plan access for Rider users, blocking Qwen Code adoption across the JetBrains ecosystem.
2. **[#4722](https://github.com/QwenLM/qwen-code/issues/4722) Status line displays raw model ID instead of human-readable name**: Closed P2 bug, resolved. The broken display blocked users from easily distinguishing model variants and broke multi-key model setup workflows.
3. **[#4723](https://github.com/QwenLM/qwen-code/issues/4723) Request for native rules/instructions feature parity with Claude Code / Copilot**: 5 comments, open. Users are requesting a persistent cross-session custom rules system to enforce code style, project conventions, and workflow preferences that do not require re-definition per session.
4. **[#4597](https://github.com/QwenLM/qwen-code/issues/4597) Cross-session persistent /stats usage dashboard**: 4 comments, 1 thumbs up, open. Current in-memory per-session only telemetry fails to support tracking long-term team or personal token consumption and performance trends.
5. **[#4747](https://github.com/QwenLM/qwen-code/issues/4747) Global cross-project user auto-memory**: 4 comments, open. Users report the existing per-project memory forces the model to re-learn their coding style, preferences, and background every time they start work on a new repository.
6. **[#4782](https://github.com/QwenLM/qwen-code/issues/4782) ACP Streamable HTTP transport implementation tracking**: Open. The new `/acp` endpoint implemented for `qwen serve` will eliminate the need for custom adapters, allowing all ACP-compatible editors to connect to local Qwen Code instances natively.
7. **[#4627](https://github.com/QwenLM/qwen-code/issues/4627) Auto-update EACCES failure on macOS for sudo npm global installs**: Closed P2 bug. The issue affected a large share of users that installed Qwen Code via system global npm, resulting in repeated failed auto-update prompts.
8. **[#4777](https://github.com/QwenLM/qwen-code/issues/4777) MCP tool listing breaks system prompt cache on every discovery**: Open performance bug. Unnecessary prompt cache invalidation increases token overhead and adds measurable latency for users running multiple MCP servers.
9. **[#4421](https://github.com/QwenLM/qwen-code/issues/4421) Local-first diagnostic framework with ring buffer and /bug collect bundle**: Open. The proposed user-controlled, zero-auto-telemetry system solves the common pain point where users cannot provide debug logs for issues that reproduced before debug mode was enabled.
10. **[#4727](https://github.com/QwenLM/qwen-code/issues/4727) TUI no response in dual non-interactive output mode on Linux**: Open. The bug breaks headless automation workflows that rely on JSONL input/output pipelines for Qwen Code.

## 4. Key PR Progress
1. **[#4779](https://github.com/QwenLM/qwen-code/pull/4779) Interactive /stats dashboard with cross-session tracking**: Implements the top requested usage tracking feature, adding three tabs for live current-session metrics, historical usage trends, and tool call efficiency analysis.
2. **[#4764](https://github.com/QwenLM/qwen-code/pull/4764) Global user-level auto-memory at `~/.qwen/memories/`**: Resolves feature request #4747, reusing Qwen Code's existing 4-type memory taxonomy to support cross-project preference storage without extra runtime overhead.
3. **[#4774](https://github.com/QwenLM/qwen-code/pull/4774) Daemon mode code cleanup**: Prepares the daemon feature branch for squash merge to main, reducing duplicated code across 58 source files and cutting overall technical debt before v0.17 release.
4. **[#4677](https://github.com/QwenLM/qwen-code/pull/4677) Full Vim mode bug fix patch**: Resolves Esc key leak, broken Enter submission, input render lag, and implements all missing normal mode VIM commands for power user workflows.
5. **[#4716](https://github.com/QwenLM/qwen-code/pull/4716) Headless Linux open browser crash fix**: Replaces raw `xdg-open` calls for `/bug`, `/docs`, `/insight` commands with a secure, environment-aware launcher that skips desktop app calls in container/SSH environments.
6. **[#4734](https://github.com/QwenLM/qwen-code/pull/4734) Model persistence corruption bug fix**: Strips runtime dynamic snapshot prefixes before writing the active model name to `settings.json`, eliminating the recurring "model not found 404" error that surfaced after restarts.
7. **[#4705](https://github.com/QwenLM/qwen-code/pull/4705) Daemon runtime language switching endpoint**: Adds the `/session/:id/language` POST API that lets users change UI and LLM output language dynamically without modifying the shared session transcript.
8. **[#4526](https://github.com/QwenLM/qwen-code/pull/4526) Bound hard-rescue context compression retries**: Adds a deterministic exit limit for oversized prompt compression workflows, eliminating infinite loops that crashed Qwen Code for extremely large input contexts.
9. **[#4756](https://github.com/QwenLM/qwen-code/pull/4756) Auto-approve Computer Use setup for high-trust modes**: Fixes the initial installation failure for desktop automation in YOLO, AUTO_EDIT, and AUTO approval modes, removing the unnecessary confirmation prompt for zero-config Computer Use flows.
10. **[#4596](https://github.com/QwenLM/qwen-code/pull/4596) Git submodule full file crawling support**: Adds `--recurse-submodules` flag to the git file indexer, ensuring no code inside nested git submodules is missed during context window population.

## 5. Feature Request Trends
The most requested capabilities center on three core directions:
1. **Claude Code / Copilot parity**: Custom user rules/instructions, cross-session usage dashboards, non-AI fast context compression, and global cross-project memory are the highest-voted feature requests, as users prioritize feature alignment with competing AI dev tools.
2. **Expanded ACP native integration**: Community demand is high for zero-adapter native connectivity with third-party editors including Zed, JetBrains, and Goose, to reduce integration overhead for cross-editor workflows.
3. **Non-interactive daemon workflow hardening**: Requests for background fork agent support, 1s-level daemon cold start latency, and full OpenTelemetry observability for the `qwen serve` daemon reflect growing adoption of Qwen Code as a backend service for automation pipelines.

## 6. Developer Pain Points
Recurring high-impact frustrations reported over the last 24h include:
1. IDE ecosystem login failures: The unpatched JetBrains Rider OAuth infinite redirect bug blocks a large segment of the target user base from accessing cloud hosted model plans.
2. Permission-related auto-update failures: Users who installed Qwen Code via global sudo npm on macOS/Linux face repeated EACCES errors for built-in auto-update, requiring manual intervention to upgrade.
3. Unexpected prompt cache invalidation: Dynamic MCP tool discovery breaks the system prompt cache unexpectedly, adding unplanned token costs and latency for heavy MCP users.
4. Headless environment compatibility gaps: TUI non-interactive mode is unresponsive in JSONL pipeline mode, and desktop-only commands crash the whole process on container/SSH deployments with no fallback.
5. Inconsistent model state handling: Raw model IDs displayed in the status line and unexpected persistence of the `/model` command selection breaks multi-model shared session setups for teams.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-05
---
## 1. Today's Highlights
The project officially completed its public rename from DeepSeek TUI to CodeWhale with the v0.8.53 release, launching legacy compatibility shims for existing users while laying out a structured, dependency-ordered execution roadmap for the upcoming v0.9.0 major release. 15+ community-submitted PRs were merged or opened in the last 24 hours, directly resolving 8 previously reported critical usability bugs including the full provider lockout after Kimi auth failures, and broken MCP tool routing for common server configurations. All contributor workstreams are now formally aligned to the v0.9.0 release acceptance matrix to prevent unplanned regressions.

## 2. Releases
### v0.8.53 (Latest, 2026-06-05)
https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.53
This is the first official CodeWhale branded release. Key changes:
- The project and primary binary name are updated to `codewhale` / `codewhale-tui`
- Legacy `deepseek` and `deepseek-tui` binaries are retained as deprecation shims across all v0.8.x releases, printing a single warning line before forwarding execution to the new CodeWhale binary. These legacy shims will be fully removed in v0.9.0.

## 3. Hot Issues
Top 10 noteworthy community-submitted issues:
1. **#1920: Clipboard copy silently fails on non-wlroots Wayland compositors (e.g. niri)** https://github.com/Hmbown/CodeWhale/issues/1920
   Impacts a large share of power users running non-wlroots tiling Wayland compositors, breaking the core text copy workflow entirely. 4 community members have already submitted reproduction data for debugging.
2. **#2735: Incorrect Xiaomi Mimo endpoint configuration** https://github.com/Hmbown/CodeWhale/issues/2735
   Community users reported the pre-configured Mimo provider endpoints are pointing to invalid paths, blocking access to the popular low-cost Xiaomi model offerings for Chinese regional users.
3. **#2749: Missing project-level `.codewhale/mcp.json` auto-merge support** https://github.com/Hmbown/CodeWhale/issues/2749
   The current release does not load workspace-level MCP server configs as documented, breaking shared repo MCP workflows for development teams that commit MCP tool definitions to their project repo.
4. **#2641: `read_file` hangs when processing PDFs without an explicit `pages` parameter** https://github.com/Hmbown/CodeWhale/issues/2641
   Core file processing tool bug that causes full workflow hangs and channel close errors for users processing even 2-page pure-text PDFs with full extraction enabled.
5. **#2754: Switching to Kimi K2.6 causes auth failure and locks the IDE completely** https://github.com/Hmbown/CodeWhale/issues/2754
   Critical zero-day usability break that leaves users unable to switch back to a working provider after a failed Kimi authentication, rendering the TUI entirely unusable until manual config edits.
6. **#2744: MCP tool name parsing breaks when server names contain underscores** https://github.com/Hmbown/CodeWhale/issues/2744
   The existing single underscore split logic cannot route calls to common MCP servers such as `my_db`, blocking deployment of a large share of open source MCP tool integrations.
7. **#2739: Long tasks still hang indefinitely with full session loss after restart** https://github.com/Hmbown/CodeWhale/issues/2739
   Users report that even after the v0.8.52 300-second timeout fix, extended bug fix and refactor tasks still get stuck, and all existing session data is lost after a forced restart.
8. **#2720: v0.9.0 Milestone official execution roadmap published** https://github.com/Hmbown/CodeWhale/issues/2720
   The maintainer released a dependency-ordered lane map for all v0.9.0 workstreams, preventing contributors from jumping to new feature development before core stability prerequisites are completed.
9. **#2729: v0.9.0 formal release acceptance matrix** https://github.com/Hmbown/CodeWhale/issues/2729
   A mandatory pre-release checklist covering 8 core domains (build stability, provider routing, UI, Model Lab, WhaleFlow, docs, packaging, rollback) is now public, ensuring no major regressions ship in the large v0.9.0 feature release.
10. **#2666: Agents lack visible token context and resource usage data during long tasks** https://github.com/Hmbown/CodeWhale/issues/2666
    Agents have no real-time visibility into token budget, context window pressure, elapsed runtime and API cost, leading to unplanned infinite loops and budget overruns for multi-hour tasks.

## 4. Key PR Progress
Top 10 high-impact PRs merged/in review in the last 24 hours:
1. **#2755 fix(tui): Roll back provider after auth failure** https://github.com/Hmbown/CodeWhale/pull/2755
   Directly fixes the #2754 Kimi lockout bug: stores a snapshot of the previous working provider before switching, restores the full prior state automatically if new provider auth fails, with added regression testing.
2. **#2751 fix(mcp): Merge workspace MCP config** https://github.com/Hmbown/CodeWhale/pull/2751
   Implements the project-level MCP merge feature requested in #2749: merges workspace `.codewhale/mcp.json` entries with global config, with workspace servers overriding same-name global entries and defaulting to the workspace root as their working directory.
3. **#2750 fix(tui): Add pricing labels for Xiaomi MiMo primary models** https://github.com/Hmbown/CodeWhale/pull/2750
   Resolves #2731: adds full pricing lookup support for Mimo v2.5 and Mimo v2.5 Pro models, reusing existing DeepSeek V4-Flash/V4-Pro pricing logic for consistency.
4. **#2747 / #2746 fix: Preserve underscored MCP server names** https://github.com/Hmbown/CodeWhale/pull/2747
   Fixes #2744: replaces the legacy single underscore split with longest-prefix match against the full list of known MCP server names, adding full regression coverage without breaking existing user workflows.
5. **#2753 feat(tui): Multi-tab system with cross-tab collaboration** https://github.com/Hmbown/CodeWhale/pull/2753
   Major new UX feature: adds a persistent TabManager with per-tab chat history and session context, supports full keyboard shortcuts (Ctrl+` switcher, Ctrl+Tab cycle, Ctrl+1-9 direct access) plus cross-tab task delegation primitives.
6. **#2745 feat(init): LLM-powered codebase analysis for automatic AGENTS.md generation** https://github.com/Hmbown/CodeWhale/pull/2745
   Replaces the old template-based `/init` command: the tool gathers full project metadata locally before delegating to the LLM to generate a fully customized AGENTS.md tailored to the actual codebase structure.
7. **#2740 feat(transcript): Collapse consecutive tool runs into expandable summary cells** https://github.com/Hmbown/CodeWhale/pull/2740
   Massively improves transcript UX for multi-step tasks: groups contiguous successful tool calls into a compact summary row, users can click to expand to see full individual call details.
8. **#2741 feat(config): HarnessPosture data model for per-model behavior profiles** https://github.com/Hmbown/CodeWhale/pull/2741
   Foundational v0.9.0 work: introduces a structured model posture data layer that encodes model-specific idioms, failure modes, prompt layering rules, sub-agent fanout limits and safety policies for more reliable execution across all providers.
9. **#2708 fix: Windows sub-agent completion halves TUI render width** https://github.com/Hmbown/CodeWhale/pull/2708
   Resolves a long-standing Windows-specific TUI bug where unconditionally calling `resume_terminal()` created an extra alternate screen buffer that reduced usable render width by 50%.
10. **#2736 fix(subagent): Inherit parent model instead of hardcoding deepseek-v4-flash** https://github.com/Hmbown/CodeWhale/pull/2736
    Critical fix for self-hosted and custom provider users: removes the hardcoded DeepSeek V4-Flash reference in the sub-agent route, so child agents inherit the exact model ID used by the parent session.

## 5. Feature Request Trends
The most requested feature directions identified in 24h of community activity:
1. Full native Claude Code skill ecosystem interoperability, to eliminate the need for manual porting work when using existing open source Claude Code skills in CodeWhale.
2. Structured run trace export system for WhaleFlow and Model Lab, to track full model configuration lineage across multi-model pipeline runs for audit and reproducibility.
3. Real-time resource usage dash embedded in the TUI for long-running tasks, showing live token budget consumption, context window pressure, elapsed runtime and estimated API cost.
4. First-class Hugging Face Model Lab support, including native HF model search, metadata management and zero-config local inference integration.
5. Remote workbench MVP for AWS Lightsail + Telegram bridge, enabling always-on CodeWhale instance deployment and full mobile control of agent tasks via Telegram.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by community users:
1. Core workflow breakages: Multiple unpatched bugs that block daily usage, including indefinite hangs on long tasks, unhandled provider auth failures that lock the entire UI, and MCP routing errors that break popular third-party tool integrations.
2. Post-rebrand consistency gaps: Remaining legacy DeepSeek-branded file paths (including the legacy Application Support `deepseek/settings.toml` path) are still displayed in the TUI settings view, confusing new users who adopted the tool after the CodeWhale rename.
3. Third-party provider compatibility gaps: Popular regional providers including Xiaomi Mimo and Moonshot Kimi still have unaddressed edge cases leading to silent failures or full UI locks, without proper input validation for endpoint misconfiguration.
4. Large workspace usability friction: No full PDF extraction support without requiring manual page parameter inputs, and overly verbose transcript views for multi-step workflows that make it hard to quickly scan progress on extended tasks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*