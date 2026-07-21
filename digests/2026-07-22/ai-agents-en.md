# OpenClaw Ecosystem Digest 2026-07-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-21 22:57 UTC

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

# OpenClaw Project Digest | 2026-07-22
---

## 1. Today's Overview
Over the 24-hour tracking window, the OpenClaw project saw extremely high engineering and community activity, with 500 total updated issues and 500 updated pull requests across all project components. No new official releases were published today, and most active work is focused on post-2026.7.1 regression patching, security hardening, and expanding multi-provider and channel integration support. The activity volume signals a healthy, actively maintained project, with contributors and maintainers prioritizing fixes for high-impact production pain points reported by self-hosted users. A large batch of pending P1 stability fixes are marked as ready for maintainer final review, pointing to a near-term minor patch release coming in the next 1-3 days.

## 2. Releases
No new official releases were published in the last 24 hours. The project has no pending tagged releases as of this digest.

## 3. Project Progress
7 PRs were closed/merged today, advancing key quality-of-life and stability improvements:
1. Localization fixes: PR #112306 (Android native locale refresh), PR #112426 (Android plural string localization fix for session branch counts), PR #112340 (Control UI locale sync)
2. macOS privacy hardening: PR #112321 (implements explicit user consent for all privacy-sensitive system access, closing 3 related permission bugs)
3. Performance improvement: PR #107935 (optimizes subagent registry reads by eliminating unnecessary full-dataset parsing, drastically reducing lookup latency for high-volume multi-agent deployments)
4. Config reliability fix: PR #112334 (makes bundled model provider overlay validation idempotent, eliminating errors on gateway restart for pre-configured custom providers)

Additionally, 15+ P1 priority fixes are marked as ready for maintainer final review today, including fixes for 14+ second embedded_run event-loop stalls, context engine deferred maintenance wedging, and broken streaming reply outbound hooks. A highly requested feature for live provider model catalog discovery (PR #112412, supporting 40+ LLM providers) is now open for community review.

## 4. Community Hot Topics
The most active community discussions (sorted by comment and reaction volume):
1. [Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys (#10659)](https://github.com/openclaw/openclaw/issues/10659) | 15 comments, 4 👍: This top-voted security feature request addresses widespread user concerns that prompt injection attacks can easily extract plaintext API keys stored in the OpenClaw environment. The underlying community need is for zero-trust access controls that let agents use credentials without ever seeing their raw values.
2. [Feature: Add Antigravity CLI (agy) as CLI backend to replace deprecated google-gemini-cli (#84527)](https://github.com/openclaw/openclaw/issues/84527) | 5 comments, 11 👍: The most highly voted issue of the day, users are pushing urgent prioritization of this migration because Google is sunsetting the legacy Gemini CLI on June 18, 2026, which will break all existing Google AI provider integrations for OpenClaw users.
3. [P0 Bug: CLI startup preflight can corrupt the live state DB while a gateway is running (#101290)](https://github.com/openclaw/openclaw/issues/101290) | 13 comments, 1 👍: Top of mind for all self-hosted macOS users, this bug causes unrecoverable SQLite database corruption and full data loss for active long-running gateway instances, with no known workaround reported as of today.

## 5. Bugs & Stability
Bugs reported/updated in the last 24 hours, ranked by severity:
1. **P0 Critical Data Loss**: [SQLite DB corruption on macOS when CLI preflights run alongside active gateway (#101290)](https://github.com/openclaw/openclaw/issues/101290) – 4 confirmed user reports of full state loss, no fix PR filed yet, marked as needing live repro from maintainers.
2. **P1 High Impact**: [Write/exec tool parameters silently dropped after 15+ turns of conversation (#53408)](https://github.com/openclaw/openclaw/issues/53408) – Causes empty arguments for critical file and shell tool operations, no linked fix PR.
3. **P1 High Impact**: [MCP tools not injected into subagent sessions via sessions_spawn (#85030)](https://github.com/openclaw/openclaw/issues/85030) – Breaks all custom multi-agent tool workflows, no linked fix PR.
4. **P1 Regression**: [cron tool schema breaks llama.cpp tool calling (#108473)](https://github.com/openclaw/openclaw/issues/108473) – Broken tool support for local model self-hosted users after 2026.7.1 update, no linked fix PR.
5. **P1 Regression**: [Local llama.cpp provider fails with "unable to generate parser for this template" error after 2026.7.1 (#106779)](https://github.com/openclaw/openclaw/issues/106779) – Full breakage for llama.cpp deployments, no linked fix PR.

Related stability fixes in open review will address many of these root causes, including cron job execution limit enforcement, session compaction overflow recovery, and memory core recall logic fixes.

## 6. Feature Requests & Roadmap Signals
User requests that are highly likely to land in the next 2026.7.x minor release:
1. Google Antigravity CLI support: Extremely high user demand due to upcoming Google EOL of legacy Gemini CLI, the feature is near complete and will be prioritized for urgent merge.
2. Live provider model catalog discovery (PR #112412): This feature eliminates the need to ship static model lists in OpenClaw updates, letting users access newly released models across 40+ LLM providers immediately, it is already under active maintainer review.
3. Telegram Business Bot support: 6 upvotes, with an existing linked open PR nearing completion.

Longer-term roadmap signals include masked secrets systems, filesystem sandboxing, and built-in auto-update with pre-update backup and rollback, all of which are marked as P1 priority and in active product decision review.

## 7. User Feedback Summary
Real user pain points surfaced this 24h window:
- Security is the top unmet need: Users repeatedly note that there are no native access controls to prevent credential leaks via prompt injection, and no filesystem sandboxing for untrusted agents.
- Local self-hosted model users report multiple breaking regressions after the 2026.7.1 update, complaining that local llama.cpp deployments are no longer tested adequately before new releases ship.
- Users of long-running production gateways highlight the total lack of a standardized backup/restore workflow for config, cron jobs, and session history, making disaster recovery extremely difficult.
- The ~3500 token fixed overhead for full tool schemas is a major frustration for users running small-context local models, as it eats into a large share of their available context window.
Overall user satisfaction is high for the core platform, but there is clear strong demand for production hardening and improved local model test coverage.

## 8. Backlog Watch
High-impact open issues that have been untouched for months, waiting for maintainer attention:
1. [P1 Filesystem Sandboxing Config (tools.fileAccess) (#7722)](https://github.com/openclaw/openclaw/issues/7722): Security-critical feature open since February 2026, currently blocked waiting for security review and product decision.
2. [Reduce tool schema token overhead (~3,500 tok/session) (#14785)](https://github.com/openclaw/openclaw/issues/14785): 9 comments, open since February 2026, no recent progress despite being a high priority for all small-context model users.
3. [Capability-based permissions for skills/tools (default-deny high-risk actions) (#12678)](https://github.com/openclaw/openclaw/issues/12678): Security foundational feature, open since February 2026, no maintainer assigned despite multiple user reports of malicious skills with full system access.
All three issues are rated at the highest 🦞 diamond lobster impact rating, and are top items waiting for review bandwidth.

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Comparison Report (2026-07-22)
*For technical decision-makers and open-source AI agent developers*

---

## 1. Ecosystem Overview
The current 11-project open-source personal AI assistant and agent landscape spans all use case niches, from enterprise-grade multi-tenant production runtimes to ultra-lightweight edge deployments for constrained hardware. Following a wave of major H1 2026 feature releases, the broader ecosystem has shifted priority away from rapid functionality addition to stability hardening, security governance, and enterprise production readiness, aligning with fast-growing adoption from self-hosted users and small to medium enterprise teams. Cross-project standardization around the Model Context Protocol (MCP), unified LLM provider interfaces, and safety guardrail primitives is reducing redundant engineering work across the ecosystem, with localized support for APAC regional messaging and model ecosystems emerging as a high-growth underserved market. Overall project health is robust across active projects, with high community contributor participation rates and low volumes of unpatched critical outages.

---

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Project Health Score (1-5) |
|--------------|---------------------|-----------------|--------------------|------------------------------|
| OpenClaw | 500 | 500 | No new official release | 4.5 |
| NanoBot | 11 | 34 | No new official release | 4.7 |
| Hermes Agent | 50 | 50 | No new official release | 4.2 |
| PicoClaw | 8 | 8 | No new official release | 4.3 |
| NanoClaw | 1 | 12 | No new official release | 4.1 |
| IronClaw | 44 | 50 | Shipped v1.0.0-rc.1 (2026-07-20) | 4.8 |
| LobsterAI | 1 | 10 | No new official release | 4.4 |
| Moltis | 0 | 1 | No new official release | 3.8 |
| CoPaw | 41 | 46 | Shipped v2.0.1-beta.1 (2026-07-22) | 4.6 |
| ZeroClaw | 50 | 50 | No new official release | 4.0 |
| NullClaw / TinyClaw / ZeptoClaw | 0 | 0 | No new official release | 2.0 |

*Health score weighted by bug resolution rate, unpatched critical security bug count, and community contribution throughput*

---

## 3. OpenClaw's Position
As the core reference implementation for the broader Claw agent ecosystem, OpenClaw holds a dominant lead over peers in total activity volume (1000 combined updated PRs/issues in 24h, ~10x the volume of next highest tier projects) and community size, with hundreds of active contributors running thousands of production self-hosted gateways globally. Its core technical advantage is unmatched broad compatibility: it natively supports 40+ LLM providers and the largest collection of third-party messaging channels of any active agent runtime, making it the default choice for teams requiring a drop-in horizontal base layer for general-purpose AI assistant deployments.
Relative to peers, OpenClaw’s legacy of multi-year backward compatibility support creates tradeoffs: it lags newer, greenfield projects like IronClaw on native-by-design security primitives, with high-priority security hardening features (masked secrets, filesystem sandboxing, capability permissions) stuck in the open backlog since February 2026. It also carries a higher volume of post-release regressions for niche deployments such as local llama.cpp instances, compared to smaller, more focused peer projects with narrower scope.

---

## 4. Shared Technical Focus Areas
Four cross-cutting priority requirements have emerged across 7+ active projects in this tracking window:
1. **Agent execution security hardening**: 7 of 10 active projects are actively patching path traversal, shell workspace bypass, and plaintext API key exposure vulnerabilities, all identifying untrusted agent execution as the top hard blocker for enterprise production adoption (OpenClaw, NanoBot, ZeroClaw, Hermes, PicoClaw, IronClaw, CoPaw).
2. **Local model performance optimization**: 6 projects are engineering reductions in unnecessary tool schema token overhead, preserving native Ollama request caching, and eliminating redundant context bloat to make small-context local models usable even on consumer hardware (OpenClaw, NanoBot, PicoClaw, Hermes, NanoClaw, ZeroClaw).
3. **Messaging channel reliability**: All projects that support third-party chat platforms are patching silent message drops, unhandled network reconnection logic, and broken modern OAuth flows for Telegram, Matrix, LINE, and DingTalk channels, the top reported onboarding pain point for new users.
4. **Post-major-release regression mitigation**: All projects that launched feature releases in June-July 2026 are prioritizing patches for untested edge case breakages (CoPaw for v2.0, IronClaw for v1 RC, Hermes for v0.19.0, OpenClaw for 2026.7.1) to avoid breaking existing production deployments.

---

## 5. Differentiation Analysis
Projects have clearly diverged on priorities and target user bases to avoid direct feature competition:
- **Target user segmentation**: OpenClaw serves enterprise operators running multi-tenant production gateways; Hermes Agent is built for advanced MCP power users; Moltis caters to minimalists who prioritize zero-unplanned-breakage stability; ZeroClaw targets DevOps/SRE teams building automated operational workflows.
- **Feature focus differentiation**: IronClaw’s v1 rearchitecture prioritizes a full authorization witness system and zero in-memory state stores for zero livelock multi-tenant enterprise deployments; ZeroClaw’s unique SOP (Standard Operating Procedure) engine and upcoming bounded Goal Mode feature have no direct equivalent in peer projects; LobsterAI differentiates with browser co-annotation and artifact sharing workflows for knowledge workers; PicoClaw and NanoClaw are exclusively optimized for APAC regional users, with native support for local model hubs (ModelScope) and dominant regional messengers (LINE, DingTalk) not supported in western-focused runtimes.
- **Architecture tradeoffs**: IronClaw’s full ground-up rewrite eliminates legacy code debt but offers no backward compatibility for v0.29.x configurations; CoPaw’s refactored decorator-based tool registration cuts 8-10k of redundant tool schema tokens per session, a gain not available in non-rewritten runtimes; OpenClaw’s multi-year backward compatibility guarantee extends deployment longevity but slows adoption of modern security primitives.

---

## 6. Community Momentum & Maturity
Active projects clearly fall into 4 distinct activity tiers:
1. **Tier 1: Rapidly Iterating**: IronClaw, OpenClaw, Hermes Agent, ZeroClaw, CoPaw. These projects all record >90 total PR/issue updates in 24h, and are currently sprinting toward major milestones (v1.0 GA, post-major-release patch, full rearchitecture) with fast response to community issues and high new contributor throughput.
2. **Tier 2: Steady Sustainable Iteration**: NanoBot, LobsterAI, PicoClaw, NanoClaw. These projects have moderate, predictable activity volumes, 50%+ issue resolution rates, and no ongoing major architectural overhauls, focused on incremental UX and stability improvements for their loyal existing user bases.
3. **Tier 3: Stabilizing Maintenance Mode**: Moltis. No new feature development is ongoing, only routine dependency updates, with zero new reported bugs in this tracking window, serving a stable user base that prioritizes zero operational friction.
4. **Tier 4: Inactive / Unmaintained**: NullClaw, TinyClaw, ZeptoClaw. No tracked public development activity in the 24h monitoring window.

---

## 7. Trend Signals
These verified observations from community feedback point to clear 2026 H2 industry trends for AI agent developers:
1. **Security is no longer a secondary feature**: Enterprise and self-hosted production users now rank masked secrets, sandboxed execution, and capability-based access controls as higher priority than support for the latest cloud LLM, with unpatched security gaps serving as universal adoption blockers.
2. **Massive monolithic releases are obsolete**: Teams have fully shifted to incremental atomic PR reviews, internal dogfooding periods, and staged release candidate rollouts to eliminate widespread post-update breakage of existing production deployments.
3. **Local small-context model usability is the next competitive battlefield**: Optimization to cut tool schema overhead, preserve native model caching, and reduce unnecessary context bloat for 7B-13B local models will differentiate leading runtimes in the second half of 2026, rather than support for new flagship cloud models.
4. **Regional market gaps are underserved**: Western-focused general-purpose

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-07-22
---
## 1. Today's Overview
On 2026-07-22, the open-source NanoBot AI agent project recorded extremely high development velocity, with 11 updated issues and 34 updated pull requests across the core agent runtime, provider ecosystem, security layer, and WebUI components. The team maintained an impressive 82% resolution rate for recently updated issues, with 9 of 11 tracked issues closed over the 24-hour window, and 65% of all updated PRs merged or closed successfully. No new official releases were published today, as most merged changes are being staged for an upcoming minor feature release. The day’s work balanced critical security hardening patches, long-standing runtime bug fixes, user-requested new features, and ecosystem expansion to support additional local and cloud LLM providers, indicating strong project health and aligned priority execution.

## 2. Releases
No new official releases were published in the 24-hour reporting window. All merged changes are staged in the main branch for a forthcoming minor version release.

## 3. Project Progress
A total of 22 PRs were merged or closed in the reporting period, advancing the following key updates:
- Core agent runtime fixes: Merged PR [#4663](https://github.com/HKUDS/nanobot/pull/4663) implements quarantine logic for invalid, duplicate, or missing tool results to resolve inconsistent tool state bugs, while PR [#4811](https://github.com/HKUDS/nanobot/pull/4811) replaces silent exception swallowing during tool call preparation with structured logging for easier debugging.
- Security hardening: PR [#5010](https://github.com/HKUDS/nanobot/pull/5010) updates the official security documentation to recommend environment variable references over plaintext API key storage, and PR [#4984](https://github.com/HKUDS/nanobot/pull/4984) adds atomic temp-file + replace writing for `config.json` to prevent full configuration truncation if the process crashes mid-write.
- Provider ecosystem expansion: PR [#4965](https://github.com/HKUDS/nanobot/pull/4965) adds official built-in support for the ModelScope open model hub with full OpenAI-compatible API coverage for LLMs, multimodal models, and image generation, while PR [#4952](https://github.com/HKUDS/nanobot/pull/4952) adds UTF-16 surrogate sanitization at the provider request boundary to eliminate intermittent UnicodeEncodeError failures for emoji-heavy user content. Additional merged provider fixes include resolved missing environment variable interpolation for voice transcription services (PR #4989) and added support for OpenAI Codex fast mode (PR #5019).
- User experience improvements: PR [#5020](https://github.com/HKUDS/nanobot/pull/5020) adds inline visual highlighting for skill references in user-sent messages in the WebUI, and PR [#4983](https://github.com/HKUDS/nanobot/pull/4983) fixes a cron job timestamp type coercion bug that broke scheduled task execution.

## 4. Community Hot Topics
The two most active community-discussed items of the period are:
1. Enhancement request [#4867](https://github.com/HKUDS/nanobot/issues/4867) (22 comments) focused on preserving exact prompt prefixes to enable native Ollama request caching. Underlying user demand is eliminating 60+ seconds of unnecessary per-turn latency that currently cripples local Ollama deployments even on hardware with 32GB+ VRAM, a top pain point for self-hosted local agent users.
2. Open bug report [#4864](https://github.com/HKUDS/nanobot/issues/4864) (4 comments) detailing endless loops triggered by the `complete_goal` tool. The discussion reflects widespread user expectation for robust, non-blocking goal termination behavior for long-running agent workflows, a core requirement for production agent use cases.

## 5. Bugs & Stability
Reported bugs are ranked by severity below, with fix PR status noted:
1. **P0 Critical Security**: No active unpatched zero-day exploits were reported, but a previously identified symlink path traversal vulnerability in file operation tools has a draft fix ready for final review in PR [#4987](https://github.com/HKUDS/nanobot/pull/4987), which binds workspace access validation to opened file handles and uses `O_NOFOLLOW` on supported systems to block unauthorized path escapes.
2. **P1 Critical Crash Bugs**: All 6 previously reported high-severity stability bugs from earlier July 2026 were fully closed in recent patches, including the multi-GB file OOM crash in `read_file`, unbounded `Session.messages` memory leak, orphan exec child process resource leak, and over-broad `BaseException` catch that blocked graceful user interrupts. All corresponding fixes are already merged to main.
3. **P1 Active Unpatched Bug**: Issue [#4934](https://github.com/HKUDS/nanobot/issues/4934) where Qwen 3.x family models expose internal reasoning content directly to end users, with a complete fix available in open PR [#5023](https://github.com/HKUDS/nanobot/pull/5023) that adds model-level thinking style mapping for all recent Qwen model variants.
4. **P2 Active Unpatched Bug**: Issue [#4864](https://github.com/HKUDS/nanobot/issues/4864) describing the `complete_goal` endless loop caused by incorrect tool parameter serialization, with no merged fix as of the reporting window.

## 6. Feature Requests & Roadmap Signals
The following user-submitted requests are high-likelihood candidates for the next minor release:
- The widely requested human-in-the-loop shell execution confirmation feature from closed issue [#5013](https://github.com/HKUDS/nanobot/issues/5013) aligns perfectly with the current security hardening roadmap, and will almost certainly be prioritized for the next version.
- The previously requested guarded tool gateway seam for channels to run agent tools, from closed issue [#4911](https://github.com/HKUDS/nanobot/issues/4911), confirms that end-to-end real-time voice channel support is a near-term top roadmap priority.
- Open high-priority PRs for the new `/cancel-goal` loop-breaking command, legacy session path fallback to fix post-restart data loss, and configurable hidden WebUI settings sections for simplified non-technical user deployments all directly address widely reported workflow pain points, and are expected to land in the next release.
- The new ModelScope provider integration confirms the team is prioritizing first-class native support for Chinese regional open model ecosystems for local users.

## 7. User Feedback Summary
Collected real user feedback from the 24-hour window shows:
- Core dissatisfaction with local deployment performance: Local Ollama users note that non-deterministic prompt modifications from Nanoobot break the model's native caching, adding 60s of unnecessary latency per turn to the point of being unusable even on 32GB VRAM hardware.
- Top blocking concern for enterprise production adoption: Multiple users explicitly flagged plaintext API key storage, unvetted shell command execution without human approval, and path traversal risks as hard blockers for organizational deployment.
- Long-running workflow pain point: Users note that the existing `/stop` command cannot break persistent active goal loops, leading to the agent ignoring explicit user stop requests due to higher-priority system goal prompts.
- Strong positive sentiment around contribution experience: Dozens of community contributors have submitted well-formed, production-ready PRs for new providers, features, and fixes, reflecting high satisfaction with the project's open contribution model and fast turnaround for merging valid patches.

## 8. Backlog Watch
These long-standing high-impact items require urgent maintainer triage and attention:
1. PR [#4594](https://github.com/HKUDS/nanobot/pull/4594) (opened 2026-06-29) that fixes a critical shell path bypass vulnerability that allows commands such as `curl --output=/etc/passwd` to escape the workspace containment, has been open for over 3 weeks with no merge progress, representing an unpatched security risk.
2. PR [#4399](https://github.com/HKUDS/nanobot/pull/4399) (opened 2026-06-18) that adds configurable hidden WebUI settings sections for simplified multi-user self-hosted deployments, has been open for over a month despite strong demand from instance administrators.
3. PR [#4963](https://github.com/HKUDS/nanobot/pull/4963) that revamps WebUI agent

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-07-22
---

## 1. Today's Overview
The NousResearch Hermes Agent project saw high development activity on 2026-07-22, with 50 updated issues and 50 updated pull requests, focused heavily on patching regressions introduced in the recent v0.19.0 release and advancing long-requested UI/UX enhancements. The team is prioritizing stability fixes for Windows desktop deployments, MCP (Model Context Protocol) tool reliability, and multi-platform gateway integration gaps, with 12 total closed issues marking completed bug resolutions in the 24-hour window. The active community of contributors continues to flag edge cases for production deployments, indicating fast iteration velocity on top of a rapidly growing user base. No new official releases were published today, with completed fixes pending final CI validation before a point release rollout.

## 2. Releases
No new releases were published in the 24-hour reporting window. All recently resolved bug fixes are currently staged on the `main` branch for inclusion in an upcoming v0.19.1 patch.

## 3. Project Progress
Only 1 PR was merged/closed in the reporting window:
- [#20379](https://github.com/NousResearch/hermes-agent/pull/20379): Merged TUI widget-grid layout engine + background-aware theme engine, a core infrastructure feature that enables fully customizable visual surfaces for the terminal user interface.
Additionally, 7 high-priority bug fixes were marked as implemented on `main` for backlog issues that had remained open for 2+ months:
  1. Web tools silent failure on fresh installs (issue #27683)
  2. Gateway stale lock startup failure after process crash (issue #28561)
  3. Multiplexed gateway profile token bypass security bug (issue #54675)
  4. MCP parked server reconnection missing tool registration (issue #67187)
  5. 3 separate stdio MCP server TaskGroup handshake failures (issues #65677, #65673, #62212)

## 4. Community Hot Topics
The 3 most actively discussed community items are:
1. **[#47349 Feature: Configurable Memory Backends — disable memory.md, use honcho/fact_store only](https://github.com/NousResearch/hermes-agent/issues/47349)** (13 comments, 1 reaction): Users are pushing for full flexibility to replace Hermes's current hardcoded flat-file memory system with third-party fact storage backends, rather than having memory automatically injected into every system prompt. This indicates a strong user need for custom memory governance for enterprise and production agent deployments.
2. **[#25083 Feature: Immutable/protected skills - prevent agent from modifying critical skills without user approval](https://github.com/NousResearch/hermes-agent/issues/25083)** (7 comments): Power users running production agent workflows are requesting guardrails to block agents from accidentally or maliciously overwriting safety, governance, and domain-specific custom skills, eliminating self-sabotage risks.
3. **[#67187 Bug: MCP: parked server revival reconnects but does not re-register tools](https://github.com/NousResearch/hermes-agent/issues/67187)** (7 comments): MCP early adopters flagged this critical reliability gap that broke external tool access after temporary MCP server outages, reflecting widespread MCP adoption across the user base.

## 5. Bugs & Stability
Bugs reported in the last 24 hours, ranked by severity:
| Severity | Issue Link | Description | Fix Status |
|----------|------------|-------------|------------|
| P1 | [#68915](https://github.com/NousResearch/hermes-agent/issues/68915) | Worker deadlocks when the agent backgrounds a server via shell `&` (orphaned subshell holds stdout open) | No public fix PR yet, under active triage |
| P1 | [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) | state.db zeroed (all bytes replaced with null) during desktop update to v0.19.0 on Windows | No public fix PR yet, confirmed pre-update snapshots exist for recovery |
| P2 | [#68920](https://github.com/NousResearch/hermes-agent/issues/68920) | Desktop/TUI sessions leak active-session leases, causing `max_concurrent_sessions` to block new sessions over time | No public fix PR yet |
| P2 | [#68963](https://github.com/NousResearch/hermes-agent/issues/68963) | Discord slash-command sync logs a retry but exits until reconnect | Fix PR [#68967](https://github.com/NousResearch/hermes-agent/pull/68967) open and in review |
| P2 | [#68944](https://github.com/NousResearch/hermes-agent/issues/68944) | `hermes mcp add` silently absorbs `--env` KEY=VALUE into args when `--env` follows `--args` | Fix PR [#68957](https://github.com/NousResearch/hermes-agent/pull/68957) open and in review |

## 6. Feature Requests & Roadmap Signals
Top user-submitted feature requests with high adoption potential:
1. 5xx provider overload responses triggering fallback chain instead of hard failure (#68771)
2. TUI `/compress` command supporting type-ahead to queue next messages during compression (#61042)
3. Atomic Hermes (mobile) as a native `send_message` delivery target (#68951)
4. Messaging platform support for the open-source Buzz team workspace protocol (#68871)
Based on current PR activity and prioritization, the MCP reliability patches, Windows desktop stability fixes, and 5xx provider fallback logic are nearly guaranteed to ship in the next v0.19.1 point release. The TUI widget app SDK (currently in PR [#68306](https://github.com/NousResearch/hermes-agent/pull/68306)) will likely land in the v0.20.0 feature release.

## 7. User Feedback Summary
Key user pain points surfaced in the last 24 hours:
- Dissatisfaction with silent failure modes on fresh installs (web tools not working out of the box)
- High frustration with Windows-specific v0.19.0 update issues, including backend cold-boot timeouts and session database corruption, indicating a large and active Windows user base
- UX friction in the TUI from forced blocking during session compression, creating unproductive dead time for power users with long-running sessions
- Reliability complaints around intermittent MCP tool drops after server restarts
Positive feedback centered on the new TUI layout and theme engine merged today, with early testers highlighting it as a major step up from the previous terminal UI experience.

## 8. Backlog Watch
Long-unresolved high-impact items needing immediate maintainer attention:
1. [#47349](https://github.com/NousResearch/hermes-agent/issues/47349): Configurable memory backends feature, open since 2026-06-16 with 13 comments, tagged `needs-decision`, requires roadmap prioritization to unblock enterprise users needing custom memory integrations
2. [#34385](https://github.com/NousResearch/hermes-agent/issues/34385): Kanban DB index corruption under concurrent multi-process access, open since 2026-05-29, impacts power users running multi-agent kanban workflow deployments
3. [#25083](https://github.com/NousResearch/hermes-agent/issues/25083): Immutable/protected skills feature, open since 2026-05-13, critical for safety-focused production agent deployments with no recent maintainer update.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-07-22
---
## 1. Today's Overview
PicoClaw recorded steady, healthy development activity on 2026-07-22, with 8 updated issues and 8 updated pull requests spanning core protocol logic, third-party provider integrations, cross-channel UX, and frontend experience layers. 50% of recently updated open issues were resolved in the 24-hour window, paired with 3 merged/closed PRs that address long-standing UX and security gaps for self-hosted users. No new official releases were published in this period, as the team appears to be wrapping up regression fixes uncovered after the 0.3.1 release. Independent community contributions remain active, with external developers submitting fixes for edge cases they encountered in real-world production deployments.

## 2. Releases
No new official releases were published in the 2026-07-22 observation window.

## 3. Project Progress
3 PRs were merged or closed in the 24-hour window, delivering tangible feature and bug fix advances:
1. [PR #303](https://github.com/sipeed/picoclaw/pull/303): Resolved a 5-month-old outstanding feature request, adding a configurable `bot_name` system setting to replace the previously hardcoded "PicoClaw" greeting text on Telegram and DingTalk channels, enabling consistent custom identity for white-label bot deployments.
2. [PR #3233](https://github.com/sipeed/picoclaw/pull/3233): Backward compatibility fix for changes introduced in PR #3222, fully resolving the reported bug that model rate limiting failed to activate completely when no fallback models were pre-configured.
3. [PR #3282](https://github.com/sipeed/picoclaw/pull/3282): Implemented opt-in policy-gated `system.exec.v1` functionality for the slim node companion, with strict guardrails including shell-less direct command execution, explicit working directory, timeout, and output size limits to reduce LLM agent execution security risks.

## 4. Community Hot Topics
The most active discussion of the period centers on the high-priority, help-wanted feature request **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)**, which has accumulated 9 comments and 2 upvotes since its creation in June 2026. The community is debating the full migration away from the unmaintained, insecure legacy libolm cryptographic library to vodozemac, the official modern Rust-based Matrix encryption replacement.
The discussion reflects strong underlying user demand for more robust, long-term secure Matrix channel end-to-end encryption support, reduced dependency maintenance burden for the core team, and compliance with modern Matrix protocol security standards. Community contributors have already proposed an incremental implementation path that makes libolm optional at compile time for a smooth transition.

## 5. Bugs & Stability
New and ongoing reported bugs are ranked below by severity, with fix progress noted:
1. **Critical (no submitted fix PR):** [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) – Matrix `/sync` long-polling loop dies permanently after any network or homeserver disruption, with no automatic reconnection logic and no process crash to trigger systemd auto-restart, breaking Matrix channel deployments silently.
2. **High (fix PR submitted):** [Issue #3278](https://github.com/sipeed/picoclaw/issues/3278) – All Antigravity (Google) OAuth login attempts are blocked by Google's updated OAuth 2.0 security policy, breaking authentication for all users of the Google provider. Related fix PR #3280 is already under review to resolve cross-environment browser OAuth edge cases.
3. **Medium (no submitted fix PR):** [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) – Web UI chat input experiences noticeable lag when a session accumulates a moderate length of chat history, impacting daily user experience for long-running conversations.
4. **Minor (partially addressed):** [Issue #3255](https://github.com/sipeed/picoclaw/issues/3255) – DingTalk chat list previews still show the hardcoded "PicoClaw" text instead of the latest reply content, even after the merged bot name config PR partially resolves related hardcoding problems.
4 previously reported bugs (Doubao tool call leakage, missing rate limiting without fallbacks, Antigravity tool schema regression, and Volcengine raw tool call output) were fully closed in the 24-hour window.

## 6. Feature Requests & Roadmap Signals
Recent contributions and merged changes point to three high-probability features for the next upcoming 0.3.2 minor release:
1. Full UI and backend support for the configurable default model fallback chain ([PR #3200](https://github.com/sipeed/picoclaw/pull/3200)), paired with the already merged backward compatibility fix for rate limiting without pre-configured fallbacks.
2. The newly merged policy-gated `system.exec.v1` secure execution feature, which addresses long-standing user requests for safer on-host agent tool execution for self-hosted deployments.
3. Full cross-channel configurable bot name support, after the 5-month-old PR #303 was merged to eliminate hardcoded brand text for white-label use cases.
The high-priority vodozemac encryption migration, marked as help-wanted, is targeted for a later 0.4.x release given its larger scope.

## 7. User Feedback Summary
Real user pain points and feedback collected this period include:
- Self-hosted users that run PicoClaw on systemd-managed services and rely on third-party channels (Matrix, DingTalk, Feishu) for primary access report major frustration with silent, unalerted channel failures that break their production workflows.
- Users building white-label internal or customer-facing bots expressed strong dissatisfaction with leftover hardcoded "PicoClaw" branding on greeting messages and chat previews, which broke their custom brand identity.
- Daily active Web UI users note noticeable performance degradation when chat sessions grow longer, which is a clear UX friction point for regular usage.
- Users who run minimal, cost-optimized deployments that do not configure fallback models previously experienced completely non-functional rate limiting, a configuration pain point that is now fully resolved.

## 8. Backlog Watch
High-priority long-standing items that need additional maintainer attention:
1. [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) (6 weeks old): The high-priority vodozemac encryption migration feature request, marked as high priority and help wanted, has no assigned maintainer to lead the porting work despite demonstrated community interest.
2. [PR #303](https://github.com/sipeed/picoclaw/pull/303) (5 months old): The long-dormant custom bot name PR took over 5 months to get merged, indicating a pending backlog of older community-contributed PRs waiting for review bandwidth.
3. [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) (3 weeks old): The configurable default fallback chain PR, which is a high-demand feature for model resiliency, has been under discussion for 3 weeks with no final review sign-off despite its supporting bug fix already being merged.
4. [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) (20 days old): The critical Matrix reconnection logic bug has had 4 community comments but no publicly assigned fix owner, leaving Matrix channel deployments vulnerable to silent outages.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-07-22
---
## 1. Today's Overview
On 2026-07-22, the NanoClaw open-source AI agent and personal assistant project saw steady, focused development activity across core platform stability, third-party integration expansion, and documentation localization. A total of 12 pull requests and 1 open feature issue were updated in the 24-hour reporting window, with no new official releases published during the period. The 25% merge/close rate for updated PRs signals active maintainer triage, with work spanning operational fixes for SELinux environments, WhatsApp and Telegram messenger channel bug patches, and new feature planning for under-served regional messaging markets. Overall project health remains strong, with contributions from both core team members and external community submitters that align with the public RFS (Request for Skills) contribution framework.

## 2. Releases
No new official NanoClaw releases were published in the 24-hour reporting window.

## 3. Project Progress
3 pull requests were merged or closed today, advancing core functionality and workflow improvements:
1. **[Closed] PR #3095](https://github.com/nanocoai/nanoclaw/pull/3095)** (author: glifocat): Rewrote the official branch maintenance guide for the new registry-branch model, streamlining contribution workflows for external skill submitters and reducing merge conflict risk for incoming pull requests.
2. **[Closed] PR #3114](https://github.com/nanocoai/nanoclaw/pull/3114)** (author: dtanikella): Merged the full Langfuse tracing skill, adding native, no-code observability support for agent telemetry, LLM usage tracking, and execution path debugging for self-hosted deployments.
3. **[Closed] PR #3116](https://github.com/nanocoai/nanoclaw/pull/3116)** (author: ericsherrill-made4net): Completed full upstream mainline sync alignment for local development branches, eliminating drift that caused pre-PR test failures for new contributors.

## 4. Community Hot Topics
The highest engagement item in the reporting period is:
- **[Open Feature Request Issue #3096](https://github.com/nanocoai/nanoclaw/issues/3096)** (author: joshm1230212): Proposes adding a `/add-line` skill for LINE Official Account channel support, with 3 total community comments to date.
  Underlying user needs: Community users based in Japan, Taiwan, and Thailand (markets where LINE is the dominant consumer messenger) highlight that no existing LINE adapter exists in the channel registry, forcing teams to build unsupported custom proxy layers to connect their LINE business accounts to NanoClaw agents. Multiple regional contributors have already volunteered to draft the implementation for the feature, indicating high near-term adoption demand for the integration.

## 5. Bugs & Stability
Bugs and regressions are ranked below by severity, with corresponding fix PR status noted:
1. **Critical**: Telegram silent message drop bug. URLs containing underscores (such as GitLab merge request paths) break Telegram's legacy Markdown parser, causing messages to be permanently dropped after 3 delivery retries with zero error visibility for operators. The fix PR [PR #3111](https://github.com/nanocoai/nanoclaw/pull/3111) that protects URLs from unwanted delimiter stripping is open for review.
2. **High**: WhatsApp inbound media handling regressions. Two related open PRs address confirmed flaws: [PR #3113](https://github.com/nanocoai/nanoclaw/pull/3113) fixes permission errors that prevent containers from reading staged inbound WhatsApp media, while [PR #2896](https://github.com/nanocoai/nanoclaw/pull/2896) patches a regression on the approval-answer path introduced by the previously merged #2895 media handling update.
3. **Medium**: SELinux deployment permission failures. Non-breaking fix [PR #1530](https://github.com/nanocoai/nanoclaw/pull/1530) adds required `:z` SELinux relabel flags to all Docker volume mounts, resolving permission denied errors that block out-of-the-box deployments on Fedora, RHEL, and other SELinux-enforcing systems.
4. **Medium**: OneCLI setup port collision. [PR #3112](https://github.com/nanocoai/nanoclaw/pull/3112) adds user-facing documentation for the 5432 port conflict between the OneCLI bundled Postgres container and pre-existing host Postgres instances, with clear remediation steps for affected users.
5. **Low**: Container WORKDIR path mismatch. [PR #2236](https://github.com/nanocoai/nanoclaw/pull/2236) aligns the Dockerfile WORKDIR with the actual mounted agent group path, fixing a hidden bug that makes the agent workspace invisible by default in containerized deployments.
A separate core team PR [PR #3115](https://github.com/nanocoai/nanoclaw/pull/3115) has also been opened to block legacy non-standard Gmail API routes via idempotent OneCLI rules, ensuring compliance with updated Gmail service access policies.

## 6. Feature Requests & Roadmap Signals
Current activity signals clear near-term roadmap priorities:
- The fully implemented Dial channel integration skill in [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050), which adds Dial to the official setup wizard and channel picker, is almost guaranteed to land in the next minor public release.
- The recently merged Langfuse tracing skill will be included in the next build, marking the first official observability integration for NanoClaw deployments.
- Regional localization and East Asian market support (demonstrated by the LINE feature request and ongoing Traditional Chinese translation work) is a top mid-term priority, with the LINE skill proposal on track for delivery within 1-2 release cycles after the custom `@chat-adapter/line` package is developed.

## 7. User Feedback Summary
Verified user pain points and feedback collected from updated contributions:
1. Users running NanoClaw on SELinux-enabled Linux distributions report they cannot deploy the agent out of the box, requiring manual, unsupported edits to Docker configuration files to resolve permission errors.
2. Self-hosting users who run a standalone Postgres instance on their deployment hosts report silent, un-documented setup failures during `onecli setup` with no clear troubleshooting steps provided in official documentation.
3. Regional users in Japan, Taiwan, and Thailand note there is no official way to connect their widely used LINE business accounts to their NanoClaw agents, forcing them to use third-party workarounds that break support for official feature updates.
4. WhatsApp and Telegram channel operators report intermittent silent message drops and missing inbound media, eroding end-user trust in agent reliability.
Multiple external contributors explicitly praised the project's clear RFS contribution framework, noting the streamlined skill submission process makes adding new integrations accessible for non-core team members.

## 8. Backlog Watch
Long-open high-priority items that require urgent maintainer attention to reduce development bottlenecks:
1. [PR #1530](https://github.com/nanocoai/nanoclaw/pull/1530) (opened 2026-03-29): The SELinux volume label fix has been open for nearly 4 months, with no maintainer review assigned despite its low breaking risk and high impact for Linux power users.
2. [PR #2236](https://github.com/nanocoai/nanoclaw/pull/2236) (opened 2026-05-03): The low-risk container WORKDIR alignment fix has been in triage backlog for 2 months, delaying resolution for all container runtime users.
3. [PR #2896](https://github.com/nanocoai/nanoclaw/pull/2896) (opened 2026-06-30): The follow-up patch for the already merged WhatsApp media handling PR has not been reviewed for 3 weeks, leaving a known user-facing regression in the mainline codebase.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-07-22
---
## 1. Today's Overview
Over the 24-hour monitoring window, the IronClaw project saw extremely high development momentum, with 44 updated issues and 50 updated pull requests, aligned with the recent launch of the first release candidate of its fully rearchitected v1 line. The team is currently in a post-RC consolidation phase, wrapping up security hardening, removing legacy technical debt left over from the 0.29.x codebase, and hardening test coverage to reduce drift between local development and production deployment paths. No critical unpatched production outages were reported, and overall project health is robust, with almost all high-priority rearchitecture epics marked as closed or on track for completion in the next 7 days. Activity levels are ~30% higher than the 30-day average, as the team sprints toward 1.0 GA.

## 2. Releases
A single new release was published on 2026-07-20:
### ironclaw-v1.0.0-rc.1
This is the first release candidate of the full ground-up "Reborn" rearchitecture, and is not an incremental upgrade over the legacy 0.29.x line. The entire agent runtime, storage layer, extension host, and web UI have been rebuilt from scratch:
- The new default `ironclaw` binary is the official rearchitected CLI, replacing the old legacy monolith binary
- No backward compatibility guarantees are provided for pre-existing 0.29.x configurations or extensions in this RC; users testing the release are advised to back up all runtime state before deployment
- Legacy v1 source code has been fully removed from the repository as of this release

## 3. Project Progress
Multiple high-impact workstreams were marked as merged/closed in the last 24 hours:
1. **Store consolidation**: PR #6430 ([Remove in-memory ratchet stores](https://github.com/nearai/ironclaw/pull/6430)) is closed, completing the full retirement of the last remaining in-memory state store (`InMemoryTurnStateStore`) tracked in closed issue #6263, and migrating all durable workloads to reliable filesystem-backed storage to eliminate livelock and state loss risks.
2. **Security hardening**: PR #6432 ([Witness always-present + §5.2.1 origin→gate matrix](https://github.com/nearai/ironclaw/pull/6432)) is closed, implementing mandatory authorization witnesses for all capability dispatch paths to eliminate unauthorized access gaps.
3. **Deployment simplification**: PR #6429 ([Always compile database backends](https://github.com/nearai/ironclaw/pull/6429)) removed conditional compile flags for libsql and Postgres, ensuring both database backends are always tested in CI and eliminating untested edge-case deployment bugs.
4. **Completed epics**: 5 full cross-team epics were marked closed, including the engine v2 capability schema refactor (#2767), Reborn production cutover readiness (#3026), operator diagnostics/logging CLI (#4533), and per-user shared tool authorization policy (#5261).

## 4. Community Hot Topics
The 3 most active discussions by comment count all relate to de-risking the v1 RC rollout:
1. **#2987 [EPIC] Track Reborn architecture landing strategy and grouped PR plan** (44 comments): https://github.com/nearai/ironclaw/issues/2987
   Underlying need: This is the central coordination hub for the entire rearchitecture project, designed explicitly to avoid the pain of reviewing unmanageably large stacked PRs by breaking the full v1 rebuild into small, atomic reviewable chunks. All core contributors align on delivery timelines and dependency chains through this epic.
2. **#6263 §4.3 final store consolidation: retire InMemoryTurnStateStore** (10 comments): https://github.com/nearai/ironclaw/issues/6263
   Underlying need: The team is debating the final validation steps required to fully remove the last remaining in-memory state store, including formal proof of no livelock behavior and no measurable performance regressions before shipping the change to production.
3. **#6389 Phase 4 (§5.11): collapse build_local_runtime + build_production_shaped into one build_runtime(cfg)** (10 comments): https://github.com/nearai/ironclaw/issues/6389
   Underlying need: Developers report massive wasted time debugging inconsistent behavior between local development runtime builds and production runtime builds, and are pushing to unify the two code paths to eliminate cross-environment drift entirely.

## 5. Bugs & Stability
All tracked issues are medium/low severity, with no critical unpatched outages:
1. **Highest severity**: Epic #6394 [Dogfooding & QA bug fixing 07/20/2026 - 07/24/2026](https://github.com/nearai/ironclaw/issues/6394) tracks all post-RC1 user-facing bugs found during internal team dogfooding, no individual critical crash bugs have been filed so far.
2. **Known regression gap**: Issue #6369 [Tier B follow-up: gaps left by v1 (src/) retirement](https://github.com/nearai/ironclaw/issues/6369) tracks minor missing functionality that was not ported over when the legacy v1 monolith was deleted, with no user-facing disruption reported.
3. Active fix PRs exist for all known high-impact usability issues: PR #6425 resolves broken WebUI SSE streams during navigation, while PR #6437 routes all model-visible failures through a typed recovery path to prevent hard runtime process exits.

## 6. Feature Requests & Roadmap Signals
One top user-facing feature request was filed this window, alongside clear roadmap trends:
1. Top user request: Issue #6433 [Feature: Dedicated custom instructions / master prompt section](https://github.com/nearai/ironclaw/issues/6433) asks for a persistent, dedicated UI space for users to set global agent personalization rules, instead of re-typing custom prompts into individual chat threads.
2. Confirmed upcoming roadmap items: Enhanced Google Workspace capabilities for automatic inbox/calendar triage (PR #5503), full test trace replay automation via Emulate.dev (PR #6439), and persistent multi-identity Chrome browser automation (epic #2355) are all in active development.
It is highly likely the dedicated custom instructions UI and Google Workspace feature upgrades will ship in the next v1.0 pre-release update, alongside the full authorization witness security hardening workstream.

## 7. User Feedback Summary
Surfaced user pain points and sentiment are overwhelmingly aligned with post-RC usability:
- **Top operator pain point**: Prior to the RC, operators had to manually edit a messy combination of .env files, unversioned JSON settings, and runtime flags to configure multi-tenant deployments, with no schema validation or audit trails. This use case is directly addressed by the ongoing Configuration-as-Code epic #3036.
- **Top end-user pain point**: WebUI users previously reported frequent state drift between the frontend and backend, leading to inconsistent displays of active agent runs and lost work, which is being fully resolved by the gateway state convergence epic #2792.
- **Positive feedback**: Early RC1 testers report significant improvements to runtime speed, the intuitive new unified CLI, and the built-in operator diagnostics tools that eliminate the need for external debugging scripts.

## 8. Backlog Watch
High-priority items that require urgent maintainer attention to unblock downstream work:
1. **Issue #3484 [EPIC] Reborn Contributor Runway: enable parallel skill/tool/channel porting** (open since May 2026): https://github.com/nearai/ironclaw/issues/3484
This epic is the critical prerequisite to allow external contributors to port tools, skills, and integrations without touching core kernel internals, but it has not received an update in 72 hours, risking delay to the v1.0 GA timeline.
2. **Issue #2392 Feature Epic: Host-level multi-account support for all messaging channels** (open since April 2026): https://github.com/nearai/ironclaw/issues/2392
This feature blocks all enterprise deployments that require multiple accounts for WeCom, Telegram, or Slack channels, and is waiting on explicit prioritization after the v1 RC stabilization phase.
3. **PR #6116 feat(reborn): unified generic extension runtime** (open for 7 days): https://github.com/nearai/ironclaw/pull/6116
This XL-sized medium-risk PR is a core dependency for all third-party extension developers, and has not received full maintainer review yet, blocking parallel work on the extensions ecosystem.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-07-22
Repository: https://github.com/netease-youdao/LobsterAI

---

## 1. Today's Overview
This 24-hour monitoring window for LobsterAI records steady, high-output development activity with 1 active updated issue and 10 total updated pull requests, split evenly between 5 newly merged/closed patches and 5 in-review open PRs, with no new official releases published in the period. Project development velocity remains above average, with merged changes covering end-user experience fixes, artifact workflow optimization, platform-specific Windows improvements, and core AI agent cowork module stability upgrades. The team is prioritizing long-reported usability pain points alongside ongoing dependency maintenance, with no critical security or outage-level incidents flagged from user reports in this cycle. Overall project health is robust, with clear cross-module alignment on resolving user-facing friction points.

## 2. Releases
No new official releases were published for LobsterAI in this 24-hour tracking window.

## 3. Project Progress (Merged/Closed PRs)
All 5 closed patches completed core feature and fix delivery as below:
1. **PR #2372** https://github.com/netease-youdao/LobsterAI/pull/2372: Fixed the OpenClaw token proxy SSE truncation issue to ensure full, unbroken streaming output from connected large model endpoints.
2. **PR #2371** https://github.com/netease-youdao/LobsterAI/pull/2371: Upgraded browser co-annotation and conversation state management: added support for annotations with style edits but no text comments, displays original-to-new value diffs for modified page elements in prompts and attachment badges, clears residual webview annotation states when draft comments are emptied, and added full unit test coverage for new annotation metadata logic.
3. **PR #2370** https://github.com/netease-youdao/LobsterAI/pull/2370: Unified subscription permission interception popups for both artifact sharing and local service deployment flows, separated sharing vs deployment-specific login/subscription copywriting, and implemented consistent, test-covered access control rules across all artifact distribution paths.
4. **PR #2369** https://github.com/netease-youdao/LobsterAI/pull/2369: Optimized artifact sharing permission submission workflow: eliminated unintended auto-creation of share links when opening the share settings modal, added explicit "Create Share" and "Update Access Permissions" actions, added success feedback and button state guards for local deployment permission operations.
5. **PR #2368** https://github.com/netease-youdao/LobsterAI/pull/2368: Implemented silent Windows background update installation, launching the NSIS installer without interactive user wizard prompts, adding localized, user-friendly error messaging for declined UAC prompts instead of raw system error alerts.

## 4. Community Hot Topics
The most recently active user-centric contribution is **PR #2374** https://github.com/netease-youdao/LobsterAI/pull/2374, which addresses community-reported issue #2342 to add a permanent toggle in *Settings → General* to hide the sidebar ad banner. The underlying user demand reflects frustration with the previous behavior that only allowed temporary dismissal of individual banners, which interrupted multi-hour daily work sessions for power users. This PR signals the development team is prioritizing user control over in-app promotional content, a frequently requested quality of life feature from the LobsterAI user base.

## 5. Bugs & Stability
Only one high-severity core functional bug was updated in this window, no crash or outage level incidents were reported:
- **High Severity: Broken multimodal workflow** Issue #1861 https://github.com/netease-youdao/LobsterAI/issues/1861: Image attachments are not reprocessed correctly when users switch between vision-capable and non-vision models, leading to uploaded images being invisible to the newly selected model either via missing base64 payloads or unnecessary base64 transmission to non-vision models. A matching fix PR #2373 https://github.com/netease-youdao/LobsterAI/pull/2373 has been submitted to sync image attachment processing logic with the target model's vision capability, and resolution is expected imminently.

## 6. Feature Requests & Roadmap Signals
Recent activity points to three core priorities for the next minor feature release:
1. The open permanent sidebar ad hiding feature from PR #2374 is nearly complete and will very likely ship in the next version, given it requires no breaking API changes and addresses a widely raised user demand.
2. Full resolution of the cross-model image attachment sync bug (Issue #1861) will be included to deliver a reliable, seamless multimodal interaction experience.
3. Finalized artifact sharing and subscription permission flows will be released to support stable, error-free code/artifact distribution for paid tier users.

## 7. User Feedback Summary
Recent user feedback centers on eliminating small daily-use friction points, with almost no complaints about core AI agent functionality:
- Users express strong dissatisfaction with the previous behavior that forced repeated temporary dismissal of sidebar ad banners after every app restart.
- Power users working with multimodal models report significant wasted productivity from broken image attachment processing when switching models, requiring repeated re-uploads of files.
- Windows users previously complained about interruptive update wizards that broke their work sessions, which will be resolved by the new silent update feature.
- Confusion and unexpected permission errors from the old, inconsistent artifact sharing flow have been eliminated in the latest merged patches, with positive preliminary feedback from early testers.

## 8. Backlog Watch
Three stale dependency upgrade PRs updated in this window have been pending maintainer attention for over 3 months, and carry significant long-term maintenance value:
- PR #1279 https://github.com/netease-youdao/LobsterAI/pull/1279: Bump cross-env from v7.0.3 to v10.1.0
- PR #1280 https://github.com/netease-youdao/LobsterAI/pull/1280: Bump react-dom from v18.3.1 to v19.2.4
- PR #1281 https://github.com/netease-youdao/LobsterAI/pull/1281: Bump vite from v5.4.21 to v8.0.9

These major version upgrades bring critical security patches, UI rendering performance improvements, and modern build tooling capabilities, but carry minor risk of edge-case UI breakage that requires triage to schedule for a suitable stable release window.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Daily Digest | 2026-07-22
Repository: github.com/moltis-org/moltis
---

## 1. Today's Overview
Over the 24-hour monitoring window ending 2026-07-22, the Moltis open-source AI agent project recorded low, maintenance-focused activity with no urgent user-facing development demands. There were zero new or updated open/closed issues across the period, indicating no newly reported critical disruptions or bugs from the active user base. The only tracked repository update is a single automated dependency maintenance PR for the project's documentation site, with no new feature work or production deployments initiated in the window. This activity profile signals a stable, low-turbulence operational phase for the project with no immediate triage backlog for maintainers to address.

## 2. Releases
No new production, pre-release, or patch versions of Moltis were published in this 24-hour cycle. This section is marked as inactive for the current digest.

## 3. Project Progress
No PRs were merged or formally closed during the tracking window, so no new functional features, bug fixes, or core infrastructure changes were advanced to the project's main production branch. The only in-flight pending work is an automated dependency update for the documentation directory that remains queued for maintainer review.

## 4. Community Hot Topics
The only active updated item across the repository is the following PR:
- [PR #1161: chore(deps): bump astro from 7.0.9 to 7.1.3 in /docs in the npm_and_yarn group across 1 directory](https://github.com/moltis-org/moltis/pull/1161)
  This routine Dependabot-generated PR currently has no user comments or community reactions, so there are no high-engagement public community discussions about project functionality or priorities in this digest cycle. The lack of engagement indicates users are not raising unmet needs related to the project's documentation tooling at this time.

## 5. Bugs & Stability
No new bugs, crashes, or regression reports were submitted or updated in the Moltis repository during the 2026-07-22 monitoring window. There are no severity-ranked active bug tickets associated with this period, and no associated fix PRs for newly reported stability issues have been opened. This zero-new-bug trend suggests the core personal AI assistant and agent functionality is operating without widely documented disruptive flaws for current users.

## 6. Feature Requests & Roadmap Signals
No new user-submitted feature requests were logged in the repository over the past 24 hours. The only visible pending change aligned with standard roadmap maintenance priorities is the upcoming minor Astro documentation framework version bump, which will almost certainly be included in the next scheduled minor release to keep the project's public docs site performant and patched against upstream security vulnerabilities. No clear signals of new user-facing core AI agent features were captured in this digest cycle.

## 7. User Feedback Summary
No new public user feedback, pain point reports, or shared production use cases were posted to the Moltis repository's issue or PR channels in the tracking window. The complete absence of new negative or positive user submissions suggests the project's current published functionality aligns with the baseline expectations of its active user base for this short monitoring period.

## 8. Backlog Watch
The only outstanding item waiting for maintainer attention is the recently opened PR #1161 for the Astro docs dependency bump. Created on 2026-07-21, this routine update is low-effort to review and merge, and unaddressed minor version dependency patches for public-facing documentation sites can accumulate unnecessary supply chain vulnerability exposure over time. It is the highest-priority untriaged item in the current Moltis backlog.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 2026-07-22 Project Digest
---
## 1. Today's Overview
This is a high-velocity workday for the CoPaw team following the recent v2.0 major release, with 41 total updated issues and 46 updated pull requests tracked in the 24-hour window. Over 53% of all updated tracked items were closed/merged, demonstrating strong triage and bug-fix throughput targeting v2.0 regressions. The project also received 4 first-time contributor PR submissions today, indicating fast-growing and active community participation. The day’s work balanced core architecture refactoring, user-facing feature additions, and stability improvements for both desktop and self-hosted deployment scenarios, with no major production outages reported.

## 2. Releases
A new beta patch release **v2.0.1-beta.1** was published today, targeted at resolving critical stability gaps in the v2.0 line:
### Key Changes:
1.  Fixed broken absolute import paths in the Tauri desktop entry point that caused launch failures on Windows systems
2.  Added explicit OSError exception handling in the MemorySpace module’s `_saved_tool_refs` logic to prevent memory initialization crashes on read-only file systems
3.  Version bumped explicitly to 2.0.1b1 to avoid version resolution conflicts for pip and Docker deployments
### Migration Notes:
No breaking changes were introduced, existing users on v2.0.0+ can upgrade directly with zero configuration modification required.

## 3. Project Progress
27 PRs were merged/closed in the past 24 hours, with major advancements including:
1.  **Core governance refactor completion**: PRs [#6190](https://github.com/agentscope-ai/QwenPaw/pull/6190) and [#6313](https://github.com/agentscope-ai/QwenPaw/pull/6313) unified all built-in and plugin tool registration logic under the `@tool_descriptor` decorator framework, eliminating duplicated manually maintained tool registration lists and cutting ~8-10k of redundant token consumption per session from unnecessary tool metadata.
2.  **OMP workflow integration shipped**: PR [#5882](https://github.com/agentscope-ai/QwenPaw/pull/5882) added 5 pre-built production workflow modes (UltraQA, Ralph, Ultrawork, Autopilot, Team), and extended the `spawn_subagent` interface with tool/skill whitelisting and batch dispatching support.
3.  **Shared safety check unification**: PR [#5796](https://github.com/agentscope-ai/QwenPaw/pull/5796) decoupled ACP slash commands, extracted universal destructive operation safety check primitives to ensure consistent guard behavior across all execution paths.
4.  **New features delivered**: PR [#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) added one-click agent configuration copy, PR [#6271](https://github.com/agentscope-ai/QwenPaw/pull/6271) added AIOnly as a built-in model provider supporting 190+ aggregated LLMs, and PR [#6183](https://github.com/agentscope-ai/QwenPaw/pull/6183) made log rotation size and backup counts configurable via environment variables for DevOps flexibility.

## 4. Community Hot Topics
The highest activity items from the past 24 hours are:
1.  [#2291 Open Contribution Task List](https://github.com/agentscope-ai/QwenPaw/issues/2291) (65 comments): This official community contribution tracker is the most active ongoing discussion, with dozens of contributors claiming P0-P2 priority tasks across core backend, frontend UI, and documentation components. It reflects strong community demand for transparent, low-barrier contribution paths, and the project’s open governance model that allows non-core-team users to ship official features.
2.  [#6257 Multiple Parallel Tool Calls Produce Identical Thinking Output](https://github.com/agentscope-ai/QwenPaw/issues/6257) (13 comments): This bug report collected feedback from heavy power users running multi-tool agent workflows for data analysis and automation tasks. The underlying demand here is full auditability of per-tool-call agent reasoning, a critical requirement for compliance and debugging of enterprise agent deployments.

## 5. Bugs & Stability
Bugs are ranked by severity as follows:
1.  **High Severity**: [#6299 Deleted session records persist in history.db causing cross-session context contamination](https://github.com/agentscope-ai/QwenPaw/issues/6299): Affects all v2.0.0.post2 users that upgraded from v1.x with legacy history data, causing leaked conversation context, lost new sessions, and 100% CPU spikes. A complete fix PR [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) that preserves session IDs during history migration is already under active review.
2.  **High Severity**: [#6307 v2.0 introduces ~2s fixed overhead per simple conversational reply vs v1.x](https://github.com/agentscope-ai/QwenPaw/issues/6307): This cross-cutting performance regression impacts all v2.0 users, degrading end-user responsiveness even when LLM inference latency is low. No linked fix PR has been filed as of today.
3.  **Medium Severity**: [#6301 Incorrect timestamp timezone conversion for naive UTC session timestamps](https://github.com/agentscope-ai/QwenPaw/issues/6301): All self-hosted container users running in UTC timezone see incorrect local timestamps for historical chat messages. Fix PR [#6309](https://github.com/agentscope-ai/QwenPaw/pull/6309) has been submitted and is ready for merging.
4.  **Medium Severity**: [#6273 Unify task tracking and same-session concurrency semantics](https://github.com/agentscope-ai/QwenPaw/issues/6273): Different agent execution entry points have inconsistent serialization/parallelism behavior, causing new task payloads to be silently dropped when a session is already running. No fix PR has been filed yet.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests with clear implementation paths that are highly likely to land in the next stable v2.0.1 release include:
1.  Per-conversation independent model override (#6318): A ready-to-merge PR [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) submitted by a first-time contributor implements this opt-in feature, allowing users to assign different LLMs for different chat sessions under the same agent, which will almost certainly be included in the v2.0.1 stable release.
2.  Automatic current real-time timestamp injection to LLM context (#6283): This small, high-impact feature that prevents model date confusion when resuming old sessions has no major technical barriers and will be prioritized for the next minor release.
3.  Tauri desktop workspace quick access button (#6083): This UX improvement for non-technical users to open agent-generated output files directly from the desktop UI has broad demand from consumer users, and will ship in the next Tauri desktop patch.

Two high-demand user requests (drag-and-drop document upload in chat, mobile web console adaptation) will be prioritized for the v2.1 feature roadmap.

## 7. User Feedback Summary
### Key User Pain Points:
1.  Universal dissatisfaction with the 2s fixed latency regression in v2.0, many long-time v1.x power users report their assistant no longer feels responsive enough for daily conversational use.
2.  Users deploying on enterprise instant messaging channels (Feishu, QQ) cannot interrupt runaway background subagent tasks, leading to unexpected excessive LLM token consumption.
3.  Users running contract audit and document processing use cases have no native way to upload multi-format files directly in the chat window, breaking their core workflow.
### Positive Feedback:
Multiple new first-time contributors publicly praised the project’s clear contribution guidelines and maintainer feedback speed, with 4 new contributors successfully getting their PRs merged today.

## 8. Backlog Watch
High-priority unresolved items that have had no public progress updates for weeks and need maintainer attention:
1.  [#2055 OpenAI compatible models return massive tool calls in single turn leading to execution runaway](https://github.com/agentscope-ai/QwenPaw/issues/2055): Opened on 2026-03-22, affecting users integrating third-party custom OpenAI-compatible models, with no assigned developer or fix plan public as of today.
2.  [#4873 Starting two subagents simultaneously triggers infinite fast polling that cannot be interrupted from Feishu channels](https://github.com/agentscope-ai/QwenPaw/issues/4873): Opened on 2026-06-01, with 5 user comments, no public merged fix, impacting all enterprise Feishu channel deployments.
3.  [#5657 Loop detection mechanism to auto-break stuck agent workflow states](https://github.com/agentscope-ai/QwenPaw/issues/5657): Opened on 2026-06-30, requested by multiple power users running long-running unattended agent tasks, no public implementation progress reported.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 2026-07-22 Project Digest
---
## 1. Today's Overview
ZeroClaw maintained very high active development velocity in the 24-hour window ending 2026-07-22, with 50 updated community issues and 50 updated pull requests tracked across the repository. 9 total PRs were merged or closed, delivering targeted fixes for cross-platform test portability, documentation reproducibility, and core SOP routing logic, with no new official releases issued. The project is advancing multiple high-priority stacked roadmap workstreams including the autonomous "Goal Mode" session framework and end-to-end evaluation tooling, while collaborative discussion around security hardening and user-facing integration improvements remains robust across contributor and community channels. Overall health is strong, with fast turnaround times for triage of newly reported critical bugs and clear progress on pre-planned feature milestones.

## 2. Releases
No new official releases were published in the 24-hour reporting window, so no breaking change announcements or migration guidance for new versions are available at this time.

## 3. Project Progress
9 PRs were merged or closed today, advancing core reliability and user experience improvements:
1. [#8756](https://github.com/zeroclaw-labs/zeroclaw/pull/8756): Fixed flaky media marker assertions to be fully portable for Windows test and CI environments, eliminating cross-platform test failures.
2. [#9011](https://github.com/zeroclaw-labs/zeroclaw/pull/9011): Added active runtime context visibility to the ZeroCode dashboard, so users can immediately confirm which daemon, config, and workspace their UI session is connected to, eliminating manual context reconstruction.
3. [#9055](https://github.com/zeroclaw-labs/zeroclaw/pull/9055): Resolved reproducibility gaps in the documentation build pipeline for multi-language translation workflows, ensuring clean fresh checkouts can generate complete translated documentation without leftover artifact dependencies.
4. [#9183](https://github.com/zeroclaw-labs/zeroclaw/pull/9183): Patched the longstanding SOP routing logic bug #9120, preventing switch case evaluation from incorrectly running after a top-level `when` conditional guard returns false.
The remaining 5 resolved PRs covered smaller CI hygiene, bug fix, and refactor tasks across config and observability surfaces. The large stacked Goal Mode and evaluation tooling workstreams remain in active review and are nearing readiness for final merge.

## 4. Community Hot Topics
The most active community discussions today center on core roadmap design and top user-facing pain points:
1. [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) [Feature]: Add typed per-agent git identity for built-in git operations (6 comments): The high engagement on this enhancement reflects widespread community demand for proper multi-tenancy support across shared MCP instances and parallel agent process lanes, where teams need isolated, non-conflicting git credentials and identities for different workloads running on the same ZeroClaw deployment.
2. [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) [Bug]: Telegram channel cannot be configured (6 comments): This top-priority blocked workflow bug is one of the most visible user-facing issues for new adopters, with multiple users reporting they cannot get the Telegram bot integration working even after following official quickstart guides.
3. [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal mode for bounded autonomous session work (4 comments, 1 👍): This core feature RFC for first-class durable autonomous sessions that run user-defined objectives until completion, pause, cancellation, or budget exhaustion has broad community buy-in, filling a long-noted gap between ad-hoc interactive chat turns and scheduled cron jobs.

## 5. Bugs & Stability
All newly reported bugs are ranked below by severity:
1. **S0 Critical Security**: [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) Shell Tool Workspace Boundary Bypass: The shell tool does not enforce the same workspace boundary rules applied to file system tools, meaning symlinks inside the workspace pointing to external directories can be used by agents to read/write arbitrary files outside approved workspace scope. No public fix PR has been published as of the end of the reporting window.
2. **P1 High Severity In-Progress**: Three active high-risk bugs are under active development with open in-progress status: the delegate sub-agent tool allowlist bypass security flaw [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279), unbounded RSS memory growth from repeated MCP schema cloning leading to WSL2 OOM events [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642), and accumulating zombie stdio MCP server processes [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731).
3. **New P2 Bug (Reported Today)**: [#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240) Config `save_dirty` silently drops writes for map keys containing dots, breaking configuration persistence for all popular model IDs that use dots in their naming convention (gpt-4.1, claude-3.5-sonnet, gemini-1.5-pro). No fix PR has been opened yet.
The SOP routing logic bug #9120 was fully resolved today via merged PR #9183.

## 6. Feature Requests & Roadmap Signals
Based on open PR progress and community feedback, the following features are highly likely to land in the next minor v0.9.x release:
1. The full 5-PR stacked Goal Mode autonomous session workstream, which adds dedicated `/goal` chat commands, runtime controllers, and cost attribution for unbounded objective-driven agent work, is the farthest along of all major roadmap items and will almost certainly be the headline feature of the next release.
2. The in-progress OpenAI Chat Completions compatibility adapter [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) will ship shortly after Goal Mode, enabling users to connect popular third-party self-hosted LLM UIs (Open WebUI, LobeChat) directly to ZeroClaw agents without building custom translation layers.
3. The new append-only eval run history receipt and trend dashboard feature series (PRs #9244, #9245, #9248) will also be part of the next release, giving teams the ability to track agent performance pass rates across versions to catch regressions early.
Other high-demand features with accepted active RFCs including Mixture-of-Agents virtual model providers, Gemini Live realtime speech-to-speech channels, and one-click per-chat model switching are targeted for the v0.10 near-term roadmap.

## 7. User Feedback Summary
Real user feedback aggregated today highlights three key pain points and strengths:
1. New user onboarding experience has clear gaps: Multiple new users report broken out-of-box workflows, including silently disabled local Whisper transcription for fresh installs, incorrect Telegram setup documentation, and non-functional Telegram bot channels after following the quickstart guide, hurting first-run satisfaction.
2. Power users migrating from competing agent runtimes (notably Moltis) are requesting parity for flexible per-chat model switching workflows that they are used to on alternative platforms.
3. Security-focused enterprise adopters have flagged the recently surfaced S0 workspace bypass and sub-agent tool allowlist bypass bugs as non-negotiable blockers for production deployment, placing security hardening as a top priority for their adoption path.
4. Many community users praise the unique SOP (Standard Operating Procedure) engine as a standout differentiator for ZeroClaw, but note the lack of real-world syntax examples in official documentation is a major barrier to wider adoption of the feature.

## 8. Backlog Watch
These high-impact outstanding items are currently awaiting urgent maintainer triage and attention:
1. The newly filed S0 critical shell workspace bypass security bug [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) has no assigned maintainer or linked fix PR, and needs urgent prioritization to patch before the next release to avoid security exposure.
2. The p1 priority Telegram configuration bug [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) has been open for nearly a month, has 6 community comments, and still has no linked public fix PR despite being a top user-facing integration blocker.
3. The orphaned SkillForge auto-skill discovery engine tracker [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) has been open for weeks waiting for maintainer decision on whether to wire the half-finished feature with safe defaults or remove the dead unmaintained code entirely from the codebase.
4. The unbounded MCP schema cloning memory leak bug [#8642

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*