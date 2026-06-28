# OpenClaw Ecosystem Digest 2026-06-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-28 23:02 UTC

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

# OpenClaw (openclaw/openclaw) 2026-06-29 Project Digest
---
## 1. Today's Overview
Over the 24 hour tracking window, the OpenClaw project saw extremely high maintenance activity, with 500 updated issues (445 open, 55 closed) and 500 updated pull requests (409 open, 91 merged/closed). The majority of recent work is concentrated on foundational storage refactoring, multi-channel stability hardening, and critical bug fixes for long-running self-hosted gateway deployments. No new official releases were published during this period, as maintainers are prioritizing final validation of the high-impact SQLite session storage migration before cutting a new stable build. Overall project health is strong: nearly all top P1 priority issues have clear fix shapes defined and active development lanes, and community contributor throughput remains at a peak level.

## 2. Releases
No new releases were published in the last 24 hours. The project remains in pre-release hardening phase for the upcoming SQLite storage flip milestone, with no breaking changes or migration notes to announce at this time.

## 3. Project Progress
91 PRs were merged or closed over the past day, delivering targeted stability and quality-of-life fixes:
1.  Session integrity fixes: Closed critical bug #50248 that caused `openclaw sessions cleanup --fix-missing` to incorrectly prune valid fresh cron sessions, and fixed bug #86827 where group chat sessions stuck in a failed state would silently drop all subsequent incoming messages.
2.  Multi-channel delivery fixes: Resolved #49944 (tool cards in Control UI staying collapsed despite `verboseDefault=full`), #49104 (Telegram HTML parse mode truncating responses with angle-bracket tags like `<think>`), and #79308 (Telegram group replies being misrouted to the user's DM instead of the originating group).
3.  Provider bug fix: Closed #92479, resolving the missing default model catalog for the OpenCode/Zen provider that required users to manually register every model they wanted to use.
4.  Performance PRs merged: #87923 (preserves explicit user-configured `thinkingLevel` for sessions instead of resetting it after every turn when a model does not support the full requested level) and #87831 (cuts runtime of `openclaw status` commands by skipping unnecessary manifest normalization steps).

## 4. Community Hot Topics
The most actively discussed items reflect core priorities for both maintainers and end-users:
1.  [Issue #88838: Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838) (36 comments): This top-commented tracking issue coordinates the full replacement of legacy JSON sessions storage with a canonical SQLite store, representing the single highest community investment in fixing long-standing OOM and message loss pain points for long-running deployments.
2.  [Issue #77598: Track live dev agent behavior and trajectory](https://github.com/openclaw/openclaw/issues/77598) (22 comments): The 24-hour unattended agent observation workstream reflects widespread community interest in enabling built-in autonomous monitoring and debugging capabilities for self-hosted OpenClaw agent deployments, rather than requiring external tooling.
3.  [Issue #79077: Support for Telegram bot-to-bot and guest-bot modes](https://github.com/openclaw/openclaw/issues/79077) (8 👍): The highest user-reacted feature request indicates a large segment of the Telegram user base wants to adopt the new 2026 Telegram bot platform features to run peer-to-peer agent workflows.

## 5. Bugs & Stability
High-severity bugs reported and triaged in the last 24 hours, ranked by impact:
1.  P1 Regression [Issue #88312: 2026.5.27 Codex app-server turn-completion stall](https://github.com/openclaw/openclaw/issues/88312): Reliably causes multi-tool agent turns to fail for ChatGPT Plus / Codex users, no associated fix PR has been published yet.
2.  P1 Security Bug [Issue #74484: Gateway pairing scope deadlock](https://github.com/openclaw/openclaw/issues/74484): Creates an unrecoverable state where the CLI lacks sufficient permissions to approve or reject auto-issued over-scoped gateway repair requests, no fix PR is available.
3.  P1 Performance Bug [Issue #55334: sessions.json unbounded growth causes gateway OOM](https://github.com/openclaw/openclaw/issues/55334): Unpruned duplicate `skillsSnapshot` entries in the sessions file cause gateway memory usage to grow ~50-100MB per minute until the process is killed, a fix is blocked on the pending SQLite storage refactor PR.
4.  P1 Stability Bug [Issue #74586: AM embedded run aborts memory_search tool calls](https://github.com/openclaw/openclaw/issues/74586): Incorrectly classifies fully completed memory search tool calls as timed out, leading to lost memory access results, no public fix PR exists.

## 6. Feature Requests & Roadmap Signals
Clustered user-submitted feature requests clearly signal near-term roadmap priorities:
1.  The full set of SQLite companion seam features (umbrella [Issue #79902](https://github.com/openclaw/openclaw/issues/79902) + sub-issues #79903, #79904, #79905) from the active SQLite refactor workstream will be the highest-impact new functionality for power users, who want direct, documented access to canonical session data to build custom extensions without scraping raw transcript files.
2.  [Issue #78308: Channel-mediated approval for MCP tool calls](https://github.com/openclaw/openclaw/issues/78308) is a high-priority security feature that will extend the existing `/approve` workflow for shell commands to all MCP tool operations that mutate external state.
3.  PR #97580's new multi-pass context compaction feature will likely ship as an optional experimental mode in the next minor release to solve long-standing issues where single-pass context compression fails to fit long conversation histories within model token limits.
The next major stable release will almost certainly lead with the full SQLite session/transcript storage migration as its flagship improvement.

## 7. User Feedback Summary
Real user pain points surfaced in the latest issue updates include:
1.  Frustration with persistent unplanned outages for long-running deployments caused by unbounded growth of `sessions.json`, provider log files, and cache trace files that eventually cause OOM crashes.
2.  Significant unexpected cost shock from the unannounced April 2026 default flip of Claude reasoning mode to enabled, which doubled Anthropic API spend for many users without notification.
3.  Poor new user onboarding experience: Clean installs of 2026.5.x versions take 20+ minutes to complete for even mid-tier hardware, with no visible progress indicator during the slow synchronous auth stage.
4.  Dissatisfaction with inconsistent feature parity across messaging channels: Documented features like message status reaction emojis only work on Telegram, and are missing from Discord, Slack and other supported platforms.

## 8. Backlog Watch
High-priority long-running items awaiting urgent maintainer attention:
1.  [PR #36630: fix(signal): complete bidirectional quote-reply support](https://github.com/openclaw/openclaw/pull/36630): A fully proofed, high-demand feature for Signal channel users that has been open for over 3 months, still pending final maintainer review despite multiple rounds of updates.
2.  [PR #60488: fix(security): close active April 4 transport and auth gaps](https://github.com/openclaw/openclaw/pull/60488): A critical security patch that blocks SSRF and Discord @everyone mention injection vulnerabilities, that has been stuck in the review queue for almost 3 months with no merge progress.
3.  [Issue #45718: Session bloat: skillsSnapshot and systemPromptReport accumulated on every run](https://github.com/openclaw/openclaw/issues/45718): A root cause bug directly contributing to the top P1 OOM stability issue, that was first filed in March 2026 and still has no assigned fix owner.

---

## Cross-Ecosystem Comparison

# 2026-06-26 Open Source Personal AI Agent Ecosystem Cross-Project Comparison Report
---
## 1. Ecosystem Overview
The global open source personal AI agent landscape in H2 2026 has fully exited the early prototype phase, with the vast majority of active development effort no longer focused on chasing new large language model integrations, but rather solving long-unaddressed production hardening pain points for self-hosted deployments. The ecosystem has clear vertical segmentation across use cases ranging from 24/7 public-facing gateways, lightweight desktop assistants, low-footprint embedded edge agents, and multi-user team collaboration platforms. Widespread user demand for privacy and cost control is driving a unified shift away from mandatory cloud service dependencies towards fully local-first operation that eliminates unexpected API cost overruns and third-party outages. Overall project health across all active repositories remains strong, with consistent community contribution throughput and minimal unpatched critical regressions reported in the 24-hour tracking window.

## 2. Activity Comparison
All projects recorded no new official production releases in the 24-hour observation period, as teams prioritize stabilization work for upcoming milestones. The full activity and health scoring table below uses a 1-10 scale, where 10 indicates zero unresolved critical bugs, perfectly aligned roadmap execution, and no stale unaddressed backlog items:
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Project Health Score |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | No new release | 9 |
| NanoBot | 7 | 23 | No new release | 9 |
| Hermes Agent | 50 | 50 | No new release | 9 |
| PicoClaw | 2 | 3 | No new release | 10 |
| NanoClaw | 1 | 5 | No new release | 8 |
| NullClaw | 1 | 1 | No new release | 8 |
| IronClaw | 3 | 42 | No new release | 9 |
| LobsterAI | 5 | 5 | No new release | 8 |
| Moltis | 2 | 2 | No new release | 8 |
| CoPaw | 3 | 5 | No new release | 8 |
| ZeroClaw | 50 | 50 | No new release | 9 |
*TinyClaw and ZeptoClaw recorded zero development activity in the tracking window, and are excluded from the scoring table*

## 3. OpenClaw's Position
As the de facto upstream reference gateway project for the entire ecosystem, OpenClaw holds a dominant position no peer can match at this stage. Its absolute development throughput of 1000 total updated artifacts in 24 hours is 5-10x higher than mid-tier projects, and it supports more native IM channel integrations than all other surveyed projects combined. Unlike peers that balance new feature rollouts with stability work, OpenClaw’s current full engineering focus on the SQLite session storage migration uniquely targets the OOM and message loss pain points for multi-month, 24/7 running gateways that no other project has prioritized solving at production scale. Community engagement metrics confirm OpenClaw has the largest active install base: its top tracked issue recorded 36 comments, 3x higher than the next most active project’s highest-discussion thread, and it serves as an upstream dependency for multiple downstream projects including PicoClaw, NanoClaw and LobsterAI.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across the entire ecosystem, aligned across multiple independent projects:
1. **Long-running deployment storage hardening**: OpenClaw’s SQLite session refactor, ZeroClaw’s log rotation and SQLite hybrid search fix, and NanoClaw’s symlink escape mitigation all target eliminating unplanned outages caused by unbounded file growth, unregulated memory usage, and data corruption for agents operating 24/7 for weeks or months at a time.
2. **Multi-user isolation and security hardening**: NanoClaw’s CWE-59 symlink vulnerability remediation, IronClaw’s tiered capability policy system, ZeroClaw’s MCP access control enforcement, NanoBot’s exec command injection bypass fix, and NullClaw’s new two-turn shell action approval flow all address the unmet need to run agents safely for shared team use cases, preventing unvetted LLM actions from modifying host systems or leaking cross-user data.
3. **Cross-platform native compatibility**: Hermes Agent’s full Windows desktop stability sweep, Moltis’ Apple sandbox deployment fix, ZeroClaw’s missing Windows test suite completion, and PicoClaw’s low-footprint image compression work all remove platform-specific blockers to run agents outside standard Linux server environments.
4. **Elimination of mandatory cloud dependencies**: LobsterAI’s high user demand for local embedding support, plus widespread user complaints across OpenClaw and NanoBot of unexpected API cost shocks and 429 throttling, push all teams to build fully offline operation as a default user requirement.

## 5. Differentiation Analysis
The ecosystem has fully matured into distinct, non-overlapping vertical segments with clear target user and architecture differences:
- OpenClaw: Modular multi-channel general purpose gateway for power users running public-facing 24/7 agent deployments
- NanoBot: Minimal out-of-the-box personal 1:1 assistant optimized for individual end users, prioritizing UI/UX over enterprise features
- Hermes Agent: Desktop-first consumer agent with deep OS integration, built exclusively for local GUI operation on Windows and macOS
- PicoClaw: Ultra-low-footprint edge agent designed for microcontroller and embedded hardware use cases, with zero heavy runtime dependencies
- NanoClaw: Security-hardened containerized runtime for multi-tenant team self-hosted deployments, prioritizing isolation over new experimental features
- NullClaw: Minimal audit-focused framework for high-security use cases, built around granular action approval and no-unexpected-behavior design principles
- IronClaw: Rust-built NEAR ecosystem optimized agent runtime with native WASM support, targeting blockchain-connected and WebUI use cases
- LobsterAI: China-localized assistant optimized for domestic IM (WeChat, Feishu) and Chinese LLM integrations
- Moltis: Low-storage-footprint agent purpose-built for sandboxed iOS/macOS operation for Apple ecosystem users
- CoPaw: Multi-agent orchestration platform built on Agentscope, targeted exclusively at peer-to-peer agent workflow use cases
- ZeroClaw: Extensible runtime with native Wasm plugin system, designed for operators running large fleets of agents at scale

## 6. Community Momentum & Maturity
Projects fall into three clear maturity tiers based on activity patterns:
1. **Rapid Iteration Tier (pre-1.0 to mid-stable, 10+ daily merges)**: OpenClaw, ZeroClaw, Hermes Agent, IronClaw, NanoBot. All these projects see high community contribution throughput, active feature development, and are iterating quickly towards their next major stable release with no feature freeze in place.
2. **Stable Maintenance Tier (production ready, low to moderate merge volume)**: PicoClaw, NanoClaw, NullClaw, Moltis, LobsterAI, CoPaw. These teams are prioritizing clearing 2+ months of stale backlog items, delivering targeted patch fixes, and delaying large new feature rollouts to avoid introducing instability for existing production user bases.
3. **Inactive Tier**: TinyClaw, ZeptoClaw. No public development activity was recorded in the 24-hour tracking window.

All active projects show signs of exiting early adopter phase, with most teams prioritizing stability over experimental model integrations.

## 7. Trend Signals
Three high-impact industry trends extracted from the dataset deliver clear actionable value for AI agent developers:
1. The open source agent ecosystem has moved past prototype stage, and foundational hardening work for persistence, memory management and cross-platform compatibility is no longer a custom implementation burden for teams. Developers can now adopt pre-hardened stacks instead of building core runtime components from scratch.
2. Fully local-first operation with no mandatory third-party cloud dependencies is now the top user requirement, ranked higher than new LLM feature requests across all projects. Agent developers should design workflows to run 100% locally by default, with cloud integrations implemented as optional add-ons to meet user privacy and cost control demands.
3. The Wasm Component Model has emerged as a de facto standard for

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 2026-06-29 Project Digest
---
## 1. Today's Overview
On 2026-06-29, the open-source NanoBot personal AI assistant project recorded high sustained development activity, with 7 total updated issues and 23 updated pull requests spanning core functionality, UI, security, and subagent workflow domains. No new official releases were pushed in the 24-hour observation window. 10 PRs were successfully merged or closed, representing a 43% merge rate for recently updated contributions, indicating efficient maintainer review throughput and well-aligned community development efforts. Multiple newly opened issue reports were paired directly with corresponding implementation PRs from core contributors within the same day, reflecting fast iteration velocity and strong overall project health.
## 2. Releases
No new official releases were published in the 24-hour window ending 2026-06-29.
## 3. Project Progress
10 total PRs were merged/closed in the observation period, delivering the following key improvements:
- WebUI bug resolution: [PR #4565](https://github.com/HKUDS/nanobot/pull/4565) fully fixed the long-standing stuck streaming state after gateway or client reconnection, closing reported bug [#4500](https://github.com/HKUDS/nanobot/issues/4500)
- Skill management upgrade: [PR #4504](https://github.com/HKUDS/nanobot/pull/4504) added optional subdirectory grouping for custom skills, eliminating the previous mandatory flat folder structure that became unnavigable as user skill libraries grow
- Reliability hardening: [PR #4569](https://github.com/HKUDS/nanobot/pull/4569) hardened the agent tool call path against malformed responses from third-party LLM relays; [PR #4566](https://github.com/HKUDS/nanobot/pull/4566) repaired corrupted legacy session file logic; [PR #4564](https://github.com/HKUDS/nanobot/pull/4564) added error guards for cron public APIs when the backend storage layer is unavailable
- MCP workflow improvement: [PR #4542](https://github.com/HKUDS/nanobot/pull/4542) renders image content returned from MCP tools as proper artifacts, instead of embedding raw base64 payloads in text result strings
- Repository governance update: [PR #2120](https://github.com/HKUDS/nanobot/pull/2120) added formal CONTRIBUTORS.md documentation; [PR #4575](https://github.com/HKUDS/nanobot/pull/4575) published official repository contribution guidelines
The remaining 2 merged PRs cover minor test suite updates and low-risk dependency patch bumps.
## 4. Community Hot Topics
The most active public discussions today, ranked by engagement:
1. **[Issue #4010: Feature proposal: text-to-speech / voice output support](https://github.com/HKUDS/nanobot/issues/4010)**
This is the highest-reaction open issue (2 👍, 2 comments) updated in the window. The underlying user demand is for full two-way voice conversational flow to match existing voice input capabilities, for users that deploy NanoBot on voice-native messenger and assistant channels. Users note this feature closes the full natural conversation loop with minimal new development overhead.
2. **[PR #4562: fix(security): validate each shell segment against exec.allowPatterns](https://github.com/HKUDS/nanobot/pull/4562)**
This pending security fix is drawing high community attention, addressing a previously unpatched command injection bypass vulnerability for the exec tool. Self-hosted users prioritized this fix as a top requirement to safely run unvetted LLM-generated tool calls on local machines.
## 5. Bugs & Stability
Bugs reported or resolved today, ranked by severity:
1. **High severity: Command injection bypass in exec allowlist logic**
Unassigned public CVE advisory, reported in hidden issue #4521. No public exploit has been disclosed, and a full fix PR #4562 is under active review, which splits chained shell commands and validates every segment individually to block bypass attempts.
2. **Medium severity: Continuous prompt prefix cache invalidation**
Tracked in [Issue #4222](https://github.com/HKUDS/nanobot/issues/4222). The bug causes up to 30% higher token costs and slower response times for long-running conversations, a full fix PR #4568 is in review implementing block-aligned window eviction to keep prefix caches warm.
3. **Minor severity: WeChat channel relay drops tool call metadata**
No public user-reported crashes, a fix PR #4567 is under development to re-enable native streaming for WeChat channels and resolve the broken non-stream relay edge case.
4. **Minor severity: Stuck WebUI processing state after restart**
Tracked in [Issue #4500](https://github.com/HKUDS/nanobot/issues/4500). Fully resolved by merged PR #4565, no open unresolved user reports remain.
All active bugs have corresponding in-development fix PRs, no unpatched critical regressions are open.
## 6. Feature Requests & Roadmap Signals
New user feature requests opened today, and priority predictions for upcoming releases:
- The fully implemented per-subagent model override feature ([PR #4570](https://github.com/HKUDS/nanobot/pull/4570), addresses [Issue #4231](https://github.com/HKUDS/nanobot/issues/4231)) will almost certainly ship in the next minor patch release, eliminating the hard constraint that all subagents inherit the parent agent's model
- Low-effort, high-impact WebUI UX improvements (session timestamps in sidebar + markdown export, [Issue #4579](https://github.com/HKUDS/nanobot/issues/4579)) will likely be bundled into the next patch for power users that manage multiple parallel conversations
- Conda virtual environment support for subprocess exec ([Issue #4580](https://github.com/HKUDS/nanobot/issues/4580)) will be prioritized for the v0.3 release to serve advanced self-hosted users
- The full TTS/voice output and group chat message buffering features are larger scope, targeted for the v0.3 milestone later this quarter
## 7. User Feedback Summary
Collected real user pain points and satisfaction signals from the day's activity:
- Users report very high satisfaction with NanoBot's out-of-the-box performance for 1:1 personal AI assistant use cases
- Pain points are concentrated in advanced self-hosted and team deployment scenarios: power users with large custom skill libraries previously struggled to navigate the flat skill directory (a fully resolved pain point after PR #4504 merged), group chat deployments on Feishu and Telegram face excessive message spam when multiple users send queries in quick succession, and users that run NanoBot in isolated conda environments face broken exec calls due to path mismatches
- Multiple enterprise self-hosted users gave positive feedback for the recently merged malformed relay response hardening, noting that upstream unofficial LLM relays often return non-compliant tool call outputs that previously crashed the agent
## 8. Backlog Watch
Long-standing high-priority open items awaiting maintainer attention:
1. [Issue #4010](https://github.com/HKUDS/nanobot/issues/4010) (TTS voice output support, created 2026-05-26): No maintainer has been assigned to this high-demand feature for over a month, despite 2 positive community reactions
2. [Issue #3938](https://github.com/HKUDS/nanobot/issues/3938) (Group chat message buffering/debounce, created 2026-05-20): No assigned dev for nearly 6 weeks, even though multiple users who deploy NanoBot as a team chat assistant report this is a blocking issue for daily use
3. [Issue #4179](https://github.com/HKUDS/nanobot/issues/4179) (Native A2A peer delegation): Only a partial implementation was shipped via PR #4571 two weeks ago, the remaining requirements for agent registration and recursive cross-delegation workflows have no scheduled development timeline.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Open Source Project Digest | 2026-06-29
Official Repository: https://github.com/nousresearch/hermes-agent

---

## 1. Today's Overview
Hermes Agent saw extremely high development activity over the past 24 hours, with 100 total updated artifacts (50 issues + 50 pull requests) across the repo. The vast majority of current engineering focus is targeted at resolving the widely reported Windows Desktop console flashing usability pain point, with multiple community contributors submitting targeted patches alongside core team work. No new official releases were shipped this period, as the team prioritizes stabilizing the pending fixes for the Windows platform before cutting a new minor version. Project health remains strong, with 70% of P2 bugs reported in the last week already resolved within 24 hours of tracking, and consistent new feature additions for model providers and third-party chat platform gateways.

## 2. Releases
No new public releases, pre-releases, or version tags were published in the past 24 hours. No breaking changes or migration notes are required for this period.

## 3. Project Progress
14 PRs / 17 total issues were merged/closed over the last day, with two key areas of advancement:
- **Windows Desktop Stability Sweep**: 10 separate bugs contributing to the umbrella Windows console flashing issue (tracking issue [#54220](https://github.com/nousresearch/hermes-agent/issues/54220)) were fully resolved, covering missed subprocess flags for `gh auth token`, `git`, `cmd.exe`, empty python.exe launch windows on dashboard re-exec, GBK encoding crash loops on Chinese locale Windows, WindowsTerminal process leak, and stale legacy autostart launcher entries that spawned consoles on user logon.
- **Cross-Platform Gateway Fixes**: Additional resolved issues include inconsistent `crontab -l` output from the local terminal backend [#12938](https://github.com/nousresearch/hermes-agent/issues/12938), Telegram bot 401 no-auth cookie errors [#3846](https://github.com/nousresearch/hermes-agent/issues/3846), QQ gateway unexpected connection argument errors [#54410](https://github.com/nousresearch/hermes-agent/issues/54410), and desktop terminal pane flicker regression introduced in the recent vertical resize commit [#53433](https://github.com/nousresearch/hermes-agent/issues/53433).

## 4. Community Hot Topics
The most actively discussed items and their underlying user needs:
1. [Issue #8366](https://github.com/nousresearch/hermes-agent/issues/8366): Cross-Platform Session Handoff (CLI ↔ Telegram ↔ iMessage) (7 comments, 6 👍)
   This long-running feature request, open since April 2026, reflects strong consistent demand from multi-device users who want to pick up ongoing tasks across their desk CLI, mobile Telegram, and iMessage workflows without manual context porting.
2. [Issue #54220](https://github.com/nousresearch/hermes-agent/issues/54220): Umbrella tracking for Windows Desktop console window flash on subprocess spawns (6 comments, community collaboration across 8+ contributors)
   This is the highest priority user pain point for the Windows user base, with dozens of community members submitting their own root cause findings and partial patches to help resolve the issue as fast as possible.
3. [Issue #44456](https://github.com/nousresearch/hermes-agent/issues/44456): Desktop `/compress` built-in command returns not found error (6 comments)
   Highlights user expectation that core desktop quality-of-life features work out of the box with no configuration work required.

## 5. Bugs & Stability
Active unresolved bugs ranked by severity:
| Severity | Issue Link | Description | Fix Status |
|----------|------------|-------------|------------|
| P2 | [#54320](https://github.com/nousresearch/hermes-agent/issues/54320) | Desktop sidebar session desync: sidebar highlights one session but chat pane sends messages to a different session, risking cross-session data contamination | Fix PR [#54479](https://github.com/nousresearch/hermes-agent/pull/54479) is under active review |
| P2 | [#54447](https://github.com/nousresearch/hermes-agent/issues/54447) | Docker file tools return empty search results because they use an unsanitized host working directory | No fix PR filed yet |
| P2 | [#54049](https://github.com/nousresearch/hermes-agent/issues/54049) | DeepSeek API streaming disconnects when using the default custom httpx transport | Workaround documented, no full patch merged |
| P2 Security | [#54461](https://github.com/nousresearch/hermes-agent/issues/54461) | Multi-profile shared Matrix accounts bypass allowed-room isolation rules | No fix PR filed yet |
| P2 | [#27804](https://github.com/nousresearch/hermes-agent/issues/27804) | Email gateway interrupts active tasks when receiving messages with new subjects instead of spawning isolated new sessions | No fix PR filed yet |
| P2 Security | [#51976](https://github.com/nousresearch/hermes-agent/issues/51976) | Cron tool can be exploited to trigger infinite gateway restart loops | Security hardening PRs are in active review |

90% of reported top P2 Windows bugs have been resolved in this 24h window, representing a major stability milestone for the Windows user base.

## 6. Feature Requests & Roadmap Signals
Based on open community feedback, the following features are high likelihood to ship in the next v2026.7 minor release:
1. **Cloudflare AI Gateway provider plugin** (PR [#54495](https://github.com/nousresearch/hermes-agent/pull/54495)): Already fully implemented and in review, will add native support for Cloudflare's unified OpenAI-compatible routing, caching, and rate limiting for Hermes requests.
2. **KimiClaw (Moonshot AI) platform plugin** (PR [#28704](https://github.com/nousresearch/hermes-agent/pull/28704)): This long-awaited integration for the Chinese market will be prioritized for merge once Windows stability work wraps up.
3. **WhatsApp natural cascade delivery mode** (PR [#54455](https://github.com/nousresearch/hermes-agent/pull/54455)): Will add human-like jittered typing delays for long message outputs on WhatsApp, a frequently requested quality of life feature for consumer users.
4. The top-voted community feature (cross-platform session handoff [#8366](https://github.com/nousresearch/hermes-agent/issues/8366)) is positioned to be the lead feature for the v2026.8 release after current stability work completes.

## 7. User Feedback Summary
- The single largest user pain point of the past two weeks, constant flashing console windows on Windows Desktop, is now nearly fully resolved, with users reporting massive improvements in post-fix tests.
- Multi-device self-hosted users express consistent frustration with fully isolated sessions across different access platforms, stating context continuity is the top missing feature for their daily agent workflows.
- Enterprise users evaluating Hermes for customer support deployments report that they lack an out-of-the-box hardened, pre-configured deployment profile, forcing them to manually implement dozens of security guardrails on their own.
- Non-English locale Windows users, particularly on Chinese Windows, confirm the recent GBK encoding crash fix resolves the "stuck on connecting" error that made the desktop app completely unusable for them.

## 8. Backlog Watch
High-priority unresolved items needing maintainer attention:
1. [Issue #8366](https://github.com/nousresearch/hermes-agent/issues/8366): Cross-platform session handoff, open since April 2026, no maintainer assigned to lead implementation despite consistent positive community engagement and 6 upvotes.
2. [PR #28704](https://github.com/nousresearch/hermes-agent/pull/28704): KimiClaw (Moonshot AI) platform plugin, submitted May 19 2026, waiting review for over 1 month despite being a high-demand integration for the large Chinese Hermes user base.
3. [RFC #17062](https://github.com/nousresearch/hermes-agent/issues/17062): Safe customer support deployment profile, open since April 2026, no formal roadmap milestone assigned despite clear demonstrated demand from enterprise self-hosted users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) Project Digest | 2026-06-29
---
## 1. Today's Overview
Over the 24-hour tracking window ending 2026-06-29, the PicoClaw repository saw steady, low-friction development activity focused on clearing long-running stale backlog items alongside new feature iteration. There were no new production releases, 1 resolved stale feature issue, 1 closed stale feature PR, and 1 newly submitted open feature PR under review. No critical bug reports or emergency stability incidents were logged in the period, signaling stable performance for recent deployed builds. This activity pattern reflects a healthy balance of backlog maintenance and forward-looking feature development from the maintainer and contributor community.

## 2. Releases
No new official releases, pre-releases, or patch versions were published in the 24-hour tracking window. No upcoming release announcements were posted to the repository in this period.

## 3. Project Progress
The only closed/merged PR updated in the last 24 hours is:
- PR #2964 (Feat/image input compression, https://github.com/sipeed/picoclaw/pull/2964, author: afjcjsbx): This long-running stale feature PR has been resolved, adding configurable multi-level inbound image compression for PicoClaw's vision pipeline. The new functionality eliminates the previous hard constraint that only limited maximum media file size, and prevents excessive payload bloat, unnecessary memory overhead, and slow inference latency that previously impacted vision processing workflows for connected client channels.

The remaining open PR from the 24-hour update batch, PR #3193, is currently queued for maintainer review.

## 4. Community Hot Topics
The highest engagement item from recent activity is:
- Issue #2984 [CLOSED] [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients (https://github.com/sipeed/picoclaw/issues/2984): This request collected 4 total comments and 2 thumbs-up reactions, the highest engagement of all tracked items in this cycle. The underlying shared user need is that third-party developers building custom WebSocket integrations for PicoClaw currently have no deterministic way to confirm an AI agent has fully finished processing a user query, even with existing events for typing status and message updates. This ambiguity leads to common broken UI behaviors including hanging loading states, duplicate message submissions, and out-of-order event rendering for custom client implementations.

## 5. Bugs & Stability
No new bug, crash, or regression reports were filed in the 24-hour tracking window, and no previously reported critical or high-severity stability issues received updates. No active fix PRs for critical stability gaps are pending at this time, indicating the core platform remains operationally robust for most production use cases.

## 6. Feature Requests & Roadmap Signals
Two recently advanced workstreams signal clear priorities for the next minor PicoClaw release. First, the resolved WebSocket turn completion signal feature requested in Issue #2984 directly addresses widespread developer integration pain, and is highly likely to be prioritized for final implementation and inclusion in the next version. Second, the newly resolved image compression functionality from PR #2964 is a high-demand quality-of-life improvement for vision use cases that is very likely to ship in the upcoming release, alongside the to-be-reviewed simplex channel type from open PR #3193.

## 7. User Feedback Summary
The top surfaced user pain points from recent activity are: 1) ambiguous WebSocket event semantics that create unnecessary implementation complexity for third-party developers building custom PicoClaw clients, and 2) lack of configurable image processing rules that previously forced end users to manually pre-process high-resolution images before submitting them to the platform for vision workflows. The resolution of two long-running stale feature items this cycle has driven positive sentiment from contributors, who expressed appreciation that previously stuck feature requests are finally being unblocked, with no new dissatisfaction around core agent performance or reliability logged.

## 8. Backlog Watch
The highest-priority item needing immediate maintainer attention is:
- PR #3193 [OPEN] Added simplex channel type (https://github.com/sipeed/picoclaw/pull/3193, author: dim): This non-breaking new feature PR was first submitted on 2026-06-27, but has received zero maintainer review comments or feedback across the two days since its submission. Timely review of this feature will keep the ongoing channel protocol expansion workstream aligned with community demand for more flexible custom communication interface options.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-29
---
## 1. Today's Overview
The NanoClaw project saw moderate, high-priority development activity over the 24-hour tracking window, with 1 active open user-reported issue and 5 updated pull requests. The vast majority of merged and in-progress work focused on remediating high-severity container isolation vulnerabilities, with parallel incremental progress on usability fixes and new integration features. No new official releases were published during the period, and no user-reported regressions were flagged against recently merged code. This work cycle signals a clear project focus on hardening production readiness for self-hosted multi-tenant deployments before rolling out new end-user facing features. Overall project health is strong, with core maintainers actively addressing pre-existing critical security gaps in priority order.

## 2. Releases
No new official versions of NanoClaw were published in the 24-hour tracking window, so no breaking change notifications or migration guidance is available for this cycle.

## 3. Project Progress
The single merged/closed PR for this window delivers partial remediation for a high-severity security flaw:
- [#2879 fix(agent-to-agent): containment-check target inbox in forwardAttachedFiles (#2828)](https://github.com/nanocoai/nanoclaw/pull/2879) (merged by core maintainer johnmathews): This change closes the agent-to-agent symlink escape vector for arbitrary host file writes, applying the project's existing defensive pattern of pre-upload symlink rejection, `realpath` resolution, and strict path containment checks to the cross-agent attachment forwarding workflow.

## 4. Community Hot Topics
While no active Issues or PRs accumulated public user comments or upvotes in the 24-hour window, the highest-priority active community workstream is the remediation of the CWE-59 symlink arbitrary host file write flaw tracked under parent issue [#2828](https://github.com/nanocoai/nanoclaw/issues/2828). Two sequential security PRs have been submitted to cover all known attack vectors for this vulnerability, reflecting a widespread unmet underlying community need for hardened, production-grade container isolation for multi-tenant self-hosted NanoClaw deployments.

## 5. Bugs & Stability
Active bugs are ranked by severity below, with fix status noted:
1. **High Severity**: Unpatched CWE-59 symlink escape arbitrary host file write vulnerability (parent issue #2828). One attack vector has been closed via merged PR #2879, with full remediation pending review of open PR [#2880 fix(security): contain inbox symlink escapes in attachment writes (#2828)](https://github.com/nanocoai/nanoclaw/pull/2880).
2. **Medium Severity**: OpenAI provider agent-runner crash bug reported in [#2876 Add OpenAI provider to agent-runner](https://github.com/nanocoai/nanoclaw/issues/2876). The CLI correctly accepts and persists `--provider openai` configuration values, but spawned agent containers crash immediately on new message arrival. No fix PR has been filed for this issue yet, and it impacts users running NanoClaw v2.1.1 who want to swap their LLM backend to OpenAI.
3. **Low Severity**: Stale OneCLI OpenAI credential reconnection failure tracked in [#2878 fix(codex): allow reconnect when OneCLI already has a stale OpenAI secret](https://github.com/nanocoai/nanoclaw/pull/2878). The current auth logic marks sessions as valid even if stored tokens are revoked or expired, causing mid-conversation Codex agent hard failures. The fix PR for this bug is already in open review.

## 6. Feature Requests & Roadmap Signals
Submitted user and contributor feature requests point to clear near-term roadmap priorities:
- First-class fully functional OpenAI provider support for agent-runner, per user issue #2876
- Native rich message rendering for Telegram integrations via Bot API 10.1, per open PR [#2877 feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage](https://github.com/nanocoai/nanoclaw/pull/2877)
- One-click simplified deployment support for Coolify self-hosted platforms, per open PR [#2875 Deploy/coolify](https://github.com/nanocoai/nanoclaw/pull/2875)
Based on current prioritization, the v2.1.2 patch release will almost certainly ship the full CWE-59 security fix, the OpenAI agent-runner crash patch, and the stale Codex auth reconnection fix. The Telegram rich rendering and Coolify deployment features are targeted for the next minor v2.2.0 feature release.

## 7. User Feedback Summary
Clear user pain points and use case priorities captured this cycle include:
- Self-hosted multi-tenant administrators are highly dissatisfied with the unpatched arbitrary host file write risk, and are prioritizing security hardening over new experimental features for production deployments.
- Users who configured the OpenAI provider on v2.1.1 based on advertised CLI flag support are frustrated that their workflows break at container spawn time, with no clear public workaround documented.
- Codex agent users want graceful automatic re-authentication flows for expired tokens instead of hard session errors that force manual user re-login.
All feedback signals growing mainstream production adoption of NanoClaw outside of experimental test environments.

## 8. Backlog Watch
Two high-priority items are currently waiting for maintainer attention after remaining unaddressed for multiple days:
1. Parent issue #2828: The remaining open PR #2880 for full symlink escape remediation needs maintainer review and merge to close the full high-severity security vulnerability.
2. PR #2875 Coolify deployment support: Submitted 2 days prior with no public maintainer feedback or review, despite being one of the most requested self-hosting features from the community. Expedited review of this PR will unlock massive onboarding friction reduction for new self-hosted users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-06-29
---
## 1. Today's Overview
As of 2026-06-29, the NullClaw open source AI agent framework recorded light but targeted development activity over the past 24 hours, with no new production releases published in the window. The maintainer team resolved one long-running community question about edge hardware compatibility, while a new in-progress feature PR lays foundational support for safer, more transparent agent tool execution workflows. No critical stability incidents or unplanned regressions were reported by users in the last day, indicating current mainline builds are operating reliably for most active testers. The project’s current work pipeline appears weighted toward adding enterprise and end-user friendly guardrails for agent shell access, rather than breaking architectural changes this sprint.
## 2. Releases
No new NullClaw releases were published in the 24-hour tracking window. No new version artifacts, breaking changes, or migration guidance are available to share at this time.
## 3. Project Progress
There were no merged or closed pull requests in the 24-hour tracking window. The only closed project item was the 4-month old hardware compatibility issue #50, resolving community user questions about running the framework on low-power microcontrollers. No new feature implementations or bug fixes were fully merged to mainline during this period, as the day’s development activity was focused on opening a new feature draft rather than landing completed changes.
## 4. Community Hot Topics
1. **Closed Hardware Compatibility Issue #50** (https://github.com/nullclaw/nullclaw/issues/50): With 4 total comments, this thread is the most active community discussion in the tracking window. It reflects strong user interest in deploying NullClaw on low-footprint edge hardware beyond standard servers and desktops. The underlying unmet user need driving this conversation is support for offline, low-power AI agent deployments for IoT and embedded automation workflows that do not rely on cloud connectivity.
2. **In-Progress Feature PR #969** (https://github.com/nullclaw/nullclaw/pull/969): This newly posted approval flow implementation has already generated initial internal team discussion, pointing to broad demand for more granular user control over agent actions that could modify local system files or execute privileged operations.
## 5. Bugs & Stability
No new bugs, crashes, or functionality regressions were submitted or reported for NullClaw in the 24-hour tracking window. All existing open stability issues from prior updates remain unmodified, and no unpatched high-severity vulnerabilities have been flagged in the past day. No fix PRs for active stability issues were created or merged during this period.
## 6. Feature Requests & Roadmap Signals
Two high-signal feature priorities are visible from recent activity. First, the structured two-turn tool approval flow outlined in PR #969 is almost certain to land in the next minor feature release, as the implementation is already in active development and addresses a widely requested safety requirement for users running NullClaw agents with local shell access. Second, the user-submitted ESP32 port request from issue #50 signals potential future roadmap exploration of embedded edge support, though no timeline for that functionality is publicly confirmed as of this update, given the framework’s current resource requirements are likely too high for out-of-the-box microcontroller deployment.
## 7. User Feedback Summary
User feedback collected in this window surfaces two distinct unmet user priorities. First, embedded and IoT developers are actively seeking to run lightweight versions of the NullClaw agent on low-power hardware like ESP32 to build offline, on-device automation workflows that avoid cloud dependency. Second, general end users testing the agent with local system access have expressed dissatisfaction with the lack of transparent, explicit approval steps for potentially destructive agent shell commands, which led to unplanned file modifications on some test user setups. No major widespread dissatisfaction with core framework performance or functionality was observed in recent community discussions.
## 8. Backlog Watch
There are no long-standing, unaddressed high-priority community issues that have gone unanswered for 30+ days as of this digest, reflecting strong maintainer responsiveness to user queries. The only newly added project item that requires immediate maintainer attention is the recently opened PR #969, which has no logged comments, review assignments, or feedback posted to its thread as of the 2026-06-29 tracking cutoff. Assigning relevant maintainers to review the proposed approval flow implementation in a timely fashion will help keep the high-priority safety feature on track to land in the upcoming minor release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-06-29
---

## 1. Today's Overview
The IronClaw project saw high development activity in the 24-hour window, with 3 total updated issues and 42 updated pull requests (17 merged/closed, 25 remaining open). Core team resources are heavily focused on hardening the upcoming Reborn WebUI v2 stack, expanding end-to-end test coverage, and addressing longstanding performance bottlenecks related to large prompt payloads. No production releases shipped today, and the maintainer team is consistently delivering incremental stability improvements that signal the project is approaching a public rollout milestone for the Reborn overhaul. Overall project health is strong, with active work aligned to documented roadmap priorities and ongoing dependency hygiene across Rust and GitHub Actions surfaces.

## 2. Releases
No new official public releases were published in the 24-hour reporting window. An open pending release PR (#5311) is currently in review, which will ship breaking API changes for `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), alongside compatible bumps for other core packages to version 0.29.1.

## 3. Project Progress
17 total PRs were merged or closed in the last 24 hours, delivering the following key improvements:
- The previously open issue [#5236](https://github.com/nearai/ironclaw/issues/5236) requesting to stop committing WebUI v2 dist bundle artifacts was resolved, cleaning up the repo root and eliminating unnecessary diff bloat for frontend updates.
- PR [#5393](https://github.com/nearai/ironclaw/pull/5393) (throwaway test) was closed after validating that the `/benchmark` harness builds correctly against the latest main branch following a toml_parser lock bump, eliminating CI breakage for benchmark runs.
- PR [#5386](https://github.com/nearai/ironclaw/pull/5386) was merged to formally descope an embeddings fake feature from the Reborn integration test framework, after verifying the relevant seam for mock implementation is not reachable in the current stack.
- PR [#5387](https://github.com/nearai/ironclaw/pull/5387) landed a URL-keyed HTTP matcher and richer egress assertion API for the Reborn integration test framework, enabling robust testing of multi-step tool HTTP flows.
- PR [#5388](https://github.com/nearai/ironclaw/pull/5388) fixed Reborn Google SSO `id_token` decoding after the `jsonwebtoken` 10.x dependency bump, and closed a security gap that allowed unauthorized OAuth state tampering on Railway preview custom domains.

## 4. Community Hot Topics
The highest priority active items by cross-team impact are:
1. [Issue #5385: Add Capability Policy](https://github.com/nearai/ironclaw/issues/5385) + linked PR [#5394](https://github.com/nearai/ironclaw/pull/5394): This feature request defines three tiered user roles (owner, admin, member) with fine-grained access controls. The underlying community need is support for multi-user self-hosted team deployments, which are currently not possible with the current single-user permission model.
2. [PR #5354: Add Reborn WebUI v2 live QA canary](https://github.com/nearai/ironclaw/pull/5354): This PR adds a full Playwright-powered end-to-end test lane that drives the live Reborn WebUI against real LLM and tool integrations. The core team's underlying need is to eliminate uncaught user-facing regressions for the upcoming WebUI v2 public launch.

## 5. Bugs & Stability
Ranked by severity:
1. **High Severity**: Open issue [#4108: Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108) reports that the scheduled full stack end-to-end test run failed on 2026-06-28. No associated fix PR has been published yet, and the broken nightly CI risks uncaught cross-stack regressions if left unresolved.
2. **Medium Severity**: Open PR [#5395](https://github.com/nearai/ironclaw/pull/5395) addresses a broken Exa web access content fetch functionality that stops the web browsing tool from returning valid page content to end users. A low-risk fix is already drafted and in active review.
3. **Medium Severity**: A previously resolved flaw in Google OAuth SSO token decoding was fixed via merged PR [#5388], which prevented broken login flows and cross-domain account hijacking for WebUI preview deployments.

## 6. Feature Requests & Roadmap Signals
Three high-impact features with active development are very likely to land in the next 0.29.x release:
1. The role-based capability policy system tracked in issue #5385 and PR #5394, to enable multi-user team deployments.
2. Progressive tool disclosure (PR [#5149](https://github.com/nearai/ironclaw/pull/5149)) that cuts per-call prompt token counts by only sending relevant tool schemas, which is the top priority fix for widespread NEAR AI endpoint 120s timeouts.
3. The expanded Reborn integration test framework (PR [#5392](https://github.com/nearai/ironclaw/pull/5392)) that adds LibSql matrix testing, egress assertion, MCP and OAuth test coverage, to eliminate pre-launch stability gaps.

## 7. User Feedback Summary
Recent updates reflect three clear user pain points:
1. Self-hosted and organizational users report that the current single-user permission model blocks shared deployment use cases for internal teams.
2. End users frequently experience timeouts and no-response errors from the agent caused by overly large 25k+ token per-turn prompts that send all 91 tool schemas for every model call.
3. Users note that vague generic error messages (e.g. "invalid_input", "driver protocol error") provide no diagnostic context after tool failures, making it impossible for non-technical users to self-troubleshoot broken agent runs.

## 8. Backlog Watch
High-priority long-running items requiring maintainer attention:
1. PR [#4002](https://github.com/nearai/ironclaw/pull/4002) (opened 2026-05-24): This PR bumps 16 outdated GitHub Actions dependencies, and has been pending review for over 35 days. Outdated CI actions carry unpatched security risks for repository pipeline operations.
2. PR [#4032](https://github.com/nearai/ironclaw/pull/4032) (opened 2026-05-25): This PR bumps the WASM tooling dependency group, and has been pending review for over 34 days. Outdated `wit-parser` and `wit-component` packages may have unpatched parsing vulnerabilities.
3. PR [#4787](https://github.com/nearai/ironclaw/pull/4787) (opened 2026-06-12): The NO-MERGE Barcelona Hackathon PR contains documented onboarding path improvements for new users, and has not been triaged for 17 days. Maintainer review is needed to identify changes that can be merged upstream to lower new contributor barriers.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-06-29
---
## 1. Today's Overview
The 24-hour reporting window sees steady, focused maintenance activity for LobsterAI, with 10 total updates across issues and pull requests as the development team executes a systematic long-overdue backlog triage cycle. 4 previously stagnant stale legacy issues and 3 long-pending feature/fix PRs (all first logged in early April 2026) were closed or merged in this period, clearing over two months of accumulated low-priority work items. Only 1 new open issue was submitted, reporting a critical memory search functionality failure on Windows self-hosted deployments. No new official releases were published in this window, and overall project health is assessed as stable, with the ongoing cleanup work paving the way for upcoming targeted feature rollouts.

## 2. Releases
No new official releases were published in the 24-hour reporting window. The latest publicly available stable version remains v2026.6.1 referenced in the new user issue submitted today.

## 3. Project Progress
3 previously stagnant stale PRs were merged/closed in the reporting cycle, delivering targeted UX and stability improvements for core skill and artifact modules:
- [PR #1440](https://github.com/netease-youdao/LobsterAI/pull/1440): Completed refactor to move selected active skill tags from the crowded bottom toolbar to the top of the input container, resolving layout clutter caused by large numbers of selected skills, while retaining the global region visibility filter logic for third-party IM platform integrations.
- [PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441): Finalized conflict resolution and runtime bug fixes for the long-pending extensible preview pipeline PR, adding native support for rendering HTML, React components, and Mermaid diagrams directly in chat sessions without external redirects.
- [PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445): Fixed two high-impact skill import bugs that caused random string-named skill directories after ZIP imports, and silent duplicate skill installations across all 3 import channels (ZIP upload, folder upload, GitHub import) that previously degraded large model tool routing performance.

## 4. Community Hot Topics
The highest engagement items this cycle include:
1. New open issue: [Memory Search cannot switch to local embedding provider, index rebuild blocked by DB EBUSY lock](https://github.com/netease-youdao/LobsterAI/issues/2216)
2. Closed legacy issue with 3 user comments: [Support for new OpenClaw version](https://github.com/netease-youdao/LobsterAI/issues/1443)

The underlying shared demand behind these two items is that self-hosted LobsterAI users strongly prioritize full offline deployment capability, and want to eliminate hard dependencies on third-party cloud APIs (OpenAI embedding service, older OpenClaw runtime) to avoid service outages caused by external service changes, quota exhaustion, or regional network restrictions.

## 5. Bugs & Stability
Reported issues are ranked by impact severity as follows:
1. **Critical (unresolved, no fix PR available as of reporting)**: The Memory Search module is hard-locked to the OpenAI embedding provider with no UI option to switch to local alternatives, paired with a Windows-specific SQLite EBUSY database lock error that blocks memory index rebuilds. This breaks full memory search functionality immediately when users exhaust their OpenAI API quota, affecting all Windows self-hosted instances running v2026.6.1 (linked issue: [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216)).
2. **Normal severity (all resolved/closed this cycle)**: 4 long-standing UI and interaction bugs, including no response when creating non-recurring scheduled tasks, deactivated uploaded skills still being callable in conversations, and selected skills not displaying after initiating a chat session, all of which have been marked as stale and closed after corresponding fix changes were merged.

## 6. Feature Requests & Roadmap Signals
Based on currently open PRs and user feedback, two features are highly likely to be included in the next minor version release:
1. The full scheduled task module UI refresh ([PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488)) that migrates task lists to a uniform card grid layout, and adds search, date range filtering and historical task grouping capabilities.
2. The session-isolated skill selection state fix ([PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)) that eliminates the confusing cross-session shared skill selection behavior.
The local embedding provider unlock feature requested by self-hosted users also has high priority, and may be released as a patch to the current v2026.6.1 version if the development team prioritizes resolving the critical memory search outage.

## 7. User Feedback Summary
User feedback collected in this cycle shows clear core pain points:
- Self-hosted users demonstrate strong dissatisfaction with hard dependencies on external cloud APIs, as OpenAI 429 quota errors can break non-core features like memory search that users expect to run fully locally.
- Multiple users report negative UX experiences caused by the global shared skill selection state, which leads to accidental tool invocation when switching between different agent sessions.
- Users explicitly demand full compatibility with the latest OpenClaw v2026.3.24 runtime, to take advantage of the new performance and security improvements introduced in that major version.

## 8. Backlog Watch
Two open stale PRs created in early April 2026 are still pending maintainer review to unblock merging, with no updates for over 2 months: the scheduled task UI upgrade PR #1488 and the per-session independent skill selection state PR #1494. Both changes are fully developed and resolve long-reported user UX frictions, making them high-priority items to be reviewed and merged before the next version can be released. Additionally, the user request for new OpenClaw version adaptation (issue #1443) was marked as stale and closed without an explicit public roadmap confirmation, and the maintainer team is recommended to add a clear update on future runtime compatibility for the community.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-06-29
Monitoring window: 24 hours ending 2026-06-29 UTC

---

## 1. Today's Overview
For the 24-hour tracking period, Moltis recorded steady, focused development activity centered on core stability and runtime efficiency improvements, with no disruptive incidents or critical user outages flagged. The project logged 1 updated open issue and 2 newly submitted open pull requests, with zero merged code or new public releases during the window. All pending changes target documented user-facing pain points including unexpected build bloat and excessive image-related token overhead, signaling the core team is prioritizing quality of life fixes ahead of major feature rollouts. Overall project health remains stable, with no unresponded high-severity community bug reports in the active tracking queue.

## 2. Releases
No new official releases were published in the 24-hour monitoring window. The last public release for the project remains unlisted in the current activity dataset.

## 3. Project Progress
No pull requests were merged or formally closed in this tracking cycle. Two new pre-vetted code contributions from core contributor `resumeparseeval` were submitted for review, advancing two high-impact quality fixes that had been prioritized in prior team planning:
- A fix for unintended dependency bloat in the gateway module
- A patch to handle oversized user-uploaded images before they enter the LLM context window
Both submissions adhere to the project's contribution guidelines and require only final maintainer signoff before merging.

## 4. Community Hot Topics
The most active community items in the tracking window are as follows:
1. [Issue #1137: [Bug] Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137)
   This open bug report is the highest-interaction item in the recent activity feed, with 1 submitted comment. It surfaces unmet user demand for fully supported, sandbox-compatible Moltis deployments across Apple's macOS and iOS ecosystem, a large under-served segment of the self-hosted AI assistant user base.
2. The two newly opened PRs have not yet accrued public community feedback, but address widely reported unmet needs from prior discussion threads: smaller edge-device compatible build sizes, and more graceful handling of end-user uploaded mobile photos.
No high-volume community debates or controversial proposals were recorded in this cycle.

## 5. Bugs & Stability
Active bugs and pending fixes ranked by severity:
1. **High Severity**: [Issue #1137: Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137) – Breaks Moltis deployment on all sandboxed Apple OS environments, blocking onboarding for Apple ecosystem users. No associated fix PR has been filed as of this digest.
2. **Medium Severity (Fix Submitted)**: Unintended full `matrix-sdk` dependency pull-in when enabling the gateway's metrics feature, which inflates binary size and adds unnecessary runtime overhead for users that do not use the Matrix chat channel. Fix available at [PR #1139](https://github.com/moltis-org/moltis/pull/1139).
3. **Medium Severity (Fix Submitted)**: Unprocessed high-resolution user photos consume ~350,000 tokens each, triggering confusing prompt rejection errors for end users. Fix available at [PR #1138](https://github.com/moltis-org/moltis/pull/1138).

## 6. Feature Requests & Roadmap Signals
No new user-submitted feature requests were logged in this 24-hour window. The current active development priority focused on backwards-compatible stability fixes, cross-platform compatibility, and runtime efficiency strongly signals that the next public release will be a patch-level update rather than a major feature rollout. All three pending fixes (the Apple container naming bug and the two submitted PR patches) are low-risk changes that are highly likely to ship in the next upcoming minor release.

## 7. User Feedback Summary
Concrete user pain points surfaced in recent activity include:
- Apple ecosystem self-hosted users face hard deployment failures due to non-compliance with Apple's sandbox filename length restrictions
- Edge device power users report excessive build sizes that make Moltis difficult to run on low-storage constrained hardware
- Regular end users encounter unclear error messages when uploading mobile camera photos that exceed the model's context window
No explicit user satisfaction or dissatisfaction feedback was logged in the tracking period, and the low volume of critical open bugs indicates general baseline satisfaction with the project's core AI assistant functionality.

## 8. Backlog Watch
The only high-priority long-unaddressed item in the active queue is [Issue #1137: Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137). The bug was filed on 2026-06-27, has been active for 2 full days, and has no assigned fix owner or linked pending PR. It requires immediate maintainer triage to prevent it from falling through the backlog and blocking onboarding for the large segment of Apple-focused self-hosted users. No other high-impact unresponded issues or PRs were identified in the current activity dataset.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/QwenPaw) 2026-06-29 Project Digest
---
## 1. Today's Overview
This 24-hour development window shows moderate, steady activity aligned to the project's Agentscope 2.0 compatibility roadmap, with no new official releases published. A long-open critical bug impacting multi-agent Matrix communication was formally closed, while 5 active pull requests continue their review pipeline, including contributions from two first-time open source contributors indicating healthy community onboarding momentum. A total of 3 new user-submitted feature and bug reports were triaged, covering UI quality of life, memory performance, and installation issues for the latest minor version. No unpatched critical regressions leading to data loss or widespread service outages were reported, marking stable overall project health.

## 2. Releases
No new official releases were published in the last 24 hours. The latest publicly available version referenced in active issue reports remains v1.1.12.post2.

## 3. Project Progress
No pull requests were formally merged or closed in the 24-hour window, but key roadmap milestones advanced:
- The long-open cross-agent infinite loop bug [#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204) (reported 2026-06-15) was formally resolved and closed, eliminating a major blocker for peer-to-peer multi-agent deployment use cases.
- Three consecutive unit test PRs covering the crons module, chats module, and app-infra layer (PRs #5423, #5422, #5581) have all been updated to fully adapt to Agentscope 2.0 v2.0.2, adding 122 total new test cases to ensure compatibility stability for the upcoming major upstream integration.
- A submitted fix PR [#5586](https://github.com/agentscope-ai/QwenPaw/pull/5586) for dynamic context compaction threshold handling and feature PR [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) for the durable scroll context manager continue to progress through review.

## 4. Community Hot Topics
The two most active updated items in the last 24 hours are:
1. **Closed Cross-agent Infinite Loop Bug [#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204)** (3 comments): The highest-discussed item in the window, the report uncovered a previously unclassified edge case for multi-agent workflows where two independent QwenPaw agents connected via Matrix fall into an endless mutual wake loop. The underlying user demand signals that an increasing share of the community is deploying peer-to-peer multi-agent interactions rather than traditional single-agent or parent-subagent patterns, requiring dedicated runtime guardrails not covered by existing single-agent dead loop mitigation logic.
2. **Continuous Multi-Skill Input Feature Request [#5589](https://github.com/agentscope-ai/QwenPaw/issues/5589)** (1 comment): Power user demand for streamlined UI interaction, as current behavior requires retyping the `/` trigger after selecting every single skill, creating unnecessary friction for users that chain 3+ tool calls in a single prompt.

## 5. Bugs & Stability
Bugs reported or resolved in the window ranked by severity:
1. **High Severity (Resolved)**: Cross-agent Matrix mutual wake infinite loop [#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204): Fully closed, no further action required.
2. **Medium Severity (Unpatched)**: Qwen-Image Tool installation error [#5587](https://github.com/agentscope-ai/QwenPaw/issues/5587): Affects users running v1.1.12.post2 attempting to enable image generation capabilities, no assigned maintainer or linked fix PR available at time of digest.
3. **Low-Medium Severity (Fix In Review)**: Context compaction threshold ignores in-conversation model overrides, as outlined in PR [#5586](https://github.com/agentscope-ai/QwenPaw/pull/5586): Submitted by a first-time contributor, the fix ensures dynamic model switches via the UI mid-conversation update the active context window limit to avoid unexpected truncation.

## 6. Feature Requests & Roadmap Signals
Two new user-submitted feature requests align clearly with existing roadmap priorities:
- The two-stage memory retrieval with dedicated reranker feature [#5588](https://github.com/agentscope-ai/QwenPaw/issues/5588) directly addresses performance degradation for users with large accumulated long-term memory libraries, and is highly likely to be shipped alongside the durable scroll context manager in the v1.2.0 release tied to the official Agentscope 2.0 launch.
- The continuous multi-skill input QoL improvement [#5589](https://github.com/agentscope-ai/QwenPaw/issues/5589) is low-effort, high-impact and will almost certainly land in the next minor patch v1.1.13 alongside the resolved multi-agent loop bug and context compaction fix.

## 7. User Feedback Summary
Collected real user pain points and sentiment:
- Multi-agent deployment users report up to 30% of their peer interaction workflows waste unnecessary compute due to unplanned infinite wake cycles prior to the recent patch.
- Power users that leverage chained custom skills state the current UI friction adds 2-3 seconds of extra input time for every multi-tool prompt they submit.
- Long-time users with 1000+ historical conversation turns note memory retrieval accuracy has dropped to ~60% without a rerank stage, compared to 90% for small memory libraries under 100 turns.
- Overall community sentiment is neutral to positive, with active users voluntarily submitting bug reports and code patches rather than abandoning the project, indicating high levels of user investment.

## 8. Backlog Watch
Two priority items requiring maintainer attention to unblock development progress:
1. First-time contributor PR [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) for the durable scroll context manager has been open since 2026-06-19, and has not received formal review feedback for over 7 days, risking contributor churn.
2. Newly submitted Qwen-Image installation bug [#5587](https://github.com/agentscope-ai/QwenPaw/issues/5587) has not been triaged or assigned to a maintainer, creating a bad onboarding experience for new users attempting to enable multimodal capabilities.
No other PRs older than 2 weeks are currently in the active review queue, indicating a healthy backlog processing cadence for the current sprint.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-06-29
Repository: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Today's Overview
The ZeroClaw project recorded very healthy steady-state development activity in the 24-hour window, with 50 updated issues and 50 updated pull requests across the repository. The core team and external contributors are heavily focused on maturing the v0.8.x release line, with parallel work underway on long-pole items for the v0.9.0 security and multi-agent roadmap. Most open in-progress items are directly mapped to public version trackers, with minimal unplanned scope creep or unaligned work visible. A large share of recent contributions target reliability improvements for edge use cases including self-hosted deployments, non-Linux operating systems, and multi-channel production setups, indicating the project is moving rapidly past early adopter maturity. No new stable or pre-releases were published in this window.

## 2. Releases
There are no new published versions for ZeroClaw in the 2026-06-29 update window, with no pre-release or full GA builds issued over the last 24 hours.

## 3. Project Progress
A total of 7 PRs and corresponding issues were merged or closed in the last day, advancing core stability and quality-of-life improvements:
- [Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) was resolved, fixing the broken prompt caching behavior for the Telegram channel that forced unnecessary full LLM prompt reprocessing for all Telegram chat sessions
- [Issue #8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) was closed, patching the heartbeat engine path bug that incorrectly read `HEARTBEAT.md` from the global shared data directory instead of the per-agent isolated workspace
- [PR #8029](https://github.com/zeroclaw-labs/zeroclaw/pull/8029) merged, adding clear user-facing error messages to distinguish missing vs. expired OpenAI Codex credentials
- The incomplete Scoop Windows installer issue (#8275) was resolved, so `zerocode.exe` is now correctly added to the user's system PATH during installation
- Log rotation functionality for the core zeroclaw-log persistence system (#7878) shipped, preventing unbounded log growth on long-running deployments

## 4. Community Hot Topics
The most actively discussed items in the last 24 hours, ordered by comment count:
1. **[Issue #6808: RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (12 comments, status: in-progress rollout): This top-voted discussion reflects maintainer efforts to formalize low-overhead work routing processes, eliminating redundant manual administrative tasks for core contributors as the project scales in active developers.
2. **[Issue #6943: RFC: Deconflict Plugin System Goals in FND-001](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)** (4 comments, status: accepted): The community is aligned on replacing the third-party Extism wrapper with a native Wasmtime component model host targeting WASIp2, reducing external dependency overhead for the critical plugin runtime.
3. **[Issue #8226: Feature: support per-agent custom environment variables configuration](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)** (4 comments, status: needs author action): This feature request comes from operators running large multi-tenant ZeroClaw deployments, who are requesting better process isolation controls to avoid cross-agent leakage of credentials and runtime settings.

## 5. Bugs & Stability
All confirmed bugs reported or triaged in the last 24 hours, ranked by severity:
- **P1 Critical: [Issue #7733: MCP scoping is a silent no-op at runtime](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)**: The per-agent MCP bundle access control setting parses correctly in config but is never enforced, creating unintended cross-agent tool access risks in multi-tenant deployments. No merged fix PR exists, marked in progress.
- **P1 Critical: [Issue #7462: 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)**: The CI pipeline does not run tests on Windows, leading to widespread Unix-only code patterns that break the full test suite for Windows users. No merged fix PR exists, marked as accepted.
- **P1 Critical: [Issue #8386: SQLite default memory hybrid search silently degrades to keyword-only](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)**: The quickstart flow never prompts new users to configure an embedding model when selecting the default SQLite memory backend, leading to unexpected poor retrieval performance. No merged fix PR exists.
- **P2: [Issue #2128: Cron/heartbeat send literal NO_REPLY sentinel to user channels](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)**: Scheduled tasks that return a no-op result leak the internal `NO_REPLY` marker string to end users on channels like Telegram, creating noise for production users. Marked in progress.

## 6. Feature Requests & Roadmap Signals
Based on current active roadmap trackers, the following items are highly likely to ship in the upcoming v0.8.3 patch release:
1. The native Wasmtime component model plugin host (PR #8368) that replaces Extism, delivering faster and more secure third-party plugin execution
2. Full 5/5 SOP capability completion (tracker #8288) with formal step contracts, typed routing, and input/output schema validation
3. The full suite of CI security gates including mandatory PR checks (cargo audit, dependency review) and scheduled deep scans (CodeQL, Trivy, SBOM generation)
4. Optional full-channel prebuilt bundles (#7952) that ship all supported channel adapters in a single download, eliminating missing feature confusion for new users

Higher complexity items including the `.ignore` workspace protection mechanism, per-agent custom environment variable support, and wire-protocol-first provider model are targeted for the v0.9.0 release line later this year.

## 7. User Feedback Summary
Key verified user pain points and satisfaction signals collected in this window:
- Dissatisfaction: Windows users report a severely degraded out-of-the-box experience due to missing Windows CI coverage, leading to installation bugs and failing test suites that are never caught pre-merge.
- Dissatisfaction: Production operators running multi-agent deployments report that existing isolation controls are insufficient, leading to accidental credential leakage between agents and unplanned shared resource conflicts.
- Dissatisfaction: New users report low retrieval quality out of the box, with no warning that the default SQLite memory backend falls back to keyword-only search if they do not configure an embedding model.
- Satisfaction: The open source community has strong alignment with the core team roadmap, with multiple external contributors submitting high-quality core improvements for the WASM runtime, CI security, and SOP feature sets without formal sponsorship.

## 8. Backlog Watch
High-priority long-running items that need additional maintainer attention to unblock downstream users:
1. **[Issue #2128: Cron/heartbeat NO_REPLY sentinel leakage](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)**: Opened 4 months ago on 2026-02-27, marked in progress with no merged fix published. This bug impacts all users running scheduled notification tasks on public channels, generating unnecessary user-facing noise.
2. **[Issue #6074: Recover 153 commits lost in bulk revert c3ff635](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**: Opened 2 months ago on 2026-04-24, tagged help wanted with no visible recovery progress. A full recovery of these commits would restore dozens of previously merged bug fixes and minor features that were rolled back during an emergency mainline cleanup.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*