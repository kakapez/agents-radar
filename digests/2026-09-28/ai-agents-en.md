# OpenClaw Ecosystem Weekly Digest 2026-09-28

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-28 01:30 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Weekly Project Digest (Week Ending 2026-09-28)

---

## 1. Last 7 Days' Overview
OpenClaw maintained high development velocity this week, with 500 updated issues (473 open/active, 27 closed) and 500 updated PRs (384 open, 116 merged/closed), indicating active troubleshooting and feature iteration alongside a significant backlog of ongoing work. Two new releases were shipped: a patched stable v2026.9.6 for macOS and a v2026.7.35 extended-stable (LTS) gateway update. The bulk of active issues center on stability regressions in the 2026.9.x release line, particularly around gateway startup performance, memory leaks, crash loops, and session state consistency. Maintainer focus appears split between patching 2026.9.x critical bugs (tracked in the 2026.9.7 fixes issue) and larger refactoring work to reduce technical debt across core subsystems.

---

## 2. Releases
### v2026.9.6 (Stable, macOS Rebuild)
- **Release date**: 2026-09-24 (rebuilt 2026-09-24 09:52 UTC)
- **Key change**: The initial macOS build crashed at launch ([#156861](https://github.com/openclaw/openclaw/issues/156861)) and was replaced with a re-notarized build containing the fix ([#156881](https://github.com/openclaw/openclaw/issues/156881)).
- **Migration notes**: Users who installed the faulty early build should re-download the DMG or update in-app from 2026.9.5. No config or data migration is required.

### v2026.7.35 (Extended-Stable / LTS, Gateway-Only)
- **Release type**: Backport release for the July 2026 stable line, equivalent to LTS.
- **Included changes**: Critical security patches, reliability and performance fixes, and new model support backported from newer releases.
- **Target users**: Production deployments prioritizing stability over new features. The latest full-featured release remains v2026.9.5/2026.9.6.

---

## 3. Project Progress
116 PRs were merged or closed in the last 7 days, with work spanning bug fixes, UX improvements, refactoring, and security hardening. Key advances include:
- **Stability fixes**: Patches for session state rollback consistency ([#159807](https://github.com/openclaw/openclaw/pull/159807)), failed subagent delivery context leaks ([#155320](https://github.com/openclaw/openclaw/pull/155320)), and config recovery safety ([#152787](https://github.com/openclaw/openclaw/pull/152787)) moved to ready-for-review or merged status.
- **UX improvements**: Web UI sidebar filter panel reorganization ([#150605](https://github.com/openclaw/openclaw/pull/150605)), composer status bar height unification ([#160016](https://github.com/openclaw/openclaw/pull/160016)), and personal external browser preference support ([#159887](https://github.com/openclaw/openclaw/pull/159887)) advanced.
- **Technical debt reduction**: Multiple "deslop" (cleanup) passes progressed across channel core ([#159811](https://github.com/openclaw/openclaw/pull/159811)), browser/memory plugins ([#159798](https://github.com/openclaw/openclaw/pull/159798)), and plugin runtime ([#159600](https://github.com/openclaw/openclaw/pull/159600)), removing redundant code without user-facing changes.
- **Platform fixes**: Voice Call plugin loading support for 2026.9.6 hosts ([#159987](https://github.com/openclaw/openclaw/pull/159987)), Telegram rich message media capping ([#131347](https://github.com/openclaw/openclaw/pull/131347)), and Feishu quick-action card schema fixes ([#79832](https://github.com/openclaw/openclaw/pull/79832)).

---

## 4. Community Hot Topics
Ranked by comment count and engagement:
1. **#159356: llama.cpp manager reports ready while embedding child exits; embedding requests return HTTP 500** (25 comments, [link](https://github.com/openclaw/openclaw/issues/159356))
   - Top-discussed issue of the week, reported on v2026.9.6. Users observed embedding service failures and crash loops; the issue reporter confirmed increasing host RAM from 4GB to 8GB resolved the issue, pointing to memory pressure as a root cause. Underlying need: better memory guardrails and error messaging for embedded runtime OOM scenarios.
2. **#97616: OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation** (16 comments, 1 👍, [link](https://github.com/openclaw/openclaw/issues/97616))
   - Long-running regression first reported in June 2026, still active. Users report zombie `openclaw-hooks`, `bash`, and `codex` processes building up over time, degrading runtime performance. Underlying need: proper child process lifecycle management and reaping for tool/hook execution.
3. **#157531: 2026.9.7 Fixes Tracker** (15 comments, [link](https://github.com/openclaw/openclaw/issues/157531))
   - Central tracking issue for the upcoming 2026.9.7 patch release, currently containing 18/21 targeted P1 fixes spanning privacy, UX, and stability. Underlying need: coordinated rollout of critical 2026.9.x regression fixes.
4. **#127148: Codex sessions.compact acquires a second app-server and hits active-writer conflict** (12 comments, [link](https://github.com/openclaw/openclaw/issues/127148))
   - Session state bug causing compaction failures on bound Codex sessions. Underlying need: better app-server client ownership and concurrency control for session maintenance operations.
5. **#155859: Gateway startup wall-time scales with enabled plugin count** (11 comments, [link](https://github.com/openclaw/openclaw/issues/155859))
   - P0 regression on 2026.9.5 where gateway startup time grows linearly with enabled plugins, with discord, codex, and openclaw-weixin plugins adding tens of seconds each, often exceeding the 120s startup budget. Underlying need: lazy plugin loading and optimized plugin initialization.

---

## 5. Bugs & Stability
Ranked by severity (P0 > P1 > P2) and impact:
### P0 Critical Bugs
| Issue | Severity | Impact | Fix PR Status | Link |
|-------|----------|--------|---------------|------|
| 2026.9.7 Fixes Tracker | P0 | UX release blocker; tracks all pending critical patches | Active (18/21 P1 candidates prepared) | [#157531](https://github.com/openclaw/openclaw/issues/157531) |
| Gateway startup wall-time scales with enabled plugin count | P0 | Crash/startup delay, UX release blocker | No fix PR linked | [#155859](https://github.com/openclaw/openclaw/issues/155859) |
| Gateway crash-loops on plugin-doctor-post-session-state | P0 | Crash loop, UX release blocker | No fix PR linked | [#157160](https://github.com/openclaw/openclaw/issues/157160) |
| SQLite corruption recurs on pristine rebuilt DBs within 15–24h (WSL2) | P0 | Data loss, crash loop, paralyzed gateway mode | No fix PR linked | [#126821](https://github.com/openclaw/openclaw/issues/126821) |
| Gateway runaway RSS outside V8 heap causes OOM and shutdown timeout | P0 | Crash/OOM | No fix PR linked | [#154812](https://github.com/openclaw/openclaw/issues/154812) |
| State-lifecycle lease blocks gateway startup for 31 minutes (hung client) | P0 | Crash-restart loop, UX release blocker | No fix PR linked | [#156917](https://github.com/openclaw/openclaw/issues/156917) |
| macOS app readiness watchdog SIGTERMs slow-starting gateway | P0 | Restart loop, UX release blocker | Fix shape clear, queueable | [#158936](https://github.com/openclaw/openclaw/issues/158936) |
| Catalog worker rebuilds discovery registry on nearly every request (memory leak) | P0 | Memory leak/crash | No fix PR linked | [#159514](https://github.com/openclaw/openclaw/issues/159514) |
| Database is locked on agent DB when session reclamation exceeds 5s busy timeout | P0 | Message loss, UX release blocker | No fix PR linked | [#148307](https://github.com/openclaw/openclaw/issues/148307) |

### P1 High-Severity Bugs
Key active P1 issues include:
- Zombie child process leak from hook/tool execution ([#97616](https://github.com/openclaw/openclaw/issues/97616))
- Codex sessions.compact active-writer conflict ([#127148](https://github.com/openclaw/openclaw/issues/127148))
- Config hot-reload aborts all in-flight agent turns ([#144291](https://github.com/openclaw/openclaw/issues/144291))
- High sustained CPU after 2026.9.6 upgrade (stuck sessions.list materialization) ([#157605](https://github.com/openclaw/openclaw/issues/157605))
- Windows auto-update repeated failures ([#157812](https://github.com/openclaw/openclaw/issues/157812))

---

## 6. Feature Requests & Roadmap Signals
User-requested features with active momentum or high alignment with ongoing work:
1. **Multi-index embedding memory with model-aware failover** ([#63990](https://github.com/openclaw/openclaw/issues/63990), 1 👍)
   - Production users request resilient embedding model failover without corrupting vector semantics. Given the project's focus on production reliability and provider fallback improvements, this is a strong candidate for inclusion in a future 2026.10 or LTS backport release.
2. **Sidebar session filter panel reorganization** ([#150605](https://github.com/openclaw/openclaw/pull/150605))
   - UX feature in advanced review, highly likely to ship in the next minor web UI update.
3. **Personal external browser preference** ([#159887](https://github.com/openclaw/openclaw/pull/159887))
   - Small UX feature in review, expected to land in an upcoming 2026.9.x patch.
4. **Sign in with ChatGPT beta labeling** ([#160011](https://github.com/openclaw/openclaw/pull/160011))
   - Auth UX improvement in review, likely to ship soon alongside ChatGPT integration hardening.

---

## 7. User Feedback Summary
### Key Pain Points
- **2026.9.x stability regressions**: Multiple users report upgrade-related crash loops, slow startup, memory leaks, and session state issues, with many indicating they are holding off on upgrading from 2026.7.x LTS.
- **Windows platform gaps**: Repeated auto-update failures ([#157812](https://github.com/openclaw/openclaw/issues/157812)) and GBK encoding corruption for tool output ([#113219](https://github.com/openclaw/openclaw/issues/113219)) are persistent pain points for zh-CN Windows users.
- **Mobile UX issues**: iOS app keyboard input failures ([#122648](https://github.com/openclaw/openclaw/issues/122648)), lag when showing reasoning/tool activity ([#124759](https://github.com/openclaw/openclaw/issues/124759)), and Android keyboard chat content occlusion ([#137508](https://github.com/openclaw/openclaw/issues/137508)) are frequently reported.
- **Plugin loading performance**: Users with many enabled plugins report extremely long gateway startup times, with some disabling plugins to work around the issue.

### Positive Signals
- Users with production deployments on the 2026.7.x extended-stable line report good reliability, with appreciation for backported security and model support updates.
- The Codex and multi-agent feature set continues to see heavy use, with users prioritizing fixes for session consistency and reliability over new features.

---

## 8. Backlog Watch
Long-standing, high-impact issues/PRs awaiting maintainer attention:
1. **#97616: Unreaped hook/tool child process zombie leak** (reported 2026-06-29, 16 comments, P1, [link](https://github.com/openclaw/openclaw/issues/97616))
   - Open for 3 months, affects long-running deployments, no linked fix PR. High user impact with gradual runtime degradation.
2. **#84110: Codex app-server rewrites prompt on tool-call continuation, busting OpenAI prompt cache** (reported 2026-05-19, 8 comments, 2 👍, P2, [link](https://github.com/openclaw/openclaw/issues/84110))
   - Open for 4 months, causes significant cost and performance regression for OpenAI Codex users (93% → 47% cache hit ratio).
3. **#55694: Agent tool call failure infinite loop causes message spamming** (reported 2026-03-27, 7 comments, P1, [link](https://github.com/openclaw/openclaw/issues/55694))
   - Open for 6 months, affects end-user experience with duplicate messages. Fix shape is clear and queueable, but has not been prioritized.
4. **#79832: Feishu quick-action and confirmation cards fail to send** (PR reported 2026-05-09, P1, [link](https://github.com/openclaw/openclaw/pull/79832))
   - Stale PR open for 4+ months, fixes a critical Feishu channel interaction bug. Needs maintainer review and proof validation.
5. **#120415: No repetition guard in embedded-agent turn loop** (reported 2026-08-08, 6 comments, P2, [link](https://github.com/openclaw/openclaw/issues/120415))
   - Fix shape is clear, but no active PR. Causes infinite identical tool call loops that only stop on wall-clock timeout.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source AI Agent Ecosystem Comparison Report
*Data sourced from weekly project digests, week ending 2026-09-28*

---

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem remains in a high-growth, maturing phase, with projects balancing rapid feature iteration against production-grade stability and enterprise readiness. Across all tracked projects, core pain points center on runtime reliability, context/session management correctness, cross-platform compatibility, and plugin/tool ecosystem extensibility. Enterprise and team deployment demand is accelerating, driving investment in multi-tenant architectures, governance controls, and security hardening. Open-source agent frameworks are increasingly diverging into niche focus areas—from general-purpose extensible cores to Web3-native and ecosystem-tethered offerings—while converging on foundational infrastructure for memory, tooling, and multi-channel delivery.

---

## 2. Activity Comparison
| Project | Updated Issues (Open/Closed) | Updated PRs (Open/Merged) | Releases This Week | Health Score (0-10) |
|---------|-------------------------------|---------------------------|--------------------|---------------------|
| OpenClaw | 500 (473 open / 27 closed) | 500 (384 open / 116 merged) | 2 (stable patch + LTS backport) | 7.5 |
| Hermes Agent | 50 (39 open / 11 closed) | 50 (43 open / 7 merged) | 2 (patch rollups) | 6.0 |
| IronClaw | 4 (4 open / 0 closed) | 10 (8 open / 2 closed) | 1 (release candidate) | 8.0 |
| QwenPaw | 50 (34 open / 16 closed) | 50 (41 open / 9 merged) | 0 | 6.5 |
| ZeroClaw | 50 (41 open / 9 closed) | 50 (45 open / 5 merged) | 0 | 5.5 |

*Health score methodology: weighted combination of issue closure rate, PR throughput, severity of open critical bugs, release cadence, and community engagement.*

---

## 3. OpenClaw's Position
### Advantages vs. Peers
OpenClaw is the clear ecosystem leader in development velocity, with 10x the issue and PR volume of the next-largest projects, and a mature LTS release line for production users. It has the most fully featured multi-agent (Codex) and plugin ecosystem, with the broadest multi-channel coverage (Telegram, Feishu, Discord, WeChat) across all tracked projects. Its dual-track release model (stable + extended-stable LTS) caters to both early adopters and risk-averse enterprise deployments, a maturity marker unmatched by peers.

### Technical Approach Differences
OpenClaw prioritizes incremental stability fixes and technical debt reduction alongside feature work, with a large maintainer team triaging hundreds of concurrent issues. Unlike ZeroClaw’s architectural shift to runtime WASM plugins, OpenClaw relies on a native plugin runtime with ongoing refactoring to reduce bloat. Its stability work is focused on production gateway reliability, while newer projects like IronClaw and QwenPaw prioritize feature expansion and niche use cases.

### Community Size Comparison
OpenClaw has the largest and most active community, evidenced by 500 weekly issue/PR updates and high-engagement discussion threads (25+ comments on top issues). Its user base spans individual power users to large production deployments, with feedback from both consumer and enterprise segments driving roadmap priorities.

---

## 4. Shared Technical Focus Areas
Cross-project requirements indicate universal infrastructure gaps in the AI agent ecosystem:
1. **Plugin/tool runtime reliability**
   - *OpenClaw*: Plugin loading performance bottlenecks (linear startup time with plugin count), lazy loading needs
   - *ZeroClaw*: Runtime WASM plugin system migration, egress security guarantees
   - *QwenPaw*: MCP auto-reconnection and timeout configuration
   - *Shared need*: Standardized plugin lifecycle management, lazy initialization, and fault isolation.

2. **Session state and context management correctness**
   - *OpenClaw*: Session state consistency, compaction concurrency conflicts, state rollback bugs
   - *Hermes Agent*: Message loss on history restore, in-memory state loss on restart
   - *QwenPaw*: Context compaction budget overruns, compaction-induced tool call structure loss
   - *ZeroClaw*: Session resume permission revocation bypasses
   - *Shared need*: Atomic session persistence, consistent compaction logic, and memory safety for long-running agent workflows.

3. **Cross-platform installation and compatibility**
   - *Hermes Agent*: Widespread Windows installation failures, macOS update PATH bugs
   - *OpenClaw*: Windows auto-update failures, macOS notarization issues, WSL2 SQLite corruption
   - *ZeroClaw*: Windows Ctrl+C crash, CLI UTF-8 editing bugs
   - *Shared need*: End-to-end platform testing, robust dependency resolution, and consistent runtime bootstrap across operating systems.

4. **Security hardening**
   - *ZeroClaw*: SSRF protection for file downloads, sandbox escape patches, privilege escalation bugs
   - *OpenClaw*: LTS security backports, config recovery safety
   - *Hermes Agent*: NPM vulnerability backlog, enterprise SSH governance requirements
   - *Shared need*: Proactive dependency maintenance, least-privilege tool execution, and audit-ready security controls.

---

## 5. Differentiation Analysis
| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **Primary Feature Focus** | General-purpose multi-agent platform, broad channel/tool ecosystem | Desktop-first agent, enterprise SSH fleet management | NEAR Web3-native agent, Google Workspace integrations | Multi-channel consumer/team agent, Hub multi-tenant edition | Security-first extensible agent, WASM plugin architecture |
| **Target Users** | Individual power users + production enterprise deployments | Desktop power users + enterprise DevOps teams | Web3/Crypto users, NEAR ecosystem builders | Consumer messaging users, small/medium teams | Security-conscious tinkerers, self-hosted enthusiasts |
| **Technical Architecture** | Monolithic core with native plugin runtime, dual-track release model | Electron-based desktop app with Python backend | Rust-based, Web3-integrated core | Python-based, channel-first architecture | Rust-based, WASM plugin runtime, security sandbox focus |
| **Core Differentiator** | Mature LTS support, largest feature set, massive community | Enterprise SSH fleet management, desktop UX polish | Native NEAR/Web3 tooling, stable baseline | Qwen ecosystem integration, broad Chinese-language channel support | Modular WASM plugin system, security-first design |

---

## 6. Community Momentum & Maturity
### Activity Tiers
- **Tier 1 (High Velocity)**: OpenClaw operates at a scale unmatched by peers, with 10x the throughput of other projects, indicating a large paid maintainer team and broad contributor base.
- **Tier 2 (Moderate Velocity)**: Hermes Agent, QwenPaw, and ZeroClaw have comparable activity levels (50 issues/PRs per week), with steady iteration but constrained maintainer capacity.
- **Tier 3 (Stable/Low Velocity)**: IronClaw has minimal activity, focused on incremental patches and dependency updates, with a stable core and small contributor base.

### Iteration vs. Stabilization
- **Rapidly Iterating**: ZeroClaw is in a pre-v0.8.6 stabilization phase with large architectural overhauls (plugin migration, gateway separation) in flight. QwenPaw is iterating on core features (context management, Hub multi-tenancy) ahead of its next major release.
- **Stabilizing**: OpenClaw is balancing feature work with heavy investment in stability fixes for its 2026.9.x release line, maturing its existing feature set rather than building net-new functionality. IronClaw is in a maintenance/stabilization phase with no major new features merged.
- **Mixed**: Hermes Agent is splitting effort between enterprise feature development (SSH control plane) and foundational bug fixes (Windows installation, dependency environment consistency).

---

## 7. Trend Signals
1. **Enterprise/team deployment is the fastest-growing demand driver**
   Across OpenClaw LTS adoption, Hermes Agent SSH fleet management, and QwenPaw Hub roadmap discussions, multi-user, governance, and admin control features are seeing the highest user pull. AI agent developers should prioritize team collaboration, role-based access control, and audit logging to capture this expanding market.

2. **Plugin standardization and modularity are becoming table stakes**
   From ZeroClaw’s WASM plugin migration to OpenClaw’s plugin performance work to QwenPaw’s MCP reliability improvements, the industry is moving toward decoupled, extensible agent architectures. Developers building agent frameworks should adopt open plugin standards (e.g., MCP) to reduce integration friction and expand ecosystem reach.

3. **Long-running agent reliability is a critical unsolved pain point**
   Session state corruption, context compaction failures, memory leaks, and zombie process accumulation are universal, high-impact issues across all mature projects. Investment in robust state management, fault tolerance, and observability will be a key differentiator for production-grade agent platforms.

4. **Web3 and vertical-specific agent use cases are emerging niche opportunities**
   IronClaw’s NEAR ecosystem focus and token launchpad integration signal demand for domain-specialized agents that integrate natively with industry-specific tools and workflows. Developers can capture underserved markets by building vertical-specific agent layers on top of general-purpose frameworks.

5. **Cross-platform polish is a major user satisfaction driver**
   Windows installation failures, macOS update bugs, and mobile UX gaps are top user complaints across multiple projects. For consumer-facing agent tools, investment in end-to-end platform testing and native platform UX will drive higher adoption and retention than incremental core feature additions.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Weekly Project Digest (Week of 2026-09-28)

## 1. Last 7 Days' Overview
The Hermes Agent project saw high activity this week, with 50 issues updated (39 open, 11 closed) and 50 pull requests updated (43 open, 7 merged/closed). Two patch releases were shipped to roll up large volumes of merged PRs into stable tags for downstream consumers. Work focused heavily on installation stability (especially on Windows), session state correctness, security dependency updates, and desktop UX improvements. Community engagement was concentrated on Windows installation failures and npm security vulnerabilities, with multiple high-comment threads driving triage. Overall project health shows active maintenance but significant backlog pressure on platform compatibility and security debt.

## 2. Releases
Two patch releases were published this week, both rolling up large batches of previously merged PRs into stable tagged versions for downstream deployment (Docker images, Hermes Cloud, hosted installations):
- **v0.21.5 (2026-09-24)** ([Release Link](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.24)): Rolls up ~460 PRs merged since v0.21.4 into a stable patch release. Full curated changelog is deferred to a later date. No breaking changes or migration steps noted.
- **v0.21.4 (2026-09-21)** ([Release Link](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.21)): Rolls up ~1,800 PRs merged since v0.21.3 into a stable patch release. Full curated changelog is deferred. No breaking changes or migration steps noted.

## 3. Project Progress
This week's 7 merged/closed PRs advanced fixes across desktop stability, logging, and update workflows:
- **Desktop cascading failure resilience** ([PR #124951](https://github.com/NousResearch/hermes-agent/pull/124951)): Fixed a systemic cascading failure where EGL fallback on NVIDIA 580+ GPUs triggered software rendering, CPU saturation, and API quota exhaustion.
- **Custom provider identity logging** ([PR #73407](https://github.com/NousResearch/hermes-agent/pull/73407)): Maps OpenAI-compatible custom provider labels back to configured keys in user-facing logs for better observability.
- **Desktop update PATH fix for macOS** ([PR #75314](https://github.com/NousResearch/hermes-agent/pull/75314)): Resolves in-app update failures on macOS by including POSIX sane PATH entries during rebuild, fixing missing npm errors for GUI-launched apps.
- **TUI Ctrl+F find feature closure** ([Issue #46169](https://github.com/NousResearch/hermes-agent/issues/46169)): Closed completed feature request for in-app find across chat and UI editors.
- **TTS PTT stop feature closure** ([Issue #40010](https://github.com/NousResearch/hermes-agent/issues/40010)): Closed completed request to stop TTS output when PTT button is pressed in TUI.
- **Reasoning level shortcut feature closure** ([Issue #71627](https://github.com/NousResearch/hermes-agent/issues/71627)): Closed completed request for configurable reasoning level up/down shortcuts.
- **Desktop attachment storage profile alignment** ([Issue #110662](https://github.com/NousResearch/hermes-agent/issues/110662)): Closed completed feature to make Desktop attachment storage follow the configured profile workspace.

## 4. Community Hot Topics
The most active discussions this week centered on Windows installation failures and security vulnerability backlog:
1. **Windows Python dependency installation failure** ([Issue #125657](https://github.com/NousResearch/hermes-agent/issues/125657)): 16 comments, opened 2026-09-27. Users report repeated failures at the "install python dependencies" step on Windows 11, with workarounds like reinstallation, admin privileges, and VPN all failing. Underlying need: robust Windows installer dependency resolution and error diagnostics.
2. **Managed SSH rollout control plane feature** ([Issue #118029](https://github.com/NousResearch/hermes-agent/issues/118029)): 10 comments, active all week. Enterprise users request a pinned, verified rollout control plane for managed SSH installations tied to security assurance requirements. Underlying need: enterprise-grade deployment governance and audit integration.
3. **NPM security vulnerability backlog** ([Issue #107356](https://github.com/NousResearch/hermes-agent/issues/107356)): 10 comments, active all week. Users raise alarm that 12 of 18 npm audit findings are high-severity, with slow progress on dependency updates. Underlying need: proactive security maintenance and transparent vulnerability remediation timelines.
4. **Bot-to-bot DM delivery ruamel dependency failure** ([Issue #122490](https://github.com/NousResearch/hermes-agent/issues/122490)): 8 comments. Deliveries fail with `No module named 'ruamel'` when the runner inherits a bare store Python environment. Underlying need: consistent dependency environment isolation across worker processes.
5. **Fresh Windows install impossibility** ([Issue #125350](https://github.com/NousResearch/hermes-agent/issues/125350)): 7 comments. Multiple blocking issues on clean Windows 10 installs: missing bzip2 for Git tarballs, 404 ffmpeg pins, 403 mirror errors, and rejected `-SkipSetup` flags. Underlying need: end-to-end Windows installation testing and dependency pinning hygiene.

## 5. Bugs & Stability
Bugs reported/updated this week, ranked by severity:
### P0 (Critical)
1. **Internal-event pin memory loss on gateway restart** ([Issue #125793](https://github.com/NousResearch/hermes-agent/issues/125793)): First internal event after a gateway restart flips the system prompt due to in-memory-only pin storage. No fix PR linked yet.
2. **Persist override drops merged unanswered user messages** ([Issue #124731](https://github.com/NousResearch/hermes-agent/issues/124731)): When a new user message merges with an existing unanswered row during history restore, final persistence overwrites the merged row, losing the original message. No fix PR linked yet.

### P1 (High)
1. **PM activates wrong interpreter dependency environment** ([Issue #122555](https://github.com/NousResearch/hermes-agent/issues/122555)): `activate_dependencies()` rewrites `sys.path` without ABI checks, dropping the running interpreter's site-packages and causing mismatched environment failures. No fix PR linked yet.
2. **Cron external worker loses runtime dependencies** ([Issue #124279](https://github.com/NousResearch/hermes-agent/issues/124279)): External cron workers launched with raw `sys.executable` fail with missing dependencies because they bypass the managed Hermes runtime bootstrap. Fix in progress: related bot-delivery dependency environment PRs ([#125308](https://github.com/NousResearch/hermes-agent/pull/125308), [#125865](https://github.com/NousResearch/hermes-agent/pull/125865)) address the same class of bug.
3. **Kanban worker spawn fails with missing hermes_cli on PM/source installs** ([Issue #122487](https://github.com/NousResearch/hermes-agent/issues/122487)): Workers die on import because `PYTHONPATH` is stripped in the spawned environment, despite `find_spec` passing in the parent process. Related to the cron worker dependency class of bugs.

### P2 (Medium)
- Windows fresh install multi-failure ([#125350](https://github.com/NousResearch/hermes-agent/issues/125350)): No fix PR yet.
- Windows Python dependency install failure ([#125657](https://github.com/NousResearch/hermes-agent/issues/125657)): Needs repro, no fix PR yet.
- Bot-to-bot DM delivery ruamel failure ([#122490](https://github.com/NousResearch/hermes-agent/issues/122490)): Fix PRs open: [#125308](https://github.com/NousResearch/hermes-agent/pull/125308), [#125865](https://github.com/NousResearch/hermes-agent/pull/125865)
- Windows browser subprocess hang on .cmd files ([#107232](https://github.com/NousResearch/hermes-agent/issues/107232)): No fix PR yet.
- Smart-approval unattended mode not honored on API server sessions ([#100532](https://github.com/NousResearch/hermes-agent/issues/100532)): No fix PR yet.
- Desktop duplicate messages after compaction ([#123985](https://github.com/NousResearch/hermes-agent/issues/123985)): No fix PR yet.
- Slack manifest command limit mismatch ([#124762](https://github.com/NousResearch/hermes-agent/issues/124762)): No fix PR yet.
- Bundled-skill sync error messaging ([#97792](https://github.com/NousResearch/hermes-agent/issues/97792)): No fix PR yet.
- Stale browser_harness daemon processes ([#121095](https://github.com/NousResearch/hermes-agent/issues/121095)): No fix PR yet.

## 6. Feature Requests & Roadmap Signals
Top user-requested features this week, with likelihood assessment for near-term inclusion:
1. **Shared metrics v3 with Desktop consent** ([PR #125074](https://github.com/NousResearch/hermes-agent/pull/125074)): High likelihood. Open PR adding opt-in metrics for failure reasons, user retention, setup drop-off, and model cost tracking, with first-run consent flow. Aligns with product analytics needs and is already CI-reviewed.
2. **Managed SSH fleet rollout control plane** ([Issue #118029](https://github.com/NousResearch/hermes-agent/issues/118029) / [PR #120719](https://github.com/NousResearch/hermes-agent/pull/120719)): High likelihood. 14-part feature series is in final stages (14/14 PR open), focused on measured-capacity gating for enterprise SSH fleet management. Tied to enterprise security requirements.
3. **Secrets broker-neutral authority architecture** ([Issue #107700](https://github.com/NousResearch/hermes-agent/issues/107700)): Medium likelihood. Multiple linked issues and docs requests outline a vault-agnostic secret management model with process isolation. Still in design/decision phase.
4. **Desktop session sidebar per-platform grouping** ([PR #125893](https://github.com/NousResearch/hermes-agent/pull/125893)): High likelihood. Open PR fixes sessions from non-whitelisted gateway platforms being buried under generic groups. Small, targeted UX improvement.
5. **Local PAW PII redaction plugin** ([Issue #102922](https://github.com/NousResearch/hermes-agent/issues/102922)): Medium likelihood. Proposal for local-only PII redaction middleware as an egress guardrail. Aligns with security roadmap but is early-stage.
6. **Command Center full-text search across all sessions** ([Issue #51694](https://github.com/NousResearch/hermes-agent/issues/51694)): Medium likelihood. Long-standing request for FTS, archived session search, and cross-profile search in ⌘K. No active PR yet.

**Predicted next version highlights**: Bot-to-bot delivery stability fixes, per-platform sidebar grouping, shared metrics v3 opt-in, and continued Windows installation hardening.

## 7. User Feedback Summary
### Pain Points
- **Windows installation is broken for many users**: Multiple reports of complete installation failure on fresh Windows 10/11 systems, with no reliable workarounds ([#125657](https://github.com/NousResearch/hermes-agent/issues/125657), [#125350](https://github.com/NousResearch/hermes-agent/issues/125350)).
- **Security debt is eroding trust**: Users express frustration that npm vulnerabilities are stacking up with 11 high-severity issues and visible slow progress ([#107356](https://github.com/NousResearch/hermes-agent/issues/107356), [#125576](https://github.com/NousResearch/hermes-agent/issues/125576)).
- **Poor error diagnostics**: Multiple bugs (skill sync failures, delivery crashes) produce vague error messages with no actionable debug output ([#97792](https://github.com/NousResearch/hermes-agent/issues/97792), [#122490](https://github.com/NousResearch/hermes-agent/issues/122490)).
- **Dependency environment inconsistency**: Worker processes (cron, kanban, bot delivery) frequently fail with missing modules due to inconsistent runtime bootstrap across spawned processes.

### Positive Use Cases
- Enterprise users are building managed SSH fleet workflows on Hermes, investing in security and governance features ([#118029](https://github.com/NousResearch/hermes-agent/issues/118029)).
- Power users run long-lived, multi-month autonomous agent sessions for complex workflows, driving demand for better session management and stability ([#123165](https://github.com/NousResearch/hermes-agent/issues/123165)).

### Satisfaction Signals
- Recently closed UX features (Ctrl+F find, PTT TTS stop, reasoning shortcuts) received positive community reaction (👍 upvotes on closed issues).
- Desktop attachment storage alignment with workspaces resolved a long-standing data management pain point for profile users ([#110662](https://github.com/NousResearch/hermes-agent/issues/110662)).

## 8. Backlog Watch
Long-standing important issues/PRs needing maintainer attention:
1. **NPM security vulnerability backlog** ([Issue #107356](https://github.com/NousResearch/hermes-agent/issues/107356), opened 2026-09-10, 10 comments): 12 high-severity npm vulnerabilities with no visible remediation plan. Risks eroding user trust and enterprise adoption. Duplicate issue [#125576](https://github.com/NousResearch/hermes-agent/issues/125576) was opened this week, indicating growing user concern.
2. **Windows browser subprocess hang** ([Issue #107232](https://github.com/NousResearch/hermes-agent/issues/107232), opened 2026-09-10, 6 comments): P2 bug affecting Windows browser tool users, open for 18 days with no fix progress.
3. **Smart-approval unattended mode bug** ([Issue #100532](https://github.com/NousResearch/hermes-agent/issues/100532), opened 2026-09-01, 4 comments): P2 security boundary bug where `approvals.unattended_mode: approve` is ignored on API server sessions, producing unanswerable pending approvals. Open for 27 days.
4. **Bundled-skill sync error messaging** ([Issue #97792](https://github.com/NousResearch/hermes-agent/issues/97792), opened 2026-08-29, 2 comments): Debug usability issue where sync failures give no diagnostic output. Open for 30 days.
5. **PAW PII redaction plugin proposal** ([Issue #102922](https://github.com/NousResearch/hermes-agent/issues/102922), opened 2026-09-04, 2 comments): Strategic security feature request with no maintainer response or triage.
6. **Command Center FTS** ([Issue #51694](https://github.com/NousResearch/hermes-agent/issues/51694), opened 2026-06-24, 2 comments): Highly requested desktop UX improvement open for 3 months with no progress update.

---
*Data sourced from NousResearch/hermes-agent GitHub repository, week ending 2026-09-28.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Weekly Project Digest
Week of 2026-09-28 | Source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Last 7 Days' Overview
The IronClaw project maintained moderate, feature-focused activity over the past 7 days, with 4 open issues, 10 open pull requests (PRs), 2 closed PRs, and 1 new release candidate published. Activity skewed heavily toward release readiness, dependency maintenance, and incremental feature additions rather than large core refactors. The backlog remained stable with no newly closed issues, indicating ongoing triage and development work is still in flight for current proposals. No critical incidents or mass bug reports were logged, pointing to general baseline stability of the main codebase.

---

## 2. Releases
### ironclaw-v1.4.1-rc.2 (Released 2026-09-24)
This is the second patch release candidate for the 1.4.x line, carrying forward the same core fix first introduced in RC1 with no additional feature changes.
- **Fixed**: Google Workspace extensions (Gmail, Google Calendar) now support activation on deployments where operators configure Google OAuth clients via the Web UI, not just via environment variables. This resolves a gap for UI-managed deployment workflows that could not previously enable Google integrations.
- **Breaking changes**: None reported.
- **Migration notes**: No action required for existing 1.4.0 users; this release is a drop-in patch for testing the OAuth fix ahead of the stable 1.4.1 release.
- **Release PR**: [#8110 chore(release): cut 1.4.1-rc.2](https://github.com/nearai/ironclaw/pull/8110)

---

## 3. Project Progress
Two PRs were closed in the last 7 days, focused on release orchestration and superseded dependency updates:
1. **[#8105 chore(release): cut 1.4.1-rc.1](https://github.com/nearai/ironclaw/pull/8105)** (Closed 2026-09-21): Versioned the 1.4.1-rc.1 release candidate to enable the release workflow to tag the initial patch test build, laying groundwork for the subsequent RC2 rollout.
2. **[#8104 chore(deps): bump the everything-else group across 1 directory with 29 updates](https://github.com/nearai/ironclaw/pull/8104)** (Closed 2026-09-27): Superseded by a newer, larger dependency update batch (PR #8114) with 31 package bumps, ensuring the codebase stays aligned with the latest upstream Rust ecosystem releases.

No new features were merged to the default branch in this window; all feature and bug fix PRs remain in review.

---

## 4. Community Hot Topics
All issues and PRs updated in the last 7 days have 0 comments and 0 reactions, so there are no items with measurable community engagement to rank. The two most recently filed feature proposals represent emerging topics that may gain traction as community members discover them:
1. **[#8113 Proposal: opt-in turn-0 tool selection (BM25F + embeddings)](https://github.com/nearai/ironclaw/issues/8113)** (Opened 2026-09-27): Proposes hybrid BM25F + embedding ranking to predict required tools from the first user message in a conversation, only advertising predicted tools plus 4 discovery bridge tools to the agent. This addresses the underlying need to reduce tool selection latency and irrelevant tool options for end-users, improving agent response efficiency.
2. **[#8112 Feature: NEARA hosted-MCP extension (keyless NEAR token launchpad tools)](https://github.com/nearai/ironclaw/issues/8112)** (Opened 2026-09-26): Requests an MCP extension for NEARA, a NEAR mainnet token launchpad, to let agents list, quote, launch, and trade new tokens. This signals demand for expanding IronClaw's on-chain Web3 utility for NEAR ecosystem users.

---

## 5. Bugs & Stability
No explicit bug reports (labeled or categorized as bugs) were filed in the last 7 days. The only stability-related data points are:
- **Low-severity usability gap**: [#8092 fix(webui): preserve IME composition in the chat composer](https://github.com/nearai/ironclaw/pull/8092) (Open): Fixes an issue where IME input (for non-Latin languages like Chinese, Japanese) was interrupted by command menu and Enter-to-send handlers in the chat composer, particularly affecting Safari users. A fix PR is already in review.
- **Low-severity builtin edge case**: [#8108 fix(host-runtime): add builtin.time shift and typed input issues](https://github.com/nearai/ironclaw/pull/8108) (Open): Addresses gaps in the `builtin.time` tool by adding a `shift` operation for relative time calculations and fixing typed input handling. A fix PR is in review.

Daily failure taxonomy reports (#8111, #8106) document benchmark test failures attributed entirely to underlying model quality (DeepSeek-V4-Flash OCR and reasoning errors), not IronClaw code defects, so they do not count as application bugs.

---

## 6. Feature Requests & Roadmap Signals
Two new feature requests were filed in the last 7 days, with strong alignment to existing project priorities that make them plausible candidates for near-term releases:
1. **Turn-0 tool selection (Issue #8113)**: The hybrid BM25F + embedding ranking proposal builds directly on IronClaw's existing tool discovery infrastructure (it retains the 4 core discovery bridge tools) and is framed as opt-in, making it low-risk to ship as an experimental feature in a 1.4.x minor patch or 1.5.0 release.
2. **NEARA launchpad MCP extension (Issue #8112)**: This aligns with IronClaw's NEAR ecosystem roots and follows the existing hosted-MCP extension pattern, so it is likely to be prioritized for NEAR-focused deployment tiers, potentially landing in the 1.5.x release cycle.

Additional in-flight features likely to land soon:
- Italian WebUI locale ([#8107 feat(webui): add Italian (it) locale](https://github.com/nearai/ironclaw/pull/8107)): Fully translated and ready for review, high chance of inclusion in 1.4.1 stable or 1.4.2.
- Scoped virtual skill roots documentation ([#8109 docs(skills): clarify scoped virtual skill roots](https://github.com/nearai/ironclaw/pull/8109)): Docs-only change with no runtime impact, likely to merge in the next 1-2 weeks.

---

## 7. User Feedback Summary
No direct end-user satisfaction/dissatisfaction feedback was captured in the last 7 days of issue/PR activity. Inferred pain points and use cases from filed items include:
- **Deployment pain point**: Google OAuth configuration via Web UI was previously unsupported for Google Workspace extensions, creating friction for operators who manage credentials through the admin interface rather than environment variables (addressed in 1.4.1-rc.2).
- **Web3 use case**: NEAR ecosystem users want to use IronClaw agents to interact with token launchpads, demonstrating demand for more DeFi/Web3 tooling integrations.
- **Internationalization pain point**: Italian-speaking users requested a localized WebUI, showing growth in non-English user bases.
- **Accessibility/usability pain point**: IME input issues in the chat composer create friction for East Asian language users.

---

## 8. Backlog Watch
The following long-running open PRs have been updated recently but remain unmerged, and may warrant maintainer attention to unblock progress:
1. **[#7834 chore(deps): bump the wasm group across 1 directory with 4 updates](https://github.com/nearai/ironclaw/pull/7834)** (Opened 2026-08-23, 36 days old): A wasm ecosystem dependency bump (including wasmtime) that has been open for over a month. Given that the 1.4.1-rc.2 release already pulls in a patched wasmtime version via lockfile refresh, this PR may be stale or blocked on compatibility testing that needs triage.
2. **[#7988 chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988)** (Opened 2026-08-29, 30 days old): A nightly-generated codebase memory snapshot refresh that has not been merged. Leaving this open long-term may degrade the accuracy of the in-agent codebase knowledge for internal development workflows.
3. **[#8078 chore(deps): bump the tokio-ecosystem group across 1 directory with 2 updates](https://github.com/nearai/ironclaw/pull/8078)** (Opened 2026-09-06, 22 days old): A tokio ecosystem dependency update that has been open for 3 weeks, potentially blocked on regression testing that needs prioritization.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Weekly Project Digest (2026-09-28)

## 1. Last 7 Days' Overview
QwenPaw saw robust community activity this week, with 50 updated issues (34 open/active, 16 closed) and 50 updated PRs (41 open, 9 merged/closed). No new releases were published, indicating a focus on incremental bug fixes and feature refinement ahead of the next version. The project maintained high responsiveness, addressing core stability issues, UX pain points, and channel-specific bugs across multiple platforms. Community engagement remained strong, particularly around the future direction of the multi-tenant QwenPaw Hub edition.

## 2. Releases
No new releases were published in the last 7 days.

## 3. Project Progress
The 9 merged/closed PRs this week advanced frontend consistency, session management, and cron reliability:
- **Console UX fixes**: PR #7972 ([agentscope-ai/QwenPaw#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972)) adjusted the default sidebar session list grouping to `source` as a follow-up to the v2.2.2b3 sidebar redesign, resolving visibility issues for chat groups/folders reported in Issue #7968.
- **Channel bug fixes**: Fixes for duplicate message processing in QQ official bot sessions (PR #7983, [agentscope-ai/QwenPaw#7983](https://github.com/agentscope-ai/QwenPaw/pull/7983)) and incorrect markdown table formatting in WeCom prose (PR #7992, [agentscope-ai/QwenPaw#7992](https://github.com/agentscope-ai/QwenPaw/pull/7992)) were submitted and are in review.
- **Tool & provider improvements**: PR #7988 ([agentscope-ai/QwenPaw#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988)) added binary and internal file filtering for `grep_search` to prevent session state poisoning, while PR #7986 ([agentscope-ai/QwenPaw#7986](https://github.com/agentscope-ai/QwenPaw/pull/7986)) fixed incorrect context window inference for custom OpenAI-compatible endpoints.

## 4. Community Hot Topics
The most active discussions centered on product direction and core functionality gaps:
- **QwenPaw Hub multi-tenant roadmap**: Issue #7318 ([agentscope-ai/QwenPaw#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)) led activity with 32 comments and 4 👍 votes, gathering community feedback on next steps for the team-focused Hub edition launched in v2.2.0. The discussion reflects growing demand for enterprise-grade multi-user features, admin controls, and shared skill libraries for team deployments.
- **ChatGPT-5.5 compatibility**: Closed Issue #4474 ([agentscope-ai/QwenPaw#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474)) drew 9 comments, highlighting user interest in supporting the latest OpenAI model versions and clarifying configuration requirements for new model endpoints.
- **Context compaction reliability**: Issue #7628 ([agentscope-ai/QwenPaw#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)) had 7 comments, with users reporting that context compaction still exceeds provider request budgets and breaks active conversations, underscoring the criticality of context management for long-running agent tasks.

## 5. Bugs & Stability
Bugs this week spanned core context management, channel reliability, and tool safety, ranked by severity below:
1. **Critical**: Issue #7980 ([agentscope-ai/QwenPaw#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980)) — `grep_search` lacks binary filtering, matches internal `history.db-wal` files, and causes irreversible session state poisoning and doom loops. Fix PR #7988 is open.
2. **High**: Issue #7628 ([agentscope-ai/QwenPaw#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)) — Context compaction triggers based only on live conversation context, not full provider request payload, leading to request budget overruns and failed turns. No fix PR yet.
3. **High**: Issue #7534 ([agentscope-ai/QwenPaw#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)) — Feishu session queue consumers get stuck permanently after high-priority card messages, leaving sessions unresponsive with no recovery path. No fix PR yet.
4. **Medium**: Issue #7946 ([agentscope-ai/QwenPaw#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946)) — QQ official bot gateway replays events on session resume, causing duplicate message processing. Fix PR #7983 is open.
5. **Medium**: Issue #7850 ([agentscope-ai/QwenPaw#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850)) — Concurrent driver card policy writes are clobbered by background `reload_driver` processes, leading to lost policy updates. No fix PR yet.

## 6. Feature Requests & Roadmap Signals
User requests this week point to likely near-term roadmap priorities:
- **Cron task expansion**: Issue #4963 ([agentscope-ai/QwenPaw#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963)) requests direct script/shell execution cron tasks, bypassing AI agent processing for pure automated operations. This aligns with ongoing cron reliability improvements (PR #7825) and is a strong candidate for the next minor release.
- **Agent-autonomous context management**: Issue #7733 ([agentscope-ai/QwenPaw#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733)) and Issue #4525 ([agentscope-ai/QwenPaw#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525)) both call for agent-informed context lifecycle control (checkpoints, pre-eviction warnings, cron task resets) to reduce quality degradation in long-running workflows. With multiple context management bugs active this week, this area is a high-priority candidate for v2.3.0.
- **Customizable prebuilt components**: Issue #7957 ([agentscope-ai/QwenPaw#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)) requests the ability to disable pre-made models and channels to declutter the UI for users with specific workflows. This low-effort UX improvement is likely to be scheduled soon.
- **MCP auto-reconnection**: Issue #5900 ([agentscope-ai/QwenPaw#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900)) (closed this week) previously requested automatic reconnection for terminated `streamable_http` MCP sessions. With MCP tool timeout configuration (PR #6874) under review, MCP reliability improvements are on the roadmap.

## 7. User Feedback Summary
Key user pain points and use cases emerged from issue discussions:
- **Context visibility frustration**: Users reported poor experience with truncated chat history after compaction (Issue #7884, [agentscope-ai/QwenPaw#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)), with users unable to access earlier conversation content after refreshing the frontend, leading to confusion and lost work context.
- **Team deployment demand**: The Hub roadmap discussion (Issue #7318) confirms strong pull from teams wanting to deploy QwenPaw collaboratively, with requests for shared skills, role-based access control, and admin management tools.
- **Integration reliability concerns**: Users across Feishu, QQ, and WeCom channels reported recurring stability issues (stuck sessions, duplicate messages, formatting errors) that disrupt production use cases.
- **Custom endpoint flexibility gaps**: Users running self-hosted models (Ollama, llama.cpp, vLLM) reported multiple pain points, including incorrect context window detection, missing header propagation during connection tests, and limited network search integration (Issue #1452, [agentscope-ai/QwenPaw#1452](https://github.com/agentscope-ai/QwenPaw/issues/1452)).

## 8. Backlog Watch
Long-standing issues and PRs that remain unresolved and require maintainer attention:
- **Issue #2324 (referenced in #7318)**: Multi-user access and admin-managed skills, a foundational request for team deployments that has been open for over 6 months, with community demand amplified by the Hub launch.
- **PR #6874 ([agentscope-ai/QwenPaw#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874))**: Configurable MCP tool call timeout, under review since August 10, with dependencies on MCP reliability improvements requested by multiple users.
- **PR #7357 ([agentscope-ai/QwenPaw#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357))**: Tool call visibility toggle for the chat interface, a high-demand UX improvement open since August 27 that reduces clutter in long tool-heavy conversations.
- **Issue #5856 ([agentscope-ai/QwenPaw#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856))**: Tool call structure loss during context compaction causing 400 errors, open since July with ongoing user reports of related compaction failures.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Weekly Project Digest | 2026-09-28

---

## 1. Last 7 Days' Overview
ZeroClaw saw sustained high activity in the past week, with 50 issues and 50 pull requests updated — 41 issues remain open and active, 45 PRs are in open review, and only 9 issues and 5 PRs were closed/merged. No new releases shipped in the period. Work is heavily concentrated on architectural refactors (plugin runtime migration, gateway separation), security hardening, release pipeline reliability, and cross-module bug fixes, indicating the project is in a pre-v0.8.6 stabilization phase with multiple large in-flight workstreams.

---

## 2. Releases
No new releases were published in the last 7 days.

---

## 3. Project Progress (Merged/Closed PRs)
Only 5 PRs were merged or closed in the past week, focused on release infrastructure and plugin system foundations:
- **[PR #11086: fix(release): publish the dashboard bundle preflight verified](https://github.com/zeroclaw-labs/zeroclaw/pull/11086)** — Fixed a release pipeline bug where the dashboard bundle uploaded to crates.io was not the same one validated in preflight, by reusing the prebuilt verified artifact.
- **[PR #11178: feat(plugins): admit channel mirrors declared by manifest `provides`](https://github.com/zeroclaw-labs/zeroclaw/pull/11178)** — Added support for WASM plugin manifests to declare they are drop-in replacements for built-in channels, a core building block for the compile-time → runtime plugin migration.
- **[PR #10070: feat(tools): gate file_download against SSRF with private-host opt-in](https://github.com/zeroclaw-labs/zeroclaw/pull/10070)** — Landed SSRF hardening for the `file_download` tool, with NAT64 and live-config support carried forward from the original contributor submission.
- **[PR #11168: test(plugins): make the egress pin test independent of live DNS](https://github.com/zeroclaw-labs/zeroclaw/pull/11168)** — Added deterministic plugin egress testing to prevent re-resolve-before-connect regressions.
- **[PR #11091: fix(release): verify crates before the GitHub Release](https://github.com/zeroclaw-labs/zeroclaw/pull/11091)** — Moved crates.io preflight checks to run *before* a public GitHub Release is created, reducing post-release rollback risk.

---

## 4. Community Hot Topics
The most actively discussed items (by comment count) center on governance, architectural direction, and core runtime reliability:
1. **[Issue #8692: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** (15 comments, open) — The top-discussed item is a process tracker for triaging RFCs and design proposals, signaling the project is scaling its decision-making as contributor volume grows.
2. **[Issue #8850: Move optional channels & tools from compile-time feature flags to runtime plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)** (6 comments, open) — The flagship architectural shift to WASM-based runtime plugins remains a top priority, with active work ongoing.
3. **[Issue #9381: crates.io publishing, packaging, and cargo-install follow-ups](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)** (5 comments, open) — Post-v0.8.4 release follow-ups for packaging and distribution are a key focus area for maintainers.
4. **[Issue #10523: Bootstrap file truncation at 6000 chars is invisible to the operator](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)** (5 comments, closed) — A user-reported UX bug where silent truncation of agent identity files caused unexpected behavior was resolved this week.
5. **[Issue #11036: OpenCode big-pickle returns 403 FreeTierError on v0.8.4](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)** (5 comments, closed) — A provider compatibility issue with OpenCode’s free tier was triaged and closed.

Underlying need: The community is prioritizing *extensibility via plugins* and *operational transparency* — both for maintainer decision processes and for runtime behavior visibility for end users.

---

## 5. Bugs & Stability
Bugs are ranked by severity (S0 = critical, S1 = high, S2 = medium, S3 = low):

### Critical / S0 (Data loss / security risk)
- **[Issue #11136: concurrent file_edit/file_write calls to the same path silently drop one edit under parallel_tools](https://github.com/zeroclaw-labs/zeroclaw/issues/11136)** (open, in-progress, high risk) — Race condition in parallel tool execution causes silent data loss. No linked fix PR identified yet.
- **[Issue #11198: Delegated memory tools lose principal scope](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)** (open, accepted, high risk) — Sub-agent delegates can access memory outside their parent principal’s scope, a privilege escalation bug.
- **[Issue #11197: Session resume restores forwarded environment after admin revocation](https://github.com/zeroclaw-labs/zeroclaw/issues/11197)** (open, accepted, high risk) — Revoked admin permissions can be bypassed by resuming an old session.
- **[Issue #10966: Git --attr-source can hide a mutating subcommand from approval classification](https://github.com/zeroclaw-labs/zeroclaw/issues/10966)** (closed, fixed) — Security sandbox bypass via Git global option parsing was resolved this week.

### High / S1
- **[Issue #10778: multimodal image cap eviction rewrites earlier history messages and invalidates the cache prefix](https://github.com/zeroclaw-labs/zeroclaw/issues/10778)** (open, in-progress, high risk) — Image context eviction corrupts conversation history cache for Anthropic provider. **Fix PR in progress: [PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)**
- **[Issue #10008: prove the plugin wasi:http hook dials the pinned address set](https://github.com/zeroclaw-labs/zeroclaw/issues/10008)** (open, accepted, high risk) — Missing test coverage for plugin egress security guarantees. **Fix PR in progress: [PR #11168](https://github.com/zeroclaw-labs/zeroclaw/pull/11168)**

### Medium / S2
Notable medium-severity bugs include browser probe timeout misclassification ([#10757](https://github.com/zeroclaw-labs/zeroclaw/issues/10757)), Qdrant vector recall missing time bounds ([#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921)), CLI REPL UTF-8 backspace handling ([#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795)), and Windows Ctrl+C force quit ([#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028)).

---

## 6. Feature Requests & Roadmap Signals
User-requested features with strong roadmap alignment (likely to land in v0.8.6 or v0.9.0):
1. **Runtime WASM plugin system** ([#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)) — Core architectural shift already in active implementation; plugin catalog and channel mirror support are already landing.
2. **Knowledge graph as first-class memory layer** ([#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053)) — RFC for elevating knowledge graph from a tool to a native memory layer, aligned with the project’s memory module investment.
3. **Realtime voice-host channel** ([#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)) — Backend-agnostic WebSocket voice channel integration, parked but aligned with multi-channel expansion goals.
4. **Default stall watchdog** ([#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168)) — Low-risk UX improvement to prevent hung agent turns, targeted for near-term release.
5. **Discord role-based authorization** ([#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970)) — High-demand channel access control feature with clear use case for community servers.

---

## 7. User Feedback Summary
Concrete user pain points and use cases from the week’s issues:
- **Silent behavior opacity**: Users reported frustration with invisible truncation of bootstrap files ([#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)) and unreported tool failures ([PR #11203](https://github.com/zeroclaw-labs/zeroclaw/pull/11203)), showing demand for better runtime observability.
- **Provider compatibility**: Free-tier provider breakage ([#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)) highlights the need for broader testing across non-commercial and compatible API providers.
- **Cross-platform UX gaps**: Windows-specific Ctrl+C crashes ([#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028)) and REPL UTF-8 editing bugs ([#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795)) show polish gaps for non-macOS/Linux users.
- **Distribution pain points**: Demand for `cargo install` support and reliable crates.io publishing ([#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)) indicates users want simpler installation paths beyond prebuilt binaries.
- **Channel feature parity**: Requests for Signal "Note to Self" support ([#9158](https://github.com/zeroclaw-labs/zeroclaw/issues/9158)), WhatsApp PDF previews ([#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812)), and Telegram reaction support ([PR #10843](https://github.com/zeroclaw-labs/zeroclaw/pull/10843)) show users expect full native channel feature coverage.

---

## 8. Backlog Watch
Long-standing high-impact items awaiting maintainer attention or author follow-up:
- **[PR #7821: canonical sandbox_policy schema with application-layer enforcement](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)** (created 2026-06-17, open, needs-author-action) — Foundational security policy refactor, high risk/XL size, stalled on author updates.
- **[PR #9746: per-agent ownership scoping for session tools and discord_search](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)** (created 2026-08-04, open, needs-author-action) — Critical identity-access scoping fix, aligned with active S0 security bugs, blocked on author action.
- **[PR #10407: persistent session prompt attachments](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)** (created 2026-08-27, open, needs-author-action) — Large user-facing feature for durable session state, awaiting maintainer review.
- **[Issue #7432: Runtime and gateway delivery - v0.8.6 and v0.9.0 tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** (created 2026-06-09, open) — Overarching roadmap tracker for the project’s biggest architectural phases, with 2 comments indicating low public update cadence.
- **[Issue #7943: Realtime voice-host channel](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)** (created 2026-06-18, open, parking-lot status) — High-demand voice channel feature parked in the backlog with no recent progress updates.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*