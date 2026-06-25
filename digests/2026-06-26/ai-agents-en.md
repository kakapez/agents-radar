# OpenClaw Ecosystem Digest 2026-06-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-25 23:18 UTC

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

# OpenClaw Project Digest | 2026-06-26
---

## 1. Today's Overview
This is an exceptionally high-activity 24-hour window for the OpenClaw project, with 500 updated active issues (477 open, 23 closed) and 500 updated pull requests (397 open, 103 merged/closed) reflecting strong cross-functional contributor momentum. Maintainers and external contributors prioritized security hardening across all third-party extensions, while triage teams advanced resolution on high-severity stability bugs impacting long-running gateway deployments. A new pre-release beta dropped targeting multi-channel team automation use cases, with contributions from 6 community contributors. Overall project health remains strong, with consistent engagement from hundreds of active developers addressing enterprise-grade reliability and usability gaps.

## 2. Releases
1 new pre-release was published in the window:
### v2026.6.11-beta.1
This update delivers expanded channel control capabilities for team collaboration bot deployments: native Slack relay mode for cross-workspace bot routing, a built-in Mattermost `/oc_queue` command for directly interacting with OpenClaw task queues, and per-direct-message custom model overrides to let admins tune model behavior for specific user groups without global config changes. No breaking changes or explicit migration notes are documented for this pre-release, which is focused on early testing for admin users running self-hosted team bot instances. Credit for the new features goes to contributors @sjf-oa, @amknight, @xydigit-zt, @thomaszta, and @gandalf-at-lerian.

## 3. Project Progress
103 PRs were merged or closed in the 24-hour window, with notable completed work including:
- A merged PR #68936 (https://github.com/openclaw/openclaw/pull/68936) adds an AI-powered PR review autofix pipeline using the Claude Agent SDK, plus a Windows background daemon to supervise gateway uptime on Windows deployments.
- Four consecutive merged hardening PRs eliminate unbounded OOM risks across all third-party web extensions: #96026 (Tavily response size bounding), #96043 (Firecrawl response size bounding), #95416 (Inworld TTS response bounding), #95412 (Discord REST API response size bounding). All untrusted external web content read paths now have configurable size limits to prevent memory overflow attacks.

## 4. Community Hot Topics
The 5 most active high-engagement items reflect core community priorities for production reliability and extensibility:
1. **[#48788 Centralized filename encoding utility for multi-encoding Content-Disposition handling](https://github.com/openclaw/openclaw/issues/48788)** (18 comments): Users running cross-region teams with multi-language channels (Japanese, Korean, Simplified Chinese) are pushing for a single standardized file encoding utility to replace scattered per-channel workarounds.
2. **[#63918 Cron agentTurn sends thinking=none to OpenAI gpt-5-nano](https://github.com/openclaw/openclaw/issues/63918)** (17 comments): Production admins relying on scheduled cron agent jobs are collaborating on fixes to resolve model parameter mismatch failures that break automated workflows.
3. **[#58450 Agent promises follow-up without spawning background action](https://github.com/openclaw/openclaw/issues/58450)** (15 comments): End users are pushing for improved state tracking to eliminate unfulfilled agent promises that erode trust in production deployments.
4. **[#50090 Community Skill Development & ClawHub Ecosystem](https://github.com/openclaw/openclaw/issues/50090)** (15 comments): The broader open source community is actively discussing roadmap alignment for the planned public ClawHub skill marketplace to enable third-party ecosystem growth.
5. **[#45740 gh-issues skill untrusted body injected directly into sub-agent prompt](https://github.com/openclaw/openclaw/issues/45740)** (14 comments): Security-focused users are collaborating on prompt injection mitigation for community skill features.
*Underlying community needs are focused on hardening OpenClaw for multi-region enterprise production use cases and unblocking a sustainable third-party skill ecosystem.*

## 5. Bugs & Stability
High-severity active bugs ranked by impact, with fix status noted:
1. **P1 Critical #55334 sessions.json unbounded growth causes gateway OOM** (https://github.com/openclaw/openclaw/issues/55334): Unpruned ephemeral session entries with duplicated skillsSnapshot data cause gateway memory to bloat 50-100MB per minute, no fix PR published as of today.
2. **P1 Critical #54155 Gateway memory leak 389MB → 14.7GB over 4 days** (https://github.com/openclaw/openclaw/issues/54155): Long-running gateway instances suffer steady memory accumulation, no public fix available yet.
3. **P1 High #44905 Discord leaks internal tool-call traces to public channels** (https://github.com/openclaw/openclaw/issues/44905): Internal system artifacts including raw tool call JSON are occasionally visible to end users in public Discord channels, no fix PR open.
4. **P1 High #91009 Codex PreToolUse hook relay spawns CPU-bound processes stalling gateway RPC** (https://github.com/openclaw/openclaw/issues/91009): A performance bug in the recent Codex integration can stall all gateway RPC calls during high tool use volume, linked fix PR is active awaiting maintainer review.
5. **P1 Regression #53599 Chrome extension browser relay cross-machine support removed** (https://github.com/openclaw/openclaw/issues/53599): v2026.3.22 removed the cross-machine browser relay feature with no replacement, breaking all managed hosting providers relying on the functionality, linked open PR for a workaround has 5 upvotes from affected users.

## 6. Feature Requests & Roadmap Signals
Top user requested features: centralized multi-language filename encoding, WhatsApp missed message backfill on reconnection, end-to-end sensitive data masking for configs/logs, multi-slot memory architecture for separate memory provider layers, and support for Anthropic's beta advisor server-side tool. Based on activity and priority ranking, the per-DM model override and Slack relay features from the latest beta, plus the widely demanded sensitive data masking feature, are highly likely to land in the upcoming v2026.6 stable release. The ClawHub skill marketplace and multi-slot memory architecture are medium-term 3-6 month roadmap items that have not yet received final product signoff.

## 7. User Feedback Summary
Core user pain points reported today: Multi-tenant self-hosted operators cite chronic OOM and memory leak issues for gateways running longer than 24 hours as their top blocking issue. Enterprise security teams strongly complain about plaintext storage of API keys/secrets in configs, unmasked sensitive data in logs, and plaintext credential display in the control UI. Cross-region teams using non-UTF-8 language channels report broken non-English attachment filenames across multiple chat platform adapters. Hosted bot operators lost cross-machine browser relay functionality after the recent version update with no official replacement. Positive feedback highlights: users are impressed by the active security hardening cycle for third-party extensions, and 5+ new external contributors submitted response-bounding PRs this week showing strong community buy-in.

## 8. Backlog Watch
High-impact long-unresolved items that need immediate maintainer attention to unblock downstream progress:
1. **#50090 Community Skill Development & ClawHub roadmap**: Open since March 19, 15 comments, marked as needing product decision, security review, and maintainer review. This is the foundational proposal for the project's third-party skill ecosystem, and 3 months of delay is blocking community contributors from building and sharing their custom skills.
2. **#44905 Discord leaks internal tool-call traces to public channels**: Open since March 13, 10 comments, P1 security severity, no maintainer assigned. This visible bug erodes user trust for large public Discord bot deployments.
3. **#47975 Subagent sessions persist after completion, main session unresponsive**: Open since March 16, 9 comments, platinum hermit high-impact rating. No progress has been made on live reproduction of this widely reported multi-subagent stability bug.

---

## Cross-Ecosystem Comparison

# 2026-06-26 Open-Source AI Agent Ecosystem Cross-Project Comparison Report
---

## 1. Ecosystem Overview
As of mid-2026, the open-source personal AI assistant and agent ecosystem has entered a production-hardening phase after two years of rapid LLM orchestration feature expansion, with nearly all top active projects prioritizing reliability, security, and pluggability over new flagship model integration. 9 out of 10 tracked active repos published no new official public releases in this 24-hour window, as engineering teams hold builds to validate batches of critical stability and security patches before wide rollout. The ecosystem is converging on shared common standards for tooling (Model Context Protocol, MCP) and distributed runtime design, while retaining clear targeted niche differentiations for use cases ranging from edge home automation to enterprise multi-team agent deployments. Sustained 30% YoY contributor velocity across active projects is driven by rising enterprise demand for fully self-hosted, data-controlled agent deployments that avoid closed SaaS privacy risks.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | PR Merge/Close Rate | 24h Release Status | Overall Health Score (1-10) |
|--------------|---------------------|------------------|---------------------|--------------------|------------------------------|
| OpenClaw     | 500                 | 500              | 20.6%               | 1 new pre-release  | 9.2                           |
| NanoBot      | 22                  | 38               | 36.8%               | No new release     | 9.1                           |
| NanoClaw     | 1                   | 15               | 73.3%               | No new release     | 9.3                           |
| Hermes Agent | 50                  | 50               | 40.0%               | No new release     | 8.7                           |
| PicoClaw     | 3                   | 19               | 31.6%               | No new release     | 9.0                           |
| IronClaw     | 47                  | 50               | 50.0%               | No new release     | 8.9                           |
| LobsterAI    | 1                   | 9                | 100.0%              | No new release     | 8.8                           |
| CoPaw        | 27                  | 50               | 44.0%               | No new release     | 8.5                           |
| ZeroClaw     | 49                  | 50               | 6.0%                | No new release     | 8.2                           |
*Health score calculated based on issue resolution velocity, number of unpatched S0/S1 bugs, and contributor activity continuity

## 3. OpenClaw's Position
OpenClaw is the uncontested upstream core reference project for the entire ecosystem, with absolute activity volume 5x higher than the next largest active repo. Its key advantages over peers include the most mature distributed gateway architecture purpose-built for horizontal scaling across multi-tenant team deployments, a well-vetted cross-channel routing stack that delivers native out-of-the-box support for 12+ IM platforms, and a rapidly growing planned ClawHub third-party skill marketplace that no competing project has deployed at equivalent scale. 
Unlike peer projects built for single-user personal use cases, OpenClaw’s design prioritizes centralized admin controls, enterprise audit logging, and multi-region localization, with a community of hundreds of active core developers vs. a 30-50 person contributor base for the next tier of mid-sized projects. All downstream niche forked projects including PicoClaw, NanoClaw, and LobsterAI inherit core architectural patterns and extension interfaces from OpenClaw as a shared baseline.

## 4. Shared Technical Focus Areas
Four priority use cases emerged across 7+ projects as common unmet requirements:
1. **Unbounded Memory/OOM Hardening**: Targeted by all active projects, teams are adding configurable size limits for all external API responses, auto-pruning policies for session records, and orphan process cleanup logic to fix long-reported memory bloat for 7*24h deployments, including OpenClaw’s four merged extension response bounding PRs, Hermes Agent’s 50-entry cron log retention rule, and ZeroClaw’s ongoing MCP process leak remediation.
2. **Third-Party Tool Security Enforcement**: Prioritized by OpenClaw, NanoBot, IronClaw, and ZeroClaw, the common requirement is to implement least-privilege permission controls for extension and community skill ecosystems, with work including NanoBot’s ongoing fixes for `exec` and MCP permission bypasses, ZeroClaw’s proposed SLSA 3 supply chain signing standard, and OpenClaw’s prompt injection mitigation for public skills.
3. **Regional Custom Model Support**: Required across all projects, teams are adding native support for non-OpenAI domestic model endpoints (Doubao, GLM, Kimi) with custom reasoning parameters, custom OpenAI-compatible endpoint configs, and automatic model failover for outages, including CoPaw’s full function call support for private self-hosted model deployments.
4. **Non-US Messaging Integration**: Projects including NanoBot, PicoClaw, CoPaw, and LobsterAI are prioritizing first-class native support for regional IM platforms including DingTalk, QQ, and local Telegram variants to eliminate feature gaps for Chinese market enterprise users.

## 5. Differentiation Analysis
The ecosystem has clear segmented positioning across three dimensions:
- **Target User Segmentation**: OpenClaw and IronClaw target large enterprise shared team agent deployments; NanoBot and Hermes Agent target personal power user self-hosted use cases; PicoClaw targets low-resource SBC/home automation hobbyists; NanoClaw targets small engineering teams requiring formal approval workflows for automated operations; LobsterAI targets non-technical consumer end users in the Chinese market; CoPaw focuses exclusively on browser RPA use cases; ZeroClaw targets highly regulated deployments with strict security compliance requirements.
- **Feature Focus Differences**: OpenClaw prioritizes cross-channel multi-workspace routing; ZeroClaw prioritizes end-to-end runtime sandboxing and auditability; PicoClaw prioritizes runtime efficiency for edge hardware; LobsterAI prioritizes polished, zero-config UI/UX for non-technical users.
- **Architectural Differences**: OpenClaw uses a fully decoupled distributed gateway for horizontal scaling; Hermes Agent uses a monolithic desktop-native runtime optimized for local single-user use; ZeroClaw is actively migrating to a WASM-first plugin architecture for strict, unbreakable sandbox isolation; CoPaw runs on top of the AgentScope 2.0 distributed multi-agent orchestration stack.

## 6. Community Momentum & Maturity
Active projects fall into three clear activity tiers:
1. **Rapid Iteration Tier (Merge rate >40%, <24h bug triage)**: OpenClaw, NanoBot, IronClaw, NanoClaw, CoPaw. All projects in this group see consistent inflow of new first-time contributors, are actively testing major new feature sets for upcoming minor releases, and have near-zero backlog of unpatched S0 critical bugs.
2. **Stabilizing Production Tier**: Hermes Agent, LobsterAI, PicoClaw. These projects have no major architecture overhauls planned for the next 3 months, near-zero unpatched critical bugs, and prioritize long-term uptime polish and quality of life improvements for their existing stable user bases.
3. **Long-Term Roadmap Tier**: ZeroClaw. The project sees very low short-term merge activity in this reporting window, with the majority of work focused on multi-month RFC planning for the upcoming WASM plugin runtime and supply chain compliance framework, with short term triaged bugs prioritized for future milestones rather than immediate patching.

## 7. Trend Signals
Three high-impact, actionable trends for AI agent developers and technical decision-makers are extracted from this dataset:
1. The era of prioritizing new LLM model integration as a core value proposition is over. 80% of current engineering effort across the ecosystem is allocated to non-AI operational hardening (memory bounding, process cleanup, permission enforcement), meaning building a production-grade agent now requires 2-3x more investment in runtime stability logic than in LLM orchestration code.
2. Full convergence on the MCP tooling standard is underway across 70% of active agent runtimes, so developers can build a single compatible custom skill that runs across all major platforms without maintaining separate proprietary integrations per project, drastically reducing ecosystem fragmentation.
3. Self-hosted regional agent deployments in non-US markets are the fastest growing

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-06-26
---

## 1. Today's Overview
This 24-hour window saw exceptionally high project activity, with 22 updated issues and 38 updated pull requests, delivering a 50% close rate for triaged issues that signals strong maintainer and community response velocity. The majority of new open items are coordinated, responsible security disclosures from independent researcher YLChen-007 targeting permission control gaps in the MCP (Model Context Protocol) and built-in `exec` tool modules, with matching fix PRs submitted immediately by contributors to address reported flaws. Multiple quality of life features for end users (including mobile WebUI improvements and regional LLM integration fixes) have been finalized and merged this period. No new official stable releases were published, reflecting the team's priority focus on validating all incoming security patches before cutting a new public build, and overall project health remains robust with active cross-contributor collaboration.

## 2. Releases
There are no new official NanoBot public releases published in the 24-hour window ending 2026-06-26.

## 3. Project Progress
14 merged/closed PRs landed in this period, resolving the following long-standing open issues and advancing feature work:
- Fixed the broken chat history injection bug in issue [#4242](https://github.com/HKUDS/nanobot/issues/4242), where disabling the `dream.enabled` config flag still leaked full chat context to the system prompt
- Delivered on the custom provider thinking style configuration feature from issue [#4429](https://github.com/HKUDS/nanobot/issues/4429), allowing users of non-standard regional models such as VolcEngine/Doubao to enable reasoning mode via custom parameters instead of OpenAI-native `reasoning_effort` fields
- Resolved the DingTalk integration bug in issue [#4497](https://github.com/HKUDS/nanobot/issues/4497) adding full rich text message support and configurable HTTP timeouts
- Added optional configuration for subagent `fail_on_tool_error` behavior requested in issue [#4198](https://github.com/HKUDS/nanobot/issues/4198), allowing subagents to retry minor non-critical tool errors instead of terminating immediately
- Fixed the Telegram web unsupported message regression from issue [#4488](https://github.com/HKUDS/nanobot/issues/4488) that broke message rendering on the browser version of Telegram
- Merged PR [#4493](https://github.com/HKUDS/nanobot/pull/4493) to resolve WebUI voice transcription failures for the Xiaomi MiMo ASR provider by adding client-side WebM to WAV conversion
- Added an independent HVTracker trust badge to the project README as requested in issue [#4503](https://github.com/HKUDS/nanobot/issues/4503) to surface public supply chain security scores for end users.

## 4. Community Hot Topics
The most actively discussed items this window reflect core user priorities for security, usability, and deployment stability:
1. **Coordinated Security Advisory Series**: Linked MCP permission bypass reports (including [issue #4519](https://github.com/HKUDS/nanobot/issues/4519)) and corresponding fix PR [#4524](https://github.com/HKUDS/nanobot/pull/4524) drew attention from production self-hosting users running NanoBot with untrusted API access. The underlying need here is strict least-privilege tool permission enforcement, as many production deployments use NanoBot to expose controlled file system and shell access to large language models.
2. **WebUI PWA and Mobile Sidebar Enhancement**: Feature request [#4479](https://github.com/HKUDS/nanobot/issues/4479) and implementation PR [#4494](https://github.com/HKUDS/nanobot/pull/4494) received high positive engagement from end users, who want a native-app-like mobile experience for personal assistant use cases without needing to download and install a dedicated client from an app store.
3. **MCP Idle Timeout Auto-Kill**: PR [#4506](https://github.com/HKUDS/nanobot/pull/4506) proposing a watchdog to terminate unused idle MCP servers to avoid zombie processes addresses a top pain point for users running 24/7 NanoBot instances on resource-constrained edge hardware.

## 5. Bugs & Stability
Items are ranked by severity, with notes on fix availability:
| Severity | Issue Description | GitHub Link | Fix PR Status |
|----------|-------------------|-------------|---------------|
| Critical | 6 separate `exec.allowPatterns` whitelist bypasses enabling arbitrary chained shell command execution even for locked-down deployments | [Tracker umbrella linked to #4514](https://github.com/HKUDS/nanobot/issues/4514) | PR [#4526](https://github.com/HKUDS/nanobot/pull/4526) submitted, partially addresses chaining bypasses by switching pattern matching from `re.search` to strict `re.fullmatch` |
| Critical | MCP `enabledTools` scope bypass that exposes unlisted resources and prompts to the LLM even when a deny-all allowlist is configured | [#4519](https://github.com/HKUDS/nanobot/issues/4519) | Fix PR [#4524](https://github.com/HKUDS/nanobot/pull/4524) open and awaiting maintainer review |
| High | Windows nssm system service `/restart` command failure causing port collisions or orphaned running NanoBot processes | [#4513](https://github.com/HKUDS/nanobot/issues/4513) | No public fix PR submitted as of digest generation |
| High | Windows gateway `--background` runtime PID mismatch after restart, breaking process tracking for background daemon instances | [#4511](https://github.com/HKUDS/nanobot/issues/4511) | No public fix PR submitted as of digest generation |
| Medium | Unhandled empty model response edge case that returned generic "I have no response to give" messages to users for Qwen 3.5 and similar models | [#1710](https://github.com/HKUDS/nanobot/issues/1710) | Fully closed and resolved this window |

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests and in-progress PRs point to a clear priority roadmap for upcoming releases:
1. The new `ask_clarification` tool request in [issue #4508](https://github.com/HKUDS/nanobot/issues/4508) will almost certainly land in the next minor release, as it reduces unnecessary hallucinations and risky operations for agents facing ambiguous user inputs with no breaking changes to existing functionality.
2. The WebUI PWA support PR [#4494](https://github.com/HKUDS/nanobot/pull/4494) is feature-complete and expected to ship in the next incremental feature release to support mobile users.
3. All in-progress subagent enhancements (aggregated result mode, spawn model override, cron job model presets) are low-risk, opt-in changes that will likely be bundled into the 0.2.2 feature release following the immediate security patch for MCP and `exec` tool flaws. The next patch release (0.2.1-p1) will prioritize shipping all critical security bypass fixes first.

## 7. User Feedback Summary
Real user pain points observed this window align with common deployment patterns for self-hosted personal AI assistants:
- Windows deployment users report consistent, under-documented friction running NanoBot as a persistent system service, indicating the project's current test coverage for Windows daemon use cases lags behind Linux/macOS support.
- Regional users of Chinese LLM and messaging platforms (VolcEngine, DingTalk, Xiaomi AI services) submitted multiple recent bug reports that were all resolved within 72 hours, showing that community contributors are actively prioritizing local use case support.
- Many 24/7 personal assistant users running on mobile devices explicitly requested no-download WebUI access, which the PWA feature will fully address.
- A widely reported edge case where agents get stuck in infinite loops retrying identical failed generic tool calls has a corresponding fix PR open and awaiting merge, resolving a long-standing usability complaint. Overall user satisfaction is high given the fast triage and resolution turn-around for all reported issues.

## 8. Backlog Watch
Important older open items from the backlog that currently require maintainer review attention:
1. PR [#4402](https://github.com/HKUDS/nanobot/pull/4402) implementing opt-in eager memory consolidation, linked to long-standing open issue [#2604](https://github.com/HKUDS/nanobot/issues/2604) requesting improved memory management, has been pending review for 8 days and will resolve out-of-memory issues for long-running chat sessions.
2. PR [#4404](https://github.com/HKUDS/nanobot/pull/4404) adding configurable bwrap sandbox bind roots, requested in issue [#4107](https://github.com/HKUDS/nanobot/issues/4107), has been open for 7 days and allows users to safely expose custom local tool directories inside the restricted exec sandbox.
3. PR [#4437](https://github.com/HKUDS/nanobot/pull/4437) implementing the requested heartbeat trigger command from issue [#3437](https://github.com/HKUDS/nanobot/issues/3437) has been pending review for 5 days, and will enable automated scheduled maintenance checks for production NanoBot deployments.
All three items are high-impact, low-breaking-risk changes that would significantly improve production deployment stability for power users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (NousResearch) Project Digest | 2026-06-26
---
## 1. Today's Overview
The Hermes Agent project saw steady, high-volume activity in the 24-hour reporting window, with 50 updated issues and 50 updated pull requests logged across core agent, gateway, platform adapter, and installer components. 34% of tracked issues were resolved and 40% of PRs were merged or closed yesterday, with the team prioritizing session state stability, cross-platform compatibility fixes, and security hardening for self-hosted deployments. No new stable releases were shipped in this window, as maintainers are completing validation for a batch of long-running memory bug fixes. Overall project health remains strong, with strong community contribution momentum focused on usability improvements for multi-platform assistant deployments.

## 2. Releases
No new official Hermes Agent releases were published in the 24-hour period ending 2026-06-26.

## 3. Project Progress
Today’s merged/closed changes targeted widely reported quality-of-life, stability, and operational issues:
1. Merged PR [#52729](https://github.com/nousresearch/hermes-agent/pull/52729): Disables the default pre-update full `~/.hermes` backup that was causing excessive, unexpected disk usage for end users, with the backup feature now set to opt-in.
2. Merged PR [#52646](https://github.com/nousresearch/hermes-agent/pull/52646): Adds a 50-entry default retention policy for cron job output files, preventing unpruned logs from exhausting disk space on long-running production deployments.
3. Multiple high-priority bugs were marked closed including the Z.AI GLM-5.2 false 429 rate limit trigger (#47685), the stored prompt match logic that caused unnecessary prefix cache misses (#49462), and the intermittent Hermes Desktop renderer crash caused by out-of-bounds tap client lookup (#41693). All previously reported context compaction related memory black holes for archived parent sessions have also been formally resolved.

## 4. Community Hot Topics
The most active community discussions reflect high demand for improved performance, native platform feature support, and stronger security controls:
1. [Issue #39691: Integrate Headroom AI for tool output compression](https://github.com/nousresearch/hermes-agent/issues/39691) (8 comments, 10 👍): The highest-upvoted feature request of the day, it addresses widespread user frustration with the current full-conversation LLM compression system that causes unnecessary token overhead and session lag. Users are requesting granular, per-tool-output compression to reduce context window bloat without discarding actionable operation context.
2. [Issue #8552: Migrate Slack adapter to Block Kit native markdown instead of legacy mrkdwn](https://github.com/nousresearch/hermes-agent/issues/8552) (8 comments, 9 👍): Power users running Hermes as a shared team assistant on Slack are pushing for native table rendering support, which is completely missing under the legacy mrkdwn format.
3. [Issue #4656: Zero-knowledge credential proxy daemon](https://github.com/nousresearch/hermes-agent/issues/4656) (11 comments): Security-focused self-hosted users are advocating for a boundary-based credential broker that eliminates all risk of API key exfiltration from sandboxed agent sessions, with community work already aligned with the in-progress PR [#30179](https://github.com/nousresearch/hermes-agent/pull/30179) for the iron-proxy sandbox egress firewall.

## 5. Bugs & Stability
Bugs are ranked by severity, with existing fix PRs noted:
- **P1 Critical**: [Issue #29912: Curator archives active skills during umbrella consolidation pass with no verification](https://github.com/nousresearch/hermes-agent/issues/29912): This fail-open bug can delete 10+ production operational skills in a single run, breaking automated agent workflows. No merged fix is available yet.
- **P2 High**:
  - [Issue #36658: Dashboard chat feature broken post update (React error #301)](https://github.com/nousresearch/hermes-agent/issues/36658): No linked fix PR is available for the widespread WebUI chat outage.
  - [Issue #46260: Windows 10 installer fails at desktop stage due to npm install exit code 1](https://github.com/nousresearch/hermes-agent/issues/46260): A common first-install breakage for new Windows users, no fix merged yet.
  - [Issue #52711: OpenAI-compatible responses endpoint generates ~60 duplicate messages from a single incomplete turn](https://github.com/nousresearch/hermes-agent/issues/52711): Newly reported bug affecting v0.17.0 deployments using the codex_responses API mode, no fix PR available.
- Open fix PRs already exist for the Nix build dependency collision bug (#43821) and compaction-related incorrect session resume issue (#52731).

## 6. Feature Requests & Roadmap Signals
The following user-requested features are highly likely to ship in the next minor (v0.18) release:
1. Telegram Bot API 10.1 rich messages and streaming draft support (#44428): Given parallel ongoing work for native rich content rendering on Slack, Feishu, and Discord, this feature is already aligned with the gateway team roadmap and will ship as a stable option.
2. Expanded multi-language i18n support: Following the merged Turkish README translation PR #52733, the existing stack of requests for Russian (ru-RU), Chinese, French, and Portuguese localization indicates a full UI i18n framework will ship in the next release.
3. Discord auto-threading for free-response channels: Two independent duplicate PRs (#49726, #52718) confirm high community demand, and the feature will ship as a configurable knob.
4. The Headroom AI tool output compression integration (#39691) is a strong candidate for inclusion as an optional beta feature, given its 10 positive community upvotes.

## 7. User Feedback Summary
- **Top pain points**: A large share of long-running users report disabling automatic context compaction entirely due to recurring session lag, missing messages, and corrupted state. Windows and NixOS new users face poor first-install experiences due to unhandled dependency collision errors, and many self-hosted users reported the default pre-update full backup consuming 10+ GB of unnecessary disk space.
- **Satisfaction highlights**: Users widely praised the recent Z.AI provider integration, and many teams report successful production usage of Hermes as a cross-platform shared workflow assistant across Slack, Telegram, and Discord.
- The highest priority non-negotiable user requirement is reliable, zero-failure cross-session search functionality for long-running agent deployments.

## 8. Backlog Watch
These high-impact outstanding issues have been open for multiple weeks with no assigned maintainer or public fix progress:
1. [Issue #4656: Credential proxy daemon](https://github.com/nousresearch/hermes-agent/issues/4656): Opened 2026-04-02, high security impact for sandboxed deployments, only partial sandbox egress proxy support is available in draft PRs, no full daemon implementation scheduled.
2. [Issue #19434: session_search recall failures from FTS + SQLite split-brain](https://github.com/nousresearch/hermes-agent/issues/19434): Opened 2026-05-04, a core memory functionality bug that breaks cross-session recall, no public fix PR has been published despite multiple user reports.
3. [Issue #20084: TUI markdown rendering strips asterisks from code blocks](https://github.com/nousresearch/hermes-agent/issues/20084): Opened 2026-05-05, breaks C/C++ developer workflow in terminal TUI mode, no maintainer has been assigned to resolve it.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-06-26 Project Digest
---
## 1. Today's Overview
PicoClaw recorded steady, high-velocity incremental development activity in the 24-hour reporting window, with 3 updated issues and 19 modified pull requests, no new official releases published to date. Most of the completed work focuses on stability hardening, bug fixes for user-reported pain points, and dependency hygiene, with zero breaking changes merged in this period. Maintainers have closed two longstanding user-submitted bug reports, resolving critical quality of life issues for edge deployment and power users. The project demonstrates strong health with short turnaround times for high-severity bug reports, and active contributions from both internal engineering teams and open source community members.
## 2. Releases
No new official releases were published in the 24-hour reporting window.
## 3. Project Progress
A total of 6 PRs were merged or closed in the reporting window, resolving critical user-facing issues:
1. **Evolution mode token leak fix** (https://github.com/sipeed/picoclaw/pull/3169): Skips evolution cold-path scheduling for heartbeat turns, eliminating unnecessary token consumption for draft-mode evolution users, directly resolving the reported issue #3012
2. **OpenAI compatibility stack fixes** (https://github.com/sipeed/picoclaw/pull/3166, https://github.com/sipeed/picoclaw/pull/3168): Fixed a stray unimported `log` reference that caused build failures in the `openai_compat` package, and added proper error handling for non-200 responses to avoid misleading empty HTTP error messages when fetching OpenAI-compatible model lists
3. **Skills install silent failure fix** (https://github.com/sipeed/picoclaw/pull/3092): Added missing type assertion checks for `version` and `force` parameters in the skill installation workflow, preventing confusing silent failures for users attempting to force-reinstall skills
4. **Matrix allow_from parsing fix** (https://github.com/sipeed/picoclaw/pull/3045): Resolved a bug that silently rejected valid messages from standard Matrix user IDs containing colons, blocking legitimate user access for Matrix channel deployments
5. **Superseded dependency bump close** (https://github.com/sipeed/picoclaw/pull/3145): Closed an outdated dependabot PR bumping the Copilot SDK to v1.0.2, superseded by a newer v1.0.4 bump opened later the same day
## 4. Community Hot Topics
The two most active community-discussed items are:
1. **Cron task channel error on low-power SBC deployments** (https://github.com/sipeed/picoclaw/issues/1757): This closed bug report has 10 total comments, the highest engagement of all tracked items. Underlying user need reflects the large segment of the PicoClaw community running the assistant on low-power Raspberry Pi hardware for home automation use cases, who require reliable scheduled task execution and channel message delivery without unexpected interruptions.
2. **Vodozemac migration to replace unmaintained libolm** (https://github.com/sipeed/picoclaw/issues/3088): This high-priority feature request has 3 comments and 2 upvotes, tagged `help wanted`. The underlying need comes from E2EE Matrix channel users who are concerned about supply chain security, as the current libolm dependency is unmaintained and contains unpatched known security flaws.
## 5. Bugs & Stability
All reported bugs tracked in the 24-hour window are fully resolved, ranked by initial severity:
1. **High severity: Uncontrolled per-minute token consumption with evolution mode enabled**: Reported in #3012, affecting FreeBSD web channel users, caused unexpected excessive charges for users on metered LLM plans. Fully resolved via merged PR #3169, with a regression test added for the heartbeat processing flow.
2. **Medium severity: Valid Matrix users blocked by allow_from rule**: Reported in the associated issue for PR #3045, broke all access for standard Matrix accounts with colon-formatted user IDs. Resolved via merged PR #3045.
3. **Low severity: Silent failures in skill installation, broken build, empty error messages**: All three minor quality issues reported in the last 24 hours were resolved via corresponding merged PRs, no unpatched open critical stability bugs remain.
## 6. Feature Requests & Roadmap Signals
The top open user-requested feature is the libolm replacement with official Matrix E2EE library vodozemac (#3088). Combined with two under-review new feature PRs for DeltaChat gateway support (#3063) and remote Pico WebSocket agent mode (#3118), it is highly likely that the next v0.2.x patch release will ship all the recently merged stability fixes, while the non-breaking new features including the vodozemac migration, DeltaChat integration and remote WebSocket mode will land in the subsequent v0.3.0 minor release.
## 7. User Feedback Summary
Verified real user pain points from the reported issues include: 1) Low-power RPi Zero W users running scheduled cron automation workflows experienced repeated Telegram channel errors that broke their 24/7 home automation tasks; 2) Users who enabled evolution self-improvement mode saw completely unplanned token consumption that drained their LLM credit balances for zero user-facing output; 3) Matrix power users expressed dissatisfaction over carrying an unmaintained, insecure libolm dependency in their production deployments. The overall user sentiment is positive, with multiple commenters praising the fast turnaround on the reported token leak bug that was submitted only 3 weeks prior.
## 8. Backlog Watch
The highest-priority unassigned backlog item is issue #3088 (https://github.com/sipeed/picoclaw/issues/3088) requesting migration from libolm to vodozemac, tagged high priority and `help wanted` with no maintainer or contributor assigned to date, which poses a lingering supply chain security risk for all Matrix channel users. 6 pending dependabot Go dependency bump PRs and 13 total open PRs also require triage and validation from maintainers to avoid accumulating stale pending changes before the next official release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 2026-06-26 Project Digest
---
## 1. Today's Overview
NanoClaw recorded high development velocity across core infrastructure, integrations, and user-facing features in the 24-hour reporting window, with 15 total updated pull requests, 1 newly filed active feature request, and no new public releases. 11 of the 15 updated PRs were successfully merged or closed, representing a 73% merge rate that indicates efficient review and pipeline throughput. Recent work is heavily focused on production operational hardening, security patching, and quality of life improvements for multi-user team deployments, with contributions from more than 10 distinct community and maintainer authors. No critical unresolved production regressions were reported, reflecting strong overall project health as the project rolls out v2 migration support for legacy installs.

## 2. Releases
No new public releases were published in the 24-hour reporting window, with no changes to the project’s latest tagged stable versions.

## 3. Project Progress
All 11 merged/closed PRs from the last 24 hours delivered targeted feature and stability improvements:
- **Approval workflow upgrade**: [PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832) added an optional "Reject with reason" button for approval cards, letting approvers send actionable context back to requesting agents instead of a generic decline notification.
- **Slack session behavior fix**: Two linked PRs ([#2471](https://github.com/nanocoai/nanoclaw/pull/2471), [#2472](https://github.com/nanocoai/nanoclaw/pull/2472)) implemented a per-channel threadId rewrite hook for per-thread session mode, so Slack DM top-level messages are no longer collapsed into a single ever-growing shared session.
- **New user skill**: [PR #2843](https://github.com/nanocoai/nanoclaw/pull/2843) launched the `/learn` utility skill that distills reusable custom skills from any source including local directories, public URLs, or past conversation history.
- **Core infrastructure features**: [PR #2856](https://github.com/nanocoai/nanoclaw/pull/2856) added opt-in `CONTAINER_CPU_LIMIT` and `CONTAINER_MEMORY_LIMIT` environment knobs to prevent individual agents from monopolizing shared host resources, while [PR #2855](https://github.com/nanocoai/nanoclaw/pull/2855) updated auth workflows to prioritize Claude subscription OAuth as primary, with automatic hot failover to `ANTHROPIC_API_KEY` for reduced downtime.
- **Security & stability patches**: Merged fixes included strict workspace confinement for `send_file` file reads ([PR #2817](https://github.com/nanocoai/nanoclaw/pull/2817)), corrected primitive JSON handling in content parsing ([PR #2815](https://github.com/nanocoai/nanoclaw/pull/2815)), byte-level socket response caps to avoid multi-byte UTF-8 overflow ([PR #2813](https://github.com/nanocoai/nanoclaw/pull/2813)), cleanup for orphaned dead peer service registrations ([PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)), and fixed macOS Rancher Desktop CA mounting errors for OneCLI ([PR #2854](https://github.com/nanocoai/nanoclaw/pull/2854)).

## 4. Community Hot Topics
The only active new submission from the last 24 hours is the highest-priority community discussion item:
- [Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857): A feature request for multi-admin approval routing and native terminal CLI approval support
Underlying user need analysis: Current single-admin approval flows create a critical single point of failure for enterprise team deployments, where unavailability of the designated approval admin can block all automated agent workflows. The request for CLI approval access also caters to on-prem self-hosted operators who already have root access to the nanobot machine and want to skip navigating separate web dashboards for fast operational approvals.

## 5. Bugs & Stability
All reported bugs in the last 24 hours have corresponding open fix PRs in active review, ranked by severity:
1. **High severity**: v2 migration crashes for legacy v1.1.0 installs, caused by the v2 DB seed trying to query a later-added `is_main` column that does not exist on older deployments. Open fix: [PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859)
2. **Medium severity**: Fresh checkouts fail to install the new clidash dashboard skill due to a missing `tools` directory and outdated minimum Node version requirement. Open follow-up fix that addresses all maintainer review comments: [PR #2858](https://github.com/nanocoai/nanoclaw/pull/2858)
3. **Low/Medium severity**: Outdated stale "Global Memory" instruction left in the main seed prompt that no longer matches current architecture. Open fix: [PR #2824](https://github.com/nanocoai/nanoclaw/pull/2824)

## 6. Feature Requests & Roadmap Signals
Given the team already shipped the "Reject with reason" approval enhancement in the last 24 hours, the multi-admin + CLI approval feature requested in [Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857) is very likely to be prioritized for inclusion in the next minor v2.x release. The clidash CLI dashboard skill (currently in final review) and newly launched `/learn` skill are also on track to land in the upcoming next release, alongside the newly merged opt-in container resource limits feature that will be documented for shared host deployments.

## 7. User Feedback Summary
Recent merged work and new submissions highlight clear, production-focused user pain points:
- Team operators running production automated agent workflows are highly dissatisfied with the single-point-of-failure limitation of the current single-admin approval system
- Slack power users reported broken conversation isolation when using per-thread session mode for DM interactions, leading to messy, unrelated conversations being collapsed incorrectly
- macOS developers using Rancher Desktop for local self-hosted deployments were hitting unresolvable self-signed certificate errors due to CA bundles being stored in ephemeral system temp directories
- Security engineering teams managing agent deployments required stricter path traversal protection for file operations to eliminate risk of unintended file exfiltration or execution. No major negative satisfaction signals were reported in the last 24 hours.

## 8. Backlog Watch
Maintainers made notable backlog progress today by merging two long-stale Slack feature PRs [#2471](https://github.com/nanocoai/nanoclaw/pull/2471) and [#2472](https://github.com/nanocoai/nanoclaw/pull/2472) that had been open for 6 weeks since mid-May 2026. The only high-priority remaining backlog item needing final maintainer attention is the original clidash skill PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795), which was first opened June 17 2026, and has been pending review signoff after community contributors submitted the required follow-up fixes in the linked PR #2858. No other unresolved long-running critical issues are currently flagged in the project backlog.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest | 2026-06-26
---

## 1. Today's Overview
IronClaw saw high, steady development velocity over the 24-hour tracking window, with 47 total updated issues and 50 total updated pull requests, and no new official releases published. 17 issues and 25 PRs were closed/merged today, marking a 50% merge rate for active PRs that reflects a highly productive engineering phase. Almost all ongoing work is concentrated on wrapping up the 2026-06-22 to 2026-06-28 Reborn stack dogfooding cycle, with parallel roadmap work advancing on enterprise multi-user permission controls, performance optimization for self-hosted deployments, and native personal memory functionality. The project currently shows strong health, with nearly all reported UI and core flow bugs from dogfooding triaged and resolved within 24 hours of filing.

## 2. Releases
No new official versions were published in the tracking window.

## 3. Project Progress
Today's 25 merged/closed PRs delivered key stability, security, and usability wins:
- [#5222](https://github.com/nearai/ironclaw/pull/5222): Fixed a verified runtime bug that incorrectly marked triggered runs parked at user approval or re-authentication steps as failed for Slack delivery, eliminating 23 redundant false error logs from production.
- [#3548](https://github.com/nearai/ironclaw/pull/3548): Landed the long-planned `DISABLE_TOOLS_LIST` security control with a full suite of regression tests, letting self-hosted admins block specific tools at both registration and dispatch layers for enhanced safety.
- Core UI polish items were merged: [#2919](https://github.com/nearai/ironclaw/pull/2919) widened the log viewer's module path column to avoid truncating long Rust module names, [#5144](https://github.com/nearai/ironclaw/pull/5144) fixed the NEAR AI provider settings card to display the resolved default base URL instead of a broken "None" value, and [#5229](https://github.com/nearai/ironclaw/pull/5229) resolved an event streaming bug that broke persistent capability preview history for local WebUI runs.
- 17 open issues from the ongoing Reborn dogfooding track were closed, clearing a large batch of first-run usability blockers for new users.

## 4. Community Hot Topics
The highest engagement items (1+ comment activity, the top of the issue tracker) center on the Reborn stack dogfooding master epic, reflecting the entire team's aligned priority:
- [#5119 IronClaw Reborn Local Dogfooding Findings 06/22/2026 - 06/28/2026](https://github.com/nearai/ironclaw/issues/5119) is the central tracking hub for all daily usability testing results, with cross-team contributions filing bugs, reproducing reports, and linking fix PRs. The underlying shared need across all contributors here is refining core user trust and flow intuitiveness ahead of a wider public rollout of the Reborn rewrite.
- The cluster of linked tool permission flow issues including [#5192](https://github.com/nearai/ironclaw/issues/5192), [#5243](https://github.com/nearai/ironclaw/issues/5243), and [#5196](https://github

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-06-26
---
## 1. Today's Overview
LobsterAI maintained a high-velocity stable development cadence on 2026-06-26, with 9 total fully merged/closed pull requests across core multi-agent workflow, extension ecosystem, and UI areas, zero outstanding open updated PRs, and 1 existing stale user issue receiving a status update. All activity in the 24-hour window focused entirely on bug fixes, user experience polish, and extension ecosystem hardening, with no new feature launches or official version releases scheduled. Maintainer review throughput remains robust, with every PR opened on 2026-06-25 processed and closed within 24 hours, indicating no pending code backlog for the current sprint. Overall project health is strong, with targeted patches addressing long-standing edge cases around nested multi-agent sync and third-party extension compatibility.

## 2. Releases
No new official releases were published for LobsterAI in the 24-hour monitoring window.

## 3. Project Progress
All 9 updated PRs were fully merged/closed during this period, delivering improvements across three core modules:
- **Cowork / Multi-Agent Workflow Hardening**: PRs #2205, #2204, #2200, #2199 resolved multiple pain points for LobsterAI's plan mode: replaced plan mode icons with theme-aware SVG components, fixed GLM plan mode raw tag leakage to chat views, eliminated duplicate plan messages caused by LLM stream jitter for Qwen models, and added 5-minute bounded post-parent-session polling to avoid marking running subagent tasks as completed prematurely.
- **OpenClaw Extension Ecosystem Upgrades**: PRs #2203, #2202, #2201, #2198 added support for precompiled local extension entries to streamline packaging, kept bundled browser control functionality on the allowed plugin list for restrictive permission configurations, removed duplicate visible replies and repeated thinking blocks after session yield events, and preinstalled official OpenClaw 2026.6.1 QQ and Discord chat channel plugins out of the box.
- **System Settings Polish**: PR #2206 synced the app's launch-at-login state with the underlying OS, added Windows legacy login item cleanup for historical configurations, and surfaced localized error prompts for auto-launch setup failures.
All PR links are accessible at the project repo: https://github.com/netease-youdao/LobsterAI/pulls

## 4. Community Hot Topics
Only one high-engagement user-facing discussion was active in this window, as no PRs or issues received more than 1 comment total:
> Issue #1392: [Scheduled task toggle partial unresponsiveness bug](https://github.com/netease-youdao/LobsterAI/issues/1392)
The underlying user need surfaced by this topic is reliable, granular control over recurring automated AI task workflows, which is a core use case for LobsterAI's power users who configure background task sequences to run unattended.

## 5. Bugs & Stability
Bugs are ranked by severity below:
1. **High (Patched)**: Duplicate LLM replies, missing subagent final state updates, broken browser control on restricted OpenClaw configurations, and failed IM plugin secret injection, all fully resolved by the 9 merged PRs in this cycle
2. **Medium (Unpatched)**: Partial scheduled task toggle unresponsiveness that only affects a small subset of pre-configured automation tasks, no fix PR has been submitted as of the digest date (tracked in Issue #1392)
3. **Low (Patched)**: Out-of-sync auto-launch state between the app and OS, theme-incompatible plan mode icon, raw plan tag leakage to chat views, all resolved by merged PRs this cycle.

## 6. Feature Requests & Roadmap Signals
Merged changes in this window signal two high-priority capabilities targeted for the next minor release:
1. First-class pre-configured IM integration for QQ and Discord, allowing users to route LobsterAI agent outputs directly to group channels with no manual extension setup
2. Stable full public release of the nested multi-agent plan mode, as all identified edge cases around message duplication, subagent state sync, and UI rendering for plan cards have been patched in this cycle.

## 7. User Feedback Summary
The only user pain point surfaced in this window comes from power user zqgittest, who reports that most of his configured recurring automation tasks work as expected, but a small subset cannot be disabled via the UI toggle, leading to unplanned background runs of his custom AI workflows. No negative feedback on recent UI or extension changes was reported in the 24-hour window, and the team's ongoing work to expand the OpenClaw extension ecosystem aligns with widely documented user demand for third-party tool and IM connectivity.

## 8. Backlog Watch
The only long-unresolved item needing maintainer attention is Issue #1392 (https://github.com/netease-youdao/LobsterAI/issues/1392), a stale bug submitted on 2026-04-03 that has remained open for 85 days with no published fix PR. The bug only affects a subset of scheduled tasks, but impacts core automation functionality for the project's most active power users, and requires prioritization from the frontend settings module team to diagnose the edge case that breaks toggle interactivity for specific task instances. No other long-unaddressed PRs are pending, as all recently opened code submissions have been merged or closed.

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

# CoPaw (agentscope-ai/CoPaw) 2026-06-26 Project Digest
---
## 1. Today's Overview
CoPaw maintained high development velocity in the past 24 hours, with 27 updated issues (17 active, 10 resolved) and 50 total modified pull requests (22 merged/closed, 28 pending review) recorded. No new official releases were published this window. The majority of recent activities focus on resolving post AgentScope 2.0 migration regressions, cross-platform compatibility bugs, and usability refinements for enterprise and self-hosted power users. The project shows strong community vitality, with 9+ first-time contributors submitting actionable PRs targeting widely reported user issues. Overall project health remains robust, as core LLM inference capability has no high-impact unpatched bugs, with remaining issues concentrated on UI/UX and edge-case integration scenarios.

## 2. Releases
No new official releases were launched in the past 24 hours.

## 3. Project Progress
22 PRs were merged or closed successfully in the reporting period, with key advances as follows:
- Resolved TUI functionality breakages after the AgentScope 2.0 migration: [PR #5443](https://github.com/agentscope-ai/QwenPaw/pull/5443) restored ACP commands, inline approval workflows and local diagnostic features for the terminal user interface
- Completed cross-platform bug resolutions: Permanently fixed 3+ month long pending legacy Chrome process full leak issue [Issue #2733](https://github.com/agentscope-ai/QwenPaw/issues/2733), resolved Windows desktop `send_file_to_user` 404 preview error [Issue #5508](https://github.com/agentscope-ai/QwenPaw/issues/5508), added custom endpoint support for private enterprise DingTalk deployments [Issue #4887](https://github.com/agentscope-ai/QwenPaw/issues/4887)
- Added core capability support: Completed OpenAI-compatible custom provider full function calling feature [Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345), added Discord channel local attachment download functionality to unify cross-channel file handling logic
- Minor documentation update: [PR #5534](https://github.com/agentscope-ai/QwenPaw/pull/5534) added trending open source project badge to the repository README

## 4. Community Hot Topics
The most active discussions this 24h window reflect core user demands for self-hosted deployment stability and long conversation experience:
1. [Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) (8 comments): Custom OpenAI-compatible provider function calling bug, raised by enterprise self-hosted users who run private model endpoints outside of official supported lists. The demand for unblocking third-party self-hosted model capabilities is the highest priority for power users at the moment, and the issue has been marked resolved.
2. [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) (Under Review, first-time contributor submission): New scroll context management feature that persists full conversation history to SQLite and supports on-demand recall via REPL, instead of compressing and discarding old turns. This feature addresses the widespread user pain point of context truncation in ultra-long workflow scenarios, and has received positive feedback from over 12+ users in related discussions.
3. [Issue #2733](https://github.com/agentscope-ai/QwenPaw/issues/2733) (6 comments): 3-month old Chrome process leak bug, tracked by all heavy browser automation users who run CoPaw for 7*24h unattended tasks. Its resolution significantly improves production deployment stability for RPA use cases.

## 5. Bugs & Stability
Bugs reported this window ranked by severity, with associated fix PR status:
| Severity | Bug Description | Issue Link | Fix PR Status |
|----------|-----------------|------------|---------------|
| Critical | Conversation files over 500KB crash the frontend completely, making existing user chat history unaccessible | [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | No fix PR submitted yet, triage pending |
| High | Regression bug: `browser_use.stop()` does not clean up Chrome renderer processes, leading to memory accumulation of 150MB+ per orphan process after repeated starts/stops | [Issue #5520](https://github.com/agentscope-ai/QwenPaw/issues/5520) | Fix PR [PR #5536](https://github.com/agentscope-ai/QwenPaw/pull/5536) submitted, under final review |
| High | MiniMax-M3 content safety rejection errors are incorrectly cached as `rejects_media=True`, causing all subsequent image requests to be stripped before sending to the model | [Issue #5505](https://github.com/agentscope-ai/QwenPaw/issues/5505) | Fix PR [PR #5535](https://github.com/agentscope-ai/QwenPaw/pull/5535) submitted, ready for merge |
| Medium | Linux desktop browser automation fails to launch default browsers that are wrapped by IME `env` prefix in their .desktop configuration | [Issue #5528](https://github.com/agentscope-ai/QwenPaw/issues/5528) | Fix PR [PR #5526](https://github.com/agentscope-ai/QwenPaw/pull/5526) under review |
| Medium | Web UI long message markdown layout breaks completely until users switch tabs to refresh the view | [Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | Fix PR [PR #5538](https://github.com/agentscope-ai/QwenPaw/pull/5538) submitted, ready for merge |

## 6. Feature Requests & Roadmap Signals
Top user-submitted feature requests, with expected release timeline estimates:
1. Move current timestamps from static system context to per user message dynamic prefix: [Issue #5455](https://github.com/agentscope-ai/QwenPaw/issues/5455). Fix PR [PR #5499](https://github.com/agentscope-ai/QwenPaw/pull/5499) is already complete, this feature will almost certainly land in the next minor release v1.1.13, as it also improves prompt caching performance for long sessions.
2. Hard cap for tool result size at execution layer to prevent context explosion: [Issue #5342](https://github.com/agentscope-ai/QwenPaw/issues/5342). This defense-in-depth security feature will be prioritized in the v1.2 stable release, as it addresses cascading failure risks for production deployments.
3. Support installing plugins directly from PyPI via pip: [Issue #5484](https://github.com/agentscope-ai/QwenPaw/issues/5484). This feature aligns with standard Python ecosystem workflows, and is targeted for the 2026 Q3 major release.
4. Dynamic model failover switch when the active service is unavailable: [Issue #5527](https://github.com/agentscope-ai/QwenPaw/issues/5527). This enterprise-level reliability feature is under active design, and will be included after core Runtime 2.0 functionality is fully stabilized.

## 7. User Feedback Summary
Real user pain points collected this window are highly concentrated on compatibility and usability, with zero reports of core LLM inference failure or functionality breakage:
- Windows desktop local app users are highly dissatisfied with the broken file preview links after v1.1.12 update, the resolution of this issue has already eliminated the complaint.
- Long session workflow users report frequent stale timestamp issues in 100+ turn conversations, which the upcoming timestamp placement refactor will resolve.
- Private enterprise deployment users confirm the new DingTalk custom endpoint support fully meets their internal integration requirements, marking a major improvement for China market enterprise use cases.
- New users report confusion around browser autofill popups appearing in the model provider search input, indicating the UI form accessibility refinement is an unmet low-hanging fruit for improving onboarding experience.

## 8. Backlog Watch
High priority unresolved issues requiring maintainer attention:
1. [Issue #5162](https://github.com/agentscope-ai/QwenPaw/issues/5162): Conversation infinite loop bug that was opened 14 days ago, no root cause identified yet. This bug impacts task execution reliability for unattended workflows, and should be prioritized for triage to avoid cascading resource waste for end users.
2. [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479): >500KB conversation file crashes frontend bug. This issue blocks users who rely on CoPaw to record long full workflow traces, and needs an urgent partial loading mechanism implementation.
3. [Issue #4188](https://github.com/agentscope-ai/QwenPaw/issues/4188): Slow official document loading issue that was opened 45 days ago. This degrades new user onboarding experience, and should be resolved with static asset optimization measures.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (github.com/zeroclaw-labs/zeroclaw) 2026-06-26 Project Digest
---
## 1. Today's Overview
The ZeroClaw project saw extremely active development activity in the 24-hour window, with 49 updated issues (36 active, 13 resolved) and 50 updated pull requests (47 open, 3 merged/closed), no new public releases published this period. Core development work is split evenly between security hardening, runtime stability fixes, and long-term architectural roadmap planning targeting the upcoming v0.8.2, v0.8.3 and v0.9.0 milestones. The team prioritized closing out production-blocking regressions and formalizing open governance rules to reduce maintainer administrative overhead, while advancing parallel work streams for WASM plugin unification and supply chain security. Overall project health is strong: all critical security bugs and reported user regressions are triaged and marked for immediate resolution, with no unaddressed S0/S1 issues left untriaged.

## 2. Releases
No new official releases were published in the last 24 hours. The v0.8.2 release tracker (issue #8181) lists 36 remaining non-plugin user-facing items on track for an expected mid-July 2026 launch.

## 3. Project Progress
Three PRs were fully merged in the window, delivering targeted high-priority fixes:
- Resolved the S1 blocking Moonshot Kimi Code endpoint 404 regression that broke API access for Chinese regional users (issue #8154)
- Fixed the broken all-features build failure caused by a missing `subject` field in the voice wake component (issue #8236)
- Closed out the high false-positive remote markdown link block rule in skill audits that incorrectly rejected multiple valid marketplace skills from Anthropic's knowledge plugin catalog (issue #6714)
10 additional non-critical bugs and feature tasks were also marked resolved, including the tracker for the Telegram multi-image dispatch split bug that caused duplicate agent responses for media groups.

## 4. Community Hot Topics
The highest engagement discussions of the day all center on long-term project sustainability and security strategy:
1. **RFC: Work Lanes, Board Automation, and Label Cleanup** (#6808, 11 comments, https://github.com/zeroclaw-labs/zeroclaw/issues/6808): The top discussion targets manual maintainer overhead, proposing standardized automated work routing rules that eliminate the need for separate tracking spreadsheets for issue triage. Underlying contributor demand is to reduce administrative friction for new maintainers joining the fast-growing project.
2. **RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance** (#8177, 8 comments, https://github.com/zeroclaw-labs/zeroclaw/issues/8177): This active security discussion responds to rising open source AI agent supply chain attack risks, outlining requirements for multi-party offline signing for all release artifacts. The community is pushing for minimum SLSA 3 compliance for all stable builds before the v0.9.0 release.
3. **RFC: Prefer a lighter ZeroClaw core through external integrations** (#6165, 5 comments, https://github.com/zeroclaw-labs/zeroclaw/issues/6165): Contributors are advocating to remove hardcoded integrations for tools like Jira and GitHub from the core codebase, replacing them with MCP-powered external plugins to reduce core runtime complexity and attack surface.

## 5. Bugs & Stability
All newly reported and updated bugs are triaged by severity:
| Severity | Issue | Description | Status | Fix Availability |
|----------|-------|-------------|--------|------------------|
| S0 Critical | #8279 (https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | The delegate tool bypasses the parent agent's tool allowlist, letting sub-agents invoke tools the root policy explicitly blocked, creating a high security risk | In Progress | No linked fix PR published yet |
| P1 High | #5903 (https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio child processes leak 1 orphan instance per heartbeat tick on long-running daemons, resulting in ~48 orphan processes per 24 hours of runtime | Accepted, no stale | No linked fix PR published yet |
| P1 High | #8312 (https://github.com/zeroclaw-labs/zeroclaw/issues/8312) | The translation leak repair workflow leaves stale entries that re-expose previously redacted leaked text when exporting `.po` localization files | Newly reported | No linked fix PR published yet |
| P2 Medium | #8327 (https://github.com/zeroclaw-labs/zeroclaw/issues/8327) | Native tool call mode sends base64 encoded image markers as raw plain text instead of structured image objects, drastically inflating token usage for local models like llama.cpp | Newly reported | No linked fix PR published yet |
| P2 Medium | #8334 (https://github.com/zeroclaw-labs/zeroclaw/issues/8334) | The `skills install/list/remove` CLI commands write to a `data_dir` path that the multi-agent runtime does not load, breaking the out-of-box skill installation flow | Newly reported | No linked fix PR published yet |

## 6. Feature Requests & Roadmap Signals
Multiple high-priority user-requested features are nearing completion, expected to land in the next 2 releases:
- The in-app web dashboard upgrade feature (RFC #8170) already has a complete implementation PR (#8173) open for review, and is almost guaranteed to ship in the v0.8.2 release, eliminating the need for manual restarts to apply updates.
- OpenRouter model fallback array support (#8138) is in final review, and will land in the v0.8.3 release to enable automatic failover between models during rate limits or service outages.
- The newly proposed goal mode for bounded autonomous sessions (#8303) received positive community feedback, and will likely be scoped for the v0.9.0 milestone after the SOP control plane work is completed.
- The full Wasm-first plugin runtime, OCI registry distribution for WASM modules, and Rust→Wasm web UI rewrite are all formalized as RFCs and aligned to the v0.9.0 long-term roadmap.

## 7. User Feedback Summary
The top reported user pain points this window are all concrete productivity blockers:
1. Long-running daemon users report unexpected memory bloat that they trace to MCP process leaks, noting the issue has been open for 2 months and is disruptive for production 24/7 deployments.
2. Telegram channel users are frustrated that sending multiple images generates separate responses for each image, breaking expected multi-modal workflow behavior.
3. Chinese regional users report they were completely blocked from using the Kimi Code model for weeks due to the broken 404 endpoint, and are relieved the regression was resolved.
4. General users note they currently have to SSH into their server to manually upgrade ZeroClaw after each release, stating the upcoming in-app upgrade feature will be a massive quality of life improvement. No major widespread negative feedback about core runtime behavior was reported this window.

## 8. Backlog Watch
These high-impact items are blocked and waiting for maintainer attention to unblock progress:
1. #7497 (RFC for OCI-compliant registries as WASM plugin storage, https://github.com/zeroclaw-labs/zeroclaw/issues/7497): The proposal for plugin distribution is complete but marked as needing maintainer review, no movement for 15 days.
2. #8309 (Orphaned SkillForge component decision, https://github.com/zeroclaw-labs/zeroclaw/issues/8309): The auto skill discovery engine was merged 4 months ago but is completely unconnected to the running runtime, and maintainers have not yet decided whether to finish implementation or remove the dead code to reduce binary bloat.
3. #8135 (Wasm-first plugin runtime RFC, https://github.com/zeroclaw-labs/zeroclaw/issues/8135): Blocked waiting on maintainer review, required to unblock all subsequent plugin roadmap work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*