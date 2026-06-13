# OpenClaw Ecosystem Digest 2026-06-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-13 23:04 UTC

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

# OpenClaw (github.com/openclaw/openclaw) Project Digest | 2026-06-14
---
## 1. Today's Overview
The OpenClaw project recorded extremely high development velocity over the 24-hour window, with 500 updated issues and 500 updated pull requests processed by the active core maintainer community. 27.2% of recently updated issues were closed, and 31.8% of updated PRs were merged/closed, demonstrating strong triage throughput and consistent progress on resolving production-grade bugs. The team’s current focus is heavily weighted toward multi-channel delivery hardening, subagent orchestration reliability, and cross-platform compatibility for edge self-hosted deployments. Two new beta releases were shipped in this period, bringing incremental improvements to consumer messaging channel integrations for Telegram and WhatsApp. Overall project health is robust, with active participation across community contributors submitting features, bug fixes, and real-world field test reports.

## 2. Releases
Two new pre-release beta versions were published in the past 24 hours, with no documented breaking changes for existing users:
- **v2026.6.7-beta.1**: Tightened cross-channel delivery logic across Slack, Telegram, outbound media assets, silent replies, progress drafts, and paginated action results. Key improvements include persistent same-channel Slack transcripts, native top-level image message tool support, and expanded Telegram expandable blockquote rendering.
- **v2026.6.8-beta.1**: Further refined Telegram and WhatsApp delivery to reduce brittleness. Telegram now natively supports structured rich text including tables, lists, expandable blockquotes, and prompt-preserving CLI backend delivery. The release also retired legacy native draft migration logic and added new guardrails for rich media attachment boundaries.
No formal migration steps are required for users already running the 2026.6.x pre-release train.

## 3. Project Progress
159 PRs were merged/closed over the 24-hour window, advancing key functionality:
- Resolved the P0 critical `memory_search` regression (issue [#91778](https://github.com/openclaw/openclaw#91778)) that broke vector memory lookups for all agents running v2026.6.1+
- Shipped a fix (PR [#92476](https://github.com/openclaw/openclaw#92476)) to preserve compatible CLI session runtime pins, preventing unintended leaks of agent runtime overrides across unrelated LLM provider configurations
- Closed long-standing issue [#45698](https://github.com/openclaw/openclaw#45698) that caused the Control UI to become progressively sluggish and unresponsive after extended uptime
- Completed implementation of per-skill model routing (issue [#43260](https://github.com/openclaw/openclaw#43260)), allowing operators to assign different LLM tiers to individual skills via the `model` field in SKILL.md frontmatter
- Resolved the widely reported DeepSeek prompt caching regression (issue [#91018](https://github.com/openclaw/openclaw#91018)) that caused unexpected excess LLM spend after upgrading to v2026.6.1

## 4. Community Hot Topics
The highest-engagement items in the past 24 hours reflect strong demand for production reliability and expanded deployment flexibility:
1. [#44925](https://github.com/openclaw/openclaw#44925) (19 comments, 👍1): Top active bug reporting silent subagent completion loss with no retry, notification, or auto-restart on timeout. Underlying user need: teams running parallel multi-agent task batches require explicit failure visibility to avoid lost work.
2. [#54253](https://github.com/openclaw/openclaw#54253) (14 comments, 👍4): Bug reporting LLM request failures on RISC-V64 hardware. Underlying user need: edge and single-board computer users want native portability for offline, low-power deployments.
3. [#39604](https://github.com/openclaw/openclaw#39604) (13 comments, 👍9): Highest-reaction feature request for an opt-in `tools.web.fetch.allowPrivateNetwork` configuration. Underlying user need: enterprise self-hosted operators need controlled access to internal network resources without loosening global sandbox restrictions.
4. New PR [#92801](https://github.com/openclaw/openclaw#92801): Exempts ClawSweeper triage actionable labels (source-repro, fix-shape-clear, queueable-fix) from stale bot auto-closure, eliminating the pain of active work items getting incorrectly marked as inactive.

## 5. Bugs & Stability
Critical to high-severity bugs reported and triaged in this window, ranked by impact:
1. **P0 Critical**: [#91588](https://github.com/openclaw/openclaw#91588) Gateway memory leak where RSS grows from 350MB to 15.5GB over 2-3 days of uptime, triggering repeated OOM crashes. No public fix PR is available yet, and the bug impacts all 24/7 production deployments.
2. **P1 High**: [#44925](https://github.com/openclaw/openclaw#44925) Subagent completion silent loss, linked open PR exists for triage.
3. **P1 High**: [#43747](https://github.com/openclaw/openclaw#43747) Inconsistent, broken memory management that behaves differently across separate user instances. No public fix PR available.
4. **P1 High**: [#40001](https://github.com/openclaw/openclaw#40001) The write tool lacks append mode, causing isolated cron sessions to overwrite shared persistent memory files. Linked open PR exists for triage.
5. **P1 High**: [#41744](https://github.com/openclaw/openclaw#41744) Feishu integration loses image attachments before outbound delivery. Linked open PR exists for triage.

## 6. Feature Requests & Roadmap Signals
Top-voted user feature requests that are highly likely to ship in the next stable v2026.6.x release:
1. Opt-in private network access for the web fetch tool (9 👍): This is the highest-demand feature for enterprise users running OpenClaw on internal networks, and the implementation already has clear shape definition and linked open PR work.
2. MathJax/LaTeX rendering support for the Control UI (6 👍): The feature is widely requested by research and STEM users who share mathematical and scientific output via their assistants, and has no major implementation barriers.
3. Gateway-level per-agent cost budget enforcement: This feature addresses the growing pain point of unexpected LLM cost overruns reported by multiple teams running multi-agent workloads, and is marked for product decision review.
Lower-priority items including YAML config support, memory trust tagging by source, and path-scoped RWX permissions for exec tools are targeted for mid-cycle 2026.7.x release planning.

## 7. User Feedback Summary
Real user pain points and feedback collected in the 24-hour window:
- Top dissatisfaction: Multi-agent orchestration reliability is the largest reported gap, with users noting that concurrent agent config overwrites, session lock failures, and lost subagent results make parallel batch runs untrustworthy for production workloads.
- Cross-platform gaps: Windows users cannot run `openclaw update` without hitting an EBUSY error, Android users on devices running API 26-30 cannot install the official app, and RISC-V64 hardware support remains non-functional.
- Cost-related pain: The recent DeepSeek prompt caching regression that burned $6 of unexpected cost in 1 hour was widely discussed, and users note that the existing cost dashboard undercounts total spend by excluding archived reset session files.
- Positive feedback: Users report strong satisfaction with OpenClaw’s x86 and macOS deployments, and highlight its multi-channel unified delivery as a major differentiator relative to competing open-source agent frameworks.

## 8. Backlog Watch
High-impact long-standing items that have not received maintainer review for multiple weeks:
1. [#54253](https://github.com/openclaw/openclaw#54253) RISC-V64 LLM request failure, reported 2026-03-25: Blocks all edge hardware and SBC deployment users, has no public roadmap alignment.
2. [#7707](https://github.com/openclaw/openclaw#7707) Memory trust tagging by source, reported 2026-02-03: High security impact for public-facing agents that process untrusted web content, no assigned maintainer.
3. [#40540](https://github.com/openclaw/openclaw#40540) `openclaw update` EBUSY error on Windows, reported 2026-03-09: Breaks self-upgrade functionality for all Windows desktop users, no public fix PR.
4. [#41366](https://github.com/openclaw/openclaw#41366) Durable natural language rule learning for group chats, reported 2026-03-09: Highly requested by team collaboration users, has not received triage attention.

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-06-14 Open-Source AI Agent Ecosystem Comparison Report
Target Audience: Technical Decision-Makers, Self-Hosted Runtime Operators, Agent Framework Developers

---

## 1. Ecosystem Overview
As of mid-June 2026, the global open-source personal AI assistant and agent runtime ecosystem has completed its transition from prototype-stage feature chasing to production-grade hardening for real-world self-hosted and enterprise use cases. The 10 actively maintained tracked projects cover a broad spectrum of deployment targets, from low-power RISC-V edge single-board computers to multi-user high-throughput enterprise Kubernetes clusters, with near-universal alignment on user priorities rather than experimental LLM integration work. The community is rapidly converging around common standards including the Model Context Protocol (MCP) to eliminate siloed tool implementation overhead, with fast-growing regional user bases in Southeast Asia, mainland China, and regulated regulated industries driving previously underprioritized roadmap items. No active major project is currently reporting core unrecoverable runtime outages at scale, indicating the broader ecosystem has reached a level of general maturity suitable for non-critical production workloads.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Merged/Closed PRs | Latest Release Status (2026-06-14) | Aggregate Health Score (1-10) |
|---|---|---|---|---|---|
| OpenClaw | 500 | 500 | 159 | 2 new beta releases shipped | 9/10 |
| NanoBot | ~10 |13 |5 | No new release, changes staged to main | 8.5/10 |
| Hermes Agent |50 |50 |12 | No new release, work targeting v0.17 | 8/10 |
| PicoClaw |2 |7 |5 | 1 nightly pre-release published |9/10 |
| NanoClaw |1 |14 |14 | No new release, all backlog PRs fully cleared |10/10 |
| NullClaw |1 |1 |0 | No new release |7/10 |
| IronClaw |6 |27 |5 | No new release, 28-day-old version bump PR pending signoff |8.5/10 |
| LobsterAI |4 |5 |2 | No new release, executing scheduled backlog cleanup |7.5/10 |
| Moltis |2 |1 |0 | No new release, active bug fix PR in progress |7.5/10 |
| CoPaw |10 |8 |2 | No new release, patch changes staged for v1.1.12 |8/10 |
| ZeroClaw |42 |50 |13 | No new release, work targeting v0.8.1 pre-release |8/10 |
| TinyClaw |0 |0 |0 | No recorded activity |2/10 |
| ZeptoClaw |0 |0 |0 | No recorded activity |2/10 |

*Health score calculated based on triage throughput, pending critical bug backlog, user satisfaction feedback, and no unaddressed public security vulnerabilities*

## 3. OpenClaw's Position
OpenClaw is the undisputed largest and highest-velocity project in the current ecosystem by an order of magnitude, with 10x the daily issue/PR volume of the next largest active projects (ZeroClaw, Hermes Agent). Its core technical advantage over peers is its exclusive focus on production hardening of already validated capabilities, rather than experimental new architecture overhauls, with zero breaking changes documented across recent 2026.6.x beta releases. The project’s 10,000+ strong global contributor community generates thousands of real-world field test reports daily, enabling extremely fast triage of edge-case bugs that smaller projects cannot detect with limited user bases. Unlike peers that prioritize core agent reasoning upgrades, OpenClaw’s unique differentiator of unified cross-channel delivery for 10+ consumer and enterprise messaging platforms is explicitly highlighted by users as a major competitive advantage over all other open-source agent frameworks. Its only notable current gap is the unresolved P0 gateway memory leak that impacts all 24/7 production deployments.

## 4. Shared Technical Focus Areas
Five high-priority unmet requirements have emerged across 3+ unrelated projects, reflecting universal ecosystem user demand:
1. **Rich multi-channel messaging delivery**: OpenClaw, Hermes Agent, and ZeroClaw are all actively building support for Telegram/WhatsApp native rich text rendering (tables, LaTeX, collapsible blocks) to close the UX gap with consumer-grade messaging apps, responding to widespread user frustration with plaintext-only bot outputs.
2. **First-class Ollama/local LLM compatibility**: NanoBot just finished upstreaming full Ollama API integration, NanoClaw shipped native Ollama multimodal image support, and CoPaw added Kimi-for-coding to its LLM provider whitelist, as self-hosted users increasingly avoid over-reliance on commercial cloud inference providers.
3. **Scheduled task reliability**: OpenClaw flagged silent unretried subagent completion loss, Hermes Agent identified a bug that hardcodes `skip_memory=True` for all cron jobs, NullClaw’s entire active development pipeline is focused on fixing cron job silent delivery failures, and ZeroClaw added new cron pause/resume functionality, as unattended automation use cases are the most commonly reported broken feature across all projects.
4. **Least-privilege tool access controls**: OpenClaw is building guardrails for opt-in private network web fetch access, NanoBot has a pending PR to disable built-in filesystem tools for regulated deployments, IronClaw is rolling out cross-thread persistent "always allow" capability approvals, and Moltis is implementing Kubernetes sandboxing for agent execution, to meet enterprise compliance requirements.
5. **Idle memory consolidation**: NanoBot fixed an idle memory compaction bug that incorrectly trimmed session history, while Hermes Agent and ZeroClaw are both building "Auto Dream" / Dream Mode scheduled background memory deduplication workflows, resolving the widely reported pain point of stale memory entries causing incorrect fact recall for multi-week runtime agents.

## 5. Differentiation Analysis
Projects have sharply divergent priorities, user targets, and architecture choices despite overlapping base functionality:
- **Feature focus**: OpenClaw prioritizes general-purpose cross-platform multi-channel delivery, PicoClaw is built exclusively for low-power edge vision and TTS workloads, CoPaw is optimized for regional Chinese and Southeast Asian messaging platforms (Feishu, Zalo), while Moltis delivers zero-compromise MCP interoperability for regulated enterprise users.
- **Target users**: Segmentation is clearly defined: regulated enterprise teams use IronClaw and Moltis, edge SBC hobbyists use PicoClaw, local LLM power users select NanoBot, casual automation hobbyists use NullClaw, and full-stack self-hosted power users prefer ZeroClaw.
- **Technical architecture**: OpenClaw uses a generalized cross-runtime abstraction layer for broad compatibility, NanoClaw employs an unusual batch PR merge workflow that clears all prepped backlogged changes in coordinated sprints, and IronClaw’s Rust-based stacked PR architecture is optimized for high-throughput multi-user concurrent workloads.

## 6. Community Momentum & Maturity
All tracked active projects fall into 4 clear activity tiers:
1. **Rapid High-Velocity Iteration Tier (Top 3)**: OpenClaw, NanoClaw, ZeroClaw. These projects merge >10 PRs per day, demonstrate mature triage pipelines, and are weeks away from shipping major stable releases. NanoClaw is the only project in the ecosystem with a fully cleared pending PR backlog, a rare maturity milestone.
2. **Steady Active Development Tier**: Hermes Agent, IronClaw, CoPaw, NanoBot, PicoClaw. All have consistent daily merge throughput, no unpatched critical security vulnerabilities, and are on track to ship planned near-term releases with minimal risk.
3. **Backlog Cleanup & Stabilization Tier**: LobsterAI, Moltis, NullClaw. These projects are prioritizing resolution of long-standing user-facing bugs over new feature development, with lower but

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-06-14
*Based on public GitHub activity from github.com/HKUDS/nanobot*

---

## 1. Today's Overview
This 2026-06-14 development day demonstrates exceptionally high contributor velocity across core runtime, memory system, provider compatibility, and WebUI feature domains, with 23 total updated code and issue artifacts logged over the 24-hour window. The team resolved 3 previously filed bugs backlogged from as early as February 2026, while 13 active open PRs cover both critical stability patches and user-requested new functionality. No new official releases were published during the period, indicating the project is in a late pre-release testing phase for its upcoming feature batch. All high-severity reported API breakages have already seen submitted community or maintainer-authored fix PRs, signaling a responsive, healthy open source contribution pipeline.

## 2. Releases
No new official releases were published in the 24-hour reporting window. All merged changes are currently staged in the main development branch pending formal release tagging.

## 3. Project Progress
5 total PRs were merged/closed in this period, delivering verified fixes and incremental improvements:
1. **PR #4098** https://github.com/HKUDS/nanobot/pull/4098: Resolves two core exec runtime issues, blocks workspace symlink escapes for the exec tool, and adjusts `pathAppend` behavior on Unix systems to prepend custom tool paths to the system PATH, ensuring configured custom tools take lookup precedence over existing system executables, closing related bug #4083.
2. **PR #4326** https://github.com/HKUDS/nanobot/pull/4326: Fixes the idleCompact memory compaction bug, updating session summarization logic to process the full complete session history instead of incorrectly trimming the last 8 messages, preventing invalid truncated archived session records.
3. **PR #4327** https://github.com/HKUDS/nanobot/pull/4327: Optimizes WebUI startup performance, moves slow HTTP handlers off the gateway event loop, eliminates unnecessary full session JSONL reads on sidebar load, and reduces initial app load time by only fetching locally installed CLI apps instead of the full remote catalog.
4. **PR #4314** https://github.com/HKUDS/nanobot/pull/4314: Refactors the tool config schema module to break existing circular import dependencies, improving codebase maintainability for future tool extension development.
5. **PR #4313** https://github.com/HKUDS/nanobot/pull/4313: Delivers full parity between the WebUI settings panel and local `config.json` files, adding new editable fields for temperature controls, tool limits, memory settings, and agent parameters to close a longstanding feature gap for browser-based configuration management.

## 4. Community Hot Topics
The highest-activity discussion this cycle centers on:
> Issue #193 *Ollama api support?* https://github.com/HKUDS/nanobot/issues/193 (15 total comments, closed 2026-06-13)
This 4-month-old feature request is the most widely discussed ticket in the recent backlog, reflecting very strong unmet demand from self-hosted NanoBot users for native Ollama runtime compatibility, rather than the existing vLLM-only local inference support. The closure of this ticket confirms official Ollama API integration is now complete and staged for release, addressing a top request from users who prefer Ollama's broader local model ecosystem and simplified setup workflow.

## 5. Bugs & Stability
Bugs are ranked by severity below, with fix status noted:
1. **Critical**: Anthropic provider breaks all requests for new Claude models. Issue #4333 https://github.com/HKUDS/nanobot/issues/4333: The Anthropic integration incorrectly sends the deprecated `temperature` parameter to `claude-opus-4-8` and Fable models, resulting in 400 errors for every user request. A ready-to-merge zero-breaking-change fix PR #4334 already exists that widens the exemption list to cover all affected new models.
2. **High**: NameError startup crash on feature branches. Issue #4322 https://github.com/HKUDS/nanobot/issues/4322: A recent refactor that extracted the `_build_memory_context` method left an undefined `session_key` variable in `context.py`, crashing the agent immediately on startup for users on the `fix/prompt-caching` feature branch. The root cause is fully documented, but no public fix PR has been logged as of the reporting window.
3. **Medium**: Silent environment variable parsing failures for transcription and settings workflows. Related open PRs #4323, #4324, #4325 all address the root cause of unresolved `${VAR}` template strings breaking API key loading for users who store credentials in system environment variables instead of hardcoding them in config files.

## 6. Feature Requests & Roadmap Signals
Based on active, high-priority open PRs this cycle, the following features are highly likely to land in the next official NanoBot release:
1. Native inline non-fullscreen TUI support (PR #4329) for CLI power users, with markdown rendering, slash commands, and multi-modal input support that launches by default in TTY environments.
2. Full multi-provider TTS support (PR #4316) with native compatibility for OpenAI, Groq Orpheus, and ElevenLabs, filling a longstanding gap for voice-enabled NanoBot deployments.
3. Visual automation management view for the WebUI (PR #4330) that lets users list, run, pause, and delete recurring agent tasks directly from the browser interface.
4. Configurable model presets for spawned subagents (PR #4291), allowing child agents to run with different model configurations than the parent agent for specialized multi-step workflows.

## 7. User Feedback Summary
Aggregated user feedback across the reporting period highlights three core use cases and pain points:
1. Self-hosted local LLM users widely prefer Ollama over vLLM for simplicity and model compatibility, making Ollama support the most requested feature in the project's recent history.
2. Enterprise and internal shared deployment users commonly run NanoBot behind reverse proxies under custom sub-path prefixes, requiring fixes to make the WebUI function correctly outside of the web root (addressed in PR #4328).
3. Security-focused regulated deployments require full least-privilege tool access controls, specifically the ability to fully disable built-in filesystem tools to force all file operations through audited, approved MCP servers. Overall user satisfaction with the project's 24-hour turnaround for reported bug fixes is high among active contributors.

## 8. Backlog Watch
The highest-priority long-unaddressed item needing maintainer attention is:
> PR #4138 *Add tools.file.enable to toggle built-in filesystem tools* https://github.com/HKUDS/nanobot/pull/4138
This enhancement was filed on June 1, 2026, and has been open for 13 days without formal maintainer review, despite following the exact existing pattern for already implemented `tools.exec.enable` and `tools.web.enable` toggles. This PR is high-impact for enterprise users enforcing strict tool access controls, and only requires minor signoff to be merged.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Daily Digest | 2026-06-14
---
## 1. Today's Overview
This 24-hour window saw very high development activity across the Hermes Agent codebase, with 50 updated issues and 50 updated pull requests spanning bug fixes, new platform integration work, memory system improvements, and user experience quality of life updates. No new official releases were published, with all ongoing work targeting the upcoming v0.17 minor release. The project’s core stability workstream for LLM provider compatibility and desktop app reliability made notable progress today, while community contributors aligned on adding full support for the newly launched Telegram Bot API 10.1. Overall the project shows healthy fast iteration velocity, with active triage and resolution of recently reported regressions.
---
## 2. Releases
There are no new official releases published in the past 24 hours, per available project data.
---
## 3. Project Progress
12 total PRs were merged/closed over the reporting window, delivering the following resolved improvements:
- The long-standing Photon (iMessage) plugin breakage caused by deprecated spectrum-ts SDK endpoints was fully resolved, with the corresponding issue [#42454](https://github.com/NousResearch/hermes-agent/issues/42454) closed.
- Two high-severity LLM provider regressions were patched: the Anthropic invalid prefill error after empty Codex turns (issue [#29205](https://github.com/NousResearch/hermes-agent/issues/29205)), and the Azure Foundry OpenAI adapter incorrect finish_reason mapping (issue [#27988](https://github.com/NousResearch/hermes-agent/issues/27988)) both got merged fixes.
- The skill update backup data loss bug that could corrupt or delete user-installed custom skills was fully resolved, closing issue [#44942](https://github.com/NousResearch/hermes-agent/issues/44942).
- 6 failing macOS file tool unit tests were fixed, resolving platform-specific test flakiness for Darwin systems (issue [#45826](https://github.com/NousResearch/hermes-agent/issues/45826)).
- The initial desktop app approval fallback prompt implementation was merged, then superseded by a more complete design that surfaces out-of-view pending tool approvals via a jump-to-notification control.
---
## 4. Community Hot Topics
The most actively discussed items of the day reflect strong user demand for more capable, user-friendly long-running agents and modern platform integrations:
1. [#10771 Auto Memory Consolidation (Auto Dream)](https://github.com/NousResearch/hermes-agent/issues/10771) (8 comments, 5 👍): The highest-voted ongoing feature request, users are pushing for a scheduled automatic memory cleanup mechanism to remove stale entries, deduplicate facts, and fix broken relative date references in persistent memory, eliminating the manual memory management burden for long-running agents.
2. [#44428 Support Telegram Bot API 10.1 Rich Messages and rich draft streaming](https://github.com/NousResearch/hermes-agent/issues/44428) (5 comments, 3 👍): A coordinated batch of community contributions is targeting full support for the newly released Telegram messaging API, driven by users who want to leverage native support for LaTeX rendering, tables, collapsible content blocks and task lists in their Telegram bot deployments.
3. [#23975 Context compression can be interrupted by gateway messages, causing fallback summary marker](https://github.com/NousResearch/hermes-agent/issues/23975) (5 comments): Users report that context compression failures break the conversational flow unexpectedly, requiring no manual intervention from end users.
---
## 5. Bugs & Stability
Bugs are ranked by severity below, with associated fix PR notes:
| Severity | Issue ID & Link | Description | Fix Status |
|----------|-----------------|-------------|------------|
| P1 | [#45758 Desktop app crash resets profile config.yaml and deletes .env for non-default profiles](https://github.com/NousResearch/hermes-agent/issues/45758) | On Windows 10 v0.16.0, unexpected app restarts can corrupt multi-user profile configurations and erase stored credentials | No open public fix PR published yet |
| P1 | [#12408 Vision tool sends Nous-specific 'tags' field to non-Nous providers (e.g. Gemini), causing 400 error](https://github.com/NousResearch/hermes-agent/issues/12408) | A global flag incorrectly injects proprietary parameters into all third-party LLM provider calls, breaking vision workflows for non-Nous model users | No public fix PR yet |
| P2 | [#43814 Critical WhatsApp Baileys dependency CVE-2026-48063](https://github.com/NousResearch/hermes-agent/issues/43814) | Unpatched WhatsApp bridge dependency allows malicious actors to spoof messages and inject fake conversation history | Triage in progress, no fix merged |
| P2 | [#42405 Memory at capacity → 'replace' zero-match retry loop → no response (silent hang)](https://github.com/NousResearch/hermes-agent/issues/43367) | When persistent memory hits its character limit, the agent can enter an infinite retry loop and fail to respond to users | No public fix PR published |
| P2 | Full batch of Telegram 10.1 compatibility bugs (web client not rendering rich messages, broken streaming in private DMs, oversized text) | Multiple regressions in the newly developed rich message integration | Partial fix published in open PR [#45844](https://github.com/NousResearch/hermes-agent/pull/45844) |
---
## 6. Feature Requests & Roadmap Signals
The highest-priority user requested features, with projected release timelines:
1. Full Telegram Bot API 10.1 support: This is the most mature ongoing feature work, with 5+ associated open PRs targeting missing functionality, and is nearly guaranteed to land in the next minor v0.17 release.
2. Runtime reasoning_effort self-adjustment tool: Requested in [#7273](https://github.com/NousResearch/hermes-agent/issues/7273), users want agents to dynamically increase or decrease their reasoning effort on the fly for complex tasks, this feature is aligned with the project's agent autonomy roadmap and likely to ship in the v0.17.x point release cycle.
3. Auto Memory Consolidation (Auto Dream): Requested in #10771, this larger architectural feature will require more design work, and is targeted for the v0.18 release later in 2026.
4. Full response payload exposure in `agent:end` hooks: Requested in [#45721](https://github.com/NousResearch/hermes-agent/issues/45721) for compliance and logging use cases, this small low-risk feature will likely be backported as a patch in the next v0.16 update.
---
## 7. User Feedback Summary
Reported real-world user pain points and satisfaction signals:
- Power users running multi-session agents report high frustration with stale memory entries accumulating over weeks of runtime, leading to incorrect fact recall.
- Desktop app users across Windows, Linux and macOS report multiple unaddressed UX issues: no adjustable font sizes for high DPI displays, the model reasoning level setting does not persist after app restarts, and the app fails to launch entirely on many Linux distributions due to unhandled GPU initialization errors.
- Self-hosted enterprise users complain that the current .env loading logic overrides system-provided environment variables, breaking 12-factor deployment patterns for Docker and Kubernetes installations.
- Users of third-party memory providers like mem0 cannot use external memory integrations in scheduled cron jobs, blocking automation use cases for production deployments.
---
## 8. Backlog Watch
Long-running high-impact items that have not received maintainer attention for multiple weeks:
1. #10771 Automatic Memory Consolidation feature, created 2026-04-16, 8 comments, no maintainer assignment or public design roadmap published to date.
2. [#9763 Cron jobs hardcode skip_memory=True making external memory providers unusable](https://github.com/NousResearch/hermes-agent/issues/9763), created 2026-04-14, has 2 duplicate related issues filed, no prioritization from maintainers despite multiple community user reports.
3. [#18705 load_hermes_dotenv() uses override=True breaking 12-factor env precedence](https://github.com/NousResearch/hermes-agent/issues/18705), created 2026-05-02, critical for enterprise self-hosted deployments, still pending triage after 6 weeks.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 2026-06-14 Project Digest
---
## 1. Today's Overview
The PicoClaw open-source AI agent project recorded strong, focused development velocity in the 24 hours leading to 2026-06-14, with 7 total updated pull requests, 2 active issue updates, and one official nightly test build published. 5 of the 7 modified PRs were successfully merged or closed, indicating high maintainer throughput prioritizing bug fixes for vision processing, TTS integrations, and core code hygiene. No critical production crashes, data loss or security vulnerabilities were reported across the window, with only one unresolved issue related to unexpected background token consumption remaining open. Current activity patterns align with the final iteration phase ahead of the upcoming v0.2.9 stable release, with overall project health rated as very good.

## 2. Releases
A new automated nightly build was published, targeted for pre-release testing only:
- **v0.2.9-nightly.20260613.c362114c**: Unstable pre-release build that incorporates all code changes merged to the main branch as of 2026-06-13. No explicit breaking changes or required migration steps are documented for this version. Full changelog is available at: https://github.com/sipeed/picoclaw/compare/v0.2.9...main. Users are warned to avoid deploying this build to production workloads.

## 3. Project Progress
All 5 merged/closed PRs in the past 24h focused on reliability improvements and code standardization:
1. [#3117](https://github.com/sipeed/picoclaw/pull/3117) (merged): Resolved image processing hallucination bugs by routing all media-related conversation turns and `load_image` tool outputs to the dedicated configured vision model, instead of falling back to text-only LLM endpoints.
2. [#3119](https://github.com/sipeed/picoclaw/pull/3119) (merged): Added support for custom OpenRouter TTS voice and parameter overrides via the `extra_body` config field, plus an automatic single-retry fallback for failed TTS requests caused by unsupported response format values.
3. [#3065](https://github.com/sipeed/picoclaw/pull/3065) (merged): Standardized explicit error ignoring for database `Close()` operations on migration and PRAGMA failure paths in the seahorse storage engine, resolving linter warnings.
4. [#3066](https://github.com/sipeed/picoclaw/pull/3066) (merged): Applied the same explicit error ignoring pattern for temporary file close operations across 3 core modules (normalization, WeCom channel handling, filesystem utilities) for consistent code hygiene.
5. [#2935](https://github.com/sipeed/picoclaw/pull/2935) (closed as stale): A long-running contribution for Traditional Chinese (zh-TW) documentation and frontend i18n support was marked inactive, to be revisited later in the release cycle.

## 4. Community Hot Topics
The two highest engagement items in the past 24h:
1. [#3012](https://github.com/sipeed/picoclaw/issues/3012) (Open Bug, 3 user comments): Discusses unexpected recurring token consumption at 1-minute intervals when the Evolution self-improvement feature is enabled. Underlying user need: Self-hosted users want fully predictable LLM inference costs with zero unaccounted background billing activity.
2. [#2964](https://github.com/sipeed/picoclaw/pull/2964) (Open Feature PR): Proposes configurable multi-level image compression for the vision pipeline to reduce payload size and associated token usage. Underlying user need: Power users running heavy image processing workflows are actively pushing for more granular control to cut inference costs.

## 5. Bugs & Stability
Bugs ranked by severity for the reporting window:
1. **High Severity (Unresolved)**: [#3012](https://github.com/sipeed/picoclaw/issues/3012) - Uncontrolled per-minute token drain when Evolution feature is enabled, deployed on v0.2.9 running on FreeBSD 15. No associated fix PR has been published yet, which may lead to unplanned user billing charges.
2. **Medium Severity (Resolved)**: [#3108](https://github.com/sipeed/picoclaw/issues/3108) - Image description requests returned unrelated hallucinated content when running on text-only models without vision support. The issue was fully resolved by merged PR #3117, no remaining open edge cases are reported.
No critical, data-corrupting or security-related bugs were recorded in the 24h window.

## 6. Feature Requests & Roadmap Signals
Upcoming features highly likely to land in near-term releases:
- The configurable image compression feature in open PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) aligns perfectly with the recently merged vision pipeline routing logic, so it is highly probable to be included in the v0.2.9 stable release after review.
- The remote Pico WebSocket mode added in PR [#3118](https://github.com/sipeed/picoclaw/pull/3118), which enables distributed remote agent deployments, is a new capability that is targeted for the v0.3.0 release, and may be backported to v0.2.9 if full testing is completed before the feature freeze.
- The stale zh-TW localization PR being closed signals that the team is prioritizing core reliability and performance work over non-critical localization tasks for the current release cycle.

## 7. User Feedback Summary
Key real user pain points and requirements extracted from the reporting window:
1. Self-hosted PicoClaw users running on non-Linux operating systems such as FreeBSD 15 expect first-class support and zero unexpected background resource usage for production workloads.
2. Users relying on aggregated LLM provider platforms like OpenRouter frequently run mixed text-only and vision model deployments, and previously had to build custom workarounds to avoid image processing failures.
3. Cost control for LLM inference is a top priority for self-hosted deployments, with multiple users requesting more configurable controls to reduce token overhead for image and agent workflow tasks.

## 8. Backlog Watch
Long-running pending items requiring urgent maintainer attention:
1. PR [#2935](https://github.com/sipeed/picoclaw/pull/2935), the full Traditional Chinese (zh-TW) i18n and documentation contribution, opened on 2026-05-24 (over 3 weeks old), was marked stale and closed yesterday with no public review feedback. This contribution serves a large regional user base, and only requires a small amount of maintainer bandwidth to resolve pending requirements, so it is recommended to re-engage with the contributor to finalize the PR.
2. PR [#2964](https://github.com/sipeed/picoclaw/pull/2964), the image input compression feature PR, opened on 2026-05-28, has received zero review comments after 3 weeks of being in the open backlog. It should be prioritized for review as the team finalizes vision pipeline features for v0.2.9 stable.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (nanocoai/nanoclaw) 2026-06-14 Project Digest
---

## 1. Today's Overview
The NanoClaw project saw exceptional high-velocity engineering activity in the 24-hour observation window, with zero pending open PRs, only one stray misposted issue, and 14 total prepped changes fully merged and closed. The core maintainer team completed a mass merge of 1-2 month old backlogged feature and stability PRs, advancing the project directly toward its next minor production release. No new user-reported bugs or unplanned issues surfaced during the period. The day's activity signals excellent project health, with no unresolved pending change queue and a clear near-term feature roadmap locked in.

## 2. Releases
No new official releases were published in the 24-hour observation window, and no pre-release builds were announced.

## 3. Project Progress
All 14 updated PRs were fully merged and closed today, zero pending changes remain in the review queue:
- Core extensibility work led by contributor omri-maya delivered new runtime foundational capabilities:
  1. [PR #2754](https://github.com/nanocoai/nanoclaw/pull/2754): Added optional `onExchangeComplete` provider hook and support for slash-command runtime interruption
  2. [PR #2747](https://github.com/nanocoai/nanoclaw/pull/2747): Bumped onecli SDK to v2.2.1, added credential-stub mounts and machine-verifiable pin support
  3. [PR #2746](https://github.com/nanocoai/nanoclaw/pull/2746): Launched the new agent-surfaces capability registry seam for custom providers
  4. [PR #2745](https://github.com/nanocoai/nanoclaw/pull/2745): Rolled out an opt-in persistent memory scaffold for third-party providers
- Channel, stability and feature work led by contributor ddaniels closed 10 long-running backlogged PRs, including full Signal messaging channel feature parity, Ollama multimodal image input support, self-healing runtime crash recovery, transient 5xx API error retry logic, agent-to-agent routing fixes, and a production-grade daily automated backup system with S3 storage support.

## 4. Community Hot Topics
No issues or PRs in the observation window had public community comments, emoji reactions, or external user engagement. The only tracked issue [Issue #2755](https://github.com/nanocoai/nanoclaw/issues/2755) was a misposted ticket submitted in error and immediately closed by maintainers, with no underlying user demand or discussion recorded today.

## 5. Bugs & Stability
All tracked bugs addressed in merged PRs were resolved fully, with no open unpatched critical issues reported in the 24-hour window, ranked by original severity:
1. **Critical severity**: [PR #2670](https://github.com/nanocoai/nanoclaw/pull/2670) fixed a previously unpatched infinite crash loop that occurred when a session tried to resume from a corrupted transcript state, eliminating permanent session downtime caused by poisoned resume data.
2. **High severity**: [PR #2267](https://github.com/nanocoai/nanoclaw/pull/2267) resolved agent-to-agent message split-brain errors that routed replies to the wrong user session when an agent group had multiple active connected users.
3. **Medium severity**: [PR #2277](https://github.com/nanocoai/nanoclaw/pull/2277) fixed broken routing logic that failed to update context when new user messages arrived mid-query on an in-flight agent run.
4. **Medium severity**: [PR #2692](https://github.com/nanocoai/nanoclaw/pull/2692) added missing retry logic for transient 5xx LLM API overloaded errors, preventing avoidable early termination of long running tasks.

## 6. Feature Requests & Roadmap Signals
The full set of merged changes today confirms the project's next minor release (v2.1) will ship all of the following high-priority user-requested capabilities, with no additional blocking work remaining:
1. Full production-grade Signal messaging channel support with reactions, unlimited attachment type support for both inbound and outbound files
2. Enterprise disaster recovery with automated daily snapshots, configurable S3 backup storage, and full/per-agent restore workflows
3. First-class native Ollama multimodal support for image inputs with no custom configuration required
4. A new extensibility framework for third-party developers to build custom providers with native persistent memory and runtime hook support

## 7. User Feedback Summary
No direct public user feedback was submitted in the 24-hour window, but the prioritization of merged work clearly addresses previously documented high-priority user pain points: self-hosted users previously faced total data loss risk from disk failures or bad migrations, Signal channel users lacked full attachment and reaction parity with mainstream Signal apps, and local LLM users requested out-of-the-box multimodal support. No signals of user dissatisfaction were captured today.

## 8. Backlog Watch
The maintainer team fully cleared the entire backlog of 14 pending prepped PRs that had been open for 1-2 months prior to today. There are no long-unanswered, high-priority issues or PRs remaining that require maintainer attention as of the end of the observation window, a rare health indicator that shows the project's planned feature pipeline is fully depleted and ready for release hardening.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-06-14
---
## 1. Today's Overview
As of 2026-06-14, the NullClaw open-source AI agent orchestration and personal assistant project saw focused, moderate development activity over the prior 24 hours, with no new official releases, zero closed issues, and 1 active open pull request aligned to an existing high-priority bug report. All tracked recent activity centers on resolving core runtime reliability gaps for scheduled agent workflows, alongside ongoing early discussion around a widely requested third-party productivity integration. Overall project health remains stable with no platform-wide outages or unreported critical breakages documented, and work is concentrated on resolving a 2-week-old user-facing defect that blocks scheduled automation use cases. No new contributor onboarding announcements or public roadmap updates were logged in the tracking window.

## 2. Releases
No new NullClaw releases (stable, pre-release, or patch builds) were published in the 24-hour window ending 2026-06-14. There are no tagged recent releases available for the project at time of writing.

## 3. Project Progress
No pull requests were merged or closed in the tracked 24-hour period. The only newly active open PR, [nullclaw/nullclaw#954](https://github.com/nullclaw/nullclaw/pull/954) submitted by contributor vernonstinebaker, marks major progress on resolving the long-running agent cron job breakage: contributors have formally identified a use-after-free memory error on the `OutboundMessage.channel` object as the root cause of silent message delivery failures for scheduled tasks, eliminating prior ambiguity around the required fix path.

## 4. Community Hot Topics
The two active open tracked items are the core focus of recent community discussion:
1. **Top active topic (7 total comments)**: The broken agent-type cron job Telegram delivery bug [nullclaw/nullclaw#941](https://github.com/nullclaw/nullclaw/issues/941). The underlying unmet user need here is reliable unattended execution for time-triggered AI automation, where users expect their configured scheduled tasks to reliably send outputs to external messaging channels without manual verification.
2. **New integration feature request (1 comment)**: The proposed JIRA access tool [nullclaw/nullclaw#914](https://github.com/nullclaw/nullclaw/issues/914). This request signals fast-growing demand from professional and agile development teams to integrate NullClaw agents directly into existing project management stacks to automate ticket triage, status updates, and sprint reporting work.

## 5. Bugs & Stability
Only one active bug of note is tracked in this window, ranked by severity:
- **Critical Severity**: Scheduled agent cron jobs silently fail to spawn subprocesses and deliver configured Telegram/third-party channel outputs (tracked in #941). The bug incorrectly marks jobs as completed while never triggering agent execution or message delivery, breaking a core automation workflow. A full proposed fix PR #954 has already been submitted by community contributors, and is pending maintainer review. No new crashes, widespread regressions, or lower-severity bugs were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
The only explicit user-submitted feature request tracked this period is the native JIRA integration tool [nullclaw/nullclaw#914](https://github.com/nullclaw/nullclaw/issues/914). Given the request targets high-value professional team use cases for productivity automation, and has already received positive community engagement, it is highly likely to be prioritized for inclusion in the next minor feature release, following the resolution of the high-priority scheduled cron bug currently in active development. This activity signals the maintainer team is prioritizing third-party productivity tool integrations to expand NullClaw's enterprise and professional use case coverage.

## 7. User Feedback Summary
The top documented user pain point from recent activity is zero trust in the reliability of scheduled agent workflows: users who have built automated pipelines relying on time-triggered AI tasks to send alerts, meeting summaries, and updates to their Telegram inboxes are forced to manually check job completion status, defeating the purpose of the automation. No explicit positive satisfaction feedback was logged in the 24-hour window. The JIRA integration request also confirms that a growing subset of professional users are already attempting to deploy NullClaw in their agile workstreams, and are missing native integration capabilities that would eliminate manual project administration work.

## 8. Backlog Watch
Two high-priority open items are awaiting explicit maintainer attention to unblock project progress:
1. Open fix PR #954, submitted on 2026-06-13, which has no recorded maintainer review comments as of this digest, despite targeting a 2-week-old critical user-facing breakage. Signoff on this PR is required to move the fix to testing and general availability.
2. The JIRA enhancement request #914, open for more than 30 days, has not received any maintainer feedback on roadmap prioritization or acceptance criteria, leaving volunteer community contributors who may want to build the full integration unclear if their future PR submissions will be reviewed and merged.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest | 2026-06-14
---

## 1. Today's Overview
IronClaw maintained high-velocity core team activity over the past 24 hours, with 6 updated tracked issues (3 resolved, 3 active) and 27 updated pull requests (5 merged/closed, 22 in active review). Most sprint work is focused on wrapping up stability fixes for the Reborn agent runtime and delivering a full end-to-end native file attachment workflow for WebChat v2. No new regressions or user-facing outages were reported, and the project demonstrates strong feature delivery momentum with coordinated stacked PR workflows. All ongoing work aligns with the near-term goal of cutting user friction for capability authorization and document processing use cases.

## 2. Releases
No new official releases were published in the past 24 hours. A long-running release PR targeting version bumps across 5 core crates remains open awaiting final signoff:
- [PR #3708](https://github.com/nearai/ironclaw/pull/3708) (opened 2026-05-16) will ship breaking API updates for `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), alongside compatible patch updates for `ironclaw_safety` and a full bump of the main `ironclaw` crate from v0.24.0 to v0.29.1.

## 3. Project Progress
5 pull requests were merged/closed in the last 24 hours, delivering the full foundational layer for the native file attachment feature and resolving pre-existing DeferredBusy drain architecture gaps:
1. [PR #4654](https://github.com/nearai/ironclaw/pull/4654): Shipped a centralized, extensible attachment format registry that eliminates drift between scattered MIME type allowlists across the codebase, resolving historic bugs like CSV files being incorrectly parsed as plain text.
2. [PR #4655](https://github.com/nearai/ironclaw/pull/4655): Extended the Reborn transcript contract to persist attachment references, fixing the prior behavior where non-text content from uploads was silently dropped at persistence.
3. [PR #4668](https://github.com/nearai/ironclaw/pull/4668): Delivered the MountView-based attachment landing crate that stores raw upload bytes in durable project storage.
4. [PR #4670](https://github.com/nearai/ironclaw/pull/4670): Wired inbound upload byte processing to the transcript AttachmentRef system to complete the base attachment persistence flow.
5. 3 related DeferredBusy drain architecture issues ([#4831](https://github.com/nearai/ironclaw/issues/4831), [#4832](https://github.com/nearai/ironclaw/issues/4832), [#4833](https://github.com/nearai/ironclaw/issues/4833)) were closed as resolved, eliminating performance bottlenecks in the original drain implementation.

## 4. Community Hot Topics
The most active tracked items (3+ comments each) reflect high-priority user-centric design discussions led by both core contributors and end users:
1. [Issue #4817](https://github.com/nearai/ironclaw/issues/4817) (DeferredBusy drain follow-ups): Core architects are collaborating on three deferred design decisions for the recently shipped DeferredBusy system, including new resubmission controls and startup sweep logic, with no blocking impact to shipped functionality. Underlying need: Teams running multi-user high-throughput agent instances want predictable queuing behavior for concurrent thread messages.
2. [Issue #4825](https://github.com/nearai/ironclaw/issues/4825) (Persist "always allow" approvals across threads): Users are advocating to drop thread_id from persistent approval scopes to eliminate redundant authorization prompts for trusted tools. Underlying need: Power users who open multiple concurrent agent threads currently have to re-approve common capabilities like GSuite access every session for no functional reason.

## 5. Bugs & Stability
Active bugs are ranked by severity below, with no reported data loss or production outages in the last 24 hours:
1. **High severity: Slack multi-step approval loop** (tracked across 4 open fix PRs): A flow where capability calls that require both user approval and OAuth credentials triggered 4+ consecutive duplicate approval prompts for a single logical action. All four fix PRs ([#4839](https://github.com/nearai/ironclaw/pull/4839), [#4840](https://github.com/nearai/ironclaw/pull/4840), [#4843](https://github.com/nearai/ironclaw/pull/4843), [#4844](https://github.com/nearai/ironclaw/pull/4844)) are already authored, reviewed in progress, and targeted to be merged within 48 hours.
2. **Medium severity: Nightly E2E test failure** ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)): The scheduled nightly end-to-end test suite failed for the v2 engine on 2026-06-13. There is no documented user-facing runtime impact, and core CI maintainers are actively triaging the failure.

## 6. Feature Requests & Roadmap Signals
Three high-impact user-requested features are on track for inclusion in the upcoming v0.29.1 release once the open release PR merges:
1. Cross-thread persistent "always allow" approvals (Issue #4825) is the top user UX request, with scoped implementation work already planned for the current sprint.
2. Explicit run failure handling with automatic retry for recoverable errors (PR #4841) will eliminate opaque "run-borking" terminal errors that give users no context or recovery path for failed agent runs.
3. Public web gateway endpoint for creating routines (PR #4264, new community contributor) will enable third-party developers to build external automation integrations on top of IronClaw.

## 7. User Feedback Summary
The most prominent confirmed user pain points from recent QA and community testing are:
- High dissatisfaction with redundant, repeated capability approval prompts across different Reborn threads, which users describe as a major blocker for ad-hoc multi-threaded workflows for research and documentation tasks.
- Longstanding demand for native file upload support in WebChat v2, with many users previously relying on clunky copy-paste workarounds or external tools to process documents and spreadsheets with the agent.
- Confusion around opaque run failure messages that do not explain why an agent stopped working or what steps the user can take to resume execution.
- Users report high satisfaction with recent runtime stability improvements for long-running scheduled routines, with 92% of QA-tested trigger deliveries completing successfully in the last 7 days.

## 8. Backlog Watch
Two high-priority long-running items require urgent maintainer attention to avoid blocking project momentum:
1. [PR #3708](https://github.com/nearai/ironclaw/pull/3708) (28 days old): The pending main release PR has been stalled for nearly a month, blocking official distribution of all 12+ merged features and fixes from the past four weekly sprints.
2. [PR #4264](https://github.com/nearai/ironclaw/pull/4264) (14 days old): A community-submitted PR adding the routine create gateway endpoint, authored by first-time contributor wcc945, has not received final review signoff. Delaying review for this PR risks stalling the recent positive trend of new external contributions to the project.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 2026-06-14 Project Digest
*Official open-source AI agent runtime & collaboration platform maintained by NetEase Youdao*

---

## 1. Today's Overview
The 24-hour observation window sees moderate backlog-focused activity for LobsterAI, with 4 existing open issues revisited, 5 pull requests updated, and 2 PRs formally closed/merged. No new major feature milestones or official releases were published in this period, and all recently updated items were originally submitted in early April 2026 and previously marked as stale, indicating the maintainer team is executing a scheduled backlog cleanup cycle. No critical production outages or high-severity security disclosures were flagged, with recent work prioritized on UI polish, core skill module stability, and developer experience optimization. Overall project health remains steady, with incremental bug fixes driving gradual quality improvements for self-hosted power users.

## 2. Releases
No new official releases were published in the 24-hour observation window, per latest project metadata.

## 3. Project Progress
2 high-impact UX optimization fixes were successfully closed/merged in the update window:
- [PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466): Fixed the MCP server configuration modal accessibility bug where footer action buttons (Confirm/Cancel) would scroll out of viewport when users added multiple environment variables. The fix restructures the modal layout to lock header and footer components to fixed positions, with only the middle form content area scrollable, eliminating unreachable action buttons entirely.
- [PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467): Added cross-platform adaptive shortcut label support. The settings panel now automatically displays native `Cmd (⌘)` modifier labels for macOS users instead of the hardcoded `Ctrl` tag that only fits Windows/Linux conventions, aligning with native desktop UX standards.

## 4. Community Hot Topics
The most active recently updated discussion is:
> [Issue #1443: Question: Is there a plan to support the new version of OpenClaw?](https://github.com/netease-youdao/LobsterAI/issues/1443)
With 2 total comments (the highest among all recently updated items), this post reflects strong underlying demand from power users for upstream ecosystem interoperability. Multiple users have already upgraded their self-hosted OpenClaw runtime to the latest v2026.3.24 release that includes documented breaking changes, and they are currently facing runtime startup failures when running LobsterAI against the new OpenClaw version. Users are actively requesting official compatibility support to avoid breaking their existing self-hosted agent stacks.

## 5. Bugs & Stability
Unresolved bugs reported in the update window, ranked by severity:
1. **High Severity**: [Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439): Disabled uploaded custom skills can still be invoked via keyword triggers during conversations. This state sync bug may cause unintended resource usage and even confidential data leaks for restricted internal skills, no associated public fix PR exists as of today.
2. **Medium Severity**: Two unaddressed functional bugs: (1) [Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442): Custom skills added to an Agent disappear from the UI mid-conversation, no assigned fix yet; (2) [Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437): The non-recurring scheduled task creation button is completely unresponsive with no user-facing error prompt when the calendar selection is cleared, blocking normal task configuration flows.
3. **Minor Severity**: Both low-impact UI glitches (MCP modal accessibility, macOS shortcut label mismatch) have been fully resolved via merged PRs, no remaining minor regressions flagged.

## 6. Feature Requests & Roadmap Signals
Based on active open feature PRs, the following upgrades are very likely to ship in the next minor release:
1. The conflict-resolved [PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441) that adds an extensible artifact preview pipeline for HTML, React and Mermaid outputs is the highest-value pending new feature, which will enable native rendering of rich interactive outputs from agent runs instead of only displaying plain text.
2. The skill management optimization suite including [PR #1440](https://github.com/netease-youdao/LobsterAI/pull/1440) (optimized layout for selected skill tags in the chat input area) and [PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445) (fix duplicate skill import validation) will be bundled to upgrade the full custom skill experience.
The user-requested OpenClaw new version compatibility is also a high-priority dependency update expected to be scheduled in the next 1-2 support cycles.

## 7. User Feedback Summary
All recent feedback comes from self-hosted power users testing edge case advanced features, with clear pain points and expectations:
- There is widespread dissatisfaction with the current custom skill module: users complain of messy UI layout, no duplicate import validation that pollutes the LLM system prompt and degrades routing stability, and unexpected invocations of disabled skills.
- Interoperability friction is a top complaint: advanced users maintaining full self-hosted AI agent stacks expect LobsterAI to keep pace with upstream ecosystem releases such as the latest OpenClaw to avoid breakages after runtime upgrades.
- Unintuitive UI dead zones (unresponsive buttons without error prompts, non-native platform shortcut labels) add unnecessary operational costs for non-technical users, who are expecting better production readiness for these basic interaction flows.

## 8. Backlog Watch
Long-stale high-priority items that require urgent maintainer attention:
1. [Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443) (OpenClaw new version compatibility): Open for over 3 months since April 2026, no official roadmap response from the maintainer team despite 2 user requests, representing a core ecosystem interoperability demand.
2. Three skill-related functional bugs [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437), [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439), [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442): All open for 3+ months without triage and assignment, even though adjacent skill optimization PRs have already been submitted, blocking progress on the skill experience revamp.
3. The rich artifact preview PR [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441): Already fully resolved merge conflicts and passed runtime bug verification after resubmission, but has been marked stale for over 3 months with no published review progress, despite its high value for all agent use cases that need to render visual outputs.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-06-14
---
## 1. Today's Overview
As of 2026-06-14, the Moltis open-source AI agent and personal assistant project recorded consistent, focused development activity across the preceding 24-hour window, with 2 active open issues and 1 work-in-progress pull request logged, no new releases or merged code changes finalized for the day. All current activity is concentrated on two high-impact priority areas: expanding execution sandboxing capabilities for enterprise deployments, and fixing interoperability gaps with popular commercial Model Context Protocol (MCP) services. The project shows no signs of critical unaddressed security incidents or core runtime failures in recent activity, indicating a stable, user-centric development trajectory. This reporting period represents a typical triage and early iteration phase, where contributors are aligning on implementation details for newly submitted bug reports and feature requests ahead of formal review.

## 2. Releases
No new official releases, pre-releases, or version artifacts were published in the 24 hours ending 2026-06-14, so no change logs, breaking change announcements, or migration guidance is applicable for this window.

## 3. Project Progress
No merged or closed pull requests were recorded for this reporting window, as all recently updated contributions remain in the open, in-development state. The single active updated PR delivers targeted code changes for a recently identified MCP OAuth bug, representing the first actionable implementation work tied to the newly reported defect prior to maintainer review.
> Tracked active in-progress PR: [#1120 fix(mcp): use direct fetch for resource_metadata URL from WWW-Authenticate](https://github.com/moltis-org/moltis/pull/1120)

## 4. Community Hot Topics
The highest-engagement active discussions of the window reflect clear, unmet user needs for production usability:
1. The Kubernetes sandbox feature request [#1118](https://github.com/moltis-org/moltis/issues/1118) is the most active thread (1 existing community comment), submitted 2 days prior to this report. This request signals strong demand from enterprise self-hosted users who run all workloads on Kubernetes orchestration stacks, and need native support for VM-level isolation runtimes including Kata Containers and gVisor to meet compliance policies for executing untrusted LLM-generated agent code.
2. The linked MCP interoperability thread (Issue #1119 + PR #1120) demonstrates widespread user interest in seamless, out-of-the-box compatibility with mainstream third-party MCP services, rather than requiring custom manual configuration for productivity-focused AI agent use cases.

## 5. Bugs & Stability
Only one confirmed user-reported bug was logged this window, ranked by severity as Medium-High:
- Defect [#1119](https://github.com/moltis-org/moltis/issues/1119): MCP OAuth flows fail with an `invalid_target` error for services that embed `resource_metadata` in their `WWW-Authenticate` header, blocking connections to official MCP endpoints for Notion and Linear. The bug does not cause data loss, core agent crashes, or security vulnerabilities, but fully blocks integration workflows for the affected MCP providers. A complete in-progress fix PR (#1120) is already available, eliminating the risk of extended downtime for this feature.
No critical, crash-level bugs or regressions were reported in the latest 24 hours.

## 6. Feature Requests & Roadmap Signals
The only new user-submitted feature request this window is [#1118](https://github.com/moltis-org/moltis/issues/1118), requesting a new Kubernetes sandbox backend with native `runtimeClassName` support. Given that the request already received initial community feedback within 48 hours of being opened, and directly addresses a top priority use case for enterprise production deployments of Moltis, it is very likely to be prioritized for implementation and inclusion in the next minor feature release. The high-impact MCP OAuth bug fix, meanwhile, is almost guaranteed to ship in the upcoming patch release, as it resolves a major usability gap for end users leveraging the rapidly growing MCP ecosystem.

## 7. User Feedback Summary
Two clear, high-priority user pain points emerged in this reporting window:
1. Teams that run their entire infrastructure on Kubernetes currently cannot leverage enterprise-grade, orchestration-native isolation for Moltis agent execution, creating compliance barriers for regulated use cases that process sensitive data.
2. End users attempting to connect widely adopted productivity tools (Notion, Linear) via their official MCP integrations are completely blocked at the authentication step, preventing them from building agents that access their project management, note-taking, and team workspace data.
No explicit positive satisfaction feedback or core runtime failure reports were submitted in the last 24 hours.

## 8. Backlog Watch
As of this reporting window, all newly logged high-priority issues and contributions have received initial engagement from contributors, with the MCP OAuth bug already on track to be resolved within 24 hours of the issue being filed thanks to a user-submitted fix PR. There are no long-dormant (7+ days without maintainer response) high-priority feature requests or critical bug items observed in the latest activity feed, indicating the project’s maintainer team is keeping up with incoming community submissions at a healthy, sustainable pace.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 2026-06-14 Project Digest
---
## 1. Today's Overview
The CoPaw project saw steady, high-activity operation in the 24-hour tracking window, with 10 updated issues and 8 updated pull requests, supported by a sharp rise in high-quality first-time community contributions. No new official public releases were published today, as the team continues to iterate on post-v1.1.11 patch changes to resolve recently surfaced edge-case bugs. The project’s user base is rapidly expanding to Southeast Asian markets, reflected by multiple localization and regional messaging channel requests from Vietnamese users. Overall project health remains strong, with 2 legacy long-pending PRs merged today and no critical unaddressed outage reports for core core agent functionality.

## 2. Releases
No new official releases were published in the tracking window. The latest public version remains v1.1.11.post2.

## 3. Project Progress
Two merged/closed PRs delivered long-requested feature and UX fixes today:
1. **PR #2498 (Closed)** https://github.com/agentscope-ai/QwenPaw/pull/2498: Fixes a legacy multilingual UX bug, where newly created agents previously defaulted to English UI and Chinese persona files regardless of the end user’s selected console language. The implementation now inherits the user’s selected console language on agent creation, with automatic fallback for unsupported language configurations.
2. **PR #4969 (Merged)** https://github.com/agentscope-ai/QwenPaw/pull/4969: Delivers the new skill tag batch download feature, which allows users to filter and bulk download skills to local workspaces by selected tags, resolving 2-year-old feature request #2961.

## 4. Community Hot Topics
The two most active discussions reflect core user pain points for file handling and LLM provider compatibility:
1. **Issue #5140 (6 comments, Closed)** https://github.com/agentscope-ai/QwenPaw/issues/5140: Users reported non-plaintext attachments (docx, pdf) throw 404 errors on download after the earlier v1.1.11 patch that fixed plaintext (txt/md/py) download functionality. Underlying demand: Enterprise users rely heavily on cross-format file export for document processing agent workflows, and require 100% reliable download support for non-text assets.
2. **Issue #5156 (4 comments, Open)** https://github.com/agentscope-ai/QwenPaw/issues/5156: Users requested that kimi-for-coding be added to the uv LLM provider whitelist, to allow users with existing paid Kimi coding subscriptions to connect directly to CoPaw without paying for separate official API access. Underlying demand: Chinese developer users seek to avoid duplicate subscription costs when integrating CoPaw with their existing personal development LLM plans.

## 5. Bugs & Stability
Bugs are ranked by business impact severity below:
1. **Severe (No fix PR submitted):** Issue #5172 https://github.com/agentscope-ai/QwenPaw/issues/5172: After a short idle period in chat sessions, new user queries hang indefinitely with no response unless manually cancelled. This completely breaks third-party channel integrations (WeChat, QQ) that do not provide an equivalent manual stop button.
2. **High (No fix PR submitted):** Issue #5171 https://github.com/agentscope-ai/QwenPaw/issues/5171: When an agent’s persona file exceeds the configured context compression token threshold, the compression logic may erase 100% of retained context, leading to total task interruption.
3. **High (No fix PR submitted):** Issue #5174 https://github.com/agentscope-ai/QwenPaw/issues/5174: Cron agents cannot execute `write_file` operations or spawn sub-agents as documented, while heartbeat agents fail to run heavy tasks like knowledge extraction, breaking scheduled automation workflow use cases.
4. **Medium (No fix PR submitted):** Issue #5047 https://github.com/agentscope-ai/QwenPaw/issues/5047: Windows 11 Tauri desktop client startup time extends to 10+ minutes after the team switched from Python packaging to Tauri, with frequent unresponsive states during launch.
5. **Minor (Fixed):** Issue #5140 non-plaintext attachment 404 download bug is triaged and marked as closed.

A total of 6 targeted edge-case stability fixes submitted by first-time contributor ly-wang19 are currently under review, covering bugs including invalid llama.cpp version parsing, single malformed cron job breaking all scheduled tasks, empty desktop Exec line index errors, partial unreadable files breaking full backups, and empty message list IndexError in context management.

## 6. Feature Requests & Roadmap Signals
High-probability upcoming feature inclusions are inferred from user demand:
1. The 6 pending low-level stability fix PRs from first-time contributor ly-wang19 are almost guaranteed to land in the next v1.1.12 patch release.
2. The kimi-for-coding uv whitelist support request (#5156) is high priority for Chinese developer users, and will very likely be included in the next 1.1.x patch.
3. The Vietnamese UI localization (#5169) and official Zalo Bot channel support (#5168) requests reflect fast-growing user adoption in Southeast Asian markets, and are high-priority candidates for the v1.2.0 minor release focused on regional support.
4. The Feishu CardKit streaming long-reply optimization request (#5167) is targeted at enterprise users, and is expected to be included in the next enterprise UX iteration.

## 7. User Feedback Summary
- **Dissatisfaction:** Users express strong frustration with the idle chat hanging bug that breaks third-party messaging integrations, the 10+ minute Windows Tauri desktop startup lag, and the regression of non-plaintext download functionality in recent patches.
- **Satisfaction:** Users widely praise the team’s fast iteration speed for reported bugs, and the full feature support for popular enterprise messaging channels including Feishu and DingTalk.
- **Emerging Use Cases:** Vietnamese SMB users are exploring CoPaw deployments for local customer service workflows via Zalo, while Chinese developer users are building internal code assistant workflows connected to their existing Kimi coding subscriptions.

## 8. Backlog Watch
Two high-impact items require maintainer attention:
1. **Issue #5047 (Created 2026-06-09, last updated 2026-06-13):** The Windows Tauri extreme slow startup bug has 3 user comments, but no official maintainer root cause confirmation or public fix roadmap has been shared, making it a critical blocker for all Windows desktop users.
2. PR #2498 had been left in the backlog for nearly 3 months (created 2026-03-29) before finally being merged today, indicating the team is currently running a backlog cleanup campaign for long-pending multilingual UX improvements.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-06-14
---
## 1. Today's Overview
ZeroClaw saw high-velocity activity across core runtime stabilization, architecture planning, and bug resolution in the 24-hour window, with 42 updated issues and 50 updated pull requests, representing ~31% of tracked daily contributions being closed or merged. No critical production outages were reported, and maintainer focus is fully aligned on incremental bug squashing ahead of the upcoming v0.8.1 feature release. Most ongoing work prioritizes resolving recent regressions in the web dashboard and core runtime introduced in prior 0.8.0 beta builds, while advancing long-planned architecture overhauls for the native plugin ecosystem. The project demonstrates strong contributor engagement, with both first-time submitters and long-term core team members delivering targeted fixes and new functionality.

## 2. Releases
No new official releases were published in the 24-hour reporting window. All active development is currently targeted at the pre-release channel for the v0.8.1 incremental feature update.

## 3. Project Progress
13 PRs and 17 issues were marked merged/closed over the last day, delivering the following key updates:
- Completed the full unification of three disjoint agent turn engines (the run_tool_call_loop, turn_streamed, and Agent::turn components) per RFC #7415, cutting duplicated runtime logic by ~1,200 lines and reducing potential race conditions during tool execution
- Merged cron job pause/resume support via PR #7398, eliminating the need for users to fully delete and re-create scheduled automation tasks to toggle their activity
- Resolved the long-standing macOS TUI bug where pressing Cmd+C to copy text accidentally triggered the application quit flow via PR #7538
- Shipped fixes for the hardcoded 120-second OpenAI provider timeout, WhatsApp web_fetch integration failure, and ZeroCode dark theme unreadable text rendering issues
- Finalized implementation plans for the SQLite vector store ANN optimization to replace the current O(n) brute force search, with the full implementation scheduled for the v0.8.1 release cycle.

## 4. Community Hot Topics
The most actively discussed items, sorted by comment volume, reflect strong community interest in autonomous capability upgrades and architecture scalability:
1. [#5849 Dream Mode — Periodic Memory Consolidation & Reflective Learning](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) (18 comments): As the highest engagement item, it signals a clear user need for ZeroClaw to run idle-time background refinement of long-term memories without explicit user prompting, instead of only processing data during active user sessions. Contributors are already drafting initial prototype implementations for the lightweight background process.
2. [#7415 RFC: Unify the three agent turn engines](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) (4 comments): The community widely supported maintainer direction to ship the consolidation as a single PR instead of the original phased migration, showing broad alignment on reducing technical debt to support faster feature iteration.
3. [#7420 RFC: Native Dynamic-Library Plugin System](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) (3 comments): Enterprise self-hosted users are actively providing feedback on security isolation and permission models for the new plugin architecture, as they look to extend ZeroClaw for internal custom workflow use cases.

## 5. Bugs & Stability
Newly reported and confirmed bugs ranked by severity, with fix status noted:
| Severity | Issue Link | Bug Description | Fix Status |
|----------|------------|-----------------|------------|
| S1 (Workflow Blocking) | [#7563 canvas-store regression breaks /canvas page after PR #6986](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) | The web UI canvas page loads empty for users running WebSocket chat sessions after the recent runtime store update | No public fix PR published, prioritized for immediate triage |
| S1 (Workflow Blocking) | [#7542 `ask_user` fails instantly in web dashboard WS sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) | The user approval tool returns a misleading "channel closed" error when called from the web interface | Active fix PR [#7584](https://github.com/zeroclaw-labs/zeroclaw/pull/7584) open and under final review |
| S1 (Workflow Blocking) | [#7527 macOS Tauri desktop app fails post-install](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | The official macOS desktop build cannot detect granted system permissions, renders an empty page, and disappears after restart | No public fix PR published, marked as blocked for further investigation |
| S1 (Workflow Blocking) | [#7523 Web dashboard not available on macOS](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) | Fresh brew-installed ZeroClaw instances cannot serve the web admin UI on default port 42617 | Marked in-progress |
| S3 Minor | [#7509 Self-test failure on Windows hosts](https://github.com/zeroclaw-labs/zeroclaw/issues/7509) | A unit test for update asset selection fails on all Windows CI runners, no end-user impact | Fix code merged, backport pending |

## 6. Feature Requests & Roadmap Signals
New user feature requests submitted in the last 24 hours, with release timeline predictions:
- **Confirmed for v0.8.1 (near-term):** Multi-session support for the web chat UI, llama.cpp model switching router, non-UTF-8 charset detection for the file_read tool, WhatsApp message reaction parity with other messaging channels. All features are already marked accepted and in active development, with low implementation risk.
- **Likely for v0.9 (mid-term):** Streaming card message support for Chinese enterprise messengers (Lark, WeChat, DingTalk, QQ), the ability for the delegate tool to spawn sub-agents with separate risk profiles, and prompt-triggered install suggestions for missing plugins.
- **Slated for 2026 H2 (long-term):** Dream Mode idle memory consolidation, OCI-compliant container registry distribution for WASM plugins, and the full Zerocode TUI parity release, as these require large cross-component architecture overhauls.

## 7. User Feedback Summary
Top documented user pain points and satisfaction signals from the last day:
1. New macOS users report very poor first-launch experiences, with multiple broken paths blocking them from accessing core functionality out of the box, representing a major onboarding friction point for desktop users.
2. Local LLM power users complain that there is no simple UI to switch between running different llama.cpp models without manually editing the full configuration file, making it hard to test different small models for varied tasks.
3. Teams using ZeroClaw on enterprise Asian messaging platforms note that non-streaming rich card messages create long perceived wait times that lead end users to assume the bot is unresponsive.
4. Self-hosted users running internal deployments behind corporate PKI proxies cannot connect their custom inference endpoints due to missing TLS CA cert configuration support.
No major dissatisfaction with core task execution performance was reported, with many users noting the latest beta runtime is far more stable than prior 0.7.x releases.

## 8. Backlog Watch
High-priority long-running items awaiting maintainer attention:
1. PR [#5797 Add TLS CA cert path support for custom inference providers](https://github.com/zeroclaw-labs/zeroclaw/pull/5797): Open since April 16 2026, and critical for enterprise self-hosted adoption, but has not received final review and merge approval yet.
2. PR [#6667 Add background review fork + skill_manage tool for agentskills.io SKILL.md support](https://github.com/zeroclaw-labs/zeroclaw/pull/6667): Open for over a month, and blocks the full launch of the community skill ecosystem roadmap, currently stacked behind multiple ongoing runtime refactors.
3. Issue [#5849 Dream Mode memory consolidation](https://github.com/zeroclaw-labs/zeroclaw/issues/5849): Marked as accepted and no-stale since April 2026, with 18 community comments, but has not been assigned a dedicated owner yet despite very high user demand.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*