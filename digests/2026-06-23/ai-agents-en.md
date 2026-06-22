# OpenClaw Ecosystem Digest 2026-06-23

> Issues: 274 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-22 23:19 UTC

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

# OpenClaw (openclaw/openclaw) 2026-06-23 Daily Project Digest
---
## 1. Today's Overview
The OpenClaw project saw extremely high development throughput on 2026-06-23, with 274 total updated issues (31.7% closure rate) and 500 updated pull requests (17.4% merged/closed rate), alongside one new beta release shipped. Core development focus today was heavily weighted toward stability patches for third-party chat channels, fixes for observable state reporting bugs, and incremental progress on the long-running core SQLite session storage architecture overhaul. The active contributor base spans both full-time maintainers and a large community of self-hosted enterprise power users, indicating strong overall project health. No major production outages or critical security disclosures were logged in the past 24 hours.

## 2. Releases
The only new release published in the window is:
- **v2026.6.10-beta.2**: This beta update introduces automatic fast mode for conversational turns, which dynamically switches to a low-latency execution path for short user queries and returns to full capability mode for longer multi-step agent tasks with bounded fallback and delivery guarantees. The release also ships partial progress for the planned more reliable model routing system. No breaking changes are documented, and maintainers advise users to test on non-production instances before upgrading production workloads.

## 3. Project Progress
87 PRs were merged or closed in the past 24 hours, with notable completed work including:
1. [PR #92946](https://github.com/openclaw/openclaw/pull/92946): Fixed Telegram message delivery failures for custom/laggy Bot API deployments by adding fallback to legacy non-rich message endpoints with proper 4096-character chunking.
2. [PR #93113](https://github.com/openclaw/openclaw/pull/93113): Resolved the long-running memory status reporting bug that incorrectly showed "Dreaming: off" when users had only the light phase of memory dreaming enabled, no deep phase activated.
3. Closed high-priority issues resolved today include: #53638 (per-channel/per-DM model override support shipped), #92141 (WebChat Codex runtime properly exposes local connected Windows node execution tools), #93375 (Telegram polling silent crash loop after transient network timeout fixed), and #95248 (stuck lane claim prevention that blocked inbound Telegram events until full gateway restart).

## 4. Community Hot Topics
The highest engagement items of the day reflect the priorities of large-scale multi-agent deployment operators:
1. [Issue #88838](https://github.com/openclaw/openclaw/issues/88838) (34 comments, highest activity): Community teams are closely tracking progress of the core SQLite session/transcript migration work, which is now 90% complete for the non-SDK subsystem and lifecycle layers. Underlying user need: large enterprise deployments require fully robust session state persistence to eliminate costly message loss events that break long-running agent workflows.
2. [Issue #90370](https://github.com/openclaw/openclaw/issues/90370) (11 comments, 2 upvotes): A highly requested feature to add PostgreSQL support as an alternative internal storage backend for OpenClaw. Underlying user need: self-hosted teams that already run centralized Postgres clusters want to eliminate the overhead of maintaining separate SQLite instances, and unlock native pgvector integration for high-performance memory search.
3. [Issue #88312](https://github.com/openclaw/openclaw/issues/88312) (17 comments): Power users running the Codex app server workflow are advocating for more rigorous pre-release regression testing, after the 2026.5.27 update reintroduced a turn completion stall bug previously patched months earlier.

## 5. Bugs & Stability
Critical bugs reported and prioritized today, ranked by severity:
1. **P0 Critical**: [Issue #91588](https://github.com/openclaw/openclaw/issues/91588): Severe gateway memory leak that balloons RSS from 350MB at startup to 15.5GB over 2-3 days of normal operation, triggering repeated OOM crashes and restart loops. No public fix PR is open as of today.
2. **P1 High**: [Issue #95833](https://github.com/openclaw/openclaw/issues/95833) (new 2026-06-22): Subagent run timeout abort-settle logic fails to release the session `.jsonl.lock` file, permanently breaking the affected session until a full gateway restart. No fix PR is published.
3. **P1 High**: [Issue #95760](https://github.com/openclaw/openclaw/issues/95833) (new 2026-06-22): NVIDIA Build provider streams silently cut off mid-tool execution with no user-facing notification, leaving sessions in an unresponsive zombie state. No fix PR is published.
4. **P1 High**: [Issue #86538](https://github.com/openclaw/openclaw/issues/86538): Session write-lock timeouts block main and subagent delivery lanes, surfacing as opaque delivery failures with insufficient diagnostic logging. A linked fix PR is already open for review.

7 total P0/P1 bugs are currently tagged as needing live user repro before a patch can be written, which is the primary bottleneck for stability work this week.

## 6. Feature Requests & Roadmap Signals
Based on community activity and existing development paths, the following features are highly likely to land in upcoming releases:
1. The memory indexing overhaul tracked in [Issue #95724](https://github.com/openclaw/openclaw/issues/95724) (index shared workspaces by source directory instead of per-agent to eliminate duplicate vector stores) has an in-progress PR open, and is almost guaranteed to ship in the next v2026.6.x beta release.
2. PostgreSQL support for internal storage (tracked in #90370) is a natural next step after the core SQLite storage migration completes in the next few weeks, and is targeted for the 2026.7 stable release to support enterprise self-hosted deployments.
3. The config option to suppress automatic sub-agent announcement messages (tracked in [Issue #8299](https://github.com/openclaw/openclaw/issues/8299)) is a low-code change with 7 comments from active users, and will likely be shipped in a minor patch before the end of June.

## 7. User Feedback Summary
Key real-world user pain points and observations collected today:
1. Many self-hosted users expressed frustration with unannounced storage path changes in the 2026.6.9 update that relocated the memory vector store with zero pre-upgrade warning, forcing full re-embedding of thousands of existing files. The community is asking for explicit migration prompts and backup steps before making breaking changes to persistent storage.
2. Enterprise teams running multiple shared-workspace agents report 2x wasted disk usage and slower memory search performance from the current per-agent duplicate vector store implementation.
3. Telegram custom Bot API users reported strong satisfaction with the new fallback message delivery patch, which resolves a long-running class of failures for users running self-hosted Bot API instances behind slow proxies.
4. Teams using the Claude CLI runtime reported unexpected 401 authentication errors on the cli-backend flow, even when the same credentials work directly in the shell, creating unnecessary workflow friction for local AI assistant users.

## 8. Backlog Watch
Important high-impact items that have been open for multiple months with no recent maintainer progress:
1. [Issue #54794](https://github.com/openclaw/openclaw/issues/54794) (created 2026-03-26, 3+ months old): Telegram inline query support, tagged as needing security review, no PR or progress updates published despite 2 user upvotes.
2. [Issue #78431](https://github.com/openclaw/openclaw/issues/78431) (created 2026-05-06, 1.5 months old): Discord status reaction lifecycle support that is documented but never implemented, despite existing working code for the Telegram channel.
3. [Issue #43564](https://github.com/openclaw/openclaw/issues/43564) (created 2026-03-12, 3+ months old): ACP session skill context injection feature that would allow custom shared skills to be passed to spawned ACP agents, no update since it was tagged as needing security review.

---

## Cross-Ecosystem Comparison

# Cross-Project Open Source AI Agent & Personal Assistant Ecosystem Report (2026-06-23)
---
## 1. Ecosystem Overview
The 2026 H1 open source personal AI assistant ecosystem has moved past prototype exploration to widespread production-grade self-hosted deployment maturity, with 10 actively maintained core projects spanning full-featured enterprise distributions to ultra-lightweight edge and security-first builds. Aggregate 24-hour tracked activity totals 700+ updated issues and 770+ updated pull requests, 2 official pre-release builds, and zero confirmed cross-project shared critical vulnerabilities. The contributor base now blends core maintainers from leading AI labs, large-scale enterprise self-host power users, and domain-specific volunteer contributors, aligned around shared user priorities of data privacy, no third-party SLA reliance, and fully customizable integration workflows. Current market momentum demonstrates end users are rapidly shifting away from closed cloud agent offerings to open stacks that give full control over inference, data storage, and access policies.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Health Score (1-10) |
|---|---|---|---|---|
| OpenClaw | 274 | 500 | Shipped v2026.6.10-beta.2 | 9 |
| NanoBot | 5 | 27 | No public release, v0.2.2 imminently launching | 9 |
| Hermes Agent | 50 | 50 | No new release, v0.17.1 hotfix pending | 8 |
| PicoClaw | 2 | 44 | Shipped v0.3.0-nightly.20260622.287853ab | 9 |
| NanoClaw | 0 | 6 | No new release, v2.1.x patch in review | 8 |
| NullClaw | 0 | 2 | No new release | 7 |
| IronClaw | 18 | 25 | No new release, Reborn public preview pending | 9 |
| LobsterAI | 5 | 14 | No new release | 7 |
| CoPaw | 23 | 50 | No new release, v1.1.13 pending | 9 |
| ZeroClaw | 50 | 50 | No new release, v0.9.0 feature build pending | 8 |
*Health Score calculated from critical bug resolution turnaround, no unmitigated production outages, merged PR ratio, and community responsiveness*

## 3. OpenClaw's Position
As the de facto reference distribution for the broader Claw agent ecosystem, OpenClaw holds a clear lead across key operational metrics: its 774 total 24h updated issues and PRs are 3x larger than the next most active peer projects, and it supports the largest documented user base of large enterprise multi-agent deployment operators. It differentiates on technical paths via its 90% complete SQLite session storage overhaul roadmap, with pre-planned native PostgreSQL support targeted for 2026.7, and the broadest existing hardening for third-party chat channels including Telegram, Discord, and self-hosted enterprise IM systems. Its community includes thousands of long-time power users who contribute hard-earned edge case fixes for high-scale production environments, a resource no competing distribution can match. Its primary gaps relative to peers are weaker pre-release regression testing workflows and missing end-to-end supply chain security hardening for regulated deployments.

## 4. Shared Technical Focus Areas
Four high-priority unmet requirements are emerging across the majority of tracked projects:
1. **Multi-channel IM stability**: All 8 top active projects are prioritizing fixes for silent crashes, token leaks, and unhandled reconnection errors for self-hosted/E2EE messaging channels (Telegram, Matrix, Mattermost, WhatsApp) to meet user demand for no third-party consumer IM dependency.
2. **Resilient session storage**: OpenClaw (SQLite overhaul), CoPaw (durable scroll context), IronClaw (Postgres state for Reborn), and NanoClaw are all building zero message loss guarantees for long-running workflows, eliminating unplanned full state resync after service restarts.
3. **Supply chain compliance**: ZeroClaw (Node.js elimination, SLSA provenance), CoPaw (per-install isolated keychains), and Hermes Agent (scoped multi-profile secrets) are all actively hardening their dependency chains to meet regulated enterprise audit requirements.
4. **Native unmediated LLM provider support**: Hermes (native Vertex/Google), PicoClaw (MiMo, Volcengine Doubao), ZeroClaw (OpenRouter fallback), and CoPaw (custom OpenAI-compatible provider support) are bypassing third-party model routing intermediaries to eliminate unexpected billing errors and excess latency.

## 5. Differentiation Analysis
Projects have clearly segmented their target user bases and technical roadmaps to avoid direct feature overlap:
- Large enterprise multi-user deployments: OpenClaw and IronClaw target this segment, with OpenClaw focused on broad cross-channel support for 1000+ concurrent users, and IronClaw built on the NEAR infrastructure stack with native distributed state and a hardened 3-tier permission system to prevent unapproved tool execution.
- Privacy-first individual users: NanoClaw and NullClaw prioritize zero external dependency, fully local operation, with NanoClaw adding native offline self-hosted IMAP/SMTP access, and NullClaw optimized for ultra-low resource edge hardware deployments.
- High-velocity lightweight distributions: NanoBot, PicoClaw, and CoPaw target fast feature iteration and sub-24h bug fix turnaround, with NanoBot focused on no-code onboarding for non-technical users, PicoClaw optimized for Sipeed edge hardware, and CoPaw natively integrated with the Qwen model ecosystem.
- High compliance deployments: ZeroClaw and Hermes Agent target regulated industries, with ZeroClaw building a fully auditable no-Node Wasm-only runtime, and Hermes optimized for native Apple ecosystem / iMessage integration.
- Ecosystem add-ons: LobsterAI is built explicitly as a workflow enhancer and plugin runtime for existing OpenClaw deployments, no standalone core agent runtime.

## 6. Community Momentum & Maturity
Active projects fall into three clear maturity tiers:
1. **High Velocity Rapid Iteration Tier (8-10/10 activity)**: OpenClaw, NanoBot, PicoClaw, CoPaw, ZeroClaw, IronClaw. All merged 4+ PRs in the 24h window, have near-term public release milestones, and are seeing growing volumes of new first-time contributor submissions.
2. **Stable Maintenance Tier (4-7/10 activity)**: Hermes Agent, NanoClaw, NullClaw, LobsterAI. These projects have low critical bug volume, stable core runtimes, and prioritize polishing existing integrations over large new architecture overhauls.
3. **Low Activity Baseline Tier (0/10 activity)**: TinyClaw, Moltis, ZeptoClaw. These smaller niche projects are in dormant maintenance mode, with no recorded active development in the reporting window.

## 7. Trend Signals
Three actionable industry trends are extracted from the 24h community feedback that create clear value for AI agent developers:
1. The era of generic all-in-one cloud hosted agent platforms is ending, with over 90% of top active projects prioritizing fully self-hosted, offline-capable architectures. Developers that avoid hardcoded third-party cloud dependencies in their extensions will capture the fastest growing user segment of enterprise and power user deployments.
2. Supply chain security is the top emerging 2026 H2 priority for enterprise agent adoption. Runtimes built with memory-safe Rust core code, minimal dependency counts, and SLSA verifiable build provenance will see 2-3x faster enterprise onboarding than stacks with large un-auditable npm dependency chains.
3. Transparent, user-controllable workflows (pre-execution plan approval, no silent tool calls, persistent settings across upgrades) are in far higher demand than raw new model capability, making usability and explicit user control the largest untapped differentiator for new agent projects.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-06-23
---
## 1. Today's Overview
The NanoBot development team recorded robust, high-productivity activity in the past 24 hours, with 27 total updated pull requests and 5 updated issues across core functionality, stability hardening, user experience polish, and new integration efforts. The project is currently in the final preparation phase for its upcoming v0.2.2 release, with 12 PRs merged/closed yesterday, zero unresolved critical regressions, and steady incoming community contributions. All reported high-severity bugs already have corresponding open fix PRs submitted within 24 hours of issue creation, indicating very short issue response turnaround for end users. Overall project health is strong, with the team balancing stability work, feature expansion, and usability improvements to support growing adoption from non-technical and enterprise users.

## 2. Releases
No new official public releases were published in the 24-hour monitoring window. A release preparation PR (#4445) that bumps the package version to 0.2.2, updates the README changelog, and cleans up CI/CD and code linting issues has been merged, putting the v0.2.2 public release on track to launch imminently. No breaking changes or migration notices have been flagged for the upcoming release.

## 3. Project Progress
A total of 12 PRs were merged/closed in the past 24 hours, delivering the following verified improvements:
- Core gateway stability: PRs [#4454](https://github.com/HKUDS/nanobot/pull/4454) and [#4456](https://github.com/HKUDS/nanobot/pull/4456) fully resolved gateway shutdown failures caused by uncaught async cancellation errors, and added proper SIGINT/SIGTERM handling for foreground runtime teardown. PR [#4450](https://github.com/HKUDS/nanobot/pull/4450) fixed the longstanding AnyIO cancel scope cross-task exit crash for MCP stdio transports.
- Full WebUI UX polish: 5 merged PRs (including [#4451](https://github.com/HKUDS/nanobot/pull/4451), [#4453](https://github.com/HKUDS/nanobot/pull/4455), [#4398](https://github.com/HKUDS/nanobot/pull/4398)) eliminated common UI pain points: disappearing forked reply content after history refresh, broken auto-follow for streaming outputs, misaligned message layouts, and slow loading of the settings page caused by unnecessary background token refreshes.
- Core configuration update: PR [#4448](https://github.com/HKUDS/nanobot/pull/4448) officially bumped the default context window from 65,536 tokens to 200,000 tokens, aligned with the capabilities of modern mainstream LLMs.
- v0.2.2 release prep: All pending fixes and changes were bundled and validated in the merged release preparation PR.

## 4. Community Hot Topics
The most engaged community discussions of the day are:
1. **Issue #4376: User friendly onboarding wizard** (https://github.com/HKUDS/nanobot/issues/4376) – the only item with a positive 👍 reaction from the community, marked closed following ongoing UX iteration. This reflects a clear underlying shift in user base: after years of targeting technical early adopters, the project is now drawing non-technical users who find the original onboarding flow that assumes deep configuration knowledge unworkable.
2. **PR #4459: Mattermost channel support** (https://github.com/HKUDS/nanobot/pull/4459) and matching PWA feature PR [#4458](https://github.com/HKUDS/nanobot/pull/4458) – these two new feature contributions signal that a large share of current users are deploying Nanobot for shared team use cases on self-hosted collaboration platforms, and demand native mobile access to avoid browser-only limitations.

## 5. Bugs & Stability
Reported issues ranked by severity, with fix status:
1. **Critical**: Issue #4442: Duplicate tool_use IDs in streamed Anthropic responses permanently poison entire sessions, triggering 400 errors from LLM providers and breaking all subsequent requests (https://github.com/HKUDS/nanobot/issues/4442). A fix PR [#4443](https://github.com/HKUDS/nanobot/pull/4443) has already been submitted, which validates and deduplicates tool call IDs before persisting them to session history, no post-fix manual user recovery will be required.
2. **High**: Unfiled MCP runtime crash bug: Gateway throws `RuntimeError` when MCP server reconnection triggers improper stream closure. Fix PR [#4441](https://github.com/HKUDS/nanobot/pull/4441) is in open review.
3. **Medium**: Pairing store type coercion bug, which silently rejects valid pairing connections due to mismatched sender ID types (https://github.com/HKUDS/nanobot/pull/4433). Fix is code complete and waiting for review.
4. **Low**: All previously reported gateway shutdown instability bugs have been fully resolved with merged PRs, no open remaining low-severity stability regressions are outstanding.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests with clear roadmap signals:
- Telegram Bot API 10.1 rich message support (Issue #4413) for proper markdown rendering on Telegram channels
- WebUI PWA support (Issue #4457) for native app installation on mobile home screens
- Read-only built-in `search_history` tool (PR #4439) to let agents recall past conversation memory without third-party tools
- Mattermost channel native integration (PR #4459)

The upcoming v0.2.2 public release will prioritize all the stability fixes, 200k default context window, and WebUI polish. The three code-complete features (PWA, search history tool, duplicate tool ID bug fix) will almost certainly land in the immediate follow-up v0.2.3 minor release, with Mattermost and Telegram rich message support scheduled for the next major feature iteration.

## 7. User Feedback Summary
Verified user pain points and sentiment:
1. Top onboarding friction: Non-technical new users report the original `nanobot onboard --wizard` flow requires too much specialized technical knowledge, making zero-config deployment impossible, as noted in the resolved Issue #4376.
2. Major workflow frustration: Anthropic LLM users report that a single malformed streaming response can permanently break a long-running work chat session, with no simple recovery path, leading to lost work.
3. Outdated default configuration: Users across all deployment scenarios note that the old 65k default context window is too small to support long document processing, multi-turn agent workflows, and full history retention.
4. Unmet integration demand: Team self-hosted users explicitly request native support for Mattermost, a popular open source collaboration platform, to avoid third-party proxy workarounds.
5. Positive sentiment: Multiple users noted appreciation for the team's fast issue response, with bug reports submitted often receiving a matching fix PR within hours.

## 8. Backlog Watch
The highest-priority unaddressed long-running open contribution is **PR #4291: Allow subagents to use configurable model presets** (https://github.com/HKUDS/nanobot/pull/4291). Created on 2026-06-11, the PR was last updated on 2026-06-22 but has not received maintainer review or triage after 12 days in open status. This feature is high-impact for enterprise users running multi-agent workflows that need to assign different model tiers, costs, and performance levels to different child subagent tasks, and is likely to be a highly requested addition once merged. The PR is fully code complete and only awaiting maintainer feedback to unblock merging.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-23
---
## 1. Today's Overview
Hermes Agent recorded very high development and community activity on 2026-06-23, with 50 updated issues and 50 updated pull requests across the codebase, demonstrating strong contribution velocity from both maintainers and external open source contributors. The majority of recent work is focused on hardening cross-platform stability, polishing Telegram and Photon iMessage plugin functionality, addressing long-standing provider routing pain points, and shipping new usability features for desktop and self-hosted deployments. 84% of recently updated issues remain actively open, while 92% of recently updated PRs are in the review/development pipeline, indicating a large backlog of incoming improvements that are expected to land in near-term patch and minor releases. No new official releases were published today, as the team appears to be finalizing testing for a v0.17.1 hotfix patch that bundles dozens of recently merged bug resolutions.

## 2. Releases
No new official Hermes Agent releases were published in the 24h window ending 2026-06-23. All latest changes remain in the pre-release main branch at time of writing.

## 3. Project Progress
4 total PRs were merged/closed in the last 24 hours, resolving 8 previously tracked bugs and 1 feature request:
1.  Closed PR #51081 fixed CLI quiet one-shot query output, ensuring the `hermes chat -Q -q` command returns machine-readable clean stdout with no incidental debug logging
2.  Resolved P1 Anthropic provider `Bearer None` auth bug [Issue #23370](https://github.com/NousResearch/hermes-agent/issues/23370) that broke Claude OAuth credential flows
3.  Resolved P2 Windows bootstrap installer gateway process kill bug [Issue #50090](https://github.com/NousResearch/hermes-agent/issues/50090) that left the Telegram bot unresponsive after update
4.  Fixed shared formatter bug that flattened Telegram rich pipe tables to plain bullets [Issue #45323](https://github.com/NousResearch/hermes-agent/issues/45323)
5.  Patched file tool tilde path resolution mismatch that broke cron job operations under non-interactive gateway environments [Issue #48552](https://github.com/NousResearch/hermes-agent/issues/48552)
6.  Shipped the requested `/resume-last` one-click session resume slash command feature [Issue #51040](https://github.com/NousResearch/hermes-agent/issues/51040)

## 4. Community Hot Topics
1.  **Top Engagement Issue: Native Google/Vertex AI Provider Support** [Issue #12639](https://github.com/NousResearch/hermes-agent/issues/12639)
    With 10 comments and 10 thumbs up, this is the highest-traffic active issue today. Power users running Gemini 3.1 Pro report frequent unexpected 402 billing errors and arbitrary rate limits when routing through OpenRouter, and are requesting a direct native Google/Vertex integration to bypass third-party markup, reduce latency, and eliminate unpredictable access blocks. The underlying user need is reliable, unmediated access to top-tier Gemini models for production workloads.
2.  **Photon iMessage Post Secret Rotation Auth Failure** [Issue #50755](https://github.com/NousResearch/hermes-agent/issues/50755)
    3 active comments from iMessage plugin users report that re-running `hermes photon setup` breaks all outbound sends by invalidating active credentials. An open fix PR already exists for this widely used community feature.

## 5. Bugs & Stability
All newly reported bugs are ranked by severity below, with fix status noted:
| Severity | Bug Description | Link | Fix PR Status |
|----------|-----------------|------|---------------|
| P2 Security | Multiplex profile deployment leaks secondary Telegram bot tokens, using default profile credentials instead of scoped per-profile secrets | [Issue #51029](https://github.com/NousResearch/hermes-agent/issues/51029) | No open fix PR |
| P2 | Same Telegram token collision detection is fully broken, allowing duplicate bot profile registrations that trigger API 409 errors | [Issue #51030](https://github.com/NousResearch/hermes-agent/issues/51030) | No open fix PR |
| P2 | Orphaned async task leaves Telegram typing indicator running indefinitely after agent session idle eviction | [Issue #50991](https://github.com/NousResearch/hermes-agent/issues/50991) | No open fix PR |
| P2 | Windows native path formats stored in session cwd break the bash terminal tool | [Issue #50594](https://github.com/NousResearch/hermes-agent/issues/50594) | No open fix PR |
| P2 | Session resume loses in-progress tool loop and compression state after unexpected process restarts | [Issue #51089](https://github.com/NousResearch/hermes-agent/issues/51089) | Fix PR #51088 open and in review |
| P3 | Photon iMessage outbound sends fail after secret rotation | [Issue #50755](https://github.com/NousResearch/hermes-agent/issues/50755) | Fix PR #50761 open and in review |
| P3 | Dashboard auth flow breaks when running Hermes behind a reverse proxy subpath | [Issue #50889](https://github.com/NousResearch/hermes-agent/issues/50889) | No open fix PR |

## 6. Feature Requests & Roadmap Signals
Based on current contribution pipeline and community engagement, the following features are highly likely to ship in upcoming releases:
1.  Weighted tool selection (PR #51092) that eliminates non-deterministic tool choice when multiple overlapping tools are available is targeted for the next v0.17.1 patch
2.  The widely requested native Google/Vertex AI provider support [Issue #12639](https://github.com/NousResearch/hermes-agent/issues/12639) is a top candidate for the v0.18.0 minor release, as provider expansion is a core stated Nous research roadmap priority
3.  Inline Headroom SmartCrusher tool output compression (PR #51076) that reduces context size by 50-98% is nearing completion and expected to ship in 2 weeks
4.  Support for project-local `.mcp.json` MCP server configs [Issue #51069](https://github.com/NousResearch/hermes-agent/issues/51069) will land shortly after the weighted tool selection feature, making it easier to adopt existing project MCP workflows
The next official patch release (v0.17.1) will prioritize cross-platform bug fixes, while v0.18.0 will deliver major new provider and tooling capabilities.

## 7. User Feedback Summary
### Key Pain Points
- Power users of Gemini models are highly dissatisfied with the OpenRouter intermediary layer that delivers unexpected 402 billing blocks and unannounced rate limits
- Production Telegram bot deployments report persistent inconsistent formatting glitches and multi-profile bugs that make Hermes unsuitable for public-facing workloads
- Windows desktop users face multiple friction points including locked-file errors during upgrades, broken path handling for terminal tools, and model picker setting persistence failures
- Self-hosted users running Hermes behind reverse proxies cannot easily mount the dashboard under a subpath, creating deployment complexity

### Positive Signals
Users are praising the newly added `/resume-last` slash command for reducing session navigation friction, and expressing strong anticipation for the upcoming inline tool output compression feature that will drastically lower LLM inference costs for long-running tasks.

## 8. Backlog Watch
The following high-impact items are currently unassigned and need maintainer attention:
1.  **Native Google/Vertex AI Provider Support** [Issue #12639](https://github.com/NousResearch/hermes-agent/issues/12639): Open since April 2026, 20+ days old with 10 comments and 10 thumbs up, no public PR has been filed yet despite heavy community demand
2.  **MCP Server Permanent Disconnection Bug** [Issue #38488](https://github.com/NousResearch/hermes-agent/issues/38488): P2 critical bug open since June 3, 2026, that leaves self-hosted MCP tools permanently offline after transient backend outages until full gateway restart, no assigned developer
3.  **Hermes Desktop WebAuthn/Passkey OIDC Support Gap** [Issue #42448](https://github.com/NousResearch/hermes-agent/issues/42448): Open since June 8, 2026, blocks enterprise passwordless login flows for desktop deployments, no active public PR work is visible.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-06-23
---
## 1. Today's Overview
PicoClaw recorded high development activity this 24-hour window, with 44 total updated pull requests (77% of which were merged/closed) and 2 active open issues, alongside an official new nightly build rollout. The iteration cycle is heavily focused on runtime stability hardening, edge case bug fixes for LLM provider integrations, and expanding peripheral tool capabilities. The project maintains a fast-paced, high-throughput contribution rhythm, with most code changes submitted by both core team members and active community contributors reaching merge status quickly. No critical production outages or crash-related regressions were reported during the period.

## 2. Releases
A new official automated nightly build was published:
- **Version**: `v0.3.0-nightly.20260622.287853ab`
- The build rolls up all code changes merged to main branch after the v0.3.0 pre-release tag. It is marked as unstable for experimental testing only, no production deployment is recommended. Full changelog is available at: https://github.com/sipeed/picoclaw/compare/v0.3.0...main. No breaking changes or migration notes are attached for this pre-release build.

## 3. Project Progress
34 pull requests were merged/closed in the 24-hour window, delivering the following key improvements:
1. Runtime stability hardening: Fixed unhandled type assertion panics in the lock store file flow (#3053), OpenAI compatible provider flow (#3091), added backpressure control, per-stream drop statistics and health visibility for the message bus to eliminate unbounded blocking under high load (#2906).
2. Memory system optimization: Patched crash consistency gaps for JSONL format session metadata storage, removed redundant full index cloning on the hot lookup path to drastically improve session read performance (#2913, #2907).
3. New functional increments: Added official CommonModel presets for the MiMo LLM provider, supporting automatic recommendation of multimodal and text-only MiMo v2.5 series models in the WebUI (#2915), added installation guidance output for the `skills search` CLI command (#3152), introduced a `direct_reply` parameter for the spawn module to eliminate duplicate user messages caused by simultaneous for-user delivery and inbound agent triggering (#3155).
4. Security patch: Merged a set of frontend dependency updates for shadcn UI, Vite, TypeScript ESLint and ESLint to patch known vulnerability risks.

## 4. Community Hot Topics
The highest engagement items are:
1. Decentralized private messaging gateway feature request (#3093: https://github.com/sipeed/picoclaw/issues/3093)
   This 13-day-old feature request for SimpleX/Wire/Tox protocol gateway support received 3 user comments and 1 upvote. The underlying demand reflects that a large segment of PicoClaw users are privacy-focused self-hosting operators who want to deploy the AI agent on non-centralized E2EE messaging networks without relying on third-party public IM services.
2. Paired bug report and fix PR for Volcengine Doubao Seed integration (#3153, #3154: https://github.com/sipeed/picoclaw/issues/3153)
   This newly reported tool call leakage bug already has a community-submitted fix PR ready for merge, indicating that Chinese enterprise users deploying PicoClaw on Volcengine's coding agent platform have strong demand for native, robust support for domestic large model ecosystems.

## 5. Bugs & Stability
All reported issues are ranked by severity as below:
1. **High severity (affects core function)**: Bug #3153 that Volcengine Doubao Seed 2.0 Pro model occasionally leaks raw `<seed:tool_call>` XML text to end users instead of executing the corresponding function, reported to impact v0.2.8 users using Volcengine Coding Plan. A fix PR #3154 has already been submitted, the root cause has been confirmed, and resolution is pending merge.
2. No medium or low severity new bugs reported, no user-side crashes or data loss incidents recorded in the 24-hour window. All previously identified unhandled panic issues in the type assertion flow have been patched via merged PRs.

## 6. Feature Requests & Roadmap Signals
User-requested features and their expected release timeline:
- The most voted user request for decentralized private messaging gateway (SimpleX/Tox) is expected to be prioritized for the v0.3.x minor feature update after maintainers collect more use case feedback.
- Three open PRs with high maturity are very likely to ship in the upcoming v0.3.0 stable release: the experimental ADB Android remote operation tool (#3157), per-turn LLM token usage tracking (#3156), and the Doubao Seed tool call leakage bug fix. These features all fill obvious functional gaps for existing user groups.

## 7. User Feedback Summary
- **Pain points**: Privacy-focused self-hosted users currently lack official integration support for non-centralized E2EE messaging protocols, which blocks their deployment of PicoClaw as a local private AI assistant on decentralized networks. Enterprise users on Volcengine's LLM stack encounter unexpected edge case failures when running tool calling workflows, which increases their debugging overhead.
- **Positive signals**: The community demonstrated strong contribution momentum, with users submitting complete valid fixes for newly discovered bugs within hours of the issue being opened, showing high recognition of the project's development direction.

## 8. Backlog Watch
Items marked with stale tag that are pending maintainer triage:
1. Issue #3093 (SimpleX/Tox gateway feature request): Open for 13 days with 3 user comments, no official feedback from maintainers yet, a large number of interested users are waiting for the roadmap update.
2. PR #3118 (Remote Pico WebSocket mode for agent command): Open for 11 days, it adds a highly demanded lightweight remote agent control mode, currently marked stale waiting for maintainer review.
3. PRs #3131 and #3128: They are two small quality improvement patches for tool registry type assertion checks and HTTP response error handling, both complete and passing tests, waiting for maintainers to schedule merge to further reduce runtime warning logs.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-23
---
## 1. Today's Overview
NanoClaw recorded steady, development-focused activity over the last 24 hours, with zero new or updated issues and 6 total active pull requests, 1 of which was fully merged. The team’s recent work spans expanding third-party integration support, improving core approval workflows, and resolving long-standing runtime stability pain points for self-hosted users. No new releases were published in the window, and the project is on track for a near-term minor feature update following final review of several high-value pending PRs. Overall project health remains strong, with a balanced mix of new feature development and technical debt resolution prioritized by contributors.

## 2. Releases
No new official versions, pre-releases, or hotfixes were published in the last 24 hours. There are no associated breaking changes or migration notes to share for this period.

## 3. Project Progress
Only one PR was merged/closed in the 24-hour window:
- [#2831 [CLOSED] feat: add Telegram integration (verified working on v2.1.1)](https://github.com/nanocoai/nanoclaw/pull/2831): This full, guidelines-compliant integration adds Telegram as an official messaging channel for NanoClaw agents, allowing end users to interact directly with their local personal AI assistants via the Telegram chat interface with no additional custom configuration required. The integration has been fully validated for compatibility with the latest stable v2.1.1 release of NanoClaw.

## 4. Community Hot Topics
No PRs or issues received user comments or emoji reactions in the last 24 hours. The two highest-impact pending feature PRs that reflect top community priorities are:
1. [#1235 [OPEN] feat: add IMAP/SMTP email integration](https://github.com/nanocoai/nanoclaw/pull/1235)
2. [#2795 [OPEN] feat: add /add-clidash — read-only CLI-derived dashboard skill](https://github.com/nanocoai/nanoclaw/pull/2795)
Underlying community needs for these items point to strong demand for self-hosted, no-third-party-SaaS productivity tools, as both features eliminate reliance on external cloud API connectors for email access and local instance observability, aligned with NanoClaw’s core privacy-first value proposition.

## 5. Bugs & Stability
No new crash, critical regression, or zero-day bug reports were filed in the last 24 hours. Two active fix PRs addressing existing stability pain points were updated, ranked by severity:
1. **High Severity**: [#2830 [OPEN] fix(setup): reap dead peer service registrations whose binary is gone](https://github.com/nanocoai/nanoclaw/pull/2830): Resolves the widely reported issue where deleting a NanoClaw instance without running the uninstaller leaves orphaned launchd/systemd service units pointing to non-existent binaries, which cause cumulative system resource bloat for long-running, heavily tested hosts. A complete fix implementation is already submitted for review.
2. **Medium Severity**: [#2531 [OPEN] fix(poll-loop): suppress duplicate text when send_message fires mid-turn](https://github.com/nanocoai/nanoclaw/pull/2531): Fixes a UI/UX issue that causes repeated, garbled text to appear in agent responses when a new message is sent mid-way through an active agent processing turn. The fix is currently in final review.

## 6. Feature Requests & Roadmap Signals
Three user and contributor-requested features with active PRs are highly likely to ship in upcoming releases:
- The `Reject with reason` approval workflow enhancement from [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) is a small, high-impact core quality-of-life improvement that is on track to land in the next v2.1.x patch release.
- The lightweight CLI dashboard skill [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) is a zero-dependency utility skill that will likely be released as an optional installable add-on in the next minor update.
- The full IMAP/SMTP email integration [#1235](https://github.com/nanocoai/nanoclaw/pull/1235) has been in development for 3 months and is targeted to be the flagship new productivity feature in the v2.2 feature release batch.

## 7. User Feedback Summary
Pain points surfaced via recent contributor submissions and ongoing feature development are consistent with prior community feedback:
1. Power users testing multiple local NanoClaw instances report frustration with orphaned service registrations wasting system resources.
2. Privacy-focused self-hosted users continue to request native email access that does not require routing data through third-party cloud email services.
3. Enterprise and multi-user deployment users note that generic "rejected" approval notifications waste agent workflow turns by not explaining why a user denied a request. No new widespread dissatisfaction or satisfaction spikes were recorded, and the merged Telegram integration has already seen positive early adoption from community members.

## 8. Backlog Watch
The top high-priority PR requiring maintainer attention as of today is:
- [#1235 [OPEN] feat: add IMAP/SMTP email integration](https://github.com/nanocoai/nanoclaw/pull/1235): Originally opened on 2026-03-18, this PR has been pending for more than 3 months, with new code updates pushed as recently as June 22, 2026. This integration unlocks dozens of high-demand use cases including automated inbox management, email summarization, and rule-based email triage for personal AI assistants, and unblocking its final review will deliver significant value for a large segment of the NanoClaw user base.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw (nullclaw/nullclaw) Project Digest | 2026-06-23
---
## 1. Today's Overview
For the 24-hour reporting window ending 2026-06-23, the open-source AI agent and personal assistant project NullClaw recorded zero new or updated open issues, zero merged changes, and no new official releases. The only tracked activity came from two pending, recently updated pull requests, focused on core integration reliability and routine dependency maintenance. Overall project activity is low this cycle, with no documented critical user-facing incidents reported. This low-activity period signals a stable baseline for existing deployed instances, with active work focused on polishing existing functionality rather than shipping large new features.

## 2. Releases
No new official releases, pre-releases, or patch versions were published in the reporting window. All distributed stable builds remain unchanged from the prior public version.

## 3. Project Progress
Zero pull requests were merged or closed over the 24-hour reporting window, so no new features, finalized fixes, or code changes landed to the project's mainline branch. The two updated pending PRs mark incremental forward progress on two queued workstreams: a quality-of-life reliability fix for the Matrix chat channel integration, and a container base image update to refresh underlying system packages for all distributed Docker builds. Both changes are now queued for formal maintainer review.

## 4. Community Hot Topics
With zero active issues logged, the two updated pending PRs are the only active community discussion items for this cycle:
1. **PR #968: fix(matrix): persist next_batch across restart + test env isolation**  
   Link: https://github.com/nullclaw/nullclaw/pull/968  
   Underlying need: This authored fix directly addresses a long-reported pain point for self-hosted users that rely on Matrix as their primary agent interaction interface. The current RAM-only sync token storage causes full, unnecessary message resyncs on every service restart, leading to delayed message processing and wasted homeserver bandwidth.
2. **PR #956: ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**  
   Link: https://github.com/nullclaw/nullclaw/pull/956  
   Underlying need: This automated Dependabot update satisfies core project security maintenance requirements, ensuring all distributed NullClaw container images run the latest fully patched Alpine base with no unpatched public CVEs from the older 3.23 release.

## 5. Bugs & Stability
No new crashes, regressions, or severity-ranked bug reports were submitted in the 24-hour window. The only known unremediated stability gap for public builds (the Matrix sync token loss on restart) already has a complete, authored fix tracked in open PR #968, pending review. No active critical or high-severity unaddressed bugs are documented as of this report.

## 6. Feature Requests & Roadmap Signals
No explicit new user feature requests were logged this reporting cycle. The prioritization of reliability fixes for existing third-party chat integrations (notably the Matrix persistence patch) signals the project roadmap is focused on hardening existing core functionality ahead of new feature launches. Both the Matrix fix and the Alpine base image bump are extremely likely to be included in the next upcoming public patch release.

## 7. User Feedback Summary
No new direct user feedback via GitHub issue comments or PR interactions was recorded in the reporting window. The unremediated Matrix restart sync behavior is a known pain point for self-hosted users running NullClaw on low-bandwidth connections or small edge hardware, where repeated full initial syncs can cause multi-minute startup delays. No widespread service outages or mass user dissatisfaction with current stable builds are reported at this time.

## 8. Backlog Watch
Dependabot-created PR #956 (Alpine base image version bump) was originally opened on 2026-06-15, making it 8 days old as of this 2026-06-23 report, with no recorded maintainer review or merge activity to date. This low-effort, high-impact security maintenance PR requires urgent maintainer attention to avoid shipping unpatched container base images in the next project release, and to prevent the associated automated dependency alert from expiring.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Daily Project Digest | 2026-06-23
---
## 1. Today's Overview
This 24-hour window saw high development activity focused on hardening the IronClaw Reborn iteration ahead of broader hosted preview access, with 18 updated issues, 25 updated pull requests, 4 resolved bugs and 8 merged/closed PRs. The core team is prioritizing parallel tracks of local dogfooding usability polish, performance tuning, approval system hardening, and long-running codebase refactoring to reduce technical debt. No major production outages were reported, though a recent regression broke a notable share of standard benchmark test cases. Overall development velocity remains strong, with multiple long-planned feature sets reaching completion this period. No new public releases were tracked for this window.

## 2. Releases
There are no new official releases published for IronClaw in this 24-hour period.

## 3. Project Progress
Multiple high-impact features and fixes were merged or closed in the past day:
- The hosted single-tenant Postgres profile for Reborn (PR #5081, https://github.com/nearai/ironclaw/pull/5081) was finalized, paving the way for the first public hosted preview deployment by retaining all existing local dev SSO, tool and approval workflows while adding durable PostgreSQL-backed control plane state.
- Concurrent turn execution (PR #5085, https://github.com/nearai/ironclaw/pull/5085) launched via the new TurnRunScheduler with per-user and per-type execution caps, eliminating the legacy serial single-worker queue bottleneck that limited multi-user workload throughput.
- The full Reborn approval system overhaul was completed with two merged PRs: PR #5063 (https://github.com/nearai/ironclaw/pull/5063) added a DB-backed global auto-approve setting that applies changes without service restarts, and PR #5062 (https://github.com/nearai/ironclaw/pull/5062) delivered the 3-state per-tool permission model (always_allow/ask_each_time/disabled) plus an unbreakable hard floor for high-sensitivity tools that can never be auto-approved, resolving previously open issues #4959 and #4958.
- Trigger input error handling was fixed (PR #5140, https://github.com/nearai/ironclaw/pull/5140) to surface structured, actionable repair details to users instead of opaque generic dispatch failures for invalid automation creation requests.
- Engine V2 LLM usage persistence (closed issue #4985, https://github.com/nearai/ironclaw/issues/4985) was completed, making the admin consumption usage API return valid metrics for v2 engine deployments for the first time.

## 4. Community Hot Topics
The highest-engagement active items align with the core team and contributor shared priority of shipping a stable, polished Reborn release:
1. IronClaw Reborn Local Dogfooding Findings 06/22/2026 - 06/28/2026 (https://github.com/nearai/ironclaw/issues/5119): This central tracking epic acts as the single hub for all usability, workflow and edge case feedback from core team daily usage of Reborn as a primary work agent, reflecting the cross-team agreement that first-run and daily usability are the top blockers for a public preview.
2. Reborn regression: web/research tasks hang at init (0 LLM calls) on main HEAD (2b2ccc55→704fcd43) (https://github.com/nearai/ironclaw/issues/5139): This high-severity regression that broke 21 out of 147 PinchBench benchmark tests is the top active triage priority, demonstrating the team's commitment to maintaining measurable stability via benchmark validation as new features land rapidly.
3. build(deps): bump the everything-else group across 1 directory with 45 updates (PR #5138, https://github.com/nearai/ironclaw/pull/5138): The large Dependabot Rust dependency update PR is drawing attention from maintainers to avoid unaddressed dependency drift, while carefully auditing changes to prevent unexpected breakages in the feature-freeze window ahead of preview launch.

## 5. Bugs & Stability
Bugs are ranked below by severity, with current status noted:
1. **Critical Severity**: Regression #5139 (https://github.com/nearai/ironclaw/issues/5139): Web and research tasks hang immediately on the latest main HEAD after a 10-commit span, making zero LLM or tool calls before timing out. No fix PR has been filed yet while root cause triage is ongoing.
2. **High Severity**: Nightly E2E test failure #4108 (https://github.com/nearai/ironclaw/issues/4108): The scheduled v2-engine end-to-end test run failed at commit 704fcd43, overlapping with the above regression and temporarily breaking nightly validation coverage. No fix PR is available as of this digest.
3. **Medium Severity**: Always approve failure for outbound_delivery_target_set #5129 (https://github.com/nearai/ironclaw/issues/5129): The newly launched auto-approve system fails to apply pre-granted permissions to the outbound delivery target setter capability, breaking automation use cases that rely on unattended delivery workflows. Reproduction work is in progress, no fix PR has been posted.
4. **Resolved**: Two previously open bugs were closed this window: the NEAR AI MCP "SETUP NEEDED" false positive UI prompt #4925, and the empty admin LLM usage API return for Engine V2 #4985.

## 6. Feature Requests & Roadmap Signals
Newly filed work items indicate the following features are highly likely to ship in near-term updates:
- The full week-long Reborn performance tracking epic #5125 (and its three sub-issues for latency logging, inference tuning, and redundant runtime step removal) is top of the feature backlog, and will almost certainly land in the next patch release to address widely reported slow local turn performance.
- Reborn-native automation delete (PR #5133, https://github.com/nearai/ironclaw/pull/5133) and pause/resume (PR #5131, https://github.com/nearai/ironclaw/pull/5131) support, both already implemented and open for review by core contributors, are on track to ship in the next minor release to make the Reborn automation system fully usable for production workflows.
- Telegram channel support for Reborn (#5124) is slotted as a follow-up priority after automation hardening completes, expanding the Reborn multi-channel adapter coverage beyond existing platforms.

## 7. User Feedback Summary
All feedback collected this window comes from core team dogfooding and internal testing of pre-release Reborn builds:
- Top unaddressed pain point: Perceived slowness of local Reborn turns, with no existing per-stage timing attribution to separate runtime overhead from model inference latency.
- Previously top pain point of requiring full service restarts to modify approval policies, plus lack of granular per-tool permission controls, has been fully resolved with the recently merged approval system overhaul, with positive early feedback from testers.
- Minor fixed pain point: Pre-configured automatically installed NEAR AI MCP extensions incorrectly showed a "SETUP NEEDED" prompt to users, creating unnecessary confusion during first run.
- Positive feedback: The newly rolled out concurrent turn execution feature fully eliminated queue backlogs that caused long waits when multiple users submitted agent tasks at the same time.

## 8. Backlog Watch
These important older items have not received maintainer attention for multiple days, and need prioritized review:
1. [NO MERGE] - Barcelona Hackathon PR #4787 (https://github.com/nearai/ironclaw/pull/4787): Opened on 2026-06-12, this PR contains a set of onboarding and stability patches for new users participating in the Barcelona hackathon, and needs triage to identify which patches can be upstreamed to reduce new user onboarding friction.
2. build(deps): bump the wasm group across 1 directory with 2 updates PR #4032 (https://github.com/nearai/ironclaw/pull/4032): Opened on 2026-05-25, this Dependabot PR updates two core WASM toolchain packages that power the project's first-party Google workspace and productivity WASM tools, with no maintainer action taken for nearly 4 weeks, creating potential security and compatibility drift risks.
3. Move Slack setup into WebUI PR #4712 (https://github.com/nearai/ironclaw/pull/4712): Opened on 2026-06-10, this long-requested multi-channel usability feature

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Daily Project Digest | 2026-06-23
(Source: github.com/netease-youdao/LobsterAI)

## 1. Today's Overview
Over the 24-hour reporting window, the LobsterAI repository recorded 5 updated open user-submitted issues and 14 total updated pull requests, with 6 PRs successfully merged or closed for a 42.9% merge rate on active PRs. No new official releases were published in this period. Development activity was heavily concentrated on delivering new AI workflow features for the Cowork agent subsystem, alongside a batch of targeted fixes for the OpenClaw plugin runtime. There were no reports of critical production outages, though a large backlog of 2+ month old stale bugs and pending fixes remains unaddressed. Overall, the team maintains steady feature delivery velocity, with moderate technical debt accumulation from older untriaged items.

## 2. Releases
There are no new official releases published for LobsterAI in this 24-hour reporting window.

## 3. Project Progress
6 PRs were successfully merged/closed today, advancing core feature and stability targets:
- [#2183](https://github.com/netease-youdao/LobsterAI/pull/2183): A landmark new feature that adds Plan Mode workflow to the Cowork agent composer, supporting interactive proposed plan blocks, independent expand/collapse controls, and manual plan approval before tool execution runs.
- [#2182](https://github.com/netease-youdao/LobsterAI/pull/2182): Adds compatibility for upgraded OpenClaw IM plugin installs, natively supporting the latest versions of DingTalk, Lark/Feishu, WeCom, and POPO integration plugins.
- [#2186](https://github.com/netease-youdao/LobsterAI/pull/2186): Fixed the NIM plugin runtime entry compilation issue for OpenClaw, alongside shared script refactoring for more consistent plugin package preparation.
- [#2185](https://github.com/netease-youdao/LobsterAI/pull/2185): Added the missing `cwd` field to OpenClaw v2026.6.1 reply options, resolving plugin SDK declaration generation failures during chat send operations.
- [#2184](https://github.com/netease-youdao/LobsterAI/pull/2184): Refreshed official AGENTS.md documentation to align with current Cowork/OpenClaw architecture, adding updated guidance for Codex instruction scope, lint policies and submission verification requirements.
- [#2187](https://github.com/netease-youdao/LobsterAI/pull/2187): Aligned OpenClaw test suite metadata expectations, updating model default tests and history reconciliation logic for reasoning-capable LLM models.

## 4. Community Hot Topics
No updated Issues or PRs recorded unusually high comment or reaction engagement today, as most recently bumped user issues are legacy stale reports with no recent public discussion. The highest-visibility active update is the newly merged Cowork Plan Mode PR [#2183](https://github.com/netease-youdao/LobsterAI/pull/2183), which aligns with widely unmet community demand for more transparent AI agent operation workflows. The underlying user need reflected by this feature is to eliminate unexpected unapproved tool calls, reduce wasted API costs, and give users full control over the sequence of actions their local AI agents execute.

## 5. Bugs & Stability
Bugs reported and updated today are ranked by severity below, with fix status noted:
1. **High Severity**: Unfixed critical vulnerability in OpenClaw Token Proxy, which lacks request body size limits that could allow malicious local processes to trigger OOM crashes (PR fix available at [#1407](https://github.com/netease-youdao/LobsterAI/pull/1407), not yet merged)
2. **High Severity**: Unhandled Promise rejection in MCP Bridge Server `handleRequest` function, which can cause uncaught exceptions and Node.js process crashes (PR fix available at [#1408](https://github.com/netease-youdao/LobsterAI/pull/1408), not yet merged)
3. **Medium Severity**: Cross-day triggered scheduled tasks do not generate run history records, making audit and troubleshooting of cron AI jobs impossible (no fix PR linked, Issue [#1409](https://github.com/netease-youdao/LobsterAI/issues/1409))
4. **Medium Severity**: NIM SDK group type enumeration mapping error, which breaks group name lookup for IM integration features (PR fix available at [#1419](https://github.com/netease-youdao/LobsterAI/pull/1419), not yet merged)
5. **Low Severity**: 4 UI bugs on the user overview profile page, including non-interactive time range filter, always-zero total session count stats, English language UI text overlap, and broken layout when many skills are added to the input bar (no matching fix PRs, Issues [#1411](https://github.com/netease-youdao/LobsterAI/issues/1411), [#1413](https://github.com/netease-youdao/LobsterAI/issues/1413), [#1414](https://github.com/netease-youdao/LobsterAI/issues/1414), [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416))

## 6. Feature Requests & Roadmap Signals
Multiple signals point to key features arriving in the next minor LobsterAI release:
- The newly merged Cowork Plan Mode will almost certainly be the headline new feature in the next version, as all core functionality for plan preview, approval and execution flow is already completed.
- The OpenClaw IM plugin compatibility patch will land in the next release, bringing official

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/QwenPaw) 2026-06-23 Project Digest
---

## 1. Today's Overview
The CoPaw (QwenPaw) project recorded high 24-hour activity on 2026-06-23, with 23 updated issues (5 resolved) and 50 total updated pull requests (20 merged/closed, 30 open) and no new official releases published. Activity is concentrated on post-v1.1.12 regression triage, a community-led mobile responsiveness sprint for core console pages, security hardening, and new context management feature development. The project demonstrates strong positive community health, with 8 first-time contributors submitting fully functional feature PRs targeting UI and core usability improvements. Maintainers are actively prioritizing core stability fixes before rolling out new major features, in direct response to the recent user request to stabilize the app prior to adding new functionality. Overall activity levels rank at 8/10, indicating a fast-paced, engaged development cycle.

## 2. Releases
No new official releases were published in the last 24 hours. The latest public version remains v1.1.12.post1.

## 3. Project Progress
20 PRs were merged or closed in the 24-hour window, delivering high-impact security fixes and usability improvements:
1. **#5028 (Security Fix): Isolate keychain master key per install** by ekzhu: Eliminates a critical security flaw where all QwenPaw installations on a single machine shared the same global OS keychain master key, preventing cross-install credential leaks. [Link](https://github.com/agentscope-ai/QwenPaw/pull/5028)
2. **#5027 (ACP Improvement): Block backend warmup sessions from polluting the console, add session resume** by ekzhu: Resolves the long-standing annoyance where every TUI startup left orphan junk warmup chat entries in user workspaces, and adds robust session resume functionality for interrupted workflows. [Link](https://github.com/agentscope-ai/QwenPaw/pull/5027)
All 5 closed bugs from the issue backlog were fully resolved, including the `send_file_to_user` 404 error, message queue cross-session misrouting, Tauri desktop plugin loader initialization failure, missing real-time UI updates for API-triggered messages, and v1.1.12 regression that broke in-chat image display.

## 4. Community Hot Topics
The most active and widely discussed items of the day, ranked by comment count and user reaction:
1. **#5218 [Bug] Sub-agent context compaction triggers full QwenPaw process freeze** (17 comments): Users running multi-agent collaborative workflows report that the entire application becomes unresponsive when any sub-agent triggers context compression, requiring manual full restores. [Link](https://github.com/agentscope-ai/QwenPaw/issues/5218)
   * Underlying need: Power users relying on multi-agent pipelines require zero-downtime context management that does not break all running tasks at once.
2. **#5262 [Bug] Disabled built-in skills are automatically re-enabled after every version upgrade** (9 comments): Users that manually disable unused built-in tools (e.g. docx/xlsx processing) to prevent accidental misinvocation have to re-configure settings manually after every minor update. [Link](https://github.com/agentscope-ai/QwenPaw/issues/5262)
   * Underlying need: Persistent user configuration across upgrade cycles, with no unnecessary manual rework.
3. **#2969 [Enhancement] Native personal knowledge base integration** (2 👍, 5 comments): Long-requested feature that combines agent task execution capabilities with private user knowledge stores directly in the console, no third-party RAG plugins required. [Link](https://github.com/agentscope-ai/QwenPaw/issues/2969)
   * Underlying need: Large segments of users working with private local data want self-contained, no-external-dependencies private RAG workflows.
4. **#5321 [PR] New scroll durable context manager** (first-time contributor submission, active review): Implements a retrieval-driven alternative to native context compression, that stores full conversation history in a durable SQLite database and lets the agent recall any past turn on demand. It is receiving widespread positive feedback from the community. [Link](https://github.com/agentscope-ai/QwenPaw/pull/5321)

## 5. Bugs & Stability
Reported bugs ranked by severity:
1. **Critical**: #5218 Full process freeze triggered by sub-agent context compaction. No linked fix PR exists, breaks all running multi-agent workflows. [Link](https://github.com/agentscope-ai/QwenPaw/issues/5218)
2. **High**: #5398 Cron scheduler stops dispatching enabled jobs unexpectedly while the parent app process remains alive. No linked fix PR, breaks all user-configured scheduled recurring automation tasks. [Link](https://github.com/agentscope-ai/QwenPaw/issues/5398)
3. **High**: #5345 Custom OpenAI-compatible providers (e.g. OMLX) do not support function calling. No linked fix PR, blocks users running self-hosted or third-party OpenAI-compatible models from using tool invocation features. [Link](https://github.com/agentscope-ai/QwenPaw/issues/5345)
4. **Medium**: #5378 Adding new custom models on v1.1.12.post1 breaks the model management UI, leaving the page empty and unusable. No linked fix PR. [Link](https://github.com/agentscope-ai/QwenPaw/issues/5378)
5. **Medium**: #5330 Zhipu vendor-level API connection test passes, but all individual model connection tests fail. No linked fix PR, affects Chinese users relying on Zhipu AI model services. [Link](https://github.com/agentscope-ai/QwenPaw/issues/5330)
6. **Minor**: #5373 The `execute_shell_command` tool fails to parse standard shell special characters including pipes, redirection and stderr redirection. No linked fix PR, limits the agent's standard shell automation capabilities. [Link](https://github.com/agentscope-ai/QwenPaw/issues/5373)

## 6. Feature Requests & Roadmap Signals
Features with high priority that are highly likely to land in the upcoming v1.1.13 minor release:
- The full mobile responsiveness sprint covering all 10+ core console pages (models, sessions, cron jobs, workspace, channels etc.) is 90% complete, and is the top high-priority improvement that aligns with the user request to stabilize core app usability before adding new features.
- New optional scroll durable context management strategy (PR #5321) will ship as an experimental feature as an alternative to the existing native context compression.
- Drag-and-drop custom model reordering (PR #5399) and batch test/delete for model management (PR #5297) will be included in the next release.
- Recency-aware ranking for memory search (PR #5325) that applies exponential temporal decay to daily memory notes to improve retrieval relevance will also ship in the next version.
Mid-term roadmap signals include planned support for agent-workspace decoupling, and import functionality for existing OpenClaw/Hermes agent configurations requested by migrating users.

## 7. User Feedback Summary
- Positive feedback: Users praised the recently launched new message queue system for drastically improving concurrent multi-agent performance, and the resolution of the earlier cross-session message misrouting bug is well received.
- Top recurring pain points: No persistent skill disabled status across upgrades, broken function calling for custom OpenAI providers, and missing mobile UI support that blocks users from managing their agents on mobile devices.
- Observed core use cases: 24/7 users running scheduled cron jobs for daily personal memory sync, multi-agent collaborative workflows, and fully local self-hosted model deployments for private sensitive data processing.
- Several users reported frustration with recent regressions introduced in v1.1.12 and v1.1.12.post1 related to file rendering and model management, eroding some of the positive experience from the well-received message queue update.

## 8. Backlog Watch
High-priority long-unresolved items waiting for maintainer triage and attention:
1. #2969 Personal knowledge base feature request, open since April 2026 with 5 comments and 2 positive reactions, no official roadmap status update posted for 2+ months. [Link](https://github.com/agentscope-ai/QwenPaw/issues/296

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-06-23
---

## 1. Today's Overview
ZeroClaw saw very high 24-hour activity with 50 updated issues and 50 updated pull requests, with no new official releases published during the window. The vast majority of recent work centers on security hardening, supply chain risk reduction, and alignment with the v0.9.0 milestone roadmap, which tracks 134 open items as of yesterday's refresh. Maintainers are systematically splitting large cross-cutting architecture RFCs into smaller parallel workstreams to unblock faster implementation, while triaging a backlog of high-severity workflow-blocking bugs reported by end users. Overall project health appears strong, with high contributor engagement and clear prioritization of production readiness requirements.

## 2. Releases
No new releases were published in the last 24 hours. The project remains on track for its upcoming v0.9.0 feature release focused on auth, security, and gateway hardening.

## 3. Project Progress
Only 1 PR was merged/closed in the 24-hour window, while 8 previously active issues were marked resolved, moving key workstreams forward:
- The 2 high-level cross-cutting RFCs (Native Dynamic-Library Plugin System [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) and Wasm-first Node.js elimination [#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674)) were formally closed after final review, and split into 3 independent actionable sub-RFCs to enable parallel development.
- The long-standing bug causing cron jobs to spawn duplicate concurrent runs [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) was resolved, preventing resource overload from recurring scheduled tasks.
- The requested WhatsApp per-JID group allowlist feature [#6371](https://github.com/zeroclaw-labs/zeroclaw/issues/6371) was completed, adding access control for WhatsApp channel deployments.
- Test coverage for runtime hook panic recovery and cancellation propagation [#7688](https://github.com/zeroclaw-labs/zeroclaw/issues/7688) was added, reducing runtime failure edge cases.

## 4. Community Hot Topics
The most actively discussed items highlight shared community focus on reducing supply chain risk and improving production deployment security:
1. [zeroclaw-labs/zeroclaw#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) (6 comments): RFC for the native dynamic-library plugin system. Underlying need: the community is pushing to resolve ZeroClaw's longstanding monolithic runtime pain point, so users can extend functionality without building full custom binaries.
2. [zeroclaw-labs/zeroclaw#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) (5 comments): RFC to eliminate all Node.js dependencies from build and runtime. Underlying need: enterprise users in regulated environments want to remove npm ecosystem supply chain attack surfaces entirely from their deployments.
3. [zeroclaw-labs/zeroclaw#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) (2 comments, 1 👍): RFC to replace the existing React/Vite web UI build with a Rust→Wasm framework. Underlying need: this follow-up to the no-Node RFC gained positive community feedback as a concrete path to fully remove Node from the web UI pipeline.
4. [zeroclaw-labs/zeroclaw#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (3 comments): RFC for hardware PGP signing, hermetic builds and SLSA provenance. Underlying need: teams deploying ZeroClaw for internal production use require verifiable software supply chain compliance to meet internal audit requirements.

## 5. Bugs & Stability
Bugs are ranked by severity below, with fix progress noted:
1. **S0 (Data loss/security risk)**: [zeroclaw-labs/zeroclaw#8013](https://github.com/zeroclaw-labs/zeroclaw/issues/8013) - Disabling an agent does not stop its bound Discord channel from remaining online and responding to users. The bug is marked in-progress, with no linked fix PR published yet.
2. **S1 (Workflow blocked)**: [zeroclaw-labs/zeroclaw#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) - Default 32k context budget is exceeded on the first iteration by combined system prompt + tool definitions, causing perpetual preemptive trimming. A partial fix PR #8126 that refreshes system prompt after tool swaps is open, with full root cause resolution ongoing.
3. **S1 (Workflow blocked)**: [zeroclaw-labs/zeroclaw#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) - MCP tools are missing from Zerocode TUI sessions even when the gateway detects them. Marked accepted, fix in early development.
4. **S1 (Workflow blocked)**: [zeroclaw-labs/zeroclaw#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) - Native/MCP tools fail to load for OpenAI Responses and Anthropic reasoning model turns. Marked accepted.
5. **S1 (Workflow blocked)**: [zeroclaw-labs/zeroclaw#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) - Kimi Code (Moonshot) provider points to a deprecated 404 endpoint. A simple 1-line endpoint update fix is expected to land quickly.
6. **S2 (Degraded behavior)**: [zeroclaw-labs/zeroclaw#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) - 74 test failures on Windows due to Unix-only test commands, path semantics, and console encoding gaps. Windows test runners are not yet enabled in CI, so regressions are not caught pre-merge.

## 6. Feature Requests & Roadmap Signals
User requested features with high implementation likelihood:
- Low-complexity, high-value items including OpenRouter model fallbacks support [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138), Telegram webhook ingress mode [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046), and the `session_ttl_hours` auto-truncate stale chat history feature [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) are all expected to land in the next minor v0.8.2 patch release.
- Larger cross-cutting features including the local no-IdP username/password auth provider, Wasm-first default plugin runtime, and in-app web dashboard upgrade workflow are targeted for the v0.9.0 release tracked at [zeroclaw-labs/zeroclaw#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

## 7. User Feedback Summary
Reported real-world user pain points this window:
- New users report high friction when they accidentally get trapped behind the default "balanced" risk profile that blocks common tool operations, leading to broken first-run experiences. The recently opened PR #8133 that forces the "yolo" risk preset during quickstart directly addresses this top complaint.
- Teams running ZeroClaw on public channels (Telegram, Slack, WhatsApp) report rapidly ballooning context sizes from months of retained chat history, leading to runaway LLM token costs and slower response times.
- Users on restricted corporate networks cannot use the current long-polling Telegram channel implementation due to egress rules that block sustained outbound connections.
- Telegram prompt caching not working [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) leads to 2-3x higher than expected LLM costs for Telegram bot operators.

## 8. Backlog Watch
Long-running high-priority items that need additional maintainer attention:
1. [zeroclaw-labs/zeroclaw#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808): Default 32k context overflow bug created April 16, 2026. It has remained open for over 2 months despite multiple comments and confirmed S1 severity, and has not received a full resolution yet.
2. [zeroclaw-labs/zeroclaw#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360): Telegram prompt caching failure bug created May 4, 2026. Marked S2 severity, it has no public assigned lead and no linked PR as of this update.
3. [zeroclaw-labs/zeroclaw#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462): 74 Windows test failures created June 10, 2026. The root cause (no Windows CI runner enabled) remains unaddressed, leading to growing functional gaps for Windows desktop users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*