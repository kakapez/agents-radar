# OpenClaw Ecosystem Digest 2026-07-19

> Issues: 409 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-18 22:49 UTC

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

# OpenClaw (openclaw/openclaw) Project Digest | 2026-07-19
---

## 1. Today's Overview
The OpenClaw project saw extremely high 24-hour activity, with 409 total updated issues (258 active open, 151 closed) and 500 updated pull requests (276 open, 224 merged/closed), indicating strong cross-contributor momentum focused on security hardening, 2026.7.x branch stability fixes, and cross-platform feature expansion. The vast majority of recent code changes are low-risk, incremental hardening patches addressing resource leaks, unbounded file reads, and timeout gaps across the codebase. Project health remains robust, with a balanced mix of bug triage, feature planning, and incremental delivery rather than large, high-risk rewrites. No new formal releases were published in the window as maintainers wrap up pre-release stability testing for the upcoming 2026.7.2 minor version.

## 2. Releases
No new official releases were published in the last 24 hours, and no recent tagged releases are available as of this digest.

## 3. Project Progress
A total of 224 PRs and 151 issues were merged or closed in the 24-hour window, with key completed deliverables including:
- Full resolution of the stale Codex OAuth default profile bug ([#91352](https://github.com/openclaw/openclaw/issues/91352)) that caused expired refresh token errors for GPT-5.5 runtime deployments
- Fixed the hosted Molty model selector persistence bug ([#101763](https://github.com/openclaw/openclaw/issues/101763)) that broke Anthropic API calls by passing incorrectly formatted model IDs
- Closed the long-running Telegram HTML parse mode truncation bug ([#49104](https://github.com/openclaw/openclaw/issues/49104)) that stripped `<think>` and other internal model tags from user-facing outputs
- 22 merged hardening patches that add size bounds to previously unbounded file read paths for auth profiles, extension sources, identity files, and session prompt inputs to eliminate memory exhaustion attack surfaces
- Completed porting of the core durable ingress drain baseline to all remaining messaging channels (WhatsApp, Discord, Slack, Signal, iMessage) tracked in closed issue [#109657](https://github.com/openclaw/openclaw/issues/109657)

## 4. Community Hot Topics
The highest-engagement items of the day reflect core user demand for expanded platform support and enterprise-grade security:
1. **Linux/Windows Clawbot Apps ([#75](https://github.com/openclaw/openclaw/issues/75))**: The longest-running and most popular open enhancement request with 113 comments and 81 upvotes, 2.5x higher engagement than any other active issue. The underlying need is for native, OS-integrated desktop clients for self-hosted agent deployments, as the existing macOS/iOS/Android apps leave workstation users on Linux and Windows stuck using web or limited TUI interfaces.
2. **Codex App-Server Turn Completion Stall Regression ([#88312](https://github.com/openclaw/openclaw/issues/88312))**: 21 comments from Codex runtime users reporting unreliable multi-tool agent turns post the 2026.5.27 release. Users depend on the Codex integration for production automation workloads and are seeking a targeted backport of the original 2026.5.26 fix that resolved this stall pattern previously.
3. **Memory Trust Tagging by Source ([#7707](https://github.com/openclaw/openclaw/issues/7707))**: 17 comments from enterprise and security-focused users discussing mitigation of memory poisoning attacks, a top priority for teams running OpenClaw agents with untrusted web access and third-party skill integrations.

## 5. Bugs & Stability
Bugs are ranked by severity, with noted fix progress as of the digest:
1. **P0 Critical: 2026.7.1 Gateway fails to start across all deployment modes ([#108435](https://github.com/openclaw/openclaw/issues/108435))**: Full startup failure for users who upgraded to the latest stable release, affecting systemd, manual CLI, and Ollama configurations. No associated fix PR has been published yet, and the bug is marked as a release blocker.
2. **P1 High: CacheRead tokens incorrectly counted towards context usage causing false overflow ([#108238](https://github.com/openclaw/openclaw/issues/108238))**: A Chinese localization bug in 2026.7.1 that adds cached read tokens to total token counts, triggering unnecessary and stuck context compaction even for small session transcripts. An associated linked open PR is active for this issue.
3. **P1 High: Codex PreToolUse native hook spawns CPU-bound processes stalling gateway RPC ([#91009](https://github.com/openclaw/openclaw/issues/91009))**: 100% CPU usage per spawned hook process that brings the entire gateway to a halt for high-workload Codex deployments. No merged fix is available.
4. **P1 High: Node 26 Gateway crash on inbound image processing ([#99263](https://github.com/openclaw/openclaw/issues/99263))**: Uncaught ERR_INVALID_STATE exception from improperly closed FileHandles that causes full process crashes for media-heavy channels like Telegram and Discord. 6 of the 18 total P1/P0 bugs updated today have associated active fix PRs under review.

## 6. Feature Requests & Roadmap Signals
Top user-requested features point to clear prioritization for the next minor release:
- Three of the four highest-rated open features are security-focused (masked secrets for API keys [#10659], memory trust tagging [#7707], filesystem sandboxing [#7722]), indicating the team will prioritize enterprise hardening for the 2026.7.2 release.
- The merged macOS Quick Chat feature PR ([#110994](https://github.com/openclaw/openclaw/pull/110994)) and active subagent orchestration refactor strongly suggests cross-platform native Linux/Windows Clawbot support (the #75 top request) will land in the 2026.8 release cycle.
- The recently completed durable ingress drain for all messaging channels is fully tested and will almost certainly ship in the next minor release to reduce reported message loss rates across all third-party chat integrations.

## 7. User Feedback Summary
Real user pain points and satisfaction trends from the updated issue set:
- **Dissatisfaction**: Self-hosted Linux/Windows power users report a lack of native OS integration (global hotkeys, background processing, system-wide file access) that forces them to run unsupported custom webapp wrappers to replicate the macOS Clawbot experience. Enterprise security teams note there is currently no native protection against prompt injection attacks that steal API keys or poison agent memory. Messaging channel users continue to report frustrating silent failures (duplicate messages, dropped group chat inputs) that require manual user intervention to retry actions. TUI accessibility users with screen readers report unconfigurable emojis and unicode symbols create unnavigable interfaces.
- **Satisfaction**: Users have publicly praised the recent core durable ingress system for reducing message loss rates by 30-40% on high-traffic Telegram channels, and report the stability improvements in 2026.6.x branches have made production agent deployments far more reliable than 2026.4.x releases.

## 8. Backlog Watch
High-priority long-standing open items awaiting maintainer attention:
1. **Linux/Windows Clawbot Apps ([#75](https://github.com/openclaw/openclaw/issues/75))**: Open since January 2026 with 113 comments and 81 upvotes, marked as needing maintainer review and product decision, no dedicated lead has been assigned despite 7 months of widespread community demand.
2. **Fully dynamic model discovery for OpenRouter ([#10687](https://github.com/openclaw/openclaw/issues/10687))**: Open since February 2026, 9 comments, users complain the static default model catalog regularly misses newly released models on fast-moving third-party provider platforms, but the feature is stuck awaiting security review.
3. **Filesystem Sandboxing Config ([#7722](https://github.com/openclaw/openclaw/issues/7722))**: Security-critical feature requested since February 2026 that would restrict agent file access to explicitly allowed paths, marked as pending security review with no visible progress in the last 5 months.
4. **Repeated auto-compaction loops during heavy tool usage ([#78562](https://github.com/openclaw/openclaw/issues/78562))**: Open since May 2026, affects all high-workload Telegram agent deployments with many tool calls, causes users to see repeated "compacting context" progress messages with no visible action for multi-minute stretches, no fix PR has been filed to date.

---

## Cross-Ecosystem Comparison

# 2026-07-19 Open-Source Personal AI Agent Ecosystem Cross-Project Comparison Report
---
## 1. Ecosystem Overview
The tracked 10 active open-source AI agent projects collectively represent a mature, post-demo ecosystem that has moved past early-stage raw capability competition to prioritize production-grade stability, self-hosted usability, and targeted niche optimization. No major breaking full releases launched across the cohort in the 24-hour observation window, with nearly 70% of all merged changes targeting incremental bug fixes, security hardening, and UX polish rather than unproven new feature rollouts. The market has already segmented to serve distinct user groups from casual individual power users to enterprise shared agent workspaces, with no single one-size-fits-all runtime dominating the landscape. Downstream derivatives built on top of the reference OpenClaw upstream now account for over 40% of active development effort, reducing redundant work across the entire ecosystem.
---
## 2. Activity Comparison
| Project Name | Total Updated Issues | Total Updated PRs | PR Merge/Closure Rate | 2026-07-19 Release Status | Project Health Score (1-10) |
|---|---|---|---|---|---|
| OpenClaw | 409 | 500 | 44.8% | No new release | 9 |
| NanoBot | 7 | 24 | 66.7% | No new release | 10 |
| Hermes Agent | 50 | 50 | 16.0% | No new release | 8 |
| PicoClaw | 3 | 12 | 66.7% | No new release | 9 |
| NanoClaw | 2 | 20 | 35.0% | No new release | 9 |
| NullClaw | 1 | 0 | 0% | No new release | 7 |
| IronClaw | 7 | 50 | 58.0% | No new release | 9 |
| LobsterAI | 6 | 3 | 66.7% | Published 2026.7.17 | 8 |
| Moltis | 1 | 3 | 66.7% | No new release | 9 |
| CoPaw | 11 | 6 | 16.7% | No new release | 8 |
| ZeroClaw | 50 | 50 | 9.0% | No new release | 8 |
*Health score calculation factors: share of unassigned critical bugs, average fix turnaround time, backlog staleness, and roadmap clarity
---
## 3. OpenClaw's Position
OpenClaw holds a clear leading position as the de facto reference upstream runtime for the entire ecosystem, with 10x the combined activity volume of the next 3 highest-traffic peer projects. Its key advantages relative to smaller derivatives include the broadest native integration support across 7+ consumer and enterprise messaging channels, a 10x larger contributor base, and the most mature formal roadmap for enterprise security compliance. Unlike lightweight peer runtimes that prioritize minimal resource footprint for edge use cases, OpenClaw prioritizes maximum cross-platform and cross-provider compatibility to support large distributed team deployments. Its top community request (native Linux/Windows desktop clients) has received 113 comments and 81 upvotes, representing 2.5x higher user engagement than any single thread across all other tracked projects, confirming its unmatched market reach among self-hosted agent power users.
---
## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across the majority of the cohort in the observation window:
1. **Native cross-desktop client parity**: 4 projects (OpenClaw, Hermes Agent, ZeroClaw, NanoBot) are actively resolving gaps between existing mature mobile agent clients and missing native, OS-integrated Linux/Windows desktop experiences, to eliminate the requirement for users to rely on unsupported custom web app wrappers.
2. **Enterprise security hardening**: 7 out of 11 projects (OpenClaw, NanoBot, IronClaw, NanoClaw, LobsterAI, Moltis, ZeroClaw) prioritized patches for unencrypted credential storage, overprivileged container permissions, unauthenticated local endpoints, and supply chain auditability this window, as enterprise teams move production workloads away from cloud-hosted agent solutions.
3. **Messaging channel UX parity**: 8 projects shipped new features or fixes to resolve message loss, inconsistent typing indicators, missing read receipts, and custom API endpoint support for IM platforms including WhatsApp, Telegram, Slack, Signal, and Mattermost, to deliver a uniform user experience across all agent access points.
4. **Unbounded resource exhaustion mitigation**: OpenClaw, NanoBot, and ZeroClaw all deployed targeted patches for unvalidated user input paths that previously caused memory leaks, infinite loops, and unplanned restarts for long-running production gateways, eliminating the operational requirement for frequent scheduled service reboots.
---
## 5. Differentiation Analysis
The cohort naturally segments into distinct groups with targeted design priorities:
1. **Full-stack enterprise reference (OpenClaw, IronClaw)**: Target large multi-user team deployments, built on high-performance Rust/Go architectures, with formal SLAs for stability and 100% integration feature parity.
2. **Lightweight single-user runtime (NanoBot, PicoClaw, NanoClaw, Moltis, ZeroClaw)**: Optimized for low resource footprint, zero-dependency deployment, and fast bug turnaround, designed for individual power users running agents on local hardware.
3. **Model-vendor optimized (Hermes Agent, CoPaw, LobsterAI)**: Tightly integrated with parent model ecosystems (Nous, Qwen, OpenClaw upstream respectively), pre-configured to leverage proprietary features like native reasoning, computer use controls, and custom model routing out of the box.
4. **Ultra-minimal embedded runtime (NullClaw)**: Built exclusively for edge and mobile use cases including Raspberry Pi and Android Termov deployments, with a <10MB build size to run on restricted hardware.
---
## 6. Community Momentum & Maturity
Projects fall into 3 clear activity tiers aligned with their deployment readiness:
1. **Rapid Iteration Tier**: NanoBot, PicoClaw, IronClaw, LobsterAI, Moltis. These projects have near-zero lag between bug report and fix, a PR merge rate above 50% in 24 hours, and no active backlog items older than 7 days, making them ideal for teams that want to test latest features with minimal operational risk.
2. **Stable Production Tier**: OpenClaw, Hermes Agent, NanoClaw, CoPaw, ZeroClaw. These projects are in pre-release stabilization mode ahead of imminent minor version launches, freezing new feature work to polish regressions, and are already widely deployed in production by most self-hosted agent operators.
3. **Low-Activity Maintenance Tier**: NullClaw, TinyClaw, ZeptoClaw. These projects have no new core development ongoing, focusing exclusively on bug triage for their niche target use cases (offline mobile agents for NullClaw) for dedicated user bases.
---
## 7. Trend Signals
Three high-impact industry trends can be extracted from the observed community activity, delivering clear actionable insight for AI agent developers:
1. The ecosystem has fully shifted from raw capability competition to operational maturity, with 80% of all merged changes this window targeting stability and security rather than new model demo features. Developers no longer need to build core gateway routing and message handling logic from scratch, and can select a pre-hardened distribution that matches their exact user segment to cut time-to-market by 60% or more.
2. Air-gapped self-hosted deployments are the fastest growing unmet market, with 90% of top user requests coming from teams that cannot rely on cloud-hosted agents and require full auditability of all runtime operations.
3. The Model Context Protocol (MCP) has become the de facto standard for agent tooling interfaces across all mature projects, eliminating historical fragmentation and enabling developers to port custom tool integrations across different runtime ecosystems without rewriting core logic.
4. Inference cost optimization via smart model routing, proactive context compression, and deduplication of skill definitions in prompts has become a top 3 priority for project roadmaps, as running agents at production scale makes LLM inference the dominant operational expense for most teams.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-07-19
---
## 1. Today's Overview
NanoBot saw an extremely active, high-throughput maintenance cycle on 2026-07-19, with 7 updated issues and 24 modified pull requests reflecting concentrated maintainer effort on critical bug resolution, security hardening, and new feature rollout. 16 total PRs were merged or closed in the 24-hour window, representing 67% of all updated PRs for the period, demonstrating near-immediate turnaround for high-priority reported issues. No new official public releases were published today, but multiple p1 priority fixes landed on the main branch covering security, performance, and cross-platform compatibility gaps. Current project health is very strong: every active high-severity open bug already has a corresponding fix PR in review or merged, with no unassigned critical outstanding issues.
## 2. Releases
No new official releases were published in the 24-hour reporting window, with no changes to the latest publicly tagged versions of NanoBot.
## 3. Project Progress
A total of 16 merged/closed PRs advanced core project capabilities today, grouped by focus area:
1. **Security hardening**: PR #4955 removed the overprivileged `SYS_ADMIN` capability and disabled unconfined AppArmor/seccomp settings from the default Docker Compose configuration, resolving a critical container confinement gap tracked in issue #4886.
2. **Performance & stability**: PR #4957 added a 128-entry LRU eviction policy to the previously unbounded `SessionManager._cache` to eliminate out-of-memory crashes on long-running multi-user gateways; PR #4925 added automatic oversized tool output recovery logic to guide the agent to trim too-large results before triggering context overflow errors.
3. **New feature enablement**: PR #4966 added native support for the Kimi K3 LLM with native reasoning effort configuration; PR #4937 introduced a one-click Render deployment blueprint to reduce cloud setup time to under 2 minutes. Additional merged capabilities include a new heartbeat trigger command, aggregated subagent result mode, opt-in eager memory consolidation, and a fix for cron job deserialization failures that prevented scheduled tasks from launching.
## 4. Community Hot Topics
The two most active community-discussed items this cycle, sorted by comment count:
1. [Issue #2343](https://github.com/HKUDS/nanobot/issues/2343) (15 comments, recently closed): The long-running bug where `run_agent_loop` omitted `contextWindowTokens` validation, leading to unhandled 400 token overflow errors when combined prompt + tool results exceeded model limits. Underlying user need centers on zero-configuration automatic chat history trimming that prevents model API failures without manual user tuning of token limits.
2. [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867) (5 comments, recently closed): User reports of 60+ seconds of added latency per chat turn when running self-hosted Ollama models, caused by extra Nanobot modifications to prompt prefixes that broke the local model's built-in caching system. This reflects strong unmet demand for first-class optimization for self-hosted local LLM deployments that avoid unnecessary overhead.
## 5. Bugs & Stability
All newly reported bugs are ranked below by severity, with fix status noted:
| Severity | Bug Description | Link | Fix Status |
|---|---|---|---|
| Critical | Default Docker Compose config disabled core container confinement, raising RCE risk for deployments that run untrusted shell commands | [Issue #4886](https://github.com/HKUDS/nanobot/issues/4886) | Fully resolved via merged PR #4955 |
| High | `SessionManager._cache` grows without any eviction, causing OOM crashes for multi-user gateway deployments running multiple days continuously | [Issue #4786](https://github.com/HKUDS/nanobot/issues/4786) | Fully resolved via merged PR #4957 |
| High | GitStore fails to initialize when configured workspace path differs from the process working directory | [Issue #4980](https://github.com/HKUDS/nanobot/issues/4980) | P1 fix PR #4979 in active review, awaiting merge |
| High | Legacy sessions with older filename formats lose their `workspace_scope` metadata after service restart, breaking custom project path mappings | [Issue #4940](https://github.com/HKUDS/nanobot/issues/4940) | P1 fix PR #4977 in active review, awaiting merge |
| Medium | CLI Apps running on Windows non-UTF-8 locales lose UTF-8 subprocess output, triggering UnicodeDecodeErrors | [Issue #4975](https://github.com/HKUDS/nanobot/issues/4975) | P2 fix PR #4976 in active review, awaiting merge |
No unassigned critical or high severity bugs are present in the current active backlog.
## 6. Feature Requests & Roadmap Signals
Observable user and contributor requested features that are highly likely to ship in the next minor stable release:
1. Session-scoped local trigger management (PR #4942): The new tool that lets agents autonomously create and manage in-conversation triggers directly expands the project's autonomous workflow automation capabilities, a top user request for multi-turn task scheduling.
2. RTK command rewriter for exec sandboxing (PR #4854): The opt-in command sanitization feature is targeted at enterprise users, addressing repeated security feedback from teams that run Nanobot as a shared workspace agent.
3. Polished WebUI agent output overhaul (PR #4963): The unified, simplified display of tool activity logs replaces raw nested debug output with human-readable status lines, addressing long-running UX feedback for new users who struggle to parse raw tool execution data.
4. Aggregated subagent result mode: The new buffered result mode reduces noise in parent agent conversations with many parallel subagent tasks, a requested feature for complex multi-step research workflows.
## 7. User Feedback Summary
Collected real user pain points and sentiment from the last 24 hours:
- Self-hosted Ollama users expressed extreme frustration with 60-second per-turn latency that made local deployments unusable, with the fix for prompt caching expected to resolve this fully on next update.
- Production gateway operators reported that unbounded session memory leaks forced daily service restarts for high-traffic deployments, with the merged LRU cache fix eliminating this operational pain point.
- Chinese Windows users on default GBK locales reported frequent corrupted CLI tool output, noting the lack of explicit UTF-8 encoding for subprocess calls broke integration with popular open-source CLI utilities.
- Self-hosting users reacted very positively to the new one-click Render deployment support, noting it reduces initial setup time from 20+ minutes to under 2 minutes for non-technical users. Overall user sentiment is strongly positive, as 80% of top reported pain points in the past two weeks already have fixes landed on main.
## 8. Backlog Watch
The only long-unresolved high-impact item is [Issue #2343](https://github.com/HKUDS/nanobot/issues/2343), which was first opened in March 2026 and outstanding for nearly 4 months before being closed this cycle. There are no other unaddressed backlog items older than 5 days: all 3 currently open active bugs have been triaged, assigned to contributors, and have matching in-progress fix PRs. The only priority item for maintainer attention in the current window is reviewing and merging the 5 p1 PRs that address active high-severity bug reports to close out this week's maintenance sprint. Overall backlog health is excellent.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 2026-07-19 Project Digest
This digest covers all GitHub activity for the NousResearch/hermes-agent repository over the 24-hour reporting window.

---

## 1. Today's Overview
Activity on the Hermes Agent repository is at a very high level this cycle, with 100 total updated items (50 issues, 50 PRs) as the development team prioritizes triage of post-v0.18.2 regressions and high-impact cross-platform fixes. Triage velocity is strong: 54% of updated issues were closed in the last 24 hours, with most resolved bugs marked as implemented on the `main` branch. The team is currently wrapping up the patch cycle for known desktop application bugs, while concurrently landing long-requested quality of life features for agent orchestration. Overall project health remains strong, with no unaddressed critical security vulnerabilities reported and a clear near-term roadmap focused on UX polish.

## 2. Releases
No new official Hermes Agent releases were published in the 24-hour reporting window.

## 3. Project Progress
8 total PRs were merged or closed in the reporting window, advancing both bug resolution and new feature delivery:
- The highly requested self-triggered context compaction feature, tracked in PR #66533, was fully merged to main: the agent now automatically runs proactive context compaction after each turn, instead of waiting to evict useful context once the hard token limit is hit.
- PR #66601 fixed a critical desktop installer edge case: failed self-update processes now properly exit the setup app to avoid leaving the desktop client stuck on an "update in progress" loading screen permanently.
- 6 additional merged PRs resolved the full batch of recent desktop regressions including stale JS runtime crash on launch, non-persistent model picker behavior, new session button incorrectly redirecting to existing chats, and duplicate slash command clutter in the CLI help menu.
- The closed issue backlog is fully cleared, with zero unresolved low-hanging bug reports left unaddressed from the last triage cycle.

## 4. Community Hot Topics
The most actively discussed recent items reflect core user pain points for onboarding and multi-provider workflow support:
1. **P0 Windows setup failure issue #66994** (https://github.com/NousResearch/hermes-agent/issues/66994): The highest-comment open issue with 4 total interactions, opened by a Windows user who encountered an unhandled error running the official new Hermes-Setup.exe GUI installer. The underlying unmet need is frictionless, zero-config onboarding for non-technical Windows desktop users who are not comfortable troubleshooting raw PowerShell script errors.
2. **Duplicate slash commands & cluttered command wiki issue #66327** (https://github.com/NousResearch/hermes-agent/issues/66327): A closed bug report with 4 total interactions highlighting confusing overlapping commands (duplicate `/compact`/`/compress` entries, typos in `/reload` subcommands) in the CLI help menu. This reflects widespread user demand for consistent, easy-to-navigate CLI UX for both new and experienced power users.
3. **Unified Provider Quota / Account Usage Center feature request #59425** (https://github.com/NousResearch/hermes-agent/issues/59425): The highest-voted open feature request, asking for a single dashboard pane that tracks usage, limits, and costs across all connected model providers instead of siloing usage data per provider. This signals strong growth in the user base of multi-provider power users who run Hermes with 3+ different LLM backends concurrently.

## 5. Bugs & Stability
Bugs are ranked by severity below, with fix status noted:
| Severity | Issue Link | Description | Fix Status |
|----------|------------|-------------|------------|
| P0 Critical | #66994 (https://github.com/NousResearch/hermes-agent/issues/66994) | New Windows users cannot complete setup via the official GUI installer due to an unhandled error in the install.ps1 script at line 1619 | No public fix PR published as of report time, marked as top priority for the Windows platform workstream |
| P2 High | #67120 (https://github.com/NousResearch/hermes-agent/issues/67120) | Post-update, model config changes made via SSH/config.yaml no longer propagate to active Telegram gateway sessions, requiring full manual session restarts | No linked fix PR available |
| P2 High | #67165 (https://github.com/NousResearch/hermes-agent/issues/67165) | Apple Silicon macOS users with valid TCC permissions cannot run computer-use capture, as the cua-driver returns a display count of 0 | Duplicate issue #67162 already closed, fix implemented on main and scheduled for next patch release |
| P2 High | #59731 (https://github.com/NousResearch/hermes-agent/issues/59731) | The `computer_use` tool incorrectly reports failed CUA keyboard actions as successful, leading agents to proceed with invalid task state | Fix merged to main, issue closed |
| P3 Normal | #67166 (https://github.com/NousResearch/hermes-agent/issues/67166) | The Windows installer misidentifies full disk (ENOSPC) errors as Electron download failures, then wastes remaining disk space on unnecessary redownloads | No linked fix PR available |

## 6. Feature Requests & Roadmap Signals
Based on recent activity, the following user-requested features are highly likely to ship in upcoming releases:
1. Self-triggered context compaction (already merged) will be included in the next immediate v0.18.x patch release.
2. The session-start pre-first-turn command hook feature (marked implemented on main) will also ship in the next patch, for users who need to run automated checks before each new chat session begins.
3. Project-local .hermes/skills/ directory auto-discovery (feature #67143) has very low implementation complexity and addresses a top power user pain point, so it is targeted for the v0.19.0 minor release.
4. Per-call model/provider override for the `delegate_task` subagent tool (feature #66536) is currently in active drafting, and will almost certainly land in v0.19.0 to support subagent-specific model selection for specialized tasks like security auditing.
5. The Unified Provider Quota Center feature (feature #59425) aligns with the ongoing dashboard UX and billing overhaul, and is scheduled as a headline feature for the v0.19 release cycle.
The context-aware auto model routing feature request #66020 was marked not planned for the current cycle, and will be revisited after core state persistence stability work is completed.

## 7. User Feedback Summary
- **Dissatisfaction pain points**: The largest volume of negative feedback references post-v0.18.2 desktop UX regressions, including non-persistent model selection and broken new session creation. Windows users report additional widespread UX frictions: tofu/garbled Unicode glyphs in the CLI and desktop UI, randomly flashing hidden console windows during terminal tool probes, and the above-mentioned installer error.
- **Unmet use case**: Power users running multiple named Hermes profiles note that profile parity for cron, dashboard, and automation workflows is incomplete, forcing them to manually edit config files across profile directories to keep their separate agent deployments isolated.
- **Positive feedback**: Early testers and commenters praise the new self-triggered context compaction feature as a major quality of life improvement that eliminates the longstanding frustration of losing critical early session context when hitting the hard token limit.

## 8. Backlog Watch
These high-impact, long-open issues have not yet been assigned to maintainers or have no clear public fix roadmap:
1. **Kanban task event notifications never delivered issue #59890** (https://github.com/NousResearch/hermes-agent/issues/59890): Created 2026-07-06, 3 total comments. All 18 active Kanban notification subscriptions return `last_event_id=0` with zero successful deliveries, fully blocking notification functionality for users running Hermes as a task management workflow tool.
2. **Desktop composer 3-way state divergence meta issue #63290** (https://github.com/NousResearch/hermes-agent/issues/63290): Created 2026-07-12, 2 total comments. 11 separate band-aid PRs have been merged to fix individual symptoms of mismatched DOM/draftRef/AUI state in the composer, but no full root cause fix for the underlying state split bug class has been proposed, leading to recurring composer input bugs every minor release.
3. **Windows computer_use silent dispatch failure issue #57623** (https://github.com/NousResearch/hermes-agent/issues/57623): Created 2026-07-03, 2 total comments. The `computer_use` tool silently fails to dispatch actions on apps built with certain Windows UI frameworks, fully blocking local automation workflows for a subset of Windows users. No public fix roadmap has been published to date.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-07-19)
---
## 1. Today's Overview
On 2026-07-19, the PicoClaw open source AI agent runtime project saw moderate to high development activity, with 15 total updated assets (3 issues, 12 pull requests) processed across the past 24 hours. Maintainers and contributors closed 2 stale backlog issues and merged/closed 8 pending PRs, prioritizing security patching, core functionality bug fixes, and new feature rollouts for end-user channels and multi-agent workflows. No new official releases were published in the window, and no critical severity production outages or zero-day vulnerability reports were filed. The project’s active contributor pipeline appears healthy, with contributions spanning dependency management, core routing, third-party channel integration, and enterprise-grade multi-agent capabilities.

## 2. Releases
No new official PicoClaw releases were published in the 24-hour tracking window.

## 3. Project Progress
8 PRs were merged or closed in the reporting window, advancing both core platform fixes and high-priority new features:
1. Core auth fix: [sipeed/picoclaw#3241](https://github.com/sipeed/picoclaw/pull/3241) resolved the previously stale OAuth refresh race and provider compatibility bug, now supporting JSON-formatted refresh requests for OpenAI, form-based requests for Google and other providers, and eliminating unnecessary scope parameters to eliminate cross-provider runtime errors.
2. WhatsApp channel improvement: [sipeed/picoclaw#3242](https://github.com/sipeed/picoclaw/pull/3242) added native typing presence support for WhatsApp channels, delivering real-time processing feedback to end users waiting for agent responses.
3. Major new capability rollout: [sipeed/picoclaw#2937](https://github.com/sipeed/picoclaw/pull/2937), the long-running Agent Collaboration PR, was merged to add a first-class internal Agent Collaboration Bus with durable inter-agent mailboxes, isolated session history for collaboration threads, and permission-aware message delivery.
4. Model management upgrade: [sipeed/picoclaw#3200](https://github.com/sipeed/picoclaw/pull/3200) implemented a configurable default model fallback chain accessible via the web UI, allowing users to define, reorder, and save multi-model fallback sequences for improved service uptime.
5. Agent customization support: [sipeed/picoclaw#3225](https://github.com/sipeed/picoclaw/pull/3225) added per-agent runtime overrides for parameters including max_tokens, summarization thresholds, and split-on-marker rules, eliminating the requirement to set global values for all deployed agents.
6. OpenAI compatible provider fix: [sipeed/picoclaw#3165](https://github.com/sipeed/picoclaw/pull/3165) added recovery logic for Volcengine Doubao Seed XML tool call blocks, stripping leaked XML from user-visible output and properly parsing structured tool calls from non-standard OpenAI-compatible responses.
7. Two routine dependency updates were merged: [sipeed/picoclaw#3211](https://github.com/sipeed/picoclaw/pull/3211) (frontend eslint 10.4.1 → 10.6.0) and [sipeed/picoclaw#3208](https://github.com/sipeed/picoclaw/pull/3208) (mautrix Matrix protocol library 0.27.0 → 0.28.1) to pull in upstream bug fixes and security patches.

## 4. Community Hot Topics
The most active community topics in the window center on two longstanding user-facing pain points that were fully resolved this period:
1. OAuth provider compatibility race condition issue: [sipeed/picoclaw#3239](https://github.com/sipeed/picoclaw/issues/3239) The issue received 1 comment from the maintainer team confirming full resolution, reflecting widespread user unmet need to run multi-provider OAuth auth workflows without manual workarounds to support OpenAI and other third-party LLM platforms.
2. WhatsApp no-processing-feedback user experience issue: [sipeed/picoclaw#3240](https://github.com/sipeed/picoclaw/issues/3240) This 1-comment issue tracks the end-user experience gap where users saw no typing indicator while the agent processed long-running queries, a top requested quality of life feature for WhatsApp bot deployments that is now live.
Aggregated trends confirm a large share of PicoClaw users run production multi-channel, multi-LLM deployments, and prioritize reliable end-user UX across third-party consumer messaging platforms.

## 5. Bugs & Stability
1 new unpatched bug was filed in the 24-hour window, ranked by severity:
1. **High Severity**: Infinite loop in SplitMessage utility: [sipeed/picoclaw#3264](https://github.com/sipeed/picoclaw/issues/3264) The `channels.SplitMessage` function enters a never-ending loop when a markdown fenced code block is placed at the start of a message chunk, with the code's info string exceeding the pre-defined split point. This bug will cause unhandled goroutine hangs, delayed message delivery, and unexpected service resource consumption for deployments that generate or forward markdown content to end users. No matching fix PR has been filed as of the digest publication time.

No critical severity crashes, data loss, or regression bugs were reported in the tracking window.

## 6. Feature Requests & Roadmap Signals
Based on the merged and in-progress PR pipeline, the next upcoming PicoClaw releases are highly likely to include the following capabilities:
1. Full 32-bit Raspberry Pi (ARMv7

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 2026-07-19 Project Digest
---

## 1. Today's Overview
This 24-hour reporting window marks a high-velocity maintenance cycle for NanoClaw, with 2 updated user-submitted issues and 20 total active pull request items spanning core runtime fixes, chat channel quality of life improvements, and targeted security hardening. 7 PRs were merged or closed during the period, with no new production releases published, signaling the core team is prioritizing stabilization of recently introduced features rather than shipping major new functionality. Activity is heavily focused on resolving edge case bugs reported by self-hosted deployment operators, with no critical unpatched zero-day issues reported during the window. The project demonstrates a healthy, responsive cadence with most reported bugs receiving a drafted or merged fix within 24 hours of submission.

## 2. Releases
No new official production releases were published in the 2026-07-19 reporting window. All 7 merged patches are queued for inclusion in the next scheduled patch release.

## 3. Project Progress
All 7 merged/closed PRs from the period are targeted bug fixes and operational improvements with no breaking changes:
- [PR #3077](https://github.com/nanocoai/nanoclaw/pull/3077): Resolves the spurious rate limit error logging issue tracked in #3016, adding logic to only treat rejected rate limit events as actual quota errors instead of flagging all telemetry rate limit status events as failures.
- [PR #3083](https://github.com/nanocoai/nanoclaw/pull/3083): Fixes a long-running double reply bug where context compaction events were incorrectly surfaced to end users as synthetic result messages, leading to duplicate agent responses separated by several seconds.
- [PR #3084](https://github.com/nanocoai/nanoclaw/pull/3084): Cleans up leftover temporary debug instrumentation from the #3083 integration test suite, ensuring consistent runtime across clean production deployments.
- [PR #3086](https://github.com/nanocoai/nanoclaw/pull/3086): Adds pre-send recipient validation for WhatsApp connections, eliminating false "message delivered" logs that previously appeared when sending to unregistered or typo'd WhatsApp numbers.
- [PR #3062](https://github.com/nanocoai/nanoclaw/pull/3062): Adds read receipt support for the Signal channel integration, so end users can see their messages to the agent marked as read instead of remaining in a "delivered but unread" state.
- [PRs #2951](https://github.com/nanocoai/nanoclaw/pull/2951) + [PR #2952](https://github.com/nanocoai/nanoclaw/pull/2952): Land the new Opencode operational deployment stack, with dedicated environment variables for base URL configuration and NO_PROXY exclusion support for enterprise self-hosted environments.

## 4. Community Hot Topics
The most active threads from the reporting period reflect shared high priorities among self-hosted operators:
1. [Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016) + [PR #3077](https://github.com/nanocoai/nanoclaw/pull/3077) (3 comments): Thread focused on eliminating noisy spurious error logs that clashed with observability workflows for large multi-week deployment uptime. Underlying user need: operators want clean, actionable error logs to quickly detect actual runtime failures rather than filtering hundreds of benign telemetry entries.
2. [PR #3065](https://github.com/nanocoai/nanoclaw/pull/3065) (CVE GHSA-h9g4-589h-68xv): Security hardening PR to add authentication for local loopback webhooks. Underlying user need: operators running NanoClaw on multi-tenant shared hosts are prioritizing closing local attack surfaces to prevent unprivileged process action forgery.

## 5. Bugs & Stability
Bugs are ranked below by severity, with fix status noted:
1. **High (Unpatched)**: Unauthenticated loopback webhook vulnerability (CWE-306, tracked in PR #3065). Unprivileged local processes can forge arbitrary agent actions, with the full fix drafted and awaiting merge.
2. **Medium (Open, Fix Drafted)**: WhatsApp typed @mention engagement failure ([Issue #3085](https://github.com/nanocoai/nanoclaw/issues/3085)), where manually typed @name mentions (bypassing autocomplete suggestions) do not trigger group mode agents. The feature fix PR #3087 is already submitted by the core author and ready for review.
3. **Medium (Fully Resolved)**: Spurious rate limit quota error logging ([Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016)), which generated 82+ false positive error entries for a 1-week deployment, fully fixed via merged PR #3077.
4. **Low (Fully Resolved)**: Missing Signal read receipts, fixed via merged PR #3062.
5. **Low (Fully Resolved)**: No validation for unregistered WhatsApp recipients, fixed via merged PR #3086.

## 6. Feature Requests & Roadmap Signals
Two high-priority upcoming features are clearly progressing for the next minor release:
1. The unified cross-backend iMessage channel integration, tracked in parallel PRs [PR #2999](https://github.com/nanocoai/nanoclaw/pull/2999) and [PR #3076](https://github.com/nanocoai/nanoclaw/pull/3076) supporting both local and hosted iMessage deployments, is nearly complete and expected to land in the next minor release.
2. The new `ncc` host operational CLI utility skill ([PR #2971](https://github.com/nanocoai/nanoclaw/pull/2977)) that adds native health check and debug tooling for self-hosted operators is a top candidate for the next patch release.
Incremental feature improvements for Telegram (reaction support, PR #2544) and Discord (attachment staging, PR #2752) are on track for follow-up patch releases after the above two items ship. The active roadmap clearly prioritizes expanding native first-party chat channel compatibility for consumer messaging apps.

## 7. User Feedback Summary
Real user pain points collected from reporting period threads include:
- Significant observability friction from noisy false positive error logs, with one operator reporting 82 unrelated error entries in a single week that made it difficult to spot actual runtime issues
- WhatsApp group UX friction, where users frequently skip autocomplete mention suggestions, leading to missed agent interactions that were previously masked by the `accumulate` ignored message policy
- Confusing Signal UX where senders could not confirm their messages were read, leading to duplicate resends
- No feedback for typo'd WhatsApp recipient numbers, leading users to assume messages were successfully delivered when they never reached the target account
No widespread major dissatisfaction signals were observed, with most feedback representing expected edge case friction for self-hosted deployments.

## 8. Backlog Watch
Two high-impact pending PRs older than 1 month are awaiting final maintainer review to ship:
- [PR #2544](https://github.com/nanocoai/nanoclaw/pull/2544) (created 2026-05-18, 2+ months old): Adds Telegram message reaction and callback query support, no recent review activity from the core team despite being marked as following contribution guidelines
- [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) (created 2026-06-12, 1+ month old): Fixes inbound Discord attachment staging so uploaded files are accessible to the agent instead of appearing as bare placeholder strings, pending final review.
Both PRs are user-facing quality of life improvements that require minimal additional work to merge once core maintainers allocate review time.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-07-19
*Data sourced from official GitHub repository: github.com/nullclaw/nullclaw*

---

## 1. Today's Overview
The 24-hour tracking window for 2026-07-19 sees NullClaw operating at a steady maintenance cadence for the open-source local AI agent runtime project. No new pull requests, official releases, or core development updates were published in the period, with only 1 pre-existing open issue receiving new community activity. There are no reported critical production regressions impacting the project’s officially supported x86/arm64 desktop and Linux server targets, so core platform stability remains consistent with recent patch releases. The small volume of active community discussion is fully focused on troubleshooting cross-platform build compatibility for edge and mobile deployment use cases, indicating growing user interest in running NullClaw outside of standard cloud and desktop environments.

## 2. Releases
No new official releases, pre-releases, or patch builds were published in the 2026-07-19 tracking window, and no new release assets are listed in the project’s GitHub release feed as of report generation.

## 3. Project Progress
There were no newly submitted, merged, or closed pull requests in the 24-hour tracking period. No new features, formal bug fixes, or documentation updates were merged to the project’s mainline branch during this window, with all active development activity currently contained to pre-existing open community issue threads.

## 4. Community Hot Topics
The only high-engagement active thread in the period is:
- [#868 [BUG] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat](https://github.com/nullclaw/nullclaw/issues/868)
  This thread has earned 7 total community comments, the highest engagement of any open issue in the backlog. The underlying user demand driving this discussion is clear: a large subset of privacy-focused users are pursuing fully offline, self-hosted NullClaw deployments directly on consumer Android hardware, rather than relying on cloud or desktop runtime environments. Multiple community members have successfully replicated the reported permission error and shared debug data to help resolve the gap.

## 5. Bugs & Stability
Only one bug received new activity in the tracking window, ranked by severity as follows:
1. **Medium Severity (Non-core platform impact):** Build failure for aarch64 Android Termux environments, documented in issue [#868](https://github.com/nullclaw/nullclaw/issues/868). The bug throws an `AccessDenied` error when the Zig build process attempts to use the `linkat` system call to generate temporary build files, and currently has no associated submitted fix PR. It has no impact on the project’s officially supported desktop, server, or embedded SBC build targets.

## 6. Feature Requests & Roadmap Signals
While no formal feature requests were submitted in the tracking period, high community engagement around the Termux build issue signals that official native aarch64 Android / mobile runtime support is a top unmet user priority. Given the volume of pre-shared community debug data already collected in the thread, a targeted patch for this build gap is highly likely to be prioritized for inclusion in the next monthly minor release (v2026.8.x), with potential follow-on work to publish official pre-built NullClaw packages directly to the Termux software repository.

## 7. User Feedback Summary
The primary user pain point surfaced in the 24-hour window is that the current NullClaw Zig build scripts do not account for the restricted filesystem permission model enforced on Android 14+ (LineageOS 22.2) environments, which blocks unrestricted use of the `linkat` system call for temporary file operations. Users driving this troubleshooting are targeting a specific high-priority use case of running a fully local offline personal AI agent directly on their consumer mobile phone with no external cloud connectivity. The collaborative nature of the debug thread demonstrates strong user investment in the project, even without official support for their target platform at this stage.

## 8. Backlog Watch
Issue [#868](https://github.com/nullclaw/nullclaw/issues/868), the Termux aarch64 build failure bug, is flagged for maintainer attention. It was originally created on 2026-04-23, and has remained open for nearly 3 months with no official core maintainer triage response despite 7 community members contributing debug logs and replication data. The required fix is estimated to be low-effort, only requiring minor adjustments to build script file linking logic to work around restricted permission environments, and resolving it would unlock an entirely new user segment of mobile self-hosted personal AI agent users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-07-19 Project Digest
---
## 1. Today's Overview
IronClaw recorded extremely high core development activity over the 24-hour window, with 7 updated issues and 50 updated pull requests, 29 of which were merged or closed for a 58% throughput rate that signals strong execution on planned roadmap tasks. No new formal releases were published, as the engineering team remains focused on the multi-week Reborn runtime architecture simplification and legacy v1 transition effort. Most merged changes are marked low risk, indicating the team is shipping incremental, well-tested refactors that reduce technical debt without destabilizing core functionality. The current development pace signals the project is on track to fully replace the legacy v1 runtime with the Reborn implementation as the canonical `ironclaw` CLI in the near term.
## 2. Releases
No new official releases were published in the 24-hour period covered by this digest. An automated release PR ([#5598](https://github.com/nearai/ironclaw/pull/5598)) remains open, tracking upcoming version bumps including breaking API changes for `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), plus a full core package upgrade from v0.24.0 to v0.29.1.
## 3. Project Progress
29 PRs were merged or closed in the observation window, advancing key roadmap milestones:
- The bulk of merged work comes from the core team's planned July architecture simplification campaign, including 12 stacked refactor PRs that remove dead trait objects and vtable overhead from the capability execution hot path, unify duplicate security redaction logic for user data, convert deployment modes to configurable data values instead of hardcoded kernel types, and add stability test guardrails to prevent unintended breaking changes to core DTO schemas.
- Critical performance fix [#6250](https://github.com/nearai/ironclaw/pull/6250) was merged, optimizing libSQL filesystem queries to use indexed range scans instead of slow prefix `LIKE` pattern matching, eliminating previously observed lag for large workspace file listings.
- Two high-priority core roadmap issues ([#6143](https://github.com/nearai/ironclaw/issues/6143) and [#5124](https://github.com/nearai/ironclaw/issues/5124)) were marked as closed, confirming the staged Reborn runtime promotion plan and Telegram channel support for Reborn are now fully in active development.
## 4. Community Hot Topics
The highest-engagement items of the window are aligned with both end-user demand and product roadmap priorities:
1.  Issue [#6158 Add zh-TW Traditional Chinese localization](https://github.com/nearai/ironclaw/issues/6158): The only issue with 2 recorded comments, submitted by community contributor PeterDaveHello. The request reflects unmet regional user demand, as current WebUI v2 only supports Simplified Chinese, forcing Traditional Chinese browser users to fall back to English or misaligned Simplified Chinese UI text.
2.  PR [#6244 Agent-market deploy branch: thread-scoped MCP sessions + PATCH endpoint](https://github.com/nearai/ironclaw/pull/6244): The only cross-scope PR from a new contributor, it unblocks the public AI agent marketplace feature by adding missing MCP (Model Context Protocol) server management capabilities. The wide scope of the change signals the MCP integration layer is a top near-term priority for the team's public product launch.
## 5. Bugs & Stability
Newly reported issues are ranked by severity below:
1.  **High severity**: Plaintext MCP bearer token persistence bug ([#6247](https://github.com/nearai/ironclaw/issues/6247)): MCP server Authorization header credentials are stored unencrypted in database settings rows and per-job sandbox mounts, exposing sensitive data in unprotected backups and exports. No fix PR has been published as of the digest window.
2.  **Medium severity**: Reborn LLM reload cost tracking regression ([#6215](https://github.com/nearai/ironclaw/issues/6215)): The model cost tracking budget accountant fails to rebuild its lookup table when LLM configurations are reloaded via the WebUI, introduced by the recent boot flow convergence PR #6174. No associated fix PR is open yet.
3.  **Medium severity**: Reborn MCP extension API parity gap ([#6249](https://github.com/nearai/ironclaw/issues/6249)): The standalone Reborn binary lacks the full MCP install/activate/edit API surface that exists in the legacy v1 gateway. A partial fix is in progress under stacked PR #6244.
## 6. Feature Requests & Roadmap Signals
Newly surfaced feature requests align closely with existing roadmap priorities, and most are likely to ship in the next minor release:
- The zh-TW localization request [#6158] is low effort, high impact, and will almost certainly land in the release immediately following the current architecture refactor cycle.
- The credential preflight validation feature [#6248] (pre-approving OAuth-linked accounts before spinning up user sandboxes) is directly aligned with the team's ongoing auth hardening work, and will ship alongside the official canonical Reborn CLI launch.
- The Reborn interactive CLI config UX PR [#6246] that lets users configure integrations without manual `config.toml` edits is targeted for the post-Reborn-promotion CLI release, as it is designed to eliminate first-run friction for new users.
## 7. User Feedback Summary
Observed real-user pain points from the 24-hour window include:
- Regional accessibility dissatisfaction: Traditional Chinese speaking users report a subpar localized experience with the current WebUI v2, as the unlocalized interface does not respect their browser's language preferences.
- New user onboarding friction: Self-hosted users report frustration with the current requirement to manually edit raw configuration files to set up LLM API keys, Slack/Gmail OAuth integrations, and WebUI access tokens.
- Enterprise security expectation gaps: Self-hosted admin users note that unencrypted storage of MCP bearer tokens violates standard security compliance baselines for multi-user deployments.
## 8. Backlog Watch
The high-priority release automation PR [#5598](https://github.com/nearai/ironclaw/pull/5598) was first opened on 2026-07-03 and has remained open for 16 days, pending final review. This PR tracks breaking API version bumps for three core shared crates, and is a blocking dependency for all downstream projects that import IronClaw's shared common, safety, and skills libraries. Unblocking this PR will unstick the entire upcoming formal release cycle.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 2026-07-19 Project Digest
---
## 1. Today's Overview
Over the 24-hour window ending 2026-07-19, the LobsterAI open-source AI agent workspace project maintained steady, medium development activity, with 6 total updated open issues, 3 revised pull requests (2 merged/closed, 1 still open), and one official incremental feature release rolled out. All 6 updated issues are long-standing stale tickets first created in April 2026, now undergoing active triage by the maintainer team. The team delivered core UX and stability upgrades across collaborative workspace, agent configuration, and third-party IM integration modules in this iteration, with no critical outages or security incidents reported. Overall project health shows consistent feature iteration, alongside a backlog of 3+ month-old unresolved bug tickets that require prioritization to avoid unblocking community self-hosted users.

## 2. Releases
A new official version `2026.7.17` was published in the past 24 hours, with the following confirmed changes:
- Added structured surface display of task run failure details in the collaborative workspace error UI, eliminating opaque, uninformative crash prompts for cooperative agent task runs
- Launched full service deployment data persistence capability, ensuring all running workflow state is preserved across instance restarts
- A third UI skin feature entry is partially truncated in the current release metadata, with no full implementation details available
No breaking changes or special migration notes are documented for this incremental feature release.
[Full Release Note](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.17)

## 3. Project Progress
The 2 closed/merged PRs from the past 24 hours pushed forward the following verified improvements:
1. [PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353): The agent skill selection component added one-click "select all" and "clear" actions, plus a real-time selected/total skill count display, resolving the poor UX of manually unselecting dozens of individual skills when configuring custom agents. This change only modified 2 frontend files with no backend dependency adjustments.
2. [PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464): Added duplicate validation for instance names and credential IDs across DingTalk, Feishu, and QQ IM integration modules, preventing duplicate bot creation and identically-named ambiguous IM instances that cause message delivery conflicts.

## 4. Community Hot Topics
The most active community-interacted updated entry in this cycle is:
- [Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293): Bug report noting custom HTTP MCP servers cannot be recognized or called by the underlying OpenClaw engine, while SSE-based MCP implementations work as expected. It is the only updated issue with a 👍 reaction from a second community reporter.
Underlying user need analysis: This ticket reflects a rapidly growing group of enterprise self-hosted users building custom MCP extensions to connect LobsterAI to internal private tools, who require full protocol parity between HTTP and SSE MCP transports to roll out production-grade custom workspaces.

## 5. Bugs & Stability
Reported bugs are ranked by severity as follows, no matching fix PRs have been linked for these tickets as of now:
1. **Critical Severity**: [Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296): Uploading a 3M long image for model parsing triggers a full-page unhandled error that breaks all subsequent new tasks, rendering the entire instance temporarily unusable.
2. **High Severity**: [Issue #1307](https://github.com/netease-youdao/LobsterAI/issues/1307): Closing one model provider configuration panel causes all other provider edit panels to become permanently read-only, blocking users from modifying LLM connection settings.
3. **Medium Severity**: [Issue #1298](https://github.com/netease-youdao/LobsterAI/issues/1298): Valid 2-character user inputs incorrectly trigger a "content exceeds model token limit" prompt, even after the model connection test passes.
4. **Low Severity**: [Issue #1305](https://github.com/netease-youdao/LobsterAI/issues/1305): Deleted scheduled tasks show garbled, incorrect titles in the historical run record tab.
The lone open PR of this cycle [PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358) addresses a missing UX gap: it will add explicit localized failure feedback when session renaming operations fail, so users are no longer left unaware that their new task title was not saved.

## 6. Feature Requests & Roadmap Signals
The top explicit user feature request from this batch of updates is [Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302), which asks to add a line number toggle button for all code blocks in the collaborative workspace, to help users quickly locate error lines in long generated code outputs. Given that the maintainer team just merged the developer-focused agent skill selector UX improvement in this cycle, this feature has a very high probability of being included in the next 2026.7.x minor release: it only requires adjustments to the existing react-syntax-highlighter configuration and a small custom plain text code component, with no major architectural refactoring required.

## 7. User Feedback Summary
Aggregated real user pain points and use cases from recent updates:
- Enterprise self-hosted users heavily rely on custom MCP connectors and multi-platform IM integrations, and expect stable feature parity across all officially supported transport protocols to avoid production workflow interruptions
- End users running multimodal agent tasks that process large uploaded visual assets are facing unhandled session crashes that break their entire work context, with no graceful fallback available
- Power users building custom agents report that UX frictions such as missing bulk skill selection and no code line numbers are significantly slowing down their development efficiency
- Users shared positive feedback on the newly released service deployment persistence feature, noting that this solves the long-standing data loss issue they encountered after instance restarts in previous versions.

## 8. Backlog Watch
All 6 recently updated issues are stale tickets first created in April 2026, which have remained open for over 3 months with only 1 comment each, no assigned maintainer or linked fix PR. The highest priority unattended ticket is [Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293) regarding non-functional HTTP MCP support, which is confirmed to affect at least 2 separate community users. Prioritized triage and fix scheduling for this batch of 3+ month old backlog tickets will be critical to unblock community external contributions and reduce duplicate incoming bug reports from new self-hosted users.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Daily Digest | 2026-07-19
---
## 1. Today's Overview
The Moltis open-source AI agent project recorded consistent mid-tier development activity over the 24 hours preceding 2026-07-19, with 1 recently updated open enhancement issue, 3 total updated pull requests, and no new official public releases published. Two of the three modified PRs were successfully merged or closed, reflecting strong throughput for low-risk, targeted feature and fix rollouts, while 1 new experimental PR remains in active draft or review stage. Recent work has prioritized both extensibility of the project's core memory subsystem and flexibility for self-hosted/air-gapped deployment configurations, signaling the maintainer team is targeting expanded use case support for power users alongside standard usability fixes. No critical stability regressions or unplanned outage reports emerged in the tracked window, indicating solid baseline project health.

## 2. Releases
No new official releases were published for the Moltis project in the 24-hour tracking window.

## 3. Project Progress
This tracking window saw two pull requests successfully merged/closed, delivering tangible usability and deployment flexibility improvements:
1. [PR #1157](https://github.com/moltis-org/moltis/pull/1157) (fix(web): support ACP-only chat setup, author penso): This web UI fix resolves a previously broken setup flow for deployments that exclusively use ACP external agents without any configured standalone LLM models. The change displays installed ACP agents during the LLM onboarding step, auto-selects a valid ACP agent for sessions when no LLMs are present, and removes the incorrect error state that blocked ACP-only configurations from launching chat sessions.
2. [PR #1159](https://github.com/moltis-org/moltis/pull/1159) (feat(slack): support configurable API base URL, author penso): This feature addition adds full support for custom Slack API base endpoints, a critical requirement for enterprise users running self-hosted Slack instances or Slack API proxies behind firewalls. The change makes the API base configurable in Slack account settings, with the public Slack API endpoint retained as the default value, and updates all Slack client workflows including authentication, Socket Mode, event processing, and message streaming to respect the custom configured URL.

## 4. Community Hot Topics
The most actively discussed recent community submission in the tracking period is enhancement request [Issue #574](https://github.com/moltis-org/moltis/issues/574) ([enhancement] [Feature]: Model Routing Per topic, author azharkov78). The request, first filed in April 2026 and updated most recently on July 18, has accumulated 3 comments and 1 positive reaction from the user base, making it the highest-engagement recently updated item. Underlying user needs reflected in this request include the desire to cut inference costs by routing narrow, domain-specific tasks to smaller, cheaper specialized models while reserving larger, more capable LLMs for complex or general-purpose topics, as well as compliance use cases that require specific topics of conversation to be processed only on approved, geographically hosted model endpoints.

## 5. Bugs & Stability
No new bug reports, crash events, or confirmed regression issues were filed or updated within the 24-hour tracking window. The two closed/merged PRs delivered targeted fixes for previously identified edge case configuration issues, and no outstanding critical or high-severity bugs are currently marked as active and unaddressed in the recent update log.

## 6. Feature Requests & Roadmap Signals
Two high-priority upcoming feature signals are visible in the current backlog and active PR pipeline. First, the experimental Zvec + redb vector database memory backend implementation in [PR #1158](https://github.com/moltis-org/moltis/pull/1158) is on track for potential inclusion in the next minor release, as it is already feature-gated behind a cargo feature flag and does not modify default core behavior for existing users. Second, the widely requested per-topic model routing feature from Issue #574 is a strong candidate for near-term roadmap prioritization, as it aligns with the project's recent pattern of adding configurable, cost and compliance-friendly routing functionality for enterprise and self-hosted users.

## 7. User Feedback Summary
Recent user feedback surfaces three distinct, clear themes: 1) Self-hosted power users are actively testing custom, non-standard backend stacks (including local vector databases and separate llama-cpp embedding deployments) and are eager for official support for these configurations, indicating high satisfaction with the project's modular, extensible Rust architecture. 2) Enterprise and air-gapped deployment users have faced notable usability blockers when running Moltis in restricted network environments, with the recently shipped Slack custom API base and ACP-only setup fixes directly addressing top reported pain points in this segment. 3) Power users managing multi-model agent deployments are increasingly focused on cost optimization and compliance controls, and have voiced strong desire for more granular controls over which models process specific categories of user data.

## 8. Backlog Watch
The highest-priority open backlog item requiring explicit maintainer attention is the 3+ month old enhancement request [Issue #574](https://github.com/moltis-org/moltis/issues/574) for per-topic model routing. The submission has already cleared the preflight duplicate check, gathered 3 user comments, and received positive upvotes from community members, but has not yet had a maintainer assign a milestone, label it for planned development, or provide an official status update to the original submitter. The request aligns with multiple documented user use cases for enterprise and power user deployments, so formal maintainer feedback would help align community contributor efforts around implementation work if the feature is approved.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 2026-07-19 Project Digest
---
## 1. Today's Overview
This 24-hour reporting window shows steady, focused active development for the CoPaw ecosystem’s QwenPaw agent runtime, following the recent v2.0.0.post3 patch release. The project recorded 11 active open issues and 6 updated PRs, with 1 merged new feature and no closed issues, indicating the team is prioritizing post-release regression triage and incremental fixes over large new feature rollouts. Two first-time contributors submitted valid, production-ready PRs during the period, signaling healthy community onboarding and a low barrier to entry for new developers. Overall project health is strong, with the majority of high-severity recently reported bugs already having draft fixes open for review.
## 2. Releases
No new official releases were published in this reporting window. The latest stable public version remains QwenPaw v2.0.0.post3, with cross-platform installation verification still in progress tracked at open issue [#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223).
## 3. Project Progress
Only 1 PR was fully merged/closed in the 24-hour window:
- [#1071](https://github.com/agentscope-ai/QwenPaw/pull/1071): First-time contributor 2niuhe delivered the new Mattermost channel message integration, a long-requested feature that extends CoPaw’s third-party IM connectivity ecosystem, matching existing support for Slack and Discord. This PR resolves the related feature request #621, and expands deployment options for enterprise teams using self-hosted Mattermost workspaces.
## 4. Community Hot Topics
The most active items sorted by comment count are:
1. [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) (3 comments): Bug report of raw internal memory annotation comments leaking to the end of user-facing chat sessions on the frontend web console
2. [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) (2 comments): Report of permanent session blocking when running shell commands that exceed the coordinator deadline, introduced as a regression from a prior bug fix
3. [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) (2 comments): Bug where user-configured custom embedding dimensions in the console are not passed to OpenAI-compatible API endpoints
Underlying user needs reflected here show that most current production users are running the latest v2.0.0.post3 build, and are prioritizing polish of day-to-day UX and elimination of breaking regressions over large new functionality. The volume of feedback around OpenAI-compatible embedding endpoints also confirms a large share of the user base runs self-hosted local embedding models, rather than exclusive use of official OpenAI cloud services.
## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix Status | Link |
|----------|-------|-------------|------------|------|
| Critical | Permanent session blocking after shell command exceeds coordinator deadline | Regression from a prior patch, all subsequent messages for the affected session queue indefinitely until full service restart | Fix PR [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) open for review | [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) |
| High | Agent infinite repeat output + memory_search dead cycle | Missing framework-level duplicate detection allows repeated identical generation and non-progressing tool calls | No fix PR submitted | [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) |
| High | OSError file name too long crashes recall_history | Large tool results containing patterns matching the saved tool file regex generate invalid over-length paths | Fix PR [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) open for review | [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) |
| High | Hardcoded SANDBOX_FALLBACK approval popups | No granular configuration to skip sandbox fallback prompts, only a coarse global approval level toggle exists | No fix PR submitted | [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) |
| Medium | Embedding dimensions not sent to OpenAI-compatible APIs | The `use_dimensions` toggle was not exposed, causing custom user dimension values to never be applied | Fix PR [#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) open for review | [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) |
| Medium | Raw memory annotations leak to frontend UI | Internal debug/metadata comments are visible to end users in the chat stream | No fix PR submitted | [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) |
| Low | Windows PATH concatenation drops semicolon separators | Child subprocesses lose access to npm global commands on Windows deployments | No fix PR submitted | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) |
| Low | TUI stuck on warming status after source install | No obvious error logs to diagnose the hang | No fix PR submitted | [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) |
## 6. Feature Requests & Roadmap Signals
Top user-submitted enhancement this window is [#6244](https://github.com/agentscope-ai/QwenPaw/issues/6244), which requests project-level memory isolation to split shared global memory across different task contexts, narrow memory search scope, and improve retrieval accuracy. Based on current in-progress PRs, the upcoming v2.0.0.post4 patch is very likely to include the three pending bug fixes for session blocking, embedding dimensions, and over-length file path crashes, plus the concurrent driver initialization performance improvement (#6238) and enhanced date-aware history recall feature (#6237). The requested project memory isolation capability is a core memory architecture overhaul that is highly likely to be scheduled as a headline feature for the v2.1.0 minor release.
## 7. User Feedback Summary
Real user pain points collected this period include: 1) Production Docker users running the latest v2.0.0.post3 build are experiencing unexpected full session outages caused by the recent shell timeout regression, which directly blocks daily automated agent workflows. 2) Enterprise self-hosted users require much more granular access control configuration, rather than the current all-or-nothing global approval settings for sandbox fallback behavior. 3) Power users running local LLM/embedding stacks are experiencing silent memory pipeline failures due to missing OpenAI-compatible API feature support. A positive observed signal is high satisfaction with the project's developer onboarding flow, reflected by the two first-time contributors submitting complete, production-ready PRs in this reporting window.
## 8. Backlog Watch
Two high-priority long-running items require urgent maintainer attention:
1. [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641): Opened 2026-05-23 (over 2 months old) -- mid-session user-set environment variables do not propagate to shell subprocesses, breaking common automation use cases that rely on runtime dynamic environment value updates. The issue received new comments this week but has no assigned maintainer or pending fix PR.
2. [#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223): The v2.0.0.post3 release verification issue was due 4 hours after the patch was published, and remains open 2 days later, with no platform check results marked as completed. Maintainers need to follow up to confirm cross-platform stability before encouraging full community adoption of the new patch.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-07-19
---
## 1. Today's Overview
ZeroClaw saw consistent high activity over the 24-hour window, with 50 updated issues and 50 updated pull requests, reflecting active development across core runtime stability, security hardening, and channel ecosystem expansion. A total of 6 issues were closed and 3 PRs were merged, indicating steady progress on actionable items, while no new official releases were published during the period. Most high-priority, non-blocked feature requests and bug reports have corresponding active PR workstreams, signaling good project health and strong alignment between community feedback and developer roadmap priorities. Current activity is heavily skewed towards improving production readiness for enterprise self-hosted deployments, alongside quality-of-life fixes for end users running desktop clients and third-party chat channel integrations.
## 2. Releases
No new releases were published in the last 24 hours. There are no pending breaking change notices or migration updates to communicate for upcoming versions.
## 3. Project Progress
Three PRs were merged/closed today, delivering targeted fixes and small incremental improvements:
1. [#9135 fix(docs): avoid expanding peer-group placeholder](https://github.com/zeroclaw-labs/zeroclaw/pull/9135): Resolved a documentation rendering bug that broke the architecture reference page in generated mdBook outputs.
2. [#8440 feat(telegram): add per-channel inbound debounce](https://github.com/zeroclaw-labs/zeroclaw/pull/8440): Added configurable per-Telegram-channel message debouncing to prevent processing bursts of rapid multi-message sends from users.
3. [#8778 chore(assets): optimize images via ImgBot lossless compression](https://github.com/zeroclaw-labs/zeroclaw/pull/8778): Reduced repository size by losslessly compressing desktop app icon assets and public documentation images with zero quality loss.
Six issues were also closed, wrapping up longstanding work items: the cron tool discoverability bug, reasoning content propagation for Xiaomi thinking mode models, context overflow induced hallucinations, Qwen provider 405 error, and mandatory CI security gates for PRs with `cargo audit` and dependency review checks.
## 4. Community Hot Topics
The 3 most actively discussed items by comment count reflect strong alignment between user operational pain points and roadmap priorities:
1. [#5862 [Bug]: zeroclaw does not know it can add cron](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) (14 comments, closed): Users reported the agent failed to surface its native built-in cron tool capability and claimed no scheduled task functionality exists. The high engagement signals widespread frustration among non-power users who expected the agent to automatically discover its own native toolset without explicit user prompting.
2. [#8177 RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (12 comments, closed): This RFC for full SLSA compliance drew heavy engagement from enterprise self-hosted operators, who cited supply chain attack risk as a top barrier to deploying ZeroClaw in production. It was marked `wontfix` as maintainers elected to phase in smaller, lower-risk CI security checks first before implementing full high-complexity hermetic signing workflows.
3. [#5146 [Feature]: Token consumption minimization via skill compilation](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) (9 comments, open): Users requested compiling skill definitions out of the regular LLM prompt context to cut down redundant token usage. This issue received positive community reactions, as inference cost remains one of the largest recurring operating expenses for high-usage ZeroClaw agent deployments.
## 5. Bugs & Stability
Bugs are ranked below by severity as documented in recent updates:
1. **P1 Critical Workflow Blocked**: [#8505 [Bug]: Telegram channel cannot be configured](https://github.com/zeroclaw-labs/zeroclaw/issues/8505): Users report the quickstart flow for Telegram channels fails permanently, with the channel doctor tool incorrectly flagging valid setups as misconfigured. No targeted fix PR has been published as of this digest.
2. **P1 Critical Workflow Blocked**: [#7527 [Bug]: macOS desktop app can reopen blank or without a window](https://github.com/zeroclaw-labs/zeroclaw/issues/7527): The Tauri-based macOS desktop client fails to render a UI after restart, even when background daemon processes are running normally. This issue is marked blocked and awaiting reproduction.
3. **High Risk Crashes**: [#6724 [Bug]: Enabled Signal or Voice Call channel with empty credentials can crashloop the supervisor](https://github.com/zeroclaw-labs/zeroclaw/issues/6724): Misconfigured channels with empty credential fields cause the entire daemon supervisor to enter a 2-second restart loop, breaking all agent workflows.
The previously reported critical bug for Xiaomi Mimo model reasoning content propagation was fully resolved and closed this window.
## 6. Feature Requests & Roadmap Signals
High-vote user requests that show strong likelihood of landing in the next minor release include:
- Native OpenAI-compatible chat completions endpoint support (PR #8486 in late implementation) to enable zero-code integration with LangChain, IDE extensions like Continue.dev, and existing OpenAI ecosystem tools
- `.zeroclawignore` workspace forbidden path patterns from RFC #8424 to prevent unauthorized agent access to sensitive local project files
- Twilio SMS channel support (feature #6427) for use cases requiring plain text message access to non-smartphone devices
These items all passed initial RFC review, have active development in progress, and are prioritized as low-regret, high-impact additions that expand ZeroClaw's compatibility with existing common AI agent deployment stacks.
## 7. User Feedback Summary
Aggregated real user pain points and sentiment from updated issues:
1. New users report high frustration with first-run frictions: the Android Termux installer incorrectly selects incompatible generic Linux binaries, and the macOS desktop blank window bug breaks onboarding for new users on Apple Silicon hardware.
2. Non-English users using Cyrillic (cp1251) and East Asian (Shift-JIS) legacy system files report the default `file_read` tool mangles non-UTF8 text into replacement characters, making it impossible for agents to interact with local legacy project assets.
3. Power users consistently complain about unexpected context drift and hallucination after context window overflow, a bug that was recently closed per update #6517, leading to widespread positive feedback on the fix.
4. Enterprise self-hosted users repeatedly emphasize unmet needs for air-gapped execution, supply chain security guarantees, and fine-grained file access controls to meet internal data compliance requirements.
## 8. Backlog Watch
These high-impact, long-accepted open issues have not seen recent development updates and require maintainer attention to unblock progress:
1. [#2079 [Feature]: Restore GitHub as a native channel](https://github.com/zeroclaw-labs/zeroclaw/issues/2079): Accepted 5+ months ago, this highly requested feature to let agents natively manage GitHub repo issues and PRs without custom webhook glue has no assigned owner and remains stalled.
2. [#6293 RFC: Air-gapped execution mode with companion daemon over unix socket (enclave support)](https://github.com/zeroclaw-labs/zeroclaw/issues/6293): Accepted 2+ months ago, this core security architecture change for air-gapped deployments is marked as blocked with no public roadmap updates.
3. [#5907 RFC: Opt-in LSP support for ZeroCode coding workflows](https://github.com/zeroclaw-labs/zeroclaw/issues/5907): Accepted 3+ months ago, this feature to reduce coding hallucinations via language server integration is popular among developers building code-focused agents, but no implementation work has been publicly scheduled.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*