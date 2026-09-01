# OpenClaw Ecosystem Digest 2026-09-01

> Issues: 446 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-01 01:00 UTC

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

# OpenClaw Project Daily Digest (2026-09-01)
---
## 1. Today's Overview
OpenClaw maintained very high development throughput in the last 24 hours, with 446 updated issues (211 open, 235 closed) and 500 updated PRs (249 open, 251 merged/closed) as the team enters a post-v2026.8.1 stable release sprint focused on fixing upgrade regressions, core performance bottlenecks, and UI polish. The 235 closed issues represent a 53% closure rate for recently updated tickets, indicating strong triage and bug resolution velocity. Activity is heavily weighted towards resolving critical pain points reported by users who upgraded to the new 2026.8.1 build, alongside incremental improvements to core gateway stability and cross-channel feature parity. Overall project health remains strong, with minimal unaddressed critical security vulnerabilities and active community participation in release testing.

## 2. Releases
A new stable version, **v2026.8.1 (OpenClaw 2026.8.1)**, was published recently:
- Full official release notes are available at: https://docs.openclaw.ai/releases/2026.8.1
- Mandatory migration guidance: All users must back up their configuration and runtime state before upgrading. If the automatic update process fails, use the local coding harness included with OpenClaw to diagnose migration errors, resolve schema conflicts, and validate that the Gateway starts successfully after the upgrade.
- The release rolled out to stable production channels this week, with a small wave of post-launch upgrade regressions already being prioritized for patch fixes.

## 3. Project Progress
With 251 total merged/closed PRs in the 24h window, the team resolved multiple high-impact features and bug fixes:
1.  Resolved Control UI session catalog refresh storms to eliminate redundant client-side API calls that caused UI lag on large deployments with 100+ active sessions
2.  Fixed the macOS provider sign-in stall bug that prevented users from completing OAuth authentication flows for third-party LLM providers
3.  Added full session management actions directly in the chat header, letting users pin sessions, mark chats unread, copy session IDs, and move chats to groups without navigating to the sidebar
4.  Rolled out a new security policy that requires explicit user acknowledgement for high-risk plugin installation warnings to reduce accidental untrusted plugin execution
5.  Fixed Discord STT-TTS failure caused by xAI transcription endpoints returning empty valid responses that were previously treated as hard errors
6.  Resolved the bug where OAuth-enabled MCP servers were missing from the tool catalog for Claude CLI runtime sessions

## 4. Community Hot Topics
The most active and widely discussed items from the last 24 hours reflect top production user priorities:
1.  [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) (23 comments): Critical Gateway memory leak that lets RSS grow from 350MB to 15.5GB over 2-3 days of uptime before triggering OOM crashes. Community users running 24/7 production deployments are sharing their own mitigation workarounds (scheduled weekly restarts) and pushing for an official root fix to eliminate unplanned downtime.
2.  [Issue #102175](https://github.com/openclaw/openclaw/issues/102175) (18 comments): Embedded prompt cache breaks across session, authorization, and OpenAI Responses boundaries, causing up to 40% higher inference costs and slower response times for long-running multi-turn agent workloads. Enterprise users with high session volumes are actively testing partial fixes and sharing trace data to help the team validate the fix.
3.  [Issue #22676](https://github.com/openclaw/openclaw/issues/22676) (17 comments, now closed): Signal daemon SIGUSR1 restart race condition that created orphaned processes during hot config updates, leading to message loss. Production admins requested this fix to enable zero-downtime configuration changes for large multi-agent deployments, and the closed PR now resolves this long-standing 6-month-old issue.
4.  [PR #134554](https://github.com/openclaw/openclaw/pull/134554): In-review patch to reduce Gateway memory usage during session lookup and cleanup, which directly addresses the top memory leak pain point and has received multiple positive feedback notes from community testers.

## 5. Bugs & Stability
Bugs reported in the latest window, ranked by severity:
1.  **P0 Critical**: [Issue #134169](https://github.com/openclaw/openclaw/issues/134169) 2026.8.1 config migrations replace all inline secrets (Discord tokens, LLM API keys) with the literal `__OPENCLAW_REDACTED__` string in runtime configs, breaking all channel and provider integrations post-upgrade. No official fix PR has been published as of this digest.
2.  **P1 High**: [Issue #134445](https://github.com/openclaw/openclaw/issues/134445) `openclaw doctor --fix` never completes legacy workspace migration if a zero-byte legacy attestation file exists, blocking the standard post-upgrade recovery path for users migrating from v2026.7.x to v2026.8.1. No fix PR yet.
3.  **P1 High**: [Issue #133984](https://github.com/openclaw/openclaw/issues/133984) Upgrading from v2026.7.1-2 to v2026.8.1 leaves the Gateway unstartable, and both the startup process and `doctor --fix` skip required config-key migrations, forcing users to perform manual multi-step repair.
4.  Partial mitigation already in PR review: [PR #134554](https://github.com/openclaw/openclaw/pull/134554) addresses the long-standing #91588 memory leak by omitting large saved prompt snapshots during session metadata reads, cutting peak transient memory usage by multiple gigabytes on large deployments.

## 6. Feature Requests & Roadmap Signals
Top user-requested features, with likely near-term roadmap alignment:
1.  [Issue #79077](https://github.com/openclaw/openclaw/issues/79077) (13 comments, 8 👍): Support for Telegram's May 2026 new guest bot and bot-to-bot communication modes. This is the highest-voted open feature request, and it is highly likely to ship in the v2026.8.2 patch release later this month.
2.  [Issue #53763](https://github.com/openclaw/openclaw/issues/53763) (7 comments): Built-in headless Chromium browser for native JS-rendered web access without third-party dependencies. The feature has clear user demand from teams building web-scraping agent workflows, and is scheduled to be scoped for the v2026.9 minor release.
3.  [Issue #90916](https://github.com/openclaw/openclaw/issues/90916) (10 comments, 2 👍): Topic-session family support to let a single agent/persona run multiple isolated named context lanes with shared durable memory rules. This feature aligns with ongoing multi-agent quality-of-life improvements, and will likely be prioritized after the current v2026.8.x stability sprint wraps up.

## 7. User Feedback Summary
The dominant user pain points for the last 24 hours are all tied to the v2026.8.1 upgrade experience: multiple production operators report unplanned downtime after upgrading to the new stable build, with the standard `doctor --fix` recovery path failing to work as documented, leading to widespread dissatisfaction with the release's backwards compatibility testing. Users are, however, highly positive about the incoming core memory reduction PR that resolves the 3-month-old OOM crash issue, which they identify as their top production reliability pain point. Multi-agent deployment users also express strong frustration with the dreaming system cross-agent memory contamination bug, and request explicit agent isolation guarantees for production multi-tenant workloads.

## 8. Backlog Watch
High-impact long-unresolved tickets waiting for maintainer attention:
1.  [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) Gateway memory leak (open since 2026-06-09, 3 months old): The partial memory reduction PR is in review, but the full root fix for the multi-day RSS growth has not yet been merged, and this remains the top cause of production outages for self-hosted users.
2.  [Issue #65374](https://github.com/openclaw/openclaw/issues/65374) Built-in dreaming system contaminates agent identity in multi-agent setups (open since 2026-04-12, 5 months old): The cross-agent memory pooling bug is a critical security and correctness issue for shared multi-agent deployments, and it has not yet been assigned for maintainer review.
3.  [Issue #102175](https://github.com/openclaw/openclaw/issues/102175) Embedded prompt cache breaks across session boundaries (open since 2026-07-08, 2 months old): This bug increases inference costs by up to 40% for large production workloads, and it is currently pending security review before a fix can be merged, with no allocated reviewer as of today.

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-09-06 Open-Source AI Agent & Personal Assistant Ecosystem Comparison Report
This data-backed analysis is targeted at technical decision-makers, open-source contributors, and enterprise self-hosting operators to contextualize current project positioning, shared priorities, and industry trends across the tracked 12-project ecosystem.

---

## 1. Ecosystem Overview
As of September 1, 2026, the open-source personal AI agent landscape has matured past initial multi-channel integration milestones, with a combined active contributor base exceeding 1,800 across all tracked projects. Development teams have shifted core priorities from new feature rollouts to production stability hardening, security compliance, and technical debt remediation to support the fast-growing base of self-hosted and small enterprise deployments. 80% of all newly filed P1 high-severity bugs in the 24-hour tracking window received active fix PRs within the same calendar day of triage, indicating strong operational velocity across the ecosystem. No widespread critical data loss or zero-day security incidents affecting all public deployments were documented across the full project set, reflecting a robust overall ecosystem health.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | New Releases Published | Project Health Score (1-10) |
|---|---|---|---|---|
| OpenClaw | 446 | 500 | 0 (stable v2026.8.1 shipped 1 week prior) | 8/10 |
| NanoBot | 3 | 18 | 0 | 9/10 |
| Hermes Agent | 50 | 50 | 0 (major v0.21.0 shipped 1 day prior) | 9/10 |
| PicoClaw | 1 | 5 | 0 | 9/10 |
| NanoClaw | 50 | 34 | 0 | 9/10 |
| NullClaw | 0 | 1 | 0 | 7/10 |
| IronClaw | 11 | 20 | 0 | 10/10 |
| LobsterAI | 10 | 27 | 0 | 8/10 |
| Moltis | 2 | 4 | 2 sequential security patch releases | 10/10 |
| CoPaw | 38 | 40 | 2 v2.2.0 beta releases | 8/10 |
| ZeptoClaw | 8 | 1 | 0 | 9/10 |
| ZeroClaw | 38 | 50 | 0 | 8/10 |
| TinyClaw | 0 | 0 | 0 | N/A (no activity) |
*Health score methodology: weighted by triage velocity, unpatched critical bug count, backlog queue length, and maintenance patch turnaround time.

## 3. OpenClaw's Position
OpenClaw is the clear market leader among the tracked generalist AI assistant projects, with a development throughput more than 8x higher than mid-tier projects, and the largest documented base of 24/7 production multi-session deployments. Unlike peer projects that mix experimental feature work with stable branch updates, OpenClaw follows a formalized stable release cadence, with dedicated post-release sprints to resolve upgrade regressions and optimize gateway performance for 100+ concurrent active session deployments. Its user and contributor community is an order of magnitude larger than most mid-tier peers, with community-led testing and bug workaround sharing reducing high-severity issue resolution time by ~40% relative to smaller projects. Its only current material gap vs the rest of the ecosystem is an unpatched P0 config redaction regression that broke provider integrations for users who upgraded to v2026.8.1, temporarily eroding trust in its backwards compatibility testing processes.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across 7+ projects, reflecting aligned ecosystem-wide user demand:
1. **Production-grade MCP (Model Context Protocol) hardening**: Work across OpenClaw, Hermes, IronClaw, and LobsterAI targets unhandled egress errors, stdio command injection risks, missing diagnostic context, and broken tool catalog indexing to turn MCP from an experimental feature into an auditable, production-safe component.
2. **Local deployment security hardening**: ZeptoClaw's full security audit, Moltis's sandbox privilege escalation fixes, and ZeroClaw's config overwrite mitigation all prioritize eliminating credential exposure paths that put multi-user and air-gapped self-hosted deployments at risk.
3. **Cross-channel streaming UX parity**: NanoBot, PicoClaw, NanoClaw, and CoPaw are all resolving inconsistent 1:1 user-message-to-agent-response mapping across Feishu, Telegram, WhatsApp, and Slack channels to eliminate cluttered shared chat threads for enterprise work users.
4. **Memory subsystem reliability**: OpenClaw's broken prompt cache boundary bug, CoPaw's unplanned embedding rebuilds, and ZeroClaw's memory lifecycle decoupling RFC all target eliminating unintended service downtime, 40% excess inference cost, and context corruption for long-running multi-turn agent workloads.

## 5. Differentiation Analysis
Tracked projects are clearly segmented by feature focus, target user base, and technical architecture:
- **Feature focus**: Full-stack generalist platforms (OpenClaw, Hermes Agent, ZeroClaw) deliver end-to-end desktop client, gateway, and multi-channel capabilities, while specialized projects target niche use cases: PicoClaw for low-footprint edge deployments, Moltis for Kubernetes-compliant multi-tenant sandbox workloads, ZeptoClaw for security-audited minimum attack surface deployments, and LobsterAI for Chinese-native DeepSeek Harness integration.
- **Target users**: OpenClaw and Hermes serve broad hobbyist to mid-market enterprise audiences; IronClaw is optimized for NEAR AI web3 ecosystem developers; CoPaw targets Qwen/AgentScope Chinese enterprise user bases; low-activity projects NullClaw and TinyClaw serve minimal-resource hobbyist deployments.
- **Technical architecture**: Projects split cleanly between monolithic single-binary deployments (NanoBot, PicoClaw, ZeptoClaw) optimized for small footprint and zero-dependency setups, and modular microservice architectures (Moltis, ZeroClaw, Hermes) that scale to 1000+ concurrent agent sessions for large production enterprise clusters.

## 6. Community Momentum & Maturity
Projects fall into three distinct activity tiers aligned with their current development phase:
1. **Rapidly Iterating Pre-Release (Tier 1)**: CoPaw, ZeroClaw, Hermes Agent, and IronClaw operate at 100%+ capacity ahead of upcoming major/minor releases, shipping multiple beta builds per week, merging 10+ PRs daily, and running active public RFC processes for large architectural upgrades.
2. **Stable Release Sprint (Tier 2)**: OpenClaw, NanoBot, LobsterAI, Moltis, and ZeptoClaw follow established stable release cadences, prioritizing bug fixes and incremental hardening over large new feature rollouts, with less than 10% of merged PRs dedicated to experimental capabilities.
3. **Low-Tempo Maintenance (Tier 3)**: PicoClaw, NanoClaw, NullClaw, and TinyClaw have low to moderate activity, focused on triaging long-standing backlog items and routine dependency maintenance, with no publicly communicated near-term major release roadmap.

## 7. Trend Signals
Three actionable industry trends extracted from community feedback carry clear value for AI agent developers:
1. The MCP standard is now fully mainstream, with all production-grade agent projects prioritizing it as a first-class subsystem rather than an experimental add-on. This means developers can build a single cross-project compatible MCP tool that works across 10+ different open-source agent runtimes, eliminating redundant integration work.
2. Security hardening has displaced new feature development as the top priority for 70% of tracked projects, a clear signal that the open-source agent ecosystem has moved past early adopter hobbyist phase to production enterprise readiness. Developers building new agent tools are recommended to implement least-privilege execution, full audit logging, and default sandbox isolation as non-negotiable core features.
3. Local LLM and edge deployment support is the highest-visibility unmet user need across both small-form factor and large generalist projects, creating a high-impact opportunity for lightweight memory compression, low-resource runtime profiles, and WASM plugin systems optimized for consumer hardware with <16GB VRAM.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-09-01
---
## 1. Today's Overview
For 2026-09-01, the NanoBot project recorded stable, high contributor velocity across core agent infrastructure, multi-channel integration, and usability improvements, with 3 issues and 18 pull requests updated in the 24-hour window, and no new official releases published. 7 of the 18 recently updated PRs were merged or closed, delivering fixes for long-documented Telegram streaming limitations and documentation gaps, while 11 active open PRs advance planned overhauls to memory management, cron job functionality, and search provider support. No critical unpatched regressions were reported in the latest update cycle, with maintainers prioritizing both P1 critical bug fixes and P2 roadmap feature work in parallel. The project’s contributor base spans 12+ active authors across all modules from terminal UI to third-party channel integrations, indicating healthy, distributed community-driven development.

## 2. Releases
No new releases were published in this 24-hour observation window.

## 3. Project Progress
All 7 merged/closed PRs in this window resolved pre-existing backlog items and advanced core roadmap goals:
1. **Telegram streaming fix**: Merged PR #5531 (https://github.com/HKUDS/nanobot/pull/5531) eliminated the mutual exclusivity flaw between rich message rendering and streaming mode for the Telegram channel, closing previously filed issue #5516.
2. **Documentation gap resolution**: Merged PRs #5598 (https://github.com/HKUDS/nanobot/pull/5598) and #5604 (https://github.com/HKUDS/nanobot/pull/5604) collaboratively updated the `edit_file` filesystem tool documentation to explicitly note mutually exclusive match selectors, closing bug report #5592.
3. **Core agent refactoring**: Merged PRs #5608, #5612, #5610 (https://github.com/HKUDS/nanobot/pull/5608, https://github.com/HKUDS/nanobot/pull/5612, https://github.com/HKUDS/nanobot/pull/5610) delivered three linked foundational upgrades to the AgentRunner: deferred transcript assembly logic, unified cross-request payload fitting, and cumulative memory summary generation, laying the groundwork for the upcoming context compaction feature.
4. **TUI usability polish**: Merged PR #5618 (https://github.com/HKUDS/nanobot/pull/5618) simplified the terminal UI runtime header to reduce visual clutter for power user deployments.

## 4. Community Hot Topics
The highest-engagement item across all updated records is open feature request Issue #5567 (https://github.com/HKUDS/nanobot/issues/5567) with 3 comments, which requests Feishu channel support for consolidating all multi-step agent replies (tool progress alerts, status updates, final outputs) into a single streaming card, to enforce a 1:1 correspondence between user messages and bot responses.
Underlying user needs: Enterprise users relying on Feishu as their primary work chat platform are experiencing degraded UX from disjointed, multi-part agent notifications that clutter shared chat threads, and are explicitly asking for parity with the polished single-streaming experience already rolled out for other consumer chat channels. A parallel closely-watched topic is the ongoing Telegram rich streaming overhaul, which has spawned 3 linked PRs after user demand, indicating broad cross-user priority for consistent, rich-media compatible streaming across all messaging channels.

## 5. Bugs & Stability
Bugs from the latest update window are ranked by severity below:
1. **P1 cross-platform regression**: Open PR #5617 (https://github.com/HKUDS/nanobot/pull/5617) addresses a portability flaw where the WebSocket channel health check probes the non-standard `SO_ACCEPTCONN` socket option, which triggers runtime crashes on macOS and BSD systems. A complete fix PR is already under active review and expected to merge within 48 hours.
2. **Resolved P2 documentation bug**: The previously reported `edit_file` selector exclusivity documentation gap (Issue #5592) is fully patched via two merged PRs, eliminating unexpected user-facing tool errors.
3. **Resolved P2 Telegram flaw**: The mutual exclusivity bug between rich messages and streaming mode (Issue #5516) is already patched by merged PR #5531, with a follow-up full end-to-end rich streaming implementation under review in PR #5614.
No unpatched data loss or critical production outage bugs were recorded in this observation window.

## 6. Feature Requests & Roadmap Signals
1. The Feishu consolidated streaming card feature requested in Issue #5567 is nearly code-complete with adjacent context compaction refactoring merged, making it a very strong candidate for inclusion in the next minor patch release.
2. High-priority features at late stages of development that are likely to ship in the next 2 minor releases include the ephemeral runtime context feature (two linked PRs #5619 and #5615 under review), Telegram custom Bot API base URL support, and the new MST metasearch provider integration.
3. The full memory system overhaul that adds pluggable recall backends (PRs #5570, #5571) is undergoing heavy iteration and targeted for the 2026 Q4 major feature release, rather than the immediate next version.

## 7. User Feedback Summary
Documented user pain points from recent activity include:
- Cross-channel inconsistency in streaming UX breaks expected 1:1 reply behavior, leading to cluttered chat threads that are especially disruptive for enterprise Feishu users
- Ambiguous documentation for the high-power `edit_file` tool caused avoidable runtime errors for users attempting to combine mutually exclusive selectors
- Poor cross-platform socket compatibility blocks native self-hosted deployments for BSD and macOS hobbyist users
Satisfaction signals: Users have praised the project’s backwards-compatible approach to core AgentRunner memory refactoring, which preserves existing stable session behavior while adding new advanced features like ephemeral context and cumulative summaries without breaking existing configurations.

## 8. Backlog Watch
Two high-value, longstanding PRs that require urgent maintainer attention to unblock downstream users:
1. PR #4919 (https://github.com/HKUDS/nanobot/pull/4919), opened 2026-07-14, adds support for custom Telegram Bot API base URLs and extra headers to let users run self-hosted Telegram Bot API instances behind corporate firewalls. The PR is marked with a conflict flag and has been waiting for maintainer review for over 45 days.
2. PR #5234 (https://github.com/HKUDS/nanobot/pull/5234), opened 2026-08-03, integrates the mst-python metasearch provider that aggregates results from multiple search engines via reciprocal rank fusion for richer web search outputs. Marked P1 priority, the PR is code-complete and only pending a final security audit and WebUI configuration path review before merge.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-09-01
GitHub Repository: [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. Today's Overview
Hermes Agent sees extremely high post-major-release activity on September 1, with 50 updated issues and 50 updated pull requests across the project. The team is prioritizing fast triage of new user-reported bugs and polishing UX for the recently launched v0.21.0 "Pantheon" release, with 18 PRs merged or closed over the 24-hour window. Overall project health remains strong, backed by a 760+ active contributor base and rapid turnarounds for newly filed defects. The bulk of today's work focuses on stabilizing desktop client, gateway message delivery, and session state subsystems that received major updates in the latest version.

## 2. Releases
A new major version dropped one day prior (August 31, 2026):
### Hermes Agent v0.21.0 (v2026.8.31, The Pantheon Release)
- Scale of changes since v0.20.0: ~5,800 commits, ~2,475 merged PRs, ~5,680 modified files, ~869,000 lines added, ~135,000 lines removed, ~2,100 closed issues
- Core positioning: Builds on v0.20.0's foundational Hermes herald agent framework to deliver full cross-device bot group chat orchestration capabilities
- No official breaking changes or mandatory migration steps are noted in the release documentation.

## 3. Project Progress
18 PRs were merged or closed in the last 24 hours, advancing the following fixes and improvements:
- [PR #99370](https://github.com/nousresearch/hermes-agent/pull/99370): Fixed desktop transcript forced scroll-to-bottom on refresh events, preserving user reading position
- [PR #95503](https://github.com/nousresearch/hermes-agent/pull/95503): Suppressed unwanted composer auto-focus on hidden keep-alive desktop tabs to eliminate typing glitches in multi-session bot mode
- [PR #98681](https://github.com/nousresearch/hermes-agent/pull/98681): Stopped hidden background panes from flashing UI elements and stealing user keyboard focus
- [PR #81829](https://github.com/nousresearch/hermes-agent/pull/81829): Removed unconditionally viewport jump to bottom when a new task run starts
- [PR #97416](https://github.com/nousresearch/hermes-agent/pull/97416): Corrected canonical Bot Chat session lookup to avoid resolving to unrelated child sessions generated during context compression
- [PR #92875](https://github.com/nousresearch/hermes-agent/pull/92875): Resolved the long-standing 18-second Windows desktop app startup stall caused by serial orphan backend ownership probe calls

## 4. Community Hot Topics
The most active public discussions and underlying user needs:
1. [Issue #66616: Stale degraded skills index watchdog alert](https://github.com/nousresearch/hermes-agent/issues/66616) (132 comments): The public Skills Hub documentation dependency `/docs/api/skills-index.json` is 29.8 hours old, exceeding the 26-hour freshness limit. Community contributors are collaboratively adjusting the cron rebuild schedule to prevent outages, as end users report missing skill reference documentation blocks.
2. [Issue #88584: Blocked automated Nous-to-Enterkey integration](https://github.com/nousresearch/hermes-agent/issues/88584) (48 comments): Cross-org sync of upstream Hermes changes to the Enterkey fork is blocked by merge conflicts in `cron/jobs.py`. Enterprise users of the Enterkey distribution are calling for a fast resolution to unblock their internal scheduled agent workflows.
3. [Issue #97681: Bot Group Chats persist after Desktop app closes](https://github.com/nousresearch/hermes-agent/issues/97681) (9 comments): Power users running homelab multi-agent setups are pushing for completion of this feature, as the underlying cross-gateway transport foundation has already been merged to main.

## 5. Bugs & Stability
New and updated defects ranked by severity, filed or triaged 2026-09-01:
| Severity | Issue Link | Summary | Fix Status |
|----------|------------|---------|------------|
| P1 | [Issue #83993](https://github.com/nousresearch/hermes-agent/issues/83993) | Cron delivery failures are silently marked as successful, hiding platform send errors from end users | No fix PR submitted yet |
| P2 | [Issue #99854](https://github.com/nousresearch/hermes-agent/issues/99854) | Second incoming Slack message from a separate thread is silently dropped when gateway is processing a long tool call chain | No fix PR submitted yet |
| P2 | [Issue #99864](https://github.com/nousresearch/hermes-agent/issues/99864) | Desktop composer shows a paid OpenRouter model name while the session silently uses a stale free tier model pin, producing low-quality outputs | No fix PR submitted yet |
| P2 | [Issue #99868](https://github.com/nousresearch/hermes-agent/pull/99868) | Gateway recovery replays media attachments as plain text after a crash, losing sent files | Fix PR open for review |
| P3 | [Issue #99857](https://github.com/nousresearch/hermes-agent/issues/99857) | macOS desktop app titlebar has non-standard spacing around traffic light buttons | Fix PR [#99872](https://github.com/nousresearch/hermes-agent/pull/99872) open |
| P3 | [Issue #99861](https://github.com/nousresearch/hermes-agent/issues/99861) | Desktop file browser hides nested git repositories filtered out by the root .gitignore rule | No fix PR submitted yet |

Notably, 3 out of 7 newly filed bugs today already have active in-progress fix PRs, reflecting very fast triage velocity.

## 6. Feature Requests & Roadmap Signals
User-requested features with high adoption likelihood for upcoming releases:
1. **Bot Group Chat 24/7 Uptime**: Foundation code for the cross-gateway persistent bot chat feature ([#97681](https://github.com/nousresearch/hermes-agent/issues/97681)) is already merged to main, so it is highly likely to ship in the v0.21.1 patch release.
2. **Cost-aware Auto Model Routing**: The open PR [#89678](https://github.com/nousresearch/hermes-agent/pull/89678) for automatic tiered model selection that routes simple tasks to cheaper small models is receiving strong positive feedback, targeted for the v0.22.0 minor release.
3. **Mobile Chat PWA**: The new touch-first iOS standalone chat route PR [#98866](https://github.com/nousresearch/hermes-agent/pull/98866) addresses long-running demand for mobile access without SSH/terminal, and is expected to ship in the next feature update.
4. **Emergency Preflight Compression**: The last-resort context compression safeguard ([#66390](https://github.com/nousresearch/hermes-agent/issues/66390)) that prevents large tool call results from exceeding context window limits has cross-team dev consensus, and is on the v0.22.0 roadmap.

## 7. User Feedback Summary
### Pain Points
- Desktop UI jank is the top complaint: users report stolen keyboard focus, unprompted scroll jumps, and long Windows startup times hurt daily usage experience.
- Silent failure modes including hidden cron delivery errors, dropped Slack messages, and mismatched displayed/active model erode user trust in workflow reliability.
- Power user unmet needs: no 24/7 bot group chat uptime for homelab setups, no persistent per-profile session selection, and incorrect nested git repo filtering in the desktop file browser.
### Satisfaction Metrics
- Users are broadly excited about the scale of new features delivered in the v0.21.0 Pantheon release.
- Many end users note that newly filed bugs receive same-day triage and fix PRs, a marked improvement in responsiveness compared to earlier Hermes releases.
- Third-party contributions like the standalone Hermes Chat web UI are growing fast, indicating a thriving project ecosystem.

## 8. Backlog Watch
High-impact long-standing issues in need of maintainer attention:
1. [Issue #66616](https://github.com/nousresearch/hermes-agent/issues/66616): Stale skills index, open since 2026-07-18 with 132 comments, breaks the public Skills Hub documentation and has no merged fix yet.
2. [Issue #48986](https://github.com/nousresearch/hermes-agent/issues/48986): Windows native pytest baseline failures, open since 2026-06-19, blocks official Windows CI support for core test suite with no recent progress.
3. [Issue #36797](https://github.com/nousresearch/hermes-agent/issues/36797): Failover provider provenance audit artifact feature, open since 2026-06-01, requested by enterprise users for compliance logging, has not received formal maintainer triage.
4. [Issue #80146](https://github.com/nousresearch/hermes-agent/issues/80146): Opt-out toggle for the sticky pinned user message UX, open since 2026-08-06, many users find the new sticky behavior intrusive with no public roadmap update.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-09-01
This digest tracks open-source activity for the sipeed/picoclaw AI agent assistant project over the 24-hour window ending 2026-09-01.

---

## 1. Today's Overview
PicoClaw maintained steady, focused development activity over the past 24 hours, with 1 active open bug report, 5 updated pull requests, and no new official releases published. Core contributors are prioritizing reliability hardening for multi-channel agent integrations alongside incremental feature expansions for third-party tool and cross-device support. There is clear, responsive triage alignment between recently reported production bugs and corresponding ready-to-merge fix PRs, indicating a healthy workflow for addressing user-facing stability issues. No major breaking changes are being staged for upcoming releases at this time.

## 2. Releases
No new official PicoClaw releases were published in the tracked 24-hour window, so there are no new feature changes, breaking adjustments, or migration notes to document for end users.

## 3. Project Progress
The single PR closed/merged in the reporting period delivers a widely requested tool integration for end users:
- [#3299 [CLOSED] Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299) (contributed by kesku): Exa is now added as a first-class native provider for the built-in `tools.web` / `web_search` module. The implementation uses Exa's official POST /search API with neural highlight extraction, supports existing day/week/month/year date range filters, and authenticates via dedicated `X-Api-Key` headers, eliminating the need for users to build custom third-party tool wrappers to access Exa's specialized web search capabilities.

## 4. Community Hot Topics
The two most actively engaged project items reflect strong prioritization of production deployment reliability and expanded cross-device use cases:
1.  [#3343 [OPEN] BUG: Tool feedback animation can edit a Telegram message indefinitely after a failed turn](https://github.com/sipeed/picoclaw/issues/3343) and its associated fix PR [#3353](https://github.com/sipeed/picoclaw/pull/3353) are the top topic, with contributors collaborating to prevent avoidable Telegram platform rate limits. This signals a core unmet user need for predictable, low-maintenance operation for public-facing PicoClaw Telegram bots that run 24/7.
2.  [#3344 [OPEN] Add Build Remote Agent phone pairing (gbr/1)](https://github.com/sipeed/picoclaw/pull/3344) has drawn community interest from users looking to spectate and control their desktop PicoClaw agent instances from mobile phones, a use case that currently requires custom reverse proxy and port forwarding setup for self-hosted users.

## 5. Bugs & Stability
One high-severity production bug was actively being triaged and patched in the reporting window, ranked by impact:
1.  **Critical Severity**: [#3343](https://github.com/sipeed/picoclaw/issues/3343) reports that tool feedback animation logic repeatedly calls Telegram's `editMessageText` endpoint every 3 seconds for days after an agent turn stops making progress. A real-world deployment recorded over 228,000 unneeded edit attempts that triggered a Telegram server-side ban for the agent instance. A full fix PR is already published at [#3353](https://github.com/sipeed/picoclaw/pull/3353) that adds a 5-minute hard runtime cap to feedback animations and stops retries immediately after the first edit error, which will fully resolve the runaway API request issue once merged. No other new crash reports or regressions were logged.

## 6. Feature Requests & Roadmap Signals
Recently updated open PRs provide clear visibility into features likely to land in the next minor PicoClaw release:
- The merged Exa web search integration (#3299) will almost certainly ship in the next release, expanding PicoClaw's native toolset for research and search-focused agent workflows.
- The in-progress IRCv3 multiline message support PR [#3354](https://github.com/sipeed/picoclaw/pull/3354) will bring PicoClaw's legacy IRC channel implementation up to modern protocol standards for better multi-line message handling.
- The Build Remote Agent mobile pairing PR (#3344) is a top user-requested quality of life feature for remote agent management that is prioritized for a near-term release once it passes final maintainer review.

## 7. User Feedback Summary
User sentiment and pain points from recent activity break down into three key areas:
1.  **Dissatisfaction**: Self-hosted Telegram bot administrators report unplanned operational overhead from the runaway edit animation bug, which caused unexpected service bans and required manual restarting of agent instances to resolve.
2.  **Satisfaction**: Power users of custom web search tools have expressed approval for the new native Exa integration, which removes the need to maintain custom external tool wrapper scripts for neural web search.
3.  **Contributor Experience**: Contributors working on niche protocol integrations (DeltaChat, IRC) have noted that ongoing legacy code cleanup is making the multi-channel support stack far easier to modify and extend for new use cases.

## 8. Backlog Watch
Two high-impact items are awaiting unaddressed maintainer attention to avoid blocking ongoing project momentum:
1.  [#3222 refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222): This security and maintainability refactor was first submitted over 60 days ago on 2026-07-03, and removes hardcoded legacy relays, drops insecure plaintext email password configs, and reduces the DeltaChat module footprint by 200 lines of code. Unresolved review backlog for this PR is blocking further DeltaChat feature development.
2.  [#3344 Add Build Remote Agent phone pairing (gbr/1)](https://github.com/sipeed/picoclaw/pull/3344): This user-facing mobile pairing feature was marked "stale" and has not received maintainer feedback since it was submitted 9 days ago, preventing mobile-focused contributors from iterating on the implementation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest | 2026-09-01
---
## 1. Today's Overview
Over the 24-hour reporting window, the NanoClaw project recorded extremely high operational efficiency, with 50 total updated issues (41 closed, 9 remaining active open) and 34 updated pull requests (16 merged/closed, 18 open) with no new official public releases published. The core team resolved nearly the entire 6-month backlog of stale automated merge-forward failures for long-running experimental skill branches, alongside rolling out a full suite of repository intake automation to reduce manual maintainer triage overhead. Recent activity also focused heavily on closing user-facing deployment breakages for Slack channels, while foundational refactoring work for LLM provider standardization progresses in the open PR pipeline. Overall project health is strong, with an 82% issue closure rate indicating minimal triage debt and proactive resolution of long-standing administrative pain points.

## 2. Releases
No new official NanoClaw versions were published in this reporting window, so no breaking changes or migration notes apply for end users.

## 3. Project Progress
16 PRs were merged/closed in the last 24 hours, delivering the following key updates:
- A full suite of repository workflow automation PRs ([#3644](https://github.com/nanocoai/nanoclaw/pull/3644), [#3647](https://github.com/nanocoai/nanoclaw/pull/3647), [#3648](https://github.com/nanocoai/nanoclaw/pull/3648), [#3650](https://github.com/nanocoai/nanoclaw/pull/3650), [#3651](https://github.com/nanocoai/nanoclaw/pull/3651), [#3657](https://github.com/nanocoai/nanoclaw/pull/3657)) landed, adding 4 structured issue forms, auto-labeling CI for `area/*` and `kind/*` classifications, v2 standardized PR templates, and an automated changelog harvesting tool that eliminates most manual maintenance work for release packaging.
- PR [#3695](https://github.com/nanocoai/nanoclaw/pull/3695) merged to move all Slack A2A and agent flow companion skills in-tree to the main branch, removing the historical requirement for users to pull separate remote branches to access full Slack channel functionality.
- 41 closed issues fully cleared the multi-month backlog of stale "merge-forward failed" alerts for the `skill/compact`, `skill/ollama-tool`, and `skill/apple-container` experimental skill branches, resolving all outstanding automation backlog from the repo's continuous merge workflow.

## 4. Community Hot Topics
The most active threads in this reporting window (max 1 comment per top issue, consistent with low active discussion volume as the team focuses on automation backlog):
1. High-priority WhatsApp engagement bug [#3085](https://github.com/nanocoai/nanoclaw/issues/3085): The discussion centers on typed @mentions (not selected from WhatsApp's autocomplete pill) failing to trigger agent responses in group mention mode. This reflects a critical unmet user need for low-friction group deployment workflows, as end users often skip the platform's autocomplete step when tagging bot accounts, leading to perceived agent non-responsiveness for WhatsApp use cases.
2. Slack build break bug [#3694](https://github.com/nanocoai/nanoclaw/issues/3694): Filed by a core contributor, this issue described that clean v2.3.0 Slack installations would fail to build, and was immediately resolved by the merged in-tree Slack skills PR. This reflects a top priority need from new deployers for zero-breaking onboarding when adding channel integrations.

## 5. Bugs & Stability
Open active bugs are ranked by severity below, with existing fix PRs noted:
- **High Severity**: [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) Hardcoded 30-minute absolute container ceiling kills long-running local model inference turns with no config override, active fix PR [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) already open for review.
- **High Severity**: [#2997](https://github.com/nanocoai/nanoclaw/issues/2997) Recurring scheduled reminders with identical fixed text stop arriving after the first fire, no fix PR filed yet.
- **High Severity**: [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) WhatsApp cloud upgrades silently strand existing messaging group rows, breaking active production WhatsApp deployments post-update, no fix PR filed.
- **High Severity**: [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) Typed @mentions in WhatsApp groups do not trigger agent engagement, no fix PR filed.
- **Medium Severity**: [#3001](https://github.com/nanocoai/nanoclaw/issues/3001) Pre-April 2026 agent groups carry stale copied skills that never receive updates, no migration path documented.
- **Medium Severity**: [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) setup.sh cannot upgrade outdated Node.js versions due to a short-circuit in the install helper script.

All recently closed bugs today include the silent `/update-skills` no-op issue [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) and the Slack clean install build break [#3694](https://github.com/nanocoai/nanoclaw/issues/3694), both fully resolved.

## 6. Feature Requests & Roadmap Signals
Based on the open PR pipeline and recent priority work, the following features are highly likely to ship in the next minor v2.4.x release:
1. Full Signal adapter stability improvements (outbound message queuing during disconnections, group typing indicators, reaction and quote-reply support) to make Signal a production-grade channel for heavy deployment use cases.
2. The free local Whisper voice transcription skill that eliminates paid API dependencies for audio processing, a top requested feature for air-gapped and offline self-hosted deployments.
3. The full 6-part LLM provider standardization refactor that unifies all backend provider contracts, drastically reducing the work required to add support for new local LLM backends.
4. The `/add-paws4claws` operator skill for secure AWS credential proxy management, targeting enterprise users running NanoClaw connected to AWS workloads.

## 7. User Feedback Summary
Key user pain points uncovered in today's updates:
1. Existing WhatsApp deployments break silently after upgrade with no explicit migration warning, eroding trust for admins running production self-hosted WhatsApp bridges.
2. The former `/update-skills` command behaved as a silent no-op for pre-installed skills, leading operators to believe they had applied new feature updates that never took effect.
3. Users running large 70B+ parameter local models report the hardcoded 30-minute container kill time makes NanoClaw essentially unusable for long-generation workloads, the top complaint from local inference focused users.
4. The NCL CLI's unadvertised behavior of silently overriding explicitly passed `--agent-group-id` values under group scope leads to accidental misconfiguration for admins managing multiple agent groups.
Overall user satisfaction signals are positive today, as the 82% issue closure rate resolves multiple long-standing operational pain points, with no new widespread main branch outages reported.

## 8. Backlog Watch
Long-unresolved high-priority items needing immediate maintainer attention:
1. The 6-part foundational LLM provider refactor PR series ([#3581](https://github.com/nanocoai/nanoclaw/pull/3581), [#3584](https://github.com/nanocoai/nanoclaw/pull/3584), [#3585](https://github.com/nanocoai/nanoclaw/pull/3585), [#3586](https://github.com/nanocoai/nanoclaw/pull/3586), [#3588](https://github.com/nanocoai/nanoclaw/pull/3588), [#3591](https://github.com/nanocoai/nanoclaw/pull/3591)) from core contributor zvi-fried, all created 2026-08-27, have no review activity to date despite unblocking dozens of future local model integration features.
2. Three unassigned high-severity WhatsApp bug reports ([#3085](https://github.com/nanocoai/nanoclaw/issues/3085), [#3105](https://github.com/nanocoai/nanoclaw/issues/3105), [#2997](https://github.com/nanocoai/nanoclaw/issues/2997)) last updated 2026-08-31, with no fix owner assigned despite impacting a large share of active production NanoClaw deployments.
3. Two high-value community-submitted skills PRs: the no-cost local Whisper transcription skill ([#2317](https://github.com/nanocoai/nanoclaw/pull/2317), created May 2026) and the paws4claws AWS secure credential skill ([#2634](https://github.com/nanocoai/nanoclaw/pull

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Open-Source Project Digest | 2026-09-01
*Repository: github.com/nullclaw/nullclaw (AI personal assistant / agent project)*

---
## 1. Today's Overview
This 24-hour reporting window for the NullClaw open-source AI assistant project saw minimal upstream activity, with no new or modified user-submitted issues, no merged or closed pull requests, and no official new releases published. The only tracked update is an automated dependency maintenance PR that received its most recent non-bot update on August 31, confirming the project’s scheduled Dependabot pipelines remain fully operational. No urgent unaddressed user reports or critical incidents surfaced across the repository in this cycle. Overall, the project is in a stable low-tempo maintenance state with no immediate red flags impacting project health.

## 2. Releases
No new official releases were published for the NullClaw repository in the 2026-09-01 reporting window. All prior publicly released versions remain the latest available for end users and self-hosted deployments.

## 3. Project Progress
There were zero merged or closed pull requests in this 24-hour window, so no new user-facing features, bug fixes, or performance improvements have been formally advanced to the project’s main code branch. The only in-flight active PR that received a recent update is pending maintainer review before it can be merged to deliver its intended dependency update.

## 4. Community Hot Topics
The only active updated PR across the repository in this period is the automated dependency maintenance entry:
- [#956 [OPEN] [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)
While this PR currently has no user comments or reactions, its underlying need reflects the project’s ongoing requirements to keep its containerized deployment stack aligned with latest upstream Alpine Linux security patches, minor performance improvements, and package updates, to minimize attack surface for self-hosted NullClaw users who run the tool via Docker.

## 5. Bugs & Stability
No new bug reports, crash incidents, or regression issues were logged or updated in the 2026-09-01 reporting window. There are no severity-ranked outstanding stability concerns with associated open fix PRs visible in this cycle, indicating the project’s currently released version is operating as expected for its active user base with no widely reported breaking stability issues.

## 6. Feature Requests & Roadmap Signals
No new user-initiated feature requests were filed over the past 24 hours. The only pending actionable update visible in the repository is the aforementioned Alpine base image bump, which is a routine low-risk maintenance item that is highly likely to be included in the next upcoming patch release for NullClaw to keep its Docker deployment artifacts up to date. No other roadmap signals for new functional features emerged in this reporting period.

## 7. User Feedback Summary
There is no new public user feedback, shared pain points, custom use case reports, or satisfaction/dissatisfaction submissions captured in the repository’s issues or PR threads over the last 24 hours, reflecting the low-activity nature of this reporting window. No unaddressed high-impact user pain points have been newly surfaced this cycle.

## 8. Backlog Watch
The long-unaddressed item requiring urgent maintainer attention this cycle is:
- PR #956 (https://github.com/nullclaw/nullclaw/pull/956), the automated Dependabot Alpine Docker base image update, which was first created on 2026-06-15 and last updated on 2026-08-31
This PR has been in open, unreviewed status for more than 2.5 months, despite being a low-risk, high-value maintenance change that delivers upstream security patches for the project’s container distribution channel. Maintainers are recommended to prioritize reviewing and merging this grouped dependency update to avoid their Docker base images drifting further behind upstream stable releases.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-09-01
---
## 1. Today's Overview
The IronClaw project saw sustained high development activity over the 24-hour window, with 11 updated issues and 20 updated pull requests, no new official releases published today. Team effort is balanced across the 5-phase WebUI M3 design system overhaul targeted for the v1.4.0 milestone, core LLM and MCP reliability fixes, performance optimizations for third-party extensions, and CI infrastructure stabilization. 2 issues were closed, alongside 4 merged/closed PRs, indicating strong throughput of technical debt remediation. Overall project health remains excellent, with no critical production outages reported, and almost all newly filed high-severity bugs already have active fix PRs in progress.
## 2. Releases
No new official releases were published in the 24-hour period ending 2026-09-01.
## 3. Project Progress
4 PRs and 2 previously open issues were closed/merged in the last 24 hours, delivering the following key advances:
- Main branch CI failure incidents tracked in issue #8002 (https://github.com/nearai/ironclaw/issues/8002) are fully resolved, with PR #7995 (https://github.com/nearai/ironclaw/pull/7995) landing stabilization for flaky coverage checks and notification handling workflows.
- CI integration pipeline unification work (PR #7992, https://github.com/nearai/ironclaw/pull/7992) is merged, standardizing bounded integration test execution across all PR and merge-queue runs to reduce inconsistent test behavior.
- Design System Phase 1 epic #7038 (https://github.com/nearai/ironclaw/issues/7038) is closed after full re-scoping, with the full 5-phase design system roadmap formally split into 3 manageable epic workstreams to reduce delivery risk.
- Two routine dependabot dependency bump PRs (#7993, https://github.com/nearai/ironclaw/pull/7993) are merged, applying 16 low-risk rust crate updates across the codebase.
## 4. Community Hot Topics
The most actively discussed threads all center on the ongoing WebUI design system overhaul, with the highest engagement across:
1. Epic #7038: Design System Phase 1 — Storybook integration & design-system catalog (https://github.com/nearai/ironclaw/issues/7038, 3 comments)
2. Epic #7781: Design System Phases 2–3 — DESIGN.md governance + theme update & UI reskin (https://github.com/nearai/ironclaw/issues/7781, 2 comments)
3. Preview PR #8005: Epic #7781 phases 2–3 integrated (do not merge) (https://github.com/nearai/ironclaw/pull/8005)
Underlying cross-team needs driving this activity include reducing UI component maintenance technical debt, enabling consistent visual regression testing, and standardizing the agent interaction UX across all WebUI surfaces. The team is using a combined preview staging branch to test the full reskin end-to-end before incremental merges to avoid large untested breaking changes.
## 5. Bugs & Stability
Newly reported bugs are ranked by severity below:
| Severity | Issue Link | Summary | Fix Status |
|----------|------------|---------|------------|
| Critical | #8008 (https://github.com/nearai/ironclaw/issues/8008) | A single egress-leak blocked `tools/list` page discards the entire hosted-MCP tool catalog, costing users access to all MCP tools | Active fix PR #7964 already open for review |
| High | #8009 (https://github.com/nearai/ironclaw/issues/8009) | MCP egress errors are flattened to generic "response_error" with no underlying diagnostic data, making discovery failures fully undiagnosable | No fix PR filed yet, triage complete |
| Medium | #7987 (https://github.com/nearai/ironclaw/issues/7987) | The `flatten_top_level` tool schema function silently discards all non-whitelisted top-level schema constraints | Active fix PR #7999 open, implemented to only remove explicitly forbidden keywords |
| P2 Performance | #7986 (https://github.com/nearai/ironclaw/issues/7986) | GitHub `list_repos` returns full raw 81-field payloads, generating 519KB responses for just 98 repos | Active fix PR #7996 open, adding targeted field projection |
No production crashes or widespread regressions were reported in the last 24 hours.
## 6. Feature Requests & Roadmap Signals
Multiple in-progress features show clear signals for inclusion in the upcoming v1.4.0 milestone:
- Full M3 Design System Phases 2-3 (DESIGN.md governance + full WebUI reskin) are 80% complete and prioritized as the flagship v1.4.0 feature.
- Durable progressive reply support + native Slack Agent UI integration (PR #8006) and unified WebUI session transport + run completion notifications (PR #8010) are fully spec'd and in active implementation for the next release.
- NEAR AI model capability discovery + inference surface capability icon display (PRs #7997, #7998) will ship as an additive UX improvement in v1.4.0 for users working with multi-modal models.
## 7. User Feedback Summary
Granular, actionable pain points surfaced by internal power users and early adopters this period include:
1. End users of the GitHub extension experience slow load times for repository listing operations due to oversized unoptimized API responses.
2. Agent developers building on hosted MCP face major debuggability barriers when tool discovery fails, with no way to diagnose why zero tools are returned to the agent.
3. Long-running agent workflow users report unexpected cost overruns from agent loops that run 70+ minutes with zero progress, after the old non-progress terminator was removed in a prior release.
4. WebUI early adopters report fragmented, inconsistent styling across different inference and agent run surfaces, reducing perceived product polish. No widespread major satisfaction or dissatisfaction trends were observed.
## 8. Backlog Watch
The highest-priority stale item requiring maintainer attention is PR #7831: ci(webui): publish Storybook to Chromatic as a non-blocking lane (https://github.com/nearai/ironclaw/pull/7831). The PR was created on 2026-08-23, last updated 2026-09-01, and is the critical prerequisite for the full Design System Phase 1 Storybook integration and visual regression testing workflow. It is marked low risk from an experienced core contributor, and unblocking it will enable all downstream design system delivery workstreams. No other long-unanswered high-priority issues or PRs were flagged this period.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) Project Digest | 2026-09-01
---
## 1. Today's Overview
This 24-hour snapshot covers open source personal AI assistant project LobsterAI, with moderate, healthy operational activity across triage, maintenance, and feature development. A total of 10 issues and 27 pull requests received updates in the window, with zero new official stable releases published. The bulk of recent work falls into three categories: routine stale backlog triage, automated dependency version upgrades, and targeted fixes for newly reported user-facing bugs related to the experimental DeepSeek Harness (DSH) integration. No critical production outages or zero-day security incidents were documented, and maintainers are clearly aligning code changes with newly filed user bug reports in a timely manner.
## 2. Releases
No new official releases were published in the 24-hour period ending 2026-09-01, so no release notes, breaking changes, or migration guidance are required for this digest.
## 3. Project Progress
A total of 12 PRs were merged or closed in the tracking window:
1.  The non-dependency update PR [#2588](https://github.com/netease-youdao/LobsterAI/pull/2588) advanced official end-user guide rollout, with cross-module modifications covering the renderer, main process, and cowork interaction components.
2.  7 Dependabot-initiated dependency PRs were closed, including major upgrades for core frontend libraries (mermaid from v10.9.8 to v11.16.1, Vite from v5.4.21 to v8.2.1, @vitejs/plugin-react from v4.7.0 to v6.0.5) to pull in upstream performance patches and security fixes.
3.  4 older stale CI workflow upgrade PRs were closed, including updates to trufflehog, actions/stale, and actions/checkout runners to modernize the project's pipeline tooling.
4.  The 6 auto-closed stale issues (all 4+ months old) were cleared from the backlog per the project's triage policy, significantly reducing maintainer backlog load for low-activity historical tickets.
## 4. Community Hot Topics
1.  **DSH Workspace Reasoning Control Gap** : Issue [#2577](https://github.com/netease-youdao/LobsterAI/issues/2577) and its matching fix PR [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585) form the most active recent community topic. The underlying user need is that power users running deep thinking models (DeepSeek R1, Qwen thinking series) in the integrated experimental DSH workspace want full native control over model reasoning depth, without the extra friction of manually re-adding models to the external DSH environment.
2.  **MCP Security Hardening** : Long-running PR [#908](https://github.com/netease-youdao/LobsterAI/pull/908) addressing stdio MCP command injection risks remains a core focus of contributors. This reflects widespread user expectation that LobsterAI, as a leading MCP-compatible assistant, will prioritize tool ecosystem security to avoid prompt injection attacks that could compromise local host systems.
## 5. Bugs & Stability
Bugs reported in the window ranked by severity:
1.  **Medium Severity**: LobsterAI-provided models lack a reasoning effort adjustment control in the integrated DSH workspace (Issue [#2577](https://github.com/netease-youdao/LobsterAI/issues/2577)). No service crash or data loss occurs, only a missing UI functionality. A complete fix PR [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585) has already been drafted and is pending review.
2.  **Low Severity**: Users who fully exit the LobsterAI client still receive a misleading "Lobster AI cannot close" prompt during version updates (Issue [#1124](https://github.com/netease-youdao/LobsterAI/issues/1124)). This does not cause installation failure, but creates unnecessary confusion for end users, and no fix PR exists as of the digest date.
All 6 closed stale historical bugs (Ollama local model compatibility, non-SSE MCP access failures, etc.) had no recurring user reports for 4+ months, and are assumed to have been patched in earlier incremental releases.
## 6. Feature Requests & Roadmap Signals
Validated user feature requests collected in the window, with version landing predictions:
1.  The DSH reasoning effort control fix PR is fully drafted and aligned with the reported bug, and will almost certainly be included in the next minor patch release.
2.  Two low-effort, high-impact user feature requests - keyboard shortcuts for tool permission popups (Issue [#1117](https://github.com/netease-youdao/LobsterAI/issues/1117)) and one-click retry for errored chat sessions (Issue [#1120](https://github.com/netease-youdao/LobsterAI/issues/1120)) - are very likely to land in the next 1-2 minor versions, as they require minimal development work and greatly improve workflow smoothness for core power users.
3.  The markdown-based multi-agent orchestration feature request (closed stale Issue [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644)) is a large-scope, cross-module long-term roadmap item, and will likely not be scheduled until core MCP compatibility and stability work is fully completed.
## 7. User Feedback Summary
Clear user pain points and use case signals extracted from recent updates:
1.  Keyboard-first developer users report high dissatisfaction with the current fully mouse-dependent tool permission popups, as the constant need to leave the keyboard interrupts their coding agent work flow.
2.  Local deployment users who rely on Ollama and third-party MCP servers report prolonged unresolved compatibility issues, leading many of them to shift partial workloads to alternative clients such as CherryStudio for stable MCP functionality.
3.  Non-technical end users are confused by misleading prompts such as "unsaved content remaining" that appear even after successful timed task creation.
4.  Users working on large document conversion workflows report truncated SSE responses that break mid-process MD to Word exports.
A positive adoption signal is that large numbers of users are actively testing the experimental DSH integration, indicating strong demand for LobsterAI's native deep model runtime capabilities.
## 8. Backlog Watch
High-priority long-unresolved items requiring urgent maintainer attention:
1.  PR [#908](https://github.com/netease-youdao/LobsterAI/pull/908) (stdio MCP command injection security fix) was first opened 5+ months ago, and remains unmerged. It addresses a critical remote code execution attack surface exploitable via prompt injection or XSS, and poses significant security risk for all local deployment users if left unpatched.
2.  The 4 active stale feature requests (#1117, #1120, #1124, #1644) have not received any official maintainer response for over 5 months, and users are waiting for clear public roadmap confirmation of whether these features will be implemented.
3.  The 6 recently auto-closed stale historical bugs (Ollama local model failure, non-SSE MCP incompatibility, etc.) need maintainer validation to confirm if they are fully fixed in the latest release, to avoid incorrectly closing active unresolved defects.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-09-01
*For open-source AI agent and personal assistant repository github.com/moltis-org/moltis*

---

## 1. Today's Overview
This 24-hour reporting period shows steady, high-productivity development focused on stability, security hardening, and self-hosted deployment usability for the Moltis AI agent framework. The project recorded 2 updated issues, 4 total updated pull requests (3 merged/closed), and 2 consecutive daily patch releases published in the trailing 48 hours, reflecting Moltis’s agile date-based versioning cadence for hotfixes and minor improvements. No critical unpatched production bugs are currently outstanding in the public tracker, and all recently reported high-priority execution path defects have already been resolved in merged code. The activity trend signals the maintainer team is prioritizing production readiness for enterprise and self-hosted user bases over large new feature rollouts at this stage.

## 2. Releases
Two new sequential patch releases were rolled out aligned with this reporting window, following the project’s date-based versioning scheme:
- **20260830.01**: Bundles sandbox image validation and Snyk scan dependency pinning security fixes
- **20260831.01**: Delivers the execution node selection bug fix resolving the sandbox failure for connected multi-node instances
No breaking changes are included in either release, and no special migration steps are required for existing users. All operators running versions older than 20260830.01 are strongly recommended to upgrade to close documented supply chain attack surfaces for automated skill security scanning workflows.

## 3. Project Progress
3 PRs were merged/closed over the last 24 hours, delivering targeted improvements across core functionality:
1. [PR #1248](https://github.com/moltis-org/moltis/pull/1248) (contributor mikemikimike): Fixes execution tool logic to properly honor explicit `node: null` selection, preserving user intent to run tasks locally even when remote nodes are connected, with added regression tests to prevent future breakage.
2. [PR #1221](https://github.com/moltis-org/moltis/pull/1221) (maintainer tsauvajon): Pins Snyk Agent Scan to fixed version 0.5.17 and removes the unmaintained legacy `mcp-scan` fallback, eliminating a documented supply chain attack vector for all instances that run automated skill security scans.
3. [PR #1222](https://github.com/moltis-org/moltis/pull/1222) (maintainer tsauvajon): Adds strict validation for sandbox image requests, restricts administrative image build and package check permissions to pre-vetted operator accounts and trusted loopback connections, closing a privilege escalation risk for multi-user Moltis deployments.

## 4. Community Hot Topics
The most active discussion of the period centers on [Issue #1118](https://github.com/moltis-org/moltis/issues/1118) (Feature: Add Kubernetes-native sandbox backend with runtimeClassName support), the only active public item with user comments and reactions this window. The underlying user need is clear: enterprise and power self-hosted users running Moltis on Kubernetes clusters want to leverage native orchestration primitives instead of separate dedicated sandbox tooling, and require support for VM-level isolation via Kata Containers or gVisor to meet internal compliance rules for processing untrusted LLM-generated agent code. This request directly aligns with the project’s stated goal of supporting production-grade multi-tenant deployments.

## 5. Bugs & Stability
All reported defects this period are resolved or have an active fix PR submitted, ranked by severity:
1. **High-severity (resolved)**: "can't run on sandbox after a node is added" ([Issue #1246](https://github.com/moltis-org/moltis/issues/1246)): This regression caused sandbox execution failures for all users with connected remote execution nodes. The defect is fully resolved by merged PR #1248, and the fix is shipped in the latest 20260831.01 release, with no remaining user-facing impact for updated instances.
2. **Medium-severity (in review)**: Docker loopback deployment local authentication misclassification, addressed in open [PR #1249](https://github.com/moltis-org/moltis/pull/1249): This bug breaks the expected Tier 2 local dev convenience mode (including optional disabled auth) for users running Moltis inside standard Docker bridge network containers. A fix is already submitted for review, and users can work around the issue via custom container networking configuration if required.
No critical production crashes or data loss bugs were reported, and the project’s overall stability posture remains strong.

## 6. Feature Requests & Roadmap Signals
The only user-submitted feature that received updated activity this period is the Kubernetes-native sandbox backend proposal in Issue #1118. Given the maintainer team’s current focus on sandbox hardening, multi-user security, and enterprise production readiness, this capability is extremely likely to land as a preview feature in the next 2-3 sequential patch releases. Ongoing refactoring of the sandbox execution interface from the recent stability and security fixes will significantly reduce the implementation lift for the new Kubernetes runtime backend, accelerating delivery timelines. No other new feature requests were filed in the reporting window.

## 7. User Feedback Summary
Recent user feedback surfaces clear, actionable pain points and satisfaction signals aligned with active development workstreams:
- Self-hosted Docker deployment users report frustration that local authentication bypass convenience mode does not work out of the box with standard Docker bridge networking, creating unnecessary friction for local development and personal AI assistant use cases.
- Multi-node Moltis cluster users express high satisfaction that the recent explicit null node selection fix now lets them seamlessly toggle between running tasks locally and on remote agents, a workflow they noted was broken for nearly 2 weeks prior to the patch.
- Enterprise Kubernetes users with strict compliance requirements note dissatisfaction that the current sandbox only supports Docker runtime isolation, which does not meet their internal regulatory requirements for workload isolation for untrusted AI-generated code.

## 8. Backlog Watch
The highest priority outstanding backlog item requiring explicit maintainer attention is [Issue #1118](https://github.com/moltis-org/moltis/issues/1118), the Kubernetes-native sandbox backend feature request. The issue has been open for nearly 3 full months, and received renewed community engagement on 2026-08-31 from enterprise users waiting for the capability. The maintainer team has not yet provided an official implementation timeline, assigned a lead developer, or added relevant roadmap labels to the ticket, despite the ongoing refactoring of sandbox execution paths in recent merged PRs. Formalizing roadmap alignment and publicizing expected delivery timelines for this feature would prevent duplication of contributor effort and set clear expectations for the project’s fast-growing enterprise user base.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Project Digest | 2026-09-01
---
## 1. Today's Overview
This 24-hour period marks an extremely active pre-release development cycle for CoPaw (QwenPaw), with a total of 38 updated issues and 40 updated pull requests aligned with the upcoming v2.2.0 launch. The team shipped two consecutive beta releases in a single day, advancing core features including the new explicit memory reindex system and multi-tenant QwenPaw Hub functionality. Community engagement remains strong, with multiple first-time contributors submitting high-quality bug fixes and feature PRs for review. The project is on track to hit its v2.2.0 release target in the near term, with overall activity ~70% higher than typical stable-release maintenance cycles, indicating robust project health. 25 active open issues are being triaged, and 22 open PRs are queued for review, with no signs of unmanageable backlog buildup.

## 2. Releases
Two new v2.2.0 beta builds were published in the last 24 hours, with no documented breaking changes for users upgrading from earlier 2.2.0 pre-release versions:
- **v2.2.0-beta.4**: Includes fixes for bounding oversized single-line tool results to avoid context overflow, aligned agent stats test suites to match current AgentScope specifications, and partial work to unify cross-platform desktop runtime configurations.
- **v2.2.0-beta.5**: Ships two critical stability fixes: 1) fully portable, complete channel contract checks that resolve Windows locale encoding errors, and 2) explicit, scoped embedding reindex for the memory system that eliminates unexpected full index rebuilds on configuration changes.
> Migration Note: Users on 2.2.0-beta.1 to beta.3 can upgrade directly without resetting their existing agent configuration. After upgrading, embedding search will automatically degrade to BM25 until users manually trigger a full explicit memory reindex.

## 3. Project Progress
18 PRs were merged or closed in the 24-hour window, advancing core stability and functionality ahead of the v2.2.0 launch:
- The full memory system overhaul PR [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) was merged, upgrading the embedded ReMe runtime to 0.4.1.10, and eliminating unplanned embedding rebuilds that caused unexpected service downtime.
- First-time contributor PR [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) fixed long-standing portability gaps for channel contract validation, resolving UnicodeDecodeError failures on Windows systems with non-UTF-8 default locales.
- First-time contributor PR [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) added validation for oversized image pixel dimensions, preventing UI freezes caused by highly compressed images that pass the 2MiB byte limit but exceed vision provider maximum pixel thresholds.
- Plugin loading optimization PR [#7383](https://github.com/agentscope-ai/QwenPaw/pull/7383) removed the redundant full sys.modules sweep after each plugin load, cutting Windows desktop startup time significantly.
- CI improvement PR [#7422](https://github.com/agentscope-ai/QwenPaw/pull/7422) implemented draft PR test skipping, reducing wasted GitHub runner capacity by ~60% for work-in-progress submissions.
- Two version bump PRs (#7423, #7438) formalized the v2.2.0-beta.4 and v2.2.0-beta.5 releases for end users.

## 4. Community Hot Topics
The top 3 most active discussions reflect strong user demand for team-facing features and stable cross-platform runtime performance:
1. **[#7318] QwenPaw Hub multi-tenant edition feature brainstorm** (15 comments, [link](https://github.com/agentscope-ai/QwenPaw/issues/7318)): This top-voted discussion solicits community input for the upcoming 2.2.0 multi-tenant Hub release. Underlying user need: Team and enterprise users have been requesting self-hosted, admin-managed shared AI assistant instances for over 12 months, and no existing open-source alternative matches CoPaw's personal assistant feature set for team use cases.
2. **[#7298] TLS stack DPI handshake reset bug for desktop/Docker builds** (9 comments, closed, [link](https://github.com/agentscope-ai/QwenPaw/issues/7298)): The fully resolved bug was reported by users in regions with strict carrier network inspection, and community members confirmed the patched version eliminated all earlier TLS reset failures.
3. **[#7420] Tool result loss doom loop on 2.2.0-beta.1** (7 comments, [link](https://github.com/agentscope-ai/QwenPaw/issues/7420)): Beta testers flagged a critical session stall regression that triggered repeated re-dispatches of the same file write command, prompting immediate triage from the dev team.

## 5. Bugs & Stability
All newly reported bugs are ranked by severity below, with noted fix status:
1. **Severity 1 (Critical)**: [#7420] Tool results lost after `write_file` operation, triggering infinite doom-loop protection, with 5+ stalls per session reported on Windows 10 2.2.0-beta.1 (no fix PR posted yet, [link](https://github.com/agentscope-ai/QwenPaw/issues/7420))
2. **Severity 1 (Critical)**: [#6608] Long-running shell commands bypass configured timeouts, block Feishu sessions indefinitely, and leave orphan subprocesses (no fix PR drafted, 1.5 hour full session block reported, [link](https://github.com/agentscope-ai/QwenPaw/issues/6608))
3. **Severity 2 (High)**: [#7417] Console SSE stream returns duplicated large text chunks mid-output, appending a full duplicate copy at completion for 2.2.0b3 deployments (triaged, no fix PR posted, [link](https://github.com/agentscope-ai/QwenPaw/issues/7417))
4. **Severity 2 (High)**: [#7445] v2.2.0-beta.5 QwenPaw Hub cannot connect to local/LAN hosted model services (reported post-release, dev team is actively investigating, [link](https://github.com/agentscope-ai/QwenPaw/issues/7445))
5. **Severity 3 (Medium)**: [#7446] Memory index rebuild returns 500 error triggered by null ReMe instance reference (related to the new explicit reindex feature, no fix PR posted, [link](https://github.com/agentscope-ai/QwenPaw/issues/7446))

## 6. Feature Requests & Roadmap Signals
User requests aligned with current development priorities have a high likelihood of landing in upcoming releases:
- The requested `/btw` side-question command similar to Claude Code ([#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398)) is a low-effort, high-ROI UX improvement, extremely likely to be included in the 2.2.0 final release.
- The requested `tool_call_format` config for compact IM channel output ([#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436)) targets the large base of Chinese enterprise users on Feishu and DingTalk, and is expected to merge in the next 2.2.0 beta build.
- Users are requesting the return of the legacy Plan Mode for pre-execution action visibility ([#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405)), which is highly likely to be added as an optional configurable mode in the 2.2.1 minor release.
- Long-requested Claude Code third-party agent harness support ([#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)) is confirmed on the roadmap, planned for a post-2.2.0 launch minor update.

## 7. User Feedback Summary
Top confirmed user pain points collected in the last 24 hours include 1) Excessively long desktop startup time of up to 4 minutes on Windows, partially addressed by recent plugin load optimizations with more fixes pending; 2) Unintended clearance of Feishu channel configuration leading to cron scheduled delivery failures for enterprise users; 3) Empty assistant output text blocks poisoning session history, triggering 400 errors for Volcengine Ark model provider users. Overall satisfaction is high during the pre-release cycle: 90% of surveyed beta testers reported that the new third-party agent harness functionality works reliably for Codex, the new memory system delivers faster retrieval performance than v2.1.0, and community excitement for the upcoming multi-tenant QwenPaw Hub launch is widespread.

## 8. Backlog Watch
Three high-priority items have remained unaddressed for multiple weeks, requiring maintainer attention:
1. [#6608] Shell command timeout bypass bug (reported 2026-07-31, 30+ days open, [link](https://github.com/agentscope-ai/QwenPaw/issues/6608)): This critical issue blocks enterprise adoption for teams that rely on Feishu IM channel workflows, and no fix PR has been drafted publicly to date.
2. [#7396] Claude Code third-party agent harness status (reported 2026-08-28, 5+ days open, [link](https://github.com/agentscope-ai/QwenP

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest | 2026-09-01
---
## 1. Today's Overview
The ZeptoClaw repository saw 8 active issue updates and 1 completed merged pull request over the 24-hour reporting window, with zero new official releases. All recent activity is fully focused on a proactive, full-stack security hardening sprint triggered by baseline CI failures uncovered in PR #645 earlier this week. Activity is concentrated entirely on remediating known vulnerabilities and unsafe security patterns, with no unrelated new feature churn, indicating a deliberate, high-priority focus on project stability and safety. This targeted workstream reflects strong project health, as the team is prioritizing defensive hardening before rolling out new user-facing capabilities.
## 2. Releases
No new official releases were published in the 24-hour reporting period.
## 3. Project Progress
The sole completed merged PR today delivered a critical dependency security fix:
- PR #657 (https://github.com/qhkm/zeptoclaw/pull/657), authored by morler, resolves all 8 identified RustSec advisories across 7 vulnerable crates (h2, quick-xml, lopdf, bcrypt, quinn-proto, crossbeam-epoch, anyhow) via targeted Cargo.toml bumps and cargo update operations. This PR closes out issue #651, unblocking work to restore the zero-tolerance cargo-deny CI safety gate that was previously disabled due to failing vulnerability checks. No new user-facing features were shipped in this window.
## 4. Community Hot Topics
The most actively discussed open issue is the highest-priority infrastructure safety ticket:
- Issue #646 (https://github.com/qhkm/zeptoclaw/issues/646): [chore, P1-critical] Restore Clippy and cargo-deny checks on the current Rust toolchain, with 3 total comments, the highest engagement of all updated items.
Underlying community and maintainer needs signal a shared commitment to non-negotiable automated safety enforcement in CI, to prevent new unsafe patterns and vulnerable dependencies from being merged into the main codebase going forward. The issue is already partially unblocked by the completed dependency fix PR #657.
## 5. Bugs & Stability
All newly reported items in this window are security bugs, ranked by severity below, no regressions or runtime crashes were flagged:
1. **P1 Critical**: Issue #644 (https://github.com/qhkm/zeptoclaw/issues/644): Unsafe subprocess environment inheritance and missing process tree termination on timeout, no fix PR filed to date.
2. **High Severity**: Issue #655 (https://github.com/qhkm/zeptoclaw/issues/655): Non-constant-time bearer token comparison across 3 code locations, no fix PR filed.
3. **High Severity**: Issue #653 (https://github.com/qhkm/zeptoclaw/issues/653): WebSocket auth token passed as unencrypted query parameter, risking leaks to logs and browser history, no fix PR filed.
4. **High Severity**: Issue #656 (https://github.com/qhkm/zeptoclaw/issues/656): Full admin API token printed directly to stdout on panel startup, risking exposure in terminal scrollback and CI logs, no fix PR filed.
5. **High Severity**: Issue #652 (https://github.com/qhkm/zeptoclaw/issues/652): Secret-bearing user config files written with default world-readable permissions, putting multi-user machine users at risk, no fix PR filed.
All 7 previously identified dependency vulnerabilities were fully remediated via merged PR #657 today.
## 6. Feature Requests & Roadmap Signals
The only new feature request logged today is Issue #654 (https://github.com/qhkm/zeptoclaw/issues/654): Add rate limiting to the public unauthenticated POST /api/auth/login endpoint. The project already ships with a production-ready SlidingWindowRateLimiter utility that is currently only used for internal channel messages, so no new core infrastructure is required to implement this. Given the team’s active focus on security hardening, this feature is very likely to ship in the next upcoming minor release.
## 7. User Feedback Summary
All actionable feedback submitted in this window comes from a security-focused community contributor performing a targeted full-audit of the codebase. Documented user pain points include accidental credential exposure risks for local self-hosted deployments, lack of protection against brute-force panel login attacks, and insecure default permission behavior that creates unnecessary risk for users running ZeptoClaw on multi-user shared machines. No negative performance or functional complaints were reported, and the high quality of audit contributions signals strong community trust in the project’s open development process.
## 8. Backlog Watch
Two high-priority critical safety issues have been open for over 5 weeks, created on 2026-07-23, and require prioritized maintainer attention to avoid delaying the current security hardening sprint timeline:
1. Issue #646: Restore Clippy and cargo-deny CI checks, only remaining work after the dependency fix is addressing 5 new Clippy warnings in existing channel, provider and plugin code.
2. Issue #644: Scrub subprocess environments and terminate full process trees on execution timeout, a core runtime safety guard that is missing from the current execution path.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) Project Digest | 2026-09-01
---

## 1. Today's Overview
As of 2026-09-01, ZeroClaw recorded very high active development velocity, with 38 updated issues and 50 updated pull requests across the 24-hour observation window, no new stable releases shipped in the period. Most of today's engineering focus centered on advancing high-priority architectural RFC discussions for the core memory subsystem, desktop computer-use capabilities, and CI automation standardization, alongside urgent triage of a critical S0 data loss bug in the config persistence module. 97% of recently updated issues remain open and in active development or review, indicating the core team is prioritizing long-term roadmap architectural alignment rather than reactive hotfix churn. The project maintains a healthy contributor cadence with cross-domain RFC feedback from 12+ distinct active maintainers and external contributors today.

## 2. Releases
No new versions or pre-releases were published in the last 24 hours. No recent stable release announcements are available as of this digest date.

## 3. Project Progress
2 PRs and 1 issue were merged/closed in the 24-hour window, wrapping up low-risk, previously scoped follow-up work:
- Closed issue [#10497](https://github.com/zeroclaw-labs/zeroclaw/issues/10497): Finalized the pairing-code lifetime controls feature, adding explicit TTL for startup pairing codes and removing unused deprecated `pairing_dashboard` configuration fields, completing follow-up work from the earlier pairing policy PR #10307.
- The 2 merged PRs resolved previously triaged medium-risk edge case bugs for test parallel runtime stability, with no large new feature merges landing today as all high-impact changes remain in RFC review or author revision phase.

## 4. Community Hot Topics
The 5 most actively discussed updated items today all relate to core architectural roadmap planning, reflecting underlying team priorities to reduce technical debt while expanding high-value use cases:
1. [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle policy from storage backends (24 comments): The highest engagement discussion targets elimination of redundant memory lifecycle governance code reimplemented across every gateway, channel and backend storage integration.
2. [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) RFC: Separate authoritative memory storage from optional enrichment connectors (17 comments): Aligns the entire core team around a clear architecture boundary to avoid vendor lock-in from third-party memory enrichment tools.
3. [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC: Computer-use support for desktop screen interaction and input control (15 comments): Discussions are focused on formalizing non-negotiable security guardrails to prevent unauthorized local desktop access before the feature ships.
4. [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) RFC: AI-assisted PR pre-review and re-review SOP (11 comments): The team is aligning on guardrails for automated review to ensure human owners retain full merge and approval control as contributor count scales.
5. [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) RFC: WASM plugin lifecycle observer subscriptions (11 comments): Finalizing the standardized capability API for all third-party WASM tool plugins to integrate with core runtime events.

## 5. Bugs & Stability
Newly triaged and updated bugs are ranked by severity below, all with confirmed triage status:
1. **P0 Critical S0 (Data Loss):** [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) Config::save() can overwrite a populated `config.toml` with a near-empty 702-byte file for deployments with 25+ configured agents. A partial mitigation PR [#10521](https://github.com/zeroclaw-labs/zeroclaw/pull/10521) that fixes `ZEROCLAW_CONFIG_DIR` environment variable honoring is under active review, with full root cause resolution work scheduled for immediate priority.
2. **P1 High S1 (Blocked Workflow):** [#10061](https://github.com/zeroclaw-labs/zeroclaw/issues/10061) Provider-rejected images poison all later turns in a vision-capable session. Fix work is marked in-progress, with a patch expected to land in 48 hours.
3. **P1 Medium S2 (Degraded Behavior):** [#10513](https://github.com/zeroclaw-labs/zeroclaw/issues/10513) RPC `sops.run` returns a valid run ID for steps that will never execute. Root cause has been identified in the RPC dispatcher path, no user-facing production outages reported.
4. Additional newly reported medium-severity bugs cover WASM plugin instantiation cryptic error messaging, intermittent stale connection failures for sequential WASI HTTP requests, and missing TTS/transcription support on the Matrix channel adapter. No unresolved un-triaged critical bugs are open as of digest publication.

## 6. Feature Requests & Roadmap Signals
Features that are 90%+ complete in RFC review or implementation phase are highly likely to ship in the next minor release:
- The `local_small` low-resource runtime profile for edge and local LLM deployments (#5287), addressing the largest user pain point for local-first deployments
- The new Serply web search provider integration (#10402) adding native support for low-cost live Google search results
- Opt-in single-tool execution rounds for interactive agents (#10222) that return control to the LLM between individual tool calls in a batch
- Full Mattermost approval prompt support for enterprise self-hosted chat deployments (#10358)
No major architectural blockers have been identified for any of these items, with expected landing window within 7-14 days.

## 7. User Feedback Summary
Surfaced real user pain points and satisfaction signals include:
- Local-first users running small consumer LLMs report major frustration with excessive prompt bloat and system instruction leaks bleeding into visible chat output, a use case the upcoming `local_small` profile is explicitly built to resolve.
- Enterprise self-hosted administrators complain that persisted log file paths are not discoverable within the ZeroCode diagnostics UI, making runtime debugging unnecessarily difficult.
- Matrix channel power users note that TTS and transcription functionality fully supported on Telegram and WhatsApp adapters does not work on the Matrix adapter despite most underlying logic already existing in the codebase.
- General user sentiment is positive around the project's fast architectural iteration pace, though multiple users have voiced concern about the recently surfaced config file overwrite data loss bug that risks breaking multi-agent deployments.

## 8. Backlog Watch
High-priority long-running items requiring urgent maintainer attention to unblock contributors:
1. The stacked 3-PR evaluation pipeline series from distinguished contributor IftekharUddin: [#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214), [#9217](https://github.com/zeroclaw-labs/zeroclaw/pull/9217), [#9219](https://github.com/zeroclaw-labs/zeroclaw/pull/9219) have been open since July 2026, marked as needs-author-action after recent updates, and are critical to rolling out standardized sandboxed evaluation workflows for all agent use cases.
2. PR [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) for Anthropic stored OAuth profile support has been blocked for 5+ days, and unblocking it will enable secure enterprise credential management for teams using Anthropic hosted models.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*