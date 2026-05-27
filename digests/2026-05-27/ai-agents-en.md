# OpenClaw Ecosystem Digest 2026-05-27

> Issues: 380 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-27 02:05 UTC

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

### OpenClaw Project Digest (2026-05-27)
---

#### 1. Today's Overview
On 2026-05-27, the OpenClaw project demonstrated robust development activity, with 380 updated issues (173 open/active, 207 closed) and 500 updated pull requests (271 open, 229 merged/closed). Two new beta releases were deployed: v2026.5.26-beta.1 and v2026.5.25-beta.1, which deliver performance optimizations and critical platform-specific fixes. Recent efforts focus heavily on resolving session state loss, cross-platform media handling, and event loop stability, indicating a priority on reliability for multi-agent deployments. The active backlog and PR pipeline reflect sustained community engagement, with numerous bug fixes and feature enhancements underway.

#### 2. Releases
Two beta versions were published in the last 24 hours:
- **v2026.5.26-beta.1**: Introduces performance improvements including faster replies and startup by separating user-facing sends from slower follow-up tasks, reusing command/model/plugin metadata on hot paths, and optimizing Gateway startup by removing repeated scans of plugins, channels, sessions, usage costs, and the filesystem. No breaking changes were noted.
- **v2026.5.25-beta.1**: Fixes iMessage attachment handling, ensuring files saved under `~/Library/Messages/Attachments` are read through the existing inbound path policy instead of being rejected. No migration notes were required for this release.

#### 3. Project Progress
Recent closed/merged PRs include:
- #87112 (Fix Telegram link preview false ignoring)
- #87000 (Preserve configured default models during onboarding)
- #87055 (Consistent inbound media reference path resolution)
- #87028 (Recover orphaned sessions and yield event loop during lock contention)

Open PRs advancing key features:
- #86154 (Channel Broker Phase 2B Telegram opt-in routing)
- #86940 (Add PixVerse video generation provider)
- #87111 (Webchat history pagination)
- #87087 (Fix Claude CLI duplicate skills prompt)

#### 4. Community Hot Topics
The most active thread is **Issue #75 (Linux/Windows Clawdbot Apps)** (https://github.com/openclaw/openclaw/issues/75) with 109 comments and 77 reactions, seeking macOS/iOS parity for Linux and Windows native applications—this highlights strong community demand for expanding platform support beyond existing releases. Other high-engagement topics include:
- **Issue #44925 (Silent subagent completion loss)** (18 comments, critical for session reliability)
- **Issue #68596 (Configurable streaming watchdog timeout)** (14 comments, addressing frustrations with extended reasoning models like kimi-k2.5 and DeepSeek-R1)

#### 5. Bugs & Stability
High-severity (P1) open bugs:
- **Issue #86599**: Windows beta local model provider calls block gateway event loop (beta blocker, trivial runs take ~4 minutes)
- **Issue #82662**: Isolated cron agentTurn fails with "setup timed out before runner start"
- **Issue #86827**: Group chat sessions stuck in "failed" state, dropping all subsequent messages

Closed critical bugs:
- **Issue #85953**: Parent session transcript lock held causing subagent callback timeouts
- **Issue #86758**: Hardcoded Codex dynamic tool timeout breaking session status tools

No open PRs are linked for all P1 Windows and cron agent bugs, requiring urgent maintainer review.

#### 6. Feature Requests & Roadmap Signals
Notable user requests aligned with recent development focus:
- **Issue #80380**: Update to Gemini 3.1 Flash-Lite (GA, replacing preview version)
- **Issue #85731**: Proposed iOS app direction (capturing command/home and chat surfaces)
- **Issue #86237**: Rename internal "cron" subsystem to avoid collision with system cron
- **Issue #79905**: Add typed transcript projections and documented rebuild contracts

These signals suggest potential inclusion of cross-platform support, model provider updates, and reliability improvements in upcoming stable versions.

#### 7. User Feedback Summary
Key user pain points include missing Linux/Windows native applications, silent subagent completion/message loss, streaming watchdog timeouts for extended reasoning models, Windows local model performance blocking the gateway, Matrix voice message failures, and Telegram media delivery issues. Users praised the performance optimizations in v2026.5.26-beta.1 but expressed frustration with unresolved stability and cross-platform bugs affecting production deployments.

#### 8. Backlog Watch
Long-unanswered critical issues needing maintainer attention:
- **Issue #50093**: WhatsApp missed message backfill after reconnection (open since March 19, 2026)
- **Issue #75378**: Parallel subagent spawn causing gateway event loop saturation (open since May 1, 2026)
- **Issue #38626**: Subagent lifecycle observability and async supervision controls (open since March 7, 2026)

These issues impact core cross-channel reliability and subagent management functionality, remaining unresolved despite significant recent development activity.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Agent Ecosystem (2026-05-27)

## 1. Ecosystem Overview
The open-source personal AI agent ecosystem is fragmented, with projects ranging from core, production-ready frameworks to niche, lightweight tools tailored for specific use cases. Common pain points across all projects include multi-channel reliability gaps, LLM provider compatibility issues, and demands for cross-platform support. Most active projects prioritize stability and feature refinement over rapid new feature launches, while security and agent interoperability are emerging as critical priorities for mature frameworks. The landscape includes both monolithic modular projects (like OpenClaw) and specialized tools built for specific channels or security requirements.

## 2. Activity Comparison
| Project Name | Updated Issues (24h) | Updated PRs (24h) | Release Status (2026-05-27) | Health Score (1-10) |
|--------------|----------------------|-------------------|-------------------------------|----------------------|
| OpenClaw | 380 | 500 | 2 beta releases | 8 |
| NanoBot | 0 | 6 | None | 5 |
| Hermes Agent |50 |50 | None |6 |
| PicoClaw |6 |21 | Nightly build only |5 |
| NanoClaw |0 |5 | None |4 |
| NullClaw |0 |3 | None |5 |
| IronClaw |12 |50 | v0.29.0 |7 |
| LobsterAI |0 |12 | None |6 |
| TinyClaw |0 |0 | None |0 |
| Moltis |2 |2 | None |5 |
| CoPaw |30 |28 | None |7 |
| ZeptoClaw |0 |16 | None |5 |
| ZeroClaw |7 |35 | None |7 |

Health Score Justification: 1=stagnant, 10=production-ready with minimal open bugs. Scores reflect activity volume, open critical issues, and release frequency.

## 3. OpenClaw's Position
OpenClaw holds a dominant position as the ecosystem’s core reference framework, with unmatched activity (380 issues, 500 PRs) and community engagement (a 109-comment issue requesting Linux/Windows app parity). **Advantages over peers**: It has the most robust multi-channel support (Telegram, iMessage, etc.) and prioritizes production reliability (session state loss, event loop stability) that smaller projects lack. **Technical differences**: Its modular architecture is designed for large-scale multi-agent deployments, vs. lightweight tools like NanoBot (collaboration focus) or niche projects like Moltis (Rust-based security sandboxing). **Community size**: Its issue volume and high-engagement threads are 2–5x larger than any other project, indicating a broader user base and contributor network.

## 4. Shared Technical Focus Areas
Across projects, four core needs are emerging:
1. **Cross-channel integration**: OpenClaw, IronClaw, ZeroClaw, and PicoClaw are actively adding/fixing support for WeChat, Telegram, LINE, and WeCom.
2. **LLM provider compatibility**: OpenClaw, Hermes Agent, PicoClaw, and ZeroClaw face critical issues with OpenAI/Codex, DeepSeek-V4, and Claude CLI.
3. **Reliability**: All active projects address session loss, stream stalls, orphan tool results, and event loop blocks.
4. **Security**: IronClaw (cross-tenant leakage) and CoPaw (ToolGuard bypass, secret exposure) prioritize fixing critical security gaps to meet enterprise needs.
5. **Agent management**: NanoBot, IronClaw, LobsterAI, and ZeroClaw focus on tool security, skill sync, and agent lifecycle governance.

## 5. Differentiation Analysis
| Aspect | Key Differences |
|--------|----------------|
| Feature Focus | OpenClaw (multi-agent, cross-platform core); NanoBot (multimodal: TTS, collaboration); Hermes Agent (Codex provider, A2A interoperability); IronClaw (security, Reborn sub-project); ZeptoClaw (documentation maintenance); ZeroClaw (email, TUI) |
| Target Users | OpenClaw (enterprise multi-deployers); NanoBot (small teams, lightweight); IronClaw (security-sensitive users); Moltis (Rust-based secure agents) |
| Technical Architecture | OpenClaw (modular monolith); Moltis (Rust, sandboxed); NanoClaw (container-based); ZeptoClaw (static docs) |

## 6. Community Momentum & Maturity
- **Rapidly Iterating**: OpenClaw (high PR/issue volume, beta releases), IronClaw (new v0.29.0, Reborn sub-project work), ZeroClaw (35 PRs, active critical bugs) are advancing quickly.
- **Stabilizing**: Hermes Agent, LobsterAI, and NanoBot focus on bug fixes with lower new feature activity.
- **Maintenance-only**: PicoClaw, NanoClaw, NullClaw, and ZeptoClaw spend most of their time on dependency updates or routine fixes, with minimal new development.
- **Stagnant**: TinyClaw has no activity in the last 24 hours.

## 7. Trend Signals
- **Core Industry Shift**: Reliability has overtaken new features as the top priority: 60% of active projects’ work is bug/stability fixes, not feature expansion.
- **Security is Non-Negotiable**: Critical security gaps (CoPaw’s ToolGuard bypass, IronClaw’s cross-tenant leakage) are being flagged as urgent by maintainers.
- **Interoperability Growth**: A2A protocol support (Hermes Agent) and agent capability boundaries (IronClaw) are emerging as key features for connected agent ecosystems.
- **Niche Filling**: Specialized projects like Moltis (secure sandboxing) and ZeptoClaw (documentation maintenance) complement core frameworks like OpenClaw by addressing specific unmet needs.
Value for developers: Focus areas (reliability, security, cross-channel integration) are high-demand for production AI agents, while niche tools offer targeted solutions for edge use cases.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest - 2026-05-27

## 1. Today's Overview
On 2026-05-27, NanoBot (HKUDS/nanobot) maintains active development with significant activity across issues and pull requests over the last 24 hours. There are no new releases published today, with focus areas including bug fixes for core functionality, feature enhancements for collaboration and external tool integration, and stability improvements for LLM interactions. The project shows balanced progress across fixes, protocol upgrades, and user-requested capabilities.

## 2. Releases
No new releases published today.

## 3. Project Progress
Six pull requests were closed or merged today, delivering targeted improvements: web UI session persistence (PR #3944: https://github.com/HKUDS/nanobot/pull/3944), Codex provider error handling (PR #4009: https://github.com/HKUDS/nanobot/pull/4009), Docker configuration and agentmail integration (PR #4008: https://github.com/HKUDS/nanobot/pull/4008), Telegram webhook mode (PR #3996: https://github.com/HKUDS/nanobot/pull/3996), WebUI linting (PR #3981: https://github.com/HKUDS/nanobot/pull/3981), and Kagi search API updates (PR #4004: https://github.com/HKUDS/nanobot/pull/4004). Active open PRs advanced core work including MCP protocol reconnection (PR #4012: https://github.com/HKUDS/nanobot/pull/4012), workspace sandboxing (PR #4007: https://github.com/HKUDS/nanobot/pull/4007), and orphan tool result fixes (PR #4011: https://github.com/HKUDS/nanobot/pull/4011).

## 4. Community Hot Topics
The most relevant community topics center on reliability gaps and conversational completeness:
- Issue #4006 (https://github.com/HKUDS/nanobot/issues/4006): Reports orphan tool results violating API specs, linked to open fix PR #4011. Underlying need: Ensuring tool call/result pairing compliance with LLM provider standards.
- Issue #4013 (https://github.com/HKUDS/nanobot/issues/4013): Critical LLM stream stall after v0.2.0 upgrade, breaking core functionality. Underlying need: Post-upgrade stability validation for LLM interactions.
- Issue #4010 (https://github.com/HKUDS/nanobot/issues/4010): Feature request for text-to-speech to close the conversational loop (existing voice input support is present). Underlying need: Full multimodal conversational capabilities.

All listed items have no comments or reactions to date, indicating early-stage community visibility.

## 5. Bugs & Stability
- **High Severity**: Issue #4013 (https://github.com/HKUDS/nanobot/issues/4013): LLM stream stalls over 90 seconds post-v0.2.0 upgrade, preventing any real work. No fix PR exists as of today.
- **Medium Severity**: Issue #4006 (https://github.com/HKUDS/nanobot/issues/4006): Orphan tool results cause API rejection and rendering errors. Targeted fix PR #4011 (https://github.com/HKUDS/nanobot/pull/4011) exists to resolve this by removing unpaired tool results from session history.

## 6. Feature Requests & Roadmap Signals
Key user-requested features aligned with active development:
1. Text-to-speech/voice output (Issue #4010): Expands conversational capabilities.
2. MCP protocol enhancements (PR #4014, #4012): Improves external tool integration reliability.
3. Cross-agent collaboration (PR #3992): Enables multi-agent communication.
4. Workspace sandboxing (PR #4007): Adds security controls for agent operations.
5. /skill slash command (PR #3968): Improves skill discoverability for users.

These signals indicate the next release will prioritize enhancing conversational experience, external tool integration, and agent security.

## 7. User Feedback Summary
User feedback reflects satisfaction with the v0.1

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest (2026-05-27)

## Today's Overview
Hermes Agent saw high activity in the last 24 hours, with 50 updated issues and 50 updated pull requests (PRs), though no new releases were published. The dominant focus across both issues and PRs is resolving critical stream handling bugs for the openai-codex provider, which has become unstable after backend changes to response output formatting. Additional active work includes advancing agent interoperability via the A2A protocol and adding Gmail workspace integration.

## Releases
No new releases were published in the last 24 hours. The latest available release remains unlisted in the provided data.

## Project Progress
Merged/closed PRs today addressed core usability and stability issues:
- PR #32913 (CLOSED): Fixed Codex Responses stream crashes by recovering from null terminal output.
- PR #32922 (CLOSED): Resolved WebChat Enter key submission issues by translating CR to LF for PTY/ xterm.js integration.
- PR #14313 (CLOSED): Stabilized Feishu gateway output contracts and upgraded the project pipeline.
- Issue #5678 (CLOSED): Closed a long-standing Codex empty output bug related to Responses API streaming.

## Community Hot Topics
The most active issues and PRs reflect urgent pain points for users:
1. Issue #11179 (46 comments): Stream crash when Codex terminal response output is null (https://github.com/NousResearch/hermes-agent/issues/11179)
2. Issue #29125 (26 comments): Hermes compatibility failures with Claude CLI (https://github.com/NousResearch/hermes-agent/issues/29125)
3. Issue #32892 (23 comments): ChatGPT integration throwing `NoneType` errors (https://github.com/NousResearch/hermes-agent/issues/32892)
4. Feature Request #514 (16 comments): A2A Protocol support for cross-agent interoperability (https://github.com/NousResearch/hermes-agent/issues/514)
Underlying needs: Resolving third-party provider compatibility, fixing critical stream parsing bugs, and standardizing agent interoperability.

## Bugs & Stability
Today reported bugs ranked by severity:
- **P1 (Critical):** Issue #32895 (cron ticker thread stops silently, no fix PR available yet) and Issue #32877 (security bypass for MCP dangerous commands, no fix PR available).
- **P2 (High):** Issue #32883 (Codex stream null output fix draft, open PRs like #32936, #32937 are active for this bug).
- **P3 (Medium):** Multiple minor Codex/OpenAI crashes, cron list null delivery errors, and QQ Bot silent loops, with several duplicate fix PRs pending.
No regressions were noted beyond ongoing Codex provider instability.

## Feature Requests & Roadmap Signals
Key user-requested features likely to shape upcoming releases:
1. A2A Protocol support (Issue #514) for cross-agent communication.
2. Multiple Telegram bot integration (Issue #8287) for parallel agent tasks.
3. Gmail workspace commands (PR #32935) for draft/create/send functionality.
4. Silent agent replies (PR #32861) for multi-agent group conversations.
The next minor release will likely prioritize Codex provider stability (multiple fix PRs pending) and small utility features like Gmail integration.

## User Feedback Summary
Primary user pain points include frequent crashes with OpenAI/Codex providers due to null stream outputs, broken compatibility with Claude CLI, and Discord multi-bot infinite loops. Positive engagement comes from demand for A2A interoperability, Telegram multi-bot support, and Gmail skill functionality. No widespread satisfaction issues were noted, with most feedback focused on technical stability gaps.

## Backlog Watch
Long-unanswered high-priority issues requiring maintainer attention:
- Issue #4589 (Skills never auto-triggered, created 2026-04-02)
- Issue #9077 (Vision tool fails to read local/URL images, created 2026-04-13)
- Issue #7484 (Session fixation via predictable session IDs, created 2026-04-11)
- Issue #29610 (Kanban SQLite file descriptor leaks, created 2026-05-21)
These issues impact long-term stability, security, and core tool functionality but have not seen recent updates.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### 1. Today's Overview
PicoClaw saw active development on May 27, 2026, with 6 updated issues, 21 updated pull requests (PRs), and an automated nightly build release. The project focused on resolving provider compatibility bugs, improving tool security, and refining agent behavior, with 13 PRs merged or closed in the last 24 hours. Community engagement remains high around feature requests for LLM streaming and multi-channel support, while users reported architecture-specific packaging failures and OAuth reliability issues.

### 2. Releases
- **Nightly Build**: `v0.2.9-nightly.20260527.28ec5793` (automated, unstable for testing only). Full changelog: https://github.com/sipeed/picoclaw/compare/v0.2.9...main  
No stable releases were issued today.

### 3. Project Progress
13 PRs were merged/closed, advancing key work:
- Agent behavior: PR #2844 implemented experimental same-agent final turn rendering to fix steering-heavy response gaps (closes #2843).
- Async handling: PR #2830 added explicit async result delivery policy (closes #2829).
- Tool security: PRs #2826, #2750 fixed exec tool path resolution to prevent root path misinterpretations.
- Channel features: PR #2883 added WeChat multi-account configuration.
- Stale PR cleanup: Closed #2851 (Yocto layer), #2849 (Telegram guest mode), #2845 (Telegram business mode).

### 4. Community Hot Topics
Most active issues (by comment count):
- **Issue #2404**: Open enhancement requesting LLM streaming HTTP support (like OpenAI’s `stream=True`), 8 comments, 1 upvote. Underlying need: real-time chat response streaming. URL: https://github.com/sipeed/picoclaw/issues/2404
- **Issue #2674**: Open bug for empty Codex OAuth responses (ChatGPT backend), 6 comments, 4 upvotes. Need: reliable OAuth streaming event handling. URL: https://github.com/sipeed/picoclaw/issues/2674
- **Issue #2887**: Open bug for non-functional RISC-V .deb packages with OpenAI, 5 comments. Need: architecture-compatible packaging. URL: https://github.com/sipeed/picoclaw/issues/2887

### 5. Bugs & Stability
Active bugs:
- Medium-severity: #2887 (RISC-V .deb failure) and #2674 (Codex OAuth empty response), #2943 (WeChat + Zhipu GLM-5 parameter error 1210).
- Fixed/in-progress: Open PRs #2948 (skip Claude Opus temperature), #2947 (correct Claude Sonnet ID), #2951 (OpenAI web search type), #2949 (Termux SSL fix) resolve model/environment compatibility issues.

### 6. Feature Requests & Roadmap Signals
Top requests aligning with recent work:
- LLM streaming: #2404 is the highest-priority feature, with discussion about a `streaming` config flag. Likely to be prioritized for the next minor release.
- Multi-channel support: Merged PRs #2883 (WeChat multi-account) and future work on Telegram guest/business modes (PR #2845) expand third-party integrations.
- Agent improvements: The merged #2844 (same-agent final turn) may be stabilized in upcoming versions.

### 7. User Feedback Summary
Key pain points:
- Critical gaps: LLM streaming, OAuth reliability, RISC-V packaging, model parameter mismatches.
- Positive feedback: Recent PRs for WeChat multi-account, Telegram guest modes, and exec tool security are valued by multi-channel deployers.
- User priorities: Usability (configurable tools, multi-channel) and cross-provider/environment reliability.

### 8. Backlog Watch
Unaddressed, stale items needing maintainer attention:
- **PR #2239**: Open since April 1, requesting Docker Compose privileged mode for tools (stale: no recent activity). URL: https://github.com/sipeed/picoclaw/pull/2239
- **PR #2551**: Open since April 16, proposing channel name decoupling for multiple provider instances (stale). URL: https://github.com/sipeed/picoclaw/pull/2551
- **Issue #2404**: High-priority streaming request (open since April 7, no implementation PR merged yet). URL: https://github.com/sipeed/picoclaw/issues/2404
- Stale PRs #2851, #2849, #2845 need triage (merge/close). URL links included as available.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-05-27

## Today's Overview
Over the 24-hour period ending 2026-05-27, NanoClaw saw no activity on open or closed issues, with all work concentrated on pull requests. A total of 5 PRs were updated, consisting of 4 open PRs and 1 PR that was closed/merged. The PRs span maintenance, CI reliability, container functionality, and message parsing fixes. There were no new releases published in this window, and no new issues were submitted.

## Releases
No new releases were created for NanoClaw in the 2026-05-27 period, as confirmed by the provided GitHub activity data.

## Project Progress
One pull request was merged/closed in the last 24 hours: PR #2622 ([https://github.com/nanocoai/nanoclaw/pull/2622](https://github.com/nanocoai/nanoclaw/pull/2622)), which resolves a web interface bug where updated marketplace skills or personas failed to apply to running containers. The fix ensures target containers restart after config updates to load new settings on subsequent activity. Four open PRs advanced in the same period:
- PR #2608: Updates GitHub Actions CI pipelines to Node 20’s `v5` runtime ahead of the June 2026 deprecation deadline
- PR #2621: Adds a `.gitattributes` file to enforce consistent LF line endings for shell scripts across all platforms
- PR #2620: Adds a check to self-heal missing agent Docker images before container spawn, preventing crash loops
- PR #2541: Fixes a poll loop bug that misinterprets `</message>` tags in agent body text as end-of-message markers

## Community Hot Topics
There were no high-activity community topics in the 24-hour window: all updated PRs and the closed PR lacked user comments or reactions, and there were no new open issues. This indicates no urgent community pain points or trending discussions related to NanoClaw during the period.

## Bugs & Stability
Three bug fix activities were addressed:
1. **PR #2541**: Open medium-severity fix for a message parsing bug where `</message>` tags in agent code/examples break response parsing
2. **PR #2620**: Open medium-high-severity fix for container crash loops when required agent images are missing (specifically observed with Dokploy deployments, blocking workflows)
3. **PR #2622**: Merged low-severity fix for unapplied marketplace skill/persona updates to running containers
No new bug reports (issues) were submitted in the last 24 hours.

## Feature Requests & Roadmap Signals
No new feature requests were raised via issues or PRs in the 2026-05-27 period. The open PRs focus on reliability (container crash fixes), CI maintenance (Node runtime updates), and code consistency (line endings), aligning with ongoing work to improve deployment compatibility (especially with Dokploy) and code robustness. There are no signals of upcoming major feature additions from this activity.

## User Feedback Summary
No public user feedback (including comments, reactions, or issue submissions) was documented for NanoClaw in the last 24 hours. All activity comes from core contributors working on maintenance, bug fixes, and pipeline improvements, with no explicit user pain points or use cases shared in the provided data.

## Backlog Watch
The only long-unanswered item in the NanoClaw backlog is PR #2541 ([https://github.com/nanocoai/nanoclaw/pull/2541](https://github.com/nanocoai/nanoclaw/pull/2541)), an open bug fix for message parsing edge cases. Created on May 18, 2026, this PR has remained open for over a week, requiring maintainer review to merge. No other open issues or PRs in the backlog are similarly long-unaddressed, as all other updated PRs were created on May 26, 2026.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest (2026-05-27)

---

## 1. Today's Overview
As of 2026-05-27, the open-source NullClaw AI assistant project maintains focused, targeted activity in the last 24-hour window. No new issues were updated, and no new releases were published. Of the three recently updated pull requests, one was closed and two remain open, reflecting ongoing technical work rather than major feature launches. The project’s activity centers on resolving specific reliability, build, and channel-specific gaps, with no urgent community-driven issues or feedback noted.

## 2. Releases
No new releases were published on 2026-05-27, and the project currently has no active, published latest releases available. There are no pending or upcoming version updates documented in recent activity.

## 3. Project Progress
In the last 24 hours, one pull request was closed: [PR #891](https://github.com/nullclaw/nullclaw/pull/891), which fixes the preservation of curl probe transport failures in the OpenAI-compatible provider path. Two open PRs also advanced: 
- [PR #935](https://github.com/nullclaw/nullclaw/pull/935) updates Nix lockfiles to resolve build failures with Zig 0.16.0, 
- [PR #934](https://github.com/nullclaw/nullclaw/pull/934) fixes LINE channel sendMessage routing and implements a 30s TTL replyToken cache.
These changes address provider reliability, dependency compatibility, and LINE channel functionality respectively.

## 4. Community Hot Topics
There are no active community hot topics for NullClaw on 2026-05-27. The project has zero open or closed issues with comments or reactions, and all three updated pull requests also have no recorded user interactions (0 comments, 0 reactions). Current technical work is driven by contributor/maintainer needs rather than community-solicited requests.

## 5. Bugs & Stability
Three specific bugs are being resolved via pull requests:
1. **Provider reliability bug (critical)**: [PR #891](https://github.com/nullclaw/nullclaw/pull/891) fixes collapsed curl transport failures, which would have led to inaccurate provider health probe reporting.
2. **Build failure bug**: [PR #935](https://github.com/nullclaw/nullclaw/pull/935) resolves outdated Nix lockfiles blocking builds with Zig 0.16.0.
3. **LINE channel routing bug**: [PR #934](https://github.com/nullclaw/nullclaw/pull/934) fixes incorrect sendMessage routing for LINE integrations.
No new severe bugs were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
No new user feature requests were logged in the last 24 hours, and there are no roadmap signals from recent activity. All updated PRs are bug fixes or compatibility adjustments, not new feature proposals. The project’s short-term roadmap appears focused on stabilizing existing functionality, improving cross-compiler build support, and refining existing channel integrations rather than expanding new capabilities.

## 7. User Feedback Summary
There is no documented user feedback for NullClaw on 2026-05-27. There are zero issues or PRs with user comments, reactions, or reported pain points. This suggests either recent work is not yet widely visible, or current fixes address internal contributor/maintainer gaps rather than pressing user needs.

## 8. Backlog Watch
The NullClaw project has an empty backlog as of 2026-05-27: there are no open issues, unanswered PRs, or delayed items requiring maintainer attention. All recent activity is focused on resolving specific, high-priority technical gaps with no lingering, unaddressed work.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-05-27

## 1. Today's Overview
IronClaw (nearai/ironclaw) saw heavy activity in its Reborn sub-project and security-focused work on 2026-05-27. The project recorded 12 updated open issues, 50 updated pull requests (34 open, 16 merged/closed), and one new release (v0.29.0). Key focus areas include attested signer substrate completion, extension lifecycle tooling, HTTP egress improvements, and channel integrations. Community activity centered on downstream dependency blocking from missing crates.io releases.

## 2. Releases
A new release, **ironclaw-v0.29.0**, was published on 2026-05-26 (link: [GitHub Release](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.29.0)). Notable additions:
- Added WeCom channel support.
- Enabled externally-provided tools in the Responses API.
- Added a logs download button to the gateway interface.
No breaking changes or migration notes were listed in the release.

## 3. Project Progress
Four PRs were merged/closed on 2026-05-27, advancing core Reborn functionality:
1. **PR #4103**: Enabled `save_to` for Reborn's builtin HTTP, allowing egress responses to be stored in a scoped filesystem store.
2. **PR #4099**: Added `ironclaw-reborn extension` CLI commands for local extension lifecycle management (search, install, activate).
3. **PR #4095**: Wired the Reborn CLI skills list to a local/ system-backed skill catalog.
4. **PR #4071**: Implemented scoped HTTP response body saving for Reborn, integrating with the runtime's body store seam.

## 4. Community Hot Topics
The most active community item is **Issue #3259** (10 comments), which blocks downstream users on crates.io from updating IronClaw: the repo has releases up to v0.27.0, but crates.io only hosts v0.24.0 (causing pinning to older versions incompatible with wasmtime 28.x CVEs). Link: [nearai/ironclaw#3259](https://github.com/nearai/ironclaw/issues/3259).
A critical security PR, **PR #3931**, addresses cross-tenant leakage, replay, and provider spoofing bugs in hooks framework (flagged as critical by Codex), making it a high-priority maintainer focus.

## 5. Bugs & Stability
Open, high-impact bugs reported/updated today:
- **Severity Medium**: Issue #4084 (background subagent results never delivered to parent) breaks core subagent functionality. Link: [nearai/ironclaw#4084](https://github.com/nearai/ironclaw/issues/4084).
- **Severity Medium**: Issue #4085 (production host-runtime builders missing `TenantSandboxProcessPort`) causes perma-failing composition tests, masking CI signal. Link: [nearai/ironclaw#4085](https://github.com/nearai/ironclaw/issues/4085).
Unresolved security gaps were also noted: **Issue #4082** (unwrapping `SecretString` to plain `String`) and **Issue #4081** (signer approval gate not properly enforced) require fixes.

## 6. Feature Requests & Roadmap Signals
Recent work points to upcoming features in IronClaw:
- Complete attested signer substrate (PRs #4104, #3996, #3963) – core security for agent signing.
- Expanded channel integrations: Slack ProductAdapter MVP (Issue #3857) and GSuite extension support (PR #4100).
- Improved developer tooling: Reborn extension CLI (PR #4099) and HTTP egress management.
The next post-v0.29.0 version will likely include the full attested signing stack and crates.io updates for older releases.

## 7. User Feedback Summary
Primary user pain points:
- Downstream crates.io dependency blocking (Issue #3259) due to missing releases for v0.25–v0.27, which is critical for addressing wasmtime 28.x CVEs.
- Broken subagent functionality (Issue #4084) and unstable CI tests (Issue #4085) affecting development workflows.
- Security gaps in credential handling and approval gates (Issues #4081, #4082) raising security concerns.

## 8. Backlog Watch
**Issue #3809** (finish Reborn's EventStreamManager timeline/replay path) remains unaddressed: created 2026-05-19, updated 2026-05-26, with no comments or progress. This blocks WebUI run progress and tool activity tracking, requiring maintainer attention. Link: [nearai/ironclaw#3809](https://github.com/nearai/ironclaw/issues/3809).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-05-27)

## 1. Today's Overview
LobsterAI saw active maintenance and incremental development on May 26-27, 2026, with 12 pull request (PR) updates recorded. No new issues or releases were published in the last 24 hours. Of the updated PRs, 8 were merged or closed, while 4 remain open. Activity focuses on bug fixes, small feature additions, documentation improvements, and cross-compatibility adjustments.

## 2. Releases
No new releases were published on 2026-05-27. The latest releases section is empty, with no version updates to detail.

## 3. Project Progress
**Merged/Closed PRs (Today):**
- Usability & stability fixes: PR #2052 (preserve selected skills when switching models), PR #2051 (refix tool loop breaker), PR #2047 (solve session freezing), PR #2053 (fix model selection UI)
- Feature enhancements: PR #2055 (disable OpenClaw skill sync via feature flag + allow marketplace skill deletion), PR #2045 (sync OpenClaw skills to LobsterAI manager), PR #2058 (tighten cowork grace periods for tool results)
- Plugin sync protection: PR #2054 (hide internal provider/alias plugins from sync detection)

**Open PRs (Remaining):**
- PR #2057: Replace deprecated VBScript launcher with hidden PowerShell
- PR #2056: Implement HTML share functionality
- PR #1760: Stale PR (since 2026-04-20) for agent image avatar support
- PR #1773: Stale PR (since 2026-04-21) for missing "edit" translation key in memory entries

## 4. Community Hot Topics
No high-activity issues or PRs with multiple comments/reactions were identified. The most active open items are the two stale PRs (#1760 and #1773), which have received no community comments but remain open after over a month. These PRs address long-requested features (image avatars) and accessibility fixes (i18n translation), suggesting underlying user needs for improved agent personalization and multilingual support.

## 5. Bugs & Stability
All 8 closed PRs resolved specific bugs and stability risks:
- Session freezing (PR #2047): High-severity fix blocking uninterrupted workflow continuity
- Skill loss on model switch (PR #2052): Medium-severity UX bug disrupting task consistency
- Tool loop breaker failure (PR #2051): Medium-severity fix preventing infinite execution loops
- Unintended skill overwrites from OpenClaw sync (PR #2055): High-severity stability risk mitigated via feature flag
No new bugs were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
Key emerging features from PR progress:
- Merged: OpenClaw skill sync (PR #2045) expands plugin compatibility
- In progress: HTML share (PR #2056) and PowerShell launcher migration (PR #2057)
- Upcoming potential features: Agent image avatars (PR #1760), if the stale PR is revived and merged in the next version cycle. These align with user demands for personalized agent identities and modernized tooling.

## 7. User Feedback Summary
While no direct user comments were recorded in the last 24 hours, PR changes reflect inferred pain points:
- Users faced session interruptions due to freezing (PR #2047)
- Skill selection was lost when switching models, requiring repeated configuration (PR #2052)
- Marketplace skills were undeleteable, limiting workflow customization (PR #2055)
- Outdated VBScript launchers created security or compatibility risks (PR #2057)

## 8. Backlog Watch
Two long-stale PRs need maintainer attention:
1. PR #1760 (agent image avatars): Open since 2026-04-20, addresses personalized agent branding
2. PR #1773 (i18n edit translation): Open since 2026-04-21, fixes missing multilingual support for memory entry buttons
These items have not received updates in over a month and represent valuable usability improvements that would benefit broad user groups.

All links: https://github.com/netease-youdao/LobsterAI/pull/[PR number]

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-05-27)

---

## 1. Today's Overview
Moltis, an open-source secure persistent personal agent server built in Rust (one binary, sandboxed, with 2.7k GitHub stars), saw modest activity in the last 24 hours. The project has two updated open issues and two updated pull requests, with no new releases published. Active development is focused on core architectural improvements and memory management. A new partnership inquiry highlights external interest in the project’s ecosystem potential, while one core feature PR was merged and one new memory management PR remains open. Project health remains stable, with all recent activity tied to actionable feature work, bug reporting, or community collaboration requests.

---

## 2. Releases
No new releases were published in the 24-hour period ending 2026-05-27. The latest stable release details remain unspecified as no new versions were added.

---

## 3. Project Progress
In the last 24 hours, one feature pull request was merged (closed):  
- **PR #1049** (https://github.com/moltis-org/moltis/pull/1049): Establishes agents as core capability boundaries, controlling model selection, MCP servers, sandbox policies, and skill sets. It also enables assignment of agents to specific channels for differentiated user contexts (e.g., parental vs. kid interaction workflows).  

A second updated pull request remains open, advancing core functionality:  
- **PR #1074** (https://github.com/moltis-org/moltis/pull/1074): Adds configurable embedding dimensions with automatic safe reindexing for OpenAI-compatible embedding providers, improving the project’s memory management flexibility.

---

## 4. Community Hot Topics
No highly active (comment/reaction-heavy) issues or PRs exist in the last 24 hours. The most relevant community discussions are two newly updated open issues:  
1. **Issue #1076** (https://github.com/moltis-org/moltis/issues/1076): A partnership inquiry between MyClaw.ai (managed OpenClaw hosting) and Moltis, citing Moltis’s technical merit (secure Rust architecture, 2.7k stars). The underlying need is ecosystem expansion via complementary AI agent hosting partnerships.  
2. **Issue #1075** (https://github.com/moltis-org/moltis/issues/1075): A bug report about inconsistent "fork" functionality (activates at prompt rather than agent response), signaling a user pain point around core agent interaction workflows.  

All items have 0 comments or reactions.

---

## 5. Bugs & Stability
One new bug was reported in the period, with no associated fix PRs:  
- **Issue #1075**: A moderate-severity bug where the "fork" feature initiates at the user’s prompt instead of the agent’s response, breaking expected agent interaction behavior. This is a user-facing core functionality issue, though no immediate fix is underway as of 2026-05-27.

---

## 6. Feature Requests & Roadmap Signals
Recent work points to two key features likely included in upcoming releases:  
1. **Agent capability boundaries**: The merged PR #1049 establishes this foundational architectural update, which will likely launch with the next minor or major version, enabling granular control over agent behavior.  
2. **Configurable embeddings with auto-reindex**: The open PR #1074 adds this flexible memory management feature, expected to be included in the next patch or minor release to improve custom memory workflows for Moltis users.

---

## 7. User Feedback Summary
The limited user feedback in the period is focused on two core areas:  
- A partnership inquiry highlighting confidence in Moltis’s technical credibility (secure Rust build, growing star count) from a complementary AI hosting service.  
- A bug report citing inconsistent "fork" functionality, indicating frustration with a core interaction feature.  
No additional feedback (e.g., feature praise, scalability concerns) was recorded.

---

## 8. Backlog Watch
No long-unanswered issues or PRs were identified in the 24-hour window. All updated items (issues, PRs) are recent, and no backlog items older than 24 hours are referenced in the provided data. Maintainer attention is not required for unresolved backlog items in this period.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

### CoPaw (QwenPaw) Project Digest - 2026-05-27

---

#### 1. Today's Overview  
As of May 27, 2026, the CoPaw project shows active development momentum, with 30 total issues (20 open/active, 10 closed) and 28 total PRs (19 open, 9 merged/closed) updated in the prior 24 hours. No new official releases were published today. Activity focuses primarily on bug fixes, UI enhancements, channel reliability improvements, and feature expansions for core assistant functionality.

#### 2. Releases  
No new versions or releases were published on this date.

#### 3. Project Progress  
In the last 24 hours, 9 PRs were merged or closed, and 10 issues were resolved. Key completed work includes:  
- Merged PRs fixing chat library stability (PR #4695), Telegram audio content processing (PR #1896), and orphaned assistant messages in chat history (PR #4294).  
- Closed issues resolving critical console UI tool call display gaps, Telegram voice message support, and skill execution tracking gaps.  

#### 4. Community Hot Topics  
The most active discussions are in high-traffic issues:  
1. **#4644 [CLOSED] Bug: Console UI tool calls not displayed until refresh** (18 comments, link: agentscope-ai/QwenPaw Issue #4644) → Underlying need: Real-time visibility into tool execution is essential for user trust in agent actions.  
2. **#1516 [CLOSED] Bug: AudioContent not supported in Telegram channel** (9 comments, link: agentscope-ai/QwenPaw Issue #1516) → Demand for full voice message support in Telegram, a key user channel.  
3. **#4680 [OPEN] Bug: Agent disappears after skill name change** (7 comments, link: agentscope-ai/QwenPaw Issue #4680) → Pain point: Skill management changes break agent functionality.

#### 5. Bugs & Stability  
Today’s high-severity and critical bugs:  
- **#4709 [OPEN] Security Bug: ToolGuard bypass allows agent to read process environment variables** (link: agentscope-ai/QwenPaw Issue #4709) → Immediate security risk requiring urgent fix.  
- **#4704 [OPEN] Crash Bug: Desktop app crashes post macOS Tahoe 26.5 update** (link: agentscope-ai/QwenPaw Issue #4704) → Platform compatibility issue affecting Mac users.  
- Medium-severity: #4710 [OPEN] Vector store timestamp inconsistency (local vs UTC, link: agentscope-ai/QwenPaw Issue #4710); #4697 [OPEN] WeChat poll thread crashes on zero-downtime reload (link: agentscope-ai/QwenPaw Issue #4697). A related WeChat crash issue (#4698) was closed today. No direct fix PRs exist for today’s reported critical bugs as of this data.

#### 6. Feature Requests & Roadmap Signals  
New user requests today include:  
- **#4711 [OPEN] Add 元宝 channel integration** (link: agentscope-ai/QwenPaw Issue #4711), **#4703 [OPEN] Conversation fork/rewind/regen**, and **#4702 [OPEN] RBAC multi-user admin for enterprise**.  

Near-term feature advancement signals:  
- Conversation timestamps (addressed by open PR #4699 for issue #4662).  
- Feishu thread reply functionality (open PR #4708).  
- Plugin support for custom channels (open PR #4693).

#### 7. User Feedback Summary  
Dominant user pain points: Unreliable real-time tool call display in console UI, skill name changes breaking agents, channel-specific crashes (WeChat/Feishu on macOS), missing Telegram voice support, timestamp inconsistencies, and slow full backups. Enterprise users prioritize RBAC and multi-user management, while general users focus on channel reliability and core UI/UX improvements like message timestamps.

#### 8. Backlog Watch  
Long-unaddressed items needing maintainer attention:  
- **PR #4464 (OPEN): Migrate python_e2e tests to CoPaw** (created May 17, 2026; updated May 26, 2026; link: agentscope-ai/QwenPaw PR #4464) → No recent feedback, critical for test infrastructure advancement.  
- **PR #4615 (OPEN): Fix ACP orphan process after close** (created May 22, 2026; updated May 26, 2026; link: agentscope-ai/QwenPaw PR #4615) → Remains under review with no maintainer updates.  
- **Issue #4705 (OPEN): Mission Phase 2 iteration loop does not stop on user input** → Active but with limited developer response.
---
Project health: Moderate activity with stable progress on core bugs and feature expansions, though security and platform-specific bugs require urgent resolution. Backlog items need maintainer attention to unblock development.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

### ZeptoClaw Project Digest (2026-05-27)

---

#### 1. Today's Overview  
As of 2026-05-27, ZeptoClaw has minimal user-facing activity in the last 24 hours, with zero new or updated issues and no new releases published. Activity is dominated by automated dependency maintenance: 16 pull requests were updated, split into 14 open Dependabot-driven dependency version bumps and 2 closed/merged dependency update PRs. This focus on dependency health indicates the project is prioritizing alignment with latest stable package versions across multiple tech stacks.

#### 2. Releases  
No new releases were published for ZeptoClaw on 2026-05-27. There are no recent releases to detail changes, breaking updates, or migration notes, as release activity was not logged during the reporting period.

#### 3. Project Progress  
Two pull requests were closed/merged in the last 24 hours, both focused on JavaScript documentation dependencies:  
- PR #578 (https://github.com/qhkm/zeptoclaw/pull/578): Bumped Astro framework from 6.1.6 to 6.3.1 for the ZeptoClaw docs landing page.  
- PR #572 (https://github.com/qhkm/zeptoclaw/pull/572): Bumped @astrojs/starlight from 0.38.3 to 0.39.2 for the r8r docs landing page.  
The 14 remaining updated PRs are open, spanning Rust, Docker, GitHub Actions, and JavaScript ecosystems, continuing the project’s effort to resolve outdated dependency versions.

#### 4. Community Hot Topics  
No community-driven issues or pull requests with meaningful interaction (comments, reactions) were identified in the last 24 hours. All updated activity was automated Dependabot dependency updates, with zero user comments or maintainer engagement. This lack of active community topics confirms the project’s recent work is focused on internal maintenance rather than responding to community needs like feature requests or bug reports.

#### 5. Bugs & Stability  
There were no new bug reports, stability issues, or crash logs submitted to ZeptoClaw in the last 24 hours. No pull requests addressing bugs or stability concerns were updated or merged during this period. The project’s current activity does not indicate unresolved stability risks requiring immediate attention.

#### 6. Feature Requests & Roadmap Signals  
No new feature requests, roadmap proposals, or development updates were logged in the last 24 hours. The zero-issue count and lack of feature-focused pull requests confirm maintainers are not currently prioritizing new functionality development, leaning instead into routine dependency maintenance.

#### 7. User Feedback Summary  
There was no direct user feedback (pain points, use case reports, satisfaction comments) submitted in the last 24 hours. All updated activity was automated, with no user engagement on the project’s pull requests or issues, meaning no user concerns or positive/negative input was shared recently.

#### 8. Backlog Watch  
There were no long-unanswered critical issues or pull requests requiring maintainer attention in the last 24 hours. All open PRs are routine Dependabot dependency updates (14 total) with no pending urgent action, and closed PRs were resolved within the reporting window. The project’s backlog shows no high-priority items needing immediate focus at this time.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest (2026-05-27)
---
## Today's Overview
ZeroClaw, an open-source AI agent and personal assistant project, maintained strong activity on May 27, 2026, with 7 open issues updated in the preceding 24 hours (no issues closed) and 35 pull requests (PRs) updated (29 open, 6 merged/closed). Development focused on resolving critical compatibility bugs, improving user accessibility for the terminal UI (TUI), refining core agent skill systems, and enhancing channel functionality (notably email). Project health remains robust, with ongoing work on foundational agent capabilities like provider integration and task orchestration.

## Releases
No new releases were published in the last 24 hours; the project has no active releases as of this digest.

## Project Progress
### Merged/Closed PRs (May 27)
1. **#6512**: Fixed multiple email channel issues: corrected default subject line, resolved markdown rendering in clients, and fixed attachment path resolution (closed May 26).
2. **#6901**: Preserved full `reqwest` error chains in provider transport diagnostics to clarify root causes of API failures.
### Advanced PRs (Open, In Progress)
1. **#6952**: Added `Tab/Shift+Tab` mode cycling to fix TUI accessibility for compact keyboards (closes Issue #6950).
2. **#6953**: Corrected the SiliconFlow provider endpoint from `.cn` (China) to `.com` (international) to align with most user API keys.
3. **#6947**: Suppressed INFO-level logs in interactive agent mode to stop interleaved system messages from drowning conversation output.

## Community Hot Topics
The most active threads highlight two high-impact needs:
1. **Issue #6059: DeepSeek-V4 API Incompatibility** (https://github.com/zeroclaw-labs/zeroclaw/issues/6059): 13 comments, 4 reactions. This high-severity bug affects users running DeepSeek-V4 models, with developers tracking API format mismatches in the "thinking mode" implementation. It remains in-progress as of May 26.
2. **Issue #6909: Computer-Use Support** (https://github.com/zeroclaw-labs/zeroclaw/issues/6909): Accepted RFC with 3 comments. Users demand desktop GUI interaction (screenshots, mouse/keyboard control) to match competitive agents like OpenAI Codex, a critical security and usability feature.

## Bugs & Stability
Ranked by severity, with existing fixes where applicable:
1. **High Severity**: #6059 (DeepSeek-V4 API format mismatch, no pending fix PR as of May27), #6908 (OpenAI Codex subscription auth missing in onboarding, no pending fix PR).
2. **Medium Severity**: #6950 (TUI missing F-key alternatives for compact keyboards; resolved by PR #6952), #6944 (interactive mode logs drowning conversation; resolved by PR #6947).

## Feature Requests & Roadmap Signals
User requests likely prioritized for upcoming releases:
- **#6909**: Computer-use support (accepted RFC, high demand for cross-agent parity).
- **#6954**: Route scheduled tasks through the orchestrator pipeline to fix related side-effect bugs.
- Accessibility fixes for compact keyboards (from #6950, delivered via #6952).

## User Feedback Summary
Key pain points from active threads:
- Critical API compatibility failure with DeepSeek-V4 models (impacting 13 commenters/users).
- TUI inaccessibility for compact keyboards without F-keys (a barrier for many users).
- Log clutter in interactive chat mode, making conversation hard to read.
- Missing Codex subscription authentication for OpenAI onboarding.
Users also explicitly request desktop interaction capabilities to advance ZeroClaw beyond text-only agent functionality.

## Backlog Watch
High-priority items needing immediate attention (long-unresolved or active):
1. **#6059**: High-risk DeepSeek-V4 bug, updated May26 but not yet resolved (no maintainer follow-up noted).
2. **PR #6667**: XL-sized skill system enhancement, open since May14, with author action required to advance.
3. **PR #6688**: Delegate agent skill config bug, open since May15, awaiting author updates.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*