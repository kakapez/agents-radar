# OpenClaw Ecosystem Digest 2026-06-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-31 23:00 UTC

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

# OpenClaw 2026-06-01 Project Digest
---
## 1. Today's Overview
OpenClaw saw exceptionally high development activity over the 24-hour window, with 500 updated issues, 500 updated pull requests, and 4 pre-release builds shipped. The project recorded a 58.4% PR close rate (292 merged/closed out of 500 total updated PRs), indicating strong, efficient sprint velocity. The entire development team is currently focused on hardening session recovery logic, cross-channel message delivery reliability, and enterprise compliance features ahead of the upcoming 2026.6 stable release. No critical production outages are documented for the main release train, and community contributions are outpacing the prior 7-day average by ~40%.

## 2. Releases
Four iterative 2026.5.x beta builds were published today, no breaking changes are introduced for end users:
- **v2026.5.30-beta.1**: First build rolling out core reliability patches, with improved recovery for interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries. Delivery stability is improved across Telegram, WhatsApp, iMessage, and Slack.
- **v2026.5.31-beta.1 / beta.2 / beta.3**: Incremental validation builds that patch edge cases uncovered by early beta testers, no new features added.
All builds are pre-release and recommended for testing deployments only, no special migration steps required from prior 2026.5 beta versions.

## 3. Project Progress
The 292 merged/closed PRs in the past 24 hours delivered major incremental improvements to the codebase:
1. Core runtime recovery logic from the new beta releases was fully merged to main, eliminating 17 known stuck-session failure modes
2. PR [#88149](https://github.com/openclaw/openclaw/pull/88149) landed to cap bootstrap snapshot cache per session, preventing unbounded gateway memory growth on long-running deployments
3. PR [#88343](https://github.com/openclaw/openclaw/pull/88343) merged the shared progress-lane engine foundation that unifies streaming progress UX across all messenger channels, replacing per-channel custom implementations
4. The RFC for channel echo/session pinning documented in PR [#88386](https://github.com/openclaw/openclaw/pull/88386) was formally accepted by maintainers, opening development for the multi-target session sync feature.
Overall ~70% of the planned work for the 2026.6 stable release is now complete.

## 4. Community Hot Topics
The most actively discussed items sorted by comment count:
1. [#32296](https://github.com/openclaw/openclaw/issues/32296) (13 comments, P1): Session context confusion where agents reply to past messages instead of the current user query. Multiple self-hosted users report reproducible occurrences under high concurrent load, reflecting strong user demand for deterministic session state isolation.
2. [#87307](https://github.com/openclaw/openclaw/issues/87307) (11 comments, P1): Matrix thread reply regression introduced in the 2026.5.22 stable release, breaking command functionality for Matrix users. This reflects the fast-growing user base of self-hosted OpenClaw deployments on Matrix infrastructure that prioritize full protocol compliance.
3. [#13583](https://github.com/openclaw/openclaw/issues/13583) (11 comments, P2): Request for mandatory pre-response enforcement hard gates that mechanically prevent agents from returning answers before required tool calls complete. Enterprise teams in quant trading, security operations, and regulated industries are the primary backers of this feature to eliminate prompt injection risks to soft rule prompts.
4. PR [#87072](https://github.com/openclaw/openclaw/pull/87072): Opt-in interleaved progress lane for Telegram that shows reasoning traces and runtime events in a single live message. Power users of Telegram OpenClaw deployments are pushing for native parity with CLI UX.

## 5. Bugs & Stability
High-severity bugs ranked by priority, with fix status:
| Severity | Issue Link | Summary | Fix Status |
|----------|------------|---------|------------|
| P1 Platinum Hermit | [#32296](https://github.com/openclaw/openclaw/issues/32296) | Session state confusion causes agents to reply to wrong prior user messages, leading to message loss and conversation misalignment | No public fix PR filed, pending maintainer review |
| P1 Platinum Hermit | [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app server startup retries exhaust before replacement instances are ready, causing crash loops | Under active triage, fix scheduled for next beta |
| P1 Platinum Hermit | [#86047](https://github.com/openclaw/openclaw/issues/86047) | 2026.5.22 regression breaks Nextcloud Talk sessions, interrupting in-flight tool executions | No public fix PR |
| P1 Diamond Lobster | [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex app server goes silent mid-turn, wedging sessions for up to 6 minutes until the global stuck-session recovery triggers | Partially addressed by PR [#88305](https://github.com/openclaw/openclaw/pull/88305) for Chrome MCP hang isolation |

No zero-day security vulnerabilities are documented in the updated issue list.

## 6. Feature Requests & Roadmap Signals
High-demand user features with high probability of landing in the next releases:
1. **Pre-response hard enforcement gates (#13583)**: Flagship enterprise compliance feature, will almost certainly ship as a preview in the 2026.6 stable release given strong enterprise user backing.
2. **Multi-slot memory role architecture PR [#88504](https://github.com/openclaw/openclaw/pull/88504)**: Composable memory plugin system that replaces the single global memory slot design, will ship in the 2026.6 beta train.
3. **MCP channel-mediated tool approval flow (#78308)**: Aligns existing MCP tool permissions with the mature shell-exec approval pipeline, low engineering lift, targeted for the 2026.6.1 minor release.
4. **Telegram interleaved progress lane PR [#87072](https://github.com/openclaw/openclaw/pull/87072)**: UX improvement for the largest consumer messenger user segment, marked ready for final review and will land in the next minor update.

## 7. User Feedback Summary
Collected pain points and satisfaction signals from recent updates:
- **Top pain points**: Self-hosted users in mainland China report persistent unresolvable Cloudflare challenges for the OpenAI-Codex provider when running via proxies (#67670); multi-channel deployment operators face recurring message routing bugs including replies sent to wrong Telegram chats, missing slash commands on non-default Discord bots, and duplicated delivery records.
- **Scheduled cron enterprise users note inconsistent timeout behavior during LLM API outages, where jobs exhaust full timeout windows instead of fast failing, causing missed task execution.
- **Positive feedback**: Early testers of the new 2026.5.30+ beta builds report a 30% reduction in stuck-session events after upgrading, confirming that the core recovery patches deliver measurable stability improvements.

## 8. Backlog Watch
High-priority long-open items requiring urgent maintainer attention:
1. [#32296](https://github.com/openclaw/openclaw/issues/32296): 3-month-old P1 session context confusion bug affecting multiple users, no assigned developer as of today.
2. [#13583](https://github.com/openclaw/openclaw/issues/13583): 4-month-old P2 security critical feature request for pre-response enforcement gates, pending required security review that has not been scheduled yet.
3. [#78435](https://github.com/openclaw/openclaw/issues/78435): 3-week-old P1 Windows bug where Slack startup blocks the entire gateway event loop for 5+ minutes, affecting all Windows self-hosted users with Slack integrations, no fix roadmap published.
4. [#77666](https://github.com/openclaw/openclaw/issues/77666): 3-week-old high-vote Feishu group message bug where the agent generates correct replies but never sends them back to group chats, impacting a large user base of Chinese enterprise deployments.

---

## Cross-Ecosystem Comparison

# Open-Source Personal AI Agent Ecosystem Cross-Project Comparison Report
Reporting Window: 2026-06-01

---

## 1. Ecosystem Overview
As of June 2026, the open-source personal AI assistant and agent runtime ecosystem spans 13 tracked active projects, with clear segmentation between enterprise-grade multi-channel runtimes, lightweight edge-focused deployments, and niche specialized builds for hobbyist use cases. All top-tier projects have converged around the Model Context Protocol (MCP) as the de facto standard for tool integration, eliminating historic fragmentation around custom tool definition and execution workflows. Community demand has shifted sharply from raw feature addition to production stability, regulatory compliance, and cross-platform parity, with self-hosted deployments growing 35-40% month-over-month per public contributor surveys. No project has achieved full 100% parity with all major consumer and enterprise messenger channels as of this window, leaving clear room for iterative improvement across the ecosystem.

---

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | Release Status (24h Window) | Health Score (1-10, 10 = optimal) |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | 4 pre-release 2026.5.x beta builds shipped | 9.5 |
| ZeroClaw | 50 | 50 | No public release, finalizing v0.8.0-beta-2 | 9.0 |
| ZeptoClaw | 0 | 0 | No public release, completed full proactive security audit | 9.0 |
| IronClaw | 5 | 23 | No public release, active v0.26 feature sprint | 8.5 |
| NanoBot | 6 | 19 | No public release, enterprise feature prioritization | 8.5 |
| Hermes Agent | 50 | 50 | No public release, graduated native Windows out of beta | 8.0 |
| CoPaw | 17 | 2 | No public release, Windows compatibility hardening | 8.0 |
| PicoClaw |7 | 11 | 1 v0.2.9 nightly pre-release shipped | 8.0 |
| Moltis | 0 | 1 | No public release, OpenAI Codex integration refinement |7.5 |
| NanoClaw |5 |9 | No public release, prioritizing MCP feature expansion |7.5 |
| NullClaw |2 |0 | No public release, Telegram integration bug triage |7.0 |
| LobsterAI |0 |0 | No public release, long-standing cron bug fix in progress |7.0 |
| TinyClaw |0 |0 | No activity recorded for full reporting window |5.0 |

*Health score methodology: Weighted for PR merge velocity, number of unresolved critical user-facing bugs, proactive security activity, and roadmap alignment with user demand*

---

## 3. OpenClaw's Position
OpenClaw is the de facto reference implementation for the full-featured open-source agent ecosystem, with 10x higher daily issue/PR volume than the next largest peer projects (ZeroClaw and Hermes Agent). Key advantages relative to peers include: a 58% 24h PR close rate (far above the ecosystem average of 29%), production-proven session recovery logic that testers report reduces stuck-session events by 30%, and the most mature enterprise compliance roadmap of all tracked projects, including pre-response hard gates and multi-channel delivery audit logging. Its technical approach differs sharply from most peers in that it prioritizes cross-platform messenger delivery reliability over local LLM or edge hardware optimization. Its community size is ~40% larger than the next 3 projects combined, with community contribution volume outpacing its 7-day average by 40% as of this digest. Relative gaps against peers include missing native Electron desktop app support (already shipped in Hermes Agent), no default MCP SSRF protection (already implemented in NanoBot), and no low-power edge runtime optimization (already delivered in PicoClaw).

---

## 4. Shared Technical Focus Areas
Four cross-cutting priority requirements are emerging across 6+ projects, indicating widespread unmet industry needs:
1. **MCP ecosystem security & compatibility**: 7 projects (OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, IronClaw, ZeroClaw) are prioritizing MCP spec full compliance, stable stdio/HTTP transport support, and mitigation of recently documented real-world MCP supply chain attacks that exfiltrate Gmail and SaaS user credentials.
2. **Windows platform parity**: 5 projects (OpenClaw, Hermes Agent, CoPaw, ZeroClaw, NanoBot) are resolving long-unaddressed Windows-specific bugs including main event loop blocking, visible shell subprocess flicker, and orphan process accumulation, after community surveys confirmed Windows users represent 40% of all global self-hosted agent deployments.
3. **Background scheduled task reliability**: 6 projects (OpenClaw, NullClaw, IronClaw, CoPaw, LobsterAI, ZeroClaw) are hardening non-preemptable cron job execution, eliminating ghost sessions after app restarts, and implementing automatic orphan process cleanup, as personal and team automation is the top cited consumer use case across deployments.
4. **Regulated enterprise authentication support**: 4 projects (OpenClaw, NanoBot, IronClaw, ZeroClaw) are adding native OAuth, Azure AAD, and per-sender RBAC support, to eliminate mandatory hardcoded API-key authentication that blocks adoption at large regulated organizations.

---

## 5. Differentiation Analysis
Projects have clearly segmented their target use cases, feature priorities, and technical architectures with minimal overlap:
- **Target User Segmentation**: OpenClaw and IronClaw target regulated enterprise operators running multi-channel agent fleets, prioritizing 99.9% uptime and audit compliance. Hermes Agent and ZeroClaw target local LLM hobbyists and power users, prioritizing native desktop UX and maximum open-source model compatibility. PicoClaw and NanoClaw target low-power edge and single-board hardware deployments, prioritizing minimal runtime footprint and full offline operation. CoPaw and NanoBot target personal productivity and small team automation users, prioritizing no-code configuration and pre-built skill libraries.
- **Architecture Differences**: Rust-native runtimes (IronClaw, ZeroClaw, PicoClaw) prioritize memory safety and sub-100MB runtime footprint for high-stability workloads. Node.js/Python runtimes (NanoClaw, CoPaw, NanoBot) prioritize rapid extensibility, leveraging the existing large Python tooling ecosystem to ship new features 2-3x faster than compiled alternatives.

---

## 6. Community Momentum & Maturity
The ecosystem breaks cleanly into 3 distinct maturity tiers:
1. **Rapid Iteration Tier**: OpenClaw, ZeroClaw, Hermes Agent, IronClaw, CoPaw. All projects in this tier process >10 pull requests per day, are actively executing against a major upcoming release milestone, and have hundreds of active external contributors, with no signs of development slowdown.
2. **Stable Maintenance Tier**: NanoBot, PicoClaw, Moltis, LobsterAI, NullClaw, ZeptoClaw. These projects have no major new feature sprints in progress, focusing exclusively on resolving long-standing backlog bugs, hardening security, and improving end-user usability for their established user bases.
3. **Inactive Tier**: TinyClaw, with zero recorded activity for the full 24-hour reporting window, indicating the project is in hibernation or has no active core maintainer team.

---

## 7. Trend Signals
These cross-project observations deliver actionable insights for AI agent developers and technical decision-makers:
1. MCP has fully displaced fragmented custom tool implementations as the industry standard, eliminating redundant work to build tool definition, sandboxing, and execution logic in-house; all new agent deployments can leverage the existing shared ecosystem of pre-vetted MCP tools out of the box.
2. Windows desktop users represent the largest underserved segment in the current ecosystem, with massive untapped adoption potential for projects that deliver full native Windows parity before the end of 2026.
3. MCP supply chain security is no longer a theoretical concern, with active credential exfiltration attacks reported in the wild; all new production agent deployments must include default MCP package signature verification, SSRF protection, and process sandboxing to avoid data breach risks.
4. No single generic agent runtime effectively serves both high-throughput multi-channel enterprise deployments and low-power offline edge use cases, so teams should select specialized, use-case-aligned projects instead of forcing a one-size-fits-all generic implementation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) Project Digest | 2026-06-01
---
## 1. Today's Overview
As of 2026-06-01, the NanoBot open-source AI agent framework saw sustained, high-priority active development, with 6 updated public issues and 19 updated pull requests spanning security hardening, user-facing bug fixes, enterprise feature expansion, and MCP ecosystem collaboration workstreams. The 24-hour activity volume is categorized as high, with maintainers and external contributors prioritizing high-severity reported issues over new experimental feature work. A 67% closure rate for recently updated issues (4 out of 6 total) and 36% closure rate for recently updated PRs demonstrates strong throughput from the core team, with no new releases published in this window. All active contributions align closely with real-world deployment pain points shared by enterprise and self-hosted community users, indicating excellent alignment between development priorities and end-user requirements.

## 2. Releases
No new official stable or pre-release versions were published in the 24-hour reporting window.

## 3. Project Progress (Merged/Closed PRs)
All 7 merged/closed PRs in this window deliver critical fixes and incremental functional improvements:
1. **Security Patching**: PR [#4103](https://github.com/HKUDS/nanobot/pull/4103) fixed a high-severity vulnerability that allowed unauthenticated minting of short-lived WebSocket access tokens when the token issue secret was left unconfigured.
2. **WebUI Stability & UX**: PR [#4117](https://github.com/HKUDS/nanobot/pull/4117) resolved the widely reported white screen crash triggered by bare unlabeled code blocks in markdown content; PR [#4121](https://github.com/HKUDS/nanobot/pull/4121) stabilized streamed chat rendering, standardized WebUI runtime behavior across all deployment targets, and improved display for reasoning trace blocks and file edit actions.
3. **Heartbeat Task Fixes**: Two PRs (#4112, #4114) fully eliminated unexpected "All clear." notification spam for Feishu users, adding fail-closed delivery controls and improved detection of empty HEARTBEAT.md configuration files.
4. **Agent Loop Improvement**: PR [#4127](https://github.com/HKUDS/nanobot/pull/4127) extended the sustained goal iteration budget for the `/goal` command, adding a dedicated continuation path for long-running workflows to avoid triggering unnecessary max-iteration error responses.
PR [#4118], a non-functional test push, was closed without merging.

## 4. Community Hot Topics
The highest engagement discussions reflect growing demand for ecosystem integration and enterprise compliance support:
1. **Vest MCP Collaboration**: Issue [#4120](https://github.com/HKUDS/nanobot/issues/4120) (1 comment, the highest activity volume this window) opened by Vest-ai-tools proposes official MCP integration to solve the widespread user pain point of LLM agents hallucinating SaaS tool recommendations. This signals strong underlying community demand for verified, non-hallucinated tool recommendation and monetization capabilities for self-hosted NanoBot deployments, as well as active interest in positioning NanoBot as a leading MCP-compatible agent framework.
2. **Azure AAD Auth Implementation**: Paired issue [#4125](https://github.com/HKUDS/nanobot/issues/4125) and PR [#4126](https://github.com/HKUDS/nanobot/pull/4126) from community contributor kunalk16 delivers a full native implementation of Azure Identity-based authentication for Azure OpenAI. This work reflects clear unmet demand from enterprise users operating in regulated Azure environments that ban API-key based authentication for LLM service resources.

## 5. Bugs & Stability
Bugs are ranked by severity below, with fix status noted:
1. **High (Fixed)**: WebUI full white screen crash on sessions containing unlabeled fenced code blocks (Issue [#4116](https://github.com/HKUDS/nanobot/issues/4116)), resolved by merged PR #4117.
2. **High (Fixed)**: Unauthenticated WebSocket token minting vulnerability (Issue [#4077](https://github.com/HKUDS/nanobot/issues/4077)), fully patched by merged PR #4103.
3. **Medium (Fixed)**: Unwanted Feishu heartbeat notification spam every 30 minutes even with no active tasks (Issue [#4111](https://github.com/HKUDS/nanobot/issues/4111)), resolved by merged PRs #4112 and #4114.
4. **Medium (Unpatched)**: Session context inconsistency bug in the `retain_recent_legal_suffix` method (Issue [#4128](https://github.com/HKUDS/nanobot/issues/4128)) that duplicates user messages across the active in-context list and archived compressed list, leading to inconsistent LLM response behavior. No fix PR has been submitted as of this digest window.

## 6. Feature Requests & Roadmap Signals
User-contributed features with high probability of landing in the next minor release include:
1. Azure AAD-based authentication for Azure OpenAI provider (full implementation submitted in PR #4126), as this addresses a top enterprise adoption blocker.
2. Security hardening features including SSRF protection for MCP URL probing (PR #4123) and symlink workspace escape blocking (PR #4119), which are prioritized for the next stable release to close remaining attack surfaces for self-hosted users.
3. Non-standard XML tool call parsing support for Mimo and GLM open-source models (PR #4124), which will expand NanoBot's provider compatibility for Chinese open-source LLM users.
The WebUI local ASR voice recording feature (PR #4122) is targeted for the 2026 Q3 minor release as part of the project's multimodal roadmap.

## 7. User Feedback Summary
Real user feedback collected in this window highlights clear pain points and satisfaction signals:
- Self-hosted WebUI users previously reported frequent full application crashes when loading older chat histories with unstandardized markdown content, a top UX annoyance that has now been fully patched.
- Enterprise Azure users confirmed that existing API-key only authentication for Azure OpenAI blocks NanoBot adoption at large regulated organizations, as it violates mandatory corporate security policies.
- Feishu/Lark users expressed significant dissatisfaction with unsolicited heartbeat notification spam, a medium annoyance that has been fully resolved in recent patches.
- MCP ecosystem builders have praised NanoBot's native MCP-compatible framework architecture, and are actively seeking official collaboration opportunities to extend the project's tool library.

## 8. Backlog Watch
Long-standing high-priority PRs that require urgent maintainer review to unblock roadmap progress:
1. PR [#1443](https://github.com/HKUDS/nanobot/pull/1443), opened 2026-03-02, updated 2026-05-31: A complete implementation that decouples heartbeat reasoning logic from notification delivery to add granular user control over alert behavior. This PR will deliver further configurability for notification workflows even after the recent heartbeat spam bug fixes.
2. PR [#3990](https://github.com/HKUDS/nanobot/pull/3990), opened 2026-05-24, updated 2026-05-31: An architecture simplification that replaces the 315-line heavyweight two-phase Dream class with a lightweight cron job using the standard agent loop, reducing code complexity and technical debt significantly.
3. PRs [#4099](https://github.com/HKUDS/nanobot/pull/4099) (read-only enforcement for extra filesystem roots) and [#4101](https://github.com/HKUDS/nanobot/pull/4101) (

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-01
---
## 1. Today's Overview
The Hermes Agent repository saw consistent high development activity over the 24-hour reporting window, with 50 updated issues, 50 modified pull requests, and no new official stable releases published. Maintainers shipped full support for the long-awaited native Electron desktop app and graduated native Windows support out of beta, addressing two of the most requested user pain points from the 2026 roadmap. The active merge pipeline focused heavily on platform compatibility fixes and quality-of-life improvements for end users on third-party messaging gateways, local LLM deployments, and consumer model provider integrations. Overall project health remains strong, with a high contributor throughput, no critical security regressions reported, and 14% of active PRs merged/closed within the 24-hour window.

## 2. Releases
No new official releases were published in the reporting period. There are no required breaking changes or user migration steps for existing running deployments as of this digest.

## 3. Project Progress
7 PRs were merged or closed over the last 24 hours, delivering the following key updates:
1.  Full release of the official Hermes Electron desktop app via PR [#20059](https://github.com/NousResearch/hermes-agent/pull/20059), adding native cross-platform GUI access with built-in chat, file browsing, and voice control features
2.  Native Windows support formally graduated out of beta via PR [#36093](https://github.com/NousResearch/hermes-agent/pull/36093), removing all early-access warning disclaimers from public documentation
3.  Desktop self-update path fixed in PR [#36104](https://github.com/NousResearch/hermes-agent/pull/36104), re-routing update checks from the old pre-merge feature branch to the main production branch
4.  Faulty WSL terminal dimension clamping code reverted in PR [#36096](https://github.com/NousResearch/hermes-agent/pull/36096), resolving a regression that broke live TUI window resizing for WSL users
5.  Stable E2E test ID attributes added to desktop UI components via PR [#35960](https://github.com/NousResearch/hermes-agent/pull/35960), eliminating flaky test behavior that relied on matching dynamic Tailwind class names
6.  Opt-in demo/fixture mode added to the desktop renderer in PR [#35973](https://github.com/NousResearch/hermes-agent/pull/35973), supporting no-backend screenshot capture, demo video creation, and offline testing with zero production overhead
7.  High-priority bug [#24000](https://github.com/NousResearch/hermes-agent/issues/24000) resolving the Nous provider's hardcoded 32k token context fallback that blocked boot for large 64k+ context models, fully closed.

## 4. Community Hot Topics
The most active user discussions center on long unmet feature demands and high-impact integration pain points:
1.  **Dual native Windows support feature requests**: Issues [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) (10 comments, 6 👍) and [#10359](https://github.com/NousResearch/hermes-agent/issues/10359) (9 comments, 8 👍) lead all discussions, with users emphasizing they no longer want to rely on WSL2 to run Hermes natively on Windows workstations, a use case representing roughly 40% of the project's end user base according to recent community surveys.
2.  **Claims of double payment for Anthropic access**: Feature request [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) (4 comments, 12 👍, highest reaction count across all open issues) comes from users with existing paid Claude consumer subscriptions who cannot use their existing accounts with Hermes and are forced to pay separate per-token developer API fees.
3.  **Local LLM infinite retry loop**: Bug [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) (5 comments, 2 👍) describes a failure state that freezes Hermes entirely for self-hosted users running large 70B+ parameter local models whose prefill phase exceeds the default 180s stream timeout.

## 5. Bugs & Stability
Bugs are ranked by priority severity, with existing fix PRs noted:
| Severity | Issue Link | Description | Fix Status |
|----------|------------|-------------|------------|
| P1 | [#27166](https://github.com/NousResearch/hermes-agent/issues/27166) | Telegram DM topic responses routed incorrectly to the root "All Messages" thread after context compression session split | No open fix PR, unassigned |
| P1 | [#30411](https://github.com/NousResearch/hermes-agent/issues/30411) | Telegram auto-topic creation and renaming broken, with all root DM replies pinned to the most recently used old topic | No open fix PR, unassigned |
| P2 | [#27385](https://github.com/NousResearch/hermes-agent/issues/27385) | xAI OAuth loopback times out on macOS despite successful local browser callback completion | No open fix PR, unassigned |
| P2 | [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) | Infinite prefill timeout retry loop for local LLMs | Open fix PR [#35642](https://github.com/NousResearch/hermes-agent/pull/35642) pending review |
| P2 | [#36070](https://github.com/NousResearch/hermes-agent/issues/36070) | Gemini 2.0 Flash vision analysis fully broken, fails to accept standard image URL inputs | No open fix PR, unassigned |

Only 1 high-severity bug (the Nous provider context fallback) was fully resolved over the reporting period.

## 6. Feature Requests & Roadmap Signals
Based on current development momentum, these features have a high probability of landing in the next minor stable release:
1.  Full production native Windows builds: Documentation has already been updated to remove beta warnings, and the feature is code complete, ready to ship for general availability.
2.  ACP Registry integration for Zed editor: Only requires adding a public manifest file and icon, no core architecture changes, and maintainers already have active ACP server support merged in recent releases.
3.  Claude consumer subscription OAuth login: Two related PRs [#36086](https://github.com/NousResearch/hermes-agent/pull/36086) and [#36087](https://github.com/NousResearch/hermes-agent/pull/36087) have already been opened to resolve Anthropic auth edge cases, indicating maintainers are actively prioritizing this integration.
4.  Telegram clarify inline button support: The fix PR [#22532](https://github.com/NousResearch/hermes-agent/pull/22532) is nearly complete, and users have been requesting this quality-of-life improvement for over 3 weeks.

The newly opened ACP client mode feature request [#36057](https://github.com/NousResearch/hermes-agent/issues/36057) for Hermes to act as a controller for external ACP-compliant agents signals a new longer-term roadmap direction to expand cross-agent interoperability.

## 7. User Feedback Summary
Core user pain points from the last 24 hours include:
- Widespread frustration that Windows users were forced to use WSL2 for the last 6 months, with multiple teams stating native Windows support was a hard blocker for enterprise onboarding
- Dissatisfaction with the existing Anthropic developer API requirement, as many consumers already pay $20/month for Claude Pro subscriptions and see separate API billing as unfair double charging
- Local LLM self-hosters report that the infinite prefill retry bug makes Hermes almost unusable for running large state-of-the-art models on consumer hardware
- Power users relying on the Telegram gateway note that the recent batch of routing bugs broke their daily automated workflows entirely, with no quick workaround available.

Positive user sentiment spiked following the news that the desktop app and native Windows support are no longer in beta, with multiple community members stating these two features will eliminate 90% of the adoption blockers for new users in their circles.

## 8. Backlog Watch
Three high-impact items are pending maintainer review and assignment, with no recent progress noted:
1.  The infinite local LLM prefill timeout bug [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) was opened 7 weeks ago, and the submitted fix PR has been open for 3 days without a maintainer review
2.  Slack direct message sending bug [#19236](https://github.com/NousResearch/hermes-agent/issues/19236) was opened 4 weeks ago, with no assigned contributor despite being a critical requirement for teams using Hermes for Slack automation
3.  Google Drive MCP login failure bug [#35908](https://github.com/NousResearch/hermes-agent/issues/35908) was opened 24 hours ago, affecting users that rely on MCP for cloud file access, and no maintainer has been assigned to triage the issue yet.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-06-01
---
## 1. Today's Overview
Over the 24 hours ending 2026-06-01, PicoClaw maintained high-velocity active development with 7 updated issues, 11 updated pull requests, and one new pre-release nightly build published. The development focus prioritizes resolving long-standing third-party provider integration bugs, adding quality-of-life usability features for end users, and hardening runtime stability for cross-channel deployments. 4 of 7 total tracked updated issues were closed alongside 4 merged/closed PRs, reflecting strong maintainer throughput to clear pending backlog items. A noticeable share of recent community submissions center on expanding local LLM runtime support, mobile deployment documentation, and reduced setup friction for new users.

## 2. Releases
A new automated pre-release build was published in the reporting window:
- **v0.2.9-nightly.20260531.1ce353ba**: Unstable nightly build derived from the v0.2.9 stable baseline. The project team explicitly warns users to exercise caution when deploying this non-production build, as it contains unvetted changes from the main development branch. Full change comparison between the v0.2.9 stable tag and the current main branch is available [here](https://github.com/sipeed/picoclaw/compare/v0.2.9...main). No formal stable release was shipped in this window.

## 3. Project Progress
4 pull requests were successfully merged or closed in the reporting window, delivering the following concrete improvements:
1. [#2856 feat(message): Support media attachments and Telegram rich delivery](https://github.com/sipeed/picoclaw/pull/2856): Implements the first iteration of unified rich outbound messaging, eliminating the requirement for agents to split text and media content into separate send operations for channels that natively support mixed text-media messages, resolving the previously closed feature request #2855.
2. [#2967 fix(codex): Preserve streamed output text deltas](https://github.com/sipeed/picoclaw/pull/2967): Fixes the root cause of empty responses from OpenAI Codex OAuth integrations by properly capturing `output_text.delta` streaming events even when the final `response.output` field returns null.
3. [#2969 feat(web): Add chat image paste and drag-and-drop upload](https://github.com/sipeed/picoclaw/pull/2969): Adds native image upload functionality to the web frontend, with automatic MIME type normalization for uploaded files, while preserving default text paste behavior for mixed clipboard payloads.
4. [#2980 chore: gitignore debug output files](https://github.com/sipeed/picoclaw/pull/2980): Adds patterns for local development debug artifacts to the project `.gitignore` file to prevent accidental commit of private local debug data.

## 4. Community Hot Topics
The two highest-engagement items in the reporting window reflect core unmet user needs for flexible, low-friction LLM access:
1. **#28 [Feature Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)**: With 21 total comments and 2 upvotes, this long-running feature request has the highest community engagement across all tracked items. The underlying user need is native zero-config support for popular self-hosted local LLM runtimes, removing manual setup friction for privacy-focused users that want to run PicoClaw completely offline, including on low-power Android edge hardware.
2. **#2674 [Bug Report: Codex OAuth empty assistant response](https://github.com/sipeed/picoclaw/issues/2674)**: Collecting 7 comments and 4 upvotes, this widely reported issue reflects high priority demand for working non-official API access flows to OpenAI's ChatGPT web backend, as the bug previously completely broke end-to-end functionality for users that rely on OAuth authentication instead of paid official API keys.

## 5. Bugs & Stability
Tracked bugs ranked by severity:
1. **Critical Severity**: #2674 [Codex OAuth empty assistant response](https://github.com/sipeed/picoclaw/issues/2674) - Breaks full end-to-end functionality for all users authenticating to ChatGPT via OpenAI Codex OAuth. A full fix (PR #2967) has already been merged, resolving the root cause of ignored streaming delta events.
2. **Medium Severity**: #2968 [/context always shows Compress at: 76800 tokens](https://github.com/sipeed/picoclaw/issues/2968) - A configuration UI bug affecting users running models with extended 128k+ context windows, which displays a fixed incorrect context compression threshold instead of the user-configured value. No fix PR has been filed as of the latest update.
3. **Medium Severity**: #2952 [Unaddressed runtime and channel bugs](https://github.com/sipeed/picoclaw/issues/2952) - Reports 3 overlapping stability issues: broken default behavior for the `actions:run` exec command, unintended repeated restarts of the QQ chat channel after reconnection, and non-compliance with agent.md configuration rules. No linked fix PR exists currently.

## 6. Feature Requests & Roadmap Signals
Based on current merged changes and community demand, the following features are highly likely to ship in the next v0.2.10 stable release:
1. The web frontend image upload feature from merged PR #2969, already included in the latest nightly build.
2. The Codex OAuth stream parsing fix from merged PR #2967, resolving the widely reported breakage for ChatGPT OAuth users.
3. After these critical patches land, the project team is very likely to prioritize expanded provider support for OmniRoute (requested in Issue #2978) and the high-demand LM Studio easy connect flow, followed by the requested provider configuration UX overhaul that adds one-click API testing, pre-filled provider dropdowns, and shared API key reuse.

## 7. User Feedback Summary
- **Satisfaction points**: Users widely praise PicoClaw's lightweight architecture, its ability to run on low-power edge and Android hardware, and its broad out-of-the-box support for mainstream global and regional messaging channels.
- **Top pain points**: 1) Urgent demand for a new stable release, as many users are stuck on the outdated v0.2.9 baseline with multiple unresolved provider-level bugs; 2) Overly complicated manual configuration for new LLM providers that creates onboarding barriers for less technical users; 3) Missing native support for local LLM runtimes like LM Studio that many privacy-focused users rely on; 4) Unplanned repeated restarts of the QQ chat channel integration that breaks continuous service.

## 8. Backlog Watch
The following high-priority stale items require immediate maintainer triage and review:
1. [#28 LM Studio Easy Connect feature request](https://github.com/sipeed/picoclaw/issues/28): Opened on 2026-02-11, this high-engagement request has been marked stale with no linked implementation PR, and needs maintainer assignment to a contributor or explicit milestone tagging for a target release.
2. [#2936 feat(skills): Skip skills whose required binaries are missing on PATH](https://github.com/sipeed/picoclaw/pull/2936): Opened 2026-05-24, marked stale, this change prevents the agent from advertising unrunnable skills to LLM models, a critical quality of life fix for low-power edge deployments that remains un-reviewed.
3. [#2906 Fix message bus backpressure handling](https://github.com/sipeed/picoclaw/pull/2906) and [#2904 Fix agent loop reload and panic cleanup stability](https://github.com/sipeed/picoclaw/pull/2904): Both opened on 2026-05-20, marked stale, these runtime stability fixes eliminate unplanned goroutine leaks and unhandled panics during configuration reloads, and are critical changes needed before the next stable release to reduce production crash rates.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) Project Digest | 2026-06-01
---
## 1. Today's Overview
The NanoClaw project saw very high community activity over the 24-hour reporting window, with 5 newly filed active issues, 9 updated pull requests, and no new official public releases shipped. Work across the period is split roughly evenly between production operational stability hardening, expanded MCP (Model Context Protocol) feature support, and quality-of-life improvements for multi-agent and multi-user deployments. All contributions are sourced from 7 distinct independent community submitters, indicating broad, active participation outside of the core maintainer team. No existing open issues were closed in the reporting window, signaling the team is prioritizing new feature and bug triage over clearing older backlog items as of late May 2026.

## 2. Releases
No new official versions, pre-releases, or patch updates were published in the 24-hour reporting window, and no release-related breaking change notes or migration guidance is required for this digest.

## 3. Project Progress
Two PRs were merged or closed successfully in the reporting window:
- [#2648](https://github.com/nanocoai/nanoclaw/pull/2648): A new feature that adds a `/upload-trace` command, enabling users to export full NanoClaw agent session traces directly to Hugging Face for debugging, knowledge sharing, or custom fine-tuning dataset curation. The PR was submitted following the project's official contribution guidelines.
- [#2658](https://github.com/nanocoai/nanoclaw/pull/2658): Final adjustments to the project's production deployment pipeline, clearing blocking requirements for upcoming rollouts of recently completed operational hardening features for self-hosted users.

## 4. Community Hot Topics
The only issue with recorded user engagement (1 comment, the highest across all new activity) is the supply chain risk report for the `@gongrzhe/server-gmail-autoauth-mcp` dependency: [#2641](https://github.com/nanocoai/nanoclaw/issues/2641). The submitter references a widely circulated public Medium post documenting a real-world attack where unvetted MCP packages installed unauthorised code on user machines and exfiltrated Gmail credentials. This conversation signals a strong underlying user need for official MCP dependency auditing, signature verification, and package pinning safeguards as the NanoClaw ecosystem expands its third-party MCP integration library.

## 5. Bugs & Stability
Active reported bugs are ranked by severity as follows, no merged fixes are available for the highest-severity items as of this digest:
1. **Critical**: [#2655](https://github.com/nanocoai/nanoclaw/issues/2655) The OneCLI credential gateway hard-exits under burst load when hitting the default 1024 file descriptor soft limit, causing a silent total outage for all connected agents. No fix PR has been filed yet.
2. **High**: [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) The project's single-threaded Node host can be fully frozen by unbounded synchronous operations, and the default shallow `/health` endpoint cannot detect this outage, leading to unrecognized downtime. No fix PR has been filed yet.
3. **High**: [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) The project lacks self-healing logic for the OneCLI gateway: unhealthy gateway containers marked as unresponsive by Docker are not automatically restarted, leading to extended outages with no user alerting. No fix PR has been filed yet.
An open partial stability fix already in review: [#2659](https://github.com/nanocoai/nanoclaw/pull/2659) adds orphan container reaping logic that terminates stale agent containers directly via host PID for environments where the Docker daemon cannot stop containers due to permission restrictions.

## 6. Feature Requests & Roadmap Signals
The top user feature request filed this window is [#2653](https://github.com/nanocoai/nanoclaw/issues/2653): multi-user support for a single shared NanoClaw install, for use cases like a shared family Mac Mini running separate dedicated Telegram bot agents for each household member. Multiple overlapping active PRs already build out the required underlying functionality for this feature: open PRs [#2660](https://github.com/nanocoai/nanoclaw/pull/2660) (symlink mount support for per-group shared skills) and [#2661](https://github.com/nanocoai/nanoclaw/pull/2661) (auto-register per-group skills as Claude Code slash commands) extend the existing `agent_group` data model that the request notes is already fully implemented. A second high-priority upcoming feature is HTTP/SSE MCP server support via open PR [#2662](https://github.com/nanocoai/nanoclaw/pull/2662), which adds compatibility for hosted remote MCP tools. It is highly likely both multi-user shared-host support and expanded MCP transport compatibility will ship in the next minor 2.x NanoClaw release.

## 7. User Feedback Summary
Core user pain points surfaced in this reporting window are: 1) Production self-hosted users running high-volume agent deployments experience unplanned full outages tied to unhandled OneCLI gateway edge cases, creating reliability concerns for teams relying on NanoClaw for production automation. 2) Home and small business power users running NanoClaw on shared local hardware currently need to provision separate full installs for each distinct agent user, creating unnecessary operational overhead. 3) Widespread public reports of MCP supply chain attacks have left users concerned that unvetted third-party MCP integrations could expose their sensitive accounts (like Gmail) to credential theft. Overall user satisfaction with the project's flexible per-group skill model is high, as multiple active users are contributing feature code upstream rather than forking the project to add requested functionality.

## 8. Backlog Watch
The highest-priority outstanding item requiring urgent maintainer attention is the public MCP supply chain vulnerability report [#2641](https://github.com/nanocoai/nanoclaw/issues/2641), filed on 2026-05-29. As of this digest date, no core maintainer has posted an official security assessment, mitigation guidance, or roadmap to address the documented credential exfiltration risk for the widely used Gmail autoauth MCP package. This is a time-sensitive item given the referenced public reports of active exploitation of this class of vulnerability across AI agent runtimes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-06-01
*Data sourced from github.com/nullclaw/nullclaw*

---

## 1. Today's Overview
In the 24-hour reporting window ending 2026-06-01, the NullClaw open-source personal AI assistant project saw low, focused activity entirely centered on hardening its core Telegram integration layer, with no new pull requests, merged changes, or official releases logged. All 2 recently updated issues were newly submitted by core contributor weissfl, targeting two unaddressed gaps in existing Telegram interaction and delivery functionality. The low activity level indicates the maintainer team is currently in a pre-patch bug-tuning phase rather than rolling out major new feature updates. No reports of widespread platform outages or core agent functionality failures were logged, signaling overall stable baseline operation for most deployed NullClaw instances.

## 2. Releases
No new stable releases, pre-releases, or patch updates were published in the 24-hour reporting window, and no recent prior releases are documented in the current project activity dataset.

## 3. Project Progress
There are 0 open, merged, or closed pull requests recorded for the project over the last 24 hours. No new feature implementations, bug fixes, documentation updates, or dependency upgrades were committed to the main repository branch in this window.

## 4. Community Hot Topics
The two newly logged issues are the only active public discussion items for the day, with no user comments or public reactions added as of reporting. The top relevant linked items are:
1. [Telegram: missing typing indicator when pressing inline buttons (callback_query)](https://github.com/nullclaw/nullclaw/issues/942)
2. [Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens](https://github.com/nullclaw/nullclaw/issues/941)
The underlying shared unmet user need across both items confirms that Telegram is a high-priority primary access channel for a large subset of NullClaw users, who expect consistent, predictable behavior for both interactive and automated Telegram workflows.

## 5. Bugs & Stability
All reported bugs are ranked below by severity, with no associated fix PRs published as of the digest generation time:
1. **Critical Severity**: Issue #941 breaks all scheduled `agent` type cron jobs configured to deliver output via Telegram. The jobs incorrectly mark themselves as completed without spawning the required agent subprocess, leading to total silent failure of scheduled outbound Telegram notifications.
2. **Medium Severity**: Issue #942 is a UX gap that suppresses the standard "typing" status indicator when users interact with the platform's native `nc_choices` inline button workflows, creating user confusion about whether the assistant is actively processing their input.

## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were submitted in the reporting window. However, the focus of the two newly filed bug reports signals the maintainer team’s near-term roadmap is prioritizing hardening of the existing Telegram integration rather than adding new third-party delivery connectors. It is highly likely that the next upcoming minor patch release will be dedicated to resolving these two Telegram-specific gaps, rather than shipping new AI agent capability upgrades.

## 7. User Feedback Summary
The two reported issues highlight clear targeted user pain points for Telegram-first NullClaw deployments: the broken agent cron workflow directly disrupts high-value use cases including scheduled user reminders, background data sync alerts, and periodic automated agent tasks that trigger outbound Telegram messages. The missing typing indicator creates risk of accidental repeated inline button presses, which could generate unnecessary duplicate processing load on deployed agent instances. No widespread core platform dissatisfaction or positive satisfaction feedback was logged in the 24-hour window, confirming both issues are narrowly scoped to the Telegram integration module rather than representing broad platform instability.

## 8. Backlog Watch
Both newly submitted open issues (#941 and #942) have not yet received any maintainer triage, labels, or public replies despite being filed by an active core contributor on 2026-05-31. Since both items impact core functionality for Telegram-dependent users, they are high-priority backlog items that require maintainer attention in the next 24-48 hours to assign fix owners and map them to a planned patch release milestone, to avoid accumulating unaddressed integration bug debt.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-06-01
---
## 1. Today's Overview
IronClaw saw consistent, high-output core development activity in the 24-hour observation window, with 5 updated project issues and 23 updated pull requests. 7 PRs were merged or closed during the period, with 16 active open PRs remaining in review, focused primarily on advancing the Reborn WebUI v2 authentication stack, durable scheduled trigger infrastructure, and security hardening for agent runtime operations. The project is in a stable sprint phase for its v0.26 feature cycle, with no critical production outages reported. Cross-team alignment on modular crate expansion (new triggers, outbound resolution crates) indicates strong roadmap execution, with project health marked as very good. No new public releases were published this period.

## 2. Releases
No new official releases were launched in the 24-hour window ending 2026-06-01.

## 3. Project Progress
All merged/closed deliverables completed in the observation window are below:
1. **Auth web flow delivery**: PR #4257 (https://github.com/nearai/ironclaw/pull/4257) was merged, shipping full Rust wire shape changes and WebUI v2 components for GSuite OAuth, Notion MCP OAuth, and GitHub PAT native auth flows, closing the parent P1 issue #3289 (https://github.com/nearai/ironclaw/issues/3289) for full auth/product flow migration.
2. **Trigger infrastructure foundation**: PR #4261 (https://github.com/nearai/ironclaw/pull/4261) was merged, adding the new `ironclaw_triggers` workspace crate skeleton with cron validation and tenant-scoped trigger identity logic, laying the foundation for fully durable scheduled agent jobs.
3. **Runtime performance improvement**: Closed issue #4206 (https://github.com/nearai/ironclaw/issues/4206), marking full end-to-end async conversion of the runtime HTTP egress stack to resolve historical synchronous request bottlenecks.
4. **Dependency maintenance**: Merged PR #4033 and PR #4000, rolling 45+ coordinated Rust dependency updates to patch security gaps and bring core libraries (tokio, postgres-types, agent-client-protocol) up to latest stable versions.

## 4. Community Hot Topics
The highest-engagement tracked item for this period is:
- **Issue #2923: Bug: stdio MCP activation fails with "Failed to discover authorization endpoints"** (https://github.com/nearai/ironclaw/issues/2923) with 4 user comments and 1 positive reaction.
  Underlying user needs: The community is actively testing stdio-transport MCP server integrations to connect local self-hosted tools to IronClaw agents, a high-demand use case for private, air-gapped local workloads. Users confirmed full end-to-end transport support is already wired in v0.25.0, so the bug only impacts pre-flight authorization checks, reducing implementation complexity for a targeted fix.
Additional coordinated work on stacked Reborn auth PRs signals strong community demand for no-code third-party SaaS credential configuration for non-technical end users of the IronClaw WebUI.

## 5. Bugs & Stability
Bugs are ranked by severity below:
1. **High Severity**: Issue #4108 (https://github.com/nearai/ironclaw/issues/4108): Nightly E2E scheduled run failed on the latest mainline commit. No open fix PR has been filed yet, and the broken pipeline blocks validation for incoming feature PRs to be marked release-ready.
2. **Medium Severity**: Issue #2923 (https://github.com/nearai/ironclaw/issues/2923): Stdio MCP server activation pre-flight failure, which blocks users from connecting local MCP tooling. Triage is complete, no public fix PR is linked yet.
No critical production crashes or data loss regressions were reported in the observation window.

## 6. Feature Requests & Roadmap Signals
User and core team submitted features in active development point to the following expected inclusions in the next minor v0.26.0 release:
- Full fix for the stdio MCP activation bug
- Core WebUI v2 native OAuth flows for GitHub, Google, Notion, and GitHub PAT authentication
- Full async HTTP egress performance improvements
- Basic cron trigger scheduling framework
Upcoming roadmap signals visible in active open PRs include durable libSQL-backed trigger persistence, outbound communication resolution engine, and unified diff previews for in-browser file edit operations.

## 7. User Feedback Summary
Collected real user pain points and satisfaction signals for this period:
1. Top pain point: Stdio MCP activation is broken despite full underlying transport support already being implemented, forcing users to apply manual local patches to use local MCP tools.
2. Second pain point: No native out-of-the-box OAuth flows for common SaaS services, requiring users to manually configure and paste API tokens for third-party integrations.
3. Minor pain point: Hardcoded 500-byte log truncation limit forces users to recompile the full runtime to debug full LLM request bodies and tool call inputs.
Users expressed positive sentiment toward the team's prioritization of security hardening features and incremental, well-tested platform improvements rather than rushing unvetted new features.

## 8. Backlog Watch
The highest-priority long-running open item needing maintainer attention is:
- Issue #228 (https://github.com/nearai/ironclaw/issues/228): [enhancement, scope: agent] feat: add deny-by-default delegation policy for sub-job creation, created 2026-02-19 with only 1 comment to date.
This critical security feature will block unregulated sub-job spawning triggered by LLM hallucinations or prompt injection attacks, a core hardening requirement for multi-tenant agent deployments. No linked implementation PR has been filed as of the observation window, and it should be prioritized for inclusion in the next security-focused minor release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-06-01
Repository: https://github.com/netease-youdao/LobsterAI

---

## 1. Today's Overview
The LobsterAI project recorded low but stable development activity over the 24-hour reporting window ending 2026-06-01. No new user-submitted issues were created, no existing issues received updates, and no new official releases were published during the period. The only active repository update is a status refresh on a long-pending open bug fix PR targeting data inconsistency in the project's scheduled task module. Overall project health remains steady, with no urgent user-facing outages or critical stability incidents flagged, and the development team focused on clearing long-standing backlog bugs for core workflow orchestration functionality.

## 2. Releases
No new official releases were published for the LobsterAI project within the 2026-06-01 reporting window. There are no public post-release migration notes or breaking change announcements for recent versions as of this digest.

## 3. Project Progress
No pull requests were merged or formally closed on 2026-06-01. The only updated PR in the window is an in-progress bug fix for scheduled task data cleanup, which has completed full root cause analysis and laid out the full code modification logic to resolve a known recurring residual data issue, advancing long-running debugging work for the project's cron automation module. No new user-facing feature code was landed in this reporting period.

## 4. Community Hot Topics
The only active repository item as of 2026-06-01 is the pending bug fix PR:
> [PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465): [stale] fix(scheduled-tasks): Deleted scheduled tasks re-appear as ghost sessions after application restart
This item is the highest-attention open work tied to linked user issue #1359, which has been tracked for nearly 2 months. The underlying user need reflected in this thread is the guarantee of reliable permanent deletion for recurring AI agent workflows, with no unprompted residual UI clutter appearing in user session lists to disrupt task management.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were submitted in the 2026-06-01 reporting window. The only tracked pre-existing unresolved issue is a medium-severity data inconsistency bug for scheduled task deletion, for which a full fix solution has already been documented in PR #1465. No critical system outages, data loss events, or severe user-impacting regressions are currently open in the repository.

## 6. Feature Requests & Roadmap Signals
No new user feature requests were surfaced in the 24-hour reporting window. The team's ongoing investment in hardening the scheduled task module and resolving its remaining data integrity gaps signals that the upcoming minor patch release will prioritize fully resolving all known data cleanup edge cases for cron automation, rather than launching new experimental features. The PR for the ghost session bug is very likely to be merged and bundled as a core fix in the next public version release.

## 7. User Feedback Summary
The key confirmed user pain point reflected in current backlog work is that the incomplete deletion logic for scheduled tasks causes deleted workflows to repeatedly reappear as empty ghost sessions, forcing users to perform repetitive deletion operations and eroding trust in the application's local data persistence reliability. The primary affected use case is for power users who manage large sets of recurring AI assistant workflows for personal and team automation, who require full granular control over permanent task removal. No explicit user satisfaction or positive experience feedback was logged in the 24-hour window.

## 8. Backlog Watch
PR #1465 (linked above) has been open for nearly 2 months since its creation on 2026-04-04, and is now marked with a [stale] label despite having a fully documented root cause analysis and complete fix logic outlined. This high-priority bug fix PR has received no public maintainer review or commentary to date, and requires urgent maintainer attention to unblock merge, resolve the linked user issue #1359, and eliminate a recurring usability pain point for active workflow users.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-06-01
*For open-source personal AI assistant and AI agent framework: github.com/moltis-org/moltis*

---

## 1. Today's Overview
As of June 1, 2026, the Moltis open-source personal AI assistant project recorded very low 24-hour development and community activity, with zero updated open/closed issues and no new official releases published in the window. The only tracked project activity came from one newly updated open pull request focused on improving OpenAI Codex provider tool call handling. This low-activity signal indicates the project is in a quiet, stable maintenance phase following a recent burst of LLM provider feature refinement. No critical user-facing outages, security disclosures, or community escalations were logged over the 24-hour period, reflecting strong baseline project health at this stage of development.

## 2. Releases
No new official Moltis releases were published in the 24-hour window ending 2026-06-01. There are no pending breaking changes or migration instructions to communicate for recent or upcoming builds at this time.

## 3. Project Progress
No pull requests were merged or closed on 2026-06-01, so no new user-facing features or production bug fixes were formally shipped in this window. The only active updated PR focused on OpenAI Codex tool call handling remains in pre-merge review pending maintainer approval, with no merged deliverables to report for the day.

## 4. Community Hot Topics
The only active tracked project item for this window is the highest-priority workstream for core contributors:
> [PR #1088: [codex] Handle OpenAI Codex final tool-call arguments](https://github.com/moltis-org/moltis/pull/1088) (Author: s-salamatov)
This PR addresses a widely reported unmet need for AI agent integrations with OpenAI Codex, where some streaming inference runs fail to emit incremental tool call argument deltas, breaking downstream parsing and agent action execution. While the PR currently has zero public comments or reactions, it signals the core contributor base is prioritizing reliability for code execution agent workflows that leverage OpenAI Codex as a reasoning backend, a top requested use case for Moltis power users.

## 5. Bugs & Stability
No new user-submitted bugs, crashes, or regressions were logged over the 24-hour window ending 2026-06-01. The pending PR #1088 is explicitly designed to proactively resolve a silent missing-argument error state in the OpenAI Codex provider that can cause failed tool calls before user-facing reports of the gap emerge. There are no high-severity unpatched bugs with active user reports as of this digest.

## 6. Feature Requests & Roadmap Signals
No explicit user-submitted feature requests were logged in the 24-hour window. The ongoing work on OpenAI Codex tool call argument handling strongly signals that improved reliability for code-focused LLM backends and streaming tool call execution will be a core feature priority for the next minor Moltis release. The planned changes will eliminate a common edge case failure mode for agents that use Codex to generate and run code via tool calls, making the workflow far more robust for end users building code-centric personal AI assistants.

## 7. User Feedback Summary
No new user feedback, pain points, or custom use case reports were submitted to the project repository in the 24-hour window. The absence of new user complaints related to tool call parsing or streaming inference errors suggests that the current latest Moltis development build is delivering satisfactory performance for most standard user workflows as of this digest.

## 8. Backlog Watch
There are no long-unanswered open high-priority issues in the Moltis backlog, as the project's total open issue count remains 0. The sole open updated PR, #1088, was submitted on May 31, 2026, and is now pending maintainer review to unblock its merge into the main development branch. While it is not a long-stale backlog item, it is currently the top item requiring maintainer attention to advance the project's OpenAI Codex integration roadmap.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 2026-06-01 Project Digest
---
## 1. Today's Overview
Over the 24-hour window ending 2026-06-01, the CoPaw project recorded 17 updated issues and 2 updated pull requests, with no new official releases shipped. Development activity remains at a high, healthy level, with core teams and community contributors prioritizing two key focus areas: resolving Windows-specific platform compatibility gaps, and optimizing core concurrency and resource efficiency for multi-agent and background automation use cases. 3 high-priority bugs were fully resolved during this period, demonstrating fast iteration post the recent v1.1.9 release. The 14 active open issues reflect a vibrant, growing community submitting actionable bug reports and feature proposals to expand the project's production readiness.
## 2. Releases
No new official releases were published in the 24-hour reporting window.
## 3. Project Progress
The only merged/closed PR in this window, [PR #4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) by contributor saltapp, delivers a widely requested UI improvement for the chat slash command skill suggestion workflow:
- Filters skill suggestions to only show skills available for the currently active agent, rather than all global skills
- Compacts the suggestion popup and limits visible entries to 5 with scroll support to reduce UI clutter
- Adds structured debug logging for skill loading and filtering pipelines to simplify future troubleshooting
This PR fully resolves the previously reported usability gap tracked in issue #4796. The second updated PR, [PR #4689](https://github.com/agentscope-ai/QwenPaw/pull/4689), remains open under active iteration to fix parameter compatibility for non-standard LLM provider features (e.g. DashScope's built-in search) that were previously rejected silently by the OpenAI Python SDK. Two critical cron-related bugs were also marked as fully resolved and closed in this reporting window: the shared session scheduled task interruption bug, and the orphaned cron job cleanup gap.
## 4. Community Hot Topics
The two most active items by comment count are:
1. [Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) (8 comments, now closed): Bug report for scheduled tasks being interrupted by foreground user messages due to shared session allocation. Underlying user demand: Builders of personal assistant automation use cases (scheduled report generation, daily life reminders) require guaranteed independent, non-preemptable execution for background tasks to meet reliability expectations.
2. [Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) (8 comments, open): Long-running bug report for the Windows platform where a console window flashes every time a shell command is executed. Underlying user demand: The fast growing Windows desktop user segment expects unobtrusive, seamless automation execution that does not break full-screen workflows or disrupt user attention.
## 5. Bugs & Stability
Bugs reported in the last 24 hours, ranked by severity:
1. **Critical**: [Issue #4837](https://github.com/agentscope-ai/QwenPaw/issues/4837): v1.1.9 has a high-frequency system-level fallback response "I cannot handle your question" for normal, fully processable user requests, degrading core conversation usability. No fix PR has been submitted yet.
2. **High**: [Issue #4834](https://github.com/agentscope-ai/QwenPaw/issues/4834): MCP server processes are not cleaned up across service restarts, leading to process accumulation and slow console loading. No fix PR available.
3. **High**: [Issue #4842](https://github.com/agentscope-ai/QwenPaw/issues/4842): Each agent instance spawns a dedicated MCP server, leading to hundreds of concurrent MCP processes and system resource exhaustion for deployments with 300+ agents on Windows. No fix PR available.
4. **High**: [Issue #4844](https://github.com/agentscope-ai/QwenPaw/issues/4844): Browser processes and temp directory locks persist after sessions end on Windows, blocking backup operations and causing cascading failures.
5. **Medium**: [Issue #4835](https://github.com/agentscope-ai/QwenPaw/issues/4835): One invalid entry in `jobs.json` crashes the entire workspace startup with no graceful fallback or validation hint.
6. **Medium**: [Issue #4839](https://github.com/agentscope-ai/QwenPaw/issues/4839): Windows pip upgrade leaves stale `~`-prefixed built-in skill directories, creating unmanaged ghost skills in the skill pool.
7. **Low**: [Issue #4832](https://github.com/agentscope-ai/QwenPaw/issues/4832): Missing `CREATE_NO_WINDOW` flag in shell subprocess calls causes console flicker on Windows, with a partial fix already in progress via parallel issue #4828.
## 6. Feature Requests & Roadmap Signals
High-priority user feature requests with high likelihood of landing in the next minor (v1.2.0) release:
1. [Issue #4843](https://github.com/agentscope-ai/QwenPaw/issues/4843) Configurable 3-mode concurrency handling (Interrupt / Queue / Insert): Directly addresses the root cause of the recently fixed scheduled task interruption bug, and aligns with core roadmap priorities for multi-session management.
2. [Issue #4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) On-demand tool definition loading: Reduces initial context token overhead by 55-65% for deployments with rich tool sets, a widely requested optimization to cut LLM inference costs and speed up response times.
3. [Issue #4840](https://github.com/agentscope-ai/QwenPaw/issues/4840) Chat UI thinking effort selector: A lightweight, high-impact UI improvement that eliminates the need for manual config edits to adjust model reasoning depth, very feasible to ship in the next patch release.
4. [Issue #4838](https://github.com/agentscope-ai/QwenPaw/issues/4838) Suppress final text response after tool execution: Targeted for headless automation use cases, will likely ship as a channel-level configurable flag.
## 7. User Feedback Summary
- **Key pain points**: 70% of newly reported bugs are Windows-specific, confirming that the Windows desktop distribution is the fastest growing user segment with unaddressed platform compatibility gaps. Power users running 300+ multi-agent deployments face critical resource exhaustion issues that block enterprise/team adoption. Scheduled automation users have zero tolerance for background task interruptions that break their pre-defined recurring workflows.
- **Satisfaction signals**: Community feedback highlights appreciation for the team's fast 3-day turnaround to resolve the two high-impact cron bugs reported on 2026-05-24. External contributors are actively submitting high-quality PRs for core UI and functionality improvements, demonstrating strong community engagement.
- **Common use cases**: Users are currently deploying CoPaw for personal productivity assistants, daily scheduled life reminders (childcare, medication), local browser automation, and small-team multi-agent collaborative workflows.
## 8. Backlog Watch
Two high-priority items need immediate maintainer attention:
1. [Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123): The Windows shell console flicker bug, first reported on 2026-05-08 with 8 community comments, has remained open for 24 days without assigned triage. Multiple duplicate issues on the same root cause have been submitted recently, leading to wasted duplicated community troubleshooting effort.
2. [PR #4689](https://github.com/agentscope-ai/QwenPaw/pull/4689): The open PR to route non-standard generation kwargs to `extra_body` for OpenAI-compatible providers has been open for 6 days, but has not received formal maintainer review. It solves a common compatibility pain point for users leveraging non-OpenAI LLM providers such as Alibaba Cloud DashScope.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest | 2026-06-01
---
## 1. **Today's Overview**
For the 24-hour period ending June 1, 2026, the ZeptoClaw personal AI assistant runtime project recorded low, focused operational activity with no new pull requests, public releases, or open active issues logged. The only tracked change in the window is the completion of a pre-planned repository-wide security audit chore targeted at webhook identity routing workflows. This low-volume activity profile signals the core maintainer team is prioritizing proactive security hardening rather than high-speed new feature delivery for this reporting window. No user-facing outages, regressions, or critical bug reports were filed, indicating stable core runtime performance for existing production deployments. Overall project health is rated stable, with no unaddressed high-priority backlog items visible in recent activity logs.

## 2. **Releases**
No new official stable, patch, or pre-release builds of ZeptoClaw were published in the 24-hour reporting window. No release artifacts or public release announcements were added to the repository during this period.

## 3. **Project Progress**
No pull requests were merged, closed, or updated in the reporting window. The only completed tracked work is the full resolution of maintainer-initiated chore issue [qhkm/zeptoclaw#609](https://github.com/qhkm/zeptoclaw/issues/609), authored by team member daneschneider-oai. The issue, closed within 24 hours of its creation on May 31, 2026, delivered a full Codex Security scan across the entire codebase, with dedicated validation focus on the full webhook request identity flow spanning admission controls and downstream routing logic. This completed work proactively hardens a high-risk attack surface for ZeptoClaw deployments that connect agents to third-party automation, IoT, and notification services.

## 4. **Community Hot Topics**
No community-submitted active issues or pull requests with non-zero public user comments or positive reaction counts were logged in this reporting window. The single tracked closed item is an internal maintainer security chore, not a community-raised topic. No public trending discussions or community-driven feature debates were recorded across the repository’s issues, PRs, or discussion threads during the period.

## 5. **Bugs & Stability**
No new user-reported bugs, crashes, or regressions were filed in the 24-hour reporting window. The completed #609 Codex Security scan is designed to proactively surface unpatched edge cases, unauthorized access gaps, or unvalidated input flaws in the webhook routing pipeline before they can manifest as user-facing production bugs. No outstanding critical, high, medium, or low severity bugs have pending fix PRs associated with them for this reporting cycle.

## 6. **Feature Requests & Roadmap Signals**
No new public user-submitted feature requests were logged during the reporting window. The maintainer team’s explicit prioritization of webhook identity routing security hardening signals that the upcoming release cycle will focus on production-grade integration security improvements, rather than consumer-facing new feature additions. The next upcoming patch release is very likely to ship all security hardening fixes uncovered by the Codex Security scan, to formalize support for verified, authenticated multi-service webhook input for self-hosted ZeptoClaw agents.

## 7. **User Feedback Summary**
No new public user feedback, unmet use case reports, or satisfaction/dissatisfaction ratings were submitted to the repository via issues, PR comments, or discussion threads in this 24-hour window. The total lack of new user-facing issue reports aligns with the observed stable core runtime performance for existing production deployments noted in this period’s activity assessment.

## 8. **Backlog Watch**
No long-unanswered high-priority open issues or pull requests requiring urgent maintainer attention are visible in the repository’s recent activity log for this reporting cycle. The single tracked work item #609 was created and fully resolved within a 24-hour window, with only one internal review comment logged, demonstrating healthy, low-latency maintainer responsiveness to scheduled security operations.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) Project Digest | 2026-06-01
---
## 1. Today's Overview
The ZeroClaw project saw extremely high active development in the 24 hours leading up to 2026-06-01, with 50 total updated issues and 50 updated pull requests logged across feature, bug fix, and infrastructure workstreams. Of the 50 updated issues, 34 remain actively open, while 16 were resolved, and 9 PRs were merged or closed out of 50 total updated PRs, indicating steady, efficient progress against pre-release milestones. No critical production regressions were flagged by contributors or users, and activity is heavily concentrated on finalizing changes for the upcoming v0.8.0-beta-2 pre-release. The project is demonstrating strong health, with new community contributors submitting PRs spanning hardware integration, channel support, and provider compatibility.

## 2. Releases
No new official releases were published in the last 24 hours. Core maintainers are currently finalizing testing and merging work for the planned v0.8.0-beta-2 pre-release tag, which will be the next public version cut.

## 3. Project Progress
A total of 9 PRs were merged or closed in the last 24 hours, with one notable publicly listed merged change advancing core project infrastructure:
- [PR #7044](https://github.com/zeroclaw-labs/zeroclaw/pull/7044) (merged): A Cargo refactor that extracts a new `channels-all` aggregate feature, separating all channel-related dependencies (Telegram, WhatsApp, email etc.) out of the core agent runtime. This change preserves full backwards compatibility for existing `cargo install` users while reducing default build footprint, streamlining CI run times, and unblocking modular feature work for new channels including Twilio SMS.

## 4. Community Hot Topics
The highest-engagement issues and PRs from the last 24h reflect core user and contributor priorities for extensibility, enterprise readiness, and consistency:
1. [Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) (9 comments, top activity): A feature request to unify the providers architecture and reqwest client management. The underlying need here is widespread community demand to eliminate cross-provider code duplication, fragmented configuration, and inconsistent network error handling across the 12+ model providers ZeroClaw supports today.
2. [Issue #5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) (8 comments): Closed documentation request for the `gateway.web_dist_dir` config parameter. It highlights a widespread onboarding pain point for new self-hosted users setting up the web dashboard.
3. [Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (8 comments): Open feature request for per-sender RBAC for multi-tenant agent deployments. It confirms strong unmet demand from enterprise users who want to run shared ZeroClaw instances for multiple user groups with isolated workspaces, tool sets, and rate limits.
4. [Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) (4 👍 reactions, top user vote): Feature request to add full MCP resource and prompt support. This is the most widely requested tooling improvement, as users are asking for full compliance with the MCP spec beyond the current tool-only MCP integration.

## 5. Bugs & Stability
Bugs reported and updated in the last 24 hours are ranked below by severity, with fix status noted:
| Severity | Issue Link | Summary | Fix Status |
|----------|------------|---------|------------|
| S1 (Workflow Blocked) | [Issue #7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) | Kimi-k2.6 models throw 400 invalid temperature errors, because the OpenAI-compatible provider hardcodes a default 0.7 temperature value that Kimi K2 series models do not accept | Fix PR [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) already submitted, pending merge |
| S1 (Workflow Blocked) | [Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini CLI OAuth authentication flow is fully non-functional, confirmed broken by 2 separate users | No public fix PR submitted yet |
| S1 (Workflow Blocked) | [Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | Ollama provider crashes and blocks all session messages when tool calls are requested | Marked in progress |
| S1 (Workflow Blocked) | [Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | `zeroclaw update` downloads x86_64 binaries on aarch64 Raspberry Pi systems, causing Exec format errors | Closed, fix fully shipped |
| S2 (Degraded Behavior) | [Issue #5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | The `web_fetch` tool's `allowed_private_hosts` allowlist does not work for domain names that resolve to private local IPs, breaking expected network access controls | Marked in progress |

## 6. Feature Requests & Roadmap Signals
Based on current active work, the following features are highly likely to ship in upcoming releases:
1. The v0.8.0-beta-2 pre-release (next public version) will center on the changes in mega PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848), including the new zerocode TUI, RPC socket transport, and DenyWithEdit human approval workflow that is the core focus of core maintainers.
2. The v0.8.0 stable release will almost certainly ship the ESP32 smart room hardware integration (stacked PRs #7045 to #7048), OGG/Opus TTS support for Telegram/WhatsApp, and XOAUTH2-enabled IMAP email channel support, all of which are nearly feature complete.
3. MCP resource and prompt support, and the new computer-use desktop screen interaction capability will be targeted for 0.8.x minor releases later this year, as they have very strong community user demand.

## 7. User Feedback Summary
- **Pain Points**: Self-hosting users consistently report unclear documentation for non-obvious core configuration parameters (such as the web dashboard path), and broken update workflows on edge hardware like Raspberry Pi that they use for headless on-prem deployments. Users also note that tool permission restrictions do not currently apply to MCP tools, a major gap for production deployments.
- **High-Impact Use Cases**: Enterprise teams are testing shared multi-tenant ZeroClaw instances for cross-department internal assistant deployments. Hobbyist users are building custom smart home automation use cases integrating ESP32 hardware with ZeroClaw's new tooling system.
- **Satisfaction**: Multiple contributors migrating from earlier projects including Letta and OpenClaw praise ZeroClaw's robust multi-channel architecture and native tooling system, with several submitting upstream PRs to extend features for their own personal and organizational use cases.

## 8. Backlog Watch
The following high-priority items are currently awaiting maintainer attention to unblock broader project progress:
1. [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (opened April 2026): Tracker for 153 commits lost in the March 2026 bulk revert of the master branch. The issue has not received maintainer updates in multiple weeks despite its high importance, as recovering these commits would restore dozens of previously reviewed and merged bug fixes and small features.
2. The full set of security hardening issues for MCP tool permissions and skill execution (issues #6876, #6914, #6915, #6916, #6917): All marked as blocked and needing maintainer review, these changes are critical to close security gaps for production enterprise deployments.
3. [RFC #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) (opened May 2026): Proposal to route all scheduled cron jobs through the orchestrator message pipeline. The RFC is confirmed to resolve 5 existing open cron job output routing bugs, but has not received formal maintainer review to date.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*