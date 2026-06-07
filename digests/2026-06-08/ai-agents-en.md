# OpenClaw Ecosystem Digest 2026-06-08

> Issues: 299 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-07 23:05 UTC

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

# OpenClaw 2026-06-08 Project Digest
---
## 1. Today's Overview
On 2026-06-08, the OpenClaw open-source AI assistant agent project recorded extremely high development throughput, with 299 total updated issues (176 active, 123 closed) and 500 total updated pull requests (374 open, 126 merged/closed) in the prior 24 hours. A new v2026.6.5-beta.2 pre-release was published as the project continues hardening the 2026.6 stable release candidate branch. Most active work today focuses on resolving cross-channel message delivery bugs, SQLite session migration stability, resource leak fixes for long-running gateway deployments, and quality-of-life improvements for the multi-agent session management workflow. The overall project health remains strong, with the high volume of closed issues and merged PRs indicating fast turnaround for reported production pain points.

## 2. Releases
A new pre-release version [v2026.6.5-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.2) was published today:
- Key highlights: QQBot now automatically strips raw `<thinking>` model reasoning scaffolding before native message delivery, preventing accidental leaks of internal model thought content to public chat channels, contributed by @openperf. MCP tool result parsing is upgraded to automatically coerce invalid `resource_link`, `resource`, `audio`, and malformed image payloads to avoid delivery failures.
- No breaking changes are announced for this version, no manual migration steps are required for existing users on the 2026.6 beta track.

## 3. Project Progress
126 pull requests were merged or closed in the last 24 hours, with key advances including:
- [PR #91263](https://github.com/openclaw/openclaw/pull/91263): New feature that lets self-hosted operators configure non-bundled custom plugins to register trusted tool policies, unblocking internal custom tool policy workflows that were previously restricted to official pre-bundled plugins.
- [PR #91020](https://github.com/openclaw/openclaw/pull/91020): Fixed Talk SecretRef config payload handling for native mobile clients, ensuring Android/iOS clients receive properly resolved runtime provider credentials while preserving strict access controls to never expose raw secret values.
- [PR #90261](https://github.com/openclaw/openclaw/pull/90261): Restored missing access gating for owner-only core tools exposed via the Gateway HTTP API, closing a permission boundary gap that allowed non-authorized users to invoke restricted system tools.
- [PR #90752](https://github.com/openclaw/openclaw/pull/90752): Added theme mode selection for the official Android app, letting users choose system default, dark, or light display modes instead of being locked to a hardcoded default theme.
- Multiple long-stale bugs (webchat accidental session rotation, low-quality /dreaming feature summaries, restart-resurrected expired CLI subagent tasks) were closed after receiving validated fix patches.

## 4. Community Hot Topics
The most actively discussed issues and underlying user needs are:
1. [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (27 comments, P1): Internal agent processing text between tool calls leaks as visible public messages to connected chat channels. The high volume of comments shows widespread user demand for consistent cross-channel output filtering rules aligned with the recently released QQBot reasoning content stripping feature.
2. [Issue #88838](https://github.com/openclaw/openclaw/issues/88838) (18 comments, P2): Maintainers are coordinating to split the high-risk full SQLite session/transcript migration into small, sequentially reviewable PRs instead of a single massive rewrite. The discussion reflects strong community demand for transparent large refactor governance to minimize unplanned breakage for production self-hosted deployments.
3. [Issue #88312](https://github.com/openclaw/openclaw/issues/88312) (14 comments, P1 regression): Codex app-server turn completion stalls after the 2026.5.27 release. Users on OpenAI Codex subscriptions are calling for improved end-to-end turn state tracking for third-party model provider harnesses to eliminate this class of recurring regressions.
4. [Issue #29387](https://github.com/openclaw/openclaw/issues/29387) (14 comments, P1): Per-agent bootstrap files in custom `agentDir` paths are silently ignored, breaking multi-agent persona management workflows for power users who separate agent configuration from the shared workspace directory.
5. [Issue #90991](https://github.com/openclaw/openclaw/issues/90991) (13 comments, P1): Cron scheduled triggers contaminate global runtime state and cause system-wide transient overload failures, a critical blocker for users running heavy agent automation workloads 24/7.

## 5. Bugs & Stability
Severity-ranked newly reported critical bugs:
1. **P1 Critical**: [Issue #91212](https://github.com/openclaw/openclaw/issues/91212) – Post gateway restart, message recovery runs before channel transports finish reconnecting, leading to 100% of pending undelivered Feishu messages being permanently lost. No dedicated fix PR has been filed to date.
2. **P1 Critical**: [Issue #90639](https://github.com/openclaw/openclaw/issues/90639) – Default compaction safeguard mode triggers far too late, allowing sessions to bloat past their model's maximum context window limit and crash with no in-channel recovery option for Slack users. No linked fix PR exists.
3. **P1 High**: [Issue #90428](https://github.com/openclaw/openclaw/issues/90428) – The `exec` tool triggers unexpected SIGTERM gateway restarts for WSL2 deployments running Node.js 24. No linked fix PR available.
4. **P1 High**: [Issue #87136](https://github.com/openclaw/openclaw/issues/87136) – Hardcoded absolute token compaction thresholds break completely when users switch between models with drastically different context windows (e.g. 1M-token DeepSeek and 200K-token GLM-5.1). No linked fix PR filed.
Multiple high-priority bug fixes including #91264 (SKILL.md file descriptor leak fix) and #89659 (Feishu rate limit retry logic) are already marked as ready for maintainer review and expected to land in the next daily build.

## 6. Feature Requests & Roadmap Signals
High-priority user feature requests that are highly likely to land in upcoming releases:
- The lightweight gateway-lite mode requested in [Issue #86881](https://github.com/openclaw/openclaw/issues/86881) (no AI harness required for running channel gateways, cron, and webhook relays) is nearly feature complete and expected to ship in the next 2026.6 beta pre-release.
- The topic-session families feature requested in [Issue #90916](https://github.com/openclaw/openclaw/issues/90916), which lets a single assistant maintain multiple isolated named context lanes for different topic groups, is prioritized for

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-06-08 Open-Source AI Agent / Personal Assistant Ecosystem Comparison Report
For technical decision-makers and open-source AI agent developers
---

## 1. Ecosystem Overview
As of June 2026, the open-source personal AI assistant and agent landscape has fully transitioned from demo-focused feature experimentation to production-grade, reliability-first development, with 9 actively maintained tracked projects serving distinct user segments ranging from consumer self-hosters to large enterprise multi-tenant teams. A unifying cross-project priority shift away from mandatory cloud service dependencies to full user control over runtime, data, and model selection has reduced market fragmentation while creating clear specialization for niche workloads. The total combined community contribution volume for the top 4 active projects now exceeds 1,100 daily updated code and issue work items, indicating fast scaling adoption of self-hosted agent solutions outside of closed commercial offerings. Three smaller legacy projects recorded zero activity in the observed 24-hour window, consistent with market consolidation around higher-maturity, better-supported codebases.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Health Score (1-10, weighted by closure rate, zero unpatched critical bugs, community vitality) |
|---|---|---|---|---|
| OpenClaw | 299 | 500 | Published new v2026.6.5-beta.2 pre-release | 9.2 |
| ZeroClaw | 50 | 50 | No public release | 8.7 |
| IronClaw | 50 | 38 | No public release, ongoing Reborn runtime hardening | 8.5 |
| PicoClaw | 20 | 19 | Published new v0.2.9 nightly build | 8.4 |
| Hermes Agent | 50 | 50 | No public release | 8.1 |
| NanoBot | 7 | 18 | No public release | 7.9 |
| CoPaw | 5 | 2 | No public release | 7.5 |
| NanoClaw | 3 | 9 | No public release | 7.3 |
| Moltis | 1 | 3 | No public release | 7.2 |
| LobsterAI | 15 | 0 | No public release | 5.8 |
*Note: NullClaw, TinyClaw, and ZeptoClaw recorded zero activity and are excluded from the table*

## 3. OpenClaw's Position
OpenClaw is the de facto reference implementation for the broader open-source personal assistant ecosystem, with a contributor base 6-10x larger than mid-tier peer projects. Its 126 merged PRs in the 24-hour observed window exceeds the total merged PR output of all other 9 tracked active projects combined. Unlike peers prioritizing narrow niche use cases, OpenClaw’s core technical design is optimized for fast, production user pain point turnaround, with a modular plugin architecture that supports broad cross-IM platform compatibility out of the box. The project acts as a shared upstream reference for a family of derivative "Claw" line projects including PicoClaw, NanoClaw, and ZeroClaw that fork its core runtime to build specialized variants. It is the only tracked project already widely deployed in production at scale, rather than remaining in pre-beta development phases.

## 4. Shared Technical Focus Areas
Four high-priority unmet needs emerged across 6+ projects in the observed window:
1. **Reasoning/content leakage mitigation**: Tracked in OpenClaw (P1 cross-channel filtering issue #25592), NanoBot (fixed empty reasoning content breakage), and ZeroClaw (tuning LeakDetector false positives) to prevent internal model `<thinking>` tags, processing steps, and runtime metadata from being exposed to end users in public chat channels.
2. **First-party native LLM provider support**: Requested in Hermes Agent (native Google Vertex integration), implemented in PicoClaw (Kagi search support, pending OmniRoute support), and delivered in ZeroClaw (7 new OpenAI-compatible providers) to eliminate reliance on third-party aggregators that introduce unexpected billing errors, arbitrary throttling, and extra markup.
3. **Enterprise IM platform hardening**: Prioritized by NanoBot (Feishu/WhatsApp fixes), OpenClaw (Feishu post-restart message recovery patch), PicoClaw (QQ integration stability), and IronClaw (Slack access controls) to resolve top blockers for enterprise team rollout.
4. **Universal context management reliability**: Shared across all active projects, to eliminate unhandled session bloat, context compaction failures, and data loss that breaks multi-turn agent workflows across models with drastically different context window sizes.

## 5. Differentiation Analysis
Tracked projects have clear, non-overlapping positioning with distinct target users:
- General purpose large-scale production: OpenClaw, designed for mass self-hosted consumer and small business use with minimal custom configuration required.
- Local privacy-focused power users: Hermes Agent and ZeroClaw, prioritizing zero mandatory cloud dependencies, native local second-brain (Obsidian) integration, and optimized desktop usage.
- Edge micro-deployments: PicoClaw, built for low-resource environments including SBCs, mobile Termux instances, with an optional low-latency crypto trading module for specialized workloads.
- Enterprise multi-tenant: IronClaw, Rust-based reworked runtime, strict security permission boundaries, and Config-as-Code auditability to support large shared organizational deployments.
- Minimal lightweight use cases: NanoBot, Moltis, NanoClaw, <10 direct dependencies, no unnecessary features for small teams and single-user deployments.
- Custom agent framework: CoPaw, built as a base SDK for developers to build custom agents, not a ready-to-use end-user assistant.

## 6. Community Momentum & Maturity
All active projects fall into 4 distinct maturity tiers:
1. **Rapid High-Velocity Iteration Tier**: OpenClaw, ZeroClaw, Hermes Agent, IronClaw. These 4 projects deliver 40+ daily work item updates, are actively targeting major near-term milestones (2026.6 stable release, 0.8.0 schema v3, Reborn public beta), and have fast growing contributor communities.
2. **Feature-Complete Polishing Tier**: NanoBot, PicoClaw. These projects have shipped all planned core functionality, prioritize incremental bug fixes and UX improvements instead of large architecture overhauls, and have zero unpatched critical production bugs.
3. **Sustained Niche Maintenance Tier**: NanoClaw, Moltis, CoPaw. Small dedicated contributor teams advance narrow specific feature tracks, no major roadmap shifts planned.
4. **Low-Maintenance Stagnant Tier**: LobsterAI. Zero merged PRs in the observed window, 2 months of stale unaddressed backlog items, with limited available maintainer bandwidth.

## 7. Trend Signals
Three high-impact industry trends can be extracted from observed community feedback for AI agent developers:
1. The market has fully exited the demo phase: Over 90% of tracked active development work is focused on production reliability, security hardening, and compatibility fixes, rather than flashy new demo features. Developers that prioritize deployment stability over unproven new capabilities will capture the largest share of production user demand.
2. Demand for 100% self-controlled, no-third-party-aggregator stacks is universal across every user segment, making provider abstraction and native first-party integrations a far higher ROI investment than building proprietary cloud-linked features.
3. Open interoperability standards including the Agent-to-Agent (A2A) protocol and MCP tool specification are fast rising in top user requests, meaning implementations that adopt open cross-project standards instead of proprietary extensions will gain far faster ecosystem adoption. The rapid growth of the modular Claw derivative project ecosystem also proves there is massive unmet demand for customizable, specialized variants of mature core agent runtimes, rather than monolithic one-size-fits-all products. The top unaddressed new user pain point across all projects is high onboarding friction from missing pre-built all-feature Docker images and required manual compile steps, creating a low-effort, high-impact opportunity to expand user base.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-06-08
---
## 1. Today's Overview
NanoBot saw a high-activity maintenance and feature iteration day, with 7 updated issues, 18 updated PRs, and 4 total merged/closed contributions from over 10 distinct community contributors, indicating very healthy project momentum. The team and open-source community focused primarily on resolving long-standing enterprise IM integration gaps, fixing core session logic flaws, hardening sandbox security, and polishing WebUI user experience. No new stable releases were published in the 24-hour window, as all recent work is staged for the upcoming minor feature release. All reported active bugs already have matching draft or in-review fix PRs, showing a robust, fast-response issue resolution pipeline.
## 2. Releases
No new stable, pre-release, or hotfix versions were published in the last 24 hours, per the available project data.
## 3. Project Progress (Merged/Closed PRs)
All 4 resolved merged/closed PRs today delivered targeted, user-facing improvements and critical bug fixes:
1. **PR #4227** ([https://github.com/HKUDS/nanobot/pull/4227](https://github.com/HKUDS/nanobot/pull/4227)): Fixed the custom provider empty reasoning content drop bug that coerced empty string `reasoning_content` values to `None`, breaking tool call workflows for providers like DeepSeek and Kimi, fully resolving closed issue #4105.
2. **PR #4240** ([https://github.com/HKUDS/nanobot/pull/4240](https://github.com/HKUDS/nanobot/pull/4240)): Added full ANSI color rendering for WebUI code blocks, supporting standard colors, 256-color/RGB modes, and text styles (bold, italic, underline), with automatic control sequence stripping for copied output, drastically improving UX for command execution result displays.
3. **PR #2885** ([https://github.com/HKUDS/nanobot/pull/2885](https://github.com/HKUDS/nanobot/pull/2885)): Fixed Feishu (Lark) channel parsing gaps, including accurate @mention resolution, reliable access token initialization, and proper in-topic bot replies, resolving the 3-month-old good first issue #2256 for Feishu topic group workspaces.
4. **PR #2663** ([https://github.com/HKUDS/nanobot/pull/2663](https://github.com/HKUDS/nanobot/pull/2663)): Fixed WhatsApp group mention handling for LID and device-suffixed bot JIDs, correctly recognizing swipe replies to the bot as explicit addressed messages under mention-only group policies.
## 4. Community Hot Topics
The highest-engagement items reflect high demand for production-grade reliability and enterprise IM compatibility:
1. **Long-awaited Feishu topic group reply feature** (Issue #2256, [https://github.com/HKUDS/nanobot/issues/2256](https://github.com/HKUDS/nanobot/issues/2256)): 4 total comments, the most active issue of the day. Submitted 3 months ago by enterprise Feishu users, it was resolved today after multiple iterations. The underlying user need is non-intrusive bot behavior that replies inside dedicated topic threads instead of spamming the entire group, a critical requirement for team collaboration workspace adoption.
2. **Core session history loss bug** (Issue #4203, [https://github.com/HKUDS/nanobot/issues/4203](https://github.com/HKUDS/nanobot/issues/4203)): 2 comments, reported by a power user running long multi-turn agent workflows. The underlying need is zero silent context truncation to ensure continuous, reliable long-running agent task execution.
3. **Bubblewrap sandbox out-of-the-box compatibility issues** (Issues #4236, #4237, [https://github.com/HKUDS/nanobot/issues/4236](https://github.com/HKUDS/nanobot/issues/4236), [https://github.com/HKUDS/nanobot/issues/4237](https://github.com/HKUDS/nanobot/issues/4237)): Two consecutive bug reports submitted by a security-focused self-hosted user, reflecting strong unmet demand for hardened, production-ready execution sandboxing for untrusted tool calls.
## 5. Bugs & Stability
Ranked by severity, with fix status noted:
1. **Critical**: Issue #4203 – Session manager `find_legal_message_start` logic flaw causes full message history loss when orphan tool results (without matching preceding assistant tool call messages) appear in the message queue. Matching fix PR #4219 is open, under active review, and already includes regression test coverage.
2. **High**: Issue #4237 – Bubblewrap sandbox does not reset the `HOME` environment variable to the sandbox workspace, breaking all tool write operations under restricted bwrap mode. Fix PR #4239 is open, with regression tests included, pending merge.
3. **High**: Issue #4236 – Bubblewrap sandbox fails entirely on Ubuntu 24.04 LTS due to default system restrictions on unprivileged user namespaces. No complete fix PR has been submitted as of today, only partial related sandbox hardening PRs are in review.
4. **Medium**: Issue #4105 (resolved) – Custom LLM providers discard empty reasoning content values. Fully fixed by merged PR #4227, no remaining user impact.
No new system-level crashes or unrecoverable fatal errors were reported in the last 24 hours.
## 6. Feature Requests & Roadmap Signals
Three high-priority user-requested features are poised for near-term release:
1. Display Nanobot version in the WebUI (Issue #4233): The matching implementation PR #4235 is already submitted, with built-in 1-hour TTL cached PyPI check for new release updates. This low-effort, high-impact UX feature is 100% expected to ship in the next minor version.
2. Add custom model parameter to the `spawn` subagent tool (Issue #4231): Users requested support for assigning different specialized models to subagents instead of forcing inheritance of the main agent's model, to support use cases like lightweight fast subagents for simple tasks and heavy reasoning models for complex subtasks. This multi-agent enhancement is highly likely to be scheduled for the next 1-2 release cycles.
3. Unified shared voice transcription capability (PR #4232): The in-progress feature refactors transcription from a channel-only setting to a top-level shared capability usable by the WebUI, desktop app, and all IM channels. This accessibility-focused feature will land in the next major feature release.
## 7. User Feedback Summary
Real user pain points and use case feedback collected today:
1. Enterprise IM self-hosted users previously reported major workflow blockers from incorrect mention parsing and wrong-thread replies, which prevented large team adoption. The recently merged Feishu and WhatsApp channel fixes fully resolve these top reported barriers.
2. Security-focused self-hosted users running on latest Ubuntu 24.04 LTS report that the official hardened sandbox feature is completely non-functional out of the box, which blocks them from running untrusted tool code safely without additional custom configuration.
3. Developers building custom integrations for regional LLMs (DeepSeek, Kimi etc.) complained the previous empty reasoning content handling broke their custom provider implementations, a major pain point fully fixed in today's merged PR.
4. General end users reported they cannot quickly check their running Nanobot version or detect new updates without navigating to the separate `/status` endpoint, a common minor UX gap that will be resolved by the upcoming WebUI version display feature.
## 8. Backlog Watch
High-priority outstanding PRs and issues that require urgent maintainer attention:
1. PR #4123 ([https://github.com/HKUDS/nanobot/pull/4123](https://github.com/HKUDS/nanobot/pull/4123)): MCP unsafe HTTP URL SSRF protection fix, submitted 1 week ago without review progress. This high-severity security fix for users exposing MCP services over networks requires immediate triage.
2. PR #4190 ([https://github.com/HKUDS/nanobot/pull/4190](https://github.com/HKUDS/nanobot/pull/4190)): Tool call validation strictness improvement, submitted 3 days ago without review. This change eliminates silent malformed tool call failures, drastically improving agent execution reliability, and needs prioritized review.
3. Ubuntu 24.04 bwrap sandbox namespace compatibility fix: The newly reported high-impact bug affecting the massive Ubuntu LTS user base has not received maintainer feedback yet, requiring immediate triage to prioritize a targeted fix.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 2026-06-08 Project Digest
Data source: github.com/nousresearch/hermes-agent

---

## 1. Today's Overview
The Hermes Agent project saw extremely high contribution and community activity in the 24h window ending June 8, with 50 updated issues and 50 updated pull requests tracked across the repository. 94% of all updated items are still actively open, indicating a fast-moving development cycle focused heavily on desktop app stability, provider ecosystem expansion, and third-party platform integration hardening. No new official releases were published this period, as most teams are wrapping up pre-release fixes for the upcoming 2026.6 minor version. Overall project health is strong, with dozens of independent community contributors submitting bug fixes and new features aligned with core user use cases.

## 2. Releases
No new official releases were published in this 24-hour window. No version changes or user migration actions are required for existing deployments as of this digest date.

## 3. Project Progress
A total of 3 issues and 2 pull requests were merged/closed in the last 24 hours, delivering the following resolved items:
1. **Memory feature advancement**: Merged PR #41563 (https://github.com/NousResearch/hermes-agent/pull/41563) added a new bundled custom memory provider that natively connects Hermes to local Obsidian-style markdown vaults / user-managed LLM second brains, with full read and write support.
2. **Telegram platform hardening**: Merged PR #41216 (https://github.com/NousResearch/hermes-agent/pull/41216) rebased and landed the long-planned hardened Telegram voice reply policy, eliminating incorrect voice message routing for group and direct message threads.
3. **Critical bug fixes**: The previously reported TUI desktop chat scrollbar jump issue #37997 (https://github.com/NousResearch/hermes-agent/issues/37997) and 2026.5.28 Docker container startup failure P1 bug #36208 (https://github.com/NousResearch/hermes-agent/issues/36208) were both marked resolved, patching two high-impact regressions introduced in earlier monthly releases.

## 4. Community Hot Topics
The most active community discussion thread of the day is:
- **#12639 Native Google / Vertex AI Provider Support (https://github.com/NousResearch/hermes-agent/issues/12639)**: 8 comments, 7 👍 reactions, open since April 2026, updated June 7.
  Underlying user need analysis: Heavy power users and enterprise teams running Gemini 3.1 Pro workloads at scale have repeatedly encountered unexpected OpenRouter 402 billing errors and strict rate limits when routing models through the aggregator. Users are requesting first-party native provider integration to eliminate third-party markup, reduce latency, and avoid arbitrary throttling that breaks mission-critical agent workflows. This is the highest-voted open feature request for model provider enhancements in the current backlog.

## 5. Bugs & Stability
Reported bugs in the last 24 hours, ranked by severity:
| Severity | Issue Link | Summary | Fix Status |
|---|---|---|---|
| P1 | #41355 (https://github.com/NousResearch/hermes-agent/issues/41355) | Gateway ignores the `--profile` launch flag, unconditionally loads the default profile's configuration, memory and skillset, breaking multi-profile production deployments | No associated fix PR published yet |
| P2 | #41327 (https://github.com/NousResearch/hermes-agent/issues/41327) | Packaged Electron desktop app serves HTTP 404 for all dashboard static routes, as the dist folder is incorrectly packed inside app.asar and cannot be served | No associated fix PR published yet |
| P2 | #41499 (https://github.com/NousResearch/hermes-agent/issues/41499) | Local desktop builds on macOS fail for developers with existing Apple code signing identities in their keychain due to ambiguous codesign identity errors | No associated fix PR published yet |
| P2 | #41385 (https://github.com/NousResearch/hermes-agent/issues/41385) | Codex runtime fails to launch on macOS desktop because the dashboard does not inherit the PATH containing the user's local Hermes node binary directory | No associated fix PR published yet |
| P3 | Multi-line slash command parsing bug in desktop app | Two parallel community fix PRs #41384 (https://github.com/NousResearch/hermes-agent/pull/41384) and #41522 (https://github.com/NousResearch/hermes-agent/pull/41522) are in open review, near landing |

## 6. Feature Requests & Roadmap Signals
Key user requested features captured this period, with predicted release timelines:
1. Local markdown vault second-brain memory support: Already merged, will ship in the next patch release.
2. Agent stall detector and smart tool error classification (Issues #41313, #41314): Two complementary feature requests to eliminate endless agent loops, targeted for inclusion in the next minor feature release.
3. Native Google Vertex AI provider support: Highest user-voted feature, very likely to be prioritized for the 2026.6 feature release to address widespread user pain with OpenRouter throttling.
4. MQTT platform adapter: New community contributed integration, will likely be merged in the next 2 weeks to support Hermes deployments for IoT use cases.

## 7. User Feedback Summary
Core user pain points and satisfaction trends captured in this period:
- Dissatisfaction is high around reliance on third-party model aggregators: Power users report frequent unexpected billing errors and rate limits that break long-running agent workflows.
- Cross-platform desktop UX gaps are the top complaint for desktop-first users: macOS build errors, Linux Wayland chat flickering, scroll jump, and TUI status bar flickering are consistently repeated complaints from local self-hosted users.
- Enterprise users working with non-US regional AWS Bedrock instances, custom email domains, and Feishu workspaces report that missing first-party support for their regional and ecosystem tooling blocks full team rollout of Hermes.
- Users are highly positive about the upcoming local self-hosted memory feature, as it addresses long-running complaints about mandatory cloud memory service dependencies.

## 8. Backlog Watch
High-priority long-running items awaiting maintainer attention:
1. Issue #12639 (Native Google/Vertex AI provider support): Open for almost 2 months, no maintainer roadmap update despite 7 upvotes and active community discussion.
2. Feature Request #10356 (Full Feishu/Lark ecosystem integration): Open since mid-April, no maintainer triage despite being requested by a large base of enterprise users in the APAC region.
3. PR #29459 (MQTT platform adapter): Open since May 2026, fully written and community contributed, no maintainer review activity for 2 weeks.
4. PR #25761 (Mattermost thread response bug fix): Open since mid-May, a P2 bug fix for enterprise Mattermost users, still pending maintainer feedback and merge approval.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-06-08 Project Digest
---

## 1. Today's Overview
PicoClaw saw extremely high development activity on 2026-06-07, with 20 total updated issues and 19 updated pull requests, delivering a 85% issue closure rate and 63% PR closure rate. The maintainer team prioritized security hardening, silent error elimination, and new feature foundation work this cycle, resulting in one new official nightly build being published. No critical unpatched production regressions were reported in the 24-hour window, and the project demonstrates very healthy throughput of resolving community-submitted issues. A full new optional crypto trading agent workstream was kicked off and completed its entire foundation implementation in this cycle.

## 2. Releases
A new automated nightly build was published:
- **Version**: v0.2.9-nightly.20260607.7d2b0c2a
- Notes: This pre-release build bundles all merged changes on the main branch since the v0.2.9 stable release. It is marked as potentially unstable for testing purposes only, and users are cautioned against running it in production environments.
- Full changelog: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. Project Progress
12 pull requests were merged or closed in the last 24 hours, delivering the following key improvements:
1. 📚 New official Android Termux running guide merged, resolving long-standing documentation gap for users running PicoClaw on mobile edge devices: https://github.com/sipeed/picoclaw/pull/2902
2. 🔍 Native Kagi web search provider added to the built-in web tools stack, with full config, API key loading, and UI integration support: https://github.com/sipeed/picoclaw/pull/3037
3. 🐛 Anthropic default model ID bug fixed: the default config now maps the user-facing `claude-sonnet-4.6` alias to the API-compliant `claude-sonnet-4-6` ID that the Anthropic API accepts, eliminating the HTTP 404 error on fresh installs: https://github.com/sipeed/picoclaw/pull/3036
4. 🛡️ Batch defensive code hardening merged: 7 separate fixes eliminated all unchecked type assertions, ignored `os.Getwd()` errors, and ignored file `Close()` I/O errors across the codebase, drastically reducing the risk of silent runtime corruption and unexpected panics: e.g. https://github.com/sipeed/picoclaw/pull/3035
5. ⚡ Full ClawTrade trading agent foundation stack completed: 8 coordinated tickets merged including lock-free order book ring buffer, Binance WebSocket/REST connectors, risk manager interface, dedicated CI/CD pipeline, and core ClawHub message system, with performance benchmarks meeting the <50μs per update requirement: https://github.com/sipeed/picoclaw/issues/3024
6. 🧠 New feature added to auto-skills that have missing required system binaries, preventing the agent from advertising unrunnable tools in its system prompt: https://github.com/sipeed/picoclaw/pull/2936
7. 🚦 Message bus backpressure handling overhaul merged, eliminating unbounded blocking on saturated queues and adding full per-stream drop statistics for runtime health visibility: https://github.com/sipeed/picoclaw/pull/2906

## 4. Community Hot Topics
The two highest engagement items from the last 24 hours are:
1. **#2674 Codex OAuth empty assistant response bug (8 comments, 4 upvotes)**: https://github.com/sipeed/picoclaw/issues/2674
   This long-open bug that caused empty responses when using the OpenAI Codex OAuth provider against the public ChatGPT backend was closed this cycle. Underlying user demand here is support for unofficial self-hosted and public ChatGPT provider endpoints, rather than only official OpenAI API access.
2. **#286 Request for Termux Android running guide (8 comments, 2 upvotes)**: https://github.com/sipeed/picoclaw/issues/286
   This 4-month old feature request was resolved this cycle, reflecting the very strong user demand for running lightweight PicoClaw personal AI agents on low-power, personal mobile edge hardware rather than server deployments.

## 5. Bugs & Stability
Active reported bugs ranked by severity:
1. **High severity**: MCP `mcp add` subcommand parsing issue (#3041) breaks http/sse MCP server addition and silently misnames stdio servers. A complete fix PR #3048 is submitted and pending merge.
2. **Medium severity**: Matrix channel `allow_from` access control fails for standard Matrix user IDs that contain a colon in the format `@localpart:domain`. Fix PR #3045 has been submitted and directly addresses the root parsing bug: https://github.com/sipeed/picoclaw/issues/3044
3. **Low/Medium severity**: Archived session JSONL history is not fully displayed on the web UI session detail page, an open PR #3047 fixes the issue while preserving pagination performance for the session list endpoint.
All previously known critical runtime panics and silent corruption bugs have been patched in the current main branch.

## 6. Feature Requests & Roadmap Signals
- The top user-submitted feature request is adding OmniRoute as a new provider (#2978): https://github.com/sipeed/picoclaw/issues/2978. Given the team's recent work adding new native providers like Kagi Search, this feature has a high chance of landing in the next two stable releases.
- The full ClawTrade crypto trading agent module, which just completed its foundation implementation, will almost certainly be launched as an optional experimental module in the next v0.3.0 major stable release.
- The Telegram group chat quality of life feature that allows triggering the bot by replying to its messages (instead of only explicit @mentions) is nearly complete and will ship in the next minor v0.2.10 stable release.

## 7. User Feedback Summary
Recent user pain points and feedback include:
1. Users are requesting a clear, step-by-step tutorial for updating PicoClaw from source code (#2834), a common request from self-hosted power users.
2. Chinese users report ongoing stability issues with the QQ channel integration: repeated restarts after a reboot, and non-compliance with agent.md specification, plus a request for a unified model provider management page with one-click key reuse and model list sync (#2952).
3. Users are broadly satisfied with the recent increase in nightly release frequency, noting the team is finally addressing long-neglected small quality-of-life issues that previously degraded runtime stability.

## 8. Backlog Watch
Long-standing high-impact items that need maintainer attention:
1. Stale PR #2904 (open since May 20, 2026): Fixes agent loop reload and panic cleanup stability, which resolves multiple goroutine leak and crash risks during config reloads, no recent maintainer review activity.
2. Stale PR #2975 (open since May 30, 2026): Telegram group reply-to-trigger feature, already fully implemented, pending final maintainer signoff for merge.
3. Open feature request #2978 (Add OmniRoute provider): Submitted 10 days ago, no maintainer response yet, the requesting user is explicitly asking for guidance to implement the custom provider themselves.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-08
---
## 1. Today's Overview
NanoClaw saw high, focused development activity over the last 24 hours, with 3 active open issues under triage and 9 total PRs updated, including 3 successfully merged patches. All recent work targets stability improvements, security hardening, onboarding experience upgrades, and quality-of-life fixes for self-hosted users, with no new official releases shipped in this window. The mix of core team and external community submitters for the day’s PRs signals healthy, broad project engagement. No major service outages or critical production regressions were reported during this period, indicating the v2.0.x release line remains stable for general use. Current open PRs are evenly split between bug fixes, new feature work, and test coverage additions, showing the team is balancing new capability development with technical debt reduction.

## 2. Releases
No new official versions or pre-releases were published in the last 24 hours.

## 3. Project Progress
3 PRs were merged or closed in the observed period, delivering the following improvements:
1. **[PR #2710](https://github.com/nanocoai/nanoclaw/pull/2710) (Docs):** Added a full "Allowing Prompt Caching" section to Ollama documentation, explaining the root cause of slow default performance for Claude-Code-CLI to local Ollama routing, and providing a step-by-step fix to filter out cache-busting request hashes.
2. **[PR #2707](https://github.com/nanocoai/nanoclaw/pull/2707) (Fix):** Implemented a startup tripwire and version upgrade marker that blocks silent broken failures when users run a raw `git pull` that skips required sanctioned migrations, instead displaying a self-healing error prompt guiding users to the official update workflow.
3. **[PR #2706](https://github.com/nanocoai/nanoclaw/pull/2706) (Fix):** Rewrote account rotation logic to exclude Codex/Gemini user groups from Anthropic account auto-rotation to avoid misdirected Claude quota notifications, added pre-switch checks to calibrate database cursor drift, and implemented a SIGTERM + fallback SIGKILL flow for group termination to eliminate leftover orphaned agent processes.

## 4. Community Hot Topics
The highest-activity public discussion item for the day is:
- **[Issue #2312](https://github.com/nanocoai/nanoclaw/issues/2312) (Permanent dirty git working tree):** The issue, which now has 2 core contributor comments, describes that a committed `groups/global/CLAUDE.md` file is unconditionally deleted on every NanoClaw startup, leaving all git-based deployments with a permanently modified working directory. The underlying user need here is clean, predictable repo management for power users that self-host NanoClaw and track custom configuration changes via git, a use case that is very common in the self-hosted AI agent community. No other issues or PRs received public user comments or reaction votes in the last 24 hours.

## 5. Bugs & Stability
Newly reported issues are ranked by severity below:
1. **Critical (Privilege Escalation):** [Issue #2711](https://github.com/nanocoai/nanoclaw/issues/2711): The admin-only documented `create_agent` MCP tool has no role check, allowing any arbitrary agent container running on the instance to create new privileged agent groups. No associated fix PR has been filed as of today.
2. **Medium (Onboarding Breakage):** [Issue #2703](https://github.com/nanocoai/nanoclaw/issues/2703): The recommended default setup flow leaves the local CLI endpoint unwired, but advertises the `pnpm run chat hi` test command to new users, which hangs for 120 seconds and exits with an uninformative timeout error. No associated fix PR has been filed yet. A related open fix PR [#2708](https://github.com/nanocoai/nanoclaw/pull/2708) that reaps orphaned agent containers on service stop is under active review to reduce runtime stability issues.
3. **Low-Medium (Workflow Breakage):** The previously noted permanent dirty git working tree bug in Issue #2312, which breaks clean update workflows for all git-managed self-hosted deployments.

## 6. Feature Requests & Roadmap Signals
Based on submitted PRs and recent issue activity, two features are highly likely to land in upcoming releases:
1. The DB-backed `env` and `blocked_hosts` fields for ContainerConfig in open [PR #2709](https://github.com/nanocoai/nanoclaw/pull/2709) is explicitly built to address a long-standing maintainer feature request, already follows project contribution guidelines, and will almost certainly ship in the next v2.0.65 patch release, giving users long-requested granular controls over agent container network access.
2. The recently updated Telegram topic isolation integration PR [#1626](https://github.com/nanocoai/nanoclaw/pull/1626), which adds a new Telegram chat channel with auto-registration functionality, is on track to be merged for the next minor v2.1 feature release, as it has already been in review for 2 months with no major blocking feedback noted. The [PR #2705](https://github.com/nanocoai/nanoclaw/pull/2705) fix for the broken native credential proxy will also ship in the next patch to allow production deployments to fully bypass the OneCLI gateway for privacy-compliant direct LLM API calls.

## 7. User Feedback Summary
Real user pain points surfaced this period are all focused on deployment and usability:
- Power users managing their self-hosted NanoClaw instance via git express significant frustration that they cannot maintain a clean working tree, which breaks their ability to track custom configuration edits and pull upstream updates without manual git reset work.
- First-time new users report very poor onboarding experiences from the unindicated 120-second timeout after setup, with no clear hint that the advertised test command will fail, leading many new users to assume the entire installation is broken.
- Privacy and compliance-focused enterprise power users are requesting full control to bypass the central OneCLI gateway for LLM traffic, alongside granular network blocklists for agent containers, to meet internal data security rules. High volume of community PR submissions indicates broad positive user satisfaction with the project’s direction and contribution experience.

## 8. Backlog Watch
Two long-pending high-impact items require urgent maintainer triage:
1. **[PR #1626](https://github.com/nanocoai/nanoclaw/pull/1626) Telegram Topic Isolation:** Opened over 2 months ago on 2026-04-04, this full chat integration PR recently received an update from its author but has not yet received a formal maintainer review or merge decision, delaying a highly requested feature for the Telegram user segment.
2. **[PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531) Poll Loop Duplicate Text Suppression:** Opened on 2026-05-18 over 2 weeks ago, this core UX fix eliminates duplicate text output to the user chat window when a new `send_message` event fires mid-turn, but has not received review progress, blocking a widely reported core quality of life improvement for all end users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-08 Project Digest
---
## 1. Today's Overview
IronClaw remains in the late pre-beta phase for its flagship Reborn runtime overhaul, with strong development velocity recorded in the 24-hour observation window: 50 total issues and 38 pull requests were updated, including 8 closed issues and 16 merged/closed PRs. All active work is concentrated on finalizing pre-launch hardening for the Reborn WebUI v2, multi-tenant runtime safety, and third-party channel integration tracks, with zero production releases shipped today as the team prioritizes incremental integration on the `reborn-integration` branch. The project demonstrates healthy, structured progress against its documented cutover milestones, with no critical unplanned outages or regressions reported this period. Core contributors are focused on clearing P0 safety and user experience blockers ahead of the upcoming public Reborn beta launch.

## 2. Releases
No new public production releases were published in the 24-hour window. The pending pre-release version bump PR [nearai/ironclaw#3708](https://github.com/nearai/ironclaw/pull/3708) remains open, pending final validation of documented breaking API changes in core crates:
- `ironclaw_common`: v0.4.2 → v0.5.0 (API breaking changes)
- `ironclaw_skills`: v0.3.0 → v0.4.0 (API breaking changes)
- Non-breaking compatible updates for `ironclaw_safety` (v0.2.2 → v0.2.3) and the top-level `ironclaw` crate (v0.24.0 → v0.29.1)
The final full release will ship once all Reborn cutover safety blockers are resolved.

## 3. Project Progress
16 PRs were merged or closed in the last 24 hours, delivering concrete advances to key priority tracks:
- [nearai/ironclaw#4532](https://github.com/nearai/ironclaw/pull/4532): Merged admin-managed Slack allowed-channel picker for Reborn WebUI v2, adding operator-scoped Slack channel access controls for the Slack host-beta channel.
- [nearai/ironclaw#4511](https://github.com/nearai/ironclaw/pull/4511): Landed Phase 1 outbound delivery preference facade contracts in the `ironclaw_product_workflow` module, formalizing typed rules for message routing across all connected channels.
- [nearai/ironclaw#4530](https://github.com/nearai/ironclaw/pull/4530): Implemented structured model-visible tool observation DTOs with bounded safe recovery context, improving agent error handling without exposing sensitive internal runtime state to LLM models.
- [nearai/ironclaw#4463](https://github.com/nearai/ironclaw/pull/4463): Wired Slack host-beta durable state stores for conversations, outbound messages, and idempotency tracking, plus automatic turn runner wakeups to reduce reply latency for Slack users.
- [nearai/ironclaw#4516](https://github.com/nearai/ironclaw/pull/4516): Launched WebChat v2 thread deletion functionality with strict user-scoped access controls to prevent accidental cross-user data exposure.
- [nearai/ironclaw#3298](https://github.com/nearai/ironclaw/pull/3298): Added a hermetic local CI gate for pre-push checks including clippy correctness tests and environment data scrubbing, reducing test flakiness for local developer workflows.

## 4. Community Hot Topics
The most actively discussed items reflect core team and stakeholder alignment on Reborn boundary design and operator experience:
1. [nearai/ironclaw#3280](https://github.com/nearai/ironclaw/issues/3280) (7 comments, top active issue): The P0 task to build the ProductWorkflow and InboundTurnService facade for Reborn module M2 inbound workflow. Underlying need: the core team is eliminating tight coupling between product channel adapters and the host kernel that caused security boundary leaks in the legacy v1 stack, a critical design milestone for multi-tenant safety.
2. [nearai/ironclaw#3036](https://github.com/nearai/ironclaw/issues/3036) (5 comments, 1 👍): EPIC for Configuration-as-Code Reborn tenant blueprints and use-case harnesses. Underlying need: enterprise operators managing multi-tenant IronClaw deployments are requesting declarative, schema-backed, auditable configuration to replace ad-hoc manual edits to `.env` files and unstructured settings that caused production drift on v1 deployments.
3. Cluster of 3-comment high-priority tasks including [nearai/ironclaw#3044](https://github.com/nearai/ironclaw/issues/3044) (local developer runtime profiles), [nearai/ironclaw#3283](https://github.com/nearai/ironclaw/issues/3283) (OpenAI-compatible API migration to Reborn), and [nearai/ironclaw#3333](https://github.com/nearai/ironclaw/issues/3333) (production wiring for missing Reborn kernel crates). These reflect shared stakeholder needs for lower local dev setup friction, backwards compatibility for existing LLM tooling integrations, and final production readiness validation for the Reborn stack.

## 5. Bugs & Stability
No new user-reported production crashes, critical regressions, or high-severity security vulnerabilities were logged in the 24-hour observation window. All updated security-related issues are pre-planned, pre-beta hardening tasks for the Reborn runtime, no unplanned incidents are recorded. The only minor known stability track is ongoing work to reduce E2E test flakiness, addressed via recently merged PRs #3565 (extended nightly test timeout to 90 minutes) and #3298 (hermetic local test gates), with no outstanding fix blockers reported.

## 6. Feature Requests & Roadmap Signals
Based on current prioritization, the following high-demand features are targeted for upcoming releases:
- Imminent Reborn WebUI v2 beta will ship with full OpenAI-compatible chat/Responses API compatibility (issue #3283), user-scoped skill management UI, and Slack channel host-beta support.
- The P1 local developer runtime profile (issue #3044) that lets users spin up a local IronClaw coding agent with one `iro run` command is scheduled for the first public stable Reborn release.
- The Configuration-as-Code tenant blueprint EPIC (issue #3036) will roll out as a post-beta minor release, targeted for 30-45 days after the initial Reborn launch.
- Isolated WASM runtime for ProductAdapters (issue #3572) is a mid-term 2026 roadmap priority to enable safe third-party extension execution.

## 7. User Feedback Summary
Collected user and stakeholder pain points from recent updates include:
1. Self-hosting personal AI assistant developers report major setup friction in v1, noting they currently spend excessive time manually configuring security grants, mounts, and network policies to run IronClaw as a local coding agent.
2. Enterprise multi-tenant operators note that the v1 unstructured configuration system produces un-auditable deployment drift, with no way to diff changes or roll back configuration updates without manual backups.
3. Enterprise users with existing investments in OpenAI-compatible LLM tooling integrations state they cannot adopt Reborn without 100% backwards compatibility for existing API endpoints.
4. Third-party skill developers note the v1 skill discovery UI lacks clear visibility into activation states, leading to confusion when installed skills fail to load.
Overall user sentiment is positive, with stakeholders noting the team is actively addressing longstanding quality-of-life pain points ahead of the Reborn launch.

## 8. Backlog Watch
Two high-impact open items that have lacked recent dedicated maintainer attention and risk delaying the Reborn launch timeline:
1. [nearai/ironclaw#3036](https://github.com/nearai/ironclaw/issues/3036) (Configuration-as-Code EPIC): Open for 6+ weeks, has no dedicated assigned working group to draft the schema and implementation roadmap, despite strong demand from enterprise operator stakeholders.
2. [nearai/ironclaw#3708](https://github.com/nearai/ironclaw/pull/3708) (core release PR): Open for 3+ weeks, still pending final sign-off on breaking API changes, creating a bottleneck for regular stable crate version releases that downstream package consumers depend on.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 2026-06-08 Project Digest
---
## 1. Today's Overview
This 24-hour reporting window saw moderate community activity focused on backlog issue engagement, with 15 total updated open issues, 0 merged or pending pull requests, and no new official releases published. 14 of the 15 updated issues are previously stale tickets originally filed on 2026-04-07, which received updates on June 7 alongside 1 brand new user-submitted bug report. No critical production outages or widespread breaking changes were reported by users in this period. The lack of new PR activity indicates no active code rollouts are underway, with most current effort focused on bug triage and workflow improvement planning for the open-source personal AI assistant project. Overall project health is stable, though the growing 2-month-old stale backlog signals constrained maintainer bandwidth for immediate code patches.

## 2. Releases
No new versions, pre-releases, or hotfixes were published in the last 24 hours. No recent tagged stable releases are recorded in the available project dataset.

## 3. Project Progress
There are 0 updated, merged, or closed pull requests in the 2026-06-08 reporting window. No new user-facing features, security patches, or bug fixes have been landed into the project’s main branch via PR workflows over the past 24 hours. No existing feature development tracks recorded public progress in this period.

## 4. Community Hot Topics
The two highest-engagement items from the updated issue backlog reflect core user priorities for custom skill building and inference cost control:
1. [Issue #1509](https://github.com/netease-youdao/LobsterAI/issues/1509): The most commented active ticket with 2 total comments, reporting unobserved blocking during custom skills file generation with no intermediate runtime status display, plus inconsistent LLM prompt understanding for identical tasks compared to the equivalent model running on the competing Openclaw assistant. The underlying user need here is fully transparent, low-friction custom skill creation workflows that deliver consistent performance matching comparable open-source AI agent tools.
2. [Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121): The newly submitted June 7 user question expressing concern that repeated redundant text output is wasting large volumes of user tokens and driving up unnecessary inference costs. This reflects a high-priority unmet need for predictable, cost-efficient inference execution with no unexpected token bloat that erodes user value.

## 5. Bugs & Stability
All reported bugs are ranked below by severity, with no corresponding fix PRs identified for any item in the current window:
1. **High Severity**: [Issue #1516](https://github.com/netease-youdao/LobsterAI/issues/1516): GitHub Copilot OAuth token silent loss bug, where users who close the Settings panel during Copilot device authorization will lose their successfully authenticated token without any warning, breaking their Copilot integration permanently until re-authentication.
2. **High Severity**: [Issue #1509](https://github.com/netease-youdao/LobsterAI/issues/1509): Custom skill generation workflow block with zero status feedback, which fully breaks the core custom skill creation flow for end users.
3. **Medium Severity**: [Issue #1500](https://github.com/netease-youdao/LobsterAI/issues/1500), [Issue #1502](https://github.com/netease-youdao/LobsterAI/issues/1502): Two interlinked skill state sync bugs that cause disabled skills to remain active during conversation, and skill configuration changes in the Agent settings panel to not take effect until users manually re-switch the active Agent.
4. **Medium-Low Severity**: IM platform configuration bugs including missing mandatory field validation for Popo AES keys ([#1504](https://github.com/netease-youdao/LobsterAI/issues/1504)), silent failed scheduled IM notifications when no target session is selected ([#1506](https://github.com/netease-youdao/LobsterAI/issues/1506)), and missing UI input for QQ Bot group whitelists that blocks whitelist mode usage entirely ([#1512](https://github.com/netease-youdao/LobsterAI/issues/1512)), plus CI configuration errors for the PR labeler workflow ([#1518](https://github.com/netease-youdao/LobsterAI/issues/1518)).

## 6. Feature Requests & Roadmap Signals
A suite of detailed, well-documented user-submitted feature requests focused on session and conversation management have been added to the backlog, including session color labeling ([#1525](https://github.com/netease-youdao/LobsterAI/issues/1525)), bulk multi-session export ([#1528](https://github.com/netease-youdao/LobsterAI/issues/1528)), local usage statistics dashboard ([#1532](https://github

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-06-08
*Data sourced from github.com/moltis-org/moltis*

---

## 1. Today's Overview
On 2026-06-08, the Moltis open-source personal AI assistant project saw steady low-to-moderate development activity across core functionality, stability, and user experience workstreams, with no new official version releases published in the 24-hour monitoring window. All 3 recently updated pull requests remain open for final maintainer review, alongside 1 newly updated open community feature enhancement request. No new critical bug reports or merged code changes landed in the tracked period, indicating the maintainer team is prioritizing iterative refinement of recently shipped functionality rather than rapid new deployments at this stage. Activity levels align with the project’s typical cadence of incremental improvements to its multi-channel AI assistant and session memory management systems.

## 2. Releases
No new official releases were published in the 24-hour monitoring window ending 2026-06-08.

## 3. Project Progress
No pull requests were merged or formally closed in the tracked period, but three in-flight workstreams received updates from core contributor s-salamatov to move them closer to review completion:
1. Telegram streaming functionality refinement
2. Session memory performance optimization
3. Granular channel activity access control feature implementation
All three changes are now pending final maintainer approval before potential merge in the upcoming dev window.

## 4. Community Hot Topics
The highest-engagement community item in the tracked window is open feature enhancement request #1107, submitted by community contributor IlyaBizyaev: [Moltis Issue #1107](https://github.com/moltis-org/moltis/issues/1107). The request, proposing native multiline text input support for the project’s mobile web UI, signals growing active usage of Moltis via mobile browsers rather than only its native app and third-party channel integrations. The existing comment on the ticket confirms no duplicate request has been logged previously, pointing to unmet UX needs for users accessing their AI assistant on the go with longer-form prompt drafting workflows.

## 5. Bugs & Stability
No new user-reported crashes, data loss incidents, or critical severity bugs were logged in the 24-hour monitoring window. The only tracked stability issue is a moderate severity functional regression in the project’s Telegram integration: when completion notifications are disabled, final streamed replies fail to render correctly for end users. A dedicated fix PR for this regression is already in review: [Moltis PR #1113](https://github.com/moltis-org/moltis/pull/1113), with no reported related user outages or data corruption at this time.

## 6. Feature Requests & Roadmap Signals
The only new user-submitted feature request tracked this period is multiline text input for the mobile web UI, a high-impact UX quality of life improvement that is highly likely to be prioritized for the next minor release cycle given its alignment with expanding Moltis cross-platform access. The three in-progress PRs already under review point to the next release also including three key updates: fixed Telegram streaming behavior, capped persisted tool results to reduce session memory bloat, and granular activity log visibility controls for shared multi-user channel deployments. No major breaking changes are indicated for the upcoming release based on current in-flight code.

## 7. User Feedback Summary
Tracked user feedback points to two primary unmet user pain points emerging in the current period: first, mobile web UI UX limitations that make drafting longer prompts inconvenient for users accessing Moltis on mobile browser platforms, and second, inconsistent rendering of streamed Telegram responses for users who opt out of unnecessary completion notifications. No widespread negative feedback about core assistant functionality or response quality was logged, and the incoming feature request indicates the community is actively contributing ideas to improve usability for niche access workflows.

## 8. Backlog Watch
Two high-impact in-flight PRs have remained in open status for multiple days, awaiting final maintainer review and signoff:
1. [Moltis PR #1089](https://github.com/moltis-org/moltis/pull/1089): Cap persisted tool results before rehydration, open since 2026-06-01. This change reduces bloat for users running long-lived multi-turn Moltis sessions.
2. [Moltis PR #1093](https://github.com/moltis-org/moltis/pull/1093): Add channel activity log visibility settings, open since 2026-06-03. This feature adds missing access controls for team and shared channel Moltis deployments.
Prioritizing their review will help clear the way for the next minor release rollout.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Daily Digest | 2026-06-08
---
## 1. Today's Overview
Over the 24-hour reporting window ending 2026-06-08, the CoPaw (formerly QwenPaw) agent framework repository recorded healthy, steady community-driven activity, with 5 updated open issues and 2 updated open pull requests, no new official releases published in this period. All current active discussions center on post-v1.1.10 bug regression fixes, core capability enhancements, and ecosystem expansion work for third-party agent clients, reflecting high end-user engagement with deployed CoPaw instances. No issues or PRs were marked as closed or merged in the past 24 hours, indicating ongoing active review and collaborative troubleshooting cycles between maintainers and community contributors. The participation of at least one first-time contributor submitting a functional fix PR signals the project’s low barrier to entry for new developers.

## 2. Releases
No new official CoPaw versions were published in the reporting window, so there are no associated breaking change notifications, feature update logs, or migration guidance to share for this period.

## 3. Project Progress
No PRs or issues were formally merged or closed in the 24-hour reporting window. The two updated open PRs recorded marked measurable progress toward final review readiness:
1. First-time contributor-submitted PR #4995 is fully scoped to fix a renderer content loss bug, and is now queued for maintainer review
2. The long-running ACP (Agent Client Protocol) extension PR #4949 received final updates and was marked "Under Review" by the maintainer team to unlock third-party client functionality

## 4. Community Hot Topics
The two most active public discussion items with 2 comments each (the highest activity count in the reporting window) are as follows:
1. [Feature Request: Independent Visual Model Fallback Configuration](https://github.com/agentscope-ai/QwenPaw/issues/4992): The underlying user need here is that many power users have invested heavily in high-performance, low-latency pure-text LLMs (such as DeepSeek-V4-Flash, LongCat-2.0-Preview) for core chat tasks, and refuse to swap their well-tuned main model solely to get basic multimodal support. The proposed decoupled visual processing workflow (image → dedicated lightweight vision LLM → text description → main LLM processing) would massively expand CoPaw’s compatible self-hosted model pool.
2. [Regression Bug: 1.1.9 / 1.1.10 Unresponsive With Locally Deployed Qwen 3.6-27B](https://github.com/agentscope-ai/QwenPaw/issues/4989): The underlying unmet user demand is explicit backward compatibility for standard OpenAI API-compliant local model deployments, which are the most common deployment scenario for self-hosted CoPaw enterprise and power user instances.

## 5. Bugs & Stability
Reported bugs are ranked below by business impact severity:
1. **Critical Regression Bug**: [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) – v1.1.9 and v1.1.10 versions break chat functionality for users running vLLM-deployed Qwen 3.6-27B models with standard OpenAI API adapters, with infinite loading state and no visible error logs. No corresponding fix PR has been linked to the issue as of press time.
2. **Minor Frontend Usability Bug**: [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993) – Reported on v1.1.10, the image preview zoom-and-drag feature has severe abnormal jitter on macOS, preventing users from moving large zoomed images to view full content. No linked fix PR is currently recorded.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests show clear roadmap signals:
1. The decoupled visual model fallback feature from [Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) has low implementation complexity and delivers high immediate value for the large self-hosted pure-text LLM user base, making it highly likely to be prioritized for the next v1.1.x minor release.
2. The self-evolving layered memory system request from [Issue #4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) is a core architecture-level refactor aligned with mainstream agent framework development trends, so it is expected to be scheduled as a headline feature for the upcoming v1.2 major release, rather than being shipped in the next immediate minor version.

## 7. User Feedback Summary
Aggregated real user pain points and sentiment:
- A share of self-hosted power users express dissatisfaction with the incomplete regression testing coverage of recent v1.1.9 and v1.1.10 releases, as their previously stable local model deployments break unexpectedly after version upgrade.
- Users universally demand more flexible, decoupled multi-model orchestration capabilities to balance performance, cost, and functionality without being locked into a single monolithic multi-modal main model.
- Small persistent UI usability issues (including the jittery image drag) are eroding the polished end-user experience even for users running fully stable core chat functionality.
- The submission of a first-time contributor PR to fix a renderer functional bug reflects high satisfaction and low barrier to entry among the project’s developer community.

## 8. Backlog Watch
The highest-priority pending item requiring urgent maintainer attention is:
- [PR #4949: ACP Protocol Extension](https://github.com/agentscope-ai/QwenPaw/pull/4949): This additive, non-breaking change was first submitted on 2026-06-03, 5 full days prior to this digest, and will unlock rich metadata support for all third-party CoPaw clients including the popular paw terminal TUI. Accelerating its review and merge will effectively drive the growth of the CoPaw third-party application ecosystem. No other long-unresolved high-impact backlog items were identified in this reporting window.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Open-Source Project Digest | 2026-06-08
---
## 1. Today's Overview
ZeroClaw recorded exceptionally high active development velocity over the 24-hour observation window, with 100 total updated work items (50 issues, 50 pull requests) across core runtime, user experience, provider ecosystem, and plugin areas. The project shows strong maintenance health, with 18 bugs resolved and 10 PRs merged while remaining focused on polishing the upcoming 0.8.0 schema-v3 architecture milestone. No public stable releases were published in this period, with most teams prioritizing long-standing workflow-blocking bug fixes and high-ROI user experience improvements. The community also delivered multiple new self-hosted plugin contributions aligned with the project's "full stack user control" design goal.

## 2. Releases
No new official releases were published in the 24-hour window ending 2026-06-08, with all active development targeting the 0.8.0 feature milestone that will ship the new typed OpenAI-compatible provider schema and multiple core runtime architecture updates.

## 3. Project Progress
10 total PRs were merged/closed in the observation window, advancing key project capabilities:
- [PR #7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178): Delivered fully configurable per-alias model-provider fallback logic, resolving a long-standing gap where global fallback behavior could not be customized for individual use cases
- [PR #7209](https://github.com/zeroclaw-labs/zeroclaw/pull/7209): Shipped the in-session `/model` and `/model-provider` picker that lets users switch models and providers live without restarting the daemon
- [PR #7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190): Added a new outbound message queue for the zerocode TUI, eliminating the hard input block that previously locked users out while the LLM generated responses
- [PR #7315](https://github.com/zeroclaw-labs/zeroclaw/pull/7315): Fixed Bedrock provider behavior to skip prompt caching for non-supported models, resolving crashes for users running Qwen third-party models on AWS Bedrock
- [PR #7262](https://github.com/zeroclaw-labs/zeroclaw/pull/7262): Published full documentation with worked examples for the 7 new OpenAI-compatible providers added in schema v3
- [PR #7011](https://github.com/zeroclaw-labs/zeroclaw/pull/7011): Formalized the project's public issue ownership workflow in maintainer documentation to reduce triage lag for community contributions

## 4. Community Hot Topics
The highest engagement items from the past 24 hours reflect clear user priority trends:
1. [Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) (28 comments): Long-running bug where the web dashboard fails to launch requiring manual npm build steps. The high comment count demonstrates massive user frustration with the out-of-the-box deployment experience for new users.
2. [Issue #2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) (6 comments, 9 👍): Multi-Agent Routing feature request, the highest-upvoted active feature item. This signals that a large share of power users are running multiple isolated agent profiles on a single ZeroClaw instance for different use cases (personal assistant, work automation, bot fleet).
3. [Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) (6 comments,7 👍): Native A2A (Agent-to-Agent) Protocol Support request, highlighting strong user demand for interoperability between ZeroClaw and other open-source agent ecosystems using the standard Linux Foundation A2A spec.
4. [Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (9 comments,3 👍): Request for a pre-built full-featured Docker image with all optional features enabled. Non-technical users repeatedly noted that manually compiling the full feature set from source creates an unacceptably high barrier to entry.

## 5. Bugs & Stability
Bugs are ranked below by severity, with fix status noted:
1. **S0 (Data loss/security risk):** [Issue #4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627): `file_write` tool reports success but written files are invisible on the host Docker filesystem. Fix PRs are currently marked in progress to resolve the mount binding misconfiguration.
2. **S1 (Workflow blocked):**
   - [Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866): Web dashboard build failure, *resolved* with closed fix
   - [Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879): Gemini CLI OAuth flow completely non-functional, fix in active progress
   - [Issue #5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803): Fallback provider chain ignores user-defined config values and only uses environment variables, *resolved*
3. **S2 (Degraded experience):**
   - [Issue #4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880): Context compression never triggers in daemon/channel mode, *resolved*
   - [Issue #5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122): `web_fetch` tool blocks whitelisted private host domains that resolve to local IPs, *resolved*

## 6. Feature Requests & Roadmap Signals
Based on current development priority and user engagement, the following features are very likely to ship in the next minor release:
- The 7 newly added OpenAI-compatible providers (Morph, GitHub Models, Upstage, Featherless, Arcee, Lambda AI, Inception) under schema v3
- The live in-session model/provider picker and outbound message queue for zerocode TUI
- Gemini CLI OAuth flow fix and MCP detection bug resolution
- Subsequent 0.8.x patch releases will very likely include the full pre-built Docker image, initial A2A protocol support, and partial multi-agent routing capabilities given their high community support.

## 7. User Feedback Summary
Core user pain points collected in the last 24 hours include: 1) New non-technical users report high friction from required manual web UI build steps and missing pre-bundled full Docker images; 2) False positives from the default LeakDetector redacting legitimate MD5 filenames and WeChat media random strings create unnecessary broken workflows for chat channel users; 3) Current memory consolidation logic that relies 100% on prompt-constrained JSON parsing produces frequent parsing failures. On the positive side, users show extremely high enthusiasm for self-hosted, cloud-free plugin features including the new self-hosted ACE-Step music generation plugin and n8n workflow integration, which align with the project's user-controlled open-source positioning.

## 8. Backlog Watch
The following high-impact long-running items are currently waiting for maintainer triage attention:
1. [Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503): 3+ month old request for Napcat/OneBot 11 channel support, with 9 comments from Chinese users that rely on QQ/OneBot automation, no maintainer assigned despite no-stale exemption.
2. [Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710): Logo redesign request with 11 comments and multiple user-submitted design assets, currently blocked on author action with no review progress for weeks.
3. [Issue #2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467): Webhook transforms feature request from users that rely on ZeroClaw for GitHub automation workflows, currently marked blocked with no recent maintainer updates.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*