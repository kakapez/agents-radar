# OpenClaw Ecosystem Weekly Digest 2026-10-26

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-26 01:05 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Weekly Project Digest
**Report Date**: 2026-10-26 | **Repository**: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

## 1. Last 7 Days' Overview
OpenClaw maintains high development momentum this week, with 500 updated Issues and 500 updated Pull Requests recorded, including 5 new releases across stable and beta channels. Active development is focused on performance optimization, security hardening, and platform-specific reliability fixes, particularly for Windows and PostgreSQL deployments. The project has a large open backlog of unaddressed high-severity issues, with 397 active open Issues and 220 open PRs requiring maintainer review. Community engagement is strong, with several critical bugs receiving hundreds of comments from affected users.

## 2. Releases
Five new versions were published this week, split between stable maintenance and beta development channels:
- **[v2026.10.7](https://github.com/openclaw/openclaw/releases/tag/v2026.10.7)** (stable): Introduces replay-safe session recovery, preserving recovery provenance for interrupted sessions and retaining unfinished tool outcomes to prevent data loss. Stopped conversations now properly clean up terminal recovery residue before accepting new messages, and rejected Claude CLI drafts are excluded from final replies.
- **[v2026.9.34](https://github.com/openclaw/openclaw/releases/tag/v2026.9.34)** (extended-stable/LTS equivalent): Gateway-only release with critical security updates, reliability fixes, performance improvements, and new model support backported to the September 2026 codebase.
- **[v2026.10.6](https://github.com/openclaw/openclaw/releases/tag/v2026.10.6)** (stable): **Breaking Change** – Requires Node 24.22.1+ (24.x line) or 26.12.1+ (26.x line) to patch TLS vulnerabilities from October 2026 Node.js security releases. Docker images ship with the patched Node runtime preconfigured.
- **[v2026.10.10-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.3)** (beta): Windows reliability improvements, including restored fresh state initialization and Gateway startup, hidden SQLite helper windows during app updates, and tolerance for launcher timestamp settling during forced Gateway reinstalls.
- **[v2026.10.10-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.2)** (beta): Workspace safety fix that rejects multi-file `apply_patch` operations before file changes when a later update target is missing or context mismatches, preserving the original workspace for retry attempts.

**Migration Notes**: Users on the 2026.10.x stable channel must upgrade their Node runtime to the specified minimum versions before deploying v2026.10.6 or later. Users on the extended-stable 2026.9.x channel should upgrade to v2026.9.34 for critical security patches without feature changes.

## 3. Project Progress
280 PRs were merged or closed in the last 7 days, with development advancing across three core areas:
- **Performance Optimization**: Multiple merged PRs target reduced allocation and faster workloads:
  - [PR #184001](https://github.com/openclaw/openclaw/pull/184001): Removed redundant copies of private sorted inventories to reduce overhead in skill precedence checks and plugin health reporting.
  - [PR #183997](https://github.com/openclaw/openclaw/pull/183997): Cut Linux Gateway CPU sampling overhead by 60% by only collecting necessary host utilization metrics instead of full per-core data.
  - [PR #184002](https://github.com/openclaw/openclaw/pull/184002): Eliminated redundant array copies in Discord, Slack, and X channel message rendering pipelines.
- **Bug Fixes**: Critical platform and workflow fixes were closed:
  - [PR #183713](https://github.com/openclaw/openclaw/pull/183713): Added retries for transient dashboard fetch timeouts during onboarding handoff, preventing failed onboarding flows from slow gateway responses.
  - [PR #181534](https://github.com/openclaw/openclaw/pull/181534): Restored keyboard focus after closing Workboard board dialogs for accessibility compliance.
  - [PR #183623](https://github.com/openclaw/openclaw/pull/183623): Added support for confirmed PostgreSQL lock recovery, allowing replacement gateway containers to start after old container leases are verified as stale.
- **Test & Infrastructure**: [PR #184019](https://github.com/openclaw/openclaw/pull/184019) fixed GitHub Actions test fixtures to publish roster changes when tests mutate configured agent settings.

## 4. Community Hot Topics
The most active community discussions center on stability issues affecting production deployments:
- **[Issue #143524](https://github.com/openclaw/openclaw/issues/143524)** (136 comments, P0 release blocker): Users report Agent SQLite WAL files growing to 1.4–2.8 GB on Windows deployments despite configured auto-checkpoint limits, completely blocking gateway startup. This is the highest-commented issue this week, indicating widespread impact for Windows users.
- **[Issue #160959](https://github.com/openclaw/openclaw/issues/160959)** (54 comments, P0): Gateway event loop blocks for minutes when capturing large external plugins, a regression introduced in v2026.9.6 that disrupts startup and runtime model republishing.
- **[Issue #164294](https://github.com/openclaw/openclaw/issues/164294)** (33 comments, P2): Gateway state database WAL auto-checkpoint never completes due to pinned in-process readers, leading to gradual storage bloat over time.
- **[PR #184026](https://github.com/openclaw/openclaw/pull/184026)** (new, high visibility): Performance optimization removing redundant copies of private objects in agent preparation and CLI result handling, which is expected to reduce overhead for all agent workloads.

These issues reflect a core community need for improved storage reliability and plugin management stability, particularly for Windows and large-deployment users.

## 5. Bugs & Stability
High-severity bugs reported this week are ranked below by impact severity, with fix status noted:
1. **P0 Release Blockers**:
   - [Issue #143524](https://github.com/openclaw/openclaw/issues/143524): Windows SQLite WAL bloat blocking gateway startup. No dedicated fix PR merged yet; labeled for maintainer review.
   - [Issue #160959](https://github.com/openclaw/openclaw/issues/160959): Large plugin capture blocking gateway event loop (v2026.9.6 regression). No fix PR merged; marked as source-repro.
   - [Issue #153426](https://github.com/openclaw/openclaw/issues/153426): Curated memory files (`MEMORY.md`/`USER.md`) permanently excluded from bootstrap injection after ordinary agent behavior, with no recovery path. No fix PR merged; flagged for security review.
2. **P1 Crash & Runtime Issues**:
   - [Issue #168955](https://github.com/openclaw/openclaw/issues/168955): Windows startup regression in v2026.10.1, increasing gateway ready time from ~410s to ~1030s due to `sidecars.control-ui-assets` blocking. No fix PR merged.
   - [Issue #159596](https://github.com/openclaw/openclaw/issues/159596): Gateway memory sawtooth on v2026.9.6, with prepared-model-catalog worker growing to full heap ceiling and causing ~200 critical memory pressure events per day. No fix PR merged.
   - [Issue #183786](https://github.com/openclaw/openclaw/issues/183786): Windows beta upgrade stalls by repeatedly querying stopped foreground gateway PIDs after successful npm staging. No fix PR merged.
3. **P2 Functional Bugs**:
   - [Issue #53408](https://github.com/openclaw/openclaw/issues/53408): Write/exec tool parameters silently dropped after long conversations (15+ turns), causing failed tool calls. No fix PR merged; needs maintainer review.
   - [Issue #164427](https://github.com/openclaw/openclaw/issues/164427): Cron history maintenance sweep holds state DB writer lock for 9.35s, exceeding the hard-coded 5s timeout and aborting gateway sidecar startup. No fix PR merged.

## 6. Feature Requests & Roadmap Signals
Top user-requested features this week point to upcoming flexibility and usability improvements:
- **[Issue #67413](https://github.com/openclaw/openclaw/issues/67413)** (14 comments, 5 upvotes): Per-agent dreaming configuration to prevent memory spikes from all workspaces running memory maintenance simultaneously. This feature is likely to be prioritized to address OOM kills on self-hosted deployments.
- **[Issue #101422](https://github.com/openclaw/openclaw/issues/101422)** (10 comments): Configurable memory recall eligibility and index exclusion paths for markdown-first workspaces, allowing users to exclude runtime artifacts from memory search. This aligns with ongoing memory reliability improvements and is a strong candidate for the next 2026.10.x release.
- **[Issue #162164](https://github.com/openclaw/openclaw/issues/162164)** (11 comments): Opt-in personal identity support for iOS/macOS apps while preserving shared owner access for team deployments. This reflects growing demand for multi-user personalization in native client apps.

## 7. User Feedback Summary
User sentiment this week is mixed, with significant frustration around Windows and PostgreSQL deployment reliability:
- **Pain Points**: Windows users consistently report startup delays, update failures, and SQLite storage bloat as the most disruptive issues. Self-hosted users on small hosts cite memory spikes from concurrent worker isolates and cron maintenance tasks as a key barrier to running OpenClaw on low-resource hardware. Power users are frustrated by silent data loss scenarios, including dropped tool parameters, permanently excluded memory files, and stuck message queues with no recovery CLI.
- **Satisfaction**: Users praise the new replay-safe session recovery feature in v2026.10.7, which reduces data loss from interrupted sessions. Beta testers appreciate the Windows reliability fixes in v2026.10.10-beta.3, though many note update flows still fail intermittently on Windows.
- **Use Cases**: Common reported use cases include single-agent Windows gateway deployments, multi-agent team gateways on macOS/Linux, and small self-hosted instances on resource-constrained VPS hardware.

## 8. Backlog Watch
Long-standing high-priority items requiring maintainer attention:
- **[Issue #53408](https://github.com/openclaw/openclaw/issues/53408)**: Open since March 2026, this silent tool parameter drop bug affects all long-running conversations, with 15 comments and 2 upvotes but no fix PR assigned.
- **[Issue #67413](https://github.com/openclaw/openclaw/issues/67413)**: Open since April 2026, this per-agent dreaming configuration request has received 14 comments and 5 upvotes, but remains marked as needing product decision.
- **[Issue #112313](https://github.com/openclaw/openclaw/issues/112313)**: Open since July 2026, dead-lettered outbound delivery queue entries are permanently locked with no CLI/RPC method to clear them, causing permanent health check noise for operators.
- **[PR #137348](https://github.com/openclaw/openclaw/pull/137348)**: Open since September 2026, this fix for generated ACP sessions failing without an agent owner is marked as waiting on author updates, blocking IDE multi-agent workflow fixes.

---

## Cross-Ecosystem Comparison

# Open-Source Personal AI Assistant & Agent Ecosystem Comparison Report
*Week of 2026-10-26 | Core Reference: OpenClaw*

---

## 1. Ecosystem Overview
The open-source personal AI agent landscape is currently in a post-architecture stabilization phase, with leading projects transitioning from rapid feature expansion to hardening reliability, security, and extensibility for production deployments. Mature projects like OpenClaw and Hermes Agent are prioritizing bug fixes for platform-specific deployment pain points (Windows, ARM64, PostgreSQL) and performance optimization, while newer entrants (IronClaw, ZeroClaw) focus on modular architecture and niche use cases like on-chain agents. A cross-cutting priority is improving long-term memory reliability and plugin/channel extensibility to support multi-user, enterprise-grade deployments. The community is increasingly pushing back against silent data loss and vague error handling, demanding better observability and control over agent behavior in production.

---

## 2. Activity Comparison
| Project | Updated Issues (Last 7 Days) | Open Issues (Active) | Updated PRs (Last 7 Days) | Merged/Closed PRs (Last 7 Days) | New Releases (Last 7 Days) | Health Score (1-10) |
|---------|------------------------------|----------------------|-----------------------------|----------------------------------|---------------------------|----------------------|
| OpenClaw | 500 | 397 | 500 | 280 | 5 (3 stable, 2 beta) | 8/10 (high velocity, large backlog of P0/P1 bugs) |
| Hermes Agent | 50 | 47 | 50 | 10 | 3 (all stable patch) | 7/10 (stable post-merge stabilization, focused bug fixes) |
| IronClaw | 6 | 5 | 50 | 3 | 0 | 5/10 (low feature velocity, mostly dependency maintenance) |
| QwenPaw | 50 | 34 | 50 | 13 | 1 (security patch) | 7/10 (active roadmap execution for v2.3.0 modularity) |
| ZeroClaw | 50 | 38 | 50 | 1 | 0 | 6/10 (pre-release feature development, limited merged code) |

---

## 3. OpenClaw's Position
### Advantages vs Peers
OpenClaw has by far the largest community and development velocity, with 10x more weekly issue/PR activity than any peer project. It is the only project shipping stable production releases with cross-channel (Discord, Slack, X) support and enterprise-focused PostgreSQL deployment options. Its replay-safe session recovery feature is a unique differentiator that directly addresses user pain points around interrupted session data loss.
### Technical Approach Differences
Unlike modularity-first peers (QwenPaw, ZeroClaw) that are actively refactoring to isolate channels and plugins, OpenClaw has a monolithic core with mature, production-grade infrastructure for gateway management and storage reliability. It also has a far larger set of platform-specific fixes for Windows deployments than any other project.
### Community Size Comparison
OpenClaw's community is an order of magnitude larger than peers: its top hot topics have 136+ comments, compared to 220+ for Hermes Agent's single post-merge tracking issue, and <30 comments for most peer project discussions.

---

## 4. Shared Technical Focus Areas
| Shared Need | Projects Addressing It | Specific Requirements |
|-------------|------------------------|------------------------|
| Memory Subsystem Reliability | OpenClaw, ZeroClaw, Hermes Agent, QwenPaw | Fix silent data loss from concurrent memory writes, prevent bloat from uncheckpointed WAL files, add configurable memory maintenance scheduling to avoid OOM kills, add audit trails for memory inclusion/exclusion |
| Channel/Plugin Extensibility | QwenPaw, ZeroClaw, IronClaw | Isolate non-core channels into subprocess plugins, add configurable acknowledgement reactions for multi-channel deployments, support webhook integration for third-party automation |
| Windows Deployment Reliability | OpenClaw, Hermes Agent | Fix startup delays, installer dependency failures, SQLite storage bloat blocking gateway startup, update flow stalls |
| Plugin/Workspace Safety | OpenClaw, ZeroClaw | Prevent partial multi-file apply_patch failures from corrupting workspaces, enforce parent tool allowlist permissions for sub-agents |

---

## 5. Differentiation Analysis
| Project | Core Feature Focus | Primary Target Users | Key Architectural Trait |
|---------|---------------------|----------------------|-------------------------|
| OpenClaw | Cross-channel reliability, session recovery, enterprise PostgreSQL support | Production multi-agent team deployments, Windows power users | Mature monolithic core with LTS release channels |
| Hermes Agent | Unified gateway session management, multi-profile deployment | Multi-workflow power users, terminal UI enthusiasts | Recently refactored consolidated gateway for single-process session management |
| IronClaw | Hosted MCP support, on-chain agent integration | Web3/sovereign agent developers | Minimal core with dependency-heavy maintenance focus |
| QwenPaw | Modular plugin architecture, Chinese social channel (DingTalk, Feishu, QQ) support | Enterprise Chinese team deployments | Upcoming v2.3.0 refactor to isolate all non-Console channels into separate plugins |
| ZeroClaw | Scoped gateway chat, persistent memory parity, sub-agent policy enforcement | Pre-release early adopters building permission-aware multi-agent systems | Pre-release modular runtime with explicit capability gating for security |

---

## 6. Community Momentum & Maturity
- **Rapidly Iterating Tier**: OpenClaw (high bug fix and release velocity, large community demand for production stability), QwenPaw (active v2.3.0 roadmap execution, strong enterprise feature demand)
- **Stabilization Tier**: Hermes Agent (post-Unified Gateway merge stabilization, focused patch releases, no new breaking changes)
- **Early Development Tier**: ZeroClaw (pre-v0.9.0 release feature development, limited merged code, focused on core runtime hardening), IronClaw (low feature velocity, mostly dependency maintenance, focused on hosted MCP use case refinement)

---

## 7. Trend Signals
Key industry trends extracted from community feedback:
1. **Memory reliability is now the top unmet need across all agent projects**: Silent data loss from concurrent writes, unmanageable storage bloat, and lack of control over memory inclusion are eroding user trust far more than missing features. Developers should prioritize auditable, transactional memory subsystems with configurable maintenance schedules over new model integrations.
2. **Channel isolation is becoming a standard architectural pattern**: Projects are moving away from monolithic channel support to subprocess-isolated plugins to prevent single-channel failures from taking down the entire gateway, a pattern that aligns with modern microservices reliability practices.
3. **Permission transparency is a high-impact pain point**: Users across all projects are frustrated by vague tool refusal messages and lack of sub-agent permission enforcement; adding granular, human-readable policy explanations is a low-effort, high-value improvement for production deployments.
4. **Windows deployment reliability is a persistent barrier to mass adoption**: Even mature projects have widespread unresolved Windows-specific bugs, creating a clear competitive advantage for projects that can ship consistent, low-friction Windows installers and runtime performance.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Weekly Project Digest — 2026-10-26

## 1. Last 7 Days' Overview
Hermes Agent maintained high development momentum over the past week, with 50 active updated Issues (47 open/active, 3 closed) and 50 updated Pull Requests (40 open, 10 merged/closed), alongside 3 new patch releases. The project focused on stabilizing the recently merged Unified Gateway architecture, resolving desktop installer compatibility issues across Windows and macOS platforms, and improving overall system performance and security. Development activity is robust, with active community participation in issue reporting and pull request contributions, indicating strong project vitality.

## 2. Releases
Three patch versions were released in the last 7 days, all focused on incremental fixes and stable rollups without breaking changes:
- [v0.22.3](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.3) (October 21, 2026): A stable rollup of ~620 PRs merged since v0.22.2, available for CLI/installer, Microsoft Store app, Docker, and Hermes Cloud. Full curated release notes are deferred to the upcoming v0.23.0.
- [v0.22.4](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.4) (October 21, 2026): Included a desktop UI fix (removal of composer suggestion pills) plus small plugin and dashboard patches, deployed across all distribution channels.
- [v0.22.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5) (October 22, 2026): A stable rollup of ~81 PRs merged since v0.22.4, aligned with the same multi-channel deployment as prior releases.

No migration notes are required for these patch releases.

## 3. Project Progress
In the last 7 days, 10 PRs were merged or closed, delivering targeted performance improvements and bug fixes:
- **Performance optimizations**:
  - [PR #144640](https://github.com/NousResearch/hermes-agent/pull/144640): Refactored provider plugin initialization and restart check logic to reduce git subprocess calls, cutting CLI startup time by ~1 second (e.g., `hermes sessions list` improved from 1.45s to 0.44s).
  - [PR #144647](https://github.com/NousResearch/hermes-agent/pull/144647): Optimized git version lookup by maintaining a fresh commit graph and clearing stale locks, reducing the operation from 0.39s to 0.05s.
  - [PR #144625](https://github.com/NousResearch/hermes-agent/pull/144625): Moved startup scratch directory pruning to a detached background process, eliminating multi-second user turn stalls (resolved Issue #143397).
- **Bug fixes**:
  - [PR #143398](https://github.com/NousResearch/hermes-agent/pull/143398): Resolved system prompt build blocking by decoupling it from scratch directory pruning.
  - [PR #144661](https://github.com/NousResearch/hermes-agent/pull/144661): Added clear error handling for SSH workspace file routes when the remote host is unreachable, replacing uninformative 500 errors.

## 4. Community Hot Topics
The most active discussion centered on post-merge stabilization of the Unified Gateway architecture, which merged to main on October 14:
- [Issue #134889](https://github.com/NousResearch/hermes-agent/issues/134889) (CLOSED, 220 comments): A tracking issue for post-merge fixes of the Unified Gateway feature, which consolidated all local session management into a single gateway process.
- [Issue #143547](https://github.com/NousResearch/hermes-agent/issues/143547) (OPEN, 23 comments): A continuation tracking issue for remaining open post-merge problems with the Unified Gateway on the main branch.
- [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379) (OPEN, 20 comments): An RFC proposing governance and compaction improvements for the Doc-Chain substrate, focused on preserving document provenance across session compression.

**Underlying needs**: The community is prioritizing stability of the core session management system and durable data governance to avoid data loss or inconsistent behavior across multi-profile deployments.

## 5. Bugs & Stability
Bugs reported in the last 7 days are ranked by severity (P0 highest to P3 lowest):
### P2 High-Severity Bugs
- [Issue #131199](https://github.com/NousResearch/hermes-agent/issues/131199): Windows native first-run install fails at the Python dependencies stage. *No dedicated fix PR is linked as of this digest.*
- [Issue #144691](https://github.com/NousResearch/hermes-agent/issues/144691): Desktop installer (v0.22.4/v0.22.5) fails on Windows during dependency resolution for setuptools and wheel across multiple Python versions. *No dedicated fix PR is linked.*
- [Issue #143364](https://github.com/NousResearch/hermes-agent/issues/143364): Multi-profile gateway incorrectly delivers secondary profile progress updates and notifications to the primary profile's Telegram bot. *No dedicated fix PR is linked.*
- [Issue #127105](https://github.com/NousResearch/hermes-agent/issues/127105): Background process notifications are incorrectly delivered as user messages on Discord (audit regression). *No dedicated fix PR is linked.*
- [Issue #143659](https://github.com/NousResearch/hermes-agent/issues/143659): TUI startup creates empty session rows, cluttering the session picker with "(Untitled)" ghost entries. *No dedicated fix PR is linked.*
- [Issue #144648](https://github.com/NousResearch/hermes-agent/issues/144648): Post-merge follow-up tracking for the newly released browser-hosted Webapp Desktop feature. *No dedicated fix PR is linked.*
- [Issue #144669](https://github.com/NousResearch/hermes-agent/issues/144669): SSH workspace file routes return 500 errors when the remote host is down. *Fixed by [PR #144661](https://github.com/NousResearch/hermes-agent/pull/144661).*

### P3 Lower-Severity Bugs
- [Issue #135200](https://github.com/NousResearch/hermes-agent/issues/135200): User .env files can override the `HERMES_MANAGED_DIR` deployment setting, creating a security boundary risk. *No dedicated fix PR is linked.*
- [Issue #144547](https://github.com/NousResearch/hermes-agent/issues/144547): Lifecycle guard blocks `hermes gateway restart` but not `hermes update`, allowing unguarded gateway termination during updates. *No dedicated fix PR is linked.*

## 6. Feature Requests & Roadmap Signals
Active open feature requests indicate likely priorities for upcoming releases:
- [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379): RFC for Doc-Chain substrate governance and compaction to preserve document provenance across session compression. This signals demand for more robust long-term memory management.
- [PR #144684](https://github.com/NousResearch/hermes-agent/pull/144684): Opt-in background "prepared" compaction, which triggers a background summarization pass before reaching the hard compaction threshold to reduce user-facing stalls. This feature aligns with ongoing performance improvement efforts.
- [PR #143346](https://github.com/NousResearch/hermes-agent/issues/143346): Kanban dispatcher improvement to report cap-hold reasons in stuck warnings, enhancing debuggability for workflow automation users.
- [PR #138287](https://github.com/NousResearch/hermes-agent/pull/138287): Plugin-safe goal context seam, enabling plugins to read and manage standing `/goal` state without breaking core functionality. This reflects ongoing investment in plugin extensibility.

## 7. User Feedback Summary
Key user pain points and use cases from the past week:
- **Windows installation friction**: Multiple users reported failed native and desktop installs on Windows 10/11 across various Python versions, blocking new user onboarding.
- **Multi-profile gateway confusion**: Users running multiplexed gateways with multiple bot profiles (e.g., Telegram, Discord) experienced misdelivered notifications and profile credential warnings, complicating multi-workflow setups.
- **TUI session clutter**: Power users of the terminal UI reported empty session entries accumulating in the picker, reducing productivity for frequent session switchers.
- **Installation speed concerns**: Users on slow storage systems reported multi-second startup delays from synchronous scratch pruning, leading to noticeable interface stalls.

## 8. Backlog Watch
Long-standing issues requiring maintainer attention:
- [Issue #127105](https://github.com/NousResearch/hermes-agent/issues/127105): Open since September 29, 2026, this audit regression for background notification misdelivery on Discord has seen a prior proposed fix closed without merge and remains unresolved.
- [Issue #121973](https://github.com/NousResearch/hermes-agent/issues/121973): Open since September 24, 2026, title generation consistently fails with a 400 error on the opencode-go deepseek-v4.1-flash provider due to unhandled structured output rejection formats.
- [PR #127784](https://github.com/NousResearch/hermes-agent/pull/127784): Open since September 29, 2026, this security-focused refactor unifies sandbox target resolution across all environment creators for Docker isolation, addressing inconsistent security boundary handling.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Weekly Project Digest (2026-10-26)

## 1. Last 7 Days' Overview
IronClaw maintained steady development momentum in the week ending 2026-10-26, with a heavy focus on dependency maintenance. The project processed 6 updated issues and 50 updated pull requests, with 5 issues remaining open/active and 3 pull requests merged or closed. No new releases were shipped during this period, and most PR activity centered on automated dependency updates across Rust, JavaScript, GitHub Actions, and Python ecosystems.

## 2. Releases
No new IronClaw releases were published in the last 7 days.

## 3. Project Progress
Three pull requests were merged or closed in the last 7 days:
- [#8142](https://github.com/nearai/ironclaw/pull/8142): `chore(deps): bump the everything-else group across 1 directory with 41 updates` (Rust dependency group update)
- [#8133](https://github.com/nearai/ironclaw/pull/8133): `chore(deps): bump the actions group across 1 directory with 11 updates` (GitHub Actions dependency group update)
- [#8149](https://github.com/nearai/ironclaw/pull/8149): `chore(deps): bump dompurify from 3.4.12 to 3.4.16` (JavaScript dev dependency update)

All merged/closed PRs were dependency maintenance updates, with no new feature or bug fix code changes merged this week.

## 4. Community Hot Topics
Due to limited comment and reaction data for this week's batch, community engagement highlights are based on discussion activity and priority signals:
- **[#8146](https://github.com/nearai/ironclaw/issues/8146) Hosted MCP: explicit 127.0.0.1 endpoint enrollment and private credential-account setup bridge**: Raises a critical constraint in current hosted MCP functionality, where HTTP/IP literals are rejected during registration, blocking local Connector use cases with credential-account bearer authentication.
- **[#2077](https://github.com/nearai/ironclaw/issues/2077) Contract source for market near ai**: A long-open request from developers building sovereign on-chain agents, who require published market.near.ai contract source to avoid dependence on IronClaw's HTTP API infrastructure.
- **[#8136](https://github.com/nearai/ironclaw/issues/8136) Proposal: optional hosted-MCP Plazmi extension using declarative auth and egress**: Proposes leveraging existing declarative extension surfaces to add a separate Plazmi companion extension, avoiding vendor logic bloat in the core host code.
Underlying needs: Developers are prioritizing interoperability, local deployment flexibility, and modular extension support for the hosted MCP ecosystem.

## 5. Bugs & Stability
Reported bugs and stability issues in the last 7 days, ranked by severity:
1. **Medium severity**: [#8146](https://github.com/nearai/ironclaw/issues/8146) Hosted MCP registration rejects HTTP/IP literals, preventing local Connector enrollment with credential-account bearer tokens. No fix PR is linked.
2. **Medium severity**: [#3168](https://github.com/nearai/ironclaw/issues/3168) (closed) Missing ARM64/aarch64 Docker image support, which blocked official image deployment on ARM64 machines. This issue was closed during the week; no associated fix PR is linked in the dataset.
3. **Low severity**: [#8153](https://github.com/nearai/ironclaw/issues/8153) and [#8143](https://github.com/nearai/ironclaw/issues/8143) Daily failure taxonomies report officeqa test suite non-pass cases, overwhelmingly attributed to DeepSeek-V4-Flash model quality errors rather than IronClaw core code bugs.

## 6. Feature Requests & Roadmap Signals
Open feature requests in the last 7 days:
- ARM64 Docker image support (tracked in closed issue [#3168](https://github.com/nearai/ironclaw/issues/3168))
- Hosted MCP 127.0.0.1 endpoint enrollment support ([#8146](https://github.com/nearai/ironclaw/issues/8146))
- Optional Plazmi hosted-MCP extension with declarative auth and egress ([#8136](https://github.com/nearai/ironclaw/issues/8136))
- Published market.near.ai contract source for sovereign on-chain agents ([#2077](https://github.com/nearai/ironclaw/issues/2077))

Predicted near-term roadmap priorities: Based on issue volume and open PR backlog, hosted MCP registration improvements and ARM64 build support are likely candidates for the next release cycle, followed by extension system refinements.

## 7. User Feedback Summary
Key user pain points reported this week:
- Developers building sovereign on-chain agents face infrastructure lock-in, as market.near.ai only offers HTTP API access without public contract source ([#2077](https://github.com/nearai/ironclaw/issues/2077))
- Local hosted MCP deployment use cases are blocked by registration restrictions on IP endpoints ([#8146](https://github.com/nearai/ironclaw/issues/8146))
- Users on ARM64 hardware were unable to run official Docker images prior to the issue closure ([#3168](https://github.com/nearai/ironclaw/issues/3168))
- Officeqa benchmark failures are tied to underlying model quality rather than IronClaw platform stability ([#8153](https://github.com/nearai/ironclaw/issues/8153), [#8143](https://github.com/nearai/ironclaw/issues/8143))
No explicit user satisfaction feedback was recorded in this week's dataset.

## 8. Backlog Watch
Long-standing items needing maintainer attention:
- [#2077](https://github.com/nearai/ironclaw/issues/2077) Contract source for market near ai: Open since 2026-04-06, updated as recently as 2026-10-21, with ongoing developer demand for on-chain agent integration.
- [#5450](https://github.com/nearai/ironclaw/pull/5450) feat(reborn): frugal default read/grep output to cut carried context: Open since 2026-06-30, updated 2026-10-22, targeting context window efficiency for reborn agents.
- [#5353](https://github.com/nearai/ironclaw/pull/5353) fix(http): raise http.save body limit so large downloads stream to disk: Open since 2026-06-26, updated 2026-10-22, addressing agent harness timeouts for large download tasks.
- [#6232](https://github.com/nearai/ironclaw/pull/6232) fix(reborn): auto-activate web-access and Brave-backed web_search: Open since 2026-07-18, updated 2026-10-22, improving agent discovery of built-in web search tools.
- [#7994](https://github.com/nearai/ironclaw/pull/7994) docs(design-system): DESIGN.md governance + Storybook guidelines: Open since 2026-08-31, updated 2026-10-22, part of the Epic #7781 phase 2 design system rollout.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Weekly Project Digest — 2026-10-26

## 1. Last 7 Days' Overview
QwenPaw maintained high development momentum over the past week, with 50 updated Issues (34 active, 16 closed) and 50 updated PRs (37 open, 13 merged/closed), plus one new patch release. The project is actively advancing its v2.3.0 roadmap focused on modularity, extensibility, and channel plugin architecture. Community engagement remains strong, with a healthy mix of bug reports, feature requests, and contributions from both regular and first-time contributors. This week also saw focused security remediation and stability improvements following the v2.2.2 release line.

## 2. Releases
A new patch release, **[v2.2.2.post1](https://github.com/agentscope-ai/QwenPaw/pull/8369)**, was published this week:
- **chore: Bump version to v2.2.2.post1** by @cuiyuebing ([#8369](https://github.com/agentscope-ai/QwenPaw/pull/8369))
- **fix(security): Remediate emSign CA trust across dependencies, installers, and builds** by @qbc2016 ([#8370](https://github.com/agentscope-ai/QwenPaw/pull/8370))
- No breaking changes or special migration steps are required for this release; it is a recommended security update for all v2.2.2 users.

## 3. Project Progress
While the full set of 13 merged/closed PRs is not enumerated in the provided data, closed issues this week highlight progress on key bug fixes and feature alignment:
- Closed issue [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171): Resolved audio file handling that permanently wedged sessions with LM Studio, improving media capability classifier robustness.
- Closed issue [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252): Addressed silent CancelledError in inter-agent calls that canceled paired sessions mid-execution, a critical stability fix for multi-agent fleet deployments.
- Closed issue [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284): Fixed Console long-conversation scrolling that snapped users back 1.1–2.2k px during re-estimation.
- Closed issue [#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249): Resolved cron job modification bugs that incorrectly reset default times and displayed `[object Object]` for request content.
- Ongoing work on [PR #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) is advancing the v2.3.0 goal of extracting channels into isolated plugins, a major architectural shift to reduce host process bloat and isolate channel failures.

## 4. Community Hot Topics
The most engaged discussions this week reflect core user needs for extensibility and cross-platform integration:
1. **[#338 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/338) — Webhook functionality request** (10 comments, 👍 1): Users want bidirectional webhook integration to connect QwenPaw with external tools, allowing outbound calls to QwenPaw and asynchronous result polling via a returned key. This signals strong demand for deeper automation and third-party integration beyond built-in channels.
2. **[#8071 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/8071) — Plugin-facing theme extension point** (8 comments): Plugin authors request a semantic token override layer to extend the Console theme system beyond the current single `colorPrimary` knob, enabling more polished, consistent plugin UIs. This aligns with the project's push for plugin extensibility in v2.3.0.
3. **[#8289 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/8289) — v2.3.0 lightweight/refactor announcement** (3 comments, 👍 1): Maintainers shared plans for a plugin refactor to make QwenPaw lighter and more modular, with community feedback already rolling in on expected extensibility improvements.

## 5. Bugs & Stability
Reported bugs this week are ranked by severity, with several already addressed by open PRs:
| Severity | Issue | Status | Details |
|----------|-------|--------|---------|
| Critical | [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350) (Open) | No fix PR yet | Feishu channel executes synchronous network calls on the main event loop, causing full service deadlock when network is unreachable (health checks timeout, SIGTERM cannot exit). |
| High | [#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413) (Open) | Fix PR: [#8419](https://github.com/agentscope-ai/QwenPaw/pull/8419) | Shell self-kill guard incorrectly blocks legitimate `kill $PID` commands for unrelated user processes, breaking standard daemon management workflows. |
| High | [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) (Open) | No fix PR yet | `governance/audit.db` stops recording per-agent tool calls even when `audit_level: all` is set, breaking compliance and auditability for enterprise deployments. |
| High | [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) (Open) | No fix PR yet | DingTalk channel silently drops final replies when `sessionWebhook` expires, with no Open API fallback, leading to lost user responses. |
| Medium | [#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351) (Open) | No fix PR yet | Console composer drafts are keyed per-agent instead of per-conversation, causing unsent text to leak across different chats of the same agent. |
| Medium | [#8417](https://github.com/agentscope-ai/QwenPaw/issues/8417) (Open) | No fix PR yet | Context compression fails with 400 errors on Volcano Engine AgentPlan's glm-5.3-flash, as the compat layer sends unsupported `thinking.type=disabled` parameters. |

## 6. Feature Requests & Roadmap Signals
Based on active requests and ongoing PRs, the following features are highly likely to land in the v2.3.0 release cycle:
- **Mid-execution agent guidance**: [PR #8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) implements the `/steer` command to let users correct agents mid-turn without losing progress, addressing a top usability pain point.
- **Plugin channel isolation**: [PR #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) moves all non-Console channels into subprocess-isolated plugins, directly fulfilling the v2.3.0 modularity roadmap.
- **DeepSeek Search provider**: [PR #8314](https://github.com/agentscope-ai/QwenPaw/pull/8314) adds native support for DeepSeek's Search endpoint, expanding web search options for users with existing DeepSeek API keys.
- **Hub global Skill/MCP management**: Issue [#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275) requests global shared Skills and MCPs for team deployments, a high-priority feature for enterprise Hub users that aligns with multi-user management roadmaps.
- **QQ C2C streaming messages**: [PR #8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) adds streaming support for QQ channel direct messages, improving real-time user experience for Chinese social channels.

## 7. User Feedback Summary
Top user pain points this week center on enterprise stability and team deployment usability:
- **Multi-agent fleet reliability**: Users report silent session cancellations and inter-call breaks when running complex Orchestrator/Reasoner/Executor/Reviewer/Defender setups, with no clear logging of cancellation causes.
- **Channel edge cases**: DingTalk, Feishu, and QQ channel users face silent message drops, expired webhook failures, and missing quoted context support, undermining trust in third-party channel integrations.
- **Team administration friction**: Hub users complain about redundant per-user Skill/MCP configuration, lack of global default UI settings, and container deployment failures caused by hardcoded `127.0.0.1` readiness probes.
- **Core workflow frustrations**: Desktop users highlight annoying UI bugs like unsent draft leakage across conversations, stuck scrolling, and approval dialogs that cannot be dismissed after requests are canceled.
Overall, feedback indicates that core agent functionality is solid, but channel robustness, enterprise governance features, and console UX polish are key areas for improvement.

## 8. Backlog Watch
The following long-running or high-impact items require maintainer attention:
- **[#8078 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/8078)**: Cross-session `chat_with_agent` calls are incorrectly registered as independent chats, splitting same-session conversations into multiple UI pages. This issue has been open since 2026-10-02 and creates major confusion for multi-agent users.
- **[#7339 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/7339)**: Long-standing feature request for a desktop auto-scroll toggle during streaming generation, open since 2026-08-27. This is a high-frequency usability request from desktop power users.
- **[#7835 (Open, Under Review)](https://github.com/agentscope-ai/QwenPaw/pull/7835)**: PR to stop leaking internal auto-memory-recall payload to external channels, open since 2026-09-17. This is a critical data leak fix for non-Console channels that needs review and merging.
- **[#7211 (Open, Under Review)](https://github.com/agentscope-ai/QwenPaw/pull/7211)**: PR to prevent injected request context from persisting to conversation history, open since 2026-08-21. This impacts long-term memory accuracy and privacy, and is awaiting maintainer review.
- **[#338 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/338)**: Webhook feature request, open since 2026-03-02, is one of the oldest and most commented enhancement requests, representing unmet automation demand from the user base.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Weekly Project Digest: 2026-10-26
## 1. Last 7 Days' Overview
Over the past week, ZeroClaw maintained strong development momentum aligned with its v0.9.0 release roadmap. 50 issues (38 active, 12 closed) and 50 pull requests (49 open, 1 merged) were updated, with no new public releases shipped. Development focused heavily on gateway, security, runtime, memory, and channel integrations, indicating preparation for upcoming feature stabilization and release hardening.

## 2. Releases
No new public releases were published in the last 7 days.

## 3. Project Progress
Only 1 pull request was merged/closed in the period, with limited new feature rollouts. Ongoing development work is concentrated on core capabilities for the v0.9.0 release, including gateway scoped chat, runtime capability management, and channel experience improvements. The majority of active pull requests remain in review or require author updates.

## 4. Community Hot Topics
### Active Issues
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) [OPEN] [Tracker]: Runtime, dashboard sign-in and gateway delivery (15 comments)
  This tracker coordinates the remaining runtime and gateway roadmap from RFC #5574, representing a core priority for the upcoming v0.9.0 release.
- [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) [OPEN] [Tracker]: Persistent memory - wire the curation, relevance, and operability planes to parity (14 comments)
  This multi-PR rollout aims to bring ZeroClaw's cross-session memory subsystem to feature parity with mature peer agent runtimes, addressing a key user expectation for reliable long-term memory.
- [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) [CLOSED] [Bug]: SOP engine promotes and runs later steps before recording a step's output-schema rejection (5 comments)
  A critical S1 workflow-blocking bug in the runtime daemon, already closed as of this week.
- [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) [OPEN] [Bug]: delegate bypasses parent's tool allowlist — sub-agent can invoke tools the parent policy excludes (5 comments)
  An S0 security vulnerability that undermines core permission boundaries for sub-agent execution.

### Active Pull Requests
- [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) [OPEN] feat(gateway): scoped dashboard chat through the core
  This high-risk, large-scale PR implements scoped dashboard chat for non-administrator signed-in users, a key v0.9.0 feature tied to issue [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984).
- [#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) [OPEN] feat(runtime): add capability-taking constructors for turn entry points
  This architectural enhancement for the runtime refactors turn entry points to explicitly require capabilities, improving security and modularity for v0.9.0.
- [#11754](https://github.com/zeroclaw-labs/zeroclaw/pull/11754) [OPEN] feat(channels): make acknowledgement reactions configurable
  This user-facing feature allows customization of channel acknowledgement reactions, improving flexibility for multi-channel deployments.

## 5. Bugs & Stability
Critical and high-severity bugs reported this week:
1. **S0 Security Risk: Delegate tool allowlist bypass** ([#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)): Sub-agents invoked via the `delegate` tool can bypass parent tool permission policies, creating potential unauthorized tool execution risks. No dedicated fix PR is currently open.
2. **S0 Data Loss: Markdown memory backend concurrent write failure** ([#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)): Overlapping `store()` calls to the markdown memory backend silently overwrite stored entries, leading to permanent data loss. Fix is addressed in PR [#11209](https://github.com/zeroclaw-labs/zeroclaw/pull/11209) which rejects unknown backends instead of defaulting to markdown.
3. **S1 Workflow Blocked: Custom OpenAI-compatible provider context window fallback** ([#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014)): Custom providers without a specified `context_window` are incorrectly assigned a hard-coded 32k limit, causing valid requests to be rejected. No fix PR is currently open.
4. **S0 Security: Container CA bundle trusts emSign chains** ([#11932](https://github.com/zeroclaw-labs/zeroclaw/issues/11932)): Published container images still include distrusted emSign intermediate CA chains, creating TLS verification risks. This issue was closed this week.
5. **S2 Degraded Behavior: Long conversation trimming deletes older turns** ([#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711)): When gateway conversations exceed context budget, history trimming permanently deletes older turns from the session store. No fix PR is currently open.

## 6. Feature Requests & Roadmap Signals
Likely upcoming features in the v0.9.0 release pipeline:
1. **Scoped Dashboard Chat**: Non-administrator signed-in users will be able to chat with agents they have permission to access (tracked in [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984), implemented in PR [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986)).
2. **Email Channel Improvements**: Operator-configured email templates and sanitized HTML bodies for outbound emails are requested ([#11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992)), along with explicit attachment support under read policies ([#11996](https://github.com/zeroclaw-labs/zeroclaw/issues/11996)).
3. **Shell Policy Clarity**: Shell command refusal messages will include specific rule details and operator-configurable hints ([#11799](https://github.com/zeroclaw-labs/zeroclaw/issues/11799)).
4. **Channel Reasoning Streaming**: Telegram and Slack channels will support streaming model reasoning in draft messages, matching existing Matrix functionality (PR [#11744](https://github.com/zeroclaw-labs/zeroclaw/pull/11744)).

## 7. User Feedback Summary
Key user pain points reported this week:
- Security policy transparency: Users report frustration that shell policy refusal messages do not explain *why* a command was blocked, making debugging difficult.
- Third-party provider reliability: Users relying on custom OpenAI-compatible providers are experiencing broken workflows due to the hard-coded context window fallback.
- Multi-channel consistency: Users want consistent, customizable acknowledgement and reasoning display across Slack, Telegram, and Matrix channels.
- Memory reliability: Critical data loss incidents with concurrent memory writes have eroded user trust in the persistent memory subsystem.
- Desktop usability: PowerShell dialect incorrectly blocks valid mail CLI commands containing bare `@` symbols, breaking common user workflows on Windows.

## 8. Backlog Watch
Key long-running or high-priority items needing maintainer attention:
- **#7432 Runtime/Gateway Tracker**: Open since June 2026, this high-priority v0.9.0 tracker has seen continued updates this week (last updated 2026-10-23) and requires ongoing coordination to meet release deadlines.
- **#8891 Persistent Memory Tracker**: Open since July 2026, this parity tracker for cross-session memory was updated on 2026-10-25 and needs continued progress to address data loss risks.
- **#8279 Delegate Tool Security Bug**: Open since June 2026, this S0 security vulnerability remains unresolved and needs immediate fix prioritization.
- **#11209 Memory Backend Fix**: PR open since September 2026, this critical fix for the markdown memory backend data loss issue still requires author updates and maintainer review to merge.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*