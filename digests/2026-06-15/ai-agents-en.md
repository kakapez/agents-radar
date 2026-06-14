# OpenClaw Ecosystem Digest 2026-06-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-14 23:09 UTC

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

# OpenClaw Project Daily Digest | 2026-06-15
---
## 1. Today's Overview
The OpenClaw repository saw extremely high active development activity in the 24-hour window ending June 15, with 500 total updated issues and 500 updated PRs reflecting focused work on channel delivery reliability, core runtime refactoring, and bug resolution for post-2026.5.x release regressions. Maintainers and contributors closed 52 issues and merged 24 PRs, delivering steady throughput for user-facing pain points, particularly for Telegram, WhatsApp, and Slack channel users. A new beta release was published earlier this week, with partial work on improved cross-platform messaging delivery already live for early testers. Overall project health remains strong, with most high-severity recently reported bugs already having open linked fixes or being marked resolved, and core database-first runtime improvements progressing on track. The vast majority of open tickets are scoped and tagged with clear resolution requirements, reducing unplanned ambiguity for new contributors.

## 2. Releases
A single new pre-release was published recently as part of the 2026.6 development cycle:
### v2026.6.8-beta.1
Key updates include richer, more fault-tolerant channel delivery for instant messaging platforms:
- Telegram now supports structured rich content delivery including tables, lists, expandable blockquotes, and prompt-preserving CLI backend delivery
- Legacy native draft migration logic has been fully retired, with added safety boundaries for rich media handling to prevent file leakage or malformed media delivery
- WhatsApp delivery improvements are partially implemented and marked for full completion in the next beta iteration
- No breaking changes are introduced: users on recent stable releases can upgrade without manual config migration, as legacy draft migration will be auto-completed on first launch.

## 3. Project Progress
24 PRs were merged or closed today, delivering verified fixes and feature advancement:
1. Resolved the Google Gemini model migration gap (issue #80380), fully switching the default provider config to the GA `gemini-3.1-flash-lite` model ahead of the planned preview model deprecation
2. Completed full QA validation for Codex runtime parity PR #80323 (issue #80936), with zero unknown failures in the defined mock test matrix
3. Fixed critical Slack regression #92182 that ignored account-level `streaming.mode=off` settings and posted partial draft outputs as 10+ separate channel messages
4. Patched the Feishu group zero-reply regression #77666 that broke group message responses after the 2026.5.3 upgrade, while keeping direct message functionality working
5. Closed i18n localisation gaps #79935 for zh-CN and zh-TW documentation glossaries
6. Resolved Telegram group topic #79254 regression that forced bot responses to only trigger when the bot was explicitly @mentioned, even when `requireMention=false` was configured.
Multiple high-priority upstream fixes are now queued for final maintainer review, including WhatsApp persistent auth, Telegram message cache correctness, and cron execution safety improvements.

## 4. Community Hot Topics
The most active tickets of the day reflect aligned priorities from both core maintainers and production self-hosted users:
1. **#77598: Track live dev agent behavior and trajectory** (22 comments, https://github.com/openclaw/openclaw/issues/77598): The long-running 24/7 autonomous agent observability tracking ticket, where users are sharing structured debug data for unplanned agent behavior. The underlying community need is standardized telemetry for autonomous runs that makes it easy to trace unexpected action execution without rebuilding full debug logs from scratch.
2. **#80319: QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity** (17 comments, https://github.com/openclaw/openclaw/issues/80319): Core devs are working to align test suite standards to eliminate false positive bug reports for runtime tool functionality. Contributors are pushing for clearer separation between test harness mock behavior and actual production runtime performance to reduce wasted debug hours.
3. **#80380: Migrate to GA Gemini 3.1 Flash Lite** (14 comments, 4 👍, https://github.com/openclaw/openclaw/issues/80380): Widely supported by users facing upcoming deprecation warnings, the community praised the maintainer team for proactively handling provider model updates before user deployments face downtime.

## 5. Bugs & Stability
Reported bugs ranked by user severity, with fix status noted:
1. **P1 Critical: Cron jobs hang for full timeout during LLM outages** (issue #45494, 8 comments, https://github.com/openclaw/openclaw/issues/45494): A long-standing regression that makes scheduled cron agent jobs exhaust their full multi-minute timeout window instead of fast-failing on definitive 5xx LLM provider errors, no linked fix PR is merged yet.
2. **P1 High: Telegram messages silently dropped with no logged sendMessage event** (issue #80520, 11 comments, https://github.com/openclaw/openclaw/issues/80520): Production users report intermittent message loss where the gateway accepts incoming messages but never dispatches replies, multiple linked open PRs are in review.
3. **P1 High: Missing support for Telegram's May 2026 bot-to-bot and guest bot features** (issue #79077, 8 comments, 8 👍, https://github.com/openclaw/openclaw/issues/79077): Newly released Telegram platform features are not yet supported, blocking use cases for inter-agent communication on Telegram.
4. **P2 High: Non-default multi-agent 10-17s latency** (issue #80607, 5 comments, https://github.com/openclaw/openclaw/issues/80607): Users running multiple parallel agents see massive slowdowns because non-main agents are routed through unoptimized `embedded_run` paths instead of direct session execution.
All reported channel delivery regressions from the 2026.5.x release cycle already have verified fixes marked closed or queued for merge.

## 6. Feature Requests & Roadmap Signals
High user-demand features that are highly likely to ship in upcoming stable releases:
1. The full SQLite transcript/session seam feature family (issues #79902, #79903, #79904, #79905, https://github.com/openclaw/openclaw/issues/79902): Building on top of the new database-first runtime, this set of APIs will let third-party developers build custom companion observability apps without scraping raw transcript blobs. All related tickets are in active refactor, and this is confirmed as a flagship feature for the 2026.6 stable release.
2. Telegram new bot platform feature support (issue #79077): With 8 upvotes, user demand is high, and work will start as soon as the current batch of Telegram message delivery bugs are fully resolved.
3. WhatsApp phone-pairing login flow (issue #81889, https://github.com/openclaw/openclaw/issues/81889): An alternative to QR code login for users running headless WhatsApp deployments where QR scanning is not feasible, it has already been scoped for the 2026.6.x release cycle.
4. Skill author defined setup hooks (issue #80213, https://github.com/openclaw/openclaw/issues/80213): 4 upvotes, open linked PR already exists, to support custom post-install script execution for skills that cannot be covered by the current pre-defined install system.

## 7. User Feedback Summary
Core user pain points for the day center on production reliability and usability gaps:
- The top complaint is inconsistent message delivery across Telegram, Slack and WhatsApp, with users reporting silent message drops, wrong chat routing, and duplicate messages that break adoption for business-critical deployments.
- Post 2026.5.12 update, CLI commands suffer from ~14 second cold start latency that slows down devops workflow and self-hosted management operations.
- Missing full i18n support for non-English interfaces makes deployment difficult for Chinese and Japanese speaking teams that do not use English as their primary work language.
Positive feedback highlights users appreciating the proactive migration to GA Gemini 3.1 Flash Lite before the preview deprecation hits, eliminating manual reconfiguration work for most deployments. Many advanced power users expressed excitement for the upcoming SQLite runtime API, which will let them build custom analytics and observability layers on top of their OpenClaw agents without forking the core codebase.

## 8. Backlog Watch
High-priority long-open tickets that are awaiting maintainer prioritization and review:
1. **#77598 Live dev agent behavior tracking**: Open since May 5 2026, 22 comments, blocked on a final product decision for open telemetry standards for agent runs, this is a core requirement for widespread enterprise adoption of autonomous production agents.
2. **#45494 Cron job full timeout outage bug**: Open since March 13 2026, P1 critical, no merged fix PR, exposes all scheduled cron deployments to unnecessary multi-minute downtime during widespread LLM provider outages.
3. **#56781 Fallback model chain for compaction and summary**: Open since March 29 2026, prevents unbounded session growth when the primary compaction model is unavailable, which can crash long-running agent sessions permanently.
4. **#77136 WebChat missing message render bug**: Open since May 4 2026, 6 comments, where assistant messages fail to display even though the underlying transcript data is intact, degrading usability for all WebUI users.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source AI Agent Ecosystem Comparison Report
Report Date: 2026-06-15
For technical decision-makers and open-source AI agent developers

---

## 1. Ecosystem Overview
As of mid-June 2026, the open-source personal AI assistant and autonomous agent ecosystem has graduated past experimental proof-of-concept stages to prioritize production-grade reliability for real-world self-hosted deployments. The landscape is clearly segmented to serve distinct user groups, from low-power embedded edge deployment hobbyists to enterprise teams operating business-critical 24/7 agent workloads. Nearly all active projects are actively mitigating vendor lock-in, adding multi-provider LLM orchestration to avoid unplanned downtime from single closed provider deprecations or outages. The ecosystem’s shared priority shift away from raw feature velocity toward stability, security hardening, and low-friction onboarding has created mature, production-ready tooling that was not broadly available 6 months prior.

## 2. Activity Comparison
*Zero-activity projects (NullClaw, TinyClaw, ZeptoClaw) are excluded from this table due to no recorded 24-hour development movement. Health scores are 1-10, calculated based on critical bug exposure, triage throughput, and roadmap execution consistency.*

| Project Name | 24h Updated Issues | 24h Updated PRs | Recent Release Status | Health Score |
|--------------|---------------------|-----------------|-----------------------|--------------|
| OpenClaw | 500 | 500 | v2026.6.8-beta.1 (new this week, full cross-channel delivery improvements) | 9/10 |
| NanoBot | 4 | 33 | No new 24h release, active pre-minor-feature-freeze | 9/10 |
| Hermes Agent | 50 | 50 | Latest stable v0.16.0 released 2026-06-05, no new 24h release | 8/10 |
| PicoClaw | 4 | 8 | New nightly pre-release v0.2.9-nightly.20260614 published on reporting date | 9/10 |
| NanoClaw |7 |10 | No new 24h release |7/10 (3 unpatched critical security advisories published) |
| IronClaw |32 |44 | Upcoming v0.29.1 release blocked pending sandbox security fixes, no new 24h release |7/10 (6 unpatched RCE sandbox bypass flaws) |
| LobsterAI |2 |4 | No new 24h release |8/10 (no critical bugs, low recent maintenance velocity) |
| Moltis |2 |2 | No new 24h release |8/10 (all new open items submitted in last 48h, no stale backlog) |
| CoPaw |8 |7 | No new 24h release, post v1.1.11.post2 incremental patch |8/10 |
| ZeroClaw |38 |50 | No new 24h release, prepping for 0.80-beta1 multi-agent orchestration milestone |9/10 |

## 3. OpenClaw's Position
OpenClaw is the de facto core reference implementation of the tracked ecosystem, with unique advantages over peer projects:
- **Scale leadership**: Its 500+ daily updated tickets represent 13x the activity volume of mid-sized projects like NanoBot, with the largest installed base of production self-hosted users contributing real-world debug data to accelerate edge-case bug resolution.
- **Technical differentiation**: Its unique database-first runtime architecture (no other peer has announced a comparable design) enables its upcoming flagship SQLite transcript observability API for third-party companion tooling, a feature no competing project offers. It also maintains the most mature, widely tested multi-channel delivery stack, with all 2026.5.x cross-platform messaging regressions already patched.
- **Downstream influence**: Multiple lightweight derivatives of OpenClaw (NanoClaw, PicoClaw) explicitly inherit its core design patterns, cementing its status as the ecosystem baseline for general-purpose agent deployments.

## 4. Shared Technical Focus Areas
Five high-priority requirements have emerged across more than half of tracked projects, driven by aligned user demands:
1. **Messaging channel reliability and expansion**: All non-Moltis projects are actively fixing silent message drops, markdown rendering regressions, and adding new channels (Matrix for NanoBot, WeChat for IronClaw, QQ for ZeroClaw) to resolve the top reported user pain point of inconsistent delivery for business-critical workflows.
2. **Self-hosted deployment security hardening**: NanoClaw published 3 coordinated advisories for unconstrained file exfiltration, IronClaw patches 6 sandbox RCE bypasses, and Hermes Agent fixes credential redaction flaws in response to recently surfaced real-world agent exploit reports.
3. **LLM vendor lock-in mitigation**: NanoClaw shipped a full zero-downtime provider migration framework, OpenClaw migrated default models to GA Gemini 3.1 ahead of preview deprecation, and ZeroClaw added 5 new model providers to prevent unplanned downtime from single-provider API changes.
4. **Third-party extension ecosystem support**: PicoClaw added out-of-tree channel registration hooks, IronClaw refactored all channels to a standardized extension interface, and NanoBot reduced custom tool extension barriers to eliminate the need for users to fork core code for custom integrations.
5. **Zero-friction new user onboarding**: Hermes Agent added keyless Parallel.ai web search, ZeroClaw released pre-built full-feature Docker images that eliminate manual compilation, addressing widespread feedback that complex setup was a major adoption barrier.

## 5. Differentiation Analysis
Tracked projects show clear divergence in priorities, target user bases, and architectural design:
- **Feature focus**: Generalist full-stack frameworks (OpenClaw, ZeroClaw) prioritize maximum coverage of channels and third-party integrations for broad use cases. Niche projects optimize for specific workloads: IronClaw focuses on untrusted tool sandboxing and end-to-end trust propagation for security-first enterprise teams, LobsterAI targets exclusively long-running Cowork autonomous session use cases, and CoPaw is built for local desktop automation.
- **Target users**: PicoClaw and Moltis cater explicitly to edge self-hosting hobbyists running agents on low-power Raspberry Pi and embedded hardware, while OpenClaw and ZeroClaw serve the full spectrum of hobbyist, SMB, and enterprise operators.
- **Technical architecture**: OpenClaw’s unique database-first runtime uses SQLite for all session and transcript storage, vs the hybrid file/SQLite session storage model used by nearly all other peers. IronClaw is written entirely in Rust for maximum sandbox security, while most other projects use Go/Python core stacks for faster feature iteration.

## 6. Community Momentum & Maturity
Active projects fall into three clear activity tiers:
1. **High-velocity rapid iteration tier**: ZeroClaw, OpenClaw, Hermes Agent, IronClaw. These projects ship dozens of PRs per day, with large active contributor bases working toward major upcoming pre-release milestones. ZeroClaw stands out for shipping 17 new third-party integrations in a single 24-hour window in this reporting cycle.
2. **Stable pre-release polish tier**: NanoBot, PicoClaw, CoPaw, Moltis, LobsterAI. These projects are near feature freeze for upcoming minor releases, prioritizing bug fixes and UX polish over large new feature additions. NanoBot’s shipping of a long-awaited Matrix integration requested 4 months prior indicates strong mature maintenance practices.
3. **Stagnant low-activity tier**: NullClaw, TinyClaw, ZeptoClaw, with zero recorded 24-hour activity and no recent public roadmap updates.

No top-tier project has missed planned roadmap milestones in this reporting window, indicating strong execution consistency across the ecosystem.

## 7. Trend Signals
Three actionable industry trends extracted from community

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-06-15
---
## 1. Today's Overview
NanoBot recorded exceptionally high development velocity in the 24-hour tracking window, with 4 total updated issues (3 resolved, 1 active open) and 33 total updated pull requests (16 merged/closed). The sprint cycle prioritizes bug triage, core system hardening, long-awaited new channel integration, WebUI user experience polish, and modular core refactoring. Maintainers cleared multiple backlog items that had been in review for months, with zero critical production outages reported. Current activity levels indicate a stable pre-minor-release feature freeze preparation phase, with strong team responsiveness to community-submitted issue reports.

## 2. Releases
No new official releases were published in the past 24 hours. No latest stable or pre-release versions were tagged during this period.

## 3. Project Progress
All merged/closed PRs from the tracking window delivered the following targeted improvements:
- **Long-awaited feature delivery**: Full Matrix protocol channel support was shipped via merged PR [#1056](https://github.com/HKUDS/nanobot/pull/1056), adding native support for direct messages and room-based communication on the privacy-focused Matrix network, resolving a 4-month-old community backlog item.
- **Reported issue resolutions**: Patches for 3 recently filed bugs were merged, including fixes for broken fenced code blocks in Telegram message splitting ([#4340](https://github.com/HKUDS/nanobot/pull/4340), closes #4250), misaligned bot icon rendering on agent mode startup, and the deprecated `temperature` parameter break for Anthropic Claude Opus 4.8/Fable models.
- **Core safety hardening**: Multiple input validation patches were merged, including a new toggle to fully disable built-in filesystem tools ([#4138](https://github.com/HKUDS/nanobot/pull/4138)), runtime validation for malformed media attachments, non-positive file pagination limits, malformed CLI app argv payloads, and auto-cleanup for orphan tool results in session history.
- **WebUI & documentation polish**: Merged changes include improved mobile responsiveness for the WebUI ([#4339](https://github.com/HKUDS/nanobot/pull/4339)), full i18n coverage for the settings update check flow, light/dark themed README cover images, and clickable official affiliate links for Kimi and MiniMax on the project homepage.

## 4. Community Hot Topics
The highest-impact active items reflect clear user demand for expanded integration and customization capabilities:
1.  Merged Matrix Protocol Integration PR [#1056](https://github.com/HKUDS/nanobot/pull/1056): As one of the longest-running open PRs in the repository, the feature received consistent requests from privacy-focused self-hosting users who prefer Matrix over closed proprietary messaging platforms.
2.  WebUI Automation Management View PR [#4330](https://github.com/HKUDS/nanobot/pull/4330): The open PR adds a native UI surface for users to list, run, pause, and delete workflow automations, addressing repeated user feedback that manual config-file edits for automations are unintuitive for non-technical users.
3.  Config & Agent Loop Refactor PR [#4344](https://github.com/HKUDS/nanobot/pull/4344): The planned refactor reduces cross-module runtime dependencies, which will lower the barrier for third-party contributors to build custom tool extensions for NanoBot.

## 5. Bugs & Stability
Bugs are ranked by production severity below:
1.  **High severity (open, no fix PR filed)**: Issue [#4309](https://github.com/HKUDS/nanobot/issues/4309) reports that the OpenAI-compatible `/v1/chat/completions` endpoint returns hardcoded zero values for all token usage fields, breaking usage tracking and billing workflows for users that deploy NanoBot as a local LLM API gateway.
2.  **Medium severity (resolved)**: Issue [#4333](https://github.com/HKUDS/nanobot/issues/4333) documented that Anthropic requests for Claude Opus 4.8 and Fable models failed with 400 errors due to incorrectly sent deprecated `temperature` parameter, the patch was merged and the bug is closed.
3.  **Medium severity (resolved)**: Issue [#4250](https://github.com/HKUDS/nanobot/issues/4250) noted that Telegram long message splitting regularly broke markdown fenced code blocks, the fix was merged and closed.
4.  **Low severity (in review)**: PR [#4342](https://github.com/HKUDS/nanobot/pull/4342) fixes Feishu WebSocket cards that render as empty placeholders due to unrecognized payload structure, the patch is pending final merge.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests that are very likely to land in the next upcoming minor release include the newly shipped Matrix protocol support, the full suite of recently merged input validation hardening patches, WebUI mobile responsiveness improvements, and the fixed botIcon display on agent startup. Two in-review PRs marked for the near-term roadmap are the configurable model presets for subagent spawn workflows ([#4291](https://github.com/HKUDS/nanobot/pull/4291)) and the full WebUI automation management view, which will likely be included in the subsequent minor feature release after the next patch.

## 7. User Feedback Summary
User pain points collected from the recent issue batch are highly targeted to real world deployment use cases: API gateway users report that the missing token usage tracking (issue #4309) blocks them from rolling out NanoBot for internal enterprise teams, while Telegram power users confirm the recent fenced code block fix resolved their most common frustration with sharing long code outputs in chat. Users also express strong positive feedback on the 24-48 hour turnaround time for their submitted bug reports, with 3 out of 4 recently filed issues closed in under 3 days. Privacy-focused self-hosting users have been voicing satisfaction over the newly released Matrix channel integration, a feature many requested as far back as Q1 2026.

## 8. Backlog Watch
The following high-priority items are currently pending maintainer attention:
1.  The open zero token usage bug [#4309](https://github.com/HKUDS/nanobot/issues/4309) has no assigned developer or linked fix PR despite being filed 3 days ago, and affects production deployments relying on usage metering.
2.  Two linked PRs [#4324](https://github.com/HKUDS/nanobot/pull/4324) and [#4325](https://github.com/HKUDS/nanobot/pull/4325) that fix env var template resolution gaps in the WebUI settings flow are tagged as "question" and require maintainer triage to resolve the remaining implementation ambiguity.
3.  PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) that adds configurable model presets for subagent spawn workflows has been open for 4 days without maintainer review, blocking the long-planned subagent customization feature.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-15
---

## 1. Today's Overview
Hermes Agent demonstrated exceptional development velocity across the 24-hour monitoring window, with 50 updated issues and 50 updated pull requests covering all core components of the v0.16.0 Surface Release. No new official public releases were published in this period. The vast majority of merged changes target recently reported post-release pain points, including Windows platform compatibility gaps, native desktop UI quality of life fixes, security hardening for agent tool pipelines, and zero-configuration onboarding improvements for new users. With 46 active open issues and 38 in-flight open PRs, contributor engagement remains extremely high, and the project maintains strong health as maintainers rapidly triage and resolve reported critical bugs.

## 2. Releases
No new official versions were released in the 24-hour window. The latest public stable release remains v0.16.0 (2026.6.5), referenced in all contemporary bug and feature reports submitted by users.

## 3. Project Progress
12 total PRs were merged or closed in the reporting period, delivering the following key improvements:
- [PR #46333](https://github.com/NousResearch/hermes-agent/pull/46333): Implemented a full SCM-managed Windows Service backend for Hermes Gateway with quadratic backoff auto-restart, replacing the legacy unreliable Scheduled Task deployment approach for Windows users.
- [PR #34971](https://github.com/NousResearch/hermes-agent/pull/34971): Finalized the Parallel.ai web search integration, making Parallel the default zero-configuration keyless web search and extraction backend for new users with no required API key setup.
- Resolved 4 long-standing bugs via linked merged PRs: full Mattermost file attachment support, GLM-5.2 1M context window misdetection fix, Telegram Bot API 10.1 rich message support, and the missing TUI UI flow to delete connected provider accounts.

## 4. Community Hot Topics
The most actively discussed items by comment count and user reaction are:
1. [Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083) (7 comments, P1): Critical credential redaction bug where redacted passwords persisted in conversation history cause the model to fail second consecutive tool calls.
2. [Issue #45058](https://github.com/NousResearch/hermes-agent/issues/45058) (5 comments, 9 👍): User outcry over the silent unannounced default routing of web search traffic to Parallel.ai without prior user opt-in notification.
3. [Issue #31584](https://github.com/NousResearch/hermes-agent/issues/31584) (5 comments, P2): Feature request to treat stored memory context as background reference, rather than authoritative user message content that can trigger unintended agent behavior.
The underlying user needs reflect priority alignment on privacy transparency for third-party integrations, strict credential security guardrails, and preventing memory injection hallucinations in the agent execution loop.

## 5. Bugs & Stability
Ranked by severity, newly reported or updated bugs include:
1. **P1 Critical**: [Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083) Password redaction flaw breaks tool execution on second calls; no public linked fix PR available.
2. **P1 Critical**: [Issue #46142](https://github.com/NousResearch/hermes-agent/issues/46142) Recent mautrix client library migration broke all inbound message dispatch for Matrix gateway users on Tuwunel homeservers; no public fix PR available.
3. **P2 High Security**: [Issue #46171](https://github.com/NousResearch/hermes-agent/issues/46171) Memory provider tools bypass the `disabled_toolsets` policy, allowing unrestricted memory manipulation even when users explicitly disable memory tooling; no fix PR published.
4. **P2 High Platform**: [Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260) Windows 10 native installer fails at the desktop UI npm install stage, blocking new user onboarding.
5. Multiple P3 normal severity bugs (Ollama reasoning model empty responses, cross-profile cron job visibility leak) have in-flight open fix PRs already submitted by contributors.

## 6. Feature Requests & Roadmap Signals
Top user-submitted feature requests aligned with near-term roadmap priorities:
- Custom local STT/TTS and media generation provider configuration UI for Hermes Desktop
- Built-in native markdown editor for core agent files (SOUL.md, MEMORY.md, AGENTS.md)
- GBrain semantic graph memory provider plugin integration
- `hermes sessions merge` CLI command to combine related conversation transcripts
- Local runtime auto-discovery for models on LM Studio and Ollama
Low-effort, high-impact items including the local model discovery CLI (already implemented in [PR #46338](https://github.com/NousResearch/hermes-agent/pull/46338)), Windows Service gateway support, and session merge command are highly likely to ship in the next minor v0.16.x patch. Larger scope UI features for desktop are targeted for the v0.17.0 release.

## 7. User Feedback Summary
Top user pain points and sentiment trends:
1. Windows platform gaps were the most cited frustration, covering installer failures, cron job bash execution issues, and lack of native background gateway service before the latest merged PR.
2. Native Hermes Desktop v0.16.0 was widely praised as a major improvement, but users reported consistent UI quality of life gaps: no auto-scroll for streaming responses, no screen reader accessibility for status updates, no workflow to edit core agent persona files outside of terminal.
3. Pre-merged web search required manual third-party API key setup, which was flagged as a major new user onboarding friction point resolved by the new Parallel.ai zero-configuration integration.
4. A large portion of power users requested official first-party support for popular community ecosystem projects like Hermes Workspace, which currently only works via unofficial manual setup.

## 8. Backlog Watch
Long-pending high-priority items waiting for maintainer triage or attention:
1. [Issue #31584](https://github.com/NousResearch/hermes-agent/issues/31584) (opened 2026-05-24): The memory context-as-background feature request, no official maintainer update in 3 weeks, despite being a high-impact improvement to prevent memory injection attacks and hallucinations.
2. [Issue #16108](https://github.com/NousResearch/hermes-agent/issues/16108) (opened 2026-04-26): Gateway event idempotency and stale response suppression feature, no linked PR after 6 weeks, which would eliminate duplicate replies across all connected messaging platforms.
3. [Issue #22027](https://github.com/NousResearch/hermes-agent/issues/05-08) (opened 2026-05-08): Persistent agent sessions that continue running long-running tasks after the webchat browser tab is closed, no roadmap update published after more than a month of user requests.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-06-15
Project Repository: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Today's Overview
The 24-hour activity snapshot for the PicoClaw lightweight open source AI agent framework shows steady, high-productivity development progress across core stability hardening, new feature exploration, and community contribution enablement. The project recorded 4 updated issues, 8 total updated pull requests, and 1 official nightly build release, with a 62.5% PR merge rate that reflects efficient maintainer review throughput. Most merged work focused on low-level error handling fixes, log standardization, and core agent runtime stability improvements, while new open PRs outline upcoming extensibility features that will lower barriers for third-party developers to build custom integrations on top of PicoClaw. No critical production-breaking bugs or security vulnerabilities were reported in the latest update cycle, indicating strong baseline runtime health for the v0.2.9 release line.

## 2. Releases
A new automated pre-release nightly build was published today:
- **v0.2.9-nightly.20260614.cf67dd38**: This unstable pre-release contains all changes committed to the main branch after the tagged v0.2.9 stable release. No explicit breaking changes are noted for this build, but users testing pre-release features are advised to back up their existing configurations before deployment in non-development environments. Full change log: [v0.2.9 → main comparison](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress
5 PRs were merged/closed in the latest cycle, advancing core reliability and code maintainability of the v0.2.9 codebase:
1. [#2904 Fix agent loop reload and panic cleanup stability](https://github.com/sipeed/picoclaw/pull/2904): Eliminated orphan blocked goroutine risks in the agent runtime by replacing detached goroutine reload logic with a synchronous `defer/recover` flow, resolving a long-tail source of unplanned agent crashes during configuration reloads.
2. [#3121 refactor(openai_compat): replace log.Printf with structured logger](https://github.com/sipeed/picoclaw/pull/3121): Migrated the last remaining unstructured logging call in the OpenAI-compatible provider module to PicoClaw's native structured logging system, improving observability for third-party model integrations.
3. [#3122 fix(evolution): capture Close() error on write file in appendJSONLRecords](https://github.com/sipeed/picoclaw/pull/3122): Fixed previously unhandled delayed write failures for evolution log files, now correctly catching hard-to-diagnose errors such as full disk space or NFS connection drops.
4. [#3123 fix(filesystem): explicitly ignore Close() error on directory file descriptor](https://github.com/sipeed/picoclaw/pull/3123): Standardized explicit error discard annotation for directory close operations, reducing false positive alerts from static analysis tools on the codebase.
5. [#3124 fix(tts): handle io.ReadAll error in error response path](https://github.com/sipeed/picoclaw/pull/3124): Improved TTS failure diagnostics by no longer discarding read errors for non-200 TTS API responses, making misconfigured TTS backends far easier to debug for end users.

## 4. Community Hot Topics
The two highest-priority new community submissions align closely with the project's long-term extensibility roadmap:
1. [#3120 feat(config): add RegisterChannelSettings hook for out-of-tree channels](https://github.com/sipeed/picoclaw/pull/3120): Underlying user demand: Third-party developers want to build custom PicoClaw channel integrations (for niche self-hosted chat platforms, industrial messaging systems, etc.) without forking the entire upstream codebase, drastically reducing maintenance overhead for custom enterprise and hobby deployments.
2. [#3118 Add remote Pico WebSocket mode to picoclaw agent](https://github.com/sipeed/picoclaw/pull/3118): Underlying user demand: Edge deployment users want to run lightweight PicoClaw agent nodes on distributed embedded hardware, connected back to a central control plane over WebSocket, supporting large-scale field deployment of local AI assistants in offline or low-connectivity environments.

## 5. Bugs & Stability
All reported production bugs are ranked by severity below, no critical security issues were recorded:
1. High severity: [#3090 Panel does not work on Safari on iOS versions below 16.4](https://github.com/sipeed/picoclaw/issues/3090): Breaks core admin UI access for mobile users on older iOS devices, a common pain point for users managing PicoClaw instances deployed on Raspberry Pi. No associated fix PR has been submitted as of snapshot.
2. Medium severity: [#3041 `mcp add` mis-parses global flags into positionals (DisableFlagParsing), breaking http/sse adds and silently mis-naming stdio servers](https://github.com/sipeed/picoclaw/issues/3041): Breaks the official CLI workflow for configuring Model Context Protocol servers, forcing power users to manually edit config files. No public fix PR exists.
3. Low severity: [#3044 Bug: allow_from fails for Matrix user IDs containing colon](https://github.com/sipeed/picoclaw/issues/3044): Breaks access control functionality for Matrix channel deployments, a niche but production use case for self-hosted Matrix communities.
The merged error handling PRs from this cycle eliminate entire classes of silent failure modes that previously caused hard-to-diagnose runtime crashes, drastically improving debuggability for all production deployments.

## 6. Feature Requests & Roadmap Signals
Based on current activity, the following features are highly likely to land in the next minor release (v0.2.10):
- The `RegisterChannelSettings` out-of-tree extension hook from PR #3120: It adds no breaking changes, fills a clear gap for third-party plugin developers, and aligns with PicoClaw's stated roadmap to build a open third-party integration ecosystem.
- The Telegram group quality-of-life improvement from [PR #2975](https://github.com/sipeed/picoclaw/pull/2975): Treating replies to bot messages as equivalent to @mentions for Telegram group deployments is low-risk and addresses a common user request.
- The OmniRoute multi-model routing provider request from the closed #2978 issue will likely be resolved via documentation for the upcoming third-party provider extension system, rather than being merged directly into the upstream codebase.

## 7. User Feedback Summary
Key real-world user feedback extracted from the latest updates:
- Common pain point: Users running PicoClaw on low-power embedded hardware (Raspberry Pi OS) report major operational friction from the iOS Safari UI bug, as many small deployments are managed exclusively via mobile devices.
- Workflow dissatisfaction: MCP power users are frustrated that the official CLI for adding remote MCP servers is broken, forcing them to manually edit YAML configs that are easy to misformat.
- Positive signal: Multiple independent community contributors are submitting production-grade PRs extending PicoClaw functionality, indicating strong satisfaction with the project's lightweight runtime design and open contribution model.
- Use case validation: A large share of active deployments run PicoClaw as a self-hosted local AI assistant on edge hardware, rather than as a cloud-hosted service.

## 8. Backlog Watch
Long-open high-impact items requiring prioritized maintainer attention:
1. Issue [#2978 Add omniroute as provider](https://github.com/sipeed/picoclaw/issues/2978): Open since 2026-05-31, marked stale and closed automatically with no maintainer response to the user's question about adding custom routing providers. Maintainers should follow up to share documentation for custom configuration setups, or re-open the feature request once the third-party provider extension system ships.
2. PR [#2975 feat(telegram): treat reply to bot message as mention in group chats](https://github.com/sipeed/picoclaw/pull/2975): Open since 2026-05-30, marked stale with no review feedback. This low-risk quality of life improvement would benefit all Telegram bot users and needs quick triage.
3. PR [#3118 Add remote Pico WebSocket mode to picoclaw agent](https://github.com/sipeed/picoclaw/pull/3118): Open since 2026-06-12 with no review comments, this high-impact feature for distributed edge deployments would benefit from early maintainer feedback to align it with the roadmap.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) 2026-06-15 Project Digest
---

## 1. Today's Overview
Over the 24 hours ending 2026-06-15, the NanoClaw project recorded 7 updated issues and 10 updated pull requests, with 4 PRs successfully merged and 1 documentation bug resolved. Activity is distributed across three high-priority parallel tracks: core feature expansion for multi-provider LLM support, newly published coordinated security advisories for self-hosted deployments, and user-facing quality-of-life bug fixes and documentation hygiene. No critical production outages or breaking regressions were reported during this window, indicating stable, coordinated development velocity. Overall project health remains strong, with all recent merged changes undergoing typecheck and test validation before being marked as resolved.

## 2. Releases
No new public releases were published in the last 24 hours.

## 3. Project Progress
All 4 merged/closed PRs from the last 24 hours delivered tangible core improvements:
- [PR #2764](https://github.com/nanocoai/nanoclaw/pull/2764): Resolved the documentation bug in CLAUDE.md that pointed readers to two relocated Key Files paths, closing pre-existing issue #2763.
- [PR #2758](https://github.com/nanocoai/nanoclaw/pull/2758): Refactored global CLI tool installation logic to pull from a centralized `cli-tools.json` manifest instead of hardcoded Dockerfile blocks, eliminating friction for skill authors that need to add new custom third-party CLI dependencies via simple JSON merge updates.
- [PR #2756](https://github.com/nanocoai/nanoclaw/pull/2756): Landed the full core operator-driven provider selection framework, including a new provider registry, setup configuration picker, vault auth flow, and memory migration skill that lets users switch between different LLM providers without breaking existing agent session memory.
- [PR #2757](https://github.com/nanocoai/nanoclaw/pull/2757): Shipped the v2 Codex agent provider payload, which runs natively on the host's capability seams with vault-only authentication managed through OneCLI, delivering the first official non-Anthropic default LLM provider for NanoClaw.

## 4. Community Hot Topics
No recently updated issues or PRs have accrued public comments or community reactions to date, but two high-impact workstreams are emerging as the top expected community discussion points:
1. [Three coordinated core security advisories](https://github.com/nanocoai/nanoclaw/issues/2760) for self-hosted deployments, linked to active self-hosted operator demand for hardened, low-risk production deployments that are not vulnerable to common agent injection paths.
2. The newly launched multi-provider selection framework, reflecting longstanding community demand to eliminate Anthropic vendor lock-in, reduce inference costs, and use domain-specific LLMs for specialized agent workloads.

## 5. Bugs & Stability
All reported issues from the last 24 hours are ranked by severity below, with associated fix PR status noted:
| Severity | Description | Issue Link | Fix PR Status |
|----------|-------------|------------|---------------|
| Critical | Arbitrary local file exfiltration via unconstrained `send_file` absolute path handling | [#2760](https://github.com/nanocoai/nanoclaw/issues/2760) | No public fix PR filed |
| High | Local gateway approval bypass via unauthenticated loopback webhook | [#2761](https://github.com/nanocoai/nanoclaw/issues/2761) | No public fix PR filed |
| High | Hidden `args` and `env` parameters in the `add_mcp_server` approval flow are not displayed to approvers before persistence | [#2762](https://github.com/nanocoai/nanoclaw/issues/2762) | No public fix PR filed |
| Medium | Claude provider does not enable prompt caching by default, leading to excess token spend | [#2768](https://github.com/nanocoai/nanoclaw/issues/2768) | No public fix PR filed |
| Medium | Legacy Telegram Markdown sanitizer is obsolete after upstream adapter v4.30.0 update | [#2767](https://github.com/nanocoai/nanoclaw/issues/2767) | No public fix PR filed |
| Medium | Budget-exhausted LLM turns are silently dropped with no user-facing notification | [#2751](https://github.com/nanocoai/nanoclaw/issues/2751) | [PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759) submitted, open for review |

## 6. Feature Requests & Roadmap Signals
Based on current open issues and in-flight PRs, these features are highly likely to ship in the next minor release:
1. Default prompt caching enabled for the Claude provider to cut token costs for long-running agents with large system prompts, a high-priority low-effort change requested in issue #2768.
2. Removal of the obsolete Telegram Markdown sanitizer as part of the upcoming channels branch stabilization.
3. Official full support for the new Codex LLM provider, alongside the newly launched provider selection and memory migration features.
4. Low-friction quality of life `.format-lint-off` configuration additions for the channels and providers modules (open PRs #2765, #2766).

## 7. User Feedback Summary
Reported real user pain points for this window include silent failures when LLM token spending limits are hit, excessive unoptimized inference costs for Claude deployments caused by missing default prompt caching, and prior confusion navigating stale documentation that pointed to non-existent source file paths (now resolved). Contributors also previously reported unnecessary operational friction from the old hardcoded Dockerfile CLI install workflow, a pain point eliminated by the recently merged cli-tools.json manifest update. No widespread user dissatisfaction with core baseline functionality has been surfaced, indicating general satisfaction with current agent performance for active users.

## 8. Backlog Watch
Two high-priority long-running PRs submitted before the last 24 hours are awaiting maintainer review:
1. [PR #2732](https://github.com/nanocoai/nanoclaw/pull/2732) submitted 2026-06-11: Adversarially verified security hardening changes for the host and agent-runner that address a full set of independent health audit findings, with 19 modified files, passing typechecks and test suites, that has not received public maintainer feedback for 3 days.
2. [PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750) submitted 2026-06-12: A stability fix that recovers stale `outbound.db` journals after container SIGKILL events, resolving two widely reported historical crash bugs (#2516, #2640), that is pending final review and merge approval.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-06-15
---

## 1. Today's Overview
IronClaw recorded very high development activity over the last 24 hours, with 32 updated issues and 44 updated pull requests, as the core team prioritizes pre-release stabilization for its Reborn v2 runtime and WebUI stack. The majority of recent work is focused on closing security gaps in sandboxed tool execution, hardening end-to-end trust propagation across trigger pipelines, polishing WebUI cross-platform usability, and refactoring legacy channel implementations to a standardized extension architecture. No new public releases were pushed in this window, though an open release chore PR is actively being prepared for an upcoming minor version rollout. Project health remains strong, with over 50% of recently updated issues and PRs moving to closed/merged status within 24 hours of creation.

## 2. Releases
There are no new published public releases in the 2026-06-15 reporting window. An in-progress release chore PR [#3708](https://github.com/nearai/ironclaw/pull/3708) remains open, targeting version v0.29.1 with API breaking changes for the `ironclaw_common` and `ironclaw_skills` crates, and backwards-compatible updates for the `ironclaw_safety` crate. The release is blocked pending final review of recently disclosed security advisories for sandboxed tool execution.

## 3. Project Progress
4 PRs were merged/closed over the last 24 hours, delivering core feature and bug fix progress:
1. **Runtime context awareness feature landed**: Merged PR [#4836](https://github.com/nearai/ironclaw/pull/4836) implemented the full runtime context slice that surfaces connected channels, outbound delivery state, and run origin directly to the agent system prompt at every loop start.
2. **CI unblocking complete**: Merged PR [#4873](https://github.com/nearai/ironclaw/pull/4873) re-homed the broken Slack approval-to-auth-resume end-to-end test that was previously removed to unblock CI, resolving tracking issue [#4847](https://github.com/nearai/ironclaw/issues/4847).
3. **Slack gate routing bug fixed**: Merged PR [#4844](https://github.com/nearai/ironclaw/pull/4844) eliminated per-route allocation overhead and filtering logic errors in the Slack delivery gate routing system.
4. 7 additional closed issues resolved long-standing gaps, including fixing the recurring forgeable ScheduledTrigger origin trust flaw (#4851), landing WeChat channel documentation for the stable v0.28.1 WeChat integration (#3515), and resolving the 16384-byte tool argument limit for large LLM responses (#4751).

## 4. Community Hot Topics
The most actively discussed work items (sorted by comment volume) reflect the core team's near-term priorities and contributor architectural alignment needs:
1. [Issue #4851: Trusted-trigger origin is laundered through adapter_kind string](https://github.com/nearai/ironclaw/issues/4851) (1 comment) – Underlying need: Core devs are working to eliminate a class of trigger forgery vulnerabilities by preserving trust status as a strict type rather than a serializable string across the full pipeline, rather than re-deriving trust labels downstream.
2. [Issue #4848: auth-resume: match pending resume by per-invocation identity (input_ref), not just capability_id](https://github.com/nearai/ironclaw/issues/4848) (1 comment) – Underlying need: The team is fixing remaining slot reuse gaps in the persistent auth-resume flow that could cause users' approved actions to be misattributed to unrelated capability invocations.
3. [PR #4778: Represent Slack as a product-adapter extension](https://github.com/nearai/ironclaw/pull/4778) – Underlying need: The community is driving to remove all hardcoded built-in channel logic from the core runtime, moving all channel implementations to a standardized extension interface that will drastically reduce the barrier for third-party contributors to add new channel integrations.

## 5. Bugs & Stability
All newly reported bugs are ranked below by severity, with fix status noted:
| Severity | Description | Tracking Link | Fix Status |
|----------|-------------|---------------|------------|
| Critical | 6 independent sandbox bypass advisories covering shell tool approval evasion and `write_file` symlink sandbox escape, which could enable unapproved RCE for self-hosted users | [#4861](https://github.com/nearai/ironclaw/issues/4861), [#4862](https://github.com/nearai/ironclaw/issues/4862), [#4863](https://github.com/nearai/ironclaw/issues/4863), [#4864](https://github.com/nearai/ironclaw/issues/4864), [#4865](https://github.com/nearai/ironclaw/issues/4865), [#4797](https://github.com/nearai/ironclaw/issues/4797) | No public fix PRs published yet |
| High | WebChat v2 chat send fails with "Illegal invocation" when accessed over unencrypted HTTP on non-localhost hosts | [#4874](https://github.com/nearai/ironclaw/issues/4874) | No fix PR created |
| High | Shell command content is hidden from approval dialog and activity history, preventing users from reviewing full actions before approval | [#4852](https://github.com/nearai/ironclaw/issues/4852) | No fix PR created |
| High | Reborn WebSocket auth helper conflicts with v2 auth contract, breaking WebSocket connections for users using the built-in browser SDK | [#4870](https://github.com/nearai/ironclaw/issues/4870) | No fix PR created |
| Medium | Offscreen clipped action buttons on mobile settings page, partial zh-CN locale English fallback, and tool activity loss on multi-tenant Railway deployments | [#4868](https://github.com/nearai/ironclaw/issues/4868), [#4855](https://github.com/nearai/ironclaw/issues/4855), [#4853](https://github.com/nearai/ironclaw/issues/4853) | No fix PRs created |

## 6. Feature Requests & Roadmap Signals
Three high-priority user-requested features are on track to ship in the next minor v0.29.1 release:
1. Universal cross-channel attachment pipeline for Reborn: Tracked in [Issue #4644](https://github.com/nearai/ironclaw/issues/4644), with two supporting PRs (attachments Web UX [#4738](https://github.com/nearai/ironclaw/pull/4738), vision model image support [#4871](https://github.com/nearai/ironclaw/pull/4871)) already near final review.
2. Cross-thread persistent "always allow" approvals: Tracked in PR [#4835](https://github.com/nearai/ironclaw/pull/4835), this feature will eliminate repetitive duplicate approval prompts for tools users have already explicitly marked as trusted, drastically improving day-to-day usability.
3. Reborn observability seams: Tracked in PR [#4588](https://github.com/nearai/ironclaw/pull/4588), this will add trajectory observer hooks to support the upcoming open source nearai-bench agent performance benchmark suite.

## 7. User Feedback Summary
Feedback collected from the ongoing 6/08-6/14 Reborn local dogfooding program (tracking issue [#4692](https://github.com/nearai/ironclaw/issues/4692)) shows clear pain points and positive signals:
- Top pain points: Misleading "Active" status for NEAR AI provider on clean unconfigured setups, excessive redundant approval prompts for read-only GitHub Extension requests, poor accessibility for keyboard/screen reader users on dialog and command palette controls.
- High satisfaction items: Recently shipped fixes for oversized LLM request tool argument limits, adjusted WebUI conversation font size, and code block syntax highlighting were all marked as major quality of life improvements by testers.
- Channel user feedback: WeChat channel stability after the v0.28.1 release is reported as fully reliable by early adopters.

## 8. Backlog Watch
High-priority long-standing items requiring maintainer attention:
1. [PR #3708: Official v0.29.1 release chore](https://github.com/nearai/ironclaw/pull/3708): Open since May 16, 2026, no active reviewer assigned, blocking public availability of months of accumulated Reborn features.
2. [Issue #4797: `write_file` sandbox escape via dangling symlink](https://github.com/nearai/ironclaw/issues/4797): Open since June 12, 2026, no public progress updates for this critical sandbox security flaw.
3. 7 total Dependabot PRs covering Rust ecosystem, GitHub Actions, WASM, and tokio dependency updates: Most are open for multiple weeks with no review or merge activity, leaving the project behind on upstream security patches and performance improvements.
4. [PR #4787: Barcelona Hackathon onboarding improvements](https://github.com/nearai/ironclaw/pull/4787): Marked as NO MERGE, waiting for core maintainers to coordinate with hackathon contributors to upstream the new user onboarding path improvements to main.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-06-15
Open-source AI agent / personal assistant project tracking, data sourced from github.com/netease-youdao/LobsterAI

---
## 1. Today's Overview
Over the 24-hour reporting window ending 2026-06-15, LobsterAI recorded moderate, focused maintenance and feature iteration activity, with 2 updated open issues and 4 updated pull requests, 1 of which was successfully merged to resolve a long-running recurring bug. No new formal public releases were published in this period. All active contributions are targeted at polishing runtime reliability and end-user experience for the project's core Cowork autonomous agent session module. No critical security vulnerabilities, production outages or major breaking change reports surfaced in the past day. The current activity rhythm aligns with standard post-sprint bug triage and pre-feature-release polishing workflow, indicating stable project operation.

## 2. Releases
There are no new official versions released in the last 24 hours, no associated change logs, breaking change notes or migration guidance to publish.

## 3. Project Progress
Only 1 PR was closed/merged during the reporting window:
- [#1465 fix(scheduled-tasks): Deleted scheduled tasks re-appear as ghost sessions after app restart](https://github.com/netease-youdao/LobsterAI/pull/1465), contributed by linlihua
This merge resolved the well-documented recurring bug tied to Issue #1359. The root cause was identified as a missing data cleanup step in the scheduled task deletion workflow: the original implementation only removed cron task records on the OpenClaw gateway side, but left associated orphaned session entries in the local SQLite `cowork_sessions` table. The fix adds full cleanup of local orphaned session records during scheduled task deletion, completely eliminating the "ghost session" problem that forced users to repeatedly delete the same invalid entries after app restarts.

## 4. Community Hot Topics
The most active recently updated items, with highest comment volume among all tracked assets, are 2 UX defect reports and 3 implemented pending Cowork feature PRs:
1. [#1434 Chinese UI locale shows untranslated English text on empty skill search results page](https://github.com/netease-youdao/LobsterAI/issues/1434)
2. [#1435 Long custom agent names overflow the new agent creation modal](https://github.com/netease-youdao/LobsterAI/issues/1435)
3. Cowork session experience feature PRs #1429, #1430, #1431
Underlying user needs reflected in these items point to rapid growth of power user adoption for long-running, multi-hour autonomous agent workflows: users expect no unexpected session interruptions, clear progress visibility, and fully localized, polished UI for production internal deployment for non-technical users.

## 5. Bugs & Stability
All user-reported defects in this window are low-severity UI/UX polish issues, no high/critical severity crashes or regressions were reported:
1. **Low severity**: Localization leak (Issue #1434) — When LobsterAI is set to Chinese language, the skill management tab of custom agents displays untranslated English placeholder text and action buttons when no search results are returned. No matching fix PR has been submitted yet.
2. **Low severity**: UI overflow (Issue #1435) — There is no maximum character limit or text wrapping rule for custom agent names on the creation modal, leading to long names spilling outside the modal boundary and breaking page layout. No matching fix PR has been submitted yet.

## 6. Feature Requests & Roadmap Signals
The 3 pending fully implemented feature PRs all target gaps in the long-running agent use case, and are highly likely to land in the next minor feature release after final maintainer review:
1. In-session message search with keyword highlighting (PR #1429, powered by mark.js, supports keyboard shortcut activation and match cycling)
2. Automatic system sleep blocking during active agent sessions (PR #1430, implemented via Electron powerSaveBlocker API to prevent long tasks from being interrupted by idle system suspend)
3. Real-time session runtime elapsed counter (PR #1431, displayed on the streaming response bar with multi-language timestamp formatting)
All 3 features fill widely requested unmet needs for power users, with very low integration risk, so they are prioritized for upcoming release.

## 7. User Feedback Summary
Surfaced user pain points and experience trends in this period are all focused on daily usability:
- Localization inconsistencies are a major pain point for enterprise users deploying the tool for non-technical Chinese teams, who require a fully Chinese language interface with no untranslated artifacts
- Unbounded input for agent metadata creates unnecessary UI breakage that erodes perceived product polish
- The recently fixed ghost scheduled task bug caused significant user confusion for weeks, as repeated deletion operations did not resolve the invalid session entries
No widespread dissatisfaction with core agent functionality was reported, and the volume of community contributed PRs indicates high satisfaction with the project's open development model.

## 8. Backlog Watch
All 6 active updated assets (2 open issues, 3 pending Cowork feature PRs) are marked stale, having received no maintainer feedback or review for over 2 months since their initial submission in early April 2026. The highest priority items requiring immediate maintainer attention are the 3 nearly complete high-value feature PRs (#1429, #1430, #1431), which only require final review and merge to deliver major user experience improvements. The two low-effort UI polish issues (#1434, #1435) are also low-hanging fruit that can be resolved quickly to improve product quality for all Chinese locale users. Timely triage of this stale backlog will significantly boost contributor retention and project health.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-06-15
This digest covers all public repository activity for github.com/moltis-org/moltis in the 24-hour reporting window.

---

## 1. Today's Overview
Moltis, the open-source personal AI assistant and MCP (Model Context Protocol) runtime, saw steady low-volume, low-risk activity on 2026-06-15 with zero new releases, 2 newly opened active issues, and 2 newly submitted open pull requests, with no merged or closed work logged in the 24-hour window. All new activity focused on incremental bug fixes for core integration and deployment workflows, dev dependency maintenance, and a new capability proposal for edge deployments. No critical production outages or data loss incidents were reported across the user base in this period. This activity profile signals the project is in a stable, active iteration phase, with triage pipelines running normally for newly submitted community contributions.

## 2. Releases
No new official releases, pre-releases, or version tags were published in the 24-hour reporting window. No breaking changes or migration guidance apply for this period.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours, so no new features or bug fixes have been committed to the main branch as of this digest. The two newly opened PRs queued for maintainer review address two high-priority incremental improvements: a fix for Docker deployment reliability, and a dev dependency bump for the project's frontend UI build tooling.

## 4. Community Hot Topics
The two most active recently filed items reflect core community priorities for Moltis usability and performance:
1. [Issue #1119: MCP OAuth fails with `invalid_target` for servers using `resource_metadata` in WWW-Authenticate (Notion, Linear)](https://github.com/moltis-org/moltis/issues/1119): This is the most engaged item, with 1 user comment logged since filing. The underlying user need is native out-of-the-box support for official hosted SaaS MCP endpoints, which eliminates the need for users to self-host custom auth flows for their Notion and Linear workspaces.
2. [Issue #1123: Add pure-Rust turbovec as an alternative memory backend for extreme edge compression](https://github.com/moltis-org/moltis/issues/1123): This feature request reflects growing interest from power users running Moltis on low-resource edge hardware, who want reduced memory overhead for running large vector context databases without cloud connectivity.

## 5. Bugs & Stability
No crashes, data loss incidents, or major regressions were reported in the 24-hour window. The two logged issues are ranked by severity below:
1. **High Severity**: [Issue #1119 MCP OAuth invalid_target error for Notion/Linear](https://github.com/moltis-org/moltis/issues/1119): Blocks end users from connecting two of the most popular official MCP productivity endpoints. No associated fix PR has been filed as of this digest.
2. **Medium Severity**: Docker volume path shadowing bug for custom home bind mount deployments. A complete fix has already been submitted in [PR #1122 fix: drop VOLUME declarations that shadow the home bind mount](https://github.com/moltis-org/moltis/pull/1122) and is awaiting review.

## 6. Feature Requests & Roadmap Signals
The only new user feature request in this window is the pure-Rust turbovec memory backend proposal in [Issue #1123](https://github.com/moltis-org/moltis/issues/1123). The submitter already completed the preflight check confirming no duplicate existing requests, and the feature aligns directly with Moltis's public stated roadmap of supporting fully offline, low-resource edge personal assistant deployments. Given that the project's core codebase is written in Rust, this feature will require minimal refactoring to integrate, making it highly likely to be prioritized for implementation in one of the next 2 minor releases if it gains more community upvotes.

## 7. User Feedback Summary
Key verified user pain points and use cases surfaced in this reporting window:
- New users testing Moltis for productivity automation face major friction trying to connect their Notion and Linear accounts, as the pre-configured official hosted MCP endpoints do not work out of the box
- Self-hosted Docker users who bind mount their entire Moltis home directory for persistent state are experiencing unplanned data loss for agent configurations and session history, due to unintended volume shadowing
- Power users running Moltis on edge hardware such as low-power single-board computers and edge NPUs cannot fit large 100k+ token vector context databases in available RAM, leading to degraded assistant performance
Overall, user satisfaction for core AI assistant functionality remains high, with nearly all recent feedback focused on removing friction for third-party integrations and edge deployments.

## 8. Backlog Watch
As of the 2026-06-15 reporting window, there are no long-unanswered (7+ day old) high-priority issues or PRs that have been overlooked by maintainers. All 2 newly submitted PRs and 2 open issues were filed in the last 48 hours, and are queued for scheduled triage by the core maintainer team in the coming 24 to 48 hours, reflecting healthy, responsive community management throughput.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 2026-06-15 Project Digest
---
## 1. Today's Overview
The CoPaw project saw high community activity in the 24-hour reporting window, with 8 updated issues and 7 open pull requests under active review. The vast majority of recent contributions come from first-time community contributors, reflecting strong growing adoption and open contribution momentum following the v1.1.11 feature release. Most tracked activity consists of post-release bug triage for the v1.1.11.post2 incremental patch, paired with new feature work targeting native desktop automation and expanded internationalization support. Overall project health is robust, with only a small batch of expected minor regressions reported shortly after the latest feature drop. No new official releases were published during this period.

## 2. Releases
No new official releases were issued in the 24-hour reporting window.

## 3. Project Progress
No PRs were merged or closed during this period, with all 7 submitted PRs remaining open for maintainer review and final polish. The only completed resolution recorded today is for high-priority previously reported issue [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172), a severe bug where chat sessions would hang indefinitely after periods of inactivity, which was formally closed by maintainers. Multiple in-development feature lines have advanced to review stage, including the core Windows desktop automation module, full Vietnamese UI localization, and 4 separate user experience quality of life improvements.

## 4. Community Hot Topics
The two highest-engagement discussions this window are:
1.  Feature request [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) (5 comments), requesting that the Kimi-for-coding plan be added to the CoPaw uv package allowlist
    * Underlying user need: Power users who already pay for official Kimi coding subscriptions want to reuse their existing paid plan access directly in CoPaw, rather than being forced to purchase separate standalone API credits to use the model in the agent workflow.
2.  Parallel Vietnamese localization PRs [#5175](https://github.com/agentscope-ai/CoPaw/pull/5175) and [#5186](https://github.com/agentscope-ai/CoPaw/pull/5186) from two separate first-time contributors, addressing open localization issue [#5169](https://github.com/agentscope-ai/CoPaw/issues/5169)
    * Underlying user need: The fast-growing Vietnamese-speaking CoPaw user base requires full native interface translation to eliminate language barriers for non-English speakers, reducing new user onboarding friction significantly.

## 5. Bugs & Stability (Ranked by Severity)
All reported bugs below relate to regressions introduced in the recent v1.1.11.post2 release, no dedicated fix PRs have been linked to any of the open bug reports as of this digest:
1.  **Critical (Windows user disruption)**: [#5181](https://github.com/agentscope-ai/CoPaw/issues/5181) Plugin dependency installation spawns unlimited visible pop-up cmd windows when PyPI connectivity is unstable, triggering a dead loop of popups that fully blocks normal desktop use.
2.  **High (multi-channel production break)**: [#5177](https://github.com/agentscope-ai/CoPaw/issues/5177) DingTalk channel sessions do not appear in the web console session list even when the agent functions normally, breaking administrator visibility for teams that rely on DingTalk as a primary user access channel.
3.  **Medium (self-hosted user break)**: [#5184](https://github.com/agentscope-ai/CoPaw/issues/5184) Locally created custom model providers fail to display in the model settings page, blocking users running self-hosted open-source LLMs from configuring their model stacks.
4.  **Low (niche user break)**: [#5183](https://github.com/agentscope-ai/CoPaw/issues/5183) The desktop pet mini-feature does not launch correctly on Wayland window managers such as Niri, impacting a small subset of advanced Linux desktop users.

## 6. Feature Requests & Roadmap Signals
New user-submitted feature requests include: full HH:MM:SS timestamp auto-injection to agent context to eliminate redundant time tool calls, unified cross-model configuration for text, embedding, audio and video model types, and Kimi-for-coding uv allowlist support. Combined with the currently open review PRs, the following features are highly likely to ship in the next v1.1.12 patch release: automatic full timestamp injection, extended cron job timeout settings, console session title filtering, and full Vietnamese language support. More complex items including the Kimi-for-coding allowlist and unified cross-model configuration are expected to be scheduled for the next minor version release after the v1.1.11.x patch cycle completes.

## 7. User Feedback Summary
Users expressed general positive recognition for the project's rapid iteration speed and open contribution culture, demonstrated by 5 separate first-time community contributors submitting valid PRs in a single 24-hour window. Core dissatisfaction is centered around unexpected regressions in the v1.1.11.post2 patch, with users highlighting that unhandled edge cases for network connectivity and custom deployment environments lead to unnecessary, easily avoidable workflow disruptions. Multiple users also noted that redundant mandatory tool calls for basic information like timestamps add unnecessary latency to common agent workflows.

## 8. Backlog Watch
High-priority unaddressed backlog item requiring immediate maintainer attention: Issue [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156), which was opened 3 days ago on 2026-06-12, has accumulated 5 user comments but has not received any official maintainer response. This request addresses the needs of high-value paid power users, and unaddressed it risks churning an important segment of the project's core user base. Maintainer triage is also urgently needed for the parallel Vietnamese localization PRs, to avoid redundant wasted work from new contributors and confirm which full translation PR will be merged for the upcoming release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-06-15
---
## 1. Today's Overview
ZeroClaw demonstrated strong, balanced development velocity over the 24-hour update window ending 2026-06-14, with 38 total updated issues and 50 modified pull requests across core runtime, third-party integration, and documentation domains. 66% of recently touched issues were closed in this cycle, reflecting very healthy triage momentum for pending feature requests and bug fixes. No new official releases were published, as maintainers are wrapping up a large batch of new integration additions ahead of the planned 0.80-beta1 milestone for the multi-agent orchestration update. The current work pipeline shows a sustainable mix of internal governance planning, security hardening, and user-facing quality of life improvements, with no unaddressed S1 critical outages flagged in recent updates.

## 2. Releases
No new public releases were published in the last 24 hours.

## 3. Project Progress
A total of 10 PRs were merged or closed in the reporting window, delivering the following key improvements:
1. The high-impact RFC [#7415 Unify Three Agent Turn Engines](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) was fully completed, with redundant runtime code paths consolidated into a single implementation PR (#7540) per maintainer direction to reduce future maintenance overhead.
2. A full batch of 17 new third-party integrations shipped: 4 new global SMS gateway channels (Telnyx, Plivo, Sinch, Vonage), 5 new model providers (Arcee AI, Inception Labs Mercury, Lambda AI Inference, Featherless AI, Upstage Solar), and 8 new smart home/media tool integrations (Sonos, Shazam, Spotify, 8Sleep, Philips Hue, etc.) all finished review and were closed.
3. Multiple high-priority P1 bugs were resolved, including the Gemini OAuth project context parsing failure (#5527), Slack duplicate LLM invocation bug (#6474), and WhatsApp onboarding QR code display failure (#6847).
4. Quality of life improvements completed: support for custom local CA certificates for self-hosted inference providers (#1458), updated Docker documentation for the v0.7.5-debian release (#6760), and the long-requested full-featured precompiled Docker image that bundles all optional features like WhatsApp support (#3642).

## 4. Community Hot Topics
The most actively discussed work items, sorted by comment count:
1. [#3642 Feature: Provide a "full" docker image](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (13 comments, 3 👍): The highest engagement item this cycle, reflecting widespread, longstanding user demand for out-of-the-box container distributions that eliminate the need for non-technical end users to manually modify build flags and compile custom images to unlock optional features.
2. [#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (11 comments): This internal governance RFC signals the community has scaled past 100+ active contributors, with maintainers implementing new automated workflow routing systems to reduce manual administrative overhead for the growing project.
3. [#1458 Feature: Add support for local CA certificates for custom inference provider](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) (7 comments): High engagement on this item confirms that self-hosted, private inference deployments on internal PKI networks are now a core use case for ZeroClaw enterprise and power user bases.

## 5. Bugs & Stability
Bugs sorted by severity level:
1. **S1 Critical P1**: [#7470 Bug: delegate agentic mode rejects empty risk_profile.allowed_tools](https://github.com/zeroclaw-labs/zeroclaw/issues/7470): A core runtime bug that breaks multi-agent reviewer/research setups by blocking agent-to-agent delegation for targets with empty allowed tools lists. The fix PR [#7590 per-agent delegate roster with cross-profile reach](https://github.com/zeroclaw-labs/zeroclaw/pull/7590) is already open and under active development.
2. **S1 Critical P1**: [#5662 QQ channel: voice messages are processed multiple times causing duplicate entries in brain.db](https://github.com/zeroclaw-labs/zeroclaw/issues/5662): A channel bug that triggers 20+ duplicate processing runs for single voice messages, wasting inference resources and bloating the local knowledge database. The issue is marked in-progress.
3. **S2 High P2**: [#6856 Bug: show_tool_calls is missing from [channel] schema v3](https://github.com/zeroclaw-labs/zeroclaw/issues/6856): A degraded functionality bug that breaks custom channel integrations that rely on displaying tool call details to end users, currently marked in-progress.

## 6. Feature Requests & Roadmap Signals
Based on recent merged work and open in-progress items, the following features are highly likely to land in the next 2 release cycles:
1. The massive batch of newly closed SMS gateway, model provider, and media/smart home integrations will almost certainly ship in the next minor v0.7.6 stable release, targeted for late June 2026.
2. The unification of agent turn engines and delegate risk profile gating fixes will be core headline features for the upcoming 0.80-beta1 milestone, alongside the new automated work lane workflow system outlined in RFC #6808.
3. The newly delivered full-featured Docker image and updated container documentation will form the backbone of a new streamlined onboarding flow targeted at new non-technical users, planned for the next stable release.
4. The recently unblocked Nix flake improvement feature will deliver first-class NixOS and declarative infrastructure deployment support within 3 months.

## 7. User Feedback Summary
- **Satisfaction**: Multiple self-hosted users explicitly praised ZeroClaw as the best available open-source self-hosted AI agent tool, per feedback shared in the WhatsApp bug report thread #6847.
- **Top user pain point 1**: New non-technical users reported a high barrier to entry prior to the full Docker image feature, as they previously had to modify build parameters and compile ZeroClaw from source to enable popular optional features like WhatsApp channel support.
- **Top user pain point 2**: Operators running private internal LLMs reported that missing local CA support previously prevented them from connecting ZeroClaw to their internal inference endpoints running on private PKI networks.
- **Dominant use case**: A large share of active users are building scheduled automation workflows (e.g. cron-triggered news alerts routed to multiple personal channels) that drove the recent high demand for expanded SMS and global messaging channel support.

## 8. Backlog Watch
High-priority long-running items requiring dedicated maintainer attention:
1. [#6074 audit: track 153 commits lost in bulk revert c3ff635 for recovery](https://github.com/zeroclaw-labs/zeroclaw/issues/6074): A high-severity P2 tracking issue for 153 previously approved, merged commits that were accidentally erased during a bulk rollback in March 2026, marked in-progress but requiring dedicated core team time to audit and re-land safely.
2. [#5842 Track: evaluate `extra_args` validation / allowlist for security-affecting Codex CLI flags](https://github.com/zeroclaw-labs/zeroclaw/issues/5842): A 2-month old security tracking issue that has received multiple community comments, needing maintainer review to implement guardrails for arbitrary CLI flag passing to Codex subprocesses and prevent potential privilege escalation exploits.
3. [#6823 [Tracker]: Zerocode ACP Bridge](https://github.com/zeroclaw-labs/zeroclaw/issues/6823): A core architecture feature for the TUI <-> daemon RPC connection layer, currently stuck in planning stages with no allocated engineering resources to advance to implementation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*