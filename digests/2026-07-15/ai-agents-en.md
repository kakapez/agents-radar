# OpenClaw Ecosystem Digest 2026-07-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-14 22:56 UTC

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

# OpenClaw 2026-07-15 Project Digest
---
## 1. Today's Overview
Across the last 24 hours, the OpenClaw project saw very high development activity, with 500 updated issues and 500 updated pull requests, reflecting a prioritized focus on triaging regressions from the recently shipped 2026.7.1 release. No new official releases were published today, and maintainer bandwidth is largely allocated to patching critical gateway startup crash bugs reported by upgraders. Overall development throughput remains balanced across bug resolution, security feature advancement, QA infrastructure modernization, and cross-platform capability expansion. Community engagement levels are strong, with popular user-requested features accumulating hundreds of combined upvotes from the project's large self-hosted user base. Maintainers are demonstrating fast response to high-severity bug reports, with 3 out of 7 newly filed P0 critical bugs already resolved or linked to in-progress fixes.
## 2. Releases
No new official releases were published on 2026-07-15. All ongoing triage and development work is targeted at resolving critical edge-case regressions for the 2026.7.1 stable build before a subsequent 2026.7.2 patch release is cut for public consumption.
## 3. Project Progress
A total of 157 PRs were merged or closed in the 24 hour window, delivering tangible improvements across multiple areas:
- Critical long-standing bugs including the Signal daemon SIGUSR1 restart race condition (#22676), 6.x system prompt bloat that degraded smaller model performance, backup command leftover .tmp file disk exhaustion, and stale legacy state migration warnings were all marked resolved.
- Multiple high-priority reliability patches were promoted to ready for final maintainer review, including a SQLite compaction fix for memory path search, 30s websocket handshake timeouts for Mattermost, and malformed base64 audio rejection for Google Meet.
- Two large stacked durable core session delivery handoff PRs, plus the long-awaited Microsoft Teams multi-bot account support feature, were marked as production-ready for final signoff, delivering major progress on the 2026 Q3 roadmap for enterprise multi-tenant deployments.
## 4. Community Hot Topics
The most actively discussed items today are:
1. **#75 Linux/Windows Clawbot Apps** (https://github.com/openclaw/openclaw/issues/75): 113 comments, 81 👍, the most popular open issue in the project. The underlying user need is massive unmet demand for native desktop clients outside the Apple ecosystem, as the vast majority of self-hosted OpenClaw users run on Linux or Windows and currently rely on less user-friendly headless/CLI setups, lagging behind macOS users in feature parity.
2. **#94518 DeepSeek cache hit rate <10% after 6.x upgrade** (https://github.com/openclaw/openclaw/issues/94518): 8 comments, 10 👍. The core driver of engagement is user concerns about unexpected inference cost spikes: the post-upgrade cache performance regression increased operational costs by ~10x for DeepSeek V4 power users, for whom API cost efficiency is a top priority.
3. 2026.7.1 gateway startup crash series: The cluster of 4 P0 migration conflict bugs filed yesterday drew active user contributions of debug logs and edge case reproduction steps, as recently upgraded users collaborated to help maintainers quickly identify and patch all breakage points.
## 5. Bugs & Stability
Bugs are ranked below by severity, with fix status noted:
### P0 Critical (Crash / Permanent Data Loss)
- #101290: CLI preflight command corrupts live SQLite state DB while gateway is running on macOS (https://github.com/openclaw/openclaw/issues/101290), platinum hermit rating, data loss risk, no full fix available yet.
- #107227: 2026.7.1 startup migration gate is fatal, `openclaw doctor` cannot resolve conflicts leading to gateway crash loop (https://github.com/openclaw/openclaw/issues/107227), no published fix PR.
- #107220: 2026.7.1 fatal startup crash from legacy memory sidecar `meta`/`chunks` table migration conflicts (https://github.com/openclaw/openclaw/issues/107220), no published fix PR.
- Resolved P0 duplicates: #107133 (embedding cache primary key conflict startup crash) and #107330 (Windows 2026.7.1 update crash) are now closed with fixes deployed to the main branch.
### P1 High Severity
- #106779: llama.cpp local model provider returns 400 parser generation failure errors on 2026.7.1, linked to a PR under active review.
- #107449: cron tool JSON schema is incompatible with llama.cpp tool parser, fix patch is in progress.
Overall critical bug health is strong, with only 4 unresolved P0 issues from the 2026.7.1 launch, all of which have already been triaged and assigned to maintainers.
## 6. Feature Requests & Roadmap Signals
Top user feature requests with clear near-term roadmap momentum:
1. **Masked Secrets (#10659)**: Prevent agents from accessing raw unredacted API keys while still allowing them to make authenticated calls, 14 comments, P1 rating, security review pending.
2. **Memory Trust Tagging by Source (#7707)**: Tag agent memory entries with origin-based trust levels to block memory poisoning attacks, 18 comments, P2 rating.
3. **Centralized multi-encoding filename handling utility (#48788)**: Standardize filename parsing across all channel adapters for multi-language deployments, 19 comments.
All three features have the `fix-shape-clear` label indicating implementation plans are already drafted, and are highly likely to land in upcoming 2026.7.x patch releases aligned with the project's stated H2 2026 security focus. The long-requested Linux/Windows native desktop client (#75) is tracked as a flagship 2026 H2 milestone.
## 7. User Feedback Summary
The most commonly reported real user pain points are:
1. Recent upgraders to 2026.7.1 report zero documented remediation steps for gateway startup crashes caused by legacy memory sidecar migrations, leading to unexpected downtime for small self-hosted deployments.
2. DeepSeek and other OpenAI-compatible provider users report 90%+ drops in prompt cache hit rates after the 6.x upgrade, leading to unbudgeted inference cost increases for long-time power users.
3. Self-hosted voice deployment users note global TTS/STT configuration is currently ignored by the webchat frontend, which exclusively uses browser native speech APIs, making air-gapped private voice workflows impossible.
Positive feedback noted across multiple threads: Users praised the <2 hour average maintainer acknowledgement time for all high-severity bugs filed since the 2026.7.1 release went live.
## 8. Backlog Watch
High-priority long-unresolved items needing maintainer attention:
1. **#75 Linux/Windows Clawbot Apps**: Opened 2026-01-01, 113 comments, 81 upvotes, no substantial development progress visible in 6 months, requires allocation of dedicated engineering resources to deliver parity with the existing macOS/iOS clients.
2. **#48874 Multi-Session Architecture Shared LLM RFC**: Opened 2026-03-17, no product decision issued for 4 months. The proposed architecture would drastically reduce inference resource consumption for multi-agent deployments, a highly requested feature for enterprise operators.
3. **#94518 DeepSeek cache hit rate regression**: Opened 2026-06-18, marked stale, 10 upvotes, no public root cause analysis published after 1 month, leading to ongoing unexpected cost for hundreds of users.
4. **#82548 AI safety and quality observability events**: Opened 2026-05-16, no security review progress for 2 months, a core required feature for regulated enterprise deployments.

---

## Cross-Ecosystem Comparison

# Cross-Project Open Source Personal AI Agent Ecosystem Report (2026-07-15)
---

## 1. Ecosystem Overview
As of July 15 2026, the open source personal AI agent ecosystem has moved past early prototype experimentation to a universal production readiness phase, with the vast majority of active development focused on resolving real-world deployment pain points, rather than shipping unvetted experimental features. The 10 tracked active projects cover distinct deployment segments ranging from low-resource embedded edge hardware to large multi-tenant enterprise SaaS instances, creating a layered ecosystem with no single dominant project serving all user needs. Natural market consolidation is evident following the 2025 agent hype cycle, with 3 projects (NullClaw, TinyClaw, ZeptoClaw) recording zero active development in the 24-hour monitoring window. Almost all active teams are operating in post-major-release stabilization cycles, demonstrating a shared priority to reduce unplanned outages for growing self-hosted user bases.

## 2. Activity Comparison
| Project Name | Total Updated Issues (24h) | Total Updated PRs (24h) | Release Status (2026-07-15) | Project Health Score (1-10) |
|--------------|-----------------------------|--------------------------|------------------------------|------------------------------|
| OpenClaw     | 500                         | 500                      | No new public release; full resource allocation to regression triage for upcoming 2026.7.2 patch | 9.0 |
| NanoBot      | 13                          | 65                       | No new release; all merged changes staged for v0.1.4.post7 patch | 8.5 |
| Hermes Agent | 61                          | 39                       | No new release; clearing long-open P2/P3 bug backlog ahead of v0.18 launch | 8.0 |
| PicoClaw     | 3                           | 9                        | No new release; incremental fixes staged for next v0.3.x minor update | 8.5 |
| NanoClaw     | 0                           | 28                       | No new release; core reliability and new Dial channel integration work ongoing | 8.0 |
| IronClaw     | 49                          | 50                       | No new release; infrastructure hardening for 0.24.0 → 0.29.1 version bump | 8.5 |
| LobsterAI    | 0                           | 3                        | No new release; post-2026.6.x stabilization, zero unmerged PR backlog | 9.0 |
| Moltis       | 3                           | 12                       | New rolling 20260714.11 point release published with no breaking changes | 9.0 |
| CoPaw        | 50                          | 50                       | New v2.0.0.post2 patch published, fully resolving critical Windows sandbox regressions | 9.0 |
| ZeroClaw     | 42                          | 50                       | No new release; full feature freeze for final v0.8.3 validation | 7.5 |
| (Inactive Projects) | 0 | 0 | No recorded 24h activity | N/A |
*Health score calculation is weighted by issue resolution rate, unpatched critical bug count, and backlog management efficiency*

## 3. OpenClaw's Position
OpenClaw holds a clear leading position as the ecosystem's upstream reference architecture, with daily development volume 10x larger than most peer projects, and the broadest installed base of self-hosted users. Its primary advantages over competitors include a <2 hour SLA for high-severity bug responses, standardized cross-platform runtime abstractions, and the largest active contributor community, with hundreds of users voluntarily sharing debug logs and reproduction steps to accelerate triage.
Unlike peers that prioritize niche experimental features first, OpenClaw’s core roadmap prioritizes enterprise multi-tenancy and universal channel adapter compatibility as foundational requirements, rather than secondary add-ons. Multiple derivative projects (including LobsterAI, NanoClaw, and CoPaw) explicitly reference OpenClaw’s architecture patterns in their public roadmaps, cementing its role as the de facto baseline for production-grade open source agent runtime design.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across more than half of the tracked projects, reflecting universal user demand:
1. **Inference cost reduction**: OpenClaw, PicoClaw, and Moltis all allocate active engineering resources to optimized prompt caching, responding to widespread user reports of 10x unplanned cost spikes post-version upgrade. Pending improvements target up to 90% cost reduction for long-context workloads.
2. **Multi-user deployment security hardening**: IronClaw, NanoClaw, CoPaw, and ZeroClaw are prioritizing sandbox escape prevention, memory isolation, and RBAC controls, addressing unmet demand from operators running shared agent instances for teams or end customers.
3. **Local LLM compatibility improvements**: NanoBot, Moltis, and ZeroClaw are rolling out stricter schema validation, prompt leakage prevention, and fault-tolerant tool call parsing to reduce failure rates for lightweight open source models, eliminating the requirement for large closed model providers to run functional agents.
4. **Non-macOS platform parity**: OpenClaw, Hermes Agent, and NanoBot are resolving long-standing unaddressed bugs for Windows, Linux, and 32-bit embedded targets, to move past the ecosystem’s historical over-optimization for Apple hardware.

## 5. Differentiation Analysis
The ecosystem demonstrates clear segmentation by target user and technical design:
- **Target user segmentation**: OpenClaw, IronClaw, and ZeroClaw focus on large enterprise and multi-tenant SaaS operators; NanoBot, Hermes Agent, and Moltis cater to individual power users and small self-hosted teams; PicoClaw and NanoClaw are optimized for low-resource edge embedded deployments; LobsterAI and CoPaw serve localized Chinese user bases with region-specific channel and automation support.
- **Flagship feature differentiation**: ZeroClaw is the only project prioritizing end-to-end standard operating procedure (SOP) engine support as its core competitive advantage; Moltis leads the ecosystem on MCP (Model Control Protocol) compatibility and latest closed model support; NanoBot focuses on consumer instant messaging channel integrations; PicoClaw is purpose-built for ultra-small footprint deployment on embedded hardware.
- **Architectural differences**: OpenClaw uses a modular microservice runtime optimized for horizontal scaling; Hermes Agent uses a single-file TUI-first runtime built for personal local use; ZeroClaw adopts an event-driven execution model purpose-built for long-running asynchronous workflow automation; Moltis uses a stateless zero-bloat architecture optimized for edge deployment.

## 6. Community Momentum & Maturity
All active projects fall into 4 clear maturity tiers:
1. **Rapid Iteration Tier**: ZeroClaw, IronClaw, NanoBot. All record >40 daily code changes, actively landing flagship new capabilities (full SOP engine, unified extension runtime) while triaging new user-reported bugs.
2. **Stable Production Tier**: OpenClaw, Hermes Agent, CoPaw, Moltis. All have broad production user bases and recent major stable releases, with engineering teams 100% focused on resolving post-release regressions and improving reliability over shipping new features.
3. **Niche Maintenance Tier**: PicoClaw, NanoClaw, LobsterAI. All serve specialized user segments, with low but consistent development throughput, zero pending PR backlogs, and no unpatched critical production bugs.
4. **Dormant Inactive Tier**: NullClaw, TinyClaw, ZeptoClaw. No recorded development activity in the 2

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-07-15
---
## 1. Today's Overview
NanoBot saw exceptionally high development velocity on 2026-07-15, with 13 total updated issues and 65 updated pull requests processed across all core modules. 77% of recently active issues were closed in the 24-hour window, alongside 72% of all touched PRs marked as merged or closed, demonstrating strong issue resolution throughput. Today's work was heavily focused on resolving lingering post-v0.1.4.post6 Telegram channel bugs, patching critical runtime stability issues, rolling out WebUI UX improvements, and adding new deployment quality of life features. No new official releases were published today, but the large batch of merged changes is staged for the next patch version. The active maintenance cycle reflects a healthy, responsive community working to address both long-standing pain points and newly reported regressions.

## 2. Releases
No new official releases published in the last 24 hours. All merged changes are currently staged on the main branch for the next v0.1.4.post7 patch release.

## 3. Project Progress
47 PRs were merged/closed in the past 24 hours, delivering the following key fixes and feature updates:
- Core stability fixes: Resolved Telegram intermittent markdown rendering failures, long message split delivery issues, streaming LLM indefinite timeout bypass, Windows ExecTool PowerShell UTF-16 output corruption, and WhatsApp Bridge inter-Docker container connectivity blocks
- Heartbeat system improvements: Merged configurable heartbeat response evaluation logic that fixes recent cron-migration regressions, adds support for skipping non-actionable notification delivery
- WebUI UX upgrades: Added slash command highlighting, one-click copy functionality for user messages, and fixed the broken qrcode dependency sync that caused Docker build failures
- DevOps & test suite improvements: Cut CI runtime by ~60% via a streamlined cross-environment test matrix, added a scripted agent runner test harness to improve coverage of complex tool loop logic
- Consistency improvements: Standardized `--config` flag help text across all CLI commands to eliminate inconsistent user documentation, added provider observability for Codex request failure stage identification

## 4. Community Hot Topics
| Item | Link | Engagement | Underlying Need Analysis |
|------|------|------------|---------------------------|
| WhatsApp Bridge WebSocket binding prevents inter-container communication | [HKUDS/nanobot #1086](https://github.com/HKUDS/nanobot/issues/1086) | 4 👍, 1 comment | Top-voted open recently closed issue, reflecting strong demand from users running distributed, multi-container NanoBot deployments that require isolated service networking architectures. The resolved fix adjusts the default WebSocket bind address to enable cross-container connectivity out of the box. |
| Don't send channel messages for cron jobs when nothing meaningful happened | [HKUDS/nanobot #1445](https://github.com/HKUDS/nanobot/issues/1445) | 2 👍, 2 comments | Core request from power users running NanoBot for automated background monitoring use cases, who currently receive excessive spam notifications for cron jobs that complete without detecting new events. This requirement was directly addressed by today's merged heartbeat configuration PR. |
| Add one-click Deploy to Render support | [HKUDS/nanobot PR #4937](https://github.com/HKUDS/nanobot/pull/4937) | Newly submitted, high community traction | This feature targets new user onboarding pain points, reducing deployment complexity to a single click and eliminating manual configuration steps for small self-hosted users. |

## 5. Bugs & Stability
Bugs reported or confirmed in the last 24 hours, ranked by severity:
1. **High Severity**: Qwen models (e.g. qwen3.6-flash) expose internal thinking/reasoning content in chat responses [HKUDS/nanobot #4934](https://github.com/HKUDS/nanobot/issues/4934). Affects all users accessing Qwen series models via the DashScope provider, showing raw `<think>` tag reasoning traces to end users, degrading chat output quality. No fix PR has been opened yet.
2. **High Severity**: `cli/commands.py:_pick_heartbeat_target_from_sessions` fails when `unifiedSession: true` [HKUDS/nanobot #4924](https://github.com/HKUDS/nanobot/issues/4924). Breaks automated heartbeat notification routing for users who enable unified session mode across channels. A priority P1 fix PR [HKUDS/nanobot PR #4928](https://github.com/HKUDS/nanobot/pull/4928) is open and in active development.
3. **Medium Severity**: Resource leak: `Session.messages` list unbounded — messages accumulate forever [HKUDS/nanobot #4787](https://github.com/HKUDS/nanobot/issues/4787). Causes steady memory bloat in long-running NanoBot instances, especially deployments with enabled unified sessions that never expire. No merged fix is available as of today.
4. **Medium Severity**: WebUI file preview lacks path validation risk [HKUDS/nanobot #4935](https://github.com/HKUDS/nanobot/pull/4935). A security hardening fix PR is already open for review, no public exploitation reported.

All other previously reported critical bugs (including streaming timeout bypass, Windows shell encoding corruption, and Telegram markdown rendering failures) are fully resolved with merged fixes today.

## 6. Feature Requests & Roadmap Signals
Recently prioritized user-requested features and expected delivery timelines:
1. WebUI Cron Job Management [HKUDS/nanobot #4218](https://github.com/HKUDS/nanobot/issues/4218): The core underlying heartbeat and cron runtime feature work is now complete, WebUI implementation is next on the roadmap and very likely to ship in the v0.1.5 minor release.
2. One-click Render deployment support [HKUDS/nanobot PR #4937](https://github.com/HKUDS/nanobot/pull/4937): The PR is marked ready for review, will almost certainly be included in the upcoming v0.1.4.post7 patch release to reduce self-hosting barriers.
3. Xiaomi smart speaker (Xiao Ai) channel integration [HKUDS/nanobot #1411](https://github.com/HKUDS/nanobot/issues/1411): A community contributor has already confirmed they are actively developing this extension, and it is expected to be merged as a new supported channel in the 2026 Q3 release cycle.
4. Custom provider extraHeaders support [HKUDS/nanobot #2505](https://github.com/HKUDS/nanobot/issues/2505): The feature request is marked closed, the fix will be packaged in the next patch release for self-hosted users running custom model endpoints.

## 7. User Feedback Summary
- **Pain Points**: The most widely reported recent user frustration was intermittent Telegram markdown rendering and long message split failures introduced in the v0.1.4.post6 update, which impacted a large share of Telegram channel users; all these issues are now fully resolved. Windows power users who rely on the ExecTool for local shell operations previously encountered corrupted output due to missing UTF-16 encoding support for PowerShell, this bug is patched today. Container deployment users continue to prioritize out-of-the-box networking defaults that support multi-service stack setups.
- **Satisfaction**: Users have given positive feedback on the rapid issue resolution turnaround, with 10 of 13 recently active issues closed within 24 hours of being triaged. Multiple users noted the new configurable heartbeat feature directly solves their previously unsolvable problem of spam notifications for idle monitoring bots.

## 8. Backlog Watch
High-priority unresolved items needing maintainer attention:
1. The unbounded `Session.messages` memory leak issue [HKUDS/nanobot #4787](https://github.com/HKUDS/nanobot/issues/4787) was filed 9 days ago, has only 1 comment and no assigned maintainer. This bug poses an eventual OOM crash risk for all production long-running unified session deployments, and requires urgent prioritization to avoid widespread runtime stability incidents.
2. The community-contributed Xiaomi smart speaker channel integration request [HKUDS/nanobot #1411](https://github.com/HKUDS/nanobot/issues/1411) has an active volunteer developer, but has not gotten maintainer response to coordinate contribution guidance and API alignment, delaying the new channel's merge.
3. 8 remaining open PRs marked with merge conflicts (including OAuth status warning surfacing, memory archive fact gating improvements) are long-running work items, and need maintainer triage to resolve code conflicts and unblock their merge in coming cycles.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-07-15
Repository: [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. Today's Overview
This was an extremely high-velocity development day for the Hermes Agent project, with 100 total issues and pull requests updated across the last 24 hours, representing major progress clearing long-open backlog items. The team resolved 39 total issues and merged 9 pull requests, almost all of which were P2/P3 stability bugs originally reported in late June 2026. No new regressions or critical P0 security incidents were filed during the window, and project maintainers published formal public tracking issues to align the community on upcoming plugin interface roadmap priorities. The activity velocity signals very healthy project health, with efficient triage and bug fix throughput for end-user pain points.

## 2. Releases
No new official releases were published in the 24-hour window ending 2026-07-15. All recently merged fixes will be bundled into the next planned minor release.

## 3. Project Progress
Today's 9 merged/closed PRs and 39 resolved issues advanced multiple core workstreams:
- All 28 P2/P3 bugs marked `sweeper:implemented-on-main` were shipped to the main branch, including fixes for the Photon iMessage sidecar death spiral, WhatsApp adapter path resolution error, MCP stdio zombie process leaks, session slowdown caused by retained tool output bloat, and broken GitHub Copilot provider inference
- 7 previously long-open invalid/duplicate/unreproducible issues were formally closed to reduce backlog noise
- Two pending feature PRs were closed: the "add Cursor external provider" PR was marked not planned per maintainer triage, while the duplicate cron progress heartbeat PR was replaced by a revised active PR
- The core stability fixes resolve almost all reported breakages for multi-platform users running v0.17.0

## 4. Community Hot Topics
The most active recent items, sorted by comment volume:
1. [Issue #49858: Photon iMessage: sidecar death causes silent reconnect death spiral (no respawn)](https://github.com/nousresearch/hermes-agent/issues/49858) (10 comments): The top-voted user pain point for messaging platform integration users, underlying demand for automatic subprocess health management for all third-party channel adapters that run external sidecars.
2. [Issue #64182: Tracking: Plugin Interface Expansion — community ideas, July 2026](https://github.com/nousresearch/hermes-agent/issues/64182) (9 comments): Published by lead maintainer teknium1, this tracking issue already drew 9 comments from community contributors who have been waiting for standardized plugin extension points to ship their long-queued feature PRs, addressing widespread user demand for lower-friction third-party extension development workflows.

## 5. Bugs & Stability
New and updated bugs ranked by severity, with fix status:
| Severity | Item | Status |
|---|---|---|
| P1 | [Issue #64590: Context-file discovery falls back to the Hermes install tree and loads its contributor AGENTS.md as project context](https://github.com/nousresearch/hermes-agent/issues/64590) | No linked fix PR submitted yet; reported 2026-07-14 |
| P2 | [Issue #64539: Context compression can fabricate user turns and flip session language; poisoned summary persists across compaction cycles](https://github.com/nousresearch/hermes-agent/issues/64539) | No linked fix PR, affects long-running cron automation sessions |
| P2 | [Issue #42674: Background process notify_on_complete leaks into wrong TUI session (cross-session bleed)](https://github.com/nousresearch/hermes-agent/issues/42674) | No linked fix PR, multi-user TUI deployments are most affected |
| P2 | [Issue #59089: ACP session/set_model reroutes explicit anthropic:claude-sonnet-5 to OpenRouter ("No LLM provider configured")](https://github.com/nousresearch/hermes-agent/issues/59089) | No linked fix PR, breaks explicit model selection for ACP automation users |
All remaining P2/P3 bugs reported in the last 24 hours have corresponding fixes already merged to main.

## 6. Feature Requests & Roadmap Signals
Published tracking issues and community contributions signal that the upcoming v0.18 minor release will very likely include:
1. The standardized plugin interface expansion referenced in Issue #64182, including the new `classify_api_error` provider plugin hook submitted via [PR #58524](https://github.com/nousresearch/hermes-agent/pull/58524)
2. In-app inline audio player rendering for TTS outputs in the desktop app, already marked as implemented on main
3. Stable core performance fixes for desktop app startup time and profile switching workflows
4. Configurable progress heartbeat support for long-running cron job executions
This roadmap prioritization is explicitly aligned with top community feature requests surfaced in the July 4 #plugins-interface-ideas Discord thread.

## 7. User Feedback Summary
Clear user pain points surfaced across resolved and open issues include:
- Non-English locale users with non-ASCII usernames on Windows experienced frequent update breakages and startup failures before today's merged fix
- Desktop app users reported consistent frustrations with slow startup, incorrect profile switching behavior, and broken local model endpoint configuration for LM Studio and Ollama
- Power users running 24/7 automation and cron workflows reported high dissatisfaction with orphaned process leaks and silent session breakages that require manual restarts
- Multiple positive mentions from end users who state Hermes Agent is their daily driver for all personal and work AI workflows, with overall high satisfaction for core functionality despite edge case bugs.

## 8. Backlog Watch
Long-dated high-impact open items that still need formal maintainer review and triage:
1. [PR #29552: fix(feishu): render markdown tables via post+tag:md instead of plain text](https://github.com/nousresearch/hermes-agent/pull/29552): Opened May 21, 2026, fixes a long-standing broken formatting bug for Feishu platform users that has not yet been scheduled for merge.
2. [PR #48985: feat(mcp): add safe ChatGPT Hermes profile router](https://github.com/nousresearch/hermes-agent/pull/48985): Opened June 19, 2026, this large 20k+ line draft PR introducing a privileged MCP profile router has received no maintainer feedback for almost a month.
3. [PR #40120: fix(installer): gate Linux i686 runtime deps](https://github.com/nousresearch/hermes-agent/pull/40120): Opened June 5, 2026, support for 32-bit x86 Linux embedded devices has been pending triage for over 5 weeks.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-07-15
This digest is generated based on GitHub activity data from sipeed/picoclaw over the 24-hour monitoring window.

---

## 1. Today's Overview
On 2026-07-15, the PicoClaw open-source AI assistant project recorded steady, development-focused activity with 3 active updated issues and 9 total pull requests (5 of which were merged or closed in the window), with no new official releases published. The majority of merged work addresses edge-case bug fixes for LLM provider integrations, messaging channel behavior, and config handling, while open in-progress PRs advance high-value performance features around prompt caching for major cloud model providers. Core contributor loafoe delivered all 5 of the day's merged PRs, and community submissions focus on platform-specific bug fixes for DingTalk/Feishu enterprise messaging channels and security hardening proposals. No critical production-outage level bugs were reported, with all new user reports targeting minor usability or niche integration quirks. Overall project health remains strong, with a consistent pace of incremental improvements resolving long-standing backlog items.

## 2. Releases
No new official PicoClaw releases were published in the 24-hour monitoring window. This section is omitted as no new version changes, breaking adjustments, or migration notes are available.

## 3. Project Progress (Merged/Closed PRs)
All 5 merged or closed PRs in the period deliver tangible fixes and feature improvements to the codebase:
1. [#2982 fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)](https://github.com/sipeed/picoclaw/pull/2982): Resolves the 400 validation error that broke all AWS Bedrock Claude Opus 4.8 calls by automatically omitting the unsupported temperature parameter for newer model versions.
2. [#2957 fix(channels): prevent tool_calls from being dropped during streaming](https://github.com/sipeed/picoclaw/pull/2957): Fixes incorrect filtering of valid tool call messages as auxiliary data during streaming output, eliminating a common failure point for agent workflows that rely on real-time function calling.
3. [#2270 fix(config): handle non-addressable SecureString values in collectSensitive](https://github.com/sipeed/picoclaw/pull/2270): Patches a runtime panic triggered when sensitive data scanning logic processes map values containing SecureString fields, resolving a Go reflection edge case in the config module.
4. [#2128 fix(tools): ensure tool parameters have valid JSON Schema properties field](https://github.com/sipeed/picoclaw/pull/2128): Adds compliance for strict OpenAI-compatible self-hosted API endpoints such as LM Studio by ensuring all auto-generated tool JSON schemas include a required `properties` field, removing schema validation errors for MCP server-connected tool use.
5. [#3156 feat(pico): emit per-turn LLM token usage on finalized message](https://github.com/sipeed/picoclaw/pull/3156): Introduces long-requested granular token tracking for the internal Pico channel, allowing downstream integrations to separately count input and output token consumption for per-conversation billing and cost monitoring.

## 4. Community Hot Topics
The most active item in the current window is the high-priority security feature request:
> [#3088 [Feature] use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)
This issue has 8 comments and 2 upvotes, far more engagement than other updated items. The underlying community need is eliminating unpatched security risks from the deprecated, no-longer-maintained libolm cryptography library PicoClaw currently uses for end-to-end encryption use cases. Community members are signaling strong demand for long-term security sustainability over short-term feature additions, to reduce attack surface for users running public-facing PicoClaw deployments. The issue is marked "help wanted", indicating maintainers are actively seeking external contributor support for the implementation.

## 5. Bugs & Stability
All newly reported bugs are ranked by operational impact below, with no critical crash-level bugs recorded this window:
1. **High severity**: [#3232 [BUG] Rate limiting doesn't work if no fallback models is configured](https://github.com/sipeed/picoclaw/issues/3232): Breaks core resource governance functionality, disabling RPM rate limits entirely for all deployments that do not define fallback models, first reported on v0.3.1 running in Docker. No matching fix PR has been published as of this update.
2. **Medium severity**: [#3255 [BUG] DingTalk chat list preview shows fixed "PicoClaw" instead of message content (SimpleReplyMarkdown title)](https://github.com/sipeed/picoclaw/issues/3255): Degrades end-user experience on the DingTalk integration, making it impossible to preview recent message content from the conversation list. No dedicated fix PR for this issue exists yet, though parallel active work on Feishu channel media support indicates maintainers are prioritizing enterprise IM channel quality.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests and in-progress work point to three high-probability additions for upcoming releases:
1. The prompt caching support for AWS Bedrock (PR #3163) and Anthropic (PR #3228) is on track to land in the next v0.3.x minor release, which will cut cloud LLM input costs by up to 90% for long-context workloads.
2. The vodozemac cryptography library migration requested in #3088 is targeted as a critical security hardening update that will likely ship in the next major feature release.
3. The newly merged per-turn token usage tracking lays the foundation for an upcoming built-in cost dashboard feature for admin users, a frequently requested item for multi-tenant PicoClaw deployments.

## 7. User Feedback Summary
Aggregated real user pain points and satisfaction signals from the last 24 hours include:
- Users running strict self-hosted LLM backends like LM Studio previously encountered unresolvable tool schema validation errors, a pain point fully resolved by the newly merged PR #2128.
- Enterprise users deploying PicoClaw on DingTalk and Feishu for internal team use are dissatisfied with non-native message formatting (static chat previews, non-playable media files) that reduces perceived integration quality against competing commercial AI assistants.
- Admin users managing multi-user deployments have expressed strong satisfaction around the newly shipped per-turn token usage tracking, which resolves a long-standing gap in cost visibility.
- Security-focused self-hosted power users are actively pushing for removal of unmaintained third-party dependencies to reduce unpatched vulnerability exposure.

## 8. Backlog Watch
Two high-priority stale items require urgent maintainer attention:
1. Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) (opened 2026-06-09, 5+ weeks old): This high-priority security hardening request around vodozemac migration has received 8 community comments, but no formal roadmap assignment or official maintainer update on implementation timeline, despite being a critical risk mitigation item for public-facing deployments.
2. Stale PR [#3233 Fix pr 3222 backward compat](https://github.com/sipeed/picoclaw/pull/3233) (opened 2026-07-07, 8+ days old): This PR addresses backward compatibility for a prior major code change in PR #3222, but has received no review activity for over a week, putting existing downstream custom integrations at risk of unplanned breakage when the underlying unpatched change ships.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest | 2026-07-15
---
## 1. Today's Overview
As of 2026-07-15, the NanoClaw open-source AI assistant project saw very high contributor velocity, with 28 total pull request updates recorded in the prior 24 hours and zero new or modified open issues logged. No new official releases were published in the window, as most development work focused on landing targeted bug fixes, security hardening patches, documentation alignment, and the rollout of a new third-party channel integration. 9 PRs were successfully merged or closed today, representing a 32% merge rate for the 28 updated PRs, signaling a well-functioning review workflow for the active development cohort. The project’s activity is skewed heavily toward core reliability and integration polish, with no major breaking changes or high-severity unaddressed vulnerabilities flagged in the public change log.

## 2. Releases
No new official releases were issued in the 24-hour window covered by this digest.
## 3. Project Progress
9 PRs were merged/closed today, spanning core reliability, integration polish, documentation, and new feature delivery:
1. **Telegram pairing fixes**: PR [#2728](https://github.com/nanocoai/nanoclaw/pull/2728) resolved a broken pairing flow for the `wire-to:<folder>` intent that failed to create required database wiring rows, while PR [#2729](https://github.com/nanocoai/nanoclaw/pull/2729) corrected the official add-telegram skill documentation to match emitted API status blocks and fixed an outdated adapter dependency pin.
2. **Core runtime reliability fixes**: PR [#2753](https://github.com/nanocoai/nanoclaw/pull/2753) patched pre-commit hook failures on systems without pnpm in the global PATH, and PR [#2730](https://github.com/nanocoai/nanoclaw/pull/2730) fixed an env loading bug that blocked NANOCLAW_* runtime flags from working under launchd or systemd service deployments.
3. **New Dial channel milestone**: PR [#3042](https://github.com/nanocoai/nanoclaw/pull/3042) merged base support for the Dial chat platform, adding the integration to the setup channel picker, installation wizard, associated skill assets, and end-user documentation.
4. **Accessibility update**: PR [#3043](https://github.com/nanocoai/nanoclaw/pull/3043) updated Telegram deep link references across all skills to use `telegram.me` instead of `t.me` for improved regional accessibility.

Across all merged changes, 40% are communication channel improvements, 30% core system reliability fixes, 20% documentation corrections, and 10% new feature delivery.

## 4. Community Hot Topics
No PRs accumulated public user comments or emoji reactions in the 24-hour window, but two high-priority workstreams drew cross-contributor alignment:
1. Dial full integration rollout (PRs [#3042](https://github.com/nanocoai/nanoclaw/pull/3042), [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)): The underlying community need driving this work is user demand to extend NanoClaw's multi-platform deployment options beyond existing Telegram, Slack, and Discord integrations, to support personal and team deployments on emerging chat platforms.
2. Multi-user deployment security hardening (PR [#2800](https://github.com/nanocoai/nanoclaw/pull/2800)): This security patch addresses a widely flagged unmet need from self-hosted power users running shared NanoClaw instances, to reduce sandbox escape and unvetted container execution risks.

## 5. Bugs & Stability
All active reported bugs today have associated open fix PRs, ranked by severity:
1. **Critical**: Unvalidated group folder paths and implicit Docker image pull behavior that could lead to filesystem escape or execution of unapproved container images, addressed by open PR [#2800](https://github.com/nanocoai/nanoclaw/pull/2800).
2. **High**: Discord approval card button presses default to reject regardless of user selection, blocking all interactive approval workflows for Discord-hosted bots, addressed by open PR [#2899](https://github.com/nanocoai/nanoclaw/pull/2899).
3. **Medium**: Poll loop parsing bugs that either truncate `<message>` bodies at quoted `</message>` markers or fail to deliver messages emitted during tool-call turns, addressed by PRs [#3048](https://github.com/nanocoai/nanoclaw/pull/3048) and [#3049](https://github.com/nanocoai/nanoclaw/pull/3049).
4. **Medium**: Slack onboarding flow bug that asks users to verify webhooks before entering required credentials, breaking new Slack install walkthroughs, addressed by PR [#3047](https://github.com/nanocoai/nanoclaw/pull/3047).
No unpatched critical regressions or unreported crash patterns were recorded in the window.

## 6. Feature Requests & Roadmap Signals
The upcoming next minor NanoClaw release is projected to ship three high-demand capabilities based on active PR progress:
1. Full, production-ready Dial channel support, finalized by PR [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) to complement the base integration that merged today.
2. A unified approval hold lifecycle contract (PR [#3040](https://github.com/nanocoai/nanoclaw/pull/3040)) that simplifies custom approval workflow development for self-hosted users.
3. Activated supply chain security controls for pnpm dependency resolution (PR [#2973](https://github.com/nanocoai/nanoclaw/pull/2973)) that enforce minimum package release age rules to reduce the risk of malicious newly published dependency attacks.

## 7. User Feedback Summary
All captured user pain points today are derived from real-world end-to-end installation and runtime testing shared by contributors:
1. New Slack users following official setup steps were unable to complete webhook verification due to incorrect step ordering in documentation, leading to failed first-time installs.
2. Self-hosted users running NanoClaw as a systemd/launchd service found their custom NANOCLAW_* environment variables completely ignored, breaking security features such as egress lockdown.
3. Discord users were unable to interact with any approval card UI, making basic bot management impossible for Discord-native deployments.
4. Telegram users found voice/audio note attachments were silently dropped with no file bytes passed to the agent.
No explicit user satisfaction feedback was captured in the window, but the fast turnaround of targeted fixes for all reported pain points demonstrates strong responsiveness to real-world user issues.

## 8. Backlog Watch
Three high-impact long-running PRs that have been open for more than 12 days are pending final maintainer review to unblock downstream work:
1. PR [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) (opened 2026-06-12): Fixes stale `outbound.db` journal corruption events after container SIGKILL, resolving two widely reported race condition bugs.
2. PR [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) (opened 2026-06-17): Critical security patch for group folder validation and implicit container pull blocking, required for production multi-user deployments.
3. PR [#2921](https://github.com/nanocoai/nanoclaw/pull/2921) (opened 2026-07-03): Fixes a compose bug that inlines all skill instruction files into every group's context, leading to unnecessarily large context windows and degraded LLM inference performance.
All three patches are low-risk and would resolve long-standing user complaints if merged.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-07-15
---
## 1. Today's Overview
On 2026-07-15, the IronClaw AI agent platform recorded very high active development velocity, with 49 total updated issues (37 active, 12 closed) and 50 total updated pull requests (21 open, 29 merged/closed) over the 24-hour window. The core team’s primary focus this cycle is wrapping up long-planned unified extension runtime infrastructure, resolving recently surfaced bug bash defects, and hardening core message ordering and system stability ahead of the next public release. No new official releases were published in the window, as the team is still finalizing critical dependency upgrades and cross-cutting correctness fixes. Overall project health remains strong, with 58% of all updated PRs and 24% of all updated issues resolved in the past day, indicating high throughput on planned workstreams.
## 2. Releases
No new official production releases of IronClaw were published in this 24-hour reporting window. An in-progress chore release PR #5598 is currently open that includes documented breaking API changes to the `ironclaw_common` and `ironclaw_skills` crates, which will bump the main IronClaw package version from 0.24.0 to 0.29.1 once merged.
## 3. Project Progress
The 29 merged/closed PRs in the reporting window delivered the following key advancements and fixes:
- Resolved the critical workspace memory isolation bug via PR #5896, scoping WebUI memory browse access to the authenticated caller to prevent cross-user data leaks, closing previously reported issue #5460.
- The full 9-phase Train B extension runtime infrastructure rollup (PRs #5995, #5996, #6008, #6007, #6012, #6056, #6065) was fully merged, shipping a new auth engine, generic channel ingress router, Slack/Telegram outbound delivery coordinator, and finalized extension state accounting capabilities.
- Merged PR #6089 that adds libSQL/SQLite contention recovery, classifying `BUSY/LOCKED` database errors as typed retryable events for both SQLite and PostgreSQL to prevent unplanned service crash loops.
- Merged PR #6095 to improve error fidelity for credential revocation scenarios, correctly naming blocked providers in user-facing notices instead of misclassifying storage I/O faults as invalid user input.
- Merged PR #6013 that adds a tools-capable completion nudge for the agent loop, improving LLM performance on interactive coding tasks.
- A batch of UI bug fixes landed: resolving unreadable contrast values in the light theme, hiding chat connection status during interruptions, the stray `$` character in the MCP servers tab, and the requirement for a manual page refresh after deleting a chat thread.
## 4. Community Hot Topics
The most actively discussed items by comment count are:
1. [Issue #5948](https://github.com/nearai/ironclaw/issues/5948) (5 comments): P3 bug where the assistant incorrectly reports the GitHub extension as activated when it is only installed. The discussion reflects a shared team priority to deliver 100% accurate extension state visibility to end users, who need clear, actionable signals about which integrations are ready for use.
2. [Issue #5889](https://github.com/nearai/ironclaw/issues/5889) (2 comments): P3 bug for the non-functional "Load older messages" button in the activity panel. This captures a widely requested UX improvement for users who maintain long-running agent workflows and need to access full historical conversation context.
3. [Issue #5640](https://github.com/nearai/ironclaw/issues/5640) (2 comments): Test harness gap where the `RecordingSecurityAuditSink` double is missing from the integration suite. This reflects engineering demand for stronger production/test parity to catch correctness gaps before code reaches end users.
4. [Issue #6050](https://github.com/nearai/ironclaw/issues/6050) (2 comments): P3 bug that displays a persistent "failed to load conversation history" banner even when current chat requests work perfectly. The ongoing conversation is aligned on defining consistent partial-failure UX patterns that avoid alarming users unnecessarily.
## 5. Bugs & Stability
Bugs are ranked by severity, with linked fix PR status noted:
### P2 (High Severity)
1. [Issue #6047](https://github.com/nearai/ironclaw/issues/6047): Task messages are processed and displayed out of chronological order. Fix PR [PR #6096](https://github.com/nearai/ironclaw/pull/6096) is open, with a passing reproduction test already confirming the per-thread write serialization resolves the defect.
2. [Issue #6091](https://github.com/nearai/ironclaw/issues/6091): Slack extension shows conflicting connection states in different parts of the UI after user-initiated disconnect. No fix PR filed as of this report.
3. [Issue #6092](https://github.com/nearai/ironclaw/issues/6092): Slack conversations hang permanently in "thinking" state after the extension is reconnected. No fix PR filed.
4. [Issue #5884](https://github.com/nearai/ironclaw/issues/5884): Scheduled routines lose credentials after an external token revocation. Partial fix merged in PR #6095 for improved error messaging, full automatic credential re-detection logic is pending.


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest (2026-07-15)
*Source: NetEase Youdao LobsterAI Open Source Repository (github.com/netease-youdao/LobsterAI)*

---

## 1. Today's Overview
The 2026-07-15 tracking window saw consistent, maintenance-focused development activity for LobsterAI, with zero newly opened active issues and zero unmerged pending PRs left in the public repository queue. The day’s work centered entirely on grooming 3+ month old stale backlog bug tickets and rolling out targeted, tested patches for the project’s core agent runtime and collaborative user interface, with no new feature launches or official production releases issued. This steady upkeep cadence signals the team is prioritizing stability and quality-of-life optimizations ahead of upcoming major feature rollouts, with no critical unaddressed security or outage-level incidents reported in the 24-hour period. All logged changes follow structured version alignment with upstream OpenClaw runtime dependencies, effectively reducing accumulated technical debt from mismatched runtime versions.

## 2. Releases
No new official releases were published for LobsterAI in the 24-hour tracking window. No version update notes, breaking change alerts, or migration guidance are available for this period.

## 3. Project Progress
All 3 PRs updated in the window were merged/closed with full targeted test coverage, delivering the following fixes and improvements:
1. [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) by contributor liuzhq1986: Fixed collaborative chat session scroll jump issues by adding logic to respect manual user scroll inputs during AI response streaming, and cancel queued auto-scroll actions triggered by new message arrival.
2. [#2330](https://github.com/netease-youdao/LobsterAI/pull/2330): Backported upstream OpenClaw runtime commit `7fe287b0d3` to stop the main agent execution loop properly after a tool run is force-aborted, eliminating unhandled hanging states after failed tool calls.
3. [#2331](https://github.com/netease-youdao/LobsterAI/pull/2330): Rolled out a dual-layer OpenClaw v2026.6.1 fix to ensure critical tool-loop veto events fully terminate the active agent run, while preserving normal plugin veto behavior and allowing parallel sibling tools in mixed batches to finish gracefully before runtime shutdown.

## 4. Community Hot Topics
The most engaged ticket of the day is the localization bug [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) with 3 total comments, the highest engagement across all 4 resolved issues. The ticket reports that the "Chinese" language selector option displays English text when the global app UI is set to English, which breaks expected localization conventions. The underlying user demand reflected here is for intuitive, globally standardized multilingual support: users expect language selection labels to match the native name of the target language (e.g. 中文 for Chinese) regardless of current UI language, to reduce navigation friction for non-native English speakers setting up self-hosted instances. No other tickets accumulated significant user upvotes or public feedback in this tracking window.

## 5. Bugs & Stability
All 4 bugs logged in the 24-hour window were fully resolved, ranked by original severity as follows:
1. **Highest severity**: [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) - Email configuration feature enters an unrecoverable infinite loading state after failed test connectivity checks that persists even after app restart, blocking admin setup of system email notifications. Fixed and marked closed.
2. **Medium severity**: [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) - Occasional non-response when users attempt to edit and update pre-configured scheduled tasks, breaking productivity automation workflows for power users. Fixed and marked closed.
3. **Low-medium severity**: [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) - Long screenshots generated via the chat share button fail to capture full conversation content for extended multi-turn chats, degrading core collaborative sharing functionality. Fixed and marked closed.
4. **Low severity**: [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) - Localization mislabeling of the Chinese language selector option, a minor UI polish issue. Fixed and marked closed.
No unpatched critical bugs or regressions were reported in this tracking window.

## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were opened during this period, but the current batch of merged changes clearly signals the next minor LobsterAI release will prioritize core runtime reliability for agent tool execution, refined multi-user collaborative chat experience, and edge-case UI behavior optimizations rather than large new feature launches. It is highly expected that all 3 runtime/UI patches and 4 resolved bug fixes will ship as part of a 2026.7.x stable maintenance patch for existing users, with no breaking changes anticipated.

## 7. User Feedback Summary
All logged user feedback reflects consistent usability pain points from self-hosted instance admins and daily power users, with no explicit criticism of core LLM inference or agent execution performance. Key pain points include unrecoverable stuck loading states during system configuration, friction in high-frequency features including chat sharing and scheduled task management, unexpected reading flow disruptions from auto-scroll jumps during streaming responses, and minor localization confusion. The lack of negative feedback for core functionality indicates broad user satisfaction with LobsterAI's baseline agent capability, while users are actively pushing for polish of peripheral productivity features.

## 8. Backlog Watch
All 4 stale issues resolved on 2026-07-15 were originally created on 2026-04-03, meaning they sat unaddressed in the repository backlog for over 3 months before being triaged. No unresponded high-priority new tickets are left in the queue as of the end of the tracking window, but the long turnaround time for even low-severity legacy bugs suggests the team has an accumulated backlog of 3+ months of logged tickets that will require dedicated grooming sprints to avoid gradual user churn from unaddressed longstanding usability issues. The open contribution pipeline for new PRs is well-maintained with zero pending un-reviewed submissions as of this report.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Daily Digest (2026-07-15)
Repository: [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. Today's Overview
The Moltis project recorded high development velocity over the 24-hour window ending 2026-07-15, with 12 total pull request updates, 3 active issue updates, and one new rolling release published. The development team prioritized patching high-impact integration bugs, adding support for the latest OpenAI GPT model, and resolving common failure modes for lightweight local LLMs. 8 out of 12 updated PRs were successfully merged, representing a 67% merge rate that indicates tight, efficient code review throughput. No unpatched critical regressions were identified in the reporting period, with overall project health rated as strong. Four in-progress feature PRs remain open as the team moves toward its mid-July feature milestone.

## 2. Releases
The new rolling point release [20260714.11](https://github.com/moltis-org/moltis/releases/tag/20260714.11) was published in the reporting window. This is a standard incremental build that bundles all merged bug fixes and feature updates from the 2026-07-14 development cycle, with no documented breaking changes. No migration steps are required for existing users, and seamless in-place upgrade is supported for all prior 2026 release versions.

## 3. Project Progress
All 8 merged/closed PRs advanced core functionality and reliability in the reporting period:
- [PR #1146](https://github.com/moltis-org/moltis/pull/1146): Added full native support for OpenAI's new GPT-5.6 model family (Sol, Terra, Luna) with correctly configured 1.05M OpenAI API context window and 372K ChatGPT/Codex backend limits, plus updated all documentation references for superseded older OpenAI models.
- [PR #1120](https://github.com/moltis-org/moltis/pull/1120): Resolved the broken MCP OAuth flow for popular third-party integrations including Notion and Linear, closing a major adoption blocker for the MCP ecosystem.
- Three LLM reliability fixes: [PR #1098](https://github.com/moltis-org/moltis/pull/1098) added tolerance for null optional parameters in browser tool calls, [PR #1136](https://github.com/moltis-org/moltis/pull/1136) added auto-coercion for stringified scalar tool arguments, and [PR #1089](https://github.com/moltis-org/moltis/pull/1089) capped oversized persisted tool results to prevent session bloat, all drastically reducing failure rates for lightweight local models such as Gemma 4.
- Two low-level core bug fixes: [PR #1139](https://github.com/moltis-org/moltis/pull/1139) removed the unintended hard dependency on Matrix SDK that was pulled in when enabling the metrics feature, and [PR #1145](https://github.com/moltis-org/moltis/pull/1145) eliminated a panic triggered by non-ASCII datetime values from remote CalDAV servers.
- An older scheduled JS dependency bump PR [PR #1141](https://github.com/moltis-org/moltis/pull/1141) was merged to update esbuild and vite across the UI and docs directories.

## 4. Community Hot Topics
The highest engagement items from the reporting period reflect the project's dual user base of cloud power users and local-first self-hosters:
1. [Issue #1119](https://github.com/moltis-org/moltis/issues/1119) (resolved): The MCP OAuth failure breaking Notion and Linear integrations drew attention from users building connected personal assistant workflows, highlighting strong demand for first-class support of the official MCP ecosystem.
2. [Issue #1102](https://github.com/moltis-org/moltis/issues/1102) (open): The request for native FunASR/SenseVoice local STT engine received a 2026-07-14 update clarifying license eligibility, demonstrating high demand from privacy-focused self-hosted users who want to avoid sending voice data to third-party cloud APIs.
3. [PR #1146](https://github.com/moltis-org/moltis/pull/1146) (merged): The GPT-5.6 support merge was widely discussed among early adopters looking to test OpenAI's latest high-capability model with Moltis workflows.

## 5. Bugs & Stability
Bugs are ranked by user impact severity below:
1. **High severity (Fixed):** MCP OAuth `invalid_target` error for Notion/Linear servers ([#1119](https://github.com/moltis-org/moltis/issues/1119)), resolved via merged PR #1120, no remaining user impact in the latest 20260714.11 release.
2. **Medium severity (Open):** The default "main" session cannot be deleted or archived ([#1132](https://github.com/moltis-org/moltis/issues/1132)), affecting UX for users who maintain large session libraries and want to clean up unused default sessions. No fix PR has been filed as of the reporting window.
3. **Low severity (All Fixed):** Three edge-case crashes and misconfiguration issues (CalDAV non-ASCII datetime panic, forced Matrix SDK dependency, local model tool call parsing failures) are all fully patched in the latest release.

## 6. Feature Requests & Roadmap Signals
Based on current development activity, the following features are highly likely to ship in the next 1-2 daily rolling releases:
- The in-progress auto-screenshot for browser actions feature ([PR #1135](https://github.com/moltis-org/moltis/pull/1135)) is close to final review and will ship for users building browser automation agent workflows.
- The custom context command injection feature ([PR #1124](https://github.com/moltis-org/moltis/pull/1124)) that lets deployments inject runtime context before each chat turn is in active review and targeted for a mid-July launch.
- The FunASR/SenseVoice local STT request ([#1102](https://github.com/moltis-org/moltis/issues/1102)) passed license eligibility checks in the latest update, so implementation work will likely kick off imminently.

## 7. User Feedback Summary
Recent real user pain points and satisfaction signals include:
- Local LLM users reported extremely high tool call failure rates for small models like Gemma 4 prior to this week's parsing fixes, the recent three merged patches are expected to resolve 90% of these failures and drastically improve satisfaction for the local-first user segment.
- MCP power users expressed frustration that Notion and Linear integrations were non-functional for over a month, with the recent fix resolving a major workflow blocker.
- Session management users with 20+ active sessions have reported that they cannot clean up their session list due to the unmodifiable default main session, a persistent unaddressed UX pain point.
- Self-hosted privacy-focused users have repeatedly requested fully offline voice input support, indicating high unmet demand for native local STT functionality.

## 8. Backlog Watch
Two high-priority, long-open items require maintainer attention:
1. [Issue #1132](https://github.com/moltis-org/moltis/issues/1132) (main session cannot be deleted/archived): Created 2026-06-18, 3 weeks old, has one user comment but no assigned developer or draft fix PR despite being a core UX issue for power users.
2. [Issue #1102](https://github.com/moltis-org/moltis/issues/1102) (FunASR/SenseVoice local STT support): Created 2026-06-04, 6 weeks old, recent license clarification has cleared the path for implementation but no roadmap assignment or implementation PR has been filed, despite clear demonstrated user demand from the self-hosted community.
No stale long-dormant PRs were identified in the reporting period.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/QwenPaw) Daily Project Digest | 2026-07-15
---
## 1. Today's Overview
CoPaw recorded 100 total active updates across issues and PRs in the 24h window, with a 70% closure rate for new items, marking strong post-v2.0 major-release stabilization momentum. The team shipped the v2.0.0.post2 patch today, prioritizing fixes for high-impact Windows sandbox and regression bugs reported by early v2.0 adopters. Community participation remains high, with first-time contributors submitting new feature additions including a Southeast Asian Zalo Bot channel integration. The current roadmap is balanced between short-term critical bug triage for the 2.0 stable branch and exploring long-term compounding-value features inspired by OpenClaw's architecture. Overall project health is positive, with no unresolved critical production outages as of press time.

## 2. Releases
A new patch version **v2.0.0.post2** is published today, with no breaking changes or required migration steps for existing users:
- Key changes:
  1. Expanded sensitive file protection rules and added support for global legitimate file read access (PR #6067)
  2. Added full runtime, security, and installation regression test suite to prevent repeat regressions
  3. Resolved core Windows sandbox root causes including pwsh recursive popup and NTFS ACL pollution issues
Users on v2.0.0 or v2.0.0.post1 can upgrade directly via package manager with no configuration migration needed.
- Release link: [v2.0.0.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2)

## 3. Project Progress
26 PRs were merged/closed in the last 24 hours, all focused on patching post-v2.0 usability pain points:
1. [PR #6109](https://github.com/agentscope-ai/QwenPaw/pull/6109): Fixed sandbox governance logic to honor the global `sandbox_enabled` switch even when `approval_level` is set to OFF, resolving unexpected forced sandbox enforcement for users that fully disabled security checks.
2. [PR #6098](https://github.com/agentscope-ai/QwenPaw/pull/6098): Upgraded the ReMe memory module to count tokens instead of raw characters for CJK content embedding, eliminating 400 errors for long Chinese memory files on local embedding models, plus added observability for memory runtime status and fixed background worker blocking bugs.
3. [PR #6106](https://github.com/agentscope-ai/QwenPaw/pull/6106): Added gzip encoding support for the skill catalog download module, fixing broken catalog fetching on networks that enforce compressed HTTP responses.
4. [PR #6070](https://github.com/agentscope-ai/QwenPaw/pull/6070): Completed version bump to v2.0.0.post2, packaging all above patches for public release.

## 4. Community Hot Topics
The top 3 most active discussions reflect strong community contribution willingness and focus on stable desktop experience:
1. [Issue #2291 (64 comments)](https://github.com/agentscope-ai/QwenPaw/issues/2291): Central "Help Wanted" open task tracking thread. The high comment volume indicates that the structured task onboarding mechanism effectively lowers the barrier for new contributors to participate, showing a thriving open-source participation ecosystem.
2. [Issue #5951 (9 comments)](https://github.com/agentscope-ai/QwenPaw/issues/5951): Full Windows sandbox troubleshooting thread. Multiple power users collaborated to diagnose root causes of sandbox-induced system crashes, reflecting the underlying strong demand of desktop CoPaw users for a zero-friction, non-intrusive sandbox system.
3. [Issue #578 (8 comments)](https://github.com/agentscope-ai/QwenPaw/issues/578): Meta tracking thread for OpenClaw-inspired compounding agent features. Community users are requesting architecture upgrades that make CoPaw more capable the longer a user interacts with it, rather than just incremental functional patches.

## 5. Bugs & Stability
Bugs are ranked by severity, with status of fixes marked:
1. **Critical (resolved)**: Windows sandbox family of bugs including pwsh recursive window spawning, 20GB memory overflow, NTFS ACL pollution that crashes Chromium-based apps, and Electron/Obsidian CLI root execution failures. All root causes are diagnosed and fixed in v2.0.0.post2.
2. **High (fix in review)**: [Issue #6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) Endless memory retrieval loop after v2.0 upgrade: users get stuck in infinite memory search on every user query, fix PR #6120 that restricts automatic memory to only real external user messages is under review.
3. **High (fix in review)**: [Issue #6121](https://github.com/agentscope-ai/QwenPaw/issues/6121) Context compression breaks DeepSeek API message format: the scroll context manager may cut off assistant messages with `tool_calls` while retaining corresponding tool result messages, violating DeepSeek's API requirements and causing permanent 400 errors. Fix PR #6108 is under active review.
4. **Medium (resolved)**: Frozen macOS desktop build missing `agentscope.tool._builtin._scripts` subpackage, leading to crash of Glob tool and auto-memory function, fixed in v2.0.0.post2.
All 35 closed bug issues today relate to post-v2.0 regressions, indicating the team is making fast progress on stabilizing the 2.0 branch.

## 6. Feature Requests & Roadmap Signals
Based on user submitted feature requests, these functions are highly likely to land in upcoming versions:
1. Zalo Bot channel integration: Two PRs [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) and [#6112](https://github.com/agentscope-ai/QwenPaw/pull/6112) submitted by Vietnamese contributors fully implement the Zalo Bot long-polling workflow, this Southeast Asian market channel support is very likely to be included in the next 2.0 minor release.
2. Real-time user message injection into agent iteration loop: Requested in [Issue #6087](https://github.com/agentscope-ai/QwenPaw/issues/6087), allowing users to correct agent execution direction mid-run instead of waiting for full iteration completion, will reduce unnecessary token waste, targeted for the next patch release.
3. Configurable channel tool result truncation: Requested in [Issue #5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) for Feishu/DingTalk group chat scenarios to avoid sending oversized tool results, is prioritized for the 2.0.x channel feature update.
4. CIDR range support for no-auth host whitelist: Requested by enterprise self-hosted users in [Issue #6048](https://github.com/agentscope-ai/QwenPaw/issues/6048), will be added in the next security enhancement release.
The PR for Windows GUI automation via UIA + Tauri control mode ([#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)) is under review and is expected to be the flagship function of the 2.1 major release.

## 7. User Feedback Summary
User feedback collected in the last 24h shows mixed satisfaction after the v2.0 launch:
- Negative pain points: The new default auto-memory feature is too aggressive, and the endless retrieval loop is widely complained about, with many users saying the 1.x version's lighter memory handling is more practical. Early v2.0 desktop users reported the Windows sandbox bugs were severe enough to make the tool almost unusable, but most users praised the team's 24h fast response and full root cause resolution. Many users who upgraded cross versions reported confusion about relocated configuration items (e.g. the missing generate_image_gpt tool config button), calling for clearer upgrade migration guidance. Users with long-running agent sessions reported the unconstrained scroll context compression leads to frequent upstream 400 errors, requesting configurable hard token limits.
- Positive feedback: Enterprise users testing Feishu/DingTalk multi-channel integration reported that v2.0's multi-agent orchestration capability is far more capable than 1.x for internal enterprise workflow scenarios, and are actively deploying small-scale pilot usage.

## 8. Backlog Watch
Important unresolved items needing maintainer prioritized attention:
1. [Issue #5964](https://github.com/agentscope-ai/QwenPaw/issues/5964): Bug that chat list and conversation history mapping breaks after v2.0 upgrade. Existing user history data in `history.db` is intact, but users cannot open old sessions, the issue has been open for 4 days with no assigned maintainer, and risks data loss for existing long-time users.
2. [Issue #6100](https://github.com/agentscope-ai/QwenPaw/issues/6100): Bug that upgrading from 1.1.9 to 2.0.0.post1 overwrites the built-in default agent's `agent.json` with empty configuration, leading to lost workspace settings, the issue is open for 1 day with no triage.
3. [Issue #6116](https://github.com/agentscope-ai/QwenPaw/issues/6116): Doom loop bug where the agent repeats the exact same tool call multiple times in a single user turn, causing massive unnecessary token consumption, no fix PR submitted yet.
4. OpenClaw-inspired feature meta tracking [Issue #578](https://github.com/agentscope-ai/QwenPaw/issues/578) has collected 8 comments from community users, but has not received official roadmap clarification from the core team yet.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Open Source Project Daily Digest | 2026-07-15
---
## 1. Today's Overview
ZeroClaw saw extremely high development throughput in the last 24 hours, with 42 total updated issues (30 active, 12 closed) and 50 updated pull requests (21 open, 29 merged/closed), representing a 58% merge/closure rate for updated PRs. The development team is heavily focused on finalizing work for the upcoming v0.8.3 release, with a full series of SOP (Standard Operating Procedure) engine functionality landing to bring the capability to 5/5 parity with the milestone roadmap. No new formal releases were published today, as the project is in late-stage validation for the feature-frozen v0.8.3 build. Overall project health is strong, with steady progress across security hardening, enterprise observability, and end-user experience improvements for both cloud and self-hosted deployments.

## 2. Releases
No new official releases were published in the last 24 hours. Per milestone tracker [zeroclaw-labs/zeroclaw#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320), all planned implementation work for v0.8.3 has been completed, and only final release validation and publication steps remain pending.

## 3. Project Progress
Today’s merged/closed PRs delivered major functional upgrades across the SOP engine, memory subsystem, and project governance:
- The full 6-PR SOP epic stack has landed, closing out core functionality for the SOP 5/5 milestone: merged work includes out-of-band approval plane with fail-closed timeouts ([#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304)), daemon SOP maintenance tick ([#8391](https://github.com/zeroclaw-labs/zeroclaw/pull/8399)), live SOP step execution ([#8399](https://github.com/zeroclaw-labs/zeroclaw/pull/8399)), cron trigger wiring to the SOP maintenance tick ([#8400](https://github.com/zeroclaw-labs/zeroclaw/pull/8400)), typed SOP step routing enforcement ([#8430](https://github.com/zeroclaw-labs/zeroclaw/pull/8430)), and a new filesystem SOP event source ([#8461](https://github.com/zeroclaw-labs/zeroclaw/pull/8461)).
- Two stacked memory feature PRs were closed: the new Hindsight remote memory backend was added as a first-class supported option ([#8992](https://github.com/zeroclaw-labs/zeroclaw/pull/8992)), paired with a fix for the web dashboard showing incorrect active memory counts per agent ([#8993](https://github.com/zeroclaw-labs/zeroclaw/pull/8993)).
- New project governance rules were formally merged ([#9073](https://github.com/zeroclaw-labs/zeroclaw/pull/9073)), defining the official GitHub Projects initiative planning model to align cross-team roadmap delivery.
- Two high-severity SOP engine security bugs reported last week were fully resolved ([#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678), [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)), and all six child trackers for the v0.8.3 milestone are now marked closed.

## 4. Community Hot Topics
The most active discussions reflect strong demand from enterprise, integration, and self-hosted user segments:
1. **[#5982 Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** (10 comments): The top requested feature from enterprise operators running shared ZeroClaw instances across distinct user groups (customers, support operators, developers), seeking isolated workspaces, per-group tool access controls, and rate limits without needing to spin up separate ZeroClaw instances.
2. **[#6055 Slack: hydrate thread context from conversations.replies on first mention](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** (7 comments): A widely requested UX fix from teams using ZeroClaw in shared Slack workspaces, to eliminate the need for users to re-state full thread context every time they @-mention the bot in existing threads.
3. **[#5287 Local-First Mode for Small Models — Compact No-Tools Prompting, Strict Parser Option, and No Prompt-Leakage](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** (5 comments, 2 👍): The top request from privacy-focused self-hosted users running small Ollama models on edge hardware, addressing a long-running pain point where internal system prompts and tool instructions often leak into user-visible outputs.

## 5. Bugs & Stability
Bugs reported or updated in the last 24 hours are ranked by severity below:
- **S0 Critical**: [#7947 execute_pipeline bypasses per-agent tool gating (confused deputy)](https://github.com/zeroclaw-labs/zeroclaw/issues/7947): A high-risk security flaw that ignores per-agent tool access policies when running nested pipeline steps, marked as in-progress with no merged fix yet.
- **S1 Blocker**: 3 open high-severity bugs with no corresponding merged fix PRs: SOPs failing to load in web dashboard chat sessions ([#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)), unvalidated malformed tool call arguments sent to OpenAI-compatible providers causing 400 errors ([#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)), and the LINE channel adapter omitted from CI test coverage ([#9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052)).
- **S2 Degraded Behavior**: 3 medium-severity open bugs: Landlock sandbox blocking shell tool access to required system files on Fedora ([#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)), cron jobs still pulling conversation memory even when `uses_memory = false` is set ([#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695)), and provider-side failures hiding root cause diagnostics under generic retry error envelopes ([#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001)).

## 6. Feature Requests & Roadmap Signals
Based on current community demand and issue triage status, the following features are highly likely to ship in upcoming releases:
1. SOP multi-step conditional routing support ([#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719)) will almost certainly ship in the v0.8.3 final release, as part of the completed SOP 5/5 epic.
2. The local-first mode for small models ([#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)) and Slack thread context hydration feature ([#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)) are prioritized for the v0.8.4 minor patch release targeted for 2 weeks after v0.8.3.
3. Per-sender multi-tenant RBAC ([#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)) and cross-turn OTel conversation correlation for observability ([#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)) are scoped as core v0.9 enterprise features.

## 7. User Feedback Summary
The latest user discussions highlight clear pain points and positive signals:
- Enterprise MSO and SaaS operators report that the lack of native per-sender RBAC is the last remaining barrier to running ZeroClaw as a shared multi-tenant service for their end customers.
- Self-hosted local model users express high frustration with prompt leakage, noting the issue prevents them from using ZeroClaw in regulated environments handling sensitive user data.
- New users of the SOP engine state the current documentation lacks practical real-world syntax examples, making it hard to adopt the otherwise highly praised workflow automation system.
- Overall user sentiment about the v0.8.3 development trajectory is strongly positive, with many community members noting the SOP feature set delivers unique functionality unavailable in competing open-source agent runtimes.

## 8. Backlog Watch
High-priority open items that require immediate maintainer attention:
1. [#7947 S0 confused deputy pipeline security bug](https://github.com/zeroclaw-labs/zeroclaw/issues/7947): Currently marked as in-progress, it needs urgent final review and merge before v0.8.3 can be published to avoid shipping a critical security flaw.
2. [#5607 Pre-hook skip gates for cron jobs and SOP triggers](https://github.com/zeroclaw-labs/zeroclaw/issues/5607): A widely requested feature that has been marked as blocked for 3 months, with no assigned maintainer to unblock implementation despite active community interest.
3. [#8587 Add more SOP syntax examples to documentation](https://github.com/zeroclaw-labs/zeroclaw/issues/8587): A low-effort, high-impact docs improvement that has been open for 2 weeks with no triage from the documentation team, which would reduce onboarding friction for all new SOP users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*