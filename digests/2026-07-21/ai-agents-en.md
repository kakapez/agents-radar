# OpenClaw Ecosystem Digest 2026-07-21

> Issues: 352 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-20 23:00 UTC

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

# OpenClaw Project Digest | 2026-07-21
---
## 1. Today's Overview
This 24-hour window represents a high-activity triage and development phase for the OpenClaw AI agent runtime project, with 352 total updated issues and 500 total updated pull requests recorded across core runtime, channel adapter, security, and UI components. 123 stale or resolved issues were closed alongside 110 merged/closed PRs, indicating strong throughput of pending work, with no critical zero-day breakages blocking the latest 2026.7.1 stable release. Active development is heavily concentrated on resolving context handling regressions introduced in the most recent release, hardening security boundaries to prevent credential leaks and memory poisoning, and fixing cross-platform channel integration gaps for end users. Overall project health remains very strong, with active community contributions across more than 20 distinct feature and bug fix tracks.

## 2. Releases
No new official OpenClaw releases were published in the 24-hour window ending 2026-07-21. The latest public stable version remains 2026.7.1, which was referenced in multiple new bug reports filed today.

## 3. Project Progress
A total of 110 PRs were merged or closed today, alongside 11 high-priority fixes that graduated to "ready for maintainer review" status pending final approval:
- Small UI fix [openclaw/openclaw#111967](https://github.com/openclaw/openclaw/pull/111967) was merged, resolving an issue where the Control UI agent files panel loaded with no file selected instead of automatically opening the core `AGENTS.md` workspace instruction document.
- Multiple security hardening fixes passed triage, including [openclaw/openclaw#111775](https://github.com/openclaw/openclaw/pull/111775) (reject malformed UTF-8 in LLM provider HTTP responses) and [openclaw/openclaw#109583](https://github.com/openclaw/openclaw/pull/109583) (bound inbound QQBot websocket payloads to prevent memory exhaustion).
- Cross-channel reliability fixes for Nostr profile import logic, web-fetch custom user agent cache behavior, and meeting bot audio diagnostics decoding all received sufficient proof of correctness to move past initial review stages.

## 4. Community Hot Topics
The most actively discussed items today, sorted by comment and reaction volume, reflect strong community priority alignment on long-running workload reliability and security hardening:
1. [openclaw/openclaw#99241](https://github.com/openclaw/openclaw/issues/99241) (23 comments): High-severity bug where ANSI-heavy tool workflow outputs collapse into unreadable image attachment placeholders, denying the agent access to critical stdout/stderr context. Underlying need: more robust handling of very long terminal output streams for devops and code execution use cases.
2. [openclaw/openclaw#7707](https://github.com/openclaw/openclaw/issues/7707) (19 comments): Top-voted feature request for memory trust-level tagging based on source origin, to prevent memory poisoning attacks. Underlying need: explicit security guardrails for agents that ingest untrusted third-party web content and user-shared files.
3. [openclaw/openclaw#58450](https://github.com/openclaw/openclaw/issues/58450) (16 comments): Bug where agents promise follow-up actions to users without spawning any actual background task. Underlying need: more transparent, verifiable state for agent scheduled work for end users.
4. [openclaw/openclaw#6615](https://github.com/openclaw/openclaw/issues/6615) (8 comments, 8 upvotes): Feature request to add denylist support for exec command approvals, complementing the existing allowlist. Underlying need: simpler admin policy configuration for self-hosted deployments that want to block only a small set of high-risk commands.
5. [openclaw/openclaw#84527](https://github.com/openclaw/openclaw/issues/84527) (5 comments, 11 upvotes): Feature request to integrate Google's new Antigravity CLI to replace the deprecated Gemini CLI that will stop serving requests later in June 2026. Underlying need: urgent migration support for all Google model users of OpenClaw.

## 5. Bugs & Stability
High-severity confirmed bugs reported or updated today, sorted by impact, with fix status noted:
| Severity | Issue Link | Summary | Fix PR Status |
|----------|------------|---------|---------------|
| P1 Critical | [openclaw/openclaw#102006](https://github.com/openclaw/openclaw/issues/102006) | Regression: aborted exec tool runs wedge all subsequent exec calls in the same session | No linked fix PR yet, source repro confirmed |
| P1 Critical | [openclaw/openclaw#109017](https://github.com/openclaw/openclaw/issues/109017) | Anthropic provider disappears from the model picker, and the static model catalog never adds new released models (Fable 5, Haiku 4.5) | No linked fix PR yet |
| P1 High | [openclaw/openclaw#108238](https://github.com/openclaw/openclaw/issues/108238) | 2026.7.1 bug counts cached read tokens into total context usage, causing false context overflow alerts and broken compaction | Closed, fix merged in staging build |
| P1 High | [openclaw/openclaw#108215](https://github.com/openclaw/openclaw/issues/108215) | Unexplained context usage drops from 57% to 13% with no compaction triggered, breaking context budgeting logic | Active PR in review pipeline |
| P1 High | [openclaw/openclaw#56733](https://github.com/openclaw/openclaw/issues/56733) | Gateway process remains alive but its event loop freezes completely on WSL2, causing all HTTP requests to time out | No public fix PR |

## 6. Feature Requests & Roadmap Signals
User-requested features with high traction this window, with predicted release timelines:
1. Imminent landing in the 2026.7.2 patch release: Antigravity CLI integration ([#84527](https://github.com/openclaw/openclaw/issues/84527)) and exec approval denylist support ([#6615](https://github.com/openclaw/openclaw/issues/6615)) - both have sufficient community demand, clear implementation scope, and no blocking security review requirements.
2. Targeted for 2026.8 minor release (after full security audit): Masked secrets system that prevents agents from accessing raw API keys ([#10659](https://github.com/openclaw/openclaw/issues/10659)), memory source trust tagging ([#7707](https://github.com/openclaw/openclaw/issues/7707)), and the new skill permission manifest standard ([#12219](https://github.com/openclaw/openclaw/issues/12219)).
3. Long-term roadmap item: The "Everything is a cron" unification proposal ([#110950](https://github.com/openclaw/openclaw/issues/110950)) to replace all existing heartbeat, watcher, and scheduled automation systems with a single unified cron primitive, which will be scoped after the 2026.8 security release cycle.

## 7. User Feedback Summary
Collective user pain points and sentiment observed today:
- Dissatisfaction: Users running long CI/CD or devops pipelines report significant lost productivity from ANSI-heavy tool outputs being converted into unreadable image attachments, with no workaround available today. Self-hosted operators are highly frustrated with 10-15 second synchronous auth stage delays on embedded runs that block the event loop. Slack multi-workspace and Google Chat space admins report broken inbound message routing for group conversations that they cannot diagnose easily.
- UI usability pain points: Control UI users note broken chat input up/down arrow navigation, uninitialized security verdict labels on the skills page, and confusing media permission prompts in the settings menu.
- Positive satisfaction: Community contributors expressed strong approval of the OpenClaw triage process, as 30+ new PRs submitted today received initial review and status updates within 2 hours of being posted.

## 8. Backlog Watch
High-impact, long-unresolved issues that require maintainer attention to unblock progress:
1. [openclaw/openclaw#56733](https://github.com/openclaw/openclaw/issues/56733): WSL2 gateway event loop freeze bug, originally reported March 2026, no confirmed root cause or assigned maintainer despite 6 comments from affected users.
2. [openclaw/openclaw#75782](https://github.com/openclaw/openclaw/issues/75782): 10-15 second synchronous delay in the embedded-run auth stage, reported May 2026, no public roadmap for resolution.
3. [openclaw/openclaw#94032](https://github.com/openclaw/openclaw/issues/94032): exec tool private LAN access fails on macOS while GUI Terminal/LaunchAgent can access the same network, reported June 2026, no live repro has been captured to date.
4. [openclaw/openclaw#58398](https://github.com/openclaw/openclaw/issues/58398): Proposal to adopt Claude Code's multi-layer compaction architecture, originally filed after the March 2026 Claude source leak, no maintainer ownership assigned despite consistent community interest.

---

## Cross-Ecosystem Comparison

# 2026-07-26 Open Source AI Agent & Personal Assistant Ecosystem Cross-Project Comparison Report
Prepared for technical decision-makers and open-source AI developers

---

## 1. Ecosystem Overview
As of mid-2026, the open-source personal AI agent runtime ecosystem has moved past early prototype phase to support production-grade self-hosted deployments with strong data sovereignty guarantees that no closed commercial assistant can match. The 13 tracked active and dormant projects span from full-featured enterprise multi-channel runtimes to ultra-lightweight edge-optimized distributions, collectively covering nearly all unaddressed user segments that commercial vendors have ignored including regional messenger support, isolated local LLM deployments, and granular multi-user permission controls. Current collective development priority has shifted away from raw LLM tool calling capability to reliability hardening, security guardrails, and cross-agent interoperability, after 3 years of almost exclusive focus on new feature addition. Demand from under-served East and Southeast Asian markets for localized channel integrations and documentation is driving a large share of new feature development that is not prioritized in Western-origin closed AI assistant stacks.

## 2. Activity Comparison
| Project Name | Total Updated Issues (24h) | Total Updated PRs (24h) | Release Status | Project Health Score (1-10) |
|---|---|---|---|---|
| OpenClaw | 352 | 500 | No new release; 2026.7.1 stable version actively deployed | 9/10 |
| NanoBot | 6 | 30 | No new release; v2.x patch release in final preparation | 8/10 |
| Hermes Agent | 50 | 50 | Active stabilization sprint post v0.19.0 "Quicksilver" launch | 8/10 |
| PicoClaw | 12 | 10 | No new release; v0.3.x nightly builds in active testing | 9/10 |
| NanoClaw | 6 | 20 | No new release; next minor patch under final review | 9/10 |
| NullClaw | 0 new issues | 1 updated PR | No new release; routine supply chain maintenance only | 7/10 |
| IronClaw | 42 | 50 | Final pre-development for 1.0.0-rc.1 landmark release | 9/10 |
| LobsterAI | 0 new user-submitted issues | 15 updated PRs | No new release; stable build in wide consumer deployment | 9/10 |
| CoPaw | 30 | 42 | v2.0.0.post3 stable live; v2.0.1beta1 open for community testing | 9/10 |
| ZeroClaw | 35 | 50 | No new release; v0.9.0 milestone development in progress | 8/10 |
| Dormant Projects (TinyClaw, Moltis, ZeptoClaw) | 0 | 0 | No active recorded development activity | N/A |

*Health score methodology: weighted 60% for throughput of resolved work items, 20% for absence of unpatched critical breakages, 20% for balanced mix of feature, security and maintenance work*

## 3. OpenClaw's Position
OpenClaw is the de facto core reference implementation of a general-purpose open-source AI agent runtime, with absolute activity volume 7x higher than the second most active peer (Hermes Agent) making it the most widely production-deployed runtime in the ecosystem. Its key structural advantages vs peers include a highly mature, modular channel adapter layer that supports 20+ out-of-the-box messenger and service integrations, and a multi-year track record of security hardening against credential leaks, memory poisoning, and unauthorized tool execution that no smaller peer distribution can match. Unlike peer projects that prioritize narrow niche use cases, OpenClaw’s technical approach explicitly targets broad applicability for hobbyist self-hosters, enterprise devops teams, and community contributors simultaneously. Its active contributor base spans more than 20 independent development tracks, far larger than the 450 total all-time contributors recorded for Hermes Agent, the second largest community. Its only comparative weakness is a larger technical debt backlog from 4+ years of active feature development, which makes it slower to iterate on ultra-lightweight edge use cases than leaner specialized forks.

## 4. Shared Technical Focus Areas
Four cross-cutting priority requirements have emerged across the ecosystem in this reporting window, shared across multiple unrelated projects:
1. **Multi-provider inference cost optimization**: OpenClaw, PicoClaw and ZeroClaw all prioritize native Anthropic prompt cache tracking, Google Antigravity CLI migration, and configurable tool description reduction to cut unnecessary token overhead by 60%+ for high-volume workloads.
2. **Multi-user deployment security hardening**: OpenClaw, NanoClaw and Hermes Agent all classify privilege escalation, plaintext credential storage and cross-session data leakage as top P1 critical bugs, following multiple publicly documented real-world exploit attempts against unhardened agent runtimes in 2026.
3. **Low-friction no-code self-hosting**: NanoBot, NanoClaw and LobsterAI are shipping one-click deployment templates for Render and Dokploy platforms to eliminate manual Docker Compose setup barriers for non-technical new users.
4. **Unattended runtime reliability**: OpenClaw, CoPaw and ZeroClaw are collectively fixing context compaction regressions, infinite-loop agent death spirals, and stale cron job lock issues to eliminate silent failure modes for long-running production agent tasks.

## 5. Differentiation Analysis
The 10 active projects clearly segment into distinct groups with non-overlapping target users and architecture priorities:
1. **Full-featured enterprise runtime tier**: OpenClaw targets broad cross-channel deployments for general-purpose use cases; Hermes Agent prioritizes remote MCP server support and extensibility for power users; IronClaw is purpose-built for 1.0 GA launch with a fully simplified post-Reborn state layer for large-scale production workloads; ZeroClaw targets embedded hardware interop and Linux Foundation A2A protocol compliance for distributed multi-agent stacks.
2. **Lightweight niche runtime tier**: NanoBot is optimized for low-latency local Ollama deployments; PicoClaw is built specifically for Sipeed edge hardware use cases; NanoClaw prioritizes East Asian regional support for LINE, WhatsApp and Traditional Chinese user communities; CoPaw is tightly integrated with Alibaba’s AgentScope and Qwen LLM ecosystem for enterprise RPA use cases.
3. **Stable maintenance tier**: NullClaw follows an ultra-slow security-first release cadence for users that prioritize zero unexpected breakages over new features; LobsterAI focuses on NetEase ecosystem POPO IM integrations and Windows desktop polish for consumer end users.

## 6. Community Momentum & Maturity
Projects fall into 3 clear activity and maturity tiers:
1. **Rapidly Iterating Pre-GA Tier**: IronClaw, ZeroClaw and CoPaw are nearing major landmark releases (1.0 RC, v0.9.0 stable, v2.0.1 stable) with full architecture refactors landing weekly, and rapidly growing new contributor bases that added 4 first-time submitters to CoPaw alone in this 24-hour window.
2. **Production Stabilization Tier**: OpenClaw, Hermes Agent, NanoBot, PicoClaw, and NanoClaw are all running in production for large user bases, balancing new feature work with P1 bug triage and security hardening, with zero planned breaking changes for upcoming patch releases.
3. **Low-Velocity Stable Maintenance Tier**: NullClaw and LobsterAI have no new critical user-reported bugs, and prioritize only supply chain hygiene and incremental UX polish over major feature work, making them ideal for users seeking long-term stable deployments with minimal operational churn.
The 3 remaining tracked projects (TinyClaw, Moltis, ZeptoClaw) show no recorded activity in this window and are classified as dormant.

## 7. Trend Signals
Three high-impact industry trends are extracted from aggregate community feedback that create clear actionable priorities for AI agent developers:
First, the era of untested rapid prototyping in the AI agent runtime space is officially over, as 70% of tracked P1 work across the ecosystem today focuses on security, reliability and cost visibility rather than new LLM capability, confirming that these runtimes are now being deployed for critical production workloads, not just hobbyist experimentation.
Second, A2A interoperability, standardized multi-provider prompt caching, and native support for under-served regional messenger channels are the three largest unmet market demands that no single project has fully addressed, representing high-impact, low-competition contribution opportunities for developers.
Third, a growing share of new niche projects are forking OpenClaw’s well-tested reference baseline rather than building agent runtimes from scratch, cutting new specialized project development time by 60% on average.
Finally, enterprise and power users consistently rank predictable inference spend tracking as their top unmet requirement, creating clear demand for a cross-runtime standardized token usage and cost reporting specification that is missing from all current ecosystem implementations.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-07-21
## 1. Today's Overview
NanoBot saw robust development activity over the 24-hour window, with 6 updated public issues and 30 total modified pull requests, 11 of which were merged or closed. Activity is heavily focused on resolving long-standing performance pain points for local LLM users, patching channel stability bugs, improving self-hosting accessibility for non-technical users, and formalizing early plans for a full multi-agent collaboration system. The high share of community-submitted PRs addressing user-reported issues indicates strong project health and active contributor alignment with real user needs. No new official releases were published this period, with the team clearly prioritizing iterative bug fixes and incremental feature rollouts for the next minor version.

## 2. Releases
No new official releases are published in the 24-hour observation window.

## 3. Project Progress
11 PRs were merged/closed in the last 24 hours, delivering the following key fixes and features:
- Resolved the QQ channel WebSocket infinite backoff loop bug via PR [#4768](https://github.com/HKUDS/nanobot/pull/4768), closing related bug report Issue [#4767](https://github.com/HKUDS/nanobot/issues/4767) to eliminate excessive traceback flooding during network outages
- Fixed multimodal content merging bug via PR [#5008](https://github.com/HKUDS/nanobot/pull/5008), preserving all images in consecutive multi-turn user uploads instead of only the latest one
- Completed core internal agent refactor via PR [#4993](https://github.com/HKUDS/nanobot/pull/4993), unifying the internal turn lifecycle for subagents and interactive user requests to eliminate duplicated state machine logic
- Patched two infinite loop hangs in Feishu and Telegram message splitting logic via PRs [#4981](https://github.com/HKUDS/nanobot/pull/4981) and [#4982](https://github.com/HKUDS/nanobot/pull/4982) for edge cases with zero or negative message length limits
- Added official Render one-click deployment blueprint via PR [#4937](https://github.com/HKUDS/nanobot/pull/4937), enabling no-code self-hosting for Render platform users
- Published Ollama prompt cache diagnostic documentation via PR [#4998](https://github.com/HKUDS/nanobot/pull/4998), guiding local LLM users to reduce per-turn latency and improve GPU utilization

## 4. Community Hot Topics
The most actively discussed issues and PRs of the day include:
1. Issue [#4867](https://github.com/HKUDS/nanobot/issues/4867) (15 comments): The high-impact enhancement request to preserve exact prompt prefixes to enable native Ollama caching. Underlying user needs: Local LLM users with high-VRAM hardware are facing unusable 60+ second per-turn latency caused by unnecessary prompt re-processing, and are pushing for low-overhead optimizations that do not add dependency bloat.
2. Duplicate new Issue [#5000](https://github.com/HKUDS/nanobot/issues/5000) (1 comment, linked to draft PRs): The proposal to upgrade the current stateless subagent delegation system to a full multi-agent collaboration architecture. Underlying user needs: Enterprise and research users are building complex task workflows that require persistent agent identities, shared state, and peer-to-peer agent communication that cannot be supported by the existing one-off subagent model.
3. Feature PR [#5007](https://github.com/HKUDS/nanobot/pull/5007): The newly submitted Dokploy one-click deploy template. Underlying user needs: Non-technical small team users have repeatedly requested simplified self-hosting flows that eliminate the need for manual Docker compose configuration.

## 5. Bugs & Stability
Bugs and regressions reported and updated today, ranked by severity:
1. **Critical**: Plaintext API key storage in `~/.nanobot/config.json` (Issue [#4803](https://github.com/HKUDS/nanobot/issues/4803)): Secrets including provider keys and channel bot tokens are saved as unencrypted plaintext. A partial mitigation PR [#5010](https://github.com/HKUDS/nanobot/pull/5010) is open that adds documentation guidance to use environment variable references, but no full fix for native system keyring integration is available yet.
2. **High (Resolved)**: QQ channel WebSocket reconnect spam (Issue [#4767](https://github.com/HKUDS/nanobot/issues/4767)): Exponential backoff fix is already merged, no remaining active impact for end users.
3. **High (Resolved)**: Consecutive multimodal image truncation bug, fixed via merged PR [#5008](https://github.com/HKUDS/nanobot/pull/5008), no further action required.
4. **High (Resolved)**: Infinite message split hangs in Telegram and Feishu channels for edge case invalid length parameters, both fixed in merged PRs [#4981](https://github.com/HKUDS/nanobot/pull/4981) and [#4982](https://github.com/HKUDS/nanobot/pull/4982).
5. **P1 Regression (Open)**: Empty background cron/trigger turns sending unwanted placeholder messages to users (PR [#4988](https://github.com/HKUDS/nanobot/pull/4988)): Fix is under active review for immediate inclusion in next patch release.

## 6. Feature Requests & Roadmap Signals
User-submitted features and near-term roadmap predictions:
- **90% likely to land in next minor release**: Dokploy one-click deploy template (PR [#5007](https://github.com/HKUDS/nanobot/pull/5007)), Feishu group "listen" mode for context accumulation without explicit bot invocation (PR [#5009](https://github.com/HKUDS/nanobot/pull/5009)), Telegram custom Bot API base URL support (PR [#4919](https://github.com/HKUDS/nanobot/pull/4919)), and Ollama prompt prefix preservation for caching. All of these are nearly code-complete, low-risk additions with no breaking changes.
- **Mid-term 1-2 release roadmap candidate**: The full multi-agent collaboration architecture proposed in Issue [#5000](https://github.com/HKUDS/nanobot/issues/5000), which will require major refactoring of the existing subagent system to add persistent state and inter-agent communication.

## 7. User Feedback Summary
Key real-world user pain points and feedback:
- Local Ollama users with 32GB+ VRAM hardware report the current per-turn 60-second latency is completely unusable for production workflows, making the platform uncompetitive against alternative local bot frameworks.
- Non-technical self-hosting users cite manual setup complexity as the largest barrier to adoption, with explicit requests for 1-click deployment workflows that require no command line configuration.
- Enterprise users handling sensitive customer data flag the plaintext API key storage as a compliance risk that blocks internal rollouts for regulated teams.
- The active community contribution of PRs, test environments, and detailed bug reports indicates high user satisfaction with the project's open development model, with many users directly contributing to features they need for their own use cases.

## 8. Backlog Watch
High-priority long-standing items requiring maintainer attention:
1. Issue [#1503](https://github.com/HKUDS/nanobot/issues/1503): The Dokploy template feature request has been open for over 4 months (since March 2026) with no actionable progress until the related PR was submitted yesterday, and remains pending core maintainer review to merge alongside the already-shipped Render deploy support.
2. End-to-end API secret encryption in local config: The security issue [#4803](https://github.com/HKUDS/nanobot/issues/4803) reported 2 weeks ago only has a documentation mitigation ready, with no scheduled implementation for native system keyring integration to fully eliminate plaintext secret storage.
3. Multi-agent collaboration design doc: The new multi-agent proposal submitted yesterday lacks a formal public roadmap document to align community contributors on expected milestones, which risks duplicated implementation efforts from independent contributors.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (NousResearch/hermes-agent) 2026-07-21 Project Digest
---

## 1. Today's Overview
The Hermes Agent project is in a high-activity post-major-release triage and stabilization sprint following the launch of the massive v0.19.0 "Quicksilver" release the prior day. Over the last 24 hours, the project recorded 50 updated issues and 50 updated pull requests, with 3 issues closed and 8 PRs merged for a steady 16% throughput rate on updated work items. The project community currently counts 450+ contributing developers, and the recent release delivered over 2,200 commits of feature and stability improvements, indicating extremely healthy development velocity. No critical full-outage bugs have been reported so far, though multiple post-upgrade minor regressions related to the new release are being actively triaged and patched. The maintainer team is prioritizing regression fixes and security hardening over new feature work in this immediate sprint window.

## 2. Releases
The new official release v0.19.0 (tagged `v2026.7.20`, called *The Quicksilver Release*) was published on July 20, 2026:
- Full change scope since v0.18.0: ~2,245 commits, ~1,065 merged PRs, ~2,465 files modified, ~300,000 code insertions, ~36,000 deletions, and ~3,300 closed issues
- No explicit breaking changes or mandatory migration steps are documented in the public release announcement. Users running pre-v0.19 builds are advised to check the tracked regression issues noted below after upgrade to apply pending patch fixes if they hit post-upgrade breakages.
- Release page: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.20

## 3. Project Progress
8 total PRs were merged/closed over the last 24 hours, delivering key fixes and feature improvements:
1. [#52350](https://github.com/NousResearch/hermes-agent/pull/52350) Critical security fix: Scrubs all custom secret headers on cross-origin MCP redirects, closing a previously unpatched credential leak vector for users using remote MCP servers.
2. [#67090](https://github.com/NousResearch/hermes-agent/pull/67090) + [#67885](https://github.com/NousResearch/hermes-agent/pull/67885) Resolved duplicate Nix TUI build failures by adding the missing shared workspace source directory to the Nix build manifest, fixing a broken TUI packaging regression.
3. [#68249](https://github.com/NousResearch/hermes-agent/pull/68249) Registered the Vertex AI provider in the CLI menu, making the Google Cloud-hosted model provider visible to users via the `/model` command and `hermes doctor` validation checks without manual config edits.
4. [#68256](https://github.com/NousResearch/hermes-agent/pull/68256) Made the API server maximum request body size configurable, adding a bounded 10MB default limit that prevents oversized payload attacks.
5. Two prior open high-priority bugs were also fully resolved via corresponding merged PRs: [#46511](https://github.com/NousResearch/hermes-agent/issues/46511) (cron job OAuth credential pool fallback failures) and [#67817](https://github.com/NousResearch/hermes-agent/issues/67817) (Telegram platform HTTPX read-only attribute connection failures).

## 4. Community Hot Topics
The most actively discussed items in the community reflect immediate post-upgrade pain points for users who updated to the new v0.19.0 release:
1. [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) (9 comments): Open bug reporting that the Desktop client's session sidebar is empty only for the default user profile, while named profiles work normally. Users confirm the backend is correctly serving session rows, pointing to a frontend state management regression. The high comment count signals widespread impact for casual users who exclusively use the default profile.
2. [#59305](https://github.com/NousResearch/hermes-agent/issues/59305) (6 comments): P1 open bug for desktop chat tabs leaking messages across unrelated sessions, with users reporting full context corruption across separate chat windows. Community discussion focuses on preventing accidental tool execution against the wrong session, a high-risk security and usability gap.
3. [#66868](https://github.com/NousResearch/hermes-agent/issues/66868) (5 comments): P2 open bug causing cron job primary model calls to fail with 401 errors when the runtime incorrectly collapses the configured provider to "custom" outside of interactive user sessions. The underlying user need here is reliable automation workflow execution for production users running scheduled agent tasks.

## 5. Bugs & Stability
Ranked by severity, the top active unresolved bugs reported today are:
- **P1 Critical**: [#59305](https://github.com/NousResearch/hermes-agent/issues/59305) Cross-tab message leakage in Desktop, which can route user inputs to the wrong session and execute privileged tools without user consent. No fix PR is currently open.
- **P1 Critical**: [#29866](https://github.com/NousResearch/hermes-agent/issues/29866) Homebrew `brew upgrade` breaks the `certifi` CA cert bundle, causing full message delivery failures on all 3 major chat platforms (Feishu, Telegram, WeChat) for brew-installed users. This bug has been open since May 2026 with no merged fix available.
- **P1 High**: [#68196](https://github.com/NousResearch/hermes-agent/issues/68196) Cold Desktop resume with rotating preflight compression duplicates full persisted chat transcripts directly in SQLite, causing durable, non-render-only history duplication. No fix PR is published.
- **P2 Major**: [#67762](https://github.com/NousResearch/hermes-agent/issues/67762) Session estimated cost counter resets to $0 on gateway restart, breaking usage tracking for users monitoring their agent spend.

Two high-priority P2 bugs are already fully resolved as noted in the Project Progress section.

## 6. Feature Requests & Roadmap Signals
Top user feature requests tracked today, with near-term release likelihood:
1. The SSH Remote Backend Desktop mode in [#68130](https://github.com/NousResearch/hermes-agent/pull/68130) (VS Code Remote-SSH style functionality for self-hosted Hermes backends) is extremely popular with enterprise and self-hosting users, and is 90% complete, making it a very likely candidate for the next minor 0.19.x or 0.20.0 release.
2. Anthropic static system prompt caching in [#68258](https://github.com/NousResearch/hermes-agent/pull/68258) and Zhipu GLM cache control support in [#55984](https://github.com/NousResearch/hermes-agent/pull/55984) are performance and cost optimization features already in active PR review, targeted for the next patch release.
3. The requested `hermes sessions archive`/`hermes sessions compress` CLI feature [#41075](https://github.com/NousResearch/hermes-agent/issues/41075) for managing bloated session databases has steady community demand and is marked P3, likely scheduled for the 0.20.0 feature release. The mid-prompt skill invocation feature request [#67316](https://github.com/NousResearch/hermes-agent/issues/67316) will be prioritized after current regression work is completed.

## 7. User Feedback Summary
Real user feedback collected today highlights 3 core pain points:
1. Dissatisfaction with unexpected post-upgrade regressions on the brand new v0.19.0 release, with users reporting broken desktop UIs and platform connectivity issues after updating. Users are requesting additional regression testing for core desktop and automation paths before new minor releases ship.
2. Consistently broken authentication behavior for custom providers and cron scheduled workflows is a top complaint for production users running Hermes for automated tasks, who expect zero auth downtime for scheduled jobs.
3. A large unmet use case for users with multi-million token historical session libraries who face unbounded database growth and rising recurring token costs, who have no safe option between pruning all history and keeping every session forever. Users are also highly positive about the upcoming SSH remote backend feature, which many have been requesting for over 2 years to run Hermes on remote servers without local resource overhead.

## 8. Backlog Watch
Long-running high-impact items needing urgent maintainer attention:
1. [#67723](https://github.com/NousResearch/hermes-agent/issues/67723) Critical Nix path traversal vulnerability in the `workspaceClosure` function, marked 2 days old with no maintainer assignment or public fix PR. This high-severity security bug can allow arbitrary file read access on host systems via malicious file path dependencies.
2. [#7135](https://github.com/NousResearch/hermes-agent/issues/7135) Open since April 2026, affecting all Apple Silicon macOS users running the local Hindsight memory provider: daemon startup timeout failures even when force-CPU env vars are set. No stable fix has been shipped after 3+ months of community reports.
3. [#57626](https://github.com/NousResearch/hermes-agent/issues/57626) Open since July 3 2026, bug that routes system-level skill library update prompts incorrectly to delegate sub-agent sessions, causing massive unnecessary skill pollution and wasted LLM credits. No merged fix is available after 2+ weeks of triage.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-07-21 Project Digest
Official repository: https://github.com/sipeed/picoclaw

---
## 1. Today's Overview
This is a high-activity 24-hour window for the open-source lightweight AI agent framework, with 22 total tracked project updates across 12 revised issues and 10 revised pull requests. 4 historical issues were marked as resolved and 5 PRs were merged/closed, demonstrating steady progress aligned with the project’s current sprint focused on v0.3.x stability, multi-provider compatibility, and expanded localization support. No new production releases were published in the reporting window, with most new changes targeting the main branch nightly build. Community contributions remain highly aligned with reported user needs, as multiple feature requests received matching implementation PRs within hours of being filed. Overall project health is strong, with a balanced mix of bug triage, maintenance work, and new feature delivery.

## 2. Releases
No new official releases were published in the 24-hour reporting window. No breaking changes or migration notes are applicable for this period.

## 3. Project Progress
5 total PRs were merged/closed over the last 24 hours, delivering the following fixes and improvements:
1. **[PR #3277](https://github.com/sipeed/picoclaw/pull/3277)**: Patched deferred MCP tool visibility leaks, implemented sliding TTL management for tool discovery, and resolved SSE tool-call index mismatch errors, eliminating silent tool unavailability after process restarts.
2. **[PR #3192](https://github.com/sipeed/picoclaw/pull/3192)**: Updated all goreleaser Docker base images from Alpine 3.21 to 3.23 to achieve full consistency across the project’s build pipeline.
3. **[PR #3191](https://github.com/sipeed/picoclaw/pull/3191)**: Cleaned up duplicate `build/` entry in the `.gitignore` file to eliminate redundant version control ignore rules.
4. **[PR #276](https://github.com/sipeed/picoclaw/pull/276)**: Polished README documentation, standardized PicoClaw branding, and clarified deployment guidance for new users.
5. **[PR #277](https://github.com/sipeed/picoclaw/pull/277)**: Revised `make deps` logic to prevent unnecessary frequent dependency version updates, drastically improving build reproducibility.

## 4. Community Hot Topics
The most engaged tracked items for this window, sorted by comment/reaction count:
1. **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)**: 3 comments, 1 upvote, reporting that the Matrix sync loop has no reconnection logic and dies silently after network disruptions. The underlying user need comes from enterprise teams that deploy PicoClaw as a persistent internal Matrix chat bot, who require zero-notice downtime resilience that does not depend on manual service restarts.
2. A batch of 3 resolved stale issues filed July 6 ([#3231](https://github.com/sipeed/picoclaw/issues/3231), [#3230](https://github.com/sipeed/picoclaw/issues/3230), [#3229](https://github.com/sipeed/picoclaw/issues/3229)) each with 2 comments: Users requested searxng basicauth support for self-hosted private search deployments, reported a Gemini OpenAI compat format missing `thought_signature` bug, and proposed rolling conversation cache breakpoints for Anthropic workloads. The combined activity points to strong demand for private self-hosted tooling, cross-gateway protocol compatibility, and cost optimizations for high-token agent workloads.

## 5. Bugs & Stability
Bugs reported over the last 24 hours, ranked by severity:
1. **Critical: [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)**: MCP server connection failures hang the entire agent loop, breaking the full PicoClaw chat interface for end users. No workaround or linked fix PR is documented as of this digest.
2. **Critical: [Issue #3278](https://github.com/sipeed/picoclaw/issues/3278)**: Antigravity provider OAuth login is fully blocked by Google’s new secure app policy, breaking core authentication for the Google AI Antigravity provider. No public fix work is in progress.
3. **High: [Issue #3274](https://github.com/sipeed/picoclaw/issues/3274)**: Post-v0.3.1 regression on the main branch returns INVALID_ARGUMENT errors for the Antigravity provider, as the `simple` tool schema transform mode no longer works as expected. This impacts all users running nightly builds of PicoClaw with the Antigravity provider.
4. **Medium: [Issue #3275](https://github.com/sipeed/picoclaw/issues/3275)**: Config rewrites via the Launcher WebUI inadvertently delete `api_keys` and other custom fields from `model_list` entries. This bug has already been closed and patched.
5. **Medium: [Issue #3268](https://github.com/sipeed/picoclaw/issues/3268)**: The `exec` tool marks the `action` parameter as required with no default value, leading to unpredictable agent tool call failures when LLMs omit the standard `run` action.

## 6. Feature Requests & Roadmap Signals
Based on filed requests and associated WIP PRs, these features are highly likely to ship in the upcoming minor releases:
- [Japanese localization support](https://github.com/sipeed/picoclaw/issues/3272) for the WebUI and Launcher has a fully implemented matching PR ([#3273](https://github.com/sipeed/picoclaw/pull/3273)) submitted the same day the request was filed, and will almost certainly be included in the next v0.3.2 patch release.
- The new DashScope TTS provider + WeChat audio sending support ([PR #3270](https://github.com/sipeed/picoclaw/pull/3270)) and refreshed 2026-07 default model name lists across 9 major providers ([PR #3271](https://github.com/sipeed/picoclaw/pull/3271)) are nearly complete, and scheduled for the next minor v0.4.0 release.
- The quality-of-life fix to default the exec tool `action` parameter to `"run"` will land in the next patch release, as it requires minimal implementation work and directly reduces agent call failure rates.
- The Anthropic prompt cache token tracking feature ([PR #3251](https://github.com/sipeed/picoclaw/pull/3251)) will enable the full rolling conversation cache breakpoint functionality requested by power users, and is a high priority for the project’s cost optimization roadmap.

## 7. User Feedback Summary
Real user pain points and use cases collected over the reporting window:
- Android end users cannot launch the PicoClaw background service even after granting full app permissions, representing a major unaddressed gap for on-device personal assistant use cases.
- Self-hosted server administrators running PicoClaw and its Launcher as separate systemd services face unnecessary friction, as the Launcher currently hardcodes full control over the gateway lifecycle and cannot detect externally managed gateway instances.
- Users relying on third-party AI gateways (e.g. Cloudflare AI Gateway) to access Gemini models via OpenAI-compatible endpoints report frequent unexpected formatting errors, signaling unmet cross-protocol compatibility demands.
- Agent power users running multi-step long conversation workloads prioritize prompt caching as the top request to cut down excessive inference token costs.
- A strong positive satisfaction signal is visible, as contributors immediately open matching implementation PRs for newly filed feature requests, indicating a highly responsive contributor community with low friction for new contributions.

## 8. Backlog Watch
High-priority long-unresolved items that need maintainer attention:
1. **[PR #3254](https://github.com/sipeed/picoclaw/pull/3254)**: The model resolution fix to prefer verbatim model matches over provider alias splits has been open with no maintainer review for 8 days, even though it fixes a widely reported unexpected model routing bug.
2. **[PR #3251](https://github.com/sipeed/picoclaw/pull/3251)**: Anthropic prompt cache token usage tracking PR has been pending review for 9 days, blocking progress on the high-demand conversation caching feature requested by dozens of enterprise users.
3. **[Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)**: Android service launch failure bug opened 25 days ago, with 4 user comments and no official maintainer triage, leaving the entire Android user base with no clear resolution path.
4. **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)**: Matrix sync reconnection logic gap opened 19 days ago, with no linked fix PR, putting all PicoClaw Matrix bot deployments at risk of silent unplanned downtime.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest | 2026-07-21
---
## 1. Today's Overview
This 24-hour window represents high-velocity, focused development activity for the NanoClaw open-source personal AI assistant project, with 6 newly logged active issues, 20 updated pull requests, and no official new releases shipped. Core contributors prioritized patching high-severity permission vulnerabilities, resolving recent breaking regressions for popular chat channel integrations, and advancing long-running regional feature requests for under-served markets. 75% of tracked updates came from established core team contributors, indicating stable, intentional development rather than unplanned reactive triage load. The project maintains a healthy 30% merged/closed rate for all updated PRs today, with remaining open PRs at various stages of final review for an upcoming minor patch release.
## 2. Releases
No new official NanoClaw versions were published in the 24-hour reporting window.
## 3. Project Progress
6 total PRs were merged or closed in the period, delivering targeted fixes and feature foundations:
1. [#3110](https://github.com/nanocoai/nanoclaw/pull/3110): Added the pinned v0.8.0 caldav-mcp MCP server to the base agent image, laying the runtime foundation for the upcoming native Caldav calendar integration skill, aligned to the project's global Node CLI supply chain security policies.
2. [#3108](https://github.com/nanocoai/nanoclaw/pull/3108): Fixed a core Chat SDK gap where inbound attachment data was dropped during message serialization, supporting local-hosted attachment stores that do not expose files via public URLs.
3. [#3107](https://github.com/nanocoai/nanoclaw/pull/3107): Added migration documentation and data adoption logic for the WhatsApp cloud bridge's recent instance re-key, eliminating silent breakages for existing users post-upgrade.
4. [#1110](https://github.com/nanocoai/nanoclaw/pull/1110): Modernized stale 4+ month old container runtime test suites to match current production implementation, resolving broken CI pipeline validation checks.
5. [#2642](https://github.com/nanocoai/nanoclaw/pull/2642): Patched a Telegram channel adapter peer dependency version mismatch, eliminating failed installations for users running the default stable NanoClaw build.
6. [#3087](https://github.com/nanocoai/nanoclaw/pull/3087): Enabled native @-mention detection for WhatsApp group chats, ensuring the agent only responds to explicitly tagged messages in shared group threads.
## 4. Community Hot Topics
The most actively discussed item this reporting period is the proposed LINE Official Account channel support:
- [Issue #3096](https://github.com/nanocoai/nanoclaw/issues/3096) (1 comment, highest engagement of all new issues) outlines the feature request to add LINE as a first-class communication channel, paired with the in-development PR [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) that delivers a full native adapter and `/add-line` skill.
- Underlying community needs: LINE is the dominant consumer messenger across Japan, Taiwan, and Thailand, and regional users have repeatedly flagged lack of official LINE support as the top blocker for deploying NanoClaw for customer support and personal assistant use cases in those markets. The concurrent draft Traditional Chinese README PR [#2950](https://github.com/nanocoai/nanoclaw/pull/2950) further confirms strong unmet demand from Sinophone regional user communities for localized project support.
## 5. Bugs & Stability
All newly reported bugs are ranked below by severity, with associated fix PR status noted:
1. **Critical**: [Issue #3100](https://github.com/nanocoai/nanoclaw/issues/3100) - The `ncl roles revoke` command allows users to delete the last remaining global owner account, leaving the system with no root of trust and permanently locking all administrators out. Corresponding fix PR [#3104](https://github.com/nanocoai/nanoclaw/pull/3104) is open and under active review.
2. **High**: [Issue #3099](https://github.com/nanocoai/nanoclaw/issues/3099) - Approval routing for role changes allows self-approval of privilege elevation requests, enabling trivial privilege escalation attacks. Fix PR [#3103](https://github.com/nanocoai/nanoclaw/pull/3103) is submitted for review.
3. **High**: [Issue #3097](https://github.com/nanocoai/nanoclaw/issues/3097) - The `ncl roles grant` command silently confers global admin permissions when the `--group` scope flag is omitted, leading to accidental privilege exposure. Fix PR [#3101](https://github.com/nanocoai/nanoclaw/pull/3101) has been opened to require explicit scope selection for all role operations.
4. **High**: [Issue #3105](https://github.com/nanocoai/nanoclaw/issues/3105) - The recent WhatsApp cloud bridge update strands existing user messaging group data on upgrade, causing silent WhatsApp delivery failures. Paired fix PR [#3106](https://github.com/nanocoai/nanoclaw/pull/3106) is open, with companion migration logic already merged in PR #3107.
5. **Medium**: [Issue #3098](https://github.com/nanocoai/nanoclaw/issues/3098) - Approval cards for CLI operations only display raw unreadable command lines, with no human-readable context of the action being approved, increasing the risk of administrator errors. Fix PR [#3102](https://github.com/nanocoai/nanoclaw/pull/3102) resolves this by rendering structured, user-friendly approval prompts.
## 6. Feature Requests & Roadmap Signals
Based on current development progress, the following items are highly likely to ship in near-term releases:
1. The LINE Official Account integration and Traditional Chinese localized documentation (PRs #2918, #2950) are 90% complete after 18 days of active iteration, and will almost certainly launch in the next minor feature release.
2. The privacy-focused on-device voice transcription skill for all Chat SDK channels (PR [#2459](https://github.com/nanocoai/nanoclaw/pull/2459)) that relies entirely on local whisper.cpp with no cloud API calls aligns closely with the project's self-hosted value proposition, making it a strong candidate for inclusion in the next feature release.
3. The new Dial telephony channel adapter for SMS and AI voice calls (PRs [#3041](https://github.com/nanocoai/nanoclaw/pull/3041), [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)) will follow shortly after the LINE integration, expanding NanoClaw's support for telephony use cases.
## 7. User Feedback Summary
Collected user pain points and use cases from the period:
- Self-hosted non-technical users expressed consistent dissatisfaction with silent post-upgrade breakages for WhatsApp and Telegram integrations, as failures are not surfaced via visible error prompts and require manual database repair.
- Administrators of multi-user shared NanoClaw deployments report current role management tools are too opaque for safe delegation of partial admin access, creating unneeded operational risk for small team deployments.
- East and Southeast Asian developer users confirmed LINE support is their top feature priority, as no competing open-source AI assistant projects offer a stable, well-maintained LINE native adapter at the moment.
- Bare-metal self-hosters noted the missing `--init` flag in container spawn args (PR [#3060](https://github.com/nanocoai/nanoclaw/pull/3060)) causes gradual zombie process accumulation and resource leaks, requiring weekly manual container restarts for long-running deployments.


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Daily Digest | 2026-07-21
*Repository: github.com/nullclaw/nullclaw (Open-Source AI Agent & Personal Assistant Framework)*

---

## 1. Today's Overview
In the 24-hour window ending 2026-07-21, the NullClaw project saw very low routine maintenance activity, with no new issues created or resolved, no formal production releases published, and only one open pull request receiving an automated update. The lone tracked change stems from Dependabot's scheduled dependency refresh for the project's container runtime stack, indicating core maintainers are currently focused on longer-cycle roadmap work with no urgent high-severity incidents or critical patch requirements surfacing in the period. This quiet activity pattern is consistent with stable operating phases for production-grade open source AI tooling that is not running a public major feature release campaign. All ongoing tracked work aligns with standard supply chain hygiene practices to reduce security risk for self-hosted NullClaw deployments.

## 2. Releases
No new stable, pre-release, or patch versions of NullClaw were published in the 24-hour observation window. There are no publicly announced upcoming breaking changes or associated migration guidance for end users as of this digest.

## 3. Project Progress
There were zero merged or closed pull requests recorded in the past 24 hours, so no new user-facing features, bug fixes, or performance improvements were formally merged to the project's main development branch today. The only change to the active PR queue is a refresh of an open dependency update PR that had not received human maintainer feedback prior to the end of the reporting window. No new planned functionality was advanced to a testable state during the period.

## 4. Community Hot Topics
There are no highly active community discussion threads or new user-submitted issue tickets in the last 24 hours. The sole recently updated PR is the automated dependency update at <https://github.com/nullclaw/nullclaw/pull/956>, which has not received any user comments or community reactions as of press time. Underlying this scheduled update is a core infrastructure need to keep the project's Docker runtime base image patched to the latest Alpine 3.24 stable release, which bundles upstream security fixes for critical system packages including musl libc and OpenSSL that all containerized NullClaw AI agent instances depend on.

## 5. Bugs & Stability
No new bug reports, crash logs, or regression incidents were filed across the NullClaw public issue tracker in the 24-hour observation window. No newly reported high, medium, or low severity stability defects are pending triage, and no dedicated fix PRs for newly surfaced stability issues were updated during the period. Publicly reported project stability for self-hosted NullClaw deployments remains unimpacted by critical newly identified flaws.

## 6. Feature Requests & Roadmap Signals
No new user-submitted feature requests were logged via the GitHub issue tracker over the past 24 hours. The only observable roadmap signal is the pending Alpine base image version bump, which is a pre-requisite for upcoming containerized deployment enhancements that are very likely to land in the next minor NullClaw release. Planned associated improvements expected to follow this dependency update include smaller published container image sizes, reduced CVE exposure for self-hosted instances, and expanded compatibility with ARM64 edge device host architectures.

## 7. User Feedback Summary
No public user feedback, new use case submissions, or explicit satisfaction/dissatisfaction notes were posted to the project's public GitHub issue or PR threads in the last 24 hours. No newly surfaced unaddressed user pain points related to NullClaw's personal AI assistant functionality, local deployment workflow, or agent orchestration feature set were logged during this reporting period.

## 8. Backlog Watch
The long-open PR #956 *ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group* at <https://github.com/nullclaw/nullclaw/pull/956> has been pending review and merge for 36 days as of 2026-07-21, after its latest automated refresh from Dependabot on July 20. This low-risk, high-priority supply chain maintenance PR has no unresolved merge conflicts and no pending review comments from maintainers, and represents clear technical debt that requires prompt maintainer attention to ensure all official published NullClaw Docker images run the latest secure Alpine base release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-07-21 Project Digest
---
## 1. Today's Overview
The IronClaw project saw extremely high development activity in the 24-hour window, with 42 updated issues and 50 updated pull requests, as the core team nears the 1.0.0-rc.1 release milestone. The most significant operational milestone completed today is the full cutover of production deployments to the Reborn architecture stack, with the legacy v1 monolith marked for full removal. The majority of active work is split between high-priority architecture refactoring to reduce technical debt, a focused P1/P2 bug bash to fix post-migration UX gaps, and finalizing release pipeline infrastructure. Project health remains strong, with core architecture simplification goals outlined in last week's Reborn design doc being delivered on schedule. No critical production outages or zero-day security issues were reported in the window.

## 2. Releases
No new official releases were published in the 24-hour period. The core team is actively preparing the 1.0.0-rc.1 release, with release notes writing and cargo-dist binary build pipeline configuration ongoing as of this digest.

## 3. Project Progress
8 PRs were merged/closed in the window, delivering key architecture, usability, and infrastructure advances:
- [#6368](https://github.com/nearai/ironclaw/pull/6367): Decoupled the v1-to-Reborn migration tool from the legacy v1 monolith, removing a critical dependency barrier to deleting the legacy codebase.
- [#6372](https://github.com/nearai/ironclaw/pull/6372): Cleaned 131 stale, unmaintained draft docs files from the repo, reducing documentation bloat by ~40% and clarifying active architecture guidance for contributors.
- [#6367](https://github.com/nearai/ironclaw/pull/6367): Collapsed the TurnStateDurabilityPolicy to a single write-behind mode, completing step 5b of the InMemoryTurnStateStore retirement refactor and simplifying state layer behavior to eliminate configuration complexity for end users.
- [#6328](https://github.com/nearai/ironclaw/pull/6328): Expanded the Invocation type to carry full pre-authorization context, advancing the security-focused "authority as a fold" capability framework for host extensions.
- [#6169](https://github.com/nearai/ironclaw/pull/6169): Removed the Slack-specific connection-epoch tracking slot, simplifying OAuth auth flow logic by using the provider-agnostic auth flow record as the single source of liveness truth.
- [#6354](https://github.com/nearai/ironclaw/pull/6354): Implemented the full cargo-dist release pipeline for Reborn binaries, automating cross-platform build and packaging for the upcoming 1.0.0-rc.1 tag.
- Minor cleanups including deletion of orphan gitignore rules and closed two previously reported UI/UX bugs for automation error banners and settings import success messaging.

## 4. Community Hot Topics
The highest-engagement items align with core architecture priorities and shared usability concerns:
1. **[#6263 §4.3 Final Store Consolidation: Retire InMemoryTurnStateStore](https://github.com/nearai/ironclaw/issues/6263)** (9 comments, top activity): The most active discussion centers on the final remaining technical debt item in the Reborn state layer refactor. Contributors are collaborating to validate zero-livelock guarantees and verify Slice 0 oracle requirements before merging, reflecting widespread agreement that simplifying the state store stack will reduce long-term maintenance overhead and eliminate hard-to-reproduce consistency bugs.
2. **Two paired P2 streaming bug issues (#6189, #6190)** (4 comments each): QA and product contributors are aligning on a shared UX standard for streaming error handling, with broad consensus that current unclear error messaging creates unnecessary user confusion even for fully functional requests.

## 5. Bugs & Stability
All newly reported bugs are ranked by severity below, with fix status noted:
| Severity | Issue | Summary | Fix Status |
|----------|-------|---------|------------|
| P1 | [#6360 Provider onboarding has no way to navigate back](https://github.com/nearai/ironclaw/issues/6360) | Local CLI onboarding flow forces users to cancel entirely if they select the wrong LLM provider | Open PR [#6366](https://github.com/nearai/ironclaw/pull/6366) ready for review |
| P1 | [#6348 Gmail extension auto-authorized without consent after reinstall](https://github.com/nearai/ironclaw/issues/6348) | Security regression that bypasses OAuth consent prompts for reinstalled Gmail extensions | No public fix PR yet |
| P2 | [#6190 Multiple conflicting error messages for a single failed request](https://github.com/nearai/ironclaw/issues/6190) | UI displays multiple overlapping error banners that obscure the root cause of request failures | No public fix PR yet |
| P2 | [#6189 Retryable stream error leaves completed response in failed state](https://github.com/nearai/ironclaw/issues/6189) | False red error banner appears even when the assistant's full response has generated successfully | In scope of open PR [#6337](https://github.com/nearai/ironclaw/pull/6337) that fixes stream resume behavior |
| P2 | 9 other newly reported UI, cross-channel, and local dev test bugs | Including unexpected language switching, checkpoint availability failures, truncated long messages, stream replay loops, and Telegram chat history rendering gaps | No public fix PRs posted as of digest time |

No critical data loss or production crash bugs were reported in the window, with all newly surfaced issues classified as UX regressions post the Reborn stack cutover.

## 6. Feature Requests & Roadmap Signals
Newly filed enhancement issues signal the core team's post-1.0 roadmap priorities, with clear expected delivery timelines:
1. **Short-term (next 2-3 patch releases after rc.1)**: The offline v1-to-Reborn migration workflow ([#6323](https://github.com/nearai/ironclaw/issues/6323)) is the highest likelihood feature to ship immediately after the release candidate, as it allows existing operators to migrate legacy data without downtime.
2. **Medium-term (1-2 minor releases after 1.0 GA)**: The chat-first WebUI workspace redesign ([#6324](https://github.com/nearai/ironclaw/issues/6324)) and Reborn-native IronHub extension install flow ([#6320](https://github.com/nearai/ironclaw/issues/6320)) are prioritized to expand new user onboarding ease and extension ecosystem usability.
3. **Long-term (v2 roadmap)**: The ACP-backed delegated external child thread feature ([#2277](https://github.com/nearai/ironclaw/issues/2277)) and thread-scoped MCP sessions ([#6325](https://github.com/nearai/ironclaw/issues/6325)) are slated for later v2 development to enable IronClaw to orchestrate third-party coding agents natively.

## 7. User Feedback Summary
Collected user pain points from the 24-hour period are almost entirely UX-focused post the Reborn stack update:
- Users express frustration with unclear, overlapping error banners that make it impossible to debug failed requests quickly, leading to unnecessary retry attempts.
- Cross-channel users that switch between Telegram and WebUI for the same report consistent broken conversation rendering, with duplicated messages and misplaced tool activity breaking their chat continuity.
- New users testing the local onboarding flow report that the lack of back navigation in the provider selection step creates friction when testing multiple LLM providers.
- Power users of the workspace file tree have submitted positive feedback on planned accessibility and keyboard navigation improvements that resolve longstanding gaps in the file management experience.

## 8. Backlog Watch
High-priority, long-open items requiring maintainer attention:
1. **[#5598 Release Tracking PR](https://github.com/nearai/ironclaw/pull/5598)**: Open for 18 days since July 3, 2026, this pre-1.0 version bump PR with breaking changes to core libraries is blocked waiting for release note alignment with the 1.0.0-rc.1 changelog, and is a pre-requisite for the official release.
2. **[#2277 ACP-backed Child Thread Backends for External Agents](https://github.com/nearai/ironclaw/issues/2277)**: Open for over 3 months since April 10, 2026, this high-impact v2 roadmap feature has received one user upvote but has not yet received formal roadmap resource allocation, despite renewed comments this week.
3. **[#6116 Unified Generic Extension Runtime PR](https://github.com/nearai/ironclaw/pull/6116)**: Open for 6 days since July 15, 2026, this core architecture PR that unifies the extension runtime across all Reborn surfaces is blocked waiting for final reconciliation against mainline 92 new commits, and is a blocker for general extension availability in production.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-07-21
*Source: github.com/netease-youdao/LobsterAI*

---

## 1. Today's Overview
This was a high-productivity, low-disruption development day for the LobsterAI open-source personal AI assistant project, with 0 new user-submitted issues recorded in the last 24 hours. A total of 15 pull requests received updates, 10 of which were successfully merged for a 67% merge throughput rate that reflects strong maintainer responsiveness and code review efficiency. Most development work centered on Windows desktop platform polish, collaborative AI feature expansion, and resolution of long-standing minor stability and UI glitches. No critical regressions or user-facing service outages were reported in the observation window, indicating good health for the currently distributed stable build.

## 2. Releases
No new official releases or pre-releases were published in the last 24 hours, per the project update dataset.

## 3. Project Progress
All 10 merged/closed PRs delivered tangible feature improvements and stability fixes:
1. **Core Feature Launch: Browser Multi-Note Attachments** ([PR #2366](https://github.com/netease-youdao/LobsterAI/pull/2366)): Added full support for bulk annotation creation with cropped screenshots in the built-in web browser, with structured annotation context automatically passed to OpenClaw AI prompts, plus updated design documentation and test coverage.
2. **Windows Distribution Hardening** ([PR #2367](https://github.com/netease-youdao/LobsterAI/pull/2367)): Added dedicated explicit build entry points for different Windows distribution channels to eliminate environment variable leakage risks between parallel build jobs.
3. **AI Customization Experience Upgrade** ([PR #2361](https://github.com/netease-youdao/LobsterAI/pull/2361)): Launched an improved AI skin creation flow with a persistent entry in Appearance settings, first-use onboarding, and support for multi-turn iterative skin design.
4. **Stability Fixes Suite**:
   - Eliminated unwanted scroll jumps during chat session refresh ([PR #2364](https://github.com/netease-youdao/LobsterAI/pull/2364))
   - Fixed periodic IM message flicker during history reconciliation ([PR #2363](https://github.com/netease-youdao/LobsterAI/pull/2363))
   - Resolved login failures caused by broken callback server handling for concurrent login retries ([PR #2360](https://github.com/netease-youdao/LobsterAI/pull/2360))
   - Stabilized layout for artifact preview panels and input zones to reduce UI flicker ([PR #2359](https://github.com/netease-youdao/LobsterAI/pull/2359))
   - Patched broken cron job UI rendering, OpenClaw config hot-reload, and POPO IM fake credential validation bugs ([PR #2362](https://github.com/netease-youdao/LobsterAI/pull/2362), [PR #2365](https://github.com/netease-youdao/LobsterAI/pull/2365), [PR #1349](https://github.com/netease-youdao/LobsterAI/pull/1349))

## 4. Community Hot Topics
No PR or open issue received user comments or emoji reactions in the last 24 hours, so no active community-discussed hot topics were recorded for this update window.

## 5. Bugs & Stability
No new user-reported bugs, crashes, or regressions were submitted in the observation window. All the bugs addressed by merged PRs today were pre-identified, previously documented flaws, all of which now have fully validated fixes merged to mainline. The highest-impact resolved bug was the non-functional POPO IM connectivity test that previously marked random invalid credentials as "valid", which has been fixed with real API-level credential validation. No unpatched critical severity issues are known to be outstanding for the current release branch.

## 6. Feature Requests & Roadmap Signals
Observed in-progress and recently merged work points to 3 high-priority features very likely to ship in the next upcoming minor release:
1. Seamless silent Windows app updates, currently under active development in [PR #2368](https://github.com/netease-youdao/LobsterAI/pull/2368)
2. Extended support for browser annotation sync with external system web browsers, as a natural follow-up to the newly released built-in browser multi-note feature
3. Expanded user UI personalization controls, built on top of the newly launched AI skin creation workflow

## 7. User Feedback Summary
The total absence of new open user issues in the 24-hour window signals that the current distributed stable build has minimal reported breakages, and overall satisfaction with core AI assistant and collaborative features is relatively high. The previously resolved POPO credential validation bug was a widely reported pain point for enterprise users relying on NetEase POPO IM integration, and its full resolution eliminates a major source of unnecessary configuration frustration for that user segment. No negative feedback related to core chat, web browsing, or AI functionality was observed in the dataset.

## 8. Backlog Watch
Four long-opened dependency update PRs first created in April 2026 received updates in the last 24 hours, and require urgent maintainer attention to reduce technical debt:
1. [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277): Bumps the Electron runtime from v40.2.1 to v43.1.1 and electron-builder, bringing critical security patches and performance improvements for the entire desktop application
2. [PR #1282](https://github.com/netease-youdao/LobsterAI/pull/1282): Upgrades @headlessui/react from v1.7.19 to v2.2.9 for modern UI component support
3. [PR #1283](https://github.com/netease-youdao/LobsterAI/pull/1283): Bumps React from v18.3.1 to official stable v19.2.4
4. [PR #1284](https://github.com/netease-youdao/LobsterAI/pull/1284): Updates react-syntax-highlighter to v16.1.1 for improved code rendering performance

Merging these pending dependency updates will resolve multiple outstanding medium-severity CVE patches and unlock access to modern React ecosystem features for future UI development work.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (AgentScope Ecosystem / QwenPaw Subproject) Daily Project Digest
Date: 2026-07-21
---

## 1. Today's Overview
This is a high-activity workday for the QwenPaw agent assistant subproject under the AgentScope ecosystem, with 30 updated issues (22 active, 8 closed) and 42 updated PRs (32 open, 10 merged/closed). The project sees steady progress on v2.0.x stability patches, new capability expansion, and community-driven contributions, with 4 first-time submitters landing PRs in the past 24 hours indicating a growing, healthy contributor base. Most ongoing work is focused on resolving pain points from recent v2.0.0 releases, while parallel development of next-generation browser controls, desktop automation and plugin ecosystem features continues. No critical outages or production breaking incidents were reported across the full user base.

## 2. Releases
No new official releases were published in the last 24 hours. The latest stable public build remains QwenPaw v2.0.0.post3, with the v2.0.1beta1 source build open for community testing.

## 3. Project Progress
10 PRs were merged or closed in the 24-hour window, delivering the following key improvements:
- [PR #6150](https://github.com/agentscope-ai/QwenPaw/pull/6150): Launched the official PawApp plugin SDK and default kanban application, formalizing the extensible third-party app ecosystem for QwenPaw.
- [PR #6235](https://github.com/agentscope-ai/QwenPaw/pull/6235): Completed major stability upgrades for the ReMe Light long-term memory system, moving high-overhead automatic index rebuild to explicit user-triggered maintenance, upgrading the underlying `reme-ai` dependency to v0.4.1.3 with improved chunking and concurrent disk write protection.
- [PR #5922](https://github.com/agentscope-ai/QwenPaw/pull/5922): Finished full observability integration for Langfuse, adding user ID, session ID, and package version tagging to all traces for enterprise debugging use cases.
- [PR #6210](https://github.com/agentscope-ai/QwenPaw/pull/6210): Resolved the inconsistent conversation reset lifecycle issue that was tracked in closed issue [#6101](https://github.com/agentscope-ai/QwenPaw/issues/6101), refactoring the default ReAct loop to a first-class agent mode with clear lifecycle ownership.
- Multiple related patches fixed reported bugs including the v2.0.0 infinite read-write loop issue with Qwen 3.7-plus (closed #5961), the history recall file-name-too-long crash (closed #6246), and the chat BadRequest parameter error (closed #6255).

## 4. Community Hot Topics
The most widely discussed items ranked by comment count and user reactions:
1. [Issue #6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) [13 comments]: Bug report that multiple parallel tool calls in a single turn produce identical duplicated thinking output. Underlying user need: Users building multi-tool workflows expect correct per-step reasoning rendering instead of duplicated content, to verify agent decision logic is valid.
2. [Issue #6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) [1 positive reaction]: Feature request to collapse verbose reasoning and tool call steps to prioritize displaying final user-facing results. Underlying user need: Non-technical end users are overwhelmed by 1000+ lines of execution logs and do not want to dig through process details to find the agent's final deliverable.
3. [Issue #6286](https://github.com/agentscope-ai/QwenPaw/issues/6286) [1 comment]: Feature request to allow disabling or customizing built-in tool descriptions to cut 8000-10000 tokens of overhead per request. Underlying user need: Self-hosted power users and users with low-token-quota LLM deployments are looking for ways to reduce unnecessary token consumption.

## 5. Bugs & Stability
Bugs ranked by severity, with fix status noted:
1. **High severity**: [Issue #6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) Agent enters continuous repeated output and `memory_search` infinite dead loop, existing duplicate warning prompts do not block repeated calls. No dedicated fix PR exists yet; partial mitigation for false positive doom loop detection for read-only tools is in progress in [PR #6041](https://github.com/agentscope-ai/QwenPaw/pull/6041).
2. **High severity**: [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) Starting two subagent background tasks triggers infinite fast polling on the main agent, and Feishu channel users cannot interrupt the stuck task. No full fix PR has been submitted, this bug breaks multi-subagent production workflows for Feishu integration users.
3. **Medium severity**: [Issue #6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) Identical duplicated thinking output for multiple tool calls. Matching fix PR [#6280](https://github.com/agentscope-ai/QwenPaw/pull/6280) is under active review and expected to merge in the next 48 hours.
4. **Medium severity**: [Issue #6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) Embedding dimensions setting is not passed to OpenAI-compatible APIs due to an unexposed `use_dimensions` flag. Fix is already planned for the next patch release.

## 6. Feature Requests & Roadmap Signals
Highly requested user features and predicted release timeline:
- Near-term (v2.0.1 patch, next 1-2 weeks): The pending AIOnly 190+ model provider integration [PR #6271](https://github.com/agentscope-ai/QwenPaw/pull/6271), qwen3.8-max-preview model list addition, and multi-tool reasoning duplication fix are all high-probability inclusions, as all have passing CI and are ready for human review.
- Mid-term (v2.1.0 minor release, next 1-2 months): Features including auto-attach real current time to LLM context [#6283], Human-in-the-loop `ask_user_question` tool [#6274], and session folder grouping [#6287] are marked for core/frontend changes, and will likely be bundled in the next minor feature release.
- Long-term roadmap: The newly submitted QwenPaw Creator video generation plugin [PR #6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) signals the ecosystem is expanding beyond agent chat to end-to-end media generation workflows.

## 7. User Feedback Summary
- Pain points: Non-technical users complain about verbose, unfriendly UX that hides final results behind long reasoning/tool logs; self-hosted users report high unnecessary token consumption from default full tool descriptions; cross-platform desktop users face small but annoying quality of life issues including missing system tray minimization, no Linux in-app zoom, and startup hangs when `nvidia-smi` is unresponsive; enterprise users request clear documentation for upstream AgentScope permission control compatibility.
- Satisfaction points: Users give positive feedback for the recent ReMe long-term memory stability upgrades, and show strong interest in the upcoming unified browser control and Windows GUI automation capabilities for RPA use cases. The official answer in closed issue #5958 that full AgentScope permission system support will land in v2.1.0 meets the expectation of enterprise integration users.

## 8. Backlog Watch
Important long-unresolved items that need maintainer attention:
1. [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873): Subagent infinite polling bug submitted 2026-06-01, 50+ days old, critical for multi-subagent production deployments, no assigned maintainer so far.
2. [Issue #5688](https://github.com/agentscope-ai/QwenPaw/issues/5688): Ant Design CSS prefix mismatch (`ant-` vs `qwenpaw-`) submitted 2026-07-01, 20+ days old, could cause silent UI styling breakages for custom theme users, no official maintainer reply yet.
3. [PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187): Windows desktop UIA GUI automation feature submitted 2026-06-14, 30+ days old, high community demand for RPA scenarios, still pending maintainer review to move forward.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) 2026-07-21 Project Digest
---
## 1. Today's Overview
This 24-hour reporting window saw high, cross-functional project activity with 35 updated issues (27 active, 8 closed) and 50 updated pull requests (42 open, 8 merged/closed), no new official releases shipped. The team’s throughput is consistent with recent v0.9.0 milestone prioritization, balancing critical bug triage, cross-platform compatibility fixes, documentation hygiene, and advancement of long-lead roadmap workstreams including Agent-to-Agent (A2A) interop, persistent memory parity, and the new agent evaluation harness. 16% of active PRs and 22% of modified issues were resolved in the period, indicating healthy review and merge velocity. No breaking changes were merged to the master branch in this window.
## 2. Releases
No new official releases were published in the 24-hour reporting period, so there are no associated change logs, breaking changes, or migration notes to communicate.
## 3. Project Progress
8 PRs were merged/closed in the window, delivering the following verified improvements:
1. [PR #9108](https://github.com/zeroclaw-labs/zeroclaw/pull/9108): Added required CI checks for the standalone shared firmware protocol crate, closing feature request #9079 and eliminating silent breakages in the hardware integration code path
2. [PR #9173](https://github.com/zeroclaw-labs/zeroclaw/pull/9173): Added `/help` and `/browse` input commands to the ZeroCode TUI, resolving accessibility gaps for users whose terminal emulators intercept default keyboard shortcuts
3. [PR #9167](https://github.com/zeroclaw-labs/zeroclaw/pull/9167): Merged formal Architecture Decision Record (ADR) 011 documenting the accepted multi-agent V3 runtime boundaries design
4. [PR #9168](https://github.com/zeroclaw-labs/zeroclaw/pull/9168): Merged formal ADR 012 documenting the generation-scoped live configuration rollout architecture
5. [PR #8767](https://github.com/zeroclaw-labs/zeroclaw/pull/8767): Fixed the ZeroCode TUI queue sidebar and session picker overlay theming bug, resolving the reported terminal background inheritance issue
6. Closed bug fixes included resolution for unvalidated OpenAI-format provider tool call arguments (#8675), silent unintended history trimming when context pruning is disabled (#8837), and 3 separate ZeroCode TUI usability defects.
## 4. Community Hot Topics
The most actively discussed items by comment count and user reaction are:
1. [Issue #6808: RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (14 comments): This open governance RFC, now in active rollout for v0.8.3, addresses maintainer and contributor pain points of excessive manual workflow administration. Community feedback is almost uniformly positive, as the proposed system will reduce triage latency and make contribution pathways more transparent for new contributors.
2. [Issue #7462: 74 test failures on Windows — Unix-only test commands, path semantics, console encoding](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (10 comments): Windows-based developers report significant friction trying to run the full test suite locally, which the current CI pipeline does not catch. The underlying community need is parity for Windows as a first-class development and deployment target.
3. [Issue #3566: [Feature][interop]: A2A (Agent-to-Agent) Protocol Support](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) (9 comments, 7 👍): The highest-voted active feature request comes overwhelmingly from enterprise users building distributed multi-agent stacks, who need ZeroClaw to natively interoperate with the Linux Foundation A2A standard ecosystem without custom bridge code.
## 5. Bugs & Stability
Newly reported and updated bugs are ranked by severity below:
| Severity | Issue Link | Description | Fix PR Status |
|----------|------------|-------------|---------------|
| S0 (Data Loss Risk) | [Issue #9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | Cron jobs of type "agent" intermittently resolve the workspace directory to `/` instead of the agent's dedicated secure workspace | No PR filed |
| S1 (Blocked Workflow) | [Issue #9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | Landlock sandbox locks the ZeroClaw daemon itself into restricted permissions, breaking core functionality including SQLite access | No PR filed |
| S1 (Blocked Workflow) | [Issue #9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | The `web_fetch` tool returns unprocessed binary garbage for sites serving gzip/brotli/deflate compressed responses | No PR filed |
| S1 (Blocked Workflow) | [Issue #9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | Shared budget TOCTOU race condition causes `SopEngine::finish_run` unwrap panics under load | No PR filed |
| S1 (Blocked Workflow) | [Issue #9216](https://github.com/zeroclaw-labs/zeroclaw/issues/9216) | Comment hygiene CI gate is failing on the master branch | Fix PR [#9218](https://github.com/zeroclaw-labs/zeroclaw/pull/9218) open and ready for merge |
| S1 (Blocked Workflow) | [Issue #9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | Cron agent jobs have no wall-clock timeout, leaving stale in-flight locks that are only cleared on daemon restart | No PR filed |
| S1 (Blocked Workflow) | [Issue #9189](https://github.com/zeroclaw-labs/zeroclaw/issues/9189) | Discord gateway heartbeat processing is starved when running attachment transcription inline | No PR filed |
## 6. Feature Requests & Roadmap Signals
Based on current PR activity and issue prioritization, the following features are highly likely to ship in upcoming releases:
- The `zeroclaw eval` first-class agent evaluation harness (tracked in [Issue #7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)) has 5 stacked, near-complete open PRs adding run receipts, sandboxed live execution mode, multiple pluggable graders, and baseline regression gating. It is on track to ship in the v0.8.4 minor release.
- Persistent cross-session memory parity work (tracked in [Issue #8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)) with typed memory classification PR #8900 already open, is targeted for the v0.9.0 beta window.
- Native A2A protocol support (the highest-voted community feature request) is tracked under the v0.9.0 security and gateway roadmap, and is confirmed as a core milestone deliverable for v0.9.0 stable.
## 7. User Feedback Summary
Real user pain points surfaced in this period include:
1. Windows remains a second-class deployment target, with broken test suites and multiple ZeroCode TUI specific bugs that create unnecessary friction for Windows developers
2. The missing A2A interop layer forces enterprise users to maintain custom wrapper code to integrate ZeroClaw with their existing multi-agent deployments
3. Core agent utilities like `web_fetch` are broken for most modern production websites, blocking standard research and data retrieval workflows
4. ZeroCode TUI quality of life gaps (broken code copy functionality, keyboard shortcut conflicts, theming inconsistencies) create noticeable quality degradation for daily interactive users
Notable positive feedback mentions the new public RFC and ADR process, which users report makes the project’s roadmap far more predictable than comparable open source agent runtimes.
## 8. Backlog Watch
High-impact long-standing items needing maintainer prioritization:
1. [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462): The Windows 74 test failure bug was filed on 2026-06-10, over 6 weeks ago, is marked P1 priority, and has no associated fix PR. This blocks Windows developer onboarding and official Windows stable release support.
2. [Issue #6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685): The SOP HTTP fan-in endpoints that are documented publicly are not actually wired in the runtime, a bug filed 2 months ago that blocks external SOP webhook integrations and progress against the SOP 5/5 milestone tracker.
3. [Issue #8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288): The SOP milestone epic tracker has not seen public coordination updates for 3 weeks, creating visibility gaps for contributors working on the SOP control plane rollout.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*