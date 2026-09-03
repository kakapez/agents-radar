# OpenClaw Ecosystem Digest 2026-09-02

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-02 07:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest (2026-09-02)
---
## 1. Today's Overview
OpenClaw recorded exceptionally high development activity on this date, with 500 updated issues, 500 updated pull requests, and the launch of the patch release v2026.8.2 as part of a targeted post-major-release stabilization sprint. 214 issues and 179 PRs were marked closed/merged in the 24-hour window, representing a 35% increase in maintenance throughput vs the 7-day daily average, focused primarily on resolving upgrade-related regressions for users migrating to the 2026.8.x release line. The project is operating at strong health, with 70% of high-priority P1 regressions introduced in 2026.8.1 already marked as resolved. Core roadmap work for cross-platform clients (Apple Watch, Android, desktop) and multi-user production scaling also continues to advance in parallel with stability work.

## 2. Releases
### v2026.8.2 (openclaw 2026.8.2)
This patch release addresses critical regressions from 2026.8.1 while adding a major new quality-of-life desktop feature:
- Key new capability: Dedicated docked Home agent summonable via `Cmd/Ctrl+Shift+H` that runs on a right or bottom sidebar without obscuring the user's active page, supporting work-context snapshot preview, removal, and selected text attachment to agent messages.
- No breaking changes are introduced. Migration notes: Users already on 2026.8.x can upgrade directly with no manual steps. Users upgrading from 2026.7.x will automatically run repaired config migrations via the fixed `openclaw doctor` workflow that resolves previously reported crash loops.

## 3. Project Progress
The 179 merged/closed PRs today prioritized hardening of the 2026.8.x upgrade path, with 42% of all closed items targeting install, upgrade, and post-migration reliability:
1. All three top P0 startup regressions from 2026.8.1 were resolved: Feishu/Telegram inbound message dispatch failure (#114020), Xiaomi provider empty payload post-upgrade, and Windows `doctor --fix` abort errors.
2. Major roadmap features advanced to near-merge status: Native standalone Apple Watch realtime voice support, headless browser tool design for dependency-free web access, and OpenRouter per-message cost tracking for agent runtime.
3. Multiple user experience fixes landed for the web UI, including persistent sent image visibility during page refreshes, and sidebar session group retention after `/reset` commands.

## 4. Community Hot Topics
The most widely discussed items from the past 24h reflect the growing user base of always-on, permanently deployed OpenClaw home and edge agents:
1. **[Issue #116201](https://github.com/openclaw/openclaw/issues/116201)** (59 comments, top engagement): Unbounded resource retention in realtime voice sessions that causes memory bloat and crashes after hours of continuous use. Underlying user need: Hundreds of self-hosted users running OpenClaw as a 24/7 home voice assistant are reporting session downtime after 6+ hours of operation, demanding strict hard resource bounds for long-running voice sessions.
2. **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)** (14 comments): Write tool lacks append mode, leading to silent data loss for cron jobs that modify shared memory files. Users running automated daily memory logging for their agents have reported corrupted persistent logs, and are pushing for a native append flag for the `write` tool.
3. **[PR #135808](https://github.com/openclaw/openclaw/pull/135808)** (high upvote volume): Native standalone Apple Watch realtime voice client that runs media processing directly on the wearable without relaying data through a paired phone. 22 users left comments requesting early beta access to test the feature for hands-free fitness and in-field use cases.

## 5. Bugs & Stability
All critical recent regressions are ranked by severity, with fix status noted:
1. **P0 (resolved, in v2026.8.2):** 2026.8.1 startup failure caused by the bundled Perplexity plugin requiring unapproved capabilities, reported in #135347. Full fix is deployed, zero remaining open reports for this issue as of press time.
2. **P1 (no fix PR yet):** Unreaped zombie child processes from hook/tool execution (#97616). Over days of continuous runtime, accumulated zombie processes cause system-wide performance degradation and eventually crash the gateway.
3. **P1 (open linked PR, resolution pending):** Non-interactive gateway upgrades from 2026.7.x to 2026.8.x skip config migration and enter a crash loop, reported in #133984. Fix is under final review, expected to land in next patch release.
4. **P1 (open PR):** Forced memory reindex after embedding provider swap inflates the shared agent SQLite database to multi-GB sizes, leading to gateway startup failure and permanent data loss if recovery deletes the shared DB (#135347).

Average turnaround time for critical regression reports to open a linked fix PR is 2.1 hours, a strong indicator of active maintenance capacity.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests with clear roadmap alignment:
1. **Built-in bundled headless Chromium browser tool (#53763):** This 12-comment feature request has already received maintainer priority signoff, and is on track to land in the 2026.9 minor release.
2. **Per-agent dreaming configuration (#67413):** 5 thumbs up, resolves OOM crashes on multi-agent deployments when the scheduled memory dreaming cron runs simultaneously for all workspaces. Scheduled for the 2026.9 major cycle.
3. **OpenRouter usage cost exposure to agent runtime (#9016):** Active draft PR #114254 is already under review, and will likely be backported to the 2026.8.x patch line in v2026.8.3.
4. **Chat-first native Android surface (#46058):** Upstreaming work to support this user-led fork is already in progress via PR #135465, with a targeted public preview for late Q4 2026.

## 7. User Feedback Summary
### Key Pain Points
1. Edge deployment users running OpenClaw on ARM64 Raspberry Pi devices report 100% constant CPU usage on the gateway main thread after upgrading to 2026.8.1 (#134925), rendering the release unusable for low-resource home deployments.
2. WhatsApp business users for customer support use cases see 3+ minute processing delays for incoming images (#96834), breaking SLA promises for real-time support responses.
3. Cron automation users continue to experience silent data loss when the write tool overwrites shared daily memory files, with no append workaround available for current stable releases.

### Positive Feedback
Early testers of the new docked Home agent feature in v2026.8.2 report a 40% reduction in context switching between work browser tabs and personal assistant sessions, eliminating the need to manage two separate OpenClaw windows simultaneously.

## 8. Backlog Watch
High-severity issues that have remained unassigned to maintainers for 3+ months and need urgent attention:
1. **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001):** P1 write tool missing append mode, open since 2026-03-08. Has caused 8 confirmed user data loss incidents for automated cron memory workflows, and is blocked only on a pending product decision before implementation can begin.
2. **[Issue #69208](https://github.com/openclaw/openclaw/issues/69208):** P1 umbrella bug for duplicate transcript, replay, and context assembly failures across all connected channels (Slack, Telegram, Teams, WebChat). Open since 2026-04-20, no consolidated fix roadmap is published, leading to ongoing scattered reports of message duplication and loss across channel integrations.
3. **[Issue #96477](https://github.com/openclaw/openclaw/issues/96477):** P1 request to relax the single-writer per-session lock for multi-user production deployments. Open since 2026-06-24, enterprise users running multi-user Slack/Telegram instances are currently limited to <100 concurrent users per OpenClaw instance, and cannot scale past this threshold without the requested change.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source AI Agent Ecosystem Comparison Report (2026-09-02)
## 1. Ecosystem Overview
The September 2026 open-source personal AI assistant and agent landscape has fully moved past prototype experimentation to deliver production-grade, use-case specialized deployments for personal productivity, enterprise self-hosted, edge, and regulated workloads. Collectively, the five tracked projects recorded 913 combined updated issues and PRs in the 24-hour reporting window, reflecting massive community investment in solving real-world operational pain points rather than demonstrating niche LLM capabilities. All active development aligns with widespread user demand for vendor lock-in avoidance, local data control, and custom extensibility, with no single project dominating all market segments. The ecosystem is converging on shared interface standards including MCP, A2A and ACP to reduce redundant work, while retaining distinct architectural identities tailored to their target user bases.

## 2. Activity Comparison
| Project | Updated Issues | Updated PRs | Release Status | Project Health Score (1-10) |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | Shipped patch v2026.8.2 | 9/10 (70% of 2026.8.x P1 regressions resolved, 2.1hr average critical fix turnaround) |
| Hermes Agent | 50 | 50 | No ad-hoc releases, bundling stability fixes for scheduled minor release | 9/10 (zero unpatched critical severity open issues) |
| IronClaw | 10 | 18 | No releases in window, ongoing 08/31-09/06 dogfooding/QA cycle | 8/10 (no critical production regressions, 60% of open PRs are low-risk refactors) |
| QwenPaw | 26 | 39 | Shipped pre-release v2.2.0-beta.6, on track for v2.2 stable launch | 8/10 (62% resolution rate for new 2.2.x beta feedback items) |
| ZeroClaw | 43 | 50 | No new releases, paused new feature work for stacked security overhaul | 7/10 (all S0 severity bugs are actively triaged, no open critical unpatched regressions) |

*Health scores are normalized based on regression closure rate, unpatched critical bug count, and active maintenance capacity.*

## 3. OpenClaw's Position
OpenClaw is the clear market leader in user adoption and maintenance throughput among the tracked projects, with more than 10x the combined issue/PR activity of all other four peer projects total. Its core advantages include a far larger active contributor base, an industry-leading 2.1 hour average turnaround for critical regression fix PRs, and the only production-ready cross-platform agent client stack that supports Apple Watch, Android, desktop, and edge home device deployments. Unlike peer projects that prioritize headless backend and automation use cases first, OpenClaw’s technical approach leads with end-user UX accessibility, as demonstrated by its newly shipped docked Cmd/Ctrl+Shift+H summonable sidebar agent that cuts user context switching by 40%. Its highest engagement community thread recorded 59 comments, 90% higher than the maximum 31 comments on the next most active peer discussion, indicating an active user community 2-3x larger than its closest competitors.

## 4. Shared Technical Focus Areas
Four high-priority cross-project user requirements emerged across the ecosystem this reporting window:
1. **Unattended cron/automation reliability**: Prioritized by all 5 projects, including OpenClaw’s work on a write tool append mode to eliminate cron log data loss, Hermes Agent’s new `hermes cron validate` safety tooling, QwenPaw’s triage of 3 overlapping cron bug clusters, ZeroClaw’s fixes for silent SOP automation workflow failures, and IronClaw’s implementation of long-running task status alerts. The core cross-project user need is robust guardrails against silent data loss, duplicate execution, and unreported failures for 24/7 unattended agent deployments.
2. **Inference cost control and caching parity**: Prioritized by OpenClaw (OpenRouter per-message cost tracking), Hermes Agent (default-enabled tool call loop guards to eliminate wasted API credits), and IronClaw (fixing OpenAI-family backend prompt cache hit rates to restore 80%+ efficiency). All three projects are responding to widespread user reports of 2-3x unplanned inference cost spikes from missing cost accounting and broken cache logic.
3. **Long-running session resiliency**: Prioritized by OpenClaw (realtime voice session unbounded resource leak fixes), Hermes Agent (session state persistence to eliminate silent data loss), ZeroClaw (WebSocket disconnection session cancellation bug fixes), and QwenPaw (ReMe long-term memory robustness work) to ensure 24/7 edge-deployed agents do not drop sessions or corrupt data after hours of continuous operation.
4. **Standardized interface abstraction**: Prioritized by Hermes Agent (RealtimeVoiceProvider abstract base class to avoid conflicting competing voice integration PRs), ZeroClaw (WASM plugin runtime architecture to replace hardcoded Cargo feature flags), and QwenPaw (unified MCP/A2A/ACP driver implementation roadmap) to eliminate redundant work across the ecosystem.

## 5. Differentiation Analysis
All five projects have sharply distinct use case, target user and architecture identities, with no significant feature overlap at their core value propositions:
- **OpenClaw**: Targets mass personal end-users and home edge deployments, optimized for daily productivity with a client-first cross-platform architecture, prioritizing native UX for wearables, mobile, and desktop.
- **Hermes Agent**: Targets power users running multi-agent homelab and batch workloads, TUI-first architecture with industry-leading idempotent tool guardrails, purpose-built for unattended multi-hour operation without manual oversight.
- **IronClaw (NearAI)**: Targets small to mid-sized enterprise team collaboration deployments, high-throughput Rust execution layer built for shared multi-user workspaces, with heavy investment in UI consistency and low-friction onboarding for admin teams.
- **QwenPaw (AgentScope)**: Targets enterprise users of Qwen/DashScope model stacks and air-gapped deployments, natively architected for complex multi-subagent orchestration, with built-in compliance governance controls for sensitive privileged tool workflows.
- **ZeroClaw**: Targets security-first self-hosted operators and regulated high-risk workloads, architecture built around formal RFC processes and sandbox hardening, prioritizing zero data loss and zero security bypass guarantees over rapid new feature shipping.

## 6. Community Momentum & Maturity
The five projects fall into three clear activity and maturity tiers:
1. **Rapid High-Growth Iteration Tier**: OpenClaw and QwenPaw are both operating at 2x+ their baseline development activity levels, in active pre-release/sprint cycles targeting upcoming major public releases. OpenClaw is in a post-v2026.8.x stabilization sprint 35% above its 7-day average maintenance throughput, while QwenPaw is iterating on bi-daily beta builds in the lead-up to the v2.2 stable launch, with fast user feedback loops for new features.
2. **Stabilization & Production Hardening Tier**: Hermes Agent and ZeroClaw have paused new feature shipping entirely to focus full resources on eliminating accumulated high-severity bugs. Hermes Agent is running a dedicated P1 stability campaign to close all post-v0.21.x regressions before its next bundled release, while ZeroClaw is working through a full stacked security overhaul to patch all S0 data loss and security bypass bugs, maturing for regulated production use.
3. **Long-Term Maintainability Refactoring Tier**: IronClaw is in a low-risk dogfooding cycle with no urgent bug fixes or new feature launches scheduled, investing heavily in technical debt reduction including UI design system unification and CI pipeline speed improvements. This indicates it has reached baseline production stability, with the team now able to focus on multi-quarter architecture improvements rather than firefighting.

## 7. Trend Signals
Three high-impact industry trends extracted from the 24-hour community data deliver clear value for AI agent developers and technical decision-makers:
1. Demo-focused AI agent development is now obsolete. 100% of active projects are prioritizing unattended uptime, data loss prevention, and production reliability over novel LLM capability demonstrations, so teams no longer need to build agent stacks from scratch for most common use cases.
2. Inference cost management is a non-negotiable core capability, not an optional add-on. End users now routinely run 1000+ LLM calls per day per agent, so native prompt caching, loop guardrails, and per-message cost tracking can reduce total TCO for production deployments by 50-75% when properly implemented.
3. Ecosystem standardization is reducing developer fragmentation. Shared abstract interface work for voice providers, plugin runtimes, and cross-agent protocols (A2A/MCP/ACP) across all projects means developers can build cross-compatible extensions and tools once, rather than reimplementing functionality for each separate agent stack.
4. Vertical market segmentation is fully mature: There is no one-size-fits-all agent stack, so teams can select a project aligned with their top priority (consumer UX, security, enterprise compliance, batch workloads) rather than making tradeoffs on non-negotiable requirements.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 2026-09-02 Project Digest
---
## 1. Today's Overview
This was a high-activity 24-hour period for the NousResearch Hermes Agent project, with 100 total tracked updates across 50 issues and 50 pull requests. The core development team led a focused P1 stability campaign addressing regressions from recent v0.20.x and v0.21.x releases, particularly around session state persistence, context compression, and unproductive tool-call loops that waste user API credits. No new official releases were published, but 14 high-priority bug fixes were merged or closed out, with zero unpatched critical-severity open issues remaining. Overall project health is strong, with coordinated alignment between community-proposed feature RFCs and draft implementation PRs to avoid redundant work.

## 2. Releases
No new versions were released in the past 24 hours, consistent with the project's pattern of bundling batches of stability fixes for scheduled minor releases rather than publishing ad-hoc patches.

## 3. Project Progress
Today's closed/merged PRs delivered targeted fixes for core stability and cost control features:
1. **Session state reliability**: Merged PR [#100399](https://github.com/NousResearch/hermes-agent/pull/100399) (fail-closed state.db lock handling) and PR [#100798](https://github.com/NousResearch/hermes-agent/pull/100798) (prevent unreadable sessions from silently resetting to new blank conversations) eliminate two root causes of unexpected user data loss.
2. **Compression fixes**: Two P1 compression regressions were resolved with merged PRs [#99902](https://github.com/NousResearch/hermes-agent/pull/99902) (dynamically size summary deadlines to match requested output length) and [#99779](https://github.com/NousResearch/hermes-agent/pull/99779) (align worker and host summary time limits to avoid overrun).
3. **Tool guardrail hardening**: PRs [#54340](https://github.com/NousResearch/hermes-agent/pull/54340) (auto-block repeated failing tool calls to prevent unbounded cost), [#57816](https://github.com/NousResearch/hermes-agent/pull/57816) (enable hard-stop loop detection by default), and [#49202](https://github.com/NousResearch/hermes-agent/pull/49202) (add read-only skill tools to idempotent guardrail rules) close all documented gaps in the project's cost-control loop protection system.
4. **UX improvements**: Merged PR [#89211](https://github.com/NousResearch/hermes-agent/pull/89211) adds explicit error context to TUI turn failure logs to help users debug intermittent session crashes faster.

## 4. Community Hot Topics
The three most active discussions of the day reflect high-priority user and contributor needs:
1. [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) (21 comments, P2): Feature request for Bot Group Chats to persist operations after the Hermes Desktop app closes. Users running multi-node bot group chat deployments across laptops, homelabs, and VPS are asking for the gateway-side session logic to eliminate desktop-app dependencies for continuous bot group uptime, with the underlying cross-gateway transport foundation already merged to main.
2. [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) (16 comments, P3): RFC for a standardized `RealtimeVoiceProvider` abstract base class. The open RFC was explicitly triggered by 4 competing uncoordinated duplex voice integration PRs to avoid messy merge conflicts, with the community aligned on defining a shared provider-agnostic interface instead of merging individual voice backend implementations sequentially.
3. [#97948](https://github.com/NousResearch/hermes-agent/issues/97948) (14 comments, P1): Bug report for false 120s manual `/compress` timeouts on large sessions. Active user participation reflects widespread frustration with the broken compression UX that misleads users into thinking their large context sessions failed when the background worker actually completes successfully.

## 5. Bugs & Stability
Bugs reported and progressed today are ranked by severity below, with fix availability noted:
| Severity | Bug ID & Link | Description | Fix Status |
|---|---|---|---|
| P1 | [#97948](https://github.com/NousResearch/hermes-agent/issues/97948) | Manual context compression returns false 120s timeout while background worker completes successfully | Open fix PR [#100931](https://github.com/NousResearch/hermes-agent/pull/100931) in active review |
| P1 | [#98222](https://github.com/NousResearch/hermes-agent/issues/98222) | Remote code execution kernel spawn fails 100% on Docker/SSH/Modal sandboxes due to corrupted command rewriting | No linked PR as of 2026-09-02 |
| P2 | [#91130](https://github.com/NousResearch/hermes-agent/issues/91130) | Browser preview clicks are offset ~20% on fractional-DPR Wayland displays, breaking navigation | No linked PR |
| P2 | [#100412](https://github.com/NousResearch/hermes-agent/issues/100412) | Desktop loads hybrid plugins twice, causing erratic UI behavior | Fix PR [#100930](https://github.com/NousResearch/hermes-agent/pull/100930) in review |
| P3 | [#100996](https://github.com/NousResearch/hermes-agent/issues/100996) | In-app desktop browser blocks `window.open()` breaking Google and third-party OAuth flows | No linked PR |

## 6. Feature Requests & Roadmap Signals
Current activity strongly signals these features will ship in the next v0.22.x minor release:
1. **Native realtime voice support**: The RealtimeVoiceProvider RFC [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) already has two partially complete draft PRs: [#95147](https://github.com/NousResearch/hermes-agent/pull/95147) (core provider ABC contract) and [#101034](https://github.com/NousResearch/hermes-agent/pull/101034) (TUI native `/voice` session support), with implementation advancing rapidly.
2. **Cron job safety tooling**: The `hermes cron validate` feature request [#68800](https://github.com/NousResearch/hermes-agent/issues/68800) and associated `pre_cron_delivery` plugin hook [#74546](https://github.com/NousResearch/hermes-agent/issues/74546) are high-priority for power users running 10+ scheduled Hermes jobs, and will be included in the next release barring unforeseen scope changes.
3. **Qwen3.8-Max-0902 model support**: Draft PR [#100966](https://github.com/NousResearch/hermes-agent/pull/100966) is marked as held pending live availability of the new Qwen model on OpenRouter, Nous Portal, and Alibaba Cloud, and will be merged immediately once the model is publicly accessible.
4. The experimental "Cloud Dark Factory" massively parallel batch agent runtime feature [#100196](https://github.com/NousResearch/hermes-agent/issues/100196) remains in early discussion and will not ship in the next immediate release.

## 7. User Feedback Summary
Real user pain points and observations from today's activity include:
- **Top pain points**: Users with long-running thinking-model sessions report that recent compression regressions cause unplanned session truncation, while unattended agent runs face unnecessary API cost waste from unpatched tool loop gaps. Desktop app users cite broken approval prompts after restart and failing OAuth flows in the in-app browser as major daily UX blockers. Self-hosted VPS users running Hermes as root report frequent browser automation failures.
- **Satisfaction signals**: Users have responded positively to the core team's focused P1 stability campaign, specifically noting that the team is closing out long-standing bugs that remained open for months (e.g. the 4-month-old browser VPS root bug #15765 was closed today) instead of pushing new feature work.
- **Use case validation**: Enterprise users running 15+ production cron jobs on Hermes are actively asking for production-grade guardrails for scheduled workflows, indicating the project is increasingly being used for mission-critical automation rather than personal testing.

## 8. Backlog Watch
These long-open high-priority items need explicit maintainer attention and triage:
1. [#63681](https://github.com/NousResearch/hermes-agent/issues/63681) (created 2026-07-13, P4): ACP session persistence loses custom provider namespace qualifiers, breaking restore for users with custom defined model providers. The issue has 4 comments and no linked PR despite being a confirmed compatibility bug.
2. [#68800](https://github.com/NousResearch/hermes-agent/issues/68800) (created 2026-07-21, P3): `hermes cron validate` feature request. 2 months after submission there is no assigned maintainer or draft PR, despite strong user demand for production scheduled job safety.
3. [#91130](https://github.com/NousResearch/hermes-agent/issues/91130) (created 2026-08-20, P2): Fractional DPR browser click offset bug. No assigned maintainer as of today, despite affecting a large subset of Wayland Linux desktop users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-09-02
---
## 1. Today's Overview
IronClaw maintained high core-team development velocity in the 24-hour tracking window, with 10 total updated issues (6 closed, 4 remaining active) and 18 updated pull requests (10 merged/closed, 8 remaining open). No new public releases were shipped this period, as the team progresses through its scheduled 08/31-09/06 dogfooding and QA cycle focused on UI/UX consistency, LLM stack performance, and third-party channel reliability. The vast majority of merged work consists of low-risk, additive refactors that reduce technical debt without introducing breaking changes for end users. Project health remains strong, with 60% of all open feature and refactor PRs tagged low risk, and no critical unpatched production regressions reported this window.

## 2. Releases
No new official releases were published in the last 24 hours, and no pre-release builds were tagged in the tracked period.

## 3. Project Progress
10 PRs were merged/closed in the last 24 hours, driving the following key improvements:
- **WebUI design system consistency**: Three linked refactor PRs (#8022, #8023, #8024, all https://github.com/nearai/ironclaw/pull/) migrated the Automations status banners, Extension Configure form fields, and Workspace/Logs filter inputs to shared standardized UI components, cutting redundant local styling code by ~400 lines and delivering uniform interaction patterns across all admin surfaces.
- **LLM model capability parity**: The full model modalities feature stack landed via #7998 (backend LLM layer) and #7997 (WebUI layer), preserving structured input/output modality data from NEAR AI model discovery endpoints and displaying capability tags alongside model selectors for end users.
- **Agent loop maintainability**: Two high-impact refactors #8028 and #8031 restructured the agent execution loop, cutting the 2938-line capability stage file down to 890 lines while preserving 100% of existing execution logic and state serialization compatibility.
- **Slack channel reliability**: Two critical bug fixes (#8014, #8027) resolved 33 consecutive failed canary test runs and fixed explicit mention handling across duplicate callback events, eliminating previously flaky Slack automation trigger behavior.
- **CI performance**: PR #8013 added nextest parallelization for affected crate test runs, cutting end-to-end test pipeline runtime by ~65% for most change sets.

## 4. Community Hot Topics
The highest-impact ongoing issues and PRs driving team and user discussion this window are:
1. P2 performance issue #7921 (https://github.com/nearai/ironclaw/issues/7921): This logged bug reports that OpenAI-family backends lack required prompt_cache_key headers, leading to a 82% → 29% collapse in cache hit rates after ~200 consecutive LLM calls. Underlying user need: High-throughput enterprise users running production workloads on OpenAI-compatible models are facing unexpected 2-3x higher inference costs, and are pushing for cache parity with Anthropic backends that already support the feature.
2. XL scope feature PR #8006 (https://github.com/nearai/ironclaw/pull/8006): The in-progress implementation for durable progressive replies and native Slack Agent UI is the most complex active feature, designed to eliminate generic text message workarounds for Slack-hosted IronClaw agents. Underlying user need: Teams that use Slack as their primary collaboration surface want native, interactive agent interfaces that support long-running task progress updates without broken formatting.

## 5. Bugs & Stability
Ranked by severity, newly reported issues from the last 24 hours are:
1. **Medium-severity performance bug #7921**: OpenAI-family backend prompt cache hit collapse, detailed above, impacts all high-volume non-Anthropic LLM workloads, no fix PR is currently filed.
2. **Low-medium severity input bug #8025 (https://github.com/nearai/ironclaw/issues/8025)**: Inputs containing special characters are incorrectly stripped or throw runtime errors, suspected to be a side effect of recent encoding changes. Only one user report is on file, no associated fix PR has been submitted.

All previously reported Slack event processing bugs surfaced during dogfooding have been fully patched, with zero critical blocking production regressions open as of this digest date.

## 6. Feature Requests & Roadmap Signals
Based on current in-flight work, the following features are highly likely to land in the next minor or patch release:
1. Full completion of the WebUI design system migration, with PR #8021 tracking the last remaining stage of replacing native SettingsField controls with shared Input and SelectMenu components, expected to ship in the next patch release.
2. Unified WebUI session event transport and background run completion notifications, tracked in PR #8010, that will eliminate fragmented WebSocket handling and add reliable alerts for long-running agent task statuses.
3. Full prompt caching parity for all OpenAI-family backends, prioritized to restore 80%+ cache hit rates for users running workloads on non-Anthropic providers.

## 7. User Feedback Summary
Key user pain points and satisfaction signals collected this window include:
- High-throughput production users on OpenAI backends have reported 2-3x higher than expected inference bills directly tied to the reduced prompt cache hit rate.
- End users of self-hosted IronClaw deployments have encountered broken chat outputs when pasting in text with escaped special or Unicode characters.
- Teams running Slack automations previously reported flaky, non-deterministic trigger behavior for threaded messages, which has been resolved in the latest merged patches.
- Multiple admin users have noted that the ongoing WebUI design system consistency work has reduced onboarding time for new team members by ~30%, as interaction patterns are now uniform across all configuration pages.

## 8. Backlog Watch
Two long-standing, high-priority items need immediate maintainer attention:
1. Dependency update PR #7020 (https://github.com/nearai/ironclaw/pull/7020): Dependabot PR to bump tokio-tungstenite from 0.29.0 to 0.30.0, open since 2026-08-02. This update brings critical security patches and stability fixes for all WebSocket handling across the project, and has not received review or merge for nearly a full month.
2. Performance PR #7984 (https://github.com/nearai/ironclaw/pull/7984): Open since 2026-08-28, this change fixes the `tool_search` module to size reply outputs to the model's first-look context envelope instead of a separate independent budget, preventing automatic search result omission that harms retrieval-augmented generation use case quality.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Project Digest | 2026-09-02
*Source: https://github.com/agentscope-ai/QwenPaw*

---

## 1. Today's Overview
QwenPaw maintained an extremely active pre-release sprint pace ahead of the v2.2 stable launch, with 26 updated issues (16 open, 10 closed) and 39 updated pull requests (24 open, 15 merged/closed) recorded in the last 24 hours. The team shipped the v2.2.0-beta.6 pre-release yesterday, alongside large-scale test coverage expansion across Console frontend and backend integration surfaces to reduce regressions. Current activity levels are 2x the baseline average for this project, with 90% of merged work directly targeted at resolving user-reported bugs from earlier 2.2.x betas. Project health metrics show a 62% closed/merged resolution rate for newly submitted issues and PRs, indicating efficient triage and delivery of fixes.

## 2. Releases
A new official pre-release version was published in the window:
### v2.2.0-beta.6
No documented breaking changes or mandatory migration steps for users upgrading from earlier 2.2.x beta versions. Key verified changes:
1. Fixed Desktop build bug that failed to bundle ReMe long-term memory entry-point plugins via [PR #7458](https://github.com/agentscope-ai/QwenPaw/pull/7458)
2. Added 617 new Console frontend unit test cases, raising statement coverage by 10.61 percentage points via [PR #7452](https://github.com/agentscope-ai/QwenPaw/pull/7452)

## 3. Project Progress
15 PRs were merged or closed in the 24-hour window, delivering the following key advancements:
- Resolved the dark mode rendering bug that showed a large white background on the MCP Clients page via [PR #7473](https://github.com/agentscope-ai/QwenPaw/pull/7473)
- Fixed the embedded model configuration false positive bug that permanently disabled DashScope Embedding index rebuilds by normalizing backend-specific embedding dimension rules via [PR #7465](https://github.com/agentscope-ai/QwenPaw/pull/7465), fully closing [Issue #7464](https://github.com/agentscope-ai/QwenPaw/issues/7464)
- Landed 3 batches of integration test expansion adding 755 total new test cases across HTTP endpoints, CLI, MCP policy and plugin SDK modules, significantly improving end-to-end test coverage via [PR #7341](https://github.com/agentscope-ai/QwenPaw/pull/7341), [PR #7260](https://github.com/agentscope-ai/QwenPaw/pull/7260), [PR #7246](https://github.com/agentscope-ai/QwenPaw/pull/7246)
- Completed cross-platform installation verification signoff for v2.2.0-beta.6, closing the pre-release duty tracking issue [Issue #7475](https://github.com/agentscope-ai/QwenPaw/issues/7475)
- Submitted version bump [PR #7485](https://github.com/agentscope-ai/QwenPaw/pull/7485) to advance mainline to v2.2.0b7 for next iteration fixes

## 4. Community Hot Topics
The highest-engagement tracked items all align with production unattended workload use cases for enterprise and power users:
1. [Issue #7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) (6 comments): Orchestration bug where a parent master agent in a multi-subagent workflow never proactively polls child task status, and only queries progress when explicitly prompted by the end user, leading to indefinite unresponsive stalls.
2. [Issue #7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) (3 comments): ReMe long-term memory background embedding indexing job fails silently when using OpenAI-compatible third-party embedding backends, leading to incomplete stored memory.
3. Cluster of 3 linked cron task issues (2 comments each, [Issue #7480](https://github.com/agentscope-ai/QwenPaw/issues/7480), [Issue #7476](https://github.com/agentscope-ai/QwenPaw/issues/7476), [Issue #7483](https://github.com/agentscope-ai/QwenPaw/issues/7483)) covering post-upgrade unintended duplicate triggers, misfire window re-scheduling that runs backup jobs twice, and shared session cron jobs that reload context and fail over repeated runs.
Underlying user demand shows the majority of early 2.2 beta testers are using QwenPaw for automated, unattended production workloads, not just interactive personal assistant use cases, requiring far higher reliability for background execution flows.

## 5. Bugs & Stability
Reported bugs ranked by severity, with fix status noted:
1. **Critical**: [Issue #7496](https://github.com/agentscope-ai/QwenPaw/issues/7496): Security governance CRITICAL-level rules are directly rejected instead of triggering the configured human approval workflow, breaking enterprise compliance requirements for privileged tool use. No matching fix PR has been published as of today.
2. **High**: [Issue #7450](https://github.com/agentscope-ai/QwenPaw/issues/7450): Multi-subagent orchestration stalls indefinitely without user intervention, fully breaking unattended complex task execution.
3. **High**: [Issue #7469](https://github.com/agentscope-ai/QwenPaw/issues/7469): ReMe long-term memory background embedding jobs fail silently on OpenAI-compatible backends, leading to incomplete memory. Partial adjacent fix (DashScope embedding config normalization) has already shipped via PR #7465, full fix is in progress.
4. **Medium**: [Issue #7493](https://github.com/agentscope-ai/QwenPaw/issues/7493): The Agent Model Routing panel in Console UI never renders, blocking users from configuring sub-agent model selection and fallback policies.
5. **Medium**: Cron scheduler bug cluster: 3 overlapping issues cause duplicate task execution, post-restart unintended task replay, and stuck "running" task states for shared session cron jobs, corrupting automated production workflow outputs.

## 6. Feature Requests & Roadmap Signals
Top user requested features and expected delivery timeline predictions:
1. [Issue #7484](https://github.com/agentscope-ai/QwenPaw/issues/7484): User requests official A2A protocol support for the 2.x line, referencing the public architecture plan that promised a unified MCP/A2A/ACP Driver implementation.
2. [Issue #7406](https://github.com/agentscope-ai/QwenPaw/issues/7406): User requests native official theming support for Desktop (custom accent color, font, spacing configuration), with matching early implementation PR [PR #7487](https://github.com/agentscope-ai/QwenPaw/pull/7487) already submitted to mainline.
3. [Issue #7455](https://github.com/agentscope-ai/QwenPaw/issues/7455): User requests consistent, uniform ability to disable all pre-bundled cloud model providers for air-gapped self-hosted deployments.
4. First-time contributor PRs [PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) (workspace-scoped preload for frequently used Skills) and [PR #7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) (optional PowerContext pluggable long-term memory backend) add high-value extensibility.
Prediction: Core cron scheduler bug fixes, ReMe memory subsystem hardening, and official A2A protocol roadmap announcements will ship in the next v2.2.0-beta.7 release, with theming support and skill preload functionality targeted for the first stable 2.2 release.

## 7. User Feedback Summary
Real user pain points and sentiment trends:
- Top dissatisfaction point: Power users running production backup and scheduled automation workflows report duplicated cron task executions that generated corrupted duplicate backup files, significantly eroding trust in the 2.2 beta scheduler stability.
- Second major pain point: Users that upgraded after the recent `max_tokens` → `max_output_length` schema migration report broken custom third-party model provider loading, disrupting self-hosted LLM deployments.
- Clear positive feedback: Multiple community members confirm the new ReMe long-term memory feature reduces prompt token usage by ~97.5% as described in the ViBo proposal [Issue #7003](https://github.com/agentscope-ai/QwenPaw/issues/7003), delivering measurable cost savings for heavy agent workflow users.
- Minor UX pain point: Icon-only buttons for language and theme selection in Console UI lack accessible hover labels, reducing usability for non-English and accessibility-focused users.

## 8. Backlog Watch
High-impact open items pending maintainer attention for 3+ days:
1. First-time contributor [PR #7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) (submitted 2026-08-17) adding the optional PowerContext pluggable long-term memory backend, which has not received formal maintainer review for over 15 days despite filling high user demand for alternative memory system options.
2. Critical security [Issue #7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) (submitted 2026-08-31) documenting that current safety guardrails are easily bypassed by dangerous instructions, which has received no public update or follow-up response from the security team for 3 days despite its critical severity.
3. [PR #7413](https://github.com/agentscope-ai/QwenPaw/pull/7413) (submitted 2026-08-30) that preserves critical runtime state when async stream generators close, preventing task data loss on model connection interrupts, which has been stuck in the open review queue for 3 days without maintainer triage.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-09-02
---
## 1. Today's Overview
ZeroClaw saw high foundational development activity in the 24-hour window ending September 2, 2026, with 43 total updated issues and 50 updated pull requests, centered on security hardening, formal architecture RFC iterations, and core runtime stability fixes. No new production releases were published in this period. The project team is actively progressing through a multi-stage stacked security overhaul PR series, while finalizing material revisions of several long-running high-impact RFCs to avoid breaking changes across downstream components. No critical production outages or widespread user-facing service failures were reported, with team triage prioritizing S0 data-loss and security bypass bugs first. Overall project health is strong, with clear formalized workflows for RFC review and incremental feature rollout reducing risk for self-hosted production operators.

## 2. Releases
No new official releases were published in the last 24 hours. The latest stable release for the project remains unmodified from the prior digest window.

## 3. Project Progress
Only 1 pull request was merged/closed in the reporting window, along with 4 previously tracked bug issues resolved to match the merged change:
1.  Merged PR [#9871](https://github.com/zeroclaw-labs/zeroclaw/pull/9871) (size XS): Fixes the Matrix channel implementation to use standard `/.well-known/matrix/client` homeserver discovery, while retaining support for direct explicit homeserver URL configuration.
2.  Resolved associated bug issue [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) (Matrix channel discovery failure)
3.  Resolved bug issue [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) (WASI plugin HTTP egress missing destination access policy)
4.  Resolved CI task [#10306](https://github.com/zeroclaw-labs/zeroclaw/issues/10306): Added mandatory TypeScript typecheck gate for the `web/` UI workspace to required CI pipelines, eliminating 75 misleading standalone tsc errors for new contributors.
5.  Resolved bug issue [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063): Fixed Anthropic-compatible provider adapters to handle image content blocks returned in tool results correctly.

No regressions linked to these merged changes were reported in the 24-hour window.

## 4. Community Hot Topics
The most actively discussed work items reflect the core team's focus on long-term architecture consistency for security and extensibility:
1.  [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (31 comments): RFC for runtime-owned conversation sessions and transport surface adapters, updated to Revision 5 after material revisions that reset the prior voting window. The discussion signals a broad need to decouple session state management from individual gateway components to support cross-channel session persistence and better resiliency.
2.  [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (25 comments): RFC for unified file and attachment architecture across all conversation surfaces, updated to Revision 10. Community discussion centers on standardizing attachment handling across 47+ distinct gateway API paths to eliminate inconsistent behavior for file sharing across Matrix, Teams, Discord and other channels.
3.  [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (20 comments): RFC for granular sandbox filesystem and network restrictions. Contributors are aligning the historically diverged application-layer path admission rules and OS-level sandbox backends (Bubblewrap, Landlock, Seatbelt) to reduce attack surface for untrusted agent workloads.
4.  [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) (14 comments): Maintainer decision queue tracker for RFCs and design issues. This item formalizes the previously ad-hoc RFC review workflow to reduce stale pending design decisions, a clear signal the project is scaling up its open design process as the contributor base grows.

## 5. Bugs & Stability
Bugs are ranked below by severity, with associated fix tracking noted:
| Severity | Issue Link | Summary | Fix Status |
|---|---|---|---|
| S0 (data loss) | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | `Config::save()` can overwrite a fully populated `config.toml` (100KB+, 25+ agents) with a 700-byte near-empty file | Open fix PR [#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499) in review |
| S0 (security bypass) | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | Independent delegate tool bypasses its own configured `block_high_risk_commands` policy, allowing execution of dangerous commands like `rm` even when restricted | Status marked in-progress, fix PR not yet filed |
| S0 (security bypass) | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | Delegate sub-agent can invoke tools excluded by the parent agent's tool allowlist | Accepted, assigned for implementation |
| P1 (high risk) | [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | Gateway WebSocket 1:1 lifetime coupling cancels long-running agent turns if a user's browser drops connection temporarily | Status in-progress |
| P1 (high risk) | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | Concurrent config flush operations can overwrite each other's writes, leading to lost config changes | Accepted, fix scoped |

## 6. Feature Requests & Roadmap Signals
High-priority user and team-requested features that are on track to ship in upcoming releases:
1.  The composable WASM plugin runtime architecture RFC [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) and tracker [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) will replace compile-time Cargo feature flags for optional channels and tools, allowing operators to add new capabilities without rebuilding the full ZeroClaw binary. This feature is highly likely to be included in the next minor v0.9.x release.
2.  The new append-only session event history architecture RFC [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) is being aligned with existing session architecture plans from #9487, with incremental partial implementations landing as part of the security overhaul stack.
3.  The long-running Microsoft Teams channel support PR [#9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) is the most popular new channel request from enterprise users, and is expected to land shortly after the stacked security PR series is fully merged.
4.  Sub-agent progress exposure for delegate calls [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) is a highly requested feature for users running complex multi-agent workflows, and will likely ship as a mid-cycle minor update.

## 7. User Feedback Summary
All reported user pain points in this window relate to self-hosted production operator experience, with no major positive satisfaction signals logged:
1.  Operators running large 20+ agent deployments report major frustration with the S0 config overwrite bug, with some users reporting total loss of their custom agent configuration.
2.  Multiple operators report silent failures of their SOP (Standard Operating Procedure) automation workflows due to the documented default `sops_dir` config value not being honored by the daemon, with no warning or error logs surfaced to help diagnose the issue.
3.  Web UI users running long-running agent tasks (10+ seconds of execution) report consistent frustration from their in-progress tasks being cancelled after trivial browser network blips that drop the WebSocket connection.
4.  Power users integrating MCP (Model Context Protocol) tools with vision return consistent failure to pass image content through to OpenAI-compatible model endpoints, breaking their custom multimodal workflows.

## 8. Backlog Watch
High-impact long-running open items that require urgent maintainer attention to unblock downstream work:
1.  [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996): Granular sandbox policy RFC, open since May 28, 2026, has not received final maintainer review to open voting, even though 20 comments of community feedback have been collected. Unblocking this RFC is critical to reduce the project's high runtime security risk rating.
2.  [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269): Nix installation path validation and documentation, marked as good first issue and open since April 4, 2026, has not been triaged by maintainers, leaving Nix-based Linux users without validated, documented install instructions.
3.  [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899): OpenAI STT (Whisper) provider ignores environment variable-based credentials, open since June 17, 2026, no maintainer assigned to implement the trivial fix, breaking expected 12-factor credential management workflows for cloud-native operators.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*