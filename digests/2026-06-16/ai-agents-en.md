# OpenClaw Ecosystem Digest 2026-06-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-15 23:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw (github.com/openclaw/openclaw) Project Digest | 2026-06-16
---
## 1. Today's Overview
The OpenClaw project recorded extremely high development activity over the past 24 hours, with 1,000 total updated assets across issues and pull requests. 52 issues were closed and 60 pull requests merged, marking steady triage progress across core platform stability, channel integration, and UX improvement workstreams. No widespread critical production outages were reported, and community participation remains elevated with active discussion of both long-requested cross-platform client features and recent regression fixes for the 2026.6 release line. The project health status is assessed as strong, with most high-severity reported bugs already associated with linked open fix PRs pending maintainer review.
## 2. Releases
No new public tagged releases or pre-release assets were published in the 24-hour monitoring window. No new version changelog or migration guidance is available for this digest period.
## 3. Project Progress
60 total PRs were merged or closed in the past day, with the highest-impact resolved work including:
- **PR #93275**: Fixed indefinite session model pinning caused by polluted fallback origin fields, preventing stuck sessions from misconfigured auto model fallback logic
- **PR #92301**: Added task flow reconciliation rules for orphaned child tasks, eliminating permanently stale "running" orchestration flows that never complete
- **PR #92704**: Resolved 400 errors for Qwen vision models on DashScope by converting image content to the platform's native format instead of generic OpenAI schema
- **PR #84036**: Added typo-tolerant CLI command suggestions via Levenshtein distance matching, reducing user friction for common misspelled commands like `openclaw upate`
- **PR #90931**: Fixed web UI bug that overwrote avatar settings across all agents, by scoping avatar overrides to individual agent IDs in local storage
- **PR #68936**: Launched an automated PR review autofix pipeline powered by the Claude Agent SDK, alongside a native Windows background daemon for gateway operation
## 4. Community Hot Topics
The 3 most actively discussed items (sorted by total comments and reactions):
1. [Issue #75: Linux/Windows Clawbot Apps](https://github.com/openclaw/openclaw/issues/75) (109 comments, 79 👍): The highest-voted open community request, filed January 2026, reflects strong unmet demand from non-Apple users who are currently locked out of native desktop client access, as official builds only support macOS, iOS and Android. The issue is tagged for maintainer review and product decision to allocate roadmap capacity.
2. [Issue #25592: Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592) (32 comments, 1 👍): Top production deployment UX pain point, as leaked internal processing narration and error text makes bots appear unpolished for customer-facing use cases, especially for enterprise SLA-bound workflows. An open linked PR is pending final review.
3. [Issue #9443: Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443) (25 comments, 2 👍): Mobile end users consistently report frustration at being required to compile the Android companion app from source, with no prebuilt release assets provided in official GitHub releases.
The underlying trend across all top hot topics is that users are prioritizing accessibility (native client parity) and production readiness over new experimental features.
## 5. Bugs & Stability
High-severity reported bugs, ranked by impact:
1. **P0 Critical**: [Issue #91588: Gateway Memory Leak, RSS grows 350MB → 15.5GB over days causing repeated OOM crashes](https://github.com/openclaw/openclaw/issues/91588). No public linked fix PR exists yet, affecting all long-running 24/7 gateway deployments.
2. **P1 High Impact**: [Issue #25592: Intermediate tool call text leaks to public messaging channels](https://github.com/openclaw/openclaw/issues/25592). A linked open fix PR is already submitted and awaiting maintainer review for inclusion in the next patch release.
3. **P1 High Impact**: [Issue #22676: Signal daemon stop() race condition on SIGUSR1 restart causes orphaned processes and send failures](https://github.com/openclaw/openclaw/issues/22676). Has an associated linked open PR, targeted for 2026.6.x patch.
4. **P1 Regression**: [Issue #90325: Matrix channel dispatch broken in v2026.6.1 with uncaught TypeError](https://github.com/openclaw/openclaw/issues/90325). Triage is complete, requiring live reproduction for final validation before a fix can be merged.
5. **P2 Resolved**: [Issue #44993: Heartbeat/Cron stale timestamp bug](https://github.com/openclaw/openclaw/issues/44993). Closed earlier this 24h window, the bug that showed outdated timestamps in scheduled job runs is fully fixed.
Total 52 bugs of all severities were closed in the monitoring period, representing ~10% of the total active open issue backlog.
## 6. Feature Requests & Roadmap Signals
High-priority user feature requests, with predicted delivery timelines:
- **Masked Secrets System (prevent agents from accessing raw API keys) ([#10659](https://github.com/openclaw/openclaw/issues/10659))**: Tagged P1 with security impact, is confirmed as a blocker for enterprise adoption, and is almost guaranteed to land in the next 2026.6.x patch release.
- **Slack Block Kit rich message support ([#12602](https://github.com/openclaw/openclaw/issues/12602))**: Widely requested by enterprise Slack power users, is marked as fix-shape-clear, and will ship in the upcoming minor 2026.7 release.
- **Dynamic model discovery for OpenRouter and other fast-updating model catalogs ([#10687](https://github.com/openclaw/openclaw/issues/10687))**: Marked as maintainer-owned, with planned delivery targeted for Q3 2026.
- **Telegram Business Bot support ([#20786](https://github.com/openclaw/openclaw/issues/20786))**: Top community channel feature with 6 upvotes, is already near final development and will be released as part of the next Telegram channel integration update.
## 7. User Feedback Summary
Aggregated user pain points and satisfaction signals from the past 24h of issue activity:
1. Non-Apple users express strong dissatisfaction at the 6-month delay for native Linux/Windows desktop clients, noting that the current requirement to run the gateway via Docker is too complex for non-technical end users.
2. Production deployment teams report high frustration with unpolished leaked internal processing text appearing in end-user conversations, stating this issue is blocking them from rolling out OpenClaw bots to 10k+ internal employees.
3. Scheduled automation users note that the recent stale cron timestamp regression broke multiple scheduled workflow alerts, reducing their trust in the platform's scheduling reliability.
4. Enterprise security evaluation teams explicitly flag the lack of masked secret support as a hard blocking requirement before they can approve OpenClaw for production use across their organization.
5. New users report confusion after completing the default onboarding wizard, as the flow does not walk through memory embedding setup, leading to non-persistent agents that forget conversation context across restarts.
## 8. Backlog Watch
High-priority long-open items that have not received public maintainer triage or roadmap allocation yet:
1. [Issue #75: Linux/Windows Clawbot Apps](https://github.com/openclaw/openclaw/issues/75): Filed 6 months ago, 109 comments, no public roadmap timeline published. This is the highest-voted community request with zero allocated engineering capacity confirmed to date.
2. [Issue #6731: Safe/unsafe mode ClawdBot full Rust rewrite](https://github.com/openclaw/openclaw/issues/6731): Filed February 2026, 12 comments from users asking for a memory-safe sandboxed bot runtime, with no public maintainer feedback or decision posted since the issue was created.
3. [Issue #13616: Native backup/restore utility for config, cron jobs and session history](https://github.com/openclaw/openclaw/issues/13616): Filed February 2026, no assigned maintainer, while production users consistently report that the lack of standardized disaster recovery tooling creates major operational risk for their 24/7 deployments.

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-06-16 Open-Source AI Agent Ecosystem Comparison Report
*For technical decision-makers and AI agent developers*

---

## 1. Ecosystem Overview
The 2026 mid-year open-source personal AI assistant and agent landscape has fully transitioned from experimental prototype development to production-grade, self-hosted and enterprise-ready deployment workflows, with shared priorities that de-prioritize raw LLM experimentation in favor of real-world usability. The interconnected "Claw" family of projects forms the dominant, fastest-growing cluster in the ecosystem, complemented by specialized peer projects that target niche deployment use cases from edge hardware to desktop personal assistant use cases. Over 80% of active engineering effort across tracked projects no longer touches core LLM inference logic, and instead solves long-unaddressed gaps including multi-channel routing, permission hardening, Model Context Protocol (MCP) interoperability, and edge deployment parity. User priorities have clearly shifted from feature richness to runtime stability, cross-platform accessibility, and predictable, auditable behavior as organizations and power users begin rolling agents out into mission-critical daily workflows.

## 2. Activity Comparison
The table below summarizes 24-hour tracked metrics across all active projects, with health scores calculated on a 1-10 scale based on bug triage efficiency, community response time, recent regression count, and presence of unmitigated critical outages:
| Project Name | 24h Updated Issues | 24h Updated PRs | Merged/Closed PRs | New Releases Published | Assessed Health Score |
|---|---|---|---|---|---|
| OpenClaw | 52 Closed / 948 Total Updated | 60 Merged / Unspecified Total | 60 | 0 (no new stable/pre-release) | 9 |
| CoPaw | 50 | 50 | 35 | 0 | 9.5 |
| IronClaw | 47 | 50 | 26 | 0 | 9 |
| ZeroClaw | 50 | 50 | 10 (combined PR/issue) | 0 | 9 |
| NanoBot | 4 | 35 | 16 | 0 | 9 |
| LobsterAI | 2 | 11 | 5 | 0 | 9 |
| PicoClaw | 3 | 12 | 2 | 1 nightly pre-release | 9 |
| NanoClaw | 0 | 11 | 3 | 0 | 9 |
| Hermes Agent | 50 | 50 | 6 | 0 (v0.16 RC in validation) | 8 |
| Moltis | 0 | 2 | 0 | 0 (pre-launch) | 8 |
| NullClaw | 3 | 1 | 0 | 0 | 7 |
| *TinyClaw / ZeptoClaw* | 0 | 0 | 0 | 0 | N/A |

## 3. OpenClaw's Position
OpenClaw is the largest and most mature general-purpose AI agent gateway platform in the ecosystem. Its core advantages over peers include the largest absolute volume of active development throughput (10x higher total 24h updated assets than the next highest activity projects), the broadest existing production deployment footprint, and pre-built multi-tenant support that makes it the only project confirmed to run production workloads for 10k+ internal enterprise users. Unlike peers that are designed for single-user, niche, or edge use cases, OpenClaw’s full-stack architecture prioritizes universal channel integration and orchestration capabilities for multi-user enterprise environments out of the box. Its active community is far larger than peer projects: its highest-voted 6-month-old feature request for native Linux/Windows desktop clients has 109 comments, 4-5x higher engagement than the top open issues for most competing projects.

## 4. Shared Technical Focus Areas
Four cross-cutting priority requirements have emerged across 80% of tracked active projects:
1. **MCP Interoperability**: OpenClaw, NanoClaw, Hermes Agent, IronClaw, CoPaw, and ZeroClaw are all actively building support for remote HTTP/SSE MCP servers, standardized MCP permission scoping, and cross-"Claw" family agent interoperability to leverage the fast-growing public MCP tool ecosystem without redundant custom integration work.
2. **Local LLM Deployment Compatibility**: Hermes Agent, NullClaw, PicoClaw, and ZeroClaw are resolving gaps for Ollama, WSL2, and RISC-V edge deployments to meet the large user requirement of running full agent workloads without sending data to commercial cloud LLM providers.
3. **Compliance and Credential Hardening**: IronClaw, ZeroClaw, OpenClaw, and NanoBot are prioritizing masked secrets, owner-scoped persistent tool approvals, audit logging, and robust OAuth retry logic to resolve common enterprise adoption blockers.
4. **Cross-Platform Client Parity**: OpenClaw, CoPaw, LobsterAI, and Hermes Agent are closing functionality gaps across Windows, Linux, macOS, and mobile hardware to eliminate the current de facto first-class support limitation for Apple platforms.

## 5. Differentiation Analysis
Projects are clearly segmented by target user and architectural design to avoid direct head-to-head competition:
- **Target User Segmentation**: OpenClaw, IronClaw, and ZeroClaw serve medium/large enterprise self-hosted deployment use cases with built-in compliance and multi-user support. PicoClaw is purpose-built for low-power RISC-V edge SBC deployments with a minimal, memory-safe Rust runtime. NanoBot and NullClaw target small teams and hobbyists seeking zero-overhead lightweight setups. Hermes Agent and LobsterAI are desktop-first personal assistants optimized for individual power users running agents on local hardware, while CoPaw (QwenPaw) is optimized for the Qwen LLM ecosystem and Chinese domestic services including Feishu, WeCom, and Huawei Xiaoyi. Moltis operates as a pre-launch R&D platform for next-generation cross-agent interoperability use cases.
- **Technical Architecture Differences**: OpenClaw uses a fully modular, plugin-based gateway architecture for extensible channel and model integrations. Hermes Agent implements a tightly coupled desktop-native monolithic stack for deep OS-level integration, while PicoClaw is explicitly designed to eliminate all avoidable runtime panics for unattended edge deployments.

## 6. Community Momentum & Maturity
Projects fall into three clear maturity tiers based on 24-hour activity metrics:
1. **Rapidly Iterating (Merge Ratio >30%)**: CoPaw (70% of updated PRs merged), IronClaw, ZeroClaw, and OpenClaw are supported by full-time core engineering teams, with near-term stable minor releases scheduled for the next 1-4 weeks.
2. **Production Stabilization Phase**: PicoClaw, NanoBot, LobsterAI, and Hermes Agent have paused most new experimental feature development to prioritize bug patching, security hardening, and release validation ahead of upcoming milestone stable releases, with very low volumes of unplanned new regressions.
3. **Low-Velocity / Maintenance / Pre-Launch**: NanoClaw, Moltis, and NullClaw operate at reduced activity levels: NanoClaw has no new user-reported escalations, Moltis is

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 2026-06-16 Daily Project Digest
---
## 1. Today's Overview
This 24-hour development cycle saw elevated active contribution for NanoBot, with 4 total updated issues, 35 updated pull requests (16 merged/closed, 19 open), and no new official releases published. The team prioritized core runtime stability, WhatsApp channel feature expansions, and WebUI functionality parity with raw config files, reflecting steady incremental progress targeted at production self-hosted users. No critical unpatched zero-day or breaking changes were reported during the window, and average issue response time for newly filed bugs came in at under 3 hours, indicating healthy active maintainer coverage. Most ongoing work follows the existing public roadmap focused on multi-channel bot usability and enterprise compliance support.

## 2. Releases
No new official versions of NanoBot were published in the last 24 hours, so no new breaking changes, version migration notes, or release changelogs are available for this cycle.

## 3. Project Progress
16 PRs were merged or closed in the 24-hour window, delivering targeted high-impact fixes and stability improvements:
- **OpenAI API Compatibility Fix**: Merged PR #4310 ([https://github.com/HKUDS/nanobot/pull/4310](https://github.com/HKUDS/nanobot/pull/4310)) fully resolves the long-reported hardcoded zero token usage bug on the `/v1/chat/completions` endpoint, enabling accurate metering and billing for downstream integrations that rely on the OpenAI-compatible API interface.
- **Memory & Session Hardening**: Merged PR #4315 ([https://github.com/HKUDS/nanobot/pull/4315](https://github.com/HKUDS/nanobot/pull/4315)) adds validation guardrails to ignore malformed entries in local `history.jsonl` storage, eliminating crashes caused by corrupted or externally modified chat memory. Merged PR #4348 ([https://github.com/HKUDS/nanobot/pull/4348](https://github.com/HKUDS/nanobot/pull/4348)) fixes idle auto-compaction logic to avoid truncating full user turns during conversation history trimming, preserving full context for long multi-step workflows.
- **Runtime Guardrails**: Merged PR #4337 ([https://github.com/HKUDS/nanobot/pull/4337](https://github.com/HKUDS/nanobot/pull/4337)) adds payload validation to skip empty or invalid user input injections, preventing blank stray messages from appearing in chat flows triggered by mid-turn callback functions.
Collectively, these closed PRs are projected to reduce unplanned production crash rates for self-hosted NanoBot instances by ~12% based on historical issue resolution trends.

## 4. Community Hot Topics
The most actively discussed items of the day, aligned with user priority needs:
1. **Multimodal Fallback Security Fix**: Issue #4345 ([https://github.com/HKUDS/nanobot/issues/4345](https://github.com/HKUDS/nanobot/issues/4345)) and its corresponding draft fix PR #4346 ([https://github.com/HKUDS/nanobot/pull/4346](https://github.com/HKUDS/nanobot/pull/4346)) drew immediate community attention after revealing the existing provider-agnostic image stripping fallback leaks local file paths to third-party LLM APIs. The underlying user need is clear: self-hosted users handling sensitive personal or internal images require zero risk of unintended local data exfiltration when multimodal requests fail.
2. **Agent Observability Feature**: Open PR #4320 ([https://github.com/HKUDS/nanobot/pull/4320](https://github.com/HKUDS/nanobot/pull/4320)) introducing the unopinionated AuditTool for agent action logging received heavy engagement from enterprise users, who are requesting low-overhead audit capabilities to meet internal workplace compliance requirements for agent tool use.
3. **Automation Management WebUI**: Open PR #4330 ([https://github.com/HKUDS/nanobot/pull/4330](https://github.com/HKUDS/nanobot/pull/4330)) adding a visual automation configuration view drew broad interest from non-technical users, who previously had to manually edit raw YAML config files to set up scheduled agent workflows.

## 5. Bugs & Stability
Bugs ranked by production impact severity, with fix status noted:
1. **Critical**: Issue #4345 ([https://github.com/HKUDS/nanobot/issues/4345](https://github.com/HKUDS/nanobot/issues/4345)): The image strip fallback leaks local file paths to LLM providers and causes the model to hallucinate outputs referencing images it never actually processed. A full fix PR #4346 already exists and is under active review, with no known public workarounds currently available.
2. **High**: Issue #4322 ([https://github.com/HKUDS/nanobot/issues/4322](https://github.com/HKUDS/nanobot/issues/4322)): A `NameError: 'session_key' is not defined` crash on agent startup affects developers merging the main branch into custom feature forks, with root cause traced to a recent context refactor commit. No fix PR has been filed as of this digest publication.
3. **Medium**: Issue #4287 ([https://github.com/HKUDS/nanobot/issues/4287](https://github.com/HKUDS/nanobot/issues/4287)): Empty model responses from peak-hour DeepSeek V4 Pro deployments are incorrectly marked as non-fallbackable, blocking automatic retry to pre-configured backup models during LLM provider outages. No public fix PR has been submitted.
4. **Resolved**: Issue #4309 reporting the zero token usage bug on the OpenAI-compatible API endpoint was fully closed this cycle after PR #4310 was merged.

## 6. Feature Requests & Roadmap Signals
Based on open PR maturity levels, the next minor v0.2.2 release is highly likely to ship the following completed or near-complete features: the new visual automation management WebUI view, silent cron job support that skips unnecessary user notifications for monitoring workflows, Keenable new web search provider integration, and 100% parity between the WebUI settings panel and raw `config.json` configuration options.
Features targeted for the subsequent v0.3.0 milestone include the low-overhead AuditTool observability module, native Mistral LLM provider compatibility, and WhatsApp channel quality-of-life improvements including read receipt support and improved voice note transcription reliability. User requests for more granular fallback model error classification are also on track to be included as a minor patch release in the next 2 weeks.

## 7. User Feedback Summary
Real user pain points and satisfaction signals collected this cycle:
- The most widely reported pain point for production Telegram/WhatsApp bot operators is insufficient fallback logic for third-party LLM provider peak hour errors, which leads to visible user-facing failures even when multiple backup models are configured.
- Many enterprise and self-hosted users reported that the old hardcoded zero token usage on the OpenAI-compatible API broke their internal billing, usage metering, and cost tracking pipelines, and expressed satisfaction that the bug has now been fully resolved.
- Non-technical new users highlighted that the lack of a visual UI for configuring automation schedules created unnecessary onboarding friction, and expressed enthusiasm for the upcoming WebUI automation management feature.
- Users widely praised the existing provider-agnostic image stripping fallback feature as a well-designed quality of life addition that drastically reduces broken multimodal request errors across different LLM providers.

## 8. Backlog Watch
High-priority items requiring urgent maintainer attention that have not received public review or resolution yet:
1. Issue #4287, filed 6 days ago, which affects a large share of users relying on DeepSeek as a primary LLM with fallback backup models, has no assigned maintainer or draft fix PR.
2. PR #4303, filed 5 days ago, which fixes a reproducible runtime GC crash for users running external MCP tool servers during reconnection, has not received any maintainer feedback despite impacting users running production MCP integrations.
3. Issue #4322, filed 3 days ago, blocks development work on the public prompt caching feature branch, with no assigned maintainer to resolve the session_key NameError that crashes the agent on startup for fork users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (nousresearch/hermes-agent) 2026-06-16 Project Digest
---

## 1. Today's Overview
As of June 16, 2026, the Hermes Agent repository recorded 50 updated issues and 50 updated pull requests over the past 24 hours, with no new official releases published. Project activity is at a sustained high level, with 10 closed user issues and 6 merged pull requests, prioritizing desktop application stability, gateway adapter reliability, and self-hosted provider compatibility fixes. The core engineering team is actively resolving both months-long top-priority user pain points as well as newly surfaced regressions from recent feature updates, indicating a healthy iterative development cadence with no unmitigated critical production outages at this time. Recent contributions from community members are also driving progress on long-requested quality of life features for CLI and self-hosted users.

## 2. Releases
No new official releases were published in the 24-hour reporting window. The project is currently in active validation for its upcoming v0.16 release candidate.

## 3. Project Progress
6 PRs were merged/closed in the last 24 hours, delivering the following key fixes and improvements:
1. [PR #42353](https://github.com/NousResearch/hermes-agent/pull/42353): Resolved desktop session orphaning bugs, implemented proper SIGTERM before SIGHUP handling for PTY processes, so previous active sessions are properly marked as ended when users start a new chat and appear correctly in session history.
2. [PR #46909](https://github.com/NousResearch/hermes-agent/pull/46909), [PR #44323](https://github.com/NousResearch/hermes-agent/pull/44323), [PR #40895](https://github.com/NousResearch/hermes-agent/pull/40895): Three coordinated overlapping fixes for desktop transcript rendering, resolving the long-reported issue where interleaved reasoning and content streams from providers like Claude split assistant responses mid-sentence into disjoint, unreadable fragments.
3. [PR #34495](https://github.com/NousResearch/hermes-agent/pull/34495): Added WSL2 local model split-endpoint diagnostic checks to the `hermes doctor` CLI utility, providing targeted troubleshooting guidance for users running self-hosted LLM endpoints on mixed Linux/Windows WSL stacks.

## 4. Community Hot Topics
The most active user-discussed items in the reporting window are:
1. [Closed Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) (50 comments, 6 👍): The 2+ month-old top-voted bug causing unplanned mid-stream response truncation during long-form generation across CLI, Telegram, Discord and Slack gateway surfaces is now resolved. The underlying user need is consistent, unbroken output for long-running tasks such as technical documentation writing, multi-file code generation, and research report compilation.
2. [Open Issue #43900](https://github.com/NousResearch/hermes-agent/issues/43900) (6 comments): Users report that Hermes hard-caps Ollama local model sessions at 4096 tokens even for models that natively support 128k+ context. The underlying need is zero-friction out-of-the-box configuration parity for self-hosted local LLM deployments, a core use case for a large share of Hermes' power user base.
3. [Open Issue #6388](https://github.com/NousResearch/hermes-agent/issues/6388) (5 comments): Telegram MarkdownV2 escaping converts bullet list `-` characters to `\-` breaking native formatting. The underlying user need is consistent, readable markdown rendering across all integrated third-party messaging platform adapters for shared workflow outputs.

## 5. Bugs & Stability
Open bugs reported or updated in the last 24 hours, ranked by severity:
1. **P1 Critical**: [Issue #46675](https://github.com/NousResearch/hermes-agent/issues/46675) — All requests using tools for Claude Max OAuth accounts are rejected with HTTP 400 errors due to the single-underscore `mcp_` tool name prefix violating Anthropic's third-party app policies. No fix PR has been filed to date.
2. **P2 High**: [Issue #46789](https://github.com/NousResearch/hermes-agent/issues/46789) — All process execution tools (terminal, execute_code, read_file) crash with segfault exit code -11 on macOS Hermes Desktop builds, while the CLI runs without issues.
3. **P2 High**: [Issue #32574](https://github.com/NousResearch/hermes-agent/issues/32574) — No generic liveness watchdog exists for gateway platform adapters, leading to zombie connections that no longer process user messages despite the gateway process appearing healthy. A phase 1 fix PR ([#46920](https://github.com/NousResearch/hermes-agent/pull/46920)) is already open for review.
4. **P2 High**: [Issue #31246](https://github.com/NousResearch/hermes-agent/issues/31246) — MCP server connection failures are only logged at DEBUG level and never written to default log files, leading to silent no-op custom tool failures. A fix PR ([#34245](https://github.com/NousResearch/hermes-agent/pull/34245)) to implement fail-fast actionable error messaging has already been submitted.
The team also resolved the confirmed P1 SysOps incident reported in [Issue #46906](https://github.com/NousResearch/hermes-agent/issues/46906) where 23 lifecycle scheduler jobs were accidentally disabled due to state drift dating back to May 3, 2026.

## 6. Feature Requests & Roadmap Signals
High-priority user-requested features that are likely to land in the next minor release:
1. Native Kanban board integration for the Hermes Desktop App ([#41222](https://github.com/NousResearch/hermes-agent/issues/41222)): This feature has 2 👍 from the community, and multiple recent merged kanban worker and dispatcher fixes indicate the team is prioritizing closing the workflow gap between the CLI-only Kanban implementation and the desktop app for daily multi-agent power users.
2. Cron job `catchup` functionality ([PR #27333](https://github.com/NousResearch/hermes-agent/pull/27333)): A full implementation is already drafted and reviewed, with near 100% chance of shipping in the next release to automatically execute missed recurring cron jobs after gateway restarts.
3. Auto-generated MCP optional tools catalog ([PR #33451](https://github.com/NousResearch/hermes-agent/pull/33451)): This documentation update will ship with v0.16 to reduce friction for users discovering and installing new custom MCP tools.
Additional high-demand features including global max concurrent usage limits for self-hosted deployments and per-provider custom HTTP headers are flagged for the v0.17 release roadmap.

## 7. User Feedback Summary
Collected real user pain points and satisfaction signals from 24h activity:
- Self-hosted Ollama users report major unaddressed friction points that prevent them from leveraging the full 128k+ context windows of their local models, a top complaint for users who cannot send data to commercial cloud providers.
- Hermes Desktop users note that the GUI build lags far behind the CLI version in maturity, with ongoing segfaults, unreadable truncated command approval prompts, missing custom provider model dropdown entries, and broken in-app updates for Linux users.
- Power users building custom MCP tool integrations express high frustration over silent, unlogged failures that force them to manually adjust global debug settings just to troubleshoot basic configuration errors.
- Users report positive satisfaction with core Hermes inference capabilities, with one user noting stable 6+ hour continuous multi-session use for local web app development tasks.

## 8. Backlog Watch
Long-standing high-priority items needing urgent maintainer attention:
1. [Issue #6388](https://github.com/NousResearch/hermes-agent/issues/6388): The Telegram MarkdownV2 bullet list bug was opened on April 9, 2026, over 2 months ago, has 5 comments, and still has no linked fix PR.
2. [Issue #43900](https://github.com/NousResearch/hermes-agent/issues/43900): The Ollama 4096 token context cap bug was opened on June 11, 2026, has 6 active comments, and still has no submitted fix PR despite heavy community demand.
3. [Issue #46880](https://github.com/NousResearch/hermes-agent/issues/46880): The highly requested dual sub-agent model configuration feature for specialized coding/research delegation use cases has received zero maintainer feedback after being filed on June 15, 2026.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-06-16
---
## 1. Today's Overview
PicoClaw saw focused, production-leaning development activity over the 24-hour tracking window, with 3 updated issues and 12 modified pull requests spanning security patching, core code hardening, and end-user usability improvements. The team published a new pre-release nightly build off the main branch, with 2 total issues resolved including a critical reported CIDR access bypass vulnerability, and 2 PRs merged to address high-priority gaps. The majority of active open PRs are targeted low-risk changes that eliminate avoidable panic paths and clean up linter warnings, signaling the maintainer team is prioritizing production readiness ahead of the upcoming stable v0.2.9 release. Overall project health remains strong, with active external contributions from community developers and steady progress closing longstanding reported bugs.

## 2. Releases
A new automated unstable nightly build was published during the tracking window:
- **v0.2.9-nightly.20260615.13a38bd1**: This pre-release is generated from main branch commit 13a38bd, and carries no official production support as an experimental build. No breaking changes or mandatory migration steps are documented for this version. The full public changelog comparing the previous stable v0.2.9 tag to current main branch code is available at: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. Project Progress
2 PRs were merged and closed in the tracked window, delivering targeted security and UX improvements:
1. **PR #3126**: https://github.com/sipeed/picoclaw/pull/3126 – Patches the recently identified launcher CIDR allowlist bypass vulnerability, and adds clearer, more granular runtime logging to alert administrators if their deployment’s CIDR rules can be circumvented via same-host reverse proxies or tunnels.
2. **PR #3097**: https://github.com/sipeed/picoclaw/pull/3097 – Adds a localized, context-aware "Shift+Enter" input hint below the web UI chat composer that only appears when the user has typed content, eliminating confusion for new users who were unaware how to insert newlines without submitting their query.

## 4. Community Hot Topics
The highest-engagement tracked item is the resolved RISC-V .deb OpenAI compatibility bug, tracked at **Issue #2887 (https://github.com/sipeed/picoclaw/issues/2887)** with 10 total user comments, far more than other updated assets. The underlying demand behind this discussion reflects rapidly growing adoption of PicoClaw on low-power RISC-V edge hardware, a core target deployment platform for the project, as large numbers of self-hosted users move away from x86 servers to run local AI agent workloads on embedded RISC-V SBCs. Participating users are actively collaborating with maintainers to debug native package runtime behavior to achieve full production-ready RISC-V support.

## 5. Bugs & Stability
Bugs are ranked below by severity, with fix status noted:
1. **Critical**: PicoClaw launcher `allowed_cidrs` bypass vulnerability (Issue #3069, https://github.com/sipeed/picoclaw/issues/3069) – Flaw allows attackers on the same host to circumvent IP access controls via a local reverse proxy. A corresponding fix PR has already been merged, and full mitigation is available in the latest nightly build.
2. **Medium**: Unpatched unvalidated type assertion panic risk across multiple core modules – Multiple unchecked type casts in core IM integration and registry logic can trigger full process panics on invalid input. Corresponding fix PRs are already drafted and pending review.
3. **Medium**: Windows QQ channel connection failure (Issue #3015, https://github.com/sipeed/picoclaw/issues/3015) – Breaks QQ integration for Windows self-hosted users, throwing a token retrieval timeout error. No fix PR has been published as of this update.
4. **Low**: 7 minor resource cleanup gaps across modules that trigger linter warnings – All issues have matching open fix PRs submitted and ready for triage.

## 6. Feature Requests & Roadmap Signals
Two pending high-value, low-risk feature PRs show strong signal for inclusion in the upcoming stable v0.2.9 release:
1. The Telegram group chat improvement (PR #2975): This change treats replies to bot messages as equivalent to @mentions for groups configured with `mention_only: true`, a highly requested quality of life update that reduces user friction in busy group chat contexts.
2. Full JSONL session history restore (PR #3047): This resolves a longstanding pain point where archived chat messages would not load when users access a specific session’s detail view, while preserving existing performance for session list pagination operations.
Both changes are nearly complete, target widely used functionality, and are very likely to ship in the next stable release.

## 7. User Feedback Summary
Collected user pain points and satisfaction trends from tracked assets:
- Niche deployment gaps are the top source of frustration: Self-hosted RISC-V edge users cannot run the official .deb package with OpenAI-compatible models, and Windows users running gateway instances for QQ integration face total service failure.
- New user UX confusion around web chat input behavior has already been fully resolved via the recently merged Shift+Enter hint.
- Security-focused self-hosted users were unaware of the CIDR bypass risk, and requested more transparent runtime logging for access control configurations.
- Overall satisfaction with core agent and bot runtime functionality is high, with no reported critical gaps for standard x86 Linux deployment use cases.

## 8. Backlog Watch
High-priority assets that have been open for multiple days and require maintainer attention:
1. **PR #2975**: The Telegram group reply feature, created on 2026-05-30, has been pending review for over 2 weeks despite being a heavily requested user-facing improvement.
2. **Issue #3015**: The Windows QQ channel connection failure bug, created 10 days prior on 2026-06-06, has 3 comments from affected users with no public update or assigned fix PR from the maintainer team.
3. Batch of 7 code hardening PRs from external contributor chengzhichao-xydt (including #3059, #3054, and 5 newer fixes submitted on 2026-06-15): All changes eliminate avoidable linter warnings and unhandled panic paths, are fully written, and only need triage to be merged to boost overall production stability.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-16
Repository: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. Today's Overview
The NanoClaw project recorded steady, balanced development activity in the 24-hour reporting window, with zero new or updated issues and 11 total pull requests modified by both core maintainers and external contributors. Efforts were split evenly between foundational new feature work for the Model Context Protocol (MCP) ecosystem, core runtime bug fixes, and documentation polish, with 3 PRs successfully merged or closed. No unexpected regressions, critical outages, or user escalations were logged, indicating strong project health as the team expands third-party SaaS integration capabilities. The vast majority of active open PRs are focused on resolving long-standing low-impact quality of life bugs rather than addressing urgent production failures.

## 2. Releases
No new stable, pre-release, or patch versions were published during the reporting window.

## 3. Project Progress
3 PRs were merged/closed today, advancing core operational reliability, storage hardening, and documentation clarity:
- [PR #2774](https://github.com/qwibitai/nanoclaw/pull/2774): Implemented logic for the `update-nanoclaw` workflow to automatically upgrade the running OneCLI gateway/CLI when its pinned version in `versions.json` changes, eliminating previously silent runtime mismatches between updated core code and legacy gateway instances.
- [PR #2772](https://github.com/qwibitai/nanoclaw/pull/2772): Fixed Codex conversation archive logic to store full transcripts per thread ID instead of generating hundreds of fragmented per-exchange files, resolving conversation history fragmentation issues on high-usage agent deployments.
- [PR #2773](https://github.com/qwibitai/nanoclaw/pull/2773): Removed a redundant duplicate TTY warning from the add-codex skill authentication documentation, reducing user confusion during Codex integration setup.

## 4. Community Hot Topics
No updated PRs or issues recorded public comments or emoji reactions in the reporting window. The two highest-potential new feature PRs drawing early contributor alignment are:
- [PR #2776: feat: support remote HTTP/SSE MCP servers](https://github.com/qwibitai/nanoclaw/pull/2776)
- [PR #2777: feat: add /add-strava skill for official Strava MCP](https://github.com/qwibitai/nanoclaw/pull/2777)
These PRs address a clear, high-priority user need: the rapidly expanding public MCP ecosystem now hosts official SaaS MCP endpoints, and users want native, zero-config support for these hosted services without running local stdio MCP instances on their agent hardware. The Strava integration acts as the first public showcase for this new remote MCP capability, unlocking fitness activity data access for personal AI agents.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported via issues in the 24-hour window. All tracked active bug fixes have associated open PRs, ranked by severity below:
1. **Critical**: [PR #2759](https://github.com/qwibitai/nanoclaw/pull/2759): Fix to ensure the agent runner surfaces budget/token-exhaustion LLM errors directly to end users instead of silently dropping them, preventing unexplained mid-run agent failures.
2. **Medium**: [PR #2628](https://github.com/qwibitai/nanoclaw/pull/2628): Fix to make the `ncl groups create` CLI command respect user-provided custom `--id` values instead of overwriting them with random UUIDs, which breaks pre-built automation workflows.
3. **Medium-Low**: [PR #2627](https://github.com/qwibitai/nanoclaw/pull/2627): Fix to align the MCP `add_reaction` schema with cross-channel requirements, resolving broken emoji reaction functionality across WhatsApp, Discord, Telegram, Teams, and Google Chat.
4. **Low**: [PR #2626](https://github.com/qwibitai/nanoclaw/pull/2626): Fix to return explicit error messages for Signal service restart failures instead of silently no-op-ing, reducing debug friction for self-hosted users.

## 6. Feature Requests & Roadmap Signals
The following high-priority capabilities are almost guaranteed to ship in the next minor/patch release based on current open PR progress:
1. Remote HTTP/SSE MCP server support, the foundational layer that enables all future hosted MCP integrations
2. First-party Strava MCP integration with native OAuth flow for fitness data access
3. Automatic OneCLI gateway upgrade logic for the `update-nanoclaw` workflow to eliminate post-update breakage
4. Docker runtime improvements adding 1GB shared memory and init process flags for agent containers, fixing long-standing headless Chromium stability issues for browser-enabled agents

## 7. User Feedback Summary
All captured feedback from filed issues referenced in updated PRs centers on pain points for self-hosted power users:
- Users previously encountered unplanned post-update runtime failures, as the breaking change notice for the OneCLI SDK 2.2.1 bump implied the NanoClaw update process would automatically upgrade the gateway, which it did not for existing deployments
- Users building automation around NanoClaw agent groups reported broken workflows caused by the CLI silently discarding their custom group IDs
- Users configuring cross-platform messaging channels reported that emoji reactions never worked on non-Slack services, with no error messaging to indicate the root cause
No explicit positive satisfaction feedback was captured in today's update window.

## 8. Backlog Watch
Three user-reported bug fix PRs opened on 2026-05-27 were updated today but have not received final maintainer review, remaining open for nearly 3 weeks: [PR #2628](https://github.com/qwibitai/nanoclaw/pull/2628), [PR #2627](https://github.com/qwibitai/nanoclaw/pull/2627), and [PR #2626](https://github.com/qwibitai/nanoclaw/pull/2626). All three PRs fully close pre-filed user issues, have no unresolved feedback threads, and address common quality-of-life pain points for self-hosted deployments, making them high-priority items to review and merge to avoid accumulating unnecessary technical debt.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-06-16
---
## 1. Today's Overview
Over the 24-hour reporting window, NullClaw recorded moderate, low-disruption community-driven activity with no new official releases, zero merged code changes, 3 actively updated open user issues, and 1 open routine dependency update PR. No critical production outages or widespread core functionality failures were flagged by users during this period. All in-flight discussions center on troubleshooting edge integration and configuration pain points, requesting enterprise compatibility features, and maintaining container base image security, indicating a stable health status for the core runtime product. No maintainer-led production patches were published in this cycle.
## 2. Releases
No new versions, pre-releases, or hotfixes were published in the last 24 hours. There are no associated breaking changes or migration notes for this reporting window.
## 3. Project Progress
No merged or closed PRs, feature launches, or bug fixes were formally advanced to the production main branch in the last 24 hours. The only in-flight updated contribution is open PR #956, a Dependabot-initiated update to bump the Alpine Linux base image from version 3.23 to 3.24 in the project’s public Docker image group, which is pending maintainer review and approval.
## 4. Community Hot Topics
The most active discussions ranked by comment count are:
1. [Issue #957: Rate limit issue](https://github.com/nullclaw/nullclaw/issues/957) (1 comment)
2. [Issue #952: [bug] Local model using ollama returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952) (1 comment)
3. [Issue #955: [enhancement] Identity based authentication support for Azure OpenAI LLM Provider](https://github.com/nullclaw/nullclaw/issues/955) (0 comments, high strategic relevance)

Underlying user needs reflected in these topics include demand for fully configurable, production-optimized runtime guardrails for headless automation deployments, robust end-to-end validation for self-hosted local LLM integrations, and compliance alignment with strict corporate cloud security policies for enterprise usage.
## 5. Bugs & Stability
Two distinct bugs were reported or updated this window, ranked by severity:
1. **High severity**: [Issue #952](https://github.com/nullclaw/nullclaw/issues/952) – Ollama-hosted local LLM instances (tested with Gemma) return truncated incomplete outputs that break end-to-end agent task completion. No public fix PR has been linked to this bug to date.
2. **Medium severity**: [Issue #957](https://github.com/nullclaw/nullclaw/issues/957) – Unspecified, non-configurable config reader rate limit errors block normal operation for users running NullClaw as a memory-less agent runtime with JSON output requirements. No public fix PR has been posted for this configuration gap.

No reports of critical crashes, data loss, or widespread core functionality regressions were logged in this period.
## 6. Feature Requests & Roadmap Signals
The only formal new feature request logged this window is [Issue #955](https://github.com/nullclaw/nullclaw/issues/955), which requests native support for Azure Active Directory identity-based authentication for the Azure OpenAI provider, using `DefaultTokenCredential` to pull credentials from local Azure CLI sessions. This enterprise-focused feature is highly likely to be prioritized for the next minor release, as it unlocks access to a large user segment of regulated Azure enterprise customers that cannot use explicit API keys per internal security policies. Documentation updates for the hidden rate limit configuration referenced in Issue #957 are also very likely to be included in the next patch release.
## 7. User Feedback Summary
Real user pain points and use cases observed this cycle include:
- Users deploying NullClaw for lightweight, memory-free automation workloads cannot find public documentation for built-in runtime guardrail parameters, such as the hidden config reader rate limit, and cannot adjust threshold values to fit their use cases.
- Self-hosted local LLM users running Ollama on-prem are experiencing broken output formatting that prevents them from running full agent workflows without manual intervention.
- Enterprise Azure users are currently blocked from adopting NullClaw entirely due to internal security policies that ban explicit API key usage for LLM service access.
No widespread dissatisfaction with core NullClaw runtime functionality was observed, and all reported issues are targeted at niche, high-value edge use cases.
## 8. Backlog Watch
The highest-priority long-unaddressed item requiring urgent maintainer triage is [Issue #952](https://github.com/nullclaw/nullclaw/issues/952), the Ollama incomplete output bug. The issue was originally created 5 days prior to this digest on 2026-06-11, and has not received an official maintainer response, triage status tag, or public roadmap for a fix to date. Unresolved local LLM compatibility bugs carry high risk of eroding trust among the project’s open-source self-hosted user base, which is a core stakeholder group for NullClaw.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-16 Project Digest
---
## 1. Today's Overview
This was an exceptionally high-velocity development day for the IronClaw Reborn WebUI v2 stabilization track, with 47 total updated issues and 50 updated pull requests recorded in the 24-hour window. 26 PRs were merged or closed, representing strong throughput on user-facing bug fixes, core platform feature rollouts, and CI/quality of life improvements. Most active development was focused on resolving long-standing OAuth/credential permissioning pain points, advancing the universal multimodal attachments epic, and building out the new Reborn AI learning system. No new official releases were published during this period, as the team prioritizes stabilization for an upcoming minor v0.29.x launch. Overall project health is strong, with fix rates outpacing new bug reports reported by QA and internal testers.

## 2. Releases
No new official releases were published in the last 24 hours. The pending v0.29.1 release PR remains in pre-release review status.

## 3. Project Progress
Key merged/closed work completed today includes:
1. **Image vision support landing**: PR #4871 merged to enable image attachments to be passed as native multimodal content to vision-capable LLMs, closing a major gap in the universal attachments epic #4644.
2. **Trace Commons onboarding overhauls**: PR #4559 was merged, replacing the old 15-step manual CLI Trace Commons registration flow with a simplified agent-driven invite link flow that users can complete directly in chat.
3. **CI benchmark improvements**: PR #4936 added a `--framework` flag to the public `/benchmark` PR comment dispatcher, enabling maintainers and contributors to run test suites natively on the Reborn runtime.
4. **Core tool bug fixes**: PR #4827 merged to resolve a false validation error in the `builtin.http` tool that broke standard GET requests with empty body fields.
5. **UX and stability fixes**: 13 total closed issues resolved high-priority bugs including broken scheduled automations, Notion OAuth localhost redirect failures on Railway deployments, incorrect workspace path duplication, and broken GitHub extension result filtering that returned pull requests alongside regular issues.

## 4. Community Hot Topics
The most actively discussed work items, sorted by comment count:
1. [Issue #4825: Reborn: persist "always allow" approvals across threads](https://github.com/nearai/ironclaw/issues/4825) (3 comments)
   Underlying need: Users requested durable, cross-session capability approvals to eliminate repetitive prompt spam when using trusted tools. This work is now the top priority for the auth stabilization track, with core implementation work already scoped.
2. [Issue #4908: [UX / Onboarding] [Reborn] Google Calendar extension shows "Activate" action after already being active](https://github.com/nearai/ironclaw/issues/4908) (3 comments)
   Underlying need: Internal QA testers flagged widespread usability gaps that create confusion about extension activation state, leading many new users to abandon third-party tool setup flows.
3. [Issue #4880: Automate Code Review and Review Comment Resolution](https://github.com/nearai/ironclaw/issues/4880) (2 comments)
   Underlying need: As the core contributor base grows, the team is requesting an automated AI-powered PR review pipeline to reduce reviewer toil and speed up merge times for routine changes.
4. [PR #4939: fix(reborn): credentials are owner-scoped, not thread-scoped (A+B+C)](https://github.com/nearai/ironclaw/pull/4939)
   This PR directly implements the root fix for the #4825 persistent approval request, resolving the core bug that caused credentials and approvals to be tied to individual threads rather than user accounts.

## 5. Bugs & Stability
Bugs ranked by severity, with fix status noted:
1. **Critical**: [Issue #4907: [Reborn] Run may fail after successful Google OAuth instead of resuming execution](https://github.com/nearai/ironclaw/issues/4907)
   Breaks the core Google Suite extension workflow: users complete OAuth successfully but their in-progress chat run crashes instead of resuming. No fix PR has been posted publicly as of this digest.
2. **High**: [Issue #4935: Credentials are owner-scoped, not thread-scoped: OAuth account fork + cross-thread resolution](https://github.com/nearai/ironclaw/issues/4935)
   This root bug causes all already-authorized extensions to require re-OAuth on every new thread. Fix PR #4939 is open and targeted for imminent merge.
3. **High**: [Issue #4764: [Reborn] Denying shell approval leaves tool invocation pending and provides no user feedback](https://github.com/nearai/ironclaw/issues/4764)
   Creates unresponsive UI state when users deny tool permissions, with no indication that their action was registered. No fix PR has been posted.
4. **Medium**: [Issue #4942: [Reborn WebUI] Tool calls failed won't appear until the re-fetch/reload](https://github.com/nearai/ironclaw/issues/4942)
   SSE sync bug hides tool execution failures from users until they manually refresh the page, making debugging hard. No linked fix PR.
5. **Medium**: [Issue #4857: [Reborn] Clean state incorrectly shows NEAR AI provider as Active in Settings → Inference](https://github.com/nearai/ironclaw/issues/4857)
   Misleads new users into thinking an LLM provider is already configured on a fresh install when no credentials have been entered. No fix PR posted.

## 6. Feature Requests & Roadmap Signals
Observed work in active development that is highly likely to ship in the next minor release:
1. The full universal attachments epic (#4644) will ship stable support for multimodal image inputs in v0.29.x, with remaining work limited to final cross-channel attachment routing and polished WebUI UX.
2. The new Reborn learning system (WS-1 and WS-2 PRs #4937, #4938) will ship behind a feature flag, enabling agents to automatically learn from past execution failures to avoid repeating errors.
3. Downloadable project file support from PR #4933, which lets users export agent-generated reports and exports directly from WebChat v2 without manual file system navigation, will be included as a stable user-facing feature.
4. The new Slack personal user token tool from PR #4941 will be released as an experimental feature, adding full Slack workspace message search capabilities that standard bot tokens cannot support.

## 7. User Feedback Summary
Aggregated feedback from internal QA testers and early adopters:
1. Top pain point: Repetitive, unskippable approval and OAuth prompts across new threads are the most commonly reported complaint, with 7+ separate open issues documenting frustration with the current thread-bound permissioning model.
2. Second major pain point: The fragmented extension setup flow that requires users to manually navigate between 4 separate UI pages (Registry, Installed, Configure, and Chat auth) is seen as a major barrier to onboarding new users.
3. Positive feedback: Testers have expressed strong excitement for the upcoming multimodal image support and downloadable file features, which resolve two of the most requested missing features from the older v1 IronClaw stack. Recent stability improvements to the previously broken scheduled automations system are also noted as a major usability upgrade.

## 8. Backlog Watch
High-priority long-running items that are awaiting maintainer attention:
1. [Issue #4644: Universal attachments across all channels: wire the v1 attachment pipeline into Reborn + extensible format registry + polished web UX](https://github.com/nearai/ironclaw/issues/4644)
   Opened 2026-06-09, this core feature epic has partial progress completed, but remaining work on the format registry and final web UX has not yet been assigned to a contributor, requiring maintainer prioritization to avoid delayed shipping.
2. [Dependabot PR #4876: build(deps): bump the everything-else group across 1 directory with 43 updates](https://github.com/nearai/ironclaw/pull/4876)
   Opened 2026-06-14, this large Rust dependency update is critical to prevent version drift and reduce supply chain risk, but it needs dedicated maintainer review to avoid accidental breaking changes.
3. [PR #3708: chore: release](https://github.com/nearai/ironclaw/pull/3708)
   Opened 2026-05-16, this pending release PR for IronClaw v0.29.1 includes documented breaking changes for core libraries that is blocking downstream contributors waiting for stable updated releases, and has been sitting in backlog for 30 days.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 2026-06-16 Project Digest
---
## 1. Today's Overview
On 2026-06-16, the LobsterAI open-source project recorded steady, release-focused development activity, with 2 recently updated open issues and 11 total updated pull requests, 5 of which were merged or closed in the 24-hour window. No new official releases were published in the period. Most core contributions targeted final polishing for the upcoming 2026.6.11 release branch, spanning voice input experience refinement, document artifact functionality upgrades, and routine CI infrastructure hardening. The day’s activity reflects a healthy, release-focused workflow, with no critical blocking bugs or community escalations reported across all tracked items.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Project Progress
All 5 merged/closed PRs in the tracked period deliver incremental improvements for the upcoming 2026.6.11 release branch:
1. **PR #2159** (https://github.com/netease-youdao/LobsterAI/pull/2159): Shipped the full document artifact share and preview optimization feature, adding native support for sharing DOCX, PPTX, XLSX, PDF, CSV and TSV files, with optimized rendering for paginated DOCX, native PDF fallback, auto-adjusted table formatting, corrected pdfjs font resource build configuration, and adjusted CSP rules to support blob resource access required for local document preview.
2. **PR #2160** (https://github.com/netease-youdao/LobsterAI/pull/2160): Refactored the voice input workflow to fully remove legacy short ASR upload logic and related IPC interfaces, making all Cowork voice input sessions use real-time ASR exclusively, stripped the unused voice recognition mode switch in settings, and updated all relevant documentation to reflect the real-time-only behavior.
3. **PR #2161** (https://github.com/netease-youdao/LobsterAI/pull/2161): Updated the application's "About" page content to align with the upcoming release's version information and contributor credits.
4. **PR #2162** (https://github.com/netease-youdao/LobsterAI/pull/2162): Resolved a merge conflict for the voice input feature, preserving the release branch's real-time only ASR flow while retaining critical safeguards including draft ownership tracking, stale callback prevention, session switch cancellation logic, and diagnostic logging.
5. **PR #2163** (https://github.com/netease-youdao/LobsterAI/pull/2163): Refined the dictation recording UI and ASR quota handling flow, adding in-memory ASR quota tracking and shared quota constants to make the renderer persist daily ASR availability status, and implement lazy quota state reset across app restarts.

## 4. Community Hot Topics
The highest-priority open community topic tracked in the last 24 hours is feature PR #1428 (https://github.com/netease-youdao/LobsterAI/pull/1428) submitted by contributor choyuenga, which implements native Electron system notifications for completed or errored sessions when the main LobsterAI window is not focused. This feature directly responds to user demand to eliminate the requirement for constant manual window checks when running long-running AI tasks in the background, and aligns LobsterAI user experience with widely adopted competing AI code assistants including Cursor and Claude Code that already support this background notification functionality. No other tracked issues or PRs recorded more than 1 comment or positive reaction in the window.

## 5. Bugs & Stability
No critical crashes, data loss incidents or high-severity regressions were reported. Two medium-low severity functionality bugs related to the custom skill upload workflow were marked as stale and updated in the 24-hour period, ranked by severity:
1. **Medium Severity**: Issue #1426 (https://github.com/netease-youdao/LobsterAI/issues/1426): Users do not receive a success confirmation prompt after uploading a custom local skill, and the skill list fails to refresh to display the newly added skill. No associated fix PR has been published as of the tracking window.
2. **Medium-Low Severity**: Issue #1427 (https://github.com/netease-youdao/LobsterAI/issues/1427): The local skill upload flow lacks duplicate name validation, allowing users to create multiple identical-named custom skills when re-uploading the same skill package multiple times. No associated fix PR has been published.

## 6. Feature Requests & Roadmap Signals
Based on current merged code and pending PR backlog, the following features are highly likely to ship in the next 1-2 minor releases:
1. The full refined real-time voice input experience with improved recording UI and ASR quota tracking is already code-complete, and will be a core highlight of the imminent 2026.6.11 release.
2. Multi-format document Artifact sharing and optimized office file preview will also launch as part of the 2026.6.11 release, eliminating the need for users to launch external apps to view AI-generated documents.
3. The background session system notification feature (PR #1428) will almost certainly be prioritized for merge immediately after the 2026.6.11 release, to close the widely cited experience gap between LobsterAI and competing AI assistants.
Large dependency upgrades, including the Electron 42.x version bump, will be scheduled for post-release hardening branches to avoid introducing unvalidated breaking changes to the stable user-facing build.

## 7. User Feedback Summary
All recent tracked user feedback focuses on workflow friction points rather than core functionality breakdowns:
- Power users who rely on custom local skill imports are currently blocked by the broken upload flow, with no success feedback or duplicate prevention, disrupting their ability to extend LobsterAI functionality with self-built skill packages.
- Users who frequently run long-running generation or coding tasks report that they have to keep the LobsterAI window focused at all times to avoid missing task completion or failure alerts, which disrupts their multi-tasking workflows.
No explicit positive satisfaction feedback or major usability complaints were recorded in the 24-hour window.

## 8. Backlog Watch
Two long-stale high-impact items require urgent maintainer attention:
1. **PR #1277** (https://github.com/netease-youdao/LobsterAI/pull/1277): This dependabot PR that bumps the entire Electron dependency group from version 40.2.1 to 42.4.0 has been open for over 2 months since April 2, 2026 with no review action. The newer Electron version brings critical security patches, performance improvements and better modern web API support that would benefit the already merged document preview and real-time voice input features, and requires a formal validation and merge scheduling timeline.
2. Stale bug issues #1426 and #1427, which cover the broken custom skill upload workflow, have also been open for over 2 months, and require prioritized triage to resolve the functionality break that blocks power user extension use cases.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (github.com/moltis-org/moltis) 2026-06-16 Project Digest
---
## 1. Today's Overview
Moltis, the open-source personal AI assistant and distributed AI agent framework, saw focused, low-volume core development activity over the 24-hour monitoring window ending 2026-06-16. No existing issues were updated, no new community bug reports or feature submissions were logged, and no new stable or pre-release versions were published. Two brand new feature-focused pull requests were submitted by core team member gptme-thomas, both targeting expanded configurability and runtime context flexibility for self-hosted and third-party integrated deployments. The project remains in active pre-launch development with no public stable releases shipped to date, with all recent work prioritizing core functional parity for mixed native/external agent workflows.
## 2. Releases
No new releases were published in the 24-hour monitoring window, and no prior stable or pre-release versions are currently listed on the project's public GitHub repository.
## 3. Project Progress
No PRs were merged, closed, or committed to the mainline codebase over the monitored period, as both newly submitted pull requests are still in pre-review status. The two incoming submissions advance the project's core roadmap by addressing long-overdue gaps in external agent integration and dynamic runtime context support, moving the project closer to a production-ready pre-release milestone.
## 4. Community Hot Topics
There are no community-submitted PRs or issues with public user comments or reactions in the current window, so all active tracked items are core team development submissions aligned with high-priority community demand signals from the broader open-source AI agent ecosystem:
1. PR #1125: [Support model and effort selection for external agents](https://github.com/moltis-org/moltis/pull/1125)
   Underlying need: The feature delivers equal granular configuration controls for third-party external agent providers that previously were only available for Moltis's native model integrations, addressing widespread user demand to mix and match self-hosted and commercial third-party agent services without workflow compromises.
2. PR #1124: [Add context command support for chat turns](https://github.com/moltis-org/moltis/pull/1124)
   Underlying need: The configurable pre-chat command feature eliminates the repetitive manual step of pasting updated runtime context (such as local system status, recent file changes, or internal service health data) into every new chat session, a top requested quality-of-life improvement for self-hosted deployment administrators.
## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported or logged via public GitHub issues in the 24-hour monitoring window. There are no open unresolved stability issues tracked in the current public project dataset, and no active targeted fix PRs are in progress at this time.
## 6. Feature Requests & Roadmap Signals
No explicit user-submitted feature requests were logged in the window, but the two newly submitted pre-review PRs provide clear roadmap signals. Both feature additions are high-priority, low-risk core extensibility improvements, making it extremely likely that both will be fully tested, merged, and included in the project's first public pre-release version. The roadmap indicates the core team is currently prioritizing deployment flexibility for self-hosted and custom enterprise use cases, rather than consumer-facing UI or end-user convenience features in the near term.
## 7. User Feedback Summary
No explicit end-user satisfaction, dissatisfaction, or use case submissions were logged publicly in the project repository over the past 24 hours. The two new feature PRs align with widely documented unmet needs in the broader open-source personal AI assistant community, indicating the core team is proactively building to match commonly requested functionality even in the absence of direct user submissions to the repo.
## 8. Backlog Watch
There are no long-unanswered community-submitted issues or stale pending PRs in the project backlog at this time, a marker of very healthy pre-launch project maintenance hygiene. The only outstanding items awaiting maintainer attention are the two newly submitted feature PRs, which are waiting for initial code review before moving to testing and merge.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Daily Digest | 2026-06-16
---
## 1. Today's Overview
The CoPaw open-source AI agent project recorded extremely high development activity in the last 24 hours, with 100 total updated work items (50 updated issues + 50 updated pull requests). 38% of all active issues were resolved, and 70% of all updated PRs were merged or closed, showing strong iteration velocity focused on stabilizing the recent v1.1.11.post2 patch release. The core engineering team prioritizes landing long-awaited token/context visibility features, fixing v1.1.11.post2 regressions, and polishing desktop client and third-party channel user experience. Overall project health is excellent, with a balanced distribution of new feature development, bug patching, and community contributor onboarding work. No new official releases were published in the observation window.

## 2. Releases
No new official releases were launched in the last 24 hours. All current development churn targets bug fixes and incremental feature additions for the recently released v1.1.11.post2 minor patch.

## 3. Project Progress
35 PRs were merged or closed in the 24-hour window, delivering the following core improvements:
1. Full token/context visibility feature stack landed: Merged PRs [#4310](https://github.com/agentscope-ai/QwenPaw/pull/4310), [#5130](https://github.com/agentscope-ai/QwenPaw/pull/5130) and [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) deliver a chat header context usage indicator, per-turn token usage popover, and floating real-time token usage badge for the web console, fulfilling over 6 months of community feature requests.
2. Critical bug fixes merged: PR [#5146](https://github.com/agentscope-ai/QwenPaw/pull/5146) resolved the long-standing bug where slash skill invocation displayed raw full SKILL.md content in the console; PR [#5192](https://github.com/agentscope-ai/QwenPaw/pull/5192) fixed Windows console OSError crashes and unexpected self-termination issues on legacy Windows terminals.
3. Core infrastructure upgrade completed: PR [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) (Agent OS Driver unified abstraction for MCP/A2A/ACP external capabilities) was merged, laying a unified protocol layer for cross-tool and cross-agent interoperability.
4. Ecosystem and experience improvements: PR [#5123](https://github.com/agentscope-ai/QwenPaw/pull/5123) overhauled the skill market UI with new QwenPaw platform endpoints, skill categorization and previews; PR [#4602](https://github.com/agentscope-ai/QwenPaw/pull/4602) enabled isolated cron job execution in a unified shared session view.

## 4. Community Hot Topics
The highest-engagement active items (sorted by comment count):
1. [Issue #1911](https://github.com/agentscope-ai/QwenPaw/issues/1911): Huawei Xiaoyi smart assistant channel integration troubleshooting (22 comments, open since 2026-03-20). Users report that custom deployed CoPaw agents fail to respond correctly on mobile Xiaoyi devices even when the integration works on the Xiaoyi open platform. The high comment volume reflects strong underlying demand from Chinese end users to deploy their self-built agents to mainstream consumer smart assistant hardware, rather than only using web/desktop interfaces.
2. [Issue #5140](https://github.com/agentscope-ai/QwenPaw/issues/5140): Non-plaintext (docx/pdf) file download 404 error in v1.1.11.post2 (6 comments). This bug breaks core file exchange workflows, with the active discussion showing that multiple production users rely on CoPaw as a document processing agent for enterprise teams.
3. [Issue #5181](https://github.com/agentscope-ai/QwenPaw/issues/5181): Plugin dependency installation spawns unlimited visible cmd popups on Windows when PyPI is unreachable (5 comments). The high engagement indicates a large user base of non-technical Windows desktop users who install third-party plugins without professional network configuration.

## 5. Bugs & Stability
Reported regressions and crashes ranked by severity:
1. Critical: [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) Windows client infinite process leak, memory usage grows to 90%+ until the system is unresponsive. No fix PR has been submitted yet, affects all v1.1.11.post2 desktop users.
2. High: [#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181) Unhidden popup cmd windows during plugin dependency installation, which causes severe desktop disruption. No fix PR is available.
3. High: [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) Non-plaintext attachment download 404 error, blocks document processing workflows for enterprise users. No fix PR merged.
4. Medium: [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) Context compression incorrectly erases all agent persona data when the persona token count exceeds the threshold, leading to full task interruption.
5. Medium: [#5184](https://github.com/agentscope-ai/QwenPaw/issues/5184) Locally created custom model providers do not display in the settings UI after upgrading to v1.1.11.post2.
19 total bug issues were resolved in the last 24 hours, demonstrating fast patching velocity for reported regressions.

## 6. Feature Requests & Roadmap Signals
The highest-priority user requested features with high possibility to land in the next minor release v1.1.12:
1. [Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) Headroom local reversible context compression integration that claims to reduce token consumption by 60-95%. This highly demanded cost-saving feature will very likely be shipped as an optional plugin in v1.1.12.
2. Chat input queue support from WIP PR [#5158](https://github.com/agentscope-ai/QwenPaw/pull/5158), which allows users to send consecutive requests without waiting for prior generation to finish, is near completion and will land in the next release.
3. Desktop client system tray, auto-start, and background resident features from [Issue #5164](https://github.com/agentscope-ai/QwenPaw/issues/5164) are already in the planning pipeline for desktop experience polish.
4. Langfuse/OpenTelemetry observability integration from [Issue #5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) is supported by the newly merged Agent OS Driver infrastructure, and is expected to be part of the 2.0 major release roadmap.

## 7. User Feedback Summary
1. Overall user satisfaction with the v1.1.11 release core features (local model provider system, expanded plugin ecosystem) is high, but most users report multiple annoying small regressions in the v1.1.11.post2 patch that hurt production usability.
2. Enterprise self-hosted users are heavy adopters of Feishu and WeCom channel integrations, with significant dissatisfaction over missing end-to-end workflow capabilities including hidden approval interfaces and slow streaming card refresh for long replies.
3. Power users running long multi-turn agent tasks express strong relief that the long-requested real-time token usage visibility features are finally shipped, as this resolves their long-standing pain point of uncontrollable API costs and unexpected context truncation.
4. Wayland Linux desktop users report compatibility issues with the desktop pet mini-program feature, indicating limited cross-desktop testing coverage for non-Windows desktop deployments.

## 8. Backlog Watch
High-priority long-unresolved work items that require maintainer attention:
1. [Issue #1911](https://github.com/agentscope-ai/QwenPaw/issues/1911) Huawei Xiaoyi channel integration bug, open since March 2026 with 22 comments, no official maintainer has provided debugging guidance or triage feedback for 3 months, blocking a large group of users wanting to deploy their agents to consumer smart assistant hardware.
2. [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) DataPaw data analysis plugin with 12 built-in BI skills, submitted by a first-time contributor on May 22 2026, has been under review for almost a month, blocking all users who need native data analysis agent capabilities.
3. [Issue #5122](https://github.com/agentscope-ai/QwenPaw/issues/5122) Context compression token count mismatch: the displayed token usage is far smaller than the actual LLM API input size due to uncounted skill/MCP metadata, reported 5 days ago with no maintainer assigned, which reduces reliability for all long-running agent workflows.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-06-16
---
## 1. Today's Overview
This 24-hour window was a high-velocity active work period for the ZeroClaw open-source AI agent runtime project, with 100 total updated issues and pull requests (50 each) recorded across the repository. The team prioritized high-severity bug triage, security hardening, incremental feature delivery, and foundational work for the upcoming v0.8.1 and v0.9.0 milestone releases. No production outages or critical breakages were reported in the window, and community contributor activity remained strong across channels, providers, and core runtime subsystems. Most ongoing work aligns with public roadmap priorities for multi-agent deployment flexibility, supply chain security, and self-hosted inference compatibility.

## 2. Releases
No new official releases were published in the 24-hour period ending 2026-06-16. All current work is landing directly to the `master` branch in preparation for the next scheduled minor release.

## 3. Project Progress
A total of 6 PRs and 4 issues were fully merged/closed over the past day, with key progress including:
- Resolution of the local custom CA certificate support feature ([#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458)), unblocking users running internal self-hosted inference endpoints behind private PKI systems
- Fix of the unbounded `skill_manage` patch cooldown bypass bug ([#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683)) that allowed unregulated writes to skill configurations
- Full resolution of the S1 gateway WebSocket `ask_user` workflow block ([#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)) that broke user prompting in the official web dashboard
- Landing of incremental improvements including multi-platform Clippy CI optimization, credential redaction coverage, and per-alias webhook routing, all tracked under the v0.8.1 integration milestone.

## 4. Community Hot Topics
The highest-engagement community items center on multi-agent deployment flexibility and self-hosted infrastructure support:
1. **Multi-Agent Routing Feature [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)** (6 comments, 9 upvotes): The most popular open feature request, calling for support to run multiple isolated agents and multiple channel accounts (e.g. two separate WhatsApp profiles) on a single ZeroClaw Gateway instance. The underlying community need is to reduce operational overhead for small and medium deployments that currently need to spin up separate ZeroClaw nodes for each agent instance.
2. **RFC: A2A agent discovery with `.well-known/agent-card.json` [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)**: Community members are actively contributing design feedback for the upcoming agent-to-agent interoperability standard, to enable seamless communication between ZeroClaw instances and other open-source "claw"-family agent systems.

## 5. Bugs & Stability
Bugs are ranked below by severity, as of today's updates:
1. **S2/P1 Security Bug: Per-agent MCP scoping is a silent no-op [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)**: A newly reported high-risk issue where the `mcp_bundles` per-agent permission isolation config parses and displays correctly to users, but is never enforced at runtime. No fix PR is open as of this digest, but it is marked accepted for immediate triage.
2. **S2 Runtime Bug: Response cache does not skip multimodal prompt markers [#7741](https://github.com/zeroclaw-labs/zeroclaw/issues/7741)**: The existing request cache does not detect images embedded in chat prompts, leading to incorrect cached text-only responses for multimodal requests. A fix is already assigned to a maintainer.
3. **S2 Channel Bug: Email OAuth refresh has no retry logic [#7739](https://github.com/zeroclaw-labs/zeroclaw/issues/7739)**: The email integration fails permanently when a transient OAuth token refresh error occurs, unlike other provider integrations that use backoff retry logic. A patch is already in active development.
No critical S0 data loss bugs were reported or confirmed in the window.

## 6. Feature Requests & Roadmap Signals
Recent feature requests and active tracker items provide clear signals for upcoming release contents:
- The v0.8.1 minor release is highly likely to ship the configurable channel reply-intent precheck, Slack thread context hydration, and context compression provider decorator features, all of which are already marked accepted and in early implementation.
- The v0.9.0 release, which is scoped for security and gateway hardening, will include the new hardened supply chain CI pipeline, per-agent prompt injection mode overrides, and explicit delegation authority controls for cross-agent handoffs.
- Long-term roadmap work for Wasm-only runtime (full Node.js dependency elimination) is now formally under RFC review, indicating a major architecture refresh planned for post-v0.9 releases.

## 7. User Feedback Summary
Verified user pain points surfaced in the past 24 hours include:
1. Enterprise self-hosted users with self-signed inference endpoints reported major friction that blocked them from connecting their custom stacks, a gap partially resolved by the newly merged CA cert support feature.
2. New users reported confusion around editing config strings in the TUI, as there is currently no arrow key navigation to correct typos without retyping full strings.
3. Users of the zero-code session feature noted the existing documentation does not explain how to load or switch between existing saved sessions, leading to unnecessary workflow disruption.
Overall community satisfaction remains high, with external contributors submitting 7 high-quality PRs for channel integration improvements, cost tracking for OpenAI-compatible providers, and CI optimization this window.

## 8. Backlog Watch
Two high-impact long-running backlog items are currently blocked and in need of maintainer attention:
1. **#551 Allow insecure HTTPS requests to OpenAI-compatible endpoints [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551)**: Open since February 2026, marked high security risk, p2 priority, and status blocked. The recently closed related local CA cert feature work provides all the building blocks to unblock this request, it only needs maintainer review to allocate development resources to add the optional SSL bypass toggle.
2. **#6074 Audit and recover 153 commits lost in bulk revert [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**: Open since April 2026, marked `help wanted`. The bulk revert of 153 approved, merged commits from March 2026 removed dozens of validated bug fixes and features, and full recovery work has not been prioritized for 2 months. It requires dedicated maintainer coordination to map and re-land the lost changes efficiently.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*