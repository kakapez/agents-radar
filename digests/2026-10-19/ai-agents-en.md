# OpenClaw Ecosystem Weekly Digest 2026-10-19

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-19 01:00 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Weekly Project Digest
**Date: 2026-10-19 | Reporting Period: 2026-10-12 to 2026-10-19**

---

## 1. Last 7 Days' Overview
OpenClaw maintained high development velocity this week, with 500 updated issues (436 open/active, 64 closed) and 500 updated pull requests (253 open, 247 merged/closed) alongside 9 new releases. The team prioritized Gateway reliability and update robustness, shipping multiple stable and beta builds focused on reducing memory pressure, fixing update failures across platforms, and improving multi-agent orchestration stability. Community engagement remained strong, with active discussion around critical performance regressions, security hardening for MCP and tool permissions, and feature requests for better context control and observability. Overall project health is good, with clear focus on resolving high-severity stability issues while iterating on performance and developer experience.

---

## 2. Releases
OpenClaw published 9 new versions this week, spanning stable, beta, and extended-stable channels:

### Stable Releases
- **v2026.10.5** ([release page](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5)): Core update to `openclaw update` reliability. The command now completes successfully across device types, filesystems, pnpm 12, Windows elevation, and macOS login shells. It also settles stale handoff leases and package-activation journals instead of stranding installs, and recovers gracefully from busy or unhealthy Gateway states.
- **v2026.10.4** ([release page](https://github.com/openclaw/openclaw/releases/tag/v2026.10.4)): Fixes Gateway survival after system sleep or clock jumps (previously caused false stale heartbeat detection and unnecessary restarts, #170790). Also resolves Gateway shutdown/restart hangs. Contributors: @AnvinaLI, @sgh6688, @waynegault, @RomneyDa.
- **v2026.10.3** ([release notes](https://docs.openclaw.ai/releases/2026.10.3)): Includes 90 commits, 79 PRs, and 99 contributors — full changelog available in official docs.
- **v2026.10.2** ([release page](https://github.com/openclaw/openclaw/releases/tag/v2026.10.2)): Fixes first-run upgrades from stable 2026.10.1 to complete cleanly, eliminates false errors after successful in-place updates, and resolves stalled/rolled-back updates on Windows, cloned filesystems, and private-Node paths (#168849, #169031).
- **v2026.9.33** ([release page](https://github.com/openclaw/openclaw/releases/tag/v2026.9.33)): Gateway-only `extended-stable` (LTS equivalent) release with critical security patches, reliability/performance fixes, and new model support, backported from the September 2026 codebase.

### Beta Releases
- **v2026.10.10-beta.1** ([release page](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.1)): Major Gateway performance upgrade. Chat turns, session lists, startup, and idle Gateway operations reduce SQLite and main-thread work by moving database tasks to worker threads, improving responsiveness for busy hosts and large agent fleets (#167965, #168002, #168093).
- **v2026.10.5-beta.4** ([release page](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.4)): Further update reliability improvements: fixes macOS update timeouts on aliased temp directories, systemd user installs reclaim abandoned runtimes, pacman/FreeBSD installs defer to native package managers, and snapshot failures are detected early to avoid partial updates.
- **v2026.10.5-beta.3** ([release page](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3)): Ensures updates leave the Gateway running: pnpm 12 installs preserve the Gateway service and `openclaw` launcher on durable paths, Windows updates support qualified Scheduled Task accounts and verified drivers, and macOS accepts protected Bun service configurations.
- **v2026.10.5-beta.2** ([release page](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.2)): Adds update recovery logic for stale handoff leases, completed receipts, and legacy 2026.9.8 recovery records (prevents `update-recovery-pending` stalls), preserves service heap limits and webhook listeners during updates, and fixes Windows short-path update failures.

### Breaking Changes & Migration Notes
No explicit breaking changes are documented in this week's releases. Users on extended-stable v2026.9.x can upgrade to v2026.10.x stable without manual migration, though beta channel users should note that v2026.10.10-beta.1 includes database worker thread changes that may require reindexing of large session datasets on first startup.

---

## 3. Project Progress
Of the 247 merged/closed PRs this week, key advances span performance, bug fixes, and codebase health:

### Performance & Gateway Optimization
- **MCP SDK v2 migration complete** ([PR #175403](https://github.com/openclaw/openclaw/pull/175403)): Session and node MCP clients moved to split SDK v2 packages, completing internal client, transport, validator, and Gateway adapter migration.
- **State lease heartbeat simplification** ([PR #175805](https://github.com/openclaw/openclaw/pull/175805)): Reduces redundant durable lease authority logic, synchronous ACKs, and watchdog overhead in the heartbeat liveness protocol.
- **Control UI performance improvements**: Multiple PRs ([#176696](https://github.com/openclaw/openclaw/pull/176696), [#176702](https://github.com/openclaw/openclaw/pull/176702)) reduce cold-load JavaScript bundle size by deferring inactive chat view loading and realtime Talk session initialization until needed, resolving performance budget breaches.

### Bug Fixes
- **Streamed reply CPU regression fixed** ([PR #175448](https://github.com/openclaw/openclaw/pull/175448)): Resolves quadratic CPU usage from leaked model control tokens (e.g., `<|assistant|>`) that caused full reply re-scans on every delta (up to 23.4s delay for 65KB replies). Fixes #175444.
- **Discord coauthor attribution fix** ([PR #176513](https://github.com/openclaw/openclaw/pull/176513)): Prevents unrelated users from being credited on shared main-channel Discord tasks, and ensures requesters are correctly attributed.
- **Telegram callback failure fix** ([PR #176679](https://github.com/openclaw/openclaw/pull/176679)): Stops terminal callback failures (expired queries, lost authority) from blocking all chat updates. Related to #169176.
- **GMI GPT-5.6 tool call fix** ([PR #176709](https://github.com/openclaw/openclaw/pull/176709)): Resolves 400 errors for tool use on `gmi/openai/gpt-5.6-sol` models caused by invalid `reasoning_effort` parameters.

### Codebase Health
- **Low-value test cleanup batches** ([#176648](https://github.com/openclaw/openclaw/pull/176648), [#176667](https://github.com/openclaw/openclaw/pull/176667), [#176703](https://github.com/openclaw/openclaw/pull/176703)): Consolidate repeated test fixtures and remove redundant cases across Gateway, agents, UI, and plugins while retaining core contract checks, reducing maintenance burden.

---

## 4. Community Hot Topics
The most actively discussed issues this week center on Gateway stability, multi-agent reliability, and security/permission controls:

1. **Critical Gateway Memory Leak** ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588), 40 comments, P0): The highest-engagement issue reports RSS growing from 350MB to 15.5GB over 2-3 days, causing OOM crashes and repeated restart cycles. The community is sharing reproduction data across different workloads and platforms, with maintainers prioritizing root cause analysis.
   
2. **Silent Subagent Completion Loss** ([Issue #44925](https://github.com/openclaw/openclaw/issues/44925), 31 comments, P1): Users report multiple failure modes where subagent task results are silently dropped without retries, notifications, or auto-restarts on timeout — particularly impactful for Telegram bot deployments. Discussion focuses on orchestration reliability and failure detection.

3. **Gateway Event Loop Blocking at Scale** ([Issue #119720](https://github.com/openclaw/openclaw/issues/119720), 25 comments, P1): Synchronous agent persistence and transcript maintenance block the event loop for large deployments. Partial fixes have landed, but the community is pushing for full async rewrite of persistence paths.

4. **Write Tool Append Mode Gap** ([Issue #40001](https://github.com/openclaw/openclaw/issues/40001), 16 comments, P0): Isolated cron sessions overwrite shared workspace files (e.g., daily memory logs) because the `write` tool lacks append mode, causing silent data loss. Users are advocating for native append support as a high-priority data integrity fix.

5. **MCP SecretRef Support** ([Issue #76493](https://github.com/openclaw/openclaw/issues/76493), 11 comments, 4 👍): Operators request support for SecretRef objects in `mcp.servers[].env` and `headers` schemas to follow security best practices for secret indirection, instead of requiring plaintext values. This is the top-upvoted feature discussion this week.

---

## 5. Bugs & Stability
High-severity bugs reported or active this week, ranked by priority:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| P0 | [#91588 Gateway Memory Leak](https://github.com/openclaw/openclaw/issues/91588) | RSS grows to 15.5GB over days, causing OOM crashes and restart loops | No fix PR yet; under active maintainer investigation |
| P0 | [#40001 Write Tool Missing Append Mode](https://github.com/openclaw/openclaw/issues/40001) | Cron sessions overwrite shared files, causing silent data loss | No fix PR yet; needs product decision on implementation |
| P0 | [#126821 SQLite Corruption on WSL2](https://github.com/openclaw/openclaw/issues/126821) | Pristine rebuilt DBs develop corruption within 15-24h, leading to "paralyzed gateway" mode | No fix PR yet; regression from 2026.8.1-beta.2 |
| P0 | [#137085 macOS App Device Identity Stuck](https://github.com/openclaw/openclaw/issues/137085) | Post-upgrade (7.1→8.2) device identity stuck in "native-importing", native gateway handshake times out | No fix PR yet; release-blocking for macOS |
| P0 | [#137177 WeCom Plugin Install Failure](https://github.com/openclaw/openclaw/issues/137177) | Built-in `@wecom/wecom-openclaw-plugin@2026.7.2` cannot be installed successfully | No fix PR yet |
| P1 | [#44925 Silent Subagent Completion Loss](https://github.com/openclaw/openclaw/issues/44925) | Subagent results dropped without retry or notification | No fix PR yet; needs product decision on retry policies |
| P1 | [#119720 Event Loop Blocking at Scale](https://github.com/openclaw/openclaw/issues/119720) | Synchronous persistence blocks Gateway event loop for large fleets | Partial fixes landed (#140231, #138984); full rewrite in progress |
| P1 | [#157989 Plugin Source Capture SSD Wear](https://github.com/openclaw/openclaw/issues/157989) | 1.1-1.4GB rewritten per CLI command, 6.5GB per Gateway start from redundant plugin file copying | No fix PR yet; regression from 2026.9.5 |
| P1 | [#148707 Reply Loss on Displaced Turns](https://github.com/openclaw/openclaw/issues/148707) | Second run on same session displaces in-flight turn, losing reply with "no active tool authority snapshot" error | No fix PR yet; 2026.9.4 regression |
| P1 | [#132303 Tool Deny Not Enforced for claude-cli](https://github.com/openclaw/openclaw/issues/132303) | `agents.list[].tools.deny` config is ignored for claude-cli backend, leaving dangerous tools enabled | No fix PR yet; security boundary issue |

Notable recently fixed bugs include the SSH spawn hang regression ([#136183](https://github.com/openclaw/openclaw/issues/136183), closed) and Android Talk archived session reuse ([#175027](https://github.com/openclaw/openclaw/issues/175027), closed).

---

## 6. Feature Requests & Roadmap Signals
Top user-requested features this week, with likelihood of near-term inclusion:

1. **Tiered Bootstrap File Loading** ([Issue #22438](https://github.com/openclaw/openclaw/issues/22438), 19 comments): Progressive context control to avoid loading all workspace bootstrap files into every session (sub-agents, cron jobs), reducing token waste. A linked PR is open, making this a strong candidate for the 2026.10.x or 2026.11 beta cycle.
2. **MCP SecretRef Support** ([Issue #76493](https://github.com/openclaw/openclaw/issues/76493), 4 👍): Security hardening for MCP server configuration. Given strong security rationale and community support, this is likely to be prioritized for an upcoming minor release.
3. **Per-Model Usage Logging** ([Issue #13219](https://github.com/openclaw/openclaw/issues/13219), 8 comments): Native cost tracking and model-mix optimization. A linked PR is open, indicating active work — expected to land in a 2026.11 release.
4. **Dynamic Model Discovery for OpenRouter** ([Issue #10687](https://github.com/openclaw/openclaw/issues/10687), 4 👍): Fully dynamic model catalog updates for fast-moving providers. This is a long-discussed enhancement with growing demand as model catalogs expand; likely on the 6-month roadmap.
5. **Agent-Triggered Context Compaction** ([Issue #6757](https://github.com/openclaw/openclaw/issues/6757), 2 👍): Self-compact tool for agents to manage their own context windows. This is a popular quality-of-life request with clear use cases, expected to be considered for the next feature release cycle.
6. **Fallback Model Chain for Compaction/LCM** ([Issue #56781](https://github.com/openclaw/openclaw/issues/56781), 7 comments): Extends the existing chat fallback chain to compaction and summary models, preventing unbounded session growth if the primary compaction model fails. Aligns with existing reliability work, so it may be picked up soon.

---

## 7. User Feedback Summary
### Pain Points
- **Reliability gaps for multi-agent deployments**: Users running agent fleets report consistent issues with silent message loss, concurrent config overwrite risks ([#43367](https://github.com/openclaw/openclaw/issues/43367)), and subagent result drops, making production orchestration unreliable.
- **Update instability on edge platforms**: macOS, Windows, and FreeBSD users have faced repeated update stalls, timeouts, and rollbacks — though recent v2026.10.x releases have addressed many of these, residual issues persist for aliased directories and protected system configurations.
- **Data loss risks from missing tool features**: The lack of append mode for the write tool ([#40001](https://github.com/openclaw/openclaw/issues/40001)) is a major pain point for users running automated cron jobs that write to shared logs.
- **Performance degradation over time**: Memory leaks ([#91588](https://github.com/openclaw/openclaw/issues/91588)), SQLite corruption ([#126821](https://github.com/openclaw/openclaw/issues

---

## Cross-Ecosystem Comparison

# Cross-Project Personal AI Assistant/Agent Open-Source Ecosystem Report
*Report Date: 2026-10-19 | Source: Weekly Community Digests for 5 Core Projects*

---

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is in a phase of rapid maturation, with leading projects balancing foundational architectural overhauls, reliability hardening for production multi-agent deployments, and expansion of third-party extension and channel integration ecosystems. Core projects span from full-stack, high-velocity gateway-centric platforms (OpenClaw, QwenPaw) to post-migration stabilization efforts (Hermes Agent), security-first plugin runtime systems (ZeroClaw), and community-driven extension-focused implementations (IronClaw). Across the landscape, the highest-priority user needs center on gateway stability, multi-agent orchestration reliability, and predictable security boundaries for tool and plugin execution. Growth is being driven by demand for self-hosted model support, omnichannel connectivity, and low-cost, customizable alternatives to closed-source agent platforms.

---

## 2. Activity Comparison
| Project | Updated Issues (Open/Closed) | Updated PRs (Open/Merged) | Releases This Week | Project Health Score (1–10) |
|---------|-------------------------------|---------------------------|--------------------|------------------------------|
| OpenClaw | 500 (436 open / 64 closed) | 500 (253 open / 247 merged) | 9 (stable, beta, extended-stable) | 9.0 |
| Hermes Agent | 50 (30 open / 20 closed) | 50 (46 open / 4 merged) | 4 (major milestone, patches, hotfixes) | 7.2 |
| IronClaw | 4 (3 open / 1 closed) | 10 (8 open / 2 closed) | 0 | 6.5 |
| QwenPaw | 50 (40 open / 10 closed) | 50 (40 open / 10 merged) | 3 (stable + 2 beta) | 8.3 |
| ZeroClaw | 50 (44 open / 6 closed) | 50 (42 open / 8 merged) | 1 (minor release) | 8.0 |

*Health score calculated from issue/PR throughput, release cadence, severity of open critical bugs, and maintainer responsiveness.*

---

## 3. OpenClaw's Position
### Advantages vs. Peers
OpenClaw is the clear velocity and maturity leader in the cohort, with 10x the issue and PR throughput of the next-largest projects, a 49.4% PR merge rate (the highest of all projects), and a multi-channel release pipeline covering stable, beta, and extended-stable (LTS) channels for enterprise users. It has the most mature multi-agent orchestration stack, the largest active contributor base (evidenced by 99 contributors in a single stable release), and the broadest platform support (Windows, macOS, Linux, BSD, mobile companion apps).

### Technical Approach Differences
Unlike peers focused on UI-first or extension-first architectures, OpenClaw’s development is centered on gateway reliability as its core differentiator: this week’s work prioritized update robustness across edge filesystems and platforms, memory pressure reduction, SQLite performance offloading to worker threads, and MCP SDK v2 migration for standardized agent transport. Its security roadmap is driven by operator-focused hardening (MCP SecretRef support, tool permission boundaries) rather than the sandboxed plugin runtime model used by ZeroClaw and IronClaw.

### Community Size Comparison
OpenClaw’s community is an order of magnitude larger than the next-largest projects: its top P0 memory leak issue has 40 comments, compared to 12 for Hermes Agent’s top desktop bug and 5 for ZeroClaw’s leading community discussion. It also has the most diverse contributor base, with maintainer-led workstreams alongside active community feature PRs and bug reports across enterprise, hobbyist, and self-hosted user segments.

---

## 4. Shared Technical Focus Areas
Six cross-cutting priorities emerged across 3+ projects this week:
1. **Gateway stability & performance**  
   *Projects: OpenClaw, Hermes Agent, ZeroClaw*  
   All three gateway-centric projects are investing in reducing event loop blocking, fixing state corruption, and improving process lifecycle reliability. OpenClaw is optimizing SQLite workloads and heartbeat logic; Hermes Agent is stabilizing its newly merged unified gateway runtime; ZeroClaw is advancing its Phase 3 gateway separation roadmap for v0.9.0.

2. **MCP (Model Context Protocol) ecosystem expansion**  
   *Projects: OpenClaw, IronClaw, QwenPaw, ZeroClaw*  
   MCP has emerged as the de facto standard for agent tool/extension integration. OpenClaw completed its internal MCP SDK v2 migration; IronClaw is evaluating third-party hosted-MCP companion extensions; QwenPaw is debugging DashScope MCP store driver compatibility; ZeroClaw ships a WASM-based MCP plugin host with verified registry packages.

3. **Multi-agent orchestration reliability**  
   *Projects: OpenClaw, QwenPaw*  
   Both projects report high-severity silent failure modes for multi-agent workflows: OpenClaw’s P1 issue tracks subagent completion loss, while QwenPaw’s high-severity bug covers inter-agent call cancellation with no logged cause. Both communities are prioritizing failure detection, retry policies, and orchestration observability.

4. **Self-hosted / local model compatibility**  
   *Projects: Hermes Agent, IronClaw, QwenPaw, ZeroClaw*  
   Four of five projects have active work or bug fixes for local/self-hosted inference providers. ZeroClaw is fixing llama.cpp URI resolution for remote endpoints; QwenPaw resolved OpenCode API compatibility and supports offline deployments with local models; Hermes Agent is aligning provider parameter support for DeepSeek and OpenRouter; IronClaw tracks benchmark quality for open models like DeepSeek-V4-Flash.

5. **Security boundary hardening for tools & plugins**  
   *Projects: OpenClaw, ZeroClaw*  
   Both projects have high-priority security workstreams for tool execution guardrails. OpenClaw is addressing MCP secret management and tool deny-list enforcement gaps; ZeroClaw is fixing allowed-command bypass vulnerabilities and adding subprocess memory/execution limits for plugin and skill runtimes.

6. **Cross-platform update & installation reliability**  
   *Projects: OpenClaw, Hermes Agent, QwenPaw*  
   Three projects report user pain points around platform-specific update/install failures: OpenClaw shipped 5 stable/beta releases focused on cross-platform update robustness; Hermes Agent fixed Microsoft Store app build issues and macOS launchd gateway downtime; QwenPaw fixed Windows stale PID probe errors and ZIP filename encoding bugs.

---

## 5. Differentiation Analysis
| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **Core Focus** | Enterprise-grade gateway reliability, multi-agent orchestration at scale | Unified cross-surface (CLI/TUI/desktop/cloud) session consistency | Declarative extension ecosystem, third-party companion integration | Console UX, omnichannel enterprise workflows, local model support | Secure WASM plugin runtime, zero-trust agent execution |
| **Target Users** | Enterprise operators, large agent fleet deployments, power users | Desktop/consumer AI assistant users, cross-platform hobbyists | Extension developers, personal messaging agent users | Chinese market enterprise teams, self-hosted workflow builders | Security-conscious operators, plugin ecosystem administrators |
| **Technical Architecture** | Monolithic gateway with SQLite persistence, MCP-based agent transport | Unified gateway runtime post-rewrite, multi-client shared session state | Rust core + Reborn declarative extension framework | Hub/worker distributed mode, channel-first integration layer | Modular runtime + WASM sandboxed plugin host, verified registry |
| **Key Differentiator** | Highest maturity for production multi-agent deployments, broadest platform support | Unified session model across all client surfaces | Minimal core, community-driven extension growth | Best-in-class console UX, deep Chinese enterprise channel integrations | Strongest security boundaries for third-party plugin execution |

---

## 6. Community Momentum & Maturity
The projects fall into three distinct maturity and velocity tiers:
### Tier 1: High-Velocity, Production-Mature
- **OpenClaw**: The most mature project in the cohort, with sustained high throughput, a mature release pipeline, and work focused on incremental reliability and performance improvements rather than architectural overhauls. It is the only project with an LTS-style extended-stable release channel for enterprise users.
- **QwenPaw**: Fast-growing, with balanced investment in user-facing features, channel integrations, and bug fixes. Its strong contributor base and clear forward momentum position it as a rapidly maturing alternative for enterprise and self-hosted use cases.

### Tier 2: Stabilizing Post-Architectural Change
- **Hermes Agent**: In a stabilization phase following its v0.22.0 "Threshold Release" unified gateway rewrite. Most current work is focused on resolving migration regressions, with only 4 merged PRs this week (the lowest merge rate of active projects). It has a large contributor base but near-term velocity is constrained by bug-fix prioritization.
- **ZeroClaw**: Steady, planned iteration with a clear roadmap (v0.8.x plugin hardening, v0.9.0 gateway separation). It has a balanced mix of feature work and security hardening, with consistent release cadence and a growing contributor ecosystem.

### Tier 3: Maintenance-Mode, Community-Driven
- **IronClaw**: Low activity, with no releases and no merged functional PRs this week. Work is limited to automated dependency updates and a small number of community-contributed feature proposals. It has the smallest active contributor base and longest backlog review times.

---

## 7. Trend Signals
The following industry trends are visible across the ecosystem, with actionable value for AI agent developers:
1. **Gateway architecture is the new competitive battleground**  
   All leading projects are converging on a centralized gateway model as the core of agent systems, with differentiation in reliability, performance at scale, and cross-surface consistency. Developers building agent tools should prioritize MCP compatibility and gateway-native design to align with ecosystem direction.

2. **MCP is becoming the universal extension standard**  
   Four of five projects are actively investing in MCP support for tools, plugins, and third-party integrations, replacing project-specific extension APIs. For tool and service providers, building MCP-compatible interfaces now offers the broadest ecosystem reach with minimal integration overhead.

3. **Multi-agent reliability is the biggest barrier to production adoption**  
   Silent data loss, dropped subagent results, and unobserved orchestration failures are the highest-severity pain points across mature projects. Developers building multi-agent systems should prioritize failure observability, idempotent task execution, and explicit retry policies as foundational features, not afterthoughts.

4. **Self-hosted and open model support is table stakes**  
   Demand for local model compatibility, offline deployment, and open provider support is growing across all user segments, from hobbyists to enterprise teams. Agent platforms that treat open model support as a first-class capability (rather than a secondary integration) are capturing the fastest-growing user segments.

5. **Security hardening is shifting left into runtime design**  
   Leading projects are moving beyond basic tool allow/deny lists to runtime-level security: sandboxed WASM plugins, secret reference indirection, and subprocess resource limits. Developers building agent platforms should design security boundaries into the core runtime architecture, as bolt-on security controls create unresolvable bypass risks.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Weekly Project Digest
*Week of 2026-10-19 | Repository: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)*

---

## 1. Last 7 Days' Overview
Hermes Agent saw high-intensity development activity this week, driven by post-merge stabilization of the unified gateway runtime (`feat/unified-gateway-runtime`). The project recorded 50 updated issues (30 open, 20 closed) and 50 updated PRs (46 open, 4 merged/closed), alongside 4 new releases ranging from a major milestone to hotfix patches. Overall project health is in a stabilization phase: the core v0.22.0 "Threshold Release" introduced large-scale architectural changes, and most current work addresses regressions and edge cases from that migration. Community engagement is focused on desktop client reliability, cross-platform compatibility, and provider-specific fixes.

---

## 2. Releases
This week saw 4 new releases, spanning a major milestone, patch rollups, and hotfixes:

### v0.22.2 (October 15, 2026)
- **Type:** Hotfix release
- **Key changes:** Corrects a build error in v0.22.1, which was built from the wrong commit and shipped unreleased gateway work that caused the Microsoft Store app to get stuck on "Connecting." This release restores the intended v0.22.1 feature set.
- **Known issue:** Sessions that ran under the v0.22.1 gateway may experience residual state issues (release notes truncated in source data).
- [Release link](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.2)

### v0.22.1 (October 14, 2026)
- **Type:** Patch release (superseded by v0.22.2)
- **Key features:** Windows Store fixes, plugin updates, and default parameter support for Nemotron Super 3.5.
- [Release link](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.1)

### v0.22.0 — The Threshold Release (October 13, 2026)
- **Type:** Major milestone release
- **Scale of changes:** ~24,200 commits, ~6,080 merged PRs, ~15,600 files changed, ~2.04 million insertions, ~1.14 million deletions, ~7,180 issues closed, ~2,520 contributors since v0.21.0.
- **Core theme:** Unified gateway runtime architecture, centralizing session management across CLI, TUI, desktop, and cloud surfaces.
- [Release link](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.0)

### v0.21.7 (October 11, 2026)
- **Type:** Stable patch rollup
- **Key changes:** Rolls up ~204 PRs merged since v0.21.6 into a stable release for all platforms (macOS Apple Silicon, Windows, Microsoft Store/MSIX, installer, Docker, Hermes Cloud).
- [Release link](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7)

---

## 3. Project Progress
Only 4 PRs were merged/closed this week, consistent with the stabilization phase where most work is still in review for gateway-related fixes. Key advances from closed work and near-merge PRs:
1. **Unified gateway post-merge fixes (Package 10):** 41 findings across gateway process behavior, client lag, credentials/settings, desktop session lists, and messaging order were resolved in the tracked workstream for issue #140719, reducing critical regressions from the v0.22.0 launch.
   - [Issue #140719](https://github.com/NousResearch/hermes-agent/issues/140719)
2. **Session state and compression fixes:** Multiple high-impact session bugs were closed, including proactive tool-result pruning corrupting transcript state (#124102), compressed conversations only showing partial history on resume (#140449), and rewind operations targeting compacted messages emptying the live transcript (#140635).
3. **Platform-specific fixes:** Resolved issues include macOS worker reservation failures after clock corrections (#140580), launchd gateway downtime after runtime downgrades (#140418), and Docker MCP server drops during lazy platform installs (in progress via #136015).
4. **Provider compatibility:** DeepSeek V4 reasoning effort alignment (#140696) and OpenRouter `content: null` handling (#141322) are in late-stage review to expand supported model ecosystems.

---

## 4. Community Hot Topics
Ranked by comment count and engagement:
1. **#134889: Tracking: one gateway owns every local session — post-merge fixes**
   - 186 comments, updated 2026-10-19 | [Link](https://github.com/NousResearch/hermes-agent/issues/134889)
   - **Underlying need:** The unified gateway migration is the project's most impactful recent change, and users/contributors are heavily invested in resolving regressions that affect session ownership, cross-client consistency, and desktop app reliability. This is the central coordination issue for all post-v0.22.0 stabilization work.

2. **#127621: Desktop app: assistant response occasionally renders duplicated**
   - 12 comments, 8 👍, updated 2026-10-18 | [Link](https://github.com/NousResearch/hermes-agent/issues/127621)
   - **Underlying need:** Core chat experience reliability is a top user priority. Duplicated responses break trust in the desktop client and indicate streaming/rendering edge cases that affect daily usage for desktop users. A related report #132836 also tracks the same intermittent issue on macOS.

3. **#139161: Gateway fixes, package 3: Ink TUI and Desktop sessions, commands and live events**
   - 7 comments, 1 👍, updated 2026-10-19 | [Link](https://github.com/NousResearch/hermes-agent/issues/139161)
   - **Underlying need:** Users of both the TUI and desktop clients want parity and stability for core chat features (command execution, live event streaming) after the gateway rework. This workstream addresses 19 discrete bugs across both interfaces, with 12 already fixed on `main`.

---

## 5. Bugs & Stability
Ranked by severity (P0 highest, followed by P1, P2, P3):

### Critical (P0)
- **#134889: Unified gateway post-merge fix tracking**
  - Severity: P0 | [Link](https://github.com/NousResearch/hermes-agent/issues/134889)
  - Impact: Affects all local session surfaces (CLI, TUI, desktop) across Windows/macOS/Linux, with risks to session state, message delivery, and platform compatibility.
  - Fix status: Active work across multiple fix packages; 4 packages are partially or fully complete, with 14+ PRs in review for classic CLI fixes alone (#139158).

### High (P1)
- **#124102 (CLOSED): Proactive tool-result prune corrupts transcript and bloats state.db**
  - Severity: P1 | [Link](https://github.com/NousResearch/hermes-agent/issues/124102)
  - Impact: Rewrites entire transcripts on each prune commit, causing permanent state database bloat and transcript corruption on Windows.
  - Fix status: Closed as of this week.

### Medium (P2)
1. **#131375: Smart-approval guardian crashes on event-loop threads, escalating all flagged commands**
   - [Link](https://github.com/NousResearch/hermes-agent/issues/131375)
   - Impact: Breaks automated approval workflows for desktop/serve sessions, forcing manual user approval for every flagged command.
   - Fix status: No linked fix PR yet.
2. **#117869: 403 `server_error` responses treated as credential refusal instead of retriable errors**
   - [Link](https://github.com/NousResearch/hermes-agent/issues/117869)
   - Impact: Causes unnecessary credential failures for OpenAI-compatible relays with transient upstream errors.
   - Fix status: In discussion; no dedicated PR linked.
3. **#140890: Repeat Ctrl+C during TUI shutdown aborts session finalization**
   - [Link](https://github.com/NousResearch/hermes-agent/issues/140890)
   - Impact: Interrupted sessions fail to finalize properly, potentially losing state.
   - Fix status: Newly reported, no fix PR yet.
4. **#136015: Docker lazy platform install drops MCP SDK, making configured MCP servers disappear**
   - [Link](https://github.com/NousResearch/hermes-agent/issues/136015)
   - Impact: Breaks MCP tool functionality for Docker users after the first platform dependency install.
   - Fix status: Open, no fix PR yet.

---

## 6. Feature Requests & Roadmap Signals
User-requested features with active development or high likelihood of near-term inclusion:
1. **Temporary (incognito) chats (#139390)**
   - [PR Link](https://github.com/NousResearch/hermes-agent/pull/139390)
   - Status: In active development, supports Desktop, CLI, and TUI. Aligns with user demand for privacy-focused sessions that leave no persistent history. High chance of landing in the next minor release after gateway stabilization.
2. **Desktop subagent provider/model dropdowns (#141312)**
   - [PR Link](https://github.com/NousResearch/hermes-agent/pull/141312)
   - Status: Newly opened, salvaged from an earlier PR #129142. Improves UX for subagent configuration by replacing free-text inputs with dropdowns. Likely to ship in a coming desktop-focused patch.
3. **Brazilian Portuguese (pt-BR) docs localization (#68680)**
   - [Issue Link](https://github.com/NousResearch/hermes-agent/issues/68680)
   - Status: Open feature request with community contributor interest. The CLI already supports pt-BR locales, so docs localization is a natural next step for expanding the project's Portuguese-speaking user base.
4. **Korean desktop locale with profile language persistence (#40716)**
   - [PR Link](https://github.com/NousResearch/hermes-agent/pull/40716)
   - Status: Long-running feature PR, updated this week. Expands i18n support for Korean users and fixes language reset issues across profile switches.

---

## 7. User Feedback Summary
### Pain Points
- **Gateway migration regressions:** The majority of user reports this week stem from v0.22.0 architectural changes, including broken session resumes, missing worker session data (#140977), Desktop Bots tab only showing the default profile (#140417), and TTS not working on local sessions (#140398).
- **Desktop client reliability:** Intermittent duplicated responses (#127621, #132836) and session control timeouts on large sessions (#140667) are recurring sources of frustration for desktop users.
- **Cross-platform edge cases:** Linux users report uninstall failures leaving broken systemd units (#141305), TTS static on interrupt with PipeWire (#141320), and config `env:` references logging false warnings (#141265).

### Positive Signals
- Community contributors are actively submitting fixes for provider compatibility (e.g., OpenRouter, DeepSeek, Feishu) and platform-specific issues, indicating a healthy contributor ecosystem.
- Interest in new features like incognito chats and expanded i18n shows growing demand for broader use cases and regional adoption.

---

## 8. Backlog Watch
Long-standing important issues/PRs that require maintainer attention:
1. **#107878: Fix providers to fail closed on missing credentials instead of billing fallback**
   - Opened 2026-09-11, updated 2026-10-19 | [PR Link](https://github.com/NousResearch/hermes-agent/pull/107878)
   - Rationale: This security and billing-critical fix prevents accidental fallback to paid providers when credentials are missing, which could cause unexpected costs for users. It has been open for over 5 weeks across multiple provider ecosystems and needs prioritization.

2. **#106704: Feishu per-group rule hot-reload without gateway restart**
   - Opened 2026-09-09, updated 2026-10-19 | [PR Link](https://github.com/NousResearch/hermes-agent/pull/106704)
   - Rationale: A highly requested operational improvement for Feishu platform operators, reducing downtime for group onboarding changes. It has been open for over 6 weeks and needs maintainer review to unblock enterprise Feishu users.

3. **#124313: Fix uv isolation gaps from the PM migration**
   - Opened 2026-09-26, updated 2026-10-19 | [PR Link](https://github.com/NousResearch/hermes-agent/pull/124313)
   - Rationale: Addresses leftover compatibility issues from the package manager migration to uv, which can cause broken bootstraps, stale binary conflicts, and Windows installer issues. Critical for installation reliability across platforms.

4. **#68680: Add pt-BR locale for Docusaurus docs site**
   - Opened 2026-07-21, updated 2026-10-18 | [Issue Link](https://github.com/NousResearch/hermes-agent/issues/68680)
   - Rationale: A community-contributed localization request that has been open for 3 months with no maintainer response. Unblocking this would expand Portuguese-language documentation and grow the project's user base in Latin America.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Weekly Project Digest | 2026-10-19
Repository: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Last 7 Days' Overview
Over the 7-day period ending 2026-10-19, IronClaw saw moderate maintenance-focused activity, with 4 updated issues (3 open, 1 closed) and 10 updated pull requests (8 open, 2 closed), and no new releases. The vast majority of PR activity consists of automated dependency updates across Rust, GitHub Actions, and JavaScript codebases, indicating ongoing infrastructure upkeep. Functional development is concentrated on a new messaging extension and community-proposed extension ecosystem expansion, while issue tracking is split between benchmark failure taxonomy and user-reported bug resolution. Overall project health appears stable, with active maintenance cadence and incremental community-driven feature exploration.

---

## 2. Releases
No new releases were published in the last 7 days.

---

## 3. Project Progress
No PRs were merged in the last 7 days; 2 PRs were closed without merge, both superseded by newer dependency update batches:
- [PR #8132](https://github.com/nearai/ironclaw/pull/8132) [CLOSED]: `chore(deps): bump the tokio-ecosystem group across 1 directory with 4 updates` — Superseded by the newer tokio-ecosystem update batch in PR #8141.
- [PR #8134](https://github.com/nearai/ironclaw/pull/8134) [CLOSED]: `chore(deps): bump the everything-else group across 1 directory with 34 updates` — Superseded by the expanded everything-else update batch in PR #8142.

No new features or bug fixes were shipped to the codebase in the reporting period; all in-progress functional work remains in open PRs and proposals.

---

## 4. Community Hot Topics
*Ranked by comment and reaction volume (all items have 0 comments and 0 👍 reactions at time of reporting; selected by functional relevance to community use cases)*
1. **Issue #8136: Proposal: optional hosted-MCP Plazmi extension using declarative auth and egress**  
   [Link](https://github.com/nearai/ironclaw/issues/8136) | Author: cairn-agent
   - Analysis: This proposal signals community demand for expanding IronClaw's hosted-MCP extension ecosystem to third-party companions (Plazmi) without adding vendor-specific logic to the core host. The underlying need is for a stable, declarative extension seam that external services can integrate with independently, aligning with IronClaw's Reborn extension design philosophy.

2. **PR #8127: feat: add Sendblue iMessage and SMS extension**  
   [Link](https://github.com/nearai/ironclaw/pull/8127) | Author: lookevink
   - Analysis: This community-contributed feature addresses demand for native iMessage/SMS connectivity within IronClaw, leveraging existing host lifecycle and conversation paths. It reflects user interest in expanding the agent's omnichannel messaging capabilities while keeping API credentials under host custody for security.

3. **Issue #8025: Bug: unexpected behavior with special characters in input**  
   [Link](https://github.com/nearai/ironclaw/issues/8025) | Author: kapibarazoku0422-create
   - Analysis: The only closed issue in the period, it had 1 comment (the highest comment count among all updated issues), indicating focused troubleshooting between the reporter and maintainers. The bug ties to potential encoding regressions from prior releases, a core reliability concern for end users.

---

## 5. Bugs & Stability
*Ranked by severity*
1. **[MEDIUM] Issue #8025: Bug: unexpected behavior with special characters in input**  
   [Link](https://github.com/nearai/ironclaw/issues/8025) | Status: CLOSED (updated 2026-10-18)
   - Details: Special characters in input fields are either stripped or cause errors, suspected to be tied to encoding changes in the previous release. The issue was closed in the reporting period, indicating a resolution has been reached (no linked fix PR is listed in the provided data).
   
2. **[LOW] Benchmark quality regressions (Issues #8138, #8135)**  
   - [#8138 (2026-10-15 run)](https://github.com/nearai/ironclaw/issues/8138): 50 non-pass tasks in the officeqa suite, all attributed to genuine DeepSeek-V4-Flash model quality errors (no code defects identified).
   - [#8135 (2026-10-12 run)](https://github.com/nearai/ironclaw/issues/8135): 52 non-pass tasks in the officeqa suite, uniformly attributed to model quality rather than IronClaw code issues.
   - These are tracking issues for benchmark performance, not application stability bugs.

---

## 6. Feature Requests & Roadmap Signals
1. **Sendblue iMessage/SMS Extension (PR #8127)**  
   [Link](https://github.com/nearai/ironclaw/pull/8127)
   - Request: Bundled extension for direct iMessage/SMS functionality including phone pairing, authenticated webhooks, terminal replies, and stored DM targets.
   - Roadmap likelihood: Medium-High — the PR follows existing host lifecycle and security patterns (credentials in host custody, declarative configuration), aligning with IronClaw's extension model. It is the only active feature PR under development.

2. **Plazmi Hosted-MCP Companion Extension (Issue #8136)**  
   [Link](https://github.com/nearai/ironclaw/issues/8136)
   - Request: Optional third-party Plazmi companion extension using existing declarative hosted-MCP auth and egress interfaces, no core vendor logic required.
   - Roadmap likelihood: Medium — the proposal is compatible with IronClaw's Reborn extension guidance and would expand the ecosystem without core maintenance overhead. It is likely to be supported as a community-built optional extension rather than bundled core functionality.

---

## 7. User Feedback Summary
- **Pain point: Input encoding reliability** (Issue #8025): Users experienced broken or error-prone behavior when using special characters in inputs, a core interaction flow. The bug was resolved within ~6 weeks of reporting, indicating responsive triage for functional defects.
- **Use case: Messaging agent integration** (PR #8127): Community contributors are building extensions to turn IronClaw into an SMS/iMessage agent, demonstrating demand for personal AI assistant use cases tied to consumer communication channels.
- **Use case: Third-party companion integration** (Issue #8136): External service developers want to build on IronClaw's extension framework to integrate their own AI companions, showing perceived value in the project's declarative extension architecture as a platform.
- No explicit user satisfaction/dissatisfaction ratings (all issues have 0 👍 reactions) are available in the reporting dataset.

---

## 8. Backlog Watch
Items requiring maintainer attention due to age and functional importance:
1. **PR #7834: chore(deps): bump the wasm group across 1 directory with 4 updates**  
   [Link](https://github.com/nearai/ironclaw/pull/7834) | Opened: 2026-08-23 | Status: Open
   - Risk: This medium-risk, large-size Rust dependency update for the wasm ecosystem (wasmtime, wit-component, etc.) has been open for nearly 2 months. Unaddressed wasm dependency updates may accumulate security vulnerabilities and compatibility debt, especially for a project likely relying on WASM for extension sandboxing.

2. **PR #8127: feat: add Sendblue iMessage and SMS extension**  
   [Link](https://github.com/nearai/ironclaw/pull/8127) | Opened: 2026-10-06 | Status: Open
   - Risk: The only active community feature PR has been open for 13 days with no recorded comments. Lack of timely review may discourage external contributors from submitting functional enhancements in the future.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Weekly Project Digest (2026-10-13 to 2026-10-19)

---

## 1. Last 7 Days' Overview
QwenPaw maintained high development velocity this week, with 50 updated issues (40 open, 10 closed) and 50 updated pull requests (40 open, 10 merged/closed), indicating active community engagement and steady progress on both feature development and bug resolution. Three new releases were shipped, including a stable v2.2.2 and two beta builds, delivering console UX improvements, provider compatibility fixes, and infrastructure enhancements. The project saw contributions across core runtime, channel integrations, console frontend, and cross-platform clients, reflecting a broad and active contributor base. Overall project health is strong, with responsive maintenance and clear forward momentum on both user-facing features and internal stability.

---

## 2. Releases
Three new versions were released this week:

### v2.2.2 (Stable)
**Key changes:**
- **Console & Workspaces:** Added 6 theme palettes with custom color and corner radius controls, including live preview and saved preferences ([#7741](https://github.com/agentscope-ai/QwenPaw/pull/7741))
- Added authenticated multi-tab terminal inside Chat interface (release notes truncated)
- No breaking changes reported; this is a backward-compatible minor update.

### v2.2.2-beta.6
**Key fixes:**
- E2E test selectors aligned with current console UI ([#8247](https://github.com/agentscope-ai/QwenPaw/pull/8247))
- History support for external database paths and portable backups ([#8246](https://github.com/agentscope-ai/QwenPaw/pull/8246))
- Dependency version bumps (release notes truncated)

### v2.2.2-beta.5
**Key fixes:**
- Console: Preserve drafts when pasting long text ([#8119](https://github.com/agentscope-ai/QwenPaw/pull/8119), fixes [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948))
- Providers: Recognize newer GPT token limit parameters ([#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090))
- Console refactoring (release notes truncated)

---

## 3. Project Progress
Among the 10 merged/closed PRs this week, completed work includes:
- **Stale PID probe fix:** Fixed `SystemError` on Windows when `qwenpaw-creator` probes a stale process ID ([#8296](https://github.com/agentscope-ai/QwenPaw/pull/8296), closes [#8194](https://github.com/agentscope-ai/QwenPaw/issues/8194))
- **OpenCode API compatibility:** Implemented required `x-opencode-session` header support to resolve `MissingSessionID` errors (related to [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531), [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599))
- **Tavily API key configuration:** Added configuration surface for user-provided Tavily API keys in the built-in `web_search` tool (closes [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174))
- **Message navigation fix:** Resolved inaccurate directory positioning in console message navigation (closes [#8251](https://github.com/agentscope-ai/QwenPaw/issues/8251))
- **Documentation improvement:** Added Docker deployment instructions for Hub mode (closes [#8256](https://github.com/agentscope-ai/QwenPaw/issues/8256))
- **Default agent model fix:** Updated deprecated default model from `mimo-v2.5-free` to `mimo-v2.6-flash-free` (closes [#8218](https://github.com/agentscope-ai/QwenPaw/issues/8218))

---

## 4. Community Hot Topics
Ranked by comment count:

1. **[#8120: Frequent page load failures](https://github.com/agentscope-ai/QwenPaw/issues/8120)** (8 comments, closed)
   - Users reported widespread page load failures across multiple devices on v2.2.2b4, significantly impacting usability. The issue was resolved within a week.
   - Underlying need: Reliable, consistent console access without intermittent load errors.

2. **[#8126: Make skill-pool download a cancellable background job](https://github.com/agentscope-ai/QwenPaw/issues/8126)** (7 comments, open)
   - Follow-up to PR #8055; currently large skill downloads trigger 30s client timeouts and block the UI. Users request progress tracking and explicit cancel functionality.
   - Underlying need: Robust, user-friendly skill management for large skill packages.

3. **[#8278: DingTalk channel degrades long messages to plain text](https://github.com/agentscope-ai/QwenPaw/issues/8278)** (6 comments, open)
   - Messages over 3500 characters in DingTalk are silently downgraded to plain text, breaking Markdown and GFM table rendering — critical for data report use cases. The `split_text` sharding mechanism is not being reused.
   - Underlying need: Consistent rich message formatting across all channel integrations, regardless of message length.

4. **[#8171: Audio file delivery permanently wedges sessions with LM Studio](https://github.com/agentscope-ai/QwenPaw/issues/8171)** (5 comments, open)
   - LM Studio's 400 error for audio inputs is not recognized by fallback classifiers, causing `send_file_to_user` audio deliveries to permanently break sessions.
   - Underlying need: Robust error handling and graceful fallback for media capability mismatches across model providers.

---

## 5. Bugs & Stability
Ranked by severity:

### High Severity
1. **[#8278: DingTalk long message degradation](https://github.com/agentscope-ai/QwenPaw/issues/8278)** — Silent loss of formatting for long messages breaks core use case for enterprise users. No fix PR linked yet.
2. **[#8228: Chat history bloat from base64 tool outputs](https://github.com/agentscope-ai/QwenPaw/issues/8228)** — File/screenshot tool outputs stored as base64 make long chats exceed 10MB, reliably hitting 30s console timeouts. No fix PR linked yet.
3. **[#8252: Inter-agent calls silently cancelled](https://github.com/agentscope-ai/QwenPaw/issues/8252)** — Multi-agent orchestration sessions experience paired `CancelledError` events with no recorded cause, resulting in zero output. No fix PR linked yet.
4. **[#8171: Audio file session wedging](https://github.com/agentscope-ai/QwenPaw/issues/8171)** — Session-breaking bug for audio workflows with LM Studio. Partially addressed by open PR [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654).

### Medium Severity
5. **[#8270: Windows ZIP filename garbling](https://github.com/agentscope-ai/QwenPaw/issues/8270)** — Chinese filenames in Windows ZIP archives are mojibake after extraction. Fix PR: [#8301](https://github.com/agentscope-ai/QwenPaw/pull/8301).
6. **[#8313: QQ group messages silently dropped](https://github.com/agentscope-ai/QwenPaw/issues/8313)** — QQ official bot group messages are not dispatched because event specs only match `GROUP_AT_MESSAGE_CREATE`. No fix PR linked yet.
7. **[#8225: Cron tasks cancelled on agent config hot reload](https://github.com/agentscope-ai/QwenPaw/issues/8225)** — "Zero-downtime" agent reloads silently cancel running cron jobs with no user notification. No fix PR linked yet.
8. **[#8213: Hub restart stops local runtimes and skips cron jobs](https://github.com/agentscope-ai/QwenPaw/issues/8213)** — Hub restarts do not restore desired-running local runtimes, causing cron jobs to silently miss schedules. No fix PR linked yet.

### Low Severity
9. **[#1612: Custom channel config shows `[object Object]` for arrays/objects](https://github.com/agentscope-ai/QwenPaw/issues/1612)** — UI rendering bug for structured config fields. Fix PR: [#8305](https://github.com/agentscope-ai/QwenPaw/pull/8305).
10. **[#2882: Matrix config paste adds leading space](https://github.com/agentscope-ai/QwenPaw/issues/2882)** — Pasted credentials include extraneous whitespace causing connection failures. Fix PR: [#8304](https://github.com/agentscope-ai/QwenPaw/pull/8304).

---

## 6. Feature Requests & Roadmap Signals
Top user-requested features with high likelihood of near-term implementation:

1. **Skill pool download improvements** ([#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126)) — Cancellable background downloads with progress tracking. High likelihood: already has active discussion and prior related PR #8055.
2. **Firecrawl web search provider** ([#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199)) — Third provider option for `web_search`, contributed by the Firecrawl team. High likelihood: external contributor ready to build and maintain, follows existing provider pattern.
3. **DeepSeek Search provider** ([#8314](https://github.com/agentscope-ai/QwenPaw/pull/8314)) — Already submitted as a PR from a first-time contributor, adds structured search with publication date and authority data. High likelihood: follows existing `web_search` provider architecture.
4. **Model favorites and simplified switching** ([#8310](https://github.com/agentscope-ai/QwenPaw/issues/8310)) — User request for model favorites list to reduce clicks when switching models. Medium likelihood: aligns with recent per-session model selection feature.
5. **QQ Bot stream message support** ([#8307](https://github.com/agentscope-ai/QwenPaw/issues/8307)) — Parity with Feishu's streaming message feature. Medium likelihood: official QQ Bot API now supports the capability.

---

## 7. User Feedback Summary
### Pain Points
- **Reliability issues:** Frequent page load failures ([#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)) and intermittent session breaks from media handling ([#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)) are top sources of dissatisfaction.
- **Channel integration gaps:** DingTalk's long message formatting loss ([#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)), QQ group message drops ([#8313](https://github.com/agentscope-ai/QwenPaw/issues/8313)), and Feishu config reload errors ([#3361](https://github.com/agentscope-ai/QwenPaw/issues/3361)) indicate inconsistent maturity across channel integrations.
- **Usability friction:** Cumbersome model switching UX ([#8310](https://github.com/agentscope-ai/QwenPaw/issues/8310)), Matrix credential paste bugs ([#2882](https://github.com/agentscope-ai/QwenPaw/issues/2882)), and Windows ZIP encoding issues ([#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270)) create avoidable user friction.

### Use Cases
- Multi-agent orchestration for enterprise workflows (data reporting, task pipelines)
- Offline/private deployment with local models (DeepSeek R1, Qwen 3/3.5)
- Cross-platform access: HarmonyOS native client ([#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164)) in development, free cloud-hosted instances requested ([#8232](https://github.com/agentscope-ai/QwenPaw/issues/8232))
- Plugin ecosystem: third-party plugin market integration and hot-install reliability

### Satisfaction Signals
- Positive feedback on per-session model selection feature ([#8310](https://github.com/agentscope-ai/QwenPaw/issues/8310))
- Appreciation for rapid resolution of critical bugs like OpenCode API compatibility ([#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531))
- Strong interest in new platform support (HarmonyOS) and extended provider options

---

## 8. Backlog Watch
Long-standing issues/PRs requiring maintainer attention:

1. **[#1453: Offline CoPaw cannot connect to offline Qwen 3/3.5 models](https://github.com/agentscope-ai/QwenPaw/issues/1453)** — Open since March 2026, only 4 comments but represents a key offline deployment use case. Users report DeepSeek R1 works but Qwen models fail, suggesting provider-specific compatibility issues.
2. **[#7396: Claude Code third-party agent harness status](https://github.com/agentscope-ai/QwenPaw/issues/7396)** — Open since August 2026, asks for roadmap update on Claude Code support (currently marked "Coming soon"). Clear user demand for expanded agent harness options.
3. **[#7827: DashScope MCP store streamable_http driver activation failure](https://github.com/agentscope-ai/QwenPaw/issues/7827)** — Open since September 2026, affects Alibaba Cloud's official MCP service integration. Root cause identified (bare HTTP 500 not recognized as old protocol evidence) but no fix PR linked.
4. **[#7654: Audio fallback/media capability classifier improvements](https://github.com/agentscope-ai/QwenPaw/pull/7654)** — Long-open PR that partially addresses the audio session wedging issue family. Should be prioritized to resolve [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) and similar bugs.
5. **[#8164: HarmonyOS native client](https://github.com/agentscope-ai/QwenPaw/pull/8164)** — Large XXXL-sized PR open since October 10, adds full native ArkUI/ArkTS client. Represents significant community contribution and platform expansion; needs maintainer review and roadmap alignment.

---
*Digest generated from GitHub data for QwenPaw (agentscope-ai/QwenPaw), covering activity from 2026-10-13 to 2026-10-19.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Weekly Project Digest
*Report date: 2026-10-19 | Project repository: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

---

## 1. Last 7 Days' Overview
ZeroClaw maintained high development velocity this week, with 50 issues updated (44 open, 6 closed) and 50 pull requests updated (42 open, 8 merged/closed) alongside a new minor release. Activity was concentrated across plugin system hardening, security boundary improvements, ZeroCode user experience (UX) refinements, and runtime architecture work tied to the v0.8.x and v0.9.0 roadmap. The project demonstrated strong contributor engagement, with 74 contributors landing code in the v0.8.6 release cycle. Overall project health is stable, with active triage of high-severity bugs and steady progress on planned architectural milestones.

---

## 2. Releases
### v0.8.6
**Release link:** [ZeroClaw v0.8.6](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.6)
This is a plugin, identity, and runtime-ownership release spanning 573 commits from 74 contributors. Key highlights:
- All seven 64-bit CLI release archives now ship with a built-in WebAssembly (WASM) plugin host.
- The official plugin registry now provides channel and tool packages built and verified for this release.
- No explicit breaking changes or migration warnings were published in the provided release notes; users upgrading from prior v0.8.x versions are advised to validate plugin compatibility against the v0.8.6 registry.

---

## 3. Project Progress
The following merged/closed PRs advanced core features and fixed critical issues this week:
1. **Cost warning visibility in ZeroCode** – PR [#11692](https://github.com/zeroclaw-labs/zeroclaw/pull/11692) fixed the long-unaddressed `cost.warn_at_percent` gap, surfacing budget warning notifications in the ZeroCode Dashboard (resolves Issue [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950)).
2. **Runtime context display in ZeroCode** – PR [#11513](https://github.com/zeroclaw-labs/zeroclaw/pull/11513) added live runtime context (active agent, provider/model, session states, runtime profile) to the Dashboard Overview, fulfilling the feature request in Issue [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383).
3. **ZeroCode config onboarding guidance** – PR [#11508](https://github.com/zeroclaw-labs/zeroclaw/pull/11508) added explanatory text and clear add actions for empty config sections (model providers, TTS, routes) in ZeroCode, closing Issue [#11490](https://github.com/zeroclaw-labs/zeroclaw/issues/11490).
4. **Live session update rendering fix** – PR [#11407](https://github.com/zeroclaw-labs/zeroclaw/pull/11407) reduced latency for streamed session updates in ZeroCode under load by optimizing the app event loop's notification drain behavior.
5. **Verified plugin update with rollback landed** – The feature tracked in Issue [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) was completed, adding an explicit plugin update command with failure rollback as part of the v0.8.6 Phase 2 plugin deliverables.
6. **Registry WIT compatibility resolved** – Issue [#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624) (WIT pin divergence breaking published components) was closed, with refreshed compatibility matrices aligned to the v0.8.6 host and registry artifacts.
7. **Web dashboard pairing code fix** – Issue [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) was resolved, updating the web dashboard pairing input to support 32-character alphanumeric codes (matching the updated default `PairingCodePolicy`).
8. **Test stability improvement** – PR [#11688](https://github.com/zeroclaw-labs/zeroclaw/pull/11688) fixed flakiness in the concurrent session trace correlation test by tolerating concurrent writers to the shared runtime trace file.

---

## 4. Community Hot Topics
The most actively discussed items this week centered on runtime architecture planning, cross-platform usability, and plugin system correctness:
1. **Runtime & gateway delivery tracker** – Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) (10 comments) is the central tracker for Phase 2 runtime work (v0.8.6) and Phase 3 gateway separation (v0.9.0) per RFC #5574. Discussion focuses on deliverable sequencing, remaining gaps, and release coordination, reflecting strong community interest in the project's architectural roadmap.
2. **llama.cpp/custom provider URI handling bug** – Issue [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) (5 comments) reports that non-localhost URIs for llama.cpp and custom providers are incorrectly resolved when fetching models. The high comment volume signals a common pain point for users self-hosting models behind routers or remote endpoints.
3. **ZeroCode "Copy" button failure** – Issue [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) (5 comments) tracks a completely broken one-click copy feature in the ZeroCode TUI, classified as S1 (workflow blocked). Heavy engagement reflects how core clipboard functionality is critical to daily code-editing workflows.
4. **Canonical config generation & apply tracking** – Issue [#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892) (4 comments) discusses implementing a ledger for config change adoption across running consumers, a foundational feature for future live-apply functionality. Interest comes from operators and advanced users managing multi-instance deployments.
5. **Unbounded agent-browser subprocess hangs** – Issue [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) (4 comments) tracks an S1 bug where wedged `agent-browser` CLI processes hang agent turns indefinitely. Engagement is driven by users relying on browser automation as a core agent capability.

---

## 5. Bugs & Stability
Bugs reported or updated this week are ranked below by severity, with status of available fixes:

### S0 (Security / Data Loss Risk)
- **Explicit allowed commands bypass high-risk command blocks** – Issue [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058): Commands listed literally in `allowed_commands` bypass `block_high_risk_commands` and run without approval or logging when `shell` is in `auto_approve`. A security fix PR [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822) is open, which splits POSIX commands at substitution/subshell boundaries to improve scanner accuracy.

### S1 (Workflow Blocked)
- **Agent-browser subprocess hangs indefinitely** – Issue [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946): No wall-clock deadline or `kill_on_drop` for `agent-browser` subprocesses in availability probes and `run_command`. Status: in progress, no linked fix PR yet.
- **Quickstart fails on Android/Termux** – Issue [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525): Agent creation fails on Android 16/Termux (aarch64) due to config persistence errors. Status: open, no fix PR yet.
- **ZeroCode "Copy" button non-functional** – Issue [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418): One-click copy does not write to the system clipboard. Status: in progress, no fix PR yet.
- **ZeroCode drops pending `ask_user` prompts silently** – Issue [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623): Cleared user elicitations leave no record and cause 600-second tool timeouts. Fix PR [#11624](https://github.com/zeroclaw-labs/zeroclaw/pull/11624) is open, which answers dropped elicitations and records them in the transcript.

### S2 (Degraded Behavior)
- **Plugin verification mismatch with runtime registration** – Issue [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336): Plugins without a `config_schema` pass CLI `plugin info`/`list --verify` checks but are refused by the runtime. Status: accepted for v0.8.6, no fix PR yet.
- **Windows killed process leaves port bound** – Issue [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800): Terminated zeroclaw processes leave zombie ports, blocking new daemon startups on Windows 11. Status: accepted, no fix PR yet.
- **Plugin `remove` deletes wrong directory for loaded plugins** – Issue [#11357](https://github.com/zeroclaw-labs/zeroclaw/issues/11357): Removal uses `plugins_dir/<name>` instead of the actual loaded plugin path, risking deletion of unrelated directories. Status: accepted for v0.8.6, no fix PR yet.
- **Multimodal vision provider never unpinned after `max_image_turns`** – Issue [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706): Vision model providers stay active for the full conversation, even after image history is stripped. Status: open, no fix PR yet.
- **`config set` for plugin settings doesn't propagate to running daemons** – Issue [#11820](https://github.com/zeroclaw-labs/zeroclaw/issues/11820): Plugin config/egress changes are only written to disk, leaving running daemons with stale settings. Status: open for v0.8.7, no fix PR yet.

---

## 6. Feature Requests & Roadmap Signals
Active feature work and user requests point to likely inclusions in the v0.8.7 and v0.9.0 releases:
1. **Persistent session prompt attachments** – PR [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) adds SQLite-backed, durable prompt attachments that survive restarts. This high-effort, high-impact feature is well-along in development and a strong candidate for v0.8.7.
2. **OpenRouter credit balance display** – Two open PRs ([#11845](https://github.com/zeroclaw-labs/zeroclaw/pull/11845), [#11846](https://github.com/zeroclaw-labs/zeroclaw/pull/11846)) implement optional, secure OpenRouter balance reporting in the web dashboard. This user-requested quality-of-life feature is likely to land in v0.8.7.
3. **Subprocess memory watchdog** – PR [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) adds an opt-in `shell_max_memory_mb` limit for shell/skill subprocesses. This security and stability feature is under maintainer review and targeted for a near-term release.
4. **ZeroCode file path opening from transcripts** – PR [#11633](https://github.com/zeroclaw-labs/zeroclaw/pull/11633) enables clicking local file paths in transcripts to open them. This UX improvement is in active review and expected for v0.8.7.
5. **Gateway separation (v0.9.0 milestone)** – Per tracker Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432), Phase 3 gateway separation remains the core v0.9.0 roadmap item, with foundational work ongoing in the runtime composition boundary refactor (Issue [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993)).

---

## 7. User Feedback Summary
Real user pain points and use cases surfaced this week:
- **Self-hosted model deployment friction**: Users running llama.cpp and custom providers behind remote endpoints/routers report broken model URI resolution (Issue [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296)), highlighting demand for first-class support for non-local inference endpoints.
- **Cross-platform onboarding gaps**: Android/Termux users cannot complete the quickstart flow (Issue [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525)), indicating unmet demand for mobile/edge platform support.
- **ZeroCode UX reliability issues**: Multiple user reports cite broken core functionality in the ZeroCode TUI, including non-working copy (Issue [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)), silent prompt drops (Issue [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)), and missing context visibility (resolved via PR [#11513](https://github.com/zeroclaw-labs/zeroclaw/pull/11513)). These reflect that ZeroCode is a heavily used surface where stability and polish directly impact user satisfaction.
- **Skill system limitations**: Users with skill bundles report that skill review/creation tools don't work with bundle-assigned skills (Issue [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333)) and only run for CLI/cron sessions (Issue [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332)), showing that the skill learning loop is a valued feature with incomplete cross-channel support.
- **Plugin system trust & usability**: Operators report confusing plugin verification behavior (Issue [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336)), missing egress declaration support for WebSocket/socket clients (Issue [#11552](https://github.com/zeroclaw-labs/zeroclaw/issues/11552)), and lock file permission issues (Issue [#11360](https://github.com/zeroclaw-labs/zeroclaw/issues/11360)), indicating that the plugin ecosystem needs continued hardening and clearer UX for administrators.

---

## 8. Backlog Watch
The following long-standing, high-impact items require increased maintainer attention to avoid user frustration and roadmap delays:
1. **Windows port zombie bug** – Issue [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) (opened 2026-07-07, S2 severity) has been open for over 3 months with no linked fix PR. This impacts all Windows users running the web dashboard and browser tools, and can block daemon restarts entirely.
2. **Incomplete Anthropic terminal response classification** – PR [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) (opened 2026-07-27, high risk, XL size) has been in progress for nearly 3 months. This fix addresses correctness of Anthropic provider responses, including handling of incomplete outputs and SSE framing, and is critical for users relying on Anthropic models.
3. **Plugin egress DNS deadline cannot cancel blocking lookups** – Issue [#10199](https://github.com/zeroclaw-labs/zeroclaw/issues/10199) (opened 2026-08-21, high risk) remains open with no linked PR. This security/stability gap means plugin connect deadlines do not bound DNS resolution, creating a potential denial-of-service vector via slow or unresponsive DNS servers.
4. **Skill review/creation not running for channel/webhook sessions** – Issue [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) (opened 2026-10-01, S2 severity, targeted for v0.8.7) has seen minimal progress despite being a core skill system limitation affecting all non-CLI user channels.
5. **Discord plugin end-to-end verification** – Issue [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) (opened 2026-09-20, blocked status) remains pending a published compatible Discord registry package and full end-to-end demonstration. This is a key product gate for validating the WASM plugin host's real-world channel support.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*