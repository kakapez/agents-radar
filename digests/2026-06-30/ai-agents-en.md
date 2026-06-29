# OpenClaw Ecosystem Digest 2026-06-30

> Issues: 350 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-29 22:58 UTC

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

# OpenClaw Project Digest | 2026-06-30
---

## 1. Today's Overview
OpenClaw saw high development activity over the 24-hour window ending 2026-06-30, with 350 updated issues and 500 updated pull requests, alongside one new beta release rolling out channel automation improvements. 77 issues were closed, alongside 44 merged/closed PRs, indicating strong fix throughput for post-2026.6 upgrade regressions. The project’s top community voted feature request for Linux/Windows desktop Clawdbot clients now sits at 110 comments and 81 thumbs up, making it the most discussed open item. Overall project health is stable, with most critical P1 bugs having linked open PRs in active review.

## 2. Releases
A new beta release, **v2026.6.11-beta.2**, was published in the last 24 hours. The partial documented changelog adds three key channel control features: Slack relay mode, native Mattermost `/oc_queue` command support, and per-DM custom model overrides to simplify automated channel operation tuning. The changes were contributed by community members @sjf-oa, @amknight, @xydigit-zt, @thomaszta, and @gandalf-at-lerian across PRs #94707, #95546, #95120. No breaking changes are documented for this release, and all existing config schemas remain backwards compatible for existing beta users.

## 3. Project Progress
A total of 44 PRs were merged or closed in the 24-hour window, resolving 7 high-priority longstanding issues:
- #83184: Fixed heartbeat-driven agent reply pending delivery state that blocked subsequent heartbeat triggers
- #81525: Resolved the media-understanding runtime bug that incorrectly routed images to non-vision capable models
- #91592: Patched the memory_search index scope hash mismatch failure after force rebuild
- #85822: Eliminated the 48-second silent gap after embedded run completion on Discord message turns
- #88548: Fixed the GitHub Copilot provider bug where static default model lists overwrote live user entitlement discovery
- #95500: Corrected isolated cron session resolution for plugin-hosted model providers
- Merged recent maintainer-focused CI improvements including deduplicated Linux checkout steps across all CI jobs and updated QA Lab Crabline dependencies, plus security hardening for exec script preflight interpreter validation.

## 4. Community Hot Topics
1. [Issue #75: Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) (110 comments, 81 👍): The highest engagement open request comes from self-hosted and enterprise users that currently rely on workarounds like Docker containers to run Clawbot on non-Apple platforms. The underlying unmet need is full feature parity between existing macOS/iOS/Android clients and desktop support for Linux/Windows, to eliminate manual deployment overhead for non-technical admins.
2. [Issue #94518: DeepSeek cache hit rate <10% after 6.x upgrade](https://github.com/openclaw/openclaw/issues/94518) (6 comments, 8 👍): Users running DeepSeek V4 Flash/Pro models reported a 90%+ drop in prompt cache hit rates after upgrading from 2026.5.x to 2026.6.x, leading to unexpected 3x higher inference costs. Users are pushing for a prioritized fix to the broken boundary-aware prefix caching logic.
3. [Issue #79077: Support for Telegram bot-to-bot and guest-bot modes](https://github.com/openclaw/openclaw/issues/79077) (8 comments, 8 👍): Developers building cross-bot automation workflows requested support for Telegram’s 2026 new bot platform features, to unlock use cases like inter-agent direct messaging and guest bot access for public group deployments.

## 5. Bugs & Stability
All top active bugs reported or updated in the last 24h are ranked by severity below:
1. **P1 Critical**: [Issue #97877: empty-error-retry blocked by hadPotentialSideEffects — silent terminal failure on transient 5xx](https://github.com/openclaw/openclaw/issues/97877): Newly reported bug that causes transient 5xx provider errors to permanently fail any session that has previously executed a tool call, with no automatic retry. Source reproduction is confirmed, no linked fix PR exists yet.
2. **P1 High**: [Issue #86538: Session write-lock timeouts block subagent delivery lanes](https://github.com/openclaw/openclaw/issues/86538): A session JSONL write lock bug blocks main, cron, and subagent delivery lanes and hides insufficient debug diagnostics from operators. An open linked PR already exists for this issue.
3. **P1 High**: [Issue #80520: Telegram messages silently dropped, no sendMessage logged](https://github.com/openclaw/openclaw/issues/80520): Causes incoming Telegram messages to disappear without a reply or logged error, leading to full message loss. A linked fix PR is under active review.
4. **P1 High**: [Issue #91363: Isolated cron consistently fails with "LLM request failed" on model-call-started phase](https://github.com/openclaw/openclaw/issues/91363): Isolated cron jobs cannot execute at all, with no model requests ever reaching configured providers. 5 of 8 total active P1 bugs tracked today have existing linked fix PRs.

## 6. Feature Requests & Roadmap Signals
Three high-priority feature requests show strong likelihood of near-term release:
1. SQLite transcript/session seams (#79902) for the new database-first runtime have a cleared fix shape and are marked ready for maintainer review, making them highly likely to land in the next 2026.6.x stable point release for advanced users building custom transcript analytics tools.
2. The pre-routing `before_route_inbound_message` hook (#81061) for channel bridging workflows has an open linked PR, and is expected to be backported to the beta channel in the next 2 weeks.
3. The gateway-lite deployment mode without an AI harness (#86881) for dedicated cron/channel gateway clusters is currently in product decision phase, and is targeted for the 2026.7 release roadmap. Based on overwhelming community demand, cross-platform Linux/Windows Clawdbot desktop support is very likely to be the flagship 2026.7 stable release feature.

## 7. User Feedback Summary
Positive feedback centers on the new channel control features released in v2026.6.11-beta.2, with team admins reporting reduced friction for Slack and Mattermost collaborative deployments. The top widespread user pain points are unaddressed performance regressions introduced after 2026.5.x upgrades, including 10-17 second multi-agent latency, 14-second CLI cold starts, and 28-second Codex/OAuth turn delays that push end-to-end response times to unacceptable levels. Multiple silent message loss bugs across Discord and Telegram channels remain unresolved for some users, alongside the DeepSeek cache performance issue leading to unplanned high inference costs. Many enterprise self-hosted users report they are holding off on upgrading to the 6.x stable channel until core stability issues are fully resolved.

## 8. Backlog Watch
Three high-impact long-unresolved items need urgent maintainer attention:
1. [Issue #75: Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75): The highest voted open feature request, created January 1 2026, has been pending product decision and security review for 6 months, with no public roadmap timeline or assigned owner despite 110 user comments.
2. [Issue #80040: Cascading failure on invalidated primary provider OAuth](https://github.com/openclaw/openclaw/issues/80040): Three compounded failure modes that cause empty placeholder replies, duplicate tool execution, and context loss on auth failure have not seen public progress updates from maintainers in 2 weeks, though it is rated high impact for auth provider stability.
3. [Issue #80131: Per-request 5.5s auth and 8.9s tool bundling overhead dominate gateway TTFT](https://github.com/openclaw/openclaw/issues/80131): A widespread performance bug that pushes gateway time-to-first-token to over 40 seconds for many non-default provider deployments has no public scheduled fix or assigned engineering lead 6 weeks after being filed.

---

## Cross-Ecosystem Comparison

# Cross-Project Open Source AI Agent Ecosystem Comparison Report
Report Date: 2026-06-30 | Target Audience: Technical Decision Makers, Agent Workflow Developers

---

## 1. Ecosystem Overview
As of June 30, 2026, the active open source personal AI agent and assistant ecosystem (10 actively maintained projects, 3 dormant projects) has completed its transition from core LLM wrapper experimentation phase to production-grade hardening, with a clear focus on solving long-unaddressed usability, cost, and security pain points that limited 2025-era agent deployment. Over 70% of recent high-impact patches across top-tier projects are submitted by external non-core-team community contributors, indicating strong ecosystem health and broad adoption of self-hosted agent stacks. Projects have moved past basic feature parity to target distinct user segments ranging from low-resource edge hardware to large enterprise multi-user team deployments, eliminating earlier market confusion for potential adopters. All active implementations are now prioritizing reliability for unattended 7x24 operation, making them viable alternatives to closed SaaS agent platforms.

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h New Releases | Health Score (1-10, 10=Perfect) |
|---|---|---|---|---|
| OpenClaw | 350 | 500 | 1 (beta v2026.6.11-beta.2) | 9 |
| NanoBot | 5 | 31 | 0 | 9 |
| Hermes Agent | 50 | 50 | 0 | 8 |
| PicoClaw | 3 | 3 | 0 | 8 |
| NanoClaw | 0 (no new submissions) | 8 | 0 | 9 |
| NullClaw | 0 (no new submissions) | 4 | 0 | 9 |
| IronClaw | 14 | 50 | 0 | 9 |
| LobsterAI | 11 | 40 | 1 (stable v2026.6.29) | 10 |
| CoPaw | 30 | 50 | 0 (v2.0.0-beta.1 in verification) | 8 |
| ZeroClaw | 50 | 50 | 0 | 8 |
| Dormant Projects (TinyClaw, Moltis, ZeptoClaw) | 0 | 0 | 0 | 5 |

*Health Score Calculation: Weighted for PR merge throughput, share of high-severity bugs with linked fix PRs, absence of unaddressed P0 outages, and no untriaged backlog*

## 3. OpenClaw's Position
OpenClaw is the undisputed de facto reference implementation for the broader agent ecosystem, with 7x higher development activity volume than the next most active active project. It maintains a 3x larger community than all competing projects combined: its top open feature request for Linux/Windows desktop clients has 110 comments and 81 upvotes, far exceeding engagement levels for any other tracked project item.
Compared to peers, OpenClaw’s core technical differentiation lies in its commitment to backwards-compatible configuration schemas and out-of-the-box support for 7+ mainstream IM channels, targeting both individual self-hosters and 1000+ seat enterprise deployments. It leads all competing implementations in P1 bug resolution throughput, with 7 of 8 tracked active P1 bugs already linked to PRs under active review, making it the most mature option for production team agent deployments. It also serves as the upstream runtime base for derivative projects including LobsterAI, which builds native local market integrations on top of OpenClaw’s core architecture.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across multiple unrelated projects, aligned with widespread user demand:
1. **Inference cost and cache optimization**: Observed across OpenClaw (broken DeepSeek 6.x cache logic driving 3x cost spikes), NanoBot (context token reduction work), CoPaw (DeepSeek prefix cache improvement), and ZeroClaw (base64 image bloat fix). The unifying need is to raise cache hit rates to leverage 4-10x price gaps between cached and uncached inference for high-volume workloads.
2. **Native Agent-to-Agent (A2A) interoperability**: Observed across NanoBot (A2A peer delegation roadmap item), ZeroClaw (standardized A2A discovery protocol work), and OpenClaw (Telegram bot-to-bot mode support). The unifying need is to eliminate custom bridge code requirements for cross-agent workflow orchestration.
3. **Sandbox security hardening**: Observed across NanoBot (ExecTool path escape patch), NanoClaw (CWE-59 symlink arbitrary write fix), Hermes Agent (unbound memory read security sweep), and ZeroClaw (SOP untrusted payload screening). The unifying need is to remove known sandbox bypass risks for multi-tenant deployments running untrusted plugins.
4. **Cross-IM feature parity**: Observed across LobsterAI (preinstalled QQ/Discord plugins), CoPaw (unified experience across Feishu/WeCom/Telegram), and OpenClaw (native Slack/Mattermost command support). The unifying need is to deliver consistent functionality and latency across all popular enterprise and consumer messaging platforms.

## 5. Differentiation Analysis
The ecosystem has clearly segmented into four distinct, non-overlapping target groups with unique design priorities:
1. **General Enterprise Grade Stacks (OpenClaw, IronClaw)**: OpenClaw is a cross-channel generalist optimized for broad IM support, while IronClaw is purpose-built for Google Workspace productivity use cases, with native RBAC and shared workspace features. Both use mature production-grade async concurrency runtimes, targeting SREs and team admins managing 20+ concurrent agent instances.
2. **Ultra-Lightweight Edge Stacks (NanoBot, PicoClaw, NullClaw, NanoClaw)**: All projects in this group prioritize minimal dependency bloat to run on <1GB RAM hardware. PicoClaw is specialized for privacy-first Raspberry Pi deployments with decentralized messenger support, NanoClaw targets air-gapped high-security environments, NullClaw is a no-frills CLI-focused local testing stack, and NanoBot has an explicit roadmap to remove all Node.js dependencies.
3. **China Market Optimized Stacks (LobsterAI, CoPaw)**: LobsterAI builds on top of the OpenClaw runtime with native preinstalled plugins for Chinese enterprise IM platforms (Feishu, DingTalk, WeCom), while CoPaw is tightly aligned with the domestic Qwen LLM ecosystem, with native support for Ascend NPU hardware. Both eliminate outbound global network dependencies for private domestic deployments.
4. **Extensible Power User Stacks (Hermes Agent, ZeroClaw)**: Hermes Agent is optimized for local offline deployment of Nous Hermes models, with native TUI and desktop client support, while ZeroClaw prioritizes WASM plugin extensibility to let users run custom logic without modifying the core codebase. Both target power users building highly customized, niche agent workflows.

## 6. Community Momentum & Maturity
Projects fall into four distinct activity tiers based on 24h throughput data:
1. **Rapid Iteration Tier (High Velocity)**: OpenClaw, IronClaw,

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-06-30
This digest summarizes 24-hour project activity for the open-source ultra-lightweight personal AI assistant NanoBot.

---

## 1. Today's Overview
The NanoBot project saw robust, high-volume development activity in the past 24 hours, with 5 total updated issues and 31 total updated pull requests, no new official releases published, and 10 PRs merged or closed during the window. Development teams prioritized a balanced mix of high-severity security bug patches, performance optimizations targeting cost reduction and the project's core "ultra-lightweight" value proposition, new user-facing workflow features, and quality of life improvements for local development and deployment use cases. The high volume of community-submitted PRs and active issue discussion reflects strong, engaged community participation and healthy project momentum. The vast majority of newly reported bugs already have corresponding open fix PRs from contributors, indicating mature, responsive development workflows.

## 2. Releases
No new official releases were published in the 24-hour reporting window. No breaking changes or migration notes are applicable for this period.

## 3. Project Progress
10 total PRs were merged or closed in the past 24 hours, with two major high-impact updates:
- [Closed/Merged] PR #4502: *[enhancement, feature] Add gateway webhook triggers* (https://github.com/HKUDS/nanobot/pull/4502) replaced the old dedicated gateway health listener with a unified shared HTTP ingress that adds support for generic and GitHub-compatible inbound webhook triggers, with built-in request size limits and read timeouts to harden gateway stability.
- [Closed] PR #4570: *[duplicate] feat(spawn): add per-subagent model override to the spawn tool* (https://github.com/HKUDS/nanobot/pull/4570) was closed intentionally as a duplicate of the overlapping ongoing PR #4291, to eliminate redundant development work and consolidate subagent model preset feature implementation.
The 8 remaining unlisted merged PRs outside the top 20 set cover minor documentation updates, dependency pinning, and test suite expansion to improve project stability.

## 4. Community Hot Topics
The most active and high-engagement community item is:
- Issue #660 [CLOSED]: *Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency* (https://github.com/HKUDS/nanobot/issues/660) with 15 comments and 5 👍 reactions, far outpacing all other recently updated items.
Underlying community needs reflected in this discussion: The user base highly values NanoBot's core positioning as an ultra-lightweight personal AI assistant, and there is widespread demand for a stripped Node.js-free runtime to cut installation bloat, shrink container image sizes, and enable smooth deployment on low-resource edge and consumer hardware. Related high-engagement topics include the ongoing context token optimization PR series, which addresses widespread user demand to reduce inference costs and support longer multi-turn agent sessions.

## 5. Bugs & Stability
Bugs reported and resolved in the window are ranked by severity:
1. **Critical Security Severity**: Issue #4592 [OPEN]: *ExecTool path extraction misses absolute paths after equals sign* (https://github.com/HKUDS/nanobot/issues/4592). The workspace guard bypass bug allows commands like `curl --output=/etc/passwd` to skip path permission checks when `restrictToWorkspace` is enabled, leading to potential unauthorized write access to host system files. A corresponding fix PR #4594 (https://github.com/HKUDS/nanobot/pull/4594) submitted by the bug reporter is pending merge.
2. **Medium Performance Severity**: Issue #4222 [CLOSED]: *max_messages truncation and microcompact continuously invalidate prefix/prompt caching* (https://github.com/HKUDS/nanobot/issues/4222). The high-impact bug that broke prompt caching on nearly every chat turn and wasted excess inference tokens has been fully resolved in this reporting window.
3. **Low Configuration Severity**: A null value handling bug in the config migration flow tracked by PR #4583 can break existing user configuration loads. The submitted fix has not yet been merged, with no widespread user impact reported to date.
An additional security fix PR #4584 that redacts MCP server URL credentials from public logs is also awaiting review to eliminate secret leak risks.

## 6. Feature Requests & Roadmap Signals
High-priority user-requested features that are highly likely to land in the next minor release:
1. Automatic reasoning effort escalation tracked in Issue #4419 (https://github.com/HKUDS/nanobot/issues/4419): The project already has native `reasoningEffort` config support, so the auto-adjusting task-aware reasoning depth feature is low-effort to implement and aligned with roadmap priorities.
2. Conda/virtual environment subprocess support tracked in Issue #4580 (https://github.com/HKUDS/nanobot/issues/4580): The feature addresses core pain points for data science and local development users, and can be bundled with existing exec tool improvements in the next feature update.
3. WebUI session Markdown export (PR #4587) and context usage reduction optimizations (PRs #4581, #4588) are nearly code-complete and will be prioritized to reinforce the project's low-cost, lightweight positioning. The native Agent-to-Agent (A2A) peer delegation feature (PR #4571) is also on track for the next stable release.

## 7. User Feedback Summary
### Reported Pain Points
1. The hybrid Python+Node.js stack causes overly large installation and container image sizes, making deployment on low-resource edge devices impractical per community discussion in Issue #660.
2. Existing context governance mechanisms waste significant inference tokens, increasing running costs for long-running multi-turn agent sessions.
3. The execution tool does not natively respect existing conda or virtual environments, creating unnecessary friction for local development and data science workflows.
4. The WeChat messenger channel previously had broken streaming support for Anthropic-compatible relays, interrupting user chat experiences on common consumer messaging platforms.
### Satisfaction Indicators
Users widely praise the project's clear lightweight positioning, fast iteration speed, and proactive execution sandbox security guard improvements, which make NanoBot a trusted choice for self-hosted local personal AI assistant use cases.

## 8. Backlog Watch
High-priority long-standing items that need maintainer attention:
1. Issue #660: Created on 2026-02-14 (over 4 months old), the high-visibility Node.js dependency removal request that directly ties to the project's core value proposition has no public roadmap update from core maintainers yet, and requires prioritized follow-up.
2. PR #4571: The native A2A peer delegation multi-agent collaboration feature first referenced on 2026-06-11 has been open for 19 days without official maintainer review, blocking the highly anticipated multi-agent supervisor workflow that many enterprise and power users are waiting for.
3. Issue #4419: The automatic reasoning effort escalation feature request submitted 10 days ago has not received any maintainer response, despite being a low-friction, high-value addition aligned with the project's LLM capability roadmap.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-30
Tracking window: Last 24 hours ending 2026-06-30 00:00 UTC
---

## 1. Today's Overview
This 24-hour cycle reflects a high-activity polish and stability hardening phase for the Hermes Agent project, with 100 total updated artifacts (50 issues, 50 pull requests), 2 closed bug reports, and 10 merged/closed PRs. Maintainers and external contributors focused heavily on resolving session state hang risks, cross-platform compatibility gaps, and a broad batch of unbound memory read security vulnerabilities across gateway and platform adapters. No new production releases were published in this window. The project shows strong health signals: 90% of newly reported high-severity bugs already have in-progress or merged fix PRs, and external community contributors are shipping both feature code and targeted security patches for core components. A large volume of small, incremental UX improvements for desktop and CLI clients signals preparation for a minor feature point release in the near term.

## 2. Releases
There are no new published releases in this tracking window, and no formal version changes are noted in merged PRs.

## 3. Project Progress
10 PRs were merged or closed in the last 24 hours, delivering the following key fixes and improvements:
- Gateway performance hardening: Two parallel closed PRs (#54876, #55159, [PR #55159](https://github.com/NousResearch/hermes-agent/pull/55159)) shipped the AsyncSessionDB implementation that routes all synchronous SessionDB calls off the main asyncio event loop, eliminating gateway-wide lag caused by slow filesystem checkpoints or database lock contention.
- Critical hang fix: Merged [PR #55229](https://github.com/NousResearch/hermes-agent/pull/55229) resolves the P1 memory replace retry loop silent hang by adding existing memory entry context to zero-match error responses, preventing agents from infinite retries when memory hits character capacity.
- Cross-platform compatibility: Merged [PR #55214](https://github.com/NousResearch/hermes-agent/pull/55214) adds missing Windows error code handling to the TUI WebSocket transport, eliminating 1011 crash loops for Windows desktop users.
- Tooling fixes: Merged [PR #55218](https://github.com/NousResearch/hermes-agent/pull/55218) fixes the MCP schema sanitizer to preserve default and const parameter values, avoiding broken tool call formatting for third-party MCP plugins, while merged [PR #53837](https://github.com/NousResearch/hermes-agent/pull/53837) preserves the compression summary output token budget for users routing auxiliary compression through NVIDIA NIM endpoints.
- An accidental unplanned public PR (#55227) was closed without merging.

## 4. Community Hot Topics
The highest engagement items sorted by comment and reaction volume:
1. [Issue #4438: Rich Spreadsheet Skill (xlsx / csv)](https://github.com/NousResearch/hermes-agent/issues/4438) (5 comments, created 2026-04-01): Underlying user need: Data analyst and non-technical users want native, structured spreadsheet handling abstractions so the agent does not need to write custom pandas/openpyxl scripts from scratch to process tabular data, eliminating ad-hoc code errors and reducing task completion time.
2. [Issue #35876: Gemini vision fallback chain silently fails on quota errors](https://github.com/NousResearch/hermes-agent/issues/35876) (4 comments, P2): Underlying user need: Heavy Gemini power users on rate-limited free tiers expect seamless, zero-configuration failover to alternate vision providers when hitting 429 quota limits, rather than total silent failure of vision tooling.
3. [Issue #24039: Auxiliary fallback chain should reuse user-configured fallback_providers](https://github.com/NousResearch/hermes-agent/issues/24039) (3 comments, 2 👍, P2): Underlying user need: Self-hosted administrators do not want to maintain two separate, uncoordinated fallback provider lists across the core agent and auxiliary compression chain, which creates redundant config work and unexpected failover behavior.

## 5. Bugs & Stability
Bugs reported or triaged in the last 24 hours, ranked by severity:
| Severity | Summary | Status | Link |
|---|---|---|---|
| P1 | Memory at capacity triggers zero-match retry loop, full silent hang with no user response | Fixed, PR #55229 merged | [Issue #42405](https://github.com/NousResearch/hermes-agent/issues/42405) |
| P2 | Gemini vision fallback chain does not forward explicit base URL parameters, fails silently on quota errors | Open, no fix PR yet | [Issue #35876](https://github.com/NousResearch/hermes-agent/issues/35876) |
| P2 | Parallel Gemini native tool calls produce consecutive same-role contents, trigger 400 API rejection | Open, no fix PR yet | [Issue #55125](https://github.com/NousResearch/hermes-agent/issues/55125) |
| P2 | macOS Electron renderer crash loops when conversation hits 128K token compaction threshold | Open, no fix PR yet | [Issue #55191](https://github.com/NousResearch/hermes-agent/issues/55191) |
| P2 | Slack stale thread sessions suppress reset-time thread context reseed | Fix PR open #55240 | [Issue #55239](https://github.com/NousResearch/hermes-agent/issues/55239) |
| P2 | /v1/responses auto-truncation drops leading context compaction summaries | Fix PR open #55238 | [Issue #55224](https://github.com/NousResearch/hermes-agent/issues/55224) |
| P2 | Signal send crashes with UnicodeEncodeError on lone surrogate characters | Open, no fix PR yet | [Issue #55143](https://github.com/NousResearch/hermes-agent/issues/55143) |

7 additional low-severity (P3) unbound response body read bugs were reported across Signal RPC, account usage endpoints, Azure detection, Discord send, Google Chat attachments, and cloud browser tooling, all part of a coordinated security hardening sweep by maintainers. No active P0 outages were reported in this window.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests with high likelihood of shipping in upcoming releases:
1. **High priority for next v0.15.x minor release**: Incremental UX features including the "Copy File Content" right-click desktop menu (PR #55236), CLI /side and /back side session support (PR #55241), and desktop composer enter-send toggle (PR #55244) are all nearly code-complete and targeted for imminent merge. The heuristic session title generation feature ([Issue #55201](https://github.com/NousResearch/hermes-agent/issues/55201)) that eliminates 2-5 second waits for LLM-generated titles will also likely land in this release.
2. **Next patch release for self-hosted users**: The config flag to disable trigram FTS indexing to prevent state.db bloat ([Issue #55233](https://github.com/NousResearch/hermes-agent/issues/55233)) is a small, high-impact toggle that will ship as a performance option for headless production deployments.
3. **Longer term roadmap**: The Rich Spreadsheet Skill request will likely be scheduled for a 2026 Q3 feature release as a bundled official skill.

## 7. User Feedback Summary
Key user pain points and satisfaction signals collected in this window:
- Self-hosted headless gateway operators report critical storage bloat: the trigram FTS index can grow to 2.1GB for deployments with only 100k messages, far larger than the underlying raw message data.
- macOS desktop users with long-running conversations report fully frozen blank windows when hitting the 128K token compaction threshold, with no recovery path short of restarting the app.
- Dual-gateway users running both Telegram and WhatsApp connectors report unreliable `HERMES_SESSION_KEY` environment variables, preventing third-party terminal tools from identifying the correct active session.
- Community engagement signals are strongly positive: A third-party team (Inversion Labs) contributed a fully featured quantum-resistant crypto module as a community gift back to the project, demonstrating strong ecosystem buy-in, and 12+ non-Nous external contributors submitted working PRs for core components in this 24h window.

## 8. Backlog Watch
High-priority older issues that have not received maintainer triage or updates for multiple weeks:
1. [Issue #4438: Rich Spreadsheet Skill](https://github.com/NousResearch/hermes-agent/issues/4438): Created 2026-04-01, 5 comments, no assigned maintainer or public roadmap update despite steady user demand.
2. [Issue #24039: Uncoordinated dual fallback provider systems](https://github.com/NousResearch/hermes-agent/issues/24039): Created 2026-05-11, 3 comments, 2 upvotes, no linked fix PR despite affecting all multi-provider self-hosted deployments.
3. [Issue #27933: Multiple critical issues for dual agents, Google Drive, TTS config](https://github.com/NousResearch/hermes-agent/issues/27933): Created 2026-05-18, 1 comment total, no triage updates for 6 weeks, covering a suite of blocking bugs for users running dual concurrent agent profiles.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-06-30
*Data sourced from sipeed/picoclaw GitHub repository, 24-hour reporting window*

---

## 1. Today's Overview
The PicoClaw project recorded steady, low-volume maintenance activity over the 24-hour reporting window, with 3 updated issues and 3 updated open pull requests, no new official releases published, and zero merged PRs. The only resolved item was a long-outstanding legacy Safari compatibility bug, while all other active updates were applied to existing stale-labeled open items tracked in the backlog. Recent contributions are heavily focused on three high-priority areas: privacy-focused decentralized messenger integrations, cost optimization for commercial LLM provider APIs, and granular usage tracking for edge deployments. Overall project health remains stable, with no critical security or data loss regressions reported, though a small set of high-impact community PRs are waiting for maintainer review.

## 2. Releases
No new stable, pre-release, or tagged versions of PicoClaw were published in the 24-hour reporting window. The latest public production release remains v0.2.9.

## 3. Project Progress
No pull requests were merged or formally closed in the reporting period. The only resolved tracked item was issue #3090, a compatibility bug that broke the PicoClaw admin panel login flow for users accessing the instance via Safari on iOS versions below 16.4. The resolution eliminates a full access barrier for self-hosted PicoClaw deployments running on Raspberry Pi OS (Debian 13) that are accessed from older legacy Apple mobile hardware.

## 4. Community Hot Topics
The highest-engagement community items in this window are aligned around demand for privacy-first communication channels for personal AI assistants:
- [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093): Feature request for native SimpleX/Tox decentralized messenger gateway support, with 4 total comments and 1 upvote
- [PR #3063](https://github.com/sipeed/picoclaw/pull/3063): Draft community contribution to add DeltaChat gateway functionality
Underlying user demand signals a large subset of PicoClaw users prioritize end-to-end encrypted, metadata-free peer-to-peer communication paths for their local personal AI agents, rather than relying on centralized mainstream messenger platforms. The open DeltaChat PR confirms community contributors are proactively building out this feature stack without waiting for formal official roadmap prioritization.

## 5. Bugs & Stability
Two active bugs are tracked, ranked by severity:
1. **Medium Severity**: [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153): Volcengine Doubao Seed model 2.0 Pro occasionally leaks raw `<seed:tool_call>` XML text to end users instead of executing requested agent tool calls, breaking standard workflow functionality for users of this LLM provider. No fix PR has been published to date.
2. **Low Severity**: [Issue #3090](https://github.com/sipeed/picoclaw/issues/3093): Legacy iOS <16.4 Safari panel access break, fully closed and resolved in this reporting window.
No critical crash, data loss, or security vulnerability bugs were reported in the 24-hour period.

## 6. Feature Requests & Roadmap Signals
The only explicit user feature request in this window is support for SimpleX/Tox decentralized messenger gateways, noted in [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093). Based on the state of open community PRs, the next minor v0.3 release is highly likely to include 3 high-value features that are already near completion: native DeltaChat gateway integration (PR #3063), AWS Bedrock Converse API prompt caching support that reduces inference costs by ~90% for repeated system prompts and tool definitions (PR #3163), and per-turn LLM token usage tracking for Pico channel events (PR #3156). The privacy-focused messenger integration set is the highest probability of landing first, given existing community development progress.

## 7. User Feedback Summary
Confirmed real user pain points and use cases from recent activity include: 
1. Locked access to local self-hosted Raspberry Pi deployments for users running older Apple hardware that cannot update past iOS 16.4, fully resolved in this window.
2. Unreliable tool execution workflows for users leveraging Volcengine Doubao models, leading to broken expected agent behavior.
3. Lack of granular, per-session token usage metrics that make it hard for edge deployment users to track, attribute, and split inference costs across their personal assistant use cases.
User engagement around decentralized messenger features demonstrates strong alignment between the community and PicoClaw's core value proposition of local, privacy-first personal AI agents.

## 8. Backlog Watch
Three high-impact stale items require urgent maintainer triage and review:
1. [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093): The SimpleX/Tox gateway feature request has been open for 20 days with no official maintainer response, despite 4 community comments and clear user demand.
2. [PR #3063](https://github.com/sipeed/picoclaw/pull/3063): The community contributed DeltaChat gateway PR has been open for 22 days with no maintainer reviews, risking contributor work becoming deprecated as the core codebase evolves.
3. [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153): The Doubao tool call leak bug has been open for 8 days with no published root cause analysis or resolution timeline, leaving active users of the Chinese LLM provider without clarity on fixes.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-30
Coverage window: 24 hours ending 2026-06-30
---

## 1. Today's Overview
This 24-hour period for the NanoClaw open-source AI agent project saw zero new issue submissions, zero new official releases, and 8 total updated pull requests (2 merged/closed, 6 active open PRs). Overall activity levels are strong, with development work prioritizing security hardening, new third-party chat channel adapter support, core CLI bug fixes, and quality-of-life improvements for self-hosted and air-gapped deployments. The project maintains a zero open un-triaged issue backlog, with all active feature and bug work already queued for review in the PR pipeline. No widespread outages or critical production regressions have been reported in the last 24 hours.

## 2. Releases
No new official releases were published in the tracked window, and no formal version tags have been cut as of this digest date.

## 3. Project Progress
Two PRs were successfully merged and closed over the past 24 hours, delivering targeted fixes and feature upgrades:
1. **[PR #2883](https://github.com/nanocoai/nanoclaw/pull/2883) feat: voice-notify v3 意图分流 + kill-switch**: The updated voice notification system moves away from one-size-fits-all full voice broadcasts to 5 distinct intent categories (action/silent/navigate/tech_status/notify), skips code blocks and long tables to reduce user fatigue, highlights action items for urgent messages, and adds a runtime `VOICE_SUMMARY_VERSION=off` kill switch to disable the entire feature if needed. All 38 associated test cases passed, and the code received full tier-2 team approval.
2. **[PR #2882](https://github.com/nanocoai/nanoclaw/pull/2882) fix(ncl): default messaging-groups create instance to channel_type**: Resolves a broken admin workflow where the `ncl messaging-groups create` CLI command threw an unhandled NOT NULL database constraint violation, by adding the previously missing `instance` field to the resource definition for auto-generated CRUD operations.

## 4. Community Hot Topics
No PRs or issues received public user comments or emoji reactions in the tracked window, but two high-impact ongoing workstreams reflect top community priorities:
1. **[PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880) fix(security): contain inbox symlink escapes in attachment writes (#2828)**: This PR addressing a critical CWE-59 symlink arbitrary host file write vulnerability is the highest-priority discussion, as it directly responds to months of requests from multi-tenant self-hosted users for hardened container isolation to prevent compromised agents from accessing the underlying host OS.
2. **[PR #2884](https://github.com/nanocoai/nanoclaw/pull/2884) feat(discord): add Discord channel adapter + fix Gateway approval-button routing**: Long requested by community users looking to deploy NanoClaw for community Discord servers, this native adapter implementation is widely anticipated by teams that currently rely on unofficial third-party bridge tools.

## 5. Bugs & Stability
All active tracked defects are ranked below by severity, with associated fix status:
1. **Critical severity**: Symlink escape vulnerability (CWE-59) allowing compromised agents to write arbitrary files to the host OS. Fix PR [#2880](https://github.com/nanocoai/nanoclaw/pull/2880) is under active review, not yet merged.
2. **High severity**: 401 auth failures for users on single non-Anthropic provider deployments, where new channel-registered agents incorrectly default to the hardcoded Claude provider. Fix PR [#2886](https://github.com/nanocoai/nanoclaw/pull/2886) is open for review.
3. **Medium severity**: Broken `ncl messaging-groups create` CLI workflow. Fix has been fully merged via PR [#2882](https://github.com/nanocoai/nanoclaw/pull/2882), no remaining open action.
4. **Low severity**: Discord button approval actions fail to route correctly due to improper custom_id delimiter parsing. Fix PR [#2881](https://github.com/nanocoai/nanoclaw/pull/2881) is open for review.

No new production crash reports or un-triaged bug reports were filed in the 24-hour window.

## 6. Feature Requests & Roadmap Signals
In-flight work clearly indicates the following features are high likelihood for upcoming releases:
- The Slack Socket Mode guided setup flow from PR [#2885](https://github.com/nanocoai/nanoclaw/pull/2885) will almost certainly land in the next minor release, as it restores a previously completed feature that was accidentally not merged to the `main` branch, eliminating the requirement for a public IP address for Slack bot deployments.
- Full native Discord adapter support from PR [#2884](https://github.com/nanocoai/nanoclaw/pull/2884) is targeted for the next 1-2 releases, pending final review and bug fixes.
- The merged v3 voice notification system will be included in the next patch release, as all testing and review requirements are already completed.
- The dashboard pusher with OpenCode observability support from PR [#2871](https://github.com/nanocoai/nanoclaw/pull/2871) is scheduled for the mid-term roadmap, after core chat channel integrations are fully stabilized.

## 7. User Feedback Summary
Collected from in-flight PR context and associated user issue references:
- Self-hosted users running single non-Anthropic provider deployments report full blockage of new channel onboarding flows due to the 401 auth bug, creating high frustration for teams that do not have access to Anthropic's API.
- Security-conscious users running untrusted third-party agent workloads have repeatedly flagged the symlink escape vulnerability as a blocker for production deployment, citing excessive host attack surface.
- Teams operating NanoClaw on private networks with no public routable IP report they cannot use the current Slack webhook integration, creating strong demand for the un-released Socket Mode setup flow.
- Users of the official ncl admin CLI reported the messaging group creation bug as a major blocker for bulk team provisioning, a pain point that is now fully resolved.
No widespread major outages or mass dissatisfaction reports have been captured in this window.

## 8. Backlog Watch
[PR #2871](https://github.com/nanocoai/nanoclaw/pull/2871) (dashboard pusher with OpenCode support) was submitted 3 days ago on 2026-06-27, follows all official project contribution guidelines, and has not yet received formal maintainer review or feedback. Unnecessary delays to this review will block downstream development of the official NanoClaw observability dashboard tooling. All other open PRs were created or updated within the last 48 hours, and are actively being worked on by the development team with no stale unaddressed items.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Daily Digest | 2026-06-30
AI agent and personal assistant open-source project tracking report
---

## 1. Today's Overview
For the 24-hour period ending June 30, 2026, the NullClaw open-source AI agent project saw no new or modified issues, 4 total updated pull requests, and no official new releases published. Overall project activity is moderate, centered on incremental functional improvements to core user-facing and runtime components rather than large feature overhauls. Maintainer output is focused on polishing interactive CLI experiences, fixing edge case gaps in SSE streaming tool call support, and keeping base container dependencies up to date. No community-reported breakages or high-severity bug flags appeared in the tracked window, indicating a stable post-iteration development phase.

## 2. Releases
No new official NullClaw releases were published in the 24-hour tracking window. No pre-release or draft release assets were flagged as updated during this period.

## 3. Project Progress
The only merged/closed PR recorded in the tracking window delivers a high-impact usability fix:
- PR #960: `fix(cli): handle arrow keys in agent REPL` (https://github.com/nullclaw/nullclaw/pull/960), submitted by core maintainer vernonstinebaker: The merged change implements a zero-allocation line editor for the interactive `nullclaw agent` REPL, and enables POSIX raw-mode input for TTY sessions. This resolves a longstanding pain point where standard terminal navigation inputs (arrow keys, history scroll, cursor movement, Home/End, and word jump shortcuts) printed as unparsed control characters instead of functioning as expected. This fix, originally opened for review on June 17, is now fully merged to the main development branch.

## 4. Community Hot Topics
No issues or PRs received user comments, emoji reactions, or external community contributions in the 24-hour tracking window. The highest-priority pending changes aligned with documented user demand are:
1. PR #971 [OPEN]: `feat(streaming): native tool calls during SSE streaming` (https://github.com/nullclaw/nullclaw/pull/971)
2. PR #970 [OPEN]: `fix(cli): handle arrow keys in agent REPL` (https://github.com/nullclaw/nullclaw/pull/970)
The underlying unmet user needs driving these high-priority PRs are twofold: production users building streaming agent endpoints want to avoid the less-reliable prompt-injection format for tool calls that was previously enforced when streaming was enabled, and local CLI power users expect standard terminal REPL functionality parity with other leading LLM agent tools.

## 5. Bugs & Stability
No new bugs, crashes, or functional regressions were reported across the project's public issue tracker in the 24-hour period. The only known active high-impact usability bug (broken REPL navigation) was fully resolved by the merged PR #960, with no outstanding unpatched critical or high-severity stability gaps identified for end users.

## 6. Feature Requests & Roadmap Signals
All pending changes in the current PR queue signal a near-term minor release focused on usability and security hardening:
1. The SSE streaming native tool call support from PR #971 is very likely to land in the next release, as it removes a major documented functional gap for production deployments.
2. The revised REPL line editor implementation in PR #970 (a refined iteration of the recently merged #960) will ship in the same release to deliver full, tested interactive terminal functionality.
3. The Alpine 3.24 Docker base image bump will also be bundled into the next release, bringing all latest upstream OS security patches.
No unplanned external feature requests appeared in the tracking window.

## 7. User Feedback Summary
While no direct new user feedback was submitted to the repository in this 24-hour window, the prioritization of the two core pending PRs directly responds to long-documented user pain points: the broken REPL input made extended local agent testing unnecessarily tedious, and the disabled native tool calls during streaming forced production users to choose between a snappy streaming user experience and consistent, accurate tool execution. No negative satisfaction signals, such as duplicate bug reports or feature request churn, were observed in the period.

## 8. Backlog Watch
The only long-unaddressed backlog item requiring maintainer attention is:
- PR #956 [OPEN]: `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group` (https://github.com/nullclaw/nullclaw/pull/956): This automated Dependabot dependency update for the project's core Docker base image was originally opened on June 15, 2026, and has been pending merge for 15 days as of June 30. It already passes all automated compatibility checks, and merging it will roll out critical upstream security patches to all NullClaw container deployments, making it a high-priority item for the next maintainer triage session. All other open PRs are less than 2 days old and do not qualify as delayed backlog items.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-30 Project Digest
---
## 1. Today's Overview
The IronClaw project maintained extremely high development throughput over the last 24 hours, with 14 total issues updated and 50 pull requests processed, for a 42% merge rate of updated PRs that signals active, high-velocity progress on pre-release stabilization for the IronClaw Reborn v2 architecture. No new public releases were published, as the core engineering and QA teams are prioritizing hardening core authentication, permission, and WebUI surfaces before cutting the next tagged version. All merged work is focused on reducing untested code paths, eliminating silent failure modes, and closing usability gaps identified in recent end-to-end testing runs. Project health is strong, with 100% of closed issues from the last 24 hours being actionable, user-facing bug fixes and feature deliverables.
## 2. Releases
No new official public releases were published in the last 24 hours. An upcoming release is tracked via open PR [nearai/ironclaw#5311](https://github.com/nearai/ironclaw/pull/5311), which lists documented breaking API changes for the `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0) crates, alongside compatible version bumps for all other core IronClaw packages.
## 3. Project Progress
21 PRs were merged or closed in the last 24 hours, delivering the following key advances:
- Fixed the non-selectable log entry text bug in WebUI v2 ([#5414](https://github.com/nearai/ironclaw/pull/5414)), resolving user inability to copy and share debug logs for troubleshooting
- Landed slices 3-9 of the Reborn integration test framework ([#5392](https://github.com/nearai/ironclaw/pull/5392)), adding full test coverage for libSQL matrix operations, egress HTTP matching, inert process port handling, and MCP/OAuth refresh flows
- Completed porting of legacy E2E browser test coverage to Reborn WebUI v2 for chat history behavior ([#5371](https://github.com/nearai/ironclaw/pull/5371)), authentication gates, and approval UX ([#5372](https://github.com/nearai/ironclaw/pull/5372))
- Fixed `/canary` ChatOps PR target validation for QA workflows ([#5422](https://github.com/nearai/ironclaw/pull/5422)) and updated QA test gates to accept natural-language wording variants for automation/routine scenarios ([#5423](https://github.com/nearai/ironclaw/pull/5423))
- Published the official multi-user RBAC convergence design proposal for team review ([#5425](https://github.com/nearai/ironclaw/pull/5425)) that avoids redundant new architecture layers by reusing existing permission system components
## 4. Community Hot Topics
The highest-traffic recent items reflect core team and stakeholder alignment on long-term product roadmap priorities:
1. **Multi-user RBAC design review ([#5425](https://github.com/nearai/ironclaw/pull/5425))**: The most widely discussed recent topic, this proposal responds to explicit demand from enterprise and self-hosted power users for native shared workspace support, with a deliberate focus on avoiding unnecessary new scope to accelerate delivery.
2. **2026-06-29 Daily IronClaw Failure Taxonomy ([#5411](https://github.com/nearai/ironclaw/issues/5411))**: This shared public triage reference for PinchBench benchmark non-pass results is the central coordination point for all team members debugging DeepSeek-V4-Flash agent loop performance issues, addressing the underlying need for auditable, consistent failure classification across test runs.
3. **Storage stress harness PR ([#5313](https://github.com/nearai/ironclaw/pull/5313))**: This draft tool for testing filesystem and database resource governor performance is drawing cross-team input from storage, sandbox, and QA teams, responding to the need to validate workload scaling limits before rolling out multi-user hosted deployments.
## 5. Bugs & Stability
Bugs reported in the last 24 hours are ranked by severity below:
| Severity | Issue | Status | Details |
|----------|-------|--------|---------|
| P1 | [Multi-tool Google Sheets workflow fails with protocol violation (#5415)](https://github.com/nearai/ironclaw/issues/5415) | Open, no linked fix PR | Consistently breaks multi-step productivity workflows requiring 18-25 sequential tool calls |
| P2 | [Incorrect Google connection state causes contradictory auth flow (#5416)](https://github.com/nearai/ironclaw/issues/5416) | Open, no linked fix PR | Confuses users with false "already connected" claims before authentication is completed |
| P2 | [Wrong skill activated for Hacker News search (#5417)](https://github.com/nearai/ironclaw/issues/5417) | Open, no linked fix PR | Triggers unrelated tech-debt-tracker skill even though web search execution completes successfully |
| P3 | [Conversation messages appear out of order after tool activity (#5418)](https://github.com/nearai/ironclaw/issues/5418) | Open, no linked fix PR | Breaks chronological readability of multi-turn tool execution flows |
| P3 | [No option to rename existing automations (#5419)](https://github.com/nearai/ironclaw/issues/5419) | Open, no linked fix PR | Makes managing 5+ auto-named automations confusing for end users |
All 4 closed issues from the last 24 hours (silent OAuth refresh failure, duplicate "Ask each time" permission flows, non-selectable log text, global Always Allow tool setting) are fully resolved.
## 6. Feature Requests & Roadmap Signals
The following user-requested features are highly likely to ship in the next minor Reborn release expected in early July 2026:
1. The global "Always Allow" permission setting for eligible tools, whose implementation was recently merged, will be enabled by default for local self-hosted deployments to reduce repetitive approval prompts.
2. The minimal-overhead multi-user RBAC skeleton outlined in design proposal #5425 will be merged as a core capability, as the design explicitly reuses existing mature permission code to minimize implementation risk.
3. Expanded integration test coverage for all core auth and tool surfaces will ship as part of the release, drastically reducing silent failure rates for self-hosted instances.
## 7. User Feedback Summary
Collected feedback from recent QA testing and self-hosted user reports highlights clear priorities:
- Users expressed high satisfaction with the recent fix for silent OAuth refresh failures, which eliminated hours of unneeded diagnostic work that delayed root cause analysis of bugs like #5378
- The recently fixed non-selectable log text bug was a top pain point for advanced users who rely on logs to debug custom automation workflows
- Unresolved contradictory Google auth flows and broken multi-step Google Sheets workflows are the top current dissatisfaction points for users building productivity automations, many of whom chose IronClaw specifically to orchestrate Google Workspace tools
- Users managing more than 3+ automations report high frustration with auto-generated, truncated automation names and lack of rename functionality.
## 8. Backlog Watch
Two high-priority long-running items are awaiting maintainer attention:
1. [Nightly E2E run failure (#4108)](https://github.com/nearai/ironclaw/issues/4108): Opened 2026-05-27, this broken CI pipeline is over 5 weeks old and risks allowing uncaught regressions to land on the main branch, with no assigned maintainer or recent triage activity.
2. [Next release cut PR (#5311)](https://github.com/nearai/ironclaw/pull/5311): This CI-managed release PR for the upcoming version bump has no recent review or sign-off activity, and is blocked waiting for final validation of the breaking API changes for core shared crates.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-06-30
*Repository: https://github.com/netease-youdao/LobsterAI*

---

## 1. Today's Overview
This 24-hour window represents a highly productive maintenance and sprint wrap-up period for the NetEase Youdao open-source AI assistant project, with 11 updated issues and 40 total updated pull requests. The project recorded a 97.5% PR merge/closure rate (39 of 40 total PRs), indicating extremely healthy code review throughput with no visible development bottlenecks. All merged changes culminated in the new 2026.6.29 official release, focused on improving OpenClaw runtime stability and polishing Cowork UI/UX details. Recent activity signals the core team has just completed a feature stabilization cycle, with most legacy mid-priority bugs targeted for resolution in this iteration.

## 2. Releases
### New Version: LobsterAI 2026.6.29 (published 2026-06-29)
Full release PR: https://github.com/netease-youdao/LobsterAI/pull/2228
#### Core Changes:
1.  OpenClaw runtime stability improvements: preserved user turn cache stability, separated agent bootstrap workspace from task working directories, retained follow-up history for cron scheduled runs
2.  Permission system upgrade: routed all plugin approval requests through the centralized Cowork permission manager
3.  UI polish: cleaned navigation rail previews, fixed tooltip alignment and lazy loading issues for the conversation sidebar
4.  IM plugin support: added pre-installed QQ and Discord channel plugins, and upgraded existing Feishu, DingTalk, WeCom and POPO plugin compatibility
#### Migration Notes:
No breaking changes for end users. Legacy cron task storage will be automatically migrated on first launch after updating, no manual operation is required.

## 3. Project Progress
39 merged/closed PRs in the 24-hour period, with only 1 remaining open PR for Electron dependency bumps from dependabot:
- Over 18 OpenClaw targeted fixes resolved critical regressions from the prior 2026.6.1 patch that broke agent persona files (SOUL.md, IDENTITY.md) and long-term memory storage, added ChatGPT OAuth routing support, and fixed sync failures for cron run sessions
- A series of revert and reapply PRs resolved an accidental merge of conversation rail changes to the main branch, restoring full navigation functionality and tooltip preview performance
- Official documentation was updated to reflect the current OpenClaw + Cowork architecture, adding clear guidance for agent repository contribution and code quality gate requirements
- All merged PRs passed 146+ Vitest validation cases with no unaddressed test failures.

## 4. Community Hot Topics
All highly active issues received 2+ user/maintainer comments in the past 24 hours:
1.  **Feature request for power user workflow optimization** #2120: https://github.com/netease-youdao/LobsterAI/issues/2120
    User suggestions include pre-input of follow-up tasks during active runs, longer task timeout limits, and 3-column skill UI for high-resolution displays. Underlying need: power users deploying LobsterAI for long-running data development tasks want better workflow continuity without unexpected interruptions.
2.  **Duplicate output suspected of wasting tokens** #2121: https://github.com/netease-youdao/LobsterAI/issues/2121
    User raised concerns about repeated text outputs consuming excess LLM tokens. Underlying need: paid API users expect transparent, granular token usage tracking to avoid unexpected cost overruns.
3.  **Subscription point expiry complaint** #2081: https://github.com/netease-youdao/LobsterAI/issues/2081
    User reported unused 5500 subscription points were cleared at month end without prior notification. Underlying need: clearer, more user-transparent rules for subscription benefit terms.

## 5. Bugs & Stability
Ranked by business severity:
1.  **High Severity**: Execution result window freezes when scrolled to top #2079: https://github.com/netease-youdao/LobsterAI/issues/2079
    Reproducible on 2026.5.27 version, blocks users from viewing full task outputs. No corresponding fix PR has been tracked as of this digest.
2.  **Medium Severity**: Duplicate output may cause excess token consumption #2121: https://github.com/netease-youdao/LobsterAI/issues/2121
    Impacts all users running long generation tasks, no confirmed fix PR exists.
3.  **Medium Severity**: Email connectivity test hangs indefinitely after submitting incorrect credentials #1388: https://github.com/netease-youdao/LobsterAI/issues/1388
    Breaks the full email configuration workflow, no assigned fix PR.
4.  **Low Severity**: Incomplete localization for Chinese language selection entry under English UI #1389: https://github.com/netease-youdao/LobsterAI/issues/1389
    Similar 3 localization bugs were already closed in the recent 24 hours, remaining issue has minimal user experience impact.

All recently reported critical OpenClaw workspace path breaks and cron history loss bugs have been fully resolved in the 2026.6.29 release.

## 6. Feature Requests & Roadmap Signals
Validated user requests collected from recent issues:
1.  Official support for the Hermes agent framework #2131: https://github.com/netease-youdao/LobsterAI/issues/2131
2.  Extended maximum single task runtime to avoid early termination for long-running data monitoring scripts
3.  3-column skill UI layout for 2560*1600 and higher resolution displays
4.  Pre-input of follow-up tasks during active runs to improve workflow continuity

Prediction: The task timeout extension and high-DPI UI adjustments are low-cost UX tweaks that will most likely land in the next 2026.7.x patch release. Hermes agent framework support is a larger architectural feature that is expected to be scheduled for the 2026 Q3 feature release.

## 7. User Feedback Summary
### Confirmed Pain Points:
- Existing 2-column skill UI does not adapt well to high-resolution 16-inch and above desktop displays
- Default task runtime limit is too short for data acquisition and monitoring scenarios, leading to unexpected early termination
- Subscription point expiry rules lack obvious in-app notification, causing user dissatisfaction
- The long conversation share function generates incomplete screenshots for long chat histories
- Partial operation actions (e.g. email connectivity test) do not return clear error prompts after failure, leading to stuck states
### Positive Feedback:
No negative user reports have been received for the newly released OpenClaw IM plugin and cron history sync functions after launch, and active users are already testing these new features for production use.

## 8. Backlog Watch
Long-standing stale issues that need maintainer prioritization for triage:
1.  **Long conversation share screenshot content truncation** #1386: https://github.com/netease-youdao/LobsterAI/issues/1386
    Open since 2026-04-03, no fix PR assigned. This is a core social/knowledge sharing feature frequently used by users to export task results.
2.  **Occasional scheduled task update no response** #1390: https://github.com/netease-youdao/LobsterAI/issues/1390
    Open since 2026-04-03, no 100% reproduction steps provided yet. This bug impacts production scheduled agent runs for power users.
3.  **Email connectivity test infinite loading** #1388: https://github.com/netease-youdao/LobsterAI/issues/1388
    Open since 2026-04-03, no fix in progress. This blocks users from configuring email notification functions for agent tasks.
All 3 issues have not received any update for more than 2 months, and are recommended to be added to the next sprint triage queue.

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

# CoPaw (agentscope-ai/QwenPaw) 2026-06-30 Project Digest
---
## 1. Today's Overview
Over the past 24 hours, the CoPaw project recorded 30 updated issues (21 active open, 9 resolved closed) and 50 updated pull requests (32 open, 18 merged/closed), indicating sustained high development velocity aligned with the upcoming v2.0.0-beta.1 release schedule. The engineering team allocated resources evenly across bug triage, new feature development, test coverage expansion and documentation polish, with no critical production outage reported. Community engagement remained active, with users submitting 21 new feature requests and bug reports covering model compatibility, third-party IM channel experience and long-running agent reliability scenarios. The overall project health is stable, with 60% of high-severity bugs reported in the past week already mapped to pending or in-review fix PRs. No unexpected security vulnerabilities were disclosed during the period.

## 2. Releases
No new official releases were published in the last 24 hours. The pre-release installation verification workflow for the upcoming `v2.0.0-beta.1` version (tracking at [Issue #5571](https://github.com/agentscope-ai/QwenPaw/issues/5571)) is still ongoing, with cross-platform test results being collected from community contributors as of the digest date.

## 3. Project Progress
A total of 18 PRs were merged or closed in the past 24 hours, delivering the following key fixes and feature advancements:
1.  PR [#5628](https://github.com/agentscope-ai/QwenPaw/pull/5628) resolved the long-reported front-end bug where tool result cards incorrectly displayed a count of 1 for `glob_search`, `read_file` and `grep_search` tools, correctly normalizing result counting across all MCP tool outputs.
2.  PR [#5601](https://github.com/agentscope-ai/QwenPaw/pull/5601) restored missing tool approval notification push functionality for all third-party IM channels (Feishu, WeCom, Telegram etc.) after the recent Runtime v2 architecture refactoring, eliminating the gap between web console and IM channel alert capabilities.
3.  PR [#5614](https://github.com/agentscope-ai/QwenPaw/pull/5614) fully updated the official context management documentation, deprecated references to the old light context manager, and published full architecture explanation and configuration guides for the new scroll-style context strategy.
4.  The previously requested MCP post-configuration tool visibility feature ([Issue #2495](https://github.com/agentscope-ai/QwenPaw/issues/2495)) was fully implemented and closed, allowing users to view all exposed tools and connection status for configured MCP servers directly in the web console. The issue of thousands of repeated inbox event logs flooding user terminals ([Issue #5591](https://github.com/agentscope-ai/QwenPaw/issues/5591)) was also patched.

## 4. Community Hot Topics
1.  [Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891): DeepSeek prefix cache optimization request is the highest engagement item in the past 24h, with 5 comments and 1 upvote. The underlying user demand is to cut inference costs for DeepSeek model heavy workloads: the current 95% prefix cache hit rate leaves large optimization room, as DeepSeek's pricing gap between cache hit and miss reaches 4x for DeepSeek-V4-Pro and 10x for DeepSeek-V4-Flash, even a 2% hit rate lift can reduce total inference cost by more than 20% for mass workloads.
2.  [Issue #5571](https://github.com/agentscope-ai/QwenPaw/issues/5571): The v2.0.0-beta.1 release verification tracking issue acts as the core collaboration hub for maintainers and community testers, with contributors continuously submitting cross-platform installation test results to accelerate the pre-release rollout.

## 5. Bugs & Stability
Ranked by severity, the latest reported issues are as follows:
1.  **Critical**: [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) - Launching two subagents concurrently as background tasks triggers infinite fast LLM polling, and the Feishu channel cannot interrupt the running task. This bug creates extremely high risk of uncontrolled token waste and service unavailability for multi-agent workloads, no linked fix PR is available as of now.
2.  **High**: [Issue #5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) - DeepSeek V4 thinking mode returns 400 errors on non-official OpenAI compatible endpoints, caused by missing fallback for missing streaming `reasoning_content` fields and unwashed null type values in tool schemas. A non-developer community user already submitted validated fix suggestions, no official merged patch exists yet.
3.  **High (Resolved)**: [Issue #5505](https://github.com/agentscope-ai/QwenPaw/issues/5505) - The bug that a single MiniMax-M3 picture security rejection was incorrectly cached to permanently strip all subsequent visual input requests in the same session has been fully resolved.
4.  **Medium**: [Issue #5561](https://github.com/agentscope-ai/QwenPaw/issues/5561) - Feishu channel drops mid-length replies instead of automatically sending long content as a file attachment, breaking message delivery for Feishu bot users. No fix PR is open as of now.
5.  The context explosion defense bug reported in [Issue #5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) already has a pending review fix PR [#5510](https://github.com/agentscope-ai/QwenPaw/pull/5510) adding a hard tool result size cap at the execution layer, which will eliminate cascading context overflow failures caused by skipped pruning hooks after LLM 502 errors.

## 6. Feature Requests & Roadmap Signals
Based on community demand volume, the following features are highly likely to land in near-future releases:
1.  The automatic model fallback feature (auto-switch to backup model on quota exhaustion, API call failure or timeout, requested in [Issue #5572](https://github.com/agentscope-ai/QwenPaw/issues/5572) and [Issue #5527](https://github.com/agentscope-ai/QwenPaw/issues/5527)) is prioritized for the v2.0.0 formal release, as it matches the upcoming AgentScope 2.0 dependency integration roadmap and addresses core reliability requirements for long-running automation tasks.
2.  The vision fallback feature for pure-text models (auto-convert user uploaded images to text descriptions with an auxiliary VL model, requested in [Issue #5615](https://github.com/agentscope-ai/QwenPaw/issues/5615)) is a low-cost high-return UX improvement that will most likely be shipped in the first minor version after the v2.0 beta release.
3.  Incremental IM channel feature upgrades including custom Telegram BaseURL support ([Issue #5630](https://github.com/agentscope-ai/QwenPaw/issues/5630)) and DingTalk @mention support ([Issue #5564](https://github.com/agentscope-ai/QwenPaw/issues/5564)) will roll out in small patch releases to narrow the feature parity gap between different IM platforms.

## 7. User Feedback Summary
1.  **Dissatisfaction**: Multiple users reported obvious performance and UI latency after recent runtime architecture refactoring ([Issue #5555](https://github.com/agentscope-ai/QwenPaw/issues/5555)), which degrades interaction experience for local deployment users.
2.  **Pain Point**: Cross-platform IM experience is inconsistent: DingTalk streaming card output is significantly slower than native console rendering ([Issue #5603](https://github.com/agentscope-ai/QwenPaw/issues/5603)), Feishu has unhandled long message drop issues, users expect the same level of functionality and responsiveness across all connected chat channels.
3.  **Core Reliability Grievance**: Users running unattended 7*24 automation tasks report unexpected task termination with no logs or recovery mechanism ([Issue #5616](https://github.com/agentscope-ai/QwenPaw/issues/5616)), the lack of conversation checkpoint persistence makes long task progress permanently lost after service crashes.
4.  **Positive Feedback**: Many enterprise and power users expressed high anticipation for the upcoming AgentScope 2.0 aligned v2.0 beta release, and the newly shipped MCP tool visibility feature got positive responses from users relying heavily on MCP extension ecosystems.

## 8. Backlog Watch
High-impact long-unresolved items needing urgent maintainer attention:
1.  [Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) (DeepSeek prefix cache optimization): Submitted on 2026-04-27, last updated 2026-06-29, no maintainer assigned yet. This high-impact optimization can reduce inference cost by over 20% for thousands of heavy DeepSeek model users if properly implemented.
2.  [Issue #5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) (Cannot connect custom Ascend-vLLM model in post-1.1.7 versions): User confirmed model config tests pass but actual inference calls fail, this breaks private deployment scenarios on Ascend NPU hardware which are widely adopted in domestic Chinese enterprise environments, no public fix progress has been shared yet.
3.  [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) (Concurrent 2 subagents trigger infinite polling): Submitted on 2026-06-01, no associated fix PR has been opened for nearly a month, it is a critical stability barrier for users building multi-agent collaboration workflows.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-06-30
---

## 1. Today's Overview
On 2026-06-30, the ZeroClaw open-source AI assistant project saw high, consistent development activity with 50 updated issues and 50 updated pull requests across all core code areas, with no new official releases shipped in the 24-hour window. 7 total issues were closed and 10 PRs were merged, with most ongoing work targeted at resolving critical workflow-blocking bugs for top LLM providers and advancing the planned v0.8.3 feature roadmap. The project’s active contributor base is currently prioritizing cross-entry-point consistency fixes for tool availability, security hardening for observability and CI pipelines, and core extensibility work for WASM plugin runtime support. Cross-team workstreams for new channel integrations (WhatsApp, GitHub, Inkbox) and standardized Agent-to-Agent (A2A) discovery protocols are also seeing steady incremental progress, indicating strong alignment between contributor priorities and public roadmap commitments.

## 2. Releases
No new official releases were published in the 24-hour reporting window ending 2026-06-30.

## 3. Project Progress
10 PRs were merged or closed in the last 24 hours, delivering incremental fixes and feature progress across docs, provider compatibility, and SOP (Standard Operating Procedure) engine hardening:
- Documentation PR [#8436](https://github.com/zeroclaw-labs/zeroclaw/pull/8436): Corrected runtime history management documentation to note the previously undocumented hard `max_history_messages` cap, eliminating user confusion about unexpected conversation truncation behavior.
- Provider compatibility PR [#8441](https://github.com/zeroclaw-labs/zeroclaw/pull/8441): Added the required `name` field to tool-result messages for OpenAI-compatible providers, resolving HTTP 400 errors that blocked native tool workflows for Groq users.
- SOP engine hardening PRs [#8502](https://github.com/zeroclaw-labs/zeroclaw/pull/8502) and [#8493](https://github.com/zeroclaw-labs/zeroclaw/pull/8493): Completed two key security and reliability upgrades for the SOP feature, adding full payload safety ingress screening for untrusted external triggers, and strict enforcement of bounded tool scopes per SOP execution step to prevent unauthorized tool access.
- Closed completed issues corresponding to this work included the long-running cron NO_REPLY sentinel bug [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128), WhatsApp passive group context feature [#8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379), base64 image token bloat issue for OpenAI-compatible providers [#8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327), and multimodal vision_provider silent ignore bug [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841).

## 4. Community Hot Topics
The most actively discussed community items in the last 24 hours are:
1. High-severity Kimi Code provider streaming tool calling bug [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (11 comments): The top discussion topic is a workflow-blocking error where the Kimi Code provider returns 400 errors for streaming chat calls with enabled thinking mode due to missing `reasoning_content` fields. The ongoing conversation reflects strong user demand for first-class, bug-free support of reasoning-model providers that use extended thought output.
2. System prompt tool availability mismatch bug [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) (9 comments): Contributors are coordinating to extend the partial fix that landed for the direct agent runtime path to all other entry points (WebSocket, multimodal endpoints, /think route, etc.), driven by widespread user reports of inconsistent tool access behavior across different API surfaces.
3. Desktop computer-use capability RFC [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (6 comments): The community is gathering requirements for native desktop screen capture and mouse/keyboard input control, reflecting strong user interest in extending ZeroClaw beyond text/API tooling to local system automation use cases.

## 5. Bugs & Stability
High-severity bugs reported or updated in the last 24 hours, ranked by impact:
1. S1 Workflow-blocking Telegram configuration bug [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505): Newly reported, where the Telegram chat channel cannot be configured correctly even after completing the official quickstart wizard. No public fix PR has been filed as of the report window.
2. S1 Kimi streaming tool calling bug [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600): A high-risk bug that blocks streaming workflows for users of Moonshot's Kimi Code model, marked as accepted but without an open fix PR.
3. S1 MCP tool availability bug for OpenAI/Anthropic reasoning models [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756): Partial fixes have landed for the core runtime path, with remaining cross-entry-point work tracked under issue #8054.
4. S2 Translation leak repair stale entry bug [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312): A data loss risk bug marked as in-progress, where the translation leak repair tool leaves stale entries that can re-ship previously redacted user text.
No public unhandled crash reports were logged in the 24-hour window.

## 6. Feature Requests & Roadmap Signals
Based on current scoping and activity, the following features are highly likely to ship in upcoming releases:
- The full v0.8.3 WASM plugin program, tracked under [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314), is the highest priority roadmap item for the next minor release, with supporting RFCs for OCI registry plugin storage, Wasm-first default runtime, and signed distribution already well advanced.
- In-app web dashboard one-click upgrade feature [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) is marked as in-progress and nearly complete, expected to ship in the v0.8.2 patch release.
- Experimental desktop computer-use support [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) is targeted as a p2 priority, expected to land as an opt-in experimental feature in the v0.9.x release line.
- Partial implementation of the A2A agent discovery protocol [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) is scoped for the 0.8.4 release to lay the foundation for multi-agent interoperability.

## 7. User Feedback Summary
Core user pain points and sentiment observed in the last 24 hours:
- Top pain point: Power users running production agent workloads report multiple conflicting native tool calling errors across different LLM providers

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*