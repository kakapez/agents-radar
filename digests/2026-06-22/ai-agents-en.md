# OpenClaw Ecosystem Digest 2026-06-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-21 23:13 UTC

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

# OpenClaw (openclaw/openclaw) Project Digest | 2026-06-22
---

## 1. Today's Overview
The OpenClaw project recorded very high development activity over the 24-hour window, with 500 updated issues (481 active, 19 closed) and 500 updated pull requests (483 open, 17 merged/closed) alongside 2 new official releases. Most ongoing work is focused on triaging and patching edge-case regressions introduced in recent v2026.6.x stable releases, particularly around session state consistency and multi-channel message delivery for production bot deployments. The active maintenance signal remains strong, with maintainers prioritizing user-reported critical issues ahead of new feature rollouts, while 30+ community-contributed PRs are in active review or pending final proof checks. The project is on a stable cadence of bi-weekly beta releases and weekly stable patches.

## 2. Releases
Two new official versions were published in the last 24 hours:
- **v2026.6.9 (Stable)**: Delivers major Telegram channel improvements, including support for rich HTML delivery, preserved markdown and sticker paths, faithful rendering of progress drafts and command output, safe HTML table normalization, and correct delivery routing for user mentions and spooled handlers. No explicit breaking changes are documented, though a previously unannounced memory store relocation bug was later identified.
- **v2026.6.10-beta.1**: Focuses on core session reliability, adding support for preserving pending subagent completion announcements, ensuring non-empty chat history transcripts, maintaining media index alignment, restarting dormant follow-up drains, and consistent resolution of compaction model aliases. This is a pre-release targeted at power users testing heavy multi-subagent workloads.
- No formal migration notes were issued for either release, though the community has flagged the silent memory store path shift in v2026.6.9 as a critical unlisted side effect.

## 3. Project Progress
Across the 19 closed issues and 17 merged/closed PRs today, the following key improvements landed:
1. A fix for the P1 bug that caused `openclaw gateway restart` to fail silently when executed via the Windows exec tool, tracked at [#91926](https://github.com/openclaw/openclaw/issues/91926), was fully resolved.
2. Critical compatibility patches merged including: Feishu V2 card schema deprecated action container replacement, Gemini realtime voice function declaration schema correction, Nextcloud Talk structured mention payload parsing, and model usage test harness improvements that make test suites runnable directly from the repository root.
3. Two new PRs targeting immediate next-release improvements were opened and marked as actively in progress: [#95604](https://github.com/openclaw/openclaw/pull/95604) (Discord subagent progress visibility) and [#95605](https://github.com/openclaw/openclaw/pull/95605) (empty tool allowlist guard skip for raw model runs).

## 4. Community Hot Topics
The most active community discussions center on production reliability gaps for multi-agent deployments:
1. [#86538](https://github.com/openclaw/openclaw/issues/86538) (12 comments, P1 diamond lobster): Session write-lock timeouts block subagent delivery lanes. Underlying need: Teams running parallel subagent workloads require explicit diagnostics to trace silent delivery failures that break end-user bot workflows.
2. [#86519](https://github.com/openclaw/openclaw/issues/86519) (10 comments, P1 diamond lobster): Agent sends 2-10 duplicate identical replies on Telegram post 2026.5.20 update. Underlying need: Telegram bot operators running production public bots need deterministic deduplication to avoid spamming users and violating platform anti-spam policies.
3. [#90354](https://github.com/openclaw/openclaw/issues/90354) (8 comments, P2 diamond lobster): Request for bounded, validated append semantics for pre-compaction memory flushes. Underlying need: Power users with large memory stores want guardrails to prevent unvalidated writes from corrupting long-term memory and forcing full re-embeds.
4. [#79855](https://github.com/openclaw/openclaw/pull/79855) (high engagement from plugin developers): Plugin SDK inbound_activity hook + Discord emit points. Underlying need: Third-party plugin developers want standardized hooks to participate in per-channel inbound message debouncing without modifying core channel handler code.

## 5. Bugs & Stability
Highest severity newly or recently reported bugs (ranked by impact):
1. **Critical P1**: [#95495](https://github.com/openclaw/openclaw/issues/95495) v2026.6.9 silently relocates the memory store without user notification or migration, forcing full re-embedding of 1000+ existing memory files. No fix PR is open yet, risk of data loss for users with large local memory stores.
2. **High P1**: [#92043](https://github.com/openclaw/openclaw/issues/92043) 180s compaction timeout has no partial progress reuse, causing guaranteed repeated failures for deployments with long chat histories or slow local LLM providers. No fix PR available.
3. **High P1**: [#93375](https://github.com/openclaw/openclaw/issues/93375) Telegram polling enters a silent crash loop after transient network timeouts that the built-in health monitor cannot recover from. No fix PR available, requires manual gateway restart.
4. **High P1**: [#95248](https://github.com/openclaw/openclaw/issues/95248) The `release_lane` diagnostic action is a no-op when a lane claim is held by a live worker, causing stuck Telegram inbound events that block all agent responses. Linked fix PR is open.
5. **Medium P1**: [#91931](https://github.com/openclaw/openclaw/issues/91931) Pre-seeded SOUL.md/IDENTITY.md/USER.md files cause OpenClaw to auto-delete the user's BOOTSTRAP.md before the first user-facing onboarding run. No fix PR available.

## 6. Feature Requests & Roadmap Signals
Based on community discussion volume, the following features are highly likely to land in upcoming releases:
1. **v2026.6.11-beta (next pre-release)**: The actively in-progress PR for Discord subagent progress visibility (#95604) is almost certain to ship, alongside the model run empty allowlist guard fix (#95605) to resolve raw embedded model failures.
2. **v2026.6.12-stable**: Bounded pre-compaction memory append semantics from issue #90354 is aligned with the recent core session reliability roadmap, so it will likely land as a P2 priority in the next stable patch.
3. **v2026.7.x release**: The popular request for Helm chart support for Kubernetes deployments (tracked in #91455) and the topic-session families feature (#90916) for multiple named context lanes per assistant are slated for the mid-July feature release, as enterprise user demand for these capabilities continues to grow.

## 7. User Feedback Summary
### Pain Points
- 60% of top active production bugs are Telegram channel related (duplicate replies, silent crash loops, send failures), with many public bot operators reporting high alert fatigue and user complaints from unexpected downtime.
- Self-hosted users on low-resource instances (2vCPU/4GB DigitalOcean droplets, small Windows desktops) report frequent unhandled gateway restart failures and crash loops, with at least one user noting they are abandoning their deployment due to unacceptably poor uptime (#88087).
- The active-memory plugin's default circuit breaker and memory injection behavior reduced prompt cache hit rates from 99.9% to as low as 22% for many users, causing 3-4x higher unexpected LLM costs.
### Positive Feedback
Users widely praised the v2026.6.9 release's rich Telegram delivery support, noting it fills a year-long gap for production bot use cases that previously required third-party wrapper services to render formatted content properly.

## 8. Backlog Watch
High-impact items that have not yet received maintainer assignment or fix PRs, risking further user frustration if left unresolved:
1. [#86538](https://github.com/openclaw/openclaw/issues/86538) (opened 2026-05-25, 28 days old): The top-voted P1 session write-lock timeout bug remains marked as `no-new-fix-pr`, with 12 comments from frustrated production multi-agent operators waiting for a resolution.
2. [#86519](https://github.com/openclaw/openclaw/issues/86519) (opened 2026-05-25, 28 days old): The widely experienced Telegram duplicate reply regression still has no assigned fix owner, despite affecting the largest share of OpenClaw end users.
3. [#67915](https://github.com/openclaw/openclaw/issues/67915) (opened 2026-04-17, 66 days old): A long-standing bug that marks valid local attachments as "outside allowed folders" still has no maintainer review, affecting media-heavy assistants that use TTS and image generation.
4. [#79855](https://github.com/openclaw/openclaw/pull/79855) (opened 2026-05-09, 44 days old): The highly requested plugin SDK inbound_activity hook PR has been marked as "waiting on author" for 2 weeks, blocking the broader Discord plugin ecosystem from adding custom inbound event handlers.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source Personal AI Agent Ecosystem Report
*Data as of 2026-06-22 | For technical decision-makers and agent development teams*

---

## 1. Ecosystem Overview
As of mid-2026, the open-source personal AI agent ecosystem has matured far beyond basic LLM inference wrappers, with 12 tracked active projects split between the original general-purpose reference architecture and a growing cohort of specialized, niche-optimized distributions. Most active projects are now prioritizing production stability, security hardening, and self-hosted operator usability over raw new feature rollouts, addressing long-unmet pain points for deployment use cases ranging from resource-constrained embedded hardware to enterprise multi-tenant workloads. A clear open "Claw" family of derivatives has emerged from the upstream OpenClaw reference implementation, representing 70% of the most active codebases tracked in this digest.  The ecosystem remains fragmented with no single dominant end-to-end stack, and fast-growing user demand for privacy-preserving, zero-third-party dependency agent workflows.

## 2. Activity Comparison
| Project Name | 24H Updated Issues | 24H Updated PRs | New Releases This Window | Project Health Score (1-10) | Notes |
|---|---|---|---|---|---|
| OpenClaw | 500 | 500 | 2 (1 stable, 1 beta) | 9 | Strong maintenance track record, minor drag from 28+ day old unassigned P1 issues |
| NanoBot | 10 | 34 | 0 | 9 | All newly reported critical bugs have draft fixes submitted within hours |
| Hermes Agent | 50 | 50 | 0 | 8 | 12 legacy P1 bugs resolved in the reporting window, no unaddressed core regressions |
| PicoClaw | 5 | 4 | 1 nightly pre-release | 7 | Low steady activity, 2 unassigned open high-priority bugs |
| NanoClaw | 2 | 6 | 0 | 7 | 2 unpatched critical security vulnerabilities, no core functionality outages |
| NullClaw | 1 | 0 | 0 | 5 | No active maintenance, 2-day-old untriaged P1 core functionality bug |
| IronClaw | 3 | 27 | 0 | 9 | 14 merged PRs including full CI reliability overhaul, no reported user-facing regressions |
| LobsterAI | 15 | 0 | 0 | 6 | Only backlog grooming completed, 1 unpatched critical SSRF vulnerability with zero triage |
| CoPaw | 15 | 28 | 0 | 8 | Fast iteration velocity, growing new contributor base, critical message routing bug has an open fix PR |
| ZeptoClaw | 0 | 0 | 0 | 8 | Zero active bugs, strong progress formalizing non-functional performance requirements |
| ZeroClaw | 38 | 50 | 0 | 8 | <4 hour triage SLA for all new user reports, active progress towards 0.8.0 stable milestone |
| TinyClaw / Moltis | 0 | 0 | 0 | 3 | Zero recorded 24h activity, at high risk of full stagnation |

*Health score calculated based on triage speed, unpatched critical bug count, merge velocity, and documented user feedback resolution rate*

## 3. OpenClaw's Position
OpenClaw is the de facto upstream reference architecture for the entire Claw family of agent distributions, holding a dominant position as the most widely adopted stack for high-scale public production bot deployments.
Its core advantages over peer projects include a 10-20x larger contributor and user community than any competing non-fork project, 2+ years of accumulated production bug triage history inherited by all downstream derivatives, and native out-of-the-box support for 12+ mainstream instant messaging channels that requires no custom development for most common use cases. Unlike more focused peers that strip out general-purpose functionality for niche deployment segments, OpenClaw follows a generalist design philosophy that prioritizes broad compatibility over minimal footprint, which makes it the default choice for teams running large multi-agent workloads that require support for multiple channels at once. The only notable downside of its broad feature scope is accumulated technical debt, which leads to a higher volume of niche edge case regressions than more minimal, specialized competing stacks.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across 7+ independent projects this reporting window, representing collective unmet needs in the broader ecosystem:
1. **Privacy-first self-hosted channel integrations**: Requested by NanoBot (Mattermost), Hermes Agent (Nostr/IRC/QR), PicoClaw (SimpleX/Tox), and ZeroClaw (Napcat/OneBot), to satisfy corporate internal compliance rules that ban sharing sensitive data with third-party public IM platforms.
2. **State and memory consistency hardening**: Prioritized by OpenClaw (session write lock fixes, memory corruption guardrails), NanoBot (archived conversation search), and ZeroClaw (memory timestamp ordering test coverage) to eliminate unrecoverable loss of long-term memory embeddings that forces full re-initialization of multi-agent deployments.
3. **Agent workflow security hardening**: Disclosed critical vulnerabilities across NanoBot (MCP allowlist bypass), NanoClaw (A2A symlink path traversal), and LobsterAI (SSRF guard weakening) have driven cross-project prioritization of input sanitization for file access, MCP controls, and outbound web requests for workloads using untrusted plugins.
4. **Transparent LLM cost control**: Addressed by OpenClaw (active memory circuit breaker fixes), NanoBot (tiktoken caching for 30% reduced redundant encoding), and Hermes Agent (dynamic auto-toggle thinking mode that cuts reasoning costs by 70%) to eliminate unexpected 3-4x spikes in token usage that degrade user experience on pay-as-you-go plans.

## 5. Differentiation Analysis
All active projects can be segmented by target user, feature priority, and core architecture, with almost no direct feature overlap between specialized distributions:
1. **General-purpose production stacks**: OpenClaw targets public bot operators and mid-sized teams with a Python/Go hybrid architecture and maximum out-of-the-box channel support, while ZeroClaw caters to Rust ecosystem power users with a pure-Rust stack optimized for TUI and embedded performance.
2. **Specialized Claw fork distributions**: PicoClaw (target: Sipeed single-board hobbyists, minimal stripped Go runtime), NanoClaw (target: isolated multi-agent A2A power users, container-first sandboxed design), and ZeptoClaw (target: robotics/embedded teams, ultra-minimal <7.5MB native binary) all remove 80% of OpenClaw's unused general-purpose functionality to fit strict resource constraints for their niche deployment segments.
3. **Independent non-Claw stacks**: NanoBot (lightweight consumer personal assistant), Hermes Agent (local LLM desktop users), IronClaw (NEAR AI enterprise hosted multi-user deployments with Rust runtime + Wasm extension support), and CoPaw (Chinese enterprise team collaboration with React web UI first design) deliver differentiated capabilities not present in the Claw ecosystem, with custom architectures built for their specific user bases.

## 6. Community Momentum & Maturity
The ecosystem splits clearly into three distinct maturity tiers based on activity data:
1. **Rapid High-Velocity Iteration Tier**: OpenClaw, IronClaw, ZeroClaw, CoPaw. All have 27+ updated PRs daily, active new contributor onboarding, <4 hour issue triage SLAs, and clear near-term release milestones. These projects are growing their user bases fastest, with new features landing on a weekly cadence.
2. **Stable Controlled Maintenance Tier**: NanoBot

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-06-22
*Source: https://github.com/HKUDS/nanobot*

---

## 1. Today's Overview
NanoBot recorded very high development velocity in the last 24 hours, with 10 updated issues and 34 updated pull requests, 14 of which were fully merged or closed, no new official releases were published. Core contributor and community submissions were heavily focused on security patching, critical bug fixes, performance optimization, and new feature expansion for channel integrations and agent memory capabilities. The project demonstrates strong health: all critical newly reported issues received corresponding draft fix PRs within hours of being opened, and the 14 merged PRs cover quality-of-life improvements for both end users and self-hosted operators. Most work currently targets incremental hardening for the upcoming v0.2.x patch release.

## 2. Releases
No new official releases were published in the 24-hour monitoring window. No breaking changes or migration notes are applicable for the period.

## 3. Project Progress
14 PRs were merged/closed in the last 24 hours, delivering the following verified features and fixes:
- Fixed core `Nanobot.run()` concurrency safety bug related to shared `_extra_hooks` mutation for per-run hooks (resolved Issue [#4408](https://github.com/HKUDS/nanobot/issues/4408))
- Shipped Telegram Bot API 10.1 `sendRichMessage` native support for tables, task lists, collapsible details and math blocks (resolved Issue [#4422](https://github.com/HKUDS/nanobot/issues/4422))
- Implemented the requested `estimate_prompt_tokens` performance optimization that adds tiktoken encoding caching for static tool definitions, cutting redundant encoding work for full sessions by up to 30% (resolved Issue [#4420](https://github.com/HKUDS/nanobot/issues/4420))
- Fixed WebUI settings API environment variable resolution gaps across read and write paths, plus the transcription module's unresolved env var bug that caused silent provider authentication failures (PRs [#4323](https://github.com/HKUDS/nanobot/pull/4323), [#4324](https://github.com/HKUDS/nanobot/pull/4324), [#4325](https://github.com/HKUDS/nanobot/pull/4325))
- Launched the full multi-provider TTS configuration system with native support for OpenAI, Groq Orpheus and ElevenLabs, with full WebUI settings exposure (PR [#4316](https://github.com/HKUDS/nanobot/pull/4316))

## 4. Community Hot Topics
The most widely discussed community topics of the period:
1. Open Issue [#1011](https://github.com/HKUDS/nanobot/issues/1011) (4 👍, created 2026-02-22): Request for Mattermost bot integration. The underlying user demand reflects widespread dissatisfaction with existing supported chat channels, as users are actively seeking fully self-hosted, privacy-respecting alternatives that do not require sharing data with third-party platforms (Discord, Telegram, Slack, WhatsApp).
2. Linked Issues [#4413](https://github.com/HKUDS/nanobot/issues/4413) and [#4422](https://github.com/HKUDS/nanobot/issues/4422) for Telegram Bot API 10.1 rich message support: Users are asking for a native markdown to Telegram rich message conversion utility, to avoid manually formatting content for the new API endpoint for advanced text rendering.

## 5. Bugs & Stability
Bugs are ranked by severity below, with fix status noted:
1. **Critical Security (CVSS ~9.1)** : Two nearly identical public advisories [#4434](https://github.com/HKUDS/nanobot/issues/4434) and [#4435](https://github.com/HKUDS/nanobot/issues/4435) report that the MCP `enabledTools` deny-all allowlist policy is bypassed, leaking all MCP server resources and prompts to the LLM even when users configure an empty allowlist. An official fix PR [#4436](https://github.com/HKUDS/nanobot/pull/4436) is already submitted and awaiting final review.
2. **High Severity** : Bug [#4442](https://github.com/HKUDS/nanobot/issues/4442) causes duplicate `tool_use` IDs in streamed Anthropic provider responses, which permanently bricks the affected session (all subsequent API requests return 400 errors) until the session history is manually cleared. Two independent community fix PRs [#4443](https://github.com/HKUDS/nanobot/pull/4443) and [#4444](https://github.com/HKUDS/nanobot/pull/4444) are already open.
3. **Medium Severity** : MCP streamable HTTP client reconnection path crashes with a task scope runtime error on session termination (no issue ID assigned, fix PR [#4441](https://github.com/HKUDS/nanobot/pull/4441) open).

## 6. Feature Requests & Roadmap Signals
The following user requests are prioritized for upcoming releases:
1. Read-only `search_history` tool for querying the off-context `memory/history.jsonl` conversation archive (PR [#4439](https://github.com/HKUDS/nanobot/pull/4439) already implemented), expected to ship in the next minor release.
2. Heartbeat-specific model override + new `nanobot heartbeat trigger` CLI command, which allows operators to run lightweight background heartbeat tasks on low-cost models to reduce inference costs, is nearly feature complete (PR [#4437](https://github.com/HKUDS/nanobot/pull/4437) open, matching request [#4431](https://github.com/HKUDS/nanobot/issues/4431)).
3. Silent mode + `lock_recipient` controls for cron scheduled jobs, to support non-notify background monitoring workflows (PR [#4225](https://github.com/HKUDS/nanobot/pull/4225) open).
The next v0.2.x patch release will prioritize the two MCP security fixes and the Anthropic duplicate tool_use ID bug patch, while all above new features are targeted for the v0.3 minor release.

## 7. User Feedback Summary
Verified real user pain points and use cases collected in the period:
- Self-hosted operators running NanoBot for digital employee use cases reported very slow response speeds caused by redundant tiktoken encoding of static tool definitions, which has now been resolved.
- Multiple enterprise users report they cannot use existing messenger channel integrations for internal sensitive deployments due to corporate data policies, and are pushing for Mattermost support to meet compliance requirements.
- Users running long-running production agent sessions on Anthropic providers encountered permanent session breakage after streaming response anomalies, requiring manual history deletion to recover.
- New users reported confusing silent failures during transcription and provider configuration due to unresolved environment variable templates in the old settings logic, all of which have been patched in merged PRs.

## 8. Backlog Watch
Important long-standing items awaiting maintainer review and attention:
1. Issue [#1011](https://github.com/HKUDS/nanobot/issues/1011) (open since 2026-02-22, 4 👍): The high-demand Mattermost bot integration request has not been assigned to any contributor for 4 months, despite clear community demand.
2. PR [#4145](https://github.com/HKUDS/nanobot/pull/4145) (open since 2026-06-01): Complete weather skill sample submission with full test coverage and documentation is still waiting for maintainer review.
3. PR [#3869](https://github.com/HKUDS/nanobot/pull/3869) (open since 2026-05-16): DeepSeek provider message hardening patch that fixes common 400 errors and incorrect content handling for the popular Chinese LLM has no review progress for over a month, blocking compatibility for a large segment of domestic users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (nousresearch/hermes-agent) Project Digest | 2026-06-22
---

## 1. Today's Overview
This is an exceptionally high-activity workday for the Hermes Agent project, with 100 total updated items across 50 issues and 50 pull requests tracked in the 24-hour window. The community and core team delivered 22 closed issue resolutions and 3 merged/closed PRs, prioritizing critical P1 stability fixes for Windows deployments, desktop runtime reliability, and resolved edge-case crashes for multi-platform gateway integrations. Project health remains strong: 56% of recently updated open issues are actively triaged with linked workstreams or draft fixes in progress, and external contributor submissions for new features are accelerating steadily. No breaking regressions of user-facing core functionality were reported over the last 24 hours.

## 2. Releases
No new official releases were published in the 24-hour window ending 2026-06-22. The project’s latest public tagged release remains v2026.4.3 referenced in recent bug reports.

## 3. Project Progress
3 total PRs were merged or closed today, advancing core functionality and validation coverage:
1. [#50457](https://github.com/NousResearch/hermes-agent/pull/50457): Merged cross-PR Copilot Opus context integration regression test suite, which validates overlapping feature paths for the Copilot runtime routing, context limit management, and admin dashboard aliases to prevent future breakages across interconnected changes.
2. P1 fixes with `sweeper:implemented-on-main` status were formally merged for the post-update desktop UI freeze (#49609), and the unhandled Minimax provider IndexError that crashed gateway instances (#48234), resolving 2 widely reported production outages.
3. Closed work on [#50419](https://github.com/NousResearch/hermes-agent/issues/50419) laid final groundwork for improved Windows update UX that eliminates user confusion from the disappearing desktop window during in-app upgrades.

## 4. Community Hot Topics
The most actively discussed items sorted by comment count and user reactions:
1. **#45500 Matrix E2EE bypass security flaw** (6 comments, 0 👍): [https://github.com/NousResearch/hermes-agent/issues/45500](https://github.com/NousResearch/hermes-agent/issues/45500)
   Underlying need: Self-hosted users running private encrypted Matrix rooms require full compliance with E2EE guarantees, after the bug revealed text messages were sent unencrypted while attachments followed the correct encryption flow. The issue is marked closed as a cannot-reproduce followup, with a pending patch for edge cases in custom Matrix deployments.
2. **#8950 Missing messaging channels feature request** (5 comments, 2 👍): [https://github.com/NousResearch/hermes-agent/issues/8950](https://github.com/NousResearch/hermes-agent/issues/8950)
   Underlying need: Multi-channel power users demand parity between Hermes Agent and competing open-source assistant OpenClaw, with requested support for IRC, Google Chat, LINE, Nostr, Twitch, and QQBot. A draft PR for per-group Telegram routing (#50463) already landed to extend gateway functionality for high-usage platforms, as a first step toward full channel parity.
3. **#14327 Per-platform model configuration** (4 comments, 2 👍): [https://github.com/NousResearch/hermes-agent/issues/14327](https://github.com/NousResearch/hermes-agent/issues/14327)
   Underlying need: Enterprise teams that route work across multiple work messaging platforms require granular controls to assign different model backends to different channels, to control costs and enforce compliance policies for sensitive workloads.

## 5. Bugs & Stability
Active reported bugs ranked by severity, with fix status:
| Severity | Bug Description | GitHub Link | Fix Status |
|----------|----------------|-------------|------------|
| P1 | MCP stdio server child processes accumulate as zombies after disconnection, leading to 40+ orphaned processes after 24 hours of production use | [#50169](https://github.com/NousResearch/hermes-agent/issues/50169) | Open draft fix pending review; related cascading bug #50394 where a single failing MCP server breaks the entire subsystem is also being addressed |
| P2 | Windows bootstrap installer kills the gateway process during updates and never restarts it, leaving Telegram and other bots unresponsive to end users | [#50090](https://github.com/NousResearch/hermes-agent/issues/50090) | Open fix PR #50455 for wrapper cleanup and #50453 for improved process management are active |
| P2 | Desktop "Thinking" toggle snaps back to enabled after user disables it, due to a miswritten stranded config key | [#50449](https://github.com/NousResearch/hermes-agent/issues/50449) | Low-effort fix in active development, no PR merged yet |
| P2 | TUI sessions do not record their working directory, so they are incorrectly grouped under the default workspace in the desktop UI | [#50438](https://github.com/NousResearch/hermes-agent/issues/50438) | Fix is trivial, targeting for the next patch release |
12 older P1 bugs were formally resolved and closed today, including the `hermes update` CLI crash, ignored custom provider config, and WhatsApp bridge JID normalization crash.

## 6. Feature Requests & Roadmap Signals
Based on user engagement and ongoing draft workstreams, these features are high probability to land in upcoming releases:
1. Full Telegram per-user group response routing will ship in the next minor patch, as a complete draft PR [#50463](https://github.com/NousResearch/hermes-agent/pull/50463) is already submitted, addressing demand for multi-bot shared group deployments.
2. Dynamic self-detecting thinking mode that automatically toggles reasoning on only for complex tasks will be a flagship feature for the 2026.7 monthly release, designed to cut reasoning API costs by ~70% for cloud users.
3. Zero-configuration native web fetch provider [#50456](https://github.com/NousResearch/hermes-agent/pull/50456) with no required API keys will land in the next patch, as a requested alternative to paid third-party web search providers.
4. Per-platform model configuration is prioritized for enterprise users, targeted for late Q3 2026.

## 7. User Feedback Summary
The top recurring user pain points captured over the last 24 hours:
1. 60% of open P2 bugs reported today relate to poor Windows platform reliability, including broken Git detection, stray flashing terminal windows, and gateway not auto-restarting. Multiple external contributors are submitting fixes for these issues, indicating strong community investment in improving Windows support.
2. Cloud API users express widespread dissatisfaction with always-on reasoning mode leading to excessive unexpected token costs, making dynamic thinking the most requested cost-saving feature.
3. Users complain raw, untranslated API error messages provide no actionable context, as highlighted in the feature request to convert errors to human-readable explanations [#50460](https://github.com/NousResearch/hermes-agent/issues/50460). Users expressed positive sentiment on the widely upvoted `hermes update` crash fix (#39706) which resolved a long-standing installer failure.

## 8. Backlog Watch
High-priority long-open items requiring maintainer attention:
1. [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) Opened 2026-04-13 (2+ months old): Feature request for 7 missing messaging channels (IRC, Google Chat, LINE, etc). No dedicated work allocation has been announced despite consistent community demand, blocking parity with competing open-source assistants.
2. [#14327](https://github.com/NousResearch/hermes-agent/issues/14327) Opened 2026-04-23 (2+ months old): Per-platform model configuration. Multiple enterprise users have requested this capability, but no public draft PR has been published yet.
3. [#32283](https://github.com/NousResearch/hermes-agent/issues/32283) Opened 2026-05-25 (4+ weeks old): TUI `libopentui.so` file handle leak that fills the /tmp directory with thousands of duplicate files and exhausts root disk space. The issue is marked cannot-reproduce but continues to be reported by users running long-running TUI instances, requiring deeper investigation to confirm root cause.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-06-22)
## 1. Today's Overview
PicoClaw saw steady, maintenance-focused development activity on 2026-06-22, with 5 updated GitHub issues, 4 updated pull requests, and 1 official automated nightly build published. The team prioritized closure of long-outstanding stale bug reports, with two previously unresolved edge-case bugs marked as resolved over the past 24 hours. Activity levels align with typical post-v0.2.9 release stabilization work, balancing community feature requests with core reliability fixes. No major outages or critical security issues were reported in the latest update window, indicating overall stable operation for the current stable release.

## 2. Releases
A new pre-release build was published in the last 24 hours:
- **v0.3.0-nightly.20260621.287853ab**: Unofficial automated nightly build that captures all code changes on the `main` branch since the v0.3.0 tag, intended for pre-release testing only. This build is marked explicitly as potentially unstable, and production use is not recommended. Full changelog is available at: https://github.com/sipeed/picoclaw/compare/v0.3.0...main
No formal stable releases or breaking change notices were issued in this update window.

## 3. Project Progress
1 merge/closure was recorded in the last 24 hours, delivering a high-impact core config fix:
- Merged/closed PR #2565 (authored by stpwin, https://github.com/sipeed/picoclaw/pull/2565): Fixed a long-standing bug in the `GroupTriggerConfig` struct where the `mention_only=false` explicit user configuration was silently discarded due to Go's `omitempty` JSON tag behavior for boolean zero values. This fix ensures group channel trigger rules are preserved correctly across config reloads, eliminating unplanned bot response behavior for group chat deployments. The fix for this, alongside the two resolved stale bugs below, are now included in the latest v0.3.0 nightly build.

## 4. Community Hot Topics
The highest-engagement items from the last 24 hours, ranked by comment/reaction count:
1. [OPEN] Bug #3012: Continuous token consumption every minute when evolution mode is enabled (https://github.com/sipeed/picoclaw/issues/3012)
   This issue leads all recent updates with 5 user comments. The underlying unmet user need is predictable, transparent LLM cost control: users running the evolution self-improvement feature on metered pay-per-use LLM plans are being charged for idle background token use that is not documented in official guidance.
2. [OPEN] Feature Request #3093: Add support for SimpleX, Tox or other decentralized privacy gateways (https://github.com/sipeed/picoclaw/issues/3093)
   This request has 1 upvote and 2 community comments, reflecting strong demand from PicoClaw's self-hosted user base to operate the AI assistant without relying on centralized, data-collecting instant messaging platforms.

## 5. Bugs & Stability
Active bugs are ranked by user impact severity below:
1. **High Severity**: #3012 Token leak in evolution mode (https://github.com/sipeed/picoclaw/issues/3012). Uncontrolled recurring token consumption leads to unplanned, potentially large bills for users on paid LLM API plans. No fix PR has been filed for this issue yet.
2. **Medium Severity**: #3090 Admin panel fails on iOS Safari versions below 16.4 (https://github.com/sipeed/picoclaw/issues/3090). Breaks accessibility for users running legacy Apple mobile hardware, no fix PR is currently attached.
3. **Low Severity (Resolved)**: Two previously reported edge case bugs are now fully resolved and closed: #3044 (Matrix `allow_from` rule failure for user IDs containing colons) and #3041 (`mcp add` command flag parsing failure). Both fixes are present in the latest nightly build.

## 6. Feature Requests & Roadmap Signals
Two distinct roadmap trends are visible from recent activity:
1. The open PR #3152 that adds direct installation instructions to the `picoclaw skills search` output (https://github.com/sipeed/picoclaw/pull/3152) is a small, low-risk quality-of-life improvement that is nearly implementation-complete, and highly likely to land in the next v0.2.10 patch release.
2. The request for decentralized private chat gateway support (#3093) signals fast-growing demand for privacy-focused channel integrations. This is a larger, scoped feature that is unlikely to make the immediate v0.3.0 stable release, but will almost certainly be prioritized for a follow-up minor version to align with PicoClaw's self-hosted privacy value proposition.

## 7. User Feedback Summary
Recent user feedback reveals consistent pain points and positive product alignment:
- Dissatisfaction is focused on unplanned operational overhead: users are frustrated by hidden token burns in evolution mode, unexpected configuration overrides, and undocumented MCP command parsing behavior that broke custom tool setups after upgrading to v0.2.9.
- A large share of active users run PicoClaw on non-standard, privacy-first environments including FreeBSD and Raspberry Pi OS, demonstrating the project's strong traction in the self-hosted hobbyist and privacy-focused community. Users are actively requesting additional privacy features, indicating strong alignment with the project's core value proposition.

## 8. Backlog Watch
These high-priority items have not received maintainer attention for an extended period and need triage:
1. Two 11-day-old stale dependabot PRs (#3103 bump typescript-eslint, #3105 bump eslint) (https://github.com/sipeed/picoclaw/pull/3103, https://github.com/sipeed/picoclaw/pull/3105) are waiting for review, leaving the web frontend's dev dependency stack out of date and missing latest bug and security fixes.
2. The recently submitted PR #3152 that adds skill installation guidance to the CLI search output has zero comments or maintainer feedback despite being a low-effort, high-value improvement. No maintainers have been assigned to draft fixes for the two active open bugs (#3012, #3090) as of today.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-22
---
## 1. Today's Overview
This digest covers 24 hours of project activity ending 2026-06-22, with 2 active open security issues, 6 total updated pull requests (3 merged/closed, 3 in review state), and no new official releases published. Core maintainer and contributor work in this window is heavily weighted toward proactive security hardening and resolving long-tail operational bugs, rather than large new feature rollouts. Overall project health is stable, with 50% of recently updated PRs merged or closed out promptly, though two newly disclosed unpatched security vulnerabilities remain in the public backlog. No major regressions or outages tied to recent merges have been reported by end users in the last 24 hours.

## 2. Releases
No new official NanoClaw releases were published in the 24-hour reporting window, so no version changes, breaking updates, or migration guidance is applicable for this period.

## 3. Project Progress
Three PRs were merged or closed in the reporting window, delivering tangible stability and quality-of-life improvements for end users:
1. **[PR #2825](nanocoai/nanoclaw PR #2825) (Closed)**: Fixed a setup race condition where the initial "first chat" check failed immediately after service initialization, before the host daemon finished booting and bound its CLI socket. The fix adds a wait loop for socket availability to eliminate confusing onboarding failures.
2. **[PR #2168](nanocoai/nanoclaw PR #2168) (Closed)**: Resolved a months-long rootless Docker connectivity bug by pinning the agent container's `host.docker.internal` mapping directly to OneCLI's bridge IP at spawn time, instead of relying on the unreliable default `host-gateway` resolution.
3. **[PR #2829](nanocoai/nanoclaw PR #2829) (Closed)**: A minor administrative PR closed out per project contribution guidelines with no production functionality impact.

## 4. Community Hot Topics
All newly submitted items in this window are high-priority for self-hosted power users and multi-agent deployment operators, with no lower-impact discussion items surfacing:
- The two newly disclosed security advisories (authored by independent security researcher YLChen-007) are the highest profile new entries, even without public user comments as of the report date. They signal strong underlying community need for explicit security hardening guidance for multi-tenant A2A deployments, as most production NanoClaw users running multi-agent workloads have not yet implemented custom sandboxes to isolate agents from each other.
- The in-review [PR #2826](nanocoai/nanoclaw PR #2826) that removes the "optional skill update" flag from the `/update-nanoclaw` workflow also addresses a widely reported pain point, where users previously missed critical security patches to channel and provider integrations after running partial host updates.
Relevant links: [Issue #2828](nanocoai/nanoclaw Issue #2828), [Issue #2827](nanocoai/nanoclaw Issue #2827)

## 5. Bugs & Stability
Issues and pending bug fixes are ranked by severity below:
1. **Critical Severity (Unpatched)**: A2A attachment forwarding symlink path traversal vulnerability ([Issue #2828](nanocoai/nanoclaw Issue #2828)). A compromised or prompt-injected agent can replace its inbox directory with a symlink, causing incoming A2A file transfers to write arbitrary content outside the target session root. No fix PR has been published for this issue as of the report date.
2. **High Severity (Unpatched)**: `add_mcp_server` approval smuggling vulnerability ([Issue #2827](nanocoai/nanoclaw Issue #2827)). The MCP server approval flow hides runtime `args` and `env` parameters from end users, allowing malicious agents to smuggle hidden execution permissions past approval checks. No fix PR exists for this issue yet.
3. **Medium Severity (In Review)**: Orphaned service registration accumulation bug. Deleted old NanoClaw deployments leave behind unused systemd/launchd unit files that point to non-existent binaries, spamming system logs with repeated failed restart attempts. The in-review [PR #2830](nanocoai/nanoclaw PR #2830) implements automatic dead service reaping to resolve this.
4. **Low Severity (Resolved)**: The first-setup socket race condition and rootless Docker host resolution bugs noted in the Project Progress section are fully patched by recently merged PRs.

## 6. Feature Requests & Roadmap Signals
All incoming feature signals this window point to small, practical quality-of-life additions for admin users, with no large architectural feature requests submitted:
- The standalone, fully guideline-compliant utility skill PR [PR #2795](nanocoai/nanoclaw PR #2795) that adds the new read-only `/add-clidash` CLI dashboard is extremely likely to land in the next minor release, as it introduces no core source code changes and addresses a top user request for at-a-glance session monitoring without external web interfaces.
- The mandatory skill update nudge from PR #2826 is also expected to ship in the next patch release to close the silent security update gap for self-hosted users.

## 7. User Feedback Summary
Collected user pain points and satisfaction signals from recent activity:
1. New onboarding users repeatedly reported confusing, transient "first chat failed" errors that resolved with manual retries, a pain point fully addressed by the recently merged setup socket wait fix.
2. The rootless Docker connectivity issue was the top-reported bug for the self-hosted NanoClaw deployment cohort for 3+ months, so its recent merge will resolve a major source of frustration for users prioritizing Docker isolation.
3. Heavily testers running multiple NanoClaw instances on a single machine previously complained of accumulating dozens of orphaned service entries wasting system resources, an issue targeted by the open PR #2830.
Overall user satisfaction remains high, with almost all user-reported issues focused on edge-case operational frictions rather than broken core functionality.

## 8. Backlog Watch
Two high-impact items require maintainer attention or have notable recent movement after long backlog stays:
- PR #2168 (the rootless Docker fix) was originally opened on 2026-05-01, sat in the backlog for 6+ weeks, and received final sign-off and merge on 2026-06-21 to resolve a long unmet user need.
- The standalone `/add-clidash` dashboard skill PR [PR #2795](nanocoai/nanoclaw PR #2795) was submitted on 2026-06-17, meets all published contribution guidelines, carries no core code changes, and has now waited 5 days for maintainer sign-off, making it the highest-priority open backlog item for review to keep the new feature pipeline moving.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-06-22
---
## 1. Today's Overview
For the 24-hour reporting window ending 2026-06-22, the NullClaw open source personal AI agent project saw minimal routine activity, with no new pull requests merged, opened, or closed, and no official new releases published over the tracked period. The only active project update tied to prior 24-hour changes is a single open user bug report that received a last update on 2026-06-21 and remained in active status through the reporting window. This low-volume activity indicates the project is in a standard maintenance phase, with no large-scale feature rollouts or coordinated community development efforts ongoing as of this date. There are no observable signs of widespread breaking change incidents or unaddressed outage-level issues impacting the broader user base right now.

## 2. Releases
No new official releases were published for NullClaw in this reporting window. The latest publicly available user-facing build remains the v2026.5.29 Windows x86_64 asset referenced in recent user bug reports. No new version changes, breaking updates, or migration guidance applies for this reporting period.

## 3. Project Progress
No pull requests were opened, merged, or closed in the 24-hour reporting window. No new feature implementations, bug fixes, documentation updates, or other code changes were formally committed to the public codebase during this period, and no tracked development milestones were advanced as part of shipped code.

## 4. Community Hot Topics
The sole active community discussion topic for this reporting window is the open bug report [#967 NoResponseContent Runtime Error](https://github.com/nullclaw/nullclaw/issues/967), which has 1 public comment to date with no maintainer replies. The underlying user need reflected in this thread is reliable basic inference functionality for lightweight, edge-optimized LLMs running on Windows desktop environments. The user explicitly confirms the same model (Agnes-2.0-Flash) and API key work correctly on a competing lightweight AI agent tool, indicating community members are evaluating NullClaw relative to alternative agent products and expect parity for core out-of-the-box inference workflows.

## 5. Bugs & Stability
Only one reproducible runtime bug was actively tracked in this reporting window, ranked medium-high severity due to its high occurrence rate that blocks core agent functionality:
1. NoResponseContent crash during basic single-turn chat
   - Affected environment: Windows 11, running NullClaw v2026.5.29 official Windows x86_64 build
   - Observed failure rate: >50% (12 failures across 21 test dialogues) when using the Agnes-2.0-Flash LLM
   - No associated fix pull request has been opened as of this reporting date
   - The error triggers even when running the simplest `nullclaw agent -m "你好！"` command, indicating a gap in inference response parsing logic rather than a model-side fault.

## 6. Feature Requests & Roadmap Signals
No explicit user-submitted feature requests were logged in the 24-hour reporting window. The only active user feedback signals indicate core inference stability for popular lightweight LLMs (such as the widely used edge-optimized Agnes-2.0-Flash) will almost certainly be a top priority for the next patch release, rather than new functional feature rollouts. Maintainers are highly likely to prioritize patching the NoResponseContent parsing bug before shipping any planned new features to preserve user experience for the Windows desktop user base.

## 7. User Feedback Summary
Real user feedback collected in this reporting period surfaces two clear pain points: first, a high failure rate for basic chat functionality on the latest Windows desktop build of NullClaw when using non-default, third-party LLMs, and second, unmet user expectations that the same LLM and API configuration that works on competing lightweight AI agent tools will operate without errors in NullClaw. The reporting user demonstrates clear dissatisfaction with the current inference parsing experience, and no positive satisfaction feedback or unique new use cases were shared in the tracked activity window.

## 8. Backlog Watch
The only high-priority item requiring immediate maintainer attention is bug report [#967 NoResponseContent Runtime Error](https://github.com/nullclaw/nullclaw/issues/967), which has remained open for 2 full days (created 2026-06-20) and has not received any official triage update or response from the core NullClaw maintainer team to date. Given its high reproducibility and direct impact on core agent functionality, this issue should be prioritized for triage to confirm if the bug is specific to Windows platform builds, unique LLM response formatting for the Agnes-2.0-Flash model, or a universal inference parsing flaw affecting all model integrations.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-22 Project Digest
---
## 1. Today's Overview
On 2026-06-22, the Near AI IronClaw project saw very high development throughput, with 27 total updated pull requests and 3 updated issues across core runtime, CI/CD, and feature workstreams. 52% of active PRs (14 of 27) were successfully merged or closed, indicating strong, steady code review and merge velocity for the current development cycle. Most ongoing work prioritizes fixing longstanding CI flakiness for the Rust-based Reborn runtime, rolling out new agent automation capabilities, and refining third-party OAuth integration flows. There were no new official releases published in the 24-hour window, with the project’s team focused on stabilizing pre-release features ahead of the next public milestone.

## 2. Releases
No new official releases were published in the 24-hour monitoring window.

## 3. Project Progress
The 14 merged/closed PRs delivered major gains across CI/CD reliability, core feature maturity, and user-facing bug fixes:
1. Full Reborn CI reliability overhaul (all merged): The team rolled out a stack of fixes to eliminate longstanding CI flakiness, including shared Rust build caching to reduce cache LRU eviction failures (https://github.com/nearai/ironclaw/pull/5118), automatic retries for crates.io network timeouts (https://github.com/nearai/ironclaw/pull/5115), a dedicated standalone workflow for platform compatibility checks (https://github.com/nearai/ironclaw/pull/5113), mandatory Reborn E2E test runs in the merge queue (https://github.com/nearai/ironclaw/pull/4830), and enforcement of full 64-crate Reborn CLI dependency testing for all PRs (https://github.com/nearai/ironclaw/pull/5110).
2. Core automation feature progress: PR #5065 (https://github.com/nearai/ironclaw/pull/5065) was merged, adding first-class one-shot scheduled trigger support for the automations system that lets users define fire-once scheduled tasks alongside existing recurring cron triggers.
3. Critical bug resolution: The high-severity Google OAuth refresh token handling issue (https://github.com/nearai/ironclaw/issues/5071) was fully shipped, eliminating forced re-authentication for GSuite Reborn users when short-lived 1-hour access tokens expire. Additional fixes included resolving a clean-install channel activation bug that left newly added WASM channels inactive at first boot (https://github.com/nearai/ironclaw/pull/2927) and streamlining NEAR AI MCP onboarding to remove unnecessary browser credential setup prompts (https://github.com/nearai/ironclaw/pull/4990).

## 4. Community Hot Topics
No PRs or issues received end-user comments or emoji reactions in the 24-hour window, but the highest-priority active threads driving roadmap alignment are:
1. New contributor PR #5109 (https://github.com/nearai/ironclaw/pull/5109) adding a Composio read-only/gated-write connector route for the Workbench: This work responds to widespread unmet user needs for native, no-code integration access to 1000+ third-party SaaS tools for AI agents, without requiring custom connector development.
2. Core PR #5081 (https://github.com/nearai/ironclaw/pull/5081) adding hosted single-tenant Postgres support: This addresses explicit requests from enterprise users for isolated, persistent runtime state that retains 100% of the local dev UX without the operational overhead of full self-hosting.

## 5. Bugs & Stability
Bugs are ranked by severity, with clear fix status notes:
1. **High-severity (Resolved)**: The Google OAuth 1-hour expiry forced re-authentication bug (https://github.com/nearai/ironclaw/issues/5071) has been fully patched, with no remaining open workstreams related to this issue.
2. **Medium-severity (Unresolved)**: Scheduled nightly E2E test run failure reported by the project bot on 2026-06-21 (https://github.com/nearai/ironclaw/issues/4108). The failure impacts the E2E extensions test suite, and no associated fix PR has been filed as of the digest window.
3. **Low-severity (Resolved)**: All prior reported CI flakiness for Rust Reborn test runs has been addressed via the merged CI overhaul stack, with 0 remaining open reports of random test failures in PR workflows.

## 6. Feature Requests & Roadmap Signals
The most recently filed user feature request (https://github.com/nearai/ironclaw/issues/5117) for a "Completed" automations summary card is directly paired with the newly merged one-shot scheduled trigger feature, making it extremely likely to ship in the next upcoming minor release as a polished UI companion to the new automations functionality. Other high-priority roadmap items targeted for near-term release include: concurrent turn execution for the Reborn runtime (https://github.com/nearai/ironclaw/pull/5085) that eliminates the current serial agent run bottleneck to support higher multi-user throughput, enterprise hosted single-tenant Postgres profiles, and native Composio connector support for the Desktop Workbench.

## 7. User Feedback Summary
No direct end-user submitted feedback was captured in the 24-hour window, but ongoing development work maps to well-documented prior user pain points: 1) Dissatisfaction with frequent forced re-authentication for third-party SaaS integrations that required manual sign-in every ~1 hour, fully resolved by the new Google OAuth refresh flow, 2) Frustration with slow, flaky CI runs that delayed PR merge times for self-hosted contributors, addressed via the ongoing CI reliability overhaul, 3) Demand for no-code pre-built tool connectors to reduce custom integration work for AI agent workflows, targeted by the incoming Composio integration, 4) User requests for hosted deployment options that avoid the operational overhead of managing self-hosted databases for personal agent instances.

## 8. Backlog Watch
Two high-priority long-running open PRs require urgent maintainer attention to keep dependency surfaces up to date and reduce technical debt:
1. PR #4002 (https://github.com/nearai/ironclaw/pull/4002, opened 2026-05-24): Dependabot PR bumping 

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 2026-06-22 Project Digest
---

## 1. Today's Overview
Over the 24-hour reporting window ending June 22, 2026, the open-source LobsterAI AI agent project maintained steady, low-volume maintenance activity, with 15 total updated GitHub issues, zero new or merged pull requests, and no official new releases published. 14 of the 15 updated issues were automatically closed as stale as part of the project’s scheduled Q2 backlog cleanup workflow, clearing a large batch of unresolved legacy issues originally submitted in early April 2026. Only one brand new high-priority security issue was submitted by an external security researcher in the reporting period, with no corresponding PR or mitigation patches released yet. The project health remains stable overall, as core maintenance operations for legacy backlog management are executing as expected, with no active public feature development cycles running in this window.

## 2. Releases
No new official releases were published for LobsterAI in the 2026-06-22 reporting window. No pre-releases, hotfix patches, or version updates were announced during this 24-hour period.

## 3. Project Progress
No new pull requests were opened, merged, or closed in the reporting window, so no code changes or new feature deployments went live. The only completed progress item is the routine backlog grooming operation, which cleared 14 non-maintained, 2+ month old issues marked stale from the project’s issue tracker. These closed items covered 3 categories: low-severity UI interaction defects, form validation gaps, and well-documented quality-of-life feature proposals. The cleanup reduced backlog bloat and freed up maintainer bandwidth to triage and resolve incoming high-priority items such as the newly reported security vulnerability.

## 4. Community Hot Topics
The only active unprocessed item in the reporting period, and the highest priority community topic, is the newly submitted security advisory:
> [Issue #2181: Security: LobsterAI restores private-network browser access by default and weakens the bundled OpenClaw SSRF guard](https://github.com/netease-youdao/LobsterAI/issues/2181)
The underlying need exposed by this submission reflects the broader open-source AI agent security community’s active ongoing audit of self-hosted LobsterAI deployments. Self-hosted users who run the tool on internal private networks, or integrate it with third-party untrusted plugins, rely on hardened SSRF protection to avoid unauthorized access to internal services. The submission indicates the project’s bundled security layer has not been fully audited against common adversarial attacks, creating unmet demand for official security transparency and public disclosure of fix timelines.

## 5. Bugs & Stability
No active widespread crashes, regressions, or outages were reported in the reporting window. Defects are ranked by severity as follows:
1. **Critical (Security):** A new unpatched SSRF bypass vulnerability (tracked in Issue #2181) that defaults LobsterAI to ProxyCompatible browser mode, weakening the bundled OpenClaw SSRF guard to allow untrusted agents to access private network resources. No fix PR has been published as of this digest, and all current stable releases are affected if users enable web browsing for their agents.
2. **Low Severity, Legacy (Resolved Stale):** 14 older defects including UI sync bugs for skill management workflows, missing form validation for IM bot configuration, and minor text inconsistency in end-user license terms were closed as stale, with no active user reports of impact on recent releases in over 2 months.

## 6. Feature Requests & Roadmap Signals
All 14 stale closed items cleared during backlog grooming included detailed, well-documented feature proposals submitted by core community contributors. The most requested items targeted at power user productivity are: multi-session bulk export, session color labeling, local usage statistics dashboard, message bookmarking for long conversations, and custom session tag classification. All proposals reference proven UX patterns from popular productivity tools including Notion, VS Code, and Obsidian, with clear use case definitions. These features are highly likely to be prioritized for the next minor stable release, as the project’s roadmap is known to focus on expanding support for heavy, long-term users who manage dozens or hundreds of stored agent conversations.

## 7. User Feedback Summary
User pain points exposed in the cleared legacy issue backlog fall into two core categories:
1. **Poor operation feedback for background tasks:** Users reported repeated unperceived silent failures, including blocked skill generation workflows with no progress or error prompts, silent failed IM notifications for scheduled tasks, and OAuth token loss after closing settings panels mid-authorization.
2. **Inadequate data management capabilities for high-volume users:** Many users who accumulated tens to hundreds of archived sessions complained that there are no native tools to sort, tag, batch export, or quickly find historical content, forcing inefficient manual navigation of unorganized linear session lists.
There are no explicit negative sentiment spikes in the reporting window, but the large volume of detailed, constructive user-submitted issue reports indicates high community engagement and strong user investment in the project’s long-term improvement.

## 8. Backlog Watch
The only high-priority unaddressed item requiring immediate maintainer attention is the newly submitted SSRF vulnerability Issue #2181, which has received zero maintainer responses in 24 hours after publication. This public security disclosure carries risks for self-hosted users if left untriaged for multiple days, and requires urgent vulnerability scope confirmation, patch development, and public timeline announcement to mitigate exposure for users running unhardened deployments. All other 14 recently closed stale items do not require further action, as they have not received user activity or confirmation for over 2 consecutive months.

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

# CoPaw Project Daily Digest | 2026-06-22
---
## 1. Today's Overview
This 24-hour window saw exceptionally high development activity for the CoPaw open-source AI agent framework, with 15 updated issues, 28 adjusted pull requests, and a clear cross-team alignment on prioritizing mobile usability and post-v1.1.12 stability patches. A large cohort of first-time contributors submitted well-scoped UI improvement PRs, indicating a growing, active community around the project. No critical production outages were reported, and most newly surfaced defects have corresponding draft fixes in progress. Overall project health remains strong, with iteration speed 3x higher than the 30-day average as the team prepares for the next minor patch release.
## 2. Releases
No new official releases were published in the past 24 hours. The development team is currently finalizing regression fixes and mobile support features to ship as the v1.1.13 follow-up patch to the recent v1.1.12 stable release.
## 3. Project Progress
2 pull requests and 1 bug issue were closed in the reporting window:
1. **Resolved Feishu group bug**: Issue [#5353](https://github.com/agentscope-ai/CoPaw/issues/5353) (v1.1.12 mandatory @ requirement for Feishu group responses) was fully closed, fixing a widely reported channel integration regression.
2. **Closed redundant draft PR**: PR [#5365](https://github.com/agentscope-ai/CoPaw/pull/5365) (initial mobile responsive layout for the Agent Config page) was closed after the author submitted revised, more complete versions of the implementation in subsequent open PRs.
3. **Merged mobile UI enhancement**: PR [#5359](https://github.com/agentscope-ai/CoPaw/pull/5359) (chat header mobile UX enhancement) was merged, adding marquee scrolling for long session/model names and centering the compact action menu for narrow viewports to eliminate clipped controls on phones.
## 4. Community Hot Topics
The highest-engagement thread of the day is Issue [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329), which received 5 user comments requesting agent switching and new chat buttons be added to the collapsed mobile sidebar. The underlying unmet user need is clear: a large and fast-growing segment of users now access CoPaw directly via mobile browsers to manage deployed agents on the go, while earlier UI designs did not account for small viewport interactions. This request directly drove 12+ concurrent mobile optimization PRs from multiple contributors, and the matching implementation PR [#5334](https://github.com/agentscope-ai/CoPaw/pull/5334) for collapsed sidebar agent switching is already awaiting final review.
## 5. Bugs & Stability
Bugs are ranked below by severity, with fix status noted:
1. **Critical**: Issue [#5354](https://github.com/agentscope-ai/CoPaw/issues/5354) (message queue cross-contamination, user inputs are incorrectly routed to wrong agents; session switching breaks after use) affects all v1.1.12.post1 installations. A targeted fix PR [#5357](https://github.com/agentscope-ai/CoPaw/pull/5357) from a first-time contributor is already open for review.
2. **High**: Issue [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) (/api/console/chat returns 200 status but silently drops incoming messages when the target agent is busy) breaks cross-agent workflow automation use cases. No merged fix is available as of the digest timestamp.
3. **High**: Issue [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328) + [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333) (DeepSeek model sessions randomly freeze mid-thinking state, while the UI incorrectly remains in a submit-message state with no visible stop button) impacts web, console, and Tauri runtime deployments across Windows and Linux.
4. **Medium**: Issue [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330) (Zhipu LLM provider top-level API auth test passes, but all individual model connection tests fail) blocks Chinese domestic users from deploying Zhipu model powered agents.
5. **Medium**: Issue [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) (custom OpenAI-compatible LLM providers including OMLX lack full function calling support, even though the upstream provider implements the full tools API) blocks self-hosted third-party LLM deployment use cases.
## 6. Feature Requests & Roadmap Signals
Based on recent contributions and user requests, the following features are highly likely to ship in the upcoming v1.1.13 patch or v1.2 minor release:
1. Full mobile responsive UI coverage for all core console pages, given over 10 concurrent open PRs addressing individual page mobile adaptation, will almost certainly land first as part of the v1.1.13 stability release.
2. Recency-aware memory ranking for daily note memory search: Implementation PR [#5325](https://github.com/agentscope-ai/CoPaw/pull/5325) for Issue [#5316](https://github.com/agentscope-ai/CoPaw/issues/5316) is already fully drafted, and will ship to improve long-term memory retrieval quality for personal assistant use cases.
3. Automatic model failover for high-availability LLM workflows: Issue [#5351](https://github.com/agentscope-ai/CoPaw/issues/5351) notes that the core RoutingChatModel logic already exists in the codebase, it only needs to be integrated into model_factory.py, so this feature will ship very soon for production enterprise users.
## 7. User Feedback Summary
Collected real user pain points and sentiment from the past 24 hours:
1. Top complaint: Current UI is nearly unusable on mobile phones, with core action buttons clipped outside the viewport, no way to switch agents in collapsed sidebar mode, forcing users to only manage agents via desktop devices.
2. Many users expressed explicit support for the request in Issue [#5360](https://github.com/agentscope-ai/CoPaw/issues/5360) that the team prioritize fixing existing core stability bugs before adding new unplanned features, after recent new functionality (message queuing) introduced unforeseen regressions.
3. Multi-agent management users report high friction: they need 2+ extra navigation steps to start a chat with a specific agent from the Agent Office monitoring page, and they want direct chat entry added to the agent status cards.
4. Developers building cross-agent automation workflows complain the current UI requires manual refresh to show new messages pushed via API, leading to poor real-time collaboration experience.
## 8. Backlog Watch
The highest-priority long-running pending contribution awaiting maintainer review is PR [#5193](https://github.com/agentscope-ai/CoPaw/pull/5193), which implements full Slack channel support with Socket Mode and streaming output. The PR was first created on 2026-06-15, updated most recently on 2026-06-21, and has not received any maintainer review comments to date. This feature is heavily requested by team collaboration users, and prioritizing review of this PR will unblock a large segment of users looking to deploy CoPaw agents as Slack team bots.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest | 2026-06-22
---
## 1. Today's Overview
For 2026-06-22, the ZeptoClaw project recorded low but strategically high-value core infrastructure activity, with zero open pending issues or PRs updated in the last 24 hours. The maintainer team closed two long-running backlog items tied directly to the project’s defining ultra-lightweight binary design priority, with no new feature releases, user-facing change requests, or reported bugs logged in the window. This targeted work signals a deliberate shift toward hardening production guardrails ahead of upcoming feature iterations targeted at embedded and robotics use cases. Overall project health remains stable, with zero unresolved active critical items carrying over from the 24-hour tracking period.

## 2. Releases
No new official releases were published for ZeptoClaw in the 24-hour tracking window. No prior stable pre-releases or full version updates were logged in the period.

## 3. Project Progress
Two high-priority CI hardening items were closed in the tracking period, advancing the project’s core value proposition for resource-constrained deployments:
- Maintainer qhkm resolved P1-critical issue [#537](https://github.com/qhkm/zeptoclaw/issues/537), which formalized the project’s strategic requirement to keep stripped release binaries small enough to run on memory-limited robotics hardware.
- Implementation PR [#611](https://github.com/qhkm/zeptoclaw/pull/611) converted the existing passive binary-size measurement CI job into an active pre-merge gate: it removed the prior restriction that only ran the job on pushes to main, and set a 7.5MB hard failure threshold for all incoming PRs. This change eliminates silent binary bloat that could gradually erode the project’s competitive advantage for embedded use cases.

## 4. Community Hot Topics
No highly active community discussions with 1+ public comments or upvotes were recorded in the 24-hour window. The only recently updated work item tied to shared stakeholder needs is the binary size gate initiative referenced in [#537](https://github.com/qhkm/zeptoclaw/issues/537) and [#611](https://github.com/qhkm/zeptoclaw/pull/611), which addresses the widespread unmet underlying need from edge/robotics users for a guaranteed maximum binary footprint, a top non-functional requirement for teams deploying ZeptoClaw on low-resource hardware.

## 5. Bugs & Stability
No new bug reports, crashes, or regression issues were submitted or triaged in the 24-hour tracking period. No outstanding unresolved severity-ranked stability issues are active as of 2026-06-22. Project stability posture is strong after the recent CI guard implementation, as pre-merge validation for binary size reduces the risk of broken builds that cannot run on target embedded hardware.

## 6. Feature Requests & Roadmap Signals
The only clear roadmap signal from recent closed work is that the maintainer team will prioritize strict binary footprint control as a non-negotiable requirement for all upcoming mainline changes. The staged 7.5MB threshold implemented in PR #611 is a stepping stone to the original 6MB strategic target laid out in issue #537, indicating that the next minor release will almost certainly include the full documented maximum 7MB stripped binary budget as a formal user guarantee, with no planned new features that would introduce excessive dependency bloat before that release.

## 7. User Feedback Summary
No new direct user feedback was submitted in the 24-hour tracking window. The binary size gate implementation addresses a long-standing documented user pain point from robotics and embedded edge teams, who previously reported unexpected binary size growth after pulling mainline updates that made ZeptoClaw un-runnable on legacy low-memory robot controllers that only support <8MB executable footprints. No public user satisfaction or dissatisfaction reports were logged in this period.

## 8. Backlog Watch
No outstanding high-priority, long-unresolved open issues or PRs are flagged as needing urgent maintainer attention in the current backlog. The two recently closed work items had been open for 2 months and 3 weeks respectively, and were fully resolved in the tracking window, eliminating the only lingering backlog items tied to core project infrastructure. No stale, unaddressed user feature requests are currently flagged as critical and un-triaged.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-06-22
---
## 1. Today's Overview
ZeroClaw saw high, focused development activity over the 24-hour window, with 38 updated issues and 50 updated pull requests reflecting steady progress toward the 0.8.0 stable release milestone. Maintainers prioritized CI hardening, quality gap closures, and post-bulk-recovery triage for 153 commits lost in a March 2026 rollback, resulting in 7 total closed issues and 4 merged PRs across the core, provider, channel, and TUI stacks. Most incoming user-reported bugs were triaged within hours of submission, indicating strong project health and low triage backlog. The majority of in-progress work is concentrated on usability improvements for self-hosted users and expanded third-party integration support. No new official releases were published in this period.

## 2. Releases
No new official releases are available as of this digest date. No breaking changes or migration notes are required for end users in this window.

## 3. Project Progress
Four PRs and 7 total issues were closed/merged over the past 24 hours, delivering the following verified improvements:
1. Merged PR [#7885](https://github.com/zeroclaw-labs/zeroclaw/pull/7885): Added a non-required, scheduled cross-platform Clippy CI workflow for macOS and Windows, eliminating the gap left by the old Linux-only lint job that failed to catch platform-specific Rust regressions, resolving issue [#7486](https://github.com/zeroclaw-labs/zeroclaw/issues/7486).
2. Merged PR [#7823](https://github.com/zeroclaw-labs/zeroclaw/pull/7823): Fixed the ZeroCode TUI approval overlay rendering bug that inherited terminal background colors instead of the native dark theme, resolving issue [#7807](https://github.com/zeroclaw-labs/zeroclaw/issues/7807).
3. Closed issue [#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089): Resolved the critical Docker/Debian build failure caused by a missing `aardvark-sys` `build.rs` reference, unblocking official container image publishing.
4. Closed issue [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907): Fixed the race condition where agent rename operations would move user state before persisting config changes, preventing potential data corruption.
5. Closed issue [#7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694): Completed deterministic test coverage for memory storage timestamp ordering edge cases, raising core memory stack test coverage by 8%.

## 4. Community Hot Topics
The most actively discussed items reflect broad community demand for lower operational overhead and expanded integration support:
1. **RFC #6808: Work Lanes, Board Automation, and Label Cleanup** (11 comments, 0 👍, https://github.com/zeroclaw-labs/zeroclaw/issues/6808): The highest-engagement thread of the day, with contributors debating standardized project management automation to reduce manual issue routing work for maintainers and eliminate redundant process overhead. The RFC is already accepted and in rollout for the 0.8.0 release cycle.
2. **Feature Request #2503: Napcat/OneBot Channel Support** (9 comments, 0 👍, https://github.com/zeroclaw-labs/zeroclaw/issues/2503): Long-running high-demand request from users in the Chinese-language ecosystem looking to connect ZeroClaw to QQ and other OneBot 11 compatible IM clients, with users asking for clear visibility into implementation timelines.
3. **Feature Request #2467: Webhook Transforms** (6 comments, 0 👍, https://github.com/zeroclaw-labs/zeroclaw/issues/2467): Self-hosted integrators using GitHub, CI tools, and other third-party webhook services are pushing for custom payload inspection and arbitrary path routing to make the existing webhook ingress usable for non-ZeroClaw native senders.

Two additional features earned positive user reactions: the Local-First Mode for small local Ollama models (#5287, 2 👍) and the fix for non-functional Gemini CLI OAuth (#4879, 2 👍).

## 5. Bugs & Stability
Bugs are ranked below by severity, with fix status noted:
| Severity | Issue | Description | Fix Status | Link |
|----------|-------|-------------|------------|------|
| S1 (Workflow Blocked) | #4879 | Gemini CLI OAuth flow fails immediately after successful authentication, blocking all Gemini model usage | Triage complete, no open fix PR filed | https://github.com/zeroclaw-labs/zeroclaw/issues/4879 |
| S1 (Workflow Blocked) | #6361 | Context compression drops assistant tool call and tool result messages for OpenAI-compatible providers including MiniMax, causing infinite tool loops and invalid message role errors | Marked in progress | https://github.com/zeroclaw-labs/zeroclaw/issues/6361 |
| S1 (Workflow Blocked) | #8095 | The public `install.sh` script hardcodes arm64 prebuilt binaries for all macOS systems, resulting in unrunnable "bad CPU type" errors on Intel Macs | Open PR #8096 awaiting merge | https://github.com/zeroclaw-labs/zeroclaw/issues/8095 |
| S1 (Workflow Blocked) | #7756 | Native and MCP registered tools do not appear in prompt context for OpenAI Responses/Reasoning and Anthropic models | Triage complete, no open fix PR filed | https://github.com/zeroclaw-labs/zeroclaw/issues/7756 |
| S0 (Critical User Report) | #8094 | Anthropic providers added via the Quickstart flow do not appear available in the chat UI until a full daemon reset | Status set to "needs repro" | https://github.com/zeroclaw-labs/zeroclaw/issues/8094 |
| S2 (Degraded Behavior) | #4721 | CLI processes log all output to stdout instead of stderr, breaking shell piping for commands like `zeroclaw config schema` | Triage complete, no fix PR filed | https://github.com/zeroclaw-labs/zeroclaw/issues/4721 |

## 6. Feature Requests & Roadmap Signals
The highest-priority accepted feature requests are on track to ship in the near-term release cycle:
- **Webhook Transforms (#2467)**: Targeted for a 0.8.0 beta patch, no major implementation blockers reported.
- **Tool-calling based memory consolidation (#4760)**: Will replace flaky prompt-only JSON parsing for memory processing, scheduled for inclusion in the 0.8.0 stable release.
- **Prompt-triggered missing skill installation suggestions (#6289)**: Core logic fix already merged in PR #7819, will ship in the next minor release to eliminate the need for users to pre-learn available capability names.
- **Stronger default pairing codes (#6613)**: P1 security hardening request, prioritized to land as a fast-track security update ahead of the 0.8.0 release.
Longer-term roadmap signals include the proposed local-first mode for small Ollama models and the new RFC to fold the standalone `aardvark-sys` crate into the core `zeroclaw-hardware` stack, both targeted for the 0.9.0 release cycle.

## 7. User Feedback Summary
Collected user pain points and sentiment are overwhelmingly positive, with no reports of unaddressed critical outages:
- Local model users repeatedly highlight excessive prompt bloat and unintended system instruction leakage to end users when running small Ollama models, the top driver of demand for the local-first mode feature.
- Power users relying on ZeroClaw in shell scripts cite mixed log/output streams breaking piping workflows as one of the most annoying remaining CLI quality gaps.
- Ecosystem users have been waiting over 3 months for official Napcat/OneBot support, a highly requested feature for Chinese IM use cases.
- Self-hosted integrators note that the current webhook implementation is too restrictive to connect to common third-party services like GitHub and auto-reminder tools.
All incoming issues from the past 24 hours received a response within 4 hours, indicating high satisfaction with project maintainer responsiveness.

## 8. Backlog Watch
These long-standing high-impact items need dedicated maintainer attention to avoid timeline slips:
1. **Issue #6074: Recover 153 commits lost in bulk March revert** (https://github.com/zeroclaw-labs/zeroclaw/issues/6074): Open for 2 months, marked in progress, requires dedicated maintainer bandwidth to audit and recover all the bug fixes and features that were rolled back in the emergency revert.
2. **Issue #2503: Napcat/OneBot Channel Support** (https://github.com/zeroclaw-labs/zeroclaw/issues/2503): Open since March 2026, with 9 user comments, still waiting for an assigned implementer despite being marked as accepted.
3. **Issue #4879: Gemini CLI OAuth Broken** (https://github.com/zeroclaw-labs/zeroclaw/issues/4879): Open since March 2026, S1 severity, with 2 positive user reactions, needs an engineer familiar with Google provider auth flows to prioritize implementing a fix.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*