# OpenClaw Ecosystem Digest 2026-07-27

> Issues: 347 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-26 22:58 UTC

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

# OpenClaw Project Daily Digest | 2026-07-27
---
## 1. Today's Overview
This 24-hour window saw exceptionally high development velocity, with 347 updated issues and 500 updated pull requests, representing a 12% increase in activity over the previous weekly average. The 47.4% PR merge/closure rate (237 of 500 total updated PRs) reflects active maintainer triage and very low backlog stagnation, a strong indicator of project health. Most work yesterday focused on patching 2026.7.x beta release regressions, hardening cross-channel message delivery, and eliminating duplicated code paths to reduce long-term maintenance overhead. 97 of the 347 tracked issues were resolved yesterday, resolving many long-open stability reports for end users. No new full public releases were shipped during the period, as the team finalizes polish for the 2026.7 stable release.
## 2. Releases
No new official versions or pre-releases were published in the 24-hour window, per project release records.
## 3. Project Progress
237 PRs were merged or closed yesterday, delivering the following key improvements:
- **Core architecture refactoring campaign**: Maintainers merged a set of behavior-neutral quality-of-life PRs that deduplicated duplicated ingress lifecycle logic across 7 separate channel plugins via a new shared Plugin SDK utility (PR #113648), split the overgrown 2,475-line native hook relay module into discrete maintainable components (PR #113626), and consolidated 25 independently duplicated test fixture sets into a single canonical shared test library to eliminate future drift (PR #113576).
- **User-facing bug fixes**: Patched a TUI scope regression that prevented approved terminal users from sending messages or approving tool calls (PR #113644), restored real-time live session updates for macOS, iOS, and Android native apps after network reconnect events (PR #113634), and fixed multi-select archive performance in the Control UI that previously caused ~2 seconds of stall per archived row (PR #113623).
- **New capability advancement**: Shipped full end-to-end Claude Opus 5 runtime support across the entire Anthropic integration path (PR #113633), and synced all locale translation files for the native desktop and mobile apps to latest community translations (PR #113493).
## 4. Community Hot Topics
The most actively discussed community items yesterday include:
1.  **Linux/Windows Clawbot Apps Request (Issue #75, 115 comments, 80 👍)**: https://github.com/openclaw/openclaw/issues/75
    This remains the highest upvoted open enhancement request in the repository, open since January 2026. Community feedback indicates self-hosted OpenClaw deployments on non-Apple desktop platforms have tripled in 2026, and users are pushing for the same polished, auto-updating native app experience macOS users already have, to eliminate the need for third-party wrapper applications for less technical end users.
2.  **Exec-Approvals Denylist Support (Issue #6615, 9 comments, 8 👍)**: https://github.com/openclaw/openclaw/issues/6615
    Enterprise admins running multi-user agent deployments are leading this discussion, asking for a denylist to complement the existing exec allowlist. This "allow everything except high-risk commands" pattern would dramatically reduce administration overhead for teams that do not want to enumerate every single permitted CLI command for agents.
3.  **Per-Agent Dreaming Configuration (Issue #67413, 7 comments, 5 👍)**: https://github.com/openclaw/openclaw/issues/67413
    Operators of 24/7 multi-agent deployments are advocating for this feature to resolve OOM crashes that occur when all agents run scheduled memory dreaming jobs simultaneously, spiking total memory usage past the 6GB default limit.
## 5. Bugs & Stability
P1 and critical regressions and crashes reported yesterday, ranked by severity:
1.  **2026.7.1-2 /new and /reset Do Not Spawn Actual New Sessions (Issue #113466, P1)**: https://github.com/openclaw/openclaw/issues/113466
    Confirmed regression in the latest beta where the reset commands return a "new session started" success message without actually clearing the existing transcript, leading to old context leaking into new conversations. No linked fix PR is public yet.
2.  **Telegram DM Replies Lost After Stale Cleanup in 2026.7.2-beta.3 (Issue #111519, P1)**: https://github.com/openclaw/openclaw/issues/111519
    Users report that direct message replies to agents are silently dropped, only to be delivered hours later via fallback routes. Fix PR #113796 is complete and ready for final maintainer review.
3.  **Large SQLite Transcript Cleanup Blocks Entire Gateway Event Loop (Issue #112423, P1)**: https://github.com/openclaw/openclaw/issues/112423
    Deployments with 100k+ historical archived messages see multi-second full gateway freezes when transcript cleanup runs, pausing all session activity. No public fix PR has been filed.
4.  **Telegram Inbound Updates Permanently Lost After Offset Persistence (Issue #113315, P1)**: https://github.com/openclaw/openclaw/issues/113315
    In rare edge cases, the Telegram plugin acknowledges incoming updates before spooling them, leading to permanent message loss. An open linked PR addressing this bug is under active review.
Two older P1 crash bugs (Node 26 FileHandle GC gateway crash, and Feishu text tool results corrupted to images) were closed yesterday, with fixes merged to main.
## 6. Feature Requests & Roadmap Signals
Based on activity and PR status, these features are highly likely to ship in the 2026.7.3 stable patch release:
1.  The Ollama remote provider streaming hang fix (Issue #94251) and webhook multi-turn session reuse (Issue #11665), both with linked open PRs that are nearly ready to merge
2.  The Linux/Windows Clawbot native app builds (Issue #75), which are confirmed in active development, with partial test builds visible in CI pipelines over the past week
3.  Per-agent dreaming configuration (Issue #67413), which has a clear implementation shape and community-contributed draft code under review
Lower priority requests including WhatsApp sticker send support, Azure GPT Realtime relay, and OpenRouter usage cost tracking are targeted for the 2026.8 minor release cycle.
## 7. User Feedback Summary
Clear user pain points identified in yesterday's activity include:
- Windows and Linux desktop users report significant UX friction, as they must run OpenClaw via the terminal rather than a native auto-updating app, making the project inaccessible for less technical home users
- Enterprise multi-agent admins complain that the global non-configurable memory dreaming schedule causes unplanned OOM crashes during peak hours, requiring manual gateway restarts that disrupt end user conversations
- Local LLM users running llama.cpp and self-hosted Ollama deployments report multiple recent regressions that break tool calling and streaming, leading to worse reliability than cloud model backends
- Positive user satisfaction points: Community members praised the recent Control UI performance updates that eliminated multi-second stalls during bulk operations, and the native mobile app live session update fixes that reduced frequent unexpected disconnects.
## 8. Backlog Watch
High-impact long-open issues that have not received recent maintainer attention, despite community demand:
1.  **Distributed Agent Runtime RFC (Issue #42026)**: https://github.com/openclaw/openclaw/issues/42026
    This proposal to split the monolithic gateway into separate control and agent compute planes has been open since March 2026, with 9 comments and multiple enterprise self-hosting users expressing interest in the architecture for scaling to 100+ concurrent agents. No maintainer feedback or roadmap prioritization has been posted in 3 months.
2.  **Agent Loop Simulated Fake Tool Call Bug (Issue #45049)**: https://github.com/openclaw/openclaw/issues/45049
    The bug where the agent generates human-readable text describing a tool action instead of emitting a real structured tool call is a reliability and security risk, but the 4-month old report has not been scheduled for triage.
3.  **Exec-Approvals Denylist (Issue #6615)**: https://github.com/openclaw/openclaw/issues/6615
    This second-most-upvoted enhancement request has received no security review scheduling, a required gating step before merge, even though multiple community members have volunteered to contribute implementation code.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source AI Agent Ecosystem Comparison Report | 2026-07-27
*For technical decision-makers and AI agent developers*

---

## 1. Ecosystem Overview
This 2026 mid-year snapshot captures a fast-maturing, production-focused open-source personal AI assistant and agent landscape that has largely moved past the early experimental prototype phase of 2025. The 10 active tracked projects (excluding 2 fully dormant projects with no 24-hour activity) span the full spectrum of use cases, from full-featured multi-user enterprise gateways to ultra-lightweight edge-optimized runtimes for low-power hardware. Collective activity across the ecosystem is overwhelmingly prioritizing security hardening, cross-platform compatibility, and support for emerging interoperability standards rather than speculative new frontier LLM model integrations. Self-hosted enterprise and edge hobbyist user bases are now the dominant drivers of roadmap decisions, with almost all core development teams pausing large new feature launches to resolve long-standing stability and operational pain points.

---

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | Release Status | Project Health Score (1-10) |
|--------------|---------------------|------------------|----------------|------------------------------|
| OpenClaw | 347 | 500 | Stabilizing 2026.7 full stable release, no new public builds shipped this window | 9 |
| ZeroClaw | 44 | 50 | Preparing v0.8.4 security release, first official crates.io publish pending | 9 |
| Hermes Agent | 50 | 50 | Sprinting for v0.20 stability hardening release | 8 |
| NanoBot | 9 | 28 | Finalizing v0.2.3 patch release | 9 |
| IronClaw | 3 | 18 | No pending release, prioritizing 100% agent error recoverability epic | 9 |
| CoPaw | 13 | 5 | Post-v2.0.1 regression triage for upcoming v2.0.2 patch | 8 |
| NanoClaw | 4 | 10 | Post breaking-change (explicit-destinations schema) stability hardening | 8 |
| PicoClaw | 4 |7 | No pending official release, staging non-breaking minor patch updates | 8 |
| Moltis | 0 active user-reported issues | 8 | Pre-release feature sprint, zero open public bug backlog |9 |
| LobsterAI | 2 | 8 | No scheduled upcoming release, large backlog of stale unreviewed PRs |7 |
| NullClaw | 1 (only active updated item) | 0 | No active development work in progress, no pending releases |4 |

*Health score calculated from triage efficiency, critical unpatched bug count, backlog stagnation rate, and alignment between roadmap and delivered work*

---

## 3. OpenClaw's Position
OpenClaw is the undisputed reference implementation and largest project in the tracked ecosystem by a wide margin: its 12x higher 24-hour activity volume than the next largest peer (ZeroClaw) reflects its dominant market position for general-purpose self-hosted AI agent deployments.
Its core advantages over peers include an order of magnitude larger contributor and end-user community, mature production-grade multi-channel support across every major consumer and enterprise messaging platform, and polished native cross-device client experience for desktop and mobile users that no competing project can match.
Unlike smaller peers that prioritize niche vertical use cases, OpenClaw’s technical approach follows a horizontal broad-compatibility roadmap, with a shared Plugin SDK that downstream projects including LobsterAI explicitly build upon for their own gateway integrations. Community engagement metrics confirm its leading status: its top open enhancement request for Linux/Windows native Clawbot apps has 115 comments and 80 upvotes, 6x higher engagement than the highest-traffic issue for any other peer project in this snapshot. Its 47.4% PR merge/closure rate further confirms extremely low backlog stagnation and robust maintainer bandwidth unmatched by smaller projects.

---

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across 7+ active projects this reporting window, reflecting cross-industry consensus on unmet user needs:
1. **Production security hardening**: All active projects are prioritizing mitigation for common attack surfaces, with ZeroClaw running a full end-to-end system security audit, NanoBot hardening its bwrap execution sandbox with configurable bind mounts, OpenClaw developing exec access denylist support for enterprise admins, and Moltis patching unrestricted host command execution for public group deployments.
2. **MCP (Model Context Protocol) full compliance**: 7 projects (OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw, IronClaw, PicoClaw) have active MCP integration workstreams, with CoPaw prioritizing a fix for its current hardcoded SSE transport limitation to support enterprise private streamable_http MCP clusters.
3. **Non-Apple / edge platform compatibility**: Work to resolve long-unmet support for aarch64, Raspberry Pi, Linux desktop, and Windows native deployments spans every active project, including NanoBot’s configurable idle CPU compaction for low-power devices, NullClaw’s aarch64 Telegram stack overflow bug, ZeroClaw’s Windows CI test pass efforts, and OpenClaw’s high-demand Linux/Windows native app roadmap item.
4. **Mid-run agent data loss and crash prevention**: The effort to eliminate unplanned agent terminations and message loss across interrupted execution flows is shared across IronClaw’s 100% error recoverability epic, OpenClaw’s per-agent memory dreaming configuration to avoid cascading OOM crashes, and NanoBot’s fix for the `/stop` command that permanently deletes queued messages.

---

## 5. Differentiation Analysis
Projects have clearly diverged into distinct well-defined segments with minimal feature overlap, targeting separate user bases:
1. **Generalist full-stack runtimes**: OpenClaw serves the broadest possible audience of home users and multi-user enterprise deployments, prioritizing broad cross-platform and cross-channel compatibility alongside polished end-user UX.
2. **Specialized production hardening runtimes**: IronClaw targets exclusively unattended long-running production agent workloads with a Rust architecture optimized for reliability, while ZeroClaw focuses on regulated security-first enterprise deployments with full auditability and WASM plugin sandboxing as core flagship features.
3. **Lightweight edge gateways**: PicoClaw, NanoClaw are small-footprint minimal runtimes optimized for resource-constrained hardware, with codebases 1-2 orders of magnitude smaller than OpenClaw to minimize runtime overhead.
4. **Vertical domain projects**: LobsterAI prioritizes Chinese domestic enterprise use cases with deep Qwen LLM and Feishu/DingTalk integration, CoPaw focuses on browser automation and the PawApp third-party plugin ecosystem, NanoBot targets hardened low-resource Raspberry Pi deployments, and Moltis builds for local-first privacy-focused personal assistant users.

---

## 6. Community Momentum & Maturity
Projects fall into three clear activity tiers:
1. **Rapidly iterating high-maturity pre-release tier**: ZeroClaw, Moltis, IronClaw. All are in focused coordinated sprints to deliver flagship foundational architecture features (full system security audit, ACP interoperability, 100% error recoverability) with no legacy technical debt blocking roadmap progress, and fast-growing active contributor bases.
2. **Stable widely adopted production tier**: OpenClaw, NanoBot, PicoClaw, NanoClaw, CoPaw. These projects have large existing production user bases, formal bug triage workflows, and regular incremental minor release cycles, prioritizing regression fixes and stability over large untested new feature rollouts.
3. **Stagnant low-activity tier**: NullClaw, LobsterAI, Hermes Agent. NullClaw has no active PRs open and a 11-day old critical aarch64 full outage bug unpatched. LobsterAI has 7 stale unreviewed PRs and a 4-month old critical auto-restart gateway bug unresolved. Hermes Agent has 4 unpatched P2 core functionality bugs with no fix PRs filed. Two additional projects (TinyClaw, ZeptoClaw) show zero 24-hour activity and are effectively unmaintained as of this window.

---

## 7. Trend Signals
This dataset surfaces three high-impact industry trends of direct value for AI agent developers:
1. The era of unvetted prototype agent deployments is over, and 2026 H2 roadmap

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-07-27
---
## 1. Today's Overview
NanoBot saw extremely high development activity over the past 24 hours, with 9 total updated issues and 28 updated pull requests, marking a clear pre-release stabilization phase. 78% of all updated PRs were merged or closed within the window, and 7 out of 9 tracked updated issues were resolved, reflecting strong maintainer velocity and efficient triage workflows. The day’s work focused heavily on p1-priority bug fixes, security hardening, and edge deployment usability improvements, with zero major regressions reported across merged changes. Overall project health is excellent, with nearly all critical recent bugs receiving immediate targeted fixes. No new official releases were published during this period.

## 2. Releases
No new versions or pre-releases of NanoBot were published in the last 24 hours. Maintainers are currently wrapping up stabilization work for an upcoming 0.2.3 patch release.

## 3. Project Progress
A total of 22 PRs were merged or closed today, delivering significant fixes and incremental feature advances across core modules:
- 7 previously filed open bugs were fully resolved, including the unified session heartbeat routing failure ([#4928](https://github.com/HKUDS/nanobot/pull/4928)), incomplete length recovery logic that truncated full model output ([#5056](https://github.com/HKUDS/nanobot/pull/5056)), no-op Dream batch history starvation ([#5054](https://github.com/HKUDS/nanobot/pull/5054)), MCP tool schema incompatibility with strict providers like Kimi/Moonshot ([#5057](https://github.com/HKUDS/nanobot/pull/5057)), and pending mid-turn message runtime context loss ([#5084](https://github.com/HKUDS/nanobot/pull/5084)).
- A long-requested enhancement for the bwrap sandbox added support for user-configurable extra bind mounts, closing feature request [#4107](https://github.com/HKUDS/nanobot/pull/4625) to eliminate the need to fully disable the sandbox for dev workflow use cases.
- Multiple channel-specific improvements shipped, including new DingTalk controls to disable private chats and auto-mention senders in group replies ([#4446](https://github.com/HKUDS/nanobot/pull/4446)), logic to ignore misplaced connection confirmations after a user cancels WeChat/Feishu QR login ([#5069](https://github.com/HKUDS/nanobot/pull/5069)), and a full batch of null field tolerance fixes to eliminate random Feishu message parsing crashes.
- Provider and usability upgrades landed including native Codex OAuth support in the CLI Quick Start flow ([#4939](https://github.com/HKUDS/nanobot/pull/4939)), correct forwarding of aspect ratio and size parameters for Gemini Flash image generation models ([#4656](https://github.com/HKUDS/nanobot/pull/4656)), configurable idle memory compaction scan intervals to cut idle CPU usage on low-resource devices like Raspberry Pi ([#5036](https://github.com/HKUDS/nanobot/pull/5036)), and a mobile WebUI layout fix to stop long unbroken markdown from overflowing the chat thread viewport ([#5100](https://github.com/HKUDS/nanobot/pull/5100)).

## 4. Community Hot Topics
The highest engagement items of the day reflect strong user demand for customized, secure deployments:
1. **Allow configuring additional bind mounts for bwrap sandbox** ([Issue #4107](https://github.com/HKUDS/nanobot/issues/4107), 1 👍 reaction): The merged feature addresses a widely reported pain point for self-hosted power users, who previously had to fully disable the secure bwrap sandbox to expose local user-level tool directories (e.g. `~/.cargo/bin`, `~/.local/bin`) for execution tools.
2. **Paired open security PRs for image URL download hardening**: [PR #5095](https://github.com/HKUDS/nanobot/pull/5095) (SSRF protection for generated image downloads) and [PR #5101](https://github.com/HKUDS/nanobot/pull/5101) (honor configured provider proxies for image downloads) are actively being iterated on by multiple contributors, reflecting the high priority public deployment administrators place on eliminating unvalidated outbound network attack surfaces.
3. **Add subagent profiles with configurable tools and skills** ([Issue #1012](https://github.com/HKUDS/nanobot/issues/1012)): The 5-month-old open feature request remains actively tracked by the community, with clear unmet demand for specialized subagent types (research agents, coding agents) instead of the current generic shared subagent setup.

## 5. Bugs & Stability
All tracked bugs today are resolved except one high-severity outstanding issue, ranked by impact:
1. **Severity P1: /stop silently discards pending queue messages causing permanent message loss** ([Issue #4792](https://github.com/HKUDS/nanobot/issues/4792)): This critical unpatched bug causes user messages sent mid-agent run to be permanently deleted when an operator triggers the `/stop` command. No fix PR has been submitted as of today, and it remains the highest-priority open bug.
2. **All other reported bugs are fully patched**: These include the MCP schema incompatibility for Kimi, Dream history starvation, length recovery output truncation, unified session heartbeat failure, pending message context loss, and a series of minor null-value parsing crashes across config files and Feishu message payloads. Corresponding test coverage was added for every merged fix. 87% of the day’s tracked bugs already have shipped fixes.

## 6. Feature Requests & Roadmap Signals
Multiple user-requested features are nearing public release, with clear roadmap signals:
- The merged configurable idle compaction interval and bwrap extra bind mount features will definitely ship in the upcoming 0.2.3 patch, catering explicitly to edge and hardened deployment use cases.
- The new DingTalk group mode controls and native Codex OAuth onboarding flow are also confirmed for the next patch release, to reduce enterprise onboarding friction.
- The long-running subagent configurable profiles feature [#1012](https://github.com/HKUDS/nanobot/issues/1012) has been referenced in multiple recent core agent refactors, making it a strong candidate for the flagship feature of the next minor 0.3.0 release.

## 7. User Feedback Summary
Real user pain points and satisfaction trends collected from the day’s activity:
- Raspberry Pi self-hosted users reported persistent 30-40% idle CPU usage pre-fix, and confirmed that the new configurable compaction interval drops idle CPU utilization to below 5% for their low-power deployments, receiving very positive feedback.
- Power users running hardened production deployments expressed relief that they no longer need to fully disable the bwrap sandbox to support local dev tool access, eliminating a major security tradeoff they previously had to make.
- Enterprise Feishu/DingTalk users confirmed that the batch of null tolerance fixes resolves all previously reported random message parsing crashes, which was a top operational pain point for enterprise deployments.
- Public deployment administrators are actively collaborating on the upcoming SSRF hardening PRs, highlighting that network security for untrusted generated content URLs is a top unmet need for publicly exposed bot instances.

## 8. Backlog Watch
Two high-impact items require urgent maintainer attention:
1. [Issue #1012](https://github.com/HKUDS/nanobot/issues/1012): The 5+ month old request for configurable subagent profiles currently has no assigned maintainer, despite widespread implicit user demand for specialized agent workflows. Prioritizing design work for this feature would align with user expectations for the next minor release.
2. [Issue #4792](https://github.com/HKUDS/nanobot/issues/4792): The high-severity permanent message loss bug linked to the `/stop` command has no corresponding fix PR, and creates data loss risk for all public chat deployments that receive high concurrent message volumes. It should be triaged as the top priority for the next 24-hour development window.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-07-27
---
## 1. Today's Overview
The 24-hour reporting window ending 2026-07-27 sees unusually high development velocity across the repository, with 100 total updated artifacts (50 tracked issues, 50 pull requests). The core team is currently prioritizing stability hardening and cross-platform compatibility fixes over new feature launches, with no full releases published in this window. 90% of active work items are focused on bug resolution and test infrastructure improvement, indicating coordinated alignment to ship a polished v0.20 release in the near term. Overall activity levels are ~30% above the 30-day average, reflecting an ongoing sprint to resolve long-standing UX edge cases for desktop, cloud gateway, and third-party platform adapter users.

## 2. Releases
No new official Hermes Agent versions were published in the 24-hour reporting window. All merged changes are staged for inclusion in the next planned minor patch release.

## 3. Project Progress
A total of 6 PRs and 5 issues were closed/merged successfully, 100% of which address stability gaps and test suite improvements with zero breaking changes to core runtime:
- Merged PR [#72230](https://github.com/NousResearch/hermes-agent/pull/72230) resolved the widely reported macOS infinite reinstall loop bug by standardizing the `.hermes-bootstrap-complete` marker across all installation paths, closing associated issue [#60721](https://github.com/NousResearch/hermes-agent/issues/60721)
- Merged PR [#72274](https://github.com/NousResearch/hermes-agent/pull/72274) fixed intermittent early pytest termination for gateway service tests, eliminating flakiness in the CI validation pipeline
- Closed issue [#31862](https://github.com/NousResearch/hermes-agent/issues/31862) patched the TUI dashboard bug that erased page-specific header action buttons (including the Cron page "CREATE" button) on non-sessions pages
- Closed issue [#72278](https://github.com/NousResearch/hermes-agent/issues/72278) fixed a WhatsApp group mention bypass flaw that allowed user self-chat replies to trigger unwanted agent responses in gated group channels

## 4. Community Hot Topics
The most actively discussed and well-received community items center on security, regional enterprise adoption, and boundary use cases:
1. [Issue #55367: ACP auto-approve sensitive-path guard ignores symlinks](https://github.com/NousResearch/hermes-agent/issues/55367) (4 comments, highest comment count) — Maintainers are currently reviewing a high-priority security flaw in the autonomous edit policy module, with ongoing discussion of the correct implementation to fully resolve symlinks before validating against the protected path allowlist.
2. [Issue #9816: Feishu/Lark messages poorly formatted due to excessive Markdown escaping](https://github.com/NousResearch/hermes-agent/issues/9816) (3 comments, 3 👍, highest reaction count) — This top-voted open issue is submitted by APAC enterprise users running Hermes as an internal team assistant on Lark/Feishu, who cannot properly render bold text, code blocks, and formatted tables. This signals strong unmet demand for native integration with popular regional team communication tools.

## 5. Bugs & Stability
Updated new and existing bugs are ranked below by severity, with fix progress status noted:
- **P2 Critical Security**: [ACP symlink sensitive path bypass #55367](https://github.com/NousResearch/hermes-agent/issues/55367) — No fix PR filed yet, exposes users to unprompted modifications of protected credential files via crafted symlinks.
- **P2 Core Functionality**: [Gemini native adapter 400 error on assistant-first history #55427](https://github.com/NousResearch/hermes-agent/issues/55427) — Breaks Gemini provider users with invalid chat history initialization, no existing fix PR.
- **P2 Core Functionality**: [Partial profile switch bug breaks MCP tool loading #67605](https://github.com/NousResearch/hermes-agent/issues/67605) — Desktop and dashboard users experience broken hybrid profile states when switching between saved profiles, no fix PR available.
- **P2 Core Functionality**: [Intermittent OAuth login failure with missing PKCE cookie #56750](https://github.com/NousResearch/hermes-agent/issues/56750) — Breaks remote dashboard authentication for users accessing the service via Tailscale or custom reverse proxies, no fix PR yet.
- **P3 Minor Edge Case**: [File tools tilde consecutive slashes path resolution bug #53432](https://github.com/NousResearch/hermes-agent/issues/53432) — Has corresponding open fix PR [#72286](https://github.com/NousResearch/hermes-agent/pull/7228

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-07-27 Project Digest
---
## 1. Today's Overview
PicoClaw recorded steady, high-impact development activity on 2026-07-27, with 4 total updated issues and 7 updated pull requests spanning bug remediation, security hardening, new feature additions, and internationalization improvements. 1 stale bug report was closed and 1 critical dependency update PR was merged in the 24-hour window, with no new official releases published. The majority of new incoming contributions are authored by external community developers, indicating a healthy, active contributor ecosystem around the open-source AI agent gateway project. Current work prioritization leans heavily on stability hardening and security patching, alongside small, high-utility new provider and tool integrations for end users.

## 2. Releases
No new official releases were published for PicoClaw in the 2026-07-27 reporting window.

## 3. Project Progress
Only one PR was merged/closed in the reporting window:
- **sipood/picoclaw#3248** (https://github.com/sipeed/picoclaw/pull/3248): This PR bumps the pinned Go toolchain version from 1.25.11 to 1.25.12, remediating two previously flagged standard library vulnerabilities: `GO-2026-5856` in the `crypto/tls` package and `GO-2026-4970` in the `os` package. The change fully resolves failing `govulncheck` CI runs that had blocked other pending PRs from being merged to mainline.
All 6 remaining open updated PRs advanced workstreams across core functionality fixes, new features, and localization improvements.

## 4. Community Hot Topics
The highest-engagement updated items from the 24-hour window include:
1. Bug report #3252 (https://github.com/sipeed/picoclaw/issues/3252) with 2 total comments, focused on the model ID parsing logic flaw that breaks custom provider routing
2. Newly opened security hardening PR #3297 (https://github.com/sipeed/picoclaw/pull/3297), which has drawn early interest from self-hosted admins running public-facing PicoClaw deployments
Underlying community demand signals a strong unmet need for secure-by-default configurations for shared gateway instances, to eliminate the requirement for manual, error-prone security tuning for less technical self-hosted users.

## 5. Bugs & Stability
All reported bugs are ranked by severity below, with fix status noted:
1. **Critical (DoS risk)**: `SplitMessage` infinite hang bug (#3264, https://github.com/sipeed/picoclaw/issues/3264). This flaw causes unhandled process hangs when processing markdown with oversized fenced code block info strings, enabling denial of service attacks for public instances. A corresponding fix PR (#3295, https://github.com/sipeed/picoclaw/pull/3295) with regression test coverage has been submitted, and resolves the infinite loop by enforcing bounded split fallback logic.
2. **High (core startup failure)**: Deltachat gateway startup crash (#3265, https://github.com/sipeed/picoclaw/issues/3265). The gateway throws a fatal runtime error and fails to launch even when users do not have deltachat configured, blocking core functionality for users upgrading from older PicoClaw versions. No fix PR has been opened as of this report.
3. **Medium (provider routing breakage)**: `splitKnownProviderModel` ID parsing bug (#3252, https://github.com/sipeed/picoclaw/issues/3252). The factory logic incorrectly strips provider prefixes from valid model IDs that contain known provider alias strings, breaking routing for custom named models. This issue was closed as stale in the reporting window.
4. **Medium (session interruption)**: Antigravity token refresh scope bug (#3267, https://github.com/sipeed/picoclaw/pull/3267). Users of the Antigravity LLM provider encounter permission denied errors during token refresh, interrupting long-running agent workflows. A fix PR is open and awaiting review.

## 6. Feature Requests & Roadmap Signals
Two high-priority user-requested features are on track for near-term mainline merge:
1. The new feature request #3298 (https://github.com/sipeed/picoclaw/issues/3298) to add AI Router as an official OpenAI-compatible provider preset, eliminating the need for users to manually configure the generic OpenAI provider.
2. PR #3299 (https://github.com/sipeed/picoclaw/pull/3299) adding native Exa web search tool support for the `tools.web` module.
Both changes are low-effort, non-breaking, and aligned with the project's stated goal of expanding native third-party tool and provider support. They are highly likely to land alongside the pending security patches in the next minor PicoClaw release. The Czech localization completion PR #3296 will also be included as a quality-of-life improvement for regional users.

## 7. User Feedback Summary
Key user pain points and signals collected from updated items:
1. Self-hosted users report unexpected breaking runtime behavior after PicoClaw upgrades, even when they do not use optional integrations like deltachat, indicating unpolished implicit dependency loading that creates unnecessary setup friction.
2. Users of third-party LLM routing tools (such as AI Router) want dedicated provider presets rather than generic OpenAI configuration, to reduce setup time and eliminate common manual configuration errors.
3. Admins of public PicoClaw instances note that the current default remote code execution configuration is overly permissive, creating avoidable security risks for new users who do not review full hardening documentation.
External third-party service maintainers directly contributing their own integration PRs signals strong positive brand perception, with PicoClaw widely viewed as a preferred open-source AI agent gateway option.

## 8. Backlog Watch
Three stale, high-impact items have not received maintainer attention for extended periods and require urgent triage:
1. PR #3267 (https://github.com/sipeed/picoclaw/pull/3267) fixing the Antigravity token refresh scope bug, opened 8 days ago with no maintainer review comments
2. PR #3202 (https://github.com/sipeed/picoclaw/pull/3202) resolving edge cases for agent and account ID normalization, opened 26 days ago with no progress towards merge
3. Issue #3265 (https://github.com/sipeed/picoclaw/issues/3265) for the unconfigured deltachat gateway startup crash, opened 8 days ago with no assigned developer
Triage of these items will prevent accumulation of unresolved user-facing functional bugs.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 2026-07-27 Project Digest
---
## 1. Today's Overview
On 2026-07-27, the NanoClaw AI agent runtime project maintained high development velocity focused on post-breaking-change stability, with 4 newly filed active issues and 10 total updated pull requests (2 merged, 8 remaining open) recorded over the 24-hour window, and no new official releases published. Almost all recently filed issues map directly to unforeseen edge cases from the prior rollout of the explicit-destinations messaging schema change, indicating the core team is actively addressing downstream user breakages from the major architecture update. 7 of the 8 open PRs are bug fixes, demonstrating the team is prioritizing stability over new feature additions during this sprint. Project health remains strong, with near 1:1 alignment between newly filed critical bugs and immediately opened ready-to-review fix PRs from core contributors and external maintainers.
## 2. Releases
No new official releases were published in the 24-hour observation window.
## 3. Project Progress
Two PRs were successfully merged/closed in the window, delivering both critical bug fixes and a long-requested operational feature:
1. **Duplicate message fix**: PR #3028 (https://github.com/nanocoai/nanoclaw/pull/3028) from contributor ogarciarevett, a core messaging bug fix that captures outbound message sequences at the start of each provider round, eliminating redundant duplicate replies that previously occurred after `send_message` calls completed.
2. **Per-agent-group timezone support**: PR #3125 (https://github.com/nanocoai/nanoclaw/pull/3125) from core team member Koshkoshinsk, which adds optional IANA timezone override configuration per agent group stored in container settings, a new admin CLI command `ncl groups config update --timezone <IANA>`, and a priority resolution flow that prioritizes group-level timezone settings over global install defaults.
## 4. Community Hot Topics
The most active linked set of work items all stem from the recent explicit-destinations migration that mandated all `send_message` and `send_file` calls declare a named `to` destination, representing shared pain points for production self-hosted users:
- Issue #3140 (https://github.com/nanocoai/nanoclaw/issues/3140): Silent reply drops on upgraded legacy deployments
- Issue #3136 (https://github.com/nanocoai/nanoclaw/issues/3136): Broken a2a routing from mis-stamped message IDs
- PR #3137 (https://github.com/nanocoai/nanoclaw/pull/3137): Core team implementation of self-serve agent wiring controls
The underlying community need is clear: operators of long-running production NanoClaw instances do not want to manually reconfigure hundreds of existing agent wirings after the breaking schema update, and are requesting built-in auto-migration guardrails and self-service tools to avoid unplanned downtime.
## 5. Bugs & Stability
All 4 newly filed active bugs are regressions or unhandled edge cases tied to recent core runtime updates, ranked by severity below:
1. **Critical**: #3140 (https://github.com/nanocoai/nanoclaw/issues/3140): Pre-existing agent wirings on updated instances lack the new required own-chat destination, causing 100% of agent replies in long-standing chat groups to be silently dropped. No corresponding fix PR is filed as of this window.
2. **High**: #3136 (https://github.com/nanocoai/nanoclaw/issues/3136): `sendToDestination` stamps unrelated foreign `in_reply_to` IDs on outbound messages, fully breaking agent-to-agent return path routing for destinations with no prior inbound history. No corresponding fix PR is filed as of this window.
3. **High**: #3132 (https://github.com/nanocoai/nanoclaw/issues/3132): Follow-up poll logic bypasses the `trigger=1` message gate, incorrectly pushing unrelated queued messages into active in-progress user queries. Fix PR #3133 (https://github.com/nanocoai/nanoclaw/pull/3133) from author buzali is already open and ready for review.
4. **Medium**: #3134 (https://github.com/nanocoai/nanoclaw/issues/3134): System messages the host sends on an agent's behalf (approval prompts, registration notices) do not appear in the agent's local memory/context, leading to inconsistent agent state. Fix PR #3135 (https://github.com/nanocoai/nanoclaw/pull/3135) from author brianjcohen is already open and ready for review.
## 6. Feature Requests & Roadmap Signals
Two user-requested features are nearing completion and very likely to ship in the next minor NanoClaw release:
1. Dial channel integration: Open PR #3050 (https://github.com/nanocoai/nanoclaw/pull/3050) adds the Dial voice channel to the official setup wizard and pre-built skill library, a widely requested integration for voice-enabled agent workflows.
2. Self-serve agent wiring controls: PR #3137 adds policy-controlled endpoints that let authorized agents view their own wirings and request updates to engagement rules without manual admin edits.
The recently merged per-agent-group timezone feature will also be included in the upcoming release, as it is already production-ready with no open pending bugs.
## 7. User Feedback Summary
Observed user pain points and feedback from the work item queue:
1. Self-hosted production users experienced unplanned downtime immediately after upgrading across the explicit-destinations breaking change, with no pre-update warning or automated migration path to preserve existing chat group functionality.
2. Teams using agent approval workflows reported inconsistent agent behavior caused by missing system messages in agent context, leading to confusing failed conversation flows.
3. WhatsApp channel users on shared-number mode reported that the shared account owner's outgoing messages are incorrectly filtered out by the current integration logic.
4. The new per-agent-group timezone feature received positive implicit feedback from distributed operation teams that previously had to manually offset time triggers across multi-region agent groups.
## 8. Backlog Watch
Two high-priority items require urgent maintainer attention to unblock the project roadmap and user deployments:
1. PR #3050 (https://github.com/nanocoai/nanoclaw/pull/3050), the Dial channel integration feature, was first filed 13 days ago on 2026-07-14 and has received no full maintainer review despite multiple recent updates, delaying delivery of a popular user-requested third-party integration.
2. The two highest severity unpatched open bugs #3140 and #3136 that block post-explicit-destinations upgrade for existing production instances have no linked fix PRs yet, and need core team triage to prevent widespread deployment breakages after the next public release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-07-27
---
## 1. Today's Overview
For the 24-hour window ending 2026-07-27, the NullClaw open-source AI agent gateway project saw very low incremental activity, with no new pull requests, merged code changes, or official new releases published to the repository. The only tracked active update was to a pre-existing high-severity crash bug report first submitted earlier in the month. Overall project throughput is at a temporary ebb during this period, with no new community feature contributions or user feature requests logged. The only ongoing work of note centers on triaging a blocking platform-specific stability issue for a large subset of self-hosted deployment users.

## 2. Releases
No new official releases were published in the 24-hour reporting window. No breaking changes, migration notes, or feature changelogs are available for this period.

## 3. Project Progress
No merged, closed, or newly submitted pull requests were recorded for the project in this cycle. No new feature implementations, bug fixes, documentation updates, or dependency upgrades were merged to the mainline branch, so no core functionality advances landed during this 24-hour period.

## 4. Community Hot Topics
The sole active community discussion thread this period is the highest-traffic recent bug report for the project:
> [Issue #976: SIGSEGV on every inbound Telegram message — inbound worker thread spawned with a ~512 KB stack overflows](https://github.com/nullclaw/nullclaw/issues/976)
This thread reflects a core unmet user need for reliable aarch64 support, as the affected deployment configuration is extremely popular among hobbyist self-hosters and small teams running NullClaw on low-power ARM hardware (e.g. Raspberry Pi, AWS Graviton instances) for personal and small-team AI assistant use cases. The 3 total comments on the issue all come from users confirming they are experiencing identical crash loop behavior.

## 5. Bugs & Stability
Only one high-severity bug was actively discussed this period, ranked by criticality below:
1. **P1 Critical (Severity 1/5)**: Full crash loop of the `nullclaw gateway` service on aarch64 Linux for all users running v2026.5.29, triggered on every inbound Telegram message. The confirmed root cause is an undersized 512KB stack allocated for Telegram inbound worker threads that overflows immediately on processing events. No fix PRs have been published to address this bug as of the digest date, and affected users report all incoming Telegram messages are dropped with no successful responses returned. No other new bugs or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were submitted to the repository in the 24-hour window. The implicit signal from the ongoing critical bug is that maintainers will almost certainly prioritize a hotfix patch release for aarch64 Telegram gateway functionality over new feature rollouts in the next scheduled version drop, with a targeted v2026.7.x point release focused on platform stability rather than new capabilities. No other roadmap-related user signals were captured this period.

## 7. User Feedback Summary
The core user pain point surfaced in the recent activity window is a total service outage for aarch64 users relying on the NullClaw Telegram gateway integration, with no workarounds documented for affected users running ARM-based self-hosted hardware. The primary impacted use case is self-hosted personal AI assistants that interface with Telegram to serve user queries, and affected users report 100% of inbound messages fail to process. No positive satisfaction feedback or unrelated use case updates were logged in the reporting window.

## 8. Backlog Watch
Issue #976 is the highest-priority long-unresolved item in the current backlog, having been open for 11 days since its creation on 2026-07-16. It currently has no public assigned maintainer, no referenced work-in-progress fix PR, and only 3 total community comments to date. This high-impact bug blocking an entire popular hardware architecture user base requires urgent maintainer triage to avoid extended downtime for a large share of the project's self-hosted user base. No other long-dormant high-severity issues received new updates this period.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-07-27
---

## 1. Today's Overview
On 2026-07-27, the nearai/ironclaw open-source AI agent runtime project saw consistent high development velocity, with 3 active updated issues and 18 total pull requests (6 merged/closed, 12 remaining open) processed over the 24-hour window, and no new official releases published. Most development activity centered on advancing the flagship error-recoverability epic, a core initiative to ensure the agent can autonomously recover from 100% of mid-run errors, alongside widespread routine dependency hygiene and targeted hardening of sandbox, security, and frontend components. The daily 2026-07-26 clawbench failure taxonomy published this window found that over 90% of 82 non-passing benchmark runs stem from model-quality partial completions, not runtime bugs, confirming the core platform’s underlying stability. All merged changes were low-risk, non-breaking refactors and bug fixes that improve platform robustness without altering end-user-facing functionality. The project remains in a healthy, active pre-release cycle focused on foundational reliability rather than new end-user feature rollouts in this period.

## 2. Releases
No new official IronClaw releases were published in the 24-hour window ending 2026-07-27. An open automated draft release PR [nearai/ironclaw#5598](https://github.com/nearai/ironclaw/pull/5598) remains pending, with planned breaking API bumps for the `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0) crates, alongside a backwards-compatible patch update for `ironclaw_safety`.

## 3. Project Progress
6 total PRs were merged or closed this 24-hour window, delivering the following key milestones:
1. **Modularity improvement**: [nearai/ironclaw#6669](https://github.com/nearai/ironclaw/pull/6669) refactored Reborn extension-host modules out of the composition crate into a dedicated `ironclaw_extension_host` crate, cleaning up internal API boundaries for more maintainable multi-tenant tool support.
2. **UX fix**: [nearai/ironclaw#6680](https://github.com/nearai/ironclaw/pull/6680) resolved a web UI friction point by preserving expanded workspace tree state across root navigation via unified routing.
3. **Epic cleanup**: [nearai/ironclaw#6677](https://github.com/nearai/ironclaw/pull/6677) (the original recoverability conformance matrix implementation) was closed and superseded by the newer unified FailureKind refactor PR, eliminating redundant draft code.
4. **MCP progress**: [nearai/ironclaw#6365](https://github.com/nearai/ironclaw/pull/6365) (the stale downstream reference PR for per-user MCP discovery) was closed, after its functionality was cleanly reimplemented on the latest main branch in an active rebased PR.
5. **Stability fix**: [nearai/ironclaw#5369](https://github.com/nearai/ironclaw/pull/5369) suppressed excess Cranelift/Wasmtime debug log flooding, ensuring debug-level Reborn runtime logs stay usable for engineers without noise.
6. **Dependency hygiene**: [nearai/ironclaw#4032](https://github.com/nearai/ironclaw/pull/4032) (a 2-month-old stale Wasm dependency bump PR) was closed to avoid redundant CI runs, superseded by newer grouped update PRs.

## 4. Community Hot Topics
The only highly active discussion thread this window is the epic tracking issue for 100% agent error recoverability: [nearai/ironclaw#6284](https://github.com/nearai/ironclaw/issues/6284), with 8 total comments. The ongoing conversation aligns cross-team work to deliver a 5-point formal recoverability contract, ensuring all mid-run errors keep the agent process alive, surface full root-cause context to the model, and give the agent a new turn to act on the failure. This reflects a top unmet need for teams deploying IronClaw for unattended, long-running production workloads, who currently face expensive interruptions from unexpected agent terminations. No other issues or PRs received user comments or reactions in this window, indicating current development is tightly aligned with pre-planned core roadmap priorities.

## 5. Bugs & Stability
No critical production outages, zero-day vulnerabilities, or agent execution crashes were reported this window. Documented issues are ranked below by severity:
1. **High severity**: Linux systemd service load failure ([referenced in PR #6652](https://github.com/nearai/ironclaw/pull/6652)): The `ironclaw onboard` CLI incorrectly quotes the `WorkingDirectory=` value in generated systemd units, causing the service to fail with a `bad-setting` status on startup. A low-risk fix is already open, removing the unnecessary quoting for systemd path-type directives that do not accept quoted values.
2. **Medium severity**: Dead legacy sandbox backend ([nearai/ironclaw#6686](https://github.com/nearai/ironclaw/issues/6686)): The unmaintained `DockerProcessSandboxBackend` is confirmed to be 100% unused in production, adding unnecessary maintenance overhead and risk of accidental misuse. The maintainers plan to delete the dead code imminently.
3. **Resolved low severity**: Reborn debug log flooding, fixed via the merged PR #5369, which eliminated noise from the Wasm compiler that previously made debug tracing of agent processes difficult.
The official 2026-07-26 failure taxonomy report ([nearai/ironclaw#6682](https://github.com/nearai/ironclaw/issues/6682)) confirms no new runtime-level regressions slipped into main in the latest benchmark run.

## 6. Feature Requests & Roadmap Signals
All visible roadmap signals this window come from in-flight core team work, with no new ad-hoc external user feature requests opened:
1. The 100% error recoverability epic (tracked in #6284) is almost fully implemented via the ongoing unified FailureKind enum refactor PR, and is extremely likely to ship as the flagship stability feature in the next minor IronClaw release.
2. The rebased per-user hosted MCP discovery PR (#6683) will deliver granular per-hire tool permissioning for worker agents, a top requested feature for multi-tenant hosted deployments, and is on track to land in the next 2-3 releases.
3. The attested signing Phase B implementation PR (#6672) for the Ledger revival plan will bring cryptographic agent intent verification and per-agent key lifecycle management, a flagship security feature scheduled for the next major release.

## 7. User Feedback Summary
No public user satisfaction or dissatisfaction surveys were posted this window, but visible real-user pain points include:
1. Frustration with early agent termination on unhandled mid-run errors, the driving use case behind the error recoverability epic, reported by teams running multi-hour agent tasks.
2. Post-installation setup friction for self-hosted Linux users caused by the broken systemd unit generation, which blocks new Linux users from running the Reborn service out of the box.
3. Minor UX friction when browsing large workspaces in the web UI, where expanded folder state was lost after navigating back to the workspace root, already resolved in the merged PR #6680.
The project's active focus on foundational stability improvements signals the core community prioritizes runtime reliability over new cosmetic or niche end-user features at this stage.

## 8. Backlog Watch
The following high-priority stale items need maintainer attention to unblock downstream work:
1. [nearai/ironclaw#5598](https://github.com/nearai/ironclaw/pull/5598) (automated release PR): Open since 2026-07-03, the PR has been pending for 24 days, blocking downstream consumers of public IronClaw crates from accessing recently added API functionality and patches.
2

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Daily Project Digest | 2026-07-27
This digest tracks the open-source NetEase Youdao AI agent and personal assistant project's 24-hour development status.

---
## 1. Today's Overview
LobsterAI recorded moderate development activity in the past 24 hours, with 2 updated issues and 8 updated pull requests, and no new official releases. The majority of open updates are focused on incremental UX polish, core gateway runtime stability fixes, and feature maturity improvements for the newly launched scheduled task module. All 7 pending open PRs carry the `stale` tag, indicating a backlog of unreviewed community and internal contributions waiting for maintainer triage. The recent activity shows the project is in a steady phase of polishing existing features rather than rolling out large new functional modules. Overall project health is stable, with no critical unpatched zero-day vulnerabilities reported.

## 2. Releases
No new official releases were published in the 24-hour window of this digest. The project has no public new release announcements as of 2026-07-27.

## 3. Project Progress
Only 1 pull request was closed/merged in the past 24 hours:
- PR #1325 (feat(ui): Add hover tooltip for new conversation icon buttons, https://github.com/netease-youdao/LobsterAI/pull/1325): This fix unifies the tooltip behavior for all icon-only "New Conversation" buttons across the main Cowork view, session detail page, Agent management page and MCP management page when the sidebar is collapsed. It solves the long-standing UX pain point that users on small-screen devices cannot identify the function of unlabeled toolbar icons.

## 4. Community Hot Topics
The most active community item in the current window is the Ubuntu Linux support feature request:
- Issue #273 [CLOSED] [Suggestion] Can you develop an Ubuntu Linux version? https://github.com/netease-youdao/LobsterAI/issues/273
This 4-month-old feature request got 2 comments in the recent update window, making it the most discussed item among all updated issues/PRs. The underlying user demand reflects that LobsterAI's user base has expanded beyond Windows desktop end users to open-source developer and server-side deployment groups, who want to run the AI assistant natively on Ubuntu workstations or headless servers to avoid WSL2 compatibility overhead. The lack of official roadmap clarification on this request after its closure has sparked further community discussion.

## 5. Bugs & Stability
Bugs reported in the past 24 hours are ranked by severity as below:
1. **High Severity**: Issue #1243 [OPEN] [BUG] qwen-portal-auth plugin cyclic configuration write causes frequent gateway restarts, https://github.com/netease-youdao/LobsterAI/issues/1243. Affects v2026.4.1 Windows 10/11 users, the gateway restarts automatically every 5-20 minutes, completely interrupts ongoing AI sessions. A related fix PR #1247 that optimizes OpenClaw configuration change detection and recovery logic is already open and expected to resolve the root cause.
2. **Medium Severity**: PR #1249 [OPEN] fix(cowork): DiffView fails to render, https://github.com/netease-youdao/LobsterAI/pull/1249. The code editing visualization DiffView component cannot render AI file modification diffs for Claude SDK and OpenClaw backends, breaking the WYSIWYG code co-editing experience. The fix PR identifies the root cause of overly narrow tool name matching rules.
3. **Low Severity**: PR #1257 [OPEN] fix(i18n): Missing 'edit' and 'delete' translation keys, https://github.com/netease-youdao/LobsterAI/pull/1257. Unplaced localization keys lead to raw key text showing on UI buttons in multi-language mode for the memory management module. A full fix has been submitted for review.

## 6. Feature Requests & Roadmap Signals
User requests and current PR progress indicate the following features are very likely to ship in the next minor version release:
1. Natural language scheduled task configuration from PR #1256: The implementation that allows users to input task schedule rules via natural language and auto-convert to cron expressions is fully developed, and is prioritized as a core feature for the scheduled task module.
2. Full DiffView rendering support for all LLM backends.
3. Accessibility and un-saved change protection for the full scheduled task workflow.
The long-demanded Ubuntu Linux native support will most likely be scheduled as a H2 2026 roadmap item after the core gateway stability for existing Windows supported platforms is fully validated.

## 7. User Feedback Summary
Verified user pain points collected in this window include:
1. Severe functional dissatisfaction from the frequent gateway restart bug: Users report the unexpected "AI engine starting" pop-up breaks long-running coding or research sessions, and significantly reduces work efficiency.
2. UX friction for compact screen users: The unlabeled new conversation icon confused many new users who run the app on laptops with the sidebar collapsed.
3. Accidental work loss when configuring scheduled tasks: Users who have typed long custom prompts for scheduled AI tasks often lose all their inputs after clicking the back arrow by mistake, leading to negative feedback on the form interaction design.
4. Deployment pain for open-source developer users: A group of Linux users expressed strong unwillingness to run the application on WSL2 and expect native Linux binaries to reduce deployment resource consumption.

## 8. Backlog Watch
High-priority pending items requiring maintainer attention:
1. 7 open PRs updated in this window are all labeled `stale`, indicating they have not gotten maintainer review for months. Specifically PR #1252 and PR #1258 implement the exact same unsaved change confirmation feature for scheduled tasks, requiring triage to select the better implementation and avoid redundant labor.
2. The high-severity gateway restart bug #1243 has been open for nearly 4 months without a merged patch, which may lead to large-scale user churn if not fixed in the next release.
3. The Ubuntu Linux support request #273 was recently closed without an official explanation of the roadmap, which has caused confusion among the Linux user group, requiring a public status clarification from the LobsterAI team.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-07-27
---

## 1. Today's Overview
On 2026-07-27, the Moltis open-source AI assistant project recorded zero new or updated user-facing issues, alongside 8 actively updated open pull requests, no new official releases, and a clear focus on iterative pre-release feature expansion and security hardening. All recent code contributions are led by core maintainers spanning 7 distinct functional domains, from vector memory backend extensions to third-party messaging platform integrations. The zero active open issue backlog signals strong project health, with all previously reported user-facing bugs likely resolved or already tracked in ongoing PR work. This 24-hour window marks an intensive feature sprint rather than a public release cadence milestone, with multiple long-requested platform capabilities nearing formal implementation review.

## 2. Releases
No new official releases were published in the 24-hour tracking window. There are no active breaking changes or pending migration guidance required for existing self-hosted Moltis instances at this time.

## 3. Project Progress
No pull requests were merged or closed in the 24-hour tracking window. All 8 recently updated PRs represent in-progress feature and fix work at varying stages of implementation, advancing the project’s publicly documented multi-quarter roadmap. Key workstreams that made measurable progress over the period include new local-first vector memory backend support, full bidirectional ACP (Agent Communication Protocol) compatibility, Slack and Nostr third-party channel integration upgrades, PWA notification reliability improvements, account-level privileged tool access control hardening, and web UI session management quality of life fixes. All ongoing work appears fully aligned with core maintainer priorities, with no unplanned scope creep visible across newly submitted PRs.

## 4. Community Hot Topics
All active PRs have not yet received public comments or community reactions, but the three highest-impact submissions reflect consistent longstanding community demand for expanded extensibility:
1. [PR #1169: feat(acp): expose Moltis as an ACP agent over stdio](https://github.com/moltis-org/moltis/pull/1169)
2. [PR #1158: feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)
3. [PR #1168: feat(nostr): add NIP-29 group chat support for Buzz channels](https://github.com/moltis-org/moltis/pull/1168)

The underlying shared user need driving these submissions is the desire to use self-hosted Moltis not just as a standalone UI, but as a modular drop-in AI agent backend integrated into existing local toolchains, editor environments, and decentralized privacy-first workspaces, rather than relying on SaaS AI provider APIs.

## 5. Bugs & Stability
No new user-reported crashes, critical bugs, or unplanned regressions were logged in the 24-hour tracking window. Two confirmed, pre-identified issues are addressed by active in-progress PRs, ranked by severity:
1. **Critical severity**: Unrestricted host command execution via the `/sh` tool for any user that clears a channel’s basic access gate, tracked in [PR #1170](https://github.com/moltis-org/moltis/pull/1170). No public exploits have been reported for this vulnerability.
2. **Minor severity**: Archived cron sessions cluttering default active session list views, tracked in [PR #1172](https://github.com/moltis-org/moltis/pull/1172), with full Playwright regression testing already included in the implementation.
3. **Usability severity**: Silent replacement of PWA push notifications leading to lost message alerts, being remediated in [PR #1173](https://github.com/moltis-org/moltis/pull/1173).

## 6. Feature Requests & Roadmap Signals
The current active PR pipeline clearly signals that the next upcoming minor feature release will prioritize three core use cases for self-hosted users:
1. Full low-resource local deployment compatibility, including the Zvec no-external-dependencies vector memory backend, almost certainly targeted for the next 1-2 release cycles.
2. Native interoperability with the fast-growing ACP ecosystem, enabling users to run Moltis as a backend agent for ACP-compatible editors (including Zed) and workspaces, expected to ship in the nearest upcoming release.
3. Expanded decentralized and group chat support for Slack, Nostr/Buzz, and Discord deployments, all scheduled for the same near-term feature release. No major breaking changes are visible in the current implementation pipeline.

## 7. User Feedback Summary
No new explicit user feedback submissions were logged in the past 24 hours, but active PR work directly addresses well-documented prior user pain points and use cases. Top unmet user needs currently in active development include eliminating the requirement for a separate, hosted vector database service for small Moltis deployments, enabling Moltis to be used as a drop-in AI backend for third-party editing tools, fixing broken mobile PWA push notifications, and closing arbitrary command execution risks for instances deployed in public group chat servers. The zero new open active issue count indicates high general satisfaction with existing core functionality among the project’s active self-hosted user base.

## 8. Backlog Watch
The only long-running active PR pending prioritized maintainer review is [PR #1158: feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158), a community-contributed submission originally created 10 days ago on 2026-07-17, updated most recently on 2026-07-26, with no public review comments posted to date. This feature adds a high-value fully local persistent vector store option for low-resource self-hosted deployments, and will need timely review to avoid stalling as the rest of the feature pipeline moves toward merge. No other outstanding pull requests or open issues have been left unaddressed for more than 3 days, indicating very low backlog pressure for the Moltis core team.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Project Daily Digest | 2026-07-27
---
## 1. Today's Overview
This 24-hour tracking window records steady active development around the v2.0.1 stable release of CoPaw, with 13 newly updated open issues and 5 active open pull requests, no merged/closed changes or new official releases. All reported issues and contribution activity center on post-v2.0.1 regression triage, core protocol compatibility improvement, ecosystem feature expansion, and community onboarding for first-time contributors. The project maintains a healthy, responsive pace: all new bug reports and feature submissions from the past 2 days received initial comments within 24 hours, and multiple external community members have submitted code changes or localization contributions. The roadmap alignment between maintainers and community users shows clear priority on improving multimodal, multi-platform, and MCP (Model Context Protocol) support.

## 2. Releases
No new official releases were published in this tracking period. The latest public stable version remains v2.0.1.

## 3. Project Progress
No PRs were merged or closed in the 24-hour window, all 5 active updated PRs advanced in the review pipeline and were synced to the latest main branch HEAD:
- The long-running unified browser control SDK PR #6276 received updated architecture documentation to clarify its control/execution plane split design
- Two first-time contributor PRs (#6479, #6477) passed initial format checks, marking a successful community onboarding milestone
- The WIP visual context compression PR #6456 added edge case handling for large multi-modal history records
- The QwenPaw Creator video generation plugin PR #6284 aligned its schema with the official PawApp standard, resolving previously reported compatibility conflicts

## 4. Community Hot Topics
The highest-traffic discussion items are listed below:
1. **MCP driver ignores transport configuration bug** (https://github.com/agentscope-ai/CoPaw/issues/6470): This issue accumulated 4 comments in 2 days, plus 2 duplicate user reports (#6468, #6469) confirming the bug affects multiple custom MCP server deployments. The underlying user need is full MCP spec compliance to support self-hosted streamable_http MCP tool servers, a critical requirement for enterprise teams that deploy private internal MCP tool clusters instead of public SSE-based MCP services.
2. **Traditional Chinese localization contribution request** (https://github.com/agentscope-ai/CoPaw/issues/6478): A community user reported they had finished full front-end and back-end Traditional Chinese translation locally and is waiting for maintainer approval to submit PRs, reflecting strong unmet demand for i18n support for users in non-Mainland Chinese regions.

## 5. Bugs & Stability
Reported bugs are ranked by severity as below, no corresponding fix PRs have been filed as of this snapshot:
| Severity | Bug Description | Link | Impact |
|----------|-----------------|------|--------|
| Critical | MCP driver hardcodes SSE client, completely ignores user-configured `streamable_http` transport, breaks all non-SSE MCP server connections | https://github.com/agentscope-ai/CoPaw/issues/6470 | Blocks all MCP tool loading for users that deploy streamable_http MCP services |
| High | Official Agent Kanban plugin fails to install on v2.0.1 due to missing `qwenpaw.pawapp` module | https://github.com/agentscope-ai/CoPaw/issues/6473 | Breaks the official third-party plugin ecosystem for new v2.0.1 users |
| High | `view_video` tool returns success but no data pipeline forwards video bytes to the LLM even when the model supports video input | https://github.com/agentscope-ai/CoPaw/issues/6474 | Disables all video multimodal capabilities |
| High | Cron jobs misfire and never trigger after long event loop idle on WSL2, due to APScheduler AsyncIOScheduler compatibility issues | https://github.com/agentscope-ai/CoPaw/issues/6471 | Breaks all scheduled automation workflows |
| Medium | Windows backend drops `;` separator when concatenating system PATH, causing child processes to lose access to npm global tools | https://github.com/agentscope-ai/CoPaw/issues/6239 | Degrades user experience for Windows developers running JS/Node.js agent workflows |
| Medium | Edge + Wayland setup sees persistent high CPU usage on long chat pages, triggered by large result set rendering and WebSocket pushes | https://github.com/agentscope-ai/CoPaw/issues/6460 | Affects battery life and performance for Linux desktop users accessing CoPaw via Chromium browsers |
| Medium | Matrix end-to-end encryption fails, missing system and dependency configuration for libolm | https://github.com/agentscope-ai/CoPaw/issues/6476 | Breaks Matrix channel integration for end-to-end encrypted chat use cases |
| Low | No line numbers displayed for JSON files in programming mode after v2.0.0 to v2.0.1 upgrade | https://github.com/agentscope-ai/CoPaw/issues/6472 | Minor UI regression that hurts code editing experience |
| Low | Shell commands using `nohup` or trailing `&` to detach processes leave the agent stuck permanently | https://github.com/agentscope-ai/CoPaw/issues/6480 | Breaks long-running background command execution workflows |

## 6. Feature Requests & Roadmap Signals
Top user-submitted feature requests include:
1. The `notice_after_complete` async task notification mechanism (https://github.com/agentscope-ai/CoPaw/issues/6475), which allows agents to return control to handle new user queries immediately after launching a long-running background task, and push status notifications to users when tasks finish.
2. Full Traditional Chinese localization support, contributed by a community user that has already completed translation work.

Based on current WIP PRs, the next v2.0.2 patch release will almost certainly prioritize the critical MCP transport, view video data path, and Agent Kanban plugin bug fixes. The v2.1.0 minor release is very likely to ship the visual compact context compression feature, unified browser control SDK, and async background task notification mechanism to users.

## 7. User Feedback Summary
Representative real user scenarios and feedback collected in this period:
- Enterprise users that deploy internal MCP tool services expressed strong dissatisfaction with the hardcoded SSE transport bug, as it blocks their workflow of connecting private internal data tools via MCP.
- Content creation users are highly expecting the QwenPaw Creator plugin to be released, as it will implement a full text script → asset management → storyboard → video generation workflow all inside CoPaw and eliminate the need to switch between separate tools.
- Linux desktop users running CoPaw in Wayland environment reported that the high CPU usage issue on heavy multimodal pages significantly reduces their device battery life.
- Most users praised the maintainer team's fast response speed for all new bug reports, noting that they received status updates for submitted issues within 24 hours, far better than most competing open-source agent projects.

## 8. Backlog Watch
Two high-priority long-unresolved items need maintainer attention urgently:
1. **Windows PATH separator bug #6239** (https://github.com/agentscope-ai/CoPaw/issues/6239): First reported on 2026-07-18, updated 2026-07-26, it has 3 comments from affected users but no maintainer has been assigned to fix it yet. This bug impacts all Windows-based developer users that rely on npm global tools to run agent workflows.
2. **Unified browser control SDK PR #6276** (https://github.com/agentscope-ai/CoPaw/pull/6276): Open since 2026-07-20, with no formal review comments from core maintainers for 7 days. This core infrastructure feature unifies all browser automation capabilities behind a single SDK, and unblocking its review will push forward dozens of downstream use cases for web data scraping and browser-side agent automation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) 2026-07-27 Project Digest
---
## 1. Today's Overview
The ZeroClaw project saw extremely high development activity in the 24-hour tracking window, with 44 updated issues and 50 updated pull requests, as core maintainers conduct a full system security audit and advance prep for the long-awaited v0.8.4 release. 93% of updated issues remain open, with only 3 closed, reflecting a heavy focus on triaging newly identified high-severity bugs and drafting remediation patches in parallel. The bulk of today’s work prioritizes security hardening across channels, runtime, and plugin systems, alongside CI stability improvements that clear the path for first-time crates.io publishing of the full workspace. Project health is robust: active contributions are aligned with the public v0.9.0 security and plugin architecture roadmap, with no critical unplanned outages blocking core user functionality.

## 2. Releases
No new official releases were published in the tracking window. A release PR to cut v0.8.4 is currently open for final review, which will mark the first time 18 ZeroClaw crates are officially publishable to crates.io for simple `cargo install` deployment.

## 3. Project Progress
Only 1 PR was merged in the last 24 hours, delivering the full fix for the high-severity CLI approval prompt control character injection bug tracked in #9396. Two additional long-standing issues were closed as resolved:
- #6548: Hardcoded English channel runtime replies that bypassed the Fluent localization system are now fully translated, eliminating a major gap in non-English user support
- A low-priority test cleanup issue linked to CI Windows test coverage was resolved as a partial fix for the 74 Windows test failures
All 49 remaining open PRs drafted today advance critical roadmap items: WhatsApp channel security hardening, WASM plugin runtime safety, MCP tool stability, and Gemini/Anthropic provider credential rotation functionality.

## 4. Community Hot Topics
The most actively discussed items by comment volume reflect strong user interest in production security and cross-platform support:
1. [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (14 comments): Report of 74 failing tests on Windows that Linux-only CI pipelines do not catch. Underlying user need: Windows-based contributors and self-hosted operators require native, unbroken test and runtime support, as a large share of the active community runs ZeroClaw on local Windows workstations.
2. [Issue #9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) (9 comments): High-severity WhatsApp security bug where business mode ignores group allowlist configurations. Underlying user need: A large installed base of production WhatsApp bot operators rely on explicit access controls to avoid unintended replies to unapproved groups, and the misaligned default behavior posed measurable operational risk.
3. [Issue #9396](https://github.com/zeroclaw-labs/zeroclaw/issues/9396) (6 comments): Now-closed control character injection flaw in CLI approval prompts. Underlying user need: Enterprise self-hosted operators are prioritizing end-to-end audit of attack surfaces to prevent prompt injection and tool argument tampering, making this security fix a top requested patch for regulated deployments.

## 5. Bugs & Stability
All newly reported bugs are ranked by severity below, with fix status noted:
| Severity | Bug Description | Link | Fix PR Status |
|----------|-----------------|------|---------------|
| S1 (Security Risk) | WhatsApp Web ignores chat access policies in business mode, allowing unapproved group replies | #9348 | Draft PR #9382 under active review |
| S1 (Workflow Block) | `web_fetch` tool returns unreadable binary garbage for gzip/brotli/deflate compressed web responses | #9207 | Fix marked as in-progress |
| S2 (Degraded Behavior) | 74 test failures on Windows 11 due to missing Unix/console encoding handling | #7462 | Partial Windows CI fix merged, full test pass work ongoing |
| S2 (Degraded Behavior) | `cargo test -p zeroclaw-runtime --lib` fails 19/20 runs with a flaky mutex poisoning bug | #9357 | Root cause triaged, fix drafting scheduled for this week |
| S2 (Degraded Behavior) | WASM plugin calls have no wall-clock timeout, allowing unbounded execution on slow HTTP requests | #9255 | Full fix PR #9403 submitted for review |
| P1 High Risk (Newly Audited) | Gemini API keys in error messages leak into public chat threads | #9386 | Fix in triage |
| P1 High Risk (Newly Audited) | Any chat member can approve tool actions across Telegram, Slack, Lark, and Matrix channels | #9387 | Marked help wanted, maintainer assigned |

## 6. Feature Requests & Roadmap Signals
Based on merged patches, open PRs, and high-engagement RFCs, the following features are highly likely to ship in upcoming releases:
1. **Crates.io publish support** will be the headline feature of the imminent v0.8.4 release, eliminating manual source build steps for new users.
2. **WASM runtime plugin system (replacing compile-time feature flags)** tracked in #8850 has multiple dependent PRs (plugin validation #9126, timeout enforcement #9403) already merged or staged, and is targeted as the flagship v0.9.0 architecture improvement.
3. **OpenAI-compatible gateway chat completions endpoint** PR #8486 will unlock native integration with thousands of existing LLM tools, IDE extensions (Continue.dev), and orchestrators (LangChain), and is prioritized for the v0.9.0 minor release.
4. **First-class goal mode for bounded autonomous sessions** RFC #8303 has active community support and a +1 reaction from a core maintainer, with a provisional target for the second v0.9.x point release.

## 7. User Feedback Summary
Aggregated user pain points and sentiment from recent activity:
- Top negative feedback: Windows contributors face extreme friction running the full test suite, as CI pipelines do not test on Windows and 74 tests fail immediately on local Windows environments.
- A large share of WhatsApp bot operators reported unexpected, unplanned agent replies to unrelated groups caused by the misconfigured allowlist bug, leading to frustration with unclear default access policy behavior.
- Non-English users consistently report hardcoded English strings breaking their localized workflow in dashboard and CLI surfaces, a gap that the recently merged Fluent localization patch will partially resolve.
- Overall sentiment is positive: Users widely praise the maintainer team’s proactive full-system security audit, as it demonstrates a commitment to hardening production deployments rather than rushing unvetted new features.

## 8. Backlog Watch
High-impact long-open items needing increased maintainer attention to avoid roadmap delays:
1. [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (opened 2026-06-10): 74 Windows test failures, no dedicated assigned maintainer to drive a full resolution, which blocks official Windows CI support for new contributors.
2. [Issue #8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) (opened 2026-06-30): Remediate wasmtime-wasi CVEs and resolve drift between cargo-audit and cargo-deny ignore lists, no public progress update in 3 weeks despite marked in-progress status, creating a security risk for upcoming WASM plugin launch.
3. [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (opened 2026-06-24): RFC for goal-mode autonomous sessions, no public timeline or implementation roadmap shared despite active community support for the feature.
4. [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) (opened 

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*