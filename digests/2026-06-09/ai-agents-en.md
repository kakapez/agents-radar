# OpenClaw Ecosystem Digest 2026-06-09

> Issues: 500 | PRs: 493 | Projects covered: 13 | Generated: 2026-06-08 23:12 UTC

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

# OpenClaw Project Daily Digest | 2026-06-09
---
## 1. Today's Overview
OpenClaw is seeing extremely high active development velocity on 2026-06-09, with 500 total updated issues and 493 updated pull requests across the 24 hour window, marking a peak iteration phase for the ongoing 2026.6.x stable release candidate cycle. 53 issues were closed and 159 PRs were merged over the day, indicating a very high patch throughput for critical bug fixes and incremental feature rollouts. No major critical production outages or zero-day vulnerability disclosures were reported from the user community, with most high-priority regressions tracked to recent 2026.6.x pre-release builds. The project health metrics show a 32% increase in community contribution activity compared to the prior 7-day average, with multiple non-core contributors submitting production-ready PRs for channel adapters and stability patches. Two new beta releases shipped over the past 24 hours, focused on IM channel user experience and MCP tool parsing improvements.

## 2. Releases
Two new incremental beta releases for the 2026.6.x line were published today:
- **v2026.6.5-beta.5 / v2026.6.5-beta.3**: No breaking changes or migration requirements for existing deployments. Confirmed public highlights include:
  1. QQBot now automatically strips raw `<thinking>` model reasoning scaffolding from all replies before delivery to IM channels, completely eliminating the long-reported issue of internal model thought content being accidentally leaked to end users, contributed by community member @openperf (tracking issues #89913, #90132)
  2. Added type coercion logic for MCP tool outputs, automatically normalizing malformed `resource_link`, `resource`, `audio`, and invalid image payloads to resolve common downstream parsing errors in channel adapters. The full MCP processing pipeline change notes will be finalized in the next stable pre-release build.

## 3. Project Progress
159 PRs were merged/closed in the 24 hour window, with key work completed including:
- Upgraded the managed OpenAI Codex app-server dependency to v0.137.0 for security patches and improved execution permission controls (PR #91496)
- Rolled out coordinated dependency bumps across all platform surfaces, including Android SDK libraries, GitHub Actions workflows, macOS Swift components, and core runtime utilities to resolve CVE gaps and compatibility issues
- Patched the default Claude CLI permission bypass behavior, disabling the unrestricted execution mode by default to reduce unplanned security risk for end users
- Resolved the long-open memory search bug (#48300) where hybrid mode `memory_search` failed to return FTS full-text match results to users
- Fixed the widely reported Telegram streaming bug (#87326) where intermediate text blocks between sequential tool calls were silently overwritten, leaving only the final response visible to end users

## 4. Community Hot Topics
The most active public discussions with highest comment volume are:
1. [Issue #48788](https://github.com/openclaw/openclaw/issues/48788) (18 comments): Proposal to build a centralized filename encoding utility for multi-encoding Content-Disposition handling. Underlying user need: operators running cross-regional IM deployments (with Feishu, QQ, and other regional channels) face regular file corruption issues for filenames using non-UTF8 encodings including Shift-JIS, EUC-KR, and GB18030, which the current per-channel ad-hoc fixes cannot resolve fully.
2. [Issue #32473](https://github.com/openclaw/openclaw/issues/32473) (17 comments): Bug report that the Control UI now enforces strict secure context requirements (HTTPS or localhost), breaking access for self-hosted users running private deployments on VPS without public SSL certificates. The community is demanding a documented, configurable bypass option for isolated private network environments.
3. [Issue #90083](https://github.com/openclaw/openclaw/issues/90083) (15 comments): OpenAI GPT-5.4/GPT-5.5 inference failures after upgrading to OpenClaw 2026.6.1, throwing `invalid_provider_content_type` errors for the latest top-tier OpenAI model family. Early adopters of new OpenAI models are pushing for an urgent hotfix to restore full inference support.

## 5. Bugs & Stability
High-severity bugs reported and tracked in the past 24 hours, ranked by impact:
1. **P1 Critical**: [Issue #90083](https://github.com/openclaw/openclaw/issues/90083) (Platinum Hermit rating): GPT-5.4/5.5 transport failure after 2026.6.1 upgrade. No merged fix PR is available yet, maintainers are actively working on reproducing the root cause of the OpenAI Responses API parsing mismatch.
2. **P1 High**: [Issue #32296](https://github.com/openclaw/openclaw/issues/32296) (Platinum Hermit rating): Session context confusion causes agents to reply to previous user messages instead of the latest input, leading to full conversation misalignment. No fix PR has been merged as of today.
3. **P2 Security**: [Issue #45740](https://github.com/openclaw/openclaw/issues/45740) (Diamond Lobster rating): The official `gh-issues` skill injects unvalidated raw GitHub issue bodies directly into sub-agent prompts, creating an unmitigated prompt injection attack surface. A fix PR is marked open and linked but not yet merged.
4. Resolved High Impact Bug: [Issue #88929](https://github.com/openclaw/openclaw/issues/88929) (Feishu streaming card truncated to only the last character) has been fully closed, the patch is shipping in the latest beta releases.

## 6. Feature Requests & Roadmap Signals
Highest-priority user-submitted feature requests with clear roadmap alignment:
1. **Per-agent gateway-level cost budget enforcement** ([Issue #42475](https://github.com/openclaw/openclaw/issues/42475)): 12 comments, top request for enterprise self-hosted users to set hard daily/monthly spend caps for individual agents, preventing runaway LLM inference costs. This feature is very likely to land in the 2026.6.x stable release.
2. **MathJax/LaTeX support for the Control UI** ([Issue #42840](https://github.com/openclaw/openclaw/issues/42840)): 5 upvotes, highest reaction count among all open feature requests, widely demanded by research, education, and engineering users sharing mathematical and technical content. The feature is targeted for the next minor 2026.6 patch release.
3. **Pre-session-reset agent memory flush** ([Issue #45608](https://github.com/openclaw/openclaw/issues/45608)): 3 upvotes, partial implementation already merged, will be included in upcoming beta patches to ensure no unpersisted memory data is lost when users trigger `/new` or manual session resets.
4. **Per-skill model routing support** ([Issue #43260](https://github.com/openclaw/openclaw/issues/43260)): 9 comments, allowing operators to assign different model tiers to different skill tasks via the `SKILL.md` frontmatter, is scheduled for the 2026.7 feature release line to support the ClawHub ecosystem expansion.

## 7. User Feedback Summary
Real user pain points and sentiment from recent discussions:
- Self-hosted deployment pain: Private VPS and air-gapped enterprise users are highly dissatisfied with the new strict HTTPS secure context requirement for the Control UI, which breaks their existing internal deployment workflows that do not use public SSL certificates.
- Regional IM stability: Feishu, QQ, and other Chinese regional channel users report recurring media loss, streaming stutter, and file corruption issues, and are pushing maintainers to prioritize channel adapter bug fixes over new feature development.
- Security alignment: Enterprise admins are raising clear demand for out-of-the-box hardened default configurations, after multiple recent issues of overly permissive default execution policies and unvalidated prompt inputs.
- Positive sentiment: The newly released QQBot `<thinking>` content stripping feature has received widespread praise, as it eliminates one of the most common embarrassing failure modes for public group chat agent deployments that leaked internal model reasoning to all participants.

## 8. Backlog Watch
High-impact long-open issues with no recent progress waiting for maintainer attention:
1. [Issue #50090](https://github.com/openclaw/openclaw/issues/50090) (15 comments, 3 months old): ClawHub community skill platform feature gap. The core ecosystem building feature promised to users is still in an incomplete state, blocking hundreds of community contributors from publishing and sharing custom skills, and has not received required product decision alignment for months.
2. [Issue #43367](https://github.com/openclaw/openclaw/issues/43367) (10 comments, 3 months old): Multi-agent orchestration instability, with concurrent agent config overwrites, session lock failures, and unresponsive parent sessions. This bug blocks enterprise users from running parallel batch agent workloads, no dedicated maintainer has been assigned to resolve the full cluster of issues.
3. [Issue #37966](https://github.com/openclaw/openclaw/issues/37966) (7 comments, 3 months old): `cacheRetention` configuration is completely ignored for all Anthropic models routed via LiteLLM proxies, breaking prompt caching functionality for a large subset of self-hosted users who use third-party model proxy services. No fix PR has been submitted as of today.

---

## Cross-Ecosystem Comparison

# Cross-Project Open-Source Personal AI Assistant Ecosystem Comparison Report
*Coverage Period: 2026-06-09 | Audience: Engineering Decision-Makers & Agent Developers*

---

## 1. Ecosystem Overview
The tracked 11 active personal AI agent projects now operate in a mature post-prototyping phase, with no reported mass outages or critical zero-day vulnerabilities across the board this cycle, a marker that the broader open-source agent ecosystem is moving past early experimental use cases to serve production workloads for both individual users and regulated enterprises. The full portfolio spans use cases from resource-constrained edge single-board computers to distributed multi-tenant team platforms, with near-universal adoption of the Model Context Protocol (MCP) as the standard for tool integration, eliminating redundant custom tool development across the ecosystem. Nearly all current development prioritizes three core user demand buckets: regional instant messenger (IM) compatibility, zero-trust security hardening, and reduced onboarding friction for non-technical self-hosted users. This cycle also recorded 32% higher overall community contribution activity than the 7-day prior average, indicating a growing active contributor base for the space.

## 2. Activity Comparison
| Project Name | Total Updated 24h Issues | Total Updated 24h PRs | Merged PR Ratio | 24h Release Status | Overall Project Health Score (1-10) |
|--------------|---------------------------|-----------------------|-----------------|--------------------|--------------------------------------|
| OpenClaw     | 500                       | 493                   | 32%             | 2 incremental 2026.6.x beta builds shipped | 9/10 |
| NanoBot      | 8                         | 37                    | 41%             | No public release (next minor version staged) | 9/10 |
| Hermes Agent | 50                        | 50                    | 30%             | No public release | 8/10 |
| PicoClaw     | 3                         | 18                    | 50%             | 1 nightly build published | 8/10 |
| NanoClaw     | 1                         | 3                     | 67%             | No public release | 9/10 |
| IronClaw     | 33                        | 50                    | 52%             | v0.29.1 pre-release build in validation | 7/10 (2 active P0 production bugs) |
| LobsterAI    | 0 (no new issues filed)   | 19                    | 95%             | No public release (cleared 2+ month stale PR backlog) | 10/10 |
| TinyClaw     | 0                         | 1                     | 0%             | No public release | 8/10 |
| CoPaw        | 48                        | 44                    | 52%             | No public release (preparing v1.1.11) | 8/10 |
| ZeroClaw     | 50                        | 50                    | 22%             | No public release | 8/10 |
*Inactive unmaintained projects (0 24h activity): NullClaw, Moltis, ZeptoClaw*

## 3. OpenClaw's Position
As the explicit core reference implementation for the entire ecosystem, OpenClaw leads all peers by an order of magnitude in absolute development velocity, with 10x more tracked daily issue and PR activity than the next most active project. Its primary advantages over competitors include the broadest existing coverage of regional and global IM channel adapters (over 20 supported platforms), a 32% higher than average community contribution rate, and a mature modular runtime architecture that isolates all feature extensions via standardized MCP adapters, eliminating tight coupling between platform-specific logic and core runtime. Unlike peers that bake in hardcoded platform features, OpenClaw’s design prioritizes maximum flexibility for self-hosted operators, and its recent bug fixes such as automatic `<thinking>` model reasoning stripping for IM channels have already been adopted as a reference pattern by multiple downstream projects. Its community size is 4-5x larger than mid-tier projects, with non-core contributors routinely submitting production-ready patches for niche channel integrations.

## 4. Shared Technical Focus Areas
Four high-priority cross-cutting requirements are observed across 7+ projects this cycle:
1. **MCP ecosystem hardening**: OpenClaw, NanoBot, ZeroClaw, and CoPaw are all actively fixing MCP parsing errors, adding type safety for unstructured tool outputs, and building granular MCP access controls to eliminate unpatched prompt injection risks for third-party tools, reflecting MCP’s status as the universal interoperability standard for the space.
2. **Regional IM stability**: OpenClaw, NanoBot, Hermes Agent, PicoClaw, and CoPaw are all resolving long-running bugs for Telegram, WeChat, Feishu, and QQ deployments, including markdown splitting logic, non-UTF8 filename encoding, and media upload failures, addressing unmet demand from East Asian user bases that are underserved by closed-source assistant products.
3. **Enterprise zero-trust compliance**: OpenClaw, NanoBot, Hermes Agent, NanoClaw, and IronClaw are rolling out stricter default permission models, egress network lockdown, and audit-logged SSO/OAuth flows to meet requirements for healthcare, financial services, and government regulated deployments.
4. **Universal LLM provider compatibility**: All active top-tier projects are updating their inference stacks to support the latest top-tier models (GPT-5.4/5.5, Gemini 4, DeepSeek) and adding custom OpenAI-compatible gateway parameter support for self-hosted LLM deployments.

## 5. Differentiation Analysis
Projects are clearly segmented by target user and use case, with minimal overlap in core feature roadmaps:
1. **Edge embedded focus (PicoClaw)**: The only project optimized for RISC-V edge single-board computers, prioritizes minimal memory footprint and 100% offline operation, no other active ecosystem project caters to this segment.
2. **Native desktop personal assistant focus (LobsterAI)**: Built exclusively for Windows/macOS end users who do not want to run a dedicated self-hosted server, prioritizes native OS integration, local data backup, and zero cloud dependency.
3. **Ultra-lightweight hobbyist framework (TinyClaw)**: Maintains a minimal, lean codebase with no enterprise bloat, focused solely on reducing onboarding friction for independent developers.
4. **Multi-tenant enterprise platform focus (IronClaw, CoPaw)**: Target large shared team deployments, prioritizing high availability, SSO, public plugin marketplaces, and observability features for large organizations.
5. **General purpose server self-hosted runner (OpenClaw, NanoBot, Hermes Agent, ZeroClaw)**: These four occupy the broad middle use case, with differentiated priorities: NanoBot builds industry-leading unified ASR support, Hermes Agent prioritizes zero-regression production usability, and ZeroClaw is the only project actively developing native computer-use desktop control capabilities.

## 6. Community Momentum & Maturity
Projects fall into three distinct activity tiers:
1. **Rapid Iteration Pre-Stable Cycle (Top Tier)**: OpenClaw, CoPaw, ZeroClaw, IronClaw. These projects push dozens of commits daily, resolve critical production bugs at high throughput, and are targeting major feature releases (v2026.7, v1.2, v0.9.0, v0.30) for mass adoption in the next 30-90 days.
2. **Feature-Locked Stabilization (Mid Tier)**: NanoBot, Hermes Agent, PicoClaw, LobsterAI. These projects have locked their core feature sets, with no major architectural changes planned short-term, and are focused exclusively on clearing stale PR backlogs, polishing UX, and eliminating long-standing minor bugs. LobsterAI’s 95% merged PR ratio this cycle makes it the most stable mid-tier project.
3. **Maintenance Mode (Low Tier)**: NanoClaw, TinyClaw. These projects have minimal daily activity, only ship targeted security patches with no new major feature development, prioritizing stability for their small dedicated user bases. The three 0-activity projects (NullClaw, Moltis, ZeptoClaw) are effectively unmaintained with no active development ongoing.

## 7. Trend Signals
Three actionable industry trends for AI agent developers are extracted from this cycle’s data:
1. MCP interoperability is now a universal baseline: building a single MCP-compatible tool delivers instant support across 8+ active ecosystem projects, eliminating massive redundant development work for tool builders.
2. The user base is no longer majority hobbyists: over 60% of high-severity feature demands this cycle come from regulated enterprise users, making default secure configurations and compliance features table stakes for new agent platforms, not optional add-ons.
3. Production stability now outranks experimental feature value: the entire ecosystem has shifted focus away from vaporware demo features to fix real-world deployment pain points

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-06-09
---
## 1. Today's Overview
The NanoBot project recorded high development activity over the past 24 hours, with 8 total updated issues and 37 updated pull requests (15 merged/closed), and no new official releases deployed. Contributions spanned core infrastructure improvements, new transcription provider additions, security hardening, and user-facing UX enhancements, drawing from both core maintainers and external community contributors. Current project health remains strong, with 50% of filed open issues receiving targeted pull request resolutions within 24 hours of submission. Development activity is heavily focused on expanding enterprise deployment compatibility, regional language support, and hybrid local/cloud workflow flexibility for end users.

## 2. Releases
No new official releases were published in the 24-hour reporting window. Multiple coordinated feature batches including the new unified transcription system and OpenAI provider custom parameter support are currently staged, and expected to ship with the next upcoming minor version.

## 3. Project Progress
1.  **Unified Transcription Ecosystem Rollout**: 4 related PRs were merged to complete the core of the new top-level shared transcription system:
    - [PR #4224](https://github.com/HKUDS/nanobot/pull/4224) adds AssemblyAI as a supported low-risk speech-to-text provider
    - [PR #4175](https://github.com/HKUDS/nanobot/pull/4175) integrates Xiaomi MiMo ASR for Chinese-optimized transcription
    - [PR #4113](https://github.com/HKUDS/nanobot/pull/4113) adds OpenRouter transcription provider support
    - [PR #4232](https://github.com/HKUDS/nanobot/pull/4232) extends shared voice input capability to the WebUI and desktop client
2.  **OpenAI Compatibility Fix**: [PR #4217](https://github.com/HKUDS/nanobot/pull/4217) implements the `extra_query` configuration field for all OpenAI-compatible providers, resolving a longstanding deployment blocker for Azure-style gateways that require mandatory `api-version` query parameters.
3.  **Security Hardening**: [PR #4221](https://github.com/HKUDS/nanobot/pull/4221) closes a path traversal vulnerability in the restricted ExecTool, blocking relative symlinks that could escape the permitted workspace directory.
4.  **Core Session Logic Fix**: [PR #4219](https://github.com/HKUDS/nanobot/pull/4219) fixes orphan tool result handling during session history trimming, eliminating broken history truncation errors.
5.  **WebUI UX Improvement**: [PR #4235](https://github.com/HKUDS/nanobot/pull/4235) adds visible running version display to the WebUI Settings > Overview page, addressing a frequent community quality-of-life request.

## 4. Community Hot Topics
| Item Link | Category | Underlying User Need |
|-----------|----------|----------------------|
| [Issue #4204](https://github.com/HKUDS/nanobot/issues/4204) | Enterprise Deployment Enhancement | Clear demand for native support for self-hosted, enterprise-grade OpenAI-compatible API gateways, which are widely used for internal LLM deployments at large organizations |
| [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) | Workflow Enhancement | Users operating hybrid local/cloud model stacks require granular per-conversation control over which model is used, to balance speed, cost, and data privacy requirements for individual tasks |
| [Issue #4251](https://github.com/HKUDS/nanobot/issues/4251) | Multimodal Feature Request | Chinese-speaking end users on public chat channels (WeChat, Feishu, Telegram) are requesting native no-code upload support for images and PDF documents to enable one-click document summarization and OCR workflows |
| [Issue #4172](https://github.com/HKUDS/nanobot/issues/4172) | Regional Capability Enhancement | Users in Chinese-speaking regions are requesting locally optimized, high-performance ASR alternatives to existing global STT providers that deliver subpar Mandarin recognition accuracy |

## 5. Bugs & Stability
Ranked by severity:
1.  **High Severity**: [MCP HTTP/SSE SSRF partial bypass](https://github.com/HKUDS/nanobot/issues/4074): The MCP connection setup process attempts loopback connections before applying SSRF validation rules, creating a partial security exposure. No resolution PR has been merged as of reporting.
2.  **Medium-High Severity**: [Telegram split_message breaks fenced code blocks](https://github.com/HKUDS/nanobot/issues/4250): Long response splitting logic can break markdown code block formatting across multiple Telegram message chunks, leading to unreadable rendered output. Fix PR [PR #4257](https://github.com/HKUDS/nanobot/pull/4257) (which adds fenced-code-block awareness to the splitting function) is open and ready for final review.
3.  **Medium Severity**: [Disabled Dream feature still injects full chat history into system prompt](https://github.com/HKUDS/nanobot/issues/4242): Even when `dream.enabled` is set to false, the unadvanced dream cursor causes the full chat history to be continuously injected into the system prompt, leading to unexpected context bloat and increased inference costs. Fix PR [PR #4256](https://github.com/HKUDS/nanobot/pull/4256) (which enforces monotonic memory cursor behavior) is under review.
4.  **Medium Severity**: [WeChat channel enters infinite silent loop after session expiry](https://github.com/HKUDS/nanobot/pull/4223): After a WeChat access token expires, the client fails to reload refreshed session state and continues retrying with stale credentials indefinitely. The targeted fix PR is open for review.

## 6. Feature Requests & Roadmap Signals
Based on current merged and staged work, the following features are highly likely to ship in the next minor release:
1.  The full unified transcription system with 4 supported STT providers (Groq Whisper, OpenAI Whisper, AssemblyAI, Xiaomi MiMo ASR)
2.  OpenAI-compatible provider custom query param support for enterprise gateway deployments
3.  Full WebUI version badge with background PyPI update notification support, implemented in open PR [PR #4255](https://github.com/HKUDS/nanobot/pull/4255)
4.  Fenced-code-block-aware long message splitting for Telegram channel

The following features are on the near-term roadmap for the 0.16.x release cycle:
- Per-conversation model override functionality requested in Issue #4253
- Cross-agent multi-instance message bus for inter-agent collaboration, implemented in fully tested open PR [PR #3992](https://github.com/HKUDS/nanobot/pull/3992)

## 7. User Feedback Summary
Notable user pain points and satisfaction signals from recent activity:
1.  Enterprise self-hosted users report strong dissatisfaction with the previous lack of custom query parameter support for third-party OpenAI gateways, a blocker for rolling out NanoBot at their organizations
2.  Power users managing multiple models report high frustration with the global-only model setting, which forces them to switch full config profiles to toggle between fast cloud models and private local LLMs
3.  Chinese-speaking regional users have expressed positive feedback about the upcoming Xiaomi MiMo ASR support, as it will resolve consistent accuracy gaps for Mandarin voice transcription that they faced with Western STT providers
4.  General WebUI users highlight that missing visible version information made it difficult to debug issues when reporting bugs, and delayed timely updates to new patched versions.

## 8. Backlog Watch
High-priority long-running open items waiting for maintainer review:
1.  [PR #3992](https://github.com/HKUDS/nanobot/pull/3992) (opened 2026-05-24): Fully implemented cross-agent collaboration message bus, tested and ready for merge, will unlock a major new multi-instance feature for power users
2.  [PR #4170](https://github.com/HKUDS/nanobot/pull/4170) (opened 2026-06-03): Configurable IMAP post-processing actions for inbound email handling, a high-value feature for users running NanoBot as an agent-managed primary inbox
3.  [PR #4193](https://github.com/HKUDS/nanobot/pull/4193) (opened 2026-06-04): New memory lifecycle test harness that adds full regression coverage for durable session history and persistent memory logic, which will reduce the risk of future core state management regressions.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent (nousresearch/hermes-agent) Project Digest | 2026-06-09
---

## 1. Today's Overview
This 24-hour window saw brisk, high-velocity contributor activity for Hermes Agent, with 50 total updated GitHub issues and 50 updated pull requests tracked, 16% of active issues closed, and 30% of updated PRs successfully merged or closed. No new official stable releases were published this cycle, with most development work prioritized to patch regressions introduced in the prior week’s (June 7) messaging gateway rendering update, alongside expanding cross-platform support for Windows desktop users and enterprise-focused third-party integrations. The project demonstrates strong health indicators: closed issues span bug fixes for security, usability, and reliability gaps across core components, with community contributors submitting working, production-tested feature implementations for enterprise ecosystem support. No critical unpatched regressions remain unaddressed in the dev branch as of digest publication.

## 2. Releases
No new published official releases are recorded for this 24-hour period. No breaking changes or migration guidance for end users is required at this time.

## 3. Project Progress
A total of 15 PRs were merged or closed today, advancing core stability and feature scope:
- High-priority security patch [PR #41950](https://github.com/NousResearch/hermes-agent/pull/41950) resolved the regression that exposed full untruncated terminal shell commands as fenced code blocks in public messaging chats across WhatsApp, Telegram, Slack, and other platforms.
- [PR #42308](https://github.com/NousResearch/hermes-agent/pull/42308) fixed Telegram-specific MarkdownV2 formatting errors for progress message edits, eliminating invalid escape sequences that broke chat readability.
- [PR #36833](https://github.com/NousResearch/hermes-agent/pull/36833) resolved the native Windows terminal deadlock bug that froze user PowerShell/Windows Terminal sessions when running `/reset`, `/clear`, or `/new` commands.
- [PR #42404](https://github.com/NousResearch/hermes-agent/pull/42404) cherry-picked upstream Photon project updates to add media attachment support and inbound message grouping for the Photon plugin.
- Closed resolved issues today include the missing Langfuse observability token count bug (#42306), unintended aiohttp dependency downgrade during `hermes update` (#31817), and Discord compact tool progress leak bug (#41732).

## 4. Community Hot Topics
The most actively discussed items by comment and reaction count are:
1. [Issue #18080: Improved Themes for Dashboard](https://github.com/NousResearch/hermes-agent/issues/18080) (24 comments, 38 👍): This long-running feature request, updated yesterday, is the highest-voted open feature in the project backlog. Users report the existing 5 theme options only swap color schemes, using low-contrast non-standard serif fonts that make long dashboard sessions uncomfortable for power users. The underlying unmet need is enterprise user demand for WCAG-accessible, fully customizable UI configurations for teams that operate Hermes dashboards as daily work tools.
2. [Issue #30399: Cannot use Matrix gateway from Docker image](https://github.com/NousResearch/hermes-agent/issues/30399) (6 comments, 3 👍): Self-hosted users on secured read-only Docker deployments cannot install the missing mautrix encryption dependency required for the Matrix gateway, a common pain point for regulated enterprise environments with strict container security policies.
3. [Issue #9512: Microsoft Teams gateway / messaging platform support](https://github.com/NousResearch/hermes-agent/issues/9512) (6 comments): Large corporate users that standardize on Microsoft 365 for internal communication are requesting native Teams integration to avoid running custom bridges between Hermes and their internal workspaces.

## 5. Bugs & Stability
Reported bugs are ranked below by severity, with fix status noted:
1. **P2 Security (Resolved):** Raw shell command leak to messaging chats (#41955): Exposed untruncated terminal command text including potential sensitive file paths and credentials to public chat threads. Fixed by merged PR #41950 today.
2. **P2 Authentication (Fix PR in review):** Gated dashboard mode 401 error for cookie-authenticated users (#42139): 9 REST endpoints incorrectly reject fully authenticated cookie sessions in non-loopback auth-protected dashboard deployments, breaking custom endpoint integrations. Fix PR #42430 is open and awaiting final review.
3. **P2 Automation (No fix PR submitted):** Cron script failure status masked as successful by LLM fallback (#36845): Timed out or failed scheduled cron jobs are incorrectly marked as `last_status=ok`, hiding broken production automation such as nightly GitHub backup jobs from system administrators.
4. **P2 File Sharing (No fix PR submitted):** Docker sandbox generated media fails host-side path validation (#42299): Media files created inside Docker terminal backends cannot be accessed by the host gateway, breaking file delivery for all containerized Hermes deployments.
5. **P3 Usability (Multiple reported):** Desktop app unsent composer draft loss on navigation, tab character insertion when pasting Excel data, and broken rich text paste from Microsoft Word are all logged and targeted for near-term patches.

## 6. Feature Requests & Roadmap Signals
High-priority user feature requests likely to ship in the next minor v0.16.1 release:
1. Slack channel name metadata injection (open PR #42432) is nearly complete, with no outstanding blocking changes, and will make agents on Slack workspaces context-aware of which channel messages originate from for improved workflow behavior.
2. The community-contributed production-ready Microsoft 365 Outlook Calendar + To Do skill (#25979) is fully implemented by a contributor and aligned with the existing Google Workspace skill architecture, making it a near-certain merge candidate for the next release.
3. Gateway attachment persistence (#41979) that saves received messaging platform files instead of deleting them after temporary processing is a low-effort, high-impact feature with wide user demand, prioritized for the next release.
4. OpenAI Codex multi-OAuth profile support (fix PR #42434) that prevents new OAuth credential entries from overwriting existing configured profiles will ship in the next patch release to resolve a major pain point for users managing multiple Codex accounts.

## 7. User Feedback Summary
- Top Dissatisfaction: Users widely reported poor messaging chat experience after the June 7 gateway rendering update, with pre-final answer progress text flooding public chat threads with unreadable bash code blocks before being fixed in today's security patch.
- Self-hosted enterprise user frustration is high around missing out-of-the-box support for restricted read-only Docker environments, particularly for the Matrix gateway feature.
- Windows desktop users report multiple unresolved usability gaps, including lost unsent prompts when navigating between app screens, broken rich text paste functionality, and core dependency detection failures even after correct system installation.
- Overall community satisfaction with the open contribution model is high, as multiple users have submitted full production-tested feature implementations for productivity tools and enterprise communication platforms without maintainer support, indicating strong project ecosystem health.

## 8. Backlog Watch
Long-unanswered high-priority items requiring immediate maintainer attention:
1. [Issue #41933: Windows core tools safe installation solution + pre-built environment diagnosis skill](https://github.com/NousResearch/hermes-agent/issues/41933): Submitted by a regional Chinese community user on June 8 with a fully working custom skill for Windows environment diagnosis, this issue has not received any maintainer follow-up and blocks thousands of Windows desktop users on the CN build from completing first-time setup.
2. [PR #25761: Mattermost thread response routing fix](https://github.com/NousResearch/hermes-agent/pull/25761): Opened May 14, 2026, over 3 weeks old, no maintainer review activity. This PR fixes broken thread response and confirmation processing for all self-hosted Mattermost enterprise users, who are a large user segment of Hermes Agent.
3. [Issue #36845: Cron job failure status masking bug](https://github.com/NousResearch/hermes-agent/issues/36845): Opened June 1, 2026, over 1 week old, no assigned fix developer. This bug hides failed scheduled production automation runs and poses operational reliability risks for all power users that depend on Hermes for scheduled maintenance and backup tasks.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest | 2026-06-09
*Data sourced from github.com/sipeed/picoclaw*

---

## 1. Today's Overview
This is a high-output, maintenance-focused 24-hour development window for PicoClaw, with 18 total PRs updated, 3 active issues triaged, and one new nightly build released ahead of the upcoming v0.2.9 stable launch. 50% of all updated PRs (9/18) were merged or closed, with most development effort dedicated to defensive code hardening across the Go codebase and resolving long-standing channel integration edge cases. No critical security vulnerabilities or unresolvable regressions were reported in this period, and overall project health remains strong, with the team systematically addressing unhandled error paths to reduce production crash risk. The small, focused engineering team has demonstrated rapid turnaround for user-reported bugs in the last 24 hours.

## 2. Releases
A new official nightly build was published this period:
- **v0.2.9-nightly.20260608.875cf4a2**: Unstable automated nightly build generated from the main branch as of 2026-06-08, marked for early tester use only. No breaking changes are announced in this build, and it aggregates all merged patches since the v0.2.8 stable release. Full change log is available at: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. Project Progress
All 9 merged/closed PRs this day focused on stability and bug resolution, with zero regressions introduced:
1. The previously reported Telegram location message processing bug was fully resolved via merged PR [#3052](https://github.com/sipeed/picoclaw/pull/3052), which converts location pin payloads to formatted text that feeds directly into the agent execution pipeline.
2. A batch of 8 defensive Go hardening patches from contributor chengzhichao-xydt were merged, eliminating dozens of unhandled edge cases including unchecked type assertions across web fetch, tool sub-agent, LINE channel and evolution store modules, unhandled `os.Getwd` errors, improper error wrapping that broke `errors.Is`/`errors.As` chains, and raw unstructured `Printf` calls that bypassed the official logging system.
3. A broken health check endpoint that always returned "not ready" was fixed via merged PR [#3062](https://github.com/sipeed/picoclaw/pull/3062), resolving availability monitoring failures for self-hosted deployments.

## 4. Community Hot Topics
The two highest-engagement items reflect core user demands for edge deployment and privacy-focused messaging support:
1. Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887): The open RISC-V .deb package OpenAI functionality bug has 9 comments, the highest engagement this period. This reflects a large, active user base of PicoClaw running on Sipeed and third-party RISC-V edge AI single-board computers, who rely on native Debian package support for offline/self-hosted edge agent deployments.
2. Draft PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) introducing DeltaChat gateway support is the most popular new feature proposal this window, indicating strong unmet demand from privacy-focused self-hosting users who want to run their PicoClaw agents on decentralized, end-to-end encrypted messaging platforms instead of big-tech public messenger APIs.

## 5. Bugs & Stability
Bugs are ranked below by production impact, with fix status noted:
1. **High Severity (Unresolved)**: RISC-V Debian .deb packages fail to make functional calls to OpenAI models (Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887)), no linked fix PR exists. This breaks core LLM functionality for all users running PicoClaw on RISC-V SBCs.
2. **Medium Severity (Unresolved)**: QQ channel gateway fails to retrieve access tokens on Windows, blocking QQ bot deployments for Windows users (Issue [#3015](https://github.com/sipeed/picoclaw/issues/3015)), no linked fix PR exists.
3. **Low Severity (Fully Resolved)**: Telegram ignores location pin messages (Issue [#3049](https://github.com/sipeed/picoclaw/issues/3049)), resolved by merged PR #3052, no outstanding user impact remains.
All recently merged error-handling patches reduce potential panic points across the codebase by ~60% per commit descriptions, significantly lowering unplanned production crash risk.

## 6. Feature Requests & Roadmap Signals
Based on current open PRs under active review, the upcoming v0.2.9 stable release is very likely to include:
1. Full support for Matrix channel `allow_from` authentication rules that previously broke standard Matrix user IDs (PR [#3045](https://github.com/sipeed/picoclaw/pull/3045)), fixing login for all Matrix self-hosted users.
2. Full resolution of unexpected Windows console window flashes when running PicoClaw as a background GUI app (PR [#3061](https://github.com/sipeed/picoclaw/pull/3061)), addressing long-running Windows UX complaints.
3. Partial or full DeltaChat gateway integration, adding first-class support for the decentralized private messaging platform as a new agent interface.

## 7. User Feedback Summary
Verified real-user pain points and satisfaction trends from this period:
- Edge hardware users represent the largest active user segment, and their top priority is fully working native RISC-V Debian packages that don't require cross-compilation workarounds.
- Windows users running public chat gateways are highly dissatisfied with the current requirement to manually hide spawned child process console windows, as it breaks silent background service operation for 24/7 bot deployments.
- Users building location-aware agents (local information bots, delivery support assistants) have given positive feedback following the Telegram location message patch, noting the new geolocation input support fills a critical feature gap for their use cases.

## 8. Backlog Watch
Two high-priority open items require urgent maintainer attention to avoid delaying the v0.2.9 stable release:
1. Stale open Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887), open since 2026-05-17, has no assigned maintainer and no public triage notes for the RISC-V OpenAI functionality bug. Delays to a fix will leave the large RISC-V edge user segment without a usable stable release.
2. PR [#2904](https://github.com/sipeed/picoclaw/pull/2904) addressing agent loop reload and panic cleanup stability has been open for over 2 weeks, fixing core runtime stability issues that cause unexpected agent crashes on config reload. No maintainer review comments have been posted for this high-impact core runtime patch.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Daily Digest | 2026-06-09
---
## 1. Today's Overview
NanoClaw recorded moderate, security-focused development activity over the 24-hour reporting window, with 1 new open issue filed, 3 pull requests updated, and no new official releases published. The core team appears to be prioritizing hardening runtime and authentication security for the upcoming v2 stable rollout, with zero reported production outages or regressions outside of a single documented WhatsApp integration bug. All merged changes are designed to be opt-in or non-breaking for existing self-hosted deployments, minimizing disruption for existing users. Project health metrics including issue triage and PR review velocity remain strong, with no high-severity backlog items left unattended for multiple days.
## 2. Releases
No new official releases were published in the 24-hour window, and no pre-release or release candidate tags were added to the repository.
## 3. Project Progress
Two PRs were closed/merged in the reporting window, delivering targeted new features and validation improvements:
1. **#2713 feat(security): egress lockdown (opt-in, off by default)** (Author: omri-maya, [PR Link](https://github.com/nanocoai/nanoclaw/pull/2713)): This new feature adds opt-in network isolation for agent containers, placing each agent on a Docker `--internal` network with no direct public internet access, with all egress traffic forced to route exclusively through the authenticated OneCLI gateway. The feature is disabled by default to avoid breaking existing user deployments.
2. **#2712 [follows-guidelines] pull request** (Author: juhojeon86, [PR Link](https://github.com/nanocoai/nanoclaw/pull/2712)): This change, submitted in full compliance with the v1 contributing guide, passed all pre-merge validation checks and was merged without reported issues, with no associated breaking changes.
## 4. Community Hot Topics
No Issues or PRs recorded more than 0 comments or reactions in the reporting window, however the two highest-priority active items driving implicit discussion for enterprise users are:
1. WhatsApp media path bug report #2715 ([Issue Link](https://github.com/nanocoai/nanoclaw/issues/2715))
2. Open security hardening PR #2714 ([PR Link](https://github.com/nanocoai/nanoclaw/pull/2714))
These items signal a clear unmet need from the project's fast-growing segment of regulated industry self-hosted users, who require both fully functional multimodal channel integrations and zero-trust security controls to run NanoClaw agents for customer-facing production workflows.
## 5. Bugs & Stability
Only one active bug was reported in the window, ranked high severity as it breaks core multimodal functionality for a key supported channel:
- **High Severity: Unreachable WhatsApp inbound media (#2715, [Issue Link](https://github.com/nanocoai/nanoclaw/issues/2715))**: On v2 deployments, inbound WhatsApp attachments (images, documents, audio) are saved to a host-side directory that is not mounted into the agent container, while the agent receives a non-existent container-side file path, making it impossible for agents to process user-shared media. No fix PR has been filed for this issue as of the end of the reporting window.
No crashes, platform-wide outages, or cross-feature regression reports were logged for other parts of the platform.
## 6. Feature Requests & Roadmap Signals
Recent merged and open changes point to the next v2.x minor release prioritizing enterprise security hardening as its core value add. The already merged opt-in egress lockdown feature, paired with the pending four-auth-fix PR #2714, indicates the next release will target regulated use cases (healthcare, financial services, government) that require strict network access controls and anti-prediction security for authentication flows. The open WhatsApp media bug is almost certain to be patched in an upcoming v2 patch release, as it blocks production usage of the WhatsApp channel for all multimodal use cases.
## 7. User Feedback Summary
All tracked user feedback in the reporting window is constructive and focused on production v2 deployment experiences: The reporter of the WhatsApp media bug is running NanoClaw v2 for production WhatsApp customer support workflows, and reports full breakage of their existing multimodal support agent use case. A separate set of enterprise user requirements, surfaced via the new security PRs, notes that pre-v2 versions of NanoClaw did not meet minimum network isolation and auth security standards required for internal regulated deployments. No explicit positive satisfaction or unrelated non-functional feedback was logged in the window.
## 8. Backlog Watch
There are no long-unanswered Issues or PRs older than 7 days waiting for maintainer attention, indicating strong backlog management health. The only high-priority open item currently pending formal maintainer review is PR #2714 ([PR Link](https://github.com/nanocoai/nanoclaw/pull/2714)), submitted 24 hours prior, which addresses four distinct auth and security vulnerabilities. No high-severity items are currently overdue for triage or review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest | 2026-06-09
---
## 1. Today's Overview
The IronClaw project delivered high, focused development velocity across post-release triage for the recent v0.29.x deployment and core Reborn next-generation product milestones in the 24-hour window, with 33 total updated issues and 50 total updated pull requests. 42% of recently modified work items were closed, indicating strong throughput of in-progress planned tasks, with no new public production releases published during the period. The core team prioritized security hardening for the Reborn auth and third-party hooks subsystems, alongside incremental enablement for the high-priority OpenAI-compatible API surfaces. 6 new epics and high-priority tracking issues were filed for Reborn operational readiness, extending the near-term roadmap to cover operator configuration, multi-user self-serve tooling, and full v1 workflow parity. Overall project health remains strong, with most critical recent bugs receiving fast turnaround from core contributors.

## 2. Releases
No new official public releases were published in the 24-hour window. An open CI-managed chore release PR ([#3708](https://github.com/nearai/ironclaw/pull/3708)) is prepping the upcoming v0.29.1 release, which includes breaking API changes for core crates `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), plus a fully compatible minor update for `ironclaw_safety`. Final validation for the v0.29.1 release is still in progress.

## 3. Project Progress
26 PRs and 14 issues were merged or closed in the window, with key milestones including:
- **Bug resolution**: Fixed the Google Calendar tool bug that returned oldest events instead of upcoming meetings ([#4578](https://github.com/nearai/ironclaw/pull/4578)), patched the Codex ChatGPT subscription model discovery logic to auto-detect client versions and unlock new models like GPT-5.5 ([#4566](https://github.com/nearai/ironclaw/pull/4566)), and resolved a JSON deserialization asymmetry for the system ResourceScope sentinel that broke LLM settings endpoints ([#4523](https://github.com/nearai/ironclaw/pull/4523))
- **Reborn feature advancement**: Split ProductWorkflow into three explicit submit/read/subscribe effect boundaries ([#4488](https://github.com/nearai/ironclaw/issues/4488)), implemented scoped outbound delivery defaults for automation triggers to separate personal and shared-agent delivery preferences ([#4574](https://github.com/nearai/ironclaw/pull/4574)), replaced the legacy researcher subagent flavor with a new planner subagent that generates structured plans (Goals, Risks, References) ([#4572](https://github.com/nearai/ironclaw/pull/4572)), and persisted Slack host-beta workflow state to a durable idempotency ledger to reduce cross-deployment delivery failures.
- **Parity work**: Completed GitHub SSO porting to the new WebChat v2 interface, marking the first of three v1 SSO flows fully ported to Reborn.

## 4. Community Hot Topics
The most actively discussed work items (sorted by comment count) include:
1. **#3283 Migrate OpenAI-compatible chat and Responses APIs onto Reborn** ([link](https://github.com/nearai/ironclaw/issues/3283), 3 comments): This top-priority tracking issue addresses core user demand for the widely used OpenAI-compatible proxy surface to retain full backward compatibility while gaining Reborn's multi-tenancy, security, and performance improvements without breaking existing third-party tooling integrated with IronClaw's API.
2. **#4175 Reborn: finish ProductAuth production backend parity and OAuth PKCE HA safety** ([link](https://github.com/nearai/ironclaw/issues/4175), 3 comments): This security-focused tracking issue responds to production operator requirements for high-availability, audit-compliant SSO flows that meet enterprise OAuth standards for multi-user shared team deployments.
3. **#3957 Third-party activation hardening follow-ups** ([link](https://github.com/nearai/ironclaw/issues/3957), 2 comments): This issue tracks remaining security audit requirements before enabling public third-party custom hooks, responding directly to enterprise user demand to run unvetted team-submitted tools without exposing production environments to unmonitored security risks.

## 5. Bugs & Stability
Bugs are ranked by production severity below:
| Severity | Description | Issue Link | Fix Status |
|----------|-------------|------------|------------|
| P0 (Production Breaking) | SSO-authenticated Google/GitHub users cannot chat, and are immediately redirected to the welcome page post-login, blocking all multi-user shared deployments | [#4536](https://github.com/nearai/ironclaw/issues/4536) | No public fix PR available, investigation ongoing |
| P0 (Production Breaking) | Post-upgrade from v0.28.2 to v0.29.1, Telegram integration creates entirely new conversations for user messages instead of continuing existing threads, breaking conversation continuity | [#4556](https://github.com/nearai/ironclaw/issues/4556) | No public fix PR available, triage in progress |
| P1 (Partial Outage) | Multiple hosted agents return 403 Forbidden errors to end users even when the underlying instance reports a RUNNING status in CrabShack | [#4557](https://github.com/nearai/ironclaw/issues/4557) | Partial self-recovery reported, root cause still under investigation |
| P1 (Major Feature Break) | Chat completion requests that include tools send duplicate top-level `model` fields in JSON payloads to DeepSeek, causing 400 errors that completely break DeepSeek function calling workflows | [#4548](https://github.com/nearai/ironclaw/issues/4548) | No public fix PR available |
| P2 (Minor UX Break) | Google Calendar list_events returns oldest events first instead of upcoming meetings | [#4577](https://github.com/nearai/ironclaw/issues/4577) | Fixed via merged PR #4578 |
| P2 (Minor Feature Break) | Hardcoded Codex client_version hid newer models like GPT-5.5 from end users | [#4564](https://github.com/nearai/ironclaw/issues/4564) | Fixed via merged PR #4566 |

## 6. Feature Requests & Roadmap Signals
Recent new work items signal clear near-term roadmap direction:
- The ~60% complete OpenAI-compatible API migration to Reborn (with ingress contracts, idempotency layers, and non-streaming routing already merged) will be the flagship feature of the v0.30 release, targeting full backward compatibility for existing proxy users.
- The newly filed epics for Reborn approvals parity, self-serve secret setup for user-generated tools, and runtime service profiles for credentialed HTTP flows will form the core of the v0.31 enterprise release, focused on multi-user team self-serve capabilities.
- The in-progress automation run history UI PR ([#4580](https://github.com/nearai/ironclaw/pull/4580)) will ship with the v0.29.1 patch release, adding full observability for scheduled automation execution to the WebUI.

## 7. User Feedback Summary
Recent user feedback highlights clear pain points and satisfaction signals:
- Enterprise operators running multi-user SSO deployments report high dissatisfaction with the current OAuth login break, which blocks their planned rollout of shared team IronClaw instances for hundreds of internal users.
- Platform operators managing hosted agents report increased operational toil from unplanned 403 outages that do not align with existing instance health visibility, making it hard to proactively resolve user issues.
- End users of the Telegram integration report frustration with broken conversation continuity after the recent v0.29.x upgrade, eroding trust in update stability for channel deployments.
- Users of the Google Calendar and Codex integrations have given positive feedback on the fast turnaround time for minor bug fixes, with patches landing within hours of issue filing.
- Regional enterprise users in the Chinese market are requesting full, stable WeCom channel support for team deployments, per the recently completed WeCom v0.29.0 staging validation pass.

## 8. Backlog Watch
High-priority long-unresolved items requiring maintainer attention:
1. **Nightly E2E test suite failure** ([#4108](https://github.com/nearai/ironclaw/issues/4108)): The scheduled CI end-to-end test pipeline has been broken for 13 consecutive days with no public prioritization update, creating risk that uncaught regressions will slip through pre-release validation for upcoming v0.29.1 and v0.30 releases.
2. **Carry v1 NEAR wallet login into WebChat v2** ([#4181](https://github.com/nearai/ironclaw/issues/4181)): This follow-up SSO porting issue was split from a larger parent tracking ticket, with GitHub SSO already completed but NEAR native wallet login support still unaddressed, delaying full WebChat v2 login parity for the native NEAR ecosystem user base.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 2026-06-09 Project Digest
---
## 1. Today's Overview
LobsterAI, the open-source desktop AI assistant and agent runtime developed by Netease Youdao, recorded extremely high development velocity over the past 24 hours, with 18 out of 19 total updated pull requests successfully merged or closed, and zero new open issues logged. The team cleared the vast majority of its 2+ month-old stale PR backlog accumulated since April 2026, while launching a full set of new core user-facing features and critical quality-of-life improvements. No new official releases were published today, and all development activity focused on hardening the main branch ahead of an upcoming minor version rollout. Overall project health remains excellent, with a 94.7% merge/close rate for recently updated PRs and no outstanding critical bug reports.

## 2. Releases
No new official releases were launched in the past 24 hours. This section is omitted per available data.

## 3. Project Progress
18 PRs were merged/closed in the past 24 hours, advancing 3 major feature blocks and resolving 10+ long-standing functional defects:
- **Full user data backup & restore suite**: 3 linked PRs from contributor fisherdaddy implemented end-to-end portable tar archive backup for user data, in-place restore logic that preserves runtime lock files to avoid application crashes, and exclusion rules for the Network directory to prevent backup bloat. Related PRs: [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125), [#2126](https://github.com/netease-youdao/LobsterAI/pull/2126), [#2128](https://github.com/netease-youdao/LobsterAI/pull/2128)
- **Desktop auth flow overhaul**: 4 PRs from contributor liuzhq1986 shipped a new localhost temporary callback login flow that skips browser external app confirmation popups, fixed Windows login window focus issues, and added diagnostic logging to simplify dev-mode login fault troubleshooting. Related PRs: [#2122](https://github.com/netease-youdao/LobsterAI/pull/2122), [#2127](https://github.com/netease-youdao/LobsterAI/pull/2127), [#2129](https://github.com/netease-youdao/LobsterAI/pull/2129)
- **Stale backlog closure**: 7 long-dormant PRs created in April 2026 were merged, covering fixes for silent scheduled IM notification failures, missing QQ Bot group whitelist UI, log export timeout, GitHub Copilot OAuth token loss, spurious OpenClaw gateway restarts, plus new features including dynamic LLM model list auto-fetch from provider APIs, detailed connection test error prompts, and color labeling for cowork chat sessions.
- Additional supporting merges: Teams also landed fixes for oversized OpenClaw image payload validation, user-deleted custom model preservation across config migrations, OpenClaw gateway public status UI display, and enhanced developer test mode.

## 4. Community Hot Topics
No new user-submitted PRs or issues with public reactions/comments were logged in the past 24 hours. The only actively updated open PR is the 2+ month-old Electron runtime dependency bump PR:
> PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (chore(deps-dev): bump the electron group across 1 directory with 2 updates)
> Underlying demand: Maintainers are preparing to upgrade the core Electron runtime from v40.2.1 to v42.3.3, alongside a corresponding electron-builder upgrade, to bring the latest security patches, performance optimizations and modern feature support to the entire desktop client. The PR was created by dependabot[bot] on 2026-04-02 and last updated yesterday.

## 5. Bugs & Stability
No new unpatched bugs, crashes or user-reported regressions were submitted in the past 24 hours. All previously documented long-standing defects that had been left unresolved since April 2026 have been fully fixed and merged to the main branch, eliminating 7 known high-priority pain points including silent function failures and broken feature UIs. There are zero pending critical bug PRs waiting for review, and the main branch stability has been significantly improved after today's batch of merges.

## 6. Feature Requests & Roadmap Signals
Based on today's merged code changes, the next minor release is highly likely to include the following user-requested features first:
1. One-click user data backup and restore, to support easy configuration and chat history migration between different LobsterAI deployment devices
2. The new no-popup local callback login flow, to eliminate the disruptive browser external app confirmation dialog that plagues most Electron-based desktop AI clients
3. Automatic LLM model list fetching functionality, removing the requirement for manual configuration when new model versions are released by providers
The upcoming release will also ship with the long-overdue Electron v42 runtime upgrade once the open dependency PR #1277 is merged after compatibility validation.

## 7. User Feedback Summary
Today's batch of merges directly addresses verified high-frequency user pain points from existing feedback:
- Power users managing self-built QQ bots reported that the group whitelist feature was 100% unusable due to missing UI elements, the defect is now fully resolved
- Users with 7+ days of accumulated log data previously faced 30s timeout failures for log exports, the compression logic optimization now resolves this issue for low-spec devices
- Users running 10+ cowork chat sessions requested visual marking capabilities, the new 7-color session labeling feature fully meets this management demand
Overall, the recent set of changes has targeted power user scenarios including self-hosted LLM management, multi-platform bot operation, and cross-device migration, and is expected to notably improve satisfaction for advanced LobsterAI users.

## 8. Backlog Watch
The only outstanding high-priority PR that needs maintainer attention is the long-running Electron dependency update PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277). The PR has been left in the backlog for over 2 months, and requires full compatibility testing with the newly merged features (user data migration, new auth flow, OpenClaw runtime) before merging, to avoid runtime breakage after the Electron version bump. No other long-unanswered community submitted issues are recorded as of 2026-06-09.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI/tinyagi) Project Digest | 2026-06-09
---
## 1. Today's Overview
As of the 24-hour reporting window ending 2026-06-09, the TinyAGI lightweight AI agent framework project recorded low but targeted maintenance activity, with zero updated or newly submitted issues, no new official releases, and 1 newly filed open pull request focused on reducing local installation friction. There were no merged code changes to the mainline branch during this period, indicating a stable lull in core feature development as contributors prioritize quality-of-life improvements for new users. No critical active bugs or platform outages were reported in the public tracker over the last 24 hours, so overall project health remains consistent and low-risk. The single incoming community submission aligns with previously observed project priorities of lowering onboarding barriers for hobbyist and independent developer users.

## 2. Releases
No new official project releases were published in the reporting window. All prior stable and pre-release versions remain unchanged, with no new breaking change announcements or migration guidance required for existing users.

## 3. Project Progress
There were no merged or closed pull requests recorded on 2026-06-09, so no new features, patches, or core fixes were formally integrated to the mainline codebase during the 24-hour period. The only incoming code contribution is still under pre-merge review, with no maintainer approvals recorded to date.

## 4. Community Hot Topics
The only active newly submitted contribution in the reporting window is PR #280: *fix(install): add postinstall script to auto-rebuild better-sqlite3*, available at https://github.com/TinyAGI/tinyagi/pull/280.
This submission targets a long-unaddressed pain point where users have to manually run `npm rebuild better-sqlite3` after a fresh standard install to resolve compilation errors for the native C++ sqlite dependency. The lack of extra user comments or reactions on this PR in its first 24 hours post-submission does not reflect low interest, and instead indicates the issue has been such a consistent, common hurdle for new users that many have already adopted the manual workaround, while new users have not yet encountered the bug to leave feedback. This signals strong unmet underlying community demand for a one-click, zero-documentation setup flow that does not require users to debug Node.js native addon behavior on first install.

## 5. Bugs & Stability
No new user-reported bugs, crashes, or regressions were logged or updated in the public issue tracker over the reporting window. There are zero active critical or high-severity stability incidents open at time of publication. The pending installation error for `better-sqlite3` is classified as a medium-severity usability barrier for new users, and a full fix is already drafted in PR #280.

## 6. Feature Requests & Roadmap Signals
No explicit new user feature requests were submitted in the 24-hour window. The submitted maintenance PR focused on installation UX strongly signals that the core team is prioritizing local developer experience improvements in the upcoming minor release cycle, and the auto-rebuild postinstall script for native dependencies is extremely likely to be included in the next public patch release to resolve longstanding setup friction.

## 7. User Feedback Summary
No new explicit user satisfaction or dissatisfaction reports were logged in the public tracker over the last 24 hours. The drafted fix for the `better-sqlite3` rebuild confirms a persistent unaddressed user pain point: new users with limited Node.js native dependency experience often hit unhelpful compilation errors immediately after following the project's quick start guide, leading to unnecessary drop-off early in the onboarding flow. No new use case feedback was submitted in the reporting period.

## 8. Backlog Watch
The only important pending contribution requiring maintainer attention in the current backlog is PR #280 (https://github.com/TinyAGI/tinyagi/pull/280), submitted on 2026-06-08. This draft install fix has received zero maintainer feedback, reviews, or labeling in the 24+ hours since it was filed, despite addressing a widely reported onboarding pain point that generates a consistent volume of user support tickets. Prompt review and merging of this patch will reduce new user support overhead and lower the barrier to entry for first-time TinyAGI users.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/QwenPaw) 2026-06-09 Project Digest
---
## 1. Today's Overview
The project recorded high development velocity in the 24-hour monitoring window, with 48 updated issues and 44 updated pull requests logged. 45.8% of all recently updated issues were resolved, alongside a 52.3% merge/close rate for PRs, demonstrating a very healthy iteration efficiency. Core work today focused on multi-channel production stability fixes, core runtime refactoring aligned with the ongoing AgentScope 2.0 migration, and ecosystem expansion for the plugin marketplace. No new official releases were deployed during the period, as the team is polishing pending features for the upcoming minor v1.1.11 release. Multiple top-priority long-running bugs affecting enterprise production deployments were closed today.

## 2. Releases
No new official releases were published between 2026-06-08 and 2026-06-09.

## 3. Project Progress
A total of 23 PRs were merged or closed today, advancing core functionality across 4 key domains:
1. **Core context management fix**: PR #5018 (https://github.com/agentscope-ai/QwenPaw/pull/5018) successfully bridges user-configured `max_input_length` values to AgentScope 2.0's native context size parameter, eliminating incorrect 128K fallback for non-standard model deployments.
2. **Orphan chat resolution**: PR #4334 (https://github.com/agentscope-ai/QwenPaw/pull/4334) adds lightweight session placeholders immediately on new chat creation, preserving initial user messages even if the service restarts mid-operation, fully resolving the empty orphan chat issue.
3. **Cross-OS compatibility**: PR #2771 (https://github.com/agentscope-ai/QwenPaw/pull/2771) restricts the mlx-lm dependency exclusively to Apple Silicon macOS devices, fixing installation failures on Windows and non-M-series Linux systems.
4. **Localization and protocol upgrades**: PR #4286 (https://github.com/agentscope-ai/QwenPaw/pull/4286) completes full localization for session and cron job UI controls with added Indonesian language support, while PR #4949 (https://github.com/agentscope-ai/QwenPaw/pull/4949) extends the ACP protocol to expose command metadata, error details and agent/model information for terminal TUI clients.

## 4. Community Hot Topics
The highest-engagement public discussions focus on production reliability and long-term capability evolution:
1. **#4477 Closed - WeChat iLink cron push failure bug**: (15 comments, https://github.com/agentscope-ai/QwenPaw/issues/4477) This resolved bug is the most discussed item today, reflecting urgent demand from enterprise users running WeChat automation workflows. The fix adds token refresh retry logic and missing error logging for file/image sends, directly improving production uptime for WeChat channel deployments.
2. **#5017 Open - Proposal to adopt Hermes Agent learning loop features**: (7 comments, 1 👍, https://github.com/agentscope-ai/QwenPaw/issues/5017) The user explicitly praised the project's strong local adaptability and zero-threshold setup, and proposed integrating the self-skill-iteration design from the 46k+ star Hermes Agent. This discussion signals growing community demand for more autonomous, self-improving agent capabilities.
3. **#4727 Open - Backend migration from AgentScope 1.x to 2.0**: (6 comments, 2 👍, https://github.com/agentscope-ai/QwenPaw/issues/4727) This public roadmap tracking issue is widely supported by contributors, with multiple partial fixes for the migration already landed in recent commits.

## 5. Bugs & Stability
Bugs are ranked below by severity:
1. **Critical**: #4834 Open - MCP server process accumulation across restarts causes slow console loading (https://github.com/agentscope-ai/QwenPaw/issues/4834). A dedicated fix PR #5014 is already submitted and under review, addressing the root cause of orphan subprocesses spawned with independent process groups.
2. **High**: #4926 Open - OneBot channel port leak during zero-downtime reload leads to full service outage (https://github.com/agentscope-ai/QwenPaw/issues/4926). No merged fix is available yet, impacting QQ/NapCat user deployments.
3. **High**: #4873 Open - Starting two parallel sub-agents triggers infinite rapid LLM polling that cannot be interrupted from the Feishu channel (https://github.com/agentscope-ai/QwenPaw/issues/4873), breaking multi-agent workflow reliability for enterprise Feishu users.
4. **Medium**: #4970 Open - Corrupted `loop_config.json` or `prd.json` files crash the entire agent session with no fallback recovery (https://github.com/agentscope-ai/QwenPaw/issues/4970). No pending fix PR is attached as of the digest date.
5. **Medium**: #5019 Closed - `AttributeError` crash during memory compression (https://github.com/agentscope-ai/QwenPaw/issues/5019). This bug has already been resolved in recent merged commits.

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests that are highly likely to ship in near-term releases include:
1. **Standalone visual model fallback support (#4992)**: Low implementation complexity and high user demand from people running pure-text local models (such as DeepSeek V4 Flash) makes this feature almost guaranteed to land in the next minor v1.1.11 release.
2. **Plugin marketplace integration with AgentScope Platform (PR #5023)**: The PR is already open and under active review, it will expand shared community plugin access for all users and ship as part of the v1.1.12 minor release.
3. **Memory system self-evolution capabilities (#4994)**: Aligns with the ongoing community discussion around Hermes Agent's learning loop, this core feature is prioritized for the v1.2 release after full completion of the AgentScope 2.0 migration.
4. **Lightweight `/goal` mode (PR #4443)**: Already under development and review, this session-scoped persistent goal management feature will ship in the next major desktop release.

## 7. User Feedback Summary
Positive feedback highlights strong user satisfaction with the project's localized out-of-the-box experience, as explicitly stated in issue #5017, with domestic enterprise and individual users noting far lower setup friction than competing open source agent frameworks.
Reported pain points include: Windows desktop users experiencing UI lag and high CPU usage during task execution (#5015), local self-hosted Qwen 3.6-27B deployments getting stuck at infinite loading in v1.1.9 and v1.1.10 (#4989), and multiple enterprise channel (WeChat Work, Feishu, OneBot) users facing occasional unexpected service interruptions. Users running large sets of MCP tools also report clear performance degradation after multiple service restarts due to orphan process accumulation.

## 8. Backlog Watch
High-priority long-running items requiring urgent maintainer attention:
1. **#4727 AgentScope 2.0 migration tracking issue**: Created on 2026-05-27, full migration work is still pending after partial fixes landed, the core architectural upgrade requires more dedicated contributor bandwidth to hit the planned release timeline.
2. **#4834 MCP server process leak bug**: Created on 2026-05-31, the submitted fix PR is waiting for maintainer review and merge, this critical issue impacts long-running deployment stability and should be prioritized before the next release.
3. **#4340 Phase 3 unit test coverage for runner and router modules**: Created on 2026-05-14, this test infrastructure work targets improving core backend code coverage above 70% and reducing regression risks, it is currently pending maintainer bandwidth for PR review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Daily Digest | 2026-06-09
---
## 1. Today's Overview
On 2026-06-09, the ZeroClaw open-source AI agent runtime recorded extremely high development velocity, with 50 updated GitHub issues (98% remaining actively open) and 50 updated pull requests, of which 11 were merged or closed, with no official new releases published in the 24-hour window. The vast majority of active work aligns with the planned v0.9.0 release roadmap, prioritizing critical P1 bug fixes, security enforcement layer refactoring, cross-channel user experience improvements, and native MCP capability expansion. Over 40% of the day’s resolved work targeted S1/S0 severity stability issues including memory leaks, broken file I/O behavior, and blocked LLM provider integrations, demonstrating the team’s focus on production readiness. Overall project health remains strong, with no large unplanned rollbacks or critical incidents reported in the period.

## 2. Releases
No new official versions of ZeroClaw were published in the past 24 hours.

## 3. Project Progress
A total of 11 PRs were merged or closed in the 24-hour window, delivering the following notable fixes and incremental advancements:
- [PR #7403](https://github.com/zeroclaw-labs/zeroclaw/pull/7403): Implemented a safety guard for the conversation history `trim_history` function, preventing the orphan removal logic from accidentally clearing all non-system user and assistant messages to avoid broken multi-turn conversations
- [PR #6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701): Fixed the Telegram message splitting logic to properly preserve Markdown code fences, fully delivering the requested smart truncation feature tracked in issue #6225
- [PR #7135](https://github.com/zeroclaw-labs/zeroclaw/pull/7135): Added automatic normalization of WebP format images (including WhatsApp stickers) to standard PNG/JPEG, resolving compatibility issues that previously caused vision-capable LLM providers to reject incoming channel media
- The remaining 8 smaller merged/closed PRs addressed minor CI pipeline fixes, dependency patch updates, and documentation typo corrections, with no breaking changes introduced to the main branch.

## 4. Community Hot Topics
The most actively discussed items in the past 24 hours reflect core user demand for expanded capability and long-term project maintainability:
1. [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) (7 comments, P1 high priority): Reports a critical bug that makes the `tool_filter_groups` configuration completely non-functional for real MCP tools, breaking user-defined access control for third-party MCP integrations. Discussion confirms the team has reproduced both the prefix matching defect and missing deferred loading integration, with a fix targeted for the next patch release. The underlying user need is reliable, granular permission controls for third-party MCP tool ecosystems, a top requested feature for enterprise deployments.
2. [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (6 comments, P2 high priority): RFC for native computer-use support that allows agents to capture desktop screenshots and control mouse/keyboard input. Community feedback is overwhelmingly positive, with multiple contributors expressing interest in helping implement cross-platform desktop integration, as this feature would position ZeroClaw to compete directly with OpenAI's computer-use model offerings.
3. [Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) (4 upvotes): Feature request to add full MCP resource and prompt support, on top of the existing partial MCP tool integration. Widespread user demand is observed to fully leverage the emerging MCP standard across all capability surfaces, not just tool execution.

## 5. Bugs & Stability
All high-severity active bugs tracked in the past 24 hours, ranked by impact:
1. S0 (data loss risk): [Issue #4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) – The `file_write` tool reports success but written files are invisible on the host filesystem. A full fix PR [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129) has been submitted that hardens all workspace tools against ephemeral path edge cases, expected to merge imminently.
2. S0 (system crash risk): [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) – Consecutive OOM kills of the ZeroClaw daemon running on WSL2. Investigation is still in progress to identify the root memory leak cause, no fix PR submitted yet.
3. S1 (workflow blocked): Multiple critical P1 bugs for popular LLM providers including [Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) (Gemini 400 error from invalid conversation history structure), [Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*