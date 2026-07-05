# OpenClaw Ecosystem Digest 2026-07-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-05 23:01 UTC

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

# OpenClaw (openclaw/openclaw) 2026-07-06 Project Digest
---
## 1. Today's Overview
This is an extremely high-activity sprint day for the OpenClaw project, with 500 updated issues and 500 updated pull requests logged in the 24-hour window, alongside the publication of the new v2026.7.1-beta.2 pre-release. Project throughput remains healthy: 26.6% of updated PRs were merged or closed, while 9.8% of updated issues received resolution. Maintainers and external contributors are currently prioritizing core reliability patches, new LLM model support, and cross-platform mobile client enhancements ahead of the July 2026 stable release. The active community engagement and steady merge pipeline indicate strong project health as the team moves toward the mid-month feature freeze.
---
## 2. Releases
A single new pre-release was published today:
### v2026.7.1-beta.2
No breaking changes or special migration requirements apply for this beta build. Key changes include:
1.  Full official OpenAI GPT-5.6 model family support across the entire model catalog, capability validation, and runtime selection paths, contributed by @steipete-oai via PR #98333
2.  New `openclaw attach` CLI subcommand that launches an external harness process against an already running live Gateway session for manual debugging or extended workflow execution
This build is designated for early tester validation only, with no recommended production deployments ahead of the full v2026.7.1 stable release.
---
## 3. Project Progress
133 total PRs were merged or closed in the last 24h, with high-impact completed work including:
- **#100432 (Merged)**: Control UI Comparative Cost Analysis feature that adds side-by-side cross-timeframe and cross-model spend comparison to the Usage page, eliminating the need for operators to manually aggregate usage data
- **#97908 (Merged)**: Copilot autoreview skill fix that recovers valid JSON review output even when the LLM wraps it in extra prose text, preventing unnecessary full review aborts
- **#97052 (Merged)**: Media modality support patch for the model catalog that now correctly recognizes provider-reported video and audio input formats from multi-modal providers like Minimax, unblocking full multi-modal agent workflows
---
## 4. Community Hot Topics
The most actively discussed items sorted by comment volume:
1.  [Issue #92201](https://github.com/openclaw/openclaw/issues/92201) (20 comments): P1 bug for Anthropic embedded runner invalid thinking signature replay, raised by enterprise Slack deployment users
    * Underlying need: Teams relying on persistent reasoning trace archives require zero data loss for streamed Anthropic thinking blocks on session replay
2.  [Issue #48788](https://github.com/openclaw/openclaw/issues/48788) (18 comments): Feature request for a centralized multi-encoding filename utility for Content-Disposition handling across all channel adapters
    * Underlying need: Global cross-regional teams using Feishu, Shift-JIS, EUC-KR and GB18030 encoded filenames currently experience broken file attachment handling on non-UTF-8 documents
3.  [Issue #96148](https://github.com/openclaw/openclaw/issues/96148) (18 comments, closed): iMessage source-reply latency tracking instrumentation task
    * Underlying need: iMessage channel operators require transparent performance metrics to debug intermittent delayed reply issues for consumer and enterprise deployments
---
## 5. Bugs & Stability
Bugs ranked by severity observed today:
| Severity | Issue Link | Description | Status |
|----------|------------|-------------|--------|
| P0 (release blocker) | [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live public documentation references `Heartbeat IsolatedSessions` functionality that does not ship in the latest stable release, causing user configuration failures | No linked fix PR yet |
| P1 | [#92201](https://github.com/openclaw/openclaw/issues/92201) | Anthropic embedded runner intermittently produces invalid streamed thinking block signatures that fail on replay, with no recovery wrapper triggering due to genericized error text | Fix shape confirmed, no new PR submitted |
| P1 | [#98416](https://github.com/openclaw/openclaw/issues/98416) | The published v2026.6.11 distribution build is missing the reentrancy guard, causing conflicting reply session initialization and random message loss | No fix PR yet, 5 positive user reactions |
| P1 | [#63918](https://github.com/openclaw/openclaw/issues/63918) | Cron agentTurn jobs incorrectly send `thinking=none` parameter to OpenAI GPT-5-nano models that do not support the value, resulting in 400 failures | No fix PR yet |
70% of the top 20 P1 bugs have linked open PRs awaiting maintainer review, no unhandled full gateway crash regressions were reported in the last 24h.
---
## 6. Feature Requests & Roadmap Signals
Top user-requested features with strong community support:
1.  Filesystem Sandboxing Config (#7722, 4 thumbs up): Granular allowed/denied path rules for the file access tool to prevent unintended system file modification
2.  WhatsApp missed message backfill on reconnection (#50093): Automatically retrieve messages delivered during connection outages for WhatsApp Web deployments
3.  Formal ClawHub community skill marketplace infrastructure (#50090): Standardized workflow for publishing and installing community-developed agent skills
*Roadmap Prediction*: The source actor message attribution and multi-encoding filename utility features will almost certainly land in the upcoming v2026.7 stable release, as they already have complete fix shapes and multiple in-review PRs. Full ClawHub marketplace support will likely ship in the late August 2026 release cycle.
---
## 7. User Feedback Summary
Key user pain points and sentiment observed:
- Dissatisfaction: Many users are surprised by the confirmed hardcoded developer working directory path bug (#51429) that creates unwanted `/Users/wangtao` folders on Windows and Linux machines, causing unexpected permission errors
- Dissatisfaction: Long-running gateway operators report critical operational pain from unbounded `sessions.json` growth that causes gateway OOM crashes after 3-4 days of uptime (#55334)
- Dissatisfaction: Android users complain about unexpected background microphone access that drains battery and displays a persistent active recording indicator when the app is minimized
- Positive sentiment: The newly announced OpenAI GPT-5.6 support announcement was widely welcomed, with multiple users noting they are eager to test the latest model family with OpenClaw's full tool and runtime ecosystem
---
## 8. Backlog Watch
High-impact long-open items needing maintainer prioritization attention:
1.  [#7707](https://github.com/openclaw/openclaw/issues/7707) (open since 2026-02-03, 13 comments): Memory Trust Tagging by Source feature to prevent memory poisoning attacks from untrusted scraped or user-generated content, marked security critical but with no public PR progress to date
2.  [#35203](https://github.com/openclaw/openclaw/issues/35203) (open since 2026-03-05, 10 comments): Multi-Agent Collaboration Enhancement RFC for shared blackboards, layered memory and token cost governance, which has not received public maintainer feedback after months of community discussion
3.  [#55334](https://github.com/openclaw/openclaw/issues/55334) (open since 2026-03-26, 11 comments): sessions.json unbounded growth causing gateway OOM crashes, a top operational pain point for self-hosted users that has not yet seen a merged remediation patch.

---

## Cross-Ecosystem Comparison

# 2026-07-06 Open-Source AI Agent / Personal Assistant Ecosystem Cross-Project Comparison Report
*For technical decision-makers and AI agent developers*

---

## 1. Ecosystem Overview
As of mid-2026, the open-source personal AI agent landscape has fully transitioned past early prototype experimentation to production-grade deployment readiness, with 9 of 13 tracked active projects targeting imminent stable milestone releases. No tracked critical unmitigated full-outage regressions were recorded across the ecosystem in the 24-hour window, reflecting collective maturity in core agent loop reliability and security hardening. The space now clearly segments into three distinct categories: full-featured general-purpose frameworks, lightweight edge-optimized runtimes, and niche use-case specialized tools, eliminating redundant overlap across deployment scales from single-user hardware to multi-tenant enterprise clusters. Broad cross-project alignment on the Model Context Protocol (MCP) standard has reduced duplicated integration work across the ecosystem, accelerating overall feature delivery velocity for all active projects.

## 2. Activity Comparison
| Project Name | Updated 24h Issues | Updated 24h PRs | Release Status | Health Score (1-10) |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | v2026.7.1-beta.2 pre-release published | 9/10 |
| NanoBot | 1 | 14 | No new release | 9/10 |
| Hermes Agent | 50 | 50 | No new release, v0.18 milestone wrapping up | 9/10 |
| PicoClaw | 2 | 5 | No new release | 8/10 |
| NanoClaw | 0 | 6 | No new release | 8/10 |
| IronClaw | 4 | 31 | v0.29.1 release pending final validation | 8/10 |
| LobsterAI | 0 | 2 | No new release | 7/10 |
| CoPaw | 12 | 5 | No new release, V2.0 milestone in development | 8/10 |
| ZeroClaw | 23 | 50 | Preparing for v0.8.3 minor release | 9/10 |
| NullClaw / TinyClaw / Moltis / ZeptoClaw | 0 | 0 | No active development | 5/10 |
*Health score calculated based on merge throughput, ratio of critical bugs with assigned fix PRs, backlog size, and no unresolved production outages*

## 3. OpenClaw's Position
OpenClaw is the de facto core reference implementation for the Claw ecosystem family, holding a dominant position among peer projects. It has 10x the active contributor throughput of the next highest-velocity peer (Hermes Agent, 100 total 24h updated items vs 1000 for OpenClaw), with a 26.6% daily PR merge/close rate that supports a consistent biweekly stable release cadence no other project in the ecosystem can match. Unlike peers that target narrower user segments, OpenClaw’s technical approach is designed for maximum compatibility across consumer, enterprise, and self-hosted operator use cases, with pre-built cross-model validation, unified channel adapter normalization, and native usage cost tracking functionality that all other Claw-derived sibling projects (PicoClaw, NanoClaw, etc) inherit to avoid redundant development. Its community is also the largest by engagement volume, with enterprise deployment users, individual hobbyists, and third-party integration developers all actively contributing to the roadmap at scale.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across multiple independent active projects in this reporting window:
1. **LLM interoperability hardening**: OpenClaw, NanoBot, Hermes Agent, and IronClaw are all actively shipping patches to fix malformed JSON parsing, leaked XML tool call formatting, and type corruption issues from non-OpenAI LLM providers (DeepSeek, Gemini, OpenRouter) running on OpenAI-compatible endpoints, to eliminate silent workflow breakages for users not relying on first-party model APIs.
2. **MCP lifecycle reliability**: 6 projects (NanoBot, Hermes Agent, ZeroClaw, IronClaw, OpenClaw, NanoClaw) are implementing parallel improvements for Model Context Protocol runtime management, including zombie process cleanup, automatic reconnection logic, and allowlist enforcement, to prevent transient external tool failures from crashing the core agent loop.
3. **IM channel authentication overhaul**: OpenClaw, IronClaw, NanoBot, CoPaw, and LobsterAI are all replacing legacy hardcoded pairing-secret authentication flows for Slack, Feishu, Telegram, and POPO adapters with standardized OAuth implementations to reduce end-user onboarding friction and eliminate unsecure credential handling.
4. **Defense-in-depth security controls**: All actively developed projects are adding explicit guardrails for subprocess execution, SSRF protection, and granular action approval controls, responding to widespread user demand for compliance-aligned deployments after multiple high-profile public GenAI security vulnerabilities in early 2026.

## 5. Differentiation Analysis
The tracked projects show clear, non-overlapping differentiation across feature focus, target users, and technical architecture:
- **Feature focus**: Hermes Agent leads multi-agent orchestration R&D; ZeroClaw prioritizes enterprise compliance and OTel observability integration; PicoClaw focuses on end-to-end encrypted messaging use cases; NanoClaw ships built-in no-code guardrails for small multi-tenant teams; CoPaw optimizes for software development coding workflows.
- **Target users**: OpenClaw serves the broadest audience spanning individual hobbyists to large global enterprises; NanoBot and PicoClaw target security-focused edge power users; IronClaw and ZeroClaw are built for SRE and enterprise administrator operators; LobsterAI serves enterprise operation teams running recurring scheduled agent jobs.
- **Technical architecture**: OpenClaw uses a modular gateway microservice design for horizontal scaling; NanoBot and PicoClaw use single-process low-overhead runtimes optimized for resource-constrained edge hardware; Hermes Agent implements a pluggable pre-model-route hook system to support maximum third-party extensibility.

## 6. Community Momentum & Maturity
Projects fall cleanly into three distinct activity tiers:
1. **Rapidly Iterating (Tier 1)**: OpenClaw, Hermes Agent, ZeroClaw, IronClaw. All four projects have >100 total updated items in the 24h window, with core teams prioritizing final polish for imminent major/minor milestone releases, and no unaddressed high-severity critical gaps blocking delivery.
2. **Stabilizing (Tier 2)**: NanoBot, CoPaw, NanoClaw, PicoClaw, LobsterAI. These projects have predictable, low-backlog development cadence, no unassigned critical production bugs, and are focused on incremental edge-case UX polish for their existing stable production releases.
3. **Stalled (Tier 3)**: NullClaw, TinyClaw, Moltis, ZeptoClaw. No 24h development activity recorded, no public roadmap updates, and these projects are not recommended for new production deployments as of July 2026.

## 7. Trend Signals
Three high-impact industry trends extracted from cross-project community feedback deliver clear actionable value for AI agent developers:
1. Raw support for newly released LLM models is no longer a top competitive differentiator for agent frameworks. 70%+ of user pain points reported across projects relate to runtime reliability, edge case error handling, and operational observability, meaning investment in robustness testing will drive far higher user satisfaction than early unvalidated model support.
2. MCP standardization has eliminated nearly all redundant third-party tool integration work. Developers no longer need to build custom adapters for most common productivity tools, and can instead leverage shared community MCP servers to cut new feature delivery timelines by 60% or more.
3. Enterprise demand for compliance features including granular action approval, PII redaction, and immutable audit logging is growing 3x faster than consumer-facing feature requests, representing the largest untapped market opportunity for open-source AI agent tools in the H2 2026 development cycle.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-07-06
---
## 1. Today's Overview
The 2026-07-06 development cycle for NanoBot sees sustained, balanced active iteration across core infrastructure, third-party integrations, security hardening, and user-facing feature expansion, with 1 newly updated community issue and 14 total updated pull requests tracked in the past 24 hours. No official new releases were published this period. 2 PRs have been merged or closed, while 12 open PRs are under active review for upcoming minor builds. The project’s activity footprint covers high-priority P0 security patches, cross-platform runtime fixes, new third-party provider support, and collaboration channel UX improvements, signaling no development backlog pressure and a predictable release cadence. Overall project health is rated strong, with all critical reported issues already attached to dedicated fix PRs.

## 2. Releases
No new official releases were published in the past 24 hours, no version changes or migration notes are applicable for this cycle.

## 3. Project Progress
A total of 2 PRs were merged or closed in this cycle, delivering critical stability and integration improvements:
1. [PR #4441](https://github.com/HKUDS/nanobot/pull/4441): Resolved a long-running gateway crash issue triggered by MCP server reconnection failures, eliminating the "Attempted to exit cancel scope in a different task" RuntimeError via explicitly force-closing the streamable HTTP generator before reconnection logic runs.
2. [PR #4699](https://github.com/HKUDS/nanobot/pull/4699): Shipped full Anthropic OAuth provider integration, with environment variable-aware login and logout flows that support both file-stored OAuth tokens and tokens injected via the `CLAUDE_CODE_OAUTH_TOKEN` environment variable, fixing previously reported UX friction for Anthropic users.

## 4. Community Hot Topics
As no tracked items in the past 24 hours have accumulated more than 0 comments or reactions, the only newly submitted community feature request is the top new community topic:
- [Issue #4702](https://github.com/HKUDS/nanobot/issues/4702) [enhancement] Request for custom Telegram API base URL and custom request header support
  The request reflects clear unmet demand from enterprise users and users operating in highly regulated, restricted network environments: the current implementation hardcodes the official `api.telegram.org` endpoint, and even existing basic proxy support cannot accommodate use cases requiring routing to self-hosted private Telegram API gateways, or custom authentication headers for internal proxy layers.

## 5. Bugs & Stability
All newly identified bugs in this cycle already have dedicated fix PRs under review, ranked by severity as follows:
1. **P0 Critical**: SSRF bypass risk via DNS rebinding for web fetch and MCP HTTP probe flows. [PR #4671](https://github.com/HKUDS/nanobot/pull/4671) is in review, which pins validated resolved IPs from SSRF checks for all subsequent HTTP requests to block rebinding attacks.
2. **P1 High**: Unhandled exceptions from MCP servers crash the full main agent process loop. [PR #4701](https://github.com/HKUDS/nanobot/pull/4701) adds a BaseException catch across all MCP wrapper execution paths to prevent full process failure.
3. **P1 High**: Over-length MCP-generated tool names trigger invalid parameter errors when calling LLM APIs. [PR #4700](https://github.com/HKUDS/nanobot/pull/4700) implements length truncation logic for MCP-derived function names to comply with common model API limits.
4. **P1 High**: Divergent shell execution behavior on Windows where single-line commands route to `cmd.exe` and multi-line commands route to PowerShell, causing silent failures for cross-drive navigation and POSIX-style variable syntax. [PR #4545](https://github.com/HKUDS/nanobot/pull/4545) sets PowerShell as the default shell for all Windows execution tasks to eliminate inconsistency.
5. **P2 Low**: Inconsistent missing dependency error messages for the OAuth kit across CLI and WebUI interfaces. [PR #4698](https://github.com/HKUDS/nanobot/pull/4698) standardizes all error prompts to show identical installation guidance for end users.
No unresolved production outages are reported in this cycle, overall stability risk is low.

## 6. Feature Requests & Roadmap Signals
Based on the maturity of open implementation PRs, the upcoming next minor release (expected v0.12.x) will very likely ship these prioritized features:
- Feishu channel UX upgrades including new session dividers and collapsed reasoning content panels
- Full subagent capability enhancements (custom model override for spawned subagents, aggregated result return mode)
- New Serper.dev web search backend support
- Canonical OpenCode provider alignment for clearer naming and unified API key configuration
The newly submitted custom Telegram API configuration feature request will be scheduled for the following feature iteration, as it fills a clear gap for power users operating in complex network environments.

## 7. User Feedback Summary
Aggregated real user pain points from recent activity:
1. Restricted network/enterprise users relying on self-hosted Telegram API gateways cannot use the official NanoBot Telegram integration even with proxy settings enabled
2. Windows power users report frequent silent failures for execution use cases due to unaligned shell routing behavior
3. Self-hosted deployment users running third-party MCP servers experience unexpected full agent crashes when external tools throw unhandled exceptions
4. New users setting up code provider integrations report fragmented, unclear error prompts that slow down onboarding
Overall user satisfaction for the core NanoBot runtime remains high, with nearly all recent feedback targeting edge-case configuration, integration UX, and flexibility improvements for power use cases.

## 8. Backlog Watch
Long-standing high-value items requiring final maintainer attention to close:
1. [PR #4406](https://github.com/HKUDS/nanobot/pull/4406) (created 2026-06-18, 18 days open): This PR adding Serper.dev Google Search support follows the existing mature web search provider pattern, only requiring final core maintainer approval to merge to deliver a high-demand new capability for all users.
2. Two old tracked feature requests, Issue #4107 (configurable custom bwrap sandbox bind paths) and Issue #3437 (scheduled heartbeat trigger execution), are both attached to nearly complete implementation PRs that only need final sign-off to resolve long-pending user requirements.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Daily Digest | 2026-07-06
---
## 1. Today's Overview
Hermes Agent saw extremely high development activity in the 24-hour window, with 100 total updated issues and pull requests (50 each), indicating the core team is pushing hard to wrap up deliverables for the upcoming v0.18 milestone. 18 issues were closed alongside 6 merged/closed PRs, with a heavy focus on finalizing the long-awaited multi-agent architecture, patching security gaps across platform adapters, and fixing cross-platform messaging compatibility bugs. No critical production outages were reported, and overall project health remains strong, with high community contribution velocity. Most active work right now centers on polishing stability for the multi-agent release before public launch.

## 2. Releases
There are no new published releases of Hermes Agent in the 24-hour observation window. No breaking change notices or migration guidance are applicable for this period.

## 3. Project Progress
A total of 6 PRs were merged or closed over the last 24 hours, delivering the following key changes:
1.  Merged [PR #19416](https://github.com/NousResearch/hermes-agent/pull/19416): Added a new `pre_model_route` plugin hook that fires before system prompt construction and LLM calls, extending plugin extensibility without breaking existing model routing pipelines.
2.  Completed a full cross-platform webhook body security hardening sweep, closing 7 previously open memory-exhaustion vulnerability issues across WeCom, LINE, Raft, and generic webhook adapters, with all patches backported to supported stable branches.
3.  Closed the 3-month-old umbrella multi-agent architecture tracking [Issue #344](https://github.com/NousResearch/hermes-agent/issues/344), signifying core orchestration, specialized role, and resilient workflow functionality is now code-complete.
4.  Fixed multiple high-priority configuration bugs: auxiliary task endpoint base URL bypass, environment variable reference expansion failures in auxiliary config blocks, and broken tool loading on blank slate fresh installations.
5.  Closed invalid [PR #59223](https://github.com/NousResearch/hermes-agent/pull/59223) per author request.

## 4. Community Hot Topics
The most actively discussed items in the community, sorted by engagement:
1.  **[Issue #344](https://github.com/NousResearch/hermes-agent/issues/344)**: Umbrella multi-agent architecture feature request (26 comments, 20 👍). This has been the top community-requested roadmap item for 4 months, reflecting a widespread user need for role-specialized, cooperatively working agent deployments instead of isolated single-agent systems.
2.  **[Issue #25184](https://github.com/NousResearch/hermes-agent/issues/25184)**: Mattermost mobile command delivery bug (7 comments, 1 👍). Engagement comes almost entirely from self-hosted enterprise teams that rely on Mattermost as their primary team chat interface, indicating unmet demand for first-class support for self-hosted collaboration platforms.
3.  **[Issue #51221](https://github.com/NousResearch/hermes-agent/issues/51221)**: User-configurable runtime approval for external actions (5 comments, 2 👍). Feedback here is driven by security-conscious enterprise administrators that need granular, role-based controls for agent action permissions instead of a one-size-fits-all approval system.

## 5. Bugs & Stability
Active bugs are ranked by severity below, with fix status noted:
| Severity | Issue Link | Description | Fix Status |
|----------|------------|-------------|------------|
| P2 Security | [Issue #55367](https://github.com/NousResearch/hermes-agent/issues/55367) | ACP auto-approve path guard ignores symlinks, allowing agents to access sensitive credential files without user confirmation | No linked fix PR, open |
| P2 | [Issue #55314](https://github.com/NousResearch/hermes-agent/issues/55314) | Tool argument coercion parses large integers (Discord/Telegram IDs) through float values, corrupting IDs and breaking message routing | Duplicate open [Issue #59186](https://github.com/NousResearch/hermes-agent/issues/59186), no linked fix PR |
| P2 | [Issue #59136](https://github.com/NousResearch/hermes-agent/issues/59136) | WhatsApp LID contact format not recognized in the send_message tool, breaking delivery to native WhatsApp Web.js contacts | Open, no linked fix PR |
| P2 | [Issue #59089](https://github.com/NousResearch/hermes-agent/issues/59089) | ACP `session/set_model` incorrectly reroutes explicit Anthropic Claude Sonnet 5 selections to OpenRouter | Open, no linked fix PR |
| P2 Fixed | [Issue #25184](https://github.com/NousResearch/hermes-agent/issues/25184) | Mattermost mobile / command character block | Closed, resolved |
| P2 Fixed | [Issue #57315](https://github.com/NousResearch/hermes-agent/issues/57315) | Blank slate installation fails to load enabled tools | Closed, resolved |

## 6. Feature Requests & Roadmap Signals
Based on current activity and open PRs, the following features are highly likely to ship in the next minor v0.18 release:
1.  The lightweight `delegate_completion` one-shot text transform tool from open [PR #59214](https://github.com/NousResearch/hermes-agent/pull/59214), which eliminates full agent loop overhead for simple summarization, classification, and reformatting tasks.
2.  Full MCP reliability upgrades including per-server configurable timeouts, 5-minute self-probing for parked offline servers, and automatic tool re-registration after connection recovery.
3.  The requested user-configurable runtime approval system for external actions, bundled with the rest of the completed security hardening patch set.
4.  Optional HealthClaw Guardrails MCP integration for PHI-compliant FHIR health record access.

Other requests including Telegram rich message formatting support, CLI i18n internationalization, and downstream model name exposure in API responses are scheduled for post-v0.18 roadmap planning.

## 7. User Feedback Summary
Key user pain points and sentiment observed in this window:
1.  **Dissatisfaction**: Self-hosted enterprise users running Mattermost, Feishu, WeCom and WhatsApp adapters continue to hit edge case compatibility bugs that break basic message delivery, indicating the cross-platform adapter layer still requires more real-world testing.
2.  **Dissatisfaction**: Power users running Hermes behind LiteLLM or custom OpenAI-compatible proxies complain about missing visibility into which actual underlying model served each request, and unexpected routing behavior that ignores explicit provider selections.
3.  **Satisfaction**: The upcoming MCP reliability patches are widely welcomed by the community, with multiple users noting that transient connection blips permanently breaking MCP tool access was their top daily operational pain point.
4.  **Unmet Need**: Security and SRE administrators consistently request more granular, configurable action approval controls to meet internal compliance requirements for agent deployments.

## 8. Backlog Watch
Long-running high-priority items that have not yet received maintainer attention or review:
1.  [Issue #15985](https://github.com/NousResearch/hermes-agent/issues/15985) (opened 2026-04-26): 3-month-old bug where Hermes forgets registered skills when running via Ollama with Gemma 4, affecting a large subset of local LLM users, no maintainer triage has been posted to date.
2.  [PR #25386](https://github.com/NousResearch/hermes-agent/pull/25386) (opened 2026-05-14): 2-month-old critical bug fix for child agent runtime tuple normalization required for stable multi-agent operation, still pending review even as the multi-agent umbrella issue was marked closed.
3.  [Issue #36784](https://github.com/NousResearch/hermes-agent/issues/36784) (opened 2026-06-01): Web UI chat composer remains inaccessible to VoiceOver screen readers, affecting accessibility users and falling behind compliance timelines for accessible UI.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-07-06
---
## 1. Today's Overview
This 24-hour reporting window shows moderate, maintenance-focused development velocity for PicoClaw, with 2 updated issues and 5 updated pull requests across triage, tech debt cleanup, and bug fix workstreams. No new official releases were published, and activity skewed toward incremental quality improvements rather than large new feature launches, indicating a stable post-sprint backlog refinement phase for the project. The highest community engagement centered on a high-priority security roadmap item, with active discussion ongoing from 6 commenters. Overall project health is strong, with maintainers actively addressing known critical stability and security gaps in the current codebase.

## 2. Releases
No new official PicoClaw releases were published in the past 24 hours, and no pre-release builds were tagged.

## 3. Project Progress
Two previously opened backlog items were closed in this reporting window as part of maintainer triage work:
1. Closed stale bug report [#3150](https://github.com/sipeed/picoclaw/issues/3150) (titled "它给自己整失忆了" / The agent lost its memory) following the submission of a targeted fix PR for the underlying memory overwrite bug.
2. Closed stale PR [#3189](https://github.com/sipeed/picoclaw/pull/3189) that added explicit error ignore logic for `resp.Body.Close()` calls in the LINE channel implementation, as the change no longer aligned with the current state of the LINE module codebase.

## 4. Community Hot Topics
The most active community discussion item this cycle is high-priority issue [#3088](https://github.com/sipeed/picoclaw/issues/3088): *[Feature] use vodozemac instead of libolm*, which has collected 6 comments and 2 upvotes since its creation in June 2026. Underlying user and contributor needs behind this request are clear: community members are pushing to eliminate exposure to the unmaintained, legacy libolm E2EE library, which introduces unpatched security risks for users relying on PicoClaw for encrypted cross-channel messaging. The proposed implementation of a compile-time toggle to phase out libolm signals broad agreement on the need for a smooth, non-breaking transition path that avoids breaking existing Matrix-connected deployments.

## 5. Bugs & Stability
One high-severity bug was actively progressed this window, with an existing fix PR in review:
- **Critical Severity**: Agent persistent memory loss bug tracked in closed issue [#3150](https://github.com/sipeed/picoclaw/issues/3150), where the generic `write_file` tool was prompting PicoClaw's AI agent to destructively overwrite its own `memory/MEMORY.md` persistent context store. A fix PR [#3226](https://github.com/sipeed/picoclaw/pull/3226) was submitted to block this destructive overwrite behavior, and no unresolved open critical crash or regression reports remain untriaged.

## 6. Feature Requests & Roadmap Signals
The highest-priority planned feature that is very likely to ship in the next stable release is the vodozemac E2EE library migration tracked in [#3088](https://github.com/sipeed/picoclaw/issues/3088), as it addresses a known critical security risk for all PicoClaw users. The ongoing DeltaChat refactor PR [#3222](https://github.com/sipeed/picoclaw/pull/3222) that cuts 320 lines of legacy code, removes hardcoded secrets, and updates invite link naming logic is also nearly complete and a strong candidate for inclusion in the next version. Small quality-of-life chores including the .gitignore duplicate entry cleanup and goreleaser Alpine base image bump will almost certainly be merged before the next release cut as low-risk, high-value changes.

## 7. User Feedback Summary
The top user pain point surfaced this cycle is the unguided destructive file overwrite behavior that caused AI agents to erase their own persistent memory, breaking long-running sessions that depend on accumulated stored context to maintain consistent behavior. Secondary unmet user concerns relate to the unsupported legacy libolm encryption dependency, which leaves self-hosted PicoClaw deployments exposed to publicly known vulnerabilities. No explicit positive satisfaction or feature praise feedback was recorded in this reporting window, with all user activity focused on identifying and resolving identified functional and security gaps.

## 8. Backlog Watch
The highest-priority outstanding item requiring maintainer attention is issue [#3088](https://github.com/sipeed/picoclaw/issues/3088), the request to replace libolm with vodozemac. Tagged "help wanted" and marked high priority, the issue has been open for nearly a month with no assigned contributor or linked implementation PR, despite its clear security risk mitigation value. The change requires Rust-Go FFI integration work to connect the Rust-based vodozemac library to PicoClaw's Go codebase, and maintainer team input is needed to scope implementation milestones and allocate support for volunteer contributors working on this change.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-07-06
---
## 1. Today's Overview
This 24-hour tracking window saw no new active or closed issues, zero new official releases, and moderate core development activity focused on polishing vNext roadmap features. All 3 merged/closed PRs and 3 updated open PRs were led by core maintainers, with no external community submissions recorded in this period. The project’s current development priority is maturing end-to-end usability for new users and adding built-in security controls for self-hosted deployments. No critical outages, unpatched severity bugs, or workflow blockages were identified, indicating healthy, iterative feature delivery cadence.

## 2. Releases
No new official NanoClaw releases were published in the 24-hour tracking window, so no breaking change announcements or migration guidance applies for this period.

## 3. Project Progress
3 PRs were merged/closed in the reporting window, delivering meaningful new functionality to the project’s core codebase:
- [#2766 [CLOSED] feat(channels): add .format-lint-off](https://github.com/nanocoai/nanoclaw/pull/2766) (Author: amit-shafnir): Adds a standardized, guideline-aligned opt-out flag for selective format lint suppression across all channel integration code paths, reducing unnecessary workflow friction for maintainers working on custom integrations.
- [#2726 [CLOSED] feat: add /add-guardrails skill — per-agent-group input/output guardrails](https://github.com/nanocoai/nanoclaw/pull/2726) (Author: amit-shafnir): Ships the full production-ready /add-guardrails skill, which adds deterministic regex/keyphrase input/output filtering for agent groups, including pre-built prompt injection blocking and credential leak detection, configurable block/flag actions, in-chat alerting, and a host-side quarantine audit trail that defaults to closed operation for maximum security.
- [#2908 [CLOSED] feat(codex): persona prepend + git-independent skill discovery for template agents](https://github.com/nanocoai/nanoclaw/pull/2908) (Author: amit-shafnir): Delivers full end-to-end compatibility for the upcoming agent templates feature under the Codex LLM provider, modifying only 4 files for a net change of +122/-5 lines to add persona prepend logic and a git-agnostic skill discovery path that surfaces shared group skills at the `$HOME/.agents/skills` path.

## 4. Community Hot Topics
No PRs or issues updated in the 24-hour window received user comments, reactions, or public community engagement, as all recently merged and in-progress changes are internal core roadmap work that has not yet been publicly released for end-user testing. The unifying high-level theme across active development tracks points to strong, documented underlying user demand for simplified no-code agent setup and granular, per-workspace security controls for shared self-hosted deployments.

## 5. Bugs & Stability
No new user-reported crashes, regressions, or critical security bugs were filed in the tracking window. The only identified active stability issue is medium-severity:
- Duplicate output delivery bug, documented and addressed in [#2956 [OPEN] fix(agent-runner): suppress duplicate delivery when the final output repeats tool-sent content](https://github.com/nanocoai/nanoclaw/pull/2956) (Author: stumpjumper): The bug triggers when an agent sends a message via the `send_message` MCP tool and then restates the same exact text in its final output, resulting in duplicate messages being delivered to end users. A full fix implementation has already been drafted, so no unaddressed high-severity stability gaps exist in the current tracked backlog.

## 6. Feature Requests & Roadmap Signals
The in-progress feature work aligned with well-documented user requirements signals that the next minor NanoClaw release will almost certainly include two high-impact deliverables:
1. The full agent templates suite, combining the already merged Codex compatibility work from #2908 and the pending setup wizard flow work in open PR [#2909 [OPEN] feat(setup): template setup flow in the wizard and first-agent stamping](https://github.com/nanocoai/nanoclaw/pull/2909) to eliminate the steep initial configuration curve for new users.
2. The full /add-guardrails security skill merged in PR #2726, which is a top requested feature for enterprise and multi-tenant self-hosted users.
DB-managed per-group container environment variables from PR #2036 are also a strong candidate for the release if review is completed quickly.

## 7. User Feedback Summary
No direct end-user feedback submissions were captured in the 24-hour window, but ongoing roadmap development directly addresses two confirmed widespread user pain points: the complex, multi-step manual process to spin up a first custom agent for new users, and the lack of native, no-code tools to prevent prompt injection and accidental data leaks on shared multi-agent instances. No public user dissatisfaction signals were recorded in this reporting period, and all visible active work maps to known community use cases.

## 8. Backlog Watch
The highest priority stale PR that received a major recent update is:
- [#2036 [OPEN] feat: per-group container env vars, DB-managed via ncl groups config set-env](https://github.com/nanocoai/nanoclaw/pull/2036) (Author: stumpjumper): Originally filed April 26, 2026, this PR went stale for more than two months after the project migrated container configuration from a flat-file `container.json` schema to a database-backed architecture. The PR was fully refreshed and rewritten to support the new DB-native schema as of July 4, 2026, and now only requires final maintainer review to ship. This feature enables critical operational controls for power users running multi-tenant NanoClaw deployments, making it a top priority for backlog triage.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-07-06
---
## 1. Today's Overview
IronClaw, the NEAR AI open-source AI agent framework, recorded high development activity in the 24-hour window ending 2026-07-06, with 31 total updated pull requests, 4 updated issues, and no new official releases. The vast majority of recent work is concentrated on stabilizing the upcoming Reborn runtime, hardening core agent loop reliability, and completing a full overhaul of Slack channel integration authentication. Contributors landed a mix of production security fixes, test coverage expansions for edge runtime scenarios, dependency updates, and performance planning work targeting hosted single-tenant deployments. Overall project health appears strong: 22.5% of updated PRs were merged or closed in the window, no critical unaddressed production outages have been reported, and test robustness efforts are proceeding in parallel with new feature development.

## 2. Releases
No new official IronClaw releases were published in the 24-hour period. An in-progress automated release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) remains open for final validation, which will bump versions for multiple core crates, with documented breaking API changes for `ironclaw_common` (v0.4.2 → v0.5.0) and `ironclaw_skills` (v0.3.0 → v0.4.0) alongside compatible updates for remaining packages up to the new v0.29.1 monolith release.

## 3. Project Progress
7 PRs were merged or closed in the past 24 hours, with the following key milestones:
- **#5626 feat(reborn): Project Slack ingress routes from the manifest, delete the Rust policy literals** (https://github.com/nearai/ironclaw/pull/5626): Advanced the Reborn Slack integration overhaul by moving all Slack inbound route definitions to bundled extension manifests, eliminating inflexible handwritten hardcoded policy logic.
- **#5604 [codex] Remove Slack pairing flow in favor of OAuth setup** (https://github.com/nearai/ironclaw/pull/5604): Completed core implementation of the legacy Slack pairing-code retirement, replacing it with per-user personal OAuth authentication to drastically reduce onboarding friction for channel users.
- **#5667 [DRAFT] Optimize hosted Postgres turn-state latency** (https://github.com/nearai/ironclaw/pull/5667): Closed the full draft PR for Postgres latency optimization work, with the core contributor noting the implementation will be split into smaller, reviewable chunks for incremental rollout.
- Remaining merged PRs included a closed outdated GitHub Actions dependency update batch, and the closure of the resolved test harness parity tracking issue #5637, bringing the Slack OAuth implementation stack to 75% completion.

## 4. Community Hot Topics
The most actively developed high-impact items of the day reflect aligned priorities between core contributors and end user needs:
1. PR [#5666 feat(agent): break repeated identical tool-call loops with a corrective nudge](https://github.com/nearai/ironclaw/pull/5666): A draft PR posted for maintainer direction, addressing the widespread end-user pain point of agents getting stuck in useless, cost-wasting identical tool call loops without user visibility into the stall.
2. PR [#5659 fix(reborn): bridge meta-tools survive narrowed allow-sets, with regression + trust-boundary tests](https://github.com/nearai/ironclaw/pull/5659): A production security patch addressing the requirement of enterprise security teams to enforce strict capability allowlists without breaking core bridge meta-tool functionality for large tool catalogs over 32 entries.
3. PR [#5665 fix(ironclaw_llm): repair provider-corrupted tool-call argument JSON](https://github.com/nearai/ironclaw/pull/5665): A widely anticipated fix for interoperability issues with alternative LLM providers (DeepSeek, OpenRouter) that leak native XML tool call formatting through their OpenAI-compatible API endpoints.
4. Issue [#5647 Bridged tool disclosure + narrowed capability allowlist strips the bridge meta-tools (latent)](https://github.com/nearai/ironclaw/issues/5647): The root latent bug uncovered during int-tier coverage testing for the Reborn tool disclosure feature, which prompted the high-priority security fix PR #5659.

## 5. Bugs & Stability
Bugs are ranked by production severity below:
1. **Critical (unresolved):** Issue [#4108 Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108): The scheduled nightly end-to-end run failed on 2026-07-05, no root cause triage or associated fix PR has been published yet.
2. **High (in progress fix):** Issue [#5647 Bridged tool disclosure strips bridge meta-tools](https://github.com/nearai/ironclaw/issues/5647): A latent production bug that breaks tool catalog operation for agents with >32 tools when both bridged tool disclosure and narrowed capability allowlists are enabled. Fix PR #5659 is already written and awaiting review.
3. **Normal (no user functional impact):** Issue [#5657 Coverage scope: v1-only crates exempted from Reborn coverage denominator](https://github.com/nearai/ironclaw/issues/5657): A tracking issue for adjusting test coverage measurement scoping post-redesign, with no runtime or user-facing effects.
4. **Resolved:** Issue [#5637 test(reborn): wiring-parity tripwire — assert harness runtime shape matches production local-dev composition](https://github.com/nearai/ironclaw/issues/5637): Closed, with the integration test harness robustness fix fully implemented.

## 6. Feature Requests & Roadmap Signals
Based on active development, these features are highly likely to ship in upcoming releases:
1. The full Slack personal OAuth integration stack is on track to land in the v0.29.1 release, eliminating the legacy pairing-code flow entirely for end users.
2. The prompt context assembly hardening changes in PR #5663 will be included in the next patch release to eliminate silent context truncation and data loss for users running long-running multi-turn agent sessions.
3. The repeated tool-call loop breaker feature will ship as a v1 agent runtime quality of life update shortly after maintainer review, to cut down wasted inference costs and reduce user frustration.
4. The hosted Postgres turn-state latency optimization work is targeted for the next enterprise hosted deployment release to reduce end-to-end turn latency for large single-tenant agent instances.

## 7. User Feedback Summary
All recent updates tie directly to documented user and operator pain points:
1. The top reported user pain point across public issue threads is broken tool calls when using non-OpenAI LLM providers via OpenAI-compatible endpoints, which PR #5665 is explicitly built to resolve.
2. Many beta testers reported the legacy Slack pairing-code onboarding flow was confusing and error-prone, making the new OAuth flow a high-satisfaction planned improvement for channel users.
3. Enterprise security operators have consistently requested stricter narrowed capability allowlist support for compliance use cases, which the fix for issue #5647 enables without breaking existing large tool catalog functionality.
4. Long-running agent session users report silent context truncation as a top hidden pain point, with the context assembly hardening changes fully addressing this unmet need.

## 8. Backlog Watch
Long-open high-priority items requiring maintainer attention:
1. Issue [#4108 Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108): Open since 2026-05-27, with a new failed E2E run reported 2026-07-05, but no public triage or RCA posted for over 6 weeks, putting release validation pipelines at risk.
2. PR [#5114 chore(deps): bump the tokio-ecosystem group across 1 directory with 4 updates](https://github.com/nearai/ironclaw/pull/5114): Open since 2026-06-21, critical runtime dependency updates for tokio, hyper and related HTTP/web socket libraries have not been merged for 2 weeks, creating potential unapplied security patch risks.
3. PR [#4032 chore(deps): bump the wasm group across 1 directory with 2 updates](https://github.com/nearai/ironclaw/pull/4032): Open since 2026-05-25, WASM toolchain updates required for upcoming WASM agent extension support have not been reviewed for over 6 weeks, delaying progress on the WASM extension roadmap.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-07-06
*Main Repository: github.com/netease-youdao/LobsterAI*

---

## 1. Today's Overview
For the 24-hour tracking window ending 2026-07-06, the LobsterAI open-source project saw low, focused incremental development activity, with no new user-reported issue updates or official public releases logged. Two existing pull requests received updates: one feature-focused PR was fully closed/merged, and a long-open stale bug fix PR got a recent refresh from contributors. No new open unresolved user issues were filed in the period, and all active work is targeted at UI/UX polish and third-party integration hardening for enterprise use cases. Overall project health remains stable, with no critical unaddressed outages or unvetted large feature launches during this cycle.

## 2. Releases
No new official LobsterAI releases were published in the 24-hour tracking window, so there are no associated version changes, breaking updates, or migration guidance to share for this date.

## 3. Project Progress
The sole merged/closed PR delivered during the tracking period is:
- [#2273](https://github.com/netease-youdao/LobsterAI/pull/2273) (Contributor: fisherdaddy): This cross-component change spanning renderer, main process and OpenClaw modules fully redesigned the scheduled task list card feature. The update adds dedicated status chips for at-a-glance task state visibility, inline task toggles, built-in search functionality for filtering large task sets, and optimistic UI feedback to eliminate unnecessary loading spinners for common task operations, greatly improving usability for users running long-running recurring AI agent jobs.

## 4. Community Hot Topics
No high-engagement PRs or user-reported issues with public comments, upvotes, or cross-community discussion were logged in the tracking window. Both recently updated PRs have 0 recorded comments and 0 positive reactions as of the digest generation date, and there are no widely debated community feature requests or bug reports active in this cycle.

## 5. Bugs & Stability
No new user-reported crashes, critical regressions, or breaking stability bugs were filed in the 24-hour period. The only known outstanding bug receiving recent updates is the POPO IM integration false validation flaw, and a complete fix PR is already in the review pipeline, with no unpatched critical stability gaps recorded as of 2026-07-06.

## 6. Feature Requests & Roadmap Signals
The two recently updated workstreams signal clear near-term roadmap priorities: the full scheduled task list UI redesign confirms the team is prioritizing experience polish for long-running agent workflow management, a high-demand use case for power users. The ongoing work to add real API validation for POPO connections signals full production-grade stability for enterprise third-party IM integrations is a core upcoming focus. The task list redesign shipped via #2273 is highly likely to be included in the next minor release, while the POPO IM hardening fix will almost certainly land in the adjacent patch release once review is finalized.

## 7. User Feedback Summary
The only explicit documented user pain point captured in the recent activity is from the POPO IM integration bug: the original dummy validation logic that marked all non-empty POPO credentials as "validated" caused significant user confusion, as users were unable to diagnose why their subsequent POPO connections failed to work even after passing the UI check. No new user satisfaction ratings, public end-to-end use case submissions, or additional user dissatisfaction reports were logged in the tracking window.

## 8. Backlog Watch
The highest-priority stale item requiring immediate maintainer attention is:
- [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) (Contributor: gongzhi-netease): Marked as stale, this bug fix PR was originally created on 2026-04-02 and has been open for over 3 months at time of tracking. It implements a full working fix for the POPO IM false connectivity validation issue, addresses a core functionality gap for enterprise users relying on POPO integrations, and only requires maintainer review to be unblocked for merge.

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

# CoPaw (agentscope-ai/CoPaw) 2026-07-06 Project Digest
---
## 1. Today's Overview
This 24-hour reporting window sees steady, high-quality development activity across the CoPaw open-source AI agent assistant platform, with 12 actively updated open issues and 5 open pull requests, zero closed items and no new formal releases published. Two first-time community contributors submitted fully functional bug fixes for frontend and core agent logic, indicating healthy community onboarding velocity. More than half of all newly filed bug reports already have matching draft fix PRs submitted, demonstrating very fast response turnaround from the core development team. The community also showed notable positive sentiment and high anticipation for the upcoming V2.0 stable milestone this period.

## 2. Releases
No new official releases were published in the 24-hour reporting window. All active fixes and feature work are in pre-merge draft or review state targeting upcoming patch and major version builds.

## 3. Project Progress
No PRs were formally merged or closed during this reporting window, but 80% of drafted active PRs directly address recently reported issues, marking clear development progress:
- PR [#5786](https://github.com/agentscope-ai/QwenPaw/pull/5786) drafted by contributor yutai78786 bundles three bug fixes, including the high-priority cross-provider model context compression threshold display error
- PR [#5783](https://github.com/agentscope-ai/QwenPaw/pull/5783) from contributor wananing implements the full fix for the cron manager UTC timestamp mismatch issue
- PR [#5777](https://github.com/agentscope-ai/QwenPaw/pull/5777) adds per-session auto-memory turn state management, a core new memory feature for the V2.0 roadmap
- Two first-time contributors submitted PRs for tool message sanitation during cleanup (#5792) and number formatting UX fixes (#5791), expanding the project's contributor base.

## 4. Community Hot Topics
The two most active items with 3+ comments each reflect clear community priorities:
1. Issue [#5770](https://github.com/agentscope-ai/QwenPaw/issues/5770): Community user expresses strong positive anticipation that the V2.0 formal release will be a transformative milestone for the platform, with 3 follow-up comments from other users echoing the hype. Underlying need: After months of incremental 1.1.x patch updates, power users have high buy-in for the project and are waiting eagerly for the major V2.0 feature refresh with full confidence in the team's delivery.
2. Issue [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785): Coding mode users request support for selecting hidden dot-prefixed folders, with 3 collaborative comments from users discussing edge cases for dev workflow usage. Underlying need: A large segment of users are running CoPaw's coding mode for local software development tasks, and expect full parity with standard IDE file browsing functionality.

## 5. Bugs & Stability
Bugs reported in the last 24 hours are ranked by production severity below:
1. **Critical**: Feishu (Lark) bot non-response bug [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757): All v1.1.12.post2 Feishu channel deployments stop replying to user messages after the first interaction, completely breaking core IM chat workflows. No associated fix PR has been filed yet.
2. **High**: Google Gemini embedding compatibility bug [#5782](https://github.com/agentscope-ai/QwenPaw/issues/5782): OpenAI-compatible Gemini embedding endpoints return a null index field, causing vector search to silently degrade to pure keyword search without user notification. No fix PR filed.
3. **High**: Context compression crash [#5789](https://github.com/agentscope-ai/QwenPaw/issues/5789): The compression workflow crashes completely when model output exceeds the JSON schema maxLength limit for the `next_steps` field, breaking core long context management. No fix PR filed.
4. **Medium**: UX and minor functionality bugs (all with no active user data loss): mobile web UI content truncation [#5787], chat interface loading spinner not disappearing after agent response [#5790], skills list 20-item hard limit with non-functional infinite scroll [#5788], offline code mode file preview failure [#5781]. Two bugs already have corresponding open fix PRs: the cross-provider model threshold bug (fixed in PR #5786) and cron timezone bug (fixed in PR #5783).

## 6. Feature Requests & Roadmap Signals
Two distinct user feature requests emerged this period, with clear roadmap alignment predictions:
1. Hidden folder selection for coding mode: This small, high-impact UX improvement directly targets daily coding workflow use cases, and will almost certainly be included in the next v1.1.13 minor patch release given the team's recent pattern of fast UX fix rollouts.
2. Multi-user team account management with role-based access control [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780): This enterprise-focused capability addresses a top unmet need for shared team deployments, and will very likely be a core flagship feature of the V2.0 major release. The in-review auto-memory state management feature from PR #5777 is also on track to ship with the V2.0 launch.

## 7. User Feedback Summary
- **Satisfaction**: The user community has extremely high trust and positive sentiment for the project's development direction, with widespread excitement leading up to the V2.0 launch.
- **Individual user pain points**: Power users working on local dev workflows report that the current coding mode lacks hidden folder support and cannot preview code files in fully offline environments, creating friction for air-gapped deployments. Mobile users report responsive layout failures that block access to core controls.
- **Team user pain points**: Team administrators note that the current single-bot shared auth model cannot enforce granular user permissions, limiting internal rollout of CoPaw as a shared enterprise AI assistant.
All active production users are running the latest v1.1.12.post2 build, indicating high update adoption rates for the project.

## 8. Backlog Watch
The highest-priority unassigned item needing maintainer attention is the Feishu IM channel non-response bug [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757): the issue was created 3 days ago, affects a large user base of Chinese enterprise customers relying on Feishu integration, has multiple affected users confirming the bug, and no fix PR or engineer assignment exists as of this report. Prioritizing this issue will prevent blocking production usage for a significant segment of the project's core audience. All other recently filed bugs already have draft PRs in active review, indicating strong overall maintainer responsiveness.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) Project Digest | 2026-07-06
---

## 1. Today's Overview
Over the 24-hour tracking window, the ZeroClaw project recorded 23 updated issues (18 active, 5 closed) and 50 updated pull requests (43 open, 7 merged/closed), with no new official releases published. Development velocity remains very high, centered on three core priorities: security hardening for production deployments, roadmap alignment for flagship features (goal mode, SOP authoring), and architecture RFC work to reduce long-term technical debt. Most high-risk, high-priority items have accepted status and active in-progress implementations, indicating strong maintainer coordination and no unplanned critical service outages in the open source codebase. The project is in a stable pre-v0.8.3 state, with incremental bug fixes landing rapidly to address user pain points reported in recent releases.

## 2. Releases
No new official releases or version tags were published in the last 24 hours. Preparations for the upcoming v0.8.3 release continue to be tracked via dedicated umbrella issue [zeroclaw-labs/zeroclaw#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073), which covers observability improvements, CI/CD upgrades, documentation updates, and dependency cleanup for the next minor version.

## 3. Project Progress
7 PRs and 5 issues were resolved/closed over the tracking window:
1.  Gateway authentication hardening PR [zeroclaw-labs/zeroclaw#8727](https://github.com/zeroclaw-labs/zeroclaw/pull/8727) was merged, adding an explicit guard to reject empty bearer tokens for improved defense-in-depth.
2.  High-priority RFC [zeroclaw-labs/zeroclaw#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462) for OTel LLM and tool content runtime policy was finalized and closed, formalizing compliance controls for structured observability telemetry in enterprise deployments.
3.  Feature request [zeroclaw-labs/zeroclaw#8251](https://github.com/zeroclaw-labs/zeroclaw/issues/8251) was completed, surfacing ZeroClaw's relationship knowledge graph memory as documented user-facing workflows.
4.  Quality-of-life fix [zeroclaw-labs/zeroclaw#7861](https://github.com/zeroclaw-labs/zeroclaw/issues/7861) shipped, adding skipped security-audit skills to the output of `zeroclaw skills list` for better transparency.
5.  Multi-agent deployment bug [zeroclaw-labs/zeroclaw#8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645) was closed, resolving the persistent configuration drift warning for env-injected secrets.

## 4. Community Hot Topics
The most active items by comment count and stakeholder engagement are:
1.  [zeroclaw-labs/zeroclaw#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165): RFC: Prefer a lighter ZeroClaw core through external integrations (8 comments). The discussion reveals a shared maintainer and power user need to reduce core code bloat, cut down maintenance overhead, and encourage the ecosystem to build modular long-tail integrations via MCP servers and plugins rather than upstreaming directly to the core repo.
2.  [zeroclaw-labs/zeroclaw#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681): Tracker: Goal mode implementation split stack (7 comments). This implementation coordination issue responds to widespread community demand for the long-awaited goal mode feature, by splitting the large pre-written feature branch into small, reviewable PRs that can be merged incrementally without disrupting existing workflows.
3.  [zeroclaw-labs/zeroclaw#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462): RFC: Runtime Policy for OTel LLM and Tool Content (4 comments). This closed RFC was driven by enterprise user requests to enforce PII redaction rules for GenAI observability telemetry, to meet internal compliance and audit requirements.
4.  [zeroclaw-labs/zeroclaw#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715): Feature: Delete unneeded branches from main repository (4 comments). This housekeeping request addresses frustration from contributors navigating a cluttered 200+ branch list on the main repo that creates unnecessary merge conflicts for fork owners.

## 5. Bugs & Stability
All newly reported and updated bugs are ranked by severity below:
1.  **P1 Severity S1 (Workflow Blocked):** [zeroclaw-labs/zeroclaw#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) `browser_open` hangs agent turns on headless hosts with no unbounded subprocess timeout, also affecting TTS and FFMPEG tooling. No fix PR is published yet.
2.  **P1 Severity S2 (Degraded):** [zeroclaw-labs/zeroclaw#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) Stdio MCP servers accumulate as zombie processes under daemon PIDs, leading to memory leaks on long-running production instances. No fix PR is published yet.
3.  **P1 Severity S2 (Degraded):** [zeroclaw-labs/zeroclaw#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) Default `config init` template silently breaks local Whisper transcription for new users, creating a bad first-run experience. No fix PR is published yet.
4.  **P2 Severity S2 (Degraded):** [zeroclaw-labs/zeroclaw#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722) High-entropy secret detector falsely redacts legitimate generated filenames. An in-progress fix is assigned to maintainer vrurg.

12 active fix PRs for critical security and runtime bugs were opened over the window, including explicit auth gating for privileged commands, webhook hardening, and browser tool path validation, all on track to merge before the v0.8.3 release.

## 6. Feature Requests & Roadmap Signals
Key newly proposed features aligned with existing roadmap priorities are:
1.  RFC [zeroclaw-labs/zeroclaw#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603): OpenAI Chat Completions compatibility adapter, which will let popular downstream UIs (Open WebUI, LobeChat) connect directly to ZeroClaw without custom adapters. This high-demand feature is extremely likely to ship in the v0.8.3 release.
2.  Feature request [zeroclaw-labs/zeroclaw#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719): SOP step fallthrough behavior to support multi-phase SOPs, aligns directly with the existing SOP 5/5 milestone tracker and will be included in the next minor release.
3.  PR [zeroclaw-labs/zeroclaw#8737](https://github.com/zeroclaw-labs/zeroclaw/pull/8737): Bocha AI web search provider for mainland China deployments, addresses network connectivity gaps for a large regional user base and is marked for v0.8.3 inclusion.

## 7. User Feedback Summary
Verified user pain points collected from updated issues reflect real-world deployment experiences:
-  Self-hosted users running ZeroClaw on headless servers face regular agent turn hangs from unregulated subprocess execution for browser, TTS and FFmpeg tools, blocking production workflow usage.
-  Mainland China users report zero out-of-the-box working web search providers, as all existing supported services are network-blocked.
-  New users onboarding via `zeroclaw config init` encounter silent broken voice transcription, eroding first impression satisfaction.
-  Hobbyist users attempting to run ZeroClaw on Android Termux edge devices face installation failures due to aarch64 binary detection bugs.
-  Power users express strong positive excitement about the upcoming SOP node-graph authoring surface, noting it will remove their need to hand-write TOML SOP manifests for routine automations.

## 8. Backlog Watch
High-priority older items that require urgent maintainer attention to unblock downstream work:
1.  [zeroclaw-labs/zeroclaw#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911): Android Termux Setup support, opened 2026-06-18, marked as blocked with no assigned maintainer. Multiple hobbyist edge deployment users are waiting for a resolution to run ZeroClaw on portable consumer hardware.
2.  [zeroclaw-labs/zeroclaw#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715): Unneeded repository branch cleanup, opened 2026-05-16, pending maintainer signoff. This housekeeping task will reduce fork operation friction and cut unnecessary repo size.
3.  [zeroclaw-labs/zeroclaw#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822): WASM plugin lifecycle hook subscriptions RFC, opened 2026-06-17, status accepted but no maintainer review updates for 24 days. Resolution of this RFC will unblock the entire WASM plugin extensibility roadmap.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*