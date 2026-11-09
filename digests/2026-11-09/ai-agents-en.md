# OpenClaw Ecosystem Weekly Digest 2026-11-09

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-09 02:31 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Weekly Project Digest (2026-11-09)

## 1. Last 7 Days' Overview
OpenClaw maintained high development momentum over the past week, with 500 active issues and 500 active pull requests updated, alongside 4 new releases launched. The project is currently focused on addressing critical stability bottlenecks (release blockers, crash loops, performance regressions) while advancing new feature iteration for upcoming beta and stable releases. This week, the team resolved 120 stale or completed issues and merged 148 PRs, with active focus on macOS compatibility, SQLite performance, cross-channel message reliability, and Control UI experience optimization.

## 2. Releases
Four new versions were released this week, with key details as follows:
- **v2026.11.2 (Stable)**: Optimizes privacy and trust boundaries: configuration secrets, conversation content, tool errors, and channel payloads are excluded from diagnostic logs; provider and navigation trust boundary rules are enforced; MCP permissions are released after warm CLI turns. Reference: [Release Page](https://github.com/openclaw/openclaw/releases/tag/v2026.11.2)
- **v2026.11.1 (Stable)**: Fixes macOS configuration security issues: failed config saves no longer overwrite existing secrets; disabling Tailscale exposure preserves Gateway authentication; improves message reply reliability for Telegram, Discord, and webhook channels. Reference: [Release Page](https://github.com/openclaw/openclaw/releases/tag/v2026.11.1)
- **v2026.11.5-beta.1 (Beta)**: Launches the Knowledge Scribes feature: adds first-class knowledge capture and reusable scribe workflows across agents, sessions, and the Control UI; introduces a PostgreSQL-backed state data plane. Reference: [Release Page](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.1)
- **v2026.10.10 (Maintenance)**: Cumulative bugfix and performance optimization release, including 4,825 commits, 3,028 pull requests, and contributions from 454 contributors. Reference: [Release Page](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10)

No breaking changes or special migration notes were issued this week.

## 3. Project Progress
This week, 148 pull requests were merged or closed, with key progress as follows:
- **Core Infrastructure**: Fixed CI lint workflow split root-test configuration issues ([#195570](https://github.com/openclaw/openclaw/pull/195570)); eliminated redundant catalog copies during agent model listing to reduce unnecessary performance overhead ([#195571](https://github.com/openclaw/openclaw/pull/195571))
- **Agent & Session Management**: Fixed the issue where `sessions_history` failed to read transcripts for configured ACP owners ([#164993](https://github.com/openclaw/openclaw/pull/164993)); added recovery logic for in-flight runs after shared OAuth token rotation, reducing 401 sign-in errors ([#195522](https://github.com/openclaw/openclaw/pull/195522))
- **Control UI Experience**: Resolved duplicate image rendering after tool inspection ([#195359](https://github.com/openclaw/openclaw/pull/195359)); fixed scrolling stops before the final chat reply ([#195510](https://github.com/openclaw/openclaw/pull/195510)); preserved backslashes in plain-text Windows paths in chat ([#195504](https://github.com/openclaw/openclaw/pull/195504))
- **Voice Call Channel**: Added fix for interrupted voice call replies leaving agents processing abandoned questions ([#195546](https://github.com/openclaw/openclaw/pull/195546))

## 4. Community Hot Topics
The most active community discussions this week focused on stability and high-priority bug reports:
1. **[#166634](https://github.com/openclaw/openclaw/issues/166634) (26 comments, Open)**: Bug report where late reclamation commit checkpoint failure leaves agents unavailable after crash recovery. Underlying user need: reliable crash recovery workflows for production deployments with high availability requirements.
2. **[#191944](https://github.com/openclaw/openclaw/issues/191944) (25 comments, Open)**: Bug report where `gateway stop`/`stop --force` fail on macOS with process ancestry inspection errors. Underlying user need: reliable gateway management commands for macOS desktop deployments.
3. **[#38327](https://github.com/openclaw/openclaw/issues/38327) (18 comments, 3 reactions, Open)**: P1 regression bug where Google Vertex/Gemini-3.1-pro-preview integration throws "Cannot convert undefined or null to object" errors. Underlying user need: stable support for mainstream large model provider integrations.

## 5. Bugs & Stability
This week’s reported stability issues are ranked by severity as follows:
| Severity | Issue ID | Description | Fix Status |
|----------|----------|-------------|------------|
| P0 (Release Blocker) | [#193962](https://github.com/openclaw/openclaw/issues/193962) | SQLite header-probe timeout fix cannot be reached from 2026.10.10 via package update | Open, linked to v2026.11.5-beta.1 fix |
| P0 (Release Blocker) | [#162211](https://github.com/openclaw/openclaw/issues/162211) | Gateway startup blocks event loop for 40-200s, triggering restart loops | Open, no fix PR submitted |
| P0 (Release Blocker) | [#158592](https://github.com/openclaw/openclaw/issues/158592) | After host sleep/wake, model runtime publication timeout leaves agents unresponsive until gateway restart | Open, no fix PR submitted |
| P1 (Crash Loop) | [#191847](https://github.com/openclaw/openclaw/issues/191847) | 2026.10.10 regression: large sessions repeatedly crash 512MB SQLite worker, blocking all turns | Open, no fix PR submitted |
| P1 (Message Loss) | [#126950](https://github.com/openclaw/openclaw/issues/126950) | Telegram opaque callback payloads are silently dropped for non-plugin callers | Open, linked fix PR available |
| P1 (Auth Impact) | [#38327](https://github.com/openclaw/openclaw/issues/38327) | Google Vertex/Gemini integration regression causing runtime errors | Open, linked fix PR available |

## 6. Feature Requests & Roadmap Signals
This week’s high-impact feature requests indicate likely roadmap priorities:
1. **SecretRef support for MCP environment variables** ([#76493](https://github.com/openclaw/openclaw/issues/76493), 14 comments, 6 reactions): Users request support for indirect secret references in MCP server configurations to follow security best practices. This is likely to be prioritized in upcoming stable releases given security alignment with recent v2026.11.2 privacy improvements.
2. **Per-agent dreaming configuration** ([#67413](https://github.com/openclaw/openclaw/issues/67413), 16 comments, 5 reactions): Users request granular control over memory-core dreaming schedules to avoid OOM kills from concurrent workspace processing. This aligns with v2026.11.5-beta.1’s knowledge management feature expansion and is likely to be added in the next beta iteration.
3. **Markdown preview for Review files** ([#128090](https://github.com/openclaw/openclaw/issues/128090), 10 comments, 4 reactions): Users request rendered Markdown previews in the file review interface to improve readability of formatted content. This is a low-complexity Control UI improvement likely to be included in upcoming minor releases.

## 7. User Feedback Summary
Key user pain points identified this week include:
- **Cross-platform compatibility issues**: macOS users repeatedly report gateway stop/start failures ([#191944](https://github.com/openclaw/openclaw/issues/191944)) and post-sleep/wake recovery failures ([#158592](https://github.com/openclaw/openclaw/issues/158592)), indicating gaps in macOS deployment reliability.
- **Performance degradation in large deployments**: Users with large sessions or multi-agent setups report event loop stalls, memory bloat, and SQLite contention ([#117262](https://github.com/openclaw/openclaw/issues/117262), [#181432](https://github.com/openclaw/openclaw/issues/181432)), showing that core architecture scaling needs improvement for high-load use cases.
- **Silent failure risks**: Users highlight issues where denied tools silently disable memory persistence ([#126906](https://github.com/openclaw/openclaw/issues/126906)) or where cron runs fail without clear logging ([#160494](https://github.com/openclaw/openclaw/issues/160494)), indicating a need for better failure visibility and user notification.
- **UI/UX friction**: Users report chat transcript jitter during scrolling ([#164394](https://github.com/openclaw/openclaw/issues/164394)) and stale context window widget values ([#165421](https://github.com/openclaw/openclaw/issues/165421)), showing ongoing opportunities to polish the Control UI experience.

## 8. Backlog Watch
Important long-unanswered issues and pull requests requiring maintainer attention:
1. **[#14785](https://github.com/openclaw/openclaw/issues/14785)**: Feature request to reduce tool schema token overhead (~3,500 tokens per session). Open since 2026-02-12, 12 comments, marked as needing product decision. This high-impact efficiency improvement could significantly reduce inference costs for all users and needs prioritized triage.
2. **[#16670](https://github.com/openclaw/openclaw/issues/16670)**: Feature request to add mandatory memory/embedding setup to the onboarding wizard. Open since 2026-02-15, 10 comments, 2 reactions, marked as needing product decision. This onboarding gap leaves new users without access to OpenClaw’s core memory feature by default.
3. **[#193993](https://github.com/openclaw/openclaw/pull/193993)**: PR for owner-approved OpenClaw ID invitation node enrollment. Open since 2026-11-06, marked as waiting on author. This feature is critical for headless node deployment workflows and needs maintainer review to unblock user testing.
4. **[#141004](https://github.com/openclaw/openclaw/pull/141004)**: PR for audit logging of runtime skill usage. Open since 2026-09-07, no review status marked. This observability improvement is needed for enterprise users and requires maintainer triage to advance.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent & Personal Assistant Ecosystem
**Date: 2026-11-09**

## 1. Ecosystem Overview
The open-source AI agent and personal assistant landscape is in a phase of rapid, fragmented growth, with projects prioritizing distinct value propositions from multi-tenancy and enterprise integrations to local offline deployment. All active projects are addressing core stability gaps in cross-platform compatibility, third-party channel reliability, and security boundary enforcement, as usage scales from single-user local setups to production-grade multi-agent deployments. Community demand across the board is shifting from basic feature support to production readiness: auditability, permission scoping, memory system reliability, and transparent failure visibility are now top user priorities, rather than nice-to-have additions. The ecosystem is no longer dominated by generic chatbot frameworks, with vertical differentiation emerging for Windows/macOS native users, Chinese enterprise teams, and multi-tenant hosted deployment use cases.

## 2. Activity Comparison
| Project | Active Issues | Active PRs | Weekly Release Cadence | Health Score (0-10) |
|---------|---------------|------------|------------------------|---------------------|
| OpenClaw | 500 | 500 | 4 releases (2 stable, 1 beta, 1 maintenance) | 9/10 |
| Hermes Agent | 50 (38 open, 12 closed) | 50 (41 open, 9 merged/closed) | 3 releases (1 major, 2 patches) | 8/10 |
| IronClaw | 1 | 12 (9 open, 3 closed) | 0 releases | 5/10 |
| QwenPaw | 50 (31 open/active, 19 closed) | 50 (40 open, 10 merged/closed) | 1 beta release | 8/10 |
| ZeroClaw | 50 (45 open/active, 5 closed) | 50 (45 open, 5 merged/closed) | 0 releases (preparing v0.9.0) | 7/10 |

*Health Score Methodology: Weighted 40% issue/PR triage velocity, 30% release regularity, 20% resolution of high-severity bugs, 10% community engagement volume.*

## 3. OpenClaw's Position
### Advantages vs Peers
OpenClaw leads the ecosystem in both community scale (10x higher active issue and PR volume than most peers) and shipping velocity, with 4 releases in a single week including targeted stable patches for macOS security, privacy boundary enforcement, and cross-channel reliability. Unlike peers that are still prioritizing foundational stability fixes, OpenClaw has already shipped production-grade improvements to diagnostic logging, MCP permission management, and agent session recovery, positioning it as the most mature option for production deployments today.
### Technical Approach Differences
OpenClaw’s core architecture prioritizes privacy and trust boundary enforcement as a first-class concern, with built-in exclusion of sensitive data (secrets, conversation content, tool errors) from diagnostic logs, a feature no peer project has implemented to date. Its beta cycle also includes a PostgreSQL-backed state data plane for knowledge management, a more scalable long-term memory implementation than the SQLite-only stacks used by ZeroClaw and QwenPaw.
### Community Size Comparison
OpenClaw’s community is an order of magnitude larger than competing projects: its weekly 148 merged PRs and 120 resolved issues exceed the total annual merged PR volume of IronClaw, while its 454 contributors for its latest maintenance release dwarf Hermes Agent’s 666 total contributors across its major v0.23.0 launch. This scale gives OpenClaw a significant advantage in triaging niche edge cases and expanding channel/model integrations faster than smaller peers.

## 4. Shared Technical Focus Areas
The following requirements have emerged as high-priority needs across 3+ projects:
1. **Cross-Platform Compatibility for Windows/macOS**
   - Projects: OpenClaw, Hermes Agent, QwenPaw, ZeroClaw
   - Specific needs: Resolve gateway startup/stop failures on macOS, fix Windows subprocess/pipe handling hangs, address long-path encoding errors breaking SQLite access on Windows, and expand CI test coverage to non-Linux environments.
2. **Third-Party Channel Reliability & Transparent Failure Handling**
   - Projects: OpenClaw, Hermes Agent, QwenPaw
   - Specific needs: Fix silent message drops in Telegram/Slack/DingTalk/QQ channels, add explicit user feedback for message formatting degradation or config reload failures, and resolve authorization scoping gaps that cause invalid message delivery.
3. **Multi-Tenant & Multi-Agent Isolation**
   - Projects: ZeroClaw, Hermes Agent, OpenClaw
   - Specific needs: Per-sender/per-agent permission scoping for session/channel tools, sandboxed workspace isolation for delegated agents, and role-based access control for hosted deployments.
4. **Memory System Reliability**
   - Projects: OpenClaw, QwenPaw, ZeroClaw, Hermes Agent
   - Specific needs: Fix batch embedding reindex failures for CJK text, add external reranking for memory recall, add user control over automatic memory consolidation, and prevent memory corruption from concurrent agent runs.

## 5. Differentiation Analysis
| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| Core Feature Focus | Privacy/trust boundaries, cross-channel stability, knowledge management | Platform integration breadth (Telegram/Slack/Discord), desktop experience | Dependency maintenance, minimal feature footprint | Chinese market channel support, local deployment, WebUI UX | Multi-tenant gateway, security hardening, v0.9.0 production readiness |
| Target Users | Production deployments, privacy-focused teams | Enterprise Slack/Teams users, desktop power users | Minimal-maintenance deployment users | Chinese enterprise/DingTalk/QQ users, local offline model operators | Multi-tenant hosted service operators, security-focused teams |
| Technical Architecture | PostgreSQL state data plane (beta), SQLite core, strict permission boundaries | Plugin-first architecture, OAuth delegation pools | Minimal Rust dependency footprint, small attack surface | Cross-platform desktop + WebUI, ReMe memory integration | Gateway-core RPC architecture, OIDC identity integration |

## 6. Community Momentum & Maturity
- **Rapidly Iterating Tier**: OpenClaw and Hermes Agent are in high-velocity maintenance and feature iteration, with regular stable releases and active weekly PR/issue triage. OpenClaw is the most mature, with a full stable release cycle already established, while Hermes Agent just launched a major v0.23.0 feature release.
- **Pre-Release Rapid Development Tier**: ZeroClaw is in pre-v0.9.0 development, with intense focus on security and multi-tenancy hardening but no official releases yet; it has strong community engagement but lower production maturity. QwenPaw is in active beta iteration, with frequent WebUI and channel fixes but ongoing Windows stability gaps.
- **Stabilized Low-Activity Tier**: IronClaw is in a stable maintenance phase, with no new features or releases, and only dependency update activity; it is not actively prioritizing new user-facing functionality.

## 7. Trend Signals
Key industry trends extracted from community feedback, with actionable value for AI agent developers:
1. **Security and permission scoping are no longer afterthoughts**: S0-severity bugs around sandbox overexposure, unrestricted config writes, and missing per-agent ownership rules are the top reported issues across ZeroClaw and OpenClaw. Developers building new agent frameworks must bake permission boundaries and audit logging into core architecture early, rather than adding them post-hoc, to meet user demand for production deployability.
2. **Silent failures erode user trust far more than explicit errors**: Across every project, users consistently highlight silent message drops, config resets, and model fallback events as their most frustrating pain point. Teams should prioritize user-visible error reporting and failure logging as a core feature, rather than prioritizing uptime over transparency.
3. **Local and Chinese market deployments are underserved growth areas**: QwenPaw’s high volume of CJK memory indexing and DingTalk/QQ channel requests indicates a large, unmet user base for open-source agents optimized for non-English, enterprise IM environments. Developers targeting this segment can differentiate quickly by fixing cross-platform Windows compatibility and CJK token handling gaps that Western-focused projects have deprioritized.
4. **Multi-tenancy is the next major product milestone**: All mid-sized projects (ZeroClaw, Hermes Agent, OpenClaw) have active feature requests for per-sender RBAC, sandboxed multi-agent workflows, and hosted deployment support. This signals that the market is moving past single-user local assistants to demand production-grade hosted agent infrastructure, creating a clear roadmap for teams looking to build production-ready agent platforms.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Weekly Digest | 2026-11-09

## 1. Last 7 Days' Overview
Hermes Agent maintained extremely high development velocity over the past week, with 50 updated issues (38 open, 12 closed) and 50 updated pull requests (41 open, 9 merged/closed), plus 3 official releases including a major version update. The project’s active contributors and community engagement are robust, with a large number of bug fixes and feature enhancements focused on platform integrations (Telegram, Slack, Discord), session state management, and multi-tenancy support. Overall, the project is in a stable and active maintenance phase, with priority given to fixing platform compatibility issues and improving core agent reliability.

## 2. Releases
Three new versions were released this week:
- **v0.23.0 (The Hearth Release, 2026-11-05)**: A major feature release with ~10,080 commits since v0.22.0, including ~1,950 merged PRs, ~8,720 file changes, ~725,200 line insertions, ~201,400 line deletions, and ~850 closed issues, contributed by 666 contributors. Full curated release notes are pending, but this release incorporates all patch updates from v0.22.6 and v0.22.7.
- **v0.22.7 (2026-11-03)**: A patch release rolling up ~174 merged PRs since v0.22.6, available for GitHub CLI/installers, Microsoft Store, Docker, and Hermes Cloud.
- **v0.22.6 (2026-11-02)**: A patch release rolling up ~776 merged PRs since v0.22.5, with distribution across all official channels.

No breaking changes or migration notes are specified for these releases in the provided data.

## 3. Project Progress
In the past 7 days, 9 PRs were merged/closed, advancing the following improvements:
- Telegram platform bug fixes: Resolved authorization scoping issues ([#68716](https://github.com/NousResearch/hermes-agent/issues/68716), [#55462](https://github.com/NousResearch/hermes-agent/issues/55462)), restart command feedback gaps ([#65057](https://github.com/NousResearch/hermes-agent/issues/65057)), streaming bubble flicker regressions ([#54817](https://github.com/NousResearch/hermes-agent/issues/54817)), and unhandled update receipt issues ([#141570](https://github.com/NousResearch/hermes-agent/issues/141570)).
- Core bug fixes: Fixed Desktop boot failures with parked profiles ([#138791](https://github.com/NousResearch/hermes-agent/issues/138791)), plugin LLM request extra_body loss ([#151595](https://github.com/NousResearch/hermes-agent/issues/151595)), and kanban dispatcher environment variable race conditions ([#65225](https://github.com/NousResearch/hermes-agent/issues/65225)).

Open PRs in progress include session state storage porting, multi-tenancy sandbox isolation, and Telegram plugin experience improvements.

## 4. Community Hot Topics
The most active community discussions are as follows:
1. **Slack status indicator breakage with slack-sdk ≥3.44** ([#110374](https://github.com/NousResearch/hermes-agent/issues/110374)): 14 comments, 16 upvotes. Users report that the working status indicator silently disappears after updating the Slack SDK, with all status calls failing due to invalid arguments. This is the most widely reported bug this week, reflecting strong user demand for reliable Slack integration status feedback.
2. **ACP response duplication bug** ([#141919](https://github.com/NousResearch/hermes-agent/issues/141919)): 9 comments. Users report that ACP streaming clients render the full assistant reply twice when using output transformation hooks, damaging chat readability.
3. **Windows ACP session hang bug** ([#135977](https://github.com/NousResearch/hermes-agent/issues/135977)): 7 comments. Windows users face infinite hangs when creating ACP sessions due to subprocess pipe handling issues, severely impacting usability on the Windows platform.

## 5. Bugs & Stability
Bugs reported this week are ranked by severity:
- **P1 (High Severity)**: Anthropic OAuth token revocation race condition in delegated tasks ([#138337](https://github.com/NousResearch/hermes-agent/issues/138337)): Child tasks sharing an OAuth pool revoke each other’s tokens on 401 errors, leading to unhandled refresh caps and task failures. No dedicated fix PR is currently listed.
- **P2 (Medium Severity)**:
  - Slack status indicator breakage ([#110374](https://github.com/NousResearch/hermes-agent/issues/110374)): No fix PR listed yet.
  - ACP response duplication ([#141919](https://github.com/NousResearch/hermes-agent/issues/141919)): No fix PR listed yet.
  - Windows ACP session hang ([#135977](https://github.com/NousResearch/hermes-agent/issues/135977)): No fix PR listed yet.
  - Telegram group authorization bypass ([#95670](https://github.com/NousResearch/hermes-agent/issues/95670)): No fix PR listed yet.
  - Desktop read-aloud replaying previous replies ([#135623](https://github.com/NousResearch/hermes-agent/issues/135623)): No fix PR listed yet.
  - Missing interim messages for Codex Responses gateways ([#142663](https://github.com/NousResearch/hermes-agent/issues/142663)): No fix PR listed yet.
  - Windows kanban worker stall ([#147613](https://github.com/NousResearch/hermes-agent/issues/147613)): No fix PR listed yet.
  - Auxiliary lane wrong model routing ([#147619](https://github.com/NousResearch/hermes-agent/issues/147619)): No fix PR listed yet.
  - Dangerous relative-path rm commands unflagged ([#151542](https://github.com/NousResearch/hermes-agent/issues/151542)): No fix PR listed yet.
  - Plugin hub rebuild performance issues causing WebSocket drops ([#148365](https://github.com/NousResearch/hermes-agent/issues/148365)): No fix PR listed yet.
- **P3 (Low Severity)**: Includes Telegram dice message dropping, Desktop group chat UX gaps, and minor configuration issues. Fix PRs are available for several items, including [#151615](https://github.com/NousResearch/hermes-agent/pull/151615) for Telegram dice handling and [#151614](https://github.com/NousResearch/hermes-agent/pull/151614) for plugin manifest collision logging.

## 6. Feature Requests & Roadmap Signals
Key user-requested features that may appear in upcoming versions:
1. **Explicit opt-in for unattended memory consolidation** ([#106919](https://github.com/NousResearch/hermes-agent/issues/106919)): Users want granular control over automatic memory cleanup, with an opt-in option for background consolidation while retaining approval gates for destructive changes.
2. **Vision support auto-detection for unknown model IDs** ([#131208](https://github.com/NousResearch/hermes-agent/issues/131208)): Users want the agent to automatically probe model capabilities instead of defaulting to text-only processing for new model IDs not in the config catalog.
3. **Plugin goal management API** ([#138280](https://github.com/NousResearch/hermes-agent/issues/138280)): Users want plugins to be able to set, read, and clear session goals to support plan-mode workflows.
4. **Hosted multi-tenancy support** ([#146503](https://github.com/NousResearch/hermes-agent/issues/146503)): Active PRs ([#149924](https://github.com/NousResearch/hermes-agent/pull/149924), [#151554](https://github.com/NousResearch/hermes-agent/pull/151554)) are advancing multi-tenant hosted deployments with isolated sandbox access, which is likely to be a key focus of the next major release.

## 7. User Feedback Summary
Common user pain points reported this week include:
- **Platform integration reliability**: Slack and Telegram users face frequent silent failures (status indicators disappearing, messages being dropped, authorization scoping issues), which erode trust in third-party platform compatibility.
- **Windows platform usability**: Windows users report consistent hangs and worker stalls in ACP and kanban workflows, indicating unaddressed edge cases in Windows subprocess and pipe handling.
- **Desktop experience inconsistencies**: Desktop users face issues with find-in-page reloads, read-aloud replays, and missing group chat features (drag-and-drop, @autocomplete), reducing the desktop client’s competitiveness.
- **Performance overhead**: Users running multiple profiles report high CPU usage from dashboard API calls and frequent plugin hub rebuilds, leading to unstable remote client connections.

Satisfaction is high with the rapid pace of patch releases and the active development of multi-tenancy and plugin ecosystem improvements.

## 8. Backlog Watch
Long-running important issues needing maintainer attention:
- **Discord handoff thread type bug** ([#95670](https://github.com/NousResearch/hermes-agent/issues/95670)): Opened on 2026-08-26, with 6 comments, still open. This bug causes Discord handoff threads to default to private instead of the intended channel type, disrupting team workflow integrations.
- **Unattended memory consolidation opt-in discussion** ([#106919](https://github.com/NousResearch/hermes-agent/issues/106919)): Opened on 2026-09-09, with 5 comments and labeled "needs-decision". This feature request requires a maintainer decision on the default behavior for memory management.
- **Telegram dice message dropping bug** ([#78719](https://github.com/NousResearch/hermes-agent/issues/78719)): Opened on 2026-08-04, with 3 comments. A fix PR ([#151615](https://github.com/NousResearch/hermes-agent/pull/151615)) is now open, but the issue has been unaddressed for over 3 months.
- **Kanban retry notification misleading promise bug** ([#84059](https://github.com/NousResearch/hermes-agent/issues/84059)): Opened on 2026-08-11, still open. Users report that notifications promise retries that never happen, damaging trust in task scheduling reliability.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Weekly Project Digest (2026-11-09)

## 1. Last 7 Days' Overview
In the past 7 days, the IronClaw repository has focused almost entirely on dependency maintenance. There was 1 active issue, 12 pull requests (9 open, 3 closed), and no new releases. This indicates a stable period focused on keeping dependencies up-to-date rather than adding new features.

## 2. Releases
No new releases were published this week.

## 3. Project Progress
Three pull requests were closed this week, all related to dependency updates:
- **PR #8160**: Closed a batch update for the "everything-else" group (43 updates) in favor of a newer version.
- **PR #8151** and **PR #8152**: Closed updates for `rustls` (from 0.23.43 to 0.23.45) in favor of newer updates to 0.23.46.
No new features were merged into the main codebase.

## 4. Community Hot Topics
- **Issue #8115**: [Add a Tsubasa registry entry with an explicit 32K context-budget path](https://github.com/nearai/ironclaw/issues/8115)
    - **Analysis**: This is the only active issue. The user requests a named provider entry for "Tsubasa" to simplify configuration for users who currently have to manually enter endpoint and model details.

## 5. Bugs & Stability
- **Status**: No bugs, crashes, or regressions were reported in the last 7 days.
- **Note**: Closed PR #8160 resolved a conflict where an older batch of 43 dependency updates was superseded by a newer batch of 44 updates.

## 6. Feature Requests & Roadmap Signals
- **Request**: The only pending feature request is for **Tsubasa Registry Entry Integration** (Issue #8115). Adding named providers is a common quality-of-life improvement, though it is not guaranteed to be in the next release.

## 7. User Feedback Summary
- **Pain Point**: Users currently using the OpenAI-compatible backend for "Tsubasa" must configure the endpoint and model manually, which the reporter suggests is unclear.
- **Satisfaction**: No negative feedback or complaints about stability were recorded.

## 8. Backlog Watch
- **PR #7834**: [chore(deps): bump the wasm group across 1 directory with 4 updates](https://github.com/nearai/ironclaw/pull/7834)
    - This Pull Request has been open since August 23, 2026, making it over 10 weeks old. It updates WASM-related dependencies (`wasmtime`, `wasmtime-wasi`, etc.). Given the "medium risk" and "experienced contributor" labels, it likely requires maintainer attention to resolve conflicts and review before merging.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Weekly Project Digest (2026-11-09)

## 1. Last 7 Days' Overview
QwenPaw maintained high development momentum in the past week, with 50 updated Issues (31 open/active, 19 closed) and 50 updated Pull Requests (40 open, 10 merged/closed). The project released a new beta version v2.3.0-beta.2, focusing on WebUI optimization, cross-platform compatibility, memory system stability, and channel functionality improvements. The community remains highly engaged, with a large number of user feedback and contribution activities, indicating that the project is in a rapid iteration phase targeting near-term stability and feature expansion.

## 2. Releases
- **v2.3.0-beta.2**
  - Key changes:
    - Fixed console agent skill selection logic to restrict operations to the creation phase ([PR #8448](https://github.com/agentscope-ai/QwenPaw/pull/8448))
    - Optimized compact media preview error cards in the console to reduce UI clutter ([PR #8451](https://github.com/agentscope-ai/QwenPaw/pull/8451))
    - Addressed console browser usability issues
  - No public breaking changes or migration notes were specified in the release description.

## 3. Project Progress
In the past week, 10 PRs were merged/closed, and multiple core functional improvements and fix optimizations were advanced:
- **Console & WebUI Optimization**: Multiple PRs focused on console experience improvements, including fixing default agent edit button permission issues, adding model pool removal functionality, optimizing tab title dynamic update logic, and resolving post-/clear chat state display bugs.
- **Channel Stability**: Fixed the QQ channel enabled flag silent reset issue after config reload, and addressed Matrix channel multi-workspace activation failures.
- **Memory System**: Resolved ReMe reranker empty API key validation failure and embedding reindex incomplete bugs caused by CJK chunk token limits.
- **Cross-platform Compatibility**: Fixed desktop build missing visual compression assets, Windows workspace path decoding errors, and Hub Local runtime startup failures.
- **Tooling**: Resolved code mode tool call parameter conflicts, and fixed edit_file line ending and encoding preservation issues.

## 4. Community Hot Topics
- **Top Active Issues (by comment count)**:
  1. [#7997 [Feature]: Support message retraction/editing and workspace rollback in WebUI](https://github.com/agentscope-ai/QwenPaw/issues/7997) (9 comments): Users strongly demand the ability to edit/retract sent messages and roll back workspace file changes to maintain clean conversation context, reflecting a core need for iterative AI conversation refinement.
  2. [#8040 [Bug]: embedding reindex incomplete: N chunks failed — one CJK chunk over the provider's per-item token limit silently drops its whole batch](https://github.com/agentscope-ai/QwenPaw/issues/8040) (8 comments): This recurrent bug exposes memory indexing reliability issues for Chinese users, with users seeking batch-level fault tolerance rather than silent failure.
  3. [#8278 [Bug]: DingTalk 通道在消息 >3500 字符时整条降级为纯文本，表格/Markdown 全部失效](https://github.com/agentscope-ai/QwenPaw/issues/8278) (6 comments): Enterprise users relying on DingTalk for data report scenarios are severely impacted by silent markdown degradation, requiring explicit feedback and message splitting logic.
- **Top Active PRs (by update frequency)**:
  - [#8634 fix(cron): track scheduled agent runs](https://github.com/agentscope-ai/QwenPaw/pull/8634): Improves observability of scheduled agent tasks, enabling task status tracking and cancellation via existing infrastructure.
  - [#8524 fix(desktop): open workspace HTML via the decoded local path](https://github.com/agentscope-ai/QwenPaw/pull/8524): Fixes Windows desktop workspace preview failures caused by URL encoding issues.
  - [#8236 fix(ollama): size context window from num_ctx instead of 128k default](https://github.com/agentscope-ai/QwenPaw/pull/8236): Optimizes local Ollama model context window adaptation, a key need for local deployment users.
- **Underlying community needs**: The user base is expanding across enterprise IM channels and local deployment scenarios, with growing demands for cross-platform stability, Chinese language support, and fine-grained conversation/memory control.

## 5. Bugs & Stability
Bugs are ranked by impact severity:
1. **Critical: Windows multi-scenario startup/runtime failures**
   - Issues: [#8565 Hub Local runtime cannot start on Windows](https://github.com/agentscope-ai/QwenPaw/issues/8565), [#8616 2.3.0-beta.1 does not start on Windows 11 IoT LTSC](https://github.com/agentscope-ai/QwenPaw/issues/8616), [#8585 recall_history broken on Windows: workspace_dir canonicalized to `\\?\` extended-length path breaks SQLite read-only URI](https://github.com/agentscope-ai/QwenPaw/issues/8585)
   - Impact: Blocks core functionality for Windows desktop users, including runtime startup, memory recall, and workspace access.
   - Fix status: Relevant PRs ([#8524](https://github.com/agentscope-ai/QwenPaw/pull/8524), [#8568](https://github.com/agentscope-ai/QwenPaw/pull/8568)) are under review.
2. **High: Memory system instability**
   - Issues: [#8580 Memory tag index never rebuilds: /memory/tags returns 503 "Memory tag index is unavailable"](https://github.com/agentscope-ai/QwenPaw/issues/8580), [#8040 embedding reindex incomplete](https://github.com/agentscope-ai/QwenPaw/issues/8040)
   - Impact: Breaks automatic memory tagging and long-term memory retrieval, reducing AI assistant context awareness.
   - Fix status: No dedicated fix PR merged yet; related memory optimization work is in progress.
3. **High: Channel silent failure issues**
   - Issues: [#8475 QQ channel `enabled` flag silently reset to `false` after config reload/restart](https://github.com/agentscope-ai/QwenPaw/issues/8475), [#8278 DingTalk long message markdown degradation](https://github.com/agentscope-ai/QwenPaw/issues/8278)
   - Impact: Causes IM channel message reception failure or content formatting loss without warning, severely impacting enterprise usage.
   - Fix status: PR [#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) for channel enabled state preservation is open.
4. **Medium: Desktop UI abnormal behavior**
   - Issues: [#8560 Desktop window is forced always-on-top (WS_EX_TOPMOST) in 2.3.0-beta.2](https://github.com/agentscope-ai/QwenPaw/issues/8560), [#8596 Reopening a chat after /clear shows the /clear message and hides the empty-state greeting](https://github.com/agentscope-ai/QwenPaw/issues/8596)
   - Impact: Disrupts daily desktop usage experience, with window always-on-top blocking fullscreen applications.
   - Fix status: PR for post-/clear UI fix is merged; always-on-top issue has no dedicated fix PR yet.
5. **Medium: Model call compatibility issues**
   - Issues: [#7026 deepseek-v4-pro 模型调用时自动注入 chat_template_kwargs 参数未被 extra_body 包装](https://github.com/agentscope-ai/QwenPaw/issues/7026), [#8505 OpenAI-compatible gateway bare APIError with real status only in message text is classified as `unknown`](https://github.com/agentscope-ai/QwenPaw/issues/8505)
   - Impact: Causes model call failures or missing retry logic for third-party model deployments.
   - Fix status: No dedicated fix PR merged yet.

## 6. Feature Requests & Roadmap Signals
- **High-priority user-requested features (likely to enter near-term development)**:
  1. WebUI message edit/retraction + workspace rollback ([#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997)): The most upvoted feature request, aligning with user demand for flexible conversation iteration.
  2. Chat list pagination functionality ([#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570)): Solves slow loading for users with large numbers of conversations, a practical UI optimization need.
  3. Response quote/reference for follow-up context ([#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)): Similar to Perplexity's quote feature, improves context continuity for complex Q&A scenarios.
  4. Silent model fallback notification ([#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103)): Users want transparency when the system switches models mid-request.
- **Roadmap signals**:
  The project is prioritizing: 1) local Ollama deployment optimization ([#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)), 2) mid-execution agent guidance via /steer command ([#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318)), 3) console workflow simplification for model/agent management ([#7307](https://github.com/agentscope-ai/QwenPaw/pull/7307), [#8434](https://github.com/agentscope-ai/QwenPaw/pull/8434)), indicating a focus on both local deployment usability and production workflow efficiency.

## 7. User Feedback Summary
- **Top pain points**:
  1. Chinese support defects: GBK/CP936 file decoding failures, DingTalk long message markdown degradation, CJK embedding chunk token limit issues — significantly impact Chinese enterprise and individual users.
  2. Cross-platform stability: Windows desktop startup failures, path decoding errors, and permission issues are widespread complaints.
  3. Silent system failures: Channel enabled flag resets, model fallback, and embedding reindex failures without logs leave users troubleshooting blindly.
- **Use case highlights**: Users rely on QwenPaw for enterprise IM (DingTalk, QQ, Matrix) report delivery, local offline model deployment, long-term memory knowledge base management, and scheduled cron agent task execution.
- **Satisfaction trends**: Users appreciate the project's rapid iteration speed, but dissatisfaction stems from beta version stability issues and incomplete cross-platform adaptation, with many requests for UI layout customization to match older version efficiency.

## 8. Backlog Watch
- **Long-open important Issues needing maintainer attention**:
  1. [#2420 [enhancement] [Feature]: 体验反馈：跨智能体协作功能的引导、触发、连贯性与身份混淆现象](https://github.com/agentscope-ai/QwenPaw/issues/2420): Created in March 2026, closed this week after 4 comments, related to multi-agent collaboration usability improvements.
  2. [#3570 [enhancement] [Feature]: Can the "All Chats" list in the upper right be given pagination functionality?](https://github.com/agentscope-ai/QwenPaw/issues/3570): Created in April 2026, still open, with growing user demand as conversation counts increase.
- **Long-open important PRs needing review**:
  1. [#7066 fix(drivers): persist rotated refresh_token for OAuth2 auth-code providers](https://github.com/agentscope-ai/QwenPaw/pull/7066): Opened in August 2026, addresses OAuth2 token rotation persistence for remote MCP servers, critical for enterprise integration scenarios.
  2. [#7307 feat(console): chain provider config straight into model management](https://github.com/agentscope-ai/QwenPaw/pull/7307): Opened in August 2026, simplifies model management workflow in the console, aligning with user demands for improved UI efficiency.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Weekly Project Digest — 2026-11-09

## 1. Last 7 Days' Overview
ZeroClaw maintained very high development momentum over the past 7 days, with 50 updated issues and 50 updated pull requests, including 5 closed issues and 5 merged/closed pull requests. Work is heavily focused on v0.9.0 preparation, dashboard/gateway security, identity access, multi-agent/delegation behavior, provider compatibility, and channel/runtime robustness. The project shows strong issue triage and active PR review, but security, sandboxing, and permission-boundary issues remain the main risk areas.

Weekly activity summary:
- Updated issues: 50
- Open/active issues: 45
- Closed issues: 5
- Updated PRs: 50
- Open PRs: 45
- Merged/closed PRs: 5
- New releases: 0

## 2. Releases
No new ZeroClaw releases were published during the past 7 days.

## 3. Project Progress
The repository shows continued movement toward the v0.9.0 release, especially around runtime, dashboard sign-in, gateway delivery, and non-administrator dashboard chat. A significant roadmap tracker remains active: [#7432 [Tracker]: Runtime, dashboard sign-in and gateway delivery](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

### Closed / completed security and identity work
- [#11126 [Bug]: Queued session operations retain revoked administrator ownership bypass](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) — closed, addressing stale administrator ownership in queued session operations.
- [#12050 [Bug]: The OIDC callback token page has no browser binding, allowing login CSRF](https://github.com/zeroclaw-labs/zeroclaw/issues/12050) — closed, closing a browser login CSRF gap in the OIDC callback flow.
- [#12052 [Bug]: Gateway limiters key on the first X-Forwarded-For entry, so a client behind an appending proxy can claim the loopback exemption](https://github.com/zeroclaw-labs/zeroclaw/issues/12052) — closed, fixing IP-based rate-limit bypasses behind reverse proxies.

### Provider compatibility work
- [#10501 MCP tool-result images 400 on OpenAI-compatible providers](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) — closed, resolving image content placement for OpenAI-compatible providers.

### In-flight feature areas
- Non-admin dashboard chat is in progress via [#11984 [Feature]: Dashboard chat for signed-in accounts without administrator rights](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) and [#12244 feat(gateway): scoped dashboard chat through the core, on a shared RPC client](https://github.com/zeroclaw-labs/zeroclaw/pull/12244).
- Gateway test coverage for scoped dashboard chat is tracked in [#11985 Gateway tests for scoped dashboard chat under JWKS validation](https://github.com/zeroclaw-labs/zeroclaw/issues/11985).
- Cross-platform CI is being expanded from Linux-only to Windows and macOS via [#7461 [Feature]: Run the test suite on Windows and macOS in CI](https://github.com/zeroclaw-labs/zeroclaw/issues/7461).
- Memory recall quality is being extended with external reranking via [#12036 feat(memory): order recalled memories with an external rerank endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/12036).
- Provider behavior improvements include OpenAI runtime-profile thinking support in [#12059 feat(providers): honor runtime-profile thinking for OpenAI](https://github.com/zeroclaw-labs/zeroclaw/pull/12059), Codex streaming retry handling in [#12073 fix(providers): retry Codex streams as streams on the default endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/12073), and SSE sentinel handling in [#12277 fix(providers): accept complete SSE sentinel at EOF](https://github.com/zeroclaw-labs/zeroclaw/pull/12277).

## 4. Community Hot Topics
The most active discussions this week center on security boundaries, multi-tenant agent deployment, gateway/dashboard delivery, and sandbox behavior.

### Highest-comment issues
1. [#7432 [Tracker]: Runtime, dashboard sign-in and gateway delivery](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — 16 comments. This is the central v0.9.0 tracker for runtime, dashboard sign-in, and gateway delivery.
2. [#5982 [Feature]: Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — 12 comments. The community is converging on building sender roles on the existing agent/risk-profile model rather than a separate RBAC crate.
3. [#11420 [Bug]: SQLite session backend rewrites created_at of every message on each turn](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — 10 comments. Users are losing per-message timestamps, affecting auditability and session history.
4. [#10315 Re-add the browser enrollment frontdoor after #10142 — without hand-rolled TLS](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) — 6 comments. Enrollment has partially landed, but browser dashboard/session-tier work remains open.
5. [#9872 [Bug]: Bounded delegate target resolves filesystem to delegator's workspace instead of own workspace](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) — 5 comments. Multi-agent delegation isolation is clearly important.
6. [#9597 [Feature]: make peer-agent turns durable and attributable](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) — 5 comments. Users want peer-agent communication to become a first-class lifecycle task.
7. [#7461 [Feature]: Run the test suite on Windows and macOS in CI](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) — 5 comments. Cross-platform confidence is a major maintainer and contributor need.

### PR attention signals
Large PRs under active review include:
- [#11319 feat(gateway): move plugin webhook admission and dedup into a core ingress](https://github.com/zeroclaw-labs/zeroclaw/pull/11319)
- [#12244 feat(gateway): scoped dashboard chat through the core](https://github.com/zeroclaw-labs/zeroclaw/pull/12244)
- [#12230 feat(channels): add native Zulip channel](https://github.com/zeroclaw-labs/zeroclaw/pull/12230)
- [#12036 feat(memory): order recalled memories with an external rerank endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/12036)
- [#12059 feat(providers): honor runtime-profile thinking for OpenAI](https://github.com/zeroclaw-labs/zeroclaw/pull/12059)

Underlying needs: the community is pushing ZeroClaw from a single-user local assistant toward a multi-tenant, deployable gateway product. The recurring demand is stronger permission scoping, auditability, sandbox isolation, and stable dashboard access.

## 5. Bugs & Stability
### S0 / critical security-risk bugs
- [#9646 [Bug]: Session/channel read+write tools lack per-agent ownership scoping](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) — any agent may act on another agent's session or channel identifiers supplied through model arguments.
- [#12311 [Bug]: macOS Seatbelt profile grants sandboxed commands read access to every home dotfile, including ~/.zeroclaw](https://github.com/zeroclaw-labs/zeroclaw/issues/12311) — severe sandbox exposure.
- [#12310 [Bug]: MCP config-control bridge gives the model unrestricted write access to every config path with no approval](https://github.com/zeroclaw-labs/zeroclaw/issues/12310) — severe configuration-write security risk.

### S1 / blocked workflow
- [#12187 [Bug]: Channel cached-turn normalization merges a user turn into a role=tool envelope, permanently poisoning the conversation on strict providers](https://github.com/zeroclaw-labs/zeroclaw/issues/12187) — breaks conversations on strict providers.

### S2 / degraded behavior
- [#11420 [Bug]: SQLite session backend rewrites created_at of every message on each turn](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — per-message timestamps are lost.
- [#9872 [Bug]: Bounded delegate target resolves filesystem to delegator's workspace](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) — delegation filesystem isolation is incorrect.
- [#12228 [Bug]: cron update --agent reports success but never reassigns the job's agent](https://github.com/zeroclaw-labs/zeroclaw/issues/12228).
- [#11696 perf(runtime): system prompt is rebuilt from disk every turn](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) — cache busting and cost regression.
- [#12211 [Bug]: delegated agents don't load TOOLS.md](https://github.com/zeroclaw-labs/zeroclaw/issues/12211).
- [#12235 [Bug]: delegated agent returns raw text tool calls because native_tools is not honored in delegate loop](https://github.com/zeroclaw-labs/zeroclaw/issues/12235).
- [#12227 [Bug]: Shell approval depends on an "approved" value the model writes itself](https://github.com/zeroclaw-labs/zeroclaw/issues/12227).

### S3 / minor
- [#12205 [Bug]: Empty canvases are never removed, stay in the viewer list and count toward the 100-canvas limit](https://github.com/zeroclaw-labs/zeroclaw/issues/12205).
- [#12312 [Bug]: OIDC enrollment uses a discovered authorization_endpoint without endpoint URL policy](https://github.com/zeroclaw-labs/zeroclaw/issues/12312).

### Linked fix PRs already in progress
- [#12281 fix(gateway): treat forwarded loopback as non-local for SOP cancel](https://github.com/zeroclaw-labs/zeroclaw/pull/12281) addresses [#12280](https://github.com/zeroclaw-labs/zeroclaw/issues/12280).
- [#12262 fix(config): warn when delegate grants are unreachable](https://github.com/zeroclaw-labs/zeroclaw/pull/12262) addresses [#12199](https://github.com/zeroclaw-labs/zeroclaw/issues/12199).
- [#12135 fix(runtime): forward APPDATA and LOCALAPPDATA into Windows shell children](https://github.com/zeroclaw-labs/zeroclaw/pull/12135).
- [#12148 fix(setup.bat): persist user PATH without setx merge/crop](https://github.com/zeroclaw-labs/zeroclaw/pull/12148).
- [#12163 fix(update): select musl Linux archives from compile-time target_env](https://github.com/zeroclaw-labs/zeroclaw/pull/12163).

## 6. Feature Requests & Roadmap Signals
Strong roadmap signals point to v0.9.0 and broader production readiness:

### Most likely upcoming focus
- Dashboard chat for non-admin signed-in users: [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) with PR [#12244](https://github.com/zeroclaw-labs/zeroclaw/pull/12244).
- Per-sender RBAC for multi-tenant deployments: [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982).
- Durable and attributable peer-agent turns: [#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597).
- Gateway resilience when identity providers are unreachable: [#12096](https://github.com/zeroclaw-labs/zeroclaw/issues/12096).
- OIDC redirect_uri validation against configured dashboard origin: [#12048](https://github.com/zeroclaw-labs/zeroclaw/issues/12048).

### Platform and channel expansion
- Cross-platform CI coverage: [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461).
- Native Zulip channel: [#12230](https://github.com/zeroclaw-labs/zeroclaw/pull/12230).
- Telegram voice replies during text generation: [#12276](https://github.com/zeroclaw-labs/zeroclaw/pull/12276).

### Memory and provider quality
- External reranking for memory recall: [#12036](https://github.com/zeroclaw-labs/zeroclaw/pull/12036).
- OpenAI runtime-profile thinking support: [#12059](https://github.com/zeroclaw-labs/zeroclaw/pull/12059).
- Documentation for bounded Tsubasa custom-provider setup: [#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207).

## 7. User Feedback Summary
Recurring user pain points indicate that ZeroClaw is being pushed toward more demanding deployment scenarios:

- **Multi-agent isolation is fragile.** Users report delegate agents writing to the wrong workspace ([#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)), missing TOOLS.md ([#12211](https://github.com/zeroclaw-labs/zeroclaw/issues/12211)), and not honoring native tools ([#12235](https://github.com/zeroclaw-labs/zeroclaw/issues/12235)).
- **Auditability and session history matter.** The SQLite timestamp rewrite bug has drawn significant discussion because it breaks per-message timing and history inspection ([#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)).
- **Security boundaries are under scrutiny.** Recent reviews found macOS sandbox overexposure and unrestricted MCP config writes ([#12311](https://github.com/zeroclaw-labs/zeroclaw/issues/12311), [#12310](https://github.com/zeroclaw-labs/zeroclaw/issues/12310)).
- **Provider compatibility remains sensitive.** Strict providers can reject malformed role/content structures, especially around tool results and cached channel turns ([#12187](https://github.com/zeroclaw-labs/zeroclaw/issues/12187), [#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501)).
- **Cross-platform installation and updates are still rough.** Windows PATH persistence and musl Linux update selection show packaging/portability issues ([#12148](https://github.com/zeroclaw-labs/zeroclaw/pull/12148), [#12163](https://github.com/zeroclaw-labs/zeroclaw/pull/12163)).

Overall, user sentiment appears constructive: many reports are detailed, reproducible, and tied to real deployment concerns, which suggests strong practical usage and high engagement.

## 8. Backlog Watch
Items needing maintainer attention:

- [#5982 Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — large, long-running, and central to multi-tenant deployments.
- [#9646 Session/channel read+write tools lack per-agent ownership scoping](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) — S0 security-risk backlog item.
- [#7432 Runtime, dashboard sign-in and gateway delivery tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — release-coordination item for v0.9.0.
- [#9597 Make peer-agent turns durable and attributable](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) — architecture-level multi-agent lifecycle work.
- [#10315 Browser enrollment frontdoor without hand-rolled TLS](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) — enrollment partially delivered, browser/session tier still open.
-

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*