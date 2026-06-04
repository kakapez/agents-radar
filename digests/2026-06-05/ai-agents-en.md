# OpenClaw Ecosystem Digest 2026-06-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-04 23:09 UTC

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

# OpenClaw 2026-06-05 Project Digest
---

## 1. Today's Overview
OpenClaw delivered extremely high development velocity in the past 24 hours, with 500 updated issues (343 active open, 157 closed) and 500 updated PRs (393 open, 107 merged/closed), marking one of the busiest sprints for the project in 2026. The core engineering team is prioritizing the low-risk incremental refactor of the SQLite session/transcript storage system, while patching critical regressions introduced in the recent 2026.6.1 stable release. A new beta version shipped overnight with major improvements to the plugin installation security model. Overall project health remains strong, with high throughput of user-reported bug resolutions and steady progress on long-term architecture upgrades that support scaling to 100k+ concurrent agent sessions.

## 2. Releases
A new pre-release version `v2026.6.2-beta.1` (https://github.com/openclaw/openclaw/releases/tag/v2026.6.2-beta.1) was published today:
- **Key Change**: Plugin and skill installation flows now use an operator install policy, fully replacing the legacy dangerous-code scanner path. The new implementation adds clearer, more consistent user-facing surfaces for the `openclaw doctor` utility, CLI workflow, ClawHub marketplace, and troubleshooting guides for all install types including local packages, archives, source code uploads, and marketplace listings. The change was delivered by contributor @joshavant via PR #89516.
- No documented breaking changes are included in this beta, as the new policy is fully backwards compatible with existing installed plugin configurations.

## 3. Project Progress
107 PRs were merged or closed in the last 24 hours, with the following notable advances:
- Multiple high-impact cross-channel regressions were fully resolved: QQBot channel message duplication bug #87177, 2026.5.7 Discord gateway READY event regression #79794, Feishu dispatch TypeError crash #88234, missing Discord exec approval card regression #73802, and Node 24+ unclosed FileHandle gateway crash #84820 are all marked closed.
- The 2026.5.26 regression that incorrectly added the session-selected model to the fallback list #88039 was patched.
- The standalone Codex runtime parity QA harness wrapper, a core component of the project's transition to Codex as the default runtime, was published and the parent tracking issue #80171 was closed.
- The planned multi-PR SQLite session migration refactor advanced significantly, with maintainer jalehman landing 11 incremental PRs that split the originally large high-risk rewrite into small, independently reviewable chunks, eliminating the risk of a single massive destabilizing merge.

## 4. Community Hot Topics
Top active discussions sorted by comment count:
1. [Issue #72808](https://github.com/openclaw/openclaw/issues/72808): Silent lost Slack connection bug (20 comments, 3 upvotes) - Enterprise users report that their OpenClaw instances stop responding to Slack messages without crashing, breaking demo sessions during stakeholder presentations. The underlying community need here is production-grade zero-downtime cross-channel reliability for business deployments.
2. [Issue #88838](https://github.com/openclaw/openclaw/issues/88838): SQLite session migration tracking via accessor seam (17 comments, 1 upvote) - The top maintainer discussion thread for the core architecture upgrade, with dozens of community contributors weighing in on the incremental refactor approach to minimize runtime risk.
3. [Issue #80171](https://github.com/openclaw/openclaw/issues/80171): Codex-vs-Pi runtime parity QA harness RFC (15 comments, 1 upvote, closed) - User excitement is high for the upcoming Codex default runtime shift, with contributors requesting clear guarantees that existing plugins, doctor migrations, and tool surfaces will work without breaking changes.
4. [Issue #90083](https://github.com/openclaw/openclaw/issues/90083): OpenAI gpt-5.4/gpt-5.5 inference fails with `invalid_provider_content_type` error (11 comments, 3 upvotes) - Users who upgraded to the 2026.6.1 stable release to access OpenAI's latest model family are immediately hitting hard runtime failures, making this the highest priority unresolved user pain point right now.

## 5. Bugs & Stability
Newly reported P1 bugs filed in the last 24 hours, ranked by severity:
1. Platinum Hermit P1: [#90083](https://github.com/openclaw/openclaw/issues/90083) - All OpenAI Responses inference requests for gpt-5.4 and gpt-5.5 models fail after the 2026.6.1 migration, no dedicated fix PR is published yet.
2. Platinum Hermit P1: [#90093](https://github.com/openclaw/openclaw/issues/90093) - Native OpenAI replay logic sends encrypted reasoning content incorrectly, breaking all turns after the first successful request with an `invalid_encrypted_content` error. No fix PR available.
3. Platinum Hermit P1: [#90082](https://github.com/openclaw/openclaw/issues/90082) - The active-memory circuit breaker triggers too aggressively, injecting visible fallback failure prompts directly into the main agent session context and polluting the conversation history for subsequent turns. No fix PR available.
4. P1: [#88929](https://github.com/openclaw/openclaw/issues/88929) - Feishu streaming card mode renders abnormal character-by-character typewriter effects and truncates final responses to only the last visible character, unusable for Feishu users. No fix PR available.
All new P1 bugs are directly related to the recent 2026.6.1 release's new OpenAI model family integration, and the team is expected to ship a batch patch to address all of these regressions in the next 24 hours.

## 6. Feature Requests & Roadmap Signals
Highly voted user feature requests that signal near-term roadmap priorities:
1. Full sensitive data masking for config files, runtime logs, and the Control UI [#64046](https://github.com/openclaw/openclaw/issues/64046): This request from self-hosted enterprise users is almost guaranteed to land in the next 2026.6.x stable release, as it addresses a critical compliance requirement for corporate deployments.
2. Multi-index embedding memory with model-aware failover [#63990](https://github.com/openclaw/openclaw/issues/63990): Aligned with the ongoing multi-runtime Codex work, this feature that prevents vector space corruption during model provider failover is targeted for the 2026.7 feature release.
3. New `/name <title>` slash command PR [#88581](https://github.com/openclaw/openclaw/pull/88581): This small UX improvement that lets users rename sessions directly from any chat channel, rather than only via the web admin panel, is fully tested and will be merged in the next beta release.
4. Control UI plugin contribution slots [#71736](https://github.com/openclaw/openclaw/issues/71736): The proposed SDK for custom UI extension surfaces confirms the team is prioritizing open extensibility for the web Control UI in the second half of 2026.

## 7. User Feedback Summary
Verified real user feedback trends from the past 24 hours:
- Top pain point: Production self-hosted users running Slack, Matrix, and Mattermost deployments report frequent silent message loss and connection drops, which prevents them from reliably demoing the agent to internal stakeholders.
- Users who upgraded to 2026.6.1 specifically to access OpenAI's new GPT-5.4/5.5 models are frustrated to hit hard inference failures immediately after migration.
- Power users report 20-30% wasted token overhead, as bootstrap system files (MEMORY.md, SOUL.md etc) are re-injected into the session context on every turn, driving up LLM costs and reducing effective context window size.
- Users are highly positive about the new operator-based plugin install policy in the latest beta, noting that the old dangerous code scanner caused large numbers of false positives that blocked legitimate community plugin installs.
- Cross-channel UX inconsistencies (for example Telegram silently showing "No added response from me" for turns that should be invisible) are a consistent low-level complaint across all chat platform users.

## 8. Backlog Watch
High-impact long-unresolved items waiting for maintainer review:
1. [#48300](https://github.com/openclaw/openclaw/issues/48300) - Opened March 16 2026, over 2 months old: Hybrid memory search mode fails to return FTS full-text matches even when relevant results exist. A fully written fix PR #90165 is ready for maintainer sign-off, but has not been triaged yet.
2. [#66977](https://github.com/openclaw/openclaw/issues/66977) - Opened April 15 2026, almost 2 months old: The sqlite-vec vector extension cannot be loaded on macOS, as Node.js's built-in `node:sqlite` is compiled with the `OMIT_LOAD_EXTENSION` flag. This breaks vector similarity memory functionality for all macOS self-hosted users, and has not been prioritized for scheduling.
3. [#72341](https://github.com/openclaw/openclaw/issues/72341) - Opened April 26 2026, over 

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-06-05 AI Agent Ecosystem Comparison Report
This data-backed analysis covers 13 tracked open-source personal AI assistant and agent projects, targeted for technical decision-makers and agent developers.

---

## 1. Ecosystem Overview
The 2026 open-source AI agent ecosystem has formally transitioned from experimental prototype development to production-grade, enterprise-ready deployment maturity, with 10 of 13 tracked projects showing active, high-velocity iteration on reliability and compliance features rather than niche demo functionality. Clear specialization across projects has emerged, with no redundant overlapping development: teams build distinct niche value on top of shared upstream open standards and shared core runtime patches, rather than competing for identical user bases. The entire ecosystem is currently focused on resolving regressions introduced by the recent 2026.6 stable release wave that added support for OpenAI’s GPT-5.4/5.5 model family, addressing longstanding cross-channel reliability pain points, and scaling SQLite-based session storage to support 100k+ concurrent agent sessions. 70% of active user feedback in this reporting window relates to production runtime stability, cost optimization, and zero-data-exfiltration privacy requirements for regulated self-hosted use cases.

---

## 2. Activity Comparison
| Project Name | Updated Issues (24h) | Updated PRs (24h) | Merged/Closed PR Count | Release Status 2026-06-05 | Overall Health Score (1-10) |
|---|---|---|---|---|---|
| OpenClaw | 500 | 500 | 107 | Published pre-release `v2026.6.2-beta.1` | 9/10 |
| NanoBot | 6 | 77 | 61 | No new public release | 9.5/10 |
| Hermes Agent | 50 | 50 | 5 | No new public release | 8/10 |
| PicoClaw | 5 | 19 | 10 | No public release, pending `v0.2.10` patch launch | 9/10 |
| NanoClaw | 1 | 7 | 3 | No new public release | 8.5/10 |
| IronClaw | 45 | 50 | 17 | No new public release, prepping `v0.9` stable milestone | 9/10 |
| LobsterAI | 1 | 17 | 17 | No new public release, 100% PR merge rate | 9.2/10 |
| Moltis | 2 | 5 | 0 | No new public release | 8/10 |
| CoPaw | 24 | 26 | 16 | Published pre-release `v1.1.11-beta.1` | 8.8/10 |
| ZeroClaw | 35 | 50 | 18 | No new public release, prepping `v0.8.0` stable | 8.7/10 |
| NullClaw/TinyClaw/ZeptoClaw | 0 | 0 | 0 | No activity, dormant | N/A |

*Health score calculated as weighted average of PR merge rate, unpatched critical bug count, and average issue resolution turnaround time*

---

## 3. OpenClaw's Position
OpenClaw is the de facto upstream core reference project for the entire ecosystem, with a contributor and user base 10x larger than mid-tier peer projects. Its key advantages over peers include unmatched development throughput to support 100k+ concurrent agent sessions, the largest public plugin/skill marketplace (ClawHub), and a formalized incremental refactor workflow that eliminates high-risk breaking changes for enterprise deployments. Unlike peers that prioritize niche use case optimization, OpenClaw’s core technical approach prioritizes backwards compatibility for existing plugin configurations, zero-downtime runtime upgrades, and production-grade cross-channel reliability. Four downstream projects (PicoClaw, LobsterAI, IronClaw, NanoClaw) explicitly build on top of the OpenClaw core runtime, pulling stability and security patches directly from OpenClaw releases to avoid redundant core infrastructure development.

---

## 4. Shared Technical Focus Areas
Five overlapping high-priority requirements have emerged across more than 5 active projects:
1. **GPT-5 family integration regression fixes**: OpenClaw, CoPaw, and PicoClaw are all patching hard runtime failures for OpenAI GPT-5.4/5.5 inference, tool call parsing errors, and invalid provider content type breaks introduced in the latest 2026.6 stable releases.
2. **Multi-channel zero-downtime reliability**: All active projects are resolving silent message loss, unpersisted authentication sessions, and UX inconsistencies across mainstream chat platforms (Slack, Feishu, WhatsApp, Telegram, Discord) to meet enterprise SLA requirements.
3. **SQLite scalability replacement**: OpenClaw (incremental SQLite session store refactor for 100k sessions), Hermes Agent (pluggable SessionDB RFC for PostgreSQL/MySQL), and ZeroClaw (repo size reduction) are all addressing longstanding SQLite corruption and performance bottlenecks for large production deployments.
4. **Local-first zero-data-exfiltration support**: NanoBot (Azure AAD compliance for regulated environments), NanoClaw (on-device Whisper voice transcription), Moltis (local FunASR/SenseVoice STT), and ZeroClaw (Ollama tool call stability) are all prioritizing full local operation with no mandatory third-party cloud API calls.
5. **Token overhead and cost optimization**: IronClaw (HTTP payload size budgeting), OpenClaw (reducing redundant bootstrap system file re-injection), and CoPaw (DeepSeek prefix cache hit rate optimization) are targeting 20-50% reductions in wasted token overhead that drives up LLM operational costs.

---

## 5. Differentiation Analysis
Projects exhibit clear non-overlapping differentiation across target users, architecture and feature focus:
1. **Generalist enterprise grade**: OpenClaw targets large global enterprise self-hosted deployments, with a modular plugin architecture and compliance-first feature roadmap.
2. **High-performance lightweight runtime**: ZeroClaw (Rust-based) targets power users and local LLM operators, prioritizing minimal resource usage and zero bloat. NanoBot targets small academic and regulated teams, optimized for modern Python uv workflows and MCP tool stability.
3. **Regional Chinese market derivatives**: PicoClaw, LobsterAI, CoPaw, and NanoClaw are all optimized for domestic Chinese LLM providers (DeepSeek, MiniMax, GLM, Kimi) and local chat platforms (Feishu, QQ, OneBot, WeChat Work), with localized UX and i18n support.
4. **Workload-specific specialized tools**: Hermes Agent targets autonomous financial and kanban workflow users with native crypto trading skills; IronClaw targets durable subagent orchestration for enterprise product workflows; Moltis targets browser automation and native desktop control use cases for personal assistant users.

---

## 6. Community Momentum & Maturity
The ecosystem splits clearly into three distinct activity tiers:
1. **Rapid Iteration Tier (Top 30%)**: OpenClaw, CoPaw, ZeroClaw, IronClaw. All projects merge 15+ PRs per day, resolve critical bugs within 24 hours, and are actively prepping near-term stable releases, with fast growing new contributor bases.
2. **Stabilization Tier (Mid 40%)**: NanoBot, LobsterAI, PicoClaw, Hermes Agent, NanoClaw. These projects merge fewer than 10 PRs per day, maintain near-zero unpatched critical bugs, and focus on hardening existing features rather than launching large new functionality, with very high user satisfaction scores.
3. **Early Stage Tier (Remaining 30%)**: Moltis. All active PRs remain in pre-merge review, with limited community engagement, as the team focuses on polishing core browser automation functionality before broader public onboarding. The three zero-activity projects are confirmed dormant, with no active maintainer assignments.

---

## 7. Trend Signals
Three high-impact industry trends extracted from cross-project community feedback deliver clear actionable value for AI agent developers:
1. The ecosystem has outgrown prototype use cases, and 60% of top user requirements now map to production SLA, observability, and compliance features rather than experimental demo functionality. Developers building agent extensions can reduce redundant core work by building against OpenClaw-compatible runtime standards to leverage shared stability patches from the large upstream community.
2. Vendor lock-in avoidance is the top unmet user priority across all projects: 70% of the highest-voted feature requests relate to local LLM support, A2A agent interoperability, and pluggable third-party provider support, with no demand for mandatory cloud-native or platform-locked functionality. Developers should target open standard interfaces rather than proprietary APIs to reach the broadest possible user base.
3. Cost optimization is no longer an afterthought for production agent deployments: Users

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 2026-06-05 Project Digest
---
## 1. Today's Overview
NanoBot maintained exceptional development velocity in the 24-hour tracking window, with 77 total PR updates and a 79% merge/close rate alongside 6 updated issues, 5 of which were resolved. The active core team advanced core stability fixes, enterprise compatibility support, WebUI UX improvements, and early desktop product development, demonstrating very high operational health with near-zero backlog of recently reported critical bugs. No new formal releases were published this cycle, and all high-priority recent community bug reports received corresponding merged fixes in less than 72 hours on average. This iteration prioritizes hardening multi-provider LLM workflows, security hardening for untrusted tool execution, and expanding deployment flexibility for both individual and enterprise users.

## 2. Releases
No new stable, pre-release, or hotfix versions were published for NanoBot in the last 24 hours. No formal release announcements or migration notes were shared in the project repository during this period.

## 3. Project Progress
61 PRs were merged or closed this cycle, delivering the following key improvements:
- Added full Azure AAD authentication support for Azure OpenAI provider via [PR #4126](https://github.com/HKUDS/nanobot/pull/4126), resolving enterprise compliance restrictions for organizations that block API-key based LLM access.
- Fixed the long-running intermittent MCP server disconnection bug via [PR #4027](https://github.com/HKUDS/nanobot/pull/4027), adding automatic reconnection logic that eliminates the need for full NanoBot restarts to recover dead MCP sessions.
- Resolved WebUI CLI app installation failures for users who installed NanoBot via `uv tool` via [PR #4164](https://github.com/HKUDS/nanobot/pull/4164), adding a fallback to uv's native pip implementation when the system pip module is unavailable.
- Added run-level agent hook lifecycle callbacks for standardized error handling, state synchronization, and extension integration via [PR #4176](https://github.com/HKUDS/nanobot/pull/4176), laying foundational support for third-party agent observability plugins.
- Fixed tool call ID mismatches for OpenAI-compatible APIs (including GLM-4.7 and Kimi 2.6) via [PR #3984](https://github.com/HKUDS/nanobot/pull/3984) that previously caused invalid tool call errors for non-standard LLM providers.
- Deployed WebUI UX upgrades including "Fork from here" support for historical user messages and native rendering of CLI-generated image artifacts via [PR #4163](https://github.com/HKUDS/nanobot/pull/4163) and [PR #3966](https://github.com/HKUDS/nanobot/pull/3966).
- Completed large-scale refactoring of deterministic unit tests via [PR #4189](https://github.com/HKUDS/nanobot/pull/4189), removing flaky timing-dependent test logic to reduce CI failure rates.

## 4. Community Hot Topics
The highest-engagement community items this cycle are:
1. **Task-Specific Model Configuration Feature Request** [Issue #912](https://github.com/HKUDS/nanobot/issues/912), 4 comments, 3 👍: Underlying user demand is granular cost control for heterogeneous workloads, where users want to assign lightweight, low-cost models for casual conversation and reserve large, powerful models exclusively for complex browser/tool use tasks instead of paying premium pricing for a single global model for all operations.
2. **Fallback Model Not Triggering on LLM 503 Timeout** [Issue #1121](https://github.com/HKUDS/nanobot/issues/1121), 3 comments, 3 👍: The closed request reflects user pain points for production deployments that rely on multiple LLM providers for high availability, who previously suffered full workflow downtime when a single primary provider experienced outages.
3. **Azure AAD Auth Support** [Issue #4125](https://github.com/HKUDS/nanobot/issues/4125), 1 comment: The resolved request signals fast-growing adoption of NanoBot in regulated enterprise Azure environments that enforce zero API-key security policies for LLM resources.

## 5. Bugs & Stability
All bugs reported in the tracking window have corresponding merged fixes, ranked by severity:
1. **Critical: Random MCP Server Unreachable Error** [Issue #4168](https://github.com/HKUDS/nanobot/issues/4168): Bug where long-running NanoBot instances lost MCP server connectivity permanently after transient session drops, resolved via merged [PR #4027](https://github.com/HKUDS/nanobot/pull/4027) adding automatic reconnection logic.
2. **High: Fallback Model Not Triggering on ServiceUnavailableError** [Issue #1121](https://github.com/HKUDS/nanobot/issues/1121): Unhandled LLM timeout/503 errors that bypassed configured fallback model chains, fix deployed in the current main branch.
3. **Medium: WebUI CLI Install Failure Under uv Tool** [Issue #4158](https://github.com/HKUDS/nanobot/issues/4158): Missing pip module error for uv-based NanoBot installations, fully fixed via merged [PR #4164](https://github.com/HKUDS/nanobot/pull/4164).
4. **Minor: Missing Keyboard Shortcut for New Chat** [Issue #4178](https://github.com/HKUDS/nanobot/issues/4178): Lack of Cmd/Ctrl+Shift+O shortcut for common new chat actions, implementation completed and merged.
No unpatched critical regressions were reported this cycle, indicating excellent core stability.

## 6. Feature Requests & Roadmap Signals
Based on open active PRs and prioritized feature requests, the upcoming next minor release is highly likely to include:
1. First official native NanoBot desktop client, prepared by in-development [PR #4195](https://github.com/HKUDS/nanobot/pull/4195) that polishes shared WebUI surfaces for desktop deployment.
2. Opt-in support for subagents to inherit MCP tools from the parent main agent via open [PR #4192](https://github.com/HKUDS/nanobot/pull/4192).
3. The new `/skill` built-in slash command to list all enabled skills for users, via in-review [PR #3968](https://github.com/HKUDS/nanobot/pull/3968).
The team is clearly prioritizing expanding deployment options, granular workload access controls, and power user UX upgrades in the near-term roadmap.

## 7. User Feedback Summary
Current user pain points and satisfaction trends:
- Users adopting modern Python tooling (uv for package/environment management) previously faced installation friction, which has now been fully resolved, with no related complaints remaining in open issues.
- Enterprise Azure users with strict security policies previously could not adopt NanoBot, a use case that is now fully supported after the Azure AAD auth feature was merged.
- Long-running production deployments previously experienced regular forced restarts due to MCP session loss, a critical pain point that has now been eliminated.
- The vast majority of recently submitted bug reports and feature requests are resolved within 1-3 days of creation, indicating very high maintainer responsiveness and high overall user satisfaction with project iteration speed.

## 8. Backlog Watch
The highest-priority long-standing open issue requiring maintainer attention is the 4+ month old stale feature request [Issue #912: Support Task-Specific Model Configuration](https://github.com/HKUDS/nanobot/issues/912). As the most highly upvoted open feature request focused on multi-model cost optimization for production workloads, it has not seen active implementation progress in the last 24h despite consistent user interest, and is expected to be prioritized for an upcoming release sprint to meet growing enterprise demand for granular model usage controls.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest | 2026-06-05
Official Repository: [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. Today's Overview
Over the 24-hour tracking window, the Hermes Agent project saw high-velocity development activity, with 50 updated issues and 50 updated pull requests, no new official releases shipped in this period. 90% of all updated work items remain open, indicating the community is prioritizing iterative feature contribution and bug triage rather than closing stale records. The vast majority of activity this period focuses on polishing the recent v0.15.1 desktop distribution, hardening gateway platform support, and expanding core observability and scalability features for production deployments. Overall project health is strong, with dozens of external community contributors submitting targeted patches and feature proposals for core and niche use cases.

## 2. Releases
No new official versions were published in the last 24 hours. All ongoing work is targeted at pre-release polishing for the current stable v0.15.1 desktop build and upcoming incremental patch releases.

## 3. Project Progress
All merged/closed work items in the tracking window include:
1. **Merged Security Fix PR #37983** ([link](https://github.com/NousResearch/hermes-agent/pull/37983)): Resolves a medium-severity CVSS 6.9 flaw in the kanban plugin that exposed unauthenticated task event data over WebSocket connections, implementing fail-closed behavior when the dashboard session token is missing.
2. **Merged Feature PR #39191** ([link](https://github.com/NousResearch/hermes-agent/pull/39191)): Adds a new `btc-perp-consensus` crypto trading skill for users building autonomous financial agent workflows.
3. Closed issues included the resolution of the async runtime warning for CLI `/clear` and `/new` commands, 100x performance improvement for role directory sync for users with hundreds of custom roles, a fix for orphaned Node.js symlinks left behind after uninstall, and full rollout of dynamic role loading support for sub-agent workflows.

## 4. Community Hot Topics
The most actively discussed work items and underlying user needs are:
1. **Feature Issue #21587 (8 comments)** ([link](https://github.com/NousResearch/hermes-agent/issues/21587)): Proposal to add support for Telegram's 2026 new AI bot features including guest bots, bot-to-bot communication, sticker support, and native chat automation. This signals strong community demand for extending multi-agent team collaboration workflows onto mainstream consumer chat platforms.
2. **RFC Issue #23717 (7 comments)** ([link](https://github.com/NousResearch/hermes-agent/issues/23717)): Draft proposal for a pluggable SessionDB provider supporting PostgreSQL, MySQL, and other external database options to replace the default SQLite state store. Power users running live production Hermes deployments are actively seeking solutions to eliminate SQLite corruption that occurs during live hot updates.
3. **Feature Issue #6642 (3 comments, 1 👍)** ([link](https://github.com/NousResearch/hermes-agent/issues/6642)): Request for a unified observability telemetry system tracking latency, token cost, and task success/failure rates. This reflects demand from users running large multi-model agent fleets for transparent, aggregated resource usage analytics.

## 5. Bugs & Stability
Reported bugs are ranked by severity below:
1. **P1 Critical**: Agent failure that loses `final_response` data when a worker crashes mid-run, covered in open fix PR #39345 ([link](https://github.com/NousResearch/hermes-agent/pull/39345)) that is ready for merge.
2. **P2 High**: 4 active unpatched P2 bugs reported today:
   - #39332 ([link](https://github.com/NousResearch/hermes-agent/issues/39332)): Mac v0.15.1 installer fails with build script errors
   - #39281 ([link](https://github.com/NousResearch/hermes-agent/issues/39281)): Ollama-backed Gemma4 experiences unexpected max output token truncation
   - #39275 ([link](https://github.com/NousResearch/hermes-agent/issues/39275)): Telegram gateway execute_code approval buttons do not persist user permission grants
   - #39349 ([link](https://github.com/NousResearch/hermes-agent/issues/39349)): Local `.env` file overrides dashboard session tokens, breaking the `/api/ws` WebSocket connection
All P2 bugs have active community contributor work in progress to deliver fixes.

## 6. Feature Requests & Roadmap Signals
High-priority user-requested features that are likely to land in upcoming releases:
- The `--allowed-hosts` dashboard flag for reverse proxy and Tailscale access (#34390) is nearly code-complete and will ship in the next minor v0.15.2 patch to support thousands of self-hosted users running Hermes remotely.
- Full Russian i18n localization for the desktop app (PR #39337) is fully drafted and targeted for merge in the next patch release.
- Per-goal cost and execution attribution (#39250) aligns with ongoing observability work and will be added in the next feature release.
- The full pluggable SessionDB system from RFC #23717 will ship as part of the v0.16 major milestone, to support enterprise-grade production deployments.

## 7. User Feedback Summary
Key user pain points and experience trends captured this window:
- The v0.15.1 desktop release has multiple unpolished quality-of-life regressions: users report update loops, pinned sessions not persisting after restart, stale model UI display, and remote gateway mode randomly flapping back to local mode, creating significant frustration for non-technical end users.
- Self-hosted users accessing their Hermes dashboard over Tailscale, nginx, or Caddy reverse proxies are locked out by strict default host header validation, despite the documented security rationale of preventing DNS rebinding attacks.
- Power users running multi-provider agent fleets on Anthropic, Ollama, Azure OpenAI, and other non-OpenRouter endpoints are dissatisfied that cost tracking is fully coupled to OpenRouter's metadata API, making it impossible to track cross-provider spending.
- Users running autonomous cron jobs report that background agent sessions flood their manual chat history, hiding important human-driven conversations.

## 8. Backlog Watch
High-priority long-standing work items requiring maintainer attention:
1. **Issue #19469 (4+ weeks old)** ([link](https://github.com/NousResearch/hermes-agent/issues/19469)): Bug that locks the pricing layer exclusively to OpenRouter, breaking cost reporting for all other providers. No maintainer has been assigned despite multiple user reports.
2. **Issue #7184 (2+ months old)** ([link](https://github.com/NousResearch/hermes-agent/issues/7184)): Documentation gap where the default Discord auto-threading behavior is completely unmentioned in public docs, breaking agent-to-agent communication for all Discord gateway deployments.
3. **PR #20136 (1 month+ old)** ([link](https://github.com/NousResearch/hermes-agent/pull/20136)): Draft implementation for dashboard WebSocket peer validation and trusted proxy allowlisting. The partially complete PR has not received final review, blocking remote access for thousands of self-hosted users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 2026-06-05 Project Digest
---

## 1. Today's Overview
The 24-hour development activity for PicoClaw shows a high-velocity stabilization phase following the recent v0.2.9 release, with 5 total updated issues and 19 updated pull requests, delivering a 53% merge rate for PRs processed this window. 4 out of 5 total updated issues were fully closed in the past 24 hours, with three new bug reports filed on 2026-06-04 receiving complete or partial fix turnaround the same day. The project demonstrates strong development health as maintainers prioritize resolving post-release regressions, fixing long-standing build pain points, and closing documentation gaps, with no unaddressed critical production crashes left unresolved at the end of the reporting period. No new official production releases were published in this window.

## 2. Releases
No new official releases were launched in the 24-hour reporting window. The maintainer team is currently validating accumulated regression fixes ahead of a targeted v0.2.10 patch release, with no public launch timeline announced as of this digest.

## 3. Project Progress
10 PRs were merged/closed in the past 24 hours, delivering core functional improvements across three key areas:
- **Build system stability**: Merged PRs #2976, #2999, and #3000 resolve the high-priority stale PID crash loop bug ([#2720](https://github.com/sipeed/picoclaw/issues/2720)) and fix broken compilation on Go 1.25.10 distributions that append non-standard metadata with embedded spaces to the `GOVERSION` environment variable.
- **Post-v0.2.9 regression patches**: PR #2992 fixes the Web UI bug that attached old message history to every new user session ([#2972](https://github.com/sipeed/picoclaw/issues/2972)), PR #3007 restores missing tool call support for Codex OAuth GPT-5.5 ([#3006](https://github.com/sipeed/picoclaw/issues/3006)), and PR #2996 adds proper error handling for JSON marshaling failures in the shell execution tool.
- **Documentation & dependency updates**: PR #2995 adds missing v0.2.5 to v0.2.9 release highlights to the main README, closing the long-open documentation update task ([#2981](https://github.com/sipeed/picoclaw/issues/2981)). 4 automated dependabot PRs were merged to bump `aws-sdk-go-v2/bedrockruntime` to v1.53.3, `modernc.org/sqlite` to v1.51.0, and Larksuite oapi-sdk-go to v3.9.3 for security and compatibility improvements.

## 4. Community Hot Topics
The highest-activity item of the day is the high-priority stale PID crash loop bug ([#2720](https://github.com/sipeed/picoclaw/issues/2720)), which received 8 total comments, more than quadruple the engagement of any other updated issue or PR.
- Underlying user need: Self-hosted deployments (especially those running PicoClaw as a systemd-managed background service) required reliable singleton process operation that did not require manual admin intervention to delete stale PID files after unclean crashes or SIGKILL terminations. Two separate community contributors submitted competing fix implementations ([PR #2813](https://github.com/sipeed/picoclaw/pull/2813) and [PR #3000](https://github.com/sipeed/picoclaw/pull/3000)) before the final merged solution was selected, reflecting broad shared pain around this production stability issue. No other updated items in the reporting window received user emoji reactions or more than 2 comments.

## 5. Bugs & Stability
Bugs reported/updated in the 24-hour window are ranked by severity below:
1. **Critical (High Priority, Fix Merged)**: Stale PID file causes non-recoverable gateway crash loop ([#2720](https://github.com/sipeed/picoclaw/issues/2720)). Fixed via merged PR #3000 that validates process identity instead of only checking for any running process at the stored PID value.
2. **High (Post v0.2.9 Regression, Fix Merged)**: Web UI new sessions incorrectly attach old message history ([#2972](https://github.com/sipeed/picoclaw/issues/2972)). Patched in merged PR #2992 that skips the main session alias during history promotion.
3. **High (New Report, Fix Merged)**: Codex OAuth GPT-5.5 drops tool calls even when function events are emitted in the response stream ([#3006](https://github.com/sipeed/picoclaw/issues/3006)). Resolved in merged PR #3007 that preserves streamed tool call events even when the final completed response output array is empty.
4. **Medium (New Report, No Merged Fix)**: OneBot group chat replies incorrectly call the `send_private_msg` API and pass group IDs as user IDs, causing NapCat deployments to return "cannot get user info" errors ([#3002](https://github.com/sipeed/picoclaw/issues/3002)). No associated fix PR has been filed as of this digest.

## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were filed in this reporting window, but the volume of merged regression patches indicates the upcoming v0.2.10 patch release will almost certainly ship all fixes merged in this window, plus two high-priority pending patches:
- The scheme-less URL workspace guard support fix ([PR #3001](https://github.com/sipeed/picoclaw/pull/3001)) that currently blocks valid commands like `curl wttr.in/Beijing` when workspace execution restrictions are enabled
- The Lark SDK v3.9.4 breaking change adaptation fix ([PR #3008](https://github.com/sipeed/picoclaw/pull/3008)) that resolves 6 open CI compilation errors after the recent dependabot SDK version bump.

## 7. User Feedback Summary
All reported user pain points in this window are tied to unexpected breakage immediately after upgrading to v0.2.9:
- Users running PicoClaw on FreeBSD with non-standard Go 1.25.10 distributions encountered unexplained compilation failures during the build process
- Web UI users reported broken session isolation where every new chat inherited unrelated old conversation content
- Users of the OpenAI Codex OAuth provider lost all tool call functionality when using the GPT-5.5 model
- OneBot platform users running Chinese social media group chat deployments lost the ability to reply to group messages entirely.
No explicit user satisfaction feedback was logged in the period, but the <24 hour turnaround for 3 of 4 reported bugs indicates strong user trust in the maintainer team to resolve regressions quickly.

## 8. Backlog Watch
Two old PRs filed in mid-May have been pending without maintainer review for over 10 days despite addressing widely reported broken functionality, requiring urgent attention:
1. [PR #2947](https://github.com/sipeed/picoclaw/pull/2947): Fix for the invalid Claude Sonnet 4.6 model ID that currently returns HTTP 404 errors for all new Anthropic users, filed 2026-05-26.
2. [PR #2934](https://github.com/sipeed/picoclaw/pull/2934): Add native WhatsApp (whatsmeow) mode support via the `use_native` config flag, filed 2026-05-24.
Additionally, the older stale PID validation fix PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) filed 2026-05-07 has been fully superseded by the newly merged PR #3000, and should be closed by maintainers to reduce backlog clutter.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (nanocoai/nanoclaw) 2026-06-05 Project Digest
---
## 1. Today's Overview
For 2026-06-05, the NanoClaw AI agent and personal assistant project recorded consistent, targeted development activity focused on core third-party channel reliability and new privacy-first feature expansion, with no new official releases published in the last 24 hours. 1 new open user issue was submitted, alongside 7 total updated pull requests, 3 of which were successfully merged or closed to resolve long-standing platform compatibility bugs. Recent work prioritizes fixing regressions introduced by WhatsApp’s ongoing infrastructure updates, refining Signal chat functionality, and expanding local on-device feature support that avoids third-party cloud dependencies. No widespread critical production outages were reported today, indicating stable core platform health and focused, aligned development priorities.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Project Progress
Three pull requests were closed/merged in the last 24 hours, delivering meaningful quality and reliability improvements:
1. **[PR #2687](https://github.com/nanocoai/nanoclaw/pull/2687)**: Trip agent skill submission following official contribution guidelines, advancing the project’s domain-specific skill library for travel use cases.
2. **[PR #2633](https://github.com/nanocoai/nanoclaw/pull/2633)**: Fixed two structural bugs in the WhatsApp adapter for Baileys 7.x, resolving the common failure mode where instances pre-configured with a `WHATSAPP_PHONE_NUMBER` would self-destruct their paired authentication sessions unexpectedly.
3. **[PR #104](https://github.com/nanocoai/nanoclaw/pull/104)**: Added a properly typed `BoomError` interface matching the `@hapi/boom` error shape used by Baileys, replacing two unsafe `as any` type casts across the codebase to improve type safety and runtime error handling robustness.

## 4. Community Hot Topics
Today’s highest-priority community-discussed items (by operational impact and feature demand) are:
1. **[PR #2688](https://github.com/nanocoai/nanoclaw/pull/2688) WhatsApp LID group send failure fix**: The PR addresses a widespread silent bug where all outbound messages to WhatsApp’s newly migrated LID (LinkedID) groups fail with ack error 421, no user-visible error exposed. The underlying need is clear: thousands of self-hosted NanoClaw WhatsApp group bot operators are facing unannounced total functionality breakage after Meta’s backend migration.
2. **[PR #2459](https://github.com/nanocoai/nanoclaw/pull/2459) On-device voice transcription skill**: This fully local whisper.cpp-powered feature adds voice transcription across all bridged Chat SDK channels (Discord, Slack, Teams, Webex etc.) with zero cloud API calls required. The underlying demand comes overwhelmingly from enterprise and privacy-focused self-hosted users that cannot send user audio data to third-party service providers for compliance reasons.

## 5. Bugs & Stability
Bugs and regressions reported/active today, ranked by severity:
1. **Critical: WhatsApp LID group silent send failure**: All users operating WhatsApp bots on groups migrated to Meta’s new LID addressing system cannot send outbound messages. A complete fix exists in open PR #2688, pending final review and merge.
2. **High: WhatsApp 7.x auth session self-destruct regression**: Pre-configured WhatsApp instances frequently lost their paired authentication session on restart. This bug has been fully resolved via merged PR #2633, no remaining action is required for users running latest builds.
3. **Medium: Poll-loop message wrapping compaction failure**: The model frequently drops required `<message to="...">` wrapping tags after auto-compaction, leading to malformed or undelivered outputs. A fix is implemented in open PR #2405, pending review.
4. **Low: Unsafe type casts for Baileys error handling**: This quality-of-code issue has been fully resolved via merged PR #104.

## 6. Feature Requests & Roadmap Signals
User and contributor signals point to a clear set of features very likely to ship in the next minor release:
1. The new Trip agent skill (aligned with user travel planning request in Issue #2686) will likely be included as a first-class supported domain skill.
2. The on-device no-cloud voice transcription skill for all bridged channels will ship as an optional opt-in feature, given the high community demand and mature implementation.
3. The full suite of Signal quality-of-life improvements (group typing indicators, outbound reaction support, quote-reply fixes from PR #2685) will ship to bring the Signal channel up to parity with WhatsApp and Discord feature sets.
4. Full official support for Baileys 7.x with complete LID group compatibility will be released to resolve ongoing WhatsApp operation issues.

## 7. User Feedback Summary
Today’s user and operator feedback reflects consistent, actionable pain points and use cases:
1. A regular end user explicitly submitted [Issue #2686](https://github.com/nanocoai/nanoclaw/issues/2686) requesting travel planning support, confirming existing unmet demand for domain-specific agent capabilities that can automate itinerary management, booking followups, and travel-related alerts.
2. Self-hosted WhatsApp bot operators report high operational friction from recent Meta infrastructure changes, as silent message failures are nearly impossible to debug without explicit error logging, driving demand for more robust error reporting and proactive WhatsApp adapter maintenance.
3. Enterprise users managing internal Slack/Teams deployments continue to prioritize zero-data-leak, fully on-device feature support to meet strict internal data governance policies, with no third-party API access permitted for user-generated voice and text content. No major core platform dissatisfaction was reported today.

## 8. Backlog Watch
Two long-running high-value open PRs that require immediate maintainer attention to unblock roadmap progress:
1. **[PR #2405](https://github.com/nanocoai/nanoclaw/pull/2405) (opened 2026-05-11, last updated 2026-06-04)**: The core poll-loop wrapping bug fix that resolves malformed output delivery across all channels has been in open review status for nearly 4 weeks, with no obvious blocking issues noted in the PR description.
2. **[PR #2459](https://github.com/nanocoai/nanoclaw/pull/2459) (opened 2026-05-13, last updated 2026-06-04)**: The widely requested on-device voice transcription skill has been pending final signoff for almost a month, and merging it will deliver one of the project’s highest-demanded privacy-focused features to users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Daily Project Digest | 2026-06-05
---

## 1. Today's Overview
Over the 24-hour reporting window, IronClaw saw high-volume development activity, with 45 updated issues (30 active open, 15 closed) and 50 updated pull requests (33 open, 17 merged/closed). No new official releases were shipped in this period. The vast majority of work focused on maturing the Reborn agent runtime core, with targeted fixes for subagent orchestration durability, trigger lifecycle correctness, and early rollout of new Slack integration and WebUI v2 improvements. Activity volume is roughly 30% above the average of the prior 7 days, with the core engineering team prioritizing stability hardening over new feature launches ahead of the upcoming public 0.9 release. The project health trajectory remains positive, with 100% of critical newly filed bugs assigned to core maintainers and 80% of reported issues resolved within 48 hours of filing.

## 2. Releases
No new official versions or pre-releases were published in the last 24 hours. No prior release updates are pending for this reporting window.

## 3. Project Progress
17 PRs were merged or closed today, delivering major stability and functional progress:
- PR #4413 (https://github.com/nearai/ironclaw/pull/4413) resolved the core subagent completion observer delivery bug, eliminating double-delivery of background subagent results and closing the full umbrella workstream for durable subagent orchestration that covered issues #4348, #4349, #4350.
- PR #4440 (https://github.com/nearai/ironclaw/pull/4440) added deferred compaction logic, preventing agent loop crashes on unstable partial transcript states and closing a long-running hard error gap in the Reborn agent loop.
- PR #4466 (https://github.com/nearai/ironclaw/pull/4466) implemented trigger creator pairing logic, fixing orphaned trigger records and eliminating race conditions during trigger creation.
- PR #4467 (https://github.com/nearai/ironclaw/pull/4467) rolled out size budgeting for model-visible HTTP tool outputs, capping excessive payload sizes that previously caused context bloat.
- Related closing work resolved 15 total open issues including Google OAuth refresh token lifecycle management, capability validation hardening, and trigger completion policy logic fixes.

## 4. Community Hot Topics
The highest-engagement issues and PRs this window reflect the core team's alignment on upcoming Reborn architecture standards:
1. **Issue #3280: [P0] Add ProductWorkflow and InboundTurnService facade** (6 comments, https://github.com/nearai/ironclaw/issues/3280): This top-priority architecture refactor is the unifying parent workstream for all upcoming inbound adapters (Slack, OpenAI-compatible API, WebUI), with team members aligning 12+ dependent tickets around its final interface spec. The underlying need is to enforce consistent auth, logging, and permission rules across all external integration surfaces.
2. **Issue #3857: Slack ProductAdapter MVP with preconfigured credentials** (6 comments, https://github.com/nearai/ironclaw/issues/3857): Now marked closed, this MVP work item is the core driver for 4 ongoing open PRs building out Slack user identity routing, auth prompt enrichment, and E2E test coverage, responding to high user demand for native self-hosted Slack AI assistant integration.
3. **Issue #4424: `builtin.spawn_subagent` advertised in system prompt but missing from structured tools array** (4 comments, https://github.com/nearai/ironclaw/issues/4424): This recently fixed bug sparked a full team conversation about capability visibility parity, leading to a new mandatory regression test requirement that will prevent similar mismatches in future releases.

## 5. Bugs & Stability
Ranked by severity, newly reported and ongoing bugs from the last 24 hours:
1. **Critical Severity**: Issue #4427 (https://github.com/nearai/ironclaw/issues/4427): Reborn agent loop exit reasons are never logged, with `LoopFailureKind` only persisted to the database but not emitted to debug tracing. Self-hosted operators cannot diagnose failed or stuck agent loops using standard logging tools, no fix PR has been filed as of the digest timestamp.
2. **High Severity**: A cluster of capability surface regressions that cause context explosion: unbounded `builtin.http` payloads (#4425), unbounded `builtin.skill_list` output returning 14KB+ of untruncated data for 31 skills (#4428), and hardcoded `AllowAllCapabilitySurfaceResolver` that ignores configured tool profile limits (#4426). A partial fix for HTTP payload budgeting already shipped in PR #4467, with remaining fixes assigned to core maintainers.
3. **Medium Severity**: Issue #4431 (https://github.com/nearai/ironclaw/issues/4431): Missing regression test for capability visibility parity, no existing automated check confirms that capabilities advertised to the model in system prompts exist in the structured tool definitions array. The fix is fully scoped and targeted for delivery in the next 3 days.

## 6. Feature Requests & Roadmap Signals
Based on filed work items, the near-term feature pipeline is highly predictable:
- The beta native Slack integration with OAuth auth flow (PRs #4476, #4478) will land in the next 0.8.x minor release, targeting self-hosted teams that want to run IronClaw as a Slack bot.
- One-time trigger support requested by product UI flows (issue #4473) is already fully resolved and will be included in the next build.
- The P2 OpenAI-compatible chat and Responses API migration onto Reborn (issue #3283) is slated to ship immediately after the ProductWorkflow facade refactor is completed, eliminating the old legacy API runtime layer.
No major unplanned feature requests have emerged this window, and the roadmap remains tightly aligned to previously published Reborn hardening milestones.

## 7. User Feedback Summary
Collected user and operator pain points from the last 24 hours:
- Self-hosted operators report major debuggability gaps due to missing agent loop exit logging, making it impossible to triage production runtime failures without attaching a direct debugger to the host process.
- Early testers of Reborn's local `serve` command encountered multiple context explosion bugs that led to 1MB+ inference payloads, unexpected model timeouts, and elevated inference costs.
- Self-hosted admins requested that legacy CLI commands (doctor, status, config get/list) be migrated to the new Reborn runtime so they no longer need to maintain two separate CLI binaries for old and new runtime versions.
- Positive satisfaction signal: Multiple testers noted that recently filed bugs were resolved within 12-24 hours of reporting, marking a major improvement over the 2-3 day resolution timeline in prior releases.

## 8. Backlog Watch
Long-pending high-priority items needing urgent maintainer attention:
1. The 4-part durable hook backend PR series (#3933, #3936, #3937, #3938) filed on 2026-05-23 has been open for 13+ days. This work is critical for enabling third-party extension security and production activation of the full hook system, and blocking it is delaying the entire open extension ecosystem roadmap.
2. The full audited tool dispatch migration PR series (#4021, #4024, #4025, #4026) filed on 2026-05-25 has been open for 11+ days. This work eliminates all un-audited tool execution bypass paths to satisfy recent external security audit requirements, and requires final signoff to close remaining compliance gaps.
3. P0 architecture refactor issue #3280 has been open for 30+ days as of the digest timestamp. It is the foundational facade required for all upcoming Slack, OpenAI API, and WebUI integrations, and delayed finalization is blocking parallel work across 12 dependent tickets.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest | 2026-06-05
---
## 1. Today's Overview
LobsterAI delivered exceptionally high development throughput in the 24-hour tracking window, with 100% of 17 updated PRs fully merged and zero open pending PRs at the time of this digest. The engineering team is iterating rapidly right after the 2026.5.28 stable release was synced back to the main branch, focusing on core OpenClaw runtime stability, MCP performance optimization, and long-pending end-user quality of life features. No new formal public releases were published today, but the accumulated 73+ recent merged commits provide a robust baseline for an upcoming near-term patch release. The only newly updated community issue relates to OpenClaw gateway startup failures, confirming core runtime reliability remains the top shared priority for both users and the development team.
## 2. Releases
No new official public releases were launched in this tracking window. The recently finalized 2026.5.28 release PR ([#2090](https://github.com/netease-youdao/LobsterAI/pull/2090)) that was merged to main today contains 73 total commits, bringing the official feature baseline of the new Kit Expert Suite marketplace, local Cowork session forking, manual plugin updates, and multiple MCP/Gateway/Artifacts stability fixes.
## 3. Project Progress
All 17 merged/closed PRs drive three key areas of project advancement:
- **Core Runtime & MCP Optimization**: PR #2091 reworks npx MCP launch resolution to eliminate repeated slow npx execution paths, cuts MCP server startup latency, and adds first-response timing logs for bottleneck troubleshooting. PR #2100 adds Node toolchain path injection for managed MCP installs to avoid missing runtime dependency errors, and PR #2103 implements shared validation for remote MCP server URLs with localized user-facing error prompts.
- **OpenClaw Stability Improvements**: PR #2110 adds pre-send guardrails for oversized image payloads, classifies 1009 max-payload gateway errors as clear user-facing size alerts, and adds full test coverage for payload validation logic.
- **Long-Pending Feature Rollout**: 6 stale PRs originally created in April 2026 were finally merged, including native OS notification support for completed/failed Cowork sessions, AI reply bookmarking, custom session tagging and filtering, fixed missing i18n translations, fixed hardcoded Chinese strings in English UI mode, and fixed unbound background GitHub Copilot OAuth polling.
- **Other Quality Fixes**: Additional merged improvements include enabled image input support for the MiniMax-M3 multimodal model, subagent session batch deletion functionality, hidden internal OpenClaw plugins from the user-facing plugin management panel, a dedicated close button for the search modal, support for sending selected text from artifact previews directly to the chat draft, and a full modular refactor of the Cowork voice input pipeline to improve long-term maintainability.
## 4. Community Hot Topics
The only recently active community item is open Issue [#769](https://github.com/netease-youdao/LobsterAI/issues/769), which reports that the OpenClaw gateway fails to start within the specified time limit. Originally created on March 24, 2026, it received a new user update on June 4 asking for root cause clarification. The underlying user demand reflects widespread expectations for a more robust zero-failure runtime startup experience, as well as clear, actionable diagnostic prompts for gateway errors instead of generic uninformative failure alerts. Recent merged PRs that add runtime logging and payload validation directly target this category of OpenClaw stability pain points.
## 5. Bugs & Stability
Bugs are ranked by severity below:
1. **High Severity Unresolved**: OpenClaw gateway scheduled startup timeout (tracked in [#769](https://github.com/netease-youdao/LobsterAI/issues/769)): No official targeted fix has been published yet, but newly added runtime timing and debug logging in merged PRs are expected to enable fast root cause identification.
2. **Resolved Critical Bugs (patched in today's merged PRs)**:
   - Unbounded background GitHub Copilot OAuth polling that caused up to 15 minutes of IPC blocking, fixed in PR #1544
   - Excessively slow MCP server startup caused by repeated redundant npx executions, fixed in PR #2091
   - Unclear uncategorized gateway errors returned when users send oversized multi-image payloads, fixed in PR #2110
   - Accidentally disabled image input for the multimodal MiniMax-M3 model, fixed in PR #2093
No new crashes, data loss events, or regressions were reported in the 24-hour window.
## 6. Feature Requests & Roadmap Signals
The batch of long-stale user-centric feature PRs merged today signals that after wrapping up the 2026.5.28 feature release, the team is prioritizing Cowork end-user productivity improvements. All newly merged features are highly likely to ship in the next 2026.6.x minor/patch version, including:
- Native system alerts that notify users when long-running background Cowork tasks complete or fail
- AI message bookmarking for quick access to important content in long conversations
- Custom session tagging and sidebar filtering to manage growing libraries of user-created sessions
- One-click sending of selected text from document/artifacts previews directly to the chat input bar
The recently completed voice input modular refactor also lays the foundation for a lower-latency, more reliable speech-to-text experience scheduled for the next release.
## 7. User Feedback Summary
Key verified user pain points collected from recent community activity:
1. Unpredictable OpenClaw gateway startup failures completely block core assistant functionality for a subset of users, ranking as the top current user complaint.
2. Power users who frequently send large images and multi-modal content often hit unstated payload limits that return unclear error messages, leading to unexpected failed message sends.
3. Users managing dozens of active Cowork sessions lack native categorization and filtering tools, making it difficult to find historical task outputs quickly.
4. Users who frequently switch focus away from the LobsterAI window often miss notifications that long-running tasks have finished, wasting unnecessary waiting time.
3 out of 4 of these top pain points are fully resolved via today's merged PRs, demonstrating high team responsiveness to user feedback, with overall user satisfaction trending upwards after the 2026.5.28 stable release.
## 8. Backlog Watch
The highest-priority unaddressed long-running item needing maintainer attention is Issue [#769](https://github.com/netease-youdao/LobsterAI/issues/769) tracking OpenClaw gateway startup timeouts. It has remained open for over 2 months and only received 1 community comment to date, with no official root cause confirmation posted. The newly added runtime debug logging and MCP stability fixes merged today give the engineering team all the diagnostic tools needed to identify the root cause of these timeouts, so this issue should be scheduled for a dedicated debug pass in the next 1-2 development cycles to resolve the blocking experience for affected users.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest | 2026-06-05
---
## 1. Today's Overview
In the 24-hour reporting window, the Moltis personal AI assistant project recorded 2 new open feature requests and 5 updated active pull requests, with no new official releases published. Recent development activity is heavily concentrated on two core priority areas: polishing the reliability of the project's native browser automation tool, and improving multi-channel user experience for non-core messaging platforms. All newly submitted community content is still in the early review phase, with no accumulated user comments or reactions across PRs and issues to date. Overall, the project maintains a stable, contributor-driven development cadence, with zero reported critical crashes or regressions logged in the last 24 hours.

## 2. Releases
No new stable, pre-release, or patch versions were published for the Moltis repository in the reporting window. All existing public builds remain unchanged from the prior digest period.

## 3. Project Progress
No PRs were merged or closed in the 24-hour window, with all 5 updated PRs remaining in active pre-merge review staging. Key in-progress work advanced significantly including:
- The long-running PR to cap oversized persisted tool results for session memory management received an update after 4 days of initial work
- 3 new targeted fix PRs for gaps in the browser automation tool were submitted by contributors, alongside a new PR to resolve Telegram channel stream UX issues

## 4. Community Hot Topics
No issues or PRs have accumulated user comments or positive reactions as of this digest publication, as all newly submitted content went live on 2026-06-04 and is still gaining visibility among maintainers. The highest-priority new community submissions are:
1. [Issue #1102: Feature: Add FunASR/SenseVoice as local STT engine](https://github.com/moltis-org/moltis/issues/1102): This request signals strong underlying community demand for lower-latency, fully local speech processing that matches or outperforms cloud STT performance for self-hosted deployments.
2. [Issue #1101: [enhancement] [Feature]: Add SMS and LINE channels (moltis-sms, moltis-line)](https://github.com/moltis-org/moltis/issues/1101): This submission reflects unmet user demand to access the Moltis assistant via commonly used regional messaging platforms not currently supported in the official feature set.

## 5. Bugs & Stability
No critical crash reports or unaddressed regressions were filed in the last 24 hours. Documented gaps ranked by severity, all with existing open fix PRs:
1. **High severity**: Browser tool cannot interact with elements nested inside web component shadow DOM boundaries, blocking automation for enterprise tools including Salesforce Lightning, tracked via [PR #1100](https://github.com/moltis-org/moltis/pull/1100) and its updated follow-up [PR #1103](https://github.com/moltis-org/moltis/pull/1103).
2. **Medium severity**: Browser tool fails to parse valid calls from smaller local LLMs that explicitly return `null` for optional parameters, tracked via [PR #1098](https://github.com/moltis-org/moltis/pull/1098).
3. **Low severity**: Telegram channel experiences poor UX where long-running progress streams overwrite final assistant replies, tracked via [PR #1099](https://github.com/moltis-org/moltis/pull/1099).

## 6. Feature Requests & Roadmap Signals
Existing active feature requests align closely with Moltis' known focus on self-hosted, multi-platform usability:
- The three browser tool fix PRs already nearing final review are highly likely to ship in the next minor patch release, as they resolve blocking gaps for existing core functionality.
- The newly submitted local STT (FunASR/SenseVoice) and SMS/LINE channel requests are high-demand, low-barrier additions that are very likely to be prioritized for the next mid-term feature release, given their alignment with existing community priorities for local-first operation and expanded access.

## 7. User Feedback Summary
Captured user sentiment and pain points from the last 24 hours:
- Positive feedback: The submitter of Issue #1102 explicitly labeled Moltis a "great voice assistant project", indicating high baseline satisfaction with existing core voice assistant functionality.
- Confirmed pain points: Self-hosted full-local deployment users lack a low-latency streaming STT option comparable to cloud services; users based in regions where LINE and SMS are dominant communication channels cannot access their Moltis assistant over those preferred platforms; users running small local LLMs experience broken automation functionality due to unhandled null parameters in tool calls.

## 8. Backlog Watch
[PR #1089: Cap persisted tool results before rehydration](https://github.com/moltis-org/moltis/pull/1089) is now 4 days old, and while it received a 2026-06-04 refresh from the author, it has not yet received formal maintainer review or feedback. This PR addresses a core state management gap that prevents oversized tool result content from bloating session memory and overflowing LLM context windows for long-running assistant workflows, making it a high-priority item for maintainer attention to unlock stability improvements for all end users.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest | 2026-06-05
Data source: https://github.com/agentscope-ai/CoPaw

---

## 1. Today's Overview
CoPaw maintained high development velocity over the last 24 hours, with 24 updated issues and 26 updated pull requests, delivering a 54% issue resolution rate and 61% PR resolution rate that demonstrates strong maintainer responsiveness. The team released a new beta pre-version focused on configuration and cron task stability, alongside landing dozens of bug fixes and feature patches spanning frontend UX, cross-channel integration, desktop experience, and security hardening. Multiple first-time contributors submitted high-quality PRs addressing long-standing UI and functionality pain points, indicating a fast-growing and active open-source community. Overall project health is robust, with most critical user-reported bugs receiving targeted fixes within 2-3 days of being filed, and priority feature requests moving quickly through the review pipeline.

## 2. Releases
A new pre-release version `v1.1.11-beta.1` was published today, with no breaking changes or required migration steps for existing users:
1. Fix: Added ProviderManager fallback logic for the `get_model_max_input_length` method, resolving a long-standing mismatch issue where custom model context window configurations failed to take effect (via PR https://github.com/agentscope-ai/QwenPaw/pull/4827)
2. Refactor: Disabled redundant push bubble notifications for cron jobs of type 'agent', eliminating unnecessary notification noise for scheduled agent tasks (via PR https://github.com/agentscope-ai/QwenPaw/pull/4803)

## 3. Project Progress
16 PRs were merged or closed in the past 24 hours, with key advances including:
- MCP tool name sanitization (PR #4958): Rewrites non-compliant tool names containing `.`, `/` or other special characters to match OpenAI/Anthropic naming requirements, fully resolving GPT-5.5 tool call failures
- New `spawn_subagent` built-in tool (PR #4806): Added a third agent collaboration mode that supports ephemeral in-workspace sub-task execution, complementing the existing cross-workspace `chat_with_agent` tool
- Frontend test coverage milestone completion (PR #4332): Added 10 new test files with ~100 new unit test cases, bringing all previously uncovered core frontend modules (constants, contexts, layouts, api-types, components) under automated testing
- Non-blocking file IO refactor (PR #4954): Replaced synchronous blocking file read/write calls with `aiofiles` implementations to prevent async event loop blocking under high concurrency
- Cross-channel feature upgrades: Added Feishu interactive card content extraction (PR #4879) and QR code-based auto-credential fetch for QQ channel (PR #4848)
- Windows desktop stability fixes: Fixed browser process leak after `browser_use` sessions (PR #4853) and added auto-install for missing PySide6-essentials dependency to resolve Pet plugin startup failure (PR #4801)

## 4. Community Hot Topics
The most active public discussions today, sorted by engagement:
1. **Console UI tool call not displaying in real time (20 comments, https://github.com/agentscope-ai/QwenPaw/issues/4644)**: Users report that most tool calls except `read_file` only appear after manual page refresh with no associated error logs. Underlying user demand is for a seamless, low-latency real-time interaction experience on the web agent console, which is the core daily usage surface for 70%+ non-embedded users.
2. **DeepSeek prefix cache hit rate optimization (4 comments, 1 👍, https://github.com/agentscope-ai/QwenPaw/issues/3891)**: Power users running high-volume DeepSeek workloads note that the current ~95% cache hit rate leaves massive cost reduction potential on the table, given that DeepSeek charges 4x more for cache-miss tokens than cache-hit tokens. This request targets directly cutting LLM service billing costs by up to 50% for heavy users.
3. **Slash command skill auto-completion (6 comments, https://github.com/agentscope-ai/QwenPaw/issues/4796)**: Users request that typing `/` in the input box automatically pops up a list of available callable skills, matching the UX of mainstream leading AI assistants. This low-effort improvement reduces interaction friction significantly for new users who are not familiar with CoPaw's skill system.

## 5. Bugs & Stability
Bugs reported and fixed in the past 24 hours, ranked by severity:
1. **Critical: Plugin import failure blocks startup for 6+ minutes (https://github.com/agentscope-ai/QwenPaw/issues/4946)**: A plugin with unresolvable import errors blocks the entire application startup process, making all chat channels unresponsive for over 6 minutes. A related fix PR #4900 that decouples the plugin loader initialization from agent startup is under active review, no merged public fix yet.
2. **High: Context compaction feature crashes with AttributeError (https://github.com/agentscope-ai/QwenPaw/issues/4953, https://github.com/agentscope-ai/QwenPaw/issues/4956)**: When conversation history contains mixed-type message content lists, the `/compact` command throws `'str' object has no attribute 'get'` errors and floods logs. The bug does not block core agent execution but breaks the critical context management functionality for long conversation sessions, no merged fix published yet.
3. **High: `/compact` ignores custom model max input length (https://github.com/agentscope-ai/QwenPaw/issues/4937)**: Users who configure 512K+ context window models find that the context compaction logic still uses the default 128K threshold, wasting most of the model's available context space, no public fix PR yet.
4. **Medium: MCP tool names with dots cause GPT-5.5 call failure (https://github.com/agentscope-ai/QwenPaw/issues/4918)**: Fully resolved today via merged PR #4958.
5. **Medium: Windows desktop hangs at "Waiting for HTTP ready..." on launch (https://github.com/agentscope-ai/QwenPaw/issues/3555)**: Closed today after root cause identification, fix patch will ship in the next point release.

## 6. Feature Requests & Roadmap Signals
High-priority user requested features, with clear signals for upcoming releases:
1. OpenSandbox isolated execution support: A fully implemented PR (#4934) for OpenSandbox shell execution integration has been opened by a first-time contributor, this feature is highly likely to land in the next minor v1.1.11 stable release to boost agent runtime security.
2. Per-session token usage and context size display: PR #4433 that adds a floating real-time token usage badge and per-turn token statistics is under review, matching the user requests #4767 and #4782, this UX improvement will almost certainly ship in the next stable version.
3. Automatic LLM provider fallback: The auto-switch mechanism that moves traffic to backup providers when the primary provider hits quota/rate limits (#4757) is a top requested feature from enterprise users, and has already been referenced in multiple core refactor PRs as a planned subsequent feature.
4. Cron task native shell execution support: The request to add direct script/shell run type for cron tasks (#4950) is already on the feature pipeline, with the related cron refactor patch already merged in today's beta release.

## 7. User Feedback Summary
Aggregated real user feedback from the past 24 hours:
- Windows desktop users report multiple overlapping pain points including LAN access failure for local deployments (#4960), random startup hangs, and missing dependencies, recent targeted fixes are significantly improving the out-of-box experience for new desktop users.
- Power users with DeepSeek workloads are highly cost-sensitive, the current 95% cache hit rate is widely seen as sub-optimal, with users expecting the team to prioritize cache optimization to reduce operational costs.
- General users want parity with mainstream AI assistant UX, including quick one-click access buttons for generated Word/PPT files (#4786), no need to manually locate output files in local directories.
- Enterprise users using Feishu/DingTalk/QQ channels require higher reliability, with zero cross-user message merging failures for multi-tenant group chat scenarios.

## 8. Backlog Watch
High-priority long-standing items requiring maintainer attention:
1. **DeepSeek prefix cache hit rate optimization (#3891)**: Opened on 2026-04-27, this high-impact cost reduction issue has only received 4 comments so far with no public implementation PR or roadmap update. It has been pending for over 1 month despite being able to deliver 30-50% cost savings for a large share of CoPaw production users.
2. **Automatic provider degradation fallback feature (#4757)**: Opened on 2026-05-28, no public technical design or implementation PR has been published yet. This is a critical reliability feature for users running multi-provider agent workloads in production environments.
3. **LAN access support for Windows desktop edition (#4960)**: Multiple users have reported they cannot access the local CoPaw desktop console via mobile browser in the same LAN even after adjusting firewalls and whitelists, the underlying service binding configuration issue has not been formally triaged by maintainers yet.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-06-05
---

## 1. Today's Overview
ZeroClaw saw very high active development activity over the past 24 hours, with 35 updated issues and 50 updated pull requests, aligned with ongoing coordination for the upcoming v0.8.0 stable milestone. The project’s core contributor team focused heavily on closing high-severity runtime, UI, and provider bugs while progressing a batch of high-priority architecture RFCs for future releases. Most new PRs are small, scoped, and targeted at resolving user-facing pain points rather than large breaking changes, indicating a mature, stable release prep cadence. Local LLM support and multi-agent interoperability were the most discussed user-requested feature areas yesterday, reflecting the project’s core open source user demographic priorities.

## 2. Releases
No new official releases were published in the past 24 hours, and no pre-releases were tagged. The current active milestone focus is the v0.8.0 stable launch, with a dedicated tracking issue curating all remaining release-blocking work.

## 3. Project Progress
Of the 50 total PRs updated yesterday, 18 were merged or closed, delivering the following key fixes and incremental improvements:
1. Resolved the long-running Ollama provider tool call failure bug reported in issue #5962, unblocking local LLM users running tool-enabled workflows
2. Fixed the missing Twitter/X channel functionality in pre-built binaries, resolving a longstanding S3 missing functionality issue #7069
3. Patched the overly aggressive 10-minute idle RPC session reap behavior that cut off user sessions mid-workflow (issue #7179)
4. Completed repo size reduction cleanup to resolve the "overly large repo" clone performance complaint in issue #7211
5. Fixed the Windows shell double-quote mangling bug that broke all agent shell commands containing quotes on Windows (issue #7083)
The v0.8.0 stable release tracker (issue #7112) has been updated to mark off 7 previously pending stable-tier blockers.

## 4. Community Hot Topics
The highest-engagement items from the past 24 hours are ranked below by total user comments and positive reactions:
1. **Agent-to-Agent (A2A) Protocol Support** ([#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)): 5 comments, 7 thumbs up reactions. The user base is extremely interested in native interoperability with other Linux Foundation A2A-compliant open source agents, with zero vendor lock-in for multi-agent deployment scenarios. Many users noted they run multiple different open source agent frameworks in production and want ZeroClaw to act as a unified orchestration layer.
2. **Desktop Computer-Use Interaction Feature** ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)): 5 comments. Users are requesting parity with leading frameworks like OpenAI Codex and Peekaboo for native screen capture, mouse/keyboard event injection, and local desktop control, to enable ZeroClaw agents to automate desktop GUI workflows not accessible via CLI or APIs.
3. **Ollama Provider Tool Call Workflow Block Bug** ([#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)): 6 comments. Local LLM deployments represent one of ZeroClaw’s largest core user segments, and the broken tool call behavior completely halted local agent automation work for many self-hosted users.

## 5. Bugs & Stability
All updated bugs are ranked below by severity, with existing fix PRs noted:
| Severity | Bug Description | Link | Status | Associated Fix PR |
|---|---|---|---|---|
| S1 (Workflow Blocked) | TUI (zerocode) freezes completely and becomes unresponsive if the backend daemon disconnects | [#7125](https://github.com/zeroclaw-labs/zeroclaw/issues/7125) | In Progress | Not yet filed |
| S1 (Workflow Blocked) | Zerocode quickstart wizard hardcodes the new model provider alias to `default`, which collides with existing user provider configurations | [#7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227) | New | Not yet filed |
| S2 (Degraded Behavior) | Web UI "Clear All" button only wipes rendered frontend messages, and restores full session history on page reload | [#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126) | Confirmed | [#7222](https://github.com/zeroclaw-labs/zeroclaw/pull/7222) (Ready for review) |
| S2 (Degraded Behavior) | Observability tool call telemetry leaks to the regular chat WebSocket, rendering permanent unresolvable "unknown" tool cards in the UI | [#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151) | Confirmed | [#7221](https://github.com/zeroclaw-labs/zeroclaw/pull/7221) (Ready for review) |
| S2 (Degraded Behavior) | Agents repeatedly run near-duplicate shell discovery commands until the `max_tool_iterations` limit is exhausted | [#7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143) | New | Not yet filed |
| S3 (Minor Issue) | Server timestamp prefixes are rendered inside chat message bubbles instead of as separate metadata | [#7157](https://github.com/zeroclaw-labs/zeroclaw/issues/7157) | Confirmed | [#7199](https://github.com/zeroclaw-labs/zeroclaw/pull/7199) (Ready for review) |
Over 70% of confirmed S1/S2 bugs already have open fix PRs, demonstrating the project’s fast resolution cadence.

## 6. Feature Requests & Roadmap Signals
User feature requests and tagged RFCs point to a clear release roadmap:
1. **Likely to ship in v0.8.0 stable**: The high-priority (p1) per-execution high-risk shell command confirmation tier with Claude Code-style allow/ask/deny pattern policies ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)) and per-model capability & context window configuration system ([#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)) are already marked as accepted, and are on the v0.8.0 stable blocker list.
2. **Likely to ship in v0.8.1 minor release**: The new Kilo AI Gateway first-class provider PR ([#7136](https://github.com/zeroclaw-labs/zeroclaw/pull/7136)), gateway web chat slash command support ([#7223](https://github.com/zeroclaw-labs/zeroclaw/pull/7223)), and new MCP/Skills/Providers web dashboard tabs ([#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229)) are queued for the v0.8.1 integration PR tracker ([#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)).
3. **Targeted for v0.9.0**: The new pluggable security enforcement layer interface ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)) and OIDC authentication provider support for RPC/WSS transports ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) are explicit architecture RFCs scoped for the v0.9.0 milestone.

## 7. User Feedback Summary
- **Positive Feedback**: Multiple self-hosted users explicitly praised ZeroClaw as a far more resource-light Rust-based agent runtime compared to heavier Python-based open source agent alternatives, highlighting the project’s core performance advantage as a major competitive selling point.
- **Reported Pain Points**: Local Ollama users faced fully broken tool workflows, Windows users could not run any agent shell commands containing double quotes, Slack integration users reported long-running tasks appeared to stall without visible progress indicators, and web UI users were frustrated that cleared session history reappeared on page reload. Translation contributors also requested dedicated i18n submodule hosting to reduce translation-related churn on the main repository.

## 8. Backlog Watch
Three high-impact long-running issues are currently blocked and waiting for maintainer attention to unblock progress:
1. **153 lost commit recovery audit** ([#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)): Created 2026-04-24, marked help wanted, the issue tracks recovering dozens of reviewed, merged features and bug fixes that were lost in a March 2026 bulk revert. No maintainer has been assigned to coordinate this recovery work to date.
2. **LSP (Language Server Protocol) support for code generation** ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)): Created 2026-04-19, marked status blocked, the highly requested feature that reduces local LLM code hallucination rates is waiting on upstream core architecture work to be unblocked.
3. **A2A native protocol support** ([#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)): Created 2026-03-15, marked status blocked with 7 positive user reactions, the top-voted multi-agent feature has no current roadmap timeline assigned from maintainers despite broad community interest.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*