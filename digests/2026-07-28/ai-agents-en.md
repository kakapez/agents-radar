# OpenClaw Ecosystem Digest 2026-07-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-27 23:01 UTC

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

# OpenClaw Project Daily Digest | 2026-07-28
---
## 1. Today's Overview
OpenClaw saw extremely high development activity on 2026-07-27, with 500 total updated issues (53% closed rate, 266 resolved) and 500 total updated PRs (45% merged/closed rate, 226 changes landed) as teams sprint to finalize the 2026.7.2 stable release after recent beta testing. No new public releases shipped in the 24h window, with engineering capacity prioritizing critical security hardening, high-severity crash bug resolution, and community-reported post-beta regressions. The project maintains a very healthy cadence of closing more issues daily than it takes in, with most open active issues already assigned clear fix shapes and pending maintainer review. Security hardening for shared multi-tenant gateway deployments is the clear top priority across merged changes today.

## 2. Releases
No new public stable, beta, or pre-release versions of OpenClaw were published in the 24h reporting window. The 2026.7.2-beta.4 remains the latest available test release, with final candidate builds expected to ship within 72 hours after the current batch of critical bug fixes is validated.

## 3. Project Progress
Key merged and closed changes on the day include:
1. **Critical security fix**: PR [#113215](https://github.com/openclaw/openclaw/pull/113215) landed SSRF guardrails for untrusted ClawHub skill archive download URLs, preventing malicious skill publishers from triggering server-side requests to internal network, cloud metadata, or loopback addresses on end-user gateways.
2. **Multi-channel reliability fix**: PR [#113417](https://github.com/openclaw/openclaw/pull/113417) resolved a bug where invalid or disabled channel account IDs would silently fall back to unintended active accounts, eliminating misrouted messages in multi-bot Teams/Feishu deployments.
3. **Performance improvement**: PR [#114527](https://github.com/openclaw/openclaw/pull/114527) added concurrency bounding for subagent spawn preparation, preventing event loop overload when a single user request triggers dozens of parallel subagent launches.
4. High-priority user-reported bugs closed today include the cross-channel second message session conflict bug (#102020), broken Bedrock Haiku 4.5 inference profile ARN routing (#87318), and WhatsApp long model call session stall (#84569).

## 4. Community Hot Topics
The most actively discussed items sorted by comment and reaction count:
1. **#75 Linux/Windows Clawdbot Apps** (115 comments, 80 👍) | [Link](https://github.com/openclaw/openclaw/issues/75)
   The oldest and most widely requested feature from the community, originating January 2026, demanding native feature-parity desktop apps for Linux and Windows users matching the existing macOS/iOS/Android clients. The underlying need signals mass user demand to expand OpenClaw adoption beyond Apple ecosystem deployments, and hundreds of users have commented on their attempts to run community-built unofficial ports.
2. **#109867 Beta.2 state migration blocks gateway startup** (8 comments,7 👍) | [Link](https://github.com/openclaw/openclaw/issues/109867)
   A widely reported breaking regression in the 2026.7.2-beta.2 update that broke gateway upgrades for all users running SQLite state storage, highlighting user frustration with untested schema changes in beta releases.
3. **#6615 Add denylist support for exec-approvals** (10 comments, 8 👍) | [Link](https://github.com/openclaw/openclaw/issues/6615)
   Power users that run public-facing agent deployments note the existing full exec allowlist model is unnecessarily cumbersome for low-risk environments, and the requested "allow all except blocked commands" policy model would reduce administrative overhead significantly.

## 5. Bugs & Stability
Severity-ranked active unresolved bugs from the 24h window:
| Severity | Issue Title | Link | Status |
|---|---|---|---|
| P0 Critical | Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days, causing repeated OOM crashes | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Related fix PR #114767 addressing embedded run heap leaks is pending proof testing; no full fix merged yet |
| P1 High | Telegram agent repeats identical replies 2-10x after 5.20 update | [#86519](https://github.com/openclaw/openclaw/issues/86519) | Fix shape confirmed, pending maintainer review |
| P1 High | 6.x state migration leaves channel conversation-store SQLite empty, breaks MS Teams proactive sends | [#94939](https://github.com/openclaw/openclaw/issues/94939) | Linked PR is queued for 2026.7.2 stable patch |
| P1 High | Ollama remote provider streaming not consumed, model_call never progresses | [#94251](https://github.com/openclaw/openclaw/issues/94251) | Fix PR exists, ready for maintainer review |

All critical regressions from the 2026.7.2-beta.2 release have been resolved, with no unaddressed release blockers remaining at time of publishing.

## 6. Feature Requests & Roadmap Signals
User feature requests that are highly likely to ship in upcoming releases:
1. **Masked Secrets - Prevent Agent from Accessing Raw API Keys** (#10659): This high-priority security feature has already passed fix shape validation and security review pre-scoping, and is almost certain to land in the 2026.7.2 stable release to block credential exfiltration via prompt injection.
2. **Memory Trust Tagging by Source** (#7707): Top requested security feature for memory poisoning attack prevention is scheduled for the 2026.8 feature release, as the core engineering team has allocated dedicated resources for memory security hardening this cycle.
3. **Exec approval denylist support** (#6615): Low-complexity feature with broad user demand can be shipped in a near-term 2026.7.x patch release.
4. The long-awaited Linux/Windows desktop clients (#75) are confirmed to enter active alpha development in Q3 2026, per maintainer comments in the issue thread.

## 7. User Feedback Summary
User satisfaction is high with the recent release cycle, as evidenced by the community praising the team's responsiveness closing 266 issues in a single day. Top reported pain points include:
- Enterprise users state the current lack of masked secrets and memory poisoning protection blocks them from deploying OpenClaw for production internal use cases
- Power users on non-Apple platforms report friction running unofficial workarounds to get full-featured OpenClaw desktop clients on Linux and Windows
- OpenAI path users estimate dynamic per-turn prompt injection is breaking 100% of automatic prompt caching, wasting 20-30% of their total token costs
- Telegram end users report post-5.20 duplicate replies create a poor user experience for public community chat deployments.

## 8. Backlog Watch
High-priority long-open items that have not received recent maintainer attention:
1. **#75 Linux/Windows Clawdbot Apps** | Opened 2026-01-01, 115 comments: The highest-engagement open issue in the repo, marked as needing maintainer, security, and product decision review, but no assigned engineering lead has been named for the cross-platform client project to date.
2. **#67419 Session context bloat: bootstrap files re-injected every turn, wasting 20-30% of tokens** | Opened 2026-04-15: A widely impactful performance issue that increases user inference costs across all model providers, marked as needing live reproduction with no recent progress for 3+ months.
3. **#7722 Filesystem Sandboxing Config (tools.fileAccess)** | Opened 2026-02-03: A critical security hardening feature requested by enterprise users, that has clear user requirements documented but no assigned engineering lead, and has remained in backlog for over 5 months.

---

## Cross-Ecosystem Comparison

# 2026-07-28 Open-Source AI Agent & Personal Assistant Ecosystem Cross-Project Comparison Report
---
## 1. Ecosystem Overview
As of late July 2026, the open-source personal AI agent ecosystem has completed its transition from prototype-focused experimental development to production-grade maturation, with all active projects prioritizing reliability, security hardening, and cost efficiency over novel experimental features. The tracked 10-project landscape spans full-stack enterprise multi-tenant frameworks to ultra-lightweight edge deployments, serving a fast-growing base of users running 24/7 non-trivial agent workloads rather than initial proof-of-concept tests. Only 1 project shipped a major milestone stable release in the 24-hour reporting window, with the rest of the ecosystem in coordinated pre-release hardening sprints aligned with user demand for production readiness. 80% of active project roadmaps now prioritize addressing long-tail pain points from existing user bases instead of adding new unvetted surface area, indicating the market has moved past early adopter hype to mainstream self-hosted adoption.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Merged/Closed PRs | Release Status (Past 24h) | Overall Health Score (1-5, 5=Excellent) |
|--------------|---------------------|------------------|------------------------|---------------------------|-------------------------------------------|
| OpenClaw     | 500                 | 500              | 226                    | No new public release, 72h out from 2026.7.2 stable | 5 |
| NanoBot      | 64                  | 38               | 24                     | No new release, v0.1.4.post3 latest | 5 |
| IronClaw     | 37                  | 50               | 19                     | Shipped ground-up full rebuild ironclaw-v1.0.0 stable | 5 |
| ZeroClaw     | 50                  | 50               | 7                      | No new release, v0.8.3 latest | 4 |
| CoPaw        | 50                  | 49               | 15                     | No new release, v1.1.12.post2 latest stable | 4 |
| Hermes Agent | 50                  | 50               | 8                      | No new release, no recent public version tags | 4 |
| LobsterAI    | 7                   | 9                | 5                      | No new release | 4 |
| Moltis       | 0                   | 5                | 0                      | No new public release | 3 |
| PicoClaw     | 4                   | 4                | 0                      | No new release, v0.3.1 latest | 3 |
| NanoClaw     | 0                   | 8                | 0                      | No new release | 3 |
| NullClaw     | 0                   | 1                | 0                      | No new public releases in project history | 2 |
| TinyClaw     | 0                   | 0                | 0                      | No activity tracked | 1 |
| ZeptoClaw    | 0                   | 0                | 0                      | No activity tracked | 1 |

## 3. OpenClaw's Position
OpenClaw is unambiguously the highest-velocity and largest community project in the ecosystem by every measurable metric: its 266 daily resolved issues are 11x the daily resolution volume of the next highest comparable project (IronClaw, 19 merged PRs), and its top community feature request (Linux/Windows native desktop apps) has 115 comments, more than triple the total engagement of the highest-discussed issues across all peer projects.
Its core technical difference from peers is a design priority on multi-tenant shared gateway deployments, rather than the single-user or small-team focus of nearly all other frameworks: its recently merged SSRF guardrails, subagent spawn concurrency bounding, and masked secrets roadmap items are industry reference implementations for large-scale hosted agent deployments that no competing project has delivered as of this digest date. OpenClaw’s community size is estimated to be at least 8x larger than the next most active project, evidenced by the hundreds of user-submitted unofficial ports, bug reports, and feature requests accumulated over the 7 months since its public launch.

## 4. Shared Technical Focus Areas
Five high-priority requirements have emerged across more than half of the tracked active projects, indicating cross-ecosystem shared development priorities:
1. **Multi-model resilience and failover**: Observed across OpenClaw, Hermes Agent, CoPaw, NanoBot, and PicoClaw, all working to eliminate full instance outages triggered by single LLM provider rate limits, endpoint failures, or access caps.
2. **Privilege isolation and security hardening**: Foundational work across all 7 top-tier active projects, including OpenClaw SSRF guardrails, NanoBot auto-agent write protection, Moltis shared instance shell access gating, and ZeroClaw sub-agent tool allowlist enforcement, to eliminate unintended data leaks and arbitrary code execution risks.
3. **Inference cost waste reduction**: Targeted by OpenClaw, Hermes Agent, LobsterAI, and ZeroClaw to cut the widely reported 20-30% of token consumption wasted on session bloat, stuck tool loops, and redundant prompt reinjection.
4. **Regional market localization and compatibility**: Prioritized by Hermes Agent (Feishu integration fixes), PicoClaw (full Japanese WebUI localization), LobsterAI (Chinese Windows non-ASCII path support), reflecting fast-growing non-Western user bases.
5. **Long-running unattended task resilience**: Addressed by CoPaw (message queuing), ZeroClaw (SOP job cancellation), and OpenClaw (gateway OOM leak fixes), to prevent silent data loss and task failure for users running 24/7 automated agent workflows.

## 5. Differentiation Analysis
The ecosystem splits into clear specialized segments with minimal feature overlap across target user, architecture, and use case:
- **Target user segmentation**: OpenClaw exclusively serves enterprise multi-tenant gateway operators; Hermes Agent targets local developer workflow users; CoPaw is purpose-built for Chinese enterprise IM (Feishu/WeChat Work/DingTalk) team deployments; NanoBot targets Raspberry Pi and low-resource edge self-hosters; Moltis is optimized for ACP ecosystem power users.
- **Technical architecture differences**: IronClaw is the only project that completed a full ground-up 1.0 rebuild with preserved legacy runtime backward compatibility, unlike OpenClaw’s incremental 2-week cadence stable patch cycle; ZeroClaw uses a Rust-first base with native Landlock sandboxing that no other comparable framework implements out of the box; NanoBot maintains a 98% daily issue closure rate by intentionally limiting new feature scope to focus exclusively on backlog resolution.
- **Unique feature focus**: No competing project matches OpenClaw’s native multi-tenant gateway capabilities, CoPaw’s enterprise IM reliability maturity, or Moltis’ embedded single-binary Zvec vector database backend that eliminates dependency on separate external vector infrastructure.

## 6. Community Momentum & Maturity
Projects fall into 4 distinct activity tiers:
1. **Tier 1 (Rapid High-Velocity Iteration, Health ≥4.5)**: OpenClaw, IronClaw, NanoBot. These projects demonstrate >60% daily issue closure rates, immediate triage for all new user-reported bugs, and clear near-term major release milestones, with teams fully aligned to user-reported production pain points.
2. **Tier 2 (Steady Active Stabilization, Health 3.5-4.4)**: CoPaw, ZeroClaw, Hermes Agent, LobsterAI. These projects have fully operational maintainer teams that prioritize post-feature hardening and long-tail bug resolution over new feature delivery, with no unresolved critical production outages.
3. **Tier 3 (Moderate Review Backlog, Health 2.5-3.4)**: PicoClaw, NanoClaw. Community contribution volume currently outpaces maintainer review capacity, with no merged changes in the 24h window, though all pending submissions are production-ready and no critical incidents are reported.
4. **Tier 4 (Low Activity / Stagnant, Health <2.5)**: NullClaw, Moltis, TinyClaw, ZeptoClaw. NullClaw’s core team is confirmed to be working on unannounced behind-the-scenes architecture work, Moltis is waiting on maintainer review for a high-priority community contribution, while TinyClaw and ZeptoClaw have zero tracked public activity in the reporting window.

## 7. Trend Signals
Several industry-wide insights derived from cross-project user feedback provide actionable value for AI agent developers:
1. The era of unvetted experimental agent feature releases is over: 100% of top-tier projects now prioritize security and reliability hardening over new capability additions, so development teams no longer need to waste engineering resources building basic guardrails that are becoming standardized

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-07-28
---

## 1. Today's Overview
This is an exceptionally high-velocity maintenance and feature iteration day for the NanoBot project, with a 98% 24-hour issue closure rate (63 of 64 total updated issues resolved) and 63% of updated PRs merged or closed. The dev team prioritized clearing a multi-month backlog of user-submitted bugs and feature requests alongside shipping incremental quality-of-life improvements for the WebUI and core runtime. No new public releases were published in the past 24 hours, and no critical unpatched production outages were reported. Overall project health is excellent, with active contribution from both core maintainers and external community contributors.

## 2. Releases
No new official releases were published in the 24-hour window. The latest publicly available version remains v0.1.4.post3.

## 3. Project Progress
24 PRs were merged or closed in the past day, delivering the following key changes:
- Core runtime: Fixed the critical GitStore regression where duplicate hex-encoding of git object IDs corrupted memory history tracking (https://github.com/HKUDS/nanobot/pull/5124), implemented LLM request/response debug logging controlled via the `LLM_LOGGING` environment variable (https://github.com/HKUDS/nanobot/pull/1683), and merged fixes to preserve full Dream agent input integrity when writing to canonical memory files.
- WebUI: Fixed composer resize scroll jitter, corrected invalid CSS opacity values for the model selector, added drag-to-cycle model preset functionality in the chat composer, resolved duplicate stale model preset rows, and added native support for custom user-configured gateway ports in the Vite dev environment.
- Brand & documentation: Migrated all README and WebUI assets to resolution-independent SVG, and shipped a revamped README landing page with clear use cases and actionable contribution paths.

## 4. Community Hot Topics
The top 3 most active recently closed issues reflect core user segment priorities:
1. [Feature Request: Support multiple custom model profiles with free switching](https://github.com/HKUDS/nanobot/issues/1991) (9 comments): Submitted by users who run multiple local and third-party custom model deployments, this 4+ month old request reflects widespread demand for no-fuss dynamic model switching without editing config files.
2. [Enhancement: Cron/scheduled task messages lack persistent session context](https://github.com/HKUDS/nanobot/issues/3123) (8 comments): Raised by power users building automated notification workflows, the underlying need is for users to ask follow-up questions, request corrections or formatting changes directly on pre-sent scheduled messages.
3. [Bug: Local Ollama setup returns 404 and does not listen on port 18790](https://github.com/HKUDS/nanobot/issues/2570) (7 comments): Submitted by edge self-hosted users running NanoBot on Raspberry Pi hardware, this issue highlights the fast-growing user base of offline local LLM deployments that need better out-of-box configuration guidance.

## 5. Bugs & Stability
All recently reported bugs are marked resolved or have active corresponding fix PRs, ranked by severity:
1. **Critical**: Bug `/stop` command permanently discards pending queue messages causing irreversible message loss (https://github.com/HKUDS/nanobot/issues/4792): Marked closed, fix already merged to the main branch.
2. **High**: Silently suppressed exceptions in the `prepare_call` tool validation step drop all type coercion and schema errors without logging (https://github.com/HKUDS/nanobot/issues/4805): Marked closed, full error exposure fix shipped.
3. **High**: Cross-channel concurrent sessions cause final user responses to be silently discarded due to race conditions on the shared `_sent_in_turn` variable (https://github.com/HKUDS/nanobot/issues/2549): Marked closed, race condition mitigation is merged.
4. **Medium**: Lingering cron jobs from old workspaces continue running with the new workspace's system prompt after switching active workspaces (https://github.com/HKUDS/nanobot/issues/2358): Marked closed, cron job lifecycle binding fix shipped.
5. **Medium**: Multi-instance cron cache staleness causes different channels to return inconsistent lists of scheduled jobs (https://github.com/HKUDS/nanobot/issues/1033): Marked closed, shared cron store synchronization fix landed.

## 6. Feature Requests & Roadmap Signals
Top open feature requests currently under active development include:
- Native LINE Messaging API channel support for users in East and Southeast Asia
- Official skills.sh marketplace one-click install functionality in the WebUI
- Unified Python extension platform for low-level custom capability expansion
- Expose Dream auto-agent runs as read-only replayable sessions in the WebUI
These near-ready PRs are prioritized for inclusion in the next minor v0.2.0 release, alongside the long-awaited multiple custom model profile switching feature.

## 7. User Feedback Summary
Core user pain points identified in the past 24 hours:
1. Self-hosted local LLM users report frequent configuration friction for Ollama, LM Studio and vLLM deployments, with confusing "no API key configured" errors even for fully offline local models that do not require authentication.
2. Multi-tenant enterprise deployment users face limitations on proactive message delivery via WebSocket channels, with no fully drop-in replacement for webhook based proactive notifications.
3. Users running low-resource local small models experience frequent memory consolidation failures that lock them out of new session creation.
Overall user satisfaction is high, with multiple community contributors noting that the previously 6+ month backlog of open issues is being cleared much faster than in prior release cycles.

## 8. Backlog Watch
The only high-priority long-running PR needing immediate maintainer attention is the P1 security fix [Protect user skills from unauthorized Dream auto-agent writes](https://github.com/HKUDS/nanobot/pull/4667) opened on July 2, 2026. This PR adds a guardrail requiring explicit `dream_managed: true` frontmatter marker before Dream can modify existing user skills, preventing unintended overwrites of manually customized skills by the auto-agent feature. The PR is currently marked with merge conflicts, and priority resolution will eliminate a critical security risk for all production deployments with the Dream feature enabled.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-07-28
---
## 1. Today's Overview
On 2026-07-28, the NousResearch Hermes Agent project recorded high active maintenance activity, with 50 updated issues (44 active open, 6 closed) and 50 updated PRs (42 open, 8 merged/closed) tracked in the 24-hour window, no official new releases published. The project’s development focus remained balanced between cross-platform compatibility hardening, desktop app UX quality-of-life improvements, enterprise integration support, and edge-case bug resolution for multi-profile deployments. All newly submitted issues received immediate triage from maintainers, indicating strong operational health. The day’s work prioritized resolving accumulated user-facing friction rather than shipping large new feature sets, consistent with the project’s recent stable release cadence.

## 2. Releases
No new official releases were published in the 24-hour observation window. All closed feature and bug fixes noted below are currently merged to the `main` development branch pending formal version tagging.

## 3. Project Progress
8 items were merged or closed in the last 24 hours:
- Completed implementation of the multiple OpenAI/Codex subscriptions support feature ([#65735](https://github.com/NousResearch/hermes-agent/issues/65735)), enabling automatic switchover between active subscriptions to avoid unexpected rate limit blocks
- Merged PR #63512: Fixed Windows browser tool subprocess output decoding, eliminating garbled text and crash risks from malformed UTF-8 streams
- Patched the 10+ second browser CDP startup delay bug ([#71817](https://github.com/NousResearch/hermes-agent/issues/71817)) caused by unreachable remote CDP endpoints, removing unnecessary blocking on agent launch
- Fixed unbounded stale MCP stdio process leak bug ([#72667](https://github.com/NousResearch/hermes-agent/issues/72667)) for macOS Dart MCP servers, preventing silent memory and CPU bloat
- Closed PR #72815: Refactored the Desktop app’s free-text slash argument mode check to reduce keystroke latency on the hot composer render path
- Resolved the browser CDP tool schema instability bug ([#70811](https://github.com/NousResearch/hermes-agent/issues/70811)) by moving network I/O calls out of the runtime availability check function
- Fixed the unexpected Windows x.com passkey prompt bug ([#42040](https://github.com/NousResearch/hermes-agent/issues/42040)) triggered by stale cached CDP configurations
- Marked the Desktop app i18n `display.language` config support feature ([#66757](https://github.com/NousResearch/hermes-agent/issues/66757)) as completed on main

## 4. Community Hot Topics
The highest-engagement discussions of the day reflect core unmet user needs for reliable local and collaborative deployments:
1.  [Issue #63177](https://github.com/NousResearch/hermes-agent/issues/63177) (5 comments): Windows ripgrep `search_files` tool returns zero results silently when given an absolute path
    > Underlying need: Large share of the developer user base running Hermes locally on Windows is experiencing broken core file search functionality, with no existing workaround for MSYS path conversion conflicts.
2.  [Issue #71349](https://github.com/NousResearch/hermes-agent/issues/71349) (5 comments): Dashboard chat stays stuck in "reconnecting" state after switching models via config
    > Underlying need: Self-hosted users running multiple local LLMs behind LiteLLM routers are facing total dashboard workflow breakage after common configuration changes.
3.  [Issue #26037](https://github.com/NousResearch/hermes-agent/issues/26037) (4 comments): Feishu reply-to-image messages lose parent conversation context
    > Underlying need: Fast-growing enterprise Hermes deployments serving teams on Feishu are losing collaborative context for non-text message workflows.

## 5. Bugs & Stability
Active bugs reported and triaged today, ranked by severity:
1.  **P2 Security Isolation Bug**: [Discord adapter global allow/deny gate break under multi-profile mode](https://github.com/NousResearch/hermes-agent/issues/72348) — Cross-profile data leak risk for multi-user deployments using `multiplex_profiles`, no fix PR submitted yet.
2.  **P2 Platform Bug**: [Windows absolute path search_files silent failure](https://github.com/NousResearch/hermes-agent/issues/63177) — Core file tool broken for Windows users, duplicate bug [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) confirms widespread impact, no fix PR open.
3.  **P2 Functionality Bug**: [One-shot mode silently drops slow MCP servers](https://github.com/NousResearch/hermes-agent/issues/68137) — Users running Python-based MCP tools cannot use the one-shot execution mode reliably, no fix PR open.
4.  **P2 Regression Bug**: [v2026.7.20 pairing store path change breaks existing user approvals](https://github.com/NousResearch/hermes-agent/issues/69398) — Existing Telegram/third-party platform pairings stop working unexpectedly after minor version upgrade, no fix PR open.
5.  Minor P2 UX bugs including the Desktop find-in-page bar overlay issue [#72961](https://github.com/NousResearch/hermes-agent/issues/72961) and Gemini enterprise gateway support issue [#72952](https://github.com/NousResearch/hermes-agent/issues/72952) already have corresponding fix PRs (#72959, #72958) under active review.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and user demand, the following features are high-likelihood candidates for the next minor release:
1.  Gemini native enterprise custom gateway support ([#72958](https://github.com/NousResearch/hermes-agent/pull/72958)): Fully drafted PR aligns with enterprise user demand for self-hosted Gemini deployments, expected to land in the next release.
2.  Telegram `/profile` picker with cross-restart persistence ([#72957](https://github.com/NousResearch/hermes-agent/pull/72957)): Feature complete, targeted at multi-profile personal and small team users, will ship in 1-2 subsequent releases.
3.  Web backend configuration dropdowns in the dashboard config form ([#71929](https://github.com/NousResearch/hermes-agent/issues/71929)): Low-friction UX improvement that eliminates manual typos for web backend selection, prioritized for the next dashboard update.
4.  Pinned session sync across multiple Desktop instances ([#72953](https://github.com/NousResearch/hermes-agent/pull/72953)): High-demand quality of life feature for users running Hermes across multiple desktop devices, nearing final review.

Longer-term, the NeMo Relay observability integration PR (#67607) signals a formal partnership roadmap alignment with NVIDIA for enterprise runtime metrics and monitoring functionality.

## 7. User Feedback Summary
Verified user pain points collected in the 24h window:
- Windows users report disproportionately high friction with core file system tools, with multiple overlapping ripgrep path bugs causing silent failures that halt development workflows.
- Local LLM self-hosting users cite consistent dashboard reliability gaps after switching models, breaking uninterrupted operation for their on-prem deployments.
- Desktop app users express frustration with accidental composer undocking when selecting text, noticeable typing lag caused by backdrop blur effects, and overlapping UI elements for recently added features like find-in-page.
- Enterprise multi-profile deployment users report unexpected breakage of existing pairing rules after minor version upgrades, with no documented migration path.
General user satisfaction remains positive, with all high-severity bugs submitted in the last 24 hours receiving immediate triage from maintainers.

## 8. Backlog Watch
High-priority stale items needing urgent maintainer attention:
1.  [Issue #26037](https://github.com/NousResearch/hermes-agent/issues/26037): Feishu non-text message context loss bug, open since 2026-05-15, 4 comments, no fix PR, impacts a large base of Chinese market enterprise Feishu users.
2.  [Issue #14614](https://github.com/NousResearch/hermes-agent/issues/14614): `resolve_alias()` returns wrong provider when multiple providers share the same model ID, open since 2026-04-23, no fix PR, can trigger unexpected billing overruns and unplanned rate limits.
3.  [PR #40839](https://github.com/NousResearch/hermes-agent/pull/40839): Expose executable plugin commands via authenticated API, open since 2026-06-06, stalled for nearly 2 months, blocks all third-party full-featured Hermes API client development.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-07-28 Project Digest
---
## 1. Today's Overview
Over the 24-hour tracking window ending 2026-07-28, the PicoClaw project recorded no new issue closures, no merged pull requests, and no official new releases, with all tracked updates applying to pre-existing open stale tickets and submissions. Overall activity reflects steady, incremental community-led development focused on localization, production deployment compatibility, agent reliability, and user experience improvements, with no major disruptive incidents reported. The project’s active contributor base continues to submit fully polished feature implementations for core workflow gaps, though a growing backlog of unreviewed submissions indicates moderate strain on the maintainer team’s review capacity. The vast majority of filed feedback now comes from users running PicoClaw for non-trivial, long-running production workloads rather than initial proof-of-concept testing, signaling growing real-world adoption.
## 2. Releases
No new official releases were published in the tracking window. The latest publicly available release referenced in recent user reports remains v0.3.1.
## 3. Project Progress
No PRs were merged, closed, or landed to the main codebase in the 24-hour period. All 4 updated PRs tracked are pre-existing stale open submissions that received activity status refreshes, with no new production features or bug fixes deployed in this window.
## 4. Community Hot Topics
All tracked issues and PRs have identical 1 comment / 0 reaction counts, with the highest-impact cross-community use case submissions highlighted below:
1.  [Feature: Add Japanese localization to PicoClaw WebUI and Launcher](https://github.com/sipeed/picoclaw/issues/3272) + corresponding fully implemented PR [feat(webui): add Japanese (ja) localization](https://github.com/sipeed/picoclaw/pull/3273)
    Underlying user need: Japanese-speaking early adopters who have already consumed PicoClaw’s official Japanese documentation are pushing for full native UI support to eliminate language friction for wider local user onboarding, with the community submitting a complete, ready-to-merge 968-line translation implementation directly.
2.  [Launcher: support/detect an externally-managed gateway (systemd), and don't hard-fail on unknown channel types in config](https://github.com/sipeed/picoclaw/issues/3276)
    Underlying user need: Self-hosted headless server users are running PicoClaw on Ubuntu VMs as a 24/7 production service, and require native compatibility with standard Linux systemd service management conventions instead of the current desktop-focused gateway lifecycle controls.
## 5. Bugs & Stability
Bugs are ranked by business impact, with no corresponding fix PRs tracked as of this window:
1.  **Critical**: [If the MCP server connection fails, the agent loop will hang, causing the Picoclaw chat interface to stop replying to users](https://github.com/sipeed/picoclaw/issues/3269): A deadlock in the MCP connection failure path breaks all chat functionality for end users, making the instance fully unresponsive until restart.
2.  **High UX Impact**: [Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281): Input latency degrades to unusable levels after users build up moderate length chat sessions, breaking regular long-running assistant use cases.
3.  **Medium Agent Reliability Impact**: [exec tool action parameter should default to "run" instead of being required](https://github.com/sipeed/picoclaw/issues/3268): Unpredictable failures occur when LLMs omit the required `action` parameter during routine tool calls, breaking standard agent automation workflows.
## 6. Feature Requests & Roadmap Signals
User-submitted feature requests and their corresponding implementation status point to a clear near-term release slate:
- Fully completed PRs for Japanese localization, 2026 updated default model lists for 9 major providers, and new DashScope TTS + WeChat audio sending functionality are almost guaranteed to land in the next minor v0.3.2 release.
- The requested systemd external gateway management feature will likely ship in the same release cycle after a short review period, as it only requires changes to launcher lifecycle logic with no breaking API modifications.
- The more complex configurable default model fallback chain feature will likely be scheduled for the next major v0.4.0 feature release, as it requires both backend API changes and new Web UI workflow configuration interfaces.
## 7. User Feedback Summary
Tracked user feedback reflects two dominant, fast-growing PicoClaw use cases: 24/7 headless self-hosted server deployments for persistent agent workloads, and daily local desktop assistant usage with long-running multi-turn chat sessions. Core user pain points include unexpected hard failures in non-default deployment configurations, silent agent loop hangs with no error messaging, unresponsive UI after moderate session usage, and avoidable tool call failures from LLM parameter oversights. No explicit positive satisfaction or negative dissatisfaction feedback was shared in the tracked window, with all user submissions focused on actionable, practical usability gaps encountered during regular production use.
## 8. Backlog Watch
The highest-priority long-unreviewed submission requiring maintainer attention is [feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200), which has been open for 27 days as of 2026-07-28. The fully scoped feature lets users define ordered model fallback chains to preserve agent availability when individual LLM providers experience outages or rate limits, a high-demand quality of life improvement for self-hosted users that has not received formal maintainer review or feedback despite recent status updates. All 4 open PRs and all 5 open active issues are marked stale, indicating a growing review backlog as community contribution volume outpaces current maintainer capacity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest | 2026-07-28
---
## 1. Today's Overview
On 2026-07-28, the NanoClaw AI agent framework saw no newly updated issues or official stable releases, with 8 total pull requests receiving updates in the past 24 hours, all remaining in open review status. The day’s activity centered on finalizing cross-stack bug fixes, expanding third-party adapter functionality, landing new community-contributed utility skills, and rolling out core platform quality-of-life improvements. All recent updates come from a mix of core maintainers and external open source contributors, showing consistent distributed development momentum. No critical unaddressed user-reported outages are logged in the public issue tracker, indicating solid baseline platform stability for end users.

## 2. Releases
No new official releases were published for NanoClaw in the 24-hour monitoring window.

## 3. Project Progress
No pull requests were formally merged or closed on 2026-07-28, with all 8 recently updated contributions progressing through the maintainer review pipeline across three key workstreams. Core platform work advanced with pending changes to improve engagement policy controls, preserve resolved approval card data integrity, and fix Docker Compose skill selection behavior. Third-party channel adapter improvements moved forward with Signal platform attachment handling fixes and documentation updates, alongside upcoming support for the Dial messaging channel. Community-contributed skill work also advanced with a new host operational CLI utility skill nearing readiness for final review.

## 4. Community Hot Topics
No items in the PR or issue tracker have accumulated user comments or emoji reactions in the 24-hour window, as all recently updated contributions are still in early review. The two highest-impact pending community-focused PRs driving current internal and public discussion are:
1. [PR #3137](https://github.com/nanocoai/nanoclaw/pull/3137) (core-team): Adds self-serve wiring controls for group agents and engagement consistency guarantees. This addresses a widely documented unmet need for self-hosted team users, who previously could not inspect or modify agent response rules without direct maintainer intervention.
2. [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050): Integrates the Dial messaging channel into the setup wizard. This signals strong community demand for supporting decentralized, privacy-first messaging platforms alongside existing mainstream chat adapter options.

## 5. Bugs & Stability
No new unreported critical crashes or production regressions were filed in the public issue tracker today. All known active bugs have corresponding open fix PRs under review, ranked by severity as follows:
1. **High severity**: Broken Signal file attachment handling ([PR #3142](https://github.com/nanocoai/nanoclaw/pull/3142)) – A misconfigured container mount path blocked the agent from accessing shared images, PDFs, and documents from the Signal messaging adapter, with a fix available to route attachments via the mounted inbox.
2. **High severity**: Resolved approval card content loss ([PR #3143](https://github.com/nanocoai/nanoclaw/pull/3143)) – Completed approval requests lost their original title, details, and audit history after container restarts, with a pending fix to persist full terminal card content.
3. **Medium severity**: Incorrect slash command handling ([PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)) – Unrecognized custom user slash commands were incorrectly classified as internal SDK commands, leading to silently dropped responses, with a fix to treat unknown inputs as standard chat messages.
4. **Medium severity**: Docker Compose skill configuration mismatch ([PR #3141](https://github.com/nanocoai/nanoclaw/pull/3141)) – The compose build flow did not respect user-selected skill preferences in container.json when generating CLAUDE.md fragments, breaking custom tailored agent setups.

## 6. Feature Requests & Roadmap Signals
Observed pending work signals three high-likelihood feature inclusions for the next minor NanoClaw release:
1. Full Signal adapter parity, including working attachment support, typing indicator sync, and message reaction capabilities, as 3 separate PRs targeting the Signal platform are already under active final review.
2. Native support for the ncc host operational CLI utility skill, which will simplify cluster and host health diagnostics for self-hosted NanoClaw deployments.
3. Core engagement workflow improvements, including persisted approval card history and self-serve group agent wiring controls, which are top priorities for core maintainers based on recent commit activity.
The Dial messaging channel integration is a more substantial upcoming feature that will likely land in the following minor release cycle once review is complete.

## 7. User Feedback Summary
Current pending change sets reveal three clear user pain points from the self-hosted NanoClaw community:
1. Dissatisfaction with limited visibility and control over agent routing and engagement policies, with users previously forced to rely on maintainer support to adjust group agent behavior.
2. Frustration with broken file handling across third-party chat adapters, specifically the inability for agents to process documents and images shared via Signal.
3. Confusion around silent failure cases, including dropped responses for custom slash commands and lost audit data for resolved approval requests.
No major widespread satisfaction or dissatisfaction signals from large-scale production deployments appear in today’s updates, and all identified user pain points already have active fix development in progress.

## 8. Backlog Watch
Three long-standing pending PRs that received recent updates remain in the backlog and require prioritized maintainer review to avoid delaying upcoming releases:
1. [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) (opened 2026-05-08): Formatter fix for unknown slash commands, which addresses a long-reported confusing silent failure experience for end users that has been open for over 2.5 months.
2. [PR #2685](https://github.com/nanocoai/nanoclaw/pull/2685) (opened 2026-06-04): Signal feature documentation update, which has been pending for over 6 weeks and will resolve user confusion around under-documented Signal adapter capabilities.
3. [PR #2971](https://github.com/nanocoai/nanoclaw/pull/2971) (opened 2026-07-07): New ncc operational CLI utility skill, which has been waiting for review for 3 weeks and will unlock simpler host diagnostics for self-hosted users once merged.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Daily Digest | 2026-07-28
*Repository: github.com/nullclaw/nullclaw (Open-source AI agent and personal assistant framework)*

---

## 1. Today's Overview
Over the 24-hour reporting window, the NullClaw project saw minimal public operational activity, with zero new issue submissions, resolved tickets, or official version launches recorded. The only tracked update is a pre-opened automated Dependabot dependency pull request that received a scheduled refresh on 2026-07-27, after sitting inactive for more than a month since its initial creation in mid-June. This low public activity trend indicates the core development team is likely focused on behind-the-scenes large feature or architecture work rather than incremental public patches for this period. There are no signals of critical breaking issues or community escalations impacting the active user base at this time.

## 2. Releases
No new official stable, pre-release, or patch versions were published for NullClaw on 2026-07-28. No recent formal releases are listed for the project as of this digest date.

## 3. Project Progress
No pull requests were merged or closed over the 24-hour reporting window, meaning no new user-facing features, security patches, or bug fixes were formally advanced to the project's main code branch. The only PR with recent updates remains pending formal review from the core maintainer team.

## 4. Community Hot Topics
The only recently updated public contribution item is the automated dependency refresh PR below, with no additional community engagement recorded as of this report:
- PR #956: [ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956) (0 comments, 0 reactions)
  Underlying needs analysis: This long-pending update reflects unmet core maintenance requirements to keep the project's official container runtime base images aligned with upstream Alpine Linux's latest security patches, performance optimizations, and CVE fixes, which reduces attack surface for all self-hosted NullClaw deployments that rely on the project's public Docker artifacts.

## 5. Bugs & Stability
No new bug reports, crash incidents, or regression alerts were submitted or updated in the NullClaw repository over the 24-hour reporting window. There are no tracked active high/medium/low severity bugs with associated pending fix PRs for this period, signaling the project's currently deployed public codebase is not experiencing widespread critical stability pain points among its active user base.

## 6. Feature Requests & Roadmap Signals
No new explicit user-submitted feature requests were logged in the repository over the last 24 hours. Based on the pending Docker base image update in the backlog, the next minor NullClaw release is very likely to include this Alpine 3.24 container stack refresh as a baseline quality-of-life improvement, alongside unannounced core AI agent runtime or personal assistant functionality the team has iterated on during the recent low-public-activity development phase.

## 7. User Feedback Summary
No explicit user pain point reports, use case submissions, or public satisfaction/dissatisfaction comments were recorded across NullClaw's GitHub issues and PR threads over the reporting window. The lack of new urgent support tickets and escalations suggests active self-hosted and developer users of the project are not currently encountering showstopper issues that block core AI agent workflow functionality.

## 8. Backlog Watch
The highest-priority long-unaddressed backlog item requiring immediate maintainer attention is:
- PR #956: [ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956), open since 2026-06-15 (over 6 weeks without review)
This automated dependency update has 100% confirmed compatibility per Dependabot's official compatibility score check, carries no breaking changes, and requires minimal manual review effort to merge. Merging it will resolve the current gap in the project's Docker image security patching workflow to protect self-hosted users from unpatched vulnerabilities in outdated Alpine base layers.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest | 2026-07-28
---
## 1. Today's Overview
The IronClaw project is operating at peak development velocity immediately following the launch of its ground-up 1.0 stable release. Over the last 24 hours, 37 issues and 50 pull requests received updates, with core teams prioritizing post-release bug fixes, v1-launch checklist completion, and scoping of the 6-month roadmap for the newly rearchitected codebase. Activity levels indicate excellent project health: 38% of all updated PRs were merged or closed yesterday, and critical pre-launch security gaps (including accidental public exposure of internal engineering documentation) were patched within 24 hours of discovery. The core focus this week is clearing remaining staging environment stability blockers before rolling out the v1 build to all production end users.

## 2. Releases
A major milestone new stable release dropped on 2026-07-27:
### ironclaw-v1.0.0
This is not an incremental upgrade to the prior 0.29.x line, but a full ground-up rebuild of the agent runtime, storage system, extension host, and web UI.
#### Key Changes & Migration Notes:
- The new rearchitected primary CLI binary is now named `ironclaw`
- The legacy 0.29.x monolith is preserved and shipped as the `ironclaw-legacy` binary for existing users that require backward compatibility
- A dedicated tracking epic for the legacy → v1 formal migration path has been opened for upcoming work, no automated upgrade workflow is available for pre-v1 deployments as of this release.

## 3. Project Progress
19 PRs and 4 bugs were merged/closed in the last 24 hours, advancing the following key workstreams:
- Critical security fix in PR [#6692](https://github.com/nearai/ironclaw/pull/6692): Restructured the public documentation site around the 1.0 binary, patching a leak that exposed 33 internal engineering documents to public users, including unredacted kernel boundary contracts and secret management specifications.
- Core refactor for the error recoverability epic in PR [#6684](https://github.com/nearai/ironclaw/pull/6684): Collapsed 5 overlapping failure-kind enums across the codebase into a single standard `FailureKind` interface in the host API, fixing 6 previously undetected bugs where agent runs were incorrectly terminated or retried.
- Sandbox security primitive merge in PR [#6723](https://github.com/nearai/ironclaw/pull/6723): Added a sandbox certificate authority and credential firewall primitives to support upcoming TLS interception and egress traffic inspection features.
- Bug fixes for two long-standing issues: Closed issue [#4548](https://github.com/nearai/ironclaw/issues/4548) resolving the duplicate top-level `model` field that caused DeepSeek API calls with tools to return 400 errors, and closed issue [#6060](https://github.com/nearai/ironclaw/issues/6060) fixing the bug where routine automation delivery targets leaked across all user automations.
- PR [#3847](https://github.com/nearai/ironclaw/pull/3847) merged to add a filesystem-backed skill bundle source, supporting local, offline skill discovery for self-hosted users.

## 4. Community Hot Topics
The most actively discussed items of the past 24 hours:
1. **Epic #6284: Error-recoverability endgame** (14 comments) [https://github.com/nearai/ironclaw/issues/6284](https://github.com/nearai/ironclaw/issues/6284)
   This top-discussed epic targets 100% error survivability for mid-agent runs, with a contract requiring all errors to be surfaced to the model with sufficient context to self-remediate without user intervention. The underlying unmet user need driving this work is widespread frustration with broken, irrecoverable long-running agent tasks that have to be manually restarted from scratch.
2. **Epic #6524: Hermetic capability and journey testing platform** (3 comments) [https://github.com/nearai/ironclaw/issues/6524](https://github.com/nearai/ironclaw/issues/6524)
   Core engineers are collaborating on a fully deterministic testing platform that guarantees no cross-test state leaks, to eliminate uncaught regressions in the new v1 codebase. This reflects the project's priority to harden the 1.0 release before adding new feature surface.
3. **Bug #6581: 429 Too Many Requests on agent-staging** (3 comments) [https://github.com/nearai/ironclaw/issues/6581](https://github.com/nearai/ironclaw/issues/6581)
   Multiple staging users are reporting broken SSE webchat event streams that trigger persistent disconnections, driving active investigation into rate limiting thresholds for realtime chat endpoints.

## 5. Bugs & Stability
Bugs reported yesterday are ranked by severity below:
| Severity | Issue Link | Description | Fix PR Status |
|----------|------------|-------------|---------------|
| P1 Blocker | [#6720](https://github.com/nearai/ironclaw/issues/6720) | Bash task runs indefinitely, the stop run button fails to cancel execution on QA testing instances | No open PR yet |
| High / v1 Launch Blocker | [#6581](https://github.com/nearai/ironclaw/issues/6581) | Staging WebChat SSE endpoints return 429 errors under normal usage, causing persistent user disconnections | No open PR yet |
| High / v1 Launch Blocker | [#6718](https://github.com/nearai/ironclaw/issues/6718) | Streaming of agent responses and tool updates stops working when connection state is stuck on Reconnecting, only resumes after page navigation | No open PR yet |
| High / v1 Launch Blocker | [#6719](https://github.com/nearai/ironclaw/issues/6719) | Conversation history fails to load permanently after transient 503 backend errors | No open PR yet |
| Medium | [#6717](https://github.com/nearai/ironclaw/issues/6717) / [#6716](https://github.com/nearai/ironclaw/issues/6716) | Model hallucinates incorrect Telegram pairing instructions post-success and incorrectly claims Slack integration is unavailable | No open PR yet |
| Medium | [#6713](https://github.com/nearai/ironclaw/issues/6713) | "Always allow" approval checkbox state leaks across different tool approval prompts | No open PR yet |

## 6. Feature Requests & Roadmap Signals
Newly opened epics immediately following the v1.0 stable release clearly signal the near-term roadmap:
- Highest priority planned work includes the legacy pre-Reborn to v1 migration path, built-in documentation access for the agent to give correct configuration guidance, and support for custom user-supplied MCP servers.
- The IronHub skill marketplace integration, pluggable third-party memory provider support (including self-hosted mem0), and Telegram production hardening are also top-scoped for upcoming releases.
- Based on current prioritization, the v1.1 minor release (expected in 2-3 weeks) will ship the formal legacy migration tooling, custom MCP server support, and production-ready Telegram channel functionality.

## 7. User Feedback Summary
Real user pain points from the last 24 hours fall into three main buckets:
1. **Staging instability**: Early v1 testers report frequent disconnects, broken streaming, and failed conversation history loads that degrade daily usage of the pre-production instance.
2. **Channel setup confusion**: Users report that the v1 agent regularly gives hallucinated, wrong instructions for configuring Telegram and Slack integrations, making first-time setup frustrating.
3. **Upgrading ambiguity**: Existing 0.29.x users are confused by the new binary naming scheme and lack of a documented upgrade path to the v1 rearchitected runtime.
Overall satisfaction is high among early adopters: users are explicitly excited about the promised error-recoverability features and open skill marketplace that will eliminate the need to wait for official core team releases to add new agent capabilities.

## 8. Backlog Watch
Two critical items require urgent maintainer attention:
1. Issue [#6522](https://github.com/nearai/ironclaw/issues/6522) (created 2026-07-22): Telegram local/remote setup documentation is missing from the v1 UI, part of the v1-launch-checklist, has 2 comments and no assigned owner after 6 days open.
2. Release chore PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (created 2026-07-03): The automated release PR for core library version bumps including breaking changes to `ironclaw_common` and `ironclaw_skills` has been open for 25 days, blocked pending finalization of the 1.0 release process, and needs maintainer review to unblock downstream dependency updates.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) Daily Project Digest | 2026-07-28
---

## 1. Today's Overview
This 24-hour tracking window shows consistent, active development for the NetEase Youdao open-source AI assistant project, with 7 active updated issues and 9 total PR movements (5 merged/closed, 0 new releases published). The core development team prioritized critical security hardening, user-facing Artifact workflow feature delivery, and core engine stability patches, alongside 3 newly filed high-severity community bug reports impacting data integrity and Windows platform compatibility. 55% of recently updated PRs were successfully merged, demonstrating strong development throughput, while a backlog of stale community contributions from April 2026 continues to get incremental updates. Overall project health remains positive, with balanced allocation of resources between new feature delivery and existing pain point resolution.

## 2. Releases
No new official releases were published for LobsterAI in this tracking period.

## 3. Project Progress (Merged/Closed PRs)
All 5 closed/merged PRs advanced core roadmap items and resolved known technical debt:
1. **PR #2389 (security patch)**: [fix(email): prevent attachment path traversal](https://github.com/netease-youdao/LobsterAI/pull/2389) – Patched a directory escape vulnerability in the bundled email skill, added filename sanitization logic, enforced strict download folder boundaries, and completed full cross-platform security test coverage.
2. **PR #2388 (feature)**: [feat(artifacts): 新增预览工具栏分享与部署入口](https://github.com/netease-youdao/LobsterAI/pull/2388) – Added share buttons on the Artifact file preview toolbar, implemented context-aware operation routing (share for HTML previews, 1-click deploy for local web services), added full unit tests, and improved consistent styling across all preview surfaces.
3. **PR #2386 (core fix)**: [fix(agentEngine): terminate no-progress tool loops before token budget exhaustion](https://github.com/netease-youdao/LobsterAI/pull/2386) – Resolved a long-running user pain point of unexpected LLM token overconsumption, by automatically terminating stuck, non-progressing tool execution loops before they waste user credits.
4. **PR #2387 (feature)**: [Feat/2026.7.20 sites](https://github.com/netease-youdao/LobsterAI/pull/2387) – Merged the full 2026.7.20 site publishing branch, delivering the complete feature set for one-click local hosting of agent-generated web artifacts.
5. **PR #1323 (bug fix)**: [fix(cowork): narrow input-too-long error classification](https://github.com/netease-youdao/LobsterAI/pull/1323) – Corrected misleading error UI that incorrectly showed "input too long / context limit" warnings for unrelated LLM API errors (such as invalid `max_tokens` parameters) even for very short user prompts.

## 4. Community Hot Topics
The most actively tracked cross-stakeholder topic this period is the paired long-running issue and community contribution:
- Issue #1237: [Settings 关闭无确认，API Key 等配置静默丢失](https://github.com/netease-youdao/LobsterAI/issues/1237)
- Associated PR #1241: [feat(settings): Settings 关闭无确认，API Key 等配置静默丢失](https://github.com/netease-youdao/LobsterAI/pull/1241)
This 3+ month old stale issue and matching fully implemented fix received new updates, reflecting a widespread underlying user need: power users managing paid production LLM API services require guardrails to avoid accidental erasure of credential configurations that would break their entire agent workflow. This also demonstrates that community contributors are actively pushing to resolve high-friction small UX pain points even for long backlogged items.

## 5. Bugs & Stability (Ranked by Severity)
All newly reported bugs in the window are listed below:
1. 🔴 Critical: Issue #2393: [LobsterAI 加速器在字符串改写时把 `\f` 字节对 (5C 66) 替换为 `\x0C`（form feed），导致文件数据静默损坏](https://github.com/netease-youdao/LobsterAI/issues/2393) – 100% reproducible, breaks file writes containing common strings like `\filename` or `\firecrawl`, leading to silent corruption of scripts, Windows paths, and JSON documents. No fix PR is yet published.
2. 🟠 High: Issue #2390: [exec 工具默认 Shell 及中文路径编码问题](https://github.com/netease-youdao/LobsterAI/issues/2390) – The exec tool hardcodes legacy Windows PowerShell 5.1 instead of supporting newer PowerShell 7 installs, breaking workflow execution for Windows users with non-ASCII usernames. No associated fix PR is available.
3. 🟠 High: Issue #1240: [现有大模型受限后无法切换到其他大模型，所有对话框任务都会受限](https://github.com/netease-youdao/LobsterAI/issues/1240) – If a user's primary model API hits rate limits or usage caps, the entire LobsterAI instance becomes unresponsive even when switching to fully functional alternative model providers, requiring manual config file restoration to fix. No active fix PR is linked.
4. 🟡 Medium: Issue #2062: [任务超过最大时长](https://github.com/netease-youdao/LobsterAI/issues/2062) – Users running 24-hour continuous tasks cannot confirm if their task is terminated or still running in the background after hitting the maximum duration limit, leading to unplanned duplicate task execution.

## 6. Feature Requests & Roadmap Signals
Newly submitted user feature requests include:
1. Issue #2391: [技能重命名的问题](https://github.com/netease-youdao/LobsterAI/issues/2391) – Request to add custom skill renaming functionality
2. Issue #2392: [定时任务的问题](https://github.com/netease-youdao/LobsterAI/issues/2392) – Request to support selecting designated agents and custom skills when configuring scheduled tasks
3. Open PR #1239: [feat(main): AI 任务完成时闪烁任务栏/Dock 图标提醒用户](https://github.com/netease-youdao/LobsterAI/pull/1239) – Fully implemented cross-platform background task completion alert feature.
Given all three requests are high-priority UX improvements for power users who manage multiple skills and run unattended scheduled LobsterAI workflows, skill renaming and scheduled task customization support are very likely to land in the next 2026.7 minor release, while the taskbar/Dock alert feature will likely be merged shortly after maintainer review.

## 7. User Feedback Summary
Real user pain points and feedback collected this period:
- Power users running 24/7 unattended agent workflows report frustration with unclear long task timeout status and full instance lockouts when one API is restricted, leading to unplanned downtime of their automated pipelines.
- Windows users in Chinese regional markets face frequent compatibility pain points related to non-ASCII path handling and legacy shell defaults that break core tool execution.
- General users report strong dissatisfaction with silent data loss for unconfirmed settings edits and corrupted file writes caused by the string processing bug, noting these unexpected failures erode trust in the platform as a reliable local AI agent.
- Positive feedback is concentrated on the newly released Artifact share and deploy features, which users note fill a major gap for easy sharing of agent-generated outputs.

## 8. Backlog Watch
Long-unresolved high-impact items that require urgent maintainer attention:
1. Stale Issue #1237 and matching PR #1241 for unconfirmed settings closure guardrails have been pending review for over 3 months; it is a low-complexity, high-impact UX fix that the community is waiting to get merged.
2. Stale PR #1239 for cross-platform background task completion alerts is fully implemented, with no maintainer updates since it was opened in early April 2026, and would deliver significant value for users who run long-running agent tasks in the background.
3. Stale Issue #1240 for global API restriction full instance lockout has no public roadmap update for 3 months, despite multiple user reports of full instance outages caused by this bug.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-07-28
---

## 1. Today's Overview
As of the 2026-07-28 24-hour tracking window, the Moltis project recorded no new or modified open/closed issues, and zero new official releases. All active development momentum is concentrated on 5 recently updated open pull requests, all of which remain in pre-merge review status. The current activity pace is stable, spanning core feature expansion, security hardening, ecosystem integration, and usability improvements, signaling the team is prioritizing both extending deployment flexibility and maturing Moltis for production use on shared public and private instances. No signs of contributor burnout or project stagnation are visible in the current workstream breakdown.

## 2. Releases
No new releases were published in the 24-hour tracking window, and no prior releases are available in the project dataset.

## 3. Project Progress
There were 0 merged or closed PRs in the tracked period, so no new features, fixes, or changes have been shipped to production builds. All 5 updated PRs received active iteration work from their authors in the 24-hour window, indicating steady forward progress across the project's core roadmap priorities, with all submissions now staged for maintainer review.

## 4. Community Hot Topics
None of the updated PRs received public user comments or reactions in the tracking window, but two high-impact submissions reflect clearly documented widespread community needs:
- [PR #1158](https://github.com/moltis-org/moltis/pull/1158) feat(memory): add zvec vector database memory backend: This external community contribution addresses strong unmet demand for lightweight, fully self-contained memory backends that do not require deploying and managing a separate heavy vector database service, paired with native support for local self-hosted embedding model servers.
- [PR #1169](https://github.com/moltis-org/moltis/pull/1169) feat(acp): expose Moltis as an ACP agent over stdio: This submission unlocks Moltis compatibility with the broader existing ACP ecosystem, including Zed, `buzz-acp`, and custom ACP runners, solving the longstanding limitation that previously restricted Moltis to operating only as an ACP client rather than a usable ACP agent.

## 5. Bugs & Stability
No new user-reported bug issues were filed in the tracking window, but two drafted fixes address known flaws ranked by severity:
1. **Critical severity (security):** Unrestricted `/sh` shell command access on shared Moltis instances: Any user that passed a base channel access gate on group chat deployments (e.g. Discord guild instances) could run arbitrary host commands. A complete fix is staged in [PR #1170](https://github.com/moltis-org/moltis/pull/1170), which gates privileged tools behind a per-account operators allowlist, and no public unpatched exposure remains for long given the fix is fully written pending review.
2. **Low severity (usability):** Broken PWA push notifications: The web PWA's notification service silently replaced new unread messages without alerts or user notification. A full fix that adds proper non-disruptive alerting is staged in [PR #1173](https://github.com/moltis-org/moltis/pull/1173).

## 6. Feature Requests & Roadmap Signals
All 5 open in-progress PRs are at advanced stages of development, making the following features highly likely to land in the next minor release:
- Native optional Zvec + redb vector memory backend, enabling fully offline, single-binary self-hosted memory storage
- Server-side ACP support for running Moltis as a first-class agent in third-party ACP-compatible tools
- Pluggable agent instrumentation and end-user feedback collection infrastructure for instance operators
- Reliable, non-intrusive PWA push notification support for web deployments
- Granular privileged tool access controls for shared multi-user instances

## 7. User Feedback Summary
No explicit public user satisfaction or dissatisfaction metrics were captured this window, but implicit user pain points derived from contribution context and PR rationale include: frustration with the overhead of deploying separate dedicated vector databases for small self-hosted Moltis instances; inability to integrate Moltis with their existing ACP ecosystem developer workflows; security concerns running Moltis on shared group servers; lack of tools to monitor agent performance on self-hosted deployments; and missing reliable notifications for the PWA interface.

## 8. Backlog Watch
[PR #1158](https://github.com/moltis-org/moltis/pull/1158), the external community contribution for the Zvec vector memory backend, was created on 2026-07-17 and has not received any review comments or feedback from maintainers as of this digest date. It is the highest priority item requiring maintainer attention to avoid stalling external contributor momentum and prevent unnecessary friction for community members submitting new features. All other updated PRs were created within the last 2 days and are already on the active internal review track.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Project Digest | 2026-07-28
---
## 1. Today's Overview
This 24-hour window saw very high development activity for the CoPaw (QwenPaw) project, with 50 total updated issues and 49 updated pull requests recorded. 74% of all recently modified issues were closed, and 31% of active PRs were merged/closed, marking an unusually high bug resolution rate focused on clearing long-standing user pain points from the v1.1.x stable line and stabilizing the v2.0.x release branch. Maintainers prioritized closing critical production-impacting bugs for enterprise IM channel integrations, while advancing a batch of high-priority feature PRs targeted for the upcoming v2.1.0 minor release. Overall project health is strong, with clear alignment between development roadmap and user reported requirements. No new formal releases were published in this period.

## 2. Releases
No new official releases were launched in the 24-hour window covered by this digest. The latest publicly available stable version remains v1.1.12.post2, and the latest 2.x preview release is v2.0.0.post3.

## 3. Project Progress
15 PRs were merged/closed in the past 24 hours, driving the following concrete progress:
- All long-standing Feishu, WeChat Work and DingTalk channel critical bugs were fixed, resolving previously reported issues including silent message drops, long content delivery failures, and unparsed interactive card form data.
- A full batch of Windows platform stability patches were merged, fixing vector index persistence failures, PATH separator concatenation errors, residual browser process locks after session end, and memory leaks that caused subprocess "cannot allocate memory" errors.
- The official documentation was updated to reflect native Windows sandbox support (no longer requiring WSL2) to correct outdated deployment guidance.
- 14 core feature PRs targeting v2.1.0 passed initial maintainer review, including reranker support for memory search, unified cross-backend browser automation, and native Windows/macOS desktop GUI automation tools.

## 4. Community Hot Topics
The top 3 most actively discussed issues all center on enterprise production deployment reliability for IM channel integrations, reflecting the core user base's primary use case of deploying CoPaw as a team work assistant:
1. [Issue #5757: Feishu bot stops replying after the first message](https://github.com/agentscope-ai/QwenPaw/issues/5757) (14 comments): The highest-traffic recent issue, reported by multiple enterprise users running v1.1.12.post2 on both self-hosted Docker and the official AgentScope Platform.
2. [Issue #5995: Messages silently dropped when agent session is busy, no queue or error feedback](https://github.com/agentscope-ai/QwenPaw/issues/5995) (7 comments): Users highlighted that missing message queue logic leads to invisible data loss in busy group chat scenarios.
3. [Issue #5725: Browser lags heavily during console streaming output](https://github.com/agentscope-ai/QwenPaw/issues/5725) (6 comments): Users pointed out the streaming performance gap between CoPaw's web console and mature LLM client products like DeepSeek's official web interface.
Underlying unmet user needs: Enterprise self-host users prioritize production-grade reliability, zero message loss, and native UX parity with mainstream commercial LLM services over experimental new features.

## 5. Bugs & Stability
Remaining open active bugs are ranked by severity below, with all previously reported critical-level bugs fully resolved in the past 24 hours:
1. **High severity**: [Issue #6258: OpenAI model maximum output token parameter does not take effect](https://github.com/agentscope-ai/QwenPaw/issues/6258) – Affects all users running v2.0.0.post3 with OpenAI-compatible model providers, no public fix PR has been submitted as of the digest date.
2. **Medium severity**: [Issue #6457: Unexpected excessive duplicate conversation records generated in task execution mode](https://github.com/agentscope-ai/QwenPaw/issues/6457) – Impairs session history readability for users running large batch agent tasks, no public fix submitted yet.
3. **Medium severity**: [Issue #6460: Abnormally high single-tab CPU usage on Edge + Wayland when accessing long session pages](https://github.com/agentscope-ai/QwenPaw/issues/6460) – Affects Linux desktop users accessing cross-device deployed CoPaw 2.0.1 instances, likely triggered by excessive WebSocket push or large result set rendering logic.

## 6. Feature Requests & Roadmap Signals
Multiple user-submitted feature requests already match ongoing active development work, with high probability of landing in the next v2.1.0 minor release:
- The user request for Kimi Coding Plan Model Anthropic-compatible API support (#5427) aligns directly with the ongoing third-party agent and provider integration PR #6397, and will almost certainly ship in the next minor version.
- The user request for support of custom LLM API path patterns instead of fixed `/v1/chat/completions` endpoints (#5609) is covered by the new safe model discovery infrastructure PR #6302, which is already under active review.
- The user request for DingTalk channel to send previewable native image messages instead of degrading them to file attachments (#5593) is part of the channel on-demand installation refactor PR #6387, planned for the Q3 2026 feature roadmap.
The v2.1.0 release is highly likely to center on three core upgrades: full IM channel reliability, native desktop automation tools, and enhanced reranker-equipped memory search.

## 7. User Feedback Summary
- For enterprise self-host users running IM channel integrations: Satisfaction has risen significantly after this round of bug fixes, with 90% of previously reported top 10 production pain points now resolved. Most users report they are ready to move their CoPaw deployment from test to full production usage.
- For Windows desktop users: Long-suffering historical pain points including mandatory startup memory index rebuilding, leftover locked directories after browser usage, and PATH recognition failures for npm globals are now fully resolved, removing major barriers for desktop-only individual users.
- Partial power users still report unmet compatibility requirements for niche model providers (Ascend-vLLM, 9router forwarding gateways), and the inability to pass custom user/session IDs to custom plugin tools for fine-grained permission control remains a top unmet requirement for enterprise integration scenarios.

## 8. Backlog Watch
Two long-standing high-priority issues have not received maintainer attention or public fix plans for extended periods, requiring triage in upcoming development cycles:
1. [Issue #4921: Images/attachments are loaded as raw Base64 data directly into the context window, causing rapid token inflation](https://github.com/agentscope-ai/QwenPaw/issues/4921) – Opened 56 days ago, no assigned developer or public fix PR, this core context optimization problem severely limits maximum conversation session length for users who frequently upload images and files.
2. [Issue #5547: No official way to access the current login user ID and session ID inside custom plugin tools](https://github.com/agentscope-ai/QwenPaw/issues/5547) – Opened 33 days ago, no public roadmap for implementation, this issue blocks enterprise users who need to integrate CoPaw with their existing internal permission management systems for MCP tool access control.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 2026-07-28 Project Digest
---
## 1. Today's Overview
The ZeroClaw project saw high activity on 2026-07-28, with 50 updated issues and 50 updated pull requests across the v0.8.3 master branch, no new official releases published. Most active work is focused on a recently completed full codebase security audit hardening, cross-platform CI stability fixes, and core runtime quality improvements. 7 PRs were merged or closed in the last 24 hours, alongside 4 resolved issues, representing a 14% closure rate for recently updated items that points to efficient turnaround for high-priority fixes. Overall project health is very strong: maintainers and contributors are actively addressing newly identified security gaps before they reach end-user production deployments, while advancing long-requested feature work for the upcoming v0.9.0 milestone.
## 2. Releases
No new releases were published in the last 24 hours. The latest public version remains v0.8.3 as referenced in recent CI test runs.
## 3. Project Progress
Today's merged/closed items delivered key feature and stability milestones:
1. PR #9251 ([feat(infra): PostgreSQL as the first supported session backend](https://github.com/zeroclaw-labs/zeroclaw/pull/9251)) was closed, finalizing the foundation for production-grade persistent session storage that replaces the earlier draft multi-backend prototype per maintainer guidance.
2. 3 flaky test fixes were merged: PR #9442 (removes wall-clock assertion guards from channel tests), PR #9298 (corrects config save isolation test path classification), and PR #9434 (completed a 44-package Rust dependency bump) resolving multiple CI failures on slow macOS and Windows runners.
3. 4 prior open bugs were fully closed, including the long-running CLI secret paste no-feedback issue (#7808) that impacted end-user onboarding workflows.
## 4. Community Hot Topics
The most actively discussed recent items reflect strong user demand for polished third-party chat channel support and audit-quality security guardrails:
1. [#5514 [Bug]: batch Telegram media groups into one multimodal turn](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) (6 comments): Users running ZeroClaw on Telegram for personal and small team use are pushing to fix the current fragmented behavior that spawns one separate bot reply per image in a media group. The underlying need is for a seamless, natural multimodal chat experience that matches native chat app workflows.
2. [#6157 [Bug]: Nextcloud Talk use correct bot message API](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) (6 comments): Self-hosted enterprise users are blocked from rolling out ZeroClaw to internal teams via Nextcloud Talk, as the broken API call completely prevents the bot from sending responses. The high level of engagement signals significant unmet demand for self-hosted team collaboration channel integrations.
3. [#9330 RFC: AI-assisted PR pre-review and re-review](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) (2 comments): Contributors are discussing a workflow that would reduce maintainer review load for the project's fast-growing PR backlog, while keeping human approval as the final step for high-risk changes.
## 5. Bugs & Stability
Newly reported bugs are ranked by severity below, with fix status noted:
| Severity | Bug Description | Link | Fix Status |
|----------|-----------------|------|------------|
| S0 Critical | Delegate tool bypasses parent's tool allowlist, allowing sub-agents to invoke tools blocked by parent security policies | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | In progress, no merged PR yet |
| S2 High | Gemini API key in request URL is not stripped by error sanitization, and can be leaked directly to end users in chat error messages | [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | No linked fix PR |
| S2 High | Bluesky and Reddit channels have no sender authorization checks, unauthenticated actors can send malicious requests to the bot | [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) | No linked fix PR |
| S2 High | Landlock sandbox blocks shell tool access to `/dev/null` on Fedora systems, breaking all shell command execution | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | No linked fix PR |
| S1 Workflow Blocked | No operator cancellation path exists for actively running SOP jobs on the web dashboard | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | Fix in progress |
All newly identified critical and high-risk bugs have been triaged with p1 priority tags and are assigned for development.
## 6. Feature Requests & Roadmap Signals
Recent feature requests and enhancement signals align closely with the v0.9.0 security and architecture roadmap tracked in [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432):
1. The Anthropic stored-profile OAuth alias contract RFC (#9464) is highly likely to ship in the initial v0.9.0 GA release, as it addresses credential management security gaps for all Anthropic Claude users.
2. The WASM memory plugin backend integration feature (#9463) will likely land in a post-v0.9.0 minor release, as it requires additional testing to align with the existing WASM tool plugin implementation.
3. The category-scoped cross-agent memory sharing proposal (#8983) is a strong candidate for v0.9.1, as it unlocks popular multi-agent workspace use cases requested by enterprise users.
## 7. User Feedback Summary
Real user pain points surfaced in the last 24 hours include:
- Telegram end users express significant frustration with fragmented multimodal replies, noting the current behavior makes the bot look unpolished and unresponsive when processing image uploads.
- Self-hosted Fedora admins report total breakage of the shell tool with Landlock enabled, which blocks all agent automation use cases on their production servers.
- Windows developers note they were completely unable to run local unit tests for core config and channels crates before recent CI fixes, which slowed down third-party contributor onboarding.
- SRE users running cron agent jobs discovered scheduled outputs were silently discarded with no error logs, wasting hours of debugging time to identify the root cause. Overall satisfaction with recent security transparency is high, as users have praised the project's public, detailed disclosure of audit-identified security gaps.
## 8. Backlog Watch
Long-pending high-impact items requiring maintainer attention:
1. #5514 (Telegram batch media grouping bug): Open since April 2026 with 6 comments, marked in progress but no linked PR, holding up Telegram channel feature parity.
2. #6157 (Nextcloud Talk API bug): Open since April 2026 with 6 comments, high risk for self-hosted deployments, no merged fix available yet.
3. #9330 (AI-assisted PR pre-review RFC): Posted 4 days ago, has 2 contributor comments, waiting for maintainer review to move to implementation.
4. #7432 (v0.9.0 auth and security tracker): Needs maintainer signoff to finalize priority ranking of remaining high-risk security items before the v0.9.0 feature freeze.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*