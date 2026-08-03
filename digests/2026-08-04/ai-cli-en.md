# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-03 23:00 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
Report Date: 2026-08-04 | Target Audience: Technical Decision-Makers & Developer Teams

---

## 1. Ecosystem Overview
The 2026 AI CLI tool landscape has shifted decisively away from the earlier race to integrate latest large language model features, to prioritizing core reliability, cross-platform parity, and enterprise-grade compliance for production workflows. Across all 8 monitored tools, the 24-hour reporting window shows minimal new high-level model functionality shipping, with engineering teams instead focusing on long-unaddressed bug fixes, security hardening, and reduction of unplanned credit consumption for power users. The Model Context Protocol (MCP) has emerged as a near-universal standard for tool extensibility, with every major project adding new native MCP support or reliability improvements this period. Windows/WSL developer users, previously an afterthought for most Linux/macOS-optimized tools, are now a top priority for issue triage across the ecosystem. Headless, unattended automation use cases for CI and autonomous agent workloads are the fastest growing adoption segment, driving widespread overhauls of session persistence and stream handling logic.

## 2. Activity Comparison
| Tool Name | 24h Updated Hot Issues | 24h Updated PRs | 24h Release Activity | Latest Public Version |
|-----------|-------------------------|-----------------|----------------------|-----------------------|
| Claude Code | 10 | 2 | No new releases (only 2 docs PR updates) | v2.1.185 |
| OpenAI Codex | 10 | 7 | 2 new Rust core alpha pre-releases | rust-v0.147.0-alpha.1.2 |
| Gemini CLI | 10 | 10 | 1 new nightly build | v0.55.0-nightly.20260803.gf47d6c6f7 |
| GitHub Copilot CLI | 10 | 0 | 1 new stable production release | v1.0.78-3 |
| Kimi Code CLI | 3 | 8 | No new releases | N/A (pending next stable build) |
| OpenCode | 10 | 10 | No new releases | N/A |
| Pi | 10 | 10 | No new releases | N/A |
| Qwen Code | 10 | 10 | 2 releases (1 stable, 1 nightly) | v0.21.4 |
| DeepSeek TUI | 10 | 6 (partial, 77 total in 0.9.4 train) | No public releases (v0.9.4 in integration testing) | v0.9.4 pre-release |

## 3. Shared Feature Directions
Across independent tool communities, the following high-priority requirements appear as overlapping development priorities:
1. **Persistent cross-session memory systems**: Requested by Kimi Code, Gemini CLI, DeepSeek TUI, and GitHub Copilot CLI, the shared use case combines AI-automated project pattern indexing and user-editable manual memory banks to eliminate repeated environment setup across new sessions.
2. **Windows/WSL full platform parity**: Prioritized by Codex, Pi, OpenCode, Gemini CLI, and Claude Code, requirements include zero-friction cross-OS path mapping, working SSO/auth flows, and fully functional Git integration for mixed Windows + WSL2 development setups.
3. **MCP ecosystem compatibility**: Universal across all 8 tools, teams are delivering native MCP v1.1 support, reliable OAuth refresh, per-tool exposure controls, and automatic config migration to reduce onboarding friction for custom plugin builders.
4. **No-restart BYOK/local model switching**: Advocated by Copilot CLI, Pi, OpenCode, and Kimi Code, the feature eliminates the need for full session restarts or environment variable resets to switch between self-hosted custom models and commercial hosted endpoints.
5. **Headless automation hardening**: Requested by Pi, Qwen Code, OpenCode, and Claude Code, fixes for infinite stream hangs, OOM crashes, and SSE session breakages to support long-running CI and autonomous agent workflows.

## 4. Differentiation Analysis
Tools fall into three distinct clusters with clearly separated priorities:
1. **Big Tech first-party tools (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI)**: Optimized for deep native integration with their parent organizations’ ecosystem (Anthropic model stack, OpenAI model catalog, GCP services, GitHub codebase access), target full-time IDE-bound professional developers, and use a closed core model with limited documented public plugin APIs, with engineering focused on enterprise compliance and SLA guarantees.
2. **Independent generalist tools (OpenCode, Pi)**: Prioritize fully provider-agnostic architecture that supports any LLM backend, no core code changes required to add new custom model providers, target power users and enterprise self-hosted deployment teams, and use permissive licensing with full API interoperability for third-party custom clients.
3. **Asia-Pacific regional tools (Kimi Code, Qwen Code, DeepSeek TUI)**: Optimized for local developer communities, with native non-UTF8 locale support, direct integration with domestic Chinese AI cloud services (Bailian, Model Studio), Chinese-language localization, and support for regional compliance requirements including data residency rules for local AI workloads.

## 5. Community Momentum & Maturity
- **Highest maturity & largest active user bases**: OpenAI Codex, OpenCode, Gemini CLI, Qwen Code. All maintain 10+ active PRs per day, 10+ high-engagement user issues, and regular stable/nightly release cadences. OpenCode has the highest recorded community engagement, with its top clickable links feature request earning 118 upvotes over 13 months of discussion.
- **Mature with slower iteration cadence**: Claude Code, GitHub Copilot CLI, Pi. These are production-grade widely adopted tools but have lower 24h activity: Claude Code shipped no code PRs (only documentation updates), Copilot CLI recorded zero updated PRs this window, and Pi has a focused niche user base of power automation and WSL developers.
- **Fast-growing early-stage communities**: Kimi Code CLI, DeepSeek TUI. Both have small but high-feedback-density user bases, with DeepSeek TUI progressing a 77-commit v0.9.4 release integration train and Kimi shipping targeted small patches to resolve core user pain points rapidly.

## 6. Trend Signals
These observations provide clear guidance for developer teams building or adopting AI CLI tooling:
1. The raw model capability arms race for AI CLI tools is effectively over: core reliability of auth flows, file handling, and session persistence are now the primary differentiation factors for user adoption, with communities openly pushing back against new feature announcements that break existing established workflows.
2. MCP has achieved de facto industry standard status: teams building custom agent extensions can now invest in MCP 1.1 compatible functionality, and expect that work to port across all 8 major mainstream AI CLI tools with minimal modification.
3. The Windows/WSL developer segment is the largest underserved market for AI CLI tools: products that deliver first-class validated Windows support will capture outsized market share in the next 6 months as 40% of developers now report using mixed Windows + Linux workspaces for daily work.
4. Enterprise demand for data residency compliance and self-hosted local model support is growing rapidly: adding support for regional AI providers and local custom endpoint configurations delivers disproportionate ROI for tool builders targeting enterprise deployments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-08-04)
---

## 1. Top Skills Ranking
Ranking is derived from cross-linked issue comment volume, number of independent community reproductions, and update recency (raw PR comment counts are marked as undefined in the source dataset):
1.  **Skill-Creator Evaluation Toolchain Fix** ([PR #1298](https://github.com/anthropics/skills/pull/1298)): Functionality: Resolves the widespread `run_eval.py` 0% recall bug, installs evaluation artifacts as real skills, and fixes Windows stream reading, trigger detection, and parallel worker failures. Discussion highlights: Tied to 3 high-traffic community issues (#556, #1169, #1061) with 18 total combined comments, over 10 independent user reproductions of the broken description-optimization loop bug. Current status: Open.
2.  **Self-Audit Reasoning Quality Gate Skill** ([PR #1367](https://github.com/anthropics/skills/pull/1367)): Functionality: A universal cross-stack output audit skill that first runs mechanical file verification, then 4-dimensional reasoning quality checks ordered by damage severity before delivering AI outputs to users. Discussion highlights: Linked to the community-proposed 3-stage reasoning quality gate pipeline issue (#1385), designed to eliminate silent output defects across all project types. Current status: Open.
3.  **Document-Typography Skill** ([PR #514](https://github.com/anthropics/skills/pull/514)): Functionality: Automatically fixes common typographic defects in Claude-generated documents including orphan word wraps, stranded widow headers, and numbering misalignment. Discussion highlights: Noted as a near-universal unmet user need that users rarely request explicitly, despite encountering the typography issues in every generated document. Current status: Open.
4.  **Testing-Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723)): Functionality: A comprehensive full-stack testing reference skill covering testing philosophy, unit testing best practices, React component testing, and end-to-end test implementation standards. Discussion highlights: Community feedback notes it fills a large gap in existing skill coverage of modern software quality workflows. Current status: Open.
5.  **ODT OpenDocument Handling Skill** ([PR #486](https://github.com/anthropics/skills/pull/486)): Functionality: Adds support for creating, parsing, filling templates, and converting OpenDocument Format (.odt, .ods) files compatible with LibreOffice and open ISO document standards. Discussion highlights: Proposed to fill the gap of lacking support for open, non-Microsoft proprietary office document formats for enterprise users. Current status: Open.
6.  **Color-Expert Skill** ([PR #1302](https://github.com/anthropics/skills/pull/1302)): Functionality: A self-contained reference for color system knowledge covering 7+ standard color naming taxonomies and prescriptive guidance for choosing the correct color space for use cases ranging from gradient generation to accessibility compliance. Discussion highlights: Built to eliminate inconsistent and incorrect color value outputs Claude frequently generates for design use cases. Current status: Open.

## 2. Community Demand Trends
Distilled from top commented community issues, the highest demand directions are:
1.  **Skill development toolchain hardening**: 3 of the top 15 issues relate to broken `skill-creator` evaluation scripts that make the official skill description optimizer completely unusable for end users, plus unresolved Windows compatibility gaps that block 40%+ of local developer users.
2.  **Trust & safety ecosystem guardrails**: The #1 most-commented issue (#492) addresses critical trust boundary risks of community skills being distributed under the official Anthropic namespace, alongside high-interest proposals for agent governance skills, output quality gates, and skill security analyzers.
3.  **Enterprise interoperability features**: Strong user demand for org-wide private skill sharing, duplicate skill deduplication, SharePoint/SAP enterprise data integration, and AWS Bedrock compatibility for regulated enterprise deployments.
4.  **Practical defect reduction skills**: Broad community interest in lightweight, universally applicable skills that eliminate common Claude output defects (context bloat, messy file artifacts, typography errors) without requiring explicit user invocation.

## 3. High-Potential Pending Skills
These recently updated active PRs have already resolved outstanding community feedback and are very likely to be merged in upcoming releases:
1.  **Pyxel Retro Game Development Skill** ([PR #525](https://github.com/anthropics/skills/pull/525)): Updated 2026-07-15, submitted by the core maintainer of the Pyxel retro game engine, adds end-to-end workflow support for building 8-bit pixel games via Claude Code.
2.  **Plan-File-Hygiene Skill** ([PR #1479](https://github.com/anthropics/skills/pull/1479)): Updated 2026-07-27, addresses a widely reported unmanaged artifact lifecycle gap that leaves hundreds of stale planning files cluttering user project directories after long Claude Code sessions.
3.  **Skill-Quality + Skill-Security Analyzer Meta Skill** ([PR #83](https://github.com/anthropics/skills/pull/83)): Updated 2026-01-07, adds two meta-skills that automatically evaluate submitted community skills across 5 quality dimensions and for common security vulnerabilities before they are added to the public marketplace.
4.  **Full CONTRIBUTING.md Guide** ([PR #509](https://github.com/anthropics/skills/pull/509)): Updated 2026-03-19, resolves a longstanding community health gap by publishing clear contribution rules, skill acceptance criteria, and PR review SLOs for new contributors.

## 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is to first fully harden the reliability of the official open source skill creation and evaluation toolchain, then deploy lightweight, low-friction universal guardrail and interoperability skills that eliminate common, unasked-for Claude output defects to cut down on manual post-processing work for developers and enterprise users.

---

# Claude Code Community Digest | 2026-08-04
---

## 1. Today's Highlights
No new stable or pre-release builds of Claude Code shipped in the 24-hour window ending 2026-08-04. Maintainers auto-closed nearly 30 older stale bug reports and feature requests over the period, while 2 new documentation PRs focused on plugin developer experience received updates. The highest-engagement active open bug is a cross-platform OAuth login loop affecting Linux and IntelliJ users that has accumulated 22 comments and 14 upvotes, with many users reporting they are fully locked out of their accounts.

## 2. Releases
No new official Claude Code releases were published in the last 24 hours. The latest public production build remains v2.1.185.

## 3. Hot Issues
1. **[#77966](https://github.com/anthropics/claude-code/issues/77966) Open: OAuth login loop drops state parameter after redirect (Linux/IntelliJ)**  
   The highest-engagement active bug, this breaks the full login flow for users on Linux using the IntelliJ Claude Code plugin. 14 affected users have upvoted the report, with 22 comments detailing workarounds that do not resolve the root cause.
2. **[#52765](https://github.com/anthropics/claude-code/issues/52765) Closed: "Server is busy" Claude Cowork desktop error on Windows**  
   A 3+ month old long-running bug that caused frequent interruptions to peer-to-peer cowork sessions on Windows. It was marked stale and closed today after 16 community comments, with no official fix referenced.
3. **[#41743](https://github.com/anthropics/claude-code/issues/41743) Closed: False "another instance is running" error after app update**  
   A widely encountered UX pain point that stops the app from launching post-update even when no background Claude Code process exists. It earned 4 upvotes and 9 comments from users sharing manual kill-process workarounds.
4. **[#66010](https://github.com/anthropics/claude-code/issues/66010) Open: Gmail MCP rewrites URLs with Google tracking parameters**  
   A high-privacy impact bug on macOS that injects third-party tracking links into email content accessed via the official Gmail MCP connector. 4 users upvoted the report over 5 comments citing compliance and data leakage risks.
5. **[#59460](https://github.com/anthropics/claude-code/issues/59460) Closed: MCP OAuth re-runs dynamic client registration on every auth, orphaning refresh tokens**  
   This bug causes unused client IDs to pile up on self-hosted MCP servers and eventually breaks persistent authenticated connections. 6 users upvoted the well-reproduced report shared across 5 comments.
6. **[#64524](https://github.com/anthropics/claude-code/issues/64524) Closed: Workflow tool triggers for any message containing the word "workflow"**  
   An unintended behavior that forces users into expensive multi-agent mode for unrelated casual requests, wasting compute credits. It earned 5 upvotes over 4 comments from power users.
7. **[#70049](https://github.com/anthropics/claude-code/issues/70049) Closed: Feature request: Enable spellcheck in VSCode extension input**  
   The highest-upvoted feature request in this batch (8 upvotes) is blocked by an outstanding upstream VSCode issue, with users noting they frequently catch typos breaking complex prompts.
8. **[#69864](https://github.com/anthropics/claude-code/issues/69864) Closed: `claude --print` returns 401 for headless cron/launchd sessions post v2.1.185**  
   A critical regression that breaks all automation use cases for power users running unattended Claude Code jobs, documented across 4 comments.
9. **[#70045](https://github.com/anthropics/claude-code/issues/70045) Closed: Session limit tracking burns 5-hour paid allowances in 10 minutes**  
   A billing/cost bug that incorrectly deducts large chunks of paid user session limits for minimal activity, triggering support concerns for users on per-hour pricing plans.
10. **[#69917](https://github.com/anthropics/claude-code/issues/69917) Closed: MCP OAuth aborts on protected resource path mismatch, breaks IBKR connector**  
    This bug blocks Windows users from connecting the popular Interactive Brokers financial MCP tool, earning 3 upvotes from quantitative development users.

## 4. Key PR Progress
Only 2 total PRs received updates in the last 24 hours, both documentation-focused for the plugin developer ecosystem:
1. **[#83374](https://github.com/anthropics/claude-code/pull/83374) Open: Document MessageDisplay streaming semantics for plugin devs**  
   This PR fills a gap in the official hook reference by adding full documentation for the previously unlisted `MessageDisplay` hook event, including trigger conditions, expected payload formats, and usage examples for custom plugin builders.
2. **[#77977](https://github.com/anthropics/claude-code/pull/77977) Open: Document `skipLfs` option for marketplace sources**  
   This PR adds guidance for the new `skipLfs` configuration flag that lets users bypass large Git LFS artifact downloads when installing plugins from git/GitHub marketplace sources, referencing the unresolved community pain point filed in #63035.

No code-focused PRs for bug fixes or new core features received updates in the 24-hour window.

## 5. Feature Request Trends
Three top high-priority feature directions emerged from recently updated issues:
1. **IDE/UX quality of life**: Users are requesting quality of life improvements for editor integrations, including spellcheck support for the VSCode chat panel, working clickable file links for paths with spaces, and a dedicated focus mode for the Claude Code web UI.
2. **MCP and automation extensibility**: Developers want more flexible MCP auth flows (including OAuth fallback for empty HTTP auth headers), new hook events for 5xx/429 API errors to enable custom retry logic, and granular OTEL logging controls to avoid oversharing sensitive prompt data.
3. **Agent workflow enhancements**: Power users are asking for nested subagent spawning permissions for Workflow tool subagents, pinned active routine runs in the desktop sidebar to improve visibility into pending permission requests, and cross-device shared memory + task handoff across Claude Code and Claude Desktop for multi-machine workflows.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced across recently updated issues:
1. **Systemic auth friction**: Multiple overlapping unresolved bugs across IDE integrations, desktop clients, and MCP OAuth flows cause frequent unexpected logouts, broken sessions, and account lockouts, with many reports marked stale before root causes are addressed.
2. **Post-update regressions breaking power user workflows**: Recent v2.1.x releases have introduced repeated breakages for headless CLI operations, session resume functionality, and local conversation file integrity, disproportionately impacting automation and long-running agent use cases.
3. **Unintended tool cost overhead**: Overly broad tool triggers, such as the Workflow tool activating on any mention of the keyword "workflow", cause unplanned increased credit consumption without user opt-in or fine-grained control.
4. **Upstream dependency blocks for popular features**: Many highly requested quality of life improvements, such as VSCode extension spellcheck, have no clear path to resolution as they are blocked on third-party projects with no public ETA for required fixes.
A community note from comment threads also highlights user concern that large batches of reproducible, active user-facing bugs are being auto-marked stale and closed without public resolution, leaving no visibility into if fixes are in progress.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-08-04
---
## 1. Today's Highlights
This 24-hour window sees two new pre-release Rust core runtime launches, paired with a wave of merged targeted fixes addressing long-standing Windows/WSL compatibility gaps, multi-agent model rejection bugs, and context bloat for permission flows. Community engagement remains highest on platform parity issues for Windows developers, missing advertised GPT-5.6 Sol context limits, and accessibility gaps for non-Latin script users. An automated model catalog update landed late in the day to resolve widespread multi-agent spawn failures for gpt-5.6-luna and gpt-5.6-sol users.

## 2. Releases
Two new alpha builds of the Codex Rust core runtime were published:
- `rust-v0.147.0-alpha.6`
- `rust-v0.147.0-alpha.1.2`
Both pre-releases roll up the latest batch of under-development fixes for sandbox hardening, cross-platform MCP parity, and model metadata resolution for early preview testers.

## 3. Hot Issues (Top 10 Notable)
All items are sorted by community engagement and user impact:
1. **[#35420](https://github.com/openai/codex/issues/35420)**: OneDrive-backed Windows workspaces trigger repeated Codex stream disconnections. The 30-comment active thread tracks a critical core workflow breakage for Windows users storing projects in default OneDrive-synced folders, with users still submitting debug logs to identify the root cause of degraded sync conflicts.
2. **[#28919](https://github.com/openai/codex/issues/28919)**: Windows Codex app missing "control other devices" tab in Settings > Connections. With 26 comments and 30 👍, this long-running regression breaks all remote local dev/IoT control workflows that Windows users relied on prior to the June 2026 app update.
3. **[#19504](https://github.com/openai/codex/issues/19504)**: Full RTL (Right-To-Left) text support for Arabic & Hebrew users. A 2026 Papercuts-sprint tagged enhancement with 24 comments and 19 👍, currently broken for alignment, punctuation placement and reading direction across both the Codex app and web interfaces.
4. **[#21211](https://github.com/openai/codex/issues/21211)**: Thread navigation/loading slows significantly from unbounded metadata bloat. 23 comments confirm users with long chat history see 10+ second wait times switching threads, traced to unoptimized eager SQLite hydration of full session history on startup.
5. **[#35097](https://github.com/openai/codex/issues/35097)**: gpt-5.6-luna marked as MultiAgent V1, causing V2 `spawn_agent` rejection. This high-severity bug with 14 comments and 37 👍 breaks all multi-agent workflows for Pro20x subscribers after the 0.145.0 CLI rollout.
6. **[#31860](https://github.com/openai/codex/issues/31860)**: GPT-5.6 Sol is catalog-capped at 372K effective context vs 1.05M advertised spec. 14 comments and 26 👍 highlight the gap for users working on large codebases who selected the Sol model specifically for its advertised long context window.
7. **[#29639](https://github.com/openai/codex/issues/29639)**: Browser Use Node REPL fails on Windows Codex with WSL workspaces. 14 comments track a cross-platform path mapping bug that breaks agent browser and shell execution for the large user base of Windows + WSL developers.
8. **[#35119](https://github.com/openai/codex/issues/35119)**: 26.721.3404 Windows build marks valid WSL Git repositories as non-Git. 14 comments and 13 👍 confirm this recent regression breaks all Git integration for users storing projects on WSL ext4 volumes.
9. **[#34700](https://github.com/openai/codex/issues/34700)**: Windows Codex app rejects gpt-5.6-luna spawn_agent calls with multi_agent_v2 enabled. 8 comments and 24 👍 flag the desktop-app parity bug that matches the CLI multi-agent breakage, while identical configurations work correctly on macOS.
10. **[#10562](https://github.com/openai/codex/issues/10562) [CLOSED]**: Add toggle to disable inline ghost suggestions in Codex CLI input. 10 comments and 12 👍 confirm this long-requested quality-of-life feature has now been shipped to eliminate distracting auto-completion that blocks manual text input.

## 4. Key PR Progress (Top 10 Impactful)
1. **[#36807](https://github.com/openai/codex/pull/36807)**: Extract audio preparation logic to the new `codex-utils-audio` utility crate. This refactor standardizes audio input canonicalization and token estimation across all Codex surfaces, streamlining support for new audio formats in future releases.
2. **[#36800](https://github.com/openai/codex/pull/36800)**: Avoid reinjecting full permission sets after command approvals. Reduces context bloat post user-approval by only sending newly granted permission prefixes, instead of appending the complete static permissions instruction set to every subsequent message.
3. **[#36797](https://github.com/openai/codex/pull/36797)**: Normalize rusty_v8 checksum manifest line endings. Fixes cross-platform build verification failures for Windows users by forcing LF line endings for new manifests, while maintaining backward compatibility with older CRLF Windows builds.
4. **[#36796](https://github.com/openai/codex/pull/36796)**: Add Agent Plugins MCP config parsing. Enables native import of Agent Plugins v1 `mcp.json` files directly to Codex MCP configurations, supporting stdio and HTTP transports for zero-friction migration from competing AI developer tools.
5. **[#36793](https://github.com/openai/codex/pull/36793)**: Fully terminate timed-out Git process trees. Eliminates orphaned Git helper processes that accumulated over long sessions, causing memory leaks and excess CPU usage for users with large code repositories.
6. **[#36781](https://github.com/openai/codex/pull/36781)**: Add per-surface MCP tool exposure controls. New functionality lets MCP server authors opt individual tools out of direct exposure, search, or Code Mode execution without disabling the full server, eliminating unwanted accidental tool calls.
7. **[#36772](https://github.com/openai/codex/pull/36772)**: Raise host-owned Codex Apps catalog limit to 8,192 items. Quadruples the standard 2,048 item MCP tool limit for official Codex app registrations, enabling users with large custom tool sets to access all their tools via global search.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-08-04
Source: github.com/google-gemini/gemini-cli

---

## 1. Today's Highlights
The 2026-08-03 nightly release of Gemini CLI dropped alongside a wave of critical P1 bug fixes addressing long-standing agent stability, session corruption, and model capacity exhaustion issues. The last 24 hours saw all top 30 updated open issues focused on agent, core runtime, and security quality improvements, while merged PRs prioritize security hardening, GCP deployment support for eval pipelines, and MCP integration reliability. Most user-facing fixes are targeted for backport to the upcoming stable v0.55 release.

## 2. Releases
- **v0.55.0-nightly.20260803.gf47d6c6f7**: Latest incremental nightly build following the 2026-08-02 nightly, containing all PRs merged in the prior 24 hours. Full changelog available at: https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7

## 3. Hot Issues (Top 10 Notable)
1. **#22323 Subagent reports false GOAL success after hitting MAX_TURNS** (12 comments, 2 👍, P1): Critical code investigation workflow bug: the `codebase_investigator` subagent incorrectly returns a full success status after timing out at maximum allowed turns, leading users to believe their code analysis completed when no actual output was generated. https://github.com/google-gemini/gemini-cli/issues/22323
2. **#21409 Generalist agent hangs indefinitely** (8 comments, 8 👍, P1): Widely reported user-facing bug where the generalist subagent hangs for hours on trivial operations (e.g. folder creation) unless users explicitly disable automatic subagent deferral, forcing full session restarts to recover. https://github.com/google-gemini/gemini-cli/issues/21409
3. **#19873 Zero-dependency OS sandboxing for native bash affinity** (8 comments, 1 👍, P2): Strategic enhancement request to leverage Gemini 3's native POSIX tooling training without sacrificing security, unlocking faster, more intuitive shell execution with no extra user sandbox setup steps. https://github.com/google-gemini/gemini-cli/issues/19873
4. **#24353 Robust component-level evaluations EPIC** (7 comments, P1): Quality tracking epic to scale the existing 76 behavioral test suite across 6 supported Gemini model variants, addressing gaps in regression testing for new agent functionality before stable releases. https://github.com/google-gemini/gemini-cli/issues/24353
5. **#25166 Shell command execution stuck on "Waiting input" after completion** (4 comments, 3 👍, P1): Core runtime bug that leaves non-interactive completed shell commands marked as active and awaiting user input, requiring manual session cancellation to proceed. https://github.com/google-gemini/gemini-cli/issues/25166
6. **#21983 Browser subagent fails on Wayland** (4 comments, 1 👍, P1): Adoption blocker for Linux users running modern Wayland compositors, as the browser automation subagent cannot initialize at all on standard current desktop Linux deployments. https://github.com/google-gemini/gemini-cli/issues/21983
7. **#26525 Add deterministic secret redaction for Auto Memory** (4 comments, P2, Security): Critical compliance gap: current background Auto Memory extraction sends unredacted user transcript content to model context before running secret redaction logic, creating accidental data leak risks for enterprise users. https://github.com/google-gemini/gemini-cli/issues/26525
8. **#22267 Browser Agent ignores settings.json overrides (e.g. maxTurns)** (3 comments, 0 👍, P3): Configuration breaking bug that prevents users from tuning browser agent runtime limits for long web automation tasks, ignoring all user-defined values stored in global or project-level settings files. https://github.com/google-gemini/gemini-cli/issues/22267
9. **#22093 Subagents run without permission since v0.33.0** (3 comments, 0 👍, P2): Breaking regression where users who explicitly disabled subagent execution in their config see unprompted generalist agent runs, creating unapproved resource usage and execution risks. https://github.com/google-gemini/gemini-cli/issues/22093
10. **#21763 Bugreport does not include subagent context** (2 comments, 0 👍, P1): Debugging blocker: the `/bug` diagnostic command only captures main session traces, with no visibility into nested subagent activity, making agent failure troubleshooting extremely difficult. https://github.com/google-gemini/gemini-cli/issues/21763

## 4. Key PR Progress (Top 10 Important)
1. **#28672 fix(core,cli): repair /compress session reload and quota-fallback tool response loss**: Fixes two separate widely reported session corruption bugs: failed post-compress reload of on-disk chat sessions, and lost tool execution responses when users hit quota limits mid-operation. https://github.com/google-gemini/gemini-cli/pull/28672
2. **#28670 fix(core): avoid infinite retry on GCA model capacity exhaustion**: Resolves a critical Gemini Code Assist agent mode bug where the runtime enters an infinite retry loop on 429 capacity errors, instead of gracefully falling back to smaller available models like Gemini Flash to prevent full session failure. https://github.com/google-gemini/gemini-cli/pull/28670
3. **#28481 fix(core): refresh MCP OAuth tokens with stored client ID**: P1 security fix that resolves broken OAuth refresh flow for dynamically registered MCP servers, eliminating the need for users to re-authenticate to all connected MCP services every 60 minutes. https://github.com/google-gemini/gemini-cli/pull/28481
4. **#28551 fix(cli): fall back to embedded macOS seatbelt profiles if missing**: Critical sandbox mode fix for macOS/gMac users, preventing startup crashes when static seatbelt sandbox profiles are missing from the app bundle, making restricted execution mode usable on custom macOS deployments. https://github.com/google-gemini/gemini-cli/pull/28551
5. **#28669 chore(skills): consolidate TUI testing into single self-contained tui-tester skill**: Removes redundant nested TUI testing skill layers, simplifying internal workflow for validating CLI terminal UI behavior across new release builds. https://github.com/google-gemini/gemini-cli/pull/28669
6. **#28666 fix(core): validate all workspace directories GlobTool.execute() will search**: Security hardening patch that closes a path traversal gap where the GlobTool could scan directories outside the user's explicitly allowed workspace when no `dir_path` parameter is specified. https://github.com/google-gemini/gemini-cli/pull/28666
7. **#28667 feat(caretaker-evals): add Cloud Run job entrypoint for eval runner**: Merged closed PR that adds a production-ready deployment path to run the full caretaker agent triage evaluation suite on Google Cloud Run at scale. https://github.com/google-gemini/gemini-cli/pull/28667
8. **#28653 fix(cli): make session retention collision-safe—protect unrelated chats**: Prevents a data loss bug where 8-character short session ID collisions caused the cleanup routine to delete unrelated active user chat sessions entirely. https://github.com/google-gemini/gemini-cli/pull/28653
9. **#28660 fix(sdk): keep sendStream alive on malformed tool arguments**: Defensive SDK patch that prevents uncaught stream crashes when the model returns invalid, non-object tool arguments, turning bad requests into structured error responses to keep the session running. https://github.com/google-gemini/gemini-cli/pull/28660
10. **#28668 chore(deps): bump undici from 7.10.0 to 7.29.0 (merged)**: Closed security PR that patches high-severity vulnerabilities in the undici HTTP client library with no breaking user-facing changes. https://github.com/google-gemini/gemini-cli/pull/28668

## 5. Feature Request Trends
The most requested feature directions from this 24h update window are:
1. AST-aware codebase navigation tools to reduce token bloat, cut wasted turns on imprecise file reads, and speed up large codebase investigation workflows
2. Resilient browser agent enhancements including automatic orphaned session lock recovery and full support for user-defined settings.json configuration overrides
3. Full subagent trajectory export via the `/chat share` command to simplify auditing, debugging, and third-party evaluation of nested agent workflows
4. Zero-dependency native OS sandboxing optimized for Gemini 3's bash-first training to deliver safer, faster shell execution without extra user setup
5. Improved agent self-awareness to let the CLI accurately explain its own hotkeys, flags, and usage patterns to new users as a self-documenting guide.

## 6. Developer Pain Points
Recurring high-frequency frustrations from the updated issues and PRs:
1. Persistent agent stability regressions: unprompted subagent execution post v0.33.0, falsely reported MAX_TURNS success, and full hangs of the generalist agent create major workflow disruptions for day-to-day users.
2. Session and context corruption bugs: broken `/compress` reload, accidental chat data loss from short ID collisions, and lost tool responses on quota fallbacks break long-running work sessions with large codebases.
3. Platform-specific adoption barriers: non-functional browser subagent on modern Wayland Linux desktops, macOS sandbox crashes, and no symlink support for custom user agents block access for power users.
4. Debugging and security friction: lack of subagent traces in bug reports, pre-redaction unmasked secrets in Auto Memory, and broken MCP OAuth refresh create unnecessary compliance, troubleshooting, and integration overhead for enterprise users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-08-04
---
## 1. Today's Highlights
This digest is headlined by the release of v1.0.78-3, which adds the experimental `/new-worktree` command for worktree-scoped conversations and fixes the local login flow to default to user-friendly browser-based authentication. Two long-running, highly-upvoted feature requests (project-scoped plugins and the scheduled prompt queue corruption bug) were closed in the last 24 hours, clearing the path for more flexible repo-specific Copilot workflows. Community discussion is heavily concentrated on BYOK model improvements, with two separate 20+ upvoted active requests gaining traction for native multi-local-model support without full session restarts.

## 2. Releases
Version `v1.0.78-3` was published in the last 24 hours with the following changes:
- **Added**: New experimental `/new-worktree` command that creates a Git worktree and automatically spawns a Copilot CLI conversation scoped to that new worktree's directory
- **Improved**: Interactive shell shortcut now triggers natively on Enter keypress, with an inline visual hint displayed when the "$" command arm state is active
- **Fixed**: Copilot CLI local desktop login flow now defaults to browser-based authentication, reducing setup friction for new users.

## 3. Hot Issues
1. [#1665](https://github.com/github/copilot-cli/issues/1665) (CLOSED): Support project/repo-scoped Copilot plugins instead of global per-user installs. This 18-upvote, 14-comment 18-month-old feature request unblocks teams distributing repo-specific Copilot workflows to all contributors without manual per-user plugin setup.
2. [#3282](https://github.com/github/copilot-cli/issues/3282) (OPEN): Add multi-BYOK model support natively to the Copilot CLI. With 20 upvotes and 7 comments, this is the second highest-voted active model request, eliminating the current workflow that requires full session restarts and environment variable resets to switch between custom self-hosted models.
3. [#3709](https://github.com/github/copilot-cli/issues/3709) (OPEN): Extend the `/model` picker to include configured local/BYOK models for in-session switching. Matching #3282's 20 upvotes, this request would unify model selection for both GitHub-hosted and self-hosted models in a single TUI flow, no session restarts required.
4. [#1464](https://github.com/github/copilot-cli/issues/1464) (OPEN): Skills beyond alphabetical position 32 are unreachable due to system prompt token cap limits. This 7-upvote bug causes users with large skill libraries to silently lose access to half their installed custom skills, with no clear UI warning.
5. [#2714](https://github.com/github/copilot-cli/issues/2714) (OPEN): Add plugin toggle enable/disable functionality without full uninstall. 11 upvotes place this as the top active plugin UX request, aligning Copilot CLI with competing AI CLI tools like Gemini CLI and Claude Code that already support non-destructive plugin disabling.
6. [#4078](https://github.com/github/copilot-cli/issues/4078) (CLOSED): Scheduled `/every`/`/after` prompts kill the existing prompt queue. This resolved bug caused users with pending queued prompts to lose all queued work when a scheduled trigger fired, eliminating a major friction point for users running long-running automated CLI sessions.
7. [#4337](https://github.com/github/copilot-cli/issues/4337) (CLOSED): gpt-5.6-luna was advertised as available via the `/models` endpoint but not accessible via the standard OpenAI-compatible `/chat/completions` interface. This fix restores compatibility for hundreds of community Mix of Agents (MoA) tooling integrations that rely on the OpenAI API spec.
8. [#2830](https://github.com/github/copilot-cli/issues/2830) (OPEN): Add support for full custom color themes. This 6-upvote accessibility/UX request would let users customize accent colors and terminal rendering to match their existing terminal themes, a common request for power users that run multiple Copilot CLI instances side-by-side.
9. [#4349](https://github.com/github/copilot-cli/issues/4349) (OPEN): Enterprise managed settings policy validation blocks all local/custom MCP servers for valid enum values. This triaged bug breaks Copilot CLI functionality for thousands of GHE enterprise users, who cannot use any non-default MCP tools until the schema validator is patched.
10. [#4346](https://github.com/github/copilot-cli/issues/4346) (OPEN): MCP registry policy fetch returns 403 for standard GitHub Actions GITHUB_TOKEN values. This triaged bug blocks non-default MCP server usage in CI pipelines, breaking the recently launched PAT-less Copilot CLI in GitHub Actions workflow announced in July 2026.

## 4. Key PR Progress
No pull requests were updated, merged, or opened in the 24-hour tracking window ending 2026-08-04 for the `github/copilot-cli` repository.

## 5. Feature Request Trends
Three distinct high-priority feature directions have emerged from the latest updated issues:
1. **BYOK/local model workflow unification**: Two parallel top-voted requests push for no-restart multi-model switching directly inside the Copilot CLI TUI, eliminating the need for environment variable reconfiguration and session restarts to access custom hosted models.
2. **Granular plugin management**: Following the closure of the project-scoped plugins request, the next most requested plugin features are non-destructive enable/disable toggles and Windows symlink support for plugin installs, to reduce administrative overhead for teams.
3. **Accessibility and UX customization**: Users are requesting full custom color theme support, optional opt-out for OSC 9;4 progress bar sequences, and full terminal scrollback for conversation history to align Copilot CLI behavior with standard terminal application expectations.

## 6. Developer Pain Points
Recurring high-impact frustrations surfaced in the latest issue updates:
1. **Cross-platform terminal input/rendering fragility**: Multiple active bugs affect WSL2, native Windows, and Zellij terminal users, including misinterpreted Ctrl+H keystrokes, raw escape sequences injected into startup input boxes, poorly auto-sized table formatting, and disruptive reflowing of tables during streaming markdown link rendering.
2. **Enterprise policy edge case breakage**: Two newly triaged bugs block MCP server access for both GHE enterprise managed users and GitHub Actions CI users, impacting adoption for organizations rolling out Copilot CLI at scale.
3. **Hidden functionality limits**: Users with large custom skill libraries cannot access skills past the 32-skill token limit, with no clear UI notification of the constraint, leading to unexpected silent failure of installed custom skills.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-04
Source: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
No new public stable or pre-release versions of Kimi Code CLI were published in the 24 hour reporting window. Core contributors landed 2 merged production fixes for Anthropic provider API requests and the internal `kosong` dependency, alongside 6 actively reviewed PRs targeting edge case reliability across console, shell, and hook subsystems. Three high-priority user-reported bugs and a widely requested long-running feature request received new updates and community engagement in the last day.

## 2. Releases
No new official Kimi Code CLI releases were detected from GitHub, PyPI, or Homebrew update feeds in the past 24 hours.

## 3. Hot Issues
Only 3 issues received updates in the reporting window, all of which are prioritized below (fewer than 10 total updated issues exist this period):
1. **Persistent Cross-Session Memory System Feature Request (#1283)**  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/1283  
   This long-running enhancement request (15 total comments, active discussion as of 2026-08-03) is the top community-requested quality of life upgrade, asking for both AI-automatic context tracking for project patterns and user-defined manual memory banks for custom preferences to eliminate repeated setup across new sessions.
2. **Web UI Infinite Session Loading Spinner (#2573)**  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2573  
   This bug affects Kimi Code CLI 1.48.0 Homebrew users on macOS arm64, breaking multi-session workflows in the technical preview `kimi web` interface. Multiple users have confirmed reproduction, making it a high-priority fix for the public web UI preview track.
3. **CLI Generation Stream Indefinite Hang (#2582)**  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2582  
   This critical runtime break affects Windows 10 x64 users running the kimi-k2.7-code model, where generation streams hang with no timeout error and render the entire session unusable until a full CLI restart. No workarounds have been documented as of this update.

## 4. Key PR Progress
All 8 recently updated PRs are included below (fewer than 10 total updated PRs exist this period):
1. **fix(web,vis): prevent startup banner crash on legacy console codecs (#2577)**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2577  
   Replaces unsupported Unicode arrow characters to resolve crashes on GBK and other non-UTF8 legacy system consoles.
2. **fix(hooks): execute PostToolUse hooks via fire_and_forget_trigger (#2575)**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2575  
   Fixes a bug where unhandled async hook tasks were garbage collected mid-execution, breaking custom workflow automation for power users.
3. **fix(tools): correct StrReplaceFile replacement count tracking (#2554)**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2554  
   Small correctness fix that tracks edit metrics against the current modified file state instead of stale pre-operation content.
4. **fix(shell): eliminate unhandled timeout blocks for detached child processes (#2530)**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2530  
   Resolves hangs that occur when running daemon-spawning shell commands that leave stdin/stdout pipes open after command exit.
5. **fix(acp): return QuestionNotSupported for unhandled ACP prompts (#2507)**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2507  
   Fixes misleading behavior where the model incorrectly interprets unsupported interactive prompts as user-dismissed actions.
6. **chore(release): bump internal kosong library to v0.56.0 (#2581, CLOSED/MERGED)**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2581  
   Completed release preparation that pins the updated kosong dependency and updates official release notes for the next public version.
7. **fix(kosong): omit empty anthropic-beta header when no beta features are used (#2580, CLOSED/MERGED)**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2580  
   Merged fix that eliminates invalid empty HTTP headers sent to Anthropic endpoints, which previously triggered 400 bad request errors.
8. **fix(llm): scope prompt cache keys to official Moonshot APIs only (#2535)**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2535  
   Prevents passing the proprietary Moonshot `prompt_cache_key` parameter to third-party Kimi-compatible endpoints that do not support the feature, cutting down invalid API requests.

## 5. Feature Request Trends
The only active, recently updated high-impact feature direction this reporting period is persistent cross-session context management:
- Users are prioritizing dual-mode memory systems that combine automatic AI-managed indexing of project structure, past edits, and user feedback, paired with user-editable manual memory banks to store project-specific rules and permanent preferences.
- No new distinct feature requests were filed in the last 24 hours.

## 6. Developer Pain Points
Recurring and newly reported frustrations from active users include:
1. Cross-platform locale compatibility gaps: Non-UTF8 default consoles on Chinese locale Windows systems trigger unexpected hard crashes at CLI launch due to unhandled non-ASCII character rendering.
2. Unhandled indefinite runtime hangs: Two distinct edge cases (LLM generation stream timeouts, detached shell child processes holding open pipes) force full CLI restarts that discard accumulated in-session context.
3. Third-party provider breakages: Unfiltered proprietary Moonshot parameters and unconditionally set provider-specific headers cause avoidable API errors for users running self-hosted Kimi-compatible endpoints or multi-provider configurations.
4. Technical preview web UI instability: The new `kimi web` interface has unhandled error states that break core multi-session switching workflows for early testers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-08-04
---
## 1. Today's Highlights
Today’s update includes no new public releases, with 24h activity focused on community triage of high-impact long-running bugs, merged maintenance patches for agent reliability, and user feedback for core UI usability improvements. The most upvoted open issue in the repo’s history, a 13-month-old request for clickable chat links, received new maintainer attention after hitting 118 positive reactions. A batch of 20+ previously stalled automated cleanup PRs were merged today, delivering long-requested fixes for nested subagent behavior, LLM provider compatibility, and cloud Zen performance for enterprise users.

## 2. Releases
No new official OpenCode versions were published in the last 24 hours.

## 3. Hot Issues
1. **[#1168 Feature Request: Make Links Clickable (Ctrl+Left Click to Open)](https://github.com/anomalyco/opencode/issues/1168)**  
   The most upvoted open issue across the repo (118 👍, 10 comments), open since July 2025. Users note missing Ctrl+click link support breaks standard workflows for following generated documentation links, repo URLs, and error trace links, a feature already ubiquitous in VS Code and competing AI coding assistants.
2. **[#39845 DeepSeek V4 Flash suddenly requires "Enable models hosted in China" for OpenCode Go subscription](https://github.com/anomalyco/opencode/issues/39845)**  
   Mid-session breakage for paid Go tier users, with 22 👍 and 12 comments. Paid subscribers are unexpectedly blocked from the latest DeepSeek V4 Flash version mid-workflow without prior notification, breaking active long coding sessions.
3. **[#13715 Permission asks from nested subagent sessions silently hang](https://github.com/anomalyco/opencode/issues/13715)**  
   Long-running bug (24 👍, 10 comments) that causes sessions to freeze forever when a child subagent spawns another subagent requiring bash permission, with no UI render for the permission prompt. The bug was traced to incomplete child session collection logic in the TUI routes.
4. **[#28089 OpenCode leaks temporary .so files in /tmp, consuming hundreds of GB over time](https://github.com/anomalyco/opencode/issues/28089)**  
   Resource leak bug on Linux systems (8 👍, 8 comments) that causes unmanaged temporary shared object files to accumulate in the /tmp directory, filling up disk space for long-running CI/headless OpenCode deployments.
5. **[#36942 [FEATURE]: Vertical tabs](https://github.com/anomalyco/opencode/issues/36942)**  
   Popular UI feature request (16 👍, 10 comments) complaining that the new forced horizontal tab layout only displays 5+ session titles at once, making session switching unmanageable for users working on 10+ concurrent projects.
6. **[#40171 Go service /v1/responses returns HTTP 200 but emits an incomplete SSE event stream, breaking Codex-style clients](https://github.com/anomalyco/opencode/issues/40171)**  
   Newly reported API breakage that returns incomplete event sequences for OpenAI Responses-API compliant streaming, breaking third-party and self-hosted Codex client integrations.
7. **[#37096 Web UI Session List Empty — Project Auto-Registration Fails on Windows/WSL](https://github.com/anomalyco/opencode/issues/37096)**  
   Cross-platform compatibility bug (5 👍, 3 comments) that breaks workspace auto-detection for developers running OpenCode on Windows 11 paired with WSL2 Ubuntu, leaving users with no visible sessions in the web UI.
8. **[#29094 Reading chat history during LLM responses still re-snaps the viewport](https://github.com/anomalyco/opencode/issues/29094)**  
   Reopened long-standing UX bug where scrolling up to view past chat history while an LLM is generating forces the viewport to snap back to the bottom on every new token, making it impossible to reference prior context mid-generation.
9. **[#7073 [CLOSED] [bug] self signed certificate in certificate chain](https://github.com/anomalyco/opencode/issues/7073)**  
   Just-resolved security bug that blocked enterprise users with internal self-signed certificate chains from connecting to on-prem LLM endpoints.
10. **[#39207 [CLOSED] GitHub OAuth login fails with "Failed query: update `user`" — email param comes back empty](https://github.com/anomalyco/opencode/issues/39207)**  
   Fixed authentication bug that broke GitHub SSO login for users with private hidden email addresses on their GitHub accounts, causing a server-side SQL update failure on callback.

## 4. Key PR Progress
1. **[#40316 fix(core): apply safe defaults to all agents](https://github.com/anomalyco/opencode/pull/40316)**  
   Unifies shared directory access and .env reading policies across all built-in and custom agents, eliminating unconfigured access edge cases that blocked legitimate file operations for custom agent builds.
2. **[#40285 feat(app): refine diff viewer](https://github.com/anomalyco/opencode/pull/40285)**  
   Overhauls the code diff viewer UI, updating red/green token contrast, shrinking the left change bar to 2px, and refining line number column rendering for better readability during agent code review.
3. **[#35233 feat(core): run subagent commands in background](https://github.com/anomalyco/opencode/pull/35233)**  
   Fixes the nested subagent hang bug by running subagent commands as child sessions in the background, with parent session status notifications to keep the main UI responsive.
4. **[#35212 feat(llm): provider packages own model request construction](https://github.com/anomalyco/opencode/pull/35212)**  
   Major architecture refactor that makes the SessionRunner fully provider-agnostic, allowing custom LLM providers to implement their own request construction logic without modifying core OpenCode code.
5. **[#40265 fix: gpt-5.5+ in combination with azure fails with reasoningEffort](https://github.com/anomalyco/opencode/pull/40265)**  
   Resolves compatibility breakage that blocked Azure OpenAI users from running GPT-5.5+ models with reasoning effort parameters enabled.
6. **[#35197 feat(mcp): add resource subscription API with autoprompt](https://github.com/anomalyco/opencode/pull/35197)**  
   Delivers the first full slice of MCP 1.1 support, adding resource subscription functionality that automatically injects updates from monitored MCP resources into the agent prompt.
7. **[#35198 feat(provider): support per-model limit overrides in user config](https://github.com/anomalyco/opencode/pull/35198)**  
   Lets users manually set custom context, input, and output limits for custom self-hosted models in their opencode.json config, fixing mismatches with the public model catalog limits.
8. **[#35127 perf(console): defer zen accounting off the response path](https://github.com/anomalyco/opencode/pull/35127)**  
   Eliminates multi-second post-generation hangs for Zen cloud users by moving billing, TPM tracking, and accounting logic out of the critical SSE response path, processing it asynchronously after the stream closes.
9. **[#35222 fix: surface task_id in interrupted tool error text for LLM resume](https://github.com/anomalyco/opencode/pull/35222)**  
   Adds task_id to the error text sent to the LLM when a subagent session is aborted, allowing agents to automatically resume interrupted subagent tasks without manual user input.
10. **[#40320 docs: add autonomous agents guide with reboot-resume](https://github.com/anomalyco/opencode/pull/40320)**  
    Publishes a new official documentation guide for running unattended long-running OpenCode agents, including a production-ready SQLite intention database pattern for crash and reboot recovery.

## 5. Feature Request Trends
The most requested feature directions from recent community activity are:
1. **Core UI/UX quality of life**: Top requests include vertical workspace tabs, natively clickable links, millisecond-precision timestamps for all chat turns, and fully manual user-editable todo lists that are not controlled exclusively by the agent.
2. **MCP and plugin extensibility**: Users are asking for expanded plugin hooks for custom VCS backends, exposed skills API access for third-party plugins, and support for custom credential helper command placeholders in config files.
3. **Unattended workflow support**: Enterprise and power users are pushing for native background subagent execution, explicit user-defined session IDs, and first-class persistence patterns for multi-day autonomous agent runs.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24h:
1. **Unhandled resource leaks**: Long-running headless and desktop deployments suffer from unmanaged temporary .so file accumulation in /tmp, and desktop app hangs when pasting 5000+ characters of text into the prompt box.
2. **Connection robustness gaps**: There is no user-facing error surfacing for unreachable custom local provider endpoints, no configurable timeout for infinite retries, and the chunkTimeout config setting does not work for non-SSE streaming protocols including AWS Bedrock EventStream.
3. **Chat viewport jank**: Multiple overlapping bugs cause random mid-session scroll jumps, forced snap-back to the latest token during history reading, and content skipping during fast upward trackpad scroll on long chat histories.
4. **Authentication and subscription edge cases**: Users report broken SSO login flows for accounts with hidden emails, missing invite rewards for referral program participants, and unexpected geofenced model opt-in prompts for paid Go subscription users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-08-04
Source: https://github.com/badlogic/pi-mono

---

## 1. Today's Highlights
The Pi development community focused heavily on Windows and WSL compatibility fixes, critical context compaction reliability patches, and high-impact performance improvements for automation use cases over the past 24 hours. A long list of resolved longstanding bugs includes elimination of the quadratic O(n²) JSON streaming output that caused out-of-memory crashes for headless deployments, plus new native support for EU-based AI provider Cortecs to meet regional compliance requirements. Top community engagement centered on two high-priority Copilot-related bugs that break core functionality for enterprise and WSL users, with nearly 40 combined comments on the two open issues.

## 2. Releases
No new stable or pre-release versions of Pi were published in the last 24 hours.

## 3. Hot Issues
1. [Issue #6187](https://github.com/earendil-works/pi/issues/6187): *Pi login hangs in WSL after GitHub Copilot device authorization* (20 comments). This top-voted open bug blocks WSL users from completing Copilot browser-based device auth, with the Pi terminal process never detecting successful device registration. It affects a large share of developers using Pi on Windows via WSL.
2. [Issue #6768](https://github.com/earendil-works/pi/issues/6768): *Compaction using Copilot Enterprise not possible* (17 comments, 18 👍). The highest-upvoted active bug breaks core context compaction functionality for all users on paid Copilot Enterprise plans, throwing 421 Misdirected Request errors for both OpenAI and Anthropic model routes.
3. [Issue #7064](https://github.com/earendil-works/pi/issues/7064): *WSL absolute Windows paths are mishandled* (11 comments). Broken cross-OS path logic causes Pi's native read/write/edit tools to fail silently on WSL setups, forcing users to fall back to slower command line file operations.
4. [Issue #7161](https://github.com/earendil-works/pi/issues/7161): *anthropic-messages never sends x-client-request-id, unlike all OpenAI paths* (9 comments). Missing session affinity headers break request routing for users running Claude traffic through custom proxies with multiple Anthropic account round-robin configurations.
5. [Issue #7547](https://github.com/earendil-works/pi/issues/7547): *How do you use Pi on windows? What issues are you seeing?* (5 comments). Core maintainers launched a community survey to map the fragmented Pi Windows user workflow ecosystem, to prioritize fixes and documentation for the massive under-served Windows developer audience.
6. [Issue #7399](https://github.com/earendil-works/pi/issues/7399): *truncateToWidth() leaves dangling OSC 8 hyperlink when it truncates inside one* (5 comments). Unclosed terminal hyperlink sequences cause unexpected rendering glitches across all popular terminal emulators, breaking TUI output consistency.
7. [Issue #7444](https://github.com/earendil-works/pi/issues/7444): *WebSocket retry only handles two error codes; other transient errors hard-stop the turn* (3 comments). Overly narrow WebSocket error handling kills in-progress work sessions on common transient network failures, with no automatic retry logic.
8. [Issue #7553](https://github.com/earendil-works/pi/issues/7553): *Configurable thinking level/model for compaction* (2 comments). Highly requested feature for reasoning model users, who want to avoid wasting expensive extended thinking tokens on low-complexity context summarization tasks.
9. [Issue #7560](https://github.com/earendil-works/pi/issues/7560): *xai Grok 4.5 does not show up in the models list for GitHub Copilot Business subscription* (2 comments). Blocks Copilot Business users from accessing xAI's latest flagship model via the provider integration.
10. [Issue #7290](https://github.com/earendil-works/pi/issues/7290): *`--mode json` emits O(n²) stdout for a single tool call; large writes OOM the agent* (2 comments). Critical performance bug that broke headless automation pipelines running Pi with custom extensions for long-running code generation tasks.

## 4. Key PR Progress
1. [PR #7503](https://github.com/earendil-works/pi/pull/7503): *feat(agent): implement harness v2 for in-memory storage*. Introduces the new backend-neutral `SessionStorage` API foundation for the upcoming Harness V2 session system, with a fully featured in-memory storage backend for testing and ephemeral workloads.
2. [PR #7571](https://github.com/earendil-works/pi/pull/7571): *feat(ai): add built-in Cortecs provider support*. Adds first-class native integration with Cortecs, the European AI model routing platform, for users needing regional data residency and GDPR compliance for their LLM workloads.
3. [PR #7569](https://github.com/earendil-works/pi/pull/7569): *fix(coding-agent): normalize find root results*. Rewrites Pi's `find` tool path handling to use native Node path utilities instead of hand-rolled heuristics, fully resolving broken Windows drive root searches and globs with path separators.
4. [PR #7561](https://github.com/earendil-works/pi/pull/7561): *fix(coding-agent): stream delta-only message_updates in json mode*. Fixes the longstanding quadratic JSON serialization bug for `--mode json` deployments, cutting stdout output volume for long sessions by ~90% and eliminating OOM crashes for large responses.
5. [PR #7552](https://github.com/earendil-works/pi/pull/7552): *fix(coding-agent): discover sessions through symlinked directories*. Updates the session manager to properly list sessions stored in symlinked folders, adding support for cloud-synced session directories and session storage on external drives.
6. [PR #7562](https://github.com/earendil-works/pi/pull/7562): *feat(ai): support Anthropic server-side fallbacks*. Adds opt-in native support for Anthropic's new beta automatic model fallback feature, which routes traffic to backup models automatically during Claude outages to improve request success rates.
7. [PR #7370](https://github.com/earendil-works/pi/pull/7370): *fix(coding-agent): prevent auto-compaction race during manual compaction*. Eliminates the widely reported infinite double-compaction loop that occurred when users ran the manual `/compact` command at the 90% context window auto-compaction threshold.
8. [PR #7570](https://github.com/earendil-works/pi/pull/7570): *fix(coding-agent): reinstall dependencies if `git clean` fails*. Resolves a Windows-specific edge case where locked open files interrupted extension update `git clean` operations, leaving the Pi extension in a permanently broken state.
9. [PR #7548](https://github.com/earendil-works/pi/pull/7548): *fix(coding-agent): sandbox issue analysis tools*. Adds immutable local snapshots of GitHub issues for the `/is` analysis workflow, preventing external fetch tools from leaking private context to model-facing third-party APIs.
10. [PR #7539](https://github.com/earendil-works/pi/pull/7539): *fix(coding-agent): preserve auth header deletion markers*. Resolves the longstanding bug that broke Cloudflare AI Gateway and other custom OpenAI-compatible integrations by restoring the missing provider prefix logic for custom model routes.

## 5. Feature Request Trends
1. First-class Windows/WSL support: The community is pushing maintainers to move beyond fragmented workarounds for Windows, with requests for official out-of-the-box installers, validated workflows, and dedicated test coverage for all Windows terminal environments.
2. Granular compaction controls: Multiple requests ask for independent configuration of compaction logic, including separate model selection, custom thinking level settings, and adjustable compaction thresholds that do not reuse the active session's reasoning mode settings.
3. Self-hosted and custom LLM provider flexibility: Users are requesting generic, unopinionated support for custom sampling parameters (for llama.cpp/vLLM deployments), opaque bearer key support for custom Codex gateways, and new regional AI provider integrations.
4. Harness V2 synced session features: Early feedback on the new in-memory session backend shows strong demand for cross-device session syncing, remote server-side session persistence, and shared team session repositories.

## 6. Developer Pain Points
1. Persistent Windows/WSL compatibility gaps: Path handling, process management, Copilot auth, and file search bugs remain unaddressed for a huge segment of Pi's Windows user base, many of whom rely on Pi for daily local development workflows.
2. Compaction reliability regressions: Long-running multi-turn sessions frequently hit stuck post-compaction hangs, infinite race condition loops, and failures for enterprise Copilot plans, making Pi unreliable for multi-hour coordinated work sessions.
3. Headless automation performance issues: The previously unpatched O(n²) JSON serialization bug, missing generic proxy header support, and overly narrow WebSocket retry logic make Pi hard to deploy reliably in CI/CD and embedded automation use cases.
4. Inconsistent cross-provider behavior: Different model providers have divergent handling for request identifiers, developer/system role support, and error codes, creating extra maintenance work for teams that run Pi across a mix of OpenAI, Anthropic, Google, and self-hosted model endpoints.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-08-04
Official update for the open-source AI coding agent developer toolkit from QwenLM.

---
## 1. Today's Highlights
Qwen Code shipped the stable v0.21.4 release, which graduates the previously beta Web Shell to a full release-ready native desktop application with native lifecycle management, single-instance behavior, and automatic background updates. The latest drop also adds graceful handling for oversized conversation history pagination, completes a long-missing official TUI keyboard shortcut reference, and unblocks multiple core session management and reliability bugs. The past 24 hours also saw major progress on security hardening for agent runtimes, CI workflow optimizations, and cross-platform UX fixes.

## 2. Releases
Two new builds were published in the last 24 hours:
- **v0.21.4 (Stable)**: The official production release, containing all new Web Shell desktop app features, history pagination improvements, full TUI shortcut documentation, and core bug fixes for session management.
- **v0.21.3-nightly.20260803.e1e5b42ce**: Pre-release nightly build used for final validation before the v0.21.4 stable tag.

## 3. Hot Issues
1. [Issue #8102](https://github.com/QwenLM/qwen-code/issues/8102): Proposal for deterministic tool-execution boundaries for a trustworthy agent runtime (13 comments). The top-discussed roadmap item in the community, the proposal aims to move the LLM outside the system trust boundary and enforce deterministic runtime constraints on all model actions to eliminate unvetted agent execution risks.
2. [Issue #8400](https://github.com/QwenLM/qwen-code/issues/8400): P1 critical Windows desktop bug where sessions are silently auto-deleted after app restart due to workspace CWD mismatch. The high-severity data loss issue is prioritized for immediate patch work with 3 active community bug reports.
3. [Issue #8382](https://github.com/QwenLM/qwen-code/issues/8382): Duplicate provider tool call ID bug causing frequent tool execution failures (6 comments). A core runtime bug that breaks standard agent workflows for many OpenAI-compatible endpoint users.
4. [Issue #8316](https://github.com/QwenLM/qwen-code/issues/8316): Cancelled prompts are not restored to the input box (7 comments). High-friction UX pain point for daily users, who currently have to retype full prompts from scratch if they accidentally cancel a generation.
5. [Issue #8281](https://github.com/QwenLM/qwen-code/issues/8281): Feature request for an official Email channel with IMAP/SMTP support (5 comments). A high-demand integration that would let users interact with Qwen Code agents directly via dedicated email inboxes for asynchronous workflow automation.
6. [Issue #7306](https://github.com/QwenLM/qwen-code/issues/7306): Tool output budgeting and artifact lifecycle hardening (5 comments). Phase 1 of the hardening work is already merged, and the community is collaborating on follow-up work to eliminate memory leaks and unexpected artifact loss during long-running sessions.
7. [Issue #8432](https://github.com/QwenLM/qwen-code/issues/8432): Bailian Personal Token Plan model list out of sync, causing image/video generation failures (4 comments). A widely reported bug for Chinese Alibaba Cloud users that breaks multimodal workloads.
8. [Issue #8452](https://github.com/QwenLM/qwen-code/issues/8452): Size-triggered microcompaction repeatedly invalidates the prompt cache (3 comments). The bug causes excessive token consumption and significant slowdowns for long coding sessions.
9. [Issue #8389](https://github.com/QwenLM/qwen-code/issues/8389): Experimental Plan & Review workflow for daemon sessions (3 comments, in progress). Community members are testing the new opt-in feature that blocks mutating tools until a user approves the full visualized DAG of task steps.
10. [Issue #8326](https://github.com/QwenLM/qwen-code/issues/8326): Fork agent context pollution bug (4 comments, closed). The recently fixed bug caused parallel forked subagents to inherit sibling tool call instructions, resulting in unexpected cross-task context leaks.

## 4. Key PR Progress
1. [PR #8327](https://github.com/QwenLM/qwen-code/pull/8327): Full TUI keyboard shortcut reference documentation completed by @DragonnZhang, filling a long-standing missing user resource for CLI power users.
2. [PR #8393](https://github.com/QwenLM/qwen-code/pull/8393): Binds Web Shell plan approval requests to exact Todo revision IDs, preventing users from accidentally approving stale or mismatched task plans after edits.
3. [PR #8438](https://github.com/QwenLM/qwen-code/pull/8438): Normalizes paginated GitHub API fetches to a single flat array per file, fixing long-standing autofix workflow failures for PRs with more than 100 comments, reviews, or events.
4. [PR #8487](https://github.com/QwenLM/qwen-code/pull/8487): Orchestrates independent PR review setup calls in a single model response, cutting initial review latency by ~7 minutes for typical CI runs.
5. [PR #8450](https://github.com/QwenLM/qwen-code/pull/8450): Bounds all ACP textual tool result payloads to 65,536 UTF-8 bytes, eliminating oversized transport payload crashes for sessions with very large tool outputs.
6. [PR #8459](https://github.com/QwenLM/qwen-code/pull/8459): Validates review workflow evidence images via magic-byte sniffing instead of filename checks, blocking malicious non-image files from being processed in the PR review pipeline.
7. [PR #8416](https://github.com/QwenLM/qwen-code/pull/8416): Adds Maven multi-module support to the `/review` skill, extending native PR review and legacy code audit functionality for Java monorepo teams.
8. [PR #8445](https://github.com/QwenLM/qwen-code/pull/8445): Adds support for Web Shell session refresh with daemon-side authentication, fixing broken session reloading after browser bearer tokens expire.
9. [PR #7925](https://github.com/QwenLM/qwen-code/pull/7925): Sweeps stale worktree project snapshots on application startup, cleaning up orphaned temporary project files that previously accumulated after crashes or forced process kills.
10. [PR #8477](https://github.com/QwenLM/qwen-code/pull/8477): Hardens QQ bot group sender attribution, adding graceful fallback handling for gateway payloads that omit modern user identity fields for Chinese IM integration users.

## 5. Feature Request Trends
The highest-priority community feature directions this period include:
1. A production-grade trustworthy agent runtime with verifiable, deterministic tool execution boundaries that keep the LLM outside the system trust perimeter.
2. Native IMAP/SMTP email channel support for asynchronous, inbox-based agent interactions for non-interactive workflow use cases.
3. The opt-in Plan & Review DAG workflow for daemon sessions, which adds explicit user approval gates before any mutating tool actions run.
4. Fully configurable memory management, including user-adjustable max turn limits for the auto-memory dream agent to fit custom workload constraints.

## 6. Developer Pain Points
Recurring top frustrations reported by the community:
1. Unacceptable session data loss risks, including silent session auto-deletion on Windows, missing transcript writes after user-initiated aborts, and MCP tool failures on resumed existing sessions.
2. Cross-terminal shortcut conflicts: Standard Qwen Code keybinds for @ completion, copy operations, and workflow navigation clash with native shortcuts in popular terminal emulators including Warp, ConEmu, and Cmder.
3. Unnecessary performance overhead: Broken prompt cache from microcompaction and sequential model round-trips in CI review runs cause excessive token usage and multi-minute unnecessary latency.
4. Partial platform-specific breakage: Chinese Alibaba ModelStudio users face truncated model names in the mobile Paseo UI and out-of-sync official token plan model lists that break multimodal generation.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-08-04
---
## 1. Today's Highlights
The DeepSeek TUI project (codenamed CodeWhale) officially kicked off its v0.9.4 release integration train in the last 24 hours, with all CI-blocking Rust lint issues fully resolved to advance the release to public testing. Community activity spiked around core ecosystem priorities including planned listing on the public Agent Client Protocol (ACP) registry that will enable one-click installation for Zed editor users. Core engineering teams delivered 15+ actionable patches across runtime API expansion, TUI stability, and cross-platform compatibility to unblock the upcoming feature release.
## 2. Releases
No new official public releases were published between 2026-08-03 and 2026-08-04 UTC. The v0.9.4 release train is currently in active integration testing, sitting 77 commits ahead of the main development branch.
## 3. Hot Issues
Top 10 high-engagement community issues:
1. **List project on agentclientprotocol/registry for native Zed installation** [#3192](https://github.com/Hmbown/DeepSeek-TUI/issues/3192)
   With 13 comments (the highest engagement this period), this feature will eliminate manual setup friction for Zed users, and is the top community priority for expanding editor ecosystem adoption.
2. **v0.9.3 Fleet auto loadout and shared semantic route system** [#3205](https://github.com/Hmbown/DeepSeek-TUI/issues/3205)
   11 comments, this architectural effort builds a unified model/loadout selector shared across TUI, CLI, subagents and distributed Fleet workers, eliminating duplicated configuration logic across 5 disconnected code paths. Users estimate this will cut multi-node Fleet setup time by over 70%.
3. **Add support for low-cost OpenCode Go/Zen DeepSeek-V4 provider** [#1481](https://github.com/Hmbown/DeepSeek-TUI/issues/1481)
   10 comments + 1 upvote, community users are requesting support for the third-party DeepSeek-V4 hosting service that offers 90% lower token pricing than official DeepSeek endpoints, targeting reduced inference costs for personal local use.
4. **Dedicated runtime /stop command for autonomous workflow interrupts** [#4959](https://github.com/Hmbown/DeepSeek-TUI/issues/4959)
   7 comments, this feature solves a critical reliability pain point where text-based "stop" requests are ignored by agents running in full-autonomous YOLO mode, preventing unintended system changes from runaway tool execution.
5. **Localization discussion: Chinese translation alignment for the "Constitution" core document** [#4949](https://github.com/Hmbown/DeepSeek-TUI/issues/4949)
   7 comments, native Chinese-speaking contributors are voting between translation options to avoid unintended political connotations of the literal translation "宪法" (Constitution) and select a product-aligned term like "协作准则" (Collaboration Guidelines).
6. **CLI/TUI parity for subagent and runtime control surfaces** [#4022](https://github.com/Hmbown/DeepSeek-TUI/issues/4022)
   7 comments, this effort ensures no subagent management features are locked exclusively to the TUI interface, unblocking future cloud remote workbench integrations.
7. **Universal PreToolUse/PostToolUse hook layer for unified Cancel/Pause/Resume** [#1917](https://github.com/Hmbown/DeepSeek-TUI/issues/1917)
   5 comments, this unifying architectural pattern will eliminate fragmented interrupt logic that causes reliability gaps for long-running multi-step workflows.
8. **Bug: No persistent cross-session memory** [#2492](https://github.com/Hmbown/DeepSeek-TUI/issues/2492)
   5 comments, users report the TUI loses all prior session context after restarting, and manually saved memory entries are not auto-loaded on boot, a top usability pain point for long-running development projects.
9. **Dead code sweep for 464 #[allow(dead_code)] Rust attributes across 143 files** [#4785](https://github.com/Hmbown/DeepSeek-TUI/issues/4785)
   4 comments, the engineering team is addressing technical debt that hides code drift and unmaintained functions from compiler checks, which has caused multiple silent runtime errors in prior releases.
10. **Clickable file path previews in TUI output** [#2342](https://github.com/Hmbown/DeepSeek-TUI/issues/2342)
    4 comments, this quality-of-life feature removes the requirement for users to manually navigate generated file locations via their system file explorer after the agent completes code generation.
## 4. Key PR Progress
1. **v0.9.4 release train integration umbrella PR** [#5135](https://github.com/Hmbown/DeepSeek-TUI/pull/5135)
    This 77-commit PR supersedes the prior 2026-08-01 release candidate, containing all planned features for the upcoming v0.9.4 public release.
2. **Surface reasoning content for Alibaba Model Studio official routes** [#5233](https://github.com/Hmbown/DeepSeek-TUI/pull/5233)
    Classifies `reasoning_content` as a dedicated thinking stream for Model Studio endpoints, adding native support for DeepSeek-V4 and GLM series reasoning output with dedicated controls for thinking state preservation.
3. **Expose persistent goal-loop state and controls via Runtime API** [#5133](https://github.com/Hmbown/DeepSeek-TUI/pull/5133)
    Adds new HTTP endpoints to read active task goal state and drive lifecycle transitions, enabling third-party managed clients to build custom workflow controls on top of DeepSeek TUI.
4. **Clear deny-level clippy lints to unblock v0.9.4 CI** [#5231](https://github.com/Hmbown/DeepSeek-TUI/pull/5231)
    Fixed 30 CI-blocking Rust lints across TUI binary and test targets, satisfying the release train's strict `-D warnings` lint check requirement.
5. **Pin ratatui TUI library to stable v0.30.0** [#5192](https://github.com/Hmbown/DeepSeek-TUI/pull/5192)
    Resolves a critical race condition in newer ratatui versions that causes `Terminal::clear()` to block the TUI event loop by querying cursor position during startup.
6. **Full MCP server lifecycle management endpoints for Runtime API** [#5130](https://github.com/Hmbown/DeepSeek-TUI/pull/5130)
    Removes the requirement for users to manually edit TOML config

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*