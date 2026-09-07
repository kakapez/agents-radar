# OpenClaw Ecosystem Weekly Digest 2026-09-07

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-07 01:53 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Weekly Project Digest | Week of 2026-09-07
**Repository**: [openclaw/openclaw](https://github.com/openclaw/openclaw)  
**Report Date**: 2026-09-07  
**Data Window**: 2026-08-31 to 2026-09-07

---

## 1. Last 7 Days' Overview
OpenClaw maintained high development velocity this week, with 500 updated issues (375 open/active, 125 closed) and 500 updated pull requests (309 open, 191 merged/closed), reflecting active community engagement and steady maintainer throughput. The project shipped 4 new releases (v2026.8.1 through v2026.9.2), focusing on chat responsiveness, cross-platform diagram rendering, and desktop agent dock functionality. Stability remained a top priority, with multiple P0/P1 regressions reported on Windows and recent 9.x releases, alongside a large volume of refactoring and performance optimization PRs in review. Overall, the project is in a healthy feature-delivery phase while managing post-release stabilization for its 2026.9 line.

---

## 2. Releases
Four new versions were published this week, with two major feature releases and two incremental updates:
- **[v2026.9.2](https://github.com/openclaw/openclaw/releases/tag/v2026.9.2)**
  - Highlights: Delivered faster, more responsive chat and dashboards by offloading long transcript processing and durable history reads outside the Gateway event loop, reducing cold-load work and adding direct dashboard lookup. Related PRs: #136862, #138
  - Breaking changes: None documented
  - Migration notes: No special migration steps noted; standard update path applies
- **[v2026.9.1](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1)**
  - Highlights: Launched Mermaid diagram rendering across all chat surfaces (Control UI, macOS, iOS, Android apps), with enlarge previews and mobile retry for failed renders. Related PRs: #134913, #135746, #135470, #135342
  - Breaking changes: None documented
  - Migration notes: Partial release notes available; full details pending completion
- **[v2026.8.2](https://github.com/openclaw/openclaw/releases/tag/v2026.8.2)**
  - Highlights: Added dockable Home agent (toggle with `Cmd/Ctrl+Shift+H`) that runs alongside work contexts, with work-context snapshot preview/removal and selected text attachment. Related issue: #133632, PR: #133676
  - Breaking changes: None documented
  - Migration notes: No special migration steps noted
- **[v2026.8.1](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1)**
  - Highlights: Full release notes available at [docs.openclaw.ai/releases/2026.8.1](https://docs.openclaw.ai/releases/2026.8.1)
  - Migration notes: If automatic update fails, use a local coding harness to complete the update, diagnose migration errors, and verify Gateway startup. Back up configuration and state before upgrading.

---

## 3. Project Progress
Among 191 merged/closed PRs this week, key advancements include:
- **Performance & Infrastructure**:
  - Closed [#137056](https://github.com/openclaw/openclaw/issues/137056): Moved memory-core maintenance off search/watch hot paths and implemented per-file invalidation, reducing latency interference for memory operations.
  - Open (ready for review) [#125900](https://github.com/openclaw/openclaw/pull/125900): Batched board metadata lookups and coalesced duplicate dashboard reads to improve Control UI performance on high-session Gateways.
  - Open [#140597](https://github.com/openclaw/openclaw/pull/140597): Reduced bundled plugin catalog lookup overhead by eliminating repeated full catalog rebuilds.
- **Bug Fixes (Closed/Merged)**:
  - Closed [#124991](https://github.com/openclaw/openclaw/issues/124991): Fixed CLI session reseed failure on SQLite session stores, where `loadCliSessionEntries` was incorrectly reading legacy JSONL files.
  - Closed [#138803](https://github.com/openclaw/openclaw/pull/138803): Resolved Talk E2E audio capture stalls in Control UI tests caused by lingering browser audio state.
- **Developer Experience & Refactoring**:
  - Multiple refactor PRs to consolidate duplicate code paths: shared Chat Completions request assembly ([#140604](https://github.com/openclaw/openclaw/pull/140604)), Responses function-tool assembly ([#140592](https://github.com/openclaw/openclaw/pull/140592)), and plugin installed-index reuse ([#140600](https://github.com/openclaw/openclaw/pull/140600)).
  - CI optimizations: Skipped Linux packaging on PRs ([#140589](https://github.com/openclaw/openclaw/pull/140589)) and reduced iOS routine checks to build smoke tests ([#140585](https://github.com/openclaw/openclaw/pull/140585)) to cut feedback time and CI costs.

---

## 4. Community Hot Topics
The most active issues and PRs (by comment count and engagement) reveal core user priorities around runtime stability, Windows compatibility, and subagent/scalability performance:
1. **[#97616](https://github.com/openclaw/openclaw/issues/97616) (14 comments, 1 👍)**: Zombie child process leak from hook/tool execution
   - Analysis: Long-running users face gradual runtime degradation and crash loops as unreaped `openclaw-hooks`, `bash`, and `codex` processes accumulate. This is a high-priority stability issue with "gold shrimp" rating, indicating consistent user impact over time.
2. **[#135111](https://github.com/openclaw/openclaw/issues/135111) (14 comments)**: Intermittent malformed JSON tool call errors on v2026.8.1 with claude-sonnet-5
   - Analysis: A regression from 2026.7.x that breaks agent runs unpredictably, with no consistent reproduction steps. Users on the latest stable release are affected, creating pressure for a root-cause fix.
3. **[#119720](https://github.com/openclaw/openclaw/issues/119720) (12 comments)**: Synchronous agent persistence blocking the Gateway event loop at scale
   - Analysis: A core scalability bottleneck for high-usage deployments. While partial fixes (planner-statistics repairs) have landed, the underlying Gateway thread blocking remains unresolved, limiting large-scale adoption.
4. **[#96975](https://github.com/openclaw/openclaw/issues/96975) (12 comments, 1 👍)**: Subagent completion injecting excessive child session content into parent context
   - Analysis: Users with heavy subagent workloads experience context bloat and degraded performance. The request for isolated subagent status/link-only returns reflects demand for more efficient multi-agent architectures.
5. **[#48920](https://github.com/openclaw/openclaw/issues/48920) (10 comments, 4 👍)**: Live Docs ahead of release (features documented but not shipped)
   - Analysis: The highest-reacted issue this week, highlighting a documentation/versioning pain point where users attempt to use documented features (e.g., `IsolatedSessions` heartbeat config) that don't exist in stable releases, causing confusion and wasted time.

---

## 5. Bugs & Stability
Bugs reported/updated this week are ranked by severity (P0 > P1 > P2), with regression status and fix availability noted:
### P0 (Critical)
| Issue | Severity | Description | Regression? | Fix PR Exists? |
|-------|----------|-------------|-------------|----------------|
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | UX release blocker | Windows Gateway fails to start after 2026.9.1 update: `--task-supervisor` flag exits silently, no child process spawned | Yes (2026.8.2 → 2026.9.1) | No |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | UX release blocker | Windows de-DE 2026.8.2 upgrade leaves Doctor maintenance blocked and legacy workspace state behind | Yes (2026.7.x → 2026.8.2) | No |
| [#114967](https://github.com/openclaw/openclaw/issues/114967) | Crash loop, UX release blocker | Agent-driven live update leaves launchctl keepalive job force-restarting Gateway every 2 minutes | No | No |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | UX release blocker | Live Docs include features (e.g., `IsolatedSessions`) not present in latest stable release | Yes | No |

### P1 (High Priority)
Key P1 bugs include:
- Zombie child process leak ([#97616](https://github.com/openclaw/openclaw/issues/97616)): Causes runtime degradation and crash loops over time; no fix PR yet.
- Gateway event loop blocking from synchronous persistence ([#119720](https://github.com/openclaw/openclaw/issues/119720)): Affects scale deployments; partial fixes landed, full resolution pending.
- Overflow retry success without final message delivery ([#132762](https://github.com/openclaw/openclaw/issues/132762)): Causes silent message loss; fix shape is clear, queued for work.
- Message drops during active reply runs ([#139847](https://github.com/openclaw/openclaw/issues/139847)): Regression in 2026.9.2; fix shape is clear, queued for work.
- Windows sleep/resume WebSocket reconnect delays ([#140010](https://github.com/openclaw/openclaw/issues/140010)): 30-60s+ unavailability after wake; new report, no fix PR yet.

---

## 6. Feature Requests & Roadmap Signals
Top user-requested features, with likelihood of near-term inclusion based on maintainer engagement and existing work:
1. **[#99583](https://github.com/openclaw/openclaw/issues/99583) Intelligent Session Auto-Titling** (7 comments, 2 👍): Lazy generation with cheap models and topic-aware renames.
   - Signal: An LLM slug generator already exists in the codebase, reducing implementation lift. Moderate likelihood of inclusion in 2026.9.x or 2026.10, as it addresses a common UX pain point with low risk.
2. **[#71058](https://github.com/openclaw/openclaw/issues/71058) Multiple Azure/Teams bots per Gateway** (8 comments, 1 👍): Support for multiple Teams bot identities on a single instance.
   - Signal: Marked as "needs product decision," indicating it is under evaluation. Medium likelihood for a future enterprise-focused release.
3. **[#51572](https://github.com/openclaw/openclaw/issues/51572) Session-memory hook on reset/prune** (8 comments, 1 👍): Fire the hook on idle reset, daily reset, and prune, not just compaction.
   - Signal: Aligns with existing session lifecycle work. Moderate likelihood, as it extends an existing feature with clear use cases.
4. **[#14376](https://github.com/openclaw/openclaw/issues/14376) Reason-aware cron guardrails** (5 comments): Quota/auth/rate-limit aware backoff and circuit breakers for cron jobs.
   - Signal: Addresses operational reliability, a recurring theme in issue reports. Low-to-moderate likelihood for the next minor release, depending on prioritization of stability work.
5. **[#139850](https://github.com/openclaw/openclaw/pull/139850) Team Reports plugin** (open PR): Built-in GitHub and Discord activity reports.
   - Signal: Active PR from maintainers, high likelihood of landing in the next feature release (2026.10) or as a bundled plugin.

---

## 7. User Feedback Summary
### Key Pain Points
- **Windows upgrade and runtime instability**: Multiple P0/P1 reports (#137813, #136203, #140010) indicate Windows users face frequent breakage during updates and day-to-day use, with silent failures and long recovery times.
- **Documentation-version mismatch**: Issue #48920 (4 👍) shows users are frustrated by docs that reference features not available in stable releases, leading to wasted debugging time.
- **Silent message/turn drops**: Issues #112259, #132762, #92241, and #139847 all describe scenarios where user messages are silently lost with no visible error, eroding trust in the system.
- **Subagent and context efficiency**: Issues #96975 and #113701 highlight that multi-agent workflows suffer from context bloat and poor compaction, limiting their utility for complex tasks.

### Positive Signals
- High community engagement (500 issues/PRs updated weekly) indicates active adoption and a invested user base.
- Rapid release cadence (4 versions in one week) shows the team is delivering user-facing features quickly.
- Many bug fixes have clear fix paths and are queued for work, demonstrating responsive maintainer triage.

---

## 8. Backlog Watch
Long-standing, high-impact issues and PRs that have not received recent resolution and warrant maintainer attention:
1. **[#41201](https://github.com/openclaw/openclaw/issues/41201) Control UI Avatar not displaying** (created 2026-03-09, 11 comments): A regression with both external URL and local path avatar failures. Open for 6 months with no fix PR, despite being a visible UX issue.
2. **[#54488](https://github.com/openclaw/openclaw/issues/54488) Session lane starvation** (created 2026-03-25, 6 comments): Followup drain monopolizes session lanes, blocking inbound messages for 20-30 minutes. A critical scalability issue open for over 5 months with no resolution.
3. **[#92241](https://github.com/openclaw/openclaw/issues/92241) Stale module import paths after update/rollback** (created 2026-06-11, 6 comments): Inbound messages are silently dropped after rollbacks due to stale import caches. A reliability issue with no fix PR after 3 months.
4. **[#87793](https://github.com/openclaw/openclaw/pull/87793) Clarify unsafe Codex app-server completion stalls** (created 2026-05-28, open PR): A low-risk UX improvement for Codex timeout messages that has been open for over 3 months awaiting real-behavior proof.
5. **[#84242](https://github.com/openclaw/openclaw/issues/84242) memory-lancedb tools not exposed to agents** (created 2026-05-19, 5 comments, 3 👍): The LanceDB memory store registers tools but they are not callable by agents, making the integration effectively non-functional for end users.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-07)

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem continues to mature rapidly, with projects across tiers balancing feature delivery, stability hardening, and enterprise-ready functionality. All tracked projects maintained high development velocity this week, concentrated on improving multi-agent workflow reliability, cross-platform compatibility, and production-grade operability. The landscape shows clear segmentation between general-purpose assistant frameworks, vertically focused enterprise solutions, and security-first runtime platforms, with shared pain points around session state management, channel consistency, and developer experience driving cross-project innovation.

## 2. Activity Comparison
| Project | Updated Issues (Open/Closed) | Updated PRs (Open/Merged) | Releases This Week | Health Score (1-10) |
|---------|-------------------------------|---------------------------|--------------------|---------------------|
| OpenClaw | 500 (375/125) | 500 (309/191) | 4 (v2026.8.1–v2026.9.2) | 8.5 |
| Hermes Agent | 50 (48/2) | 50 (46/4) | 1 (v0.21.0 "Pantheon Release") | 7.8 |
| IronClaw | 42 (26/16) | 50 (25/25) | 0 | 8.2 |
| QwenPaw | 50 (33/17) | 50 (33/17) | 5 (v2.2.0 stable + 4 betas) | 8.0 |
| ZeroClaw | 50 (39/11) | 50 (44/6) | 1 (v0.8.5) | 7.9 |

*Health score calculated based on issue closure rate, PR merge velocity, critical bug resolution progress, and release stability.*

## 3. OpenClaw's Position
OpenClaw is the clear ecosystem leader in community size and development throughput, with 10x the issue and PR volume of the next-largest project, reflecting its dominant adoption as a general-purpose AI assistant platform. Its technical approach prioritizes rapid feature delivery paired with iterative stabilization, shipping 4 releases in a single week while managing post-release regressions for its 2026.9 line — a cadence unmatched by peers. Compared to security-focused ZeroClaw or enterprise-targeted QwenPaw, OpenClaw serves the broadest user base, from individual developers to enterprise deployments, with the most mature plugin and multi-agent ecosystem. Its main relative weakness is a higher volume of unresolved stability issues (particularly on Windows) and documentation-version mismatches, which are side effects of its faster release cycle.

## 4. Shared Technical Focus Areas
1. **Session state & context reliability** (OpenClaw, Hermes Agent, QwenPaw): All three general-purpose projects face critical bugs related to context loss, duplicate message persistence, and silent message drops, with users prioritizing predictable execution over new feature delivery.
2. **Multi-agent workflow efficiency** (OpenClaw, Hermes Agent, QwenPaw, IronClaw): Common needs include reduced context bloat from subagent outputs, parent-child progress visibility, and autonomous task resumption, with every project actively developing delegation infrastructure.
3. **Cross-platform parity & Windows stability** (OpenClaw, Hermes Agent, ZeroClaw): All three projects with desktop/self-hosted runtimes report Windows-specific P0/P1 bugs, including silent startup failures, test suite incompatibilities, and update pipeline breakage.
4. **Channel experience consistency** (IronClaw, QwenPaw, ZeroClaw, Hermes Agent): Projects with multi-channel support (Telegram, Feishu, Discord, Matrix) are all working to standardize onboarding, error messaging, media handling, and progress visibility across platforms.
5. **Plugin & tooling reliability** (all projects): Shared pain points include MCP integration debuggability, tool schema correctness, and secure plugin sandboxing, with consistency across both feature-focused and security-focused projects.

## 5. Differentiation Analysis
| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **Core Focus** | General-purpose personal assistant with broad feature set | Fast-growing agent framework with emphasis on delegation | Mid-sized agent platform with strong UX/design system focus | Enterprise team collaboration & multi-tenant Hub | Security-first runtime with hardened sandbox boundaries |
| **Target Users** | Individual developers, power users, enterprise teams | Early-adopter developers, multi-agent workflow builders | Design-focused teams, Telegram/channel-first users | Enterprise teams, workspace-based collaboration | Security-conscious operators, production deployments |
| **Technical Architecture** | Monolithic core with plugin ecosystem, Gateway-centric runtime | Modular delegation architecture, rapid feature iteration | Rust + TypeScript stack, design system-led UI | Multi-tenant Hub + Data module, workspace-native | Runtime-owned session model, WASM/WASI plugin system, OS-level sandbox integration |
| **Release Cadence** | Very high (4 releases/week) | Milestone-based (large minor releases) | Steady, patch-focused | Beta-to-stable release trains | Security/feature milestone releases |

## 6. Community Momentum & Maturity
### Activity Tiers
- **Tier 1 (Massive scale)**: OpenClaw — operates at an order of magnitude higher volume than peers, with a mature contributor base and established governance.
- **Tier 2 (High-growth mid-tier)**: Hermes Agent, QwenPaw — both show high open-to-closed issue/PR ratios, indicating rapid feature expansion and growing contributor bases.
- **Tier 3 (Stable focused development)**: IronClaw, ZeroClaw — balanced merge rates with equal focus on bug fixes, technical debt, and feature work, indicating more mature, focused development cycles.

### Maturity Status
- **Stabilizing phase**: IronClaw — no new releases this week, focused on design system consolidation, technical debt reduction, and bug fixing.
- **Rapid iteration phase**: Hermes Agent, QwenPaw — fresh off major milestone releases (v0.21.0 and v2.2.0 respectively), actively working through post-release bugs and building out new feature roadmaps.
- **High-velocity delivery phase**: OpenClaw — continuous feature delivery paired with ongoing stabilization of recent release lines, operating at mature scale.
- **Architecture-led growth phase**: ZeroClaw — focused on foundational RFC work for runtime and security architecture, with incremental feature releases.

## 7. Trend Signals
1. **Multi-agent workflows are moving from experimental to production-critical**: Across every project, user feedback prioritizes subagent reliability, progress visibility, and context efficiency over pure feature count, indicating that multi-agent architectures are now core to production use cases rather than niche capabilities.
2. **Enterprise & team adoption is driving platform roadmap evolution**: QwenPaw’s multi-tenant Hub launch, OpenClaw’s enterprise scalability work, and Hermes Agent’s team collaboration features all point to accelerating organizational adoption, with permission controls, shared skill libraries, and centralized management becoming table stakes.
3. **Security and sandbox hardening are shifting from differentiators to requirements**: ZeroClaw’s focus on granular sandbox policies and WASM plugin runtimes, paired with growing plugin security work across all projects, reflects increasing user concern about agent execution safety as deployments move to production.
4. **Channel parity is a key user expectation**: Users now expect consistent behavior, feature sets, and UX across web, desktop, and messaging platforms (Telegram, Feishu, Discord, Matrix), creating significant engineering overhead for projects that support multiple channels.

For AI agent developers, these trends indicate that investing in session state reliability, multi-agent observability, and secure plugin ecosystems will yield the highest user value, while teams targeting enterprise use cases should prioritize multi-tenant architecture and fine-grained access controls early in development.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Weekly Project Digest (Week of 2026-09-07)

---

## 1. Last 7 Days' Overview
This week, the Hermes Agent project saw sustained high development activity, with 50 updated issues (48 open, 2 closed) and 50 updated pull requests (46 open, 4 merged/closed). The team delivered the major v0.21.0 "Pantheon Release", bringing ~2,100 closed issues and contributions from 760+ developers. Work is concentrated on core session reliability, gateway platform compatibility, delegation features, and developer experience improvements. The open-to-closed ratio indicates active feature development alongside ongoing bug triage, typical for a fast-growing AI agent framework.

---

## 2. Releases
### v2026.8.31: Hermes Agent v0.21.0 ("The Pantheon Release")
**Release Date:** August 31, 2026  
**Release Link:** [v2026.8.31](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.31)

This is a massive milestone release with:
- ~5,800 commits
- ~2,475 merged PRs
- ~5,680 files changed
- ~869,000 lines added, ~135,000 lines deleted
- ~2,100 issues closed
- 760+ contributors

**Breaking Changes & Migration Notes:**
While official migration documentation is not included in the provided data, the scale of changes (including 135k deletions) suggests users should test upgrades carefully, especially around:
- Cron job dispatch architecture (systemd restart-safe changes)
- Session state management
- Context compression logic
- Plugin tool registration paths

---

## 3. Project Progress
4 PRs were merged/closed this week, with key advancements:

1. **Delegation Infrastructure Foundation** ([#104299](https://github.com/NousResearch/hermes-agent/pull/104299), [#104373](https://github.com/NousResearch/hermes-agent/pull/104373) – referenced as merged base work)
   - Completed core completion unit architecture for delegation features
   - Serves as the foundation for the upcoming "ready dependency injection" feature

2. **Closed Checkpoint PRs (superseded):**
   - [#104426](https://github.com/NousResearch/hermes-agent/pull/104426) – Delegation inject delivery checkpoint, superseded by #104434
   - [#104419](https://github.com/NousResearch/hermes-agent/pull/104419) – Wrong-base delegation attempt, superseded by #104434

The majority of work remains in active development, with 46 open PRs progressing across performance, platform support, and core agent logic.

---

## 4. Community Hot Topics
Ranked by comment count and engagement:

### Top Issues
1. **Skills Index Staleness/Degradation** ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616)) – 169 comments
   - **Issue:** Automated freshness probe failed; skills index is 29.8h old (exceeds 26h limit)
   - **Underlying need:** Reliable automated documentation and skill index infrastructure; users depend on the Skills Hub for discoverability of agent capabilities
   - **Status:** Open, P3 priority, tagged with `sweeper:risk-automation`

2. **Bot Group Chats Persistence After Desktop Close** ([#97681](https://github.com/NousResearch/hermes-agent/issues/97681)) – 25 comments
   - **Issue:** Group chats should continue working across devices without keeping Desktop open
   - **Underlying need:** Decentralized multi-agent collaboration with session portability; users want bot groups that run independently on local servers/VPS
   - **Status:** Open, P2 priority, high community interest

3. **Email Session Isolation by Normalized Subject** ([#26277](https://github.com/NousResearch/hermes-agent/issues/26277)) – 9 comments, 2 👍
   - **Issue:** Add opt-in mode to isolate email sessions by subject line instead of sender
   - **Underlying need:** Better email workflow organization; users handle multiple concurrent projects via email
   - **Status:** Open, P3 priority

4. **Customizable Cron Response Templates** ([#73327](https://github.com/NousResearch/hermes-agent/issues/73327)) – 6 comments, 3 👍
   - **Issue:** Cron delivery wrapper is hardcoded; users want custom headers/footers
   - **Underlying need:** Branding and workflow customization for automated cron job outputs
   - **Status:** Open, P3 priority

### Top Active PRs
1. **Delegation Ready Dependency Injection** ([#104434](https://github.com/NousResearch/hermes-agent/pull/104434), [#76230](https://github.com/NousResearch/hermes-agent/pull/76230))
   - Implements real-time delegation result surfacing before parent decisions
   - High-priority feature addressing parallel agent workflow needs

2. **Streaming Secret Redaction Fix** ([#70093](https://github.com/NousResearch/hermes-agent/pull/70093))
   - Fixes credential leaks across stream boundaries on WhatsApp/Signal/WeCom
   - Critical security fix with cross-platform impact

3. **Unified Package Manager** ([#102765](https://github.com/NousResearch/hermes-agent/pull/102765))
   - Centralizes runtime pinning, tool installation, and dependency management
   - Major infrastructure improvement affecting all platforms

---

## 5. Bugs & Stability
Ranked by severity (P1 > P2 > P3):

### P1 Critical Bugs
| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#92837](https://github.com/NousResearch/hermes-agent/issues/92837) | Heartbeat ticks counted as fired but never delivered; wakes lost after agent-cache idle-evict | None open |
| [#42719](https://github.com/NousResearch/hermes-agent/issues/42719) | ACP-provided MCP tools registered but dropped from model requests | None open |
| [#104453](https://github.com/NousResearch/hermes-agent/issues/104453) | Restart-safe cron dispatch broken on systemd 249 (Ubuntu 22.04) – OOMPolicy=kill rejected | None open |
| [#104653](https://github.com/NousResearch/hermes-agent/issues/104653) | Inbound user turns persisted twice (gateway + agent flush); duplicate messages in history | ✅ [#104673](https://github.com/NousResearch/hermes-agent/pull/104673) |

### P2 High-Severity Bugs
| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#100302](https://github.com/NousResearch/hermes-agent/issues/100302) | Desktop DOM normalizer removes active caret node; typing stops on macOS | None open |
| [#104357](https://github.com/NousResearch/hermes-agent/issues/104357) | Discord cron attachments return 404 while text delivers fine | None open |
| [#104671](https://github.com/NousResearch/hermes-agent/issues/104671) | CLI background completion backlog creates one full agent turn per stale process | ✅ [#104686](https://github.com/NousResearch/hermes-agent/pull/104686) |
| [#104678](https://github.com/NousResearch/hermes-agent/issues/104678) | Anthropic Pro/Max billing failure latches permanently; requires manual auth reset | None open |
| [#94921](https://github.com/NousResearch/hermes-agent/issues/94921) | CLI Shift+letter types raw escape sequences on Ghostty terminal (modifyOtherKeys regression) | None open |
| [#104176](https://github.com/NousResearch/hermes-agent/issues/104176) | Inherited ContextCompressor summary overrides break on bypass_cooldown | None open |
| [#100836](https://github.com/NousResearch/hermes-agent/issues/100836) | `hermes doctor --fix` leaks DB connection; falsely detects live writer | None open |
| [#104666](https://github.com/NousResearch/hermes-agent/issues/104666) | codex_app_server never starts on Windows with npm-installed Codex (PATHEXT issue) | None open |

### Closed P2 Bugs (Fixed This Week)
1. [#99398](https://github.com/NousResearch/hermes-agent/issues/99398) – Preflight estimator double-charges `reasoning` field, inflating context ~42% and causing compaction loops
2. [#70328](https://github.com/NousResearch/hermes-agent/issues/70328) – Image token flat cost (1500) causes vision-heavy sessions to hit provider 400s before compaction fires

### Stability Assessment
Core session state management and gateway delivery are active pain points, with multiple P1/P2 bugs related to duplicate writes, lost heartbeats, and message delivery failures. Several critical bugs have in-progress fix PRs, indicating responsive maintenance.

---

## 6. Feature Requests & Roadmap Signals
### High-Likelihood Features for Next Release
Based on active PRs and community engagement:

1. **Delegation Ready Dependency Injection** ([#85648](https://github.com/NousResearch/hermes-agent/issues/85648), implemented in [#104434](https://github.com/NousResearch/hermes-agent/pull/104434))
   - Ready delegated results will surface before parent agent decisions
   - Multiple iterations already complete; appears close to merge

2. **Feishu Platform Improvements**
   - [#46361](https://github.com/NousResearch/hermes-agent/pull/46361) – Stable message UUID + stream chunk dedup
   - [#89929](https://github.com/NousResearch/hermes-agent/pull/89929) – Per-IP WS connect failover for DNS black holes
   - [#104684](https://github.com/NousResearch/hermes-agent/pull/104684) – DM top-level threads as sessions flag
   - Multiple mature PRs suggest expanding Feishu support is a priority

3. **Dashboard Performance Optimizations** ([#98205](https://github.com/NousResearch/hermes-agent/pull/98205))
   - Gzip compression for dashboard responses and trajectory storage
   - Non-breaking performance improvement, likely to ship soon

4. **macOS Dashboard LaunchAgent Management** ([#104022](https://github.com/NousResearch/hermes-agent/pull/104022))
   - First-class service lifecycle management for web dashboard
   - Implements requested feature [#44106](https://github.com/NousResearch/hermes-agent/issues/44106)

### Emerging Roadmap Signals
- **Unified Package Manager** ([#102765](https://github.com/NousResearch/hermes-agent/pull/102765)) – Major infrastructure change, likely further out but high impact
- **Channel Capabilities Context Injection** ([#104685](https://github.com/NousResearch/hermes-agent/pull/104685)) – Standardized behavioral adaptation per messaging platform
- **Credential Priority Management** ([#104638](https://github.com/NousResearch/hermes-agent/issues/104638)) – User control over credential pool ordering

---

## 7. User Feedback Summary
### Pain Points
1. **Session Reliability Issues**
   - Users report duplicate messages, lost heartbeats, and session state corruption across gateways
   - Cron jobs failing after v0.21.0 upgrade on Ubuntu 22.04 ([#104453](https://github.com/NousResearch/hermes-agent/issues/104453))
   - Background process notifications causing agent turn storms in CLI ([#104671](https://github.com/NousResearch/hermes-agent/issues/104671))

2. **Platform-Specific Frustrations**
   - Discord cron attachment failures ([#104357](https://github.com/NousResearch/hermes-agent/issues/104357))
   - Windows Codex runtime startup failures ([#104666](https://github.com/NousResearch/hermes-agent/issues/104666))
   - Feishu WebSocket connection hangs and message duplication ([#46361](https://github.com/NousResearch/hermes-agent/issues/46361), [#89929](https://github.com/NousResearch/hermes-agent/issues/89929))

3. **Credential Management Gaps**
   - Anthropic billing errors persist after quota reset ([#104678](https://github.com/NousResearch/hermes-agent/issues/104678))
   - No way to prioritize credentials in pool ([#104638](https://github.com/NousResearch/hermes-agent/issues/104638))
   - Request count tracking only works with `least_used` strategy ([#104637](https://github.com/NousResearch/hermes-agent/issues/104637))

### Positive Use Cases
- **Multi-Agent Group Collaboration** – Users are excited about bot group chats that run across devices ([#97681](https://github.com/NousResearch/hermes-agent/issues/97681))
- **Email Workflow Automation** – Users want advanced email session isolation for project management ([#26277](https://github.com/NousResearch/hermes-agent/issues/26277))
- **Delegated Review Workflows** – Parallel agent work with real-time result injection addresses complex task orchestration needs ([#85648](https://github.com/NousResearch/hermes-agent/issues/85648))

---

## 8. Backlog Watch
Long-standing important issues/PRs needing maintainer attention:

1. **Skills Index Watchdog Degradation** ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616)) – Created 2026-07-18, 169 comments
   - Critical documentation infrastructure issue open for ~7 weeks
   - High comment count indicates ongoing community impact
   - Needs automation engineering resources

2. **Email Session Isolation by Subject** ([#26277](https://github.com/NousResearch/hermes-agent/issues/26277)) – Created 2026-05-15, 9 comments, 2 👍
   - Open for ~4 months with clear use case
   - Low complexity, high value for email gateway users
   - Tagged `needs-decision`

3. **Authenticated Gateway Context for Plugins** ([#69882](https://github.com/NousResearch/hermes-agent/issues/69882)) – Created 2026-07-23, 2 comments
   - Security boundary feature needed for plugin ecosystem
   - Blocks plugin developers building authorization-dependent tools
   - Tagged `needs-decision`

4. **Dashboard React Crash (#520)** ([#45125](https://github.com/NousResearch/hermes-agent/issues/45125)) – Created 2026-06-12, 1 comment
   - Full dashboard crash on load affecting all tabs
   - Open for ~3 months with only 1 comment
   - May be under-triaged despite user impact

5. **Streaming Secret Redaction Fix** ([#70093](https://github.com/NousResearch/hermes-agent/pull/70093)) – Created 2026-07-23
   - Security-critical PR open for ~7 weeks
   - Affects multiple messaging platforms (WhatsApp, Signal, WeCom)
   - Needs review and merge to prevent credential leaks

---

**Project Health Assessment:** Hermes Agent is in a period of rapid expansion following the v0.21.0 release, with strong community engagement and active development across core features. While the open/closed ratio is high (indicating feature velocity), critical bug fix PRs are being developed responsively. Main focus areas for maintainers should be resolving the skills index automation failure, reviewing security-critical PRs, and addressing session state reliability issues.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Weekly Project Digest
*Report Date: 2026-09-07
*Project Repository: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Last 7 Days' Overview
The IronClaw project maintained high development velocity over the past week, with 42 updated issues (26 open/active, 16 closed) and 50 updated pull requests (25 open, 25 merged/closed). No new releases were published. Work focused heavily on WebUI design system consolidation, Telegram channel experience fixes, LLM prompt caching and tool schema reliability improvements, and subagent infrastructure hardening. Dependency maintenance remained a steady background priority, with multiple grouped version bump PRs opened and closed across Rust crates and GitHub Actions. Overall project health is strong, with balanced progress on both feature development, bug triage, and technical debt reduction.

---

## 2. Releases
No new releases were published in the last 7 days.

---

## 3. Project Progress
The following merged/closed PRs advanced core features and resolved known issues over the past week:
- **OpenAI prompt caching delivery** — [PR #8062](https://github.com/nearai/ironclaw/pull/8062) (merged): Implemented stable, domain-separated prompt-cache keys for all OpenAI-family and OpenAI-compatible request paths, addressing the cache hit rate collapse tracked in [Issue #7921](https://github.com/nearai/ironclaw/issues/7921).
- **Telegram onboarding and error clarity** — [PR #8054](https://github.com/nearai/ironclaw/pull/8054) (merged): Fixed unpaired Telegram users’ `/start` flow so first-contact behavior to return the connect/pairing notice instead of the command inventory (resolves [Issue #7956](https://github.com/nearai/ironclaw/issues/7956)). [PR #8073](https://github.com/nearai/ironclaw/pull/8073) (merged): Reworded Telegram personal-account setup failure messages to clarify admin misconfiguration instead of blaming the user (resolves [Issue #7955](https://github.com/nearai/ironclaw/issues/7955)).
- **WebUI component standardization** — Multiple merged PRs migrated native UI controls to shared design-system components across key surfaces: [PR #8017](https://github.com/nearai/ironclaw/pull/8017) (Extension Configure form/feedback), [PR #8018](https://github.com/nearai/ironclaw/pull/8018) (SettingsField controls), [PR #8019](https://github.com/nearai/ironclaw/pull/8019) (Automations status banners), [PR #8020](https://github.com/nearai/ironclaw/pull/8020) (Workspace/Logs search filters).
- **TypeScript technical debt reduction** — Three related cleanup initiatives closed out: [PR #8033](https://github.com/nearai/ironclaw/pull/8033), [PR #8035](https://github.com/nearai/ironclaw/pull/8035), [PR #8036](https://github.com/nearai/ironclaw/pull/8036) removed redundant `@ts-nocheck` directives from production components, test infrastructure, and passing files, with CI ratcheting to prevent regressions.
- **GitHub extension performance** — The `list_repos` payload bloat issue ([Issue #7986](https://github.com/nearai/ironclaw/issues/7986)) was resolved by closing the issue after remediation to reduce 519KB single-call payloads.
- **Dependency updates** — Multiple grouped dependency PRs closed including [PR #8049](https://github.com/nearai/ironclaw/pull/8049) (19 Rust crate updates), [PR #7835](https://github.com/nearai/ironclaw/pull/7835) (5 GitHub Actions updates), [PR #7020](https://github.com/nearai/ironclaw/pull/7020) (tokio-tungstenite upgrade) were merged to keep the dependency tree current.

---

## 4. Community Hot Topics
Ranked by comment activity across issues and PRs with the highest discussion volume:
1. **Design system epic re-scoping and roadmap alignment** — [Issue #7038](https://github.com/nearai/ironclaw/issues/7038) (3 comments, closed), [Issue #7781](https://github.com/nearai/ironclaw/issues/7781) (2 comments, open), [Issue #7042](https://github.com/nearai/ironclaw/issues/7042) (2 comments, open): The team reorganized the 5-phase WebUI design system program into three clearly bounded epics, with Phase 1 complete, Phases 2–3 consolidated under #7781, and Phases 4–5 tracked in [Issue #7782](https://github.com/nearai/ironclaw/issues/7782). Underlying need: align UI/UX workstreams, clarify ownership, and stage governance of the UI refresh.
2. **Persistent per-user sandboxed executor architecture spike** — [Issue #7903](https://github.com/nearai/ironclaw/issues/7903) (2 comments, open): Explores moving the full agent loop inside a persistent per-user sandbox behind the trusted host kernel, to reduce host-to-sandbox plumbing overhead for new CLI tools while preserving authority boundaries. Underlying need: improve extensibility and performance for agent execution environments without sacrificing security.
3. **MCP egress error diagnosability** — [Issue #8009](https://github.com/nearai/ironclaw/issues/8009) (1 comment, open): Reports that `mcp_http_error` collapses all failures to a generic `"response_error"` token, making hosted MCP discovery failures impossible to debug. Underlying need: better observability and debugging for MCP integration failures. A fix is in progress via [PR #8077](https://github.com/nearai/ironclaw/pull/8077).

---

## 5. Bugs & Stability
Bugs reported or regressions reported in the last 7 days, ranked by estimated severity:
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|-----------|
| High | [Issue #7921](https://github.com/nearai/ironclaw/issues/7921) | OpenAI-family backends send no `prompt_cache_key`, causing cache-hit rates to collapse from ~82% to 29% past ~200 calls | **Fixed** via [PR #8062](https://github.com/nearai/ironclaw/pull/8062) (merged) |
| High | [Issue #7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` rebuilds tool schemas from a whitelist, silently discarding non-forbidden top-level constraints | Open, no PR yet |
| High | [Issue #8041](https://github.com/nearai/ironclaw/issues/8041) | Incorrect `FailureKind` classification sends the model down unrecoverable paths when tools fail | Open, no PR yet |
| Medium | [Issue #8009](https://github.com/nearai/ironclaw/issues/8009) | MCP egress errors flatten to `"response_error"`, hiding root causes | **In progress** via [PR #8077](https://github.com/nearai/ironclaw/pull/8077) (open) |
| Medium | [Issue #8074](https://github.com/nearai/ironclaw/issues/8074) | Paired users in disconnected shared channels get unpaired-user connect notice copy | **In progress** via [PR #8076](https://github.com/nearai/ironclaw/pull/8076) (open) |
| Medium | [Issue #8025](https://github.com/nearai/ironclaw/issues/8025) | Special characters in input fields are stripped or cause errors, potentially related to recent encoding changes | Open, no PR yet |
| Low | [Issue #8066](https://github.com/nearai/ironclaw/issues/8066) | Command result cards collapse to horizontal lines when results accumulate | **In progress** via [PR #8071](https://github.com/nearai/ironclaw/pull/8071) (open) |
| Low | [Issue #8065](https://github.com/nearai/ironclaw/issues/8065) | Slash-command menu metadata misaligned, reducing scanability | **In progress** via [PR #8070](https://github.com/nearai/ironclaw/pull/8070) (open) |
| Low | [Issue #7956](https://github.com/nearai/ironclaw/issues/7956) | Unpaired Telegram `/start` returns command inventory instead of pairing notice | **Fixed** via [PR #8054](https://github.com/nearai/ironclaw/pull/8054) (merged) |
| Low | [Issue #7955](https://github.com/nearai/ironclaw/issues/7955) | Telegram personal-account linking shows generic error when admin hasn’t configured API credentials | **Fixed** via [PR #8073](https://github.com/nearai/ironclaw/pull/8073) (merged) |

---

## 6. Feature Requests & Roadmap Signals
The following feature requests and roadmap items gained traction this week, with high likelihood of landing in the v1.4.0 release or near-term milestones:
- **Design System Phases 2–3** ([Issue #7781](https://github.com/nearai/ironclaw/issues/7781) (tagged `v1.4.0`): `DESIGN.md` governance, theme update, and full UI reskin, with multiple supporting component migration PRs already merged.
- **WebUI UX refinements**: Command result card dismissal ([Issue #8064](https://github.com/nearai/ironclaw/issues/8064)), active-command visibility in menus ([Issue #8063](https://github.com/nearai/ironclaw/issues/8063)), and consistent metadata alignment ([Issue #8065](https://github.com/nearai/ironclaw/issues/8065)) — all small, high-impact polish items with active PRs in flight.
- **Subagent resilience improvements**: Boot/periodic sweeps for stranded background deliveries ([PR #8067](https://github.com/nearai/ironclaw/pull/8067)) and concurrent-children caps ([PR #8061](https://github.com/nearai/ironclaw/pull/8061)) are core infrastructure work nearing completion.
- **Prompt budget accuracy** ([Issue #8057](https://github.com/nearai/ironclaw/issues/8057)): Request to account for non-transcript prompt material (identity, skills, tool schemas) in the context budget, directly related to ongoing LLM reliability work.
- **Telegram Bot API command menu** ([PR #8072](https://github.com/nearai/ironclaw/pull/8072)): Registers declared commands in Telegram’s built-in menu at activation, a channel experience improvement aligned with recent Telegram workstream.

---

## 7. User Feedback Summary
Pain points and use cases surfaced from issue reports and PR context:
1. **Debuggability gaps**: Users and operators report consistent difficulty diagnosing failures across MCP egress, tool schema constraints, and failure classification — errors are too generic ([Issue #8009](https://github.com/nearai/ironclaw/issues/8009), [Issue #7987](https://github.com/nearai/ironclaw/issues/7987), [Issue #8041](https://github.com/nearai/ironclaw/issues/8041)).
2. **Channel onboarding friction**: Telegram users encounter confusing or incorrect messaging during first contact, pairing, and setup — especially when admin configuration is missing ([Issue #7956](https://github.com/nearai/ironclaw/issues/7956), [Issue #7955](https://github.com/nearai/ironclaw/issues/7955), [Issue #8074](https://github.com/nearai/ironclaw/issues/8074)).
3. **WebUI usability friction**: Accumulating command result cards, misaligned menus, and native controls inconsistent with the design system degrade the chat experience ([Issue #8066](https://github.com/nearai/ironclaw/issues/8066), [Issue #8065](https://github.com/nearai/ironclaw/issues/8065), [Issue #8064](https://github.com/nearai/ironclaw/issues/8064)).
4. **Performance concerns**: GitHub extension payload bloat and OpenAI cache hit decay drive cost and latency for heavy users ([Issue #7986](https://github.com/nearai/ironclaw/issues/7986), [Issue #7921](https://github.com/nearai/ironclaw/issues/7921)).
No explicit satisfaction/dissatisfaction scores were reported in the provided data, but the rapid closing of high-impact bugs and UX issues suggests responsive maintenance.

---

## 8. Backlog Watch
Longstanding or high-impact items awaiting maintainer attention, with no recent resolution or active PR:
- [Issue #7903](https://github.com/nearai/ironclaw/issues/7903): Persistent per-user sandboxed executor decision spike (created 2026-08-26, 2 comments): A high-stakes architecture decision with broad impact on extensibility vs. security boundaries; needs maintainer alignment before implementation proceeds.
- [Issue #7782](https://github.com/nearai/ironclaw/issues/7782): Design System Phases 4–5 — agentic interactions, components & information architecture (created 2026-08-20, 1 comment): Long-horizon epic with no active PRs yet; requires scoping and prioritization after Phases 2–3.
- [Issue #7890](https://github.com/nearai/ironclaw/issues/7890): Retire the app.css Tailwind colour-alias compat layer (created 2026-08-25, 1 comment): Technical debt blocking the WS3b reskin, no linked PRs or recent activity.
- [PR #7834](https://github.com/nearai/ironclaw/pull/7834): Wasm group dependency bump (created 2026-08-23, open): Long-open medium-risk dependency update with no comments or merge movement, needs review or triage.
- [Issue #7987](https://github.com/nearai/ironclaw/issues/7987): Tool schema `flatten_top_level` silent constraint discard (created 2026-08-28, 1 comment): High-severity correctness bug with no active fix PR, risking silent schema corruption for tool definitions.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Weekly Project Digest | 2026-09-07

## 1. Last 7 Days' Overview
QwenPaw maintained high development velocity over the past 7 days, with 50 updated issues (33 open/active, 17 closed) and 50 updated pull requests (33 open, 17 merged/closed). The project shipped 5 new releases, capped by the v2.2.0 stable launch, which introduced the long-awaited multi-tenant QwenPaw Hub and major QwenPaw Data module updates. Community engagement centered on the v2.2.0 rollout, with active discussion around team collaboration features, multi-agent workflow reliability, and cross-channel consistency. Overall project health remains strong: the maintainer team is closing bugs rapidly, integrating first-time contributor fixes quickly, and aligning development priorities with user-reported pain points.

## 2. Releases
Five new versions shipped this week, building toward the stable v2.2.0 release:
- **v2.2.0 (stable)**
  - Key additions:
    - Self-hosted multi-user QwenPaw Hub supporting local-process or Docker runtimes, workspace-level access controls, credential management, and reverse-proxy support ([#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112))
    - QwenPaw Data module expansion (partial changelog available in release notes)
  - Breaking changes/migration notes: The `ModelInfo.max_tokens` field was migrated to `max_output_length` across the codebase; custom provider configurations using the old `max_tokens` key will fail to load and must be updated.
- **v2.2.0-beta.7**: Fixed backend-specific embedding dimension normalization in the memory module; added dark-mode style overrides for the web UI.
- **v2.2.0-beta.6**: Bundled ReMe entry-point plugins for desktop builds; expanded console unit tests by 617 cases (+10.61pp statement coverage).
- **v2.2.0-beta.5**: Made channel contract checks portable and complete; scoped and explicitized embedding reindexing in memory.
- **v2.2.0-beta.4**: Bounded oversized single-line tool results in context processing; unified desktop UI entry-point behavior.

## 3. Project Progress
Closed/merged PRs and major feature advances this week:
1. **QwenPaw Hub launch** ([#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)): Delivered the first production-ready multi-tenant Hub, addressing top community requests for team deployment capabilities.
2. **Memory module stabilization**: Merged fixes for embedding dimension normalization ([#7465](https://github.com/agentscope-ai/QwenPaw/pull/7465)) and explicit embedding reindexing ([#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133)), reducing data corruption risks.
3. **Desktop build reliability**: Fixed custom provider loading regressions and bundled ReMe plugins correctly in installers ([#7458](https://github.com/agentscope-ai/QwenPaw/pull/7458)).
4. **Test coverage expansion**: Grew console unit test coverage by 10.61 percentage points via 617 new test cases ([#7452](https://github.com/agentscope-ai/QwenPaw/pull/7452)), improving regression detection.
5. **Context management optimization**: Implemented bounds for oversized single-line tool results to prevent context window overflow ([#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331)).

## 4. Community Hot Topics
The most actively discussed issues and PRs, ranked by comment count:
1. **QwenPaw Hub roadmap discussion** ([#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) · 23 comments · 3 👍)
   - Topic: Maintainers solicited community feedback on the next priorities for the newly launched multi-tenant Hub.
   - Underlying need: Teams adopting QwenPaw for organizational use are seeking fine-grained permission controls, shared skill libraries, and centralized usage analytics beyond the initial Hub feature set.
2. **LAN LLM server client disconnect failures** ([#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) · 12 comments)
   - Topic: Users reported frequent client disconnects and retry timeouts when connecting to local LM Studio servers over LAN.
   - Underlying need: More robust network retry logic, configurable timeouts, and better support for self-hosted LLM endpoints with unstable network conditions.
3. **Multi-step task silent stalling** ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) · 12 comments · Closed)
   - Topic: Agents would stop execution without visible feedback after planning multi-step sub-tasks, requiring users to manually prompt "continue".
   - Underlying need: More reliable agent execution loops with built-in resumption logic and transparent progress indicators for long-running tasks.
4. **Multi-agent progress polling gap** ([#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) · 8 comments)
   - Topic: Parent agents do not proactively check child agent task status, leaving workflows stalled until users manually query progress.
   - Underlying need: Native event-driven or scheduled child agent status polling to enable autonomous end-to-end multi-agent task execution.
5. **409 error for in-task new messages** ([#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) · 5 comments)
   - Topic: Sending new messages or files during an active task returns a 409 error instead of queueing the input.
   - Underlying need: A native message queue system that lets users add inputs mid-task without interrupting running workflows.

## 5. Bugs & Stability
Bugs reported this week, ranked by severity:
1. **Critical: Context loss leading to agent behavior corruption**
   - Issues: [#7584](https://github.com/agentscope-ai/QwenPaw/issues/7584), [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579)
   - Description: Model replies are persisted to storage but missing from subsequent request contexts, causing agents to forget recent outputs, repeat actions, and fall into infinite tool-call loops.
   - Fix status: No merged fix as of digest time; under active investigation.
2. **Critical: Stuck Feishu session queue consumers**
   - Issue: [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)
   - Description: A single stuck high-priority message consumer blocks all subsequent messages for a Feishu session, rendering the chat unresponsive without error logs.
   - Fix status: Fix PR open ([#7547](https://github.com/agentscope-ai/QwenPaw/pull/7547)) that recovers wedged consumers and prevents deadlocks.
3. **High: Web UI task stop does not halt backend execution**
   - Issue: [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) · Closed for review
   - Description: Clicking "stop" in the web UI removes the frontend progress indicator but leaves the backend task running, leading to 409 errors on subsequent requests.
   - Fix status: Root cause confirmed; fix in progress for frontend-backend stop synchronization.
4. **High: Synchronous calls block event loop, timeout失效**
   - Issue: [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363)
   - Description: Desktop app freezes for 118–135s on startup and ~126s per message, as synchronous calls block the async event loop and configured timeouts do not trigger.
   - Fix status: No merged fix; root cause identified as blocking I/O in the desktop runtime bootstrap.
5. **Medium: DeepSeek model context compression errors**
   - Issue: [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541)
   - Description: Scroll context compression injects `[context compressed]` blocks with `role=user` instead of `role=system`, causing DeepSeek API to throw execution errors.
   - Fix status: Workaround available (disable scroll compression); no official fix merged.

## 6. Feature Requests & Roadmap Signals
Top user-requested features with high likelihood of inclusion in upcoming releases:
1. **Workspace-scoped skill preload policy** ([#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) · Closed as accepted): Let workspaces mark specific skills for preload instead of on-demand discovery, reducing first-turn tool-call overhead. High probability of landing in v2.2.1.
2. **Blocking child agent wait tool** ([#7580](https://github.com/agentscope-ai/QwenPaw/issues/7580)): Add a built-in tool for parent agents to block until child agent tasks complete, replacing unreliable polling via `check_agent_task`. Aligns with ongoing multi-agent reliability work; likely in v2.3.
3. **Skill versioning and dependency metadata** ([#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557)): Add version tags and dependency declarations to skills for easier updates across workspaces. Aligns with Hub team collaboration roadmap; likely in v2.3.
4. **Advisor Mode** (PR [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569)): A new loop mode pairing a strong "advisor" model with a cheaper "worker" model to improve output quality while reducing cost. PR already in active development; strong candidate for v2.2.1.
5. **Make Skill v2 workflow** (PR [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509)): Approval-driven, script-based skill creation workflow with draft-then-publish flow. Marked "Ready for Merge"; likely to land in the next minor release.

## 7. User Feedback Summary
### Key Pain Points
- **Multi-agent workflow opacity**: Users report frequent unplanned stalls in parent-child agent setups, with no built-in progress tracking or automatic resumption ([#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450), [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)).
- **Context reliability concerns**: Multiple users reported unexpected context loss leading to agent amnesia and broken workflows, eroding trust in long-running task execution ([#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579), [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)).
- **Cross-channel inconsistency**: Users expect uniform session behavior and features across web, desktop, Telegram, and Feishu channels, but currently face divergent UX and missing features per channel ([#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541), [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585), [#7586](https://github.com/agentscope-ai/QwenPaw/issues/7586)).
- **v2.2.0 UI regressions**: Users criticized the removal of the direct path input for working directories, calling the new file picker cumbersome for deep directory structures ([#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588)).

### Notable Use Cases
- Enterprise teams deploying QwenPaw Hub for internal shared agent workspaces, with needs for access control and centralized skill management ([#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)).
- Plugin developers using QwenPaw for end-to-end code development and deployment workflows, requiring persistent memory for path and configuration preferences ([#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)).
- Content creators using the Creator plugin for media generation workflows, requiring scheduling and A/B comparison capabilities (PR [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486)).

### Satisfaction Signals
- Positive feedback on Feishu CardKit streaming output and the v2.2.0 Hub launch, with users actively contributing feature enhancements for both ([#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570), [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)).
- High community engagement with first-time contributors submitting targeted fixes for user-reported bugs, indicating a welcoming and active contributor ecosystem.

## 8. Backlog Watch
Long-standing or high-impact items requiring maintainer attention:
1. **Synchronous event loop blocking and timeout failure** ([#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) · Open for 11 days): Causes severe desktop app unresponsiveness on Windows; no dedicated fix PR assigned yet.
2. **DeepSeek scroll context compression incompatibility** ([#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) · Open for 40 days): Affects all DeepSeek users with long conversations; fix is straightforward (adjust compressed block role) but unaddressed.
3. **Configurable heartbeat timeout** (PR [#2134](https://github.com/agentscope-ai/QwenPaw/pull/2134) · Open for 5+ months): Highly requested feature for long-running tasks; PR is complete but has not been merged.
4. **MCP tool call timeout configuration** (PR [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) · Under review for 28 days): Needed for MCP tools with long execution times; review appears stalled.
5. **Injected context persistence bug** (PR [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) · Under review for 17 days): Fixes a bug where request-injected context leaks into permanent chat history; awaiting maintainer approval from a first-time contributor.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Weekly Project Digest (2026-09-07)
Repository: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Last 7 Days' Overview
This week saw high-volume, architecture-focused development activity for ZeroClaw, with 50 updated issues (39 open, 11 closed) and 50 updated PRs (44 open, 6 merged/closed). The community’s primary focus centered on runtime security hardening, cross-platform stability, and RFC governance streamlining, alongside a new feature release. The v0.8.5 launch marks a major milestone spanning 454 commits from 73 contributors, with core investments in connectivity, security boundaries, and operator experience. Overall project health is strong, with active maintainer engagement across high-severity bugs and strategic design discussions.

---

## 2. Releases
- **v0.8.5** ([Release Page](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.5))
  - A security, connectivity, and operator-experience release built from 454 contributions by 73 developers.
  - Key new components: ZeroRelay and ZeroRouter infrastructure for expanded transport and routing capabilities.
  - Core improvements: Extended live chat and provider integration support; hardened boundaries for plugins, sandboxes, webhooks, credentials, and file handling.
  - No breaking changes or migration notes were disclosed in the provided release summary.

---

## 3. Project Progress
The 6 merged/closed PRs and 11 closed issues this week advanced fixes, test coverage, and provider stability:
1.  **Platform & installation fixes**
    - Closed [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911): Resolved `install.sh` selecting a generic Linux binary on Android/Termux, fixing architecture detection for aarch64 Termux environments.
    - Closed [#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910): Added Windows runtime test coverage for self-update swap/rollback/sidecar paths, hardening the Windows update pipeline.
2.  **Provider reliability improvements**
    - Closed [#9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575): Switched OpenAI-compatible provider warmup from `/chat/completions` to `/models`, fixing invalid warmup request behavior.
3.  **Runtime & security refactors**
    - Closed [#9593](https://github.com/zeroclaw-labs/zeroclaw/issues/9593): Refactored background delegation to make `TaskRecord` the single lifecycle owner, eliminating duplicate status tracking.
    - Closed [#9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653): Fixed WASI HTTP plugin trust store gaps, aligning plugin egress with provider request behavior by reading OS trust roots.
    - Closed [#10048](https://github.com/zeroclaw-labs/zeroclaw/issues/10048): Completed Rust 1.98.0 validation for local CI, demo, and cross-platform release lanes ahead of v0.8.5.
4.  **Channel bug fixes**
    - Merged [#10487](https://github.com/zeroclaw-labs/zeroclaw/pull/10487): Fixed Matrix channel transcription provider resolution to pull from live configuration instead of a static construction-time snapshot.

---

## 4. Community Hot Topics
The most active discussions centered on foundational runtime architecture reworks and governance efficiency, indicating community prioritization of long-term maintainability and security:
1.  [#9487 RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (34 comments, open)
    - Core need: Redesign conversation session ownership to decouple transport lifecycles from agent execution, enabling more flexible channel and gateway integrations while hardening security boundaries.
2.  [#9488 RFC: Unified file and attachment architecture for conversation surfaces](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (27 comments, open)
    - Core need: Standardize file/attachment handling across all conversation channels to reduce duplicated code, improve security validation, and ensure consistent media behavior across platforms.
3.  [#6996 RFC: Granular sandbox policy - filesystem restrictions](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (25 comments, open)
    - Core need: Align application-layer path admission policies with OS-level sandbox backends (Bubblewrap, Landlock, Seatbelt) to eliminate drift and reduce agent filesystem risk exposure.
4.  [#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (24 comments, rollout in progress)
    - Core need: Streamline issue routing and maintainer workflow by formalizing work lanes and automated labeling, reducing manual triage overhead.
5.  [#7462 [Bug]: 74 test failures on Windows — Unix-only test commands, path semantics, console encoding](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (19 comments, in progress)
    - Core need: Achieve full Windows platform parity for the test suite, addressing cross-platform compatibility gaps that prevent reliable Windows builds.

---

## 5. Bugs & Stability
Reported bugs this week are concentrated in runtime reliability, platform compatibility, and channel behavior, ranked by severity:
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| S1 (Critical) | [#10230 Daemon startup/reload stack overflow during agent initialization](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | In progress | Not linked |
| S1 (Critical) | [#9421 Incomplete terminal responses reported as successful](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | In progress | [#9447 fix(anthropic): classify incomplete terminal responses](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) |
| S1 (Critical) | [#9191 Cron agent jobs lack wall-clock timeout; in-flight locks only cleared at process start](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | In progress | Not linked |
| S1 (Critical) | [#10533 `model_routing_config` rejects valid custom provider slots](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) | In progress | Not linked |
| S2 (Major) | [#7462 74 Windows test failures from Unix-only commands/path semantics](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | In progress | [#10668 fix(ci): scope Windows tests for locale resources](https://github.com/zeroclaw-labs/zeroclaw/pull/10668) (partial fix) |
| S2 (Major) | [#10302 ZeroCode Code pane stuck in Processing state during history browsing, high CPU usage](https://github.com/zeroclaw-labs/zeroclaw/issues/10302) | In progress | Not linked |
| S2 (Major) | [#10625 Internal `[media attachment]` placeholder delivered to users with non-vision models](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | Accepted | Not linked |

---

## 6. Feature Requests & Roadmap Signals
User-requested features this week align with the project’s trajectory of expanding channel capabilities, improving developer experience, and enhancing runtime observability. High-likelihood candidates for near-term releases include:
1.  **Persistent session prompt attachments** ([#10407 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)): SQLite-backed durable prompt attachments per session, with tooling for management and runtime injection. The feature is in active review and matches ongoing session architecture work.
2.  **Telegram agent progress visibility** ([#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426)): User-facing progress updates for long-running agent tasks on Telegram. This addresses a common user pain point for messaging channel integrations and aligns with active channel feature development.
3.  **Per-field cron schedule input (Web UI)** ([#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641)): Guided cron schedule inputs with validation and human-readable previews. This UX improvement has been accepted and is low-risk to implement.
4.  **Delegate sub-agent progress exposure** ([#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)): Visibility into sub-agent execution progress for parent agents and end users. This ties to ongoing delegation architecture refactors and is a high-demand observability feature.
5.  **Composable WASM plugin runtime** ([#10076 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)): Standardized WASM plugin APIs and typed extension points. This is a longer-term roadmap item with active design discussion, expected to land in a future minor release after RFC ratification.

---

## 7. User Feedback Summary
Concrete user pain points and use cases from this week’s issues and PRs:
- **Cross-platform installation friction**: Users running ZeroClaw on Android/Termux reported broken architecture detection in the install script ([#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)), highlighting demand for first-class alternative platform support.
- **Messaging channel UX gaps**: Telegram users reported that long-running agent tasks appear stalled with no progress updates ([#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426)), and Matrix/Discord users requested consistent media and transcription behavior across channels.
- **Cron job reliability concerns**: Operators reported unkillable stuck cron jobs and lock leaks after daemon crashes ([#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191)), pointing to a need for stronger job lifecycle guarantees for production deployments.
- **Configuration usability**: Users struggled with raw cron expression inputs in the web UI ([#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641)) and unexpected validation failures for custom provider slots in routing configs ([#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533)).
- **Windows developer experience**: Contributors on Windows reported widespread test failures and platform-specific bugs ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)), creating barriers for Windows-based developers to contribute to the project.

---

## 8. Backlog Watch
Long-running high-priority items awaiting maintainer action or resolution:
1.  [#6996 RFC: Granular sandbox policy - filesystem restrictions](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (created 2026-05-28, 25 comments): A high-risk security RFC open for over 3 months, still in progress with no final ratification, blocking aligned sandbox hardening work.
2.  [#7462 Windows test suite failures](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (created 2026-06-10, 19 comments): A P1 platform parity bug open for 3 months with ongoing work but no full resolution, limiting Windows support reliability.
3.  [#9109 Native Hailo-Ollama provider support PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) (created 2026-07-17, `do-not-merge` label): A large feature contribution for edge hardware support that has been open for nearly 2 months awaiting final review and merge clearance.
4.  [#8692 Maintainer decision queue for RFCs](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) (created 2026-07-04, 15 comments): A governance tracker for design decision backlog that remains open, indicating ongoing bottlenecks in RFC review throughput.
5.  [#9378 Persist failed/cancelled ACP turn transcripts PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9378) (created 2026-07-26, stale-candidate): A bug fix for session persistence that has been open for over 6 weeks and is marked as a stale candidate, risking loss of contributor work.


</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*