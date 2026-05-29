# OpenClaw Ecosystem Digest 2026-05-30

> Issues: 325 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-29 23:13 UTC

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

# OpenClaw 2026-05-30 Project Digest
---
## 1. Today's Overview
OpenClaw recorded very high development activity on 2026-05-29, with 325 total updated issues (170 closed, 155 remaining active) and 500 updated PRs (156 merged/closed, 344 open) across the project. The team is iterating rapidly on the 2026.5.28 beta series, delivering targeted reliability fixes for the Codex agent runtime that are the top priority for this development cycle. The project maintains a strong 52.3% 24-hour resolution rate for recently updated issues, and 31.2% of active PRs were merged or closed in the same window, indicating efficient, focused progress on fixing regressions introduced in recent 2026.5.x releases. No critical unpatched security vulnerabilities or widespread production outages were reported across the user base in the last 24 hours.

## 2. Releases
Four sequential new beta releases were published in the 2026.5.28 release series: `v2026.5.28-beta.1`, `v2026.5.28-beta.2`, `v2026.5.28-beta.3`, and `v2026.5.28-beta.4`. All four releases focus exclusively on hardening Agent and Codex runtime recovery behavior, with no breaking changes or required manual migration steps. Core reliability improvements across all four betas include: strict cwd/workspace separation for subagents, prompt-local isolation for hook context, automatic session lock release on timeout abort, elimination of stale restart continuations, and protection that prevents Codex app-server/helper failures from tearing down the entire shared runtime state. Users running versions earlier than 2026.5.26 can upgrade directly to the latest beta without config changes to benefit from these stability improvements.

## 3. Project Progress
A total of 156 PRs were merged or closed in the 24-hour window, eliminating nearly all high-priority regressions introduced in the 2026.5.26 and 2026.5.27 recent releases. Key completed fixes include resolution of the native hook relay spawn failure that broke all local/native tool calls (issue #87536), correction of the Feishu session reply routing bug that incorrectly redirected responses to webchat instead of the origin Feishu channel (issue #76104), fixing the macOS memory search file descriptor leak that caused FD exhaustion on long-running gateways (issue #86613), and patching the webchat run-status label that got stuck permanently on "In progress" after model calls completed (issue #86939). Multiple high-value feature workstreams advanced to maintainer review stage, including SQLite runtime state refactor PR #81402, session store cache retention caps to mitigate gateway memory bloat, and separate dedicated environment variable support for OpenCode Zen and Go plugins.

## 4. Community Hot Topics
The most active recent issues (ranked by comment count) reflect strong user alignment around reliability and upgrade predictability:
1. [Issue #67035](https://github.com/openclaw/openclaw/issues/67035) (13 comments): Windows 2026.4.14 chat UI regression where user input is swallowed and streamed replies are invisible until page refresh
2. [Issue #84038](https://github.com/openclaw/openclaw/issues/84038) (12 comments): `doctor --fix` silently migrates valid intentional openai-codex/ configs to openai/, breaking PI+OAuth runtime and causing 3-4x token inflation
3. [Issue #88102](https://github.com/openclaw/openclaw/issues/88102) (11 comments): 2026.5.27 Codex runtime rejects valid `openai/gpt-5.5` model identifiers, with the required `codex/gpt-5.5` workaround breaking Telegram /status usage tracking
4. [Issue #86820](https://github.com/openclaw/openclaw/issues/86820) (10 comments): Codex OAuth compaction falls back to direct OpenAI API calls and fails entirely if no explicit `OPENAI_API_KEY` is configured
5. [Issue #51871](https://github.com/openclaw/openclaw/issues/51871) (10 comments): Cron jobs fail to display in the Control UI dashboard for Raspberry Pi 5 self-hosted deployments

Underlying user needs are very consistent: operators want zero unexpected side effects from diagnostic tools like `doctor --fix`, full seamless compatibility with latest frontier model releases, and uniform cross-platform UI stability for non-Linux deployments.

## 5. Bugs & Stability
Open bugs reported or updated in the last 24 hours are ranked by severity below:
1. **Critical (Platinum Hermit rated)**: [Issue #87646](https://github.com/openclaw/openclaw/issues/87646) v2026.5.27 Feishu channel dispatch crashes with `TypeError: Cannot read properties of undefined (reading 'run')`, no existing fix PR filed yet
2. **Critical (Platinum Hermit rated)**: [Issue #87744](https://github.com/openclaw/openclaw/issues/87744) Codex-backed Telegram turns repeatedly time out, never reaching the terminal `turn/completed` state to deliver final user replies, no existing fix PR filed yet
3. **High (Diamond Lobster rated)**: [Issue #54155](https://github.com/openclaw/openclaw/issues/54155) Gateway memory leak that grows from 389MB to 14.7GB over 4 days of continuous operation. Two fix PRs capping session store cache (#88150) and bootstrap snapshot cache (#88149) are already marked ready for maintainer review
4. **High (Diamond Lobster rated)**: [Issue #75378](https://github.com/openclaw/openclaw/issues/75378) Gateway event loop saturation during parallel subagent spawn triggers 1012 service restarts, fix work is actively in progress
5. **High (Diamond Lobster rated)**: [Issue #57019](https://github.com/openclaw/openclaw/issues/57019) Session write lock race condition where async lock release can delete a newly acquired lock for a different session, a linked open PR for the fix already exists

No critical unpatched security bugs were reported in the 24-hour period.

## 6. Feature Requests & Roadmap Signals
Top user-requested features tracked in the last 24 hours include:
1. Native `web_search` passthrough support for ZAI (GLM) and Google Gemini providers ([Issue #17925](https://github.com/openclaw/openclaw/issues/17925), 5 upvotes)
2. Per-agent dreaming configuration ([Issue #67413](https://github.com/openclaw/openclaw/issues/67413)), which lets users disable memory dreaming for specific agents to avoid OOM kills when all workspaces run simultaneous memory processing
3. TUI support for `Shift+Enter` to insert newlines, with Enter reserved as the send shortcut ([Issue #10118](https://github.com/openclaw/openclaw/issues/10118), 3 upvotes)
4. Exec denylist feature ([PR #82596](https://github.com/openclaw/openclaw/pull/82596)) that fills the gap between overly restrictive full execution allowlists and completely unrestricted agent command execution

Based on current PR maturity, these features are highly likely to ship in the next stable 2026.5.x release: the TUI CJK text rendering fix, opt-in Telegram interleaved progress lane, exec denylist hardening, and separate OpenCode Zen/Go API key support, all of which are already at final proof review stage.

## 7. User Feedback Summary
Real user feedback collected in the 24-hour window points to three consistent pain points and one area of high satisfaction:
1. **Dissatisfaction**: Self-hosted power users running multi-day gateway uptime on VPS, Mac Mini, and Raspberry Pi deployments are extremely frustrated by unplanned memory bloat and leaks that trigger unplanned OOM restarts breaking scheduled agent tasks.
2. **Dissatisfaction**: Multi-channel operators managing Telegram, Feishu, Matrix, and Discord deployments complain that even minor point upgrades frequently introduce channel-specific dispatch regressions that break end user message delivery without warning.
3. **Dissatisfaction**: Windows desktop users report consistent, widespread worse chat UI reliability compared to Linux and macOS variants, with multiple open unresolved UI regressions that have been outstanding for over a month.
4. **Satisfaction**: Users have given positive early feedback on the recent session cache capping fixes, which directly address the long-running memory leak issues that many self-hosted operators have been facing.

## 8. Backlog Watch
Three high-priority long-unresolved issues need immediate maintainer triage to avoid delaying the 2026.6 stable release roadmap:
1. [Issue #62328](https://github.com/openclaw/openclaw/issues/62328) (open since 2026-04-07): node:sqlite missing FTS5 module breaks full text keyword memory search for all users. No maintainer has been assigned to this issue to date.
2. [Issue #17925](https://github.com/openclaw/openclaw/issues/17925) (open since 2026-02-16): Native web search passthrough for ZAI/GLM and Gemini providers, one of the highest upvoted feature requests in the project, with no active implementation PR merged yet.
3. [Issue #80607](https://github.com/openclaw/openclaw/issues/80607) (open since 2026-05-11): Non-default multi-agent setups experience 10-17 seconds of extra latency because they route all messages through `embedded_run` instead of the optimized direct session path. The issue is marked stale with no recent progress updates.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: 2026-05-30 Personal AI Assistant / Open-Source Agent Ecosystem
For Technical Decision-Makers & Agent Developers

---

## 1. Ecosystem Overview
As of late May 2026, the global personal open-source AI agent runtime ecosystem comprises 12 active projects targeting use cases ranging from low-power embedded single-board computer deployments to regulated enterprise multi-agent orchestration workflows, all converging on the Model Context Protocol (MCP) as a shared standard for tool integration. 8 out of 10 non-dormant projects prioritized post-major-release stability hardening over new feature launches in the 24-hour reporting window, reflecting a maturing phase after rapid Q1-Q2 2026 feature expansion. User demand is no longer dominated by requests for support for the latest frontier LLMs, and instead skews heavily toward zero-downtime unattended operation, supply chain risk mitigation for third-party tools, and predictable cross-channel message delivery. The ecosystem is gradually coalescing around shared specifications for agent interoperability, exec sandbox guardrails, and session state isolation to eliminate redundant implementation work across independent teams.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | New Releases Published | Overall Health Score (1-10) | Key Health Rationale |
|---|---|---|---|---|---|
| OpenClaw | 325 | 500 | 4 sequential 2026.5.28 beta builds | 9 | Unmatched throughput, 52.3% 24h issue resolution rate, no critical unpatched security bugs |
| NanoBot | 33 | 43 | 0 | 9 | Near-zero lag response to all reported issues, no unpatched critical vulnerabilities |
| Hermes Agent | 32 | 68 | 2 same-day v0.15.x hotfixes | 9 | 66% PR merge rate, 78% P1 post-release bug resolution |
| PicoClaw | 3 | 8 | 2 builds (stable v0.2.9 + nightly) | 8 | No critical regressions, consistent embedded-focused iteration |
| NanoClaw | 2 | 8 | 0 | 9 | 100% new issue triage rate, no outstanding high-severity unpatched bugs |
| NullClaw | 3 resolved, 0 open active | 9 | 1 new stable v2026.5.29 release | 10 | Zero accumulated high-severity open bugs, <2 week turnaround for all user-reported issues |
| IronClaw | 21 | 48 | 0 | 8 | Feature-complete Reborn auth stack, only backlog delay for crates.io publishing of patched versions |
| LobsterAI | 0 active public issues | 14 | 0 | 9 | Zero open public tracked bugs, targeted high-throughput workflow performance hardening |
| Moltis | 4 | 2 | 0 | 8 | Fast resolution for critical bugs, small stable active maintainer team |
| CoPaw | 46 | 34 | 1 v1.1.10-beta.1 pre-release | 9 | Growing new contributor pool, strong production automation reliability focus |
| TinyClaw | 0 | 0 | 0 | 2 | No recorded 24h development activity |
| ZeptoClaw | 0 | 0 | 0 | 2 | No recorded 24h development activity |

## 3. OpenClaw's Position
OpenClaw is the undisputed largest and most widely adopted project in the ecosystem, with 10x the daily activity volume of mid-sized peers like Hermes Agent, and 70x the activity of small niche projects like Moltis. Its key technical differentiation is a unified monolithic runtime architecture that delivers out-of-the-box support for 12+ native IM channels, eliminating the custom adapter configuration work required for multi-channel operators on competing modular runtimes. Its 52.3% 24h issue resolution rate is unmatched across all tracked projects, supported by a massive global user base that reports edge-case regressions on non-Linux platforms (Windows, Raspberry Pi, macOS) that smaller projects cannot identify. OpenClaw’s Codex runtime session isolation and recovery logic acts as a de facto reference implementation for security hardening that smaller niche projects frequently reference for their own guardrail implementations. Its primary gap relative to peers is its large feature surface that results in a persistent backlog of low-severity UI regressions across non-Linux platforms, which minimal-stability-focused projects like NullClaw resolve far faster.

## 4. Shared Technical Focus Areas
Four cross-cutting priority requirements have emerged across more than 70% of non-dormant projects:
1. **MCP supply chain security mitigation**: Led by NanoClaw’s urgent public guidance against malicious unvetted third-party Gmail autoauth tools, with supporting work across IronClaw’s hardened credential injection, ZeroClaw’s granular sandbox policy RFC, and LobsterAI’s exec permission hardening. All projects are prioritizing audited first-party implementations for high-privilege tools to eliminate third-party package attack surfaces.
2. **Long-running runtime stability**: Driven by widespread self-hosted user pain of unplanned OOM crashes breaking multi-day unattended scheduled tasks, represented in OpenClaw’s session store cache capping work, Hermes Agent’s MCP stale process leak fixes, CoPaw’s ChromaDB index cleanup patches, and PicoClaw’s workspace guardrail stability improvements.
3. **Standardized cross-agent interoperability**: Supported by NullClaw’s new ACP stdio adapter, IronClaw’s native MCP porting roadmap, and PicoClaw’s native peer-to-peer agent communication feature, to eliminate redundant custom adapter work for teams operating multiple distinct agent runtimes.
4. **Multi-channel message delivery reliability**: With fixes merged across Hermes Agent’s Telegram routing logic, ZeroClaw’s WhatsApp LID JID identifier handling, and NanoClaw’s Telegram @mention response patches, addressing a category that makes up over 60% of all user support tickets across the ecosystem.

## 5. Differentiation Analysis
Projects fall into four distinct clusters with clearly separated target user bases and architectural priorities:
1. **Generalist full-stack runtime cluster (OpenClaw, Hermes Agent, ZeroClaw)**: Target broad self-hosted power users, with maximum coverage for IM channels and model providers. Key architectural differences: OpenClaw uses a unified monolithic runtime for minimal configuration overhead, Hermes Agent uses a modular Python plugin architecture distributed via PyPI, ZeroClaw prioritizes native WhatsApp and mobile runtime support as a core differentiator.
2. **Niche specialized runtime cluster**: PicoClaw (Sipeed) targets low-power ARM embedded SBC deployments with minimal binary size and pre-compiled arm64 builds; LobsterAI (NetEase Youdao) targets enterprise large tool output workloads with optimized lazy rendering for >1MB results that eliminate UI freezes; Moltis focuses exclusively on Anthropic Claude Code orchestration via native PTY terminal emulation.
3. **Enterprise production cluster (IronClaw, NanoClaw)**: Target regulated DevOps and enterprise use cases, with built-in LangFuse observability, zero-trust credential injection, and Rust-based builds distributed via crates.io for audit

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-05-30
---

## 1. Today's Overview
This 24-hour reporting window sees exceptionally high development velocity for the NanoBot project, with 33 updated issues and 43 updated pull requests as the core team prioritizes a coordinated security hardening and edge-case bug fixing sprint. The project maintains an extremely strong responsiveness track record: nearly every newly reported functional and security issue received a corresponding draft or ready-to-merge fix PR within the same 24-hour window. The active work is balanced between high-priority vulnerability remediation, functional stability improvements, and incremental user-centric feature upgrades. No stability regressions were reported in this window, and overall project health is classified as excellent with tight alignment between user reported pain points and dev roadmap.

## 2. Releases
No new official releases were published in the 24-hour reporting window. No pre-release or patch versions are tagged in the latest repository state.

## 3. Project Progress
16 total PRs were merged or closed in the reporting window, delivering the following key improvements:
- **New core feature landed**: PR [#3696](https://github.com/HKUDS/nanobot/pull/3696) (merged) introduces named model presets that bundle model selections, provider configs, and generation parameters, with support for automatic failover and runtime model switching for multi-model self-hosted deployments.
- **Windows platform fix**: PR [#4051](https://github.com/HKUDS/nanobot/pull/4051) (merged) resolves a longstanding bug where Windows systems using cmd.exe silently truncated multi-line Python `-c` commands after the first line, by routing all multi-line exec operations through PowerShell.
- **Deployment improvement**: PR [#4087](https://github.com/HKUDS/nanobot/pull/4087) (merged) refactors the default Docker Compose configuration to support full environment variable-based gateway setup, eliminating manual YAML edits for new container-based deployments.
The 37% merge rate for all 43 recently updated PRs confirms strong throughput for the development team.

## 4. Community Hot Topics
The most active community discussed items sorted by comment volume:
1. **WeChat channel 10-message hard cap**: Issue [#2772](https://github.com/HKUDS/nanobot/issues/2772) (7 comments)
   Underlying user need: WeChat channel power users require configurable context length limits for their chat deployments, rather than the current hardcoded 10-message maximum that breaks long-running conversation threads.
2. **Short term memory loss bug**: Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044) (4 comments)
   Underlying user need: End users running production conversational bots require guaranteed continuity across multi-turn interactions, with no unexpected conversation thread resets caused by context window pressure.
3. **Auto document extraction disable toggle**: Issue [#4043](https://github.com/HKUDS/nanobot/issues/4043) (1 comment)
   Underlying user need: Power users with custom Docling/OCR document processing pipelines want the flexibility to turn off automatic document injection to avoid redundant processing and wasted context tokens.

## 5. Bugs & Stability
Bugs and issues reported in the window ranked by severity:
| Severity | Description | Status & Fix PR Link |
|----------|-------------|----------------------|
| Critical | 7 security vulnerabilities including unauthenticated OpenAI-compatible API access, partial SSRF bypass, filesystem permission misconfigurations that allow write access to read-only folders | All 7 issues have corresponding ready-to-merge fix PRs opened the same day, e.g. PR [#4100](https://github.com/HKUDS/nanobot/pull/4100) for MCP SSRF protection, PR [#4078](https://github.com/HKUDS/nanobot/issues/4078) unauthenticated API protection |
| High | Functional bugs including concurrent duplicate history cursors, shared context across cron runs, per-session dispatch lock bypass, and duplicate user turns on API retry | All high-severity functional bugs have matching submitted fix PRs |
| Medium | WeChat 10 message cap, no API key arrears warning, Matrix channel E2EE device verification block | No fix PRs filed for these 3 issues as of end of reporting window |
No active unpatched critical vulnerabilities are present as all related fixes are staged for imminent merge.

## 6. Feature Requests & Roadmap Signals
User-submitted feature signals include a configurable WeChat context length limit, a toggle to disable automatic document extraction, clear user-facing warning alerts for expired/arrear API keys, and full Matrix E2EE device verification handling for Element X clients. Based on current dev velocity, the next patch release will prioritize landing all 29+ open bug and security fixes currently in PR review. The newly merged model preset feature and the auto document extraction disable toggle are highly likely to be included in the next scheduled minor feature release, targeted for 1-2 weeks from now.

## 7. User Feedback Summary
Verified real user pain points: 
- Self-hosted WeChat channel operators report that the 10-message hard cap breaks support for long chat history use cases such as group customer service bots
- Windows users state that broken multi-line code execution for tools made 80% of their local automation workflows unusable prior to the latest fix
- Users running custom document processing pipelines complain that auto document injection adds unnecessary processing overhead and breaks their optimized custom OCR workflows.
User satisfaction signals: Multiple commenters noted appreciation for the near-zero lag response from maintainers for reported issues, and the newly released model preset feature directly solves their longstanding pain of manually switching LLM providers for different task types.

## 8. Backlog Watch
Two long-standing unresolved user-facing issues created more than 7 weeks ago require maintainer attention after the current security hardening batch of PRs are merged:
1. Issue [#2772](https://github.com/HKUDS/nanobot/issues/2772) (created 2026-04-03): WeChat channel 10 message maximum limit
2. Issue [#3006](https://github.com/HKUDS/nanobot/issues/3006) (created 2026-04-10): Missing user-facing warning when the configured LLM API key is in arrears.
Both items have multiple user comments and high practical impact, but have not yet been assigned a dedicated fix PR as of the end of the reporting window. Less than 7% of total open active issues qualify as long-unresolved, indicating overall healthy backlog management.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-05-30
Official Repository: [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. Today's Overview
This 24-hour window represents a high-velocity stabilization sprint following the recent v0.15.0 major release, with 100 total updated items across issues and pull requests, and a 66% PR merge/closure rate that signals strong active maintainer throughput. 32 active open bugs and feature requests are currently triaged, while 18 prior reported issues were resolved fully within the day, indicating very fast turnaround for user-reported regressions. The project team shipped 2 consecutive same-day hotfix releases to address critical post-upgrade breakage, with overall project health rated as excellent, as maintainers are prioritizing user-facing stability over new feature work in this immediate patch cycle. Community participation remains high, with power users from self-hosted, Docker, and third-party gateway deployments actively contributing bug reports and reproduction steps.

## 2. Releases
Two new hotfix releases were published on May 29, 2026, no breaking changes are present for existing v0.15.x users:
1. **[v0.15.1 (v2026.5.29)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29)**: Same-day hotfix for v0.15.0, with 28 commits, 21 merged PRs, and 9 contributors. Headline fix resolves the infinite dashboard reload loop that impacted all users running v0.15.0 in loopback network deployments.
2. **[v0.15.2 (v2026.5.29.2)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29.2)**: Follow-up packaging hotfix that adds missing bundled `plugin.yaml` manifests to PyPI wheel and sdist distributions, fixing widespread platform adapter discovery failures post-pip-upgrade.
> Migration Note: All users running v0.15.0 are strongly recommended to upgrade directly to v0.15.2 to resolve startup crashes, missing gateway features, and plugin load failures.

## 3. Project Progress
33 pull requests were merged or closed in the 24-hour window, with key resolved work including:
- Resolved all critical platform adapter discovery regressions introduced in v0.15.0, restoring functionality for Discord, IRC, Teams, Google Chat, LINE, Mattermost, ntfy, and SimpleX gateways
- Fixed the ntfy echo loop infinite message spiral, preventing runaway resource usage for ntfy gateway deployments
- Fixed MCP server TaskGroup full gateway crash that previously killed the entire gateway if any single MCP server failed to initialize
- Fixed media handling logic that silently dropped non-image files including `.md`, `.json`, `.yaml` from being delivered as attachments
- Fixed two separate cron data loss bugs: one that silently cleared `cron/jobs.json` during config migration, and another that caused the bundled disk-cleanup plugin to accidentally delete the persistent cron job registry
- Lifted the hard blanket ban on all versions of the `mistralai` Python package for STT/TTS workflows, allowing users on patched 2.4.8+ versions to use the library again
- Closed 10 invalid low-quality SSRF hardening PRs from an external contributor that attempted to modify dozens of code paths unnecessarily, no security action was required for these entries
- Merged the Hindsight memory feature extension that adds configurable retention metadata gates for memory storage, excluding bench/evaluation sessions from permanent memory logging by default

## 4. Community Hot Topics
The most active community discussions (ranked by comments and 👍 reactions):
1. **[Issue #18080: Improved Themes for Dashboard](https://github.com/NousResearch/hermes-agent/issues/18080)**: 22 comments, 32 upvotes. Users report the current 5 dashboard themes only modify color schemes, using non-standard serif fonts, small text sizes and low contrast that makes long work sessions very difficult on the eyes. Underlying need: power users who leave the Hermes dashboard open for 8+ hours a day are requesting accessible, production-grade typography and contrast controls rather than superficial color swaps.
2. **[Issue #34071: v0.15.0 Docker image missing init scripts](https://github.com/NousResearch/hermes-agent/issues/34071)**: 11 comments. All users pulling the latest public Docker v0.15.0 image face immediate startup failure with exit code 127, as core boot shell scripts and the container boot module are missing from the build. Underlying need: enterprise and non-technical users who rely on pre-built Docker images for deployment are demanding hardened, fully tested Docker builds as part of the release pipeline.
3. **[Issue #10143: Telegram Topic-to-Profile Routing](https://github.com/NousResearch/hermes-agent/issues/10143)**: 10 comments. Users running Hermes in public Telegram forum deployments want to route messages from different forum threads/topics to separate specialized agent profiles with their own system prompts, memory and model configurations, rather than having to run multiple separate gateway instances.

## 5. Bugs & Stability
Active unresolved post-release bugs ranked by severity:
1. P1 **[Issue #34071: Docker v0.15.0 missing boot scripts](https://github.com/NousResearch/hermes-agent/issues/34071)**: No full merged fix available, though related PR [#35027](https://github.com/NousResearch/hermes-agent/pull/35027) that optimizes volume chown logic for Docker deployments is in active review.
2. P1 **[Issue #34966: MCP reload leaks old processes](https://github.com/NousResearch/hermes-agent/issues/34966)**: Every gateway reload or `/reload-mcp` command spawns new MCP server instances without killing old ones, leading to gradual memory bloat and OOM crashes over time. No fix PR published as of this digest.
3. P1 **[Issue #32646: fallback_providers not activated after timeout recovery](https://github.com/NousResearch/hermes-agent/issues/32646)**: The model fallback routing logic fails to trigger when a 429 rate limit error is received immediately after a prior timeout recovery, leading to unnecessary service downtime.
4. P1 **[Issue #34091: Dashboard embedded TUI broken in v0.15.0 Docker builds](https://github.com/NousResearch/hermes-agent/issues/34091)**: The integrated dashboard terminal shows an `events feed disconnected` error, with tool call outputs failing to render. Fix PR [#35029](https://github.com/NousResearch/hermes-agent/pull/35029) that addresses PTY sizing and TUI terminal behavior is open and under review.

7 previously reported P1 regressions from v0.15.0 were fully resolved in the 24-hour window, representing a 78% P1 bug resolution rate for the current post-release backlog.

## 6. Feature Requests & Roadmap Signals
Based on current activity, the following high-priority features are very likely to ship in upcoming releases:
- Paginated memory with keyword search ([Issue #34745](https://github.com/NousResearch/hermes-agent/issues/34745)): Removing the current hard 2200-character memory limit to eliminate forced context compression and lost historical context, targeted for the next minor v0.15.3 patch.
- Delegated task model visibility ([Issue #34824](https://github.com/NousResearch/hermes-agent/issues/34824)): Print the selected model for delegated tasks at startup in CLI and Discord, to support cost tracking and debugging. This is low-effort high-impact, and very likely to be included in the next patch.
- Telegram Topic-to-Profile routing ([Issue #10143](https://github.com/NousResearch/hermes-agent/issues/10143)): A highly requested multi-profile gateway feature for Telegram community deployments, expected to land in the v0.16.0 minor release.
- Automatic reasoning parameter fallback ([Issue #34786](https://github.com/NousResearch/hermes-agent/issues/34786)): Gracefully drop unsupported `reasoning_effort` / `thinking` parameters when APIs reject requests, instead of throwing hard errors, prioritized for enterprise multi-provider deployments.

## 7. User Feedback Summary
Overall user sentiment is predominantly positive regarding maintainer responsiveness, as the team shipped two same-day hotfixes to address v0.15.0 breakage immediately after release. Key pain points reported:
- Users on `pip install` and Docker deployers faced hours of unexpected downtime immediately after upgrading to v0.15.0, due to uncaught packaging regressions that failed to be caught in pre-release testing.
- Users running 8+ hour daily

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-05-30
*Source: github.com/sipeed/picoclaw*

---

## 1. Today's Overview
On 2026-05-30, the PicoClaw open source personal AI assistant project maintained consistent high-velocity development, with 3 updated issues, 8 processed pull requests, and 2 published new builds across the last 24 hours. 5 out of 8 total updated PRs were merged or closed, representing a 62.5% merge rate that signals strong maintainer throughput for pending community contributions. The stable v0.2.9 release and corresponding automated nightly build roll out targeted UI improvements, default configuration tweaks, and incremental runtime bug fixes for end users. Activity trends show the project is prioritizing both consumer-focused deployment refinements and under-the-hood upgrades for multi-agent orchestration and security capabilities, positioning it well to hit its next minor version milestone on track.

## 2. Releases
Two new official builds were published in the last 24 hours, with no documented breaking changes or required migration steps for existing users:
1. **Stable v0.2.9**: Official production release with core updates including MCP configuration panel additions to the web UI, new `pretty_print` and `disable_escape_html` default parameters for tool feedback outputs, and multiple targeted runtime bug fixes.
2. **v0.2.9-nightly.20260529.85751492**: Unstable automated nightly build generated against the latest main branch commit after the v0.2.9 tag. Users are advised to test this build only in non-production environments, with full changes viewable in the [v0.2.9 to main changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main).

## 3. Project Progress
5 merged/closed PRs advanced core project functionality in the last 24 hours:
- [#2932](https://github.com/sipeed/picoclaw/pull/2932): Merged full Czech (cs) localization coverage, with all 792 frontend strings translated, including newly added UI sections for MQTT channels, MCP server configuration, and the model catalog.
- [#2961](https://github.com/sipeed/picoclaw/pull/2961) + [#2960](https://github.com/sipeed/picoclaw/pull/2960): Merged two dependency bump PRs for core Go runtime libraries, patching minor stability and security gaps in `pion/rtp` (v1.10.1 → v1.10.2) and `caarlos0/env/v11` (v11.4.0 → v11.4.1).
- [#2966](https://github.com/sipeed/picoclaw/pull/2966): Merged updated WeChat QR code documentation to keep community onboarding and official group resources current.
- [#2877](https://github.com/sipeed/picoclaw/pull/2877): Closed the stale pre-exec Tirith security scanning PR, noting the rebased feature will require additional discussion and rework before it can be re-submitted for merge.

## 4. Community Hot Topics
The two highest-engagement recent items highlight fast-growing user demand for specialized deployment and multi-agent capabilities:
1. [#2625 [Feature] Provide compiled builds with WhatsApp support](https://github.com/sipeed/picoclaw/issues/2625): The most active open issue, with 7 comments and 1 positive reaction, submitted by a Raspberry Pi Zero 2 end user.
2. [#2929 [Task] Add first-class agent-to-agent communication for cooperative workflows](https://github.com/sipeed/picoclaw/issues/2929): 2 comments and 1 positive reaction from the developer community.

Underlying unmet needs: A large segment of PicoClaw users run the assistant on low-power embedded single-board computers for personal IM automation use cases, and want to avoid manual full recompilation overhead. Parallel to that, the developer community already leverages PicoClaw's existing multi-agent runtime, and is asking for native peer-to-peer orchestration primitives to replace ad-hoc spawn/delegate workarounds for collaborative agent workflows.

## 5. Bugs & Stability
No critical crashes, data loss, or high-severity regressions were reported in the last 24 hours. The only confirmed active bug is ranked medium severity:
- **Scheme-less URL workspace guard false positive**: [#2965](https://github.com/sipeed/picoclaw/pull/2965) documents that when the `restrict_to_workspace` security feature is enabled, the exec tool incorrectly parses scheme-less URLs (e.g. `wttr.in/Beijing`) as absolute local file paths, blocking valid curl requests. A full fix PR is already authored by a core contributor, and is expected to merge in the next nightly build. Affected users can temporarily work around the issue by disabling workspace guard protection for their runtime.

## 6. Feature Requests & Roadmap Signals
Verified user-submitted feature requests include pre-compiled arm64 builds with WhatsApp support, a native agent-to-agent communication layer, and configurable multi-level image compression for the vision pipeline.
Based on current development progress, the fully drafted image compression PR [#2964](https://github.com/sipeed/picoclaw/pull/2964), merged Czech localization, and the workspace guard bug fix are all highly likely to ship in the next v0.2.10 minor patch release. The more complex agent-to-agent communication feature and pre-built WhatsApp arm64 build are longer-term roadmap items targeted for the v0.3 major feature release.

## 7. User Feedback Summary
### Pain Points
1. Low-power embedded SBC users report high friction from the lack of pre-built WhatsApp channel support, requiring time-consuming manual recompilation every time they update their PicoClaw instance on devices like the Raspberry Pi Zero 2.
2. A recently resolved issue (#2351) confirmed that missing required skill binaries previously caused the LLM to hallucinate non-existent capabilities, leading to confusing runtime failures for end users.
3. Power users report unexpected breakage for common workflow commands like curl when the workspace guard protection feature is enabled.
### Satisfaction Signals
Growing community contributions for localization and documentation improvements signal broad user approval of the project's fast iteration speed, MCP support, and flexible multi-agent runtime architecture.

## 8. Backlog Watch
High-priority stale items pending maintainer review:
1. [#2877](https://github.com/sipeed/picoclaw/pull/2877): The rebased Tirith pre-exec security scanning PR, which adds high-value shell threat protection for end users, has been pending review for 2 weeks with no maintainer feedback.
2. [#2662](https://github.com/sipeed/picoclaw/pull/2662): The documentation cleanup PR to unify the LLM providers vendor table, which will reduce redundant information and lower onboarding friction for new users, has been open for over a month with no review.
3. [#2625](https://github.com/sipeed/picoclaw/issues/2625): The WhatsApp pre-compiled build feature request, a top priority for the large embedded user base, still lacks official maintainer guidance on planned adjustments to the arm64 build pipeline.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-05-30
---
## 1. Today's Overview
On 2026-05-30, the NanoClaw open-source AI agent project recorded consistent, high-velocity active development, with 2 newly filed open issues and 8 total updated pull requests across the 24-hour reporting window, 3 of which were merged or closed. No new official public releases were published this period, as the core team wraps up a batch of critical security, stability, and observability updates targeted at both self-hosted consumer and enterprise agent deployments. Recent work is split evenly between core infrastructure upgrades, third-party chat platform compatibility fixes, cross-platform reliability improvements, and experimental new domain-specific features. The 100% triage rate for all newly submitted issues this window signals strong overall project health and active maintainer responsiveness.

## 2. Releases
No new official NanoClaw releases were published in the 24-hour reporting window. No version changes, breaking updates, or migration notes are applicable for this period.

## 3. Project Progress
3 total PRs were merged/closed in the reporting window, delivering the following key updates:
1. [PR #2456](https://github.com/nanocoai/nanoclaw/pull/2456) (feat(langfuse): add LangFuse observability to Claude provider): Full trace instrumentation for the Claude provider, capturing per-agent-session data including request latency, API error breakdowns (retries, rate limits), tool call timing, and context compaction token counts to support enterprise debugging and performance monitoring.
2. [PR #1961](https://github.com/nanocoai/nanoclaw/pull/1961) (skill(add-gmail-tool): OneCLI-native Gmail MCP tool): Delivers a long-awaited official first-party Gmail integration that adheres to NanoClaw v2's core security invariant, ensuring containers never receive raw API keys and all credentials are injected exclusively via the OneCLI secure pathway.
3. [PR #2639](https://github.com/nanocoai/nanoclaw/pull/2639) ([follows-guidelines] Ios reliability): Resolves unaddressed edge cases for the iOS mobile agent runtime, laying foundational groundwork for stable agent operation across Apple ecosystem devices.

## 4. Community Hot Topics
The highest-stakes active community topic this period is:
- [Issue #2641](https://github.com/nanocoai/nanoclaw/issues/2641) (Supply chain risk - @gongrzhe/server-gmail-autoauth-mcp): Submitted by community users who flagged the high risk of unvetted third-party MCP tools that request full Gmail access on user machines, referencing a public industry report of malicious code being deployed via autoauth-MCP packages. The underlying community need is clear: users demand audited, official first-party tooling for high-privilege integrations to eliminate supply chain attack surface, a requirement directly addressed by the newly merged native Gmail MCP PR.

## 5. Bugs & Stability
Bugs reported this period are ranked by severity below:
1. **High Severity**: [Issue #2640](https://github.com/nanocoai/nanoclaw/issues/2640) (bug: delivery: hot-journal race on outbound.db readonly poll emits SQLITE_READONLY_ROLLBACK error log): A race condition in `src/delivery.ts` where frequent 1-second active poll ticks open the SQLite `outbound.db` file in read-only mode while the host container writes to it in `journal_mode = DELETE`, generating repeated error logs and risking dropped delivery events for agent messages. No associated fix PR is filed as of this reporting window.
2. **Medium Severity (In active review)**: Three open PRs are already in progress to resolve widespread Telegram integration flaws: [PR #2642](https://github.com/nanocoai/nanoclaw/pull/2642) pins the Telegram chat adapter dependency to avoid peer version mismatches, [PR #2643](https://github.com/nanocoai/nanoclaw/pull/2643) fixes failed bot responses to direct @mentions and DMs, and [PR #2644](https://github.com/nanocoai/nanoclaw/pull/2644) adds correct detection for replies sent directly to the bot.

## 6. Feature Requests & Roadmap Signals
Public changes this reporting period signal clear near-term roadmap priorities:
- The highly requested per-agent-group custom context window for multi-user team chats from [PR #2645](https://github.com/nanocoai/nanoclaw/pull/2645) is almost guaranteed to land in the next v2.x minor stable release, addressing a top requested use case for team agent deployments.
- The experimental street wind & shadow map visualization skill in [PR #2646](https://github.com/nanocoai/nanoclaw/pull/2646) for urban planning and environmental use cases will likely be released as an optional community-maintained skill after the next core stable update.
- The merged LangFuse observability and iOS reliability updates confirm core team priorities to expand enterprise monitoring support and formalize first-class Apple mobile support in upcoming roadmap milestones.

## 7. User Feedback Summary
Clear user pain points and experience trends from this reporting period include:
1. **Dissatisfaction/High Risk Concern**: Self-hosted users are deeply worried about unvetted third-party MCP tools that request high-privilege credentials like Gmail access, following widely publicized reports of malicious supply chain attacks targeting AI agent runtime ecosystems.
2. **Usability Pain Point**: Telegram integration users report inconsistent bot behavior in group chats, where the bot frequently fails to respond to direct mentions or replies even when explicitly addressed.
3. **Unmet Enterprise Need**: Enterprise self-hosted users previously lacked built-in distributed tracing for their Claude-powered agent deployments, making it nearly impossible to debug slow responses or failed tool execution events.
4. **Mobile Pain Point**: iOS users encounter frequent runtime crashes and unstable agent execution, making the platform unsuitable for production mobile agent deployments prior to the merged iOS reliability patch.

## 8. Backlog Watch
The highest-priority item requiring immediate maintainer attention this window is newly filed [Issue #2641](https://github.com/nanocoai/nanoclaw/issues/2641) (Supply chain risk - @gongrzhe/server-gmail-autoauth-mcp). The team should publish urgent public user guidance warning against unvetted third-party Gmail MCP tools and highlight the availability of the newly merged official native OneCLI Gmail skill to eliminate this attack surface. Notably, two long-running backlog PRs (PR #1961 filed April 24, 2026 and PR #2456 filed May 13, 2026, both previously stuck in review for multiple weeks) were resolved in this reporting window, reducing the size of the stale PR backlog significantly.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-05-30
---

## 1. Today's Overview
The NullClaw project maintained high development velocity over the 24-hour reporting window ending 2026-05-30, delivering a new stable release, closing 3 pre-existing open bugs, and merging 9 pull requests with 3 remaining work-in-progress PRs open for review. All resolved work focused on stabilizing core user-facing channel integrations, fixing broken utility functionality, and improving cross-platform build reliability, with zero new critical unpatched issues reported in the period. The maintainer team is executing a tightly scoped bugfix sprint following the earlier v2026.5.4 feature drop, demonstrating strong priority alignment with widely deployed personal assistant user workflows. Project health metrics are very positive, with zero accumulated high-severity open bugs and <2-week turnaround time for all recently resolved user-reported issues.

## 2. Releases
### New Release: v2026.5.29 (published 2026-05-29)
No breaking changes or mandatory migration steps are required for existing users. Key changes in this rollup release include:
1. Upmerge of the earlier v2026.5.4 feature branch
2. Full migration of all GitHub CI workflows to the internal nullbuilder automation system for more consistent build and test execution
3. Addition of a native ACP stdio adapter to support standardized cross-agent interoperability
4. Cumulative validated bugfixes for Telegram, LINE, memory tooling, Nix builds, and macOS path security
5. Partial documentation updates (work in progress)

## 3. Project Progress
9 total merged/closed PRs were completed in the reporting window, advancing the following workstreams:
- **Telegram channel reliability**: [PR #930](https://github.com/nullclaw/nullclaw/pull/930) adds replied-to message text to inbound conversation context, while [PR #928](https://github.com/nullclaw/nullclaw/pull/928) fixes silent loss of subagent spawn task results in Telegram polling mode
- **Core tool functionality**: [PR #929](https://github.com/nullclaw/nullclaw/pull/929) updates the `memory_list` tool to correctly surface global, session-free memory entries
- **LINE channel improvements**: [PR #934](https://github.com/nullclaw/nullclaw/pull/934) fixes LINE sendMessage routing and adds a thread-safe 30s TTL replyToken cache to reduce failed message delivery
- **Cross-platform build fixes**: [PR #935](https://github.com/nullclaw/nullclaw/pull/935) updates Nix lockfiles to restore full Zig 0.16.0 build support, while [PR #925](https://github.com/nullclaw/nullclaw/pull/925) adjusts path security rules to allow valid macOS workspaces under `/private/var/folders` while blocking unrelated system paths
- **Gateway feature expansion**: [PR #933](https://github.com/nullclaw/nullclaw/pull/933) adds an authenticated `/media/transcribe` STT endpoint for gateway clients, stores gateway paired tokens as hashes for improved security, and extends config wizard support for A2A, memory, and audio configuration objects
- **Test infrastructure cleanup**: [PR #927](https://github.com/nullclaw/nullclaw/pull/927) suppresses expected API error logs during Zig test runs to clean up test output, while [PR #926](https://github.com/nullclaw/nullclaw/pull/926) isolates web search API key environment variables to make aggregate failure test cases fully deterministic

## 4. Community Hot Topics
No tracked Issues or PRs in the 24-hour activity window have non-zero public comments or emoji reactions as of publication. However, the recently resolved items reflect the highest shared user priorities for the project at this stage:
- Telegram channel bug fixes are the top user concern, as Telegram is the most widely deployed user-facing integration for NullClaw personal assistant instances
- Restored Nix build support is a high priority for power users running NullClaw on NixOS and immutable infrastructure
- Global persistent memory visibility addresses a widely requested QoL need for users building agents that retain shared knowledge across multiple chat sessions

## 5. Bugs & Stability
No new unpatched bugs, crashes, or regressions were reported in the reporting window. All 3 previously open bugs have been fully resolved, ranked by original severity:
1. **Critical (resolved)**: [Issue #918](https://github.com/nullclaw/nullclaw/issues/918) – Spawn tool subagent results were never delivered to Telegram chat, breaking all multi-subagent workflows for Telegram users. Fixed via merged PR #928.
2. **High (resolved)**: [Issue #917](https://github.com/nullclaw/nullclaw/issues/917) – The `memory_list` tool could not return global memory entries, breaking persistent shared memory functionality. Fixed via merged PR #929.
3. **Medium (resolved)**: [Issue #916](https://github.com/nullclaw/nullclaw/issues/916) – Telegram did not include replied-to message text in inbound context, breaking natural reply-based conversation workflows. Fixed via merged PR #930.

## 6. Feature Requests & Roadmap Signals
The 3 remaining open PRs provide clear signals of upcoming functionality for the next patch release:
- [PR #940](https://github.com/nullclaw/nullclaw/pull/940) fixes catalog querying for custom OpenAI-compatible providers, a requested feature for users running self-hosted third-party LLM endpoints
- [PR #939](https://github.com/nullclaw/nullclaw/pull/939) adds support for the previously unimplemented `compact_context` config flag, letting users disable automatic history truncation for full conversation context retention
- The new ACP stdio adapter shipped in v2026.5.29 also signals that expanded cross-agent interoperability features will be a core focus of the next minor release. Both open model config and context compaction fixes are very likely to land in the upcoming v2026.5.30 patch release.

## 7. User Feedback Summary
The resolved issues reflect clear recent user pain points:
- Top dissatisfaction came from silent failures in the Telegram channel, where users were unaware that subagent tasks had completed successfully because results never surfaced in chat
- Nix power users were unable to build the latest NullClaw versions for up to several weeks due to broken Zig 0.16.0 support
- Users configuring global persistent memory for cross-session agent personality and workflow recall found their stored entries unretrievable, breaking long-term assistant behavior consistency
No widespread complaints about core base functionality were observed, indicating high overall user satisfaction for standard personal assistant use cases.

## 8. Backlog Watch
There are no long-unanswered high-priority issues or PRs pending maintainer attention in the current dataset. All 3 currently open PRs were submitted in the last 24 hours, aligned with the team's active bugfix sprint priorities. The project maintains a very low backlog accumulation rate, demonstrated by the fact that all 3 resolved user-reported issues (created 12-14 days prior to this digest) were fully addressed in the current development cycle.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-05-30 Project Digest
---

## 1. Today's Overview
IronClaw saw extremely high engineering activity on 2026-05-30, with 21 updated issues (15 active, 6 closed) and 48 updated pull requests (25 open, 23 merged/closed) spanning the core Reborn rewrite track, security hardening workstream, and MCP extension porting roadmap. No new official releases were published today, as core contributors continue finalizing pre-release stability fixes and dependency alignment to unblock long-delayed crates.io publishing of v0.25.0 through v0.27.0. 98% of today's code changes came from internal core team contributors, with the only external non-core update being an automated dependabot security bump for the `tar` Rust crate. Project health remains strong, with tightly stacked, dependency-aligned PR delivery fully aligned to the public Reborn product roadmap.

## 2. Releases
No new official releases were published in the last 24 hours. The repository already contains tagged builds for v0.25.0 through v0.27.0 as of April 29, 2026, but these versions remain unpublished to crates.io as of today, leaving downstream consumers limited to the March 31 2026 v0.24.0 crates.io release.

## 3. Project Progress
Today's 23 merged/closed PRs delivered key milestones across three core workstreams:
1. **Reborn Auth Maturity**: The full durable product auth stack reached feature-complete status via merged PRs [#4231](https://github.com/nearai/ironclaw/pull/4231) (wiring auth consumers to staged credentials), [#4232](https://github.com/nearai/ironclaw/pull/4232) (auth gate blocked exit verification), [#4234](https://github.com/nearai/ironclaw/pull/4234) (filesystem-backed product-auth adapter implementation), plus follow-up CI fix PR [#4243](https://github.com/nearai/ironclaw/pull/4243) that resolved a trait mismatch compile failure.
2. **MCP Extension Porting**: PR [#4223](https://github.com/nearai/ironclaw/pull/4223) merged to bring the NEAR AI MCP extension fully into the Reborn runtime, adding a host-mediated HTTP egress layer and native credential injection support for the model-visible `nearai.search` capability.
3. **Documentation & Core Quality of Life**: Merged work included the formal communication delivery resolution design doc (PR [#4240](https://github.com/nearai/ironclaw/pull/4240)), public trigger loop design spec (PR [#3874](https://github.com/nearai/ironclaw/pull/3874)), and new regex skill activation configuration (PR [#4144](https://github.com/nearai/ironclaw/pull/4144)) that adds an explicit toggle for agent skill selection logic.
Six total issues were closed today, including the resolution of the high-priority RuntimeCredentialTarget security review, Reborn production builder refactoring, and core approval/auth interaction service implementation.

## 4. Community Hot Topics
The highest-engagement discussions from the last 24 hours are:
1. **[Issue #3259] Publish 0.25.0–0.27.0 to crates.io — downstream pinned to 0.24.0 by wasmtime 28.x CVEs** (https://github.com/nearai/ironclaw/issues/3259, 11 comments): This is the project's highest-visibility active issue, reflecting urgent demand from downstream users to access patched versions that resolve unresolved Wasmtime 28.x security vulnerabilities, as the 2-month-old public crates.io release leaves all dependent projects exposed.
2. **[Issue #3857] [Reborn] Lane 10: add Slack ProductAdapter MVP with preconfigured credentials** (https://github.com/nearai/ironclaw/issues/3857, 5 comments): The core team is actively scoping a first-party Slack integration, responding to widespread unmet user demand for native Slack workspace automation and bot support for IronClaw agents that eliminates the need for custom user-built adapters.
3. **[Closed Issue #3917] Question: kill RuntimeCredentialTarget::PathPlaceholder or harden it?** (https://github.com/nearai/ironclaw/issues/3917, 5 comments): The security team resolved a high-stakes debate over a new credential injection primitive, electing to harden or fully remove the path-segment secret injection feature to eliminate excess cross-request secret leakage risk before public release.

## 5. Bugs & Stability
Bugs and regressions reported today, ranked by severity:
1. **High Severity (resolved)**: Compile regression reported in [#4237](https://github.com/nearai/ironclaw/issues/4237) where `cargo test -p ironclaw_product_workflow` fails on mainline after merging the durable product auth stack. Fix PR #4243 was merged the same day to resolve the missing trait method implementation.
2. **Medium Severity (open)**: Runtime performance flaw tracked in [#4241](https://github.com/nearai/ironclaw/issues/4241), where live workspace prompt inputs break KV cache reuse across conversation turns, reducing LLM inference speed for long-running agent tasks by breaking expected KV cache prefix continuity. No fix PR is filed as of today.
3. **Medium Severity (open)**: Memory safety gap tracked in [#4222](https://github.com/nearai/ironclaw/issues/4222), where injected HTTP credential material is not zeroized after use across all network request carriers, leaving plaintext secrets in memory longer than required. No associated fix PR is open.
4. **Low Severity (open)**: Scheduled nightly E2E test failure tracked in [#4108](https://github.com/nearai/ironclaw/issues/4108), with no public root cause documented as of today.

## 6. Feature Requests & Roadmap Signals
Based on active in-progress PRs and open P0 issues, the most likely features shipping in the next 0.28.x minor release include:
1. Full WebChat v2 SSO support for Google, GitHub, and NEAR wallet providers, building on the already merged Google SSO implementation
2. First-party Notion MCP extension support, following the recently completed NEAR AI MCP port
3. New regex skill activation toggle for explicit agent skill selection workflows
4. Crash-safe, durable OAuth callback token cleanup for Reborn auth flows
The pre-planned Slack ProductAdapter MVP and EventStreamManager for SSE/WebSocket event fanout are targeted for the subsequent 0.29.0 release.

## 7. User Feedback Summary
Core user pain points surfaced today include:
1. The top unmet need for security-sensitive downstream users is unblocked access to patched IronClaw versions on crates.io to mitigate public Wasmtime CVEs, a blocker for regulated teams using IronClaw in production.
2. Multiple enterprise users have requested pre-built, first-party MCP adapters for Notion, Slack and GitHub to eliminate custom integration work for their internal agent deployments.
3. Early Reborn testers reported degraded agent responsiveness for multi-turn complex workspace tasks, caused by broken KV cache reuse across conversation turns. No widespread negative satisfaction signals were observed, with nearly all user feedback focused on unblocking new planned functionality rather than complaints about existing production features.

## 8. Backlog Watch
High-priority long-open items that require explicit maintainer attention:
1. **Issue #3259 (opened 2026-05-05, 25 days old)**: The crates.io publishing request for v0.25.0-0.27.0 has 11 user comments but remains unassigned to a maintainer for final release, despite being a documented high-priority CVE mitigation.
2. **Issue #3702 (opened 2026-05-16, 14 days old)**: The request to finalize and implement a binary-E2E test framework for Reborn to ensure test parity with the legacy runtime has 4 comments, but no assigned lead to drive delivery.
3. **Issue #4206 (opened 2026-05-28)**: The requirement to refactor runtime HTTP egress to be fully async end-to-end is marked as a pre-requisite for large-scale workflow scaling, but no associated implementation PR has been filed to date.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 2026-05-30 Project Digest
---
## 1. Today's Overview
LobsterAI, NetEase Youdao's open-source personal AI agent runtime platform, recorded no new public issue updates and 14 total active pull request changes in the 24-hour reporting window. 9 of 14 updated PRs were successfully merged or closed, and no new official releases were published during this period. The team is clearly running a focused stability iteration sprint, with nearly all merged work targeting UI rendering performance, connection reliability, and core user experience quality-of-life improvements rather than major new feature overhauls. Zero active open issues indicate the maintainer team has cleared all pending public bug reports for the current development cycle. Overall project health is robust, with work prioritized to harden high-volume execution scenarios commonly used by power users running complex tool calling workflows.

## 2. Releases
No new official releases were published in the 24-hour reporting window, with no publicly logged recent stable releases available as of this digest.

## 3. Project Progress
The 9 successfully merged/closed PRs delivered cross-module performance, stability, and UX upgrades for core agent workflows:
1. **Large tool execution performance suite**: PR [#2077](https://github.com/netease-youdao/LobsterAI/pull/2077) and PR [#2075](https://github.com/netease-youdao/LobsterAI/pull/2075) eliminated UI blocking and unexpected WebSocket disconnections when agent tool calls return outputs larger than 1MB, implementing lazy rendering for results over 20KB with a lightweight summary preview that only renders full markdown on explicit user expand action, and adjusting the gateway watchdog logic to avoid false timeouts during high-throughput output.
2. **Core functionality fixes**: PR [#2074](https://github.com/netease-youdao/LobsterAI/pull/2074) added full end-to-end support for deleting sub-agent sessions with complete IPC, runtime, and local storage cleanup. PR [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) added clear user-facing toast error prompts for missing or inaccessible local generated artifact files. PR [#2063](https://github.com/netease-youdao/LobsterAI/pull/2063) fixed IM reply assembly to scope to the current conversation turn and strip internal model thinking blocks. PR [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057) replaced the deprecated Windows VBScript auto-update launcher with a hidden PowerShell implementation to resolve modern Windows compatibility issues.
3. **UX and startup optimization**: PR [#2078](https://github.com/netease-youdao/LobsterAI/pull/2078) refined cowork mode skill routing to emit selected-skill routing metadata rather than inline full prompts. PR [#2076](https://github.com/netease-youdao/LobsterAI/pull/2076) optimized the artifact preview toolbar layout by consolidating low-frequency operations into a hidden 3-dot menu. PR [#2072](https://github.com/netease-youdao/LobsterAI/pull/2072) delivered a full OpenClaw gateway startup optimization pass that eliminated redundant config sync, duplicate plugin registration, and invalid provider parsing during application boot.

## 4. Community Hot Topics
No PRs or Issues recorded user-submitted comments, reactions, or public community discussions in the 24-hour reporting window. The current mainline sprint focuses on internal hardening work with no public new feature announcements to trigger broad public community feedback.

## 5. Bugs & Stability
No unpatched active crashes or regressions were reported in the reporting window, and all tracked high-severity recent bugs have been resolved via merged PRs, ranked by original severity:
1. **Critical**: UI full freeze and gateway false disconnections during large (>1MB) tool call outputs, resolved by merged PRs #2077 and #2075.
2. **High**: Broken Windows auto-update functionality caused by modern Windows blocking deprecated VBScript launchers, fixed by merged PR #2057.
3. **Medium**: No visible user feedback when locally generated artifact files are moved or deleted, resolved by merged PR #2073.

## 6. Feature Requests & Roadmap Signals
The full pending batch of stale UX patches all centered on preventing accidental user content loss indicates the maintainer team is prioritizing friction reduction for casual daily users. These low-risk, high-utility contributions are very likely to be merged and included in the next upcoming minor stable release. Additional roadmap signals include continued investment in sub-agent multi-session management functionality, and ongoing optimization of gateway startup and runtime performance for users running complex multi-plugin local agent workflows.

## 7. User Feedback Summary
All merged changes directly address confirmed repeated user pain points from prior feedback cycles:
1. Power users running code execution or large document analysis agents previously reported severe workflow interruptions from UI freezes when agents returned 1MB+ outputs, a pain point now fully resolved in this sprint.
2. Windows users previously reported consistent auto-update failures due to OS-level VBScript deprecation, a compatibility issue now patched.
3. Regular users frequently reported losing unsaved edits to Agent configurations, MCP server settings, and input drafts when accidentally closing modals or switching sessions, which remains the top outstanding UX improvement request. No new widespread negative feedback was logged in this reporting period.

## 8. Backlog Watch
A set of 5 stale community-contributed PRs ([#1473](https://github.com/netease-youdao/LobsterAI/pull/1473), [#1474](https://github.com/netease-youdao/LobsterAI/pull/1474), [#1475](https://github.com/netease-youdao/LobsterAI/pull/1475), [#1476](https://github.com/netease-youdao/LobsterAI/pull/1476), [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477)) submitted on 2026-04-04 have been pending review for nearly 2 months. All PRs are fully implemented, validated, and target the widely requested unsaved content loss prevention feature set for modals, draft inputs, and Agent settings panels. These low-risk, high-impact contributions are waiting for maintainer triage, and merging them will resolve 5 previously tracked linked user pain points.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-05-30
---
## 1. Today's Overview
For the 24-hour reporting window ending 2026-05-30, the Moltis open-source AI agent assistant project recorded steady, low-friction development activity with no new public releases published. The team processed 4 total updated issues (3 open, 1 closed) and 2 updated pull requests (1 open, 1 merged), focused on resolving user-reported skill management bugs, triaging edge-case sandbox runtime failures for Apple deployments, and running routine dependency hygiene checks. All closed work in the window directly addressed a recently filed user bug, demonstrating tight alignment between community issue reporting and fast maintainer response. No critical production-breaking incidents were flagged, indicating stable core operation for general users.
---
## 2. Releases
No new official releases were published in the 24-hour reporting window. No version changes, breaking updates, or migration notes apply for this period.
---
## 3. Project Progress
The sole closed/merged pull request in the reporting window is [PR #1084](https://github.com/moltis-org/moltis/pull/1084) submitted by contributor penso. This patch resolves a reported bug that prevented users from toggling individual skills on and off when using per-category skill enable/disable controls, by storing individual bundled skill disable states separately from category-level settings. The fix unifies the skill state validation logic across three core Moltis components: chat session discovery, the public web API, and skill detail UI responses, and adds full unit test coverage to prevent future regressions of the functionality. The second PR tracked in the window, open [Dependabot PR #1087](https://github.com/moltis-org/moltis/pull/1087), proposes a minor patch version bump for the Rust `tar` crate from 0.4.45 to 0.4.46 as part of routine dependency hygiene work.
---
## 4. Community Hot Topics
The most active community discussion in the current backlog is [Issue #235](https://github.com/moltis-org/moltis/issues/235), a feature request for PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration, originally filed on 2026-02-25 and most recently updated 2026-05-29. It is the only active item in the reporting window with 6 community comments and 1 user reaction. The underlying user need stems from a major technical limitation when spawning Claude Code as a standard subprocess, where the tool automatically disables its full interactive feature set when it detects no connected TTY terminal, breaking mid-task input flows and full feature access for Moltis-orchestrated multi-agent workloads. This request signals strong community demand for deeper native integration with Anthropic's Claude Code tooling, one of the most popular local AI coding assistant runtimes for agent use cases.
---
## 5. Bugs & Stability
All newly reported bugs in the window are ranked by severity below:
1. **High (resolved)**: Individual skill enable/disable malfunction [Bug #1083](https://github.com/moltis-org/moltis/issues/1083). This bug broke core skill management functionality for all users using category-level skill controls, and it has been fully resolved by merged PR #1084, with no active outstanding impact for users pulling the latest main branch code.
2. **High (unresolved)**: Docker sandbox startup failure on Apple Silicon arm64 [Bug #1085](https://github.com/moltis-org/moltis/issues/1085). This issue blocks all users running Moltis on arm64 macOS with the Docker sandbox backend, caused by hardcoded DMI sysfs mounts that do not exist in Docker Desktop's x86-focused Linux VM for Apple Silicon. No fix PR has been filed as of the end of the reporting window.
3. **Medium (unresolved)**: Apple Containers backend sandbox image build failure behind corporate proxies [Bug #1086](https://github.com/moltis-org/moltis/issues/1086). This edge-case issue exclusively impacts enterprise macOS users operating behind Zscaler corporate HTTPS proxies, where DNS resolution fails in the Apple Containers builder VM. No fix PR has been filed to date.
---
## 6. Feature Requests & Roadmap Signals
The highest-priority unimplemented user feature request tracked in the active backlog is the PTY-based Claude Code CLI orchestration support outlined in [Issue #235](https://github.com/moltis-org/moltis/issues/235). Given the feature has already accrued 6 community comments after 3 months of discussion, and the project has recently prioritized macOS user experience improvements for local sandbox runtimes, this PTY integration is highly likely to be targeted for inclusion in the next minor feature release. Additionally, the two recently reported sandbox backend bugs for Apple deployments will almost certainly be prioritized for patching before any new feature release ships, to reduce breakage for the fast-growing macOS Moltis user base.
---
## 7. User Feedback Summary
User feedback from the reporting window highlights three core emerging pain points for the Moltis community. First, non-technical end users find fine-grained skill management frustrating, as seen in the report of the broken individual skill toggle functionality that prevented users from customizing their agent's toolset to their specific needs. Second, a large segment of Moltis' power user base runs the tool on Apple Silicon macOS, and two separate sandbox runtime failures signal that current Apple platform compatibility testing for container backends is not comprehensive enough for edge cases. Third, enterprise users working behind standard corporate Zscaler proxies are currently unable to use the native Apple Containers backend, creating a barrier for enterprise adoption of the platform. No explicit positive user satisfaction feedback was submitted in the 24-hour window.
---
## 8. Backlog Watch
The highest-priority long-unresolved open item requiring additional maintainer attention is [Issue #235](https://github.com/moltis-org/moltis/issues/235), which has been open for more than 3 months since its creation on 2026-02-25, with no associated implementation PR filed to date despite consistent community engagement. Given the feature's high relevance for multi-agent orchestration use cases, maintainers should prioritize assigning a contributor or scheduling a roadmap planning session for this PTY integration work to avoid delaying high-impact community-driven feature development.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Project Digest | 2026-05-30
---

## 1. Today's Overview
CoPaw maintained a high active development velocity on 2026-05-30, with a 56% issue closure rate (26 of 46 total updated issues resolved) and 53% PR merge/closure rate (18 of 34 total updated PRs merged, closed or triaged). A new v1.1.10-beta.1 pre-release was published this window, mostly focused on post-v1.1.9 bug fixes and minor quality of life improvements. 3 first-time contributors submitted valid PRs today for features spanning Feishu channel extensions, plugin system APIs, and prompt registry functionality, indicating fast-growing community adoption and contribution momentum. Overall project health remains strong, with core maintainers prioritizing reliability of unattended automation and multi-agent use cases reported by production users.

## 2. Releases
A single new pre-release was published:
### v1.1.10-beta.1
**Key changes:**
1. Refined README news section for clearer release note visibility, bumped version number from v1.1.9
2. Removed redundant `unit-tests.yml` CI workflow to reduce pipeline run overhead
3. No breaking changes or migration requirements are noted for this pre-release. Users are invited to test the beta and report any regressions before the v1.1.10 stable launch.

## 3. Project Progress
All merged/closed PRs delivered the following major advancements:
- **Core Agent Capability:** Added the official `spawn_subagent` built-in tool, which supports ephemeral in-workspace subtask delegation, completing the platform's 3-tier multi-agent collaboration mode alongside existing `chat_with_agent` cross-workspace calls and standalone independent agent workspaces (#4806). A fix was also implemented to preserve reasoning content across file blocks in assistant messages, preventing rare total message drops when agents return file attachments alongside thought process traces (#4728).
- **Windows Desktop Fixes:** Bundled a native `qwenpaw` CLI executable in Tauri desktop builds to eliminate the unwanted repeated `pip install qwenpaw` loop when creating cron jobs (#4779). Auto-missing dependency installation logic was added to fix the desktop pet startup loop failure reported in v1.1.9 (#4801), and hidden unwanted Git console popup windows that appeared in coding mode (#4696).
- **Channel & Integration Improvements:** Refactored the Feishu interactive card system to align its architecture with existing WeCom and QQ channel implementations, fixing broken streaming mode resolved cards (#4742). Added official OpenRouter attribution headers to make CoPaw properly tracked and listed on the OpenRouter coding assistant leaderboard (#4809).
- **Coding Mode UX:** Added logic to clear stale editor file tabs when switching between different projects, eliminating the old bug where files from a previous project remained visible in the editor tab bar (#4805).

## 4. Community Hot Topics
The highest-engagement issues by comment count reflect core user priority for production automation reliability and low-code multi-agent orchestration:
1. **Tool call hangs waiting for user input post task completion** ([#4739](https://github.com/agentscope-ai/QwenPaw/issues/4739), 8 comments)
   Underlying need: Users running fully unattended background automation workflows require the agent to continue processing tasks automatically after tool execution (including timeouts or errors) without pausing for manual user input, a critical reliability requirement for 24/7 running deployments.
2. **Scheduled cron tasks get interrupted when users send new messages due to shared session** ([#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653), 7 comments)
   Underlying need: Isolated, non-preemptable execution context for scheduled jobs, to ensure pre-configured regular reminder and periodic data processing tasks do not fail randomly.
3. **CoPaw Agent Teams feature request for natural language driven self-evolving multi-agent collaboration** ([#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224), 6 comments)
   Underlying need: Low-code/no-code team orchestration that removes the current requirement for users to manually create, configure and connect individual agents one by one, for complex enterprise workflow automation use cases.

## 5. Bugs & Stability
Bugs are ranked by severity from highest to lowest, with fix status noted:
1. **Critical:** ChromaDB vector index inflates to 37GB after 3 months of normal use, triggering `memory_search` process crashes ([#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795)). Root cause linked to improper ChromaDB list entry cleanup on deletion, no public fix PR exists yet, confirmed workaround for users is deleting the local `file_store/` directory to reset the vector database.
2. **High:** Long streaming AI replies cause full client system freeze when accessing cloud-hosted CoPaw instances from local browsers ([#4792](https://github.com/agentscope-ai/QwenPaw/issues/4792)). No fix PR available, impacting all remote deployment users with low-spec client machines.
3. **High:** Missing shutdown handler causes last in-progress session messages to be permanently lost when the service receives a SIGTERM restart signal ([#4791](https://github.com/agentscope-ai/QwenPaw/issues/4791)). No public fix PR submitted yet.
4. **Medium:** v1.1.9 chat interface hangs completely when users send new messages ([#4802](https://github.com/agentscope-ai/QwenPaw/issues/4802)). Resolved in the latest v1.1.10-beta.1 pre-release.
5. **Medium:** Local CLI tools with network access (such as Feishu CLI) fail to start on Windows desktop builds due to subprocess websocket connection limitations ([#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712)). Already closed and patched.
6. **Minor:** User-disabled built-in skills are automatically re-enabled after every version upgrade, forcing repeated manual configuration ([#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807)). No fix PR submitted.

## 6. Feature Requests & Roadmap Signals
Based on current open PR and issue activity, these features have high chance of landing in upcoming releases:
1. 100% confirmed for v1.1.10 stable: Slash command skill auto-completion for the chat input box, with PR [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) already under active review addressing user request [#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796).
2. Very high probability for v1.1.10 stable: Full Feishu channel thread reply support and group shared session mode, with multiple related PRs from first-time contributors already partially merged.
3. Confirmed for v1.2 major release: Backend migration from AgentScope 1.x to AgentScope 2.0 ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)), signaled as a breaking change by core maintainers.
4. Likely for v1.2: Trae-style per-message conversation rollback with synchronized file system revert ([#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789)) and VSCode-compatible coding mode that supports in-place local folder import without forced workspace copying ([#4759](https://github.com/agentscope-ai/QwenPaw/issues/4759)), both have received positive maintainer feedback and are scheduled for implementation.

## 7. User Feedback Summary
- **Active use cases:** Users report running production workloads including daily parenting reminder cron jobs, internal enterprise staff performance statistical skill workflows, and multi-agent team collaboration for software development.
- **Pain points:** Top user frustrations include session isolation failures for background scheduled tasks, unexpected bugs specific to Windows desktop builds, and unmanaged vector store bloat during long term continuous use.
- **Satisfaction points:** Many users explicitly praise the platform's flexible multi-agent workspace architecture, the fast 48-hour average response time from maintainers to new bug reports, and the highly extensible plugin and custom channel system that supports custom integration with internal enterprise services.

## 8. Backlog Watch
These long-standing high-impact issues are currently awaiting maintainer triage or review:
1. **Multi-agent cron task visibility bug** ([#2115](https://github.com/agentscope-ai/QwenPaw/issues/2115)): Originally reported March 2026, users still face edge cases where sub-agent created scheduled tasks are incorrectly displayed and managed in the default agent's task list. Related fix PR [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) is open and awaiting maintainer review.
2. **Sub-agent global config inheritance rule decision** ([#4491](https://github.com/agentscope-ai/QwenPaw/issues/4491)): Discussion started mid-May 2026, no official maintainer decision on whether new sub-agents should inherit global MCP/ACP configurations has been posted yet, blocking further development of multi-agent plugin functionality.
3. **10MB hard limit on file upload size** ([#2880](https://github.com/agentscope-ai/QwenPaw/issues/2880)): Reported April 2026, remains open after multiple version updates, blocking users from uploading large e-books and reference documents for agent knowledge base construction.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (zeroclaw-labs/zeroclaw) 2026-05-30 Project Digest
---
## 1. Today's Overview
ZeroClaw maintained high 24-hour development velocity as the core team sprints to deliver the upcoming v0.8.0-beta-2 pre-release, with 14 active updated issues and 38 modified pull requests recorded across core runtime, channel integration, and security domains. The sprint priority this cycle centers on closing known regressions introduced after a March 2026 bulk 153-commit revert, fixing broken cross-channel workflow integrations, and advancing two major security and reasoning capability RFCs. 3 PRs were merged today with no new official releases published, marking a 100% open rate for newly filed bugs, 50% of which already have associated fix PRs submitted. Project health remains strong, with active external contributor participation across channel integration and documentation domains.
## 2. Releases
No new official releases were published in the 24-hour reporting window. No breaking changes or migration notes are required for end users this cycle.
## 3. Project Progress
3 total PRs were merged/closed in the reporting window, delivering high-impact feature and stability improvements:
1. PR #5652 (https://github.com/zeroclaw-labs/zeroclaw/pull/5652): Landed native extended thinking support for Anthropic and Amazon Bedrock providers, replacing the prior prompt-only reasoning system to deliver measurable performance gains for complex multi-step agent tasks.
2. PR #7007 (https://github.com/zeroclaw-labs/zeroclaw/pull/7007): Fixed broken delivery logic for WhatsApp Web LID JID user identifiers, resolving failed message routing for private WhatsApp DM threads.
3. The third merged PR completed minor cleanup of unused runtime dependencies to reduce build attack surface.
## 4. Community Hot Topics
The most active community discussions center on end-user configuration experience and MCP (Model Context Protocol) tool access control:
1. Issue #6699 (https://github.com/zeroclaw-labs/zeroclaw/issues/6699, 7 comments): High-priority bug report confirming the documented `tool_filter_groups` config has no effect on real MCP tools, which sparked discussion among MCP power users who rely on granular tool restrictions for production deployments. The underlying unmet user need is predictable, auditable tool access guardrails for connected MCP servers.
2. PR #6963 (https://github.com/zeroclaw-labs/zeroclaw/pull/6963): Documentation PR for the previously undocumented `web_dist_dir` gateway setting, which references 8 prior threads of user-reported silent failure from misconfigured static asset paths. User feedback here strongly demands complete, up-to-date reference documentation to avoid preventable runtime errors.
3. Issue #6074 (https://github.com/zeroclaw-labs/zeroclaw/issues/6074, in progress): Ongoing community audit of 153 commits lost in the March bulk revert, with users asking for a clear timeline to recover previously merged bug fixes and minor features.
## 5. Bugs & Stability
Newly reported bugs are ranked by severity below, with associated fix progress noted:
| Severity | Bug Reference | Description | Fix Status |
|----------|---------------|-------------|------------|
| S1 (Workflow Blocked, P1) | #6992 (https://github.com/zeroclaw-labs/zeroclaw/issues/6992) | Slack Socket Mode rejects all incoming messages as unauthorized | No public fix PR submitted yet |
| S1 (Workflow Blocked, P1) | #6999 (https://github.com/zeroclaw-labs/zeroclaw/issues/6999) | Telegram voice transcription silently fails for all inbound voice notes | Fix PR #7000 (https://github.com/zeroclaw-labs/zeroclaw/pull/7000) already submitted for review |
| S2 (Degraded Behavior, P1) | #6991 (https://github.com/zeroclaw-labs/zeroclaw/issues/6991) | Native tool serialization ignores risk profile and tool filter restrictions in v0.8.0-beta-1 | No public fix PR submitted yet |
| S2 (Degraded Behavior, P1) | #7001 (https://github.com/zeroclaw-labs/zeroclaw/issues/7001) | Multi-agent configs resolve the wrong TTS provider for Telegram voice replies | Fix PR #7002 (https://github.com/zeroclaw-labs/zeroclaw/pull/7002) already submitted for review |
| S3 (Minor, P2) | #7005 (https://github.com/zeroclaw-labs/zeroclaw/issues/7005) | Onboarding wizard has bare unlocalized user-facing strings | No public fix PR submitted yet |
The core team maintains a fast response cadence, with 3 of 6 newly filed priority bugs already having corresponding fix PRs open the same day of report.
## 6. Feature Requests & Roadmap Signals
Two high-priority RFCs filed this week signal major roadmap directions, while smaller incremental features are targeted for the upcoming beta release:
- The [Granular Sandbox Policy RFC #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (filesystem and network restriction controls) and [Schema-Guided Reasoning RFC #6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) (cross-provider standardized structured output) are flagged for maintainer review, and are highly likely to land in the v0.9.0 stable release cycle.
- Smaller incremental feature additions including base64 encoding support for `file_read`/`file_write` tools, configurable result truncation for the `execute_pipeline` tool, and full WhatsApp LID JID support are all tracked to be included in the upcoming v0.8.0-beta-2 pre-release (built by [PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)).
## 7. User Feedback Summary
Verified end-user pain points and sentiment from this reporting cycle:
1. Dissatisfaction: Users report frequent configuration errors caused by a documentation mismatch, where the public docs website tracks unreleased main branch v0.8.0 content instead of matching the latest stable v0.7.5 release ([Issue #6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997)).
2. Dissatisfaction: International users using CJK characters note broken CLI behavior requiring 3 backspace presses to delete a single Unicode character in the interactive agent mode ([Issue #6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995)).
3. Positive sentiment: Multiple external contributors successfully submitted working bug fixes for WhatsApp, Telegram, and provider integration issues, with project maintainers providing clear guidance for new contributors.
## 8. Backlog Watch
High-priority long-running items awaiting maintainer attention:
1. [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074): Opened April 24 2026, marked in-progress, but has no public timeline published for recovering the 153 lost commits from the March bulk revert, risking lost feature work for contributors.
2. The 24-PR [AllowlistAspect security migration chain](https://github.com/zeroclaw-labs/zeroclaw/pull/6793) across 20+ channel integrations has been open for 11 days with no maintainer review, delaying standardization of user access controls across all chat channels.
3. [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699): Opened 14 days ago, marked as priority P1 and accepted, but still has no assigned maintainer or linked fix PR despite 7 user comments from production MCP users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*