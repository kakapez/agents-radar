# OpenClaw Ecosystem Weekly Digest 2026-10-12

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-12 02:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Weekly Project Digest | 2026-10-12
*Data sourced from [openclaw/openclaw](https://github.com/openclaw/openclaw) | Reporting period: 2026-10-05 to 2026-10-12*

---

## 1. Last 7 Days' Overview
OpenClaw maintained high development velocity this week, with 500 updated issues (344 open/active, 156 closed) and 500 updated pull requests (328 open, 172 merged/closed), reflecting active bug triage, feature development, and release preparation. The project shipped 5 new releases including a stable v2026.10.1 version built from 3,055 commits by 402 contributors, alongside beta builds focused on update system hardening. Core stability and runtime performance remained the top community priorities, with multiple P0 memory leak, crash, and update-blocker bugs driving discussion and fix work. Updater reliability improvements were a cross-cutting theme, with both release highlights and multiple closed issues/PRs focused on resolving edge cases that left installations stranded. Overall project health is robust, with active maintainer engagement on high-severity issues and steady progress on frontend, sandboxing, and plugin ecosystem features.

---

## 2. Releases
### 5 new releases shipped this week:
1. **[v2026.10.1 (stable)](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1)**
   - Scale: 3,055 commits, 2,425 pull requests, 402 contributors
   - Full release notes and changelog available via the [official docs portal](https://docs.openclaw.ai/release)
   - Represents the primary stable October release with broad feature and bugfix coverage

2. **[v2026.10.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.1)**
   - Core highlight: **Safer update system** – completes reliably across cross-device installs, different filesystems, Windows elevation scenarios, and interrupted activations
   - Adds recovery from stale leases and changed evidence states that previously blocked future updates or stranded installations
   - Tied to PRs #164636, #164769, #165257, #165863

3. **[v2026.10.1-beta.2 (hotfix beta)](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.2)**
   - Hotfix build covering 40 intervening commits since v2026.10.1-beta.1
   - Focus areas: updates and documentation fixes (full changelog truncated in source data)

4. **[v2026.10.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.1)**
   - First beta of the October release cycle, built on top of v2026.9.8
   - Key highlight: Code Mode keyboard shortcut improvements (full notes truncated in source data)

5. **[v2026.9.9 (stable patch)](https://github.com/openclaw/openclaw/releases/tag/v2026.9.9)**
   - Scale: 185 commits, 112 pull requests, 92 contributors
   - Patch release for the September stable branch with bug and security fixes
   - Release notes: [docs.openclaw.ai/releases/2026](https://docs.openclaw.ai/releases/2026)

*No breaking changes or migration warnings were explicitly called out in the available release note snippets; users upgrading from 2026.9.x should reference the full v2026.10.1 changelog for compatibility details.*

---

## 3. Project Progress
Of 172 merged/closed PRs this week, key advances span core reliability, developer experience, and new feature work:
### Updater & Installation Fixes (merged/closed)
- **LXC container update failure resolved**: Fixed `FICLONE EPERM` errors that blocked updates in unprivileged Proxmox LXC containers where seccomp blocks ioctl calls ([Issue #164113](https://github.com/openclaw/openclaw/issues/164113), closed)
- **Update block recovery fixes**: Resolved multiple edge cases where updates were permanently blocked by stale handoff leases, deleted temporary databases, or changed identity records, aligned with the v2026.10.5-beta.1 safer-updates work ([Issue #167771](https://github.com/openclaw/openclaw/issues/167771), [Issue #167506](https://github.com/openclaw/openclaw/issues/167506), both closed)
- **Heap policy conflict fixed**: Resolved a bug where explicit `--max-old-space-size` flags silently overrode per-worker resource limits in managed gateways ([Issue #157630](https://github.com/openclaw/openclaw/issues/157630), [Issue #157575](https://github.com/openclaw/openclaw/issues/157575), both closed)

### Runtime & Session Reliability Fixes
- **Worker lifecycle crash fixed**: Resolved clean shutdown failures where `gateway-server-close` threw "Worker environment inventory has closed" errors and left systemd units in failed state ([Issue #158126](https://github.com/openclaw/openclaw/issues/158126), closed)
- **MCP computer tool lease fix**: Fixed a bug where the computer tool never released execution keys, leaving permanent `COMPUTER_HOST_BUSY` errors ([Issue #147420](https://github.com/openclaw/openclaw/issues/147420), closed)
- **SSRF guard DNS timeout fix**: Resolved a conflict between the SSRF guard's pinned DNS dispatcher and Node.js `autoSelectFamily` that caused 120-second model fetch timeouts ([Issue #87763](https://github.com/openclaw/openclaw/issues/87763), closed)
- **Runtime context carrier serialization fix**: Fixed a bug where hidden `display:false` internal context was incorrectly serialized as trailing user-role messages on every model request ([Issue #123265](https://github.com/openclaw/openclaw/issues/123265), closed)

### Feature Advances (in active development, targeting future releases)
- **MicroVM sandboxing**: New [PR #169534](https://github.com/openclaw/openclaw/pull/169534) adds support for running sandboxed tools in local smol machine microVMs, offering kernel-level isolation without Docker/Podman
- **Solid UI rewrite**: [PR #168612](https://github.com/openclaw/openclaw/pull/168612) ports the Control UI app shell and core routes from Lit to Solid, targeting improved frontend performance
- **OpenShell brokered inference**: [PR #168458](https://github.com/openclaw/openclaw/pull/168458) adds support for running sandboxed node inference behind OpenShell's credential broker
- **Local TTS voice selection**: [PR #165648](https://github.com/openclaw/openclaw/pull/165648) enables voice declaration and selection for the `tts-local-cli` provider, supporting backends like Kokoro and Piper

---

## 4. Community Hot Topics
### Top 3 Most Active Issues (by comment count)
1. **[#143524: Agent SQLite WAL grows to 1.4–2.8 GB in days, blocks gateway startup (Windows)](https://github.com/openclaw/openclaw/issues/143524)**
   - Status: Open | P0 | 122 comments | 0 👍
   - Analysis: The highest-engagement issue by a wide margin, this bug affects Windows users on 2026.9.2/9.3 where SQLite WAL files grow unbounded despite checkpoint settings, eventually preventing the gateway from starting. The high comment volume indicates broad user impact and ongoing active debugging between reporters and maintainers, with no fix PR merged as of this week.

2. **[#91588: Critical Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days, OOM crashes](https://github.com/openclaw/openclaw/issues/91588)**
   - Status: Open | P0 | 38 comments | 1 👍
   - Analysis: A long-running critical stability issue with consistent community engagement. The leak causes the gateway process to consume 10–40x its baseline memory over 2-3 days, triggering repeated OOM kills and restart cycles. The underlying need is robust runtime memory management for long-running gateway deployments, a top pain point for self-hosted users.

3. **[#97616: OpenClaw leaks unreaped hook/tool child processes, zombie accumulation](https://github.com/openclaw/openclaw/issues/97616)**
   - Status: Open | P1 | 18 comments | 1 👍
   - Analysis: A process lifecycle bug where `openclaw-hooks`, `bash`, `codex`, and other child processes from tool/hook execution accumulate as zombies over time, degrading runtime performance. The 18 comments reflect shared frustration with resource leaks across different tool backends, and the issue is tagged as needing live reproduction to finalize a fix.

### Key Active PR Themes
Updater reliability fixes dominate recent PR activity, with 6+ related PRs opened this week addressing edge cases in update history writes, config read errors, deadline handling, and retained runtime cleanup. This aligns directly with the v2026.10.5-beta.1 safer-updates release focus, indicating the community and maintainers are prioritizing update robustness as a core quality metric.

---

## 5. Bugs & Stability
Ranked by severity (P0 > P1 > P2), with fix PR status noted:

### P0 (Critical) Bugs
| Issue | Description | Status | Fix PR Exists? |
|-------|-------------|--------|----------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL unbounded growth on Windows, blocks gateway startup | Open | No (needs maintainer review) |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak → 15.5GB RSS, OOM crashes | Open | No (needs maintainer review) |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway crash: "Worker environment inventory has closed" unhandled rejection in reconcileActive | Open | No (needs live repro) |
| [#155191](https://github.com/openclaw/openclaw/issues/155191) | Native memory leak: 1 GiB RSS growth per 30s, V8 heap stable (2026.9.5) | Open | No (needs more info) |
| [#139082](https://github.com/openclaw/openclaw/issues/139082) | Update post-restart health check false-negative, leaves gateway stopped | Open | No (needs more info) |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | Updates permanently blocked by recovery interlock, no repair path | Closed | Resolved in v2026.10.5-beta.1 |
| [#164113](https://github.com/openclaw/openclaw/issues/164113) | Update fails with FICLONE EPERM in unprivileged LXC containers | Closed | Fixed |

### P1 (High) Regressions & Key Bugs
- **2026.10.1 startup regression on Windows**: Start time increased from ~410s to ~1030s, with `sidecars.control-ui-assets` blocking for 477s ([#168955](https://github.com/openclaw/openclaw/issues/168955), open, no fix PR)
- **Session reply loss bug**: Replies lost with "no active tool authority snapshot" when a second run displaces an in-flight turn (2026.9.4 regression) ([#148707](https://github.com/openclaw/openclaw/issues/148707), open, no fix PR)
- **Plugin source capture SSD wear**: Rewrites 1.1–1.4 GB per CLI command / 6.5 GB per gateway start, no reuse of cached binaries ([#157989](https://github.com/openclaw/openclaw/issues/157989), open, no fix PR)
- **Claude CLI config path bug**: Ignores `CLAUDE_CONFIG_DIR`, causes missing transcript resets ([#145309](https://github.com/openclaw/openclaw/issues/145309), open, linked PR open)
- **Byte-triggered compaction failure**: Failed compaction suppresses retries, lets transcripts grow to 150x the size limit ([#166665](https://github.com/openclaw/openclaw/issues/166665), open, no fix PR)

### Notable Stability Trends
Memory-related bugs (heap leaks, native leaks, WAL file bloat) represent the largest category of high-severity open issues, particularly affecting long-running gateway deployments. Multiple update-system bugs were closed this week, indicating focused progress on that front, but runtime memory and process lifecycle issues remain the biggest stability risk for users.

---

## 6. Feature Requests & Roadmap Signals
### Top User-Requested Features (from open enhancement/feature issues)
1. **[#74481: Dynamic model catalog refresh from provider /v1/models endpoints](https://github.com/openclaw/openclaw/issues/74481)**
   - 1 👍 | Open | P2
   - Request: Auto-populate the model picker from configured provider APIs instead of using a hardcoded list, to support proxy deployments and custom model endpoints.
   - Roadmap likelihood: **High** – the issue is tagged as diamond lobster (high priority) with source reproduction available, and aligns with the project's multi-provider strategy. A PR is likely in active planning.

2. **[#14785: Reduce tool schema token overhead (~3,500 tok/session)](https://github.com/openclaw/openclaw/issues/14785)**
   - 0 👍 | Open | P2
   - Request: Cut the fixed 3,500-token per-session cost of loading full tool JSON schemas, by lazy-loading or compressing schema data.
   - Roadmap likelihood: **Medium-High** – cost optimization is a recurring theme, and [PR #169483](https://github.com/openclaw/openclaw/pull/169483) (slim skills prompt) is a related active PR that follows the same pattern of reducing prompt overhead.

3. **[#111143: Pin plugin tabs in Control UI sidebar](https://github.com/openclaw/openclaw/issues/111143)**
   - 1 👍 | Open | P3
   - Request: Let users pin frequently used plugin tabs to the sidebar, instead of hiding them in the "More" menu.
   - Roadmap likelihood: **Medium** – the ongoing Solid UI rewrite ([#168612](https://github.com/openclaw/openclaw/pull/168612)) may create an opportunity to implement this as part of UX improvements, though it is currently low priority.

### Emerging Feature Signals from Active PRs
Features likely to land in the next beta/stable release:
- Smol machine microVM sandboxing for local tool isolation
- Session-specific public link preview cards
- Browser policy inspection and native policy setup tools
- Consolidated agent runtime and worktree bookkeeping (performance refactor)

---

## 7. User Feedback Summary
### Key Pain Points (from issue reports)
1. **Long-term running stability is the top frustration**: Multiple users report abandoning deployments due to unmanageable memory leaks, crashes, and resource bloat. One user explicitly noted they tore down their DigitalOcean droplet because "costs aren't worth it for the experience" ([#88087](https://github.com/openclaw/openclaw/issues/88087)).
2. **Update reliability erodes trust**: Multiple reports of permanently blocked updates with no self-service repair path left users stranded on old versions, driving urgent bug reports and demanding immediate maintainer attention.
3. **Windows performance regressions**: The v2026.10.1 startup slowdown (2.5x slower) and SQLite WAL bloat issues disproportionately affect Windows users, who represent a significant portion of the desktop user base.
4. **Plugin ecosystem overhead**: Excessive disk writes from plugin source capture and missing tool catalog entries for scheduled runs create both performance issues and functional gaps for plugin-heavy deployments.

### Positive Signals
- The rapid resolution of LXC container update failures and update block edge cases demonstrates responsive maintainer action on user-reported blockers.
- Active work on sandboxing alternatives (microVMs, OpenShell brokered inference) shows the project is expanding deployment options to meet user security and isolation needs.
- The 402 contributors to v2026.10.1 indicate a thriving, broad contributor base.

### Use Cases Ref

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source AI Agent Ecosystem Comparison Report | 2026-10-12
---

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is in a phase of rapid maturation, with projects balancing core stability hardening, feature expansion, and deployment flexibility to meet demand from individual power users, self-hosted teams, and enterprise deployments. Across all tracked projects, runtime reliability (memory management, session persistence, and error recovery) and update system robustness remain the most universally cited user pain points, while work on sandboxing, multi-provider support, and plugin ecosystems signals a push toward production-grade security and extensibility. The landscape spans from large, high-velocity core platforms to smaller, specialized tools, with growing alignment on standard components like MCP (Model Context Protocol) integration, multi-channel deployment, and cross-session memory as baseline expectations for competitive agent runtimes. Community engagement patterns show that users increasingly expect agents to handle persistent, long-running workflows rather than one-off reactive tasks, driving demand for proactive agent behavior, state consistency, and resource efficiency.

---

## 2. Activity Comparison
| Project | Updated Issues (Open/Closed) | Updated PRs (Open/Merged) | New Releases This Week | Project Health Score (1–10) |
|---------|-------------------------------|----------------------------|------------------------|------------------------------|
| OpenClaw | 500 (344 open / 156 closed) | 500 (328 open / 172 merged) | 5 (1 stable, 1 stable patch, 3 beta) | 9.0 |
| Hermes Agent | 50 (47 open / 3 closed) | 50 (46 open / 4 merged) | 1 (patch release) | 7.2 |
| IronClaw | 7 (6 open / 1 closed) | 11 (8 open / 3 closed) | 0 | 6.5 |
| QwenPaw | 50 (26 open / 24 closed) | 50 (21 open / 29 merged) | 0 | 7.8 |
| ZeroClaw | 50 (41 open / 9 closed) | 50 (47 open / 3 merged) | 0 | 7.0 |

*Health score calculated based on issue closure rate, PR merge velocity, maintainer responsiveness to high-severity bugs, release cadence, and community contributor breadth.*

---

## 3. OpenClaw's Position
### Advantages vs. Peers
OpenClaw is the clear ecosystem leader in velocity, contributor scale, and release maturity: its 402 contributors for the v2026.10.1 stable release and 172 merged PRs per week are 3–10x the volume of peer projects. It has the most established stable release pipeline, with regular hotfixes, beta builds, and stable patch releases that address edge cases (e.g., LXC container update failures, stale lease update blocks) faster than competing projects. It also leads in advanced infrastructure work, including MicroVM sandboxing and a full Solid UI rewrite, that smaller projects have not yet prioritized.

### Technical Approach Differences
Unlike peers that focus on niche use cases (e.g., IronClaw’s Rust-based benchmark-driven quality focus, ZeroClaw’s security-first architecture), OpenClaw takes a broad-platform approach, investing equally in runtime stability, frontend experience, plugin ecosystem tooling, and cross-platform deployment support. Its update system hardening work is the most comprehensive in the ecosystem, with dedicated beta releases focused exclusively on update reliability—a priority other projects treat as a secondary maintenance task.

### Community Size Comparison
OpenClaw’s community is an order of magnitude larger than the next-largest projects (QwenPaw, Hermes Agent), with 500 weekly issue/PR updates vs. 50 for peers. Its high-severity bug threads (e.g., 122 comments on the SQLite WAL growth issue) show far broader user impact and engagement, reflecting a larger production user base.

---

## 4. Shared Technical Focus Areas
1. **Update system reliability** (OpenClaw, Hermes Agent): Both projects face user backlash over blocked updates, incorrect status reporting, and post-update failures. OpenClaw shipped a dedicated beta release for update hardening, while Hermes Agent deals with false "stale gateway" warnings and stable channel 404 errors.
2. **Session state persistence & reliability** (all 5 projects): Every tracked project has open bugs related to lost chat history, false task completion reports, or state corruption after connection errors/refresh. IronClaw’s #1993 (false task success on reload), QwenPaw’s history loss reports, and ZeroClaw’s SQLite timestamp rewriting bug all reflect the same core challenge of maintaining consistent state across agent restarts and network interruptions.
3. **Memory & resource efficiency** (OpenClaw, QwenPaw, ZeroClaw): Memory leaks, SQLite bloat, and resource accumulation (zombie processes, oversized WAL files) are top P0/P1 issues for OpenClaw and major pain points for long-running deployments across QwenPaw and ZeroClaw user bases.
4. **MCP (Model Context Protocol) integration hardening** (QwenPaw, ZeroClaw, OpenClaw): All three projects are actively working on MCP reliability, including connection error degradation, argument serialization fixes, teardown handling, and usability improvements for configuration and diagnostics.
5. **Multi-channel/messaging platform support** (Hermes Agent, IronClaw, ZeroClaw): Projects are expanding beyond web/CLI interfaces to native integration with Telegram, Discord, iMessage/SMS, and email, with consistent focus on routing reliability and feature parity with standard messaging clients.

---

## 5. Differentiation Analysis
| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **Primary Feature Focus** | Core platform breadth: stability, UI, sandboxing, plugin ecosystem | Proactive agent behavior, multi-community gateway customization, messaging platform integration | Rust-based agent loop optimization, benchmark-driven quality, extension ecosystem | Frontend UX, multi-language support, multi-agent workflows, MCP usability | Security hardening, WASM plugin ecosystem, persistent memory, knowledge graph/RAG |
| **Target Users** | General-purpose power users, self-hosters, enterprise teams | Community/chatbot operators, personal assistant users, multi-deployment admins | Technical self-hosters, security-focused users, benchmarking teams | Chinese domestic market, international multi-language users, multi-agent pipeline builders | Security-first enterprise users, plugin developers, production communication workflow teams |
| **Technical Architecture** | Large monolithic codebase with broad contributor base, Node.js core, active frontend rewrite (Lit → Solid) | Python-based core, gateway/CLI/desktop client split, heavy focus on messaging platform integrations | Rust-native, minimal core, benchmark-centric quality control, community-driven extensions | Full-stack with web console + desktop clients, multi-language i18n built-in, MCP-first design | Rust core, security-primitives first (sandboxing, identity scoping), WASM plugin system, A2A protocol roadmap |

---

## 6. Community Momentum & Maturity
### Activity Tiers
- **Tier 1 (High Velocity, Mature)**: OpenClaw operates at a scale separate from all peers, with a large maintainer team, regular stable releases, and active triage of high-severity bugs. It is the only project with a fully established stable release cadence and broad contributor base.
- **Tier 2 (Rapid Iteration, Growing Maturity)**: QwenPaw and Hermes Agent have equivalent weekly activity volumes, with QwenPaw showing higher PR merge velocity (29 merged vs. 4 for Hermes Agent) and issue closure rates, indicating faster iteration on bug fixes and feature work. Both are growing their feature sets while working through core stability gaps.
- **Tier 3 (Steady Maintenance, Niche Focus)**: IronClaw has the lowest activity volume, with most merged PRs being dependency updates and limited user-facing feature work. It is in a maintenance/stabilization phase with a smaller, specialized community.
- **Tier 4 (Pre-Release Hardening)**: ZeroClaw has high open PR/issue volume but very low merge velocity, consistent with a pre-v1.0 hardening phase focused on security and foundational feature work for upcoming v0.8.6 and v0.9.0 releases.

### Maturity Trends
- OpenClaw is the most mature, with established release processes and a focus on incremental stability and performance improvements rather than foundational feature builds.
- QwenPaw is maturing rapidly, with high issue closure rates showing strong maintainer responsiveness to user-reported bugs.
- Hermes Agent, IronClaw, and ZeroClaw are still building core feature sets: Hermes Agent focuses on expanding use cases, IronClaw on core loop optimization, and ZeroClaw on security and plugin ecosystem foundations.

---

## 7. Trend Signals
1. **Shift from reactive to persistent agent use cases**: Growing demand for proactive agent features (Hermes Agent’s check-in requests, ZeroClaw’s persistent memory work, OpenClaw’s cross-session tooling) shows users are moving beyond one-off task execution to always-on assistant deployments. Agent developers should prioritize state persistence, background execution, and proactive interaction frameworks to meet this demand.
2. **Security and sandboxing become table stakes**: Work on MicroVM sandboxing (OpenClaw), firejail configuration (ZeroClaw), RCE vulnerability fixes (QwenPaw), and dangerous pattern detection (Hermes Agent) indicates that users increasingly expect agent runtimes to have robust isolation and security controls for untrusted code execution.
3. **Plugin and extension ecosystems are key differentiators**: All projects are investing in plugin marketplaces, WASM plugin runtimes, skill installation flows, and extension APIs. As core agent functionality commoditizes, extensibility and third-party ecosystem size will be the primary competitive differentiators for platform adoption.
4. **Multi-provider and custom endpoint support is non-negotiable**: Confusion around OpenAI-compatible endpoint setup (IronClaw), API key format bugs (Hermes Agent), and dynamic model catalog requests (OpenClaw) show that users expect flexible, self-service integration with any LLM provider, rather than reliance on a fixed set of supported platforms.
5. **Long-running deployment reliability is the top adoption barrier**: Across every project, memory leaks, crash loops, state corruption, and update failures are the most cited reasons users abandon self-hosted deployments. For AI agent developers, investing in observability, resource leak detection, and robust update recovery paths will have the highest impact on user retention and production adoption.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Weekly Project Digest (2026-10-12)

## 1. Last 7 Days' Overview
The Hermes Agent project maintained high development velocity this week, with 50 issues and 50 pull requests updated over the 7-day window. The vast majority of issues (47 of 50) and PRs (46 of 50) remain open, indicating active work-in-progress across core components including the CLI, gateway, agent runtime, and desktop client. A new patch release (v0.21.6) rolled out to deliver cumulative stability improvements to Docker and Hermes Cloud deployments. Community engagement is concentrated on bug reports related to update flows, platform-specific edge cases, and session state reliability, alongside growing interest in proactive agent behavior features.

## 2. Releases
- **v0.21.6** (Released 2026-10-08)
  - Type: Patch release
  - Scope: Rolls up ~2,100 PRs merged since v0.21.5 into a stable tagged release for Docker and Hermes Cloud distributions
  - Notes: Full curated release notes for the cumulative change window will ship with the upcoming v0.22.0 feature release. No breaking changes or migration steps are documented for this patch.
  - Link: [Hermes Agent v0.21.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6)

## 3. Project Progress
Over the past 7 days, 4 pull requests were merged or closed, delivering fixes for reliability and user experience:
1. **Corrupted cron database graceful failure** ([PR #136862](https://github.com/NousResearch/hermes-agent/pull/136862)): `hermes cron` commands now fail cleanly instead of dumping raw Python tracebacks when `jobs.json` is corrupted or unparseable.
2. **Non-interactive `auth add` crash fix** ([PR #136859](https://github.com/NousResearch/hermes-agent/pull/136859)): Resolves hangs and crashes when `hermes auth add` runs in non-interactive environments (exhausted stdin, cron jobs, closed pipes).
3. **Browser tool gating for non-interactive sessions** ([Issue #66393](https://github.com/NousResearch/hermes-agent/issues/66393) — closed): The browser tool now returns clear install hints instead of failing silently when `agent-browser` is missing in non-interactive gateway/headless sessions.
4. **Async delegation prompt fix** ([Issue #69776](https://github.com/NousResearch/hermes-agent/issues/69776) — closed): Resolved a bug where weak models fabricated async delegation task results because the dispatch note incorrectly told them to "just continue".
5. **Desktop session tab switch performance** ([Issue #95044](https://github.com/NousResearch/hermes-agent/issues/95044) — closed): Fixed residual slowdowns when switching tabs in large session workspaces, addressing remaining hydration and sidebar rendering costs after the earlier #55191 optimization.

## 4. Community Hot Topics
The most actively discussed items this week reflect user focus on update reliability, platform integration, and core agent behavior:
1. **Persistent gateway restart warning after deferred updates** ([Issue #107402](https://github.com/NousResearch/hermes-agent/issues/107402), 21 comments): Users report `hermes update` leaves a permanent "did not restart running gateways" warning when gateway restart is deferred for in-flight work. The discussion centers on aligning update fleet verification timing with the actual deferred restart lifecycle.
2. **Telegram forum topic message routing bug** ([Issue #136567](https://github.com/NousResearch/hermes-agent/issues/136567), 10 comments): High-priority discussion about Telegram DM forum topics where the opening message of a new thread is delivered without a thread ID, causing lobby recovery to misroute it to the previous topic. This affects session isolation for Telegram bot users with forum-enabled DMs.
3. **Anthropic `sk-ant-usr-` API key misclassification** ([Issue #133856](https://github.com/NousResearch/hermes-agent/issues/133856), 6 comments, 6 👍): Users with newer Anthropic user-prefixed API keys report they are incorrectly treated as OAuth tokens, breaking pay-per-token authentication. This is the highest-reacted bug of the week, signaling a broad user impact as Anthropic rolls out new key formats.
4. **Stable update channel 404 error** ([Issue #136281](https://github.com/NousResearch/hermes-agent/issues/136281), 6 comments): Users on the stable release channel cannot run update checks because `hermes-assets.nousresearch.com/releases/channels/stable.json` returns 404, indicating a deployment or CDN configuration issue.
5. **Proactive check-in feature request** ([Issue #9645](https://github.com/NousResearch/hermes-agent/issues/9645), 4 comments, 8 👍): Long-standing feature request for optional, budget-aware proactive agent follow-ups continues to gain traction, with users emphasizing the need for low-friction, human-feeling unsolicited check-ins.

## 5. Bugs & Stability
Bugs reported or updated this week are ranked by severity (P1 highest, followed by P2):
### P1 Severity
- **Anthropic user API key auth failure** ([Issue #133856](https://github.com/NousResearch/hermes-agent/issues/133856)): `sk-ant-usr-` prefixed keys are misclassified as OAuth tokens, breaking authentication and billing for users with newer Anthropic credentials. No linked fix PR is public as of this digest.

### P2 Severity
1. **Update flow false "stale gateway" warning** ([Issue #107402](https://github.com/NousResearch/hermes-agent/issues/107402)): Deferred gateway restarts trigger permanent partial update status. Fix PR not yet linked.
2. **Windows PATH pollution from sandbox installs** ([Issue #135037](https://github.com/NousResearch/hermes-agent/issues/135037)): Running Hermes from a sandbox/test checkout writes its bin directories to the shared user PATH, breaking default `hermes` command resolution. No fix PR linked.
3. **Tool argument coercion drops leading zeros** ([Issue #55369](https://github.com/NousResearch/hermes-agent/issues/55369)): Union `int|str` tool arguments like "007" are incorrectly coerced to integers, losing string formatting. No fix PR linked.
4. **Telegram gateway "Insufficient Balance" error with funded providers** ([Issue #136801](https://github.com/NousResearch/hermes-agent/issues/136801)): Users report balance errors despite valid Nous Portal OAuth and DeepSeek API keys; issue needs reproduction.
5. **`write_file` path resolution mismatch** ([Issue #136842](https://github.com/NousResearch/hermes-agent/issues/136842)): Relative paths resolve against inherited `TERMINAL_CWD` instead of the session's reported working directory, causing files to land in unexpected locations.
6. **Terminal/process tool timeout clipping** ([Issue #117906](https://github.com/NousResearch/hermes-agent/issues/117906)): 420s generic tool deadline cuts off longer-running terminal/process tasks and discards partial output. **Fix PR available**: [PR #117907](https://github.com/NousResearch/hermes-agent/pull/117907) makes the generic deadline respect tool-specific timeout budgets.
7. **Gateway streaming duplicate reasoning text** ([PR #75562](https://github.com/NousResearch/hermes-agent/pull/75562)): Open bug fix PR that addresses doubled text output in streaming surfaces, where the final answer is echoed as reasoning content.
8. **Dashboard re-attach kills running turns** ([Issue #136713](https://github.com/NousResearch/hermes-agent/issues/136713)): Web dashboard client reconnections (page reload, second tab) hard-interrupt in-progress agent turns and close sessions with `tui_shutdown` end reason. No fix PR linked.

## 6. Feature Requests & Roadmap Signals
Top user-requested features this week, with likelihood of near-term inclusion:
1. **Per-topic/chat configuration overrides for gateways** ([Issue #4431](https://github.com/NousResearch/hermes-agent/issues/4431), 10 👍): Request to allow different system prompts, personalities, and working directories per Telegram group/Discord server/forum topic. High community demand; likely to be prioritized for v0.22.x given ongoing gateway plugin work.
2. **Explicit opt-in for unattended memory consolidation** ([Issue #106919](https://github.com/NousResearch/hermes-agent/issues/106919)): Users want granular control over autonomous memory consolidation, keeping the default approval gate for replacement/removal. Aligns with ongoing memory system iteration; probable inclusion in the next feature release.
3. **Session boundary memory review triggers** ([Issue #31597](https://github.com/NousResearch/hermes-agent/issues/31597)): Request to run background memory review at session reset/close/compression points to ensure updated memory is available for the next session. Small, targeted improvement; high chance of landing in coming weeks.
4. **Source-backed proactive follow-up plugin contract** ([Issue #125448](https://github.com/NousResearch/hermes-agent/issues/125448)): Proposed safe gateway plugin framework for agents to proactively revisit past topics. Larger scope; likely scheduled for v0.23.0 alongside broader plugin ecosystem work.
5. **Profile-level persistent heartbeats** ([Issue #130197](https://github.com/NousResearch/hermes-agent/issues/130197)): Request for profile-scoped heartbeats that carry conversation context across sessions, addressing limitations of session-scoped `/heartbeat` and cron jobs. Moderate priority; depends on cron system extensions.

## 7. User Feedback Summary
### Pain Points
- **Update experience friction**: Multiple issues (#107402, #136281, #135037) point to systemic reliability gaps in the `hermes update` flow, from incorrect status reporting to PATH side effects and asset server outages.
- **Platform-specific edge cases**: Windows PATH handling, macOS RTL UI layout bugs (#136275), and Telegram forum feature gaps create inconsistent experiences across operating systems and messaging platforms.
- **Authentication friction**: Misclassified Anthropic key formats and non-interactive auth command failures create setup barriers for new users.
- **Session state reliability**: Dashboard re-connection turn loss, Telegram topic routing errors, and desktop session switch slowdowns erode trust in long-running agent workflows.

### Positive Signals
- Strong interest in proactive agent features (check-ins, follow-ups) indicates users are moving beyond reactive task execution to persistent, assistant-style use cases.
- Demand for per-community gateway customization shows production deployments are scaling to multiple use cases on single instances.
- Engagement with security improvements (dangerous pattern expansions, secret redaction) reflects enterprise and power-user focus on safe agent operation.

## 8. Backlog Watch
Long-standing high-impact items that have not received recent maintainer attention, despite community value:
1. **SPA browser click reliability** ([Issue #37244](https://github.com/NousResearch/hermes-agent/issues/37244), created 2026-06-02): Persistent bug where `browser_click` fails on modern React/Vue single-page applications due to obscured elements and custom event handlers. Impacts core browser tool utility for web automation use cases.
2. **Skill directory exclusion for sync/backup tools** ([Issue #122613](https://github.com/NousResearch/hermes-agent/issues/122613), created 2026-09-25): Simple, low-risk change to add `.stversions` and `_archive` to the excluded skill directories list, preventing backup artifacts from being indexed as skills.
3. **Dangerous pattern expansion for terminal tool** ([Issue #17873](https://github.com/NousResearch/hermes-agent/issues/17873), created 2026-04-30): Security improvement to add reverse shell, download-execute, and credential read patterns to the terminal tool's `DANGEROUS_PATTERNS` list, reducing agent security risk.
4. **Desktop TUI resume model/provider mismatch** ([PR #121629](https://github.com/NousResearch/hermes-agent/pull/121629) + [PR #118982](https://github.com/NousResearch/hermes-agent/pull/118982), open with unresolved design choice): Two competing PRs address the same resumed chat model/provider mismatch bug, waiting on maintainer decision about which approach to adopt.
5. **OpenRouter stale DeepSeek context window metadata** ([PR #42569](https://github.com/NousResearch/hermes-agent/pull/42569), created 2026-06-09): Long-open fix for incorrect context length reporting for DeepSeek models via OpenRouter, which can cause token limit miscalculations and truncated conversations.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Weekly Project Digest | 2026-10-12
Repository: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Last 7 Days' Overview
Over the past 7 days, IronClaw saw steady maintenance and incremental feature development, with 7 updated issues (6 open, 1 closed) and 11 updated pull requests (8 open, 3 closed). No new releases were published, as activity focused on dependency upkeep, core agent loop optimization, extension ecosystem expansion, and web UI stability fixes. The project maintains a healthy balance of automated dependency maintenance, community-driven feature proposals, and targeted bug remediation. Benchmark-driven quality tracking also remains a core operational priority, with daily failure taxonomy issues published to triage model performance gaps.

---

## 2. Releases
No new releases were published in the last 7 days.

---

## 3. Project Progress
All 3 merged/closed pull requests in the past week were dependency maintenance updates, keeping the project's toolchain and runtime dependencies current:
- **PR #8114 [CLOSED]**: `chore(deps): bump the everything-else group across 1 directory with 31 updates`  
  Superseded by a newer batch of updates, this Rust dependency refresh covered 31 core packages (including `thiserror`, `uuid`, and `base64`).  
  🔗 https://github.com/nearai/ironclaw/pull/8114
- **PR #8103 [CLOSED]**: `chore(deps): bump the actions group across 1 directory with 8 updates`  
  Superseded GitHub Actions dependency update covering 8 CI/CD workflow tools, including `anthropics/claude-code-action` and `actions/setup-node`.  
  🔗 https://github.com/nearai/ironclaw/pull/8103
- **PR #8123 [CLOSED]**: `chore(deps): bump the tokio-ecosystem group across 1 directory with 3 updates`  
  Superseded Tokio ecosystem update for `tokio-test`, `tower-http`, and `tokio-tungstenite` packages.  
  🔗 https://github.com/nearai/ironclaw/pull/8123

No user-facing features or bug fixes were formally merged in this window; all active feature work remains in open PRs under review.

---

## 4. Community Hot Topics
Ranked by comment count and reaction engagement:
1. **Issue #1993 [OPEN]**: `Agent falsely reports task completion after chat is closed and reopened`  
   The highest-comment active bug (1 comment) with clear reproduction steps tied to 502 error recovery. Underlying need: robust session state persistence and task completion verification to prevent false success reports that break user trust.  
   🔗 https://github.com/nearai/ironclaw/issues/1993
2. **Issue #8131 [OPEN]**: `Is this a joke? (ironclaw onboard provider list)`  
   The only issue with a positive user reaction (1 👍), raising questions about the validity of the project's documented "20+ inference providers" claim, specifically around OpenAI-compatible endpoint onboarding. Underlying need: clearer provider configuration documentation and validated onboarding flows for self-hosted/custom LLM endpoints.  
   🔗 https://github.com/nearai/ironclaw/issues/8131
3. **Issue #8130 / PR #8127**: `Sendblue iMessage/SMS extension proposal and implementation`  
   A tightly coupled feature request and matching implementation PR, reflecting community demand for native iMessage/SMS integration with user-owned credentials. Underlying need: expanded messaging channel support that preserves user data sovereignty.  
   🔗 Proposal: https://github.com/nearai/ironclaw/issues/8130 | 🔗 Implementation: https://github.com/nearai/ironclaw/pull/8127

---

## 5. Bugs & Stability
Ranked by severity (highest to lowest):
| Severity | Issue | Description | Fix PR Status |
|----------|-------|-------------|---------------|
| High | [#1993 Agent false task completion after chat reload](https://github.com/nearai/ironclaw/issues/1993) | Following 502 errors, agent claims task success on chat reopen without actual execution (e.g., unsent Telegram messages). This breaks core reliability guarantees for task execution. | No fix PR filed yet |
| Medium | [#8124 WebChat stale state & missing notifications in background tabs](https://github.com/nearai/ironclaw/issues/8124) | On non-HTTPS self-hosted deployments, background browser tabs show stale action status and no completion alerts, due to disabled Web Push on HTTP. | Partial fix open: [#8125 fix(webui): keep run state and notification inbox fresh in background tabs](https://github.com/nearai/ironclaw/pull/8125) resolves the stale state issue; Web Push gap for non-HTTPS remains unaddressed |
| Low | [#1047 DeepSeek API key configuration failure](https://github.com/nearai/ironclaw/issues/1047) | 401 Unauthorized error when configuring DeepSeek provider, closed this week. Root cause was invalid user API key format rather than a platform bug. | Closed (user-side configuration resolution) |

Two daily benchmark failure tracking issues (#8126, #8129) were also filed, documenting model-quality numeric and navigation errors in the `officeqa` test suite using DeepSeek-V4-Flash. These are classified as upstream model performance gaps rather than IronClaw code bugs.

---

## 6. Feature Requests & Roadmap Signals
Active user-requested features with high implementation momentum:
1. **Sendblue iMessage/SMS Extension**  
   Proposed in [#8130](https://github.com/nearai/ironclaw/issues/8130) with a fully developed implementation in [#8127](https://github.com/nearai/ironclaw/pull/8127). The feature adds user-owned credential support for iMessage/SMS, aligns with the project's existing conversation lifecycle design, and is likely to land in a near-term release pending review.
2. **Turn-Start Tool Selection with Jev Classifier**  
   In active development via [#8119](https://github.com/nearai/ironclaw/pull/8119), this opt-in feature reduces `tool_search` round trips by pre-selecting relevant tools at the start of a conversation turn. The core loop optimization is a high-impact roadmap item for reducing latency and is likely to ship as an experimental feature in the next release cycle.
3. **Improved OpenAI-Compatible Provider Onboarding**  
   Surfaced by user confusion in [#8131](https://github.com/nearai/ironclaw/issues/8131), better documentation and validated setup flows for custom LLM endpoints are a likely near-term documentation update to address user onboarding friction.

---

## 7. User Feedback Summary
### Pain Points
- **Session state reliability**: Users experience false task completion claims after connection errors and chat restarts, eroding trust in agent execution guarantees (Issue #1993).
- **Onboarding clarity for custom providers**: Users are confused about how to configure OpenAI-compatible endpoints, with skepticism about the project's advertised 20+ provider support (Issue #8131).
- **Self-hosted web UI gaps**: Non-HTTPS LAN deployments lack working background notifications and suffer from stale state when tabs are backgrounded (Issue #8124).
- **Model quality consistency**: Benchmark tracking shows recurring numeric and navigation errors with DeepSeek-V4-Flash on office automation tasks (Issues #8126, #8129).

### Positive Signals
- Community contributors are actively building extensions (Sendblue iMessage/SMS) and core performance optimizations (turn-start tool selection), indicating a healthy engaged developer ecosystem.
- The project's structured daily failure taxonomy process demonstrates proactive quality monitoring.

---

## 8. Backlog Watch
Long-running items requiring maintainer attention:
1. **PR #7834 [OPEN]**: `chore(deps): bump the wasm group across 1 directory with 4 updates`  
   Open since 2026-08-23 (8 weeks), this medium-risk Wasm dependency update for `wasmtime` and related packages has remained unmerged despite repeated updates. Stale Wasm dependencies carry potential security and compatibility risks for the project's sandboxed tool execution layer.  
   🔗 https://github.com/nearai/ironclaw/pull/7834
2. **Issue #1993 [OPEN]**: `Agent falsely reports task completion after chat is closed and reopened`  
   Open since 2026-04-03 (over 6 months), this high-severity agent reliability bug has only 1 comment and no assigned fix PR, despite being updated as recently as this week. The issue represents a core trust gap for end users and warrants prioritization.  
   🔗 https://github.com/nearai/ironclaw/issues/1993

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Weekly Project Digest | 2026-10-12
---

## 1. Last 7 Days' Overview
QwenPaw maintained high development momentum over the past 7 days, with 50 updated issues (26 open, 24 closed) and 50 updated PRs (21 open, 29 merged/closed) — reflecting active community engagement and rapid iteration. The project focused heavily on stability fixes, runtime resilience improvements, and frontend experience optimizations, alongside new feature exploration for multi-platform support and developer tooling. No new official releases were published, meaning most changes remain in pre-release or main-branch stages. Overall project health is strong, with a high issue closure rate and a diverse pipeline of feature work and bug fixes in progress.

## 2. Releases
No new releases were published in the last 7 days.

## 3. Project Progress
In the past week, 29 PRs were merged or closed, advancing core functionality and reliability:
- **Runtime & MCP resilience**: Multiple long-running hardening PRs landed, including [PR #1977](https://github.com/agentscope-ai/QwenPaw/pull/1977) (MCP teardown and cron/channel exception handling), [PR #2052](https://github.com/agentscope-ai/QwenPaw/pull/2052) (MCP connection errors degraded to tool-level failures), and [PR #2783](https://github.com/agentscope-ai/QwenPaw/pull/2783) (automatic context overflow recovery via compaction retry).
- **Model & provider reliability**: [PR #2520](https://github.com/agentscope-ai/QwenPaw/pull/2520) added preflight active model checks with explicit provider error surfacing, while [PR #1480](https://github.com/agentscope-ai/QwenPaw/pull/1480) fixed Ollama IPv6 connectivity issues by defaulting to 127.0.0.1.
- **Plugin & desktop experience**: [PR #5661](https://github.com/agentscope-ai/QwenPaw/pull/5661) and [PR #5612](https://github.com/agentscope-ai/QwenPaw/pull/5612) introduced version compatibility filtering for the plugin market and CDN catalog, and [PR #5569](https://github.com/agentscope-ai/QwenPaw/pull/5569) eliminated Windows desktop startup white screens with a two-phase splash loader.
- **MCP usability**: [PR #1848](https://github.com/agentscope-ai/QwenPaw/pull/1848) and [PR #1978](https://github.com/agentscope-ai/QwenPaw/pull/1978) improved MCP import templates, validation, preview, and runtime status diagnostics.
- **Memory system flexibility**: [PR #5732](https://github.com/agentscope-ai/QwenPaw/pull/5732) added a `none` memory backend option to fully disable ReMeLight via the Console UI.

## 4. Community Hot Topics
The most actively discussed items centered on core user experience pain points and stability:
1. **Sub-agent spawn timeout failures** ([Issue #7678](https://github.com/agentscope-ai/QwenPaw/issues/7678), 10 comments, CLOSED): Users reported 100% failure rates for `spawn subAgent` tasks on Windows v2.2.0, with timeouts persisting even with extended timeout windows. The discussion reflected high user frustration with core multi-agent functionality, driving demand for robust sub-agent lifecycle management.
2. **Chat history loss and context window association** ([Issue #8134](https://github.com/agentscope-ai/QwenPaw/issues/8134), 10 comments, OPEN): Users reported unexpected chat history disappearance, emphasizing that the issue was unrelated to LLM context window limits. This highlights a top-priority UX pain point around data persistence and user trust in conversation history.
3. **Compressed history loading failures** ([Issue #7884](https://github.com/agentscope-ai/QwenPaw/issues/7884), 9 comments, CLOSED): Users complained about short visible chat history and inability to load older messages after refresh, underscoring demand for reliable long-term conversation retrieval.
4. **OpenAI Responses API streaming empty response bug** ([Issue #8162](https://github.com/agentscope-ai/QwenPaw/issues/8162), 7 comments, CLOSED): A regression in v2.2.2.b4 caused abrupt session interruptions due to incomplete handling of streaming event types, indicating strong community engagement in diagnosing provider integration issues.

## 5. Bugs & Stability
Bugs reported in the last 7 days are ranked below by severity:
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [Issue #8153](https://github.com/agentscope-ai/QwenPaw/issues/8153) | MCP Driver configuration interface enables root remote code execution (RCE), with verified exploitation leading to cryptocurrency miner deployment | Closed (marked invalid; security response details not public) |
| **High** | [Issue #8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | Console chat intermittent silent empty completions: sessions end in ~1 second with no output and no model call, no frontend error | Open; no dedicated fix PR identified |
| **High** | [Issue #8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | Embedding reindex incomplete: CJK chunks exceeding per-item token limits silently drop entire batches (recurrence of #5950) | Open; no fix PR linked |
| **High** | [Issue #8179](https://github.com/agentscope-ai/QwenPaw/issues/8179) | GitHub skill installation corrupts binary files (images/fonts) by replacing non-UTF-8 bytes with U+FFFD | Open; no fix PR linked |
| **Medium** | [Issue #8163](https://github.com/agentscope-ai/QwenPaw/issues/8163) | qwenpaw-creator on Windows breaks Review decision journal with long paths (503 STORAGE_INTEGRITY_ERROR), leftover empty directories block retries (409 CAS_CONFLICT) | Open; no fix PR linked |
| **Medium** | [Issue #8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) | Frequent page load failures across multiple devices on v2.2.2b4 | Closed; fixed via upstream chunk loading and error boundary improvements |
| **Medium** | [Issue #7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console does not recover from failed lazy page chunk loads; all navigation stays on error screen until full reload | Closed; resolved with retry mechanism and error boundary fixes |

Additional stability fixes in progress include [PR #8183](https://github.com/agentscope-ai/QwenPaw/pull/8183) (preserves cancellation reasons and continues agent loop after tool/child-agent failures) and [PR #7973](https://github.com/agentscope-ai/QwenPaw/pull/7973) (recovers from rejected media URLs in agent reasoning loops).

## 6. Feature Requests & Roadmap Signals
Key user-requested features with high likelihood of near-term inclusion:
1. **Spanish (es) interface localization** ([Issue #8160](https://github.com/agentscope-ai/QwenPaw/issues/8160)): Request to add Spanish as a full interface language across console, website, and plugin creator. Given QwenPaw’s existing multi-language support (zh, en, ja, ru, pt-BR, id, vi), this aligns with the project’s internationalization roadmap.
2. **Per-chat tool approval persistence on server** ([Issue #8180](https://github.com/agentscope-ai/QwenPaw/issues/8180), [PR #8182](https://github.com/agentscope-ai/QwenPaw/pull/8182)): Users requested server-side storage of per-session approval levels (currently stored only in localStorage). A dedicated XL-sized PR is already in review, making this a strong candidate for the next release.
3. **Session-level real-time change notifications** ([Issue #8181](https://github.com/agentscope-ai/QwenPaw/issues/8181)): Request for a session-scoped event channel to push conversation updates to the frontend without full page reloads. This addresses a major UX pain point and aligns with ongoing frontend experience improvements.
4. **Configurable console basename for reverse proxy subpath deployments** ([Issue #8177](https://github.com/agentscope-ai/QwenPaw/issues/8177)): Request to support serving the web console under custom subpaths (e.g., `/qwenpaw/`) for reverse proxy setups. This is a common self-hosting requirement and has a straightforward implementation path.
5. **HarmonyOS native client** ([PR #8164](https://github.com/agentscope-ai/QwenPaw/pull/8164)): A large in-progress PR adds a native ArkUI/ArkTS HarmonyOS client with no WebView dependency. While the XXXL size means longer review cycles, it signals expansion into the Chinese domestic smart device ecosystem.

## 7. User Feedback Summary
### Core Pain Points
- **Chat history reliability**: Multiple users ([#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134), [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884), [#8109](https://github.com/agentscope-ai/QwenPaw/issues/8109)) reported history loss, incomplete loading after compression, and full session wipes after streaming errors — the most frequently cited UX frustration.
- **Multi-agent workflow instability**: Sub-agent spawn failures ([#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678)) and message queue inconsistencies ([#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116)) broke complex agent pipelines, with users noting issues persisted for months.
- **Frontend rendering & loading issues**: Page load failures ([#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)), layout glitches in settings ([#8122](https://github.com/agentscope-ai/QwenPaw/issues/8122)), and performance problems with backdrop blur effects drove requests for reduced animation tiers.
- **Deployment flexibility**: Self-hosted users requested reverse proxy subpath support ([#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177)) and better cross-device configuration sync.

### Use Cases Observed
- Production multi-agent deployments for data processing (e.g., `qwenpaw-data` agent templates)
- Self-hosted NAS/Docker deployments for personal and team use
- Plugin/skill development and distribution via GitHub
- Multi-channel deployment (Feishu, web console) for enterprise workflows

### Sentiment
Overall sentiment is mixed: users praise QwenPaw’s flexibility and feature breadth but express frustration with recurring stability issues in core workflows (history, sub-agents) and gaps in deployment documentation. The high volume of community-submitted bug reports with detailed root-cause analysis indicates an engaged, technical user base invested in the project’s success.

## 8. Backlog Watch
The following long-standing items require maintainer attention due to severity, age, or user impact:
1. **[Issue #7311](https://github.com/agentscope-ai/QwenPaw/issues/7311)** (OPEN, created 2026-08-26): v2.1.1b2 missing `_qwenpaw_remote_backend` module breaks all tools on Windows. This critical regression has been open for nearly 7 weeks with only 4 comments, leaving affected users without a workaround.
2. **[Issue #7074](https://github.com/agentscope-ai/QwenPaw/issues/7074)** (CLOSED, created 2026-08-16): Frequent runtime crashes requiring page refresh. While closed, the issue reflects a recurring stability pattern that may still affect newer versions, and root-cause documentation would benefit users.
3. **[Issue #7809](https://github.com/agentscope-ai/QwenPaw/issues/7809)** (OPEN, created 2026-09-16): Tool approval cards and notifications are hardcoded English, lacking i18n support. This accessibility gap has been open for nearly a month and conflicts with the project’s multi-language roadmap.
4. **[Issue #8082](https://github.com/agentscope-ai/QwenPaw/issues/8082)** (OPEN, created 2026-10-02): Heartbeat feature documentation lacks runtime semantics (silence behavior, concurrency, AGENTS.md section). This documentation gap causes user confusion and requires minimal effort to resolve.
5. **[PR #7654](https://github.com/agentscope-ai/QwenPaw/pull/7654)** (OPEN, created 2026-09-09): Small fix to recognize llama-server and DashScope audio rejection errors in the fallback classifier. This low-risk, high-impact stability fix has been open for over a month despite its size/S classification.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Weekly Project Digest (Week of 2026-10-12)
Data source: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Last 7 Days' Overview
Over the past 7 days, ZeroClaw maintained steady development activity with 50 updated issues (41 open/active, 9 closed) and 50 updated pull requests (47 open, 3 merged/closed), alongside no new releases. The project prioritized security hardening, runtime stability, and plugin ecosystem maturity, with heavy focus on v0.8.6 and v0.9.0 release milestones. A notable share of work addresses S0/S1 severity security gaps in agent identity scoping and sandbox configuration, while parallel test reliability and persistent memory parity remain ongoing cross-cutting initiatives. Overall activity indicates active feature delivery paired with proactive stability and security remediation, consistent with a pre-release hardening phase.

---

## 2. Releases
No new releases were published in the last 7 days.

---

## 3. Project Progress (Merged/Closed Items)
Three pull requests were merged/closed in the period, delivering targeted fixes and refinements:
- **PR #11531 (closed, bug fix)**: Fixed Tailscale tunnel URL reporting to reflect the actual HTTPS port 443 served by modern Tailscale CLIs, rather than incorrectly advertising the local port. [View PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11531)
- **Issue #11166 (closed, feature)**: Implemented batch eviction for images when per-request image caps are exceeded, reducing frequent prompt cache rewrites for long sessions. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11166)
- **Issue #10700 (closed, bug fix)**: Resolved cost tracking scope issues where daemon-lifetime session IDs prevented per-conversation spend separation. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)
- Additional closed items include ZeroCode UI fixes (Issues #11586, #10741), MCP argument serialization fix (Issue #11371), flaky test remediation (Issue #11180), and code cleanup (Issue #11545).

---

## 4. Community Hot Topics
The most actively discussed items reflect community focus on test reliability, governance, and core subsystem maturity:
1. **Issue #9965 (15 comments, open)**: Task to harden runtime-written executable test fixtures under parallel runtime gates, triggered by intermittent cron scheduler test failures. This highlights community concern about test flakiness impacting CI reliability as the codebase scales. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)
2. **Issue #8692 (15 comments, open)**: Maintainer decision queue tracker for RFCs and design issues, serving as the central coordination point for architectural and policy decisions. Its high activity shows growing community engagement with the project's governance and design review process. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)
3. **Issue #8891 (10 comments, open)**: Persistent memory roadmap tracker to bring curation, relevance, and operability planes to parity with peer agent runtimes. This signals strong demand for robust cross-session memory capabilities, a core differentiator for personal AI agents. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)
4. **Issue #9887 (7 comments, open)**: Request to downscale oversized images instead of dropping them entirely, plus support for disabling multimodal limits with a 0 value. This reflects user frustration with rigid media handling limits in real-world usage. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)

---

## 5. Bugs & Stability
Bugs reported/updated in the last 7 days, ranked by severity:
### S0 (Critical / Data Loss / Security Risk)
- **Issue #9646**: Session/channel read-write tools lack per-agent ownership scoping, allowing any agent to access another agent's sessions or Discord channels. No fix PR is publicly linked; marked for v0.9.0 release. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)
- **Issue #9647**: Knowledge graph has no per-agent attribution, enabling cross-agent read/mutation of knowledge data. No fix PR is publicly linked; marked for v0.9.0 release. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)

### S1 (Workflow Blocked)
- **Issue #11615**: Telegram send path ignores 429 `retry_after` headers, causing immediate retries that compound flood limiting and lose replies. No fix PR linked as of digest date. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11615)
- **Issue #11579**: `save_dirty` incorrectly stamps `schema_version = 3` on unmigrated V1/V2 configs, skipping migration and causing agent configuration loss. No fix PR linked as of digest date; marked for v0.9.0. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11579)

### S2 (Degraded Behavior)
- **Issue #11594**: Documented `firejail_args` config option is never applied to firejail invocations, breaking sandbox customization. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11594)
- **Issue #11204**: OpenRouter spend reporting shows $0.00 and misclassifies all tokens as free, breaking cost tracking for OpenRouter users. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)
- **Issue #11420**: SQLite session backend rewrites `created_at` for all messages on each turn, losing per-message timestamp accuracy. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)

---

## 6. Feature Requests & Roadmap Signals
Key user-requested features and roadmap items likely to appear in upcoming releases:
- **WASM plugin ecosystem (v0.8.6 target)**: Multiple in-progress PRs (e.g., #11347, #11311, #11309, #11262) point to a full plugin launch in v0.8.6, including artifact shipping, installation/update flows, quickstart integration, and security hardening for TLS and egress controls.
- **Tool default optimization (v0.8.6/v0.9.0 target)**: PR #11221 proposes defaulting to 11 built-in tools for new installations with a full-access toggle, indicating a shift toward more opinionated, user-friendly default configuration.
- **Knowledge corpus / RAG (v0.9.0 candidate)**: RFC #11235 for document retrieval capabilities shows strong alignment with persistent memory work tracked in #8891, making it a likely candidate for post-v0.8.6 feature prioritization. [View RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)
- **A2A protocol crate**: RFC #11254 for a dedicated `zeroclaw-a2a` crate formalizes agent-to-agent communication capabilities, a long-term architectural priority. [View RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)

---

## 7. User Feedback Summary
Real user pain points and use cases from the week's issues:
- **Media handling frustration**: Users report that hard image size limits (Issue #9887) and rigid image cap behavior create friction for real-world multimodal workflows, with requests for more graceful degradation via downscaling.
- **Cost tracking unreliability**: Multiple reports (#11204, #11613, #10700) highlight broken or inaccurate cost accounting for alternative providers, a critical pain point for self-hosted and multi-provider users.
- **Sandbox configuration gaps**: The unapplied `firejail_args` option (Issue #11594) indicates users are attempting to customize sandbox security settings and encountering broken advertised functionality.
- **Channel feature gaps**: Email CC/Reply-All limitations (Issue #9506) and Telegram rate-handling bugs (Issue #11615) show users rely on ZeroClaw for production communication workflows and expect channel parity with standard clients.
- **UI/UX friction**: ZeroCode sidebar status reset on restart (Issue #11586) and chat input focus loss during turns (PR #11660) reflect demand for more seamless, stateful user experiences.

---

## 8. Backlog Watch
Long-standing high-priority items requiring maintainer attention:
1. **Issue #7432 (open, 6 comments, created 2026-06-09)**: Runtime and gateway delivery tracker for v0.8.6 and v0.9.0. As the central roadmap tracker for two upcoming releases, its relatively low comment volume despite age suggests it may benefit from more frequent status updates to align contributors. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)
2. **PR #10391 (open, created 2026-08-26)**: Delegate tool boundary hardening to preserve workspace, tool ceilings, and command policies across turns. This S0 security fix has been open for over 6 weeks and is marked as needing author action, risking delays to v0.9.0 security commitments. [View PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)
3. **PR #10407 (open, created 2026-08-27)**: Persistent session prompt attachments feature. This large, cross-cutting feature has been in review for over 6 weeks and may require prioritization to unblock dependent memory and session persistence work. [View PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)
4. **Issue #9506 (open, 2 comments, created 2026-07-28)**: Email channel CC and Reply-All support. This medium-priority channel feature has lingered in the backlog with minimal activity, despite representing a core functionality gap for email integration users. [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9506)

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*