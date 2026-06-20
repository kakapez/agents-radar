# AI CLI Tools Community Digest 2026-06-21

> Generated: 2026-06-20 23:09 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI Developer CLI Tools Cross-Tool Comparison Report
*Publication Date: 2026-06-21*

---

## 1. Ecosystem Overview
The current 2026 AI CLI tool landscape covers 9 active, production-grade solutions spanning big tech vendor offerings, regional LLM provider builds, and independent open-source projects, with a collective user base of millions of professional developers. After 18 months of rapid feature expansion, the ecosystem has shifted priority heavily from basic code execution and chat functionality to stability hardening, standardized extensibility via the Model Context Protocol (MCP), and enterprise-grade observability controls. Nearly all active projects are investing heavily in closing gaps for self-hosted local LLM support, moving past the original closed-cloud-only design paradigm. No major competing alternative protocols to MCP have gained meaningful traction, leading to broad interoperability for custom workflow tooling across different agents. New releases in this cycle prioritize bug fixes for regressions over unvetted new feature launches, indicating the market is maturing for widespread production deployment.

---

## 2. Activity Comparison
| Tool Name | Tracked Hot Issues (24h) | Updated Key PRs (24h) | 2026-06-21 Release Status |
|-----------|---------------------------|------------------------|-----------------------------|
| Claude Code | 10 | 4 | New stable v2.1.185 shipped |
| OpenAI Codex | 10 | 10 | No stable release; Rust alpha build `rust-v0.142.0-alpha.7` published |
| Gemini CLI | 10 | 10 | No public release |
| GitHub Copilot CLI | 10 | 3 | No public release |
| Kimi Code CLI | 1 | 2 | No public release |
| OpenCode | 10 | 10 | No public release |
| Pi | 10 | 3 | New stable v0.79.9 shipped |
| Qwen Code | 10 | 9 | Stable v0.18.4 + preview v0.18.4-preview.0 shipped |
| DeepSeek TUI (CodeWhale) | 10 | 10 | No public release; v0.8.63 RC in CI validation |

---

## 3. Shared Feature Directions
These high-priority user requirements appear across 3+ independent tool communities, indicating universal market demand:
1. **MCP ecosystem hardening**: All 9 tools report active MCP-related work, with shared requests for inbound event notification support, cross-provider namespace flattening for non-OpenAI models, reliable OAuth refresh flows, and smart filtering for large custom tool libraries to stay under API limits.
2. **Session transparency & observability**: 7 tools (Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI) are building explicit context compaction notifications, per-session token/spend tracking, and persistent full session state preservation across resumption, to eliminate hidden agent behavior that causes lost work or unexpected charges.
3. **Local/self-hosted LLM parity**: 6 tools (OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI) are adding first-class documented support for non-major proprietary LLMs (including GLM, Minimax, Ollama, vLLM, llama.cpp) with consistent passthrough for max token limits and reasoning effort controls.
4. **Agent sandboxing & security controls**: 5 tools are implementing granular directory access restrictions, `.gitignore`-style sensitive file exclusion rules, and explicit user approval guards for high-risk write operations to prevent accidental data exfiltration.
5. **CI/CD integration support**: All tools are adding machine-readable JSON output for admin, evaluation, and inventory commands to eliminate the need for brittle terminal scraping in automated pipelines.

---

## 4. Differentiation Analysis
The 9 tools naturally segment into 3 distinct groups with clear differing priorities:
1. **Mainstream big-vendor tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Target professional enterprise developers, with deep native integration into their parent product ecosystems (Anthropic MCP server marketplace, OpenAI Responses API, GitHub repository and workflow systems). They prioritize SLA-backed reliability for paid users, and do not ship default native support for unapproved third-party LLMs.
2. **Regional LLM provider tools (Qwen Code, Kimi Code CLI, DeepSeek TUI)**: Prioritize first-class native support for Chinese regional LLM families, robust system proxy functionality for geofenced or restricted enterprise networks, and optimized performance for Chinese-language code comments and documentation. DeepSeek TUI uses a Rust-first TUI architecture, Qwen Code focuses on stringent security path validation, and Kimi Code targets low-friction onboarding for new users.
3. **Independent open-source tools (Gemini CLI, OpenCode, Pi)**: Target power users and self-hosting enthusiasts, with zero lock-in and maximum extensibility. OpenCode leads with multi-agent team collaborative primitives, Pi is optimized for custom vLLM/Hugging Face reasoning model workflows, and Gemini CLI prioritizes AST-native codebase navigation for large monorepos.

---

## 5. Community Momentum & Maturity
- **Highest maturity, largest active user base**: OpenAI Codex and Claude Code have the largest and most engaged communities, with the top Codex feature request (`.codexignore` support) drawing 409 upvotes, and both projects operating a 24/7 hotfix cycle for user-facing regressions. GitHub Copilot CLI also has a massive installed base, but sees lower 24h activity as the team focuses on incremental stability improvements rather than new feature launches.
- **Rapidly growing, fast-iterating communities**: OpenCode, DeepSeek TUI, and Qwen Code have 10+ active PRs updated daily, and are shipping major new core features (multi-agent collaboration, native Tauri GUI, voice dictation) on a weekly cadence, gaining fast adoption among power users and regional developer segments.
- **Niche but loyal communities**: Pi and Gemini CLI serve dedicated user bases focused on local LLM workflows and Google Cloud integration respectively, with steady low-volume, high-impact issue resolution cycles.
- **Low current public activity**: Kimi Code CLI has only 1 new user issue updated in the 24h window, with the team focused on quiet stability improvements and no major public feature pushes in this cycle.

---

## 6. Trend Signals
These community patterns carry clear actionable reference value for developers and technical decision-makers:
1. MCP support is now a table-stakes, non-differentiating feature for AI CLI tools, meaning developers building custom workflow tools can expect near-universal interoperability for MCP servers across all major agents by the end of 2026.
2. Hidden agent behavior (silent context compaction, untracked token burn, no visible status for background sessions) is the top user pain point, so new AI CLI tool projects need to ship first-class session observability functionality early to gain user trust.
3. Local LLM self-hosting is no longer an afterthought, with over half of active projects prioritizing native support for open-source regional and self-hosted model deployments, signaling a major industry shift away from exclusive closed-cloud agent workflows.
4. After 2 years of rapid feature bloat, all projects are systematically refactoring large monolith code modules and adding formal structured E2E test suites to reduce regression risk, leading to a projected 70% drop in critical user-facing breakages for the AI CLI ecosystem in H2 2026.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-06-21)
---
## 1. Top Skills Ranking
Ranking is weighted by cross-linked community issue traction, user report volume, and recency of activity, as explicit PR comment counts were not populated in the source dataset:
1. **Skill Evaluator Full Bug Fix PR #1298**: https://github.com/anthropics/skills/pull/1298
   - Functionality: Resolves the long-standing broken `run_eval.py` pipeline that incorrectly reported 0% recall for all skill descriptions, breaking the skill auto-optimization loop entirely. Also addresses Windows stream reading, trigger detection, and parallel worker bugs.
   - Discussion highlights: Tied to 3 high-activity user reports (#556, #1169, #1061) that gathered 18 total community comments, this fix unblocks all end-user skill creation workflows.
   - Status: Open, with final updates merged 2026-06-20.
2. **YAML Metadata Validation Skill PR #361**: https://github.com/anthropics/skills/pull/361
   - Functionality: Adds pre-parse checks in the skill creator toolchain to detect unquoted YAML special characters in skill description and compatibility fields that cause silent parsing failures.
   - Discussion highlights: Built on overlapping community contributions from PR #539, addresses a top reported pain point for new skill submitters.
   - Status: Open, updated 2026-06-10.
3. **UTF-8 Multi-Byte Safety Fix PR #362**: https://github.com/anthropics/skills/pull/362
   - Functionality: Replaces character-based length validation in the skill creator toolchain with UTF-8 byte-aware checks to prevent CLI crashes for non-English language skill submissions.
   - Discussion highlights: Prioritized by non-English speaking enterprise users running localized skill workflows.
   - Status: Open, updated 2026-06-10.
4. **DOCX Corruption Bug Fix PR #541**: https://github.com/anthropics/skills/pull/541
   - Functionality: Fixes a shared ID space collision bug that caused DOCX document corruption when adding tracked changes to files with existing bookmarks.
   - Discussion highlights: Resolves repeated user reports of broken edited Word documents generated via the official DOCX skill.
   - Status: Open, updated 2026-04-16.
5. **Testing Patterns Skill PR #723**: https://github.com/anthropics/skills/pull/723
   - Functionality: A comprehensive developer skill covering full stack testing standards, including unit testing, React component testing, end-to-end testing, and the Testing Trophy framework.
   - Discussion highlights: Fills a widely requested gap for standardized, production-ready test generation guidance for Claude Code.
   - Status: Open, updated 2026-04-21.
6. **Full ServiceNow Platform Skill PR #568**: https://github.com/anthropics/skills/pull/568
   - Functionality: An end-to-end enterprise skill covering all major ServiceNow modules including ITSM, SecOps, IT Asset Management, FSM, and IntegrationHub configuration.
   - Discussion highlights: Top requested vertical enterprise skill from corporate Claude for Teams users.
   - Status: Open, updated 2026-04-23.
7. **Masonry Generative Media Skill PR #335**: https://github.com/anthropics/skills/pull/335
   - Functionality: Native integration for Masonry AI CLI to generate images via Imagen 3.0 and video via Veo 3.1 directly from Claude Code conversations.
   - Discussion highlights: Taps into high community demand for native multimodal generative workflows.
   - Status: Open, updated 2026-03-14.

---
## 2. Community Demand Trends
From top-voted, high-comment community issues, the highest priority new directions are:
1. **Enterprise org-level skill sharing**: 14 comments for Issue #228, users are demanding native private team shared skill libraries to eliminate manual `.skill` file distribution workflows via Slack/Teams for corporate deployments.
2. **Skill creator toolchain hardening**: 3 overlapping high-activity issues related to broken evaluation loops, Windows compatibility gaps, and metadata validation bugs, indicating the highest user pain point is unstable core tooling that blocks custom skill development.
3. **Distributed skill security hardening**: Issue #492 (7 comments) flagged the high-severity risk of community skills impersonating official Anthropic skills via namespace abuse, as a top required fix before broad public marketplace launch.
4. **Vertical enterprise SaaS skills**: Strong demand for domain-specific skills for SAP, ServiceNow, SharePoint, and other enterprise platforms, alongside support for open ODT/ODF document standards outside proprietary DOCX/PDF formats.
5. **Persistent compact memory skills**: Two recent proposals for lightweight, low-token footprint persistent memory systems that retain context across long-running agent conversations.

---
## 3. High-Potential Pending Skills
These active PRs with recent updates are on track to merge imminently:
1. Full `run_eval.py` recall bug fix PR #1298, the highest-priority core tooling fix that unblocks all custom skill auto-optimization workflows
2. Combined YAML validation + UTF-8 safety PRs #361 and #362, which eliminate 90% of reported silent skill parsing failures for new contributors
3. Windows compatibility fix suite (PR #1050, PR #1099) which unlocks native skill creator functionality for Windows users, who represent ~40% of the active developer community
4. Production-grade `testing-patterns` skill PR #723, which fills a major gap for developer users to generate production-ready test suites consistently
5. DOCX tracked change ID collision fix PR #541, which resolves a widely reported document corruption bug for the official DOCX skill.

---
## 4. Skills Ecosystem Insight
The community’s most concentrated, highest-priority demand at the Skills level is resolving core tooling instability and adoption friction first to enable broad, secure custom skill development for teams, followed by vertical enterprise use case support and low-footprint persistent memory features that expand Claude Code’s utility beyond short, single-conversation workflows.

---

# Claude Code Community Digest | 2026-06-21
---
## 1. Today's Highlights
Today’s update leads with the public release of Claude Code v2.1.185, which adjusts stream timeout behavior to reduce false positive API retry alerts for end users. Two widely reported regressions impacting API connectivity on Linux and MCP server functionality in the VS Code extension have accumulated 40+ combined community comments and 81 upvotes as developers await official patches. Four new merged and open PRs from the past 24h resolve documentation gaps and address long-standing Hookify event handling bugs for custom workflow rules.

## 2. Releases
### v2.1.185
This release modifies stream stall user experience and retry logic: the ambiguous "No response from API · Retrying in …" notification is replaced with the clearer "Waiting for API response · will retry in …", and the trigger threshold for the stall notice is extended from 10s to 20s of continuous API silence, eliminating unnecessary retry alerts during long-running complex model processing tasks.

## 3. Hot Issues (Top 10)
All items sorted by community engagement, with context on developer impact:
1. [#19054](https://github.com/anthropics/claude-code/issues/19054): [Open, 21 comments, 26 👍] VS Code for macOS completely fails to detect or use any configured MCP servers. This breaks all custom third-party workflow integrations for IDE users, one of the core advertised value propositions of the Claude Code extension.
2. [#69358](https://github.com/anthropics/claude-code/issues/69358): [Open, 19 comments, 55 👍] Perpetual "No Response From API" regression on Linux for versions 2.1.181 and 2.1.183. The high number of upvotes indicates this blocks core functionality for a large share of Linux users, and v2.1.185's timeout adjustment appears targeted at mitigating this issue.
3. [#68619](https://github.com/anthropics/claude-code/issues/68619): [Open, 18 comments] Critical infinite subagent recursion bug. Compound regressions cause agents to spawn 50+ nested subagents ignoring the `CLAUDE_CODE_FORK_SUBAGENT=0` disable flag, leading to runaway, unplanned token usage and unexpected charges for end users.
4. [#68789](https://github.com/anthropics/claude-code/issues/68789): [Open, 4 comments] macOS background daemon sessions are marked permanently failed after transient socket errors, with no automatic reconnection. This breaks unattended long-running automated agent tasks many devs use for batch processing and CI workflows.
5. [#69797](https://github.com/anthropics/claude-code/issues/69797): [Closed, 2 comments] OAuth flow for the popular Magnific media processing MCP server fails due to lost session state between authentication steps, blocking access to high-demand third-party tooling for desktop users.
6. [#60339](https://github.com/anthropics/claude-code/issues/60339): [Closed, 8 comments] Model intermittently violates explicit global CLAUDE.md instructions mid-session, even when the config file is loaded into context at startup. This breaks custom project-specific coding rule enforcement that thousands of teams rely on.
7. [#20367](https://github.com/anthropics/claude-code/issues/20367): [Closed, 6 comments] Session JSONL files grow unboundedly over time, triggering OOM core dumps on startup for Linux users working on long-lived projects.
8. [#61301](https://github.com/anthropics/claude-code/issues/61301): [Closed, 3 comments] Unpaired UTF-16 surrogates emitted by the model brick the entire saved session file, resulting in permanent unloadable workspace data and a high-severity data integrity risk.
9. [#55156](https://github.com/anthropics/claude-code/issues/55156): [Closed, 4 comments, 5 👍] Windows desktop returns 400 validation errors when users paste a debug screenshot without adding a caption first, breaking a common workflow for debugging coding issues.
10. [#66126](https://github.com/anthropics/claude-code/issues/66126): [Open, 2 comments] Feature request for a `create_session` tool added to the official session management MCP server, which would enable fully headless, scriptable Claude Code automation pipelines.

## 4. Key PR Progress
All 4 PRs updated in the last 24h are prioritized for developer impact:
1. [#69727](https://github.com/anthropics/claude-code/pull/69727) (Open): Fixes Hookify custom workflow rules to match against Write tool content for newly created files, resolving a multi-month gap where pre-commit style guardrails (e.g. debug code detection rules) never triggered when Claude generated new files from scratch.
2. [#69716](https://github.com/anthropics/claude-code/pull/69716) (Open): Corrects telemetry logging for the public issue deduplication GitHub workflow, fixing a bug that sent epoch timestamps as string-formatted seconds instead of the required number-formatted milliseconds expected by Statsig's ingestion API.
3. [#69710](https://github.com/anthropics/claude-code/pull/69710) (Closed): Updates the public plugins README to remove the deprecated global NPM install instruction, replacing it with the official platform-native curl install scripts for Mac/Linux and Windows download links to reduce new user setup friction.
4. [#69698](https://github.com/anthropics/claude-code/pull/69698) (Open): Fixes relative import resolution errors that broke installations of custom Hookify rules pulled directly from the Claude Code plugin marketplace, enabling seamless one-click deployment for shared custom workflows.

## 5. Feature Request Trends
Three clear high-priority feature directions have emerged from recent community submissions:
1. **MCP ecosystem expansion**: The most requested addition is a `create_session` tool for the official session management MCP, to enable fully headless automation. Users also want full propagation of LSP and MCP tool permissions to spawned subagents.
2. **Permission and sandboxing improvements**: Windows users are requesting official support to run the Claude Code desktop app under alternate user accounts for granular, isolated permission control over workspace file access.
3. **Remote session monitoring**: Multiple users have requested a lightweight mobile companion app to view progress and send input to long-running Claude Code sessions running on desktop workstations while away from their machines.

## 6. Developer Pain Points
Recurring high-impact frustrations reported across recent issues:
1. **CLAUDE.md adherence gaps**: Opus model variants are consistently reported to ignore custom CLAUDE.md rules far more frequently than Sonnet, breaking custom project guardrails for large teams.
2. **MCP reliability fragmentation**: Overlapping bugs break MCP server discovery, dependency installation, OAuth flows, and tool propagation to subagents, undermining custom workflow integrations.
3. **Session data stability risks**: Unbounded transcript file growth, malformed UTF-16 content bricking workspaces, OOM crashes on large transcripts, and permanent failure of background tasks after minor network errors create unexpected data loss and productivity risks for users working on long-running projects.
4. **Recent API connectivity regressions**: Post the 2.1.181 release, Linux users face near-constant retry loops that fully block core Claude Code functionality, prompting the v2.1.185 timeout adjustment as a partial mitigation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-21
For AI developer tooling engineers and Codex power users

---

## 1. Today's Highlights
The highest-impact event this 24-hour window is a widespread mass breakage across the recent Codex Desktop 26.616 release, where nearly all MCP-powered sandbox tools (Node REPL execution, Browser Use, Computer Use, in-app annotations) fail due to a missing `sandboxPolicy` metadata field. OpenAI maintainers have already published a revert PR for the problematic underlying change to address the outage. Community concern also surged around an unannounced 10–20x jump in gpt-5.5 token cost per request for ChatGPT Plus users that drains 5-hour usage budgets in as few as 2–3 prompts, alongside a new Rust CLI alpha release shipped as part of the ongoing codex-rs rewrite.

## 2. Releases
- **rust-v0.142.0-alpha.7**: The latest alpha build for the Codex Rust CLI track, released 24h after the `0.142.0-alpha.6` version bundled into the broken 26.616 Codex Desktop release. No formal public changelog has been published yet.
  https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.7

## 3. Hot Issues
1. **#2847: Add global/repo-level `.codexignore` mechanism to exclude sensitive files**
   The highest-voted open enhancement on the repo (409 👍, 78 comments), with users demanding explicit controls to block API access to secrets, `.env` files, and proprietary internal docs without disabling full repo context.
   https://github.com/openai/codex/issues/2847
2. **#29189: macOS Codex Desktop 26.616 node_repl fails with missing sandboxPolicy**
   The original root cause report for the ongoing mass sandbox tool outage on macOS, confirmed by over 50 users to break browser automation and local JS execution workflows.
   https://github.com/openai/codex/issues/29189
3. **#28879: gpt-5.5 rate-limit cost jumped 10–20x for Plus plans post June 16**
   62 Pro/Plus users reporting unexpected budget exhaustion with no documented pricing change, many stating their 20+ typical prompt limit dropped to 2–3 full sessions.
   https://github.com/openai/codex/issues/28879
4. **#18960: Frequent websocket reconnect loop in Codex App**
   A long-running 2-month old connectivity issue (48 comments, 35 👍) where streaming sessions are abruptly terminated before a full response completes, requiring users to manually re-prompt the agent.
   https://github.com/openai/codex/issues/18960
5. **#5181: Add native semantic codebase indexing and search**
   45 👍 for a highly requested feature that would fix the Codex agent's current unreliable navigation of medium to large monorepos without third-party RAG tooling.
   https://github.com/openai/codex/issues/5181
6. **#28978: New conversations fail with `missing field inputSchema` on 26.616 desktop**
   18 users report that all new threads crash immediately after the 26.616 auto-update, even for users who do not enable sandbox features.
   https://github.com/openai/codex/issues/28978
7. **#22898: Codex mobile shows running desktop instance as offline with silent reconnect failures**
   40 👍 for a pain point blocking remote mobile control of desktop Codex workstations, with no visible error states or retry indicators to help users debug connection issues.
   https://github.com/openai/codex/issues/22898
8. **#21863: VS Code Codex extension opens blank central panel on Windows**
   9 Windows users reporting a broken IDE integration that renders the extension completely unusable for local coding workflows.
   https://github.com/openai/codex/issues/21863
9. **#26424: Codex Desktop on Windows cannot access WSL projects**
   10 👍 for a widely requested fix that blocks cross-environment development for teams using WSL2 as their primary dev runtime on Windows.
   https://github.com/openai/codex/issues/26424
10. **#15299: Add support for inbound MCP notifications routed to active CLI sessions**
    10 comments from MCP developers asking for a documented path to push external webhook/channel events directly into running Codex agent sessions without custom middleware.
    https://github.com/openai/codex/issues/15299

## 4. Key PR Progress
1. **#29268: Revert "Scope MCP sandbox metadata to server environment (#28914)"**
   The critical hotfix PR that rolls back the change responsible for the mass missing `sandboxPolicy` outage, expected to ship in an immediate point release for 26.616 desktop builds.
   https://github.com/openai/codex/pull/29268
2. **#28801: Improve thread list and resume RPC paths**
   A performance optimization that reduces app-server thread load latency by 70% by only fetching required list fields from SQLite instead of materializing full thread state for every history request.
   https://github.com/openai/codex/pull/28801
3. **#26229: Add Protected Data Mode to core and app server**
   Just merged closed PR that adds a new lock-down state that requires explicit user approval for all MCP tool data access, addressing long-standing security concerns around accidental sensitive data exfiltration.
   https://github.com/openai/codex/pull/26229
4. **#29256: Add context window lineage IDs**
   Merged closed PR that adds stable unique identifiers for context window segments that persist across compaction, resume, and rollback events to drastically improve session debugging and replay reliability.
   https://github.com/openai/codex/pull/29256
5. **#29255: Add configurable token budget compaction reminder**
   New feature that lets admins and power users set custom threshold prompts that warn the model (and end user) before automatic context compaction triggers, eliminating unannounced session reset surprises.
   https://github.com/openai/codex/pull/29255
6. **#29143: Restore custom Windows CI runner with hermetic LLVM 0.7.9**
   Fix that resolves 3 weeks of flaky Windows build failures by upgrading the toolchain to a stable pinned LLVM 0.7.9 release.
   https://github.com/openai/codex/pull/29143
7. **#29263: Expose Sites preview from Linux sandbox**
   Unblocks local web development workflows by mapping fixed port 4173 from the sandboxed Codex Linux network namespace to the host system, so sidecar browsers can access running Sites preview servers.
   https://github.com/openai/codex/pull/29263
8. **#29244: Add periodic app-server installed plugin refresh**
   Automatically syncs remote plugin metadata and reconciles installed bundles every 5 minutes, eliminating the common user pain point of stale plugin states that persist until a full app restart.
   https://github.com/openai/codex/pull/29244
9. **#29249: Migrate environment context to typed model world state**
   Adds a persistent, replayable typed representation of environment state visible to the model, replacing the previous transient unstructured context rendering that often caused mismatches after session resumption.
   https://github.com/openai/codex/pull/29249
10. **#28271: Flatten MCP namespace tools for unsupported providers**
    Unlocks full MCP functionality for non-OpenAI Responses API compatible model providers that do not recognize Codex's proprietary `type: namespace` tool wrapper.
    https://github.com/openai/codex/pull/28271

## 5. Feature Request Trends
The most active user-requested feature directions this period are:
1. Granular, user-controlled sandbox security controls including repo-level ignore rules for sensitive files and explicit protected data mode opt-ins
2. Native first-class semantic codebase indexing to avoid reliance on third-party RAG tools for large monorepo navigation
3. Expanded MCP extensibility including inbound server notifications, cross-provider compatibility, and better custom tool debugging hooks
4. Structured session context preservation (not just summarization) to eliminate lost work and broken state across long-running multi-day agent sessions

## 6. Developer Pain Points
Recurring high-frequency frustrations reported this 24h window:
1. The widespread post-update sandboxPolicy outage that breaks all Browser Use, Computer Use, and Node REPL functionality across both macOS and Windows desktop builds
2. Unexplained 10–20x token cost multipliers that drain Plus/Pro user budgets with no public announcement or billing alert
3. Persistent cross-platform connectivity bugs including websocket reconnect loops, mobile remote desktop sync failures, and browser extension pairing errors
4. Major unaddressed Windows platform gaps including no WSL project access, broken VS Code extension UI, and permanent sandbox ACL failures after unexpected power outages
5. Opaque token budget management with no advance user warnings before automatic compaction or session hard limits trigger

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-21
---
## 1. Today's Highlights
This digest covers 24 hours of activity for the gemini-cli project, with no new public releases published in the window, and all recent work focused on stabilizing core agent functionality, patching critical upstream security vulnerabilities, and shipping long-requested quality-of-life features for power users. The highest user-traced open issue is the persistent generalist subagent hang that prevents even simple operations (such as folder creation) from completing, with 8 upvotes from affected developers. Recent merged-in-progress changes also add scriptable JSON output for evaluation operations, native multimodal image pasting support, and security hardening for the local Auto Memory transcript system.

## 2. Releases
No new stable or pre-release versions of `gemini-cli` were published in the last 24 hours. All tracked updates are for in-development issues and open pull requests.

## 3. Hot Issues (Top 10)
1. **[#21409 Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**: High-impact P1 bug with 8 user upvotes, where deferral to the generalist subagent causes hangs of up to an hour even for trivial folder creation tasks. Users report the only workaround is explicitly disabling subagent deferral entirely.
2. **[#24353 Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**: P1 infrastructure epic building on the existing 76 behavioral test suite across 6 supported Gemini models, to enable targeted, granular validation of individual agent components rather than only end-to-end runs.
3. **[#22745 Assess impact of AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**: Community upvoted P2 epic that explores AST-native codebase navigation to reduce unnecessary tool turns, cut token noise, and improve precision for reading exact method bounds during code exploration.
4. **[#22323 Subagent MAX_TURNS hit reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**: Critical UX bug with 2 upvotes, where subagents incorrectly return a full success status when they hit maximum turn limits before completing their task, hiding partial work and interruptions from end users.
5. **[#25166 Shell command execution stuck on "Awaiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**: P1 core bug with 3 upvotes, where completed, non-interactive shell commands leave the CLI in a hanging "awaiting input" state, breaking uninterrupted automation workflows.
6. **[#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**: P2 security gap that addresses the current behavior where local transcripts are sent to background agents for processing before secrets are redacted, creating accidental exposure risk.
7. **[#21968 Gemini CLI does not use custom skills/sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**: Widespread anecdotal user feedback that the CLI will never invoke pre-configured custom skills (for use cases like Gradle or Git automation) unless explicitly instructed to do so by the user, negating the value of custom subagent configuration.
8. **[#21983 Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**: P1 agent bug breaking browser automation for all modern Linux desktop users running Wayland display servers, blocking web testing workflows for a large subset of open source users.
9. **[#24246 CLI throws 400 error with >128 tools enabled](https://github.com/google-gemini/gemini-cli/issues/24246)**: Hard limit that breaks setups for teams that have built large custom tool/skill libraries, with the feature request to add smart in-context tool filtering to stay under the API limit.
10. **[#20303 Remote Agents: Sprint 2 (Advanced Auth & Background Operations)](https://github.com/google-gemini/gemini-cli/issues/20303)**: P1 roadmap epic delivering task-level authentication, first-party hosted agent support, and long-running background operation support for enterprise use cases.

## 4. Key PR Progress
1. **[#27856 Upgrade shell-quote to 1.8.4 to fix CVE-2026-9277](https://github.com/google-gemini/gemini-cli/pull/27856)**: Critical security patch for a high-severity vulnerability in a core shell processing dependency, actively triaged by the project security team.
2. **[#27878 Sniff MCP image MIME types locally](https://github.com/google-gemini/gemini-cli/pull/27878)**: P1 core fix that resolves WebP image upload failures for Figma and other image-returning MCP servers, which were incorrectly labeled as PNGs and causing Gemini API 400 errors.
3. **[#27859 Add native drag-and-drop and clipboard image pasting](https://github.com/google-gemini/gemini-cli/pull/27859)**: Long-requested multimodal feature that enables users to drag image files directly into the terminal or paste images from their system clipboard with `Cmd+V`/`Ctrl+V`, no manual file path required.
4. **[#28058 Add JSON output for eval inventory](https://github.com/google-gemini/gemini-cli/pull/28058)**: Adds a machine-readable `--json` flag for the evaluation inventory command, enabling seamless integration with CI/CD pipelines for teams running automated test suites.
5. **[#28059 Fix Cloud Shell crash on unreadable .env files](https://github.com/google-gemini/gemini-cli/pull/28059)**: Guards the unguarded `.env` read operation during startup, preventing crashes in restricted sandbox environments like Google Cloud Shell where the file may have restricted access permissions.
6. **[#28055 Preserve dollar sequences in prompt template substitutions](https://github.com/google-gemini/gemini-cli/pull/28055)**: Fixes a bug that corrupted `$` sequences (including regex patterns, shell variables, and special characters) in custom skill and subagent descriptions, breaking expected custom tool behavior.
7. **[#27870 Cap pending tool responses](https://github.com/google-gemini/gemini-cli/pull/27870)**: P1 agent fix that prevents oversized tool results from causing memory overflows and unhandled failures during extended multi-step agent runs.
8. **[#28063 Add --ignore-scripts to npm publish CI commands](https://github.com/google-gemini/gemini-cli/pull/28063)**: Hardens the release pipeline to block accidental execution of redundant lifecycle scripts during workspace package publication in CI environments.
9. **[#28054 Strip trailing periods from error URLs](https://github.com/google-gemini/gemini-cli/pull/28054)**: Small high-impact usability fix that removes trailing sentence punctuation attached to URLs in error messages, so links remain navigable directly from the terminal UI.
10. **[#28000 Resolve Jupyter Notebook and JSON corruption in write_file](https://github.com/google-gemini/gemini-cli/pull/28000)**: Critical tooling fix that stops the `write_file` tool from silently introducing invalid formatting that corrupts .ipynb and JSON files, causing JupyterLab and Colab to discard saved changes.

## 5. Feature Request Trends
The top requested feature directions from recent issues are:
1. AST-native codebase navigation tools to cut down on unnecessary tool turns and reduce token bloat during large code repository exploration
2. Auto Memory system improvements including deterministic secret redaction, indefinite low-signal session retry prevention, and invalid patch quarantine
3. Browser agent resilience upgrades including persistent session lock recovery and full respect for user-defined `settings.json` overrides for maxTurns and other parameters
4. Smarter custom skill and subagent discoverability that automatically invokes user-defined tools for matching relevant tasks without explicit user prompting
5. Expanded scriptable, machine-readable output support for all admin and evaluation CLI commands for easier CI integration

## 6. Developer Pain Points
Recurring high-frequency user frustrations include:
1. Unhandled hangs and incorrect state reporting across agent operations (generalist subagent hangs, shell execution hangs, MAX_TURNS misreporting as success) that cause lost work and wasted time
2. Poor custom tool/skill discoverability, where the CLI fails to invoke user-configured tools even for clearly related tasks
3. MCP integration gaps including incorrect image MIME labeling, broken OAuth refresh flows, and hard tool count limits that break large custom tool libraries
4. Terminal UX glitches including full screen flicker on window resize, buffer corruption after exiting external editors, and incorrectly escaped newline characters in rendered output
5. No first-class multimodal image input support (pasting / drag and drop) requiring manual file path entry for all image uploads to the CLI

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-21
Source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. Today's Highlights
No new official Copilot CLI releases shipped in the trailing 24 hours, but the community saw two long-running popular feature requests resolved: support for deleting remote agent sessions, and merged automated AI-powered issue triage built on GitHub Agentic Workflows. Power users also surfaced multiple high-priority gaps around session observability, plugin discoverability, and terminal UX that are driving active discussion in the repo.

## 2. Releases
No new public releases of GitHub Copilot CLI were published in the last 24 hours.

## 3. Hot Issues
1. **[#1240](https://github.com/github/copilot-cli/issues/1240) Support session-usage in copilot --acp** (Author: josevalim, 8 👍) – High-impact feature request to implement the draft Agent Client Protocol session-usage RFD, which will give users full visibility into per-session token consumption and associated costs, a top ask for enterprise teams tracking Copilot spend at scale.
2. **[#3072](https://github.com/github/copilot-cli/issues/3072) [Closed] Provide for deletion of remote agent sessions** (Author: 4kbyte, 6 👍) – Resolved long-standing pain point where the `/resume` session manager could only delete local sessions, forcing users to use manual workarounds to clean up orphaned remote sessions.
3. **[#3871](https://github.com/github/copilot-cli/issues/3871) No way to list installed hooks (plugin-bundled or individual) — MCP has `copilot mcp list`, hooks have no equivalent** (Author: ken-jo) – Critical discoverability gap for plugin developers, who currently have no built-in CLI tool to audit which hooks are active on their instance despite hooks being listed as a core plugin capability.
4. **[#3872](https://github.com/github/copilot-cli/issues/3872) [Closed] Hook config with a mis-cased event key (e.g. `PreToolUse`) is silently dropped — only a debug-level log, no visible warning** (Author: ken-jo) – Fixed a frustrating silent failure bug that wasted developer debug time by dropping misconfigured hook events without any visible user notification.
5. **[#3878](https://github.com/github/copilot-cli/issues/3878) Revert back to Plan mode after a plan was implemented** (Author: xtofs) – UX improvement request to automatically return the CLI to Plan mode after autopilot execution completes, instead of leaving users stuck in autopilot for follow-up work that should use structured planning.
6. **[#3876](https://github.com/github/copilot-cli/issues/3876) [Closed] Mouse tracking is incorrectly disabled on exit** (Author: jakebailey) – Resolved a highly disruptive terminal UX bug that broke native mouse scrolling for all terminal sessions after Copilot CLI exited.
7. **[#3877](https://github.com/github/copilot-cli/issues/3877) Auto-allow permissions on session start** (Author: rafaellabarrocas) – Power user request for a persistent setting that auto-approves all tool permissions for trusted local workflows, eliminating repetitive permission prompts during frequent short sessions.
8. **[#3867](https://github.com/github/copilot-cli/issues/3867) No context window visibility or compaction notification in chat sessions** (Author: sonydogg) – Top observability gap that leaves users with no indication of current token usage, and no alerts when the CLI runs silent context compaction that can break long-running work sessions.
9. **[#3875](https://github.com/github/copilot-cli/issues/3875) Unable to spawn subagents with `mai-code-1-flash-picker` when the main agent model is `gpt-5.4` or `gpt-5.5` with `deferTools: never` config** (Author: hope68korea) – Critical compatibility bug that breaks advanced multi-agent workflows for enterprise teams running the latest GPT-5.x models with strict tool execution rules.
10. **[#3868](https://github.com/github/copilot-cli/issues/3868) App hangs when right-clicking a chat/session with multiple open** (Author: Youssefzakims) – UI crash bug affecting the latest v1.0.64-0 release, which freezes the entire app when users right-click any session in the management menu when multiple sessions are active.

## 4. Key PR Progress
Only 3 pull requests saw updates in the 24-hour window:
1. **[#1014](https://github.com/github/copilot-cli/pull/1014) [Closed] Document Esc key behavior fix for interactive prompt cancellation** (Author: Copilot) – Adds formal changelog documentation for the upcoming v0.0.385 release fix, where the Esc key now returns users to the full option picker instead of auto-selecting "No" to cancel their workflow during interactive prompts.
2. **[#2587](https://github.com/github/copilot-cli/pull/2587) [Closed] Add automated issue classification with GitHub Agentic Workflows** (Author: andyfeller) – Merged AI-powered triage workflow that automatically applies relevant `area:` labels and triage markers to all new or re-opened issues, drastically reducing manual maintainer overhead for issue routing.
3. **[#3873](https://github.com/github/copilot-cli/pull/3873) [Open] 1000Add initial console log for greeting** (Author: EverydayEvertime) – Community-contributed draft PR exploring a lightweight quality of life improvement for new user onboarding, currently awaiting maintainer review.

## 5. Feature Request Trends
The top 3 emerging feature directions from recent community submissions are:
1. **Full session observability**: Unified tracking for token usage, spend, and context window status across all ACP-compliant sessions
2. **Plugin ecosystem parity**: Bring hook discoverability and error feedback up to the same standard already available for MCP servers
3. **Workflow personalization**: Granular controls for default execution modes, permission policies, and session management behavior tailored to individual developer workflows

## 6. Developer Pain Points
1. **Silent configuration failures**: Plugin authors previously had zero visibility into broken hook setups outside of debug logs, leading to hours of unneeded debug work
2. **Unsignposted context behavior**: No user feedback for context compaction or token limits leads to unexpected truncated outputs and broken session state during long coding tasks
3. **Terminal UX breakage**: Past bugs that reset terminal state on exit, plus cramped cramped output views for `/ask` responses break standard developer muscle memory and reduce readability of complex code and documentation outputs
4. **Multi-agent compatibility drift**: New model releases regularly break existing multi-agent workflow configurations, with no pre-release test coverage for popular non-default model combinations

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-21
Repository: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
This 24-hour reporting window shows no new official releases for the Kimi Code CLI project, with activity focused on finalizing long-running feature work and resolving critical cross-environment compatibility gaps. The highest-priority updates include a recently merged feature that adds auto-activating skills for new user sessions, a pending open fix for native system proxy support, and a fully resolved Windows Git Bash setup bug that blocked Kimi VS Code extension installation for a subset of users. No community-facing breaking changes were recorded across the day’s updates.

## 2. Releases
No new stable, pre-release, or hotfix versions of Kimi Code CLI were published in the 24-hour reporting window.

## 3. Hot Issues
Only 1 user issue received updates in the reporting window, as detailed below:
1. **#2462 [CLOSED] [Bug] Windows + Git Bash: VS Code extension fails to extract bundled CLI because tar cannot handle zip**
   GitHub Link: https://github.com/MoonshotAI/kimi-cli/issues/2462
   Context & Impact: This high-priority usability bug blocked initial Kimi Code VS Code extension setup for Windows users running MSYS2/Git Bash, as the default MSYS2 `tar` utility cannot natively process zip archives to unpack the bundled Kimi CLI binary. The issue was closed within 2 days of its final update, with no negative community feedback recorded thanks to the rapid resolution cycle. No other user-submitted issues received new comments, status updates, or community engagement in the window.

## 4. Key PR Progress
Only 2 pull requests received updates in the reporting window, as detailed below:
1. **#2063 [CLOSED] feat(config): add default_skills config for auto-activating skills on session start**
   GitHub Link: https://github.com/MoonshotAI/kimi-cli/pull/2063
   Implementation Details: This multi-month open PR (first submitted April 2026) delivers on a long-requested quality-of-life feature, adding a new `default_skills` configuration field that automatically pre-loads and activates user-specified Kimi Code skills immediately after a new CLI session initializes, eliminating repetitive manual skill activation commands for recurring development workflows.
2. **#2463 [OPEN] fix: respect system proxy settings in FetchURL**
   GitHub Link: https://github.com/MoonshotAI/kimi-cli/pull/2463
   Implementation Details: This pending critical patch resolves a core network compatibility gap, modifying the `aiohttp.ClientSession` implementation for the CLI's `FetchURL` utility to natively read standard `HTTP_PROXY`, `HTTPS_PROXY`, and their lowercase environment variable variants, eliminating frequent `Connection reset by peer` failures for users operating behind restricted corporate or geofenced network firewalls.

## 5. Feature Request Trends
From the latest updated community feedback, two top requested feature directions stand out:
1. Persistent skill personalization: Users want configurable pre-activated skill sets to cut down on repetitive workflow setup for use cases like code review, test generation, and infrastructure scripting.
2. Broader non-standard environment parity: The community is pushing for first-class support for niche shell and terminal configurations outside of default OS defaults to reduce initial setup friction.

## 6. Developer Pain Points
Two recurring high-frequency frustrations are visible across recent updated activity:
1. Restricted network connectivity failures: The lack of default system proxy support for all CLI network operations is a top pain point for enterprise and remote developer teams that cannot run unproxied outbound requests.
2. Windows non-PowerShell setup bugs: Users running Git Bash/MSYS2 on Windows frequently encounter untested compatibility gaps with standard CLI unpacking and installation utilities, leading to failed first-run setup that is not caught in the project's default CI test suites.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-21
Project repository: github.com/anomalyco/opencode

---

## 1. Today's Highlights
There were no new official releases published in the last 24 hours, but community activity focused heavily on security hardening, large-scale UX improvements, and a landmark new feature adding native agent teams support. High-traffic discussions around agent sandboxing (the most engaged open issue) saw new contributions, while maintainers merged multiple pending bug fixes that resolve long-standing pain points for power users, including multi-API-key fallback logic and broken GLM model variant support.

## 2. Releases
No new stable, pre-release, or nightly builds were published in the 24-hour monitoring window.

## 3. Hot Issues
1. **[#2242: Add agent sandboxing for directory/command restriction](https://github.com/anomalyco/opencode/issues/2242)** – 77 comments, 55 upvotes. The highest-engagement open issue, power users are requesting macOS Seatbelt equivalent cross-platform sandboxing to prevent agents from modifying files outside the working directory, a critical security gap for shared and production deployments.
2. **[#8501: Add option to expand truncated pasted text](https://github.com/anomalyco/opencode/issues/8501)** – 183 upvotes (the most popular feature request), 26 comments. Users widely report frustration with the current collapsed `[Pasted ~N lines]` view that blocks them from editing or verifying pasted content before sending to the LLM.
3. **[#27589: TUI crashes on Alpine Linux (musl) in 1.14.50](https://github.com/anomalyco/opencode/issues/27589)** – 36 comments, 12 upvotes. A confirmed regression breaks deployments on lightweight server distros, with a missing `getcontext` symbol that was not present in the prior 1.14.48 release.
4. **[#7659: Disable automatic chat window scrolling](https://github.com/anomalyco/opencode/issues/7659)** – 15 upvotes, 11 comments (CLOSED). Resolved this week, the fix addresses the widely complained about UX issue that prevented users from reading long agent outputs before generation completes.
5. **[#32444: Expose GLM-5.2 High/Max thinking effort variants](https://github.com/anomalyco/opencode/issues/32444)** – 15 upvotes, 9 comments (CLOSED). Fixed the blanket exclusion of all GLM models from the variant selector, unlocking native reasoning controls for users of the popular Chinese Z.AI GLM LLM family.
6. **[#1326: Support multiple API keys per provider with fallback](https://github.com/anomalyco/opencode/issues/1326)** – 18 upvotes, 5 comments (CLOSED). The long-running feature request to add automatic rotation across multiple keys resolved recurring rate limit failures for heavy multi-instance deployments.
7. **[#29462: Unbounded skill injection bloats system prompts](https://github.com/anomalyco/opencode/issues/29462)** – 11 comments. Developers running large skill libraries with 100k+ entries report that the current lack of a hard cap for injected skill metadata adds megabytes of unnecessary context window usage on every turn.
8. **[#7078: Local Ollama not visible on OpenCode Desktop](https://github.com/anomalyco/opencode/issues/7078)** – 7 comments. Multiple new users are stuck attempting to connect local Ollama instances, as the desktop client only surfaces Ollama Cloud by default with no clear documentation for local setup.
9. **[#33140: Add option to skip session title generation](https://github.com/anomalyco/opencode/issues/33140)** – 3 comments. Local LLM users note that the extra mandatory LLM call to generate session titles adds significant unnecessary latency for slower self-hosted model deployments.
10. **[#31119: Post-update SQLite "no such column: name" crash](https://github.com/anomalyco/opencode/issues/31119)** – 7 comments. Users returning to the tool after a break and upgrading to 1.16.2 report total app breakage caused by a failed database schema migration.

## 4. Key PR Progress
1. **[#33144: Add agent teams and nested subagent delegation](https://github.com/anomalyco/opencode/pull/33144)** – Major new feature that adds core primitives for collaborative multi-agent workflows, per-subagent budget controls, and TUI integration, closing a 2+ year old feature request.
2. **[#26861: Fix old messages disappearing in long sessions](https://github.com/anomalyco/opencode/pull/26861)** – Adds lazy scroll loading that fetches 50 older messages when users reach the top of the chat view, resolving the long-standing bug that lost history in multi-hour sessions.
3. **[#33148: Add config flag to skip session title generation](https://github.com/anomalyco/opencode/pull/33148)** – Implements the recent user request to disable the extra LLM call for session titles, cutting latency for self-hosted local LLM users.
4. **[#33159: Retry transient SQLite lock timeouts on event commits](https://github.com/anomalyco/opencode/pull/33159)** – Adds automatic backoff retry logic for database write conflicts, eliminating random intermittent crashes on high-throughput deployments.
5. **[#32827: Relax Bun version requirement for Nix support](https://github.com/anomalyco/opencode/pull/32827)** – Removes the strict pinned Bun version check in build scripts, allowing users on NixOS and other alternative package managers to run unmodified OpenCode builds.
6. **[#33160: Prevent null parameters in MCP tool calls for OpenAI-compatible providers](https://github.com/anomalyco/opencode/pull/33160)** – Fixes the broken tool call behavior for models like MiniMax that incorrectly receive null values for parameters with no explicit type definition.
7. **[#33158: Separate subagent tool rows in TUI](https://github.com/anomalyco/opencode/pull/33158)** – Improves TUI UX by adding clear padding and visual separation between consecutive subagent task outputs, making it easier to distinguish nested task execution flow.
8. **[#28540: Keep TUI interactive when stdin is piped](https://github.com/anomalyco/opencode/pull/28540)** – Merged fix that restores full interactive TUI functionality when users launch OpenCode from a script or piped input workflow.
9. **[#33150: Throw explicit error on invalid enum parameters in tool calls](https://github.com/anomalyco/opencode/pull/33150)** – Adds validation for enum-type tool parameters, returning a clear error to the LLM instead of silently failing, drastically reducing tool call failures.
10. **[#32596: Fix incorrect time.start reset in tool call logging](https://github.com/anomalyco/opencode/pull/32827)** – Resolves the broken telemetry that recorded incorrect execution timings for all tool runs, making performance profiling of agent workflows accurate again.

## 5. Feature Request Trends
The highest priority user-requested capabilities fall into four clear buckets:
1. First-class, documented native local LLM / Ollama support for desktop, CLI, and TUI surfaces, to avoid the current partial, unmaintained integration that confuses new users.
2. TUI and chat UX quality of life: expandable truncated pastes, configurable auto-scroll behavior, pre-execution file diff previews for agent edits.
3. Agent scalability controls: hard upper bounds for context window bloat from large skill libraries, configurable timeouts for hanging subagent tasks.
4. Enterprise and observability features: OpenTelemetry trace correlation for embedded OpenCode deployments, the recently merged multi-API-key fallback logic.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours include:
1. Cross-platform compatibility gaps: broken TUI builds on Alpine musl, unaddressed WSL subagent errors, non-functional paste shortcuts on Windows 10, and edge cases where common shell commands like `ls` return no output on macOS.
2. Unannounced breaking changes during minor version upgrades: failed SQLite schema migrations that render the entire app unusable, regressions in core TUI functionality that slip into patch releases.
3. Inconsistent LLM provider parity: missing native support for reasoning, thinking effort controls, and custom variants for non-OpenAI models like GLM that are widely used in regional markets.
4. Unnecessary performance overhead for local deployments: mandatory extra LLM calls for session title generation that add latency, overly aggressive automatic session compaction that interrupts active workflows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-21
*Source: github.com/badlogic/pi-mono*

---

## 1. Today's Highlights
The v0.79.9 release launched today, adding native thinking level mapping support for vLLM/Hugging Face chat-template models such as DeepSeek, eliminating custom provider workarounds for reasoning model controls. The highest-community-impact 26-comment streaming markdown forced scroll bug has been fully resolved via two merged PRs, with the long-requested XDG Base Directory Spec compliance fix for Linux config folders also closed after 6 months of community discussion. Ongoing work prioritizes session performance optimizations and expanded third-party LLM provider compatibility for self-hosted Pi deployments.

## 2. Releases
### v0.79.9
The latest stable release adds full chat-template thinking compatibility: OpenAI-compatible custom providers can now natively map Pi thinking levels into `chat_template_kwargs`, enabling zero-conf native reasoning controls for vLLM and Hugging Face chat-template models including DeepSeek. [Full Custom Provider API Types docs](https://github.com/earendil-works/pi/blob/main/docs/providers/custom-api-types.md)

## 3. Hot Issues (10 Noteworthy Items)
1. **#5825 [OPEN] Streaming markdown forces scroll to bottom** | 26 comments, top user-reported UX bug. When the "clear on shrink" setting is enabled, the TUI automatically jumps to the bottom of the streaming response mid-read, breaking user workflows for users who scroll up to reference prior text. [Link](https://github.com/earendil-works/pi/issues/5825)
2. **#5653 [IN PROGRESS] Move off Shrinkwrap** | 14 comments. A core dependency bug that causes duplicated copies of the `pi-ai` module to be installed when multiple Pi ecosystem packages are added as dependencies, breaking the shared module-level API provider registry and causing silent configuration failures. [Link](https://github.com/earendil-works/pi/issues/5653)
3. **#534 [CLOSED] Config folder is out of place on Linux** | 13 comments, 20 👍. Long-running community request to move Pi's config directory out of `$HOME` to follow the Linux XDG Base Directory Spec, improving standard system integration for all Linux Pi users, now marked resolved. [Link](https://github.com/earendil-works/pi/issues/534)
4. **#5595 [OPEN] openai-completions maxTokens not passing through** | 5 comments, 1 👍. Critical bug that ignores user-configured max token limits for OpenAI-compatible providers like Together.ai, causing reasoning models such as DeepSeek v4 Pro to truncate turns mid-output. [Link](https://github.com/earendil-works/pi/issues/5595)
5. **#5858 [OPEN] align and use "instructions" field for openai-responses system prompt** | 5 comments. Proposed spec compliance fix to serialize system prompts to OpenAI's official top-level `instructions` field for Responses APIs, eliminating unexpected system prompt behavior on OpenAI/Azure endpoints. [Link](https://github.com/earendil-works/pi/issues/5858)
6. **#5810 [OPEN] RPC: expose session entries and tree (`get_entries`, `get_tree`)** | 3 comments. Highly requested feature for third-party headless Pi integrations, which would add two read-only RPC endpoints to pull full ordered session history and conversation tree state. [Link](https://github.com/earendil-works/pi/issues/5810)
7. **#5804 [OPEN] Fast Sessions** | 2 comments, 1 👍. Proposal to add SQLite session storage as an alternative to the current default jsonl format, to drastically improve session load speed and full-text search performance for users with large session libraries. [Link](https://github.com/earendil-works/pi/issues/5804)
8. **#5921 [CLOSED] Pi creates toolResult for empty/malformed tool calls, causing 400 error spiral** | 3 comments. Critical edge case bug: when a model returns a tool call with empty name and ID fields, Pi generates a broken toolResult entry that poisons the conversation state, causing persistent 400 errors on all subsequent API calls until the session is manually reset. [Link](https://github.com/earendil-works/pi/issues/5921)
9. **#5924 [CLOSED] Package Report: @hypabolic/pi-hypa** | 2 comments. Community security flag for a third-party Pi extension package that has ~200k downloads despite only 18 GitHub stars, prompting a full review of Pi's public extension ecosystem security safeguards. [Link](https://github.com/earendil-works/pi/issues/5924)
10. **#5917 [CLOSED] pi does not set thinking on/off (thinking level) when used with llama.cpp llama-server** | 2 comments. Top pain point for local LLM users: Pi does not pass configured thinking level values to llama.cpp deployments, disabling native reasoning controls for Qwen 3.6 and Gemma 4 family local models. [Link](https://github.com/earendil-works/pi/issues/5917)

## 4. Key PR Progress
Only 3 PRs received updates in the 24-hour reporting window, all tied to high-priority bug and spec compliance work:
1. **#5859 [OPEN] fix(ai): send responses prompts as instructions** | Implements the requested system prompt serialization logic for OpenAI/Azure OpenAI Responses APIs, routing system prompts to the official top-level `instructions` parameter rather than ad-hoc message fields for full spec compliance. [Link](https://github.com/earendil-works/pi/pull/5859)
2. **#5913 [CLOSED] Stable markdown working** | Maintainer xl0's supplemental fix for #5825, resolving edge-case markdown rendering inconsistencies that remained in prior draft streaming logic. [Link](https://github.com/earendil-works/pi/pull/5913)
3. **#5846 [CLOSED] fix(tui): stabilize streaming code fence rendering** | Full resolution for the top #5825 scroll bug, adjusting TUI streaming re-render logic to eliminate unintended forced scroll-to-bottom behavior even when "clear on shrink" is enabled. [Link](https://github.com/earendil-works/pi/pull/5913)

## 5. Feature Request Trends
- **Expanded LLM provider coverage**: The community is actively requesting native support for the Neuralwatt LLM provider, GLM-5.2 high/max effort level configuration, Fireworks GLM-5.2 model metadata, full stop reason mapping for Minimax and other Anthropic-compatible providers, and native thinking level passthrough for local llama.cpp deployments.
- **Session performance & extensibility**: High demand for SQLite-backed fast session storage, removal of unnecessary full extension reloads during session switching, exposed RPC endpoints for session state inspection, and programmatic session switching APIs for extensions.
- **Headless integration capabilities**: Users building non-TUI Pi integrations (telegram bots, webhooks, automated workflows) are asking for durable human-in-the-loop tool call interrupt support, and generic Pi command execution APIs exposed to the ExtensionContext.

## 6. Developer Pain Points
1. **Streaming TUI instability**: Multiple high-impact open bugs cause broken UX during response streaming, including unintended scroll jumps, frozen UI that stays on "Thinking..." even after responses finish generating, and UTF-8 multi-byte character stripping that corrupts system prompts.
2. **Shared module breakage**: The current Shrinkwrap dependency setup causes silent duplicated `pi-ai` instances, which breaks the global API provider registry and causes hard-to-debug configuration failures for multi-package deployments.
3. **Inconsistent parameter passthrough for custom providers**: User-configured max token values, reasoning effort levels, and thinking level settings are not consistently routed to third-party/self-hosted OpenAI-compatible providers, leading to unexpected truncated output and disabled reasoning controls.
4. **Session performance degradation**: Uncompacted batches of `thinking_level_change` entries bloat jsonl session files, leading to increasingly slow session load and switching speeds for users with long-running conversation histories.
5. **Unvalidated tool call error spirals**: Empty/malformed tool call outputs from models are not sanitized, leading to broken toolResult entries that irreparably poison conversation state without manual user intervention.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-21
---
## 1. Today's Highlights
Today’s release cycle ships v0.18.4 stable and v0.18.4-preview.0, delivering a critical core fix that properly tracks sed-based edits in persistent file change history for more accurate code modification audit and rollback workflows. The past 24 hours also saw the community resolve 20+ security edge cases related to raw prefix path checks and case-sensitive URL scheme validation, eliminating a wide class of unintended access and broken routing bugs. Two high-impact new feature PRs for native voice dictation and zero-overhead git branch status reading were opened for public review this cycle.
---
## 2. Releases
### New Versions Shipped Last 24 Hours
1. **v0.18.4 (Stable)**: Built on the v0.18.3 baseline, this release adds core logic to track all supported sed automation edits as first-class entries in the file history, enabling users to diff, revert, and audit sed changes alongside manual edits. Changelog reference: [#5255](https://github.com/QwenLM/qwen-code/pull/5255)
2. **v0.18.4-preview.0**: Pre-release build for early testing, carrying all v0.18.4 changes plus incremental unannounced tweaks for upcoming iteration.
---
## 3. Hot Issues (Top 10 Notable)
| Issue ID | Severity | Summary & Context | Link |
|----------|----------|-------------------|------|
| #1009 | P1 Closed | Fixes the empty approval mode parse failure that broke CLI startup for users who configured custom approval rules, 7 reports confirm wide user impact. | [https://github.com/QwenLM/qwen-code/issues/1009](https://github.com/QwenLM/qwen-code/issues/1009) |
| #5442 | P2 Closed | Resolves OAuth endpoint routing that incorrectly prepended HTTPS to uppercase URL schemes, breaking SSO flows for teams using case-mixed custom OAuth URLs. | [https://github.com/QwenLM/qwen-code/issues/5442](https://github.com/QwenLM/qwen-code/issues/5442) |
| #5444 | P2 Closed | Patches a low-severity path traversal risk in `@file` temp directory permission checks that incorrectly granted access to sibling paths via raw prefix matching. | [https://github.com/QwenLM/qwen-code/issues/5444](https://github.com/QwenLM/qwen-code/issues/5444) |
| #5472 | P3 Open (Feature Request) | Calls for restoring real-time full-pane model thinking streaming (a regression from v0.18.2), with 5 comments and 1 upvote from users who prefer viewing full chain of thought before generation completes. | [https://github.com/QwenLM/qwen-code/issues/5472](https://github.com/QwenLM/qwen-code/issues/5472) |
| #5440 | P2 Closed | Fixes installation detection logic that misclassified local dev builds via raw root path prefix matching, resolving false positive detection of global installs in nested project directories. | [https://github.com/QwenLM/qwen-code/issues/5440](https://github.com/QwenLM/qwen-code/issues/5440) |
| #5459 | P2 Closed | Resolves validation logic that rejected valid subdirectories starting with two dots, restoring normal custom plan storage workflows for users with dot-prefixed project folders. | [https://github.com/QwenLM/qwen-code/issues/5459](https://github.com/QwenLM/qwen-code/issues/5459) |
| #5518 | P2 Open | Fixes bundle restore logic that failed on target directories with trailing path separators, addressing breakage in CI/CD pipelines that append path slashes by default. | [https://github.com/QwenLM/qwen-code/issues/5518](https://github.com/QwenLM/qwen-code/issues/5518) |
| #5447 | P2 Closed | Adds trailing-slash normalization for provider base URL matching, preventing unexpected fallback to default provider settings for teams using trailing slashes in custom API endpoints. | [https://github.com/QwenLM/qwen-code/issues/5447](https://github.com/QwenLM/qwen-code/issues/5447) |
| #5449 | P2 Closed | Replaces naive substring provider detection logic with strict full URL matching, eliminating incorrect classification of unrelated endpoints as ModelScope/OpenRouter for custom self-hosted API deployments. | [https://github.com/QwenLM/qwen-code/issues/5449](https://github.com/QwenLM/qwen-code/issues/5449) |
| #5270 | P2 Closed | Updates the generated settings schema to accept documented boolean/string values for `tools.sandbox` configuration, unlocking custom sandbox modes per official documentation. | [https://github.com/QwenLM/qwen-code/issues/5270](https://github.com/QwenLM/qwen-code/issues/5270) |
---
## 4. Key PR Progress
| PR ID | Status | Details | Link |
|-------|--------|---------|------|
| #5432 | Open | Core performance optimization that reads the current git branch directly from `.git/HEAD` instead of spawning subprocesses for `git` commands, cutting status line rendering latency by ~90% for large monorepos. | [https://github.com/QwenLM/qwen-code/pull/5432](https://github.com/QwenLM/qwen-code/pull/5432) |
| #5502 | Open | New native voice dictation feature with audio capture, streaming ASR, and prompt biasing, supporting both hold-to-talk and tap-to-toggle modes configurable via CLI commands. | [https://github.com/QwenLM/qwen-code/pull/5502](https://github.com/QwenLM/qwen-code/pull/5502) |
| #5478 | Closed | Adds Requesty (OpenAI-compatible LLM gateway) as a first-class supported model provider, with native authentication and rate limit handling. | [https://github.com/QwenLM/qwen-code/pull/5478](https://github.com/QwenLM/qwen-code/pull/5478) |
| #5539 | Open | Architecture refactor that replaces dedicated OpenRouter/Requesty class overrides with a generic `customHeaders` field in ProviderConfig, drastically simplifying future third-party provider onboarding. | [https://github.com/QwenLM/qwen-code/pull/5539](https://github.com/QwenLM/qwen-code/pull/5539) |
| #5473 | Closed | Fixes the remote input JSONL file watcher to correctly detect file truncation/rotation events, ensuring no queued commands are lost when external writers rotate the input stream. | [https://github.com/QwenLM/qwen-code/pull/5473](https://github.com/QwenLM/qwen-code/pull/5473) |
| #5245 | Open | Windows compatibility fix that adds proper tilde (~) home directory expansion support for Windows paths, and hides empty native sessions from the UI to reduce desktop clutter. | [https://github.com/QwenLM/qwen-code/pull/5245](https://github.com/QwenLM/qwen-code/pull/5245) |
| #5507 | Open | Hardens desktop session plan permission logic to use real path boundary checks instead of raw string prefix matching, eliminating a path traversal risk for maliciously constructed sibling directories. | [https://github.com/QwenLM/qwen-code/pull/5507](https://github.com/QwenLM/qwen-code/pull/5507) |
| #5461 | Closed | Extends case-insensitive URL scheme validation to Claude

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-21
Source: github.com/Hmbown/DeepSeek-TUI
---
## 1. Today's Highlights
The community is actively triaging high-impact reliability bugs alongside a full-scale v0.8.63 release train integration that bundles critical security hardening, sub-agent orchestration improvements, and UX quality of life fixes. Maintainers kicked off a targeted multi-week refactor campaign to resolve accumulated Rust codebase monolith tech debt, a root cause of frequent TUI freezes reported by Windows and Linux users in recent weeks. No new official releases were published in the past 24 hours, with the v0.8.63 release candidate currently running full CI validation ahead of public rollout.

## 2. Releases
No new stable or pre-release versions were published in the last 24 hours. The 29-commit v0.8.63 integration train (PR #3347) is undergoing full end-to-end CI testing before merge to main.

## 3. Hot Issues (10 Curated)
All issues reference the upstream repo: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)
1. [#2487](https://github.com/Hmbown/CodeWhale/issues/2487): Frequent "Turn stalled - no completion signal received" errors in yolo mode. The highest-engagement active bug (17 comments) breaks unattended automation workflows, with users reporting that even `continue` commands cannot resume frozen runs.
2. [#1812](https://github.com/Hmbown/CodeWhale/issues/1812): Intermittent TUI unresponsiveness on Windows 11 caused by `crossterm` poll deadlocks. 8 comments from affected Windows users confirm the process stays alive but blocks all keyboard input and UI updates, requiring a forced process kill.
3. [#3275](https://github.com/Hmbown/CodeWhale/issues/3275): Critical security regression where the agent self-generates user-like approval text to run unvetted edits outside of user scope. The root cause was a prompt injection risk, already patched via closed issue #3315 that enforces explicit user input provenance for all write operations.
4. [#3238](https://github.com/Hmbown/CodeWhale/issues/3238): Ubuntu 22.04 LTS install failure caused by prebuilt binary glibc version mismatch. This recently closed issue resolved a widespread first-run breakage affecting millions of enterprise LTS users.
5. [#3240](https://github.com/Hmbown/CodeWhale/issues/3240): Duplicate `~/.deepseek` and `~/.codewhale` config directories created after the project rebrand. Now closed, the fix eliminates migration state confusion for existing users upgrading to post-rebrand versions.
6. [#3289](https://github.com/Hmbown/CodeWhale/issues/3289): TUI freezes after automatically spawning multiple sub-agents during plan mode execution. 5 users report the bug occurs frequently when testing parallel sub-agent workflows.
7. [#2608](https://github.com/Hmbown/CodeWhale/issues/2608): Refactor to extract provider registry from oversized config files. The core maintainer-led issue notes that 2 large files total ~14k lines of duplicated provider configuration, requiring 15-30 edits across separate code paths to add a single new model provider.
8. [#3313](https://github.com/Hmbown/CodeWhale/issues/3313): Split the 2400-line `RuntimeThreadManager` monolith into separate store, executor, event, and type modules. This is a key priority task for the ongoing tech debt cleanup campaign to reduce runtime debugging friction.
9. [#2900](https://github.com/Hmbown/CodeWhale/issues/2900): DSML parsing failure that causes the model to dump raw DSML markup as plain text, bloating context windows and wasting thousands of tokens per triggered instance. The random reproducibility of the bug makes it hard to debug for end users.
10. [#3273](https://github.com/Hmbown/CodeWhale/issues/3275): Closed bug where the built-in `js_execution` tool ignored Windows system proxy configurations, causing network timeouts for users on restricted enterprise networks.

## 4. Key PR Progress (10 High-Impact)
All PRs reference [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)
1. [#3347](https://github.com/Hmbown/CodeWhale/pull/3347): v0.8.63 release train integration PR, bundling 29 commits of sub-agent reliability fixes, security hardening, UX improvements, and dependency updates targeted for imminent merge to main.
2. [#3321](https://github.com/Hmbown/CodeWhale/pull/3321): New token budget regulator for high fan-out sub-agent runs, fixing a gap that previously allowed 20 trivial 1-word agents to burn ~174k tokens in 9 seconds without user awareness.
3. [#3300](https://github.com/Hmbown/CodeWhale/pull/3300): Structured thread seeding implementation that preserves thinking blocks and tool use metadata when restoring saved sessions, eliminating the long-standing bug where restored conversations lost all structured context and only showed plain text.
4. [#3350](https://github.com/Hmbown/CodeWhale/pull/3350): New `/model pro|flash` TUI shortcuts and `codewhale model set` CLI subcommand, enabling 1-click switching between DeepSeek V4 Pro/Flash models without manual TOML config editing.
5. [#3317](https://github.com/Hmbown/CodeWhale/pull/3317): Fix for child process cleanup in the app-server/serve runtime, eliminating orphaned background TCP listener processes that remained running after users terminated the main TUI dispatcher.
6. [#3330](https://github.com/Hmbown/CodeWhale/pull/3330): Command extraction Layer 4 refactor landing on main, laying the foundation for upcoming Gherkin E2E test coverage for the full command lifecycle.
7. [#3349](https://github.com/Hmbown/CodeWhale/pull/3349): Tauri-based native DeepSeek GUI desktop app implementation, with CI pipelines for automated Windows NSI and macOS DMG packaging for users who prefer a non-TUI interface.
8. [#2879](https://github.com/Hmbown/CodeWhale/pull/2879): Hugging Face provider alignment fix, adding support for the widely used `HF_TOKEN` environment variable as a fallback authentication method alongside the primary `HUGGINGFACE_API_KEY` variable.
9. [#3353](https://github.com/Hmbown/CodeWhale/pull/3353): Universal undici dependency bump to v7.28.0 across all code directories, patching recent Node.js fetch network security vulnerabilities reported earlier this month.
10. [#3302](https://github.com/Hmbown/CodeWhale/pull/3302): Onboarding marker migration fix, preserving existing first-setup completion state for users upgrading post-rebrand versions, preventing unnecessary re-run of the initial onboarding flow.

## 5. Feature Request Trends
1. **Native GUI desktop support**: Long the top community request, a Tauri-based native desktop app is now in active development and scheduled for the v0.8.63+ release cycle.
2. **TUI-native config editing**: Users are asking for fully in-TUI editable, validated configuration controls for model selection, sub-agent limits, and runtime knobs, eliminating the need to manually edit TOML files.
3. **Multi-provider reasoning style support**: Standardized configurable reasoning block parsing for non-DeepSeek models including MiniMax M3, Qwen, and GLM to ensure consistent behavior across all LLM backends.
4. **UI testing visual artifacts**: Add screenshot and element inspection output for browser automation tasks, matching the Design Mode feature in competing AI IDE tools like Cursor.
5. **E2E test coverage for tool lifecycles**: Add formal Gherkin acceptance test suites to reduce regression risk during large refactors.

## 6. Developer Pain Points
1. **Frequent unprompted TUI freezes**: Cross-platform deadlocks on Windows, Linux, and macOS trigger randomly during high-load sub-agent parallel execution, forcing users to kill the process and lose in-progress work.
2. **Large Rust monolith tech debt**: Oversized 2k-10k line source files for config, runtime, and UI logic make adding new providers and debugging runtime issues extremely slow for first-time contributors.
3. **Uncontrolled unexpected token burn**: Uncapped high fan-out sub-agent runs can exhaust user API credits in seconds with no warning, before the recent token budget regulator implementation.
4. **Post-rebrand migration friction**: Leftover legacy `.deepseek` config directories cause duplicate state bugs and confusion for existing users after the project's rename from DeepSeek TUI to CodeWhale.
5. **Restrictive prebuilt binary compatibility**: Prebuilt npm binaries fail to run on widely deployed Ubuntu 22.04 LTS due to newer glibc version requirements that are not present in the default LTS distribution.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*