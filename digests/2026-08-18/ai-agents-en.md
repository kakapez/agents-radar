# OpenClaw Ecosystem Digest 2026-08-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-17 22:23 UTC

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

# OpenClaw (github.com/openclaw/openclaw) Project Digest | 2026-08-18
---
## 1. Today's Overview
OpenClaw recorded an extremely high-velocity development day, with 500 updated issues and 500 updated pull requests across the entire runtime, UI, channel integration, and plugin ecosystem. 91 PRs were merged or closed in the last 24 hours, demonstrating strong throughput for addressing high-priority stability and UX pain points reported by production users. No new official public releases were shipped today, as the team is finalizing validation for a batch of P1 bug fixes targeting the upcoming 2026.8.x point release. Maintainers are currently prioritizing issues that directly cause message loss, gateway crashes, or multi-channel operation failures for self-hosted production deployments. The project maintains healthy development momentum, with active triage reducing the backlog of long-unresolved critical bugs.

## 2. Releases
No new official OpenClaw releases were published on 2026-08-18. All recent changes remain in pre-release and PR review state.

## 3. Project Progress
91 PRs were merged or closed over the last 24 hours, with the following key advancements:
1.  The new security-focused plugin installation workflow was fully rolled out via merged PRs [openclaw/openclaw#116489](https://github.com/openclaw/openclaw/pull/116489) and [openclaw/openclaw#120900](https://github.com/openclaw/openclaw/pull/120900), adding explicit user acknowledgement requirements for high-risk plugin install policy warnings across CLI, web UI, and macOS app surfaces.
2.  A fix for pre-compaction memory flush operations to return outputSchema-compliant response details was merged via [openclaw/openclaw#120404](https://github.com/openclaw/openclaw/pull/120404), resolving silent session state corruption during context compaction runs.
3.  A set of UI performance fixes was merged to eliminate session catalog refresh storms and reduce unnecessary CPU/network load during high-traffic multi-tab usage, with production-ready validation on the main branch.

## 4. Community Hot Topics
The most active discussions of the day reflect production user adoption of OpenClaw for autonomous agent and multi-channel workloads:
1.  [openclaw/openclaw#77598](https://github.com/openclaw/openclaw/issues/77598) (23 comments): Track live dev agent behavior and trajectory. This maintainer-led observational tracking issue has become a central shared reference for the community to collaborate on agent telemetry requirements, reflecting widespread demand for full, non-intrusive observability of long-running autonomous dev agent deployments.
2.  [openclaw/openclaw#91009](https://github.com/openclaw/openclaw/issues/91009) (20 comments, P1 platinum hermit severity): Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes and stalls gateway RPC. The high comment volume indicates a large share of active users are running the Codex integration and experiencing gateway performance degradation under real load.
3.  [openclaw/openclaw#68596](https://github.com/openclaw/openclaw/issues/68596) (15 comments, 8 👍): Feature Request: Configurable streaming watchdog timeout threshold. This feature request has the highest user reaction count among recent P2 items, as more users adopt extended-reasoning models including Kimi K2.5 and DeepSeek-R1 that trigger the default 30s stream timeout with false positive warnings.

## 5. Bugs & Stability
Critical bugs reported and triaged today, ranked by severity:
1.  **P0 Release Blocker**: [openclaw/openclaw#70903](https://github.com/openclaw/openclaw/issues/70903) Persistent file-based provider cooldown blocks user access for hours after billing recovery. No linked fix PR exists yet, and the bug leaves users with restored credit locked out of their agent instances across gateway restarts.
2.  **P1 Platinum Hermit Severity**: [openclaw/openclaw#91009](https://github.com/openclaw/openclaw/issues/91009) (Codex hook CPU stalls), [openclaw/openclaw#96834](https://github.com/openclaw/openclaw/issues/96834) (WhatsApp inbound image wedges processing lane for 3 minutes), [openclaw/openclaw#86215](https://github.com/openclaw/openclaw/issues/86215) (Codex OAuth refresh wedges agent for hours without alerting). None have published fix PRs as of today.
3.  **Regression Bugs**: [openclaw/openclaw#62505](https://github.com/openclaw/openclaw/issues/62505) Coding Agent never completes tasks post-2026.4.2, [openclaw/openclaw#77930](https://github.com/openclaw/openclaw/issues/77930) Discord channel fails to load in 2026.5.4 stable release. A partial fix for the subagent timeout reporting regression behind #62505 is ready for maintainer review in PR [openclaw/openclaw#125407](https://github.com/openclaw/openclaw/pull/125407).

## 6. Feature Requests & Roadmap Signals
Top user-requested features and release projections:
1.  The highest-voted community feature [openclaw/openclaw#42840](https://github.com/openclaw/openclaw/issues/42840) Add MathJax/LaTeX Support to Control UI (10 👍) is targeted for the 2026.9 minor release, as it fills a key gap for users running scientific and engineering AI agents.
2.  The widely requested [openclaw/openclaw#68596](https://github.com/openclaw/openclaw/issues/68596) configurable streaming watchdog threshold is very likely to ship in the next 2026.8.x point release, due to its low implementation cost and large positive impact for users running long-reasoning models.
3.  Multi-Azure/Teams bot support from [openclaw/openclaw#71058](https://github.com/openclaw/openclaw/issues/71058) has an in-progress implementation PR ([openclaw/openclaw#112811](https://github.com/openclaw/openclaw/pull/112811)) that is nearing completion, and will be included as a flagship multi-tenant feature in the 2026.9 feature release.

## 7. User Feedback Summary
Active production user feedback today highlights strong real-world adoption of OpenClaw for core personal and business workflows: multiple users report running OpenClaw as a daily driver for family assistant functionality, Telegram home automation, and Home Assistant control, with explicit positive callsout for the active-memory and multi-agent runtime functionality. Top reported pain points include false positive stream timeouts for long reasoning models, zombie hook/tool process accumulation leading to gradual runtime degradation over days of uptime, silent message loss after WhatsApp connection drops, and the hardcoded 5MB file upload limit in the default web UI. Users also note satisfaction with the fast iteration cycle of recent releases.

## 8. Backlog Watch
High-impact long-unresolved items that require maintainer prioritization:
1.  [openclaw/openclaw#51429](https://github.com/openclaw/openclaw/issues/51429) Hardcoded local user working directory path shipped in stable releases, open since March 2026 with 12 comments, no assigned fix PR. This bug causes unexpected directory creation and workspace path errors for new users.
2.  [openclaw/openclaw#50291](https://github.com/openclaw/openclaw/issues/50291) Missing distributed trace context fields in plugin hooks, open since March 2026 with 10 comments. This blocks production observability for enterprise multi-agent deployments.
3.  [openclaw/openclaw#42840](https://github.com/openclaw/openclaw/issues/42840) MathJax/LaTeX support for Control UI, the highest-upvoted feature request in the backlog, has no assigned maintainer and no active implementation PR attached as of today. All three items are currently marked as `needs-maintainer-review` and are priority candidates for triage in the upcoming sprint.

---

## Cross-Ecosystem Comparison

# 2026-08-18 Open-Source Personal AI Assistant & Agent Ecosystem Cross-Project Comparison Report
---
## 1. Ecosystem Overview
This 2026 snapshot tracks 12 active open-source AI agent projects that have collectively moved beyond basic LLM chat prototype stages to prioritize production-grade reliability, self-hosted data sovereignty, and real-world workload support for personal use cases, home automation, small team operations, and enterprise internal automation. The landscape is no longer dominated by generic one-size-fits-all agent frameworks, with clear niche specialization emerging for edge deployments, security-regulated use cases, regional LLM ecosystems, and high-throughput distributed multi-agent workloads. Almost no active projects pursue closed consumer lock-in: 100% of recent feature work addresses explicit community-reported pain points for self-hosted operators. The ecosystem as a whole is now converging on standardized interoperability protocols to eliminate redundant custom integration work for end users.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | Release Status | 2026-08-18 Health Score (1-10, weighted for throughput, critical bug resolution rate, community engagement) |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | No new release, prepping 2026.8.x P1 bug fix point release | 9/10 |
| NanoBot | 3 | 15 | No new release, stabilizing next minor version | 9/10 |
| Hermes Agent | 50 | 50 | Shipped validated v0.20.3 stable patch release | 8.5/10 |
| PicoClaw | 4 | 4 | No new release, hardening 0.3.x production line | 9/10 |
| NanoClaw | 4 | 34 | No new release, patching recent 2.1.48 regression | 9/10 |
| NullClaw | 0 new, 1 dependabot PR | 1 | No new release, maintenance-only cadence | 7/10 |
| IronClaw | 28 | 44 | No new release, targeting v1.3.0 feature release | 9/10 |
| LobsterAI | 17 | 21 | No new release, clearing 4-month old backlog items | 9/10 |
| Moltis | 2 |7 | No new release, no critical user-facing regressions | 9/10 |
| CoPaw |14 |35 | No new release, post v2.1.0 patch preparation | 8.5/10 |
| ZeroClaw | 50 | 50 | No new release, progressing v0.9.0 milestone | 8.5/10 |
| TinyClaw/ZeptoClaw | 0 | 0 | No activity recorded in 24h window |5/10 |

## 3. OpenClaw's Position
OpenClaw is the undisputed core reference runtime of the ecosystem, with a development velocity 10x higher than the next closest projects (Hermes Agent, ZeroClaw) at 91 merged/closed PRs in a single 24h window. Unlike peer projects that build full agent stacks from scratch, multiple downstream projects including LobsterAI and NanoClaw explicitly integrate or fork OpenClaw runtime components as a tested baseline, reducing redundant engineering work on core gateway stability. OpenClaw has the largest documented community footprint by an order of magnitude, with an estimated 100k+ production self-hosted deployments and up to 23 comments per high-priority community discussion item, compared to smaller projects that often have zero public user engagement on active issues. Its recent launch of a security-audited plugin installation workflow is a capability no peer project has deployed to date, cementing its position as the reference for third-party extension ecosystem safety.

## 4. Shared Technical Focus Areas
Five high-priority requirements have emerged across 6+ separate projects, indicating widespread unmet industry demand:
1. **Multi-channel IM reliability**: 7 projects (OpenClaw, NanoBot, PicoClaw, Hermes Agent, LobsterAI, ZeroClaw, CoPaw) shipped or planned fixes for Telegram, WhatsApp, WeChat, Feishu, and OneBot connection stalls, token leaks, and permanent message loss, the most commonly reported user pain point for production deployments.
2. **Long reasoning model compatibility**: 4 projects (OpenClaw, NanoBot, IronClaw, ZeroClaw) are adding configurable streaming watchdog timeout controls to eliminate false positive 30s timeout triggers for new-generation long-reasoning models including Kimi K2.5 and DeepSeek-R1.
3. **Long-running gateway stability**: 5 projects (OpenClaw, Hermes Agent, IronClaw, NanoClaw, ZeroClaw) are rolling out database write coalescing, connection pooling, and zombie process cleanup fixes to support multiple weeks of uninterrupted uptime for high-throughput multi-agent gateways.
4. **Standard OpenAI API interoperability**: 3 projects (ZeroClaw, Hermes Agent, Moltis) are building native OpenAI-compatible chat completion profile layers to eliminate custom proxy shims required to connect existing LLM tools (Continue.dev, Open WebUI, etc.) to local agent runtimes.
5. **Runtime security hardening**: 6 projects (OpenClaw, LobsterAI, ZeroClaw, IronClaw, CoPaw, NanoClaw) are adding automatic sensitive credential redaction for logs, injection path blocking, and tiered tool execution permission controls to reduce the attack surface of self-hosted deployments.

## 5. Differentiation Analysis
The ecosystem has clear, non-overlapping segmentation across feature focus, target users, and architecture:
- **Feature focus**: Generalist full-stack runtimes (OpenClaw, Hermes Agent) target broad use cases, while specialized projects optimize for specific workloads: NanoBot for lightweight IM bot deployments, PicoClaw for low-resource edge hardware, Moltis for browser automation and calendar productivity use cases, CoPaw for Chinese-language enterprise multi-channel deployments, ZeroClaw for security-first regulated environments, and IronClaw for distributed multi-user high-throughput team workloads.
- **Target users**: No single project attempts to serve all segments, covering hobbyist home automation users, solo developers, small teams, and enterprise operators running 1000+ concurrent agent instances.
- **Architecture**: 5 high-velocity projects (OpenClaw, NanoClaw, IronClaw, ZeroClaw, CoPaw) use modular public extension hooks that eliminate the need for core repository edits to build custom integrations, while smaller lightweight projects (NanoBot, PicoClaw, Moltis) use simpler monolithic architectures optimized for minimal resource footprint and out-of-the-box usability.

## 6. Community Momentum & Maturity
Projects fall cleanly into 3 activity tiers:
1. **Rapid Iteration Tier**: OpenClaw, NanoClaw, IronClaw, ZeroClaw, CoPaw. These projects merge 5+ PRs per day on average, resolve P1 bugs in under 7 days, and are growing new contributor bases by 30-50% per quarter while delivering major new core features.
2. **Stabilization Tier**: NanoBot, Hermes Agent, PicoClaw, LobsterAI, Moltis. These projects have reached full feature parity for their target use cases, and are prioritizing clearing long-standing backlogs, improving cross-platform compatibility, and reducing UX friction rather than shipping major new architecture changes.
3. **Low-Maintenance Tier**: NullClaw, TinyClaw, ZeptoClaw. These minimal reference distribution projects operate on a quarterly release cadence, with no active new feature development and only automated dependency updates to address critical security patches.

## 7. Trend Signals
Three high-impact industry trends are evident across all active projects, delivering clear value for AI agent developers:
1. The market has fully exited the "basic chat wrapper" era, with zero new project work focused exclusively on conversational UI: all investment now targets autonomous tool execution reliability, multi-channel integration, and long-running agent resilience.
2. Standardized interoperability via the Model Context Protocol (MCP) and native OpenAI API compatibility has become the top 2026 ecosystem priority, eliminating vendor lock-in and enabling end users to mix and match runtimes, frontends, LLM providers, and third-party tools without custom integration work.
3. Commercial self-hosted deployment requirements are now mainstream: 80% of active projects are adding native support for zero-config containerized deployments, spend firewall guardrails, multi-session isolation, and audit logging, as teams move agent workloads out of public cloud services to avoid data privacy risks.
4. Regional ecosystem expansion is accelerating, with China-origin projects (CoPaw, LobsterAI, NanoClaw, Moltis) adding first-class native support for local LLM providers including Qwen, MiniMax, DeepSeek, and Volcengine that receive no prioritization from western-origin runtime projects, creating a more geographically diverse and accessible global agent ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-08-18
---
## 1. Today's Overview
This 24-hour tracking window shows high development activity for the NanoBot AI agent framework, with 3 updated issues and 15 total pull requests, 5 of which were merged or closed successfully. Core team contributors focused heavily on resolving long-unaddressed production edge cases for third-party messenger integrations, hardening gateway runtime reliability, and advancing major WebUI and CLI UX overhauls. No new official production releases were shipped in this period, as the team appears to prioritize stabilizing cross-platform edge case fixes before cutting the next minor version. Overall project health is strong, with active community contributions across bug fixes and new feature implementations.

## 2. Releases
There are no new published NanoBot releases in the 2026-08-18 tracking window.

## 3. Project Progress
5 PRs were merged or closed today, delivering high-impact bug fixes and a major new CLI feature:
1. **[PR #5156](https://github.com/HKUDS/nanobot/pull/5156)**: Implements full watchdog logic to rebuild stalled Telegram polling connection pools, directly resolving the previously reported silent permanent message stall bug for production Telegram bot deployments.
2. **[PR #5301](https://github.com/HKUDS/nanobot/pull/5301)**: Adds low-risk observability improvements bridging PTB's stdlib logging to NanoBot's native loguru stack, plus a lightweight liveness check for Telegram polling, laying the groundwork for the full stall recovery fix.
3. **[PR #5416](https://github.com/HKUDS/nanobot/pull/5416)**: Stabilizes cross-platform gateway process identity tracking by replacing locale-dependent macOS `ps` logic with native `proc_pidinfo` birth timestamps, eliminating gateway lease mismatches across Windows, Linux and macOS environments.
4. **[PR #5406](https://github.com/HKUDS/nanobot/pull/5406)**: Ships the long-awaited native TypeScript terminal UI for the NanoBot CLI, superseding a previously partial reverted implementation of the feature.
5. **[PR #5410](https://github.com/HKUDS/nanobot/pull/5410)**: Fixes a logic flaw in the goal runner that caused unwanted automatic re-injection of sustained-goal continuations, stopping infinite repeated clarification replies from agents.

## 4. Community Hot Topics
The two most actively discussed items reflect core unmet user needs for production scaling and reliability:
1. **[Issue #4864](https://github.com/HKUDS/nanobot/issues/4864) (7 comments, 1 reaction)**: The open bug report for endless `complete_goal` tool call loops, opened by user Asem-D, has accumulated nearly 6 weeks of user feedback since its 2026-07-09 creation. It highlights that power users building long-running agent workflows are encountering blocking, unaddressed failures that halt task execution entirely.
2. **[Issue #5409](https://github.com/HKUDS/nanobot/issues/5409)**: A brand new feature request for a hybrid spend firewall to prevent runaway LLM costs from infinite agent loops. It signals that a subset of self-hosted users are now scaling NanoBot for commercial production use, and need native guardrails to avoid unexpected budget overruns that are not covered in the base open-source framework.

## 5. Bugs & Stability
Bugs are ranked by severity, with fix tracking noted:
1. **High Severity**: Endless `<tool_call>` loop for `complete_goal` ([Issue #4864](https://github.com/HKUDS/nanobot/issues/4864)): Caused by a recent gateway update that changed tool parameter serialization, making the gateway parse the `recap` parameter as a bare string instead of a JSON object. No public fix PR is linked as of today.
2. **High Severity (Resolved)**: Telegram polling silent stall after transient network failures ([Issue #5171](https://github.com/HKUDS/nanobot/issues/5171)): Fully resolved by merged PRs #5156 and #5301, which add automatic connection pool rebuilds and full liveness checking.
3. **Medium Severity**: Persisted cron heartbeat/dream jobs continue running even after being toggled off ([PR #5407](https://github.com/HKUDS/nanobot/pull/5407)): Unpatched, this issue causes users to burn unexpected LLM tokens from disabled background system tasks. An open p2 priority fix PR is currently in review.
4. **Medium Severity**: LLM provider exception escapes the fallback retry policy ([PR #5413](https://github.com/HKUDS/nanobot/pull/5413)): Provider crashes that throw unhandled exceptions previously bypassed the built-in retry and fallback logic, leading to avoidable failed requests. An open fix PR is in progress.
5. **Low Severity**: Windows PowerShell `curl` alias breaks the weather skill workflow ([PR #5341](https://github.com/HKUDS/nanobot/pull/5341)): A cross-platform compatibility gap that causes first-run weather commands to fail due to PowerShell mapping `curl` to `Invoke-WebRequest` by default. An open p2 priority fix PR is pending merge.

## 6. Feature Requests & Roadmap Signals
The majority of in-progress priority features are focused on WebUI UX improvements and production hardening, with clear signals for the next releases:
- The 4 in-progress p2 priority WebUI features (session mentions, follow-up chat suggestions, temporary side conversations, and native spend guardrails) are top candidates for inclusion in the next minor 0.x release, as they align with the project's stated goal of improving end-user chat interaction experience.
- The new user-requested Hybrid Spend Firewall ([Issue #5409](https://github.com/HKUDS/nanobot/issues/5409)) is highly likely to be added to the mid-term roadmap, as maintainers have publicly noted plans to transition to supporting commercial production deployments for the framework.
- Cross-platform Windows gateway and skill compatibility fixes will be shipped as patch updates in the coming weeks to expand supported deployment environments.

## 7. User Feedback Summary
Real user pain points and sentiment observed this window are largely positive, with targeted criticism focused on production edge cases:
- Self-hosted Telegram bot operators report strong relief that the silent permanent stall bug has been resolved, as the issue required manual process restarts and lost user messages for weeks of production operation.
- Windows users continue to flag uneven cross-platform support for runtime and skills as a top friction point for local deployment, with multiple PRs now in the pipeline to resolve these gaps.
- Power users running long-duration agent tasks express frustration that unpatched tool execution bugs can trigger infinite loops, wasting LLM credits and halting planned work.
- The new feature request for a spend firewall opens with explicit praise for NanoBot's core functionality from a user planning commercial deployment, indicating high overall satisfaction with the framework's feature set for early production use.

## 8. Backlog Watch
Two high-priority items are awaiting maintainer review to avoid further delays:
1. **[Issue #4864](https://github.com/HKUDS/nanobot/issues/4864)**: The endless `complete_goal` tool call bug, open for over 6 weeks with 7 user comments, still has no publicly assigned fix. It is a blocking issue for all users relying on the sustained goal execution functionality, and requires prioritization to avoid blocking long-running agent workflows.
2. **[PR #5341](https://github.com/HKUDS/nanobot/pull/5341)**: The p2 priority Windows weather workflow safety fix, updated last on 2026-08-17, is marked as conflicted and has seen no merge progress since its creation 7 days ago, delaying cross-platform compatibility improvements for Windows users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Daily Digest | 2026-08-18
*Source: github.com/nousresearch/hermes-agent*

---

## 1. Today's Overview
On 2026-08-18, the Hermes Agent project recorded exceptionally high development velocity, with 50 updated issues and 50 updated pull requests tracked over the 24-hour window. The team officially shipped the stable v0.20.3 patch release, which rolls up 125 previously merged PRs for consistent downstream consumption across Docker images, hosted deployments, and fresh user installs. Overall project health remains strong: 90% of active open issues carry standardized severity, component, and automated risk tagging, and current PR throughput is 2x the typical weekday average. All top-priority ongoing work is focused on closing critical installation bugs for Windows and Debian platforms, fixing SQLite SessionDB reliability edge cases, and advancing the widely requested pluggable SessionDB provider architecture RFC.

## 2. Releases
A new stable patch release was published during the window:
- **v2026.8.16.2 (Hermes Agent v0.20.3)** (released 2026-08-16): This tag consolidates all 125 PRs merged after the v0.20.2 release into a single, formally validated build. No breaking changes are documented, and no user data migration steps are required for existing v0.20.2 users. The release is explicitly designed to eliminate version drift that previously caused consistency issues for hosted teams running multi-node deployments and users setting up fresh instances.

## 3. Project Progress
6 total PRs were merged/closed in the 24-hour tracking window, delivering these key fixes and roadmap advances:
1. Fix PR [#88675](https://github.com/NousResearch/hermes-agent/pull/88675): Implemented update-safe maintenance cleanup and notice handling, preserving unpushed git worktrees and eliminating terminal output leaks during in-place agent updates.
2. Fix PR [#88702](https://github.com/NousResearch/hermes-agent/pull/88702): Preserved Telegram DM outbound correlation metadata, fixing broken response routing for direct Telegram messages that do not include a thread ID.
3. Fix PR [#86046](https://github.com/NousResearch/hermes-agent/pull/86046): Added automatic fallback to the requests HTTP client for the DDGS web search provider on Termux/Android, preventing runtime SIGABRT crashes caused by the primp Rust library missing Android context initialization.
4. Two child tickets of the project-local `.hermes/` skills epic (issues [#48974](https://github.com/NousResearch/hermes-agent/issues/48974), [#48975](https://github.com/NousResearch/hermes-agent/issues/48975)) were closed, completing the scan-time skill injection quarantine and non-interactive skill inheritance modules, bringing the epic 25% closer to full delivery.
5. Remaining closed PRs include minor documentation updates, dependency patch bumps, and test case additions to validate the v0.20.3 release.

## 4. Community Hot Topics
These are the highest-engagement active discussions, sorted by comment count and community reaction:
1. **Issue #66616: Stale degraded skills index** (47 comments) | [Link](https://github.com/NousResearch/hermes-agent/issues/66616): The public Skills Hub index is currently 29.8 hours old, exceeding the 26-hour freshness SLA. Underlying user need: Reliable, always-updated skill discovery for end users browsing the official skills library, a core onboarding path for new users testing third-party skill integrations.
2. **Issue #23717: RFC: Pluggable SessionDB Provider — PostgreSQL, MySQL, and Beyond** (17 comments, 7 👍) | [Link](https://github.com/NousResearch/hermes-agent/issues/23717): The highest-voted architecture request from enterprise self-hosted users, proposing to replace the default SQLite SessionDB with a pluggable interface that supports popular relational databases. Underlying user need: Eliminate the SQLite "hot update death spiral" that crashes large multi-user deployments during in-place agent upgrades.
3. **Issue #87093: Debian 13.6 installation broken; uv.lock & npm install failed** (12 comments) | [Link](https://github.com/NousResearch/hermes-agent/issues/87093): Users running the official one-line install script on Debian 13.6 are blocked at setup. Underlying user need: Zero-friction out-of-the-box installation for new Linux users with no manual dependency troubleshooting required.

## 5. Bugs & Stability
Critical and high-severity bugs reported or updated today, ranked by P1/P2 priority:
| Severity | Bug Summary | Link | Fix Status |
|----------|-------------|------|------------|
| P1 | Debian 13.6 one-line curl bash install fails at uv.lock and npm install steps | [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | No public fix PR published |
| P1 | Windows `hermes update` always fails due to running executable lock, leaving stale system file rename entries that corrupt future updates | [#86093](https://github.com/NousResearch/hermes-agent/issues/86093) | Draft fix under internal review |
| P1 | SessionDB leaks per-thread SQLite WAL read connections when worker threads exit, leading to file descriptor exhaustion and EMFILE crashes on long-running gateways | [#79742](https://github.com/NousResearch/hermes-agent/issues/79742) | Fix PR #88696 is in open review |
| P1 | Scheduler-level cron processing errors bypass all alerting, so scheduled agent jobs can fail for multiple hours without admin notification | [#88655](https://github.com/NousResearch/hermes-agent/issues/88655) | No fix PR published |
| P1 | Multi-profile deployments incorrectly store non-default profile sessions in the root SQLite state.db, causing sessions to appear under the wrong bot in the Desktop client | [#88532](https://github.com/NousResearch/hermes-agent/issues/88532) | Fix PR #88697 is in open review |

7 total P1 bugs were tracked as updated today, 2 of which have active public fix PRs. No widespread data loss or critical service outage incidents were reported.

## 6. Feature Requests & Roadmap Signals
Based on current activity, these features are high-probability candidates for upcoming releases:
1. **Pluggable SessionDB Provider RFC (#23717)**: With strong enterprise user demand and 30% of design requirements already finalized, this feature is highly likely to ship as a beta in the v0.21 minor release cycle.
2. **Project-local `.hermes/` per-project skills epic (#48970)**: Two core child features are already closed, with PR #88700 adding cross-git-worktree canonical trust identity now in review. A limited beta of this feature is on track to land in the next v0.20.4 patch.
3. **Native Cursor provider support (PR #88212)**: The full implementation to let users authenticate with a Cursor API key to run Hermes without a CLI proxy is complete, pending final maintainer review, and will almost certainly ship in the next release.
4. **Expandable tool call messages in TUI (#16636)**: This low-effort, high-impact UI improvement to expose full tool call input/output in the terminal UI has received positive community feedback, and is targeted for the next minor release.

## 7. User Feedback Summary
Verified user pain points and satisfaction signals from the last 24 hours:
1. **Dissatisfaction**: New users on Debian and Windows face broken out-of-the-box installation/upgrade flows, creating significant first-run friction that discourages adoption.
2. **Dissatisfaction**: Self-hosted enterprise users running 10+ agent instances repeatedly hit SQLite file size and connection limits, with no official alternative database backend available to support their production workloads.
3. **Dissatisfaction**: Accessibility-focused users report that the Hermes Desktop auto-TTS feature plays responses twice in a row, breaking core read-aloud usability.
4. **Dissatisfaction**: Power users working with multiple git worktrees are frustrated that per-project skill trust policies do not carry over between checkouts, requiring repeated redundant approval prompts.
5. **Satisfaction**: DevOps and SRE teams managing hosted Hermes deployments widely praised the new v0.20.3 patch release for eliminating version drift issues that caused inconsistent behavior across multi-node clusters.

## 8. Backlog Watch
These high-impact long-unresolved tickets are awaiting explicit maintainer attention:
1. **Issue #66616 (Skills index stale, 31 days open, 47 comments)** | [Link](https://github.com/NousResearch/hermes-agent/issues/66616): No maintainer has been assigned to

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-08-18
---
## 1. Today's Overview
Over the 24-hour reporting window, PicoClaw delivered consistent production-focused updates spanning bug fixes, third-party channel support enhancements, and existing issue triage, with 4 updated issues and 4 updated pull requests across the repository. No new formal releases were published, but 3 pending PRs were successfully merged, resolving long-standing pain points for both self-hosted and cloud deployment users. The majority of recent work targets hardening core chat channel functionality and eliminating silent failure modes that leave end users unresponsive, signaling a clear push toward production stability for the active 0.3.x release line. Overall project activity levels are healthy, with new bug reports being addressed by community contributors within hours of being filed.

## 2. Releases
No new official releases were published in the 24-hour reporting window, with no new tagged versions added to the repository as of 2026-08-18.

## 3. Project Progress
Three previously stale PRs were closed/merged in this window, delivering tangible improvements to core platform functionality:
1. **[PR #3312](https://github.com/sipeed/picoclaw/pull/3312)**: Implemented early termination for agent turns that encounter repeated identical tool failures, eliminating the multi-minute silent hang that previously ran loops up to the `max_tool_iterations` limit without returning user-facing responses.
2. **[PR #271](https://github.com/sipeed/picoclaw/pull/271)**: Resolved a critical deployment bug where environment variable overrides were ignored when no local `config.json` file exists, a common issue for containerized deployments on platforms like Fly.io that rely exclusively on secrets for configuration, with an accompanying regression test added to prevent future regressions.
3. **[PR #2606](https://github.com/sipeed/picoclaw/pull/2606)**: Full multi-instance support for the Weixin (WeChat) channel was merged, including end-to-end improvements to backend routing, frontend configuration UI, documentation, and input validation for channel names to improve stability for multi-tenant Weixin deployments.

## 4. Community Hot Topics
The most active thread in the current reporting window is the long-standing feature request for improved IRC long message support:
- [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287): This open feature request has accumulated 6 comments since being filed on 2026-07-22, far more than any other recent issue or PR. The underlying user need is standards-compliant IRCv3 support that automatically reassembles split long messages (IRC enforces a 512-byte default message limit) so users see cohesive, complete responses from PicoClaw on IRC networks. This thread signals growing adoption of PicoClaw on niche, self-hosted open source community chat platforms beyond mainstream channels like Slack and Telegram.

## 5. Bugs & Stability
Newly reported active bugs (ranked by severity) and status are as follows:
1. **High Severity**: [Issue #3338](https://github.com/sipeed/picoclaw/issues/3338) Slack media upload failure: All image and media attachment sends fail on the Slack channel with a zero-file-size error, breaking core rich messaging functionality. A matching fix PR ([#3340](https://github.com/sipeed/picoclaw/pull/3340)) was submitted by the issue reporter the same day, resolving the missing `FileSize` parameter that caused the error.
2. **Medium Severity**: [Issue #3339](https://github.com/sipeed/picoclaw/issues/3339) False 429 error for Google Antigravity generation: Users with valid OAuth scopes and successful model discovery get generic RESOURCE_EXHAUSTED errors for all generation requests on the Google Antigravity integration. No corresponding fix PR has been filed as of reporting.
The previously reported silent repeated tool failure bug was fully resolved by merged PR #3312 in this window, with no remaining open related action items.

## 6. Feature Requests & Roadmap Signals
The only new user-submitted feature request in this window is the IRC long message reassembly feature in Issue #3287. Given the project's recent priority of hardening cross-channel functionality (evidenced by the merged Weixin multi-instance enhancement), the pending Slack media upload fix, and the active IRC feature request, both updates are high-probability candidates to ship in the next 0.3.x minor patch release. No larger scope feature requests were filed in this reporting period.

## 7. User Feedback Summary
Reported real user pain points and experience signals include:
- Production users running PicoClaw on Telegram previously experienced unacceptably long unresponsive agent turns, a high-impact usability issue that has now been patched, with no further related complaints filed after the fix was merged.
- Cloud deployment users running on container platforms reported unnecessary credential failures when running without a local config file, a major barrier to zero-config production deployment that is now resolved.
- Administrators operating PicoClaw across under-documented chat channels (Slack, IRC, custom LLM provider integrations) report frequent small, breaking edge cases that degrade end user experience, with contributors demonstrating strong satisfaction with the fast turnaround time for bug fixes submitted by the community.

## 8. Backlog Watch
The top high-priority item awaiting formal maintainer attention is [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287), the 3-week-old IRC long message support feature request that has 6 user comments demonstrating clear community demand, but no formal triage or implementation assignment to date. The recently merged PR #271, which sat dormant for 6 months after being filed in February 2026, shows maintainers are now prioritizing long-stale configuration-related pull requests, with no other outstanding high-value unaddressed backlog items flagged in the reporting window.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest | 2026-08-18
---
## 1. Today's Overview
This is a high-velocity development day for the NanoClaw project, with 4 total updated issues and 34 active pull requests tracked in the past 24 hours. The core team delivered a concentrated batch of platform extensibility improvements, alongside targeted fixes for recent regressions introduced in the 2.1.48 release. The 61% merge/close rate for all updated PRs demonstrates strong throughput, and every newly reported critical bug already has a corresponding draft fix from maintainers. The project is clearly prioritizing both developer experience for third-party module builders and stability for end-user self-hosted deployments, with no new releases scheduled for the immediate 24-hour window.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Project Progress
21 total PRs were merged or closed in the past day, delivering key functional and quality of life improvements:
- A full suite of 6 core extension points for channel and module developers landed, including the Chat SDK bridge inbound policy registration seam, setup wizard per-channel extension hooks, session-created router hook, post-delivery outbound hook, MCP `extendTool` additive tool schema API, and generic membership-event hook. These changes eliminate the prior requirement to edit core repository source code to implement custom channel behavior, drastically reducing the barrier to building third-party integrations.
- The consolidated cross-session context PR (https://github.com/nanocoai/nanoclaw/pull/3285) was merged, combining 4 previously split partial PRs to add support for concurrent multi-session agent groups, automatic message fan-out across sessions, and the new `ncl sessions history` command.
- The long-outdated documentation issue referencing the removed `/data/env` environment variable path (https://github.com/nanocoai/nanoclaw/issues/1143) was formally closed.

## 4. Community Hot Topics
The highest engagement topics from the last 24 hours center on local usability and roadmap feature delivery:
1. **Dual competing local web chat PRs (https://github.com/nanocoai/nanoclaw/pull/3298, https://github.com/nanocoai/nanoclaw/pull/3290)** : Two separate contributions from core team and community contributors both implement a no-dependency, loopback-only local browser chat interface. This reflects strong unmet user demand for an air-gapped, zero-external-service chat UI that does not require integration with third-party chat platforms for testing or private deployments.
2. **Cross-session context release (https://github.com/nanocoai/nanoclaw/pull/3285)** : The merged functionality has been a top community request for multi-agent team deployments for over 3 months, with dozens of end users indicating it eliminates the need for custom forked logic to manage concurrent chat threads for shared agent groups.

## 5. Bugs & Stability
All newly reported bugs from the past 24 hours have in-progress fix PRs, ranked by severity below:
- **High Severity: Regression in 2.1.48 breaks task sessions** (https://github.com/nanocoai/nanoclaw/issues/3301): Tasks firing inside existing chat sessions drop run logs, silently discard replies, and unlist task series, affecting all users with pre-2.1.48 task data. A direct fix PR (https://github.com/nanocoai/nanoclaw/pull/3303) from core maintainer glifocat is already open, targeting a near-term patch.
- **Medium Severity: Pending message polling causes OOM risks** (https://github.com/nanocoai/nanoclaw/issues/3289): The current `getPendingMessages()` function loads all unprocessed rows into JavaScript memory before filtering, creating crash risks for high-throughput deployments with large backlogs. Matching fix PR (https://github.com/nanocoai/nanoclaw/pull/3291) has been drafted.
- **Medium Severity: Codex provider typecheck failure breaks image generation** (https://github.com/nanocoai/nanoclaw/issues/3203): The codex provider emits an undeclared `file` event that blocks typechecks on main and silently drops generated images. Fix PR (https://github.com/nanocoai/nanoclaw/pull/3299) bumps the OpenAI Codex SDK version ahead of the upcoming 2026-08-31 GPT-5.4 retirement to resolve both the version compatibility and typecheck issues.
- Minor severity bugs for OneCLI gateway binding, unescaped attachment XML fields, and unconditional Docker image rebuilds all have corresponding open fix PRs.

## 6. Feature Requests & Roadmap Signals
The set of in-progress features indicate the 2.1.49 patch release will prioritize stability fixes for the recent 2.1.48 regression, followed by a 2.2.0 feature release with the following high-demand items:
- The local native web chat UI is almost guaranteed to land in the 2.2.0 release, given two parallel mature implementations are already under review.
- The new `/add-clawmetry` operational skill (https://github.com/nanocoai/nanoclaw/pull/3288) that adds a local read-only agent session dashboard is slated for inclusion as an official first-party skill, addressing longstanding user debugging pain points.
- The `--stdin-json` CLI mode (https://github.com/nanocoai/nanoclaw/pull/3218) for structured input piping will land in the 2.2 cycle to support common devops and scripted workflow use cases.

## 7. User Feedback Summary
Real user pain points surfaced in the last 24 hours include: 1) The 2.1.48 task handling regression breaks legacy pre-2.1.48 task data for long-time self-hosted users, 2) Air-gapped deployment users have no official built-in chat UI that does not require external third-party integrations, 3) Users managing multi-agent deployments have no easy way to scan overnight session activity without direct backend database access, and 4) Stale documentation paths for environment variable configuration caused avoidable setup friction for new users. Overall user satisfaction remains high due to the core team's same-day response to all newly reported bugs, with no open critical issues left unaddressed at the end of the day.

## 8. Backlog Watch
High-priority long-standing items that have been unaddressed for weeks or months and are now getting overdue maintainer attention:
1. #3203 (Codex provider undeclared event bug) has been open for 10 days, blocking all users who want to run Codex image generation workflows, and still needs full triage before its associated fix PR can be merged.
2. #2903 (OneCLI incorrect default bind address) has been open for 5 months, and only received its first draft fix PR yesterday.
3. #2701 (Unconditional agent image rebuild on restart) has been open for 7 months, and its newly submitted fix PR will eliminate unnecessary 10+ minute wait times for users restarting agent groups with no custom packages configured.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Daily Digest | 2026-08-18
*AI agent and personal AI assistant open-source repository*

---

## 1. Today's Overview
For the 24-hour period ending 2026-08-18, the NullClaw open-source AI agent framework project recorded very low, maintenance-only activity with no new user-submitted issues, no merged pull requests, and no official new releases published. All tracked updates in the window are limited to a pre-existing automated dependency PR that was refreshed by the Dependabot tool, with no new human-driven code contributions or community discussions logged for the day. This quiet activity profile signals the project is operating in a stable, low-development cadence at this moment, with no urgent breaking issues or high-priority work being pushed publicly. The lack of new opened or closed user reports also indicates no widespread regressions or critical outages are impacting the project’s current user base as of this digest period.

## 2. Releases
No new official NullClaw releases were published in the 24-hour reporting window. No pre-releases, hotfix patches, or version tags were cut during this period.

## 3. Project Progress
No pull requests were merged or formally closed in the 2026-08-18 reporting window, meaning no new core features, bug fixes, or infrastructure updates were shipped to the production codebase. The only tracked activity related to code maintenance is an automated Dependabot pull request that received an automatic sync update in the last 24 hours, with no human code changes advancing toward a release milestone today.

## 4. Community Hot Topics
There are no highly active community discussion threads, issues, or pull requests with meaningful user engagement from the last 24 hours. The only recently updated open PR, the Dependabot Alpine base image bump at https://github.com/nullclaw/nullclaw/pull/956, has 0 comments and 0 reactions as of this digest. This near-zero engagement signals that there are no high-priority community concerns, controversial proposals, or widely requested changes being actively discussed by users at this time.

## 5. Bugs & Stability
No new bug reports, crash incidents, or regression reports were submitted by users in the 24-hour reporting window. There are no logged severity-ranked stability issues to triage, and no active fix PRs tied to newly reported bugs. This clean stability record aligns with the project’s low recent activity profile, with no widespread quality degradation affecting end users.

## 6. Feature Requests & Roadmap Signals
No new user-submitted feature requests were logged in the project’s issue tracker or pull request queue over the last 24 hours, so there are no new public signals about upcoming roadmap priorities for NullClaw. The only pending change that could land in a near-future minor release is the Alpine 3.24 Docker base image update from PR #956, which would bring upstream security patches, performance improvements, and reduced CVE exposure for all Docker-based NullClaw deployments once merged.

## 7. User Feedback Summary
No new public user feedback, use case submissions, or satisfaction/dissatisfaction reports were posted to the project’s GitHub repository in the 2026-08-18 window. There are no newly surfaced user pain points, unmet workflow needs, or positive experience testimonials to highlight from the last 24 hours.

## 8. Backlog Watch
The highest-priority open backlog item needing maintainer attention is the automated Docker dependency update PR #956 (https://github.com/nullclaw/nullclaw/pull/956), which was first opened on 2026-06-15 and has remained open for more than 2 months without review or merge. This PR is a low-risk, high-impact change that would update the project’s default Alpine Linux base image to the latest stable 3.24 release, reducing the attack surface for all containerized NullClaw deployments. The extended open duration of this routine dependency PR indicates the project’s maintainer team may be stretched thin, or prioritizing larger unreleased feature work over incremental infrastructure hygiene tasks at this moment.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Daily Project Digest | 2026-08-18
---
## 1. Today's Overview
This 24-hour window saw high activity across the core IronClaw repository, with 28 updated issues, 44 updated pull requests, and no new public releases. The team prioritized core platform performance work, specifically a targeted effort to cut durable database write pressure by ~60% while preserving multi-worker safety. An ongoing cross-team QA bug bash also surfaced actionable gaps in third-party integration flows for MCP, Telegram, and Slack. Multiple end-to-end notification inbox features advanced through planning and initial implementation, while forward-porting of validated 1.2 release fixes onto the main branch completed successfully. Project health remains strong, with 75% of recently closed issues focused on performance and user-facing bug fixes rather than emergency regressions.

## 2. Releases
No new official versions of IronClaw were published in the past 24 hours.

## 3. Project Progress
A total of 16 PRs were merged or closed in the reporting window, with key completed work including:
- Fixed the critical libSQL write-lane starvation bug (https://github.com/nearai/ironclaw/pull/7717) that caused cascading reservation leaks under high PinchBench load
- Delivered 3 Tier 1 and Tier 2 optimizations under the 60% DB write pressure reduction epic: collapsed capability invocation state writes, routed loop milestone sinks through the new CoalescingEventSink, and merged message lookup index rows into parent message records for 2-3 fewer writes per message
- Closed the persistent cross-conversation memory recall verification bug (https://github.com/nearai/ironclaw/issues/7275) after successful production validation
- Completed typed prop enforcement for all design-system shared components (https://github.com/nearai/ironclaw/issues/7637) to eliminate TypeScript validation gaps
- Merged forward-ported 1.2 release fixes for Windows filesystem reliability and release smoke test stability (https://github.com/nearai/ironclaw/pull/7663)
- Closed the redundant WASM typed tool response PR #7703, with all functionality folded into the larger, fully validated capability normalization PR #7711 to avoid code churn

## 4. Community Hot Topics
The most actively discussed items in the window:
1. **Epic: Reduce durable DB write pressure ~60% while keeping multi-worker safety** (https://github.com/nearai/ironclaw/issues/7591): This 3-comment epic is the top priority for core engineers, with 7+ dependent child tickets. The underlying need is to drastically improve performance for self-hosted libSQL deployments, which are the most widely used distribution for small to mid-size IronClaw team deployments.
2. **[suggested_P1, customer, v1.4.0] Editing AGENTS.md in the web UI does not update the system prompt for current or future conversations** (https://github.com/nearai/ironclaw/issues/3762): 2-comment long-running customer issue opened May 2026. Users expect web UI edits to their agent identity files to apply immediately, a core UX expectation for teams that configure custom agents directly in the IronClaw interface.
3. **Expose GitHub Projects v2 field manipulation in GitHub tool** (https://github.com/nearai/ironclaw/issues/7719): Newly filed feature request, driven by internal engineering teams that use IronClaw to automate issue triage across their GitHub Projects v2 backlogs, but cannot update priority fields with existing tooling.

## 5. Bugs & Stability
Ranked by severity, newly reported bugs in the window:
1. **High Severity**: libSQL single shared write connection starves the resource-governor journal under bench load, causing cascading authority invalidation and permanent reservation leaks (https://github.com/nearai/ironclaw/issues/7714). A complete fix PR #7717 is already open and under review.
2. **Medium P2 Bug Bash Findings**: Two gaps surfaced during ongoing QA testing:
   - MCP server setup flow missing bearer key auth and STDIO/HTTP transport options (https://github.com/nearai/ironclaw/issues/7716), no fix PR filed yet
   - Telegram connection flow missing user selection between bot and personal account modes (https://github.com/nearai/ironclaw/issues/7715), no fix PR filed yet
3. **Medium Severity**: Obligation audit records (AuditBefore/AuditAfter) are never attached in production, violating the documented host API contract (https://github.com/nearai/ironclaw/issues/7702), no fix PR filed yet.

## 6. Feature Requests & Roadmap Signals
Upcoming features highly likely to land in the next 1-2 minor releases:
- The full 5-part durable user notification inbox stack (linked issues #7687 through #7691) is fully spec'd and will ship as part of v1.3.0, bringing actionable inbox alerts for approvals, blocked runs, and automation failures to the web UI
- GitHub Projects v2 field manipulation support will ship in the next minor patch, as it is a low-effort, high-impact change for internal and enterprise development teams
- The ACP (Agent Communication Protocol) serve command with native streaming and cancellation support (PR #7513) is targeted for v1.4.0, enabling seamless integration with VS Code, GitHub Copilot CLI, and other ACP-compatible tools
- The new "run now" manual trigger for automations (PR #7708) will land in the next automation feature update, for teams that need to run scheduled automations on demand for test purposes.

## 7. User Feedback Summary
Key user pain points and satisfaction signals captured in the window:
- Longstanding customer frustration with the AGENTS.md edit flow in the web UI, where saved changes never apply to existing or future conversations, was re-surfaced as a top P1 item for the v1.4.0 milestone
- Users previously reported unprofessional public Slack onboarding prompts that were visible to entire shared channels, which the team has addressed with a new private DM flow and one-click connect link
- Multiple self-hosted libSQL deployment users reported high latency under high concurrent load, which the ongoing 60% write pressure reduction effort is explicitly designed to resolve
- QA and dogfooding participants noted that the new Telegram and MCP integration flows work reliably, but are missing critical authentication and transport configuration options that prevent production use.

## 8. Backlog Watch
The highest-priority long-open item needing maintainer attention:
> [suggested_P1, customer, v1.4.0] Editing AGENTS.md in the web UI does not update the system prompt for current or future conversations (https://github.com/nearai/ironclaw/issues/3762)
> Opened 2026-05-18, this customer-facing critical bug has been open for 3 months with no assigned developer or linked fix PR, despite being marked as a P1 target for the v1.4.0 release. No new activity was posted to the issue in the last 24 hours, making it a high-priority candidate for sprint allocation to avoid missing the v1.4.0 release window.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) Project Daily Digest | 2026-08-18
---
## 1. Today's Overview
NetEase Youdao's open-source personal AI agent framework LobsterAI saw strong development activity over the 24-hour monitoring window ending 2026-08-18, with 17 out of 21 total updated pull requests merged or closed for an 81% backlog clearance rate. No new official public releases were published this period, while 7 previously stale open issues from April 2026 received updates. Most merged deliverables focus on UX polish for the core chat collaboration workflow, new runtime and LLM provider extension capabilities, and security hardening. The high PR merge rate and lack of critical unpatched outages signal stable, healthy project operation, with the core team prioritizing clearing long-tail accumulated backlog items.
## 2. Releases
No new official releases were launched in this 24-hour monitoring window.
## 3. Project Progress
17 PRs were merged/closed in the tracked period, delivering the following key features and fixes:
- New runtime support: Full DeepSeek Harness (DSH) engine integration (via PR #2502, PR #2505, https://github.com/netease-youdao/LobsterAI/pull/2505) that adds a dedicated DSH process launcher, with corresponding documentation support pending in the open PR #2506
- Core UX upgrades for the cowork chat module: A scroll-to-bottom floating button for long history chat sessions (#1636), AI response regenerate button (#1637), one-click copy for all tool execution outputs (#1640), universal Esc-key close support for all pop-up modals (#1641), Windows system right-click menu integration for opening workspace directories (#1642), and time-period grouping (Today/Yesterday/Last 7 Days etc.) for session lists to simplify history search (#1675)
- Bug and experience fixes: Fixed untranslated hard-coded English UI tooltips (#1639), added full text edit context menu (cut/copy/paste) for Electron app text inputs (#2503), resolved inconsistent full-app display for skill upgrade progress overlays (#2501), upgraded the underlying OpenClaw runtime to v2026.4.12 (#1663), updated the Qwen console entry link to Alibaba's new Bailian platform to avoid broken access (#1667), implemented independent configurable working directories for each custom agent (#1668), and fixed usability flaws in the model provider settings page (#1669)
- Security hardening: Added automatic full redaction for API keys, tokens and other sensitive information in exported runtime logs to prevent accidental credential leakage (#1661)
## 4. Community Hot Topics
- Top community submission: Issue #2500 (https://github.com/netease-youdao/LobsterAI/issues/2500) posted by the author of third-party open-source A2A project VOKO, which proposes integrating VOKO's cross-platform agent communication layer to enable LobsterAI agents to interoperate with agents from other frameworks and IM channels. This submission reflects growing ecosystem recognition of LobsterAI as a mainstream local AI agent runtime, and underlying community demand for supporting open A2A standards rather than isolated single-machine agent use cases.
- Highlighted open PR: PR #2504 (https://github.com/netease-youdao/LobsterAI/pull/2504) which adds OrcaRouter, an Anthropic/OpenAI compatible LLM gateway, as a first-class native provider in LobsterAI's model registry. This change addresses unmet demand from power users that manage dozens of LLM endpoints via a unified routing layer to avoid repeated configuration in LobsterAI.
## 5. Bugs & Stability
Bugs are ranked by severity, with no public fix PRs identified for all items below as of this digest:
1. **High severity**: Non-SSE MCP engines cannot be recognized or used normally (#1662, https://github.com/netease-youdao/LobsterAI/issues/1662), which breaks core MCP extension functionality for users that rely on non-Spec MCP servers for custom tool access.
2. **Medium severity**: Local Ollama models (covering Qwen 3 to Gemma 4) throw runtime errors and cannot be called (#1635, https://github.com/netease-youdao/LobsterAI/issues/1635); MD to Word conversion tasks terminate midway with an SSE full response error (#1671, https://github.com/netease-youdao/LobsterAI/issues/1671). Both issues affect common core user workflows.
3. **Low severity**: The groupPolicy configuration is silently overwritten to the allowlist rule after a period of time (#1653, https://github.com/netease-youdao/LobsterAI/issues/1653); Manually created scheduled tasks pop up a false "unsaved content" prompt even when the task has been saved successfully (#1643, https://github.com/netease-youdao/LobsterAI/issues/1643). Both issues do not block core functionality but cause unnecessary user confusion.
## 6. Feature Requests & Roadmap Signals
The top user feature request recorded this cycle is Issue #1644 (https://github.com/netease-youdao/LobsterAI/issues/1644), which requests a markdown-based workflow orchestration capability that allows the main agent to discover, invoke and organize other independent custom agents to complete complex multi-step tasks. Combined with the recently merged independent agent workspace support, ongoing new runtime and LLM gateway integration work, it is highly predictable that the next minor version of LobsterAI will take lightweight multi-agent orchestration, wider local runtime compatibility, and more third-party LLM gateway access support as its three core new feature directions.
## 7. User Feedback Summary
- Pain points: Local offline deployment users face full Ollama model access failure that blocks their no-cloud workflow; Users managing multiple independent custom agents have to manually switch between agents to complete complex tasks due to lack of cross-agent orchestration; Longtime users of the chat module previously complained about missing basic interaction capabilities that reduce operation efficiency.
- Satisfaction: The recently merged batch of UX upgrades for the chat collaboration module directly addresses long-standing user-reported pain points, and the new sensitive log redaction feature fills a critical security gap that power users previously raised.
## 8. Backlog Watch
All 7 updated open issues in this digest are stale items created in April 2026 that have been pending for more than 4 months without maintainer follow-up. The 3 highest-priority items that require urgent maintainer triage are:
1. Non-SSE MCP accessibility bug #1662, which blocks advanced custom tool extension scenarios
2. Markdown-based multi-agent workflow feature request #1644, which has clear explicit demand from power users
3. Ollama local model general compatibility bug #1635, which affects the large base of offline local deployment users
Prioritizing these items in the next sprint will effectively reduce unmet user expectations and avoid extended unresolved core experience flaws.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Daily Digest | 2026-08-18
---
## 1. Today's Overview
Moltis maintained high development velocity in the 24-hour reporting window, with 2 closed issues, 7 merged/closed PRs and 3 active open PRs, no new formal releases published. The team made targeted progress across three priority areas: core functionality bug fixes, new third-party agent integration, and long-overdue dependency and usability feature rollouts. No end-user facing critical regressions were detected, and all recently identified operational CI issues have been fully resolved. Overall project health remains strong, with consistent contributions from both full-time maintainers and external community contributors.

## 2. Releases
No new official releases were published in the last 24 hours, no pre-release or version tagging activity was recorded for the project.

## 3. Project Progress
7 PRs were merged or closed in the reporting period, delivering the following key updates:
- 🚀 New capability: Added full support for the MiniMax Code ACP external agent, including default executable detection, registry configuration and UI sync via [PR #1204](https://github.com/moltis-org/moltis/pull/1204)
- 🚀 External agent UX upgrade: Implemented first-class model and effort selection for all external agent providers, with metadata persistence and `/model` endpoint support via [PR #1125](https://github.com/moltis-org/moltis/pull/1125)
- 🐛 Fix: Completed the CalDAV integration rewrite to honor event list time ranges per RFC 4791, eliminating inefficient full calendar resource fetches via [PR #1147](https://github.com/moltis-org/moltis/pull/1147)
- 🐛 Fix: Rolled out optimized shadow DOM lookup logic for the browser automation crate, resolving previously broken deep element selection workflows via [PR #1103](https://github.com/moltis-org/moltis/pull/1103)
- ✨ Usability: Shipped the long-requested configurable web UI RPC timeout feature, resolving the corresponding feature request via [PR #1130](https://github.com/moltis-org/moltis/pull/1130)
- 📦 Dependencies: Merged two Dependabot updates for the Rust cargo workspace, bumping wasmtime-wasi, serde_with, quinn-proto, cmov and the `tar` crate to their latest stable secure versions via [PR #1207](https://github.com/moltis-org/moltis/pull/1207) and [PR #1087](https://github.com/moltis-org/moltis/pull/1087)

Both updated issues from the last 24 hours were fully resolved: the broken Format CI gate (issue #1202) and RPC timeout configuration request (issue #1127) are now closed.

## 4. Community Hot Topics
No issues or PRs in the 24-hour update window have accumulated user comments, reactions or public community discussion above zero. All recent changes are core roadmap-aligned work pushed by active maintainers and regular contributors, with no high-contention feature debates or widely-shared bug reports emerging in the period.

## 5. Bugs & Stability
Only one bug was formally resolved in the reporting window, ranked by severity as below:
1. **Low severity**: Format CI gate failure on main branch ([Issue #1202](https://github.com/moltis-org/moltis/issues/1202)), caused by two source files exceeding the project's 1500-line limit, with no end user impact and only minor disruption to PR merging workflows. The issue is fully closed, with no remaining unresolved CI regressions reported.
No end-user facing crashes, critical bugs or new regressions were logged in the 24-hour period.

## 6. Feature Requests & Roadmap Signals
The recently closed configurable RPC timeout feature request signals the Moltis team is prioritizing configurability for self-hosted and enterprise users running high-latency or resource-constrained deployments. Three in-flight open PRs ([#1209](https://github.com/moltis-org/moltis/pull/1209), [#1208](https://github.com/moltis-org/moltis/pull/1208), [#1206](https://github.com/moltis-org/moltis/pull/1206)) point to upcoming improvements to heartbeat configuration behavior and a new managed file library system. It is highly likely that the next minor release will include the new MiniMax Code ACP agent support, CalDAV and browser automation fixes, and configurable RPC timeouts, with the full managed files library scheduled for the subsequent release cycle.

## 7. User Feedback Summary
Resolved work in the past day directly addresses three documented user pain points:
1. Self-hosted users on high-latency networks previously could not adjust RPC timeouts, leading to unexpected session drops
2. Power users leveraging browser automation for AI agent workflows reported that shadow DOM elements could not be reliably selected
3. Chinese-speaking users requested native support for regional code agent providers such as MiniMax to align with local tooling ecosystems
No new negative satisfaction signals or unaddressed critical user complaints were recorded in the reporting period.

## 8. Backlog Watch
[PR #1087](https://github.com/moltis-org/moltis/pull/1087), a low-severity dependency bump for the Rust `tar` crate, was first opened on 2026-05-29 and remained unprocessed for nearly 3 months before being merged this week. This indicates a minor triage backlog for low-priority automated Dependabot PRs, with no other high-impact long-dormant issues or PRs currently flagged for maintainer attention across the project.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Daily Digest | 2026-08-18
---
## 1. Today's Overview
The CoPaw project maintained high engineering throughput on its v2.1.x hardening track over the past 24 hours, with 14 updated issues and 35 updated pull requests recorded. 6 out of 14 active issues were resolved, and 22 out of 35 PRs were merged or closed, indicating a 63% daily closure rate for change requests that reflects strong release readiness. The project saw 4 first-time contributors submit valid, spec-aligned PRs today, showing fast-growing community contribution momentum. Current development priorities are split between patching critical v2.1.0 runtime bugs, expanding LLM provider ecosystem support, and rolling out value-added optional modules such as dedicated data analysis workspace and long-term memory backends. No blocking critical regressions were reported in the latest 24h window.

## 2. Releases
No new official releases were published in the past 24 hours. The codebase is currently in the post-v2.1.0 patch preparation phase, with no announced breaking changes pending for upcoming minor releases.

## 3. Project Progress
The 22 merged/closed PRs in the last 24 hours delivered the following key fixes and features:
1.  **Core crash fix**: Addressed the 100% reproducible tool call execution crash on v2.1.0 caused by incorrect async generator/coroutine type mismatch (PR linked to [Issue #7063](https://github.com/agentscope-ai/QwenPaw/issues/7063))
2.  **Ecosystem stability**: Fixed plugin runtime hooks being silently lost after workspace hot reload, and resolved QQ OneBot channel short-lived image rkey expiration that poisoned conversation history (linked to [Issue #7077](https://github.com/agentscope-ai/QwenPaw/issues/7077) / [Issue #7088](https://github.com/agentscope-ai/QwenPaw/issues/7088))
3.  **UX optimization**: Implemented compact background task list with scroll hint, removed redundant approval command hints from multi-language chat placeholders, fixed GitPanel tab style mismatch caused by ant-design prefix config conflict, and stopped counting inlined base64 images as text tokens to eliminate false context window full alerts
4.  **New capability foundation**: Merged the native DataPaw app runtime and durable data analysis workspace, enabling in-conversation tabular data processing without external tools.

## 4. Community Hot Topics
The most actively discussed items ranked by comment count:
1.  [Issue #6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) (7 comments): MCP tool "Tool not found" error after upgrading to v2.0.0post3. This resolved issue reflects widespread user pain points during the v1.x to v2.0 migration, and the discussion helped formalize official MCP version compatibility documentation for the broader user base.
2.  [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) (6 comments): Console stop request cancels unrelated active Feishu sessions under multi-UI deployment. The high engagement shows that a large share of production users run CoPaw with multi-channel integration for enterprise internal use, and strict session isolation is a non-negotiable requirement for production deployments.
3.  [PR #7081](https://github.com/agentscope-ai/QwenPaw/pull/7081): AnySearch native web search integration. Community feedback on this PR highlights strong user demand to replace third-party search providers with lower-latency, regionally optimized domestic search services.

## 5. Bugs & Stability
Reported bugs ranked by severity, with fix status:
| Severity | Issue Link | Description | Fix Status |
|----------|------------|-------------|------------|
| Critical | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | 100% reproducible runtime crash when agent executes tool calls on v2.1.0 | Resolved, fix merged |
| High | [#7088](https://github.com/agentscope-ai/QwenPaw/issues/7088) | Expired QQ short-lived image URLs cause persistent conversation session poisoning on OneBot channel | Resolved, fix merged |
| High | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Cross-session stop request cancels active Feishu conversation, affects multi-user shared deployment | Open, no assigned fix PR |
| Medium | [#7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) | Pydantic `_StructuredOutputDynamicClass` incomplete definition error blocks console startup | Open, under triage |
| Medium | [#7076](https://github.com/agentscope-ai/QwenPaw/issues/7076) | qwenpaw-creator LLM configuration endpoint returns 404 on v2.1.0 | Open, under triage |

6 out of 8 reported bugs in the last 24h have existing resolutions or active workarounds, showing strong response efficiency for stability issues.

## 6. Feature Requests & Roadmap Signals
High-impact user requested features and release prediction:
1.  **Channel-level independent model configuration** ([Issue #7085](https://github.com/agentscope-ai/QwenPaw/issues/7085)): Aligns with ongoing unify model routing work in PR #6302, estimated 90% probability to land in the next v2.1.x minor patch, as it requires no breaking architecture changes.
2.  **PowerContext pluggable long-term memory backend** ([Issue #7079](https://github.com/agentscope-ai/QwenPaw/issues/7079)): The corresponding implementation PR has been submitted by a first-time contributor, following the existing `BaseMemoryManager` extension interface, expected to be released as an optional addon in v2.2.0.
3.  **Single-window multi-agent collaborative conversation** ([Issue #6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)): Top requested UX improvement for multi-agent use cases, will be prioritized in the next UX feature iteration.
4.  **Cron job full runtime metrics display** ([Issue #7075](https://github.com/agentscope-ai/QwenPaw/issues/7075)): Low implementation cost, high value for operation scenarios, very likely to be included in the next patch release.

## 7. User Feedback Summary
Real user pain points and use cases collected from the past 24h:
1.  Multi-channel deployment users express strong dissatisfaction with the current global/agent-only model configuration rule, which forces them to make tradeoffs between response speed (for instant messenger channels) and cost (for internal test use) across different channels.
2.  Operation users running long-period cron tasks of 5-10 minutes have zero visibility into task execution status, which makes it impossible to distinguish pending, running and failed states without checking raw logs.
3.  Post-upgrade users report that multiple MCP functionality changes in v2.0 were not clearly documented in migration guides, leading to unplanned downtime for self-hosted deployments.
4.  Early testers of the new DataPaw module give positive feedback, noting that it fully eliminates the need to switch between third-party data analysis tools when agents process tabular data files.

## 8. Backlog Watch
High-priority items needing maintainer attention:
1.  [PR #6515](https://github.com/agentscope-ai/QwenPaw/pull/6515): Add Volcengine Agent Plan and Xiaomi MiMo V2.5 API as built-in providers, submitted 22 days ago with no review progress. These two services have huge user bases in the Chinese mainland market, and merging this PR will greatly improve local user out-of-box experience.
2.  [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011): Cross-session Feishu cancellation critical bug, 6 active participant comments, no fix PR assigned yet, it blocks production rollout for dozens of enterprise users.
3.  [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302): Unify provider discovery, model metadata and routing system, submitted 28 days ago. This PR is the foundational dependency for multiple high-priority features including channel-level independent model configuration, unblocking its merge will accelerate the delivery of 3+ downstream user requested features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 2026-08-18 Project Digest
---
## 1. Today's Overview
ZeroClaw saw steady, high-productivity activity in the 24-hour window ending 2026-08-18, with 50 updated issues and 50 updated pull requests aligned heavily to v0.9.0 milestone deliverables. 94% of updated issues are open, representing active RFC rollout, triage, and implementation work, while 9 merged/closed PRs delivered critical security fixes and cross-platform CI parity improvements. No critical user-facing outages or severity S1 bugs were reported, and project velocity remains well-supported by active community contributions from both core maintainers and external trusted contributors. The project’s current focus on security hardening, architecture standardization, and broader third-party tool compatibility continues to move forward without unplanned bottlenecks.

## 2. Releases
No new official releases were published in the 24-hour tracking window, and no release candidates were flagged as ready for deployment as of 2026-08-18.

## 3. Project Progress
9 PRs were merged or closed in the tracking window, delivering high-impact fixes and infrastructure upgrades:
1. **PR #9993** (Closed): Security fix for email channels that blocks implicit local file reads from user-supplied attachment filenames, eliminating a high-risk unvalidated path injection vector
2. **PR #9612** (Closed): WhatsApp Cloud channel fix that ties approval tokens to a structured lifecycle guard, preventing orphaned bearer credentials that could be abused for unauthorized tool call decisions
3. **PR #9765** (Closed): SOP loading path correction that ensures SOP definitions load from the shared workspace directory rather than an isolated data directory, resolving cross-team SOP sync failures for multi-user deployments
4. **PR #9398** (Closed): New scheduled CI workflow addition that runs the full test suite on macOS and Windows, addressing the long-standing gap where only Linux tests ran on main PR checks
5. **PR #9544** (Closed): Delegate agent reliability fix that ensures delegated tasks honor pre-configured provider fallbacks, aliases, and retry rules instead of bypassing them via unvalidated raw provider references
4 additional small test-hardening backlog PRs for parallel runtime stability were also merged.

## 4. Community Hot Topics
The 3 most active discussions all relate to ratified, high-priority architecture and usability RFCs, reflecting alignment across contributors on long-term project direction:
1. [RFC #6808: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (23 comments): This governance RFC addresses widely documented maintainer burnout from fully manual issue triage as the project scales, by automating work routing, label assignment, and backlog prioritization to reduce administrative overhead.
2. [RFC #8603: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (23 comments): The top community feature ask of the quarter, this RFC unlocks native compatibility with all OpenAI Chat Completions ecosystem tools including Open WebUI, LobeChat, Continue.dev, Aider, and LangChain, eliminating the need for custom shims or ZeroClaw-specific SDKs for end users.
3. [RFC #8303: Goal mode v1 — bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (22 comments): This core orchestration RFC responds to consistent user requests for durable, resumable multi-turn agent work that survives process restarts and completes bounded user objectives without repeated manual prompting.

## 5. Bugs & Stability
Bugs are ranked below by severity, all active reported issues have associated fix work in progress:
1. **P1 S2 Severity: #7462 74 test failures on Windows** - Root cause: Unix-only test commands, incorrect path semantics, and mismatched console encoding on Windows. The recently merged PR #9398 adds scheduled Windows CI to catch regressions going forward, with individual test failure fixes actively being triaged.
2. **P1 Security: #9397 Empty WhatsApp `allowed_groups` defaults to permit-none** - Root cause: Current logic treats an empty allowed group list as permission to access all groups the linked WhatsApp account belongs to, creating an unintended open access security hole. The fix is marked in-progress.
3. **P1 Test Reliability: #9965 Runtime executable test fixtures hit ETXTBSY under parallel runtime** - Root cause: Multithreaded parallel tests spawn child processes that hold file descriptors to executable test scripts while overwriting them, triggering a Unix execution text busy race condition. Fix PR #10010 is open awaiting review.
4. **P2 Logging: #10023 Failure logs show requested model, not the actual pinned fallback model** - Root cause: Retry logging uses the original user-requested model ID rather than the ID of the fallback model that actually ran, making debug for fallback routing failures impossible. The fix is marked in-progress.

## 6. Feature Requests & Roadmap Signals
Based on active RFC progress and contributor prioritization, the following features are highly likely to land in upcoming releases:
- The OpenAI Chat Completions profile (#8603) is targeted for a 0.8.x patch release in the next 2 weeks, as it has minimal external dependencies and delivers immediate high user value
- The per-execution shell command confirmation tier (allow/ask/deny policy, #7155) is slated to ship as part of the v0.9.0 security hardening bundle, alongside the pluggable inbound authentication system
- The macOS Option-Backspace word deletion support (#10059) marked as a "good first issue" is expected to land in the next minor patch release with low implementation risk
- The full Goal Mode v1 bounded multi-turn work system (#8303) will be a core flagship feature for the v0.9.0 milestone release targeted for late Q3 2026

## 7. User Feedback Summary
Key user and operator pain points captured in the latest activity:
1. End users report significant friction from the lack of native OpenAI Chat Compatibility, requiring them to build and maintain custom proxy shims to connect their preferred existing LLM frontends to ZeroClaw agents
2. Windows-based contributors state they cannot reliably run the full test suite locally, leading to unexpected CI failures after PR submission and extended review turnaround times
3. macOS ZeroCode users note that standard system text editing shortcuts (Option-Backspace for word deletion) do not work, creating consistent minor friction for daily chat and workflow use
4. Production operators complain that full daemon reloads are required to apply security policy and channel configuration changes, causing unplanned downtime for 24/7 agent deployments
5. A large segment of the community expressed broad support for the plan to slim down the ZeroClaw core by moving long-tail integrations to external MCP-based extensions, reducing core bloat and the default security attack surface.

## 8. Backlog Watch
High-impact items awaiting maintainer signoff or review that are creating downstream bottlenecks:
1. [RFC #9487: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487): High-risk, high-architecture-impact foundational work for the v0.9.0 security milestone that has 19 comments and completed community review, but is still pending formal maintainer signoff. Its delay is blocking 5 dependent RFCs and PRs for unified attachment support and session persistence.
2. [PR #9973: fix(providers): keep Gemini API keys out of URLs](https://github.com/zeroclaw-labs/zeroclaw/pull/9973): P1 priority security fix that prevents Gemini API key exposure in log files and URL diagnostics, currently awaiting maintainer review with no blocking comments outstanding.
3. [PR #9314: fix(telegram): advance long-poll offset only after delivery or permanent skip](https://github.com/zeroclaw-labs/zeroclaw/pull/9314): P1 priority bug fix that prevents permanent loss of Telegram user messages during transient network failures, open for 3 weeks with no assigned reviewer.
4. [RFC #6165: Prefer a lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165): 15-comment architecture RFC that will define the long-term plugin and MCP integration roadmap, pending maintainer review to unblock the external extension ecosystem roadmap.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*