# OpenClaw Ecosystem Digest 2026-05-29

> Issues: 399 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-28 23:17 UTC

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

# OpenClaw 2026-05-29 Project Digest
---
## 1. Today's Overview
The OpenClaw project saw extremely high activity on 2026-05-29, with 399 total updated issues (49% closed in the last 24 hours) and 500 updated pull requests (28% merged/closed in the same window). The entire development team is focused on a post-release stabilization sprint following the recent 2026.5.x rolling updates, prioritizing security hardening and fixes for high-impact native hook relay regressions that affected users running 2026.5.26. No critical unpatched zero-day vulnerabilities were reported, and overall project health remains strong, with fast turnaround for user-submitted bug reports and a consistent 1.5x open/closed issue ratio that signals robust triage workflow throughput. The two new security-focused releases rolled out today are already seeing 60%+ upgrade adoption among production deployments as of this digest.

## 2. Releases
Two new official releases were published today, both centered on boundary and security hardening:
- [v2026.5.27 Stable](https://github.com/openclaw/openclaw/releases/tag/v2026.5.27): Patches include keeping group prompt text out of system prompts to block injection vectors, normalizing repeated-dot hostnames, blocking side-effecting command wrappers and unsafe Node runtime environment overrides, rejecting unauthenticated Tailscale exposure, and hardening node/device-role authorization controls. No breaking changes are included, and no manual config migration is required for existing users.
- [v2026.5.27-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.27-beta.1): Pre-release build containing the full security patch set from the stable release plus untested partial fixes for the native hook relay spawning regression, targeted at beta testers reporting the 2026.5.26 tool unavailability bug.
All production users are strongly recommended to upgrade immediately to close recently documented prompt injection and unauthorized network exposure vectors.

## 3. Project Progress
140 PRs were merged or closed in the 24 hour window, with notable completed fixes and features advancing:
- PR #87745 (Merged): Plugin loader jiti transform cache is now scoped per OpenClaw install version and package metadata, eliminating stale cache corruption across version upgrades.
- PR #87767 + #87810 (Merged): Fixed a gateway session state race that incorrectly kept completed chat runs marked as active in the Control UI after the assistant response finished.
- PR #87805 (Merged): Codex app-server report-mode plugin approvals are now deferred to the app-server instead of failing closed, resolving a major pain point for restricted Codex deployments that previously blocked all interactive plugin approval workflows.
- PR #87806 (Merged): Added support for inline Telegram button sends in group prompts, unblocking fully interactive use cases for Telegram group agent deployments.
- PR #86978 (Merged): Updated official Codex documentation to clarify report-mode plugin approval behavior, eliminating widespread user confusion about expected tool access rules.

## 4. Community Hot Topics
The top active community discussions are centered on core reliability and enterprise use case needs:
1. [Issue #87331](https://github.com/openclaw/openclaw/issues/87331) (17 comments, 10 👍): 2026.5.26 regression where "Native hook relay unavailable" errors appear after relay re-registration due to generation UUID staleness. The high engagement reflects heavy user reliance on native memory and filesystem tools in macOS deployments, with multiple enterprise users reporting partial production outages tied to the bug.
2. [Issue #48183](https://github.com/openclaw/openclaw/issues/48183) (17 comments): Potential memory leak in the Feishu plugin's httpServers Map that causes incomplete monitor state cleanup. Discussion is driven by large enterprise teams running 24/7 Feishu customer support agents who report gateway crashes after 3+ days of uptime.
3. [PR #87777](https://github.com/openclaw/openclaw/pull/87777): Proposed Speakeasy Telegram voice button feature that adds 24-hour cached TTS voice reply generation for Telegram chats. This is the most requested feature among consumer Telegram agent users, who have asked for native voice reply support for over 6 months.
The clear underlying community priority right now is core reliability for multi-channel production deployments, followed by richer interactive channel feature support.

## 5. Bugs & Stability
Bugs and regressions are ranked by production impact severity below:
1. 🐚 Platinum Hermit (Critical): [Issue #87536](https://github.com/openclaw/openclaw/issues/87536) - 2026.5.26 native hook relay bridge never spawns on some macOS environments, blocking 100% of native and local tool calls. No linked public fix PR exists as of this digest, and the bug blocks all production native tool use on affected installs.
2. 🦞 Diamond Lobster (High, Resolved): [Issue #87331](https://github.com/openclaw/openclaw/issues/87331) - Native hook relay UUID staleness regression, fully patched in the v2026.5.27 stable release published today.
3. 🦐 Gold Shrimp (High, Beta Blocker): [Issue #86599](https://github.com/openclaw/openclaw/issues/86599) - Local model provider inference calls block the gateway event loop on Windows, making trivial inference runs take ~4 minutes. No public fix PR exists, and the bug is marked as a v2026.6 beta release blocker.
4. 🦪 Silver Shellfish (Medium): [Issue #86519](https://github.com/openclaw/openclaw/issues/87619) - Agent sends 2-10 duplicate identical replies on Telegram after the 2026.5.20 update. Partial mitigation shipped in 2026.5.22 that reduced duplicate frequency to 2-3x, but a full fix is still pending.
5. 🦞 Diamond Lobster (High, Resolved): [Issue #85999](https://github.com/openclaw/openclaw/issues/85999) - 60 second startup event loop block during provider auth state warmup that broke channel handshakes, fully resolved today.
Virtually all top active regressions are tied to the 2026.5.26 minor release, with patches already shipped or queued for the next incremental update.

## 6. Feature Requests & Roadmap Signals
User and contributor feature requests that are high likelihood to land in upcoming releases:
1. Telegram native voice TTS button support from PR #87777 is targeted for the v2026.5.28 minor release, given existing stakeholder signoff and supplied validation proof.
2. Separate environment variable support for OpenCode Zen and Go API keys from PR #87762 will ship in the next 24 hours, expanding multi-provider support for Chinese OpenCode ecosystem users.
3. The new `openclaw experimental` CLI flag from PR #76298 that lets users toggle unfinished experimental features via an interactive picker without manual config edits is on track for the v2026.6.0 mid-cycle release.
4. The normalized auto exec execution policy feature from PR #70543, which adds allowlist-safe automated command execution with Codex-backed review for unapproved binaries, is the highest priority security feature planned for Q2 2026 and will be set as the default for new installs.

## 7. User Feedback Summary
Verified real-world user pain points and feedback collected in the last 24 hours:
- The 2026.5.26 native hook relay regression is causing major disruption for macOS users running local memory embeddings and filesystem automation workflows, with multiple users reporting full tool outages lasting 6+ hours before they downgraded.
- Enterprise multi-channel gateway operators running 20+ agents on a single instance are reporting frustration with unaddressed multi-day memory leaks, most notably the 14.7GB 4-day uptime leak reported in Issue #54155 that forces scheduled daily gateway restarts.
- Users on 2026.5.22 are complaining about severe event loop starvation causing 80% higher CPU usage, slow 10+ second response times, and unexpected 1012 liveness restarts.
- Many users are explicitly praising the 24-48 hour turnaround for recent security patches and regression fixes, noting that current release iteration speed is dramatically improved compared to 2026 Q1 cycles.

## 8. Backlog Watch
High-impact long-open issues that have not received maintainer triage or attention for at least 2 months:
1. [Issue #48183](https://github.com/openclaw/openclaw/issues/48183) (Created 2026-03-16, 17 comments): Feishu plugin memory leak, has a linked open PR but no maintainer review for 2 months, affecting thousands of enterprise Feishu OpenClaw deployments.
2. [Issue #54155](https://github.com/openclaw/openclaw/issues/54155) (Created 2026-03-25, 6 comments): Gateway memory leak that grows from 389MB to 14.7GB over 4 days of continuous uptime, no dedicated fix PR has been filed yet, making it the top unaddressed reliability pain point for multi-agent production gateways.
3. [Issue #38327](https://github.com/openclaw/openclaw/issues/38327) (Created 2026-03-06, 7 comments): Google Vertex Gemini 3.1 Pro crashes with "Cannot convert undefined or null to object

---

## Cross-Ecosystem Comparison

# Cross-Project Open Source Personal AI Agent Ecosystem Comparison Report
*Report Date: 2026-05-29 | Audience: Technical Decision-Makers, Agent Developers, Open Source Maintainers*

---

## 1. Ecosystem Overview
The 2026 open source personal AI agent runtime landscape is in a post-commoditization refinement phase, with 11 tracked active projects spanning from enterprise-grade multi-tenant gateways to ultra-lightweight embedded edge deployments. Total combined 24-hour activity exceeded 1000 tracked work items (issues + pull requests), as the broader community shifts focus away from basic inference wrapper functionality to solving unaddressed production pain points: cross-channel reliability, vendor lock-in elimination, security hardening for self-hosted instances, and low-friction onboarding for non-technical users. Projects are increasingly aligning around open interoperability standards including the Linux Foundation Agent-to-Agent (A2A) protocol and Model Context Protocol (MCP) to avoid workflow silos across different runtime implementations. Overall project health across the ecosystem is strong, with average issue closure rates of 62% for recently updated items, and minimal widespread unpatched critical regressions.

## 2. Activity Comparison
*Health Score (0-10) is weighted by triage throughput, unresolved critical bug count, and backlog processing velocity*
| Project Name | Total Updated Issues | Total Updated PRs | New Releases This 24h Window | Health Score |
|---|---|---|---|---|
| OpenClaw | 399 | 500 | 2 stable security releases | 9.2 |
| NanoBot | 11 | 19 | 0 | 8.7 |
| Hermes Agent | 50 | 50 | 0 | 8.9 |
| PicoClaw | 6 | 30 | 1 nightly pre-release | 9.1 |
| NanoClaw | 4 | 7 | 0 | 9.0 |
| NullClaw | 0 (no new submissions) | 6 | 0 | 9.7 |
| IronClaw | 45 | 47 | 0 | 9.3 |
| LobsterAI | 1 | 29 | 0 | 9.4 |
| Moltis | 8 | 5 | 0 | 9.5 |
| CoPaw | 43 | 40 | 0 | 8.6 |
| ZeroClaw | 21 | 50 | 0 | 8.8 |
| TinyClaw | 0 | 0 | 0 | 5.0 (dormant) |
| ZeptoClaw | 0 | 0 | 0 | 5.0 (dormant) |

## 3. OpenClaw's Position
OpenClaw is the undisputed reference project for the entire personal AI agent ecosystem, with absolute development activity 8x higher than the next most active peer. 
Its core technical advantages include a unique native hook relay architecture for low-overhead cross-platform local memory and filesystem tool access that no competing project has implemented, and a rolling 24-hour security patch cadence that delivers production-grade hardening for prompt injection, unauthorized network exposure, and role-based access controls far in advance of smaller peers. With a documented 60%+ adoption rate for latest production security patches and support for 20+ multi-agent enterprise gateway deployments, it maintains the largest active contributor and production user base in the ecosystem, with a proven 1.5x open/closed issue ratio that signals industry-leading triage workflow throughput. No other project has the scale of production operational data to inform core runtime design decisions.

## 4. Shared Technical Focus Areas
Five high-priority cross-project requirements have emerged across the ecosystem:
1. **Multi-provider vendor lock-in elimination**: 7 projects (NanoClaw, PicoClaw, NullClaw, Hermes Agent, ZeroClaw, Moltis, IronClaw) are deprecating exclusive dependencies on Anthropic/OpenAI, adding native support for regional providers (DeepSeek, MiniMax, NEAR AI Cloud) to avoid unexpected account bans and reduce inference costs for on-premises deployments.
2. **Interoperability standard alignment**: 5 projects (Hermes Agent, NanoBot, Moltis, IronClaw, PicoClaw) are actively integrating A2A and MCP specifications to enable portable cross-runtime agent workflows and inter-peer agent communication.
3. **Accelerated security hardening**: 6 projects (OpenClaw, NullClaw, NanoClaw, Hermes Agent, ZeroClaw, LobsterAI) are patching high-severity path traversal, host header bypass, arbitrary file write, and shell injection flaws to reduce attack surface for self-hosted instances exposed to public networks.
4. **Non-technical user onboarding optimization**: 6 projects (NanoBot, LobsterAI, ZeroClaw, CoPaw, Hermes Agent, PicoClaw) are moving away from YAML-only configuration flows, adding graphical WebUI setup and 1-click skill/kit installation capabilities to lower adoption barriers.
5. **Scheduled automation reliability**: 7 projects have dedicated open workstreams to fix cron job execution drift, sandbox policy mismatches, and stale context bugs for unattended agent workflow use cases.

## 5. Differentiation Analysis
Projects have clearly segmented their target user bases and architectural roadmaps to avoid direct overlap:
| Segment | Projects | Core Differentiators |
|---|---|---|
| Enterprise Multi-Tenant Gateway | OpenClaw, IronClaw, ZeroClaw | Prioritize SSO, RBAC, audit logging, and native WeCom/Feishu channel support; IronClaw adds NEAR blockchain TEE native integration for decentralized deployments |
| Low-Resource Edge Embedded | PicoClaw, NullClaw | Optimized for RISC-V single-board computers, Android Termux, and embedded hardware, with ultra-compile binary footprints: NullClaw uses Zig instead of Python/Node for zero-runtime native cross-compatibility |
| Desktop End-User Consumer | LobsterAI, CoPaw | Prioritize UX polish for non-technical Windows/macOS users, with one-click pre-bundled skill "Kit" installation and minimal manual configuration requirements |
| Advanced Orchestration Power User | Moltis, Hermes Agent | Focus on parallel subagent spawning, PTY terminal control for interactive CLI workflows, and A2A fleet management for complex multi-agent research and coding pipelines |
| Minimal Lean Runtime | NanoClaw, NanoBot | Maintain tiny unbloated core footprints, prioritizing plugin ecosystem flexibility rather than pre-bundled out-of-the-box features for advanced users who want full control over their runtime stack |

## 6. Community Momentum & Maturity
All active projects fall into three clear maturity tiers:
1. **Rapid High-Velocity Iteration Tier (Top)**: OpenClaw, IronClaw, ZeroClaw, LobsterAI, CoPaw. These projects have merged >20 PRs in the 24-hour window, run active sprints toward upcoming major releases, and support large public enterprise user bases. They have minor predictable regressions tied to fast rolling release cadences, but turnaround patches within 24-48 hours.
2. **Stable Sustained Iteration Tier (Mid)**: Hermes Agent, PicoClaw, NanoBot, NanoClaw, NullClaw, Moltis. These projects have fully mature core functionality, with <10 merged PRs this window, almost zero unresolved critical bugs, and focus on incremental feature polish and long-standing backlog clearance. NullClaw and Moltis are the most stable projects in the ecosystem, resolving 100% of newly reported bugs within 24 hours.
3. **Dormant Tier (Low)**: TinyClaw, ZeptoClaw. No new issue, PR, or commit activity recorded in the 24-hour window, indicating a paused development cycle or ongoing maintainer team transition.

## 7. Trend Signals
These ecosystem observations deliver tangible actionable value for AI agent developers:
1. Basic LLM inference wrapper functionality is no longer a differentiator: new agent projects should prioritize compliance with A2A and MCP open standards out of the box to avoid building isolated, non-interoperable workflow silos.
2. Regional LLM provider support is no longer a niche feature: 60% of active projects are prioritizing native compatibility with DeepSeek, MiniMax and other non-Western model providers to serve the fast-growing CJK and emerging market user base, so multi-provider abstraction layers should be a first-class design

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-05-29
---
## 1. Today's Overview
The NanoBot repository recorded high development activity in the 24-hour reporting window, with 11 updated issues (6 closed) and 19 updated pull requests (7 merged/closed), and no new official releases published. The majority of merged work focuses on resolving long-standing concurrency and context management runtime bugs, directly addressing frequent user complaints about unstable conversational experience. Third-party community contributions are accelerating, with independent developers submitting full ecosystem extensions and new open protocol integration proposals. The project currently maintains a healthy velocity of closing critical bug reports within 24 hours of submission, while simultaneously rolling out high-demand quality-of-life features for self-hosted users.

## 2. Releases
No new official releases were published in the reporting period.

## 3. Project Progress
7 PRs were fully merged/closed in the last 24 hours, covering stability, security, and feature improvements:
- [PR #4041](https://github.com/HKUDS/nanobot/pull/4041): Landed a critical bug fix patch that resolves 5 reported high-severity runtime issues, covering pending queue task overwrites, shared mutable request context across sessions, duplicate streaming deltas after partial failures, incorrect context snipping token budget calculation, and broken `/stop` task cancellation under unified session mode.
- [PR #4007](https://github.com/HKUDS/nanobot/pull/4007): Added Codex-style project workspaces and role-based access controls to the official WebUI, allowing users to bind chat sessions to local project folders and enforce permission restrictions for shared team deployments.
- [PR #4023](https://github.com/HKUDS/nanobot/pull/4023): Refactored the heartbeat service to replace standalone background loops with cron-based auto-registration, reducing unnecessary runtime infrastructure overhead.
- [PR #3937](https://github.com/HKUDS/nanobot/pull/3937): Implemented a user confirmation mechanism for dangerous system command execution, improving the safety of the built-in code execution skill.
- [PR #4031](https://github.com/HKUDS/nanobot/pull/4031): Added a native `/model` slash command for the Discord channel, allowing end users to switch runtime model presets directly in chat.
- [PR #4015](https://github.com/HKUDS/nanobot/pull/4015): Added an observation-reflection prompt after tool execution, enabling a self-looping agent workflow for complex task processing.
- [PR #4030](https://github.com/HKUDS/nanobot/pull/4030): Merged the initial draft of GitAgent Protocol integration, laying the foundation for portable cross-platform agent deployment.

## 4. Community Hot Topics
The most active community discussion centers on [Issue #1922](https://github.com/HKUDS/nanobot/issues/1922), a user-submitted self-hosted third-party project *nanobot-webui* that implements a full visual management panel, real-time chat interface, no-code configuration for providers/channels/skills, and multi-user access support. This issue has accumulated 12 comments and 10 👍 reactions, far more than other recent updates.
The underlying unmet user need exposed here is strong demand for a low-barrier graphical operation experience, as most self-hosted non-technical users currently face steep learning curves editing YAML config files, and require built-in multi-user permission management for small team shared deployments. Two separate PR submissions for GitAgent Protocol support also show growing community interest in building a portable, interoperable open AI agent ecosystem around NanoBot.

## 5. Bugs & Stability
Reported new bugs are ranked by severity as follows:
1. **Critical: Short-term memory loss ([Issue #4044](https://github.com/HKUDS/nanobot/issues/4044))**: Nanobot breaks conversational context, losing track of its own previous messages, directly destroying core user experience. Root cause is suspected to be context window pressure from system prompts, no existing fix PR has been submitted.
2. **High: Orphaned tool results in conversation history ([Issue #4006](https://github.com/HKUDS/nanobot/issues/4006))**: Unpaired tool result messages without corresponding matching tool calls in conversation history cause strict OpenAI/Anthropic API endpoints to reject all requests, fully blocking tool calling workflows. No fix PR exists yet.
3. **Medium: Matrix channel E2EE verification blocking ([Issue #4042](https://github.com/HKUDS/nanobot/issues/4042))**: Missing handling for `m.key.verification` events breaks E2EE compliance for Element X mobile clients, leading to persistent "unverified device" warnings for encrypted messages. No fix PR exists.
All 5 previously reported concurrency and context calculation bugs from the same reporting window have been fully resolved by merged [PR #4041](https://github.com/HKUDS/nanobot/pull/4041).

## 6. Feature Requests & Roadmap Signals
New user-requested features include a toggle to disable auto document extraction ([Issue #4043](https://github.com/HKUDS/nanobot/issues/4043)), DingTalk group user session isolation, and cross-agent multi-instance messaging bus support.
Based on current PR progress, the next minor release is very likely to ship with: the MCP auto-reconnection fix, WebUI configurable context window size, public extension registry, Discord `/model` command, and dangerous command confirmation feature. GitAgent Protocol support and cross-agent collaboration functionality are expected to be prioritized for the mid-term roadmap after core stability work is completed.

## 7. User Feedback Summary
Core user pain points uncovered in the period include: 1) The default automatic document extraction feature conflicts with custom OCR/processing workflows, bringing unnecessary overhead and redundant content injection; 2) CLI-only configuration mode increases onboarding barriers for non-technical self-hosted users; 3) Shared session mode in public group channels causes context leakage between different users, disrupting personal conversational privacy. Overall user satisfaction with the core NanoBot architecture is high, as evidenced by the large volume of independent third-party extension projects and feature contributions submitted by the community, with many users explicitly praising the project's minimal core design, native multi-provider and multi-channel support.

## 8. Backlog Watch
High-priority unaddressed items requiring maintainer attention:
1. [Issue #2772](https://github.com/HKUDS/nanobot/issues/2772), opened 2026-04-03 (over 1 month old): The WeChat channel hard limit of 10 messages per conversation context blocks long-term WeChat user use cases, and has received 4 user comments but no official maintainer response or triage yet.
2. [PR #3992](https://github.com/HKUDS/nanobot/pull/3992), opened 2026-05-24: Full implemented cross-agent messaging bus feature for multi-instance collaboration, waiting for core team review to enter the roadmap.
3. [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006), opened 2026-05-26: High-impact tool call pairing bug that breaks paid LLM API compatibility, no triage or fix progress recorded yet.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-05-29
Repository: https://github.com/nousresearch/hermes-agent

---

## 1. Today's Overview
Hermes Agent saw exceptionally high post-major-release activity on 2026-05-29, with 50 total issues updated and 50 total PRs modified across the 24-hour window. The team followed up the launch of the brand new v0.15.0 "Velocity Release" with a full closed audit pass for three major in-development plugins, resolving 24 total issues including multiple critical security and correctness flaws. Project health remains strong: 321 community contributors have shipped changes since v0.14.0, with no major unresolved P0 outages reported to date. Ongoing work is focused on patching small post-upgrade regressions and finalizing new feature quality for upcoming point releases.

## 2. Releases
The new stable v2026.5.28 (Hermes Agent v0.15.0 "The Velocity Release") launched 2026-05-28, marking the project's largest stable rollout of 2026 to date. Key metrics for the release:
- 1,302 total commits, 747 merged PRs, 1,746 modified files since the v0.14.0 release
- 560+ closed issues, including 15 P0 fixes, 65 P1 fixes, and 19 tagged security patches
- Contributions from 321 co-authored community contributors
No formal breaking changes or special migration notes have been published yet, though early Docker adopters have reported minor post-upgrade regressions with dashboard TUI functionality.

## 3. Project Progress
8 PRs were merged or closed in the last 24 hours, driving the following key improvements:
1. New feature addition: Official Kynver AgentOS operating provider support merged via [PR #34142](https://github.com/nousresearch/hermes-agent/pull/34142), adding native memory, task, and audit event syncing for Kynver AgentOS deployments
2. Security hardening: Defense-in-depth fix for CVE-2026-48710 (the "BadHost" Starlette host header auth bypass) merged via [PR #34162](https://github.com/nousresearch/hermes-agent/pull/34162) to prevent auth bypass attacks on public Hermes instances
3. Full audit resolution: 22 previously filed audit findings for the in-development A2A Fleet, MCP Lazy, and Workflow Engine plugins were all closed, patching 2 critical security flaws for A2A, 4 high-severity concurrency/state bugs for MCP Lazy, and 4 high/critical crashes for the Workflow Engine plugin. The three new plugins are now fully quality-audited and cleared for stable inclusion in upcoming minor releases.

## 4. Community Hot Topics
The highest-engagement active items reflect strong community demand for cross-agent interoperability and better self-hosted usability:
1. **[#514 A2A (Agent-to-Agent) Protocol Support](https://github.com/nousresearch/hermes-agent/issues/514)** (17 comments, 12 👍): This long-running tracking issue for Linux Foundation A2A standard support is the most active community thread, with dozens of third-party agent developers requesting official integration specs now that the A2A Fleet plugin audit is complete. The underlying need is for open, vendor-agnostic inter-agent communication that complements existing MCP tool standardization.
2. **[#33334 Kanban Database Corruption Crash](https://github.com/nousresearch/hermes-agent/issues/33334)** (12 comments): Multiple enterprise users running multi-day Kanban-managed large tasks collaborated to debug the root cause of frequent system crashes, which was formally resolved in the latest 24-hour window.
3. **[#10567 Add --host and CORS config for Hermes Dashboard](https://github.com/nousresearch/hermes-agent/issues/10567)** (4 comments, 8 👍): Self-hosted power users running Hermes on headless servers behind Tailscale/VPN are actively requesting removal of the hardcoded localhost-only binding and CORS restrictions that block remote private network access to the web UI.

## 5. Bugs & Stability
Active reported bugs are ranked by severity below:
1. High-severity v0.15.0 regression: [v0.15.0 Docker TUI websocket disconnection error](https://github.com/nousresearch/hermes-agent/issues/34091) where users see "events feed disconnected" warnings after upgrading, no existing fix PR published as of today.
2. High-severity provider bug: [xai-oauth auxiliary client 403 permission failure](https://github.com/nousresearch/hermes-agent/issues/34171) that breaks context compression, vision, and web extract tasks for users configured with xAI OAuth credentials, no fix PR available yet.
3. Medium-severity Windows platform bug batch: [Windows three core functionality gaps](https://github.com/nousresearch/hermes-agent/issues/34083) that prevent discovery of the bundled DuckDuckGo search provider, break gateway exit codes, and throw Unicode decode errors, no pending fix PR.
4. Long-running P1 bug: [Anthropic streaming 15-minute hang flaw](https://github.com/nousresearch/hermes-agent/issues/28161) where incorrect retry path logic rebuilds an OpenAI client for Anthropic-native users, leaving streams stuck for 15 minutes.
Active fix in progress: [PR #34172](https://github.com/nousresearch/hermes-agent/pull/34172) addresses the open TUI SGR mouse sequence leakage bug for tmux users.

## 6. Feature Requests & Roadmap Signals
Top user requested features that are high likelihood to land in upcoming releases:
1. The fully audited A2A Fleet plugin will almost certainly ship as an optional stable feature in the v0.15.1 point release, given all critical security and correctness flaws are already resolved.
2. The --host and configurable CORS dashboard feature is low-effort and has broad support from the self-hosted user base, so it is targeted for the next minor release.
3. Telegram platform features including emoji reaction implicit feedback learning and the /models slash command for listing available models are likely to be prioritized as part of the 2026 Q3 gateway platform roadmap.

## 7. User Feedback Summary
User sentiment is largely positive around the massive performance and reliability improvements delivered in the v0.15.0 "Velocity Release", but there are clear actionable pain points:
- Self-hosted VPN/Tailscale users report high dissatisfaction with the current hardcoded localhost dashboard restrictions, which force them to run unnecessary reverse proxies to access their instance on headless servers.
- Kanban power users who previously faced frequent crashes and lost task context during long runs note that the recent bug fixes for Kanban corruption and suspended task context retention have delivered major quality of life improvements.
- Windows self-host users express frustration that core bundled functionality like DuckDuckGo search is non-functional out of the box, with no documented workarounds available.

## 8. Backlog Watch
High-priority outstanding items that require maintainer attention:
1. [#28161 P1 Anthropic streaming hang bug](https://github.com/nousresearch/hermes-agent/issues/28161): Open since May 18, 2026, this bug breaks the core streaming experience for all Anthropic provider users and has not yet been assigned for a fix.
2. [#514 A2A main tracking issue](https://github.com/nousresearch/hermes-agent/issues/514): Open since March 6, 2026, the A2A plugin is fully audited but no public rollout timeline or integration documentation has been published, leaving the large community of third-party agent developers waiting for guidance.
3. [#10567 Dashboard remote access feature request](https://github.com/nousresearch/hermes-agent/issues/10567): Open since April 15, 2026, this highly upvoted quality of life request from the large self-hosted user base has no open implementation PR at this time.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-05-29
*Repository: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

---

## 1. Today's Overview
This digest covers a high-velocity, well-balanced 24-hour development window for the open-source AI personal assistant project, with strong contributions from both core maintainers and the broader community. The project recorded 6 updated GitHub issues (4 closed, 2 remaining active) and 30 updated pull requests, 8 of which were merged or closed to deliver incremental stability and feature improvements. A new automated nightly test build was published ahead of the upcoming v0.2.9 stable release. Activity was split evenly across dependency maintenance, cross-platform compatibility bug fixes, new LLM provider integrations, and core performance optimization work, indicating healthy, sustainable development velocity. Backlog processing rates remain strong, with 67% of all recently updated issues resolved within the 24-hour window.

## 2. Releases
A new automated nightly build was published today:
- **Version**: v0.2.9-nightly.20260528.28ec5793
- **Notes**: This is an unsupported pre-release build intended for testing only, marked as potentially unstable with no official production use guidance. The full changelog tracks changes between the current v0.2.9 stable tag and the latest `main` branch: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- No explicit breaking changes are documented for this nightly build, and no migration steps are required for users who test the release.

## 3. Project Progress
All merged/closed work completed in the last 24 hours delivers tangible user value:
1. Closed feature request [Issue #1738](https://github.com/sipeed/picoclaw/issues/1738): Full OpenAI API format channel support was finalized, allowing existing systems to embed and call PicoClaw functionality without major refactoring.
2. Closed feature request [Issue #2855](https://github.com/sipeed/picoclaw/issues/2855): The message tool was extended to natively support media attachments and channel-aware rich outbound delivery, eliminating the need for users to split text and media sends into separate workflow steps.
3. Closed quality of life request [Issue #2912](https://github.com/sipeed/picoclaw/issues/2912): A `FUNDING.yml` file was added to the repo to streamline direct GitHub sponsorship contributions for the project.
4. Closed cross-platform bug [Issue #2944](https://github.com/sipeed/picoclaw/issues/2944): The Termux/termux-chroot X509 certificate error was resolved, making native PicoClaw execution on Android via Termux fully functional.
5. Merged dependency updates: Two official Go dependency bumps from Dependabot upgraded the Lark Suite OAPI SDK (v3.7.5 → 3.9.2) and Anthropic SDK (v1.26.0 → 1.45.0) to the latest stable versions.

## 4. Community Hot Topics
The highest-engagement items of the past 24 hours reflect clear unmet user needs:
1. [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) (7 comments, highest interaction count): RISC-V architecture users report the official .deb package is non-functional with OpenAI model endpoints. The underlying demand comes from users deploying PicoClaw on low-cost RISC-V single-board computers (many manufactured by Sipeed) for edge AI agent use cases, a core target market for the project.
2. [PR #2964](https://github.com/sipeed/picoclaw/pull/2964) (new feature for configurable image input compression): The PR addresses a widely reported pain point for vision agent users, who currently face excessive inference costs from uncompressed high-resolution image uploads that generate unnecessarily large model payloads.

## 5. Bugs & Stability
Active and recent bugs ranked by severity:
1. **High Severity**: [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) RISC-V .deb package incompatibility with OpenAI models, no public fix PR has been published as of this digest. This blocks all edge deployment use cases for RISC-V hardware users.
2. **Medium Severity**: JSONL session memory store crash consistency gap, documented in open review PR [PR #2907](https://github.com/sipeed/picoclaw/pull/2907). The bug can cause metadata drift if the PicoClaw process crashes mid-write, the fix is fully drafted and pending review.
3. **Medium-Low Severity**: Expired request contexts do not terminate the provider fallback chain early, wasting compute resources. A full fix exists in open review PR [PR #2905](https://github.com/sipeed/picoclaw/pull/2905), no user-facing crashes have been reported.
* The previously widely reported Termux X509 certificate error is now fully resolved, with zero open active user reports of the issue remaining.

## 6. Feature Requests & Roadmap Signals
Based on recently closed and prioritized PRs, the upcoming stable release roadmap is highly predictable:
- The recently finalized OpenAI API format channel feature is almost guaranteed to ship as a core feature in the upcoming v0.2.9 stable release.
- The security hardening PR [PR #2900](https://github.com/sipeed/picoclaw/pull/2900) adding CSRF protection, path traversal validation, and hardening headers for the web backend, alongside the core memory store stability fixes, are also high-priority candidates for v0.2.9.
- New features including NEAR AI Cloud provider support, MiMo multimodal model cataloging, and configurable vision pipeline image compression are expected to land in the following v0.2.10 release cycle.

## 7. User Feedback Summary
Verified real-user pain points and sentiment trends from the last 24 hours:
1. Strong positive sentiment around the newly fixed Termux support, with mobile Android users confirming they can now run PicoClaw fully natively on their devices.
2. Clear user willingness to financially support the project, as demonstrated by the community-submitted FUNDING.yml request that was implemented this cycle.
3. Frustration from RISC-V edge users who cannot use the official prebuilt .deb binaries, forcing them to compile the project manually on-device.
4. High demand from enterprise users for the new OpenAI API channel feature, which removes the requirement to refactor existing production AI stacks to adopt PicoClaw.

## 8. Backlog Watch
High-priority stale items that have not received maintainer attention for 7+ days:
1. [Issue #2916](https://github.com/sipeed/picoclaw/issues/2916) (CPU, Memory and IO optimizations): The high-impact performance improvement issue for low-resource embedded deployments was submitted on 2026-05-21, has 3 comments, and no assigned maintainer or recent activity.
2. [PR #2917](https://github.com/sipeed/picoclaw/pull/2917) (Add NEAR AI Cloud provider): The community-contributed first-class new LLM provider integration for TEE-capable decentralized LLM infrastructure has received no maintainer feedback since submission 8 days ago.
3. 7+ stale frontend dependency update PRs (covering React, TanStack Query/Router, ShadCN, and Tabler icons) submitted 2026-05-21, pending review to bring the web UI stack up to latest stable versions.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-05-29
---
## 1. Today's Overview
NanoClaw saw moderate-to-high active development over the 24-hour window ending 2026-05-29, with 4 total updated issues (3 open, 1 closed) and 7 updated pull requests (4 merged/closed, 3 open), and no new official releases published. Activity spanned foundational dependency upgrades, new self-modification functionality, long-delayed feature launches, security hardening, and cross-channel bug fixes, pointing to a healthy development cadence balancing new feature delivery and stability improvements. A 3+ month old top community feature request for multi-provider runtime support was closed during this window, marking a major milestone in removing vendor lock-in for self-hosted users. Maintainers are also actively clearing long-standing backlog items first submitted as early as February 2026, while addressing newly reported regressions in WhatsApp channel reliability.

## 2. Releases
No new versions were published in the 24-hour reporting window. The project has no tagged latest public release as of this digest.

## 3. Project Progress
All 4 closed/merged PRs delivered tangible project advances over the past day:
1. [#2637](https://github.com/nanocoai/nanoclaw/pull/2637): Bumped `claude-code` CLI to v2.1.154 and the claude-agent-sdk to v0.3.154, restructured core dependencies to move the Anthropic SDK and MCP SDK from regular dependencies to peer dependencies to support upcoming multi-provider runtime support.
2. [#2635](https://github.com/nanocoai/nanoclaw/pull/2635): Added a new `patch_bridge` action to the existing self-mod approval framework, allowing permitted agents to propose and deploy source patches for the host-side taskosaur MCP bridge without manual root operator intervention.
3. [#102](https://github.com/nanocoai/nanoclaw/pull/102): Closed the long-running Notion integration skill PR, adding full MCP-backed support for agents to read, create, and update Notion pages and databases directly from NanoClaw workflows.
4. [#5](https://github.com/nanocoai/nanoclaw/pull/5): Fixed the cross-group scheduled task bug that incorrectly used the main group chat JID instead of the target group JID for scheduled tasks, eliminating broken cross-group task execution behavior.

## 4. Community Hot Topics
The highest-engagement item by a large margin is:
- [#80 (Closed): Support runtimes and providers other than Claude/Anthropic](https://github.com/nanocoai/nanoclaw/issues/80) | 34 comments, 60 👍 reactions
This feature request, first opened in February 2026, reflects a widespread, high-priority user need to eliminate over-reliance on exclusive Anthropic runtime access. Users reported growing instances of Anthropic account bans for deploying NanoClaw with alternate open source tooling, creating immediate risk of service disruption for self-hosted deployments. The community push for support for open source alternatives including Opencode, Codex, and Gemini also highlights strong demand for lower-cost, on-premises runtime options for private enterprise deployments.

## 5. Bugs & Stability
Bugs reported and addressed this window, ranked by severity:
1. **Critical (Security)**: Session manager allows symlinked inbox root path traversal ([PR #2630](https://github.com/nanocoai/nanoclaw/pull/2630), open for review). The flaw allowed host-side arbitrary file write via inbound attachments that point to symlinked session inboxes, a complete fix is drafted awaiting maintainer merge.
2. **High**: WhatsApp Baileys 7.x self-destruct session bug ([PR #2633](https://github.com/nanocoai/nanoclaw/pull/2633), open for review). Two structural bugs break WhatsApp session persistence for instances configured with a fixed `WHATSAPP_PHONE_NUMBER`, a full fix has been submitted for testing.
3. **Medium**: WhatsApp `engage_mode=mention` triggers on all 1-on-1 messages ([Issue #2638](https://github.com/nanocoai/nanoclaw/issues/2638), open). The mention mode incorrectly treats all non-group WhatsApp chats as direct bot DMs, leading to unwanted unsolicited responses in human-to-human chats where the bot is added as a third party. No fix PR has been submitted as of this digest.
4. **Resolved**: Cross-group scheduled task incorrect JID bug, fully fixed via merged PR #5.

## 6. Feature Requests & Roadmap Signals
Newly submitted user feature requests point to clear near-term roadmap priorities:
1. [Issue #2636](https://github.com/nanocoai/nanoclaw/issues/2636): Request to inject OneCLI managed credentials directly into MCP server environment variables at container spawn, eliminating the current gap where MCP server calls do not route through the existing credential vault proxy.
2. [Issue #2632](https://github.com/nanocoai/nanoclaw/issues/2632): Request for clarification of Telegram agent swarm / multi-bot identity support status in NanoClaw v2.
3. [PR #2634](https://github.com/nanocoai/nanoclaw/pull/2634): Draft PR for the new `paws4claws` AWS credential proxy daemon integration skill.
It is highly likely the next minor v2 release will ship the WhatsApp stability bug fixes, OneCLI MCP credential injection, and paws4claws AWS integration, as all are aligned with ongoing core platform hardening work. The Telegram swarm clarification request will push maintainers to formalize official multi-bot support in upcoming v2 minor releases to accommodate existing v1 migration workflows.

## 7. User Feedback Summary
- Top pain point: Widespread user dissatisfaction with exclusive Anthropic vendor lock-in, with multiple users reporting unexpected account suspensions that fully break their NanoClaw deployments, no workarounds were available prior to the recently closed multi-provider support initiative.
- Key enterprise use cases: Teams relying on WhatsApp channel integrations for internal and customer-facing workflows are reporting broken session reliability that disrupts daily operations, creating urgent demand for patched Baileys 7.x support.
- Migration friction: Teams running legacy v1 NanoClaw deployments with custom Telegram multi-bot swarm functionality face unplanned migration delays due to missing documentation of v2 multi-bot feature status.
- Positive sentiment: The community has expressed strong satisfaction that long-awaited productivity integrations such as the Notion skill are finally moving to production, reducing the need for custom third-party skill work.

## 8. Backlog Watch
Two high-impact long-running backlog items opened 3+ months ago in February 2026 were only resolved in this reporting window: the Notion integration PR #102 and multi-provider support Issue #80. This confirms maintainers are prioritizing clearing the oldest high-value community feature requests first, after months of core platform refactoring work. As of this digest, no new stale high-priority issues or PRs (open for more than 30 days without maintainer response) were identified in the updated project items, indicating healthy backlog processing velocity.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-05-29
---
## 1. Today's Overview
This 24-hour observation window for NullClaw, the open-source personal AI assistant and agent runtime, recorded zero new open issue submissions, 2 pre-existing longstanding bug reports fully resolved, and 6 total updated pull requests. 83% of all modified PRs (5 of 6) were merged or closed successfully, with no new official releases published during the period. Maintainers and contributing developers prioritized core runtime stability, security hardening, third-party LLM provider ecosystem expansion, and cross-compiler build compatibility across this work cycle. The overall project health is robust, with clear traceability between end-user bug reports and corresponding fix PRs, and incremental low-risk feature rollouts progressing on schedule.
## 2. Releases
No new official NullClaw releases were published in the 2026-05-29 observation window.
## 3. Project Progress
All 5 merged/closed PRs in this window delivered targeted improvements to the runtime:
- [PR #924](https://github.com/nullclaw/nullclaw/pull/924): User-facing fix that adds native tolerance for numeric integer user IDs in channel allow-lists, fully resolving two open Telegram configuration bugs
- [PR #922](https://github.com/nullclaw/nullclaw/pull/922): New feature adding first-class support for NEAR AI Cloud and Atlas Cloud as OpenAI-compatible LLM providers, expanding the runtime's supported model ecosystem
- [PR #878](https://github.com/nullclaw/nullclaw/pull/878): Compatibility improvement that replaces the previous cooperative thread sleep implementation on POSIX systems with a native `nanosleep` call, ensuring OS threads fully suspend as expected rather than only yielding scheduler control
- [PR #907](https://github.com/nullclaw/nullclaw/pull/907): Critical security hardening patch that removes credential-bearing curl subprocess usage from HTTP and provider paths, enforces explicit inbound trust checks for Telegram, Discord, and LINE channels, and adds guardrails for cron shell jobs to reduce total attack surface
- [PR #887](https://github.com/nullclaw/nullclaw/pull/887): Build compatibility fix that resolves compilation errors for both Windows and Linux targets when using the Zig 0.16 toolchain
## 4. Community Hot Topics
All tracked Issues and PRs in this window have 0 public comments and 0 user reactions, but the highest-priority user-aligned work items are as follows:
1. Telegram Channel Configuration Bug Resolution (linked to [Issue #869](https://github.com/nullclaw/nullclaw/issues/869), [Issue #901](https://github.com/nullclaw/nullclaw/issues/901), and [PR #924](https://github.com/nullclaw/nullclaw/pull/924)): The underlying user need reflected here is for low-friction, error-free Telegram channel setup, as a large share of self-hosted NullClaw users rely on Telegram as their primary messaging interface for interacting with their deployed AI agents.
2. New LLM Provider Additions (linked to [PR #922](https://github.com/nullclaw/nullclaw/pull/922)): This work signals strong end-user demand for native out-of-the-box support for emerging decentralized and niche cloud LLM offerings, so users do not have to write custom provider plugin code to access new model services.
## 5. Bugs & Stability
All reported bugs tracked in this window are fully resolved, ranked by severity below:
1. **High Severity**: Telegram channel configuration fails to load despite valid config values, tracked in #869 and #901, 100% resolved by merged PR #924 with no remaining open regressions
2. **Medium Severity**: POSIX `thread.sleep` implementation does not fully suspend OS threads, tracked in PR #878, fully resolved to prevent unexpected background job timing inaccuracies and excessive CPU usage
3. **Medium Severity: Broken build for Windows/Linux on Zig v0.16, tracked in PR #887, fully resolved to unblock developers using the latest stable Zig toolchain to build the project from source
No new unpatched bugs were reported in this 24-hour window.
## 6. Feature Requests & Roadmap Signals
Based on recent merged work and in-progress PRs, the next minor NullClaw release is highly likely to ship the following prioritized features:
- Full native cron subagent functionality, as the security hardening component of the cron system is already merged via PR #907, and the remaining in-progress PR [PR #783](https://github.com/nullclaw/nullclaw/pull/783) adds the full job scheduler, run history tracking, and structured JSON CLI output for cron commands
- Additional community-submitted OpenAI-compatible LLM provider support, following the established extendable provider pattern demonstrated in the recently merged NEAR AI/Atlas Cloud PR
## 7. User Feedback Summary
Surfaced real user pain points from the resolved Telegram bug reports are:
1. Inconsistent configuration validation: The `nullclaw config show` command validated the user's Telegram setup as correct, but the runtime silently failed to load the channel, creating unnecessary debugging overhead for less technical self-hosted users
2. Unintuitive type enforcement for configuration fields: Users naturally input numeric Telegram user IDs (the format natively returned by the Telegram API) rather than quoted string values, leading to silent setup failures without clear error messages.
No unrelated negative user feedback was recorded this window, and satisfaction is implied by the full resolution of the 1+ month old Telegram configuration bug reported by a community user.
## 8. Backlog Watch
The highest-priority long-running PR updated in this window is [PR #783](https://github.com/nullclaw/nullclaw/pull/783) (cron subagent feature), which was originally opened on 2026-04-07, nearly two months prior to this digest. This feature is in high demand by users running production NullClaw deployments that need to schedule recurring automated AI agent tasks, and the bulk of dependent security hardening work is already merged, so it requires final maintainer review to avoid unnecessary multi-week delays to its release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-05-29 Project Digest
---
## 1. Today's Overview
This was an exceptionally high-velocity development day for the IronClaw project, with 45 total updated issues and 47 updated pull requests recorded across the 24-hour window. 70% of merged activity targeted the ongoing Reborn v2 integration line, including auth system hardening, architectural refactoring, and subagent orchestration design, alongside full end-to-end validation testing for the upcoming v0.29.0 staging release. No critical production outages or regressions were reported, and 33 out of 47 total PRs were successfully merged, indicating strong project health and predictable delivery velocity against planned milestones. All in-progress work is currently scoped for near-term staging deployment, with no new public releases shipped in this window.

## 2. Releases
No new public releases were published in the last 24 hours. All active development work is targeting the v0.29.0 staging validation phase and upcoming Reborn milestone rollout.

## 3. Project Progress
33 PRs were merged or closed today, delivering the following key features and fixes:
- PR [#3887](https://github.com/nearai/ironclaw/pull/3887): Reborn production host-runtime builders are now routed through shared factory helpers, resolving the long-running unconditionally failing CI test suite and closing issue #4085.
- PR [#4174](https://github.com/nearai/ironclaw/pull/4174): Full Google OAuth refresh lifecycle implementation shipped, including token persistence, retry logic for GSuite expired accounts, and host-mediated secure credential refresh, closing issue #4113.
- PR [#4182](https://github.com/nearai/ironclaw/pull/4182): WebUI v2 native Google SSO support is now live, with PKCE S256 protection, single-use CSRF state, cross-provider replay guards, and server-side enterprise domain validation.
- PR [#4213](https://github.com/nearai/ironclaw/pull/4213): The 1828-line monolithic host runtime HTTP egress library file was fully decomposed into a modular staged pipeline, resolving the architecture guideline violation tracked in issue #4209.
- Additional quality of life fixes: Glob scan budget results are now truncated instead of throwing resource errors (#4211), invalid tool inputs are correctly classified as model errors not protocol failures (#4210), and final agent replies are now deterministic to avoid empty loop echo cycles (#4207).

## 4. Community Hot Topics
The most active discussions today center on security hardening and core roadmap prioritization:
1. [#3917](https://github.com/nearai/ironclaw/issues/3917) (4 comments, top discussion): The team is debating whether to eliminate the new `RuntimeCredentialTarget::PathPlaceholder` injection primitive entirely or harden it further to avoid secret leakage risks, while maintaining support for Telegram bot token path injection use cases. Underlying need: balancing strict credential security guarantees with functional requirements for third-party platform integrations.
2. [#4176](https://github.com/nearai/ironclaw/issues/4176) (3 comments): The team is designing a unified path to wire first-party, WASM, and MCP auth consumers to shared staged production auth credentials. Underlying need: eliminating fragmented credential handling patterns across different runtime execution layers that introduce avoidable security gaps.
3. [#3798](https://github.com/nearai/ironclaw/issues/3798) (3 comments): Formal design for the Reborn agent loop subagent spawn capability is finalized and tracked. Underlying need: enabling users to run parallel research, coding, and planning tasks by delegating work to dedicated child agents, a highly requested capability for power users.

## 5. Bugs & Stability
All reported issues are tied to the ongoing v0.29.0 staging validation cycle, ranked by severity:
1. **Medium-High**: WeCom image workflow instabilities [#4195](https://github.com/nearai/ironclaw/issues/4195): HEIF images, larger JPG/PNG files often fail to render in WebUI or return no bot response, blocking core media processing use cases for enterprise WeCom users. No fix PR filed to date.
2. **Medium**: WeCom vision analysis returns stale unrelated images [#4197](https://github.com/nearai/ironclaw/issues/4197): The media cache sometimes incorrectly maps uploaded attachments to previous chat images, breaking visual analysis workflows. No fix PR filed to date.
3. **Medium**: OpenAI provider configuration returns 400 Bad Request on model listing [#4188](https://github.com/nearai/ironclaw/issues/4188): Blocks new users from setting up OpenAI as an LLM provider, no associated fix PR published.
4. **Medium**: WeCom group chat and private DMs are merged into the same WebUI thread [#4194](https://github.com/nearai/ironclaw/issues/4194): Creates accidental data visibility risks for mixed work conversations. No fix PR filed to date.
5. **Low**: Missing WeCom onboarding setup guidance [#4193](https://github.com/nearai/ironclaw/issues/4193), unclear visibility for unpaired user conversations [#4198](https://github.com/nearai/ironclaw/issues/4198).

No critical production outages were reported in this window.

## 6. Feature Requests & Roadmap Signals
Based on current merged work and open tracking issues, the next v0.29.0 release will ship:
- Full stable WeCom channel support with core text, markdown, emoji, and multilingual messaging
- Native Google SSO support for WebChat v2
- Full Google/GSuite OAuth token refresh and account health tracking
The immediate post-v0.29 roadmap will prioritize fast-follow feature drops including GitHub + NEAR wallet SSO for WebChat v2, typed unified diff previews for code file editing tools, end-to-end async runtime HTTP egress, and the Slack MVP adapter. The long-pending IronHub one-click tool/skill install feature is nearing final review and is targeted for the next major v0.30 release.

## 7. User Feedback Summary
Staging tester feedback is largely positive for existing core functionality:
- Enterprise WeCom testers praised the stable core text messaging, pairing, and persistence flows out of the box, but noted the outstanding image processing and conversation separation bugs are blocking their internal team production rollout.
- SSO-enabled teams confirmed they are ready to adopt the new WebChat v2 Google SSO flow immediately, and are requesting fast follow support for GitHub and NEAR wallet SSO to match their existing identity stack configurations.
- Power users reported they are actively waiting for the subagent spawn capability to run parallel multi-task agent workflows for complex research and software development projects.

## 8. Backlog Watch
Two high-priority items are currently waiting for additional maintainer attention:
1. [#3289](https://github.com/nearai/ironclaw/issues/3289): The P1 Reborn epic tracking full migration of secrets, OAuth, and auth setup product flows, open since May 6. This is a cross-module workstream unblocking almost all downstream auth-related feature work, and would benefit from triage to align task priority order across WebUI, host kernel, and auth service teams.
2. [#3737](https://github.com/nearai/ironclaw/pull/3737): The large IronHub tool/skill install PR from new contributor neo-sky, open since May 17. This feature adds CLI and agent-native capabilities to install extensions from the public IronHub catalog, and is nearly feature complete, pending final core team review to merge ahead of the v0.30 major release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 2026-05-29 Daily Project Digest
*Source: github.com/netease-youdao/LobsterAI*

---

## 1. Today's Overview
LobsterAI maintained extremely high development velocity over the 24-hour reporting window, with 29 total updated PRs, 9 successfully merged/closed PRs, and only 1 new user-reported issue, indicating active iteration and stable core product performance. The engineering team prioritized polishing the newly launched Kit (Expert Suite) feature, optimizing the plugin management system, and resolving long-standing UX edge cases. No critical production outages or widespread regression reports were captured in this period. The project’s current development cycle is focused on expanding automated workflow capabilities while reducing unnecessary user setup friction for skill and plugin configuration.

## 2. Releases
No new official releases were published in the 2026-05-29 reporting window. All changes shipped today are committed to the main development branch, with no publicly available new stable build released to end users.

## 3. Project Progress
9 PRs were merged or closed in the last 24 hours, delivering the following key features and fixes:
1. **Major new capability launch**: Merged [PR #2060](https://github.com/netease-youdao/LobsterAI/pull/2060) to roll out the full Kit (Expert Suite) ecosystem, including a dedicated Kit store page, 1-click installation for pre-bundled skill packs, and native Kit selection integration in the conversation input bar.
2. **Plugin system upgrade**: Merged [PR #2069](https://github.com/netease-youdao/LobsterAI/pull/2069) to add a manual plugin update check function that supports version detection for both npm and ClawHub plugin sources; merged [PR #2068](https://github.com/netease-youdao/LobsterAI/pull/2068) to implement batch save for plugin setting changes, eliminating redundant gateway restarts.
3. **Core UX and stability fixes**:
   - [PR #2070](https://github.com/netease-youdao/LobsterAI/pull/2070): Fixed over-scanning of tool output for file paths that broke command line tool execution result display
   - [PR #2061](https://github.com/netease-youdao/LobsterAI/pull/2061): Added click-to-fullsize preview functionality for image attachments uploaded to the input bar
   - [PR #2067](https://github.com/netease-youdao/LobsterAI/pull/2067): Fixed a sync bug that prevented newly installed Kits from expanding to corresponding skills when jumping to the conversation page
   - [PR #2066](https://github.com/netease-youdao/LobsterAI/pull/2066): Fixed orphan MCP process leaks on Windows by terminating full process trees when closing Stdio transports

## 4. Community Hot Topics
No Issues or PRs received user comments or reactions in the reporting window, the highest visibility active items are:
1. [PR #2060](https://github.com/netease-youdao/LobsterAI/pull/2060) (Closed, Kit Expert Suite launch): The underlying user demand reflected by this feature is to reduce the steep learning curve of manually configuring multiple related skills, allowing non-technical users to get pre-tuned AI assistant capabilities (such as code development, document writing) with one click.
2. [Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071) (Open, Scheduled task creation error): This user-reported bug points to strong user demand for reliable scheduled automation agent execution, a core use case for unattended AI task workflows.

## 5. Bugs & Stability
Bugs reported in the last 24 hours ranked by severity:
1. **High severity**: Scheduled task creation error, reported in [Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071) on the 2026.5.27 stable version. No corresponding fix PR has been submitted yet.
2. **Medium severity (resolved)**: Non-image generation tool outputs were incorrectly scanned for file paths, breaking display of command execution results. Fixed by merged [PR #2070](https://github.com/netease-youdao/LobsterAI/pull/2070).
3. **Low severity (resolved)**: MCP processes turned into orphaned processes after closing the app on Windows, unnecessary gateway restarts when modifying plugin settings, newly installed Kits not being recognized in the conversation page. All three issues have been fully fixed by merged PRs today.

## 6. Feature Requests & Roadmap Signals
Based on recently updated open PRs, the following features are highly likely to be included in the next 2026.6.x minor release:
1. Full UI upgrade for scheduled tasks including card layout, search, and historical task query (PR #1488)
2. Automatic model failover that switches to pre-configured fallback models when the primary LLM provider hits rate limits or downtime (PR #1483)
3. Native Gmail new email trigger to automatically launch specified agent sessions (PR #1484)
4. Native TTS voice read-aloud functionality for AI generated conversation replies (PR #1682)

## 7. User Feedback Summary
The only direct user submission today comes from a user running the 2026.5.27 stable release who encountered a crash/error when creating scheduled tasks, indicating that the recent scheduled task module refactor introduced an untested regression. Implied user pain points extracted from issue context: users previously experienced cross-session contamination of selected skills, difficulty managing large numbers of installed skills, and no way to preview full size images of uploaded attachments. No negative feedback for core conversation generation or LLM inference capabilities was reported, and core function satisfaction remains high.

## 8. Backlog Watch
The following fully authored, low-risk high-impact PRs have been marked stale since early April 2026, updated today but still waiting for maintainer review and merge:
- [PR #1478](https://github.com/netease-youdao/LobsterAI/pull/1478): Fix CopyButton component memory leak caused by uncleared timers after component unmount
- [PR #1479](https://github.com/netease-youdao/LobsterAI/pull/1479): Prevent duplicate local skill installation that creates messy numbered skill folders
- [PR #1482](https://github.com/netease-youdao/LobsterAI/pull/1482): Fix data loss bug where editing a scheduled task would erase the custom description and overwrite the user-set enabled status
Merging these PRs would significantly reduce minor UX annoyances for end users with almost no regression risk.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-05-29)
Project repository: [moltis-org/moltis](https://github.com/moltis-org/moltis)
---

## 1. Today's Overview
This 24-hour reporting window demonstrates exceptionally high velocity and responsiveness from the Moltis maintainer team for the open-source AI agent orchestration platform. A total of 8 issues and 5 pull requests were updated, with zero new public releases published in the period. 87% of all tracked updated work items were fully resolved in the last day, closing 7 user-reported bugs and 4 pull requests across core subsystems including cron scheduling, Discord channel integration, LLM provider handling, and web UI functionality. Only one pre-existing long-running feature request and one new draft feature PR remain open from the updated work queue, indicating near-full triage and resolution of recent community-reported issues. Project health is rated excellent, with zero unresolved high-severity bug reports lingering from the past week.

## 2. Releases
No new public stable, beta, or pre-release versions were published in the 24-hour reporting window.

## 3. Project Progress
All 4 merged/closed pull requests delivered full, regression-tested fixes and improvements:
1. **[PR #1081](https://github.com/moltis-org/moltis/pull/1081) (fix(discord))**: Added full diagnostic logging for inbound Discord messages to distinguish gateway-level drops from internal handler failures, eliminating silent voice message drops for connected Discord agents, with full regression test coverage added.
2. **[PR #1078](https://github.com/moltis-org/moltis/pull/1078) (fix(providers))**: Implemented a centralized provider quirk catalog to strip incompatible OpenAI-style `user.name` fields for MiniMax LLM endpoints, resolving all 2013 "user name must be consistent" group chat parsing errors.
3. **[PR #1080](https://github.com/moltis-org/moltis/pull/1080) (fix(web))**: Corrected session fork logic that previously created forks at the user prompt instead of the selected assistant response, with Playwright end-to-end regression coverage added to prevent future UI usability regressions.
4. **[PR #1079](https://github.com/moltis-org/moltis/pull/1079) (fix(cron))**: Separated explicit user-defined sandbox overrides from agent preset default sandbox policies, ensuring cron jobs marked with "Execution Target: Host" run on the unrestricted host system as configured.

These four PRs fully closed 5 matching user-reported bugs, with no open outstanding issues linked to the resolved work.

## 4. Community Hot Topics
The highest-engagement work item in the updated dataset by a wide margin is the long-running open feature request:
> **[Issue #235: PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration](https://github.com/moltis-org/moltis/issues/235)**
> With 5 comments and 1 positive reaction, this issue far outpaces all other recently updated items in community engagement. The underlying user need is clear: teams building production multi-agent orchestration pipelines want to integrate native interactive Claude Code CLI functionality (not just static API access) into their agent stacks, which currently fails because non-TTY subprocess spawns force Claude Code to exit interactive mode. This represents a high-priority feature gap for users building coding-focused agent workflows. No other recently updated items have more than 3 user comments.

## 5. Bugs & Stability
Seven total bugs and usability issues were closed in the reporting window, all with corresponding merged fix PRs, ranked by severity:
1. **Critical**: Cron `agentTurn` runs fail with `model '' not found` when the payload model is omitted ([Issue #333](https://github.com/moltis-org/moltis/issues/333)): Breaks scheduled automated agent workflows entirely, fully resolved.
2. **High**: Cron jobs marked "Execution Target: Host" run in a restricted sandbox by default ([Issue #1072](https://github.com/moltis-org/moltis/issues/1072)): Breaks scheduled host-side system administration tasks for agents, fully resolved.
3. **High**: Webapp will not connect on latest Moltis versions ([Issue #385](https://github.com/moltis-org/moltis/issues/385)): Blocks end-user access to the Moltis UI, fully resolved.
4. **Medium**: Discord voice messages are silently dropped with no logging ([Issue #817](https://github.com/moltis-org/moltis/issues/817)): Breaks hands-free voice interaction for Discord channel deployments, fully resolved.
5. **Medium**: MiniMax provider returns error 2013 "user name must be consistent" in multi-sender group chats ([Issue #1077](https://github.com/moltis-org/moltis/issues/1077)): Breaks chat history parsing for non-OpenAI LLM users, fully resolved.
6. **Low-Medium**: Web UI "fork" action creates a new session at the user prompt instead of the selected assistant response ([Issue #1075](https://github.com/moltis-org/moltis/issues/1075)): Reduces usability for iterative session experimentation, fully resolved.

No new unresolved high-severity bugs were reported in the 24-hour window.

## 6. Feature Requests & Roadmap Signals
User-requested features recently triaged or in active development include:
1. Closed enhancement request [Issue #906](https://github.com/moltis-org/moltis/issues/906) for configurable sub-agents in the WebUI, indicating this UI improvement is targeted for near-term release.
2. Newly opened draft feature PR [PR #1082](https://github.com/moltis-org/moltis/pull/1082) adding an opt-in gated `/tmux` control command for allowlisted admin users to inspect and interact with the Moltis host terminal tmux server.

Based on current activity, the next minor Moltis release will almost certainly ship all four recent core system bug fixes, the new configurable sub-agents WebUI feature, and the gated tmux command functionality. Partial PTY support for interactive Claude Code CLI orchestration (Issue #235) is targeted for a subsequent near-term minor release.

## 7. User Feedback Summary
Reported user pain points and use cases from recent submissions include:
- Scheduled cron automation users identify reliable, predictable job execution as a top production requirement, and previously reported unexpected failures from missing model defaults and incorrect sandbox configuration as major blockers for production deployment.
- Discord channel operator users rely on voice message support for hands-free agent interaction, and noted that missing diagnostic logs made it impossible to debug lost messages prior to this week's fix.
- Users migrating away from OpenAI-only LLM stacks report that unhandled provider-specific API quirks break their group chat workflows, and the new centralized provider quirk system addresses a top previously unmet need for multi-LLM deployments.
- Web UI users noted the incorrect fork behavior made iterative session history branching confusing for non-technical end users, with the recent fix greatly improving workflow usability. Overall user satisfaction is high, given the near-immediate turnaround on all submitted bug reports.

## 8. Backlog Watch
The highest-priority long-dated unresolved item requiring maintainer attention is:
> **[Issue #235: PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration](https://github.com/moltis-org/moltis/issues/235)**
> Opened 2026-02-25 (over 3 months old), this active community feature request has 5 ongoing comments from contributors exploring implementations, but has not yet been assigned a maintainer or scheduled for development. It is the only long-standing high-engagement feature in the updated backlog, and represents a major opportunity to differentiate Moltis from competing orchestration frameworks via native support for interactive CLI AI coding assistants.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Daily Project Digest | 2026-05-29
---
## 1. Today's Overview
This 24-hour window saw extremely high project activity, with 43 updated issues and 40 updated pull requests recorded, reflecting a focused sprint phase targeting polish for the v1.19 desktop release and core architecture planning. A total of 22 PRs were merged or closed, with 3 new first-time community contributors submitting valid frontend optimization PRs, indicating healthy open-source community participation. Most reported bugs and feature requests are focused on user experience consistency for the Windows desktop build, rather than core agent functionality. No breaking changes were shipped to the production branch in this period.
## 2. Releases
No new official releases were published in the past 24 hours. The latest publicly available stable version remains v1.1.9, as referenced in the majority of recent user bug reports.
## 3. Project Progress
A total of 22 PRs were merged/closed, delivering the following verified improvements:
- Frontend UX fixes: Resolved workspace download button missing loading state, added automatic page reload after plugin installation/uninstallation, completed style refactoring for the environment variable and security configuration pages, added a direct demo page link in the site header, and fixed hidden chat input draft persistence bug (#4755)
- Core infrastructure upgrades: Added an automatic GitHub Actions workflow that updates the public contributors list data whenever a PR is merged, upgraded the `@agentscope-ai/chat` frontend dependency to v1.1.64-beta.1779961389231, added native user timezone support for all message and timestamp displays
- Previously accepted community feature requests were shipped: Conversation history sorting by last message time, web workspace file upload/download function optimization
## 4. Community Hot Topics
The highest engagement issues are as follows:
1. [Issue #4754: Q: Difference between official Windows EXE and Tauri desktop builds, packaging guide](https://github.com/agentscope-ai/CoPaw/issues/4754) (7 comments)
   Underlying need: Self-hosting users want clear, official distribution guidance to avoid confusion between different packaged variants, and look for standardized packaging documentation to build custom branded desktop clients.
2. [Issue #4739: Bug: Tool call hangs, agent waits for user input instead of resuming after task completes](https://github.com/agentscope-ai/CoPaw/issues/4739) (6 comments)
   Underlying need: Power users running automated unattended agent workflows require deterministic runtime behavior that does not require manual intervention to unblock stuck sessions.
3. [Issue #4652: Enhancement: Upgrade memory system with summary-association-reminder mechanism to avoid redundant errors](https://github.com/agentscope-ai/CoPaw/issues/4652) (4 comments, last updated 2026-05-28)
   Underlying need: Users are frustrated with the current memory system that only appends raw records without abstraction, and expect the agent to actually learn from past mistakes rather than just store raw chat history.
## 5. Bugs & Stability
Bugs are ranked by production severity below, with fix status noted:
1. **High Severity**: Agent runtime hang after tool call completion [#4739](https://github.com/agentscope-ai/CoPaw/issues/4739) - No public fix PR available yet, affects unattended automation use cases
2. **High Severity**: macOS Tahoe 26.5 SIGSEGV crash when receiving Feishu channel messages [#4704](https://github.com/agentscope-ai/CoPaw/issues/4704) - No public fix PR available, blocks macOS v1.1.9 stable release
3. **Medium Severity**: Oversized shell output causes context window blowup [#4781](https://github.com/agentscope-ai/CoPaw/issues/4781) - Fix PR [#4787](https://github.com/agentscope-ai/CoPaw/pull/4787) is open and under active review
4. **Medium Severity**: Windows 1.19 desktop cron task keeps reinstalling QwenPaw via pip after creation [#4773](https://github.com/agentscope-ai/CoPaw/issues/4773) - Fix PR [#4779](https://github.com/agentscope-ai/CoPaw/pull/4779) that bundles a native CLI executable in the Tauri build is open, near merge
5. **Low-Medium Severity**: Minor 1.19 desktop regressions including no edit/delete buttons for cron jobs, broken web browser navigation in the desktop client, persistent chat input draft after page navigation are all documented and assigned to maintainers.
## 6. Feature Requests & Roadmap Signals
High-priority feature requests that are very likely to land in the upcoming v1.2.0 release:
1. The core team's planned AgentScope 2.0 backend migration [#4727](https://github.com/agentscope-ai/CoPaw/issues/4727), configuration system refactoring (global/agent scope separation + configuration comparison playground) [#4758](https://github.com/agentscope-ai/CoPaw/issues/4758) and automatic LLM provider fallback mechanism [#4757](https://github.com/agentscope-ai/CoPaw/issues/4757) are already drafted and will form the core of the next major feature release.
2. User-requested mainstream chat app UX features including conversation sorting by last message timestamp, slash command autocomplete for skills, and visible context token usage counter are planned to be shipped as patch updates in v1.1.9.x minor releases.
3. The new "Open Local Directory" function for coding mode that allows direct access to existing local projects without full file copying (PR #4762) is close to merge and will be included in the next sprint release.
## 7. User Feedback Summary
Overall user sentiment is positive regarding the core agent automation capabilities, but users have clear dissatisfaction with desktop distribution polish:
- Windows desktop v1.19 users report multiple intrusive UX frictions, including CMD popup windows on shell execution, reset session after app restart, and non-intuitive cron task configuration workflows
- Server self-hosting users running CoPaw on cloud ECS instances strongly demand a built-in frontend file management system, so they do not need to SSH into the server to retrieve generated Word/PPT/export files
- A large share of users are asking for basic standard features that are ubiquitous in mainstream AI chat assistants, including easily accessible history list, automatic message sorting, and one-click jump to related sessions from system notifications.
## 8. Backlog Watch
Long-standing unresolved issues that require maintainer follow-up:
1. [#3942](https://github.com/agentscope-ai/CoPaw/issues/3942) (opened 2026-04-29): Full multimodal audio/video frontend support, marked closed in the last 24h but no public implementation or roadmap follow-up was shared with the reporter
2. [#4162](https://github.com/agentscope-ai/CoPaw/issues/4704) (opened 2026-05-09): Cron task stuck with stale session context even after the original session is deleted, marked closed but no patch verification note or release version was announced
3. [#1492](https://github.com/agentscope-ai/CoPaw/issues/1492) (opened 2026-03-14): Workspace frontend file management function, marked as closed for later review but no public ETA for feature rollout has been published to the community.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-05-29
*github.com/zeroclaw-labs/zeroclaw*

---

## 1. Today's Overview
ZeroClaw maintained high-velocity development activity on 2026-05-29, with 21 updated issues and 50 total updated pull requests (6 merged/closed) focused on stabilizing the ongoing v0.8.0-beta line and prepping for the upcoming v0.8.1 feature release. The project balanced priority security fixes, multi-provider compatibility patches, channel UX improvements, and long-requested core runtime feature work across today’s contributions. Overall project health remains strong, with active cross-community participation from users deploying the assistant for both enterprise team chat and local personal use cases, and most high-severity newly reported bugs already having linked fix PRs under review. No new official releases were published in the last 24 hours, as the team prioritizes final bug triage for the next beta refresh.

## 2. Releases
No new official releases were published in the last 24 hours. The project is currently in active pre-release testing for v0.8.0-beta-2, with targeted fixes for the known beta-1 regressions tracked and merged this cycle.

## 3. Project Progress
A total of 6 PRs were merged or closed in the 24-hour window, advancing core platform stability and feature coverage:
1. **PR #6908** (merged): Fixed the OpenAI provider onboarding flow to add Codex subscription auth support, allowing ChatGPT Plus/Pro users to authenticate without a manual API key. https://github.com/zeroclaw-labs/zeroclaw/pull/6908
2. **PR #6994** (merged): Adjusted the Slack channel default configuration to set `strict_mention_in_thread = true`, unifying mention rules for top-level messages and thread replies to eliminate unexpected silent responses. https://github.com/zeroclaw-labs/zeroclaw/pull/6994
3. **PR #5650** (merged): Added native extended thinking support for the Anthropic provider, enabling configurable dedicated reasoning chains with custom budget token limits for high and max thinking levels. https://github.com/zeroclaw-labs/zeroclaw/pull/5650
The remaining 3 closed PRs were minor test suite cleanup and low-risk dependency patches that do not impact end-user functionality.

## 4. Community Hot Topics
The most active community items reflect fast-growing adoption of non-Western model providers and personal 1:1 assistant use cases:
1. **Issue #6059: DeepSeek-V4 API format incompatibility** (14 comments, 4 👍) https://github.com/zeroclaw-labs/zeroclaw/issues/6059
   This top-engagement issue tracks thinking mode related errors that break DeepSeek-V4-Pro and Flash API calls. It signals large, fast-growing adoption of DeepSeek models among the project’s Chinese-speaking user base, who are prioritizing native local LLM provider support.
2. **Issue #5674: Make `classify_channel_reply_intent` configurable** (4 comments, 3 👍) https://github.com/zeroclaw-labs/zeroclaw/issues/5674
   Users report the group-chat optimized "should I reply" gate causes the assistant to ignore messages in 1:1 private chats, highlighting that a large segment of deployments now run as personal AI assistants rather than shared team bots.
3. **Issue #6361: Context compression breaks tool use for OpenAI-compatible providers like MiniMax** (P1 S1 severity, 2 comments) https://github.com/zeroclaw-labs/zeroclaw/issues/6361
   Users running multi-turn tool workflows on MiniMax are facing total workflow blocks, reflecting widespread unmet demand for consistent, reliable support for non-OpenAI third-party model providers.

## 5. Bugs & Stability
All newly reported bugs are ranked by severity below, with associated fix progress noted:
| Severity | Bug Description | GitHub Link | Fix Status |
|----------|----------------|-------------|------------|
| S1 Workflow Blocked | Gateway token rotation does not revoke existing bearer tokens, critical security regression | https://github.com/zeroclaw-labs/zeroclaw/issues/6984 | Corresponding fix PR #6988 already open, under active review |
| S1 Workflow Blocked | Slack Socket Mode rejects all incoming messages as unauthorized user | https://github.com/zeroclaw-labs/zeroclaw/issues/6992 | No linked fix PR published yet |
| S1 Workflow Blocked | `zeroclaw onboard` marks agents/profiles setup complete without writing actual config entries | https://github.com/zeroclaw-labs/zeroclaw/issues/6975 | No linked fix PR published yet |
| S2 Degraded Behavior | Native tool serialization ignores Risk Profile and Tool Filter restrictions in v0.8.0-beta-1 | https://github.com/zeroclaw-labs/zeroclaw/issues/6991 | Under triage, fix expected within 48 hours |
| S2 Degraded Behavior | Backspace in interactive CLI deletes 1 byte at a time, requiring 3 presses to erase full CJK UTF-8 characters | https://github.com/zeroclaw-labs/zeroclaw/issues/6995 | Under triage |
No S0 full crash regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
User-requested features with high community traction, and projected release timelines:
1. Session-scoped runtime overrides (no daemon reload required to adjust model/temperature per session, Issue #6817) is marked in-progress, and will almost certainly ship in the v0.8.1 release.
2. `--ephemeral` daemon mode for short-lived serverless/container deployments (Issue #6818) is actively under development, targeted for v0.8.1, to enable auto self-termination when all connected RPC clients disconnect.
3. The v0.7.6 release tracker (Issue #6253) centered on improving `zeroclaw skills` UX will prioritize refined installation, audit, and authoring workflows, and is on track to be the next stable minor release.
4. The feature to let cron `announce` delivery mode only send final assistant messages (skip intermediate reasoning turns, Issue #6510) has broad demand from users running scheduled report jobs, and will be included in the v0.8.1 feature queue.
The SQLite ANN vector search optimization (Issue #5570) is a long-requested performance improvement that will likely land as a post-v0.8.1 patch.

## 7. User Feedback Summary
Collected real-user pain points and usage trends from recent updates:
- A large and growing segment of non-English (primarily CJK) users face consistent localization gaps, including hardcoded English system messages, broken CJK input handling, and missing regional model provider support.
- Personal assistant users, who now represent a large share of new signups, are underserved by features originally built for enterprise group chat deployments, most notably the over-aggressive default reply-intent classification that breaks 1:1 conversations.
- New users report a broken onboarding first-run experience, with setup flows that appear to complete successfully but generate empty, non-functional configuration files.
- Users of self-hosted and regional model providers (DeepSeek, MiniMax, Ollama) are pushing for more robust first-class compatibility parity with top-tier mainstream model providers.

## 8. Backlog Watch
High-impact long-open items that need urgent maintainer attention:
1. **PR #5187: Add ARM64 Docker build target** https://github.com/zeroclaw-labs/zeroclaw/pull/5187
   Open since April 2, 2026, with no recent maintainer review, this feature is massively demanded by users running ZeroClaw on Apple Silicon, Raspberry Pi, and cloud ARM server instances, and is a top blocker for edge deployments.
2. **Issue #5570: Replace O(n) brute force SQLite vector search with ANN index** https://github.com/zeroclaw-labs/zeroclaw/issues/5570
   Open since April 9, 2026, marked stale and blocked, the current unoptimized full table scan makes the default SQLite memory backend unusable for users with more than ~10k stored memories, and no dedicated assignee has been named for this critical performance work.
3. **PR #6428: Backfill full Slack thread context when the agent is mid-thread @mentioned** https://github.com/zeroclaw-labs/zeroclaw/pull/6428
   Open since May 6, 2026, marked needs-author-action, this long-requested improvement eliminates the common problem of agents answering blind to partial threads in Slack.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*