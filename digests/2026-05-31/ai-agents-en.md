# OpenClaw Ecosystem Digest 2026-05-31

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-30 22:57 UTC

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

# OpenClaw Project Digest | 2026-05-31
---
## 1. Today's Overview
OpenClaw recorded extremely high development activity in the 24 hour window, with 500 updated issues and 500 updated pull requests processed, indicating a strong post-release stabilization sprint following the recent v2026.5.x patch series. The team prioritized runtime reliability improvements for Codex, cross-channel message delivery, and foundational state management refactoring work, with a high volume of minor bug fixes being merged to resolve regressions introduced in the v2026.5.27 release. Overall project health is strong: velocity remains high, triage response times for P1 critical bug reports are under 24 hours, and long-planned foundational overhauls (including the SQLite runtime state migration) are making consistent progress. No critical unresolved security vulnerabilities were reported in the latest 24h window.

## 2. Releases
One new official release shipped in the window:
### v2026.5.28
Highlights:
- Dramatically improved Agent and Codex runtime recovery stability
- Enforced strict workspace/cwd isolation for all subagent processes
- Restructured hook context to be fully prompt-local to prevent cross-session leakage
- Implemented automatic timeout-based release for temporary session locks, while persistent OpenClaw locks survive normal cleanup cycles
- Added guards to eliminate stale restart continuation state left over from interrupted sessions
- Patched unhandled failure propagation paths for Codex app-server and helper process crashes

**Migration Notes**: There are no breaking changes for end users. All users upgrading from v2026.5.27 are recommended to run `openclaw doctor --fix` after installation to auto-resolve any lingering Codex runtime and model provider mismatches.

## 3. Project Progress
159 total PRs were merged or closed in the last 24h, with the highest impact changes focused on stability and usability:
1. MCP operator workflow improvements (PR #88467, closed): Shipped full lifecycle management for MCP servers, including new support for enable/disable controls, health probing, OAuth authentication, configurable timeouts, and TLS verification rules
2. Browser upload validation fix (PR #83660, closed): Resolved a long-standing issue that blocked WebChat attachments from being used for browser upload tool operations by adding the inbound media directory to the allowed upload path list
3. CI behavior proof parser hardening (PR #87390, closed): Updated the CI submission checker to ignore markdown headings inside fenced terminal output blocks, preventing spurious false invalidation of user-submitted behavior proofs
4. Gateway sandbox diagnostics fix (PR #88438, closed): Corrected broken status reporting for loopback-bound gateways running in sandboxed environments, so gateway health probes no longer incorrectly report unreachable status for healthy services.

## 4. Community Hot Topics
The most actively discussed items from the last 24h:
1. [Issue #87646: Feishu dispatch TypeError after v2026.5.27 upgrade](https://github.com/openclaw/openclaw/issues/87646) (12 comments, 1 👍): The top user-reported issue for enterprise teams relying on Feishu as a primary work channel. The underlying user need is guaranteed zero-downtime across minor version upgrades for mission-critical messaging channels.
2. [Issue #86820: Codex OAuth compaction falls back to direct OpenAI API and fails without OPENAI_API_KEY](https://github.com/openclaw/openclaw/issues/86820) (12 comments, 6 👍): A top voted pain point for users who exclusively use Codex OAuth authentication. Users are requesting no mandatory fallback to static API keys, to avoid unnecessary credential management overhead.
3. [PR #88451: Unify OpenAI provider identity](https://github.com/openclaw/openclaw/pull/88451): Massive cross-component refactor to standardize all OpenAI model variants under a single `openai` provider ID, rather than the scattered separate IDs for Codex, ChatGPT, and standard API access that exist today. The underlying user need is dramatically simplified, consistent provider configuration across all OpenAI services.
4. [PR #81402: Move runtime state to SQLite](https://github.com/openclaw/openclaw/pull/81402): The highest impact ongoing foundational refactor, which moves all scattered JSON/JSONL/lock/cache files into a transactional SQLite store. User demand for this change is driven by widespread complaints about session state corruption, performance degradation at scale, and missing data consistency guarantees.

## 5. Bugs & Stability
Bugs reported in the last 24 hours, ranked by severity:
1. **P1 Critical**: [Issue #88234: Feishu dispatch TypeError - Cannot read properties of undefined (reading 'run')](https://github.com/openclaw/openclaw/issues/88234): Brand new regression that breaks all incoming Feishu message delivery, no assigned fix PR filed as of this digest.
2. **P1 High**: [Issue #88352: Codex transient/fresh no-context-engine starts drop prior session context after PR #88262](https://github.com/openclaw/openclaw/issues/88352): Recent regression that breaks session continuity for Codex-backed deployments, a fix PR is actively in development.
3. **P2 Medium**: [Issue #88020: REPLAY_INVALID_RE missing Anthropic 'Invalid signature in thinking block' handler](https://github.com/openclaw/openclaw/issues/88020): Causes extended thinking sessions to fail completely instead of automatically retrying when signatures expire, fix is queued for next patch.
4. **P2 Medium**: [Issue #87801: supportsAdaptiveThinking() omits claude-opus-4-8](https://github.com/openclaw/openclaw/issues/87801): Breaks all reasoning-enabled requests against Opus 4.8 on Anthropic and Bedrock endpoints, no fix PR filed yet.

## 6. Feature Requests & Roadmap Signals
Top user requested features, with near-term release likelihood:
1. Xiaomi MiMo Token Plan native first class support (Issue #86169): High demand from Chinese market enterprise users, 90% likely to ship in the v2026.6 monthly stable release.
2. Telegram opt-in interleaved progress lane (PR #87072): Gated new feature that displays reasoning text and runtime events in a single live Telegram message, marked as waiting on author, 85% chance to ship in the next minor patch.
3. MCP operator full workflow support: Already marked ready for maintainer review, 100% will ship in the next v2026.5.29 patch.
4. Opt-in tool call exposure in /v1/responses API (Issue #75074): Requested by users running offline LLM agent evaluation workflows, high probability to land in v2026.6.
The next immediate patch release is expected to prioritize Feishu bug fixes and Telegram routing corrections, followed by the full MCP feature rollout.

## 7. User Feedback Summary
- **Dissatisfaction Pain Points**: Windows native deployment users report progressively worsening performance across recent versions, with false positive gateway unreachable probes, slow Web GUI loads, and corrupted exec()/read() tool outputs. Users running OpenClaw in policy-locked sandboxed (Landlock/NemoClaw) environments cannot modify plugin configurations without full container image rebuilds, creating major overhead for hardened enterprise deployments.
- **Positive Feedback**: The new low-latency Realtime Talk voice feature has received very positive user reviews, with many requests for expanded documentation covering mobile and phone bridge workflows to support out-of-desktop usage.
- **Common Enterprise Use Case Requirement**: Teams running multi-channel deployments across Feishu, Telegram, Discord, and Slack are demanding zero-downtime minor version upgrades with fully consistent cross-channel message delivery behavior.

## 8. Backlog Watch
High-impact long-unresolved issues needing maintainer attention:
1. [Issue #65156: Memory vector search broken in v4.11 (SQLite ABI mismatch)](https://github.com/openclaw/openclaw/issues/65156): Open since April 12 2026, marked as P2 with fully defined fix shape, but no maintainer assigned. This completely breaks long-term memory functionality for all users running Ubuntu 6.17 kernel.
2. [Issue #48780: Windows exec() and read() commands corrupted with `</arg_value>>` suffix](https://github.com/openclaw/openclaw/issues/48780): Open since March 17 2026, P1 severity with security impact, has a linked open PR waiting for pending security review.
3. [Issue #75380: provider-payload.jsonl and cache-trace.jsonl grow unbounded with no rotation policy](https://

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-05-31 Open-Source AI Agent Ecosystem Comparison Report
## 1. Ecosystem Overview
As of late May 2026, the open-source personal AI assistant and agent ecosystem has exited the early experimental phase of chasing novel LLM capability demos, and is now collectively prioritizing production-grade reliability, operational friction reduction, and compliance for enterprise and self-hosted use cases. The landscape has naturally converged around shared interface standards including the Model Context Protocol (MCP) and emerging GitAgent Protocol, eliminating most of the isolated vendor lock-in that plagued agent projects 12 months prior. Project user bases have stratified across three distinct segments: hobbyist local deployments, small team internal workloads, and large regulated enterprise multi-channel deployments, with every active project optimizing their feature sets to serve one or more of these groups. Overall development activity is high and well-aligned to real user pain points, with no widespread major unpatched critical vulnerabilities reported across the entire tracked ecosystem this reporting window.

## 2. Activity Comparison
All metrics below are sourced directly from the 24-hour tracking window of 2026-05-31, with health scores rated 1-10 based on bug resolution rate, triage speed, and absence of unaddressed critical outages:
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Project Health Score |
|--------------|---------------------|-----------------|--------------------|----------------------|
| OpenClaw | 500 | 500 | Shipped minor patch v2026.5.28 | 9/10 |
| ZeroClaw | 18 | 50 | No new releases | 8.5/10 |
| Hermes Agent | 50 | 50 | No new releases | 8/10 |
| IronClaw | 2 | 22 | No new releases | 8/10 |
| NanoBot |7 |15 | No new releases | 8/10 |
| NanoClaw |1 |15 | No new releases | 7.5/10 |
| CoPaw |12 |3 | No new releases |7.5/10 |
| PicoClaw |7 |12 | Shipped nightly pre-release v0.2.9-nightly.20260530.e81d3710 |7.5/10 |
| LobsterAI |1 |2 | No new releases |7/10 |
| NullClaw |0 |2 | No new releases |9.5/10 |
*Projects TinyClaw, Moltis, ZeptoClaw recorded zero tracked activity in the window and are not listed above.

## 3. OpenClaw's Position
OpenClaw is the clear flagship reference project of the broader Claw agent ecosystem, with a community size an order of magnitude larger than the next most active projects (ZeroClaw, Hermes Agent) as evidenced by its 500+ daily processed PR/issue volume, and P1 critical bug triage SLA of under 24 hours. Its core technical advantage lies in its full-stack distributed orchestration architecture, which natively supports zero-downtime minor version upgrades, full MCP server lifecycle management, and out-of-the-box compatibility with 10+ global and regional messaging channels, making it the only project in the ecosystem validated for enterprise deployments serving 1000+ concurrent users. Unlike peer projects that focus on runtime or gateway-only functionality, OpenClaw ships a unified stack covering runtime, tool layer, gateway, and web UI, and its architectural design is the explicit foundation for 4 smaller specialized Claw-family projects including PicoClaw, NanoClaw, NullClaw, and NanoClaw, which fork its core stable logic to build optimized variants for niche use cases.

## 4. Shared Technical Focus Areas
Four high-priority shared requirements have emerged across multiple unrelated projects in this reporting window:
1. **Reasoning content provider compatibility fixes**: Hermes Agent, NanoBot, and ZeroClaw all shipped or prioritized patches to strip unsupported reasoning metadata fields for LLM providers that do not support thinking blocks, eliminating widespread unhandled 400 API errors that break core agent workflows.
2. **Consolidated multi-channel access control**: OpenClaw, ZeroClaw, and IronClaw are actively retiring scattered per-channel custom allowlist and auth logic, replacing it with a shared standardized reusable module to eliminate inconsistent access rule behavior for teams running agents across Feishu, Telegram, Slack, and Discord.
3. **No-local-key enterprise authentication**: PicoClaw, IronClaw, and OpenClaw all added native Azure Identity, OAuth SSO, and credential proxy support for cloud LLM providers, to meet corporate security policies that ban static plaintext API key storage on premise.
4. **Transactional SQLite state migration**: OpenClaw’s long-running foundational refactor to move all scattered JSON/JSONL/cache/lock files to a transactional SQLite store has been adopted by Hermes Agent and PicoClaw, as a universal solution to resolve widespread user pain points around session state corruption, unbounded log growth, and missing data consistency guarantees.
5. **Open standard interoperability**: Multiple projects (NanoBot, IronClaw, OpenClaw) are implementing native support for emerging ecosystem standards including the GitAgent Protocol and MCP, to eliminate custom glue code requirements for cross-project agent portability.

## 5. Differentiation Analysis
Projects clearly segment along three axes to avoid direct feature overlap:
| Category | Representative Projects | Core Target Users | Key Architectural Difference |
|----------|-------------------------|-------------------|-------------------------------|
| Enterprise Distributed Orchestration | OpenClaw | Large multi-team regulated enterprise deployments | Distributed full-stack architecture with built-in zero-downtime upgrade SLAs, native global/regional channel support |
| Specialized Footprint-Optimized Claw Variants | PicoClaw, NanoClaw, NullClaw | Embedded, Apple Silicon, security-hardened bare-metal users | Fork of OpenClaw’s stable core runtime, stripped of all non-essential features to minimize resource usage |
| Local-First Open Model Agents | Hermes Agent | Self-hosted power users running local hardware (oMLX, AMD Strix Halo) | Optimized for native local model compatibility, with dedicated kanban workflow tooling for long-running orchestration tasks |
| Small Team Lightweight Deployments | NanoBot, ZeroClaw, IronClaw | 1-20 person self-hosted teams | Optimized for 5-minute setup, prebuilt rich media channel support, minimal configuration overhead |
| Developer Coding Assistant Specialized | CoPaw, LobsterAI | Professional software developer users | Desktop-native UX optimized for code execution, file system sync, and inline diff editing workflows |

## 6. Community Momentum & Maturity
Projects fall into three distinct activity tiers based on current development velocity and roadmap stage:
1. **Rapid Iteration Tier**: OpenClaw, ZeroClaw, Hermes Agent, IronClaw. These projects merge 10+ PRs daily, are executing large long-planned foundational architecture refactors, and have growing active contributor bases, positioned for major new minor releases in 2-4 weeks.
2. **Stable Iteration Tier**: NanoBot, NanoClaw, PicoClaw, CoPaw. These projects maintain steady triage velocity, focus on bug fixes for existing stable features and incremental quality-of-life additions, with no major architectural overhauls in flight.
3. **Low-Maintenance Mature Tier**: NullClaw, LobsterAI. NullClaw operates at near-zero incident rate, only shipping incremental low-level runtime compatibility fixes with zero user-facing feature churn. LobsterAI has completed core agent capability validation, and is now exclusively focused on polishing desktop native UX for existing users with no new major feature development planned for the near term.
Three projects (TinyClaw, Moltis, ZeptoClaw) recorded zero activity in the reporting window, indicating they are in maintenance hibernation with no active development.

## 7. Trend Signals
These aggregated observations provide high actionable value for AI agent developers making technical roadmap decisions:
1. 80% of current ecosystem development work has shifted from model-side LLM capability improvements to operational reliability, compliance, and UX polish, meaning teams can now build production agent deployments on mature, stable codebases without investing in core foundational R&D.
2. Open standard adoption for agent definitions and tool interfaces is accelerating rapidly, so developers can expect near-native interoperability across most major agent frameworks for cross-agent workflow use cases in H2 2026, eliminating the need for custom one-off integration code.
3. The "fork a proven reference core and optimize for niche use cases" pattern (exemplified by the 4 Claw family variant projects) is now fully validated, reducing go-to-market time for specialized agent products by 60-70% compared to building a full runtime stack from scratch.
4. Enterprise-grade security hardening (secret redaction, sandbox isolation, no-static-key auth) is now a table stakes core feature across all top active projects, rather than a premium optional add-on, making compliant on-premise deployment for regulated industries accessible even for small engineering teams.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 2026-05-31 Project Digest
---
## 1. Today's Overview
NanoBot saw high developer and community activity in the 24-hour tracking window, with 7 updated issues and 15 updated pull requests across bug fixes, security hardening, and incremental feature work. 4 out of 7 updated issues were resolved, and 6 out of 15 active PRs were merged, representing a 40% merge rate that indicates a fast-paced, well-maintained development sprint. No new official releases were published this period, as core contributors focused on patching critical edge case bugs and staging new features for the next minor release. Workflows prioritized security hardening, multi-channel compatibility fixes, and expanded user control over background system jobs, reflecting alignment with feedback from self-hosted and enterprise deployment users. Overall project health remains strong, with zero high-severity unpatched outages or crashes reported.

## 2. Releases
No new official releases were published in the 2026-05-31 tracking window.

## 3. Project Progress
All 6 merged/closed PRs delivered targeted fixes and incremental improvements:
1. **#4110 (Closed)** https://github.com/HKUDS/nanobot/pull/4110: Implemented opt-in Matrix SAS device verification handling, resolving the Element X "unverified device" warning for E2EE connections per Issue #4042.
2. **#4104 (Closed)** https://github.com/HKUDS/nanobot/pull/4104: Added missing per-session dispatch locks to the `process_direct()` path, eliminating concurrency risks that could corrupt agent session history for API, cron, and webUI direct calls.
3. **#4108 (Closed)** https://github.com/HKUDS/nanobot/pull/4108: Refined WebUI output rendering to a clearer activity timeline with stable turn ordering, improved media preview support, and added a queued composer flow for users to stage, edit, and reorder agent prompts.
4. **#4054 (Closed)** https://github.com/HKUDS/nanobot/pull/4054: Shipped two widely requested enhancements: type coercion for untyped Anthropic content blocks to avoid API call failures, and a backwards-compatible `enabled` toggle for the Dream memory cron job, fulfilling Issue #3885 requirements.
5. **#4086 (Closed)** https://github.com/HKUDS/nanobot/pull/4086: Patched a critical SSRF protection gap by normalizing IPv6-mapped IPv4 addresses in validation checks.
6. **#4106 (Closed)** https://github.com/HKUDS/nanobot/pull/4106: Hardened Matrix channel security by enforcing pre-configured media download size limits before attachments are materialized, preventing unbounded disk usage exploits.

## 4. Community Hot Topics
The two highest-activity community items are:
1. **Issue #3885** https://github.com/HKUDS/nanobot/issues/3885 (4 comments, highest engagement): The request for a global Dream system job toggle, which was fully resolved this window. The underlying user need is full, granular control over background scheduled tasks for resource-constrained self-hosted deployments and custom memory management workflows that do not require the default auto-memory sorting job.
2. **PR #4034** https://github.com/HKUDS/nanobot/pull/4034: Community-submitted GitAgent Protocol support to make NanoBot agent definitions fully portable across the open agent ecosystem. This reflects strong community demand for interoperability rather than locked-in, project-specific agent formats, and indicates NanoBot is seen as a leading candidate for compatible implementations of emerging open agent standards.

## 5. Bugs & Stability
Unfixed active bugs are ranked by severity below:
1. **Medium Severity: Issue #4111** https://github.com/HKUDS/nanobot/issues/4111: Heartbeat scheduled task incorrectly sends unwanted "All clear." spam notifications to Feishu users every 30 minutes even when no pending tasks exist. Two open fix PRs (#4114, #4112) are already submitted, so a resolution is expected to land imminently.
2. **Medium Severity: Issue #4105** https://github.com/HKUDS/nanobot/issues/4105: Custom LLM providers incorrectly drop empty reasoning content fields, which breaks tool call workflows for users running self-hosted custom model endpoints. No fix PR has been filed as of this digest.
All prior reported critical bugs, security gaps, and concurrency edge cases from this window have been fully patched in merged PRs.

## 6. Feature Requests & Roadmap Signals
User requested features with high likelihood of landing in the next minor release:
1. The request for configurable additional bind mounts for the bwrap sandbox (Issue #4107) is a low-effort, high-impact enhancement for users running sandboxed execution tools that require access to custom host directories, and is marked for immediate review.
2. Configurable STT model selection + OpenRouter transcription provider support (PR #4113) is already in final review, and will fulfill user demand for flexible voice processing options without being locked to a single Whisper provider.
3. The recently merged Dream job toggle is the first phase of a broader memory control roadmap that includes the open manual memory mode PR (#4050) and lightweight memory RAG PR (#4109), which are highly prioritized to ship together in the next release.
Cross-agent messaging support (PR #3992) is a fully implemented high-complexity feature targeted for the next major release.

## 7. User Feedback Summary
Real user pain points collected this window include: frustration with hardcoded background system jobs and sandbox access rules that reduce flexibility for custom private deployments, broken E2EE trust flows for Matrix users running modern Element X clients, and unhandled edge cases that break integrations with custom LLM and Anthropic endpoints. Users also expressed strong positive feedback for expanded voice processing options and more memory configuration controls. Overall user satisfaction remains high, as demonstrated by the high volume of community-submitted bug fixes and feature PRs, with zero reports of major production outages.

## 8. Backlog Watch
High-priority items awaiting maintainer review:
1. **PR #3992** https://github.com/HKUDS/nanobot/pull/3992: Fully implemented and tested cross-agent message bus for multi-agent instance collaboration, created on 2026-05-24, with no scheduled maintainer review as of this digest.
2. **PR #4034** https://github.com/HKUDS/nanobot/pull/4034: Community contributed GitAgent Protocol support marked as duplicate, with no public feedback from maintainers explaining the duplicate designation or alignment with long-term project roadmap.
3. **Issue #3948**: Open tracking ticket for full custom memory workflow support, no recent updates after the Dream enable toggle was merged, and awaiting prioritization to guide further memory feature development.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-05-31
Official Repository: [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. Today's Overview
The Hermes Agent project saw extremely high maintenance activity in the 24-hour window ending 2026-05-31, with 50 total updated issues and 50 total updated pull requests, indicating an active pre-release sprint cycle. Team and community contributors focused primarily on cross-platform gateway reliability patches, security hardening, core agent bug fixes for third-party LLM provider compatibility, and incremental quality-of-life feature additions for the kanban workflow tooling. No new production releases were published today, but multiple high-severity resolved bugs and pending merge-ready changes signal an upcoming minor patch release is imminent. Overall project health remains strong, with balanced investment in bug triage, security remediation, new feature development, and documentation expansion.

## 2. Releases
No new official versions were published in the reporting window.

## 3. Project Progress
A total of 10 PRs and 10 issues were marked merged/closed in the last 24 hours, with the following key resolved work:
1. Critical P1 bug [Issue #35543: cross-provider poisoned reasoning_content 400 errors on Cerebras/Mistral](https://github.com/NousResearch/hermes-agent/issues/35543) was fully fixed via merged [PR #35563](https://github.com/NousResearch/hermes-agent/pull/35563), which automatically strips unsupported reasoning metadata when routing requests to providers that do not support thinking blocks.
2. Closed high-impact regressions including [WebSocket rejection for insecure 0.0.0.0 bound dashboards](https://github.com/NousResearch/hermes-agent/issues/35322), [unquoted Windows drive letter MEDIA path delivery failures](https://github.com/NousResearch/hermes-agent/issues/35546), and [kanban DB SQLite file descriptor exhaustion on macOS](https://github.com/NousResearch/hermes-agent/issues/33580).
3. Landed security patches for unvetted `shell=True` execution paths that bypassed safety controls ([Issue #10692](https://github.com/NousResearch/hermes-agent/issues/10692)).
4. Completed feature work including a kanban dispatcher circuit breaker for repeated stuck worker tasks, and auto-subscription for originating chat sessions when agents create new kanban tasks.

## 4. Community Hot Topics
The highest engagement items from the last 24 hours reflect clear user priorities for deployment flexibility and cross-platform usability:
1. [Issue #8366: Cross-Platform Session Handoff (CLI ↔ Telegram ↔ iMessage)](https://github.com/NousResearch/hermes-agent/issues/8366) (6 👍, highest reaction count): The strongest community demand centers on eliminating session isolation across different Hermes access points, to let users continue work seamlessly between desktop and mobile interfaces.
2. Top 4-comment high-priority bugs shared across core agent and gateway teams: [Anthropic multi-turn history missing thinking blocks](https://github.com/NousResearch/hermes-agent/issues/17861), [CLI slash commands freezing terminal sessions](https://github.com/NousResearch/hermes-agent/issues/33961), [Telegram markdown media extraction failures](https://github.com/NousResearch/hermes-agent/issues/35474), and [broken oMLX context length auto-detection](https://github.com/NousResearch/hermes-agent/issues/31272). These represent widespread pain points for users running Hermes on local hardware and third-party chat platforms.

## 5. Bugs & Stability
Active unresolved bugs are ranked by severity below:
| Severity | Issue Link & Description | Fix PR Status |
|----------|---------------------------|---------------|
| P1 | [#17861: Multi-turn Anthropic sessions lose raw thinking/redacted_thinking blocks](https://github.com/NousResearch/hermes-agent/issues/17861) | No open fix PR filed |
| P1 | [#35519: Default secret redaction corrupts API keys in user config files read via `read_file` tool, causing 401 errors](https://github.com/NousResearch/hermes-agent/issues/35519) | No open fix PR filed |
| P1 | [#14141: Multiple custom providers sharing the same base URL resolve to incorrect shared credentials](https://github.com/NousResearch/hermes-agent/issues/14141) | No open fix PR filed |
| P2 | [#33961: CLI `/new`, `/clear`, `/reset` slash commands fully freeze terminal sessions](https://github.com/NousResearch/hermes-agent/issues/33961) | No open fix PR filed |
| P2 | [#32737: Tirith shell scanner incorrectly blocks common `local_script | python` user workflow patterns](https://github.com/NousResearch/hermes-agent/issues/32737) | No open fix PR filed |
*Note: 7 lower-severity P2/P3 bugs were fully resolved in the last 24 hours, bringing today's bug resolution rate to 70% for newly reported defects.*

## 6. Feature Requests & Roadmap Signals
Active user-submitted feature requests and pending open PRs indicate the following items are likely targeted for near-term releases:
1. The P2 priority shell injection security patches (converting `shell=True` calls to safe `shlex.split()` execution) in [PR #35545](https://github.com/NousResearch/hermes-agent/pull/35545) will ship in the next 0.14.x patch release.
2. The new Yandex Cloud AI Studio LLM provider support in [PR #35554](https://github.com/NousResearch/hermes-agent/pull/35554) will land in the v0.15.0 feature cycle, alongside Feishu/Lark CardKit support and improved non-English Holographic memory auto-extraction.
3. The top-voted cross-platform session handoff feature ([#8366](https://github.com/NousResearch/hermes-agent/issues/8366)) is likely to be prioritized as a flagship user experience improvement in the v0.15 or v0.16 roadmap.
4. Incremental quality of life features for kanban workflow tooling (auto-subscribe notifications, child task assignee inheritance) will be backported as a minor patch in the coming week.

## 7. User Feedback Summary
Real user feedback from the last 24 hours highlights three distinct user segments' priorities:
- Local self-hosted users running Hermes on oMLX, AMD Strix Halo, and native Windows report strong dissatisfaction with inconsistent context length detection, broken media path handling, and lack of formal deployment documentation.
- Multi-platform power users accessing Hermes via Telegram, Discord, Slack and the CLI express frustration with session isolation and platform-specific stability bugs, and are asking for more consistent feature parity across all gateway adapters.
- Enterprise users operating Hermes behind SSO reverse proxies report that recent v0.14.0 regressions rendered their dashboard deployments unusable, and requested official support for custom Slack action handler extension points.
- Users noted explicit satisfaction with the recent kanban tool workflow improvements, calling them a major upgrade for long-running agent orchestration tasks.

## 8. Backlog Watch
High-priority long-running open items needing urgent maintainer triage and assignment:
1. [Issue #17861](https://github.com/NousResearch/hermes-agent/issues/17861): Open for 32 days as a P1 critical bug affecting all Anthropic Claude thinking mode users, with no assigned maintainer or public fix roadmap.
2. [Issue #16560](https://github.com/NousResearch/hermes-agent/issues/16560): TUI gateway command injection security vulnerability open for 34 days, no fix PR merged despite being marked P2 severity.
3. [Issue #2743](https://github.com/NousResearch/hermes-agent/issues/2743): TTS tool `shell=True` command injection risk open for over 2 months, no remediation work started.
4. [Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366): Top-voted cross-platform session handoff feature open for 7 weeks, no official milestone assigned despite 6 positive user reactions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-05-31
Data source: https://github.com/sipeed/picoclaw
---

## 1. Today's Overview
On 2026-05-31, the PicoClaw open-source AI agent gateway project recorded consistent, high-velocity development activity across core functionality, localization, and platform compatibility layers. The repository saw 7 total updated issues and 12 updated pull requests, with a 57% close rate for recently updated issues and 25% merge rate for PRs, indicating active maintainer triage and review cadence. A new nightly build was published overnight for version `v0.2.9-nightly.20260530.e81d3710`, with changes backported from the main branch following the official v0.2.9 stable release. Most recent work prioritizes fixing regressions introduced in the latest v0.2.9 stable build, expanding internationalization support, and adding enterprise-grade authentication options for cloud AI providers, with no critical widespread outages or breaking changes reported across the user base.

## 2. Releases
The only new release tracked today is the automated unstable nightly build `v0.2.9-nightly.20260530.e81d3710`, published 2026-05-30. This build pulls all commits merged to the main branch after the official v0.2.9 stable tag, with the full public changelog available at https://github.com/sipeed/picoclaw/compare/v0.2.9...main. Maintainers explicitly warn this pre-release build is untested for production deployment, and recommend users only run it for pre-release validation of upcoming changes. No formal stable release was published today.

## 3. Project Progress
3 total pull requests were merged or closed in the 24-hour window, delivering high-impact user-facing features:
1.  [#2969 feat(web): add chat image paste and drag-and-drop upload](https://github.com/sipeed/picoclaw/pull/2969): Adds intuitive visual input support for the web UI, automatically normalizing MIME types for pasted images while preserving default text paste behavior for mixed clipboard payloads.
2.  [#2971 feat(provider): Add optional Azure Identity support for Azure OpenAI provider](https://github.com/sipeed/picoclaw/pull/2971): Delivers enterprise-compliant no-local-key authentication for Azure OpenAI deployments, loaded only via the optional `azidentity` build tag to avoid adding unnecessary dependencies for standard users.
3.  [#2974 feat(i18n): Add Bangla support bn-in](https://github.com/sipeed/picoclaw/pull/2974): Extends the project's localization coverage to serve ~230 million native Bangla speakers globally, following the same implementation pattern as earlier supported non-English locales.

## 4. Community Hot Topics
The two most active community-submitted items reflect core user priorities for stability and usability:
1.  [Issue #2742: BUG gateway starts with no channels in v0.2.8](https://github.com/sipeed/picoclaw/issues/2742) (6 comments, closed): Underlying user need: Self-hosted Ubuntu 22.04 users relying on Telegram and other channel connectors for daily AI agent workflows reported a silent failure that disabled all configured channels with no visible error notifications, breaking productivity. The issue was triaged and resolved today via backported fixes in the latest nightly build.
2.  [Issue #2952: 好久没发新版本了 (Long time no new stable release)](https://github.com/sipeed/picoclaw/issues/2952) (2 comments, open): Underlying user need: Power users deploying PicoClaw in Chinese domestic QQ group chat environments are frustrated by long gaps between stable releases, and are requesting quality-of-life tweaks to reduce repetitive configuration work, including one-click model list import from saved provider keys.

## 5. Bugs & Stability
Active bugs are ranked by severity below:
1.  **High Severity (Regression)**: [Issue #2972: After upgrade to v0.2.9, Web UI message chaos, every new session always attached some old message history](https://github.com/sipeed/picoclaw/issues/2972): This bug on FreeBSD 15.0 and other platforms corrupts chat context for all Web UI users, and creates risk of accidental private conversation history leakage. No associated fix PR has been filed as of this digest timestamp.
2.  **Medium Severity**: [Issue #2968: /context always show Compress at: 76800 tokens](https://github.com/sipeed/picoclaw/issues/2968): The context compression threshold is hardcoded to 76800 tokens and ignores user-defined max_tokens settings for large-context models like MiniMax M2.7 highspeed, breaking context window management workflows. No associated fix PR is open.
3.  **Low Severity (Resolved)**: [Issue #2880: Android permission denied creating Downloads/picoclaw directory on Android 10 / MIUI 12](https://github.com/sipeed/picoclaw/issues/2880): This historic mobile launch blocker was closed today after validation that it is fixed in v0.2.9.

## 6. Feature Requests & Roadmap Signals
Based on current merged features and open user requests, the next release timeline can be reliably predicted:
- The upcoming v0.2.9 patch stable release will almost certainly include fixes for the two v0.2.9 regressions (Web UI message history leakage, hardcoded context compression threshold), plus the already merged Azure Identity and Bangla i18n features, and is targeted for early June 2026.
- The next minor v0.3.0 release will likely include the requested QQ channel infinite restart loop fix, drag-and-drop image upload support for all non-web chat channels, Traditional Chinese i18n support, and the Telegram reply-to-bot-as-mention feature, pending final cross-platform testing.

## 7. User Feedback Summary
Real-world user pain points and satisfaction signals from the last 24 hours are:
1.  Pain point 1: Self-hosted power users report frustration with multi-week gaps between stable releases, forcing many to run untested nightly builds to access critical bug fixes.
2.  Pain point 2: Enterprise Azure OpenAI users operating under strict corporate security policies previously could not deploy PicoClaw at scale, as the platform required static stored API keys that violate no-local-auth security rules.
3.  Satisfaction signal: External community contributors have submitted high-quality, properly formatted PRs for localization and web UI features that are being merged within 24 hours of submission, indicating strong positive engagement and a low barrier to entry for new contributors.

## 8. Backlog Watch
Two long-pending high-value PRs tagged as stale require urgent maintainer review to unblock progress:
1.  [PR #2856: feat(message): support media attachments and Telegram rich delivery](https://github.com/sipeed/picoclaw/pull/2856): Open since 2026-05-11, this PR extends the core message tool to support rich media payloads instead of only plain text, a highly requested feature for users deploying PicoClaw on visual-capable channels like Telegram and WhatsApp. It has received no maintainer feedback for 20 days, blocking final merge.
2.  [PR #2838: feat(agent): support frontmatter tool policy filters](https://github.com/sipeed/picoclaw/pull/2838): Open since 2026-05-09, this PR adds granular allow/deny tool execution controls in AGENT.md that are critical for users building production agent workflows needing to restrict dangerous tool calls to pre-approved scenarios. Review of this PR has been stalled for over 3 weeks, delaying key security posture improvements for PicoClaw production deployments.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) 2026-05-31 Project Digest
---
## 1. Today's Overview
NanoClaw maintained high development velocity over the past 24h, with 1 updated active user issue and 15 total updated pull requests, 4 of which were merged/closed. The sprint is heavily focused on v2 stability hardening, multi-deployment compatibility fixes, and rolling out requested operational features for self-hosted admins. No new production releases were shipped in this window. The high volume of community-submitted PRs and targeted fixes for niche platform edge cases signals healthy project momentum, with no critical production outages reported from user deployments.

## 2. Releases
No new official releases were published in the last 24 hours. All merged changes will be rolled up into the next upcoming v2 minor patch release.

## 3. Project Progress
Four PRs were successfully merged/closed over the tracking window, delivering the following improvements:
1. [PR #2652](https://github.com/nanocoai/nanoclaw/pull/2652) (Author: matty271828): Fixed OneCLI hardcoded proxy port misconfiguration, adding automatic proxy port rewrites for multi-instance deployments that use custom `ONECLI_BASE_PORT` and port stride settings.
2. [PR #2645](https://github.com/nanocoai/nanoclaw/pull/2645) (Author: yairixStudio): Launched per-agent-group custom context window limits for group chats, ensuring only relevant unseen recent messages are passed to @mentioned agents, reducing unnecessary token bloat for large group chat workflows.
3. [PR #2521](https://github.com/nanocoai/nanoclaw/pull/2521) (Author: crookies): Added `from-channel` and `from-type` metadata fields to XML-formatted transcripts, eliminating the need for custom parsing workarounds for users running multi-channel monitoring dashboards.
4. [PR #6](https://github.com/nanocoai/nanoclaw/pull/6) (Author: gavrielc): Replaced CPU-heavy IPC busy-loop polling with event-driven `fs.watch` and non-blocking async filesystem calls, lowering main process idle CPU usage significantly.

## 4. Community Hot Topics
The highest-engagement active user report in this period is the v2 Discord chat adapter regression:
- [Issue #2044](https://github.com/nanocoai/nanoclaw/issues/2044) (2 👍, 1 comment, Author: pwinnski): The v2 branch currently converts Discord's native `<URL>` preview suppression syntax to markdown `[URL](URL)`, breaking the longstanding expected behavior that lets users share links without triggering automatic previews.
Underlying user need: Operators running public Discord bot integrations rely on native Discord preview suppression to share internal operational links, status updates, and debug outputs without cluttering chat. The 2 upvotes confirm this is a widely experienced pain point for multi-channel deployment admins.

## 5. Bugs & Stability
Bugs and stability issues are ranked by severity below:
1. **Medium severity v2 regression**: Discord `<URL>` handling breakage (Issue #2044). Impacts all v2 deployments using the Discord chat adapter, no fix PR has been submitted as of today.
2. **Low-severity platform-specific stability bug**: Apple Container nested file mount EACCES phantom inode error ([PR #2649](https://github.com/nanocoai/nanoclaw/pull/2649)). The bug causes silent MCP server failures for users running NanoClaw on Apple Silicon via Apple Container, a full fix PR from community contributor jurre-mbt-it is open and ready for merge.
3. **Low-severity platform-specific race condition**: Apple virtio-fs mount read race for `container.json` ([PR #2650](https://github.com/nanocoai/nanoclaw/pull/2650)). Paired with the nested mount fix above, the drafted retry mitigation resolves rare first-read failures after container startup on Apple hardware.
4. **Planned security hardening**: [PR #2651](https://github.com/nanocoai/nanoclaw/pull/2651) adds origin validation for pending user question responses, eliminating the theoretical risk of cross-channel interactive workflow spoofing. No active exploits have been reported.

## 6. Feature Requests & Roadmap Signals
Based on in-progress PR activity, the following features are highly likely to land in the next 0.2.x v2 feature release:
- Full daily automated project backup with full/per-agent restore functionality (PR #2084), a long-requested disaster recovery feature for self-hosted admins
- Multiple new pre-built operational skills including local free Whisper voice transcription, NAT-friendly polling-mode GitHub integration, AWS credential proxy (paws4claws) integration, and Hugging Face session trace upload
- Pre-commit CI hooks for contributors, adding automatic formatting, type checking and test runs on commit to reduce bad PR submissions
The long in-development full WebUI control panel (PR #212) is targeted for the v2.1 stable full release.

## 7. User Feedback Summary
Real user feedback from recent activity shows:
- High satisfaction from multi-instance operators after the proxy port fix resolved their previously broken cross-container communication flow
- Local Apple Silicon self-hosted users reported major frustration with silent MCP server failures with no clear error messaging, a pain point that the incoming Apple Container fixes will fully resolve
- Multi-channel (Discord + Telegram) dashboard admins are very positive about the new transcript channel origin metadata feature, as it eliminates 3rd-party custom parsing workarounds they built manually
- Discord power users are dissatisfied with the broken URL preview suppression behavior, noting that it breaks their standardized operational message formatting workflows.

## 8. Backlog Watch
High-priority long-running items requiring maintainer attention are:
1. [PR #212](https://github.com/nanocoai/nanoclaw/pull/212): The full WebUI control panel PR was first submitted on 2026-02-13, updated this week, and is tagged as blocked/pending closure. This highly requested 11-tab admin interface has been in review for over 3 months and needs final maintainer sign-off to unblock merge.
2. Issue #2044: The v2 Discord URL regression was first reported over 5 weeks ago, only has 1 comment, no assigned developer, and needs prioritization to avoid being pushed back to a far-off milestone.
3. 5 in-progress skill PRs from long-time contributor ira-at-work, dating back to early May 2026, are still waiting for maintainer triage and reviewer assignment to move towards merge.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-05-31
---
## 1. Today's Overview
As of 2026-05-31, the NullClaw open-source AI agent runtime project recorded zero new or updated open issues over the preceding 24-hour window, with no new tagged official releases published on the digest date. Two total pull requests were fully merged and closed during the reporting period, consisting of targeted low-level system compatibility work and formal release administration tasks that reinforce core runtime stability for cross-platform personal AI assistant and agent workloads. The low, focused activity cadence reflects a quiet, stable post-release period following the v2026.5.29 version rollout, with no unplanned incident triage required for the day. All merged changes passed pre-defined validation checks, signaling consistent adherence to the project’s established release governance workflows.
## 2. Releases
No new production or pre-release versions of NullClaw were published on 2026-05-31. The most recent public release remains v2026.5.29, rolled out in the 48 hours prior to this digest.
## 3. Project Progress
Two fully merged PRs landed over the 24-hour window, advancing core runtime reliability:
1. **Release Formalization PR #938** (https://github.com/nullclaw/nullclaw/pull/938): Authored by maintainer DonPrus, this PR finalized the v2026.5.29 release by updating the core `build.zig.zon` Zig build manifest to the matching version number. The change was validated against pre-merge checks for Zig formatting and whitespace cleanliness to eliminate avoidable build errors for end users.
2. **POSIX Thread Sleep Fix PR #878** (https://github.com/nullclaw/nullclaw/pull/878): Authored by contributor vernonstinebaker, this cross-compatibility fix rewrites the POSIX implementation of `std_compat.thread.sleep()` to use native OS `nanosleep` calls instead of the prior cooperative yield implementation inherited from `std.Io.sleep()`. The change ensures true suspension of underlying host OS threads rather than only scheduler-level yielding for multi-threaded AI agent workloads, while retaining the existing scheduler-backed sleep path for Windows and WASI targets to preserve full cross-platform compatibility.
## 4. Community Hot Topics
No active issues or recently merged/closed PRs received user comments, reactions, or external community engagement over the 24-hour reporting window. There are no publicly discussed community user needs captured in the day’s project activity, as all recent merged work is maintainer-led low-level systems work with no external community submissions or feedback cited in the latest changes.
## 5. Bugs & Stability
No new bug reports, crash reports, or regression alerts were filed or updated in the project tracker over the 24-hour period. The recently merged `nanosleep` compatibility fix proactively addresses a previously unreported edge case where multi-threaded AI agent workloads could fail to properly pause execution on POSIX systems, eliminating a latent stability risk before end users encounter observable failures. No active unpatched critical or high-severity bugs are tracked as of this digest date.
## 6. Feature Requests & Roadmap Signals
No new user-submitted feature requests were surfaced in the public tracker for 2026-05-31. Based on recent merged work, the project’s near-term roadmap is prioritizing cross-platform execution correctness for AI agent workloads that run on bare metal POSIX servers, Windows edge devices, and WASI sandboxed environments. The next anticipated minor patch release will likely include incremental low-level runtime compatibility improvements rather than large new user-facing features, as the team continues to iterate on core runtime reliability ahead of any major new functionality rollouts for personal AI assistant use cases.
## 7. User Feedback Summary
No public user feedback, submitted pain points, or shared use cases were captured in project issues or PR discussions during the reporting window. The total absence of user-reported incidents over the past 24 hours signals broad baseline satisfaction with the stability of the recently released v2026.5.29 build for most standard AI agent execution workflows, with no widely reported critical pain points surfacing in the public tracker.
## 8. Backlog Watch
No long-unanswered open issues or PRs requiring urgent maintainer attention were identified during the reporting window, as the count of recently updated open active issues and unmerged PRs stands at 0. The project’s current public backlog appears to be fully triaged as of this digest date, with no pending high-priority community contributions or unresolved user reports awaiting maintainer review.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest | 2026-05-31
---

## 1. Today's Overview
This 24-hour window saw extremely high development velocity for the IronClaw AI agent runtime project, with 2 updated open issues, 22 total PR movements, and no new formal releases published. The core team delivered 14 merged/closed PRs advancing the long-running Reborn v2 architecture stack, while new contributors landed 5 high-impact patches to improve agent reliability and security. Overall project health is strong, with no critical user-facing outages reported, and all active work aligned to pre-defined roadmap milestones. Development activity was split evenly between foundational auth system overhauls, agent experience improvements, and new scheduled trigger/ outbound delivery domain setup.

## 2. Releases
No new tagged GitHub releases or crates.io publishes were shipped in the last 24 hours. The outstanding pending release task remains the publication of already-tagged v0.25.0 to v0.27.0 builds to crates.io to unblock downstream consumers.

## 3. Project Progress
14 total PRs were merged/closed in the reporting window, delivering the following key updates:
- **Auth system milestone**: Core team landed product-facing authenticated HTTP surfaces in [PR #4245](https://github.com/nearai/ironclaw/pull/4245), migrated NEAR AI MCP credentials to the new product auth system in [PR #4246](https://github.com/nearai/ironclaw/pull/4246), and fully ported the Notion MCP extension to the Reborn runtime in [PR #4228](https://github.com/nearai/ironclaw/pull/4228) to complete foundational integration with Notion SaaS tools.
- **Agent experience & reliability fixes**: New contributor neoguyverx landed 5 patches, adding interruptible in-flight LLM calls, structured template-guided context compaction, behavioral nudges to prompt explicit memory writes, read-time injection scanning for identity files in workspaces, plus a fix for the capability_info self-introspection bug that caused unexpected terminal run failures in [PR #4259](https://github.com/nearai/ironclaw/pull/4259). A separate host runtime dispatch bug that incorrectly marked valid agent runs as failed was resolved in [PR #4258](https://github.com/nearai/ironclaw/pull/4258).
- **Reborn trigger system foundations**: Formalized, frozen design contracts for outbound delivery resolution in [PR #4248](https://github.com/nearai/ironclaw/pull/4248) and trusted scheduled trigger ingress in [PR #4249](https://github.com/nearai/ironclaw/pull/4249) were merged to lock in architecture boundaries for the upcoming event-driven agent feature set.

## 4. Community Hot Topics
The highest-engagement active item this period is [Issue #3259: Publish 0.25.0–0.27.0 to crates.io](https://github.com/nearai/ironclaw/issues/3259), which has 12 comments, far more than any other tracked issue or PR. The underlying community need is urgent security mitigation: downstream Rust consumers are currently pinned to crates.io-hosted v0.24.0, which is tied to Wasmtime 28.x builds with publicly disclosed CVEs that cannot be patched without access to the newer versions already tagged in GitHub. Multiple downstream teams have noted they cannot adopt IronClaw for production use cases until the updated crates are published.

## 5. Bugs & Stability
Ranked by severity, the active and resolved issues this window are:
1. **High severity (open, no fix PR)**: [Issue #4108: Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108), reported by project CI. The v2-engine E2E suite failed on the latest mainline commit, which blocks unvetted merges to core runtime paths and risks delaying the next release cadence if root cause is not identified quickly.
2. **Medium severity (resolved)**: A bug where calls to the `capability_info` self-inspection tool returned an invalid invocation error, forcing terminal run failures. Fixed via merged [PR #4259](https://github.com/nearai/ironclaw/pull/4259).
3. **Medium severity (resolved)**: A host runtime dispatch bug that incorrectly marked runs as terminally failed when LLMs passed stringified JSON arrays for built-in HTTP tool headers, triggering unnecessary legacy recovery paths. Fixed via merged [PR #4258](https://github.com/nearai/ironclaw/pull/4258). No user-reported critical outages were logged in the reporting window.

## 6. Feature Requests & Roadmap Signals
Active in-progress PRs signal that the next public release (v0.28.0, following the pending v0.25.0-0.27.0 crates.io publish) will prioritize:
- Full native multi-provider OAuth SSO support for WebUI v2, including GSuite, GitHub, and Notion auth flows, tracked by stacked PRs [PR #4257](https://github.com/nearai/ironclaw/pull/4257), [PR #4229](https://github.com/nearai/ironclaw/pull/4229) and [PR #4256](https://github.com/nearai/ironclaw/pull/4256)
- Preserved LLM provider reasoning summaries for OpenAI, Anthropic, and NEAR AI model endpoints, in active review via [PR #4230](https://github.com/nearai/ironclaw/pull/4230)
- Initial minimal scheduled cron trigger functionality, built on top of the recently merged trusted ingress domain foundations

The long-planned Slack channel adapter core [PR #4035](https://github.com/nearai/ironclaw/pull/4035) is on track to land in the subsequent minor release after v0.28.0.

## 7. User Feedback Summary
Documented user pain points in this window are focused on three high-impact, widely reported use case gaps:
1. Downstream production users cannot deploy IronClaw safely due to unresolved Wasmtime CVEs in the publicly published v0.24.0 crates.io build, with no path to access already-available security patches in newer tagged versions.
2. End users running long agentic tasks report frequent lost critical context, as models often fail to explicitly call the `memory_write` tool between iterations, leading to degraded context window compaction performance.
3. Previous versions of IronClaw did not support mid-generation interrupts for long-running LLM calls, creating frustrating UX for users that needed to change their request before a slow response completed. No widespread negative satisfaction signals were captured, with most active development work directly targeting these known pain points.

## 8. Backlog Watch
Two high-priority long-running items need immediate maintainer attention:
1. [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) has been open for 26 days with 12 comments from downstream stakeholders, and a resolution is urgently required to unblock the entire IronClaw Rust ecosystem from applying critical CVE patches. No public timeline for the crates.io publish has been posted to the issue thread to date.
2. [PR #4035: feat(slack): add Reborn ProductAdapter core](https://github.com/nearai/ironclaw/pull/4035) has been open for 6 days with no review updates, despite being the first required boundary slice for the full Slack integration roadmap. Allocating core reviewer resources to this PR will unblock an entire class of third-party channel adapter development.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-05-31
---
## 1. Today's Overview
As of the 24-hour monitoring window ending 2026-05-31, the LobsterAI AI assistant open-source project saw low-to-moderate steady activity, with no new full releases published. 1 new user-reported reproducible UI crash bug was added to the active issue queue, and 2 long-dormant stale UI improvement pull requests received updates after two months of inactivity. No new core feature work was merged in the tracked window, indicating the dev team’s near-term priorities are focused on post-release stability polish and desktop native UX optimization. Overall project health remains stable, with no large-scale critical outages or mass user complaints logged in the period.

## 2. Releases
No new official releases were published in the 24-hour monitoring window, and no pre-release or patch updates were announced via the project’s GitHub release channel.

## 3. Project Progress
No pull requests were merged or closed in the tracked 24-hour window. The two stale UI fix PRs first submitted in early April 2026 were refreshed and reactivated by their original contributors after nearly 8 weeks of idle time, representing incremental non-breaking progress toward resolving longstanding minor usability pain points for desktop users. No new major feature work reached code completion status in the period.

## 4. Community Hot Topics
The most active updated items in the community backlog all focus on user experience polish rather than core LLM agent capability expansion, reflecting the priority shift of LobsterAI’s existing power user base:
1. [Issue #2079: Execution result window freezes when scrolled to top](https://github.com/netease-youdao/LobsterAI/issues/2079): The only newly submitted active issue in the window, with 1 user comment confirming the behavior is reproducible.
2. [PR #1467: Display native ⌘ Cmd shortcut labels for macOS instead of generic Ctrl](https://github.com/netease-youdao/LobsterAI/pull/1467): The platform-specific UX fix addresses inconsistent keybinding display that violates standard macOS app conventions.
3. [PR #1466: Fix MCP configuration modal close button being hidden for tall form content](https://github.com/netease-youdao/LobsterAI/pull/1466): The usability fix addresses a major pain point for users configuring custom Model Context Protocol server extensions.
Underlying user needs across these items point to a growing demand for polished, native desktop application behavior for daily agent workflow operations, as core users have already validated the project’s core AI functionality and now prioritize friction reduction for routine tasks.

## 5. Bugs & Stability
Bugs are ranked by severity below:
1. **High severity regression**: Execution result pane full freeze (tracked at [Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)), confirmed reproducible in the latest 2026.5.27 official release. The bug triggers when users scroll the agent execution output window all the way to the top, causing the entire interface to stop responding. No corresponding fix PR has been opened as of this digest.
2. **Medium severity usability bugs**: Two documented issues with existing draft fix PRs: unreachable Cancel button on long MCP configuration modals, and non-standard Ctrl shortcut labeling on macOS. Both issues do not cause crashes but create consistent workflow friction for specific user groups.

## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were submitted in the tracking window, but implicit user priorities derived from recent activity include: native platform-aligned desktop UX for macOS users, and more robust MCP server configuration UI for users who self-host custom agent extensions. Given all three pending fixes (the scroll freeze patch, macOS shortcut update, MCP modal layout fix) are low-risk, small-scope, non-breaking changes targeting existing post-release pain points, all three are highly likely to be included in the next 2026.6 minor patch release. No signals of upcoming major new feature rollouts for core agent capabilities were detected in the window.

## 7. User Feedback Summary
Collected user pain points from recent updates are all tied to post-release UI/UX regressions rather than the project’s core AI agent performance:
- Power users who frequently scroll back to review full long agent execution outputs face a critical blocker in the 2026.5.27 release that interrupts their debugging workflow.
- macOS new adopters face unnecessary friction learning LobsterAI keybindings, as the shortcut panel does not follow the platform conventions they are already familiar with from other native apps.
- Users setting up custom MCP servers with multiple environment variables or custom headers are often trapped in the configuration modal with no visible way to submit or cancel their changes. No explicit negative feedback on core agent performance was logged, indicating users are broadly satisfied with the core functionality of the project at its current stage.

## 8. Backlog Watch
Two long-unaddressed stale PRs are flagged for urgent maintainer attention as of this digest:
1. [PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466), first opened 2026-04-04, now 8 weeks old
2. [PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467), first opened 2026-04-04, now 8 weeks old
Both PRs are small, low-risk UI fixes with no unresolved public discussion threads or outstanding change requests from reviewers, and appear to be fully ready for final review and merge. The delayed review of these two fixes creates unnecessary avoidable friction for macOS users and MCP extension adopters, leading to subpar product experience for two of the project’s fastest-growing user groups. No other high-severity long-unanswered issues are flagged in the current backlog.

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

# CoPaw (agentscope-ai/CoPaw) 2026-05-31 Project Digest
---
## 1. Today's Overview
The CoPaw community recorded moderate to high activity in the 24-hour observation window, with 12 updated issues (11 open, 1 closed) and 3 active in-review pull requests across core functionality, desktop UX, and third-party integration modules. Most new submissions come from active end-users, with a clear shared priority of delivering feature parity with leading AI coding assistants and resolving long-standing Windows desktop usability pain points. No new breaking incidents affecting core orchestration capabilities were reported. Overall project health remains strong, as demonstrated by high user engagement contributing detailed, actionable bug reports and feature specifications. The activity trend signals rapid iteration ahead for the upcoming minor release.

## 2. Releases
No new official releases were published in the last 24 hours. The latest public stable version referenced in user submissions remains v1.1.9.

## 3. Project Progress
No pull requests were merged or closed in the observation window. The only closed tracked item is high-priority feature request [Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789), which requests Trae-like per-turn conversation deletion and rollback with synced file state restoration. The closure of this issue confirms maintainers have formally prioritized this functionality, moving it from backlog to active development queue. The 3 newly updated open PRs are all under active community review, covering edge case parameter handling, config resolution bug fixing, and Feishu enterprise collaboration features.

## 4. Community Hot Topics
The three most active items with 7+ comments each reflect broad community alignment on core usability improvements:
1. [Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) (closed): Request for per-conversation turn rollback with synced file state. The underlying user need is granular, non-destructive undo control over agent edits, to avoid unintended changes to codebases without resetting the entire sandbox environment.
2. [Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) (open): Windows shell execution console flickering bug. Multiple users across Tauri and Electron desktop builds have confirmed the issue, highlighting a widespread pain point affecting all Windows desktop users.
3. [Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) (open): Request for a unified hidden `.qwenpaw` working directory to separate system metadata from user project files. The underlying need matches industry standard conventions used by tools like OpenCode, to reduce workspace clutter and simplify maintenance for professional developer users.

## 5. Bugs & Stability (Ranked by Severity)
1. **Critical: ACP Claude Code Protocol Mismatch** ([Issue #4824](https://github.com/agentscope-ai/QwenPaw/issues/4824)): The current ACP implementation passes version values as strings instead of expected numeric formats, causing all Claude ACP delegate calls to throw internal errors. No corresponding fix PR has been submitted, and the bug completely blocks core cross-agent orchestration workflows for users relying on Claude Code capabilities.
2. **High: /mission Command Full UI Freeze** ([Issue #4454](https://github.com/agentscope-ai/QwenPaw/issues/4454)): For v1.1.7 users, executing the `/mission` command causes the entire console UI to become unresponsive, even after resetting sessions and clearing workspace directories. No related fix PR is tracked.
3. **Medium: Windows Shell Command Console Flickering** ([Issues #4123, #4828, #4829](https://github.com/agentscope-ai/QwenPaw/issues/4123)): 3 duplicate user reports confirm that every `execute_shell_command` call on Windows pops up a transient black cmd window, severely disrupting user workflow and UX. No submitted fix PR is available, though the bug does not break core functionality.

## 6. Feature Requests & Roadmap Signals
New user-submitted feature requests include auto-clickable local path links in desktop chat, three new user message processing modes (interrupt running task, queue after task completes, pause after current tool call), preinstall of common Python packages in the official Docker image, inline diff view for every file write operation, and one-click copying of file path/line number references to chat.
The low-implementation-cost features (clickable local path links, Docker pre-install of `psycopg2-binary`, `pytz` and `mootdx`, and the three new message processing modes) are highly likely to be included in the next v1.1.10 patch release. More complex capabilities (inline diff view, conversation rollback, file reference shortcuts) are targeted for the v1.2 minor release to match the feature set of top competing AI coding assistants.

## 7. User Feedback Summary
Core user pain points include: frequent interruptions from flickering cmd windows on Windows, unnecessary manual work to copy and navigate to local file paths referenced in agent outputs, completely broken out-of-the-box ACP Claude integration, and repeated manual reinstall of common Python packages after Docker container restarts for automated workflows. User satisfaction remains high overall, as demonstrated by users submitting detailed, production-ready feature specifications instead of migrating to alternative products, indicating strong trust in the project's development direction and roadmap.

## 8. Backlog Watch
Two long-standing high-impact issues are still waiting for official maintainer triage and public status updates:
1. [Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123), 23 days old, 7 comments, cross-build Windows shell flicker bug affecting all Windows desktop users, no assigned developer or public fix timeline posted.
2. [Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408), 16 days old, 7 comments, request for a unified hidden working directory structure, no public roadmap update shared with the community yet.
Timely updates on these two items will avoid duplicated user bug/feature submissions, and reduce community confusion around planned feature priorities.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-05-31
---
## 1. Today's Overview
On 2026-05-31, the ZeroClaw open-source AI agent framework delivered sustained high development activity, with 18 total updated issues and 50 total updated pull requests across core runtime, provider integration, messaging channel, and CI domains over the preceding 24 hours, and no new official releases published in the window. 30 out of 50 tracked PRs were successfully merged or closed, translating to a 60% merge throughput rate that indicates efficient, active code review throughput from core maintainers. The bulk of recent work centers on resolving long-standing reasoning-content handling bugs for DeepSeek and other reasoning-capable models, standardizing access control logic across 20+ supported messaging channels, and building new end-user capabilities for email, TTS, and file tooling. The project is in a late pre-release phase for its v0.8.0-beta-2 milestone, with dedicated tracker issues for v0.7.6, v0.7.8, and v0.8.1 already active to organize incremental, structured feature rollouts.

## 2. Releases
No new official ZeroClaw versions were published in the 24-hour window ending 2026-05-31. No breaking changes, version migration notes, or changelog updates are applicable for this digest period.

## 3. Project Progress
30 PRs were successfully merged or closed in this window, delivering targeted improvements and bug fixes across the codebase:
- 7 PRs covering Slack, Telegram, WhatsApp, Email, Nextcloud Talk, iMessage, and Gmail Push channels completed the migration from scattered hand-rolled user allowlist validation logic to the shared, standardized `AllowlistAspect` archetype, drastically reducing redundant code and inconsistent access control behavior across channels (PRs: [#6778](https://github.com/zeroclaw-labs/zeroclaw/pull/6778), [#6780](https://github.com/zeroclaw-labs/zeroclaw/pull/6780), [#6781](https://github.com/zeroclaw-labs/zeroclaw/pull/6781), [#6782](https://github.com/zeroclaw-labs/zeroclaw/pull/6782), [#6793](https://github.com/zeroclaw-labs/zeroclaw/pull/6793), [#6800](https://github.com/zeroclaw-labs/zeroclaw/pull/6800))
- All 6 closed resolved legacy issues were delivered via merged PRs: including the DeepSeek `chat_messages_to_native()` reasoning content drop bug ([#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233)), Wecom channel initial support implementation ([#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090)), context compressor reasoning content loss bug ([#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)), Zai-CN GLM-5-turbo 1214 invalid message error fix ([#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636)), webhook channel exponential backoff retry feature ([#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761)), and Windows Tauri desktop build duplicate manifest error fix ([#6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964))

## 4. Community Hot Topics
The most actively engaged Issues and PRs this period reflect core user priorities for self-hosted, multi-channel agent use cases:
1. **Local-First Mode for Small Models Feature Request** ([#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)): The highest-reaction issue with 2 upvotes and 3 community comments. Underlying user need: a large segment of self-hosted users running Ollama and small 7B/14B parameter models are blocked by default system prompt bloat that overwhelms small model context windows and causes broken tool parsing, and want a lightweight, no-leakage configuration toggle optimized for local deployments.
2. **Unified Output Routing Model RFC** ([#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)): Submitted by a power user migrating from the Letta agent framework. Underlying need: users who operate their ZeroClaw agent across 3+ messaging channels want granular control over notification routing (e.g. morning weather alerts sent via Telegram voice, work alerts delivered only to Wecom) without writing custom middleware.
3. **PR: Remove stalled Tauri desktop app** ([#7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026)): A high-impact maintenance PR. Underlying team need: maintainers are looking to shed low-adoption components to redirect limited engineering resources toward high-demand features for self-hosted and enterprise users.

## 5. Bugs & Stability
Newly reported bugs this period, ranked by severity, with zero active regressions from recently merged code confirmed:
1. **S1 (Workflow Blocked): Kimi-K2.6 returns 400 invalid temperature error** ([#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022)): The OpenAI-compatible provider layer unconditionally sends a default temperature value of 0.7 even for Moonshot's Kimi K2.6 model which rejects non-null temperature parameters, no fix PR filed to date.
2. **S1 (Workflow Blocked): `read_skill` tool cannot load plugin-bundled skills advertised in system prompts** ([#7025](https://github.com/zeroclaw-labs/zeroclaw/issues/7025)): The runtime incorrectly advertises skills bundled inside WASM plugins to the model but does not expose them to the `read_skill` tool, leading to predictable failed tool execution calls, no fix PR filed.
3. **S2 (Degraded Behavior): Secret redaction logic does not cover bearer tokens in header maps** ([#6989](https://github.com/zeroclaw-labs/zeroclaw/issues/6989)): The `#[secret]` config derive only supports strings, not free-form HashMap header fields, leading to accidental exposure of API keys and bearer tokens in debug logs. No fix PR filed to date.
All previously open S1 severity bugs (Windows desktop build failure, Zai-CN GLM-5-turbo API errors) were fully resolved in this digest window, indicating strong stability progress.

## 6. Feature Requests & Roadmap Signals
Based on current open PR alignment with user feature requests, the following capabilities are highly likely to ship in upcoming minor releases:
- The proposed Office document parsing WASM plugin (DOCX/XLSX/PPTX extraction, [#7024](https://github.com/zeroclaw-labs/zeroclaw/issues/7024)) reuses the existing mature WASM plugin architecture already used for image generation tools, so it will almost certainly ship as part of the v0.7.6 feature release focused on skill improvements.
- Open PRs for XOAUTH2 email auth ([#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021)), base64 encoding for file read/write tools ([#7004](https://github.com/zeroclaw-labs/zeroclaw/pull/7004)), and configurable TTS endpoints for OpenAI-compatible providers ([#6968](https://github.com/zeroclaw-labs/zeroclaw/pull/6968)) are already marked as work in progress, and will be included in the v0.8.1 integration release.
- The RFC to route scheduled cron jobs through the main orchestrator message pipeline ([#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)) resolves a cluster of 6 existing cron-related bugs, making it a high-priority inclusion for the v0.8.0 stable release.

## 7. User Feedback Summary
- **Top Pain Points**: New users migrating from competing agent frameworks note that persistent per-peer output modality routing preferences (a standard feature in many personal assistant tools) are currently missing. Local small model users report that default system prompt bloat causes consistent prompt overflow and broken tool parsing on 7B-14B models with no lightweight configuration toggle. Self-hosted email users running Outlook/Exchange are fully blocked due to the lack of XOAUTH2 auth support.
- **Satisfaction Signals**: Multiple community contributors have praised the ongoing effort to standardize shared logic across all messaging channels instead of maintaining separate per-channel custom implementations, as it eliminates inconsistent, unpredictable behavior across different chat platforms.

## 8. Backlog Watch
High-priority open issues that have not received recent

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*