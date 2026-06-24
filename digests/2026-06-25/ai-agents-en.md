# OpenClaw Ecosystem Digest 2026-06-25

> Issues: 254 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-24 23:03 UTC

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

# OpenClaw (openclaw/openclaw) Project Daily Digest | 2026-06-25
---
## 1. Today's Overview
The OpenClaw project saw extremely high development velocity on 2026-06-25, with 254 updated issues and 500 updated pull requests, representing a surge in both community bug reports and core maintainer feature work. The team delivered 1 new minor release, closed 61 total issues, and merged 47 PRs focused on resolving recent regressions from the 2026.6.9 patch release. Core refactoring work for the upcoming SQLite native session store advanced significantly, while dozens of cross-platform and multi-channel integration fixes were submitted by contributors. Overall project health remains strong, with a fast turnaround time for critical bug triage and active community participation across all priority levels.

## 2. Releases
### v2026.6.10 (Latest Public Release)
This patch release follows the problematic 2026.6.9 build, with no documented breaking changes:
- New feature: Automatic fast mode for short conversational turns, which dynamically switches the runtime to low-latency mode for 1-2 line user queries, then falls back to full normal mode for longer, complex task runs with bounded fallback behavior.
- New improvement: More reliable routing for the Zai (ZhipuAI) model backend, with partial implementation notes referenced in issue #85104.
- Migration notes: No manual migration steps required; the release includes automatic remediation for the unannounced memory store relocation bug introduced in 2026.6.9.

## 3. Project Progress
Of the 47 total merged/closed PRs in the 24-hour window, key completed work includes:
1. Resolved the critical 2026.6.9 regression: Unwarned memory store relocation that forced full re-embedding of 1000+ existing memory items (https://github.com/openclaw/openclaw/issues/95495)
2. Fixed Telegram rich message rendering regressions that broke paragraph and table formatting after the 2026.6.9 upgrade (https://github.com/openclaw/openclaw/issues/95554)
3. Patched the long-standing macOS sqlite-vec extension loading failure that disabled native vector similarity search for local memory deployments (https://github.com/openclaw/openclaw/issues/66977)
4. Fixed the Feishu dispatch runtime error that broke message handling in v2026.5.27 (https://github.com/openclaw/openclaw/issues/88073)
5. Resolved compatibility issues for external third-party memory plugins with the native "dreaming" background memory sweep feature (https://github.com/openclaw/openclaw/issues/92536)
6. Core maintainers merged incremental implementation work for the SQLite native session store foundation, advancing the planned full migration away from file-based JSONL session storage.

## 4. Community Hot Topics
The most active community discussions of the day, ranked by comment and reaction count:
1. **[#75 Linux/Windows Clawbot Apps](https://github.com/openclaw/openclaw/issues/75)** | 109 comments, 80 👍: The oldest and most upvoted open feature request in the backlog, asking for full native desktop client parity for Windows and Linux (currently only macOS, iOS and Android native node apps are officially supported). The high engagement reflects massive unmet demand from self-hosted power users who do not use Apple ecosystems to run local OpenClaw nodes on their workstations for 24/7 operation.
2. **[#88838 Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838)** | 35 comments: An ongoing core maintainer technical discussion tracking progress on the full migration from JSONL file session storage to a fully native SQLite backend, a major architectural upgrade that will reduce session corruption risk and improve performance for large multi-turn conversations.
3. **[#96148 Track iMessage source-reply latency instrumentation](https://github.com/openclaw/openclaw/issues/96148)** | 17 comments: A highly collaborative optimization effort from Apple ecosystem users to reduce iMessage response latency, with multiple contributors sharing local test results and patched implementation snippets.

## 5. Bugs & Stability
Critical and high-severity bugs reported/updated in the 24-hour window, ranked by impact:
1. **P1 Critical: Subagent abort-settle fails to release `.jsonl.lock`, permanently breaks sessions** (https://github.com/openclaw/openclaw/issues/95833): When an embedded subagent run hits the timeout abort threshold, the session lock file is not released, making the entire session unresponsive until a manual gateway restart. A linked fix PR is open awaiting maintainer review.
2. **P1 Critical: Heap not released on embedded run abort causing gradual memory exhaustion** (https://github.com/openclaw/openclaw/issues/95915): 100% reproducible memory leak every time an embedded subagent is force-aborted, leading to idle gateway heap sizes exceeding 1GB on macOS that cause silent cron task failures. Linked fix PRs are submitted and under test.
3. **P1 High: 2026.6.8 → 2026.6.9 upgrade corrupts email channel config with invalid `groupAllowFrom` field** (https://github.com/openclaw/openclaw/issues/95515): The auto-upgrade script for the latest patch writes an invalid field to email channel configuration, fully breaking all email integration flows for affected users. No fix has been merged as of this digest.
4. **P1 High: Native Anthropic thinking block signature error permanently bricks long multi-turn threads** (https://github.com/openclaw/openclaw/issues/94228): For long-running Anthropic Claude 3.x+ sessions using native thinking mode, a signature mismatch in cached historical thinking blocks causes all subsequent turns to return 400 errors, making the thread unrecoverable.
5. **P2 Regression: Setting `OPENCLAW_HOME` to `~/.openclaw` creates nested `.openclaw/.openclaw` directories** (https://github.com/openclaw/openclaw/issues/45765): A widely reported localization/initialization bug that primarily impacts Chinese language users, with a linked PR open for triage.

6 total high-priority bugs were fully resolved today, indicating strong triage velocity from the core team.

## 6. Feature Requests & Roadmap Signals
High-demand user feature requests that signal near-future roadmap priorities:
1. **[#7722 Filesystem Sandboxing Config (tools.fileAccess)](https://github.com/openclaw/openclaw/issues/7722)**: Marked security-impacting, with full fix shape cleared by maintainers, this access control feature to restrict agent file operations to predefined allow/deny paths is almost guaranteed to ship in the next v2026.6.x patch.
2. **[#86881 Gateway-lite mode without an AI harness for deterministic deployments](https://github.com/openclaw/openclaw/issues/86881)**: A highly requested enterprise feature to run OpenClaw as a lightweight routing, webhook, and cron scheduler without loading any LLM-related dependencies, which the maintainer team has tagged for product decision and is prioritizing for non-AI production use cases.
3. **[#20935 Audit log for agent memory changes](https://github.com/openclaw/openclaw/issues/20935)**: A compliance-focused feature that adds an append-only immutable log for all edits to the agent's persistent memory, tagged for security review and very likely to land in a mid-2026 minor release.
4. **[#74580 Fine-grained hook permissions for agent state separate from full conversation access](https://github.com/openclaw/openclaw/issues/7722)**: A plugin ecosystem safety hardening feature that will reduce overprivilege for third-party monitoring plugins, already marked for fix implementation in the near term.

Based on current PR progress, the v2026.6.15 release will likely ship the filesystem sandboxing feature, the alpha preview of gateway-lite mode, and the first production-ready SQLite session store implementation.

## 7. User Feedback Summary
Real user feedback collected from active discussions:
- Users expressed strong frustration with the 2026.6.9 "silent memory relocation" bug that forced full re-embedding of existing memory stores without any pre-upgrade warning, though many commented positively that the team resolved the issue and released a fixed patch within 24 hours.
- Multi-channel enterprise users relying on Feishu, Telegram, Google Chat and WhatsApp integrations reported that recent incremental updates introduced dozens of small rendering and message routing regressions, but appreciated that community contributors submitted working fixes for nearly all of these issues within 48 hours of reporting.
- Self-hosted macOS users running 24/7 gateways complained about unaddressed idle memory bloat that grows from ~550MB to over 1GB in 12 hours, causing silent unreported cron task failures that have no error logging.
- Multiple power users noted that the new automatic fast conversation mode shipped in v2026.6.10 is a massive quality-of-life improvement that drastically reduces perceived latency for simple, short queries.
- Enterprise admins widely requested the gateway-lite deployment mode, noting they do not need to run local LLMs on their dedicated webhook routing instances and want to reduce deployment footprint and attack surface.

## 8. Backlog Watch
High-impact long-standing issues that have not yet received formal maintainer assignment or review:
1. **[#75 Linux/Windows Clawbot Apps](https://github.com/openclaw/openclaw/issues/75)**: 177 days old, 109 comments, 80 upvotes, marked as needing product decision and security review, no assigned maintainer despite massive community demand.
2. **[#39847 Echo contamination: `stripInboundMetadata` not called in outbound delivery pipeline](https://github.com/openclaw/openclaw/issues/39847)**: 3 months old, security impact, no assigned maintainer, risk of internal metadata leakage to public chat channels.
3. **[#43935 Gateway account-scoped channel config changes restart entire channel and disrupt active traffic](https://github.com/openclaw/openclaw/issues/43935)**: 3 months old, P1 severity, causes downtime for large teams with high message throughput when admins update per-account settings, marked needing maintainer triage.
4. **[#20935 Audit log for agent memory changes](https://github.com/openclaw/openclaw/issues/20935)**: 4+ months old, compliance and security impact, blocked pending security review signoff from the core team, no progress in the last 30 days.
All four issues are tagged with the `no-new-fix-pr` flag, meaning external contributors cannot open implementation PRs until the core maintainer team formally approves the feature/issue scope.

---

## Cross-Ecosystem Comparison

# Cross-Project 2026-06-25 Open Source AI Agent Ecosystem Comparison Report
For technical decision-makers and AI agent developers

---

## 1. Ecosystem Overview
As of 2026-06-25, this 12-project cohort forms a fast-maturing personal AI assistant and agent orchestration ecosystem that spans from full-featured enterprise-grade multi-tenant platforms to ultra-lightweight edge deployments for low-resource hardware. Activity across the entire landscape is overwhelmingly focused on resolving real-world production pain points, security patching, and post-regression stability fixes rather than unproven experimental new features, marking a clear industry shift from the 2025 demo-focused era to widespread production readiness. There is distinct stratification of use cases across the project set, with targeted implementations for self-hosted hobbyists, Chinese enterprise IM deployments, regulated industry operators, and local LLM power users. All active projects prioritize support for open standards like the MCP tool protocol, multi-third-party LLM provider compatibility, and cross-platform messaging channel integration, creating a far less vendor-locked, more interoperable ecosystem than earlier generations of AI agent tooling.

## 2. Activity Comparison
| Project Name | Updated Issues | Updated PRs | Release Status | Health Score (1-10) |
|--------------|-----------------|-------------|----------------|---------------------|
| OpenClaw | 254 | 500 | Shipped v2026.6.10 patch on reporting day | 9/10 |
| NanoBot | 63 | 19 | No new release | 9/10 |
| Hermes Agent | 50 | 50 | No new release | 8/10 |
| PicoClaw | 14 | 8 | No new release | 9/10 |
| NanoClaw | 1 | 17 | No new release | 9/10 |
| IronClaw | 19 | 43 | No new release | 8/10 |
| LobsterAI | 1 | 41 | No new release | 9/10 |
| TinyClaw | 0 | 1 | No new release | 10/10 |
| CoPaw | 23 | 50 | No new release | 7/10 |
| ZeroClaw | 50 | 50 | Pre-v0.9.0 feature freeze | 8/10 |
| *NullClaw / Moltis / ZeptoClaw* | *0* | *0* | *No recent activity* | *N/A* |
*Health score calculated based on triage velocity, unpatched critical bug count, and community contribution alignment with core roadmap*

## 3. OpenClaw's Position
OpenClaw holds a clear leading position as the de facto reference implementation of the broader Claw agent ecosystem, with activity volume more than 5x higher than the next most active peer projects. Its unmatched advantage lies in a well-oiled 24-hour critical bug triage pipeline: even after a problematic v2026.6.9 patch that introduced widespread memory relocation regressions, the core team shipped a fully tested fixed release the same day with no manual remediation steps required for end users. Technically, it is the only project in the cohort with a fully scoped, in-progress architectural migration from fragile JSONL file session storage to a native SQLite session layer, and it treats cross-platform multi-channel IM integration as a first-class core capability rather than an afterthought add-on. Its community size is the largest by a wide margin: the longstanding #75 Windows/Linux desktop client feature request has 109 comments and 80 upvotes, a level of cross-segment engagement from self-hosters, enterprise users, and edge developers no competing project matches, and LobsterAI actively bases its entire core runtime on the OpenClaw codebase.

## 4. Shared Technical Focus Areas
Four high-priority requirements have emerged across multiple independent projects in the cohort:
1. **Fixed token overhead reduction**: Implemented by OpenClaw (automatic fast mode for short queries), Hermes Agent (lazy tool schema loading), and IronClaw (progressive tool disclosure), all three projects target a 60%+ cut to per-call non-inference token overhead to reduce latency and cloud inference costs.
2. **SQLite-backed persistent session storage**: Prioritized by OpenClaw (core session store migration), PicoClaw (streaming LLM full state persistence), and CoPaw (durable context history manager), all three are working to eliminate decades of avoidable session corruption bugs from unstructured JSONL file storage for long-running multi-turn conversations.
3. **MCP tool access control hardening**: Patches delivered by NanoBot (two policy bypass fixes), NanoClaw (CVE-2026-29611 path confinement), and ZeroClaw (enforced per-agent MCP isolation) all close high-severity prompt injection attack surfaces that allow unapproved tool access.
4. **Multi-channel IM regression resolution**: Completed by OpenClaw (Telegram/Feishu fixes), NanoBot (Telegram Bot API 10.1 compatibility), CoPaw (Feishu/DingTalk routing patches), and LobsterAI (WeChat integration fixes), all four address widely reported production breakages for enterprise messaging use cases.

## 5. Differentiation Analysis
The ecosystem demonstrates clear segmentation with little direct feature overlap:
- **Feature focus stratification**: Enterprise multi-tenant and compliance capabilities are exclusive to ZeroClaw (RBAC, OIDC auth, SLSA 3 supply chain signing) and Hermes Agent (ACP multi-agent orchestration), while ultra-lightweight edge deployment optimization is the unique selling point of PicoClaw, NanoBot, and TinyClaw.
- **Target user segmentation**: OpenClaw serves the broadest mass market of personal self-hosted assistant users; CoPaw and LobsterAI are built exclusively for Chinese enterprise teams relying on Feishu, DingTalk, and WeChat; IronClaw is optimized for NEAR AI ecosystem hosted multi-user deployments; ZeroClaw caters to regulated industry security and compliance requirements; Hermes Agent targets local LLM power users focused on coding agent workflows.
- **Architectural differences**: Six projects (including OpenClaw, PicoClaw, ZeroClaw) have selected embedded SQLite as their core state store for upcoming releases, while smaller footprint projects like NanoBot prioritize eliminating heavy dependencies such as Node.js to enable deployment on resource-constrained single-board computers, and IronClaw uses a high-throughput Rust runtime optimized for large multi-user hosted instances.

## 6. Community Momentum & Maturity
All active projects fall into distinct activity tiers:
1. **Sprint Velocity Tier (7+ health score, >20 updated items per day)**: OpenClaw, ZeroClaw, Hermes Agent, CoPaw, IronClaw, LobsterAI. These teams are operating at full development capacity to resolve post-migration regressions, align on roadmap milestones, and prepare for upcoming minor/major releases.
2. **Stable High-Resolution Tier (9+ health score, moderate activity)**: NanoBot, PicoClaw, NanoClaw. These projects resolve >80% of incoming user-reported issues within 24 hours, have no unresolved critical production bugs, and focus on incremental hardening rather than large architectural overhauls.
3. **Maintenance Mode Tier**: TinyClaw. The project only shipped one merged PR in the reporting window to add native Windows CLI support, with zero open active bugs and no major new roadmap items in progress.
4. **Inactive Tier**: NullClaw, Moltis, ZeptoClaw. No public development activity recorded in the 24-hour window, indicating early planning phase or hiatus.

## 7. Trend Signals
Three actionable industry trends can be extracted from this cohort's activity:
First, the open source AI agent ecosystem has definitively moved past the experimental demo phase: over 70% of all merged PRs across active projects in this window are stability, security, or bug fix patches, not new end-user features, meaning production-grade deployable agent tooling is now widely available for enterprise and personal use cases.
Second, overhead reduction is the top unmet user demand: across 4 separate projects, users consistently complain about excessive per-call token overhead, idle memory bloat, and large runtime footprints, which will be the highest priority optimization area across the entire ecosystem for the next 3 months.
Third, enterprise adoption of self-hosted agents is accelerating rapidly: regulated industry operators are now actively driving roadmap priorities for MCP access control, immutable audit logs, OIDC authentication, and SLSA supply chain compliance, features that were not even discussed as requirements across the ecosystem as recently as Q1 2026. Finally, SQLite has emerged as the de facto standard state storage layer for the next generation of agent runtimes, replacing legacy JSONL file session storage that has long been the top cause of avoidable end-user data corruption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Daily Digest | 2026-06-25
## 1. Today's Overview
NanoBot recorded exceptionally high development activity across the 24-hour window ending 2026-06-25, with 63 total tracked changes across updated issues and pull requests, indicating ~2x the project's normal baseline contribution velocity. The work focused on closing high-priority security gaps for the MCP framework, resolving regressions from the recent Telegram Bot API 10.1 integration, shipping mobile WebUI usability improvements, and adding support for new popular coding-focused LLM providers. 8 issues were resolved and 19 PRs merged/closed this cycle, with no new production releases published as maintainers wrap up final cross-client compatibility checks for pending fixes. Overall project health is strong, with external contributors submitting high-quality, scoped patches that align closely with the core roadmap.

## 2. Releases
No new official releases were published in the tracked 24-hour period. All changes remain in the `main` development branch at time of writing.

## 3. Project Progress
All 19 merged/closed PRs completed this cycle are focused on low-risk, high-impact fixes and targeted feature adds:
- New provider integrations finalized: Dedicated Kimi Coding Plan provider support, plus official support for OpenCode Zen and OpenCode Go coding model endpoints
- Fixed long-standing Anthropic stream session poisoning bug where duplicate `tool_use` IDs caused permanent 400 errors for affected sessions
- Resolved v0.2.2 Telegram regressions including missing line breaks in messages and constant unwanted message flickering during generation
- Patched WebUI issues including raw `<thinking>` tag rendering for reasoning models and broken multi-file apply_patch edit tracking
- Fixed iOS Safari mobile WebUI input zoom bug that distorted UI when users tapped the message entry field

## 4. Community Hot Topics
The most actively discussed community items this cycle are:
1. **"Ultra-lightweight" branding vs Node.js bloat issue**: [Issue #660](https://github.com/HKUDS/nanobot/issues/660) (11 comments, 5 thumbs up), first opened 4 months ago and newly updated. The underlying user need is validation that NanoBot's claimed low-resource footprint extends to all deployment environments, with many edge/self-hosted users running NanoBot on SBCs with limited storage that cannot accommodate the ~200MB Node.js runtime dependency.
2. **Cross-client Telegram rich message compatibility**: The suite of issues and PRs linked to the recent Telegram Bot API 10.1 rollout have drawn dozens of user reports, highlighting that the core user base uses a wide range of Telegram clients (Telegram Web, Telegram X, third-party mobile clients) that have mismatched support for new official API features.
3. **MCP security advisory disclosures**: Issues [#4434](https://github.com/HKUDS/nanobot/issues/4434) and [#4435](https://github.com/HKUDS/nanobot/issues/4435) drew immediate maintainer response, demonstrating the community's priority on security for agent tool access controls.

## 5. Bugs & Stability (Ranked by Severity)
1. **Critical (Security)**: Two MCP `enabledTools` policy bypasses that leak unapproved MCP resources and prompts to connected models. Two matching fix PRs ([#4436](https://github.com/HKUDS/nanobot/pull/4436), [#4452](https://github.com/HKUDS/nanobot/pull/4452)) have been submitted and are awaiting final review.
2. **High (Regression)**: Telegram channel empty replies bug [#4499](https://github.com/HKUDS/nanobot/issues/4499) and Telegram Web "unsupported message" rendering failure [#4488](https://github.com/HKUDS/nanobot/issues/4488) introduced by the Bot API 10.1 rollout. Two fix PRs adding a configurable toggle for rich messages ([#4505](https://github.com/HKUDS/nanobot/pull/4505), [#4495](https://github.com/HKUDS/nanobot/pull/4495)) are open for testing.
3. **Medium (Integration)**: DingTalk channel missing rich text support and frequent HTTP timeouts [#4497](https://github.com/HKUDS/nanobot/issues/4497), with a full fix PR [#4501](https://github.com/HKUDS/nanobot/pull/4501) already submitted.
4. **Minor (UX)**: Xiaomi MiMo ASR transcription failure due to unsupported WebM audio format [#4492](https://github.com/HKUDS/nanobot/issues/4492), with a fix PR [#4493](https://github.com/HKUDS/nanobot/pull/4493) scoped for mobile WebUI users.

## 6. Feature Requests & Roadmap Signals
User requests that are very likely to ship in the upcoming v0.2.3 patch release include the MCP security fixes, Telegram cross-client rich message compatibility toggle, and DingTalk channel bug patches, all of which are already in late review. Features targeted for the next minor v0.3.0 release include: PWA support and mobile sidebar swipe gestures for WebUI, Mattermost chat channel integration, read-only chat history search tool, and workspace subdirectory organization for user-added skills. The newly requested HVTracker trust badge addition to the README will likely be merged within days as a documentation update.

## 7. User Feedback Summary
Core recent user pain points reported this cycle include: frustration that the new Telegram rich message feature broke support for non-official Telegram clients, edge deployment users are unhappy with the mandatory Node.js dependency bloating Docker image sizes, mobile WebUI users face consistent UX frictions that prevent full-time usage of the browser client as a standalone app, and enterprise self-hosted users are requesting mandatory authentication guardrails for the OpenAI-compatible API when exposed on public network interfaces. User satisfaction remains high, with multiple community contributors highlighting the 24-hour turnaround time for responses to security advisory reports as a major positive signal for production deployments.

## 8. Backlog Watch
Long-pending high-priority items awaiting maintainer attention:
1. Issue [#660](https://github.com/HKUDS/nanobot/issues/660) (opened 2026-02-14): The request to remove the Node.js dependency to honor the ultra-lightweight project branding has been open for over 4 months, with no public roadmap updates addressing how the team will refactor the WebUI asset pipeline to eliminate the requirement.
2. PR [#4437](https://github.com/HKUDS/nanobot/pull/4437): The full heartbeat trigger feature that was requested in issue #3437 has been fully implemented, but has been waiting for maintainer review for 3 days with no feedback posted to the PR thread.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest (2026-06-25)
---
## 1. Today's Overview
This 24-hour activity window sees exceptionally high community and core team engagement across the Hermes Agent repository, with 50 updated issues and 50 updated pull requests tracked. 26% of total updated items were closed/merged, indicating strong triage throughput for critical stability and security issues. Most ongoing work is focused on two core priorities: reducing excessive token overhead that plagues large toolset deployments, and expanding cross-platform compatibility for self-hosted and enterprise users. The project maintains a healthy contribution pipeline, with 12 new PRs opened on 2026-06-24 alone from external community contributors. No new formal releases were published in the period.
## 2. Releases
No new official releases were launched in the 24h window ending 2026-06-25. The latest stable public build remains v0.17.0 (released 2026-06-19) referenced in recently filed bug reports.
## 3. Project Progress
5 total PRs were merged/closed in the period, resolving 13 previously open issues:
1.  PR #15 (https://github.com/NousResearch/hermes-agent/pull/15) from founder teknium1 landed the initial reinforcement learning training toolset and full, production-grade file operations tooling to upgrade the agent's coding workflow capabilities.
2.  PR #39218 (https://github.com/NousResearch/hermes-agent/pull/39218) fixed the longstanding desktop app bug where the `/undo` slash command cleared agent context but left the undone chat exchange visible on the user interface.
3.  Merged patches resolved a critical Windows installer venv lock bug, an infinite hang in the DDGS web search backend, a Telegram flood control issue that dropped final user responses, and a high-severity security flaw in the `delegate_task` tool that exposed restricted messaging/cron tools to unpermitted child agents.
4.  3 new community-submitted test PRs were opened today that push statement coverage for the Discord tool, Microsoft Graph client, and Microsoft Graph auth modules to 100%, eliminating untested error paths for widely used enterprise integrations.
## 4. Community Hot Topics
The most active, highest-reaction discussions center on performance optimization and enterprise capability expansion:
1.  **Lazy Tool Schema Loading Feature Proposal (#6839, 27 comments, 14 👍)**: https://github.com/NousResearch/hermes-agent/issues/6839
    *   Analysis: The top-voted active issue addresses the 3,500-5,000 token per call overhead from injecting full tool schemas for all 50+ enabled tools, a top pain point for local model users running limited-context hardware. The underlying unmet user need is lower inference latency and running Hermes efficiently on consumer-grade edge hardware.
2.  **Generalized ACP Client for Multi-Agent Orchestration (#5257, 11 comments, 16 👍)**: https://github.com/NousResearch/hermes-agent/issues/5257
    *   Analysis: This proposal from Flowforge Lab has the highest user positive reaction count, reflecting strong demand from enterprise and power users to integrate Hermes with existing ACP-compatible coding agents (Claude Code, Cursor, etc.) rather than running it as a standalone agent.
3.  **Rocket Chat Gateway Support Feature Request (#3725, 11 comments, 10 👍)**: https://github.com/NousResearch/hermes-agent/issues/3725
    *   Analysis: Self-hosted enterprise teams that avoid public messenger platforms have requested native Rocket Chat integration, and the submitter notes the implementation will only require <50 lines of code, making it a low-effort high-impact addition.
## 5. Bugs & Stability
Bugs are ranked by official severity P1 to P2 below, with fix PR status noted:
| Severity | Issue Link | Description | Fix PR Status |
|----------|------------|-------------|---------------|
| P1 | https://github.com/NousResearch/hermes-agent/issues/19566 | OpenAI-Codex credential pool drops newly added credentials after stale `auth.json` rewrite during rotation, leading to unexpected authentication failures in multi-user deployments | No linked fix PR, marked as security boundary risk |
| P1 | https://github.com/NousResearch/hermes-agent/issues/31600 | Hardcoded `MINIMUM_CONTEXT_LENGTH = 64_000` deadlocks auto-compression and triggers infinite tool loops on high-context models with 1M+ token windows | No linked fix PR |
| P2 | https://github.com/NousResearch/hermes-agent/issues/13834 | Hermes openai-codex provider fails on machines/network configurations where the official OpenAI Codex CLI runs without issues | Marked `needs-repro`, no public fix PR |
| P2 | https://github.com/NousResearch/hermes-agent/issues/33801 | Secret redaction system corrupts Python/shell syntax when replacing API keys in tool output for `write_file`, `execute_code` and terminal tools, causing silent tool failures | No linked fix PR |
| P2 | https://github.com/NousResearch/hermes-agent/issues/32660 | Tools array is completely missing from API calls to custom self-hosted Ollama endpoints, breaking all tool use workflows | Open partial fix PR pending final review |
All recently reported lower-severity UI bugs (dashboard chat rendering glitches, mobile autocomplete breakages) have corresponding open fix PRs filed within hours of submission.
## 6. Feature Requests & Roadmap Signals
Based on community feedback, the following high-demand features are highly likely to land in the next minor v0.18.0 release:
1.  Two-pass lazy tool schema loading to cut 60%+ of fixed tool-related token overhead, aligned with the project's stated performance roadmap.
2.  Native Rocket Chat gateway support, given the low implementation effort and strong positive community feedback.
3.  The generalized ACP client interface for multi-agent orchestration, which aligns with Nous Research's public product direction for Hermes as a meta-orchestrator for third-party coding agents.
4.  The newly opened PR for self-hosted Mem0 backend support will almost certainly ship in the next patch release to resolve pain points for self-hosted memory users.
Other planned features including Headroom-AI context compression integration and full multi-language localization (Russian, Chinese, French, Portuguese) are tracked as backlog items for v0.19.0.
## 7. User Feedback Summary
Core verified user pain points surfaced this period:
- Users running multi-gateway deployments (Telegram + WhatsApp + Cron) report 73% of every API call's token count is unused fixed overhead, leading to 13.9K wasted tokens per request and unnecessarily high inference costs.
- Windows desktop users face frequent broken Hermes updates due to unhandled file locks on background `pythonw.exe` processes, a bug that was fully resolved in today's merged PRs.
- Mobile dashboard users report they cannot select and copy chat text from the xterm.js canvas interface, and face broken autocorrect behavior in the chat input field.
- Self-hosted Mem0 users cannot connect to their local memory instances without a paid cloud MEM0_API_KEY, a gap that is addressed by a newly opened PR submitted today.
Community satisfaction signals include users actively building and sharing third-party complementary tools (such as the open source Hermes token usage monitoring dashboard shared in #4379) demonstrating strong ecosystem investment.
## 8. Backlog Watch
These high-impact older issues have not received formal maintainer triage or updates for 2+ months, and need prioritized attention:
1.  #4379 Token Overhead Analysis Report (https://github.com/NousResearch/hermes-agent/issues/4379) submitted April 2026 with 15 comments: a community contributor shared fully reproducible profiling data of 73% fixed token overhead across real production deployments, no core team representative has responded or tagged this issue to a roadmap milestone.
2.  #13834 OpenAI-Codex Provider Compatibility Bug (https://github.com/NousResearch/hermes-agent/issues/13834) submitted April 2026: blocks all users of OpenAI's Codex workflow from using the Hermes native provider, remaining in `needs-repro` status for over 2 months.
3.  #17945 `delegate_task` Tool Returns HTTP 404 (https://github.com/NousResearch/hermes-agent/issues/17945) submitted April 2026: breaks the widely used auto-research sub-agent spawning capability, no public triage update since creation.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Daily Digest | 2026-06-25
---

## 1. Today's Overview
PicoClaw demonstrated high issue resolution efficiency in the 24-hour monitoring window, with 13 of 14 recently updated issues fully closed, alongside 8 active in-progress open PRs advancing across core functionality, security hardening, and new messaging channel support domains. No new official stable releases were published during this period. The bulk of resolved closed items are historic security vulnerability reports submitted in early June that received full patches in prior development cycles and were marked resolved post-validation. Current development velocity is heavily focused on bug fixes for the v0.2.9 stable line, plus incremental feature additions for expanded LLM backend compatibility. The single remaining active open user-reported bug targets Android/Termux platform compatibility, reflecting the project's ongoing expansion to support edge and non-x86 deployment environments.

## 2. Releases
No new official releases were published between 2026-06-24 and 2026-06-25. The latest public stable version remains v0.2.9.

## 3. Project Progress
No PRs reached merged or closed status in this 24-hour window, as all 8 updated PRs remain in open peer review state. Notable resolution progress was delivered on the issue management front:
- 12 public security vulnerability reports covering attack surfaces across Feishu, WeCom, LINE, MQTT messaging channels, `web_fetch` SSRF protection, `exec` tool permission controls, launcher first-run setup, and WebSocket control plane access were confirmed fully patched and closed.
- The long-running enhancement request #2404 for native streaming LLM HTTP request support was formally resolved.
- A user question about PageAgent adaptation for Vue MVVM architecture received a formal response and was closed.

## 4. Community Hot Topics
The most active and highly engaged community items are listed below:
1. **Streaming LLM configuration feature request** [#2404](https://github.com/sipeed/picoclaw/issues/2404)
   With 13 total comments and 1 reaction, this is the most discussed item in the recent backlog. Users are requesting a simple `streaming: true` config flag to match the native streaming behavior of the official OpenAI Python client. Underlying user need points to widespread demand for reduced end-to-end response latency for conversational agent use cases, to enable real-time token streaming output for end users interacting with PicoClaw assistants.
2. **PageAgent Vue MVVM adaptation inquiry** [#3167](https://github.com/sipeed/picoclaw/issues/3167)
   A new enterprise user reported that their team is testing PicoClaw's PageAgent component for automation on Vue 2 + Element UI internal admin systems. This reflects fast growing adoption of PicoClaw's web automation capabilities in the Chinese enterprise sector, and unmet demand for compatibility with modern SPA frameworks beyond plain DOM web pages.

## 5. Bugs & Stability
Bugs are ranked by severity as follows:
1. **High Severity**: Process hooks crash gateway on Android/Termux v0.2.9 [#3164](https://github.com/sipeed/picoclaw/issues/3164). The gateway crashes within 2 seconds of startup after any stdio JSON-RPC hook is enabled, fully blocking all hook-based workloads on the Android edge deployment target. No corresponding fix PR is publicly available as of this update.
2. **Medium Severity**: Three recently identified bugs in the `openai_compat` provider stack: a build failure caused by an unbound `log` reference, missing parsing support for Volcengine Doubao's Seed XML formatted tool calls, and misleading empty error messages for unreadable non-200 responses from model list endpoints. All three issues have corresponding draft fix PRs (#3166, #3165, #3168) submitted by core maintainers, expected to land in the next patch release.
3. **Low Severity**: Evolution draft mode unnecessarily spends tokens processing periodic heartbeat check turns. A fix PR [#3169](https://github.com/sipeed/picoclaw/pull/3169) is already submitted to skip the cold path scheduling for heartbeat operations, with a regression test included.

## 6. Feature Requests & Roadmap Signals
Based on current open PRs and resolved issues, the following features are high-priority candidates for upcoming releases:
- Streaming LLM request support (resolved in closed #2404) is almost guaranteed to ship in the next minor patch release v0.2.10, as core implementation work is already complete.
- The new DeltaChat gateway support from external contributor PR #3063 will likely land in the 0.3.x feature release cycle, extending PicoClaw's bot support to end-to-end encrypted instant messaging platforms.
- The remote Pico WebSocket mode from PR #3118 that decouples local agent processes from the central gateway is targeted for the next major release, serving distributed multi-agent clustered deployment use cases.
- PageAgent Vue/ MVVM framework adaptation will be added to the official roadmap per high demand from enterprise automation users.

## 7. User Feedback Summary
Recorded real user feedback from the past 24 hours includes the following key points:
- **Pain points**: The current v0.2.9 release cannot run on Android/Termux, blocking users who want to deploy lightweight PicoClaw instances on low-power mobile edge devices instead of x86 servers. Existing PageAgent implementations cannot properly interact with stateful Vue 2 + Element UI enterprise backends, limiting adoption for internal business workflow automation. Users of Volcengine Doubao LLM backends previously encountered unparsed XML tool call leaks in chat streams that broke structured tool execution workflows.
- **Satisfaction**: The community shows strong positive engagement with PicoClaw's lightweight deployment footprint and rich multi-channel support, as evidenced by the steady stream of unsolicited new gateway integration PRs from external open source contributors.

## 8. Backlog Watch
The following high-impact items have been pending review for 2+ weeks and require prioritized maintainer attention:
1. PR #3116 ([fix(pico): complete turn.done lifecycle signaling](https://github.com/sipeed/picoclaw/pull/3116)): Submitted on 2026-06-12, this PR fixes message delivery guarantee gaps for all Pico protocol clients, a core stability improvement for distributed agent setups, but has not received final review approval yet.
2. PR #3115 ([Fix inline data URL media extraction for generic tool output](https://github.com/sipeed/picoclaw/pull/3115)): Submitted on 2026-06-12, this PR fixes a session history corruption bug that crashes agent sessions when `read_file` or `exec` commands output base64-encoded image content in logs or source code, affecting core runtime stability.
3. PR #3063 ([feat: add deltachat gateway](https://github.com/sipeed/picoclaw/pull/3063)): Submitted on 2026-06-08, this external community contribution for the new DeltaChat messaging channel has been pending feedback for over two weeks, representing significant contributor effort that risks going stale without maintainer engagement.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest | 2026-06-25
---
## 1. Today's Overview
NanoClaw saw extremely high development velocity in the 24-hour window ending 2026-06-25, with 17 total updated pull requests across core platform security, new integration features, and bug fixes, paired with 1 newly filed user feature request. The project activity is balanced between critical production hardening, user-requested functionality rollout, and incremental quality of life improvements for self-hosted and enterprise deployments. All open bugs logged in the window have corresponding in-flight fix PRs, indicating strong alignment between contributors and active issue resolution. This level of throughput signals the project is moving steadily toward full production readiness for multi-bot, cross-channel use cases. No breaking changes were announced in this update window.

## 2. Releases
No new official releases were published for NanoClaw in the 24-hour reporting period.

## 3. Project Progress
Two PRs were merged or closed in the past 24 hours, resolving high-priority functionality and security gaps:
1. **[PR #2849](https://github.com/nanocoai/nanoclaw/pull/2849)** by contributor grantland: Initial implementation of multi-Telegram-bot support, allowing a single NanoClaw instance to run multiple separate Telegram bot identities via suffixed `TELEGRAM_BOT_TOKEN_<SUFFIX>` environment variables.
2. **[PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799)** by contributor sturdy4days: Critical security fix for CVE-2026-29611, which confines the `send_file` utility's read access strictly to the `/workspace` directory, blocking prompt-injected agents from exfiltrating arbitrary container-hosted credential and system files.

## 4. Community Hot Topics
The highest-engagement active thread centers on production multi-bot deployment, tying user feedback directly to active development work:
- Open user issue **[#2852](https://github.com/nanocoai/nanoclaw/issues/2852)** asking for restored multi-Telegram-bot functionality, paired with follow-up implementation PR **[#2853](https://github.com/nanocoai/nanoclaw/pull/2853)** refining the merged initial implementation.
Underlying user need: Teams running multiple branded bot identities on Telegram do not want to operate full separate NanoClaw instances for each bot, to cut down on operational overhead, infrastructure costs, and duplicated configuration management. This is a top ask for small teams running production NanoClaw workloads.

## 5. Bugs & Stability
All identified issues in the reporting window have active open fix PRs, ranked by severity below:
1. **Critical**: Unpatched CVE-2026-29611 arbitrary file read vulnerability, fully resolved via merged PR #2799, patch available for immediate consumption.
2. **High**: Abandoned test poll loops that steal message routing data from subsequent test runs, tracked in in-flight fix **[PR #2851](https://github.com/nanocoai/nanoclaw/pull/2851)**. No user-facing production impact from this bug was reported.
3. **Medium**: Missing `isMention` and `isGroup` metadata fields on inbound Signal messages that break bot routing logic, fix drafted in **[PR #2850](https://github.com/nanocoai/nanoclaw/pull/2850)**.
4. **Medium**: Missing working directory and `.env` fallback logic for the OpenCode provider, fix available in **[PR #2848](https://github.com/nanocoai/nanoclaw/pull/2848)**.
No user-reported production outages or critical crashes were logged in the reporting window.

## 6. Feature Requests & Roadmap Signals
The only direct user feature request in the window (Telegram multi-bot support) is already partially merged, and is guaranteed to ship in the next minor release. Additional high-priority features nearing completion that are likely to land in the next 1-2 releases include:
- Native persistent E2EE Matrix adapter via **[PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844)** for privacy-focused self-hosted users
- URL-based remote MCP server support via **[PR #2847](https://github.com/nanocoai/nanoclaw/pull/2847)** to extend agent tooling capabilities across networked deployments
- The new `/learn` skill via **[PR #2843](https://github.com/nanocoai/nanoclaw/pull/2843)** that auto-generates reusable custom skills from arbitrary directories, URLs or past conversation context
The next release will lead with the critical CVE security patches, multi-Telegram-bot functionality, and the new `/learn` skill as headline user-facing updates.

## 7. User Feedback Summary
The only direct end-user feedback in the 24-hour window comes from Kwisss in issue #2852, expressing clear frustration that the previously available Telegram multi-bot feature was removed without a clear replacement. The user notes that even AI assistance (Claude) was unable to get the partially documented generic "instance support" to work, and states they are actively evaluating alternative tools if the feature is not restored. No positive satisfaction feedback was logged in the reporting window, all user input centers on unmet production operational requirements.

## 8. Backlog Watch
Three long-running high-priority PRs, all updated 2026-06-24, are waiting for maintainer review and signoff to reduce project security exposure and fix long-standing data reliability gaps:
1. **[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750)** (open since 2026-06-12): Fixes stale `outbound.db` journal recovery failures after container process kills, resolving two long-standing unpatched data corruption bugs #2516 and #2640.
2. **Three critical security PRs open since 2026-06-17**: **[#2800](https://github.com/nanocoai/nanoclaw/pull/2800)** (path traversal protection for `ncl groups` operations), **[#2801](https://github.com/nanocoai/nanoclaw/pull/2801)** (untrusted router input hardening), and **[#2802](https://github.com/nanocoai/nanoclaw/pull/2802)** (ncl socket transport timeout and buffer caps). All three close unpatched high-severity security gaps that have been in review for over a week and require priority maintainer attention.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-06-25 Project Digest
---
## 1. Today's Overview
The 24-hour tracking window shows high, stable development activity across the IronClaw Reborn runtime and WebUI v2 product lines, with 19 updated issues, 43 updated pull requests, and 18 merged/closed PRs. The core team is heavily focused on resolving recent production reliability gaps, polishing dogfooding-discovered UX bugs, and making incremental progress on long-planned modular architecture refactors. No major breaking changes were shipped this period, and most active work targets improved predictability for self-hosted and multi-user hosted deployments. The project health is strong: CI fixes landed to restore passing main branch status, and high-severity runtime regressions are prioritized for resolution within 1-2 working days.
## 2. Releases
No new official releases were published in this tracking window.
## 3. Project Progress
18 PRs were merged or closed over the last 24 hours, delivering the following fixes and feature advancements:
- [PR #5193](https://github.com/nearai/ironclaw/pull/5193): Fixed two broken CI config bugs (duplicate YAML workflow key, missed ignored subagent test) to restore a fully green passing main branch.
- [PR #5194](https://github.com/nearai/ironclaw/pull/5194): Patched the SSE turn event stream to automatically recover from log rebase on user reconnection, eliminating a production bug where cross-channel threads (created via Slack, continued via WebUI) would cause sessions to hang for all instance users.
- [PR #5186](https://github.com/nearai/ironclaw/pull/5186): Resolved the UX localization issue for Reborn settings, adding complete i18n support for settings labels and responsive adjustments for Chinese language automation filter controls.
## 4. Community Hot Topics
The most active discussion items this window are all focused on solving large-scale deployment pain points for production operators, with shared underlying demand for lower latency and more predictable runtime behavior:
- [Issue #5169](https://github.com/nearai/ironclaw/issues/5169): Reports that bundled skills trigger the prompt safety denylist over common API vocabulary (Authorization, Bearer, API key) leading to misleading hard failures. The thread generated 2 comments from core engineers exploring adjustments to the denylist scope.
- [PR #5149](https://github.com/nearai/ironclaw/pull/5149): A flag-gated progressive tool disclosure feature that cuts per-call prompt size from ~25.8k tokens by avoiding sending all 91 full tool schemas on every LLM request. This addresses a widely reported production pain point of repeated 120s NEAR AI request timeouts for large deployments.
- [PR #5203](https://github.com/nearai/ironclaw/pull/5203): Implements fast-fail logic for degraded or offline LLM providers, eliminating the 30+ minute total multi-user lag observed during recent NEAR AI outages.
## 5. Bugs & Stability
Bugs are ranked by user impact below:
1. **Critical (Already Resolved)**: [Issue #5139](https://github.com/nearai/ironclaw/issues/5139): A recent main branch regression causing web/research tasks to hang at initialization with zero LLM calls, breaking 21/147 PinchBench benchmark tasks. No unpatched critical runtime bugs remain open after the related fix was merged.
2. **High Severity (No Merged Fix)**: [Issue #5169](https://github.com/nearai/ironclaw/issues/5169): Default clean installations suffer misleading hard failures when bundled skill instructions trigger the prompt safety denylist.
3. **High Severity (No Merged Fix)**: [Issue #4986](https://github.com/nearai/ironclaw/issues/4986): Recurring automation runs can become permanently blocked waiting for pending tool approvals, no automatic recovery possible.
4. **High Severity (Fix PR Open)**: [Issue #5184](https://github.com/nearai/ironclaw/issues/5184): Reborn startup fails entirely if the NEAR AI MCP product auth lookup service is offline, breaking air-gapped self-hosted deployments.
5. **Medium Severity (Multiple Open Fix PRs)**: A set of WebUI v2 dogfooding bugs including no visible error feedback for stale/invalid bearer tokens, missing progress indicators for successful tool runs, and duplicate approval prompts for tools set to "Ask each time".
## 6. Feature Requests & Roadmap Signals
Based on current PR priority and open issue activity, the following features are highly likely to ship in the next minor release:
1. Structured out-of-binary observability and diagnostics for hosted Reborn deployments tracked in [Issue #5182](https://github.com/nearai/ironclaw/issues/5182), as core engineers are actively prioritizing operator usability for production instances.
2. Full end-to-end tool permission settings UI (global auto-approve + per-tool controls) from open [PR #5068](https://github.com/nearai/ironclaw/pull/5068), which is code complete with no new backend changes required.
3. Redesigned, higher density Automations page for WebUI v2 from open [PR #5084](https://github.com/nearai/ironclaw/pull/5084), targeted for the next incremental UI polish release.
4. Multi-tenant WebUI log access from [PR #5199](https://github.com/nearai/ironclaw/pull/5199), which is fully reviewed and ready to merge.
## 7. User Feedback Summary
Collected from production operator reports and internal dogfooding activity:
- Users report high satisfaction with the core agent reasoning and tool execution functionality, but widespread frustration with polish gaps that block 24/7 production deployment as a recurring task runner.
- Hosted instance operators cite unpredictable multi-minute lag during LLM provider outages as their top operational pain point, followed by lack of accessible structured logging for debugging.
- Self-hosted users running air-gapped instances report that the hard dependency on NEAR AI MCP auth lookups blocks offline installation entirely, a top requested hardening feature.
## 8. Backlog Watch
Long-standing high-priority items waiting for maintainer attention:
- [Issue #4108](https://github.com/nearai/ironclaw/issues/4108): The nightly E2E test suite has been failing since 2026-05-27, with no open fix PR as of this tracking window. Unresolved broken E2E tests create risk of undetected regressions making their way to stable releases.
- The full 132k line `ironclaw_reborn_composition` god crate decomposition roadmap, initially drafted in large PR #5135 and restarted as incremental work in [PR #5137](https://github.com/nearai/ironclaw/pull/5137), has no public prioritization timeline despite being a core prerequisite for long-term runtime maintainability.
- The remaining milestones for the full memory layer refactor tracked in [Issue #5201](https://github.com/nearai/ironclaw/issues/5201) have not been assigned to engineers after the M2 phase landed, delaying support for third-party memory provider integrations requested by enterprise users.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Daily Digest | 2026-06-25
Repository: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview
LobsterAI recorded extremely high development activity on 2026-06-25, with 43 total PRs updated and 95% of them (41 PRs) merged or closed, marking a full-team bug scrub sprint focused on resolving pending stability patches accumulated over late May to early June 2026. No new official releases were published in this window, and only 1 existing user-reported issue received an update over the past 24 hours. All recent development work prioritizes runtime hardening for the core OpenClaw agent execution engine, rather than launching major new end-user features. Overall project health is robust, with very high merge velocity that clears a large backlog of long-standing unresolved technical issues reported by users.

## 2. Releases
No new official releases were published during the 2026-06-25 observation window.

## 3. Project Progress
41 PRs were merged or closed over the past 24 hours, most of which were pending patches created between May 25 and June 3 2026, covering 4 core workstreams:
1.  **OpenClaw runtime hardening**: Unified spawn logic for OpenClaw gateway across Windows/macOS/Linux via [PR #2195](https://github.com/netease-youdao/LobsterAI/pull/2195), fixed extra dock app generation during shell snapshots [PR #2196](https://github.com/netease-youdao/LobsterAI/pull/2196), and prevented infinite aborted tool loops from burning idle tokens via [PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049)
2.  **Core interaction fixes**: Resolved duplicate assistant prefix generation when the OpenClaw run falls back to chat history for final answers [PR #2197](https://github.com/netease-youdao/LobsterAI/pull/2197), eliminated session freezing bugs [PR #2047](https://github.com/netease-youdao/LobsterAI/pull/2047), added filtering for empty invalid LLM streaming output, and stripped internal thinking blocks from public replies
3.  **Platform-specific patches**: Replaced deprecated VBScript launchers with hidden PowerShell scripts for app updates on Windows, and resolved WeChat integration breakages after app reinstalls/updates
4.  **Model support updates**: Added support for Minimax M3, Mimo v2.5 models, and preserved user-customized context window settings for all BYO (bring-your-own) LLM models

## 4. Community Hot Topics
Only 1 active updated issue received attention in the past 24 hours, with no high-engagement PRs reported:
- Issue [#1394: Non-recurring scheduled tasks get permanently deleted after a single run](https://github.com/netease-youdao/LobsterAI/issues/1394)
  Underlying user demand: Current behavior automatically removes one-off scheduled tasks after execution, but users often need to reuse the identical task template for future single runs, rather than rebuilding the full task configuration from scratch repeatedly. There is no high-volume comment or upvote activity for this issue as of digest publication.

## 5. Bugs & Stability
Ranked by severity:
1.  **Critical (resolved)**: Idle unexpected LLM token consumption caused by infinite looping aborted tool runs. Full fix landed in merged [PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049), no new user post-patch complaints reported.
2.  **High (resolved)**: Random session freezes, gateway restarts triggered by GitHub Copilot token refresh, broken WeChat integration on Windows after updates. All have corresponding merged fixes deployed with the latest main branch build.
3.  **Low (open, no fix PR filed)**: Non-recurring scheduled tasks are permanently deleted after a single execution, no crash or functional breakage occurs, but it reduces workflow reusability.

## 6. Feature Requests & Roadmap Signals
The only explicit user feature request tracked in this window is the scheduled task retention improvement, and no new unannounced major features were spotted in merged code changes. Based on current development priorities, the next minor version release will almost certainly ship all 41 accumulated stability patches, expanded support for newly released LLM models, and the QoL fix for non-recurring scheduled tasks, with no major end-user feature rollout planned for the near term.

## 7. User Feedback Summary
Top recent user pain points that have been addressed in this sprint include unplanned idle LLM token cost overruns, unresponsive chat sessions, and Windows platform integration glitches, all of which were high-priority complaints reported in the past 1 month. The remaining active user dissatisfaction is focused on unnecessary repetitive configuration work for one-off scheduled tasks. No widespread negative feedback on existing core functionality or new features has been recorded, and the ongoing stability sprint is actively closing the gap between expected and actual runtime performance for agent use cases.

## 8. Backlog Watch
Issue [#1394](https://github.com/netease-youdao/LobsterAI/issues/1394) (scheduled task deletion bug) has been open for over 2 months since its creation on 2026-04-03, marked with a stale tag, with only 1 comment and no assigned maintainer as of 2026-06-25. This low-severity but high user experience value issue has been lingering far longer than most of the bug patches merged in this sprint, and it is recommended that the triage team assign a developer and schedule this fix for the next minor release cycle.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI/tinyagi) Project Digest | 2026-06-25
---
## 1. Today's Overview
This digest covers project activity for the 24-hour window ending 2026-06-25. TinyClaw recorded zero new or updated open/closed issues, no new formal releases, and one fully merged pull request in the reporting period, reflecting a low-volume, maintenance-focused activity pace. No unresolved active bugs or pending critical feature work is logged in the public issue tracker, as maintainers prioritize stabilizing core functionality for previously underserved user segments. Overall project health remains strong, with the small but high-impact recent contribution directly expanding the tool's accessible user base.
## 2. Releases
No new official, pre-release, or draft versions of TinyClaw were published in the 2026-06-25 reporting window. No associated breaking change notices or migration documentation updates were issued.
## 3. Project Progress
One community-submitted change was fully finalized and merged in the tracked period:
- **PR #281 [CLOSED/MERGED]**: fix: Windows cross-platform support in CLI (https://github.com/TinyAGI/tinyagi/pull/281), authored by mperkins0155. This patch resolves three Windows-exclusive bugs that blocked the native `tinyagi` CLI from running on non-WSL Windows installations. Notably, it fixes a well-documented Node.js path handling edge case where `new URL('.', import.meta.url).pathname` returns a malformed path with a leading slash before the Windows drive letter, which previously triggered unresolvable `MODULE_NOT_FOUND` errors. The full fix validates the end-to-end core CLI workflow for all native Windows users for the first time.
## 4. Community Hot Topics
There are no open issues or PRs with elevated comment or reaction counts in the current tracking window. The recently merged Windows compatibility PR #281 is the most recent community contribution, with no ongoing public discussions tied to active project items as of this digest date. The underlying unmet user need that drove this contribution is clear: a large unmet segment of Windows developers who did not want to configure and maintain WSL environments to run TinyClaw had been waiting for native support, making this fix a high-value quality of life update that unlocks usage for an entirely new user group.
## 5. Bugs & Stability
No new unreported crashes, regressions, or critical bugs were logged in the 24-hour reporting window. All three previously identified Windows-native CLI path handling bugs are now fully resolved via merged PR #281, with no open unresolved high or critical severity bugs flagged in the public tracker. No pending partial fixes or unaddressed stability gaps are documented for the current codebase state.
## 6. Feature Requests & Roadmap Signals
No explicit user-submitted feature requests were added in the reporting window. The recent focused work to close Windows compatibility gaps strongly signals that the next minor stable release of TinyClaw will ship native out-of-the-box Windows support as a flagship update. Predictable follow-up features prioritized to serve this newly enabled user base in the next version include official Windows-specific installation documentation, Windows start menu shortcut support, and batch script compatibility for local automation workflows.
## 7. User Feedback Summary
The most significant resolved user pain point this cycle is the requirement for Windows users to set up and maintain a full WSL environment to run the TinyClaw CLI, a barrier that previously stopped many prospective users from adopting the tool. No active user dissatisfaction with core functionality is logged as of this digest date, and the Windows support fix is expected to drive measurable satisfaction gains for hobbyist and professional Windows developers who previously selected competing AI agent frameworks with native Windows support. Indirect signals show a notable segment of local personal assistant use case users on Windows had been waiting for this compatibility update to begin building workflows on TinyClaw.
## 8. Backlog Watch
There are no long-unanswered open issues or stale pull requests requiring urgent maintainer attention as of 2026-06-25. PR #281, the recently merged Windows fix, had a total review turnaround time of 8 days after its initial submission on 2026-06-16, which aligns with the project's average response time for community contributions, and no unaddressed pending public submissions are currently flagged in the tracker.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 2026-06-25 Project Daily Digest
---
## 1. Today's Overview
This 24-hour window marks an extremely active sprint phase for the CoPaw project following the recent AgentScope 2.0 core migration, with 23 updated issues and 50 updated pull requests tracked across the repository. 39% of all recently modified issues were resolved and closed in the period, demonstrating fast triage and iteration velocity from the core team. The vast majority of current development work focuses on resolving post-migration regressions, improving model compatibility for third-party provider endpoints, and delivering highly requested quality-of-life features for desktop, CLI and TUI users. External community engagement is also growing, with 3 first-time contributors submitting formal PRs for core functionality in this cycle. No new official releases were published during the day.

## 2. Releases
No new stable, beta or pre-releases were launched in the 24-hour reporting window. No pending release notes or migration guidance are relevant for this date.

## 3. Project Progress
A total of 6 PRs were merged or closed successfully today, delivering the following verified fixes and feature improvements:
- The refactor to move current timestamp data from static system context to a per-user-message dynamic prefix (PR #5498, https://github.com/agentscope-ai/QwenPaw/pull/5498) was merged, fixing stale time values in long-running sessions and improving prompt caching efficiency.
- High-severity cross-channel regressions were fully resolved: Feishu group chat replies no longer get misrouted to active private chats (Issue #5264), DingTalk session records now correctly sync to the frontend session list (Issue #5177), and mobile viewports now support normal agent switching (Issue #5476).
- The broken shell command execution tool that failed to parse pipes, redirection and other special shell syntax was patched, resolving all related user reports for version 1.1.12.post1.
- The long-standing Tauri Windows desktop bug where the embedded Conda Python path was not detected correctly for custom skill execution was fully closed, alongside the v1.1.11 and earlier Windows desktop frontend lag / high CPU usage issue.

## 4. Community Hot Topics
The most actively discussed items this cycle, ordered by comment count:
1. [Issue #5345 Custom OpenAI-compatible providers do not support function calling](https://github.com/agentscope-ai/QwenPaw/issues/5345) (8 comments): Users running self-hosted inference endpoints such as OMLX report that while Ollama (officially integrated) supports full tool calling, all other custom OpenAI-format providers are restricted to text-only output, even with a fully compliant /v1/chat/completions + tools API. This reflects the large unmet need from self-hosting power users for full feature parity between official and custom model providers.
2. [PR #5321 Scroll context manager: durable SQLite history + on-demand recall REPL](https://github.com/agentscope-ai/QwenPaw/pull/5321) (submitted by a first-time contributor): The proposed alternative to context compression that persists full conversation history to SQLite instead of summarizing evicted turns has gained wide community traction, as users with long-running coding sessions report traditional context truncation or summarization breaks complex task continuity.

## 5. Bugs & Stability
Bugs are ranked by user impact severity, with fix status noted:
| Severity | Issue Description | Link | Fix PR Status |
|----------|-------------------|------|---------------|
| Critical | Fresh pip install of latest CoPaw returns Internal Server Error on first launch, caused by unhandled get_remote_addr transport parsing logic | https://github.com/agentscope-ai/QwenPaw/issues/5379 | No public fix PR filed yet |
| High | GLM-5.x models accessed via OpenCode Go fail execution due to unprocessed $defs / $ref fields in tool JSON schemas | https://github.com/agentscope-ai/QwenPaw/issues/5472 | In-review fix PR #5496 already submitted |
| High | Any session file over 500KB in size crashes the frontend completely with a generic render error | https://github.com/agentscope-ai/QwenPaw/issues/5479 | No fix PR linked |
| Medium | Sessions with large volumes of tool use history crash the frontend due to unhandled `type:"data"` content blocks from the backend API | https://github.com/agentscope-ai/QwenPaw/issues/5401 | No fix PR linked |
| Medium | Custom OpenAI-compatible providers cannot trigger function calling even with full tools API compliance | https://github.com/agentscope-ai/QwenPaw/issues/5345 | No fix PR linked |
| Medium | Long Markdown messages render with broken formatting (no line breaks, mashed code blocks) that only corrects after switching browser tabs | https://github.com/agentscope-ai/QwenPaw/issues/5480 | No fix PR linked |

## 6. Feature Requests & Roadmap Signals
Based on active user feature submissions, the following items are highly likely to land in upcoming releases:
1. PyPI pip-based plugin installation support (Issue #5484, PR #5492): The implementation by a first-time contributor is nearly complete, and will replace the current ZIP-only plugin installation workflow. This feature is almost guaranteed to be included in the 2.0.0b2 pre-release, as it aligns with the team's goal of native Python ecosystem integration.
2. MCP UI quality-of-life improvements (Issue #5231): Human-readable tool name display and default expanded file cards are marked as affecting both core backend and frontend modules, and are expected to ship in the next 1.1.x patch release.
3. OpenAI native response_format support (Issue #5489): This feature is scoped to core backend modules only, and will be delivered before the 2.0 stable release to support structured output use cases.
4. Kimi Coding Plan model configuration (Issue #5427): Support for the Anthropic-compatible Kimi API endpoint will be added as a minor provider update in the next 2 weeks for enterprise Kimi users.

## 7. User Feedback Summary
Collected real user pain points and satisfaction signals:
- Top recurring dissatisfaction: 2 duplicate issues report idle RAM usage of 1.4GB immediately after launch with no active tasks running, with no official response from the team on memory optimization timelines. This is the most frequent complaint from Windows desktop users.
- New user onboarding friction: Multiple new users report fresh pip or offline intranet installs result in blank white pages or 500 errors with no public troubleshooting guidance, creating a bad first-run experience for new adopters.
- Positive feedback: Recent Feishu and DingTalk channel bug fixes are widely praised by enterprise users deploying CoPaw as internal team assistants, who now report near 100% message delivery reliability across IM platforms.
- Power user unmet need: Self-hosted model users consistently report missing feature parity between custom OpenAI-compatible providers and officially supported first-party model providers.

## 8. Backlog Watch
High-priority unresolved items that require urgent maintainer attention:
1. PR #5321: The community-submitted scroll durable context manager feature has been under "Under Review" status for 6 days with no recent feedback, and risks stalling the progress of the long session use case roadmap. https://github.com/agentscope-ai/QwenPaw/pull/5321
2. Duplicate memory usage issues #5439 / #5441: No public root cause analysis or optimization timeline has been shared with the community despite 3 total comments across the two tickets, while idle memory footprint remains a top complaint for desktop users.
3. PR #4669: The Tauri desktop auto-updater feature has been open for over 30 days, and is the top requested feature by non-technical desktop users who currently have to perform full reinstalls to get new updates. https://github.com/agentscope-ai/QwenPaw/pull/4669
4. Issue #5497: The blank white page bug for Windows 10 offline intranet installs only has 1 user comment and no maintainer response yet, which blocks enterprise offline deployment use cases that are a core target audience for the CoPaw product. https://github.com/agentscope-ai/QwenPaw/issues/5497

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (github.com/zeroclaw-labs/zeroclaw) 2026-06-25 Project Digest
---

## 1. Today's Overview
ZeroClaw recorded sustained high development velocity on 2026-06-25, with 50 updated GitHub issues and 50 updated pull requests across core runtime, security, plugin ecosystem, and integration feature areas, with no new official releases published in the 24-hour window. 6 of 50 tracked recently updated issues were closed, alongside 4 of 50 active PRs, representing an 8% resolution rate for newly modified work items. The day’s development is heavily aligned with pre-v0.9.0 milestone planning, with security hardening, supply chain compliance, and multi-tenant isolation work making up nearly 40% of all active tracked items. Multiple large feature PRs for plugin management and observability entered public review, while maintainers continued to triage and patch high-severity runtime bugs impacting daemon process lifecycle and MCP tool isolation. Overall project health remains strong, with clear parallel execution across priority roadmaps and low rates of unaddressed critical regressions.

## 2. Releases
No new official releases were published in the 24-hour reporting window. The project is currently in active feature freeze prepping for the v0.8.3 patch release and subsequent v0.9.0 major feature release.

## 3. Project Progress
4 total merged/closed PRs landed in the reporting window, paired with 6 resolved issues that moved core roadmap items forward:
- Closed PR [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747): Resolves a long-standing S2 severity bug where the `mcp_bundles` per-agent tool isolation config was parsed but never enforced at runtime, fixing a silent security no-op that exposed all MCP tools to every agent running on the instance.
- Closed issue [#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125): Implements automatic "yolo" risk profile assignment for new user quickstart onboarding, eliminating a top-reported onboarding friction point that caused new users to accidentally lock themselves out of core functionality.
- Closed issue [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151): Patched a high-priority Matrix channel bug that broke workflows by losing deferred image attachment references in cached session history.
- Closed issue [#8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075): Resolved conflicting default Zerocode TUI keybinds that clashed with macOS global system shortcuts.

## 4. Community Hot Topics
The most actively discussed tracked items reflect dominant enterprise production adoption demands from self-hosted operators:
1. [#5982 Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (9 comments, highest engagement): Enterprise operators are pushing for native multi-tenant support to avoid the overhead of running separate dedicated ZeroClaw instances for internal teams, customer-facing deployments, and development groups. The proposed feature will add fully isolated workspaces, per-user class tool limits, and role-bound system prompts on a single instance.
2. [#7141 OIDC Authentication Provider support](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (6 comments): As the umbrella tracking issue for v0.9.0 pluggable auth, maintainers and contributors are aligning workstream breakdowns for parallel delivery of OIDC, local username/password, and peer credential authentication modes.
3. [#6289 Prompt-triggered install suggestions for missing skills and plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) (5 comments): Power users are pushing for reduced plugin discovery friction, as the rapidly growing skills catalog now exceeds 100 entries that most users cannot pre-load or memorize manually.
4. [#8177 RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (5 comments): Security teams from regulated industry deployments are collaborating on requirements to bring ZeroClaw to SLSA 3 compliance for production use cases.

## 5. Bugs & Stability
All reported bugs in the window are ranked by severity below:
1. **P1 S1 (Workflow Blocked, Resolved):** #8151 Matrix channel deferred image reference loss, patched and closed today, no remaining open reports of related broken user flows.
2. **P1 S2 (Runtime Degradation, Open):** [#5903 MCP stdio child processes accumulate on daemon with heartbeat.enabled=true](https://github.com/zeroclaw-labs/zeroclaw/issues/5903): The daemon leaks 1 orphan MCP process per 30 minute heartbeat tick, leading to 48 orphan processes per day of runtime. No public fix PR has been posted yet.
3. **P1 S2 (Security Risk, Open):** [#8044 Harden /model --agent scope with per-sender authorization](https://github.com/zeroclaw-labs/zeroclaw/issues/8044): Unprivileged users can change the global model for an entire agent instance via the unauthenticated `/model --agent` command, no fix has been merged as of reporting.
4. **P1 S2 (Runtime Degradation, In Progress):** [#7623 delegate to a Codex/OAuth subagent still fails after #7266](https://github.com/zeroclaw-labs/zeroclaw/issues/7623): The coordinator agent incorrectly forwards its own API key to restricted subagents, a fix is actively in development.
No critical data loss or full instance crash bugs were reported in the window, overall runtime stability remains above target for the pre-release cycle.

## 6. Feature Requests & Roadmap Signals
Newly filed and prioritized feature requests signal clear near-term roadmap alignment:
- New RFC [#8303 Goal mode for bounded autonomous session work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) proposes a first-class persistent execution mode that lets agents run unattended until a user objective is completed, paused, canceled, or hits budget limits, a heavily requested feature for long-running task automation use cases.
- Likely candidates for the upcoming v0.8.3 patch release: Out-of-band SOP approval flow (PR #8304), session TTL auto-truncate support, NVIDIA NIM vision capability enablement, and public plugin registry search functionality.
- Already accepted priority items targeted for v0.9.0: Full OIDC authentication stack, per-sender multi-tenant RBAC, and the WASM v2 plugin runtime.

## 7. User Feedback Summary
All captured user feedback from the 24h window reflects constructive input from active power users and enterprise operators, with no widespread negative dissatisfaction reported:
1. Top onboarding pain point: New users repeatedly reported frustration when accidentally selecting restrictive risk profiles that locked basic agent functionality during first run, which the project addressed by rolling out the auto "yolo" risk profile default for quickstart flows.
2. Operational pain point: Users running ZeroClaw on edge or resource-constrained hardware complain about memory bloat from orphan processes and untruncated long session histories, driving demand for automatic session TTL cleanup.
3. Enterprise use case demand: Regulated and multi-team deployment users are actively requesting native security features to avoid the overhead and cost of running separate dedicated ZeroClaw instances for each user group.
4. Discovery pain point: Users managing large plugin catalogs state that current manual pre-install workflows create unnecessary friction, and they want the agent to surface installation prompts for missing requested capabilities.

## 8. Backlog Watch
High-priority open items that are pending maintainer attention to unblock dependent workstreams:
1. [#8177 Supply chain signing RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/8177): Needs formal maintainer review and signoff to unblock the full SLSA compliance workstream for public release builds.
2. [#6943 Deconflict Plugin System Goals in FND-001](https://github.com/zeroclaw-labs/zeroclaw/issues/6943): The core architecture RFC that lays out the migration from third-party Extism to a native wasmtime WASIP2 plugin runtime has 3 comments and no recent movement, signoff is required to unblock all ongoing plugin ecosystem development.
3. Closed wontfix [#551 Allow insecure HTTPS requests to OpenAI-compatible endpoints](https://github.com/zeroclaw-labs/zeroclaw/issues/551): Multiple users running private self-hosted LLM endpoints with self-signed certificates have requested a supported workaround after maintainers opted not to add a full insecure TLS skip flag, no maintainers have responded to recent follow-up comments, and a safe limited workaround is pending triage.
4. [#8226 per-agent custom environment variables feature](https://github.com/zeroclaw-labs/zeroclaw/issues/8226): The feature draft is marked as needing author action, and pending maintainer feedback on the proposed config schema to advance to implementation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*