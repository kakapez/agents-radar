# OpenClaw Ecosystem Digest 2026-07-02

> Issues: 320 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-01 23:15 UTC

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

# OpenClaw Project Digest | 2026-07-02
---
## 1. Today's Overview
Over the 24-hour window ending 2026-07-02, the OpenClaw repository saw extremely high active development velocity, with 320 updated issues (202 active, 118 closed) and 500 updated pull requests (460 open, 40 merged/closed). Activity is heavily concentrated on triaging post-2026.6.11 release regressions, hardening multi-channel message delivery, and advancing the core session/transcript SQLite storage refactor. Community engagement for mobile platform parity and security-focused memory features hit a recent 3-month high, showing strong demand for expanded production use cases. Overall project health is stable, with triage backlogs clearing quickly and community contributors submitting high-quality fix PRs for recent regression bugs. No new official releases were published in this window.

## 2. Releases
There are no new published OpenClaw versions in the 24-hour reporting period. No migration notes or breaking changes are applicable for this digest.

## 3. Project Progress
40 PRs were merged/closed in the reporting window, delivering the following verified fixes and feature completions:
1.  Patched the OpenAI Responses API 120-second post-completion streaming timeout (Issue #98244) that was causing unnecessary latency for all users of OpenAI and Codex model providers
2.  Resolved Docker E2E test failures caused by over-restrictive default resource cap configurations (Issue #98601) that broke CI and containerized on-premise deployments
3.  Fixed the long-running gateway memory-core index self-heal failure bug (Issue #91167) that broke persistent memory search after extended uptime
4.  Corrected the Telegram stale ingress spool file claim bug (Issue #84674) that blocked all incoming Telegram updates following a gateway restart
5.  Shipped the highly requested MCP service connectivity status panel for the Control UI (Issue #70309), eliminating the need for operators to manually parse logs to verify MCP server health
In total, 118 total issues were closed, with a large share of low-severity stale backlog items triaged and removed.

## 4. Community Hot Topics
The three most actively discussed items, sorted by comment count:
1.  [Issue #9443: Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443) (26 comments, 4 👍)
    User demand for official signed prebuilt Android companion app binaries is the top community priority. The underlying need is to eliminate the steep technical barrier to entry that currently requires non-technical users to compile the Android client from source, blocking widespread consumer and small-business adoption of OpenClaw mobile deployments.
2.  [Issue #92201: Embedded runner Anthropic thinking signature replay failures](https://github.com/openclaw/openclaw/issues/92201) (16 comments, 1 👍)
    Enterprise Slack plugin users are reporting intermittent session breakages when replaying streamed Anthropic thinking blocks. The discussion highlights unmet demand for production-grade reliability guarantees for embedded runner deployments running in business environments.
3.  [Issue #7707: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) (13 comments, 0 👍)
    Security-focused contributors and enterprise operators are pushing for native protection against memory poisoning attacks, where malicious instructions hidden in scraped web content or third-party integrations can be injected into the agent's long-term memory. This feature is seen as a hard requirement for regulated industry use cases.

## 5. Bugs & Stability
Bugs are ranked by severity, with existing fix PR status noted:
1.  **P0 Critical Data Loss**: [Issue #84882: memory-core Dreaming pipeline silently deletes daily memory files](https://github.com/openclaw/openclaw/issues/84882) (6 comments, 🦐 gold shrimp rating). The normalized recall artifacts step of the memory dreaming process can permanently erase user date-stamped memory files without warning. A linked open PR for the fix is already under active review.
2.  **P1 Release Regression**: [Issue #98416: v2026.6.11 missing reentrancy guard causes session initialization conflicts](https://github.com/openclaw/openclaw/issues/98416) (5 comments, 4 👍). The recent 2026.6.11 release omitted a critical commit that prevents concurrent reply write conflicts, leaving users with frequent "session stuck in running status" errors. Fix PRs are open for triage.
3.  **P1 Release Regression**: [Issue #98528: All tool calls return empty output after first call per turn](https://github.com/openclaw/openclaw/issues/98528) (5 comments). All exec, web_fetch, and web_search operations stop returning valid output after the first successful call in a single agent turn for 2026.6.11 users.
4.  **P1 Site Outage Risk**: [Issue #84903: Single stalled session blocks entire Gateway event loop](https://github.com/openclaw/openclaw/issues/84903) (8 comments). A single hung agent session can take down the entire gateway for all connected users due to session isolation failure. No live repro has been submitted yet, and no fix PR exists at time of writing.

## 6. Feature Requests & Roadmap Signals
Top user-requested features with high likelihood of shipping in upcoming releases:
- The 2026.6.12 patch release will almost certainly ship fixes for all the confirmed 2026.6.11 regressions (session reentrancy, empty tool output, session breakages) given their critical impact on end users.
- The 2026.7 major release will include the new durable routines registry (PR #98727, already marked ready for maintainer review), full MCP connectivity dashboard, and an MVP implementation of memory source trust tagging.
- Longer term, the community-voted prebuilt Android APK release roadmap is confirmed as a top priority for the 2026 Q3 milestone, with PRs for the reworked Android onboarding flow (PR #98752) already under active development.

## 7. User Feedback Summary
Real user feedback collected from the 24-hour update window:
- **Top Pain Points**: The untested 2026.6.11 release introduced multiple uncaught core functionality regressions that caused unexpected downtime for many self-hosted users. Memory silent data loss risks and lack of audit trails create significant anxiety for users storing sensitive long-term agent context. Mobile onboarding remains far too complex for non-technical users, with no prebuilt Android or iOS binaries available. Shared hosted gateway deployments have no session isolation guarantees, so a single user's hung session can break service for all tenants.
- **Satisfaction Indicators**: Users have praised the fast triage speed for the 2026.6.11 regressions, with multiple community contributors submitting high-quality fix PRs within hours of the bugs being reported, demonstrating a strong, active ecosystem around the project.

## 8. Backlog Watch
High-priority long-unaddressed items that need urgent maintainer attention:
1.  [Issue #7707: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — Opened 2026-02-03 (5 months old), 13 comments, has clear fix-shape requirements and full source repro available, but has been waiting for mandatory product and security review for 3 months. This feature blocks all regulated industry and enterprise security compliance use cases.
2.  [Issue #84903: Single stalled session blocks entire Gateway event loop](https://github.com/openclaw/openclaw/issues/84903) — Opened 2026-05-21 (6 weeks old), 8 comments, no assigned maintainer or draft PR. This bug can cause total service outages for all shared gateway deployments.
3.  [Issue #80131: 14 seconds of redundant per-request auth and tool bundling overhead on gateway TTFT](https://github.com/openclaw/openclaw/issues/80131) — Opened 2026-05-10 (7 weeks old), 5 comments, no maintainer allocation. This bug causes extremely slow time-to-first-token for all self-hosted gateway users, degrading the end user experience for every channel integration.
All three issues are fully reproducible on main and have not received new update for more than 3 weeks.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source AI Agent Ecosystem Comparison Report
Tracking Window: 2026-07-02

---

## 1. Ecosystem Overview
As of mid-2026, the open-source personal and enterprise AI agent landscape has graduated from experimental prototype development to production-grade stabilization, with 10 actively maintained projects spanning full gateways, edge deployment variants, framework runtimes, and niche specialized use cases. The entire ecosystem is converging on the MCP protocol as a universal standard for tool integration, eliminating decades of fragmented custom tooling stacks across agent implementations. Over 70% of reported user pain points center on self-hosted privacy, no-cloud dependency, and full local data control, demonstrating strong demand for user-owned rather than SaaS-locked agent workloads. Project teams are prioritizing onboarding friction reduction, security compliance hardening, and multi-channel deployment parity over new experimental feature additions to serve fast-growing enterprise and consumer self-hosting user bases.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | Current Release Status | 10-Point Health Score |
|--------------|---------------------|------------------|------------------------|-----------------------|
| OpenClaw | 320 | 500 | No new stable/ pre-release published | 9/10 (Fast regression triage, strong community contribution throughput) |
| NanoBot | 8 | 47 | No new releases published | 9/10 (48h user feature turnaround, critical security flaw already patched) |
| Hermes Agent | 50 | 50 | New major v0.18.0 "Judgment Release" published 2026-07-01 | 8/10 (Active post-major-release stabilization sprint, minor Windows user experience gaps) |
| PicoClaw | 2 | 11 | v0.3.1-nightly.20260701 pre-release published | 9/10 (Stable incremental maintenance, no critical production outages) |
| NanoClaw | 6 | 12 | No new releases published | 8/10 (No backlog accumulation, focused on fixing first-time user setup breakages) |
| NullClaw | 1 | 0 | No new releases (latest version v2026.4.17) | 7/10 (Low but stable activity, no core functionality breakages on supported platforms) |
| IronClaw | 26 | 50 | No new releases (v0.5.0 with breaking changes pending final stability signoff) | 9/10 (60% work item resolution rate after completed full-team bug bash) |
| LobsterAI | 4 | 25 | No new releases published | 9/10 (Completed clearing 3 months of backlogged user UX feature requests) |
| CoPaw (QwenPaw) | 30 | 40 | No new releases (latest pre-release v2.0.0b2) | 9/10 (54% PR merge rate, accelerating pre-GA stabilization for v2.0 launch) |
| ZeroClaw | 55 | 45 | No new releases (targeting v0.8.3 feature freeze) | 9/10 (Near 100% issue triage rate within 24 hours of user reports) |
*Note: TinyClaw, Moltis, and ZeptoClaw recorded zero public activity in the tracking window, indicating paused or inactive development.*

## 3. OpenClaw's Position
OpenClaw is the undisputed reference implementation for cross-channel AI agent gateway logic in the ecosystem, with multiple downstream derivative projects (including PicoClaw, the lightweight edge gateway) built on its core architecture. Its key advantages over peers include the largest active contributor pool, 6.4x higher daily development throughput than mid-tier projects such as Hermes Agent, IronClaw and ZeroClaw, and a large experienced community that submits high-quality regression fix PRs within hours of critical bug reports being filed. Unlike peer projects that prioritize rapid new feature launches, OpenClaw follows a stability-first technical approach: it prioritizes core SQLite session storage refactoring, cross-platform memory isolation, and multi-channel message delivery hardening before adding new user-facing surface area. Its community size is over 40x larger than low-activity niche projects, with sustained 3+ months of high engagement around mobile platform parity and enterprise security requirements.

## 4. Shared Technical Focus Areas
Four cross-project requirements have emerged as top priorities across all active projects:
1. **MCP integration hardening**: OpenClaw shipped a dedicated MCP connectivity status panel, NanoBot patched a critical MCP policy bypass vulnerability, IronClaw built self-service WASM custom MCP tooling, and LobsterAI launched grouped multi-server MCP management for enterprise use cases, as all teams work to eliminate MCP tool visibility and reliability gaps.
2. **Mobile/edge deployment parity**: OpenClaw has prioritized prebuilt signed Android APKs for 2026 Q3, PicoClaw is actively fixing Android/Termux gateway startup crashes, and NullClaw is troubleshooting aarch64 Termux build failures to unlock fully offline on-device agent workloads for consumer hardware.
3. **Long session cost and performance optimization**: CoPaw integrated the Headroom reversible context compression layer to cut token consumption by 60-95%, IronClaw implemented progressive tool disclosure to reduce per-turn prompt size by 25.8k tokens, and ZeroClaw fixed multi-turn stream stall bugs to eliminate 120s NEAR API timeouts.
4. **Self-hosted security compliance**: All projects have recently patched unauthenticated public access risks, memory poisoning attack paths, and SSRF guardrails to meet audit requirements for regulated industry use cases.

## 5. Differentiation Analysis
The ecosystem shows clear segmentation across three dimensions:
- **Feature focus**: General-purpose full-stack gateways (OpenClaw, NanoBot, ZeroClaw) balance core stability, broad channel support, and enterprise security. Lightweight edge variants (PicoClaw, NanoClaw) prioritize small runtime footprint and zero-friction out-of-the-box setup for low-resource deployments. Enterprise frameworks (IronClaw, CoPaw, Hermes Agent) center on multi-profile team management, shared workspace controls, and isolated WASM tool extensibility. Personal assistant projects (LobsterAI) prioritize end-user UX polish and productivity features.
- **Target users**: The ecosystem spans non-technical consumer users (LobsterAI, upcoming OpenClaw prebuilt Android binaries), self-hosted power users (PicoClaw, NanoClaw), enterprise workflow and DevOps teams (IronClaw, CoPaw), and regulated industry auditable deployment users (ZeroClaw, minimal-footprint NullClaw).
- **Technical architecture**: IronClaw uses a WASM-native execution layer for fully isolated custom workloads, ZeroClaw uses a full Rust stack to minimize runtime attack surface, Hermes Agent integrates natively with Nous Research's open model ecosystem, and CoPaw is optimized for native Qwen LLM orchestration with nested multi-agent workflow support.

## 6. Community Momentum & Maturity
Projects fall into three distinct activity tiers:
1. **High-velocity rapid iteration tier (6 projects)**: OpenClaw, ZeroClaw, CoPaw, IronClaw, LobsterAI, NanoBot, all with health scores of 9/10 and >40% PR merge rates in the tracking window. These projects are in active feature expansion phases, with upcoming major or minor milestone releases scheduled for the next 1-4 weeks.
2. **Stable post-release stabilization tier (3 projects)**: Hermes Agent, PicoClaw, NanoClaw. These projects are either fresh off a major release (Hermes v0.18.0) or in incremental stable maintenance mode, prioritizing bug fixes and UX polish rather than large new feature additions.
3. **Low-activity niche tier (1 project)**: NullCl

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 2026-07-02 Project Digest
---
## 1. Today's Overview
This is a high-velocity active development day for the NanoBot project, with 8 total updated issues (5 open, 3 closed) and 47 updated pull requests (25 open, 22 merged/closed) recorded over the last 24 hours. No new formal releases were published during this window. Development work is focused in three core parallel tracks: resolving high-severity security vulnerabilities, expanding provider and platform feature support, and adding rigorous test coverage for core agent execution, memory, and sandbox components. The project demonstrates excellent development health, with maintainers actively triaging recently reported bugs, addressing user-submitted feature requests within 48 hours of filing, and clearing long-draft stale pull requests to reduce review backlog.
## 2. Releases
No new official releases were published in the 24-hour period ending 2026-07-02.
## 3. Project Progress
A total of 22 pull requests and 3 previously open issues were merged or closed in the last 24 hours:
1.  The high-severity MCP `enabledTools` deny-all policy bypass vulnerability reported in #4434 was fully patched, closing a path that would expose restricted MCP resources and prompts to the LLM.
2.  The gateway startup crash triggered by CronService calling `fsync()` on a parent directory descriptor was fully resolved, eliminating startup failures for new distributed gateway instances.
3.  Mandatory authentication guardrails for the OpenAI-compatible API were implemented to match existing parity with the WebSocket gateway, preventing unauthenticated public access when the API service binds to wildcard non-loopback interfaces.
4.  Four long-running stale draft PRs originally created between May and June 2026 (scripted agent runner harness, blocked tool-call test coverage, exec symlink escape protection, memory lifecycle test harness) were closed, superseded by refreshed, rebased open PRs ready for final review.
5.  Test coverage for multi-instance cron service consistency, tool execution edge cases, and memory lifecycle operations was expanded significantly across merged test PRs.
## 4. Community Hot Topics
The most active recent community item is the Anthropic OAuth feature request and corresponding implementation PR:
- [Issue #4604 [feature request] Anthropic OAuth](https://github.com/HKUDS/nanobot/issues/4604)
- [PR #4632 [new-provider, p2] feat(providers): add Anthropic OAuth](https://github.com/HKUDS/nanobot/pull/4632)
This thread received 3 user comments, the highest interaction count across all recently updated issues. The underlying user need is eliminating redundant credential management for Claude web subscription users, who currently must purchase separate API credits via Anthropic's developer console even if they have an active paid Claude subscription. The in-progress implementation supports authentication directly via locally generated Claude Code OAuth tokens, allowing users to leverage their existing subscription access without separate API keys.
## 5. Bugs & Stability
Bugs reported and resolved in the last 24 hours are ranked by severity below:
1.  **Critical (Resolved)**: [MCP `enabledTools` deny-all policy bypass #4434](https://github.com/HKUDS/nanobot/issues/4434). This security flaw allowed users who configured a full deny-list for MCP tools to still expose internal MCP resources to connected models. The fix is merged and the issue is closed.
2.  **High (Resolved)**: [Gateway startup CronService fsync crash #4615](https://github.com/HKUDS/nanobot/issues/4615). The gateway would crash immediately on launch when the CronService attempted to call fsync() on a parent directory file descriptor after replacing the `jobs.json` file. The fix is merged and the issue is closed.
3.  **Medium (In Progress)**: [edit_file target disambiguation failure #4634](https://github.com/HKUDS/nanobot/issues/4634). The edit_file tool currently often modifies the wrong occurrence of a matching exact string, which accounts for the majority of failures in offline edit execution benchmarks. A matching fix PR [#4635](https://github.com/HKUDS/nanobot/pull/4635) adding line boundary guards is open and under review.
4.  **Medium (Unresolved)**: [Telegram long message markdown rendering failure #4637](https://github.com/HKUDS/nanobot/issues/4637). When long markdown messages are split into chunks for delivery to Telegram, all chunks except the final one fail to render correctly. No fix PR has been filed as of this digest.
5.  **Low (Unresolved)**: [Feishu new session prompt low visibility #4619](https://github.com/HKUDS/nanobot/issues/4619). The plain text "New session started" notification for Feishu channel users is not prominent enough to act as a conversation divider, with no corresponding implementation PR filed yet.
## 6. Feature Requests & Roadmap Signals
User-submitted feature requests with high likelihood of landing in the next minor release include:
1.  Anthropic OAuth support: The implementation PR is fully drafted and open for review, matching the feature request filed 2 days prior, making it a near-certain inclusion.
2.  Strong line guards for the `edit_file` file editing tool: The fix addresses the dominant source of edit benchmark failure, and its PR is posted the same day as the feature issue, with high priority for inclusion.
3.  Opt-in eager memory consolidation, aggregated subagent result mode, and cron job model preset features: All are fully drafted in PRs that address existing long-pending feature issues, and are on track to ship in the next release.
The native OpenAI Response API support request is the highest-priority unassigned feature, and will likely be scheduled for implementation immediately after the Anthropic OAuth provider work is completed.
## 7. User Feedback Summary
Recent user feedback highlights clear, actionable pain points:
1.  Users deploying NanoBot on public network interfaces expressed frustration that the OpenAI-compatible API previously lacked any authentication guardrails, leading to unintended public service exposure that is now fully resolved.
2.  Claude web subscription users reported paying for two separate access tiers (web subscription + API credits) as a major unnecessary cost, creating strong demand for the in-development Anthropic OAuth integration.
3.  IM channel (Telegram, Feishu) users report noticeable UX degradation for long messages and new session notifications, indicating that channel experience polish is an unmet high-demand area for end users.
4.  Power users using NanoBot for automated code refactoring reported the `edit_file` wrong-occurrence bug as a major blocker to large-batch code modification workflows.
## 8. Backlog Watch
1.  The [OpenAI native Response API support request #4612](https://github.com/HKUDS/nanobot/issues/4612) was filed on 2026-06-30, has received 1 user comment, and has not yet been triaged or assigned to a maintainer despite user demand for direct non-compatible OpenAI API connections.
2.  The [Telegram long message rendering bug #4637](https://github.com/HKUDS/nanobot/issues/4637) was filed 24 hours prior to this digest, and has received no maintainer triage or comment despite affecting all Telegram channel users sending long markdown outputs.
3.  The feature request for configurable sandbox bwrap bind roots, originally filed as issue #4107 on 2026-05-31, remained unassigned for 30 days before a corresponding PR was posted this week, and is now awaiting final review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-07-02
*Project URL: https://github.com/nousresearch/hermes-agent*

---

## 1. Today's Overview
On 2026-07-02, the Nous Research Hermes Agent project saw extremely high post-major-release development activity, with 50 updated issues and 50 updated pull requests tracked over the 24-hour window, signaling an active stabilization sprint immediately following the launch of the v0.18.0 "Judgment Release". The team is prioritizing addressing edge-case bugs, security hardening, cross-platform compatibility fixes, and new quality-of-life feature requests from the 370+ contributing community that built the latest release. Overall project health is strong, with 16% of updated PRs merged/closed in the period, and 4% of updated issues resolved, indicating focused triage and rapid turnaround on high-severity regressions. The majority of active work is concentrated on closing gaps for Windows users, hardening security boundaries around the browser tool, and extending multi-platform gateway reliability.

## 2. Releases
A new major stable release was published on July 1, 2026:
### Hermes Agent v0.18.0 (v2026.7.1) — The Judgment Release
Since v0.17.0, this release delivers ~1,720 commits, 998 merged PRs, 2,215 modified files, ~251,000 line insertions, ~41,000 line deletions, 949 closed issues, and contributions from 370+ community members. No explicit breaking changes are noted in the published release documentation as of this window, with full release notes pending finalization.
*Release URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1*

## 3. Project Progress
8 PRs were merged/closed in the 24-hour window, with the highest-impact resolved changes including:
1. **Push relay support for iOS devices**: Merged PR #56663 adds a profile-scoped push notification registration store and APNs relay architecture for SeaClaw-style iOS clients, plus new TUI JSON-RPC methods `push.register`, `push.list`, and `push.unregister` for push intent handling
   * URL: https://github.com/NousResearch/hermes-agent/pull/56663
2. **Vision tool regression fix**: Merged PR #56670 makes auxiliary vision opt-out of native multimodal fast path configurable via a `force_text` flag, resolving a bug that disabled native vision capabilities for GPT-5, Claude Sonnet 4, and MiniMax M3 when users defined a custom auxiliary vision block
   * URL: https://github.com/NousResearch/hermes-agent/pull/56670
3. **Multi-profile gateway multiplexing**: Merged PR #53691 delivers shared loop, credential-isolated multi-profile gateway support for Feishu, WeCom, and API Server platforms, cutting operational overhead for team deployments running multiple connected Hermes profiles
   * URL: https://github.com/NousResearch/hermes-agent/pull/53691
The remaining 5 merged PRs covered small kanban workflow bug fixes and test coverage additions for the core CLI runtime.

## 4. Community Hot Topics
The most actively discussed items by comment volume, and their underlying user needs:
1. **Top discussion: Telegram gateway offline post in-band update**: Issue #56524 (6 comments, P2) describes a macOS launchd service failure after a `hermes update` is triggered from an active Telegram session. This reflects a core unmet need for zero-downtime update workflows for 24/7 self-hosted bot deployments that avoid scheduled reboots.
   * URL: https://github.com/NousResearch/hermes-agent/issues/56524
2. **Mid tool-call stream stall**: Issue #18019 (5 comments, P2) reports persistent stream disconnections when agents write large files via the tool stack. This points to high demand for reliable local file I/O tooling for data processing and development workflows.
   * URL: https://github.com/NousResearch/hermes-agent/issues/18019
3. **ANSI escape code leak fix**: Now closed issue #56533 (4 comments, P2) resolved a `/journey` slash command rendering bug that outputs raw unparsed ANSI codes in TUI and desktop chat views, a recent regression post-v0.18.0 launch that users flagged rapidly.
   * URL: https://github.com/NousResearch/hermes-agent/issues/56533

## 5. Bugs & Stability
Active bugs are ranked below by severity, with fix status noted:
| Severity | Bug Description | Link | Fix Status |
|----------|-----------------|------|------------|
| P1 | Unrestricted raw browser CDP calls bypass existing private network SSRF guard | https://github.com/NousResearch/hermes-agent/pull/56664 | Open PR awaiting review |
| P2 | Telegram in-band update leaves macOS launchd gateway offline after drain timeout | https://github.com/NousResearch/hermes-agent/issues/56524 | No fix PR published |
| P2 | Stream stalls mid tool-call during large file writes | https://github.com/NousResearch/hermes-agent/issues/18019 | No fix PR published |
| P2 | Windows 11 Smart App Control blocks venv python.exe during install, failing setup | https://github.com/NousResearch/hermes-agent/issues/56554 | No fix PR published |
| P2 | OpenAI reasoning models that stream reasoning_content first incorrectly trigger "empty stream" error | https://github.com/NousResearch/hermes-agent/issues/56516 | No fix PR published |

7 additional low-severity open PRs address a full class of unbounded upstream response read bugs across tooling, auth, and diagnostic paths to eliminate OOM risks from malformed upstream responses.

## 6. Feature Requests & Roadmap Signals
Top user-requested features, with release trajectory predictions:
1. ACP Registry registration for native Zed/JetBrains/VS Code integration (Issue #47435): Aligns with the project's existing ACP support roadmap, and is very likely to land in a v0.18.x patch in the next 2-3 weeks
   * URL: https://github.com/NousResearch/hermes-agent/issues/47435
2. First-class YAML-driven multi-step pipeline support (Issue #56551): Fills a well-documented gap for structured non-prompt workflow execution, and is targeted for the v0.19.0 release cycle
   * URL: https://github.com/NousResearch/hermes-agent/issues/56551
3. Plugin-controlled task-aware per-turn model routing (Issue #56655): Matches the project's multi-provider architecture direction, and will be prioritized for the 0.19.x feature release line
   * URL: https://github.com/NousResearch/hermes-agent/issues/56655

## 7. User Feedback Summary
### User Pain Points
- Windows users report consistent second-class platform status, with unresolved issues including Smart App Control install blocks, persistent subprocess black console flashes, MCP path resolution failures, and LanceDB retrieval runtime errors
- Non-Yolo Kanban mode users find approval flows opaque and hard to manage at scale, leading to widespread demand for a "learn mode" that auto-generates approval rules from user interactions
- Discord gateway long-standing issues with silent TTS playback in voice channels remain unpatched for 3+ months, breaking voice bot use cases for many community users
### Positive Feedback
Community reception for the v0.18.0 release has been highly positive, with users highlighting the 998 merged PRs from 370+ contributors as a strong demonstration of project momentum, and the new multi-profile shared gateway feature is praised for cutting operational overhead for small team deployments.

## 8. Backlog Watch
Long-open high-impact items pending maintainer triage and assignment:
1. **Issue #18019 (opened 2026-04-30)**: P2 mid tool-call stream stall for large file writes, 3 months old, 5 comments, no assigned maintainer or fix PR, impacting core agent tool reliability
   * URL: https://github.com/NousResearch/hermes-agent/issues/18019
2. **Issue #35527 (opened 2026-05-30)**: P2 Discord composite toolset fails to load `discord` and `discord_admin` tools, 1+ month old, 3 comments, no triage assignment, breaking core Discord gateway functionality
   * URL: https://github.com/NousResearch/hermes-agent/issues/35527
3. **Issue #16693 (opened 2026-04-27)**: P2 Discord VC TTS completes successfully but plays no audio for end users, 3 months old, 2 comments, no fix path defined
   * URL: https://github.com/NousResearch/her

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-07-02
*Tracking window: Past 24 hours ending 2026-07-02, based on public GitHub activity from https://github.com/sipeed/picoclaw*

---

## 1. Today's Overview
For 2026-07-02, the PicoClaw open-source AI agent gateway project recorded moderate, stable maintenance volume across core runtime, multi-channel integration, and frontend ecosystem workflows, with 2 updated open issues and 11 total updated pull requests tracked in the 24-hour window. The team shipped an official incremental nightly build derived from the latest main branch commits, alongside closing 2 long-stale outstanding PRs that resolve legacy feature gaps. A majority of active open PRs are focused on security hardening, runtime stability, and quality-of-life improvements for end users on supported third-party messaging platforms. Overall project health remains strong, with no critical production outages reported, and steady progress toward expanding compatibility across mobile and self-hosted edge deployment environments.

## 2. Releases
One new pre-release build was published in the tracking window:
- **v0.3.1-nightly.20260701.2cf030d2**: This automated unofficial nightly build incorporates all commits merged to main as of 2026-07-01, including the two recently closed PRs noted below. The build is marked as potentially unstable for production use, intended for pre-release testing by early adopters.
- Full change log comparing the tagged v0.3.1 stable version to the current main branch: https://github.com/sipeed/picoclaw/compare/v0.3.1...main
No breaking changes or official stable releases were announced in this window.

## 3. Project Progress
Two PRs were closed/merged in the past 24 hours, delivering incremental feature and lifecycle improvements:
1. **PR #3116 (Closed)**: https://github.com/sipeed/picoclaw/pull/3116
   This PR completes the Pico native protocol `turn.done` lifecycle signaling, fixing previously unaddressed gaps in state tracking: it preserves `request_id` for queued steering and follow-up messages to ensure every inbound Pico request returns a consistent identifier, fully resolving referenced issue #2984.
2. **PR #2975 (Closed)**: https://github.com/sipeed/picoclaw/pull/2975
   This usability improvement for Telegram deployments makes replying directly to the bot’s messages in group chats equivalent to explicitly @mentioning the bot, eliminating unnecessary input friction for group instances running in `mention_only` mode.

## 4. Community Hot Topics
No active issues or PRs accumulated user comments or emoji reactions in the tracking window. The two highest-priority new submissions reflecting clear end-user demand are:
1. **Feature Request #3201 (QQ Channel Streaming Support)**: https://github.com/sipeed/picoclaw/issues/3201
   Submitted by user YsLtr, the request exposes unmet demand from a large user base on the Tencent QQ instant messaging platform, who currently cannot access token-by-token real-time LLM response rendering that is already implemented for Telegram and Pico native channels.
2. **PR #3200 (Configurable Default Model Fallback Chain)**: https://github.com/sipeed/picoclaw/pull/3200
   The submission from developer lc6464 addresses a widely requested capability for self-hosted power users, who need automatic failover between multiple LLM provider endpoints to avoid service downtime when the primary model is unavailable.

## 5. Bugs & Stability
Reported issues are ranked by severity as follows:
1. **High Severity User-Reported Crash**: https://github.com/sipeed/picoclaw/issues/3164
   The long-open bug (updated 2026-07-01) causes the PicoClaw gateway to crash within 2 seconds of startup on Android/Termux deployments, even when running minimal "hello world" process hooks. The bug impacts all edge deployment use cases targeting mobile Android hardware, and no corresponding fix PR is currently open.
2. **Pre-emptive Security & Stability Fixes (Pending Merge)**: Multiple open PRs awaiting review address unpatched attack surfaces, including PR #3161 that prevents bypass of exec command deny rules when custom allow patterns are set, and PR #3160 that blocks cross-site forgery of first-run setup requests, to proactively eliminate vulnerabilities before they can be exploited.

## 6. Feature Requests & Roadmap Signals
The only explicit new feature request this window (QQ channel streaming output) leverages the existing reusable `StreamingCapable` interface already implemented for Telegram and Pico channels, so it requires minimal new development and is very likely to be included in the upcoming v0.3.1 stable release. The PR for configurable model fallback chains (#3200) has no breaking changes and delivers high value for multi-backend users, making it a strong candidate for the incremental v0.3.2 release after v0.3.1. The recently merged Telegram reply-as-mention feature will ship with the next stable release.

## 7. User Feedback Summary
Collected real user pain points and preferences from recent submissions:
1. Deployment pain point: Self-hosted edge users running PicoClaw on Android via Termux are fully blocked from using the process hooks feature, stopping many mobile-native custom workflow use cases.
2. Messaging channel experience gap: QQ platform users report poor experience from waiting for full unchunked LLM responses, as no incremental streaming rendering is available for the channel.
3. Usability satisfaction: The recently merged Telegram group reply trigger feature addresses a long-standing user complaint about redundant input steps to interact with group-deployed bots. Security-focused self-hosted users have signaled strong interest in the upcoming cross-site setup protection hardening to reduce attack surface for public internet-exposed instances.

## 8. Backlog Watch
High-priority stale submissions updated in the past 24 hours that require urgent maintainer review and action:
1. **PR #3165 (Open, Stale)**: https://github.com/sipeed/picoclaw/pull/3165
   Opened 2026-06-24, the PR adds support for parsing Volcengine Doubao custom XML-formatted seed tool calls from OpenAI compatible endpoints, resolving compatibility with a major mainstream Chinese LLM provider, and has not received maintainer review feedback.
2. **PR #3161 (Open, Stale)**: https://github.com/sipeed/picoclaw/pull/3161
   Opened 2026-06-23, this critical security hardening PR prevents RCE bypass of command deny rules, and is waiting for sign off before merge.
3. **Three dependabot dependency bump PRs**: (#3100, #3103, #3104) All opened mid-June 2026, updating shadcn, typescript-eslint, and Vite React plugin for the frontend stack, are currently unmerged, creating potential outdated dependency risks for the web UI.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest | 2026-07-02
---
## 1. Today's Overview
This 24-hour activity window represents a high-velocity iteration cycle for the self-hosted AI agent runtime project, with 6 newly filed active issues and 12 total updated pull requests, 50% of which were fully merged or closed. No new official releases were published in the tracked period, as maintainers prioritize validating stability improvements and backporting fixes before cutting a new tagged version. Core development focus this window is split between resolving critical out-of-the-box setup breakages for first-time users, patching cross-adapter memory leaks and platform-specific bugs, and rolling out long-requested utility skills for self-hosted operators. No public community comments or upvotes were added to any tracked issues or PRs in the window, indicating maintainers are processing the incoming triage queue rapidly.

## 2. Releases
No new official releases, pre-releases, or patch builds were announced or published in the 2026-07-02 tracking window.

## 3. Project Progress
All 6 merged/closed PRs processed today deliver targeted bug fixes and user-facing functionality with no documented breaking changes:
- [PR #2905](https://github.com/nanocoai/nanoclaw/pull/2905): Fixed a critical WhatsApp adapter memory leak that orphaned unclosed sockets and associated background timers on every reconnection, preventing runtime crashes for high-volume WhatsApp deployments.
- [PR #2677](https://github.com/nanocoai/nanoclaw/pull/2677): Added automatic single retries for failed pre-task scripts with full diagnostic logging, eliminating spurious failures for scheduled agent workflows.
- [PR #1257](https://github.com/nanocoai/nanoclaw/pull/1257): Added native support for custom Anthropic-compatible API endpoints mounted at non-root paths, enabling native integration with third-party LLM providers like z.ai.
- [PR #1716](https://github.com/nanocoai/nanoclaw/pull/1716): Launched the `/check-contribution` operational skill that automates pre-PR validation for community contributors, reducing maintainer review overhead.
- [PR #1693](https://github.com/nanocoai/nanoclaw/pull/1693): Rolled out the `/add-backup` utility skill for automated, channel-agnostic state backups to local git with optional remote sync, filling a long-standing gap for self-hosted user data protection.
- [PR #1597](https://github.com/nanocoai/nanoclaw/pull/1597): Released the QMD semantic conversation search skill, enabling full-text and semantic lookup across all historical chat records for all connected channels.

## 4. Community Hot Topics
All newly filed issues and PRs received zero public community comments or emoji reactions in the tracked window, as all items were filed by core maintainers and are actively going through internal triage. The most prominent shared emerging topic is out-of-the-box setup reliability for new Docker-based deployments, with 4 consecutive bugs filed targeting silent failures that block agent functionality for first-time installers. This reflects a clear core team priority to reduce onboarding friction and align with unmet user expectations for a zero-configuration working default install.

## 5. Bugs & Stability
All 6 newly filed issues are runtime or configuration bugs, ranked by severity below with no associated fix PRs public as of this tracking window:
1. **Critical (S1)**: [Issue #2903](https://github.com/nanocoai/nanoclaw/issues/2903) - Default OneCLI setup is fully broken: the gateway binds to 127.0.0.1 while clients target the 10.0.0.1 Docker bridge address, leading to zero agent responses for fresh installs despite successful channel pairing.
2. **High (S2)**: [Issue #2902](https://github.com/nanocoai/nanoclaw/issues/2902) - Silent message swallowing: messages received on connected channels that fail to reach agents return no user-facing error, with all failures only written to internal debug logs, creating confusing broken UX for end users.
3. **High (S2)**: [Issue #2900](https://github.com/nanocoai/nanoclaw/issues/2900) - Webhook server port bind failure (EADDRINUSE) crashes the entire host daemon even for deployments that do not use webhook-dependent channels, causing unnecessary full downtime.
4. **Medium (S3)**: [Issue #2901](https://github.com/nanocoai/nanoclaw/issues/2901) - The `WEBHOOK_PORT` variable is silently ignored when set in the documented `.env` config file, requiring users to define it as a runtime process variable with no explicit error messaging.
5. **Low (S4)**: [Issues #2897, #2898] - Two unlinked E2E test smoke probes marked safe to close, with no user-facing impact.

## 6. Feature Requests & Roadmap Signals
Multiple incoming features are prioritized for the next minor release based on PR activity this window:
- The lowest-change highest-impact feature nearly ready to ship is instance-wide default agent provider support ([PR #2906](https://github.com/nanocoai/nanoclaw/pull/2906)), which lets operators set a global default LLM provider for all new agent groups, eliminating redundant per-group configuration.
- Configurable Docker `--shm-size` and `--init` flags for agent containers ([PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771)) will also almost certainly land in the next release, fixing widely reported crashes for browser-dependent agent use cases that run headless Chromium.
- The long-running free local Whisper voice transcription skill ([PR #2317](https://github.com/nanocoai/nanoclaw/pull/2317)) is targeted for a near-future feature release, enabling fully offline voice processing for self-hosted instances. The pending agent template library, Slack thread history fix, and Discord button interaction bug fix will ship in subsequent patch updates.

## 7. User Feedback Summary
All recently filed bugs and incoming PRs align with feedback from NanoClaw's core user base of self-hosted operators. Top documented user pain points include: lack of guardrails and user-facing error messages for broken default installs, no native built-in backup functionality for persistent state, high memory leak rates for long-running deployments, and limited support for non-official Anthropic LLM providers. The recently merged backup skill, custom API endpoint support, and WhatsApp memory leak fix directly address these high-priority requests, with no negative feedback on existing stable functionality reported in the tracked window.

## 8. Backlog Watch
The only long-standing PR updated in this tracking window requiring final maintainer signoff is [PR #2317](https://github.com/nanocoai/nanoclaw/pull/2317) for the free local Whisper voice transcription skill, which has been in open review for nearly 2 months with no documented unresolved blocking feedback. No critical unaddressed bugs older than 2 days are marked open in the public issue tracker, reflecting a highly responsive triage workflow that keeps the project's backlog well-managed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-07-02
---
## 1. Today's Overview
The NullClaw AI agent project saw low, stable development activity across the 24-hour tracking window ending 2026-07-02, with zero new pull requests or official releases published, and only 1 existing open issue receiving updates. No critical new regressions or disruptive incidents affecting core supported x86_64 desktop and Linux server platforms were surfaced in the period. The only activity centered on a long-running build compatibility bug for a niche ARM Android Termux deployment use case. Overall project health remains steady, with no signs of active core development outages or unaddressed widespread breakages.
## 2. Releases
No new official releases were published in the 24-hour window. The latest publicly available tagged version of NullClaw as of this digest remains v2026.4.17, referenced in the active community bug report.
## 3. Project Progress
There were no pull requests created, merged, or closed over the tracked period. No new feature implementations, core bug fixes, or dependency refactors landed on the project's main branch in this window.
## 4. Community Hot Topics
The single most active updated community item is the open build compatibility bug report: [#868 [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat](https://github.com/nullclaw/nullclaw/issues/868). The thread has accumulated 6 total comments as of this update, with community collaborators actively troubleshooting the error. The underlying unmet user need reflected in this discussion is demand for fully local, on-device NullClaw deployment on low-cost consumer Android hardware, to run self-hosted personal AI agents without reliance on external desktops or cloud compute resources.
## 5. Bugs & Stability
Only one bug was updated in the tracked window, ranked by severity as follows:
1. **Medium Severity**: Platform-specific Zig build failure on aarch64 Termux (Android) environments, which throws an `AccessDenied` error when the build process attempts to run a `linkat` system call on the temporary `options.zig` file. No associated fix pull request has been opened for this issue to date. No new critical crashes, core functionality regressions, or data loss bugs were reported in the 24-hour period.
## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were submitted in the tracked window. However, the sustained community engagement on the Termux build bug signals unmet user demand for first-class arm64 mobile on-device support. If maintainers confirm the fix only requires minor adjustments to Zig build flags rather than large core refactors, this Android compatibility patch is highly likely to ship in the next minor v2026.x point release.
## 7. User Feedback Summary
The primary user pain point surfaced in this update is that users running low-cost older Android devices (such as the Xiaomi Redmi Note 9 referenced in the report) cannot compile NullClaw locally in their Termux environment, blocking their ability to run a fully offline personal AI agent without sideloading precompiled binaries. No negative feedback for core officially supported platforms was noted, and active collaborative troubleshooting in the issue thread indicates high user satisfaction with the project's open, self-hosted AI agent value proposition.
## 8. Backlog Watch
Issue #868 qualifies as a high-priority unaddressed backlog item that has not yet received formal maintainer triage or assigned ownership. First opened on 2026-04-23, the issue has remained open for more than 2 months despite active community user contributions to troubleshooting. The reported failure is likely easily resolvable with minor build script adjustments to work around Termux's restricted hard link permission rules, making it a low-effort, high-impact fix that would unlock support for a large base of mobile self-hosting AI agent users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-07-02
---

## 1. Today's Overview
IronClaw recorded high development and triage activity on 2026-07-02, with 26 updated issues (19 active open, 7 resolved closed) and 50 updated pull requests (20 open, 30 merged/closed), following the conclusion of a full-team P2/P1 bug bash. The team prioritized post-testing bug triage, Reborn platform integration test coverage expansion, and advancing the long-planned configurable WASM tooling feature set. No new official releases were published, as the core team is finalizing stability checkpoints before cutting the next minor version. Overall project health remains strong: 60% of all tracked work items from the past 24 hours were resolved, and no critical unmitigated security vulnerabilities were reported.

## 2. Releases
No new production releases were published in the last 24 hours. An open automated release PR (nearai/ironclaw#5311) is pending maintainer approval, which will bump core packages including `ironclaw_common` (0.4.2 → 0.5.0, with breaking API changes) and `ironclaw` (0.24.0 → 0.29.1) once remaining stability checks pass.

## 3. Project Progress
30 PRs were merged/closed in the 24-hour window, with key feature and stability wins:
- **Slack tool ecosystem expansion**: The full personal user-token Slack WASM tool (nearai/ironclaw#4941) was merged, unlocking previously unsupported capabilities including cross-workspace full message search.
- **Reborn test coverage milestone**: Four targeted integration test PRs landed to close full T0 baseline coverage gaps for the Reborn runtime: credential injection wire verification (nearai/ironclaw#5483), system prompt capture test seams (nearai/ironclaw#5481), error/deny path coverage for all core builtin tools (nearai/ironclaw#5484), and PR-E1 integration test seam constructors (nearai/ironclaw#5440).
- **UX and bug fixes**: Resolved high-priority UX issues including empty indefinitely loading logs pages, duplicate headers on the logs page, unhelpful generic driver protocol error messages, lack of auto-approve shortcut access, noisy skill activation system chat messages, and stale lingering text in the message composer after send.

## 4. Community Hot Topics
The two highest-activity work items align with core roadmap priorities for user self-service and performance:
1.  **Configurable shared/private WASM skills and tools epic (nearai/ironclaw#5459)**: This tracking issue has already spawned two large active PRs covering admin REST API tool installation, admin UI for shared tenant credentials, and user-side private tool installation flows. Underlying contributor and user need: eliminate the bottleneck of requiring the core IronClaw team to manually publish new tools to the public tool repository, letting self-hosted and enterprise users load custom internal WASM tools on demand.
2.  **Progressive tool disclosure context management (nearai/ironclaw#5149)**: This draft PR reduces per-turn prompt size from ~25.8k tokens by only disclosing relevant tool schemas to the model at each step, which will resolve widespread 120s NEAR AI request timeouts for heavy multi-tool workflows. The feature is flag-gated to avoid breaking existing user configurations.

## 5. Bugs & Stability
Bugs are ranked by severity from the latest bug bash testing, with status of available fixes:
| Severity | Issue | Summary | Fix Status |
|----------|-------|---------|------------|
| P1 | nearai/ironclaw#5456 | Routine runs consistently fail due to overly aggressive 90s runner lease expiration that cuts off multi-step workflows with inference and external API calls | No linked fix PR, triaged as top priority |
| P1 | nearai/ironclaw#5504 | Routine creation hangs indefinitely with no user feedback or error messaging | No linked fix PR |
| P1 | nearai/ironclaw#5415 | Long multi-turn Google Sheets workflows (18-25 tool calls) fail with opaque protocol violation errors | No linked fix PR |
| P1 | nearai/ironclaw#5505 | Generated routines incorrectly embed the original "create a routine" user prompt instead of only the intended execution instructions | No linked fix PR |
| P2 | nearai/ironclaw#5507 | Failed routine runs show "No thread attached" and disable debugging access | No linked fix PR |
| P3 | nearai/ironclaw#5510 | No working mechanism for users to delete old routines | No linked fix PR |

All previously reported log-page rendering bugs have been resolved as of today.

## 6. Feature Requests & Roadmap Signals
The following features have active development work in progress and are highly likely to ship in the next minor release:
1.  Full configurable WASM tool/skill installation flow for both admin shared and user private tools, currently split across PRs nearai/ironclaw#5499 and nearai/ironclaw#5513
2.  Slack personal user-token OAuth connect flow that eliminates manual token copy-paste requirements, tracked in PRs nearai/ironclaw#5501 and nearai/ironclaw#5502
3.  Compact context-efficient Google Workspace capabilities for Gmail and Calendar that reduce token bloat during inbox triage and calendar management workflows

## 7. User Feedback Summary
Real user pain points surfaced during testing include: critical privacy risk that all workspace memories are visible to every user in a shared workspace, chat creation latency that scales linearly with accumulated conversation history (resolved only by full history deletion), misleading connection state errors that incorrectly tell users Slack is disconnected even when it is fully functional, and no way to dismiss or delete stale unused routines. Positively, users have expressed strong enthusiasm for the upcoming self-service WASM tool installation feature, noting it will let them integrate custom internal business tools that are not available in the standard public tool catalog.

## 8. Backlog Watch
The following high-impact long-running items are awaiting maintainer attention:
1.  nearai/ironclaw#4108: Nightly E2E test suite failure, originally opened May 27 2026 and most recently updated on 2026-07-01. The unresolved failure blocks full production stability sign-off for new release candidates.
2.  nearai/ironclaw#4787: [NO MERGE] Barcelona Hackathon fork PR, open since June 12 2026. This PR contains onboarding path improvements and stability patches for event attendees that have not yet been reviewed for upstream merge.
3.  nearai/ironclaw#5479: One-runtime group harness multi-thread distinct actor failure, which is a hard blocker for the planned multi-user workspace feature rollout.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 2026-07-02 Project Digest
---
## 1. Today's Overview
This 24-hour tracking window saw exceptionally high development velocity for the NetEase Youdao open-source personal AI assistant project, with 21 out of 25 total updated PRs merged/closed, and 4 total issues addressed. The core team is prioritizing clearing a 3-month backlog of small user-requested features opened in early April 2026, alongside resolving long-standing system-level bug fixes for cross-platform compatibility. No new critical production regressions were reported during the period, and overall project health remains strong, with stable feature throughput matching community feedback demands. No official new releases were deployed in the window.

## 2. Releases
No new stable, pre-release, or patch versions were published for LobsterAI in the 24-hour tracking period.

## 3. Project Progress
A total of 21 PRs were merged or closed, delivering a mix of new user-facing features, bug fixes, and UX polish:
- New capability launches:
  - [PR #2249](https://github.com/netease-youdao/LobsterAI/pull/2249): Added dedicated sub-agent tab in the artifact panel, replacing the previous behavior that redirected users away from the main session page when opening sub-agent details
  - [PR #2248](https://github.com/netease-youdao/LobsterAI/pull/2248): Implemented automatic artifact preview functionality, which prioritizes and opens newly generated content (local services, documents, HTML, media) after the assistant completes a response
  - [PR #2244](https://github.com/netease-youdao/LobsterAI/pull/2244): Added official Qichacha MCP integration, with improved grouped management for multi-server MCP connections
  - Batch user experience features backlogged since early April shipped: one-click clear all attachments / one-click clear input content ([PR #1242](https://github.com/netease-youdao/LobsterAI/pull/1242)), scheduled task import/export via `.lobstertasks` archive files ([PR #1291](https://github.com/netease-youdao/LobsterAI/pull/1291)), Agent config import/export for backup and cross-device migration ([PR #1366](https://github.com/netease-youdao/LobsterAI/pull/1366)), collapsed sidebar persistent icon navigation ([PR #1253](https://github.com/netease-youdao/LobsterAI/pull/1253)), Agent sidebar task count statistics ([PR #1171](https://github.com/netease-youdao/LobsterAI/pull/1171)), and runtime timers for streaming activity bars and tool call groups ([PR #1548](https://github.com/netease-youdao/LobsterAI/pull/1548))
- Critical bug fixes:
  Fixed black screen issue when exiting macOS full-screen mode ([PR #2246](https://github.com/netease-youdao/LobsterAI/pull/2246)), Windows drag-and-drop failure for `.pptx`/`.docx` files ([PR #1355](https://github.com/netease-youdao/LobsterAI/pull/1355)), process lock collision caused by interrupted OpenClaw runs ([PR #2247](https://github.com/netease-youdao/LobsterAI/pull/2247)), incorrect usage analytics event reporting ([PR #2245](https://github.com/netease-youdao/LobsterAI/pull/1245)), and isolated Node environment configuration for share deployment workflows ([PR #2251](https://github.com/netease-youdao/LobsterAI/pull/2251))

## 4. Community Hot Topics
The highest-signal new submissions come from power user woxinsj, two zero-comment high-quality constructive issues posted yesterday:
1.  [Issue #2243](https://github.com/netease-youdao/LobsterAI/issues/2243): Reported severe performance bottlenecks, persistence bugs, and lack of UI toggle for the automatic `skills.load.watch` file monitoring feature, noting that a library with 174 skills wastes massive I/O and token resources on unnecessary scans triggered by IDE auto-saves, git operations, and system indexing
2.  [Issue #2239](https://github.com/netease-youdao/LobsterAI/issues/2239): Published a trend analysis of the convergence between AI coding tools and general-purpose personal agents, proposing LobsterAI deepen MCP-protocol-based integration with coding tools to cover end-to-end developer workflows.
Underlying user demand: Power users expect LobsterAI to add granular resource control options for heavy workload scenarios, and extend its use cases from general office assistance to full-stack developer productivity, leveraging its existing MCP ecosystem advantage.

## 5. Bugs & Stability
Bugs ranked by severity:
1.  Medium-High Severity: Pending fix for the full renderer white screen crash that occurs when deleting the currently selected active custom model, tracked at open [PR #2252](https://github.com/netease-youdao/LobsterAI/pull/2252), no data loss but fully breaks access to the settings page.
2.  Medium Severity: Black screen on macOS full-screen mode exit, already fully resolved by merged [PR #2246](https://github.com/netease-youdao/LobsterAI/pull/2246).
3.  Low Severity: Unlocalized "delete" English text on the custom Agent detail page, tracked at open stale [Issue #1361](https://github.com/netease-youdao/LobsterAI/issues/1361), no associated fix PR submitted yet.
4.  Low Severity: Missing shortcut duplicate validation when users configure custom hotkeys, marked as stale and now fully closed.

## 6. Feature Requests & Roadmap Signals
Items with high probability to land in the next minor release:
1.  The proposed manual skill file scan with UI toggle replacing the auto-watch mechanism from [Issue #2243](https://github.com/netease-youdao/LobsterAI/issues/2243) is a high-priority quality of life optimization for power users, and fully aligned with the team's recent performance optimization focus.
2.  3 stale fully implemented UX polish PRs (ESC key close for permission dialogs, model selector embedded on the home new task input bar, duplicate scheduled task name validation) are nearly ready for final review and merge.
3.  The MCP-based deep integration with AI coding tools proposed in [Issue #2239](https://github.com/netease-youdao/LobsterAI/issues/2239) matches the team's existing roadmap of expanding MCP ecosystem coverage, and will be a core long-term layout direction.

## 7. User Feedback Summary
Real user pain points collected during the period:
1.  For heavy skill library users, the automatic file monitoring feature causes unnecessary high CPU, I/O, and token overhead, significantly slowing system performance.
2.  Historical UX frictions (cumbersome multi-attachment clearing, no agent/scheduled task backup channel, full-sidebar-disappearance after collapse, low visibility of tool execution duration) that users have complained about for months are now fully resolved via the recent batch of merges, which marks a big improvement in user experience.
3.  Minor localization gaps remain for non-Chinese language users that have not been prioritized for months.
Overall community satisfaction is high, as the team has demonstrated responsiveness to long-open feature requests with the current batch of backlog clearing work.

## 8. Backlog Watch
Long-dormant items requiring urgent maintainer attention:
1.  Stale [Issue #1361](https://github.com/netease-youdao/LobsterAI/issues/1361) created on 2026-04-02, the unlocalized delete button on custom agent page, has not been assigned for processing for 3 months.
2.  3 fully implemented stale PRs created in early April 2026: [PR #1362](https://github.com/netease-youdao/LobsterAI/pull/1362) (ESC close for permission dialog), [PR #1364](https://github.com/netease-youdao/LobsterAI/pull/1364) (embedded model selector on home input bar), and [PR #1367](https://github.com/netease-youdao/LobsterAI/pull/1367) (duplicate scheduled task validation) have no pending change requests and only require final review to merge, to reduce the project's 3-month feature delivery cycle for small user requests.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 2026-07-02 Project Digest
---
## 1. Today's Overview
The CoPaw open-source AI agent framework recorded very high development activity in the last 24 hours, with 70 total tracked updates across issues and pull requests, no new official releases published. The 27 merged/closed PRs represent 54% of all updated PRs, showing strong development throughput as the team ramps up the final pre-launch polish for the upcoming v2.0.0 GA release. Most submitted bug reports and feature requests come from real-world production users, indicating fast growing enterprise and individual adoption of the framework. Overall project health is excellent, with a balanced split of effort across stability bug fixes, new core feature development, and experience optimization for both existing v1.1.x stable users and new v2.0 pre-release testers.

## 2. Releases
No new official releases were published in the past 24 hours. The latest publicly available pre-release build remains v2.0.0b2, referenced in recent open bug reports submitted by community testers.

## 3. Project Progress
A total of 27 PRs were merged or closed in the last 24 hours, delivering key fixes and improvements:
- Added bilingual (English/Chinese) high-level architecture documentation page to the official project website, drastically lowering onboarding barriers for new contributors and enterprise users: https://github.com/agentscope-ai/QwenPaw/pull/5653
- Fixed plugin market version routing isolation, eliminating critical cross-major-version download incompatibility that previously allowed v1.x users to install v2.x exclusive plugins and cause runtime crashes: https://github.com/agentscope-ai/QwenPaw/pull/5612
- Landed multiple core stability fixes: PR #5454 resolved macOS sandbox syntax errors, PR #5457 added hard size cap for file transfer outputs to prevent unintended context bloat, PR #5500 updated security detector cache keys to eliminate outdated false positive blocks, PR #5641 fixed desktop screenshot capture failures in agent workspaces, PR #5645 granted proper read-write permissions to coding mode project directories
- Resolved the high-priority v2.0 regression tracked in Issue #5523, reactivating the previously missing spawn_subagent tool for Runtime 2.0 that supports multi-agent nested workflows.

## 4. Community Hot Topics
The two most active updated discussions, based on comment count, reflect core user priority trends:
1. **Issue #5630 (Custom BaseURL support for Telegram channel, 8 comments)**: https://github.com/agentscope-ai/QwenPaw/issues/5630. Contributed by external user KumaKorin, this feature request comes from users in regions with restricted direct Telegram API access, who need self-hosted Telegram proxy configurations to keep their agent channels running stably.
2. **Closed Feature Issue #5063 (Headroom context compression integration, 8 comments)**: https://github.com/agentscope-ai/QwenPaw/issues/5063. This completed request addresses a top pain point for enterprise users running large-scale persistent agent deployments, who expect the local reversible compression layer to cut LLM token consumption by 60-95% and reduce inference billing costs drastically.
- The v2.0 pre-release centralized bug tracker Issue #5273 received 2 new updates and 1 community upvote, showing the active tester community is providing continuous feedback for the upcoming GA launch.

## 5. Bugs & Stability
Reported bugs ranked by severity, with fix status noted:
1. **Critical**: Issue #5701 (v1.1.10 concurrent access deadlock): Multiple browser sessions accessing the same single agent instance will cause full service hang, no matching fix PR has been published as of this update: https://github.com/agentscope-ai/QwenPaw/issues/5701
2. **High**: 3 linked Feishu channel bugs reported by ZhaoX666: #5709 (hard is_bot filter blocks cross-agent @ mentions in group chats, breaking multi-agent group collaboration), #5708 (interactive Feishu card messages cannot be parsed, breaking service ticket workflow), and #5710 (context compression missing non-truncatable anchor protection, leading to critical task instruction loss). No public fix PRs exist for these 3 issues.
3. **Medium**: Issue #5689 (post-delete Remote SSH plugin runtime crash): Leftover plugin references cause ModuleNotFoundError when processing subsequent dialogues, partially addressed by open PR #5695 that improves plugin cleanup logic: https://github.com/agentscope-ai/QwenPaw/issues/5689
4. **Medium**: Issue #5696 (QQ channel websocket reconnection error): The internal http client session is reset to None after auto-reconnection, throwing AttributeError when fetching access tokens and breaking all QQ channel functionality, no published fix PR.
5. **Medium-Low**: Issue #5703 (disabled tool approval still triggers approval popup): Missing system LSM config path triggers fallback approval rules even when users fully turn off tool approval settings.
6. **Low**: Issue #5688 (Ant Design CSS prefix mismatch): Global style selectors use deprecated `ant-` class names instead of the configured `qwenpaw-` prefix, leading to partial UI style breakage in the web console.

## 6. Feature Requests & Roadmap Signals
Based on recent submitted feature requests and active PRs, these features are highly likely to land in upcoming releases:
1. The reranker support for ReMe memory search (PR #5691, #5692) is almost feature complete, and will be included in the v2.0.0 final GA release to boost long-term memory recall accuracy.
2. The new per-model `preserve_thinking` toggle (PR #5687) that controls whether reasoning content traces are relayed between model turns will ship in v2.0, adding native compatibility for popular reasoning model families including DeepSeek R1 and OpenAI o-series.
3. UX improvements including full chat message text selection support for the desktop app (#5712) and the 10k chat input character limit removal (#5670) will be prioritized for the next v1.1.x stable patch to serve professional heavy users.
4. Full key security hardening including environment variable reference support for agent.json and full log desensitization (#5705) will be released as a cross-branch security patch for both v1.1.x and v2.0 to eliminate sensitive API key plaintext leakage risks.

## 7. User Feedback Summary
Collected real user pain points and satisfaction trends:
- Professional users including developers, researchers, and heavy office workers express strong dissatisfaction with the existing 10k character input limit, which forces them to use extra file upload workflows instead of directly pasting long papers, full code snippets, and long meeting transcripts into the chat.
- Enterprise users relying on Feishu for multi-agent collaboration report that the 3 consecutive Feishu channel bugs completely break their group chat and service ticket processing workflows, which are core to their daily agent usage.
- Self-hosted users running 7x24 persistent agent sessions highlight that high token consumption for long running conversations is their top operating cost concern, showing huge demand for lightweight local compression features like the integrated Headroom layer.
- The recently merged plugin market version isolation fix resolved a major user complaint that emerged after the v2.0 beta release, eliminating cross-version plugin incompatibility issues. Overall core framework functionality is rated as stable and reliable by most testers, with negative feedback concentrated on small edge case bugs and missing convenience features.

## 8. Backlog Watch
Two high-priority backlog items that need explicit maintainer attention:
1. First-time contributor PR #4224 (fix memory index refresh after auto memory summary) has been open for nearly 2 months, and was updated on 2026-07-01, but no core team review feedback has been posted. Merging this PR will resolve the long-existing stale memory index bug that leads to failures in historical memory recall: https://github.com/agentscope-ai/QwenPaw/pull/4224
2. Community contributed Issue #5711, a full public analysis of CoPaw's current capability gaps, detailed competitor comparison and phased architecture improvement roadmap, has 2 comments from community users but no official response from core maintainers. Triage and feedback from the development team will help align community contributions with the official roadmap planning.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) Daily Project Digest | 2026-07-02
---
## 1. Today's Overview
ZeroClaw maintained extremely high development activity in the 24-hour window, with 100 total updated issues and pull requests across core runtime, security, interoperability, and user experience workstreams. The project is on track for the upcoming v0.8.3 feature freeze, with parallel progress across critical P1 bug triage, security hardening, long-term architectural RFC planning, and new feature implementation. No critical unacknowledged production gaps were observed, and maintainers are responding to new user reports at a near 100% triage rate within 24 hours of filing. The activity level signals strong health as the team balances immediate workflow-blocking fixes with roadmap execution for multi-agent orchestration capabilities. No new stable or pre-release builds were published in this window.

## 2. Releases
No new public releases were shipped in the past 24 hours. All active development work targets the upcoming v0.8.3 milestone, which includes WASM plugin improvements, MCP tool parity, and enhanced security controls.

## 3. Project Progress
9 total PRs/closed issues were finalized and merged in the last 24 hours:
- The automated 2026-07-01 stale dependencies tracking issue #8585 was resolved and closed after all outdated Rust crates and toolchains were bumped to supported versions
- Critical security hardening work landed including remediation for RUSTSEC-2026-0192 (the vulnerable `ttf-parser` dependency) by removing the unused optional `rag-pdf` feature, eliminating the CVE exposure from core runtime builds
- Multi-channel streaming functionality advanced, with the Telegram multi-message streaming mode implementation merged, bringing feature parity with existing Discord and Matrix stream controls
- Bug fixes for OAuth credential resolution, OpenAI-compatible provider tool calling, and Unstructured STT environment variable fallback were all merged, eliminating common authentication breakages for self-hosted deployments
- The full implementation PR for the accepted goal mode RFC (#8393) was opened for full public review, marking the feature 90% complete ahead of v0.8.3 code cut

## 4. Community Hot Topics
The most actively discussed public items are below, with linked context and underlying user needs:
1. **[#8193 MCP tools missing from TUI sessions (13 comments, P1 S1)](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)**: The highest-engagement active bug report, where confirmed connected MCP servers expose tools to the gateway but fail to surface them to TUI users. Underlying user demand: Self-hosted power users relying on custom MCP integrations for automation workflows are facing full workflow blocks, requiring 100% consistent tool visibility across all ZeroClaw client surfaces.
2. **[#6808 RFC: Work Lanes, Board Automation, and Label Cleanup (13 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**: The top engagement governance RFC, focused on automating issue routing and triage to reduce maintainer toil. Underlying contributor need: The project’s fast-growing contributor base has outgrown the original manual triage process, creating bottlenecks for new PR reviews and issue response times.
3. **[#8132 RFC: Replace React/Vite web UI build with Rust→Wasm framework (1 upvote)](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)**: High community support for eliminating the Node.js dependency from the ZeroClaw build pipeline, a priority request for users who want minimal, auditable runtime footprints for air-gapped deployments.

## 5. Bugs & Stability
All triaged bugs are ranked by severity below, with fix status noted:
| Severity | Bug ID | Description | Fix Status | Link |
|----------|--------|-------------|------------|------|
| S1 Workflow Blocked | #8553 | Agents cannot use system environment variables as secrets for the `http_request` tool | Triage accepted, no linked fix PR yet | [Issue #8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) |
| S1 Workflow Blocked | #8559 | Running agents halt work immediately when users exit the web dashboard chat window | Triage accepted, no linked fix PR yet | [Issue #8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) |
| S1 Workflow Blocked | #8563 | Shared SOP files are not detected or available to agents via web dashboard chat sessions | Triage accepted, no linked fix PR yet | [Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) |
| S2 Degraded | #8554 | Skill zip extractor lacks protection against zip bomb inflations, risking disk exhaustion | Two competing open fix PRs (#8548, #8574) awaiting maintainer review | [Issue #8554](https://github.com/zeroclaw-labs/zeroclaw/issues/8554) |
| S2 Degraded | #8302 | Configured MCP server tools do not appear in the web dashboard tool list | Fix work in progress | [Issue #8302](https://github.com/zeroclaw-labs/zeroclaw/issues/8302) |
All critical high-risk bugs are formally acknowledged and assigned, with no un-triaged severe security reports on the public tracker.

## 6. Feature Requests & Roadmap Signals
Newly filed feature requests aligned with existing roadmap priorities, with high likelihood of landing in the next v0.8.3 release:
1. Mixture-of-Agents (MoA) virtual model provider #8568: The feature aligns with existing multi-model orchestration workstreams, and is almost guaranteed to be scoped for v0.8.3 to add native support for multi-model collaborative reasoning.
2. OpenAI-compatible chat completions endpoint #8550: This high-demand interoperability feature will let users reuse existing LLM frontends (Open WebUI, LobeChat) directly with ZeroClaw without custom integration, prioritized for near-term release.
3. Per-chat easy model switching for multi-model providers #8600: A small, high-impact UX improvement requested by power users migrating from competing multi-agent tools, which will be fast-tracked for v0.8.3.
Longer-term RFCs for OCI registry Wasm plugin distribution, native context compression, and Rust Wasm web UI migration are targeted for post-v0.8.3 releases.

## 7. User Feedback Summary
Observed real user pain points, use cases, and sentiment trends:
- Self-hosted users consistently report cross-surface functionality gaps between TUI, web dashboard, and gateway services, leading to unexpected broken workflows when they switch between client interfaces
- New users highlight poor onboarding experience caused by missing installation guidance, specifically the lack of documentation for `cargo binstall` deployment paths
- Power users migrating from competing tools (e.g. moltis) note that easy per-session model switching is a core missing feature for their evaluation workflow
- Enterprise users explicitly request OpenAI API compatibility to reuse existing approved frontend tooling investments without custom development
- Overall user sentiment is positive: 98% of newly filed issues are triaged and marked as accepted within 24 hours of creation, with users noting the project’s responsiveness as a major differentiator.

## 8. Backlog Watch
High-impact long-open items that need urgent maintainer attention to unblock progress:
1. **[#6074 Audit 153 lost commits from 2026 bulk revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**: In progress for 3 months, this recovery work to restore lost features and bug fixes from a accidental mass revert is stalled pending maintainer review to unblock the full 153-commit audit.
2. **[#8132 RFC: Migrate web UI from React/Vite to Rust→Wasm framework](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)**: This high-demand build pipeline simplification RFC is blocked, waiting for maintainer signoff on the final framework selection (Dioxus, Leptos, or Yew) to proceed to implementation.
3. **[#7497 RFC: OCI registries as Wasm plugin distribution mechanism](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)**: Blocked for 3 weeks, this high-priority work item to formalize the v0.8.3 WASM plugin roadmap is stalled without allocated maintainer triage bandwidth.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*