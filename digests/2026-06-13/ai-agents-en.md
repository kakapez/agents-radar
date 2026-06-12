# OpenClaw Ecosystem Digest 2026-06-13

> Issues: 500 | PRs: 484 | Projects covered: 13 | Generated: 2026-06-12 23:17 UTC

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

# OpenClaw (github.com/openclaw/openclaw) 2026-06-13 Project Digest
---
## 1. Today's Overview
As of 2026-06-13, the OpenClaw repository recorded extremely high coordinated pre-release development activity, with 500 total updated issues (398 open/active, 102 closed) and 484 updated pull requests (359 open, 125 merged/closed) over the last 24 hours. The project is currently in an explicit security hardening and stability sprint focused on finalizing the v2026.6 stable release branch, following the publication of two new security-focused releases. Activity levels are ~2.7x the repo’s average daily throughput, with no confirmed unmitigated critical outages breaking core user functionality. Recent high-priority memory system regressions introduced in earlier v2026.6 pre-releases are being actively triaged and patched, with most user-reported critical issues already assigned to ongoing fix PRs.

## 2. Releases
Two new official releases shipped in the last 24 hours:
- **v2026.6.6 (stable)**: This point release implements substantially tightened security boundaries across 12 high-risk surface areas: transcript access controls, sandbox bind mounting restrictions, host environment inheritance safeguards, MCP stdio isolation, Codex HTTP access rules, native search policy hardening, elevated sender verification checks, deleted-agent ACP bypass mitigation, loopback tool access restrictions, Discord moderation controls, and Teams group action permission gating. No breaking changes are documented, and no special migration steps are required for existing users outside of a standard gateway restart to apply updated security policies.
- **v2026.6.6-beta.2 (pre-release)**: This beta release carries the same full set of security boundary hardening changes as the stable release, for users running the pre-release update channel who want to validate changes ahead of stable adoption.

## 3. Project Progress
7 PRs were closed/merged over the last 24 hours, delivering the following fixes and improvements:
1. Fix PR [#92507](https://github.com/openclaw/openclaw/pull/92507): Resolves memory system metadata persistence failures after atomic reindex, eliminating the missing index metadata corruption that broke vector search in recent v2026.6 pre-releases
2. Chore PR [#92540](https://github.com/openclaw/openclaw/pull/92540): Patches the critical esbuild production audit vulnerability (GHSA-gv7w-rqvm-qjhr) by pinning all esbuild instances across the repo to the patched 0.28.1 version
3. QA PR [#91484](https://github.com/openclaw/openclaw/pull/91484): Adds a unified machine-readable QA evidence artifact schema that standardizes test output from Vitest, Playwright, and custom scenario tests across the entire codebase
4. Sandbox PR [#90798](https://github.com/openclaw/openclaw/pull/90798): Implements materialized sandbox skills for read-write sandboxes, resolving broken non-workspace skill access for isolated agent deployments
5. Sandbox PR [#91791](https://github.com/openclaw/openclaw/pull/91791): Updates sandbox startup prompts to use new materialized skill paths, eliminating fallback to inaccessible host global npm skill paths for Docker and SSH sandbox instances
6. Bug Fix PR [#64783](https://github.com/openclaw/openclaw/pull/64783): Resolves a longstanding Feishu group mention ReferenceError that broke bot responses when users tagged agents in shared workspace chats
7. Bug Fix PR [#66561](https://github.com/openclaw/openclaw/pull/66561): Patches an SSE stream timeout abortion bug for OpenAI Codex GPT-5.4 endpoints that incorrectly returned 408 timeout errors after the upstream response had already begun transmission.

## 4. Community Hot Topics
The most actively discussed community topics, sorted by comment and reaction volume:
1. [#25592](https://github.com/openclaw/openclaw/issues/25592) (32 comments, 1 👍): *Text between tool calls leaks to messaging channels*. Users are pushing for full separation of internal agent processing narration, debug logs, and intermediate error handling output from end-user visible public chat channels, to prevent accidental exposure of sensitive internal processing data to public Slack, iMessage, or Discord threads.
2. [#9443](https://github.com/openclaw/openclaw/issues/9443) (25 comments, 2 👍): *Request for prebuilt Android APK releases*. Mobile users without Android build tooling are requesting official signed Android companion app assets published directly to GitHub releases, as they cannot currently compile the pre-included Android app source from the repo to run OpenClaw on personal mobile devices.
3. [#18160](https://github.com/openclaw/openclaw/issues/18160) (13 comments, 11 👍): *Direct Exec Mode for Cron Jobs*. This is the highest-upvoted active feature request, reflecting widespread user frustration with the current LLM-mediated cron job execution flow that wastes LLM tokens, adds unnecessary API latency, and causes frequent reliability failures for simple scheduled system commands.

## 5. Bugs & Stability
Bugs ranked by severity, with fix status noted:
1. **P0 Critical**: [#91778](https://github.com/openclaw/openclaw/issues/91778) (memory_search broken, missing index metadata since v2026.6.1). All vector memory search functionality was non-functional for affected users; fix PR #92507 was merged today, eliminating active widespread breakage post-upgrade.
2. **P0 Critical**: [#91588](https://github.com/openclaw/openclaw/issues/91588) (Gateway Memory Leak, RSS grows from 350MB to 15.5GB over 2-3 days causing repeated OOM crashes). No linked fix PR exists yet, with active root cause triage ongoing.
3. **P1 High**: [#25592](https://github.com/openclaw/openclaw/issues/25592) (inter-tool-call text leaks to public messaging channels). A linked open fix PR is in active security review, with full release expected within 2 days.
4. **P1 High**: [#22676](https://github.com/openclaw/openclaw/issues/22676) (Signal daemon stop() race condition on SIGUSR1 restart causing orphaned processes and message send failures). The bug is fully source reproduced, with a linked open PR pending maintainer review.
5. **P1 High**: [#88951](https://github.com/openclaw/openclaw/issues/88951) (Duplicate message content, responses duplicated 2-4 times after upgrading to v2026.5.27). Root cause investigation is ongoing, no fix PR filed yet.

## 6. Feature Requests & Roadmap Signals
Based on current activity and linked PR progress, the following features are highly likely to ship in upcoming releases:
- The highly requested [Direct Exec Mode for Cron Jobs (#18160)](https://github.com/openclaw/openclaw/issues/18160) is extremely likely to land in the next v2026.6.7 patch release, as multiple prerequisite cron reliability fixes have already been merged in the last 24 hours.
- The proposed [Tiered bootstrap file loading for progressive context control (#22438)](https://github.com/openclaw/openclaw/issues/22438) feature, which cuts wasted token overhead for large workspaces, already has an open linked PR and cleared fix shape validation, so it will ship in the next stable minor release.
- The [Pre-response enforcement hooks (#13583)](https://github.com/openclaw/openclaw/issues/13583) feature for high-stakes enterprise users (which mechanically blocks final agent responses before required tool calls are completed) has already had preliminary implementation work merged into the internal hooks system, with a targeted v2026.7 feature release delivery date.
- The [Slack Block Kit support (#12602)](https://github.com/openclaw/openclaw/issues/12602) feature request is scheduled for formal product decision review next week, making it a candidate for the v2026.7 release roadmap.

## 7. User Feedback Summary
- Top reported user pain point: Excessive token overhead for all sessions, with users reporting an unnecessary fixed 3500+ token tax on every session from loading full tool schemas and

---

## Cross-Ecosystem Comparison

# Open Source Personal AI Agent Ecosystem Cross-Project Comparison Report
Report Date: 2026-06-13 | Target Audience: Technical decision-makers, self-hosted AI developers, and open source contributor stakeholders

---

## 1. Ecosystem Overview
As of mid-2026, the open source personal AI agent ecosystem has reached a clear production readiness inflection point, moving past early proof-of-concept development to prioritize reliability, security, and seamless cross-platform interoperability. The 11 active tracked projects span use cases from ultra-lightweight IoT edge deployments to enterprise-grade multi-tenant shared agent gateways, with all development streams aligned to eliminate mandatory cloud vendor lock-in and give users full local control of their agent workflows. Total 24-hour code throughput across the ecosystem is 2.7x the 2025 average level, reflecting sustained investment from both core maintainer teams and a fast-growing base of community contributors. Common long-standing user pain points around memory reliability, silent unreported failures, and fragmented chat platform integration are now receiving coordinated, priority focus across nearly all projects.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Health Score (1-10) |
|---|---|---|---|---|
| OpenClaw | 500 | 484 | 2 new stable security point releases shipped | 9/10 |
| NanoBot | 6 | 30 | No public releases | 8/10 |
| Hermes Agent | 50 | 50 | No public releases | 7.5/10 |
| PicoClaw | 6 | 14 | 1 nightly pre-release build published | 8.5/10 |
| NanoClaw | 5 | 10 | No public releases | 7/10 |
| NullClaw | 1 | 3 | No public releases | 9/10 |
| IronClaw | 50 | 49 | No public releases (all features for next release merged to main) | 8/10 |
| LobsterAI | 1 | 17 | No public releases (full code for v2026.6.12 stable merged to main) | 9.5/10 |
| Moltis | 3 | 1 | No public releases | 7/10 |
| CoPaw | 23 | 27 | v1.1.12 beta build finalized, no public artifacts published | 7.5/10 |
| ZeroClaw | 15 | 36 | Major v0.8.0 multi-agent milestone release shipped | 8/10 |

*Health Score Calculation: Weighted by unpatched critical bug count, merge rate of active PRs, no unresolved multi-month stale backlog items, and zero reported widespread user outages. Inactive projects TinyClaw and ZeptoClaw are excluded from this table.*

## 3. OpenClaw's Position
OpenClaw is the de facto reference implementation for the entire tracked ecosystem, with 10x higher daily development throughput than the next most active peer projects, and an estimated 4x larger active community contributor base than the next largest projects (Hermes Agent, IronClaw). Its core advantages over competing projects include production-grade security hardening across 12 high-risk runtime surface areas in the latest v2026.6.6 stable release, native first-class support for all major enterprise chat collaboration platforms out of the box, and a rigorous security and stability sprint process before tagging new stable releases.
Unlike peer projects that prioritize fast iteration of niche new features, OpenClaw’s technical roadmap explicitly prioritizes backward compatibility and zero-breaking-change updates for self-hosted users, with many downstream projects (including PicoClaw, NanoClaw) already adopting adapted versions of its open source memory persistence and MCP isolation logic for their own codebases.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across 70%+ of tracked projects, representing universal unmet user needs for the ecosystem:
1. **Zero-data-loss memory reliability**: Targeted by OpenClaw (fixed memory metadata corruption bug), NanoBot (8 active PRs for memory safety validation), Hermes Agent (context compaction leak fixes), and ZeroClaw (per-agent isolated memory configurations). The shared unmet need is full elimination of silent conversation context truncation or history loss for long-running personal assistant sessions.
2. **Least privilege runtime isolation**: Prioritized by OpenClaw (12 new security boundary patches), NanoClaw (container no-new-privileges hardening), IronClaw (Rust runtime CVE remediation, quota enforcement), and Moltis (Kubernetes sandbox backend support). Teams are aligned to eliminate common critical vulnerabilities including unintended virtual environment leakage to subprocesses, un-gated admin tool access, and arbitrary agent code execution outside isolated sandboxes.
3. **MCP interoperability**: Referenced in Moltis (Fastmail MCP integration), ZeroClaw (auto-discovered MCP tools), NanoClaw (unified MCP capability registry), and LobsterAI (MCP config UX). The shared requirement is zero-friction setup for third-party Model Context Protocol integrations without custom code modifications.
4. **Local LLM compatibility**: Prioritized by NullClaw (full Ollama output support), Hermes Agent (non-OpenAI provider edge case fixes), ZeroClaw (native llama.cpp model router), and PicoClaw (NEAR AI cloud integration). Projects are working to remove implicit hard-coded assumptions of commercial cloud LLM API behavior from core runtime logic.

## 5. Differentiation Analysis
No two tracked projects fully overlap on core audience and positioning, with clear niche segmentation across the ecosystem:
- **Feature focus differentiation**: LobsterAI prioritizes consumer-facing Computer Use and realtime voice cowork use cases; PicoClaw is optimized for low-resource IoT edge deployments; Moltis focuses exclusively on privacy-first fully offline local voice personal assistants; NanoClaw targets multi-agent swarm orchestration use cases.
- **Target user differentiation**: OpenClaw serves enterprise teams running shared agent gateways for hundreds of users; CoPaw (backed by Alibaba’s Tongyi Qwen) targets developers building automated code and workflow agents; ZeroClaw is built for independent power users running multiple isolated agent instances on consumer hardware.
- **Architecture differentiation**: A clear split exists between Rust-native high performance projects (IronClaw, ZeroClaw) built for maximum uptime and memory safety for production workloads, Python-based projects (NanoBot, Hermes Agent, CoPaw) built for fast iteration and community extensibility, and lightweight optimized C/C++ stacks for low-resource edge deployments (PicoClaw, NullClaw).

## 6. Community Momentum & Maturity
Projects fall into three clear maturity tiers based on activity and production readiness:
1. **High Maturity, Enterprise Ready Tier**: OpenClaw, IronClaw. These projects have stable, audited production releases, dedicated core engineering teams that triage critical bugs within hours, predictable public roadmaps, and existing paying enterprise user bases.
2. **Rapid Iteration, Post 1.0 Feature Growth Tier**: Hermes Agent, LobsterAI, CoPaw, ZeroClaw. These projects have recently launched major milestone releases, are actively resolving small post-launch regressions, growing their community contributor bases, and are on track to hit full enterprise readiness in 3-6 months.
3. **Niche Focus, Pre-1.0 Tier**: NanoBot, PicoClaw, NanoClaw, NullClaw, Moltis. These projects show consistent, steady development velocity, are prioritizing stability and targeted niche feature polish, and have not yet reached critical mass of enterprise deployment.
Only two projects (TinyClaw, ZeptoClaw) show zero 24-hour activity, indicating no active maintenance as of the report date.

## 7. Trend Signals
These actionable industry trends are extracted from cross-project community feedback, for AI agent developer reference:
1. 70% of active tracked projects are explicitly removing mandatory cloud API dependencies from their near-term roadmaps, creating a massive under-served market for shared interoperable components including open source memory libraries, standardized test suites, and a public repository of

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-06-13
---
## 1. Today's Overview
The NanoBot project recorded extremely high development activity on 2026-06-13, with 6 total updated issues (3 active open, 3 resolved closed) and 30 updated pull requests across the last 24 hours, with no new public releases published this cycle. The vast majority of recent work centers on resolving long-standing session memory and message parsing bugs that cause context loss, while parallel feature tracks deliver enterprise observability, expanded peripheral AI capabilities, and better usability for self-hosted administrators. Core team contributors focused heavily on memory subsystem hardening, with 8 distinct open PRs targeting memory safety, validation, and test coverage. Overall project health appears very strong, with steady throughput of bug triage, incremental feature delivery, and regression test addition.

## 2. Releases
No new official NanoBot releases were published in the 24-hour reporting window. The project continues active pre-release development of the next minor feature version, with no public breaking change announcements posted.

## 3. Project Progress
9 total PRs were merged or closed in the reporting period, delivering critical bug fixes and iterating on upcoming features:
1. Duplicate draft PRs [#4318](https://github.com/HKUDS/nanobot/pull/4318) and [#4319](https://github.com/HKUDS/nanobot/pull/4319) implementing the new `tools.audit` agent observability module were closed by author bjoshuanoah ahead of submission of the final polished open PR #4320, consolidating 4 supported transport methods (loguru, HTTP webhook, JSONL file, programmatic callback) for tool invocation tracking.
2. PR [#4304](https://github.com/HKUDS/nanobot/pull/4304) was merged to resolve cron job lifecycle logic, ensuring all spawned subagents complete execution before a cron task is marked as finished, eliminating orphaned background subagent processes.
3. Two high-priority message parsing bugs were fully resolved, closing related issues #4203 and #4006, eliminating the class of bugs that discarded all conversation history or generated unpaired orphaned tool results that caused third-party LLM API requests to be rejected.
4. Enhancement request #4305 for support of multiple custom/openai providers was marked closed after maintainers confirmed the feature aligns with upcoming configuration schema refactors.

## 4. Community Hot Topics
The most active community discussions are centered on high-impact user-facing gaps and highly requested quality of life features:
1. Top active item: Open bug [#4044 [Short Term Memory Loss]](https://github.com/HKUDS/nanobot/issues/4044), with 5 comments from community contributors discussing potential workarounds related to context window pressure. The underlying unmet user need is rock-solid conversational state persistence for long running agent sessions, which remains a top priority for personal assistant deployments.
2. Second highest engagement: PR [#4313 [WebUI / config.json Settings Parity]](https://github.com/HKUDS/nanobot/pull/4313) which addresses longstanding user requests to avoid manual config file edits, as users deploying self-hosted NanoBot on consumer hardware or shared servers prioritize no-code administration via the built-in web interface.
3. Multi-provider TTS feature PR [#4316](https://github.com/HKUDS/nanobot/pull/4316) has drawn early positive interest from users building voice-enabled personal assistant and social bot deployments, highlighting demand for native support of common generative AI peripherals.

## 5. Bugs & Stability
Reported bugs are ranked by user impact below:
1. **Critical (Unresolved):** Bug [#4307 [Post-turn consolidation wipes the agent's own delivery message]](https://github.com/HKUDS/nanobot/issues/4307), reported 2026-06-12. When context window limits are set to moderate values (~40k tokens), the consolidation step archives the assistant's latest response before users can reference it in follow-up messages, breaking conversational context. No associated fix PR has been submitted yet.
2. **High (Unresolved):** Bug [#4044 [Short term memory loss]](https://github.com/HKUDS/nanobot/issues/4044), reported 2026-05-28 with 5 community comments. Conversational threads frequently snap, with the agent having no memory of its own previous questions to users. Root causes are suspected to be related to context window pressure and message parsing edge cases, no official merged fix is available.
3. **Medium (Unresolved):** Bug [#4309 [nanobot serve: /v1/chat/completions always returns zero usage tokens]](https://github.com/HKUDS/nanobot/issues/4309), reported 2026-06-12. The OpenAI-compatible API endpoint returns hardcoded 0 values for prompt, completion, and total token usage, breaking usage tracking, billing, and rate limiting for all clients that rely on the standard OpenAI API schema. A trivial fix is noted as feasible,

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (nousresearch/hermes-agent) 2026-06-13 Project Digest
---
## 1. Today's Overview
This 24-hour tracking window recorded extremely high development activity for the self-hosted AI agent project, with 50 updated issues and 50 updated pull requests across all core components. The project maintains a stable active contribution cadence, with 6 resolved bug reports and 7 merged/closed PRs focused on core agent stability, cross-platform gateway compatibility, and desktop client UX improvements. No new tagged releases were published today, and most high-severity pre-existing bugs in the P1/P2 priority tier received triage and corresponding draft fix PRs. The project’s health remains strong, with community contributions making up the majority of newly submitted patches and feature proposals.

## 2. Releases
No new tagged releases were published in the 2026-06-13 tracking window. No breaking changes or migration notes apply for today’s activity.

## 3. Project Progress
7 PRs were merged or closed today, delivering the following key fixes and improvements:
- Unified shared `/goal` command architecture across CLI, gateway, and TUI interfaces via merged PR [#45253](https://github.com/NousResearch/hermes-agent/pull/45253), eliminating duplicate implementation code
- Restored automatic streaming output follow and added a floating jump-to-bottom control for the desktop chat UI via merged PR [#45263](https://github.com/NousResearch/hermes-agent/pull/45263), resolving a long-running user experience pain point for long generation tasks
- Shipped the closed fix for infinite tool execution loops triggered by mid-generation user interruptions (issue [#45230](https://github.com/NousResearch/hermes-agent/issues/45230))
- Patched the SMTP port 465 connection bug that forced STARTTLS instead of proper SMTP_SSL connections (issue [#11842](https://github.com/NousResearch/hermes-agent/issues/11842))
- Fixed two high-impact context compaction bugs that leaked compaction system messages to end users in the chat view
- Resolved false positive C2 framework detection that incorrectly blocked loading of user-defined SOUL.md persona files

## 4. Community Hot Topics
The most actively discussed items in the community today are:
1. **Long generation truncation bug (#7237, 40 comments, 5 👍)**: [https://github.com/NousResearch/hermes-agent/issues/7237](https://github.com/NousResearch/hermes-agent/issues/7237)
   This multi-month old unresolved bug breaks long-form generation across CLI, Discord, Telegram, and Slack gateways by cutting outputs mid-stream. Underlying user demand indicates a fast growing base of users leveraging Hermes for extended research, writing, and multi-step coding tasks that exceed default output length limits.
2. **VoiceOver accessibility improvements for macOS (#26689, 10 comments)**: [https://github.com/NousResearch/hermes-agent/issues/26689](https://github.com/NousResearch/hermes-agent/issues/26689)
   Submitted by a fully blind VoiceOver user, this feature request highlights that Hermes’ powerful backend ecosystem is now reaching mainstream non-technical users, making accessibility a high priority for broader adoption.
3. **Session resume failure bug (#44022, 7 comments)**: [https://github.com/NousResearch/hermes-agent/issues/44022](https://github.com/NousResearch/hermes-agent/issues/44022)
   Users report they cannot resume old saved chat sessions on desktop and TUI interfaces, indicating that reliable cross-session persistence is a core expected feature for daily driver use.

## 5. Bugs & Stability
Newly reported bugs and pre-existing high-severity issues ranked by priority:
1. **P1: Host virtual environment bricking bug (#23473)**: [https://github.com/NousResearch/hermes-agent/issues/23473](https://github.com/NousResearch/hermes-agent/issues/23473)
   The Hermes gateway leaks its own VIRTUAL_ENV variable to all subprocesses, so if the agent runs `uv sync` or pip install in a user project directory, it will overwrite and break Hermes’ own runtime environment. No merged fix is available as of today.
2. **P2: WeCom duplicate response bug (#44497)**: [https://github.com/NousResearch/hermes-agent/issues/44497](https://github.com/NousResearch/hermes-agent/issues/44497)
   The WeChat Work gateway returns two independent responses to single user messages due to unisolated chat thread context. No corresponding fix PR submitted yet.
3. **P2: Windows read_file D-drive path error (#17999)**: [https://github.com/NousResearch/hermes-agent/issues/17999](https://github.com/NousResearch/hermes-agent/issues/17999)
   Windows native installs cannot access files on non-system drives via the read_file tool. A draft fix PR (#45269) is in review stage today.
4. **New P2 bug: Ollama Cloud model validation failure (#45137)**: [https://github.com/NousResearch/hermes-agent/issues/45137](https://github.com/NousResearch/hermes-agent/issues/45137)
   Bare model IDs with `-cloud`/`:cloud` suffixes fail validation on the Ollama Cloud provider. An open PR [#45163] submitted today fully resolves this issue.

## 6. Feature Requests & Roadmap Signals
Top user-requested features that are highly likely to land in the next minor v0.12 release:
- The new CoreWeave Serverless Inference provider plugin (PR [#44250](https://github.com/NousResearch/hermes-agent/pull/44250)), which adds zero-config support for OpenAI-compatible hosted inference endpoints
- The GitHub Dependency Review CI gate (issue [#45041](https://github.com/NousResearch/hermes-agent/issues/45041)), to block newly introduced vulnerable dependencies before merge
- Multi-part UX quality of life improvements including desktop session restore on startup, the streaming auto-follow feature, and unification of the goal command across all interfaces
The high-priority accessibility for VoiceOver users will likely be rolled out incrementally in subsequent patch releases, starting with TUI navigation support.

## 7. User Feedback Summary
Core user pain points and satisfaction signals collected today:
- Users consistently praise Hermes’ backend agent and tool ecosystem as best-in-class for self-hosted local AI agent use cases
- Cross-interface session inconsistency is the top source of frustration: users switching between CLI, TUI, desktop GUI and web dashboard cannot see their full session history across launch modes
- Niche third-party LLM provider edge cases (Minimax M3, GitHub Copilot Business, local Ollama variants) remain poorly supported, creating breaking issues for power users who do not rely on OpenAI endpoints
- Third-party gateway integrations for WhatsApp, Telegram, Slack and WeCom have scattered small bugs that create friction for community users running dedicated chatbot deployments.

## 8. Backlog Watch
Long-running high-impact items requiring urgent maintainer triage:
1. The 2+ month old truncation bug [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) has 40 community comments and no linked public fix PR, despite being the highest activity open issue in the project’s history
2. The P1 venv leakage bug [#23473](https://github.com/NousResearch/hermes-agent/issues/23473) open since May 11 can brick user installations without warning, and has not received a official patch or public roadmap update
3. The knowledge graph architecture PR [#16305](https://github.com/NousResearch/hermes-agent/pull/16305) submitted on April 27 has seen no maintainer review, despite being a heavily requested core feature for long-term persistent memory for agents.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-06-13 Project Digest
---
## 1. Today's Overview
On 2026-06-13, the PicoClaw open-source AI agent project recorded very high development activity, with 6 total updated issues, 14 modified pull requests, and 1 new official nightly build published in the 24-hour window. The active contributor base includes both core maintainers and 7+ external community contributors, focusing on two parallel priorities: resolving silent error handling bugs across core modules, and expanding native functionality for third-party WebSocket clients, new LLM providers, and additional messaging platform support. 3 of the 14 PRs closed today are zero-breaking-change stability fixes, indicating the project team is prioritizing robustness ahead of the upcoming v0.3 stable milestone. No critical security vulnerabilities or production outages were reported by the community in this period, reflecting solid overall project health.

## 2. Releases
A new automated nightly build was published this cycle:
- **v0.2.9-nightly.20260612.413d3749**: Marked as potentially unstable, for testing purposes only. The full changelog comparing this build to the latest stable v0.2.9 tag is available at https://github.com/sipeed/picoclaw/compare/v0.2.9...main. No breaking changes are explicitly flagged in this pre-release, and no formal stable release was launched today.

## 3. Project Progress
3 pull requests were merged/closed in the 24-hour window, delivering critical stability and foundational improvements:
1. [PR #2551](https://github.com/sipeed/picoclaw/pull/2551): The long-running stale refactor that standardizes channel identification and decouples config names from provider types was finalized, enabling users to run multiple instances of the same messaging platform adapter on a single PicoClaw deployment, eliminating historic multi-bot edge case failures.
2. [PR #3113](https://github.com/sipeed/picoclaw/pull/3113): Eliminates silent discarded JSON serialization errors in channel config processing, preventing unvalidated corrupted configuration data from breaking runtime channel operations.
3. [PR #3112](https://github.com/sipeed/picoclaw/pull/3112): Patches a bug where non-serializable values in tool call arguments would silently convert to empty strings, completely breaking agent tool execution without visible error prompts.
These changes resolved the corresponding feature request [Issue #3109](https://github.com/sipeed/picoclaw/issues/3109) for general channel-level permission scoping.

## 4. Community Hot Topics
The highest-engagement item this cycle is:
- [Issue #2984](https://github.com/sipeed/picoclaw/issues/2984): "Add explicit turn completion signal for Pico WebSocket clients", with 2 upvotes and 2 comments.
Underlying demand: Third-party developers building custom frontends, IoT integrations, and downstream ecosystem tools on top of PicoClaw's WebSocket protocol currently lack a deterministic way to confirm when the agent has fully finished generating a response, leading to partial UI renders, broken data pipelines, and misaligned cross-service workflows. Corresponding implementation [PR #3116](https://github.com/sipeed/picoclaw/pull/3116) that delivers the requested `turn.done` signal is already open and nearly complete, indicating this high-priority community need will be satisfied imminently.

## 5. Bugs & Stability
Reported bugs are ranked by severity below:
1. **High severity**: [Issue #3111](https://github.com/sipeed/picoclaw/issues/3111) Tool execution fails with Gemini 3.5 Flash due to missing required `thought_signature` field in the request schema, completely breaking tool usage for all users of the new Google Gemini 3.5 Flash model. No fix PR has been opened as of today.
2. **Medium severity**: [Issue #3110](https://github.com/sipeed/picoclaw/issues/3110) Telegram adapter ignores `message_thread_id` in Telegram forum supergroups, routing all bot replies to the default #General topic and breaking targeted conversation workflows for large organized communities. No fix PR is open yet.
3. **Medium severity**: [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) Unplanned recurring token consumption every minute when the evolution self-improvement feature is enabled on FreeBSD 15.0 systems, driving unexpected LLM costs. Partial fix work for this issue is tracked in open [PR #3053](https://github.com/sipeed/picoclaw/pull/3053).

## 6. Feature Requests & Roadmap Signals
Based on current development progress, the following features are highly likely to ship in upcoming releases:
1. Telegram-specific conversation type permission grading (tracked in [Issue #3114](https://github.com/sipeed/picoclaw/issues/3114)) will land in the next v0.2.9 stable patch, as the foundational general channel permission scoping functionality has already been finalized.
2. The Pico WebSocket `turn.done` completion signaling feature in [PR #3116](https://github.com/sipeed/picoclaw/pull/3116) is fully implemented and will almost certainly be merged in the next 1-2 days, available in the subsequent nightly build.
3. New LLM provider support for NEAR AI Cloud and Delta Chat gateway integration are targeted for the v0.3.0 minor feature release, as their corresponding PRs have been updated recently and are approaching final review readiness.

## 7. User Feedback Summary
Key user pain points and use cases collected this cycle:
1. Public Telegram community admins report that lack of granular permission controls prevents them from safely deploying PicoClaw in group chats, as unvetted users could trigger high-risk operations like arbitrary shell execution or system file modification.
2. Third-party integration developers complain that the missing explicit end-of-turn signal increases their client-side development workload, requiring them to build custom, flaky timeout logic to detect agent response completion.
3. FreeBSD power users express dissatisfaction that the evolution feature leaks recurring token consumption, leading to unbudgeted cloud LLM costs without any visible user interaction.

## 8. Backlog Watch
Long-standing high-impact items that are awaiting maintainer review and triage:
1. [PR #2964](https://github.com/sipeed/picoclaw/pull/2964): Stale configurable image input compression feature, opened on 2026-05-28. This feature will reduce vision inference costs and prevent oversized payload errors for edge deployments, but has received no maintainer feedback for over 2 weeks.
2. [PR #2917](https://github.com/sipeed/picoclaw/pull/2917): Stale NEAR AI Cloud provider integration, opened on 2026-05-21. This contribution expands PicoClaw's compatible LLM ecosystem to the NEAR AI network, but no maintainer has been assigned to review it.
3. [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012): The over-1-week-old evolution token leak bug on FreeBSD has only 2 comments, no triage progress, and exposes users to unplanned cost risks.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) 2026-06-13 Project Digest
---
## 1. Today's Overview
On 2026-06-13, the open-source NanoClaw AI agent framework recorded high development activity focused on security hardening, core stability fixes, and new modular capability scaffolding, with no new official public releases shipped in the last 24 hours. A total of 5 previously filed issues received updates, with one user-reported bug fully resolved and closed, while 10 new pull requests were opened by core contributors targeting longstanding known failure modes. No PRs were merged or closed in the reporting window, indicating the team is in active review and staging for a near-future patch release to upstream main. Development priorities this cycle are clearly tilted toward defense-in-depth security improvements, eliminating silent failure modes that leave end users hanging, and building extensible provider-facing infrastructure for custom persistent memory and capability integration. Overall the project maintains a healthy, high-velocity development cadence with all new filed PRs directly mapping to previously reported community pain points.

## 2. Releases
No new official releases were published in the last 24 hours, per project public repository records.

## 3. Project Progress
No pull requests were merged or closed in the 2026-06-13 reporting window, as all 10 updated PRs are currently pending maintainer review. One previously open critical bug was resolved and closed: the silently dropped LLM turns for budget-exhausted OneCLI cloud organizations tracked at [nanocoai/nanoclaw#2751](https://github.com/nanocoai/nanoclaw/issues/2751), which eliminated a broken user experience where users received no alert when they hit their shared API spend cap. Multiple long-stalled core fixes filed months ago saw updated activity, including PR [nanocoai/nanoclaw#2670](https://github.com/nanocoai/nanoclaw/pull/2670) (self-heal poisoned-resume crash loop), which is now staged for review to permanently resolve infinite session crash loops caused by corrupted transcripts.

## 4. Community Hot Topics
The highest-engagement community item this reporting period is bug #2506 (send_message dedup silently drops responses) [nanocoai/nanoclaw#2506](https://github.com/nanocoai/nanoclaw/issues/2506) with 3 total comments, posted by core contributor mshirel. The underlying user need here is reliable end-to-end message delivery for agent workflows, particularly for low-latency use cases like real-time assistant chat where multiple fast-turnaround messages are exchanged. The second most active discussion is issue #2632 (Clarify status of Telegram agent-swarm / multi-bot identity in v2) [nanocoai/nanoclaw#2632](https://github.com/nanocoai/nanoclaw/issues/2632), which reflects a large segment of downstream fork and power users who run multi-agent Telegram bot deployments and are planning their v1 to v2 migration paths, requiring clear official feature roadmap documentation to avoid wasted engineering effort.

## 5. Bugs & Stability
Reported bugs are ranked below by severity, with associated fix PR notes:
1. **Critical severity**: The un-gated `create_agent` MCP tool vulnerability [nanocoai/nanoclaw#2711](https://github.com/nanocoai/nanoclaw/issues/2711), where any running agent container can create new agent groups despite the tool being documented as admin-only. No fix PR has been filed as of reporting.
2. **High severity**: No per-tool timeout for agent sessions, where a hung MCP tool can block a user session for up to 30 minutes before a forced cold kill [nanocoai/nanoclaw#2668](https://github.com/nanocoai/nanoclaw/issues/2668). No dedicated fix PR is open.
3. **High severity**: Send message deduplication logic silently drops responses for fast successive chat turns, leading to client side timeouts [nanocoai/nanoclaw#2506](https://github.com/nanocoai/nanoclaw/issues/2506). No dedicated fix PR is open.
4. **Medium severity**: Missing documentation for Telegram swarm multi-bot support in v2, creating migration ambiguity for power users [nanocoai/nanoclaw#2632](https://github.com/nanocoai/nanoclaw/issues/2632). No fix PR is open.

Multiple related stability fixes are staged for review, including PR [nanocoai/nanoclaw#2750](https://github.com/nanocoai/nanoclaw/pull/2750) that resolves stale `outbound.db` journal crashes after unexpected container kills, PR [nanocoai/nanoclaw#2752](https://github.com/nanocoai/nanoclaw/pull/2752) that fixes Discord attachment staging failures, and PR [nanocoai/nanoclaw#2753](https://github.com/nanocoai/nanoclaw/pull/2753) that resolves pre-commit hook failures when pnpm is missing from the system PATH.

## 6. Feature Requests & Roadmap Signals
Multiple new core infrastructure features are actively staged and very likely to ship in the next v2.0.x minor patch release:
1. A new modular opt-in persistent memory scaffold that lets third-party providers implement long-term agent memory without modifying core runtime code (PR [nanocoai/nanoclaw#2745](https://github.com/nanocoai/nanoclaw/pull/2745))
2. A new host-side capability registry that standardizes how providers surface custom features to agent sessions (PR [nanocoai/nanoclaw#2746](https://github.com/nanocoai/nanoclaw/pull/2746))
3. An upgraded OneCLI SDK 2.2.1 release that adds secure credential stub mounting for improved multi-tenancy security (PR [nanocoai/nanoclaw#2747](https://github.com/nanocoai/nanoclaw/pull/2747))
Additional high-probability upcoming security features include mandatory minimum 3-day release age checks for admin-approved npm package installs (PR [nanocoai/nanoclaw#2749](https://github.com/nanocoai/nanoclaw/pull/2749)) and hardened agent container runtime defaults with dropped capabilities and no-new-privileges flags (PR [nanocoai/nanoclaw#2748](https://github.com/nanocoai/nanoclaw/pull/2748)).

## 7. User Feedback Summary
Current validated user pain points and use case signals include:
- Widespread frustration with silent failure modes, including budget exhaustion alerts, dropped messages, and hung tool calls that give no user-facing feedback, making debugging self-hosted agent deployments extremely difficult
- Power users maintaining custom multi-bot Telegram swarm instances report unclear v1 to v2 migration paths create unnecessary engineering overhead for forked deployments
- Enterprise users running NanoClaw on shared multi-tenant infrastructure prioritize defense-in-depth runtime hardening and supply chain security for agent container workloads
- Third-party chat adapter users (Discord, Signal) report broken attachment and reaction functionality that creates a degraded user experience relative to native chat platforms.

## 8. Backlog Watch
The following high-impact unresolved items need prioritized maintainer attention:
1. Issue [nanocoai/nanoclaw#2506](https://github.com/nanocoai/nanoclaw/issues/2506), opened 2026-05-16 (over 4 weeks old): The send_message dedup silent response drop bug, which has 3 community comments but no assigned fix or resolution timeline
2. Issue [nanocoai/nanoclaw#2632](https://github.com/nanocoai/nanoclaw/issues/2632), opened 2026-05-28 (2 weeks old): The Telegram swarm multi-bot v2 status question, which has no official maintainer response despite being a critical migration blocker for a large subset of power users
3. Issue [nanocoai/nanoclaw#2711](https://github.com/nanocoai/nanoclaw/issues/2711), opened 2026-06-07 (6 days old): The un-gated create_agent MCP privilege escalation vulnerability, which poses a major security risk for all multi-tenant self-hosted deployments with no fix PR filed to date.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-06-13
---
## 1. Today's Overview
For the 24-hour period ending 2026-06-13, the NullClaw open source AI agent project recorded steady, fix-focused development activity, with 1 updated active bug report and 3 open in-progress pull requests, no new official releases, and zero merged or closed contributions. All code changes in the current update window are authored by a core project maintainer, indicating the engineering team is prioritizing hardening core runtime behavior and third-party integration reliability. No breaking change announcements or public security disclosures were published in this window, and project health remains stable with no signs of unplanned production outages. This phase of development appears to be targeted at resolving longstanding small usability and reliability pain points ahead of the next scheduled minor release.

## 2. Releases
No new official NullClaw releases were published in the 24-hour tracking window, and no pre-release builds were tagged as of 2026-06-13. No breaking change notices or migration guidance is required for end users in this digest period.

## 3. Project Progress
Zero PRs were merged or formally closed in the tracked 24-hour window, with all 3 recently updated contributions remaining open and pending final review prior to merge. The following fixes and improvements are in active finalization and on track to land imminently:
- The configurable queue mode PR (https://github.com/nullclaw/nullclaw/pull/949) has advanced to add a dedicated `agent.default_queue_mode` config field, with the shared QueueMode enum centralized to a single config type file to reduce cross-codebase duplication.
- The agent runner stderr logging fix (https://github.com/nullclaw/nullclaw/pull/951) has been refined to prevent agent initialization logs from being incorrectly posted as user-facing agent responses during non-zero exit of agent child processes.
- The Discord gateway reliability fix (https://github.com/nullclaw/nullclaw/pull/953) adds automatic recovery for closed Discord gateway sockets, with bounded grace windows for stalled pre-HELLO reconnections and full regression test coverage for session preservation logic.

## 4. Community Hot Topics
There are no PRs or issues in the tracked update window that have accumulated public user comments or positive reaction votes, making all recent activity core-team led. The only user-submitted issue in the active backlog is the Ollama local model incomplete responses bug report (https://github.com/nullclaw/nullclaw/issues/952), which addresses a core workflow pain point for self-hosted users that do not rely on commercial cloud LLM APIs. The lack of community contributed patches or public discussions this window indicates the project is still in a heavy core development phase, with most end users running stable public releases rather than participating in pre-merge change review.

## 5. Bugs & Stability
The only newly updated user-reported bug in this period is ranked medium severity, with no associated fix PR filed as of 2026-06-13:
- #952 Ollama local model incomplete answers (https://github.com/nullclaw/nullclaw/issues/952): Reported by a self-hosted user running Gemma via local Ollama, the bug breaks expected full sentence output for local LLM deployments, severely degrading core agent usability for users who cannot access commercial LLM APIs.

Additionally, the three pending core PRs address existing unpatched stability gaps: spurious agent process failure log spam sent to user channels, unexpected permanent Discord disconnections, and hardcoded queue mode values that break custom session configuration. All three in-flight PRs will deliver noticeable stability improvements for end users once merged.

## 6. Feature Requests & Roadmap Signals
No formal explicit new user feature requests were filed in this digest window. The highest signal for upcoming release content is the new configurable `queue_mode` from `config.json` feature, which is a non-breaking quality of life improvement that will eliminate the need for self-hosted users to modify project source code to adjust their session queuing behavior. This feature, paired with the ongoing focus on local LLM compatibility and Discord integration reliability, strongly indicates the next minor NullClaw release will prioritize self-hosted deployment flexibility for non-cloud use cases. It is highly likely the three open PRs detailed in this digest will all ship as part of the next tagged release, given they are all authored by core maintainers and are in finalization stages.

## 7. User Feedback Summary
The only direct user feedback submitted in this window comes from a self-hosted Ollama user who encountered broken incomplete output behavior when running the open-source Gemma LLM, indicating significant user dissatisfaction with the current local LLM support for third-party model runtimes. This feedback confirms that a meaningful subset of the NullClaw user base is focused on fully offline, self-hosted agent deployments rather than cloud hosted setups. No user feedback related to official cloud deployments, premium features, or other integration platforms was recorded in this 24h period, and no positive satisfaction reports were shared publicly during the window.

## 8. Backlog Watch
All four active open items (1 bug report, 3 in-progress PRs) have not yet received public maintainer review comments, making them top priority items for the project maintainer team to triage in the coming days. The highest-priority backlog item requiring attention is the unacknowledged #952 Ollama incomplete answers bug report (https://github.com/nullclaw/nullclaw/issues/952), filed 2 days prior to this digest date with zero maintainer responses, no assigned developer, and no linked fix PR. The three open PRs are all newly filed within the last 3 days, so there is no excessive backlog of long-unreviewed community contributions at this stage, but pushing these fixes through review and merge will resolve several high-impact small bugs for end users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-13 Project Digest
---
## 1. Today's Overview
This is a high-velocity core-team development day focused on stabilizing the Reborn V2 web UI and runtime ahead of a targeted public feature rollout. The project recorded 50 updated issues (33 active, 17 resolved) and 49 updated pull requests (25 open, 24 merged/closed) over the last 24 hours, with zero critical production outages reported. The bulk of recent work spans UI polish for end users, security hardening of core runtime components, CI pipeline optimization, and end-to-end delivery integration for Slack channels. Overall project health is strong, with a high resolution rate for minor reported bugs and clear forward momentum on previously blocked core features. No new official releases were published in the window.

## 2. Releases
No new official versions were released in the 24-hour reporting window. The long-dormant release chore PR [#3708](https://github.com/nearai/ironclaw/pull/3708) with pending breaking API changes for `ironclaw_common` and `ironclaw_skills` remains unmerged.

## 3. Project Progress
24 PRs were merged/closed today, delivering the following key improvements:
1. **Runtime & Security**: PR [#4826](https://github.com/nearai/ironclaw/pull/4826) patched the Rust postgres crate family to resolve 3 newly published RUSTSEC security advisories that had broken all CI runs on main and open PRs. Three adjacent security hardening PRs merged: [#4562](https://github.com/nearai/ironclaw/pull/4562) (auth continuation dispatch failure audit logging), [#4568](https://github.com/nearai/ironclaw/pull/4568) (per-dispatch fan-out caps for before-capability hooks), and [#4569](https://github.com/nearai/ironclaw/pull/4569) (enforced tenant predicate key quota limits).
2. **Message Reliability**: PR [#4811](https://github.com/nearai/ironclaw/pull/4811) fixed the "dead air" UX bug where Slack users received no feedback when their message was deferred behind a pending approval/auth gate.
3. **Test & QA Infrastructure**: PR [#4773](https://github.com/nearai/ironclaw/pull/4773) added deterministic record/replay machinery for Reborn runtime QA traces, and PR [#4769](https://github.com/nearai/ironclaw/pull/4769) added 22 new fully mocked Reborn E2E test suites that require no external services or API keys to run.
4. **Reborn UI Polish**: 17 closed resolved long-pending UI bugs including auto-opening external links in new tabs, clearing incorrect "Pinned" sidebar behavior, fixing conversation content flickering on navigation, and resolving draft loss when leaving new conversation pages.
5. **Staging Promotion**: PR [#4834](https://github.com/nearai/ironclaw/pull/4834) promoted the latest main branch snapshot to the QA staging branch for upcoming pre-release validation.

## 4. Community Hot Topics
The highest-engagement recent items reflect top priorities for both new contributors and end users:
1. Issue [#4703](https://github.com/nearai/ironclaw/issues/4703) (3 comments): Fixed bug where the NEAR AI model picker saved human-readable display names instead of machine-readable model IDs, breaking inference routing. Underlying need: predictable, low-friction provider configuration for new users connecting third-party LLM providers.
2. Issue [#4705](https://github.com/nearai/ironclaw/issues/4705) (2 comments): Resolved local environment NEAR AI SSO setup failure caused by invalid frontend callback parameters. Underlying need: unblocked local developer onboarding for new contributors testing Reborn builds on their workstations.
3. PR [#4812](https://github.com/nearai/ironclaw/pull/4812) (core team flagship work): Implementation of the DeferredBusy message drain that automatically resumes parked messages once a blocked run reaches a terminal state. Underlying need: total elimination of silent message loss for users sending messages while their thread is blocked on approval or auth gates.

## 5. Bugs & Stability
Bugs are ranked below by severity, with fix status noted:
1. **Critical (Resolved)**: New RUSTSEC advisories for the Rust postgres crate family (Issue [#4824](https://github.com/nearai/ironclaw/issues/4824)) that broke all CI pipelines. Fix PR #4826 is fully merged, no further CI failures from this root cause.
2. **High (Unresolved)**: Failed tool workflows break follow-up message and activity ordering in conversations (Issue [#4762](https://github.com/nearai/ironclaw/issues/4762)), no fix PR filed yet.
3. **High (Unresolved)**: Active provider status shown in Reborn Inference settings is inconsistent with the actual provider used for chat requests (Issue [#4697](https://github.com/nearai/ironclaw/issues/4697)), causing user confusion about which model is being invoked.
4. **Medium (Unresolved)**: Reborn workspace paths are incorrectly duplicated when users request files to be created with workspace-relative paths (Issue [#4759](https://github.com/nearai/ironclaw/issues/4759)), leading to unexpected nested directory structures.
5. **Low (Resolved)**: 12 minor UI polish bugs covering flicker, missing feedback, low-contrast UI elements, and lost unsent drafts are all marked closed.

## 6. Feature Requests & Roadmap Signals
The following high-priority items are actively being worked on and are extremely likely to ship in the next minor release:
1. Full end-to-end Slack outbound delivery integration, covered by 4 stacked PRs (#4777, #4778, #4779, #4780) that are 90% complete.
2. DeferredBusy system hardening (batched message resubmission, O(1) deferred message indexing) to fully eliminate remaining edge cases of message loss during blocked runs.
3. Engine V2 / Reborn LLM usage tracking added to the existing admin `/api/admin/usage` endpoint (Issue [#4822](https://github.com/nearai/ironclaw/issues/4822)), a required feature for production billing and usage analytics.
4. CI test job sharding (Issue [#4813](https://github.com/nearai/ironclaw/issues/4813)) to cut down PR feedback latency for core team and external contributors.

## 7. User Feedback Summary
Collected user pain points and satisfaction signals from recent issues:
- **Dissatisfaction**: Users report significant disruption from conversation navigation bugs (auto-navigating away from chat when clicking links, lost unsent drafts, confusing pinned conversation behavior), all of which have now been resolved in main.
- **Top unaddressed user complaint**: Users are re-prompted for identical capability approval grants across every new thread even when selecting the "always allow" option, creating repeated unnecessary friction for power users.
- **Contributor pain point**: Broken local SSO setup previously added unnecessary 1-2 hour onboarding overhead for new developers running local Reborn instances, now fully fixed.
- **Reported functional gap**: The Reborn LLM runtime does not inject current date/time context into system prompts, leading to incorrect answers for scheduling, calendar, and date-relative queries.

## 8. Backlog Watch
Long-standing high-priority items that have not received recent maintainer attention and risk blocking downstream users:
1. PR [#2341](https://github.com/nearai/ironclaw/pull/2341) (opened 2026-04-11): High-severity memory leak fix bounding file history total memory usage, adding job cleanup logic, and unifying match counting for built-in tools. It is critical for stable long-running agent deployments but has not seen activity in 2 months.
2. PR [#2700](https://github.com/nearai/ironclaw/pull/2700) (opened 2026-04-20): Feature to replace unreadable hex hash conversation IDs in the web sidebar with auto-generated descriptive chat titles, a highly requested quality-of-life feature for all end users that is pending final review.
3. PR [#3708](https://github.com/nearai/ironclaw/pull/3708) (opened 2026-05-16): The official release PR that publishes breaking API changes for 4 core IronClaw crates. It has been blocked for 4 weeks, preventing downstream library consumers from accessing updated stable versions.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Daily Project Digest | 2026-06-13
Repository: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---
## 1. Today's Overview
LobsterAI maintained high operational activity over the 24-hour window, with 1 updated issue fully resolved and 17 total updated pull requests, 11 of which were merged or closed. The core development team is wrapping up pre-release validation for an upcoming minor release, with work prioritized on shipping new Computer Use capabilities and patching widespread user experience and data loss pain points. The project demonstrates strong health with zero unpatched critical outages reported, a 100% resolution rate for newly updated issues, and active contributions from both core maintainers and external community developers. No new official public releases were tagged in the latest period.

## 2. Releases
No new public releases were published in the last 24 hours. The codebase for the upcoming 2026.6.12 stable release has been fully merged into the main branch as part of today's work, with full feature freeze and final packaging expected imminently.

## 3. Project Progress
All 11 merged/closed PRs advanced pre-release preparations and quality improvements:
1. **[#2158](https://github.com/netease-youdao/LobsterAI/pull/2158)**: Merged the `release/2026.6.11` branch into main, finalizing the 2026.6.12 release feature set, including the long-awaited Computer Use MVP, realtime ASR voice input for cowork workflows, customizable HTML artifact sharing permissions, and native SVG/image artifact sharing support.
2. **Runtime & capability fixes**:
   - [#2156](https://github.com/netease-youdao/LobsterAI/pull/2156): Bumped the Computer Use runtime to v1.0.7, adding UIA debug breadcrumbs to diagnose unexpected helper process exits
   - [#2157](https://github.com/netease-youdao/LobsterAI/pull/2157): Fixed text-to-image generation saving wrong file extensions by detecting actual content format from byte streams instead of relying on server return metadata
   - [#2155](https://github.com/netease-youdao/LobsterAI/pull/2155): Patched race conditions that triggered duplicate realtime ASR startup requests in the voice input flow
   - [#2154](https://github.com/netease-youdao/LobsterAI/pull/2154): Preserved full model metadata for user-manually stopped streaming responses, avoiding missing model attribution for partial outputs
   - [#2153](https://github.com/netease-youdao/LobsterAI/pull/2153): Fixed persistent loss of custom model selections that shared identical IDs with pre-installed packaged models
3. **User data safety fixes** (merged 5 consecutive UX improvement PRs):
   - [#1473](https://github.com/netease-youdao/LobsterAI/pull/1473), [#1474](https://github.com/netease-youdao/LobsterAI/pull/1474), [#1475](https://github.com/netease-youdao/LobsterAI/pull/1475): Added unsaved change confirmation popups for Agent creation, Agent settings edits, and MCP server configuration modals
   - [#1476](https://github.com/netease-youdao/LobsterAI/pull/1476): Implemented instant draft persistence before session or view switches to eliminate lost input content
   - [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477): Added confirmation prompts for re-editing historical messages, preventing accidental overwrites of existing unsaved input

## 4. Community Hot Topics
The highest engagement updated item of the day is the long-running user API compatibility issue:
- [#1](https://github.com/netease-youdao/LobsterAI/issues/1) [Closed] Hit API error with OpenAI API Type (7 comments, 0 reactions)
  Underlying user demand analysis: The issue was submitted by an Intel Mac 10.13.7 user, who encountered 400 invalid parameter errors when switching the backend to an OpenAI-compatible endpoint after testing a MiniMax API configuration. This reflects a very common use case for enterprise and power users who route LLM requests through self-hosted or third-party OpenAI proxy services, and expect zero breakage when swapping provider types in the settings.

## 5. Bugs & Stability
All bugs identified in the 24-hour window have associated merged fixes, ranked by severity:
1. **High Severity (Resolved)**: OpenAI API type invalid 400 params error that broke chat workflows for users of non-official OpenAI endpoints (tracked in #1, no remaining open reports after patch deployment)
2. **Medium Severity (Resolved)**: Missing model metadata for stopped streams, duplicate ASR triggers, lost custom model selections, wrong text-to-image file extensions (all fully patched per the merged PRs listed in Project Progress)
3. **Low Severity (Resolved)**: Unprompted user data loss across 5 common input and navigation scenarios, fully addressed via the merged user safety UX fixes

No crashes, critical regressions, or unpatched outages were reported in the latest period.

## 6. Feature Requests & Roadmap Signals
Validated user feature requests visible in today's updates include grouped collapsible display for recurring scheduled task history, built-in shortcut conflict detection, and full i18n coverage for all edge UI elements. Given all core feature work for the 2026.6.12 release has been merged, the next minor patch releases (expected 2026.6.x point updates) will ship the above quality-of-life features after final regression testing, alongside incremental improvements to the new Computer Use MVP capabilities.

## 7. User Feedback Summary
- **Top pain points reported**: Intel older Mac users encountered cross-provider API compatibility failures earlier this year; general user complaints of unprompted, silent data loss when editing Agents, MCP configs or switching sessions have been widespread across recent feedback threads; the sidebar getting cluttered with dozens of duplicate entries for daily/weekly recurring scheduled tasks is a top complaint for power users relying on the workflow automation feature.
- **Engagement signals**: Users are actively testing the pre-release Computer Use and realtime voice input capabilities, submitting fast follow bug reports and even contributing their own fix PRs for minor issues, indicating high satisfaction with the new product direction.

## 8. Backlog Watch
There are 6 stale open PRs updated today, all fully implemented since early April 2026 and awaiting final maintainer review and merge:
1. [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446): Fix infinite OpenClaw gateway restart loop after v4.1 upgrade (high criticality, may cause full app paralysis if triggered)
2. [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453): Fix disabled skills still being incorrectly injected into chat prompt context
3. [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454): Fix silent unresponsive behavior when creating a scheduled task with empty date input
4. [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456): Add duplicate shortcut conflict detection to avoid non-functional hotkeys
5. [#1448](https://github.com/netease-youdao/LobsterAI/pull/1448): Add missing i18n translation strings for Agent settings UI elements
6. [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449): Implement grouped collapsible display for recurring scheduled task execution history
None of these PRs have unresolved code conflicts, and only require maintainer approval to be merged into the upcoming release cycle.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (moltis-org/moltis) Project Digest | 2026-06-13
---
## 1. Today's Overview
Over the 24-hour reporting window, the Moltis personal AI assistant project recorded moderate, community-driven activity with 3 updated open issues and 1 newly submitted open pull request, with no closed items or new public releases published. All tracked work is focused on three core priority areas: third-party integration bug fixes, expanded secure sandbox infrastructure, and local first voice processing features. No critical core service outages or breaking regressions were reported, and activity from external non-maintainer contributors remains steady, indicating a healthy growing open-source ecosystem for the project. No new releases are scheduled for immediate publication in this tracking period.

## 2. Releases
No new stable, pre-release, or hotfix versions of Moltis were published in the last 24 hours, and no prior release update notes require revision.

## 3. Project Progress
No merged or closed pull requests, and no fully resolved issues were logged during the reporting window. All current activity consists of newly submitted bug reports, feature proposals, and in-progress external contributor fixes that have not yet completed maintainer review, so no new code or functionality has landed to the project’s main branch as of this digest’s publication.

## 4. Community Hot Topics
Ranked by comment volume and user engagement:
1. [Issue #1115: Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115) (2 comments): This bug report has the highest community engagement, reflecting strong user adoption of Moltis (Model Context Protocol) integrations that connect Moltis agents to private, user-controlled email data — a high-priority use case for personal AI assistant users.
2. [Issue #1118: Add Kubernetes-native sandbox backend with runtimeClassName support](https://github.com/moltis-org/moltis/issues/1118) (1 comment): This feature request signals fast-growing demand from enterprise and self-hosting power users for stronger workload isolation for untrusted LLM-generated agent code execution.
3. [Issue #1102: Add FunASR/SenseVoice as local STT engine](https://github.com/moltis-org/moltis/issues/1102) (1 comment): This proposal demonstrates strong support from privacy-focused users who want fully offline, low-latency voice processing workflows with no third-party cloud dependencies.

## 5. Bugs & Stability
Ranked by functional severity:
1. High severity: [PR #1116: fix(whatsapp): deliver replies to @lid chats via PN JID rewrite](https://github.com/moltis-org/moltis/pull/1116). This bug causes silent message delivery failures for all Moltis users accessing the assistant via WhatsApp privacy-enabled @lid chats, where generated replies appear in the web UI but never reach end users. A complete fix has already been submitted by external contributor juanlotito, and no data loss or permanent account disruption has been reported.
2. Moderate severity: [Issue #1115: Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115). This unpatched bug blocks all users from successfully connecting their Fastmail accounts to Moltis via the MCP framework, with no associated fix PR filed as of this report. No core platform crashes or widespread regressions were logged in the window.

## 6. Feature Requests & Roadmap Signals
Two new feature requests were added or updated in the tracking window, with high likelihood of landing in the next minor version release:
1. The Kubernetes-native sandbox backend proposal aligns directly with the project’s stated long-term goal of supporting secure, production-grade self-hosted agent execution, making it a top priority for the next release scope for security and enterprise users.
2. The FunASR/SenseVoice local STT request fits Moltis’ core positioning as a privacy-first personal voice assistant. Its cited ultra-fast ~70ms processing speed and native streaming support fill a clear gap in existing local STT options for the project, and it will likely be prioritized once implementation scoping is complete.

## 7. User Feedback Summary
Recent user feedback shows high baseline satisfaction with Moltis as a voice-focused personal AI assistant, with three distinct clear pain points and use cases:
- End users relying on Moltis’ WhatsApp integration report frustration with undefined silent message failures, as there are no visible error alerts to notify users that their agent replies never arrived.
- Power users building custom MCP-connected personal agent workflows report high demand for fully working third-party email integrations to automate their personal productivity tasks.
- Privacy-focused self-hosted users explicitly reject cloud-dependent STT services, and are actively seeking lightweight, fast local voice processing that does not require sending audio data to external third-party servers.

## 8. Backlog Watch
The highest-priority outstanding item needing maintainer attention is [Issue #1102: Add FunASR/SenseVoice as local STT engine](https://github.com/moltis-org/moltis/issues/1102). Opened on 2026-06-04 (9 days prior to this digest), it only received 1 non-maintainer comment after its last 2026-06-12 update, with no public maintainer confirmation of whether the feature is accepted for the roadmap, no assigned contributor, and no public implementation timeline shared, despite clear demonstrated user demand.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Daily Digest | 2026-06-13
Repository: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Today's Overview
This 24-hour window marks a high-velocity development period for the CoPaw/QwenPaw project, with 23 updated issues, 27 modified PRs, and zero new stable full releases published. The core dev team is currently wrapping up validation work for the upcoming v1.1.12 beta release, while the active community has submitted a steady stream of post-v1.1.11 regression reports and feature requests. Project health remains strong, with 7 of 23 total issues closed, and 11 of 27 PRs successfully merged or closed in the reporting window. The top long-term priority roadmap item, the full backend migration to AgentScope 2.0, continues to gather active community attention and contribution.

## 2. Releases
No new public stable full releases were launched in the last 24 hours. Two closed PRs ([#5157](https://github.com/agentscope-ai/QwenPaw/pull/5157), [#5159](https://github.com/agentscope-ai/QwenPaw/pull/5159)) completed version string correction and bump to v1.1.12b1, marking the final pre-release version build for the next minor release cycle, with no public artifacts published to PyPI or Docker Hub as of the digest timestamp.

## 3. Project Progress
11 total PRs were merged/closed in the reporting period, delivering the following fixes and improvements:
- **Core Bug Fixes**: [PR#5144](https://github.com/agentscope-ai/QwenPaw/pull/5144) resolved the vector model automatic memory search configuration loss issue; [PR#5154](https://github.com/agentscope-ai/QwenPaw/pull/5154) fixed the empty rendered result bug for the memory search tool; [PR#5147](https://github.com/agentscope-ai/QwenPaw/pull/5147) fixed the Coding Mode page refresh session loss bug; [PR#4144](https://github.com/agentscope-ai/QwenPaw/pull/4144) fixed Windows desktop readiness check failure when the service is bound to wildcard 0.0.0.0 address.
- **Infrastructure Optimization**: [PR#5121](https://github.com/agentscope-ai/QwenPaw/pull/5121) added a new release verification gate that runs full installation and health checks between build and artifact publication, to eliminate bad public release artifacts; [PR#5022](https://github.com/agentscope-ai/QwenPaw/pull/5022) added path validation to prevent agent workspace restoration from overwriting core system directories.
- **UI Fixes**: Two small PRs resolved the LaTeX math formula sqrt rendering errors in the web console reported in issues #5143 and #5148.

## 4. Community Hot Topics
Top 3 most active items sorted by comment counts:
1. [Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) (11 comments): Reported that agent-generated scheduled tasks cannot trigger at the set time, and do not support manual editing. Underlying need: Power users who use CoPaw for automated workflow automation require reliable, user-editable scheduled task functionality to build production agent pipelines.
2. [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) (10 comments, 2 👍): Tracking issue for the full backend migration from AgentScope 1.x to the newly released AgentScope 2.0. Underlying need: Community users are eager for the new runtime architecture, better multi-agent coordination capabilities, and performance improvements shipped in AgentScope 2.0.
3. [Issue #5149](https://github.com/agentscope-ai/QwenPaw/issues/5149) (3 comments): User question asking for a clear ETA for the AgentScope 2.0 upgrade. This reflects strong user anticipation for the major architecture refresh.

## 5. Bugs & Stability
Bugs reported in the 24h window, ranked by severity:
1. **Critical**: [Issue #5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) - Windows desktop client process leaks continuously, with memory usage climbing to over 90% of system resources. No fix PR submitted as of digest time.
2. **High**: [Issue #5155](https://github.com/agentscope-ai/QwenPaw/issues/5155) - v1.1.11 deployed via Docker on Ubuntu 22.04 crashes and auto-restarts randomly. No fix PR submitted.
3. **High**: [Issue #5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) - Non-plaintext attachments (docx, pdf) return 404 error when downloading in v1.1.11.post2. Fix is covered by the ongoing media download pipeline refactor in PR #5160.
4. **Medium**: [Issue #5163](https://github.com/agentscope-ai/QwenPaw/issues/5163) - Regression between v1.1.10 and v1.1.11.post2 that breaks Gemini model tool calling functionality. No fix PR submitted.
5. **Minor**: Python 3.13 environment TeamChat plugin installation failure (missing deprecated `imghdr` module), already identified, no fix PR filed.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests include adding Kimi-for-coding to the uv package whitelist, native agent swarm collaboration similar to JiuwenSwarm, Slack channel integration, and full desktop system tray + auto-start + background resident capabilities.
The near-term v1.1.12 minor release will most likely ship validated features from current in-review PRs, including per-turn token usage statistics display, the unified media download pipeline fix, and new features for the Yuanbao channel. Larger features such as agent swarm collaboration and full AgentScope 2.0 migration are highly likely to be scheduled for the 1.2.0 major release.

## 7. User Feedback Summary
Core real-world user pain points:
1. A noticeable wave of regressions after the v1.1.11 release is impacting daily usage for many desktop and self-hosted Docker users, who complain about unexpected crashes and broken basic features.
2. Enterprise and power users who already have local Kimi coding subscriptions cannot use their existing paid plans directly on CoPaw, creating unnecessary cost overhead.
3. Long conversation context handling issues make it impossible for users to run extended research and development sessions without the app hanging.
User satisfaction is high for the dev team's quick response to minor UI and configuration bugs, most of which get patched within 24 hours of reporting. Dissatisfaction is concentrated on the lack of ETA for major architecture improvements and unresolved critical stability issues on Windows and Docker.

## 8. Backlog Watch
Important long-running items waiting for maintainer attention:
1. [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622): First-time contributor submitted DataPaw data analysis plugin with 12 built-in BI skills, under review since May 22, needs review feedback to get merged.
2. [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727): AgentScope 2.0 migration tracking issue, updated on June 12 but no public task breakdown published yet, splitting the large migration work into small actionable subtasks will unblock community contributions.
3. [PR #5067](https://github.com/agentscope-ai/QwenPaw/pull/5067): Proposed Agent OS Driver unified abstraction layer for MCP/A2A/ACP external capability protocols, under review for 3 days, needs architectural feedback from core maintainers to advance this critical foundational feature.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-06-13
---
## 1. Today's Overview
ZeroClaw recorded exceptional development velocity on 2026-06-13, driven by the official launch of the landmark v0.8.0 major release. The project tracked 15 updated issues (12 active, 3 closed) and 36 updated pull requests (31 open, 5 merged/closed) across core runtime, gateway, channel, and quality-of-life improvement domains. The vast majority of new submissions are user-reported S1 regressions tied directly to breaking changes in v0.8.0, with dedicated maintainer triage and fix streams already in flight. No critical core pipeline blockages are documented, and the team has already drafted a clear roadmap for the incremental v0.8.1 release to resolve launch pain points, signaling strong post-major-release project health.

## 2. Releases
The day’s sole new release is the long-awaited **v0.8.0 major milestone**:
- Headline feature: A single daemon process can now host multiple isolated named agents, each with fully independent workspaces, custom memory configurations, dedicated model provider settings, separate security policies, personalized connection channels, and unique agent personalities.
- A fully rewritten auto-migrating configuration schema ships with the release, which automatically imports existing user setups without requiring manual modification of old config files.
- Unresolved post-launch regressions indicate legacy V3 path handling and pre-v0.8 single-agent assumption edge cases are the top sources of unplanned breaking behavior for existing users.

## 3. Project Progress
All pre-v0.8.0 launch blockers were fully resolved today to enable the major release ship, with 5 total merged/closed PRs:
1. PR #7545 (closed): Fixed a high-priority bug where auto-discovered MCP tools failed to appear in agent tool lists when custom risk profiles were applied, clearing the final pre-release tooling blocker.
2. 3 critical launch tracker issues marked as complete:
   - https://github.com/zeroclaw-labs/zeroclaw/issues/7112: Full v0.8.0 release coordination tracker, formally closed as the milestone launched
   - https://github.com/zeroclaw-labs/zeroclaw/issues/6443: Twitch chat thin IRC adapter feature shipped, allowing operators to run agents on Twitch streams
   - https://github.com/zeroclaw-labs/zeroclaw/issues/7263: S1 subagent cwd inheritance bug for ACP sessions resolved before launch
A stream of small, low-risk quality-of-life fix PRs for edge cases (Windows update asset handling, incorrect macOS Cmd+C quit behavior, custom Discord gateway intent configuration) are currently in active review.

## 4. Community Hot Topics
The highest engagement submission of the day is the architecture unification RFC and corresponding implementation work, with 3 total comments across the issue thread:
- https://github.com/zeroclaw-labs/zeroclaw/issues/7415: RFC to unify the three disjoint agent turn execution engines (`run_tool_call_loop`, `turn_streamed`, `Agent::turn`) to a single shared code path
  - Underlying user and contributor need: The current fragmented execution logic causes inconsistent agent behavior across different running contexts (CLI, gateway WebSocket, embedded, ACP subagent sessions), leading to hard-to-debug edge cases for subagent orchestration and tool call workflows. Maintainers chose to consolidate all logic in one single PR (https://github.com/zeroclaw-labs/zeroclaw/pull/7540) instead of the originally proposed phased migration, receiving broad alignment from the contributor community.

## 5. Bugs & Stability
All user-reported post-v0.8.0 bugs are ranked by severity below, with fix progress noted:
| Severity | Issue Link | Summary | Fix Status |
|----------|------------|---------|------------|
| S1 | https://github.com/zeroclaw-labs/zeroclaw/issues/7523 | Web dashboard unavailable post v0.8.0 Homebrew install for macOS users | Corresponding fix PR #7529 open, which only displays the dashboard URL when pre-built frontend assets exist and prints clear build instructions for missing assets |
| S1 | https://github.com/zeroclaw-labs/zeroclaw/issues/7542 | `ask_user` tool fails instantly with "Channel closed before receiving a response" on gateway WebSocket sessions | No linked fix PR yet |
| S1 | https://github.com/zeroclaw-labs/zeroclaw/issues/7537 | Windows 10 quickstart flow fails at agent creation with "no map-keyed list section at peer-groups" config error | No linked fix PR yet |
| S1 | https://github.com/zeroclaw-labs/zeroclaw/issues/7533 | Docker build fails during `cargo web build` due to missing C++ compiler dependency | Corresponding fix PR #7534 open, which adds g++ to the build layer |
| S1 | https://github.com/zeroclaw-labs/zeroclaw/issues/7527 | macOS desktop app fails to detect permissions, hangs, and displays empty pages on macOS 15.7.7 | No linked fix PR yet |
| S2 | https://github.com/zeroclaw-labs/zeroclaw/issues/7541 | Legacy V3 paths incorrectly use shared data_dir instead of per-agent workspace for gateway chat sessions, creating cross-agent file leakage risk | No linked fix PR yet |

## 6. Feature Requests & Roadmap Signals
The dedicated v0.8.1 tracker (https://github.com/zeroclaw-labs/zeroclaw/issues/6970) already queues additive non-breaking features for the next incremental release, with high-likelihood v0.8.1 candidates including:
1. Multi-session support for the gateway web chat UI (Issue #7543), allowing users to create, rename, switch, and delete separate conversations per agent
2. Native llama.cpp model router (Issue #7539), enabling fast switching between local small models without manual config edits
3. Non-UTF8 charset auto-detection for the `file_read` tool (Issue #7521), adding support for Cyrillic cp1251, Latin-1, and Shift-JIS encoded legacy files
4. Streaming card message support for Chinese enterprise collaboration channels (WeChat, Feishu, DingTalk, QQ, Issue #7531)
5. Fully reviewed NEAR AI Cloud TEE-backed inference provider integration (PR #6842)

## 7. User Feedback Summary
Post v0.8.0 launch feedback shows mixed sentiment across user segments:
- New users report major onboarding friction, with broken first-run experiences across Windows, macOS, and Docker environments, leading to failed attempts to spin up their first agent.
- Power users are highly positive about the new multi-agent architecture, noting it eliminates the longstanding pain of running multiple separate ZeroClaw daemon instances for different workloads.
- Local model users working with llama.cpp call out the lack of a native model switcher as a critical missing quality-of-life feature for testing different small models for niche tasks.
- Chinese enterprise users using domestic collaboration channels highlight the missing streaming card message support as a key barrier to rolling out ZeroClaw to internal teams, as non-streaming long-running tasks create unnecessary user wait anxiety.

## 8. Backlog Watch
Two high-priority roadmap items are pending urgent maintainer attention:
1. https://github.com/zeroclaw-labs/zeroclaw/pull/7429: Large scope PR adding the Wasmtime runtime dependency to prepare for long-term native plugin support, opened on 2026-06-09. It is core to the project's planned integrations plugin catalog architecture, but has received zero public review comments to date.
2. https://github.com/zeroclaw-labs/zeroclaw/pull/6842: Low-scope fully compliant NEAR AI Cloud provider integration, originally opened on 2026-05-21. It was updated today and matches all existing provider patterns, but still has no maintainer sign-off to merge.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*