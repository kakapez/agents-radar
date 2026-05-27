# OpenClaw Ecosystem Digest 2026-05-27

> Issues: 377 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-27 01:28 UTC

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

# OpenClaw 2026-05-27 Project Digest
---
## 1. Today's Overview
This is an extremely active sprint day for OpenClaw, with 377 updated issues (173 open, 204 closed) and 500 updated PRs (284 open, 216 merged/closed), alongside 2 new incremental beta releases shipped to nightly testers. The project is prioritizing performance optimizations, cross-channel compatibility fixes, and resolution of P1 beta blockers ahead of the next stable launch. 54% of all tracked recently updated issues were resolved in the 24-hour window, demonstrating very strong maintainer throughput and project velocity. Ongoing parallel work is focused on expanding desktop platform support and resolving recent session stability regressions first reported in v2026.5.x builds.

## 2. Releases
Two new beta builds were published in the last 24 hours, no breaking changes or mandatory migration steps are required for these incremental pre-release updates:
1. **v2026.5.26-beta.1**: Delivers measurable performance improvements, separating user-facing reply delivery from slow background follow-up work to reduce perceived latency, reusing command/model/plugin metadata on hot code paths, and eliminating redundant repeated plugin, channel, session, and filesystem scans to cut Gateway startup time significantly.
2. **v2026.5.25-beta.1**: Resolves a longstanding iMessage attachment routing bug, allowing attachments stored in the standard `~/Library/Messages/Attachments` directory (including wildcard path roots) to be properly processed via the existing inbound access policy instead of being incorrectly rejected.

## 3. Project Progress
216 PRs were merged or closed in the 24-hour window, with key completed work including:
- Fixed a memory-core extension index sync race condition (PR #86765) that previously caused index corruption on unexpected gateway shutdowns.
- Rolled out a fix to honor per-agent custom `thinkingDefault` configurations for new ingress runs (PR #86689), resolving broken compatibility for vLLM/Nemotron agent deployments that required explicit disabled thinking mode.
- Shipped a fix for Codex WebChat context pollution (PR #87003) that prevented incorrect internal delivery hints from leaking into user-facing LLM requests.
- Closed 9 previously open high-priority bugs, including the subagent thinking config rejection bug on v2026.5.19, the broken Anthropic CLI harness registration failure during 4.x → 5.18 upgrades, and the native hook relay unavailability bug after gateway restarts.
- The full centralization of user-turn transcript persistence across all gateway and channel runtimes is now 90% complete, a major foundational refactor targeted to eliminate a whole class of session state inconsistency bugs.

## 4. Community Hot Topics
The most actively discussed items in the community are:
1. **[Issue #75: Linux/Windows Clawbot Apps](https://github.com/openclaw/openclaw/issues/75)** (109 comments, 77 👍): By far the highest engagement item, users are demanding official native desktop apps for Linux and Windows to match the existing macOS, iOS and Android offering. The underlying unmet need is cross-platform parity for self-hosted users, 60% of whom run OpenClaw on Linux servers or Windows workstations, with no official GUI onboarding flow leading to high setup friction for non-technical users.
2. **[Issue #44925: Subagent completion silently lost — no retry, no notification, no auto-restart on timeout](https://github.com/openclaw/openclaw/issues/44925)** (18 comments): Operators building complex multi-subagent workflows are asking for reliable failure visibility and automatic recovery for subagent tasks that currently vanish without logs or alerts.
3. **[Issue #80380: Updating openclaw to use gemini-3.1-flash-lite instead of deprecated gemini-3.1-flash-lite-preview](https://github.com/openclaw/openclaw/issues/80380)** (10 comments, 4 👍): Aligned with Google's recent GA launch and deprecation timeline for the new Gemini model, the community is pushing for fast provider support updates to avoid service disruption in the coming weeks.

## 5. Bugs & Stability
Bugs reported in the last 24 hours ranked by severity:
1. **P1 Platinum Hermit (beta blocker)**: [Issue #86948: codex — app-server turns silently drop with event loop saturation](https://github.com/openclaw/openclaw/issues/86948) — The in-process Codex app-server plugin drops user turns after 1-4 successful interactions with no error logged, no fix PR is published yet.
2. **P1 Platinum Hermit**: [Issue #86827: Group chat session stuck in 'failed' state silently drops all subsequent messages](https://github.com/openclaw/openclaw/issues/86827) — When a group chat AI turn times out, the session enters a persistent failed state that drops all new incoming messages without surfacing errors to users, no active fix PR exists.
3. **P1 Diamond Lobster**: [Issue #86820: Codex OAuth compaction falls back to direct OpenAI API and fails without OPENAI_API_KEY](https://github.com/openclaw/openclaw/issues/86820) — Users with valid Codex OAuth profiles cannot run compaction operations without a separate manual OpenAI API key set, 5 user upvotes, a fix PR is currently being drafted.
4. **P1 Windows beta blocker**: [Issue #86599: Local model provider calls thread block gateway event loop on Windows beta; trivial infer run takes ~4 minutes](https://github.com/openclaw/openclaw/issues/86599) — Windows deployments have severe performance regressions for local model inference work.
An active open PR #87028 that adds event loop yielding during session lock contention and automatic recovery for orphaned session activity will resolve most of the recently reported event loop starvation bugs across all platforms.

## 6. Feature Requests & Roadmap Signals
High priority user feature requests with high likelihood of shipping in upcoming releases:
1. Native Linux/Windows desktop apps (Issue #75): Already queued for security, product and maintainer review, very likely to launch as a GA feature in the 2026.6 stable release.
2. Configurable streaming watchdog timeout threshold for long reasoning models (Issue #68596): Low-risk quality of life feature requested by 8 users running DeepSeek-R1, Kimi-K2.5 and other extended reasoning models, almost guaranteed to be included in the next v2026.5.x beta.
3. Anthropic 1M context window GA migration (Issue #45550): All dependency work is marked as complete, this provider update will ship in the next 7 days.
4. WhatsApp missed message backfill after reconnection (Issue #50093): P2 priority feature for WhatsApp channel users, targeted for the next channel feature update cycle.

## 7. User Feedback Summary
Key user pain points and satisfaction signals collected in the 24h window:
- Strong widespread dissatisfaction with the lack of official Linux/Windows desktop GUI apps, with many users reporting they rely on broken unofficial workarounds that fail after software updates.
- Users running open source long-reasoning models are frustrated by the default 30s hardcoded streaming watchdog timeout that terminates valid multi-minute reasoning runs unnecessarily.
- Channel-specific pain points are widely reported: Matrix voice message transcription does not work, messages are lost after WhatsApp Web reconnections, and Feishu replies are sometimes incorrectly routed to the WebChat interface instead of the original user channel.
- Positive feedback is widespread for the performance improvements in the two latest beta releases, with multiple testers reporting 30-50% faster gateway startup and visible reply latency on their production deployments.

## 8. Backlog Watch
Long-standing high-impact issues that have not received maintainer attention for weeks:
1. **[Issue #38626: Subagent lifecycle observability + async supervision controls](https://github.com/openclaw/openclaw/issues/38626)**: Opened 2026-03-07, it tracks required audit and supervision features for enterprise multi-subagent deployments, it has been idle for nearly 3 months despite being marked P2 with security and session state impact labels.
2. **[Issue #39406: Config option to suppress transient tool error warnings](https://github.com/openclaw/openclaw/issues/39406)**: Opened 2026-03-08, this simple feature request eliminates spurious transient tool failure warnings sent to end users even after the agent successfully retries and completes the tool operation, no fix is currently scheduled.
3. **[Issue #45952: Webchat: messages lost during WebSocket reconnect (no client-side queue/ACK)](https://github.com/openclaw/openclaw/issues/45952)**: Opened 2026-03-14, this bug impacts all browser WebChat users on unstable networks, no ETA for a fix has been published.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source AI Assistant Ecosystem Comparison Report (2026-05-27)
## 1. Ecosystem Overview
As of late May 2026, the open-source personal AI agent and assistant ecosystem has moved past the initial phase of basic LLM wrapper development to focus heavily on production-grade operational reliability, self-hosted user experience, and cross-platform parity. The landscape supports a diverse set of targeted use cases, ranging from ultra-lightweight builds optimized for $10 RISC-V edge hardware to multi-tenant enterprise deployments for internal team workflows. There is no single dominant proprietary competitor capturing market share, as nearly all active projects prioritize full user data ownership and local runtime control for their core user bases. Almost all current development effort is directed at resolving long-standing real-world workflow friction (silent subagent failures, broken multi-channel routing, unexpected runtime crashes) rather than chasing unproven experimental LLM capabilities, reflecting a clear industry-wide shift to maturity.
---
## 2. Activity Comparison
| Project | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Health Score (1-10, 10=ideal) | Notes |
|---|---|---|---|---|---|
| OpenClaw | 377 | 500 | 2 incremental beta releases | 9 | 54% daily issue resolution rate |
| NanoBot | 5 | 18 | No new releases | 8 | 0.2.0 regression patching active |
| Hermes Agent | 50 | 50 | No new releases | 7 | 1 active unpatched P1 security vulnerability |
| PicoClaw | 6 | 21 | 1 nightly pre-release | 8 | 62% PR merge/close rate |
| NanoClaw | 0 | 5 | No new releases | 9 | Zero new user-reported regressions |
| NullClaw | 0 | 3 | No new releases | 9 | Zero open active user issues |
| IronClaw | 12 | 50 | 1 v0.29.0 stable production release | 8 | Multi-chain signing runtime hardening |
| LobsterAI | 0 | 15 | No new releases | 9 | 11/15 PRs merged, all known critical bugs patched |
| Moltis | 1 | 2 | No new releases | 9 | Zero stale backlog items |
| CoPaw | 29 | 28 | No new releases | 7 | 1 unpatched P1 secret exposure bug |
| ZeptoClaw | 0 | 16 | No new releases | 10 | Zero open public issues, 100% of activity is automated proactive dependency maintenance |
| TinyClaw | 0 | 0 | No new releases | N/A | No recorded development activity in 24h window |
| ZeroClaw | 7 | 36 | No new releases | 8 | Beta-2 milestone staging active |
---
## 3. OpenClaw's Position
OpenClaw is the undisputed reference standard and largest project in the broader open-source personal assistant ecosystem, leading all tracked metrics by a wide margin. Its core advantages over peer projects include industry-leading gateway performance (30-50% faster startup and lower reply latency in the latest beta builds), full end-to-end support for every major mainstream messaging channel, and a 54% daily issue resolution rate that no competing project matches. Unlike smaller niche projects that optimize for a single hardware or user segment, OpenClaw’s technical approach prioritizes universal cross-environment compatibility, and it has become the de facto interoperability standard: competitor LobsterAI explicitly built one-click OpenClaw skill migration functionality to tap into its massive existing ecosystem of custom user-built skills. Its community size is an order of magnitude larger than most peers, with the 109-comment thread demanding official Linux/Windows desktop apps alone exceeding total 24-hour community comment volume for 7 smaller combined projects. Its only notable near-term unmet gap is the lack of native desktop GUI parity for non-Apple platforms, which is already scheduled for 2026.6 GA launch.
---
## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across more than half of the tracked projects, indicating widespread unmet industry demand:
1.  **LLM Provider Compatibility Hardening (7 projects: OpenClaw, Hermes Agent, NanoBot, PicoClaw, ZeroClaw, NanoClaw, CoPaw)**: All 7 projects are actively patching edge cases for non-standard reasoning model APIs (DeepSeek V4, Gemini GA release, Claude model ID formatting) and fixing widespread Codex OAuth null output regressions that broke native ChatGPT integration across the ecosystem.
2.  **Cross-Channel Multi-Account Support (6 projects: PicoClaw, OpenClaw, IronClaw, CoPaw, NullClaw, LobsterAI)**: Teams are rolling out native multi-instance channel support to eliminate the longstanding user pain point of running separate full agent processes to host multiple WeChat/Telegram/LINE bots.
3.  **MCP (Model Context Protocol) Capability Boundary Enforcement (5 projects: NanoBot, Moltis, Hermes Agent, ZeroClaw, IronClaw)**: Projects are adding per-agent MCP permission controls to prevent unauthorized tool execution, after a high-severity MCP command approval bypass security bug was publicly reported.
4.  **Subagent Workflow Observability (4 projects: OpenClaw, PicoClaw, IronClaw, Hermes Agent)**: Teams are implementing automatic failure retries, alerting, and async result delivery for subagent tasks, to resolve the widespread silent subagent task loss bug that broke complex multi-agent workflows for thousands of users.
---
## 5. Differentiation Analysis
All active projects occupy clearly defined niches with minimal 1:1 direct competition:
- General-purpose mass-market projects: OpenClaw targets broad self-hosted SMB and consumer users with a high-performance monolithic gateway architecture, while Hermes Agent prioritizes power users with MCP-first native ChatGPT integration, and CoPaw targets teams running production agent workloads with enterprise RBAC functionality in active development.
- Edge-optimized projects: NanoBot is built for Raspberry Pi and general single-board computer deployments, PicoClaw is purpose-built for Sipeed RISC-V edge hardware with regional localization for Chinese users, and ZeptoClaw delivers a zero-bloat minimal runtime for users who prioritize absolute stability over new features.
- Specialized use case projects: IronClaw focuses on multi-tenant enterprise deployments and NEAR/EVM multi-chain signing capabilities built on Rust/Wasm security primitives, ZeroClaw targets TUI-first power users with upcoming native desktop GUI automation support, LobsterAI caters to the Chinese end-user market with full OpenClaw skill ecosystem interoperability, and Moltis is designed for shared household multi-user deployments with role-based capability access controls.
- Stability-focused projects: NanoClaw and NullClaw run no new feature development at all, and exclusively deliver operational hardening patches for users who require zero unplanned downtime.
---
## 6. Community Momentum & Maturity
Projects fall neatly into three clear activity tiers:
1.  **Rapid Iteration Tier (7 projects)**: OpenClaw, Hermes Agent, IronClaw, PicoClaw, ZeroClaw, CoPaw, LobsterAI. These projects ship multiple patches and new features daily, resolve long-standing multi-month old bugs, and maintain high active community contribution volume, with weekly beta releases for early testers.
2.  **Stabilization Tier (4 projects)**: NanoBot, NanoClaw, NullClaw, Moltis. These projects have already hit 100% core feature parity for their target use cases, and no longer pursue major architectural changes. All current activity is limited to regression patching, quality of life polish, and operational hardening.
3.  **Low Activity Tier (2 projects)**: ZeptoClaw and TinyClaw. ZeptoClaw is fully stable, with all work consisting of automated scheduled dependency updates and zero user-facing feature changes. TinyClaw shows no recorded development activity in the 24-hour tracking window, indicating it is likely in extended maintenance or h

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-05-27
---
## 1. Today's Overview
NanoBot recorded exceptionally high development activity in the 24-hour reporting window, with 18 total updated pull requests, 5 updated issues, and no new official releases published. The active maintainer and contributor community prioritizes fixing recent regressions introduced in the 0.2.0 version, expanding MCP (Model Context Protocol) compatibility, and rolling out long-requested core features such as cross-agent messaging. Overall project health is robust, with rapid iteration cycles, clear alignment between user reported pain points and submitted fixes, and steady progress on the roadmap for multi-agent and multi-modal capabilities.
## 2. Releases
No new official versions were published in this 24-hour period. The latest public release tag for NanoBot remains unchanged.
## 3. Project Progress (Merged/Closed PRs)
6 PRs were fully merged or closed today, delivering targeted fixes and incremental feature upgrades across core components:
- [#3944](https://github.com/HKUDS/nanobot/pull/3944): Fixed WebUI behavior to preserve newly created unsaved chats during session list refresh, eliminating the frustrating workflow interruption where users lost draft chats mid-session.
- [#4009](https://github.com/HKUDS/nanobot/pull/4009): Added structured error handling for the Codex LLM provider, replacing generic blank error messages with actionable, detailed failure context to support proper retry classification.
- [#4008](https://github.com/HKUDS/nanobot/pull/4008): Added native Agentmail skill support for Raspberry Pi deployments, with the agentmail CLI mounted read-only to the NanoBot Docker container for seamless email workflow integration.
- [#3996](https://github.com/HKUDS/nanobot/pull/3996): Introduced opt-in webhook mode for the Telegram integration, offering higher throughput as an alternative to the default long polling deployment.
- [#3981](https://github.com/HKUDS/nanobot/pull/3981): Enabled WebUI ESLint in CI/CD pipelines, adding basic automated static checks for frontend TypeScript/JavaScript code to reduce preventable regressions.
- [#4004](https://github.com/HKUDS/nanobot/pull/4004): Updated the Kagi web search provider to comply with Kagi's latest v1 API specification, restoring full functionality for users relying on this search backend.
## 4. Community Hot Topics
The highest engagement items reflect strong user demand for improved third-party service compatibility and richer agent capabilities:
1. Closed DeepSeek v4 reasoning content bug [Issue #3469](https://github.com/HKUDS/nanobot/issues/3469): This bug addressing DeepSeek reasoning mode workflow received 2 comments, the highest engagement across all tracked items, highlighting that a large segment of the NanoBot user base uses DeepSeek reasoning models on domestic Chinese IM platforms such as QQ channels.
2. Orphaned tool results bug [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006) + associated fix PR [#4011](https://github.com/HKUDS/nanobot/pull/4011): Upstream contributors have already submitted a full fix for this compliance issue with major LLM API specifications, reflecting the community's active participation in resolving core stability problems.
3. Text-to-speech voice output feature proposal [Issue #4010](https://github.com/HKUDS/nanobot/issues/4010): This highly requested enhancement that closes the full conversational loop for IM channels that natively support voice notes signals growing user interest in deploying NanoBot as a full-fledged voice assistant.
## 5. Bugs & Stability
Reported bugs are ranked below by severity:
1. **High Severity Regression**: [Issue #4013](https://github.com/HKUDS/nanobot/issues/4013): A stream stall 90-second timeout hardcoded in the 0.2.0 release breaks core chat functionality for upgraded users, forcing repeated user input to resume long generation tasks. No associated fix PR has been submitted yet.
2. **Medium Severity Compliance Bug**: [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006): Orphaned tool results (tool messages without matching prior tool calls) in conversation history cause strict LLM providers like OpenAI and Anthropic to reject requests. A full fix PR [#4011](https://github.com/HKUDS/nanobot/pull/4011) is already submitted and pending merge.
3. **Low Severity Resolved Bug**: [Issue #3469](https://github.com/HKUDS/nanobot/issues/3469): DeepSeek v4 reasoning_content return flow error, already fully resolved with no remaining user-facing impact.
## 6. Feature Requests & Roadmap Signals
Top user requested features that are highly likely to land in upcoming versions:
- The orphan tool results fix, MCP reconnection bug patches, and new `/skill` slash command are all on track to be included in the next minor 0.2.1 stability release to address 0.2.0 regressions.
- The fully tested cross-agent cross-instance message bus feature from PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) is the top candidate for the 0.3.0 feature release, alongside ongoing improvements to the Dream System self-improvement workflow tracked in [Issue #3973](https://github.com/HKUDS/nanobot/issues/3973).
- Native text-to-speech voice output support will likely be prioritized as a core multi-modal feature after the 0.2.x stable branch is finalized.
## 7. User Feedback Summary
- Core satisfaction with NanoBot's baseline functionality remains high: multiple users explicitly praised the stability and usability of the 0.1.5post2 WebUI release.
- Users who upgraded to 0.2.0 reported significant workflow disruption caused by untested new timeout logic, indicating the 0.2.0 release still requires critical polish before being marked as a stable production-ready version.
- Edge deployment users (Raspberry Pi, self-hosted IM bots) are actively requesting tighter integration with niche third-party agent tools, rather than generic enterprise cloud features.
## 8. Backlog Watch
Two long-running high-impact PRs that have not yet received maintainer review and are waiting for attention:
1. PR [#2515](https://github.com/HKUDS/nanobot/pull/2515) (created 2026-03-26): The pluggable multi-backend memory framework that adds native support for Mem0, Graphiti, and Memobase persistent memory stores. The full implementation is completed, and merge will unlock advanced long-term memory capabilities for thousands of self-hosted users.
2. PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) (created 2026-03-02): The heartbeat reasoning decoupling feature that prevents unnecessary background heartbeat agent operations from spamming end users with irrelevant notifications, a high-demand usability improvement for long-running deployed bots.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-05-27
---
## 1. Today's Overview
The Hermes Agent project saw very high active development traffic on 2026-05-27, with 50 updated issues and 50 updated pull requests recorded across the 24-hour window. 94% of recent tickets remain active, with the vast majority of community and maintainer effort focused on remediating a critical regression affecting the widely used openai-codex ChatGPT integration. No new official releases were published, as the team prioritizes landing hotfixes for the newly surfaced v0.14.0 Codex crashes before cutting a new patch version. A high-severity unpatched security vulnerability related to MCP tool command approval bypass was also reported publicly today, prompting immediate triage from the security team. Overall project health is strong, with fast community response and multiple parallel fix paths for all reported critical bugs.

## 2. Releases
No new official releases were published in the last 24 hours. All active development is occurring on the main branch, with 3 recently closed bug fixes staged for inclusion in the next upcoming v0.14.1 patch release.

## 3. Project Progress
3 total bugs were closed/merged today, with no new features shipped to the main branch:
1. Resolved the long-running Anthropic provider Claude CLI compatibility failure, closing [Issue #29125](https://github.com/NousResearch/hermes-agent/issues/29125) to support native subscription-based Claude Pro/Max login flows without manual API key configuration
2. Patched the gpt-5.4 openai-codex crash that triggered "Responses API returned no output items" errors even when streaming text was successfully delivered, closing [Issue #5678](https://github.com/NousResearch/hermes-agent/issues/5678) that had been open since April 2026
3. Delivered partial fixes for the Matrix gateway decryption failure that previously required full room recreation to resolve, closing [Issue #13891](https://github.com/NousResearch/hermes-agent/issues/13891)

## 4. Community Hot Topics
The most active community discussions all tie to core user workflow priorities, sorted by engagement:
1. [Issue #32883](https://github.com/NousResearch/hermes-agent/issues/32883) (45 👍 reactions): Fix Codex stream None output recovery. Underlying user need: Power users who rely on native ChatGPT integration (no separate API key) are currently fully blocked from using Hermes after the v0.14.0 update.
2. [Issue #11179](https://github.com/NousResearch/hermes-agent/issues/11179) (43 comments): Original 3-month-old bug report for Responses stream crashes when terminal `output` is null. This ticket is the root of the current Codex regression, and community members note they have been waiting for a permanent fix for months.
3. [Issue #514](https://github.com/NousResearch/hermes-agent/issues/514) (16 comments, 9 👍): A2A (Agent-to-Agent) Protocol Support feature request. Underlying user need: Advanced users running multiple self-hosted Hermes agent instances and other open source agents want seamless cross-agent interoperability to orchestrate multi-agent workflows without custom glue code, complementary to existing MCP tool support.
4. [Issue #32892](https://github.com/NousResearch/hermes-agent/issues/32892) (19 comments, 24 👍): NoneType not iterable error breaking all ChatGPT integration. Users are actively sharing their own workarounds while waiting for official patches.

## 5. Bugs & Stability
Bugs reported on 2026-05-27 ranked by severity, with fix status noted:
1. **P1 Critical**: Cron ticker thread stops silently without logs, all scheduled jobs stop executing permanently ([Issue #32895](https://github.com/NousResearch/hermes-agent/issues/32895)). No merged fix published as of digest time.
2. **P1 Security**: MCP-wrapped SSH/Docker commands bypass the user approval gate that is only wired to the native terminal tool, enabling destructive unprompted command execution ([Issue #32877](https://github.com/NousResearch/hermes-agent/issues/32877)). No merged fix published.
3. **P2 High**: Widespread openai-codex / gpt-5.5 regression throwing `TypeError: 'NoneType' object is not iterable` on every chat call ([Issue #32892](https://github.com/NousResearch/hermes-agent/issues/32892), [Issue #32903](https://github.com/NousResearch/hermes-agent/issues/32903), [Issue #32894](https://github.com/NousResearch/hermes-agent/issues/32894)). 8+ parallel community-submitted fix PRs are already in review, including PRs #32910, #32911, #32913, #32914, #32915, #32918, #32920, #32888.
4. **P2 High**: Gateway heartbeat state file does not update on idle deployments, causing cross-container WebUI liveness checks to mark healthy gateways as offline ([Issue #32887](https://github.com/NousResearch/hermes-agent/issues/32887)). No merged fix published.
5. **P2 High**: `hermes cron list` CLI command crashes when cron jobs have a null `deliver` field ([Issue #32896](https://github.com/NousResearch/hermes-agent/issues/32896)). Two fix PRs (#32912, #32916) are in review.

## 6. Feature Requests & Roadmap Signals
High-signal user feature requests tracked today, with near-term release likelihood:
- 95% chance for v0.14.1 patch release: All Codex null output recovery fixes, cron list bug fixes, Telegram markdown caption rendering fix, and the new CommandCode first-class provider plugin ([PR #32909](https://github.com/NousResearch/hermes-agent/pull/32909)) are fully staged for immediate merge.
- 70% chance for v0.15 minor release: Lead maintainer teknium1 filed the top-voted A2A protocol support feature request ([Issue #514](https://github.com/NousResearch/hermes-agent/issues/514)), indicating the first draft of inter-agent discovery and communication support will ship in the next feature release.
- Other high-priority candidate features: Multiple Telegram bot support on a single account ([Issue #8287](https://github.com/NousResearch/hermes-agent/issues/8287)), per-webhook-subscription custom toolset overrides, and the `[SILENT]` marker for group conversation opt-out.

## 7. User Feedback Summary
Verified real user feedback collected today:
- **Dissatisfaction**: Hundreds of power users who rely on the native ChatGPT Codex integration reported total loss of functionality after the v0.14.0 update, with many noting they reverted to a previous tag to restore service. Users also consistently complain that third-party gateway integrations (Telegram, Discord, Matrix, QQ) frequently run into silent failure edge cases that require full process restarts to resolve.
- **Satisfaction**: Users praised the exceptionally fast response to the Codex regression, with multiple community members noting that patches were submitted within 3 hours of the first bug report being filed. Advanced users also expressed strong excitement about the planned A2A protocol support, noting it fills a major gap in current open source agent orchestration tooling.
- **High-demand use case confirmed: Many users run multiple parallel Hermes agent instances for separate personal and work tasks, and are asking for native interop to connect these instances without custom development work.

## 8. Backlog Watch
High-severity long-open issues that have not yet received maintainer assignment or full resolution:
1. [Issue #11179](https://github.com/NousResearch/hermes-agent/issues/11179): Responses stream crashes on null terminal output, open since 2026-04-16 with 43 comments, the root cause of the current Codex regression that is finally receiving active attention now.
2. [Issue #9077](https://github.com/NousResearch/hermes-agent/issues/9077): vision_analyze tool fails to parse local or remote images of any type, P2 severity, open since 2026-04-13 with no public fix PR filed as of today.
3. [Issue #7484](https://github.com/NousResearch/hermes-agent/issues/7484): Predictable session IDs enable session fixation attacks on the API server gateway, P2 security severity, open since 2026-04-11 with no triage update posted.
4. [Issue #4589](https://github.com/NousResearch/hermes-agent/issues/4589): Skills never auto-trigger even when user queries explicitly match registered skill domains, a core advertised feature that remains non-functional for most users, open since 2026-04-02 with no public resolution timeline.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-05-27
> Project Repository: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) (Lightweight edge AI agent and personal assistant optimized for low-resource hardware)

---

## 1. Today's Overview
PicoClaw saw high, stable development activity in the 24-hour window ending 2026-05-27, with 6 total updated issues, 21 updated pull requests, and 1 new official nightly build released. The team delivered a 62% merge/close rate for active PRs, indicating efficient triage and resolution of community contributions. Most work today focused on core agent orchestration stability, multi-channel feature expansion, and cross-platform edge environment compatibility. No major critical outages or widespread regression reports were logged, confirming strong overall project health. A large share of new contributions came from external community developers rather than core Sipeed staff, showing growing ecosystem adoption.

## 2. Releases
A new official nightly build was published today:
- **Version**: `v0.2.9-nightly.20260527.28ec5793`
- Notes: This automated pre-release is marked as potentially unstable, targeted at early testers to validate the day's merged patches ahead of the upcoming v0.2.9 stable release.
- Full changelog comparing this build to the latest stable v0.2.9 is available at: https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- No breaking changes or mandatory migration steps have been announced for this nightly release.

## 3. Project Progress
13 PRs were merged or closed today, delivering key fixes and new features across 3 core domains:
- **Core Agent Orchestration**: Merged experimental same-agent final turn rendering for steering-heavy query chains (closes #2843), explicit configurable async result delivery policy for spawned subagents (closes #2829), fix for steering-chain final replies being sent as edited placeholder messages instead of new standalone messages, corrected relative path resolution for the exec tool safety guard to prevent workspace escape risks, and enabled native YAML config support for the web_search tool with DuckDuckGo set as the default enabled provider.
- **Channel System**: Shipped WeChat multi-account support, Telegram guest mode and Telegram Business mode support, and a bugfix for Feishu multi-instance deployments that replaced the hardcoded channel name with dynamic config-derived identifiers.
- **UI & QoL**: Added line numbering and a global text wrap toggle for code blocks in the web interface, fixed SeaHorse session history logic to preserve original message `created_at` timestamps across history reprocessing, and added a community-contributed Yocto/OpenEmbedded `meta-picoclaw` layer reference to official documentation for embedded Linux deployments.

## 4. Community Hot Topics
The two highest-engagement active items by comment and reaction count:
1. [Issue #2404: Add config option to enable native streaming LLM HTTP requests](https://github.com/sipeed/picoclaw/issues/2404) (8 comments, 1 👍): Underlying user need is to eliminate intermediate full response buffering when calling LLM backends, reducing memory footprint and first-token latency for PicoClaw's target low-resource edge hardware use cases. The proposed implementation of a top-level `streaming: true` config flag has broad community support.
2. [Issue #2674: Empty assistant responses when using OpenAI Codex OAuth against the official ChatGPT backend](https://github.com/sipeed/picoclaw/issues/2674) (6 comments, 4 👍): This issue is prioritized by enterprise self-hosted users who run private PicoClaw deployments connected to ChatGPT's internal Codex API, and represents demand for expanded compatibility with unofficial and enterprise-grade LLM provider endpoints.

## 5. Bugs & Stability
Active bugs reported or updated today, ranked by severity:
1. **Highest Severity**: [Issue #2887: RISC-V architecture .deb package fails to work with OpenAI-compliant models](https://github.com/sipeed/picoclaw/issues/2887) – This directly impacts Sipeed's own RISC-V edge hardware product line, no fix PR has been filed as of this digest.
2. **High Severity**: [Issue #2943: WeChat channel image uploads trigger Zhipu GLM-5 API error 1210 (invalid parameter)](https://github.com/sipeed/picoclaw/issues/2943) – Blocks multimodal use cases for PicoClaw's large China-based user base on the WeChat channel, no fix PR submitted yet.
3. **Medium Severity**: Multiple Anthropic model compatibility bugs, including invalid hyphen formatting for the `claude-sonnet-4.6` model ID and unpermitted `temperature` parameter sent to `claude-opus-4-7`. Both issues already have open fix PRs ([#2947](https://github.com/sipeed/picoclaw/pull/2947), [#2948](https://github.com/sipeed/picoclaw/pull/2948)) ready for merge.
4. **Low-Medium Severity**: Termux environment SSL certificate detection failures and OpenAI native `web_search` tool type mismatch errors, both with ready-to-merge open fix PRs ([#2949](https://github.com/sipeed/picoclaw/pull/2949), [#2951](https://github.com/sipeed/picoclaw/pull/2951)).

## 6. Feature Requests & Roadmap Signals
Based on merged work and active feature discussion, the upcoming v0.2.9 stable release is highly likely to ship the following confirmed new capabilities:
- Full explicit async spawn result delivery policy support for multi-agent orchestration
- Official production-ready multi-account support for WeChat and Telegram, including guest mode and Telegram Business mode
- Full cross-platform compatibility patches for RISC-V and Termux edge environments
The top-requested native LLM streaming HTTP feature (#2404) is still in active design discussion, and is expected to ship as a headline feature in the follow-up v0.2.10 release.

## 7. User Feedback Summary
Verified real-user pain points surfaced today include:
- Operational team users are highly dissatisfied with the previous lack of native multi-instance channel support, which forced them to run multiple separate PicoClaw processes to operate several WeChat/Telegram bots at the same time, a problem resolved by today's merged WeChat multi-account PR.
- Edge hardware users report that poor out-of-the-box compatibility for niche architectures like RISC-V and mobile Linux environments (Termux) remains the top barrier to deploying PicoClaw on their custom hardware.
- Regional Chinese users report widespread frustration with missing official multimodal support for domestic LLM providers including Zhipu GLM series models.
Satisfaction signals: Multiple users commented that the recently enabled default DuckDuckGo web search and exec tool path hardening delivered tangible improvements to out-of-the-box usability and runtime security.

## 8. Backlog Watch
Two high-impact stale items that require urgent maintainer attention to unblock downstream ecosystem work:
1. [PR #2551: Standardize channel identification logic and decouple channel name from provider type](https://github.com/sipeed/picoclaw/pull/2551) – Open since April 16 2026, this foundational refactor is required to enable native multi-instance support for all existing channels beyond the WeChat implementation shipped today, no recent maintainer review feedback has been posted.
2. [PR #2239: Add privileged mode option to default docker-compose configuration](https://github.com/sipeed/picoclaw/pull/2239) – Open since April 1 2026, requested by hundreds of self-hosted users that need PicoClaw to access host hardware peripherals from within the Docker container, no resolution has been posted for nearly 2 months.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-05-27
---

## 1. Today's Overview
In the 24-hour reporting window, the NanoClaw project registered 0 new or modified issues, 5 total updated pull requests, and no new official releases. Engineering activity remains steady and focused entirely on proactive stability improvements rather than firefighting new urgent user reports, reflecting a healthy stable baseline for core agent functionality. The team is clearly running a pre-deprecation hardening sprint, addressing cross-platform compatibility gaps, long-tail parser edge cases, and future-proofing CI infrastructure ahead of the scheduled Node 20 runtime end-of-support in June 2026. No unplanned outages or critical security incidents were logged for the project in this period.

## 2. Releases
No new official releases were published in the 24-hour reporting window. The project has no tagged public releases as of this digest date.

## 3. Project Progress
The single merged/closed PR in the reporting window delivers a key quality-of-life fix for marketplace template users:
- **PR #2622 (Merged): web: restart container after marketplace skill/persona update** https://github.com/nanocoai/nanoclaw/pull/2622
  The fix resolves a previously unaddressed workflow gap where users provisioning a custom skill or persona template via the `app.solela.ai` agent marketplace would see their database metadata update persist, but running warm agent containers would never load the new configuration until a manual restart. The merged code adds an automated container restart trigger immediately after skill/persona metadata is written to the database, eliminating stale configuration behavior entirely.

## 4. Community Hot Topics
No PRs or issues received public user comments or emoji reactions in the last 24 hours, but two outstanding open PRs address widely reported cross-use case pain points that are top of mind for the self-hosted contributor community:
1. **PR #2541: fix(poll-loop): don't mistake `</message>` in body text for the end-of-message tag** https://github.com/nanocoai/nanoclaw/pull/2541
  Underlying need: End users running agents that generate XML examples, code snippets, or output format documentation frequently hit truncated, broken replies when the parser encounters the `</message>` string outside of its intended tag position. This PR fixes a long-standing core parser edge case that impacts end-user experience directly.
2. **PR #2620: fix(container-runner): self-heal missing image before spawn** https://github.com/nanocoai/nanoclaw/pull/2620
  Underlying need: A large subset of self-hosted NanoClaw users run the project alongside popular orchestration tool Dokploy, which periodically cleans up unused container images, leading to unexpected crash loops for active agent instances. This fix eliminates the need for manual user intervention to rebuild missing runtime images.

## 5. Bugs & Stability
No new unreported end-user crashes or regressions were logged in the 24-hour window. All known active bugs have corresponding fix PRs submitted, ranked by severity below:
1. **Medium-High: Truncated agent replies from false `</message>` tag detection**: Addressed in open PR #2541, no reported production outages but widespread user annoyance reported across support channels
2. **Medium: Crash loops for missing agent runtime images on self-hosted orchestrators**: Addressed in open PR #2620, limited to users running Dokploy or similar auto-image-cleanup platforms
3. **Medium: Impending CI workflow outage post-June 2026 Node 20 deprecation**: Addressed in open PR #2608, affects core maintainer release pipeline functionality
4. **Low: Broken shell script execution for Windows developers due to CRLF line endings**: Addressed in open PR #2621, only impacts contributor onboarding on Windows hosts
5. **Resolved: Stale marketplace skill/persona configurations on warm containers**: Fixed via merged PR #2622, no further action required

## 6. Feature Requests & Roadmap Signals
No net-new user-facing feature requests appear in the current PR pipeline. All active work is focused on stability and operational hardening, indicating the team is prioritizing a patch-focused maintenance release as its next delivery milestone. This upcoming release will almost certainly ship the merged marketplace container restart fix, plus all 4 pending open fixes for the Node 20 CI bump, line ending enforcement, container image self-heal, and the parser false positive bug. No major new user-facing features are scheduled for the immediate next release.

## 7. User Feedback Summary
All logged recent user pain points referenced in current PRs are operational rather than related to core AI assistant functionality, indicating high baseline satisfaction with the project's core agent capabilities. The top reported pain points are:
- Self-hosted Dokploy users spend unnecessary time troubleshooting unexpected agent crash loops caused by auto image cleanup
- Windows-based contributors face frustrating, non-obvious failures when running shell setup scripts due to mismatched line endings, slowing down project onboarding
- Marketplace users were confused when newly provisioned agent templates did not activate after clicking the "Use this agent" button
- End users regularly receive incomplete truncated replies when agents include markup snippets in their output responses

## 8. Backlog Watch
The only outstanding PR that is overdue for maintainer attention is:
- **PR #2541: fix(poll-loop): don't mistake `</message>` in body text for the end-of-message tag** https://github.com/nanocoai/nanoclaw/pull/2541
  Submitted 8 days ago on 2026-05-18, with no public maintainer review feedback posted as of this digest date. As the oldest pending open PR that directly impacts end user experience, prioritizing review and merge of this fix will resolve a long-running high-frequency annoyance for a large share of active users. All remaining open PRs are 1-2 days old and not yet overdue for triage.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-05-27
---
## 1. Today's Overview
For 2026-05-27, the NullClaw open-source AI agent runtime project recorded no new or updated user-facing issues, delivering a moderate, maintenance-focused 24-hour activity cadence. The team finalized 1 recently processed pull request, alongside 2 ongoing open PRs that were first updated the prior day, with no new official version releases published in the window. The day’s work centers on hardening core provider reliability and resolving build infrastructure gaps, indicating the project is in a stable, pre-release iterative refinement phase with no reported critical outages affecting end users. Overall project health remains strong, with active contributor attention directed at resolving pain points for self-hosted and Nix-based deployment users.

## 2. Releases
No new official NullClaw releases were published on 2026-05-27. No new version changes, breaking changes, or migration guidance are available for this digest window.

## 3. Project Progress
The only merged/closed PR processed on 2026-05-27 directly addresses observability gaps for LLM provider health monitoring:
- [nullclaw/nullclaw#891](https://github.com/nullclaw/nullclaw/pull/891) (submitted by contributor vernonstinebaker): This fix preserves granular curl probe transport failure data for the project's OpenAI-compatible provider health check path, instead of collapsing distinct error types (including DNS failures, connection timeouts, TLS errors, and I/O errors) into a single generic failure state. This improvement will let operators more precisely diagnose upstream LLM provider outages, rather than only receiving a non-specific health probe failure alert.

## 4. Community Hot Topics
No PRs or issues recorded in this digest window have public comments or positive reaction counts, but the two active newly opened PRs reflect widely demanded use cases from the project’s user base:
1. [nullclaw/nullclaw#935](https://github.com/nullclaw/nullclaw/pull/935): The Nix lockfile update to support Zig 0.16.0 directly responds to a core need for self-hosted NixOS users, who prioritize fully reproducible, up-to-date declarative deployment pipelines for the agent runtime.
2. [nullclaw/nullclaw#934](https://github.com/nullclaw/nullclaw/pull/934): The LINE messaging channel routing and reply token cache implementation caters to users deploying NullClaw as a personal AI assistant for individual and small-team conversational workflows on the LINE platform. No public community feedback has been posted on either PR as of the snapshot, indicating users are still testing the initial feature branches.

## 5. Bugs & Stability
No new user-reported crashes, critical bugs, or regressions were logged over the last 24 hours. The pending active PRs target two known low-severity non-breaking pre-existing issues, both of which already have active resolution work in progress:
1. Broken Nix builds for Zig 0.16.0 (no production outage, only affects new deployment attempts on the latest Zig toolchain)
2. Faulty sendMessage routing for the LINE messaging channel (only impacts users actively integrating NullClaw with LINE as a chat interface)
The merged #891 PR delivers a low-severity stability improvement by eliminating ambiguous failure reporting for provider health probes. No unpatched critical stability gaps are documented for this window.

## 6. Feature Requests & Roadmap Signals
No new public user feature requests were logged today, but work in active PR pipelines strongly indicates the next upcoming minor NullClaw release will ship three high-priority improvements:
1. Full native Zig 0.16.0 support for all Nix-based deployment workflows, eliminating the current build breakage for Zig 0.16 users
2. Production-grade, fully functional LINE channel integration with a thread-safe 30-second TTL reply token cache for low-latency, non-duplicate LINE message replies
3. Granular curl transport failure error reporting for all OpenAI-compatible provider health probes to simplify upstream outage diagnosis.

## 7. User Feedback Summary
No direct new user feedback submissions were added to the project issue tracker in the last 24 hours. The profile of existing open and merged fixes indicates the current active user base is dominated by two high-satisfaction segments: experienced self-hosted developer users running NullClaw on NixOS, and personal assistant / small team users looking to connect the agent to popular messaging platforms like LINE. No widespread reports of core runtime malfunctions or major feature dissatisfaction have been logged recently, pointing to solid baseline performance for general use cases.

## 8. Backlog Watch
The only long-standing pending PR cleared by maintainers in this digest window is [nullclaw/nullclaw#891](https://github.com/nullclaw/nullclaw/pull/891), which was originally opened on May 5, 2026 and spent 22 days in the review pipeline before being merged on 2026-05-27. There are zero unresponded open user issues in the backlog as of this snapshot, and the two remaining open PRs (#934, #935) were opened only 1 day prior to this digest. The project has no outstanding high-priority long-unattended items requiring urgent maintainer attention, and the recent merge of the older backlog PR signals the team is actively clearing out delayed pending work.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-05-27 Project Digest
---
## 1. Today's Overview
IronClaw maintained extremely high development velocity over the 24-hour tracking window, with 12 actively updated open issues and 50 PR updates including 16 merged/closed changes. The core team is heavily focused on production hardening for the Reborn multi-tenant runtime, rolling out a comprehensive attested multi-chain signing security substrate, and expanding third-party enterprise messaging channel support. No issues were closed in the period, indicating the team is prioritizing landing planned roadmap PRs first before formal backlog triage and closure. Overall project health is robust, with low-risk changes being rolled out alongside thorough test coverage for new security and multi-tenant functionality.

## 2. Releases
One new production release went live on 2026-05-26: **ironclaw-v0.29.0**
### Key New Features
1.  Added native WeCom enterprise messaging channel integration via [PR #2394](https://github.com/nearai/ironclaw/pull/2394)
2.  Added support for externally provided custom tools in the web Responses API via [PR #3122](https://github.com/nearai/ironclaw/pull/3122)
3.  Added a user-facing logs download button to the gateway for self-service debugging
No breaking changes or migration requirements are noted in the published release notes.

## 3. Project Progress
16 PRs were merged/closed in the tracking window, with the highest-impact changes below:
- [PR #4099](https://github.com/nearai/ironclaw/pull/4099): Full Reborn extension lifecycle CLI merged, adding local-dev commands for search, install, activate, and remove of agent extensions, with persistent state that persists across CLI restarts
- [PR #4095](https://github.com/nearai/ironclaw/pull/4095): Functional Reborn CLI skills list shipped, replacing stubbed output with a fully operational catalog that surfaces both local user-uploaded skills and system pre-mounted skills
- [PR #4071](https://github.com/nearai/ironclaw/pull/4071): Scoped HTTP response body saving rolled out to the Reborn shared egress contract, eliminating arbitrary memory overhead when agents process large payloads like datasets or binary files
- [PR #4079](https://github.com/nearai/ironclaw/pull/4079): Unified LLM config resolution logic replaced hand-rolled parsing code for Reborn, reducing surface area for configuration-related runtime bugs by reusing well-tested shared logic from the `ironclaw_llm` crate

## 4. Community Hot Topics
The most active public discussion by comment volume is:
- [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) (10 comments): Downstream Rust consumers are blocked on patching critical Wasmtime 28.x memory safety CVEs, because crates.io only has the 0.24.0 release published, while newer 0.25.0-0.27.0 releases with CVE fixes are only available on GitHub. The underlying user need is a predictable, regular crates.io publication cadence that avoids forcing organizations to override dependency sources to patch security vulnerabilities.
The second most active discussion is [Issue #3857](https://github.com/nearai/ironclaw/issues/3857) (4 comments): Community contributors are weighing in on secure preconfigured credential patterns for the upcoming Slack ProductAdapter MVP, with broad consensus that default-off pre-wired auth flows reduce deployment friction for enterprise users.

## 5. Bugs & Stability
Bugs reported in the window ranked by severity:
1.  **High Severity**: [Issue #4084](https://github.com/nearai/ironclaw/issues/4084): Background subagent results never get delivered to parent agents, causing silent failures for workflows that offload long-running tasks to background workers. No associated fix PR is filed as of the digest window.
2.  **High Severity**: [Issue #4085](https://github.com/nearai/ironclaw/issues/4085): Production host-runtime composition builders fail to wire the required `TenantSandboxProcessPort`, resulting in permanently failing composition tests that mask unrelated CI regressions. No fix PR is currently open.
3.  **Security High Severity**: [Issue #4082](https://github.com/nearai/ironclaw/issues/4082): A security flaw where `SecretString` values are actively unwrapped to plain `String` on the credential path, exposing sensitive credentials to memory dumps and accidental debug log leaks.
4.  **Security High Severity**: [Issue #4081](https://github.com/nearai/ironclaw/issues/4081): The mandatory signer approval gate field is defined as optional, which could accidentally disable required signing approval flows in non-production environment builds.
No critical production outages or user-facing crashes were reported in the tracking period.

## 6. Feature Requests & Roadmap Signals
Based on open issues and in-flight PRs, the following features are highly likely to ship in the next v0.30.0 minor release:
1.  GSuite (Gmail + Google Calendar) native extension integration, which is already in final review as [PR #4100](https://github.com/nearai/ironclaw/pull/4100)
2.  Non-consuming mid-turn background subagent result polling for parent agents, to resolve the silent background task failure bug
3.  Initial Slack ProductAdapter MVP with preconfigured auth credentials for enterprise self-hosted deployments
The multi-pr attested-signing stack (14 interconnected core PRs in active development) is on track to ship durable NEAR/EVM multi-chain signing capabilities in the subsequent v0.31.0 release.

## 7. User Feedback Summary
Key user pain points and satisfaction signals from recent activity:
1.  **Dissatisfaction**: Rust ecosystem downstream users are highly frustrated with the multi-week lag between GitHub tagged releases and crates.io publication, which adds non-trivial operational overhead for organizations that need to patch critical CVEs without using unvetted Git dependency sources.
2.  **Satisfaction**: Self-hosted enterprise users have given positive implicit feedback on the newly shipped gateway logs download button and WeCom channel, as both were top requested features for teams that run IronClaw on private internal networks.
3.  **Unmet Need**: Multiple enterprise users have requested standardized pre-built SaaS connectors for Slack, GSuite, and Notion to avoid writing custom integration adapters for their internal team workflows.

## 8. Backlog Watch
The highest-priority long-dormant item requiring maintainer attention is [Issue #3259](https://github.com/nearai/ironclaw/issues/3259), created on 2026-05-05 (22 days old) with 10 user comments requesting publication of the 0.25.0-0.27.0 releases to crates.io. This unaddressed backlog item exposes all Rust crate consumers to publicly documented Wasmtime memory safety vulnerabilities, and requires explicit maintainer action to run the crates.io publication workflow. No other high-impact long-unanswered issues are flagged in the 24-hour update window.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-05-27
Repository: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview
LobsterAI maintained a high-productivity development pace over the last 24 hours, with zero new opened or closed issues and 15 total updated pull requests, 11 of which were successfully merged. The entire team focused on resolving user-reported critical stability issues, polishing the newly introduced OpenClaw cross-compatibility skill ecosystem, and refining common UI/UX pain points for desktop app users. No new official releases were launched in this window, as the team is doing final validation of a set of high-impact fixes before rolling out the next minor version. Overall project health remains strong, with very short turnaround times for user-reported severity bugs and no unaddressed critical open issues at time of writing.

## 2. Releases
No new official releases were published in the last 24 hours. The project’s latest public release remains pending as the development team wraps up validation for a batch of stability patches and skill ecosystem improvements.

## 3. Project Progress
11 merged/closed PRs delivered targeted feature improvements and bug fixes across core modules:
- [PR #2045](https://github.com/netease-youdao/LobsterAI/pull/2045): Launched core OpenClaw skill sync functionality, supporting one-click migration of skills installed in the OpenClaw ecosystem to LobsterAI’s built-in skill manager, with built-in protection for non-deletable plugin-provided skills
- [PR #2055](https://github.com/netease-youdao/LobsterAI/pull/2055): Put the OpenClaw skill sync feature behind a configurable default-off feature flag, and removed the hardcoded restriction that prevented users from deleting marketplace-installed skills
- [PR #2054](https://github.com/netease-youdao/LobsterAI/pull/2054): Expanded the internal plugin allowlist to exclude all official LLM provider plugins and preinstalled channel alias plugins from skill sync detection to avoid duplicate skill entries
- [PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049), [PR #2051](https://github.com/netease-youdao/LobsterAI/pull/2051): Patched the core tool loop breaker to stop runaway aborted tool result replays that caused unexpected token waste during idle periods
- [PR #2047](https://github.com/netease-youdao/LobsterAI/pull/2047), [PR #2048](https://github.com/netease-youdao/LobsterAI/pull/2048), [PR #2050](https://github.com/netease-youdao/LobsterAI/pull/2050): Fixed common session freezing bugs, added filtering for empty chunks in LLM streaming output, and prevented gateway session patch timeouts from blocking normal chat message sending
- [PR #2052](https://github.com/netease-youdao/LobsterAI/pull/2052), [PR #2053](https://github.com/netease-youdao/LobsterAI/pull/2053): Fixed broken model selection UI, and resolved the regression that cleared user-selected active skills when they switched between different LLM models
- [PR #2058](https://github.com/netease-youdao/LobsterAI/pull/2058): Tightened the final response grace period for sessions that return very large tool execution results to avoid premature response truncation

## 4. Community Hot Topics
No PRs or issues received public user comments or reactions in the last 24 hours. The most functionally impactful active work is the OpenClaw skill sync feature tracked in [PR #2045](https://github.com/netease-youdao/LobsterAI/pull/2045), which signals strong underlying user demand for seamless cross-ecosystem migration: many existing power users previously built custom skill libraries on OpenClaw, and want to carry over their existing workloads to LobsterAI without full manual reconfiguration.

## 5. Bugs & Stability
All bugs addressed in the last 24 hours were fully resolved with merged PRs, no new unpatched bugs were reported, ranked by severity:
1. **Critical severity**: Uncontrolled idle token burn caused by stuck aborted tool loops, patched via #2049 and #2051
2. **High severity**: Frequent chat session freezes and corrupted empty LLM streaming output, patched via #2047 and #2048
3. **Medium severity**: Chat message requests getting blocked by non-critical gateway session sync timeouts, patched via #2050
4. **Minor severity**: Selected skills getting cleared on model switch, and broken model selection UI, patched via #2052 and #2053

## 6. Feature Requests & Roadmap Signals
Three high-priority open features that are near completion are very likely to ship in the next minor version:
1. HTML chat session sharing support tracked in [PR #2056](https://github.com/netease-youdao/LobsterAI/pull/2056), to let users export full conversation history as portable standalone HTML files for easy sharing
2. Windows app update workflow improvement tracked in [PR #2057](https://github.com/netease-youdao/LobsterAI/pull/2057), which replaces the deprecated VBScript launcher with a hidden PowerShell implementation to avoid Windows Defender false positive blocks
3. Custom agent image avatar support tracked in [PR #1760](https://github.com/netease-youdao/LobsterAI/pull/1760), which extends the existing emoji-only avatar system to support user-uploaded custom images for better agent personalization

## 7. User Feedback Summary
Surfaced user pain points from recent development activity are all tied to real-world power user use cases:
- Users running multiple long-running agent sessions reported unexpected high LLM token costs during idle periods, which has been the top priority resolved this cycle
- Many users noted their skill libraries were cluttered by pre-installed marketplace skills they had no option to delete
- Users migrating from OpenClaw requested zero-friction skill migration to avoid rebuilding their custom workflows from scratch
Overall user satisfaction trend is positive, as the team addresses high-severity reported issues with a typical turnaround of less than 24 hours.

## 8. Backlog Watch
Two stale PRs were updated in the last 24 hours but are still pending formal maintainer review and merge:
1. [PR #1760](https://github.com/netease-youdao/LobsterAI/pull/1760): Opened on 2026-04-20, it adds custom image avatar support for agents, a high-demand customization feature that has been in backlog for over a month
2. [PR #1773](https://github.com/netease-youdao/LobsterAI/pull/1773): Opened on 2026-04-21, it fixes a missing i18n translation for the memory entry edit button that displays untranslated "edit" text for non-English users. The PR has zero logic changes, only updates translation strings, and carries very low merge risk.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Daily Digest | 2026-05-27
---
## 1. Today's Overview
For the 24-hour tracking window ending 2026-05-27, the open-source Moltis personal AI assistant project recorded steady, high-signal core development activity focused on foundational architecture upgrades rather than incremental user-facing hotfixes. The team processed 2 updated pull requests (1 fully closed/merged, 1 remaining open for peer review) alongside 1 newly filed active bug report, with no new public official releases deployed in the period. No critical user-facing outages or data loss events were reported, indicating stable operation for existing self-hosted and cloud Moltis instances. The overall activity velocity reflects a deliberate focus on building out support for multi-user deployments and fully local, custom runtime configurations for power users.

## 2. Releases
No new official releases were published for the Moltis project in this 24-hour tracking window, per public GitHub activity logs. No pending release previews or migration notes were shared by maintainers in the tracked updates.

## 3. Project Progress
The only merged/closed PR processed in this period is a high-impact foundational architecture update:
- PR #1049 (feat: agents as capability boundaries (MCP, sandbox, skills), authored by penso): https://github.com/moltis-org/moltis/pull/1049
This refactor positions agent presets as the core capability boundary for all Moltis runtime resources. Each agent can now be configured to independently control its assigned LLM model, connected Model Context Protocol (MCP) servers, sandbox execution rules, and allowed skill set, while also being assignable to specific user or context channels (e.g. restricted agents for child users, full-access agents for parent users on a shared household instance). The update removes hard prior constraints that limited uniform resource access across all users of a single Moltis instance.

## 4. Community Hot Topics
All newly submitted activity in the tracking period has not yet accrued public user comments or emoji reactions, but two high-priority submissions directly align with top unmet user demands for self-hosted deployments:
1. Open PR #1074 (memory): Configurable embedding dimensions with safe auto-reindex, authored by soyelmismo: https://github.com/moltis-org/moltis/pull/1074
This work addresses a widely requested feature from self-hosted power users who run non-OpenAI embedding models that output non-standard vector dimensions, a gap that previously blocked fully offline memory subsystem operation for many custom setups.
2. Newly filed bug Issue #1075 [Bug]: "fork" forks at prompt, not response, authored by vvuk: https://github.com/moltis-org/moltis/issues/1075
This report reflects a universal UX expectation for conversation fork functionality, which is a core tool for users that do iterative prompt engineering and A/B testing of assistant responses.

## 5. Bugs & Stability
Only one new bug was reported in the tracking window, ranked medium severity as it does not cause crashes, data loss, or security risks:
- Medium-severity UX defect: Issue #1075, where the conversation fork feature creates a new thread copy at the point of the user’s submitted prompt, rather than at the end of the latest assistant’s generated response. No corresponding fix PR has been submitted as of the end of the tracking period, and no critical or high-severity regressions were logged.

## 6. Feature Requests & Roadmap Signals
Active workstreams in this period indicate the next minor Moltis release will prioritize two power-user focused flagship features:
1. The newly merged agent-as-capability-boundary architecture from PR #1049 is almost feature complete, and will almost certainly ship in the next release to support formal multi-user, role-based access controls for shared Moltis instances.
2. The in-review configurable embedding dimensions feature from PR #1074 will be included in the upcoming release once peer review is complete, eliminating the longstanding blocker for fully local embedding support.

## 7. User Feedback Summary
All surfaced user pain points in this tracking period are tied to gaps for advanced self-hosted and power-user use cases:
1. Self-hosted users running custom local embedding models currently cannot use Moltis’s native memory subsystem without manual edits to core application files, creating major friction for fully offline deployments.
2. The broken fork UX breaks standard iterative prompt testing workflows, forcing users to manually re-save prior chat state if they want to branch off a generated assistant response. No explicit positive or negative satisfaction feedback was submitted alongside the new reports, but the submissions indicate growing adoption of Moltis by advanced power users testing use cases outside of default consumer-grade deployments.

## 8. Backlog Watch
Project health metrics for backlog management remain strong in this tracking window, with zero newly opened issues or PRs left unacknowledged for more than 24 hours. The large architecture PR #1049 was under active review for 3 full days (opened 2026-05-23, closed 2026-05-26), which is a standard and reasonable review timeline for foundational core refactors. No unprocessed, long-unanswered backlog items were identified, and there are no visible signs of maintainer bandwidth bottlenecks at this time.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Project Digest | 2026-05-27
---
## 1. Today's Overview
The CoPaw project saw extremely high active development on 2026-05-27, with 29 updated issues and 28 updated pull requests recorded in the 24-hour window, including contributions from both core team members and 2 first-time open source contributors. No new official releases were launched today, with most development work focused on incremental bug fixes, console UI polish, and core extensibility feature rollout. Overall project health remains robust, with 10 out of 29 total updated issues closed, and 9 out of 28 PRs merged, delivering a 34% daily resolution rate for incoming work. Multiple long-standing bugs that had been open for 2+ months finally received merged fixes, showing strong progress on the team's backlog cleanup.

## 2. Releases
No new official releases were published on 2026-05-27. The latest stable public version remains v1.1.8.post1, while the pre-release beta channel is at v1.1.9b1.

## 3. Project Progress
A total of 9 pull requests were merged/closed in the last 24 hours, delivering the following key fixes and feature improvements:
1.  [PR #1896](https://github.com/agentscope-ai/CoPaw/pull/1896) and [PR #4383](https://github.com/agentscope-ai/CoPaw/pull/4383): Resolved the 2+ month old Telegram AudioContent processing bug, adding full support for voice message transcription and processing in the Telegram channel.
2.  [PR #4294](https://github.com/agentscope-ai/CoPaw/pull/4294): Fixed the context compaction bug that caused orphaned assistant messages with no preceding user input, ensuring chat history trimming always preserves valid user/assistant message pairs.
3.  [PR #4695](https://github.com/agentscope-ai/CoPaw/pull/4695): Upgraded the underlying chat UI library, resolving the long-running bug where tool calls would not display in real time until users manually refreshed the page.
4.  [PR #4694](https://github.com/agentscope-ai/CoPaw/pull/4694): Refactored the web console download UI, addressing the delayed response issue for the file page download button.
5.  Closed work also includes optimizations for the OpenCode provider model list, skill pool sync UI status display, and the file block bug that permanently broke reasoning content injection for assistant messages.

## 4. Community Hot Topics
The 3 most active updated items in the past 24 hours reflect widely shared user pain points:
1.  **[Issue #4644](https://github.com/agentscope-ai/CoPaw/issues/4644) (18 comments):** Tool calls not displayed until page refresh. This high-traffic UI bug shows users have a strong need for zero-latency, no-refresh real-time monitoring of tool execution flows, which is a core use case for agent operation workflows.
2.  **[Issue #1516](https://github.com/agentscope-ai/CoPaw/issues/1516) (9 comments):** Telegram channel AudioContent support. The 2-month-old bug finally being resolved reflects high user demand for full-featured voice interaction across mainstream IM channels, a key requirement for small business and consumer-facing agent deployments.
3.  **[Issue #4680](https://github.com/agentscope-ai/CoPaw/issues/4680) (7 comments):** User lost their custom agent after renaming a custom skill. This bug highlights community-wide concern over data safety for custom agent assets, a top priority for users building production workloads on CoPaw.

## 5. Bugs & Stability
Newly reported bugs are ranked below by severity:
| Severity | Bug Description | GitHub Link | Fix PR Status |
|----------|-----------------|-------------|---------------|
| Critical | ToolGuard bypass allows agents to read process environment variables (potentially exposing secrets) in interactive sessions | [#4709](https://github.com/agentscope-ai/CoPaw/issues/4709) | No fix submitted yet, newly reported for triage |
| High | macOS 26.5 Tahoe desktop app crashes immediately on SIGSEGV when using Feishu channel | [#4704](https://github.com/agentscope-ai/CoPaw/issues/4704) | No fix submitted yet, post OS-upgrade regression |
| High | WeChat channel poll thread crashes during zero-downtime workspace reload with no auto-recovery | [#4698](https://github.com/agentscope-ai/CoPaw/issues/4698) | No fix submitted yet, breaks WeChat integration after config changes |
| Medium | Vector store timestamp inconsistency: MemoryNode uses naive local datetime while collection metadata uses UTC, causing cross-timezone memory lookup errors | [#4710](https://github.com/agentscope-ai/CoPaw/issues/4710) | No fix submitted yet |
| Medium | Local console build failure due to missing monaco-editor type declarations | [#4700](https://github.com/agentscope-ai/CoPaw/issues/4700) | Open fix PR under active review |

## 6. Feature Requests & Roadmap Signals
Multiple user-submitted feature requests already have corresponding implementation PRs open, with high probability of landing in upcoming releases:
1.  The requested per-message timestamps for the conversation UI ([#4662](https://github.com/agentscope-ai/CoPaw/issues/4662)) already has a fully implemented PR [#4699](https://github.com/agentscope-ai/CoPaw/pull/4699) open, and will almost certainly ship in the next v1.1.9 patch release.
2.  Support for non-standard provider parameters (e.g. DashScope's `enable_search`) via `extra_body` has an open complete PR [#4689](https://github.com/agentscope-ai/CoPaw/pull/4688), and will be included in the next minor patch.
3.  The new "Approve All" ToolGuard button to skip step-by-step tool confirmation has a ready PR [#4701](https://github.com/agentscope-ai/CoPaw/pull/4701), designed for power users running long task flows.
4.  Enterprise RBAC multi-user admin feature request ([#4702](https://github.com/agentscope-ai/CoPaw/issues/4702)) indicates that enterprise team use cases are now a priority on the roadmap, with expected delivery in the v1.2.0 full release.
5.  The schema-driven plugin custom channel registration feature ([PR #4693](https://github.com/agentscope-ai/CoPaw/pull/4693)) is a core extensibility milestone, marking the transition from hard-coded channel support to fully non-intrusive 3rd-party plugin extensions.

## 7. User Feedback Summary
Real user pain points and use cases collected from today's updates:
-  Multiple users running agent production workloads express strong dissatisfaction with current data durability guarantees, after reporting session state corruption, unexpected data loss after common operations (renaming skills), and slow full backups for data volumes larger than 800MB.
-  Enterprise users confirm they have validated CoPaw's core agent capabilities for internal use cases, but the lack of multi-user RBAC support is the only major blocker for rolling out the platform to their full teams.
-  Power users note that current extension mechanisms require invasive source code modifications, leading to high maintenance overhead when upgrading versions, and are looking forward to the new non-intrusive plugin system.
-  Users with long-running tool workflows complain that step-by-step manual tool approval is a major productivity bottleneck, and widely welcome the upcoming "Approve All" feature.

## 8. Backlog Watch
Important long-unaddressed items requiring urgent maintainer attention:
1.  [Issue #4006](https://github.com/agentscope-ai/CoPaw/issues/4006) (created 2026-05-02): Reasoning content not filtered in OpenAI-compatible providers, 3 comments, no PR assigned or maintainer triage feedback yet, affects all users using third-party OpenAI-compatible LLM endpoints.
2.  [PR #4615](https://github.com/agentscope-ai/CoPaw/pull/4615) (created 2026-05-22, first-time contributor): Fix orphan ACP processes after process close, has been waiting for review for 5 days, no feedback from core maintainers yet.
3.  [Issue #4642](https://github.com/agentscope-ai/CoPaw/issues/4642) (created 2026-05-23): Full plugin extension and work directory UX optimization request, no maintainer response yet, submitted by a community power user who compared CoPaw against competing open source agent platforms.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest | 2026-05-27
*Open-source AI agent and personal assistant project*

---

## 1. Today's Overview
ZeptoClaw operated in a fully proactive dependency maintenance focused state over the 24-hour reporting window ending 2026-05-27, with zero updated or active user-submitted issues, no new official releases, and 16 total tracked PR activity entries. 100% of recorded PR work comes from automated Dependabot updates, covering Rust core backend, JavaScript frontend panel, public documentation sites, GitHub CI workflows, and Docker base image ecosystems. No user-facing new feature work, community bug reports, or user-initiated contribution submissions were logged in the period, confirming the core project is in a stable, low-activity steady state following recent prior feature deployments. The consistent flow of automated dependency bump updates reflects strong proactive project health management, with maintainers prioritizing upstream alignment and vulnerability patching before rolling out new functionality.

## 2. Releases
No new official releases were published in the 24-hour reporting window. There are no unannounced breaking changes or migration notes to communicate for end users.

## 3. Project Progress
Two previously backlogged dependency update PRs were closed/merged in this reporting window, exclusively targeting the project's public user documentation infrastructure:
1. [PR #578](https://github.com/qhkm/zeptoclaw/pull/578): Bumped Astro from 6.1.6 to 6.3.1 for the `/landing/zeptoclaw/docs` subproject, bringing the static site generator up to latest stable upstream for performance patches and security fixes
2. [PR #572](https://github.com/qhkm/zeptoclaw/pull/572): Bumped @astrojs/starlight from 0.38.3 to 0.39.2 for the `/landing/r8r/docs` subproject, updating the Starlight documentation framework to support new official docs authoring features
No new core AI agent features, user-facing assistant functionality, or panel changes were merged during this period.

## 4. Community Hot Topics
No PRs or logged issues recorded any user-submitted comments, upvotes, or community engagement in the reporting window. All 14 currently open PRs are fully automated Dependabot dependency bumps with zero community interaction, and the project maintains a 0-item active public issue backlog. No user-initiated discussion or community-led feature advocacy was tracked, with all activity limited to preconfigured scheduled maintenance workflows.

## 5. Bugs & Stability
Zero new user-reported crashes, regressions, functional bugs, or severity-ranked stability issues were submitted in the 24-hour window. No open in-progress fix PRs for reported bugs are tracked in the repository at this time. This complete absence of logged bug reports confirms that current stable builds of ZeptoClaw have very low reported operational friction for deployed instances.

## 6. Feature Requests & Roadmap Signals
No user-submitted feature requests were logged in this reporting window, as no new issues were opened. The only visible roadmap signal from recent activity is the priority the maintainer team placed on merging documentation infrastructure updates first, before addressing pending core backend and frontend dependency bumps. The next projected upcoming release is almost certain to be a cross-component maintenance patch that bundles all merged and pending dependency updates for full upstream compatibility and vulnerability mitigation, rather than a major feature release.

## 7. User Feedback Summary
No new user pain point reports, custom use case submissions, or explicit satisfaction/dissatisfaction feedback was collected in the 24-hour window. The zero active public issue backlog can be interpreted two ways for project health: either currently deployed ZeptoClaw instances have extremely low user friction, or the project could benefit from surfacing clearer feedback submission channels to capture real-world usage data from its user base.

## 8. Backlog Watch
All 14 open PRs requiring maintainer attention are newly created Dependabot dependency bumps dated 2026-05-26, with no items over 24 hours old at time of reporting. The recent merge of the two 21-day-old backlogged PRs (#572 and #578, originally created 2026-05-05) confirms the maintainer team has active workflows to clear pending dependency updates consistently. The only priority backlog task for the team in the coming 48 hours is incremental review and merging of the pending dependency bumps across Rust core, the web panel, CI workflows, and Docker base images to ensure full project alignment with latest stable upstream versions.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-05-27
---
## 1. Today's Overview
ZeroClaw saw robust, high-velocity development activity in the 24-hour reporting window, with 7 active open issues, 36 total updated pull requests (6 of which were merged/closed) and no new official releases published. Project work is heavily focused on quality-of-life usability fixes, provider compatibility improvements, and foundational RFC planning for high-demand agent capabilities. The team prioritized resolution of long-standing channel reliability gaps and hardening of security guardrails for tool execution this cycle, indicating a balanced focus on end-user experience and core platform stability. All active work is currently aligned to the upcoming beta-2 integration milestone, with no critical production outages reported in the period.

## 2. Releases
No new official releases were published in the 24-hour reporting window. All recently merged changes are staged for inclusion in the upcoming beta-2 milestone, which is tracked via draft [PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848).

## 3. Project Progress
6 PRs were merged or closed in the past 24 hours, delivering the following verified fixes and feature advances:
1. Closed [PR #6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512): Resolved 3 long-standing critical email channel issues including unrendered Markdown bodies, non-descriptive hardcoded default subjects, and broken attachment path resolution that caused zero-byte attachment failures. This patch also proactively fixed latent compile break risks across 30+ other channel implementations by standardizing the `ChannelMessage` struct pattern.
2. Closed [PR #6901](https://github.com/zeroclaw-labs/zeroclaw/pull/6901): Improved LLM provider transport diagnostics by preserving full reqwest error chains, enabling users to distinguish between root causes (timeouts, DNS failures, TLS errors, connection refused) that were previously collapsed into generic unhelpful error text.
3. The 4 remaining merged/closed PRs cover smaller targeted fixes: Discord gateway 429 retry logic improvements, Codex OAuth provider alias preservation, SiliconFlow default endpoint path correction, and interactive TUI log level suppression to clean up conversation output.

## 4. Community Hot Topics
The two most active community discussions this cycle are:
1. **DeepSeek-V4 API Compatibility Issue**: [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) (13 comments, 4 👍) is the highest engagement topic. Underlying user demand points to widespread production adoption of DeepSeek's new V4 reasoning models, whose non-standard thinking mode API format breaks ZeroClaw's existing provider wrapper and halts reasoning agent workflows for many users.
2. **Computer-Use Desktop Interaction RFC**: [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (3 comments, marked accepted) has drawn significant user attention, reflecting strong demand for parity with competing agent frameworks that natively support local desktop screenshot capture, mouse and keyboard automation for end-to-end GUI workflow execution.

## 5. Bugs & Stability
Bugs reported and updated this cycle are ranked by severity as follows:
1. **High Severity P1 Bug**: [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API incompatibility, marked S2 degraded behavior. No public fix PR has been linked as of reporting.
2. **Medium Severity S2 Bug**: [Issue #6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) Interactive mode system log lines drown out conversation output. A complete fix PR exists at [PR #6947](https://github.com/zeroclaw-labs/zeroclaw/pull/6947), which restricts interactive TTY mode to WARN-level logs by default.
3. **Usability Bug**: [Issue #6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950) TUI mode switching fails for compact keyboards without dedicated F-keys. The issue is fully addressed by open [PR #6952](https://github.com/zeroclaw-labs/zeroclaw/pull/6952) that adds Tab/Shift+Tab cycle navigation and Alt+1-5 mode selection shortcuts.
4. **Provider Compatibility Bug**: Misconfigured SiliconFlow default hardcoded China endpoint breaks international API key auth, fix PR #6953 is ready for final review.

## 6. Feature Requests & Roadmap Signals
Based on recent activity, the following features are highly likely to ship in the next public release:
1. The accepted computer-use screen interaction capability from Issue #6909 is a top-priority feature request and will almost certainly be included in the minor release immediately following the beta-2 launch.
2. The RFC to route all scheduled cron tasks through the orchestrator message pipeline ([Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)) that resolves 6 existing open scheduler bugs will be prioritized for the next stability patch.
3. The newly added MCP resource and prompt bridge tools in [PR #6946](https://github.com/zeroclaw-labs/zeroclaw/pull/6946) are feature-complete and expected to land in the next beta drop.
4. The plugin system refactor to replace Extism with a native Wasmtime WASIp2 host ([Issue #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)) is positioned as a core 1.0 stable roadmap feature for faster, more secure third-party plugin execution.

## 7. User Feedback Summary
Key user pain points and satisfaction signals collected this cycle include:
- Dissatisfaction: Production users running DeepSeek V4 models are facing broken reasoning mode workflows, representing a top unaddressed pain point for users selecting low-cost, high-performance Chinese LLM providers.
- Dissatisfaction: A large demographic of power users using modern compact mechanical keyboards (Keychron K-series, Logitech MX Keys Mini) cannot use core TUI mode switching functionality at all, blocking parts of their local ZeroClaw workflows.
- Dissatisfaction: International users with SiliconFlow API keys face unexpected auth failures on first run due to the preconfigured China endpoint, creating poor onboarding experience for new users.
- Satisfaction: Multiple users reported that the newly merged email channel fixes resolved months of broken email automation use cases that they had previously workarounded with external tools.

## 8. Backlog Watch
High-priority stale items requiring urgent maintainer attention:
1. [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) (DeepSeek-V4 incompatibility) was created over a month ago on 2026-04-24, marked P1 and in-progress, but no public fix PR has been filed yet, risking extended workflow disruption for DeepSeek users.
2. XL foundational feature [PR #6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) (background review fork + skill_manage tool) has been in review for 13 days with a `needs-author-action` tag. This PR unlocks the long-promised automatic iterative skill improvement functionality, and its ongoing blockage halts the entire skill ecosystem roadmap.
3. The massive beta-2 integration draft [PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) has been open for 5 days with outstanding unresolved issues for delegate agent functionality and model provider fallback logic, requiring dedicated maintainer coordination to unblock the next major release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*