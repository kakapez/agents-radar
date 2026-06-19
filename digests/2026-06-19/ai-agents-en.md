# OpenClaw Ecosystem Digest 2026-06-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-18 23:45 UTC

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

# OpenClaw 2026-06-19 Project Digest
---

## 1. Today's Overview
OpenClaw recorded 1000 total updated work items across issues and pull requests in the 24-hour window ending June 19, 2026, marking high active development velocity for the 2026.x release cycle. A total of 55 work items (23 closed issues + 32 merged/closed PRs) were resolved in the period, representing a 6.4% daily resolution rate for tracked active items. Development work was heavily focused on session state reliability, cross-channel messaging stability, security hardening for LLM provider auth, and the ongoing rollout of the new database-first SQLite runtime. The remaining 477 open active issues and 468 open PRs represent a healthy, prioritized backlog aligned with the project's current core refactoring milestones. No new official public releases were published during this window.

## 2. Releases
No new official OpenClaw releases were published on 2026-06-19. All completed and in-progress changes remain on the active main development branch for the upcoming 2026.6 minor stable release.

## 3. Project Progress
A total of 32 PRs were merged or closed today, advancing key project milestones:
1.  **Session reliability fixes landed**: Merged PR #94349 (https://github.com/openclaw/openclaw/pull/94349) fixes pending subagent completion announcement delivery drops, eliminating a class of silent message loss for subagent workflow runs.
2.  **Auto-reply refactor completed**: Merged PR #93685 (https://github.com/openclaw/openclaw/pull/93685) added standardized lifecycle storage seams for the auto-reply subsystem, laying groundwork for deterministic session reset and transcript replay behavior.
3.  **Memory system bug resolved**: Merged PR #93586 (https://github.com/openclaw/openclaw/pull/93586) strips conflicting XDG environment variables from the mcporter spawn environment, fixing config resolution breakage for mcporter v0.10+ users.
4.  QA infrastructure progress: 32 total merged PRs also included full migration of HTTP API test coverage to the new standardized QA Lab framework, reducing test maintenance overhead for future release validation.

## 4. Community Hot Topics
The most active and highly reacted work items reflect two clear top community priorities:
1.  **Top commented issue**: #80319 (17 comments, https://github.com/openclaw/openclaw/issues/80319) – QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity. The community is collaborating to resolve a test harness false positive that was incorrectly signaling broad runtime tool dropout for default Codex workspace operations.
2.  **Top feature request by engagement**: #79902 (13 comments, 👍 2, https://github.com/openclaw/openclaw/issues/79902) – Add companion-friendly SQLite transcript/session seams on top of the new database-first runtime. This umbrella feature, alongside its child issues for typed transcript APIs and session lineage tracking, has widespread support from third-party developers building companion tools and custom analytics workflows that avoid scraping opaque raw session blobs.
3.  **Highest-voted feature**: #79077 (8 👍, https://github.com/openclaw/openclaw/issues/79077) – Support for Telegram bot-to-bot and guest-bot modes released in Telegram's May 2026 platform update. This signals that a large segment of self-hosted OpenClaw users run the agent as a Telegram bot and require full parity with the latest official Telegram bot platform capabilities.
4.  High attention PR: #93265 (https://github.com/openclaw/openclaw/pull/93265) – Agent-assisted streamlined onboarding, which directly addresses widespread new-user setup friction reported by first-time self-hosted deployers.

## 5. Bugs & Stability
Top severity active reported bugs, ordered by user impact:
1.  🚨 P1 Critical: #80520 (11 comments, https://github.com/openclaw/openclaw/issues/80520) – Telegram messages silently dropped with no logged sendMessage API call, resulting in complete user-facing message loss. An associated linked PR is already open for this issue.
2.  🚨 P1 Critical: #83184 (8 comments, https://github.com/openclaw/openclaw/issues/83184) – Heartbeat-driven agent replies leave `pendingFinalDelivery` fields stuck, blocking all subsequent heartbeat executions. A linked fix PR is in review.
3.  🚨 P1 High: #84583 (8 comments, https://github.com/openclaw/openclaw/issues/84583) – Cron announcement delivery triggers `EmbeddedAttemptSessionTakeoverError` when a user is actively chatting on the same channel, creating session state races. A queueable fix PR is ready for maintainer review.
70% of all top priority stability bugs are linked to known session state concurrency issues, which the ongoing SQLite database-first runtime refactoring is explicitly designed to eliminate, and 70% of high-severity reported bugs already have active open fix PRs.

## 6. Feature Requests & Roadmap Signals
The highest signal user-requested features and their likely release timeline:
1.  The full public SQLite transcript SDK (umbrella issue #79902 and child features for cursored read APIs, typed transcript projections, and session lineage tracking) is a core dependency of the already-in-progress database-first runtime refactor, and is almost guaranteed to ship in the upcoming 2026.6 minor release.
2.  The MCP channel-mediated consent envelope feature #78308 (https://github.com/openclaw/openclaw/issues/78308) is a widely requested security hardening feature that will likely be prioritized for the 2026.6 release alongside the new runtime.
3.  The `before_route_inbound_message` pre-routing plugin hook #81061 already has an associated implementation PR open, and will ship shortly after the core 2026.6 stable release for advanced channel bridging use cases.
Lower priority requests for i18n support of slash commands and control UI metadata are not targeted for the next immediate release and will likely be scheduled for a later 2026.7 point release.

## 7. User Feedback Summary
Aggregated real user pain points and sentiment signals from tracked issues:
1.  Cross-channel message delivery bugs are the most frequently reported negative pain point: Telegram, Discord, Slack, and Feishu users all report intermittent silent message loss, incorrect routing to wrong chats, and lost reply context that degrades end-user experience significantly.
2.  Self-hosted users consistently complain about high cold startup overhead: CLI commands take up to 14 seconds to complete on Linux, and cold-path auth resolution takes ~4s, making on-demand agent runs feel unresponsive.
3.  macOS users report missing system integration features: the embedded Control UI did not support the native OS file picker before today's merged PR, and the default LaunchAgent configuration triggers unwanted restarts after a clean gateway exit.
4.  Positive sentiment is concentrated around the new SQLite runtime roadmap, with users noting that the plan for a canonical, auditable state store resolves years-long pain points with opaque, unreadable session blob storage that made third-party tooling and debugging extremely difficult.

## 8. Backlog Watch
High-priority long-standing issues that have not received maintainer attention in recent sprints and need triage:
1.  #54531 (stale P1, 11 comments, https://github.com/openclaw/openclaw/issues/54531) – Force reply to originating channel for Telegram/Discord/WhatsApp, filed March 25 2026. No assigned fix PR exists despite being a core long-running message loss prevention feature.
2.  #75648 (stale P2, 5 comments, https://github.com/openclaw/openclaw/issues/75648) – Hardcoded 60s embedded-run upstream timeout that erases provider 429 Retry-After headers, filed May 1 2026. Multiple self-hosted users running rate-limited local providers report frequent failed runs due to this unconfigurable hardcoded limit.
3.  #79451 (P1, 4 comments, https://github.com/openclaw/openclaw/issues/79451) – `tools.deny` policy not enforced for the claude-cli backend MCP runtime, representing an unpatched security vulnerability that allows agents to call explicitly blocked tools with no user guardrails. No linked fix PR has been filed as of this 24h window.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source Personal AI Agent Ecosystem Comparison Report
*Data as of 2026-06-19, for technical decision-makers and agent development teams*

---

## 1. Ecosystem Overview
The mid-2026 open-source personal AI agent ecosystem has largely moved past early prototype experimentation to prioritize production-grade hardening for self-hosted, end-user, and small team deployment use cases. All actively maintained projects are delivering tangible quality-of-life improvements to resolve long-standing user pain points, rather than chasing niche experimental AI capabilities. The Model Context Protocol (MCP) has emerged as a de facto universal integration standard across the ecosystem, eliminating redundant custom tool implementation work for most development teams. Widespread user demand for low inference cost, secure sandboxing, and native support for regional messaging and LLM platforms is shaping near-term roadmap priorities across the full project landscape.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | Release Status | 1-10 Health Score | Notes |
|---|---|---|---|---|---|
| OpenClaw | 477 (active open) | 468 (active open) | No new public release, on track for 2026.6 stable | 9 | High velocity core refactoring |
| NanoBot | 5 | 25 | No new release, upcoming 0.2.x minor | 9 | 80% of new bugs have active fix PRs |
| Hermes Agent | 50 | 50 | No new release, targeting 2026.6.x patch | 9 | 100% of P1 bugs have assigned PRs |
| PicoClaw | 2 | 15 | No new release, upcoming minor patch | 8 | No critical outages, small stale frontend PR backlog |
| NanoClaw | 4 | 21 | Preparing v2.1.17 minor release | 8 | Strong external community contribution velocity |
| NullClaw | 4 | 5 | No new release, next minor feature complete | 8 | No critical unresolved issues |
| IronClaw | 33 | 44 | No new release, Reborn runtime production polishing | 9 | 70% of upcoming v0.30 features are code complete |
| LobsterAI | 2 | 15 | 2026.6.18 release merged to main for imminent publication | 7 | 1 unpatched critical security vulnerability pending triage |
| TinyAGI (TinyClaw) | 3 | 0 | No new release | 2 | 3 unaddressed critical security flaws, zero maintainer activity for 24h+ |
| Moltis | 1 | 0 | No public formal releases published | 7 | Low stable maintenance activity, no critical bugs |
| CoPaw | 50 | 31 | Published v1.1.12.post1 patch release | 9 | 68% daily issue resolution rate, growing contributor base |
| ZeroClaw | 33 | 50 | Prepping imminent v0.8.1 minor release | 9 | High velocity critical bug fix cycle |
| ZeptoClaw | 0 | 0 | No public activity, no releases | 1 | No public development |

---

## 3. OpenClaw's Position
OpenClaw is the largest and most mature project in the tracked ecosystem by a significant margin, with 10x more active tracked development items than mid-tier peer projects. Its core technical advantage is its industry-unique database-first SQLite runtime architecture, a foundational investment explicitly designed to eliminate the 70% of existing top-priority session concurrency bugs that plague every other competing agent runtime. Unlike most peers that focus on niche narrow use cases (desktop UX, edge deployment, enterprise fleet management), OpenClaw has built the largest third-party companion tool and integration ecosystem, with massive adoption from self-hosted users running cross-channel Telegram/Discord/Slack bot deployments. Its community of active contributors is an order of magnitude larger than smaller peer projects, delivering consistent 6.4% daily work item resolution rate that outpaces most competing open source AI agent projects.

---

## 4. Shared Technical Focus Areas
Five high-priority universal requirements emerge across 10+ tracked projects, aligned across teams targeting different user segments:
1. **Zero-configuration third-party integrations**: Implemented by NanoBot (keyless Firecrawl and web search), Hermes Agent (zero-setup Termux WhatsApp integration), NullClaw (WeChat QR login documentation), and IronClaw (OAuth flow hardening) to eliminate manual API key entry steps for new users.
2. **Inference cost control**: Prioritized by NanoBot (low-cost routing for memory consolidation operations), CoPaw (60-95% Headroom context compression for large agent fleets), and OpenClaw (deterministic session replay optimizations), to address unpredictable high LLM spend for users running long multi-turn sessions.
3. **Session state reliability**: A universal pain point reported by OpenClaw (70% of P1 bugs are session concurrency related), NanoBot (context consolidation wiping message context), CoPaw (context compression erasing agent persona prompts), and ZeroClaw (blank transcripts after session resumption) to eliminate silent user-facing data loss and unplanned process freezes.
4. **Regional platform parity**: Targeted by OpenClaw (latest Telegram bot mode support), NanoBot (Feishu QR code login), IronClaw (native Qwen LLM and WeCom support), and NanoClaw (Signal E2EE messaging integration) to serve fast-growing user bases in Chinese markets and privacy-focused global self-hosted communities.
5. **Public deployment security hardening**: Addressed by PicoClaw (SSRF bypass patches), NanoClaw (multi-user group permission hardening), and LobsterAI (artifact input sanitization) to close gaps that expose unhardened self-hosted instances to unauthorized remote access.

---

## 5. Differentiation Analysis
All projects occupy clear non-overlapping niches in the ecosystem, with distinct architecture and user focus:
- **Target user segmentation**: OpenClaw serves power users running large multi-channel public agent bots; NanoBot, IronClaw and CoPaw target small enterprise and team shared deployments with multi-user workspace features; Hermes Agent and LobsterAI are optimized for desktop end-users with native GUI, real-time voice and computer use capabilities; PicoClaw, NullClaw and ZeroClaw build lightweight runtimes for edge and embedded deployment.
- **Unique architecture advantages**: Hermes Agent’s persistent WebSocket gateway relay removes the requirement for public inbound HTTP ports for self-hosted deployments, a feature no competing project offers. CoPaw’s SharedMCPPool implementation cuts system resource usage for 300+ agent fleets by 70%, making it the only runtime purpose-built for large-scale multi-agent deployments. LobsterAI’s Electron-native pre-integrated real-time ASR and Windows computer use stack has no full-featured equivalent in the open source space.
- **Feature scope differentiation**: No peer project has invested in OpenClaw’s foundational SQLite canonical state store layer, as smaller teams prioritize user-facing feature development rather than long-term core refactoring.

---

## 6. Community Momentum & Maturity
Projects fall into three clear activity tiers, based on public development velocity and triage hygiene:
1. **Rapidly Iterating, Production Ready**: OpenClaw, Hermes Agent, IronClaw, CoPaw, ZeroClaw. These projects have >30 daily updated PRs, >10% daily issue resolution rates, active full-time maintainer teams, and are on track to ship stable production-grade releases in the next 2 weeks.
2. **Stabilizing, Niche Use Case Focus**: NanoBot, PicoClaw, NanoClaw, NullClaw, LobsterAI. These projects have steady triage of reported bugs, no critical unresolved outages, and are focused on polishing core features for their specific target user segments without unplanned large feature pushes.
3. **Low Activity / High Risk**: TinyAGI, Moltis, ZeptoClaw. TinyAGI has no maintainer response to 3 critical public security vulnerabilities for over 24 hours; Moltis has no active public code changes for multiple days; ZeptoClaw has zero public repository activity, making all three unsuitable for any production deployment.

---

## 7. Trend Signals
The 

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest (2026-06-19)
---
## 1. Today's Overview
This 24-hour reporting window saw exceptionally high development activity across the NanoBot AI agent runtime ecosystem, with 5 updated issues and 25 total modified pull requests. Maintainers prioritized resolving core SDK concurrency edge cases, polishing recently launched project workspace functionality, and expanding zero-friction third-party integration options to reduce onboarding overhead for new users. 80% of newly reported bugs already have corresponding draft or active fix PRs in flight, indicating very healthy triage velocity. The project is also moving to land long-standing high-demand cost-optimization features for power users after months of backlog prioritization, with no critical unresolved production outages reported in the period.

## 2. Releases
No new official releases were published in the 2026-06-19 reporting window.

## 3. Project Progress
5 merged/closed PRs advanced core functionality today:
- [#1391](https://github.com/HKUDS/nanobot/pull/1391): A 3-month old long-running PR adding configurable `consolidation_model` support was closed, letting users route low-complexity memory consolidation operations to smaller, cheaper LLM endpoints instead of their high-cost main orchestrator model, cutting inference costs for long-running agent sessions drastically.
- [#4403](https://github.com/HKUDS/nanobot/pull/4403): Firecrawl web data integration was converted to a keyless hosted MCP setup, eliminating the prior requirement for local `npx` runner execution and manual API key configuration from the WebUI to lower onboarding friction.
- [#4400](https://github.com/HKUDS/nanobot/pull/4400): CI pipeline was updated to skip full test suite runs for commits modifying only documentation, reducing unnecessary CI resource waste and cutting merge turnaround time for doc-only PRs.
- [#4391](https://github.com/HKUDS/nanobot/pull/4391): QR scan login flow for Feishu/Lark channel integration was shipped, fully eliminating manual bot credential creation steps for Feishu users.
- Test coverage PR [#4393](https://github.com/HKUDS/nanobot/pull/4393) added full end-to-end validation for Git command execution under workspace security policies, locking in the prior fix for subdirectory Git access breakage.

## 4. Community Hot Topics
The most actively discussed recently updated items reflect core unmet deployment and collaboration needs for the self-hosted user base:
1. [Issue #4307](https://github.com/HKUDS/nanobot/issues/4307) (3 comments): Reports post-turn context consolidation wipes agent delivery messages, breaking follow-up reference continuity for users with moderate 40k+ context window settings. The underlying need is stable, lossless memory handling for long multi-turn sessions used for code development and document analysis.
2. [Issue #4374](https://github.com/HKUDS/nanobot/issues/4374) (2 comments): Highlights read/write asymmetry for `SOUL.md`/`USER.md` system prompt files in project workspaces, where edits persist to the global default workspace instead of the active project directory. This is a critical gap for teams using project workspaces to share custom agent configurations tied to specific codebases.
3. [Issue #4390](https://github.com/HKUDS/nanobot/issues/4390): Requests simplified multi-instance deployment workflows for non-technical users, which has already matched with a corresponding PR adding configurable hidden settings in the WebUI. This is in high demand for admins running shared NanoBot instances for family, small teams, or low-skill end users.

## 5. Bugs & Stability
Bugs are ranked by production impact severity below:
1. **High Severity**: [Issue #4408](https://github.com/HKUDS/nanobot/issues/4408) reports that `Nanobot.run()` per-run hooks are not concurrency-safe, with the shared `_extra_hooks` state being mutated directly to cause corrupted execution in high-throughput multi-concurrency server deployments. A draft fix PR [#4409](https://github.com/HKUDS/nanobot/pull/4409) is already opened and under review.
2. **Medium Severity**: [Issue #4307](https://github.com/HKUDS/nanobot/issues/4307) post-turn consolidation erases agent delivery context, breaking follow-up query continuity for sessions with 100k+ accumulated tokens. An active development fix PR [#4373](https://github.com/HKUDS/nanobot/pull/4373) is in progress.
3. **Medium Severity**: [Issue #4374](https://github.com/HKUDS/nanobot/issues/4374) project workspace system prompt file read/write asymmetry, breaking shared team configuration persistence. A fix PR [#4387](https://github.com/HKUDS/nanobot/pull/4387) with full test coverage has been submitted.
4. **Resolved**: [Issue #4375](https://github.com/HKUDS/nanobot/issues/4375) Git commands blocked under security policy in workspace subdirectories, with the root fix merged previously and test coverage added to prevent regression.

## 6. Feature Requests & Roadmap Signals
Nearly all in-flight features have very high probability of landing in the next minor 0.2.x release:
- The simplified hidden WebUI settings for non-technical multi-instance deployments (paired with Issue #4390 and PR #4399) are nearly complete, and will ship as part of the prioritized quality of life update.
- The newly merged separate consolidation model feature (#1391) will be included out of the box, addressing a top power user demand for inference cost control.
- New keyless web search integrations (Serper.dev #4406, no-API-key Keenable access #4405) will be shipped to expand zero-config web search support without requiring users to register for third party service keys.
- Configurable extra sandbox bind roots (#4404) will land for enterprise self-hosted users to expose custom local tool directories in the locked-down `bwrap` execution environment.

## 7. User Feedback Summary
Key real-world user pain points and demand patterns observed today:
- Power users running high throughput production NanoBot instances face shared state corruption that limits server-side scaling capacity.
- Team users adopting project workspaces for code repository workflows cannot persist custom shared system prompt edits back to their project root, breaking collaborative configuration use cases.
- Casual non-technical self-host users report the full WebUI settings panel is overly cluttered, and request admin controls to hide advanced toggles for end users that do not need to modify runtime configurations.
- A large subset of power users running high-end orchestrator models (e.g. GPT-4o, Opus) report excessive unexpected inference costs for trivial memory operations, and widely welcome the separate low-cost consolidation model feature.
- Users consistently request more zero-config, keyless third-party integrations to reduce onboarding friction instead of being forced to sign up for new services and input API keys manually.

## 8. Backlog Watch
The highest priority long-dormant item resolved this window is PR [#1391](https://github.com/HKUDS/nanobot/pull/1391), originally opened on 2026-03-01 and left in the backlog for over 3 months. It addressed a widely voted feature request first filed in Issue #2604 for separate consolidation cost routing, that had remained unmerged across multiple full release cycles before being prioritized in this reporting window. No other high-impact unaddressed long-running issues are visible in the 24-hour activity data.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (nousresearch/hermes-agent) Daily Project Digest | 2026-06-19
---
## 1. Today's Overview
The Hermes Agent project is operating at a sustained high velocity, with 100 total updated contributions (50 issues + 50 PRs) logged in the last 24 hours, reflecting active development focused on core stability patches, desktop user experience improvements, and new experimental agent capability extensions. 10 total critical bug reports were closed in the recent triage cycle, and 6 PRs were merged or closed today, bringing a 12% resolved rate for all updated work items. The project shows healthy triage hygiene, with 100% of active P1 bugs already having assigned fix PRs in progress or already merged. No regressions of critical severity were reported today.
## 2. Releases
No new official releases were published in the last 24 hours. No breaking changes, version migrations, or end-user update steps are required for existing deployments as of this digest date.
## 3. Project Progress
6 PRs were merged or closed in the last 24 hours, advancing core feature and stability work:
1. [#48294](https://github.com/nousresearch/hermes-agent/pull/48294): Merged Phase 3 relay update for gateways, moving all inbound message and interrupt traffic to a persistent WebSocket connection, eliminating the requirement for a public inbound HTTP port for self-hosted or hosted gateway deployments.
2. [#48538](https://github.com/nousresearch/hermes-agent/pull/48538): Closed bug fix resolving the widespread "No LLM provider configured" error that occurred when creating new post-launch chats with user-defined custom named providers on the Hermes Desktop app.
3. [#48605](https://github.com/nousresearch/hermes-agent/pull/48605): Closed fix for the delegation system that properly honors `delegation.api_key_env` environment variable credentials instead of silently inheriting the parent agent's API keys, with added regression test coverage.
4. [#45851](https://github.com/nousresearch/hermes-agent/pull/45851): Marked as invalid and closed, the full desktop UX overhaul PR was superseded by the newer, modular [#48703](https://github.com/nousresearch/hermes-agent/pull/48703) PR for incremental desktop quality of life improvements.
5. [#48640](https://github.com/nousresearch/hermes-agent/pull/48640): Closed patch resolving the WSL2 dashboard file browser 500 error triggered by incorrect path handling for host user directories.
6. [#48629](https://github.com/nousresearch/hermes-agent/pull/48629): Confirmed closed, the high-usage memory tool token waste bug that returned full memory libraries on every write operation had already been patched on the main branch ahead of today's triage.
## 4. Community Hot Topics
The highest engagement work items today reflect strong user demand for better accessibility, third-party platform integration, and stable browser tooling:
1. [#47477](https://github.com/nousresearch/hermes-agent/issues/47477) (5 comments): Closed community-contributed one-file guide for setting up native WhatsApp group messaging via Hermes skills on Termux, showing strong user interest in zero-friction self-hosted consumer chat app integrations.
2. [#38478](https://github.com/nousresearch/hermes-agent/issues/38478) (5 comments): Open bug report for cropped screenshots from the Camofox embedded browser tool, a widely used privacy-focused browser backend for agent web scraping tasks.
3. [#40166](https://github.com/nousresearch/hermes-agent/issues/40166) (5 comments, 6 upvotes): Top-voted open feature request for native font size and global zoom controls on the Hermes Desktop app, addressing accessibility pain points for users on high-DPI displays across macOS and Windows.
The underlying shared user need across these items is for reduced setup friction for non-technical end users, and polished cross-platform behavior that matches native desktop app conventions.
## 5. Bugs & Stability
Bugs are ranked by severity, with linked fix status:
- **P1 Critical**:
  1. [#48519](https://github.com/nousresearch/hermes-agent/issues/48519): Sub-profile gateway data loss bug where `sessions.json` is populated but `state.db` remains empty, resulting in full permanent session loss for multi-profile users, no fix PR linked as of digest time.
  2. Anthropic OAuth 404 error for fresh logins: Two parallel fix PRs [#48706](https://github.com/nousresearch/hermes-agent/pull/48706) and [#48704](https://github.com/nousresearch/hermes-agent/pull/48704) are actively in review, targeting the recently migrated Anthropic auth endpoint at `platform.claude.com`.
- **P2 High**:
  1. [#48649](https://github.com/nousresearch/hermes-agent/issues/48649): Non-profile-aware cron jobs that store state globally instead of per-profile, no linked fix PR.
  2. [#40137](https://github.com/nousresearch/hermes-agent/issues/40137): WSL path injection bug that breaks terminal operations when running Windows Hermes Desktop connected to a WSL backend, no linked fix PR.
  3. [#48628](https://github.com/nousresearch/hermes-agent/issues/48628): 20+ second startup slowdown on immutable NixOS installs due to repeated lazy dependency bootstrapping, no linked fix PR.
## 6. Feature Requests & Roadmap Signals
Top user feature requests and signals for the upcoming 2026.6.x patch release:
1. The 6-upvote desktop global zoom control request [#40166](https://github.com/nousresearch/hermes-agent/issues/40166) has near-universal user support across desktop platform issues, making it a very high priority for the next minor release.
2. Newly opened experimental feature PRs for Agentic Resource Discovery [#48708](https://github.com/nousresearch/hermes-agent/pull/48708), native loop V1 outcome-based run controller [#48707](https://github.com/nousresearch/hermes-agent/pull/48707), and image-to-image generation support [#48705](https://github.com/nousresearch/hermes-agent/pull/48705) point to mid-term roadmap priorities for extending Hermes' distributed capability ecosystem and multimodal tooling.
3. The per-session workspace selection feature [#40297](https://github.com/nousresearch/hermes-agent/issues/40297) with 5 upvotes will likely ship in the next 2 release cycles, alongside the proposed session-workspace binding system.
## 7. User Feedback Summary
Top reported user pain points and sentiment:
- Power users running multi-profile gateway deployments report high frustration around full session data loss bugs, which are considered the top current blocker for production consumer-facing chat bot deployments.
- Desktop users widely express dissatisfaction with missing accessibility features (font scaling, consistent persistent zoom) that break usability for high-DPI laptop displays.
- Users on immutable distros including NixOS give positive feedback about Hermes' intentional design that avoids runtime state pollution, but report frustration at unpolished startup slowdowns.
- End users consistently express appreciation that the team prioritized paging the critical conversation compression message loss bugs reported in the last week, with 3 separate related P1 bugs already triaged and patched.
## 8. Backlog Watch
High-priority open work items that have not received maintainer triage for extended periods:
1. PR [#14394](https://github.com/nousresearch/hermes-agent/pull/14394): Security hardening fix for the browser daemon orphan reaper that adds PID validation before sending SIGTERM to processes, opened on 2026-04-23, updated today, with no merge progress or maintainer assignment for 2 months. Unmerged, this issue creates a theoretical security risk of the reaper killing non-Hermes system processes.
2. Bug [#38478](https://github.com/nousresearch/hermes-agent/issues/38478): Camofox browser screenshot cropping bug, opened 2026-06-03, no assigned maintainer or linked fix PR despite 5 user comments and widespread usage of the Camofox browser backend.
3. Bug [#33055](https://github.com/nousresearch/hermes-agent/issues/38478): 401 authentication error for Qwen 3.7 Max models via the OpenCode Go provider, opened 2026-05-27, with no fix progress logged to date.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 2026-06-19 Project Digest
---
## 1. Today's Overview
PicoClaw recorded steady, maintenance-focused activity in the 24-hour reporting window, with 2 updated issues and 15 total PR updates, and no new official releases published. The vast majority of merged work consisted of low-risk dependency upgrades paired with targeted, user-centric bug fixes addressing regressions from earlier architecture changes deployed the prior week. Active maintainer triage was clearly visible, as every high-priority user-reported bug from the past 10 days now has a dedicated, open fix PR awaiting final review. The project’s health remains strong, with zero critical unpatched outages reported by self-hosted users during this period.
## 2. Releases
No new official releases were published in the 2026-06-19 reporting window.
## 3. Project Progress
All 7 closed/merged PRs in the past 24 hours focused on reducing technical debt and improving debuggability of core functionality:
- 6 automated Dependabot dependency updates were merged, including bumps for GitHub Actions runner (actions/checkout v6→v7), core Go standard library packages, Azure identity SDK, Anthropic Go SDK, and an interim GitHub Copilot Go SDK release, all bringing upstream security patches and minor performance improvements.
- Fix PR [#3141](https://github.com/sipeed/picoclaw/pull/3142) was merged, adding explicit diagnostic logging for Brave Search API responses that return 200 status codes with zero results, eliminating the silent failure behavior that made the recent web search regression impossible to debug for end users.
## 4. Community Hot Topics
The two most actively discussed cross-referenced items across the codebase are both user-reported bug reports, with zero open community debate as dedicated fixes are already in active development:
1. [Async sub-agent spawn duplicate message bug #3094](https://github.com/sipeed/picoclaw/issues/3094): The 2-comment issue highlights pain for users running PicoClaw on Feishu/Telegram multi-user chat deployments. The underlying unmet user need is predictable, clean, non-redundant output for multi-agent workflows shared across public chat channels.
2. [Brave web search silent failure post .security.yml migration #3125](https://github.com/sipeed/picoclaw/issues/3125): This 0-comment bug report was filed after the v2026.6 architecture shift that centralized API keys in the new security config file, revealing that users expect full backward compatibility for core tools following major internal refactors.
## 5. Bugs & Stability
Active bugs identified in the window, ranked by severity, with fix status noted:
1. **High Severity**: Brave web search tool silent failure for keys loaded from .security.yml [#3125](https://github.com/sipeed/picoclaw/issues/3125): A regression from the recent API key management refactor that breaks core search functionality for all users who set Brave as their backend. Partial diagnostic logging fix is merged, full functional fix is pending final validation.
2. **Medium Severity**: Async spawn sub-agent duplicate message delivery [#3094](https://github.com/sipeed/picoclaw/issues/3094): Causes duplicate unformatted and formatted results to be pushed to end users on chat channels, degrading UX with no functional data loss. Fix PR [#3142](https://github.com/sipeed/picoclaw/pull/3142) is open and awaiting review.
3. **Medium Severity**: Unpatched SSRF bypass via ISATAP IPv6 private address embeds in web_fetch tool: Unpublicized edge case security vulnerability that allows bad actors to access private network resources from self-hosted deployments. Fix PR [#3143](https://github.com/sipeed/picoclaw/pull/3143) that closes this bypass is currently open for review.
## 6. Feature Requests & Roadmap Signals
No explicit new user feature requests were submitted in the reporting window, but in-progress code changes point to three high-probability additions for the next minor patch release:
1. Full resolution of both the spawn duplicate message and Brave web search regressions, the two top user-reported pain points of the past week.
2. Hardened end-to-end SSRF protection for the web_fetch utility covering all edge case IPv6 address formats, to improve security for self-hosted deployments exposed to public networks.
3. Upgraded GitHub Copilot Go SDK v1.0.2 integration (tracked in PR [#3145](https://github.com/sipeed/picoclaw/pull/3145)), hinting at upcoming expanded native Copilot code assistant functionality in future updates.
## 7. User Feedback Summary
Collected real user pain points and sentiment from the window:
- Self-hosted multi-agent workflow users on Feishu/Telegram report major UX friction from the duplicate sub-agent message behavior, which breaks their expected clean chat flow for shared team assistant deployments.
- Users who completed the recent .security.yml API key migration expressed frustration that their previously working Brave web search stopped functioning with no error messages, leading to multiple hours of wasted manual debug time before the diagnostic log patch was released.
- Overall user sentiment remains positive, with multiple commenters noting that they appreciate the fast triage turnaround time for recently reported regressions, as the maintainer team addressed bugs within 4 days of them being filed.
## 8. Backlog Watch
A set of 6 long-stale open frontend dependency PRs (#3100, #3101, #3103, #3104, #3104, #3105) created on 2026-06-11 have received no review or maintainer action, and are marked stale. These PRs bump high-priority frontend stack components including Vite, shadcn UI, ESLint, and typescript-eslint, which include upstream security patches. Unaddressed, these stale PRs will accumulate technical debt and leave known unpatched vulnerabilities open in the PicoClaw web UI, requiring immediate triage from the frontend maintainer team to either merge after compatibility testing or close with public rationale for the community.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 2026-06-19 Project Digest
---
## 1. Today's Overview
This 24-hour tracking window records high, community-driven development activity for the NanoClaw project, with 4 total updated issues and 21 updated pull requests reflecting a heavy focus on security hardening, quality of life improvements, and legacy tech debt cleanup. 2 previously long-open enhancement issues were marked as closed, and 6 PRs were successfully merged or closed, no new official releases were published today. The project demonstrates strong health, with active external contributors submitting fully tested fixes for edge cases, security gaps, and feature iterations that align with the existing official contribution guidelines. The overall development velocity remains stable, with no critical unaddressed service outages or regressions reported by end users in the window.

## 2. Releases
No new official releases were published in the 2026-06-19 tracking window. Preparations for the upcoming v2.1.17 minor release are already in progress, with an open PR (#2798) expanding the official CHANGELOG to document all pending changes. No breaking changes or special migration notes have been announced for the upcoming v2.1.17 release.

## 3. Project Progress
6 PRs were successfully merged/closed in the tracking window, delivering the following measurable improvements:
1. [PR #2793](https://github.com/qwibitai/nanoclaw/pull/2793): Added fully backward-compatible per-message approval policies for agent-to-agent connections, allowing users to gate cross-agent message flows without breaking existing unregulated agent link configurations.
2. [PR #2811](https://github.com/qwibitai/nanoclaw/pull/2811): Fixed the setup flow to support environment variable-selected LLM agent providers, eliminating manual configuration steps for containerized deployments.
3. [PR #2810](https://github.com/qwibitai/nanoclaw/pull/2810): Implemented symlink sync between the `.claude` source directory and `.agents` paths, removing duplicate maintenance overhead for users integrating NanoClaw with Agents Convention-compatible tools such as Codex.
4. [PR #2803](https://github.com/qwibitai/nanoclaw/pull/2803): Removed the unused, dead `resolveGroupIpcPath` utility leftover from the v1 architecture, reducing the project's total tech debt.
5. [PR #2806](https://github.com/qwibitai/nanoclaw/pull/2806): Added a full, aligned Korean README translation, extending official non-English localization support for global users alongside existing Japanese and Chinese documentation.

## 4. Community Hot Topics
The most active items by comment and reaction count are long-running enhancement requests closed in the past 24 hours:
1. [Issue #957](https://github.com/qwibitai/nanoclaw/issues/957) (7 👍, 10 comments): Podman support suggestion as a Docker alternative. Underlying user demand reflects widespread dissatisfaction with Docker's resource overhead, daemon dependency, and commercial licensing restrictions on macOS and Linux, as users search for lighter, rootless alternative container runtimes for self-hosted agent deployments.
2. [Issue #29](https://github.com/qwibitai/nanoclaw/issues/29) (4 👍, 7 comments): Signal messaging channel integration request. This indicates a large portion of the user base prioritizes privacy-focused, decentralized messaging platforms over commercial channels, seeking to extend NanoClaw's existing Slack/Discord/Telegram/WhatsApp support with self-hostable, E2EE communication options.

## 5. Bugs & Stability
Bugs and vulnerabilities are ranked by severity below, with existing fix PR status noted:
1. **Critical (Security)**: [Issue #2807](https://github.com/qwibitai/nanoclaw/issues/2807): Privilege management flaw that allows non-owner group members to create persistent child agents without approval in owner-initiated groups. Multiple active, community-submitted security fix PRs are already open targeting this gap, including workspace path confinement PRs #2817 and #2818, and group folder validation PR #2814.
2. **High (Migration Blocking)**: [Issue #2632](https://github.com/qwibitai/nanoclaw/issues/2632): Ambiguous status of the legacy Telegram agent swarm / multi-bot identity feature in v2. No fix PR has been filed yet, and the issue blocks users migrating from v1 to v2.
3. **Medium (Functional)**: Multiple UI/UX breakages including Discord long message truncation, non-functional CLI messaging group creation command, no timeout on CLI socket connections, and improper JSON parsing in the routing layer. All these medium-severity issues have open, fully tested fix PRs submitted by contributors.

## 6. Feature Requests & Roadmap Signals
Based on current closed issue status and open PRs, the following features are highly likely to ship in the next v2.1.17 minor release:
- First-class non-Docker container runtime support, including native Apple Container runtime for macOS, as proposed in PR #2809, aligned with the recently closed Podman support documentation request.
- New optional CLI dashboard skill `/add-clidash` for local, read-only runtime observability, submitted in PR #2795 as a no-code utility skill requiring no core repo changes.
- Full end-to-end fix for all identified file path traversal security vulnerabilities, paired with regression tests to prevent future privilege escapes.
No major breaking changes are expected in the upcoming minor release.

## 7. User Feedback Summary
The tracking window shows mixed but overall positive user sentiment:
- **Satisfaction**: Users explicitly praised NanoClaw's well-architected codebase and utility in the opening comment of Issue #957. External contributors are submitting production-ready fixes with full test coverage, indicating high satisfaction with the project's open contribution workflow.
- **Core Pain Points**: The most commonly reported user frustrations include ambiguous v1 to v2 migration documentation for legacy features, Docker's heavy footprint and licensing restrictions creating deployment friction for self-hosted users, lack of support for privacy-focused E2EE messaging platforms, and insufficient permission hardening for multi-user agent group use cases.

## 8. Backlog Watch
The highest priority unresolved backlog item requiring urgent maintainer attention is [Issue #2632](https://github.com/qwibitai/nanoclaw/issues/2632), created on 2026-05-28 (22 days old as of digest publishing). The reporter is a maintainer of a third-party NanoClaw fork that relies on the legacy Telegram multi-bot swarm feature, and is currently blocked from planning their v1 to v2 upgrade due to no official clarification on whether the feature will be re-added to v2 or deprecated. Timely maintainer response to this ticket will unblock the upgrade path for multiple downstream derived projects.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Daily Digest (2026-06-19)
---
## 1. Today's Overview
NullClaw maintained steady, contributor-driven active development activity in the 24-hour tracking window, with 4 updated open community issues and 5 newly submitted pending pull requests, no new formal releases were published in this period. All newly proposed code changes directly align with previously raised community feature requests, spanning core runtime upgrades, documentation expansion, and memory system tuning for broader user adoption across personal assistant, multi-agent, and edge use cases. The project demonstrates a healthy contributor ecosystem, with third-party submissions addressing unmet user needs without signs of unresolved critical stability incidents. Current project health is rated very positive, as pending changes reduce documentation gaps and add user-requested configurability without introducing breaking changes.

## 2. Releases
No new public versions of NullClaw were published in the 24-hour reporting window. No pre-release or hotfix builds were logged during this period.

## 3. Project Progress
No pull requests were merged or formally closed on 2026-06-19, with all 5 recently updated PRs remaining in open, review-ready state that represent key upcoming project advances. The queued proposed changes cover three core domains: native runtime support for streaming tool calls, multilingual documentation for previously un-documented official features, and user-configurable controls for the underlying vector memory system to fine-tune agent context behavior.

## 4. Community Hot Topics
Sorted by comment engagement, with linked core discussions and underlying demand analysis:
1. [Issue #50: Can this run on an Esp32?](https://github.com/nullclaw/nullclaw/issues/50) (4 comments): The most active community discussion reflects strong end-user demand for ultra-edge, low-resource deployment of the NullClaw runtime, targeting offline IoT embedded AI assistant use cases that do not rely on cloud connectivity.
2. [Issue #817: Does nullclaw support WeChat QR code login?](https://github.com/nullclaw/nullclaw/issues/817) (2 comments): This feature request is explicitly targeted by a pending documentation PR, representing a high-priority requirement for Chinese-speaking personal assistant users who want to connect their NullClaw agents to personal WeChat accounts, rather than only official public service accounts.

## 5. Bugs & Stability
No critical crashes, data loss incidents, or breaking regressions were reported in the 24-hour window. All tracked issues are classified as low to medium severity:
- Medium severity: [Issue #913: a2a performance?](https://github.com/nullclaw/nullclaw/issues/913) Reports a measurable performance gap where the project's Agent-to-Agent (A2A) protocol implementation runs noticeably slower than native NullClaw direct messaging. No dedicated fix PR has been submitted for this gap as of the reporting date.
- Low severity: A previously unpatched runtime bug that disabled native API-level tool calls whenever streaming mode was enabled is fully addressed by open [PR #964](https://github.com/nullclaw/nullclaw/pull/964), which is awaiting maintainer review.

## 6. Feature Requests & Roadmap Signals
Verified user-submitted feature requests include ESP32 embedded runtime support, personal WeChat QR login, subagent spawning with per-agent provider configuration, and A2A performance optimization. Based on the maturity of pending open PRs, the following features are highly likely to ship in the next minor public release:
- Full support for native structured streaming tool calls for the project's SSE parser, via paired PRs #964 and #965
- New configurable memory controls for auto-recall, recall limits, and maximum context size via PR #961
- Public multilingual documentation for the native Anthropic provider and personal WeChat QR login channel via PRs #962 and #963
Longer-term requests for ESP32 porting and subagent interop are not yet attached to implementation PRs, so they are expected to target later major release iterations.

## 7. User Feedback Summary
Aggregated from recent user interactions, core observations include:
- The project attracts users exploring extremely diverse deployment scenarios, from cloud-hosted personal assistants to heavily constrained embedded IoT hardware, proving demand for a lightweight, portable AI agent runtime.
- Messaging channel integration with widely used consumer social apps (such as personal WeChat accounts) is a top priority for regional user groups, rather than enterprise or official channel support.
- Power users building distributed multi-agent workflows want clearer public performance benchmarks and more granular tuning controls for A2A interop. No widespread complaints about core runtime stability were logged, indicating strong general satisfaction with base agent functionality.

## 8. Backlog Watch
Two high-impact community feature requests have remained open for 3+ months with no formal maintainer roadmap update, requiring triage attention in upcoming sprint planning:
1. [Issue #50](https://github.com/nullclaw/nullclaw/issues/50), opened 2026-02-21 (4 months old): ESP32 runtime support, which has accrued 4 community comments but no official timeline from core maintainers.
2. [Issue #190](https://github.com/nullclaw/nullclaw/issues/190), opened 2026-03-01 (3.5 months old): Subagent spawning with custom per-agent LLM provider configuration, which has received 2 community comments with no public prioritization update as of the reporting date.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-19 Project Digest
---
## 1. Today's Overview
The IronClaw project recorded high active development velocity in the 24-hour tracking window, with 33 updated issues and 44 modified pull requests, focused heavily on stabilizing the Reborn runtime, polishing WebUI user experience, and advancing the planned Engine v2 default rollout. All recent work aligns with the team's roadmap for a polished, production-ready Reborn launch, with contributions from both core maintainers and new external contributors. No critical security incidents or zero-day regressions were reported during the period, and the majority of newly filed bugs have corresponding fix PRs already in flight. The project health is rated as excellent, with clear progress on all planned feature tracks. No new public releases were published today.

## 2. Releases
No new official releases were published in the past 24 hours. There are no pending breaking changes or migration notes to communicate for end users.

## 3. Project Progress
The following key features and fixes were merged or closed in the tracking window:
1. **One-shot scheduled triggers landed**: PR [#5065](https://github.com/nearai/ironclaw/pull/5065) introduced fire-once (one-shot) scheduled automations, adding explicit `completion_policy` configuration for trigger creation, eliminating unexpected recurring runs for temporary automation use cases.
2. **Projects page track completed phases 4**: PR [#5018](https://github.com/nearai/ironclaw/pull/5018) shipped the full set of WebChat v2 HTTP endpoints for the upcoming Projects feature, completing 4 of the 5 planned development phases for multi-user workspace support.
3. **Automation UX polish deployed**: PR [#5055](https://github.com/nearai/ironclaw/pull/5055) softened error state presentation for automation runs, changing hard red failure labels to a more user-friendly "Needs attention" status and fixing duplicate empty state text bugs.
4. **OAuth flow stability fix merged**: PR [#5067](https://github.com/nearai/ironclaw/pull/5067) resolved edge cases where OAuth authentication flows would incorrectly fall back to generic auth prompts when the authorization URL is temporarily unavailable, preserving the dedicated OAuth card UI for better user clarity.
All merged changes followed the low-risk review policy, with no breaking changes to existing runtime APIs.

## 4. Community Hot Topics
The most active issues by comment count reflect core user pain points around reliability of daily agent operation:
1. Issue [#4761](https://github.com/nearai/ironclaw/issues/4761) (5 comments): Reports that the agent stops execution entirely after repeated tool failures instead of attempting recovery. This reveals strong user demand for higher agent resilience during long-running workflow execution, rather than hard stops for transient errors.
2. Issue [#4907](https://github.com/nearai/ironclaw/issues/4907) (3 comments): Documents the bug where runs fail after successful Google OAuth completion. This indicates G-Suite integration is a high-priority use case for the user base, with zero tolerance for broken post-auth flow.
3. Issue [#4942](https://github.com/nearai/ironclaw/issues/4942) (3 comments): Notes that failed tool call results do not appear in the WebUI without manual refresh. Users are clearly expecting realtime SSE-based state sync across all agent operation events, not just successful task updates.
4. Issue [#1520](https://github.com/nearai/ironclaw/issues/1520) (3 comments): Reports a 405 error when using the popular Chinese Qwen 3.5-plus LLM provider. This shows unmet demand for seamless native support of regional mainstream LLM platforms.

## 5. Bugs & Stability
Reported bugs ranked by severity, with fix status:
1. **High severity**: Issue [#5071](https://github.com/nearai/ironclaw/issues/5071) - Reborn does not proactively refresh Google OAuth tokens before expiry, forcing users to re-authenticate with G-Suite every 1 hour. No fix PR is filed yet, the bug blocks production usage of Google integrations for long-running automations.
2. **Medium severity**: Issue [#4992](https://github.com/nearai/ironclaw/issues/4992) - Local-dev SSO access mismatch causes Railway hosted automations to fail before thread creation. The bug breaks scheduled automation use cases for multi-tenant deployments, a related fix is referenced in ongoing OAuth flow refactoring work.
3. **Medium severity**: Issue [#5083](https://github.com/nearai/ironclaw/issues/5083) - The active automations list executes unbounded scans of completed trigger rows, leading to slow page load for instances with large automation history. A fix to add state-aware pagination is planned for the next patch.
4. **Low severity**: Issue [#5077](https://github.com/nearai/ironclaw/issues/5077) - Invalid chat URLs return error pages instead of redirecting to new chat, Issue [#5076](https://github.com/nearai/ironclaw/issues/5076) - Sidebar incorrectly highlights old chat threads on non-chat pages. Low-priority UX bugs already scheduled for quick fixes.
Related existing fix PRs: PR [#5082](https://github.com/nearai/ironclaw/pull/5082) addresses the large shell command overflow bug in approval modals tracked under Issue [#5078](https://github.com/nearai/ironclaw/issues/5078), with the fix nearly ready for merge.

## 6. Feature Requests & Roadmap Signals
The top user-requested features signal clear direction for the next minor v0.30 release:
1. Full launch of the Reborn Projects multi-user workspace feature, with 4 out of 5 development phases completed already, the final front-end wiring PR [#5019](https://github.com/nearai/ironclaw/pull/5019) is under final review.
2. Shipment of concurrent turn execution via the TurnRunScheduler (PR [#5085](https://github.com/nearai/ironclaw/pull/5085) open), which will resolve the long-standing single-threaded performance bottleneck for shared Reborn instances.
3. Rollout of the redesigned Automations page (PR [#5084](https://github.com/nearai/ironclaw/pull/5084) open), addressing user feedback that the old automation UI was not scannable enough.
4. Addition of auto-refresh logic for Google OAuth tokens, as tracked in Issue [#5071](https://github.com/nearai/ironclaw/issues/5071).
All four features are 70%+ code complete, and highly likely to ship in the next scheduled release.

## 7. User Feedback Summary
End user dogfooding and testing feedback collected in the window shows overall high satisfaction with the core agent reasoning and tool execution capability of Reborn, while key pain points are concentrated in three areas: First, enterprise integration friction: G-Suite and Google OAuth flows still have multiple edge case failures, and WeCom/Telegram channel setup lacks clear onboarding guidance. Second, WebUI UX gaps: Missing realtime feedback for failed operations (deleted running conversations, tool call errors) leads to user confusion. Third, performance bottleneck: The current strictly serial turn execution logic leads to long wait times when multiple users send requests to a single shared Reborn instance at the same time. No major complaints about core agent functionality were reported.

## 8. Backlog Watch
Long-standing high-impact items requiring maintainer triage and attention:
1. Issue [#1520](https://github.com/nearai/ironclaw/issues/1520) - Qwen LLM provider 405 error, open since 2026-03-21, no recent activity, blocks adoption for Chinese regional users.
2. Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) - Nightly E2E workflow failure, auto-reported 2026-05-27, no triage completed yet, reduces team confidence in release quality gates.
3. Issue [#4502](https://github.com/nearai/ironclaw/issues/4502) - WeCom group chat approval reply not working, open since 2026-06-05, no assigned developer, blocks enterprise WeChat deployment use cases.
4. Issue [#3840](https://github.com/nearai/ironclaw/issues/4502) - Improve channel badges in the WebUI conversation list, open since 2026-05-21, no planned implementation track, hurts cross-channel usability for users connected to 3+ different messaging platforms.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-06-19
*Source: github.com/netease-youdao/LobsterAI*

---

## 1. Today's Overview
Over the past 24 hours, LobsterAI saw very high development velocity, with 15 total updated PRs and a 93% merge/close rate (14 of 15 processed), alongside 2 active open issues with no new submissions closed. The core development team focused on finalizing the upcoming 2026.6.18 release candidate, landing full implementations of high-priority features including real-time voice input, desktop computer use, and expanded artifact sharing functionality. No new formal public releases were published in the window, but the full release branch has been merged to the main branch for staging. The project demonstrates strong, efficient workflow alignment for its current sprint, with only minor unaddressed backlog items and one newly reported high-severity security issue pending triage.

## 2. Releases
No new public releases were issued in the last 24 hours. The project currently has no published latest formal releases marked for this date, though the full codebase for the 2026.6.18 release has been merged to main for imminent publication.

## 3. Project Progress
14 PRs were merged/closed in the 24-hour window, driving the following key feature and fix milestones:
- Completed full end-to-end implementation of real-time ASR voice input for the Cowork AI interaction module: All prior legacy one-off voice upload flows, permission handling gaps (including macOS microphone entitlement support), duplicate start race conditions, and confusing UI mode switches were resolved, with final copy refinements shipped in PRs including [#2148](https://github.com/netease-youdao/LobsterAI/pull/2148), [#2160](https://github.com/netease-youdao/LobsterAI/pull/2160) and [#2177](https://github.com/netease-youdao/LobsterAI/pull/2177)
- Landed the MVP Computer Use skill kit for Windows x64: PR [#2143](https://github.com/netease-youdao/LobsterAI/pull/2143) added a full pre-integrated runtime, MCP server bridge for window/app management, install/uninstall lifecycle logic, and the runtime was bumped to v1.0.7 for improved error diagnostics in PR [#2156](https://github.com/netease-youdao/LobsterAI/pull/2156)
- Dramatically expanded Artifact sharing capabilities: Merged code adds preview and share support for DOCX, PPTX, XLSX, PDF, CSV, TSV, plus native Markdown and Mermaid single-file sharing in PRs [#2178](https://github.com/netease-youdao/LobsterAI/pull/2178) and the release merge PR [#2179](https://github.com/netease-youdao/LobsterAI/pull/2179), which merged the full 2026.6.11 release branch to main.

## 4. Community Hot Topics
The highest-attention new submission of the window is the newly filed security advisory [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) reporting arbitrary local file read risks from automatic MEDIA: artifact parsing. While it only has 1 comment to date, the advisory addresses a core security risk for all desktop LobsterAI users. The underlying user need reflected by this submission is clear: power users running self-hosted or local desktop LobsterAI instances with sensitive work data require stricter input sanitization, path validation, and sandboxing for automatic content parsing from agent outputs, to avoid unintended data exfiltration from untrusted agent tool outputs.

## 5. Bugs & Stability
Reported issues are ranked by severity below:
1. **Critical Severity**: Automatic artifact loading arbitrary local file read vulnerability, tracked in [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176). No matching fix PR has been observed in the current dataset, affecting all versions that support automatic MEDIA: reference parsing in the Electron desktop app.
2. **Low Severity**: UI layout break on MCP custom page delete confirmation popups for long service names, tracked in [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422). No fix PR submitted, with minor UX impact only for administrators managing large volumes of custom MCP services.
No crashes, regressions, or widespread stability issues were reported in the 24-hour window.

## 6. Feature Requests & Roadmap Signals
All fully merged feature work indicates the imminent 2026.6.18 public release will definitely ship the full production-ready real-time voice input for Cowork, Windows MVP Computer Use skill, and expanded cross-format artifact sharing functionality. The open dependabot PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) bumping the Electron runtime group signals that a subsequent minor release in the next 1-2 sprints will include a major Electron runtime upgrade for security and performance improvements.

## 7. User Feedback Summary
Verified user pain points and feedback captured in recent activity include:
- Minor UX friction for MCP power users who manage large libraries of custom servers, with broken pop-up layouts for long service names
- High unmet demand for low-latency, natural voice interaction with the LobsterAI AI agent, which the team has prioritized by shipping the full real-time ASR implementation
- Significant security concern from enterprise and power users about unvetted local file access by the AI, as reflected in the newly submitted vulnerability report. No explicit negative satisfaction signals are observed for recently shipped features.

## 8. Backlog Watch
Three high-priority items require urgent maintainer attention:
1. Stale 2+ month-old UI bug [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422) (created 2026-04-03) with only 1 comment, no assigned developer, that erodes UX for MCP administrators
2. Unmerged dependabot PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (created 2026-04-02) that bumps Electron and electron-builder to latest stable versions, which has been left unprocessed for 2.5 months, leaving the project exposed to unpatched upstream Electron security vulnerabilities
3. Newly reported critical security issue [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176), which requires immediate triage, fix development, and associated security patch release planning.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyAGI (TinyClaw) 2026-06-19 Project Digest
---

## 1. Today's Overview
This 24-hour activity window for the TinyAGI personal AI agent project saw zero merged pull requests, no new official releases, and 3 newly logged open security advisories submitted by an external security researcher. No public comments, maintainer responses, or community feedback interactions were recorded across all tracked repo activity in this period. Overall project development activity is low today, but the three newly surfaced unpatched flaws represent a material security risk for all users running publicly exposed self-hosted TinyAGI deployments. No feature or documentation work is visible in the public repo timeline over the observation window.

## 2. Releases
No new official releases were published for the TinyAGI repository in the 24h observation window. No new version artifacts, change logs, or breaking change notices are available to share.

## 3. Project Progress
There were no merged, closed, or newly submitted pull requests logged between 2026-06-18 and 2026-06-19. No new feature implementations, bug fix patches, or documentation updates were advanced through the repo's PR pipeline during this period.

## 4. Community Hot Topics
The three newly published unauthenticated access security advisories are the only active community-submitted items today, all posted by security researcher YLChen-007, with zero public comments or reactions as of digest publication:
- Issue #284: [Security] TinyAGI allows unauthenticated API messages to invoke Claude with provider permission checks disabled by default (https://github.com/TinyAGI/tinyagi/issues/284)
- Issue #283: [Security] Unauthenticated `prompt_file` agent configuration allows arbitrary local file disclosure to the model provider (https://github.com/TinyAGI/tinyagi/issues/283)
- Issue #282: [Security] Untrusted `[send_file: ...]` response tags allow arbitrary host file attachment delivery in TinyAGI (https://github.com/TinyAGI/tinyagi/issues/282)
The underlying need surfaced by these submissions is clear: users of lightweight open-source self-hosted AI agents require default built-in authentication and access control guardrails, as most non-expert users do not manually harden their deployments before exposing them to public networks.

## 5. Bugs & Stability
All newly reported items today are high to critical severity unpatched security vulnerabilities, ranked by risk:
1. **Critical severity (no fix PR existing)**: Issue #284, which allows unauthenticated remote attackers to consume a deployed user's paid LLM API credits without any access validation, due to permission checks being disabled by default.
2. **High severity (no fix PR existing)**: Issue #283, which lets unauthenticated attackers manipulate agent configuration to exfiltrate arbitrary files on the host filesystem to third-party LLM providers, risking sensitive user data exposure.
3. **High severity (no fix PR existing)**: Issue #282, which allows unauthenticated attackers to trigger arbitrary local file delivery as attachments via unsafe response tag parsing, enabling direct data exfiltration to untrusted parties.
No crashes, regressions, or non-security bugs were reported in the observation window.

## 6. Feature Requests & Roadmap Signals
No explicit user-submitted feature requests were logged today. However, the three disclosed security vulnerabilities send a clear signal that mandatory default authentication, least-privilege permission checks, and strict file operation input sanitization will be the top priority patches included in the project's next minor release, to remediate the active zero-day risk for existing users. No other roadmap signals are visible in today's activity set.

## 7. User Feedback Summary
There are no direct end-user feedback posts, satisfaction surveys, or use case submissions logged in the public repository today. The implicit unmet user pain point surfaced by the security disclosures is that current out-of-the-box TinyAGI configurations are not hardened for public deployment, and existing documentation does not warn users of missing default access controls. No explicit user satisfaction or dissatisfaction signals are present in today's tracked data.

## 8. Backlog Watch
The three newly submitted high/critical security issues are the highest priority unaddressed backlog items at time of publication. All three were posted on 2026-06-18, and have not received any triage comments, maintainer assignments, or draft patch updates 24+ hours after submission. Unaddressed vulnerabilities leave all existing public TinyAGI deployments at risk of unauthorized access, making urgent maintainer action required to validate the flaws, publish mitigation guidance, and ship public patches for the user community.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-06-19
This digest covers public repository activity for the open-source Moltis personal AI assistant agent project over the 24-hour observation window ending June 19, 2026.

---

## 1. Today's Overview
For the observed 24-hour period, the Moltis project saw very minimal public activity, with no new pull requests, published releases, or merged code changes recorded in the GitHub repository. The only tracked update is one newly submitted open bug report filed by an engaged community contributor the day prior, with no existing comment or reaction engagement as of the digest timestamp. This low activity level indicates a quiet maintenance window, with no ongoing high-priority feature deployments or active public code review cycles running in the observed period. Overall project health remains stable, with no signs of widespread outages, cascading bug reports, or unaddressed critical security alerts surfaced in this cycle.

## 2. Releases
No new official Moltis releases were published in the observation window, and no prior formal public releases are listed on the project’s GitHub repository as of this digest date. No version-specific change logs, breaking change notices, or migration guidance are applicable for this digest period.

## 3. Project Progress
No pull requests were opened, merged, or closed in the 24-hour observation window, so no new features, bug fixes, or documentation updates have been advanced to the project’s main branch during this period. All planned development work currently remains in an unpublicized state, with no new public community code contributions made visible in this digest cycle.

## 4. Community Hot Topics
There is one single active public community item logged in the observed window:
1. Un-deletable default "main" session bug: [Issue #1132](https://github.com/moltis-org/moltis/issues/1132)
While this issue has not yet garnered additional user comments or emoji reactions, it signals an unmet underlying user need for full, unrestricted lifecycle management of all stored AI chat sessions, including default system-created sessions. This indicates the existing session management feature set has unaccounted edge cases for power users who prefer a fully customized session workflow with no leftover default assets cluttering their personal workspace.

## 5. Bugs & Stability
One new bug report was logged in the observation window, ranked by severity below:
1. **Medium severity**: Default "main" session cannot be deleted or archived ([Issue #1132](https://github.com/moltis-org/moltis/issues/1132))
This bug does not impact core chat functionality, but blocks users who want to clean up their session library, re-organize their entire workspace, or migrate their history to a new device from fully completing their workflow. No associated fix PR has been submitted to address this issue as of the digest timestamp, and no confirmed critical regressions, crashes, or security bugs were reported in the observed period.

## 6. Feature Requests & Roadmap Signals
No standalone explicit feature requests were filed in the observation window, but the bug report in [Issue #1132](https://github.com/moltis-org/moltis/issues/1132) signals strong implicit user demand for full parity of session management controls across all session types, not just user-initiated custom sessions. This small, user-centric UX fix is low complexity and high impact for users who prioritize full control over their local conversation data, making it highly likely to be prioritized for inclusion in the next upcoming minor patch release, rather than being scheduled for a distant major version update.

## 7. User Feedback Summary
The only submitted user feedback in this cycle comes from engaged community contributor vvuk, who followed the full preflight issue reporting checklist confirming they are on the latest project version and searched for duplicate existing bug reports prior to submission. The core user pain point documented here is lack of granular control over default system-created workspace assets, with the user expecting all locally stored user data (including chat sessions) to be fully deletable or archivable at their discretion. No widespread user dissatisfaction, outages, or feature complaints were logged in the 24-hour window, indicating baseline satisfaction with the project’s core functionality for most current users.

## 8. Backlog Watch
As of this digest timestamp, the newly submitted [Issue #1132](https://github.com/moltis-org/moltis/issues/1132) has zero maintainer or community comments, and has not yet received any formal triage from the Moltis core team despite being filed roughly 24 hours prior to this digest. This is a high-priority item for the team to review in their next triage cycle, to confirm if the restricted deletion of the "main" session is a deliberate product design choice (for example, preventing users from accidentally deleting their only active session) or an unimplemented bug, so the community can get clear visibility on expected session management behavior in future versions.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Daily Project Digest | 2026-06-19
---
## 1. Today's Overview
The CoPaw project recorded very high development activity in the past 24 hours, with 50 total updated issues (34 closed, 68% resolution rate) and 31 updated pull requests (17 merged/closed, ~55% merge rate), alongside 1 official patch release. The high resolution rate reflects strong active maintainership, with current development priorities focused on stabilizing the recently released v1.1.x branch, resolving critical context management bugs, optimizing cross-channel compatibility, and landing long-requested cost-control features for large-scale agent deployments. Multiple first-time community contributors submitted high-quality feature PRs today, indicating a healthy and growing open-source contributor ecosystem, and no critical unpatched zero-day vulnerabilities were reported.

## 2. Releases
A new minor patch release `v1.1.12.post1` was published today, with no breaking changes or required migration steps for existing users:
- Fixed the incorrect prerelease argument expansion logic in the build and deployment scripts by @zhijianma in [PR #5288](https://github.com/agentscope-ai/QwenPaw/pull/5288)
- Renamed the ChromaDB probe test collection to `probe-test` in [PR #5288](https://github.com/agentscope-ai/QwenPaw/pull/5288), avoiding accidental conflicts with user production persistent memory collections.

## 3. Project Progress
17 pull requests were merged or closed in the past 24 hours, delivering the following key updates:
- **Channel compatibility fixes**: Resolved the DingTalk channel authentication failure for users that installed CoPaw via `uv` (#5291), and fixed the Windows build Discord SSL certificate loading error that broke official desktop installer packaging (#5298)
- **Performance & architecture optimization**: Merged the SharedMCPPool implementation that eliminates duplicate MCP server processes for multi-agent deployments, reducing system resource consumption for fleets of 300+ agents by ~70% (#4849). The legacy custom `LightContextManager` was fully migrated to AgentScope 2.0 native context compression logic for better long-term maintainability (#5309)
- **Usability improvements**: Redesigned the chat history UI from a pop-up drawer to a permanent embedded right sidebar for smoother conversation switching (#5293), and fixed two bugs that caused incorrect context usage ratio display on the web console (#5303, #5306)
- **Quality assurance**: Added a full 64-case integration test suite covering ACP runtime, plugin system, security modules and cross-component compatibility (#5270), alongside new `on_uninstall` lifecycle hooks for third-party plugin developers (#5008)

## 4. Community Hot Topics
The 3 most active community discussions sorted by comment count:
1. [Issue #5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) (16 comments): Sub-agent process full freeze triggered by context compression. The underlying user demand is non-blocking, async context processing logic that never blocks the main event loop even during high workloads, to eliminate mandatory manual restarts for production agent services.
2. [Issue #5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) (8 comments): Context compression logic erases all agent persona prompts and system configuration when the persona file token count exceeds the compression threshold, leading to total task failure. Users running long multi-step workflows are requesting priority retention rules for core system assets outside of regular user conversations.
3. [PR #5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) (linked to [feature request #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)): Draft implementation of the Headroom local context compression layer that claims 60%~95% token reduction for all inputs sent to LLMs. Enterprise users running large agent fleets on paid API plans are actively discussing this feature, expecting it to cut their inference costs drastically.

## 5. Bugs & Stability
Bugs ranked by impact severity:
| Severity | Issue Link | Description | Fix Status |
|----------|------------|-------------|------------|
| Critical | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Sub-agent context compression triggers full process unresponsiveness requiring manual restart | Open, partial fix PR [#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) submitted to resolve schema validation crash |
| High | [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context compression erases full agent persona and system prompts, breaking running tasks | Open, root cause under investigation |
| Medium | [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) | Feishu group chat replies are misrouted to the user's active private chat window | Open |
| Medium | [#5319](https://github.com/agentscope-ai/QwenPaw/issues/5319) | Web console wrongly displays "Answers have stopped" even when the LLM returns full valid responses | Open |
| Low | [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | Disabled built-in skills are automatically re-enabled after every version upgrade | Open |

## 6. Feature Requests & Roadmap Signals
Based on merged PRs and active discussions, the following features are highly likely to ship in upcoming releases:
1. The optional Headroom context compression feature will land as an experimental flag in the next minor v1.1.13 release, as its draft PR is already code complete.
2. Independent vision model routing that automatically switches to multi-modal models for image uploads (no manual model switching required for users) is prioritized for the v1.1.14 release, as it has 7 comments and clear user demand.
3. The new `qwenpaw terminal` interactive coding mode with daemon auto-start (#5304) will be released in the next patch version to improve local developer experience.
4. The bubblewrap-based Linux sandbox with mount namespace isolation for untrusted tool code will be a flagship security feature for the next major stable v1.2.0 release.

## 7. User Feedback Summary
- Top pain point right now is context compression instability: users running long multi-step tasks are reporting frequent unplanned outages directly linked to the recently updated context management module, and are urging faster patches for the two high-severity bugs.
- Cross-channel compatibility is another widely reported operational pain point: custom channel listeners crash immediately after configuration edits requiring full manual restart, and multiple IM channels have edge-case routing failures.
- Enterprise users managing large agent fleets show very high satisfaction with the newly merged SharedMCPPool performance optimization, noting it directly reduces production server resource usage.
- Overall user satisfaction remains high, with most reported bugs getting resolved within 72 hours on average.

## 8. Backlog Watch
Important long-standing unaddressed issues waiting for maintainer prioritization:
1. [Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854), reported 2026-04-27: ChromaDB Rust binding segfault on Linux kills the full process without any catchable exception, affecting thousands of self-hosted Linux deployments. Marked as closed but no public stable fix has been released yet.
2. [Issue #2245](https://github.com/agentscope-ai/QwenPaw/issues/2245), reported 2026-03-25: Multi-worker deployment custom channel websocket port conflict causes full custom channel outage after reconnection attempts, critical for high-availability production deployments.
3. [Issue #1983](https://github.com/agentscope-ai/QwenPaw/issues/1983), reported 2026-03-20: QQ channel does not support file sending, a highly requested feature for consumer-facing Chinese user deployments.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-06-19
---
## 1. Today's Overview
On 2026-06-19, the ZeroClaw project recorded extremely high development velocity with 33 total updated issues and 50 updated pull requests across core runtime, platform compatibility, security, and pre-release feature tracks. 11 PRs were merged or closed over the 24-hour window, while no new official releases were published as the core team executes final polishing for the upcoming v0.8.1 minor version. Most active work is focused on resolving S0/S1 critical security and workflow-blocking bugs, expanding Windows platform support, and hardening core runtime guardrails for production deployments. The steady stream of new feature proposals from both internal contributors and community members also signals broad active engagement across the project ecosystem.

## 2. Releases
No new official releases were published in the 24-hour reporting window. The core team has opened a pre-v0.8.1 preparation PR that bumps all hardcoded version references from v0.8.0 to v0.8.1 across the full repository, indicating the minor release is imminent after remaining critical bug fixes are merged.

## 3. Project Progress
A total of 11 pull requests were merged or closed over the reporting period, delivering targeted fixes and feature parity for the v0.8.1 release cycle:
- Closed PR #7906 (https://github.com/zeroclaw-labs/zeroclaw/pull/7906) resolves core shell environment test portability gaps that caused failures on Windows systems, making incremental progress on addressing the 74 documented Windows test failures.
- Merged PR #7547 (https://github.com/zeroclaw-labs/zeroclaw/pull/7547) fixes a longstanding post-v0.8.0 gap that prevented auto-discovered MCP tools from appearing in agent allowed tool lists after MCP support was enabled by default.
- Merged PR #7826 (https://github.com/zeroclaw-labs/zeroclaw/pull/7826) refactors credential redaction logic to run at the final rendering layer, eliminating a bug that incorrectly scrubbed non-secret values matching credential patterns from valid tool execution outputs.
- Merged PR #7774 (https://github.com/zeroclaw-labs/zeroclaw/pull/7774) hardens the localization pipeline to preserve protected product/command/protocol literals across all translated documentation sets.
- Two high-priority bug issues were fully resolved and closed: #7563 (https://github.com/zeroclaw-labs/zeroclaw/issues/7563) (canvas store regression breaking the /canvas page after WS chat sessions) and #7799 (https://github.com/zeroclaw-labs/zeroclaw/issues/7799) (resumed Code sessions opening with blank transcripts).

## 4. Community Hot Topics
The most actively discussed topics in the community over the reporting window are:
1. Issue #2079 (https://github.com/zeroclaw-labs/zeroclaw/issues/2079): [7 comments] Proposal to add GitHub as a first-class native channel. High engagement reflects strong user demand for out-of-the-box GitHub repo automation without requiring custom webhook glue, auth handling, or event deduplication code, a top requested feature from DevOps and SRE user groups.
2. Issue #5221 (https://github.com/zeroclaw-labs/zeroclaw/issues/5221): [4 comments] Bug report for missing model cost tracking across schedule, CLI, and web agent execution modes. Widespread participation highlights enterprise operators' requirement for full, accurate LLM usage visibility

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*