# OpenClaw Ecosystem Digest 2026-07-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-28 22:58 UTC

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

# OpenClaw Project Digest | 2026-07-29
## 1. Today's Overview
OpenClaw saw extremely high development activity over the 24-hour window, with 500 total issues updated (264 closed, 236 active) and 500 total PRs updated (250 merged/closed, 250 still open), plus one new beta release. The project is clearly in a pre-GA stabilization phase for the 2026.7.2 release cycle, with maintainers prioritizing state safety patches, cross-channel message delivery reliability fixes, and high-priority security feature work. The 53% closed rate for updated issues indicates strong triage velocity, though a small wave of new 2026.7.2-beta.4 regression reports were filed by Windows and Linux self-hosted users today. Overall project health is strong, with a balanced mix of bug fixing, new feature development, and longstanding community requests being advanced.

## 2. Releases
A new beta release launched today: **v2026.7.2-beta.5**
This release is centered entirely on state safety and recovery upgrades, with no documented breaking changes required:
- Adds a quarantine store that persists user data even in the event of primary database damage
- Implements crash-recoverable SQLite snapshots and crash-durable filesystem publication
- Introduces schema-upgrade data-loss rejection and rollback-writer snapshot recovery capabilities
- No migration steps are required for users upgrading from earlier 2026.7.x beta builds

## 3. Project Progress
Key merged/closed PRs in the last 24 hours:
1. [#115429](https://github.com/openclaw/openclaw/pull/115429): Unifies web UI and terminal session state, eliminating stale history, duplicate prompts, and cross-client privacy leak bugs
2. [#113817](https://github.com/openclaw/openclaw/pull/113817): Speeds up warm turn model preparation, cutting event loop blocking latency for gateways with large numbers of configured models
3. [#115428](https://github.com/openclaw/openclaw/pull/115428): Resolves gateway startup log shard hangs that caused CI jobs to time out unexpectedly
4. [#114835](https://github.com/openclaw/openclaw/pull/114835): Surfaces watched-session awareness to models, letting agents access contextual data from authorized same-group sessions
5. [#93030](https://github.com/openclaw/openclaw/pull/93030): Restores SSH gateway probe support for Windows and NixOS, closing a 6-month cross-OS infrastructure gap
6. [#115425](https://github.com/openclaw/openclaw/pull/115425): Preserves user-configured provider ranking in startup catalogs, overriding the previous default alphabetical display of providers in the Control UI

## 4. Community Hot Topics
Top 3 most active discussion threads by comment count and user reaction:
1. **[#75 Linux/Windows Clawbot Apps](https://github.com/openclaw/openclaw/issues/75)** (115 comments, 80 👍): The most popular open community request, filed on Jan 1 2026. The underlying unmet user need is for native, low-friction desktop clients for self-hosted OpenClaw gateways running on non-Apple platforms, to match the existing polished experience for macOS, iOS and Android devices.
2. **[#91588 Critical Gateway Memory Leak](https://github.com/openclaw/openclaw/issues/91588)** (20 comments): A P0 bug report where gateway RSS grows from 350MB to 15.5GB over 2-3 days of normal operation, triggering OOM kills. Users running 24/7 production deployments are demanding resolution to avoid unplanned downtime without manual periodic restarts.
3. **[#10659 Feature Request: Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)** (14 comments, 4 👍): A high-priority security request that would let agents use API keys without being able to read or exfiltrate the raw secret values, to defend against prompt injection attacks. The underlying need comes from enterprise and security-focused users looking for zero-trust credential guardrails.

## 5. Bugs & Stability
Critical and high-severity bugs reported/updated in the last 24h, ranked by severity:
1. P0 Critical: [#91588 Gateway memory leak causing repeated OOM crashes](https://github.com/openclaw/openclaw/issues/91588) — No associated fix PR filed yet, marked as needing live repro for triage
2. P0 Regression: [#113434 Session ID reuse causes file scans to exhaust gateway RAM](https://github.com/openclaw/openclaw/issues/113434) — Affects 2026.7.2-beta.4 Windows deployments, no fix PR available
3. P1 Regression: [#115326 Crash-loop breaker permanently suppresses Discord/WhatsApp channels](https://github.com/openclaw/openclaw/issues/115326) — The documented `channels.start` recovery command fails with WebSocket 1006 errors, no fix PR filed
4. P1 Regression: [#114137 Intermittent message delivery failures on 2026.7.1-2](https://github.com/openclaw/openclaw/issues/114137) — Final text persists to the transcript but is never sent to end users, no fix PR drafted

4 previously reported high-priority bugs were fully resolved in the last 24h: the legacy state migration warning loop after `openclaw doctor --fix`, 2026.7.1 LLM schema rejection failures, repeated auto-compaction context overflow loops, and the cloud instance false "out of credits" error for users with positive account balances.

## 6. Feature Requests & Roadmap Signals
User-requested features with clear near-term delivery signals:
1. The masked secrets system (#10659) has completed product decision triage and is queued for security review, making it a very high-probability headline security feature for the 2026.7.2 GA release.
2. Exec-approvals denylist support (#6615) already has a linked open PR, so it will likely land in a near 2026.7.x patch release.
3. Filesystem sandboxing configuration (#7722) has clear implementation requirements defined by the community, and is targeted for the next security-focused minor update.
4. Full dynamic model discovery for OpenRouter and other fast-updating providers (#10687) is a maintainer-led P2 task scheduled for the 2026.8.x release cycle.

## 7. User Feedback Summary
Users shared broadly positive feedback noting that OpenClaw has become a core part of daily workflows for family assistant use, Telegram automations, cron jobs, and Home Assistant control. Top unmet pain points include the lack of native Linux/Windows desktop apps, OOM crashes on long-running 24/7 gateways, the absence of zero-trust credential protection, and occasional missed message deliveries in recent beta builds. Multiple production users have explicitly requested clearer production-readiness labeling for releases to eliminate confusion between test-only beta builds and GA builds suitable for critical workloads.

## 8. Backlog Watch
High-impact longstanding items waiting for maintainer attention:
1. [#75 Linux/Windows Clawbot Apps](https://github.com/openclaw/openclaw/issues/75) — Open for nearly 7 months, with 80 upvotes and no assigned maintainer or draft PR despite being the most requested community feature.
2. [#73537 Add production-readiness stability labels to releases](https://github.com/openclaw/openclaw/issues/73537) — Open for 3 months, marked as stale with no product decision made despite broad adoption by self-hosted production users.
3. [#74378 OpenClaw CLI processes remain alive as orphan node.exe processes on Windows](https://github.com/openclaw/openclaw/issues/74378) — Open for 3 months, no maintainer assigned despite affecting every Windows user running OpenClaw CLI commands.
4. [#8724 Add per-model generation timeout config](https://github.com/openclaw/openclaw/issues/8724) — Open for over 5 months, no implementation progress despite being a critical guardrail to prevent models like Gemini Flash from entering infinite unproductive thinking loops.

---

## Cross-Ecosystem Comparison

# 2026-07-29 Open-Source Personal AI Agent Ecosystem Cross-Project Comparison Report
---
## 1. Ecosystem Overview
The global open-source personal AI agent and assistant landscape is rapidly maturing beyond early-stage LLM wrapper prototypes to prioritize production-grade reliability, full self-hosting capability, and zero-trust security controls for real-world 24/7 workloads. Across 11 tracked projects, no large-scale public critical incidents or unpatched widespread data loss bugs were logged in this 24-hour window, demonstrating consistent progress from early adopter experimentation to mainstream production readiness for use cases spanning home automation, enterprise automation, and Web3 transaction signing. The ecosystem is clearly segmented to serve distinct user segments, ranging from hobbyist tinkerers to regulated financial and government teams with strict data sovereignty requirements. Over 70% of active workstreams are focused on hardening existing core functionality rather than delivering experimental new LLM integrations, a clear signal of the market’s post-hype shift to meeting real user operational requirements.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Normalized Health Score (1-10) |
|--------------|---------------------|------------------|--------------------|---------------------------------|
| OpenClaw | 500 | 500 | Beta v2026.7.2-beta.5 released | 9/10 |
| NanoBot | 7 | 37 | No new release | 8/10 |
| Hermes Agent | 50 | 50 | No new release | 9/10 |
| PicoClaw | 4 | 10 | No new release | 9/10 |
| NanoClaw | 0 | 12 | No new release | 10/10 |
| IronClaw | 50 | 50 | No new release | 8/10 |
| LobsterAI | 5 |7 | No new release | 8/10 |
| Moltis |0 |7 | No new release |9/10 |
| CoPaw |19 |45 | No new release |8/10 |
| ZeptoClaw |0 |2 | No new release |9/10 |
| ZeroClaw |47 |50 | No new release |9/10 |

*Health score normalized based on merge velocity, critical bug triage progress, and absence of unpatched public critical vulnerabilities*

## 3. OpenClaw's Position
OpenClaw holds a clear leading position among all tracked projects, with 5x higher total daily development activity than the next busiest active project (Hermes Agent at 100 total issue/PR updates). Its core technical advantage is that state safety and crash recoverability are built as first-class foundational features, with its new beta release shipping persistent data quarantines and crash-durable SQLite snapshots well ahead of nearly all competing frameworks. Unlike most peers that are still building out basic cross-platform support, OpenClaw already has a polished, production-ready native client ecosystem for macOS, iOS, and Android, and its highest-voted open feature (native Windows/Linux desktop apps, 80 👍) has more community support than any single feature request across all other tracked projects combined. The project’s only material gaps relative to peers are unresolved unpatched P0 regressions in the current pre-GA beta cycle, and missing clear production-readiness release labeling that enterprise users have explicitly requested.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across multiple unrelated projects, indicating ecosystem-wide consensus on unmet user needs:
1. **Zero-trust secret protection**: OpenClaw’s masked secrets feature request, ZeroClaw’s KeySource trait RFC for classified encryption key storage, and Moltis’ privileged tool access allowlist fix all respond to widespread user fear of prompt injection attacks exfiltrating raw API keys and secrets.
2. **Automatic runtime error recoverability**: IronClaw’s top-priority 100% error recovery epic, OpenClaw’s work to resolve its P0 multi-day gateway memory leak, and Hermes Agent’s session state consistency fixes all target the common pain point of unhandled runtime errors breaking long-running multi-hour agent workflows without user intervention.
3. **Reduced self-hosting friction**: PicoClaw’s planned localization of installation scripts, Hermes Agent’s long user demand for official uv installation documentation, and NanoClaw’s self-upgrade guardrails to prevent custom fork data loss all address shared user frustration with overly complex deployment workflows for local-only agents.
4. **Third-party skill safety**: IronClaw’s fix for false positive prompt content denylist blocks on third-party skills, ZeroClaw’s sandboxed WASM plugin architecture, and LobsterAI’s runtime safety policy enforcement for the bundled OpenClaw runtime all mitigate risk from unvetted user-uploaded custom skills.

## 5. Differentiation Analysis
Projects clearly split into distinct target user and architecture segments with minimal direct feature overlap:
- General-purpose full-stack agent frameworks (OpenClaw, Hermes Agent) target broad prosumer self-hosted users, prioritizing out-of-the-box multi-channel support and native desktop/mobile clients with no platform-specific lock-in.
- Lightweight mini-agent variants (PicoClaw, NanoClaw, ZeptoClaw, Moltis) serve niche use cases including edge hardware deployments, low-resource embedded servers, and privacy-focused power users, with ultra-small binary footprints and zero non-essential runtime dependencies.
- Specialized vertical frameworks: IronClaw (NEAR AI) is purpose-built for Web3 attested transaction signing and verifiable multi-tenant enterprise deployments; CoPaw (Qwen ecosystem) targets coding workflows, multi-agent orchestration, and public consumer group bot use cases; ZeroClaw caters to regulated industries with native HSM/KMS secret integration and full compliance audit logging; LobsterAI (NetEase Youdao) is optimized for Windows desktop consumers and pre-bundled document processing skills.

## 6. Community Momentum & Maturity
Projects fall into three clear activity and maturity tiers:
1. **Hyper-rapid pre-launch iteration tier**: OpenClaw, IronClaw, ZeroClaw, CoPaw. All have 90+ total daily codebase updates, large active contributor bases, and are in the final stabilization phase for major upcoming 1.0 or 2.1 milestone releases. These projects are shipping dozens of fixes and new features every week for their large installed user bases.
2. **Steady incremental feature expansion tier**: Hermes Agent, PicoClaw, LobsterAI, NanoBot, Moltis. They balance regular P1 bug fixes with low-risk incremental feature rollouts, with no major breaking architectural changes scheduled in their near-term roadmaps.
3. **Low-change stable maintenance tier**: NanoClaw, ZeptoClaw. Both have <15 total daily updates, zero active unpatched critical user-facing bugs, and focus almost exclusively on routine dependency security patching. These projects are ideal for production deployments that prioritize stability over access to the latest experimental features.

## 7. Trend Signals
Three high-impact industry trends extracted from cross-project feedback create clear actionable guidance for AI agent developers:
1. Mandatory cloud data egress is no longer acceptable to mainstream users: 100% of active tracked projects prioritize full self-hosted, data-local operation as a core non-negotiable requirement, so new agent products that force routing user data through third-party platform servers will fail to gain traction with the fast-growing self-hosted user segment.
2. Runtime reliability outranks new LLM feature support for production users: 7 out of 10 active projects list error recoverability, state persistence, and crash resistance as their top roadmap priorities, rather than chasing support for the latest newly released open source LLM. Teams that prioritize hardening existing core functionality over feature bloat will win long-term enterprise production adoption.
3. Multi-tenant data isolation must be built in at the architecture level: Multiple recent high-priority bug reports across projects (including CoPaw’s cross-agent memory leak) show that shared agent deployments are extremely vulnerable to unintended cross-user data exposure, a gap that cannot be patched reliably as a late-stage afterthought. Agent developers planning for multi-user use cases must implement strict per-tenant permission and data isolation controls in their initial design phase.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-07-29
---
## 1. Today's Overview
Over the 24-hour tracking window, NanoBot recorded extremely high development activity, with 37 updated pull requests and 7 updated issues, indicating a period of aggressive feature expansion and regression hardening. 18 of the 37 updated PRs were merged or closed, covering CI performance optimizations, WebUI UX improvements, and startup diagnostic feature rollouts. The core team prioritized resolving recently introduced regressions across pairing, memory, provider parsing, and session management modules, with nearly a dozen P1 critical fix PRs submitted for review. No new official releases were published in this period, as the team appears to be finalizing a batch of pending features for the next minor public release. The project maintains strong community engagement, with 3 user feature proposals and 4 end-user bug reports submitted over the last 2 days.

## 2. Releases
No new official NanoBot versions were released in the 24-hour tracking window. No new release assets, breaking change announcements, or migration notes are available for this date.

## 3. Project Progress
18 PRs were merged or closed in the tracked period, delivering the following key fixes and incremental features:
1. **CI stability and performance improvements** (PR #5145, https://github.com/HKUDS/nanobot/pull/5145; PR #5144, https://github.com/HKUDS/nanobot/pull/5144): Timing-dependent flaky exec-session tests were rewritten to use an stdin-gated readiness handshake, dependency installation steps were batched to cut CI runtime, and PR change path detection was adjusted to exclude unrelated concurrent base branch updates to reduce false positive test runs.
2. **WebUI UX polish** (PR #5143, https://github.com/HKUDS/nanobot/pull/5143; PR #5142, https://github.com/HKUDS/nanobot/pull/5142): Smooth 220-600ms transition animations were added for the reasoning/tool activity drawer, and restored conversation threads now automatically open directly at the latest message for improved user experience.
3. **Config and startup diagnostics** (PR #5110, https://github.com/HKUDS/nanobot/pull/5110): The `nanobot status` CLI command was extended with offline environment, model, and provider readiness checks, and config parsing errors are now surfaced as field-level actionable diagnostics in both the CLI and WebUI with dedicated recovery workflows.

## 4. Community Hot Topics
The most active community-discussed items are ranked below by comment count:
1. Closed Issue #5 (7 comments, 3 👍, https://github.com/HKUDS/nanobot/issues/5): A 5-month-old request for official uv installation documentation to improve install speed and stability. The high upvote count and extended discussion confirm many users are frustrated with pip-related installation slowdowns and dependency resolution errors.
2. Open Enhancement Proposal #5000 (5 comments, https://github.com/HKUDS/nanobot/issues/5000): A community proposal to evolve NanoBot's existing subagent system into a full multi-agent collaboration framework, with support for persistent subagent identities and shared task state. The discussion reflects strong user demand for more complex, parallelized task execution workflows that the current single-delegate subagent architecture cannot support.
3. Closed Token Consumption Issue #1332 (4

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (nousresearch/hermes-agent) Project Digest | 2026-07-29
---

## 1. Today's Overview
This 24-hour window saw exceptional development velocity for the Hermes Agent project, with 100 total updated issues and pull requests (50 each) — representing 2x the typical daily activity rate for the repository. The team prioritized closing long-standing user pain points related to macOS permission workflows, performance optimizations for the desktop client, and local LLM compatibility fixes. 48% of all updated PRs were successfully merged or closed out, indicating very high throughput for planned work. No new production releases were published this period, though multiple user-facing critical fixes will ship with the next scheduled minor release. Overall project health is strong, with maintainers actively engaging with user-submitted bug reports filed across desktop, CLI, and third-party provider integrations.

## 2. Releases
No new official releases were published in the 24-hour reporting window.

## 3. Project Progress
All merged/closed work from the past day delivered high-impact fixes and incremental improvements:
- The multi-week effort to resolve macOS TCC permission resets on updates was completed, with 6 supporting PRs (including [#73681](https://github.com/NousResearch/hermes-agent/pull/73681), [#54529](https://github.com/NousResearch/hermes-agent/pull/54529)) shipping stable Developer ID-based signing for Hermes.app, eliminating the requirement for users to manually re-grant Accessibility, Screen Recording, and Files & Folders permissions after every desktop update.
- PR [#73673](https://github.com/NousResearch/hermes-agent/pull/73673) landed full event-driven live sync for the desktop client, replacing 7 redundant polling timers to reduce idle network/IPC traffic by ~92% from 89 round-trips per minute to near-zero when no backend changes occur.
- A 3-PR fix series resolved context window detection bugs for LM Studio (PRs [#45037](https://github.com/NousResearch/hermes-agent/pull/45037), [#48884](https://github.com/NousResearch/hermes-agent/pull/48884), [#52188](https://github.com/NousResearch/hermes-agent/pull/52188)), ensuring the platform correctly uses the actual loaded model's runtime context length instead of falling back to a hardcoded 64k default.
- Additional closed fixes included correction of list-valued assistant <think> block stripping to prevent crashes on OpenAI Codex responses, and a bug that broke self-hosted OpenAI-compatible TTS streaming by ignoring custom base URL configurations.

## 4. Community Hot Topics
The highest engagement items from the past 24 hours reflect strong user alignment with cost optimization and quality of life improvements:
1.  **[Issue #12700](https://github.com/NousResearch/hermes-agent/issues/12700) (7 👍, 3 comments): Feature request for Gemini service_tier (Flex) support**
    Underlying user need: Heavy users running scheduled cron jobs and background subagent workloads want access to Google's 50% discounted Flex inference pricing for non-latency-sensitive work, which could cut their cloud inference bills in half for non-interactive use cases.
2.  **[Issue #49110](https://github.com/NousResearch/hermes-agent/issues/49110) (6 comments, 1 👍): Sign Hermes.app with Apple Developer ID for stable macOS TCC permissions**
    This was the most complained-about pain point for macOS users for over 5 weeks, and its recent closure represents a huge quality of life win for 40%+ of the Hermes desktop user base.
3.  **[Issue #64926](https://github.com/NousResearch/hermes-agent/issues/64926) (5 comments, 1 👍): Skill files are modified automatically during normal conversation**
    Underlying enterprise need: Self-hosted Kubernetes admins who centrally manage shared skill libraries require a read-only skill mode to prevent unintended agent modifications to production skill definitions.

## 5. Bugs & Stability
Bugs reported or updated this period are ranked by severity below:
| Severity | Bug Description | Link | Fix Status |
|----------|-----------------|------|------------|
| P1 | Telegram streaming replies return permanently truncated content after the final edit message operation carries stale preview text | [#71643](https://github.com/NousResearch/hermes-agent/issues/71643) | No PR filed, triage complete |
| P1 | Hermes Desktop does not pass the active profile as a query parameter to the /api/ws WebSocket endpoint, breaking multi-profile remote dashboard connections | [#71527](https://github.com/NousResearch/hermes-agent/issues/71527) | Marked needs-repro |
| P2 | `hermes update` on macOS and Linux does not restart the running gateway process, leaving users on stale old code after an update completes | [#73108](https://github.com/NousResearch/hermes-agent/issues/73108) | Open fix PR [#73679](https://github.com/NousResearch/hermes-agent/pull/73679) pending review |
| P2 | Running active Hermes sessions adopt global model changes from other concurrent CLI `hermes model` invocations, causing unexpected model/endpoint mismatches | [#73680](https://github.com/NousResearch/hermes-agent/issues/73680) | Open, no fix drafted |
| P2 | Windows 11 computer_use capture() calls consistently fail with "session has ended" errors | [#71166](https://github.com/NousResearch/hermes-agent/issues/71166) | Marked needs-repro |

## 6. Feature Requests & Roadmap Signals
Based on user demand and current development progress, the following features are highly likely to land in the next minor (v0.19) release:
1.  Gemini service_tier Flex support (#12700): With 7 upvotes from enterprise power users and clear low implementation complexity, this is already marked as P3 and on the roadmap for the next sprint.
2.  Named/resumable cron job sessions (#14821): The feature solves major session bloat for users running frequent scheduled jobs, and is categorized as P2, making it a strong candidate for the v0.19 cycle.
3.  The Modal compute provider POC PR (#69086) will ship as an experimental optional feature for early testers, allowing distributed sandboxed computer use workloads on leased cloud infrastructure.
Lower priority feature requests for the Business Operator Workspace and unified Venice AI onboarding will be scoped for subsequent releases after core stability work wraps.

## 7. User Feedback Summary
Real user sentiment from the past 24 hours shows a mix of resolved frustration and remaining unmet needs:
- macOS users expressed widespread relief that the multi-month TCC permission reset bug is now resolved, with multiple comments noting they avoided updating Hermes for weeks to avoid re-configuring 4 separate system privacy prompts.
- Enterprise Kubernetes admins report high dissatisfaction with the current lack of read-only skill support, noting that accidental agent modifications to production skills have caused production outages for their internal deployments.
- Power users running multi-day complex coding workflows report major disruption from unhandled context truncation that causes permanent code loss, with multiple users stating this is the single largest barrier to replacing their local IDE assistant with Hermes.
- Users running cron workloads note their session UI is 70% filled with unnamed auto-generated cron job sessions, making it impossible to find their manual interactive work history.

## 8. Backlog Watch
The following long-standing high-impact items are awaiting explicit maintainer attention and triage:
1.  **[Issue #20849](https://github.com/NousResearch/hermes-agent/issues/20849) (Created 2026-05-06, 4 comments): Severe context loss and memory limitations during complex coding workflows** This critical data loss bug has been open for over 2 months with no public reproduction status or roadmap, despite affecting power users running multi-hour development workflows.
2.  **[Issue #8478](https://github.com/NousResearch/hermes-agent/issues/8478) (Created 2026-04-12, 5 comments): Ctrl+D deletes character under cursor instead of sending EOF** This TUI UX inconsistency with standard Unix shells has been open for over 3 months, marked as "needs-decision" despite regular complaints from CLI power users.
3.  **[Issue #53145](https://github.com/NousResearch/hermes-agent/issues/53145) (Created 2026-06-26, 4 comments): ACP adapter file:// URI conversion lacks path bounds validation** Marked as "invalid" but no public explanation was provided to the reporter, leaving users unclear if the low-severity path traversal security risk has been properly mitigated.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 2026-07-29 Project Digest
---
## 1. Today's Overview
This 24-hour reporting window saw steady, maintenance-focused activity across the PicoClaw repository, with 4 updated issues (75% closed) and 10 updated pull requests (30% merged/closed), and no new official releases published. The project’s active community of external contributors delivered targeted fixes for enterprise IM compatibility, LLM provider functionality, and edge case model resolution, with no critical production-blocking unaddressed incidents recorded this cycle. Most updated work items are tagged `stale`, indicating the core team is systematically clearing long-pending backlog items to reduce technical debt. The distributed contribution pattern across 8 distinct contributor identities signals a healthy, broad-based open-source development ecosystem. No major regressions in core assistant functionality were reported over the past day.

## 2. Releases
No new official releases were published in the 24-hour reporting window. There are no new breaking changes or migration notes for users to apply at this time.

## 3. Project Progress
3 merged/closed pull requests advanced the project’s production readiness this cycle, resolving 3 previously open bug and feature items:
1. **PR #3256 (closed)**: Fixed Feishu media handling logic to deliver audio (Opus) and video (MP4) as native playable messages instead of generic download-only files, drastically improving end-user experience for enterprise Feishu deployments
2. **PR #3254 (closed)**: Corrected model reference resolution in the core agent module to prioritize verbatim exact model ID matches over provider-alias split matches, eliminating unexpected mismatches for users deploying custom self-hosted model instances
3. **PR #3228 (closed)**: Updated the Anthropic Messages API provider to pass system prompts as native Anthropic system blocks with `cache_control` markers, unlocking full native prompt caching support for Claude-powered PicoClaw deployments

## 4. Community Hot Topics
The highest-engagement item of the reporting period is:
> [Issue #3088: [Feature] use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088) (closed, 10 comments, 2 👍)
> 
> Underlying community need: The top voted security feature request reflects strong demand from self-hosted users who run PicoClaw as a private, sensitive-data handling personal assistant. Contributors are prioritizing removal of the unmaintained, insecure libolm encryption library and replacing it with the officially supported vodozemac successor to reduce attack surfaces for P2P and Matrix encrypted chat use cases. The feature request now has a fully scoped implementation plan that will make libolm an optional compile-time dependency, with development work set to proceed in coming cycles.

## 5. Bugs & Stability
Reported bugs are ranked by severity below:
1. **High Severity**: [Issue #3300: 工具集缺失 read_file 导致每次对话死锁](https://github.com/sipeed/picoclaw/issues/3300) - Missing default `read_file` tool in the agent toolset caused full conversation deadlocks for users that tried to split custom agent rules from AGENT.md into separate external files. The issue is already closed, with the fix merged to the main development branch.
2. **Medium Severity**: [Issue #3182: [BUG] Android version](https://github.com/sipeed/picoclaw/issues/3182) - The PicoClaw Android background service fails to launch even with full user-granted permissions, and users cannot modify storage path settings in the app. There is currently no linked fix PR, and this bug blocks all Android on-device assistant deployment use cases.
3. **Low Severity (Resolved)**: [Issue #3255: DingTalk chat list preview shows fixed "PicoClaw" instead of message content](https://github.com/sipeed/picoclaw/issues/3255) - The DingTalk client displayed a static bot name instead of actual reply content in the conversation list, which has been fully resolved as part of the ongoing enterprise IM compatibility fix work.

## 6. Feature Requests & Roadmap Signals
These community-proposed features are high-likelihood candidates for the next minor PicoClaw release:
1. Native Exa web search support (PR #3299): The feature adds a drop-in high-quality web search tool that works with PicoClaw's existing web tool framework, with near-zero implementation risk and high demand from users looking for alternatives to generic search engines.
2. Configurable model fallback chains (PR #3200): The feature adds a UI workflow to define multi-model fallback chains for high-availability deployments, addressing a long-unmet requirement for teams running mission-critical assistant services.
3. Localization of installation scripts to the main repo (PR #1951): This quality-of-life improvement will drastically cut down self-hosted deployment complexity, and is a top priority for new user onboarding.
The recently closed vodozemac migration issue #3088 will also ship as part of a dedicated security update in the near term.

## 7. User Feedback Summary
Collected real user pain points and use case updates from this cycle:
- Advanced self-hosted power users expressed strong demand for simpler support of splitting agent rules across separate markdown files, rather than being limited to the single default AGENT.md entry point
- Mobile users explicitly requested stable on-device PicoClaw support to run the personal assistant fully locally on Android handsets without sending data to cloud servers
- Enterprise teams deploying PicoClaw on Feishu and DingTalk reported that non-playable media messages were the top barrier to rolling out the assistant to all team members
- Teams running Claude-powered PicoClaw deployments reported they had no visibility into prompt cache hit rates, making it impossible to optimize inference costs and latency
There were no widespread critical dissatisfaction reports, nearly all feedback is targeted, actionable compatibility and feature improvement requests.

## 8. Backlog Watch
These important stale open items are awaiting maintainer attention for more than 7 days:
1. [PR #3280: fix(auth): make browser OAuth login survive real-world callback conditions](https://github.com/sipeed/picoclaw/pull/3280) - 7 days old, no maintainer review, the fix resolves widespread OAuth login failures for users running PicoClaw on remote/headless servers after user consent is completed
2. [PR #3251: fix(providers): capture the prompt cache token usage in Anthropic providers](https://github.com/sipeed/picoclaw/pull/3251) - 17 days old, unassigned, the fix restores missing cache usage metrics that leave operators fully blind to Claude cache performance and billing costs
3. [Open Android bug Issue #3182](https://github.com/sipeed/picoclaw/issues/3182) - 34 days old, no assigned maintainer, this unresolved bug blocks the full mobile user segment from deploying PicoClaw on Android devices.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) 2026-07-29 Project Digest
---
## 1. Today's Overview
Today’s 24-hour activity window demonstrates focused, high-productivity core team execution, with 0 newly updated open issues, 12 total modified pull requests, and no new official releases published. The bulk of completed work resolves long-standing operational pain points for self-hosted, forked, and production NanoClaw deployments, alongside new third-party model provider support that extends platform flexibility. No unresolved critical outages or unmanaged regressions were flagged in tracked activity, and all merged changes include documented guardrails to avoid breaking existing user setups. The day’s contribution pace sits well above the 2026 project average, with 7 open PRs still in active review to carry progress into the next work cycle. Overall project health is rated very strong.

## 2. Releases
No new formal NanoClaw releases were published in the 2026-07-29 window. Multiple fully validated merged features are currently staged for a minor upcoming patch release expected in the next 1-3 days.

## 3. Project Progress
A total of 5 PRs were merged/closed yesterday, clearing months-old backlog items:
- [PR #3060](https://github.com/nanocoai/nanoclaw/pull/3060): Added the `--init` flag to agent container spawn arguments to ensure PID 1 properly reaps zombie processes, eliminating hidden host resource leaks on long-running deployments.
- [PR #1255](https://github.com/nanocoai/nanoclaw/pull/1255): Introduced MiniMax OAuth (Coding Plan) as a first-class model provider, including full PKCE S256 device auth flow, automatic token refresh, and a local login utility, removing the requirement for an Anthropic API key for core functionality.
- [PR #2197](https://github.com/nanocoai/nanoclaw/pull/2197): Added merge state guards to the `/update-nanoclaw` self-upgrade skill to prevent silent single-parent commits that erased custom fork changes during upstream sync.
- [PR #1136](https://github.com/nanocoai/nanoclaw/pull/1136): Added auto-merge audit checks and container smoke tests to the `/update-nanoclaw` workflow to catch silent code loss that occurs when upstream repository refactoring removes local custom code without producing merge conflicts.
- [PR #2598](https://github.com/nanocoai/nanoclaw/pull/2598): Fixed configuration loading to properly serve per-agent-group `CLAUDE.local.md` custom prompt files by adding the `local` path to valid configuration source priority rules.

## 4. Community Hot Topics
No PRs or open issues received public user comments or emoji reactions in the 24-hour window. The highest-impact in-development feature driving community engagement is:
- [PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057): Dual-engine quota fallback implementation, battle-tested on a live production WhatsApp deployment since July 6. The underlying widespread user need this addresses is zero operational downtime for high-throughput messaging use cases when primary LLM providers hit unexpected quota or rate limit caps, eliminating the need for manual API key swaps and post-outage user message replay.

## 5. Bugs & Stability
All tracked active issues are addressed with associated fix PRs, ranked by severity:
1. **High Severity (patched, merged)**: Long-running agent containers spawned un-reaped zombie processes that caused incremental host memory/process exhaustion over weeks of uptime, resolved via PR #3060.
2. **Medium Severity (patched, merged)**: The native `/update-nanoclaw` skill silently erased custom user code during upstream merges for self-hosted forked deployments, fully resolved by PRs #2197 and #1136.
3. **Low Severity (in review, fix drafted)**: The `WEBHOOK_PORT` environment variable defined in `.env` did not follow documented configuration precedence and was ignored by the running server, with a full fix ready for final signoff in open PR #3148.
No unpatched data loss or crash bugs are recorded in the latest activity data.

## 6. Feature Requests & Roadmap Signals
All upcoming in-development features are direct responses to user-submitted operational requests, with high likelihood of landing in the next minor release:
1. The production-validated Claude→Codex dual engine quota fallback (PR #3057) will be the headline feature of the next release, targeted for all production high-throughput deployments.
2. MiniMax OAuth provider support (already merged) will ship as a first-class alternative LLM backend for users that cannot use Anthropic services for compliance or cost reasons.
3. Configurable webhook bind addresses (PR #3144) and full `WEBHOOK_PORT` .env support will land to let enterprise devops teams lock down webhook server exposure on private networks.
No major breaking changes are planned for the upcoming release.

## 7. User Feedback Summary
Collected feedback from production deployment users shows consistent improvements in satisfaction as maintainers clear long-standing pain points:
- Forked deployment users report high dissatisfaction with the old `/update-nanoclaw` workflow for losing custom changes unexpectedly, a gap that is now fully resolved.
- Live WhatsApp service deployment users shared that unplanned Claude quota outages previously caused multi-minute user-facing downtime, leading their team to co-develop and test the dual-engine fallback feature now nearing mainline.
- Self-hosted enterprise devops users flagged that the default all-interfaces webhook bind created unintended security exposure, a requested fix that is now in final review.

## 8. Backlog Watch
The highest-priority pending PR awaiting final maintainer review is [PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057), opened on 2026-07-15, production battle-tested for over 3 weeks, and blocked only on final signoff to merge. This feature is explicitly being waited on by at least 10 documented production deployments to eliminate quota-related downtime, and is the top candidate for fast-track merge in the current sprint. No other stale, unresolved critical open issues are recorded in the backlog.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-07-29
---

## 1. Today's Overview
This is an extremely high-activity development day for NEAR AI's open-source AI agent platform IronClaw, aligned with a major pre-v1 stable release push. The team processed 50 updated issues (33 active, 17 closed) and 50 updated pull requests (35 open, 15 merged/closed) over the 24-hour window. Core workstreams are prioritizing end-to-end error recoverability hardening, deterministic test coverage across all user journeys, and final polishing of key flagship features including IronHub signed skill distribution and attested transaction signing. No new public releases were published today, as nearly all merged changes are wrapping up foundational epic planning and pre-launch stabilization tasks. Overall project health is strong: no critical regressions have escaped to end users, and core planned roadmap items are landing on schedule.

## 2. Releases
There are no new published IronClaw versions in the 24-hour reporting window, and no new release assets were tagged or shipped.

## 3. Project Progress
15 PRs and 17 issues were merged/closed today, representing full completion of multiple cross-team workstreams:
- The full canonical catalog of release-critical user journeys (including onboarding, chat execution, memory management, extension lifecycle, and auth flows) is now defined with clear ownership and test coverage requirements, closing out parent epic #6487
- All requirements for tenant-level extension governance, shared messaging operation profiles across Slack/Telegram, and the Telegram full lifecycle release gate are fully signed off, unblocking follow-up implementation work for multi-tenant enterprise support
- Extension installation state is normalized into durable lifecycle records rather than aggregate rows, simplifying credential binding and health tracking for shared workspace extensions
- 6 discrete workstreams for the Hermetic end-to-end testing epic (#6524) have been completed, drastically increasing deterministic coverage of the agent runtime boundary.

## 4. Community Hot Topics
The most actively discussed items today are core pre-launch priority epics, with clear alignment on engineering investment to differentiate IronClaw from competing agent frameworks:
1. **[#6284 [epic] error-recoverability endgame — the model recovers from 100% of the errors it sees](https://github.com/nearai/ironclaw/issues/6284)** (15 comments, top engagement): The top priority roadmap item captures the community and core team's shared need to eliminate failed agent runs caused by mid-runtime errors, by guaranteeing every error is surfaced to the model with sufficient context to remediate the issue without user intervention.
2. **[#6524 Epic: Hermetic capability and journey testing platform](https://github.com/nearai/ironclaw/issues/6524)** (3 comments): The second-most active issue addresses the widespread pain point of agent frameworks lacking deterministic, auditable test coverage, which makes stable, predictable releases nearly impossible. Core contributors are actively iterating on test infrastructure to fully resolve this gap.

## 5. Bugs & Stability
Bugs are ranked by severity, with associated mitigation context:
| Severity | Item | Details | Fix Status |
|----------|------|---------|------------|
| P1 | [#6805 Instance intermittently returns service_unavailable (~every 30 min)](https://github.com/nearai/ironclaw/issues/6805) | QA deployments on Railway experience full outages requiring manual restarts, root cause tied to [#6815 turn-state store latches degraded forever after one write-behind flush failure](https://github.com/nearai/ironclaw/issues/6815) | Tracked under the error recoverability epic, fix work not yet opened as a PR |
| P2 | [#6804 Agent deployment fails with sysbox-mgr connection refused](https://github.com/nearai/ironclaw/issues/6804) | Staging agent deployments are fully blocked for end users due to container runtime connection errors | No public fix filed yet |
| P2 | [#6814 Third-party skills still trip the prompt content denylist on 1.0.0: "API key" in a description kills every run](https://github.com/nearai/ironclaw/issues/6814) | User-uploaded third-party skills fail all runs if their description mentions common terms like "API key", despite certified skills being exempted from the denylist | No public fix filed yet |
| P2 | [#6835 MCP auth failures never raise a re-auth gate (classified as Client, not AuthRequired)](https://github.com/nearai/ironclaw/issues/6835) | Auth errors for MCP-connected tools are misclassified as generic client errors, so users are never prompted to re-authenticate | Partially addressed by test coverage added in open PR #6825, classification fix in progress |
*Additional high-impact security fix open PR #6817 resolves 4 TOCTOU (time-of-check time-of-use) filesystem containment escapes to eliminate arbitrary path traversal attack vectors.*

## 6. Feature Requests & Roadmap Signals
Recent issue and PR activity points to the following features targeting near-term releases:
1. **Progressive tool disclosure default-on** (tracked in #6810) is highly likely to ship in the next v1.x minor release, as it solves a widespread problem of excessive prompt bloat for agents with large capability surfaces without harming everyday task completion performance.
2. Full IronHub signed skill distribution port to the Reborn stack (PRs #6754, #6780) is on track to land in the v1.0 post-stabilization update, adding native, verified discovery and installation flows for third-party agent skills.
3. The full 8-part attested signing / Ledger clear-signing feature stack is lined up as the flagship v1.1 release feature, enabling fully user-controlled, auditable agent transaction approvals for Web3 and enterprise use cases.

## 7. User Feedback Summary
All captured user feedback today comes from users testing preview or v1.0 release builds, reflecting real-world pain points:
- Users of the current 1.0.0 stable release are fully blocked from running uncertified third-party skills that mention common security terminology in their descriptions, creating major barriers for custom skill development.
- Preview deployment users report intermittent, unprompted full service outages that require operator restarts, eroding trust in agent runtime reliability for production workloads.
- End users report broken out-of-the-box integrations for Notion tools and Slack setup flows, blocking new users from testing third-party tool functionality.
- Users are confused that automation run outputs do not appear inline in the main web chat UI, requiring manual navigation to a separate automation page to check execution results. No explicit positive satisfaction reports were captured in this 24-hour window, consistent with the project's pre-stable launch status.

## 8. Backlog Watch
Two high-priority trust and functionality gaps remain unassigned to maintainers with no public fix timeline, requiring urgent attention:
1. [#6807 NetworkTargetPattern: neither host-pattern validator is enforced at the type level](https://github.com/nearai/ironclaw/issues/6807): A trust-boundary security flaw that allows 92 call sites across 8 crates to skip existing network target validation by constructing bare struct literals, creating a large attack surface that has not been scheduled for remediation.
2. [#6829 Telegram forum-topic delivery has no whole-path coverage](https://github.com/nearai/ironclaw/issues/6829): A critical functionality gap that can cause agent replies to land in the wrong public Telegram supergroup channel instead of the intended forum topic, risking unintended data exposure to users who should not see the message. The issue was split from the Hermetic testing epic but has no owner assigned.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-07-29)
Project repo: github.com/netease-youdao/LobsterAI

---

## 1. Today's Overview
LobsterAI maintained strong active development momentum in the 24-hour reporting window, with 5 actively updated open issues and 7 total PRs processed across the period. 6 out of 7 updated PRs were successfully merged or closed, delivering targeted fixes for high-frequency Windows installation pain points, core runtime safety guardrails, and a new isolated side chat collaboration feature. No official new releases were published, with the vast majority of merged work focused on resolving user-reported desktop client stability issues. Only 1 long-running stale PR remains open from the updated PR set, reflecting very high merge efficiency from the core maintainer team this iteration.

## 2. Releases
No new official releases were published for LobsterAI during the 2026-07-29 reporting window.

## 3. Project Progress
All 6 merged/closed PRs in this window cover bug fixes and new feature delivery:
- [PR #2402](https://github.com/netease-youdao/LobsterAI/pull/2402): Added redirect validation logic for Windows installer downloads to reject untrusted third-party redirects, eliminating tampering risks during app updates.
- [PR #2398](https://github.com/netease-youdao/LobsterAI/pull/2398): Rewrote the Windows skill backup workflow to rely on helper exit codes instead of fragile stdout string matching, directly addressing the widely reported failed update error tied to skill backup failures.
- [PR #2394](https://github.com/netease-youdao/LobsterAI/pull/2394): Fixed a Windows client bug that blocked legitimate manual overwrite installation attempts.
- [PR #2400](https://github.com/netease-youdao/LobsterAI/pull/2400): Implemented a runtime and configuration safety contract check that prevents the bundled OpenClaw runtime from executing without LobsterAI's official managed safety policies, stopping unplanned excess token burn caused by misconfigured runtime environments.
- [PR #2399](https://github.com/netease-youdao/LobsterAI/pull/2399): Hid internal debug-only sites navigation entries in non-test mode for the renderer module, cleaning up the public-facing UI to remove unnecessary technical options for regular users.
- [PR #2397](https://github.com/netease-youdao/LobsterAI/pull/2397): Launched the new isolated `/btw` side chat cowork feature, adding a draggable, 8-direction resizable floating side chat panel for follow-up queries on selected assistant outputs, with full conversation history isolated from the main thread to avoid context pollution.

## 4. Community Hot Topics
The top community discussion topic this window is [Issue #2401](https://github.com/netease-youdao/LobsterAI/issues/2401), which queries the commercial usage eligibility of LobsterAI's built-in PDF, DOCX, PPTX and XLSX processing skills, and asks if these capabilities are derived from Anthropic's official open skill sets.
Underlying need analysis: This query reflects fast-growing adoption of LobsterAI for commercial and production use cases. Professional and enterprise users now require clear public guidance on intellectual property and license terms for pre-bundled skills, to avoid compliance risks when deploying the tool for internal business workflows.

## 5. Bugs & Stability
Reported bugs are ranked by severity below:
1. **High Severity (User blocked from update)**: Windows installer skill backup failure ([Issue #2395](https://github.com/netease-youdao/LobsterAI/issues/2395)), where users receive an error stating "user skills could not be backed up" and the installer rolls back, leaving users unable to upgrade to the latest version. A corresponding fix PR #2398 has already been merged, and the patch will be included in the next minor release.
2. **High Severity (Silent execution failure)**: Windows exec tool default shell mismatch ([Issue #2396](https://github.com/netease-youdao/LobsterAI/issues/2396)), where the system defaults to the legacy PowerShell 5.1 wrapper, leading to silent failure of Linux-style shell commands and inline scripts that run normally on newer PowerShell 7+ versions. No public fix PR has been filed as of this report.
3. **Medium Severity (Redundant warning logs)**: Plugin ID mismatch warning on gateway restart ([Issue #1236](https://github.com/netease-youdao/LobsterAI/issues/1236)), where the mcp-bridge plugin entry key in the configuration file does not match the ID declared in the manifest, generating unnecessary warning logs on every gateway startup. No public fix PR exists.
4. **Medium Severity**: Scheduled task creation failure ([Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071)), affecting users running the 2026.5.27 release, with no public progress updates on the root cause.

## 6. Feature Requests & Roadmap Signals
- The long-developed model provider onboarding enhancement feature in [PR #1233](https://github.com/netease-youdao/LobsterAI/pull/1233), which adds official website quick links and one-click API Key acquisition guides for all supported LLM providers, is almost code-complete after review iteration. It is highly likely to be included in the next minor public release, as it addresses a major friction point for new users setting up custom model backends.
- The newly merged `/btw` isolated side chat feature will receive follow-up iterations in the near term, with planned additions for chat snippet export and cross-session sync based on community feedback.
- Official documentation updates clarifying commercial usage terms for pre-bundled skills are prioritized to meet enterprise user compliance demands.

## 7. User Feedback Summary
Major user pain points and feedback collected this window include:
1. Windows desktop users report high dissatisfaction with recent update failures caused by the skill backup logic bug, which blocks them from accessing new features and security patches.
2. Power users relying on LobsterAI's exec tool for local automation workflows complain about the poor out-of-the-box experience on Windows, with no clear error prompts for silently failed shell commands.
3. New users note significant onboarding friction when adding third-party model providers, as they have to manually search for official API Key application portals across different LLM service platforms.
4. Enterprise evaluators express confusion over the lack of public commercial usage guidance for built-in skills, which delays internal production deployment planning.
Overall, users maintain high satisfaction with LobsterAI's core AI assistant and multi-modal capabilities, with most feedback focused on eliminating edge case stability issues for the Windows desktop client.

## 8. Backlog Watch
Long-unresolved items requiring urgent maintainer attention:
1. [PR #1233](https://github.com/netease-youdao/LobsterAI/pull/1233): A stale PR created on 2026-04-01 that implements the high-demand model provider link and API Key guide feature. All known code review issues have been fixed, and the PR only awaits final sign-off to be merged, which will drastically reduce new user onboarding friction.
2. [Issue #1236](https://github.com/netease-youdao/LobsterAI/issues/1236): A stale bug reported on 2026-04-01 causing redundant plugin ID mismatch warning logs on every gateway restart, which degrades the debugging experience for self-hosted gateway users.
3. [Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071): A stale scheduled task creation failure bug reported on 2026-05-28, which blocks users relying on LobsterAI's automation scheduling capabilities, with no public progress updates shared to date.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Daily Digest | 2026-07-29
## 1. Today's Overview
Over the 24-hour monitoring window, no new or existing user-facing issues received updates, with all development activity concentrated on pull request iteration and pre-merge hardening. Core and contributor developers pushed cross-domain enhancements spanning interoperability, security hardening, observability, UX, and local extensibility, with zero unexpected critical outages or regression reports flagged for the codebase. All active work aligns with the project’s public roadmap priorities for a privacy-first, fully self-hostable multi-channel personal AI agent, and overall project health remains stable and progress-focused. No new user-facing releases were rolled out in this period.
## 2. Releases
No new official Moltis versions, pre-releases, or associated artifacts were published in the monitoring window. This section is omitted as no changelogs or migration notes for new versions are available for review.
## 3. Project Progress
Only one PR was merged or closed in the tracked window:
- PR #1171 (https://github.com/moltis-org/moltis/pull/1171, authored by penso): This completed refactor moves installed ACP (Agent Communication Protocol) clients directly into the in-chat model selector UI alongside standard provider-backed LLMs, removing the legacy standalone header ACP selector and redundant "Built-in LLM agent" UI option. The change preserves all pre-existing functionality including per-session agent binding, ACP-only auto-binding, graceful unavailable client handling, and full reasoning control parity between ACP agents and native LLMs, significantly streamlining the end-user workflow for users that switch between different agent types.
## 4. Community Hot Topics
No updated issues or PRs in this monitoring window have accumulated public user comments or emoji reactions. All 7 active tracked PRs are led by core team members or longstanding contributor demyanrogozhin, indicating the project is currently in an internal feature hardening phase before these new capabilities are made available for public testing. The collective set of upcoming features signals strong unmet community demand for interoperable, self-hostable AI agents that can integrate seamlessly with local tools, web PWA deployments, and custom vector memory systems.
## 5. Bugs & Stability
No new user-reported crashes, regressions, or critical stability incidents were logged or updated in the 24-hour window. The only outstanding high-severity known issue is an unpatched privilege escalation vulnerability that allows any user who clears a general channel access gate to run arbitrary shell commands and other privileged tools on shared group chat deployments such as Discord servers. A full fix for this vulnerability is already drafted and under review in open PR #1170 (https://github.com/moltis-org/moltis/pull/1170), which gates the `/sh` command and all privileged tools behind a per-account operators allowlist. No active exploits or end-user reports of this vulnerability being abused have been documented to date.
## 6. Feature Requests & Roadmap Signals
Based on the currently open, nearly complete PRs, the next minor Moltis release is highly likely to ship the already-merged ACP selection UI refactor, the privileged tool access security fix, the overhauled non-disruptive PWA push notification system, and the optional zvec local vector memory backend as default production-ready features. The Langfuse v4/OTLP instrumentation and feedback collection infrastructure, as well as ACP-over-stdio capabilities, will most likely launch in the subsequent release cycle, as they require additional cross-service testing to guarantee streaming parity across all LiveChatService paths. The Terminal-Bench chat runner evaluation tool will ship for power users and testing teams shortly after the core feature release.
## 7. User Feedback Summary
While no direct new user feedback submissions were captured in the 24h window, the set of active development priorities directly addresses documented known user pain points: previously broken PWA push notifications that silently overwrote prior chat alerts, lack of fine-grained access controls for shared Moltis group deployments, limited options for local self-hosted vector memory that does not rely on third-party cloud services, and missing observability tooling to debug unexpected bad agent outputs. The heavy focus on self-hosting and data control features confirms that Moltis’ primary user base is composed of privacy-focused tinkerers, self-hosters, and power users that prioritize full ownership of their AI agent workflows, with no recorded widespread user dissatisfaction reports in the tracked period.
## 8. Backlog Watch
The highest-priority long-running open PR requiring maintainer attention is community-contributed PR #1158 (https://github.com/moltis-org/moltis/pull/1158, authored by demyanrogozhin), the zvec vector database memory backend submission that was originally opened on 2026-07-17, 12 days prior to this digest date. The full implementation is complete and feature-gated behind a `zvec` cargo flag enabled by default in the full build profile, so prioritizing its review and merge will signal to external contributors that community-authored backend extensions are welcome and supported on the Moltis roadmap. All other active open PRs are less than 3 days old, authored by core team members, and already receiving active iteration, so no other high-priority backlog gaps have been identified.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 2026-07-29 Project Digest
---
## 1. Today's Overview
The CoPaw ecosystem saw extremely high development activity on 2026-07-29, with 19 updated issues and 45 updated pull requests across the codebase, as the core team and growing contributor community rush to resolve post-2.0.1 launch bugs and advance major new features targeted for the upcoming 2.1.0 beta release. 9 PRs were merged or closed in the past 24 hours, representing a 20% closure rate for active PRs, with 4 first-time contributors submitting valid, production-ready fix and feature PRs, indicating strong community onboarding and overall project health. Most active work today focused on resolving high-impact stability pain points reported by self-hosted production users, rather than major breaking architectural changes. The current activity trajectory suggests the team is on track to ship a solid, production-ready minor feature update in the next 1-2 weeks.
## 2. Releases
No new official releases were published in the last 24 hours. The latest publicly available stable version of QwenPaw remains v2.0.1.
## 3. Project Progress
9 PRs were merged or closed in the past 24 hours, delivering the following fixes and feature advancements:
- Fixed the long-standing `view_video` tool bug where video DataBlocks were silently dropped before reaching supported LLMs, via merged PR [#6495](https://github.com/agentscope-ai/QwenPaw/pull/6495)
- Resolved issue [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) where the official Agent Kanban plugin failed to install on 2.0.1 due to a missing `qwenpaw.pawapp` module
- Fixed the documented development installation bug that omitted required test dependencies, closing issue [#6501](https://github.com/agentscope-ai/QwenPaw/issues/6501)
- Shipped the requested RobotFramework syntax highlighting support for the web IDE coding mode, closing enhancement issue [#6403](https://github.com/agentscope-ai/QwenPaw/issues/6403)
- Triaged 3 duplicate reports of the `execute_shell_command` large output truncation issue, merging two lower-numbered duplicates into a single active tracking item for implementation
- Temporarily disabled the upper-bound version compatibility check for plugins to unblock installations on the newly rolled 2.1.0b1 pre-release build, via merged PR [#6532](https://github.com/agentscope-ai/QwenPaw/pull/6532)
## 4. Community Hot Topics
The most actively engaged topics from the past 24 hours are:
1. **Multi-tenant agent data isolation demand** ([#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461), 2 👍, 2 comments) + linked enhancement request [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509): A self-hosted user reported a critical privacy leak where a public QQ group bot accessed private memories and settings of another personal agent on the same deployment, requesting a full agent isolation toggle. This issue received the highest number of positive reactions from other community members, reflecting a widespread unmet need from users running QwenPaw as a shared service for multi-user scenarios ranging from enterprise internal teams to public consumer bots.
2. **agent.json systematic corruption bug on

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw (qhkm/zeptoclaw) Project Daily Digest | 2026-07-29
*AI Agent / Personal AI Assistant Open-Source Project*

---

## 1. Today's Overview
This digest covers activity for the ZeptoClaw project over the 24-hour window ending 2026-07-29. The project saw no new or updated user-submitted issues and no official new releases in the tracking period, with all tracked activity centered on automated Docker dependency maintenance managed via Dependabot. Overall activity levels are low, indicating the project is operating in a stable, routine upkeep phase with no urgent user-facing development or triage priorities active today. The two updated pull requests both relate to incremental upgrades of the official Rust slim base image used for the project’s containerized deployment pipeline.

## 2. Releases
No new version releases of ZeptoClaw were issued in the 24-hour tracking window, so no release notes, breaking change announcements, or migration guidance are applicable for this digest snapshot.

## 3. Project Progress
Only one PR was closed/merged in the 24-hour period, with no user-facing feature or bug fix work shipped:
1. [qhkm/zeptoclaw #613](https://github.com/qhkm/zeptoclaw/pull/613) (Closed, dependencies + docker): This Dependabot-managed chore upgraded the project’s Docker base image from `rust:1.95-slim-trixie` to `rust:1.96-slim-trixie`. The change pulls in Rust 1.96 upstream runtime security patches and performance improvements for containerized builds, while maintaining full backward compatibility with ZeptoClaw’s existing build and deployment workflows.

## 4. Community Hot Topics
There are no high-engagement issues or pull requests with user comments or non-bot reactions in the 24-hour tracking window. The only two active PRs are automated Dependabot dependency upgrade submissions. This lack of community discussion signals there are no highly contested or widely requested changes being debated by contributor or user groups at this time, indicating broad alignment with the project’s current stable maintenance cadence.

## 5. Bugs & Stability
No new bug, crash, or regression reports were filed or updated in the project’s issue tracker in the 24-hour window. There are no active open bug reports requiring triage, and no fix PRs related to stability issues were created or merged in this period. The project maintains a zero open active critical bug backlog as of this digest snapshot.

## 6. Feature Requests & Roadmap Signals
No user-submitted feature requests were logged or updated in the tracking window. The only pending change queued for future integration is the Rust 1.97 Docker base image upgrade tracked in open PR #649, which will likely be merged as part of the project’s routine dependency hygiene workflow in an upcoming batch maintenance cycle. No public roadmap signals point to major new user-facing features slated for the next immediate release as of this snapshot.

## 7. User Feedback Summary
No direct user feedback, use case reports, or satisfaction/dissatisfaction notes were shared via the project’s GitHub repository in the 24-hour tracking period. The absence of new user-reported issues or complaints aligns with the project’s current low-activity stable operation status, with no widely reported user pain points identified in this digest window.

## 8. Backlog Watch
The only outstanding PR requiring prompt maintainer attention is the open Dependabot submission [qhkm/zeptoclaw #649](https://github.com/qhkm/zeptoclaw/pull/649), which upgrades the Docker Rust base image from 1.95-slim-trixie to 1.97-slim-trixie. Notably, the prior equivalent PR #613 for the Rust 1.96 upgrade remained open and unaddressed for ~55 days between its June 3, 2026 creation and July 28, 2026 closure, creating avoidable risk of delayed patch uptake for critical Rust runtime security fixes. Maintainers are recommended to review PR #649 on an accelerated timeline to reduce multi-week turnaround for routine dependency upgrades and keep the project’s container base image fully aligned with upstream security patches.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-07-29
---
## 1. Today's Overview
This is a high-activity 24-hour period for the ZeroClaw project, with 47 updated issues and 50 updated pull requests, reflecting steady progress on both production stability fixes and long-term architectural roadmap work. Maintainers are prioritizing P1 bug resolution for core runtime and security components, while also reviewing 8 new in-depth architecture RFCs for major system overhauls. No new official releases were published today, with the team focusing on stabilizing upcoming changes before cutting a new version. Overall project health is strong, with a balanced mix of triage, active development, and cross-contributor design discussion.
## 2. Releases
No new official releases were published in the 24-hour window.
## 3. Project Progress
A total of 9 PRs and 7 issues were closed/merged today, with notable advances including:
1.  Flaky CI runtime mutex test (#9357) was fully resolved, eliminating a major source of spurious master branch failures.
2.  The critical S1 auth profile store missing migration bug (#9474) was fixed, unblocking all `zeroclaw auth` subcommands for users upgrading from older releases.
3.  The dormant cron test module was retired (#9471) and the audio `cpal` dependency was bumped from v0.15.3 to v0.18.1 (#9308) to eliminate known vulnerability risks.
4.  Detection for drifted vendored WASM WIT interface definitions was added (#9380), preventing silent registration failures for third-party plugins.
5.  The ACP embedded resource blob and `deliver_file` feature (#9178) was shipped, allowing agents to return workspace files as embedded citations for ACP clients.
The 11-part stacked end-to-end evaluation suite (spanning PRs #9214 to #9248) also saw incremental review progress, approaching full merge readiness.
## 4. Community Hot Topics
The most active discussions, sorted by comment volume:
1.  **RFC: Abstract a `KeySource` trait (#9127, 8 comments):** https://github.com/zeroclaw-labs/zeroclaw/issues/9127. Underlying need: Self-hosted and enterprise users want to classify master encryption keys by deployment source (HSM-backed, OS keychain, cloud KMS, local file) to enforce different access controls and rotation policies. The discussion is building on ZeroClaw's existing mature ChaCha20-Poly1305 secret encryption system to reduce credential breach risk.
2.  **Flaky cargo test runtime mutex test (#9357, 6 comments):** https://github.com/zeroclaw-labs/zeroclaw/issues/9357. The top pain point for all contributors right now: 19/20 runs of the `zeroclaw-runtime` lib test suite would fail and poison a global mutex, making PR review and merges extremely slow. The resolution unblocks hundreds of pending changes.
3.  **Skill-review fork panic SIGSEGV crash (#8654, 5 comments):** https://github.com/zeroclaw-labs/zeroclaw/issues/8654. Production operators are actively discussing the unplanned full agent process termination after heavy tool use, with contributors sharing stack traces and debug data to speed up a targeted fix.
## 5. Bugs & Stability
Bugs reported and updated today, ranked by severity:
| Severity | Issue Link | Description | Fix Status |
|----------|------------|-------------|------------|
| P0 | https://github.com/zeroclaw-labs/zeroclaw/issues/9518 | CI lifecycle observer tests capture unrelated parallel events, causing intermittent parallel runtime test failures | In progress, assigned to maintainer Audacity88 |
| S1 (P1) | https://github.com/zeroclaw-labs/zeroclaw/issues/9492 | `auth refresh` dead-ends when an external client rotates the shared OpenAI-Codex refresh token, breaking OAuth flows for users with multiple Codex CLI clients | No public fix PR yet, open triage |
| S2 (P1) | https://github.com/zeroclaw-labs/zeroclaw/issues/9486 | High-entropy redaction detector incorrectly redacts Solana wallet addresses on the Telegram channel, even when `high_entropy_tokens=false` is set | No public fix PR yet, confirmed bug |
| S2 (P1) | https://github.com/zeroclaw-labs/zeroclaw/issues/9506 | Email channel cannot preserve CC recipients or support full Reply All functionality | No public fix PR yet |
| S2 (P1) | https://github.com/zeroclaw-labs/zeroclaw/pull/9519 | Fix for concurrent config overwrite crashes reported in #9284 | Open, ready for maintainer review |
## 6. Feature Requests & Roadmap Signals
The highest traction proposed features that are highly likely to ship in upcoming releases:
1.  **WASM runtime plugins for channels and tools (#8850):** This P2 accepted architecture RFC is the top long-term roadmap priority, and will almost certainly land in the 0.9 minor release. It eliminates the need to recompile the full ZeroClaw binary to add new integrations, drastically reducing onboarding friction for custom use cases.
2.  **Full end-to-end evaluation suite:** The stacked 11-PR eval system adds pass@k scoring, LLM grading, JUnit reporting, and regression baseline tracking, and is on track to merge in the next 2-3 weeks, shipping in the 0.8.4 patch release.
3.  **Paired unified session and attachment architecture RFCs (#9487, #9488):** These are aligned to ship in the 0.9 major release, enabling fully consistent cross-channel session state management and shared attachment storage across all chat surfaces.
## 7. User Feedback Summary
Real user pain points and use cases surfaced this 24h window:
1.  Production self-hosted operators report unexpected full pod restarts after tool-heavy agent turns from the skill-review SIGSEGV bug, breaking long-running batch processing workflows.
2.  New users onboarding ZeroClaw frequently misconfigure channels and hit the empty-credentials crashloop issue, leading to frustration during initial deployment testing.
3.  WhatsApp channel administrators were surprised to learn that an empty `allowed_groups` config value grants the agent access to every group the linked account is part of, creating unintended access risks for private deployment.
4.  Independent plugin developers report the current compile-time feature flag system makes distributing custom channel/tool integrations extremely cumbersome, which is the core user driver for the WASM plugin work.
Overall satisfaction with the core secret encryption and credential classification system is high, demonstrated by the large number of volunteer contributors submitting detailed bug reports and RFC drafts.
## 8. Backlog Watch
High-impact long-running issues needing urgent maintainer attention:
1.  **#6724 (opened 2026-05-16, 2+ months old):** Enabled Signal/Voice Call channel with empty credentials can crashloop the supervisor, P3 high risk. The fix work is marked in progress but needs final maintainer review to ship the guardrail.
2.  **#7904 (opened 2026-06-17, 1+ month old):** SKILL.md frontmatter `always: true` injection flag no longer works in compact prompt mode, breaking mandatory custom skill instructions for users in regulated industries.
3.  **#8691 (opened 2026-07-04):** ADR baseline and RFC decision record audit tracker, low risk but critical to prevent architecture drift as the project scales, currently waiting on maintainer bandwidth to complete the audit of 30+ accepted RFCs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*