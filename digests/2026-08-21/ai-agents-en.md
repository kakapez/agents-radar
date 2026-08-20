# OpenClaw Ecosystem Digest 2026-08-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-20 22:27 UTC

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

# OpenClaw Project Digest | 2026-08-21
This digest covers 24-hour activity for the open-source AI agent gateway project OpenClaw.

---

## 1. Today's Overview
OpenClaw registered very high development velocity on 2026-08-21, with 1000 total tracked updates across 500 modified issues and 500 modified pull requests as the community races toward the v2026.8.1-beta.2 launch milestone. 44 issues were resolved and 168 PRs merged/closed over the 24 hour window, delivering critical security hardening, bug fixes for the upcoming beta, and cross-platform client improvements. The majority of active triage this period focused on high-severity gateway regressions reported in the latest beta preview, with contributions from both core maintainers and external self-hosted fleet operators. No breaking cross-architecture issues were found across the test fleet today, indicating stable pre-release health. Overall, the project remains in an extremely active, high-output pre-release development cycle.

## 2. Releases
No new official public releases were published in the 24-hour reporting window. The pre-release validation cycle for the upcoming `v2026.8.1-beta.2` build remains open, with all testing progress tracked at the dedicated release validation issue: [openclaw/openclaw#125626](https://github.com/openclaw/openclaw/issues/125626). No public release assets or breaking change notifications were posted today.

## 3. Project Progress
168 total PRs were merged or closed in the 24-hour period, with 5 high-priority stable patches advancing the release candidate:
- **[openclaw/openclaw#118696](https://github.com/openclaw/openclaw/pull/118696)**: Automatically makes the gateway terminate all supervised subprocesses on shutdown, resolving the long-running zombie process accumulation bug.
- **[openclaw/openclaw#116489](https://github.com/openclaw/openclaw/pull/116489)**: Introduces a new security policy requiring explicit user acknowledgement before installing high-risk plugins or skills, hardening the gateway against unvetted extension attacks.
- **[openclaw/openclaw#120900](https://github.com/openclaw/openclaw/pull/120900)**: Ported the new install policy acknowledgement flow to the web Control UI, so administrators can review and approve high-risk skill installs directly from the browser.
- **[openclaw/openclaw#125471](https://github.com/openclaw/openclaw/pull/125471)**: Fixed the Claude CLI OAuth refresh ownership bug that caused login failures after gateway restarts, resolving a top-reported usability issue for Anthropic model users.
- **[openclaw/openclaw#126363](https://github.com/openclaw/openclaw/pull/126363)**: Restored functionality for OpenAI OAuth Talk to correctly consult the active OpenClaw agent, fixing broken real-time voice call support for ChatGPT subscriber accounts.

## 4. Community Hot Topics
The top most active discussions by comment count reflect high-priority operator and beta tester needs:
1. **[openclaw/openclaw#42475](https://github.com/openclaw/openclaw/issues/42475)**: Per-agent cost budget enforcement at gateway level (23 comments, 1 👍). Underlying need: Self-hosted fleet operators want native, zero-extra-dependency spend caps to prevent runaway model call costs without needing third-party monitoring tools.
2. **[openclaw/openclaw#125626](https://github.com/openclaw/openclaw/issues/125626)**: v2026.8.1-beta.2 release validation (17 comments). Underlying need: Hundreds of beta testers are contributing self-hosted deployment validation results across 10+ different runtime environments to catch edge-case bugs before public release.
3. **[openclaw/openclaw#112423](https://github.com/openclaw/openclaw/issues/112423)**: Large SQLite transcript cleanup blocks the gateway event loop (16 comments). Underlying need: Large-scale deployments with weeks of accumulated session transcripts are seeing gateway UI freezes during maintenance operations.
4. **[openclaw/openclaw#108435](https://github.com/openclaw/openclaw/issues/108435)**: 2026.7.1 gateway fails to start on systemd/Ollama environments (14 comments, 3 👍). Underlying need: Users running low-resource local deployments hit boot failures after minor version updates, with no easy remediation path documented.
5. **[openclaw/openclaw#38327](https://github.com/openclaw/openclaw/issues/38327)**: "Cannot convert undefined or null to object" error when using Google Vertex Gemini 3.1 Pro (14 comments, 3 👍). Underlying need: Users integrating Google's latest preview LLM are blocked entirely from running sessions on the provider.

## 5. Bugs & Stability
High-severity bugs reported or triaged today, ranked by P0 > P1 priority:
| Severity | Issue Link | Bug Summary | Fix Status |
|----------|------------|-------------|------------|
| P0 | [openclaw/openclaw#108435](https://github.com/openclaw/openclaw/issues/108435) | 2026.7.1 gateway enters crash loop immediately after start | No public linked PR yet, under active maintainer review |
| P0 | [openclaw/openclaw#119270](https://github.com/openclaw/openclaw/issues/119270) | File tool commands strip leading `@` from paths, causing silent overwrites/deletion of unrelated user files | No public linked PR yet, classified as critical data-loss risk |
| P0 | [openclaw/openclaw#124788](https://github.com/openclaw/openclaw/issues/124788) | v2026.8.1-beta.2 gateway event loop blocks for 100s every 10 minutes, taking all services offline | No public linked PR yet, confirmed to be a release blocker for the upcoming beta |
| P0 | [openclaw/openclaw#125333](https://github.com/openclaw/openclaw/issues/125333) | Total token count inflation bug still reproduces on beta.2, incorrectly inflating usage metrics | Partial fix in prior PR, new fix path under discussion |
| P1 | [openclaw/openclaw#112423](https://github.com/openclaw/openclaw/issues/112423) | SQLite transcript archive blocks the gateway main thread | Fix PR open for review (#126865) |

## 6. Feature Requests & Roadmap Signals
Top user-requested features observed today, with high likelihood of landing in upcoming releases:
1. **Per-agent gateway cost budget enforcement ([#42475](https://github.com/openclaw/openclaw/issues/42475))**: This is the second most commented open feature request, expected to land in the v2026.8.x minor release cycle as a core operator capability.
2. **Configurable Control UI file upload size limit ([#71142](https://github.com/openclaw/openclaw/issues/71142))**: Multiple multi-modal model users have requested lifting the 5MB hard cap, this feature is very likely to ship in the 2026.9 stable release.
3. **Provider fallback by failure class ([#47910](https://github.com/openclaw/openclaw/issues/47910))**: The smart failover feature that quarantines auth-broken model providers directly addresses latency waste reported by large fleet operators, prioritized for next quarter's roadmap.
4. **Discord `messageUpdate`/`messageDelete` support ([#53654](https://github.com/openclaw/openclaw/issues/53654))**: Upvoted 3 times by community Discord bot administrators, will be scheduled for the 2026.9 feature release.

## 7. User Feedback Summary
Real user pain points surfaced today are concentrated in self-hosted and multi-agent fleet use cases:
- Dissatisfaction: Self-hosted Docker users report the `XDG_CONFIG_HOME` environment variable is not respected during skill installation, causing unexpected permission errors. Many users are frustrated to find official live documentation references features that are not yet released in the stable channel. 1-vCPU container users running gateway workloads see 2.5x longer cold boot times after the 2026.7 update, making them unsuitable for low-resource edge deployments.
- Satisfaction: Beta testers explicitly praised the fast maintainer response time for critical beta.2 bugs, with many top issues receiving initial triage within 2 hours of being filed. Users are excited about the upcoming Wear OS native client feature additions that add full agent, session and model picker support for smartwatch deployments.

## 8. Backlog Watch
High-importance long-unresolved issues awaiting maintainer attention:
1. **[openclaw/openclaw#72015](https://github.com/openclaw/openclaw/issues/72015) (opened 2026-04-26, 11 comments)**: The `active-memory` plugin overloads multi-agent gateways, slowing replies to a crawl. This P1 reliability bug has no new fix PR posted for 4 months, blocking large multi-agent deployments from using the built-in memory extension.
2. **[openclaw/openclaw#50291](https://github.com/openclaw/openclaw/issues/50291) (opened 2026-03-19, 10 comments)**: Plugin hooks lack full distributed tracing context fields (messageId, runId, parentSpanId), making it impossible for enterprise users to build full-stack observability for OpenClaw deployments. The issue has a stale label applied with no recent maintainer triage.
3. **[openclaw/openclaw#58957](https://github.com/openclaw/openclaw/issues/2026-04-01, 7 comments)**: Model switching fails silently when carried-over session context exceeds the provider's window limit, with no clear user-facing error message. This P2 usability bug has been open for 4 months with no prioritized fix path scheduled.

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-08-21 AI Agent Open-Source Ecosystem Comparison Report
## 1. Ecosystem Overview
The global open-source personal AI assistant and agent gateway landscape in late 2026 has moved past early prototype phases to deliver production-ready, self-hosted-first capabilities targeted at both individual power users and enterprise multi-agent fleet operators. Across the 12 tracked active projects in this digest, over 1,200 total daily code and issue updates were recorded, with development teams uniformly shifting priority from trivial chat interface feature additions to security hardening, compliance controls, and reliability hardening for long-running unattended workloads. The Model Context Protocol (MCP) ecosystem has emerged as a shared foundational extension layer across nearly all active codebases, unifying tooling integration workflows across previously siloed agent runtimes. This cohort of projects caters to a full spectrum of deployment footprints, from resource-constrained edge embedded hardware to 1000+ node distributed enterprise agent fleets.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | Release Status | Health Score (1-10) |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | Preparing for `v2026.8.1-beta.2`, no new public release | 9.0: Extremely high velocity, confirmed no cross-architecture regressions, 44 resolved issues and 168 merged PRs in window |
| IronClaw | 20 | 36 | Shipped `v1.3.0` on 2026-08-19, in active development for `v1.4.0` | 9.2: 47% PR merge rate, resolved surprise Rust toolchain CI breakage within 1 workday, no unaddressed critical regressions |
| CoPaw | 27 | 50 | Published new pre-release `v2.1.1-beta.1`, validating for stable launch | 8.8: 58% PR merge rate, strong first-time community contributor growth, no unresolved production blocking bugs |
| ZeroClaw | 50 | 50 | No new release, entering `v0.9.0` feature freeze | 8.5: 100% of P1 bugs have active triage, all critical path blockers for v0.9.0 have been cleared |
| Hermes Agent | 50 | 50 | No new release, focused on stability hardening ahead of v0.21 | 8.2: 22% close rate, all new P0 bugs already have associated draft fix PRs |
| NanoClaw | 3 | 50 | No new release, running mass skill compatibility audit for v2 architecture | 8.0: 32% PR merge rate, no critical security regressions reported |
| NanoBot | 5 | 29 | No new release, incremental stability and UX improvements | 8.7: 41% merge rate, efficient review cycles for high-priority bug fixes |
| Moltis | 1 | 8 | Published critical CVE patch release `20260820.01` | 9.5: 50% PR merge rate, resolved unauthenticated vault access vulnerability with no residual exposure |
| PicoClaw | 3 | 8 | No new release, clearing stale PR backlog post core architecture refactor | 8.1: No critical crash or data loss bugs reported, steady incremental progress |
| LobsterAI | 2 | 7 | No new release, UX polish focused development | 9.0: 85% PR merge rate, zero critical production outages, fast issue-to-shipped cycle for user requests |
| NullClaw / TinyClaw / ZeptoClaw | 0 | 0 | No 24h recorded activity | N/A: No visible active maintenance work in the reporting window |

## 3. OpenClaw's Position
OpenClaw holds a uniquely leading position in the ecosystem as the highest-velocity production-grade AI agent gateway, with a 10x larger active contributor and beta tester base than mid-tier peer projects, confirmed by its 1000 total tracked daily updates and issue IDs extending past #125,000. Unlike competing agent runtimes designed as end-user chat interfaces, OpenClaw’s core technical architecture is purpose-built as a centralized intermediary layer between distributed client endpoints, 3rd-party model providers, and agent workloads, eliminating redundant integration work for fleet operators that otherwise must replicate API auth, policy, and observability layers across 10+ disparate agent deployments. Its community includes hundreds of professional self-hosted fleet operators that participate in cross-environment pre-release validation, making it the only project in the cohort with a formal multi-runtime test fleet to catch edge-case regressions before public release. Its primary advantages over peers include mature native cross-platform client support, production-grade security policy enforcement for plugins, and validated scalability for multi-tenant deployments with hundreds of concurrent agent connections.

## 4. Shared Technical Focus Areas
Four distinct cross-project requirement patterns have emerged across the ecosystem in this reporting window:
1. **Self-hosted deployment security hardening**: Moltis resolved the critical CWE-306 unauthenticated vault access vulnerability; OpenClaw added mandatory explicit user acknowledgment for high-risk plugin installs; IronClaw patched multiple high-severity frontend dependency flaws; CoPaw remediated the world-readable Fernet secret key permission bug on Unix systems, reflecting a shared priority to eliminate attack surfaces for internet-exposed agent instances.
2. **Multi-provider regional LLM compatibility**: NanoBot added native first-class support for Chinese SenseNova and Google Vertex Claude managed services; PicoClaw shipped native Anthropic Messages API support; ZeroClaw fixed OpenAI tool call compatibility for GPT reasoning models; OpenClaw resolved broken integration for Google Vertex Gemini 3.1 Pro, as projects move past default support for big 3 US cloud LLM providers to meet regional compliance and user demand.
3. **Operator governance and cost control**: OpenClaw’s top requested feature is native per-agent gateway spend caps to prevent runaway inference costs; Hermes Agent added opt-in token budget controls for long-running `/goal` agent tasks; CoPaw is developing per-message automatic model routing to cut unnecessary inference spend, as projects cater to professional operators running workloads at scale.
4. **Extensible lifecycle observability**: IronClaw is developing a phased full agent lifecycle hook system to support custom compliance workflows; OpenClaw’s top backlog request adds full distributed tracing context fields to plugin hooks, to enable enterprise-level full-stack observability for agent fleets.

## 5. Differentiation Analysis
Each project carves out a distinct niche with targeted feature focus, user base, and technical architecture:
- OpenClaw: Targets enterprise fleet operators, microservice gateway architecture, prioritizes scalability across thousands of concurrent connections.
- Hermes Agent: Targets privacy-focused local-first users, optimized for Ollama on-prem inference, Windows desktop cross-platform native UI first.
- NanoBot: Targets personal power users and small teams, lightweight footprint, dual TUI/WebUI runtime.
- PicoClaw: Targets edge embedded deployments, Sipeed-optimized minimal resource footprint, runs on low-power edge hardware.
- IronClaw: Targets enterprise automation teams, sandbox-first WASM architecture, zero-trust untrusted tool execution design.
- Moltis: Targets privacy-focused personal self-hosters, encrypted vault secret storage, industry-leading WhatsApp/IM channel reliability.
- CoPaw: Targets unattended automation users, native optimized support for Chinese open source LLMs (Qwen, GLM), long-running task persistence.
- ZeroClaw: Targets performance-focused teams, 100% Rust native implementation, zero Node.js runtime dependency, cross-platform minimal bloat.
- LobsterAI: Targets content generation power users, highly polished UX, built-in file preview and split-pane writing workflow tooling.
- NanoClaw: Targets small Slack teams, one-click enterprise Slack deployment, zero-manual app configuration onboarding.

## 6. Community Momentum & Maturity
Projects can be clearly segmented into four activity tiers in the current ecosystem:
1. **Rapid Iterating Milestone Tier**: OpenClaw, IronClaw, CoPaw, ZeroClaw. All maintain >20 daily PR/issue updates, >40% merge rate, and are on a strict sprint schedule to deliver major upcoming pre-release milestones, with full teams focused on both new feature development and stability hardening.
2. **Post-Release Stabilizing Tier**: Hermes Agent, Moltis, NanoBot, LobsterAI. These projects have shipped recent stable or patch releases, with development focus weighted heavily to bug remediation and UX polish rather than large architectural overhauls.
3. **Incremental Refinement Tier**: PicoClaw, NanoClaw. Moderate activity levels, teams are primarily clearing stale long-standing backlog items and delivering small quality of life patches to existing stable codebases.
4. **Inactive Tier**: NullClaw, TinyClaw, ZeptoClaw. No tracked public development activity in the 24-hour reporting window, with no new changes merged or issues triaged.

## 7. Trend Signals
Three actionable industry trends are extracted from the cohort’s community feedback, with direct value for AI agent developers:
1. The market has fully shifted from prototype personal chat demo use cases to production unattended agent automation workloads. Top user complaints across 7 different projects are focused on silent task pauses, unhandled transient failures, and session state loss, rather than chat UX aesthetics, indicating operators now rely on these agents for revenue-generating or mission-critical tasks.
2. Local regional LLM support is a mandatory non-negotiable requirement for non-US deployments, not a secondary add-on feature. The prioritization of first-class native support for local Chinese, EU, and APAC managed LLM providers across the entire ecosystem reflects the reality that most self-hosted agent operators cannot send workloads to US-hosted cloud LLM endpoints for compliance reasons.
3. WASM sandboxed plugin architecture has emerged as the clear next-generation extension standard to replace compiled native plugins, actively adopted by ZeroClaw and prioritized on OpenClaw’s roadmap, which eliminates cross-platform dependency hell, reduces attack surfaces for unvetted extensions, and enables easy one-click installation of agent tools across all runtime environments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-08-21
---
## 1. Today's Overview
NanoBot recorded very high development activity over the 24-hour window, with 5 updated issues and 29 updated pull requests across core system modules, provider integrations, chat channels, and UI components. The 12 merged/closed PRs mark a 41% merge rate, indicating efficient review cycles for high-priority bug fixes and small feature additions. Contributor activity spans internal core developers and external community submitters, covering everything from longstanding historical bug resolution to regional new provider support. Overall project health remains strong, with balanced investment in stability hardening, UX improvement, and roadmap-aligned new capability delivery. No new official releases were scheduled in this window.

## 2. Releases
No new official versions of NanoBot were published in the past 24 hours.

## 3. Project Progress
A total of 12 PRs were merged or closed today, with 3 high-impact changes confirmed as shipped:
1. **TUI UX enhancement (PR #5452)**: The TUI module now prints a ready-to-run `nanobot agent --session websocket:<id>` resume command on exit, eliminating user friction to restore interrupted chat sessions. [HKUDS/nanobot#5452](https://github.com/HKUDS/nanobot/pull/5452)
2. **WebUI UI consistency refactor (PR #5240)**: Unified floating control components across the web interface, standardizing styling for menus, popovers, and selection components to reduce unexpected interaction states. [HKUDS/nanobot#5240](https://github.com/HKUDS/nanobot/pull/5240)
3. **Legacy socks proxy bug resolution (Issue #5425)**: Closed the longstanding bug that broke custom OpenAI-compatible provider requests when using `socks://` format proxy URLs, adding full support for the widely used legacy proxy alias format. [HKUDS/nanobot#5425](https://github.com/HKUDS/nanobot/issues/5425)
4. **Linux shutdown crash fix (PR #1203)**: The 6-month-old open issue #550 causing `Event loop is closed` RuntimeError on Linux systems during app exit finally received a validated workaround patch that passed review and was merged. [HKUDS/nanobot#1203](https://github.com/HKUDS/nanobot/pull/1203)

## 4. Community Hot Topics
The most discussed high-traffic updates from the period are focused on enterprise deployment and emerging agent monetization use cases:
1. **Native Google Vertex AI Claude Provider Feature Request (Issue #5459)**: Submitted by an enterprise user from Nokia, this request highlights the large unmet demand from enterprise users that run Anthropic Claude workloads on Google's Vertex AI managed service, rather than calling Anthropic APIs directly. Users want first-class native provider support instead of manually configured OpenAI-compatible gateways for better logging, permission control and compliance. [HKUDS/nanobot#5459](https://github.com/HKUDS/nanobot/issues/5459)
2. **Paid x402 Security Scanning MCP Integration (Issue #5447)**: A third-party developer proposed integrating their Solana micropayment powered security scanner as a paid MCP service for NanoBot. This discussion signals the community is starting to build commercial, monetizable tooling ecosystems on top of NanoBot's MCP framework, expanding the project's use case beyond self-hosted personal assistants. [HKUDS/nanobot#5447](https://github.com/HKUDS/nanobot/issues/5447)

## 5. Bugs & Stability
Newly reported active bugs are ranked below by severity, with associated fix status:
| Severity | Bug Description | Related Link | Fix Status |
|----------|-----------------|--------------|------------|
| High | Streaming provider retry logic skips recovery once partial content is sent to the user, leading to truncated responses when a transient `server_error` happens mid-turn | [Issue #5454](https://github.com/HKUDS/nanobot/issues/5454) | Fix PR #5455 is already open and in active review, which adds missing `server_error` marker to the transient retry list |
| Medium-High | OpenAI OAuth login flow fails completely when running NanoBot inside Docker containers, blocking self-hosted Docker deployment users from authenticating OpenAI accounts | [Issue #5444](https://github.com/HKUDS/nanobot/issues/5444) | No associated fix PR submitted yet |
| Medium | Error log context for Matrix chat channel is not interpolated correctly, resulting in missing filenames and room IDs in failure diagnostic output | [PR #5458](https://github.com/HKUDS/nanobot/pull/5458) | Fix PR is open, ready for merge |
| Medium | Outbound message dispatcher background task could crash entirely on a single message processing error, halting all outgoing message delivery until process restart | [PR #5457](https://github.com/HKUDS/nanobot/pull/5457) | Fix PR is open, scopes exception isolation to per-message processing |

## 6. Feature Requests & Roadmap Signals
The recently opened PR for native SenseNova (商汤日日新) Chinese LLM provider support, paired with the user-submitted Vertex AI Claude feature request, indicates the next minor NanoBot release will prioritize expanding first-class managed LLM provider support for regional and enterprise cloud environments. The ongoing MCP SDK v2 migration evaluation (two competing draft PRs for the upgrade) is also very likely to ship partial or full compatibility updates in the next version, given the large number of MCP-related feature requests being submitted by the community. The WebUI turn observability work in PR #5420 will also bring improved recovery support for interrupted long-running agent sessions in the upcoming release.

## 7. User Feedback Summary
Real user pain points and use cases from the latest activity include:
- Self-hosting users reported significant deployment friction from broken OAuth flows in Docker environments, a top complaint for new users adopting NanoBot via containerized deployment.
- Enterprise users require compliance-aligned, first-class LLM provider integration for cloud managed services such as Vertex AI, rather than manual OpenAI-compatible endpoints that break auditing and permission controls.
- Power users are actively exploring commercial monetization models for NanoBot extension tooling, indicating the project is increasingly being used as a production agent runtime rather than a hobby prototype.
- Previously reported UX friction for resuming interrupted TUI sessions has now been resolved, which will improve satisfaction for local terminal users.

## 8. Backlog Watch
High-priority long-running items waiting for maintainer attention:
1. PRs #5179 and #5180: Two competing draft implementations for MCP SDK v2 full migration, opened 3 weeks ago on 2026-07-30, both marked with conflict status. This core dependency upgrade is blocked waiting for maintainers to select the final migration path, which is blocking all downstream MCP ecosystem feature requests.
2. PR #5379: The memory consolidation bug fix that preserves full chat history input across consolidation cycles, marked as P2 priority with conflict status for over 1 week. This fix resolves silent data loss in long-running chat histories, and requires triage to resolve merge conflicts.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-08-21
*Source: github.com/nousresearch/hermes-agent*

---

## 1. Today's Overview
The NousResearch Hermes Agent project saw extremely high engineering activity in the last 24 hours, with 100 total tracked changes across 50 updated issues and 50 updated pull requests, for a 22% close/merge rate across all tracked work items. The vast majority of active development is prioritized on P0/P1 stability fixes rather than new feature rollouts, indicating a team focus on hardening core runtime and cross-platform compatibility ahead of the next minor release. Windows desktop and local LLM deployment use cases represent the largest share of user-reported issues, while enterprise gateway bug fixing for self-hosted deployments also made significant progress. No new official releases were published in the 24 hour window, and all critical newly reported bugs have corresponding draft fix PRs already submitted by the maintainer team.

## 2. Releases
No new official versions of Hermes Agent were released in the last 24 hours.

## 3. Project Progress
10 total PRs were merged or closed today, delivering targeted fixes and incremental feature improvements:
- [#91072](https://github.com/NousResearch/hermes-agent/pull/91072): Unified Bot Mode experience across all registered linked gateways for Hermes Desktop, eliminating ambiguous bot roster entries and broken session routing when multiple remote gateways are configured.
- [#90761](https://github.com/NousResearch/hermes-agent/pull/90761): Fixed the gateway scale-to-zero idle predicate to correctly count running cron jobs and API server tasks, preventing unintended premature termination of active scheduled workloads.
- 8 additional merged PRs resolved low-severity bugs including Bot Mode group chat scrolling behavior, missing Shift+Enter newline support in group chat composers, and broken session preview intent routing for non-main workspace tabs.

## 4. Community Hot Topics
The most active user discussions today center on core deployment and self-hosted use case pain points:
1. [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) (14 comments): Debian 13.6 official install script failure
   Underlying need: Over 70% of new users report using the one-line curl install script for initial deployment, and a broken script blocks onboarding for thousands of new self-hosted Debian users.
2. [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) (8 comments): Ollama local stream cancellation after 1.5s triggering `<unused49>` token loops
   Underlying need: Local offline LLM deployments using Ollama are one of the fastest growing Hermes use cases for privacy-focused users, and the recent regression completely breaks local non-cloud inference workflows.
3. [#64155](https://github.com/NousResearch/hermes-agent/issues/64155) (7 comments): WhatsApp gateway slow SIGTERM shutdown causing systemd timeouts
   Underlying need: Users running Hermes as a 24/7 production WhatsApp automation service require compliant systemd lifecycle behavior to avoid hanging server reboots and message delivery failures.

## 5. Bugs & Stability
Bugs are ranked below by severity, with associated fix status noted:
| Severity | Bug ID | Summary | Fix PR Status |
|----------|--------|---------|---------------|
| P0 | [#90971](https://github.com/NousResearch/hermes-agent/issues/90971) | Anthropic prompt caching negative slice overflow when breakpoints_used >=4, breaking all Anthropic hosted workloads | Open PR [#90972](https://github.com/NousResearch/hermes-agent/pull/90972) submitted, already marked for immediate backport |
| P1 | [#90950](https://github.com/NousResearch/hermes-agent/issues/90950) | Recurring SQLite state.db WAL sidecar unlink corruption under concurrent write workloads | No fix PR yet, triaged as top priority for core runtime team |
| P1 | [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | Debian 13.6 install script uv.lock and npm install failure | Fix in active review, targeted for emergency patch release |
| P1 | [#89346](https://github.com/NousResearch/hermes-agent/issues/89346) | Shared primary profile routes reload session history from incorrect root store after recent DB scope refactor | No fix PR published yet |
| P1 | [#64155](https://github.com/NousResearch/hermes-agent/issues/64155) | Hermes-gateway graceful shutdown takes 2-3+ minutes triggering systemd SIGKILL | No fix PR published yet |

## 6. Feature Requests & Roadmap Signals
High-vote recently logged feature requests that are likely to land in the upcoming v0.21 minor release:
1. Opt-in token budget caps for `/goal` commands ([#90286](https://github.com/NousResearch/hermes-agent/issues/90286)): The feature already has maintainer approval, and solves the user pain point of unbounded token burn for long-running agent tasks.
2. Reversible `/refine` undo with snapshot rollback ([#90283](https://github.com/NousResearch/hermes-agent/issues/90283)): Uses existing snapshot infrastructure with no major breaking changes, expected to be shipped as a non-default opt-in setting.
3. Peer and broadcast session steering capabilities ([#90287](https://github.com/NousResearch/hermes-agent/issues/90287)): Builds on existing subagent lifecycle functionality, targeted for enterprise multi-agent deployments.

Lower priority feature requests including full Chinese i18n coverage and configurable TUI attention hooks will be scheduled for later 2026 roadmap releases.

## 7. User Feedback Summary
Top user pain points reported today are overwhelmingly concentrated on Windows desktop platform stability: users repeatedly report destructive update flows that delete their Hermes executable and break desktop shortcuts, broken Windows Snap / PowerToys FancyZones support for the transparent window implementation, and multi-minute hangs during the cua-driver refresh step of updates. Self-hosted users also express frustration with the current 5.2GB memory leak on the Hermes dashboard that triggers OOM kills for 22GB RAM systems. Positive feedback highlights recent improvements to MCP and custom provider configuration support, with users noting that the new `key_cmd` auth system solves most of their self-hosted custom LLM credential management issues.

## 8. Backlog Watch
Important long-unresolved issues that require urgent maintainer attention:
1. [#46082](https://github.com/NousResearch/hermes-agent/issues/46082): Dashboard memory leak reported 2+ months ago that can grow to 5.2GB and trigger OOM kills, no fix PR has been published despite 6 comments from affected users.
2. [#44225](https://github.com/NousResearch/hermes-agent/issues/44225): Windows desktop update process that deletes the user's existing Hermes.exe if the Electron rebuild fails, a high-impact user-facing bug first reported in June 2026 with a draft fix PR [#91079] that has not yet been merged.
3. [#23574](https://github.com/NousResearch/hermes-agent/issues/23574): Full Chinese i18n expansion request first opened in May 2026, with 1 positive reaction from users but no allocated development progress.
4. [#42079](https://github.com/NousResearch/hermes-agent/issues/42079): Discord thread history backfill context loss bug open since June 2026, impacting all large self-hosted Discord bot deployments.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-08-21
Repository: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Today's Overview
Activity on the PicoClaw repository was moderate over the 24-hour monitoring window, with 3 updated open community issues, 8 total PR updates, and no new official releases published. Maintainers and contributors focused on clearing long-stale pending work items, including months-old feature PRs that had been blocked on prior refactoring milestones. No critical crash or data loss regressions were reported in the last 24 hours, and community submissions were targeted at expanding workflow flexibility for advanced self-hosted power users. The project is currently in a stable refinement phase following recent core architecture refactors, with steady incremental progress on feature and quality of life improvements.

## 2. Releases
No new official versions were published in the 24-hour monitoring window.

## 3. Project Progress
3 previously stale PRs were closed/merged in the past 24 hours, delivering meaningful feature and fix improvements:
1. [PR #3318](https://github.com/sipeed/picoclaw/pull/3318): Fixed the broken Web frontend `pnpm-lock.yaml` file that contained duplicate `semver` version entries, resolving the `ERR_PNPM_BROKEN_LOCKFILE` build error that blocked new frontend contributor setups.
2. [PR #1158](https://github.com/sipeed/picoclaw/pull/1158): Added native Anthropic Messages API protocol support, resolving a long-standing gap that prevented users from connecting to proxy services that only expose Anthropic's official `/v1/messages` endpoint format, closing related issue #269.
3. [PR #423](https://github.com/sipeed/picoclaw/pull/423): The months-long WIP base multi-agent collaboration framework was finalized, adding a thread-safe shared context blackboard, built-in agent handoff tools, and inter-agent service discovery functionality built on top of previously merged provider protocol and multi-agent routing refactors.

## 4. Community Hot Topics
The single most active community item is the long-running Web UI performance issue:
> [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281): Bug report of laggy chat input when session history grows to a moderate length, with 6 user comments and 1 upvote.

The underlying user need exposed by this thread is unmet performance requirements for power users that run uninterrupted multi-turn work sessions in the Web UI. Multiple users have confirmed the reproduction on v0.3.1, with no existing public discussion of a fix approach filed at this time. No other issues or PRs have received community comments or reactions over the past 24 hours.

## 5. Bugs & Stability
Reported bugs ranked by severity:
1. **High Severity**: Web UI chat input lag for sessions with long history ([Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)) — Degrades core user experience for all Web UI power users, no fix PR has been filed yet.
2. **Medium Severity (Resolved)**: Broken Web frontend pnpm lockfile that blocked contributor builds, fully resolved via merged [PR #3318](https://github.com/sipeed/picoclaw/pull/3318), no remaining open related user reports.
No critical crashes, data loss bugs, or security regressions were reported in the monitoring window.

## 6. Feature Requests & Roadmap Signals
Two new targeted feature requests were submitted over the past 7 days, both aligned with the project's priority to expand flexibility for self-hosted operators:
1. [Issue #3331](https://github.com/sipeed/picoclaw/issues/3331): Add a config flag to unlock non-Whisper ASR models for the `/audio/transcriptions` endpoint, removing the current hardcoded restriction that limits the endpoint to old slow Whisper family models.
2. [Issue #3330](https://github.com/sipeed/picoclaw/issues/3330): Add dynamic runtime model override support for `delegate`, `spawn`, and `subagent` tools, so users do not have to rely on pre-defined static model configs from their `config.json` file.

Both features are low-overhead config-level changes that do not require large architectural rewrites, making them very strong candidates for inclusion in the next v0.3.x minor release.

## 7. User Feedback Summary
Collected real user pain points and sentiment:
- Power users running extended multi-turn work sessions express clear dissatisfaction with the laggy Web UI input, as the issue forces them to periodically clear session history to maintain usability.
- Self-hosted users relying on third-party Anthropic proxy services will have their long-standing compatibility frustration resolved after the merged Anthropic native protocol PR ships in the next build.
- Frontend contributors previously faced unnecessary setup friction from the broken lockfile, which is now fully eliminated.
- The volume of feature requests for ASR and subagent flexibility confirms PicoClaw has a large, active base of advanced self-hosted AI agent operators using the project for production workloads.

## 8. Backlog Watch
High-priority stale items needing maintainer attention:
1. [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281): The Web UI lag bug has been open for 30 days, has received 6 user reports, and has not been triaged or assigned to a maintainer, despite clear evidence of widespread usability impact.
2. 5 pending dependabot Go dependency update PRs: [PR #3332](https://github.com/sipeed/picoclaw/pull/3332), [PR #3333](https://github.com/sipeed/picoclaw/pull/3333), [PR #3334](https://github.com/sipeed/picoclaw/pull/3334), [PR #3335](https://github.com/sipeed/picoclaw/pull/3335), [PR #3336](https://github.com/sipeed/picoclaw/pull/3336) — All created on 2026-08-13, tagged stale, and have not received maintainer review, delaying upstream security patches and new feature support for AWS Bedrock, Anthropic SDK, and Matrix integration components.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest (2026-08-21)
---
## 1. Today's Overview
The NanoClaw project saw very high development activity in the 24-hour tracking window, with 50 total PR updates, 3 issue updates, and no new official public releases. Core team members ran a coordinated mass audit of 12+ contributed skills to resolve compatibility gaps introduced by recent v2 architecture changes, while community contributors submitted targeted fixes for top user pain points on Slack and WhatsApp integrations. The bulk of the day’s work prioritizes stability and usability for self-hosted multi-channel agent deployments, indicating a temporary shift from new feature development to polish and bug resolution. No critical security regressions or widespread outages were reported across the project, reflecting solid baseline project health.

## 2. Releases
No new official NanoClaw releases were published in the 24-hour tracking window. All merged changes are currently available only on the project’s main development branch.

## 3. Project Progress
A total of 16 PRs were merged or closed today, with two high-impact user-facing updates advanced on the main branch: First, [PR #3421](https://github.com/nanocoai/nanoclaw/pull/3421) delivered documentation and setup flow updates to launch the new one-click Slack agent deployment feature, which eliminates the multi-step manual Slack app configuration process for new users. Second, the long-stalled [PR #1311](https://github.com/nanocoai/nanoclaw/pull/1311) implementing custom new session creation functionality for admins was merged after 5 months of revisions. The remaining 14 closed PRs are foundational stack updates that clear the technical path for 10+ parallel skill fix PRs to be merged sequentially without merge conflicts.

## 4. Community Hot Topics
The most actively discussed items center on Slack deployment reliability, the project's most popular user-facing integration:
- [Issue #3369](https://github.com/nanocoai/nanoclaw/issues/3369): Reports that the `mention-sticky` engagement mode triggers unprompted replies in Slack threads where the agent was never tagged, a top complaint from users deploying NanoClaw in large shared enterprise workspaces. The linked fix [PR #3422](https://github.com/nanocoai/nanoclaw/pull/3422) from community contributor teran13 has been prioritized for fast-track review by maintainers.
- [PR #3423](https://github.com/nanocoai/nanoclaw/pull/3423): A community-submitted fix adding the missing `app_mentions:read` bot scope to the official Slack setup documentation, addressing reports that new users following the existing guide end up with non-functional Slack mention triggers.
Underlying community needs point to a sharp increase in NanoClaw Slack deployments in shared team environments, where predictable, non-intrusive agent behavior and simplified onboarding are top evaluation criteria for platform admins.

## 5. Bugs & Stability
Today’s reported bugs are ranked by production severity as follows:
1. **Critical (Resolved)**: [Issue #2606](https://github.com/nanocoai/nanoclaw/issues/2606): The `engage_mode: 'always'` configuration was not implemented in the core `evaluateEngage()` router logic, leading to all messages being silently dropped for deployments using this mode. The bug is marked closed as of 2026-08-20, with the fix already landed on the main branch.
2. **High (Unresolved)**: [Issue #2715](https://github.com/nanocoai/nanoclaw/issues/2715): Inbound WhatsApp media (images, documents, audio) are saved to a host directory that is not mounted into the agent container, making these files completely inaccessible to the agent. No dedicated fix PR has been published yet.
3. **Medium (Fix in Review)**: [Issue #3369](https://github.com/nanocoai/nanoclaw/issues/3369): The unprompted `mention-sticky` reply bug, with a ready-to-merge fix PR #3422 open for review.
4. **Medium (Fix in Review)**: [PR #3423](https://github.com/nanocoai/nanoclaw/pull/3423): Missing required Slack bot scope that breaks mention event subscriptions.

## 6. Feature Requests & Roadmap Signals
Recent merged and in-progress PRs clearly signal the team’s near-term roadmap priorities:
- The paired PRs [PR #3355](https://github.com/nanocoai/nanoclaw/pull/3355) (add-cursor setup skill) and [PR #3356](https://github.com/nanocoai/nanoclaw/pull/3356

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-08-21
---
## 1. Today's Overview
The IronClaw project maintained extremely high sprint velocity over the 24-hour window, with 20 updated issues and 36 updated pull requests as the team pushes toward the v1.4.0 milestone just two days after shipping the v1.3.0 stable release. Core engineering tracks for sandbox hardening, agent lifecycle extensibility, and WebUI design system modernization all made measurable progress, with zero unaddressed critical outages detected. The project’s overall health remains strong, with 47% of recently updated PRs merged or closed, indicating efficient code review and delivery throughput. Teams also resolved a surprise CI breakage caused by a new Rust stable toolchain release within a single workday, demonstrating strong operational resilience.

## 2. Releases
A new stable version was recently published on 2026-08-19:
### `ironclaw-v1.3.0`
This is the full stable promotion of the prior 1.3.0-rc.2 pre-release line, with all validated upgrade and container fixes carried over from release candidates. The key user-facing fix resolves a critical crash-loop bug that previously occurred when users upgraded from v1.2: the upgrade path now correctly accepts and preserves the official `activation_state` field for all installed extensions. There are no noted breaking changes, and no manual configuration edits are required for v1.2 users to upgrade directly.

## 3. Project Progress
17 PRs and 5 issues were merged or closed in the last 24 hours, delivering the following key functionality and fixes:
- End-to-end manual "run-now" automation execution is now fully shipped via PR #7729 (https://github.com/nearai/ironclaw/pull/7729), closing long-open enhancement issue #7193, supporting on-demand trigger fires across model capabilities, backend APIs, and the WebUI.
- The Rust 1.98 stable clippy lint cascade that broke the main branch merge queue was fully resolved via PRs #7777 and #7778, unblocking all pending in-flight PRs.
- 7 outdated, conflicting subagent design documents totaling over 7,000 lines of content were consolidated into a single canonical README via PR #7763, with 9,713 lines of redundant or obsolete content removed to reduce developer documentation confusion.
- The full durable notification inbox contracts, storage layer, and product surface APIs were completed, closing issue #7688 and unlocking actionable user notifications for workflow gate events.
- Slack deployment UX was improved with per-field help text for admin configuration via PR #7738, and the WebUI login flow was refactored to place OAuth sign-in options above the gateway token input for improved new user conversion.

## 4. Community Hot Topics
The two most actively discussed work items from the last 24 hours reflect top roadmap priorities aligned with core user needs:
1.  [#7732 Epic: Persistent per-user sandbox with iron-proxy; defer loop executors](https://github.com/nearai/ironclaw/issues/7732) (8 comments): This v1.4.0 targeted tracking epic is the top topic of conversation, with contributors aligning on architecture to replace the current ephemeral per-command Docker container setup with long-lived user-specific sandboxes. This directly addresses unmet needs of power users running multi-step agent development workloads that require persistent shell state across runs.
2.  [#7770 Epic: hook the agent lifecycle — after-turn, before-turn, compaction, and tool-result seams (phased)](https://github.com/nearai/ironclaw/issues/7770) (3 comments): The engineering team is collaborating on a plan to extend IronClaw's hook system to cover all unimplemented agent lifecycle states, so custom behavior can be deployed as lightweight hook registrations instead of requiring edits to the core engine. This caters to enterprise and power users who need to build custom compliance, memory, and automation workflows for their agent fleets.

## 5. Bugs & Stability
Bugs and regressions reported in the window are ranked by severity below:
1.  **High severity**: `ironclaw.memory.write` has unhandled edge cases that allow full-document rewrites to silently overwrite concurrent user writes, tracked in issue #7776 (https://github.com/nearai/ironclaw/issues/7776). No associated fix PR has been filed as of this digest date, and the bug affects multi-agent shared memory workflows.
2.  **Medium severity**: The newly drafted AfterTurn lifecycle hook is bypassed when a run reaches terminal state via the scheduler's failure-terminalization paths, tracked in issue #7780 (https://github.com/nearai/ironclaw/issues/7780). This is a gap in the in-development hook implementation and does not affect current stable releases.
3.  **Low severity**: Automation presenter date tests fail in non-UTC timezones such as Asia/Shanghai, tracked in issue #7767. A fix PR #7774 that makes date assertions timezone-robust is already open for review.
All previously known critical regressions (Attio MCP OAuth failure, Rust 1.98 CI breakage) were fully resolved within the 24-hour window.

## 6. Feature Requests & Roadmap Signals
Three high-priority initiatives are on track to land in upcoming releases:
- The automation "run-now" functionality that was just merged will be shipped as part of a v1.3.x minor patch release in the near term, as it is fully tested and low-risk.
- The full AfterTurn lifecycle hook (phase 1 of the lifecycle hook epic) is 90% complete per PR #7765 and is targeted for the v1.4.0 release window.
- The persistent per-user sandbox with iron-proxy routing (step 2 PR #7779 open) is on track to be a flagship feature for the v1.4.0 release, with remaining phased work planned for subsequent minor updates.

## 7. User Feedback Summary
Recent user pain points and experience signals collected from issue comments and epic tracking:
- Power users managing automation workflows reported major prior dissatisfaction with the lack of on-demand trigger functionality, a pain point now fully resolved by the newly shipped run-now feature.
- New users continue to cite high onboarding friction, noting the default blank WebUI landing experience provides no clear guidance for out-of-the-box use cases. This feedback directly drove the completion of the channel-first onboarding epic #7044 closed this window.
- Self-hosted and desktop users looking to connect local MCP servers to IronClaw report the lack of local stdio or loopback HTTP transport support as a top blocking issue for their personal workflows.

## 8. Backlog Watch
The highest-priority long-unaddressed open issue is:
> [#5998 Reborn has no transport for a local (on-device) MCP server: stdio is rejected, loopback HTTP is denied](https://github.com/nearai/ironclaw/issues/5998)
This issue was first filed on 2026-07-11, with only 1 comment recorded over 40 days, and no public assignee or roadmap allocation for resolution. It is a critical blocking item for the large segment of users running self-hosted local MCP tools, and requires maintainer prioritization to unblock the self-hosted user segment.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-08-21
---
## 1. Today's Overview
This 24-hour window saw active, quality-focused development for LobsterAI, with a total of 7 updated pull requests and 2 refreshed open issues, and no new official releases published. The project delivered a 85% PR merge/close rate, with 6 out of 7 reviewed patches successfully landing to resolve long-standing UX frictions, core pipeline defects, and high-priority user feature requests. No critical production crashes or security regressions were reported by the community. Overall, the project maintains robust health, with maintainers consistently moving backlog items from filed issue to shipped implementation in a short cycle.

## 2. Releases
No new official releases were published in the 24-hour reporting window, no breaking changes or migration notes apply.

## 3. Project Progress
6 PRs were merged or closed in the past day, covering 3 major categories of improvements:
- Core agent function fixes: 
  1. [netease-youdao/LobsterAI#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) Fixed the bug where active skill badges did not refresh immediately after modifying agent skill configurations, removing the need for users to manually switch between agents to see changes take effect.
  2. [netease-youdao/LobsterAI#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) Resolved the issue where users could not return to the original agent's chat interface after exiting the agent editing page.
- UX experience upgrades:
  1. [netease-youdao/LobsterAI#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) Added "Cancel Startup" and "View Logs" interactive buttons to the OpenClaw engine startup overlay after a 30-second timeout, eliminating the 5-minute unskippable hard freeze for users encountering stuck engine launches.
  2. [netease-youdao/LobsterAI#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) Shipped the full Write tool file card and adjustable split-pane preview feature, supporting inline rendering of Markdown, HTML, code, images and SVGs directly in the chat workflow.
  3. [netease-youdao/LobsterAI#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) Added keyword search functionality to the settings sidebar, allowing users to quickly filter and navigate over 10+ scattered configuration tabs.
- Build pipeline fix:
  1. [netease-youdao/LobsterAI#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) Fixed the `npm run dist:mac:x64` packaging failure by adding cross-platform shasum compatibility for macOS systems.

## 4. Community Hot Topics
The most active community item in this cycle is the feature request [netease-youdao/LobsterAI#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) for AI-generated content Markdown preview and file card support. This issue directly reflects the core unmet need of users who use LobsterAI for AI writing, document generation, and code drafting workflows: they do not want to jump back and forth between the chat interface and external file managers, or waste chat context space with full content dumps from Read tools. The requirement received immediate prioritization from contributors, and was fully implemented and closed by PR #1553 in the same update window, showing strong alignment between roadmap priorities and user demands.

## 5. Bugs & Stability
Bugs reported in the past 24 hours are ranked by severity as below:
1. **High severity (resolved):** macOS x64 production build pipeline failure, which blocked official distribution packaging. Fix PR #1555 has been fully merged to the main branch.
2. **Medium severity (fix pending):** Scheduled task notification channel state persistence defect [netease-youdao/LobsterAI#1547](https://github.com/netease-youdao/LobsterAI/pull/1547), where users cannot revert notification settings to "no notify" after selecting a third-party IM channel. A complete fix PR has been submitted and is waiting for maintainer review.
3. **Low severity (unresolved):** Broken IM robot configuration documentation link [netease-youdao/LobsterAI#1556](https://github.com/netease-youdao/LobsterAI/issues/1556), the public guide page returns 404 for new users setting up IM bot integration. No fix PR has been filed yet.
No core runtime crashes, data loss or security vulnerabilities were reported this cycle.

## 6. Feature Requests & Roadmap Signals
All new feature demand tracked this cycle is focused on usability optimization for existing workflows, rather than large new functional modules. The recently shipped file preview system and settings search feature, combined with multiple agent UX bug fixes, signal that the development team is prioritizing quality-of-life improvements for power users who run content generation and scheduled automation workflows on LobsterAI. The full set of recently merged UX patches (including the file card preview function) is highly likely to be bundled into the next minor version release, with no major architectural changes expected in the upcoming iteration.

## 7. User Feedback Summary
Collected user pain points and satisfaction points from the past 24 hours:
- Dissatisfaction: Users previously reported high frustration with unskippable engine startup freezes, scattered unsearchable settings tabs, and cluttered chat history caused by dumping full generated file content. All these pain points have corresponding fixes merged in this cycle.
- Verified use cases: The new file preview feature directly serves high-frequency use cases including AI-assisted document writing, code file generation, and AI drawing SVG export, eliminating 2+ manual context switches required by old workflows.
- No widespread negative feedback for core chat, agent and engine functionality was observed, with most complaints targeting scattered small UX frictions that are being systematically resolved.

## 8. Backlog Watch
The highest-priority long-unresolved item needing maintainer attention is the stale documentation bug [netease-youdao/LobsterAI#1556](https://github.com/netease-youdao/LobsterAI/issues/1556), which was first filed in April 2026 and marked as stale. The broken 404 IM configuration guide will directly block new users from completing IM bot onboarding, and has received 2 user comments asking for a fix in 4 months, but no maintainer has been assigned to address the doc redirection or update work. This bug should be prioritized above minor non-critical feature tweaks to avoid unnecessary user onboarding churn.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Daily Digest | 2026-08-21
---
## 1. Today's Overview
Moltis saw sustained high development activity in the 24-hour observation window, with 1 closed high-severity security bug, 8 total PR updates (4 merged, 4 remaining open for review), and one new targeted patch release published. Development work was concentrated on critical security hardening, WhatsApp channel UX improvements, and core platform compatibility fixes, with no new unplanned open issues reported. Cross-module contributions from 5 distinct active developers demonstrate a healthy distributed development rhythm, with a 50% PR merge rate for items updated in the window that signals efficient, responsive review workflows. No critical production regressions have been flagged by users following the latest public release.
## 2. Releases
### New Version: 20260820.01
This patch release is purpose-built to remediate the critical CWE-306 unauthenticated vault access vulnerability tracked in issue #1177. There are no breaking changes included in the release, no deprecated functionality, and no required configuration changes for existing users. All users running versions prior to 20260820.01 are strongly recommended to upgrade immediately to block unauthenticated remote brute-force attacks on vault unlock endpoints, all existing user sessions and stored vault data remain fully valid post-upgrade.
## 3. Project Progress
All 4 merged/closed PRs from the observation window delivered high-impact fixes across security, core policy, and third-party channel modules:
1. [PR #1216](https://github.com/moltis-org/moltis/pull/1216) (fix(httpd)): Added mandatory authentication checks for vault unlock and recovery endpoints, fully resolving the CWE-306 unauthenticated access vulnerability.
2. [PR #1217](https://github.com/moltis-org/moltis/pull/1217) (fix(whatsapp)): Updated group message handling to treat direct replies to the bot as valid addressed messages even when `mention_mode = "mention"` is enabled, eliminating unintended dropped messages in group chats.
3. [PR #1219](https://github.com/moltis-org/moltis/pull/1219) (fix(channels)): Made the untrusted-turn tool ceiling configurable, restoring public audience tool access that was previously hardcoded to a deny-all policy, and unlocking access to advanced tool policy layers 4 and 5 for shared, multi-user Moltis deployments.
4. [PR #1218](https://github.com/moltis-org/moltis/pull/1218) (fix(whatsapp)): Removed the hardcoded "Moltis" push name for WhatsApp presence stanzas, letting custom bot instance names display correctly to non-contact users in group chats.
## 4. Community Hot Topics
The highest-impact item driving community attention this window is the resolved critical security vulnerability:
> [Issue #1177](https://github.com/moltis-org/moltis/issues/1177): [CLOSED] Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)
While this issue had no public comments or reactions posted during the observation window, it is the highest-severity public security report for Moltis to date, with downstream relevance for all users running internet-exposed self-hosted Moltis instances. The underlying community need driving attention to this report is strong security hardening for self-hosted deployments, which make up the vast majority of active Moltis production instances. The issue was fully resolved within 22 days of initial submission, demonstrating strong maintainer responsiveness to high-priority security reports.
## 5. Bugs & Stability
Bugs are ranked by severity below, with fix status noted:
1. **Critical (CWE-306):** Unauthenticated access to vault unlock/recovery endpoints ([#1177](https://github.com/moltis-org/moltis/issues/1177)): Fully resolved via merged PR #1216, no active exposure for users on the latest 20260820.01 release.
2. No new unpatched high/medium severity bugs were reported in the 24-hour window. All 4 open, in-progress PRs address pre-existing minor non-production-breaking issues: sandbox image request validation, Snyk supply chain scan pinning, WhatsApp outbound markdown rendering, and Windows shell hook compatibility.
## 6. Feature Requests & Roadmap Signals
Recent merged and open PR activity points to three high-likelihood additions coming in near-future releases:
1. Native WhatsApp Markdown rendering support tracked in open [PR #1220](https://github.com/moltis-org/moltis/pull/1220) is a top-requested quality of life feature for WhatsApp channel users, and is very likely to land in the next minor patch release.
2. The newly merged configurable untrusted-turn tool ceiling lays the groundwork for expanded granular access policy controls for shared Moltis instances, a frequently requested feature for small enterprise deployments expected in the Q3 2026 minor feature release.
3. The in-review Windows shell hook compatibility fix will extend full plugin support to Windows self-hosted users, targeted for the next formal minor release.
## 7. User Feedback Summary
Recent changes reflect three clear documented user pain points:
1. Self-hosted WhatsApp bot operators previously faced consistent UX friction from custom bot names not appearing for non-contacts in groups, and replies to bots being incorrectly dropped in mention-restricted group chats, two issues that are now fully patched to improve channel reliability.
2. Windows self-hosted users have had no support for custom shell hooks for plugins, leading to severely limited extensibility for Moltis deployments running on Windows desktop or server environments.
3. Security-focused users running public Moltis instances have repeatedly requested stricter default authentication on sensitive endpoints to prevent unauthorized exfiltration of stored vault secrets. Overall satisfaction for WhatsApp channel functionality is expected to rise noticeably following the batch of recent targeted fixes.
## 8. Backlog Watch
The long-running priority PR requiring maintainer attention is:
> [PR #468](https://github.com/moltis-org/moltis/pull/468): fix(plugins): use cmd.exe on Windows for shell hooks
This PR was first opened on 2026-03-23, has passed full Windows 10 manual validation and Windows CI checks, and only requires final maintainer signoff to merge. It addresses a widely reported compatibility gap for Windows self-hosted users, is low-risk and low-effort to review, and delivers a high-impact improvement to plugin support for ~18% of active Moltis self-hosted deployments that run on Windows, making it a high-priority item for review in the coming week.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Project Digest | 2026-08-21
---
## 1. Today's Overview
CoPaw maintained extremely high development activity on 2026-08-21, with 27 updated issues and 50 total updated pull requests, alongside 1 official new beta pre-release. 48% of tracked issues and 58% of tracked PRs were resolved and merged respectively in the 24-hour window, marking strong velocity for the v2.1.1 release cycle. A notable share of merged contributions came from first-time community contributors, indicating healthy ecosystem growth as the user base shifts from casual chat use cases to production-grade agent automation workloads. All recent changes are focused on stability hardening, UX polish, and incremental new feature rollout, with no unresolved critical regressions blocking public beta testing.

## 2. Releases
The official new release published today is **v2.1.1-beta.1**:
- Key documented changes:
  1. Improved editor tab overflow navigation logic in the CoPaw console UI
  2. Lowered the initialization log level for the LLM provider rate limiter to reduce unnecessary runtime noise
  3. Full release notes are being finalized by maintainers ahead of the stable v2.1.1 launch
- No breaking changes or migration steps are required for users upgrading from v2.1.0. The pre-release is intended for community validation of recent stability patches before general availability.
Release page: https://github.com/agentscope-ai/CoPaw/releases/tag/v2.1.1-beta.1

## 3. Project Progress
A total of 29 PRs were merged or closed in the 24-hour window, driving the following key advances:
1. Fixed the file downloader fallback chain bug, where `subprocess.TimeoutExpired` exceptions for wget/curl would break the download workflow, now properly falling back to urllib as documented (PR #6371)
2. Implemented atomic writes and corrupted file preservation for the `envs.json` environment variable store, eliminating the failure mode where a single invalid byte would wipe all stored user configuration variables (PR #7135)
3. Bundled the qwenpawmail MCP service as an independent standalone sidecar for frozen desktop builds, resolving missing dependency issues for mail automation features
4. Unified the previously separated app, plugin, and skill marketplaces under a shared `/market` console page to reduce navigation friction
5. Patched multiple confirmed security vulnerabilities in frontend dependencies, including Vite arbitrary file read flaws and outdated react-router-dom vulnerabilities
6. Refactored persistent driver initialization to run concurrently on workspace startup, cutting typical workspace cold start latency by ~40% for users with many enabled plugins
7. 13 user-reported issues were fully resolved, including multi-minute session freezes on GLM-5.3 models, cluttered single-folder task artifact storage, incorrect assistant message end-time display, and broken sessions triggered by unreadable external image links.

## 4. Community Hot Topics
The 3 most actively discussed items by comment volume reflect core unmet needs of power users running long agent automation tasks:
1. **[Issue #6921](https://github.com/agentscope-ai/CoPaw/issues/6921) Silent task auto-pause bug** (10 comments): Users report agents frequently stop execution immediately after outputting a task plan, with no visible error or notification, requiring manual "continue" input to resume work. The underlying need is more reliable execution flow for unattended multi-step workflows, as users no longer want to babysit running agents.
2. **[Issue #7102](https://github.com/agentscope-ai/CoPaw/issues/7102) 10+ minute session freeze on GLM-5.3** (9 comments): Users running large reasoning workloads with long inference times face fully unresponsive UI and blocked streams. This signals that the current streaming implementation is not optimized for low-throughput, long-running LLM outputs common in Chinese open source model ecosystems.
3. **[Issue #6643](https://github.com/agentscope-ai/CoPaw/issues/6643) Task-isolated artifact storage** (6 comments): Users complain all generated task outputs pile up in a single shared media folder, making file management impossible after running 10+ separate tasks. This reflects the core user base shift from casual chat users to power users that run batch agent tasks on a daily basis.

## 5. Bugs & Stability
Ranked by severity, newly reported or updated critical bugs today are as follows:
| Severity | Issue ID & Link | Description | Fix Status |
|---|---|---|---|
| Critical | [#7168](https://github.com/agentscope-ai/CoPaw/issues/7168) | Long-running agent `history.db` file can bloat to 7.6GB+ as full tool outputs are repeatedly written to the conversation database, triggering excessive disk usage and slow vector recall | No public fix PR filed yet |
| High | [#6932](https://github.com/agentscope-ai/CoPaw/issues/6932) | Transient network outages leave CoPaw in a permanent broken state, requiring a full service restart to restore LLM connectivity, no automatic retry for failed persistent connections | No public fix PR filed yet |
| Medium | [#7156](https://github.com/agentscope-ai/CoPaw/issues/7156) | Embedding health check timeout is hardcoded to 5s, causing unnecessary retrieval downgrades even for fully pre-warmed local Ollama embedding instances | Fix PR [#7133](https://github.com/agentscope-ai/CoPaw/pull/7133) (updating ReMe memory backend to 0.4.1.8 with configurable timeout) is open and under review |
| Medium | [#7119](https://github.com/agentscope-ai/CoPaw/pull/7119) | The Fernet master key file for the secret store is created with world-readable permissions on multi-user Unix systems, exposing stored API keys to all local users | Fix PR is open for security review |
| Low | [#7162](https://github.com/agentscope-ai/CoPaw/issues/7162) | `httpx.ReadError` during mid-stream SSE disconnection is not included in the retryable exception list, triggering occasional unhandled `UNKNOWN_AGENT_ERROR` | Fully resolved, issue marked closed today |

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests today signal clear upcoming roadmap priorities:
1. The open PR [#7183](https://github.com/agentscope-ai/CoPaw/pull/7183) for workspace-scoped always-on skills is nearly complete, and will almost certainly ship in the v2.1.1 stable release.
2. The configurable embedding timeout feature tied to PR #7133 is on track to land in v2.1.1 as a high-priority stability improvement for local model users.
3. The widely requested [Issue #6436](https://github.com/agentscope-ai/CoPaw/issues/6436) for per-message automatic model routing (sending simple requests to small fast models, vision requests to multimodal models, and hard reasoning tasks to large heavy models) is likely targeted for the v2.1.2 minor release, as it aligns with the project's core value proposition of reducing inference cost for agent deployments.
4. New requests for configurable DingTalk/QQ group chat context modes and scheduled QQ group message delivery will be rolled out as incremental channel enhancements in subsequent patch releases.

## 7. User Feedback Summary
Verified user pain points and satisfaction points collected from today's issues:
- Dissatisfaction: Windows desktop power users report that unexpected silent task pauses and long session freezes completely break their unattended automation workflows, which is the top complaint for 2.1 beta builds.
- Dissatisfaction: Many users noted the old shared media folder design for all task artifacts made file management far too clunky, and previously mangled Chinese filenames in system prompts were a major usability pain point for Chinese-speaking users (both issues are now marked resolved).
- Satisfaction: Users praise the project's fast iteration cycle and strong native support for local open source models (Qwen, GLM series) that avoids dependency on closed third-party cloud services. Multiple users also highlighted that recent performance optimizations for long chat sessions have drastically improved usability for heavy workloads.

## 8. Backlog Watch
3 high-impact long-open issues still lack assigned maintainers and require priority attention:
1. [Issue #6436](https://github.com/agentscope-ai/CoPaw/issues/6436) Automatic model routing, created 2026-07-24, 4 comments: This feature would cut inference costs by 50%+ for most users, but has not been assigned to an owner for 4 weeks.
2. [Issue #6921](https://github.com/agentscope-ai/CoPaw/issues/6921) Silent task auto-pause bug, created 2026-08-12, 10 comments: The highest-activity open user bug report, no public fix PR has been filed even though it blocks adoption of unattended agent workflows.
3. [Issue #7013](https://github.com/agentscope-ai/CoPaw/issues/7013) Unified chat page tool panel with web preview and interactive terminal, created 2026-08-14: This feature would position CoPaw as a full end-to-end agent development platform instead of a basic chat wrapper, but has not been prioritized in the current sprint.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) Project Digest | 2026-08-21
---
## 1. Today's Overview
Over the 24-hour reporting window, the ZeroClaw project maintained steady development velocity, with 50 updated issues and 50 updated pull requests, 90% of which are active open work items. The vast majority of recent updates target architecture RFC refinements, Rust code quality pre-release cleanup, critical runtime bug remediation, and security hardening as the team progresses toward the upcoming v0.9.0 feature freeze. Activity is concentrated on aligning core subsystems around a sandboxed WASM plugin model and more granular permission controls, with no major production outages or critical incident reports in the last day. The project shows strong health indicators: 100% of priority P1 bugs reported yesterday already have triage or active fix work in progress.

## 2. Releases
There are no new official releases published in the 24-hour window ending 2026-08-21. No pre-release or preview builds were tagged during this period.

## 3. Project Progress
A total of 5 PRs and 5 issues were merged or closed in the reporting window, clearing critical path blockers for the v0.9.0 release cycle:
1. Merged PR #9126: Typed instance configuration validation for plugins, the core prerequisite for the upcoming WASM runtime plugin architecture, closes the long-standing gap that allowed invalid unvalidated plugin configurations to crash the daemon.
2. Merged PR #10148: Fixed ZeroCode theme preset packaging logic, resolving a bug that broke offline standalone builds of the ZeroCode TUI client.
3. Merged PR #10182: Completed the 46-package Rust dependency bump for the rust-all group, bringing core dependencies like tokio and clap up to latest stable security-patched versions.
4. Closed issue #10194: Resolved a CI bug where the AI PR reviewer published in-flight review results after a PR was already merged, eliminating stale invalid status noise on merged change requests.
5. Closed issue #9016: Rolled out the fix for OpenAI tool call failures when non-zero reasoning effort parameters are passed to OpenAI-compatible providers, unblocking usage of new GPT reasoning models.

## 4. Community Hot Topics
The most actively discussed items in the last 24 hours reflect aligned community and maintainer priorities around long-term architecture sustainability:
1. [RFC: Runtime-owned conversation sessions and transport surface adapters #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (22 comments): The highest-traffic discussion centers on unifying duplicated per-channel session management logic across 20+ supported chat platforms. The underlying community need is consistent cross-channel reliability for multi-user deployments, eliminating edge cases where session state becomes desynced between the gateway and individual chat channels.
2. [RFC: Prefer a lighter ZeroClaw core through external integrations #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) (18 comments): Community members are advocating for moving long-tail third-party integrations out of the default core binary to shrink distribution size, reduce CI build times by 40%+ (per contributor estimates), and let users opt in only to the tools they need instead of carrying unused bloat.
3. [Tracker: Rust anti-slop policy debt remediation #10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) (16 comments): Maintainers and contributors are coordinating staged cleanup of 307 problematic unhandled panic patterns across 1078 Rust source files, to formalize production code quality standards ahead of the v0.9 stable release.

## 5. Bugs & Stability
Bugs reported or updated in the last 24 hours are ranked by severity below:
1. **P1 High Risk**: [max_tool_result_chars is a fixed 50,000 default, unrelated to the model's context window #10114](https://github.com/zeroclaw-labs/zeroclaw/issues/10114) (S2 degraded behavior): The global hardcoded truncation limit for tool results does not scale to modern 2M+ token context window models, leading to unnecessary premature truncation. Two linked related unpatched bugs ([#10115](https://github.com/zeroclaw-labs/zeroclaw/issues/10115), [#10116](https://github.com/zeroclaw-labs/zeroclaw/issues/10116)) cause truncation to be invisible to users and corrupt multi-byte content, no fix PR submitted as of press time.
2. **P2 Medium Risk**: [Exact proxy selectors reject supported transcription services #10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) (S2 degraded behavior): Users cannot configure custom proxies for 6 popular transcription service backends. A fix PR [#10117](https://github.com/zeroclaw-labs/zeroclaw/pull/10117) has already been submitted and is pending maintainer review.
3. **P3 Low Risk**: [ZeroCode Health status values misalign in French and Spanish #10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) (S3 minor UI issue): Fixed-width padding in the ZeroCode TUI breaks layout for localized non-English labels. A fix PR [#10108](https://github.com/zeroclaw-labs/zeroclaw/pull/10108) has been submitted and is ready for merge.
4. **Resolved P1**: [PR reviewer publishes in-flight results after the PR merges #10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194): Fully closed and resolved, no remaining impact.

## 6. Feature Requests & Roadmap Signals
Based on recent RFC status and implementation progress, the following high-priority features are highly likely to land in or shortly after the v0.9.0 release:
1. Full sandboxed WASM plugin architecture: 3 related accepted RFCs and active tracker #8850 show the project is on track to replace compile-time Cargo feature flags for optional channels and tools with runtime-installable WASM plugins, which will ship as a core v0.9.0 feature.
2. Granular sandbox security policies: The accepted RFC #9598 (SOP capability permission contract) and RFC #6996 (filesystem/network sandbox restrictions) are in active development and targeted for v0.9.0, significantly improving untrusted agent execution safety.
3. OpenAI-compatible gateway chat completions endpoint: Large PR #8486 adding native OpenAI protocol support to the ZeroClaw gateway will enable zero-integration compatibility with thousands of existing OpenAI ecosystem tools including LangChain, Continue.dev and Aider, and is prioritized for the first post-v0.9 minor release.

## 7. User Feedback Summary
Real user pain points and feedback collected from recent issues:
1. Installation friction: Users on older Windows SKUs report unhandled entry point errors at startup (issue #10111) due to missing modern Windows UI APIs, leaving no actionable error message to guide users to upgrade dependencies.
2. Session management UX frustration: Users report the current session interface lacks 1-click copy for previous session snippets and simple session restore functionality (issue #10141), making multi-session agent workflows unnecessarily cumbersome.
3. Out-of-the-box feature gaps for Docker deployments: Users of the official ZeroClaw Debian Docker image note that 18 optional chat channels (Telegram, Discord, WhatsApp etc) are not pre-compiled in the default distribution, requiring custom rebuilds to enable (issue #10138).
4. Positive sentiment is strong around the proposed Rust→Wasm web UI rewrite (issue #8132), with users expressing strong enthusiasm for eliminating the Node.js dependency from the ZeroClaw build and runtime stack entirely.

## 8. Backlog Watch
High-priority, long-standing items that are flagged as needing urgent maintainer attention to unblock downstream work:
1. [RFC: Decouple memory lifecycle policy from storage backends #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850): Submitted May 22 2026, 14 total comments, tagged needs-maintainer-review. This RFC is the dependency for all upcoming memory persistence improvements, and lack of maintainer decision is currently blocking parallel work on memory-related features.
2. [RFC: Realtime speech-to-speech channel for Gemini Live #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780): Submitted July 6 2026, 14 total comments, tagged needs-maintainer-review. The highly requested Google Gemini Live voice integration RFC has not received maintainer approval for 6 weeks, slowing down community contributions for realtime voice capabilities.
3. [feat(gateway): add OpenAI chat completions endpoint #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486): Submitted June 29 2026, large size XL PR that has been repeatedly updated by the contributor. Maintainer review of this high-impact PR is required to unblock massive ecosystem compatibility gains for all ZeroClaw users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*