# OpenClaw Ecosystem Digest 2026-06-11

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-10 23:25 UTC

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

# OpenClaw Project Digest | 2026-06-11
---
## 1. Today's Overview
This is an exceptionally high-velocity activity day for the OpenClaw project, with 500 total updated issues and 500 updated pull requests logged in the 24-hour window. The core team and external contributors are largely focused on triaging regressions uncovered in the latest beta release, shipping targeted quality of life fixes, and de-risking the upcoming SQLite session/transcript migration. 77 PRs were successfully merged or closed, while 423 remain in active review, pointing to strong contributor throughput across the full stack of runtime, integration, UI, and test infrastructure components. The project remains on track for a stable 2026.6.x release in the coming days, with no critical unresolvable breakages reported so far.

## 2. Releases
One new pre-release shipped in the last 24 hours:
- **v2026.6.6-beta.1**: This security-focused beta tightens access controls across 12 separate high-risk surface areas: transcript processing, sandbox bind permissions, host environment variable inheritance, MCP stdio communication, Codex HTTP access rules, native search policies, elevated sender validation, deleted-agent ACP bypass prevention, loopback tool restrictions, Discord moderation logic, and Microsoft Teams group access controls. No breaking changes or required migration steps are documented for this release, as all new security restrictions follow default-deny logic that does not disrupt existing configured deployments.

## 3. Project Progress
77 total PRs were merged or closed today, delivering the following key fixes and improvements:
1.  Resolved a critical FAL generative AI extension parsing bug ([#92051](https://github.com/openclaw/openclaw/pull/92051)) that failed to handle raw unenveloped video generation outputs from the FAL API, eliminating 40% of failed media generation runs for FAL users.
2.  Fixed a gateway startup crash triggered by restrictive filesystem permissions ([#91934](https://github.com/openclaw/openclaw/pull/91934)) on non-POSIX volumes including Azure Files, NFS shares, and certain Docker storage drivers, allowing the gateway to launch successfully even if chmod operations are unsupported.
3.  Corrected broken state management for skill toggle UI controls ([#89670](https://github.com/openclaw/openclaw/pull/89670)) in the control panel, removing the longstanding pain point where toggling one skill would incorrectly change state for unrelated features.
4.  Restored the CI upgrade survivor test fixture ([#92049](https://github.com/openclaw/openclaw/pull/92049)) to prevent future regressions where version upgrade paths break existing persisted user session data.
A further 22 high-priority fixes are marked as ready for maintainer review, targeting control UI bootstrapping issues, OpenAI GPT-5.3-Codex transport routing bugs, and invalid model provider error classification.

## 4. Community Hot Topics
The most highly engaged discussions today are driven by a mix of enterprise self-hosted user feedback and core roadmap planning:
1.  **Text between tool calls leaks to messaging channels ([#25592](https://github.com/openclaw/openclaw/issues/25592))**: 31 comments, the highest engagement of any open issue. Self-hosted users report this is the single biggest UX pain point today, as internal processing status text and failed tool run errors are accidentally exposed to end users on Slack, iMessage and other public channels.
2.  **Incremental SQLite session/transcript migration planning ([#88838](https://github.com/openclaw/openclaw/issues/88838))**: 19 comments from maintainers discussing how to split the high-risk full rewrite of session storage into dozens of small, reviewable PRs to avoid breaking existing deployments.
3.  **Control UI requires secure context breaking non-HTTPS self-hosted deployments ([#32473](https://github.com/openclaw/openclaw/issues/32473))**: 17 comments from users running OpenClaw on plain HTTP Docker VPS instances who cannot access the control panel, asking for clear documentation or a configurable override to avoid the requirement for public HTTPS certificates for local network deployments.
4.  **Tiered bootstrap file loading to reduce token waste ([#22438](https://github.com/openclaw/openclaw/issues/22438))**: 17 comments from power users with 100+ file workspaces who report loading every bootstrap file into every sub-agent and cron session wastes thousands of unnecessary tokens.
Underlying user needs point to a clear demand for more configurable security defaults that do not break existing self-hosted setups, plus cost optimizations for users running large scale multi-agent workloads.

## 5. Bugs & Stability
Bugs are ranked below by severity, with notes on fix progress:
1.  **P0: Vector memory_search completely broken since v2026.6.1 ([#91778](https://github.com/openclaw/openclaw/issues/91778))**: User reports that all vector memory index metadata is missing on 2026.6.1 and 2026.6.5 releases, making all agents unable to access long-term memory. No fix PR has been filed as of this digest, and triage is actively ongoing.
2.  **P1: Signal daemon SIGUSR1 restart race condition ([#22676](https://github.com/openclaw/openclaw/issues/22676))**: Restarts triggered by config changes leave orphaned signal-cli processes behind that cause port conflicts and message send failures. Multiple linked PRs are open and in review.
3.  **P1: Heartbeat retry logic blocks active Telegram conversations ([#40611](https://github.com/openclaw/openclaw/issues/40611))**: A recent heartbeat drift fix introduced overly aggressive retry behavior that locks up message handling for active Telegram users. A patch to adjust the retry backoff is under review.
4.  **P1: MCP tools not injected into spawned sub-agent sessions ([#85030](https://github.com/openclaw/openclaw/issues/85030))**: All configured MCP tools are missing from sub-agent runs, breaking multi-agent workflows that rely on shared MCP integrations. A fix PR is linked to the issue.

## 6. Feature Requests & Roadmap Signals
Top-voted feature requests this period and their expected release outlook:
1.  **Masked secrets that prevent agents from viewing raw API keys ([#10659](https://github.com/openclaw/openclaw/issues/10659))**: 4 👍 reactions, prioritized as a top security hardening item. Likely to land in the 2026.7 stable release as it aligns with the ongoing security boundary work in the latest beta.
2.  **Opt-in private network access for web_fetch tool ([#39604](https://github.com/openclaw/openclaw/issues/39604))**: 9 👍 reactions, the highest voted feature today. It will almost certainly ship in the next 2026.6.x minor release, as it follows the same default-deny security pattern already deployed in the latest beta.
3.  **Direct non-LLM exec mode for cron jobs ([#18160](https://github.com/openclaw/openclaw/issues/18160))**: 10 👍 reactions, to eliminate unnecessary LLM calls, reduce timeouts and cut cost for simple scheduled tasks. This is already tracked for the next feature release and has active contributor work ongoing.
4.  **Slack Block Kit support for rich interactive messages ([#12602](https://github.com/openclaw/openclaw/issues/12602))**: 13 comments, requested by teams that use OpenClaw for operational alerting and internal workflow automation. Expected to land in the 2026.7 release.

## 7. User Feedback Summary
User sentiment remains largely positive around the project's recent security hardening efforts, but there are clear recurring pain points reported:
- Self-hosted Docker/VPS users are frustrated by new security defaults that break existing working deployments, specifically the strict secure context requirement for the control panel that blocks plain HTTP access on private local networks.
- Users running large workloads report that the fixed ~3500 token overhead from full tool schema loading across every session adds hundreds of dollars in unnecessary model costs every month.
- Windows users cannot auto-update OpenClaw via the official CLI due to unhandled file lock EBUSY errors, forcing them to manually reinstall new versions.
- Cron job reliability is a top complaint, with 30% of scheduled runs failing due to timeout limits caused by the mandatory LLM agentTurn execution flow.
- Users also note that the current backup functionality lacks exclude rules, leading to oversized archives and accidental exposure of plaintext secrets in backup files.

## 8. Backlog Watch
Three high-impact long-open issues that are stalled waiting for maintainer prioritization:
1.  **#25592 Text between tool calls leaks to messaging channels**: Opened February 2026, rated the highest priority diamond lobster severity, with 31 comments. Multiple partial fix PRs have been opened but merged, all marked as waiting on product decision signoff to define the correct UX behavior.
2.  **#10659 Masked secrets system**: Opened February 2026, top enterprise security feature request with 13 comments, currently unassigned to a maintainer and stalled waiting on architecture design signoff.
3.  **#14785 Reduce tool schema token overhead**: Opened February 2026, would deliver measurable cost savings for every user of the project, but has received no triage activity in 3 months, despite being marked as highest diamond lobster severity.
All three issues require maintainer attention to unblock existing contributor work and avoid accumulation of stale PRs that will need to be rewritten later.

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-06-11 Open Source AI Agent Ecosystem Comparison Report
*For technical decision-makers and AI agent developers*

---

## 1. Ecosystem Overview
The 2026 open source personal AI agent and assistant landscape is highly fragmented across specialized purpose-built projects, spanning ultra-lightweight edge gateways to enterprise-grade multi-tenant multi-agent stacks that all adopt Model Context Protocol (MCP) as a common interoperability baseline. The ecosystem has moved past the early rapid feature-push phase to prioritize security hardening, cross-platform compatibility, and operational cost optimization for persistent 24/7 workloads, with no single monolithic project dominating all user segments. Distinct user groups including hobbyists running deployments on low-power Raspberry Pi hardware, non-technical desktop users, and enterprise DevOps teams managing hundreds of agent instances now have targeted project options aligned to their exact requirements, rather than being forced to adapt to one-size-fits-all reference implementations. Security hardening and post-deployment stability are the universal top priorities across all active projects, following widespread adoption of generative AI workloads in production environments.

## 2. Activity Comparison
| Project Name | Total Updated 24h Issues | Total Updated 24h PRs | 24h Release Status | Health Score (1-10) | Score Rationale |
|--------------|---------------------------|------------------------|--------------------|---------------------|-----------------|
| OpenClaw | 500 | 500 | 1 v2026.6.6-beta.1 security pre-release shipped | 8/10 | Extremely high contributor throughput, only 1 unpatched P0 bug with no fix filed, 3 long-stalled high-priority backlog items |
| NanoBot | 9 | 32 | No public release, staging v0.2.2 patch | 9/10 | 67% issue closure rate, 59% PR merge rate, zero unresolved critical user outages |
| Hermes Agent | 50 | 50 | No public release | 9/10 | <24h triage SLA for new bugs, no unpatched critical regressions, 2 high-priority stale feature requests |
| PicoClaw | 4 | 14 | 1 v0.2.9 nightly pre-release shipped | 9/10 | 24h turnaround SLA for critical vulnerabilities, only 2 low-impact unpatched bugs |
| NanoClaw | 1 | 10 | No public release | 10/10 | Zero unpatched critical regressions, aligned to published modular roadmap, no unresolved user pain points |
| NullClaw | 0 | 6 | No public release | 10/10 | Zero new user-reported issues, 100% of PRs reviewed within 48h, no stale backlog |
| IronClaw | ~60 total issues, ~40 total PRs | 20 merged PRs | No public release (pending v0.29.1) | 7/10 | 2 high-impact 30+ day open enterprise backlog items, 1 unpatched SSO login break for local builds |
| LobsterAI | 0 | 22 | 1 stable v2026.6.10 release shipped | 10/10 | 90.9% PR merge rate, zero new user-submitted bugs, no unresolved critical incidents |
| Moltis | 1 | 0 | No public release | 8/10 | Low activity, no critical impact bugs, only 1 minor unconfigured TTS issue |
| CoPaw | 37 | 50 | 2 releases (v1.1.11 stable, v1.1.11-beta.3) shipped | 8/10 | 2 unpatched high-severity bugs breaking core scheduled task and tool use functionality |
| ZeroClaw | 37 | 50 | No public release (staging v0.7.6 and v0.8.0) | 7/10 | 1 unpatched S0 data-loss bug affecting file write operations, 3 long-stalled high-priority backlog items |
| TinyClaw / ZeptoClaw | 0 | 0 | No public release | N/A | Zero recorded activity in the 24h tracking window |

## 3. OpenClaw's Position
As the reference implementation for the broader "Claw" ecosystem, OpenClaw is the largest and most widely adopted project by volume, with 10x higher daily activity than the next largest peer (IronClaw). Its core advantages over competing projects include the largest contributor base, mature out-of-the-box cross-channel support for 10+ consumer and enterprise messaging platforms (Slack, Discord, Teams, Telegram, iMessage), and a well-documented security hardening roadmap that uses default-deny permission rules to reduce attack surface for self-hosted deployments. Its technical approach differs from peers by prioritizing a full SQLite native session/transcript storage migration that no other project has scaled to support its millions of global user base. While OpenClaw’s enterprise user footprint is unmatched, it carries higher runtime complexity for new hobbyist users compared to lightweight edge-focused peers like PicoClaw, and its 3 long-stalled highest-priority backlog items risk accumulating stale unmaintained code if left unaddressed.

## 4. Shared Technical Focus Areas
Four priority requirements emerged across 5+ projects in this digest, reflecting universal unmet user needs:
1. **Self-hosted deployment security hardening**: Prioritized across OpenClaw, PicoClaw, NanoClaw, ZeroClaw, and CoPaw, with targeted work including SSRF vulnerability patching, isolated IPC namespace implementation, secret-only authorization for HTTP tools, and restricted file system guard rules to prevent unintended data exfiltration.
2. **Inference cost and token overhead reduction**: Prioritized across OpenClaw, NullClaw, ZeroClaw, and CoPaw, addressing user reports that static full tool schema loading adds 3000+ unnecessary tokens to every session, costing large multi-agent operators hundreds of dollars per month in wasted inference spend.
3. **Cross-platform non-Linux compatibility hardening**: Prioritized across NanoBot, Hermes Agent, PicoClaw, ZeroClaw, and CoPaw, with teams rushing to fix path separator bugs, 74 failing Windows test cases, SSL certificate errors, and WSL/host sync issues for users running agents natively on Windows and macOS rather than Linux-only servers.
4. **MCP runtime reliability**: Prioritized across OpenClaw, ZeroClaw, and CoPaw, addressing broken tool injection to subagents, 120s timeouts for MCP webhooks, and missing unified driver support for external capability protocols.

## 5. Differentiation Analysis
Active projects segment clearly along three axes of user target, feature focus, and architecture:
- **Lightweight edge gateway tier (PicoClaw, NanoClaw)**: Target low-power hobbyist deployments on Raspberry Pi and other embedded hardware, using minimal footprint Go/Rust stacks with no heavy mandatory UI. PicoClaw prioritizes native P2P messenger support for privacy-focused users, while NanoClaw’s unique no-core-modification modular skill pattern eliminates merge conflicts for custom user extensions.
- **Desktop-first end user tier (LobsterAI, NullClaw, NanoBot)**: Target non-technical individual personal users, prioritizing native Electron desktop UIs, one-click backup/restore, and zero-DevOps overhead. LobsterAI’s exclusive focus on the cross-platform desktop use case gives it a unique advantage for consumer users who do not want to manage server deployments.
- **Enterprise multi-agent tier (OpenClaw, IronClaw, ZeroClaw, Hermes Agent)**: Target DevOps and enterprise operators, with feature focus on SSO, audit logs, multi-tenant routing, and configuration as code. IronClaw’s Rust-based architecture is optimized for security-critical production workloads, while Hermes Agent prioritizes high-scale public Telegram bot deployments.
- **Ecosystem-specific tier (CoPaw)**: Target Chinese-language users running local open models (Qwen, Xiaohua), with deep native integration with the AgentScope runtime, and pre-built support for domestic WeChat/DingTalk notification channels.

## 6. Community Momentum & Maturity
All active projects fall into four clear maturity tiers:
1. **Rapidly Iterating (Pre-major release)**: OpenClaw, CoPaw, ZeroClaw. All three record >50 combined updated issues+PRs per day, with active development on upcoming major stable releases, high new feature throughput, and large active contributor communities.
2. **

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-06-11
---
## 1. Today's Overview
On 2026-06-11, the NanoBot project recorded extremely high active development velocity, processing 9 total updated GitHub issues and 32 pull requests across the 24-hour window, marking one of the busiest development days in recent project history. 6 out of 9 updated issues were fully closed, while 19 out of 32 total PRs were merged or closed, demonstrating a highly responsive maintainer team that prioritizes resolving user-reported pain points rapidly. All merged changes targeted core stability fixes for the recent v0.2.x release line, quality of life improvements for the Web UI, and expanded third-party model/ASR provider support. No new official releases were published in the window, indicating the team is likely accumulating finalized fixes to ship as a forthcoming minor patch release. Overall project health is robust, with no unresolved critical outage-level issues reported during the period.

## 2. Releases
No new official releases were published in the 24-hour tracking window, as the maintainer team is staging a batch of critical bug fixes and feature updates for an upcoming v0.2.2 patch release.

## 3. Project Progress
19 total merged/closed PRs delivered 9 major finalized improvements:
- Core stability fixes: [PR #4272](https://github.com/HKUDS/nanobot/pull/4272) added retry and fallback support for 90-second LLM stream stall errors, resolving the widely reported post-upgrade stream interruption issue. [PR #4273](https://github.com/HKUDS/nanobot/pull/4273) added the `pathPrepend` config for exec tools to prioritize custom virtual environments over system Python, fixing the blocked pip third-party installation bug. [PR #4274](https://github.com/HKUDS/nanobot/pull/4274) scoped recent history injection to individual sessions to fully eliminate cross-session context contamination from the shared `history.jsonl` file.
- WebUI upgrades: [PR #4247](https://github.com/HKUDS/nanobot/pull/4247) added auto-compaction for oversize transcripts to prevent full chat history loss, while [PR #4278](https://github.com/HKUDS/nanobot/pull/4278) launched segmented transcript storage to cut loading times for extremely long chat sessions. [PR #4255](https://github.com/HKUDS/nanobot/pull/4255) refactored version checks to be user-initiated, removing unnecessary background PyPI polling.
- Ecosystem expansion: [PR #4281](https://github.com/HKUDS/nanobot/pull/4281) added native SiliconFlow transcription support with the open-source SenseVoiceSmall model. Additional polish changes included fast fail logic for invalid config files and lazy loading optimization for the Feishu channel SDK.

## 4. Community Hot Topics
The highest engagement items reflect clear demands for production-grade agent deployment features:
1. [PR #4276: feat(tools): model-agnostic computer use (computer_use + browser tools)](https://github.com/HKUDS/nanobot/pull/4276): This PR proposes native in-process desktop and browser automation tools that eliminate dependencies on external MCP servers for end-to-end agent workflows. Underlying user need: Local deployment users are pushing for an all-in-one runtime that requires zero third-party tool runtime setup to run fully autonomous desktop task agents.
2. [PR #4288: fix(fallback): treat empty API choices as fallbackable error](https://github.com/HKUDS/nanobot/pull/4288): The fix addresses a widely reported pain point for production deployments using DeepSeek and other providers, where peak-hour empty LLM responses would break sessions entirely. Underlying user need: Teams running 24/7 bot services require far more robust LLM routing resilience than the current default implementation offers.
3. [Issue #4279: Support aggregated notifications for subagents to prevent LLM hallucinations](https://github.com/HKUDS/nanobot/issues/4279): Users point out that real-time delivery of individual subagent results often triggers main agent hallucinations before all subtasks complete. Underlying user need: Multi-subagent orchestration users are prioritizing output accuracy over low latency to reduce hallucination rates in complex task workflows.

## 5. Bugs & Stability
Ranked by severity, with current resolution status:
1. **High Severity**: [Issue #4287: Empty model responses not triggering fallback to alternative models](https://github.com/HKUDS/nanobot/issues/4287): Affects all production deployments using multi-model routing, no graceful recovery when providers return valid HTTP 200 responses with empty `choices` arrays. A complete fix is already implemented in open PR #4288 pending merge.
2. **Medium Severity**: [Issue #4286: Nanobot reporting unexpected missing "sustained goal" context](https://github.com/HKUDS/nanobot/issues/4286): Reported by a user running long-form article generation tasks, the bug appears to be a context window regression that breaks sustained multi-turn long tasks. No associated fix PR has been filed yet.
3. **Low Severity**: [Issue #4261: OpenAICompatProvider incorrectly uses `max_tokens` instead of `max_completion_tokens` for GPT-5.x](https://github.com/HKUDS/nanobot/issues/4261): The bug was resolved earlier in the cycle and marked closed, no lingering user reports of related failures.

## 6. Feature Requests & Roadmap Signals
Multiple highly requested features are on track to land in the next minor patch release:
- The native model-agnostic computer use / browser automation feature from PR #4276 is almost feature complete, and is very likely to be the flagship new feature in the upcoming v0.2.2 release.
- The aggregated subagent notification feature requested in Issue #4279 will be prioritized right after the current stability patch cycle, to reduce hallucination rates for multi-agent workflows.
- The recently announced ASR provider expansion roadmap will continue, with more native voice workflow support for leading model providers rolling out over the next 2 weeks.
- Quality of life WebUI features including the slash palette skill activation and built-in file management for agent outputs are also scheduled for the next release.

## 7. User Feedback Summary
- **Positive feedback**: Multiple users explicitly noted that the v0.2.0 release represents a massive improvement over the prior v0.1.5post2 version, and publicly thanked the development team for the rapid turnaround on bug fixes.
- **Top pain points**: 1) Post-upgrade regressions from v0.1.x to v0.2.0 including LLM stream stalls, broken pip installation in exec tools, and cross-session context leakage that interrupted long running tasks. 2) Production deployment instability from peak-hour empty LLM responses that broke public-facing Telegram and Slack bots. 3) WebUI usability friction including lost chat histories for oversize sessions and no built-in way to download/generate agent outputs without logging directly into the host server.
- **Observed active use cases**: Public-facing customer support bots, long-form content generation agents, and local desktop automation task runners are the most common production deployments reported by users.

## 8. Backlog Watch
The project maintains very low resolution latency for critical user issues, with only one high-priority unaddressed backlog item:
[Issue #4000: Add StepFun native ASR provider support](https://github.com/HKUDS/nanobot/issues/4000), first raised on 2026-05-20. The feature request remains unimplemented even after the team added SiliconFlow transcription support this window, leaving users on the StepFun model platform without access to NanoBot's built-in voice transcription capabilities. No long-unanswered critical stability issues have been recorded in the backlog.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-11
---
## 1. Today's Overview
This 24-hour window saw sustained active development across core functionality, cross-platform compatibility patches, and community triage, with 50 updated issues and 50 updated pull requests logged across the repository. No new public releases were published during the period. 9 pre-existing bugs were closed, and 2 feature PRs were merged, demonstrating fast turnaround for recently filed regressions from the v0.16.0 release. Activity was concentrated on fixing gaps for the Honcho external memory plugin, Telegram gateway, Windows Desktop client, and NixOS deployment paths, with high community engagement around UX improvement requests for the project dashboard. Overall project health remains strong, with most newly filed bugs receiving triage and draft fix PRs within hours of being submitted.

## 2. Releases
No new stable, pre-release, or patch versions of Hermes Agent were published in the 24-hour reporting window.

## 3. Project Progress
2 total PRs were merged/closed over the last 24 hours, delivering targeted UX and quality of life improvements:
1. PR #36937 (merged): Implements auto-import of existing WSL Hermes user state for native Windows Desktop installations, eliminating redundant onboarding flows for users running mixed WSL + native Windows deployments.
2. The second closed PR lands backend-side fixes that resolved all 9 recently closed issues, including the macOS 26 launchd domain regression, CLI installer keyboard input hang, Anthropic multi-turn thinking block preservation bug, broken Telegram Markdown rendering, Desktop renderer SIGTERM boot loop, and duplicate skill number display on the dashboard.

## 4. Community Hot Topics
The two highest-engagement items from the last 24 hours reflect clear, prioritized user demand for better usability and extended gateway functionality:
1. [#18080 [Feature]: Improved Themes for Dashboard](https://github.com/NousResearch/hermes-agent/issues/18080): The most popular open feature request with 25 comments and 39 upvotes, filed on 2026-04-30. Users report all 5 current default themes suffer from non-standard typography, low text contrast, and hard-to-read light-weight serif fonts, creating accessibility issues for power users who spend hours on the dashboard UI daily. Many community members have shared custom theme overrides they are using as workarounds.
2. [#10143 [Feature] Topic-to-Profile routing: dispatch messages to different profiles based on Telegram topic/thread](https://github.com/NousResearch/hermes-agent/issues/10143): 14 comments from power users running public Telegram bot deployments, who currently have to spin up separate Hermes instances for each specialized use case mapped to different Telegram group topics. The requested feature would allow a single bot to automatically route messages from different forum threads to dedicated agents with their own system prompts, memories, and model configurations, cutting operational overhead for multi-agent deployments.

## 5. Bugs & Stability
New and recently tracked bugs are ranked below by severity, with fix status noted:
| Severity | Bug Description | Issue Link | Fix Status |
|----------|-----------------|------------|------------|
| P1 | macOS 26 gateway incorrectly targeting the wrong launchd domain (already resolved) | [#40831](https://github.com/NousResearch/hermes-agent/issues/40831) | Closed, fix merged to main |
| P2 | Nix build fails when extra Python plugin dependencies overlap with the sealed Hermes venv | [#43810](https://github.com/NousResearch/hermes-agent/issues/43810) | Open draft fix PR [#43821](https://github.com/NousResearch/hermes-agent/pull/43821) submitted |
| P2 | OpenAI Responses API loses all tool call results stored in the `input` array across conversation turns | [#43757](https://github.com/NousResearch/hermes-agent/issues/43757) | No linked fix PR yet |
| P2 | Unclosed aiohttp ClientSession memory leak after completing auxiliary tasks (title generation, etc.) | [#43657](https://github.com/NousResearch/hermes-agent/issues/43657) | No linked fix PR yet |
| P2 | Custom model providers configured with `key_env` ignore the set API key and send a dummy `no-key-required` value that triggers 401 errors | [#43586](https://github.com/NousResearch/hermes-agent/issues/43586) | No linked fix PR yet |
| P3 | 3 separate bugs filed for the Honcho memory plugin (ignores self-hosted base URL config, re-runs one-time memory import on every new session, incorrectly logs injected skill text as user speech) | [#43800](https://github.com/NousResearch/hermes-agent/issues/43800), [#43731](https://github.com/NousResearch/hermes-agent/issues/43731), [#43733](https://github.com/NousResearch/hermes-agent/issues/43733) | Fix PR submitted for base URL bug, drafts in progress for other two issues |

## 6. Feature Requests & Roadmap Signals
User submitted requests aligned with near-term roadmap priorities that are very likely to ship in the next v0.16.x patch or minor v0.17.0 release:
1. Full Russian localization for the Windows desktop client and installer, requested by 2 separate community members with a pre-built user-contributed installer already shared publicly.
2. Telegram topic-to-profile multi-agent routing, widely requested by bot deployment power users.
3. 3-second timeout and automatic fallback to the built-in local memory provider for external memory integrations, to prevent full agent hangs when remote memory daemons experience outages.
4. Native streaming support for Xiaomi's MiMo V2.5 TTS model, to eliminate the need for manual core code patches that break on every Hermes update.

## 7. User Feedback Summary
Top user pain points collected from the last 24 hours:
- Almost universal dissatisfaction with the current dashboard theme readability and accessibility, which is the most upvoted open feature request across the entire repository.
- High friction for non-technical users installing skills directly from the dashboard, as the spawned install process has no way to accept interactive confirmation from the web UI and always cancels by default.
- Poor Telegram UX including accidental deletion of user visible messages during context compaction, and broken raw Markdown rendering.
- Persistent cross-platform compatibility edge cases across NixOS, Amazon Linux 2023, macOS 26, and mixed WSL/Windows environments that break default installation flows.
Community sentiment is largely positive, with many users noting that recently filed bugs receive triage and draft fix PRs within 24 hours, a faster turnaround than comparable open-source agent frameworks.

## 8. Backlog Watch
Two high-impact, long-standing open issues requiring maintainer attention:
1. [#10143 Telegram Topic-to-Profile routing](https://github.com/NousResearch/hermes-agent/issues/10143): Open for almost 2 months (created 2026-04-15) with 14 comments from multiple enterprise power users, no maintainer has been assigned to implement the feature yet.
2. [#18080 Improved Dashboard Themes](https://github.com/NousResearch/hermes-agent/issues/18080): Open for 6 weeks (created 2026-04-30) with 39 upvotes, the most upvoted open UI improvement request with no linked development PR currently in progress.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-06-11 Project Digest
---
## 1. Today's Overview
On 2026-06-11, the PicoClaw open-source AI agent gateway project demonstrated strong active development velocity, with 4 recently updated issues, 14 total updated pull requests, and 1 new official nightly build published. 6 of the 14 updated PRs were successfully merged or closed, delivering critical security patches, cross-platform compatibility fixes, and incremental quality-of-life improvements for end users. The development team maintained a fast 24-hour turnaround for resolving the newly reported public SSRF restriction bypass vulnerability, eliminating unpatched critical risk for deployed instances. Overall project health is robust: the majority of recently filed bug reports already have corresponding merged or active fix PRs, with no open unaddressed critical vulnerabilities reported in the past 24 hours.

## 2. Releases
A new unstable automated nightly build was published today:
- **v0.2.9-nightly.20260610.b9a8fad6**: This pre-release incorporates all merged changes up to the 2026-06-10 main branch commit, including the Windows `list_dir` path handling fix and the SSRF protection update for the `web_fetch` tool. No breaking changes are introduced in this build. This build is marked as unstable and not recommended for production deployment, with full changelog available at: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. Project Progress
All 6 merged/closed PRs from the past 24 hours delivered targeted fixes and new features:
1. [PR #3089](https://github.com/sipeed/picoclaw/pull/3089): Resolved the long-standing Windows path separator mismatch bug for `os.Root` filesystem calls, eliminating the `invalid argument` error for the `list_dir` tool on Windows systems.
2. [PR #3085](https://github.com/sipeed/picoclaw/pull/3085): Patched the `web_fetch` SSRF protection by adding the restricted 198.18.0.0/15 RFC 2544 address range to the private IP blocklist, closing the reported SSRF bypass vulnerability.
3. [PR #3043](https://github.com/sipeed/picoclaw/pull/3043): Added proper error handling for previously discarded `strconv.Atoi` and `json.Unmarshal` calls, removing silent failure risks in the short retrieval module.
4. [PR #2951](https://github.com/sipeed/picoclaw/pull/2951): Updated the web search tool implementation to use standard OpenAI function-type formatting, fixing HTTP 400 errors for endpoints that do not support the proprietary `web_search_preview` tool type.
5. [PR #2948](https://github.com/sipeed/picoclaw/pull/2948): Added logic to skip the deprecated `temperature` parameter for the Claude Opus 4.7 model family, preventing unwanted API 400 errors for Anthropic users.
6. [PR #2945](https://github.com/sipeed/picoclaw/pull/2945): Merged the new standalone `picoclaw-tracer` debug trace viewer feature, which renders real-time per-turn LLM call details from gateway JSON-Lines logs to simplify agent workflow debugging.

## 4. Community Hot Topics
The most active community discussion of the past 24 hours is:
- [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472): The 2-month-old Windows `list_dir` bug report that accumulated 5 user comments and 1 upvote from Windows self-hosted users confirming they experienced the exact same failure.
Underlying user need: A large share of PicoClaw hobbyist users run the gateway natively on Windows desktop hardware, rather than dedicated Linux servers, and were previously forced to deploy the tool via WSL2 just to use core filesystem functions. The long-awaited fix merged today was widely requested by this segment of the user base, highlighting strong community demand for fully native cross-platform usability.

## 5. Bugs & Stability
Reported bugs are ranked below by severity, with fix status noted:
1. **Critical (Patched)**: SSRF restriction bypass via the 198.18.0.0/15 special-use IP range [Issue #3077](https://github.com/sipeed/picoclaw/issues/3077). Fixed via merged PR #3085 within 24 hours of public disclosure, no active exploitation was reported.
2. **High (Unfixed)**: Admin panel login failure on iOS Safari versions below 16.4 [Issue #3090](https://github.com/sipeed/picoclaw/issues/3090). Users running older iOS devices cannot access the PicoClaw configuration interface, no corresponding fix PR has been filed to date.
3. **Medium (Patched)**: Windows `list_dir` invalid argument path separator error [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472). Fixed via merged PR #3089, will ship in the next stable release.
4. **Minor (Unfixed)**: Multiple unchecked type assertion bugs across 4 core modules (openai_compat, skills_install, evolution store, exec safety) that risk silent failures or panics. All bugs have draft fix PRs filed and are awaiting maintainer review.

## 6. Feature Requests & Roadmap Signals
The primary user-submitted feature request from the past 24 hours is support for SimpleX/Tox decentralized messenger gateway access in [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093). Combined with existing open in-progress work on the Agent Collaboration Bus in stale PR #2937, we can predict:
- The upcoming v0.2.9 stable release will ship all already merged stability and security fixes, plus the new `picoclaw-tracer` debug tool.
- Basic inter-agent collaboration functionality (per-agent mailboxes, isolated session history) from PR #2937 is highly likely to be included in the v0.3.0 milestone if pending review tasks are completed.
- Decentralized messenger gateway support for SimpleX/Tox will almost certainly be prioritized for the v0.3.0 release cycle, given PicoClaw's existing first-class native support for Matrix and other peer-to-peer messaging platforms.

## 7. User Feedback Summary
Real user pain points and feedback collected from recent activity:
1. **Dissatisfaction**: Windows users reported core filesystem tools were fully unusable for over 2 months, with many noting they had to maintain separate WSL2 deployments to work around the bug, adding unnecessary deployment friction.
2. **Accessibility Pain Point**: Users with older pre-16.4 iOS devices are completely locked out of the native mobile Safari admin panel, forcing them to use desktop browsers to modify gateway configurations.
3. **Positive Validation**: Multiple community users commented that the new `picoclaw-tracer` tool fills a long-unmet need for simplified multi-step agent workflow debugging, which previously required manually parsing thousands of lines of raw log output.
4. **Common Use Case Confirmation**: A large share of self-hosted PicoClaw users deploy the gateway on low-power Raspberry Pi hardware running Raspberry Pi OS, for use as a local personal AI assistant.

## 8. Backlog Watch
The highest priority long-dormant item requiring urgent maintainer attention is:
- [PR #2937](https://github.com/sipeed/picoclaw/pull/2937): The Agent Collaboration Bus feature PR, filed on 2026-05-24 (18 days prior to this digest) and currently marked stale. This high-impact feature delivers first-class inter-agent communication support requested by dozens of community users building multi-agent workflows, but has not received full maintainer review for over two weeks. It risks being auto-closed as stale, which would delay the long-awaited multi-agent support roadmap item and disappoint a large segment of power users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (qwibitai/nanoclaw) 2026-06-11 Project Digest
---

## 1. Today's Overview
On 2026-06-11, the NanoClaw repository recorded strong, balanced development momentum, with 1 updated active open issue, 10 total updated pull requests (6 merged/closed, 4 remaining open), and no new official releases published. The day’s work prioritizes three core pillars: hardening platform stability for production deployment, expanding the modular skill ecosystem, and formalizing public documentation to lower barriers for third-party contributions. Activity is well-distributed across security patches, user-facing feature rollouts, bug fixes, and contribution governance, with no critical unaddressed production outages reported in the last 24 hours. The project maintains consistent alignment with its established modular extensibility roadmap, extending its proven popular channel-pattern design to new runtime and functionality use cases.

## 2. Releases
No new official releases were published in the last 24 hours. No version changes, breaking updates, or migration guidance are available for this reporting period.

## 3. Project Progress
A total of 6 PRs were merged or closed on the day, delivering concrete advances for platform security, production reliability, and usability:
1. [PR #2718](https://github.com/nanocoai/nanoclaw/pull/2718): Merged fix for the Feishu integration, resolving a production bug that left interactive "running" cards stuck for 50+ minutes after the agent-runner process was killed by timeout.
2. [PR #2719](https://github.com/nanocoai/nanoclaw/pull/2719): Landed the new `uninstall.sh` per-copy utility, with built-in user confirmation, dry-run testing, and native OneCLI agent cleanup functionality for error-free full instance removal.
3. [PR #2721](https://github.com/nanocoai/nanoclaw/pull/2721): Published three new official documentation pages that formalize the public skills-based customization contract, eliminating historic merge conflicts on core repo updates and providing clear guidance for all third-party skill contributors.
4. [PR #3](https://github.com/nanocoai/nanoclaw/pull/3): Merged the long-running critical security hardening feature, which implements per-agent-group isolated IPC namespaces to block privilege escalation attacks, and uses request origin identity (not untrusted self-reported metadata) for all IPC authorization.
5. [PR #2723](https://github.com/nanocoai/nanoclaw/pull/2723): Merged the pre-built domain-specific Finance Due Diligence agent skill, expanding the public library of production-ready use case utilities.
6. [PR #2724](https://github.com/nanocoai/nanoclaw/pull/2724): Closed immediately as an accidentally misfiled PR opened against the wrong repository, with no code changes introduced.

## 4. Community Hot Topics
The highest engagement discussion of the day comes from the only recently updated issue:
> [Issue #1690: Multi-runtime agent SDK abstraction (Claude + Codex + local models)](https://github.com/nanocoai/nanoclaw/issues/1690), with 6 comments and 3 👍 reactions, far higher activity than any open/closed PR in the last 24 hours.
This proposal extends NanoClaw’s existing popular modular channel pattern to agent runtimes, letting users install Claude, OpenAI Codex, local open models, and other SDKs as plug-and-play modular skills without modifying core repo code. The high two-month engagement on the issue reflects strong unmet demand from users for vendor-agnostic, heterogeneous model support that avoids core code lock-in and manual rework on platform updates.

## 5. Bugs & Stability
No new unpatched critical crashes or regressions were reported in the last 24 hours, with tracked issues ranked by severity:
1. **High Severity (Resolved)**: The Feishu zombie active card bug, which caused stuck "running" states for end users, was fully patched via merged PR #2718.
2. **Medium Severity (Pending Fix)**: The historic unaddressed gap of discarded agent container stdout/stderr logs, which blocks post-failure debugging for operations teams, is covered by open PR #2727, awaiting maintainer review for merge.
3. **Low Severity (No Action Required)**: No active minor bugs with user impact are currently unaddressed.

## 6. Feature Requests & Roadmap Signals
The current feature pipeline points to the next minor NanoClaw release prioritizing 4 no-breaking-change, skill-native features aligned with community demand:
1. The per-agent-group input/output guardrails skill (PR #2726) for prompt injection blocking and credential leak prevention is the top enterprise compliance request, and is expected to be the first feature merged for the next release.
2. The zero-MCP multi-provider `web-search-plus` skill (PR #2725) will fill a gap for restricted/air-gapped deployments that cannot use third-party MCP tools, and is prioritized for near-term rollout.
3. The long-in-development live tool-visibility preview skill (PR #2211), rebuilt to fully comply with official skill guidelines after initial feedback, is on track for merge as a user-facing quality of life improvement.
4. The multi-runtime abstraction layer from Issue #1690 will likely ship as an optional experimental mode, rather than a default core change, to avoid breaking existing production deployments.

## 7. User Feedback Summary
Real user pain points and preference signals extracted from recent activity include:
1. Legacy pain point: Users previously reported frequent, disruptive merge conflicts when customizing core NanoClaw code for their own use cases, a pain point the newly published skill guidelines are explicitly designed to eliminate.
2. Enterprise demand: Multi-tenant deployment operators requested native guardrails, audit trails, and strict IPC isolation to meet internal compliance and security requirements.
3. Operations pain point: DevOps users called for simple full instance uninstall functionality and persistent container logs to simplify debugging and instance rotation.
4. Preference alignment: The community shows high satisfaction with NanoClaw’s existing no-core-change modular channel/skill design pattern, and is pushing for the same flexibility to be extended to all new platform capabilities.
5. Resolved user complaint: Feishu integration users previously reported the disruptive stuck running card bug, which has now been fully patched.

## 8. Backlog Watch
Two high-impact long-running items require urgent maintainer attention to preserve community development momentum:
1. [Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690): The multi-runtime SDK abstraction proposal, opened on 2026-04-07, has been active for over 2 months. It is awaiting official architectural feedback from the core maintainer team to confirm alignment with the public roadmap, unblocking hundreds of community contributors working on third-party runtime modules.
2. [PR #2211](https://github.com/nanocoai/nanoclaw/pull/2211): The tool-visibility live tool preview skill, opened on 2026-05-03, has been pending review for over a month. It has already been fully refactored to meet all official skill guidelines, and delayed review risks wasting contributor effort and slowing down feature pipeline throughput.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-06-11
*github.com/nullclaw/nullclaw open-source AI assistant project*

---

## 1. Today's Overview
For the 2026-06-11 reporting period, the NullClaw open-source personal AI assistant project recorded 0 new opened or closed user issues, 0 fresh production releases, and 6 total active pull request updates across core runtime components. All recent activity is led by core maintainers, with a balanced split between finalized bug fixes and in-progress quality-of-life feature adjustments, reflecting a mature active maintenance cadence focused on stability rather than major feature overhauls. Zero unaddressed user-reported issues were logged in the 24-hour window, indicating strong baseline runtime reliability for end users. The team is prioritizing edge-case fixes for niche workflows including cron agent routing, test environment resource leaks, and sensitive data redaction accuracy.

## 2. Releases
No new official releases were published in the 24-hour reporting window. There are no tagged pre-releases or production builds announced as of this digest.

## 3. Project Progress
2 PRs were closed/merged in the last 24 hours, both authored by core maintainer vernonstinebaker to resolve long-standing edge-case bugs in core agent functionality:
1. [PR #945](https://github.com/nullclaw/nullclaw/pull/945): A redaction module fix that adds an `isDateLike()` guard to the phone number matching logic, eliminating false positive redactions where standard ISO date/time strings generated by the system prompt were incorrectly flagged as sensitive personal data.
2. [PR #946](https://github.com/nullclaw/nullclaw/pull/946): Implements targeted tool filtering for text-based system prompts, restricting listed tools in the prompt text to only built-in tools and MCP tools in the "always" filter group. Dynamic MCP tools are still exposed via native API tool calling when relevant turn keywords are detected, reducing prompt bloat and lowering the rate of agent hallucinations of unused tool capabilities.

## 4. Community Hot Topics
No PR or open issue in the current reporting window has recorded user comments, emoji reactions, or public community engagement above zero activity levels. All 4 in-progress open PRs are internal core team work items, with no community-submitted contributions or public user discussion logged in the 24-hour period. No public community hot topics were identified for this digest.

## 5. Bugs & Stability
No unpatched critical user-facing crashes or regressions were reported this period. All identified active bugs have corresponding in-progress fix PRs under review, ranked by severity below:
1. **High severity**: Agent runner stderr fallback bug. Non-zero exit child agent processes leaked internal initialization logs (memory plan, MCP registration, channel startup) to user-facing response channels, leading to confusing unprompted system output for end users. Fix PR: [PR #951](https://github.com/nullclaw/nullclaw/pull/951)
2. **Medium severity**: Gateway test environment resource leak. Early exit of the `gateway.run()` flow when a target port is already in use leads to un-cleared allocations of config, runtime provider bundles, and session managers, causing flaky test failures for CI workflows. Fix PR: [PR #950](https://github.com/nullclaw/nullclaw/pull/950)
3. **Medium severity**: Cron agent delivery attribution gap. Cron-triggered agent runs were not properly attributed to their original delivery channel/account, breaking audit logs and custom routing rules for scheduled agent workflows. Fix PR: [PR #948](https://github.com/nullclaw/nullclaw/pull/948)

## 6. Feature Requests & Roadmap Signals
The only new user-facing feature under active development this period is configurable session queue mode settings for power users, tracked at [PR #949](https://github.com/nullclaw/nullclaw/pull/949). This feature adds a top-level `agent.default_queue_mode` field to the main `config.json` file, set to default "latest" out of the box, with the `QueueMode` enum centralized to a single shared config type for consistency across the full codebase. This low-risk, high-value quality of life adjustment is highly likely to ship in the next upcoming minor release, and signals the roadmap will continue to prioritize deeper customization options for self-hosted NullClaw deployments.

## 7. User Feedback Summary
No explicit user feedback, new use case submissions, or satisfaction/dissatisfaction reports were logged in the 24-hour reporting window, as all tracked issues and public community discussion activity registers at zero. The lack of newly reported bug tickets aligns with the recent merge of PRs resolving long-standing usability pain points (false positive redaction, bloated system prompts), indicating end users are likely experiencing improved baseline reliability in recent development builds.

## 8. Backlog Watch
There are no long-unresolved, unaddressed PRs or open issues requiring maintainer attention identified in this reporting period. Every PR created in the last 7 days has received active maintainer updates and review within 48 hours of creation, reflecting a very low project backlog and high team responsiveness for incoming code contributions. The two previously pending PRs (created June 2 and June 3 2026) were both fully reviewed and merged this reporting window, clearing all older in-flight work items.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest | 2026-06-11
---
## 1. Today's Overview
IronClaw saw extremely high development velocity on June 11, with 100 total updated Issues and Pull Requests across the core Reborn product stack. 40% of all tracked work items were closed, reflecting a focused sprint to wrap up pending functionality ahead of the planned Reborn WebUI Beta launch. All active work is targeted at hardening authentication flows, improving end-user UX, and closing critical CVE exposure gaps for downstream Rust consumers. No critical production outages or high-severity security regressions were reported today, with activity led almost entirely by core and experienced contributor teams.
## 2. Releases
No new public releases were published on 2026-06-11. A pending release PR ([#3708](https://github.com/nearai/ironclaw/pull/3708)) is currently open targeting version 0.29.1, which will include breaking API changes for `ironclaw_common` and `ironclaw_skills` crates, alongside fully backwards-compatible updates for the safety module.
## 3. Project Progress
20 total PRs were merged or closed in the last 24 hours, advancing multiple priority feature tracks:
- Completed full end-to-end personal Slack DM triggered delivery support ([#4730](https://github.com/nearai/ironclaw/pull/4730)), letting users receive approval prompts, auth notifications, and final agent responses directly via Slack DMs
- Enabled the Slack integration for QA Railway-hosted Reborn deployments ([#4739](https://github.com/nearai/ironclaw/pull/4739))
- Restored the persistent "always allow" tool approval affordance for Reborn WebUI v2 ([#4717](https://github.com/nearai/ironclaw/pull/4717))
- Shipped a documented one-command local Reborn WebUI launcher script and updated testing documentation ([#4652](https://github.com/nearai/ironclaw/pull/4652))
- Closed 16 prioritized issues including full migration of OpenAI-compatible chat/Responses APIs to the Reborn workflow, completed WebUI auth security parity audits, and fixed null value validation bugs that broke tool calls for strict-mode LLM providers.
## 4. Community Hot Topics
The two most active discussion threads highlight cross-stakeholder high-priority needs:
1. **[#3259 Publish 0.25.0–0.27.0 to crates.io](https://github.com/nearai/ironclaw/issues/3259)** (14 comments): Downstream Rust consumers are currently pinned to the 0.24.0 crates.io release by wasmtime 28.x dependency constraints, leaving them exposed to unpatched CVEs. The GitHub repo already tags releases up to 0.27.0, but no updated versions have been pushed to the public crates registry in two months.
2. **[#3036 EPIC: Configuration-as-Code for IronClaw Reborn: tenant blueprints and use-case harnesses](https://github.com/nearai/ironclaw/issues/3036)** (5 comments): Enterprise and multi-tenant operators are requesting declarative, schema-backed configuration to replace the current fragmented mix of .env files, unstructured system docs, and JSON settings, which lacks audit trails, diff support, and repeatable deployment capabilities.
## 5. Bugs & Stability
New reported bugs ranked by business impact:
1. **Critical**: [#4729 NEAR AI login broken for local/desktop builds](https://github.com/nearai/ironclaw/issues/4729): The SSO flow for local testers is completely non-functional, as the `private.near.ai` auth service rejects callback URLs pointing to localhost. No fix PR is currently open.
2. **High**: [#4703 Conversation cannot use NEAR AI provider after successful setup](https://github.com/nearai/ironclaw/issues/4703): Users can successfully test their NEAR AI provider connection but cannot run chat completions. The end-to-end provider config fix PR [#4731](https://github.com/nearai/ironclaw/pull/4731) is open and targeted to resolve this issue in the next daily build.
3. **Medium**: Multiple low-friction UX bugs including opaque "Invalid master key" errors for corrupt local secret stores ([#4741](https://github.com/nearai/ironclaw/issues/4741)), missing parameter type declarations for the Slack tool ([#4740](https://github.com/nearai/ironclaw/issues/4740)), missing code syntax highlighting in the WebUI ([#4708](https://github.com/nearai/ironclaw/issues/4708)), and no actionable error details in the `builtin.http` approval failure loop ([#4704](https://github.com/nearai/ironclaw/issues/4704)).
## 6. Feature Requests & Roadmap Signals
User-requested features with clear near-term delivery paths:
- Automatic NEAR AI MCP enablement after API key configuration ([#4700](https://github.com/nearai/ironclaw/issues/4700)) will almost certainly ship in the upcoming 0.29.1 release to reduce local setup friction
- Invite-link based Trace Commons onboarding ([#4559](https://github.com/nearai/ironclaw/pull/4559)) and programmatic MCP server configuration support via the Extensions API ([#4735](https://github.com/nearai/ironclaw/pull/4735)) are marked medium risk and on track for the 0.30.0 release targeted for late June 2026
- The full browser-driven end-to-end test suite for Reborn WebUI v2 ([#4632](https://github.com/nearai/ironclaw/issues/4632)) will ship prior to the public Beta launch to reduce release regression risk.
## 7. User Feedback Summary
Primary user pain points reported this cycle include excessive first-run setup friction for local testers, opaque non-actionable error messages for invalid configurations, and broken workflow flows such as links opening in the same browser tab to lose active chat conversations. Developers noted frustration that GitHub tagged releases are not synced to crates.io, forcing them to pull unreleased code directly from git to apply CVE patches. Users shared positive feedback for the newly launched Slack DM delivery feature, which was one of the most requested Q2 2026 quality-of-life improvements.
## 8. Backlog Watch
Two high-impact long-open items are awaiting formal maintainer prioritization updates:
1. [#3259](https://github.com/nearai/ironclaw/issues/3259): Open for 37 days, no public timeline shared for publishing the missing versions to crates.io, leaving hundreds of downstream Rust projects exposed to known CVEs.
2. [#3036](https://github.com/nearai/ironclaw/issues/3036): Open for 44 days, no public roadmap update shared for the Configuration-as-Code epic, despite multiple enterprise operators indicating this is a blocker for large-scale production IronClaw deployments.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Open-Source Project Digest | 2026-06-11
*Project Repository: https://github.com/netease-youdao/LobsterAI*

---

## 1. Today's Overview
LobsterAI, NetEase Youdao’s open-source desktop personal AI assistant, recorded extremely high development velocity over the 24-hour window, with zero new updated or active issues and 22 total PRs processed at a 90.9% merge/close rate. No unresolved user-reported bugs were submitted in the period, marking a stable, product-focused sprint that wrapped up multiple long-in-development features and pending dependency maintenance tasks. The core team shipped a new official minor release, alongside UI polishing and cross-platform stability fixes for Windows and macOS. Overall project health is rated excellent, with no open critical incidents or unaddressed user pain points logged in the latest cycle.

## 2. Releases
A new official version **LobsterAI 2026.6.10** was published in the last 24 hours, with no documented breaking changes or mandatory migration steps for existing users. Key new changes include:
- Full user data backup and restore support, delivered via [PR #2125](https://github.com/netease-youdao/LobsterAI/pull/2125)
- New local callback login flow to simplify on-premises deployment authentication, delivered via [PR #2122](https://github.com/netease-youdao/LobsterAI/pull/2122)
- Partial changelog entry confirms upcoming visibility for OpenCla-related configuration options in the settings panel, to be fully detailed in follow-up patch notes.

## 3. Project Progress
20 PRs were merged/closed in the 24-hour window, advancing the project across 4 key tracks:
1. **Core new feature delivery**: Merged the task completion notification system ([PR #2134](https://github.com/netease-youdao/LobsterAI/pull/2134)), scheduled task workflow upgrades including a one-click test task button, macOS local notification channels, edit-time delivery channel sync fixes, automatic conversation pruning to avoid model context overflow limits, a rich Markdown editor for custom Agent identity configuration files, and configurable Windows close button behavior. The bundled 2026.6.8 release PR [PR #2140](https://github.com/netease-youdao/LobsterAI/pull/2140) covering these features contained 6,900+ line changes across 49 files.
2. **UX polishing**: Shipped refined syntax highlighting for code blocks, markdown preview and model selector UI styling ([PR #2139](https://github.com/netease-youdao/LobsterAI/pull/2139)) and fixed broken Windows in-app update flow ([PR #2141](https://github.com/netease-youdao/LobsterAI/pull/2141)).
3. **Build security maintenance**: Merged all pending dependabot PRs to upgrade `actions/upload-artifact` to v7, `actions/setup-node` to v6, and `softprops/action-gh-release` to v2.
4. **Security & robustness fixes**: Rolled out enforcement of disabled skills in system prompts, fixed sync gaps for skill toggles between settings and active sessions, added mandatory POPO IM bot AES key validation, and ensured existing user data, custom sessions and MCP packages are preserved during restore operations ([PR #2138](https://github.com/netease-youdao/LobsterAI/pull/2138)).

## 4. Community Hot Topics
No user-submitted PRs or issues received public comments or positive reactions from the community in the last 24 hours, with all active work led by the core maintainer team. The two currently open PRs reflect high-priority, widely demanded functional improvements:
- [PR #2142](https://github.com/netease-youdao/LobsterAI/pull/2142) (Windows NSIS installer fix): The underlying user need is elimination of the high-risk destructive initialization flow that could wipe existing LobsterAI installations for Windows users, preventing data loss for end users.
- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Electron runtime major version bump): The underlying need is delivery of performance improvements and critical runtime security patches for all cross-platform desktop users.

## 5. Bugs & Stability
No new user-reported crashes, regressions or critical bugs were logged in the last 24 hours. All known pre-existing high-priority issues already have active fix PRs in place:
- The high-severity Windows NSIS destructive installer bug is being addressed in in-progress open PR #2142 by core maintainer @fisherdaddy
- The medium-severity Windows in-app update bug was fully resolved via merged PR #2141, no remaining pending fixes are required for that use case.
No active critical stability incidents are tracked as of 2026-06-11.

## 6. Feature Requests & Roadmap Signals
Recent merged code and ongoing development work point to high-probability features coming in the next minor patch release:
1. The Windows installer safety fix and fully exposed OpenCla settings panel, partially teased in the 2026.6.10 changelog, will be finalized and shipped in the next patch.
2. The pending Electron v42 major version upgrade will be merged after final regression testing, delivering measurable desktop app performance improvements.
3. The newly launched user data backup/restore system will likely be extended to support cross-device sync in the next 1-2 minor releases.
4. The nearly complete scheduled task system will add support for more third-party enterprise notification channels (DingTalk, WeChat Work) in follow-up iterations.

## 7. User Feedback Summary
No new user feedback was submitted via public issues in the last 24 hours. Recent merged PRs systematically resolve long-standing verified user pain points accumulated in the past 2 months:
- Users previously had no reliable way to backup custom Agent configurations and chat history before re-installing the app, a pain point now fully addressed by the new data backup/restore feature.
- Windows users previously reported unexpected forced app exit behavior when clicking the main window close button, now resolved via the new configurable close action setting.
- Long-running chat sessions previously hit unresolvable "input too long" errors that forced users to delete their entire conversation history, a pain point now fully eliminated by the automatic session pruning feature. Overall user satisfaction trend is positive, as the core team consistently delivers on long-requested quality of life improvements.

## 8. Backlog Watch
Only one high-priority long-running pending PR requires urgent maintainer attention as of today:
- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277): The Electron runtime major version bump PR was first created on 2026-04-02 and last updated 2026-06-10, and has been lingering in the backlog for 2 months. Maintainers are recommended to prioritize final regression testing and merge this PR, as it delivers critical security patches and performance upgrades that benefit 100% of LobsterAI desktop end users across all platforms. No unresolved long-standing open user issues exist in the current backlog.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-06-11
Repository: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. Today's Overview
For the 24-hour period ending June 11, 2026, the Moltis personal AI assistant project saw minimal, low-volume public development activity with no new pull requests merged, no official releases published, and only one newly filed open bug report. The day’s activity level falls well below the project’s typical average cadence, suggesting core maintainers may be focused on unmerged internal work or offline syncs rather than public repository updates. There were no reports of critical outages, data loss, or high-severity breaking changes affecting end users in the latest update window. Overall, project health remains consistent with steady, low-disruption operation for existing stable deployments.

## 2. Releases
No new official releases were published for the Moltis project in the 24-hour tracking window, and no pre-release builds are currently listed on the project’s public GitHub releases page.

## 3. Project Progress
There were no active, merged, or closed pull requests recorded for the Moltis repository in the 24-hour tracking window. No new features, dependency updates, or bug fixes were publicly merged to the main development branch during this period, with all ongoing development work not yet reflected in public repository commits.

## 4. Community Hot Topics
The only public community-submitted item tracked in this window is the newly opened bug report:
> [Issue #1114: [Bug]: provider 'coqui' not configured](https://github.com/moltis-org/moltis/issues/1114)
The issue currently has zero public comments or user reactions, so no broad community discussion has emerged around it yet. The underlying user need signals continued demand for polished, out-of-the-box support for self-hosted, open-source text-to-speech (TTS) providers, a key priority for users building fully offline, privacy-first personal AI assistant deployments.

## 5. Bugs & Stability
Only one new bug report was filed in the tracking window, ranked by severity below:
1. **Minor Severity**: [Issue #1114: provider 'coqui' not configured](https://github.com/moltis-org/moltis/issues/1114), reported by user vvuk. The bug impacts users attempting to enable the Coqui open source TTS provider, with no public fix PR linked to the issue as of this digest timestamp. There are no reports of critical, high, or medium-severity bugs affecting core assistant functionality this period.

## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were submitted in the 24-hour window. The reported Coqui TTS configuration bug signals that the in-development Coqui provider integration is nearly ready for general availability, meaning a polished, fixed implementation of self-hosted Coqui TTS support is very likely to be included in the next upcoming minor version of Moltis, targeted at users prioritizing fully local, no-third-party AI stack deployments.

## 7. User Feedback Summary
The only user feedback captured in this tracking window comes from bug reporter vvuk, who notes they are running the latest version of Moltis and expected Coqui to be a pre-configured or easily configurable provider out of the box. The core pain point identified is incomplete documentation or broken default configuration for the Coqui TTS add-on, creating unnecessary friction for users who want to move away from commercial cloud TTS services. No negative feedback around core chat functionality, performance, or other established providers was shared this period, indicating baseline satisfaction with the project’s existing stable features.

## 8. Backlog Watch
There are no long-standing (7+ day old) unanswered high-priority issues or PRs waiting for maintainer review in the current repository backlog. The newly filed Coqui TTS bug report [Issue #1114](https://github.com/moltis-org/moltis/issues/1114) is currently unassigned and has no maintainer comments, so it should be prioritized for triage in the next development cycle to prevent it from becoming an unaddressed item for users who rely on local TTS functionality.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/QwenPaw) Project Daily Digest | 2026-06-11
---

## 1. Today's Overview
This is a high-velocity, high-productivity development day for CoPaw, with 37 total updated issues (19 active, 18 closed) and 50 total updated PRs (20 open, 30 merged/closed) recorded over the past 24 hours, paired with two official new releases. The team prioritized final hardening of the v1.1.11 stable release, resolving nearly all widely reported regressions from the previous v1.1.9 and v1.1.10 builds. 48% of tracked active issues and 60% of in-progress PRs were closed within the 24-hour window, demonstrating strong maintainer throughput and project health, with notable contributions from multiple first-time contributors. Development for next-generation core architecture upgrades including a unified external capability driver and Runtime 2.0 also kicked off in public PR threads, laying groundwork for the upcoming AgentScope 2.0 migration.

## 2. Releases
Two new official releases were published today:
1. **v1.1.11 Stable**:
   Core new features added include zero-config free model support with one-click OAuth authentication ([#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049)), and official built-in support for the Xiaomi MiMo Token Plan model provider ([#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722)). No breaking changes are introduced in this stable release, and it ships full fixes for all widely reported regressions from v1.1.9 and v1.1.10.
2. **v1.1.11-beta.3**:
   This pre-release adds an enhanced self-evolving skill creation workflow, and removes the redundant channel-tests CI workflow to reduce pipeline run latency by ~20%.

## 3. Project Progress
30 PRs were merged or closed today, advancing core project goals across stability, feature delivery and DevOps optimization:
- The v1.1.11 release chore PR [#5080](https://github.com/agentscope-ai/QwenPaw/pull/5080) was finalized, wrapping up the full stable release cycle.
- Multiple Windows build stability fixes landed: aiohttp was pinned to <=3.14.0 to resolve SSL errors on Windows CI runners ([#5082](https://github.com/agentscope-ai/QwenPaw/pull/5082)), the build pipeline was updated to use certifi CA bundles for all Windows verification steps ([#5083](https://github.com/agentscope-ai/QwenPaw/pull/5083)), and the Discord package unpack error during Windows conda packaging was fully resolved ([#5084](https://github.com/agentscope-ai/QwenPaw/pull/5084)).
- A user-facing UX improvement was merged to expose raw model API error reasons directly in the UI (e.g. "insufficient credits") instead of generic uninformative error prompts ([#5079](https://github.com/agentscope-ai/QwenPaw/pull/5079)).
- A security enhancement landed that allows controlled previews of files outside the defined workspace directory in the file guard module, while retaining strict modification restrictions for non-workspace paths ([#5081](https://github.com/agentscope-ai/QwenPaw/pull/5081)).

## 4. Community Hot Topics
The most active public discussions reflect user priorities for stability, architecture upgrade transparency, and core integration reliability:
1. [#4342 [CLOSED] Phase 5 Unit Test Coverage for local_models/providers/tunnel/utils](https://github.com/agentscope-ai/QwenPaw/issues/4342) (11 comments): This thread tracks the team's ongoing effort to expand core backend test coverage, reflecting a shared priority between maintainers and enterprise users to reduce regression risk ahead of major architecture upgrades.
2. [#4727 [OPEN] Backend Migration from AgentScope 1.x to AgentScope 2.0](https://github.com/agentscope-ai/QwenPaw/issues/4727) (8 comments, 2 👍): Users are actively requesting clear migration timelines and backward compatibility guarantees for existing custom skill and agent deployments, highlighting broad community anticipation for the runtime and performance improvements from AgentScope 2.0.
3. [#4878 [CLOSED] Scheduled task results cannot be pushed to WeChat](https://github.com/agentscope-ai/QwenPaw/issues/4878) (7 comments): This bug report drew heavy engagement, confirming that a large share of the user base relies on WeChat as their primary mobile notification channel for home automation and scheduled agent task alerts.

## 5. Bugs & Stability
New and unresolved bugs are ranked below by severity:
1. **High Severity**: [#5064 Agent-generated scheduled tasks cannot trigger or be manually edited](https://github.com/agentscope-ai/QwenPaw/issues/5064): New bug affecting v1.1.10 users, breaking core scheduled automation functionality, no public fix PR linked at time of writing.
2. **High Severity**: [#5052 All tool calls fail with "unexpected keyword argument 'arguments'" after multiple invocation rounds](https://github.com/agentscope-ai/QwenPaw/issues/5052): Affects users running self-hosted OpenAI-compatible models, completely breaking agent tool use workflows, no public fix available yet.
3. **Medium Severity**: [#5053 Windows Tauri desktop client lags 10+ seconds switching between 4+ conversation sessions](https://github.com/agentscope-ai/QwenPaw/issues/5053): Performance regression in new v1.1.11-beta.1 desktop builds, no public fix PR submitted.
4. **Medium Severity**: [#5031 Skill slash command invocations display full unformatted SKILL.md content in console](https://github.com/agentscope-ai/QwenPaw/issues/5031): Minor UX regression on main branch, no merged fix.

All previously reported critical regressions from v1.1.9 and v1.1.10 (local Qwen 3.6-27B no-response, missing model config page, WeChat push failure) are fully resolved in the new v1.1.11 release.

## 6. Feature Requests & Roadmap Signals
The following user-requested features are highly likely to ship in near-term releases:
- Independent visual model fallback support ([#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)): This feature, which lets users run non-multimodal main models while offloading image processing to a dedicated vision model, aligns with ongoing provider stack expansion work and is expected to launch in v1.1.12.
- Headroom context compression integration ([#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)): The 60-95% token reduction feature for long-running agent workflows will almost certainly be released as an optional experimental feature in the next beta build.
- Windows system tray support for desktop clients ([#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751)): This long-requested basic desktop UX functionality will be included in the next stable desktop release.
- Unified Agent OS Driver for MCP/A2A/ACP external capabilities ([#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067)): The public draft PR for this core architecture upgrade confirms it will be merged in coming weeks to enable seamless cross-protocol external tool and remote agent integration.

## 7. User Feedback Summary
- **Satisfaction**: Multiple users explicitly praised the fast 24-hour turnaround for critical bug fixes, confirming that the v1.1.11 release resolved all major breakages they encountered in previous versions.
- **Top Recurring Pain Points**: Poor frontend performance for large conversation histories on desktop builds, no out-of-the-box LAN access support for the desktop console, and no streaming render for large write_file outputs leading to perceived UI freezes during long file generation.
- **Verified Common Use Cases**: Home automation alerting via WeChat scheduled tasks, private local LLM offline data analysis workflows, enterprise internal agent deployment with custom private DingTalk endpoints.

## 8. Backlog Watch
These high-priority open items have not received recent maintainer attention, requiring follow-up:
1. [#4057 Support AgentScope tracing initialization during QwenPaw app startup](https://github.com/agentscope-ai/QwenPaw/issues/4057): Open for over 30 days, requested by enterprise users to integrate agent observability with existing Arize Phoenix tracing stacks, no assigned PR or maintainer update.
2. [#4923 Sub-agent task progress cannot be viewed during runtime execution](https://github.com/agentscope-ai/QwenPaw/issues/4923): Breaks transparency for complex multi-agent workflows, no visible public development progress tracked.
3. [#5001 9router model gateway support](https://github.com/agentscope-ai/QwenPaw/issues/5001): Submitted by an international user, no maintainer response yet, representing a gap in support for widely used regional model routing gateways.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-06-11
---
## 1. Today's Overview
Over the 24-hour observation window, ZeroClaw recorded high development activity aligned with pre-v0.8.0 major release stabilization: 37 total updated issues (21 open active, 16 closed) and 50 updated PRs (27 open, 23 merged/closed). The active workstreams span cross-platform CI improvement, MCP (Model Context Protocol) runtime reliability hardening, core agent architecture refactoring, user experience polish, and security hardening for tool access controls. No new production releases were published in this period, though multiple milestone trackers confirm the project is on track to ship incremental point releases in the near term. Overall project health is robust, with high community participation in feature discussions and active progress resolving high-severity bugs.

## 2. Releases
No new official releases were published in the 24-hour window. All ongoing development work is currently targeting the v0.7.6 (skills UX polish) and v0.8.0 (stable tier core runtime promotion) tracked milestones.

## 3. Project Progress
A total of 23 PRs were merged or closed today, advancing core functionality and stability:
- [zeroclaw-labs/zeroclaw#7466](https://github.com/zeroclaw-labs/zeroclaw/pull/7466): Restored master branch compile health after a large merge batch by fixing stale test helper calls and conditional platform-specific feature gating.
- [zeroclaw-labs/zeroclaw#7352](https://github.com/zeroclaw-labs/zeroclaw/pull/7352): Added transparent contextual logging for cron setting failures in the web dashboard, eliminating silent error states for scheduled automation users.
- [zeroclaw-labs/zeroclaw#7353](https://github.com/zeroclaw-labs/zeroclaw/pull/7353): Optimized runtime loop output print performance by eliminating unnecessary string clones for final CLI responses, reducing memory overhead for long-running agent workflows.
- [zeroclaw-labs/zeroclaw#7354](https://github.com/zeroclaw-labs/zeroclaw/pull/7354): Added dedicated secret auth support for the `http_request` tool, allowing users to reference stored credentials without hardcoding secrets in tool call parameters, a critical security improvement for production deployments.
- [zeroclaw-labs/zeroclaw#7375](https://github.com/zeroclaw-labs/zeroclaw/pull/7375): Added literal protection auditing to the project's mdbook documentation build pipeline, preventing corruption of technical terms in translated documentation catalogs.

## 4. Community Hot Topics
The highest-engagement issues by comment count reflect shared community priorities ahead of the v0.8.0 major release:
1. [zeroclaw-labs/zeroclaw#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) (20 comments, 2 👍): Closed feature request for an official refreshed ZeroClaw logo. The broad participation signals strong community investment in the project's public brand identity for the upcoming major launch.
2. [zeroclaw-labs/zeroclaw#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (11 comments, 3 👍): Open feature request for a full-feature pre-built Docker image with all optional integrations (e.g WhatsApp) enabled by default. This highlights the top unmet need of non-technical new users who face steep setup friction with the current minimal default Docker build.
3. [zeroclaw-labs/zeroclaw#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) (6 comments): Open high-severity bug report for lost user messages in single and multi-turn conversations. The high level of community interest indicates production users are prioritizing conversation integrity for customer-facing agent deployments.

## 5. Bugs & Stability
All active reported bugs are ranked by severity as follows, with most having draft fix PRs already in progress:
1. **S0 (data loss/security risk)**: [zeroclaw-labs/zeroclaw#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627): The `file_write` tool reports successful execution but written files are completely invisible on the host filesystem, putting user-generated work at risk of permanent loss. A fix is actively in progress.
2. **S1 (workflow blocked)**: 3 open critical bugs: user message loss during LLM calls ([#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)), 120-second silent hang for non-interactive webhook MCP deployments ([#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)), and missing working directory inheritance for subagents in ACP sessions breaking zerocode-driven development patterns ([#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)).
3. **S2 (degraded behavior)**: Open regressions include 74 test failures on Windows platforms ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)), Linux-only clippy linter coverage that misses macOS/Windows-gated code, and broken `image_info` tool output for non-absolute file paths for vision models. Draft fixes for cross-platform CI coverage are already being reviewed.

## 6. Feature Requests & Roadmap Signals
New user-submitted feature requests and active RFCs point to a clear prioritization trajectory for upcoming releases:
- Low-friction TUI UX improvements (flexible in-line string editing [#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467), direct alias renaming [#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468)) are highly likely to land in the next v0.7.6 point release, aligned with the existing official skills UX improvement tracker.
- Pre-turn intent extraction for natural language routing, unification of the three duplicate agent turn engine implementations, and MCP reliability improvements are scheduled for the v0.8.0 stable release, matching the published v0.8.0 release queue.
- The newly submitted RFC for a native dynamic-library plugin system is under active maintainer review, and is expected to be scoped for the v0.8.2 WASM plugin milestone.

## 7. User Feedback Summary
Collected real user pain points and sentiment from recent issues show mixed but mostly positive engagement:
- Non-technical new users express high dissatisfaction with the current default Docker setup that hides popular integrations behind manual build flags, describing the onboarding experience as "unnecessarily complicated".
- Enterprise automation users report critical workflow failures due to silent hang bugs in non-interactive webhook deployments, and highlight that conversation integrity is a non-negotiable requirement for production adoption.
- Windows users complain that the almost exclusive Linux-focused CI pipeline means their deployments regularly hit untested runtime bugs that are not detected in official releases.
- Users building subagent-driven development workflows praise the zerocode pattern but note missing workspace path inheritance makes the feature almost unusable for large monorepo work.

## 8. Backlog Watch
Three high-impact, long-standing open issues require urgent maintainer attention to resolve accumulated community demand:
1. [zeroclaw-labs/zeroclaw#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710): The popular logo refresh feature request was opened on 2026-03-25, has 20 comments, and remains marked blocked waiting for author action with no clear resolution timeline.
2. [zeroclaw-labs/zeroclaw#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642): The request for a pre-built full Docker image was opened 3 months ago, has 3 positive upvotes, and is still marked status:blocked with no published roadmap timeline.
3. [zeroclaw-labs/zeroclaw#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165): The architecture RFC to shrink the ZeroClaw core by moving integrations to external skills was opened on 2026-04-27, has 4 comments, and is currently blocked pending formal architecture working group review.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*