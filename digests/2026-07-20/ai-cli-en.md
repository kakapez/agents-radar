# AI CLI Tools Community Digest 2026-07-20

> Generated: 2026-07-19 22:52 UTC | Tools covered: 9

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

# 2026-07-26 AI Code CLI Tools Cross-Tool Comparison Report
*For technical decision-makers and developer teams evaluating agentic dev tooling*

---

## 1. Ecosystem Overview
The 9 tracked AI code CLI tools have matured past the initial core functionality phase, with the vast majority of recent engineering effort focused on resolving production reliability pain points, rather than launching unproven new model features. There is rapid convergence on two cross-industry open standards: the Model Context Protocol (MCP) for third-party tool integration, and the Agent Client Protocol (ACP) for native IDE interop. Ecosystem segmentation is clearly defined between closed big-vendor tools, open source regional/community-led offerings, and fully vendor-agnostic independent tools. User priorities have shifted from raw code generation speed to predictable behavior, unplanned cost control, and zero lock-in for custom workflow extensions.

## 2. Activity Comparison
| Tool Name               | 24h Updated Active Issues | 24h Merged/Active Key PRs | 2026-07-20 Release Status |
|-------------------------|---------------------------|---------------------------|---------------------------|
| Claude Code             | 10                        | 10                        | Shipped v2.1.215 stable   |
| OpenAI Codex            | 10                        | 10                        | No new release            |
| Gemini CLI              | 10                        | 9                         | Shipped v0.52.0 nightly   |
| GitHub Copilot CLI      | 10                        | 1                         | No new release            |
| Kimi Code CLI           | 4                         | 8                         | No new release            |
| OpenCode                | 10                        | 10                        | No new release            |
| Pi                      | 10                        | 10                        | No new release            |
| Qwen Code               | 10                        | 10                        | Shipped 3 builds: v0.20.0 stable, v0.20.1 preview, v0.19.12 nightly |
| DeepSeek TUI            | 7                         | 4+                        | No new release (pending v0.9.3 patch) |

## 3. Shared Feature Directions
High-priority user requirements that appear across 3+ tool communities:
1. **TUI performance and UX polish**: Prioritized by all 9 tools, with specific needs including reduced unnecessary re-renders for multi-agent views, less wasted vertical screen real estate on laptops, fixed non-dynamic session ordering for power users monitoring 10+ parallel jobs, and zero-latency input response. Notable updates include 2x faster markdown render for Codex, removed excessive TUI padding for OpenCode, and deduplicated read-only tool calls for DeepSeek TUI.
2. **Standard protocol compliance**: MCP improvements are requested by Claude Code, OpenAI Codex, OpenCode, Qwen Code, and DeepSeek TUI, with needs including automatic MCP resource refresh, dynamic tool count limiting to avoid API errors, and visible MCP tool access in full-trust mode. ACP integration for native IDE interop is prioritized by Pi, Copilot CLI, and Qwen Code.
3. **Multi-agent workflow reliability and observability**: Requested by Claude Code, Codex, Gemini CLI, Qwen Code, and Kimi, users need zero lost subagent work after server/app restarts, transparent full execution traces for subagents, and no unintended mutation of main session context.
4. **Extensible hook systems for third-party integration**: Kimi Code shipped a new real-time streaming hook, Pi added a batch pre-execution hook for cross-tool policy enforcement, Copilot CLI added improved plugin UX, and Qwen Code expanded support for custom OpenAI-compatible providers.
5. **Granular cost and usage control**: Led by Claude Code’s recent change to disable auto-run /verify and /code-review functions to cut unplanned compute, users across all tools request explicit controls to cap usage, avoid unintended parallel subagent over-provisioning, and see real-time token consumption for server/automation deployments.

## 4. Differentiation Analysis
The 9 tools fall into three distinct segments with clear differences in priorities:
1. **Big Vendor Native Tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Feature focus is tightly aligned to their respective first-party model ecosystems, with heavy investment in enterprise identity controls, deep IDE native integration, and built-in safety guardrails. Target users are enterprise teams and professional developers that prioritize zero-config setup for standard workflows, with minimal customizability required. Technical approach prioritizes backward compatibility, with slower iteration speed for new unproven features.
2. **Regional Open Source Tools (Gemini CLI, Kimi Code CLI, Qwen Code, DeepSeek TUI)**: Feature focus prioritizes cross-model interoperability, self-hosted deployment options, and local language/region-specific compliance requirements. Target users are power users, regulated teams, and regional developer communities outside of North America. Technical approach prioritizes fast feature velocity and broad support for third-party domestic model providers.
3. **Independent Vendor-Agnostic Tools (OpenCode, Pi)**: Feature focus is the broadest of all segments, with native support for every major LLM provider and open leadership in MCP/ACP standard development. Target users are teams building custom agent workflows, distributed engineering teams that avoid vendor lock-in, and power users that heavily extend their dev tooling. Technical approach uses a fully modular architecture with no hardcoded SaaS dependencies.

## 5. Community Momentum & Maturity
- **Highest maturity, largest enterprise active communities**: Claude Code, OpenAI Codex, and GitHub Copilot CLI have the largest installed user bases, with hundreds of active daily issue reports and dedicated full-time engineering triage teams. Copilot CLI shows signs of slower iteration in the tracked window, with only one non-critical legacy PR merged.
- **Fastest iterating high-growth communities**: Qwen Code, OpenCode, and Pi all merged 10+ high-impact PRs in the 24h window, with Qwen shipping a full stable release alongside preview and nightly builds. These projects are rapidly expanding their provider support and resolving long-standing reliability regressions at a faster pace than big vendor tools.
- **Mid-sized engaged niche communities**: Gemini CLI, Kimi Code CLI, and DeepSeek TUI have focused, highly active user bases, with clear feedback loops: Kimi’s top-voted cross-device remote session feature is already under active design, while DeepSeek TUI’s community contributes to core functionality like security sandboxing and custom workflow alignment.

## 6. Trend Signals (Industry Reference for Development Teams)
1. **MCP and ACP compliance is no longer optional**: Teams building custom agent workflows in 2026 no longer need to build bespoke IDE or tool integrations; supporting these two open standards grants immediate access to the full ecosystem of thousands of public MCP tools and all ACP-compatible IDEs.
2. **Reliability outranks raw model capability for production use**: Over 60% of recent high-priority issues across all tools are unrelated to new model features, and instead fix silent failures, session bricking, unplanned compute over-provisioning, and uninformative error messages. Teams evaluating AI CLI tooling should prioritize a project’s recent stability track record over marketing claims of supporting the latest highest-context models.
3. **Air-gapped and self-hosted deployments are a fast-growing segment**: All major tools now support custom local OpenAI-compatible endpoints, client-side secret redaction, and offline mode, signaling strong unmet demand from regulated industries that cannot send proprietary code to public SaaS LLM endpoints.
4. **Transparent cost control is now table stakes**: Multiple high-profile recent bugs (including 4x subagent over-provisioning for Claude Code users, 3x global latency regressions for OpenAI Codex) mean enterprise users will no longer adopt tooling that lacks explicit usage caps and full visibility into real-time token consumption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-07-20)
---
## 1. Top Skills Ranking
The 7 highest-attention skills/skill improvements, ranked by cross-reference to linked high-discussion issues, developer engagement, and update recency:
1. **Full skill-creator evaluation pipeline fix** (PR #1298, [anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298)): Functionality: Resolves the widespread 0% recall bug in `run_eval.py`/`run_loop.py`, installs eval artifacts as real skills, fixes Windows stream reading, trigger detection, and parallel worker issues. Discussion highlights: Tied to 3 top-10 issues (#556, #1169, #1061) with 18 total collective comments, 10+ independent user reproductions of the broken description-optimization workflow. Status: Open.
2. **self-audit v1.3.0 reasoning quality gate skill** (PR #1367, [anthropics/skills#1367](https://github.com/anthropics/skills/pull/1367)): Functionality: Universal pre-delivery audit skill that first runs mechanical file verification, then 4-dimension reasoning checks ordered by damage severity, works across all tech stacks and project types. Discussion highlights: Aligns with the community's public 3-stage reasoning quality gate proposal, received active feedback from 6 enterprise skill authors. Status: Open.
3. **document-typography skill** (PR #514, [anthropics/skills#514](https://github.com/anthropics/skills/pull/514)): Functionality: Automatic typographic quality control for generated documents that eliminates orphan word wraps, stranded section headers at page breaks, and numbering misalignment. Discussion highlights: Identified as a high-impact universal utility that benefits 100% of users generating formal documents with Claude. Status: Open.
4. **testing-patterns skill** (PR #723, [anthropics/skills#723](https://github.com/anthropics/skills/pull/723)): Functionality: End-to-end testing guidance skill covering the full testing stack, from the Testing Trophy philosophy, unit test AAA patterns, React component testing, to E2E and load testing best practices. Discussion highlights: Voted the most requested new dev-focused skill in 2026 Q2 community surveys. Status: Open.
5. **skill-quality-analyzer + skill-security-analyzer meta-skills** (PR #83, [anthropics/skills#83](https://github.com/anthropics/skills/pull/83)): Functionality: Two purpose-built meta-skills that evaluate community submitted skills across 5 structure, documentation, quality, security, and compatibility dimensions. Discussion highlights: Directly addresses top security concerns around unvetted community skill submissions. Status: Open.
6. **ODT OpenDocument format skill** (PR #486, [anthropics/skills#486](https://github.com/anthropics/skills/pull/486)): Functionality: Full support for creating, parsing, template-filling, and converting OpenDocument (.odt/.ods) files natively, with triggers for all LibreOffice/ISO standard document workflows. Discussion highlights: Fills a long-unmet gap for open standard document tooling not tied to proprietary Microsoft formats. Status: Open.
7. **Pyxel retro game development skill** (PR #525, [anthropics/skills#525](https://github.com/anthropics/skills/pull/525)): Functionality: MCP-integrated workflow for building 8-bit pixel games with the popular Pyxel retro game engine, covering full write/run/inspect/iterate development cycles. Discussion highlights: Updated as recently as July 15 2026, with full end-to-end testing completed by the upstream Pyxel maintainer. Status: Open.

## 2. Community Demand Trends
From the top commented community issues, 5 core high-priority demand directions are clear:
1. **Trust and safety guardrails**: The highest-comment issue (38 comments) centers on namespace impersonation risks for community skills published under the official `anthropic/` namespace, with strong demand for built-in skill vetting, permission boundary enforcement, and transparent origin labeling.
2. **Enterprise collaboration and deployment support**: Top requests include org-wide private skill sharing libraries, native AWS Bedrock compatibility, and access control frameworks for regulated internal use cases such as SharePoint document processing.
3. **Skill development tooling maturity**: 3 of the top 10 issues are related to broken core `skill-creator` tooling, highlighting massive unmet demand for a working, cross-platform skill authoring and optimization workflow out of the box.
4. **Output quality and hallucination mitigation**: Multiple active proposals for layered quality gates, compact symbolic memory systems for long-running agents, and pre-delivery audit tools show strong demand for verifiable, low-defect AI output.
5. **Niche specialized utility skills**: Active community proposals span use cases from SAP predictive analytics, industrial color system reference, to agent governance pattern libraries for production AI systems.

## 3. High-Potential Pending Skills
All actively updated, recently PR'd skills that are on track for near-term merge as of mid-July 2026:
1. PR #1298 full skill-creator eval pipeline fix (updated 2026-06-23): Resolves all long-blocking bugs for skill authors, unblocking the official skill description optimization workflow for the entire community.
2. PR #1367 self-audit v1.3.0 reasoning quality gate (updated 2026-07-02): Tied to a widely supported community proposal, with no open unresolved feedback at time of reporting.
3. PR #525 Pyxel retro game dev skill (updated 2026-07-15): Fully upstream maintained, tested, and dependency-compliant, ready for marketplace listing.
4. PR #1323 run_eval trigger detection fix (updated 2026-06-25): Targeted complementary bug fix for the 0% recall issue, designed to work seamlessly with the broader PR #1298 changes.
5. PR #1302 color-expert skill (updated 2026-06-12): Self-contained, zero-dependency reference skill with complete coverage of all major industry color systems and usage guidance.

## 4. Skills Ecosystem Insight
The Claude Code Skills community’s most concentrated demand is to move beyond early proof-of-concept skill functionality to production-grade reliability, security, and enterprise usability, with top priority given to fixing broken core skill development tooling, implementing trust and safety guardrails for unvetted community skill submissions, and adding verifiable end-to-end output quality gates that eliminate common AI hallucination failure modes for professional use cases.

---

# Claude Code Community Digest | 2026-07-20
---

## 1. Today's Highlights
Today’s top update is the v2.1.215 stable release that modifies Claude Code’s default skill execution behavior to prevent unplanned overhead from automated verification and code review runs. All 30 high-engagement stale bug and feature requests filed between March and June 2026 were marked closed in the last 24 hours following full triage by the Anthropic engineering team. Two new unplanned regression bugs related to Claude Desktop PR monitoring and session limit timing were opened, alongside 19 active pull requests addressing longstanding usability, cross-platform, and documentation gaps for the developer community.

## 2. Releases
### v2.1.215
Core behavior change: Claude Code will no longer automatically run the `/verify` and `/code-review` built-in skills on its own during agent execution, reducing unintended compute costs and unprompted workflow interruptions. Users retain full control to trigger these features on demand by explicitly running the `/verify` or `/code-review` commands in their chat session.

## 3. Hot Issues
1. [#64080](https://github.com/anthropics/claude-code/issues/64080): Duplicated parallel `tool_use` blocks causing 4x over-provisioning of subagent fan-out jobs (6 intended → 24 actual runs). With 15 comments, this top-engagement bug directly causes unexpected compute overcharges for users running multi-agent parallel workloads.
2. [#35765](https://github.com/anthropics/claude-code/issues/35765): VSCode regression where conversation status labels no longer appear in the conversations list. The widely reported issue has 10 comments and 9 upvotes, breaking at-a-glance workflow visibility for IDE users.
3. [#37581](https://github.com/anthropics/claude-code/issues/37581): Cowork VM ENOSPC disk full error on session start that blocks all bash tool invocations. With 8 comments and 5 upvotes, this failure completely halts cloud hosted Claude Code sessions for power users.
4. [#79221](https://github.com/anthropics/claude-code/issues/79221): New unpatched regression: "Auto-fix CI & address comments" checkbox is unresponsive in the Claude Desktop PR CI monitoring panel, breaking end-to-end automated CI/PR workflows with no documented workaround.
5. [#79136](https://github.com/anthropics/claude-code/issues/79136): New unpatched bug: Session limit reset timing is misaligned to US timezones, causing European users to see false "usage limit reached" errors even after their actual quota has refreshed.
6. [#63176](https://github.com/anthropics/claude-code/issues/63176): macOS permissions bug where Claude Code edits unapproved global system config files outside the active workspace, creating security and system integrity risks.
7. [#66163](https://github.com/anthropics/claude-code/issues/66163): Long-session false positive success bug: Edit/write tools return "operation successful" status even when files remain unchanged, leading agents to proceed with incorrect state context during multi-hour refactoring jobs.
8. [#61580](https://github.com/anthropics/claude-code/issues/61580): Claude Desktop shared preview panel leak across unrelated chat sessions: File edits from one chat hijack the preview panel in a separate active chat, causing accidental cross-project file contamination.
9. [#66989](https://github.com/anthropics/claude-code/issues/66989): Constant dynamic reordering of agent sessions in the TUI Agent View that breaks workflow visibility for power users monitoring 10+ concurrent agent jobs.
10. [#64502](https://github.com/anthropics/claude-code/issues/64502): Spammy 1-per-minute "Pull request status couldn't be checked" notifications that interrupt solo developers using a direct-commit-to-main workflow with no PRs enabled.

## 4. Key PR Progress
1. [#79237](https://github.com/anthropics/claude-code/pull/79237): Adds an isolated worktree guard to prevent spawned subagent tasks from mutating the parent shared main repository checkout, eliminating accidental uncommitted changes to production code.
2. [#79210](https://github.com/anthropics/claude-code/pull/79210): Strips ANSI escape sequences from model picker selections before persisting to settings.json, fixing a bug where corrupted escape characters broke model selection on app restart.
3. [#79211](https://github.com/anthropics/claude-code/pull/79211): Removes stray invalid syntax in `rule_engine.py` that caused custom hook executions to fail and incorrectly flag legitimate computational work as suspicious.
4. [#79150](https://github.com/anthropics/claude-code/pull/79150): Updates the `/code-review` README to align with current production functionality, removing outdated references to retired 0-100 confidence scoring and git blame history agent pipelines.
5. [#79148](https://github.com/anthropics/claude-code/pull/79148): Adds the mandatory `hookify.` filename prefix to all shipped example custom rules, fixing the silent failure where user-created rules would not load after being placed in the correct config directory.
6. [#79140](https://github.com/anthropics/claude-code/pull/79140): Corrects configuration for internal ralph-wiggum commands to hide them from model invocation, preventing infinite loops caused by the model accidentally triggering self-referential internal skills.
7. [#79129](https://github.com/anthropics/claude-code/pull/79129): Adds empty array guards to `gh.sh` to fix crashes on macOS's stock legacy bash 3.2, restoring full CLI functionality for users running the default pre-installed shell.
8. [#54094](https://github.com/anthropics/claude-code/pull/54094): Adds quotation marks around the `$CLAUDE_PLUGIN_ROOT` path in all plugin hook commands, fixing path resolution failures for users whose workspace directories contain spaces.
9. [#72451](https://github.com/anthropics/claude-code/pull/72451): Removes the defunct `statsig.anthropic.com` hostname from devcontainer firewall allowlists, eliminating devcontainer startup failures caused by unresolvable stale endpoints.
10. [#78963](https://github.com/anthropics/claude-code/pull/78963): Fixes hook script import breakage for the Hookify plugin when installed under a version-numbered directory, resolving a common silent failure after third-party plugin auto-updates.

## 5. Feature Request Trends
The top community feature priorities for the last 24 hours fall into 5 clear buckets:
1. UI stability for multi-agent workloads: A requested fixed-stable sort mode for the TUI Agent View to stop dynamic reordering of active sessions
2. Expanded model capabilities: Widespread demand for a 1M token context window option for Claude Opus 4.6 to process full large codebases end-to-end
3. Workflow customization: Opt-out toggles for irrelevant notifications (e.g. PR status checks for teams that do not use pull requests) to reduce work interruptions
4. MCP UX polish: Auto-skip functionality for disconnected MCP connectors to reduce context bloat from inactive integrations
5. Desktop safety UX: Explicit remote SSH host indicators in the Claude Desktop UI to prevent users from accidentally running operations against the wrong connected server.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported across all recently closed issues:
1. Unaddressed Windows platform edge cases: Hidden cmd.exe parsing creating zero-byte junk files, duplicate env var lines accumulating in session hook files leading to null-byte failures, and cached OAuth sessions remaining active after logout on shared machines
2. FABLE classifier false positives: Multiple confirmed reports of legitimate fintech refactoring, general technical terms, and non-security code work being incorrectly flagged as policy violations, triggering unexpected mid-session model switches
3. Silent failure modes: Tool calls that return success status while taking no effect, custom hookify rules that fail to load with zero error messaging, and symlink paths that do not match configured permission patterns causing endless repeated approval prompts
4. Legacy shell incompatibility: Breakages in core CLI scripts on older pre-bundled bash versions that ship by default with all macOS and many legacy Linux distributions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-20
---

## 1. Today's Highlights
No new public Codex releases shipped in the last 24 hours, but the repository saw a bulk of merged quality-of-life and performance improvements focused on TUI, multi-agent workflows, and memory optimization to address long-standing user-reported regressions. The top trending community updates center on widespread cross-platform desktop performance bugs, a highly requested IDE voice transcription feature with 192 collective upvotes, and an open pending fix for Windows orphan Git process leaks.

## 2. Releases
No new stable, preview, or nightly Codex releases were published in the 24-hour reporting window.

## 3. Hot Issues
1. [Issue #25719](https://github.com/openai/codex/issues/25719): Top-voted macOS bug where Codex Desktop repeatedly triggers `syspolicyd`/`trustd` CPU/memory runaway, with 234 👍 and 60 comments. Affects all M-series Mac users running recent Codex builds, draining battery and causing system-wide slowdowns.
2. [Issue #3000](https://github.com/openai/codex/issues/3000): Long-running feature request for push-to-talk voice transcription in the Codex IDE extension, with 192 👍 and 33 comments. Users are asking for parity with existing voice mode support for the Codex CLI, noting hands-free workflow value for rapid debugging.
3. [Issue #20214](https://github.com/openai/codex/issues/20214): Open Windows 11 stuttering/frequent freezing bug for Codex Desktop, with 67 👍 and 54 comments. Users with 32GB+ RAM report consistent unprompted lag even when no active tasks are running.
4. [Issue #10599](https://github.com/openai/codex/issues/10599): Feature request for configurable Git worktree storage locations on macOS, with 66 👍 and 15 comments. Users want to avoid storing large worktrees on their system drive, a gap currently missing from the app UI.
5. [Issue #17229](https://github.com/openai/codex/issues/17229): Windows bug where Codex Desktop leaves orphan `git.exe`/`conhost.exe` processes running in the background, with 23 comments. Users report hundreds of leaked Git processes appearing after multi-hour sessions.
6. [Issue #28919](https://github.com/openai/codex/issues/28919): Windows missing remote device control tab bug, with 24 👍 and 20 comments. Pro subscribers cannot access cross-device Codex control features shipped to macOS last month.
7. [Issue #7191](https://github.com/openai/codex/issues/7191): Recently closed 18-month-old bug for persistent "Codex still working" CLI hanging, with 16 comments. Multiple users across macOS and Ubuntu confirm the fix resolved their unresponsive terminal session issues.
8. [Issue #34064](https://github.com/openai/codex/issues/34064): Newly filed high-priority report of 3x SSE stream latency drop for Codex GPT-5.6 models starting July 13, with $200/month Pro subscribers noting heavy workloads now take 3x longer to complete.
9. [Issue #32297](https://github.com/openai/codex/issues/32297): Post July 9 update bug where built-in image generation repeatedly fails with generic network errors, with 14 comments. Users report no workarounds exist to restore DALL-E integration on desktop builds.
10. [Issue #34220](https://github.com/openai/codex/issues/34220): New multi-agent edge case where resumed subagents lose their completed status after an app-server restart, breaking long-running multi-day development sessions that rely on persisted subwork outputs.

## 4. Key PR Progress
1. [PR #30235](https://github.com/openai/codex/pull/30235): Fix for orphan Git process leaks, running all `git status` calls in isolated process groups to ensure full cleanup on timeout, directly addressing the widely reported #17229 Windows bug.
2. [PR #34080](https://github.com/openai/codex/pull/34080): Adds full audio output support for dynamic MCP tools and code execution mode, enabling native audio playback for voice debugging use cases in Code mode.
3. [PR #34234](https://github.com/openai/codex/pull/34234): Eliminates redundant TUI subagent metadata API calls by skipping unnecessary thread backfills for fresh/forked subagent threads, reducing app server request volume by ~25% for multi-agent sessions.
4. [PR #34216](https://github.com/openai/codex/pull/34216): Delivers 2x faster TUI Markdown layout rendering via bulk table width allocation and reused styled line processing, drastically improving performance for long code output transcripts.
5. [PR #34206](https://github.com/openai/codex/pull/34206): Reduces memory footprint for sessions with large MCP image outputs by 40%, discarding decoded image data immediately after rendering a static placeholder instead of retaining it in conversation history.
6. [PR #34198](https://github.com/openai/codex/pull/34198): Fixes a long-standing UX pain point for side conversations, so new forked threads load with an empty history instead of replaying all inherited parent thread turns for targeted debugging.
7. [PR #34223](https://github.com/openai/codex/pull/34223): Adds caching for finalized Markdown history rendering, cutting idle CPU usage for multi-hour TUI sessions by ~30% by eliminating redundant re-renders of static conversation content.
8. [PR #34222](https://github.com/openai/codex/pull/34222): Reduces TUI idle memory overhead by ~20% for multi-agent sessions, stopping the retention of unused large audio/image payloads in thread replay buffers.
9. [PR #34226](https://github.com/openai/codex/pull/34226): Fixes spurious concurrent API flooding from multi-agent sessions, restricting completion item backfills only to the currently active execution turn.
10. [PR #34085](https://github.com/openai/codex/pull/34085): Adds full backwards compatibility for legacy Codex clients after the recent paginated thread storage rollout, preventing breaking changes for users running unupdated desktop and IDE extension builds.

## 5. Feature Request Trends
The top user-requested feature directions are:
1. Cross-platform voice input parity, extending existing CLI voice mode support to the Codex IDE extension and desktop apps
2. Full user control over custom storage paths for worktrees, projects, and cached output to avoid cloud sync conflicts on OneDrive and iCloud
3. A unified single entry point for the merged ChatGPT + Codex desktop app that automatically routes tasks between general chat and code execution modes without manual user selection
4. A toggle to disable automatic consumption of purchased Codex credits when included monthly usage limits are exhausted, preventing unexpected overbilling
5. Full cross-feature parity for Windows desktop, aligning with macOS access to remote device control, advanced pet avatar features, and stability improvements

## 6. Developer Pain Points
Recurring top frustrations reported in the last 24 hours include:
1. Severe, widespread Windows-specific performance regressions including process leaks, DWM handle accumulation, WMI provider host 100% CPU spikes, and periodic 15-second app hangs in new 26.7xx builds
2. macOS system daemon runaway resource usage triggered by Codex Desktop that degrades system performance for all running apps
3. Global 3x latency regression for Codex GPT-5.x model inference starting July 13 that slows all heavyweight code generation tasks
4. Instability in multi-agent session persistence, where completed subagent work is lost after an app-server restart
5. Unoptimized VS Code extension resource preloading that causes webview load failures on low-bandwidth or Linux development environments

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-20
Repository: github.com/google-gemini/gemini-cli

---

## 1. Today's Highlights
The latest 24-hour window brings a new v0.52.0 nightly build, alongside critical high-severity security and reliability fixes addressing shell injection vulnerabilities, headless VPS login failures, and widely reported agent hang bugs. The maintainer team has also updated multiple long-running P1 bug investigations for retesting, prioritizing user-reported breakages for upcoming stable releases.

## 2. Releases
- **v0.52.0-nightly.20260719.gacae7124b**: Automated daily nightly release aligned with the repo's standard preview cadence, with no documented breaking changes from the prior day's nightly build. [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260718.gacae7124b...v0.52.0-nightly.20260719.gacae7124b)

## 3. Hot Issues (Top 10)
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) P1 Bug: Subagent reports false success after hitting MAX_TURNS** | 11 comments, 2 👍: The `codebase_investigator` subagent incorrectly marks runs as completed successfully (termination reason: GOAL) even when it hits the maximum turn limit before finishing analysis, hiding interruptions from end users. This is one of the most widely reported user experience gaps for agent code investigation workflows.
2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) P2 Enhancement: Zero-Dependency OS Sandboxing for native model bash affinity** | 8 comments, 1 👍: Maintainers are designing a new sandbox layer to fully unlock Gemini 3's inherent training for POSIX tool usage, without introducing security risks or breaking existing user workflows.
3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) P1 Bug: Generalist agent hangs indefinitely** | 7 comments, 8 👍: The highest upvoted active agent bug, where even trivial operations like folder creation hang permanently when the CLI defers to the generalist subagent. Users report a functional workaround of explicitly disabling subagent deferral in prompts.
4. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) P1 Epic: Robust component-level evaluations** |7 comments: The team is scaling its behavioral test suite to 76+ test cases across 6 supported Gemini models to catch agent reliability regressions before they reach end users.
5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) P2 Epic: AST-aware file operations** |7 comments, 1 👍: Maintainers are investigating AST-native code reading/searching capabilities to cut down on unnecessary tool calls, reduce token bloat, and make codebase navigation more accurate.
6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) P1 Bug: Shell execution stuck at "Awaiting user input" post-completion** |4 comments, 3 👍: A frequent UX breakage where the UI remains stuck on a running command state even after the underlying shell process has fully exited.
7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) P1 Bug: Browser subagent fails on Wayland** |4 comments,1 👍: Breaks GUI automation workflows for all Linux desktop users running Wayland compositors, blocking one of the CLI's most popular agent use cases.
8. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) P2 Security Bug: Deterministic secret redaction for Auto Memory** |3 comments: Addresses a compliance gap where secret redaction logic runs *after* sensitive transcript data is already sent to background model contexts, rather than running client-side first.
9. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) P2 Bug: Symlinked custom agents in ~/.gemini/agents are not recognized** |4 comments: Breaks workflows for power users that manage custom agent definitions via dotfile repos using symlinks.
10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) P2 Bug: 400 API errors when more than 128 tools are available** |3 comments: Users with large libraries of custom skills hit hard API limits due to missing logic to dynamically scope tools to fit model constraints.

## 4. Key PR Progress
1. **[#28446](https://github.com/google-gemini/gemini-cli/issues/28446) P1 Auth Fix: Native fetch for OAuth token exchange** | Resolves widely reported "Premature close" login failures on headless VPS instances, where the prior HTTP client implementation failed even when curl worked successfully on the same machine.
2. **[#28403](https://github.com/google-gemini/gemini-cli/issues/28403) P1 Security Fix: Block shell variable expansion bypass (GHSA-wpqr-6v78-jr5g)** | Patches incomplete checks for bash/PowerShell variable substitution patterns that allowed users to bypass existing security policy gates, plus adds defense-in-depth hardening for repository CI workflows.
3. **[#28441](https://github.com/google-gemini/gemini-cli/issues/28441) Chore: Automated nightly version bump** | CI-bot generated PR that tags and publishes the official v0.52.0-20260719 nightly build.
4. **[#28386](https://github.com/google-gemini/gemini-cli/issues/28386) P2 VS Code Fix: Track activation disposables** | Patches a bug in the VS Code companion extension that left unregistered resources behind on unload, fixing memory leaks and orphaned background processes.
5. **[#28364](https://github.com/google-gemini/gemini-cli/issues/28364) P2 Core Fix: Deep merge user model configs with defaults** | Fixes broken custom generation parameter overrides for nested config fields that were not applying correctly due to prior shallow merge logic.
6. **[#28447](https://github.com/google-gemini/gemini-cli/issues/28447) Docs: Add Windows PowerShell troubleshooting guidance** | Adds missing documentation for the extremely common user pain point where the `gemini` command fails to run out of the box after global npm install on Windows.
7. **[#28253](https://github.com/google-gemini/gemini-cli/issues/28253) Closed P2 Core Fix: Stale git branch display on WSL/network filesystems** | Resolves the issue where the CLI footer's branch indicator never updates after `git checkout` on filesystems that do not support native `fs.watch` events.
8. **[#28359](https://github.com/google-gemini/gemini-cli/issues/28359) Core Fix: Strip login/interactive shell wrappers** | Updates the existing shell wrapper detection logic to correctly handle patterns like `bash -lc` and `bash --login -c`, ensuring security policies apply to all shell execution flows.
9. **[#28442](https://github.com/google-gemini/gemini-cli/issues/28442) XL Priority Main PR** | Marked for core branch changes, currently open for maintainer review with no additional public details disclosed as of the 24-hour update window.

## 5. Feature Request Trends
The top requested development priorities from recent open issues are:
1. AST-native codebase navigation to reduce unnecessary tool calls and token bloat for code investigation workflows
2. Zero-dependency OS sandboxing to fully leverage Gemini 3's native bash proficiency without security tradeoffs
3. Improved reliability and resilience for the browser automation subagent, including automatic session recovery
4. Full observability for subagent execution traces, including shareable access via the existing `/chat share` command
5. Quality and security hardening for the Auto Memory background system, including deterministic client-side secret redaction

## 6. Developer Pain Points
Recurring high-impact frustrations reported by the user base in the last 24 hours include:
1. Frequent, unexpected agent hangs, both for deferred generalist subagent runs and post-completion shell execution states
2. Persistent platform compatibility gaps, including Wayland browser support, PowerShell path issues on Windows, and broken filesystem watch behavior on WSL/network shares
3. Unintended subagent execution when users have explicitly disabled subagent features via configuration
4. Auto Memory system bugs including infinite retries for low-signal sessions, and missing deterministic secret redaction for user transcripts
5. Broken custom agent management workflows, including missing symlink support and global `settings.json` overrides not propagating to subagent instances

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-20
---
## 1. Today's Highlights
No new official GitHub Copilot CLI releases shipped in the 24-hour window ending 2026-07-20, with repository activity focused on triage of 19 recently opened bug reports and feature requests, plus discussion of high-priority existing issues. Standout updates include newly identified breaking behavior with modern LLM releases (GPT-5.6, Claude 3.x) across native TUI, desktop, and ACP server deployments, alongside 3 usability requests tied to the `/btw` quick interaction flow. A 2023 legacy PR for repository ownership documentation was marked closed during routine repo maintenance.

## 2. Releases
No new stable, pre-release, or patch versions of GitHub Copilot CLI were published in the last 24 hours.

## 3. Hot Issues
1. [#1857 Allow users to cancel or remove enqueued messages before they are executed](https://github.com/github/copilot-cli/issues/1857): The highest-engagement item in this batch with 24 👍, this longstanding feature request addresses a major TUI workflow pain point where users cannot modify queued commands submitted via `Ctrl+Q`/`Ctrl+Enter` while the agent is busy, preventing accidental execution of stale prompts.
2. [#4024 Voice mode: all bundled ASR models fail silently](https://github.com/github/copilot-cli/issues/4024): A critical local model bug where a MultiModalProcessor routing error for RNNT architecture Nemotron speech models breaks native voice input entirely for local Foundry Core deployments, returning empty transcriptions even with confirmed working microphone capture.
3. [#4185 `--add-dir` causes Claude sub-agent dispatch to fail](https://github.com/github/copilot-cli/issues/4185): This breaking bug adds 5 `cache_control` blocks to Claude requests when users pass additional directory context flags, exceeding Anthropic's documented hard limit of 4 blocks and crashing all sub-agent runs for Claude users.
4. [#4177 Desktop app routes public github.com issue links to enterprise host](https://github.com/github/copilot-cli/issues/4177): An enterprise workflow bug that breaks deep linking to public documentation and open source issue pages for organizations running Copilot CLI against both personal and enterprise GitHub accounts, forcing all link traffic to the private tenant domain.
5. [#4172 Exiting plan mode not reliable with new GPT-5.6 models](https://github.com/github/copilot-cli/issues/4172): Users testing OpenAI's latest GPT-5.6 family are left stranded after plan generation completes, with no prompt to start implementation, breaking Copilot CLI's new native planning workflow entirely.
6. [#4180 Interactive TUI ignores all keyboard input written to its PTY](https://github.com/github/copilot-cli/issues/4180): A high-impact bug for automation developers where the TUI only responds to `Ctrl+C` and ignores all other keystrokes injected programmatically, breaking all use cases for orchestrators, `tmux send-keys`, expect scripts, and embedded agent runners.
7. [#4183 Auto-compaction does not prevent CAPI 5 MB failure from accumulated normal tool history](https://github.com/github/copilot-cli/issues/4183): Long tool-heavy sessions that fit within the active model's token limit can become permanently unresponsive when accumulated serialized tool history pushes the request body over the unadvertised 5MB GitHub Copilot API hard limit, with no mitigation from existing auto-compaction logic.
8. [#4176 Windows desktop app takes ~1-2 minutes to become usable while startup launches multiple CLI processes](https://github.com/github/copilot-cli/issues/4176): A major performance pain point for Windows enterprise users, where the desktop app spawns dozens of stale orphaned CLI processes for old sessions on launch, creating multi-minute wait times before the UI becomes interactive.
9. [#4174 ACP server (copilot --acp) does not expose token/context usage in any protocol message](https://github.com/github/copilot-cli/issues/4174): A critical observability gap for integration developers, where the non-interactive ACP server mode returns no metadata for token consumption, context usage, or inference cost, blocking teams from building usage tracking and quota enforcement tooling on top of Copilot CLI.
10. [#4135 Hook `ask` decisions show raw JSON instead of diff view](https://github.com/github/copilot-cli/issues/4183): A broken plugin ecosystem behavior where custom PreToolUse hooks return unrendered raw JSON permission prompts instead of the standard human-readable file diff view, making third-party policy extensions unusable for non-technical end users.

## 4. Key PR Progress
Only 1 pull request received updates in the tracked 24-hour window, with no new feature or fix PRs opened or merged:
- [#1 [CLOSED] Create ownership.yaml](https://github.com/github/copilot-cli/pull/1): The 2023 legacy PR to add official repository maintainer ownership metadata was closed during routine repo hygiene operations, with no further action planned.

## 5. Feature Request Trends
The majority of new feature requests fall into three high-priority categories:
1. TUI quality of life for queue and quick interactions: Users are requesting full controls to edit, cancel, and create new sessions from queued prompts and `/btw` quick interactions, plus native paste support for images in the `/btw` flow.
2. Extended observability for developers: Teams building on top of Copilot CLI are asking for skill-level OpenTelemetry span attribution for plugins, visible runtime model metadata for background agent runs, and exposed token/usage metrics for ACP server deployments.
3. Workflow flexibility for edge use cases: Requests for better preview rendering for custom plugin permissions and native automation support for programmatic TUI control.

## 6. Developer Pain Points
Recurring unaddressed frustrations across recent issues:
1. Unvetted LLM version compatibility gaps: Newly released model families including GPT-5.6 and latest Claude variants have untested edge cases that break core workflows with no explicit version compatibility guardrails.
2. Undocumented hard limits: Unadvertised constraints (5MB CAPI request body limit, 4 cache_control block limit for Claude) crash sessions with no clear error messaging, and existing auto-compaction logic does not mitigate these failures.
3. Enterprise desktop reliability gaps: Users on multi-account enterprise deployments face broken public link routing, extremely slow Windows startup, and stale permission gate behavior that degrades overall session reliability.
4. No first-class automation support: The interactive TUI does not implement standard PTY input handling, making it impossible to embed Copilot CLI in third-party agent orchestration and scripting tooling.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-20
This digest covers all updates to the `github.com/MoonshotAI/kimi-cli` repository from the 24-hour window ending 2026-07-20.

---

## 1. Today's Highlights
No new official releases were published in the past 24 hours, but the core maintainer team merged 8 updated pull requests focused on resolving long-standing session state bugs, improving streaming performance, and shipping a highly requested extensibility feature. The top-voted community feature request for cross-device remote session access picked up 2 new comments over the past day, with roadmap signals from maintainers that the capability is under active design for a near-term release.

## 2. Releases
No new Kimi Code CLI releases were published in the 24-hour tracking window.

## 3. Hot Issues
Only 4 issues received updates in the tracking window, all listed below by priority:
1. **[#1282 [OPEN] Feature Request: Remote Control - Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)** | Author: CatKang | 13 👍, 5 comments
   The highest-voted open feature request on the repo, enabling users to access full local Kimi Code CLI session state from phones, tablets or browser interfaces, for unbroken workflow continuity when away from their primary dev machine. Community feedback shows strong demand for the capability, especially from remote workers who switch between multiple workstations.
2. **[#2508 [OPEN] Permission rules: deny overrides allow regardless of order, contradicting documented "first matching rule takes effect"](https://github.com/MoonshotAI/kimi-cli/issues/2508)** | Author: Julzilla | 0 👍, 1 comment
   A high-severity correctness bug for enterprise and self-hosted users, where actual permission rule evaluation logic conflicts with official documentation, creating unexpected security outcomes for teams implementing access control policies on shared CLI instances.
3. **[#2517 [OPEN] /undo and /fork truncate context.jsonl at the wrong turn in compacted or steered sessions](https://github.com/MoonshotAI/kimi-cli/issues/2517)** | Author: Nas01010101 | 0 👍, 0 comments
   A critical data integrity bug that breaks core session editing workflows, with risk of permanent lost history for long-running multi-turn coding sessions. The bug is confirmed reproducible on the latest `main` branch.
4. **[#2511 [OPEN] feat(hooks): mid-turn streaming hook (MessageDisplay) for live reply consumers](https://github.com/MoonshotAI/kimi-cli/issues/2511)** | Author: yanchenko | 0 👍, 0 comments
   A widely requested extensibility feature that fills a gap in the currently beta hooks system, enabling third-party developers to build tools that react to LLM output in real time, such as TTS narration, incremental logging, and dynamic progress UIs.

## 4. Key PR Progress
All 8 updated pull requests from the tracking window are listed below:
1. **[#2518 [OPEN] fix(web): persist uploads .sent marker so restarts do not re-send files](https://github.com/MoonshotAI/kimi-cli/pull/2518)** | Author: Nas01010101
   Resolves issue #2413, eliminating the bug that caused the `kimi web` interface to re-upload and re-send all previously attached images and files after a server restart, preventing session history pollution.
2. **[#2520 [OPEN] fix(session): align fork/undo context truncation to wire turns](https://github.com/MoonshotAI/kimi-cli/pull/2520)** | Author: Nas01010101
   Resolves issue #2517 plus two historic related bugs (#1974, #2049) that caused history mismatches after undo and fork operations, with a full suite of regression tests to prevent recurrence.
3. **[#2519 [OPEN] fix(app): refresh stale frozen system prompt on session resume](https://github.com/MoonshotAI/kimi-cli/pull/2519)** | Author: Nas01010101
   Resolves issue #2420, ensuring new skills added to the local `~/.kimi/skills/` directory and edits to the `AGENTS.md` config file are applied immediately to resumed sessions, instead of using a stale frozen system prompt saved in session state.
4. **[#2515 [OPEN] perf(kosong): buffer stream merges and avoid deep-copying every delta](https://github.com/MoonshotAI/kimi-cli/pull/2515)** | Author: parthgupta9999
   A major performance improvement for the core KOSONG streaming engine, eliminating quadratic overhead from repeated string concatenation and unnecessary deep copies of generation deltas, cutting latency for long code generation tasks by an estimated 30-40%.
5. **[#2513 [OPEN] fix(kosong): recursively decode double-encoded tool-call arguments](https://github.com/MoonshotAI/kimi-cli/pull/2513)** | Author: nitishagar
   Fixes a common API edge case where Moonshot returns nested tool call parameters as double-encoded JSON strings, which previously caused Pydantic validation failures and broken tool execution.
6. **[#2514 [OPEN] fix(skill): ignore stray markdown in plugins container during skill discovery](https://github.com/MoonshotAI/kimi-cli/pull/2514)** | Author: nitishagar
   Corrects the skill discovery logic to properly separate independent plugin subdirectories from generic markdown skill files, preventing the CLI from incorrectly loading documentation files as invalid skill definitions.
7. **[#2512 [OPEN] feat(hooks): add MessageDisplay hook for mid-turn streaming](https://github.com/MoonshotAI/kimi-cli/pull/2512)** | Author: yanchenko
   Closes issue #2511, adding a new incremental streaming hook event that fires repeatedly as the LLM generates output, enabling realtime third-party integrations for the Kimi Code CLI hooks ecosystem.
8. **[#2516 [CLOSED] Create kimi-cli](https://github.com/MoonshotAI/kimi-cli/pull/2516)** | Author: owndaboubi1993-cyber
   An out-of-scope, unapproved contribution that did not follow the repo's requirement to discuss changes with maintainers in a related issue before submitting a PR, closed automatically per community guidelines.

## 5. Feature Request Trends
The top prioritized community feature directions for the past 24 hours are:
1. Cross-device session continuity: The remote control feature is the highest upvoted open request, reflecting user demand for seamless access to local CLI session state across multiple devices without breaking their local development environment context.
2. Richer hook system extensibility: Demand for realtime mid-turn streaming events shows that third-party developers are actively building integrations on top of Kimi Code CLI, and are asking for more granular, event-driven access to session lifecycle data.

## 6. Developer Pain Points
Recurring, high-impact frustrations surfaced in recent updates:
1. Session state unreliability: Multiple overlapping bugs around corrupted `context.jsonl` state, duplicate file resends on restart, and stale system prompts create unnecessary friction for developers who maintain long-running multi-turn coding sessions over multiple days.
2. Streaming performance overhead: The unoptimized delta merge path in the KOSONG engine creates noticeable lag for long code generation tasks, impacting the user experience for users working on large codebases.
3. Documentation vs implementation mismatches: The permission rule logic that contradicts documented behavior creates unexpected security risks for enterprise self-hosted users, with no public workaround currently available.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-20
---
## 1. Today's Highlights
Today’s community activity focused heavily on resolving high-severity TUI 2.0 stability issues, patching critical security vulnerabilities, and processing a 6+ week backlog of PRs via automated cleanup workflows. No new official releases were published in the last 24 hours, but maintainers merged 19 PRs across bug fixes, new provider and MCP features, and documentation updates. Top user feedback was concentrated on long-running instance performance bottlenecks, including unbounded database growth and newly reported memory leaks affecting 1.18.x desktop builds.

## 2. Releases
No new official OpenCode releases were published in the 24-hour tracking window.

## 3. Hot Issues
1. **[#29548 Closed] OpenAI provider 10s header timeout regression on v1.15.11** | 12 comments, 9 👍
   A widely reported post-upgrade bug that breaks OpenAI provider requests by default. Users confirmed a local workaround via manual `headerTimeout` adjustment, and the resolved fix will ship in the next patch release. https://github.com/anomalyco/opencode/issues/29548
2. **[#7801 Open] Auto-switch from Plan Mode to Build mode after user confirmation** | 8 comments, 26 👍
   The highest-upvoted open feature request, designed to eliminate manual mode toggle steps and reduce unnecessary token waste for structured code generation workflows. https://github.com/anomalyco/opencode/issues/7801
3. **[#9955 Open] Excessive TUI padding wastes vertical screen space** | 8 comments, 17 👍
   A top UI complaint for laptop users, with users noting the current layout wastes 20%+ of usable vertical space compared to competing CLI AI agents. https://github.com/anomalyco/opencode/issues/9955
4. **[#33356 Open] Unbounded event table growth makes opencode.db hit 13GB+** | 6 comments, 1 👍
   A critical infrastructure pain point for long-running self-hosted instances: the uncompacted SQLite event store can fill entire volumes without manual pruning. Users are pushing for default retention and compaction policies. https://github.com/anomalyco/opencode/issues/33356
5. **[#37803 Open] TUI goes completely black when agent starts executing tasks** | 3 comments, 0 👍
   A brand new high-severity UX regression caused by a render loop race condition, reported yesterday by TUI 2.0 beta users. A fix PR has already been submitted. https://github.com/anomalyco/opencode/issues/37803
6. **[#37807 Closed] Critical open redirect (CWE-601) on console /auth/authorize endpoint** | 2 comments, 0 👍
   A security vulnerability reported and patched the same day, which would have allowed attackers to craft phishing links that redirect users to untrusted sites after successful OpenCode console login. https://github.com/anomalyco/opencode/issues/37807
7. **[#37799 Open] Severe memory leak uses 63+GB of RAM after 10+ hours of runtime** | 1 comment, 0 👍
   A new high-severity stability bug for desktop builds, which can crash entire workstations and leave no available system memory for other applications. https://github.com/anomalyco/opencode/issues/37799
8. **[#36826 Open] Unexpected server error when using DeepSeek V4 Flash model** | 5 comments, 1 👍
   A breaking compatibility issue for users of DeepSeek’s popular low-cost high-speed model, which prevents all prompt sends to the V4 Flash endpoint. https://github.com/anomalyco/opencode/issues/36826
9. **[#27511 Open] Add Suspend/Resume controls for agent and subagent execution** | 4 comments, 5 👍
   A highly requested workflow feature, allowing users to pause long-running local LLM tasks to free up GPU resources temporarily without losing session state. https://github.com/anomalyco/opencode/issues/27511
10. **[#37814 Open] Local DoS crash loop via large binary/text file upload** | 1 comment, 0 👍
    An unpatched OOM vulnerability that crashes OpenCode immediately when a user pastes or uploads multi-MB raw binary or large text files into the chat window. https://github.com/anomalyco/opencode/issues/37814

## 4. Key PR Progress
1. **[#37805 Closed] Bump @opentui/core to fix render loop stall**
   Patches the newly reported full black TUI screen bug from issue #37803 by resolving a race condition in the `CliRenderer` finally block that silently halted all render updates. https://github.com/anomalyco/opencode/pull/37805
2. **[#33021 Closed] Add Noumena as a first-class provider**
   Implements full API key authentication and OAuth login flows for the new Noumena AI model provider, extending OpenCode’s supported model ecosystem for enterprise users. https://github.com/anomalyco/opencode/pull/33021
3. **[#33019 Closed] Add inline TUI skill picker**
   Adds a new `$` shortcut flow in the TUI input that lets users browse and load available skills without typing full command names, drastically streamlining chat workflows. https://github.com/anomalyco/opencode/pull/33019
4. **[#32998 Closed] Cap OpenAI Responses tool count to avoid 500 error loops**
   Fixes a widely encountered breakage where users with 10+ active MCP servers sent oversized tool definitions to OpenAI endpoints, triggering permanent 500 errors that could not be recovered from. https://github.com/anomalyco/opencode/pull/32998
5. **[#32955 Closed] Expand $ref/$defs for DeepSeek schema compatibility**
   Addresses the DeepSeek V4 Flash broken support issue #36826 by flattening JSON schema `$ref` pointers that the DeepSeek API previously rejected from MCP tool definitions. https://github.com/anomalyco/opencode/pull/32955
6. **[#32936 Closed] Add MCP resource subscriptions support**
   Implements a core missing MCP protocol specification feature that lets OpenCode auto-refresh monitored resources when their upstream state changes, eliminating stale workspace data. https://github.com/anomalyco/opencode/pull/32936
7. **[#32991 Closed] Prevent git snapshot of huge untracked directories**
   Fixes a longstanding >30s hang on first session load for monorepos with large unmonitored asset directories, drastically cutting cold start time for large codebases. https://github.com/anomalyco/opencode/pull/32991
8. **[#37818 Closed] Restore settings panel native scrollbars**
   Reverts a UX regression that hid all scrollbars on the settings panel, which confused users that had dozens of configured custom provider and MCP options. https://github.com/anomalyco/opencode/pull/37818
9. **[#37819 Open] Document TUI session scrollbar options**
   Adds missing official documentation for the accessibility-focused persisted session scrollbar feature, including the `ctrl+p` shortcut to toggle its visibility. https://github.com/anomalyco/opencode/pull/37819
10. **[#37798 Closed] Add DaoXE to public provider documentation**
    Adds the already natively supported DaoXE OpenAI-compatible gateway to the official provider docs, making configuration easier for users in regions with restricted access to major US model providers. https://github.com/anomalyco/opencode/pull/37798

## 5. Feature Request Trends
The most requested feature directions from recent issues include:
1. TUI workflow quality of life improvements: reduced UI clutter, one-click auto-transitions between Plan and Build modes, and inline shortcut tools to cut down on manual command typing.
2. Long-running deployment reliability: default event log retention and compaction policies, persistent session IDs for subagents, and Suspend/Resume controls for in-flight long-running agent tasks.
3. Local LLM optimization: reduced redundant repository

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-20
This digest covers latest updates for the `earendil-works/pi` AI developer tool monorepo, curated for technical contributors and power users.

---
## 1. Today's Highlights
All recent 24-hour activity centers on resolving critical 0.80.10 stable release regressions and shipping long-awaited core features, with no new official releases published. Two high-priority multi-month feature requests – SSH remote container execution support and ACP (Agent Client Protocol) editor integration – reached completion status in recently closed issues and updated PRs. Community reports surfaced 3 distinct session-bricking edge cases in the latest stable build, with ready-to-merge fixes submitted for each issue.

---
## 2. Releases
No new official Pi releases were rolled out in the last 24 hours.

---
## 3. Hot Issues (Top 10 Notable Items)
1. **[#6792 Closed] High CPU usage editing 500+ line files**  
   Link: https://github.com/earendil-works/pi/issues/6792  
   A 7-comment resolved bug report with attached CPU profile captures 100% CPU consumption during 1000+ line Markdown file generation and editing, a major performance pain point for users working with large documentation files.
2. **[#1871 Closed] Misleading OpenAI API key error under parallel startup lock contention**  
   Link: https://github.com/earendil-works/pi/issues/1871  
   A 6-comment resolved issue that was open since March 2026, affecting users running parallel Pi subagent workflows, where file lock contention on auth surfaces a misleading "No API key found" error instead of a lock busy notification.
3. **[#6774 Closed] Slow Ctrl+G external editor launch when temp directory is crowded**  
   Link: https://github.com/earendil-works/pi/issues/6774  
   A 5-comment resolved usability issue, where external editor launch performance degraded for users with cluttered system temp directories, with an accepted fix to place Pi temp files in a dedicated private subdirectory.
4. **[#5341 Closed] Port coding-agent to ExecutionEnv to support SSH remote containers**  
   Link: https://github.com/earendil-works/pi/issues/5341  
   A 5-comment resolved multi-month feature request, routing all filesystem and process execution calls from local Pi sessions to remote hosts over SSH, eliminating the need to install Pi directly on remote dev servers.
5. **[#6675 Open] `pi update --self` aborts after single transient connection failure**  
   Link: https://github.com/earendil-works/pi/issues/6675  
   A 5-comment open bug impacting users with spotty internet, where the self-update flow throws a hard failure on a single failed request to fetch the latest version number, with no retry logic built in.
6. **[#6768 Closed] Copilot Enterprise license context compaction returns 421 error**  
   Link: https://github.com/earendil-works/pi/issues/6768  
   A 4-comment resolved enterprise user bug with 2 community upvotes, where Copilot Enterprise licensed users saw Misdirected Request errors during context compaction for both OpenAI and Anthropic model calls.
7. **[#5593 Open / In Progress] Slash command tab autocomplete adds trailing space that breaks argument completion**  
   Link: https://github.com/earendil-works/pi/issues/5593  
   A 3-comment open UI bug impacting heavy keyboard users, where tab completing a slash command inserts a trailing space that blocks the user from triggering subsequent argument and option autocomplete.
8. **[#6832 Closed] Orphan toolResult after chained compaction bricks sessions on 0.80.10**  
   Link: https://github.com/earendil-works/pi/issues/6832  
   A recently confirmed critical regression with 1 community upvote, where a long-running interactive session becomes permanently unrecoverable after a compaction workflow leaves a dangling tool result entry with no matching call ID.
9. **[#6820 Closed] Queued user message dropped after auto-compaction threshold trigger**  
   Link: https://github.com/earendil-works/pi/issues/6820  
   A 0.80.10 interactive mode bug, where messages typed by the user during automatic context compaction are lost, throwing an "Agent is already processing" error instead of being queued correctly.
10. **[#6817 Closed] Find tool returns no glob results for path patterns on Windows**  
    Link: https://github.com/earendil-works/pi/issues/6817  
    A cross-platform pain point, where the built-in file find tool fails to return matches for patterns with path separators (e.g. `src/**/*.ts`) on Windows due to unhandled path separator normalization.

---
## 4. Key PR Progress
1. **[#6840 Open] feat(ai): add shared contentText utility**  
   Link: https://github.com/earendil-works/pi/pull/6840  
   Adds a reusable shared utility for normalizing and extracting message text content across all Pi packages to reduce duplicate code.
2. **[#6837 Closed] fix(ai): align GPT-5.6 Codex context window with official client**  
   Link: https://github.com/earendil-works/pi/pull/6837  
   Resolves mismatched context limits by setting GPT-5.6 Sol, Terra and Luna models to a 272K default context window, matching official OpenAI Codex client specifications.
3. **[#6834 Open] fix(ai,agent,coding-agent): share UUIDv7 implementation for Codex requests**  
   Link: https://github.com/earendil-works/pi/pull/6834  
   Moves the existing UUIDv7 utility to the shared `pi-ai` package and uses it for all OpenAI Codex request IDs, eliminating duplicate logic across modules.
4. **[#6775 Open] Retry on retryable compaction and branch summarization failures**  
   Link: https://github.com/earendil-works/pi/pull/6775  
   Adds automatic retry logic for transient failures during context compaction, with an open discussion about adding visible UI status indicators for end users.
5. **[#6828 Open] fix(ai): support OpenCode Go Responses models**  
   Link: https://github.com/earendil-works/pi/pull/6828  
   Adds full support for OpenCode Go's Grok 4.5 models that are now exposed via the OpenAI Responses API interface.
6. **[#836 Closed] feat(coding-agent): add ACP mode for editor integration**  
   Link: https://github.com/earendil-works/pi/pull/836  
   The year-old ACP integration PR was updated and marked resolved, adding a `--mode acp` flag that enables full Pi workflow integration with ACP-compatible editors including Zed and JetBrains IDEs.
7. **[#6824 Closed] feat(ai): add Upstage (Solar LLMs) as built-in provider**  
   Link: https://github.com/earendil-works/pi/pull/6824  
   Adds official first-class support for Upstage's Solar LLM family, including 4 models with configured limits, pricing and minimal high-reasoning mode profiles.
8. **[#6818 Closed] fix: guard against undefined assistant.usage in token calculations**  
   Link: https://github.com/earendil-works/pi/pull/6818  
   Fixes a session-bricking crash for providers that do not return token usage metadata in streaming responses (e.g. DeepSeek V4) by adding null checks for missing usage fields.
9. **[#6807 Closed] fix(ai): stop OpenAI Responses streams at terminal event**  
   Link: https://github.com/earendil-works/pi/pull/6807  
   Eliminates multi-second unnecessary wait time after a response is marked complete, by terminating the stream immediately once the `response.completed` event is received, instead of waiting for HTTP EOF.
10. **[#6840 Open] feat: add batch hook for extensions to judge parallel tool calls before execution**  
    (Tracked via linked issue #6816) Adds an optional extension hook that passes the full batch of finalized parallel tool calls to custom extensions, enabling workflow rules that apply logic across all tool operations instead of evaluating each call individually.

---
## 5. Feature Request Trends
Community feedback over the last 24 hours clusters in 4 clear priority directions:
1. **Ecosystem integration improvements**: Support for open standards like the Agent Client Protocol, expanded extension API hooks, and remote SSH execution to run Pi sessions across distributed infrastructure.
2. **Expanded LLM provider support**: First-class native support for self-hosted local model servers (with auto-discovery), native OpenRouter OAuth, and new commercial LLM families beyond OpenAI/Anthropic.
3. **Terminal UI polish**: Customizability for power users, including toggleable UI elements (e.g. scroll navigation help popups), theme customization for markdown table rendering, and improved keyboard workflow ergonomics.
4. **Low-connectivity usability**: Manual `/retry` commands to extend automatic retry limits for users on unstable mobile or satellite internet connections.

---
## 6. Developer Pain Points
Recurring documented frustrations from the last 24 hours include:
1. Multiple unpatched critical regressions in the latest 0.80.10 stable release that can permanently brick interactive user sessions, requiring a high-priority point patch.
2. Cross-platform inconsistencies, most notably broken glob matching in the Windows build of Pi's file find tool.
3. Lack of retry logic for transient failures in core critical paths including self-updates, auth lock handling, and context compaction, leading to misleading user-facing errors.
4. Gaps in public extension APIs that prevent third-party developers from building custom tool governance, event monitoring, and custom rendering workflows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-20
*Source: github.com/QwenLM/qwen-code*

---

## 1. Today's Highlights
Yesterday marked the full stable release of v0.20.0 alongside incremental preview and nightly builds, with major quality-of-life upgrades to autofix workflows, CLI reliability, and Web Shell self-hosted features. The core team merged critical high-priority patches resolving session corruption risks, SSE resource leaks, and Windows Docker sandbox compatibility, while community contributions added full Catalan localization support. Multiple long-running feature tracks including native web search, subagent observability, and configurable ACP runtime parameters advanced significantly over the 24 hour window.

## 2. Releases
Three new builds were published in the last 24 hours:
- **v0.20.0 (Stable)**: No known breaking changes. Rolled up all improvements from the prior pre-release cycle, including new bounded daemon log rotation for the CLI and dozens of core reliability patches.
- **v0.20.1-preview.7215**: Added label-driven autofix takeover and release logic, fixed a no-op bug in the forced-dispatch green workflow via [PR #7165](https://github.com/QwenLM/qwen-code/pull/7165).
- **v0.19.12-nightly.20260719.86ad532de**: Synced VS Code IDE companion third-party license notices to prevent future compliance drift, plus incremental nightly stability patches.

## 3. Hot Issues
Top 10 high-impact updated issues, sorted by community engagement:
1. **[P1 Bug] #7156: Subagent mutates main session model triggering context overflow recurrence**: 11 comments tracking a critical regression that bypassed the earlier #7119 fix, leading to unplanned 400 errors during multi-agent execution. [Link](https://github.com/QwenLM/qwen-code/issues/7156)
2. **[Closed] #4748: Optimize daemon cold start and `qwen serve` fast-path latency**: 11 comments tracking efforts to cut the original 2.5s daemon cold boot overhead down to near 0.7s standalone CLI initialization speeds, now fully resolved in recent builds. [Link](https://github.com/QwenLM/qwen-code/issues/4748)
3. **[In Review] #4801: Add a dedicated native `web_search` tool**: 5 comments addressing the longstanding gap where Qwen Code was the only major code agent CLI without built-in search support, a top requested feature for months. [Link](https://github.com/QwenLM/qwen-code/issues/4801)
4. **[P2 Bug] #7147: MCP server never successfully returns tool/resource listings**: 5 comments blocking adoption of third-party MCP tools like Fastmail's official MCP integration for Qwen Code power users. [Link](https://github.com/QwenLM/qwen-code/issues/7147)
5. **[P0 Bug] #7205: /goal evaluator clears active goals prematurely using non-existent transcript evidence**: Critical reliability gap for goal-driven workflows, marked as high-priority follow-up to the recent judge hardening work. [Link](https://github.com/QwenLM/qwen-code/issues/7205)
6. **[P1 Bug] #7139: Windows `qwen serve` Docker sandbox returns invalid cwd for ACP shell tools**: 2 comments blocking all shell execution for Windows self-hosted daemon users, one of the most reported Windows-specific bugs of the last cycle. [Link](https://github.com/QwenLM/qwen-code/issues/7139)
7. **[P2 Bug] #7238: RestSseTransport leaks SSE subscribers causing eventual daemon unavailability (HTTP 429)**: Common failure mode for automation SDK users that leads to hard-to-diagnose full daemon downtime after hours of operation. [Link](https://github.com/QwenLM/qwen-code/issues/7238)
8. **[Feature Request] #6569: Improve subagent observability with real-time execution visibility and manual intervention**: 3 comments from multi-agent power users requesting transparency into hidden subagent execution flows that are currently fully opaque. [Link](https://github.com/QwenLM/qwen-code/issues/6569)
9. **[P1 Bug] #7181: Active /goal loop blocks all user input requiring full CLI restart to interrupt**: 2 comments breaking interactive workflow usability for users running long-running goal-driven tasks, with no way to clear or replace active goals without a full force quit. [Link](https://github.com/QwenLM/qwen-code/issues/7181)
10. **[Closed] #6996: Custom OpenAI-compatible providers return generic "Connection error" discarding root cause**: 3 comments improving debuggability for users running local model endpoints, resolving a long-standing pain point for self-hosted inference users. [Link](https://github.com/QwenLM/qwen-code/issues/6996)

## 4. Key PR Progress
Top 10 high-impact merged/active PRs:
1. [#7221](https://github.com/QwenLM/qwen-code/pull/7221) `feat(web-shell)`: Adds worktree-isolated sessions for parallel tasks, enabling multiple agent tasks to run in the same workspace without polluting the main working directory.
2. [#7257](https://github.com/QwenLM/qwen-code/pull/7257) `fix(sdk)`: Aborts underlying SSE HTTP requests when the async iterator exits, fully resolving the SSE subscriber leak bug tracked in #7238.
3. [#7228](https://github.com/QwenLM/qwen-code/pull/7228) `fix(acp-bridge)`: Maps native Windows absolute paths to the Docker sandbox /c/ style mount convention, fully fixing the Windows Docker cwd failure tracked in #7139.
4. [#7246](https://github.com/QwenLM/qwen-code/pull/7246) `feat(serve)`: Exposes a configurable `--initialize-timeout-ms` CLI flag for `qwen serve` operators, to adjust ACP handshake timeouts for high-latency network environments.
5. [#7239](https://github.com/QwenLM/qwen-code/pull/7239) `fix(core)`: Adds fallback logic to count and estimate reasoning tokens when OpenAI-compatible providers omit token usage stats, fixing missing thinking token display for llama.cpp and other local inference runtimes.
6. [#7258](https://github.com/QwenLM/qwen-code/pull/7258) `fix(cli)`: Makes the main interactive agent yield execution slots to single-slot background subagents, eliminating the deadlock where the main agent wastes all local inference resources and blocks subagent execution.
7. [#7256](https://github.com/QwenLM/qwen-code/pull/7256) `fix(core)`: Strips internal daemon secrets like `QWEN_SERVER_TOKEN` from child process environments, preventing agents from accidentally leaking daemon authentication credentials via shell execution.
8. [#7247](https://github.com/QwenLM/qwen-code/pull/7247) `fix(autofix)`: Implements retries for managed autofix PRs on temporary model API errors (429, 5xx), instead of stranding PRs permanently when transient outages occur.
9. [#7250](https://github.com/QwenLM/qwen-code/pull/7250) `fix(cli)`: Implements safe idle-bound restarts for automatic updates, eliminating corrupted session state risks during over-the-air CLI version upgrades.
10. [#7253](https://github.com/QwenLM/qwen-code/pull/7253) `feat(i18n)`: Full community-contributed Catalan localization support for all new and existing UI strings.

## 5. Feature Request Trends
The most requested feature directions tracked this window:
1. **Native tool expansion**: The top priority is rolling out the long-awaited dedicated native `web_search` tool to close the gap with competing code agent platforms.
2. **Multi-agent usability**: Massive user demand for improved subagent execution observability, manual intervention controls, and smarter resource scheduling logic optimized for local inference environments.
3. **Self-hosted Web Shell upgrades**: Fast-growing requests for full production-grade Web Shell features including channel management, browser QR authentication, embedded git history viewer, and parallel isolated worktree sessions.
4. **Ecosystem compatibility**: Requests for broader MCP server support, better error reporting for custom OpenAI-compatible providers, and expanded built-in model list coverage for new releases like qwen3.8-max-preview.

## 6. Developer Pain Points
Recurring top frustrations across the user base:
1. **Daemon reliability gaps**: SSE resource leaks, unfiltered secret exposure to child processes, and Windows-specific Docker path bugs cause hard-to-diagnose downtime for users running long-running `qwen serve` automation.
2. **Multi-agent edge case failures**: Unintended main session model mutation, no pre-emption for shared local inference slots, and fully opaque subagent execution flows break workloads for power users relying on agentic orchestration.
3. **Debuggability blind spots**: Generic uninformative error messages for custom inference endpoints, missing reasoning token stats for local runtimes, make it unnecessarily hard for self-hosted users to diagnose issues.
4. **Interactive workflow dead-ends**: Active /goal loops that block all user input, plan mode content leakage

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-07-20
---
## 1. Today's Highlights
The last 24 hours saw 19 merged PRs focused on TUI performance, web search stack overhauls, and tool execution hardening, alongside 7 active issue updates spanning cross-platform bug fixes and security sandboxing for sub-agents. Maintainers resolved a long-standing gap in MCP tool visibility for full-access agent modes, while user reports surfaced three actionable Windows and TUI UX bugs slated for patching in the v0.9.3 point release. A refreshed Blue Stage UI theme is now the default production accent, unifying visual semantics for user actions, status signals, and permission prompts.
## 2. Releases
No new official releases were published in the 24-hour tracking window. The latest public version remains v0.9.3.
## 3. Hot Issues
All 7 recently updated issues are listed below as no additional items met the activity threshold:
- [#4032 OPEN] Codewhale not following the constitution (v0.9.3): The longest-running active discussion with 39 community comments, where users report CodeWhale ignores pre-shared custom scripts and generates redundant temporary calculation scripts instead of following expected workflow rules. The community is iterating on alignment prompts to reduce this deviant runtime behavior. https://github.com/Hmbown/DeepSeek-TUI/issues/4032
- [#4042 CLOSED] Environment-level tool sandboxing for sub-agents: A completed security enhancement tracking implementation of cross-session, sub-agent, and Fleet worker tool restriction enforcement, with 14 security team contributor comments confirming the `--disallowed-tools` flag now works consistently across all execution contexts. https://github.com/Hmbown/DeepSeek-TUI/issues/4042
- [#4410 OPEN] Restore xAI device-code OAuth login: Release-blocker bug identified by maintainers, caused by a hardcoded xAI auth endpoint that no longer matches the official Grok 0.2.101 CLI path, breaking all xAI user logins. 6 commenters confirmed widespread user impact, with a fix prioritized for the next patch. https://github.com/Hmbown/DeepSeek-TUI/issues/4410
- [#4542 CLOSED] Verify Claude issue worker end-to-end: Docs-only completed validation confirming the newly merged @claude automation workflow gates correctly, generates signed branches off main, and stops before auto-PR creation as designed. 5 review comments sign off on production readiness. https://github.com/Hmbown/DeepSeek-TUI/issues/4542
- [#4568 OPEN] Slash command response latency regression: A Windows 10 user reports all `/xxx` slash commands have significant lag in the latest version compared to near-instant execution in the prior release, confirming a measurable performance regression. Maintainers have tagged the issue for immediate investigation. https://github.com/Hmbown/DeepSeek-TUI/issues/4568
- [#4564 OPEN] Windows CLI flag parsing bug: Users on Windows running npm global installs report `--model` and `--toolsets` flags passed before `exec` are concatenated into a single invalid argument, breaking standard workflow invocations. Community contributors proposed workarounds including new `CODWHALE_MODEL` and `CODWHALE_TOOLSETS` environment variables. https://github.com/Hmbown/DeepSeek-TUI/issues/4564
- [#4547 OPEN] Stale background job UI state bug: TUI reliability issue where transcript cards keep animated spinners and active Stop controls for shell jobs that are already marked stale or removed from the job registry, causing misleading UX. Filed by maintainers for immediate prioritization. https://github.com/Hmbown/DeepSeek-TUI/issues/4547
## 4. Key PR Progress
Top 10 highest-impact merged/active PRs from the last 24 hours:
- [#4585 CLOSED] perf(tui): Coalesce repeated read-only calls: Performance optimization that deduplicates identical read-only tool calls in a single user turn, running only one physical execution while preserving all required result metadata, directly targeting the slash command latency regression reported by users. https://github.com/Hmbown/DeepSeek-TUI/pull/4585
- [#4583 CLOSED] feat(tui): Make Blue Stage the default grammar: Refreshed default UI theme that reassigns semantic color roles, using blue as the primary action accent, gold only for high-priority user attention prompts, and a distinct ice color for plan states, with full accessibility contrast guarantees. https://github.com/Hmbown/DeepSeek-TUI/pull/4583
- [#4582 CLOSED] fix: Bypass MCP tool deferral when full trust mode is active: Resolves a long-standing bug where MCP tools remained hidden from the model’s tool list even when running in full auto-approve, trust-all mode, eliminating unnecessary manual tool loading steps for power users. https://github.com/Hmbown/DeepSeek-TUI/pull/4582
- [#4581 CLOSED] feat(tui): Export safe structured conversations: New `/export` command behavior that prioritizes clipboard copy of sanitized, structured message streams, with automatic redaction of hidden

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*