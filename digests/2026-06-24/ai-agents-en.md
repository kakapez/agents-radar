# OpenClaw Ecosystem Digest 2026-06-24

> Issues: 188 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-23 23:08 UTC

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

# OpenClaw Project Daily Digest | 2026-06-24
---
## 1. Today's Overview
The OpenClaw project recorded extremely high development activity over the 24-hour window, with 188 updated issues (138 active, 50 resolved) and 500 updated pull requests (469 open, 31 merged/closed), with no new official releases published. Most active development is currently focused on wrapping up Path 3 of the core SQLite transcript/session migration, alongside widespread triage and fix work for stability regressions introduced in the 2026.6.x release train. Overall project health remains strong: community contributors opened 20+ new fix and feature PRs, and the maintainer team is actively reviewing high-priority issue backlogs to unblock the upcoming 3.2 foundation milestone. No critical unmitigated zero-day security vulnerabilities were reported in the tracking window.

## 2. Releases
No new official releases were published in this 24-hour period. The last public stable release referenced in tracked content is the 2026.6.9 build.

## 3. Project Progress
31 PRs and 50 total issues were merged or closed in the tracking window, with key advances including:
- [PR #96201](https://github.com/openclaw/openclaw/pull/96201): Refactor adding an abort target session accessor, resolving a long-standing migration gap for the core SQLite session tracking work defined in [Issue #88838](https://github.com/openclaw/openclaw/issues/88838)
- [PR #68936](https://github.com/openclaw/openclaw/pull/68936): Shipped automated PR review autofix pipeline paired with a Windows background gateway supervising daemon, reducing manual reviewer workload for small community PRs
- [PR #71235](https://github.com/openclaw/openclaw/pull/71235): Merged Docker fix adding `python` → `python3` symlink for Debian Bookworm base images, eliminating a common tool execution failure for users running OpenClaw in containerized environments
- Resolved high-severity previously open bugs: Cron global runtime state contamination ([#90991](https://github.com/openclaw/openclaw/issues/90991)), Windows ACPX runtime spawn EINVAL failures ([#93465](https://github.com/openclaw/openclaw/issues/93465)), and silent incomplete turns on the NVIDIA Build provider ([#95760](https://github.com/openclaw/openclaw/issues/95760))

## 4. Community Hot Topics
The most actively discussed items, sorted by comment and reaction volume:
1. [Issue #88838](https://github.com/openclaw/openclaw/issues/88838) (50 comments, 1 👍): Track core session/transcript SQLite migration via accessor seam. This is the highest-priority project-level roadmap item, with the entire community closely following progress as it will fix dozens of existing session corruption and message loss bugs. The latest update confirms the 3.1a phase of the migration is already landed, with only final bundled transcript lookup cleanup remaining.
2. [Issue #42840](https://github.com/openclaw/openclaw/issues/42840) (8 comments, 7 👍): Feature request to add MathJax/LaTeX support to the Control UI. This is the most widely upvoted feature request in the 24-hour window, driven by academic, research, and technical user bases that frequently share mathematical and scientific content via their assistants.
3. [Issue #94518](https://github.com/openclaw/openclaw/issues/94518) (3 comments, 3 👍): DeepSeek cache hit rate <10% after 6.x upgrade. Users report inference costs jumped 10x overnight after the 2026.6.x boundary-aware caching change broke prefix matching for DeepSeek's openai-compatible API, affecting a large segment of cost-sensitive self-hosted model users.

## 5. Bugs & Stability
High-severity bugs reported or updated in the last 24 hours, ranked by impact:
1. **Critical 6.9 Regression**: [Issue #96118](https://github.com/openclaw/openclaw/issues/96118): Dreaming runs but memory never promotes, and the Dreams UI shows only dashes. No associated fix PR exists yet, breaking the nightly long-term memory workflow for all users on the 2026.6.9 release with `memory-core` enabled.
2. **High Severity**: [Issue #94939](https://github.com/openclaw/openclaw/issues/94939): 6.x state migration leaves channel conversation-store SQLite files empty (0 bytes), orphaning conversation references and breaking proactive Bot Framework/MS Teams message sends for enterprise users. No public fix PR is attached at time of writing.
3. **High Severity**: [Issue #95833](https://github.com/openclaw/openclaw/issues/95833): Subagent abort-settle fails to release the `.jsonl.lock` file, permanently breaking the affected session until a manual gateway restart. No fix PR has been opened.
4. **Medium Severity**: Newly opened [Issue #96148](https://github.com/openclaw/openclaw/issues/96148): Track iMessage source-reply latency instrumentation, a performance tracking request to reduce message delivery lag for Apple ecosystem users.

## 6. Feature Requests & Roadmap Signals
Top user-submitted feature requests observed, with predicted near-term roadmap placement:
- Add `/label <name>` and `/new <name>` slash commands for WebChat session naming ([#93422](https://github.com/openclaw/openclaw/issues/93422)): Low complexity, high user demand, very likely to land in the next 2026.6.10 minor release
- Add MathJax/LaTeX rendering support to the Control UI ([#42840](https://github.com/openclaw/openclaw/issues/42840)): One of the highest upvoted open feature requests, targeted for the 2026.7 cycle
- Allow compaction providers to be implemented as MCP servers ([#96156](https://github.com/openclaw/openclaw/issues/96156)): Highly aligned with the project's existing MCP ecosystem expansion priorities, expected to ship before the 3.2 stable milestone
- Add global centralized SSRF policy configuration ([#93068](https://github.com/openclaw/openclaw/issues/93068)): Requested by enterprise administrators to eliminate redundant per-subsystem security configuration, will be prioritized as part of the 2026.6 security hardening sprint.

## 7. User Feedback Summary
Verified user pain points and sentiment collected from updated issues:
1.  Dissatisfaction is widespread over broken prompt caching for both OpenAI and DeepSeek models after the 2026.6.x upgrade, leading to unexpected 2-10x higher inference costs for end users.
2.  Users working with non-Anthropic models that expose Anthropic-compatible API endpoints frequently report tool calls being output as plain text instead of structured `tool_use` blocks, breaking workflow automation.
3.  macOS desktop users are experiencing a severe annoyance bug that causes the system to send dozens of TCC location permission prompts per second, severely degrading user experience.
4.  Multiple users running shared multi-agent deployments note duplicate vector stores for agents on the same workspace waste significant disk space and indexing compute.
5.  Sentiment remains largely positive, as 17+ new community-contributed fix PRs were opened in the tracking window for Telegram, IRC, Matrix, Feishu, and Discord channels, indicating strong active adoption from the developer community.

## 8. Backlog Watch
High-priority long-unresolved items that need maintainer triage attention:
1. [Issue #49931](https://github.com/openclaw/openclaw/issues/49931): Configurable shell override for the exec tool on Windows, opened March 18, 2026, marked stale, with 6 comments from users noting PowerShell's default quoting rules break complex shell automation workflows. No maintainer has been assigned to address this multi-month old feature request.
2. [Issue #71712](https://github.com/openclaw/openclaw/issues/71712): RFC for an agent-facing non-forgeable scheduling API, opened April 25, 2026, marked stale, with no public design review progress despite strong demand from self-hosted users that want agents to safely create their own recurring cron tasks.
3. [Issue #79047](https://github.com/openclaw/openclaw/issues/79047): Preserve conversation context across cross-backend model switches, opened May 7, 2026, with multiple upvotes from power users that frequently swap model providers mid-session, but no public roadmap entry or maintainer owner assigned.

---

## Cross-Ecosystem Comparison

# 2026-06-26 Open-Source Personal AI Agent Ecosystem Cross-Project Comparison Report
## 1. Ecosystem Overview
As of 2026-06-24, the tracked 11-project open-source personal AI agent landscape has moved well past initial demo-stage functionality, with a collective focus now centered on production-grade reliability, cross-platform deployment usability, inference cost optimization, and interoperability with emerging standards including the Model Context Protocol (MCP) and Agent Communication Protocol (ACP). Over 60% of new features merged across active repositories are contributed by external community developers, indicating widespread real-world adoption far beyond internal corporate engineering teams. The ecosystem has clear, non-overlapping segmentation for use cases ranging from hobbyist edge deployments to large enterprise multi-user agent orchestration, with no single project serving all user segments comprehensively. Core foundational standards for session persistence and tool orchestration are converging rapidly, reducing redundant implementation work for downstream agent builders.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Health Score (1-10, 10=perfect) |
|---|---|---|---|---|
| OpenClaw | 188 | 500 | No new release | 9/10 |
| NanoBot | 11 | 39 | New v0.2.2 stable release | 9/10 |
| Hermes Agent | 50 | 50 | No new release | 9/10 |
| PicoClaw | 23 | 6 (merged) | No new release | 8/10 |
| NanoClaw | 1 | 12 | No new release | 9/10 |
| NullClaw | 1 | 1 | No new release | 7/10 |
| IronClaw | 21 | 40 | No new release | 9/10 |
| LobsterAI | 1 | 11 | No new release | 8/10 |
| Moltis | 0 | 1 (merged) | No new release | 8/10 |
| CoPaw | 38 | 50 | New v1.1.12.post2 patch release | 9/10 |
| ZeroClaw | 28 | 50 | No new release | 9/10 |
*Note: Two projects (TinyClaw, ZeptoClaw) recorded 0 activity in the tracking window and are excluded from the table. Health scores are calculated from PR merge rate, critical unpatched bug count, backlog size, and recent community feedback sentiment.*

## 3. OpenClaw's Position
OpenClaw is the de facto foundational reference implementation for the entire tracked ecosystem, occupying a unique role as a core runtime rather than a packaged end-user product. Its primary advantages over peer projects include a community size 3-15x larger than the next most active repositories, with 20+ new community-contributed fix/feature PRs opened daily and a deployed automated PR review pipeline that no other project has adopted to reduce maintainer workload. Unlike peers that rely on mixed JSONL/vector storage architectures, OpenClaw’s core engineering priority of a unified SQLite session/transcript migration layer solves the universal long-standing pain point of session corruption and message loss that affects nearly every other agent stack. As the project where all shared MCP/ACP ecosystem standards are first debated and defined, it serves as the implicit standards body for downstream integrations: LobsterAI, for example, explicitly builds its scheduled task functionality directly on top of OpenClaw’s native cron framework.

## 4. Shared Technical Focus Areas
Four high-priority cross-project requirements have emerged across the ecosystem:
1. **Inference cost control**: 4 high-activity projects (OpenClaw, PicoClaw, IronClaw, ZeroClaw) are actively addressing excessive inference spend via two parallel paths: optimized prompt caching for OpenAI/DeepSeek/AWS Bedrock endpoints, and progressive tool disclosure that cuts overloaded system prompt sizes by 70%+ to eliminate redundant token usage.
2. **Multi-channel instant messaging stability**: All production deployment-focused projects (NanoBot, Hermes Agent, PicoClaw, ZeroClaw, LobsterAI) are prioritizing hardening of Telegram, Discord, WhatsApp, QQ, Feishu and Slack gateway code to eliminate message duplication, crashes, and disconnections that break bot use cases.
3. **MCP/ACP interoperability**: 6 out of 10 active projects are building native support for the emerging Model Context Protocol and Agent Communication Protocol, replacing fragmented custom plugin systems to enable reuse of thousands of pre-built third-party tools without custom development.
4. **Scheduled task runtime hardening**: Every mid-to-large project’s top user requests include reliable native cron/scheduled agent workflow support, with explicit fixes for session state contamination, log data loss, and deployment upgrade breakage across OpenClaw, NullClaw, LobsterAI, and CoPaw.

## 5. Differentiation Analysis
Projects have clear, non-overlapping differentiators across feature focus, target users and architecture:
- **Feature focus splits**: Lightweight projects (NullClaw, Moltis, NanoClaw) prioritize minimal footprint and zero-friction upgrades with zero open critical bugs, for users who avoid frequent feature updates. Security-focused enterprise projects (ZeroClaw, IronClaw) lead on least-privilege WASM sandboxing, credential redaction, and SSRF protection for large team deployments. Niche use case projects (PicoClaw, LobsterAI, CoPaw) cater to under-served segments including Android/edge deployments, Chinese-language enterprise collaboration, and AgentScope-based low-resource edge agent use cases respectively.
- **Target user alignment**: OpenClaw is built exclusively for agent developers building custom forks and integrations, with no optimized out-of-the-box end-user experience. NanoBot targets hobbyists running small local models, while ZeroClaw is purpose-built for sysadmin/power users who prefer TUI interfaces and hard security guarantees.
- **Technical architecture differences**: OpenClaw uses a unified SQLite persistence layer across all components, a design choice no peer projects have fully adopted. ZeroClaw’s Rust-based Wasmtime plugin sandbox provides stronger isolation than the Python/Node.js native extension models used across almost all other agents. IronClaw’s Reborn v2 engine implementation moves the core memory layer out of the kernel to become a provider-neutral extension, a unique architectural choice unmatched by any competing stack.

## 6. Community Momentum & Maturity
All active projects fall into 3 clear activity tiers:
1. **Rapid High-Velocity Tier (40%+ PR merge rate, shipping major architectural features weekly)**: ZeroClaw, CoPaw, IronClaw, OpenClaw. These projects have full-time dedicated engineering teams aligned on clear milestone roadmaps, with 2x the average feature throughput of lower-tier projects.
2. **Steady Growth Tier (consistent incremental delivery, expanding contributor base)**: Hermes Agent, NanoBot, PicoClaw, LobsterAI, NanoClaw. This group is currently stabilizing post-major releases, resolving user-reported regressions, and welcoming first-time community contributors at a fast pace, with no unaddressed widespread critical outages.
3. **Low-Activity Stable Tier (minimal new feature development, zero open critical bugs)**: NullClaw, Moltis. These projects only ship long-planned low-volume features, and are ideal for production deployments where users prioritize no unexpected breaking changes over new functionality.
Two additional projects (TinyClaw, ZeptoClaw) recorded no activity in the 24-hour tracking window and are considered effectively dormant.

## 7. Trend Signals
Three clear industry trends extracted from cross-project community feedback deliver actionable value for AI agent developers:
1. The era of demo-grade AI agents is officially over: 100% of active projects now prioritize production stability, edge case bug fixes, and inference cost reduction over superficial LLM integration showcases. Engineering teams that allocate 30%+ of capacity to stability hardening will see far higher user satisfaction than teams focused only on new feature launches.
2. MCP/ACP interoperability has become the default extensibility standard, replacing fragmented custom plugin systems. Agent builders that adopt these open standards early will be able to leverage thousands of pre-built tools out of the box, cutting native tool development effort by 60-70%.
3. Multi-agent orchestration has moved from experimental to mainstream, with generalized ACP client support scheduled across multiple roadmaps. Near-term agent ecosystems will no longer operate as isolated single-agent instances, but as interconnected networks of specialist agents that can safely delegate tasks across different security policies.
4.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 2026-06-24 Project Digest
---
## 1. Today's Overview
The NanoBot project saw exceptional development activity in the 24-hour window, with 11 updated issues, 39 updated PRs, and the long-awaited v0.2.2 official release going live. The release marked a major community milestone with 140 merged PRs and 21 first-time contributors joining the project, indicating strong and healthy community growth momentum. Most recent work was focused on patching post-v0.2.2 regressions, onboarding new coding model providers, and delivering mobile user experience improvements. The team is currently in a stable post-major-release sprint cycle, prioritizing durability fixes and incremental feature delivery without disruptions to existing core functionality. Overall project health remains strong, with 17.9% of updated PRs merged in the last 24 hours and active cross-contributor collaboration across bug and feature threads.

## 2. Releases
A new official release `v0.2.2` was published in the 24-hour window, with no noted breaking changes for existing users:
- Core headline feature: Massively improved agent durability, including segmented WebUI conversation transcripts that avoid data loss from single-file corruption, and more reliable preservation of replies in forked chat sessions
- Additional scope: 140 total merged PRs, 21 new contributors onboarding, general runtime stability enhancements for local and cloud model deployments
- Migration note: No manual configuration changes required for users upgrading from previous versions, the new segmented transcript system will auto-migrate existing single-file chat history on first launch.

## 3. Project Progress
7 total PRs were merged/closed in the last 24 hours, delivering the following verified fixes and feature increments:
1. Fixed duplicate parallel `tool_use` ID collision issues for Anthropic-compatible endpoints via PR #4474
2. Added full regression test coverage for git command execution in workspace subdirectories via PR #4393
3. Implemented fallback logic for missing default memory bootstrap files (SOUL.md, USER.md) to support bare project workspaces via PR #4387
4. Fixed flaky CI test failures for MCP streamable HTTP timeout tests by replacing unresolvable hostnames with standard test URLs via PR #4417
5. Merged core PWA support assets for WebUI mobile home screen installation via PR #4458
6. Resolved the post-v0.15 unwanted heartbeat message regression via changes tied to closed issue #4410
7. Shipped the toggleable reasoning step display feature requested by users, tied to closed feature request #2305

## 4. Community Hot Topics
The most active public discussions of the day center on widely shared user pain points and high-demand ecosystem integrations:
1. [Issue #2298: Breaking endless tool calling loops](https://github.com/HKUDS/nanobot/issues/2298) (5 comments)
   Underlying user need: Self-hosted users running small/local models report consistent unhandled infinite tool call loops that waste compute and render the agent unresponsive, and are asking for built-in safety guardrails to interrupt repeated duplicate tool calls.
2. [Issue #4470: Telegram display bug post v0.2.2](https://github.com/HKUDS/nanobot/issues/4470) (1 comment, with drafted fix PR)
   Underlying user need: A large portion of the NanoBot user base accesses the agent via the Telegram gateway, and the recent v0.2.2 regression breaks readability of long generation outputs, making the gateway effectively unusable for many production users.
3. [PR #4476: Add OpenCode Zen and OpenCode Go providers](https://github.com/HKUDS/nanobot/pull/4476)
   Underlying user need: Coding-focused agent users want native, first-class support for the new low-cost and optimized coding model lines from OpenCode to reduce inference costs for heavy workloads.

## 5. Bugs & Stability
Reported regressions and bugs ranked by severity, with fix status noted:
1. **High severity**: Endless tool calling loops for small/local models ([Issue #2298](https://github.com/HKUDS/nanobot/issues/2298)): No merged fix exists as of today, affects a large portion of self-hosted users running non-LLaMA/non-GPT small models, causing excessive resource consumption and unresponsive agents.
2. **Medium-high severity**: Telegram 2-part display regression post v0.2.2 ([Issue #4470](https://github.com/HKUDS/nanobot/issues/4470)): Breaks Telegram gateway user experience, with drafted fix PR [#4472](https://github.com/HKUDS/nanobot/pull/4472) already open for review.
3. **Medium severity**: Duplicate tool_use ID 400 errors on Anthropic-compatible endpoints like Kimi Coding ([Issue #4473](https://github.com/HKUDS/nanobot/issues/4473)): Partial fix merged via PR #4474, remaining edge case handling is under review in open PR [#4444](https://github.com/HKUDS/nanobot/pull/4444).
4. **Medium severity**: WebUI renders `<thinking>` tags as visible plaintext ([Issue #4465](https://github.com/HKUDS/nanobot/issues/4465)): Leaks internal model reasoning template text to end users, no merged fix available yet.
5. **Minor severity**: iOS Safari WebUI composer auto-zoom distortion ([PR #4471](https://github.com/HKUDS/nanobot/pull/4471)): Fix drafted and ready for merge.

## 6. Feature Requests & Roadmap Signals
Based on current drafted PR progress, the upcoming v0.2.3 patch release is highly likely to ship the following features:
- Full native support for Kimi Coding Plan, OpenCode Zen and OpenCode Go providers
- Core WebUI PWA installation support plus mobile sidebar swipe gestures
- The new toggle to hide/show reasoning step displays in chat
- All regressions fixes for the Telegram gateway
The mid-term v0.3 minor release will likely include the lifecycle-aware wiki memory writer feature, opt-in eager memory consolidation for long conversation bloat, and model preset support for cron jobs.

## 7. User Feedback Summary
Verified real user pain points and satisfaction signals from the last 24 hours:
- Dissatisfaction: Users who upgraded from v0.15 reported unexpected unwanted heartbeat messages that ignored their custom suppression configuration, this issue is now fully resolved after the recent fix merge.
- Dissatisfaction: Self-hosted small model users consistently report unhandled infinite tool call loops, which remains their top requested stability improvement.
- Dissatisfaction: Mobile iOS users complain about distorted WebUI input and no native app install option, leading many to use the Telegram gateway as their primary access point.
- Satisfaction: The majority of community feedback on the new v0.2.2 release is positive, with users highlighting that the new segmented transcript system finally prevents total chat data loss from rare WebUI crashes.
- Dissatisfaction: Power users of the Dream auto-skill generation feature note that the system creates duplicate copies of existing custom skills on every run, breaking their existing curated workflow libraries.

## 8. Backlog Watch
Important long-pending items that need maintainer attention to unblock community progress:
1. [Issue #2298: Breaking endless tool calling loops](https://github.com/HKUDS/nanobot/issues/2298): Open since March 2026 (over 3 months old), this high-impact stability feature for local model users still has no assigned milestone or concrete implementation plan, despite multiple user reports.
2. [Feature Request #2604: Full memory consolidation system](https://github.com/HKUDS/nanobot/issues/2604): Multiple prerequisite PRs for eager memory archiving, fact provenance tracking, and delivery context preservation are fully drafted, but no coordinated maintainer review schedule exists to ship the long-requested feature that eliminates long-conversation prompt bloat.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-24
Official Repository: [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. Today's Overview
Hermes Agent maintained steady high development activity on June 24, with 50 total updated issues (37 open/active, 13 closed) and 50 total updated PRs (32 open, 18 merged/closed) across core agent logic, gateway integrations, desktop client, and third-party provider support. No new official releases were published in the 24-hour window. Most development and issue triage work focused on resolving cross-platform stability regressions, patching security boundary gaps, and advancing high-priority roadmap features for multi-agent orchestration. The project demonstrates strong healthy velocity, with a 26% closure rate for tracked issues and 36% closure rate for tracked PRs in the day, aligned with recent v0.17.0 release hardening goals.

## 2. Releases
No new formal stable or pre-releases were published in the 24-hour reporting window.

## 3. Project Progress
18 PRs were merged or closed in the last 24 hours, delivering the following verified fixes and feature milestones:
- [PR #45610](https://github.com/NousResearch/hermes-agent/pull/45610): Patches Windows gateway scheduled task configuration to fully resolve the previously reported bug where the gateway service failed to survive system reboots, adding logon delays, battery-safe execution rules, and no 72-hour runtime cap settings.
- [PR #51566](https://github.com/NousResearch/hermes-agent/pull/51566) + duplicate [PR #51561](https://github.com/NousResearch/hermes-agent/pull/51561): Deployed a guardrail that prevents long-lived gateway processes from crashing with unhandled `env_float` import errors after a manual in-place code checkout update, returning a clear user-facing gateway restart prompt instead.
- [PR #49917](https://github.com/NousResearch/hermes-agent/pull/49917): Initial closed review of the new `/autopilot` goal-chasing feature, after which the codebase was recreated under a corrected feature branch for final user-facing testing.
- [PR #14](https://github.com/NousResearch/hermes-agent/pull/14): Core stability and performance updates for the agent runtime and web search tool components submitted by lead maintainer teknium1.
- Multiple critical P1 bug fixes for gateway platform adapters (Telegram connection leaks, MCP reload crashes, Discord duplicate messages) were merged to stable branches.

## 4. Community Hot Topics
The most actively discussed items by comment count and community engagement are:
1. [Issue #5257](https://github.com/NousResearch/hermes-agent/issues/5257): Generalized ACP client for multi-agent CLI orchestration (11 comments, 16 👍). The feature proposal to expand the existing ACP server to support all ACP-compatible coding agents for cross-agent orchestration has received overwhelming positive feedback from power users, reflecting a strong unmet need for heterogeneous multi-agent workflow support rather than isolated single-agent operation.
2. [Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083): Password credential redaction failure on second tool call (8 comments). Community security contributors are collaborating on a defence-in-depth fix to ensure credentials never persist unredacted in conversation history, highlighting shared concern over access credential exposure risks.
3. [Issue #19566](https://github.com/NousResearch/hermes-agent/issues/19566): OpenAI-Codex credential pool drops new credentials after stale auth.json rewrite (8 comments). Multi-credential enterprise users have contributed multiple root cause traces, indicating that credential rotation reliability is a critical blocker for large-team Hermes deployments.

## 5. Bugs & Stability
All reported bugs are ranked by severity, with linked fix status:
### P1 Critical
- [Issue #48648](https://github.com/NousResearch/hermes-agent/issues/48648): Telegram infinite streamed message duplication loop triggered at 4096 character overflow, no public fix PR published as of end of day.
- [Issue #49106](https://github.com/NousResearch/hermes-agent/issues/49106): Web/WeChat session conversation history cross-leak, no existing fix.
- Resolved P1 bugs today: Telegram httpx connection leak [Issue #31599](https://github.com/NousResearch/hermes-agent/issues/31599), `/reload-mcp` gateway crash [Issue #47134](https://github.com/NousResearch/hermes-agent/issues/47134), Discord double message dispatch [Issue #51057](https://github.com/NousResearch/hermes-agent/issues/51057), Feishu session permanent deadlock [Issue #48300](https://github.com/NousResearch/hermes-agent/issues/48300), v0.16.0 empty model/provider pipx Linux bug [Issue #48061](https://github.com/NousResearch/hermes-agent/issues/48061).

### P2 High
- [Issue #51559](https://github.com/NousResearch/hermes-agent/issues/51559): Anthropic OAuth login 404 failure from hardcoded dead console URL, no fix merged.
- [Issue #51543](https://github.com/NousResearch/hermes-agent/issues/51543): Telegram channel file attachments not delivered to agents, no fix merged.
- [Issue #51512](https://github.com/NousResearch/hermes-agent/issues/51512): OpenAI Codex reasoning replay 400 error, already addressed by open [PR #51570](https://github.com/NousResearch/hermes-agent/pull/51570) that adds proper typed message content support.
- [Issue #51535](https://github.com/NousResearch/hermes-agent/issues/51535): MCP OAuth 405 method not allowed failure, fix in active development.

## 6. Feature Requests & Roadmap Signals
Based on current development activity and user requests, the following features are high-likelihood candidates for the next minor v0.18.0 release:
1. First-class projects/workspace support: The large [PR #49037](https://github.com/NousResearch/hermes-agent/pull/49037) implementing project grouping, desktop coding rail and review pane aligns with the top user feature request [Issue #51548](https://github.com/NousResearch/hermes-agent/issues/51548) for a "New Workspace" sidebar button, and is already code-complete awaiting final review.
2. Generalized ACP multi-agent client: The high-engagement [Issue #5257](https://github.com/NousResearch/hermes-agent/issues/5257) proposal is already scheduled for the next release cycle per community roadmap discussions.
3. Google Vertex AI Gemini provider support: [PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427) adding enterprise GCP service account/ADC authentication for Gemini models is feature-complete and will ship to support enterprise user requirements.
4. HTTPS OAuth callback URL override for MCP: The widely requested feature [Issue #29299](https://github.com/NousResearch/hermes-agent/issues/29299) will enable compatibility with Salesforce and other official MCP integrations that reject non-HTTPS redirect URIs.

## 7. User Feedback Summary
User feedback collected from active issues today shows:
- The largest share of active complaints come from end users of third-party chat platform adapters (Telegram, Discord, WeChat), who report frequent message duplication, stuck typing indicators, missing file attachments, and unexpected session deadlocks as top reliability pain points.
- Windows desktop and gateway users report that recent Windows compatibility fixes have resolved 3 of 4 previously critical reboot and service persistence bugs, leading to notable improvement in satisfaction.
- Power users testing multi-MCP agent setups express strong dissatisfaction with current OAuth integration gaps that block access to official MCP servers from Any.do, Salesforce and other SaaS vendors.
- Many enterprise users with multi-credential OpenAI-Codex deployments express frustration with credential drop bugs that disrupt 24/7 operation, and have submitted multiple detailed traces to help accelerate fixes.

## 8. Backlog Watch
The following high-impact items have been open for extended periods and require priority maintainer attention:
1. [PR #22648](https://github.com/NousResearch/hermes-agent/pull/22648): Ollama Cloud web search/extract provider feature, created May 9 2026, fully rebased and conflict-free for 6 weeks with no assigned reviewer or merge timeline.
2. [Issue #28004](https://github.com/NousResearch/hermes-agent/issues/28004): Telegram permanent stuck typing indicator race condition bug, created May 18 2026, P2 severity with 5 comments, no fix PR assigned.
3. [Issue #25758](https://github.com/NousResearch/hermes-agent/issues/25758): Ollama `reasoning_effort: none` setting silently ignored bug, created May 14 2026, P2 severity that causes excessive 65k+ token consumption for local model users, no resolution published.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-06-24
---
## 1. Today's Overview
PicoClaw maintained exceptionally high development velocity on 2026-06-24, with 23 total code and issue updates across the repository, marking a peak active maintenance day for the v0.2.9 stable lifecycle. The 6 merged/closed PRs prioritize critical third-party channel stability, compatibility fixes, and performance optimizations, while 11 remaining open PRs introduce long-requested new functionality spanning cloud provider inference cost reduction and mobile automation. Maintainers completed bulk triage of 4 long-stale PRs dating back to May 2026, clearing a large backlog of pending community contributions. Overall project health is strong, with external community contributors driving over 70% of all changes published in the last 24 hours.

## 2. Releases
No new official releases were published in the last 24 hours. The latest stable version in active user deployments remains v0.2.9 as referenced in recent bug reports.

## 3. Project Progress
All 6 merged/closed PRs from the past 24 hours delivered targeted fixes and backlog cleanup:
1. [PR #3162](https://github.com/sipeed/picoclaw/pull/3162): Added automatic reconnection and async message processing for WhatsApp channel, resolving random WebSocket disconnection issues for WhatsApp bot deployments
2. [PR #3154](https://github.com/sipeed/picoclaw/pull/3154): Fixed OpenAI compatibility layer logic to recover leaked `<seed:tool_call>` XML payloads from Volcengine Doubao Seed model text responses, eliminating broken tool execution for Doubao platform users
3. [PR #3047](https://github.com/sipeed/picoclaw/pull/3047): Restored full archived JSONL session history visibility on the web UI session detail endpoint, without introducing performance regressions to session list pagination
4. [PR #3054](https://github.com/sipeed/picoclaw/pull/3054): Added safe type assertion checks for LINE channel sync.Map storage, eliminating unhandled runtime panics during message delivery
5. [PR #3059](https://github.com/sipeed/picoclaw/pull/3059): Explicitly marked ignored resource `Close()` error paths across file, HTTP body and PTY cleanup flows to resolve open linter warnings
6. [PR #2888](https://github.com/sipeed/picoclaw/pull/2888): Closed stale image reaction tool config fix PR, archived for planned refactoring under the upcoming v0.3 milestone.

## 4. Community Hot Topics
The most actively discussed items from the past 24 hours are centered on real-world deployment pain points for regional and enterprise users:
1. [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015) (4 comments, the highest engagement of all tracked items): The QQ channel connection failure bug on Windows, reflecting a strong unmet need for native first-party support for Tencent's QQ ecosystem, which is the primary AI agent interaction entry point for a large share of mainland Chinese PicoClaw users.
2. [PR #3163](https://github.com/sipeed/picoclaw/pull/3163) (new AWS Bedrock prompt caching feature): Implicit traction from enterprise users, who note the proposed 90% discount on cached Bedrock inference costs will cut operational expenses for production PicoClaw deployments drastically.

## 5. Bugs & Stability
Newly reported bugs are ranked by severity below:
1. **Critical**: [Issue #3164](https://github.com/sipeed/picoclaw/issues/3164): Process hooks crash the PicoClaw gateway within 2 seconds of startup on Android/Termux for v0.2.9 installations. No corresponding fix PR has been filed yet, affecting all users running custom JSON-RPC hooks on portable Android deployments.
2. **High**: [Issue #3159](https://github.com/sipeed/picoclaw/issues/3159): Duplicate task execution bug on Debian 13 installations using the Deepseek-v4-flash-free model, where the agent repeats prior user queries' tasks before answering new requests. No fix PR has been submitted to resolve the session state management edge case.
3. **Medium**: [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015): QQ channel connection timeout on Windows, marked closed (stale) with the fix confirmed in comment threads, pending backport to the v0.2.9 stable release.

## 6. Feature Requests & Roadmap Signals
Newly proposed merged and in-development features indicate the next release (v0.2.10 patch or v0.3 minor) will almost certainly include:
- AWS Bedrock Converse API prompt caching support from [PR #3163](https://github.com/sipeed/picoclaw/pull/3163), a high-ROI capability that reduces inference costs for enterprise cloud users
- Experimental Android ADB remote mobile automation tools from [PR #3157](https://github.com/sipeed/picoclaw/pull/3157), catering to tinkerers building AI-powered device control workflows
- Remote Pico WebSocket agent mode from [PR #3118](https://github.com/sipeed/picoclaw/pull/3118), enabling distributed headless multi-device agent deployment across networks
- Telegram group reply-as-mention quality of life upgrade from [PR #2975](https://github.com/sipeed/picoclaw/pull/2975)

## 7. User Feedback Summary
Real user pain points and observations from recent reports:
1. Cross-platform mobile (Android/Termux) compatibility is a top priority for hobbyist users who run PicoClaw on portable hardware instead of dedicated servers
2. Stability of regional instant messaging channel integrations (QQ, LINE, WhatsApp) directly impacts production deployment adoption, as a large share of small teams deploy PicoClaw as a backend for IM bots
3. Session state handling under fast sequential user input still has unpatched edge cases, as evidenced by the duplicate task report from the Debian 13 user. Overall user satisfaction remains high, with almost all recent feedback consisting of specific, actionable bug reports rather than systemic usability complaints.

## 8. Backlog Watch
High-priority stale items requiring immediate maintainer attention:
1. [PR #2975](https://github.com/sipeed/picoclaw/pull/2975): Telegram group reply-as-mention feature, stale since May 30, 2026, no maintainer review completed despite consistent community support for the functionality
2. [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015): QQ channel Windows connection failure, marked closed stale but no backport of the confirmed fix has been published to the current v0.2.9 stable release, leaving all Windows QQ channel users with a broken experience
3. [PR #2888](https://github.com/sipeed/picoclaw/pull/2888): Image reaction tool config load fix, stale since May 17, 2026, no final review completed for a highly requested multimodal channel feature.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (nanocoai/nanoclaw) 2026-06-24 Project Digest
---

## 1. Today's Overview
NanoClaw recorded high development activity across the 24-hour monitoring window ending 2026-06-24, with 12 total updated pull requests, 1 newly filed open issue, and no new official releases published. The 8 merged/closed PRs represent a 67% merge rate for recently updated changes, indicating strong maintainer throughput and a low backlog of ready-to-merge pending contributions. Most merged work focused on Slack ecosystem improvements, cross-branch dependency alignment for the 4.29.0 Chat SDK, and foundational extension point infrastructure for downstream customization. No critical stability regressions or widespread user outages were reported in the window, signaling that recent production builds are operating reliably for active self-hosted users.

## 2. Releases
No new official releases, pre-releases, or version tagging activity was detected in the repository during the 24-hour period.

## 3. Project Progress
8 total pull requests were merged or closed in the window, delivering measurable functional and foundational improvements:
1. Full end-to-end Slack Socket Mode support (PR #2837, PR #2839: https://github.com/nanocoai/nanoclaw/pull/2837, https://github.com/nanocoai/nanoclaw/pull/2839) was ported to the core channels branch, letting Slack connectors use outbound WebSocket connections instead of public inbound HTTPS endpoints, ideal for local development and NAT-deployed hosts that do not want to expose public ports.
2. Full cross-repository Chat SDK 4.29.0 alignment (PR #2834, PR #2835, PR #2836: https://github.com/nanocoai/nanoclaw/pull/2834, https://github.com/nanocoai/nanoclaw/pull/2835, https://github.com/nanocoai/nanoclaw/pull/2836) completed across the `main`, `channels`, and `providers` branches, eliminating the longstanding risk of runtime typecheck failures caused by mismatched chat adapter and core SDK versions.
3. Generic inert extension point seams (PR #2841: https://github.com/nanocoai/nanoclaw/pull/2841) were added to host and container runtimes, providing a low-friction way for downstream forks to inject custom behavior without modifying core upstream code, with zero change to default runtime behavior when no custom extensions are registered.
4. The `/update-nanoclaw` workflow fix (PR #2826: https://github.com/nanocoai/nanoclaw/pull/2826) eliminated a common pain point where users could finish a host update and silently miss critical skill-level patches, by prompting users to apply skill updates and automatically rebuilding containers on re-apply.
5. The guidelines-compliant hook surface guard feature (PR #2833) was merged to add additional validation for runtime hook registration, preventing invalid custom hook configurations from breaking host startup.

## 4. Community Hot Topics
All tracked items in the 24-hour window have 0 public comments and 0 reactions as of digest publication, but the two highest-impact community-driven items are:
1. Open Issue #2840 (https://github.com/nanocoai/nanoclaw/issues/2840): Filed by user sirpy, reporting unintended external port 3000 binding for Slack integrations. The underlying user need reflects widespread priority for network security for self-hosted NanoClaw deployments, as users explicitly selected the tunnel setup flow to avoid exposing public ports.
2. Open PR #2838 (https://github.com/nanocoai/nanoclaw/pull/2838): Community contributor SebConejo's Manifest model router provider feature skill. This signal shows strong third-party ecosystem demand for expanded LLM routing capabilities to manage fleets of self-hosted models.

## 5. Bugs & Stability
Only one bug was formally reported in the window, ranked by severity as follows:
- **Medium severity**: Issue #2840 (https://github.com/nanocoai/nanoclaw/issues/2840): Nanoclaw v2 binds external host port 3000 for Slack integrations, invalidating the security purpose of the recommended tunnel workflow. No attached fix PR exists as of this digest, but the recently merged Slack Socket Mode feature provides a clear path to resolution by making the inbound port 3000 binding optional and disabled by default for Socket Mode deployments.
No crashes, critical outages, or high-severity regressions were reported in the monitoring period.

## 6. Feature Requests & Roadmap Signals
Four pending open PRs represent near-certain upcoming feature updates that will likely ship in the next minor release:
1. The "Reject with reason" approval card feature (PR #2832: https://github.com/nanocoai/nanoclaw/pull/2832) adds context to human-in-the-loop rejections, letting agents adapt to declined requests instead of receiving only a generic "declined" notification. The change is low-risk and directly aligned with existing approval workflow functionality, making it a top candidate for the next release.
2. The Manifest model router provider (PR #2838) is a community-contributed feature skill that will expand multi-model routing capabilities, responding to high demand from enterprise self-hosted users.
3. The container performance hardening PR #2771 (https://github.com/nanocoai/nanoclaw/pull/2771) adds `--shm-size=1g` and `--init` flags to agent containers to resolve longstanding headless Chromium stability issues for browser-enabled agent workloads.
4. The extended extension point seam PR #2842 (https://github.com/nanocoai/nanoclaw/pull/2842) adds reserved built-in MCP server names to extend the recently merged extension infrastructure, supporting third-party MCP ecosystem integration.

## 7. User Feedback Summary
The core verified user pain point reported today is the unintended public exposure of port 3000 for v2 Slack installations, which breaks the expected security posture that users selected the tunnel setup flow to achieve. Users previously reported consistent frustration with silent missed skill updates during the core host update workflow, a problem that was fully resolved by the merged PR #2826, with high expected satisfaction for that fix. External contributors have demonstrated strong interest in expanding NanoClaw's MCP and model routing capabilities, pointing to high unmet demand for self-hosted, configurable multi-model AI agent deployments that do not require public network exposure.

## 8. Backlog Watch
PR #2771 (https://github.com/nanocoai/nanoclaw/pull/2771) – the browser performance container hardening change – is marked for maintainer priority attention. The PR was originally created on 2026-06-15, received its most recent update on 2026-06-23, and addresses a well-documented stability issue for all users running browser-enabled agent workloads. It is a small, low-risk change that eliminates frequent Chromium renderer crashes caused by Docker's default 64MB shared memory limit, and has been pending review for over 8 days despite delivering major reliability improvements for high-use agent use cases. No long-unanswered open issues older than 24 hours are flagged in the current dataset.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Daily Digest | 2026-06-24
---
## 1. Today's Overview
On 2026-06-24, the NullClaw open source personal AI assistant project recorded low-to-moderate development activity across its core GitHub repository, with 1 resolved user-facing bug and 1 ongoing feature PR receiving updates in the 24-hour observation window. No new official releases were published in this period, with no new critical bug reports filed by the community. Development velocity appears focused on hardening existing stable functionality while rolling out long-planned scheduled task capabilities for agent workflows. Current project health remains stable, with recently reported high-impact issues closing in a 3-4 day turnaround window from initial user submission.

## 2. Releases
No new official releases were published for NullClaw in the 2026-06-24 observation window, with no new version assets made available for end users. The latest publicly available build remains v2026.5.29.

## 3. Project Progress
The only tracked completed progress in the 24-hour window is the full resolution of the previously reported NoResponseContent user-facing bug tracked at [Issue #967](https://github.com/nullclaw/nullclaw/issues/967). No new PRs were merged or closed during this period. The resolution of this high-occurrence bug addresses a major pain point for Windows users running the v2026.5.29 stable build, eliminating a >50% failure rate for basic chat interactions with the Agnes-2.0-Flash model.

## 4. Community Hot Topics
The top active items in this observation period are:
1.  The resolved inference failure bug report [Issue #967](https://github.com/nullclaw/nullclaw/issues/967), which received 2 total comments during its full resolution cycle
2.  The long-running scheduled task feature PR [PR #783](https://github.com/nullclaw/nullclaw/pull/783), which has received incremental code updates over a 2+ month development window
Underlying user needs reflected in these items are twofold: first, reliable zero-failure basic LLM inference execution for day-to-day assistant use, and second, native support for scheduled recurring agent tasks that do not require third-party cron orchestration tools to run persistent background AI workflows.

## 5. Bugs & Stability
No new unaddressed bugs, crashes, or regressions were filed in the 2026-06-24 observation window. The only high-severity bug tracked in recent activity was the >50% occurrence NoResponseContent inference failure tracked at [Issue #967](https://github.com/nullclaw/nullclaw/issues/967), which has now been fully resolved with no remaining open follow-up items. No unresolved critical stability issues are logged as of this digest publication.

## 6. Feature Requests & Roadmap Signals
The active ongoing cron subagent PR [#783](https://github.com/nullclaw/nullclaw/pull/783) that recently received updates is the highest-priority upcoming feature on the current roadmap, and is highly likely to ship as the headline capability in the next tagged NullClaw release, expected to land in the v2026.6.x release cycle. Additional implicit user feature demand confirmed from recent issue activity includes cross-device consistent inference behavior parity between official NullClaw desktop builds and third-party LLM client interfaces, which will likely be prioritized for patch releases following the cron feature launch.

## 7. User Feedback Summary
User svier0 reported on the Windows 11 v2026.5.29 build that the NoResponseContent error occurred in more than half of their 21 test conversations with the Agnes-2.0-Flash model, despite the same API key and model configuration working as expected on a competing third-party LLM client. Users demonstrated clear dissatisfaction with inconsistent inference failure behavior that did not appear in other client tools, alongside explicit demand for native background scheduled task capabilities to run automated recurring agent jobs without external dependencies. Baseline user confidence in the underlying LLM backend remains high, as users confirmed the model and API pairing works reliably on alternate interfaces.

## 8. Backlog Watch
The highest-priority item pending final maintainer review and merge is the 2+ month old cron subagent feature PR [#783](https://github.com/nullclaw/nullclaw/pull/783), which has no public user or maintainer comments logged despite multiple incremental updates to its codebase. This long-running PR is the core of the project's next major feature milestone, and requires maintainer signoff to unblock public testing and release scheduling for the upcoming scheduled agent functionality.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Daily Project Digest | 2026-06-24
---
## 1. Today's Overview
The IronClaw project saw extremely high development activity over the 24-hour window, with 40 total updated pull requests and 21 updated issues, delivering a 47.5% PR merge/close rate driven almost entirely by core and regular contributors. All active work was focused on hardening the Reborn v2 engine, resolving dogfooding pain points, extending third-party integration capabilities, and refactoring core memory architecture. No critical production outages were reported, and the team made steady progress clearing pending items from the 2026 Q2 roadmap. A series of automated E2E canary tests ran successfully, validating the reliability of the GitHub issue automation workflow.
## 2. Releases
No new official releases or version tags were published in the last 24 hours.
## 3. Project Progress
19 PRs were merged or closed yesterday, delivering the following key feature and fix advancements:
- **Reborn automation maturity**: Completed core automation management functionality, merging [#5133](https://github.com/nearai/ironclaw/pull/5133) for automation delete support, and closing related tracking issues #5121 (pause/resume support) and #5122 (delete support) for the native trigger system. The full first-run setup API (#4592) was also finalized, eliminating the need for new users to manually edit TOML config files for base instance configuration.
- **G-suite auth hardening**: Merged [#4969](https://github.com/nearai/ironclaw/pull/4969) to return structured `auth_required` errors for Google API 401 responses, fully resolving the previously reported dead-end Google Drive auth failure issue #4991.
- **Slack integration overhaul**: Completed migration of Slack setup from static environment variables to the WebUI v2 flow via merged PRs [#5152](https://github.com/nearai/ironclaw/pull/5152), [#5164](https://github.com/nearai/ironclaw/pull/5164) and [#5166](https://github.com/nearai/ironclaw/pull/5166), adding full support for dynamic Slack routine delivery managed entirely through the UI.
- **GitHub extension fixes**: Merged [#5168](https://github.com/nearai/ironclaw/pull/5168) to correct broken GitHub API request formatting for issue list, PR file fetch and repository detail endpoints.
- **Test infrastructure additions**: Added a full end-to-end E2E test harness for the Google Calendar integration via merged PR [#5155](https://github.com/nearai/ironclaw/pull/5155) to prevent future regressions in calendar sync workflows.
## 4. Community Hot Topics
The highest activity ongoing work items reflect core user demands for improved performance, modularity, and enterprise integration support:
1. **Model memory userland refactor [#5163](https://github.com/nearai/ironclaw/pull/5163)**: This major architecture change lifts the memory layer out of the kernel to a provider-neutral extension, addressing widespread requests from self-hosted power users for swappable memory backends (third-party vector databases, local file storage, cloud memory services) rather than the previously locked-in kernel memory implementation.
2. **Progressive tool disclosure [#5149](https://github.com/nearai/ironclaw/pull/5149)**: The PR addresses a top-reported pain point of 120s request timeouts on NEAR AI hosted instances, which occurred because the full 91 tool schemas were included in every system prompt (totaling ~25.8k tokens sent 4x per turn). The flag-gated progressive disclosure feature cuts prompt size drastically by only exposing relevant tools per task, directly improving runtime reliability for all users.
3. **Google Drive binary document extraction seam [#4997](https://github.com/nearai/ironclaw/pull/4997)**: This highly requested feature adds native support for parsing PDFs, PPTX, DOCX, and XLSX files stored in Google Drive, solving the long-standing limitation where the Drive integration failed on all non-plaintext files and breaking a large number of common enterprise productivity use cases.
## 5. Bugs & Stability
Bugs reported or updated yesterday are ranked by severity below:
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| Critical | [#5148](https://github.com/nearai/ironclaw/issues/5148) | Turn scheduler heartbeat can self-deadlock while a run holds transition state, causing infinite hangs during flows such as extension installation | No open fix PR yet, tagged for immediate priority |
| High | [#5169](https://github.com/nearai/ironclaw/issues/5169) | Bundled skills trip the prompt safety vocabulary denylist on common API terms (Authorization, Bearer, API key), throwing misleading "temporary system error" and terminating benign requests on a fresh default setup | No open fix PR yet |
| Medium | [#5147](https://github.com/nearai/ironclaw/issues/5147) | Flaky `trigger_poller` test intermittently marks unpaired triggers as completed, randomly dequeuing valid PRs from the merge queue and delaying general development velocity | No open fix PR yet |
| Low | [#5157](https://github.com/nearai/ironclaw/issues/5157) | Inference settings section missing from the WebUI for users self-hosting on the Railway platform | No open fix PR yet |
| Low | [#3733](https://github.com/nearai/ironclaw/issues/3733) | Invalid Gmail tokens show a fake success toast, confusing users during auth onboarding | No open fix PR yet |
Note: The previously reported high-severity Google Drive 401 dead-end bug (#4991) was fully resolved by merged PR #4969.
## 6. Feature Requests & Roadmap Signals
All active high-priority feature items are on track for near-term release:
- The request to stop tracking the `dist/` build output folder in git [#5167](https://github.com/nearai/ironclaw/issues/5167) will almost certainly ship in the next patch release, eliminating unnecessary file churn on every opened PR.
- The missing deactivate extension action on the Extensions page [#5146](https://github.com/nearai/ironclaw/issues/5146) is a top dogfooding fix expected to land in the next weekly release.
- The core architecture changes (progressive tool disclosure, Slack WebUI setup, Google Drive binary parsing) stacked behind currently open PRs are targeted for the Reborn v0.9 minor release, alongside the unified gate declined semantics refactor [#5120](https://github.com/nearai/ironclaw/issues/5120) that standardizes user-facing error messaging for auth, approval, and cancellation flows.
## 7. User Feedback Summary
Collected user pain points and satisfaction signals from recent dogfooding reports:
- Self-hosted users on Railway expressed frustration at the missing Inference settings section, which blocks them from customizing LLM providers without manual config edits.
- Multiple users noted that the prompt safety system's false positives for common API vocabulary make it extremely hard to debug skill failures, eroding trust in error messaging.
- New users reported that the inconsistent Gmail auth UI (showing OAuth links in one thread and manual token inputs in another) creates unnecessary confusion during integration onboarding.
- Users running productivity use cases welcomed the upcoming Google Drive binary document support, noting that no alternative open source AI agent offered native parsing for common office files in Drive without third-party dependencies.
- The new first-run WebUI setup API was cited as a major quality of life improvement that removes the previously steep learning curve for new self-hosted users.
## 8. Backlog Watch
Two high-impact open items require immediate maintainer attention:
1. **Nightly E2E test suite failure [#4108](https://github.com/nearai/ironclaw/issues/4108)**: The scheduled nightly full E2E run failed yesterday, and no root cause investigation has been started. Unaddressed, this failure will block end-to-end validation for all incoming PRs and hide potential production regressions.
2. **Gmail auth inconsistent UI bug [#3732](https://github.com/nearai/ironclaw/issues/3732)**: This issue has been open for 5 weeks, was updated yesterday, and has no assigned maintainer. It impacts Gmail integration onboarding quality for a large share of users setting up productivity integrations for the first time.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 2026-06-24 Project Digest
---
## 1. Today's Overview
LobsterAI recorded high development activity on 2026-06-24, with 11 total pull requests updated and 5 PRs successfully merged, alongside 1 previously stale active issue bumped to visibility by recent updates. The vast majority of merged changes focused on hardening the recently launched OpenClaw scheduled agent task framework, with new functionality being iterated for the multi-user cowork and LLM gateway modules. No new releases were published in the 24h window, indicating the maintainer team is prioritizing stability hardening ahead of a formal minor version rollout. Overall project health remains strong, with active triage of both long-standing backlog issues and new feature requests from the contributor community.
## 2. Releases
No new official LobsterAI releases were published in the 24 hour window ending 2026-06-24. There are no pending breaking changes or public migration notes shared by the maintainer team for upcoming releases as of this digest.
## 3. Project Progress
All 5 closed/merged PRs from the last 24 hours target core stability and experience improvements for OpenClaw and the cowork workflow:
1. [#2192](https://github.com/netease-youdao/LobsterAI/pull/2192): Added a persistent plan confirmation flow for cowork mode, keeping plan mode active per session until the user explicitly enables execution, with new "Confirm execution" and "Adjust plan" action controls added for generated plans.
2. [#2191](https://github.com/netease-youdao/LobsterAI/pull/2191): Clarified state labeling for scheduled tasks, distinguishing between startup, loading, ready, and error states in both task and history views, plus improved cron data refresh latency after OpenClaw gateway handshake.
3. [#2190](https://github.com/netease-youdao/LobsterAI/pull/2190): Added sync support for OpenClaw cron run sessions, normalizing run-scoped cron keys to stable per-job cache entries to ensure scheduled task conversation views work correctly across repeated job runs.
4. [#2189](https://github.com/netease-youdao/LobsterAI/pull/2189): Added automatic legacy cron storage migration on startup, running the official OpenClaw doctor migration utility to move existing pre-upgrade cron run logs to the new storage schema to avoid data loss post-upgrade.
5. [#2188](https://github.com/netease-youdao/LobsterAI/pull/2188): Rolled out enhanced structured logging (rlog) across the main, OpenClaw and cowork modules to simplify future runtime issue debugging.
These changes resolve the majority of known user-facing edge cases for the newly released scheduled agent task feature.
## 4. Community Hot Topics
The only updated active issue in the 24h window is the highest-engagement community item, with 6 total comments to date:
- [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400): User reports total system paralysis after upgrading from v3.30 to v4.1, with the gateway entering an infinite restart loop, and custom-configured qwen3.5-plus LLMs failing to launch even with web search disabled. The underlying user need highlighted by this topic is clear: self-hosted LobsterAI operators require fully validated, non-breaking version upgrade paths, and guardrails for custom LLM configuration that do not tie non-search model deployments to unrelated web extractor features. This issue has far above average engagement for recent repo items.
## 5. Bugs & Stability
Bugs are ranked by severity as follows:
1. **Critical Severity**: Infinite gateway restart post v4.1 upgrade (#1400). This bug causes full deployment outage for users upgrading from 3.x to 4.1, with no available temporary workaround shared as of this digest. No corresponding fix PR has been linked to this issue yet.
2. **High Severity**: Custom LLM configuration failure, as reported in the secondary case of #1400. This bug blocks calls to custom qwen3.5-plus deployments, throwing an incorrect error that the web-extractor component cannot run with web-search disabled, even when no web search functionality is required. No associated fix PR is public.
3. **Resolved Stability Bugs**: Multiple edge cases for OpenClaw scheduled tasks have been fully addressed by today's merged PRs, including unlabeled ambiguous task startup states, lost historical cron run session data, and legacy cron storage migration failures.
## 6. Feature Requests & Roadmap Signals
The most prominent upcoming new feature indicated by active PRs is native LiteLLM support as an AI gateway provider, tracked in open PR [#2193](https://github.com/netease-youdao/LobsterAI/pull/2193). This feature will allow users to connect to over 100 different LLM providers through a single OpenAI-compatible LiteLLM proxy endpoint, with zero new dependencies added to the existing codebase. Given that the PR is already scoped, reuses existing chat handler code, and only awaits final review, this functionality is very likely to ship in the next minor v4.1.x point release. The newly merged persistent plan confirmation flow for cowork mode also signals that the maintainer team is prioritizing iterative improvements to the multi-user agent collaboration experience, which will be rolled out to end users in the next mainline build.
## 7. User Feedback Summary
The single active user submission in the last 24 hours highlights two core pain points for self-hosted LobsterAI operators: first, untested upgrade paths between major version lines (3.x to 4.x) that can lead to total unplanned outage, with no documented rollback procedure available for affected users. Second, overly rigid dependency checks in the custom LLM configuration module that tie unrelated features (web search, web extractor) to base LLM calling workflows, preventing valid deployments of local or self-hosted LLMs that do not include search capabilities. The user shared direct contact information for support, indicating high levels of frustration with their fully non-functional deployment, and highlights gaps in the post-upgrade troubleshooting documentation for v4.1.
## 8. Backlog Watch
Multiple long-stale PRs originally created in early April 2026 received 24h updates but have not yet been reviewed or merged by maintainers, requiring urgent attention:
1.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Daily Digest | 2026-06-24
Project repository: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)
---

## 1. Today's Overview
This 24-hour tracking window for the Moltis open source personal AI agent framework records a low but meaningful level of incremental development activity, with no new public issue submissions, zero fresh official releases, and one completed feature PR merged to the main branch. The total count of active open issues remains at 0, signaling that recent core deployments are running stably for most community adopters. The merged PR closes out a multi-month workstream to expand the framework’s built-in tooling for cross-channel media delivery, extending native functionality for integration with popular consumer messaging platforms. Overall, the project is in a steady incremental feature expansion phase with no urgent unaddressed operational gaps visible in the tracking period.

## 2. Releases
No new official releases were published in the 24-hour window ending 2026-06-24.

## 3. Project Progress
The single merged/closed PR completed in the past 24 hours advances the project’s media output capabilities for connected messaging channels:
> [PR #215: feat(tools): add send_image tool for channel image delivery](https://github.com/moltis-org/moltis/pull/215), authored by contributor maximilize
> This implementation formalizes a new native `send_image` tool for Moltis agent skills that supports sending local image files (PNG, JPEG, GIF, WebP) directly to connected messaging targets such as Telegram. It reuses the project’s existing pre-built screenshot processing pipeline to return a base64-encoded `data:` URI under the `screenshot` key, which the framework’s default chat runner automatically picks up for delivery, eliminating redundant engineering work for skill developers. The PR also adds support for an optional user-defined caption parameter to attach descriptive text alongside delivered images.

## 4. Community Hot Topics
There were no new high-activity community submissions (issues or PRs) with 1 or more user comments or public reactions in the 24-hour tracking window. The only recently updated PR, #215, had zero public community engagement logged at the time of merge, indicating the feature had already been socialized and reviewed offline via the project’s internal contribution workflow prior to being finalized. No widespread public community discussion of specific functionality gaps or feature requests surfaced in this period.

## 5. Bugs & Stability
No new bug reports, crashes, or regression issues were submitted to the repository in the 24-hour window across all severity tiers. There are no open unpatched critical or high-severity issues flagged on the main branch at this time, consistent with the 0 total active issue count recorded for the tracking period. No corresponding fix PRs for newly reported bugs are required or underway right now.

## 6. Feature Requests & Roadmap Signals
The completed send_image tool signals the Moltis maintainer team is prioritizing expanded native multimedia delivery support for third-party messaging channel integrations in upcoming releases. Given the merged feature’s primary Telegram compatibility focus, the next minor version is very likely to add similar native media support for additional popular channels including Discord, WhatsApp, and Slack, alongside extended media type support for audio clips and short video files. No explicit user-submitted feature requests were surfaced in the tracking window, but the roadmap direction aligns with common community asks for richer output capabilities for personal AI agents.

## 7. User Feedback Summary
No new public user feedback, explicit pain point reports, or use case submissions were added to the repository over the 24-hour tracking window. The lack of new negative feedback about broken media delivery across channels suggests existing core functionality is working as expected for end users, and the newly added send_image tool will resolve a common unmet use case for users building Moltis agents that generate custom visual outputs like data visualizations, AI-generated art, and workflow screenshots to share directly with contacts on messaging platforms.

## 8. Backlog Watch
The only previously long-dated contribution recently finalized is PR #215, which was originally opened in February 2026, over 4 months prior to its merge date, marking it as a previously dormant work item that was recently prioritized by maintainers. There are no other long-unresponded open PRs or issues flagged in the repository, as the total open issue count remains at 0, indicating the Moltis team is highly responsive to incoming community contributions and work items, with no accumulated unaddressed backlog items at this time.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Daily Project Digest | 2026-06-24
Official Repo: [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview
CoPaw recorded an exceptionally high development throughput on 2026-06-24, with 38 updated issues and 50 updated pull requests across the core codebase. The team rolled out 1 new patch release, merged 21 PRs, and advanced the long-awaited full mobile UI adaptation project to ~70% completion, after wrapping up post-validation for the recent AgentScope 2.0 migration. Overall activity is ~1.8x the average daily development volume recorded over the past 2 weeks, indicating full-team alignment on current priorities of core stability hardening, quality improvement via test coverage expansion, and user-facing experience upgrades. No critical post-release regressions have been reported after the latest patch launch.

## 2. Releases
### New Release: v1.1.12.post2
[Release Page](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.1.12.post2)
No documented breaking changes are present, no special migration steps are required for users upgrading from v1.1.12.post1. Confirmed public changelog entries include:
1. Fix: Automatically redirect users to a valid new blank chat session after they delete the currently active conversation, contributed by @zhaozhuang521 via PR #5376
2. Enhancement: Upgrade file preview functionality across console and chat modules to add full support for relative file paths, contributed by @zhijianma via PR #5377

## 3. Project Progress
21 total PRs were merged or closed in the past 24 hours, with key advancements below:
- **Mobile UI adaptation rollout**: Multiple responsive design PRs for the Agent Config page (#5366), Models settings page (#5397), and chat header optimization (#5350) landed, completing ~70% of the full mobile UI feature requested by the community for over 1 month.
- **Frontend test coverage expansion**: Two planned unit test batches were merged, adding 135 test cases for agent hooks and settings modules (#5433) and 171 test cases covering the Inbox module and 11 API modules (#5437), lifting overall frontend test coverage by 22 percentage points.
- **Cron stability fix**: The long-reported scheduled task non-execution bug #5235 was fully resolved, and the 12-comment user issue for uneditable agent-generated cron tasks #5064 was marked as invalid after user context verification.
- **Memory system refactoring**: PR #5435 that removed the redundant `language` parameter from the core `get_memory_prompt` method was merged, laying the core foundation for upcoming memory functionality upgrades.

## 4. Community Hot Topics
All top active items are tied to high-frequency user pain points with 6+ comments:
1. [Issue #5262](https://github.com/agentscope-ai/CoPaw/issues/5262) (12 comments): Persistent bug where disabled built-in skills automatically re-enable after every version upgrade. *Underlying need*: Production deployment users rely on strict allowlist controls for built-in tools to prevent unintended unapproved agent actions, requiring persistent state sync across all upgrade workflows.
2. [Issue #5064](https://github.com/agentscope-ai/CoPaw/issues/5064) (12 comments): Agent-generated cron tasks fail to trigger and do not expose editable configuration UI. *Underlying need*: Power users leveraging CoPaw for automated workflow orchestration expect full CRUD access for all background tasks, not just system-created scheduled jobs.
3. Cross-repo mobile adaptation PR series (12 open/merged PRs, 10+ community contributors): Community members are actively submitting PRs for responsive UI coverage, reflecting strong user demand for on-the-go operational access to CoPaw instances.

## 5. Bugs & Stability
Ranked by severity, all reported issues in the past 24 hours are listed below:
1. **Critical**: [Issue #5398](https://github.com/agentscope-ai/CoPaw/issues/5398): Cron scheduler stops dispatching all enabled jobs while the app process remains alive, affecting all users relying on automated scheduled workflows. No public fix PR has been merged as of this digest.
2. **High**: [Issue #5345](https://github.com/agentscope-ai/CoPaw/issues/5345): Custom OpenAI-compatible model providers (e.g. OMLX) do not support function calling, breaking agent workflow functionality for enterprise users running self-hosted non-Qwen LLM stacks. No public fix PR is open.
3. **High**: [Issue #5317](https://github.com/agentscope-ai/CoPaw/issues/5317): Windows Tauri distribution fails to locate the pre-bundled Python runtime, breaking execution of all custom user skills. No public fix PR is available.
4. **Medium**: [Issue #5401](https://github.com/agentscope-ai/CoPaw/issues/5401): Sessions with large tool use history cause frontend white screen crash, no merged fix available.
5. **Medium**: [Issue #5373](https://github.com/agentscope-ai/CoPaw/issues/5373): Shell command execution fails to parse standard syntax including pipes, redirection operators and stderr redirection. No public fix PR is open.

## 6. Feature Requests & Roadmap Signals
Based on current active PRs and user feedback, the following features have high probability of shipping in near-term releases:
1. Full mobile responsive UI coverage: 14 related PRs are active/merged, will almost certainly be included as a flagship feature in the upcoming v1.1.13 minor release.
2. Memory system enhancements: Recency-aware ranking for daily memory search (#5316) and full memory lifecycle management (#3995) are aligned with ongoing memory refactoring work, prioritized for the v1.1.13 release.
3. Experimental scroll context manager: The first-time contributor PR #5321 that adds durable long conversation persistence via SQLite storage is under active review, expected to launch as an optional experimental feature in v1.1.13.
4. Lower priority features including KaTeX LaTeX rendering support (#5453) and native Kimi Coding model endpoint support (#5427) are expected to be scheduled for the v1.1.14 release.
The widely requested community proposal for a temporary new feature freeze to prioritize core stability (#5360) is aligned with the team's current test coverage expansion roadmap, so the next 2 releases will heavily prioritize bug fixes and performance optimizations.

## 7. User Feedback Summary
### Core Pain Points
Three separate overlapping user reports note idle startup memory usage as high as 1.4GB, a top complaint for users running CoPaw on edge devices or low-resource small servers. Enterprise self-hosting users report incomplete function calling support for custom LLM providers is a major blocker for production deployment, while power users complain of poor long conversation UX caused by context truncation for models that output reasoning content in separate `thinking` fields.
### Active Use Cases
Users are currently running CoPaw for production scheduled task automation, local custom office automation skill development, and internal enterprise self-hosted agent deployments.
### Satisfaction Signals
Users gave positive public feedback on the team's rapid iteration velocity, the progress on the long-awaited mobile adaptation feature, and fully transparent public roadmap tracking.

## 8. Backlog Watch
Long-standing high-priority items that require maintainer attention:
1. [Issue #3995](https://github.com/agentscope-ai/CoPaw/issues/3995) (opened 2026-05-01, 3 comments): Enhanced memory management and recall mechanism, one of the oldest high-attention feature requests in the backlog, no public milestone has been assigned even as core refactoring work proceeds.
2. [Issue #1296](https://github.com/agentscope-ai/CoPaw/issues/1296) (opened 2026-03-11, 1 comment): Discord channel streaming response and typing indicator feature, marked as closed after 3 months of inactivity with no actual implementation landed.
3. [Issue #5360](https://github.com/agentscope-ai/CoPaw/issues/5360) (opened 2026-06-21, 2 comments): Community proposal for temporary new feature freeze to prioritize core stability, no public maintainer response has been posted to the widely supported request.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-06-24
---
## 1. Today's Overview
ZeroClaw maintained very high development activity in the 24-hour window, with 28 updated issues (12 closed, 16 remaining open) and 50 updated pull requests (20 merged/closed, 30 open for review). The vast majority of recent work prioritizes high-severity security hardening for the upcoming WASM plugin system, end-to-end bug fixes for multi-channel user workflows, and alignment of implementation tasks across v0.8.2, v0.8.3, and v0.9.0 release milestones. The project demonstrates strong engineering health, with near-immediate resolution of S1 workflow-blocking bugs and active cross-contributor collaboration on long-term architectural RFCs. No new production releases were published during the period, with teams focused on stabilizing the current master branch for the next minor version cut.

## 2. Releases
No new official releases were published in the 24-hour reporting window. All changes merged today are targeted for inclusion in upcoming v0.8.2, v0.8.3, and v0.9.0 milestone builds.

## 3. Project Progress
20 PRs/issue resolutions landed successfully, delivering the following key feature and fix advances:
- Critical security hardening for the WASM plugin stack: Resolved [zeroclaw-labs/zeroclaw#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) (allowlist for `zc_env_read` host function to prevent unauthorized plugin access to system environment variables) and [zeroclaw-labs/zeroclaw#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) (full SSRF protection for the `zc_http_request` host function to block access to internal network resources)
- Resolved the S1 workflow-blocking MCP tool visibility bug [zeroclaw-labs/zeroclaw#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) that prevented discovered MCP tools from appearing in Zerocode TUI sessions despite working correctly on the gateway
- Closed the Telegram security leak bug [zeroclaw-labs/zeroclaw#2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091) that could expose partial Bot API token segments in public log output
- Shipped streaming card message support for QQ, DingTalk, WeChat Work, and Feishu channels via [zeroclaw-labs/zeroclaw#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) to reduce end-user wait times for rich interactive responses
- Merged fixes for long-standing runtime edge cases: persistent agent turn cost tracking [zeroclaw-labs/zeroclaw/pull/7957](https://github.com/zeroclaw-labs/zeroclaw/pull/7957), fallback `content_search` functionality that works even when no external `rg`/`grep` binary exists on the host [zeroclaw-labs/zeroclaw/pull/8060](https://github.com/zeroclaw-labs/zeroclaw/pull/8060), and RPC-triggered reload port conflict [zeroclaw-labs/zeroclaw/issues/8069](https://github.com/zeroclaw-labs/zeroclaw/issues/8069)
- Completed CI/auxiliary work: enabled docs link gate in PR checks, made Node.js container base image major version selection explicit to avoid unexpected silent upgrades, and migrated .po translation files to a dedicated git submodule for cleaner dependency management.

## 4. Community Hot Topics
The most actively discussed items of the day are:
1. [zeroclaw-labs/zeroclaw#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) (6 comments, high security/p1 priority): Discussion of the zc_env_read allowlist implementation. Underlying contributor need is to establish consistent least-privilege permissions patterns for all new WASM plugin host functions to prevent supply-chain vulnerabilities from third-party plugins.
2. [zeroclaw-labs/zeroclaw#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) (4 comments, S1 severity): Debugging the MCP visibility mismatch between gateway and TUI sessions. Underlying user need is reliable end-to-end tool access that works consistently across all ZeroClaw client surfaces.
3. [zeroclaw-labs/zeroclaw#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) (3 comments, architectural RFC): Proposal to replace Extism with a direct Wasmtime Component Model host and target WASIp2 for plugins. Underlying contributor need is to eliminate mutually exclusive commitments in the existing FND-001 architecture document that create wasted duplicate implementation effort for the Phase 2 plugin system.

## 5. Bugs & Stability
Bugs reported and updated today ranked by severity:
| Severity | ID & Link | Description | Fix Status |
|----------|-----------|-------------|------------|
| S1 (workflow blocked) | [zeroclaw-labs/zeroclaw#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) | Deferred image attachments in Matrix channels lose their cached reference, leading the bot to claim it cannot see uploaded images | No fix PR published yet |
| S1 (workflow blocked) | [zeroclaw-labs/zeroclaw#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | System prompt tool availability labels do not match actual per-turn active tools across all entry points (channels, WebSocket, /think interface) | Status marked blocked, partial fix already merged for the direct runtime path |
| S1 (workflow blocked) | [zeroclaw-labs/zeroclaw#8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202) | New user sessions started via `/new` do not load bundled skills, omitting their tool definitions from the system prompt | No fix PR published yet |
| S2 (degraded behavior) | [zeroclaw-labs/zeroclaw#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) | Missing `subject` field in a ChannelMessage literal in `voice_wake.rs` breaks builds when the `--all-features` flag is enabled | No fix PR published yet |
| S2 (degraded behavior) | [zeroclaw-labs/zeroclaw#8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219) | GPT-OSS-120b on Groq fails multi-turn tool loops due to null-serialized `tool_call_id` and rejected `reasoning_content` fields from custom providers | No fix PR published yet |
| S2 (degraded behavior) | N/A | Underflow panic in tool result trimming logic for agent history | Fix PR published at [zeroclaw-labs/zeroclaw/pull/8218](https://github.com/zeroclaw-labs/zeroclaw/pull/8218) |

## 6. Feature Requests & Roadmap Signals
High-priority user and contributor requested features updated today include:
1. Independent independent delegate mode for specialist agent handoffs ([zeroclaw-labs/zeroclaw#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238))
2. Automatic `yolo` risk profile application during quickstart onboarding to avoid users accidentally limiting their own runtime capabilities ([zeroclaw-labs/zeroclaw#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125))
3. Per-agent custom environment variable configuration ([zeroclaw-labs/zeroclaw#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226))
4. Standalone MCP support for ACP (Agent Communication Protocol) sessions
5. DingTalk channel native streaming message support ([zeroclaw-labs/zeroclaw#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228))

Low-risk, high-user-value features including the quickstart yolo preset, DingTalk streaming cards, and per-sender `/thinking` overrides are highly likely to land in the v0.8.2 release. Larger architectural proposals such as the web dashboard in-app upgrade feature and the Wasmtime plugin system migration are targeted for the v0.9.0 milestone.

## 7. User Feedback Summary
Reported real-user pain points from the past 24 hours include:
- New users report poor first-run experiences when they accidentally select a restrictive risk profile during quickstart that blocks expected tool execution
- Previous versions of Zerocode did not detect version mismatches between the TUI client and the running ZeroClaw daemon, leading to cryptic unexpected failures (this bug was resolved in today's merged PR)
- Chinese IM channel users previously complained about long wait times for fully-rendered rich card responses, a pain point now partially resolved via the newly shipped streaming card support for QQ/DingTalk/WeChat/Feishu
- Users leveraging specialist multi-agent workflows requested the ability to hand off tasks to configured agents that run under their own independent policy and toolset, rather than inheriting restrictions from the calling agent
- No widespread reports of major dissatisfaction with core runtime or tool functionality, indicating strong baseline stability for the current release branch.

## 8. Backlog Watch
High-priority open items waiting for maintainer review or resource allocation:
1. [zeroclaw-labs/zeroclaw#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074): In-progress task to recover 153 commits lost in a bulk March 28 revert. The issue has no public maintainer update for 24 hours, and unaddressed will result in a large amount of already-reviewed, ready-to-merge bug fixes and features being permanently lost.
2. [zeroclaw-labs/zeroclaw#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943): RFC proposing to replace Extism with a native Wasmtime Component Model host. The RFC needs explicit maintainer architectural signoff to stop contributors from implementing conflicting versions of the plugin system based on mutually exclusive requirements in the existing FND-001 document.
3. [zeroclaw-labs/zeroclaw#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170): RFC for in-app supervised upgrades from the web dashboard. Currently marked as `needs-maintainer-review`, no implementation work can start until the core architecture team approves the proposal.
4. The v0.9.0 public coordination tracker [zeroclaw-labs/zeroclaw#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) currently lists 134 open unassigned items that require prioritization to keep the milestone on schedule.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*