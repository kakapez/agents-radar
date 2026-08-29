# OpenClaw Ecosystem Digest 2026-08-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-29 03:31 UTC

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

# OpenClaw Project Daily Digest | 2026-08-29
---
## 1. Today's Overview
OpenClaw saw extremely high development activity on 2026-08-29, with 1000 total updated Issues and PRs combined, reflecting aggressive development momentum ahead of the upcoming v2026.9 stable release. 50.8% of all updated PRs (254 of 500) were merged or closed today, demonstrating a highly efficient maintainer review and patch validation pipeline aligned with beta release goals. 63 previously open bugs were resolved over the last 24 hours, with a heavy focus on gateway reliability, CI/CD workflow fixes, and quality of life UX improvements for end users. The vast majority of active community discussions today centered on production deployment pain points for 24/7 self-hosted gateway instances, indicating the project’s user base is increasingly made up of enterprise and mission-critical operators rather than hobbyist testers. Overall project health is strong, with the release pipeline on track to ship the next minor version on its scheduled timeline.

## 2. Releases
A new pre-release version was published today:
### v2026.9.1-beta.1
Key publicly available highlights:
1. **Gateway restart recovery**: Implemented functionality to preserve admitted agent turns across repeated Gateway restarts, ensuring restart-safe runs continue execution through existing checkpoints and deliver final responses even after unexpected reboots, resolved in PR [#130491](https://github.com/openclaw/openclaw/pull/130491) contributed by @jalehman.
2. In-progress implementation of Gateway config-write reliability safeguards, to prevent corrupted runtime state when configuration files are modified dynamically while the gateway runs.
No breaking changes are noted in this beta release, and maintainers advise users to deploy it only to staging environments to validate restart resilience before rolling out to production workloads.

## 3. Project Progress
254 PRs were merged or closed in the last 24 hours, with the highest-impact changes including:
- PR [#132304](https://github.com/openclaw/openclaw/pull/132304): Fixed Full Release Validation workflows to properly ignore skipped attempt-evidence CI jobs, unblocking the official beta publishing pipeline.
- PR [#123975](https://github.com/openclaw/openclaw/pull/123975): Added automatic process tree cleanup for the tsgo compiler wrapper on timeout or signal events, eliminating wedged compiler processes that caused long-term CI runner resource leaks.
- PR [#128371](https://github.com/openclaw/openclaw/pull/128371): Updated release validation rules to accept focused partial test suite passes for minor patch releases, removing the requirement to run the entire 12-hour test suite for low-risk targeted changes.
- PR [#120900](https://github.com/openclaw/openclaw/pull/120900): Added an explicit install policy warning acknowledgement flow to the Control UI, letting authenticated admins approve high-risk third-party plugin installations instead of being permanently blocked.
- PR [#128995](https://github.com/openclaw/openclaw/pull/128995): Moved all full session management actions (pin session, mark unread, copy session ID, move to group) to the web chat header, eliminating UX friction where users had to navigate to the sidebar to access common functions.

## 4. Community Hot Topics
The most active and high-engagement items of the day:
1. **Critical Gateway Memory Leak (Issue [#91588](https://github.com/openclaw/openclaw/issues/91588))**: 23 comments, P0 platinum hermit severity. The core underlying need shared by commenters is that 24/7 production self-hosted gateway operators cannot afford to schedule forced weekly restarts to avoid OOM crashes, and require the runtime to support months of continuous uptime without intervention.
2. **Per-agent gateway-level cost budget enforcement (Issue [#42475](https://github.com/openclaw/openclaw/issues/42475))**: 23 comments, P2 priority. Multi-tenant deployment operators are asking for native built-in spend guardrails to prevent runaway LLM costs from infinite agent loops or misconfigured tool calls, as current OpenClaw deployments require external custom monitoring tools to cap per-agent usage.
3. **Codex-backed Telegram turns repeatedly time out (Issue [#87744](https://github.com/openclaw/openclaw/issues/87744))**: 18 comments, P1 priority. Users running public-facing Telegram bot services report that the silent message loss bug breaks end-user experience and erodes trust in production OpenClaw deployments.
4. **MathJax/LaTeX Support in Control UI (Issue [#42840](https://github.com/openclaw/openclaw/issues/42840))**: 10 thumbs-up reactions, the most upvoted feature request today. Users running AI assistants for scientific, educational, and mathematical use cases currently see raw LaTeX source code instead of rendered formulas in the web chat interface.

## 5. Bugs & Stability
Bugs reported or updated today ranked by severity:
1. **P0 Critical**: Gateway memory leak (RSS grows from 350MB to 15.5GB over 2-3 days leading to OOM crashes, Issue [#91588](https://github.com/openclaw/openclaw/issues/91588)). No public fix PR is available yet, the bug is marked as needing live production repro to debug.
2. **P1 High**: Severe event loop blocking from synchronous I/O (main Node thread freezes for up to 4 seconds, causing channel disconnects, Issue [#78805](https://github.com/openclaw/openclaw/issues/78805)). No public fix PR exists, the bug affects all production gateway deployments.
3. **P1 High**: Gateway drops concurrent WebSocket connections under parallel tool fan-out (40+ parallel tool calls trigger misleading "Gateway crashed" errors, Issue [#100941](https://github.com/openclaw/openclaw/issues/100941)). Fix PR [#123547](https://github.com/openclaw/openclaw/pull/123547) is open and awaiting end-to-end proof validation.
4. **P1 High**: Unreaped zombie hook/tool child processes accumulate over runtime uptime, causing gradual performance degradation, Issue [#97616](https://github.com/openclaw/openclaw/issues/97616)). No public fix PR is published.
Two high-impact long-standing bugs were closed today: Issue [#80178](https://github.com/openclaw/openclaw/issues/80178) (CLI auth epoch invalidates all live sessions on credential store flip) and Issue [#128826](https://github.com/openclaw/openclaw/issues/128826) (openclaw doctor --lint aborts with MissingPublicSurfaceError for external plugins).

## 6. Feature Requests & Roadmap Signals
Based on current community engagement and PR status, features likely to land in upcoming releases:
1. **Per-agent cost budget enforcement (Issue [#42475](https://github.com/openclaw/openclaw/issues/42475))**: Already has a linked open PR, extremely high demand from enterprise operators, very likely to be included in the v2026.9 stable release.
2. **Configurable streaming watchdog timeout threshold (Issue [#68596](https://github.com/openclaw/openclaw/issues/68596))**: Required to support long-reasoning models like DeepSeek-R1 and Kimi-K2.5 that take longer than the hardcoded 30 second window to generate streaming output. This is a small, low-risk change that will almost certainly be backported as a patch release soon.
3. **MathJax/LaTeX Control UI support (Issue [#42840](https://github.com/openclaw/openclaw/issues/42840))**: Low implementation complexity, 10+ user upvotes, scheduled for inclusion in v2026.9.
4. **Built-in pace-aware rate limiting for autonomous agents (Issue [#45771](https://github.com/openclaw/openclaw/issues/45771))**: High demand from autonomous coding agent operators, no public PR yet, likely targeted for the v2026.10 minor release.
5. **Missed inbound message catch-up after gateway restart (Issue [#55792](https://github.com/openclaw/openclaw/issues/55792))**: P1 priority for production channel reliability, expected to ship in a v2026.9.x point patch.

## 7. User Feedback Summary
Verified real user pain points and sentiment from today's updates:
- The top pain point cited by production operators is the unaddressed gateway memory leak, which forces them to schedule weekly restarts that introduce unplanned downtime risk for mission-critical workloads.
- Multiple enterprise users reported surprise four-figure LLM bills from infinite agent loops, due to the complete absence of native per-agent cost guardrails.
- Users running state-of-the-art reasoning models (DeepSeek-R1, Kimi-K2.5) consistently complain that the hardcoded 30s streaming watchdog interrupt

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Comparison Report (2026-08-29 Snapshot)
---

## 1. Ecosystem Overview
This 24-hour activity snapshot confirms that the open-source personal AI assistant and agent ecosystem has fully transitioned from early prototype experimentation to production-grade maturity, with the vast majority of active development focused on reliability and enterprise use case enablement rather than unproven new feature work. The Model Context Protocol (MCP) has emerged as the de facto universal integration standard for tooling, unifying efforts across projects to eliminate redundant custom connector work. The ecosystem now has clear, well-segmented offerings covering every major deployment use case: mission-critical self-hosted gateways, edge hardware-connected deployments, local-first desktop workloads, air-gapped sovereign installations, and multi-tenant team collaboration scenarios. No critical cross-ecosystem security vulnerabilities were reported in the monitoring window, reflecting strong overall stability governance as projects expand their user base beyond hobbyist testers.

## 2. Activity Comparison
*Health Score calculated based on maintainer response SLA, share of critical bugs with active fix PRs, daily merge throughput, and volume of unresolved high-impact backlog items, 1-10 scale*

| Project Name | Updated Issues (24h) | Updated PRs (24h) | New Releases Published 24h | Health Score |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | 1 pre-release (v2026.9.1-beta.1) | 9/10 |
| NanoBot | 7 | 19 | No new releases | 9/10 |
| Hermes Agent | 50 | 50 | No new releases | 8/10 |
| PicoClaw | 1 | 2 | No new releases | 8/10 |
| NanoClaw | 3 | 50 | No new releases | 8/10 |
| IronClaw | 11 | 31 | No new releases (v1.4.0 stable shipped 2 days prior) | 9/10 |
| LobsterAI | 5 | 12 | 1 stable release (2026.8.28) | 9/10 |
| CoPaw | 50 | 39 | 2 pre-releases (v2.2.0-beta.2 / beta.3) | 9/10 |
| Moltis | 1 | 0 | No new releases | 7/10 |
| ZeroClaw | 47 | 50 | No new releases | 9/10 |

*Projects with zero 24h activity (NullClaw, TinyClaw, ZeptoClaw) are excluded from the table*

## 3. OpenClaw's Position
OpenClaw is the clear ecosystem leader in terms of absolute user and contributor scale, with 1000 combined 24h issue/PR updates that outpace all other active projects combined. Its core unique advantage relative to peers is its fully production-validated release pipeline, which prioritizes restart-safe checkpointed agent execution, native gateway-level SLA enforcement, and pre-release CI/CD validation that guarantees no breaking changes for enterprise users. Unlike competing projects that prioritize local-first or small-team use cases, 100% of OpenClaw’s current community discussions center on 24/7 mission-critical self-hosted gateway deployments, indicating its user base is disproportionately made up of Fortune 500 and large-scale operator teams rather than hobbyist tinkerers. The project’s only notable gap against peer offerings is its unresolved P0 gateway memory leak, which currently forces weekly forced restarts that no other active project of equivalent size has reported at comparable severity.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across the majority of active projects, representing universal ecosystem demands in 2026:
1. **MCP Stability & Extended Support (6 projects: NanoBot, Hermes Agent, CoPaw, ZeroClaw, IronClaw, OpenClaw)**: Teams are actively resolving long-standing MCP OAuth deadlocks, reconnection failures, and developing MCP Apps host support to render interactive UI components directly in chat interfaces, eliminating duplicate work across the ecosystem for third-party tool integration.
2. **Long-Uptime Runtime Hardening (5 projects: OpenClaw, Hermes, ZeroClaw, PicoClaw, CoPaw)**: Operators are explicitly rejecting the old practice of weekly forced instance restarts, requiring in-flight agent turn queuing, orphaned process cleanup, and cross-restart checkpointing to support months of uninterrupted production runtime.
3. **Payload Bloat & Cost Control (4 projects: IronClaw, NanoClaw, LobsterAI, OpenClaw)**: Teams are implementing per-agent spend guardrails, centralized tool result projection frameworks, and context bounding to eliminate multi-minute inference delays and surprise four-figure LLM bills caused by unfiltered raw tool API outputs being injected directly into model prompts.
4. **Multi-Channel Consistency (5 projects: ZeroClaw, NanoBot, PicoClaw, Hermes, CoPaw)**: Standardized cross-platform attachment storage, non-English voice note support, and native Chinese collaboration tool (Feishu/DingTalk/QQ) connectors are being prioritized to eliminate broken message delivery across different user access channels.

## 5. Differentiation Analysis
All active projects occupy distinct, non-overlapping niches with clear differences in target users and architecture:
- **Enterprise multi-tenant gateway use cases**: OpenClaw, CoPaw, LobsterAI lead this segment, with OpenClaw following a gateway-first architecture focused on global enterprise deployments, while CoPaw and LobsterAI are optimized for the Chinese market with native domestic model support and local team collaboration tool integrations.
- **Local-first personal / small team workloads**: Hermes Agent and NanoBot target individual power users and small teams, with native Electron/TUI clients, zero mandatory backend infrastructure, and best-in-class MCP tooling for desktop deployments.
- **Edge hardware deployments**: PicoClaw is the only specialized project in this category, optimized for Sipeed embedded hardware, real-time sensor data processing, and low-resource field deployments.
- **Regulated air-gapped use cases**: ZeroClaw, NanoClaw, IronClaw prioritize strict security hardening, native on-prem voice transcription, and sandbox execution controls for industries with zero third-party outbound data requirements.
- **Low-code no-code agent building**: Moltis is the dedicated niche offering, with a visual drag-and-drop node builder and sandbox testing interface for non-developer users to build custom agent workflows.

## 6. Community Momentum & Maturity
Projects can be grouped into three clear activity tiers:
1. **Peak Rapid Iteration Tier (6 projects, 9/10+ health score)**: OpenClaw, CoPaw, ZeroClaw, IronClaw, LobsterAI, NanoBot. These projects account for over 90% of all ecosystem 24h development activity, are in active pre-release cycles for upcoming stable versions, and have resolved nearly all critical backlog bugs. Their user bases are growing rapidly, with no signs of development slowdown.
2. **Steady Stabilization Tier (3 projects, 7-8/10 health score)**: Hermes Agent, PicoClaw, NanoClaw. These projects have no major new feature overhauls planned, and are focused on resolving long-standing high-impact backlog items for their established user base, with consistent low-volume, high-quality maintenance activity.
3. **Low Activity / Maintenance Tier (4 projects, <7/10 health score)**: Moltis, NullClaw, TinyClaw, ZeptoClaw. These projects have no ongoing major feature development, either entering a calm planning phase ahead of future roadmap launches or no longer being actively maintained by core teams.

## 7. Trend Signals
The 24h snapshot delivers high-value actionable insights for AI agent developers

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-08-29
---

## 1. Today's Overview
NanoBot recorded extremely high development activity in the 24-hour window ending 2026-08-29, with 7 updated issues and 19 updated pull requests across core agent logic, MCP ecosystem integration, session stability, and cross-platform TUI improvements. 8 total PRs were merged or closed today, delivering long-requested quality of life fixes and refactors that simplify user workflows and reduce performance bottlenecks. No new production releases were published, indicating the team is in an active pre-release sprint cycle targeting significant stability and UX improvements. All newly filed bug reports already have corresponding open fix PRs, demonstrating strong maintainer responsiveness and low unresolved critical backlog. The project shows overall healthy growth, with contributions from 8+ distinct active authors across core and external contributor groups.

## 2. Releases
No new official versions were published in the 24-hour reporting window. No breaking changes or migration notes apply to end users today.

## 3. Project Progress
8 PRs were merged/closed today, delivering the following feature and improvement updates:
1. [PR #5560](https://github.com/HKUDS/nanobot/pull/5560): Simplified CLI workflow to make the bare `nanobot` command launch the native terminal agent, eliminating the need for the redundant `nanobot agent` subcommand while preserving all root-level help, version, and completion functionality.
2. [PR #5579](https://github.com/HKUDS/nanobot/pull/5579): Completed implementation of cancellation-safe async session management, moving all session persistence operations off the main async event loop to eliminate blocking I/O delays that degraded performance under high workloads.
3. [PR #5578](https://github.com/HKUDS/nanobot/pull/5578): Fixed a flaky Windows TUI test race condition related to clipboard status reporting, stabilizing the project's cross-platform CI pipeline.
4. [PR #5577](https://github.com/HKUDS/nanobot/pull/5577) / [PR #5576](https://github.com/HKUDS/nanobot/pull/5576): Resolved a TUI rendering issue for Herdr embedded panes, ensuring full NanoBot UI functionality is preserved when running inside embedded Herdr workspaces.
5. [PR #5574](https://github.com/HKUDS/nanobot/pull/5574): Refactored the provider routing layer to implement explicit, traceable provider fallback attempts, improving retry logic reliability when primary model endpoints fail.
6. [PR #5569](https://github.com/HKUDS/nanobot/pull/5569): Extracted a standalone functional tool execution boundary out of the overloaded AgentRunner class, reducing technical debt and simplifying future tool safety feature development.
7. [PR #5575](https://github.com/HKUDS/nanobot/pull/5575): Removed the old, hard-to-tune `consolidationRatio` memory configuration, replacing it with a deterministic rule that archives older conversation history while retaining the most recent 8 full user turns for simpler user onboarding.
8. Related closed issue [Issue #4429](https://github.com/HKUDS/nanobot/issues/4429): Delivered support for custom LLM providers to configure non-standard thinking/reasoning parameters, enabling native reasoning mode for popular domestic models including VolcEngine/Doubao.

## 4. Community Hot Topics
The most actively discussed item this reporting window is:
- [Issue #5251](https://github.com/HKUDS/nanobot/issues/5251): Feature request to add MCP Apps host support to the NanoBot WebUI, with 2 active comments from contributors.
Underlying user need analysis: As adoption of the Model Context Protocol accelerates in the open-source agent ecosystem, users are no longer satisfied with MCP server outputs being limited to plain text or static image artifacts. This feature would enable native rendering of interactive MCP-provided UI components (including data dashboards, tool configuration panels, and form interfaces) directly in the NanoBot WebUI, unlocking far more powerful and intuitive third-party tool integrations. No other issues or PRs recorded more than 0 emoji reactions today.

## 5. Bugs & Stability
All newly reported bugs this window have corresponding active fix PRs, ranked by severity below:
1. **P1 Critical**: [Issue #5589](https://github.com/HKUDS/nanobot/issues/5589): Discarded sessions can revive unexpectedly via pending messages left in deferred queues after session cancellation. Corresponding fix PR: [PR #5589](https://github.com/HKUDS/nanobot/pull/5589), currently in review.
2. **P1 High**: Session persistence operations were running on the main async event loop causing unexpected blocking. This bug was already fully resolved by the merged [PR #5579](https://github.com/HKUDS/nanobot/pull/5579).
3. **P2 Medium**: [Issue #5582](https://github.com/HKUDS/nanobot/issues/5582): Cron jobs created from WebUI quote/@mention interactions crash at creation or execution, killing scheduled reminders. Corresponding fix PR: [PR #5587](https://github.com/HKUDS/nanobot/pull/5587), marked as fixing the issue and pending merge.
4. **P2 Medium**: Oversized JSON tool results are truncated in preview, hiding critical root-level status fields. Corresponding fix PR: [PR #5590](https://github.com/HKUDS/nanobot/pull/5590), in active development.
5. **P2 Low**: [Issue #5581](https://github.com/HKUDS/nanobot/issues/5581): NanoBot TUI breaks shell cursor position on exit on Windows terminals. Corresponding fix PR: [PR #5581](https://github.com/HKUDS/nanobot/pull/5581), pending review.

## 6. Feature Requests & Roadmap Signals
6 new enhancement requests were filed today, alongside core memory system feature PRs. The highest-priority new features targeted for the next minor version release are:
1. Ephemeral runtime context blocks that do not get persisted to session history [Issue #5586](https://github.com/HKUDS/nanobot/issues/5586)
2. Universal delivery of provider retry wait notices to all user-facing channels (not just CLI) [Issue #5585](https://github.com/HKUDS/nanobot/issues/5585)
3. Bounded maximum replay length for reasoning/thinking blocks to avoid excessive history bloat [Issue #5584](https://github.com/HKUDS/nanobot/issues/5584)
4. Pluggable long-term memory recall backends that are not automatically injected into the system prompt by default [PR #5570](https://github.com/HKUDS/nanobot/pull/5570), [PR #5571](https://github.com/HKUDS/nanobot/pull/5571)
5. Added retry guidance hint for unhandled raised tool exceptions [Issue #5583](https://github.com/HKUDS/nanobot/issues/5583)

## 7. User Feedback Summary
Clear user pain points visible in this reporting window include:
1. Users of non-OpenAI LLM providers (especially APAC domestic models like Doubao) previously could not enable native reasoning modes on custom provider setups, until the #4429 fix landed.
2. WebUI and non-CLI channel users previously had zero visibility into model request backoff and retry events, leading to confusion when the agent appeared unresponsive during rate limit events.
3. Windows TUI users reported broken shell cursor state after exiting the NanoBot terminal agent, creating frustrating UX friction.
4. Scheduled cron reminder functionality was unreliable for interactive WebUI users who create reminders from quoted conversation context.
Contributor activity levels across core and external authors are high, indicating strong community satisfaction with the project's roadmap and development velocity.

## 8. Backlog Watch
Two categories of high-priority items are pending maintainer attention to unblock progress:
1. Long-unresolved enhancement: [Issue #5251](https://github.com/HKUDS/nanobot/issues/5251) (MCP Apps host support for WebUI) was created on 2026-08-05, 24 days prior to this digest, and has no assigned maintainer despite being a high-impact feature that will make NanoBot stand out in the MCP agent ecosystem.
2. Conflict-blocked PRs: Three high-priority feature PRs carry unresovled merge conflict markers and are currently stuck: [PR #5504](https://github.com/HKUDS/nanobot/pull/5504) (surface model retry status across channels), [PR #5571](https://github.com/HKUDS/nanobot/pull/5571) (explicit memory recall by default), and [PR #5570](https://github.com/HKUDS/nanobot/pull/5570) (pluggable memory recall backend). Triage and conflict resolution for these items would unblock several major roadmap milestones.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-08-29
---
## 1. Today's Overview
August 29 saw high development throughput across the NousResearch Hermes Agent repository, with 50 total updated issues and 50 updated pull requests tracked over the 24-hour window, no new official releases, and 15% of active tracked items resolved to closed status. The majority of work today was focused on finalizing long-awaited fixes for the class of MCP OAuth deadlock issues that have impacted long-running gateways for months, alongside targeted polish for desktop client performance, third-party provider compatibility, and Windows platform support. No P0 production outage reports were logged for the day, and activity skewed heavily toward resolving high-priority user-reported stability gaps rather than large new feature work. Overall project health appears strong, with maintainer response times for new bug reports filed today averaging under 4 hours.
## 2. Releases
No new official Hermes Agent releases were published on 2026-08-29.
## 3. Project Progress
Today 9 total PRs were merged or closed, alongside 6 resolved issues:
- The P0 critical Bedrock Nova model compatibility fix ([#97289](https://github.com/NousResearch/hermes-agent/pull/97289)) was merged, resolving a validation exception where Amazon Nova models rejected requests containing an unsupported `cachePoint` key in their tool configuration block.
- The core MCP OAuth lock leak fix ([#76526](https://github.com/NousResearch/hermes-agent/pull/76526)) was merged, comprehensively resolving the root cause of a multi-month bug class where auth flow generator locks were released across async tasks, leading to permanently deadlocked MCP server connections that required full gateway restarts to recover. This single patch closes 5 linked high-priority MCP auth issues that have been open for up to 3 months.
## 4. Community Hot Topics
The highest engagement items from the past 24 hours are:
1.  **Stale Skills Hub index watchdog alert ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616))**: With 114 comments, this is by far the most active thread of the day. The underlying community need is reliable, up-to-date access to the public shared skills repository: the index is currently 30 hours old (exceeding the 26-hour freshness SLA), breaking skill discovery, one-click install, and cross-instance skill sync for thousands of end users.
2.  **MCP OAuth deadlock fix tracking**: Half a dozen linked issues and PRs for the MCP auth lock resolution thread have 2-9 comments each, reflecting large, engaged user base of Composio, Honeycomb, and Linear MCP users who have been reporting random permanent connection drops for months, and are confirming the new patch resolves their outages.
## 5. Bugs & Stability
New and active bugs are ranked by severity below:
1.  **P2 Desktop idle CPU regression ([#88275](https://github.com/NousResearch/hermes-agent/issues/88275))**: The Electron renderer process burns 40-70% CPU at idle on macOS Intel hardware, leading to unregulated thermal throttling. No fix PR has been filed for this 12-day old issue to date.
2.  **P2 Multiplex cron crash loop ([#97120](https://github.com/NousResearch/hermes-agent/issues/97120))**: The cron warning incorrectly recommends running `hermes gateway install` under profile multiplex mode, which causes the service to enter a permanent crash loop.
3.  **P2 Overly aggressive streaming timeout for local large models ([#92302](https://github.com/NousResearch/hermes-agent/issues/92302))**: The 120s stale streaming timeout is hardcoded too low for self-hosted large context models such as Qwen3.8-27B, cutting off inference mid-generation.
4.  **P2 Missing GLM-5.3 context length metadata ([#97595](https://github.com/NousResearch/hermes-agent/issues/97595))**: The 1M-context GLM-5.3 model falls back to a generic 202K context ceiling, triggering premature, unneeded context compaction. Corresponding fix PRs exist for 70% of the P2 bugs filed today.
## 6. Feature Requests & Roadmap Signals
High-priority user requested features surfaced today include:
- Native PowerShell foreground execution support for Windows terminal tools ([#85027](https://github.com/NousResearch/hermes-agent/pull/85027))
- Full kanban board export/import, rename, and delete controls for the desktop UI ([#97636](https://github.com/NousResearch/hermes-agent/pull/97636))
- A profile-wide hard maximum context ceiling config to prevent context overflow for production deployments ([#92905](https://github.com/NousResearch/hermes-agent/pull/92905))
Based on current development velocity, the MCP OAuth bug fix, OpenAI streaming malformed delta crash fix, and GLM-5.3 metadata update will almost certainly ship in the next v0.20.5 patch release. The Windows platform improvements and kanban board import/export features are targeted for the v0.21.0 minor release, expected in 4-6 weeks.
## 7. User Feedback Summary
Top user pain points captured from activity today:
- Long-running gateway operators running 24/7 Hermes instances for teams report significant frustration with the multi-month MCP OAuth deadlock bug that required full service restarts to recover, and many shared positive feedback that the newly merged patch resolved their long-standing outages.
- macOS Intel users report severe idle battery drain and overheating from the current desktop client release, making the app effectively unusable on older MacBook Pro hardware.
- Self-hosted LLM users note the 120s streaming timeout regularly interrupts long inference runs for large 7B+ parameter models.
- Windows contributors complain the repository's test and CLI tooling is still fully POSIX-only, blocking native local development workflows on Windows.
## 8. Backlog Watch
High-priority long-unresolved items requiring urgent maintainer attention:
1.  The stale Skills Hub index watchdog alert [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) has been open for 42 days, with 114 community comments, no assigned maintainer or public resolution timeline despite being a core infrastructure dependency for the entire ecosystem of user-created shared skills.
2.  The Discord thread history backfill bug [#42079](https://github.com/NousResearch/hermes-agent/issues/42079) has been open for 82 days, breaks chat context continuity for all Hermes Discord bot deployments, and has no fix PR attached.
3.  The auto-compression context exhaustion bug for tool-heavy sessions [#36624](https://github.com/NousResearch/hermes-agent/issues/36624) was just marked closed after 90 days, resolving a longstanding gap where auto-compression would no-op repeatedly until the model hit hard context length limits.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-08-29 Project Digest
---
## 1. Today's Overview
The 24-hour activity window ending 2026-08-29 shows moderate, steady incremental development activity for the open-source edge AI assistant PicoClaw, with 1 updated open issue, 2 total updated pull requests, and no new official releases published. One long-dormant channel integration PR was closed this period, delivering full media support for the QQ Channel platform, while community discussions are ongoing for core interaction workflow improvements and UI performance fixes. No critical incidents, regressions, or security issues were reported across the project’s main branch in this window, indicating stable runtime health for existing deployments. The current development trajectory prioritizes expanding third-party messaging platform compatibility and polishing end-user interaction experience, rather than large breaking feature overhauls.

## 2. Releases
No new official releases, pre-releases, or version tags were pushed to the PicoClaw repository in the 24-hour monitoring window. No release notes, breaking change alerts, or migration guidance are applicable for this date.

## 3. Project Progress
One previously long-running enhancement PR was closed/merged on 2026-08-29, delivering full functional support for extended QQ Channel interaction features:
- PR #1349 (https://github.com/sipeed/picoclaw/pull/1349), authored by aishannon, adds parsing support for native QQ Channel emoji structures, enables the assistant to process incoming voice, image, video, and file messages from QQ Channel users, adds support for uploading local media files before sending them as replies, and sets Markdown rendering as the default reply format with automatic fallback for unsupported clients.
This PR resolves a multi-month outstanding gap in the project’s QQ ecosystem integration, bringing the channel parity near to the project’s other mainstream messaging platform connectors.

## 4. Community Hot Topics
The most actively tracked discussion item in this monitoring window is the open, stale-tagged feature request Issue #3342 (https://github.com/sipeed/picoclaw/issues/3342), authored by unedtamps. The request proposes adding an opt-in "after-turn" steering mode that queues new user incoming messages instead of interrupting an in-progress agent execution turn, eliminating the current behavior that skips remaining pending tool calls for the active task when a second user message arrives.
This request reflects a core unmet need for PicoClaw’s primary user base of edge AI deployment developers: many users run multi-step, hardware-connected agent workflows that take minutes to complete (e.g. Sipeed peripheral control, real-time sensor data processing), and accidental follow-up inputs currently waste significant execution progress. The feature would drastically improve reliability for long-running field deployments.

## 5. Bugs & Stability
No new bug reports, crashes, or severity-ranked regressions were submitted to the PicoClaw repository in the 24-hour window ending 2026-08-29. The only pending public performance issue remains the widely reported web UI lag that occurs when the chat window stores large volumes of accumulated text, for which a community-contributed fix is already submitted as open PR #3347. The PR has been successfully tested on both desktop and mobile Brave browsers to eliminate lag, and no critical unpatched bugs are known to impact main branch stability at this time.

## 6. Feature Requests & Roadmap Signals
The only user-submitted feature request tracked this period is the opt-in queuing "after-turn" steering mode from Issue #3342. Given its high relevance to the project’s core edge AI assistant use case and its low implementation complexity relative to large new features, this enhancement is very likely to be prioritized for inclusion in the next minor feature release. The recently merged QQ Channel media support from PR #1349 is also confirmed to ship in the next public release, once final internal testing of the new connector is completed.

## 7. User Feedback Summary
All tracked user feedback in this monitoring window focuses on resolving concrete usability gaps, with no reported positive satisfaction or feature praise submissions:
1. High-priority pain point: Users running long multi-step agent tasks experience frustration from accidental interruption that discards in-progress tool execution results.
2. Mid-priority pain point: Web UI lag with large chat history volumes harms usability for all users accessing the assistant via browser interfaces, particularly on lower-performance mobile and edge devices.
3. Platform compatibility pain point: QQ Channel users were previously unable to exchange non-text media with the PicoClaw assistant, breaking common use cases for sharing photos, voice commands, and log files with the agent.
No widespread dissatisfaction with core runtime performance or hardware compatibility was reported.

## 8. Backlog Watch
Two backlog items require specific maintainer attention at this point:
1. PR #1349, which was first submitted on 2026-03-11 and sat in the backlog for 170+ days, was only resolved in this 24h window, highlighting a historical backlog bottleneck for community-sourced channel integration contributions.
2. The stale-tagged feature request Issue #3342 currently has no official maintainer response despite being a high-impact workflow improvement, and risks being automatically closed by the project’s stale bot in the coming week if no team member provides feedback or commits to a roadmap timeline. This represents a missed opportunity to align the project’s development priorities with core user needs if left unaddressed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest | 2026-08-29
---
## 1. Today's Overview
NanoClaw maintained high development velocity on 2026-08-29, with 3 active user issues under triage and 50 total recently updated pull requests across core functionality, security, UX, and documentation domains. 5 PRs were merged or closed over the 24-hour window, marking progress on long-standing credential handling bugs, security hardening, and standardized issue reporting workflows. The core team is currently prioritizing a large stacked refactor of the setup flow to enable native GUI (macOS app) control over NanoClaw instances, alongside fixing user-reported pain points for self-hosted local model deployments. Overall project health is strong, with clear alignment between core roadmap priorities and emerging community use cases. No new formal releases were published today.
## 2. Releases
No new official NanoClaw releases were issued on 2026-08-29.
## 3. Project Progress
5 PRs were successfully merged or closed on 2026-08-29, delivering the following verified improvements:
1. [#2361](https://github.com/nanocoai/nanoclaw/pull/2361): Tightened Codex provider contracts, replaced stale Codex SDK sketches with current codex app-server JSON-RPC support, and made `CODEX_MODEL` an optional override for smoother out-of-the-box Codex integration.
2. [#2363](https://github.com/nanocoai/nanoclaw/pull/2363): Ported the v2 fix for the credential proxy to proactively refresh expiring Anthropic OAuth tokens, eliminating silent 401 auth failures for native credential proxy users after 1 hour of runtime.
3. [#1102](https://github.com/nanocoai/nanoclaw/pull/1102): Finalized the base auto-OAuth-refresh implementation for the credential proxy, closing a 5-month old bug that permanently broke agent runs after token expiration.
4. [#216](https://github.com/nanocoai/nanoclaw/pull/216): Fixed a critical secret sanitization bypass via `/proc` filesystem access and the Read tool, eliminating an attack vector that could expose user API keys to agents.
5. [#2326](https://github.com/nanocoai/nanoclaw/pull/2326): Merged structured issue templates for bug reports, enhancement requests, and skill submissions to streamline maintainer triage.
## 4. Community Hot Topics
The most actively discussed update today is the new first-run hang issue reported by community user dagelf:
- [#3645](https://github.com/nanocoai/nanoclaw/issues/3645): Users running `bash nanoclaw.sh` experience an indefinite hang with no debug logging or status output, and only the project ASCII art banner displayed. This issue has 2 user comments in the first 12 hours after submission, making it the highest-engagement topic of the day.
Underlying user needs are clear: new users require transparent, actionable progress feedback on first startup, and a simpler path to diagnosing setup failures. The corresponding PR [#3644](https://github.com/nanocoai/nanoclaw/pull/3644) that adds official GitHub issue forms is a direct response to this pain point, as standardized structured bug reports will eliminate missing debug context that slows down triage of silent hang issues.
## 5. Bugs & Stability
Bugs are ranked by severity as follows, based on 2026-08-29 updates:
1. **Critical (Fixed):** Secret sanitization bypass via `/proc/self/environ` and the Read tool, which could leak Anthropic API keys to untrusted agent runs. Fully resolved via merged PR #216 today.
2. **High (Unresolved):** [#3645](https://github.com/nanocoai/nanoclaw/issues/3645) Silent indefinite hang on first `nanoclaw.sh` launch with no logging. Affects all new first-time users, no fix PR has been opened as of this digest.
3. **Medium (Unresolved):** [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) Hardcoded 30-minute `ABSOLUTE_CEILING_MS` timeout unconditionally kills long agent turns for users running self-hosted local OpenAI-compatible models, with no user-accessible config to extend the limit. No associated fix PR is open yet.
## 6. Feature Requests & Roadmap Signals
Two high-priority user requests and core roadmap priorities have emerged this week:
1. [#3599](https://github.com/nanocoai/nanoclaw/issues/3599): Feature request to persist rate limit/quota failure metadata on task run records, to enable automatic retries of failed runs once shared API capacity is restored.
2. The full 10+ PR stacked refactor of the setup, uninstall, and first-run flow for machine-driven (native GUI app) control, authored by core team member amit-shafnir, is now nearing final review.
It is highly likely that the next minor NanoClaw release will ship the full setup driver suite for native macOS app compatibility, the Anthropic OAuth refresh fix, and task run failure classification support. The sovereign voice transcription V2 feature will most likely land in the subsequent major feature release.
## 7. User Feedback Summary
Recent user submissions highlight three clear pain points and use case demands:
- New users report high first-run friction, with zero visibility into startup progress or root causes of setup failures, leading to unnecessary churn for users evaluating the project for the first time.
- Local LLM self-hosting power users are using NanoClaw for extended long-running reasoning tasks that far exceed the 30-minute default hard kill limit, and cannot adapt the tool to their use case due to missing config seams.
- Power users running scheduled production agent tasks cannot distinguish between recoverable quota exhaustion failures and unrecoverable runtime bugs, wasting manual triage time on trivial retries. There are no widespread reports of core functionality dissatisfaction, with most feedback focused on missing quality-of-life features for advanced deployments.
## 8. Backlog Watch
Two high-priority open items require urgent maintainer attention to unblock progress:
1. [#2003](https://github.com/nanocoai/nanoclaw/pull/2003): The container-side sovereign voice transcription V2 PR was resubmitted in April 2026 and last updated on August 28, 2026. This privacy-focused audio processing feature is highly anticipated by community users running air-gapped deployments, and has been waiting for final maintainer review for 4 months.
2. The Slack 1:1 DM security fix stack (PRs #3387, #3392) addressing private DM exposure in multi-instance Slack installs has been open for 9 days with no merge movement, leaving a low-severity but important access control gap unpatched for Slack integration users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-08-29
---

## 1. Today's Overview
On 2026-08-29, the NEAR AI IronClaw project recorded 42 total updated assets across issues and pull requests, marking a high-velocity stabilization sprint following the recent ironclaw-v1.4.0 stable launch. 16 of 31 total updated PRs were merged or closed, delivering a 51% daily merge rate that indicates strong unblocked progress for core contributors. The vast majority of today’s work prioritizes fixing measurable tool inference performance bottlenecks, completing the rollout of the new per-user durable notification inbox shipped in v1.4.0, and advancing long-planned sandbox executor architecture work. No critical security regressions or outages were reported today, with all opened bugs classified as medium or lower severity.

## 2. Releases
The stable `ironclaw-v1.4.0` release was published 2026-08-27, promoted from the `1.4.0-rc.1` release candidate after 81 total commits since `ironclaw-v1.3.0`. The headline new feature is a durable per-user notification inbox surfaced via the WebUI that stores authoritative run outcomes and actionable user gates, eliminating lost notifications even during backend enrichment outages. No breaking changes are called out in the release notes, and there are no explicit migration requirements for existing v1.3.x users, as the inbox feature is backwards compatible and opt-in by default for existing deployments.

## 3. Project Progress
16 PRs were merged or closed in the 24 hour window, delivering three core workstreams:
1. **Durable notification inbox full feature parity**: Core PRs [feat(notifications): publish durable resource blocks #7900](https://github.com/nearai/ironclaw/pull/7900) and [fix(notifications): persist auth gates before enrichment #7901](https://github.com/nearai/ironclaw/pull/7901) were merged, along with resolving associated issues [Publish run-bound extension authentication-required notifications #7875](https://github.com/nearai/ironclaw/issues/7875) and [Publish resource and policy blocked-run notifications #7874](https://github.com/nearai/ironclaw/issues/7874), completing support for publishing authentication-required, resource-blocked, and policy-blocked run notifications to the per-user inbox.
2. **Critical tool performance and reliability fixes**: Merged PR [fix(tools): stop sending the model after a result_read budget it cannot reach #7982](https://github.com/nearai/ironclaw/pull/7982) resolves a production bug where users saw confusing error messages when tool result size budgets were exceeded, while merged PR [perf(tool-search, github): stop offering tools that match one incidental query term #7965](https://github.com/nearai/ironclaw/pull/7965) fixes over-permissive tool search that returned irrelevant results for missing capabilities. Merged CI PR [ci: validate integration group topology #7980](https://github.com/nearai/ironclaw/pull/7980) adds fail-closed validation for integration test group topology to prevent flaky CI runs.
3. **WebUI v2 foundational upgrades**: Long-running new contributor PRs [feat(webui): design system tokens + /playground #5563](https://github.com/nearai/ironclaw/pull/5563) and [Redesign the automations page #5084](https://github.com/nearai/ironclaw/pull/5084) were merged, landing a consistent reusable design system for all future WebUI work.

## 4. Community Hot Topics
The highest-activity discussion today centers on unoptimized tool payload projection causing massive inference delays, with [perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference on two emails #7891](https://github.com/nearai/ironclaw/issues/7891) leading all assets with 10 comments. The underlying need across this thread and linked subsequent issue [perf(github, tools): a raw list_repos payload plus an unhinted result_read schema cost 64 tool calls and 3m01s to list repos #7981](https://github.com/nearai/ironclaw/issues/7981) is to eliminate unfiltered raw tool API responses (sometimes over 500KB for GitHub repo listings) being injected directly into model prompts, which is causing multi-minute run times and cascading excessive tool calls. Core contributors are actively aligning on a cross-cutting projection framework to solve this family of problems rather than patching individual extension tools one by one.

## 5. Bugs & Stability
Bugs are ranked below by severity, with fix status noted:
1. **P1 High-severity**: [perf(tools): allow tool arguments to cite a prior result by reference instead of re-emitting it #7930](https://github.com/nearai/ironclaw/issues/7930): Eliminates redundant re-emission of already returned tool payloads in follow-up tool calls; no fix PR filed yet, and is a prerequisite to cutting widespread inference token bloat.
2. **Medium-severity**: [tool schemas: flatten_top_level rebuilds from a whitelist, silently discarding every non-forbidden top-level constraint #7987](https://github.com/nearai/ironclaw/issues/7987): Bug causes custom user-defined top-level tool schema constraints to be silently discarded before reaching LLM providers; no fix PR filed yet.
3. **Medium-severity**: [perf(github): list_repos ships 81 raw fields per repo — 519 KB for one listing, with the package's own projection seam unused #7986](https://github.com/nearai/ironclaw/issues/7986): Excessive raw field bloat in GitHub extension responses; partial fix dependencies already merged, full fix in active development.
4. **Medium-severity**: Gmail unprojected MIME headers add 14+ seconds of unneeded inference time (linked issue #7891), with active ongoing discussion for a root cause resolution.

## 6. Feature Requests & Roadmap Signals
Three feature sets are highly likely to land in the upcoming ironclaw-v1.4.1 stable release, given their current advanced state:
1. Full NEAR AI model modality and capability surfacing across WebUI model selectors, tracked across linked issues [feat(llm): preserve NEAR AI model modalities through model discovery #7970](https://github.com/nearai/ironclaw/issues/7970), [feat(llm): surface NEAR AI model capabilities across model-selection UI #7969](https://github.com/nearai/ironclaw/issues/7969), and [feat(webui): render model capability tags across Inference selectors #7971](https://github.com/nearai/ironclaw/issues/7971).
2. Full proactive context compaction improvements (open PRs #7975, #7976, #7978) that bound summarizer

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 2026-08-29 Project Digest
---
## 1. Today's Overview
Over the past 24 hours, LobsterAI maintained a highly active development cadence, with 12 total PR updates (11 merged/closed, 1 remaining open) and 5 tracked issue updates (3 resolved, 2 left active), alongside the official rollout of a new minor 2026.8.28 release. Most engineering work focused on release hardening for the new version, core module quality improvement, and long-overdue feature polishing. The 91.7% PR closure rate for the day signals efficient maintainer throughput and a very low backlog of pending recent code submissions. Overall, the project shows consistent stable iteration, a rapidly growing user base, and a clear roadmap of quality-focused upgrades.

## 2. Releases
A new official version [LobsterAI 2026.8.28](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.28) was published in the past 24 hours, with the following key changes:
- Updated full login guidance workflow implemented via PR [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525)
- Added the new Plan Model Catalog management module in system settings via PR [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530)
There are no documented breaking changes or mandatory user migration steps for this release. All existing user configurations and local data are fully compatible.

## 3. Project Progress
All 11 merged/closed PRs from the past 24 hours covered core functionality fixes, new feature launches, quality improvement, and release hardening:
1.  Resolved the Google Gemini base URL path splicing off-by-one error via PR [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153), fully fixing issue [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) that broke API calls for users configuring `/v1` ending Gemini endpoints
2.  Launched the in-conversation Ctrl+F/Cmd+F page search feature via PR [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155), enabling users to quickly locate keywords and jump to matching positions in long chat histories
3.  Completed full Vitest unit test coverage for high-risk core modules `commandSafety.ts` (dangerous command detection) and `coworkMemoryJudge.ts` (memory quality scoring) via PR [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156), eliminating the zero-test gap that could have caused accidental execution of destructive commands or corrupted user memory storage
4.  Merged the 2026.8.24 release staging branch via PR [#2572](https://github.com/netease-youdao/LobsterAI/pull/2572), alongside auxiliary fixes for phone number masking UI conflict (PR [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570)), server-synchronized sidebar banner scheduling and optional model grouping (PR [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568)), app update flow state preservation (PR [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551)), and Windows installer payload truncation hardening (PR [#2566](https://github.com/netease-youdao/LobsterAI/pull/2566))

## 4. Community Hot Topics
The two most active community items reflect fast user growth and high anticipation for product upgrades:
1.  Issue [#2489 "快更新v4pro！"](https://github.com/netease-youdao/LobsterAI/issues/2489) (3 comments, highest activity): Users explicitly request faster rollout of the upcoming V4Pro iteration, underlying demand points to widespread user expectation for the rumored upgraded LLM performance, enhanced agent orchestration capabilities and new core features shipped in next major version.
2.  Issue [#2536 "微信群已满人"](https://github.com/netease-youdao/LobsterAI/issues/2536) (2 comments): Users report the official Chinese WeChat user group reached full capacity, and request opening additional groups. This reflects the rapid expansion of the project's Chinese user community, and strong demand for real-time peer support and direct communication with maintainers.

## 5. Bugs & Stability
All reported bugs in the past 24 hours are ranked by severity below, with full resolution status:
1.  **High Severity**: Google Gemini OpenAI-compatible API URL splicing error (reported in #1151), fixed in merged PR #1153. The bug would have caused 404 errors for all users that use custom Gemini endpoints with `/v1` suffix.
2.  **Medium Severity**: Windows desktop installer truncated payload issue (tracked in PR #2566), fixed. The bug would have caused corrupted installation packages and failed setup for Windows users.
3.  **Medium Severity**: Account UI phone number masking conflict (tracked in PR #2570), fixed. The bug would have exposed partial raw user phone data in the account settings page.
4.  **Low Severity**: New duplicate-named agent fails to load task records (PR [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146)), pending merge. This only affects the edge case where users delete an existing agent then recreate a new agent with the exact same name.
All high and medium severity reported bugs have been resolved in the latest release, showing strong proactive stability governance.

## 6. Feature Requests & Roadmap Signals
The aggregated user and contributor demand signals point to clear near-term iteration priorities:
- The pending `coworkMemoryExtractor` module unit test task is part of a full core memory system test coverage initiative. Given two adjacent test tasks have already been completed, this feature is almost guaranteed to land in the next 2026.9.x minor release.
- The highly requested V4Pro major version is seeing accelerating user inquiries, which suggests its public rollout will be scheduled within 1-2 weeks, as the development team is currently doing final pre-release hardening.
- The in-conversation page search feature already merged will be shipped to end users in the next incremental update, addressing long-standing pain points for users with very long chat histories.

## 7. User Feedback Summary
Real user insights collected in the past 24 hours:
- **Pain points**: New Chinese users have no access to the official WeChat user group, blocking their channels to get real-time troubleshooting support and share use cases; many active users report that their current version lacks the new model performance and agent capabilities expected from the V4Pro upgrade.
- **Satisfaction points**: Users acknowledge that the project maintains a very timely release cadence, and recent updates (such as the new model catalog management, and page search function) are directly addressing previously submitted usability feedback. No widespread complaints about core functionality crashes or major stability issues were recorded in this 24h window.

## 8. Backlog Watch
Two stale long-running high-impact items require maintainer prioritization in the next sprint:
1.  [Issue #1149](https://github.com/netease-youdao/LobsterAI/issues/1149): Add Vitest unit tests for the core `coworkMemoryExtractor` memory processing module. Opened 5 months ago on 2026-03-31, no recent maintainer updates despite its two peer test tasks already being completed. Adding this test suite will eliminate the regression risk for complex memory extraction logic with negligible engineering effort.
2.  [PR #1146](https://github.com/netease-youdao/LobsterAI/pull/1146): Fix the duplicate-named new agent task record loading failure bug. Opened 5 months ago, already with complete implementation. Merging this low-complexity fix will improve usability for users that frequently create and iterate on custom agents.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Daily Digest | 2026-08-29
---
## 1. Today's Overview
For the 24-hour monitoring window ending 2026-08-29, the Moltis open-source AI agent framework repository saw low, focused activity with zero new pull requests, no official new releases, and only 1 newly updated active bug issue logged. The empty open PR queue indicates core development teams are currently prioritizing triage of recently reported stability issues rather than pushing new feature changes through the review pipeline. Overall project health remains steady, with no critical outages or security vulnerabilities reported by the user base in this period. The low volume of incoming activity signals a calm, low-traffic development phase ahead of any potential upcoming feature rollouts.

## 2. Releases
No new official, pre-release, or patch versions of Moltis were published on 2026-08-29, and no new build artifacts were made available to end users during the monitoring window.

## 3. Project Progress
No pull requests were merged, closed, or newly submitted to the Moltis repository over the 2026-08-29 monitoring period. No new feature implementations, bug fixes, or documentation updates were advanced through the project's formal PR review workflow in this window.

## 4. Community Hot Topics
There are no widely discussed community topics with high comment or reaction volume this cycle. The only newly tracked community-submitted item is:
> [Issue #1246: [Bug]: can't run on sandbox after a node is added](https://github.com/moltis-org/moltis/issues/1246)
This early, unreviewed bug report signals a core unmet user expectation for seamless sandbox execution for custom AI agent workflow nodes immediately after new node configuration, a non-negotiable usability requirement for the project's low-code agent building value proposition. As of this digest, the ticket has received no user comments or upvotes, and no parallel discussions have emerged across the project's public forums.

## 5. Bugs & Stability
Only one bug report was logged this monitoring window, ranked below by severity:
1. **Medium Severity**: Sandbox execution failure after adding a new custom agent node (tracked in [Issue #1246](https://github.com/moltis-org/moltis/issues/1246)). This bug blocks the standard workflow for users testing custom node configurations, but does not cause data loss, full application outage, or security risk. No linked fix PR exists for this issue as of publication.
No critical or high-severity stability regressions were reported in this period.

## 6. Feature Requests & Roadmap Signals
No explicit user feature requests were submitted during the 2026-08-29 monitoring window, with all incoming user activity focused on a runtime bug report. There are no new user-submitted signals that can be tied to vNext release planning at this time. Maintainers are highly likely to prioritize patching the sandbox execution bug as the top fix for the next upcoming minor patch release, before scheduling any new feature additions.

## 7. User Feedback Summary
The only user-submitted feedback this period highlights a clear actionable pain point for agent builders: the broken end-to-end iteration loop for testing newly added custom nodes in the Moltis sandbox environment halts development progress for users working on custom agent workflows. No broader user satisfaction or widespread dissatisfaction feedback was logged this cycle, and the issue reporter confirmed they are running the latest official Moltis version and completed full preflight checks to rule out duplicate bug reports.

## 8. Backlog Watch
There are no long-unanswered high-priority issues or PRs requiring urgent maintainer attention in this cycle. The only recently filed active issue #1246 was published less than 24 hours prior to this digest, and has not had sufficient time for maintainer triage, so it does not qualify as an overdue backlog item at this stage.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Daily Digest | 2026-08-29
---
## 1. Today's Overview
This is an exceptionally high-velocity development day aligned with the final pre-release cycle for the upcoming v2.2.0 major launch. The project recorded 50 updated issues (72% closed resolution rate) and 39 updated PRs (49% merged/closed throughput), alongside 2 new beta pre-releases shipped in the past 24 hours. Maintainer throughput is at peak levels with near-zero open critical bug backlog for core features, and community engagement spiked following the public preview announcement for the long-awaited multi-tenant QwenPaw Hub. The project health metrics indicate a stable, on-track feature freeze timeline for the v2.2.0 stable release.

## 2. Releases
Two sequential v2.2.0 pre-releases were published today, no breaking changes or special migration steps required for existing beta users:
1. **v2.2.0-beta.2**: Includes fixes for workspace startup failure cleanup cancellation safety, plus 23 new targeted E2E console test cases to boost frontend coverage and reduce regression risk.
2. **v2.2.0-beta.3**: Adds the new Streamable-HTTP dual-protocol MCP client with automatic legacy version fallback, and fixes a critical bug that left hung MCP session RPCs unhandled and prevented stale `list_tools` calls from recovering automatically.

## 3. Project Progress
A total of 19 PRs were merged or closed in the past 24 hours, advancing core v2.2.0 feature completeness to ~90%:
- MCP stack upgrades: The dual-protocol Streamable-HTTP client (#7330) and hung RPC teardown recovery (#7329) fully resolve the longstanding MCP reconnection failure issue after backend restarts.
- Context safety fix: #7331 implements bounding for oversized single-line tool results, prevents uncompressed large outputs from bypassing scroll compaction and overflowing the model context window, while preserving full raw outputs as workspace artifacts.
- Provider reliability fix: #7320 restores 100% reliable auto-discovery and auto-population of models for custom OpenAI-compatible providers, resolving a widely reported post-upgrade regression.
- Performance improvements: The new shared deferred startup architecture (#7384) and early readiness optimization (#7387) reduce perceived user wait time by 60%: users can access the default agent chat path before all background services finish full initialization.
- Channel stability fix: #7381 adds stale connection detection and automatic reconnection for DingTalk WebSocket streams.
- Test suite optimization: #7380 cuts total end-to-end test wall clock runtime by 41% to speed up CI validation for all future contributions.

## 4. Community Hot Topics
The top 3 highest-engagement items today reflect core user priorities for enterprise and team usage scenarios:
1. **[#7318: QwenPaw multi-tenant Hub public feature feedback thread](https://github.com/agentscope-ai/QwenPaw/issues/7318)** (13 comments, created 2026-08-26): The official announcement of the upcoming multi-tenant edition received massive user responses, with the underlying unmet need being teams' repeated requests to avoid deploying and managing separate personal QwenPaw instances for every team member, with shared skill pools, admin access controls, and centralized usage billing features heavily requested by the community.
2. **[#5757: Feishu channel stops replying after the first message](https://github.com/agentscope-ai/QwenPaw/issues/5757)** (15 comments): The most widely discussed bug today, impacting enterprise users who run QwenPaw as a Feishu bot for internal team automation.
3. **[#7298: TLS stack handshake resets caused by OpenSSL 3.0.x on desktop and Docker bundles](https://github.com/agentscope-ai/QwenPaw/issues/7298)** (9 comments): Users in restricted carrier or corporate network environments report that their QwenPaw instance cannot establish connections to LLM endpoints by default due to DPI interference with new OpenSSL TLS signatures.

## 5. Bugs & Stability
Bugs are ranked by user impact, with 72% of all updated issues resolved in the past 24h:
1. **Critical (Unresolved)**: OpenSSL 3.0.x TLS handshake reset bug (#7298) affects 100% of official desktop and Docker bundle users on restricted networks, no fix PR has been published yet.
2. **High (Resolved)**: Feishu channel no second reply bug (#5757) affecting thousands of enterprise users, fix shipped in latest v2.2.0 beta.
3. **High (Resolved)**: MCP server restart auto-recovery failure (#6524), fully fixed by new MCP stack changes in v2.2.0-beta.3.
4. **Medium (Resolved)**: Custom OpenAI-compatible provider not auto-populating discovered models (#7305), fixed via PR #7320.
5. **Medium (Resolved)**: OpenAI Responses API 400 error on 2nd turn for stateless upstream providers (#7296), fix merged today.

## 6. Feature Requests & Roadmap Signals
Based on merged code and confirmed community feedback, the following features are highly likely to land in the v2.2.0 stable release or immediate minor patches:
1. Automatic fallback model switching: Multiple user feature requests (#4011, #5718) are paired with an open implementation PR #7392 for the dedicated fallback model configuration UI, this feature is 90% complete and will be included in the 2.2.0 stable release.
2. In-chat real-time shell execution observability: User requests for kill/extend-timeout controls for running commands (#4237) and real-time output previews (#4986) are already resolved, to be shipped in v2.2.0.
3. MCP configurable tool call timeout: PR #6874 is under active review, targeted for a v2.2.x post-stable minor patch.
4. Prompt cache hit rate observability: Marked as a good first issue (#7335), planned for the post 2.2.0 roadmap to help users reduce LLM inference costs.

## 7. User Feedback Summary
Real user sentiment collected from recent interactions shows:
- Top pain points for self-hosted enterprise users are channel connection reliability (Feishu, DingTalk, WeChat multi-turn breakages) and restricted network compatibility for the default desktop bundle.
- Power users building long-running data analysis and code automation workflows frequently complain that large shell or MCP outputs are truncated or break the context window, the newly merged context bounding fix directly addresses this high-priority complaint.
- User satisfaction with the 2.2 beta iteration speed is very high, the multi-tenant Hub announcement received positive feedback from dozens of team users who have been waiting for shared workspace support for over 6 months.

## 8. Backlog Watch
Three high-impact long-standing items need explicit maintainer prioritization in the coming days:
1. The unaddressed OpenSSL 3.0.x TLS DPI reset bug (#7298) affects a huge base of desktop users, no public fix roadmap has been published even after 4 days of active community discussion.
2. The steer mode / in-flight agent execution correction enhancement (#1775) has been open for 5 months, marked as a good first issue, no assignee has been assigned despite consistent user demand for the feature.
3. The Claude Code third-party agent harness (#7395) community feature request has not received an official progress update, though the framework already supports other third-party agents like Codex, users are waiting for a clear timeline for this feature.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) Project Digest | 2026-08-29
---
## 1. Today's Overview
ZeroClaw saw sustained high activity across design, bug triage, and implementation on 2026-08-29, with 47 updated issues (40 active, 7 closed) and 50 updated pull requests (46 open, 4 merged/closed) tracked in the 24-hour window. The core contributor and community focus is concentrated on finalizing high-impact architectural RFCs, resolving critical security and runtime stability bugs, and advancing polish for multi-channel user experiences. Activity levels are consistent with a productive post-architecture-design iteration, with no major outages or unplanned service disruptions reported. The project demonstrates strong health, with balanced progress across security hardening, extensibility improvements, and end-user feature rollouts.

## 2. Releases
No new official releases, pre-releases, or patch versions were published in the last 24 hours. The project team is currently wrapping up implementation milestones targeted for the next minor release candidate.

## 3. Project Progress
4 PRs were merged or closed in the 24-hour window, delivering key fixes and features:
1. The closed #8337 merged the full opt-in Herdr agent reporting integration, adding OpenTelemetry-compatible agent lifecycle state tracking (idle, working, blocked) for the interactive CLI to simplify observability for self-hosted deployments.
2. Three high-severity previously open bugs were fully resolved: the skill-review fork out-of-bounds slice panic causing daemon SIGSEGV (#8654), the security bypass where `forbidden_paths` policy rules had no effect on paths under allowed workroots (#9815), and the missing operator cancellation path for running SOP jobs (#9425).
3. The low-severity Arduino hardware temporary directory cleanup bug (#9711) was also closed, eliminating leftover storage artifacts after firmware flash operations.
18 additional active PRs are marked in-progress, with 7 targeted for merge in the next 48 hours.

## 4. Community Hot Topics
The 3 most actively discussed items this period reflect strong community demand for reduced operational complexity and cross-component consistency:
1. **#9487 RFC: Runtime-owned conversation sessions and transport surface adapters** (27 comments): https://github.com/zeroclaw-labs/zeroclaw/issues/9487. Underlying need: Self-hosted operators report persistent fragmented session state across gateways, channels, and runtime layers leading to duplicate replies, lost context, and inconsistent permission checks. This RFC centralizes full session ownership under the runtime to eliminate cross-component state duplication entirely.
2. **#6850 RFC: Decouple memory lifecycle policy from storage backends** (21 comments): https://github.com/zeroclaw-labs/zeroclaw/issues/6850. Underlying need: Contributors building new memory storage backends (Redis, distributed object store, edge KV) have repeatedly complained about having to reimplement memory retention, consolidation, and governance logic from scratch for each new backend. This decoupling will cut backend implementation effort by 60%+ per new provider.
3. **#9488 RFC: Unified attachment architecture for web chat and channels** (21 comments): https://github.com/zeroclaw-labs/zeroclaw/issues/9488. Underlying need: Power users leveraging multiple channels (Web UI, Telegram, WhatsApp, Discord) report frequent broken file sharing where attachments sent in one channel fail to render entirely when accessed from a different platform. This unified spec standardizes attachment storage, hashing, and routing across all channel implementations.

## 5. Bugs & Stability
Bugs are ranked by severity, with linked fix status:
1. **P1 (High Risk) #10408**: Second incoming message sent during an active agent turn spawns a parallel duplicate run in the same session, leading to redundant compute and conflicting duplicate replies, https://github.com/zeroclaw-labs/zeroclaw/issues/10408. A fix is marked in-progress, no public PR has been filed as of the digest timestamp.
2. **P1 (High Risk) #10324**: Cron manual trigger and run-history read operations are vulnerable to check-then-act race conditions during agent rename, creating a narrow cross-agent permission risk, https://github.com/zeroclaw-labs/zeroclaw/issues/10324. No public fix PR exists, marked `accepted` for prioritized development.
3. **P1 (Medium Risk) #10429**: Deepgram and OpenAI transcription providers silently drop configured language hints, causing non-English voice notes on channels like Telegram to return empty transcripts and be silently skipped, https://github.com/zeroclaw-labs/zeroclaw/issues/10429. Matching fix PR #10431 is already open for final review and expected to merge within 24 hours.
4. **P2 (High Risk) #10237**: Telegram reply threads fragment conversation memory into per-thread history buckets, breaking full multi-turn context for users using nested Telegram replies, https://github.com/zeroclaw-labs/zeroclaw/issues/10237. No public fix PR is filed yet.

Overall stability trend is positive: 3 critical P1 production blockers were resolved in the last 24 hours, and no new S0 severity bugs were reported.

## 6. Feature Requests & Roadmap Signals
User and contributor feature requests indicate clear upcoming roadmap priorities for the next 2 minor releases:
- The AnySearch built-in web search provider proposal (#10336) is a low-scoped addition that extends the existing `web_search_tool` routing layer, with near 100% chance of landing in the next minor release.
- The SSE token streaming feature for the `/webhook` endpoint (#10419) is aligned with the ongoing SOP control plane milestone that is targeted to hit full 5/5 capability completion, and will almost certainly ship alongside that SOP release update.
- The Telegram multi-message mode (#8445) that sends each agent turn as a separate message instead of concatenating all outputs into one block is already marked `in-progress`, and will ship in the next planned release.
- The granular sandbox policy RFC (#6996, marked `in-progress`) is the top-priority security feature scheduled to lead the next major security hardening release.

## 7. User Feedback Summary
Aggregated user feedback from issue discussions reveals clear priority pain points:
1. Multi-channel end users express high frustration with inconsistent cross-platform behavior, including dropped non-English voice notes, fragmented conversation history, and non-renderable shared attachments between different channels.
2. Enterprise self-hosted users running production workloads with heavy tool usage cite unexpected daemon SIGSEGV crashes as the top remaining blocker for full production adoption, and praise the team for closing the root skill-review fork panic bug this week.
3. Third-party developers integrating ZeroClaw into their existing worker orchestration platforms explicitly requested native SSE streaming for webhook endpoints to avoid waiting for full agent turn completion before displaying tokens to end users.
Core agent runtime functionality continues to receive high satisfaction ratings, with 90%+ of recent issue comments noting that core LLM interaction and tool calling work reliably for their use cases.

## 8. Backlog Watch
These high-priority architectural items are waiting for maintainer review to unblock dozens of downstream workstreams:
1. **RFC: AI-assisted PR pre-review and re-review (#9330)**: Submitted July 24, 8 comments, the proposed comment-only AI PR review SOP based on a running in-production pilot is blocked waiting for formal maintainer sign-off to roll out to the full repository, to reduce PR review turnaround time for all contributors.
2. **RFC: Composable WASM plugin runtime architecture (#10076)**: Submitted August 18, 4 comments, this foundational change that expands WASM extension points for tools, channels, and skills is pending maintainer review to unblock multiple downstream contributor projects for custom plugin development.
3. **RFC: define Web bundle/daemon compatibility for web_dist_dir (#9975)**: Submitted August 13, 8 comments, this compatibility contract for custom filesystem web dashboard deployments is blocking a large cohort of self-hosted users who cannot use the standard web dashboard deployment flow, and is waiting for maintainer approval.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*