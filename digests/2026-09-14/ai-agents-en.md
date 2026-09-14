# OpenClaw Ecosystem Weekly Digest 2026-09-14

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-14 00:53 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Weekly Project Digest | 2026-09-14
*Data source: [openclaw/openclaw](https://github.com/openclaw/openclaw) | Reporting period: 2026-09-07 to 2026-09-14*

---

## 1. Last 7 Days' Overview
OpenClaw maintained high development velocity this week, with 500 updated issues (284 open/active, 216 closed) and 500 updated PRs (254 open, 246 merged/closed) reflecting active bug triage, feature delivery, and release support. The project shipped 3 new releases focused on security hardening, update reliability, and LTS maintenance, while addressing high-severity stability issues across gateway runtime, channel delivery, and subagent orchestration. Community engagement is concentrated on core reliability pain points: process leaks, session state corruption, and update failures on recent 2026.9.x builds. Overall project health is active but facing near-term pressure to resolve release-blocking stability regressions in the 2026.9 stable channel.

---

## 2. Releases
Three new versions were published this week, spanning stable channel updates and long-term support maintenance:

### v2026.9.4 (latest stable)
- **Details**: 20 direct commits, 1,558 merged PRs, 294 contributors
- **Release notes**: [docs.openclaw.ai/releases](https://docs.openclaw.ai/rele)
- Focus: Cumulative stability and security patch for the 2026.9 stable line, building on v2026.9.3's update safety improvements.

### v2026.9.3
- **Highlights**:
  - Safer update pipeline: Core and plugin changes are rehearsed in isolated candidate state before activation
  - Supports eligible migrations from 2026.9.2
  - Recovers abandoned update records without stopping a healthy matching Gateway
- Related tracking: [#136997](https://github.com/openclaw/openclaw/issues/136997), [#138839](https://github.com/openclaw/openclaw/pull/138839), [#141109](https://github.com/openclaw/openclaw/pull/141109), [#141175](https://github.com/openclaw/openclaw/pull/141175)

### v2026.6.35 (Extended Stable / LTS)
- **Status**: Final June 2026 LTS release
- **Highlights**: Safer provider and channel boundaries: Bundled providers and channel adapters now bound untrusted response bodies, reject oversized inputs before expensive processing, and preserve safe recovery during transport failures.

---

## 3. Project Progress
This week's closed/merged PRs advanced core reliability, multi-channel support, memory system scalability, and user experience:
- **Subagent schema fix**: [#146715](https://github.com/openclaw/openclaw/pull/146715) resolved `sessions_spawn` `outputSchema` being ignored on CLI backends, directly addressing the silent hang defect in [#141474](https://github.com/openclaw/openclaw/issues/141474).
- **MCP subagent tool injection fix**: Issue [#85030](https://github.com/openclaw/openclaw/issues/85030) (6 👍) was closed, resolving MCP tools not being injected into spawned subagent sessions across `bundle-mcp` and allowlist configurations.
- **Channel delivery fixes**:
  - [#135111](https://github.com/openclaw/openclaw/issues/135111) (intermittent malformed JSON tool call errors on claude-sonnet-5) was closed.
  - [#145563](https://github.com/openclaw/openclaw/issues/145563) (WeChat channel reply dispatch failure with `PreparedModelCatalogConfigReplacedError`) was closed.
  - [#137927](https://github.com/openclaw/openclaw/issues/137927) (internal context block leaking into Telegram messages) was closed.
- **Update & runtime reliability**:
  - [#140162](https://github.com/openclaw/openclaw/issues/140162) (Windows gateway restart killing slow-booting gateways as stale) was closed.
  - [#146958](https://github.com/openclaw/openclaw/issues/146958) (2026.9.2 → 2026.9.3 update failure on llm-task package owner metadata) was closed.
- **Memory & storage**:
  - Feature requests [#79904](https://github.com/openclaw/openclaw/issues/79904) (cursored SQLite transcript read API), [#79903](https://github.com/openclaw/openclaw/issues/79903) (durable session lineage API), and [#79905](https://github.com/openclaw/openclaw/issues/79905) (typed transcript projections) were closed as completed, advancing the SQLite runtime refactor umbrella (#79902).
- **UI/UX**:
  - [#147540](https://github.com/openclaw/openclaw/pull/147540) (macOS collapse completed work above chat replies) was closed, improving long conversation readability.
  - [#147506](https://github.com/openclaw/openclaw/pull/147506) (shared plugin registry test fixtures) was closed, reducing test duplication.

---

## 4. Community Hot Topics
The most actively discussed issues and PRs reflect community focus on core runtime stability, subagent reliability, and update failures:
1. **[#25592](https://github.com/openclaw/openclaw/issues/25592) - Text between tool calls leaks to messaging channels (40 comments, 1 👍)**
   Status: Open, P1, diamond lobster rating, security + session state impact
   Community need: Clear boundary between internal agent processing output and user-visible channel messages; current behavior causes UX confusion and potential information leaks across Slack, iMessage, and other channels.

2. **[#97616](https://github.com/openclaw/openclaw/issues/97616) - OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation (30 comments, 1 👍)**
   Status: Open, P1, silver shellfish rating, crash loop + message loss impact
   Community need: Reliable process lifecycle management for hook/tool execution; long-running instances experience progressive runtime degradation from zombie process buildup.

3. **[#44925](https://github.com/openclaw/openclaw/issues/44925) - Subagent completion silently lost — no retry, notification, or auto-restart on timeout (28 comments, 2 👍)**
   Status: Open, P1, diamond lobster rating, data + message loss impact
   Community need: Robust subagent orchestration with failure visibility and recovery; users report silent task failures in Telegram forum bot deployments with no indication of errors.

4. **[#91009](https://github.com/openclaw/openclaw/issues/91009) - Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes (23 comments, 2 👍)**
   Status: Open, P0, silver shellfish rating, gateway RPC stall + crash loop impact
   Community need: Performance optimization for Codex integration hook relay; users report 100%+ CPU usage per spawned process causing gateway instability.

5. **[#119720](https://github.com/openclaw/openclaw/issues/119720) - Synchronous agent persistence blocks Gateway event loop at scale (19 comments)**
   Status: Open, P1, diamond lobster rating
   Community need: Async persistence architecture for high-scale deployments; partial repairs have landed but full resolution is pending.

---

## 5. Bugs & Stability
Bugs are ranked by severity (P0 > P1 > P2) with priority on active regressions and crash/availability impacts:

### P0 (Critical)
| Issue | Severity Impact | Status | Fix PR |
|-------|-----------------|--------|--------|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hook relay CPU spikes + gateway RPC stall | Crash loop, availability | Open | None linked |
| [#146394](https://github.com/openclaw/openclaw/issues/146394) 2026.9.3 global install failure | UX release blocker | Open | None linked |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) 2026.9.3/9.4 update/recovery reliability tracking | UX release blocker | Open (tracking) | Multiple linked |
| [#145192](https://github.com/openclaw/openclaw/issues/145192) 2026.9.2 → 9.4 managed update fails at candidate-Doctor on v1 handoff lease | Crash loop, release blocker | Open | None linked |
| [#143334](https://github.com/openclaw/openclaw/issues/143334) Lost subagent completion starves queued user messages; restart recovery fails | Message loss, release blocker | Open | None linked |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) Agent SQLite WAL grows to 1.4–2.8 GB, blocks gateway startup (Windows) | Crash loop, release blocker | Open | None linked |
| [#147160](https://github.com/openclaw/openclaw/issues/147160) 2026.9.4 update failure at finalize:doctor | UX release blocker | Open | None linked |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) MCP server init timeout crashes Gateway via unhandled rejection | Crash loop | Open | Fix shape clear, queueable |

### P1 (High)
Notable regressions and high-impact bugs:
- [#139847](https://github.com/openclaw/openclaw/issues/139847): Messages sent during active reply runs are dropped (regression in 2026.9.2)
- [#144809](https://github.com/openclaw/openclaw/issues/144809): claude-cli turns longer than `RUN_STALE_TAKEOVER_MS` lose entire generated reply
- [#132765](https://github.com/openclaw/openclaw/issues/132765): `agents_wait` ignores `timeoutSeconds`, dies after ~60s as tool error
- [#113701](https://github.com/openclaw/openclaw/issues/113701): Large tool outputs exceed context window, compaction can't recover, sessions enter failure loop

---

## 6. Feature Requests & Roadmap Signals
User-requested features with strong engagement or linked development work that are likely candidates for upcoming releases:
1. **[#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` option for sub-agent completion announce routing (5 👍, linked PR open)**
   Rationale: High engagement, linked open PR, addresses a core multi-step workflow orchestration gap. Likely to land in a 2026.9.x minor release.
2. **[#81182](https://github.com/openclaw/openclaw/issues/81182) Overflow recovery should truncate tool results before full auto-compaction timeout (2 👍, linked PR open)**
   Rationale: Direct UX improvement for a common pain point, linked open PR, aligns with ongoing context overflow reliability work.
3. **[#58057](https://github.com/openclaw/openclaw/issues/58057) Dynamic identity resolution for allowlists (`dmPolicy: dynamic`) (1 👍)**
   Rationale: Addresses multi-user deployment scalability, especially for iMessage/BlueBubbles channels. Closed as stale this week but remains a high-value enterprise use case; may be revisited after 2026.9 stability work completes.
4. **[#60381](https://github.com/openclaw/openclaw/issues/60381) Browser tool: add force parameter for click and expose evaluate action (1 👍)**
   Rationale: Improves Playwright browser tool compatibility with modern frontend frameworks. Closed as stale this week but is a frequently requested enhancement for automation use cases.

---

## 7. User Feedback Summary
Real user pain points and use cases from this week's issues:
- **Update reliability frustration**: Multiple users report failed upgrades from 2026.9.2/9.3 to 9.4 across macOS, Linux/arm64, and Windows platforms, with rollback failures and service outages ([#146394](https://github.com/openclaw/openclaw/issues/146394), [#145192](https://github.com/openclaw/openclaw/issues/145192), [#147160](https://github.com/openclaw/openclaw/issues/147160)).
- **Subagent orchestration unreliability**: Production deployments on Telegram, Discord, and Kubernetes report silent subagent failures, lost completions, and stuck sessions with no recovery path ([#44925](https://github.com/openclaw/openclaw/issues/44925), [#143334](https://github.com/openclaw/openclaw/issues/143334), [#137332](https://github.com/openclaw/openclaw/issues/137332)).
- **Resource leaks and performance degradation**: Long-running instances experience zombie process buildup ([#97616](https://github.com/openclaw/openclaw/issues/97616)), unbounded SQLite database growth ([#114612](https://github.com/openclaw/openclaw/issues/114612), [#143524](https://github.com/openclaw/openclaw/issues/143524)), and CPU spikes from Codex hook relays ([#91009](https://github.com/openclaw/openclaw/issues/91009)).
- **Context overflow edge cases**: Users working with large tool outputs (web fetch, screenshots, exec results) report sessions entering unrecoverable failure loops, with compaction and truncation mechanisms failing to recover ([#113701](https://github.com/openclaw/openclaw/issues/113701), [#81182](https://github.com/openclaw/openclaw/issues/81182)).
- **Positive signal**: MCP tool injection fix ([#85030](https://github.com/openclaw/openclaw/issues/85030)) received 6 👍 reactions, indicating strong community demand for MCP ecosystem support.

---

## 8. Backlog Watch
Long-standing high-impact issues and PRs that have not received recent maintainer resolution and warrant attention:
1. **[#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to messaging channels**
   Created: 2026-02-24 | Age: ~7 months | P1, security impact
   Status: Needs maintainer review, product decision, and security review; linked PR is open but no resolution path communicated.
2. **[#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost**
   Created: 2026-03-13 | Age: ~6 months | P1, data/message loss impact
   Status: Needs product decision; multiple failure modes documented but no comprehensive fix scheduled.
3. **[#31331](https://github.com/openclaw/openclaw/issues/31331) Docker Install + Sandbox can't access workspace**
   Created: 2026-03-02 | Age: ~6.5 months | P1, security/UX friction impact
   Status: Needs product decision and live repro; core Docker deployment use case remains broken for Docker-outside-of-Docker setups.
4. **[#69208](https://github.com/openclaw/openclaw/issues/69208) Umbrella: duplicate transcript, replay, and context assembly across channels**
   Created: 2026-04-20 | Age: ~5 months | P1, message loss impact
   Status: Needs info from maintainers; umbrella issue covering cross-channel consistency bugs across MSTeams, webchat, Telegram, and other platforms.
5. **[#114612](https://github.com/openclaw/openclaw/issues/114612) [memory-core] SQLite unbounded growth: no retention policy for memory tables**
   Created: 2026-07-27 | Age: ~1.5 months | P2, diamond lobster rating
   Status: No linked fix PR; will cause disk fill on long-running instances with memory features enabled.

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Comparison Report
*Report Date: 2026-09-14 | Data Source: Weekly project digests for 5 leading open-source personal AI agent projects*

---

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is in a rapid maturation phase, with projects balancing core reliability hardening and ecosystem expansion across 2026.9 release cycles. Across all surveyed projects, stability regressions from recent major rewrites (session stores, update pipelines, state management) are the top near-term priority, alongside growing demand for multi-tenant deployment support, MCP (Model Context Protocol) integration maturity, and localization for global user bases. The ecosystem is shifting from single-user personal tools to production-grade team and enterprise deployments, with increasing focus on security hardening, operational reliability, and scalability. Cross-project alignment on shared protocol support for multi-agent, multi-user deployment models.

---

## 2. Activity Comparison
| Project | Updated Issues (Open/Closed) | Updated PRs (Open/Merged | Releases This Week | Health Score (1-10) |
|---------|-----------------------------|-----------------------------|---------------------|---------------------|
| OpenClaw | 500 (284 open / 216 closed | 500 (254 open / 246 merged) | 3 (2 stable, 1 LTS) | 7/10 (active, high velocity, facing 2026.9 stable channel stability pressure) |
| Hermes Agent | 50 (42 open / 8 closed) | 50 (44 open / 6 merged) | 2 (v0.21.x patch releases) | 6/10 (active, in stabilization phase post-session store rewrite) |
| IronClaw | 5 (5 open / 0 closed) | 27 (18 open / 9 merged) | 0 | 7/10 (steady velocity, focused on security and incremental fixes) |
| QwenPaw | 50 (37 open / 13 closed) | 50 (32 open / 18 merged) | 3 (1 stable, 2 pre-release) | 8/10 (positive health, strong community growth, steady delivery) |
| ZeroClaw | 50 (41 open / 9 closed) | 50 (50 open / 0 merged) | 0 | 6/10 (high velocity, pre-v0.8.5 stabilization, review-heavy backlog) |

*Health score methodology: weighted for activity volume, merge throughput, release stability, issue triage responsiveness, and severity of open critical bugs.*

---

## 3. OpenClaw's Position
### Advantages vs Peers
- **Scale and velocity**: OpenClaw has the largest development throughput by an order of magnitude, with 10x the issue and PR volume of the next-largest projects, indicating the largest contributor base (294 contributors in the latest stable release), and the most mature LTS support cadence with active extended stable release line.
- **Breadth of channel support**: It supports the widest range of messaging channels (Slack, Telegram, WeChat, iMessage, etc.) with the most mature cross-channel delivery fix track record.
- **MCP ecosystem maturity**: It has the most advanced MCP integration, with resolved tool injection bugs and active standardization alignment.

### Technical Approach Differences
OpenClaw prioritizes enterprise-grade gateway runtime reliability, subagent orchestration at scale, and update pipeline safety for distributed deployments, whereas smaller projects focus on desktop UX or single-user workflows. Its architecture is centered on a gateway-runtime model with plugin-based extensibility, compared to more monolithic or lighter-weight designs in peers.

### Community Size Comparison
OpenClaw has the largest and most active community, with the highest comment volumes on core stability issues, and the most established contributor and maintainer structure, compared to smaller but growing communities in QwenPaw and Hermes Agent, and smaller, more focused teams in IronClaw and ZeroClaw.

---

## 4. Shared Technical Focus Areas
1. **State store / SQLite reliability**
   - *Projects*: OpenClaw, Hermes Agent, QwenPaw
   - *Needs*: All three face SQLite-based projects report critical SQLite WAL growth, state corruption, and session persistence bugs. OpenClaw reports 1.4–2.8 GB WAL bloat blocking startup; Hermes Agent has multiple WAL deletion regressions from v0.21.0 rewrite; QwenPaw reports session index sync failures and ghost sessions.

2. **MCP (Model Context Protocol) integration maturity**
   - *Projects*: OpenClaw, IronClaw, QwenPaw
   - *Needs*: OpenClaw resolved MCP subagent tool injection bugs; IronClaw is addressing multi-tenant MCP catalog isolation and cross-user data leaks; QwenPaw faces MCP connection regressions in v2.2.x. All are investing in MCP security, reliability, and standardization alignment.

3. **Update pipeline reliability**
   - *Projects*: OpenClaw, Hermes Agent, QwenPaw
   - *Needs*: OpenClaw has multiple P0 update failure bugs across 2026.9.x releases; Hermes Agent faces desktop update failures from ephemeral file issues; QwenPaw reports plugin installation friction and update UX gaps. Safe, atomic, recoverable updates are a cross-project priority.

4. **Subagent orchestration reliability**
   - *Projects*: OpenClaw, QwenPaw, ZeroClaw
   - *Needs*: OpenClaw reports silent subagent completion loss and timeout failures; QwenPaw faces subagent spawn timeout bugs and model override issues; ZeroClaw has SOP engine step validation bugs that allow downstream steps to run after failed validation.

5. **Multi-tenant / team deployment support**
   - *Projects*: IronClaw, QwenPaw, OpenClaw
   - *Needs*: IronClaw is fixing cross-user MCP data leaks; QwenPaw has active community demand for Hub multi-tenant features and admin-managed shared workspaces; OpenClaw addresses enterprise multi-user deployments with channel-level security hardening.

6. **Localization (i18n) demand**
   - *Projects*: Hermes Agent, QwenPaw
   - *Needs*: Both have active community contributions for pt-BR desktop localization, with mature, ready-to-ship PRs awaiting maintainer review, reflecting growing global user bases.

---

## 5. Differentiation Analysis
| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|----------|----------|
| **Primary Feature Focus** | Enterprise-grade gateway reliability, multi-channel delivery, LTS support | Desktop + TUI experience, session store performance | MCP security, multi-tenant server deployments, benchmarking | Memory systems (ReMe, Auto Fin), plugin ecosystem, Hub team features | Core runtime security, SOP workflow engine, edge mesh architecture |
| **Target Users** | Enterprise self-hosted operators, large-scale bot deployments | Personal power users, global desktop/TUI users | Multi-tenant SaaS operators, MCP ecosystem builders | Personal productivity users, small teams | Technical power users, edge computing enthusiasts |
| **Technical Architecture** | Gateway-runtime, plugin-based, distributed orchestration | Monolithic desktop + session store rewrite, provider abstraction | Rust-based, MCP-first, multi-tenant isolation | Monolithic with plugin store, memory-centric design | Rust-based, SOP engine, modular security framework |
| **Release Cadence** | Stable channel + LTS, frequent patch releases | Rapid minor release cycles, patch-heavy post-rewrite | Slow, incremental, no release this cycle | Beta + stable dual-track, feature-driven releases | Stabilization milestone-based, batch merge releases |

---

## 6. Community Momentum & Maturity
### Activity Tiers
1. **High Velocity, Mature Scale**: OpenClaw — largest community, highest throughput, established release cadence with LTS support, most mature contributor governance.
2. **High Velocity, Growth Phase**: QwenPaw — rapid feature delivery, growing contributor base, expanding from personal to team use cases, strong community engagement.
3. **Active, Stabilization Phase**: Hermes Agent — high activity but focused on post-rewrite bug fixing, lower merge throughput, strong community contribution for i18n.
4. **Steady, Focused Development**: IronClaw — consistent incremental progress, focused on security and MCP, smaller but efficient, smaller team with targeted priorities.
5. **High Velocity, Pre-Release Stabilization**: ZeroClaw — large open PR backlog accumulating for v0.8.5, focused on process maturation and architecture work, low merge throughput currently.

### Maturity Assessment
- **Most Mature**: OpenClaw (established governance, LTS, enterprise-grade)
- **Fastest Growing**: QwenPaw (expanding feature set, growing community, team roadmap)
- **Most Process-Maturing**: ZeroClaw (investing in RFC processes, scaling contributor workflows)

---

## 7. Trend Signals
1. **Shift from personal to team/enterprise deployments**
   - *Evidence*: QwenPaw Hub multi-tenant roadmap demand, IronClaw multi-tenant security fixes, OpenClaw enterprise channel security hardening.
   - *Value for developers*: Prioritize tenant isolation, role-based access control, shared workspace primitives early in architecture design for team roadmap.

2. **MCP is becoming the de facto agent extensibility standard**
   - *Evidence*: All projects investing in MCP reliability, security, and standardization (SEP-414 caller attribution, tool injection fixes, multi-tenant MCP isolation.
   - *Value for developers*: Invest in MCP compatibility and compliance as a core extensibility layer, not an optional integration.

3. **SQLite is the dominant state store, but WAL and durability are unsolved pain points**
   - *Evidence*: 3 of 5 projects face critical SQLite WAL bloat, corruption, and concurrency bugs from recent rewrites.
   - *Value for developers*: Invest in proper SQLite WAL management, connection handling, connection pool design, and durability testing as core infrastructure investment.

4. **Reliability is overtakes feature velocity as top priority**
   - *Evidence*: All projects in stabilization phases, with top community focus on stability regressions, update reliability, and bug fixes over new feature work.
   - *Value for developers*: Prioritize stability testing, regression suites, and incremental rollout for major rewrites to avoid user attrition from post-release bug fallout.

5. **Localization is a high-impact community-driven growth lever**
   - *Evidence*: Hermes Agent and QwenPaw have complete community-contributed localization PRs with thousands of lines of translations, driving high engagement and global user growth with minimal maintainer effort.
   - *Value for developers*: Establish i18n frameworks and contribution guidelines early to tap global community contributions and expand user base.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Weekly Project Digest | 2026-09-14
Repository: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. Last 7 Days' Overview
This week Hermes Agent saw high development activity tied to the v0.21.x session store rewrite rollout, with 50 updated issues (42 open, 8 closed) and 50 updated PRs (44 open, 6 merged/closed). The majority of critical work focused on `state.db` WAL (write-ahead log) stability regressions introduced by v0.21.0, which caused session halts across Linux, macOS, and multi-profile deployments. Two patch releases shipped to address core state store fragility, while community contributions advanced i18n, platform-specific fixes, and new provider support. Overall project health is active but in a stabilization phase, with maintainers prioritizing state store reliability over new feature work.

---

## 2. Releases
This week included 2 patch releases in the v0.21.x line, both targeting post-rewrite session store stability:
- **[v2026.9.11 / v0.21.2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.11)** – *State.db Patch Release*  
  Fixes fragility in the rewritten session store connection handling from v0.21.0, specifically addressing issues where second `state.db` writers would cancel each other's locks and corrupt healthy sessions.
- **[v2026.9.7 / v0.21.1](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.7)** – *Rollup Patch Release*  
  Cumulative rollup of `main` branch changes since v0.21.0 for tagged deployments and downstream consumers, with no standalone feature set.

*Breaking changes / migration notes: None; both are drop-in patch upgrades for v0.21.0 users.*

---

## 3. Project Progress
6 PRs were merged/closed in the last 7 days, delivering fixes and incremental improvements across core components:
1. **Closed MCP OAuth token persistence bug** – Resolved issue [#62333](https://github.com/NousResearch/hermes-agent/issues/62333) where OAuth `refresh_token` was erased on every token refresh, killing MCP server connections ~1 hour after login.
2. **Closed Feishu/Lark WebSocket crash** – Fixed issue [#67358](https://github.com/NousResearch/hermes-agent/issues/67358) where normal WebSocket close frames (code 1000) caused the full gateway process to exit instead of reconnecting gracefully.
3. **Closed dashboard session stuck state bug** – Fixed issue [#108383](https://github.com/NousResearch/hermes-agent/issues/108383) where web dashboard chat sessions stayed permanently in "Setup Required"/queued state while CLI chat worked on the same gateway.
4. **Closed model picker reasoning effort UX issue** – Implemented feature [#85209](https://github.com/NousResearch/hermes-agent/issues/85209) to only display reasoning-effort levels natively supported by the selected model, removing misleading 7-level scales for limited models.
5. 2 additional closed PRs addressed documentation and test stability gaps aligned with the v0.21.x rollout.

---

## 4. Community Hot Topics
The most actively discussed items this week centered on state store reliability and localization demand:
1. **[Issue #40239: Add Portuguese (pt-BR) desktop i18n support](https://github.com/NousResearch/hermes-agent/issues/40239)**  
   *12 comments, 4 👍 | Open, needs-decision*  
   Highest-engagement issue this week: The community is pushing for full pt-BR UI localization, noting strong existing backend/TUI Portuguese support. Matched by open PR [#92590](https://github.com/NousResearch/hermes-agent/pull/92590) with 3,400+ lines of translated desktop strings, signaling a mature, ready-to-ship community contribution.
2. **[Issue #109727: Second Hermes process unlinks live state.db WAL on Linux](https://github.com/NousResearch/hermes-agent/issues/109727)**  
   *8 comments | Open, P1 critical*  
   Widely reported regression from the v0.21.0 session store rewrite: even read-only CLI commands (e.g. `hermes sessions list`) break running gateway sessions by deleting WAL files, triggering `DeletedWalGenerationError`.
3. **[Issue #109641: macOS WAL pre-connect refusal is a no-op](https://github.com/NousResearch/hermes-agent/issues/109641)**  
   *5 comments | Open, P1 critical*  
   Follow-up to the Linux WAL bug: the v0.21.2 WAL protection patch only works on Linux, leaving macOS vulnerable to gateway restart races that cause session halts and 4.2GB of WAL bloat in 13 minutes.

Underlying community need: Users are prioritizing stability of core session state over new features, with heavy demand for expanding localization to match Hermes' growing global user base.

---

## 5. Bugs & Stability
Bugs reported this week are dominated by v0.21.x session store regressions, ranked by severity:
### Critical (P1)
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#109727](https://github.com/NousResearch/hermes-agent/issues/109727) – Linux second-process WAL deletion breaks running gateways | Session data loss / full halt | Open | [#110179](https://github.com/NousResearch/hermes-agent/pull/110179) (refuses state.db publish with held locks; replays diverted transcripts) |
| [#109641](https://github.com/NousResearch/hermes-agent/issues/109641) – macOS WAL holder scan is Linux-only, causing gateway restart races | Session halt + WAL bloat | Open | In progress, cross-platform holder detection planned |
| [#109966](https://github.com/NousResearch/hermes-agent/issues/109966) – Fleet restart leaves long-lived WAL holders, blocking new openers for hours | Multi-instance outage | Open | Tied to WAL generation handoff rewrite |
| [#110106](https://github.com/NousResearch/hermes-agent/issues/110106) – Concurrent `tui_gateway` processes thrash WAL retirement, kill sessions mid-turn | Silent session failure | Open | [#110179](https://github.com/NousResearch/hermes-agent/pull/110179) partial fix |
| [#109946](https://github.com/NousResearch/hermes-agent/issues/109946) – Desktop all-profile sidebar triggers WAL deletion in live gateways | Multi-profile outage | Open | No PR yet |
| [#110276](https://github.com/NousResearch/hermes-agent/issues/110276) – macOS single-process multi-handle WAL split causes suicide-restart loop | Desktop crash loop | Open | No PR yet |
| [#110421](https://github.com/NousResearch/hermes-agent/issues/110421) – Windows installer fails on package manager shimmed `uv` | Install failure | Open | Fix in linked PR [#110421](https://github.com/NousResearch/hermes-agent/pull/110421) |

### High (P2)
Key P2 bugs include:
- [#107905](https://github.com/NousResearch/hermes-agent/issues/107905): Resume guard counts compaction copies, blocking resumption of heavily compacted long sessions
- [#107899](https://github.com/NousResearch/hermes-agent/issues/107899): Internal diagnostic messages leak to customer-facing WhatsApp deployments
- [#110416](https://github.com/NousResearch/hermes-agent/issues/110416): Session store persists credentials unredacted even with `security.redact_secrets: true` (security boundary risk)

---

## 6. Feature Requests & Roadmap Signals
User-requested features this week point to likely near-term roadmap priorities, with high probability of landing in v0.22 or the next minor release:
1. **Portuguese (pt-BR) desktop localization** ([#40239](https://github.com/NousResearch/hermes-agent/issues/40239) + PR [#92590](https://github.com/NousResearch/hermes-agent/pull/92590)) – *Very high likelihood*: The contribution is complete with 3,400+ translated strings, only awaiting maintainer decision.
2. **Per-task reasoning effort settings in desktop** (PR [#110435](https://github.com/NousResearch/hermes-agent/pull/110435)) – *High likelihood*: Aligns with the recently merged model picker effort level fix [#85209](https://github.com/NousResearch/hermes-agent/issues/85209), and extends existing CLI functionality to desktop.
3. **Multi-agent desktop workspace** ([#50750](https://github.com/NousResearch/hermes-agent/issues/50750)) – *Medium/long-term*: Resizable split-screen views for monitoring multiple agents simultaneously, with ongoing user demand but no active PR.
4. **OpenRouter credit display in terminal banner** ([#50305](https://github.com/NousResearch/hermes-agent/issues/50305)) – *Medium likelihood*: Low-complexity quality-of-life feature with consistent community interest.
5. **Lanseq model provider support** (PR [#110019](https://github.com/NousResearch/hermes-agent/pull/110019)) – *High likelihood*: Full OpenAI-compatible provider implementation with tests, targeting APAC users.

---

## 7. User Feedback Summary
Real user pain points and use cases captured this week:
- **Top pain point**: v0.21.x state store instability is causing production outages for self-hosted and multi-profile users, with reports of silent session failures, gateway crash loops, and hours-long blockages after restarts. Multiple users noted downgrading to v0.20.x as a workaround.
- **Platform-specific friction**: Windows installer failures due to package manager shims, macOS desktop renderer crashes on AMD GPUs ([#76947](https://github.com/NousResearch/hermes-agent/issues/76947)), and Linux systemd dependency gaps (addressed in PR [#110440](https://github.com/NousResearch/hermes-agent/pull/110440)) are creating onboarding barriers.
- **i18n demand**: Localization is a high-priority ask for non-English users, with pt-BR and Indonesian communities contributing complete translation PRs ([#92590](https://github.com/NousResearch/hermes-agent/pull/92590), [#92192](https://github.com/NousResearch/hermes-agent/pull/92192), [#93632](https://github.com/NousResearch/hermes-agent/pull/93632)) without maintainer prompting.
- **Password manager UX gap**: Users report frustration with 1Password/Bitwarden integration only supporting the first saved URL for login items ([#110423](https://github.com/NousResearch/hermes-agent/issues/110423)), with 3 separate community PRs submitted to fix the issue.
- **Positive signal**: Users are actively building on Hermes for customer-facing use cases (WhatsApp CS agents, Feishu bot deployments), indicating growing enterprise/operational adoption.

---

## 8. Backlog Watch
The following long-standing high-impact items are awaiting maintainer attention and risk falling further behind:
1. **[Issue #40239 / PR #92590: pt-BR desktop localization](https://github.com/NousResearch/hermes-agent/issues/40239)** – Open since June 2026, with a complete community PR available since August 2026. Stuck in `needs-decision` state despite being the highest-engagement issue this week; risks contributor attrition if unaddressed.
2. **[Issue #76947: Desktop renderer crash-loop on Linux + AMD RX 7900 XTX](https://github.com/NousResearch/hermes-agent/issues/76947)** – Open since August 2026, persists even with GPU disable flags. No assigned maintainer or fix PR, leaving high-end Linux AMD users with a broken desktop experience.
3. **[PR #36202: Feishu CardKit native streaming card support](https://github.com/NousResearch/hermes-agent/pull/36202)** – Open since June 2026, addresses major Feishu UX issues (flickering updates, rate limits, no typewriter effect). Stalled despite active Feishu user base and recent related Feishu bug fixes.
4. **[Issue #50750: Multi-agent desktop windows](https://github.com/NousResearch/hermes-agent/issues/50750)** – Open since June 2026, repeatedly updated by the community with no official roadmap response. Represents a key power-user feature gap relative to competing AI agents.
5. **[PR #95401: Gitignore OMH ephemeral runtime fix for desktop updates](https://github.com/NousResearch/hermes-agent/pull/95401)** – Open since August 2026, fixes a common desktop update failure where stranded ephemeral files block auto-updates. No review or merge timeline communicated.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Weekly Project Digest
*Report date: 2026-09-14 | Repository: [nearai/ironclaw](https://github.com/nearai/ironclaw)*

---

## 1. Last 7 Days' Overview
Over the past 7 days, the IronClaw project maintained steady development activity, with 5 active open issues (no closures) and 27 updated pull requests (9 merged/closed, 18 open). Work focused heavily on MCP (Model Context Protocol) security and functionality fixes, web UI usability improvements, dependency maintenance, and ongoing benchmark failure taxonomy tracking. No new releases were published, indicating the team is iterating on incremental fixes and feature refinements ahead of the next version bump. The volume of dependency updates (14 of 27 PRs are dependency bumps) reflects consistent infrastructure upkeep, while targeted fixes for cross-user data exposure and IME input bugs show active attention to both security and end-user experience.

---

## 2. Releases
No new releases were published in the last 7 days.

---

## 3. Project Progress (Merged/Closed PRs)
9 PRs were merged or closed in the past week, advancing core functionality, security, and cross-platform support:
- **MCP catalog merge fix**: [PR #8083](https://github.com/nearai/ironclaw/pull/8083) resolved a critical issue where a single user's MCP tool discovery would overwrite all other users' catalogs on shared servers, by merging discovered catalogs instead of replacing them.
- **Hosted-MCP provider bundling**: [PR #8089](https://github.com/nearai/ironclaw/pull/8089) added a first-party bundled package for the agent.market hosted-MCP provider, with pre-discovery fallback tool declarations.
- **Empty env var handling fix**: [PR #8088](https://github.com/nearai/ironclaw/pull/8088) fixed silent fallback-to-default behavior for empty-string environment variables, preventing operator typos from causing misconfigurations.
- **Shared channel disambiguation**: [PR #8076](https://github.com/nearai/ironclaw/pull/8076) fixed assistant behavior to distinguish disconnected shared channels from unpaired accounts, with consistent rejection messaging across product, adapter, and OpenAI-compatible surfaces.
- **Telegram command menu support**: [PR #8072](https://github.com/nearai/ironclaw/pull/8072) added automatic registration of Bot API command menus (`/model`, `/status`, `/new`, `/stop`, `/interrupt`) at Telegram extension activation.
- **Dependency updates**: 3 dependency bump PRs were closed, including [PR #8097](https://github.com/nearai/ironclaw/pull/8097) (24 Rust "everything-else" group updates) and [PR #8080](https://github.com/nearai/ironclaw/pull/8080) (21 Rust "everything-else" group updates).

---

## 4. Community Hot Topics
Comment count data is undefined for all PRs and issues in the dataset; ranking is based on issue/PR relevance and cross-reference to related work:
1. **Hosted-MCP cross-user metadata exposure** ([Issue #6778](https://github.com/nearai/ironclaw/issues/6778), 2 comments): The most commented active issue, highlighting a security flaw where tool catalogs are keyed only by extension ID, not user installation, leading to cross-user data leaks on multi-principal servers. It has spawned 3 related fix PRs, indicating it is a top maintainer priority.
2. **WebChat v2 IME composition bug** ([Issue #8091](https://github.com/nearai/ironclaw/issues/8091)): A user-reported end-user usability regression where pressing Enter to confirm IME input accidentally sends the chat message. A corresponding fix PR ([#8092](https://github.com/nearai/ironclaw/pull/8092)) was opened within 1 day, reflecting fast response to user-facing bugs.
3. **Daily failure taxonomy tracking** ([Issue #8093](https://github.com/nearai/ironclaw/issues/8093), [Issue #8081](https://github.com/nearai/ironclaw/issues/8081)): Two recurring benchmark analysis issues tracking 42 non-pass tasks each in the officeqa suite, dominated by DeepSeek-V4-Flash model numeric errors and navigation failures. These signal ongoing investment in model quality benchmarking.

---

## 5. Bugs & Stability
Bugs reported in the last 7 days, ranked by severity:
1. **Critical: Hosted-MCP cross-user tool catalog overwrites**  
   - Source: [Issue #6778](https://github.com/nearai/ironclaw/issues/6778)  
   - Description: On multi-user hosted-MCP servers, tool catalogs discovered under one user's credentials are published globally by extension ID, exposing metadata across users and overwriting other users' tool lists.  
   - Fix status: Partial fixes merged ([PR #8083](https://github.com/nearai/ironclaw/pull/8083) adds catalog merging); additional per-caller keying fix in progress ([PR #8090](https://github.com/nearai/ironclaw/pull/8090)).
2. **High: Operator-installed extensions cannot be used**  
   - Source: [Issue #8085](https://github.com/nearai/ironclaw/issues/8085) (PR with bug description)  
   - Description: Inconsistency between extension manifest constructor and validator logic prevents operator-installed packages from being used, even though they build successfully.  
   - Fix status: Fix PR open ([#8085](https://github.com/nearai/ironclaw/pull/8085)).
3. **Medium: WebChat v2 IME input sends messages prematurely**  
   - Source: [Issue #8091](https://github.com/nearai/ironclaw/issues/8091)  
   - Description: Pressing Enter to confirm IME composition submits the chat message instead of just finalizing text input, leading to accidental unfinished messages.  
   - Fix status: Fix PR open ([#8092](https://github.com/nearai/ironclaw/pull/8092)).
4. **Medium: `ironclaw skills list` CLI does not show runtime-installed skills**  
   - Source: [Issue #8086](https://github.com/nearai/ironclaw/issues/8086)  
   - Description: The CLI skills list only shows skills for the configured user, not skills installed by agents or other users, misleading debuggers.  
   - Fix status: No fix PR opened yet.
5. **Low: Hardcoded 128k prompt context limit**  
   - Source: [PR #8087](https://github.com/nearai/ironclaw/pull/8087)  
   - Description: The prompt context token budget is a hardcoded constant, requiring code patches for deployments using larger-context models.  
   - Fix status: Feature PR open to make it an overridable setting.

---

## 6. Feature Requests & Roadmap Signals
Active feature work and user-requested capabilities likely to land in upcoming releases:
1. **SEP-414 caller attribution for hosted-MCP calls** ([PR #8084](https://github.com/nearai/ironclaw/pull/8084)): Opt-in standard for passing conversation ID and retry metadata to MCP servers, enabling per-conversation state and idempotent retries. This aligns with ongoing MCP ecosystem standardization and is likely to ship soon as an opt-in feature.
2. **Configurable prompt context limit** ([PR #8087](https://github.com/nearai/ironclaw/pull/8087)): Replaces the hardcoded 128k token budget with an overridable setting, a high-demand feature for deployments using large-context models.
3. **Per-caller hosted-MCP catalog isolation** ([PR #8090](https://github.com/nearai/ironclaw/pull/8090)): Builds on the merged catalog merge fix to fully isolate tool catalogs per user, a critical security improvement for multi-tenant deployments.
4. **Turn lineage regression test coverage** ([PR #8098](https://github.com/nearai/ironclaw/pull/8098)): Expands test coverage for turn state lineage metadata, signaling ongoing investment in agent state reliability.

---

## 7. User Feedback Summary
Real user pain points and use cases reflected in this week's issues:
- **Multi-tenant deployment security pain**: The hosted-MCP cross-user exposure issue (#6778) highlights a critical gap for operators running shared IronClaw instances, where user data isolation is a core requirement.
- **End-user input friction**: The IME composition bug (#8091) reported by user `supermomonga` shows a tangible usability pain point for non-Latin script users, with the issue noted as a recurrence of a previously fixed behavior.
- **Debugging tooling gaps**: The `ironclaw skills list` visibility issue (#8086) points to a mismatch between user expectations (CLI should show all skills the agent can access) and current behavior, leading to wasted debugging time.
- **Deployment flexibility needs**: The hardcoded context limit (PR #8087) and empty env var handling fix (PR #8088) both reflect operator feedback that configuration inflexibility creates operational overhead.

---

## 8. Backlog Watch
Long-running open items requiring maintainer attention:
1. **WASM dependency group update** ([PR #7834](https://github.com/nearai/ironclaw/pull/7834), created 2026-08-23, open for 22 days): A large, medium-risk Rust WASM dependency bump (wasmtime, wit-component, wit-parser) that has been open for over 3 weeks, pending review and testing.
2. **GitHub Actions dependency group update** ([PR #8079](https://github.com/nearai/ironclaw/pull/8079), created 2026-09-06): A 6-pack action update including a major version bump of `actions/setup-node` from v4 to v7, which may require pipeline validation before merge.
3. **Hosted-MCP per-installation catalog fix** ([Issue #6778](https://github.com/nearai/ironclaw/issues/6778), created 2026-07-28): The original cross-user exposure issue has been open for nearly 7 weeks, with partial fixes merged but full per-installation keying still in progress.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Weekly Project Digest | 2026-09-14
Repository: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Last 7 Days' Overview
QwenPaw maintained high development velocity over the past week, with 50 updated issues (37 open/active, 13 closed) and 50 updated pull requests (32 open, 18 merged/closed), alongside 3 new releases in the v2.2.1 line. The project advanced core capabilities in agent model routing, memory management, and multi-protocol compatibility, while addressing a range of user-reported bugs in desktop, MCP integration, and session reliability. Community engagement remained strong, with active discussions around multi-tenant Hub functionality, plugin store UX, and long-running task stability. Overall project health is positive, with a steady flow of new contributor PRs and responsive issue triage.

---

## 2. Releases
Three new versions were published this week, all in the v2.2.1 release cycle:
### v2.2.1 (stable)
- [Release link](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1)
- **Key changes**:
  - Added per-agent model routing configuration, including provider preferences and fallback behavior ([#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501))
  - Introduced Auto Fin proactive memory review and upgraded ReMe memory system
- No breaking changes reported; incremental upgrade from v2.2.0.

### v2.2.1-beta.2 (pre-release)
- [Release link](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.2)
- **Key changes**:
  - Improved mobile agent selector in console UI ([#7623](https://github.com/agentscope-ai/QwenPaw/pull/7623))
  - Aligned QwenPaw CSS selectors for consistent frontend styling
  - Version bump to 2.2.1b2 ([#7643](https://github.com/agentscope-ai/QwenPaw/pull/7643))

### v2.2.1-beta.1 (pre-release)
- [Release link](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.1)
- **Key changes**:
  - Initial implementation of agent model routing settings ([#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501))
  - Updated website documentation for v2.2.0 ([#7517](https://github.com/agentscope-ai/QwenPaw/pull/7517))
  - Fixed chat session sync during streaming

---

## 3. Project Progress
Closed/merged PRs this week advanced the following areas:
- **Localization**: Brazilian Portuguese (pt-BR) locale support was merged ([#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009)), with a follow-up PR ([#7734](https://github.com/agentscope-ai/QwenPaw/pull/7734)) completing full key parity and fixing broken translations.
- **Telegram channel improvements**: Markdown table rendering fix for Telegram was merged ([#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590)), replacing raw pipe characters with formatted `<pre>` blocks.
- **Bug fixes**:
  - Resolved `subagent_model` override not taking effect (subagents always inherited parent model) ([#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676)), with diagnostic PR [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) addressing root cause visibility.
  - Fixed session index and disk file sync issue causing "ghost sessions" ([#7698](https://github.com/agentscope-ai/QwenPaw/issues/7698)).
  - Fixed regression where switching agents silently created new conversations in 2.2.1-beta.2 ([#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687)).
- **Plugin store UX**: Feedback on multi-step plugin installation/update flows ([#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582)) was triaged and closed as planned for upcoming UI revisions.

---

## 4. Community Hot Topics
The most active discussions this week centered on team usage, memory reliability, and mobile/desktop UX:
1. **QwenPaw Hub multi-tenant roadmap discussion** ([#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318))
   - 26 comments, 4 👍 — the highest-engagement issue of the week.
   - Underlying need: The community is pushing hard for team-oriented features, including admin-managed skills, shared agent workspaces, and multi-user access controls, as QwenPaw scales from personal to team use cases.

2. **Deployment page UX optimization** ([#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177))
   - 10 comments — closed after feedback was incorporated into v2.2.1 beta UI updates.
   - Underlying need: Mobile users face friction with hard-to-reach control buttons and risk of accidental "stop" clicks, reflecting growing mobile usage of the web console.

3. **Task stop not actually terminating execution** ([#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567))
   - 6 comments.
   - Underlying need: Users require reliable task lifecycle controls, especially for long-running agent workflows where partial execution can cause side effects (e.g., file modifications, API calls).

4. **Memory persistence and consistency issues** ([#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571), [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724), [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708))
   - Combined 10 comments across three related issues.
   - Underlying need: Users depend on QwenPaw for long-context development and workflow tasks, so memory/session loss and configuration drift are high-impact pain points that erode trust.

---

## 5. Bugs & Stability
Bugs reported this week, ranked by severity:
| Severity | Issue | Description | Fix PR Status |
|----------|-------|-------------|---------------|
| Critical | [Memory exhaustion from three compounding paths](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Unbounded stream buffers, keep-alive instance stacking, and doom-loop gate evasion cause ~1MB/s memory growth until OOM. | Fix PR not yet assigned; issue includes minimal fix proposals. |
| High | [Feishu session queue consumer卡死](https://github.com/agentscope-ai/QwenPaw/issues/7534) | Single Feishu DM sessions become permanently unresponsive after high-priority card messages, with no way to recover without restart. | No fix PR yet; under investigation. |
| High | [Session and model config loss on desktop](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Windows desktop v2.2.1 loses conversation history and saved model settings after plugin deployment/shutdown cycles. | No fix PR yet; linked to prior related issue [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708). |
| High | [Task stop UI state out of sync with backend](https://github.com/agentscope-ai/QwenPaw/issues/7567) | Clicking "stop" hides the execution indicator but the task continues running, causing 409 conflicts on new requests. | No fix PR yet. |
| Medium | [MCP connection failures in 2.2.x](https://github.com/agentscope-ai/QwenPaw/issues/7716) | MCP servers that worked in 2.1.1b3 fail to connect/register after upgrading to 2.2.x. | Fix PR [#7735](https://github.com/agentscope-ai/QwenPaw/pull/7735) (preserves decoded HTTP error responses) open; [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) (Java MCP SDK compatibility) also open. |
| Medium | [Subagent spawn always times out](https://github.com/agentscope-ai/QwenPaw/issues/7678) | All subagent tasks fail with timeout in v2.2.0, regardless of timeout duration. | Diagnostic PR [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) open to surface configuration load failures. |
| Medium | [Daily Paper fails silently without proxy config](https://github.com/agentscope-ai/QwenPaw/issues/7715) | ReMe Daily Paper cron job returns "no content" when arxiv.org is unreachable, hiding the real network error. | No fix PR yet. |
| Low | [PDF blocks still sent to multimodal endpoints](https://github.com/agentscope-ai/QwenPaw/issues/7689) | Fix #7621 only addressed non-multimodal models; multimodal OpenAI-compatible endpoints still reject PDF file blocks. | No fix PR yet. |

---

## 6. Feature Requests & Roadmap Signals
User-requested features with high likelihood of inclusion in upcoming releases:
1. **Separate memory model configuration** ([#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664))
   - Request for a lightweight dedicated model for ReMe memory write operations (summarization, dream) to reduce token costs when using expensive flagship chat models.
   - Implementation PR [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) is already open, so this is very likely to ship in v2.2.2 or a v2.2.1 patch.

2. **Plugin store UX improvements** ([#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582))
   - One-click plugin updates, update notifications, and persistent browsing state when installing multiple plugins.
   - High user demand for multi-device plugin management; aligns with Hub multi-tenant push, so expected within 1-2 minor releases.

3. **A2A protocol support** ([#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484))
   - Users are asking for official A2A (Agent-to-Agent) protocol support alongside the existing MCP implementation, as part of the unified Driver architecture.
   - Mentioned in architecture docs; development is likely planned for post-v2.2 stable cycle.

4. **Loop context compression commands** ([#7679](https://github.com/agentscope-ai/QwenPaw/issues/7679))
   - `/compact` command for long-running loop/task modes to reduce token consumption by compressing context when it exceeds a threshold.
   - Aligns with ongoing memory and context management work; good candidate for next minor release.

5. **History UI layout customization** ([#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739))
   - Option to move conversation history to the right sidebar to reduce crowding on small laptop screens.
   - Low-effort frontend change; likely to be implemented in an upcoming console update.

---

## 7. User Feedback Summary
### Key Pain Points
- **Reliability concerns on desktop**: Multiple Windows users report lost sessions, lost model configurations, and stuck subagent tasks, indicating v2.2.x desktop builds have stability regressions that impact daily use.
- **Memory consistency**: Users relying on QwenPaw for ongoing development workflows report that agent memory of project paths, rules, and context degrades over time, requiring repeated re-instruction.
- **Plugin management friction**: Power users with multiple QwenPaw installations find the current plugin store too manual, with no bulk update or change notification features.
- **Stop button unreliability**: The disconnect between UI state and backend execution creates real-world risk of unintended operations, especially for file-modifying tasks.

### Positive Signals
- Strong excitement around QwenPaw Hub multi-tenant features, with active community input on roadmap priorities.
- Growing ecosystem of first-time contributors submitting fixes for providers, channels, and core bugs, indicating a healthy expanding community.
- Users are adopting QwenPaw for sophisticated use cases: plugin development pipelines, daily research automation, and multi-agent team workflows.

---

## 8. Backlog Watch
Long-standing important issues/PRs needing maintainer attention:
1. **Per-task model selection for subagents** ([#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901))
   - Open since June 2026, 3 comments, high value for token cost optimization. Related to recently fixed `subagent_model` bug; full feature implementation is still pending.

2. **Playwright browser driver self-healing** ([#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776))
   - Open since August 2026, ready for human review. Fixes a permanent browser backend failure state when the Playwright driver crashes; high impact for browser automation users.

3. **Atlas Cloud provider integration** ([#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499))
   - Open since July 2026, first-time contributor PR. Low-risk addition of a new OpenAI-compatible provider; waiting on review.

4. **Team collaboration instruction ignored on first try** ([#3113](https://github.com/agentscope-ai/QwenPaw/issues/3113))
   - Open since April 2026. New PR [#7737](https://github.com/agentscope-ai/QwenPaw/pull/7737) (expand multi-agent collaboration trigger keywords) addresses this; needs maintainer review to close out the long-standing issue.

5. **Himalaya and common CLI tools in Docker image** ([#3429](https://github.com/agentscope-ai/QwenPaw/issues/3429))
   - Open since April 2026, closed this week but reflects a recurring request for pre-configured Docker environments. Worth monitoring for inclusion in official image roadmap.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Weekly Project Digest
*Week ending 2026-09-14 | Repository: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

---

## 1. Last 7 Days' Overview
ZeroClaw saw sustained, high-velocity development activity this week, with 50 issues and 50 pull requests updated across the 7-day window. The project is currently in a stabilization and feature-hardening phase focused on v0.8.5, with no new releases shipped and all 50 updated PRs remaining open (0 merged/closed) — indicating work is accumulating for upcoming batch merges. Discussion is concentrated on governance process improvements, runtime stability bugs, security hardening, and provider reliability, with maintainer-led RFCs and trackers driving the bulk of issue activity. The absence of merged PRs paired with high open PR volume suggests the project is working through a backlog of review-heavy, high-risk changes (security, architecture, core runtime) rather than stalling.

---

## 2. Releases
No new releases were published in the last 7 days. The active stabilization milestone is v0.8.5, tracked in [Issue #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459).

---

## 3. Project Progress
No pull requests were merged or closed in the last 7 days; all 50 updated PRs remain in open status. Work that advanced via issue-level progress and active development includes:
- 9 issues closed, primarily configuration fixes, small tooling bugs, and CI improvements
- RFC process refinements moved forward with accepted proposals for simplified voting and clearer PR review rules
- Core runtime work on cost tracking, delegated sub-loops, and ACP session durability is actively in progress
- Security features including OIDC verification, RPC principal authentication, and shell permission policy implementation are under review

---

## 4. Community Hot Topics
Ranked by comment count and engagement:
1. **[Issue #8692: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** (15 comments) — This tracker for maintainer-level decision-making on RFCs, design issues, and release policy is the most active thread. It signals growing process maturity as the project scales its contributor base and needs a formalized queue for high-stakes architectural decisions.
2. **[Issue #10549: RFC: Simplify RFC voting by removing mandatory discussion windows](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)** (10 comments) — A proposal to eliminate fixed 48/72-hour mandatory discussion windows for RFCs and make REVISE actions stop the current vote snapshot. The underlying need is to reduce unnecessary process friction and speed up RFC throughput without sacrificing review quality.
3. **[Issue #10366: RFC: Clarify PR review evidence, freshness warnings, and author-action boundaries](https://github.com/zeroclaw-labs/zeroclaw/issues/10366)** (7 comments) — An RFC to formalize PR review standards, including an expedited merge lane for clean PRs with existing approvals. This addresses contributor frustration with ambiguous review requirements and inconsistent merge timing.
4. **[Issue #10734: RpcDispatcher::process_line runs within 2% of its 2 MB stack guard](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)** (7 comments) — A Windows-specific stack overflow bug surfaced by CI, drawing attention to cross-platform runtime stability gaps.

---

## 5. Bugs & Stability
Ranked by severity (S0 > S1 > S2 > S3):
### Critical / High Severity (S1, p0/p1)
1. **[Issue #10066: SOP engine promotes and runs later steps before recording a step's output-schema rejection](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)** (S1, p0, open, in-progress) — A workflow-blocking bug where failed step output validation does not stop downstream steps from executing, creating incorrect runtime behavior. No fix PR linked yet.
2. **[Issue #10603: OpenCode providers never send x-opencode-session, breaking Go models and risking account flags](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)** (S1, p1, open, in-progress, 3 👍) — Breaks OpenCode Go model compatibility and risks user account flags; the only bug with positive user reaction this week. No fix PR linked yet.
3. **[Issue #10785: zerocode: notification lag cancels every running turn](https://github.com/zeroclaw-labs/zeroclaw/issues/10785)** (p1, high risk, open, in-progress) — A critical regression where notification resync incorrectly cancels all active running turns, reported during real multi-session usage. No fix PR linked yet.
4. **[Issue #10788: Failed Code/ACP turn discards the accepted prompt and completed tool exchanges from durable history](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)** (S2, p1, high risk, open, in-progress) — Data loss bug where failed turns lose all partial progress, degrading user experience and debuggability. No fix PR linked yet.
5. **[Issue #10635: Runtime profile cost limit does not reflect effective global daily budget](https://github.com/zeroclaw-labs/zeroclaw/issues/10635)** (S2, p1, open, accepted) — Misleading cost limit reporting where profiles show unbounded cost but actual turns are blocked by a hidden $10/day global cap. No fix PR linked yet.
6. **[Issue #10734: RpcDispatcher::process_line stack overflow on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)** (S2, p1, open, in-progress) — Windows-specific stack overflow in core RPC dispatch, surfaced by advisory CI. No fix PR linked yet.

### Medium Severity (S2, p2)
Notable items include config validation gaps ([#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320)), provider retry logic flaws ([#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779), [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787)), streaming fallback failures ([#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736)), and ACP session message count inconsistencies ([#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802)).

### Closed Bugs This Week
- [#10721: knowledge.db_path tilde expansion global replace bug](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) (closed 2026-09-13)
- [#10324: cron manual trigger cross-agent rename race condition](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) (closed 2026-09-13)
- [#10533: model_routing_config rejects valid custom provider slots](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) (closed 2026-09-13)
- [#10580: Docs link gate only checks added links, not repo-wide](https://github.com/zeroclaw-labs/zeroclaw/issues/10580) (closed 2026-09-13)
- [#10534: Bounded delegates silently strip delegate tool](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) (closed 2026-09-12)
- [#10837: RPC config/set persists invalid values](https://github.com/zeroclaw-labs/zeroclaw/issues/10837) (closed 2026-09-13, duplicate of #10320)

---

## 6. Feature Requests & Roadmap Signals
### High-Likelihood v0.8.5 / Near-Term Features
These are actively in development, accepted, or tied to the v0.8.5 stabilization tracker:
1. **[Issue #10822: config/set-many — atomic batch config mutation over RPC](https://github.com/zeroclaw-labs/zeroclaw/issues/10822)** — Atomic batch config writes to avoid partial state from multiple RPC calls; in progress, high priority for configuration reliability.
2. **[PR #10840: Generate llms.txt and llms-full.txt in mdBook build](https://github.com/zeroclaw-labs/zeroclaw/pull/10840)** — Docs infrastructure improvement for LLM-friendly documentation indexing; small scope, likely to merge soon.
3. **[Issue #10826: Explicit ZeroCode session root selection and preserved resumed roots](https://github.com/zeroclaw-labs/zeroclaw/issues/10826)** — User-facing improvement for Code/ACP session directory handling; accepted follow-up.
4. **[PR #10255: OIDC token-verification provider](https://github.com/zeroclaw-labs/zeroclaw/pull/10255)** and **[PR #10259: Authenticated RPC principals](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)** — Core security features from the staged #8289 roadmap; actively under review by distinguished contributors.

### Medium-Term Roadmap Signals
1. **[Issue #10360: Opt-in household edge mesh with pull workers and signed receipts](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)** — A major architectural proposal for distributing workloads across user-owned devices; early-stage RFC, high community interest, likely for post-v0.8.5.
2. **[PR #9809: Support multiple models per provider profile](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)** — Highly requested provider configuration improvement; long-running PR, requires additional review.
3. **[PR #8965: Declarative skill auto-activation](https://github.com/zeroclaw-labs/zeroclaw/pull/8965)** — Skill system enhancement; recently restacked, moving toward review.

---

## 7. User Feedback Summary
### Pain Points
- **Provider reliability**: Multiple user-reported bugs around OpenCode compatibility ([#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)), quota exhaustion retry behavior ([#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779)), and streaming fallback failures ([#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736)) indicate consistent friction with third-party provider integrations.
- **Configuration opacity**: Users report misleading cost limit displays ([#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635)), silent validation failures ([#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320)), and confusing provider slot rules ([#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533)) — pointing to a need for better configuration guardrails and feedback.
- **ZeroCode/ACP stability**: Cancelled turns from notification lag ([#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785)), lost progress on failed turns ([#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)), and inconsistent session metrics ([#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802)) are real-world usability issues for power users.
- **Cross-platform gaps**: Windows-specific stack overflows ([#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)) and test failures ([#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793)) suggest secondary platform quality is lagging.

### Positive Signals
- The [OpenCode session header bug](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) received 3 👍 reactions, indicating active user validation of the report and demand for a fix.
- High engagement with process improvement RFCs suggests contributors value investment in development workflow quality.

### Use Cases
- Multi-device edge computing workload distribution (household mesh proposal [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360))
- Multi-session, large-context ACP/Code workloads (surfaced in notification lag bug [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785))
- Remote agent pairing via MCP (docs PR [#10283](https://github.com/zeroclaw-labs/zeroclaw/pull/10283))

---

## 8. Backlog Watch
These high-importance, long-running items have not seen recent resolution and require maintainer attention:
1. **[PR #9109: Native Hailo-Ollama support](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)** — Open since 2026-07-17, marked `status:blocked` and `do-not-merge`. Adds support for Hailo AI accelerators via Ollama; blocked on upstream compatibility work, at risk of becoming stale.
2. **[Issue #9381: crates.io publishing, packaging, and cargo-install follow-ups](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)** — Open since 2026-07-26, deferred from v0.8.4. Includes user-impacting Windows symlink issues for crate publishing; no visible progress in recent weeks despite high user impact.
3. **[PR #9584: Egress grant ceremony for plugin install and list](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)** — Open since 2026-07-31, large security feature for plugin permissions. Stalled in review despite being a core security roadmap item.
4. **[PR #9535: Context compaction anchored to model window ratio](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** — Open since 2026-07-29, marked `needs-author-action`. Improves context window management for diverse model sizes; at risk of bitrot due to inactivity.
5. **[Issue #8691: ADR inventory and accepted RFC decision records](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)** — Open since 2026-07-04, low in activity but critical for architectural documentation and institutional knowledge as the project scales.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*