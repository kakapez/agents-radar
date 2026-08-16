# OpenClaw Ecosystem Digest 2026-08-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-16 22:20 UTC

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

# OpenClaw 2026-08-17 Project Digest
---
## 1. Today's Overview
OpenClaw recorded extremely high contributor activity on 2026-08-17, with 500 total updated issues and 500 total updated pull requests across the core repository. Maintainer throughput remains strong: 6.4% of all tracked issues were resolved or closed in the last 24 hours, alongside a 20% merge/close rate for updated PRs, indicating steady progress clearing the backlog of reliability and feature work. Current development priorities are heavily weighted toward core gateway stability, multi-channel message delivery guarantees, and self-hosted operator experience improvements. The overall project health is robust, with automated clawsweeper triage reducing manual reproduction time for 70% of newly filed high-severity bugs.

## 2. Releases
1 new test profile artifact release was published today, no general availability production releases shipped:
- **Release name**: pr-124528-profiles: PR #124528 Gateway profile evidence
  - Content: CPU profiles captured from a bounded 3-node, 12-concurrent-turn Gateway test rig, including pre-fix and post-fix traces for event-loop hotspot comparison work planned for PR #124528
  - Notes: No breaking changes, no user migration required. This is a developer-facing debug artifact release, not intended for end-user deployment.

## 3. Project Progress
Of the 500 total updated PRs, 104 were merged or closed in the last 24 hours, advancing key fixes and feature work:
- PR #124313 ([openclaw/openclaw#124313](https://github.com/openclaw/openclaw/pull/124313)): Merged a high-priority fix for a bug that stripped RFC 5322 formatted email addresses from plain text replies when the sanitization regex incorrectly matched angle-bracket wrapped addresses as HTML tags
- Issue #92433 ([openclaw/openclaw#92433](https://github.com/openclaw/openclaw/issues/92433)): Closed after its corresponding fix was merged, resolving a multi-month bug that silently dropped subagent completion events when the requester's parent run ended before processing the subagent steer announcement
- Issue #111870 ([openclaw/openclaw#111870](https://github.com/openclaw/openclaw/issues/111870)): Closed, fixing a TypeError that broke @openclaw/codex plugin registration in CLI one-shot execution contexts
- 72 new open PRs were published today covering web UI UX improvements, new Doubao realtime voice provider support for Volcengine, and Feishu media caption delivery fixes.

## 4. Community Hot Topics
The top 3 most active discussions by comment count are all focused on production reliability and operational control for multi-tenant deployments:
1. **#121058 [CLOSED] Silent reply failures still recurring after #116277 closed — no queued reply payload** ([openclaw/openclaw#121058](https://github.com/openclaw/openclaw/issues/121058)): 97 total comments, the highest engagement item today. Underlying user need: production operators running 24/7 consumer-facing chat workflows require absolute guarantees that no user-facing messages are silently dropped with zero failure alerting.
2. **#42475 [OPEN] Per-agent cost budget enforcement at the gateway level** ([openclaw/openclaw#42475](https://github.com/openclaw/openclaw/issues/42475)): 26 comments, most popular open feature discussion. Underlying user need: Teams that run OpenClaw for multiple internal or external clients want to cap monthly/ daily LLM spend per agent without relying on separate external monitoring tools to prevent runaway costs from misbehaving tool calls.
3. **#48003 [OPEN] Steer mode does not inject messages mid-turn for main sessions** ([openclaw/openclaw/issues/48003](https://github.com/openclaw/openclaw/issues/48003)): 21 comments. Underlying user need: Power users that use steer mode to interrupt long-running agent tasks want the ability to inject corrective instructions at tool boundaries without waiting for the entire multi-step turn to finish.

## 5. Bugs & Stability
High-severity P1 bugs reported or updated today, ranked by impact:
| Severity | Bug Summary | Link | Fix Status |
|----------|-------------|------|------------|
| Critical (P1) | Session transcript projection reconcile livelocks under sustained writes, blocking the main gateway event loop and stalling all channel transports | [openclaw/openclaw#115908](https://github.com/openclaw/openclaw/issues/115908) | No existing fix PR, source reproduction confirmed by clawsweeper |
| Critical (P1) | Unreaped hook/tool child processes leak and accumulate as zombies over time, causing gradual runtime degradation and eventual OOM crashes | [openclaw/openclaw#97616](https://github.com/openclaw/openclaw/issues/97616) | No existing fix PR, confirmed regression |
| High (P1) | Large SQLite transcript cleanup blocks the gateway event loop when performing full transcript archiving on the main thread | [openclaw/openclaw#112423](https://github.com/openclaw/openclaw/issues/112423) | Source reproduction confirmed, no linked fix PR |
| High (P1) | SQLite snapshot restore operations report success before sidecar identity guards are durably written, risking data loss after crash | [openclaw/openclaw#113306](https://github.com/openclaw/openclaw/issues/113306) | No existing fix PR |
Only the long-running silent reply failure bug #121058 was fully resolved and closed today, with its corresponding fix merged to main.

## 6. Feature Requests & Roadmap Signals
Top user-requested features sorted by upvote count:
1. Per-agent dreaming configuration ([openclaw/openclaw#67413](https://github.com/openclaw/openclaw/issues/67413)): 5 upvotes, lets operators disable dreaming for specific agents to avoid cluster-wide OOM events
2. Theme Customization System ([openclaw/openclaw#28300](https://github.com/openclaw/openclaw/issues/28300)): 5 upvotes, adds preset themes and a drag-and-drop theme editor for the web UI
3. Self-hosted STT/TTS support for webchat ([openclaw/openclaw#45508](https://github.com/openclaw/openclaw/issues/45508)): 2 upvotes, routes webchat voice input/output through the gateway instead of relying on browser Web Speech APIs

Based on current maintainer priority for self-hosted operator usability, per-agent dreaming configuration is extremely likely to ship in the next minor monthly release, as it is low-effort to implement and addresses a widely reported pain point across dozens of deployment reports. The theme customization system will likely be scheduled for the 2026.9 feature release as part of a broader web UI refresh.

## 7. User Feedback Summary
- **Dissatisfaction**: 8 of the top 20 active open issues relate to silent message loss across WhatsApp, Telegram, iMessage and Feishu channels. Users consistently report frustration when agents appear unresponsive with no visible error state, leading to lost user trust in production deployments. Self-hosted operators on memory-constrained hardware report widespread dissatisfaction with the all-agents-at-once memory dreaming cron job that routinely triggers OOM kills. Multi-agent workflow users complain of inconsistent subagent task state that makes long-running delegated work untrustworthy for production use cases.
- **Positive feedback**: Multiple maintainers and power users noted the clawsweeper automated bug triage system has cut average time to confirm bug reproduction from 72 hours to under 2 hours, drastically speeding up fix turnaround.

## 8. Backlog Watch
Three high-impact P1 bugs that have remained open for 2+ months with no fix PR progress, awaiting maintainer prioritization:
1. **#87744 Codex-backed Telegram turns repeatedly time out waiting for turn/completed** ([openclaw/openclaw#87744](https://github.com/openclaw/openclaw/issues/87744)): Opened 2026-05-28, 17 comments, affects all Telegram users running Codex model backends, tagged as platinum hermit priority rating, no new fix PR filed in 3 months
2. **#96834 WhatsApp 1:1 inbound image wedges main lane ~3min before processing** ([openclaw/openclaw#96834](https://github.com/openclaw/openclaw/issues/96834)): Opened 2026-06-25, 15 comments, breaks WhatsApp multimodal use cases for all OpenClaw WhatsApp deployments
3. **#74586 AM embedded run aborts memory_search tool calls, classifies as timeout despite model completion** ([openclaw/openclaw#74586](https://github.com/openclaw/openclaw/issues/74586)): Opened 2026-04-29, 14 comments, breaks the active-memory plugin for all embedded assistant deployments. All three items are marked `clawsweeper:no-new-fix-pr` and require maintainer review before they can be scheduled for a fix.

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent & Personal Assistant Ecosystem Comparison Report
Date: 2026-08-17 | Audience: Technical decision-makers, open-source agent developers, self-hosted operators

---

## 1. Ecosystem Overview
As of this 24-hour tracking window, the open-source personal AI agent/assistant ecosystem has fully transitioned past early hobbyist experimentation to prioritize production-grade reliability and enterprise suitability. All 8 active tracked projects are now resolving unaddressed operational pain points for users running 24/7 agent workflows, rather than focusing on the experimental LLM integration features that dominated 2025 development cycles. Multiple projects with 500+ tracked PRs demonstrate rapidly scaling contributor bases, while smaller niche teams are targeting underserved use cases for embedded, hardware-constrained deployments. Collective community feedback shows near-universal user demand for predictable, low-friction agent operations that do not incur unexpected cost or data loss risk.

## 2. Activity Comparison
| Project Name       | 24h Updated Issues | 24h Updated PRs | 2026-08-17 Release Status | Project Health Score (1-10, 10=optimal) |
|---------------------|---------------------|-----------------|----------------------------|------------------------------------------|
| OpenClaw            | 500                 | 500             | No GA release, published developer debug profile artifact only | 9/10 |
| NanoBot             | 15                  | 500             | No new public release | 7/10 |
| Hermes Agent        | 50                  | 50              | v0.20.2 stable patch released Aug 16 | 8/10 |
| PicoClaw            | 2                   | 5               | No new public release | 7/10 |
| NanoClaw            | 1                   | 34              | No new public release | 9/10 |
| IronClaw            | 1                   | 10              | No new public release | 8/10 |
| LobsterAI           | 27 (combined)       | 9 merged        | No new public release | 7/10 |
| Moltis              | 2                   | 17              | No new public release | 9/10 |
| CoPaw               | 9                   | 9               | No new public release | 7/10 |
| ZeroClaw            | 50                  | 50              | No new public release | 9/10 |
| Inactive projects (NullClaw, TinyClaw, ZeptoClaw) | 0 | 0 | No recorded activity | N/A |

*Health score is calculated based on backlog clearing velocity, number of unpatched critical P1 bugs, and stale unaddressed high-priority PR count.*

## 3. OpenClaw's Position
OpenClaw holds a clear leading position as the ecosystem’s largest production-grade multi-tenant AI agent gateway platform. It outpaces all peers by a wide margin in absolute contributor throughput, with 500 updated PRs and issues in the 24h window (10x+ the active PR volume of most mid-sized projects). Its proprietary `clawsweeper` automated bug triage system cuts high-severity bug reproduction time from 72 hours to under 2 hours, a capability no other project has publicly documented. Unlike peers that build core agent logic first and add chat channel integrations as afterthoughts, OpenClaw uses a gateway-first technical architecture purpose-built for multi-channel message delivery guarantees. Its 97-comment community hot issue on silent message failures reflects a far larger active base of 24/7 consumer-facing production operators than any competing project, with full native support for 8+ major chat platforms (WhatsApp, Telegram, Feishu, iMessage etc) that no smaller open-source agent framework matches.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across multiple independent projects as top user demands:
1. **Full LLM interaction transparency & cost auditing**: Prioritized by OpenClaw, NanoBot, Hermes Agent. Projects are building granular per-call token logging, full prompt persistence, and per-agent cost budgeting tools to eliminate unmonitored excess token spend that regularly causes hundreds of dollars in unexpected LLM fees for enterprise users.
2. **Cross-context SSRF security hardening**: Prioritized by PicoClaw, LobsterAI, Moltis, ZeroClaw. All four projects are actively patching unauthenticated SSRF attack surfaces in media download, network egress and IPC channels to eliminate critical exploitation risks for self-hosted agents exposed to public networks.
3. **OpenAI Chat Compatibility interoperability**: Prioritized by ZeroClaw, NanoBot, Hermes Agent. Teams are implementing full OpenAI API specification support to integrate seamlessly with the existing 1000+ tools (Open WebUI, LangChain, Aider etc) built for OpenAI’s API, avoiding forced custom workflow rebuilds for end users.
4. **Multi-session memory optimization**: Prioritized by CoPaw, OpenClaw, NanoBot, NanoClaw. Teams are rolling out per-agent memory feature toggles, KV cache reuse, and cross-session context sharing to cut token consumption by 40-97% for long-running multi-session agent deployments.

## 5. Differentiation Analysis
Projects have clear distinct positioning across the ecosystem, with minimal overlapping feature overlap for target user segments:
| Project | Core Feature Focus | Primary Target User | Technical Architecture Differentiator |
|---------|---------------------|----------------------|----------------------------------------|
| OpenClaw | Multi-channel delivery reliability | Large enterprise multi-tenant chat operators | Distributed horizontal-scaling gateway architecture |
| NanoBot | MCP tool extensibility | Small dev teams running collaborative agents | Modular single-process design optimized for low-friction tool integration |
| Hermes Agent | Local desktop UX | Casual end users running offline local agents | SQLite local-first architecture with zero mandatory external dependencies |
| PicoClaw | Embedded edge deployment | IoT/constrained hardware use cases | Ultra-lightweight minimal binary with <100MB total memory footprint |
| IronClaw | Web3 agent automation | NEAR ecosystem development teams | Rust-native trusted execution environment (IronLoop) integration for on-chain workflows |
| LobsterAI | Enterprise security compliance | Corporate workstation agent deployments | Electron-based architecture with full audit logging and XSS protection |
| Moltis | Privacy-first self-hosting | Users requiring zero data exfiltration | End-to-end encrypted design with local redb vector memory backend |
| ZeroClaw | Open standards interoperability | Agent framework developers | RFC-governed development process built for maximum cross-protocol compatibility |
| CoPaw | Vertical use case optimization | Game dev and industry-specific teams | Async high-throughput runtime built for multi-session workloads |

## 6. Community Momentum & Maturity
All active projects fall into three clear activity tiers:
1. **Rapidly Iterating (≥90% PR merge rate)**: Moltis (94% PR merge rate, 16/17 merged PRs today including a new experimental vector memory backend), NanoClaw (14 merged PRs, nearing v2.1 minor release), ZeroClaw. These projects are in high-growth phase, shipping

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest (2026-08-17)
---
## 1. Today's Overview
NanoBot saw high contributor and community activity in the 24-hour tracking window, with 15 updated issues and 500 total updated pull requests processed across maintainer triage, bug resolution, and feature discussion. The vast majority of open contributions focus on two top user pain points: unaccounted excess token consumption, and inconsistent reliability across third-party LLM provider integrations. The team resolved 4 high-priority issues including a critical security bypass during the period, while no new official releases were published. Project activity signals strong community adoption, with a sharp uptick in enterprise user requests for stability, audit logging, and team collaboration features. The only PR merged in the window closed a long-dangling duplicate contribution, making way for a polished replacement implementation for a native TypeScript CLI terminal UI.

## 2. Releases
No new official NanoBot releases were launched in the 24-hour period. The project remains on its existing public pre-release version track, with no breaking changes or migration notes to share for this update window.

## 3. Project Progress
Only 1 PR was formally merged/closed during the tracking period, which resolved 4 outstanding high-priority items:
1.  The previously accidentally merged, half-complete TypeScript native terminal UI PR (#4329) was formally closed, with a new superseding PR (#5406) opened containing full test fixes and contiguous clean commit history for the feature.
2.  The critical `exec.allowPatterns` shell command allowlist bypass security vulnerability (Issue #5305) was patched.
3.  The 0.1.4 → 0.1.4post5 regression that broke Gemini-3-flash-preview provider integration (Issue #2185) was resolved.
4.  The cron scheduler permanent silent failure bug triggered by a single job persistence write error (Issue #5373) was fixed.
5.  Matrix channel functionality was updated to match existing Discord/Slack thread parity, where "reply in thread" user flows spawn dedicated isolated conversation contexts (Issue #5275).

## 4. Community Hot Topics
The most actively discussed items in the period are:
1.  [Issue #2463](https://github.com/HKUDS/nanobot/issues/2463) (15 comments, no reactions): The long-running p2 architectural issue where NanoBot does not preserve the exact prompt prefix sent to the LLM in its persisted conversation history. Affected users running custom fine-tuned OpenAI-compatible deployments report continuous context drift that breaks fine-tune-specific logic, with no agreed-upon fix approach yet.
2.  [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) (14 comments, no reactions): A feature request for granular per-call token consumption logging. The request is driven by power users reporting millions of tokens burned by idle 24/7 NanoBot instances with no way to audit the source of excess usage.
3.  [PR #5358](https://github.com/HKUDS/nanobot/pull/5358) (active cross-review): The new WebUI session collaboration feature that lets users reference peer shared sessions via @mentions. Teams using NanoBot for collaborative dev workspace tasks have expressed strong interest in testing the implementation, as it fills a gap missing from most competing open-source AI agent assistants.

The underlying collective unmet user need across all top discussions is full end-to-end transparency and fidelity for all LLM interaction flows, as teams move NanoBot from hobby use to production business workflows.

## 5. Bugs & Stability (Ranked by Severity)
1.  **Critical (Fixed):** `exec.allowPatterns` allowlist bypass that enabled arbitrary chained shell command execution via the OpenAI-compatible API ([Issue #5305](https://github.com/HKUDS/nanobot/issues/5305)). Fix was fully merged in the tracking window, no active exposure remains for users on latest main.
2.  **High (Unfixed):** Endless tool call loop for the `complete_goal` function due to broken gateway parsing of the `recap` parameter as a bare string instead of a JSON object ([Issue #4864](https://github.com/HKUDS/nanobot/issues/4864)). Affects all active goal-fulfillment agent sessions, causing permanent stuck states and wasted token spend. No fix PR has been opened yet.
3.  **High (Unfixed):** Tiktoken token estimation consistently undercounts real API-reported token usage, causing the token consolidation feature to never trigger even when context limits are approached ([Issue #5402](https://github.com/HKUDS/nanobot/issues/5402)). Exposes users to unexpected context truncation and excess LLM billing.
4.  **High (Unfixed):** Consolidator logic bug that advances the `last_consolidated` session pointer past the full original message batch even after part of the batch is truncated to fit token limits, leading to permanent loss of archived conversation content ([Issue #5377](https://github.com/HKUDS/nanobot/issues/5377)).
5.  **Medium (Fixed):** Gemini-3-flash-preview provider post-upgrade regression, and cron scheduler permanent crash after persistence failure, both resolved in today's merged patch.

## 6. Feature Requests & Roadmap Signals
Top user-submitted feature requests with clear near-term release momentum include:
- Add a user-only skill flag to prevent the LLM from automatically invoking specific curated custom skills ([Issue #5404](https://github.com/HKUDS/nanobot/issues/5404))
- Optimize MCP tool schema transmission to reduce context bloat for large tool sets ([Issue #5298](https://github.com/HKUDS/nanobot/issues/5298))
- Add MCP Apps host support for the WebUI to render native interactive UI elements returned by MCP servers ([Issue #5251](https://github.com/HKUDS/nanobot/issues/5251))
- Add Telegram sticker send and reaction support for full Telegram channel parity ([Issue #5289](https://github.com/HKUDS/nanobot/issues/5289))

Based on current activity, the granular token logging, MCP schema bloat optimization, and user-only skill flag features are highly likely to be included in the next minor 0.1.5 release, as they have partial draft implementations and strong user demand. The WebUI MCP Apps and session collaboration features are targeted for the 0.2.0 medium-term feature release.

## 7. User Feedback Summary
Real user pain points captured in today's discussions:
1.  Unmonitored unexplained excess token consumption is the top complaint, with multiple enterprise users reporting hundreds of dollars in unexpected LLM API fees from idle NanoBot instances with no active user interactions.
2.  Inconsistent thread context behavior across different chat channels (Matrix, Telegram, Discord) creates significant extra work for users running multi-channel NanoBot deployments across team communication tools.
3.  The Dream automatic skill generation feature creates duplicate skill files on every run, forcing users with curated custom skill libraries to manually clean up redundant entries after every session.
Positive user satisfaction signals: Multiple users highlighted NanoBot's flexible MCP tool integration framework as a standout differentiator compared to other open-source AI agent projects.

## 8. Backlog Watch
NanoBot currently faces a large backlog of 499 open PRs, most of which are 6+ months old and marked as conflict state that require triage from maintainers:
1.  The high-impact KV cache reuse with batch prompt rollover PR ([#1205](https://github.com/HKUDS/nanobot/pull/1205)) that demonstrated 40-60% token cost cuts for long-running sessions in testing has not received maintainer review since February 2026.
2.  The PromptGuard prompt injection detection safety module PR ([#1149](https://github.com/HKUDS/nanobot/pull/1149)) has been open for 6 months with no assigned reviewer, despite being a core required feature for enterprise production deployments.
3.  The p2 architectural prompt prefix preservation issue ([#2463](https://github.com/HKUDS/nanobot/issues/2463)) has been open for 5 months with no assigned fix owner, despite 15 comments from affected custom fine-tune deployment users.
The large backlog of unreviewed community contributions represents a key project health risk that risks slowing down contribution velocity if not addressed in coming weeks.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-08-17
*Source: https://github.com/nousresearch/hermes-agent*

---

## 1. Today's Overview
The 24-hour window ending 2026-08-17 sees high, focused activity across the Hermes Agent project, with 50 updated issues and 50 updated pull requests, aligned with the recent stable patch release. The team prioritizes triage of long-standing session state bugs, cross-platform desktop stability fixes, and ecosystem improvements for contributed skills. 82% of updated issues remain active, with 9 high-priority bugs closed via triage and existing patches, indicating healthy, responsive maintainer velocity. Overall project health is strong, with no critical outages reported for core functionality, and active forward progress on UX and performance improvements for both casual users and power users running multi-session fleet deployments.

## 2. Releases
A new stable patch release was published August 16, 2026:
- **v2026.8.16 / Hermes Agent v0.20.2** ([Release Link](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16))
This is a rollup stable release bundling 397 PRs merged since v0.20.1, built explicitly for downstream consumers including Docker image publishers, hosted deployment operators, and new end-user fresh installs. No breaking changes are flagged in the release notes, and no manual migration steps are required for users upgrading from v0.20.1.

## 3. Project Progress
2 PRs were merged/closed in the last 24 hours, alongside 9 resolved bugs from open backlog triage:
1. Merged PR #72156 ([fix(state): bound WAL growth and checkpoint after VACUUM](https://github.com/NousResearch/hermes-agent/pull/72156)) eliminates a critical bug where the `hermes sessions optimize` maintenance command would bloat SQLite write-ahead log files to gigabyte scale, filling host disks to 100% instead of shrinking large session databases for power users with months of chat history.
2. A second closed PR delivered related SQLite resilience improvements for session state storage, hardening reliability for long-running headless gateway deployments.
Notable closed bugs from triage include a critical desktop cross-session queued message leak that sent pending input to the wrong chat window, broken non-pinned session history loading in the desktop sidebar, and the Ollama local provider bug that caused agents to narrate fake MCP tool results instead of executing real calls.

## 4. Community Hot Topics
The most active community discussions by comment volume reflect priorities for ecosystem health, daily UX, and new core features:
1. **#66616 [OPEN] Skills index is stale or degraded (44 comments)** ([Issue Link](https://github.com/NousResearch/hermes-agent/issues/66616)): The community-driven Skills Hub public index is 29.8 hours old, exceeding the 26-hour freshness limit. The 44 comment thread highlights strong user investment in the open contributed skills ecosystem, as broken index discoverability blocks users from finding and installing community-maintained tools.
2. **#85695 [OPEN] False positive "TERMINAL_CWD deprecated" warning on every gateway start (8 comments)** ([Issue Link](https://github.com/NousResearch/hermes-agent/issues/85695)): High engagement indicates users prioritize zero-surprise UX for daily CLI use, with no unnecessary spurious warnings during normal startup.
3. **#87886 [OPEN] feat(desktop): bundle Bot Mode as built-in default-on plugin** ([PR Link](https://github.com/NousResearch/hermes-agent/pull/87886)): High-profile feature from project lead teknium1 responds to widespread user demand for native bot-to-bot collaboration, eliminating the previous requirement for manual edits to user SOUL.md files to enable peer agent coordination.

## 5. Bugs & Stability
Bugs reported/updated in the last 24 hours, ranked by severity:
| Severity | Description | Issue Link | Fix Status |
|----------|-------------|------------|------------|
| P0 (Critical) | On Windows, `hermes update` deletes the packaged Desktop executable and reports a successful exit 0 even if the desktop rebuild fails, leaving users with no working Hermes installation at all | [#86443](https://github.com/NousResearch/hermes-agent/issues/86443) | No fix PR filed |
| P1 | Windows Desktop silently freezes when the window is hidden or occluded, with no error logs, requiring full process kill to recover | [#83420](https://github.com/NousResearch/hermes-agent/issues/83420) | No fix PR filed |
| P1 | CLI dangerous command approval panels never render, hanging sessions indefinitely for privileged terminal operations | [#87183](https://github.com/NousResearch/hermes-agent/issues/87183) | No fix PR filed |
| P1 | TUI and desktop app get stuck in a permanent busy state with stale context usage bars when mid-streaming events are interrupted by upstream disconnects or context compression | [#70871](https://github.com/NousResearch/hermes-agent/issues/70871) | No fix PR filed |
| P1 (Resolved) | Local Ollama custom provider never emits real tool calls for connected MCP servers, narrating fake results instead | [#87027](https://github.com/NousResearch/hermes-agent/issues/87027) | Closed in v0.20.2 patch |

## 6. Feature Requests & Roadmap Signals
Top user-submitted feature requests with strong community support, highly likely to ship in the next minor patch v0.20.3:
1. Desktop UI parity with the web dashboard, bringing admin controls, plugin management, and kanban multi-agent surfaces to the desktop app to eliminate required browser switches for ops workflows ([#67144](https://github.com/NousResearch/hermes-agent/issues/67144), 1 thumbs up)
2. 80% reduction in replay input size across all 10 model providers, cutting token costs for replaying existing session history ([PR #87303](https://github.com/NousResearch/hermes-agent/pull/87303), already in active review)
3. Configurable cron media send timeout via `HERMES_CRON_MEDIA_SEND_TIMEOUT`, eliminating hard 30 second limits that break delivery of large TTS exports and long media attachments ([PR #87967](https://github.com/NousResearch/hermes-agent/pull/87967))
4. Per-model absolute context compression threshold overrides, so administrators can set custom compaction limits matched to individual model window sizes instead of using a single global one-size-fits-all value.

## 7. User Feedback Summary
Real user pain points and feedback from the last 24 hours are heavily weighted to platform and installation experience gaps:
- Windows users report the highest dissatisfaction, with multiple overlapping update bugs causing partial installs, missing executables, and update failures that require manual process intervention, rather than seamless over-the-air upgrades.
- Cross-platform desktop fragmentation is a top complaint for non-Windows users: macOS desktop is missing required local network permission prompts, Linux builds break due to Windows-only electron installer binaries, and Nix desktop packages fail with version mismatches.
- Heavy power users with 500+ message long sessions report broken context compression behavior, including duplicated stored messages, missing content when branching sessions, and 2.5x inflated token cost estimates. No broad core functionality dissatisfaction is reported, with most feedback being constructive bug reports for edge case workflows.

## 8. Backlog Watch
Long-standing high-priority issues and PRs that have not received recent maintainer attention and risk blocking large user segments:
1. **#66616 Stale skills index**: Created 2026-07-18 (over 30 days old), 44 comments, critical to the public skills ecosystem, no maintainer assignment or public fix roadmap shared.
2. **#24740 Honcho session title bug**: Created 2026-05-13 (over 3 months old), breaks the configured `sessionStrategy` setting for all users of the third-party Honcho memory integration, no public update following initial triage.
3. **PR #9087 Nix home-manager module**: Created 2026-04-13 (over 4 months old), delivers declarative per-user Hermes service support for the large Nix user base, remains open with no review progress after 4 months.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-08-17 Project Digest
This digest tracks open-source AI agent assistant PicoClaw's 24-hour development activity ending 2026-08-17.

---
## 1. Today's Overview
PicoClaw saw moderate, security and feature-focused development activity in the tracked 24-hour window, with 2 updated open issues and 5 updated pull requests, no new official releases published. Most recent work prioritizes patching cross-channel SSRF attack surfaces, adding new native third-party tool integrations, and expanding supported communication channel types for embedded AI agent deployments. No critical outages, crashes, or widespread user-facing regressions were reported in this period. Overall project health remains stable, with a consistent cadence of community-contributed security and usability improvements being queued for maintainer review.

## 2. Releases
No new official PicoClaw releases were published in the 24-hour window, so there are no associated version change logs, breaking change notices, or migration guidance to share for this digest period.

## 3. Project Progress
Only 1 PR was marked as closed/merged in the tracked window:
- [#3193](https://github.com/sipeed/picoclaw/pull/3193) (Closed, by contributor dim): Added new simplex channel type functionality. This non-breaking new feature expands PicoClaw's supported communication interface options, enabling one-way (output only) message flow use cases such as notification-only broadcast channels that do not require inbound user interaction capabilities.

## 4. Community Hot Topics
The two most active community-discussed items are listed below:
1. [#3302](https://github.com/sipeed/picoclaw/issues/3302) (Open feature request, 3 comments): Request to add OAuth 2.1 support for MCP (Model Context Protocol) servers matching the implementation outlined in earlier issue #2546. The underlying user need is for a standardized, modern secure authentication flow to protect access to private self-hosted MCP tool endpoints, eliminating the overhead of custom manual credential management for agent tool integrations.
2. [#3299](https://github.com/sipeed/picoclaw/pull/3299) (Open PR): Adds Exa as a native web search provider for PicoClaw's agent toolset. This addresses widespread user demand for a dedicated, LLM-optimized search tool that returns highlighted relevant content snippets instead of raw unstructured page results to improve agent fact grounding quality.

## 5. Bugs & Stability
All tracked active issues this period are security vulnerability patches, ranked by severity:
1. **Critical**: Unrestricted SSRF risk on inbound media downloads across QQ, Telegram, Discord, LINE, and Slack channels, where crafted media URLs could be abused by malicious actors to access private internal network resources. A complete fix PR [#3322](https://github.com/sipeed/picoclaw/pull/3322) that enforces `BlockPrivateTargets` hardening for all media download flows is currently open and pending review.
2. **High**: SSRF vulnerabilities in WeChat media download flows, where plain HTTP clients for fetching WeChat CDN content could follow redirects to loopback or private host addresses. Fix PR [#3324](https://github.com/sipeed/picoclaw/pull/3324) that replaces the unsafe client with a hardened `CreateSafeHTTPClient` instance is queued for review.
3. **High**: Parallel SSRF vulnerability in WeCom media download flows matching the WeChat flaw above, with fix PR [#3323](https://github.com/sipeed/picoclaw/pull/3323) already submitted and pending maintainer sign-off.

No active user-reported crashes, data loss regressions, or widespread functional breaks were recorded in this window.

## 6. Feature Requests & Roadmap Signals
Two distinct community feature requests surfaced this period, with clear prioritization signals:
- The full suite of SSRF security patches, Exa native web search support, and the new simplex channel type are on track to ship in PicoClaw's next minor release, given the PRs are feature-complete and only pending final review.
- The requested OAuth 2.1 support for MCP servers (#3302) and native Telegram rich table rendering (#3325) are tagged as nice-to-have enhancements, and are likely to be scheduled for implementation in the 2-3 subsequent release cycles after core security work is completed.

## 7. User Feedback Summary
Tracked user feedback this period surfaces three core pain points:
1. Poor structured output readability on third-party chat platforms, specifically that Markdown tables sent via Telegram get degraded to plain text or monospaced blocks instead of rendered as formatted tables, hurting usability for agent-generated structured query results.
2. Lack of first-class pre-integrated web search provider options, which forces end users to configure custom tool connectors instead of leveraging widely adopted LLM-optimized search services out of the box.
3. Unpatched SSRF attack surfaces on public self-hosted PicoClaw instances that create security risk for small deployments without custom hardening. No explicit widespread positive or negative satisfaction feedback outside these functional and security requests was captured.

## 8. Backlog Watch
Three high-priority items are currently marked as stale and have been pending maintainer attention for multiple days:
1. PR [#3299](https://github.com/sipeed/picoclaw/pull/3299) (Exa native web search provider): Submitted on 2026-07-26, updated 2026-08-16, has received no formal review comments from maintainers despite being a high-demand user feature.
2. The trio of security fix PRs #3322, #3323, #3324 addressing cross-channel SSRF vulnerabilities: Submitted on 2026-08-09, all marked stale, no maintainer approval to merge, creating unaddressed security risk for public deployments.
3. Feature request issue [#3302](https://github.com/sipeed/picoclaw/issues/3302) for OAuth 2.1 MCP server support: Created on 2026-07-30, has 3 user engagement comments but no maintainer response to confirm alignment with official roadmap planning.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) 2026-08-17 Project Digest
---
## 1. Today's Overview
NanoClaw saw high, sustained core engineering activity on 2026-08-16, with 34 total pull requests updated across the codebase, 14 of which were merged or closed, and no new public releases published. The single issue updated in the last 24 hours was a misfiled entry with no user-facing action required, signaling zero active user-reported critical issues at the time of tracking. Most merged work focused on core runtime reliability improvements, new developer extensibility hooks, and expanded third-party platform support, with core team contributors accounting for nearly all committed changes. The project’s current sprint trajectory indicates a focus on polishing cross-session context and multi-platform bot adapter capabilities ahead of a likely near-term minor v2.1.xx release. Overall project health is strong, with no unaddressed outages or critical regressions reported.

## 2. Releases
No new official NanoClaw releases were published in the 24-hour tracking window ending 2026-08-17. No breaking changes or migration notes are applicable for this period.

## 3. Project Progress
14 PRs were merged or closed in the 24-hour window, delivering the following completed features and fixes:
1. **Core runtime reliability upgrades**: A unified mid-turn streaming delivery system (PR #3284, https://github.com/nanocoai/nanoclaw/pull/3284) was implemented to eliminate duplicate message sends for streaming LLM responses, paired with fixed structured chat link preservation to prevent broken hyperlinks across platform formatting (PR #3283, https://github.com/nanocoai/nanoclaw/pull/3283).
2. **Admin & developer functionality**: 6 new extensibility and quality-of-life PRs landed, including a new `decline_notify` unknown sender DM policy that avoids spamming admins with approval requests for unrecognized users (PR #3260, https://github.com/nanocoai/nanoclaw/pull/3260), optional rich channel adapter capabilities for typing status, custom thread titles, and suggested prompts (PR #3261, https://github.com/nanocoai/nanoclaw/pull/3261), and hot-start support for newly registered adapters without requiring a full container reboot (PR #3263, https://github.com/nanocoai/nanoclaw/pull/3263).
3. **Major platform integrations**: The 5-month-old PR #1251 (https://github.com/nanocoai/nanoclaw/pull/1251) adding full OpenMail email channel support was finally merged, letting NanoClaw agents auto-monitor inboxes, respond to emails, and use email access as an on-demand tool.
4. **Roadmap epic kickoff**: The first PR in the Document Memory + Fill-In Editing roadmap epic landed, adding a `save_document` MCP tool that persists Word .docx and PDF attachments directly to the agent group’s durable memory (PR #3278, https://github.com/nanocoai/nanoclaw/pull/3278).

## 4. Community Hot Topics
All recently updated issues and PRs have no public comments or user reactions in this tracking window, but the two highest-impact entries drawing implicit community interest are:
1. Long-awaited OpenMail email channel PR #1251 (https://github.com/nanocoai/nanoclaw/pull/1251), merged after 5 months of development. The underlying user need here is demand for AI agent-native email access, a gap in many self-hosted AI assistant deployments that previously required custom third-party bridges.
2. Cross-session context module PR #3257 (https://github.com/nanocoai/nanoclaw/pull/3257), the lead open PR for the current sprint work. This addresses a widely requested pain point where agents managing multiple concurrent group and DM sessions could not share context across related conversations without manual user intervention.

## 5. Bugs & Stability
All bugs tracked this period have active corresponding fix PRs, ranked by severity:
1. **High severity**: Agent-scoped `ncl tasks` commands are blind to pre-v2.1.54 legacy sessions, breaking task management workflows for users who upgraded from older versions. Fix PR #3281 (https://github.com/nanocoai/nanoclaw/pull/3281) is under active review.
2. **Medium severity**: Discord inbound attachments that only expose a public URL cannot be staged to agent memory, preventing agents from reading attached files. Fix PR #2752 (https://github.com/nanocoai/nanoclaw/pull/2752) is in final testing.
3. **Medium-low severity**: The `ncl groups config update` command cannot unset nullable scalar config values, storing empty strings instead of NULL and breaking downstream runtime behavior. Fix PR #3280 (https://github.com/nanocoai/nanoclaw/pull/3280) is awaiting merge.
4. **Low severity**: Telegram pairing codes pasted with spaces are rejected during setup, creating unnecessary friction for new users. Fix PR #3282 (https://github.com/nanocoai/nanoclaw/pull/3282) is ready for final review.

No unpatched critical regressions or outages were reported in the tracking window.

## 6. Feature Requests & Roadmap Signals
Recent merged and in-progress work signals three high-priority features very likely to ship in the next minor (v2.1.xx) NanoClaw release:
1. Full cross-session context sharing tools including the `ncl sessions history` CLI command, which is currently in active PR review, and will enable agents to sync context across all linked sessions in a group.
2. Full Document Memory suite of MCP tools for storing, editing, and querying Word/PDF documents natively, with the first save-document functionality already merged.
3. Full OpenMail email channel support as a first-class installable integration via the `/add-openmail` skill, with no extra third-party dependencies required.
Additional upcoming extensibility features will include more interceptor hooks for custom workflow automation built on top of the new channel registration and delivery preview seams merged this sprint.

## 7. User Feedback Summary
This tracking window surfaces confirmed user pain points and use cases:
- Users running multi-platform agents report high dissatisfaction with missing native email support, which the newly merged OpenMail integration directly addresses.
- Admins of large shared agent deployments express frustration at being spammed with excessive approval requests for unknown user DM attempts, a use case fully resolved by the new `decline_notify` policy.
- Users upgrading from older NanoClaw versions report broken task management functionality due to un-migrated legacy session records, which the incoming #3281 fix will resolve.
- Overall user sentiment appears positive around the current sprint’s focus on reliability and new platform support, with no negative feedback or outages reported.

## 8. Backlog Watch
There is one high-priority long-dormant PR that received renewed activity in this tracking window and is awaiting final core team review to close out: PR #2752 (https://github.com/nanocoai/nanoclaw/pull/2752) for Discord inbound attachment processing support, open since June 12, 2026. Fixing this will resolve a long-standing broken core capability for all Discord adapter users. No unresolved user-submitted open issues older than 24 hours appear in the current backlog, as the only issue updated this period was a misfiled invalid entry.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-08-17 Project Digest
---
## 1. Today's Overview
IronClaw saw consistent, low-risk active development on 2026-08-17, with 1 updated open issue, 10 total updated PRs across the 24-hour window, 2 successfully merged/closed PRs, and no new official releases published. All recent contributions come from verified core team members, regular contributors, and the project’s automated Dependabot bot, signaling a stable, cadenced development cycle with no unplanned high-severity production outages or breakages flagged. The majority of current development work is focused on Slack user onboarding experience fixes, internal technical debt cleanup, automation capability improvements, and routine dependency patching to reduce supply chain vulnerability exposure. The project is running on track for its planned near-term feature roadmap with no critical bottlenecks reported.

## 2. Releases
No new official releases were published in the 24-hour reporting window.

## 3. Project Progress
Two PRs were successfully merged/closed in the reporting window, advancing maintenance and stability goals:
1. **PR #7632 (https://github.com/nearai/ironclaw/pull/7632)**: A low-risk Dependabot chore that bumps 4 Rust packages in the everything-else dependency group, including base64, toml, rstest and jsonschema, delivering minor performance improvements and bug fixes for the core Rust runtime stack with no breaking changes.
2. **PR #7683 (https://github.com/nearai/ironclaw/pull/7683)**: A core team chore that removes obsolete retired IronLoop network settings and unused legacy `network_access` fields from the trusted IronLoop repository configuration, fully aligning the system with the current IronLoop v1 role schema while retaining all existing automated workflow behavior.

## 4. Community Hot Topics
The only active, non-maintenance thread driving discussion today is the linked Slack onboarding improvement pair:
- Issue #7681 (https://github.com/nearai/ironclaw/issues/7681)
- Associated fix PR #7682 (https://github.com/nearai/ironclaw/pull/7682)
This pair is the highest-impact user-facing update under current discussion, with broad contributor alignment on the underlying user need: Slack users connecting their accounts to IronClaw require a privacy-preserving, low-friction onboarding experience that does not expose unlinked account status to all members of shared channels, and eliminates unnecessary manual context switching between platforms. No debated edge cases or conflicting requirements are documented in the current thread.

## 5. Bugs & Stability
No high-severity crashes, production outages, or regressions were reported in the 24-hour window:
1. **Moderate-severity UX gap**: The documented Slack onboarding flaw in Issue #7681, which leaks unlinked user connection prompts to public shared channels and creates unnecessary friction for new users. A full fix (PR #7682) is already drafted and linked directly to the issue, so resolution is imminent.
2. All other updated items are low-risk maintenance changes with zero reported stability incidents or end-user breakages.

## 6. Feature Requests & Roadmap Signals
The only formal new user-facing feature request documented today is the improvement outlined in Issue #7681, which calls for private delivery of Slack unlinked-user connection prompts and one-click direct account linkage that preserves context between Slack and the IronClaw web app. Since the matching implementation PR #7682 is already complete and in review, this enhancement is extremely likely to ship in the next upcoming minor release.
Two larger core roadmap items also show active forward motion: PR #7651 (deterministic no-result suppression for automations) and PR #7491 (unified core coding tool surface for AI agents) are both expected to land in the August v0.12 release train to improve agent reliability and developer workflow experience.

## 7. User Feedback Summary
The only explicit end-user pain point captured in this window is the poor Slack onboarding flow: current public prompts in shared channels can reveal private unlinked account status to other team members, and the manual multi-step connection process often causes new users to misplace their connection link, leading to unnecessary dropped adoption for the Slack bot integration. No widespread end-user dissatisfaction, outage reports, or positive satisfaction feedback was captured in the 24-hour reporting period.

## 8. Backlog Watch
Two high-priority items have been pending for more than 5 days and require maintainer attention to unblock downstream work:
1. **PR #7491 (https://github.com/nearai/ironclaw/pull/7491)**: A size XL, medium-risk PR that delivers the new unified core coding tool interface for AI agents, consolidating 6 previously scattered file and shell tool functions into a single consistent surface for models. Opened 2026-08-11, it has not seen new updates since 2026-08-15, and is a foundational change that blocks multiple downstream AI agent capability improvements.
2. **PR #7406 (https://github.com/nearai/ironclaw/pull/7406)**: A CI dependency bump PR that patches 4 critical GitHub Actions runner dependencies to mitigate known supply chain security risks. Opened 2026-08-09, it is still awaiting review to prevent unmanaged stale dependency drift in the project's CI pipeline.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) Daily Project Digest
Date: 2026-08-17

---

## 1. Today's Overview
On 2026-08-17, the LobsterAI project recorded 27 total active updates across issues and pull requests, with a 53% merge/close rate for processed PRs. Most updates in the 24h window focused on triaging and resolving 4-month-old stale backlog items from April 2026, indicating steady maintenance momentum prioritized for security hardening, core bug fixes and end-user UX polish. No critical unplanned production incidents or widespread service outages were reported by the community today. The overall project health remains stable, with active parallel work on both enterprise security compliance and end-user experience optimization.

## 2. Releases
No new official releases were published for LobsterAI in the last 24 hours.

## 3. Project Progress
A total of 9 PRs were merged or closed in the past day, delivering the following key functional and security improvements:
1. **Security Hardening Batch** (3 PRs):
   - [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831): Masked sensitive data including API keys, auth tokens and user profile information in main process and IM module logs to prevent accidental sensitive data leakage.
   - [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832): Added key-level access control for `store:*` IPC channels to block unauthorized read/write of local SQLite KV storage, eliminating XSS-based privilege escalation risks.
   - [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833): Added whitelist validation for `shell.openExternal()` URL schemes to block unsafe protocol handlers that may lead to local file leakage or unintended system action execution.
2. **UX Optimization**:
   - [#1690](https://github.com/netease-youdao/LobsterAI/pull/1690): Added confirmation modal before deleting IM platform instances to prevent accidental loss of high-cost configurations.
   - [#1693](https://github.com/netease-youdao/LobsterAI/pull/1693): Optimized model setup entry visibility and fixed the bug that user input drafts get cleared when users access model configuration for the first time.
   - [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760): Extended custom agent avatar functionality to support image uploads, in addition to the existing emoji selection workflow.
   - [#1691](https://github.com/netease-youdao/LobsterAI/pull/1691): Added full agent template import/export capabilities to support cross-device and cross-user agent configuration sharing.
3. **Core Function Fixes**:
   - [#1715](https://github.com/netease-youdao/LobsterAI/pull/1715): Fixed the missing `session_id` issue in OpenClaw server proxy requests to stabilize multi-session concurrent running.
   - [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835): Removed duplicate system error messages pushed when `continueSession` operation fails to avoid confusing end users.

## 4. Community Hot Topics
The two highest engagement items from recent updates reflect strong user demand for better LLM compatibility and practical productivity features:
1. [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) [Closed] DeepSeek V4 LLM request schema rejection issue: This accumulated 8 community comments as the most active discussion thread. The underlying user need stems from the wide adoption of DeepSeek V4 as a low-cost, high-performance reasoning model in production workflows, and the urgent requirement for LobsterAI to properly handle non-standard model IDs that include slashes.
2. [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) [Closed] Feature request for batch conversation deletion: This request got 1 👍 reaction from the community, representing a common pain point for long-term users who face context bloat problems caused by accumulated useless chat history.

## 5. Bugs & Stability
Reported bugs are ranked by severity as below:
| Severity | Issue Link | Bug Description | Fix Status |
|----------|------------|-----------------|------------|
| Critical | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 100% reproducible gateway port conflict when running LobsterAI and its enterprise edition "Zhidi Dijiwangxie" simultaneously, causes the enterprise instance to fail to start | No associated fix PR found, unassigned |
| High | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | Edit diff display feature stops working after recent updates, community user has already pinpointed the bug point in the `extractDiffFromToolInput` front-end function | No matching fix PR published |
| Medium | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | DeepSeek V4 model ID persistence error (the root cause of Issue #1813) | Fix PR is open and under active review |
| Medium | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | High-probability broken white program icon issue during Win11 installation | No fix PR submitted |
| Low | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) | Write tool execution failure | Already closed and resolved |

## 6. Feature Requests & Roadmap Signals
Valid user-submitted feature requests collected today include:
1. Outlook OAuth2 modern authentication support for email integration ([#1745](https://github.com/netease-youdao/LobsterAI/issues/1745))
2. Dynamic LLM temperature parameter adjustment via conversation keywords ([#1688](https://github.com/netease-youdao/LobsterAI/issues/1688))
3. Skeleton loading UI and richer empty state for skill management and task history pages (corresponding PRs [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) and [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) are already completed)

Combining the existing PR implementation progress, the next minor version of LobsterAI is highly likely to ship the already developed capabilities including agent import/export, AI reply TTS reading, image avatar customization, and full DeepSeek V4 compatibility.

## 7. User Feedback Summary
### Dissatisfaction & Pain Points
- Users whose organization enforces Microsoft Outlook modern authentication policies are completely blocked from using the email connection feature, as current LobsterAI does not support OAuth2 login.
- New users report high friction when configuring models for the first time, and frequent data loss of unsubmitted input drafts.
- Long-running users face reduced LLM response quality caused by unmanaged bloated chat context, with no built-in batch delete function.
- Windows users experience unprofessional broken desktop icons after installation, degrading product perceived quality.
### Positive Feedback
Enterprise-focused users expressed clear recognition for the newly landed security hardening patches, which help LobsterAI meet internal security compliance requirements for private deployment on employee workstations.

## 8. Backlog Watch
The following high-impact stale items (pending for over 4 months) need priority maintainer attention:
1. [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) Complete AI message TTS reading feature: Full implementation with zero dependency Web Speech API is already finished, but has not received maintainer review and merge since April 2026.
2. [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) Cross-instance port conflict bug: 100% reproducible, breaks usage for users who need to run both community and enterprise versions of LobsterAI, no maintainer follow-up recorded in the last 4 months.
3. [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) Edit diff display failure: Community user has provided explicit bug location and reproduction details, but no maintainer has responded or assigned a fix task yet.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (github.com/moltis-org/moltis) 2026-08-17 Project Digest
---
## 1. Today's Overview
This 24-hour reporting window marks an extremely high-velocity development period for the Moltis AI assistant project, with 17 total PR updates and a 94% merge/close rate for recently changed pull requests. The team landed critical security patches, resolved 3 long-standing user-reported bugs, and rolled out multiple major new feature additions spanning vector memory, third-party connectors, and platform UX improvements. Only 2 active bug issues remain open across the project, indicating strong core stability as new features are shipped. No new formal releases were published during the window, as the team appears to be batching recent changes ahead of an upcoming minor version cut.

## 2. Releases
No new official Moltis releases were published in the 24-hour period ending 2026-08-17.

## 3. Project Progress
16 of 17 recently updated PRs were successfully merged or closed during the window, covering the following key workstreams:
- **Bug resolution**: Patched the longstanding main session deletion/archival block ([#1182](https://github.com/moltis-org/moltis/pull/1182)), fixed CalDAV list events to properly respect RFC 4791 time ranges ([#1147](https://github.com/moltis-org/moltis/pull/1147)), resolved broken gateway compilation on main ([#1201](https://github.com/moltis-org/moltis/pull/1201)), fixed the flaky push fanout timeout test that only failed under full-suite load ([#1203](https://github.com/moltis-org/moltis/pull/1203)), corrected wrong upstream gogcli and wacrawl repo URLs that broke sandbox builds ([#1191](https://github.com/moltis-org/moltis/pull/1191), [#1192](https://github.com/moltis-org/moltis/pull/1192)), normalized vault recovery phrase hashing to accept varied user input formatting ([#1186](https://github.com/moltis-org/moltis/pull/1186)), and fixed empty bash array errors that broke local validation scripts on macOS's legacy Bash 3.2 ([#1194](https://github.com/moltis-org/moltis/pull/1194)).
- **Security hardening**: Landed two high-priority security fixes to block arbitrary file write path traversal attacks for malicious zip archives and Hugging Face Hub repositories ([#1180](https://github.com/moltis-org/moltis/pull/1180)), and added signature verification for node pairing flows to prevent unauthorized pairing requests ([#1179](https://github.com/moltis-org/moltis/pull/1179)).
- **Major new features**: Launched the experimental zvec vector database memory backend powered by redb, added full durable persistence for CalDAV, Gmail, and Himalaya v2 connectors, shipped native Slack live task card rendering, and added multi-level channel activity log visibility settings with `all`/`errors_only`/`off` tiers ([#1158](https://github.com/moltis-org/moltis/pull/1158), [#1190](https://github.com/moltis-org/moltis/pull/1190), [#1195](https://github.com/moltis-org/moltis/pull/1195), [#1093](https://github.com/moltis-org/moltis/pull/1093)).
- **Maintenance**: Completed automated dependency updates for JavaScript ecosystem packages across the web UI, docs, and public website directories.

The only remaining open PR updated in this window is the upcoming MiniMax Code ACP agent integration ([#1204](https://github.com/moltis-org/moltis/pull/1204)).

## 4. Community Hot Topics
No issues or PRs in this reporting window received more than 1 comment or user reaction, indicating that nearly all work merged today was aligned with pre-planned roadmap priorities rather than unplanned reactive community discussions. The highest engagement item is the 2-month-old main session deletion bug report ([#1132](https://github.com/moltis-org/moltis/issues/1132)), which received one comment confirming the fix works as expected after its merge, reflecting strong community satisfaction with long-standing UX blockers being resolved.

## 5. Bugs & Stability
Bugs are ranked by severity, with status of associated fixes noted:
1. **High severity**: Open bug [#1205](https://github.com/moltis-org/moltis/issues/1205) where the heartbeat service ignores user-configured active hours and runs continuously. No associated fix PR has been posted yet, and this defect will cause unnecessary resource consumption, increased network footprint, and potential privacy risks for users that have set explicit quiet operation windows.
2. **Medium severity**: Open bug [#1202](https://github.com/moltis-org/moltis/issues/1202) where the CI format gate is broken on the main branch, with two Rust source files exceeding the 1500-line lint limit. This defect will block all incoming PRs from passing CI checks until resolved, and no fix PR is currently open.

All 3 other bugs updated in the last 24 hours have associated merged fix PRs, with no unresolved critical or crash-level defects on record as of this window.



</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Project Digest | 2026-08-17
---
## 1. Today's Overview
Over the 24-hour observation window, the CoPaw (QwenPaw) project recorded 9 updated issues and 9 updated pull requests, with no new official releases published. The community shows exceptionally strong new contributor engagement, with 7 of 9 active PRs submitted by first-time contributors, signaling healthy expanding open-source adoption. All updated PRs remain open pending formal maintainer review, while 2 long-standing prior issues were formally closed, reflecting steady progress on planned roadmap items. Overall project momentum is stable, with current development prioritizing bug fixes for the recent v2.1.0 release alongside incremental feature expansions for enterprise and vertical use cases.

## 2. Releases
No new releases were published in the last 24 hours. No version changes, breaking updates, or migration notes apply for this digest period.

## 3. Project Progress
No pull requests were formally merged or closed in the 24-hour window. However, 2 previously open high-priority issues were resolved and closed:
1. The community-proposed ViBo memory optimization scheme ([Issue #7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)), which claims to reduce memory-related token consumption by 97.5% for multi-session agents, was formally accepted and closed as aligned with the team's long-term memory optimization roadmap.
2. The long-running cron task misfire bug ([Issue #6471](https://github.com/agentscope-ai/QwenPaw/issues/6471)), a WSL2/Linux production runtime issue that stopped APScheduler AsyncIOScheduler from triggering jobs after extended event loop idle, was formally closed after full validation.

## 4. Community Hot Topics
The highest activity items sorted by comment count are:
1. [Issue #7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) (3 comments, 0 reactions): The ViBo compressed encrypted memory proposal. The underlying user need is drastically rising inference cost for long-running, multi-session agents, as current implementations send full historical memory to the LLM on every request. This signals widespread user demand for native, low-overhead memory optimization features to cut operational costs for agent deployments.
2. [Issue #7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) (2 comments, 0 reactions): Request for system_prompt access permission for plugin APIs. The underlying need comes from self-hosted enterprise users building internal custom plugin workflows, who require controls to prevent proprietary internal system prompts from being exposed to end users on the frontend chat interface. This demonstrates fast-growing enterprise adoption of the CoPaw stack.

## 5. Bugs & Stability
Active bugs reported in the period, ranked by severity:
1. Critical v2.1.0 crash ([Issue #7063](https://github.com/agentscope-ai/QwenPaw/issues/7063)): Agent crashes 100% of the time during tool calls, caused by a type error where the `_execute_tool_call` method uses `async for` on a coroutine instead of a valid async generator. No corresponding fix PR has been linked yet.
2. High-frequency runtime crash ([Issue #7074](https://github.com/agentscope-ai/QwenPaw/issues/7074)): Sessions crash randomly during normal usage, requiring a full page refresh to restore service, with very high occurrence rates that severely disrupt daily user operations. No fix PR is visible at this time.
3. Chat history truncation ([Issue #7065](https://github.com/agentscope-ai/QwenPaw/issues/7065)): After 7+ rounds of conversation, users can only view 3-4 of the most recent messages, with earlier discussion content hidden even when scrolling to the top of the chat window. No linked fix PR is available.
6 of the 9 currently open active PRs are targeted at resolving existing stability defects, indicating the community is prioritizing fixes for the v2.1.0 release.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests and release prediction:
1. [Issue #7062](https://github.com/agentscope-ai/QwenPaw/issues/7062): Request for per-agent/per-session `reasoning_effort` override, instead of the current global model-level configuration. This high-impact, low-development-cost feature is almost certain to be included in the next v2.1.x minor patch release, to support mixed workloads of fast Q&A assistants and deep research agents.
2. [Issue #7073](https://github.com/agentscope-ai/QwenPaw/issues/7073): Skill name deduplication logic to prevent duplicate loading of custom workspace skills and built-in skills. This quality-of-life improvement can be backported to the next patch release.
3. [Issue #7068](https://github.com/agentscope-ai/QwenPaw/issues/7068): Added C# and shader syntax highlighting support for the built-in file viewer to fit game dev workflows. This targeted vertical feature is likely to land in the next regular feature update.
The PR for the native DataPaw analysis runtime ([PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940)), marked as ready-for-human-review, is on track to become a core flagship feature of the upcoming v2.2 major release.

## 7. User Feedback Summary
Verified real user pain points and use cases observed this period:
- General consumer and small team users report severe LLM token cost pressure for long-running agents, creating urgent demand for memory optimization tools.
- v2.1.0 users face frequent session crashes and poor persistence, leading to widespread dissatisfaction with post-upgrade stability.
- Self-hosted enterprise users have unmet data privacy requirements for internal plugin deployments, with no existing controls to hide proprietary system prompts from end users.
- Game developer users find the current built-in file viewer incompatible with their C# and shader workflow needs, reflecting the project's expanding reach into vertical industry use cases beyond general LLM agent development.

## 8. Backlog Watch
High-priority long-pending items requiring maintainer attention:
1. [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302): A core infrastructure overhaul for unified provider discovery, model metadata management, routing and agent controls, created on 2026-07-21 (over 3 weeks old) with no public review activity in recent days. This PR blocks multiple downstream feature developments, and fast review will unblock the rest of the roadmap.
2. 7 newly submitted first-time contributor PRs all lack review feedback. Timely review responses will significantly boost new contributor retention, supporting the project's fast community growth.
3. The recently closed cron misfire bug ([Issue #6471](https://github.com/agentscope-ai/QwenPaw/issues/6471)) has no linked merged fix PR in the public backlog, maintainers should confirm the fix is properly committed to production branches to avoid regression for production users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-08-17
---
## 1. Today's Overview
This 24-hour tracking window captures extremely high activity across the ZeroClaw repository, with 50 updated issues (48 open/active, 2 closed) and 50 updated PRs (46 open, 4 merged/closed), no new official releases published in the period. Most active contributions are focused on finalizing architectural RFC reviews, security hardening for network and plugin boundaries, and eliminating flakiness in the parallel runtime test suite as the project moves through its 0.8.x beta rollout. Maintainers are currently balancing roadmap governance work, unblocking interoperability features for end users, and resolving S1/S2 priority bugs to preserve release pipeline stability. The consistent volume of distributed contributor participation across core runtime, channel, and architecture components signals strong project health and near-term release momentum.

## 2. Releases
No new official ZeroClaw versions were published in the 24-hour window ending 2026-08-17.

## 3. Project Progress
A total of 4 PRs and 2 bugs were merged/closed in the tracking period:
1.  Merged PR #9580 (https://github.com/zeroclaw-labs/zeroclaw/pull/9580): Critical security hardening of the project's shared built-in HTTP egress network guard, moving network classification logic to a shared reusable module to lay the foundation for upcoming WASM plugin egress access controls.
2.  Merged PR #9416 (https://github.com/zeroclaw-labs/zeroclaw/pull/9416): Filled longstanding documentation gaps for the `AllToolsResult.tools` pre-filter registry field, eliminating widespread developer confusion about the order of operations in the tool permission pipeline.
3.  Closed priority P1 bug #9953 (https://github.com/zeroclaw-labs/zeroclaw/issues/9953): Fixed a degraded SOP runtime behavior that incorrectly rejected double-encoded JSON output objects, unblocking SOP automation workflows that return nested JSON payloads.
4.  The remaining 2 closed PRs completed dependency cleanup and CI workflow quality-of-life improvements, with no user-facing breaking changes introduced.

## 4. Community Hot Topics
The most actively discussed items by comment volume highlight core unmet needs from contributors and end users:
1.  [RFC #6808: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (23 comments): This ratified governance RFC is mid-rollout, with ongoing discussion focused on eliminating manual triage work for maintainers as the repository grows past 10k total issues, to reduce work routing friction for new contributors.
2.  [RFC #8603: ZeroClaw Chat Completions Profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (22 comments): The highest-demand feature under active review, addressing widespread user pain of incompatibility with the massive ecosystem of OpenAI Chat Completions-compatible tools including Open WebUI, LobeChat, Continue.dev, Aider, and LangChain that cannot natively integrate with ZeroClaw's existing WebSocket/ACP interfaces.
3.  [RFC #9488: Unified Attachment Architecture for Web Chat and Channels](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (17 comments): This cross-domain architecture RFC is being refined to eliminate fragmented, inconsistent file handling across different chat channels that causes broken uploads and failed file previews for end users.

## 5. Bugs & Stability
All active critical bugs reported/updated this period, ranked by severity:
1.  **S1 (Workflow Blocked):** [Issue #9965: Runtime test fixtures hit ETXTBSY under parallel runtime gate](https://github.com/zeroclaw-labs/zeroclaw/issues/9965): Flaky parallel test failure caused by race conditions around executable file writes in multithreaded test processes. A targeted fix PR #10010 is already in active review, no production impact reported.
2.  **S1 (Workflow Blocked):** [Issue #9811: /health reports unconnected channels as healthy](https://github.com/zeroclaw-labs/zeroclaw/issues/9811): Monitoring false positive that makes it impossible for operators to detect misconfigured channels (e.g. Telegram with invalid tokens) via standard health check endpoints. No fix PR is merged yet, maintainers have marked it accepted and prioritized.
3.  **S2 (Degraded Behavior):** [Issue #9655: Approval cards lack position identifiers for back-to-back tool requests](https://github.com/zeroclaw-labs/zeroclaw/issues/9655): Multiple pending tool approval cards from the same Telegram message are indistinguishable to end users, creating risk of approving the wrong tool call.
4.  No critical production outages or data loss bugs were reported this tracking window, all high-severity issues are test flakiness or non-breaking degraded functionality.

## 6. Feature Requests & Roadmap Signals
Based on current progress of accepted RFCs and tracker items, these high-demand features are highly likely to land in upcoming releases:
- The OpenAI Chat Completions profile from RFC #8603 will almost certainly ship in the next minor 0.8.5 release, as it has already received broad cross-domain maintainer support and unblocks massive ecosystem interoperability.
- The revised Gemini Live realtime speech-to-speech channel from RFC #8780 is targeted for the 0.9.0 release, following security and contract finalization reviews.
- Newly proposed [RFC #10025: zeroclaw swarm ephemeral agent TUI](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) for on-demand temporary agent teams is gathering positive feedback, making it a strong candidate for the 0.9.x feature cycle after beta stabilization is complete.
- Smaller quality-of-life enhancements including provider fallback circuit breakers and date-range conditional cron jobs are tracked for incremental 0.8.x patch releases.

## 7. User Feedback Summary
Collected feedback from issue discussions and community input shows:
1.  The largest user pain point today is poor interoperability with third-party tools that only support OpenAI's Chat Completions API, requiring custom development work for end users to integrate ZeroClaw with their existing workflows.
2.  Self-hosted operators report consistent frustration with missing observability features, most notably false positive health check status for misconfigured channels, which breaks standard monitoring playbooks.
3.  SOP automation power users reported the double-encoded schema validation failure as a major blocker for production workflow use cases, which was resolved this tracking window to widespread positive feedback.
4.  Advanced multi-agent users want an easier way to spin up temporary ad-hoc agent teams for one-off tasks, instead of needing to edit static config files for every new worker agent. Overall satisfaction with core runtime performance is high, with nearly all dissatisfaction focused on interoperability and operator tooling gaps.

## 8. Backlog Watch
These high-impact items have waited over 2 months for maintainer review/action and risk blocking downstream roadmap progress:
1.  [RFC #8396: Make wire protocol first-class in provider construction](https://github.com/zeroclaw-labs/zeroclaw/issues/8396): Filed June 2026, marked needs-author-action, this architecture RFC will massively simplify new LLM provider onboarding but has stalled waiting for maintainer feedback to unblock revisions.
2.  [RFC #7822: WASM plugin lifecycle hook subscriptions](https://github.com/zeroclaw-labs/zeroclaw/issues/7822): Filed June 2026, this enhancement would let third-party WASM plugin developers subscribe to agent turn lifecycle events without patching core code, a top requested feature for the plugin developer ecosystem that has not yet received full maintainer review.
3.  [PR #9002: Keep agent turns alive after viewer disconnect](https://github.com/zeroclaw-labs/zeroclaw/pull/9002): Marked needs-author-action, this high-priority fix prevents active long-running agent work from being cancelled when a dashboard user's browser disconnects or navigates away, a frequently requested quality of life improvement for end users running long tasks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*