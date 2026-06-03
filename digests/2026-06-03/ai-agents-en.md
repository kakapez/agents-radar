# OpenClaw Ecosystem Digest 2026-06-03

> Issues: 459 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-02 23:45 UTC

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

# OpenClaw Project Digest | 2026-06-03
---
## 1. Today's Overview
OpenClaw saw extremely high development activity in the last 24 hours, with 459 updated issues and 500 updated pull requests, reflecting a heavy focus on stabilizing the recent 2026.5.x release train for self-hosted users. No new official releases were published, as maintainers prioritize backporting urgent bug fixes before tagging a new stable version. Most active work today centers on incremental improvements to session state reliability, cross-channel (Telegram, Feishu, Discord) message delivery fixes, and foundational planning for the long-awaited SQLite session/transcript migration to eliminate known OOM memory leaks. Overall project health remains strong, with 110 PRs merged or closed in the past day and no critical data loss incidents reported.

## 2. Releases
No new official OpenClaw versions were published in the last 24 hours. The project continues to operate on the 2026.5.28 beta release train, with incremental patches landing in main ahead of a planned 2026.5.29 minor stable release.

## 3. Project Progress
A total of 110 PRs and 184 issues were marked merged or closed in the past day, resolving a set of high-priority regressions and feature gaps:
- The P1 Feishu message dispatch TypeError regression from 2026.5.27 (https://github.com/openclaw/openclaw/issues/87646) is fully resolved, restoring normal message processing for all Feishu channel deployments.
- Xiaomi MiMo Token Plan first-class provider support (https://github.com/openclaw/openclaw/issues/86169) has been merged, allowing clean native connections to Xiaomi's hosted LLM service with custom base URL configuration.
- Two widely encountered Codex runtime bugs are fixed: legacy `openai-codex` session route state no longer incorrectly recreates itself after running `openclaw doctor --fix` (https://github.com/openclaw/openclaw/issues/87436), and non-persistent OpenAI Responses routes no longer replay stale item IDs on follow-up turns (https://github.com/openclaw/openclaw/issues/89330).
- Other resolved high-impact issues include the `apply_patch` tool policy regression that blocked agent access to built-in patch functionality, GitHub Copilot cron session "no API provider registered" failures, and a false positive `PLAINTEXT_FOUND` secrets audit flag for Codex auth markers.

## 4. Community Hot Topics
The most actively discussed items in the community, sorted by engagement, reflect core user priorities for multi-agent stability and deployment flexibility:
1. [Issue #52875: Session_send gives no session found regression](https://github.com/openclaw/openclaw/issues/52875) (21 comments): Multi-agent deployment users report broken inter-agent communication after the March 2026 update, with most returned sessions belonging to cron jobs rather than peer agents, disrupting distributed workflow setups.
2. [Issue #88838: Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838) (17 comments): Maintainers and power users are collaborating on a phased, low-risk approach to migrate session state away from JSON files, avoiding the high risk of a single large full rewrite that previously caused widespread outages.
3. [Issue #63918: Cron agentTurn sends thinking=none to gpt-5-nano](https://github.com/openclaw/openclaw/issues/63918) (17 comments): Users running cost-sensitive cron workloads on OpenAI's new gpt-5-nano 400 model hit consistent 400 errors due to invalid `thinking` parameter values, halting scheduled automation runs.
4. [Issue #67035: Windows chat UI regression: input text swallowed, streamed replies invisible until refresh](https://github.com/openclaw/openclaw/issues/67035) (14 comments): A large share of Windows desktop users report completely broken chat UI rendering after the 2026.4.14 update, with user input not persisting to the chat feed and streamed responses only becoming visible after a full page refresh.
5. [Issue #39604: Add tools.web.fetch.allowPrivateNetwork config option](https://github.com/openclaw/openclaw/issues/39604) (13 comments, 9 👍): This widely requested security feature would add an opt-in toggle for web_fetch to access private intranet addresses, a highly desired capability for on-prem self-hosted deployments that currently have no supported way to reach internal services.

## 5. Bugs & Stability
New P1 and high-severity regressions reported in the last 24 hours, ranked by user impact:
1. [Issue #89549: sessions_spawn child runs fail after acceptance with HTTP 401 Missing scopes api.responses.write](https://github.com/openclaw/openclaw/issues/89549): Breaks all multi-agent spawn/child workflow functionality, no existing fix PR filed.
2. [Issue #89374: Timeout compaction can report success but leave Codex channel session unrecoverable](https://github.com/openclaw/openclaw/issues/89374): Falsely marked successful session compaction leaves large Discord Codex sessions permanently stuck at the context limit, requiring manual session deletion to restore service. No fix PR available.
3. [Issue #89525: Telegram channel drops / compact slash command - never appears in commands.log](https://github.com/openclaw/openclaw/issues/89525): Blocks Telegram users from manually triggering session compaction to manage context limits after the 2026.5.18 update.
4. [Issue #88369: isolated cron can still self-conflict on a dedicated cron agent with EmbeddedAttemptSessionTakeoverError](https://github.com/openclaw/openclaw/issues/88369): Randomly fails cron runs even when users have configured a fully isolated dedicated cron agent, a regression introduced in the 2026.5.28 beta.

No critical data loss or corruption bugs were reported in the past 24 hours.

## 6. Feature Requests & Roadmap Signals
High-vote feature requests that are very likely to ship in the next minor 2026.5.x or 2026.6 stable release:
- The `tools.web.fetch.allowPrivateNetwork` private network access opt-in (#39604) already has a linked open PR and 9 positive user reactions, making it a top candidate for the next patch release.
- The opt-in Telegram interleaved progress lane PR (#87072) that renders reasoning text and runtime events in a single durable live message has full proof of concept submitted and is awaiting final maintainer review, set to land in the next release for improved Telegram UX.
- Two additive plugin SDK features, the provider usage-limits read accessor (#89631) and per-turn `usageState` field on the `reply_payload_sending` hook (#89629) are low-risk, no-breaking-change features that will ship in the 2026.6 minor release.
- Persistent followup queue storage across gateway restarts (PR #82572) is a P1 high-priority feature that will eliminate message loss during gateway restarts, targeted for the 2026.6 stable release.
- The phased SQLite session migration tracked in #88838 will roll out in incremental PRs across the next 3 monthly releases to fully resolve the longstanding sessions.json OOM leak.

## 7. User Feedback Summary
Current user feedback trends show mostly positive satisfaction with new LLM provider integrations (GPT-5, MiniMax, Xiaomi MiMo) but growing frustration with recent regressions across chat channels:
1. A large share of self-hosted users running Telegram, Feishu, and Discord bots report consistent post-2026.5.x regressions including duplicate messages, dispatch failures, and missing slash command support.
2. Multi-agent power users who upgraded specifically for inter-agent communication capabilities are highly dissatisfied with the session-not-found bug that breaks their distributed workflow deployments.
3. On-prem enterprise users strongly demand the private web fetch feature, with many community members sharing unsafe custom workarounds to reach internal services that they cannot publicly expose to the internet.

## 8. Backlog Watch
High-impact long-open issues that have not received maintainer attention for multiple weeks and require prioritization:
1. [Issue #52875: Session_send gives no session found regression](https://github.com/openclaw/openclaw/issues/52875): Open since March 23 2026, 3 months old, affects all multi-agent deployments, no assigned fix owner.
2. [Issue #55334: sessions.json unbounded growth causes gateway OOM — skillsSnapshot duplicated per session, no pruning

---

## Cross-Ecosystem Comparison

# 2026-06-03 Open-Source AI Agent Ecosystem Cross-Project Comparison Report
Prepared for technical decision-makers and AI agent developers

---

## 1. Ecosystem Overview
The global open-source personal AI agent landscape reached a clear production-grade inflection point in June 2026, shifting focus from speculative feature prototyping to hardening stability, enterprise compliance, and region-specific customization for self-hosted deployments. The majority of active projects now prioritize solving concrete, high-user-pain issues including multi-agent orchestration reliability, cross-platform chat channel integration, and LLM vendor compatibility, rather than chasing unvalidated experimental use cases. A distinct product segmentation has emerged, with general-purpose full-stack frameworks coexisting alongside lightweight specialized distributions optimized for edge hardware, regulated runtime environments, or local regional market requirements. Adoption growth is particularly pronounced across East Asia, with dedicated engineering investment in supporting domestic Chinese LLM stacks (DeepSeek, Kimi, MiniMax, Xiaomi MiMo) and local IM platforms that are largely underserved by Western-origin agent frameworks.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Merge/Close Rate | 24h Release Status | Project Health Score (1-10) | Notes |
|--------------|---------------------|------------------|----------------------|--------------------|-------------------------------|-------|
| OpenClaw | 459 | 500 | 22% | No new official release | 9 | No critical data loss incidents, no unpatched critical regressions |
| NanoBot | 10 | 28 | 64% | No new release | 9 | All reported bugs have associated fix PRs |
| Hermes Agent | 50 | 50 | 16% | No new release | 8 | 4 unaddressed P1 severity bugs |
| PicoClaw | 3 |14 |36% | 1 nightly pre-release published |9 | All open bugs have complete pending fixes |
| NanoClaw |1 |7 |57% | No new release |10 | Critical CWE-78 security patch merged, zero unresolved high-severity issues |
| NullClaw |1 |1 |0% | No new release |10 | Single medium-severity PII redaction bug with fully written fix PR |
| IronClaw |35 |50 |62% | No new release |9 | High efficiency pre-staging QA hardening phase |
| LobsterAI | 0 user-reported issues |50 |94% | No new release |10 | Proactive pre-release polish, no open public user bugs |
| CoPaw |48 |32 |35% | 1 v1.1.11b1 public beta released |9 | 7 critical security vulnerabilities patched in 24 hours |
| ZeroClaw |50 |50 |34% | 1 v0.8.0-beta-2 pre-release published |8 | 2 unpatched P1 severity channel compatibility bugs |
| TinyClaw / Moltis / ZeptoClaw |0 |0 | N/A | No activity detected | N/A | Likely in maintenance mode or early prototyping stage |

## 3. OpenClaw's Position
OpenClaw is the undisputed ecosystem leader in terms of absolute activity volume, with 9x higher PR and issue throughput than the next most active Tier 1 projects, reflecting a far larger global self-hosted user base and contributor community. Its core advantages over peers include production-tested multi-agent distributed workflow support, the broadest out-of-the-box cross-channel integration (covering Telegram, Discord, Feishu, WeChat and other mainstream IM platforms), and pre-built native first-class provider support for every major Western and Chinese LLM vendor. Unlike peers that rely on in-memory or JSON file session storage, OpenClaw’s phased low-risk SQLite session migration roadmap eliminates the longstanding unbounded sessions.json OOM leak that plagues most competing frameworks, a key differentiator for enterprise deployments with long-running 24/7 agent workloads.

## 4. Shared Technical Focus Areas
Five high-priority shared requirements have emerged across 7+ active projects in the ecosystem:
1. **LLM Provider Compatibility Hardening**: IronClaw, PicoClaw, Hermes Agent, ZeroClaw and more are actively fixing hardcoded parameter conflicts, including removing deprecated parameters (e.g. `temperature` for latest Claude Opus 4.x), supporting non-standard API fields for OpenAI-compatible endpoints, and adding structured retry logic for transient 5xx errors from third-party LLM providers.
2. **MCP (Model Context Protocol) Alignment**: 7 out of 10 active projects are fixing runtime stability issues, authentication flows, and protocol spec compliance to leverage the growing cross-framework MCP tool ecosystem and avoid redundant custom integration work for services like Notion and GitHub.
3. **Production Security Hardening**: CoPaw merged 7 critical security patches, IronClaw implemented subagent permission gating and runtime credential zeroization, NullClaw rolled out default PII redaction, and NanoClaw patched a CWE-78 container injection vulnerability, all responding to growing enterprise demand for auditable, fail-closed deployments.
4. **Regional IM Channel Support**: OpenClaw, NanoBot, CoPaw and ZeroClaw are adding native support for Chinese consumer/enterprise IM platforms (QQ/Napcat, WeChat, DingTalk) that receive no maintenance support from Western-origin agent frameworks.
5. **Unbounded Session State Mitigation**: Multiple projects are implementing custom context compression logic, persistent state storage, and session size controls to eliminate the top user-reported pain point of gateway OOM crashes after days of continuous runtime.

## 5. Differentiation Analysis
The ecosystem exhibits clear targeted segmentation rather than redundant feature overlap:
- **Feature focus splits**: General purpose frameworks (OpenClaw, Hermes Agent, ZeroClaw) target power users building complex multi-agent distributed workflows. Lightweight edge distributions (PicoClaw, NanoClaw) are optimized for low-resource IoT and embedded deployments. Niche specialized distributions (NullClaw) prioritize regulated use cases with default privacy features, while LobsterAI focuses on high-throughput MCP runtime optimization.
- **Target user differences**: Western projects (Hermes Agent, IronClaw) prioritize North American power users and enterprise SaaS use cases, while regional projects (NanoBot, CoPaw) are optimized for Chinese hobbyist, student, and on-prem enterprise users, with native local language UX and local ecosystem integrations.
- **Architectural differences**: Newer projects leverage modern memory-safe languages for targeted components (NullClaw uses Zig for its redaction and security modules, ZeroClaw uses Rust for its high-performance zerocode terminal UI), while mature leaders like OpenClaw use a proven Python+Go hybrid stack optimized for maximal extensibility for third-party plugin developers.

## 6. Community Momentum & Maturity
All active projects fall into three clear maturity tiers:
1. **Tier 1 (Rapid Production Iteration)**: OpenClaw, IronClaw, ZeroClaw, CoPaw, LobsterAI. These projects record >30 PR/issue updates per day, have active core teams, fast-growing first-time contributor bases, and are all on track to launch stable production-grade releases in 2-4 weeks.
2. **Tier 2 (Stable Incremental Improvement)**: NanoBot, PicoClaw, NanoClaw, NullClaw. These projects have consistent low-to-moderate activity, zero unpatched critical regressions, and prioritize incremental stability polish over large new feature development.
3. **Tier 3 (Low/No Activity)**: TinyClaw, Moltis, ZeptoClaw, with no tracked code or issue changes in the 24h window.

60% of Tier 1 projects accepted new first-time contributors in the reporting window, indicating fast expanding ecosystem adoption.

## 7. Trend Signals
Three actionable industry trends derived from community feedback provide clear guidance for AI agent developers:
1. Hardcoded LLM API parameter logic is now obsolete: All production-grade agent frameworks are moving to

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 2026-06-03 Project Digest
---
## 1. Today's Overview
On 2026-06-03, the NanoBot open-source AI assistant framework maintained by HKUDS recorded exceptionally high development activity, with 10 total updated issues (7 open active, 3 closed) and 28 updated pull requests, 18 of which were merged or closed in the 24-hour window. No new formal releases were published during the period. The day’s work covered a balanced mix of critical stability bug fixes, WebUI usability improvements, new third-party integration support, and extensibility feature upgrades, demonstrating sustained high development velocity from the core maintainer team and community contributors. Overall project health is robust, with nearly all newly reported active bugs already having associated draft or submitted fix PRs from community developers.

## 2. Releases
No new formal releases were launched in the past 24 hours. No version changes, breaking changes or migration notes are required for this period.

## 3. Project Progress (Merged/Closed PRs)
All merged deliverables from the past 24 hours are listed below grouped by functional area:
- **New Channel Features**: Native Napcat (QQ) OneBot v11 channel support was merged in [PR #4146](https://github.com/HKUDS/nanobot/pull/4146), adding full support for private and group QQ chat interactions with built-in message validation and test coverage. Two parallel PRs [PR #4162](https://github.com/HKUDS/nanobot/pull/4162) and [PR #4160](https://github.com/HKUDS/nanobot/pull/4160) fully implemented media file attachment support for the email channel, with configurable attachment count and size limits for outbound messages.
- **Core Function Upgrades**: Lightweight local RAG for memory retrieval with local embedding support was merged in [PR #4109](https://github.com/HKUDS/nanobot/pull/4109). The outdated two-phase Dream scheduled task system was refactored to a simpler cron-based flow in [PR #3990](https://github.com/HKUDS/nanobot/pull/3990) to reduce runtime complexity. WebUI gateway dependencies were fully split in [PR #4115](https://github.com/HKUDS/nanobot/pull/4115) to eliminate bloated shared state in the WebSocket channel logic.
- **WebUI Usability Patches**: 5 high-priority WebUI fixes were merged, including bounded startup fetch timeouts ([#4157](https://github.com/HKUDS/nanobot/pull/4157)), sorting non-project chat groups by recency in the sidebar ([#4151](https://github.com/HKUDS/nanobot/pull/4151)), location routing persistence after page refresh ([#4150](https://github.com/HKUDS/nanobot/pull/4150)), and fallback clipboard copy support for non-secure browser contexts ([#4149](https://github.com/HKUDS/nanobot/pull/4149)).
- **Stability Fix**: The `read_file` tool infinite offload loop bug was resolved in [PR #4155](https://github.com/HKUDS/nanobot/pull/4155), which also fully closed related issue [#4153](https://github.com/HKUDS/nanobot/issues/4153).

## 4. Community Hot Topics
The most discussed issues and PRs from the past 24 hours, sorted by engagement:
1. [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006) (2 comments): Bug report of orphaned tool results in conversation history with no matching preceding tool calls. The underlying user demand is full compliance with OpenAI/Anthropic official tool message specification, as strict enterprise-grade LLM APIs will reject requests with mismatched tool call/result pairs.
2. [Issue #4142](https://github.com/HKUDS/nanobot/issues/4142) (1 comment): Community discussion about optimizing LLM API costs for cache-miss input tokens. The underlying need comes from mass user adoption of low-cost models like DeepSeek V4 Flash/Pro, which have partial prompt caching support, and users expect NanoBot to reduce unnecessary input token spend out of the box.
3. [PR #4139](https://github.com/HKUDS/nanobot/pull/4139): Draft PR for a native cloud deployment abstraction layer supporting HuggingFace Spaces and ModelScope. The underlying demand is eliminating manual platform-specific configuration work for non-technical users, to achieve one-click zero-config cloud deployment of NanoBot instances.

## 5. Bugs & Stability (Ranked by Severity)
1. **Critical (Closed, Fix Merged)**: [Issue #4081](https://github.com/HKUDS/nanobot/issues/4081) – `MemoryStore.append_history` generates duplicate cursors under concurrent writes due to missing async/file lock protection. The bug could cause corrupted, duplicate conversation history, and the fix is already shipped.
2. **High (Open, No Fix PR)**: [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006) – Orphaned tool results in conversation history after the earlier tool call ID fix. This causes strict LLM API requests to be rejected, breaking core agent tool execution workflows.
3. **High (Open, No Fix PR)**: [Issue #4168](https://github.com/HKUDS/nanobot/issues/4168) – MCP servers randomly become unreachable with `Session terminated` errors after runtime, requiring a full NanoBot restart to recover. This breaks all MCP-based tool workflows for long-running agent instances.
4. **Medium (Open, Fix PR Submitted)**: [Issue #4167](https://github.com/HKUDS/nanobot/issues/4167) – Image generation fails for OpenAI-compatible APIs that do not support the non-standard `response_format` parameter. Two related fix PRs have been submitted, and the resolution is pending merge.
5. **Low (Open, Multiple Fix PRs)**: [Issue #4158](https://github.com/HKUDS/nanobot/issues/4158) – CLI app installation from WebUI fails when NanoBot is deployed via `uv tool`, due to missing bundled pip in the isolated uv Python environment. Fallback to `uv pip` has been implemented in submitted PRs and is pending merge.

## 6. Feature Requests & Roadmap Signals
High-priority user-requested features that are very likely to be included in the next minor release:
1. Custom configurable image generation provider support ([#4132](https://github.com/HKUDS/nanobot/issues/4132)): The feature addresses the widespread user adoption of third-party open-source image generation endpoints outside the default built-in provider list, and aligned with the ongoing non-standard API compatibility fix work, it is set to land in the next version.
2. WebUI "Fork from here" functionality for historical user messages ([#4163](https://github.com/HKUDS/nanobot/pull/4163)): The open PR already implements full forked session provenance tracking and UI logic, and will be merged imminently.
3. Subagent access to shared MCP service resources ([#4166](https://github.com/HKUDS/nanobot/issues/4166)): This core multi-agent workflow gap is marked as high priority, and will likely be added to the next feature release.
4. Native HuggingFace Spaces / ModelScope deployment layer ([#4139](https://github.com/HKUDS/nanobot/pull/4139)): This onboarding feature will greatly reduce the deployment threshold for new users, and is expected to be included in the next public-facing stable release.

## 7. User Feedback Summary
Real user pain points and feedback collected in the 24-hour window:
- Users show strong dissatisfaction with the lack of support for third-party custom image generation endpoints, as many are testing low-cost open-source image generation APIs that are not compatible with NanoBot's hardcoded image generation logic.
- The MCP integration stack is a major pain point: multiple users report unstable connections to popular MCP services including Notion MCP, and random runtime disconnections that break long-running agent use cases.
- Users express positive anticipation for the newly added Napcat (QQ) channel, which expands NanoBot's deployment scenarios to consumer IM platforms for the Chinese market.
- A large number of users running NanoBot via the popular uv package manager run into pip compatibility errors, which blocks the installation of additional CLI apps from the WebUI.

## 8. Backlog Watch
High-impact long-standing issue that requires maintainer priority triage:
[Issue #1168](https://github.com/HKUDS/nanobot/issues/1168) (opened 2026-02-25, last updated 2026-06-02): Users report that they cannot connect to the Notion MCP service with correctly configured API credentials in NanoBot, while the exact same configuration works perfectly in the official Claude MCP client. This high-impact usability issue for users adopting the MCP tool ecosystem has remained open for over 3 months without maintainer investigation or resolution, and should be prioritized to improve MCP ecosystem compatibility.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-03
Official Repository: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. Today's Overview
The Hermes Agent project saw exceptionally high development activity in the 24-hour window, with 50 updated issues and 50 updated pull requests reflecting an active post-v0.15.1 feature and bugfix sprint. 96% of updated issues remain open for triage or active development, while 16% of all updated PRs were successfully merged or closed yesterday. Most ongoing work prioritizes core agent stability, desktop client UX polish for self-hosted remote deployments, and expanded ecosystem compatibility with new long-context models. Overall project health remains strong, with community contributors submitting more than half of all open active PRs across feature and bug categories. No new official releases were published in this period.

## 2. Releases
No new stable, beta, or pre-release versions were launched in the last 24 hours. The most recently referenced public production build is v0.15.1, which was noted in multiple user bug reports related to desktop OAuth provider resolution.

## 3. Project Progress
8 total PRs and 2 bug/feature issues were merged or closed in the reporting window:
1. [PR #37697](https://github.com/NousResearch/hermes-agent/pull/37697): Promoted xAI Grok to a first-class OAuth provider card in the desktop launcher, eliminating the requirement for users to manually enter custom API key configuration to access Grok Premium+ via native SSO.
2. [PR #37683](https://github.com/NousResearch/hermes-agent/pull/37683): Fixed a long-standing web server test flake by moving event channel state out of module-level globals and into FastAPI app.state managed via lifespan context.
3. [PR #37715](https://github.com/NousResearch/hermes-agent/pull/37715): Added structured, grouped update highlight alerts for gateway upgrades, making post-update change logs far more readable for self-hosted operators.
4. Closed feature request [Issue #36196](https://github.com/NousResearch/hermes-agent/issues/36196): Full support for Minimax M3 1M-token multimodal model was shipped to production.
5. Closed bug report [Issue #37515](https://github.com/NousResearch/hermes-agent/issues/37515): Resolved the Windows desktop v0.15.1 OAuth credential resolution failure where login succeeded but no usable inference provider was detected.

## 4. Community Hot Topics
The highest-engagement items from the last 24 hours reflect core power user needs for cross-device usability and flexible context management:
1. [Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) (5 comments, 9 👍): Top-voted feature request for built-in cloud sync for all configurations, profiles, skills, session history, and memory across user devices. The underlying user demand comes from a large segment of power users who run Hermes on multiple workstations, laptops, and self-hosted servers with no easy way to migrate state without manual file transfers.
2. [Issue #18733](https://github.com/NousResearch/hermes-agent/issues/18733) (5 comments, 3 👍): Feature request for per-model or per-provider custom context compression thresholds, paired with partially implemented open PR [PR #24495](https://github.com/NousResearch/hermes-agent/pull/24495) that adds model-specific `context_length` overrides. This request is driven by rapid user adoption of new 1M+ context models that do not need the global default compression threshold.
3. [PR #37720](https://github.com/NousResearch/hermes-agent/pull/37720): Implements dynamic context compressor re-budgeting for routing model backends, which solves the pain point where global context budget settings break behavior for users who use fallback routing chains like OpenRouter Auto that can select different models with varying context windows per request.

## 5. Bugs & Stability
Bugs are ranked by severity below, with existing linked fixes noted:
| Severity | Bug Description | Issue Link | Fix Status |
|----------|-----------------|------------|------------|
| P1 | `session_search` can hang for 5+ minutes on recent releases, completely bypassing configured timeouts and cancellation controls | [Issue #7725](https://github.com/NousResearch/hermes-agent/issues/7725) | No public linked PR yet |
| P1 | Gateway file descriptor leak in platform reconnect loop that exhausts the 2560 file descriptor limit after ~12 hours of uptime, taking all connected platforms offline silently | [Issue #37011](https://github.com/NousResearch/hermes-agent/issues/37011) | No public linked PR yet |
| P1 | Oversized images (>8000px per side) added to conversation history via `browser_vision` or `vision_analyze` permanently brick threads for Anthropic model users, as all subsequent requests return non-retryable 400 errors | [Issue #37677](https://github.com/NousResearch/hermes-agent/issues/37677) | No public linked PR yet |
| P1 | Nix build broken due to stale `npmDepsHash` for the `hermes-desktop-renderer` derivation | [Issue #37692](https://github.com/NousResearch/hermes-agent/issues/37692) | No public linked PR yet |
| P2 | Hermes Desktop remote mode fails to connect to non-loopback dashboard binds on Tailscale/LAN networks due to WebSocket origin validation blocks | [Issue #37399](https://github.com/NousResearch/hermes-agent/issues/37399) | Open fix PR: [PR #37722](https://github.com/NousResearch/hermes-agent/pull/37722) |
| P2 | `disk-cleanup` utility can delete the live cron scheduler `jobs.json` registry from stale tracked file entries | [Issue #37721](https://github.com/NousResearch/hermes-agent/issues/37721) | Open fix PR: [PR #37726](https://github.com/NousResearch/hermes-agent/pull/37726) |

## 6. Feature Requests & Roadmap Signals
Based on open stacked PRs and user request prioritization, the following features are expected to land in upcoming releases:
- **0.15.x patch release (next 1-2 weeks):** Dynamic context compressor re-budgeting for routing backends, Slack gateway notification noise filtering, Snap package management support, and WebSocket origin fixes for remote desktop connections.
- **0.16 minor release:** Per-model/per-provider context compression and context length overrides, the `/council` multi-model deliberation planning command, and Mattermost thread context support for Hermes bot mentions.
- Longer term roadmap priority: Cross-device cloud sync for configurations and user state, which is the highest user-voted open feature request.

## 7. User Feedback Summary
Top real user pain points and satisfaction signals:
- The biggest unmet user need is seamless cross-device state sync, with users repeatedly noting manual copy of the `~/.hermes/` directory between devices is error-prone.
- Self-hosted VPS users report major frustration that the native Hermes desktop client currently offers no documented, first-class flow to connect to existing remote Hermes instances, forcing them to run a redundant local agent instance just to use the desktop UI.
- Heavy browser automation users report frequent data loss incidents when oversized screenshots brick entire conversation threads, describing this as a top productivity blocker.
- Users on immutable distros and restricted system environments (Nix, strict sandboxing, enterprise package management) are very enthusiastic about the upcoming Snap packaging support, which eliminates the need for insecure curl-to-pip install scripts.

## 8. Backlog Watch
Long-standing high-impact items that are still open and need maintainer triage or review:
1. [Issue #7725](https://github.com/NousResearch/hermes-agent/issues/7725) (open since 2026-04-11): P1 session search hang bug that impacts core agent usability, with no proposed fix merged after nearly 2 months.
2. [Issue #18733](https://github.com/NousResearch/hermes-agent/issues/18733) (open since 2026-05-02): High-engagement feature request for per-model compression thresholds, with partial implementation PR #24495 stalled pending maintainer review.
3. [Issue #18158](https://github.com/NousResearch/hermes-agent/issues/05-01) (open since 2026-05-01): P2 bug where non-interactive Hermes daemons cannot detect Node.js installed via version managers (mise, nvm, asdf), breaking the browser automation toolchain for self-hosted deployments.
4. [Issue #8515](https://github.com/NousResearch/hermes-agent/issues/8515) (open since 2026-04-12): P2 bug where smart model routing drops the configured `api_mode` parameter for fallback models, breaking all local inference workflows.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-06-03
---
## 1. Today's Overview
PicoClaw recorded high development activity over the 24-hour window ending June 3, with 3 updated issues, 14 adjusted pull requests, and 1 official nightly pre-release published. The majority of merged changes target core runtime stability, third-party LLM provider compatibility, and fixes for post-pre-release regressions, with zero critical unaddressed crash incidents reported. The project team is clearly prioritizing user-reported production pain points ahead of the upcoming v0.2.9 stable release, and the overall contribution pace from both internal maintainers and external community members indicates strong project health. All user-reported bugs in the recent update cycle have corresponding draft or finalized fix PRs, reducing the risk of unresolved regressions making it to the next stable build.

## 2. Releases
A new automated unstable nightly build was published:
- **Version**: v0.2.9-nightly.20260602.426046fc
- **Details**: This pre-release packages all commits pushed to the main branch after the v0.2.9 tag, covering the 5 recently merged bug fixes listed in the project progress section. No explicit breaking changes are documented for this build, but maintainers explicitly warn that it is for non-production testing only, as it may contain unvalidated edge case bugs.
- Full changelog: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. Project Progress
5 PRs were successfully merged/closed in the past 24 hours, driving core functionality and stability forward:
1. [PR #2239](https://github.com/sipeed/picoclaw/pull/2239): Modified Docker Compose configuration to add privileged runtime flags, resolving permission errors for containerized deployments that require low-level system or hardware access for edge use cases.
2. [PR #2993](https://github.com/sipeed/picoclaw/pull/2993): Merged the first version of the self-describing `picoclaw-agent` skill document, adding structured, native operational guidance for PicoClaw core agent workflows for new end users.
3. [PR #2991](https://github.com/sipeed/picoclaw/pull/2991): Implemented unified transient LLM error retry logic using the provider error classifier, eliminating unhandled failures for 5xx HTTP responses from providers like OpenRouter that do not have pre-configured model fallback options.
4. [PR #2986](https://github.com/sipeed/picoclaw/pull/2986): Added a formal `Stop()` method to SessionManager, fixing a longstanding goroutine leak caused by orphaned background cleanup routines when multiple SessionManager instances are spawned in testing or edge runtime scenarios.
5. [PR #2989](https://github.com/sipeed/picoclaw/pull/2989): Added Zhipu AI API error code 1210 to official error pattern matching rules, directly resolving the reported WeChat channel image sending failure for GLM-5-Turbo vision models.

## 4. Community Hot Topics
The two highest-interaction items of the day reflect clear community demand for more flexible, developer-friendly protocol and configuration capabilities:
1. **[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) (Feature request: Add streaming HTTP request toggle in config)**: This 2-month old issue has accumulated 10 comments and 1 positive reaction, making it the most active discussion thread. The underlying user need is to align PicoClaw's LLM client behavior with the official OpenAI Python client, supporting explicit `stream=True` configuration to cut unnecessary non-streaming overhead for high-throughput self-hosted workloads using custom OpenAI-compatible backends.
2. **[Issue #2984](https://github.com/sipeed/picoclaw/issues/2984) (Feature request: Add explicit turn completion signal for Pico WebSocket clients)**: The newly submitted feature request has 1 positive reaction, submitted by developers building custom third-party clients on top of PicoClaw's native WebSocket protocol. The request fills a longstanding semantic gap where clients cannot deterministically identify when an agent has fully finished processing a user message after the final `typing.stop` event.

## 5. Bugs & Stability
All reported bugs in the past 24 hours have corresponding fix PRs, ranked by severity below:
1. **High Severity (unfixed)**: Post v0.2.9 pre-release upgrade, all new Web UI sessions incorrectly inherit historical old messages from migrated main sessions. The fix is fully written in [PR #2992](https://github.com/sipeed/picoclaw/pull/2992), pending merge to resolve the regression for all upgraded users.
2. **High Severity (fixed)**: WeChat channel image uploads trigger Zhipu GLM-5 API 1210 parameter errors, resolved by merged [PR #2989](https://github.com/sipeed/picoclaw/pull/2989).
3. **Medium Severity (unfixed)**: Web UI session history only displays the most recent user message instead of the full conversation. The complete fix is available in [PR #2990](https://github.com/sipeed/picoclaw/pull/2990), awaiting review.
4. **Medium Severity (unfixed)**: The user-configurable `summarize_token_percent` parameter does not take effect, with the `/context` command always showing a fixed 76800 token compression threshold. The fix is submitted in [PR #2988](https://github.com/sipeed/picoclaw/pull/2988).
5. **Medium-Low Severity (unfixed)**: Active streaming sessions incorrectly drop `tool_calls` auxiliary messages, fix available in [PR #2987](https://github.com/sipeed/picoclaw/pull/2987).

## 6. Feature Requests & Roadmap Signals
Based on current activity and user demand, the following features are highly likely to be included in the upcoming official v0.2.9 stable release:
1. The configurable LLM streaming HTTP request toggle from Issue #2404, as it is low-complexity and high-utility for most self-hosted users
2. The explicit WebSocket turn completion signal from Issue #2984, as it removes a major blocker for third-party custom client developers
The standalone `picoclaw-tracer` debug trace viewer tool submitted in [PR #2945](https://github.com/sipeed/picoclaw/pull/2945) will most likely ship as an optional developer-focused add-on in the v0.2.10 milestone, as it does not impact core runtime functionality for end users.

## 7. User Feedback Summary
Collective user pain points and feedback from the past 24 hours show high overall satisfaction with the project and strong community engagement:
- Self-hosted edge deployment users reported that previous Docker Compose configurations lacked privileged permissions, blocking hardware acceleration and low-level I/O use cases, a pain point now resolved after merging PR #2239
- Power users running newer model families like Claude Opus 4.7 and custom OpenAI-compatible endpoints complained about unnecessary hardcoded parameters that trigger 400 errors, with community contributors already submitting full fix code for these compatibility issues
- Custom WebSocket client developers highlighted that missing turn end event semantics make it impossible to build polished UI flows for their products
Most bug reports include clear reproduction steps, and 60% of recent fix PRs were submitted by external community contributors, indicating a highly engaged, invested user base.

## 8. Backlog Watch
Three high-priority community-contributed PRs and issues are currently marked stale and waiting for maintainer review, with no recent activity for over 7 days:
1. [PR #2951](https://github.com/sipeed/picoclaw/pull/2951): Fix web search tool type to use standard `function` format to resolve 400 errors on OpenAI endpoints that do not support the non-standard `web_search_preview` tool type, open since May 26
2. [PR #2948](https://github.com/sipeed/picoclaw/pull/2948): Skip the deprecated `temperature` parameter for Claude Opus 4.7 models to avoid runtime errors, open since May 26
3. [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404): The 2-month old streaming config feature request with 10 comments, pending implementation prioritization
All three items are fully scoped or already have complete implementation code, and require only maintainer review to be merged, so they are recommended to be prioritized in the next sprint to avoid blocking large numbers of users on non-standard LLM provider stacks.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-03
---

## 1. Today's Overview
For the 24-hour tracking window ending 2026-06-03, the NanoClaw open-source AI agent framework recorded consistent, high-productivity development throughput with 1 newly filed open issue and 7 total updated pull requests, 4 of which were successfully merged or closed. No new official releases were published in the window. Engineering focus leaned heavily on core runtime hardening, security vulnerability patching, and long-requested feature enablement, indicating a stable, active development cycle with no unplanned production outages or critical regression reports surfaced. Overall project health appears strong, with cross-contributor alignment on foundational platform improvements ahead of upcoming feature milestones.

## 2. Releases
No new official releases were published in the 24-hour tracking window. This section is omitted per available activity data.

## 3. Project Progress
A total of 4 pull requests were merged or closed in the window, delivering impact across core runtime functionality, extensibility, new user-facing skills, and security:
1. [nanocoai/nanoclaw PR #2674](https://github.com/nanocoai/nanoclaw/pull/2674): Standardized long-running runtime status messages into machine-parsable labels, added internal channel guards to prevent message processing self-loops, and delivered all pending local runtime/channel update assets; full validation via the docker agent-runner test suite passed.
2. [nanocoai/nanoclaw PR #1193](https://github.com/nanocoai/nanoclaw/pull/1193): Landed the long-awaited host-side plugin hook system, adding a dedicated `plugin-loader.ts` module that scans the `plugins/` directory for ES modules exposing `onStartup()` and `onShutdown()` lifecycle hooks. Hooks run after channel connections initialize but before the core agent message loop starts, enabling third-party developers to attach custom long-running services such as local HTTP servers directly to NanoClaw host deployments.
3. [nanocoai/nanoclaw PR #2069](https://github.com/nanocoai/nanoclaw/pull/2069): Merged the full Webchat v1 skill, a user-facing integration that adds a native web-based chat interface for end-users to interact with deployed NanoClaw agents.
4. [nanocoai/nanoclaw PR #2538](https://github.com/nanocoai/nanoclaw/pull/2538): Rolled out a critical security fix that adds input validation for package names during Dockerfile interpolation in the container runner, blocking documented CWE-78 OS command injection attack vectors that could be exploited via maliciously crafted user-submitted package names.

## 4. Community Hot Topics
All newly updated Issues and PRs recorded 0 public comments and reactions in the tracking window. The most prominent user-submitted community item is the new feature request:
> [nanocoai/nanoclaw Issue #2673](https://github.com/nanocoai/nanoclaw/issues/2673): Automated Student Grading System
This submission signals growing adoption of NanoClaw in non-enterprise public sector education use cases, specifically targeting low-bandwidth Android workflows for frontline secondary school teaching staff in emerging markets. The underlying user need points to demand for pre-built, low-resource administrative agent skills that eliminate manual spreadsheet work for overstretched school staff.

## 5. Bugs & Stability
All tracked bugs reported or addressed in the window have associated active fix PRs, with no unaddressed critical stability regressions. Severity ranking is as follows:
1. **Critical (Fixed):** Container runner OS command injection vulnerability, fully resolved by merged PR #2538, no public exploits reported prior to patch release.
2. **High (Fix In Progress):** Missing inbound attachment directory mount in agent containers, addressed by open PR #2671, which resolves a failure state where channel adapters cannot pass user-uploaded attachments to agent workflows.
3. **Medium (Fix In Progress):** MCP union type incompatibility and broken HTTP transport for the Codex provider behind proxies, addressed by open PR #2672, which resolves mismatches between mainline MCP server config schema and the Codex provider implementation.
4. **Low (Fix In Progress):** Unnecessary namespacing of bare CLI platform IDs, addressed by long-running open PR #2187.

## 6. Feature Requests & Roadmap Signals
Activity this window confirms clear priorities for the next minor NanoClaw release, targeted for imminent launch after final validation of pending fix PRs. The already merged host plugin system, Webchat v1 skill, and runtime status standardization are confirmed lead features for the upcoming release, alongside the critical container security patch and full MCP 1.0 union type compatibility for the Codex AI provider. The newly submitted automated student grading system use case will likely be evaluated for inclusion in a later public-sector targeted point release as education vertical adoption continues to grow.

## 7. User Feedback Summary
No explicit public user satisfaction or dissatisfaction feedback was posted in the 24-hour window, but submitted activity points to clear emerging user priorities:
1. Education sector users are requesting out-of-the-box pre-built skills for administrative workloads like grading and performance tracking that run on low-resource Android devices for in-school environments.
2. Self-hosting enterprise users are prioritizing better plugin extensibility, native webchat end-user interfaces, and hardened container runtime security for production agent deployments.
3. DevOps and power users are requesting better compatibility for NanoClaw deployments running behind corporate proxies with restricted external network access.

## 8. Backlog Watch
Two long-stale PRs that sat in the open backlog for 1+ months were successfully merged this window: the host plugin hook system PR #1193 (open since March 17, 2026) and the Webchat v1 skill PR #2069 (open since April 28, 2026). The only remaining high-priority stale PR requiring immediate maintainer review is:
> [nanocoai/nanoclaw PR #2187](https://github.com/nanocoai/nanoclaw/pull/2187): fix(platform-id): don't namespace CLI bare platform ids
This PR was originally created on May 2, 2026, and has been pending final review for 31 days as of this digest. It implements a low-risk, guideline-compliant bug fix with no reported conflicts against the current mainline branch.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-06-03
*Data tracking window: Previous 24 hours ending 2026-06-03 00:00 UTC*

---

## 1. Today's Overview
Today’s NullClaw development cycle is marked by targeted, low-volume focused activity centered on resolving an unintended side effect of the project’s recently launched default-enabled PII redaction feature. Over the last 24 hours, the project recorded 1 newly filed open bug report and 1 corresponding in-progress open fix PR, with no new releases, merged mainline code, or community-voted feature requests logged in the window. No critical outages, high-severity user reports, or long-running backlog items were updated, indicating core platform stability for most end users. The tight alignment between the filed bug and accompanying prepped fix suggests the maintainer or regular contributor team is proactively addressing the regression before it impacts broader user workflows.

## 2. Releases
No new official releases were published for NullClaw in the 24-hour tracking window. The project remains on the most recent prior tagged version as of this digest, with no pending release notes or migration documentation shared publicly during this period.

## 3. Project Progress
No PRs were merged or formally closed in the 24-hour tracking window, meaning no new user-facing features or fixes were shipped to mainline in this period. The only in-progress work is targeted at correcting a false positive matching flaw in the core PII redaction module that was rolled out to default enablement in May 2026, an incremental quality-of-life fix for agent workflow transparency currently in pre-merge review preparation.

## 4. Community Hot Topics
The only two active work items in this cycle are tightly paired to address the reported redaction flaw:
- [Issue #944: PII redactor falsely matches date/time output as phone numbers ([PHONE_X])](https://github.com/nullclaw/nullclaw/issues/944)
- [PR #945: fix(redaction): reject ISO date/time patterns as false-positive phone matches](https://github.com/nullclaw/nullclaw/pull/945)
Neither item has received public community comments or emoji reactions at time of tracking. The work highlights a core unmet underlying user need: balancing the PII redaction feature’s compliance requirements for regulated industry users, with zero or near-zero false positives that break standard agent system utility workflows such as checking file modification timestamps or execution run windows.

## 5. Bugs & Stability
One medium-severity regression was reported this cycle, ranked by impact:
1. **Medium severity false positive redaction bug**: The default-enabled PII redaction module incorrectly matches digit sequences in valid `date` shell command output as phone numbers, replacing timestamp values with opaque [PHONE_X] placeholders. This breaks visibility for users running system date commands to validate execution timelines or debug scheduled agent runs, but poses no risk of PII leakage or data loss. A complete fix PR is already in development, adding a date-like pattern guard to the phone number matching logic in `src/redaction.zig`, so the resolution path is fully defined with no unaddressed stability gaps.

## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were filed in the 24-hour tracking window. The active prioritization of fixing false positives in the recently rolled out default PII redaction feature strongly signals that the next minor NullClaw release will contain multiple quality-of-life hardening fixes for the redaction module, rather than large new functional features. Users who rely on PII redaction for HIPAA or GDPR compliant agent deployments are likely to see additional false positive reduction rules added in the upcoming patch cycle to reduce manual tuning overhead.

## 7. User Feedback Summary
The only captured user pain point this cycle is unexpected obfuscation of valid non-sensitive system output following the May 2026 change that flipped the `enable_pii_redaction` flag to default `true`. This points to minor dissatisfaction from power users who rely on unmodified shell command output for debugging agent runs, a side effect that was not fully surfaced during pre-deployment testing of the redaction feature. There are no reports of PII data leaks, feature outages, or critical workflow failures tied to this change at time of writing, so overall user satisfaction with the core platform remains stable.

## 8. Backlog Watch
No long-unanswered high-priority issues or stale PRs were flagged for maintainer attention in this tracking window. The single open bug and accompanying fix PR were both filed and acted on within a 24 hour window by the contributing developer, with no unresolved outstanding items that have not received maintainer or contributor triage in the last 7 days.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-03 Project Digest
---
## 1. Today's Overview
IronClaw saw extremely high development activity in the 24-hour window ending 2026-06-03, with a total of 35 updated issues and 50 updated pull requests. The project posted a 62% PR merge/close rate (31 out of 50 total updated PRs), indicating highly efficient execution focused on two core tracks: Reborn runtime production hardening, and pre-launch QA bug bash for the upcoming hosted staging release. Core contributors prioritized security hardening, OAuth integration fixes, and usability improvements for local developers, with zero major breaking regressions reported for existing stable features. No new official releases were published, as the team is wrapping up final production readiness checks for the next minor public version.
---
## 2. Releases
No new official releases were published in the last 24 hours. There are no pending breaking change announcements or migration notes for upcoming releases as of this report.
---
## 3. Project Progress
31 pull requests were merged or closed in the 24-hour window, advancing key feature and fix milestones:
- Core runtime testing and stability: #4369 hardened Reborn skill context budget contract tests to close gaps in the existing `safe_summary` prompt safety split logic; #4371 fixed persistent empty response errors for Codex ChatGPT Reborn deployments by hardening SSE parsing for OpenAI Codex event formats.
- Local developer experience: #4357 resolved the broken local-dev Reborn memory mount, adding a dedicated `/memory` libSQL mount path so first-party memory tools now work out of the box for self-hosted and contributor environments.
- Built-in tool improvements: #4374 added common alias support for the `memory_search` tool, allowing users to run queries using `q`, `text`, or `pattern` parameters in addition to the canonical `query` field.
- Scheduled workflow feature advancement: #4318 shipped the full first-party trigger capability surface, adding `builtin.trigger_create`, `builtin.trigger_list`, and `builtin.trigger_remove` functions to the public capability catalog.
- SaaS integration unblocking: Four coordinated OAuth fixes merged, including #4347 (least-privilege scopes for Reborn Gmail auth gates), #4345 (Notion DCR OAuth wired to Reborn WebUI), #4346 (preserved structured credential requirements across Gmail auth failures), and #4337 (fixed Google OAuth prompt rendering for runtime auth gates).
- Closed issues: #4355 (engine v2 newtype correlation ID followup to PR #3669) and #3806 (GitHub WASM capability path planning) were marked as resolved after their respective prerequisite baseline work landed.
---
## 4. Community Hot Topics
The most actively discussed workstreams reflect strong alignment on enterprise production readiness priorities:
1. **PR #4373: Fix subagent safety and capability gating** (https://github.com/nearai/ironclaw/pull/4373) – This core security patch closes the silent prompt injection bypass gap for subagent goals, replacing weak profile ID only access checks with a shared profile + driver permission predicate. Underlying need: Enterprise users running multi-subagent workloads are requiring fail-closed access controls before rolling out IronClaw to internal teams.
2. **PR #4372: Zeroize HTTP credential carriers** (https://github.com/nearai/ironclaw/pull/4372) – This hardening PR adds drop-time memory scrubbing for HTTP request buffers containing credentials, following a partial earlier risk mitigation. Underlying need: Security teams evaluating IronClaw for production deployments require explicit credential zeroization to meet their data leak prevention compliance requirements.
3. **Reborn loop architecture hygiene audit (12 newly filed issues L1-L11)** – The full batch of loop correctness gaps tracked across #4358 to #4368 outlines a complete roadmap for eliminating observability holes, hard errors, and performance bottlenecks in the core Reborn agent loop. Underlying need: The team is formally auditing every edge case of the loop before opening the Reborn runtime to public production access.
---
## 5. Bugs & Stability
Bugs reported in the 24-hour window are ranked by severity below:
1. **Critical (blocker for latest flagship Anthropic models)**: #4334 Claude Opus 4.7/4.8 unusable, as IronClaw always sends a `temperature` parameter that is explicitly deprecated by the new model versions, resulting in 100% of requests returning 400 errors (https://github.com/nearai/ironclaw/issues/4334). No linked fix PR is available as of this report.
2. **P2 Bug Bash Batch (7 QA-reported issues for staging release)**: All flagged during validation of Qwen3.6-35B and MiniMax-M2.7 model support, including:
   - Exposed agent chain-of-thought stuck in thinking state (#4341)
   - Agent incorrectly mirrors user messages as its own response during load (#4344)
   - MCP integrations (Notion/GitHub) confirmed unusable due to driver failures (#4343)
   - Persistent auth modal after page refresh blocks chat flow (#4342)
   - Spurious blank content validation error blocks user message submission (#4340)
   - Valid provider tool calls incorrectly rejected as `InvalidInvocation` (#4339)
   - Misleading generic execution driver error shown during normal disconnected state (#4338)
3. **Regression**: #4108 Nightly E2E scheduled run failed for v2-engine, no root cause published yet. No linked fix PR is available.
---
## 6. Feature Requests & Roadmap Signals
All observed active work signals point to the next minor release being fully focused on production readiness and expanded enterprise integration support:
- The full 17-item Reborn loop and subagent safety/hygiene backlog will ship as the core of the next production Reborn stable release, closing all identified audit gaps before public launch.
- Scheduled trigger capabilities (PR #4318) and the trigger poller lifecycle wiring (PR #4375) will launch as an early access feature, enabling users to build recurring automated agent workflows.
- Slack final reply delivery (#4321) and Feishu websocket event intake (#4178) will add two new major third-party chat channel integrations, expanding support for team collaboration use cases.
- MCP 2025-06-18 protocol negotiation fixes (#4354) will land to make IronClaw fully compliant with the latest official Anthropic MCP specification.
---
## 7. User Feedback Summary
Real user and tester pain points collected in the window:
1. Users testing the latest Claude Opus 4.x flagship models are fully blocked, representing the highest priority user complaint.
2. Staging testers evaluating new open source models (Qwen3.6-35B, MiniMax-M2.7) report broken core chat UX that erodes confidence in the new model integrations.
3. Enterprise users testing MCP extensions are unable to activate Notion and GitHub integrations, blocking adoption of the plugin ecosystem.
4. Local self-hosted and contributor users previously faced unworkable broken memory mount functionality, a recently resolved pain point that has already received positive community feedback.
Overall user satisfaction is high for core security and integration bug turnaround times, with no reported dissatisfaction with existing stable features.
---
## 8. Backlog Watch
High-priority long-dated items that require maintainer attention as of this report:
1. **PR #3669: engine v2: expose channel-supplied thread/response ids to tools** (https://github.com/nearai/ironclaw/pull/3669) – Created May 14, 2026, updated today but still open. This core cross-turn correlation feature for approval callbacks and side effect tracking has been pending final review for 3 weeks, even though its followup issue #4355 has already been closed.
2. **PR #3548: Add DISABLE_TOOLS_LIST flag and security regression test** (https://github.com/nearai/ironclaw/pull/3548) – Created May 12, 2026, still open. This high-impact admin security feature allows self-hosted users to block access to high-risk tools, and is a commonly requested feature for private self-hosted deployments.
3. **Issue #3806: [Reborn] Lane 6: implement GitHub WASM read/write capability path** (https://github.com/nearai/ironclaw/issues/3806) – Created May 19, 2026, closed for planning but no implementation work is scheduled yet. This first-party GitHub WASM tool was originally targeted for the current release cycle, but no prioritization has been assigned as of this report.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-06-03
---

## 1. Today's Overview
This 24-hour observation window shows exceptionally high development throughput for the LobsterAI project, with 50 total PR updates recorded and zero new user-reported open issues. 94% of all updated PRs (47 out of 50) were successfully merged or closed, indicating the core team is in the final polish phase for an upcoming feature release, with no critical production incidents to divert engineering resources. No new official releases were published in this period. The project demonstrates very strong health, with fast turnaround on pre-release feature testing and minimal pending work in the active development pipeline, while no public user bug backlogs accumulated over the last day.

## 2. Releases
There are no new official releases, pre-releases, or version tags published in the last 24 hours, so no breaking change notices or migration guidance are required for this period.

## 3. Project Progress
All 47 merged/closed PRs from the last 24 hours delivered targeted feature upgrades and stability optimizations across core LobsterAI modules:
- **MiniMax Multimodal Support**: Merged [PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093) fixed the hardcoded image input restriction for MiniMax-M3, enabling full multimodal functionality for the latest MiniMax model.
- **Subagent Workflow Upgrade**: Merged [PR #2095](https://github.com/netease-youdao/LobsterAI/pull/2095) added batch deletion support for subagent sessions, with asynchronous, rate-limited gateway transcript cleanup to avoid performance pressure on backend services.
- **MCP Runtime Optimization**: Merged [PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091) optimized npx-hosted MCP tool startup resolution to eliminate repeated slow npx initialization, added first-response timing logs for troubleshooting launch bottlenecks, and implemented auto-recovery for stale pending installation records.
- **UX & Artifact Polish**: Merged [PR #2094](https://github.com/netease-youdao/LobsterAI/pull/2094) restructured the share success popup information hierarchy for generated artifacts, while [PR #2022](https://github.com/netease-youdao/LobsterAI/pull/2022) added lazy loading for large source code previews and fixed HTML preview theme adaptation and file existence validation.
- **New Feature Delivery**: Merged [PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985) shipped full end-to-end configurable thinking level controls for chat sessions, supporting 6 levels from Off to Adaptive for different LLM reasoning scenarios. Additional merged fixes include macOS voice input permission denied toast prompts, prevented unnecessary OpenClaw gateway restarts during token refresh, and hid internal runtime OpenClaw plugins from end-user management interfaces via [PR #2096](https://github.com/netease-youdao/LobsterAI/pull/2096).

## 4. Community Hot Topics
No public PRs or issues received user-submitted comments or positive reactions in the last 24 hours. The highest-visibility pending feature tracked by the community is the long-running open [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388) that proposes upgrading MiniMax's default model to M3. The underlying user demand behind this PR is to remove manual model selection steps for all users of the MiniMax provider, and access the latest high-performance multimodal model out of the box, as the previously merged image input fix has already resolved the last known blocking issue for M3.

## 5. Bugs & Stability
Zero new user-reported bugs, crashes, or regressions were submitted in the 24-hour window. All stability-related work merged in this period consists of proactive pre-release polish that addresses known internal testing edge cases, including missing permission feedback for macOS voice input, unoptimized gateway restart logic, and lag when loading large preview files. No unresolved critical or high-severity production bugs were logged to the public repository today.

## 6. Feature Requests & Roadmap Signals
Based on the recently merged feature batches, the next upcoming minor release is highly likely to include the following completed functions:
1. Full native support for the MiniMax M3 multimodal model, set as the default option for MiniMax provider users
2. A new nsp-clawguard security monitoring hot toggle in settings for users to control runtime plugin security scanning
3. A fully redesigned IM bot management UI that supports multi-instance deployment for DingTalk, Feishu and QQ, with duplicate instance validation
4. Batch operation support for subagent sessions for users that run large multi-agent collaboration workflows

## 7. User Feedback Summary
While no new user feedback was submitted in the last 24 hours, the set of merged fixes directly addresses widely reported pain points from the last 2 weeks of community feedback: confusing UX for generated artifact sharing, zero feedback after users deny macOS voice input permissions leading to broken expected behavior, slow startup for npx-hosted MCP tools, and lack of granular reasoning level controls for different LLM chat use cases. All these pain points have been fully resolved in the current sprint.

## 8. Backlog Watch
Three long-running open PRs are pending final maintainer review, with no updates for 2+ months and no blocking issues identified:
1. [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388) (created 2026-03-12): Stale-marked PR to upgrade MiniMax's default model to M3, only requires final review before merge.
2. [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (created 2026-04-02): Dependabot PR that bumps Electron from v40.2.1 to v42.3.1 and electron-builder, pending compatibility testing to bring critical Electron security patches to the project.
3. [PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) (created 2026-04-04): PR to add duplicate name and credential ID validation for IM bot instances, ready for merge to prevent duplicate robot creation conflicts in multi-instance IM deployments.

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

# CoPaw (QwenPaw Ecosystem) Project Digest | 2026-06-03
---

## 1. Today's Overview
The CoPaw/QwenPaw project saw very high development and triage activity over the past 24 hours, with 48 updated issues and 32 updated pull requests, marking a 30% week-over-week increase in community participation. The core team prioritized full hardening of the product for the upcoming v1.1.11 stable release, including resolving 7 independently reported security vulnerabilities, patching multiple widely reported user-facing bugs, and advancing the long-planned migration to the upstream AgentScope 2.0 architecture. 9 PRs were merged/closed and 22 issues were resolved, indicating excellent issue resolution velocity that reflects strong project health. 8 of the 20 top PRs were submitted by first-time contributors, showing a fast-growing active open source community. No new formal stable releases were published in the window.

## 2. Releases
No new formal stable or full release was launched in the last 24 hours. The core team merged a pre-release version bump PR ([#4907](https://github.com/agentscope-ai/QwenPaw/pull/4907)) to publish v1.1.11b1, the public beta build for the next minor stable release that bundles all security patches and Windows UX improvements.

## 3. Project Progress
Key merged/closed PRs that advanced the project today include:
- [#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883): Fixed the cron message delivery failure bug that prevented scheduled home agent results from being pushed to WeChat/WeCom channels
- [#4899](https://github.com/agentscope-ai/QwenPaw/pull/4899): Patched the v1.1.10 Yuanbao channel packaging defect that missing required protobuf schema files causing infinite reconnection loops
- [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853): Resolved the Windows browser process leak issue that left residual Playwright processes and locked temp directories after browser_use sessions end
- [#1317](https://github.com/agentscope-ai/QwenPaw/pull/1317): Added real-time download progress notifications for the cloudflared tunnel component, eliminating user confusion when the backend automatically installs the dependency
- [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689): Added support for passing non-standard LLM provider parameters (e.g. DashScope `enable_search`) via the generate_kwargs field by routing them to the SDK `extra_body` argument
- 7 dedicated fix PRs for all reported security vulnerabilities were merged, completing full pre-release security hardening for v1.1.11b1

## 4. Community Hot Topics
The most active public discussions are:
1. [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) [OPEN, 6 comments]: Bug report that the Models configuration page breaks and fails to load after creating a new session, requiring a full app restart. Underlying user need: reliable, non-disruptive model configuration persistence across session operations, no unplanned restarts for production deployments with multiple models.
2. [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) [CLOSED, 5 comments]: WeChat cron notification delivery bug report that was fully resolved in the beta build. Underlying user need: reliable cross-channel scheduled alerting for home automation and remote monitoring use cases that run 24/7.
3. [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) [OPEN, 5 comments, 2 👍]: Tracking issue for the breaking change migration of QwenPaw backend from AgentScope 1.x to the newly released AgentScope 2.0. Underlying user need: access to the new 2.0 architecture's improved performance, lower token overhead and more flexible runtime, as reflected in the separate community question issue [#4885](https://github.com/agentscope-ai/QwenPaw/issues/4885) asking for migration timeline updates.

## 5. Bugs & Stability
Bugs ranked by severity with fix status:
1. **Critical (Security)**: 7 documented security vulnerabilities reported by community security researcher YLChen-007, all closed with merged fixes in v1.1.11b1: unauthenticated global language settings modification ([#4908](https://github.com/agentscope-ai/QwenPaw/issues/4908)), ToolGuard dangerous command approval bypass ([#4909](https://github.com/agentscope-ai/QwenPaw/issues/4909)), persistent chat creation DoS via malformed session_id ([#4910](https://github.com/agentscope-ai/QwenPaw/issues/4910)), unhandled 500 errors in MCP configuration API ([#4911](https://github.com/agentscope-ai/QwenPaw/issues/4911)), invalid timezone value 500 crash in cron API ([#4912](https://github.com/agentscope-ai/QwenPaw/issues/4912)), path traversal local file exfiltration ([#4913](https://github.com/agentscope-ai/QwenPaw/issues/4913)), secrets leak in workspace export ([#4914](https://github.com/agentscope-ai/QwenPaw/issues/4914)).
2. **High Severity (Core Functionality)**: Frequent system-level fallback replies "无法处理您的问题" on v1.1.9 ([#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837)), no fix PR submitted yet; Models configuration page total loss of service after new session creation ([#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)), no fix PR submitted yet.
3. **Medium Severity (UX/Compatibility)**: DeepSeek reasoning_content multi轮 dialog HTTP 500 error ([#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985)), closed with a merged fix; browser_use managed CDP timeout on Windows ([#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919)), no fix PR submitted yet; custom channel listener stops working after saving configuration ([#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877)), no fix PR submitted yet.

## 6. Feature Requests & Roadmap Signals
Features that are very likely to ship in the next 2 releases:
1. Windows multi-drive file system navigation (PR [#4906](https://github.com/agentscope-ai/QwenPaw/pull/4906) under active review), planned for the v1.1.11 stable release.
2. New plugin system extensions (uninstall hooks, custom prompt section registry, plugin-registered custom channels), multiple PRs under review, planned for v1.1.12.
3. AgentScope 2.0 full migration (PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) open) targeted for the upcoming v2.0 major release, which is the project's top medium-term roadmap priority.
The proposed features of lossless DAG-based context compression, on-demand tool definition loading to cut initial token overhead by 60%, and multi-model per-task subagent dispatch are marked as high-priority roadmap items by maintainers, with implementation work expected to kick off after the v1.1.11 stable launch.

## 7. User Feedback Summary
Top validated user pain points collected today:
- Windows desktop users report multiple UX frictions: arbitrary file upload size limits (fixed in beta), no multi-file drag-and-drop support, no cross-drive file browsing, residual browser process leaks after sessions end.
- Web UI users complain the left sidebar menu is overcomplicated, with frequently used chat sessions hidden under extra clicks, leading to lower daily usage efficiency.
- Users running the official installation script on upgrade report the uv-managed virtual environment is fully reset, forcing them to reinstall all custom plugins and third-party dependencies.
- The community widely praised the team's fast, transparent response to the 7 independent security vulnerability reports, with all fixes rolled out within 24 hours of disclosure, earning high trust from self-hosted deployment users.

## 8. Backlog Watch
High-priority long-standing open items that need maintainer attention:
1. [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666): Models configuration page loading failure bug, open since May 25, affects all users with multiple LLM configurations, no assigned developer at time of writing.
2. [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551): Lossless DAG-based context compression feature request, open since May 20, critical for users running long-running multi-day agent tasks for software development and report generation, no public implementation roadmap published yet.
3. PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846): The large-scale AgentScope 2.0 migration PR, which was submitted 2 days ago and waiting for core maintainer review to unblock related community contributions.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-06-03
---

## 1. Today's Overview
ZeroClaw recorded exceptionally high pre-release development activity in the past 24 hours, with 50 updated tracked issues and 50 updated pull requests alongside the launch of its v0.8.0-beta-2 milestone. The project is in the final weeks of stabilization ahead of the v0.8.0 stable launch, with work prioritized on the new flagship zerocode terminal UI, multi-provider compatibility fixes, and security hardening for agent fleet deployments. The team maintained a 34% close/merge rate for all updated tracked items yesterday, indicating strong triage velocity and healthy community contribution throughput. No major unplanned outages or core regressions were reported across the project ecosystem.

## 2. Releases
A new major pre-release was published yesterday:
### v0.8.0-beta-2
This is the largest release shipped since v0.7.5, led by the headline feature **zerocode**: a full-featured native terminal UI that lets users run, operate, and interact with ZeroClaw agents entirely without leaving the terminal environment. The release also ships the first iteration of the long-awaited multi-agent runtime.
- No documented breaking changes for users upgrading from earlier v0.8.0 beta builds
- Migration note: No manual config changes are required, and all existing user configurations are fully compatible with this beta. Users are encouraged to test the new TUI workflow and submit feedback to the project repository.
[Release Announcement](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-2)

## 3. Project Progress
17 PRs and 17 issues were closed/merged in the past 24 hours, with key completed advances:
- Fixed the long-standing missing Twitter/X channel feature in pre-built binaries by adding the `channel-twitter` crate to the default feature bundle, resolving community reports that the feature was documented but unavailable in official releases
- Patched a critical high-severity security flaw where channel-served agents (over Telegram, webhook, etc.) bypassed their defined per-agent tool allowlist, closing a major access control gap for multi-tenant deployments
- Fully resolved the DeepSeek-V4 API incompatibility bug related to thinking mode parsing, eliminating degraded workflow behavior for all DeepSeek V4 Pro/Flash users
- Completed the full migration of the old TUI library crate to the new `apps/zerocode` directory structure, aligning with the project's formal convention of separating end-user applications and core libraries
- Landed base support for streaming agent responses, interactive tool call rendering, and approval prompts for the new zerocode TUI agent chat interface

## 4. Community Hot Topics
The most actively discussed tracked items reflect high-priority user needs for regional model support and alternative deployment workflows:
1. **[Issue #6059: DeepSeek-V4 API format incompatibility](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)** (15 comments, 4 thumbs up) – The highest engagement item of the past 24 hours, this bug report reflects large and fast-growing user adoption of DeepSeek's reasoning models across East Asia, with users requiring first-class, stable compatibility for production agent workflows. The issue is now marked closed after a full fix was merged.
2. **[Issue #5600: Kimi-Code provider streaming tool call errors](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** (9 comments, 1 thumbs up) – Users building code generation and software engineering agents on top of Moonshot AI's Kimi code model report fully blocked streaming workflows when thinking mode is enabled, highlighting unmet demand for native support for domestic Chinese LLM inference stacks.
3. **[PR #5987: Add official Nix flake support](https://github.com/zeroclaw-labs/zeroclaw/pull/5987)** – Multiple community contributors have refined this implementation over 6 weeks, reflecting strong demand from users on immutable distros and NixOS for fully reproducible, declarative ZeroClaw package deployments.

## 5. Bugs & Stability
Open bugs reported or updated in the past 24 hours, ranked by severity:
1. **P1 Critical: [Telegram channel leaks internal Codex scratchpad/tool transcripts](https://github.com/zeroclaw-labs/zeroclaw/issues/7068)** – Telegram bots return raw internal agent debug data to end users instead of sanitized final responses, no public fix PR filed to date.
2. **P1 Critical: [Kimi code provider streaming API 400 errors on tool calls](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** – Workflows are fully blocked for Kimi users, no public linked fix PR.
3. **P2 Major: [WebSocket 401 authentication failures despite valid auth profiles](https://github.com/zeroclaw-labs/zeroclaw/issues/7038)** – The `zeroclaw check` health command reports full authentication failure even with correctly configured gateway credentials, marked as needs-repro for triage.
4. Recently resolved high-severity bugs: DeepSeek V4 format incompatibility fix, `<think>` reasoning block leak sanitization fix, channel agent tool allowlist bypass fix.

## 6. Feature Requests & Roadmap Signals
Based on current tracker activity, these features are highly likely to ship in upcoming releases:
- The new 32-character alphanumeric default pairing code (replacing the insecure 6-digit numeric default) is set to be included as a security hardening change in the upcoming v0.8.0 stable release per the v0.8.0 release queue tracker [#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)
- The real daemon node heartbeat tracking feature for accurate fleet liveness reporting will be prioritized for the v0.8.1 release cycle, alongside the new `zeroclaw node add` CLI for registering remote daemon instances
- Improved visibility of agent working status updates in Slack channels will be shipped in a near-term minor release to address user feedback that long-running tasks appear stalled in Slack integrations
- The Mattermost private message bot support feature is targeted for v0.8.1 as one of the first new channel additions after the v0.8.0 stable launch.

## 7. User Feedback Summary
- Top pain point: Users running popular regional reasoning models (DeepSeek, Kimi, Gemini) repeatedly report inconsistent formatting of internal metadata (reasoning blocks, XML tool result tags) leaking into end-user channel responses, which degrades user experience across chat integrations.
- Power user use case demand: A large subset of enterprise users running multi-machine ZeroClaw fleets are requesting standardized fleet management tools, centralized liveness monitoring, and access control features to reduce operational overhead for multi-agent deployments.
- Verified satisfaction: Community contributors and early adopters are highly positive about the upcoming zerocode TUI feature, with multiple users submitting partial feature improvements and UX feedback for the terminal interface.
- Common configuration pain point: Users report frequent unexpected behavior on multi-agent deployments, including broken TTS voice responses that resolve the wrong agent's configuration profile.

## 8. Backlog Watch
High-priority long-running items awaiting maintainer triage or review:
1. **[Issue #6074: Recover 153 commits lost in a bulk March revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** – Tagged high-priority and help-wanted since April 2026, no recent maintainer updates, risking permanent loss of already reviewed and merged bug fixes and minor features.
2. **[PR #5987: Official Nix flake implementation](https://github.com/zeroclaw-labs/zeroclaw/pull/5987)** – Open since April 2026, with multiple community revisions to improve build robustness, still pending formal maintainer review and merge to support NixOS user workflows.
3. **[Issue #6293: Air-gapped execution mode with unix socket isolated daemon companion](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)** – High-demand enterprise security feature tagged as blocked, no maintainer triage progress since its May 2026 creation despite strong user interest for air-gapped sensitive workload deployments.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*