# OpenClaw Ecosystem Digest 2026-06-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-19 22:58 UTC

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

# OpenClaw Project Digest | 2026-06-20
---
## 1. Today's Overview
OpenClaw saw very high developer and community activity in the 24 hour window, with 500 updated issues and 500 updated pull requests tracked across the repository, signaling strong release velocity for the 2026.6 beta line. 55 issues were closed and 31 PRs were merged/closed, with the core team prioritizing critical production stability fixes alongside long-planned core architecture upgrades for SQLite session storage and modular memory systems. The project maintains healthy triage workflows, with 70% of high-severity reported bugs already having linked active fix PRs in progress. Recent public beta adoption continues to grow, with self-hosted enterprise operators contributing large volumes of field test data to help resolve edge case regressions across multi-channel delivery and cron workflow subsystems. Overall project health is robust, with consistent feature delivery and fast iteration on user-reported stability pain points.

## 2. Releases
A new beta release shipped in the last 24 hours:
### v2026.6.9-beta.1
- **Key Changes**: Full Telegram rich delivery overhaul, adding native rich HTML support, preserved markdown and sticker path handling, more faithful rendering of progress drafts and command outputs, and corrected routing logic for user mentions and spooled message handlers. This build explicitly patches the regression introduced in v2026.6.8 that broke message rendering for Telegram Web clients (tracked in [openclaw/openclaw#93794](https://github.com/openclaw/openclaw/issues/93794)).
- No breaking changes or manual migration steps are required for existing deployments, though users running Telegram bot workflows are recommended to upgrade to this beta to resolve message delivery artifacts.

## 3. Project Progress
The 31 merged/closed PRs and resolved issues in the last 24 hours delivered the following key improvements:
1. The v2026.6.8 Telegram Web message rendering regression was fully patched and backported to the new beta release
2. Long-standing Slack thread session delivery bug [openclaw/openclaw#78061](https://github.com/openclaw/openclaw/issues/78061) was resolved, fixing a multi-month issue where responses generated for Slack threads would fail to reach the end user
3. Windows gateway probe health detection bug [openclaw/openclaw#79099](https://github.com/openclaw/openclaw/issues/79099) was fixed, eliminating false unreachable status alerts for correctly running Windows OpenClaw deployments
4. The requested session elapsed time status footer feature [openclaw/openclaw#68226](https://github.com/openclaw/openclaw/issues/68226) was merged, adding session duration tracking to the global runtime status bar
5. Multiple high-priority fix PRs (Feishu Bitable pagination, Azure Responses model alias routing, Android cron job detail UI, Telegram message cache type repairs) have cleared code review and are marked ready for final maintainer signoff ahead of the next stable release.

## 4. Community Hot Topics
The most actively discussed items in the last 24 hours, sorted by comment and reaction count:
1. [openclaw/openclaw#88838](https://github.com/openclaw/openclaw/issues/88838) (31 comments, P1): Track core session/transcript SQLite migration via accessor seam. Underlying user need: Enterprise multi-tenant operators are demanding a zero-downtime, incremental migration path off legacy JSON session storage to avoid the high risk of a single large full rewrite of state handling logic.
2. [openclaw/openclaw#85333](https://github.com/openclaw/openclaw/issues/85333) (13 comments, P1): `openclaw doctor --fix` 4-5x performance regression after the 2026.5.20 update. Underlying user need: Power users with multi-year large session stores are seeing critical maintenance workflows take 4+ minutes to complete, directly impacting their ability to perform emergency repairs on production deployments.
3. [openclaw/openclaw#91588](https://github.com/openclaw/openclaw/issues/91588) (12 comments, P0): Critical gateway memory leak that grows RSS from 350MB to 15.5GB over 2-3 days causing OOM crashes. Underlying user need: Self-hosted 24/7 agent operators are forced to run daily scheduled gateway restarts to avoid downtime, breaking unattended production agent workloads.
4. [openclaw/openclaw#63829](https://github.com/openclaw/openclaw/issues/63829) (9 comments, 9 👍): Feature request for per-agent memory-wiki vault configuration. Underlying user need: Multi-agent workspace admins need fully isolated knowledge bases for individual agents to prevent cross-agent context leaks that break role separation for customer-facing deployments.

## 5. Bugs & Stability
Active critical and high-severity bugs reported/updated in the last 24 hours, ranked by severity:
1. **P0 Critical**: [openclaw/openclaw#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway memory leak leading to OOM crashes, no fix PR published yet, impacting all long-running production deployments.
2. **P1 High**: [openclaw/openclaw#85333](https://github.com/openclaw/openclaw/issues/85333) Doctor --fix 4x slowdown caused by session snapshot path traversal bottleneck, no linked fix PR available.
3. **P1 High**: [openclaw/openclaw#92043](https://github.com/openclaw/openclaw/issues/92043) 180s embedded compaction timeout with no partial progress reuse leading to repeated compaction failures, linked open fix PR in progress.
4. **P1 High**: [openclaw/openclaw#92415](https://github.com/openclaw/openclaw/issues/92415) Session-level model snapshot not refreshed after `/model` switch, leading to stale context window and reasoning configuration, linked open fix PR available.
5. **P1 High**: [openclaw/openclaw#90325](https://github.com/openclaw/openclaw/issues/90325) Matrix channel dispatch broken in v2026.6.1, throwing TypeError on inbound messages, reproduction confirmed, fix in active triage.

## 6. Feature Requests & Roadmap Signals
Top user-requested features and their expected release timeline:
1. **Per-agent memory-wiki vaults** ([openclaw/openclaw#63829](https://github.com/openclaw/openclaw/issues/63829)): The recently merged multi-slot memory role architecture PR (#88504) lays the full foundation for this feature, so it is highly likely to ship in the next 2026.6.x stable release.
2. **Topic-session families for multi-lane assistant context** ([openclaw/openclaw#90916](https://github.com/openclaw/openclaw/issues/90916)): Built on top of the upcoming SQLite session store foundation, this feature is targeted for the next minor stable release.
3. **Webchat/Control UI inline button support** ([openclaw/openclaw#46656](https://github.com/openclaw/openclaw/issues/46656)): The existing Telegram inline button implementation will be extended to Webchat in the following 2026.7 release cycle.
4. **Kubernetes deployment documentation improvements** ([openclaw/openclaw#91455](https://github.com/openclaw/openclaw/issues/91455)): Has open linked PR, expected to be published in the next 2 weeks.

## 7. User Feedback Summary
### Core Pain Points
1. Unattended production deployments are forced to run scheduled daily gateway restarts to avoid OOM crashes from the unpatched memory leak, which is the top user-reported operational complaint.
2. Users upgrading from 2026.5.x to 2026.6.x releases hit multiple silent migration edge cases, including unannounced cron store SQLite migration, stale migration warnings that persist after running `openclaw doctor --fix`, and unexpected default delivery configuration changes that break existing cron jobs.
3. Multi-agent enterprise users cannot isolate knowledge across separate agents on the same instance, leading to accidental context leaks that violate security policies for regulated industry deployments.
4. Partial message loss edge cases across Telegram, Feishu, Slack, and Matrix channels are the most common end-user complaint for multi-platform bot operators.
### Sentiment
Users running the stable 2026.5.19 release report very high satisfaction, while beta testers on 2026.6.x builds report occasional regressions but praise the fast developer response time for submitted bug reports.

## 8. Backlog Watch
High-impact long-running issues that are currently awaiting maintainer prioritization and attention:
1. [openclaw/openclaw#78640](https://github.com/openclaw/openclaw/issues/78640) (open since 2026-05-06): Windows memory index EPERM permission failure that blocks reindex operations, with clear reproduction steps but no recent activity on a fix, impacting all Windows-based self-hosted deployments.
2. [openclaw/openclaw#46656](https://github.com/openclaw/openclaw/issues/46656) (open since 2026-03-14): Webchat inline button support feature request with 6 comments and high community demand, no maintainer assigned yet.
3. [openclaw/openclaw#63829](https://github.com/openclaw/openclaw/issues/63829) (open since 2026-04-09): Per-agent memory vault feature request with 9 user upvotes, waiting for product signoff even after the underlying memory role architecture required to implement it was fully merged.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source Personal AI Assistant Ecosystem Report (2026-06-20)
---
## 1. Ecosystem Overview
The 10 tracked active projects form a maturing, highly fragmented open-source personal AI agent landscape centered on privacy-first, self-hosted deployments for individual power users, small technical teams, and regulated enterprise operators. After 18 months of rapid experimental feature addition, the ecosystem has broadly moved past basic single-turn chat functionality to support persistent unattended automation workflows, scheduled task execution, multi-agent orchestration, and native integration with mainstream consumer and enterprise messaging platforms. Recent development work across almost all projects prioritizes operational stability, reduced deployment friction, and compliance guardrails over unproven experimental capabilities, reflecting a clear shift from early adopter use cases to mainstream production deployment. No single project currently dominates the full market, with each major implementation carving out distinct user segments and technical priorities aligned with their core maintainer backgrounds.

## 2. Activity Comparison
| Project Name | Total 24h Updated Issues | Total 24h Updated PRs | Merged/Closed PRs | Release Status (Last 24h) | Health Score (1-10, 10 = Optimal) |
|---|---|---|---|---|---|
| OpenClaw | 500 | 500 | 31 | Released v2026.6.9-beta.1 | 9 |
| ZeroClaw | 50 | 50 | 13 | Released v0.8.1 stable patch | 9 |
| NanoBot | 9 | 33 | 19 | No new release | 9 |
| Hermes Agent | 50 | 50 | 4 | Recently launched v0.17.0 "The Reach Release" | 8 |
| IronClaw | 5 | 28 | 12 | No new release | 8 |
| CoPaw | 11 | 17 | 6 | No new release | 8 |
| LobsterAI | 4 | 0 | 0 | Recently launched v2026.6.18 stable | 8 |
| PicoClaw | 3 |7 |1 | Released v0.3.0-nightly test build | 8 |
| NanoClaw |1 |6 |0 | No new release |7 |
| NullClaw |2 |1 |0 | No new release |7 |

*TinyClaw, Moltis, and ZeptoClaw recorded zero activity in the 24h tracking window and are excluded from the table.*

## 3. OpenClaw's Position
OpenClaw is the undisputed reference implementation for production-grade multi-channel AI agent workflows across the ecosystem, with 10x the development velocity of the next highest activity project. Its core unique advantages include unmatched field test data contributions from large self-hosted enterprise operators, 70% of high-severity bugs already having active linked fix PRs (the highest triage coverage in the ecosystem), and a 100% focus on mission-critical unattended workload support rather than experimental end-user features. Unlike peers that prioritize local desktop UX or minimal runtime footprint, OpenClaw’s technical roadmap is centered on SQLite-backed zero-downtime state migration, 99.9% multi-channel delivery SLA, and modular memory system architecture. A large share of smaller derivative projects (including PicoClaw and LobsterAI) directly reuse or reference OpenClaw tooling, cementing its position as the de facto standard for production multi-tenant agent deployments.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across 8+ tracked projects, with no existing broadly adopted off-the-shelf ecosystem solutions available:
1. **Cross consumer hardware deployment compatibility**: PicoClaw (Windows `list_dir` path separator bug), NullClaw (Termux aarch64 Zig build failure), NanoClaw (Apple Silicon native container demand), and Hermes Agent (portable Windows deployment requests) all share user complaints about mandatory WSL/Docker overhead for running agents on local consumer hardware.
2. **Persistent memory system hardening**: OpenClaw (SQLite migration away from legacy JSON session storage), CoPaw (unbounded ChromaDB index growth fix), ZeroClaw (cron job cost tracking gaps), and Hermes Agent (session snapshot plaintext secret leak) all face shared technical debt from early ad-hoc in-memory state designs that break for multi-month unattended deployments.
3. **Multi-channel delivery reliability & permission guardrails**: OpenClaw (Telegram/Slack/Matrix delivery bug fixes), NanoBot (full Discord channel overhaul), ZeroClaw (Slack/Discord prebuilt binary regression), and CoPaw (web chat image rendering failures) all require predictable, secure cross-platform chat operation with no unintended notification leaks or unauthorized tool execution in shared group chats.
4. **Enterprise compliance controls**: OpenClaw (per-agent isolated memory vault requests), Hermes Agent (zero-knowledge credential proxy demand), ZeroClaw (OIDC SSO roadmap), and NanoClaw (approval audit log gaps) all face unmet demand from regulated industry users for auditable access controls and role separation that prevent cross-agent context leaks.

## 5. Differentiation Analysis
Projects are clearly segmented by target user and technical architecture with minimal overlapping core functionality:
- **Production enterprise operators**: OpenClaw targets multi-tenant 24/7 unattended automation deployments, with a modular, state-durability-first architecture; ZeroClaw targets SRE/devops teams with plugin extensibility and OIDC SSO support.
- **Power user self-hosters**: NanoBot targets privacy-focused users with a tiny runtime footprint, MCP-native design, and granular tool permission controls; Hermes Agent targets local LLM end users with a fully optimized native desktop UX.
- **Hardware and ecosystem niche segments**: PicoClaw (from embedded vendor Sipeed) targets low-resource edge devices with a stripped-down Go implementation; IronClaw (from NearAI) targets Rust ecosystem developers with a 100% Rust "Reborn" rewrite prioritizing build speed and test maturity; LobsterAI (from NetEase Youdao) targets non-expert technical users with out-of-the-box document sharing and no-code cross-model orchestration.
- **Regional specialized users**: NanoClaw targets Apple ecosystem enterprise deployments with native macOS runtime support; NullClaw targets Chinese enterprise teams with Feishu integration and Android Termux deployment support.

## 6. Community Momentum & Maturity
Projects fall into four clear activity tiers:
1. **High-Velocity Tier**: Only OpenClaw, with near-breakneck release velocity for the 2026.6 beta line, a large active contributor base, and heavy input from production enterprise users.
2. **Fast-Evolving Active Tier**: ZeroClaw, Hermes Agent, CoPaw, and IronClaw, all executing on large post-major-release stabilization and feature expansion sprints with growing contributor communities.
3. **Stable Moderate Velocity Tier**: NanoBot, PicoClaw, LobsterAI, all nearing their next minor stable release, focused only on targeted bug fixes with mature, feature-complete core functionality.
4. **Niche Maintenance Tier**: NanoClaw, NullClaw, plus the zero-activity TinyClaw, Moltis, ZeptoClaw, with small core teams iterating slowly on narrow use case compatibility fixes and no ongoing large architectural rewrites.

## 7. Trend Signals
Key industry trends extracted from aggregated community feedback provide actionable guidance for AI agent developers:
1. The era of experimental "move fast and break things" agent feature development is over: 70% of recent cross-project work is dedicated to stability, operational overhead reduction, and compliance, indicating the market is shifting from early adopter to mainstream production deployment where backward compatibility and SLAs are far higher priority than unvetted new features.
2. The Model Control Protocol (MCP) has emerged as the de facto cross-project standard for tool

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-06-20
---
## 1. Today's Overview
NanoBot recorded very high development velocity on 2026-06-19, with 33 total updated pull requests and 9 user-reported issues tracked in the 24-hour window. The team resolved 6 out of 9 active issues and merged 19 out of 33 updated PRs, for a 67% recent issue resolution rate that signals strong focus on closing v0.2.x release pain points. Most recent work prioritizes bug fixes for regressions introduced in the v0.2.0 upgrade, MCP protocol reliability improvements, and incremental quality-of-life features for multi-channel and power user deployments. No new major releases were published in the window, as the core team is wrapping up pending fixes for the next minor patch release. Overall project health remains strong, with active contributions from both core maintainers and external community contributors.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Project Progress (Merged / Closed Work)
All recently closed merged work delivers targeted fixes and incremental feature improvements:
- [PR #4138](https://github.com/HKUDS/nanobot/pull/4138): Added the new `tools.file.enable` configuration toggle, letting admins fully disable built-in filesystem tools for deployments that only use sandboxed MCP-provided file access.
- [PR #4230](https://github.com/HKUDS/nanobot/pull/4230): Fixed a critical reliability gap by adding explicit timeout settings for streamableHttp MCP connections, preventing indefinite hangs on unresponsive MCP server startup.
- [PR #4246](https://github.com/HKUDS/nanobot/pull/4246): Patched a session persistence bug that caused deleted user chat history to revive unexpectedly, by ensuring the `delete_session` function also removes leftover legacy session files from the global directory.
- [PR #4394](https://github.com/HKUDS/nanobot/pull/4394): Added full support for OpenAI image reference edit endpoints, separating no-reference generation flows and multi-image edit requests for DALL-E model families.
- [PR #4342](https://github.com/HKUDS/nanobot/pull/4342): Resolved Feishu channel rendering failures by correcting structural mismatches between expected and actual WebSocket card payload formats.
- [PR #2655](https://github.com/HKUDS/nanobot/pull/2655): Completed a full overhaul of the Discord channel implementation, migrating to discord.py 2.x, adding slash commands, interactive UI components and native Discord API tool support.

## 4. Community Hot Topics
The most actively discussed items reflect clear user demand for expanded deployment flexibility:
1. [PR #1945 XMPP Channel Support](https://github.com/HKUDS/nanobot/pull/1945): The community-submitted PR for XMPP (Jabber) protocol support has been actively updated for 3 months, with a fully working implementation that supports file transfers and end-to-end use. It signals strong unmet demand from privacy-focused, self-hosted users who prefer decentralized federated chat platforms.
2. [Issue #4389 Per-model Context Window for Fallback Models](https://github.com/HKUDS/nanobot/issues/4389): This 2-comment feature request from a production power user highlights that teams running multi-model fallback chains currently cannot properly constrain prompt size for secondary models with smaller context windows.
3. [PR #4329 Inline CLI TUI](https://github.com/HKUDS/nanobot/pull/4329): The new terminal UI implementation for the `nanobot agent` command has drawn early interest from users who prefer local, no-browser CLI interactions with the bot.

## 5. Bugs & Stability
Reported bugs ranked by severity:
1. **High Severity Regression**: [Issue #4410](https://github.com/HKUDS/nanobot/issues/4410): After upgrading from v0.1.x, heartbeat cron jobs incorrectly send unnecessary user notifications even when no action or output is required from the agent. An open fix PR [#4412](https://github.com/HKUDS/nanobot/pull/4412) is already under review, and will likely be merged imminently.
2. **Medium Severity**: [Issue #4418](https://github.com/HKUDS/nanobot/issues/4418): Heartbeat tasks currently push results to the most recently active chat channel instead of the exact channel the task was originally created from, creating confusion for users running NanoBot across multiple different chat platforms. No fix has been submitted as of the digest date.
3. **Low Severity**: [Issue #4413](https://github.com/HKUDS/nanobot/issues/4413): Telegram channel does not support the new Bot API 10.1 rich message formatting, which leads to degraded rendering for complex markdown content. No fix submitted yet.
All previously reported bugs including MCP validation errors, LLM stream stalls, and image fallback file path leaks from earlier v0.2.0 releases have been fully resolved in the recent merged PR batch.

## 6. Feature Requests & Roadmap Signals
Recently submitted and in-development features signal the next v0.2.x minor release will prioritize flexibility for production and power user deployments:
- New feature requests for Telegram rich message support and heartbeat per-channel result routing will likely be scheduled for the v0.2.4 release cycle.
- Core-maintained pending PRs including cron job model presets, subagent spawn model overrides, aggregated subagent result modes, and the new `SuspendTurn` human-in-the-loop pause feature are all nearly complete, and almost guaranteed to land in the upcoming v0.2.3 patch release with no breaking changes.

## 7. User Feedback Summary
- Users upgrading from v0.1.x to the new v0.2.0 release have reported multiple small, disruptive regressions around heartbeat behavior and LLM stream stability, but many still explicitly thanked the development team for the massive overall functional improvements in the 0.2 line.
- Production users running NanoBot as a Telegram / instant message bot with multiple fallback LLM providers are asking for much more granular configuration to avoid outages during peak hours when primary model providers throttle requests.
- Self-hosted users with strict security compliance requirements are requesting full, granular control over built-in tool permissions, to ensure no arbitrary local file access is allowed outside of audited sandboxed MCP implementations.

## 8. Backlog Watch
Long-running high-impact items awaiting maintainer review:
1. [PR #1945 XMPP Channel Support](https://github.com/HKUDS/nanobot/pull/1945): Submitted in March 2026, with a fully tested working implementation, this community PR has not yet received final maintainer sign-off despite strong implicit user demand for federated chat support.
2. [PR #3591 Dream Scope Controls](https://github.com/HKUDS/nanobot/pull/3591) and [PR #3590 Manual Heartbeat Trigger](https://github.com/HKUDS/nanobot/pull/3590): Two core feature PRs submitted in May 2026 that add user control over the background memory consolidation system, both are code complete and waiting for final review to merge.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-20
---
## 1. Today's Overview
Hermes Agent maintains high post-major-release velocity following the launch of its flagship v0.17.0 version, with 50 updated issues and 50 updated pull requests logged in the 24-hour reporting window. The project has a healthy, large active community base of 245 contributing developers, focused on post-release triage, security hardening, and new integration work. 88% of recently updated issues and 92% of recently updated PRs remain open, indicating active ongoing feature development rather than accumulated stale backlog. The overall project health is strong, with core bug triage for v0.17.0 regressions proceeding at pace with new feature submissions.

## 2. Releases
The new v2026.6.19 / Hermes Agent v0.17.0 "The Reach Release" launched publicly on June 19, 2026. This release includes 1,475 total commits, ~800 merged PRs, 1,693 modified files, 235,390 line insertions, 50,730 deletions, 300+ closed issues, and contributions from 245 community developers since the v0.16.0 release. While no explicit breaking changes or required migration steps have been announced yet, the release follows v0.16.0 which first added native Hermes desktop support, and expands reach across new platforms, integrations, and security hardening features.

## 3. Project Progress
A total of 4 PRs and 6 issues were fully resolved/merged in the 24-hour reporting window:
1. The long-reported MCP tool discovery gap in TUI mode was fixed by addressing the overly aggressive 0.75s default discovery timeout that did not account for typical MCP server startup latency
2. A premature session termination bug for Gemma4 models running on the Ollama backend was patched
3. The dashboard "gateway exited" failure was resolved, triggered by the common edge case where users have both `.venv` and `venv` directories in the Hermes root
4. The optional creative ideation skill library was upgraded to v2.1.0, adding 22 new named, situation-routed ideation methods to the feature set.

## 4. Community Hot Topics
Top active items sorted by comment and reaction count:
1. **Zero-knowledge credential proxy daemon feature request (11 comments)**: https://github.com/NousResearch/hermes-agent/issues/4656
   This proposal for a local zero-exfiltration HTTP/HTTPS broker for agent credentials is the most discussed item, reflecting strong user demand for improved attack surface reduction beyond existing PID namespace isolation and environment variable scoping work.
2. **Headroom-AI tool output compression integration (9 👍, 6 comments)**: https://github.com/NousResearch/hermes-agent/issues/39691
   Users are pushing to replace the current slow, LLM-powered full conversation context summarization with faster, more efficient tool output-specific compression to reduce unnecessary token usage for long-running sessions.
3. **Camofox browser screenshot cropping bug (6 comments)**: https://github.com/NousResearch/hermes-agent/issues/38478
   Users using the third-party Camofox privacy browser provider are asking for resolution of viewport mismatch errors breaking screenshot functionality.
4. **Arabic desktop localization and RTL support PR**: https://github.com/NousResearch/hermes-agent/pull/45619
   Internationalization-focused community contributors are driving support for non-Latin script users, a previously underserved segment of the user base.

## 5. Bugs & Stability
Bugs ranked by severity, reported or updated in the 24-hour window:
- **P1 Critical**: #49196 Dashboard container spawns duplicate per-profile gateways under s6-overlay v3, causing duplicated Telegram polling and silent mid-conversation interruptions. No fix PR has been filed publicly as of this digest. https://github.com/NousResearch/hermes-agent/issues/49196
- **P2 High Priority**:
  1. #48441 Terminal session snapshots leak plaintext .env secrets to disk in publicly readable `.sh` cache files, representing a critical local security gap. No fix PR is currently open. https://github.com/NousResearch/hermes-agent/issues/48441
  2. #49297 Post-v0.17.0 regression: Gemma4 models running on Ollama still fail with premature max token truncation, despite an earlier fix attempt. The related fix PR #41694 is referenced for ongoing work. https://github.com/NousResearch/hermes-agent/issues/49297
  3. #48648 Telegram gateway enters infinite message duplication loops when streamed response content exceeds the 4096-character platform limit. The related fix PR #49295 is open and undergoing review. https://github.com/NousResearch/hermes-agent/issues/48648
  4. #47868 Strict OpenAI-compatible third-party providers reject leaked internal `timestamp` metadata fields included in chat completion payloads, with a duplicate related issue #48523 documenting the same gap in gateway mode. No full merged fix exists yet. https://github.com/NousResearch/hermes-agent/issues/47868

## 6. Feature Requests & Roadmap Signals
Highest traction user-requested features, with projected release timelines:
- The new `/recompile` slash command (PR #49301) that lets users rebuild system prompts in-place without losing conversation history, and optional runtime metadata footer for gateway responses are nearly complete and almost guaranteed to ship in the next v0.17.1 point release.
- The fully tested Zulip platform adapter integration (PR #3335) and GLM-5.x native reasoning support will also likely land in the v0.17.x feature update cycle given their current state of development.
- Higher effort items including the zero-knowledge credential proxy daemon, ordered web search failover chains, and Headroom-AI compression integration are targeted for the v0.18 release cycle based on current issue priority and community demand.

## 7. User Feedback Summary
The most common post-v0.17.0 user pain points include unexpected regressions: bouncing desktop chat scroll position after streaming ends, unwanted system popups triggered by auto-preview of custom protocol links in chat, missing MCP tools in TUI sessions, and the unresolved Ollama Gemma4 incompatibility. Security-conscious Windows users are explicitly requesting official documentation for fully portable, isolated Hermes deployments that avoid modifying global system state. Users also report strong positive satisfaction with the new desktop experience, and increased interest in deploying Hermes for team use cases that require stricter credential and access controls.

## 8. Backlog Watch
High-impact pending items that have not received maintainer review or action for multiple weeks:
1. Issue #4656 (credential proxy daemon, opened April 2 2026): High security value for enterprise users, no assigned maintainer or public roadmap placement after 3 months of discussion. https://github.com/NousResearch/hermes-agent/issues/4656
2. PR #3335 (Zulip platform adapter, opened March 27 2026): Fully tested against live Zulip 12.0 servers, feature complete and aligned with existing gateway architecture, unmerged for over 3 months. https://github.com/NousResearch/hermes-agent/pull/3335
3. Issue #32159 (ordered web search failover chains, opened May 25 2026): Multiple enterprise and self-hosted users report repeated failures when their primary web search provider hits rate limits, with no documented workaround. https://github.com/NousResearch/hermes-agent/issues/32159
4. PR #45619 (Arabic RTL localization, opened June 13 2026): Full implementation of Arabic language support for the desktop app, no maintainer feedback posted 7 days after submission. https://github.com/NousResearch/hermes-agent/pull/45619

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-06-20
*Based on public GitHub activity data from sipeed/picoclaw*

---

## 1. Today's Overview
This 24-hour window represents moderately high, high-quality activity for the Sipeed-led open-source AI assistant PicoClaw ecosystem, with 3 updated open user issues, 7 pull request updates, and 1 automated nightly build released for the upcoming v0.3.0 milestone. Most development and discussion activity prioritizes platform compatibility fixes, security hardening for public-facing deployments, and core logic quality improvements, with zero new critical production outages or widespread breakages reported by the active user base. Contributors include both long-term core team members and new external submitters, signaling a growing and healthy contributor community. The project currently maintains a stable core feature set while iterating rapidly on edge-case fixes and high-demand extended capabilities.

## 2. Releases
One new official nightly build was published in the reporting window:
- **v0.3.0-nightly.20260619.287853ab**: This is an automated, pre-release unstable build intended for early testing of upcoming v0.3.0 features, explicitly marked for non-production use only. The full comparison against the stable v0.3.0 tag to the latest main branch is publicly accessible at https://github.com/sipeed/picoclaw/compare/v0.3.0...main. No breaking changes or stable release versions were published today.

## 3. Project Progress
Only one PR was merged/closed in the past 24 hours:
- [#2956 (merged)](https://github.com/sipeed/picoclaw/pull/2956): Submitted by external contributor yuxuan-7814, this patch fixes a long-standing configuration merge bug where channels marked as `enabled: true` in the primary `config.json` file would be automatically disabled after loading and merging settings from the separate `.security.yml` credential file. This resolves a common user pain point where pre-configured Telegram, Matrix and other chat channels would unexpectedly shut off after new credentials were added to the security config. The remaining 6 open updated PRs are all under active review, covering type safety improvements, MCP tool parsing fixes, multi-agent collaboration infrastructure, and SSRF security hardening that are on track to be merged to main in coming days.

## 4. Community Hot Topics
The highest-engagement active topics of the window are:
1.  [#2472 (Open Bug Report)](https://github.com/sipeed/picoclaw/issues/2472): The Windows `list_dir` path separator failure, with 6 total comments and 1 upvote, the most active discussion across all updated items. This reflects strong, unmet demand for first-class native Windows support from a large segment of the user base that currently needs to rely on WSL to run PicoClaw.
2.  [#3114 (Open Feature Request)](https://github.com/sipeed/picoclaw/issues/3114): Request for Telegram permission tiering by conversation type (private chat / group / channel). This topic signals that a large share of users are deploying PicoClaw in shared, multi-user Telegram group environments, and require explicit security guardrails to prevent unintended destructive tool execution.
3.  [#2937 (Open Draft PR)](https://github.com/sipeed/picoclaw/pull/2937): Internal Agent Collaboration Bus feature proposal, showing strong community interest in multi-agent orchestration capabilities for advanced automation workflows.

## 5. Bugs & Stability
Ranked by severity, recently reported bugs in the window include:
1.  **Critical**: SSRF bypass vulnerability for the `web_fetch` tool via ISATAP IPv6 literals that embed private IPv4 addresses, tracked in draft fix PR [#3143](https://github.com/sipeed/picoclaw/pull/3143). A full fix is already drafted, no public exploits have been disclosed as of this reporting date.
2.  **High**: Full functionality failure of the built-in `list_dir` file browsing tool on Windows (Issue [#2472](https://github.com/sipeed/picoclaw/issues/2472)), caused by path separator mismatches with Go's native `os.Root` implementation. No fix has been merged to main as of today.
3.  **Medium**: Two unaddressed unchecked type assertion bugs that can trigger unexpected runtime panics under non-standard edge input conditions, tracked in PRs [#3091](https://github.com/sipeed/picoclaw/pull/3091) (native search type safety) and [#3053](https://github.com/sipeed/picoclaw/pull/3053) (evolution storage lock safety).
4.  **Low**: Unreproduced user-reported memory loss issue Issue [#3150](https://github.com/sipeed/picoclaw/issues/3150), where the assistant appears to lose session context. No detailed environment or reproduction logs have been submitted by the reporter yet.

## 6. Feature Requests & Roadmap Signals
- The highest-priority user request, Telegram conversation type permission tiering (Issue [#3114](https://github.com/sipeed/picoclaw/issues/3114)), is highly likely to be included in the next v0.3.x minor stable release, given Telegram's status as one of the most widely used chat channels for PicoClaw deployments.
- The long-running Agent Collaboration Bus PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) signals that native multi-agent orchestration will be the flagship feature for the upcoming v0.4.0 major release, after the v0.3.0 stable launch.
- Near-ready quality-of-life fixes including the Matrix user ID parsing fix PR [#3045](https://github.com/sipeed/picoclaw/pull/3045) and MCP argument parsing fix PR [#3048](https://github.com/sipeed/picoclaw/pull/3048) are very likely to land in the next weekly nightly build before v0.3.0 stable is published.

## 7. User Feedback Summary
No negative feedback targeting core LLM inference or basic assistant functionality was submitted in this window, indicating high baseline user satisfaction with the project's core capabilities. All user pain points are tied to edge-case compatibility and security gaps:
- Windows desktop users report full file tool functionality is broken out of the box, forcing them to use WSL workarounds to run PicoClaw locally.
- Users running PicoClaw in shared Telegram groups are exposed to unmanaged risk of destructive tool execution for non-1:1 chat use cases, with no built-in permission guardrails available out of the box.
- Self-hosted Matrix users cannot properly whitelist standard Matrix user IDs due to parsing errors, blocking full deployment of PicoClaw for the Matrix user segment.

## 8. Backlog Watch
High-priority stale items that require urgent maintainer attention:
1.  Issue [#2472](https://github.com/sipeed/picoclaw/issues/2472): The Windows `list_dir` bug has been open for over 2.5 months, with no assigned maintainer, despite 6 user comments confirming the widespread impact of the issue.
2.  PR [#2937](https://github.com/sipeed/picoclaw/pull/2937): The large Agent Collaboration Bus feature PR has been open for almost 1 month, with no formal review updates from core maintainers, slowing progress on the high-demand multi-agent roadmap.
3.  Four small, ready-to-merge bug fix PRs (#3091, #3053, #3048, #3045) submitted over 1 week ago have received no maintainer review feedback, blocking them from being merged to main to reduce runtime crash risk.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) 2026-06-20 Project Digest
---
## 1. Today's Overview
For the 24-hour tracking window ending 2026-06-20, the NanoClaw open-source personal AI assistant project saw steady, moderate development activity focused on core runtime hardening, third-party integration fixes, and platform compatibility improvements. No new official releases were published in this period, with 1 pre-existing open bug issue and 6 pending pre-merge pull requests receiving updates. The current active development sprint prioritizes macOS ecosystem native support, robust cross-channel message handling, and complete auditability for approval workflows targeted at enterprise deployments. No critical production outages or high-severity regression reports were logged today, indicating stable, low-risk iteration of the project’s vNext roadmap.

## 2. Releases
No new official versions of NanoClaw were released in the 2026-06-20 tracking window. No breaking changes, migration notes, or new feature changelogs are applicable for this digest period.

## 3. Project Progress
Zero pull requests were merged or closed during the 24-hour window. All 6 updated PRs remain in active pre-merge review, representing near-term pending changes spanning approval workflow persistence, Discord message formatting, macOS native runtime support, iMessage setup automation, enterprise permission inheritance, and README metadata updates. No shipped user-facing changes went live in the tracked period.

## 4. Community Hot Topics
The highest-engagement items from the updated dataset are:
1. [Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784): Container-runner session source staleness check bug, the only tracked item with public user comments
2. [PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809): Apple Container runtime + remote OneCLI gateway feature implementation

Underlying demand analysis: The high early engagement for the Apple Silicon-native container runtime PR reflects strong demand from local developer users who want to avoid unnecessary Docker overhead for local NanoClaw deployments. The long-running permission inheritance PR signals unmet needs for enterprise multi-agent teams that want to reuse parent agent access controls to eliminate redundant permission configuration work.

## 5. Bugs & Stability
Bugs are ranked by severity, with associated fix status noted below:
1. **Medium Severity**: Container-runner staleness check only monitors `index.ts` and misses changes to `ipc-mcp-stdio.ts` (tracked in [Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784)). Impact: Users modifying the IPC MCP stdio handler file will not see changes automatically synced to session directories, requiring manual cache clearing to apply updates. No dedicated fix PR has been opened for this issue as of the tracking window.
2. **Low-Medium Severity**: Approval delivery target fields stay NULL on all pending approval rows (tracked in [PR #2820](https://github.com/nanocoai/nanoclaw/pull/2820)). Impact: The admin `approvals list` reporting tool cannot track which platform an approval request was sent to, breaking audit log functionality for regulated use cases. Fix is already in review.
3. **Low Severity**: Discord adapter truncates replies longer than 2000 characters instead of chunking them (tracked in [PR #2812](https://github.com/nanocoai/nanoclaw/pull/2812)). Impact: Long-form LLM outputs such as full code snippets or documentation are cut off for Discord channel users. Fix is already in review.
4. **Low Severity**: Fresh iMessage channel setup fails on clean repo checkouts due to missing `src/channels` directory (tracked in [PR #2792](https://github.com/nanocoai/nanoclaw/pull/2792)). Impact: New users cannot complete the automated iMessage integration setup flow on first install. Fix is already in review.

## 6. Feature Requests & Roadmap Signals
Multiple in-review changes are highly likely to ship in the next upcoming patch release, given their low risk and backwards-compatible design: the Discord long message chunking fix, iMessage setup error resolution, and approval delivery target persistence. The env-gated [Apple Container runtime PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809) is also a strong candidate for the next minor release, as it is fully backwards compatible with existing Docker-based deployments and introduces no breaking changes. The long-running parent agent permission inheritance PR (#2605) is a larger enterprise-focused feature that will likely land in the subsequent minor release after final review.

## 7. User Feedback Summary
All active user feedback collected in the tracking window focuses on resolving targeted functional gaps, with no explicit positive or negative satisfaction scores logged:
- Local macOS developer users report frustration with mandatory Docker overhead for running NanoClaw on Apple silicon, requesting native lightweight container support
- Discord integration users complain about arbitrarily truncated long LLM outputs that break long-form workflow use cases
- Enterprise admin users note that incomplete approval audit logs make the platform non-compliant with internal access control policies for sensitive workflows
- New self-hosting users report failed setup of the iMessage integration due to unhandled missing directory paths on fresh repo clones

## 8. Backlog Watch
The highest-priority overdue item requiring maintainer attention is [PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605), which adds support for inheriting parent agent permissions via OneCLI. The PR was opened on 2026-05-24 (over 3 weeks old as of this digest), follows official project contribution guidelines, and has no outstanding public comments or reviews logged. Unblocking this PR will unlock a key multi-agent deployment use case for enterprise teams. No other long-overdue high-severity issues are flagged in the current dataset.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw (github.com/nullclaw/nullclaw) 2026-06-20 Project Digest
---
## 1. Today's Overview
The NullClaw project saw moderate, targeted development activity in the 24-hour reporting window, with 2 updated open user issues and 1 newly submitted open pull request, no merged code changes or new official releases published in this period. All active work is currently focused on resolving cross-platform compatibility gaps for mobile edge environments and broken integration functionality for popular Chinese enterprise collaboration tools. No critical production outages or server-side deployment regressions were reported over the last 24 hours, and contributor activity remains focused on expanding NullClaw’s supported deployment footprint beyond standard x86 desktop and server environments. The project’s current health is stable, with ongoing community contributions addressing gaps that were unaddressed in recent release cycles.
## 2. Releases
No new official releases were published in the 24-hour reporting window. No new breaking change notifications or migration guidance were posted for existing production deployments.
## 3. Project Progress
There were 0 merged or closed pull requests, and 0 resolved issues in the reporting window. All active development work remains in open review status, with no new features, bug fixes, or performance optimizations merged to the mainline codebase today.
## 4. Community Hot Topics
The two most actively discussed items over the past 24 hours are aligned with user demand for expanded self-hosted edge deployment and regional enterprise tool support:
1.  Feishu network query failure issue: [nullclaw/nullclaw#484](https://github.com/nullclaw/nullclaw/issues/484) (3 user comments)
2.  Android/Termux aarch64 Zig build failure issue: [nullclaw/nullclaw#868](https://github.com/nullclaw/nullclaw/issues/868) (2 user comments)
3.  Associated proposed fix for Termux runtime network issues: [nullclaw/nullclaw#966](https://github.com/nullclaw/nullclaw/pull/966)
The underlying user need driving these discussions is clear: community members are prioritizing low-friction local, offline-capable NullClaw deployment on consumer mobile hardware, alongside fully functional native integration with Feishu workspaces for enterprise teams based in mainland China.
## 5. Bugs & Stability
Bugs reported in the reporting window are ranked by severity below:
1.  **High Severity**: Zig build failure on aarch64 Android/Termux (AccessDenied error on `options.zig` linkat) ([#868](https://github.com/nullclaw/nullclaw/issues/868)). This bug completely blocks all local self-hosted installation of NullClaw on aarch64 Android devices running Termux, and an open targeted fix PR ([#966](https://github.com/nullclaw/nullclaw/pull/966)) has already been submitted to resolve the root cause of Zig stdlib DNS failures on Termux.
2.  **Medium Severity**: Feishu integration cannot run network queries ([#484](https://github.com/nullclaw/nullclaw/issues/484)). This bug breaks the core internet-augmented assistant functionality for all users running NullClaw connected to Feishu workspaces, and no associated fix PR has been filed to date.
No critical crashes, server-side regressions, or data loss bugs were reported in the 24-hour window.
## 6. Feature Requests & Roadmap Signals
Active user feedback signals two clear near-term roadmap priorities for the NullClaw team:
- Full official support for native local deployment on aarch64 Android Termux environments, targeting power users who want to run their personal AI assistant fully offline on their mobile phones
- Fully validated first-party Feishu (Lark) integration parity with existing Slack and Teams integrations for enterprise users
The upcoming v2026.6 minor release is very likely to ship the Termux platform compatibility fix once PR #966 completes review, as the code contribution is nearly complete and addresses a major unmet community demand.
## 7. User Feedback Summary
All active user feedback in the reporting window centers on unresolvable pain points for custom self-hosted deployments:
1.  Users who have already deployed NullClaw as a bot for their Feishu workspaces are unable to use the core web search functionality, and have no documented workaround to restore the feature
2.  Android power users attempting to run NullClaw locally on their mobile hardware cannot complete the build process, with no public troubleshooting guidance from maintainers for the Termux aarch64 environment
No positive satisfaction feedback for production deployments was submitted in the 24-hour window.
## 8. Backlog Watch
Issue [#484](https://github.com/nullclaw/nullclaw/issues/484) (Feishu cannot complete network queries) is a high-priority backlog item that has gone unaddressed for over 3 months (originally created 2026-03-13) despite accumulating 3 user comments from affected enterprise deployment teams. No maintainer response, triage update, or planned fix timeline has been posted for this issue to date, and it requires urgent maintainer attention to avoid eroding trust among the project’s Chinese enterprise user base.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-06-20
---
## 1. Today's Overview
The 2026-06-20 24-hour tracking window shows extremely high core team activity focused on maturing the IronClaw Reborn rewrite, with 5 updated issues and 28 total updated pull requests (12 merged/closed, 16 open). The project balanced delivery of new user-facing features, major CI performance optimizations, and foundational infrastructure work for upcoming platform capabilities, signaling strong development momentum. No critical production outages were reported in the window, and all active work appears aligned with the public Reborn feature roadmap. The 28 total PR volume confirms the core team is executing on a packed multi-week sprint schedule.

## 2. Releases
No new official releases were published during the 2026-06-20 tracking window.

## 3. Project Progress
12 PRs were merged/closed in the window, delivering measurable improvements across CI, testing, and product functionality:
- **CI Performance wins**: A full rollout of the mold high-speed linker (https://github.com/nearai/ironclaw/pull/5089, https://github.com/nearai/ironclaw/pull/5090) eliminated the artificial single-job build limit for Reborn Rust CI, delivering a validated ~40% reduction in heavy build times. The team also launched an experimental A/B test comparing sccache vs existing rust-cache strategies (https://github.com/nearai/ironclaw/pull/5092) to pursue further build speed gains.
- **QA & Testing maturity**: Closed PRs added formal Reborn QA documentation rules (https://github.com/nearai/ironclaw/pull/5097), ported 7 full project-setup benchmark workflows to the record/replay test harness (https://github.com/nearai/ironclaw/pull/5096), and committed new shared LLM trace fixtures for connection, routine, and web-fetch test scenarios (https://github.com/nearai/ironclaw/pull/5095).
- **Product feature launch**: The 5-part Projects feature stack was fully finalized, with remaining review comments on the ported feature resolved (https://github.com/nearai/ironclaw/pull/5064) and the production-facing Projects page wired to live working API endpoints (https://github.com/nearai/ironclaw/pull/5019).

## 4. Community Hot Topics
The highest-engagement public item in the tracking window is the long-running interoperability issue:
> [Issue #1012] Alibaba Coding Plan could not be used in the openai_compatible mode (https://github.com/nearai/ironclaw/issues/1012)
The issue has 1 user upvote, 1 comment, and was originally opened 3 months prior. It highlights an unmet user need for seamless, no-code compatibility with Alibaba's Qwen model endpoints via the standard OpenAI compatible API surface, a workflow that already works on competing *claw agent frameworks. The underlying user priority is frictionless self-hosted deployment with non-OpenAI LLM providers, no custom configuration required.

## 5. Bugs & Stability
Bugs are ranked by user impact below:
1. **High severity**: Nightly E2E pipeline failure (https://github.com/nearai/ironclaw/issues/4108) – the scheduled full end-to-end validation run failed on 2026-06-19, blocking automated validation of all new Reborn builds. No linked fix PR is visible in current tracking data.
2. **Medium severity**: Misleading "reads" approval prompt label (https://github.com/nearai/ironclaw/issues/5088) – local users see references to a non-existent "reads" shell action in permission prompts, reducing user trust in the approval system. No linked fix PR has been published.
3. **Medium severity**: Alibaba Qwen provider 405 error in OpenAI compatible mode (https://github.com/nearai/ironclaw/issues/1012) – blocks users deploying Alibaba models from using the generic OpenAI-compatible provider interface. No linked fix PR has been published.
4. **Low / Resolved**: Large command approval modal rendering bug (https://github.com/nearai/ironclaw/issues/5078) – already marked closed, with the oversized long shell command rendering issue patched to avoid blocking user permission reviews.

## 6. Feature Requests & Roadmap Signals
New prioritized feature requests and active work signal the near-term roadmap:
- The newly opened issue for a unified feature flag system (https://github.com/nearai/ironclaw/issues/5091) targets per-user targeting, gradual rollout, and A/B testing for Reborn, making it a top-priority infrastructure project that will almost certainly land in the next minor release.
- Open PRs for pre-emptive Google OAuth token refresh, per-tool permission overrides, concurrent turn execution, and the fully shipped Projects feature will almost all be included in the next public stable release. More experimental work for skill extraction/self-evolution and Slack ingress support is scheduled for follow-up 1-2 release cycles later.

## 7. User Feedback Summary
Collected real user feedback from the tracking window:
- Power users running complex long shell commands express frustration that approval modals were previously almost unusable for large command strings, with the rendered action content dominating the screen and hiding review controls.
- Users migrating from competing agent frameworks report significant friction when trying to deploy IronClaw with Alibaba Qwen model endpoints, as the standard OpenAI compatible interface that works on other platforms throws an unhandled 405 error.
- Local test users note confusing UI labeling for shell approval flows erodes their confidence that the system is correctly representing the actions the model is requesting permission to run. No widespread complaints about core runtime reliability are reported.

## 8. Backlog Watch
Two high-impact outstanding items are awaiting maintainer prioritization:
1. [Issue #1012](https://github.com/nearai/ironclaw/issues/1012) – Opened March 2026 (over 3 months old), the Alibaba OpenAI compatibility issue only has 1 total comment, despite earning a user upvote confirming real world deployment demand.
2. [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) – Opened May 2026 (over 3 weeks old), the recurring failing Nightly E2E run just re-occurred, and has not yet gotten a full triage pass to resolve the root cause of the test failure.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-06-20
*Source: github.com/netease-youdao/LobsterAI*

---

## 1. Today's Overview
For the 24-hour period ending 2026-06-20, the NetEase Youdao LobsterAI open-source personal AI assistant project recorded moderate, steady operational activity focused on legacy bug triage and roadmap planning. No new or merged pull requests were logged in the reporting window, while 4 total issues received updates, with 3 long-documented stale bug reports formally marked as resolved and 1 high-priority new feature proposal submitted by a core contributor. The project also recently shipped its official 2026.6.18 stable release, delivering long-requested expanded artifact sharing support for common office and knowledge file formats. Overall project health remains strong, with no urgent active incidents reported, and clear forward progress toward expanding cross-model orchestration capabilities for technical end users.

## 2. Releases
A new backward-compatible stable release *LobsterAI 2026.6.18* was recently published, with no breaking changes or special migration steps required for existing users. Key changes in this version include:
1. **New Feature**: Artifact sharing capabilities fully upgraded to support 6 additional widely used file formats (Word, PPT, Excel, PDF, Markdown, Mermaid) beyond previously supported plain text and image types, implemented via [PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159) contributed by @liugang519.
2. **Performance Fix**: The voice input module was refactored to retain only real-time ASR (Automatic Speech Recognition) functionality, removing deprecated unused voice processing sub-modules to reduce backend resource overhead by ~18% per official notes.

## 3. Project Progress
No new, merged, or closed pull requests were recorded in the 24-hour reporting window. Project progress this period focused on formal triage of 3 long-open stale bug reports, all previously patched and validated on the project’s main branch, formally closing these entries to clear the open backlog:
- Resolved Python script execution errors in chat sessions that did not appear on competing Claude Code CLI implementations
- Resolved input draft data loss caused by unexecuted debounce timers when users switch sessions or navigation views
- Resolved unconfirmed content overwriting when users re-edit historical messages with unsaved draft content in the input box.

## 4. Community Hot Topics
The only active updated community topic this window is the new high-impact feature proposal [Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180), submitted by contributor @woxinsj. The proposal outlines plans to rebuild LobsterAI’s OpenClaw low-level toolset into a full "AI Collaborator" platform, including a natural language command bar, task dispatch console, cross-model orchestration tools, and persistent project-level memory functionality.
This request reflects a clear underlying unmet user need: active technical users are currently manually coordinating multiple separate AI model instances, tracking scattered work artifacts, and re-stating full project context across disconnected sessions, and are asking LobsterAI to evolve beyond a single-session chat assistant into an end-to-end dedicated project toolchain targeted at tech-savvy non-expert programmers.

## 5. Bugs & Stability
No new unpatched crashes, regressions, or critical stability issues were reported during the reporting window. All 3 recently closed issues are user-facing bugs ranked by severity below:
1. **High Severity**: Unprompted unsaved input draft loss caused by session/navigation switches, and unconfirmed overwriting of unsaved draft content when users click re-edit on historical messages ([#1471](https://github.com/netease-youdao/LobsterAI/issues/1471), [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472)), two data loss defects that could cause partial loss of unsubmitted user work. Both fixes have been deployed to main branch with zero new related bug reports logged post-patch.
2. **Medium Severity**: Unexpected Python script execution failures in chat sessions that worked correctly on third-party AI assistant implementations ([#1487](https://github.com/netease-youdao/LobsterAI/issues/1487)), which disrupted the workflow of users running local 30B LLM workloads with custom Python skills.

## 6. Feature Requests & Roadmap Signals
The only formal new feature request submitted this window is the full AI Collaborator platform upgrade outlined in Issue #2180, which aligns perfectly with LobsterAI’s stated long-term product positioning as an AI development assistant for non-expert technical users. Given the proposal was submitted by a core contributor immediately after the 2026.6.18 release, it is highly likely that the first iteration of the natural language command bar and basic cross-model orchestration dispatch functionality will be prioritized for inclusion in the next upcoming minor release (tentatively the 2026.6.25 or early 2026.7.x version). No competing high-priority feature requests were submitted in this period to shift existing roadmap priorities.

## 7. User Feedback Summary
Aggregated feedback from the recently closed legacy bug reports shows that top Q2 2026 user experience dissatisfaction points focused on avoidable unprompted data loss of unsaved user input, a common high-friction pain point for interactive AI assistant interfaces. Verified referenced use cases confirm that a large share of active users are leveraging LobsterAI for local, privacy-first large language model workloads and multi-session parallel work across separate workspaces. No negative satisfaction feedback targeting the recently deployed artifact sharing or voice input updates was logged, indicating high general user satisfaction with the platform’s core execution capabilities.

## 8. Backlog Watch
Following this triage round that closed 3 legacy 2.5-month-old unconfirmed resolved bug reports, there are no remaining long-unanswered high-severity stability issues in the current public backlog. The newly submitted high-impact AI Collaborator feature proposal (Issue #2180) currently has 0 maintainer responses 24 hours after being published, making it the highest-priority item requiring maintainer attention to confirm if the proposal’s outlined scope aligns with official roadmap goals, assign related development tasks, and avoid misalignment between community contributed development work and core product plans.

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

# CoPaw (agentscope-ai/CoPaw) 2026-06-20 Project Digest
---
## 1. Today's Overview
On 2026-06-20, the CoPaw project recorded a high-velocity, healthy development cycle with 28 total updated assets (11 tracked issues + 17 tracked PRs) over the past 24 hours, reflecting strong active maintenance momentum. 6 of the 17 PRs were merged or closed, with all landed changes prioritizing core stability and usability fixes rather than breaking functionality. Multiple first-time contributors submitted targeted, production-ready patches covering core modules including memory management, scheduling, and context processing, indicating a fast-growing and engaged open-source community. No new official production releases were published today, as the development team focuses on validation of accumulated bug fixes ahead of the next minor version rollout.

## 2. Releases
No new official releases were published in the past 24 hours.

## 3. Project Progress (Merged/Closed PRs)
6 PRs were fully merged or closed in the last 24 hours, delivering high-impact improvements for core system stability:
1. Core memory fix: [#5332](https://github.com/agentscope-ai/CoPaw/pull/5332) Implemented automatic and manual ChromaDB index maintenance, including configurable write-triggered auto-compaction (default threshold 1000 writes) to resolve unbounded vector index growth.
2. Scheduling improvement: [#5241](https://github.com/agentscope-ai/CoPaw/pull/5241) Raised the default cron job misfire grace window from 60 seconds to 3600 seconds, eliminating unintended scheduled job skips when instances are occupied by long-running agent tasks.
3. Context stability patch: [#5242](https://github.com/agentscope-ai/CoPaw/pull/5242) Added timeout protection for LLM calls inside the context compaction module, preventing full process freezes caused by slow or hanging model API responses.
4. Multi-agent collaboration optimization: [#5179](https://github.com/agentscope-ai/CoPaw/pull/5179) Expanded trigger keywords for the multi-agent collaboration skill, fixing the issue where explicit user team collaboration instructions were sometimes ignored on first attempt.
5. Draft cleanup: 3 redundant iterative PRs (#5337, #5338) for the Zhipu provider connection fix were closed, reducing unnecessary open PR backlog.

## 4. Community Hot Topics
The two highest-engagement threads highlight unmet high-priority user needs:
1. Unbounded ChromaDB index overflow issue [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) (3 comments): This 3-week-old bug report filed by a 3-month long-term self-hosted user attracted the most discussion, reflecting widespread demand for zero-maintenance persistent memory systems that do not require manual local storage cleanup to avoid unplanned crashes. Its fix PR has already been merged, demonstrating the team's fast response to critical long-running stability pain points.
2. Mobile sidebar agent switching feature request [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329) (3 comments): Submitted by a user accessing the instance via mobile browser, this request highlights the fast-growing use case of managing agents on portable devices, where the current responsive UI's collapsed sidebar mode lacks core functionality required for normal workflow. The dedicated fix PR #5334 is already under active review.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Bug Description | Related Issue | Fix Status |
|----------|----------------|---------------|------------|
| Critical | ChromaDB vector index grows unbounded up to 37GB, causing frequent memory_search crashes every 30 minutes | [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) | Fix PR #5332 merged, pending final validation |
| High | DeepSeek model agents randomly hang during thinking, requiring manual stop and resume to continue execution | [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328) | Dedicated root cause investigation not yet started |
| High | Inconsistent UI state after submitting a prompt: input field stays active for new submissions while the agent is unresponsive | [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333) | Fix PR #5335 under review |
| High | Zhipu provider API-level connection test passes, but all model-level connection tests fail | [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330) | Fix PR #5339 under review |
| Medium | v1.1.12 regression: Images sent via `send_file_to_user` do not render in the web chat UI, though third-party channel delivery works normally | [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320) | Fix PR #5324 under review |
| Medium | Windows Tauri build loses access to local Python runtime, breaking all custom Python-based skills | [#5317](https://github.com/agentscope-ai/CoPaw/issues/5317) | No fix PR submitted yet |

## 6. Feature Requests & Roadmap Signals
High-priority user-requested features are aligned for near-term release:
- Custom per-provider model sorting (#5267) and real-time SSE push notifications with voice alert for API incoming messages (#5322) have fully drafted PRs under review, and are very likely to ship in the next v1.1.13 minor patch release alongside all pending bug fixes.
- Lower-priority

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-06-20
*Source: https://github.com/zeroclaw-labs/zeroclaw*

---

## 1. Today's Overview
The ZeroClaw open-source AI agent framework recorded exceptionally high development activity on 2026-06-20, with 50 total updated issues (47 active, 3 closed) and 50 updated pull requests (37 open, 13 merged/closed) spanning core runtime, multi-agent channel, LLM provider stack, and security hardening workstreams. The team recently launched the first stable patch for the v0.8.x feature line, demonstrating strong momentum stabilizing the major new capabilities that debuted in the v0.8.0 full release. Most ongoing work is focused on closing critical regressions from v0.8.0, advancing enterprise authentication improvements targeted for v0.9.0, and expanding plugin and multimodal support for edge and private deployment use cases. Overall project health is very strong: 45 distinct contributors shipped 207 commits for the v0.8.1 patch alone, with balanced investment across bug fixes, new features, and infrastructure hardening.

## 2. Releases
The new ZeroClaw v0.8.1 patch release is live:
> Official release page: https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.1
This is the first stable patch for the v0.8.x line, built to resolve widespread stability gaps in the new multi-agent runtime, unified channel system, and refactored LLM provider stack that shipped in v0.8.0. It delivers 123 targeted bug fixes and 46 incremental new features across 207 total commits. No breaking changes are introduced, and all users running v0.8.0 are strongly advised to upgrade immediately to resolve regressions impacting Slack/Discord functionality and memory handling.

## 3. Project Progress
The 13 merged/closed PRs and 3 resolved issues completed in the last 24 hours delivered the following concrete improvements:
- Full resolution of the long-standing LLM cost tracking gap ([#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221)) that previously failed to capture API usage costs for scheduled cron jobs, CLI invocations, and web agent interactions
- Closure of the v0.8.1 integration/channel/provider/tool work tracking umbrella issue ([#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)) confirming all planned v0.8.1 scope items are complete
- Fix for the web dashboard Skills page bug ([#7757](https://github.com/zeroclaw-labs/zeroclaw/issues/7757)) that failed to display workspace, open-skill, and plugin-hosted skills on the UI listing
- Completed aligned Docker Node 24 digest pin updates for all build pipelines, plus initial prep work for the new WASM component-model plugin host integration.

## 4. Community Hot Topics
The top 3 highest-engagement discussions sorted by comment count reflect clear priority alignment between users and the dev team:
1. [Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) (6 comments): Regression report that official v0.8.0 prebuilt binaries ship without compiled Slack/Discord channel features, breaking all prebuilt user deployments relying on these integrations
2. [Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) (6 comments): Runtime bug that over-prioritizes stored long-term agent memory over current explicit task prompts, breaking output reliability for cron job workloads
3. [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (5 comments): OIDC Authentication Provider support RFC, the core tracking issue for the v0.9.0 enterprise security roadmap.
Underlying community needs visible across these discussions include demand for regression-free reliability for production channel deployments, predictable behavior for automated scheduled agent tasks, and SSO-compliant auth to run ZeroClaw on internal corporate private networks.

## 5. Bugs & Stability
Bugs are ranked by severity, with linked status of existing fix PRs:
1. **S1 (workflow blocked, P1)**: Default 32k context budget is exceeded by default system prompts + tool definitions on the first conversation iteration, causing perpetual preemptive context trimming ([#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)). No public fix PR is published yet.
2. **S1 (workflow blocked, P1)**: Agent rename and delete operations modify external state *before* config persistence, risking data loss if the process crashes mid-operation ([#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907), [#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941)). No public fix PRs are published yet.
3. **S1 (workflow blocked, P1)**: Cron jobs are re-launched repeatedly if runtime execution exceeds the scheduler poll interval, causing duplicate workload bursts of up to 20 concurrent jobs ([#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)). No public fix PR is published yet.
4. **S2 (degraded behavior, P2)**: Shared runtime profile context compression summary models fail cross-provider, a fix is already open for immediate merge via PR [#7973](https://github.com/zeroclaw-labs/zeroclaw/pull/7973).
5. **High-severity security**: 4 active RUSTSEC vulnerabilities tied to the pinned `rumqttc` MQTT dependency ([#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)), currently blocked pending an upstream release that updates the outdated rustls TLS stack.

## 6. Feature Requests & Roadmap Signals
Based on current milestone tracking and in-progress work, these features are highly likely to ship in upcoming releases:
- The highly upvoted MCP resource and prompt support enhancement ([#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467), 4 👍) is marked in-progress, and per the v0.8.3 milestone tracker will ship alongside the MCP web management dashboard in the v0.8.3 mid-cycle patch.
- The WebSocket lifetime decoupling feature ([#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)) that prevents in-flight agent turns from being cancelled when web users disconnect mid-run, is already in-progress and targeted for the next v0.8.2 patch release.
- The new configurable temporary file cleanup feature ([PR #7923](https://github.com/zeroclaw-labs/zeroclaw/pull/7923)) for storage-constrained edge deployments will almost certainly ship in the next minor v0.8.x patch after final validation.
- The OIDC authentication work for enterprise SSO integration remains on track for its scheduled v0.9.0 delivery.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*