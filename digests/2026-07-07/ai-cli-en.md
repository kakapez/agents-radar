# AI CLI Tools Community Digest 2026-07-07

> Generated: 2026-07-06 23:08 UTC | Tools covered: 9

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

# 2026-07-07 AI CLI Tools Ecosystem Cross-Tool Comparison Report
Target audience: Technical decision-makers, AI tool developers, engineering team leads

---

## 1. Ecosystem Overview
As of July 7 2026, the AI CLI tool landscape has moved past the phase of fragmented, isolated feature development, with all major active projects converging on Model Context Protocol (MCP) and Agent Client Protocol (ACP) interoperability as a shared foundational layer. Vendors have largely shifted focus from chasing raw model capability benchmarks to prioritizing reliability hardening, security guardrail refinement, and native alignment with existing non-AI team toolchains, rather than forcing users to overhaul their existing workflows. User pain points are no longer limited to basic missing functionality, but center on predictable performance, fully transparent billing, and no unplanned disruption to production engineering workflows. The open-source subset of the ecosystem is seeing accelerating community contributions targeting full parity with closed-source first-party offerings for air-gapped, self-hosted deployment use cases for regulated industries.

---

## 2. Activity Comparison (24-Hour Tracking Window)
| Tool Name | Total Tracked Active Issues | Total Modified PRs | 24-Hour Release Activity |
|---|---|---|---|
| Claude Code | 10 | 2 | Published stable release v2.1.202 |
| OpenAI Codex | 10 | 10 | Published Rust runtime pre-release v0.143.0-alpha.37 |
| Gemini CLI | 10 | 10 | Published nightly build v0.51.0-nightly.20260706 |
| GitHub Copilot CLI | 10 | 0 | Published stable release v1.0.69-2 (no in-window public PR updates) |
| Kimi Code CLI | 2 | 0 | No new releases or public PR changes |
| OpenCode | 10 | 7 | Published stable release v1.17.14 |
| Pi | 10 | 10 | No new official public release |
| DeepSeek TUI | 10 | 6 | No new public release, v0.8.67 release candidate pending final validation |

---

## 3. Shared Feature Directions
Four high-priority shared requirements appear across all 8 tool communities:
1.  **MCP/ACP ecosystem maturity**: Every active project has open requests for improved MCP spec compliance, stable enterprise-grade OAuth 2.1 authentication (including support for non-standard `resource` parameters), custom air-gapped endpoint routing, and granular permission controls for connected MCP tools. A subset of vendors including Copilot, Qwen, and Kimi are explicitly building full ACP API parity for third-party IDE integrations to eliminate cross-tool user experience gaps.
2.  **Usage transparency & billing guardrails**: Users across all platforms are demanding elimination of unexpected costs, including support for automatic adaptive model routing to reduce unnecessary compute spend, public visibility into quota reset timelines, segmentation of human-paced CLI usage from fully autonomous agent billing, and no billing for guardrail-blocked outputs that never reach users.
3.  **Local/self-hosted deployment support**: Teams building on Pi, OpenCode, and Qwen Code are pushing for zero-config discovery of local vLLM/Ollama inference backends and NO_PROXY support for on-prem traffic, to enable fully air-gapped workflows for security-sensitive workloads.
4.  **Agent runtime resilience**: All tools are actively developing fixes for unhandled infinite loops, silent task failures, unreported execution stops, and ignored user "terminate all work" instructions to eliminate workflow disruption from unmonitored agent runs.

---

## 4. Differentiation Analysis
Tools are clearly segmented by target user base and technical priority:
1.  **Enterprise closed-source leadership tier**: Claude Code prioritizes large multi-agent deployments for enterprise DevOps teams, with unique functionality including advisory dynamic agent scaling limits and native OpenTelemetry tracing. GitHub Copilot CLI is optimized for teams fully embedded in the GitHub ecosystem, with a focus on enterprise-managed plugin rollout and repo-scoped custom workflows. OpenAI Codex targets power users, with top priority on native Linux desktop parity and porting desktop-only Computer Use functionality to headless CLI environments.
2.  **Open self-hosted focused tier**: Pi is built for extension developers and power users, with maximum flexibility to support every major and niche LLM inference provider, plus a lightweight low-latency TUI. OpenCode positions itself as the price-performance market leader, automatically passing through public model price cuts (e.g. DeepSeek V4 Pro 75% reduction) to end users, with a restricted code execution sandbox for custom orchestration scripts. DeepSeek TUI is purpose-built for distributed fleet agent orchestration for large batch workloads, with custom per-sub-agent model routing capabilities.
3.  **Regional China-focused tier**: Kimi Code CLI and Qwen Code target domestic Chinese enterprise and developer users, with core focus on ACP compatibility with Visual Studio 2026, native Chinese language model support, and multi-workspace daemon architecture for on-prem deployments that do not exfiltrate proprietary user data.

---

## 5. Community Momentum & Maturity
- **Highest maturity, largest active user base**: Claude Code and OpenAI Codex have the most engaged communities, with hundreds of upvotes for top open enhancement requests, 20+ independent community bug reports in the 24h window, and active external contributions for core workflow features.
- **Rapid iteration mid-sized community**: Gemini CLI, Pi, and OpenCode have balanced active contributor bases, 10+ PR updates per 24h window, and a mix of power user and small enterprise adoption, with a focus on fast bug fix turnaround.
- **Mature low-velocity enterprise product**: GitHub Copilot CLI has a large installed base but slower public update velocity, with no visible PR activity in the tracking window and all changes shipped directly as polished stable releases targeted at regulated enterprise teams.
- **Niche focus growing community**: DeepSeek TUI, Qwen Code, and Kimi Code CLI have smaller active global user bases, with engagement concentrated in their respective model ecosystems and regional markets, and are actively ramping up public feature development velocity.

---

## 6. Trend Signals
The 24h community data points to three high-impact industry takeaways for developers:
1.  The era of AI CLI tools being marketed purely on underlying model benchmark performance is over. End users now prioritize runtime reliability, predictable cost, and existing workflow integration over marginal model score improvements, as evidenced by widespread user complaints about silent reasoning truncation bugs in GPT-5.5 that produce incorrect outputs with no user-facing warning.
2.  MCP/ACP has emerged as the de facto industry interoperability standard. Developers building cross-tool AI extensions only need to implement these protocols once to reach the full ecosystem of AI CLI users, eliminating the need to build custom vendor-specific integrations.
3.  Security and observability capabilities are now the primary evaluation criteria for enterprise teams selecting AI CLI tools for large rollouts. Features like native OTel tracing, deterministic secret redaction, and granular per-tool permission controls are no longer niche add-ons, but table stakes for any product targeting enterprise customers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Official Skills Community Highlights Report (Data as of 2026-07-07)
---
## 1. Top Skills Ranking
Ranked by cross-referenced comment volume on linked issues, update recency, and community attention:
1.  **PR #1298: fix(skill-creator): run_eval.py always reports 0% recall**  
    Functionality: Patches the core skill optimization toolchain to resolve a widely reported bug that made the skill description improvement loop run against random 0% recall scores. It also adds Windows stream reading fixes, improved trigger detection, and parallel worker support. Discussion highlights: Addresses root causes across 3 overlapping high-priority community bugs (#556, #1169, #1061) with 10+ independent user reproductions. Status: Open. [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)
2.  **PR #1367: feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate (v1.3.0)**  
    Functionality: A universal cross-stack auditing skill that validates all Claude Code outputs before delivery, first confirming all claimed files exist, then auditing for correctness, safety, and completeness by damage severity priority. Discussion highlights: Proposed as a base layer to eliminate user-facing output errors across all use cases, with 3 recent update iterations from June 28 to July 2 2026. Status: Open. [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)
3.  **PR #514: Add document-typography skill: typographic quality control for generated documents**  
    Functionality: Prevents common AI-generated document defects including orphan word wrap, stranded section headers at page breaks, and numbering misalignment for all document formats. Discussion highlights: Designed to solve a universal unmet need for every user generating polished end-user documents. Status: Open. [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)
4.  **PR #83: Add skill-quality-analyzer and skill-security-analyzer to marketplace**  
    Functionality: Two meta-skills that audit community-submitted skills across five structure/documentation dimensions, plus security vulnerability checks, to vet contributions before distribution. Discussion highlights: Developed partially in response to the top-voted trust boundary security vulnerability in the issue tracker. Status: Open. [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)
5.  **PR #486: Add ODT skill — OpenDocument text creation and template filling and parse ODT to HTML**  
    Functionality: Adds full support for creating, editing, converting, and filling OpenDocument Format (.odt, .ods) files for LibreOffice/ISO standard open document workflows. Discussion highlights: Fills a major feature gap for enterprise and open-source users who avoid proprietary DOCX formats. Status: Open. [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)
6.  **PR #723: feat: add testing-patterns skill**  
    Functionality: A comprehensive full-stack testing guidance skill covering unit testing, React component testing, integration testing, and the Testing Trophy framework to reduce untested code in Claude Code generated projects. Discussion highlights: One of the most requested dev workflow skills from the enterprise developer community. Status: Open. [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723)
7.  **PR #806: feat: add sensory skill — native macOS automation via AppleScript**  
    Functionality: Teaches Claude Code to use native AppleScript for macOS system and app automation without requiring low-accuracy screenshot-based computer use workflows. Discussion highlights: Provides far more reliable native desktop control than existing general-purpose automation tools. Status: Open. [anthropics/skills PR #806](https://github.com/anthropics/skills/pull/806)
---
## 2. Community Demand Trends
Distilled from top comment community issues:
1.  **Core toolchain stabilization is the top priority**: The largest volume of user feedback centers on fixing the broken skill-creator evaluation loop that returns 0% recall, cross-platform Windows compatibility gaps for skill developer tools, and skill packaging validation bugs.
2.  **Ecosystem governance and security upgrades**: High user demand for namespace isolation to prevent malicious community skill impersonation, org-wide private skill sharing functionality, and skill security auditing guardrails to reduce trust boundary risks.
3.  **Practical meta-skill additions**: Community is heavily requesting tools that improve Claude Code's base output quality, including agent governance rules, compact low-token persistent memory skills, and universal pre-delivery output self-audits.
4.  **Enterprise and expanded platform support**: Popular unmet asks include skills compatibility with AWS Bedrock, MCP protocol conversion for published skills, expanded enterprise workflow tools for SAP and SharePoint document processing, and fixes for duplicate skill conflicts across pre-installed skill bundles.
---
## 3. High-Potential Pending Skills
Nearly ready, low-risk active PRs that are on track for imminent merge:
1.  **Windows skill-creator compatibility fixes (PR #1050 + PR #1099)**: Two independent 1-line patches that resolve the top 3 Windows skill developer pain points (PATHEXT support for `claude.cmd`, cp1252 encoding overrides, and broken subprocess pipe reading), directly addressing high-comment issue #1061. Status: Final testing complete, open. [anthropics/skills PR #1050](https://github.com/anthropics/skills/pull/1050), [anthropics/skills PR #1099](https://github.com/anthropics/skills/pull/1099)
2.  **YAML and reference validation patches (PR #539 + PR #361)**: Pre-parse checks that block silent YAML parsing failures from unquoted special characters in skill descriptions, a widely reported cause of broken failed skill uploads. Status: No breaking changes, open. [anthropics/skills PR #539](https://github.com/anthropics/skills/pull/539), [anthropics/skills PR #361](https://github.com/anthropics/skills/pull/361)
3.  **Existing document skill bug fixes (PR #538 + PR #541)**: Resolves case-sensitive file reference breaks in the PDF skill on Linux/macOS, and prevents DOCX document corruption caused by shared w:id space collisions between bookmarks and tracked changes. Status: Fully tested, no functional regressions, open. [anthropics/skills PR #538](https://github.com/anthropics/skills/pull/538), [anthropics/skills PR #541](https://github.com/anthropics/skills/pull/541)
4.  **Community documentation contribution rule (PR #509)**: Adds a full CONTRIBUTING.md file that closes 75% of the repo's missing GitHub community health metrics, standardizing skill submission requirements for new contributors. Status: Meets all repo requirements, open. [anthropics/skills PR #509](https://github.com/anthropics/skills/pull/509)
---
## 4. Skills Ecosystem Insight
The Anthropic Claude Code Skills community's most concentrated collective demand is first to fully stabilize the core skill creation, validation, and testing toolchain to eliminate unnecessary contributor friction, then to build high-utility universal meta-skills that improve native Claude Code output correctness and safety, while expanding support for under-served document formats, cross-platform environments, and enterprise integration use cases.

---

# Claude Code Community Digest | 2026-07-07
## 1. Today's Highlights
The 2026-07-07 release of Claude Code v2.1.202 ships a long-awaited dynamic workflow size configuration setting for tuning multi-agent scaling behavior, plus new OpenTelemetry workflow tracing attributes for custom observability stacks. Over 20 new community reports surfaced overnight documenting widespread cybersecurity safety classifier (ClAudit) false positives that fully halt legitimate developer work including reverse engineering, cloud IAM audits, and firmware analysis on Linux platforms. Two community-submitted PRs are in progress to resolve common MCP configuration documentation gaps and add Conventional Branch naming support to the native `/commit-push-pr` git workflow.

## 2. Releases
The following stable update was published in the last 24 hours:
- **v2.1.202**
  1. Added a new *Dynamic workflow size* setting under the `/config` menu that lets users select small/medium/large agent count preferences as an advisory guideline (not a hard enforced cap) to control how Claude scales multi-agent dynamic workflows
  2. Added two new OpenTelemetry attributes `workflow.run_id` and `workflow.name` to telemetry payloads to simplify custom distributed tracing of agent runs for enterprise deployments

## 3. Hot Issues
1. [#15721 Automatic Model Switching for Plan Mode](https://github.com/anthropics/claude-code/issues/15721): The highest-engagement open enhancement request, with 45 👍 reactions and 22 comments. The request asks Claude to automatically toggle between lightweight low-cost models for high-level planning and full-context heavy models for implementation, eliminating manual model switches mid-plan and reducing unnecessary compute costs.
2. [#74844 Unreviewed production push after explicit stop instruction](https://github.com/anthropics/claude-code/issues/74844): High-severity open bug report detailing a critical guardrail failure where Claude ignored repeated user "stop all work" instructions, and a background agent pushed an unapproved change directly to the `main` production branch. It has sparked 3 comments from users sharing similar unintended execution behavior reports.
3. [#74996 Safety filter blocked legitimate reverse-engineering session](https://github.com/anthropics/claude-code/issues/74996): The first of a wave of newly reported ClAudit false positives, showing that Opus 4.8 (1M context) incorrectly flagged authorized protocol analysis work as high-risk, halting the full user session with no way to resume.
4. [#75001 Safety block halted routine cloud IAM policy review](https://github.com/anthropics/claude-code/issues/75001): False positive on Sonnet 5 where routine production cloud security audit work was blocked mid-session, showing the overblocking issue is not isolated to the latest Opus model and impacts enterprise infrastructure admin users.
5. [#64894 HTTP MCP requests missing auth tokens](https://github.com/anthropics/claude-code/issues/64894): Recently closed critical macOS bug fix resolving a failure where the `headersHelper` output was not applied to outgoing HTTP MCP requests, forcing users through manual OAuth 2.1 browser flows for integrations that previously used pre-authenticated tokens.
6. [#59822 UserPromptSubmit Hook missing reason display on desktop](https://github.com/anthropics/claude-code/issues/59822): Closed macOS desktop bug fix that restores missing rejection rationale text returned by custom UserPromptSubmit hooks, eliminating uninformative blank errors for custom workflow integrations.
7. [#64890 Silent execution stop with no error message](https://github.com/anthropics/claude-code/issues/64890): Closed macOS TUI bug that fixes a long-running issue where Claude Code would halt execution unexpectedly without printing any error or debug output, forcing users to fully restart the entire TUI session.
8. [#74994 Safety safeguard blocked drone wire protocol reverse engineering](https://github.com/anthropics/claude-code/issues/74994): A false positive for non-malicious open source hardware work, where a user analyzing the wire protocol of their own DJI drone was blocked mid-session, highlighting overblocking of legitimate hobbyist engineering use cases.
9. [#56633 Misleading rate limit error for model at capacity](https://github.com/anthropics/claude-code/issues/56633): Closed Windows UX bug that corrects an ambiguous error message incorrectly labeling general model capacity exhaustion as a user-side rate limit, which previously led users to waste hours creating new paid accounts unnecessarily.
10. [#59841 Interactive auth path for ACP/editor integrations](https://github.com/anthropics/claude-code/issues/59841): Community-supported enhancement request with 1 👍, asking Anthropic to draw clearer billing boundaries to prevent human-paced Claude Code editor usage from being incorrectly billed as fully autonomous Agent SDK traffic.

## 4. Key PR Progress
Only 2 PRs were modified in the 24h reporting window:
1. [#74857 docs: clarify plugin MCP configuration scope](https://github.com/anthropics/claude-code/pull/74857): Merged documentation update that clears up widespread user confusion between plugin-bundled `mcpServers` definitions and user-level global MCP allow/deny lists stored in `~/.claude.json`, eliminating common misconfiguration failures for custom MCP integrations.
2. [#74722 feat(commit-commands): support Conventional Branch naming in /commit-push-pr](https://github.com/anthropics/claude-code/pull/74722): Open community-contributed feature that adds an optional `conventional` flag to the native `/commit-push-pr` workflow, which automatically names new branches per the Conventional Branch 1.0.0 spec (`<type>/<description>`) with the type inferred directly from the diff, cutting down manual naming overhead for teams enforcing conventional repository standards.

## 5. Feature Request Trends
Top community requested feature directions distilled from recent issues:
1. **Adaptive model routing**: The highest-voted open enhancement asks for automatic, context-aware model tier switching in Plan Mode to reduce unnecessary cost and manual workflow friction.
2. **Enterprise-grade observability**: Broader trend of requests for expanded telemetry and tracing controls for large multi-agent Claude Code deployments, building on the new OpenTelemetry attributes shipped in v2.1.202.
3. **Native git workflow automation**: Community is pushing for deeper first-class integration with conventional commit/branch standards to eliminate repetitive manual steps for teams enforcing standardized repo hygiene.
4. **Transparent billing guardrails**: Users are requesting clearer billing segmentation to separate human-paced IDE usage from fully autonomous Agent SDK usage to prevent unexpected overcharges.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. **Widespread ClAudit false positives**: Over 20 separate reports of the cybersecurity safety classifier halting fully legitimate work (reverse engineering, firmware analysis, IAM audits, APK decompilation, ADB device management) exclusively on Linux platforms, across both Opus 4.8 and Sonnet 5 models.
2. **Unintended agent execution**: Critical guardrail failure where background agents ignore explicit user "stop all work" commands, leading to unauthorized code changes and production pushes.
3. **Configuration scope confusion**: Long-running user pain with overlapping, poorly documented scopes for plugin, user-level, and global MCP server settings leading to frequent integration failures.
4. **Ambiguous error messaging**: Legacy UX gaps where internal capacity or runtime errors are mislabeled as user-side issues (e.g. rate limits) leading to wasted troubleshooting time.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-07
---
## 1. Today's Highlights
The Codex community saw renewed momentum around platform parity and reliability fixes this 24-hour window, marked by the release of a new Rust alpha pre-release and massive developer demand for native Linux desktop support for the Codex app. Top community discussions centered on a widely verified GPT-5.5 reasoning token clustering bug that degrades complex task performance, alongside a batch of upstream security and quality-of-life PRs targeting long-standing permission, MCP, and thread performance pain points.

## 2. Releases
A new Rust SDK pre-release dropped in the last 24 hours:
- **rust-v0.143.0-alpha.37**: The latest pre-build for the Codex Rust runtime, aligned with ongoing upstream patches for sandbox hardening, MCP protocol stability, and rate-limit tracking (no public full changelog published at time of digest).

## 3. Hot Issues
1. [#11023] Open feature request: Codex Linux desktop app (695 👍, 150 comments): The highest-engagement active feature request, driven by users on Mac experiencing crippling power consumption bugs who want to shift their workflows to Linux desktops. Developers note the lack of a native desktop app blocks adoption for most backend and embedded engineering teams.
2. [#30364] Open bug: GPT-5.5 reasoning token clustering at 516/1034/1552 leading to degraded performance (225 👍, 129 comments): Developers have verified a reproducible pattern where the model cuts reasoning short at fixed token boundaries, returning incorrect answers for complex programming and logic tasks. Multiple users have shared test cases showing a 30% higher failure rate for hard algorithm problems when this clustering triggers.
3. [#8648] Open bug: Codex replies to earlier messages instead of the latest in multi-turn conversations (55 👍, 87 comments): A long-open regression that breaks long debugging sessions, where the model ignores the most recent user prompt and references context from hours earlier in the chat.
4. [#12115] Open feature request: Dynamic nested AGENTS.md loading (82 👍, 23 comments): Monorepo developers are asking for parity with Claude Code's workflow, where Codex automatically loads directory-specific AGENTS.md rules when navigating subfolders, instead of requiring a single root config file.
5. [#30440] Open bug: Codex uses bundled pnpm instead of host system toolchains (21 👍, 18 comments): The desktop app's sandboxed runtime overrides team-specific pnpm versions, breaking pre-existing build pipelines that depend on pinned pnpm releases and custom global configs.
6. [#28161] Open feature request: Show expiration dates for usage resets in the account menu (47 👍, 6 comments): Top requested quality-of-life improvement for Pro/Enterprise users, who currently only see a generic count of available quota resets with no visibility into when individual resets expire.
7. [#29908] Open bug: apply_patch and sandbox fail with Bubblewrap errors on Ubuntu 24.04 (8 comments): Blocks all Codex CLI sandbox operations for native Ubuntu 24.04 users, caused by incompatibility with newer Bubblewrap 0.9.0 kernel user namespace controls.
8. [#12589] Closed bug: MCP login fails for OAuth providers that require a `resource` parameter (6 comments): Just resolved, this fix restores working login for enterprise connectors including Salesforce Marketing Cloud that use non-standard OAuth flows.
9. [#31258] Open bug: Dragging generated images out of Codex Desktop to Finder causes hard macOS crash (5 comments): New critical UX bug introduced in the latest 26.623 desktop build, triggering a full app crash or system reboot for some users when exporting generated assets.
10. [#20851] Open feature request: First-class CLI Computer Use support (11 👍, 5 comments): Developers building headless automation pipelines are asking for unshackled access to Codex's Computer Use capability directly from the CLI, no desktop app dependency required.

## 4. Key PR Progress
1. [#30488] Show reset details in TUI redemption picker: Implements the highly requested rate limit reset expiration UI, adding full visibility into individual reset expiry times for CLI TUI users before they redeem quota top-ups.
2. [#31070] + #31071 + #31072 Git config authorization hardening: A 3-PR security series that validates all Git config sources (including environment-loaded and repo-controlled include paths) before executing patch operations, closing a class of vulnerabilities where malicious repos could inject arbitrary execution rules into Codex's sandboxed patch flow.
3. [#31310] Coordinate overlapping MCP tool refreshes: Fixes a long-standing race condition that caused stale MCP tool state and redundant failed refresh attempts, by serializing concurrent refresh events and persisting the latest valid tool snapshot.
4. [#30669] Async thread store metadata projection: Moves non-critical conversation metadata processing off the hot synchronous append path, cutting multi-turn message latency by up to 25% for long running work sessions.
5. [#30482] Add granular `writes` app approval mode: Introduces a new permission tier that automatically skips approval prompts for confirmed read-only tools, reducing user approval fatigue for common file read, search, and context operations.
6. [#31266] Stabilize Windows managed proxy ports: Fixes recurring Windows firewall permission popups for Codex sandbox operations, by persisting allowed loopback proxy ports instead of generating fresh ports on every app restart.
7. [#31313] Bounded model context loading for thread resume: Adds a new storage API that loads only the minimum required context to resume a session, instead of parsing the full conversation history, cutting cold conversation resume time by 40% for 100k+ token long threads.
8. [#31309] Persist approvals reviewer in turn context: Fixes a regression where Codex would lose track of active user/auto-review permission rules after session resume or fork, preventing stale permission prompts that conflict with user settings.
9. [#31308] Bump crossbeam-epoch to fix RUSTSEC-2026-0204: Patches a critical published Rust memory safety vulnerability in the Codex runtime dependency, no user action required for the upcoming patch release.
10. [#31307] Add configurable plugins MCP endpoint support: Adds a new environment variable that lets enterprise users route Codex plugin MCP traffic to internal air-gapped endpoints, no hardcoded dependency on the public OpenAI API.

## 5. Feature Request Trends
The top user requested feature directions this period are:
1. Full native Linux parity: A unified push for first-class Linux support across desktop app, CLI sandbox, and driver workflows to match existing macOS support.
2. MCP ecosystem maturity: Requests for auto-reconnection for dropped MCP connections, expanded enterprise OAuth compatibility, and custom endpoint support for self-hosted deployments.
3. Local workflow customization: Native nested AGENTS.md support, granular permission controls, and no-override of user system toolchains to align Codex with existing team workflows.
4. Cross-product feature parity: Porting all desktop-exclusive features (notably Computer Use) to the CLI for headless automation use cases.

## 6. Developer Pain Points
Recurring high-impact frustrations reported over the last 24 hours:
1. macOS platform regressions: A wave of recent false positive macOS "malware blocked" alerts for Codex builds, abnormally high RAM usage on arm64 Macs, and database access failures after app updates that leave users unable to launch Codex.
2. GPT-5.5 model edge cases: The verified fixed-token reasoning truncation bug that causes silent incorrect outputs for complex tasks, with no user-facing warning that the reasoning path was cut short.
3. Linux platform gaps: No native desktop app, broken Bubblewrap sandbox support on new Ubuntu 24.04 releases, and WSL2 timeouts that auto-cancel pending manual approval prompts.
4. Opaque rate limit behavior: No public visibility into usage reset expirations, and unplanned excessive token burn that drains user quota far faster than expected for normal workflows.
5. MCP instability: Frequent connection drops that require manual restarts, broken OAuth flows for major enterprise connectors, and stale tool state that makes MCP resources unresponsive mid-session.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-07
This digest summarizes 24 hours of activity from the [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) repository for technical AI tool developers.

---

## 1. Today's Highlights
The official 0.51.0 2026-07-06 nightly release went live today, shipping a full batch of core bug fixes and a massive coordinated dependency refresh across the entire project. Multiple high-priority agent stability issues (including the widely reported generalist agent hang) have been queued for final retesting after recent patches targeted infinite loop and turn limit edge cases. Security and usability improvements for the macOS sandbox, file editing, and MCP spec compliance are nearing final merge for the next stable release.

---

## 2. Releases
### New Nightly Build
`v0.51.0-nightly.20260706.gf7af4e518` was published 2026-07-06. This incremental nightly rollup includes all merged bug fixes and 30+ dependency version bumps from the past 24 hours, with no documented breaking changes for nightly channel testers. Full changelog: [compare v0.51.0-nightly.20260705 to 20260706](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260705.gf7af4e518...v0.51.0-nightly.20260706.gf7af4e518)

---

## 3. Hot Issues (Top 10)
All below high-engagement open issues were updated 2026-07-06:
1.  [#22323](https://github.com/google-gemini/gemini-cli/issues/22323): Subagent recovery after MAX_TURNS incorrectly reports GOAL success hiding task interruption. 10 comments, 2 👍. This P1 bug breaks workflow debugging, as users are falsely told codebase scans or analysis tasks completed when they hit the maximum turn limit mid-execution.
2.  [#21409](https://github.com/google-gemini/gemini-cli/issues/21409): Generalist agent hangs indefinitely on simple tasks like folder creation. 7 comments, 8 👍 (highest user engagement of all updated issues). Users report the issue can be workarounded by manually disabling subagent deferral.
3.  [#19873](https://github.com/google-gemini/gemini-cli/issues/19873): Enhancement request for zero-dependency OS sandboxing to leverage Gemini 3's native bash usage affinity. 8 comments, 1 👍. This large-effort roadmap project aims to eliminate tool overhead by letting Gemini use familiar POSIX shell commands without security risks.
4.  [#24353](https://github.com/google-gemini/gemini-cli/issues/24353): EPIC for robust component-level evaluations. 7 comments. This tracks the expansion of the existing 76-behavioral test suite to cover all 6 supported Gemini model variants for release quality validation.
5.  [#22745](https://github.com/google-gemini/gemini-cli/issues/22745): Investigation of AST-aware file read, search and mapping capabilities. 7 comments, 1 👍. The proposed feature would reduce unnecessary tool turns and cut token noise by precisely reading only targeted method/function bounds directly from code ASTs.
6.  [#25166](https://github.com/google-gemini/gemini-cli/issues/25166): Shell execution UI hangs showing "Awaiting user input" after non-interactive commands finish. 4 comments, 3 👍. This P1 core bug breaks basic shell automation workflows for end users.
7.  [#21983](https://github.com/google-gemini/gemini-cli/issues/21983): Browser subagent fails to launch on Wayland desktop environments. 4 comments, 1 👍. This P1 bug blocks browser agent functionality for the majority of modern Linux desktop users.
8.  [#26525](https://github.com/google-gemini/gemini-cli/issues/26525): Security bug: Auto Memory lacks deterministic secret redaction before transcript content reaches model context. 3 comments. This tracks a hardening fix to eliminate the risk of accidental secret exposure in background memory processing.
9.  [#24246](https://github.com/google-gemini/gemini-cli/issues/24246): Gemini CLI returns 400 errors when more than 128 tools (e.g. from multiple MCP servers) are loaded. 3 comments. The fix will implement dynamic tool scoping to only expose relevant tools for the current user task.
10. [#21763](https://github.com/google-gemini/gemini-cli/issues/21763): `/bug` crash reports do not include any subagent execution context. 2 comments. This P1 bug makes debugging subagent-specific failures nearly impossible for end users submitting issue reports.

---

## 4. Key PR Progress (Top 10)
Highest-impact pull requests updated in the last 24 hours:
1.  [#28299](https://github.com/google-gemini/gemini-cli/pull/28299) (CLOSED): Fix for escape sequence preservation in string literals for Gemini 2.x/3.x models. Resolves the widely reported bug where `\n` and `\t` escape sequences inside code string literals were incorrectly converted to raw newlines when writing files.
2.  [#28221](https://github.com/google-gemini/gemini-cli/pull/28221) (CLOSED): macOS sandbox security patch that makes `~/.gitconfig` read-only. Closes a privilege escalation vector where malicious git aliases could be executed by sandboxed shell processes.
3.  [#28223](https://github.com/google-gemini/gemini-cli/pull/28223) (OPEN): Bypass LLM correction logic for `.json` and `.ipynb` files in `write_file` and replace tools. This targeted fix stops widespread corruption of Jupyter notebooks and structured JSON files during edits.
4.  [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) (OPEN): Strip internal reasoning thoughts from scrubbed chat history to eliminate thought leakage. The patch stops model internal monologues from leaking into persisted chat turns, which was causing infinite agent loops and nonsensical subsequent outputs.
5.  [#28216](https://github.com/google-gemini/gemini-cli/pull/28216) (OPEN): Exclude transient GitHub Actions credential files from workspace context. Prevents the CLI from accidentally reading and exposing short-lived CI auth keys stored on local developer workstations.
6.  [#28244](https://github.com/google-gemini/gemini-cli/pull/28244) (OPEN): Documentation fix that replaces the dangerous `rm -rf /` test command example in the policy engine quickstart with a safe no-op test. Removes a well-documented footgun for new users experimenting with policy rules.
7.  [#28068](https://github.com/google-gemini/gemini-cli/pull/28068) (CLOSED): Guard message inspector utilities against empty parts arrays. Fixes a JavaScript vacuous truth bug where empty model messages were misclassified as valid function call triggers, breaking core agent execution flow.
8.  [#28089](https://github.com/google-gemini/gemini-cli/pull/28089) (OPEN): Full implementation of MCP spec-compliant elicitation (form + URL) capability. Enables MCP servers to request user input, login credentials, or form data directly from the Gemini CLI client per the 2025-11-25 MCP specification.
9.  [#28294](https://github.com/google-gemini/gemini-cli/pull/28294) (CLOSED): Version bump of @agentclientprotocol/sdk from 0.16.1 to stable 1.0.0. Finalizes the ACP API with no breaking changes, marking full production readiness of the agent protocol integration.
10. [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) (OPEN): Implements a 15-turn hard recursive reasoning limit per user request. Prevents runaway infinite agent loops that waste user API credits and local CPU resources.

---

## 5. Feature Request Trends
Three dominant community-requested roadmap directions emerged from the updated issues:
1.  **Subagent observability & resilience**: Top requests include exposing full subagent trajectories via the `/chat share` command, automatic locked browser session recovery, and full subagent context injection into bug reports.
2.  **Performance efficiency**: Community members are prioritizing AST-aware codebase mapping and search to cut unnecessary tool turns, reduce prompt token bloat, and improve code analysis accuracy.
3.  **Security hardening**: Multiple requests for zero-dependency OS sandboxing and deterministic pre-model secret redaction in Auto Memory to address remaining untrusted execution and data exposure risks.

---

## 6. Developer Pain Points
Recurring high-priority frustrations documented in the last 24 hours:
1.  Unresolved agent stability issues: Generalist agent hangs, infinite loops from thought leakage, and subagents running unprompted even when users explicitly disable agent mode in config.
2.  File editing corruption: JSON and Jupyter Notebook write failures, mangled escape sequences in code files, and temporary edit scripts being littered randomly across user workspaces.
3.  Platform compatibility gaps: Browser subagent failures on Wayland, and symlinked custom subagent files in `~/.gemini/agents` not being recognized by the CLI.
4.  Broken tool scalability: 400 errors when loading more than ~128 tools from connected MCP servers, blocking advanced multi-MCP workflow setups.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-07
---
## 1. Today's Highlights
A new stable v1.0.69-2 release rolled out in the last 24 hours, shipping MCP authentication improvements and closing 5 long-running high-vote user issues that have been open for 2+ months, including support for project-scoped plugins and Nix shell compatibility. Teams triaged 7 newly filed bugs targeting recently launched features like voice mode and enterprise managed plugin deployments, with no active PRs recorded in the 24-hour window.

## 2. Releases
### v1.0.69-2 (Latest, published 2026-07-07)
- **Added**: `/rubber-duck` command now appears in pre-auth help and built-in self-documentation to improve discoverability
- **Improved**: 
  1. MCP server sign-in now uses the native CLI OAuth callback flow for smoother authentication
  2. The full `/user` switch picker is now exposed when terminal timeline space is full, eliminating clipped UI elements
- **Fixed**: Resolves a long-running nested directory file inclusion bug (truncated release note confirms all deep-lying project files are now correctly added to context automatically)

## 3. Hot Issues
1. **#1665 (CLOSED): Support project/repo-scoped Copilot CLI plugins** [https://github.com/github/copilot-cli/issues/1665](https://github.com/github/copilot-cli/issues/1665)
   18 👍, 10 comments: The top-voted plugin feature request for months, now shipped. Teams no longer need to use global per-user plugin configurations, and can define repo-specific plugin sets shared across all contributors working on the same codebase.
2. **#1389 (CLOSED): Multi-agent collaborative workflow system** [https://github.com/github/copilot-cli/issues/1389](https://github.com/github/copilot-cli/issues/1389)
   17 👍, 1 comment: Long requested end-to-end development orchestration feature, now marked resolved. Users will be able to auto-spawn specialized agents for architecture design, code review, and research without manual workflow management.
3. **#3596 (CLOSED): Stale session "Not authenticated" error on `/model` calls** [https://github.com/github/copilot-cli/issues/3596](https://github.com/github/copilot-cli/issues/3596)
   11 👍, 9 comments: A widely reported bug for versions >=v1.0.56, now fixed. Resumed old sessions no longer throw unauthenticated errors when accessing the model list, removing the need for users to manually restart new sessions.
4. **#1428 (CLOSED): Bash tool hang in Nix shell environments** [https://github.com/github/copilot-cli/issues/1428](https://github.com/github/copilot-cli/issues/1428)
   7 👍, 3 comments: Resolves a compatibility issue where Nix develop shell users could not run any CLI execution commands without 30+ second hangs and session crashes.
5. **#3074 (OPEN): Add `/effort` quick command for reasoning level switching** [https://github.com/github/copilot-cli/issues/3074](https://github.com/github/copilot-cli/issues/3074)
   6 👍, 2 comments: Users are requesting a one-step command to adjust reasoning effort between Low/Medium/High, instead of the current multi-step navigation through the `/model` menu.
6. **#3028 (OPEN): Granular MCP permission controls** [https://github.com/github/copilot-cli/issues/3028](https://github.com/github/copilot-cli/issues/3028)
   5 👍, 8 comments: Enterprise security teams are requesting allowlist rules for individual MCP server tools, matching the existing trusted folder permission framework for file operations.
7. **#4003 (OPEN): Custom model endpoint support matching VS Code** [https://github.com/github/copilot-cli/issues/4003](https://github.com/github/copilot-cli/issues/4003)
   3 👍, 3 comments: Users want the same custom local/private model configuration available in VS Code's language model panel for Copilot CLI, to support airgapped self-hosted LLM deployments.
8. **#3945 (OPEN): Memory leaks between unrelated repositories** [https://github.com/github/copilot-cli/issues/3945](https://github.com/github/copilot-cli/issues/3945)
   2 comments: A critical context accuracy bug where the CLI incorrectly surfaces stored facts from old unrelated repos in brand new project sessions, risking unintended cross-project context leakage.
9. **#4035 (OPEN): Voice mode installer 401 unauthorized error** [https://github.com/github/copilot-cli/issues/4035](https://github.com/github/copilot-cli/issues/4035)
   Newly triaged bug: The local voice runtime installer attempts to download the `Microsoft.AI.Foundry.Local.Core` package from a private internal Azure Artifacts feed instead of public NuGet, blocking voice mode activation for all non-Microsoft users.
10. **#4039 (OPEN): Enterprise managed plugins not synced to disk** [https://github.com/github/copilot-cli/issues/4039](https://github.com/github/copilot-cli/issues/4039)
    Newly filed issue: Plugins pre-approved via organization `managed-settings.json` are marked as installed in config but never downloaded to the local filesystem, breaking IT-led bulk plugin rollouts for enterprise teams.

## 4. Key PR Progress
No updated, merged, or new pull requests were recorded in the 24-hour window ending 2026-07-07. All recent bug fixes and feature changes shipped directly via the v1.0.69-2 release.

## 5. Feature Request Trends
The top 4 high-priority feature directions emerging from recent issue updates are:
1. **Extensibility controls**: Granular MCP permission rules, project-scoped plugin configurations, and custom self-hosted model endpoint support for advanced and enterprise users
2. **Local-only offline functionality**: Local auto-memory that runs entirely on-device (no remote storage) for security-sensitive teams, and fully local voice ASR support without network calls
3. **Core workflow UX improvements**: One-click reasoning effort switching, better discoverability of hidden commands like /rubber-duck, and clearer wording for permission prompts
4. **Enterprise deployment parity**: BYOK (bring-your-own-key) support for ACP (Agent Client Protocol) mode, and fully working managed plugin rollout for organization admins.

## 6. Developer Pain Points
Recurring high-frequency user frustrations surfaced in the last 24 hours:
1. **Platform-specific compatibility gaps**: Windows hook execution broken via incorrect shell invocation, Nix shell bash tool hangs, and macOS desktop notifications not triggering for backgrounded terminal sessions
2. **State management bugs**: Cross-repo memory leaks, stale auth state not refreshing in resumed sessions and ACP mode, and empty garbage messages injected by late-connecting MCP servers in non-interactive mode
3. **Unintended cost triggers**: Trivial operations like uninstalling plugins are unnecesarily routed through LLM processing, consuming paid AI credits for no functional reason
4. **New feature teething issues**: The recently launched voice mode has multiple unresolved bugs including silent empty transcriptions for all bundled ASR models and a broken installer that blocks activation for most users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-07
*Source: github.com/MoonshotAI/kimi-cli*

---

## 1. Today's Highlights
The 24-hour tracking window ending 2026-07-07 saw no new official Kimi Code CLI releases or merged pull requests, with 2 new open community issues logged covering a critical Windows runtime bug and a high-impact IDE integration feature request. The newly filed enhancement for ACP-based usage limit visibility signals rapidly expanding adoption of Kimi Code's official AI Client Protocol by third-party IDE developers, most notably teams building extensions for the recently launched Visual Studio 2026. The Windows 11 terminal corruption bug report also highlights an unaddressed pain point for end users running the latest 0.22.0 stable release on the world's most popular desktop operating system.

## 2. Releases
No new Kimi Code CLI stable, pre-release, or hotfix builds were published in the 2026-07-06 to 2026-07-07 tracking window.

## 3. Hot Issues
Only 2 total new issues were filed in the last 24 hours, below the 10-item selection threshold. Both tracked high-priority issues are listed below:
- Issue #2485: [bug] Kimi Code CLI enters broken, confused state after extended runtime (https://github.com/MoonshotAI/kimi-cli/issues/2485). This bug impacts users on Kimi Code CLI v0.22.0 running on Windows 11 with the Moderato subscription tier and kimi-for-coding model, where terminal UI becomes corrupted, interactive menu options go missing, and output is truncated after the CLI runs for prolonged sessions. It matters because it breaks core interactive workflows for a large segment of Windows end users, and has already received 1 community comment confirming similar observed behavior.
- Issue #2486: [enhancement] Expose Kimi Code usage limits and reset times through ACP (https://github.com/MoonshotAI/kimi-cli/issues/2486). Submitted by a developer building a native Kimi Code extension for Visual Studio 2026, this request aims to bring full usage parity between third-party ACP clients and the official CLI, removing the need for IDE users to switch to a standalone terminal to check their remaining quota. It has no community engagement yet as it was filed late in the tracking window, but is categorized as high-value for the ACP developer ecosystem.

## 4. Key PR Progress
No pull requests received updates (new submissions, edits, reviews, or merges) in the 24-hour tracking window, so no PR items are available for curation. No active public code change work is visible on the repository as of 2026-07-07.

## 5. Feature Request Trends
The only new feature request logged this period reveals a clear leading direction for the Kimi Code CLI roadmap: full ACP API surface parity with all functionality currently available in the standalone terminal client. Third-party IDE plugin developers are prioritizing access to currently hidden metadata endpoints to replicate the exact user experience of the native Kimi Code CLI inside their host tools, rather than implementing limited, partial integrations that force users to context switch between applications.

## 6. Developer Pain Points
Two distinct, high-impact pain points are surfaced from this window's issue data:
1. End-user runtime reliability on Windows: The latest stable 0.22.0 release has a confirmed unpatched bug that causes terminal rendering state to degrade over extended sessions on Windows 11, interrupting coding workflows and requiring users to restart their CLI instances repeatedly.
2. ACP developer experience gaps: Builders of third-party IDE ACP clients currently have no programmatic way to pull core subscription and quota data (usage limits, remaining credits, reset timelines) that is natively available via the `/usage` CLI command, creating a consistent user experience gap between official and unofficial Kimi Code deployment paths.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-07
---
## 1. Today's Highlights
Today’s top updates include the launch of OpenCode v1.17.14, which adds a dedicated code mode MCP adapter for running confined orchestration scripts alongside critical MCP tool catalog bug fixes. The 92-comment, high-vote feature request to adjust OpenCode Go subscription usage limits to match DeepSeek V4 Pro's permanent 75% price reduction has been formally closed, with supporting test fixture changes merged in associated PRs. Multiple user-reported critical post-update breakages (including SQLite schema errors and Windows Go inference stalls) are currently being actively patched in open pull requests.

## 2. Releases
### v1.17.14
Official release for 2026-07-07:
- Core Improvements: Added a new code mode MCP adapter to support confined execution of custom orchestration scripts against connected MCP tools; hid the `execute` system tool by default unless code mode is explicitly enabled.
- Core Bugfixes: Resolved a long-standing issue where paginated MCP tool catalogs would lose tool metadata and break output schema validation.
Release link: https://github.com/anomalyco/opencode/releases/tag/v1.17.14

## 3. Hot Issues
1. **#28846 [CLOSED] Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction** | 92 comments, 82 👍
   One of the community's most popular requests post DeepSeek's public price cut is now marked closed, confirming the team has rolled out adjusted, more generous usage caps for all Go tier subscribers.
   Link: https://github.com/anomalyco/opencode/issues/28846
2. **#8501 [OPEN] Allow expanding the auto-summarized pasted text snippets** | 28 comments, 202 👍
   The highest positive-reaction tracked issue: power users want the ability to view and edit full pasted content that is currently condensed to a `[Pasted ~N lines]` placeholder to avoid prompt bloat.
   Link: https://github.com/anomalyco/opencode/issues/8501
3. **#4276 [CLOSED] Clarify if zen/big-pickle GLM variant is GLM 4.6** | 31 comments
   A long-running 8-month old user question confirms popular power-user model lineage for the 200k context window `big-pickle` variant.
   Link: https://github.com/anomalyco/opencode/issues/4276
4. **#19948 [OPEN] Ollama Local integration returns invalid JSON responses** | 22 comments
   A top requested offline workflow feature remains broken for Windows Desktop users, blocking air-gapped and privacy-first local AI setups.
   Link: https://github.com/anomalyco/opencode/issues/19948
5. **#31119 [OPEN] Startup error: no such column: name** | 10 comments, 8 👍
   Major critical blocker for long-dormant users returning to OpenCode, hitting a SQLite schema migration failure that prevents the app from launching entirely.
   Link: https://github.com/anomalyco/opencode/issues/31119
6. **#33998 [OPEN] GLM-5.2 prompt cache randomly drops to ~500 tokens on OpenCode Go** | 8 comments
   Cost and performance bug for Go tier subscribers that cuts 90%+ of expected cached token efficiency even with fully stable, byte-identical system prompts.
   Link: https://github.com/anomalyco/opencode/issues/33998
7. **#35475 [OPEN] False positive content-filter on claude-fable-5 charged ~$20 for blocked outputs** | 5 comments
   Billing integrity issue where users were fully charged for prompt cache writes even when guardrails blocked the final output from being delivered.
   Link: https://github.com/anomalyco/opencode/issues/35475
8. **#33356 [OPEN] Unbounded event table growth leaves opencode.db at 13GB+ with no retention policy** | 2 comments
   Storage pain point for long-running self-hosted instances, where the event-sourcing SQLite table never gets pruned, filling developer volumes unexpectedly.
   Link: https://github.com/anomalyco/opencode/issues/33356
9. **#35611 [OPEN] Go models inference slow/stuck on Windows post v1.17.14 for existing sessions** | 2 comments
   Fresh post-release regression that breaks inference for pre-existing user sessions on Windows Desktop and TUI, resolved only by creating a new session.
   Link: https://github.com/anomalyco/opencode/issues/35611
10. **#35587 [OPEN] Prompt leaks between independent sessions** | 2 comments
    Critical v1.17.14 data integrity bug where command recall history from one session appears in unrelated parallel sessions, causing unexpected cross-contamination of workspaces.
    Link: https://github.com/anomalyco/opencode/issues/35587

## 4. Key PR Progress
1. **#31121 [CLOSED] Fix legacy drizzle migrations without name column**
   Fully resolves the #31119 startup blocker for users running older SQLite schemas, adding backwards compatibility for incomplete database migrations.
   Link: https://github.com/anomalyco/opencode/pull/31121
2. **#35617 [OPEN] Add promise chaining support for code mode**
   Implements `then`/`catch`/`finally` async runtime support for the new MCP code mode sandbox, enabling full asynchronous custom orchestration scripts.
   Link: https://github.com/anomalyco/opencode/pull/35617
3. **#35616 [OPEN] Ignore media in compaction estimates**
   Excludes binary images, files, and non-text payloads from prompt compaction token calculations to prevent unnecessary artificial prompt bloat.
   Link: https://github.com/anomalyco/opencode/pull/35616
4. **#35626 [CLOSED] Clarify separate MCP timeout budgets**
   Replaces ambiguous global MCP request timeout with two separate configurable limits: short timeout for catalog fetches, long 100s default timeout for long-running tool executions.
   Link: https://github.com/anomalyco/opencode/pull/35626
5. **#31151 [CLOSED] Update test fixture DeepSeek pricing to match official rates**
   Aligns all internal test data with DeepSeek's permanent 75% price cut to support updated Go tier usage limits.
   Link: https://github.com/anomalyco/opencode/pull/31151
6. **#35628 [OPEN] Fix app to unmount hidden session panes**
   Resolves desktop UI memory leaks where closed session and utility panes were retained in memory instead of being destroyed when hidden.
   Link: https://github.com/anomalyco/opencode/pull/35628
7. **#31096 [CLOSED] Bypass HTTP proxy for localhost SDK client requests**
   Fixes connectivity breakages for users behind corporate VPNs, preventing local OpenCode SDK traffic from being incorrectly routed to external proxy servers.
   Link: https://

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-07
Source: github.com/badlogic/pi-mono

---

## 1. Today's Highlights
No new official releases shipped in the 24-hour window, but maintainers and community contributors closed 22+ active issues focused on fixing high-impact bugs for Anthropic Claude 5.x series models, LLM gateway compatibility, and core TUI performance. Lead developer mitsuhiko’s two in-progress PRs for constrained sampling and null message normalization are drawing early positive feedback from extension authors, as both features are expected to cut LLM tool call failure rates by an estimated 70% for most users. The most discussed community asks this period center on better zero-config support for self-hosted local model deployments.

## 2. Releases
No new official Pi releases were published in the last 24 hours.

## 3. Hot Issues
1. **[#6103] OpenAI Responses API mislabels empty tool results as "(see attached image)" (CLOSED)** – The highest-comment issue of the period, this latent bug broke all custom extensions (including the popular pi-hashline-edit-pro) that return empty output on successful tool runs, causing models to hallucinate non-existent image attachments.
2. **[#6376] Thinking blocks inappropriately stripped in newer Claude models (OPEN)** – This unpatched bug breaks deep reasoning workflows for all recent Anthropic models (Fable 5, Sonnet 5, Opus 4.7/4.8) where Pi incorrectly filters out legitimate thinking blocks from subsequent API calls.
3. **[#6305] Newbie friendly way connect to local models server (CLOSED)** – Top requested quality-of-life feature for new self-hosted users, asking for auto-LAN discovery of vLLM/ Ollama servers and a simplified input flow for custom local endpoint URLs, rather than manual `models.json` edits.
4. **[#6366] Support session IDs for openrouter (OPEN)** – Breaks OpenRouter’s native prompt caching functionality, which would otherwise cut inference costs by up to 90% for frequent users, since Pi currently sends non-standard cache key headers unrecognized by the platform.
5. **[#6250] Ctrl+V image paste silently fails on Linux/X11 in Bun release binary (OPEN)** – Affects all Linux X11 users on v0.80.3+, breaking core image paste workflow due to a missing native clipboard binding in the compiled Bun binary, with no official patch available yet.
6. **[#6363] Add an extension/RPC event for "agent run fully settled / idle" (OPEN)** – Highly requested by extension authors building terminal integrations (e.g. Warp status sync), as the existing `agent_end` event incorrectly fires on partial execution errors rather than full idle.
7. **[#6355] Cache hit rate denominator double-counts cache tokens — CH% and context% are both wrong (CLOSED)** – Widespread long-running bug that inflated reported Anthropic cache hit rates and context usage metrics, confusing thousands of users optimizing for prompt caching cost savings.
8. **[#6329] Thinking level lost when switching between models with different reasoning tier counts (CLOSED)** – Annoying UX bug that erased user-selected high reasoning tiers (like `xhigh`) when swapping between models with different supported thinking level lists, with no restoration on return to the original model.
9. **[#6364] ResourceExhausted from NVIDIA NIM not recognized as retryable (OPEN)** – Breaks automatic error recovery for self-hosted NVIDIA Triton/NIM inference deployments, where gRPC `ResourceExhausted` errors currently trigger immediate failure instead of a standard 429-style retry.
10. **[#6374] model catalog fixes (OPEN)** – Multiple popular models have incorrect reasoning level metadata in Pi’s core catalog, hiding the `xhigh`/max effort tier from the model picker for users that should have access to it.

*All issue URLs base path: https://github.com/earendil-works/pi/issues*

## 4. Key PR Progress
1. **[#6341] feat(ai): support constrained sampling (OPEN)** – From lead dev mitsuhiko, this PR adds opt-in schema-constrained tool input generation for all supporting providers, drastically reducing malformed tool argument errors that break agent runs.
2. **[#6285] fix(agent): fail tool calls from length-truncated assistant messages (OPEN)** – Reworks agent error handling to treat context-truncated LLM outputs as explicit error states, preventing partial, broken tool execution from incomplete streamed responses.
3. **[#6290] fix(ai): use "(no tool output)" placeholder for empty tool results without images (CLOSED)** – Directly resolves issue #6103, replacing the incorrect "(see attached image)" placeholder for zero-length tool outputs to eliminate model hallucinations of missing media.
4. **[#6352] fix(coding-agent): correct cache hit rate denominator and context token double-count (CLOSED)** – Patches the double-counting bug reported in #6355, making Anthropic cache hit rate and context utilization metrics fully accurate in the TUI footer.
5. **[#6350] feat(coding-agent): add before_provider_headers extension hook (CLOSED)** – Unlocks new extension use cases for LLM gateway and proxy integration, letting developers modify or add custom HTTP headers to all outgoing provider requests.
6. **[#6309] Improve project-local pi config (CLOSED)** – Adds a `-l` flag to the `pi config` CLI command to open project-specific configuration, so users no longer need to manually edit hidden `settings.json` files for per-project model/resource overrides.
7. **[#5472] feat(ai,coding-agent): add Requesty as native provider (CLOSED)** – Adds first-class support for Requesty, the 60,000+ user AI gateway, eliminating the need for users to configure it via the generic OpenAI-compatible provider flow.
8. **[#6356] fix(ai): support GLM-5.2 tool calls (CLOSED)** – Fixes broken tool calling for the popular open-source GLM-5.2 model, working around a bug in its streaming response implementation that omitted tool call deltas.
9. **[#6241] fix(tui): avoid offscreen redraws for stable-height updates (CLOSED)** – Reduces TUI lag drastically for long-running sessions with 1000+ lines of scrollback, by only repainting visible viewport rows instead of re-rendering full offscreen history for unchanged-height updates.
10. **[#6370] fix: guard git commands in non-git directories for example extensions (CLOSED)** – Eliminates spurious, annoying git error messages that appeared on every keystroke when running Pi in non-versioned project folders with the default example extensions enabled.

*All PR URLs base path: https://github.com/earendil-works/pi/pull*

## 5. Feature Request Trends
1. **Local model workflow usability**: The top community ask is zero-config, beginner-friendly setup for self-hosted inference backends (vLLM, Ollama) including automatic LAN discovery and no-manual-edit connection flows.
2. **Extension API expansion**: Developers are requesting more lifecycle hooks including idle agent events, session-scoped non-persistent model overrides, unknown tool resolution hooks, and multi-mode lazy loading to cut startup bloat.
3. **Provider ecosystem coverage**: High priority asks include native support for regional Chinese providers (Doubao), OpenRouter server tool support, Azure OpenAI WebSocket support, and full GLM family model compatibility.
4. **TUI quality of life**: Users want improved history navigation, new `/tree` command full-detail inspection views, and persistent selection of custom reasoning levels across model switches.

## 6. Developer Pain Points
1. **Extension startup lag**: Users with 30+ installed extensions report multi-second startup delays, leading to widespread demand for a three-tier lazy/async/sync extension preloading system that only runs extension code when tools are first invoked.
2. **Model catalog inaccuracies**: Outdated reasoning level metadata for new Claude models and missing `thinkingLevelMap` entries in the core catalog frequently hide maximum reasoning tiers from users who have paid for access to them.
3. **Cross-platform workflow breaks**: Unresolved X11 Linux image paste failures and broken remote inference support for clipboard pasted images break core visual input workflows for subsets of power users.
4. **Historical token accounting bugs**: The weeks-long Anthropic cache token double-counting issue misled users about actual cache performance, wasting optimization effort and cost for users running high-throughput agent workloads.
5. **Manual configuration overhead**: Many popular regional providers and niche AI gateways previously required hand-editing of the internal `models.json` file, with no native first-class provider support.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-07
---
## 1. Today's Highlights
Today’s updates include the official rollout of the 2026-07-06 v0.19.6 nightly build, alongside active RFC and implementation work for the highly requested multi-workspace single-daemon feature for self-hosted deployments. Maintainers have landed multiple critical fixes addressing high-severity token management flaws, including unlogged zombie session token leaks and broken NO_PROXY environment variable support. A major quality-of-life upgrade for the web shell UI, including a session mission control panel and split view, is now under final review.

## 2. Releases
### v0.19.6-nightly.20260706.47f62a466
[Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-nightly.20260706.47f62a466)
This latest nightly builds on the v0.19.6 pre-release branch, adding a strengthened automated PR triage gate that implements batch change detection, problem existence validation, and red flag pattern scanning to reduce false positive triage labels.

## 3. Hot Issues (Top 10 Notable Entries)
1. **#3203 Qwen OAuth Free Tier Policy Adjustment** (149 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/3203)
   The highest-engagement open issue announces official planned changes to the Qwen OAuth free tier, including an immediate reduction of daily free quota from 1000 to 100 requests, with full free entry phase-out scheduled for October 2026, impacting all casual non-paying users.
2. **#6378 RFC: Support multiple workspaces in one qwen serve daemon** (19 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/6378)
   A newly published core infrastructure RFC that breaks the current limitation of 1 daemon process = 1 workspace, to support enterprise multi-project deployments without spinning up separate daemon instances for each codebase.
3. **#6144 Qwen-Code has calculated the incorrect context window** (8 comments, Closed) | [Link](https://github.com/QwenLM/qwen-code/issues/6144)
   A resolved P2 bug where explicitly configured ctx-size values (e.g. 65536 for Qwen3-Coder 64K) were incorrectly truncated during runtime, causing unexpected context overflow failures.
4. **#5964 v0.19.2 zombie sessions burned 30M tokens** (5 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/5964)
   A high-severity P1 bug where unclosed idle agent sessions ran for 8+ hours silently consuming user LLM credits with zero token usage logging, prompting top-priority work on automatic idle session timeout logic.
5. **#6264 /review skill consume large amount of tokens** (6 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/6264)
   A widely reported user pain point where the popular `/review` PR skill injects full untruncated diffs into the prompt, wasting excessive tokens for large change sets.
6. **#6298 Shell tool fails on Windows when command produces stdout** (3 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/6298)
   A critical Windows compatibility bug that breaks all shell execution returning stdout, as the tool internally pipes output through `cat` which does not exist in default cmd.exe environments.
7. **#6408 Large PDF reads can overflow prompt context** (2 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/6408)
   A newly reported flaw where reading a 100+ page PDF dumps ~100k characters of untruncated extracted text directly into the prompt, triggering unresolvable context overflow failures.
8. **#6401 ProxyAgent does not support NO_PROXY** (2 comments, Closed) | [Link](https://github.com/QwenLM/qwen-code/issues/6401)
   A resolved long-standing bug that forced localhost, self-hosted model, and internal corporate traffic through configured proxies, breaking connectivity for all users deploying local LLM instances.
9. **#6318 Unable to /rewind after /compress even when just rewinding to non-compressed position** (3 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/6318)
   A core UX flaw that breaks the common workflow of compressing long conversation history then rolling back to an earlier pre-compression conversation point.
10. **#6368 tools.visible: selective deferred-tool visibility at startup** (2 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/6368)
    A feature request that lets teams pre-approve tools visible to the model on session startup, skipping the mandatory `tool_search` discovery step for regulated internal deployments.

## 4. Key PR Progress (Top 10 Entries)
1. **#6410 feat(cli): Add Phase 2a workspace foundation** | [Link](https://github.com/QwenLM/qwen-code/pull/6410)
    Lays the core foundation for the multi-workspace daemon RFC, adding repeatable `--workspace` CLI flags and validation logic to prevent duplicate/nested workspace inputs, gated for future stable release.
2. **#6404 fix(core): Support large text range reads** | [Link](https://github.com/QwenLM/qwen-code/pull/6404)
    Removes the old 10MB hard file read limit, adding bounded line range serving for large logs/text files to replace generic "file too large" rejection errors.
3. **#6409 fix(core): Gate large PDF text extraction** | [Link](https://github.com/QwenLM/qwen-code/pull/6409)
    Implements page range support for PDF reads, preventing full 100+ page extracted text from being injected directly into the prompt to eliminate context overflow failures.
4. **#6405 fix(cli): use EnvHttpProxyAgent in channel proxy to respect NO_PROXY** | [Link](https://github.com/QwenLM/qwen-code/pull/6405)
    Full implementation of NO_PROXY environment variable support, fixing the proxy routing flaw that broke connectivity for self-hosted model deployments.
5. **#6377 fix(shell): block kill commands using pgrep command substitution** | [Link](https://github.com/QwenLM/qwen-code/pull/6377)
    Patches the critical self-kill bug that allowed Qwen Code to terminate its own node process when users requested stopping background child Node.js processes.
6. **#6400 feat(web-shell): add Session Overview panel and in-window split view** | [Link](https://github.com/QwenLM/qwen-code/pull/6400)
    Major web shell UX upgrade adding a mission control view for all active sessions and split view for parallel multi-session monitoring.
7. **#6372 feat(core): add tools.visible config for selective deferred-tool visibility at startup** | [Link](https://github.com/QwenLM/qwen-code/pull/6372)
    Implements the requested `tools.visible` settings.json option, letting users define a whitelist of tools available to the LLM immediately on session startup.
8. **#6347 feat: extension file reload — watch for plugin changes and hot-reload runtime** | [Link](https://github.com/QwenLM/qwen-code/pull/6347)
    Massive quality-of-life improvement for extension developers, adding auto file watching for extension directories that hot-reloads commands, skills, and hooks without full Qwen Code restarts.
9. **#6389 feat(scheduled-tasks): run each task in its own dedicated, named session** | [

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-07-07
Repository: github.com/Hmbown/DeepSeek-TUI

---
## 1. Today's Highlights
Today’s updates are almost entirely focused on locking in final requirements for the upcoming v0.8.67 DeepSeek TUI release, with 12 coordinated QA, reliability, UX, and localization issues filed by maintainers to streamline a seamless rebuild and validation pass. Active community work also progresses on the long-running v0.9.0 command-boundary refactor, alongside a suite of high-priority bug fixes for runtime panics, localization gaps, and sub-agent routing failures identified during internal dogfooding sessions. No new official public releases were published in the 24-hour window, as the team holds final merge for v0.8.67 until all pre-defined integration gates pass.

## 2. Releases
No new public releases shipped in the last 24 hours. Maintainers are currently holding the v0.8.67 release candidate for final signoff per the release tracking checklist, with all code changes already merged to the `main` branch pending final validation.

## 3. Hot Issues (10 Noteworthy Items)
1. [#4032 Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032): High-impact user-facing bug where CodeWhale ignores pre-shared custom user scripts and generates redundant temporary scripts for established workflows, overriding pre-approved user custom logic. The issue has 21 comments, with community members sharing 7+ reproduction cases and temporary custom prompt workarounds to enforce script reuse, making it one of the most engaged user-reported bugs this week.
2. [#2870 EPIC: staged command-boundary refactor for #2791](https://github.com/Hmbown/CodeWhale/issues/2870): Core architecture tracking epic for the v0.9.0 TUI command system rewrite, designed to make custom user commands stable and fully isolated from core runtime changes. The 10 comment thread confirms the first refactor layer has passed validation with no major identified blockers.
3. [#4042 feat: Environment-level tool sandboxing for sub-agents](https://github.com/Hmbown/CodeWhale/issues/4042): Critical security enhancement that will enforce consistent `--disallowed-tools` rules across all sessions, sub-agents, distributed Fleet workers, and MCP servers to prevent unauthorized file system or network access. 9 comments from MCP integration contributors confirm they are building test cases to validate the upcoming implementation.
4. [#4060 v0.8.67: final integration gate, rebuild, install, and sanity launch](https://github.com/Hmbown/CodeWhale/issues/4060): P1 release blocker tracking all final validation steps for the v0.8.67 launch, acting as a centralized checklist to ensure no broken builds reach end users. No public comments have been added yet, as maintainers use it to coordinate internal release sequencing.
5. [#4049 v0.8.67 dogfood: delegate sub-agents misroute DeepSeek model/provider](https://github.com/Hmbown/CodeWhale/issues/4049): High-severity reliability bug that breaks sub-agent spawning for users running native DeepSeek model configurations, throwing unhelpful "model not found" errors. It was the top priority bug identified during initial v0.8.67 dogfooding sessions.
6. [#4057 v0.8.67: bring shipped UI locale packs to parity or explicitly scope zh-Hant as partial](https://github.com/Hmbown/CodeWhale/issues/4057): Fixes broken TUI localization for non-English users, eliminating partial translation gaps that leave mixed English/localized text in the user interface.
7. [#4051 v0.8.67: delegate cards should show spawned/running before done and never render empty ellipsis rows](https://github.com/Hmbown/CodeWhale/issues/4051): TUI UX improvement that eliminates confusing out-of-order status messages and empty loading states during distributed sub-agent fan-out operations.
8. [#4050 v0.8.67: sub-agents must not complete successfully with empty child output](https://github.com/Hmbown/CodeWhale/issues/4050): Major reliability fix that prevents silent sub-agent failures where tasks are marked as completed even when no work output is generated, a common pain point for users running large batch workloads.
9. [#4054 v0.8.67: non-verifiable goals should be completable and must stop continuation loops](https://github.com/Hmbown/CodeWhale/issues/4054): Fixes infinite execution loops for non-technical tasks like writing or research that cannot be validated with automated checks, which previously would run indefinitely wasting user token quota.
10. [#4056 v0.8.67: Session Configuration menu should stop labeling shipped features as experimental](https://github.com/Hmbown/CodeWhale/issues/4056): UX polish that improves user trust by removing outdated "experimental" tags from fully stable features like MCP and web search that have been shipping for multiple releases.

## 4. Key PR Progress
All 6 PRs updated in the last 24 hours are high-priority and featured below:
1. [#4047 Release 0.8.67 — Fleet/Workflow usability, goal-timer fix, whaleflow→workflow rename](https://github.com/Hmbown/CodeWhale/pull/4047): Merged (closed) PR that pulls the full 78-commit v0.8.67 release candidate to `main`, renaming the previously named "whaleflow" runtime system to "workflow" for clearer user understanding.
2. [#4046 Layer 5.1: User command registry and loading boundary](https://github.com/Hmbown/CodeWhale/pull/4046): Merged (closed) PR validating the first layer of the v0.9.0 command-boundary refactor, confirming no new production code changes are needed to support stable user-defined Markdown/frontmatter custom commands.
3. [#3969 Add per-sub-agent provider routing](https://github.com/Hmbown/CodeWhale/pull/3969): Open PR implementing fine-grained model/provider routing for individual sub-agents, scheduled to land for v0.8.68 to align with the upcoming fleet routing redesign.
4. [#4045 [codex] fix edit_file UTF-8 fuzzy cursor panic](https://github.com/Hmbown/CodeWhale/pull/4045): Open critical bug fix that resolves a panic caused by invalid slicing of multibyte CJK UTF-8 characters during fuzzy text matching in the `edit_file` tool.
5. [#4044 fix(onboarding): localize dynamic welcome steps](https://github.com/Hmbown/CodeWhale/pull/4044): Open UX PR that adds full localization support for the first-run TUI welcome screen, with translated copy for all shipped locales including the partial zh-Hant pack.
6. [#4043 fix(cli): reset SIGPIPE to SIG_DFL so piped output exits cleanly](https://github.com/Hmbown/CodeWhale/pull/4043): Open reliability fix that stops the CLI from panicking when users pipe CodeWhale output to other commands that terminate early (e.g. `head`), resolving a long-standing common annoyance for power users.

## 5. Feature Request Trends
1. Heavy prioritization of sub-agent runtime reliability improvements, including granular tool access controls, custom routing rules, and structured manager-owned fan-out/fan-in workflows to replace unmanageable flat agent sw

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*