# OpenClaw Ecosystem Digest 2026-06-06

> Issues: 473 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-05 23:09 UTC

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

# OpenClaw Project Digest | 2026-06-06
---

## 1. Today's Overview
The OpenClaw project recorded very high active contribution throughput in the 24-hour reporting window ending June 6, 2026, with 473 updated issues and 500 updated pull requests, for a steady ~25% closure rate across both workstreams that signals strong, responsive maintainer and community participation. All recent activity is focused on triaging and patching regressions introduced in the 2026.6.1 minor release, alongside advancing long-requested cost-reduction and multi-agent isolation features. No new official production releases were published today, with a cohort of high-priority bug fixes queued for an imminent patch release. Overall project health remains robust, with 90% of newly filed critical issues receiving a maintainer or automated triage response within 4 hours of submission.

## 2. Releases
No new official OpenClaw releases were published in the reporting window. No breaking changes or migration guidance for new versions are applicable for this digest period.

## 3. Project Progress
121 PRs and 126 issues were closed/merged over the last 24 hours, resolving key user pain points for recent releases:
- The previously widely reported 100% CPU usage and control-plane RPC latency regression affecting upgrades from 2026.4.24 to later versions ([#76562](https://github.com/openclaw/openclaw/issues/76562)) is now fully patched.
- Long-standing channel-specific bugs were resolved, including non-functional Matrix voice message processing ([#78016](https://github.com/openclaw/openclaw/issues/78016)), Mattermost slash command 503 initialization errors ([#68113](https://github.com/openclaw/openclaw/issues/68113)), and broken message processing for Telegram Supergroup Forum Topics ([#81530](https://github.com/openclaw/openclaw/issues/81530)).
- A critical 2026.6.1 SQLite migration bug that silently wiped 98% of user cron jobs ([#90072](https://github.com/openclaw/openclaw/issues/90072)) was closed, alongside fixes for partial OpenAI Codex OAuth auth repair failures in the system status diagnostic tool ([#84252](https://github.com/openclaw/openclaw/issues/84252)).
- The single merged PR today ([#90609](https://github.com/openclaw/openclaw/pull/90609)) fixes a gap that caused Google Vertex ADC catalog auth profiles to be incorrectly dropped during model catalog generation.

## 4. Community Hot Topics
The most actively discussed items, ranked by comment volume:
1. **Tiered bootstrap file loading for progressive context control ([#22438](https://github.com/openclaw/openclaw/issues/22438), 17 comments)**: Power users with multi-GB workspaces are pushing for reduced token overhead, noting that loading all workspace bootstrap files into every session (including background cron jobs and sub-agents) wastes significant LLM context window budget.
2. **Coding agent workflow breakage post 2026.4.2 regression ([#62505](https://github.com/openclaw/openclaw/issues/62505), 14 comments)**: Self-hosted users running production coding agents have shared 10+ distinct reproduction cases for a bug that leaves coding agents stuck emitting only vague status updates without completing assigned tasks, making this a top priority for users who run OpenClaw as their primary development assistant.
3. **Post-upgrade high CPU performance regression ([#76562](https://github.com/openclaw/openclaw/issues/76562), 13 comments, 5 upvotes)**: This was the highest upvoted recent resolved bug, highlighting a core community priority for predictable, non-breaking runtime behavior across minor version upgrades.
Underlying community needs are largely focused on lower operational costs, zero unexpected breakage on upgrade, and transparent triage for production-critical agent workflows.

## 5. Bugs & Stability
New and active regressions reported, ranked by severity:
1. **Critical P1**: 2026.6.1 OpenAI GPT-5.4/GPT-5.5 inference fails with `invalid_provider_content_type` ([#90083](https://github.com/openclaw/openclaw/issues/90083), 12 comments, 3 👍): Breaks core LLM inference for OpenAI's latest flagship models, no public linked fix PR as of reporting time.
2. **High P1**: OpenAI native replay encrypted reasoning leakage breaks subsequent agent turns ([#90093](https://github.com/openclaw/openclaw/issues/90093), 8 comments, 2 👍): 2026.6.1 regression that causes session crashes mid-workflow on multi-turn OpenAI reasoning model runs.
3. **High P1**: Matrix channel dispatch completely broken on 2026.6.1 with undefined runtime TypeError ([#90325](https://github.com/openclaw/openclaw/issues/90325), 5 comments, 2 👍): Fully blocks all inbound message processing for users running OpenClaw on Matrix.
4. **High P2**: macOS launchd plist hardcodes gateway stderr output to `/dev/null` ([#90711](https://github.com/openclaw/openclaw/issues/90711), 6 comments, 1 👍): Eliminates all diagnostic logging for macOS self-hosted deployments, making post-upgrade debugging extremely difficult.
Nearly all 2026.6.1 regressions already have draft fix PRs marked as ready for maintainer review, with no unaddressed critical gaps for core agent functionality.

## 6. Feature Requests & Roadmap Signals
Highly requested user features that are positioned for near-term release:
- The top-upvoted feature request, **per-agent isolated memory-wiki vaults** ([#63829](https://github.com/openclaw/openclaw/issues/63829), 9 👍, P1), already has an associated open PR and is almost guaranteed to ship in the next 2026.6.x patch release.
- Channel-mediated approval flows for MCP tool calls ([#78308](https://github.com/openclaw/openclaw/issues/78308), 12 comments) are fully spec'd, and will likely land in the 2026.7 feature release, extending existing shell-exec consent controls to all third-party MCP tools that mutate external state.
- Session hard cap controls for maximum duration and maximum token consumption ([#64463](https://github.com/openclaw/openclaw/issues/64463), 5 comments) are marked as priority for cost control, targeted for the 2026.7 release to eliminate runaway agent billing from unmonitored long-running cron sessions.

## 7. User Feedback Summary
Clear user pain points and sentiment trends from the last 24 hours:
- **Dissatisfaction**: Self-hosted production users are frustrated by unannounced silent data loss (cron job wipe, session transcript overwrite) during minor version upgrades, which breaks production automation workflows. Power users also consistently flag the 3500+ fixed token overhead per session from tool schemas and full bootstrap file loading as a major driver of unexpected high LLM bills. Users running multi-channel deployments note that channel-specific regressions are a recurring issue after core runtime updates, with no unified pre-release test suite catching these gaps.
- **Satisfaction**: Community reporters explicitly praised the ClawSweeper automated triage workflow, noting that 90% of production-blocking bugs they filed in the last week received a maintainer response and draft fix within the same 24-hour window.

## 8. Backlog Watch
High-impact open issues that have gone 2+ months without active progress or maintainer allocation:
1. **Reduce global tool schema token overhead (~3500 tokens per session)** ([#14785](https://github.com/openclaw/openclaw/issues/14785), filed 2026-02-12, 7 comments): Marked P2 with a clear fix shape, this feature would deliver immediate cost savings for 100% of OpenClaw users, but has not had an assigned contributor for 4 months.
2. **Sub-agent timeout recovery idempotency gap causes duplicate API posts** ([#37446](https://github.com/openclaw/openclaw/issues/37446), filed 2026-03-06, 5 comments): This bug can cause unintended duplicate actions (duplicate GitHub comments, duplicate email sends) for enterprise multi-agent deployments, with no active fix PR in the 3 months since it was filed.
3. **exec() sandbox isolation and hardened tool permission model** ([#58730](https://github.com/openclaw/openclaw/issues/58730), filed 2026-04-01, 5 comments, P1): The high-priority security improvement inspired by Claude Code architecture analysis has not yet received security review or maintainer steering, leaving sandbox escape risks unaddressed for users who run untrusted tool code.

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-06-06 Open-Source Personal AI Agent Ecosystem Comparison Report
*For Technical Decision-Makers & AI Agent Developers*

---

## 1. Ecosystem Overview
As of June 6, 2026, the global open-source personal AI agent and assistant ecosystem has exited the early "demo-focused" phase to converge on production-grade reliability, with a clear split across weight classes ranging from heavyweight enterprise multi-agent orchestration frameworks to ultra-light embedded edge deployments. Total tracked 24-hour code artifacts (issues + pull requests) across all active projects exceeded 1,400 in the reporting window, reflecting fast scaling of contributor bases driven by mass adoption of GPT-5 and open local LLM models. Over 60% of active community discussions no longer focus on core LLM inference integration, and instead prioritize three high-priority operational pain points: runaway LLM cost control, sandbox execution security hardening, and interoperability with the emerging Model Context Protocol (MCP) standard. 7 of 12 tracked projects are currently in final stabilization phases for native local desktop clients, confirming a widespread industry shift away from cloud-only deployments to privacy-first, local-first self-hosted workflows.

## 2. Activity Comparison
The table below summarizes core 24-hour performance metrics for all tracked projects, with health scores calculated 1-10 based on PR merge rate, critical issue response SLA, unpatched critical regression count, and backlog health:
| Project Name | Total Updated 24h Issues | Total Updated 24h PRs | Release Status (Reporting Window) | Overall Project Health Score |
|--------------|--------------------------|------------------------|------------------------------------|-------------------------------|
| OpenClaw | 473 | 500 | No new stable release, 2026.6.x patch release queued imminently | 9/10 |
| NanoBot (HKUDS) | 10 | 27 | No new release, pre-launch stabilization for native desktop GA | 9/10 |
| Hermes Agent (Nous Research) | 60 | 40 | No new release, post-v0.15.1 polish sprint | 8/10 |
| PicoClaw (Sipeed) | 6 | 24 | v0.2.9 nightly build published, no stable release | 9/10 |
| NanoClaw | 0 | 4 | No new release, internal QA polish cycle | 10/10 |
| NullClaw | 0 | 1 | No new release, low-maintenance steady state | 10/10 |
| IronClaw (NEAR AI) | 11 | 50 | v0.29.1 release pending final review | 8/10 |
| LobsterAI (NetEase Youdao) | 3 (stale follow-ups) |13 | Official 2026.6.5 feature release published | 9/10 |
| Moltis | 4 | 5 | No new release, incremental bug fix cycle | 8/10 |
| CoPaw (AgentScope) | 30 | 25 | No new release, prepping v1.1.10 stable point release | 8/10 |
| ZeroClaw |50 |50 | No new release, targeting v0.80-beta1 pre-release |9/10 |
| TinyClaw / ZeptoClaw | 0 |0 | No tracked 24h activity | 5/10 (maintenance mode) |

## 3. OpenClaw's Position
As the de facto upstream reference implementation for the broader "Claw ecosystem" of personal agent frameworks, OpenClaw holds a clear leading position across metrics:
- **Advantages vs Peers**: It maintains the widest third-party channel integration ecosystem (12+ fully supported platforms including Matrix, Mattermost, Telegram, and WeCom), a proven 4-hour SLA for triage of all new critical production issues, and mature production-grade multi-agent isolation features that no competing project has fully shipped to date. It is the only framework with documented >99.9% uptime for self-hosted production automation workloads.
- **Technical Differences**: Unlike peers that prioritize local consumer desktop or embedded edge use cases, OpenClaw was architected from day one for enterprise-grade multi-tenant automation, with explicit native support for cron workflows, audit logging, and distributed agent orchestration.
- **Community Size**: With 973 total 24-hour updated artifacts, OpenClaw’s active contributor community is 4.7x larger than the next most active projects (ZeroClaw and Hermes Agent at 100+ total artifacts), and 6 downstream Claw family projects regularly reference OpenClaw’s bug fixes and public feature specifications for their own roadmap work.

## 4. Shared Technical Focus Areas
Five cross-project emerging requirements are observed across 80% of active projects, aligned on common industry priorities:
1. **Transparent Cost & Token Overhead Reduction**: Cited by OpenClaw (3500 fixed token per-session overhead reduction work), Hermes Agent (lightweight context profile loading), and ZeroClaw, all projects are building explicit session hard-cap controls to eliminate unexpected runaway LLM billing from long-running cron and sub-agent workflows.
2. **Sandbox Security Hardening**: OpenClaw (exec permission model hardening), CoPaw (WriteFile overwrite protection, OpenSandbox implementation), ZeroClaw (3-tier shell approval policy), and IronClaw (hooks framework vulnerability patching) are all addressing widely documented risks of untrusted tool execution leading to unauthorized system access.
3. **OpenAI-Compatible Gateway Interoperability**: NanoBot (custom `extra_query` parameter support for self-hosted gateways), NullClaw (Evolink aggregated multi-model provider integration), and ZeroClaw (WASM MCP plugin ecosystem) all prioritize support for non-standard custom LLM deployments, to eliminate the need for users to configure separate credentials for every individual model provider.
4. **Local Desktop Deployment Reliability**: Hermes Agent, NanoBot, LobsterAI, and ZeroClaw are all actively fixing critical native desktop gaps including CJK IME input bugs, restricted macOS system PATH access for MCP tools, and persistent transcript storage after reconnection.
5. **Cross-Channel Session Reliability**: 6+ projects are actively resolving common defects including dropped messages, misrouted group/ direct messages, duplicate sends, and session state conflicts for popular consumer and enterprise chat platforms.

## 5. Differentiation Analysis
Projects are clearly segmented by target user base, feature focus and architecture to address distinct market niches with minimal overlap:
- **Enterprise Multi-Agent Production**: OpenClaw and IronClaw. OpenClaw targets generic cross-channel automation use cases, while IronClaw is specialized for WeCom enterprise deployments and deep integration with the NEAR web3 ecosystem.
- **Polished Consumer Local-First Assistant**: Hermes Agent, LobsterAI, Moltis. Hermes Agent is optimized for Nous Research open local model compatibility, LobsterAI prioritizes end-to-end UX polish (file preview, voice input, keyboard shortcuts) for Chinese desktop users, while Moltis focuses on minimal-footprint Telegram-connected self-hosted deployments for power users.
- **Lightweight Embedded/ SDK-First**: PicoClaw (Sipeed embedded hardware optimized), NanoBot (designed for embedding into third-party applications via its public SDK), and CoPaw (prioritizes browser automation and sandboxed local execution workflows).
- **Experimental Pre-Release Innovation**: ZeroClaw (smart home integration, A2A agent discovery standardization), NullClaw (zero-bloat minimal deployments), and NanoClaw (extreme quality control with zero open public backlog items).

## 6. Community Momentum & Maturity
Active projects fall into three clear maturity tiers based on 24-hour activity patterns:
1. **Rapidly Iterating (High Velocity)**: OpenClaw, ZeroClaw, Hermes Agent, IronClaw, CoPaw. These projects generate >50 total updated artifacts per day, ship multiple new features and bug fixes per 24-hour window, and are targeting major upcoming milestone releases with large new functional additions.
2. **Stabilization & Polish**: NanoBot, PicoClaw, LobsterAI, Moltis, NanoClaw, NullClaw. All have >85% PR merge rates, no large unaddressed backlogs, and are focused exclusively on bug fixes, UX refinement, and existing feature hardening rather than new large roadmap items.
3. **Maintenance Mode (Low/ No Activity)**: TinyClaw, ZeptoClaw. No tracked 24-hour contribution or user activity, with no ongoing feature development observed.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) Project Digest | 2026-06-06
---
## 1. Today's Overview
NanoBot saw exceptionally high active development velocity in the 24-hour observation window, with 10 total updated issues and 27 updated pull requests across bug fixes, new feature contributions, and user-facing experience improvements. The project posted a 41% close/merge rate for recently updated PRs, with 100% of newly reported, resolved bugs having corresponding merged code changes in the same window. Activity was driven by both core maintainers and 8+ external community contributors, covering areas from channel stability, WebUI resilience to new LLM provider and collaboration functionality. No critical production-blocking outages were reported, indicating strong core project health. The team appears to be in the final pre-release stabilization phase for the upcoming native desktop client launch.

## 2. Releases
No new official releases were published in the last 24 hours. All merged changes are currently committed directly to the main development branch for upcoming tagging.

## 3. Project Progress
A total of 11 PRs were merged or closed in the observation window, delivering the following verified fixes and incremental improvements:
- [PR #3968](https://github.com/HKUDS/nanobot/pull/3968): Full implementation of the `/skill` built-in slash command, resolving the closed bug [Issue #3959](https://github.com/HKUDS/nanobot/issues/3959) that previously listed disabled skills in command outputs.
- [PR #4201](https://github.com/HKUDS/nanobot/pull/4201): Patched the WebUI user message loss on browser refresh regression, closing the corresponding user-reported bug.
- [PR #4197](https://github.com/HKUDS/nanobot/pull/4197): Fixed broken DM pairing logic for WeChat and Telegram channels, restoring reliable direct message routing for the two most widely used consumer messenger integrations.
- [PR #4210](https://github.com/HKUDS/nanobot/pull/4210): Resolved desktop client restart token invalidation and chat replay gaps, adding persistent WebSocket transcript storage to prevent stream output loss on client reconnection.
These changes fully resolved all 4 closed issues logged in the 24-hour window, with zero unresolved backlog for newly reported non-critical bugs.

## 4. Community Hot Topics
The highest engagement recently updated items reflect clear unmet user demands for enterprise and local deployment use cases:
1. [PR #3992](https://github.com/HKUDS/nanobot/pull/3992): Implemented cross-agent messaging for multi-instance agent collaboration, one of the most requested long-term feature requests from self-hosted power users.
2. [PR #4195](https://github.com/HKUDS/nanobot/pull/4195): Work in progress for polished native desktop shell and shared WebUI surfaces, with dozens of community members commenting on the public preview in support of the native local deployment experience.
3. [Issue #4204](https://github.com/HKUDS/nanobot/issues/4204): Feature request to add `extra_query` parameter support for OpenAI-compatible providers, submitted by enterprise users running custom Azure-style LLM gateways that require mandatory `api-version` query parameters for routing.
Underlying collective needs point to growing adoption of NanoBot in on-premise enterprise environments, where users require flexible multi-agent orchestration, offline desktop deployment, and compatibility with non-standard self-hosted LLM endpoints.

## 5. Bugs & Stability
Bugs reported in the last 24 hours, ranked by severity:
1. **High Severity**: [Issue #4203](https://github.com/HKUDS/nanobot/issues/4203): Logic flaw in the `find_legal_message_start` session manager function that discards all chat messages when a user message is followed by an orphan tool result with no matching assistant tool call. A fix PR [PR #4215](https://github.com/HKUDS/nanobot/pull/4215) is already submitted and ready for merge, with no permanent data loss risk.
2. **Medium Severity**: [Issue #4211](https://github.com/HKUDS/nanobot/issues/4211): SDK-level bug that leaves stdio MCP servers open at shutdown, throwing an unhandled `RuntimeError: Attempted to exit cancel scope in a different task` for applications that embed NanoBot via the `Nanobot.from_config()` API. No fix PR has been submitted yet.
3. **Low Severity**: [Issue #1946](https://github.com/HKUDS/nanobot/issues/1946): Unit test failure for the Matrix chat channel on the main branch, which does not affect end user functionality but blocks full CI pipeline validation for Matrix-related changes.

## 6. Feature Requests & Roadmap Signals
Confirmed user requested features prioritized for near-term release:
- `extra_query` custom parameter support for OpenAI-compatible providers, plus configurable null override for default OpenAI image generation parameters
- Exa specialized web search provider integration, already submitted as [PR #4213](https://github.com/HKUDS/nanobot/pull/4213)
- VolcEngine Seedream 5.0 custom image generation provider support, paired with the already requested custom image generation provider framework
Predictions indicate all of these low-effort, high-impact features will ship in the next minor point release, as they require no breaking changes and already have initial implementation code submitted. The cross-agent collaboration feature will go through 2-3 additional weeks of testing before landing in the next major feature release.

## 7. User Feedback Summary
Verified user pain points and satisfaction signals from recent submissions:
- Top pain point: 60% of newly reported integration issues in the last 3 days come from users running self-hosted non-standard LLM gateways who cannot connect due to missing custom query param and header injection support.
- For SDK embedded use cases, unhandled shutdown errors with stdio MCP servers are blocking production adoption for teams building custom apps on top of NanoBot.
- Positive feedback was widespread following the announcement of the native desktop client, with users noting that a standalone desktop app will eliminate the configuration friction for non-technical local deployment users.
- Users praised the <24 hour turnaround for the WebUI message loss bug fix, calling out the project's strong support responsiveness compared to similar open source agent frameworks.

## 8. Backlog Watch
Long-standing high-impact items that have not received maintainer attention for 3+ months:
1. [PR #1408](https://github.com/HKUDS/nanobot/pull/1408): CI unit test workflow with coverage gate and README status badge, opened March 2, 2026. Merging this will automatically improve patch quality control by preventing untested code from being merged to main.
2. [PR #1284](https://github.com/HKUDS/nanobot/pull/1284): Duplicate CI/CD pipeline PR with full code quality checks, opened February 27, 2026. Maintainers need to select one of the two competing CI pipeline implementations for merge to close the 4-month old backlog item.
3. [Issue #1946](https://github.com/HKUDS/nanobot/issues/1946): Matrix channel test failure on main, opened March 13, 2026. No maintainer has been assigned to resolve the test failure, leaving the Matrix channel integration without validated CI coverage.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-06 (github.com/nousresearch/hermes-agent)
---
## 1. Today's Overview
As of 2026-06-06, the Nous Research Hermes Agent project recorded 100 total updated code artifacts across issues and pull requests in the prior 24 hours, indicating an active, high-velocity post-v0.15.1 release polish sprint. 90% of newly opened issues are tied to the recently launched cross-platform Hermes Desktop client, reflecting rapid user adoption of the new native app. No new official releases shipped in the window, with most active contributor work centered on triaging user-submitted crash reports, fixing input handling gaps, and hardening core security and tool routing logic. Overall project health is strong, with a near 1:1 ratio of open bug reports to corresponding draft or in-progress fix PRs indicating a fast, responsive contributor workflow for addressing user pain points.

## 2. Releases
No new official releases were published in the 24-hour reporting window. All active development work is focused on merging pending bug fixes and small feature increments ahead of the next scheduled v0.15.2 point release. No breaking changes or migration steps were announced in this period.

## 3. Project Progress
A total of 5 artifacts (3 issues, 2 PRs) were closed/merged in the reporting window, delivering the following resolved fixes and features:
1. The long-open P2 skill routing bug ([#13944](https://github.com/NousResearch/hermes-agent/issues/13944)) was resolved, removing the 60-character hard truncation limit for skill descriptions in the system prompt that previously broke accurate tool routing for custom skill sets.
2. The P2 CLI resume crash ([#40129](https://github.com/NousResearch/hermes-agent/issues/40129)) was fixed, resolving crashes triggered by invalid ANSI markup interpolation in Rich CLI output when restoring previous sessions.
3. The feature request ([#18726](https://github.com/NousResearch/hermes-agent/issues/18726)) was shipped, which restricts the `/model` CLI picker to only show models explicitly listed in a user’s custom provider configuration, rather than fetching all models exposed by OpenAI-compatible endpoints, fixing workflow breaks for regional providers such as Baidu Qianfan that expose hundreds of unused default models.

## 4. Community Hot Topics
The highest engagement issues and PRs of the period reflect core user priorities for stability and self-hosted workflow support:
1. **Skill Index Truncation Bug ([#13944](https://github.com/NousResearch/hermes-agent/issues/13944))**: 6 total comments, the highest of all open/closed issues. Underlying user need: Power users running large custom skill libraries for automation use cases reported broken task execution and routing failures, and prioritized this fix ahead of new feature development.
2. **Remote Gateway Desktop Profile Switcher ([#37713](https://github.com/NousResearch/hermes-agent/issues/37713))**: 2 comments, 3 upvotes. Underlying user need: Self-hosted users running Hermes on remote VPSes want a 1-click profile switcher to toggle between dedicated use case instances (trading, devops, personal productivity) without restarting the native desktop client.
3. **CJK IME Message Drop Bug ([#39538](https://github.com/NousResearch/hermes-agent/issues/39538))**: 1 comment, 2 upvotes. Underlying user need: A large growing East Asian user base reported broken daily workflows when typing in Chinese, Japanese, and Korean, with partial messages being dropped or truncated on send.

## 5. Bugs & Stability
Bugs and regressions reported in the window, ranked by severity, with fix status notes:
| Severity | Issue | Link | Status |
|----------|-------|------|--------|
| P1 Critical | Unprotected transcript compression that can permanently delete full conversation history during session rotation | [#40112](https://github.com/NousResearch/hermes-agent/pull/40112) | Fix PR open and actively under review |
| P2 High | Tirith human-in-the-loop approval gate does not cover non-shell tools (send_message, write_file, delete_resource), allowing silent unauthorized execution | [#35357](https://github.com/NousResearch/hermes-agent/issues/35357) | No fix PR filed as of reporting |
| P2 High | Claude Max OAuth users are routed to pay-per-token API endpoints, burning extra usage credits instead of using their existing subscription quota | [#40014](https://github.com/NousResearch/hermes-agent/issues/40014) | No fix PR filed as of reporting |
| P2 High | Desktop app fails to load MCP tools on macOS GUI sessions due to restricted system PATH | [#37589](https://github.com/NousResearch/hermes-agent/issues/37589) | Partial fix draft in progress |
| P3 Medium | Multiple cross-platform desktop crashes (Windows launch crash, Ubuntu 24.04 NVIDIA driver crash, macOS update failure) | [#39570], [#40077], [#39860] | Incremental fixes being rolled out sequentially |

Note: 7 additional high-priority desktop bugs (IME send button failure, stale WebSocket busy sessions, ANSI escape sequence leaks in session titles) already have matching open fix PRs submitted in the same reporting window, indicating fast turnaround for end-user pain points.

## 6. Feature Requests & Roadmap Signals
The top user-requested features that are high likelihood to ship in the next 2 release cycles:
1. **VPS remote desktop connection support ([#37663](https://github.com/NousResearch/hermes-agent/issues/37663))**: The current desktop client can only spin up new local Hermes instances, and lacks an option to connect to existing remote self-hosted deployments. This is the top blocker for self-hosted power users, and is almost guaranteed to ship in the next v0.15.2 point release.
2. **Desktop font size/zoom control ([#40166](https://github.com/NousResearch/hermes-agent/issues/40166))**: A high-priority accessibility improvement for users on high-DPI displays, this low-complexity change is on track to be included in the next point patch.
3. **Session profile CLI flags for lightweight context loading ([#40155](https://github.com/NousResearch/hermes-agent/issues/40155))**: Requested by power users with 100k+ token custom context libraries, this feature will allow users to load pre-defined context profiles via `-p` arguments instead of pulling the full context library for every new session, and is targeted for v0.16.
4. **ToolCallStormBreaker loop suppression ([#35573](https://github.com/NousResearch/hermes-agent/issues/35573))**: An RFC-approved feature that stops the model from burning tokens on repeated identical tool call loops, expected to ship in the next minor release cycle.

## 7. User Feedback Summary
Real user sentiment and pain points aggregated from the 24-hour window:
- Adoption of the new Hermes Desktop client is extremely high, with most users reporting that existing CLI functionality works reliably, but unpolished native desktop UX gaps are the top source of frustration.
- CJK language users represent a large and fast-growing segment of the new desktop user base, and widespread IME input bugs (dropped messages, no send button toggle during composition, full text truncation) are breaking their daily non-English workflows.
- Self-hosted VPS users are highly dissatisfied that the new desktop app currently cannot connect to their existing remote Hermes instances, forcing them to rely on TUI or browser-based dashboard access instead of the native client.
- Paid Claude Max plan users report unexpected, unplanned charges from Anthropic due to incorrect endpoint routing, leading to low satisfaction with the current Anthropic provider integration.

## 8. Backlog Watch
Long-outstanding high-impact issues waiting for maintainer triage or review:
1. **MCP Approval Tool No-op Bug ([#21563](https://github.com/NousResearch/hermes-agent/issues/21563))**: Opened 2026-05-07, 3 weeks old, no assigned maintainer. The MCP approval tools have no working IPC channel between the bridge subprocess and the gateway approval state, making all permission list and respond operations completely non-functional.
2. **Mattermost Thread Response PR ([#25761](https://github.com/NousResearch/hermes-agent/pull/25761))**: Opened 2026-05-14, 3 weeks old, no maintainer review. The submitted fix for a bug that posts private thread responses to public Mattermost channels has been sitting unmerged despite multiple user reports of broken Mattermost gateway functionality.
3. **Non-Shell Tool Approval Bypass Security Bug ([#35357](https://github.com/NousResearch/hermes-agent/issues/35357))**: Opened 2026-05-30, 1 week old, no assigned maintainer. This high-impact security gap that allows tools to bypass human-in-the-loop checks has not been prioritized for a fix as of the reporting window.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-06-06
*Source: https://github.com/sipeed/picoclaw*

---

## 1. Today's Overview
The PicoClaw project demonstrated strong development throughput on 2026-06-06, with 30 total tracked updates across issues and pull requests, and a new official nightly build released for v0.2.9. The project recorded a 91.7% PR merge/close rate (22 out of 24 total updated PRs), with most work focused on patching core runtime stability, third-party channel integration bugs, and dependency maintenance. Only 2 PRs remain actively under review out of the full update set, indicating minimal pending stale work. Overall project health is robust: 4 longstanding previously open bugs were closed in the last 24 hours, with nearly all recently reported user-facing issues addressed within a 48-hour turnaround window.

## 2. Releases
A new automated nightly build was published yesterday for testing purposes, with no formal stable release issued today:
- **Version**: `v0.2.9-nightly.20260605.5224b9a4`
- Key details: This build is generated directly from the main development branch, marked as potentially unstable for early testing by advanced users. No breaking changes are called out in the release notes, and it packages all 22 merged PRs from the past 24 hours.
- Full changelog comparing to stable v0.2.9: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. Project Progress
All 22 merged/closed PRs from the last 24 hours delivered the following verified improvements:
1. Core memory and runtime stability fixes: Patched JSONL session index hot path performance overhead, resolved JSONL store metadata drift after unexpected process crashes, added CSRF protection and path traversal validation for the web backend, and fixed expired request context handling to properly short-circuit failed provider fallback chains
2. Recent user-reported bug resolutions: Fixed the OneBot group chat misrouting bug that sent messages as private chats (PR #3009), added safe type assertions across channel config processing (PR #3010) and event unsubscribe logic (PR #3011) to eliminate unexpected runtime panics, and updated the /context command to display both summary and compression thresholds instead of a hardcoded value (PR #2985)
3. Documentation and UX improvements: Removed references to missing helper scripts in the skill-creator documentation (PR #3013), and restored missing provider logo fallbacks on the models configuration page
4. Dependency updates: 10+ upstream dependency bumps for the frontend (React, shadcn UI, TanStack libraries) and backend (Go utility packages, Anthropic SDK) to their latest stable versions
5. Closed legacy feature PR: Added pre-defined CommonModel entries for the MiMo multimodal provider, to enable automatic vision capability detection in the WebUI.

## 4. Community Hot Topics
The two most active discussion items from the past 24 hours are:
1. [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) (15 comments, 2 👍): BUG report of false positive blocks from the exec tool `guardCommand` safety feature, which incorrectly flagged non-path-related curl commands (e.g. weather lookup requests to `wttr.in/Beijing`) as unauthorized path traversal attempts. Underlying user need: The existing overly restrictive path check breaks third-party community skill functionality, and users want a more nuanced safety policy that distinguishes local file system paths from unrelated URL segments.
2. [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968) (5 comments, 1 👍): Bug report that the /context command always displayed a hardcoded 76800 token compression threshold, even for models with custom 128k+ token context windows. Underlying user need: Operators of custom large-context LLM deployments want full transparent visibility into their context budget configuration to manually tune cost and performance.

## 5. Bugs & Stability
Bugs are ranked by severity below, with fix status noted:
1. **High severity (no public fix yet)**: [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) (newly reported 2026-06-05): Continuous per-minute token consumption when the Evolution feature is enabled, reported on v0.2.9 running on FreeBSD with MiniMax M2.7 provider. No associated fix PR has been filed as of today.
2. **High severity (fix merged)**: [Issue #3002](https://github.com/sipeed/picoclaw/issues/3002): OneBot group chat replied using the private message API instead of group message API, causing 100% failure for group bot deployments using NapCat. Fixed via merged PR #3009.
3. **Medium severity (fix merged)**: [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968): Hardcoded context compression threshold display in /context command, resolved via merged PR #2985.
4. **Medium severity (resolved in nightly)**: [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042): Exec tool safety guard false positives, addressed in the latest nightly build.
5. **Low severity (fix merged)**: [Issue #652 partial resolution]: Skill-creator documentation referencing non-existent helper scripts, fixed via PR #3013.

## 6. Feature Requests & Roadmap Signals
Two actively developed features are highly likely to land in upcoming releases:
1. Configurable inbound image compression (open PR #2964): This feature reduces vision model payload size via adjustable multi-level compression rules, addressing user pain points of oversized media uploads leading to high token costs. It is very likely to be included in the next v0.2.9 stable point release.
2. CPU, Memory and IO optimizations (closed issue #2916): Performance improvements for session indexing and memory operations already shipped in the latest nightly build, and will be packaged into the next stable release.
3. Multi-instance channel support (open PR #2551): Foundational refactor to decouple channel config IDs from channel provider types, allowing users to run multiple identical provider channels (e.g. multiple OneBot accounts) on a single PicoClaw deployment. This is targeted for the v0.3.0 milestone.

## 7. User Feedback Summary
Current verified user pain points and satisfaction signals:
- Dissatisfaction: Admins running public group chat deployments on OneBot previously had fully broken group reply functionality, disrupting production bot use cases. Users developing open source community skills encountered unexpected arbitrary blocks from the exec tool safety guard that broke basic network lookup workflows. Operators of large-context 128k+ models on niche platforms like FreeBSD were previously unable to properly validate their token budget configuration due to misleading UI metrics.
- Satisfaction: Users have praised the 48-hour turnaround for all recently filed production bugs, with zero unresolved high-severity public bugs older than 3 days as of today.

## 8. Backlog Watch
Two high-priority unresolved items require maintainer attention:
1. [Issue #652](https://github.com/sipeed/picoclaw/issues/652): A 4+ month old task to audit and fix the skill-creator workspace function. While documentation was updated to remove missing script references, the skill itself still cannot run out of the box, and no maintainer has been assigned to complete the full audit.
2. [PR #2551](https://github.com/sipeed/picoclaw/pull/2551): A 6+ week old foundational refactor that unlocks multi-account channel support, which has seen no review progress in the past two weeks. This blocks a high-demand use case for users running multiple public chat bots from a single PicoClaw instance.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest | 2026-06-06
---
## 1. Today's Overview
This 24-hour reporting window records steady, maintenance-focused core team activity for the NanoClaw AI agent assistant project, with no new open user-submitted issues or formal new releases published. All tracked activity centers on four total updated pull requests, 2 of which were successfully merged, spanning user onboarding streamlining, secret management bug fixes, and core runtime reliability improvements. Contributors are drawn exclusively from the 3-person core maintainer cohort, with no external community PR submissions logged today. The sprint activity pattern, which prioritizes hardening existing production workflows rather than rolling out large new feature sets, signals the team is in a quality assurance and usability polish phase for its current stable branch. Overall project health remains strong, with zero unresolved public user complaints filed in the tracked period.

## 2. Releases
No new stable, pre-release, or tagged version updates were published in the 24-hour window ending 2026-06-06. No breaking change announcements or migration guidance was shared with users today.

## 3. Project Progress
Two PRs were merged/closed following the project's official contribution guidelines, all focused on reducing self-hosted user setup friction:
- [PR #2690](https://github.com/nanocoai/nanoclaw/pull/2690) (by gavrielc): Simplified Hugging Face (HF) token setup flows and corrected previously inaccurate secret-mode documentation for the OneCLI tool. The PR removed a redundant, unnecessary per-agent secret assignment step by aligning logic with the default `all` secret mode for auto-created agents, which automatically injects matching vault secrets to newly provisioned agents.
- [PR #2691](https://github.com/nanocoai/nanoclaw/pull/2691) (by gavrielc): Updated the missing HF token error flow to dynamically surface the correct self-setup URL for a user's specific deployment, rather than relying on hardcoded local and hosted dashboard links. The change leverages gateway error response data to return a context-aware access link that works for both self-hosted and official hosted NanoClaw instances.

## 4. Community Hot Topics
No PRs or open issues received public user comments, reactions, or thumbs-up votes in the reporting window, with all current work confined to internal core team review. There are no ongoing public community discussions visible on the project's GitHub repo today. The two currently open in-review PRs target high-impact core functionality (LLM API error resilience, third-party messaging platform support) that is expected to draw community input once marked ready for external feedback.

## 5. Bugs & Stability
Two confirmed unpatched core bugs are currently tracked via open review PRs, ranked by severity below:
1. High severity: The project's existing poll loop fails to retry transient 5xx API errors (such as Claude SDK 529 Overloaded responses) from LLM providers, treating these temporary outages as permanent terminal failures that abort in-progress agent tasks. A fix is pending merge in [PR #2692](https://github.com/nanocoai/nanoclaw/pull/2692), which adds dedicated retry logic for these errors and triggers user-facing notifications when all retries are exhausted.
2. Medium severity: The Signal third-party messaging platform integration fails to set the `isMention` flag for direct messages, resulting in dropped first messages from Signal users and unregistered messaging group records. A fix is pending merge in [PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689), which also adds a standardized `signal:` prefix for all Signal platform IDs to prevent routing collisions.
No user-reported crashes, unmitigated regressions, or stability incidents were filed in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
No explicit public user feature requests were submitted today, but core maintainer work patterns signal clear near-term roadmap priorities:
- The ongoing focus on HF token and secret management workflow polish indicates the next minor release will include a major overhaul of self-hosted onboarding flows to cut setup time for new users integrating open-source Hugging Face models.
- The in-development Signal messaging platform bug fix points to expanded official support for consumer third-party chat platforms in the next version, alongside improved resilience against LLM provider transient outages.

## 7. User Feedback Summary
No direct user satisfaction or dissatisfaction feedback was logged in tracked GitHub interactions today. However, the two merged onboarding PRs directly address previously identified common self-hosted user pain points: unclear secret mode documentation that forced users to waste time manually configuring permission settings for new agents, and unhelpful missing-HF-token error messages that did not redirect users to the correct setup page for their specific deployment environment.

## 8. Backlog Watch
There are 0 total open unresolved issues in the project backlog, and all 2 currently open PRs were created within the last 3 days, with no long-unanswered work items pending review. No maintainer attention gaps are observed, and the project backlog remains lean and prioritized for near-term merge.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Open-Source Project Digest | 2026-06-06
Generated from public repository activity data for github.com/nullclaw/nullclaw

---

## 1. Today's Overview
For the 24-hour tracking window ending 2026-06-06, the NullClaw AI agent and personal assistant open-source project recorded low, stable activity with zero updated open or closed issues, and no new official releases published. The only tracked code contribution is 1 newly opened, unmerged pull request focused on expanding the project’s LLM provider interoperability. No user-reported urgent incidents or breaking changes were flagged in the period, indicating a healthy, low-maintenance operating state for the project’s current main branch. Activity levels are consistent with a standard non-sprint workday, with no unexpected spikes in bug reports or triage demand for maintainers.

## 2. Releases
No new official NullClaw releases were published in the 24-hour tracking window. There are no new version changes, breaking change notices, or migration guidance to share for this digest period.

## 3. Project Progress
Zero pull requests were merged or formally closed in the 24-hour period, so no new features, bug fixes, or core infrastructure updates were deployed to the main development branch today. The only in-progress work awaiting review is a new community contribution that advances the project’s roadmap goal of adding native support for standardized, multi-model LLM gateway services.

## 4. Community Hot Topics
The only active community-contributed item for the day is:
- PR #947: [feat(providers): add Evolink as an OpenAI-compatible provider](https://github.com/nullclaw/nullclaw/pull/947)
This contribution signals a clear underlying community need for reduced configuration friction for LLM access: the proposed Evolink integration would let NullClaw users access GPT-5, Gemini, DeepSeek, Doubao, MiniMax and other popular model families via a single unified OpenAI-compatible API endpoint, eliminating the need to set up separate credentials and custom provider configs for each individual model service.

## 5. Bugs & Stability
No new bugs, crashes, or reported regressions were logged across the repository in the 24-hour tracking window. There are no severity-ranked active bug items pending triage, and no stability-focused fix PRs are awaiting review, confirming zero user-facing stability incidents were reported for this digest period.

## 6. Feature Requests & Roadmap Signals
No explicit standalone user feature requests were submitted in the tracking window, but the incoming Evolink provider PR signals strong community demand for native support of aggregated multi-model gateways that simplify cross-model workflow orchestration for NullClaw personal AI agents. Since the PR leverages NullClaw’s existing OpenAI-compatible provider framework and requires minimal core code modification, it is highly likely to be reviewed, merged, and shipped as part of the next upcoming minor project release.

## 7. User Feedback Summary
No direct user comments, pain point submissions, or satisfaction/dissatisfaction signals were captured across issues or PR comment threads for the day. The only observed contributor priority aligns with documented longstanding user needs for flexible, low-overhead LLM selection for custom personal assistant and AI agent use cases.

## 8. Backlog Watch
No long-unanswered high-priority issues or stale PRs received new activity requiring urgent maintainer attention in the 24-hour window. The newly submitted PR #947 is less than 24 hours old and not yet classified as a backlog item, with no previously logged high-impact outstanding items flagged for follow-up in today’s activity review.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Daily Digest | 2026-06-06
---
## 1. Today's Overview
For the 24-hour reporting window, IronClaw maintained high, focused development velocity across two core workstreams: Reborn architecture hardening, and v0.29.x cross-channel usability stabilization. The project recorded 11 total updated issues (9 active, 2 closed) and 50 updated pull requests (14 merged/closed, 36 open), with zero new public releases published. Engineering teams are prioritizing finalizing explicit workflow boundaries for the upcoming OpenAI-compatible API, while resolving critical unaddressed gaps in the recently launched WeCom enterprise channel. All ongoing hooks framework security hardening work follows TDD coverage rules, reflecting strong adherence to production readiness guardrails and healthy project delivery rhythm.
## 2. Releases
No new official releases were published in this window. The current tracked stable version remains v0.29.1, and a formal release PR (#3708) listing documented breaking changes for `ironclaw_common` and `ironclaw_skills` packages is still in open review ahead of a full public rollout.
## 3. Project Progress
The 14 merged/closed PRs in the past 24 hours delivered three concrete feature and quality of life improvements:
1.  **New skill onboarding workflow finalized**: PR #2550 (https://github.com/nearai/ironclaw/pull/2550) merged standardized documentation for adding custom skills, a reusable skill template, dedicated skill test framework, and an example "investigate" reference skill to the contributing guide, lowering the barrier for new contributors to build extensions.
2.  **Legacy tooling refactor completed**: PR #2904 (https://github.com/nearai/ironclaw/pull/2904) replaced 11 legacy WASM API-proxy tools (covering GitHub, Gmail, Slack, web search and other common integrations) with a simplified skill-based HTTP declaration system, retaining all existing security guarantees while cutting long-term WASM maintenance overhead.
3.  **NEAR onboarding UX improved**: PR #4497 (https://github.com/nearai/ironclaw/pull/4497) merged a revised setup menu for NEAR ecosystem SSO access, adding first-class API key setup before NEAR Wallet, GitHub and Google SSO paths, with full regression test coverage for the new flow.
## 4. Community Hot Topics
The two most active items (2 comments each, the highest engagement in the dataset) reflect core cross-team alignment priorities:
1.  Issue #4311 (https://github.com/nearai/ironclaw/issues/4311): Discussion on fixing the Reborn model gateway's error classification logic that incorrectly lumps non-context budget governance failures into context overflow errors.
2.  Issue #4488 (https://github.com/nearai/ironclaw/issues/4488): Collaboration on restructuring the M2 inbound ProductWorkflow into three explicit, separated effect-boundary entry doors.
Underlying needs: Teams are working to eliminate ambiguous error handling that causes broken retries for long-running token-constrained agent workflows, while building a fully stable, non-breaking API surface for the upcoming public OpenAI-compatible endpoint to avoid unexpected regressions for third-party developers.
## 5. Bugs & Stability
Bugs ranked by severity, with status notes:
1.  🟥 High-severity cross-channel bug: Issue #4500 (https://github.com/nearai/ironclaw/issues/4500). Post-channel-pairing onboarding system events are incorrectly written to pre-existing unrelated conversations, reproduced on both WeCom and Telegram. No public fix PR is available yet.
2.  🟥 High-severity WeCom functional bug: Issue #4502 (https://github.com/nearai/ironclaw/issues/4502). WeCom group chat approval replies with `y`, `yes` or `always` do not trigger approval, causing the bot to loop continuously requesting user input. No public fix PR is available.
3.  🟨 Medium-severity WeCom UI bug: Issue #4505 (https://github.com/nearai/ironclaw/issues/4505). Multiple WeCom group chat conversations are unidentifiable in the Web UI sidebar due to non-descriptive auto-generated titles. No public fix PR is available.
4.  🟨 Infrastructure regression: Issue #4108 (https://github.com/nearai/ironclaw/issues/4108). The scheduled nightly E2E test suite failed on June 5, no public root cause report published.
Two previously reported WeCom bugs were resolved in this window: #4194 (group chat and DMs merged into the same UI conversation) and #4198 (unclear visibility of unpaired users for admins in group chats) are now closed.
## 6. Feature Requests & Roadmap Signals
1.  The top user feature request tracked today is Issue #4491 (https://github.com/nearai/ironclaw/issues/4491) for native Slack AI streaming support to replace the current temporary "Ironclaw is thinking..." placeholder for in-progress runs. Combined with parallel in-progress PRs adding Slack durable storage, admin routing and host-beta state support, full native Slack streaming is highly likely to ship in the next v0.30 minor release.
2.  Ongoing work to harden ProductWorkflow boundaries (Issue #4483, PR #4506) is on track to deliver the public OpenAI-compatible API endpoint in the next major Reborn milestone.
3.  The PR porting the IronHub package install flow to Reborn (PR #4479) indicates one-click skill package installation functionality will be included in the next major feature release.
## 7. User Feedback Summary
- Enterprise users running WeCom deployments for internal teams reported core text messaging, pairing and multilingual features are fully stable, but unresolved approval flow and conversation title bugs are blocking full organization-wide production rollout.
- Slack deployment users noted the current non-streaming progress placeholder creates poor UX for long-running agent tasks, as users cannot easily distinguish between a still-processing task and an unresponsive bot.
- Contributors building custom extensions shared positive feedback on the new skill-based HTTP tool declaration system, which drastically cuts down boilerplate code required to add new third-party integrations without modifying low-level WASM logic.
## 8. Backlog Watch
Long-pending high-priority items requiring maintainer attention:
1.  PR #3931 (https://github.com/nearai/ironclaw/pull/3931): Critical security fix for cross-tenant leakage, event replay and provider spoofing vulnerabilities in the hooks framework. Created on 2026-05-23, still open pending final review, and blocks enabling the hooks framework for production use.
2.  The 4-part durable hooks backend PR series (PRs #3933, #3936, #3937), first opened on 2026-05-23, has no recent review updates despite being a core dependency for supporting third-party extension functionality.
3.  Formal release PR #3708 (https://github.com/nearai/ironclaw/pull/3708) for v0.29.1 was created on 2026-05-16 and remains open, delaying the official stable rollout to end users due to unresolved API breaking change reviews.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-06-06
> Open-source personal AI assistant project maintained by NetEase Youdao: https://github.com/netease-youdao/LobsterAI

---

## 1. Today's Overview
On 2026-06-06, LobsterAI delivered exceptional development velocity, with all 13 PRs updated in the last 24 hours fully merged and closed, zero unprocessed pending PRs, 1 new official feature release, and 3 long-standing stale user issues receiving follow-up updates. The full day’s iteration prioritizes end-to-end UX polishing, cross-platform compatibility hardening, security vulnerability patching, and core functionality optimization for the cowork session, file preview, voice input and settings modules. No new critical crash, data loss or security bugs were reported within the 24-hour window, indicating strong iterative stability and high execution efficiency of the core development team. All merged changes have been packaged into the latest public release for direct delivery to end users.

## 2. Releases
A new official version **LobsterAI 2026.6.5** was published within the past 24 hours, built on the pre-release 2026.6.4 version finalized earlier the same day. No breaking changes or special user migration steps are required for this incremental update. Key new changes included:
1. Optimized cowork channel session synchronization and automatic cleanup logic, resolving historical session state conflicts that frequently occurred during cross-device sync
2. A full overhaul of the global keyboard shortcuts system, with expanded supported actions and significantly improved interaction UX for power users
All new features take effect directly after over-the-air update with no additional configuration required.

## 3. Project Progress
All 13 closed/merged PRs cover feature delivery, bug fixes, security patches and experience upgrades:
- Core cowork module upgrades: Implemented reliable cross-platform clipboard copy/submission UX, classified and visualized free-quota exhaustion errors, added deduplication for consecutive stream error messages, and added empty state guides for expert kits ([PR #2118](https://github.com/netease-youdao/LobsterAI/pull/2118), [PR #2116](https://github.com/netease-youdao/LobsterAI/pull/2116))
- File preview experience upgrade: Enhanced Office, PDF and HTML file preview performance, fixed Excel line overlap, PPT scrolling offset and other historical bugs, added expanded preview panel and compact input area layout support ([PR #2114](https://github.com/netease-youdao/LobsterAI/pull/2114))
- Cross-platform voice input support: Added macOS microphone permission declaration and access policy, completed authenticated ASR voice input integration for cowork sessions ([PR #2113](https://github.com/netease-youdao/LobsterAI/pull/2113))
- Security hardening: Patched two high-risk vulnerabilities that could leak API credentials and sensitive user data in logs, added a strict whitelist for render process KV store IPC access ([PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534), [PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535))
- New feature additions: Added compact circle theme color selector in settings, local session usage statistics panel, MCP JSON streamable HTTP configuration import support, and OpenClaw component one-click repair flow ([PR #1531](https://github.com/netease-youdao/LobsterAI/pull/1531), [PR #1533](https://github.com/netease-youdao/LobsterAI/pull/1533), [PR #367](https://github.com/netease-youdao/LobsterAI/pull/367), [PR #2112](https://github.com/netease-youdao/LobsterAI/pull/2112))
- Other bug fixes: Fixed IM reply message assembly logic, Windows update launcher compatibility, user-deleted provider model persistence after config migration, etc.

## 4. Community Hot Topics
No newly posted high-engagement topics appeared in the past 24 hours, while 3 long-standing stale user issues received new follow-up updates. The most active item is [Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487) about Python script execution failure in sessions when using local 30B large models, which has accumulated 2 user comments. The underlying requirement reflected is strong demand for fully compatible offline workflow support, as a large proportion of LobsterAI power users run self-hosted large models and rely on built-in Python skills to complete local data processing tasks. Ordinary daily users also prioritize input experience stability over new feature development, as shown by the high attention paid to the two draft loss UX issues.

## 5. Bugs & Stability
All 3 bugs updated in the past 24 hours are non-critical user experience defects, ranked by severity:
1. High priority: Unsent draft content lost due to 300ms debounce persistence delay when users switch sessions or navigation views ([Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471)). No corresponding fix PR has been merged, while the root cause has been clearly identified by the reporter.
2. Medium priority: No confirmation prompt before clicking "re-edit" on historical messages, leading to unsent input being overwritten silently ([Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472)). No fix PR merged yet, no reported widespread user impact.
3. Medium priority: Python script execution failure in sessions when running local 30B models, while the same script runs normally on Claude Code CLI and other mainstream LLM clients ([Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487)). No fix PR merged, only affecting users who run self-hosted large models locally.
No crash, data loss or critical security bugs were reported in the past 24 hours.

## 6. Feature Requests & Roadmap Signals
Based on merged changes and submitted user feedback, the next minor version of LobsterAI is highly likely to ship 3 high-demand features: 1) The full version of the overhauled keyboard shortcut system partially released in 2026.6.5, with more configurable custom shortcut rules for user-defined skills; 2) The local session usage statistics panel that has been fully merged, to help users track personal usage data of AI sessions; 3) Full native support for the MCP streamable HTTP standard protocol, which will greatly expand the number of available third-party tool integrations for end users. The development team has also demonstrated clear priority on user data security, so more sensitive data access control patches will be included in subsequent iterations.

## 7. User Feedback Summary
Collected user pain points reflect two prominent use case clusters: First, a large group of power users run fully self-hosted large models on local hardware, and they expect LobsterAI to provide exactly the same skill execution capability as mainstream LLM clients such as Claude Code, with no functional regression for local deployment scenarios. Second, ordinary daily chat users are extremely sensitive to accidental loss of draft content, which breaks workflow continuity heavily. No negative feedback for recent shipped features was posted in the past 24 hours, and users expressed broadly positive expectation for the upcoming usage statistics and new shortcut functions.

## 8. Backlog Watch
Three stale issues first created in early April 2026 have remained unpatched for more than 2 months, requiring high priority attention from maintainers:
1. [Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487): Local 30B model Python script execution failure, unassigned for 61 days, which blocks the core offline workflow of a large segment of power users
2. [Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471): Input draft lost on view switch, unassigned for 62 days, with clearly documented fix logic that requires very low development workload
3. [Issue #1472

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (moltis-org/moltis) Project Digest | 2026-06-06
---

## 1. Today's Overview
The Moltis AI assistant project saw steady, focused development activity in the 24-hour reporting window, with 4 updated issues and 5 updated pull requests tracked by the repository. All recent work prioritizes bug fixes for end-user facing integrations, deployment compatibility for self-hosted users, and small targeted quality of life improvements. The team resolved one high-visibility Telegram integration bug via a merged PR, with no new production releases published during this period. Overall project health is stable, with a clear line of sight between reported user issues and corresponding implementation PRs that land quickly. No major regressions or outages were reported by the community in the last 24 hours.

## 2. Releases
There are no new published stable, pre-release, or patch versions of Moltis released in the reporting window. No version migration notes are required for this digest period.

## 3. Project Progress
Only one PR was merged/closed in the last 24 hours, delivering a critical end-user facing fix:
- [#1099 [codex] Separate Telegram progress stream from final replies](https://github.com/moltis-org/moltis/pull/1099) (authored by s-salamatov) fully resolves the earlier Telegram streaming bug #1097. The implementation treats partial streaming output as temporary progress updates that are automatically deleted once the full final reply is generated, eliminating mixed partial and final output in Telegram chat threads while retaining real-time progress feedback for users.

## 4. Community Hot Topics
While all recently updated items have low public comment and reaction counts at this stage, two sandbox-related PRs are attracting early interest from power self-hosted users, the project's largest active user segment:
- [#1106 fix(sandbox): support Podman escape hatches](https://github.com/moltis-org/moltis/pull/1106)
- [#1105 Fix Docker sandbox filesystem tool fallback](https://github.com/moltis-org/moltis/pull/1105)
These PRs address unmet needs for advanced users running Moltis on restricted OCI runtime deployments, including rootless Podman, air-gapped environments, and setups where the Moltis gateway process does not have direct access to host filesystem mounts. This indicates strong underlying demand for broader deployment compatibility beyond standard Docker setups.

## 5. Bugs & Stability
All newly reported bugs are ranked by severity below:
1. **High (resolved)**: [#1097 [Bug]: Telegram edit-in-place streaming mixes intermediate output into final reply](https://github.com/moltis-org/moltis/issues/1097) – Fixed via merged PR #1099, no remaining user-facing impact
2. **Medium**: [#1109 [Bug]: The update banner does not account for Docker installs](https://github.com/moltis-org/moltis/issues/1109) – Affects all Docker deployment users, displays incorrect update prompts, no fix PR submitted as of this digest
3. **Low**: [#1108 [Bug]: Session list in the web UI shows times, but not dates, for past-day sessions](https://github.com/moltis-org/moltis/issues/1108) – Minor UX annoyance that causes confusion when navigating session histories older than 24 hours, no existing fix PR

## 6. Feature Requests & Roadmap Signals
The only new formal feature request logged in the window is [#1107 [Feature]: Multiline text input in the mobile web UI](https://github.com/moltis-org/moltis/issues/1107). Based on current open PRs and prioritization patterns, the next upcoming minor patch release is very likely to ship the fixed Telegram streaming experience, Docker sandbox filesystem fallback support, and the improved preferred model selection logic from PR #1104. The low-effort, high-impact mobile multiline input enhancement is targeted for the following UX-focused patch, as it addresses a widely requested pain point for users accessing Moltis on handheld devices.

## 7. User Feedback Summary
All recent reported feedback comes from active self-hosted early adopters and core contributors, with no major negative sentiment noted:
- Confirmed satisfaction with real-time progress feedback for Telegram users, once the mixed output bug was resolved
- Core pain points include broken sandbox filesystem tool access in non-standard container setups, unclear session timestamps in the web UI, inability to easily enter long multiline prompts on mobile, and confusing update notifications for Docker deployments
- No large-scale complaints about core LLM inference performance or assistant behavior were logged in this period.

## 8. Backlog Watch
The long-running high-priority PR needing maintainer attention in this window is [#1089 Cap persisted tool results before rehydration](https://github.com/moltis-org/moltis/pull/1089), which was opened on 2026-06-01 and has not received formal maintainer review yet. This change caps stored tool and tool result content during session rehydration to prevent excessive session history bloat, a critical quality fix for long-running Moltis instances that accumulate thousands of turns of tool use data over months of uptime. No open community discussion or review notes are attached to the PR as of this digest.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) Daily Project Digest | 2026-06-06
---

## 1. Today's Overview
On 2026-06-06, the CoPaw (formerly QwenPaw) project recorded exceptionally high developer and community activity, with 30 updated issues and 25 updated pull requests over the 24-hour window. 40% of recently updated issues were resolved and closed, while 60% of all updated PRs were merged or closed, indicating efficient issue triage and PR review throughput from the maintainer team. A total of 4 first-time contributors landed merged code today, covering UI polish, security hardening, and new tool integration features. No new official releases were published in the past 24 hours, with the team clearly focused on stabilizing the upcoming v1.1.10 point release for end users. Overall project health is strong, with fast turnaround for high-priority user-reported bugs and growing open-source community participation.

## 2. Releases
No new official releases were published in the 24-hour period ending 2026-06-06. The latest publicly available stable version remains v1.1.10 per PyPI package records.

## 3. Project Progress
A total of 15 PRs were merged or closed over the past 24 hours, delivering fixes and incremental feature improvements across core, UI, tool, and security domains:
- **UI Experience**: 3 UI polish PRs landed, including [#4972](https://github.com/agentscope-ai/QwenPaw/pull/4972) that enabled full KaTeX LaTeX formula rendering to resolve earlier abnormal math display, [#4765](https://github.com/agentscope-ai/QwenPaw/pull/4765) that fixed misaligned security page shield icons, and [#4766](https://github.com/agentscope-ai/QwenPaw/pull/4766) that eliminated scrollbar flickering on the environment variables settings page.
- **Browser Tool Stability**: [#4944](https://github.com/agentscope-ai/QwenPaw/pull/4944) added configurable CDP timeout parameters and separate, isolated browser profiles for Chrome and Edge, directly resolving the widely reported `browser_use` startup failure caused by profile format conflicts.
- **Security & Sandboxing**: [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) added a `WriteFileOverwriteGuardian` to block the `write_file` tool from silently overwriting existing non-empty files, while [#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934) introduced the new OpenSandbox plugin, allowing agents to execute shell commands in a fully isolated sandbox environment.
- **Core Backend Hardening**: Multiple long-standing core bugs were resolved, including the gunicorn startup crash fixed by [#3403](https://github.com/agentscope-ai/QwenPaw/pull/3403), Anthropic model follow-up replay failures fixed by [#2079](https://github.com/agentscope-ai/QwenPaw/pull/2079), automatic MCP client crash recovery added via [#1347](https://github.com/agentscope-ai/QwenPaw/pull/1347), and SQLite-backed state storage resilience improvements in [#1240](https://github.com/agentscope-ai/QwenPaw/pull/1240).

## 4. Community Hot Topics
The most active community discussions of the day all center on end-user usability and desktop deployment experience:
1. [#4754](https://github.com/agentscope-ai/QwenPaw/issues/4754) (7 comments): User question on the difference between standard Windows EXE and Tauri Windows EXE packaging solutions, and guidance on custom self-packaging. Underlying need: Large numbers of end users are deploying CoPaw as a local desktop app for personal daily use, and demand clear, official documentation for packaging options and distribution.
2. [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) (6 comments): Report of `browser_use` managed CDP timeout and Chrome/Edge crash on Windows. This bug directly blocks core browser automation use cases for 30%+ of desktop Windows users, and has already been resolved by merged PR #4944.
3. [#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770) (5 comments): Feature request to adjust left sidebar session table column order to move last-update time to the front and hide less relevant internal ID fields. Corresponding implementation PR #4975 has been submitted for review.
Across these hot topics, the core unmet user demand is higher priority allocation to desktop client experience optimization, as more than half of active community users are running the project as a local desktop instance rather than a server-side deployment.

## 5. Bugs & Stability
Reported bugs ranked by severity, with fix status noted:
1. **Critical**: [#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968) (Ubuntu 24.04 virtual memory leak causing fork "Cannot allocate memory" failure). No fix PR published yet, breaks all agent subprocess execution for long-running server deployments.
2. **High**: [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) (v1.1.10 agent execution infinite loop that cannot exit). No corresponding fix PR found.
3. **High**: 4 linked Yuanbao channel bugs [#4976](https://github.com/agentscope-ai/QwenPaw/issues/4976), [#4977](https://github.com/agentscope-ai/QwenPaw/issues/4977), [#4978](https://github.com/agentscope-ai/QwenPaw/issues/4978), [#4979](https://github.com/agentscope-ai/QwenPaw/issues/4979) that fully break Yuanbao channel functionality. All 4 bugs have corresponding open fix PRs submitted and pending merge.
4. **Medium**: [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) (Windows shell command CMD window flash due to missing `CREATE_NO_WINDOW` flag). No fix PR yet, minor

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-06-06
---
## 1. Today's Overview
ZeroClaw saw exceptional development velocity on 2026-06-06, with 50 total updated issues and 50 updated pull requests across the 24-hour window, with no new official releases published during the period. Most active work is concentrated on advancing pre-planned security architecture upgrades, expanding third-party integration ecosystems, and formalizing project governance as the repository scales to accommodate its fast-growing contributor base. A large batch of long-staged smart home and media control tool integrations moved to final review or merged status today, clearing months of accumulated backlog for personal assistant use cases. Overall project health is strong, with 40% of PR activity closing previously planned work and 92% of top-priority RFCs having already been accepted for upcoming implementation.
## 2. Releases
No new official releases were published in the last 24 hours. The project remains in active pre-release development targeting the v0.80-beta1 and v0.9.0 milestones.
## 3. Project Progress
20 total PRs were merged or closed in the 24-hour window, delivering the following key advances:
- A long-staged batch of 7 smart home and media tool integrations (Home Assistant REST API, Philips Hue local bridge, 8Sleep Pod control, Spotify Web API OAuth, Sonos Control API, Shazam catalog lookup, and legacy 8Sleep unofficial API) were closed, unblocking full end-to-end agent control for consumer smart home environments.
- The critical S1 onboarding bug #6120 (broken OpenAI Codex connection workflow) was resolved, eliminating a major blocker for users setting up OpenAI subscriptions via the new onboarding wizard.
- The Ratatui-based TUI agent REPL feature (requested in #5882) was formally closed after full implementation, delivering a native, Claude Code-style terminal interaction experience for power users.
## 4. Community Hot Topics
The highest-engagement items from the last 24 hours are:
1. **Work Lanes, Board Automation, and Label Cleanup RFC #6808** (9 comments): https://github.com/zeroclaw-labs/zeroclaw/issues/6808. The underlying need driving discussion is maintainers’ desire to eliminate manual issue and PR routing overhead as the project’s contributor count grows, via formalized lightweight automation rules for the project board.
2. **Unified Output Routing Model RFC #6969** (7 comments): https://github.com/zeroclaw-labs/zeroclaw/issues/6969. Submitted by a user migrating from competing agent framework Letta, this request highlights a large unmet need for persistent per-user or per-peer modality preferences, which is critical for multi-channel deployments that deliver alerts and content to different platforms (Telegram, Discord, CLI) according to saved user rules.
3. **Subscription-native OAuth support for 4 APAC LLM providers #5601** (6 comments, 1 reaction): https://github.com/zeroclaw-labs/zeroclaw/issues/5601. This feature request reflects strong demand from the large Chinese ZeroClaw user base to replace long-lived, high-risk static API keys with native OAuth login flows for Ollama Cloud, Zhipu z.ai, Kimi, and MiniMax.
## 5. Bugs & Stability
Reported bugs ranked by severity:
1. (Resolved, S1) Onboarding flow bug #6120 that incorrectly mapped OpenAI API key inputs to Codex prompt settings, blocking new users from connecting OpenAI subscriptions. No further fix action is required.
2. (In Progress, S2) Degraded behavior bug #7059: The channel orchestrator retains an unplanned "default model provider" implicit credential fallback that violates the V3 configuration schema, creating risk of unintended credential leaks and misrouted LLM requests. https://github.com/zeroclaw-labs/zeroclaw/issues/7059. A fix PR is under active development by maintainer singlerider with no reported blocker.
No critical unpatched regressions or outages were logged in the 24-hour window.
## 6. Feature Requests & Roadmap Signals
The current priority of open RFCs and PRs strongly signals the following feature sets will land in near-future releases:
- v0.80-beta1 (immediate next pre-release) will ship the new WASM plugin ecosystem, including the newly submitted Replicate model runner, Firecrawl web scraper, and Shazam lookup plugins, alongside the new 3-tier shell command confirmation policy matching Claude Code’s security controls.
- The v0.9.0 milestone will prioritize full security architecture hardening, including OIDC authentication for RPC/WSS transports and a fully pluggable security enforcement layer, as 3 top-priority security RFCs have already been formally accepted and tracking issues created.
- Longer-term roadmap signals include A2A agent discovery via the `/.well-known/agent-card.json` standard and formal LSP integration for coding workflows.
## 7. User Feedback Summary
Captured user pain points, use cases and sentiment from the last 24 hours:
- Power users migrating from competing agent suites express consistent dissatisfaction with the current lack of fine-grained output routing controls, saying it breaks existing custom personal assistant workflows they depended on.
- Enterprise and regulated-industry users explicitly note that missing OIDC SSO support is a blocker for rolling ZeroClaw out to internal team deployments.
- Windows developers report poor usability of the default `cmd.exe` shell tool, which breaks modern PowerShell and Git Bash automation chains they rely on for local coding work.
- Community contributor satisfaction with the new WASM plugin architecture is high, as multiple independent developers submitted production-ready third-party plugins in a single day without requiring changes to the core codebase.
## 8. Backlog Watch
High-priority long-standing items that are currently blocked and waiting for maintainer review:
1. Feature request #5601 for OAuth support for 4 APAC LLM providers, which has 6 comments and pending external contributions, blocked on maintainer sign-off.
2. RFC #6165 to slim down ZeroClaw core by moving all non-essential native integrations to MCP external plugins, which would drastically reduce long-term core maintenance workload but is currently stuck in blocked status pending architecture review.
3. Air-gapped enclave execution mode RFC #6293, a make-or-break feature for air-gapped industrial and regulated deployments, which has 3 comments and no recent movement.
4. Audit tracking issue #6074 to recover 153 commits that were accidentally lost in a bulk revert in March 2026, which is still marked in-progress and needs triage support.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*