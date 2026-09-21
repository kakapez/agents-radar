# OpenClaw Ecosystem Weekly Digest 2026-09-21

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-21 00:58 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Weekly Project Digest | 2026-09-21
---

## 1. Last 7 Days' Overview
This week saw high-velocity activity in the OpenClaw project, with 500 issues updated (297 open/active, 203 closed) and 500 pull requests updated (296 open, 204 merged/closed). The team shipped two new releases, including the widely deployed v2026.9.5, which included 64 direct commits, contributions from 503 developers, and 4,179 integrated pull requests. A significant share of activity focused on stability fixes for the v2026.9.x release line, with multiple high-severity crash, upgrade failure, and performance regression reports driving prioritization of bug resolution and upgrade experience improvements. Development work also advanced core extensibility (Agents API tooling), UI polish, and CI/CD efficiency alongside critical stability patches. Overall project health shows active maintenance responsiveness paired with elevated bug volume tied to recent major release rollouts.

---

## 2. Releases
### v2026.9.5 (stable channel)
- **Release link**: [openclaw/openclaw Release v2026.9.5](https://github.com/openclaw/openclaw/releases/tag/v2026.9.5)
- **Scope**: Includes 64 direct commits, 4,179 integrated pull requests, and 503 contributors. Full release notes are available at [docs.openclaw.ai/rele](https://docs.openclaw.ai/rele) (note: link truncated in source data).
- **Linux companion update**: The `linux-stable` channel published a matching v2026.9.5 companion build.
- **Distribution artifacts**:
  - [AppImage (amd64)](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage)
  - [Debian package (amd64)](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)
- **Known upgrade issues (from community reports)**: Multiple users reported upgrade failures from 2026.9.3/9.4 to 9.5, including `doctor-failed` rollbacks, migration deadlocks, and pre-migration integrity check timeouts — see *Bugs & Stability* for details.
- **Breaking changes / migration notes**: No formal breaking changes were listed in the provided release metadata, but users are advised to back up state before upgrading due to reported SQLite migration edge cases.

---

## 3. Project Progress
Among the 204 merged/closed PRs this week, key advancements and fixes included:
1. **Upgrade & installation reliability**
   - [PR #154200](https://github.com/openclaw/openclaw/pull/154200): Fixed source update failures caused by foreground Gateway processes holding state lifecycle locks during shutdown, reducing Doctor-stage upgrade failures.
   - [PR #154160](https://github.com/openclaw/openclaw/pull/154160): Refactored update execution and finalization to remove unused parallel paths and redundant plugin activation steps, streamlining upgrade workflows.
   - [PR #138085](https://github.com/openclaw/openclaw/pull/138085): Tightened Docker package acceptance checks to require exact per-manager version identity, preventing mismatched artifact installs.
2. **Memory & performance optimizations**
   - [PR #154222](https://github.com/openclaw/openclaw/pull/154222): Reduced Git fixture copying overhead in PR tests, lowering CI filesystem load.
   - [PR #154150](https://github.com/openclaw/openclaw/pull/154150): Shortened lint and typecheck CI jobs by retaining reusable compiler state, cutting CI runtime.
   - [PR #154209](https://github.com/openclaw/openclaw/pull/154209): Reduced Code Mode source preparation overhead by skipping Acorn AST construction for plain JavaScript cells without module loader syntax.
3. **Core capability extensions**
   - [PR #154208](https://github.com/openclaw/openclaw/pull/154208): Added OpenClaw tool support for Agents API sessions, enabling access to messaging, memory search, and plugin functions (awaiting author updates).
   - [PR #154217](https://github.com/openclaw/openclaw/pull/154217): Refactored agent harness tool result bookkeeping to share logic across runtimes, preparatory to broader Agents API tool rollout.
   - [PR #154135](https://github.com/openclaw/openclaw/pull/154135): Added search provider configuration and credential verification in Settings, improving operator control over search routing.
4. **Bug fixes for user-facing regressions**
   - [PR #154098](https://github.com/openclaw/openclaw/pull/154098): Fixed stale `claude-cli` user-agent headers that caused OAuth authentication failures with Anthropic (closes Issue #94716).
   - [PR #153895](https://github.com/openclaw/openclaw/pull/153895): Fixed Dream Diary light-phase narrative drops caused by non-idempotent diary context clamping (closes Issue #153682).
   - [PR #153449](https://github.com/openclaw/openclaw/pull/153449): Fixed missing `chat_template_kwargs`/`extra_body` parameters in isolated OpenAI-compatible model completions (closes Issue #153391).
5. **UI/UX improvements**
   - [PR #151258](https://github.com/openclaw/openclaw/pull/151258): Removed empty progress space in chat transcripts and closed late cards by default, reducing layout shift.
   - [PR #154207](https://github.com/openclaw/openclaw/pull/154207): Added draggable, position-remembering System busyness panel for flexible monitoring placement.
   - [PR #154144](https://github.com/openclaw/openclaw/pull/154144): Replaced sidebar session ellipsis menu with direct Archive/Restore buttons, streamlining session management.

---

## 4. Community Hot Topics
Ranked by comment count and engagement, these issues/PRs reflect the most pressing user and developer discussions this week:
1. **[Issue #143524](https://github.com/openclaw/openclaw/issues/143524) (35 comments, P0)**: Agent SQLite WAL file grows to 1.4–2.8 GB in days on Windows, blocking Gateway startup  
   *Underlying need*: Users require reliable database checkpointing and storage bounds for long-running agent deployments, especially on Windows where WAL truncation appears broken. This is a top stability pain point for production single-gateway deployments.
2. **[Issue #97616](https://github.com/openclaw/openclaw/issues/97616) (31 comments, P1)**: Unreaped hook/tool child processes cause zombie accumulation and runtime degradation  
   *Underlying need*: Operators running long-lived OpenClaw instances need proper process lifecycle management to avoid resource exhaustion and gradual performance decay.
3. **[Issue #144911](https://github.com/openclaw/openclaw/issues/144911) (31 comments, P1)**: MCP server init timeout crashes the entire Gateway via unhandled promise rejection  
   *Underlying need*: Users expect fault isolation for MCP server failures — a single misbehaving MCP server should not take down the full Gateway process.
4. **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) (29 comments, P1)**: Gateway memory leak grows RSS from 350MB to 15.5GB over 2–3 days, causing OOM crashes  
   *Underlying need*: Core memory stability is a blocking requirement for production deployments, with users reporting unworkable restart cycles from OOM kills.
5. **[Issue #119720](https://github.com/openclaw/openclaw/issues/119720) (21 comments, P1)**: Synchronous agent persistence blocks the Gateway event loop at scale  
   *Underlying need*: High-scale deployments require non-blocking state operations to maintain throughput and avoid event loop starvation.
6. **[Issue #45608](https://github.com/openclaw/openclaw/issues/45608) (12 comments, 4 👍)**: Feature request to add pre-reset agentic memory flush for `/new`, `/reset`, and daily resets  
   *Underlying need*: Users want memory persistence consistency across session reset operations, matching the behavior already implemented for compaction. This is the highest-upvoted feature request in the week's dataset.
7. **[PR #82950](https://github.com/openclaw/openclaw/pull/82950) (stale, P1)**: Fix for catastrophic regex backtracking hanging command authorization  
   *Underlying need*: Security-focused users require robust input validation to prevent denial-of-service via malicious regex patterns in approval rules. This long-open PR remains a high-priority stability gap.

---

## 5. Bugs & Stability
Ranked by severity (P0 highest), with fix PR status noted where available:
### P0 (Critical)
1. **[Issue #143524](https://github.com/openclaw/openclaw/issues/143524)**: SQLite WAL unbounded growth on Windows (2026.9.2/9.3)  
   Status: Open, needs maintainer review/info; no fix PR linked.
2. **[Issue #149538](https://github.com/openclaw/openclaw/issues/149538)**: Gateway reaches ready state but never serves requests, with event loop starvation on 632-agent fleets  
   Status: Open, needs maintainer review/info; no fix PR linked.
3. **[Issue #153257](https://github.com/openclaw/openclaw/issues/153257)**: v2026.9.5 causes 8-hour failure recovery sessions in previously stable environments  
   Status: Open, needs maintainer review/info; no fix PR linked. User reports severe post-upgrade instability.
4. **[Issue #152981](https://github.com/openclaw/openclaw/issues/152981)**: Gateway startup hangs ~17 minutes at model runtime sidecar on 2026.9.5 (Windows 11)  
   Status: Open, needs maintainer review; no fix PR linked.
5. **[Issue #38327](https://github.com/openclaw/openclaw/issues/38327)**: "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview (regression from 2026.3.2)  
   Status: Open, stale, needs maintainer review; no fix PR linked.
6. **[Issue #146887](https://github.com/openclaw/openclaw/issues/146887)**: Multi-stage upgrade failure (2026.9.3→9.4): MCP timeout crash, lint hard-gate, service handoff failure  
   Status: Open; related partial fixes include [PR #154098](https://github.com/openclaw/openclaw/pull/154098) (auth fix) and upgrade flow refactors, but full resolution not confirmed.
7. **[Issue #145995](https://github.com/openclaw/openclaw/issues/145995)**: Intermittent plugin inspection failure: SQLite state source did not stabilize  
   Status: Open, source-reproduced; no fix PR linked.
8. **Closed P0 bugs resolved this week**:
   - [Issue #152759](https://github.com/openclaw/openclaw/issues/152759): `openclaw update` 2026.9.4→9.5 fails with `doctor-failed` (closed, likely addressed via upgrade flow fixes in PR #154200/#154160)
   - [Issue #153704](https://github.com/openclaw/openclaw/issues/153704): 2026.9.5 update dies at ~299s in pre-migration integrity check (closed)
   - [Issue #152884](https://github.com/openclaw/openclaw/issues/152884): Update deadlock during session SQLite migration (closed)
   - [Issue #153882](https://github.com/openclaw/openclaw/issues/153882): Plugin state migration deadlock on update (closed)
   - [Issue #107220](https://github.com/openclaw/openclaw/issues/107220): 2026.7.1 legacy memory sidecar conflict crash loop (closed)

### P1 (High)
1. **[Issue #97616](https://github.com/openclaw/openclaw/issues/97616)**: Zombie child process leak from hooks/tools  
   Status: Open, needs info; no fix PR linked.
2. **[Issue #144911](https://github.com/openclaw/openclaw/issues/144911)**: MCP server init timeout crashes Gateway (unhandled rejection)  
   Status: Open, fix shape clear/queueable; no linked fix PR yet.
3. **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)**: Severe Gateway memory leak (350MB → 15.5GB in 2–3 days)  
   Status: Open, needs maintainer review/info; no fix PR linked.
4. **[Issue #139847](https://github.com/openclaw/openclaw/issues/139847)**: Messages sent during active reply runs are dropped (regression in 2026.9.2)  
   Status: Open, fix shape clear/queueable; no linked PR yet.
5. **[Issue #137332](https://github.com/openclaw/openclaw/issues/137332)**: Mixed terminal requester-settle batches retry forever after ownership check  
   Status: Open, fix shape clear/queueable; no linked PR yet.
6. **[Issue #144742](https://github.com/openclaw/openclaw/issues/144742)**: 2026.9.4 ships without handoff lease row fix, breaking all config writes (release blocker)  
   Status: Open, not reproducible on main (fix landed post-release branch cut).

---

## 6. Feature Requests & Roadmap Signals
Based on user upvotes, comment activity, and linked in-progress PRs, these features are likely to appear in upcoming releases:
1. **Agents API tool support** (strong signal): Multiple in-progress PRs ([#154208](https://github.com/openclaw/openclaw/pull/154208), [#154217](https://github.com/openclaw/openclaw/pull/154217)) are building out OpenClaw tool access for Agents API sessions, including messaging, memory search, and plugin function integration. This is a core platform extensibility priority.
2. **Search provider management UI** (strong signal): [PR #154135](https://github.com/openclaw/openclaw/pull/154135) adds Settings-based search provider configuration, credential verification, and routing inspection — addressing operator demand for centralized search control.
3. **Pre-reset agentic memory flush** (medium signal): [Issue #45608](https://github.com/openclaw/openclaw/issues/45608) has the highest user upvote count (4 👍) among feature requests, asking for consistent memory flushing across `/new`, `/reset`, and daily resets. The underlying mechanism already exists for compaction, making implementation low-effort with high user value.
4. **Feishu (Lark) channel progress streaming** (medium signal): [Issue #131457](https://github.com/openclaw/openclaw/issues/131457) requests parity with Slack/Discord/Telegram streaming support for Feishu. The pattern is already implemented across 6 other channels, reducing implementation risk.
5. **Cron unification for automation primitives** (long-term signal): [Issue #110950](https://github.com/openclaw/openclaw/issues/110950) proposes unifying heartbeats, watchers, and scheduled automation under a single cron primitive. It has sustained community discussion but remains tagged "needs product decision," indicating it is under evaluation rather than actively scheduled.

---

## 7. User Feedback Summary
### Pain Points & Dissatisfaction
- **Upgrade instability**: Multiple users reported broken upgrades to v2026.9.5, including silent rollbacks, multi-hour recovery sessions, and migration deadlocks (Issues #153257, #152759, #153704, #152884). One user explicitly

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
*Week of 2026-09-21*

---

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is in a phase of rapid maturation, with projects balancing foundational stability work and expansion of enterprise-grade features. Across leading projects, core priorities include hardening long-running deployment reliability, extending multi-provider model compatibility, and refining plugin/extension isolation to support third-party ecosystems. Community-driven roadmap shaping is becoming increasingly prominent, with enterprise multi-tenant deployments, granular security controls, and standard API compatibility emerging as high-demand user needs. The landscape spans from high-velocity core platforms to specialized, stability-focused enterprise-oriented tools, creating a layered ecosystem for both personal and organizational use cases.

---

## 2. Activity Comparison
| Project | Updated Issues (Open/Closed) | Updated PRs (Open/Merged) | Release Status | Project Health Score (1-10) |
|---|---|---|---|---|
| **OpenClaw** | 500 (297 open / 203 closed) | 500 (296 open / 204 merged) | 2 stable releases (v2026.9.5 widely deployed) | 8.0 / 10 (High velocity, active maintenance, elevated bug volume tied to recent major release) |
| **Hermes Agent** | 50 (24 open / 26 closed) | 50 (38 open / 12 merged) | 1 stable patch release (v2026.9.14 / v0.21.3) | 8.2 / 10 (Strong issue closure rate, fast critical bug triage, steady incremental progress) |
| **IronClaw** | 3 (3 open / 0 closed) | 10 (7 open / 3 closed) | No new releases | 7.0 / 10 (Moderate maintenance-focused activity, stabilization phase, low community engagement) |
| **QwenPaw** | 50 (35 open / 15 closed) | 50 (35 open / 15 merged) | 2 beta releases (v2.2.2-beta.1/3) | 7.8 / 10 (High velocity, active community, stabilizing 2.2.x line with enterprise Hub roadmap) |
| **ZeroClaw** | 50 (17 open / 33 closed) | 50 (44 open / 6 merged) | No new releases | 7.5 / 10 (High design-phase activity, pre-release stabilization, majority of closed issues are accepted RFCs) |

*Health score methodology: Weighted average of issue closure rate, PR velocity, release cadence, bug severity distribution, and community engagement.*

---

## 3. OpenClaw's Position
### Advantages vs. Peers
OpenClaw is the clear ecosystem leader in scale and velocity: it has 10x the issue and PR volume of the next-largest projects, with 503 contributors and 4,179 integrated PRs in its latest v2026.9.5 release. It has the most mature core agent platform, with the broadest set of built-in capabilities spanning Agents API tooling, plugin ecosystems, and multi-channel support. Its rapid bug resolution cycle for high-severity issues (e.g., 5 closed P0 bugs this week) demonstrates strong maintainer responsiveness.

### Technical Approach Differences
OpenClaw prioritizes broad platform extensibility and UI polish alongside stability fixes, with a focus on production-grade gateway deployments. Unlike QwenPaw (which is building toward a multi-tenant Hub) or ZeroClaw (which is still ratifying core architectural RFCs), OpenClaw already has a widely deployed stable release line and is iterating on incremental improvements to an established product. Its approach to upgrade reliability and CI/CD optimization reflects a user base with large-scale production deployments.

### Community Size Comparison
OpenClaw's community is an order of magnitude larger than peers, with 500+ weekly issue/PR updates vs. 50 for Hermes Agent, QwenPaw, and ZeroClaw, and 3 for IronClaw. Its issue comment counts (35 comments on the top P0 issue) also reflect a much larger active user base, including production operators reporting large-scale deployment pain points.

---

## 4. Shared Technical Focus Areas
| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Production runtime stability** | OpenClaw, Hermes Agent, QwenPaw | Memory leaks (OpenClaw #91588, Hermes #64488), zombie process management (OpenClaw #97616), event loop blocking (QwenPaw #7840), and long-running instance resource exhaustion are universal pain points for self-hosted/production deployments. |
| **Plugin/extension security & isolation** | OpenClaw, QwenPaw, ZeroClaw | Supply chain integrity (ZeroClaw PR #9134 SHA-256 checksums), plugin event loop isolation (QwenPaw #7840 shared loop freezes), and extension activation reliability (IronClaw PR #8102) are cross-project priorities as third-party ecosystems scale. |
| **Multi-provider model compatibility** | Hermes Agent, IronClaw, QwenPaw | Provider error classification (Hermes #117117 429 misclassification), per-request model behavior control (IronClaw #7537 thinking/effort tuning), and OpenAI-compatible provider integration (QwenPaw PR #7843 AgentScope Platform) are consistent areas of investment. |
| **Context & memory management** | OpenClaw, QwenPaw, ZeroClaw | Context window bloat (QwenPaw #7853 base64 image accumulation), memory lifecycle policy standardization (ZeroClaw RFC #6850), and memory flush consistency (OpenClaw #45608 pre-reset flush) reflect growing demand for reliable long-session support. |
| **Upgrade & migration reliability** | OpenClaw, Hermes Agent | Migration deadlocks, upgrade rollbacks, and state corruption risks (OpenClaw v2026.9.5 upgrade failures, Hermes PR #117687 storage safety) are top user pain points for projects with installed production bases. |

---

## 5. Differentiation Analysis
| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---|---|---|---|---|---|
| **Primary Feature Focus** | Core platform extensibility, Agents API, UI polish | Bot mode UX, provider reliability, desktop usability | Enterprise identity/security, office task automation | Console UX, multi-tenant Hub, plugin ecosystem | Architectural design, security hardening, standard API compatibility |
| **Target Users** | Production operators, enterprise deployments, power users | Desktop/bot users, community deployments | Enterprise/no-code administrators, Google Workspace users | Teams/enterprises, multi-tenant deployments, local desktop users | Security-focused self-hosters, ecosystem integrators, technical early adopters |
| **Technical Architecture** | Monolithic gateway with plugin system, mature CI/CD | Modular agent core with desktop/gateway split | Rust-based, identity-centric (IdentyClaw) with MCP support | TypeScript-based console + desktop client, ReMe memory system | Decoupled memory/security architecture, WASM plugin sandboxing (in design) |
| **Release Cadence** | High-frequency stable channel releases (multiple per month) | Patch-focused stable releases | Slow, conservative maintenance releases | Beta + stable cycle with milestone-driven releases | Pre-release, RFC-heavy design phase |

---

## 6. Community Momentum & Maturity
### Activity Tiers
1. **Tier 1 (High Velocity, Mature): OpenClaw** — 10x the activity volume of all other projects, with a large contributor base, established release process, and production user base. Iterating rapidly on stability and feature expansion simultaneously.
2. **Tier 2 (Steady Growth, Maturing): Hermes Agent, QwenPaw** — Moderate activity volume (50 issues/PRs per week) with clear roadmaps. Hermes Agent is focused on incremental bug fixes and UX improvements with a 52% issue closure rate. QwenPaw is balancing 2.2.x stabilization with work toward its high-priority multi-tenant Hub milestone.
3. **Tier 3 (Stabilization Phase): IronClaw** — Low, maintenance-focused activity with no new releases. The project is in incremental improvement mode, prioritizing dependency updates and critical bug fixes over new feature development.
4. **Tier 4 (Pre-Release, Design Heavy): ZeroClaw** — High activity volume but concentrated on RFC acceptance and architectural design. Most closed issues are design proposals rather than bug fixes, indicating the project is building consensus before full feature implementation.

### Maturity Assessment
- **Most Mature:** OpenClaw (widely deployed production use, mature release management)
- **Rapidly Maturing:** Hermes Agent, QwenPaw (clear product-market fit, active bug hardening)
- **Niche Mature:** IronClaw (focused enterprise use case, slow but steady maintenance)
- **Early Stage:** ZeroClaw (strong design foundation, pre-1.0 feature development)

---

## 7. Trend Signals
1. **Enterprise/team adoption is accelerating** — QwenPaw's top community discussion (31 comments) is focused on multi-tenant Hub features including RBAC, shared skills, and centralized billing. OpenClaw's high-severity bugs are increasingly reported by operators of large fleets (632-agent deployments), indicating production scaling. *Value for AI agent developers:* Building with multi-tenant primitives and enterprise-grade observability from the start will reduce future rearchitecture work.

2. **Standard API compatibility is a table-stakes requirement** — ZeroClaw's second-most-discussed RFC (25 comments) proposes OpenAI Chat Completions API compatibility to enable integration with existing LLM clients (Open WebUI, Aider, LangChain). This reflects user demand for agent platforms that fit into existing toolchains rather than requiring custom adapters. *Value:* Implementing standard API interfaces dramatically expands addressable user base and reduces integration friction.

3. **Plugin ecosystem security is becoming a critical differentiator** — Across ZeroClaw (WASM checksum verification), QwenPaw (event loop isolation gaps), and OpenClaw (plugin migration deadlocks), plugin security and reliability are top pain points. As third-party ecosystems grow, users are prioritizing platforms with robust sandboxing and supply chain integrity. *Value:* Investing in plugin isolation early prevents trust erosion as ecosystems scale.

4. **Granular security controls are in high demand** — ZeroClaw's accepted RFC for per-command allow/ask/deny shell policies (24 comments) and OpenClaw's regex backtracking authorization fixes reflect user desire for security controls that balance safety and usability, rather than all-or-nothing tool access. *Value:* Implementing tiered authorization models caters to both security-conscious enterprise users and low-friction personal users.

5. **Context management is the next core battleground** — QwenPaw's most consistent user frustration centers on context eviction edge cases, while OpenClaw and ZeroClaw are both investing in memory architecture refactoring. As long-running agent sessions become more common, predictable, reliable context and memory management will be a key user decision factor. *Value:* Building transparent, configurable context management policies improves user trust and reduces unexpected behavior in long-running workloads.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Weekly Project Digest (2026-09-15 ~ 2026-09-21)
## 1. Last 7 Days' Overview
Hermes Agent maintained high development velocity this week, with 50 updated issues (24 open/active, 26 closed) and 50 updated pull requests (38 open, 12 merged/closed), paired with a new stable patch release. The majority of activity targeted bug fixes across desktop, gateway, CLI, and agent core components, alongside targeted feature enhancements for bot mode, provider integrations, and developer tooling. Project health remains strong, with a 52% issue closure rate and steady progress on both user-facing reliability and internal infrastructure.

## 2. Releases
### v2026.9.14 (Hermes Agent v0.21.3)
- **Release Date**: September 14, 2026
- **Type**: Patch release
- **Key Details**: Rolls up ~338 PRs merged since v0.21.2 into a stable tagged release for downstream consumers (Docker images, Hermes Cloud, hosted deployments). The release includes critical remote-gateway sign-in fixes as its core headline, alongside accumulated bug fixes and minor feature improvements from the prior development cycle. No breaking changes or migration requirements are noted for this patch version.
- **Link**: [v2026.9.14 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.14)

## 3. Project Progress
12 PRs were merged or closed this week, advancing the following features and fixes:
- **Provider Reliability Fixes**:
  - [#117117](https://github.com/NousResearch/hermes-agent/pull/117117): Fixed CommandCode 429 misclassification, where upstream provider outages were incorrectly treated as credential exhaustion, protecting healthy API keys from being marked unusable.
  - [#117482](https://github.com/NousResearch/hermes-agent/issues/117482) (corresponding fix merged): Resolved misclassification of provider quota outages as authentication failures during credential resolution.
- **Bot Mode & Profile Fixes**:
  - [#116905](https://github.com/NousResearch/hermes-agent/issues/116905) (fix merged): Fixed `bot_mode_probe._roster()` listing deleted profile tombstones as active teammate agents.
  - [#117401](https://github.com/NousResearch/hermes-agent/issues/117401) (fix merged via #117014 extension): Extended TTS routing so GPT-Live voice sessions in desktop bot chats use the bot’s own profile voice.
- **Platform & Usability Fixes**:
  - [#117181](https://github.com/NousResearch/hermes-agent/issues/117181) (fix merged): Resolved Windows skill update false positives caused by CRLF/LF newline mismatches in quarantine bundles.
  - [#117040](https://github.com/NousResearch/hermes-agent/issues/117040) (fix merged): Fixed group-chat hold classifier incorrectly triggering on stop words inside code blocks and quotes.
  - [#117216](https://github.com/NousResearch/hermes-agent/issues/117216) (fix merged): Fixed desktop agent-authored tips not persisting dismiss state, preventing repeated popups.
- **Docs & Validation**:
  - [#117267](https://github.com/NousResearch/hermes-agent/issues/117267) (docs merged): Clarified that systemd reload performs a graceful gateway restart.
  - [#116667](https://github.com/NousResearch/hermes-agent/issues/116667) (fix merged): Fixed model catalog fallthrough for profile-owned provider catalogs.
- **Integration Feature**:
  - [#112835](https://github.com/NousResearch/hermes-agent/pull/112835) (merged): Added DeepInfra prepaid credit display to the `/usage` command.
- **Critical Gateway Bug**:
  - [#32791](https://github.com/NousResearch/hermes-agent/issues/32791) (fixed/closed): Resolved multi-bot Discord infinite ack-loops, bypassed bot-allow guards, and ignored human STOP signals in free-response channels.

## 4. Community Hot Topics
The most actively discussed items this week centered on desktop user experience, resource leaks, and bot mode usability:
1. **Desktop Media File Link Failure** ([#84361](https://github.com/NousResearch/hermes-agent/issues/84361), 10 comments)
   - Two independent bugs break `MEDIA:` file links: a tag regex that absorbs trailing markdown characters, and incorrect `file://` URL construction via string concatenation, leading to silent failures with no actionable logs. Underlying need: improved desktop file handling robustness and debuggability.
2. **Bot Mode Chat Vibe Enhancement** ([#117520](https://github.com/NousResearch/hermes-agent/issues/117520), 6 comments)
   - Users report Bot Mode conversations read like formal status reports instead of natural chat, lacking lightweight social affordances. Underlying need: more human-like conversational style for bot interactions to align with real group chat expectations. A corresponding implementation PR [#117733](https://github.com/NousResearch/hermes-agent/pull/117733) is already open.
3. **Dashboard TUI Resource Leaks (Linux)** ([#64488](https://github.com/NousResearch/hermes-agent/issues/64488), 6 comments)
   - Long-running dashboard TUI sessions leak orphaned node processes, memory, and open database rows across browser reloads and failure modes. Underlying need: proper session lifecycle cleanup for TUI backends to prevent resource exhaustion on self-hosted instances.

## 5. Bugs & Stability
Bugs reported this week are ranked by severity (P1 > P2 > P3), with corresponding fix PR status noted:
### P1 (Critical)
- **Discord Multi-Bot Infinite Ack-Loop** ([#32791](https://github.com/NousResearch/hermes-agent/issues/32791)): Fixed and closed this week.
- **Session Storage Maintenance Safety** ([PR #117687](https://github.com/NousResearch/hermes-agent/pull/117687), open): Active fix to refuse storage optimization/prune operations while another process holds `state.db`, preventing database corruption.

### P2 (High)
- **Desktop Media File Links Broken** ([#84361](https://github.com/NousResearch/hermes-agent/issues/84361)): Open, no fix PR linked yet.
- **Dashboard TUI Process/Memory Leaks (Linux)** ([#64488](https://github.com/NousResearch/hermes-agent/issues/64488)): Open, no fix PR linked yet.
- **Desktop SSH Backend Pool Stuck Liveness Checks** ([#94381](https://github.com/NousResearch/hermes-agent/issues/94381)): Open, no fix PR linked yet.
- **Windows Gateway Watchdog Restart Failure** ([#91097](https://github.com/NousResearch/hermes-agent/issues/91097)): Fix PR [#91099](https://github.com/NousResearch/hermes-agent/pull/91099) open and under review.
- **Provider 429 Misclassified as Auth Failure** ([#117482](https://github.com/NousResearch/hermes-agent/issues/117482)): Fixed and closed.
- **Modal Sandbox Token Errors on Termux** ([#47264](https://github.com/NousResearch/hermes-agent/issues/47264)): Fix PR [#117737](https://github.com/NousResearch/hermes-agent/pull/117737) open, adding proper auth failure diagnosis.
- **Desktop `--ignore-existing` Flag Not Working** ([#117682](https://github.com/NousResearch/hermes-agent/issues/117682)): Open, no fix PR linked yet.
- **Custom Provider Session 500 Error on Second Turn** ([#117710](https://github.com/NousResearch/hermes-agent/issues/117710)): Open, no fix PR linked yet.
- **Cron Job Write Race Conditions** ([PR #117731](https://github.com/NousResearch/hermes-agent/pull/117731), open): Fix for corrupted cron state under lock timeout conditions.
- **Skill Management Fails on Colons in Descriptions** ([#117736](https://github.com/NousResearch/hermes-agent/issues/117736)): Open, no fix PR linked yet.
- **Nous Portal LongCat 2.0 Output Budget Exhaustion** ([#117725](https://github.com/NousResearch/hermes-agent/issues/117725)): Open, needs reproduction.

### P3 (Medium/Low)
- **DeepSeek Model Picker Shows Retired IDs** ([#117516](https://github.com/NousResearch/hermes-agent/issues/117516)): Open, no fix PR linked yet.
- **Google Meet Realtime API Deprecation** ([#117693](https://github.com/NousResearch/hermes-agent/issues/117693)): Open, no fix PR linked yet.
- **Telegram Inline Picker Negative Offset Bug** ([#117717](https://github.com/NousResearch/hermes-agent/issues/117717)): Open, no fix PR linked yet.
- **Web Dashboard Vite Config Typecheck Failure** ([#117722](https://github.com/NousResearch/hermes-agent/issues/117722)): Open, no fix PR linked yet.
- **Hindsight Memory Runs on Synthetic Turns** ([#117487](https://github.com/NousResearch/hermes-agent/issues/117487)): On hold pending upstream memory provider architecture changes.

## 6. Feature Requests & Roadmap Signals
User-requested features this week, with likelihood of near-term inclusion:
1. **Bot Mode Natural Conversational Style** ([#117520](https://github.com/NousResearch/hermes-agent/issues/117520)): High likelihood. A corresponding implementation PR ([#117733](https://github.com/NousResearch/hermes-agent/pull/117733)) is already open, extending bot mode protocol guidance for user-facing chats.
2. **Bot-Initiated Room Messages** ([#97149](https://github.com/NousResearch/hermes-agent/issues/97149)): Medium likelihood. The request to let group-chat bots send messages outside their driven turn has community support (1 upvote) and addresses a real workflow gap for multi-bot fleets, but is tagged `needs-decision`.
3. **Pause-Preserving Cron Schedule Edits** ([#117739](https://github.com/NousResearch/hermes-agent/issues/117739)): Medium-high likelihood. It addresses a clear operational pain point for cron job management, and active cron reliability work is already in progress ([#117731](https://github.com/NousResearch/hermes-agent/pull/117731)).
4. **Desktop Custom Link Handlers** ([#117715](https://github.com/NousResearch/hermes-agent/issues/117715)): Low-medium likelihood. Tagged `needs-decision`, it is a design proposal for expanded desktop navigation functionality, with no active implementation yet.
5. **Browser One-Call Page Snapshot** ([PR #115056](https://github.com/NousResearch/hermes-agent/pull/115056)): High likelihood. The feature reduces browser tool round trips and is already in active PR review.

## 7. User Feedback Summary
### Pain Points
- **Silent desktop failures**: Users report `MEDIA:` file links break with no actionable logs, making debugging impossible ([#84361](https://github.com/NousResearch/hermes-agent/issues/84361)).
- **Unintuitive bot interaction style**: Bot mode output feels like formal status reports rather than natural chat, reducing engagement in group and 1:1 bot conversations ([#117520](https://github.com/NousResearch/hermes-agent/issues/117520)).
- **Resource leaks on long-running instances**: Linux users with dashboard TUI sessions experience accumulated memory and process bloat over time ([#64488](https://github.com/NousResearch/hermes-agent/issues/64488)).
- **Provider reliability edge cases**: Transient upstream 429 errors incorrectly invalidated API keys, causing unnecessary service disruption ([#117111](https://github.com/NousResearch/hermes-agent/issues/117111)).
- **Windows platform gaps**: Gateway watchdog restart failures and false skill update notifications create maintenance overhead for Windows users ([#91097](https://github.com/NousResearch/hermes-agent/issues/91097), [#117181](https://github.com/NousResearch/hermes-agent/issues/117181)).

### Positive Signals
- Active community contribution across bug fixes and feature proposals, with 12 merged PRs this week addressing real user-reported issues.
- Fast triage of critical bugs (e.g., Discord infinite loop fixed within the same week as reported).

## 8. Backlog Watch
Long-standing, high-impact items requiring maintainer attention:
1. **#64488 Dashboard TUI Resource Leaks (Linux)** ([link](https://github.com/NousResearch/hermes-agent/issues/64488)): Open since July 14, 2026, with 6 comments. This P2 bug causes progressive resource exhaustion for long-running instances, a critical reliability issue for self-hosted users. No fix PR is linked yet.
2. **#47264 Modal Sandbox Token Errors on Termux** ([link](https://github.com/NousResearch/hermes-agent/issues/47264)): Open since June 16, 2026. A fix PR ([#117737](https://github.com/NousResearch/hermes-agent/pull/117737)) is now open and should be prioritized for review to resolve this long-standing Android/Termux compatibility issue.
3. **#55310 Strip Lone Surrogates from Gateway Replies** ([link](https://github.com/NousResearch/hermes-agent/pull/55310)): Open since June 30, 2026. This P2 message delivery bug causes failures on platforms like Telegram when responses contain invalid Unicode characters. The PR is rebased and extended per review, awaiting final merge.
4. **#97149 Bot-Initiated Room Messages** ([link](https://github.com/NousResearch/hermes-agent/issues/97149)): Open since August 28, 2026, tagged `needs-decision`. This feature request addresses a key gap for multi-bot workflow automation, and a maintainer decision on scope and priority would unblock implementation.
5. **#86578 Anthropic Prompt Cache Policy Test** ([link](https://github.com/NousResearch/hermes-agent/pull/86578)): Open since August 15, 2026. This test infrastructure PR prevents regressions for a core performance feature and should be reviewed for merge to improve test coverage.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Weekly Project Digest (Week of 2026-09-21)
Project repository: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Last 7 Days' Overview
Over the past 7 days, IronClaw saw moderate maintenance-focused activity, with 3 new/updated open issues and 10 updated pull requests (3 closed, 7 open), and no new releases published. The majority of closed PRs were dependency maintenance updates, alongside one critical extension integration fix for Google Workspace provider activation. Open work spans core architectural improvements, identity feature expansion, and ongoing performance diagnostics for model quality. No major feature releases landed this week, indicating the project is in a stabilization and incremental improvement phase.

---

## 2. Releases
No new releases were published in the last 7 days.

---

## 3. Project Progress
The following PRs were merged or closed in the last 7 days, advancing platform stability and dependency currency:
1. **[PR #8102: fix(extensions): resolve provider-instance readiness live, administrator configuration first](https://github.com/nearai/ironclaw/pull/8102)** (closed, author: henrypark133)
   - Fixed a critical activation bug for Gmail/Google Calendar extensions where OAuth configured via the Web UI (administrator configuration, rather than environment variables) would complete consent and token exchange but fail at final activation with a provider instance error.
2. **[PR #8099: chore(deps): bump the everything-else group across 1 directory with 25 updates](https://github.com/nearai/ironclaw/pull/8099)** (closed, author: dependabot[bot])
   - Updated 25 core Rust dependencies (including `uuid` 1.24.0 → 1.26.1 and `base64` 0.22.1 → 0.23.1) for routine security and compatibility maintenance.
3. **[PR #8079: chore(deps): bump the actions group across 1 directory with 6 updates](https://github.com/nearai/ironclaw/pull/8079)** (closed, author: dependabot[bot])
   - Updated 6 GitHub Actions dependencies (including `anthropics/claude-code-action` 1.0.183 → 1.0.221 and `actions/setup-node` 4.0.2 → 7.0.0) to modernize CI/CD pipelines.

---

## 4. Community Hot Topics
Activity metrics (comments/reactions) were low across all items this week, with only one issue carrying comment activity:
1. **[Issue #7537: feat(llm): generic per-request thinking/effort control (provider-native mapping incl. DeepSeek chat_template_kwargs)](https://github.com/nearai/ironclaw/issues/7537)** (open, 2 comments, top comment count)
   - *Underlying need:* The project requires a provider-agnostic abstraction for LLM "thinking effort" controls, triggered by overly verbose output from DeepSeek V4 Flash (0731 checkpoint). This feature would let users tune reasoning depth per request (or per model default) while letting each provider adapter map the control to its native parameter (e.g., DeepSeek's `chat_template_kwargs`). This signals growing demand for fine-grained control over model behavior across multi-provider deployments.
2. **Daily failure taxonomy issues ([#8101](https://github.com/nearai/ironclaw/issues/8101), [#8100](https://github.com/nearai/ironclaw/issues/8100))** (open, 0 comments each)
   - While low in engagement, these recurring diagnostic posts reflect ongoing community and maintainer focus on benchmarking model quality for IronClaw's office task suite, identifying root causes of non-pass tasks.

---

## 5. Bugs & Stability
No explicit crash or regression bug reports were filed in the last 7 days. The following stability-related items were addressed or identified:
1. **Extension activation bug (high impact, fixed)**
   - Reported context: Google Workspace (Gmail/Calendar) extension activation failure when using Web UI-based OAuth configuration (resolved by [PR #8102](https://github.com/nearai/ironclaw/pull/8102), now closed).
2. **MCP response leak diagnostic classification (medium impact, fix in progress)**
   - Tracked in [Issue #8009](https://github.com/nearai/ironclaw/issues/8009) and addressed by open [PR #8077](https://github.com/nearai/ironclaw/pull/8077): MCP egress leak-blocking diagnostics lacked distinct, MCP-visible reason codes, which risked ambiguous safety telemetry. The fix centralizes leak sentinel logic and adds proper classification for MCP lanes.
3. **OfficeQA benchmark non-pass rates (low severity, ongoing diagnostics)**
   - Documented in [#8101](https://github.com/nearai/ironclaw/issues/8101) (35 non-pass tasks, 2026-09-17) and [#8100](https://github.com/nearai/ironclaw/issues/8100) (43 non-pass tasks, 2026-09-14): Failures are overwhelmingly attributed to DeepSeek-V4-Flash model quality limitations (navigation and instruction following) rather than platform bugs.

---

## 6. Feature Requests & Roadmap Signals
The following open feature proposals and in-progress PRs signal near-to-medium term roadmap direction:
1. **Generic LLM thinking/effort control ([Issue #7537](https://github.com/nearai/ironclaw/issues/7537))**
   - A high-priority enhancement for multi-provider LLM support; given it targets a current pain point with DeepSeek deployments, it is a strong candidate for inclusion in an upcoming minor release.
2. **IdentyClaw Passport integration for practitioners ([PR #7499](https://github.com/nearai/ironclaw/pull/7499), size: XL)**
   - Adds host-mediated Passport access for processless agents and a practitioner deployment kit. This expands IronClaw's identity and security ecosystem, and is likely on the roadmap for a future feature release.
3. **Durable storage profile-agnostic refactor ([PR #7456](https://github.com/nearai/ironclaw/pull/7456), size: XL)**
   - A core architectural rewrite of Reborn storage to be profile-agnostic with improved tenancy isolation. As a medium-risk core change, it will likely ship in a major or minor version after extended testing.

---

## 7. User Feedback Summary
Concrete user feedback from the week centers on two core pain points:
1. **Extension configuration friction**: Users administering deployments via the Web UI (rather than environment variables) encountered broken Google Workspace extension activation, a high-friction issue for no-code/low-code operators (resolved via [PR #8102](https://github.com/nearai/ironclaw/pull/8102)).
2. **Model output verbosity and quality**: DeepSeek V4 Flash users reported overly verbose outputs and consistent office task benchmark failures, driving demand for per-request effort control (tracked in [#7537](https://github.com/nearai/ironclaw/issues/7537)) and ongoing model quality diagnostics.
No explicit user satisfaction/dissatisfaction ratings were captured in this week's activity.

---

## 8. Backlog Watch
The following long-running, high-impact items remain open and await maintainer review or progression:
1. **[PR #7456: fix(reborn): make durable storage profile-agnostic](https://github.com/nearai/ironclaw/pull/7456)** (created 2026-08-10, size XL, medium risk, core contributor)
   - A foundational architectural change for storage isolation; open for over 6 weeks with no recent merge movement, and requires maintainer alignment on security and migration semantics.
2. **[PR #7499: feat(identyclaw): host-mediated Passport for practitioners](https://github.com/nearai/ironclaw/pull/7499)** (created 2026-08-11, size XL, new contributor)
   - A new ecosystem feature from an external contributor; open for over 6 weeks, and needs maintainer review to onboard the identity integration and deployment tooling.
3. **[Issue #7537: generic per-request thinking/effort control](https://github.com/nearai/ironclaw/issues/7537)** (created 2026-08-12)
   - A high-value enhancement with existing discussion but no linked implementation PR yet, requiring scoping and prioritization from core maintainers.
4. **[PR #7834: chore(deps): bump the wasm group across 1 directory with 4 updates](https://github.com/nearai/ironclaw/pull/7834)** (created 2026-08-23, size L, medium risk)
   - Wasm dependency updates have been open for nearly 4 weeks, likely pending compatibility testing for sandbox runtime components.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Weekly Project Digest | Week of 2026-09-21
Repository: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Last 7 Days' Overview
QwenPaw maintained high development velocity over the past 7 days, with 50 updated issues (35 open/active, 15 closed) and 50 updated PRs (35 open, 15 merged/closed), alongside 2 new beta releases for the upcoming v2.2.2. Activity is concentrated on console UX hardening, model provider compatibility, plugin isolation, and long-standing context management edge cases — indicating the team is stabilizing the 2.2.x line while building toward the multi-tenant Hub milestone. Community engagement remains strong, with a roadmap discussion issue drawing 31 comments and multiple community-contributed bug reports and feature ideas shaping the backlog. Overall project health is good: most reported bugs have active fix PRs in review, and release pipeline improvements are shipping to reduce merge wait times.

---

## 2. Releases
Two beta releases for v2.2.2 were published this week:
### v2.2.2-beta.3
- **Fix (console):** Restored assistant response actions that were broken in prior builds ([PR #7851](https://github.com/agentscope-ai/QwenPaw/pull/7851), @zhijianma)
- **Fix (e2e):** Re-anchored console selectors broken by the #7502 redesign, and hardened session-list assertions to reduce flaky tests ([PR #7852](https://github.com/agentscope-ai/QwenPaw/pull/7852), @yutai78786)
- **Breaking changes / migration notes:** None; this is a patch beta focused on regression fixes.

### v2.2.2-beta.1
- **Feature (console):** Improved grouped chat history experience ([PR #7665](https://github.com/agentscope-ai/QwenPaw/pull/7665), @zhaozhuang521)
- **Feature (memory):** Unified ReMe slash commands for consistent memory interaction ([PR #7444](https://github.com/agentscope-ai/QwenPaw/pull/7444), @jinliyl)
- **Chore:** Version bumped to 2.2.2b1 ([@cuiyuebing](https://github.com/cuiyuebing))
- **Breaking changes / migration notes:** Slash command behavior for ReMe memory is now standardized — users relying on legacy per-command syntax should verify their workflows.

---

## 3. Project Progress
Key merged/closed PRs from the past 7 days:
- **[PR #7904](https://github.com/agentscope-ai/QwenPaw/pull/7904)** — Fixed `qwenpaw-pet` plugin breaking tool approvals by forwarding the `actor` argument to the native approval service (fixes #[7856](https://github.com/agentscope-ai/QwenPaw/issues/7856), @Osier-Yi)
- **[PR #7843](https://github.com/agentscope-ai/QwenPaw/pull/7843)** — Added AgentScope Platform as a built-in OpenAI-compatible provider with model discovery and logo/branding (@Osier-Yi)
- **[PR #7894](https://github.com/agentscope-ai/QwenPaw/pull/7894)** — Raised frontend unit test coverage by +3.19pp (64.45% → 67.65%, +1027 statements, +543 test cases) — pure test improvement, no code changes (@yutai78786)
- **[PR #7901](https://github.com/agentscope-ai/QwenPaw/pull/7901)** — Release freeze now lifts immediately after release completion via `workflow_run` trigger, eliminating multi-minute cron-based delays that blocked post-release PR merges (@yutai78786)
- **[PR #7862](https://github.com/agentscope-ai/QwenPaw/pull/7862)** — Release artifact publishing is now gated on test passage, and E2E watch sets are marked blocking to prevent broken releases (@yutai78786)
- **[PR #7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) / [PR #7887](https://github.com/agentscope-ai/QwenPaw/pull/7887)** — Handled unknown `input_audio` content part rejections from providers, restoring audio fallback retry and capability-learning paths (@axelray-dev, @lorenzozanee)
- **[PR #5836](https://github.com/agentscope-ai/QwenPaw/pull/5836)** — Desktop: auto-detect local file/directory paths in chat output and render them as clickable links that open in the system file explorer (fixes #[4830](https://github.com/agentscope-ai/QwenPaw/issues/4830), @wangfei010313)
- **[PR #7345](https://github.com/agentscope-ai/QwenPaw/pull/7345)** — Fixed tool cards getting stuck in "executing" state forever after a user stops a running tool turn (@zhaozhuang521)
- **[PR #7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) (closed via related fix)** — Resolved console stream freeze caused by bare `null` SSE frame payloads (@wjt0321)

---

## 4. Community Hot Topics
Most active community discussions by comment count and engagement:
1. **[Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — QwenPaw Hub multi-tenant edition roadmap discussion (31 comments, 4 👍)**
   The highest-engagement thread this week is a community brainstorm for the upcoming 2.2.0 Hub release. Underlying need: teams want a self-hostable, admin-managed multi-user QwenPaw with shared skills, role-based access control, and centralized billing/model management — a clear signal that enterprise/team adoption is the community's top priority.
2. **[Issue #7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) — spawn subAgent always times out on Windows 2.2.0 (10 comments)**
   Reports that all sub-agent spawned tasks fail with timeout regardless of timeout settings on Windows desktop. Underlying need: reliable multi-agent orchestration is critical for power users building complex agent workflows.
3. **[Issue #7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) — ToolResultPruner skips media blocks, causing base64 image bloat that blows context windows (6 comments)**
   A well-researched bug report from a community member highlighting a gap in context pruning for non-text tool outputs. Underlying need: robust, predictable context management for multimodal workflows is a core pain point.
4. **[Issue #5567](https://github.com/agentscope-ai/QwenPaw/issues/5567) — Community-built QwenPaw GitHub Issue feedback assistant Skill (2 comments, 2 👍)**
   A third-party Skill that auto-drafts formatted, privacy-redacted GitHub issues from casual user feedback. Underlying need: lower barrier to community contribution and issue reporting.

---

## 5. Bugs & Stability
Bugs reported in the last 7 days, ranked by estimated severity:
| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| **Critical** | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) Persistent prompt injection in tool-result system reminders | Injected instruction appended to system reminder blocks across 20+ turns telling the agent to delete all skills; source not found on local disk | No fix PR yet; security investigation ongoing |
| **Critical** | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) Plugins share host event loop — one sync call freezes the whole instance | A single plugin performing synchronous I/O freezes all agents/channels for ~40s; no isolation or monitoring | No fix PR yet; plugin isolation is a known architectural gap |
| **High** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) ToolResultPruner skips `type="data"` media blocks | Base64 images from `view_image` accumulate indefinitely in context until window overflow | No fix PR yet; actively triaged |
| **High** | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) subAgent spawn always times out on Windows 2.2.0 | All sub-agent tasks fail with timeout regardless of config | No fix PR yet; Windows-specific reproduction confirmed |
| **High** | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) Session + model config loss on desktop | Sessions disappear after app freeze/restart; model config resets | No fix PR yet; related to prior #[7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) |
| **Medium** | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) Console lazy page load failure is unrecoverable | Failed chunk load shows permanent error screen until full reload | No fix PR yet; error boundary gap |
| **Medium** | [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) Chat page crashes with `insertBefore NotFoundError` on Edge | Browser UI layer injects `<font>` wrapper around React-managed text nodes, breaking DOM reconciliation | No fix PR yet; browser-specific |
| **Medium** | [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) OpenCode "free" models fail with 403 FreeTierError via API | Models marked free in UI but API calls are rejected (client-only free tier) | Related fix PR: [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) (sends OpenCode session header) in review |
| **Medium** | [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) Scroll eviction drops user turns inside tool-heavy spans | Live context window loses user request while history.db retains it | No fix PR yet; context management edge case |
| **Low** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) Chat history not fully loading after compression refresh | User reports truncated visible history after compression | No fix PR yet; may be related to eviction behavior |

---

## 6. Feature Requests & Roadmap Signals
Top user-requested features from the past week, with likelihood of landing in v2.2.2/v2.3:
1. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) QwenPaw Hub multi-tenant features** — Confirmed on the 2.2.0+ roadmap; community input is shaping admin tools, shared skills, and team workspaces. **High likelihood** of incremental Hub releases through 2.2.x.
2. **[#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) Plugin-visible pre-tool-call policy hook** — Governance pipeline extension point for plugins. **Medium-high likelihood** for v2.3; aligns with the plugin ecosystem roadmap.
3. **[#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648) Customizable web page title** — Quality-of-life request for users running multiple QwenPaw instances. **Medium likelihood** for v2.2.2 final or v2.3.1; low implementation cost.
4. **[#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) Unified model configuration for all model types** — Standardize config for text, embedding, audio, and video models. **High likelihood** for v2.3; aligns with the provider unification work in active PR #[7899](https://github.com/agentscope-ai/QwenPaw/pull/7899).
5. **[#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) Agent-autonomous context management** — Let agents participate in context eviction decisions. **Medium likelihood** for v2.3; builds on ongoing context manager refactoring.
6. **[#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) Agent cron job model override** — Allow cron jobs to specify a fixed model independent of agent defaults. **Closed/accepted**; expected to land in v2.2.2.

---

## 7. User Feedback Summary
### Key Pain Points
- **Context management reliability:** Multiple users report unexpected context overflow, lost history after compression, and broken eviction behavior — this is the most consistent source of frustration in 2.2.x.
- **Plugin stability & isolation:** The shared event loop design means third-party plugins can crash the entire instance, eroding trust in the plugin ecosystem.
- **Windows desktop data loss:** Session and model config resets on desktop are a recurring complaint, with multiple related issues open.
- **Provider compatibility:** OpenCode model errors, missing headers, and mislabeled free tiers create onboarding friction for new users trying built-in providers.

### Positive Signals
- Community contributors are submitting high-quality, well-researched bug reports (e.g., #7853, #7840) with reproduction steps and root cause analysis, indicating an engaged technical user base.
- Third-party Skill development (e.g., #5567) shows the extension ecosystem is active.
- Users are excited about the upcoming Hub release, with constructive feedback shaping the roadmap.

### Use Cases Observed
- Multi-agent workflow automation (sub-agent spawning)
- Team/enterprise shared assistant deployments
- Long-running coding/research sessions requiring large context windows
- Desktop-based personal productivity with local file access

---

## 8. Backlog Watch
Long-standing or high-impact items needing maintainer attention:
1. **[Issue #7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) — subAgent spawn timeout on Windows (open 10 days, 10 comments)**
   Reproduced consistently on Windows 2.2.0; blocks multi-agent use cases for desktop users. No assignee or fix PR visible.
2. **[Issue #7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) — Plugin event loop isolation (open 4 days, 4 comments)**
   A fundamental architectural stability issue that affects all plugin users. No roadmap or design doc for plugin sandboxing has been shared.
3. **[Issue #7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) — Desktop session + model config loss (open 9 days, 5 comments)**
   Recurring data loss issue with multiple related reports (e.g., #7708). Root cause not yet publicly identified.
4. **[Issue #2324](https://github.com/agentscope-ai/QwenPaw/issues/2324) — Multi-user access and admin-managed skills (referenced in #7318)**
   Original Hub feature request that has been open for many months; progress is visible via #7318 but no dedicated milestone issue tracking concrete deliverables.
5. **[PR #7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) — Separate model for ReMeLight memory writing (open 9 days)**
   Cost-saving feature for memory operations; no review status update despite community interest.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Weekly Project Digest | 2026-09-21
Repository: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Last 7 Days' Overview
ZeroClaw saw high-volume architectural and stability activity this week, with 50 updated issues (33 closed, 17 open) and 50 updated pull requests (6 merged/closed, 44 open). The majority of closed issues are accepted RFCs, signaling a major phase of design consensus-building across memory architecture, security posture, channel support, and runtime governance. Open PRs are heavily focused on security hardening, runtime reliability fixes, and feature completion for high-priority subsystems, with a notable concentration of high-risk, large-sized changes under review. No new releases were published, indicating the project is in a pre-release stabilization and design ratification phase.

---

## 2. Releases
No new releases were published in the last 7 days.

---

## 3. Project Progress
The 6 merged/closed PRs this week advanced core reliability, plugin security, and observability:
- **[PR #9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134) [Closed]**: Fixed plugin component admission to retain exact verified payload bytes, eliminating re-read discrepancies and binding WASM manifests to optional SHA-256 checksums for improved supply chain integrity.
- **[PR #10722](https://github.com/zeroclaw-labs/zeroclaw/pull/10722) [Closed]**: Fixed pre-tool narration and terminal fallback delivery to ACP/RPC event consumers, ensuring consistent user experience across all channel interfaces.
- **[PR #9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) [Closed]**: Added token accounting to history-trim events, giving users and operators visibility into token usage changes when sessions are truncated.
- 3 additional closed PRs addressed build, CI, and documentation housekeeping tasks aligned with accepted RFC process updates.

---

## 4. Community Hot Topics
Discussion activity was dominated by long-running, high-impact RFCs that reached final acceptance this week:
1. **[Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (26 comments, closed)**: RFC to decouple memory lifecycle policy from storage backends. The high engagement reflects community demand for a modular memory architecture that lets operators swap storage backends without reimplementing consolidation, governance, and retention logic.
2. **[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (25 comments, closed)**: RFC for a ZeroClaw Chat Completions profile. The strong discussion signals broad user desire for compatibility with the de facto OpenAI API standard, enabling integration with popular clients like Open WebUI, LobeChat, Aider, and LangChain without custom adapters.
3. **[Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (24 comments, closed)**: RFC for per-execution confirmation tiers for high-risk shell commands, with Claude Code-style allow/ask/deny policies. The engagement underscores community priority for granular, usable security controls for agent tool execution.
4. **[Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (23 comments, 1 👍, closed)**: RFC for Goal mode v1, a bounded foreground work system for multi-turn objectives. The reaction and comment volume indicate user demand for persistent task tracking that survives across agent turns without overcomplicating the core runtime.

---

## 5. Bugs & Stability
High-severity bugs reported and actively addressed this week, ranked by risk:
1. **[PR #10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) [High Risk, Open]**: Git operations bypass allowed root restrictions, enabling agents to access repositories outside authorized directories. A fix PR is under maintainer review.
2. **[PR #9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) [High Risk, Open]**: Missing sender authorization checks for Bluesky and Reddit channels, allowing unauthenticated users to trigger agent actions. Fix PR is open and pending maintainer review.
3. **[PR #10803](https://github.com/zeroclaw-labs/zeroclaw/pull/10803) [High Risk, Open]**: Single-candidate stream recovery lacks a dedicated retry budget, and provider overload errors are misclassified, leading to unnecessary failures under load. Fix PR is open.
4. **[PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) [High Risk, Open]**: Image-bearing requests rejected with HTTP 400 fail entirely instead of recovering by omitting problematic images. A recovery implementation is under review.
5. **[PR #10931](https://github.com/zeroclaw-labs/zeroclaw/pull/10931) [High Risk, Open]**: Windows scheduled task stdout/stderr logs are unbounded, risking disk exhaustion. A fix implementing bounded log writers is open.
6. **[PR #10849](https://github.com/zeroclaw-labs/zeroclaw/pull/10849) [Medium Risk, Open]**: ZeroCode Ctrl+N shortcut replaces the current session instead of adding a new one, disrupting workflow. Fix PR is open.

---

## 6. Feature Requests & Roadmap Signals
Accepted RFCs and open feature PRs point to likely near-term roadmap additions:
- **Memory architecture refactor**: Four accepted RFCs (#6850, #9103, #9048, #6165) define a decoupled, modular memory system with separate conversation history, long-term memory, and enrichment connectors. This is a high-priority v0.9.0 candidate.
- **OpenAI Chat Completions API compatibility**: Accepted RFC #8603 will enable integration with the broader LLM client ecosystem, a highly requested user-facing feature.
- **Realtime speech-to-speech support**: Accepted RFC #8780 for Gemini Live voice channels is in the parking lot but has strong design consensus, making it a candidate for post-v0.9.0 release.
- **Goal mode v1**: Accepted RFC #8303 for bounded multi-turn task execution is aligned with core agent capability improvements and is likely targeted for the next minor release.
- **Granular shell command security**: Accepted RFC #7155 for allow/ask/deny command policies is tied to the v0.9.0 security architecture milestone and is in active implementation.

---

## 7. User Feedback Summary
Pain points and use cases surfaced in active issues and PRs:
- **Integration friction**: Users repeatedly cited the need for standard API compatibility (RFC #8603) to connect ZeroClaw to existing tools and workflows without custom development.
- **Security usability**: Feedback on shell command policies and tool authorization highlights demand for security controls that are both strict and easy to configure, rather than all-or-nothing access.
- **Session reliability**: Multiple bug reports around history trimming, session resets, and turn state (e.g., PR #10696, #10801) show users rely on persistent, consistent session state for long-running tasks.
- **Cross-channel parity**: Voice message support for Matrix (PR #11007) and authorization gaps in newer channels reflect user expectation for uniform features across all supported messaging platforms.
- **Local deployment usability**: New documentation for local model selection with llmfit (PR #11008) indicates growing user interest in self-hosted, hardware-optimized ZeroClaw deployments.

---

## 8. Backlog Watch
Long-running high-priority items awaiting maintainer action or completion:
- **[PR #7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) [Open, created 2026-06-17]**: Canonical sandbox policy schema with application-layer enforcement. This high-risk, XL-sized security feature has been open for 3 months and is marked "needs-author-action", blocking progress on the v0.9.0 security architecture milestone.
- **[PR #9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) [Open, created 2026-07-26]**: Anthropic stored OAuth profile support. This trusted-contributor PR is marked "needs-author-action" and has been open for nearly 2 months, delaying OAuth integration for a major provider.
- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) [Open, 15 comments]**: Maintainer decision queue tracker for RFCs and design issues. The active backlog of accepted but unimplemented RFCs (including parking-lot items like #8780, #7100, #9106) suggests maintainer bandwidth for design review and prioritization is a bottleneck.
- **[Issue #7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) [Accepted, icebox status]**: WASM plugin observer subscriptions. This plugin ecosystem feature has been deferred to the icebox despite accepted design status, with no recent implementation progress.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*