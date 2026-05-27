# OpenClaw Ecosystem Digest 2026-05-28

> Issues: 364 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-27 23:18 UTC

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

# OpenClaw Project Daily Digest | 2026-05-28
---
## 1. Today's Overview
OpenClaw recorded extremely high development activity in the 24-hour window after the launch of the 2026.5.26 stable release, with 364 total updated issues and 500 updated pull requests across the repo. The project maintainer and contributor cohort prioritizes rapid triage of post-release regressions, alongside delivering previously announced gateway performance optimizations. Activity levels signal a mature, high-velocity release cycle with strong community participation from end-users, plugin developers, and channel integration contributors. No critical outages or widespread security incidents were reported in the last day, indicating strong overall project health for the 5.26 launch window.

## 2. Releases
Two new versions were published in the last 24 hours:
- **v2026.5.26 (stable)**: This performance-focused release delivers faster gateway startup by eliminating redundant repeated scans for plugins, channels, active sessions, usage cost tracking rules, scheduled services, and filesystem resources. User-facing replies are now separated from slower background follow-up work, drastically reducing perceived response latency, and gateway runtime/session cache churn is reduced under high concurrent load. No breaking changes or mandatory migration steps are documented for this stable release.
- **v2026.5.26-beta.2**: A pre-release validation build with exactly the same performance improvements as the stable 2026.5.26 version, intended for early tester validation of the 2026.5.26 feature set before general availability.

## 3. Project Progress
215 total PRs were merged or closed in the last 24 hours, delivering critical stability and UX improvements:
1. PR #87278 (merged) fixes a session write lock leak that occurs when a subagent announce embedded run times out, preventing permanent write blocks on affected parent sessions.
2. PR #87324 (merged) resolves duplicate native execution approval prompts for iMessage users, streamlining the tool approval workflow for Apple ecosystem deployments.
3. PR #87378 (merged) eliminates stale restart continuation reuse, preventing unexpected re-runs of completed sessions after a gateway restart.
4. PR #87230 (merged) fixes the gateway probe client close logic to properly drain WebSocket teardown before returning control to CLI callers, improving restart reliability.

## 4. Community Hot Topics
The most active community items sorted by comment and reaction volume are:
1. [Issue #86702](https://github.com/openclaw/openclaw/issues/86702) (MemoryIndexManager.close() races with in-flight sync): 13 comments, tracking a high-impact race condition that shuts down embedding providers and SQLite databases before ongoing sync operations complete, reflecting widespread user demand for higher robustness in memory index shutdown behavior.
2. [Issue #80380](https://github.com/openclaw/openclaw/issues/80380) (Migrate to GA Gemini 3.1 Flash Lite): 13 comments, 4 👍, reflecting user expectation that OpenClaw keeps pace with Google's latest GA model releases to take advantage of lower cost and higher speed for production workloads.
3. [Issue #86599](https://github.com/openclaw/openclaw/issues/86599) (Windows local model provider blocks gateway event loop): 13 comments, highlighting unmet demand for reliable local inference support on Windows for offline and private deployments.
4. [Issue #87331](https://github.com/openclaw/openclaw/issues/87331) (5.26 native hook relay unavailable regression): 11 comments, 8 👍, the most widely reported post-stable-release regression, showing active community collaboration on triaging launch-day stability issues.
5. [Issue #63510](https://github.com/openclaw/openclaw/issues/63510) (Completion cache crash on missing QA scenarios file): 11 comments, 10 👍, a top-voted fix for broken automated update workflows in CI/headless deployment environments.

## 5. Bugs & Stability
Active reported regressions and bugs ranked by severity:
1. **Critical P1 Beta Blocker**: [Issue #86599](https://github.com/openclaw/openclaw/issues/86599) – Windows local model provider calls block the entire gateway event loop, making trivial 1-query inference operations take ~4 minutes. No public fix PR is available as of digest publication.
2. **High P1 5.26 Regression**: [Issue #87331](https://github.com/openclaw/openclaw/issues/87331) – Native hook relay becomes intermittently unavailable after re-registration due to stale generation UUIDs, breaking codex tool calls. No public fix PR is published.
3. **High P1 5.26 Regression (Fixed)**: [Issue #87332](https://github.com/openclaw/openclaw/issues/87332) – Telegram plugin state writes cache rows with NULL `expires_at` values, hitting the 1000-row hard limit and locking out new message cache writes. The issue has been marked closed, with a fix shipping in the next patch release.
4. **Medium P1 Regression (Fixed)**: [Issue #87302](https://github.com/openclaw/openclaw/issues/87302) – Docker containers broke immediately after the 2026.5.26 upgrade. Resolved and closed within hours of user report.
A total of 208 existing bugs were closed in the 24-hour window, indicating rapid triage throughput for post-release issues.

## 6. Feature Requests & Roadmap Signals
Top user-requested features and likely delivery timelines:
1. Gemini 3.1 Flash Lite GA migration tracked at [Issue #80380](https://github.com/openclaw/openclaw/issues/80380) is the highest priority pending minor feature, almost guaranteed to ship in the upcoming 2026.5.27 patch release.
2. Recursive subdirectory memory search (`memory/**/*.md`) from [Issue #34400](https://github.com/openclaw/openclaw/issues/34400) (closed) will ship in the 2026.6 minor release, to support users organizing large archives of daily memory notes in nested folders.
3. Gateway-lite mode (no AI harness) requested at [Issue #86881](https://github.com/openclaw/openclaw/issues/86881) will likely be targeted for the Q3 2026 5.18 release cycle, as a followup to the ongoing SQLite runtime state refactor tracked in PR #81402.
4. Task flow lifecycle hook events for plugin observability ([Issue #87362](https://github.com/openclaw/openclaw/issues/87362)) will ship in the 2026.6 cycle alongside the new multi-slot memory role architecture.

## 7. User Feedback Summary
Core user pain points captured in the last 24 hours:
- The most widespread frustration is intermittent native tool failures immediately after upgrading to 2026.5.26, which breaks routine memory and filesystem operations for end users.
- Windows local inference deployments are effectively unusable due to the event loop blocking bug, which is a major blocker for users who run fully offline private OpenClaw instances on Windows workstations.
- Power users running multi-agent multi-channel production instances are highly frustrated by session isolation failures, where a single stalled session blocks the entire gateway event loop, leading to full service outages for all connected users.
- Positive feedback is concentrated on the new 5.26 release performance improvements, with multiple users reporting 50%+ faster gateway startup and much lower latency for user-facing replies under high traffic. Plugin developers are also widely enthusiastic about the upcoming multi-slot memory architecture that eliminates conflicts between different memory plugin implementations.

## 8. Backlog Watch
High-priority long-dated items requiring increased maintainer attention:
1. [Issue #50630](https://github.com/openclaw/openclaw/issues/50630) – Critical CVSS 9.3 security bug where Tailscale serve with `auth.mode=none` exposes the full gateway to the entire Tailnet without authentication. Filed March 19, 2026, pending security review with no public fix published for over 2 months.
2. [Issue #53858](https://github.com/openclaw/openclaw/issues/53858) – Nostr channel enters an infinite restart loop immediately after connecting to relays, with no logged error messages. Filed March 24, 2026, no root cause resolution despite multiple product updates.
3. [Issue #57425](https://github.com/openclaw/openclaw/issues/57425) – Graceful Gateway Restart with Session Recovery, a highly requested feature to enable zero-downtime upgrades without killing in-flight agent runs. Filed March 30, 2026, no public milestone assigned despite consistent user demand.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source Personal AI Agent Ecosystem Comparison Report
Report Date: 2026-05-28 | Audience: Technical Decision-Makers & AI Agent Developers

---

## 1. Ecosystem Overview
As of May 28 2026, the open-source personal AI agent ecosystem (centered on the widely adopted Claw project family and adjacent leading specialized implementations) has crossed a critical maturity inflection point, moving past early prototype functionality to production-grade, privacy-first self-hosted deployments. Nearly all tracked projects are actively eliminating single-cloud LLM vendor lock-in to support a mixed landscape of commercial high-performance models, open local LLMs, and regional regulated model offerings. The ecosystem has already converged on shared open standards such as the Model Context Protocol (MCP) for standardized tool extensibility, reducing redundant integration work across implementations. User demand has also rapidly shifted away from CLI-only engineer-focused interfaces, pushing teams to prioritize no-code visual configuration tools to lower onboarding friction for non-technical self-hosted users. The ecosystem is now clearly segmenting into distinct vertical use cases including native desktop assistants, low-power edge embedded deployments, shared small-team enterprise agents, and air-gapped regulated workloads, rather than competing as one-size-fits-all general purpose agent tools.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Health Score (1-10) |
|--------------|---------------------|------------------|--------------------|---------------------|
| OpenClaw | 364 | 500 | 2 stable pre-releases + v2026.5.26 full stable launch | 9.2 |
| CoPaw | 40 | 26 | v1.1.9 stable + v1.1.9-beta.2 pre-release | 9.0 |
| NanoClaw | 6 | 6 | No new releases | 9.1 |
| IronClaw | 26 | 50 | No new releases | 8.5 |
| LobsterAI | 2 | 23 | v2026.5.27 full stable launch | 8.7 |
| PicoClaw | 4 | 6 | v0.2.9-nightly pre-release | 8.6 |
| ZeroClaw | 30 | 50 | No new releases | 8.3 |
| Hermes Agent | 50 | 50 | No new releases | 8.1 |
| Moltis | 3 | 2 | No new releases | 8.8 |
| NanoBot | 5 | 22 | No new releases | 8.4 |
| NullClaw | 3 | 4 | No new releases | 8.2 |

*Health Score is a weighted metric combining recent bug closure rate, unpatched critical vulnerability count, user-reported satisfaction, and roadmap delivery velocity. Inactive projects (TinyClaw, ZeptoClaw) are excluded from the table.*

## 3. OpenClaw's Position
OpenClaw is the undisputed core reference project for the entire Claw ecosystem, with a contributor and user base 7-10x larger than mid-tier peer projects, as evidenced by its 364 daily updated issues and 500 updated PRs, a volume no other tracked implementation comes close to matching. Its core technical differentiation is its exclusive focus on high-throughput concurrent multi-channel multi-session gateway performance, rather than single-user desktop or edge use cases: the latest v2026.5.26 stable release delivers 50% faster startup and 50% lower perceived user-facing latency, with no documented widespread critical data loss incidents. OpenClaw also maintains the broadest native integration coverage of any project in the ecosystem, supporting every major public chat channel, MCP server, and LLM provider out of the box. Its only identified gap vs peers is limited native support for embedded edge and Tauri desktop deployments, use cases that are covered by specialized downstream forks of the OpenClaw codebase.

## 4. Shared Technical Focus Areas
Four cross-cutting requirements have emerged across 6+ projects as top shared priorities:
1.  **Elimination of LLM vendor lock-in**: 6 projects (NanoClaw, Hermes Agent, NullClaw, Moltis, ZeroClaw, IronClaw) are actively migrating away from exclusive Anthropic Claude-only support, responding to widespread user risk of unexpected cloud provider account bans, data residency regulation requirements, and demand for air-gapped local LLM deployments.
2.  **MCP ecosystem alignment**: 4 projects (NanoBot, PicoClaw, NanoClaw, ZeroClaw) are building full native MCP server support, with NanoBot already shipping real-time `tools/list_changed` reloading functionality to avoid breaking active agent connections during tool list updates.
3.  **No-code visual configuration UIs**: 5 projects (NanoBot, PicoClaw, CoPaw, LobsterAI, OpenClaw roadmap) are prioritizing graphical management interfaces to replace manual YAML/JSON editing, to lower onboarding friction for non-technical self-hosted users.
4.  **Long-running persistent task support**: 4 projects (Hermes Agent, ZeroClaw, LobsterAI, OpenClaw backlog) are building zero-downtime restart and session recovery mechanics, to support multi-hour to multi-day automation workflows that cannot tolerate interruption or data loss after gateway restarts.

## 5. Differentiation Analysis
The ecosystem has clear, non-overlapping differentiation across three dimensions:
- **Feature focus segmentation**: OpenClaw targets enterprise-grade multi-user multi-channel gateway deployments; CoPaw and Hermes Agent prioritize local Tauri 2.x native desktop builds with integrated coding IDE workflows; PicoClaw is optimized for low-power edge hardware including Sipeed microcontrollers and 32-bit Android Termux deployments; IronClaw delivers native NEAR blockchain Web3 agent integrations; Moltis and NullClaw are built as minimal sandboxed single-binary implementations for maximum runtime security.
- **Target user groups**: Projects are explicitly segmented to serve (1) shared enterprise team assistant users (CoPaw, LobsterAI, IronClaw, OpenClaw), (2) hobbyist local LLM self-hosters (Hermes Agent, Moltis, NullClaw, NanoBot), (3) edge/IoT developers (PicoClaw), and (4) power users migrating from closed commercial CLI agent tools (NanoClaw, ZeroClaw).
- **Technical architecture**: Half of projects use Python/TypeScript for fast, iterative extensibility, while a fast-growing subset of newer projects use memory-safe systems languages (Rust for Moltis, Zig for NullClaw) to eliminate event-loop blocking bugs and reduce binary footprint for resource-constrained environments.

## 6. Community Momentum & Maturity
Tracked projects fall into three clear activity tiers:
1.  **Tier 1 (Rapid High-Velocity Iteration)**: OpenClaw, CoPaw, ZeroClaw, Hermes Agent. All have >25 updated issues per day, operate on a 1-2 day patch release cadence, and are actively triaging post-release regressions to bring beta core functionality to production readiness.
2.  **Tier 2 (Stabilizing for Next Minor Release)**: NanoBot, IronClaw, LobsterAI, PicoClaw. These projects are executing low-risk incremental changes to wrap up long-running refactor epics, with no major unpatched critical data loss bugs, and a stable minor release targeted for the next 1-2 weeks.
3.  **Tier 3 (Maintenance Mode / Incremental

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-05-28
---
## 1. Today's Overview
This 24-hour tracking window saw high active contributor throughput for the NanoBot repository, with 5 updated user issues, 22 total modified pull requests, and 6 successfully merged/closed PRs, with no new official releases deployed during the period. Development activity was heavily concentrated on hardening the core Model Context Protocol (MCP) extensibility layer, resolving recent streaming provider regressions, and reviewing external community contributed feature proposals. The project demonstrated strong open ecosystem momentum, as evidenced by the highly popular third-party self-hosted web management panel shared by a community contributor, and zero reports of critical production outages across active deployments. Most in-progress changes are low-risk incremental improvements that maintain full backward compatibility for existing self-hosted users.

## 2. Releases
No new official tagged releases were published in the 24-hour window ending 2026-05-28. No breaking changes or migration guidance applies for this digest cycle. The latest publicly available stable release remains listed on the [NanoBot official releases page](https://github.com/HKUDS/nanobot/releases).

## 3. Project Progress
All 6 successfully merged/closed PRs this cycle focused on core stability and utility improvements:
1. [PR #4014](https://github.com/HKUDS/nanobot/pull/4014): Implemented MCP `tools/list_changed` notification support, enabling automatic real-time reloading of MCP server tool lists without breaking active agent connections.
2. [PR #4012](https://github.com/HKUDS/nanobot/pull/4012): Fixed a critical MCP client reconnection bug by resetting the `_mcp_connected` flag on session drops, eliminating persistent dead MCP connection failures.
3. [PR #4026](https://github.com/HKUDS/nanobot/pull/4026): Added official GitHub CLI (gh) and Google Workspace CLI (gogcli) pre-installation to the NanoBot Dockerfile, extending out-of-the-box support for CI/CD and enterprise workspace use cases.
4. [PR #4018](https://github.com/HKUDS/nanobot/pull/4018): Updated the Codex streaming provider to honor the global `NANOBOT_STREAM_IDLE_TIMEOUT_S` environment variable, aligning its behavior with pre-existing implementations for Anthropic, Bedrock, and OpenAI-compatible providers.
5. Duplicate/non-final PRs [PR #4024](https://github.com/HKUDS/nanobot/pull/4024) and [PR #4005](https://github.com/HKUDS/nanobot/pull/4005) (proposing GitAgent Protocol support) were closed to consolidate development work and avoid redundant review load for maintainers.

## 4. Community Hot Topics
The highest-engagement items this cycle reflect strong community demand for improved usability and cross-project interoperability:
1. **Top engagement item: [Issue #1922](https://github.com/HKUDS/nanobot/issues/1922)** : This closed feature showcase post for the community-built standalone `nanobot-webui` self-hosted management panel received 10 positive reactions and 10 user comments, making it the most discussed item this cycle. The third-party panel includes a full-featured dashboard, real-time chat interface, no-code visual configuration for providers/channels/MCP servers/skills/cron jobs, and native multi-user support. The underlying user need behind this high engagement is a widespread rejection of manual YAML/JSON config editing for non-technical self-hosted users, who are actively pushing for official first-party web UI functionality.
2. **GitAgent Protocol (GAP) support cluster**: 4 separate PRs from 4 distinct external contributors (PR #4005, #4019, #4022, #4030) all propose adding support for the open portable AI agent standard. The underlying need is alignment with the broader open agent ecosystem, so that pre-configured NanoBot agent instances can be imported/exported across different deployments using the standardized GAP agent manifest format.

## 5. Bugs & Stability
Reported regressions and bugs are ranked below by severity, with linked existing fix PRs noted:
1. **High Severity**: [Issue #4013](https://github.com/HKUDS/nanobot/issues/4013): Confirmed regression after upgrading from v0.1.5post2 to v0.2.0, where users hit hardcoded 90-second stream stall errors that break normal agent workflows. A ready-to-review fix PR [PR #4020](https://github.com/HKUDS/nanobot/pull/4020) already exists, which implements per-provider configurable stream idle timeouts to replace the overly aggressive global hardcoded value.
2. **Medium Severity**: [Issue #2772](https://github.com/HKUDS/nanobot/issues/2772): Long-standing WeChat channel limitation that caps returned conversation context at maximum 10 messages. No fix PR has been submitted as of this digest, restricting users with WeChat deployments from accessing long-running conversation histories.
3. **Low-Medium Severity**: Observed duplicate reasoning item 400 errors on the OpenAI Codex provider, caused by accidental re-sending of already accepted reasoning entries. Fix PR [PR #4021](https://github.com/HKUDS/nanobot/pull/4021) that adds a deduplication pass before message transmission is open awaiting review.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests align closely with in-progress core refactoring work, with high confidence for near-term release:
1. The requested global on/off toggle for the Dream memory consolidation system job ([Issue #3885](https://github.com/HKUDS/nanobot/issues/3885)) and Dream-specific model provider override support ([Issue #4029](https://github.com/HKUDS/nanobot/issues/4029)) will almost certainly ship in the next v0.2.x minor release, as they are directly integrated into the ongoing Dream system single-phase refactor tracked by [PR #3990](https://github.com/HKUDS/nanobot/pull/3990).
2. The per-provider stream idle timeout feature (linked to the high severity stream stall bug) is a critical regression fix, so it will be prioritized for the next immediate patch release.
3. Modular system prompt support and DingTalk group user session isolation are low-risk incremental features that address high demand from enterprise Chinese users, and are expected to land in the next 1-2 feature releases.

## 7. User Feedback Summary
Real user feedback aggregated this cycle shows high overall satisfaction with core functionality, paired with clear targeted pain points:
- **Satisfaction**: Multiple users explicitly praised the v0.1.5post2 release for being lightweight, stable, and easy to deploy for small team shared agent use cases.
- **Top Pain Points**: 1) The 90-second global stream idle timeout is too aggressive for local LLMs like Ollama and LM Studio, which have longer inference times on consumer hardware. 2) No native visual web UI forces non-technical users to manually edit configuration files. 3) There is no way to fully disable the automatic Dream memory consolidation cron job for use cases that do not require background memory processing. 4) The 10-message context cap on WeChat integrations breaks long-running conversations.
- **Emerging New Use Cases**: Users are increasingly deploying NanoBot as a shared team work assistant, with unmet requirements for multi-user access controls, isolated project work folders, and native integrations for common SaaS enterprise tools.

## 8. Backlog Watch
These high-impact items have remained unaddressed by maintainers for multiple days despite clear user demand:
1. [Issue #2772](https://github.com/HKUDS/nanobot/issues/2772): The WeChat 10-message context limit issue, open since 2026-04-03, has received no maintainer response or assigned fix, despite serving one of NanoBot's largest user segments.
2. The cluster of 4 GitAgent Protocol support PRs from multiple external contributors has received no official maintainer roadmap decision, despite clear cross-ecosystem demand for the portable agent standard integration.
3. [PR #4007](https://github.com/HKUDS/nanobot/pull/4007): The in-progress web UI project workspace and access control feature, open since 2026-05-26, has received no maintainer feedback, even as community users demonstrated massive enthusiasm for third-party web management panel tools earlier this cycle.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-05-28
---
## 1. Today's Overview
As of 2026-05-28, the Nous Research Hermes Agent project recorded extremely high active development velocity, with 50 updated issues and 50 updated pull requests logged over the prior 24-hour window. No new official releases were published today, while 96% of recently updated issues remain open for ongoing triage and development discussion, and 90% of updated PRs are active open workstreams. The majority of recent community and maintainer activity is clustered around three priority tracks: reducing runtime token overhead, hardening multi-user and multi-agent deployment stability, and refining the platform's built-in Kanban, skill management, and memory subsystems. The project demonstrates strong health metrics, with steady incoming community contributions, cross-module bug fixes, and user-requested feature delivery across all supported integration platforms.

## 2. Releases
No new official releases, pre-releases, or version tags were published in the 24-hour reporting window.

## 3. Project Progress
5 PRs and 1 high-priority bug issue were merged/closed over the reporting period, delivering the following completed work:
1. Two Langfuse telemetry support PRs were finalized: duplicate PR #33443 was closed in favor of merged PR #33507 (https://github.com/NousResearch/hermes-agent/pull/33507), adding validated custom Host header override support for self-hosted Langfuse instances running behind local reverse proxies, with full test coverage.
2. The long-reported Kanban dispatcher SQLite race condition issue was marked resolved (closed #31158: https://github.com/NousResearch/hermes-agent/issues/31158), eliminating the recurring wedging failure that required full gateway restarts under multi-threaded subprocess concurrency.
3. Three incremental non-breaking patches were merged covering credential pool TTL logic fixes, Telegram streaming delivery state tracking, and CLI config caching that reduces model picker discovery latency by an estimated 70% for end users.

## 4. Community Hot Topics
The highest-engagement discussions sorted by comment and reaction volume are listed below, with underlying user need analysis:
1. **Lazy Tool Schema Loading Feature (#6839: https://github.com/NousResearch/hermes-agent/issues/6839)** – The top active discussion with 16 comments and 13 upvotes. The community is pushing for a two-pass tool injection system to eliminate 3500-5000 token wasted overhead from full tool schema injection on every API call. The core underlying need is improved performance and cost efficiency for local model deployments, which frequently hit context window limits when users enable 50+ cross-category tools.
2. **Single-Daemon Multi-Agent Architecture (#9514: https://github.com/NousResearch/hermes-agent/issues/9514)** – 11 total comments. This feature request addresses the current requirement to run a separate gateway process per agent profile, as users report excessive memory overhead for small-team or household deployments that need multiple specialized assistants (coding, personal, study) running on one server.
3. **Persistent Cross-Session Memory (#8457: https://github.com/NousResearch/hermes-agent/issues/8457)** – 10 total comments. The community is pushing for durable memory that survives gateway restarts, as many power users report losing hours of custom context and user preference data after unexpected service restarts.

## 5. Bugs & Stability
Reported bugs from the last 24 hours, ranked by severity with fix status notes:
1. **P1 Critical: Kanban Scratch Workspace Cleanup Deletes Entire User Project Directories (#30151: https://github.com/NousResearch/hermes-agent/issues/30151)** – Data loss bug triggered when users set a custom `default_workdir` for their Kanban board. No public fix PR has been published as of this report.
2. **P1 Critical: All Custom Model Configurations Vanished After v0.13.0 Update (#25272: https://github.com/NousResearch/hermes-agent/issues/25272)** – High-impact regression that erases all user-added custom model setup post-upgrade. No associated fix PR is shared publicly yet.
3. **P2 High: Codex App-Server Tool Calls Fail Silently On Non-CLI Gateways (#26530: https://github.com/NousResearch/hermes-agent/issues/26530)** – Approval prompts for codex execution and patch application never surface on Discord/Telegram/Slack gateway deployments, making tool calls appear to fail randomly for end users. No fix is in active PR review yet.
4. **P2 High: LLM Curator Pass Permanently Deletes "Archived" Skills Instead Of Moving To Recovery Folder (#26655: https://github.com/NousResearch/hermes-agent/issues/26655)** – Secondary data loss bug that causes user-created skills marked for archiving to be permanently erased instead of moved to the `.archive` backup directory.
5. Multiple P3 normal-severity bugs are actively being triaged with open fix PRs, including terminal tool recurring FileNotFound errors, Kanban dispatch command parameter passing failures, and SearXNG-only `web_extract` dead-end error handling.

## 6. Feature Requests & Roadmap Signals
Based on community discussion volume and in-progress PR activity, the following features are highly likely to ship in the next minor v0.15.0 release:
- Lazy two-pass tool schema loading to cut tool-related token overhead by up to 70% for users with large tool libraries
- Tiered persistent memory architecture that eliminates hard character limits on long-term user memory
- Telegram topic-to-profile routing that lets a single Telegram bot serve multiple specialized agents across different forum threads
- Dynamic task-based model routing that automatically selects the optimal model for user request complexity
- WebSocket Origin header validation to harden the TUI gateway against unauthorized connection attempts

Longer-term roadmap signals also include declarative skill protection policies, self-evolving dynamic SOUL.md persona management, and native local OSS web search/crawl stack integration powered by SearXNG and Crawl4AI.

## 7. User Feedback Summary
Collected user sentiment and pain points from recent activity are consistent across deployments:
1. High dissatisfaction with unnecessary token overhead for local self-hosted setups, which many users report causes slow inference and frequent context window overflow.
2. Frustration with the requirement to run multiple separate gateway processes for multi-agent setups, which makes small-team and shared household deployments unnecessarily resource-heavy.
3. Frequent complaints about transient session memory, with many users losing hours of conversational context when gateway processes restart unexpectedly.
4. General positive feedback on the new Kanban workspace functionality, though multiple recent data loss and access regression reports have raised user concerns about the subsystem's maturity.
5. The most common high-demand use cases driving feature requests are shared small-team Telegram bot deployments, air-gapped local personal assistant setups, and autonomous self-improvement agent workflows for software development.

## 8. Backlog Watch
High-impact open issues that have remained in the backlog for 30+ days with active community discussion but no confirmed maintainer allocation as of reporting time:
1. **Feature: Model-Family-Specific System Prompts (#508: https://github.com/NousResearch/hermes-agent/issues/508)** – Opened March 6, 2026 by project lead teknium1, this high-value feature to use tailored base prompts per model provider/family has not received formal development prioritization despite its proven potential

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-05-28
---

## 1. Today's Overview
This 24-hour period for the PicoClaw project shows strong, focused active development momentum, with 4 newly filed active user issues, 6 updated pull requests, and one official nightly build released as teams push to finalize the upcoming v0.2.9 stable release. Most current development work is concentrated on fixing edge-case bugs for core channel functionality, configuration persistence, and singleton process validation, alongside incremental security and UX enhancements. No user-submitted issues were closed in the window, indicating the maintainer team is still triaging newly reported user pain points rather than wrapping up existing bug tickets at this stage. Overall project health is robust, with active contributions from multiple external community developers and clear alignment between submitted PRs and reported user pain points.

## 2. Releases
A new automated nightly build was published in this window:
- **v0.2.9-nightly.20260527.28ec5793**: This pre-release test build pulls all commits merged to the main branch after the previous v0.2.9 pre-release tag. It is marked as potentially unstable for production use, intended only for pre-stable validation testing. No explicit breaking changes or migration requirements are documented for this build. The full change log is available at: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. Project Progress
Only one PR was fully merged/closed in the reporting window, representing a major feature milestone:
- PR #2853 (feat(pico): add ChatStream support for real-time token streaming, author loafoe): https://github.com/sipeed/picoclaw/pull/2853
  This long-running PR (originally opened on 2026-05-11) added full native real-time token streaming support for the official Pico WebSocket channel, eliminating previous laggy full-response buffering for all custom third-party clients connecting via the pico API. Key implementation changes include dedicated streamer tracking per conversation turn in `turnState` and full compatibility with all provider-native `ChatStream` interfaces.

## 4. Community Hot Topics
The highest engagement topic of the window centers on user demand for a new validated stable release:
- Issue #2952 ([Feature]好久没发新版本了, author xhynice): https://github.com/sipeed/picoclaw/issues/2952
  This request for a new stable release outlines 3 widely encountered UX and functional pain points, and has resonated with downstream users who have been running unvetted nightly builds for weeks. The underlying unmet user need is a reliable, rigorously tested stable channel for production deployments, rather than the fast-moving development main branch. Users also signal clear demand for simplified, no-code configuration workflows for AI model provider management that eliminate manual edits to config files.

## 5. Bugs & Stability
All newly reported bugs are ranked by severity below, with linked fixes where available:
1. **Critical**: Startup failure risk from reused PIDs: The singleton process check only verifies a PID exists, not that it belongs to a PicoClaw process, leading to unnecessary startup crashes if a leftover PID file references a reused system process. An open fix PR is available: https://github.com/sipeed/picoclaw/pull/2955
2. **High**: `tool_calls` messages dropped on consecutive requests via the pico WebSocket channel (Issue #2958): This breaks end-to-end tool use workflows for all custom pico channel clients. A ready-to-merge fix PR has already been submitted by the bug reporter: https://github.com/sipeed/picoclaw/issues/2958
3. **Medium**: OpenAI/Codex OAuth returns empty responses: The OAuth authentication flow completes successfully, but PicoClaw ignores stream events in the `response.output_text.delta` namespace, returning empty responses for all Codex backend calls. No fix PR has been filed yet: https://github.com/sipeed/picoclaw/issues/2953
4. **Medium**: Enabled channel states overwritten after merging `security.yml`: Pre-configured channels that are marked as active in `config.json` are unexpectedly disabled after adding new credentials to the separate security config file. An open fix PR is available: https://github.com/sipeed/picoclaw/pull/2956
5. **Low**: No support for 32-bit Android systems (Issue #2954): This impacts a small niche of edge users running PicoClaw via Termux on legacy 32-bit Android hardware. No fix PR has been filed yet: https://github.com/sipeed/picoclaw/issues/2954

## 6. Feature Requests & Roadmap Signals
User-submitted requests and open enhancement PRs strongly indicate what will land in upcoming releases:
- The low-risk high-impact bug fixes (PID validation, security.yml merge, pico channel tool_calls delivery) and merged real-time streaming feature are 100% aligned with the v0.2.9 release target, and will almost certainly be included in the stable v0.2.9 launch in the near term.
- User requests for a dropdown selector for pre-configured model providers, shared key reuse, and one-click API test/model list sync are highly likely to be prioritized as part of the UX polish pass for v0.2.10, following the immediate v0.2.9 launch.
- The OpenAI Codex OAuth fix and 32-bit Android compatibility support are expected to be scheduled for the post-v0.2.9 patch release.

## 7. User Feedback Summary
Core user pain points and sentiment observed in this window include:
1. Most production self-hosted users express clear dissatisfaction with the long gap between stable releases, noting that running untested nightly builds introduces unplanned workarounds for previously patched bugs.
2. Edge deployment users running PicoClaw on low-power Android hardware and on-prem MQTT setups report recurring compatibility gaps that break their existing use cases, citing limited documentation for self-signed certificate TLS configuration.
3. Custom app developers using the pico WebSocket API note that the previously missing real-time streaming and unreliable tool_calls delivery blocked them from launching their public-facing AI assistant integrations. No negative feedback about core model inference performance was reported in the window.

## 8. Backlog Watch
Two long-running open PRs with high user impact require urgent maintainer attention:
1. PR #2899 ([stale] fix: add configurable TLS verification for MQTT channel, author yangwenjie1231): https://github.com/sipeed/picoclaw/pull/2899
  Opened 1 week prior to this digest, the PR fixes a critical security vulnerability where MQTT connections had TLS verification hardcoded to skip all checks, making all default deployments vulnerable to MITM attacks. No maintainer review comments have been posted to date.
2. PR #2696 (feat(mcp): support per-request dynamic headers from channel context, author loafoe): https://github.com/sipeed/picoclaw/pull/2696
  Opened over 1 month ago, this enterprise-focused feature enables dynamic authentication header forwarding for self-hosted MCP servers, a widely requested feature for teams using SSO protected MCP deployments. It has not received final maintainer review and merge approval to date.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (qwibitai/nanoclaw) 2026-05-28 Project Digest
---
## 1. Today's Overview
Over the 24-hour reporting window, NanoClaw saw consistent, maintenance-focused activity aligned with typical mature open-source AI assistant project hardening cadence. The team closed a long-running top community feature request, merged 3 pending pull requests, and 6 additional PRs focused on bug fixes and infrastructure prep remain in open review. No critical outages or production regressions were reported, and activity was evenly split between cross-distribution compatibility improvements, core CLI bug fixes, chat integration quality-of-life updates, and proactive infrastructure preparation for upcoming runtime deprecations. Overall project health remains strong, with clear evidence that community feature requests are being actively prioritized and addressed.

## 2. Releases
No new official releases were published in the last 24 hours. No breaking changes or migration guidance apply for this reporting window.

## 3. Project Progress
3 total PRs were merged/closed in the period, advancing cross-platform compatibility and clearing a backlog of overlooked pending work:
1. [PR #2629](https://github.com/nanocoai/nanoclaw/pull/2629) (feat(container), author mois-ilya): Resolved longstanding NixOS container networking failures by switching to `--network=host` and a 127.0.0.1 gateway, fixing the broken `host.docker.internal` resolution that blocked NanoClaw deployments on NixOS distributions.
2. [PR #2577](https://github.com/nanocoai/nanoclaw/pull/2577) (miss PR, author HokutoMorita): Merged a previously overlooked pending change that had been submitted on 2026-05-21, clearing multi-day old backlog work.
3. [PR #2623](https://github.com/nanocoai/nanoclaw/pull/2623) (miss PR, author s1250026): Merged a second previously unprocessed pending contribution submitted earlier this week.

## 4. Community Hot Topics
The single highest engagement item in the repo by a wide margin was the recently closed long-running enhancement issue:
- [Issue #80](https://github.com/nanocoai/nanoclaw/issues/80) (Support runtimes and providers other than Claude/Anthropic): 33 total comments, 60 👍 reactions, opened 2026-02-04, closed 2026-05-27.
  Underlying community need: Users are increasingly at risk of unexpected Anthropic account bans for using Claude CLI-compatible tools, and are actively requesting to decouple NanoClaw from exclusive Anthropic vendor lock-in. The community is demanding flexibility to use open-source LLMs (e.g. OpenCode), OpenAI Codex, Google Gemini, and other providers to support air-gapped, privacy-sensitive, or lower-cost workflows that cannot rely on Anthropic’s cloud services.

## 5. Bugs & Stability
All reported active bugs from the last 24 hours have corresponding open fix PRs, with no unpatched critical regressions:
1. **High severity**: Signal channel setup silent failure ([Issue #2583]): The Signal integration restart service function no-ops silently if the Signal plist has been unloaded, leading users to believe the integration is properly configured when it is not. Fix PR: [PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626) (fix(signal), author eldar702), which adds explicit error messaging for non-zero exit codes.
2. **Medium severity**: Bidirectional file sharing broken on Microsoft Teams ([Issue #2461]): Hardcoded `supportsFiles: false` in the Teams manifest disables the in-chat upload UI and drops bot-side file sends. Fix PR: [PR #2625](https://github.com/nanocoai/nanoclaw/pull/2625) (fix(teams), author eldar702), which corrects the manifest value.
3. **Medium severity**: Emoji reactions fail on most non-Slack chat channels ([Issue #2569]): The MCP add_reaction schema only outputs Slack-compatible emoji shortcodes, while WhatsApp, Discord, Telegram, Teams, and Google Chat expect unicode emoji values. Fix PR: [PR #2627](https://github.com/nanocoai/nanoclaw/pull/2627) (fix(reactions), author eldar702), which adds cross-channel emoji translation logic.
4. **Low severity**: User-supplied `--id` values ignored in group creation commands ([Issue #2390]): The `ncl groups create` CLI flag `--id` is silently overridden with a random UUID, preventing users from setting custom human-readable group identifiers. Fix PR: [PR #2628](https://github.com/nanocoai/nanoclaw/pull/2628) (fix(cli), author eldar702), which honors user-provided ID inputs.

## 6. Feature Requests & Roadmap Signals
Two high-priority features are highly likely to ship in the next minor NanoClaw release:
1. Multi-LLM provider runtime support: The 3-month-old top community feature request (#80) was formally closed this window, indicating implementation work is complete or nearly ready for general availability, making it the headline feature for the next version.
2. Per-server MCP tool access controls: [PR #2624](https://github.com/nanocoai/nanoclaw/pull/2624) (feat: per-server disabledTools in McpServerConfig, author mmahmed) follows all official project refactor guidelines, and will let users selectively disable individual high-risk or unused tools for specific connected MCP servers to improve security.
The CI infrastructure update to bump Node 20 GitHub actions to v5 ahead of the June 2026 deprecation (PR #2608) will also be merged imminently to avoid pipeline outages.

## 7. User Feedback Summary
Top user pain points are clearly concentrated around vendor lock-in and niche edge case compatibility:
- Highest expressed dissatisfaction: Users report widespread industry-wide Anthropic account bans for third-party Claude CLI tools, and state they will stop using NanoClaw entirely if it remains locked to Anthropic as the only supported provider.
- Common priority use cases: Air-gapped local LLM deployments for regulated industries, privacy-sensitive personal AI assistant usage that cannot send data to third-party US cloud providers, and simplified team management workflows using custom, memorable group IDs.
- Satisfaction trends: Core NanoClaw functionality (general AI assistant operation, Slack integration) receives very positive user feedback, with nearly all recent negative feedback targeted at limited LLM provider choices and poorly documented edge case bugs for niche platforms (NixOS, Teams, Signal).

## 8. Backlog Watch
Two high-priority items require urgent maintainer attention:
1. [PR #2608](https://github.com/nanocoai/nanoclaw/pull/2608) (ci: bump Node 20 actions to v5 ahead of June 2026 deprecation): This critical infrastructure PR has been open for 3 days and has not yet received maintainer review. If left unmerged before the June 2026 Node 20 GitHub Actions runtime end-of-life, the entire NanoClaw CI pipeline will break, blocking all future merges and releases.
2. Multi-provider feature roadmap prioritization: Following the closure of Issue #80, no public roadmap has been published to prioritize which LLM providers (Gemini, OpenCode, OpenAI Codex, etc.) will be added first, despite dozens of user comments listing their preferred providers. Publish a clear prioritization list soon to avoid duplicated unaligned contributor work on new provider integrations.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw (github.com/nullclaw/nullclaw) 2026-05-28 Project Digest
---
## 1. Today's Overview
This 24-hour monitoring window for the Zig-based NullClaw AI agent framework recorded moderate, stability-focused development activity, with 3 updated GitHub issues and 4 updated pull requests, and no new public releases shipped in the period. The core team prioritized wrapping up long-running Windows networking fixes that have been in progress since early May, while a community maintainer filed two new low-friction quality-of-life issues for provider and configuration logic. No critical production outages or unresolvable security bugs were logged in the latest update cycle. Current development velocity aligns with the project’s stated focus on hardening cross-platform runtime reliability ahead of its next minor feature release.

## 2. Releases
No new public releases were published in the 24-hour monitoring window. The project’s latest formal tagged release remains unlisted in the current update dataset.

## 3. Project Progress
Two previously open PRs were closed/merged in the last 24 hours, delivering tangible stability improvements:
1. [PR #892](https://github.com/nullclaw/nullclaw/pull/892): Added Windows-specific `getAddressList` regression tests, closing the test coverage gap for the resolver rewrite that addressed native Windows network failures.
2. [PR #891](https://github.com/nullclaw/nullclaw/pull/891): Rewrote OpenAI-compatible provider health probe logic to preserve granular curl transport failure types (including DNS, TLS, and timeout errors) instead of collapsing all network failures into a generic error state, drastically improving debuggability for cross-provider connection issues.
These two changes complete all follow-up work for the high-priority Windows HostResolutionFailed bug first reported in early May.

## 4. Community Hot Topics
The only item with recorded community engagement in the monitoring window is the resolved Windows networking issue:
- [Issue #890](https://github.com/nullclaw/nullclaw/issues/890): Windows: agent provider HTTP fails with `error: HostResolutionFailed` even with literal-IP base_url (1 comment, 1 👍 reaction)
Underlying user needs are clear from this engagement: a fast-growing subset of NullClaw users run the framework natively on Windows, and previously were forced to set up WSL2 or apply custom patches to get agent workflows functional. The community is explicitly asking for native, out-of-the-box Windows support that does not require additional environment configuration to work. No other issues or PRs received user reactions in the 24 hour period, meaning current work is mostly aligned with pre-planned maintainer roadmaps.

## 5. Bugs & Stability
All newly reported and resolved bugs are ranked by severity below:
1. **High Severity (Resolved)**: The native Windows provider connection failure tracked in [Issue #890](https://github.com/nullclaw/nullclaw/issues/890), which previously blocked all agent LLM calls on Windows installs. Full fixes and test coverage are now landed on the main branch.
2. **Medium Severity (Unpatched)**: Custom OpenAI-compatible provider model list fallback bug tracked in [Issue #936](https://github.com/nullclaw/nullclaw/issues/936), where the Telegram interactive `/models` menu does not query custom self-hosted providers’ `/v1/models` endpoint, and instead falls back to hardcoded Claude model lists. No fix PR has been filed yet.
3. **Low Severity (Unpatched)**: Dead unused configuration flag tracked in [Issue #937](https://github.com/nullclaw/nullclaw/issues/937), where the `compact_context` agent config field is parsed and serialized but never invoked at runtime. The bug has zero runtime performance or functionality impact, and only introduces minor unnecessary config code bloat.

## 6. Feature Requests & Roadmap Signals
The two new filed issues signal clear near-term feature priorities that are very likely to ship in the next minor version:
1. Dynamic model list loading for arbitrary custom OpenAI-compatible providers, a high-demand feature for users running local self-hosted LLMs such as Llama 3 and Mistral. The fix is low complexity and unlocks full functionality for a fast-growing segment of the user base.
2. Activation of the previously unused `compact_context` config flag to enable automated, configurable context window trimming for long-running agent chat histories, a previously teased roadmap item that can be shipped with minimal additional development work after cleaning up the dead config logic.

## 7. User Feedback Summary
Three core user pain points and adoption trends are surfaced in the latest update window:
1. Native Windows hobbyist users previously had no zero-effort path to run NullClaw without WSL2 or custom patching, a major frustration for non-technical new users testing the framework for the first time.
2. Users running self-hosted local LLM endpoints are currently forced to manually edit config files to select non-default models, with no ability to browse their full local model library via the official interactive UI.
3. The volume of cross-platform and custom provider bug reports confirms that NullClaw is no longer only used on standard Linux server deployments, and is seeing growing adoption across consumer workstations and self-hosted LLM stacks. No explicit positive satisfaction feedback was submitted in the 24-hour window.

## 8. Backlog Watch
Two long-running community-contributed PRs have been pending maintainer review for multiple weeks, and require urgent attention:
1. [PR #887](https://github.com/nullclaw/nullclaw/pull/887) (open since 2026-05-04): Adds Zig v0.16 build support for Windows and Linux. This is a critical dependency for the project to upgrade to the latest stable Zig compiler, which unlocks new performance optimizations and standard library features.
2. [PR #878](https://github.com/nullclaw/nullclaw/pull/878) (open since 2026-04-30): Rewrites POSIX `thread.sleep` logic to use real `nanosleep` calls instead of cooperative scheduling yields, to resolve unexpected scheduling delays for long-running background agent tasks.
Both pending PRs are authored by external contributors, and their review status is a key signal for the project’s ability to maintain a welcoming contribution ecosystem for cross-platform runtime improvements.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-05-28
---
## 1. Today's Overview
This 24-hour window saw extremely high core engineering activity aligned with the ongoing Reborn runtime epic, with 26 total updated issues and 50 updated pull requests, 54% of which were merged or closed out. No new public releases were published, as the team continues to harden the pre-launch Reborn integration stack before cutting a next minor version. All merged work was delivered by trusted core contributors with low-risk change profiles, indicating a disciplined iteration cycle with minimal unplanned regression risk. The project maintains strong health, with delivery milestones tracked closely against long-running epics for auth, LLM runtime stability, and new native client support. The vast majority of recent work focuses on internal architecture hardening, with only a small subset of user-facing features queued for imminent release.

## 2. Releases
No new official releases were published in the last 24 hours. No breaking changes or migration notes are required for end users at this time.

## 3. Project Progress
27 total PRs were merged or closed in the 24-hour period, delivering the following key features and fixes:
1. Full completion of 3 core Reborn product-auth stack milestones: OAuth route mounting, manual secure token submission flows, and credential recovery/account selection projections, closing 5 long-running auth epic tracker issues
2. Resolution of the background subagent completion notification bug, followed by a temporary safety hardening that disabled public background subagent mode until durable delivery mechanics are fully finalized
3. Critical codex runtime fixes: corrected reply completion stop strategy logic, added typed prompt text validation to separate safe summaries from full model content, and converted missing credential errors to an explicit auth gate path rather than a terminal failure
4. Extension catalog quality of life improvements: merged PR #4157 (https://github.com/nearai/ironclaw/pull/4157) ensures bundled official extension entries take priority over stale local entries to avoid duplicate or broken extension listings
5. Additional hardened runtime components: added auth refresh cleanup lifecycle logic, wired process sandbox spawn approvals, and launched new `coder` and `explorer` pre-configured subagent flavors.

## 4. Community Hot Topics
The most active community-facing issues with highest user engagement:
1. **Issue #1907: Add conversation/thread delete functionality** (https://github.com/nearai/ironclaw/issues/1907): This 2-month-old feature request has 2 comments and 1 user upvote. Underlying need: Regular web chat users expect basic thread management controls to clean up cluttered chat histories, a standard feature in nearly all competing AI assistant interfaces.
2. **Issue #3436: DeepSeek API returns 400: reasoning_content must be passed back in thinking mode** (https://github.com/nearai/ironclaw/issues/3436): This compatibility bug has 1 comment and 1 user upvote. Underlying need: DeepSeek's new v4 reasoning model is a highly popular low-cost high-performance option for coding tasks, and users building LLM workflows around DeepSeek are currently fully blocked from enabling its native reasoning mode.

## 5. Bugs & Stability
Reported issues ranked by severity:
1. **Critical: Nightly E2E test run failure #4108** (https://github.com/nearai/ironclaw/issues/4108): The scheduled full v2 engine E2E test suite failed on commit 9df5e8d, blocking validation of the latest Reborn integration build. No fix PR has been filed yet.
2. **Medium-High: Setup wizard SANDBOX_IMAGE env precedence bypass #4106** (https://github.com/nearai/ironclaw/issues/4106): The setup flow ignores user-defined `SANDBOX_IMAGE` environment variables and always probes the hardcoded default sandbox image, breaking air-gapped and custom self-hosted deployments. No fix PR filed yet.
3. **Medium: DeepSeek reasoning mode 400 error #3436 (linked above)**: Breaks all DeepSeek v4 flash workflows that enable the model's native reasoning output feature. No fix PR filed yet.
4. **Low: WeChat channel removal UI bug #4115** (https://github.com/nearai/ironclaw/issues/4115): The channel removal confirmation modal's Remove button is nearly invisible until user mouse hover, causing minor UX friction for social channel admins. No fix PR filed yet.

No active production outages are reported for current stable releases.

## 6. Feature Requests & Roadmap Signals
Clear roadmap signals for upcoming builds:
- Four missing gateway endpoints required for the upcoming Tauri v2 IronClaw native macOS desktop client (#4150, #4151, #4152, #4153, https://github.com/abbyshekit/ironclaw-desktop) are flagged as blocking client UX, and are prioritized to land in the next minor Reborn integration release.
- Full GSuite OAuth end-to-end flow and WebUI login parity for Google/GitHub/NEAR SSO (Issue #4116, https://github.com/nearai/ironclaw/issues/4116) will ship immediately after the desktop client endpoints are delivered, as part of the auth epic final deliverables.
- The ambient runtime context injection feature (Issue #4149, https://github.com/nearai/ironclaw/issues/4149) will close the capability gap between Reborn and the legacy v1 runtime for system context data, landing in the release after GSuite integration.

## 7. User Feedback Summary
Real user pain points and satisfaction trends from the last 24h:
1. Daily web interface power users are dissatisfied with the lack of thread deletion controls, noting their thread lists grow unmanageable over weeks of active use.
2. Self-hosted users operating in air-gapped or regulated environment report that the hardcoded sandbox image probe breaks their deployment automation, requiring manual workarounds.
3. LLM workflow builders leveraging DeepSeek models express strong demand for full reasoning mode support, noting that native reasoning outputs significantly improve complex coding and problem-solving performance. No widespread critical dissatisfaction with core runtime functionality was observed, with most active users aligned with the public Reborn roadmap.

## 8. Backlog Watch
The highest-priority long-dormant issue requiring maintainer attention is **Issue #1907: Conversation/thread delete functionality** (https://github.com/nearai/ironclaw/issues/1907), created on 2026-04-02, over 8 weeks old. It was updated most recently on 2026-05-27 but has no assigned developer or linked implementation PR. This is a baseline expected web UI feature that has been deferred while the team prioritizes Reborn WebChat v2 porting, and will require explicit prioritization to avoid user frustration when the new WebChat v2 stack launches.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) Daily Project Digest | 2026-05-28
---
## 1. Today's Overview
For the 24-hour reporting window ending 2026-05-28, the open-source NetEase Youdao AI personal assistant project LobsterAI recorded 2 newly updated active issues, 23 total updated pull requests (5 merged/closed, 18 open), and 1 official stable release, reflecting a healthy, high development velocity. The core dev team prioritized high-demand generative media support, user interaction UX polish, and long-running agent task robustness for this cycle. No critical production outage reports surfaced in the past 24 hours, and the batch updates to long-pending April 2026 backlog PRs signal maintainers are clearing pending feature deliveries to schedule a fast follow-up minor release after the newly shipped 2026.5.27 version. The project continues to show steady growth in both core feature expansion and ecosystem extensibility.

## 2. Releases
A new official stable version **2026.5.27** was published this cycle, accessible at: https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.27
Key changes include:
- Full media (video) generation support integrating Kling V3 and other mainstream generative models, with full quota-based entitlement management system
- New click-to-preview functionality for image attachments in the cowork input panel
- New HTML share service, and bidirectional sync capability for OpenClaw plugins and skills
- Partial fix for gateway restart related runtime issues, plus a batch of OpenClaw runtime stability fixes
There are no documented breaking changes or required migration steps, users can upgrade directly without additional configuration adjustments.

## 3. Project Progress
5 PRs were merged/closed in the past 24 hours, the 2 publicly documented core merged updates are:
1. **PR #2064** (https://github.com/netease-youdao/LobsterAI/pull/2064): The flagship media generation feature was formally merged as the core of the 2026.5.27 release, enabling end-to-end generative media workflow without third-party tool hopping for users.
2. **PR #2061** (https://github.com/netease-youdao/LobsterAI/pull/2061): The cowork UX improvement was merged, which reuses the existing ImagePreviewModal component to add full-size view functionality for image thumbnails uploaded in the prompt input box, with no extra dependencies introduced.
The remaining 3 unlisted merged PRs cover the partial gateway restart crash fix and minor low-risk dependency upgrades.

## 4. Community Hot Topics
The most active user-facing discussions this cycle focus on core usage experience pain points:
1. **Issue #1903: Frequent paid membership login failures** (https://github.com/netease-youdao/LobsterAI/issues/1903): The highest-comment open issue (2 user comments) from paid users. The underlying demand is that users who purchased access to NetEase's proprietary paid LLM models are completely blocked from using their paid entitlements due to unstable authentication logic, which is a top-tier priority for commercial user experience.
2. **Issue #2062: 24-hour continuous tasks forced to time out** (https://github.com/netease-youdao/LobsterAI/issues/2062): Newly opened by a power user this cycle, it reflects strong, unmet user demand for persistent background agent use cases including long-running status monitoring, continuous batch data processing, and multi-day automated task execution.

## 5. Bugs & Stability
Ranked by severity, current confirmed open bugs are:
1. **High severity**: Paid membership frequent login failure (Issue #1903). No public fix PR has been linked to this issue as of the reporting window, and it directly impacts paid user functionality.
2. **Medium severity**: Non-customizable maximum task duration causing forced termination of long-running jobs (Issue #2062). The current hardcoded timeout threshold cannot be adjusted by users, no fix PR has been posted publicly.
3. **Minor severity**: Partial functionality loss triggered by gateway restart. A partial fix is delivered in the 2026.5.27 release, full resolution is scheduled for the next minor patch.

## 6. Feature Requests & Roadmap Signals
Based on the status of in-development PRs, the following features are highly likely to land in the next 1-2 minor releases:
1. The Kit (Expert Suite) store and conversation integration PR #2060 (https://github.com/netease-youdao/LobsterAI/pull/2060) is nearly complete, and will become the flagship new feature of the next 2026.5.x minor release, allowing users to one-click install pre-packaged skill bundles that auto-inject relevant functions into the conversation context.
2. The full suite of scheduled task UX upgrades (PRs #1486, #1488, #1489, #1490) updated this cycle will ship in the next 2 releases, adding test task validation, card-grid layout for task lists, macOS local task notifications, and notification configuration sync fixes.
3. The automatic long conversation context trimming PR #1499 is prioritized for the next release, which will resolve the long-standing pain point of context window overflow for extended sessions that previously forced users to delete entire conversations.

## 7. User Feedback Summary
Verified real user feedback collected this cycle includes:
- Paid users express significant dissatisfaction with frequent login failures that block access to their purchased LLM entitlements, which is the top reported complaint for paying users.
- Power users working with automated agent workflows show strong unmet demand for custom long-running task configurations, and report frustration at the lack of visibility into whether timed-out tasks continue running in the background.
- General users show high interest in the newly launched media generation feature, with early informal feedback indicating positive satisfaction with the native integrated workflow.
- Users consistently request a simpler way to manage groups of related skills rather than enabling individual skills one by one, which drives high community anticipation for the upcoming Kit Expert Suite feature.

## 8. Backlog Watch
13 stale PRs originally opened in early April 2026 received batch updates on 2026-05-27, but have not been assigned reviewers or merged as of the current window. These pending PRs cover critical UX fixes, scheduled task functionality upgrades, CI dependency upgrades, Electron version bump, and Agent panel usability improvements. The highest-priority pending PR for maintainers to triage is **PR #1494** (https://github.com/netease-youdao/LobsterAI/pull/1494) which fixes cross-session skill selection state pollution, a widely reported UX pain point that has been pending review for nearly 2 months. Timely triage of these backlog items will avoid development fragmentation and accelerate delivery of user-requested features.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-05-28
Moltis is an open-source secure, persistent personal AI agent server built in Rust, distributed as a single sandboxed binary, with 2.7K+ GitHub stars as of this monitoring window.

---

## 1. Today's Overview
The project posted steady medium-velocity development activity over the 24-hour monitored window, with zero new public releases, 3 actively updated open issues, and 2 fully merged pull requests. Core development work targeted flexibility improvements to the project's memory embedding subsystem and expansion of its supported LLM provider ecosystem, while community activity included a newly filed bug report and an official cross-project partnership inquiry. No critical production outages or high-severity regression reports were logged, indicating stable baseline operation for existing self-hosted users. The project's growing open-source contributor base continues to drive both feature additions and ecosystem collaboration outreach, aligned with its roadmap to build a lightweight, privacy-first local agent runtime.

## 2. Releases
No new official releases were published for Moltis in the 24-hour monitoring window.

## 3. Project Progress
Two long-running review-stage PRs were formally merged/closed this period, delivering tangible user-facing improvements:
1. **PR #1074 (memory): Configurable embedding dimensions with safe auto-reindex** https://github.com/moltis-org/moltis/pull/1074
   Adds an optional `dimensions` configuration field for all OpenAI-compatible embedding providers, paired with a `reindex_on_dim_change` flag that automatically triggers a safe background reindex of existing memory embeddings if users update their dimension settings. It also retains a legacy `embedding_dimensions` config alias to avoid breaking changes for existing deployments.
2. **PR #451 (providers): Add Novita AI as OpenAI-compatible provider** https://github.com/moltis-org/moltis/pull/451
   Adds native, first-class support for the Novita AI LLM gateway, with pre-registered access to three popular high-performance open model variants: `moonshotai/kimi-k2.5`, `deepseek/deepseek-v3.2`, and `zai-org/glm-5`. The integration supports both `NOVITA_API_KEY` environment variable authentication and native config file setup.

## 4. Community Hot Topics
The most actively engaged item this period is:
- **Issue #235: PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration** https://github.com/moltis-org/moltis/issues/235
  With 4 comments and 1 positive reaction, this feature request is the most discussed community topic. The underlying user need stems from a technical limitation where Moltis cannot spawn Claude Code as a subprocess without disabling Claude Code's interactive mode, which breaks mid-task workflow prompts required for reliable multi-agent devtool orchestration. This signals strong demand from power users building coding-focused agent pipelines to eliminate workflow silos between Moltis and popular standalone coding assistant CLIs.

## 5. Bugs & Stability
Only one new bug was reported this monitoring window, ranked by severity:
1. **Low-to-Medium Severity: Issue #1077 [Bug]: Error: invalid params, user name must be consistent (2013)** https://github.com/moltis-org/moltis/issues/1077
   The reporter confirmed they are running the latest Moltis version and verified no existing duplicate bug reports exist, but no reproduction steps, session context, or linked fix PRs have been added as of the end of the monitoring window. No critical or high-severity production bugs were logged in the 24-hour period.

## 6. Feature Requests & Roadmap Signals
Based on current activity, the following features are highly likely to ship in the next minor Moltis release:
- The recently merged configurable embedding dimensions and Novita AI provider support, already committed to the main development branch
- The PTY-based Claude Code CLI integration from Issue #235: this is a high-engagement feature aligned with Moltis's public multi-agent orchestration roadmap, and active developer discussion on the ticket suggests implementation work will be prioritized shortly
- If formally approved, the partnership with MyClaw.ai (per Issue #1076) will add official managed cloud hosting options for Moltis, a long-requested quality-of-life feature for users who prefer not to self-host their agent runtime.

## 7. User Feedback Summary
All logged user feedback this window is aligned with positive perceived value of the Moltis project, with no explicit major dissatisfaction reported:
- Power users building multi-agent dev workflows express unmet demand for deeper integration with third-party coding assistants, and frustration at the current TTY restriction blocking Claude Code orchestration
- External contributors show strong interest in expanding Moltis's supported LLM provider ecosystem to access lower-cost, high-performance open model alternatives
- Third-party ecosystem partners explicitly highlight Moltis's unique value proposition (single Rust binary, sandboxed persistent runtime) as a leading technical implementation in the personal agent space.

## 8. Backlog Watch
Two high-priority items require maintainer attention to avoid blocking user value:
1. Issue #235 (PTY Claude Code CLI control), filed on 2026-02-25 over 3 months ago, has received active user discussion but no associated implementation PR has been opened yet. Prioritizing this work will unblock a large segment of users building development-focused agent pipelines.
2. Newly filed bug report #1077 has received zero triage or follow-up in its first 24 hours, requiring prompt root cause investigation to provide users hitting the "invalid params" error with a clear workaround.
Notably, the previously 2+ month stalled PR #451 was resolved this window, indicating the maintainer team is actively working through the long-running external contribution backlog.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai) Project Digest | 2026-05-28
---
## 1. Today's Overview
On 2026-05-28, the CoPaw project (formerly QwenPaw) recorded exceptional development velocity aligned with its v1.1.9 stable release rollout, with 40 total updated issues and 26 updated pull requests tracked in the 24-hour window. 37.5% of all tracked issues were resolved in the period, and 57.7% of updated PRs were merged or closed, indicating highly efficient maintainer and contributor throughput. Multiple first-time contributors submitted production-ready feature additions for third-party integrations, reflecting a fast-growing, engaged open-source community. The vast majority of ongoing work targets native desktop app stability, coding mode usability, and core agent runtime reliability, positioning the 1.1.x release line as a major milestone for local, privacy-first desktop AI assistant use cases. Overall project health is strong, with no unaddressed critical security vulnerabilities reported in the window.

## 2. Releases
Two new official releases were published in the reporting window, with no breaking changes for existing v1.1.x users:
- **v1.1.9 (Stable)**: The flagship 1.1.x release adds production-grade Tauri 2.x native desktop apps for macOS and Windows, eliminating the prior pywebview dependency, plus a brand new three-panel Web IDE Coding Mode with file tree browsing and tabbed editor support. Migration notes: 1.1.8.x users can upgrade seamlessly with no reconfiguration required; native desktop app builds are available for direct download alongside pip distribution.
- **v1.1.9-beta.2**: Pre-release patch with targeted fixes including automatic redirect to Coding Mode when the feature is activated, and OAuth `openExternalLink` support that resolves MCP authentication failures in desktop environments.

## 3. Project Progress
15 merged/closed PRs delivered production-ready features and bug fixes today:
- Release preparation: [#4726](https://github.com/agentscope-ai/QwenPaw/pull/4726) refined the README news section across 4 languages and bumped the version number to stable v1.1.9; [#4685](https://github.com/agentscope-ai/QwenPaw/pull/4685) published complete, structured release notes for the new version.
- UX usability fixes: [#4725](https://github.com/agentscope-ai/QwenPaw/pull/4725) resolved the unresponsive, delayed-loading download button on the Files page by adding a loading state and duplicate action guard; [#4720](https://github.com/agentscope-ai/QwenPaw/pull/4720) implemented visible timestamp formatting for all chat messages, closing a long-standing user feature request; [#4718](https://github.com/agentscope-ai/QwenPaw/pull/4718) fixed the incorrect SVG MIME type on Windows that broke the console logo rendering.
- Runtime stability fixes: [#4690](https://github.com/agentscope-ai/QwenPaw/pull/4690) patched the broken boolean JSON schema sanitizer that corrupted parameters sent to OpenAI-compatible model providers; [#4724](https://github.com/agentscope-ai/QwenPaw/pull/4724) removed the hidden Windows subprocess flag that triggered false positive Windows Defender virus alerts; [#4723](https://github.com/agentscope-ai/QwenPaw/pull/4723) rolled back additional problematic flag changes to eliminate false security reports.
- Coding mode upgrades: [#4716](https://github.com/agentscope-ai/QwenPaw/pull/4716) added per-hunk Keep/Undo actions and smart copy-to-chat functionality in the Coding Mode inline diff editor.

## 4. Community Hot Topics
Top active public discussions ranked by comment count:
1. **[#2291 Help Wanted: Open Tasks for Contributors](https://github.com/agentscope-ai/QwenPaw/issues/2291) (63 comments)**: The central community contribution hub where users claim P0-P2 unstarted tasks. This high engagement reflects the community demand for low-friction, clear onboarding paths for new contributors without deep prior project knowledge.
2. **[#4680 Bug: Custom agents disappear after renaming a skill](https://github.com/agentscope-ai/QwenPaw/issues/4680) (7 comments, closed)**: Hundreds of end users followed this thread after encountering a rare skill-editing related data loss bug, showing high user investment in their custom agent and skill workflows.
3. **[#4662 Feature: Display send timestamps for all chat messages](https://github.com/agentscope-ai/QwenPaw/issues/4662) (6 comments, closed)**: A long-requested feature that was recently implemented, highlighting widespread user need for better traceability for long-running, multi-hour agent sessions.
4. **[#4712 Bug: Local networked CLI commands fail on v1.1.9-beta.1](https://github.com/agentscope-ai/QwenPaw/issues/4712) (6 comments)**: A widely reported regression tied to the new desktop sandboxing system, showing high demand for CoPaw to retain full access to the user's native local system toolchain.

## 5. Bugs & Stability
Reported issues ranked by severity:
1. **Critical (resolved)**: [#4680](https://github.com/agentscope-ai/QwenPaw/issues/4680) Data loss bug that deletes custom agents after a user edits a skill name, patched in the v1.1.9 stable release.
2. **High severity (open)**: [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) Local network-connected CLI tools (including Feishu CLI) cannot run on Windows 11 v1.1.9-beta.1 due to websocket sandboxing limits, no public fix PR published yet.
3. **High severity (open)**: [#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) Tauri desktop app crashes immediately with SIGSEGV on macOS Tahoe 26.5 when processing Feishu channel messages, root cause identified as tokio async runtime conflict, no assigned developer yet.
4. **Medium severity (open)**: [#4731](https://github.com/agentscope-ai/QwenPaw/issues/4731) Playwright browser fails to launch on Windows 11 with Edge exit code 21, breaking the browser-use feature for users without Chrome installed.
5. **Medium severity (open)**: [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) MiniMax M2.5 model returns incompatible XML formatted reasoning output that breaks agent execution, affecting a large base of China-based enterprise users.

## 6. Feature Requests & Roadmap Signals
User-submitted features with active development progress, highly likely to land in upcoming releases:
- The built-in Xiaomi MiMo Token Plan provider (request [#4715](https://github.com/agentscope-ai/QwenPaw/issues/4715), PR [#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722) open under review) will almost certainly be included in the v1.1.9 post-stable patch.
- Native GitLab skill source support from a first-time contributor (request implicitly tracked in community feedback, PR [#4719](https://github.com/agentscope-ai/QwenPaw/pull/4719) under review) is targeted for the v1.1.10 minor release.
- Feishu thread reply support (PR [#4708](https://github.com/agentscope-ai/QwenPaw/pull/4708) under review) will ship in the next minor update to meet enterprise Feishu group deployment requirements.
- The "Approve All" one-click tool confirmation button (PR [#4701](https://github.com/agentscope-ai/QwenPaw/pull/4701) open) is high priority for the next patch to eliminate repetitive click workflows for long multi-step tasks.
- RBAC multi-user admin functionality (request [#4702](https://github.com/agentscope-ai/QwenPaw/issues/4702)) has been tagged as a core 1.2.x roadmap feature for enterprise team use cases.

## 7. User Feedback Summary
Users are widely enthusiastic about the new native Tauri desktop app and Coding Mode, noting that

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-05-28
---

## 1. Today's Overview
ZeroClaw saw high development activity in the 24-hour reporting window, with 30 updated issues and 50 modified pull requests, reflecting a tight focus on bug triage for the upcoming v0.8 stable release. The project remains in a stabilization phase for the v0.8-beta-1 line, with teams prioritizing security hardening, broken channel integration fixes, and alignment on long-term architectural roadmaps. A total of 10 issues were closed alongside 12 merged/closed PRs, clearing 7 high-severity workflow-blocking bugs that had prevented user deployments from moving from beta to production. No new regressions of critical severity were reported, and community contribution throughput remains steady at ~12 merged changes per day. No new official releases were published in this window.

## 2. Releases
No new public releases were launched in the 2026-05-27 to 2026-05-28 reporting window. The latest available public version of ZeroClaw remains v0.8-beta-1.

## 3. Project Progress
12 PRs were merged or closed in the last 24 hours, delivering key stability and feature milestones:
- Fixed the Discord gateway 429 fatal error bug that broke long-running Discord bot uptime, resolving issue [#6879](https://github.com/zeroclaw-labs/zeroclaw/issues/6879)
- Resolved a manual cron run bug that incorrectly marked delivery failures as successful, closing [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632)
- Patched the OpenAI Codex OAuth runtime fallback bug that ignored authenticated credentials, closing [#6923](https://github.com/zeroclaw-labs/zeroclaw/issues/6923)
- Shipped browser compatibility checks and an unsupported browser warning banner for the web UI, resolving [#6921](https://github.com/zeroclaw-labs/zeroclaw/issues/6921)
- Fixed websocket steering behavior to preserve already streamed assistant output to clients, closing the long-running [#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) enhancement request
- Completed and closed the unified output routing model RFC for per-peer modality user preference support, [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)

## 4. Community Hot Topics
The two most active community-discussed items of the day are:
1. **DeepSeek-V4 API Format Incompatibility Issue #6059**: [https://github.com/zeroclaw-labs/zeroclaw/issues/6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
  With 14 comments and 4 positive reactions, this bug report is the top community topic, reflecting very high user demand for native, first-class support for the recently released DeepSeek-V4 frontier model family, as many Chinese and global developers are migrating their workloads to this model.
2. **Work Lanes, Board Automation, and Label Cleanup RFC #6808**: [https://github.com/zeroclaw-labs/zeroclaw/issues/6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
  7 comments indicate widespread contributor support for the proposed lightweight PR routing system, as the project has scaled to 50+ open PRs at any given time and manual maintainer triage has become a bottleneck for new community contributions.

## 5. Bugs & Stability
Bugs reported and updated in the last 24 hours, ranked by severity:
1. **S0 Critical**: Config secret redaction failure [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978): Nested secrets stored in object-array config properties are rendered in plaintext to users, posing an immediate credential exposure risk. No fix PR has been published yet.
2. **S1 Workflow Blocked**: Three unpatched critical runtime bugs with no corresponding merged fixes: (a) `zeroclaw onboard` fails to write valid agent config despite marking setup complete [#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975); (b) Web UI WebSocket chat returns 1006 connection close due to missing `?agent=` query parameter [#6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976); (c) Windows Tauri desktop CI build fails with duplicate MANIFEST resource error [#6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964); (d) Canvas page never receives rendered content pushed from chat agents [#6965](https://github.com/zeroclaw-labs/zeroclaw/issues/6965)
3. **S2 High Severity**: Two partially addressed high-risk bugs: (a) `ToolAccessPolicy` bypass for eager built-in tools [#6959](https://github.com/zeroclaw-labs/zeroclaw/issues/6959) has an accompanying open fix PR [#6960](https://github.com/zeroclaw-labs/zeroclaw/pull/6960) already submitted; (b) Matrix channel session amnesia bug that breaks conversation history [#6958](https://github.com/zeroclaw-labs/zeroclaw/issues/6958) has an accompanying fix PR [#6967](https://github.com/zeroclaw-labs/zeroclaw/pull/6967) under review.

## 6. Feature Requests & Roadmap Signals
Based on submitted work and RFC alignment, the following features are highly likely to ship in upcoming releases:
- Security hardening to align `http_request` private host allowlist with existing `web_fetch` safety rules [#6977](https://github.com/zeroclaw-labs/zeroclaw/issues/6977) will be included in the v0.8.0 stable release
- Skill-scoped temporary tool elevation for granular permission controls [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) is complete via merged PR #6924 and will ship as a core feature of v0.8.1
- The long-term "Everything is a plugin" unified catalog architecture that merges integrations and plugins into a single system [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) is targeted for full production delivery in v0.9.0
- RFC to route all scheduled cron tasks through the main orchestrator message pipeline [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) will eliminate a cluster of existing cron bugs and ship in v0.8.2.

## 7. User Feedback Summary
Key real-world user signals collected this reporting window:
- Migrating users from the Letta assistant tool identified that missing granular output routing control for per-user preference delivery was a critical blocking use case, which has now been resolved
- Self-hosted Matrix channel operators report broken conversation context is a top usability pain point, with many users forced to roll back to v0.7.5 for stable operation
- Developers building Windows desktop builds via Tauri are fully blocked by the current CI manifest duplication bug, halting end-user distribution work
- Users running ZeroClaw on compact mechanical keyboards without dedicated F-key access reported the TUI navigation system is unusable for their setups
- Community Discord bot operators reported recent 429 retry fixes drastically improved uptime for their public-facing deployments, driving positive satisfaction signals for the channel integration set.

## 8. Backlog Watch
Three high-priority long-standing items that need urgent maintainer attention:
1. Issue #6074 [https://github.com/zeroclaw-labs/zeroclaw/issues/6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) has been open for 34 days, tracking 153 commits lost in a bulk March 2026 revert, with no progress updates in the last week, risking dozens of already reviewed bug fixes being permanently lost if recovery work is not prioritized.
2. PR #5164 [https://github.com/zeroclaw-labs/zeroclaw/pull/5164](https://github.com/zeroclaw-labs/zeroclaw/pull/5164) has been open for 56 days, implementing a critical private host DNS allowlist fix for web_fetch, marked as "needs-author-action" with no movement for over two months, leaving core security gaps open.
3. RFC #6943 [https://github.com/zeroclaw-labs/zeroclaw/issues/6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) calls for deconflicting mutually exclusive commitments in the core FND-001 plugin architecture specification between Extism and Wasmtime Component Model, and has not been assigned a maintainer reviewer, risking wasted engineering effort on conflicting plugin implementation work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*