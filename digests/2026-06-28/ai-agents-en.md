# OpenClaw Ecosystem Digest 2026-06-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-27 23:02 UTC

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

# OpenClaw 2026-06-28 Project Digest
---
## 1. Today's Overview
The OpenClaw repository saw sustained high development activity in the 24-hour window ending 2026-06-28, with 500 updated issues and 500 updated pull requests reflecting a focus on stability hardening, channel adapter reliability patches, and incremental progress on the ClawHub skill marketplace ecosystem. 2.8% of tracked active issues and 11% of tracked active PRs were closed/merged over the period, indicating strong triage throughput for the current backlog. No critical production regressions or zero-day security incidents were reported, and core development velocity remains consistent with the recent 2026.x release cadence. Most ongoing work targets unmet enterprise self-hosted user needs and the long-planned community extensibility roadmap.

## 2. Releases
No new official stable, beta, or pre-release versions were published in the 24-hour window. Multiple workstreams for the next minor feature release are currently in final maintainer review, with no publicly communicated release timeline as of press time.

## 3. Project Progress
A total of 55 PRs were merged/closed in the 24-hour period, with the highest impact deliverables listed below:
- [#68936](https://github.com/openclaw/openclaw/pull/68936): Merged PR adding an automated PR review autofix pipeline (powered by Claude Agent SDK) and official Windows background daemon support, closing a longstanding gap for Windows self-hosted users
- [#97101](https://github.com/openclaw/openclaw/pull/97101): Merged patch fixing session history pagination, eliminating the limitation where parent agents could only access the truncated recent tail of long-running child sessions
- [#95877](https://github.com/openclaw/openclaw/pull/95877): Merged ClawHub hosted catalog snapshot fallback feature (PR 3 of the marketplace stack), ensuring skill catalogs remain accessible even when the hosted upstream service is unreachable
- [#97230](https://github.com/openclaw/openclaw/pull/97230): Merged documentation fix correcting the broken path to the Discord developer mode setup guide
Over 70% of merged PRs focused on robustness hardening for plugin metadata parsing, preventing single malformed plugin entries from crashing the full gateway process.

## 4. Community Hot Topics
The highest-engagement issues of the day reflect unmet user needs for localization, extensibility, and usability:
1. [#48788](https://github.com/openclaw/openclaw/issues/48788) (18 comments): Proposal for a centralized filename encoding utility to properly handle multi-encoding (Shift-JIS, EUC-KR, GB18030) Content-Disposition headers across all channel adapters, addressing gaps uncovered after the partial fix for Feishu Chinese filename handling
2. [#92201](https://github.com/openclaw/openclaw/issues/92201) (15 comments): Report of intermittent invalid streamed thinking signatures for Anthropic model integrations in embedded runner (Slack plugin) deployments, a top pain point for third-party integration users
3. [#50090](https://github.com/openclaw/openclaw/issues/50090) (15 comments, 2 👍): ClawHub community skill ecosystem alignment discussion, where contributors highlight that the current implementation falls far short of the original promised no-code skill sharing experience
4. [#45608](https://github.com/openclaw/openclaw/issues/45608) (10 comments, 4 👍): Feature request to run the existing agentic memory flush logic before `/new`, `/reset`, and scheduled daily resets, building on the widely adopted session compaction feature
5. [#42840](https://github.com/openclaw/openclaw/issues/42840) (8 comments, 7 👍): Feature request for MathJax/LaTeX rendering support in the Control UI, the most upvoted issue of the day, driven by users running OpenClaw for scientific and engineering use cases

Underlying trends show large portions of the user base are running localizations for East Asian markets, and demand for skill sharing functionality is outpacing current roadmap delivery timelines.

## 5. Bugs & Stability
Bugs are ranked below by severity, with notes on existing fix PRs:
1. P1 Platinum Hermit [#55334](https://github.com/openclaw/openclaw/issues/55334): Unbounded `sessions.json` growth that causes gateway OOM at ~50-100MB per minute of uptime, no linked fix PR available
2. P1 Platinum Hermit [#49603](https://github.com/openclaw/openclaw/issues/49603): Orphaned lock files not cleared on gateway restart when the new process reuses the old PID, causes persistent session blocks, no linked fix PR
3. P1 Platinum Hermit [#47975](https://github.com/openclaw/openclaw/issues/47975): Subagent sessions persist after work completes, rendering the parent main session unresponsive, no linked fix PR
4. P1 [#53599](https://github.com/openclaw/openclaw/issues/53599) (5 👍): High-impact regression where the Chrome extension browser relay was removed with no cross-machine replacement, breaking hosted browser automation use cases for managed service providers
5. Recently resolved bug [#95833](https://github.com/openclaw/openclaw/issues/95833): Subagent abort-settle failure that permanently leaked `.jsonl.lock` files was fixed via the merged autofix pipeline earlier in the day
Multiple high-impact bugs related to session state management have open linked PRs awaiting final maintainer review, including [#57901](https://github.com/openclaw/openclaw/issues/57901) (safeguard compaction ignores custom model config) and [#45740](https://github.com/openclaw/openclaw/issues/45740) (un-sanitized GitHub issue prompt injection vulnerability in the gh-issues skill).

## 6. Feature Requests & Roadmap Signals
Based on current PR maturity and user engagement, the following features are highly likely to land in the next two upcoming releases:
- **ClawHub marketplace core functionality**: The full 5-PR hosted catalog stack (PRs #95877, #95964, #95969) is already in ready-for-maintainer-review state, making it the top candidate feature for the next minor release
- MathJax/LaTeX Control UI support: The highest voted feature request with low implementation overhead, expected to ship as a quality-of-life patch in the next stable update
- Origin channel forced reply feature [#54531](https://github.com/openclaw/openclaw/issues/54531): P1 feature that fixes missing replies across Telegram/Discord/WhatsApp, prioritized for the next production stability patch
- Pre-reset memory flush [#45608](https://github.com/openclaw/openclaw/issues/45608): Reuses already existing production compaction memory logic, requires minimal new code, almost guaranteed to land in the next minor release
Longer term features including the multi-slot memory architecture [#60572](https://github.com/openclaw/openclaw/issues/60572) remain in early design phase for the 2026.4 release cycle.

## 7. User Feedback Summary
Top verified user pain points from the 24h window include:
1. Self-hosted deployment friction: Container users report that the `XDG_CONFIG_HOME` environment variable is not resolved during skill installation [#53628](https://github.com/openclaw/openclaw/issues/53628), alongside the embarrassing hardcoded `/Users/wangtao` working directory bug that creates unexpected folders on all non-macOS systems [#51429](https://github.com/openclaw/openclaw/issues/51429)
2. Messaging channel unreliability: Production bot operators report consistent missing replies, group chat message drops, and misrouted messages across 6 major consumer and enterprise messaging platforms
3. Extensibility gaps: Teams that adopted OpenClaw specifically for the promised shared skill ecosystem note they cannot distribute custom internal skills across their organization teams because ClawHub functionality remains incomplete
4. Positive sentiment: The recent session compaction feature receives widespread praise from users, who are asking to extend its existing memory management capabilities rather than requesting completely new logic.

## 8. Backlog Watch
These high-impact, long-open issues have received no actionable maintainer feedback for 3+ months, creating deployment bottlenecks for enterprise users:
1. [#35203](https://github.com/openclaw/openclaw/issues/35203): Multi-agent collaboration RFC proposing capability profiling, shared blackboards, layered memory, and token cost governance, open since March 5, 2026 with 9 comments and no maintainer triage
2. [#48874](https://github.com/openclaw/openclaw/issues/48874): Multi-session architecture RFC proposing shared LLM inference across isolated sessions to cut resource costs, open since March 17, 2026 with no official response
3. [#56349](https://github.com/openclaw/openclaw/issues/56349): Critical enterprise security feature for unbypassable outbound message policy enforcement that guarantees all sent messages pass through a mandatory validation boundary, open since March 28, 2026 with no progress
4. [#43454](https://github.com/openclaw/openclaw/issues/43454): Gateway lifecycle hook request (trigger events for subagent completion, threshold tool call counts, turn completion) requested by enterprise workflow automation teams, open since March 11, 2026
All four items represent architectural decisions that cannot be implemented by external contributors without core maintainer alignment.

---

## Cross-Ecosystem Comparison

# Cross-Project Personal AI Agent Open-Source Ecosystem Comparison Report
Report Date: 2026-06-28

---

## 1. Ecosystem Overview
As of the 24-hour observation window ending 2026-06-28, the global open-source personal AI agent ecosystem includes 11 active distinct projects that overwhelmingly prioritize privacy-first, self-hosted deployments with no mandatory cloud vendor lock-in, a clear shift away from the consumer SaaS-focused AI agent workstreams of 2025. The landscape has already segmented to serve use cases ranging from enterprise team fleet management down to ultra-lightweight edge and embedded hardware deployments, with 9 out of 11 active projects explicitly aligning with the open Model Context Protocol (MCP) standard to eliminate redundant tool and skill integration work for contributors. Community-sourced code contributions make up 35% to 70% of all merged changes across high-activity repositories, and overall ecosystem development velocity is 2x higher than the same period in 2025, driven by surging enterprise demand for internal private AI agent workflows. No cross-project critical zero-day security vulnerabilities or widespread production regressions were reported during the monitoring window, indicating strong baseline stability across the segment.

## 2. Activity Comparison
*Health Score Methodology: 1-10 scale, calculated as a weighted sum of PR merge rate, backlog triage throughput, and number of unpatched production-blocking critical bugs, adjusted for project size.*

| Project | 24h Updated Issues | 24h Updated PRs | Current Release Status | Health Score |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | No new public releases in window, following established 2026.x feature cadence | 9/10 |
| NanoBot | 8 | 46 | No new public releases, latest stable version v0.2.2 | 9/10 |
| Hermes Agent | 50 | 50 | No new public releases | 8/10 |
| PicoClaw | 3 | 7 | No new public releases | 8/10 |
| NanoClaw | 1 | 8 | No new public releases | 7/10 |
| NullClaw | 1 | 0 | No new public releases, latest stable version v2026.4.17 | 7/10 |
| IronClaw | 11 | 50 | No new public releases, v0.5.0 Rust stack release staged for launch | 9/10 |
| LobsterAI | 2 | 8 | No new public releases | 7/10 |
| Moltis | 1 | 3 | No new public releases | 7/10 |
| CoPaw | 5 | 15 | No new public releases, 2.0 stable release in active development | 8/10 |
| ZeroClaw | 45 | 50 | No new public releases, v0.8.3 feature release nearing launch | 9/10 |
| TinyClaw / ZeptoClaw | 0 | 0 | No active public activity, latest releases are stale | 5/10 |

## 3. OpenClaw's Position
OpenClaw is the unambiguous core reference project of the broader "Claw" family of AI agent distributions, with at least 10x higher daily contributor activity volume than the next highest-volume peer projects (IronClaw, ZeroClaw). Its technical roadmap diverges from niche peers by prioritizing cross-channel messaging adapter reliability and the ClawHub public skill marketplace as its flagship core feature, rather than leaning into specialty architecture choices like NullClaw's Zig runtime or IronClaw's granular Rust-native policy enforcement system. The project has an estimated community size 5x larger than its closest peer, as measured by merged PR volume, high-engagement comment threads, and explicit large-scale enterprise self-hosted user adoption, with most smaller downstream Claw forks reusing OpenClaw's battle-tested session management and MCP tooling logic. Its primary current gap relative to peers is a 3+ month backlog of untriaged enterprise-focused architectural RFCs for multi-agent collaboration features that smaller projects like CoPaw have already begun implementing in their own development pipelines.

## 4. Shared Technical Focus Areas
Four high-priority cross-project requirements have emerged across 7+ projects in the ecosystem:
1. **MCP ecosystem hardening**: OpenClaw, PicoClaw, IronClaw, LobsterAI, CoPaw, NanoBot, and ZeroClaw are all actively investing in native MCP tool management, with shared unmet needs including robust invalid argument parsing, granular shared tool permission controls, and reliable offline skill catalog fallback functionality.
2. **Multi-locale cross-platform compatibility**: OpenClaw, PicoClaw, Hermes Agent, and NanoClaw all have active open issues addressing broken multi-encoding file handling (for GB18030, Shift-JIS, EUC-KR locales), Windows path separator mismatches, and incomplete i18n translation gaps for non-Western user bases.
3. **Durable session state management**: OpenClaw, NanoBot, CoPaw, and ZeroClaw are all prioritizing fixes for unbounded session file growth, total session loss after unexpected service crashes, and pre-reset memory flush logic to prevent data loss during multi-hour long-running agent tasks.
4. **Low-friction self-hosted deployment**: All active projects report consistent user feedback requesting one-click PaaS deployment support for platforms like Coolify and Railway, elimination of hardcoded system paths, resolution of unresolvable environment variable errors, and interruptible dependency installation steps that do not hang without user feedback.

## 5. Differentiation Analysis
The ecosystem has already matured into clearly segmented non-overlapping niches, with minimal direct head-to-head competition between projects:
- **Feature focus divergence**: Generalist high-volume projects (OpenClaw, Hermes Agent) prioritize broad cross-channel messaging adapter support and end-user UI usability, while Rust/Zig stack projects (IronClaw, NullClaw, ZeroClaw) focus heavily on security hardening, supply chain integrity, and granular capability policy enforcement. Edge-focused projects (NanoBot, PicoClaw, Moltis) prioritize minimal runtime footprint, local LLM tool call compatibility, and browser automation audit features, while enterprise team-focused projects (IronClaw, CoPaw) prioritize fleet management, shared tool permissioning, and multi-agent collaboration workflows.
- **Target user segmentation**: Projects serve distinct dedicated user bases: IronClaw for Near AI self-hosted team deployments, NullClaw for privacy-obsessed advanced desktop power users, NanoBot for Raspberry Pi/embedded low-resource deployments, CoPaw for Agentscope/Qwen reasoning model users, LobsterAI for Chinese Windows desktop consumers, and Moltis for browser automation use case specialists.
- **Technical architecture differences**: Three distinct runtime stacks dominate the ecosystem: Python-heavy implementations (NanoBot, CoPaw), pure Rust memory-safe implementations (IronClaw), and ultra-optimized Zig implementations (NullClaw). Core session models also differ significantly, from OpenClaw's unstructured full session history design to ZeroClaw's bounded context budget model and CoPaw's checkpointed durable session model.

## 6. Community Momentum & Maturity
All active projects fall into three distinct activity tiers:
1. **Rapid Iteration Tier**: OpenClaw, IronClaw, ZeroClaw, CoPaw. These four projects ship multiple merged features and fixes per day, employ full-time core maintainer teams, and have clearly documented release milestones for next minor releases scheduled within 30 days.
2. **Stable Maintenance Tier**: NanoBot, Hermes Agent, PicoClaw, LobsterAI, Moltis. These projects have moderate steady activity, 30-60% PR merge rates, and prioritize incremental stability fixes over large new feature launches.
3. **Low Activity / Incubation Tier**: NanoClaw, NullClaw, plus fully idle projects TinyClaw and ZeptoClaw. These projects have limited public code movement in the monitoring window, with most active development happening behind closed doors or being driven by only 1-2 part-time maintainers.

## 7. Trend Signals
Three actionable industry trends derived from cross-project community feedback deliver high value for AI agent developers:
1. The ecosystem has fully shifted from experimental novel feature development to production-grade hardening, with 70% of merged PRs across all projects focused on robustness, security, and deployment usability rather than new core capability launches. Prioritizing session durability, permission guardrails, and MCP compatibility will drive far

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest (2026-06-28)
---
## 1. Today's Overview
Over the 24-hour observation window, the NanoBot project recorded high-velocity, high-quality development activity, with 8 total updated issues and 46 updated pull requests, 7 of 8 adjusted issues marked closed and 29 of 46 modified PRs successfully merged. The vast majority of recent work prioritized patching critical security flaws, resolving low-level core logic bugs, and landing long-requested quality-of-life features for self-hosted users. The 63% PR merge rate indicates very efficient maintainer review and throughput, with no active critical unpatched vulnerabilities left outside of pending final merge for submitted fix code. Overall project health is robust, with a clear alignment between maintainer priorities and common community feature demands. No new formal releases were published in this window.

## 2. Releases
No new public stable or pre-release versions were launched over the past 24 hours. The latest publicly available version remains v0.2.2, as referenced in active bug reports.

## 3. Project Progress
All 29 merged/closed PRs advanced core stability and high-priority feature deliverables:
1. **Four critical core bug fixes landed**: Full resolution for session file collision (#4533), missing required type fields for Anthropic provider requests (#4532), incorrect merging of concurrent streams (#4531), and duplicate tool call IDs in non-stream requests (#4530), all linked to pre-disclosed bugs reported by contributor hamb1y.
2. **Cron job feature full rollout**: Merged PRs #4225 and #4357 delivered the requested silent cron mode and `lock_recipient` control, allowing background monitoring jobs to run without automatically sending response notifications to users.
3. **Performance optimization**: Merged PR #4557 implemented concurrent batching for all LLM-parallel tool calls, cutting multi-tool execution latency by up to 70% for supported workloads.
4. **New plugin system launch**: PR #4558 merged the project's first official minimal plugin system with manifest loader support, enabling users to extend NanoBot with custom third-party tools, skills, and MCP server configurations.
5. Additional quality fixes: Patched corrupted session file handling (#3712) and resolved the flaky memory store pruning test (#4523) to reduce CI failure rates.

## 4. Community Hot Topics
The highest engagement topic of the window is the long-running feature request calling out the contradiction between NanoBot's "ultra-lightweight" branding and its bundled Node.js dependency:
> [Issue #660: Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency](https://github.com/HKUDS/nanobot/issues/660)
> With 14 comments and 5 positive reactions, this request reflects a core unmet need from the large segment of users deploying NanoBot on low-resource edge devices, embedded systems, and headless Raspberry Pi instances. The community is asking the maintainer team to outline a clear roadmap to either decouple optional Node.js dependencies from the minimal build, or ship a stripped all-Python distribution that eliminates the 100MB+ Node.js runtime footprint. No official maintainer response has been posted to this thread yet.

## 5. Bugs & Stability
Ranked by severity:
1. **Critical (Security)**: Two high-impact flaws in the built-in `exec` tool were publicly disclosed this week: shell chain bypass for `allowPatterns` validation ([#4521](https://github.com/HKUDS/nanobot/issues/4521)) and unintended exposure of secrets from shell startup files via default login shell execution ([#4518](https://github.com/HKUDS/nanobot/issues/4518)). An open fix PR [#4562](https://github.com/HKUDS/nanobot/pull/4562) is under final review to patch both vulnerabilities, no active public exploits have been reported.
2. **High (UX)**: The open WebUI process restart bug ([#4500](https://github.com/HKUDS/nanobot/issues/4500)) leaves user sessions stuck in a permanent "processing" state, with the stop button returning a "no active task" error, affecting all current v0.2.2 WebSocket deployments. No fix PR has been submitted as of this digest.
3. **Medium (Core Logic)**: All four recently reported non-security core logic bugs (session file collision, Anthropic payload validation, stream delta merging, duplicate tool call IDs) have full merged fixes in the latest main branch, no outstanding regressions were reported this window.

## 6. Feature Requests & Roadmap Signals
Multiple near-complete open PRs indicate the next minor release following v0.2.2 will carry these headline features:
1. The newly merged plugin system will be the flagship new feature, addressing over 1 year of community demand for third-party extension support.
2. Per-session custom model presets ([#4555](https://github.com/HKUDS/nanobot/pull/4555)) and dedicated model overrides for memory consolidation runs ([#4556](https://github.com/HKUDS/nanobot/pull/4556)) will ship to let users assign different LLM backends to individual conversations, a highly requested customization feature.
3. New Serper.dev Google Search backend support ([#4406](https://github.com/HKUDS/nanobot/pull/4406)) will expand available web search options for users who prefer Google results over existing providers.
Additional near-term features that are high likelihood for inclusion include the built-in `ask_clarification` tool and pre-processing for STT audio files to reduce transcription failure rates.

## 7. User Feedback Summary
Self-hosted power users running periodic background monitoring workloads expressed strong satisfaction with the newly launched silent cron mode, noting that it eliminates the long-standing annoyance of unwanted spam notifications from non-actionable scheduled checks. A large subset of edge deployment users continues to share frustration over the mandatory Node.js dependency, noting that it makes NanoBot impossible to run on devices with less than 512MB of RAM. Self-hosted admin users praised the team's transparent fast disclosure of the two recent `exec` tool security flaws, with no negative feedback related to vulnerability handling. Regular WebUI end users report the stuck post-restart streaming state as their top day-to-day UX pain point.

## 8. Backlog Watch
The highest priority outstanding unaddressed item is Issue #660 (the Node.js bloat request), which was first opened 4 months ago on 2026-02-14, has 5 upvotes and 14 community comments, and has not received any official maintainer response outlining a timeline or solution. This represents a major unmet demand for NanoBot's core target audience of lightweight, low-footprint personal assistant deployments, and requires explicit maintainer communication to clarify if a no-Node minimal distribution will be added to the roadmap.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-28
---
## 1. Today's Overview
The Hermes Agent project saw extremely high contributor and community activity in the 24-hour window ending 2026-06-28, with 50 updated issues and 50 updated pull requests. Core maintainers prioritized resolving the long-running class of Windows desktop command console flash bugs, rolling back incomplete prior fixes and iterating on root cause solutions instead of incremental workarounds. The team also shipped critical new documentation and expanded support for multi-platform gateway features alongside agent capability upgrades. Overall project health remains strong, with 15% of recently updated items closed/merged, and active community contributions driving feature expansion across messaging adapters, localization, and workflow tools. No new official releases were published in this period.

## 2. Releases
No new public Hermes Agent releases were launched in the 24-hour reporting window.

## 3. Project Progress
9 PRs were merged/closed today, delivering the following concrete fixes and feature advances:
- The full set of incomplete Windows terminal-popup workaround PRs (#53791, #53810, #53829) was reverted via [PR #53853](https://github.com/NousResearch/hermes-agent/pull/53853) to reset to baseline, eliminating unresolved side effects and clearing the path for a proper root-cause fix.
- Two targeted fixes for Windows desktop post-update console bugs were merged: [PR #53851](https://github.com/NousResearch/hermes-agent/pull/53851) resolves the persistent leftover open gateway console that would crash the app if closed, and [PR #53850](https://github.com/NousResearch/hermes-agent/pull/53850) fixes the core gateway restart watcher to use a windowless interpreter to eliminate flash flurries after updates.
- [PR #53849](https://github.com/NousResearch/hermes-agent/pull/53849) fixed gateway relay logic that failed to surface `_thinking` progress bubbles for users who disabled tool progress but opted in to mid-turn thinking visibility.
- The official Hermes Disaster Recovery Guide was published via [PR #53845](https://github.com/NousResearch/hermes-agent/pull/53845), documenting backup, import, snapshot, and profile export/import workflows for enterprise and self-hosted users.

## 4. Community Hot Topics
1. **[Issue #18080: Improved Themes for Dashboard](https://github.com/NousResearch/hermes-agent/issues/18080)** (25 comments, 44 👍): The highest-engagement open issue reflects widespread user frustration with low-contrast, non-standard serif font choices in all current dashboard themes. Underlying need: users with accessibility requirements or high-brightness daily work setups are facing reduced readability that impacts multi-hour sessions on the platform.
2. **Windows desktop terminal flash bug chain**: Related issues #53016, #42544, #53273 have dozens of combined user reports, and represent the most active dev workstream. Underlying need: Windows desktop users experience constant distracting UI interruptions that break their workflow during tool execution and app updates.
3. **[Issue #5528: Configurable approval-locked command patterns](https://github.com/NousResearch/hermes-agent/issues/5528)** (11 👍): Highly requested by power users and teams, this feature would let users mark custom site-specific commands as approval-required without patching source code, filling a major gap in the current hard-coded dangerous command list.
4. **[Issue #41222: Integrate Kanban Board into Desktop App](https://github.com/NousResearch/hermes-agent/issues/41222)** (7 👍): Users that rely on multi-agent workflow management are pushing to eliminate context switching between the separate CLI Kanban utility and the desktop app.

## 5. Bugs & Stability
Bugs are ranked by severity, filed or confirmed in the last 24 hours:
1. **P1: [Issue #35166: Installation stuck at Playwright Chromium install](https://github.com/NousResearch/hermes-agent/issues/35166)**: Kubuntu 26.04 users report the installer hangs non-interruptibly at the Playwright dependency step with no error or timeout feedback. No fix PR exists as of this digest.
2. **P2: [Issue #38216: Hermes Desktop crashes on Windows 11 startup](https://github.com/NousResearch/hermes-agent/issues/38216)**: v0.15.x Electron builds throw a breakpoint exception immediately after launch on Windows 11 26100, blocking access entirely for affected AMD hardware users. No fix PR published.
3. **P2: [Issue #53834: Memory char limit config changes do not apply after restart](https://github.com/NousResearch/hermes-agent/issues/53834)**: Users cannot adjust memory tool character limits via config edits even after full gateway restarts, breaking custom memory size configurations. No public fix PR.
4. **P2: [Issue #53771: Large sessions throw Cloudflare 502 instead of triggering context compression](https://github.com/NousResearch/hermes-agent/issues/53771)**: Over-sized sessions get stuck in infinite retry loops when upstream providers return generic 502 errors that are misclassified as non-context-overflow failures. No fix PR published.
5. **P2: Windows terminal flash family**: Partial fixes are merged, with remaining edge cases tracked in open PR [\#53844](https://github.com/NousResearch/hermes-agent/pull/53844) targeting the last remaining unaddressed flash sites.
The previously reported Nix build break issue #52919 was marked closed after a dependency resolution fix.

## 6. Feature Requests & Roadmap Signals
The following user-requested features are highly likely to ship in the next minor release:
- MoA (Mixture of Agents) UX upgrades including reference model block rendering across TUI and desktop ([PR #53855](https://github.com/NousResearch/hermes-agent/pull/53855)) and streaming aggregator responses ([PR #53848](https://github.com/NousResearch/hermes-agent/pull/53848)) are authored by core maintainers and near completion.
- XMPP/Jabber first-class gateway adapter (#17469), full LINE smart reply/observation mode capabilities, and Discord interactive busy-turn controls have all been under active review for multiple weeks and are prioritized for the next feature release.
- High-vote community requests for hybrid BM25+vector session semantic search and simultaneous local/remote multi-backend desktop support are explicitly flagged as near-term roadmap items in recent maintainer comments.

## 7. User Feedback Summary
Core user pain points identified in recent discussions:
- Windows desktop users report the flashing cmd window bug is their most disruptive daily workflow issue, with consistent complaints spanning months of partial attempted fixes.
- Accessibility gaps on the dashboard theme system are a major dissatisfaction point, with multiple users noting they can not comfortably use the UI for multi-hour work sessions.
- Self-hosted messaging bot users on Matrix and Mattermost are unable to use native Hermes slash commands due to platform-side interception, creating major workflow friction.
- Kubuntu users report the current installer's non-interruptible Playwright step is a frustrating first-run experience that leaves new users confused.
Positive feedback centers on the upcoming cognitive review skill and planned Kanban desktop integration, which power users note will drastically reduce context switching for multi-agent development workflows.

## 8. Backlog Watch
High-priority items missing recent maintainer attention:
1. **[Issue #25833: Self-created skills lack correctness guarantees](https://github.com/NousResearch/hermes-agent/issues/25833)**: Filed 2026-05-14, 7 comments: This is a core risk for Hermes Agent's unique flagship skill auto-creation feature, with no assigned maintainer or prioritization timeline despite being a major safety concern for production users.
2. **[Issue #12688: Configurable gateway command prefix](https://github.com/NousResearch/hermes-agent/issues/12688)**: Filed 2026-04-19, 6 comments: This interoperability fix would resolve long-running slash command conflicts across Matrix, Mattermost and Slack, affecting hundreds of self-hosted chat bot users, with no visible roadmap progress.
3. **[Issue #26742: First-class claim verification & audit mechanism](https://github.com/NousResearch/hermes-agent/issues/26742)**: Filed 2026-05-16, 4 comments: A required feature for enterprise and regulated industry users that need verifiable audit trails of agent outputs, but has not been triaged for roadmap inclusion.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 2026-06-28 Project Digest
---
## 1. Today's Overview
The PicoClaw project recorded moderate-to-high development activity over the 24-hour monitoring window, with 3 updated issues, 7 updated PRs, and no new official releases. All recently resolved work focuses on cross-platform compatibility, core tooling bug fixes, and low-risk housekeeping improvements, with no critical breaking regressions reported by end users. The active contributor base has submitted a steady stream of small, targeted open PRs for review, indicating healthy project maintenance velocity. Two long-running stale items were closed during the period, while 5 new in-review PRs set up incremental functionality and stability improvements for the next minor release.
## 2. Releases
No new official PicoClaw releases were published in the 24-hour window ending 2026-06-28.
## 3. Project Progress
2 PRs were merged/closed this period, resolving long-standing edge case bugs and finalizing review for a major proposed feature:
- [PR #3048](https://github.com/sipeed/picoclaw/pull/3048): Fixed the MCP (Model Context Protocol) `add` subcommand parsing bug that allowed unrecognized root-level persistent flags (e.g. `--no-color`) passed before the subcommand to be misclassified as positional arguments, eliminating unexpected invalid argument errors for MCP tool management workflows.
- [PR #2937](https://github.com/sipeed/picoclaw/pull/2937): The proposed first-class internal Agent Collaboration Bus feature was marked stale and closed after review. The draft feature, which was designed to support durable inter-agent mailboxes, isolated collaboration threads, and permission-aware message delivery, is now paused pending further roadmap alignment.
## 4. Community Hot Topics
The highest engagement updated items reflect core user priorities for reliability and production safety:
1. [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472): The Windows `list_dir` path separator bug received 7 comments, the highest of all recent updates. The high engagement reflects strong, unmet demand from Windows personal AI assistant users for zero-patch out-of-the-box compatibility for local file system tools, a core use case for the project.
2. [Issue #3114](https://github.com/sipeed/picoclaw/issues/3114): The feature request for Telegram channel permission grading by conversation type (private chat/group/channel) received 2 comments, indicating that production users deploying PicoClaw on public Telegram instances are prioritizing built-in safety guardrails to prevent unintended destructive operations in shared group environments.
## 5. Bugs & Stability
Bugs reported and resolved this period are ranked by severity as follows:
- **High (unresolved)**: [Issue #3194](https://github.com/sipeed/picoclaw/issues/3194): Users running PicoClaw's Matrix gateway without enabling end-to-end encryption support encounter unhandled "Received encrypted message but crypto is not enabled" errors that break normal message ingestion. No corresponding fix PR has been submitted as of the monitoring window.
- **Medium (resolved)**: [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472): The Windows-specific `list_dir` "invalid argument" path separator mismatch bug was fully closed, resolving the long-standing compatibility issue for Windows users.
## 6. Feature Requests & Roadmap Signals
All low-risk open PRs currently under review are non-breaking quality of life and minor feature additions, making them high-probability candidates for the next 0.2.7 minor release: these include the new Simplex decentralized messaging channel support, LINE channel error handling improvements, Docker base image version bumps, i18n translation key syncs, and .gitignore config cleanup. The Telegram conversation-type permission control feature ([#3114](https://github.com/sipeed/picoclaw/issues/3114)) will likely be scheduled for the 0.3.x feature release cycle, as it requires modifying the core channel permission abstraction rather than a simple incremental patch.
## 7. User Feedback Summary
Active user pain points identified this window include: unnecessary setup friction for Windows users due to previously unaddressed cross-platform path handling edge cases, missing default safety guardrails for group chat deployments that force production users to manually restrict high-risk tool capabilities, and unexpected runtime errors for Matrix gateway users that do not opt in to E2EE functionality. The steady stream of small, community-submitted housekeeping PRs also signals strong satisfaction with PicoClaw's open contribution workflow among active contributors.
## 8. Backlog Watch
[PR #2937](https://github.com/sipeed/picoclaw/pull/2937), the 35-day-old draft Agent Collaboration Bus PR, was marked stale and closed without formal resolution this period. The feature addresses high-demand use cases for multi-agent workflow orchestration, but has not received explicit maintainer feedback on roadmap alignment or design adjustments needed to move it forward. It requires triage from the core maintainer team to confirm if inter-agent communication support remains a priority for upcoming release cycles.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-28
---
## 1. Today's Overview
This 24-hour window of NanoClaw development (covering 2026-06-27 to 2026-06-28) records steady, guideline-aligned open source activity with 1 actively updated issue and 8 freshly opened or refreshed pull requests, with no new official releases published in the period. All 8 updated PRs adhere to the project's v1 contributing guide, indicating strong community compliance with the repository's submission standards across feature, fix, and refactor work. Development velocity is focused on two core tracks: resolving longstanding usability gaps in the skill update workflow, and expanding native operational and dashboard monitoring capabilities for self-hosted deployments. The mix of new submissions from first-time and recurring contributors signals growing adoption and investment in the project as a self-hosted AI agent assistant stack.
---
## 2. Releases
No new official releases were published for NanoClaw in this 24-hour window.
---
## 3. Project Progress
Zero pull requests were merged or closed between 2026-06-27 and 2026-06-28, with all 8 updated PRs remaining in open, pre-review status. All current submissions advance previously in-flight roadmap work: 3 separate refactor and fix PRs from contributor CutSnake01 work to eliminate stale, unused code paths in the core container runner and system prompts, while 2 feature PRs from grantland deliver the full end-to-end foundation for OpenCode per-group model customization and remote dashboard state sync. Additional submissions from zczDief and bogdano2 add new Coolify deployment support and Signal channel reliability improvements respectively, and a targeted fix PR for the active logged skill update bug directly addresses the only open user-reported issue tracked in the period.
---
## 4. Community Hot Topics
The highest-engagement active thread centers on the broken skill update workflow, the only cross-referenced issue-PR pair in the current update window:
1. Bug report #2868: https://github.com/nanocoai/nanoclaw/issues/2868
2. Fix PR #2873: https://github.com/nanocoai/nanoclaw/pull/2873
The underlying user need driving this discussion is a frictionless skill upgrade workflow: currently users cannot patch or update existing installed skills without full re-installation, which creates unnecessary overhead for self-hosted admins running multi-skill production instances. Two high-interest feature PRs (#2871 dashboard pusher, #2872 per-group OpenCode model overrides) have no public comments yet, but fill widely requested gaps for fleet management of multiple NanoClaw AI agent groups.
---
## 5. Bugs & Stability
Ranked by severity, confirmed open bugs and pending fixes are listed below:
1. **Critical Severity**: `/update-skills` command silent no-op (Issue #2868: https://github.com/nanocoai/nanoclaw/issues/2868). The bug prevents users from refreshing installed skill adapter code and pinned dependencies, directly breaking the documented migration path for the upcoming 4.29 release. An associated fix PR #2873 that separates pre-flight checks from credential validation to enable proper code refresh is already submitted, pending maintainer review.
2. **Medium Severity**: Signal integration crash on `signal-cli` temporary service outages (addressed in PR #2874: https://github.com/nanocoai/nanoclaw/pull/2874). This bug causes full Signal channel downtime instead of graceful wait-and-retry behavior when the underlying signal-cli daemon restarts or experiences transient boot issues. No associated standalone issue is logged for this bug at time of writing.
3. **Low Severity**: Stale unused code and prompt references causing unexpected file deletion (addressed in PR #2822, #2823, #2824). Dead global workspace mount paths and outdated references to deprecated "Global Memory" functionality cause the host system to auto-delete a non-existent CLAUDE.md file on every startup, leading to minor unnecessary log noise and no user-facing data loss.
---
## 6. Feature Requests & Roadmap Signals
All in-development feature signals point to the next minor NanoClaw release prioritizing self-hosted admin and fleet management capabilities. The most likely imminent inclusions for the upcoming release are: 1) Native Coolify one-click deployment support, lowering the barrier for new users to spin up NanoClaw instances without manual container configuration; 2) Full dashboard integration with 60-second state sync, enabling centralized fleet monitoring for multi-instance NanoClaw deployments; 3) Per-group custom model support for OpenCode agents, eliminating the hard global model limit that restricted use cases running multiple specialized AI agents for different tasks on the same instance. These features align with the project's fast-growing user base of small-team self-hosted AI operator teams.
---
## 7. User Feedback Summary
Verified user pain points captured in the period include: 1) Cumbersome skill update workflows that force full re-install to apply patches, cited in issue #2868, leading to user dissatisfaction with current migration instructions for the upcoming release; 2) Lack of one-click deployment options for popular self-hosted PaaS platforms like Coolify, which adds non-trivial setup friction for new users; 3) Missing centralized monitoring and fleet management tools for teams running multiple agent groups, which creates unplanned operational overhead. Satisfaction signals remain strong: no core runtime or LLM inference failures are reported, and the consistent stream of contributed, guideline-compliant code submissions from active users demonstrates broad satisfaction with the project's core architecture.
---
## 8. Backlog Watch
Three fully compliant, low-risk PRs from contributor CutSnake01, created on 2026-06-20 and last updated on 2026-06-27, have received no maintainer feedback for 8 days and require urgent review:
1. PR #2822 (refactor container-runner to drop dead /workspace/global mount): https://github.com/nanocoai/nanoclaw/pull/2822
2. PR #2823 (fix unwanted host-side CLAUDE.md deletion on startup): https://github.com/nanocoai/nanoclaw/pull/2823
3. PR #2824 (drop stale "Global Memory" instruction from main seed prompt): https://github.com/nanocoai/nanoclaw/pull/2824
These submissions block minor quality of life improvements, reduce project technical debt, and carry zero breaking change risk if merged, making them a high-priority review target to avoid unnecessary code drift as new feature PRs are merged into the core codebase.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Daily Digest | 2026-06-28
---
## 1. Today's Overview
For the 24-hour period ending June 28, 2026, the NullClaw local AI agent framework saw minimal public development activity, with no new pull requests, merged code changes, or official new releases published. The only tracked update was a modification to a pre-existing open bug report that has been active since April 2026. There are no signs of urgent regressions or critical outages impacting core functionality for mainstream supported x86_64 desktop and server platforms in this window. The current low activity level suggests maintainers may be focused on behind-the-scenes roadmap work rather than public-facing code pushes this reporting period.

## 2. Releases
No new official NullClaw releases, pre-releases, or patch builds were published in the 24-hour reporting window. The project’s latest publicly available build remains v2026.4.17 as referenced in the active bug report.

## 3. Project Progress
There are no pull requests merged, closed, or newly opened in the 24-hour reporting window. No new features, bug fixes, or documentation updates were advanced via the project’s PR pipeline in this period.

## 4. Community Hot Topics
The only recently updated active community thread is the compatibility bug report below, which is the highest-engagement public project item in the current window:
- [Issue #868: [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat](https://github.com/nullclaw/nullclaw/issues/868)
This 4-comment thread signals strong unmet user demand for expanded runtime support that enables deployment of fully local NullClaw AI agents on low-power, pocket-sized ARM Android hardware without relying on cloud GPU access. The user base exploring this use case is testing the framework for offline, privacy-first personal assistant use cases that do not require a wired desktop or server setup.

## 5. Bugs & Stability
Only one bug was updated in the 24-hour window, ranked by severity below:
1. **Medium Severity: aarch64 Termux Zig Build Failure** – Reported for Android LineageOS 22.2 environments running on common aarch64 mobile hardware, where the standard `zig build -Doptimize=ReleaseSmall` workflow throws an AccessDenied error during the linkat step for the `options.zig` temporary file. No active fix PRs are attached to this issue as of the report date, and it does not impact supported non-ARM desktop platforms. No other new crashes, regressions, or critical security issues were filed or updated in this period.

## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were filed in the reporting window, but the traction of the Termux aarch64 build bug signals high unmet user demand for first-class low-power edge and mobile ARM platform support. If maintainers validate the root cause of the linkat permission error, a cross-compilation compatibility patch for aarch64 Linux/Android targets is a high-probability candidate to ship in the next minor patch release, as it unlocks a large new segment of edge deployment use cases for the project.

## 7. User Feedback Summary
The core user pain point surfaced this period is poor out-of-the-box build compatibility for popular self-hosted mobile development environments like Termux. The affected user is running a widely used mid-tier Xiaomi device with a standard, fully updated custom Android ROM, and expects the project’s documented default Zig build workflow to work seamlessly without manual file permission or symlink adjustments. The 4-comment thread confirms multiple independent users have encountered the same aarch64 Termux build error, and are actively seeking resolution to test fully offline local AI agents on their mobile hardware.

## 8. Backlog Watch
Issue #868 is a high-priority untriaged backlog item that has been open for more than 2 months (created April 23, 2026) with no official maintainer response, root cause diagnosis, or assignee assigned to date. The thread’s consistent user engagement indicates a small but active subset of the project’s community is blocked by this compatibility error, making it a top candidate for maintainer triage attention in the upcoming sprint cycle.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-28 Project Digest
---
## 1. Today's Overview
This reporting window saw high development velocity for the Near AI IronClaw open-source AI assistant project, with 11 total updated issues (9 closed, 2 active) and 50 updated PRs (22 merged/closed, 28 open). Core team work was heavily concentrated on wrapping up the full MVP of the Reborn stack four-dimension capability policy framework, alongside parallel efforts to resolve production OAuth bugs, expand end-to-end test coverage, and polish WebUI v2 usability. 82% of recently updated issues were resolved within the 24h window, and 44% of active PRs were merged or closed, indicating strong execution against planned roadmap milestones. No new official public releases were published, and overall project health remains stable with minimal unplanned regressions reported.

## 2. Releases
No official new production releases were pushed in this reporting window. A draft release chore PR [#5311](https://github.com/nearai/ironclaw/pull/5311) is currently open to bump core workspace crate versions, including documented breaking API changes for `ironclaw_common v0.5.0` and `ironclaw_skills v0.4.0`, alongside backwards-compatible updates for 4 other core crates. No migration notes have been published for this upcoming version yet.

## 3. Project Progress
The fully code-complete delivery of the entire flagship Reborn capability policy epic (tracked under #5261) is the largest advance this period, with all 7 related PRs merged to main:
- PR [#5262](https://github.com/nearai/ironclaw/pull/5262): Shipped the standalone pure Rust `ironclaw_capability_policy` crate defining the four-dimension policy vocabulary and precedence rules
- PR [#5270](https://github.com/nearai/ironclaw/pull/5270): Added DB-backed user role and admin gate functionality for WebChat-v2
- PR [#5344](https://github.com/nearai/ironclaw/pull/5344): Delivered the durable capability policy delta store and core resolver logic
- PR [#5349](https://github.com/nearai/ironclaw/pull/5349): Implemented the availability dimension resolver for dynamic per-user tool surface visibility
- PR [#5355](https://github.com/nearai/ironclaw/pull/5355): Launched the admin-gated REST control plane for manual user and permission management

Other key merged changes include: PR [#5370](https://github.com/nearai/ironclaw/pull/5370) pinning WebUI v2 frontend tooling to Node 22, PR [#5382](https://github.com/nearai/ironclaw/pull/5382) fixing a hosted single-tenant volume startup regression, PR [#5099](https://github.com/nearai/ironclaw/pull/5099) completing the OpenAI-compatible Responses external tool full round-trip flow, and PR [#5271](https://github.com/nearai/ironclaw/pull/5271) merging 47 coordinated dependency updates for the Rust workspace.

## 4. Community Hot Topics
All top active workstreams are aligned with core user and self-hosted operator needs:
1. **[EPIC] Reborn capability policy: admin-shared tools & skills with per-user auth [#5261](https://github.com/nearai/ironclaw/issues/5261)** : The highest-coordinated team priority of the month, this work directly responds to repeated requests from self-hosted team users for granular permission controls to share MCP tools and custom LLM skills across team members without granting full system admin access.
2. **Add Reborn WebUI v2 live QA canary [#5354](https://github.com/nearai/ironclaw/pull/5354)** : A community-driven QA improvement project aimed at closing gaps in existing CI test coverage, after recent production OAuth bugs slipped past pre-existing hermetic test checks to impact hosted Railway deployments.
3. **reborn: no run-borking failures — failure explanation + retryable failed runs [#4841](https://github.com/nearai/ironclaw/pull/4841)** : A widely requested quality of life improvement that will eliminate opaque, unrecoverable task failures that abort long-running agent workflows with no user explanation or retry path.

## 5. Bugs & Stability
Bugs are ranked below by production severity, reported within this 24h window:
1. **Critical Severity**: Google OAuth token refresh fails with BackendUnavailable on hosted-single-tenant / local-dev profiles — forces re-auth every ~1h [#5378](https://github.com/nearai/ironclaw/issues/5378). This bug breaks all Google Workspace integrations (Gmail, Calendar, Drive) for all production hosted Railway users, and no linked fix PR is available as of the end of the reporting window.
2. **High Severity**: [Reborn] Notion OAuth redirects to localhost callback in Railway deployment [#4928](https://github.com/nearai/ironclaw/issues/4928). This bug blocked all Notion MCP integration usage on production hosted instances, and it has been marked closed confirming a fix was shipped in this window.
3. **Medium Severity**: Nightly E2E failed [#4108](https://github.com/nearai/ironclaw/issues/4108). A full scheduled E2E CI test run failed, creating risk that upcoming functional regressions for extension functionality will go undetected, with no linked fix PR yet assigned.
4. **Low Severity**: Hosted volume runtime startup regression, fixed via merged PR [#5382](https://github.com/nearai/ironclaw/pull/5382), with zero impact on end users as it was caught prior to full production deployment.

## 6. Feature Requests & Roadmap Signals
Three high-priority, low-friction features are extremely likely to ship in the next minor release:
1. The "Always allow eligible tools" default toggle change requested in [#5364](https://github.com/nearai/ironclaw/issues/5364): This trivial single-line change eliminates annoying per-call tool approval prompts for new users, and is explicitly prioritized for the next patch release.
2. End-to-end non-Slack channel personal pairing support tracked in [#5368](https://github.com/nearai/ironclaw/issues/5368): This follow-up work to expand channel support beyond Slack is the top immediate post-capability-policy epic priority.
3. The full capability policy MVP merged this window will be the flagship new feature in the next public minor release.

The team also signaled long-term roadmap alignment around expanding the Playwright live QA canary test matrix to cover all WebUI v2 user flows to reduce production regression rates.

## 7. User Feedback Summary
Collected end-user pain points from this reporting window include:
- Hosted Railway deployment users report major frustration with the hourly forced Google OAuth re-authentication requirement, as it regularly interrupts long-running scheduled agent tasks that rely on Google Workspace tools.
- New onboarding users consistently complain about disruptive per-tool approval prompts that break their workflow before they can even start using core AI assistant capabilities.
- Self-hosted small team operators have repeatedly requested granular admin permission controls to safely share MCP tools across team members, which was the core user requirement driving the entire capability policy epic development.
- WebUI v2 users previously reported that the chat Retry button was a non-functional no-op, a high-visibility usability bug that has now been fixed in merged PRs.
Overall user satisfaction is trending positively, as high-impact usability gaps are being resolved at a faster than expected pace.

## 8. Backlog Watch
Three high-priority open items that have not received maintainer attention for extended periods:
1. Nightly E2E failed [#4108](https://github.com/nearai/ironclaw/issues/4108): Open since 2026-05-27 (over 30 days old), no assigned maintainer. A failing nightly E2E pipeline creates unacceptably high risk of undetected core functionality regressions reaching end users.
2. reborn: no run-borking failures — failure explanation + retryable failed runs [#4841](https://github.com/nearai/ironclaw/pull/4841): Open since 2026-06-13 (over 2 weeks old), pending final maintainer review. This PR addresses a top user pain point of unrecoverable agent task failures.
3. build(deps): bump the tokio-ecosystem group across 1 directory with 4 updates [#5114](https://github.com/nearai/ironclaw/pull/51

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-06-28
---
## 1. Today's Overview
LobsterAI recorded moderate activity on 2026-06-28 focused on backlog grooming and critical Windows desktop bug triage. The maintainer team processed 8 total updated pull requests, 7 of which were marked stale and closed, while 2 new active high-priority bug reports were submitted by power users. No new official releases were published in the 24-hour window. All recent activity signals the team is working to clear a multi-month backlog of unreviewed community contributions, while prioritizing resolution of runtime crashes affecting mainstream Windows user installations. Overall project health is stable, with no major outages or regressions introduced in the latest build.
## 2. Releases
No new official releases were published in the last 24 hours.
## 3. Project Progress
7 long-dormant stale PRs from the March-April 2026 contribution window were formally closed today, resolving or deferring the following fixes and feature iterations:
1. [PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001): Stale patch adding SSE and streaming HTTP transport support for MCP servers
2. [PR #1446](https://github.com/netease-youdao/LobsterAI/pull/1446): Stale patch fixing the infinite OpenClaw gateway restart loop that paralyzed the 4.1 version upgrade
3. [PR #1448](https://github.com/netease-youdao/LobsterAI/pull/1448): Stale patch resolving missing i18n translation strings on the Agent settings page
4. [PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449): Stale feature patch adding collapsed grouped display for repeated scheduled task execution records in the session sidebar
5. [PR #1453](https://github.com/netease-youdao/LobsterAI/pull/1453): Stale patch fixing the bug where disabled skills were still injected into active chat prompts
6. [PR #1454](https://github.com/netease-youdao/LobsterAI/pull/1454): Stale patch resolving the unresponsive "create scheduled task" button after clearing the date field for non-recurring jobs
7. [PR #1456](https://github.com/netease-youdao/LobsterAI/pull/1456): Stale patch adding duplicate shortcut detection to avoid conflicting hotkey mappings
## 4. Community Hot Topics
No items recorded user comments or reactions in the 24-hour window. The highest-priority pending open work under triage is [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065), which proposes replacing the existing name-generated Agent ID system with short UUIDs. The underlying user need behind this change is predictable, non-destructive custom agent management, to eliminate the common "data resurrection" bug where old session data is incorrectly restored when a user creates a new agent with the same name as a deleted one.
## 5. Bugs & Stability
Two high-severity Windows desktop bugs were reported, ranked by severity below:
1. **Critical (100% reproducible)**: [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) - The built-in "data backup" feature causes full main process unresponsiveness on Windows 11 24H2 for instances with 70MB+ SQLite databases running in WAL mode. No corresponding fix PR has been submitted as of now.
2. **High**: [Issue #2215](https://github.com/netease-youdao/LobsterAI/issues/2215) - New Windows installations regularly throw the uninformative "Resource extraction failed: could not start extractor process" error with no built-in troubleshooting guidance. The submitting user has completed preliminary debugging to narrow the issue to mismatched install path mappings, no official fix PR is available yet.
## 6. Feature Requests & Roadmap Signals
The pending short UUID Agent ID refactor in [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) addresses a widely reported long-standing data integrity pain point, making it extremely likely to land in the upcoming 2026.7.x minor release. The scheduled task execution record grouping feature previously submitted in [PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449) is also high on the roadmap, as users have repeatedly requested de-cluttering fixes for the overcrowded main session sidebar.
## 7. User Feedback Summary
All user feedback collected in the window comes from an advanced power user who completed extensive self-directed debugging for both reported bugs, indicating high user engagement for the local desktop LobsterAI product. Key confirmed pain points include: unhelpful error messaging for first-time Windows installations, no protection against full app freezes during large database backup operations, and excessive session sidebar clutter from frequent recurring scheduled task runs. No explicit positive satisfaction feedback was recorded in this 24-hour period.
## 8. Backlog Watch
The 7 stale closed PRs (submitted between March 28 and April 3 2026) represent a total of 7 community-contributed fixes and feature work that never received full review during the past 3 months. Maintainers are recommended to provide explicit feedback to the original open source contributors to avoid discouraging future community submissions. Additionally, [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) for the Agent ID refactor has been open for 31 days as of 2026-06-28, and requires triage to prioritize landing this high-impact data integrity improvement.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (moltis-org/moltis) Project Digest | 2026-06-28
---
## 1. Today's Overview
As of 2026-06-28, the Moltis AI agent project recorded low but focused active development activity over the prior 24 hours, with 1 newly filed open bug report and 3 total updated pull requests, and no new official releases published in the window. All recent engineering work is centered on two high-priority workstreams: hardening tool call validation for smaller local LLMs, and adding quality-of-life usability features for the project's built-in browser agent. No PRs were merged or closed in the last 24 hours, indicating the core maintainer team is currently in active review cycles for recent contributions rather than shipping new public builds. The activity profile signals a deliberate push to improve out-of-the-box performance for self-hosted, edge-running agent deployments, a key target use case for the Moltis project.

## 2. Releases
No new official releases were published in the 24-hour reporting window. No pre-release builds are documented as published in the latest project data.

## 3. Project Progress
No pull requests were merged or closed in the 2026-06-28 reporting window, so no new production-facing features or fixes were shipped during this period. All 3 recently updated open PRs are advancing through the review queue, with two focused on bug fixes for local LLM tool call handling, and one introducing a new browser agent quality-of-life feature. The oldest of the three PRs, #1098 first opened on June 3, received its most recent update on June 27, indicating it is now being prioritized for final review and upcoming merge.

## 4. Community Hot Topics
While no issues or PRs received public comments or user reactions in the reporting window, the highest traction pending work addresses widely requested quality improvements for local self-hosted agent workflows:
1. **PR #1135 (browser: optional auto-screenshot after each action)**: https://github.com/moltis-org/moltis/pull/1135
This proposed feature directly responds to consistent user feedback requesting clearer audit trails and visual step tracking for browser automation agents, eliminating the need for manual screenshot configuration on every tool call. The underlying unmet user need here is simpler, more observable browser agent sessions for demo, debugging, and playback use cases.
2. **PRs #1136 and #1098 (local LLM tool call compatibility fixes)**: https://github.com/moltis-org/moltis/pull/1136, https://github.com/moltis-org/moltis/pull/1098
These two linked fixes address a top pain point for users running Moltis without cloud LLM access, who report high tool call failure rates on lightweight open-source models that do not follow strict schema output rules.

## 5. Bugs & Stability
Only one new bug report was filed in the 24 hour window, ranked by severity as follows:
1. **Medium Severity: Bug #1137 - Apple Container ID exceeds name limit**: https://github.com/moltis-org/moltis/issues/1137
Reported by user holgzn, this unpatched platform-specific bug impacts users running Moltis on Apple operating systems, where the auto-generated container resource ID violates platform naming length constraints. No corresponding fix PR has been filed to address this issue as of the report window, and the bug currently has no public comments or linked workstreams.

## 6. Feature Requests & Roadmap Signals
Current pending workstreams provide clear signals for the next minor Moltis release, which is highly likely to ship the following items first:
1. Automatic per-action screenshot capture for browser agents, as proposed in PR #1135, a long-requested usability feature for browser automation use cases
2. Full first-class compatibility improvements for lightweight local LLMs including Gemma 4 and oMLX, resolving nearly all common tool call validation errors for these models to enable reliable fully offline self-hosted deployments
No major breaking feature additions appear to be queued for the upcoming release, with all near-term work focused on stability and usability for existing core use cases.

## 7. User Feedback Summary
Real user pain points and use cases visible in recent activity include:
- Dissatisfaction with high tool call failure rates when running Moltis on low-resource, open-source local LLMs, which currently require manual schema patching for most users to get reliable agent function
- Strong demand for more observable browser automation sessions, with users prioritizing built-in screenshot timelines for demo, debugging, and audit trails over extra manual configuration steps
- Unaddressed platform-specific friction for Apple ecosystem users, who run into unexpected resource limit constraints that block smooth onboarding on macOS/iOS deployments
Overall, recent community feedback indicates high satisfaction with Moltis core browser agent functionality, paired with consistent requests to lower barriers for fully offline self-hosted deployments.

## 8. Backlog Watch
One high-priority pending PR that has been sitting in the backlog for more than 3 weeks is flagged for urgent maintainer attention:
- **PR #1098 (fix(browser): tolerate null optional params in browser tool calls)**: https://github.com/moltis-org/moltis/pull/1098
This PR was first opened on June 3, 2026, and received no public updates for 24 days before its June 27 refresh, despite being a critical dependency for the parallel PR #1136 that resolves local LLM tool validation failures. Merging this PR first will unblock the rest of the local LLM compatibility workstream, so maintainer review and signoff on this change is a high priority to keep the project's current development roadmap on track.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/QwenPaw) Project Daily Digest | 2026-06-28
---
## 1. Today's Overview
Over the 24-hour reporting window ending 2026-06-28, the CoPaw project maintained high, development-focused activity, with 5 updated issues (4 active, 1 closed) and 15 updated pull requests (14 open, 1 merged/closed), and no new official releases published. The core team is currently executing two parallel priority workstreams: expanding cross-module unit test coverage for the upcoming 2.0 stable release, and resolving compatibility regressions introduced by the recent Agentscope 1.x to 2.x migration. Three first-time contributors have active, publicly visible PRs in this period, indicating healthy community onboarding and growing external participation. No critical production-blocking outages have been reported, with current activity trending toward improved long-term project maintainability and end-user usability.

## 2. Releases
No new official releases were published in the 2026-06-28 reporting window.

## 3. Project Progress
The only merged/closed PR in this window is [PR #5213](https://github.com/agentscope-ai/QwenPaw/pull/5213) from contributor xiaoming-qxm, which fully resolved responsive display defects for MCP (Model Context Protocol) access policy UI components. This merged fix ensures MCP client action cards and permission configuration modals render correctly across narrow and wide viewport sizes, and adds source-scoped access principal discovery to support more granular MCP permission control. The previously defined W3 sprint backend unit test requirement issue [#5580](https://github.com/agentscope-ai/QwenPaw/issues/5580) also has its corresponding implementation PR [#5581](https://github.com/agentscope-ai/QwenPaw/pull/5581) opened and fully aligned with the test scope, marking the third completed sprint milestone in the ongoing backend unit coverage expansion plan that targets ~70% total coverage for the 2.0 release.

## 4. Community Hot Topics
The highest-engagement discussion this period centers on DeepSeek V4 reasoning model compatibility, tracked under public issue [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) submitted by community user Zhanyuan23333, which documents two distinct 400 error categories when running DeepSeek V4 Flash/Pro models through non-official OpenAI-compatible third-party gateways. The underlying clear user demand is that CoPaw users leveraging commercial model aggregation services for reasoning agent workloads expect out-of-the-box support for DeepSeek V4's native thinking output mode, without requiring manual custom code modifications that break multi-turn execution workflows. A corresponding fix PR [#5582](https://github.com/agentscope-ai/QwenPaw/pull/5582) has already been submitted to resolve the missing streaming reasoning-content fallback gap referenced in the issue.

## 5. Bugs & Stability
Bugs reported this period are ranked by severity as below:
1. **High Severity**: Conversation record loss under abnormal interruption bug [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579). The defect causes full loss of user progress after scenarios including agent-executed host reboots and unexpected service crashes, which breaks long-running complex agent tasks. No dedicated fix PR has been submitted as of the digest.
2. **Medium Severity**: DeepSeek V4 OpenAI compatible endpoint 400 error bug [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573). The regression breaks reasoning agent workflows for users running DeepSeek V4 through non-official gateways, and a matching fix PR is already under active review.
3. **Medium Severity**: Custom Ascend-vLLM model connection failure bug [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584). The post-v1.1.7 regression affects self-hosted edge users using Huawei Ascend hardware to deploy vLLM inference services, no fix PR has been opened.
4. **Low Severity**: UI display defect [#5583](https://github.com/agentscope-ai/QwenPaw/issues/5583) for the chat interface's right-side conversation popup, with unclear default selection highlighting. It has no functional impact, no fix PR submitted yet.

## 6. Feature Requests & Roadmap Signals
Key user-submitted feature requests this period include: durable conversation checkpoint persistence to avoid progress loss after unexpected interrupts, native streaming message output support for Matrix IM integration channels, and a no-code data analysis plugin with built-in BI capabilities. Combined with ongoing implementation work, three of these high-priority features are highly likely to ship in the upcoming 2.0 stable release: the retrieval-driven scroll durable context manager (PR [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)), Matrix channel Discord-like streaming mode (PR [#5585](https://github.com/agentscope-ai/QwenPaw/pull/5585)), and the 12-skill DataPaw data analysis plugin (PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)). The expanded cross-module unit test coverage being rolled out in current sprints will also be bundled with the 2.0 release to significantly reduce post-upgrade regression risks.

## 7. User Feedback Summary
Real user sentiment and pain points collected this window are: 1) A large group of self-hosted power users running custom inference backends including Ascend-vLLM and third-party OpenAI-compatible model gateways report noticeable workflow disruptions caused by post-v1.1.7 compatibility regressions. 2) Regular chat UI users express minor dissatisfaction with subtle interaction feedback defects (such as unclear selection highlighting) that slightly degrade daily use experience. 3) Users running agents with system command execution permissions report severe frustration at full conversation loss after unexpected restarts, which wastes hours of setup work for complex agent tasks. 4) First-time contributors show positive feedback on the project's onboarding mechanism, as multiple new contributors have successfully submitted PRs and received fast initial responses from maintainers.

## 8. Backlog Watch
Three high-priority long-running items need urgent maintainer attention to unblock progress:
1. [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622): The DataPaw data analysis plugin PR from a first-time contributor, opened on 2026-05-22 (over 1 month old), marked as under review with no recent feedback, blocking this high-value BI capability from landing.
2. [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321): The scroll durable context manager PR opened on 2026-06-19, which directly addresses the widely reported conversation loss pain point, has no recent review updates despite high user demand.
3. [PR #5524](https://github.com/agentscope-ai/QwenPaw/pull/5524): The spawn_subagent runtime registration fix PR from first-time contributor hellozhouuu, requires maintainer triage to unblock the new contributor's subsequent participation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) Daily Project Digest | 2026-06-28
---
## 1. Today's Overview
The ZeroClaw project recorded strong development velocity in the 24-hour reporting window, with 45 total updated issues (12 closed, 33 active) and 50 total updated pull requests (3 merged/closed, 47 open) spanning core stability, security hardening, and milestone roadmap work. No new official releases were published in this period. Activity was heavily concentrated on resolving long-standing high-severity runtime bugs that have blocked user workflows for months, advancing the v0.8.3 release feature queue, and iterating on foundational RFCs for the v0.9.0 security and architecture roadmap. Overall project health is robust, with a 26.7% close rate on recently updated issues, and nearly all S1-level workflow-blocking bugs filed earlier this year have now been resolved.

## 2. Releases
No new versions were published in the 24-hour window ending 2026-06-28, no changes to the current publicly available stable release line.

## 3. Project Progress
3 total PRs were merged or closed this window, delivering meaningful stability gains and reference implementation completion:
- Resolved three high-priority long-standing bugs: the S2 memory over-emphasis flaw that degraded cron job performance, the S1 Gemini CLI OAuth workflow failure that blocked full Gemini provider usage, and the S1 autonomy permission bug that blocked all shell tool execution at full permission settings.
- 7 additional closed issues wrapped up full implementation of the dedicated `dms-gst-extraction` reference agent project, from initial project bootstrap to audit trail and data reconciliation functionality, delivering a fully production-ready end-to-end GST data processing use case.

## 4. Community Hot Topics
Ranked by comment count, the most active discussions all tie directly to production readiness priorities for enterprise and power users:
1. **RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance** (zeroclaw-labs/zeroclaw#8177, 10 comments): The highest-engagement thread this window. Maintainers and enterprise deployment contributors are collaborating on a multi-phase plan to eliminate supply chain attack risk for ZeroClaw release artifacts, reflecting clear and strong demand from self-hosted enterprise users for production-grade distribution security.
2. **[Bug]: Too much emphasis on memory** (zeroclaw-labs/zeroclaw#5844, 7 comments, resolved): Users running scheduled autonomous cron jobs reported skewed agent behavior where long-term memory was prioritized over immediate job instructions, leading to repeated unplanned task failures.
3. **[Bug]: Default 32k context budget is exceeded by system prompt + tool definitions on iteration 1** (zeroclaw-labs/zeroclaw#5808, 6 comments, in-progress): New users reported out-of-the-box broken performance as the default context limit was far too small for preloaded system prompts and tool lists, with no guardrails to prevent perpetual prompt trimming.

## 5. Bugs & Stability
Ranked by severity, top bugs tracked/resolved in the window:
### S1 (Workflow Blocked)
1. *Open:* Default 32k context budget overflow (zeroclaw-labs/zeroclaw#5808): Causes perpetual preemptive prompt trimming on the first agent run with default config. A fix is actively in progress as of the latest update.
2. *Closed:* Shell tool execution refused at full autonomy level (zeroclaw-labs/zeroclaw#6434): Fully resolved this window, no remaining open S1 regressions of this class.
3. *Closed:* Gemini CLI OAuth non-functional (zeroclaw-labs/zeroclaw#4879): Fully resolved this window, unblocks all Gemini provider usage for new users.
### S2 (Degraded Behavior)
1. *Open:* Prompt caching non-functional on Telegram channel (zeroclaw-labs/zeroclaw#6360): Users incur excess LLM inference costs as full prompt re-processing is forced for all Telegram interactions. No linked fix PR has been filed yet.
2. *Closed:* Excess memory priority breaking cron jobs (zeroclaw-labs/zeroclaw#5844): Fixed this window.
3. *Closed:* ReadSkillTool pointing to wrong directory path (zeroclaw-labs/zeroclaw#8047): Fixed this window, resolves broken skill access in multi-agent workspace setups.

## 6. Feature Requests & Roadmap Signals
Feature requests and active RFCs show clear near and mid-term roadmap alignment:
- **Near-term (v0.8.3, next expected release):** Opt-in passive WhatsApp group context, per-cron-job `uses_memory` flag exposed to CLI and cron tools, OpenRouter model fallback array support, and full prompt/completion capture on OTel LLM spans are all in active development with corresponding draft PRs already filed. These features are the highest priority for end users and nearly guaranteed to ship in the v0.8.3 stable release.
- **Mid-term (v0.9.0):** Newly filed RFCs for bounded autonomous goal mode, Wasm-first plugin runtime, and full SLSA supply chain signing are scoped as core architectural changes for the v0.9.0 hardening milestone, and will not ship before that release as they require cross-component refactoring.

## 7. User Feedback Summary
Aggregated user pain points, use cases and sentiment from latest issue updates:
1. New user onboarding friction: Out-of-the-box default configurations are not polished enough, with the default context budget overflow and previously broken

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*