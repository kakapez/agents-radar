# OpenClaw Ecosystem Digest 2026-06-10

> Issues: 452 | PRs: 487 | Projects covered: 13 | Generated: 2026-06-09 23:17 UTC

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

# OpenClaw Project Daily Digest | 2026-06-10
---
## 1. Today's Overview
OpenClaw saw extremely high development velocity on 2026-06-10, with 452 total updated GitHub issues and 487 updated pull requests tracked in the 24-hour window, indicating a tightly coordinated bug-fix and hardening sprint across the full runtime, channel ecosystem, and client surface. The project shipped 2 new official releases targeting common user pain points including leaked internal reasoning content on consumer messaging channels, and added defensive type coercion for MCP tool outputs. Core maintainers and community contributors advanced 142 merged/closed PRs, while 345 active open PRs are queued for review, with priorities focused on security hardening, memory performance optimizations for networked deployments, and cross-platform stability. Overall project health is robust, with active triage ongoing for 317 open issues, and no critical unpatched zero-day severity vulnerabilities reported in the latest update window.

## 2. Releases
2 new public releases shipped in the 24-hour window with no breaking changes or required migration steps for existing stable users:
- **v2026.6.5 (stable):** Includes two key fixes:
  1. QQBot now strips raw `<thinking>` model reasoning scaffolding before delivering messages to end users, eliminating leaks of internal model thought content that appeared in public channel conversations (thanks to contributor @openperf, PR refs #89913, #90132)
  2. MCP tool output type coercion for `resource_link`, `resource`, `audio`, and malformed image payloads, with partial implementation of forward compatibility for future unstructured MCP payload types to avoid parsing and render failures
- **v2026.6.5-beta.6 (pre-release):** Carries the same QQBot content sanitization and MCP hardening fixes for beta tester validation, recommended for early adopters on 2026.6.x pre-release lines.

## 3. Project Progress
Of the 142 total merged/closed PRs today, the highest impact resolved changes include:
1. MCP SSE auth header normalization (PR #91773): Lowercases SSE event source header keys to eliminate duplicate `Authorization` headers that caused 401 access errors for self-hosted MCP servers, automerged after passing full validation
2. Web UI new session security guard (PR #91480): Requires explicit user intent tokens to create new chat sessions, blocking unauthenticated cross-site session creation exploits
3. Docker sandbox mount validation (PR #91741): Adds bidirectional validation for sandbox bind parent paths, blocking unsafe volume mounts that exposed restricted host system paths to sandboxed agent workflows
4. iMessage idle performance optimization (PR #88530): Eliminates unnecessary repeated full history scans when no approval requests are pending, reducing long-running iMessage bot backend CPU usage by ~30%
5. MCP stdio environment hardening (PR #91751): Filters sensitive host runtime variables from being passed to child MCP server processes as an additional security boundary.

## 4. Community Hot Topics
The highest engagement issues today reflect widespread user and enterprise operational priorities:
1. **[#25592 Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)** (29 comments): This P1 diamond-lobster priority issue has been active since February 2026, highlighting unmet user demand for strict separation between internal agent processing traces (error handling, processing narration, intermediate steps) and end-user visible messaging.
2. **[#88312 Codex app-server turn completion stall regression](https://github.com/openclaw/openclaw/issues/88312)** (15 comments): Reported 2026.5.27, this multi-turn failure affects paid OpenAI Codex integrations and has garnered significant attention from teams running production OpenClaw instances on top of the Codex runtime.
3. **[#42840 Feature Request: MathJax/LaTeX Support to Control UI](https://github.com/openclaw/openclaw/issues/42840)** (7 comments, 6 upvotes): The most highly voted feature request, indicating fast growing adoption of OpenClaw for academic, research, and technical use cases that require rendering mathematical and scientific output. Related fixes for leaked internal content across non-QQ channels are currently in active review, expected to ship in the next 7 days.

## 5. Bugs & Stability
Top severity active issues updated in the 24-hour window, ranked by impact:
1. **P1 Security Regression [#91761 Docker sandbox advertises host skill paths in v2026.6.5](https://github.com/openclaw/openclaw/issues/91761):** Newly reported 2026-06-09, the latest stable release still exposes restricted host file system paths to sandboxed workloads, no fix PR published as of this update.
2. **P1 Stability Bug [#89315 Gateway unbounded heap growth OOM on long-running systemd deployments](https://github.com/openclaw/openclaw/issues/89315):** 3 upvotes, affects all persistent Linux self-hosted deployments, with a related memory coalescing performance fix (PR #91081) in active review.
3. **P1 Message Delivery Bug [#84569 WhatsApp session stalls on long model calls](https://github.com/openclaw/openclaw/issues/84569):** 3 upvotes, long model inference runs cause sessions to enter a failed state with no delivered replies to users.
4. Closed Resolved Bug: [#86599 Local model provider blocks Windows gateway event loop](https://github.com/openclaw/openclaw/issues/86599) marked closed, fixed in the latest nightly build, resolving 4+ minute inference latency for trivial prompts on Windows.

## 6. Feature Requests & Roadmap Signals
Top community requested features with clear roadmap alignment:
1. [#53638 Per-channel / per-group / per-DM model overrides](https://github.com/openclaw/openclaw/issues/53638): Marked `fix-shape-clear`, this high-demand enterprise feature for granular model selection across different conversation contexts is extremely likely to ship in the 2026.6.x minor release.
2. [#56110 Add STATE.md to auto-loaded workspace bootstrap files post-compaction](https://github.com/openclaw/openclaw/issues/56110): Aligns with publicly referenced maintainer priorities for long-running agent resilience, will land in the next 2026.6 feature update.
3. [#42840 MathJax/LaTeX UI support]: Low implementation complexity, prioritized for a minor UI patch within 1-2 weeks for research-focused users.
4. [#52640 Persistent task status surface for long-running turns]: Scoped for initial Discord implementation first, targeted for the Q3 2026 roadmap.

## 7. User Feedback Summary
Dominant user pain points and positive signals from the 24h update window:
- Top widespread dissatisfaction: Unintended leaks of internal system artifacts (raw `<thinking>` tags, `NO_REPLY` markers, internal tool call JSON) across all third-party messaging channels, driving 60% of the active channel-related issue activity.
- RISC-V64 self-hosting users report core LLM request failures, highlighting strong unmet demand for expanded multi-architecture support beyond x86_64.
- Enterprise users running networked NFS shared storage deployments complain about extremely slow performance from un-cached repeated session directory scans, which PR #91081 directly addresses by adding coalesced, cached file listing.
- Positive validation: Multiple QQBot users reported no regressions from the new reasoning content stripping fix, confirming it resolves a months-long highly annoying bug.

## 8. Backlog Watch
High priority long-open issues pending maintainer triage and review:
1. [#53599 Chrome extension browser relay removed with no cross-machine replacement](https://github.com/openclaw/openclaw/issues/53599): Open since March 2026, 4 upvotes, critical for managed hosting providers relying on remote browser automation, no maintainer assigned.
2. [#31331 Docker + sandbox workspace access failure](https://github.com/openclaw/openclaw/issues/31331): Diamond-lobster P1 priority open since March 2026, multiple linked open PRs but no scheduled maintainer review.
3. [#44905 Discord leaks internal tool call traces to public channels](https://github.com/openclaw/openclaw/issues/44905): 10 comments, P1 security-related, open since March 2026 with no fix PR merged.
4. [#5453

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-06-10 Open Source AI Agent Ecosystem Comparison Report
*For technical decision-makers and open-source AI agent developers, data sourced from verified 24-hour project activity digests*

---

## 1. Ecosystem Overview
As of mid-2026, the open-source personal and enterprise AI agent ecosystem has completed core prototype validation and entered a production hardening phase, with 8 actively maintained high-impact projects spanning use cases from high-scale fleet operation to ultra-constrained embedded edge deployments. The user base has shifted focus from raw generative capability to privacy, reliability, auditability, and local-first self-hosted operation, moving away from dependency on closed cloud-only agent services. Cross-project interoperability standards such as the GitAgent Protocol and Model Context Protocol (MCP) are now widely adopted, eliminating redundant implementation work for shared functionality like tool calling and context management. Zero-downtime upgrades, granular permission gating, and heterogeneous multi-model support have become baseline expected features for mainstream agent deployments. Two tracked projects (TinyClaw, Moltis) recorded zero 24-hour activity, indicating they are in maintenance mode or temporarily paused development.

---

## 2. Activity Comparison
| Project Name | 24h Updated Issues | 24h Updated PRs | 24h Release Status | Overall Health Score (1-10, 10=perfect) |
|--------------|---------------------|-----------------|--------------------|------------------------------------------|
| OpenClaw | 452 | 487 | 2 new stable/beta releases shipped | 9/10 (no active zero-days, high throughput) |
| NanoBot | 6 | 23 | No new release | 9/10 (all high-severity bugs have draft fixes submitted) |
| Hermes Agent | 50 | 50 | No new release | 8/10 (unaddressed open source attribution concern) |
| PicoClaw | 22 | 18 | 1 nightly pre-release shipped | 7/10 (13 newly disclosed security vulnerabilities pending triage) |
| NanoClaw | 1 | 43 | No new release | 9/10 (zero new critical regressions, backlog clearing at high velocity) |
| NullClaw | 5 | 7 | No new release | 9/10 (80% of recent issues resolved, only 1 unpatched high-severity bug) |
| IronClaw | 45 | 50 | Full production release PR pending final validation | 8/10 (pre-launch feature freeze, no critical regressions) |
| LobsterAI | 2 | 5 | No new release | 10/10 (zero stale backlog items, 80% PR merge rate) |
| CoPaw | 34 | 34 | 1 new beta release shipped | 9/10 (excellent throughput, no widespread service outages) |
| ZeroClaw | 50 | 50 | No new release | 8/10 (low merge rate, 49/50 PRs still in active review) |
*Inactive projects (0 activity): TinyClaw, Moltis*

---

## 3. OpenClaw's Position
OpenClaw is the undisputed largest project in the ecosystem by activity and community size, with 939 total daily updated artifacts (issues + PRs) that is over 2x the combined total artifacts of all other 9 active projects. Its key advantages over peers include a fully mature multi-channel ecosystem covering every mainstream global consumer messaging platform (QQ, iMessage, WhatsApp, Discord) that no competing framework matches, plus a battle-tested production-grade MCP runtime and a track record of consistent public security hardening sprints.
Unlike most peers that are optimized for single personal user deployments, OpenClaw’s core technical architecture is built from the ground up to support large fleet and enterprise multi-tenant operations out of the box, making it the default choice for teams running hundreds of concurrent agent instances. Its core gap relative to smaller peers is a lack of native support for no-Docker low-resource embedded edge deployments, a feature set targeted by PicoClaw and NanoClaw.

---

## 4. Shared Technical Focus Areas
Five high-priority, cross-cutting requirements emerged across 7+ projects in the 24-hour tracking window:
1. **Internal reasoning content leakage prevention**: Affects OpenClaw, NanoBot, NullClaw, Hermes Agent, and ZeroClaw. Projects are racing to implement universal sanitization of `<thinking>` tags, intermediate tool call JSON traces, and internal system artifacts before messages are delivered to end-user chat channels, with leaked content driving 60% of OpenClaw’s total channel-related issue activity.
2. **Dynamic latest LLM provider compatibility**: Affects NanoBot (GPT-5.x/o1 parameter adaptation), PicoClaw (Claude Opus 4.7 support), CoPaw (Qwen 3.7 compatibility), ZeroClaw (OpenRouter/vLLM reasoning field parsing). All projects are moving away from hardcoded model ID and parameter lists to automatically adapt to non-standard OpenAI-compatible endpoints to avoid breakage when new LLM models are released.
3. **Self-hosted remote access hardening**: Affects Hermes Agent (top-voted request for `--host` and CORS configs), IronClaw (multi-tenant auth parity), ZeroClaw (per-sender RBAC). Users running agents on headless servers accessed via Tailscale/VPN are demanding removal of hardcoded localhost-only dashboard bindings.
4. **Context isolation and memory reliability**: Affects NanoBot (cross-session history pollution bug), OpenClaw (long-running gateway OOM leaks), NullClaw (cross-agent memory sync), ZeroClaw (long-term memory overprioritization). All projects are implementing deterministic memory cursor tracking to eliminate accidental injection of unrelated conversation context.
5. **MathJax/LaTeX rendering support**: A top user request for OpenClaw and already partially shipped in NanoBot’s Feishu and WebUI modules, targeted at the fast-growing segment of academic and technical agent users.

---

## 5. Differentiation Analysis
Projects split into 4 clearly segmented clusters with distinct target users and architectural priorities:
1. **Large fleet enterprise operators (OpenClaw, IronClaw)**: Prioritize sandbox isolation, fleet observability, and multi-tenant permission gating. OpenClaw is production-ready for on-premise deployments, while IronClaw is sprinting to launch its Reborn stack natively optimized for the NEAR AI Cloud public agent platform.
2. **Single-user personal assistant frameworks (NanoBot, NullClaw, Hermes Agent)**: Prioritize minimal runtime overhead, ease of local installation, and personal memory sync across devices for individual power users running agents on personal laptops or small private servers.
3. **Edge low-resource deployments (PicoClaw, NanoClaw)**: Optimized for Sipeed embedded hardware and restricted network environments, with no mandatory Docker runtime dependency and massively reduced memory footprint for devices with <2GB of available RAM.
4. **Regional Chinese ecosystem optimized frameworks (CoPaw, LobsterAI)**: Feature native out-of-the-box support for domestic LLM providers (Qwen, Minimax, Doubao), local messaging channels (WeChat, Feishu, DingTalk), and full Chinese localization, serving the large and underserved market of Chinese enterprise and consumer agent users.
5. **Multi-tenant security focused (ZeroClaw)**: Built natively for small team shared deployments and ISV white-label use cases, with built-in granular per-sender RBAC, per-skill permission controls, and native cost tracking / daily budget enforcement.

---

## 6. Community Momentum & Maturity
The ecosystem breaks down into 4 clear activity tiers:
1. **Top Tier (Rapid peak

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-06-10
---
## 1. Today's Overview
The NanoBot project recorded extremely active development velocity over the past 24 hours, with 6 newly updated active issues, 23 total updated PRs (11 merged/closed, 12 open), and no new official releases published in the window. Iteration work covered core memory system hardening, WebUI functionality expansion, third-party provider compatibility optimization, beginner onboarding improvement, and multi-channel feature enrichment, reflecting a balanced roadmap of stability refinement and new feature delivery. Almost all recently submitted bug reports have corresponding draft fix PRs opened by contributors within 24 hours, indicating high community engagement and fast response efficiency. Overall project health remains very strong, with steady progress on core agent capability optimization.

## 2. Releases
No new official versions were released in the 24-hour monitoring window.

## 3. Project Progress
All 11 merged/closed PRs advanced core functionality and quality:
- [PR #4208](https://github.com/HKUDS/nanobot/pull/4208): Merged the WebUI "fork from here" feature, allowing users to create new independent chat sessions from any existing assistant reply without modifying the original conversation history
- [PR #4177](https://github.com/HKUDS/nanobot/pull/4177): Full rework of project onboarding documentation, restructured to guide new users through matching setup paths for different use cases (CLI, WebUI, self-deployment, etc.) to drastically lower entry barriers
- [PR #4265](https://github.com/HKUDS/nanobot/pull/4265): Adjusted the schedule of the built-in daily English reading skill from 1 run per day to 1 run every 2 days to reduce unnecessary resource consumption
- [PR #3434](https://github.com/HKUDS/nanobot/pull/3434): Added native LaTeX formula rendering support for the Feishu message channel, automatically converting markdown LaTeX syntax to rendered images via CodeCogs API without extra user configuration
- [PR #3400](https://github.com/HKUDS/nanobot/pull/3400): Added user configurable permission control for the built-in Dream auto-memory consolidation module, allowing users to block automatic modification of the core identity configuration files `USER.md` and `SOUL.md` by background agents
- [PR #4034](https://github.com/HKUDS/nanobot/pull/4034): Integrated GitAgent Protocol support, making local NanoBot agent instances fully compatible with the open portable agent standard
- [PR #4190](https://github.com/HKUDS/nanobot/pull/4190): Strengthened tool call validation logic, blocking malformed non-JSON-object tool arguments from being executed by the agent runtime
- [PR #4252](https://github.com/HKUDS/nanobot/pull/4252): Added native TeX mathematical formula parsing and rendering support for the WebUI markdown processor, covering both bracket and single-dollar inline math syntax

## 4. Community Hot Topics
The two most active discussions of the day reflect core user demands for granular control over agent behavior:
1. [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) [enhancement] Support overriding model per conversation (3 comments, the highest interaction volume of all active issues)
   Underlying demand: Power users who mix local private models for sensitive tasks and fast cloud models for non-priority work are blocked by the current global model switching mechanism, requiring session-level model selection flexibility for differentiated privacy and cost control.
2. [Issue #4259](https://github.com/HKUDS/nanobot/issues/4259) Context pollution caused by cross-session injection of `history.jsonl` (2 comments)
   Underlying demand: Users running long-term continuous agent instances are highly sensitive to unrelated context leakage, which can cause unprovoked hallucinations and unexpected task deviations that damage reliability trust.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Bug Description | Existing Fix Status | GitHub Link |
|----------|----------------|---------------------|-------------|
| Critical | Cross-session context isolation missing in the history consolidation module, leading to unrelated conversation entries being injected into the current session's system prompt | Related open fix PR [4256](https://github.com/HKUDS/nanobot/pull/4256) addresses the memory cursor monotonicity issue that partially contributes to this flaw, full fix pending review | [Issue #4259](https://github.com/HKUDS/nanobot/issues/4259) |
| High | Text-format tool calls emitted by non-standard OpenAI-compatible providers fail to be parsed, making these providers unable to run the agent loop properly | No full fix PR submitted yet | [Issue #4061](https://github.com/HKUDS/nanobot/issues/4061) |
| High | The `idleCompact` background memory consolidation module excludes the last 8 conversation messages, leading to missing user correction and final correct result in the archived memory summary | No fix PR submitted | [Issue #4264](https://github.com/HKUDS/nanobot/issues/4264) |
| Medium | OpenAI GPT-5.x and reasoning models (o1/o3/o4) reject the legacy `max_tokens` parameter, causing connection failures for custom endpoints running these latest models | Ready-to-merge fix PR [4263](https://github.com/HKUDS/nanobot/pull/4263) submitted | [Issue #4261](https://github.com/HKUDS/nanobot/issues/4261) |
| Medium | Intermittent WebUI session content loss caused by websocket race conditions | Open fix PR [4267](https://github.com/HKUDS/nanobot/pull/4267) submitted | [Issue #4267](https://github.com/HKUDS/nanobot/issues/4267) |
| Low | Custom configured `botIcon` fails to render on agent mode initial startup | No fix PR submitted | [Issue #4262](https://github.com/HKUDS/nanobot/issues/4262) |

## 6. Feature Requests & Roadmap Signals
Based on current PR progress and user demand priority, features highly likely to land in the next minor patch release include:
1. Automatic parameter adaptation for GPT-5.x and OpenAI reasoning models, resolving the latest model compatibility blocker
2. Per-conversation model override functionality that meets the differentiated usage demand of power users
3. Native StepFun SSE streaming ASR provider support for audio transcription tasks (PR #4260 under review)
4. On-demand version check feature in WebUI settings, eliminating unnecessary background PyPI polling
5. Fenced code block aware long message splitting logic, fixing broken markdown rendering across chat platforms

## 7. User Feedback Summary
Core user pain points collected in the 24-hour window:
- Multi-model users complain that global model switching is too clunky for frequent task type switching, leading to privacy leaks or wasted cloud computing costs
- Users running agents 24/7 report occasional unexpected behavior caused by cross-session context pollution, eroding their trust in memory reliability
- Early adopters of GPT-5.x custom endpoints cannot connect their self-hosted deployments to NanoBot at present
- Users using NanoBot for technical discussions note that long code blocks get split incorrectly across multiple message segments, breaking rendering
- New users praise the newly updated onboarding documentation, saying it drastically reduces the time they spend figuring out the correct setup process for their use case.

## 8. Backlog Watch
High-priority pending PRs/issues requiring urgent maintainer attention:
1. [PR #4119](https://github.com/HKUDS/nanobot/pull/4119) (created 2026-05-31): Security hardening PR that blocks relative symlink workspace escape attacks, critical for self-hosted agent deployment security, pending maintainer review for more than 10 days
2. [Issue #4061](https://github.com/HKUDS/nanobot/issues/4061) (created 2026-05-29): Tool call parsing bug for third-party OpenAI-compatible providers, no progress recorded for more than 10 days and blocks compatibility with a large number of niche local inference runtimes
3. [PR #4053](https://github.com/HKUDS/nanobot/pull/4053) (created 2026-05-29): Read-only protection for extra allowed directories, prevents the agent from accidentally modifying system or shared files outside the working directory, pending review for 12 days

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (nousresearch/hermes-agent) Daily Project Digest | 2026-06-10
---
## 1. Today's Overview
The Hermes Agent project saw steady high activity in the 24-hour reporting window, with 50 updated issues and 50 updated pull requests across CLI, desktop, gateway, and agent runtime components. This sprint is focused on resolving user-reported regressions introduced after the recent v0.15.2 release, alongside incremental feature iteration for remote self-hosted users. 4 total issues were closed alongside 7 merged/closed PRs, indicating strong throughput for critical bug fixes. Community engagement remains robust, with heavy feedback from power users running self-hosted, multi-profile, and local model deployments. No new stable releases were published today.

## 2. Releases
No new public releases were published for Hermes Agent on 2026-06-10. The latest available tagged release remains v0.15.2 (2026.5.29.2), as referenced in open update-related issue reports.

## 3. Project Progress
7 total PRs were merged or closed in the 24-hour window:
- Resolved desktop UI quality issues: PR #39377 fixed misaligned theme preview webview scrollbars, while PR #39322 eliminated unnecessary no-op chat message flushes that caused unwanted UI repaints in active sessions
- Critical P1 OpenRouter authentication bugs were fully resolved: The root cause for missing Authorization headers that broke all OpenRouter requests was patched, closing reports #42130 and its follow-up edge case #42835
- The legacy unaddressed vision tool failure bug (#5366) was marked as resolved after a recent runtime patch
- A duplicate post-compaction message loss report (#43062) was closed, with the fix for the core issue already merged to the main branch

## 4. Community Hot Topics
The most active, high-engagement items of the day reflect unmet core user needs for self-hosted deployments and cost optimization:
1. [Issue #10567: Add --host and CORS config for hermes dashboard to enable Tailscale/VPN access](https://github.com/NousResearch/hermes-agent/issues/10567) (8 comments, 11 upvotes): This is the top-voted open feature request, highlighting that a large segment of power users run Hermes on headless servers rather than local workstations, and the current hardcoded localhost-only binding blocks private remote access workflows.
2. [Issue #10674: Web Dashboard: multi-profile switching support](https://github.com/NousResearch/hermes-agent/issues/10674) (5 comments): Users running multiple agent profiles for different workloads report major UI friction compared to the CLI experience, creating demand for a unified dashboard to manage multiple active sessions.
3. [Issue #30652: Dynamic model routing based on task complexity](https://github.com/NousResearch/hermes-agent/issues/30652) (5 comments): Users want automatic routing of trivial low-latency tasks (e.g. weather queries) to small cheap models, and complex tasks (e.g. microservice design) to large high-performance models to cut cost and reduce unnecessary inference overhead.

## 5. Bugs & Stability (Ranked by Severity)
Newly reported bugs for the day are listed below, with fast community-led patch development already underway:
1. P1: [Issue #43083: Redacted credentials cause agent failures on second tool call](https://github.com/NousResearch/hermes-agent/issues/43083): After passwords are masked to `***` in conversation history, the agent cannot properly reference credentials on subsequent tool calls. No fix PR has been filed for this critical vulnerability-related bug yet.
2. P1: [Issue #43066: Context compaction loses assistant messages and merges user follow-ups](https://github.com/NousResearch/hermes-agent/issues/43066): Automatic or manual context compaction drops valid assistant replies from the persisted session history, breaking workflow continuity for long-running tasks.
3. P2: [Issue #38945: Desktop/TUI sessions do not reliably expose enabled MCP tools](https://github.com/NousResearch/hermes-agent/issues/38945): Configured MCP integrations (e.g. Todoist) work in CLI but fail to load for desktop users, creating parity gaps with competing agents like Claude Code.
4. Multiple low and medium severity UI bugs already have matching fix PRs filed the same day by the reporting users: the ignored Bedrock `bedrock.profile` config bug (#43143) has a ready PR #43139, and the desktop session inherited busy state bug (#43142) has a matching patch PR #43141.

## 6. Feature Requests & Roadmap Signals
High-priority user requests aligned with existing development work indicate these features are very likely to ship in the next two releases:
- Patch release v0.15.3 will almost certainly include the recently submitted Bedrock auth fix, MCP orphan process reaper safety patch, desktop UI state fixes, and TTS OpenAI instructions support, as all PRs for these items are already open and passing tests.
- The core dynamic per-task model routing feature requested in #30652 has two parallel active PRs (#43134, #36790) implementing per-task model overrides for the delegate tool, making this the flagship new feature for the v0.16.0 minor release.
- The top-voted remote dashboard access feature (#10567) will be prioritized for v0.16.0 as a core quality of life improvement for self-hosted users.

## 7. User Feedback Summary
Aggregated user feedback from the day shows 3 clear pain points and use case patterns:
1. A large and fast-growing share of users run Hermes on headless self-hosted instances, rather than local workstations, and the current hardcoded localhost dashboard binding is a major adoption barrier for this segment.
2. Migrating users coming from competing agents (OpenClaw, Claude Code) report consistent parity gaps: missing Bedrock `service_tier` support, unreliable MCP tool loading, and lack of configurable fallback provider chains create unnecessary migration friction.
3. Local model users (LM Studio, Ollama) report frequent UX breakages including unintended model preloading, TUI inference starvation, and broken auto-scroll on new messages. No widespread critical outages were reported for the day.
4. One unresponded open issue (#27266) claims Hermes' self-evolution system uses uncredited design elements from EvoMap's Evolver project, representing an ongoing open source attribution concern.

## 8. Backlog Watch
These high-impact long-unaddressed items require maintainer prioritization in upcoming sprints:
1. [Issue #27266: Request for EvoMap credit and public attribution](https://github.com/NousResearch/hermes-agent/issues/27266): Opened 2026-05-17, no official maintainer response posted as of today, despite 4 comments and 2 upvotes. This risks erosion of community trust around open source licensing norms.
2. [Issue #10567: Add --host and CORS config for remote dashboard access](https://github.com/NousResearch/hermes-agent/issues/10567): Opened 2026-04-15 (2 months old), no assigned developer or open PR despite 11 upvotes from self-hosted users.
3. [Issue #4726: Profile-scoped memory namespaces for multi-agent setups](https://github.com/NousResearch/hermes-agent/issues/4726): Opened 2026-04-03 (3 months old), no assigned maintainer. This foundational feature blocks enterprise adoption of multi-agent Hermes deployments with isolated workload memories.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Daily Project Digest | 2026-06-10
---
## 1. Today's Overview
PicoClaw recorded a very high-activity 24-hour period, with 40 total updated issues and pull requests, 1 new nightly build release, and coordinated public disclosure of 13 security advisories from a trusted external security researcher. Core development work was split evenly across three priority areas: long-pending user bug resolution, full-stack security hardening, and new ecosystem feature integration. Multiple previously stale bug fixes from community contributors were merged, while new contributions spanned documentation polish, edge-case stability improvements, and new third-party gateway and provider support. The project demonstrates strong open community health, with contributions submitted by 12+ independent developers alongside core maintainer work.

## 2. Releases
A new automated nightly build was published today:
- **v0.2.9-nightly.20260609.46b29a0a**: Unstable pre-release built directly from the main branch, for testing purposes only (not recommended for production deployments). It includes all changes committed between the stable v0.2.9 tag and current main HEAD, with full change logs available at: https://github.com/sipeed/picoclaw/compare/v0.2.9...main
No new stable releases were rolled out in the 24-hour window.

## 3. Project Progress
5 PRs were merged or closed successfully in the period, delivering the following key improvements:
1. Fixed compatibility for the latest Anthropic claude-opus-4.7 model (#2940, https://github.com/sipeed/picoclaw/pull/2940): The deprecated `temperature` parameter is now automatically omitted for this model, eliminating 100% request failure for Opus 4.7 calls.
2. Corrected the default claude-sonnet model ID typo (#2942, https://github.com/sipeed/picoclaw/pull/2942): Switched the seeded default entry from non-standard dotted format to Anthropic's official hyphenated canonical ID, so fresh launcher installs no longer fail on the first Anthropic API call.
3. Merged the first version of the Agent Collaboration Bus (#2937, https://github.com/sipeed/picoclaw/pull/2937): Introduced durable inter-agent communication with per-agent mailboxes, isolated collaboration threads, and permission-aware message delivery for native multi-agent workflows.
4. Fixed a critical unhandled panic in config migration (#3064, https://github.com/sipeed/picoclaw/pull/3064): Added type checking for model name indexing, preventing crashes caused by malformed user configuration entries.
5. Updated project documentation with the latest official WeChat community QR code (#3086, https://github.com/sipeed/picoclaw/pull/3086).

## 4. Community Hot Topics
The highest-engagement items in the 24-hour window are:
1. [Feature] Add config flag for native streaming LLM requests (#2404, https://github.com/sipeed/picoclaw/issues/2404): The longest-running active feature request, opened on 2026-04-07, with 11 comments and 1 thumbs up. 
   Underlying demand: Users deploying PicoClaw on low-resource Sipeed embedded hardware need to disable full LLM response buffering on the local edge device, to cut end-to-end response latency and avoid out-of-memory crashes for large context generations. Community members have already submitted partial implementation snippets, indicating high user interest for this functionality.
2. [Feature] Replace unmaintained libolm with official successor vodozemac (#3088, https://github.com/sipeed/picoclaw/issues/3088): A newly filed security hardening feature that received immediate community attention, as the current libolm dependency has not been updated for multiple years and carries unpatched known security risks.

## 5. Bugs & Stability
Newly reported and resolved issues are ranked by severity below:
1. **Critical (13 entries)**: 13 coordinated security advisories published by independent security researcher YLChen-007, covering vulnerabilities including SSRF bypasses, cross-channel auth bypasses, path traversal, and unauthenticated control plane takeover across core PicoClaw modules: https://github.com/sipeed/picoclaw/issues?q=label%3Asecurity+created%3A2026-06-09. Partial fixes (for the 198.18.0.0/15 SSRF bypass and launcher access control hardening) already have open PRs ready for review.
2. **High**: Resolved historical conversation display truncation bug (#2796, https://github.com/sipeed/picoclaw/issues/2796): Users could only view the last user message in multi-turn chat history. A complete fix PR (#2990) is open pending final review before merge.
3. **Medium**: Already resolved claude-opus-4.7 call failure bug (#2939, https://github.com/sipeed/picoclaw/issues/2939): No remaining open failure cases for Anthropic's latest model after the associated PR was merged.
4. **Minor**: Multiple edge case stability issues (unchecked type assertions, ignored error returns on temp file operations) all have corresponding open fix PRs submitted, no unresolved unhandled crash reports from production users.

## 6. Feature Requests & Roadmap Signals
Based on current contribution status and priority, the following features are highly likely to ship in upcoming releases:
1. The streaming LLM request configuration feature (#2404) will almost certainly land in the next v0.2.9 stable patch, as it has been discussed for 2 months with no core implementation blockers identified.
2. The libolm to vodozemac dependency migration (#3088) is a critical security hardening task, which will be prioritized for the v0.2.9 stable release to remove unmaintained unsafe code.
3. New ecosystem integrations (DeltaChat gateway #3063, NEAR AI Cloud provider #2917) are on track to ship as optional beta modules in the v0.3.0 minor release.
4. The explicit turn completion signal for Pico WebSocket clients (#2984) is a low-overhead protocol improvement that will likely be backported in the next stable patch to support third-party client development.

## 7. User Feedback Summary
Real user pain points and satisfaction trends observed in the 24-hour window:
1. The 1-month long unresolved historical conversation truncation bug was a top user complaint for mainland Chinese users, and the community expressed strong satisfaction after the root cause was identified and a formal fix PR submitted.
2. The 2-week long claude-opus-4.7 compatibility outage fully blocked usage for users on Anthropic's latest model, and users confirmed the service was fully restored after the relevant fix was merged.
3. The project's practice of public, responsible disclosure of coordinated security vulnerabilities received positive feedback from enterprise deployment users, as it demonstrates transparency that improves trust for production use cases.
4. Embedded edge deployment users repeatedly requested lower memory footprint optimizations, and the proposed streaming request feature aligns perfectly with their demand to avoid memory overload from full LLM response buffering on low-power hardware.

## 8. Backlog Watch
High-priority long-pending items requiring immediate maintainer attention:
1. Feature request #2404 (Add streaming LLM request config) is 2 months old, has 11 community comments, but no assigned maintainer to lead final implementation, despite clear strong user demand.
2. PR #2917 (Add NEAR AI Cloud provider) has been marked stale for 2 weeks, with no maintainer review submitted since it was opened on 2026-05-21, delaying a major new ecosystem integration.
3. Feature request #2984 (Add explicit turn completion signal for WebSocket clients) has only 1 comment since it was opened on 2026-06-02, no implementation progress updates, and blocks third-party client developers from building reliable PicoClaw integrations.
4. The full batch of 13 newly filed security advisories currently has 0 maintainer responses or triage notes, requiring immediate attention to assign tracking IDs and ship patches before public exploit disclosure.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-10
---
## 1. Today's Overview
This 24-hour reporting window shows exceptionally high development velocity for the NanoClaw AI agent project, with 43 total PRs updated, 39 of which were merged or moved to final pending closure status, alongside 1 updated active community issue and no new formal releases. The bulk of the day’s activity focused on clearing a multi-month backlog of in-development features, documentation, and security improvements, rather than adding unplanned new work. Project health remains very strong, with no newly reported critical regressions, and clear alignment between recent development output and long-standing community requests for more flexible self-hosting, modular customization, and production-grade observability. A small number of high-priority open PRs remain under active review for upcoming hardening and documentation rollouts.

## 2. Releases
No new official versions or pre-releases were published in the 24-hour reporting window.

## 3. Project Progress
The 39 merged/closed PRs processed today advanced 3 core areas of the project:
1.  **New core feature maturation**: Long-stalled PRs moved to pending final merge status including the full Lit+Vite WebUI control panel (runs on localhost:3100 with 11 operational tabs for chat, config, and session management, [PR #212](https://github.com/nanocoai/nanoclaw/pull/212)), non-Docker direct runner mode that eliminates container overhead for edge deployments ([PR #1285](https://github.com/nanocoai/nanoclaw/pull/1285)), full agent trace observability with a dedicated local dark-mode dashboard on port 3001 ([PR #1202](https://github.com/nanocoai/nanoclaw/pull/1202)), and the official Skill Marketplace registry system for one-click discovery and installation of community-contributed skills ([PR #1309](https://github.com/nanocoai/nanoclaw/pull/1309)).
2.  **Security and robustness additions**: A deterministic non-prompt-based security policy engine for user gating, tool restrictions, and read-only filesystem mounts was finalized ([PR #1605](https://github.com/nanocoai/nanoclaw/pull/1605)), alongside configurable prompt trace logging with sensitive data redaction ([PR #337](https://github.com/nanocoai/nanoclaw/pull/337)) and build-time version metadata injection for easier debugging ([PR #1333](https://github.com/nanocoai/nanoclaw/pull/1333)).
3.  **Documentation quality improvements**: A full public security audit report covering Trivy scan results and credential isolation findings was added, alongside dozens of updated JSDoc entries, CLAUDE.md customization examples, and the NanoClaw Container Sandbox System design reference.

## 4. Community Hot Topics
1.  **Multi-runtime agent SDK abstraction issue ([#1690](https://github.com/nanocoai/nanoclaw/issues/1690))**: The highest-engagement open item, with 4 comments and 3 upvotes, proposes building a modular runtime layer that supports Claude, OpenAI Codex, and local open-source models as swappable plugins following the existing popular channel integration pattern for Telegram/Slack. This reflects a strong underlying community need to move past the project’s current Claude-only dependency to support heterogeneous self-hosted deployments with low-cost or offline LLM options.
2.  **Telegram security fix PR ([#2722](https://github.com/nanocoai/nanoclaw/pull/2722))**: The high-priority open PR to patch predictable pairing codes via CSPRNG replacement is drawing early community attention from production operators concerned about unauthorized instance takeovers.
3.  **Customization skill guidelines docs PR ([#2721](https://github.com/nanocoai/nanoclaw/pull/2721))**: The new public documentation outlining how to structure customizations as modular skills addresses a long-running community pain point of merge conflicts during upstream repo updates.

## 5. Bugs & Stability
Only one newly confirmed high-severity bug was documented in the reporting window:
1.  **High severity**: Predictable Telegram pairing code generation via insecure `Math.random()` usage, which allows threat actors to brute-force registration codes and claim ownership of public self-hosted NanoClaw instances. A complete, tested fix switching to cryptographically secure `crypto.randomInt` is already available in open PR #2722, pending final review and merge.
No new crashes, medium/low severity regressions, or stability complaints were reported in the 24-hour window.

## 6. Feature Requests & Roadmap Signals
The top community request for multi-runtime LLM SDK abstraction from issue #1690 is positioned to become the flagship feature of the next minor 0.9.x release, as the project already has a proven modular plugin architecture for channels that can be adapted almost directly for runtime providers. Other near-certain inclusions for the next release are the skill marketplace, no-Docker direct runner mode, trace observability UI, and new customization documentation, all of which have been fully implemented and cleared for pending merge in today’s activity. The team appears to be prioritizing all self-hosting and operational quality-of-life features before adding new end-user functionality.

## 7. User Feedback Summary
Recent activity reflects three core verified user pain points: first, self-hosted users on edge devices or restricted networks cannot run mandatory Docker containers for agent execution, creating demand for the new direct runner mode. Second, non-technical users frequently modify core system prompts and configuration directly in the main repo, leading to constant merge conflicts when pulling upstream updates. Third, production operators lack sufficient audit logging and observability for agent execution, making it hard to trace unexpected behavior or comply with internal security policies. Overall user satisfaction is high, with the community noting appreciation for the maintainer team’s work to clear the 4-month backlog of requested features that were previously stuck in review queues.

## 8. Backlog Watch
Three high-impact items implemented months ago are marked as blocked/pending closure and only require final maintainer signoff to unblock the next release:
1.  The 4-month-old WebUI control panel PR #212, which is one of the most requested features for new users who prefer a visual interface over CLI-only management
2.  The prompt trace logging PR #337, which will enable full auditability for regulated industry deployments
3.  The external markdown persistence seed support PR #357, which makes it far easier for users to inject custom persistent context without editing internal configuration files
All three items have no outstanding open change requests, making them high-priority candidates for final review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest | 2026-06-10
---
## 1. Today's Overview
As of 2026-06-10, NullClaw saw high-productivity, low-friction development activity over the past 24 hours, with 4 out of 5 updated user-reported issues resolved and 6 out of 7 total updated pull requests merged or closed, no new official releases were published in this cycle. The maintainer and contributor team wrapped up multiple long-standing small-to-medium usability bugs across Telegram integration, third-party LLM provider handling, and PII redaction, while also landing the months-in-development cross-agent memory sync primitives. Only 1 active open production issue remains unpatched, related to scheduled cron job subprocess spawning, with no critical unaddressed regressions surfaced in the latest window. Overall project health is very strong, with a fast turnaround rate for user-submitted bug reports and feature contributions.

## 2. Releases
No new official versions or pre-releases were published in the past 24 hours.

## 3. Project Progress
Six total PRs were merged/closed over the 24h period, delivering the following functional improvements and fixes:
1. **#711 (Cross Memory)**: [https://github.com/nullclaw/nullclaw/pull/711](https://github.com/nullclaw/nullclaw/pull/711) The long-awaited cross-agent memory feature added a deterministic memory event stream, enabling seamless preference and context synchronization across separate NullClaw agent instances without disrupting existing single-agent workflows.
2. **#939 (Fix Dead compact_context Flag)**: [https://github.com/nullclaw/nullclaw/pull/939] Resolved the unused agent configuration flag issue, so the user-controlled `compact_context` toggle now correctly governs history compaction behavior instead of the system forcing unconditional compaction on every assistant turn.
3. **#940 (Custom OpenAI Provider Model Enumeration)**: [https://github.com/nullclaw/nullclaw/pull/940] Fixed model listing logic for custom OpenAI-compatible providers, so the system now dynamically queries the custom provider's `/v1/models` endpoint instead of falling back to a hardcoded list of Claude models.
4. **#943 (Telegram Callback Typing Indicator)**: [https://github.com/nullclaw/nullclaw/pull/943] Added the missing "typing…" loading state for Telegram inline button (callback_query) interactions, matching the existing behavior for regular text messages.
5. **#945 (PII Redaction False Positive Fix)**: [https://github.com/nullclaw/nullclaw/pull/945] Added a date pattern guard to the PII redaction module, preventing ISO 8601 timestamps from system command output (e.g. runs of the `date` utility) from being incorrectly redacted as phone numbers.
6. **#947 (Evolink Provider Support)**: [https://github.com/nullclaw/nullclaw/pull/947] Added first-class native support for the Evolink multi-model gateway, giving users one-click access to GPT-5, Gemini, DeepSeek, Doubao, MiniMax and other popular models via a single OpenAI-compatible endpoint.

## 4. Community Hot Topics
The two most actively discussed recent items reflect core user priorities for the project:
1. **PR #711 Cross Memory**: [https://github.com/nullclaw/nullclaw/pull/711] After 2.5 months of community iteration, this feature landed to massive positive feedback. Underlying user demand comes from the large segment of NullClaw users running multi-agent personal assistant ecosystems across mobile, desktop and self-hosted devices, who previously had to manually restate personal preferences for every separate agent instance.
2. **Issue #936 Custom OpenAI Provider Fallback Bug**: [https://github.com/nullclaw/nullclaw/issues/936] This fix was one of the most requested changes from the project's self-hosted power user base, who run local LLM deployments and third-party model gateways that do not follow Anthropic's model naming conventions.

## 5. Bugs & Stability
No new crashes or zero-day critical regressions were reported in the 24h window. Remaining bugs are ranked by severity below:
1. **High Severity (Unpatched)**: Issue #941 Agent-type cron jobs don't spawn subprocesses: [https://github.com/nullclaw/nullclaw/issues/941] Scheduled agent tasks configured for Telegram delivery mark as completed but never spawn a subprocess or send output to Telegram, breaking core scheduled automation functionality. No corresponding fix PR has been filed yet.
2. **Medium Severity (Fully Resolved)**: Issue #936 (custom OpenAI provider hardcoded model list fallback) fixed via PR #940; Issue #944 (PII redactor false positive timestamp matching) fixed via PR #945.
3. **Low Severity (Fully Resolved)**: Issue #942 (Telegram missing typing indicator for inline buttons) fixed via PR #943; Issue #937 (unused dead `compact_context` config flag) fixed via PR #939.

## 6. Feature Requests & Roadmap Signals
Based on current merged and in-progress work, the next minor release is very likely to include the following high-priority changes:
- The nearly finalized open PR #946 (system prompt tool filtering by `tool_filter_groups`): [https://github.com/nullclaw/nullclaw/pull/946] will reduce unnecessary token usage by excluding irrelevant dynamic-group MCP tools from text-based system prompts, a top request from users working with large numbers of custom MCP tools.
- A patch for the high-severity unpatched cron job subprocess bug #941 will ship as a priority fix for scheduled automation users.
- User-facing controls for the newly landed cross-agent memory sync feature will be rolled out, as maintainers finalize the primitives delivered in PR #711.

## 7. User Feedback Summary
Collected user pain points and satisfaction signals from recent updates include:
- Power users running custom LLM gateways reported high frustration about the broken dynamic model enumeration behavior, and expressed strong satisfaction once the #936 bug was resolved.
- Daily workflow users who run system commands to pull timestamps and system info noted that the broken PII redaction of dates was a frequent disruptive annoyance, which is now fully eliminated.
- Telegram UI users previously reported uncertainty about whether their inline button selections had registered due to the missing typing indicator, which is now resolved to create a more responsive app experience.
- The community is broadly enthusiastic about the new cross-memory feature, as it removes one of the biggest remaining pain points for multi-device personal assistant deployments.

## 8. Backlog Watch
The only high-priority unaddressed backlog item requiring immediate maintainer attention is Issue #941 (agent-type cron job subprocess spawning failure): [https://github.com/nullclaw/nullclaw/issues/941] The bug was first opened on 2026-05-31, and has not yet been assigned to a contributor or linked to a work-in-progress fix PR, despite breaking core scheduled functionality. All other recent issues and PRs have been resolved, and the open in-progress PR #946 is actively being reviewed, with no other stale long-running unaddressed items in the current backlog.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-10 Project Digest
---
## 1. Today's Overview
The IronClaw project recorded very high development activity over the past 24 hours, with 45 updated issues and 50 updated pull requests, as the core team accelerates toward Reborn stack production cutover. Almost all active work is focused on three priority tracks: full production readiness for the M4 host kernel, completion of end-to-end testing for Reborn WebUI v2, and resolution of LLM provider compatibility gaps. 5 issues were closed and 13 PRs were merged in the window, with no critical regressions reported, indicating strong project health as the team hits pre-launch milestones. The open P0 production cutover epic (Issue #3026) is making steady incremental progress, with no outstanding unplanned delays flagged.

## 2. Releases
No new public releases were published in the last 24 hours. The long-running full release PR ([#3708](https://github.com/nearai/ironclaw/pull/3708)) remains open, tracking version bumps across core crates: `ironclaw_common` (0.4.2 → 0.5.0, breaking changes), `ironclaw_skills` (0.3.0 → 0.4.0, breaking changes) and the main `ironclaw` crate (0.24.0 → 0.29.1). The PR is awaiting final validation of Reborn production functionality before publishing.

## 3. Project Progress
13 total PRs and 5 issues were closed/merged in the past 24 hours, delivering the following high-impact advancements:
- The [PR #4645](https://github.com/nearai/ironclaw/pull/4645) (Make Reborn production runtime launchable) was merged, wiring full libSQL/Postgres support into the Reborn runtime and enabling teams to run the production-grade stack for the first time.
- Closed issue [#4604](https://github.com/nearai/ironclaw/issues/4604) delivered the missing full browser-driven E2E test suite for Reborn WebUI v2, completing the test coverage gap that previously skipped real end-user runtime validation.
- Closed issue [#4609](https://github.com/nearai/ironclaw/issues/4609) finished full auth parity testing for WebChat v2, covering bearer, DB, OIDC and query-token authentication paths.
- Closed issue [#4591](https://github.com/nearai/ironclaw/issues/4591) landed the shared operator command plane foundation for Reborn, unblocking all follow-up setup, configuration and diagnostic tooling work.
- Closed issues [#4446](https://github.com/nearai/ironclaw/issues/4446) and [#4447](https://github.com/nearai/ironclaw/issues/4447) completed the OpenAI-compatible API migration, adding SSE streaming support and final compatibility/security validation.

## 4. Community Hot Topics
The top active items sorted by comment volume:
1. [#3026](https://github.com/nearai/ironclaw/issues/3026) P0 Epic: Reborn production wiring and cutover readiness (3 comments)
   * Analysis: This cross-functional epic is the single highest priority for the core team, and ongoing discussion is focused on aligning requirements across engineering, DevOps and product teams to de-risk the production launch and prevent partial invalid deployments from serving user traffic.
2. [#4642](https://github.com/nearai/ironclaw/issues/4642) Bug: Strict-mode providers' null-for-unset-optionals rejected by capability-port validation (1 comment)
   * Analysis: The team is actively triaging a bug that breaks almost all first-party tool calls for widely used strict-schema LLM providers, with high visibility from both internal developers and external users.
3. [#88](https://github.com/nearai/ironclaw/issues/88) Feature: Security hardening (device pairing, elevated mode, safe bins, media URL validation) (1 comment)
   * Analysis: A months-old security feature epic received renewed attention yesterday, indicating the team is prioritizing safety guardrails before launching public multi-tenant deployments.

## 5. Bugs & Stability
Reported bugs ranked by user impact severity, no fully resolved fixes published as of today:
1. Critical severity: [#4642](https://github.com/nearai/ironclaw/issues/4642) Strict-mode LLM provider tool call validation failures, affects nearly all first-party tool usage for models that return null for unset optional parameters. No public fix PR is linked yet.
2. High severity: [#4548](https://github.com/nearai/ironclaw/issues/4548) Duplicate `model` field serialization in tool-enabled chat requests returns 400 errors for DeepSeek users, blocking all agent workflows using DeepSeek models with tools.
3. High severity: [#4587](https://github.com/nearai/ironclaw/issues/4587) Minimax provider configuration failure, the entire Minimax LLM integration is non-functional for end users.
4. Medium severity: [#4640](https://github.com/nearai/ironclaw/issues/4640) Google Calendar `list_events` returns unordered historical events instead of upcoming meetings, breaking GSuite calendar scheduling use cases.
5. Medium severity: [#4585](https://github.com/nearai/ironclaw/issues/4585) Auth evidence missing tenant identity, blocks full tenant-aware permission validation for multi-tenant deployments, with partial fix coverage in linked ongoing auth PRs.

## 6. Feature Requests & Roadmap Signals
Newly filed feature requests that align with the team's roadmap, with predicted release timelines:
1. [#4628](https://github.com/nearai/ironclaw/issues/4628) Admin-shared tools and skills with per-user auth: Marked P1 high-priority for multi-tenant deployments, this feature will almost certainly ship in the next production RC build before public launch.
2. [#4657](https://github.com/nearai/ironclaw/issues/4657) Unify reusable Google OAuth credentials across GSuite scopes: Targeted for the post-beta minor release to remove redundant repeated auth prompts for GSuite users.
3. [#4647](https://github.com/nearai/ironclaw/issues/4647) Unified omni-search across threads, skills, extensions and memory: Scheduled for the WebUI v2 beta refresh to resolve current fragmented search UX.
4. [#4625](https://github.com/nearai/ironclaw/issues/4625) Slack channel-routed personal and team agents: Expected to land in the 0.30 release after core Reborn platform stability is fully confirmed.

## 7. User Feedback Summary
Recent user pain points and use cases collected from issue reports:
- Regional users relying on the Minimax LLM provider reported full configuration failures, a major blocking issue for teams in mainland China who cannot switch to alternative provider APIs.
- DeepSeek users with tool-reliant agent workflows reported that all their calls are failing with HTTP 400 errors, preventing them from using the platform for day-to-day tasks.
- GSuite end users complained about repeated redundant OAuth auth prompts for different Google capabilities after a single initial login, hurting UX and reducing adoption for productivity use cases.
- Existing v1 stack users migrating to Reborn reported that all attachments are silently dropped in transit, breaking their existing file handling workflows.

## 8. Backlog Watch
Long-running high-priority items requiring immediate maintainer attention:
1. [#88](https://github.com/nearai/ironclaw/issues/88) Security hardening epic: Open since 2026-02-14 (over 4 months), this issue covers all unshipped production security features including device pairing, elevated permission controls and media URL validation. It is a required pre-requisite for public multi-tenant launch, and risks delaying the full production release if not prioritized in the next two weeks.
2. [#3708](https://github.com/nearai/ironclaw/pull/3708) Official release PR: Open since 2026-05-16 (almost 1 month), this full version bump for core crates is blocked waiting for final breaking change validation, and is preventing external contributors from accessing new stable Reborn features via public crate releases. Final maintainer review is needed to unblock publishing.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Daily Project Digest | 2026-06-10
*Source: Netease Youdao LobsterAI open-source repository public activity data*

---
## 1. Today's Overview
The 24-hour tracking window ending 2026-06-10 recorded steady, high-efficiency iteration velocity for the LobsterAI open-source AI agent framework. The project processed 5 total pull requests, filed 2 new community issues, and published no new official releases, with an 80% merge/close rate for submitted PRs that demonstrates responsive maintainer triage and active feature delivery. All newly submitted community feedback focuses on advanced multi-agent and cross-model workflow functionality, indicating that LobsterAI’s user base is rapidly evolving from basic usage to building complex, custom heterogeneous AI pipelines. No critical crashes, zero-day vulnerabilities, or unresolved regression incidents were logged over the past day, reflecting overall strong project health.

## 2. Releases
No new stable, pre-release, or patch versions of LobsterAI were published in the tracking period.

## 3. Project Progress
A total of 4 pull requests were merged or closed in the past 24 hours, delivering two core feature streams for end users:
- [PR #2130](https://github.com/netease-youdao/LobsterAI/pull/2130): Full implementation of privacy-first task completion notifications for the Cowork collaboration module. The feature adds a configurable settings toggle, renders system alerts without exposing sensitive task content, and supports macOS Dock badge counts and Windows taskbar prompt indicators for background sessions.
- [PR #2134](https://github.com/netease-youdao/LobsterAI/pull/2134): Critical optimization for the new notification system, adding logic to restore LobsterAI directly from task alerts even if the main window was fully closed, a pre-load sequence to eliminate session opening failures, and persistent notification references to ensure macOS Notification Center click actions work as expected.
- [PR #2135](https://github.com/netease-youdao/LobsterAI/pull/2135): Temporary disable of the in-development data backup functionality to unblock stable build pipelines while remaining edge cases for the feature are resolved.
- [PR #2136](https://github.com/netease-youdao/LobsterAI/pull/2136): Close of the initial draft PR for the end-to-end data backup and migration feature, with core implementation verified and pending follow-up testing before re-submission.

## 4. Community Hot Topics
All 2 newly filed community issues focus on high-priority advanced functionality, reflecting clear alignment between user demand and the project’s long-term roadmap:
- [Issue #2131](https://github.com/netease-youdao/LobsterAI/issues/2131) (1 comment, highest engagement): User submitted a formal request for official Hermes Agent support. This request signals strong underlying demand for LobsterAI to integrate with mainstream open specialized agent ecosystems, reducing adaptation overhead for developers who have already built production workflows on third-party agent frameworks.
- [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132): A detailed power-user proposal for cross-model sub-task collaboration, which includes a concrete, actionable implementation framework for state synchronization between main tasks running on planning-specialized models and sub-tasks running on execution-optimized models.

## 5. Bugs & Stability
Bugs reported in the past 24 hours are ranked by severity below:
1. **High Severity**: Cross-model sub-task dispatch bug logged in [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132), where gateway-level function calls are excluded from both the active sessions list and child agent tracking list, breaking state synchronization for mixed-model multi-agent workflows. No corresponding fix PR has been opened as of this digest.
2. **Medium Severity**: Export and code copy functionality bugs, addressed by the pending review open PR [PR #2133](https://github.com/netease-youdao/LobsterAI/pull/2133). The fix implementation is already completed and queued for maintainer triage.
No trivial low-severity bug reports were submitted in the tracking window.

## 6. Feature Requests & Roadmap Signals
The two user-submitted feature requests provide clear signals for the project’s near-term iteration priorities:
- The fully implemented task completion notification feature is almost guaranteed to ship in the next minor release of LobsterAI.
- The in-development data backup and migration feature will be prioritized for the subsequent release once remaining edge case testing is finished.
- The cross-model sub-task active notification optimization proposed in [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132) is a high-priority item that will likely be scheduled for the next 2-3 development iterations.
- Hermes Agent support will most likely be launched first as an optional third-party plugin to validate user demand before being merged into the core codebase.

## 7. User Feedback Summary
Real user feedback collected in the past 24 hours covers clear pain points and high satisfaction indicators:
- Top recorded pain point: Power users running complex heterogeneous model workflows face broken state synchronization between main and sub-tasks, leading to failed handoffs and lost work progress.
- Previously unaddressed pain point eliminated recently: Users who ran long-running Cowork sessions in the background previously had to manually check the application window for task completion, a workflow friction fully resolved by the newly merged notification system.
- Overall satisfaction indicator: No negative feedback on core existing functionality was submitted, and users are actively exploring extended ecosystem integration for LobsterAI, signaling high approval of the project’s current base capabilities.

## 8. Backlog Watch
No long-unresolved aged issues or PRs requiring urgent maintainer intervention were identified in this tracking window. All newly submitted entries are less than 24 hours old, and the only open in-progress PR [PR #2133](https://github.com/netease-youdao/LobsterAI/pull/2133) is already queued for review, indicating the maintainer team is managing the project backlog very efficiently.

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

# CoPaw Project Daily Digest | 2026-06-10
*Repository: [agentscope-ai/CoPaw (formerly QwenPaw)](https://github.com/agentscope-ai/QwenPaw)*

---

## 1. Today's Overview
The CoPaw project maintained high development velocity on 2026-06-10, with 34 updated issues and 34 updated pull requests tracked in the 24-hour window. 53% of recently active issues (18/34) were closed or resolved, alongside a 47% merge rate for updated PRs (16/34), demonstrating strong maintainer throughput. A new pre-release 1.1.11-beta.2 was launched to roll out incremental browser control features and critical cross-model compatibility fixes. Community engagement was particularly active around core architecture upgrade discussions and proposals to reference top industry agent frameworks, reflecting aligned priorities between users and the development team. Overall project health is rated excellent, with no unaddressed critical outages reported in the last day.

## 2. Releases
A new pre-release version [1.1.11-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11-beta.2) was published today, with no breaking changes introduced:
1. New feature: Added page coordinate click support for the `browser_control` module, enabling pixel-level precise automation operations for browser tasks
2. Bug fix: Added configurable CDP timeout parameter and isolated browser profile logic to resolve data contamination issues during cross-browser instance switching
This pre-release serves as a public test build for the upcoming stable 1.1.11 official release.

## 3. Project Progress
Key merged/closed PRs in the last 24 hours include:
- Core capability upgrades: Merged [PR#5043](https://github.com/agentscope-ai/QwenPaw/pull/5043) to add OpenSandbox MCP plugin integration for isolated untrusted code execution; merged [PR#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857) to launch the enhanced self-evolving skill creation flow that supports background execution of skill generation tasks; merged [PR#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049) for zero-config free model access and 1-click OAuth authentication for commercial model providers
- Critical bug fixes: Merged [PR#5021](https://github.com/agentscope-ai/QwenPaw/pull/5021) to resolve the `/compact` command ignoring custom model max input length issue; merged [PR#5048](https://github.com/agentscope-ai/QwenPaw/pull/5048) to fix unawaited coroutine exceptions in the agent broadcast logic
- CI/DevOps optimization: Merged [PR#5056](https://github.com/agentscope-ai/QwenPaw/pull/5056) to remove redundant duplicate channel test workflows and reduce unnecessary CI resource consumption; merged [PR#5054](https://github.com/agentscope-ai/QwenPaw/pull/5054) to complete the full E2E Playwright integration pipeline with end-to-end code coverage reporting
- UX polish: Merged [PR#5050](https://github.com/agentscope-ai/QwenPaw/pull/5050) to replace the ambiguous "follow system theme" icon for clearer user interaction.

## 4. Community Hot Topics
The most active discussions of the day, sorted by interaction volume:
1. [Issue#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) (10 comments, 3 👍): User proposal for CoPaw to reference Hermes Agent's industry-leading "learning loop" feature to support automatic iteration of skills from agent historical behavior. Underlying user demand: Power users expect CoPaw to evolve beyond static pre-defined tool sets to deliver self-improving agent capabilities that reduce manual skill configuration overhead.
2. [Issue#5003](https://github.com/agentscope-ai/QwenPaw/issues/5003) (8 comments): Bug report that agents get stuck permanently when using Alibaba Cloud Coding Plan's `qwen3.7-plus` model. This discussion attracted large participation from enterprise users accessing Alibaba's domestic model services, highlighting the high priority of domestic Chinese model ecosystem compatibility.
3. [Issue#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) (7 comments, 2 👍): Public tracking issue for the backend migration from AgentScope 1.x to AgentScope 2.0. The active community follow-up reflects widespread user anticipation for the new architecture's performance and capability upgrades.

## 5. Bugs & Stability
Reported issues are ranked by severity below:
1. **Critical**: [Issue#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) - Duplicate session ID in file names causes Windows MAX_PATH overflow and task execution failure. A fix PR [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) is already open and under review.
2. **High**: 3 unresolved high-severity regressions: Local vLLM-deployed Qwen 3.6-27B returns no response after user submission ([Issue#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)); Windows desktop edition suffers from severe CPU spikes and UI lag when running background tasks ([Issue#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015)); WeChat channel returns duplicate replies after enabling active mode ([Issue#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030)).
3. **Medium**: Tauri desktop edition cannot open external links or download files ([Issue#5044](https://github.com/agentscope-ai/QwenPaw/issues/5044)), fix candidate code has been submitted.
Notably, all widely impacting MCP tool naming violations that broke DeepSeek and GPT-5 API calls have been fully resolved in merged patches.

## 6. Feature Requests & Roadmap Signals
Highly requested features from users, with release timeline predictions:
- Imminent for 1.1.11 stable release: Standalone visual model fallback support ([Issue#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)), simplified sidebar conversation management UX ([Issue#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971)), which are already in late development stage and aligned with existing roadmap priorities.
- Planned for 1.2.0 milestone: Self-evolving layered memory system ([Issue#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994)), built-in Langfuse/OpenTelemetry observability integration ([Issue#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009)), which will be prioritized after the AgentScope 2.0 migration work is completed.

## 7. User Feedback Summary
- **Positive feedback**: Multiple users praised CoPaw's industry-leading local deployment experience for Chinese users, noting that its zero-threshold setup, native domestic model adaptation and fully localized operation far outperform international open source agent frameworks.
- **Universal pain points**: Frequent cross-version regression bugs for locally self-hosted vLLM model instances; Tauri Windows desktop edition lacks sufficient polish for production use; existing memory systems do not support long-running task context iteration.
- **Representative real-world use cases**: Enterprise private agent deployment connected to internal DingTalk/WeChat channels, consumer GPU local code assistant workflows, large-scale browser automation for data collection tasks.

## 8. Backlog Watch
High-priority long-running items requiring maintainer attention:
1. [Issue#2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) (created 2026-04-01): GPT-5.x models fail with hardcoded model list and invalid max_tokens parameter error, no public update for over 2 months, which blocks users relying on the latest OpenAI model ecosystem.
2. Unmerged PR [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) (created 2026-05-25): Tauri desktop auto-updater feature, waiting for final review, which will solve the very painful manual update experience for all desktop users.
3. The ongoing AgentScope 2.0 migration work tracked by [Issue#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) needs more resource allocation to clear remaining breaking changes, as it unblocks nearly 20 pending feature proposals from the community.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-06-10
---
## 1. Today's Overview
ZeroClaw recorded very high active development velocity over the past 24 hours, with 100 total updated artifacts across 50 issues and 50 pull requests, as the team converges on bug fixes and feature polishing ahead of the v0.8.0 stable release. Only 1 issue and 1 PR were closed/merged in the window, indicating the majority of current work is focused on active code review and iteration on high-priority stability and security features. The project’s activity is dominated by core runtime improvements, multi-channel integration hardening, and enterprise-grade security feature development. No major outages or widespread critical regressions were reported, showing stable overall project health.

## 2. Releases
No new official releases were published in the 24-hour reporting window, with all active development ongoing against the `master` branch targeting the upcoming v0.8.0 stable milestone.

## 3. Project Progress
Only one merged/closed change landed in the reporting window:
- PR #7425 authored by garacio ([https://github.com/zeroclaw-labs/zeroclaw/pull/7425](https://github.com/zeroclaw-labs/zeroclaw/pull/7425)) resolved a critical silent cost tracking failure for channel agent deployments. The prior bug caused all channel cost calculations to return `$0 USD` and completely disabled per-day budget enforcement. The fix adds a bare-type fallback lookup to the provider pricing map to restore correct, accurate cost tracking across all supported channels.
All remaining 49 active PRs remain in open review status, covering new multi-channel integrations, runtime logic fixes, web dashboard feature additions, and security hardening changes.

## 4. Community Hot Topics
The most active, highly discussed items (ranked by comment count) reflect strong alignment between community contributors and core development priorities:
1. **Issue #5862 ([https://github.com/zeroclaw-labs/zeroclaw/issues/5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862))**: 12 comments, tracking the bug where the agent is unaware of its native built-in `zeroclaw cron` scheduling tool. The underlying community need here is improved native discoverability of out-of-the-box tooling, to eliminate the need for explicit user prompting to access core platform capabilities.
2. **Issue #5937 ([https://github.com/zeroclaw-labs/zeroclaw/issues/5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937))**: 10 comments, for a planned refactor to unify the providers architecture and reqwest client management. Contributors are pushing to eliminate widespread code duplication across the fast-growing provider ecosystem, reduce maintenance overhead, and cut down on unrelated regressions from fragmented implementation logic.
3. **Issue #5982 ([https://github.com/zeroclaw-labs/zeroclaw/issues/5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982))**: 9 comments, tracking the proposed per-sender RBAC feature for multi-tenant deployments. Multiple enterprise operators are requesting this feature to avoid needing to spin up separate dedicated ZeroClaw instances for different user groups (customers, internal operators, developers).

## 5. Bugs & Stability
Bugs are ranked by severity per the project’s classification framework:
- **S1 (Workflow Blocked, p1)**:
  1. #5844 ([https://github.com/zeroclaw-labs/zeroclaw/issues/5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)): Agents overprioritize stored long-term memory over current user prompts, breaking execution reliability for cron jobs. No fix PR tracked to date.
  2. #6034 ([https://github.com/zeroclaw-labs/zeroclaw/issues/6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)): Custom OpenAI-compatible providers lose user message content in both single and multi-turn conversations, returning unretriable 400 errors. No public fix PR available.
  3. #5808 ([https://github.com/zeroclaw-labs/zeroclaw/issues/5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)): The default 32k context budget is exceeded immediately on the first conversation turn by system prompts + default tool definitions, triggering perpetual unnecessary history trimming. Fix PR #7440 is open and in review to resolve the futile trim logic.
  4. #6646 ([https://github.com/zeroclaw-labs/zeroclaw/issues/6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)): The web search and web fetch tools fail to trigger when using the Telegram channel on v0.7.5. Fix PR #7438 is open, adjusting the Telegram-specific system prompt to stop incorrectly discouraging the model from using tools.
- **S2 (Degraded Behavior, p2)**:
  1. #6584 ([https://github.com/zeroclaw-labs/zeroclaw/issues/6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584)): OpenAI-compatible providers ignore the standardized `reasoning` field from reasoning model backends like OpenRouter and vLLM, only parsing the non-standard `reasoning_content` field.
  2. #7376 ([https://github.com/zeroclaw-labs/zeroclaw/issues/7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376)): The Zerocode TUI dashboard hides error and unavailable states, and incorrectly labels completed historical sessions as active.
- **S3 (Minor, p3)**:
  1. #7378 ([https://github.com/zeroclaw-labs/zeroclaw/issues/7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378)): On macOS, the Cmd+C copy shortcut in the Zerocode TUI incorrectly triggers the full application quit action.

## 6. Feature Requests & Roadmap Signals
High-priority feature requests that are highly likely to land in upcoming releases:
1. The RFC #7415 to unify the 3 duplicated, divergent agent turn engine implementations ([https://github.com/zeroclaw-labs/zeroclaw/issues/7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)) is a core architecture improvement, almost guaranteed to be included in the v0.8.0 stable release to eliminate unprotected unmaintained code paths.
2. Large batches of new integrations already implemented in open PRs (5 SMS provider channels, 4 social/polling chat channels, 5 smart home built-in tools for Home Assistant, Hue, Spotify and others) are tracked as high-priority roadmap items, and will almost certainly ship in the next minor feature release after v0.8.0.
3. The enterprise hardening features for per-skill scoped security permissions and subprocess memory limits for shell execution, currently under active discussion, will likely be rolled out as part of the v0.8.0 security update for shared multi-user deployments.

## 7. User Feedback Summary
The majority of recent user submissions come from self-hosted hobbyists and small enterprise operators:
- The top pain point reported is inconsistent workflow reliability for users running local custom OpenAI-compatible models (such as Qwen 3.5/3.6), with repeated issues of lost user messages, unnecessary context trimming, and tools failing to trigger over third-party chat channels.
- Enterprise users express strong dissatisfaction with the current global security permission model, which requires overly broad shell/script execution access even for low-risk skills, creating unacceptable security gaps for shared team deployments.
- macOS users of the Zerocode TUI terminal dashboard report multiple unpolished quality-of-life bugs with keyboard shortcuts, theme rendering, and locale settings that reduce daily usability of the no-code admin interface.

## 8. Backlog Watch
High-value long-open items needing maintainer attention to unblock ecosystem progress:
1. Issue #4853 ([https://github.com/zeroclaw-labs/zeroclaw/issues/4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)): Opened 2026-03-27, tagged `help wanted`, requesting support for installing skills from the standardized `.well-known` Agent Skills URI. No linked implementation PR exists 2+ months after creation, and this feature would unlock full interoperability with the cross-project open skills ecosystem.
2. Issue #5982 ([https://github.com/zeroclaw-labs/zeroclaw/issues/5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)): Opened 2026-04-22, per-sender multi-tenant RBAC, has been marked blocked with `needs-author-action` for over 6 weeks, with multiple enterprise users requesting status updates. Unblocking this item is critical to expanding the project’s enterprise user base.
3. Issue #5775 ([https://github.com/zeroclaw-labs/zeroclaw/issues/5775](https://github.com/zeroclaw-l

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*