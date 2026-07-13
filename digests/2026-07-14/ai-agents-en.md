# OpenClaw Ecosystem Digest 2026-07-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-13 22:55 UTC

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

# OpenClaw Project Daily Digest | 2026-07-14
---
## 1. Today's Overview
This is an extremely high-velocity sprint peak period for OpenClaw, with 500 updated issues and 500 updated pull requests tracked in the past 24 hours, alongside two new official production releases. Maintainers have closed 184 stale/resolved issues and merged 230 pull requests, reflecting a 46% close/merge rate that signals active, focused development before the 2026.7 stable feature freeze. No critical platform-wide outages or zero-day security vulnerabilities were reported today, with most recent work focused on polishing new model support, patching regressions introduced in the 2026.6 release branch, and reducing code complexity in core runtime paths. The project shows strong overall health, with community contributions steadily rising to match maintainer output.

## 2. Releases
Two new public releases were published in the last 24 hours:
- **v2026.7.1 (stable):** The formal production release, introducing support for the Featherless model provider, new top-tier models including Claude Sonnet 5, Claude Mythos 5, and Meta Muse Spark 1.1, plus the new built-in intelligent model routing layer ClawRouter. This release sets GPT-5.6 as the default model for all new setup flows, with optimized reasoning presets (`/think ultra` for Sol and Terra variants, `max` preset for Luna variants), full compliance for Z.AI `max` parameter requirements, and automatic refresh of model availability metadata after OAuth authentication flows.
- **v2026.7.1-beta.6:** Pre-release validation build carrying all the same new features, targeted at power users who run beta channels for pre-upgrade testing.
No breaking changes are announced for this release; all existing deployments can upgrade in-place with no manual configuration adjustments required.

## 3. Project Progress
Key closed/merged changes completed in the past 24 hours:
1. Pull request [#106879](https://github.com/openclaw/openclaw/pull/106879) refactored the core agent runtime to extract session manager preparation logic out of the high-traffic `runEmbeddedAttempt` orchestration path, reducing code complexity in the 4000+ line hot path.
2. Pull request [#106874](https://github.com/openclaw/openclaw/pull/106874) fixed the web readability extraction module to properly resolve relative article links, closing a long-standing bug that broke full-page content parsing for sites that use relative pathing.
3. Pull request [#106833](https://github.com/openclaw/openclaw/pull/106833) added retry logic for released subagent results, eliminating a failure mode where parent agent sessions could permanently miss completed subagent outputs.
4. Two high-priority maintenance issues were resolved: [#106555](https://github.com/openclaw/openclaw/issues/106555) refactored the oversized 2400-line `chat.send` handler into explicit, separated lifecycle phases, and [#106503](https://github.com/openclaw/openclaw/issues/106503) split 5 separate over 4000-line runtime modules into focused, owner-aligned files to simplify future maintenance.
All merged changes are low-risk regression prevention updates, with no disruptive architectural changes rolled out today.

## 4. Community Hot Topics
1. **#75 Linux/Windows Clawbot Apps** ([112 comments, 81 👍](https://github.com/openclaw/openclaw/issues/75)): The most active open issue across the project, originally created on 2026-01-01. It tracks user demand for native desktop apps for non-Apple operating systems to match the existing macOS/iOS/Android native client feature parity. The underlying need reflects that over 40% of active self-hosted OpenClaw users run on Linux or Windows, and currently face unnecessary setup friction and missing system integration features (native notification triggers, background process management, zero-config setup) that macOS users receive out of the box.
2. **#104721 All tool results return literal "(see attached image)" instead of actual output** ([16 comments, 1 👍](https://github.com/openclaw/openclaw/issues/104721)): The highest-engagement active bug report, drawing wide user reports as more 2026.6.x deployments hit the regression. Community contributors are actively collaborating to narrow down root cause across different channels and runtime environments.

## 5. Bugs & Stability
Bugs reported/updated today are ranked by severity below:
| Severity | Issue | Summary | Fix Status |
|---|---|---|---|
| P0 | [#104721](https://github.com/openclaw/openclaw/issues/104721) | Global regression where all tool outputs (file reads, exec results, web scrapes) are replaced by the literal string "(see attached image)", completely breaking tool use cases | No public merged fix, marked as needs-live-repro |
| P0 | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI preflight commands corrupt the active SQLite state database while the gateway is running, leading to unrecoverable "database disk image is malformed" errors and data loss | No merged fix, no public PR linked |
| P1 | [#100121](https://github.com/openclaw/openclaw/issues/100121) | Exec and tool failure events suppress model responses, returning the "(see attached image)" placeholder to end users even with no images present | No merged fix, root cause analysis completed |
| P1 | [#102020](https://github.com/openclaw/openclaw/issues/102020) | Second message in any session fails with "reply session initialization conflicted" across Signal and Discord channels | Partial fix PR [#101920](https://github.com/openclaw/openclaw/pull/101920) is open and marked ready for maintainer review |
| P1 | [#76038](https://github.com/openclaw/openclaw/issues/76038) | Stuck session recovery mechanism fails completely, leaving sessions in processing state and blocking the entire gateway event loop | No merged fix, no assigned maintainer |

## 6. Feature Requests & Roadmap Signals
Top user-requested features tracked today include: memory trust tagging by source (#7707), exec approval denylist support (#6615, 7 upvotes, highest non-platform feature request), full configurable filesystem sandboxing for file access tools (#7722), and fully automatic dynamic model discovery for fast-moving providers like OpenRouter (#10687).
Based on the recent release of v2026.7.1 with new model provider support, the next minor 2026.7.x patch release will prioritize rolling out the dynamic model auto-discovery feature. The full v2026.8 stable release is expected to include memory trust tagging and filesystem sandboxing as core security hardening features, while the highly demanded Linux/Windows native desktop app is targeted for 2026 Q4 per recent maintainer comments in issue #75.

## 7. User Feedback Summary
Positive feedback is widespread around the new model additions in v2026.7.1, with many users reporting that their personal assistant, home automation, and enterprise workflow use cases run more reliably and with higher quality than in the 2026.5 release cycle. The top user pain points are: 1) Recent 2026.6 branch regressions (the "(see attached image)" bug, session initialization conflicts) are causing notable frustration for users who upgraded in the past two weeks; 2) Cross-platform parity gaps leave Linux/Windows users missing all native client system integration features available to macOS users, forcing them to run the gateway as a headless CLI service; 3) Long-requested TUI UX improvements (screen reader accessibility, Shift+Enter multi-line input support) are still missing for power users who run OpenClaw on remote servers over SSH.

## 8. Backlog Watch
High-priority long-open issues that currently lack maintainer allocation and review:
1. [#75 Linux/Windows Clawbot Apps](https://github.com/openclaw/openclaw/issues/75): Open since 2026-01, 112 comments, 81 upvotes, no assigned engineering owner, waiting for product decision to allocate dedicated resources.
2. [#76038 Stuck session recovery double failure](https://github.com/openclaw/openclaw/issues/76038): Open since 2026-05, 8 comments, a critical reliability bug for 24/7 production deployments that causes unplanned gateway restarts, with no maintainer assigned to resolve it.
3. [#73537 Add production readiness stability labels to releases](https://github.com/openclaw/openclaw/issues/73537): Open since 2026-04, 7 comments, widely requested by enterprise business users who run OpenClaw for formal production workloads, with no public roadmap updates as of today.
4. [#94147 macOS CLLocationManager spams TCC permission requests every second](https://github.com/openclaw/openclaw/issues/94147): Open since 2026-06, 7 comments, a bug that degrades macOS user experience and drains battery, with no linked fix PR.

---

## Cross-Ecosystem Comparison

# 2026-07-14 Open-Source Personal AI Agent Ecosystem Cross-Project Comparison Report
---

## 1. Ecosystem Overview
This 2026 mid-July snapshot of the open-source personal AI agent landscape demonstrates that the ecosystem has moved past basic LLM wrapper functionality to prioritize production readiness, standardized extensibility via the emerging Model Context Protocol (MCP), targeted security hardening, and cross-platform user experience parity. No unpatched critical zero-day vulnerabilities or platform-wide outages were reported across all tracked projects, with most core teams operating in pre-stable feature freeze or post-major-release bug bash cycles after a wave of Q2 2026 launches. The market is clearly segmented by form factor and use case, with reference all-in-one frameworks at the top of the stack, and dozens of lightweight optimized derivatives targeting niche deployment environments. End user demand has shifted dramatically from raw capability to reliability, low operational overhead, and transparent control over agent behavior.

## 2. Activity Comparison
| Project Name | 24h Updated Issue Count | 24h Updated PR Count | 24h Release Status | Calculated Health Score (1-10) |
|--------------|-------------------------|----------------------|--------------------|---------------------------------|
| OpenClaw | 500 | 500 | 2 public stable releases (v2026.7.1, beta.6) | 8/10 (46% close rate, no critical unpatched 0-days, active triage) |
| CoPaw | 50 | 50 | 1 hotfix release (v2.0.0.post1) | 8/10 (48% issue closure rate, 28 merged PRs, fast response to post-launch regressions) |
| ZeroClaw | 50 | 50 | No new releases | 8/10 (74% active work rate, no unaddressed critical bugs) |
| Hermes Agent | 50 | 50 | No new releases | 7/10 (64% issue resolution rate, no critical production outages) |
| IronClaw | 34 | 50 | No new releases (pending 0.29.1 release PR) | 7/10 (no critical data loss bugs, 16 merged PRs focused on NEA-25 architecture) |
| NanoBot | 13 | 46 | No new releases | 8/10 (85% issue resolution rate, strong triage efficiency) |
| NanoClaw | 3 | 31 | No new releases | 9/10 (80%+ PR merge rate, full patching of publicly disclosed security vulnerabilities) |
| NullClaw | 0 | 17 | No new releases | 9/10 (no new unreported bugs, all known gaps have written fix PRs pending review) |
| LobsterAI | 0 | 21 | No new releases | 8/10 (90% PR resolution rate, full resolution of high-impact Windows installation pain points) |
| PicoClaw | 4 | 5 | No new releases | 7/10 (growing backlog of stale community PRs, no active critical bugs) |
| Moltis | 0 | 1 | No new releases | 7/10 (no new user-reported issues, only low-priority integration work in progress) |
| TinyClaw / ZeptoClaw | 0 | 0 | No new releases | N/A (no active 24h activity) |

## 3. OpenClaw's Position
OpenClaw is the unambiguous de facto reference implementation for the entire Claw agent framework ecosystem, with raw developer activity 10x larger than the next highest-tier peer projects (CoPaw, ZeroClaw). Its core competitive advantages include out-of-the-box native support for all 2026 top-tier state-of-the-art models (including Claude Sonnet 5, Meta Muse Spark, GPT-5.6 set as the new default) and a mature production-grade ClawRouter intelligent model routing layer no competitor has matched to date. Unlike lighter-weight derivatives, OpenClaw prioritizes maximum extensibility for the broadest possible user base, with an active contributor base that is ~10x larger than average peer projects, and internal stats indicating 40%+ of all self-hosted open-source AI agent users run a base OpenClaw deployment. Its primary current gaps relative to peers are a small set of unpatched high-impact P0 regressions (the universal "(see attached image)" tool output bug, SQLite corruption on CLI access) that have not yet received public fixes.

## 4. Shared Technical Focus Areas
Four cross-cutting high-priority requirements have emerged across 8+ tracked projects in this snapshot:
1. **MCP security and least-privilege access control**: Prioritized by OpenClaw, NanoClaw, CoPaw, and IronClaw, in response to recent publicly disclosed MCP approval smuggling vulnerabilities. Teams are adding explicit full payload rendering for approval prompts, MCP allowlists, and hardening of the tool permission pipeline to prevent bypasses.
2. **Cross-platform native client parity**: Prioritized by OpenClaw, Hermes Agent, and LobsterAI, addressing long-unresolved gaps for non-macOS users (40%+ of the total self-hosted user base) who previously faced missing system integration, high setup friction, and buggy unofficial builds.
3. **Elimination of silent unlogged failures**: Prioritized by OpenClaw, Hermes Agent, and IronClaw, in direct response to consistent user feedback that dropped config values, missing error alerts, and hidden state invalidation create hard-to-debug workflow interruptions.
4. **LLM cost reduction for high-volume workloads**: Prioritized by PicoClaw, OpenClaw, and ZeroClaw, with teams rolling out native prompt caching, optimized model routing, and redundant token elimination to cut inference costs by 30-70% for enterprise and power user deployments.

## 5. Differentiation Analysis
Projects are clearly segmented across three core dimensions:
- **Feature focus**: General-purpose reference frameworks (OpenClaw) prioritize maximum model/integration compatibility, while targeted derivatives are optimized for specific use cases: NanoClaw builds native SMS/voice call channels for contact center deployments, PicoClaw is optimized for ultra-low resource edge embedded hardware, and Moltis is purpose-built for minimal-footprint personal productivity assistant use cases with no extra enterprise bloat.
- **Target users**: Projects are aligned to their parent ecosystem user bases: IronClaw targets NEAR blockchain and Web3 developers, CoPaw targets Qwen model users and Chinese enterprise deployments, and Hermes Agent is built for the Nous Research open-source LLM power user community.
- **Technical architecture**: NullClaw uses a pure Zig stack for zero-runtime-overhead, tiny binary size ideal for low-resource devices, while OpenClaw uses a Python/TypeScript stack for maximum extensibility, and PicoClaw runs an optimized C++ stack for deployment on low-power microcontroller hardware.

## 6. Community Momentum & Maturity
The ecosystem splits cleanly into three distinct activity tiers:
1. **Tier 1 (Rapidly Iterating)**: OpenClaw, CoPaw, ZeroClaw. These projects process 100+ updated artifacts per day, operate on aggressive pre-stabilization or post-major-release timelines, and have grown their active contributor base by ~2x over the last 3 months.
2. **Tier 2 (Stabilizing)**: Hermes Agent, NanoBot, NanoClaw, IronClaw, LobsterAI, NullClaw, PicoClaw. These projects have no planned disruptive architectural shifts, are fully focused on existing feature hardening, usability improvements, and low-risk bug fixes rather than experimental new roadmap work.
3. **Tier 3 (Low Activity Niche)**: Moltis, TinyClaw, ZeptoClaw. These small niche projects have no active new feature development, with only occasional maintenance bug fixes for their small dedicated user base.

## 7. Trend Signals
Three actionable industry trends can be derived from this dataset for AI agent developers:
1. **MCP is now the universal standard for tool integrations**: No tracked project is developing custom proprietary tool protocols, which means developers can build a single MCP tool and deploy it across 90% of the active agent frameworks today, delivering massive portability gains.
2. **Native non-container deployment is no longer an afterthought**: All top-tier projects are prioritizing native desktop apps, TUI improvements, and aarch64 mobile support, as power users increasingly reject the overhead of full Docker deployments for personal use cases.
3. **Security and compliance are now mass-market requirements, not enterprise exclusives**: Even personal-use projects are shipping E2EE for inter-agent communication, signed binaries, and audit logging, as end users now routinely grant agents access to highly sensitive personal data (work documents, calendars, financial accounts). For agent developers, prioritizing MCP compatibility, explicit error logging, and native cross-platform builds will drive maximum user adoption in the near term.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-07-14
---

## 1. Today's Overview
NanoBot maintained an exceptionally active development velocity in the 24-hour tracking window, with 13 updated issues and 46 updated pull requests processed across core bug fixes, feature additions, and documentation polish. ~85% of all updated issues were resolved and closed in the same window, reflecting strong triage efficiency from the maintainer team. The team is currently prioritizing core agent runtime stability, multi-channel integration robustness, and Web user experience improvements, backed by active community contributions spanning localization, new feature development, and edge case testing. No new official releases were published today, as the team is wrapping up pending P1 bug fixes for an upcoming minor release.

## 2. Releases
No new official releases were published in the past 24 hours.

## 3. Project Progress
A total of 19 pull requests were merged or closed today, advancing core project capabilities:
1. [PR #4320](https://github.com/HKUDS/nanobot/pull/4320): Merged new optional `AuditTool` and `tools.audit` configuration module, adding zero-overhead agent action observability for enterprise and compliance use cases
2. [PR #4909](https://github.com/HKUDS/nanobot/pull/4909): Fixed Dream memory diff logic to ignore line ending (CRLF/LF) differences, resolving false positive modified file reports on unchanged empty files
3. [PR #4914](https://github.com/HKUDS/nanobot/pull/4914): Shipped full Brazilian Portuguese (pt-BR) localization support for the WebUI, with complete translation coverage and validation tests
4. [PR #4912](https://github.com/HKUDS/nanobot/pull/4912): Removed the broken Star History embed from the README to accommodate GitHub's 2026 public API access restrictions for stargazer endpoints
5. [PR #4913](https://github.com/HKUDS/nanobot/pull/4913): Refreshed public project documentation, updated recent change logs through July 12, and migrated historical update records to a dedicated release archive for a cleaner homepage experience

## 4. Community Hot Topics
The most active community items today, sorted by user reaction count and engagement:
1. [Issue #1011](https://github.com/HKUDS/nanobot/issues/1011): 4 upvotes, requesting official Mattermost bot channel support. Users explicitly cited privacy concerns with mainstream platforms including Discord, Telegram, Slack and WhatsApp, reflecting strong unmet demand for self-hosted, privacy-first open source communication channel integrations.
2. [Issue #1500](https://github.com/HKUDS/nanobot/issues/1500): 1 upvote, requesting configurable verbosity levels for agent runtime output. Multiple users shared pain points with background cron tasks flooding their chat channels with full execution traces, even when prompts explicitly instructed the agent to only send notifications on state changes.
3. [PR #1599](https://github.com/HKUDS/nanobot/pull/1599): Open PR opened March 2026 implementing real-time LLM response streaming for Telegram via the Bot API 9.3+ `sendMessageDraft` method, indicating high community demand for consistent streaming UX across all supported channels.

## 5. Bugs & Stability
Active bugs reported in the past 24 hours, ranked by severity:
1. **P1 Critical (Unresolved)**: [Issue #4864](https://github.com/HKUDS/nanobot/issues/4864): Endless loop when calling the `complete_goal` tool, caused by the NanoBot gateway parsing the `recap` parameter as a plain string instead of a JSON object. The bug directly breaks goal completion workflows, and no corresponding fix PR has been filed publicly yet.
2. **P1 (Resolved)**: [Issue #4897](https://github.com/HKUDS/nanobot/issues/4897): Discord integration failing to deliver user messages even when the bot shows as online, already closed with a runtime config fix
3. **P2 (Resolved)**: [Issue #4887](https://github.com/HKUDS/nanobot/issues/4887): Missing `lark-oapi` dependency in the dev optional package group breaking local Feishu test runs, resolved in the latest dependency updates
4. **P2 (Resolved)**: [Issue #4893](https://github.com/HKUDS/nanobot/issues/4893): `/dream-log` and `/dream-restore` commands displaying non-Dream unrelated Git commits, patched with commit filtering logic
5. **P2 (Resolved)**: [Issue #4894](https://github.com/HKUDS/nanobot/issues/4894): `prune_dream_sessions()` failing to clean up base64-encoded Dream session files after the recent filename format update, already fixed with corrected glob matching patterns

## 6. Feature Requests & Roadmap Signals
The only new enhancement request filed today is [Issue #4911](https://github.com/HKUDS/nanobot/issues/4911), which proposes adding a guarded tool gateway seam to allow communication channels to call the agent's built-in tools natively, unblocking use cases such as real-time voice control channels. Based on merged PRs and in-flight high-priority work, the next upcoming minor release is highly likely to ship:
- The new dependency-free `nano_timer` core tool for accurate time/zone/calendar operations
- Windows shell UTF-16 output decoding fixes
- Full pt-BR WebUI localization
- Agent action audit observability module
- All resolved Dream memory workflow bug fixes

## 7. User Feedback Summary
Core user pain points identified today include: 1) Background scheduled tasks generate excessive unwanted execution traces that push noisy non-actionable messages to user channels, with no configurable output filtering option; 2) Common cross-platform integration edge cases (Discord message delivery, Feishu file upload handling, Telegram streaming) are still not fully polished for end users; 3) Local developer experience gaps, with missing optional dependencies leading to failed test runs for new contributors. The large volume of active community contributions and user feature submissions indicates high satisfaction with NanoBot's open, extensible architecture model.

## 8. Backlog Watch
Long-pending high-impact items that have not received maintainer review or prioritization for multiple weeks:
1. [PR #1599](https://github.com/HKUDS/nanobot/pull/1599): Telegram streaming feature opened in March 2026, currently marked as conflicting, with no progress updates for 4 months despite multiple community users requesting the functionality
2. [Issue #1011](https://github.com/HKUDS/nanobot/issues/1011): Mattermost self-hosted channel support request opened in February 2026 with 4 upvotes, no dedicated contributor assigned or active development roadmap
3. [Issue #192](https://github.com/HKUDS/nanobot/issues/192): WeChat channel integration request opened in February 2026, with no public progress updates despite high implicit demand from Chinese-speaking users.
Prioritizing these backlog items would unblock hundreds of user requests for private, self-hosted communication platform support.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (nousresearch/hermes-agent) 2026-07-14 Project Digest
---
## 1. Today's Overview
Over the 24-hour tracking window, the Hermes Agent project recorded 100 total updated artifacts (50 issues, 50 PRs) with a strong 64% issue resolution rate, indicating very active maintenance velocity. No new official releases were published, though 32 previously open bugs and feature requests were marked resolved on the `main` branch, spanning desktop client UX fixes, multi-platform gateway reliability patches, and quality-of-life improvements. The community continued contributing high-value new feature PRs for mobile support, MCP tool integrations, and enterprise-grade devops capabilities. Overall project health is stable, with no critical unpatched production outages reported in the latest issue batch, and a balanced split of effort between bug triage, existing feature polish, and roadmap expansion.

## 2. Releases
No new releases were published in the 24-hour tracking window. No breaking changes or migration notes for new versions are required at this time.

## 3. Project Progress
5 PRs were merged/closed in the last 24 hours, resolving 4 high-priority production bugs and delivering the following improvements to the `main` branch:
1. [#37274](https://github.com/NousResearch/hermes-agent/pull/37274): Fixed QQ bot reconnection logic to wrap all `_reconnect()` call sites in exception handling, preventing backoff counter bypass and infinite reconnection loops
2. [#37267](https://github.com/NousResearch/hermes-agent/pull/37267): Added proper timeout handling for the skills hub, returning partial valid results immediately after the overall search timeout is hit instead of hanging indefinitely
3. [#37266](https://github.com/NousResearch/hermes-agent/pull/37266): Implemented correct routing for TUI skill bundle slash commands, resolving the deadlock bug reported in closed issue #37254
4. [#37261](https://github.com/NousResearch/hermes-agent/pull/37261): Added support for named custom providers in auxiliary tasks, fixing silent failures for vision recognition and goal-judgment workflows for self-hosted model users
In addition to merged PRs, 27 other previously reported bugs and feature requests (including desktop chat scroll flickering, Windows UI zoom support, Chinese UI localization, and local ComfyUI instance support) were marked as implemented on `main` per the project's sweeper workflow.

## 4. Community Hot Topics
The most active and well-received recent items reflect strong user demand for unified UX across all deployment targets:
1. [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) (14 comments, 7 👍): Top-voted open feature request for generic, platform-agnostic inline action button/keyboard support for Telegram, Slack and other messaging gateways. Underlying user need: teams using Hermes as a shared assistant across multiple IM channels want consistent interactive workflows without platform-specific custom code.
2. [#24860](https://github.com/NousResearch/hermes-agent/issues/24860) (10 comments, 3 👍): Open bug report for broken Ctrl+V paste and missing image paste support in the TUI dashboard chat. Underlying user need: power users who run the Hermes dashboard via terminal expect full clipboard parity with the native desktop client.
3. [#37713](https://github.com/NousResearch/hermes-agent/issues/37713) (5 comments, 11 👍): Closed, implemented feature request for a remote gateway profile switcher in the Hermes desktop UI. Underlying user need: enterprise users managing multiple shared Hermes backends for different teams need one-click profile switching without editing config files manually.

## 5. Bugs & Stability
Bugs reported or updated in the last 24 hours are ranked by severity below:
1. **P1 Critical**: [#63425](https://github.com/NousResearch/hermes-agent/issues/63425) Provider auto-detection discards valid credential pools and disables provider failover, leaving users without credential rotation if the primary provider is unreachable. No associated fix PR is publicly available as of this digest, and the bug affects all users who initialize `AIAgent` with no explicit provider set.
2. **P2 High**: 5 confirmed unpatched high-severity bugs including:
   - [#51652](https://github.com/NousResearch/hermes-agent/issues/51652) GitHub CLI auto-seeded Copilot credentials without user consent break subagent delegation and routing
   - [#60388](https://github.com/NousResearch/hermes-agent/issues/60388) `max_tokens` config values across `config.yaml` are silently dropped when building API requests
   - [#54996](https://github.com/NousResearch/hermes-agent/issues/54996) Malformed command-shaped API key inputs can poison the credential pool and break authentication
   - [#14061](https://github.com/NousResearch/hermes-agent/issues/14061) WeCom timeout errors trigger plaintext fallback resulting in duplicate user messages
   - [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) Telegram DM topic mode silently swallows kanban wake events, leaving requests unprocessed
All P2 bugs are currently triaged, with no public merged fixes available as of today.

## 6. Feature Requests & Roadmap Signals
Top user-requested features that are highly likely to ship in the next minor release:
- Already implemented on `main`: Chinese desktop UI localization, local pre-installed ComfyUI instance support, desktop remote profile switching, will be included in the next pending v0.16 release
- High-priority in active development: Generic inline action button support for messaging platforms, configurable bounded auto-continue for agent tool-call iterations, TypeWhisper local speech-to-text MCP integration
- Longer-term roadmap signals from open PRs: Native cross-platform mobile Expo shell for Hermes Desktop, read-only Kubernetes devops skill, managed Skyvern browser automation MCP integration for the Nous Tool Gateway

## 7. User Feedback Summary
Real user pain points and satisfaction signals from the latest batch of issues:
1. Strong dissatisfaction with previously broken desktop UX: Users previously reported frequent chat scroll flicker, unexpected scroll jumps during reading, broken IME text input for East Asian languages, and no UI zoom support on Windows, all of which are now resolved on `main` with positive implicit feedback from users seeing their requests marked implemented.
2. Frequent frustration with silent failures: Multiple users reported that config values or identity files being silently ignored (custom SOUL.md not loading, `max_tokens` settings dropped) creates confusing, hard-to-debug behavior with no clear error messages.
3. Clear unmet demand for multi-user/team deployment features: Requests for profile switching, session isolation, and credential management all point to growing adoption of Hermes as a shared team assistant rather than a personal single-user tool.

## 8. Backlog Watch
Important long-open items that need maintainer attention to unblock contributor progress:
1. [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) (opened 2026-04-24, ~3 months old): Highest-commented open feature request for generic inline action button support, still has no assigned milestone or public implementation work visible despite strong community demand.
2. [#11252](https://github.com/NousResearch/hermes-agent/pull/11252) (opened 2026-04-16, ~3 months old): PR adding a bundled read-only Kubernetes devops skill, no maintainer review or feedback posted to the PR to date.
3. [#17646](https://github.com/NousResearch/hermes-agent/pull/17646) (opened 2026-04-29, ~3 months old): PR adding managed Skyvern browser automation MCP support to the Nous Tool Gateway, no reviewer responses posted despite the high community interest in browser automation capabilities.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-07-14
*Data sourced from github.com/sipeed/picoclaw*

---

## 1. Today's Overview
On 2026-07-14, the PicoClaw open-source AI agent framework recorded consistent mid-tier development activity across bug fixes, dependency housekeeping, feature planning, and core functionality improvements. Across the 24-hour tracking window, 4 active open issues received updates alongside 5 total PRs, 1 of which was successfully merged, with no new official full releases published. Most open unmerged contributions carry a "stale" tag, indicating a small but growing backlog of pending maintainer review for community-submitted changes. Recent work aligns with the project’s ongoing priorities of improving multi-provider LLM compatibility, reducing unnecessary token overhead for agent workloads, and hardening underlying cryptographic dependencies.

## 2. Releases
No new official PicoClaw releases were published in the 24-hour tracking window. No pre-release or release candidate builds were announced during this period.

## 3. Project Progress
The only PR resolved in the last 24 hours is the closed new feature contribution **#3253 *Feat/gateway webhook*** (https://github.com/sipeed/picoclaw/pull/3253) submitted by community contributor tisoga. This merged work adds native webhook support to the PicoClaw AI gateway component, enabling enterprise and self-hosted deployment use cases that require external event triggers, third-party service integration, and custom workflow automation tied to agent execution events.

## 4. Community Hot Topics
The most actively discussed item from the latest update batch is high-priority open issue **#3088 [Feature] use vodozemac instead of libolm** (https://github.com/sipeed/picoclaw/issues/3088) opened by contributor pbsds, with 8 comments and 2 upvotes, far higher engagement than other active items. This request targets replacing the unmaintained, legacy libolm cryptographic library with its official, actively supported successor vodozemac, and proposes a phased rollout that makes libolm an optional compile-time dependency. The high level of community engagement signals strong demand for reduced supply chain security risk, as the existing unmaintained libolm dependency is considered a notable vulnerability for production agent deployments that rely on end-to-end encrypted inter-agent communications.

## 5. Bugs & Stability
Only one confirmed functional bug was surfaced in the latest update window, ranked by severity below:
1. **Medium-High Severity**: Open bug **#3230 Function call is missing thought_signature when calling Gemini API via OpenAI compat format** (https://github.com/sipeed/picoclaw/issues/3230) reported by VictorSu000. The bug impacts PicoClaw versions 0.2.9 through 0.3.1, causing a "missing thought_signature" error when sending tool use requests to Google’s Gemini model via Cloudflare AI Gateway’s OpenAI compatible interface, breaking agent tool workflows for this deployment path. No corresponding fix PR has been linked to this issue as of the end of the tracking window.

## 6. Feature Requests & Roadmap Signals
Three distinct, user-validated feature requests were updated in the tracking window, with varying likelihood of landing in near-term releases:
- The Anthropic conversation cache optimization ecosystem (open issue #3229 and linked open PR #3228) is a high-impact, low-complexity update that cuts redundant token resend costs for agent workloads by 30-70% per user estimates, making it extremely likely to ship in the next 0.3.x minor release.
- The requested SearXNG BasicAuth header support (open issue #3231) is a small quality-of-life update that unblocks users running self-hosted private SearXNG instances, and is also a strong candidate for the next minor release.
- The libolm to vodozemac cryptographic migration (open issue #3088) is a large, cross-cutting security change, making it more likely to be scheduled for the 0.4.x release cycle to avoid unintended regressions.

## 7. User Feedback Summary
All surfaced user feedback in this tracking window centers on deployment and runtime pain points for production agent use cases, with no major complaints about core stable functionality:
- Self-hosted users running password-protected SearXNG instances report they are currently unable to use PicoClaw’s built-in search integration, as the lack of native BasicAuth support forces them to pass credentials via unsecure URL parameters that most private instance configurations block.
- Power users running high-volume Anthropic agent workloads report inflated LLM service costs from repeated resending of full conversation history, since existing prompt caching support does not extend to cached conversation history segments.
- Users that rely on generic OpenAI-compatible gateway layers to unify access to multiple non-OpenAI LLM providers report broken function call behavior for Gemini deployments, forcing them to build custom workarounds to restore tool functionality.

## 8. Backlog Watch
High-priority stale items that require urgent maintainer triage to unblock community progress:
1. Issue #3088 (vodozemac migration) is marked stale despite its high priority and 8-comment discussion, with no assigned lead maintainer to coordinate implementation planning.
2. PR #3228 (Anthropic system block cache control support) is marked stale, despite being a direct implementation of the highly requested conversation caching feature proposed in linked issue #3229, with no maintainer review feedback submitted as of the tracking window.
3. PR #3254 (model reference resolution fix) was just submitted to resolve incorrect model selection behavior for users with custom model reference lists, but has not yet received any maintainer triage.
4. Two minor housekeeping PRs (#3192 alpine base image version bump, #3191 duplicate .gitignore entry removal) are marked stale, and could be merged immediately with minimal review to keep project configuration aligned.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) 2026-07-14 Project Digest
---

## 1. Today's Overview
The NanoClaw core team delivered exceptional development velocity in the 24-hour tracking window, with 3 total closed issues, 31 updated PRs, and a 80%+ merge/closure rate for all active PR workstreams. The team fully resolved two high-profile public security disclosures related to MCP approval smuggling, shipped a complete new native voice/SMS channel integration, and advanced multiple long-running core capability tracks for scheduled tasks, cross-provider persistent memory, and operational CLI tooling. No new public releases were published during the period. The high execution consistency and focus on both security hardening and user-requested features signals strong project health and stable roadmap alignment. There were zero reported active public exploits for the newly patched vulnerabilities as of this digest.

## 2. Releases
No new official releases, breaking changes, or migration guidance were published in the 24-hour tracking window.

## 3. Project Progress
25 total PRs were merged or closed today, covering three major workstreams:
- **Security Hardening**: PR #2998 renders the full unredacted MCP server payload (including runtime `args` and `env` variables) on approval cards, fully addressing the two publicly disclosed approval smuggling vulnerabilities.
- **New Native Feature Launches**: The full Dial AI voice/SMS channel integration shipped via PR #3032 (core channel adapter) and PR #3033 (setup wizard onboarding), making Dial a first-class supported channel for real phone number SMS/MMS and AI call use cases. Additional new feature merges include template-defined recurring cron scheduled tasks (PR #3022), instance-wide default agent provider configuration for new groups (PR #2906), a new `ncl tasks` CLI resource to list, pause, cancel and resume runaway tasks (PR #2947), and structured skill format refactoring that makes SKILL.md files the single source of truth for all channel installation flows (PR #3035).
- **Bug and Operational Fixes**: The false delivery bug for offline/unregistered channel adapters was fully resolved by merged PRs #2996 and #2226, routing missing-adapter messages to the proper retry queue instead of marking them as delivered. Additional fixes include auto-expiry and cleanup for abandoned pending approval rows (PR #2944), corrected side effects for `ncl wirings create` operations (PRs #2743, #2938), and warning logic for conflicting shared skill symlink overrides (PR #3002).

## 4. Community Hot Topics
All tracked issues and PRs had zero public user comments or reactions in the 24-hour window, but active in-development workstreams directly reflect top operator and enterprise user demand:
1. [PR #3037: Optional MCP Tool Allowlist](https://github.com/nanocoai/nanoclaw/pull/3037): This feature addresses widespread requests for least-privilege access control for MCP-connected agents, letting admins restrict invocable tools via a simple environment variable instead of modifying core code.
2. Provider-agnostic persistent memory workstream (PRs [#3012](https://github.com/nanocoai/nanoclaw/pull/3012), [#3013](https://github.com/nanocoai/nanoclaw/pull/3013)): This parallel track responds to consistent user feedback that teams migrating between different LLM backend providers lost all shared agent state, with no standardized cross-provider memory system available prior.

## 5. Bugs & Stability
All tracked defects are ranked by severity below:
1. **Critical (Fully Patched)**: Two public security vulnerabilities tracked in [Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827) and [Issue #2762](https://github.com/nanocoai/nanoclaw/issues/2762) allowed agent approval smuggling by hiding MCP server runtime arguments and environment variables from human approvers. Both issues are fully resolved by merged PR #2998, with no active public exploits reported.
2. **High (Fully Patched)**: The false message delivery bug tracked in [Issue #2995](https://github.com/nanocoai/nanoclaw/issues/2995) marked outbound messages to offline/unregistered channel adapters as successfully delivered, leading to silent message loss. The defect has been fully fixed by merged PRs #2996 and #2226.
3. **Medium (Unpatched, Open PR Available)**: The unhardened ncl CLI socket transport in [PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802) has no request timeout or buffer size limits, leaving it vulnerable to hung connections and unbounded memory usage if connected to a malicious remote host. No public exploit reports exist for this gap.

## 6. Feature Requests & Roadmap Signals
Three near-term deliverables are high confidence for the next release cycle based on today's activity:
1. The optional MCP tool allowlist from open PR #3037 will ship in the next minor patch, as it directly extends the newly merged MCP security hardening workstream with minimal remaining implementation work.
2. The current time injection fix for scheduled tasks in open PR #3036 will land as a fast follow patch, resolving the known agent time/weekday confusion flaw that impacts the newly launched cron scheduled task feature.
3. The full provider-agnostic persistent memory stack will be a flagship feature in the next major NanoClaw release, with core team approvals already in place for the two dependent PRs and no major open implementation gaps remaining.

## 7. User Feedback Summary
Clear aggregated user pain points and demand patterns are visible in today's prioritized work:
- Top security concerns from self-hosted operators led the core team to prioritize the MCP approval smuggling patches immediately after the vulnerabilities were disclosed in mid-June.
- High operational overhead for admins was a leading driver for multiple recently merged features, including auto-expiry of stale pending approval rows, the new `ncl tasks` runaway task management tool, and instance-wide default agent provider configuration for new groups.
- First-party native voice and SMS integration was one of the most requested missing channels prior to the Dial integration launch, addressing unmet use cases for teams building customer-facing phone-based AI agents. No negative user feedback or dissatisfaction was reported in this tracking window.

## 8. Backlog Watch
One high-priority long-open PR requires urgent maintainer review:
- [PR #2802: ncl Socket Hardening](https://github.com/nanocoai/nanoclaw/pull/2802): This critical security PR for the CLI socket transport was opened on June 17, 2026 (4 weeks prior to this tracking date), and adds required connection timeouts, client connection caps, and frame size limits to prevent denial of service attacks. No public review comments have been posted to the PR as of today, despite its high impact on CLI transport security.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw (nullclaw/nullclaw) 2026-07-14 Project Digest
---
## 1. Today's Overview
This 24-hour window represents a period of steady, high-productivity incremental progress for the open-source Zig-based AI agent framework, with no new open or closed issues filed and no official new releases shipped. 17 total pull requests received updates, with 4 merged/closed and 13 active open PRs moving through final contributor review. All recent work prioritizes core stability fixes, cross-platform compatibility hardening, interactive CLI usability improvements, and polished multi-channel integration support, with no critical production outages requiring triage. The lack of new unplanned bug reports, paired with the fully assigned fix pipeline for all known gaps, signals very strong project health for the community of self-hosted AI agent power users.
## 2. Releases
No new official versions were published in the 24-hour period ending 2026-07-14.
## 3. Project Progress
Four previously open PRs were successfully merged/closed today, addressing low-to-medium priority stability and usability gaps:
- [#951 fix(agent_runner): suppress stderr initialization logs on agent failure](https://github.com/nullclaw/nullclaw/pull/951): Eliminates a long-standing UX bug where agent child process startup logs (memory plan, MCP server registration, channel startup) were incorrectly posted to end-user chat channels after an agent crash, instead of only appearing in administrator debug logs.
- [#950 fix(gateway): move port probe before allocations to prevent test leak](https://github.com/nullclaw/nullclaw/pull/950): Resolves test environment memory leaks by reordering gateway startup operations to check for port availability before initializing large persistent runtime objects, ensuring full resource cleanup if an early `AddressInUse` error occurs.
- [#949 fix: make queue_mode configurable from config.json](https://github.com/nullclaw/nullclaw/pull/949): Adds a new top-level config field `agent.default_queue_mode` that lets administrators set the default message queueing behavior (e.g. low-latency "latest" mode for real-time assistant use cases) for all new agent sessions, with proper validation and backwards-compatible defaults.
- [#948 fix cron agent delivery attribution](https://github.com/nullclaw/nullclaw/pull/948): Passes origin metadata from cron scheduled tasks to spawned agent subprocesses, ensuring scheduled messages are correctly tagged to their originating channel and account, resolving compliance and logging gaps for enterprise deployments.
## 4. Community Hot Topics
No PRs or issues accumulated public comments or reactions in this 24-hour window, but the highest impact actively iterated PR driving core roadmap alignment is:
- [#969 feat(agent): structured approval_request / approval_response flow](https://github.com/nullclaw/nullclaw/pull/969): This PR implements a formal, two-turn human-in-the-loop approval workflow for high-risk tools like shell execution, replacing ad-hoc error prompts with a standardized SSE-powered approval UI across all connected channels. The underlying user need comes from self-hosted power users running NullClaw agents with unrestricted shell and filesystem access, who requested explicit, auditable confirmation steps before agents run potentially destructive operations.
## 5. Bugs & Stability
No new unreported bugs, crashes, or regressions were filed in the last 24 hours. All known active stability gaps already have fully written fix PRs under review, ranked by severity:
1. **High Severity (pending merge):** One-shot cron scheduled jobs fail to deliver messages to connected channels due to a confirmed use-after-free error on the `OutboundMessage.channel` pointer, tracked in [#954](https://github.com/nullclaw/nullclaw/pull/954). The fix is complete and awaiting final signoff.
2. **Medium Severity (pending merge):** Matrix bridge deployments re-run full initial server syncs after every service restart, leading to duplicate message processing and performance overhead, tracked in [#968](https://github.com/nullclaw/nullclaw/pull/968). The fix implements persistent encrypted storage for the Matrix sync cursor across restarts.
3. **Low-Medium Severity (pending merge):** MS Teams deployments incorrectly return 403 errors for all inbound messages due to mismatched JWT claim casing, Discord gateway connections do not auto-recover cleanly after unexpected disconnects, and Weixin iLink QR auth workflows have minor edge case hardening gaps, all of which have dedicated open fix PRs.
## 6. Feature Requests & Roadmap Signals
Three highly requested community features are nearing completion and very likely to ship in the next minor 2026.7.x release:
1. Configurable memory auto-recall controls from [#961 feat(memory): add configurable auto-recall, recall_limit, max_context_bytes](https://github.com/nullclaw/nullclaw/pull/961): This adds three new memory config knobs for users running NullClaw on constrained hardware or for strict use cases that require fully manual memory management.
2. Native API-level streaming tool call support from [#964 Enable native API-level tool calls during streaming](https://github.com/nullclaw/nullclaw/pull/964): This cuts end-to-end tool execution latency by ~30% by letting agents process tool call deltas mid-response generation, instead of waiting for full generation to complete.
3. Full native Anthropic provider documentation from [#962 docs(providers): document native Anthropic provider with API key and OAuth support](https://github.com/nullclaw/nullclaw/pull/962): This removes the requirement for users to route Anthropic traffic via third-party proxies or OpenRouter.
## 7. User Feedback Summary
Recent active PR changes directly reflect three top reported community pain points:
1. CLI local testing users have long complained the interactive `nullclaw agent` REPL lacks basic arrow key, command history, and line editing support, a gap fully addressed by the open fix in PR #970.
2. Termux/Android aarch64 mobile deployment users reported broken out-of-the-box DNS resolution in the native Zig HTTP stack, a pain point resolved by the secure curl fallback implementation in PR #966.
3. Enterprise multi-channel admins reported missing attribution metadata for scheduled cron messages caused audit and logging gaps, which was partially resolved by merged PR #948 with full fixes pending merge. Overall user satisfaction remains high as core contributors systematically address all reported major gaps without any untriaged open bug reports.
## 8. Backlog Watch
Three long-running open PRs last updated in mid-June only require final maintainer signoff to close, representing low-effort high-impact work to reduce the project's open PR backlog:
1. PR #963 (Weixin iLink QR auth hardening) resolves open issue #817, which has been pending closure for over 2 months
2. PR #962 (Native Anthropic provider docs) resolves open issue #767, a community-requested documentation update missing since Q1 2026
3. Dependabot PR #956 bumps the Alpine Docker base image from 3.23 to 3.24 to pull in critical upstream security patches, and has been awaiting review for nearly a month.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-07-14
---

## 1. Today's Overview
This was a high-output active development workday for the IronClaw team, with 34 updated issues and 50 updated pull requests logged across the 24-hour window. No new official releases were published, with nearly all activity focused on the ongoing NEA-25 unified extension architecture rollout and active bug bash for the new Reborn runtime and associated WebUI v2. A total of 6 issues and 14 PRs were closed/merged in the period, clearing a backlog of P2 and P3 UI, extension lifecycle, and Slack integration bugs. The project is in a pre-release stabilization phase, with core infrastructure work advancing rapidly while a steady stream of usability bugs are surfaced and triaged by internal QA teams. Overall project health is strong, with core dev velocity remaining high and no critical production outages reported in the window.

## 2. Releases
No new official releases were published in the last 24 hours. A pending open release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) is awaiting merge, which will ship breaking API changes for `ironclaw_common (0.4.2 → 0.5.0)` and `ironclaw_skills (0.3.0 → 0.4.0)`, alongside the full new 0.29.1 `ironclaw` runtime release. No migration notes have been published for the upcoming release at time of writing.

## 3. Project Progress
Key closed/merged work completed in the window includes:
1. **Bug fixes**: Resolved 4 existing bugs from the bug bash backlog, including correcting the incorrect "Last completed" timestamp display on routine pages [#5891](https://github.com/nearai/ironclaw/issues/5891), fixing missing tool activity details for in-progress calls [#5860](https://github.com/nearai/ironclaw/issues/5860), patching broken channel disconnect logic for non-Slack external extensions [#5953](https://github.com/nearai/ironclaw/issues/5953), and eliminating the generic "model output could not be used" error that appeared after successful tool runs [#5883](https://github.com/nearai/ironclaw/issues/5883).
2. **PR merges**: Fixed unhandled storage error cause propagation during compaction [#5971](https://github.com/nearai/ironclaw/pull/5971), hardened OAuth flows and extension lifecycle cleanup [#5957](https://github.com/nearai/ironclaw/pull/5957), finished full TypeScript conversion for WebUI v2 to eliminate untyped JS files [#6057](https://github.com/nearai/ironclaw/pull/6057), and patched the Slack DM resolution logic that prevented the platform from correctly identifying direct message conversations [#6054](https://github.com/nearai/ironclaw/pull/6054).
This work moves the 8-PR NEA-25 unified extension stack 70% toward full completion, with no major unresolved dependency blockers left for the feature train.

## 4. Community Hot Topics
The most actively discussed items from the 24h window are:
1. **#5948 (5 comments)**: [Assistant incorrectly reports GitHub extension as activated when it is only installed](https://github.com/nearai/ironclaw/issues/5948)
   This high-discussion bug is the center of ongoing investigation into inconsistent extension state visibility, with adjacent issue [#6029](https://github.com/nearai/ironclaw/issues/6029) noting users also cannot deactivate, reconfigure or uninstall the GitHub extension after activation. The underlying user need is a transparent, predictable, fully user-controlled extension lifecycle management flow, a top priority for the NEA-25 refactor.
2. **#6000 (1 comment)**: [How should security issues be reported? (no SECURITY.md, private reporting disabled)](https://github.com/nearai/ironclaw/issues/6000)
   A community contributor flagged the project's lack of a formal responsible disclosure workflow, noting private vulnerability reporting is disabled and no SECURITY.md file exists in the organization or repo. This signals a clear unmet community need for formalized security reporting processes to enable safe, private submission of high-severity runtime vulnerabilities.

## 5. Bugs & Stability
Newly filed bugs in the window, ranked by severity:
| Severity | Issue Link | Description | Fix PR Status |
|----------|------------|-------------|---------------|
| P1 | [#5943](https://github.com/nearai/ironclaw/issues/5943) | Slack DM action posts to the current shared channel instead of the user's direct messages | No associated fix PR filed |
| P2 | [#6060](https://github.com/nearai/ironclaw/issues/6060) | Routine delivery targets leak across all user automations (all routines inherit the last set delivery destination, no per-routine config) | No associated fix PR filed |
| P2 | [#6048](https://github.com/nearai/ironclaw/issues/6048) | Multi-step agent tasks fail entirely when the model tries to call an unavailable tool mid-workflow | No associated fix PR filed |
| P2 | [#5836](https://github.com/nearai/ironclaw/issues/5836) | Scheduled routines fail 100% of the time with a "No thread attached" error | No associated fix PR filed |
| P3 | Multiple new UI glitches | Including stray `$` characters in UI headers, unreadable contrast in light mode, 10-second load times for the extension registry page | Multiple low-risk fix paths documented in triage |

No critical production outages or data loss bugs were reported in the window.

## 6. Feature Requests & Roadmap Signals
Based on active open PRs, upcoming features likely to ship in the next major release include:
1. The full NEA-25 unified extension model delivered via [#6061](https://github.com/nearai/ironclaw/pull/6061), which will eliminate legacy extension type inconsistencies and add native support for multiple accounts per third-party vendor.
2. Native Matrix chat channel support, following the merge of the new Matrix WASM channel skeleton added in [#6062](https://github.com/nearai/ironclaw/pull/6062).
3. A fully tested offline v1-to-Reborn migration workflow, allowing existing users to safely upgrade legacy deployments to the new Reborn runtime without downtime or data loss via [#5936](https://github.com/nearai/ironclaw/pull/5936).
4. User-managed per-user MCP (Model Context Protocol) server registration via [#5970](https://github.com/nearai/ironclaw/pull/5970), which will add first-class support for self-hosted MCP tools.

## 7. User Feedback Summary
All user and QA feedback captured in the window falls into three core pain point categories:
1. **Extension usability friction**: Users report confusing, inconsistent extension status indicators, broken disconnect flows for Gmail and Slack, and no visible way to manage activated GitHub extensions, leading to confusion about whether integrations are properly configured.
2. **UI reliability gaps**: Multiple intermittent WebUI bugs are reported, including unresponsive Enter key message submission, out-of-order chat message rendering, persistent stale error banners after successful requests, and no visible status indicator for connection drops or reconnections.
3. **Agent behavior inefficiencies**: Users note that simple tasks like pulling emails to a Google Sheet trigger over 100 unnecessary tool calls wasting compute, and that agents will stop working to explain trivial errors (such as missing API headers) instead of auto-retrying requests, forcing unnecessary user intervention. No positive satisfaction feedback was submitted in the 24h window, as nearly all active submissions are tied to the ongoing internal bug bash cycle.

## 8. Backlog Watch
High-priority long-open items awaiting maintainer attention:
1. [#5741](https://github.com/nearai/ironclaw/issues/5741) (open 8 days): The `builtin.http.save` tool throws an `OutputTooLarge` error instead of saving large web pages, breaking core web scraping use cases for hosted single-tenant users. No fix has been assigned or merged to date.
2. [#5640](https://github.com/nearai/ironclaw/issues/5640) (open 10 days): A critical test harness gap where the security audit sink is always set to `None` in the integration environment, blocking full validation of wiring parity between production and test deployments. No associated fix PR has been filed.
3. [#5598](https://github.com/nearai/ironclaw/pull/5598) (open 11 days): The pending runtime release PR is stalled, blocking downstream dependent work for teams building on top of the latest core runtime changes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-07-14
Project Repository: https://github.com/netease-youdao/LobsterAI

---
## 1. Today's Overview
LobsterAI recorded extremely high development velocity on 2026-07-14, with 19 out of 21 total touched pull requests merged or closed for an impressive 90% resolution rate, no new active user issues logged in the 24-hour reporting window, and no new official releases shipped. The entire team focused on cross-platform desktop reliability hardening, core AI cowork module experience optimization, and build pipeline iteration, prioritizing resolution of previously reported end-user installation and stability pain points over experimental new feature launches. No unaddressed critical bug reports from the community were surfaced in the past day, indicating active stability work is effectively aligning with user needs. Overall project health remains strong, with a clear sprint focus on polishing production readiness for the next minor release.

## 2. Releases
No new official releases were published for LobsterAI on 2026-07-14. There are no corresponding version upgrade changes, breaking change notices, or migration guidelines to announce at this time.

## 3. Project Progress
A total of 19 PRs were merged or closed in the 24-hour window, with key advancements grouped as follows:
- **Windows platform installation reliability hardening**:
  1. [PR #2327](https://github.com/netease-youdao/LobsterAI/pull/2327): Implemented full binary signing for all Windows app components via Youdao's internal signing service, eliminating the previously common antivirus-triggered freeze of unsigned LobsterAI.exe during first launch
  2. [PR #2326](https://github.com/netease-youdao/LobsterAI/pull/2326): Added self-healing logic for interrupted `win-resources.tar` extraction, including a 10-minute watchdog and fallback to the system native `tar.exe` to prevent permanent broken installations after resource extraction is killed by security software
  3. [PR #2323](https://github.com/netease-youdao/LobsterAI/pull/2323): Added an optional opt-in Windows web installer target that pulls app packages from CDN at install time for smaller initial download sizes
- **Core AI agent experience upgrades**:
  1. [PR #2328](https://github.com/netease-youdao/LobsterAI/pull/2328): Serialized concurrent browser launch and search flows to resolve persistent Chrome process memory leaks during long-running web search tasks
  2. [PR #2324](https://github.com/netease-youdao/LobsterAI/pull/2324): Implemented streaming ordered per-turn thinking blocks for the OpenClaw agent, displaying agent reasoning transparently before corresponding tool calls or final responses without duplicate message errors
  3. Batch of cowork module stability PRs (#2315, #2289, #2292, #2300) fixed stuck background follow-up processing, misrouted steer requests, and missing attachment support for queued background operations
  4. [PR #2319](https://github.com/netease-youdao/LobsterAI/pull/2319): Revamped homepage quick-action scenarios, optimized for office productivity use cases by adding a dedicated document writing shortcut mapped to the docx generation skill
- **Long-stale backlog PR resolution**: Two PRs opened in early April 2026 were finally closed/merged, including the full scheduled task module UI upgrade ([PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488)) and per-session independent skill selection logic ([PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)).

## 4. Community Hot Topics
No PRs or active issues recorded user comments, reactions, or public community discussion activity in the 24-hour window. The two currently open PRs represent the highest-priority ongoing community-relevant items:
1. [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (opened by dependabot[bot] on 2026-04-02): Automated dependency bump for the full Electron runtime group, upgrading core Electron from v40.2.1 to v43.1.0. The underlying need is to pull in upstream security patches, performance improvements, and new native feature support for the desktop app.
2. [PR #1323](https://github.com/netease-youdao/LobsterAI/pull/1323): Fix for false positive "input too long" error prompts that incorrectly popped up even for very short user inputs. The underlying user demand is to reduce confusing, misleading error states that break normal agent interaction flows.

## 5. Bugs & Stability
All resolved bugs logged in the reporting window are ranked by severity below, with no new unpatched bugs reported:
1. **Critical (Resolved)**: Widespread Windows installation failures and app freezes caused by unsigned binaries and interrupted resource extraction, fully fixed via merged PRs #2327 and #2326
2. **High (Resolved)**: Persistent Chrome memory leaks caused by uncoordinated concurrent browser launches during web search tasks, fully fixed via merged PR #2328
3. **Medium (Resolved)**: macOS auto-update failures caused by broken hdiutil invocation logic, patched via merged PR #2321
4. **Medium (Resolved)**: Multiple background task processing failures in the cowork module that caused stuck sessions when the app was minimized, fully resolved via the batch of follow-up logic stability PRs

## 6. Feature Requests & Roadmap Signals
Based on merged changes, the following features are highly likely to ship in the next minor LobsterAI release:
- The lightweight Windows CDN web installer, which addresses user demand for smaller initial installation package sizes
- The new ordered streaming agent thinking display, a long-requested feature to improve transparency into the AI agent's reasoning process
- The fully upgraded scheduled task module UI with date grouping, search and filter functions for power users who run large numbers of recurring agent tasks
- The upgraded foreground desktop notification system that lets users track long-running agent task progress even when the app is minimized

## 7. User Feedback Summary
All merged changes directly address verified previously reported end-user pain points:
1. Windows users previously reported high rates of installation failures and unexpected app freezes due to third-party antivirus interference, all of which are now fully mitigated by full binary signing and self-healing extraction logic
2. Users reported that out-of-order, missing or duplicate agent reasoning blocks made it hard to debug unexpected agent outputs, which is now resolved by the new ordered thinking streaming system
3. Users complained that skill selection states accidentally leaked across independent chat sessions, the new per-session storage logic eliminates this confusing behavior
4. Power users with large numbers of scheduled tasks requested better categorization and search functions, which the full UI upgrade addresses. No new widespread negative feedback was surfaced in the 24-hour reporting window.

## 8. Backlog Watch
Two long-pending PRs that require urgent maintainer review and action to unlock downstream improvements:
1. [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277): The Electron runtime bump PR that has been open for over 3 months. Maintainers need to complete regression testing for runtime breaking changes before merge, to pull in critical upstream security patches and avoid running an outdated Electron version.
2. [PR #1323](https://github.com/netease-youdao/LobsterAI/pull/1323): The high-impact UX fix for the false positive input-too-long error that has been stale since April 2026. Merging this PR will immediately eliminate misleading error prompts that confuse end users with short interaction inputs.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (moltis-org/moltis) 2026-07-14 Project Digest
---
## 1. Today's Overview
The Moltis personal AI assistant project entered a quiet, maintenance-focused 24-hour tracking window ending 2026-07-14, with no new open or closed issue activity and no new official releases published. Only one pre-existing active pull request received a recent update prior to the report period, with zero newly reported user issues signaling low active friction for currently deployed builds. All ongoing pending code work targets patching documented gaps in third-party productivity tool integrations, rather than rolling out new high-footprint features. This low-volatility activity profile indicates stable core operation and a deliberate focus on hardening existing functionality for self-hosted personal use cases.

## 2. Releases
No new official releases, pre-releases, or patch versions were published in the 24-hour tracking window. No release-related announcements or migration guidance were posted to the project repository over the past day.

## 3. Project Progress
There are no merged or closed pull requests logged for the 2026-07-14 tracking period. The only active tracked pending code change is an open authored bug fix focused on the CalDAV calendar integration module, which was last updated on 2026-07-13 to resolve a pre-existing functionality gap for calendar sync workflows. No new feature work advanced or was finalized over the past 24 hours.

## 4. Community Hot Topics
The only active publicly discussed change item is the pending CalDAV integration fix PR:
> [PR #1147: fix(caldav): honor time range in list_events via server-side calendar query](https://github.com/moltis-org/moltis/pull/1147)
This PR is the highest-engagement item in the current project backlog, with 0 public comments and 0 upvotes to date. The underlying unmet user need driving this change is efficient, low-overhead calendar sync for Moltis deployments: users running the assistant on edge hardware, or connected to large multi-year CalDAV instances, previously faced unnecessary bandwidth waste and long load times when pulling full calendar event lists with no filtering.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were formally reported in the project issue tracker over the 2026-07-14 tracking window. The only known outstanding moderate-severity functional limitation is the pre-existing gap in CalDAV event filtering, where the `list_events` tool ignores user-specified start/end time parameters to pull all calendar resources unconditionally. A complete fix for this limitation is already authored and pending review, so there are no unaddressed high-severity stability issues impacting current users.

## 6. Feature Requests & Roadmap Signals
No new user-submitted feature requests were logged over the past 24 hours. The pending CalDAV time range filtering fix is nearly guaranteed to ship in the next minor patch release, as it is a low-risk, targeted change that aligns with the project's documented roadmap priority of building reliable, resource-efficient third-party productivity integrations. No signals indicate a shift away from integration hardening toward large new feature work in the upcoming release cycle.

## 7. User Feedback Summary
No new public user feedback was submitted to the project issue tracker over the 24-hour reporting window. The pending CalDAV fix directly resolves a well-documented pre-existing user pain point for self-hosted edge deployments, where users running Moltis on low-power hardware like Raspberry Pi previously reported excessive memory usage and multi-second lag for calendar-related agent actions that pull full calendar event sets. No active signals of user dissatisfaction with core assistant functionality or other integrations were captured today.

## 8. Backlog Watch
The only high-priority, long-unaddressed item requiring core maintainer attention is open PR #1147, the CalDAV time range filtering fix linked above. The PR was created on 2026-07-11, last updated on 2026-07-13, and has no public outstanding change requests or blocker labels associated with it. Prioritizing this PR for review and merge will close a known integration gap for CalDAV power users, and reduce the project's small backlog of pending bug fixes.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw Daily Project Digest | 2026-07-14
---
## 1. Today's Overview
The project entered a high-tempo post-v2.0.0 major release stabilization phase on 2026-07-14, with extremely active development velocity: 50 issues and 50 pull requests were updated over the last 24 hours, representing a 48% issue closure rate and 56% PR closure rate respectively. Maintainers are prioritizing rapid triage and patching of regressions introduced in the v2.0.0 launch, with 28 merged PRs landing in a single day. Overall project health is strong, as almost all high-severity user-reported critical bugs received immediate engineering response within 72 hours of being filed. A hotfix point release was published to address the most disruptive launch regressions, targeting minimal downtime for end users.

## 2. Releases
A new hotfix version `v2.0.0.post1` was published today, with no breaking changes or mandatory migration steps required for users already running v2.0.0. Key changes included:
1.  Official version bump from v2.0.0 to the post1 hotfix build via [PR #6007](https://github.com/agentscope-ai/QwenPaw/pull/6007)
2.  User-facing UI fix preventing unintended browser autofill on the model provider search input field via [PR #6011](https://github.com/agentscope-ai/QwenPaw/pull/6011)
3.  Partial resolution of legacy session data compatibility issues for users upgrading from v1.x versions.

## 3. Project Progress
Today 28 PRs were merged/closed, advancing core stability and functionality for the v2.0 branch:
- Critical fix for the widespread orphan `tool_result` message bug that caused OpenAI API 400 errors, via merged [PR #5989](https://github.com/agentscope-ai/QwenPaw/pull/5989) adding multi-layer cross-session defense against mismatched tool call/result pairs
- Merged patches flattening background tool offload hint messages to valid plain assistant format, eliminating the orphan `ToolResultBlock` root cause via [PR #6050](https://github.com/agentscope-ai/QwenPaw/pull/6050) and [PR #6052](https://github.com/agentscope-ai/QwenPaw/pull/6052)
- Merged governance workflow improvements in [PR #6054](https://github.com/agentscope-ai/QwenPaw/pull/6054) that reduce low-value redundant approval prompts and add a global UI-accessible sandbox execution toggle
- Unified tool result pruning logic across all workflow paths via [PR #5935](https://github.com/agentscope-ai/QwenPaw/pull/5935) to eliminate duplicated implementation and edge case failures
- Fixed broken plugin tool registration that caused user plugins tools to be invisible to the runtime agent via [PR #6044](https://github.com/agentscope-ai/QwenPaw/pull/6044)
- Fixed message queue leak when sessions are deleted via [PR #6045](https://github.com/agentscope-ai/QwenPaw/pull/6045) to resolve the missing message queue feature user complaint.

## 4. Community Hot Topics
The top 3 most active community discussions reflect urgent pain points for post-v2.0 adopters:
1.  **[CLOSED Bug #5996](https://github.com/agentscope-ai/QwenPaw/issues/5996)** (10 comments): Model execution error caused by improperly formatted hint messages that produce unmatched role=tool API messages. Underlying user need: Uninterrupted core chat and tool calling functionality that does not break mid-workflow.
2.  **[OPEN Bug #5961](https://github.com/agentscope-ai/QwenPaw/issues/5961)** (7 comments): Agent infinite loop of repeated file write/delete actions when paired with Qwen 3.7-Plus model. Underlying user need: Reliable file system automation that completes simple tasks quickly without useless cycles.
3.  **[CLOSED Bug #5947](https://github.com/agentscope-ai/QwenPaw/issues/5947)** (6 comments): MCP tool allow/deny permission rules completely ineffective, with agents able to access explicitly blocked sub-tools. Underlying user need: Functional access control to prevent agents from operating on sensitive systems.

## 5. Bugs & Stability
Bugs are ranked by user impact severity as follows:
1.  **Critical (All platforms)**: Orphan tool result / mismatched tool call pairs causing universal 400 API errors across WeChat, Feishu, and native desktop sessions. Multiple fix PRs are fully merged and shipped in v2.0.0.post1, no open unresolved cases remain.
2.  **High (All platforms)**: MCP tool access control allow/deny rules not working. Fully resolved with merged governance pipeline fixes.
3.  **High (Desktop upgrade path)**: Previously supported v1.x features (SSH Offline, Profiles page) return 404 after v2.0 upgrade. No fix PR submitted yet, affecting long-time power users upgrading from older versions.
4.  **Medium (All runtime)**: Hard-coded 60 second timeout for shell commands, user-configured longer timeouts are ignored and long running processes are silently killed. Active fix PR [PR #6063](https://github.com/agentscope-ai/QwenPaw/pull/6063) is under review.
5.  **Medium (Docker deployments)**: `qwenpaw doctor` health check returns false failure because the legacy `/api/agent/health` endpoint was removed. Fix PR [PR #6053](https://github.com/agentscope-ai/QwenPaw/pull/6053) is open to redirect to the new `/api/healthz` endpoint.

## 6. Feature Requests & Roadmap Signals
User-submitted requests that show strong likelihood of landing in near-term releases:
1.  CIDR segment support for no-authentication host whitelist requested in [Issue #6048](https://github.com/agentscope-ai/QwenPaw/issues/6048): This is a high-demand feature for enterprise self-hosted deployments, and will likely be included in the next 2.0.x patch release.
2.  Visual model fallback support for text-only primary LLMs tracked in long-running [PR #5069](https://github.com/agentscope-ai/QwenPaw/pull/5069): The feature is nearly finalized and targeted for the 2.1 minor release.
3.  Simplified tool whitelist approval mode requested by multiple users in [Issue #5955](https://github.com/agentscope-ai/QwenPaw/issues/5955): Users want granular control to whitelist tools permanently instead of approving them on every run, which has been added to the v2.1 roadmap based on community feedback.
4.  Global sandbox switch merged today is scheduled to ship in the next public point release immediately.

## 7. User Feedback Summary
Key aggregated user pain points and sentiment:
- Dominant negative feedback: v2.0.0 initial release is far less stable than v1.x branch, with multiple regressions breaking core workflows including channel integrations, MCP tools, and session persistence.
- Top workflow complaint: Existing 3 permission modes (close, auto, smart) produce excessive repetitive approval prompts that interrupt automation tasks, with no granular option to whitelist specific tools.
- Localization pain point for Chinese Windows users: Shell command output with GBK encoding frequently triggers UnicodeDecodeError crashes.
- Positive feedback: Users are widely satisfied with the extremely fast maintainer response speed, with 9 out of 12 top-commented post-launch bugs being closed within 3 days of v2.0.0 going live.

## 8. Backlog Watch
High-priority long-open items that need maintainer attention:
1.  [Issue #5872](https://github.com/agentscope-ai/QwenPaw/issues/5872): Docker deployment `browser_use` tool crashes due to dbus connection failure on Chromium startup, open for 5 days with no assigned fix owner, blocking all headless browser automation for Docker users.
2.  [PR #5069](https://github.com/agentscope-ai/QwenPaw/pull/5069): Visual model fallback feature for text-only primary LLMs, open for over 1 month with no recent review activity, delaying media processing support for users who do not deploy a separate multimodal model.
3.  [Issue #5979](https://github.com/agentscope-ai/QwenPaw/issues/5979): Electron-based CLI tools (such as Obsidian) cannot run on Linux because the sandbox maps the system user to root, triggering Electron's default root execution block. No fix has been submitted yet, blocking desktop app automation for Linux power users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-07-14
---
## 1. Today's Overview
ZeroClaw recorded very high active development velocity on 2026-07-14, with 50 updated issues and 50 updated pull requests processed across the repository. No new official releases were published today, with nearly all ongoing work aligned to the upcoming v0.8.3 minor milestone targeting core hardening, quality-of-life UX improvements, and test coverage expansion. Core maintainers advanced multiple previously accepted governance RFCs while reviewing external community contributions from 10+ different contributor accounts. The project shows strong health signals: 74% of recently updated issues are open active work items, and triage workflows are running reliably to prioritize S1 workflow-blocking bugs first.

## 2. Releases
No new official releases were published in the 24-hour reporting window. No pre-release builds were tagged for v0.8.3 as of press time.

## 3. Project Progress
A total of 6 PRs and 13 issues were merged or closed today:
- 3 low-risk test/cleanup PRs landed: #8972 added regression coverage for invalid evaluation regex checks, #8971 locked in correct slash command token normalization behavior, and #8970 removed unused dead code for the tool IO empty marker
- Critical CLI locale bug #9034 merged, fixing a long-unaddressed issue where the `--config-dir` flag was ignored during i18n setup
- 7 test coverage tasks from the repository-wide 13-shard audit project (tracker #7685) were completed, adding deterministic test coverage for memory storage edge cases, insecure TLS confirmation flows, provider response propagation, and runtime hook panic recovery
- Longstanding medium-severity gateway DoS vulnerability issue #12, first opened in February 2026, was formally resolved and closed today.

## 4. Community Hot Topics
The 3 most active public discussions, sorted by comment volume:
1. **RFC: Work Lanes, Board Automation, and Label Cleanup (#6808, 14 comments, https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**  
   The core maintainer team is iterating on a governance update to eliminate manual issue routing overhead, which addresses a widely reported pain point of growing workflow friction as the project contributor base scales.
2. **RFC: Prefer a lighter ZeroClaw core through external integrations (#6165, 9 comments, https://github.com/zeroclaw-labs/zeroclaw/issues/6165)**  
   Community members are aligning on rules to move long-tail third-party integrations out of the core codebase to avoid bloat, unblocking future scalability for the MCP (Model Context Protocol) extension ecosystem.
3. **[Bug]: Code help/keybindings are misleading or unreachable, especially on macOS (#7800, 5 comments, https://github.com/zeroclaw-labs/zeroclaw/issues/7800)**  
   macOS users are collaborating to document TUI UX gaps that reduce discoverability of core ZeroCode features for ~30% of the project's end user base.

## 5. Bugs & Stability
Bugs reported or updated in the last 24 hours, ranked by severity:
- **S1 Workflow Blocking**: Telegram channel cannot be configured (#8505), Docker Compose gateway remains loopback-bound (#9035), OpenAI Responses provider rejects vision inputs (#9019) — a public fix PR #9029 is already opened for the OpenAI vision bug
- **S2 Degraded Behavior**: Misleading macOS TUI keybindings (#7800), foreground daemon starts silently with no output (#9000, fixed by opened PR #9040), Windows Ctrl+C triggers forced ungraceful exit (#9028), non-none reasoning effort settings break OpenAI tool turns (#9016)
All S1 bugs are marked status:accepted and prioritized for patch fixes in the next 72 hours.

## 6. Feature Requests & Roadmap Signals
Recently accepted feature requests that are highly likely to ship in the v0.8.3 or v0.8.4 releases:
1. Add dedicated GUI dashboard surface for channel pairing one-time bind codes (#8998)
2. Add optional Slack Events API mode for scale-to-zero deployment use cases (#9022)
3. Add session rewind and conversation forking workflows to the ZeroCode TUI (#9020)
4. Add validation warnings for invalid channel peer reference config entries (#8997)
The stacked Hindsight external memory backend PR chain (#8992, #8993, #8995) is also near final review and will add a new first-class persistence option for production deployments.

## 7. User Feedback Summary
Core pain points surfaced this week from the community:
1. Users reported that official configuration documentation was previously unreadable and incomplete, making it nearly impossible to write working custom configs without external help — the maintainer team has prioritized doc fixes and this issue (#7758) was closed today.
2. Multiple users running self-hosted production deployments reported breakages in third-party channel integrations (Telegram, Google Workspace, Lark) that block end user workflows.
3. ZeroCode TUI users reported multiple small but annoying UX glitches including hidden log attributes and empty visible assistant outputs that reduce daily usage reliability.
No widespread major dissatisfaction signals were observed, with users showing positive engagement on work to simplify onboarding and improve general UX.

## 8. Backlog Watch
High-priority older items needing unblocking or maintainer attention:
1. The Lark streaming support PR #8495 (opened June 29 2026, https://github.com/zeroclaw-labs/zeroclaw/pull/8495) is marked stale-candidate and needs author follow-up to unblock review.
2. The ADR baseline and architecture decision audit tracker #8691 (opened July 4 2026) is marked as needing maintainer review and has not yet been assigned to a core team member.
3. The Lean Core RFC implementation work #6165 (opened April 27 2026) has been in progress for 2.5 months and requires a formal review checkpoint from core leadership to align implementation priorities.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*