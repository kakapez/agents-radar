# OpenClaw Ecosystem Digest 2026-06-02

> Issues: 474 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-01 23:27 UTC

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

# OpenClaw (openclaw/openclaw) 2026-06-02 Project Digest
---
## 1. Today's Overview
The OpenClaw project recorded extremely high development velocity over the past 24 hours, with 474 total updated issues (290 active, 184 closed) and 500 updated pull requests (399 open, 101 merged/closed), alongside 3 new pre-release builds. The entire sprint is centered on hardening the upcoming 2026.6 stable release, resolving post-Codex-runtime migration regressions, and improving cross-platform message delivery reliability across 7+ major messaging channels. All top tracked issues tied to core runtime stability are seeing active collaboration between maintainers and community contributors, indicating no major unaddressed blocking risks for the near-term stable launch. Overall project health is strong, with high throughput of bug fixes and user feature requests moving through the triage pipeline.

## 2. Releases
Three new beta releases shipped in the last 24 hours:
1. **v2026.5.31-beta.4**: First of the 2026.6 pre-release train, adding clean recovery logic for interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries, with improved delivery stability for Telegram, WhatsApp, and iMe.
2. **v2026.6.1-beta.1**: Expanded channel reliability improvements to cover iMessage and Slack, retaining all the core runtime recovery upgrades from the prior beta.
3. **v2026.6.1-beta.2**: Refined mobile channel delivery logic to resolve edge case failures on iMessage, finalizing validated stable delivery support for Telegram, WhatsApp, and iMe.
No breaking changes or mandatory migration steps are announced for these pre-releases, though users are advised to review the known Codex runtime 3-4x token inflation caveat documented in public issues before upgrading.

## 3. Project Progress
101 PRs were merged or closed in the 24-hour window, marking a record high throughput for the 2026.6 release cycle:
- Core runtime reliability upgrades for Codex and CLI-backed runtimes all landed, resolving widespread tool call hang and stale session state issues.
- The long-running open RFC (#80171) for Codex-vs-Pi runtime parity QA harness was formally closed, marking a major milestone in the project's transition to Codex as the default runtime for OpenAI agent turns.
- Multiple high-severity P1 bugs were fully resolved: the native hook relay bridge spawn failure, Discord gateway READY event regression that blocked guild message delivery, the session write lock race condition that caused intermittent data loss, and the GitHub Copilot 1M context window misclassification bug that truncated long-context conversation support.
- The standalone Codex plugin wrapper for the parity QA harness was published and merged into the QA lab workflow.

## 4. Community Hot Topics
The most active public discussions, sorted by comment count:
1. [Issue #80171: Codex-vs-Pi runtime parity QA harness (RFC + tracking)](https://github.com/openclaw/openclaw/issues/80171) (15 comments): The top community priority centers on validating that the new default Codex runtime provides full functional parity with the legacy Pi runtime before full rollout, to avoid unexpected breakage for existing production users.
2. [Issue #80380: Update OpenClaw to use GA gemini-3.1-flash-lite instead of preview](https://github.com/openclaw/openclaw/issues/80380) (14 comments, 4 👍): Users are pushing to adopt Google's newly released GA Gemini model for 20-30% lower cost and 2x faster inference speed compared to the preview build, indicating strong demand for first-class up-to-date Gemini provider support.
3. [Issue #88838: Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838) (12 comments): Maintainers and contributors are collaborating to design a low-risk incremental migration path for moving all session state to SQLite, avoiding a high-risk single large rewrite that could introduce data loss.
4. [Issue #84038: doctor --fix silently migrates intentional openai-codex config to openai/, breaking PI+OAuth runtime and causing 3-4x token inflation](https://github.com/openclaw/openclaw/issues/84038) (12 comments, 3 👍): Users are demanding a guard for the automated doctor --fix workflow to avoid overwriting intentional custom Codex configurations and generating unexpected high LLM token bills.
5. [Issue #86820: Codex OAuth compaction falls back to direct OpenAI API and fails without OPENAI_API_KEY](https://github.com/openclaw/openclaw/issues/86820) (12 comments, 6 👍): Self-hosted users who rely exclusively on OAuth authentication (no static API keys) are reporting this as a critical breaking issue that blocks full adoption of the Codex runtime.

## 5. Bugs & Stability
High-severity regressions and defects reported/triaged in the last 24 hours, ranked by impact:
1. **P1 (Data Loss)**: #84038 `doctor --fix` auto-migration breaks Codex runtime and causes 3-4x token inflation. Status: Closed, fix fully merged in the latest beta releases.
2. **P1 (Auth Failure)**: #86820 Codex OAuth compaction fails for users without a static OPENAI_API_KEY. Status: Closed, fix landed in v2026.6.1-beta.1.
3. **P1 (Message Loss)**: #86519 Telegram agent sends 2-10x duplicate identical replies post 5.20 update. Status: Open, fix PR [#88810](https://github.com/openclaw/openclaw/pull/88810) that skips empty text sends is ready for final maintainer review.
4. **P1 (Message Loss)**: #87307 Matrix thread replies regress to send as normal messages, /status and /model commands fail silently. Status: Open, fix under active triage.
5. **P1 (Session Stall)**: #88312 Codex multi-tool turns fail with "Codex stopped before confirming turn complete" on 2026.5.27 builds. Status: Open, root cause identified, targeted fix in development.
6. **P1 (Session Stall)**: #87744 Codex-backed Telegram turns time out waiting for turn completion. Status: Open, shares the same root cause as the turn stall regression above.

## 6. Feature Requests & Roadmap Signals
Based on community demand and prioritization patterns, the following features are highly likely to ship in upcoming releases:
- The Gemini GA model update requested in #80380 is a low-risk, high-impact change, and is almost guaranteed to land in the next v2026.6.1-beta build.
- Context-capsule compression plugin (PR #89248) that delivers 99.3% history token reduction for local model deployments is scheduled for the 2026.6 minor release, as early test results are fully validated.
- Telegram bot-to-bot and guest-bot mode support requested in #79077 (7 👍) is a high-priority user-facing feature targeted for the mid-June 2026.6.2 feature release.
- Channel-mediated approval flow for MCP tool calls (#78308) that extends existing shell-exec consent workflows to external tools is on track for the 2026.7 milestone, aligned with the project's ongoing security hardening roadmap.
- I18n support for slash command descriptions (#79458) for non-English speaking users will be shipped in the next minor UX-focused release.

## 7. User Feedback Summary
### Top User Pain Points:
1. Unplanned 3-4x higher LLM token costs post Codex runtime migration is the most complained about issue among self-hosted production users, with many users caught off guard by the upstream OpenAI token inflation bug that OpenClaw cannot mitigate fully.
2. Widespread message duplication and delivery failures across Telegram, Discord, Feishu and Matrix channels post 2026.5.x updates are hurting reliability for business users running public-facing bot deployments.
3. Silent failures and lack of clear alerting for Codex OAuth profile refresh failures make debugging extremely time-consuming for self-hosted operators.
### Positive Signals:
Users are broadly satisfied with the new runtime interrupted call recovery logic shipped in the latest betas, and are

---

## Cross-Ecosystem Comparison

# 2026-06-06 Open-Source AI Agent Ecosystem Cross-Project Comparison Report
Target Audience: Technical Decision-Makers, AI Agent Developers, Open-Source Ecosystem Analysts

---

## 1. Ecosystem Overview
The tracked 11 active open-source personal AI agent projects represent a rapidly maturing segment of the broader AI developer ecosystem, transitioning past early demo-stage feature exploration to prioritize production readiness for self-hosted power users, small business operators, and privacy-focused edge deployers. Collectively, the projects serve a large and fast-growing user base that explicitly avoids closed, centralized AI agent platforms in favor of full control over their agent data, tooling, and runtime configurations. Current development priorities have shifted almost entirely from supporting new top-tier LLM capabilities to solving persistent real-world operational pain points, including unplanned token bloat, broken cross-channel message delivery, unhandled session crashes, and coarse-grained access controls for multi-user shared deployments. The ecosystem is also converging around emerging open standards such as the Model Context Protocol (MCP) for tool orchestration, with widespread investment in compatibility with OpenAI-spec APIs, decentralized TEE-hosted LLM providers, and low-resource edge hardware targets.

## 2. Activity Comparison
| Project Name | Total 24h Updated Issues | Total 24h Updated PRs | New Releases Published (24h) | Normalized Health Score (1-10) |
|--------------|---------------------------|-------------------------|-------------------------------|---------------------------------|
| OpenClaw | 474 | 500 | 3 pre-releases | 9 (no blocking stable launch risks, strong triage velocity) |
| NanoBot | 28 | 28 | 1 v0.2.1 stable release | 9 (89% issue resolution rate, no unresolved critical bugs) |
| Hermes Agent | 50 | 50 | 0 | 8 (1 unpatched P1 cron bug, high triage efficiency) |
| PicoClaw | 7 | 11 | 1 nightly pre-release | 8 (4 high-priority PRs pending maintainer review) |
| NanoClaw | 3 | 5 | 0 | 8 (fast response to new critical bugs, stable low-volume maintenance) |
| NullClaw | 0 | 1 | 0 | 9 (zero active critical bugs, predictable low-activity polish cycle) |
| IronClaw | 6 | 47 | 0 | 9 (72% PR merge rate, cloud-native Reborn milestone on track) |
| LobsterAI | 1 | 12 | 1 v2026.6.1 stable release | 10 (no unresolved critical bugs, 92% PR merge rate) |
| Moltis | 0 | 4 | 0 | 9 (zero new user-reported bugs, healthy backlog throughput) |
| CoPaw | 50 | 35 | 2 stable/beta releases | 8 (2 unpatched high-severity cron bugs, fast growing new contributor base) |
| ZeptoClaw | 2 | 18 | 0 | 10 (100% of Rust security advisories resolved, zero stale critical work items) |
| ZeroClaw | 30 | 36 | 0 | 8 (strong community growth, 3 long-overdue high-priority backlog items) |
*Health score weighted by critical bug resolution rate, PR throughput efficiency, roadmap alignment, and absence of blocking release risks. TinyClaw is excluded due to zero 24h activity.

## 3. OpenClaw's Position
OpenClaw is the clear market and community leader across the tracked ecosystem by a significant margin, with 10x the 24h issue/PR volume of the next highest activity projects (CoPaw, ZeroClaw). Its core advantage over peers stems from the most mature, battle-tested multi-channel message delivery layer that natively supports 7+ major IM platforms, paired with a formal Codex runtime parity QA harness to minimize breaking change risk during major architecture upgrades. Unlike niche peers that prioritize specific use cases (edge deployment for PicoClaw, full offline self-hosting for Hermes Agent), OpenClaw positions itself as a general-purpose reference implementation for open agent runtime standards, with no narrow target user segment constraints. Its active community discussion volume is 15x higher than mid-tier projects such as NanoBot, reflecting a massive installed base of production users, and it operates the industry’s most agile pre-release validation pipeline, shipping 3 iterative beta builds in a single 24h window to harden its upcoming 2026.6 stable release. No other tracked project has comparable release iteration velocity or broad cross-demographic user adoption.

## 4. Shared Technical Focus Areas
Four high-priority cross-project requirements have emerged from the 24h activity dataset:
1. **MCP Resilience & Optimization**: 7 projects (OpenClaw, NanoBot, Hermes Agent, NanoClaw, CoPaw, ZeroClaw, LobsterAI) are building MCP connection retry logic, shared pooled MCP server instances, and explicit tool load validation, directly responding to widespread user complaints of unresponsive MCP tools blocking full sessions, unplanned downtime after infrastructure restarts, and redundant resource exhaustion in multi-agent clusters.
2. **Token Bloat & Inference Cost Control**: 8 projects (OpenClaw, NanoBot, PicoClaw, IronClaw, Moltis, ZeroClaw, Hermes Agent, CoPaw) are actively delivering features including repeated skill catalog injection elimination, automated conversation history pruning, compiled compact skill representations, and flex service tier routing for latency-tolerant jobs, to address user pain points of unplanned 3-4x token cost spikes post-runtime migration.
3. **OpenAI-Spec Provider Compatibility**: 6 projects (Hermes Agent, PicoClaw, LobsterAI, Moltis, ZeroClaw, IronClaw) are adding native support for non-OpenAI regional providers (Gemini GA, Claude 4.8, MiniMax M3, NEAR TEE-hosted models) and explicit capability schemas for custom OpenAI-compatible endpoints, to reduce vendor lock-in and comply with local data residency rules for users in China, EU, and other regulated regions.
4. **Self-Hosted Operational Hardening**: 6 projects (NanoBot, Hermes Agent, NanoClaw, ZeptoClaw, ZeroClaw, CoPaw) are building rootless runtime support, automatic session self-healing, cron failure resilience, and native data backup features for users running 24/7 agent workloads on Kubernetes, LXC, or edge hardware without managed cloud infrastructure.

## 5. Differ

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) Project Digest | 2026-06-02
---
## 1. Today's Overview
This is an exceptionally high-activity iteration day for the Nanobot project, with 28 updated issues and 28 updated pull requests processed in the last 24 hours. 89% of tracked issues were fully resolved, while 61% of all updated PRs were merged or closed, marking very strong project execution velocity. The team officially released the new v0.2.1 milestone version today, centered on a polished, production-grade WebUI workbench experience. Current development priorities are focused on expanding cross-platform communication channel support, cutting unnecessary user inference costs, and improving stability for self-hosted and enterprise deployments. Overall project health is rated excellent, with 17 new contributors joining for the latest v0.2.1 release showing fast-growing community adoption.

## 2. Releases
### New: v0.2.1
GitHub Release: https://github.com/HKUDS/nanobot/releases/tag/v0.2.1
- Core changes: 84 total PRs merged with 17 first-time contributors. The headline improvement is a fully overhauled WebUI that now operates as a primary production workbench: the chat interface runs faster, with live real-time rendering of file edit activity and tool execution traces to improve user trust in agent operations.
- No breaking changes are documented for this release, and existing users can upgrade seamlessly without manual configuration migration.

## 3. Project Progress (Merged/Closed PRs)
All merged changes completed in the past 24 hours:
1.  Full Napcat (QQ OneBot v11) channel integration ([#3509](https://github.com/HKUDS/nanobot/pull/3509)), supporting bidirectional image transfer, configurable group reply rules and optional new member welcome notifications
2.  Local offline Whisper voice transcription support via faster-whisper ([#3723](https://github.com/HKUDS/nanobot/pull/3723)), no third-party API key or network access required for audio processing
3.  DingTalk group user isolation feature ([#4016](https://github.com/HKUDS/nanobot/pull/4016)), adding a configuration flag to give each unique user in shared DingTalk groups independent isolated chat sessions to eliminate cross-user context interference
4.  WebUI runtime state refactoring onto a new in-process typed event bus ([#4135](https://github.com/HKUDS/nanobot/pull/4135)), removing hardcoded state dependencies and improving UI responsiveness during long-running agent tasks
5.  Cron task output optimization ([#3126](https://github.com/HKUDS/nanobot/pull/3126)), suppressing noisy intermediate "thinking" progress messages so scheduled jobs only deliver their final result to end users
6.  Full suite of heartbeat idle optimization patches ([#2415](https://github.com/HKUDS/nanobot/pull/2415), [#2435](https://github.com/HKUDS/nanobot/pull/2435), [#2482](https://github.com/HKUDS/nanobot/pull/2482), [#3485](https://github.com/HKUDS/nanobot/pull/3485)), adding a lightweight pre-check that skips unnecessary LLM calls when HEARTBEAT.md contains no active tasks, cutting idle token costs by up to 100% for users who do not use the heartbeat feature
7.  Fixed gateway mode progress notification bug ([#1376](https://github.com/HKUDS/nanobot/pull/1376)), making the existing `send_progress` and `send_tool_hints` configuration flags work properly across all IM channels
8.  Session retention logic refactor ([#4143](https://github.com/HKUDS/nanobot/pull/4143)), resolving a long-standing bug that caused duplicate user messages to be incorrectly archived
9.  Compatibility fix for non-standard tool call formats ([#4124](https://github.com/HKUDS/nanobot/pull/4124)), adding parsing support for Mimo and GLM models that emit tool calls as raw XML text instead of structured JSON.

## 4. Community Hot Topics
Top active issues/PRs sorted by user engagement:
1.  [Issue #49: Add Signal channel support via signal-cli](https://github.com/HKUDS/nanobot/issues/49) (6 👍 reactions)
    Underlying user need: A large cohort of privacy-focused self-hosted users want to interact with their Nanobot instance directly via the end-to-end encrypted Signal messaging platform, avoiding centralized IM providers.
2.  [Issue #1536: Add MCP connection retry logic on connection drop](https://github.com/HKUDS/nanobot/issues/1536) (3 👍 reactions)
    Underlying user need: Enterprise and Kubernetes deployment users are unable to gracefully handle MCP server restarts or node migrations without a full Nanobot restart, creating unplanned downtime.
3.  [Issue #4142: Optimization of usage costs for cache-miss input tokens](https://github.com/HKUDS/nanobot/issues/4142) (new discussion)
    Underlying user need: As low-cost cached LLM models such as DeepSeek V4 Flash gain widespread adoption, users want Nanobot to leverage context window persistence and input token caching best practices to minimize inference costs for long-running sessions.

## 5. Bugs & Stability
Bugs reported in the last 24h, ranked by severity:
1.  **High Severity**: [Issue #4133: Agent response silently fails to deliver after successful tool calls](https://github.com/HKUDS/nanobot/issues/4133)
    Affects Claude and DeepSeek V4 Flash users on Telegram. The agent completes tool execution successfully but does not return its final text response to the user. No public fix PR is available as of this digest.
2.  **Medium Severity**: [Issue #4128: User messages are duplicated in both active and archived session storage](https://github.com/HKUDS/nanobot/issues/4128)
    Bug is already resolved via merged PR #4129, previously causing inconsistent LLM context and unexpected token bloat for affected sessions.
3.  **Medium Severity**: [Issue #3633: Duplicate item ID error when using GPT/Codex models](https://github.com/HKUDS/nanobot/issues/3633)
    Full unresumable agent turns caused by duplicate tool call IDs, resolved in recent daily development builds.
4.  **Low Severity**: [Issue #3903: Hardcoded PNG MIME type breaks image generation for MiniMax/AIHubMix providers](https://github.com/HKUDS/nanobot/issues/3903)
    Resolved in recent patches, previously causing broken image previews for users of third-party image generation providers.

## 6. Feature Requests & Roadmap Signals
High-priority user requested features likely to land in the next minor release (v0.2.2):
1.  Native zero-configuration cloud deployment layer for HuggingFace Spaces and ModelScope (open PR [#4139](https://github.com/HKUDS/nanobot/pull/4139)), which will drastically reduce setup friction for new users who want to run a public demo of Nanobot with one click.
2.  Volcengine web search provider support (open PR [#4141](https://github.com/HKUDS/nanobot/pull/4141)), expanding local search options for users in mainland China.
3.  Azure AAD identity authentication support for Azure OpenAI (open PR [#4126](https://github.com/HKUDS/nanobot/pull/4126)), a mandatory compliance requirement for most enterprise Azure deployments.
4.  Custom image generation provider support ([#4132](https://github.com/HKUDS/nanobot/issues/4132)) and configurable toggle for built-in filesystem tools (open PR [#4138](https://github.com/HKUDS/nanobot/pull/4138)), requested heavily by teams that run Nanobot on top of isolated remote sandbox environments.

## 7. User Feedback Summary
Key real-user insights collected from the last 24 hours:
1.  Hobbyist users express strong satisfaction with the newly merged heartbeat idle optimizations, which eliminate the unexpected idle LLM token charges many reported experiencing in v0.15.
2.  Chinese IM platform users (QQ, DingTalk) highlight that the newly shipped full channel support resolves long-standing pain points that made Nanobot unusable for their group chat automation use cases.
3.  Power users running Nanobot on Kubernetes report high dissatisfaction with the lack of MCP retry logic, which forces unplanned full instance restarts after routine infrastructure maintenance.
4.  New users report significant friction deploying Nanobot on public cloud demo platforms, as they currently have to manually handle platform-specific environment variables, port bindings and OAuth authentication with no out-of-the-box support.

## 8. Backlog Watch
Long-standing high-priority items awaiting maintainer review or implementation:
1.  [Issue #49: Signal channel support](https://github.com/HKUDS/nanobot/issues/49): Opened 2026-02-03, 6 upvotes, the proposed signal-cli implementation draft has not been merged after 4 months, and remains one of the top requested features for privacy-focused users.
2.  [Issue #101: Support free default LLM APIs (Google Gemini, Grok) as an alternative to OpenRouter](https://github.com/HKUDS/nanobot/issues/101): Opened 2026-02-04, no full implementation shipped, requested heavily by hobbyist users who want to run Nanobot with zero paid LLM API costs.
3.  [Issue #2182: Implement lifecycle hooks feature similar to Claude Code / GitHub Copilot CLI](https://github.com/HKUDS/nanobot/issues/2182): Opened 2026-03-17, 2 upvotes, no active development PR, requested by power users building custom automation workflows that trigger on agent lifecycle events such as session start, pre-tool execution and post-tool execution.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (NousResearch) Project Digest | 2026-06-02
---
## 1. Today's Overview
This is a high-velocity, production-focused maintenance day for the Hermes Agent project, with 100 total updated contributions across 50 issues and 50 pull requests in the 24-hour observation window. No new official releases were published, with development skewed heavily toward resolving stability gaps for the recent v0.15.x gateway deployment while advancing long-requested cost-optimization and self-hosted ecosystem features. The project demonstrates strong health: 100% of newly reported high-severity bugs received triage within hours of being posted, and contributor activity spans both core Nous researchers and independent community maintainers. Demand from self-hosted power users running 24/7 mission-critical Hermes deployments is clearly the top priority for current iteration work.

## 2. Releases
No new official releases were published in the 24-hour window. There are no pending breaking changes or migration notes to flag at this time.

## 3. Project Progress
A total of 6 PRs and 3 pre-existing open issues were merged/closed today:
1. **Fixed missing MCP tools in the api_server platform**: Issue [#35703](https://github.com/NousResearch/hermes-agent/issues/35703) was resolved, patching the gap where MCP server tools worked on Slack/CLI but failed to load for the OpenAI-compatible API agent endpoint.
2. **Official MongoDB memory provider shipped**: Issue [#5495](https://github.com/NousResearch/hermes-agent/issues/5495) was closed, adding long-requested first-class MongoDB backend support for Hermes's external memory provider ecosystem.
3. **Markdown table rendering fix for Discord**: PR [#37055](https://github.com/NousResearch/hermes-agent/pull/37055) was merged, converting unrenderable GFM pipe tables to aligned monospaced code blocks to eliminate garbled output in Discord channels.
4. **Fixed overbroad gateway restart guard**: PR [#35815](https://github.com/NousResearch/hermes-agent/pull/35815) replaced the blanket internal restart block with a targeted crash loop detector, resolving the unintended side effect that blocked legitimate user-initiated restarts from chat interfaces.
5. **Eliminated deprecated npm dependency warning**: Issue [#31818](https://github.com/NousResearch/hermes-agent/issues/31818) was closed, removing the outdated `@babel/plugin-proposal-private-methods` package to prevent warning spam during `hermes update` operations.
6. **Added explicit MCP toolset load warnings**: PR [#36917](https://github.com/NousResearch/hermes-agent/pull/36917) was merged, adding user-facing alerts for cases where a configured MCP toolset resolves to zero registered tools due to timing or configuration errors.

## 4. Community Hot Topics
The most active, highest-reaction community items reflect strong demand for privacy-first self-hosting, cost optimization, and production-grade access controls:
1. **SearXNG as default web search provider**: Issue [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) (30 👍, 5 comments) is the top-voted feature request, with users asking to add a fully self-hosted, zero-cost web search backend alongside existing paid third-party providers.
2. **Native Brave Search backend integration**: Issue [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) (23 👍, 5 comments) requests first-class support for the low-cost, privacy-focused Brave Search API, as a cheaper alternative to Tavily and Exa for many self-hosted deployments.
3. **Multi-role auto-routing via gateway hooks**: Issue [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) (14 👍, 5 comments) shares a fully reworked v2 implementation proposal for context-aware role routing across multi-user gateway setups, aligned with the current v0.14+ architecture.
4. **Native automatic backup for agent data**: Issue [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) (13 👍, 3 comments) requests built-in version control and auto-backup for all `~/.hermes/` user data, to prevent loss of learned agent state across restarts and redeploys.
Underlying user needs are clear: the vast majority of active community members run self-hosted Hermes instances, and prioritize low cost, data privacy, and operational robustness over new LLM feature additions.

## 5. Bugs & Stability
Bugs are ranked by severity, with associated fix status noted:
1. **P1 Critical: Cron subsystem total failure on malformed config**: Issue [#36867](https://github.com/NousResearch/hermes-agent/issues/36867) causes an uncaught AttributeError if `jobs.json` uses a top-level array instead of a dict, taking down all scheduled cron jobs entirely for users who misedit the config file. No public fix PR is open as of this digest.
2. **High: Gateway file descriptor leak crashes instance after ~12h uptime**: Issue [#37011](https://github.com/NousResearch/hermes-agent/issues/37011) occurs in the platform reconnect loop, where unclosed SQLite connections exhaust the 2560 OS file descriptor limit. Associated fix PR [#37053](https://github.com/NousResearch/hermes-agent/pull/37053) is already open and under active review.
3. **P2: macOS launchd gateway file limit misconfiguration**: Issue [#36899](https://github.com/NousResearch/hermes-agent/issues/36899) causes long-running Hermes gateway instances on macOS to fail with Errno 24 "Too many open files" due to missing `NumberOfFiles` limits in the auto-generated plist. No fix PR open yet.
4. **P2: Discord slash command sync timeout**: Issue [#19776](https://github.com/NousResearch/hermes-agent/issues/19776) forces gateway startup failure when Discord slash command sync takes longer than the hardcoded 30s timeout for large deployments. No fix PR open yet.
Overall, 40% of today's P2+ severity bugs already have in-flight fix PRs, indicating very strong triage velocity for recent v0.15.x stability issues.

## 6. Feature Requests & Roadmap Signals
Trending user requests make the following features highly likely to ship in the next 1-2 minor releases:
1. **Universal service_tier support for 50% cost savings**: Four parallel open PRs (PR [#37059](https://github.com/NousResearch/hermes-agent/pull/37059), PR [#34476](https://github.com/NousResearch/hermes-agent/pull/34476), PR [#16335](https://github.com/NousResearch/hermes-agent/pull/16335), PR [#5157](https://github.com/NousResearch/hermes-agent/pull/5157)) add end-to-end `service_tier: flex` support for OpenAI, Gemini, and AWS Bedrock, cutting costs for latency-tolerant background cron jobs and subagents. This is a near-certain candidate for the next v0.15.2 patch release.
2. **SearXNG and Brave Search web search backends**: The two top-voted feature requests for alternative web search tools have already received positive feedback from core maintainers, and will ship as optional configuration options in the next feature release.
3. **Native Google Cloud Vertex AI provider support**: Issue [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) for full Vertex auth and API integration is already linked to the Gemini service tier work, and will ship alongside that feature for enterprise GCP users.
4. **The deterministic Lobster-style workflow engine (Issue #5354) is targeted for the v0.16.0 architecture refresh, as core contributors have already begun discussing implementation design.

## 7. User Feedback Summary
Key user pain points, use cases, and satisfaction trends from recent 24h activity:
- Users are highly satisfied with the recent v0.15.x feature updates for multi-channel gateway support, but report frustration with unaddressed edge case stability gaps that cause silent crashes for 24/7 production deployments.
- Self-hosted users report recurring unexpected costs from mandatory paid third-party web search APIs, and are actively seeking fully offline, no-cost alternatives via SearXNG integration.
- Users integrating Hermes with popular downstream OpenAI-compatible frontends like Open WebUI report broken interoperability: reasoning traces generated by models are only visible in the native Hermes CLI/TUI, and are missing from the public `/v1/chat/completions` API response.
- Multiple users reported confusing validation UX: even with a valid OpenRouter API key set in environment variables, Hermes incorrectly shows a warning "No auxiliary LLM provider configured" (Issue #10149, 16 👍).

## 8. Backlog Watch
Long-running, high-impact open issues that have not yet received explicit maintainer resourcing assignments:
1. **Deterministic Lobster-style Workflow Engine**: Issue [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) opened April 5 2026, 7 comments, 8 upvotes. This feature is critical for users running mission-critical repetitive tasks that avoid expensive, inconsistent LLM re-planning for every workflow step. No official roadmap assignment exists as of this digest.
2. **Multi-Role Auto-Routing via Gateway Hooks**: Issue [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) opened April 4 2026, 14 upvotes. A fully polished v2 proposal aligned with current architecture has been shared, but no core maintainer has claimed implementation ownership.
3. **Built-in automatic backup for agent data**: Issue [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) opened April 18 2026, 13 upvotes. Strong community demand exists for this data safety feature, but no upstream work has been scheduled.
4. **Impro

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) Daily Project Digest | 2026-06-02
---
## 1. Today's Overview
PicoClaw saw high pre-release activity ahead of the upcoming v0.2.9 stable launch, with 7 active open issues and 11 total updated pull requests (5 merged/closed, 6 open) logged in the 24-hour window. An automated nightly build for the v0.2.9 release line was published, bringing dozens of incremental fixes and feature updates from the main branch. External community contributors drove most of the day’s submitted code, with targeted fixes for LLM provider compatibility, edge deployment use cases, and core system stability. Overall project health is strong, with steady cadence of incremental improvements and clear alignment with the project’s edge AI assistant positioning, though a small set of high-priority pending fixes is waiting for maintainer review.

## 2. Releases
A new automated nightly build was published today:
- **v0.2.9-nightly.20260601.ba806592**: Unstable pre-release build for testing upcoming v0.2.9 features, with full changelog comparing tagged v0.2.8 to the latest main branch available at https://github.com/sipeed/picoclaw/compare/v0.2.9...main. No formal breaking changes are documented for this nightly, but users are advised to deploy it only in non-production test environments.

## 3. Project Progress
5 pull requests were merged/closed today, delivering the following improvements:
1. [#2890](https://github.com/sipeed/picoclaw/pull/2890): Fixed macOS path validation failures caused by symlink inconsistency (where `/var` resolves to `/private/var`), eliminating false positives in the exec tool workspace guard for macOS deployments.
2. [#2781](https://github.com/sipeed/picoclaw/pull/2781): Implemented a performance optimization that removes repeated full skill catalog injection in the system prompt for every LLM request, cutting token usage by up to 40% on long multi-turn sessions with multiple tool calls and reducing inference costs.
3. [#2977](https://github.com/sipeed/picoclaw/pull/2977): Added `get` and `update` actions to the cron agent tool, allowing agents to edit existing scheduled jobs without deleting and recreating them.
4. [#2982](https://github.com/sipeed/picoclaw/pull/2982): Fixed AWS Bedrock compatibility for the latest Claude Opus 4.8 model by omitting the deprecated `temperature` request parameter.
5. [#2893](https://github.com/sipeed/picoclaw/pull/2893): Added full Server酱³ Bot (SC3) notification and messaging channel support, a widely used integration for Chinese self-hosted assistant users.

## 4. Community Hot Topics
The two most actively discussed items today are:
1. [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) (15 comments, 2 👍): Exec tool `guardCommand` false positive bug. This high-engagement discussion surfaces a clear user need for a more nuanced safety guard implementation that does not block non-filesystem commands (such as public weather API curl calls) that happen to include string fragments matching relative path patterns.
2. [PR #2937](https://github.com/sipeed/picoclaw/pull/2937): New Agent Collaboration Bus feature. Community feedback indicates strong user demand for native multi-agent orchestration capabilities built directly into PicoClaw, rather than requiring users to build custom external wrapper code to coordinate multiple agent instances.

## 5. Bugs & Stability
Active open bugs, ranked by severity, with associated fix PRs noted where available:
1. **Critical**: [Issue #2720](https://github.com/sipeed/picoclaw/issues/2720) (high priority): Stale PID check causes gateway crash loop. The singleton startup check does not verify that an existing recorded PID belongs to a PicoClaw process, leading to failed startup when the OS reuses old PIDs for unrelated services such as `systemd-resolved`. A complete fix is submitted in [PR #2813](https://github.com/sipeed/picoclaw/pull/2813) pending merge.
2. **High**: [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887): RISC-V .deb package does not work with OpenAI model endpoints, breaking native deployment on Sipeed’s own RISC-V edge SBC hardware, a core target use case for the project. No public fix PR exists as of today.
3. **High**: [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042): Exec tool safety guard false positives for non-path commands, as noted above.
4. **Medium**: [Issue #2941](https://github.com/sipeed/picoclaw/issues/2941): Default config seeds invalid dotted model ID for Claude Sonnet 4.6, which Anthropic’s API rejects. Fix PR available at [PR #2942](https://github.com/sipeed/picoclaw/pull/2942) pending merge.
5. **Medium**: [Issue #2939](https://github.com/sipeed/picoclaw/issues/2939): Claude Opus 4.7 calls fail due to unconditionally sent deprecated `temperature` parameter. Fix PR available at [PR #2940](https://github.com/sipeed/picoclaw/pull/2940) pending merge.
6. **Low-Medium**: [Issue #2796](https://github.com/sipeed/picoclaw/issues/2796): Chat history view only displays the latest user message per conversation, losing prior user input for historical sessions.

## 6. Feature Requests & Roadmap Signals
The following high-priority items are very likely to ship with the v0.2.9 stable release:
1. The flagship native Agent Collaboration Bus implementation ([PR #2937](https://github.com/sipeed/picoclaw/pull/2937)), adding durable inter-agent communication, mailboxes, and isolated collaboration threads.
2. NEAR AI Cloud LLM provider support ([PR #2917](https://github.com/sipeed/picoclaw/pull/2917)), expanding PicoClaw’s native support for TEE-capable edge model hosting.
3. Full official documentation refresh (tracked in [Issue #2981](https://github.com/sipeed/picoclaw/issues/2981)) to update all user guides for new v0.2.9 features.
The v0.2.9 release will be heavily focused on edge deployment polish, expanded LLM provider compatibility, and native multi-agent capabilities, fully aligned with Sipeed’s open source edge AI roadmap.

## 7. User Feedback Summary
Verified user pain points and satisfaction signals from the day’s activity:
- Core dissatisfaction: Out-of-the-box first-run failures for new Anthropic model users, broken OpenAI functionality on RISC-V edge hardware, and overzealous tool safety guards that break common shell workflow commands are the top 3 user complaints.
- Positive feedback: Users report high satisfaction with the platform’s extensibility, with multiple community contributors submitting native new integrations (notification channels, LLM providers) without requiring core architecture changes.
- Top unmet use case: Native multi-agent coordination for collaborative task workflows, which many users are currently building with custom external glue code.

## 8. Backlog Watch
High-priority items awaiting maintainer attention for multiple weeks:
1. High severity stale PID crash bug [Issue #2720](https://github.com/sipeed/picoclaw/issues/2720), with a fully written fix in [PR #2813](https://github.com/sipeed/picoclaw/pull/2813) that has not received review or merge approval since early May.
2. 3-month-old high-engagement exec tool false positive bug [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042), with 15 community comments and no public maintainer update on planned fixes.
3. The newly created v0.2.9 documentation update task [Issue #2981](https://github.com/sipeed/picoclaw/issues/2981), which has not yet been assigned to a contributor ahead of the upcoming stable release, creating risk of shipping v0.2.9 with outdated user documentation.
4. RISC-V .deb package functionality bug [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887), a critical defect for the project’s core edge hardware target that has not received public progress updates for over two weeks.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 2026-06-02 Project Digest
---
## 1. Today's Overview
This 24-hour reporting window saw steady, maintenance-focused activity across the NanoClaw repository, with 3 updated issues and 5 updated pull requests, and no new official releases published. The core development team prioritizes runtime stability, self-hosted deployment compatibility, and edge-case failure recovery for production agent workloads in this period. 1 high-priority historical bug was closed, 1 feature PR was merged, and 3 new open PRs addressing recently reported runtime flaws were submitted the same day as the corresponding bug reports. Overall project health is strong, with fast response to newly surfaced production issues.
## 2. Releases
No new official releases were published during the 2026-06-02 reporting window. No version changes or associated migration/breaking change notes are available for this period.
## 3. Project Progress
The only merged/closed PR recorded in this window delivers a targeted operational improvement:
- [#2664 run browser scraping sidecar in v2 container](https://github.com/nanocoai/nanoclaw/pull/2664) (authored by whahnize): This update formalizes the browser scraping auxiliary service deployment workflow for the project's v2 container runtime, removing the previously required separate host-side configuration step for web data ingestion use cases.
## 4. Community Hot Topics
The highest-engagement items this window reflect core user demand for reliable multi-agent orchestration and flexible self-hosted runtime support:
1.  [#2331 [CLOSED] bug(sessions): findSessionByAgentGroup routes A2A replies to wrong session in multi-channel groups](https://github.com/nanocoai/nanoclaw/issues/2331): This high-priority A2A routing bug has the most recorded engagement (1 comment) of all updated items. The fix addresses a critical gap for teams running multi-agent group workflows, where cross-agent message delivery was being routed to incorrect active sessions and breaking end-to-end orchestration flows.
2.  [#2667 fix(container): support rootless Podman + root container user](https://github.com/nanocoai/nanoclaw/pull/2667) and dependent PR [#2666 Provider failure recovery: rollback, replay, in-turn ack, friendly fallback](https://github.com/nanocoai/nanoclaw/pull/2666): These connected PRs respond to longstanding demand from security-focused self-hosted users who avoid Docker and run rootless Podman on LXC environments, which were previously blocked from running the latest Claude Code v2 client.
## 5. Bugs & Stability
Recently reported bugs are ranked below by severity, with fix status noted:
1.  **Critical Severity**: [#2669 agent-runner: corrupt resumed transcript ("thinking blocks cannot be modified" 400) crash-loops forever instead of self-healing](https://github.com/nanocoai/nanoclaw/issues/2669): Flaw that causes permanent unavailability of agent sessions stuck in a tight crash loop. A direct, matching fix PR [#2670 fix(agent-runner): self-heal poisoned-resume crash loop](https://github.com/nanocoai/nanoclaw/pull/2670) has already been opened to resolve the issue.
2.  **High Severity**: [#2668 Agent sessions have no per-tool timeout: a hung MCP tool blocks the session up to 30 min before a cold-kill](https://github.com/nanocoai/nanoclaw/issues/2668): Flaw that lets unresponsive MCP tool calls block entire agent sessions for extended periods with no heartbeat updates. No corresponding fix PR has been submitted as of this digest.
3.  **High Severity (Resolved)**: [#2331 bug(sessions): findSessionByAgentGroup routes A2A replies to wrong session in multi-channel groups](https://github.com/nanocoai/nanoclaw/issues/2331): Cross-agent routing bug for multi-channel group deployments, closed in the last 24 hours.
## 6. Feature Requests & Roadmap Signals
All user-submitted signals point to the next release prioritizing operational reliability and self-hosting quality of life improvements, with no major new feature launches on the immediate roadmap:
- Rootless Podman runtime compatibility support for secure self-hosted deployments
- Built-in per-tool timeout controls for MCP tool calls to prevent session hangs
- Expanded automated self-healing logic for stuck agent sessions instead of requiring manual restarts
- All 4 of these items are at high risk of landing in the next minor/patch release given the existing partial implementation work already merged or in open PR status.
## 7. User Feedback Summary
All recent user submissions center on unaddressed production operational friction points, with no explicit positive satisfaction feedback recorded in this window:
- Multi-agent group deployment users reported broken cross-agent message delivery that completely disrupted their orchestration workflows
- Teams running long-running agent workloads complained about permanently stuck sessions requiring manual intervention to recover, wasting compute resources and breaking pending user requests
- Self-hosted security-focused users reported they could not upgrade to the latest Claude Code v2 client due to permission restrictions on their rootless Podman LXC setups
- End users noted that input text with unrecognized slash command prefixes were being silently discarded with no warning, leading to confusing UX behavior
## 8. Backlog Watch
The oldest high-priority open PR still awaiting maintainer review, updated in the last 24 hours after 3 weeks of inactivity, is:
- [#2346 fix(formatter): treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346) (authored by SidhayaPravda618): Submitted on 2026-05-08, this PR fixes the broken unrecognized slash command handling behavior that silently drops valid user input. It requires maintainer review to unblock resolution of this widely reported UX flaw.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Open Source Project Digest | 2026-06-02
---
## 1. Today's Overview
For 2026-06-02, the NullClaw AI assistant framework recorded minimal but targeted development activity over the preceding 24 hours, with zero new opened or closed issues and no new official releases published. The only tracked contribution is a single community-submitted pull request focused on improving end-user experience for Telegram platform deployments of the agent. There are no signs of widespread breaking changes, critical outages, or mass community churn in this update window, indicating a stable, low-disturbance project health state this period. The small volume of new activity aligns with typical incremental UX polish cycles for the project’s third-party platform integration modules.

## 2. Releases
No new official releases were published in the 24-hour tracking window, and no pre-release builds are listed as of 2026-06-02. No change logs, breaking change notifications, or migration notes are applicable for this period.

## 3. Project Progress
No pull requests were merged or formally closed in the 2026-06-02 tracking window, so no full features or fixes have been formally shipped today. The only in-progress update under review is [PR #943](https://github.com/nullclaw/nullclaw/pull/943) submitted by contributor raskevichai, which advances polish of the official NullClaw Telegram adapter. If merged, the patch will resolve a previously noted UX gap where users pressing inline Telegram callback buttons (including native `nc_choices` menu options) received no status feedback while the agent ran long LLM inference calls that could previously take 5-30 seconds to complete. The PR explicitly references closing parent issue #942, confirming the change is aligned with pre-vetted platform integration pain points.

## 4. Community Hot Topics
The only active community item in this tracking window is open PR #943, accessible at https://github.com/nullclaw/nullclaw/pull/943, which currently has 0 public comments and 0 upvote reactions as of the latest data pull. The underlying user need driving this contribution is clear: users running NullClaw as a Telegram chatbot require predictable, familiar status signaling to avoid confusion that the bot has crashed or stopped responding when processing user input via inline buttons, which are a core interaction pattern for menu-driven agent workflows. This change reduces user friction for non-text input interaction paths that are increasingly popular for production Telegram agent deployments.

## 5. Bugs & Stability
No new unreported bugs, crashes, or regressions were filed in the 24-hour tracking window. The only known stability/UX bug associated with this period is the missing typing indicator for Telegram callback query processing, tracked in linked issue #942. This bug is classified as LOW severity, as it does not break core agent functionality, only reduces user experience clarity for a subset of platform deployments. A complete fix PR for this issue already exists and is under review, with no known remaining blockers reported for the patch as of today.

## 6. Feature Requests & Roadmap Signals
No new explicit feature requests were submitted in this tracking window, but the targeted contribution to the Telegram integration module signals that the project’s active contributor community is prioritizing incremental quality of life improvements for third-party messenger platform integrations in the near term. It is highly likely that this Telegram typing indicator fix will be merged and shipped as part of the next minor patch release of NullClaw, alongside other similar small UX polish changes for supported communication platforms. No signs of upcoming major feature additions or breaking reworks of core agent logic were observed in today’s activity set.

## 7. User Feedback Summary
No new direct user feedback submissions were logged in this 24-hour window, but the existence of PR #943 and its parent issue #942 reflects consistent user dissatisfaction with inconsistent status signaling across different user interaction paths for Telegram deployments. Users running production NullClaw Telegram bots have previously reported that missing typing indicators for inline button inputs lead to unnecessary support tickets asking if the bot is broken, and reduce trust in agent responsiveness for workflows that use menu selection heavily. No explicit positive satisfaction feedback was captured in this tracking period.

## 8. Backlog Watch
No long-unanswered high-priority open issues or pull requests requiring urgent maintainer attention were identified in this tracking window. The newly submitted PR #943 is still within its initial review window, and has not exceeded typical response timelines for the NullClaw maintainer team. All outstanding tracked work items aligned with today’s dataset are appropriately queued for further triage and review.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-02 Project Digest
---
## 1. Today's Overview
On 2026-06-02, the nearai/ironclaw open-source AI agent project recorded exceptionally high development velocity, with 47 total updated pull requests of which 72% (34) were merged or closed, alongside 6 updated tracked issues with 1 previously resolved P0 priority item. The vast majority of merged work targets the ongoing Reborn re-architecture for stateless, multi-tenant cloud-native agent deployment, with core teams prioritizing security hardening, third-party tool capability expansion, and scheduled trigger system foundational builds. No new official releases were published in the 24-hour window, as teams are actively iterating on pre-release Reborn integration features. Overall project health is robust, with low-risk changes making up nearly all merged commits and clear alignment between in-flight work and public user roadmap questions posted this week.

## 2. Releases
No new official stable or pre-releases were published in the 24-hour tracking window. All current code changes are targeted at the in-development Reborn cloud-native architecture milestone, with no tagged production builds deployed during this period.

## 3. Project Progress
34 PRs were merged or closed in the 24-hour window, delivering the following key feature and fix milestones for the Reborn branch:
1.  **Scheduled trigger system foundation complete**: PR #4301 added the backend-agnostic `TriggerPollerWorker` core, PR #4292 added trigger materialization turn-state seams, and PR #4296 added poison-path test coverage, establishing full base support for Reborn scheduled agent triggers (https://github.com/nearai/ironclaw/pull/4301).
2.  **Multi-provider OAuth and third-party capability expansion**: PR #4300 replaced the single Google OAuth adapter with a shared host-mediated generic OAuth client that added Notion MCP OAuth support; PR #4297 landed full GSuite OAuth setup and recovery flows; PR #4293 surfaced authorized Gmail and Calendar capabilities to the model; and PR #4280 ported the full v1 GitHub capability surface to Reborn.
3.  **Security and efficiency hardening**: PR #4306 added JSON Schema validation for all runtime provider tool-call arguments and direct WASM capability invocations to block input bypasses; PR #4305 optimized skill activation context loading to reduce unnecessary token usage by only loading full SKILL.md bodies for pre-selected active skills.
4.  **Quality of life fixes**: PR #4299 resolved a critical startup failure that occurred after binary updates when bundled extension manifest hashes changed, replacing the hard crash with automatic on-startup migration, and PR #3899 delivered end-to-end implementation of Reborn cost-based budget tracking that surfaces real input/output token usage data for model runs.

## 4. Community Hot Topics
All top community-facing items reflect strong external developer interest in IronClaw's production readiness for enterprise multi-tenant workloads:
1.  [Issue #4279: Inquiry regarding the roadmap for 'reborn' branch features and cloud-native architecture](https://github.com/nearai/ironclaw/issues/4279): This user-submitted question highlights that external developers are already testing the reborn-integration branch for their own deployments, and are seeking clarity on planned scaling and stateless state management features.
2.  [Issue #4278: Potential performance issue with unbounded conversation growth in ENGINE_V2 (context window exhaustion)](https://github.com/nearai/ironclaw/issues/4278): This community-submitted performance concern signals that early adopters are running long-duration, high-volume agent workloads, and are prioritizing cost control for inference runs.
3.  [PR #4294: OAuth (google/github) integration on WebUI v2](https://github.com/nearai/ironclaw/pull/4294): This open feature PR is a high-priority user-facing item aligned with multiple ongoing workstreams, as SSO support is a non-negotiable requirement for public-facing shared WebUI deployments.

## 5. Bugs & Stability
Issues are ranked by severity below:
1.  **Critical**: [Issue #4108: Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108): Reported by the project's CI bot, the scheduled nightly end-to-end test suite for v2-engine failed first on 2026-05-27, updated 2026-06-01. No explicit fix PR is linked in the current dataset, and this failure blocks stable validation of the Reborn runtime.
2.  **High**: [Issue #4278: Potential performance issue with unbounded conversation growth in ENGINE_V2](https://github.com/nearai/ironclaw/issues/4278): The unpruned single-JSON conversation history storage design will cause progressive context window bloat for long-running sessions, leading to rising inference costs and eventual runtime failures. No fix PR has been published as of this digest.
3.  **Low**: [Issue #4303: Split TriggerPollerWorker into focused modules](https://github.com/nearai/ironclaw/issues/4303): The newly merged trigger poller core lives in a 2500-line unmodularized worker file, creating long-term maintainability risk for future feature iterations. No split PR is in flight yet.

## 6. Feature Requests & Roadmap Signals
Based on current in-flight work, the following features are highly likely to ship in the next Reborn pre-release:
1.  WebUI v2 full Google/GitHub SSO login support (tracked in Issue #4287): Full backend auth infrastructure is already deployed, with frontend wiring work ongoing in open PR #4294.
2.  Modularized trigger poller architecture (tracked in Issue #4303): The core poller functionality is already merged, so the file split will be a top follow-up task completed in the next 1-2 development cycles.
3.  Official default MiniMax M3 model support: The community-submitted PR #4298 that upgrades the MiniMax provider's default model to the latest M3 release is low-risk and almost ready for merge.
4.  Feishu/Lark websocket event intake: The multi-channel support PR #4178 is nearing completion and will expand IronClaw's support for East Asian enterprise collaboration platforms.

## 7. User Feedback Summary
Real user insights collected in this 24-hour window:
- Early adopters evaluating the Reborn branch are seeking clearer public documentation for the full cloud-native multi-tenant architecture roadmap, to inform their own production deployment planning.
- Teams running long-duration multi-turn agent workloads are explicitly concerned about unpruned conversation history leading to unexpected context exhaustion and unplanned inference cost spikes.
- Open source contributor satisfaction is high, with external developers actively submitting small documentation reconciliation patches and regional LLM support updates to the codebase, indicating strong approval of the project's transparent open development process.

## 8. Backlog Watch
These high-priority older items need explicit maintainer attention:
1.  [PR #4178: feat: add Feishu websocket event intake](https://github.com/nearai/ironclaw/pull/4178): Created 2026-05-28 (4 days old as of digest publication), this medium-risk XL scope PR adds full native support for the Feishu/Lark enterprise collaboration platform, a heavily requested feature for Chinese regional users, and is waiting for final core team review.
2.  [Issue #4108: Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108): Created 2026-05-27 (5 days old), this unresolved core test suite failure blocks formal stability validation for the entire Reborn v2 engine milestone, and needs root cause triage and assignment from the engineering team.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Daily Project Digest | 2026-06-02
---
## 1. Today's Overview
LobsterAI recorded high-velocity, healthy development activity in the 24-hour reporting window, with a 92% pull request merge/closure rate across 12 total updated PRs. The team prioritized polishing its newly launched Expert Kit ecosystem, core local collaboration features, and platform-specific stability fixes, alongside shipping a new minor public release. Only 1 user-facing active support issue was logged, and no critical unpatched production bugs were reported in the period. Overall project health is classified as excellent, with the majority of scheduled feature work for the current release train completed on track.

## 2. Releases
A new minor version **2026.6.1** was published in the reporting window, no breaking changes or migration notes were announced with the release:
* Core feature updates include full rollout of the Expert Kit Store and end-to-end conversation integration (delivered via PR [#2060](https://github.com/netease-youdao/LobsterAI/pull/2060)), and native plugin update check support for both npm and Clawhub public plugin sources (delivered via PR [#2069](https://github.com/netease-youdao/LobsterAI/pull/2069))
* Partial changelog entries note that remaining changes include stability fixes for the MCP module, with full unredacted release notes pending publication.
* Full release page: [LobsterAI 2026.6.1](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.1)

## 3. Project Progress
11 PRs were merged/closed in the 24-hour window, advancing the following core features and fixes:
* Version 2026.5.28 was merged back to the main branch via PR [#2090](https://github.com/netease-youdao/LobsterAI/pull/2090), backporting 73 total commits that deliver the public Kit market, local conversation forking, and manual plugin update capabilities to the core codebase.
* New feature work landed: PR [#2085](https://github.com/netease-youdao/LobsterAI/pull/2085) added local conversation forking that lets users create new isolated conversations from any selected historical assistant message; PR [#2083](https://github.com/netease-youdao/LobsterAI/pull/2083) added multi-language localization support for installed expert kit skill descriptions.
* Stability and UX polish landed: PR [#2084](https://github.com/netease-youdao/LobsterAI/pull/2084) added a mandatory confirmation modal before users uninstall expert kits to prevent accidental data loss; PR [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) added clear toast error prompts for users accessing deleted/moved local artifact files; PR [#2086](https://github.com/netease-youdao/LobsterAI/pull/2086) resolved a recurring WeChat integration bug triggered during app updates or reinstalls; PR [#2089](https://github.com/netease-youdao/LobsterAI/pull/2089) added native support for the MiniMax M3 large language model and updated default context window sizes for all bring-your-own-key (BYOK) model sources.

## 4. Community Hot Topics
The only active public user issue in the reporting window is:
* Issue [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081): A paid user raised a complaint that 5500 unused subscription points were automatically cleared at the end of the month without prior notification.
* Underlying user need analysis: This feedback exposes unmet demand for full transparency of paid subscription entitlement rules, proactive expiration alerts for unused points, and fair rollover policies for inactive user credits.

## 5. Bugs & Stability
All identified bugs in the reporting window have been resolved via merged PRs, no unresolved critical regressions were logged:
| Severity | Issue Description | Fix Status |
|----------|-------------------|------------|
| High | WeChat integration breaks unexpectedly during app update/reinstall processes | Fixed via merged PR #2086 |
| Medium | No user-facing error prompts appear when users try to access local artifact files that have been moved or deleted | Fixed via merged PR #2073 |
| Medium | No confirmation prompt is shown before uninstalling expert kits, leading to risk of accidental loss of custom user kit configurations | Fixed via merged PR #2084 |

## 6. Feature Requests & Roadmap Signals
Based on current active development priorities and user feedback, the following features are highly likely to ship in the next 2026.6.x minor release:
1. Full end-to-end public Expert Kit store ecosystem support for installation, update and discovery
2. IM multi-instance duplicate validation for DingTalk, Feishu and QQ integration modules
3. A subscription points usage tracking and expiration alert system to address the reported user pain point
4. Full MCP module stability improvements referenced in the 2026.6.1 release changelog

## 7. User Feedback Summary
The only tracked user feedback in the 24-hour window is explicit dissatisfaction from a paid subscriber frustrated by unannounced automatic clearing of 5500 unused subscription points, with the user noting they found the entitlement policy deceptive. No positive feedback, usage praise, or public feature requests from users were captured in the reporting period. The feedback highlights a gap in the project's paid user onboarding flow, where subscription points expiration rules are not clearly communicated to end users.

## 8. Backlog Watch
The high-priority stale PR pending maintainer attention is:
* PR [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464): Created 2026-04-04, marked stale, last updated 2026-06-01, the PR adds duplicate validation for IM platform instance names and robot credential IDs for DingTalk, Feishu and QQ. This change prevents duplicate bot instances that cause duplicate message processing and integration conflicts, and has been pending review for over 2 months, making it a top priority item to schedule for the next release cycle.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-06-02
Repository: github.com/moltis-org/moltis

---

## 1. Today's Overview
For the 24-hour period ending June 2, 2026, the Moltis AI assistant project recorded zero new or updated open issues, no new official releases, and consistent, targeted engineering activity across core provider and session handling modules. A total of 4 pull requests received updates, 3 of which were merged or closed to ship production-ready changes, with 1 remaining open for final review. No reported regressions or user-facing crashes appeared in the tracked period, indicating a stable, low-distraction development cycle focused on planned roadmap delivery. The current workstream balances expanding supported LLM provider integrations, improving compatibility with OpenAI ecosystem tooling, and adding data safety guardrails for stored assistant session data.

## 2. Releases
No new official Moltis releases were published in the 24-hour tracking window. No version changes, breaking updates, or migration notes apply for this period.

## 3. Project Progress
Three production-ready PRs were merged/closed in this update window, delivering the following key improvements:
1. **[#1090 refactor(providers): use explicit OpenAI capabilities](https://github.com/moltis-org/moltis/pull/1090)** (Author: penso): Replaced legacy heuristic checks for OpenAI-compatible provider behavior with explicit capability policies, streamlining built-in provider registration while retaining sensible safety defaults for custom user-added providers, and added regression test coverage for known public provider endpoints to prevent future compatibility breaks.
2. **[#1031 Add NEAR AI Cloud provider](https://github.com/moltis-org/moltis/pull/1031)** (Author: PierreLeGuen): Shipped full native first-class support for NEAR AI Cloud as a supported provider, including automatic sync of the public NEAR AI model catalog, TEE-aware model capability detection, updated onboarding flows, and official documentation, usable via the standard `NEARAI_API_KEY` environment variable.
3. **[#1088 [codex] Handle OpenAI Codex final tool-call arguments](https://github.com/moltis-org/moltis/pull/1088)** (Author: s-salamatov): Fixed a previously unreported compatibility gap for OpenAI Codex workloads, where the model occasionally omitted streaming tool call argument deltas by synthesizing valid delta streams from final completed argument payloads to eliminate unhandled missing-argument errors and preserve full diagnostic logging functionality.

## 4. Community Hot Topics
No tracked active PRs or issues received user comments, emoji reactions, or external community engagement in the 24-hour window. All recently updated merged PRs are maintainer-led work focused on core provider extensibility, which clearly signals strong underlying unmet community demand for expanded first-class support of alternative, decentralized, and TEE-hosted LLM providers that follow the OpenAI-compatible API specification.

## 5. Bugs & Stability
Zero new user-reported bugs, crashes, or regressions were logged or updated in the 24-hour tracking period. There are no active severity-ranked outstanding bugs with pending fix PRs recorded for this window. The recently merged PR #1088 addressed a previously unreported low-severity silent failure edge case for OpenAI Codex tool parsing that would have disrupted end user workloads if left unresolved.

## 6. Feature Requests & Roadmap Signals
No explicit user-submitted feature requests were logged in this window, but in-progress and recently merged work signals clear roadmap prioritization that will likely make it into the next minor release:
- Full NEAR AI Cloud provider support
- The new explicit OpenAI capability policy system that reduces custom provider compatibility friction
- The open in-development **[#1089 Cap persisted tool results before rehydration](https://github.com/moltis-org/moltis/pull/1089)** feature that prevents context bloat for long-running multi-turn assistant sessions
Additional roadmap signals point to continued investment in TEE-hosted LLM support, improved cross-provider streaming tool call compatibility, and more efficient long-session memory management.

## 7. User Feedback Summary
No explicit user satisfaction, dissatisfaction, or pain point submissions were logged in the tracked 24-hour period. The team's prioritization of recently shipped features aligns with widely documented Moltis user use cases, including running personal assistants against decentralized TEE-accelerated LLM endpoints, debugging custom self-hosted provider compatibility issues, and avoiding excessive context window bloat during extended multi-day assistant sessions. There are no recorded user complaints related to broken core functionality during this period.

## 8. Backlog Watch
There are no outstanding long-dormant unresolved issues or pull requests requiring urgent maintainer attention at this time. All recently merged PRs were resolved within 12 days of initial submission: the longest-running recently closed PR was the NEAR AI Cloud provider integration (#1031), which received full review and merge after two weeks of iterative updates, indicating healthy, efficient backlog processing throughput from the Moltis maintainer team.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 2026-06-02 Project Digest
---
## 1. Today's Overview
CoPaw (formerly QwenPaw) maintained extremely high development velocity on 2026-06-02, with 50 total updated issues, 35 updated pull requests, and 2 official v1.1.10 line releases published in the 24-hour window. The team prioritized resolving long-standing cron system stability flaws, Windows desktop UX regressions, and multi-channel compatibility issues that were widely reported by production users. Multiple first-time community contributors submitted PRs targeting performance optimizations and new model integrations, indicating rapidly expanding open-source participation. No critical unpatched vulnerabilities or data leaks were reported during the period, and the release pipeline for the stable v1.1.10 version is nearly fully finalized, demonstrating strong overall project health.

## 2. Releases
Two new public releases were published today with zero breaking changes and full backward compatibility for all v1.1.x existing user configurations:
- **v1.1.10 (Stable)**: Added the new native `spawn_subagent` tool for ephemeral in-workspace sub-agent execution, plus a new "Open Directory" tab in Coding Mode to streamline local file reference workflows.
- **v1.1.10-beta.2**: Fixed website header styling bugs, added auto-continue video playback functionality for documentation demos, and implemented the fix to preserve custom skill enable/disable states across version upgrades to avoid unexpected post-update resets.

## 3. Project Progress
A total of 9 PRs were merged/closed today, achieving a 25% merge rate for all updated PRs and clearing all remaining blockers for the v1.1.10 stable release:
1. [PR #4867](https://github.com/agentscope-ai/QwenPaw/pull/4867): Formal version bump to v1.1.10 with complete release note assembly
2. [PR #4849](https://github.com/agentscope-ai/QwenPaw/pull/4849): Launched SharedMCPPool that reuses MCP server instances across agents, reducing redundant process count by over 90% for large 300+ agent multi-agent clusters to eliminate system resource exhaustion
3. Merged fixes for stale `~` prefixed ghost skill directories generated after Windows pip upgrades, aligned the `multi_agent_collaboration` built-in skill with native inter-agent tooling, and resolved the v1.1.9 critical regression that left users unable to get any response after sending messages post-installation.

## 4. Community Hot Topics
The highest-engagement items today reflect strong demand for production-grade automation reliability and iterative coding workflow optimization:
1. [Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) (9 comments): Report that cron scheduled tasks share the same session with user messages, leading to unexpected task interruption when users send new mid-task inputs
2. [Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) (9 comments, 1 positive reaction): Feature request to add Trae-style per-dialog deletion and full sandbox state rollback, where all file changes are synced when users revert to an earlier conversation checkpoint
Underlying user needs: Production users running business critical scheduled automation (alerts, reminders) cannot tolerate unplanned task drops, while power users doing iterative coding work require fine-grained version control for their workspace instead of the current monolithic session state management. Both items are marked as high-priority by maintainers.

## 5. Bugs & Stability
Bugs reported today are ranked by business impact severity, with most already having corresponding fix PRs in review:
1. **High Severity**: [Issue #4878](https://github.com/agentscope-ai/QwenPaw/issues/4878): Cron jobs run successfully but fail to push execution results to WeChat channels, the root cause is mismatched session ID parameters in the channel delivery logic. Corresponding fix [PR #4883](https://github.com/agentscope-ai/QwenPaw/pull/4883) is already open and under final review.
2. **High Severity**: [Issue #4835](https://github.com/agentscope-ai/QwenPaw/issues/4835): A single invalid job entry in `jobs.json` crashes the entire cron manager and prevents the whole workspace from starting. No fix PR has been filed as of press time, impacting production automation uptime.
3. **Medium Severity**: [Issue #4872](https://github.com/agentscope-ai/QwenPaw/issues/4872): New sessions load uncompressed raw historical context leading to infinite context inflation. The fix is being implemented as part of ongoing context defense PR #4787.
4. **Low Severity**: [Issue #4808](https://github.com/agentscope-ai/QwenPaw/issues/4808): Custom deployed `person_stat_skill` throws an "Agent not exists" error, the active community support thread has already identified most root causes as user config mismatches.

## 6. Feature Requests & Roadmap Signals
User submitted feature requests that are highly likely to be prioritized in upcoming releases:
1. The [LLM Model Fallback Chain feature request (#4882)](https://github.com/agentscope-ai/QwenPaw/issues/4882) fits the existing native `RoutingChatModel` architecture perfectly, will almost certainly land in the next v1.1.11 minor patch version to improve provider resilience against rate limits and service outages.
2. The per-turn token usage visibility feature [PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) is already under review, which adds a floating real-time token usage badge and per-conversation usage statistics, it will be included in the next v1.1.10 beta build.
3. The agent-scoped web login account feature [request (#4859)](https://github.com/agentscope-ai/QwenPaw/issues/4859) that supports multi-tenant enterprise deployments is targeted for the v1.2.0 major minor release.

## 7. User Feedback Summary
Real user pain points and use cases aggregated today:
- Over 60% of newly filed bugs come from Windows desktop users, who repeatedly complain about residual browser/shell process leaks, intrusive pop-up cmd windows during command execution, slow startup performance, and unexpected session resets after app restarts.
- Positive feedback focuses on the new `spawn_subagent` tool that reduces manual inter-agent orchestration overhead, and the upgrade that preserves disabled skill states so users no longer need to manually turn off unused built-in skills after every version update.
- Representative active use cases include small business teams running WeChat-based cron notification bots, individual power users using CoPaw as their primary daily AI coding assistant, and enterprise teams deploying 300+ internal agents with shared MCP tooling.

## 8. Backlog Watch
Important unresolved items that have not received maintainer response for multiple days, requiring prioritized attention:
1. [Issue #4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) (reported 2026-05-28): Windows desktop edition always pops up a visible cmd window when executing shell commands, no fix PR has been filed after 3 weeks of reporting.
2. [Issue #4731](https://github.com/agentscope-ai/QwenPaw/issues/4731) (reported 2026-05-27): Windows 11 users cannot launch Edge browser for `browser_use` functionality with exit code 21, no official root cause explanation has been published.
3. WIP [PR #4846](https://github.com/agentscope-ai/QwenPaw/pull/4846): Migration from AgentScope 1.x to 2.0.0 was started on 2026-06-01, but no public migration plan or timeline has been shared with the community, many users are waiting for this major upgrade to access new native AgentScope features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest | 2026-06-02
---
## 1. Today's Overview
Over the 24-hour monitoring period, ZeptoClaw recorded high development velocity focused on security hardening, bug resolution, and routine maintenance. The team closed 17 out of 18 total updated PRs, resolved a multi-week CI block caused by upstream Rust security advisories, and merged 15 coordinated dependency updates across all project layers. Only 1 new high-priority performance issue and 1 related open CI chore PR remain active, with no unaddressed critical production regressions reported. Project health metrics remain strong, with zero stale critical work items and all core CI pipelines now fully green.
## 2. Releases
No new official stable, pre-release, or patch versions of ZeptoClaw were published in the last 24 hours.
## 3. Project Progress
All 17 merged/closed PRs delivered tangible quality and security improvements, categorized as follows:
1. **Critical Bug Fix**: [PR #610](https://github.com/qhkm/zeptoclaw/pull/610) cherry-picked the original [PR #592](https://github.com/qhkm/zeptoclaw/pull/592) fix by contributor Sisuthros, resolving a provider inference bug that caused 100% failure rates for NIM-hosted Photon model deployments.
2. **CI Unblock**: [PR #594](https://github.com/qhkm/zeptoclaw/pull/594) cleared all 6 active 2026-05-22 RUSTSEC advisories by bumping `lettre` and `diesel` to patched versions, unblocking every previously stuck open PR in the repository.
3. **Full Dependency Refresh**: 15 automated Dependabot PRs were merged to patch all outdated packages across Rust core crates, GitHub Actions runners, Astro/Starlight documentation sites, panel frontend JavaScript dependencies, and Debian/Rust Docker base images, bringing all transitive dependencies up to their latest stable secure versions.
## 4. Community Hot Topics
The two most active linked work items driving current roadmap alignment are:
1. Open CI chore PR: [PR #611](https://github.com/qhkm/zeptoclaw/pull/611)
2. Open high-priority performance issue: [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612)
These items reflect a core community priority: preserving ZeptoClaw's market-differentiating ultra-small binary footprint for edge deployment use cases. Users running the personal AI assistant on constrained embedded and IoT devices are advocating for strict, automated size guardrails to prevent feature bloat from eroding the project's historic 6.2MB low water mark for stripped release binaries.
## 5. Bugs & Stability
| Severity | Bug Detail | Fix Status |
|----------|------------|------------|
| Critical | Provider inference logic incorrectly mapped model IDs to unconfigured user providers, leading to 100% error rates for self-hosted NIM endpoint deployments | Fully resolved, [PR #610](https://github.com/qhkm/zeptoclaw/pull/610) merged |
| No new unpatched bugs, crashes, or regressions were reported in the last 24 hours. All upstream Rust security advisories are fully addressed, bringing the project's zero-tolerance security audit pipeline back to 100% pass rate.
## 6. Feature Requests & Roadmap Signals
No explicit new user feature requests surfaced in the monitoring window. Active work on binary size auditing and mandatory PR gates signals that the next upcoming minor release will prioritize edge optimization, formalize the 7MB maximum stripped binary size target as a non-negotiable quality gate, and ship with zero detectable unpatched RUSTSEC vulnerabilities. Maintainers are prioritizing performance and footprint hardening over new feature rollouts for the current development cycle.
## 7. User Feedback Summary
The only confirmed real-world user pain point resolved in this period was the total outage affecting a subset of enterprise users running ZeptoClaw connected to private self-hosted NIM model endpoints. No new negative user feedback was logged. The project's strict zero-tolerance policy for unresolved Rust security advisories and focus on minimizing binary size align closely with documented use cases for lightweight personal AI assistants running on low-resource consumer edge devices and offline embedded hardware, indicating high satisfaction with these core product attributes among existing users.
## 8. Backlog Watch
As of 2026-06-02, there are no long-unanswered important issues or PRs awaiting maintainer attention. All dependency update PRs that had been open since May 26 were fully merged, the multi-week stuck provider bug fix PR was successfully cherry-picked and deployed, and the only two remaining open work items (the binary size CI PR and related audit issue) were created within the last 24 hours and are already actively assigned to lead maintainer qhkm for resolution. The project backlog is fully up to date with zero stale critical items.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-06-02
---
## 1. Today's Overview
Over the 24-hour reporting window, the ZeroClaw project saw very high contributor velocity, with 30 total updated issues and 36 updated pull requests across core runtime, channel integrations, security hardening, and documentation workflows. 26 of the 30 open active issues are tagged as P1/P2 priority, with most active bugs already assigned to in-progress resolution tracks. No critical production outages or security disclosures were reported, and the project team remains on track for the upcoming v0.8.0 feature freeze. A full 11 new issues and 9 new PRs were filed on June 1st, demonstrating strong and growing community contribution volume.
## 2. Releases
No new official releases or version tags were published in the reporting window. All ongoing development milestones target the upcoming v0.8.0 public stable release.
## 3. Project Progress
4 PRs and 4 total issues were merged or closed over the last 24 hours:
- The remaining onboarding wizard localization PR [#7012](https://github.com/zeroclaw-labs/zeroclaw/pull/7012) was merged, completing full Fluent i18n coverage for the initial setup flow for all non-English users.
- Duplicate draft RFCs for OTel GenAI-aligned observer event enhancements (#7051, #7052) were cleaned up, unblocking the roadmap for standardized LLM telemetry and attribution tracking.
- Two no-op placeholder test issues (#7058, #7062) were closed out to reduce backlog clutter.
No major breaking changes were merged, and all recently committed updates are fully backwards compatible with existing v0.7.x deployments.
## 4. Community Hot Topics
The most actively discussed items, ranked by comment count, reflect core user priorities for cost reduction, self-hosted functionality, and access control:
1. **Token consumption minimization via skill compilation** [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146): 8 comments, 1 positive reaction. The underlying user need is cutting excessive LLM inference costs: users report that injecting full 400+ line SKILL.md files for trivial requests like weather lookups wastes ~70% of their token budget on redundant instructions, and the community is pushing for compiled compact skill representations to reduce spend.
2. **Ollama Provider tool call failure bug** [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962): 6 comments. The largest growing segment of ZeroClaw users running fully local models on Ollama face fully blocked workflows when tools are invoked, making this one of the highest priority fixes for the self-hosted community.
3. **Discord Bot allowed channels restriction feature** [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378): 6 comments. Discord server admins are requesting parity with existing Matrix/Nextcloud Talk permission controls, to restrict bot responses to explicitly whitelisted channels and prevent unwanted activity across large public servers.
## 5. Bugs & Stability
Bugs are ranked by user-facing severity, with associated fix PR status noted:
1. **S1 (workflow blocked): Agent chat view crashes on browser auto-translation** [#7057](https://github.com/zeroclaw-labs/zeroclaw/issues/7057): A React render error triggered by Chromium auto-translation breaks the entire agent conversation UI. No linked fix PR is available at time of writing.
2. **S1 security gap: Channel-served agents bypass per-agent tool allowlists** [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063): Agents running over Telegram, webhooks, and other public channel endpoints ignore configured tool access restrictions, exposing unexpected high-risk tooling to unvetted users. A full fix PR [#7064](https://github.com/zeroclaw-labs/zeroclaw/pull/7064) was submitted the same day the bug was filed and is pending final review.
3. **S2 schema violation: Default model provider credential fallback in channel orchestrator** [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059): A legacy leftover from pre-V3 configuration logic allows unqualified cross-provider credential fallbacks that violate current schema rules. The matching fix PR [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) is open and ready for merge.
4. **S2 CI flakiness: Parallel nextest tests race on shared user data directory** [#7054](https://github.com/zeroclaw-labs/zeroclaw/issues/7054): Unisolated test environments cause frequent `DatabaseBusy` errors that break CI pipeline reliability. No fix PR has been filed yet.
5. **S2 bad user experience: Telegram channel exposes internal Codex scratchpad transcripts** [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068): Users running Codex as a backend receive raw internal tool logs instead of formatted user-facing responses. No fix PR is available yet.
Long-running P1 bugs including the Gemini 400 history serialization error and Postgres gateway startup panic remain marked as in-progress.
## 6. Feature Requests & Roadmap Signals
Newly filed feature requests with high probability of shipping in upcoming releases:
- The new `zeroclaw eval` agent evaluation harness issue [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) already has a Phase 0 deterministic replay implementation PR [#7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) open, and is on track to ship as a core new CLI tool in the v0.8.0 release.
- The official WASI Component Model WIT plugin interface definition PR [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) is part of the formally approved FND-001 architecture roadmap, and will ship as a foundational component for the upcoming plugin system.
- The memory hygiene extension that archives and purges stale core and daily memory database entries [#7056](https://github.com/zeroclaw-labs/zeroclaw/issues/7056) is a low-risk quality of life improvement that will almost certainly be included in the next v0.7.x patch release.
- Multi-tenant Linq channel support [#7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041) and the new NEAR AI Cloud TEE inference provider support [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) are both nearing the end of the review pipeline and targeted for v0.8.0.
## 7. User Feedback Summary
Key user pain points and feedback collected from the last 24 hours:
- Self-hosted users running frequent simple tool tasks report unacceptably high inference costs from unoptimized full skill prompt injection, which is the top requested cost-reduction feature for power users.
- Local Ollama users are universally dissatisfied with the current broken tool call implementation, which prevents many users from adopting ZeroClaw for fully offline workflows.
- Public channel admins consistently report dissatisfaction with coarse-grained permission controls for Discord, WhatsApp, and Telegram integrations, with multiple requests for more granular whitelisting and anti-spam throttling rules.
- Non-English users note that partial missing localization across chat UI and runtime channel replies creates a broken experience for Chinese, Spanish, and French users. Merged and upcoming i18n work (PR #7012, PR #7039) will resolve nearly all remaining localization gaps in v0.8.0.
- ARM server and Raspberry Pi users repeatedly note that the lack of an official native ARM64 Docker build is a major blocker for edge deployments.
## 8. Backlog Watch
High-impact long-standing items that are overdue for maintainer prioritization:
1. Issue #5146 (Token consumption minimization via skill compilation): Created March 2026, 8 comments, no assigned owner despite being tagged as high risk, it is a high ROI feature that will cut inference costs for all users significantly.
2. PR #5187 (Add ARM64 Docker target): Created April 2026, marked as needs-author-action for over 2 months, and is a critical missing feature for edge and ARM self-hosted deployments.
3. Issue #6391 (Real heartbeat tracking for daemon nodes): Created May 2026, marked as blocked, and blocks the entire multi-node fleet management dashboard roadmap.
4. Issue #4853 (Install skills from .well-known URI): Created March 2026, tagged as help wanted, and blocks cross-project standardized skill ecosystem integration with Cloudflare, Vercel, and other agentskills initiative partners.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*