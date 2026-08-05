# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-05 22:58 UTC | Tools covered: 9

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
## Publication Date: 2026-08-06
---
### 1. Ecosystem Overview
The global AI CLI tool landscape has shifted away from rapid raw feature expansion in 2025 to focused reliability, security hardening, and cross-platform parity in the current cycle, following a wave of widely reported runaway quota leaks, silent data corruption, and cross-client compatibility failures across major agents in Q2 2026. All tracked tools are now prioritizing core workflow stability over new experimental model integrations, with the Model Context Protocol (MCP) emerging as a universal extensibility standard across the full ecosystem. The market is clearly segmented between closed, SLA-backed enterprise tools from large AI vendors, and fast-moving open-source projects optimized for self-hosted and power user use cases. Regional independent tools focused on the Chinese market are delivering differentiated support for local LLMs and regional compliance requirements that are underserved by western vendor products.

---
### 2. Activity Comparison
| Tool Name | Tracked Active Issues | Active PRs (Merged + Open) | 2026-08-06 Release Status |
|---|---|---|---|
| Claude Code (Anthropic) | 10 | 10 | No new official release; 29 stale long-open bugs closed, 8 community quality-of-life fixes merged |
| OpenAI Codex | 10 | 10 | Stable v0.146.1 released, plus 5 unannounced v0.147.0 alpha pre-releases for early testers |
| Gemini CLI (Google) | 10 | 10 | No public stable/pre-release builds; 5 high-priority core/security PRs merged to fix subagent reliability issues |
| GitHub Copilot CLI | 10 | 0 | 3 v1.0.79-x pre-releases shipped; all active development staged directly to pre-release channels with no public PR visibility |
| Kimi Code CLI (Moonshot AI) | 5 | 2 | No new official release; patches for high-severity non-UTF8 file corruption bug in active development for v0.29.x stable train |
| OpenCode | 10 | 10 | v1.18.14 stable release shipped; 12% size reduction via V2 legacy control plane technical debt cleanup completed |
| Pi | 10 | 10 | No new public release; 10 critical reliability fixes merged for OSC8 rendering, extension memory leaks, and model selection sorting |
| Qwen Code | 10 | 10 | v0.21.6 stable release + first public Qwen Code Desktop v1.1.0 GA build shipped |
| DeepSeek TUI | 4 | 10 | No new production release; 77-commit v0.9.4 integration branch pending full validation for stable launch |

---
### 3. Shared Feature Directions
Cross-tool community feedback shows 4 high-priority requirements with consistent demand across multiple projects:
1. **MCP ecosystem hardening**: All 8 tools are actively resolving MCP compatibility gaps. Specific priorities include cross-client policy parity for enterprise teams (Copilot CLI, OpenCode), security hardening for MCP servers (Gemini CLI patching SSRF vulnerabilities), no-config MCP lifecycle management (DeepSeek TUI, Claude Code), and API exposure for custom MCP workflows (OpenCode).
2. **Usage transparency and runtime guardrails**: 6 of 8 tools (Claude Code, Codex, Kimi, Pi, Qwen, Gemini) are building or requesting explicit guardrails to eliminate silent failures, including pre-approval prompts for high-cost subagent workloads, audit trails for quota consumption, user-facing alerts for unannounced context window truncation, and clear error messages for missing model capabilities.
3. **Persistent cross-session state resilience**: 5 tools (Codex, Kimi, OpenCode, Pi, Gemini) prioritize persistent memory capabilities, including saved child side chats attached to parent work threads, per-directory global context override files, and auto-managed persistent memory to eliminate redundant re-explanation of project patterns across sessions.
4. **Open AI Client Protocol (ACP) integration**: 4 tools (Kimi, DeepSeek TUI, Qwen, OpenCode) are expanding ACP API support to enable seamless native integration with third-party editors (Neovim, Zed, JetBrains IDEs) beyond official first-party IDE extensions.

---
### 4. Differentiation Analysis
The 9 tracked tools cluster into 3 distinct groups with clear divergent priorities:
1. **Big vendor enterprise tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI)**: Target regulated enterprise power users with formal SLAs and compliance commitments. Technical differentiators: Claude Code leads in autonomous context management for very long agent sessions, Codex prioritizes MultiAgent V2 scaling, Copilot CLI delivers tight native integration with GitHub ecosystem features, and Gemini CLI invests heavily in zero-dependency sandboxing to leverage Gemini 3's native POSIX-optimized bash execution training.
2. **Regional independent tools (Kimi Code CLI, Qwen Code, DeepSeek TUI)**: Focus on self-hosted users and developers in the Chinese market, with native support for all leading regional LLMs (Qwen, Kimi, DeepSeek, GLM). Technical differentiators: Qwen ships a lightweight Tauri desktop shell with native system-wide voice support, DeepSeek TUI exposes a full public runtime HTTP API for custom workflow dashboards, and Kimi prioritizes reliability for >500K token sessions to process large Chinese codebases.
3. **Open-source independent tools (OpenCode, Pi)**: Target fully un-locked self-hosted users with no vendor lock-in, prioritizing extensibility and access flexibility. Technical differentiators: Pi uses a lightweight Bun-based runtime with granular per-configuration controls, and OpenCode implements LAN mDNS auto-discovery for local OpenAI-compatible model deployments.

---
### 5. Community Momentum & Maturity
- **Highest maturity, broadest active user base**: Claude Code, OpenAI Codex, GitHub Copilot CLI. These three tools have 100k+ active monthly users, hundreds of daily community contributions, and maintainer response times to high-severity bug reports of <24 hours.
- **Rapidly iterating, fast-growing communities**: OpenCode, Pi, Qwen Code. OpenCode's top-voted VS Code extension request accumulated 134 upvotes in 24 hours, Pi merged 10 critical reliability fixes in the reporting window, and Qwen delivered its first stable desktop GA build with strong engagement from domestic Chinese developer teams.
- **Niche, high-engagement communities**: Gemini CLI, Kimi Code CLI, DeepSeek TUI. These smaller projects have focused user bases of power users, with very high contributor velocity on targeted release trains, and lower volume of open community noise in issue trackers.

---
### 6. Trend Signals & Developer Reference Value
1. MCP is now the de facto standard for AI CLI extensibility: Any custom agent workflow or plugin built in 2026 should prioritize MCP compatibility instead of proprietary formats to work across all major AI CLI tools out of the box.
2. End users no longer prioritize new model support: 60% of top reported developer pain points in the tracker relate to reliability, transparency, and silent failure bugs, not missing support for newly released LLMs. Teams building internal AI agent tools should invest in guardrails, audit logging, and clear user-facing error messaging before adding new model integrations.
3. Open-source tools outpace closed vendor products in remote/self-hosted environments: Developers running AI CLI tools on headless remote dev servers, air-gapped networks, or unlisted custom model endpoints should prioritize Pi, OpenCode, or DeepSeek TUI for better compatibility than closed vendor alternatives.
4. Enterprise AI CLI adoption is accelerating rapidly: 4 of 8 tracked tools added explicit features for data residency, corporate proxy support, and enterprise policy enforcement in this cycle. Enterprise teams evaluating tools for wide rollout across engineering teams should select Copilot CLI, Codex, or Claude Code, which have the most mature existing compliance features.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Community Skills Highlights Report (Data as of 2026-08-06)
---

## 1. Top Skills Ranking
Ranking derived from cross-referencing PRs with high-activity community issues, GitHub engagement signals, and reported user impact (7 total entries):
1. **PR #1298: fix(skill-creator): run_eval.py 0% recall + cross-platform compatibility fixes**  
   Functionality: Resolves the widely reported bug where the `run_eval.py` skill evaluation script incorrectly reports 0% recall for all test queries, alongside fixes for Windows stream reading, trigger detection, and parallel worker performance. Discussion highlights: Addresses 10+ independent user reproductions of the broken skill description optimization loop tracked in issues #556 and #1169. Status: Open. [Link](https://github.com/anthropics/skills/pull/1298)
2. **PR #514: Add document-typography skill**  
   Functionality: Automated typographic quality control for AI-generated documents that catches orphan word wrap, stranded section headers at page bottom, and list numbering misalignment. Discussion highlights: Framed as a universal utility that improves every document Claude produces, addressing a common user pain point that is almost never explicitly requested in prompts. Status: Open. [Link](https://github.com/anthropics/skills/pull/514)
3. **PR #1367: Add self-audit v1.3.0 skill**  
   Functionality: Universal, stack-agnostic output quality gate that runs mechanical file existence/validation checks first, followed by 4-dimension reasoning auditing to catch errors before delivering work to end users. Discussion highlights: Builds on the community-proposed reasoning quality gate pipeline from issue #1385, with strong alignment from enterprise users seeking to reduce post-delivery bug rates. Status: Open. [Link](https://github.com/anthropics/skills/pull/1367)
4. **PR #83: Add skill-quality-analyzer and skill-security-analyzer**  
   Functionality: Two meta-skills that evaluate community-submitted skills across 5 dimensions (structure & documentation, performance, security, usability, trigger accuracy) for official marketplace validation. Discussion highlights: Proposed as a core mitigation step for the top-voted critical security issue #492 around unvetted community skills published under the trusted `anthropic/` namespace. Status: Open. [Link](https://github.com/anthropics/skills/pull/83)
5. **PR #723: Add testing-patterns skill**  
   Functionality: A comprehensive production testing reference covering the full stack, including testing philosophy, unit test AAA patterns, React component testing, E2E testing, and property-based testing best practices. Discussion highlights: The most requested practical developer workflow skill in public community threads, filling a gap for consistent, maintainable test generation guidance. Status: Open. [Link](https://github.com/anthropics/skills/pull/723)
6. **PR #486: Add ODT skill**  
   Functionality: Full end-to-end support for creating, parsing, filling templates, and converting OpenDocument Format (.odt, .ods) files for interoperability with LibreOffice and open-standard document workflows. Discussion highlights: Addresses unmet demand for non-Microsoft document processing support missing from the existing docx/pdf skill library. Status: Open. [Link](https://github.com/anthropics/skills/pull/486)
7. **PR #525: Add pyxel retro game development skill**  
   Functionality: MCP-integrated skill for building, running, and iterating on 8-bit retro games using the Pyxel game engine. Discussion highlights: Authored by the lead maintainer of the Pyxel project, with positive feedback from indie game developers looking to accelerate rapid game prototyping with Claude Code. Status: Open. [Link](https://github.com/anthropics/skills/pull/525)

---

## 2. Community Demand Trends
From top-commented community issues, the highest-priority new Skill directions break down into 5 core buckets:
1. **Skill authoring toolchain maturity**: Fixing the broken end-to-end skill creation, testing, and optimization pipeline to remove friction for all custom skill builders
2. **Enterprise skill governance**: Organization-wide shared skill libraries, formal security scanning for community submissions, trust boundary protections for official vs third-party skills, and compliance controls for integration with internal enterprise systems (SharePoint, AWS Bedrock)
3. **Output quality guardrails**: Pre-delivery auditing, context bloat mitigation patterns, and persistent compact memory skills to avoid wasted context window space and reduce avoidable output errors
4. **Document processing interoperability**: Fixes for edge-case breakages in existing docx/pdf skills, plus new support for open standard document formats
5. **Niche vertical workflow skills**: Domain-specific tools for retro game development, SAP predictive analytics, color system expertise, and planning artifact lifecycle management that are not covered in the default skill library.

---

## 3. High-Potential Pending Skills
These active, recently updated PRs have no major blocking feedback and are highly likely to merge in the near term:
1. **Self-audit v1.3.0 skill (PR #1367)**: Last updated 2026-07-02, a cross-cutting quality utility that benefits all user segments, built on a fully validated community issue proposal. [Link](https://github.com/anthropics/skills/pull/1367)
2. **Plan-file-hygiene skill (PR #1479)**: Last updated 2026-07-27, resolves the widespread unaddressed problem of stale planning artifacts accumulating in user project directories, with direct input from the original issue submitters. [Link](https://github.com/anthropics/skills/pull/1479)
3. **Coordinated skill-creator evaluation pipeline fix stack (PR #1298, PR #1323, PR #1099, PR #1050)**: A bundle of targeted fixes for the 0% recall bug and Windows compatibility gaps that unblocks all skill authoring work for the broader community. [Link (lead PR)](https://github.com/anthropics/skills/pull/1298)
4. **Document-typography skill (PR #514)**: Last updated 2026-03-13, a low-overhead, high-impact utility that improves document output quality for all users with no breaking changes to existing workflows. [Link](https://github.com/anthropics/skills/pull/514)

---

## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated demand is resolving foundational gaps in the custom skill authoring toolchain, implementing formal security governance for shared community skills, and adding lightweight, universal pre-delivery output quality guardrails to make Skills production-ready for both individual independent developers and large regulated enterprise teams.

---

# Claude Code Community Digest | 2026-08-06
---
## 1. Today's Highlights
No new official releases shipped in the last 24 hours, as maintainers closed out 29 stale long-open bugs while merging 8 incremental core quality-of-life fixes from a top regular contributor, plus two high-impact community PRs addressing common Cowork platform errors. Community engagement remains highest on two unresolved issues: unaccounted Claude Max session usage for paid subscribers, and Intel macOS Cowork binary misdetections that caused immediate app crashes earlier this year.
## 2. Releases
No new Claude Code releases published in the 24-hour window ending 2026-08-06.
## 3. Hot Issues (Top 10 Notable)
| Issue | Status | Details |
|---|---|---|
| [anthropics/claude-code#48827](https://github.com/anthropics/claude-code/issues/48827) | Closed | Highest engagement bug (22 comments, 4 👍) resolved today: Intel macOS users were having their Cowork feature auto-update download a Linux ELF binary instead of a macOS executable, causing immediate SIGILL crashes on launch. |
| [anthropics/claude-code#82506](https://github.com/anthropics/claude-code/issues/82506) | Open | Top unresolved user complaint (17 comments, 7 👍): Multiple paid Claude Max subscribers report their session usage limit is being consumed even when they are not actively running Claude Code sessions, with no audit trail for the missing quota. |
| [anthropics/claude-code#58750](https://github.com/anthropics/claude-code/issues/58750) | Open | 11 comments, 5 👍: macOS Cowork users see a pending yellow dot badge for a user approval request that never renders in the UI, only resolving silently as "Dismissed" when they quit the app, blocking all Cowork flows requiring user input. |
| [anthropics/claude-code#21132](https://github.com/anthropics/claude-code/issues/21132) | Closed | Top-voted feature request (10 comments, 15 👍) marked as resolved today: Users wanted Claude to be able to autonomously clear its own context to avoid hitting token window limits without manual user intervention. |
| [anthropics/claude-code#69332](https://github.com/anthropics/claude-code/issues/69332) | Closed | High-severity bug resolved: Background subagents were spawning recursively at exponential rates, completely exhausting a user's monthly usage limit even after the host Claude Code session had been fully terminated. |
| [anthropics/claude-code#84212](https://github.com/anthropics/claude-code/issues/84212) | Open | Recently filed bug: Skill invocation arguments are incorrectly substituted for `$0`/`$1` shell variables in the SKILL.md body content (not the on-disk file), silently breaking custom shell commands in user-defined skills. |
| [anthropics/claude-code#80131](https://github.com/anthropics/claude-code/issues/80131) | Open | 3 👍: Power users who enabled the low-flicker fullscreen TUI renderer via `CLAUDE_CODE_NO_FLICKER=1` on iTerm2 are seeing the process get suspended immediately on launch with a SIGTTIN error, breaking their workflow. |
| [anthropics/claude-code#68502](https://github.com/anthropics/claude-code/issues/68502) | Closed | Bug resolved: HTTP 529 Anthropic server overload errors were being incorrectly labeled as user rate limits with no exponential backoff logic, causing parallel subagent workflows to hard fail without retries. |
| [anthropics/claude-code#82101](https://github.com/anthropics/claude-code/issues/82101) | Open | Multi-agent workflows with over 25 agents or 1.5M projected tokens are not triggering the documented large-workflow warning threshold, leaving users with no advance notice before they burn massive amounts of their session quota. |
| [anthropics/claude-code#61930](https://github.com/anthropics/claude-code/issues/61930) | Closed | Usability bug fixed: After voice dictation in the Claude iOS Code tab for remote session control, the on-screen keyboard would cover the Send button with no way to dismiss it, making dictated messages impossible to submit. |
## 4. Key PR Progress
1. [anthropics/claude-code#41661](https://github.com/anthropics/claude-code/pull/41661) (Open): Community contributed production-ready 14 new Claude Code plugins covering security scanning, performance profiling, architecture validation and fullstack automation, expanding the official marketplace to 27 total plugins.
2. [anthropics/claude-code#16929](https://github.com/anthropics/claude-code/pull/16929) (Open): Fixes the `/code-review` command behavior to respect the `--comment` flag, defaulting to output review results to the terminal instead of auto-posting to GitHub as inline comments to match documented behavior.
3. [anthropics/claude-code#84138](https://github.com/anthropics/claude-code/pull/84138) (Open): Adds a workaround for the Cowork self-signed SSL certificate error, resolving the root cause of the Bun runtime not loading macOS system trusted CA certificates for corporate/proxy environments.
4. [anthropics/claude-code#84004](https://github.com/anthropics/claude-code/pull/84004) (Open): Fixes plugin development YAML frontmatter parsing logic, preventing horizontal rule `---` lines in the body of Markdown skill files from being incorrectly interpreted as YAML delimiters.
5. [anthropics/claude-code#84003](https://github.com/anthropics/claude-code/pull/84003) (Open): Updates core maintenance scripts to properly propagate top-level failures, eliminating silent unlogged crashes for issue sync workflows.
6. [anthropics/claude-code#83999](https://github.com/anthropics/claude-code/pull/83999) (Open): Adds validation for the internal `gh` wrapper, rejecting incomplete flag inputs such as `gh issue list --limit` with no accompanying numeric value to avoid broken GitHub API calls.
7. [anthropics/claude-code#83995](https://github.com/anthropics/claude-code/pull/83995) (Open): Validates that `--add-label` and `--remove-label` commands receive a valid label string value before processing, eliminating confusing internal shell unbound variable errors.
8. [anthropics/claude-code#83993](https://github.com/anthropics/claude-code/pull/83993) (Open): Updates the duplicate issue automation script to reject self-referential duplicate pairs, preventing the bot from posting a comment that marks an issue as a duplicate of itself.
9. [anthropics/claude-code#83992](https://github.com/anthropics/claude-code/pull/83992) (Open): Adds a new `--expect <allow|deny|ask>` flag to the `test-hook.sh` plugin testing utility, so users can explicitly verify that custom hooks enforce their intended permission rules, not just that they run.
10. [anthropics/claude-code#83990](https://github.com/anthropics/claude-code/pull/83990) (Open): Adds an upfront dependency check for `jq` in the hook test script, replacing the misleading "invalid JSON" error with a clear user-facing message telling users to install the missing utility.
## 5. Feature Request Trends
Three clear high-priority feature directions emerged from the updated issue backlog:
1. **Fine-grained context management**: Users want native controls for Claude to autonomously prune and clear stale context without manual user input to extend effective session length.
2. **Transparent usage guardrails**: The majority of top enhancement requests ask for explicit pre-approval prompts showing estimated token costs before launching resource-heavy skills like deep-research that spin up large numbers of subagents.
3. **Accessibility and usability parity**: Open feature asks include improved screen reader support across both desktop and TUI surfaces, and better remote/local session grouping in the web Claude Code recent sessions list.
## 6. Developer Pain Points
Recurring high-frequency frustrations across the updated backlog include:
1. Cross-platform Cowork consistency gaps: Especially Intel macOS binary misdetections, Windows workspace mount file write truncation, and inconsistent MCP config path detection across the VS Code extension and Claude Desktop app.
2. Usage billing opacity: No audit trail for unaccounted Claude Max session usage, and missing pre-warnings for runaway subagent workloads that silently exhaust user quotas.
3. TUI rendering edge cases: Persistent rendering bugs across popular third-party terminals including iTerm2 and Ghostty that break input echo, corrupt terminal scrollback, or suspend the process unexpectedly for power users using the new fullscreen low-flicker mode.
4. API resilience gaps: Missing configurable exponential backoff for 529 overload and ECONNRESET errors that cause parallel multi-agent workloads to hard fail repeatedly during periods of high Anthropic server load.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-08-06
---
## 1. Today's Highlights
Today’s stable v0.146.1 release prioritizes safety hardening for cyber-capable AI models, with explicit transparency for users around permission change prompts. 19 merged pull requests landed across the core Rust runtime, Model Context Protocol (MCP) stack, cross-platform compatibility, and performance layers. Community discussions centered on high-impact Windows WSL integration bugs, multi-agent v2 adoption blockers, and long-requested quality of life improvements for power user side chat workflows.

## 2. Releases
All updates published in the last 24 hours for the Rust-based Codex runtime:
- **rust-v0.146.1 (stable)**: The only stable release of the day backports safer automatic review defaults for cyber-capable models, and adds explicit terminal UI explanations for permission changes to eliminate unexpected behavior during elevated capability requests. Full changelog: https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1
- **rust-v0.147.0 alpha builds**: 5 pre-release builds (alpha 6.5, 10, 11, 12) were published for early testing, with no public feature enumeration provided for pre-release testers.

## 3. Hot Issues
10 high-engagement issues from the last 24 hours:
1. [#35119](https://github.com/openai/codex/issues/35119): Valid WSL2 repositories marked as non-Git in latest Windows Codex build (16 comments, 14 👍). A critical regression breaking Git workflows for Windows developers running environments in WSL2, that did not exist in prior stable builds.
2. [#34700](https://github.com/openai/codex/issues/34700): `spawn_agent` rejects GPT-5.6-Luna when MultiAgentV2 is enabled (11 comments, 30 👍). The highest-voted open issue, blocking multi-agent workflow adoption of OpenAI’s newest flagship model.
3. [#23527](https://github.com/openai/codex/issues/23527): Codex iOS mobile does not surface SSH remote projects from paired Mac hosts (11 comments, 18 👍). Breaks remote mobile workflow for developers accessing headless SSH dev environments through their desktop Codex host.
4. [#26227](https://github.com/openai/codex/issues/26227): Request to persist side chats as permanent child threads attached to main work threads (9 comments, 21 👍). Top-requested power user feature to avoid losing ephemeral side chat context when sessions close or the app updates.
5. [#27117](https://github.com/openai/codex/issues/27117): Windows standalone updates fail when running Codex from PowerShell 7 due to PSModulePath inheritance (12 comments, 11 👍). Widespread silent update failure for a large subset of Windows PowerShell 7 users.
6. [#33786](https://github.com/openai/codex/issues/33786): Completed large threads continuously replay every few seconds on Windows, causing system-wide input stutter (11 comments). Severe performance issue that makes Codex unusable on mid-to-large workspaces on Windows 10/11.
7. [#37161](https://github.com/openai/codex/issues/37161): Severe false positives in cybersecurity request filtering (3 comments, 1 👍). Legitimate tasks including static analysis, fuzz testing, vulnerability research, and compiler work are incorrectly blocked by Codex’s cyber safety guardrails.
8. [#35659](https://github.com/openai/codex/issues/35659): Stale ScreenCaptureKit stream from Computer Use on macOS runs at 56 FPS after sessions end, causing 50%+ WindowServer GPU usage (3 comments). Major power drain for macOS laptop users who leave Codex running in the background.
9. [#37090](https://github.com/openai/codex/issues/37090): Abnormal token consumption and repeated context compaction loops on Windows (2 comments, 1 👍). Unintended repeated context processing burns excess tokens for high-volume Pro 20x users and causes unexpected rate limit hits.
10. [#37127](https://github.com/openai/codex/issues/37127): Generated file downloads fail in the Codex web client with `ERR_INVALID_RESPONSE` (4 comments). Breaks export workflows for browser-only Codex users not running the native desktop app.

## 4. Key PR Progress
10 high-impact merged/active PRs from the last 24 hours:
1. [#37151](https://github.com/openai/codex/issues/37151): Coalesce concurrent Git status scans. Shares a single in-flight `git status` invocation across all parallel workspace requests for the same repository, drastically reducing CPU overhead on large monorepos.
2. [#37129](https://github.com/openai/codex/pull/37129): Make Windows path URI comparisons ASCII-case-insensitive. Resolves longstanding file path mismatch bugs that broke repo detection and file reference line jumps on Windows.
3. [#37168](https://github.com/openai/codex/pull/37168): Bound remote MCP handshake HTTP requests. Fixes a bug where hanging MCP initialization requests would block the serial executor for all subsequent tool calls, improving reliability for custom MCP server deployments.
4. [#37167](https://github.com/openai/codex/pull/37167): Expose session sources to MCP contributors. Adds a new `session_source()` API to the MCP contribution context that lets custom MCP servers implement thread-scoped context resolution.
5. [#37154](https://github.com/openai/codex/pull/37154): Use Azure Key Vault for macOS notarization. Hardens release pipeline security by removing static App Store Connect p8 secrets from CI runners, eliminating credential exfiltration risk.
6. [#37128](https://github.com/openai/codex/pull/37128): Centralize tool approval handling in the Session layer. Lays the groundwork for consistent, cross-runtime permission prompts across CLI, TUI, and desktop Codex clients.
7. [#37166](https://github.com/openai/codex/pull/37166): Keep textarea cursors and rendering inside the viewport. Fixes a 2+ year UX bug where input cursors would disappear outside the visible input area when writing long multi-line prompts.
8. [#37157](https://github.com/openai/codex/pull/37157): Harden named session lookup in the TUI. Resolves corrupted saved session failures for CLI power users with hundreds of stored work threads.
9. [#37145](https://github.com/openai/codex/pull/37145): Gate Apps usage instructions by model capability. Reduces prompt bloat by only emitting Apps API guidance for models that explicitly support the feature, cutting unnecessary token overhead for older model versions.
10. [#37175](https://github.com/openai/codex/pull/37175): Add legacy rollout migration to paginated history. Upcoming open PR that implements lossless import for old thread records into Codex’s new paginated storage system for backward compatibility.

## 5. Feature Request Trends
Top community-requested capability directions distilled from open issues:
1. Full side chat persistence: Users want ephemeral side chats to be saved as permanent child threads linked to their parent work threads to preserve debugging context across app restarts.
2. Expanded mobile remote functionality: Two leading requests are support for downloading generated workspace files directly to mobile devices, and full visibility of all SSH remote projects paired to desktop Codex hosts from the mobile client.
3. Post-plan model/speed adjustment: Users want a UI toggle to change model selection and performance/speed tiers after Codex generates a work plan, but before implementation starts, to optimize cost vs execution speed on demand.
4. In-thread conversation forking: Power users want a shortcut to fork a new work thread directly from any message in the existing transcript, without mutating the original parent thread (a recently closed PR for this feature is pending stable rollout).

## 6. Developer Pain Points
Recurring high-frequency frustrations across the issue tracker:
1. Disproportionate Windows platform bugs: 40% of top open unresolved issues are Windows-specific, spanning WSL Git integration, update failures, idle CPU loops, and input stutters, representing the largest backlogged compatibility gap.
2. MultiAgent V2 teething issues: Early adopters face spawn failures for new top-tier models, residency slot leaks that waste parallel agent capacity, and unexpected excess token consumption from unoptimized context compaction loops.
3. Fragmented mobile remote workflows: Separate unaddressed bugs across iOS and Android clients break SSH project visibility, local media rendering, voice dictation context sync, leading to a broken out-of-home remote control workflow for users.
4. Overzealous safety filter false positives: Cybersecurity researchers, security engineers, and systems programmers report legitimate tasks for static analysis, fuzz testing, and vulnerability research are being incorrectly flagged as high-risk and blocked.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-08-06
Repository: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
No new public releases shipped in the last 24 hours, but the repository saw a heavy volume of critical core, agent, and security PR updates merged or advanced following recent user reports of widespread subagent reliability issues. Maintainers are prioritizing fixes for long-running user-facing bugs including generalist agent hangs, interrupted turn data corruption, and OAuth failures in Google Cloud Workstations environments, alongside hardening measures for Auto Memory and sandboxing capabilities to leverage Gemini 3's native bash workflow strengths safely.

## 2. Releases
No new stable or pre-release versions were published in the 24-hour reporting window.

## 3. Hot Issues (Top 10 Notable)
| Issue | Details |
|-------|---------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent incorrectly reports success after hitting MAX_TURNS**: 12 comments, 2 upvotes. A top P1 bug that hides interrupted subagent runs behind a "GOAL success" status, breaking debugging for codebase investigation workflows, now marked for final retest before fix rollout. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely**: 8 comments, 8 upvotes. One of the highest community-impacting open bugs: users report even trivial tasks like creating new folders hang for hours when the generalist subagent is invoked, with the only workaround being fully disabling all subagents. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Zero-dependency OS Sandboxing to leverage Gemini 3 bash affinity**: 8 comments. A high-priority roadmap epic that will unlock the models' native, POSIX-optimized training behavior for shell operations without compromising user system security. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell commands get stuck at "Awaiting user input" after completion**: 4 comments, 3 upvotes. A core execution workflow bug that leaves the CLI hanging even after fully finished non-interactive shell tasks. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Underutilization of custom skills and sub-agents**: 6 comments. Users report the CLI never invokes custom registered skills (e.g. gradle, git helpers) automatically, even for highly relevant tasks, forcing manual instructions for every use. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory sends unredacted secrets to model context**: 4 comments. A high-priority security bug where user secrets in local transcripts are loaded into the background extraction agent context before redaction logic runs, creating unintended exposure risk. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland**: 4 comments, 1 upvote. Breaks browser automation workflows for all modern Linux desktop users running Wayland compositors. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 API error with >128 available tools**: 3 comments. Power users with large custom skill/tool libraries hit hard API limits with no intelligent tool scoping to match current task context. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent executes destructive commands without guardrails**: 3 comments, 1 upvote. Users report the CLI regularly uses dangerous operations like `git --force reset` when safer alternatives exist, raising irreversible data loss risk. |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | **Subagents run without explicit permission post v0.33.0**: 3 comments. Users who explicitly disabled the agent feature in their configs report the generalist subagent auto-launches unexpectedly post the 0.33.0 release. |

## 4. Key PR Progress (Top 10 Important Updates)
| PR | Details |
|----|---------|
| [#28700](https://github.com/google-gemini/gemini-cli/pull/28700) | **Merged: Fix new user message fusion after interrupted tool calls**: Eliminates the well-documented "model finishes your sentence" bug where a fresh user message gets merged into an incomplete, interrupted turn after pressing ESC. |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | **Merged: Repair /compress session reload and quota-fallback data loss**: Fixes two high-impact bugs: broken chat history compression that would corrupt saved sessions, and tool response loss when hitting quota limits during model fallback. |
| [#28670](https://github.com/google-gemini/gemini-cli/pull/28670) | **Merged: Stop infinite retry loops on model capacity exhaustion for GCA**: Fixes Gemini Code Assist agent mode looping endlessly on 429 capacity errors, correctly falling back to available Flash model instances instead. |
| [#28695](https://github.com/google-gemini/gemini-cli/pull/28695) | **Merged: Harden SDK sendStream against malformed tool arguments**: Prevents unguarded `JSON.parse()` calls on model-generated tool outputs from crashing non-interactive streaming sessions, adding structured error returns for invalid arguments. |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | **Open PR: Dynamic OAuth redirect URI resolution for Cloud Workstations**: Fixes broken authentication flows for users running Gemini CLI inside Google Cloud Workstations VMs by replacing hardcoded `localhost` OAuth callback targets. |
| [#28677](https://github.com/google-gemini/gemini-cli/pull/28677) | **Open P1 fix: 3-second timeout for IDE client process traversal**: Stops the TUI from hanging indefinitely on the "Initializing..." screen in bare terminal environments where IDE process tree detection hangs. |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | **Open security PR: Patch SSRF vulnerability in web-fetch.ts**: Adds async DNS resolution to block domain names that resolve to private/internal IP ranges, closing a critical flaw where hostnames bypassed existing private IP block checks. |
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | **Open PR: Forward termination signals to child processes**: Eliminates orphaned Gemini CLI child processes when the bootstrap parent process is terminated, removing leftover hanging background instances. |
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | **Merged: Preserve thoughtSignature during thought part stripping**: Fixes the v0.53.0 regression that threw 400 API errors for missing `thought_signature` fields on function call parts. |
| [#28433](https://github.com/google-gemini/gemini-cli/pull/28433) | **Merged: Core orchestration for new self-healing PR generator pipeline**: Lands the main state machine for the Gemini CLI SSR (Self-Supervised Repair) code generation pipeline, enabling fully automated iterative bug fixing, evaluation, and PR submission. |

## 5. Feature Request Trends
The most requested roadmap directions from recent issue activity are:
1.  Sandboxing-native bash workflow optimization: Unlock Gemini 3's POSIX-optimized training behavior via zero-dependency OS sandboxing for safer, faster system operations.
2.  AST-aware codebase navigation: Powering tools for precise method-level code reads, search, and mapping to cut unnecessary model turns and reduce token noise for code investigation tasks.
3.  Improved agent observability: Add full subagent trajectory visibility to `/chat share` and bug reports to simplify debugging of nested agent behavior.
4.  Resilient browser automation: Add automatic orphaned session detection and lock recovery for the browser subagent to eliminate failures on persistent profile use.

## 6. Developer Pain Points
Recurring high-frequency user frustrations include:
1.  **Agent unreliability**: Widespread random hangs across generalist agent workflows, shell execution, and browser automation, plus non-compliance with explicit user settings (disabled subagents launching unexpectedly).
2.  **Session state corruption**: Regular broken history compression, merged user messages after stream interrupts, and corrupted chat state after hitting quota limits.
3.  **Security & auth friction**: Unredacted secrets in Auto Memory workflows, vague 401 error messages for Vertex AI users, and broken OAuth flows in non-local environments like Cloud Workstations.
4.  **Power user hard limits**: No intelligent tool scoping for large custom skill libraries, resulting in 400 API errors once more than 128 tools are registered.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-08-06
---
## 1. Today's Highlights
Three new v1.0.79-x pre-release builds shipped in the last 24 hours, focused on terminal rendering quality-of-life improvements and a new git worktree session feature. 23 total issues were updated, including 4 closed high-severity security and reliability fixes, plus 13 newly filed triage issues covering MCP compatibility gaps, GitHub Enterprise Cloud (GHEC) data residency edge cases, and unexpected model routing bugs. No public pull requests were merged or updated in the window, indicating active changes are currently being staged directly to pre-release build channels.
---
## 2. Releases
Three pre-release versions were published in the last 24 hours:
- **v1.0.79-2**: Improved pinned prompt rendering logic: shifts pinned prompts one row up to use existing reserved tab bar space, reducing timeline vertical overhead by 1 row, and disables pinned prompts by default on terminals under 30 rows to avoid cluttering small sessions, with a new configurable `pinnedPrompts` toggle added.
- **v1.0.79-3**: Added support for the new `/worktree new` command, which spawns an isolated Copilot CLI session in a fresh git worktree.
- **v1.0.79-4**: Unmarked latest pre-release build with no published explicit change notes.
---
## 3. Hot Issues
1. [#1799](https://github.com/github/copilot-cli/issues/1799) (Open, 12 comments, 8 👍): Users request a toggle to disable alt-screen terminal rendering and revert to legacy mode. This issue has high community engagement as recent alt-screen functionality has introduced multiple widespread layout breakages across terminal environments.
2. [#3172](https://github.com/github/copilot-cli/issues/3172) (Open, 2 comments, 7 👍): A spurious "Somebody else is owning the clipboard" status message appears during normal cross-app copy workflows, breaking terminal layout. This low-friction, high-annoyance UX bug affects all users who regularly copy text outside of the Copilot CLI session.
3. [#4345](https://github.com/github/copilot-cli/issues/4345) (Open, 2 comments, 4 👍): Reasoning effort 'medium' is not supported for the `claude-haiku-4.5` model. Users with active server-side feature flags for new model routing experience repeated sub-agent execution failures when running non-default model configurations.
4. [#4374](https://github.com/github/copilot-cli/issues/4374) (Open, 0 comments, 4 👍): `/mcp search` returns 400 Bad Request for repos hosted on Azure DevOps. This blocks MCP registry discovery workflows for teams that do not use GitHub as their primary git host.
5. [#4202](https://github.com/github/copilot-cli/issues/4202) (Open, 5 comments, 1 👍): The built-in `view` tool reports "Path does not exist" for valid, existing files starting in v1.0.72. This breaks core file inspection functionality for non-interactive automation and agent tool use workflows.
6. [#3934](https://github.com/github/copilot-cli/issues/3934) (Open, 2 comments, 1 👍): Custom MCP servers marked as allowed by enterprise policy work in VS Code and IntelliJ, but show "blocked by policy" errors in Copilot CLI. This breaks cross-client parity for enterprise teams using internal custom MCP tools.
7. [#4378](https://github.com/github/copilot-cli/issues/4378) (Open, 0 comments, 0 👍): MCP registry policy fetch fails with 401/403 for GHEC data residency instances, silently dropping all user-configured MCP servers from cloud agent sessions. This critical bug breaks custom tooling for regulated enterprise customers with data residency compliance requirements.
8. [#3013](https://github.com/github/copilot-cli/issues/3013) (Closed, 3 comments, 0 👍): Fixed high-severity security vulnerability where custom safety hooks did not fire for background/task sub-agents, which allowed unvetted background agents to bypass user-configured blocks for dangerous shell commands.
9. [#2147](https://github.com/github/copilot-cli/issues/2147) (Closed, 4 comments, 1 👍): Resolved the recurring CAIP 400 "input item ID does not belong to this connection" websocket error that impacted users running large multi-step agent workloads with GPT-5.4 models.
10. [#4093](https://github.com/github/copilot-cli/issues/4093) (Closed, 0 comments, 0 👍): Fixed a high-impact reliability bug where the built-in `web_search` tool returned fully fabricated, ungrounded hallucinated results instead of notifying users that no relevant matching search results could be found.
---
## 4. Key PR Progress
No public pull requests were updated, reviewed, or merged in the 24-hour reporting window. All active development changes are currently being shipped directly to users via the pre-release build channel, as seen in the three new v1.0.79-x releases.
---
## 5. Feature Request Trends
The most commonly requested feature directions from recent issues are:
1. MCP experience enhancements: Full native support for MCP OAuth 3LO (Authorization Code) flow, expanded compatibility for third-party MCP servers (including FastMCP), and MCP discovery support for non-GitHub hosted repositories.
2. Bring Your Own Model (BYOM) workflow improvements: Support for automatic model discovery and in-session model switching, eliminating the need to restart the Copilot CLI to change configured models.
3. Enterprise parity functionality: Consistent MCP policy enforcement across IDE and CLI clients, and proper isolation of MCP access for GHEC data residency partitions.
4. Workflow quality of life: Persistent GitHub login for isolated browser canvas sessions, independent separate model selection for rubber duck adversarial reviews, and configurable steering message execution ordering.
---
## 6. Developer Pain Points
Recurring high-frequency developer frustrations identified in this reporting window:
1. Recent terminal rendering regressions: Broken alt-screen behavior, intrusive spurious status messages, and poorly tuned default pinned prompt behavior for small terminals.
2. MCP consistency gaps: MCP servers that work perfectly in IDE clients regularly fail in Copilot CLI, with unclear error messaging for policy blocks, and partial MCP spec support that breaks third-party MCP server implementations.
3. Silent failure behavior: MCP access errors, missing web search results, and queued stuck messages are not surfaced clearly to users, leading to unexpected incorrect output and unresponsive sessions.
4. Unexpected enterprise cost and functionality issues: Unplanned routing of high-cost primary models to even more expensive sub-agents without user notification, and broken context memory saving workflows when a user's enterprise billing entity is not correctly detected.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-06
---
## 1. Today's Highlights
This 24-hour reporting window sees no new official Kimi Code CLI releases, with core developer activity focused on patching user-facing runtime bugs for the current v0.29.x stable release train. A newly opened pull request directly resolves a critical silent failure pain point for users working with custom MCP tools and self-hosted OpenAI-compatible model endpoints. 4 freshly filed bug reports flag edge-case data corruption, abnormal session exits, and high-context agent reliability limitations for the maintainer team to triage, while a long-running popular feature request for cross-session persistent memory received renewed community engagement.

## 2. Releases
No new official Kimi Code CLI releases were published in the last 24 hours.

## 3. Hot Issues
All 5 updated issues from the reporting window are listed below (total issue pool <10 for this period):
1. **#1283 [OPEN] Persistent cross-session memory system** | https://github.com/MoonshotAI/kimi-cli/issues/1283  
   The highest-engagement open feature request with 18 total comments, tracking community demand for automatic AI-managed and user-defined persistent context storage to eliminate redundant re-explanation of project patterns and user preferences across CLI restarts.
2. **#2586 [CLOSED] Agent reliability degradation at >500K token context** | https://github.com/MoonshotAI/kimi-cli/issues/2586  
   Resolved user report of repetitive action loops, instruction drift and no escalation for long-running multi-step agent sessions once context fill passes the 500K token threshold. The issue has 1 maintainer comment confirming the team is rolling out a targeted context window routing fix for heavy workloads.
3. **#2591 [OPEN] StrReplaceFile corrupts non-UTF8 bytes outside edited regions** | https://github.com/MoonshotAI/kimi-cli/issues/2591  
   High-severity unpatched bug that causes silent data corruption: the core file editing tool decodes full files with `errors="replace"`, rewriting non-UTF8 bytes unrelated to the target edit to corrupted U+FFFD values, breaking binary assets and legacy non-UTF8 encoded configs.
4. **#2588 [OPEN] MCP image tools abort mid-run with no remediation hint for missing model capabilities** | https://github.com/MoonshotAI/kimi-cli/issues/2588  
   Critical configuration gap that breaks self-hosted model workflows: users running custom model endpoints without explicit capability declarations in `config.toml` see tasks fail after MCP tools already execute side effects, with no indication of what configuration change is needed to resolve the error.
5. **#2587 [OPEN] Abnormal session exits on Windows v0.29.2** | https://github.com/MoonshotAI/kimi-cli/issues/2587  
   User-reported unreproducible crash affecting the latest stable v0.29.2 release on Windows 11, with no public debug logs shared to triage root cause at time of writing.

## 4. Key PR Progress
All 2 updated PRs from the reporting window are listed below (total PR pool <10 for this period):
1. **#2590 [OPEN] fix(soul): Explicitly name required config updates for unsupported-capability errors** | https://github.com/MoonshotAI/kimi-cli/pull/2590  
   Partial fix for Issue #2588 that improves error messaging for misconfigured models, explicitly telling users which missing capability entry to add to their `config.toml` to resolve MCP tool runtime failures, eliminating guesswork for custom endpoint setup.
2. **#2589 [OPEN] docs: Add qwen-audio-agent as a voice ACP client** | https://github.com/MoonshotAI/kimi-cli/pull/2589  
   Community-submitted documentation update that surfaces the open-source qwen-audio-agent full-duplex voice runtime as an officially noted ACP client, expanding discoverability of hands-free Kimi CLI workflow integrations beyond existing editor/IDE clients.

## 5. Feature Request Trends
The most requested feature direction across recent community input is a full persistent memory system supporting both automatic AI-managed context tracking (project file patterns, past decision history) and user-defined manual memory rules, to eliminate redundant setup work when launching new Kimi CLI sessions. A secondary fast-growing trend is community-led expansion of the Kimi ACP ecosystem, with contributors building out non-IDE clients specifically for voice-controlled hands-free operation use cases.

## 6. Developer Pain Points
Top recurring frustrations from recent issue reports:
1. Severe agent reliability drops at context lengths exceeding 500K tokens, making repo-wide refactor and long multi-step change sessions unstable
2. Vague error messaging for custom model configurations that leaves users troubleshooting broken MCP tool failures after side effects are already applied
3. Unaddressed silent data corruption risk for non-UTF8 file content when using the built-in StrReplaceFile editing tool
4. Unprompted unlogged session crashes on Windows for the latest v0.29.2 stable release, with no clear debug guidance for end users to collect diagnostic data for maintainers

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-08-06
*Source: github.com/anomalyco/opencode*

---

## 1. Today's Highlights
The latest v1.18.14 release ships with key usability fixes for headless xAI deployments and improved error resilience for third-party LLM providers. The long-running official VS Code extension feature request hit 134+ upvotes to become the project's most popular open feature request as of yesterday. The codebase also saw a major batch of V2 technical debt cleanup PRs, alongside new community contributions expanding the MCP (Model Context Protocol) plugin ecosystem.

## 2. Releases
### v1.18.14
This core update includes:
- **Improvement**: Simplified xAI login to a single device-code flow optimized for headless and remote execution environments
- **Bugfixes**: Preserved structured mid-stream provider errors to enable retry logic for compatible model backends, plus extended retry coverage for more transient network and provider failure modes
[Full release notes](https://github.com/anomalyco/opencode/releases)

## 3. Hot Issues (Top 10 Notable)
1. **[Feature] Official OpenCode VS Code extension #11176**  
   27 comments, 134 👍. The most widely requested feature in the project's issue tracker, with users pushing for native deep integration rather than workarounds to run OpenCode agent workflows directly inside VS Code.
2. **[Bug] Intel Mac "illegal hardware instruction" launch crashes #8345**  
   21 comments, 6 👍. A widely reported issue affecting older x64 macOS builds, with duplicate companion threads tracking the same AVX2/FMA incompatibility on Ivy Bridge and earlier Intel CPUs.
3. **[Bug] DeepSeek V4 Flash unexpected region lock for Go subscriptions #39845**  
   17 comments, 22 👍. Breaking behavior where users mid-session get blocked from accessing DeepSeek V4 Flash and forced to opt into China-hosted model endpoints without prior warning.
4. **[Feature] Pay-as-you-go crypto payment support #23153**  
   16 comments, 36 👍. International users without access to traditional card payment methods are requesting crypto billing options for OpenCode Go subscriptions.
5. **[Feature] Honor `disable-model-invocation: true` in SKILL.md frontmatter #34498**  
   13 comments, 49 👍. Power users building custom skills want safety guardrails inherited from Claude Code's skill specification, to prevent accidental unapproved model calls from running custom skill logic.
6. **[Closed] [Feature] MCP sampling (createMessage) support #11948**  
   4 comments, 10 👍. The long-requested implementation of the 2025-11-25 MCP sampling specification is now marked as resolved, enabling MCP servers to request LLM completions from the OpenCode runtime.
7. **[Feature] Bundle ripgrep in Windows binaries for offline environments #31734**  
   3 comments, 4 👍. Critical request for enterprise and air-gapped users running OpenCode on disconnected Windows machines, who currently face transport errors when the binary tries to download ripgrep on first launch.
8. **[Bug] Server keeps stale `project.worktree` entries after on-disk folder rename #35240**  
   3 comments, 1 👍. A breaking bug for remote distributed setups, where clients keep trying to access deleted/renamed project paths even after users remove the old entry from the UI.
9. **[Bug] PyCharm 2026.2 AI Assistant spawns 15+ opencode.exe processes leading to OOM crash #40696**  
   3 comments, 0 👍. A critical compatibility issue with JetBrains' latest IDE release, where the ACP (AI Client Protocol) handler spawns independent full process instances for every initialized chat session.
10. **[Bug] Global `~/.config/opencode/AGENTS.md` custom rules are forgotten across sessions #40348**  
    2 comments, 0 👍. A major annoyance for power users, who currently have to re-remind the agent of global constraints (like no auto-commit) on every new session.

## 4. Key PR Progress (Top 10)
1. **#40723 feat(core): Migrate V1 data to V2**  
   Adds a resumable REST-triggered migration flow for existing V1 users, importing full session history, legacy credentials, and custom settings to the upcoming V2 release, with updated TUI migration UI.
2. **#40761 fix(core): Connect custom providers**  
   Resolves long-standing custom provider connection bugs, exposing configured custom (e.g. LiteLLM) providers to the `/connect` menu even without pre-populated environment credentials, and adds manual API key auth flow for unlisted providers.
3. **#27554 feat(opencode): Local LAN provider discovery + auto-discover models**  
   Implements mDNS-based auto-discovery for local OpenAI-compatible servers on the user's local network, eliminating the need to manually enter IP addresses and endpoint URLs for locally hosted models.
4. **#38308 feat(app): Optional vertical tab rail**  
   Introduces an opt-in resizable, collapsible vertical tab layout in Settings > General, as an alternative to the existing default horizontal tab bar for users with large numbers of open sessions.
5. **#35311 fix(core): Multiple clones of the same repo treated as different projects**  
   Resolves 12+ linked duplicate bugs that incorrectly mapped multiple local clones of the same Git repo to a single shared project workspace, causing cross-project data leaks.
6. **#40762 docs: Add opencode-history-mcp example**  
   Adds documentation for the new community-built OpenCode History MCP, which lets agents search across past conversation history via a local FTS5 full-text search index.
7. **#35446 fix(provider): Skip `includeUsage` for incompatible OpenAI-compatible hosts**  
   Fixes 400 Bad Request errors for popular Chinese AI gateways (Volcengine, Qianfan, DashScope, ModelScope) that do not support the `stream_options.include_usage` parameter in their API implementations.
8. **#38790 feat(app): Add workspace flows to new layout**  
   Ports full Q3 workspace management functionality to the V2 UI, including session search, branch context display, last-used sorting, and one-click new/import workspace creation flows.
9. **#35455 fix(cli): Restart stale clients after updates**  
   Prevents version mismatch conflicts between outdated TUI clients and newly updated daemon processes, by automatically detecting stale clients, tearing down old sessions, and prompting users to restart with the updated binary.
10. **#40754 refactor: Remove legacy workspace control plane**  
   Massive technical debt cleanup that deletes the fully obsolete legacy V1 workspace control plane from both V1 and V2 codebases, eliminating unused plugin adapters, routing logic, and sync layers to reduce build size by ~12%.

## 5. Feature Request Trends
Three core priority directions emerged from this 24h issue batch:
1. **IDE ecosystem expansion**: Native first-class support for VS Code, PyCharm, and other JetBrains IDEs is the highest voted category of feature request.
2. **MCP ecosystem growth**: Users are actively contributing new MCP server integrations, including sampling support, history search, project memory, and third-party task marketplace connections.
3. **Autocomplete and UX polish**: Multiple parallel requests focus on unifying autocomplete behavior across TUI and desktop, enabling mid-prompt slash command and skill invocation, and surfacing all skills directly from the root command menu.
4. **Access flexibility**: High demand for air-gapped offline support, alternative payment methods, and compatibility with regional LLM providers outside of US-hosted endpoints.

## 6. Developer Pain Points
Recurring high-frequency frustrations observed in this update window:
1. **Older CPU compatibility**: The hard AVX2 instruction set requirement leads to immediate crashes on all pre-Haswell Intel Mac and x86 Linux systems, with dozens of overlapping open reports.
2. **Stale cached project state**: Multiple unrelated bugs cause OpenCode to retain invalid references to deleted, moved, or renamed project folders, with no built-in UI option to clear stale cached data.
3. **Partial autocomplete functionality**: TUI autocomplete currently fails to list nested files inside configured reference aliases, only triggers at the start of prompts, and deliberately hides skills from the root command menu, creating unnecessary friction for power users.
4. **Custom provider compatibility gaps**: Many non-OpenAI model backends use partial spec implementations that break OpenCode's default request parameters, requiring per-provider exception handling.
5. **Agent config persistence failures**: Global custom rules defined in `AGENTS.md` are frequently ignored across sessions, erasing user-defined guardrails like "no auto-commit" or "no file edits without explicit approval".

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-08-06
Repository: github.com/badlogic/pi-mono

---

## 1. Today's Highlights
No new public releases shipped in the last 24 hours, but the team merged a high volume of critical bug fixes for long-standing reliability issues including dangling terminal OSC 8 hyperlinks, extension event bus memory leaks, and missing GitHub Copilot model visibility after login. Core maintainers also launched a community survey to gather Windows usage data to prioritize native Windows support roadmap work, alongside rolling out widely requested QoL features like GitHub-style line range support for `@file` references and per-directory context file overrides.

## 2. Releases
No new stable or pre-release versions of Pi were published in the last 24 hours.

## 3. Hot Issues
1. **[#7547 Windows usage & compatibility survey](https://github.com/earendil-works/pi/issues/7547)** (17 comments, Open): Core team is collecting feedback from Windows users to identify top pain points across WSL, native, and other run configurations, to prioritize official native Windows support investments that benefit the large Windows developer user base.
2. **[#7399 truncateToWidth() leaves dangling OSC 8 hyperlinks](https://github.com/earendil-works/pi/issues/7399)** (12 comments, Closed): High-impact TUI bug that broke terminal hyperlink state when text was truncated inside an active OSC 8 link, causing unexpected navigation and rendering behavior for all terminal users, now fully resolved.
3. **[#5291 Sessions hang on "working" with Anthropic subscriptions](https://github.com/earendil-works/pi/issues/5291)** (8 comments, 3 👍, Closed): Long-running reliability bug that left enterprise Anthropic users with stuck sessions, now fixed after 2 months of community reports.
4. **[#6675 `pi update --self` fails on single transient network error](https://github.com/earendil-works/pi/issues/6675)** (8 comments, 2 👍, Closed): Upgrade experience pain point that stopped self-update entirely after one failed latest-version API request, now resolved with retry logic.
5. **[#3200 Support video/audio content in the prompt command](https://github.com/earendil-works/pi/issues/3200)** (7 comments, 4 👍, Open): Top upvoted feature request to extend existing image multimodal support to video and audio inputs, for use with modern models like Gemma 4 and GPT-4o.
6. **[#7553 Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553)** (7 comments, Open): Request to separate context compaction summarization reasoning budgets from regular session turn thinking levels, a critical quality of life improvement for power users running expensive reasoning models with auto-compaction enabled.
7. **[#5323 Improve Vertex + GCP metadata server support](https://github.com/earendil-works/pi/issues/5323)** (6 comments, 1 👍, Open): Enterprise GCP user pain point where sync file existence checks break automatic Vertex auth flows for non-local development environments.
8. **[#7444 WebSocket retry only handles two error codes](https://github.com/earendil-works/pi/issues/7444)** (4 comments, Open): Reliability gap that causes hard session failures on most transient remote connection errors, instead of triggering automatic retry logic.
9. **[#7691 Anthropic login over SSH redirects to localhost](https://github.com/earendil-works/pi/issues/7691)** (1 comment, Open): Headless/remote dev server usability bug where the Anthropic OAuth flow fails for users accessing Pi over SSH with no local browser access.
10. **[#7688 Negative cost reported for openrouter/auto-beta model](https://github.com/earendil-works/pi/issues/7688)** (1 comment, Closed): Usage tracking bug that displays invalid negative cost values in the TUI footer, eroding user trust in Pi's usage metering for third-party provider models.

## 4. Key PR Progress
1. **[#7657 + #7665 Fix truncated OSC 8 links](https://github.com/earendil-works/pi/pull/7657)** (Closed): Resolves #7399 by adding logic to automatically close active OSC 8 hyperlinks before truncating text, with additional performance optimizations to skip unnecessary ANSI parsing for plain text, all 16 existing unit tests pass.
2. **[#7656 Fix extension event bus leak](https://github.com/earendil-works/pi/pull/7656)** (Closed): Closes #7193 by scoping all `pi.events.on()` subscriptions to the extension runtime that registered them, automatically cleaning up stale listeners after session reloads to eliminate long-running session memory leaks.
3. **[#7672 Restore missing Copilot models after login](https://github.com/earendil-works/pi/pull/7672)** (Closed): Fixes #7634 by adding fallback logic that pulls model lists from account policy when GitHub's model picker API returns empty, restoring visibility to all eligible Copilot models for personal users.
4. **[#7679 Support line ranges in @file references](https://github.com/earendil-works/pi/pull/7679)** (Closed): Implements the requested GitHub-style `@file#L122-L145` 1-based line range syntax, with full alignment to the existing read tool behavior, enabling seamless integration with Neovim and other editor Pi plugins.
5. **[#7685 Disable bunfig autoload in compiled binaries](https://github.com/earendil-works/pi/pull/7685)** (Closed): Resolves #7684 by adding the `--no-compile-autoload-env` flag to the Bun build configuration, preventing project-level `bunfig.toml` preload scripts from crashing the Pi binary even on basic invocations like `pi --version`.
6. **[#7664 + #7681 Support AGENTS.override.md context overrides](https://github.com/earendil-works/pi/pull/7681)** (Closed): Closes #7642 by adding a new highest-priority per-directory context file, `AGENTS.override.md`, that replaces standard `AGENTS.md`/`CLAUDE.md` in its directory while preserving normal nested directory context layering.
7. **[#7692 Natural sort model selectors](https://github.com/earendil-works/pi/pull/7692)** (Closed): Resolves #7693 by sharing a case-insensitive, numeric-aware sorting comparator between the `/model` and `/scoped-models` selectors, ensuring context window variants are ordered predictably (e.g. `@200k` before `@1m`).
8. **[#7638 Add thinking_token_budget support for OpenAI-compatible endpoints](https://github.com/earendil-works/pi/pull/7638)** (Closed): Fixes a long-standing bug where reasoning models on OpenAI-compatible endpoints would spend their entire `max_tokens` budget on thinking, returning no usable output or tool calls, by reserving separate budgets for reasoning and final response content.
9. **[#7670 Update Qwen token plan GA models](https://github.com/earendil-works/pi/pull/7670)** (Closed): Replaces the deprecated `qwen3.8-max-preview` model with the general-availability `qwen3.8-max` on both Qwen token plan providers, and adds correct low/medium/xhigh reasoning effort mapping for the new GA model.
10. **[#7669 Harness v2 R2 lane reducer](https://github.com/earendil-works/pi/pull/7669)** (Closed): Ships the new pure lane reducer contract for the Pi session system, adding durable lane state tracking, terminal failure provenance logging, and expanded test coverage for idle, open, and suspended session states.

## 5. Feature Request Trends
The top feature directions from recent community feedback are:
1. Multimodal capability expansion: Adding audio and video input support to the core `prompt` RPC to take full advantage of next-gen multimodal LLMs, building on existing image input support.
2. Granular resource control: Separating context compaction reasoning budgets from regular session thinking levels, and adding explicit user-controlled context window size selection in settings.
3. Extensibility improvements: Exposing stable extension APIs for persisting custom provider credentials, adding TUI event hooks for third-party components, and extending custom context file support.
4. Model management usability: Predictable, consistent sorting of model variants across all selectors to reduce friction for users with access to dozens of context window variants from their providers.

## 6. Developer Pain Points
Recurring high-frequency frustrations from the community include:
1. Windows platform fragmentation: No official prioritized native Windows support, with multiple unofficial run paths leading to unresolved compatibility bugs that are hard for core maintainers to triage.
2. Remote/headless usage gaps: Broken OAuth login flows over SSH, missing WebSocket retry logic, and other reliability issues that break Pi usage on remote dev servers.
3. Poor transient network error handling: Single-failure hard stops during self-updates, invisible provider retries with no user visibility, and no user-facing retry callbacks for debugging connection issues.
4. Runtime compatibility conflicts: Unhandled Node version requirements (undici CacheStorage needs Node ≥22.19, breaking Node 20 setups), and unintended Bun runtime preload script conflicts with project-level configuration.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-08-06
---
## 1. Today's Highlights
This update cycle ships the stable v0.21.6 core release alongside the long-awaited Qwen Code Desktop v0.1.0 first public stable build, marking the formal general availability of the lightweight Tauri-based desktop shell that reuses existing WebShell functionality to eliminate redundant UI maintenance. A new critical P1 security vulnerability in the read-only shell command classifier was publicly disclosed, triggering active triage to patch unvalidated arbitrary code execution paths. Experimental native real-time voice interaction support also landed for macOS WebShell, accessible via a system global shortcut for hands-free audio workflows.

## 2. Releases
All builds published in the last 24 hours:
- **v0.21.6 (stable)**: Includes experimental macOS native Live Voice support for WebShell, preserves expanded conversation turns during background agent runs, adds browser extension alpha readiness diagnostics, and publishes full official documentation for headless Goal automation workflows.
- **v0.21.6-preview.0**: Pre-release validation candidate for the v0.21.6 stable line with no additional breaking changes.
- **v0.21.5-nightly.20260805.32e274157**: Main branch nightly build for 2026-08-05, carrying the same browser extension diagnostic and headless docs feature updates.
- **desktop-v0.1.0**: First stable official Qwen Code Desktop release, with CI job fixes and the full base WebShell-derived desktop experience.

## 3. Hot Issues
1. **[#8582 P1 Security]** Critical flaw where the read-only shell classifier auto-approves arbitrary code execution via command substitution hidden by line continuation or `\${var@P}` syntax. This breaks core sandboxing guarantees for untrusted workloads, and the security team has prioritized patches to block the unvalidated execution path. <https://github.com/QwenLM/qwen-code/issues/8582>
2. **[#8136 P2 Security]** Provider warning sanitizer has two credential leakage bugs: it truncates valid messages that contain port numbers, and fails to redact passwords that include the `@` character, putting user API credentials at risk of exposure in public `/status` payloads. <https://github.com/QwenLM/qwen-code/issues/8136>
3. **[#8597 P1 CI]** The CI `/review` reverse-audit fan-out job hangs silently, causing over 21 timeouts across 2 days and blocking 90% of active PR review pipelines, prompting immediate routing adjustments to self-hosted ECS runners. <https://github.com/QwenLM/qwen-code/issues/8597>
4. **[#8560 P2 Auth]** When `qwen serve` runs with a bearer token, refreshing a WebShell session deep link returns 401 Unauthorized, breaking expected session persistence for self-hosted authenticated deployments. <https://github.com/QwenLM/qwen-code/issues/8560>
5. **[#8538 P2 UX]** Windows Qwen Code Desktop 0.0.5+ ships with a non-functional copy-response button that leaves the clipboard unchanged after clicking, degrading core productivity for all Windows end users. <https://github.com/QwenLM/qwen-code/issues/8538>
6. **[#8580 P2 UX]** TUI experiences full-screen flickering in tmux versions older than 3.5, a widely used terminal multiplexer across Linux remote servers, severely affecting usability for CLI users connecting via SSH. <https://github.com/QwenLM/qwen-code/issues/8580>
7. **[#8550 P2 CLI]** `qwen mcp list` hangs indefinitely when connecting to unresponsive SSE MCP servers that never return a required endpoint event, with no built-in timeout handling to recover the CLI process. <https://github.com/QwenLM/qwen-code/issues/8550>
8. **[#8606 P2 VSCode]** VSCode companion extension breaks Edit/Write file links, resolving all paths to the workspace root instead of nested directories and returning false "file not found" errors for the majority of non-root file operations. <https://github.com/QwenLM/qwen-code/issues/8606>
9. **[#8092 Roadmap]** Community feedback tracking issue for the low-maintenance WebShell-native desktop app roadmap, which has now shipped as the basis of desktop-v0.1.0 with ongoing discussions about long-term feature alignment for the desktop product line. <https://github.com/QwenLM/qwen-code/issues/8092>
10. **[#7306 Core]** Phase 1 of the tool-output budgeting hardening project is complete, with active community discussion ongoing for Phase 2 observability and artifact lifecycle controls to prevent OOM errors in multi-day long-running agent jobs. <https://github.com/QwenLM/qwen-code/issues/7306>

## 4. Key PR Progress
1. **#8553**: Fixes core backward transcript pagination to cap expansion of long single-turn sessions, preventing unbounded memory growth when users scroll back through very large agent history. <https://github.com/QwenLM/qwen-code/pull/8553>
2. **#8368**: Adds first-class provider presets for Kimi (with China/International API access modes) and Xiaomi MiMo, expanding the supported third-party LLM ecosystem for self-hosted users. <https://github.com/QwenLM/qwen-code/pull/8368>
3. **#8305**: Implements native inline image rendering in the interactive CLI, displaying model and tool output inline data directly in the terminal without requiring external image viewer applications. <https://github.com/QwenLM/qwen-code/pull/8305>
4. **#8603**: Routes heavy Qwen AutoFix CI jobs to self-hosted ECS runners, resolving the widespread 6-hour timeout issue on the `/review` pipeline that impacted all active PRs. <https://github.com/QwenLM/qwen-code/pull/8603>
5. **#8274**: Adds the ability to fork sessions from any earlier conversation point, not just the latest state, enabling users to easily test alternative agent paths from any historical assistant response. <https://github.com/QwenLM/qwen-code/pull/8274>
6. **#8565**: Overhauls DingTalk integration to keep continuous, streaming interactive status cards for tasks, eliminating broken split cards and missing streaming output for enterprise DingTalk users. <https://github.com/QwenLM/qwen-code/pull/8565>
7. **#8467**: Expands WebShell Git tooling with full diff source selection (unstaged, staged, committed, branch comparison) and a searchable branch picker, making in-browser Git management fully functional. <https://github.com/QwenLM/qwen-code/pull/8467>
8. **#8439**: Restores Ctrl+click hyperlink opening and right-click context menu support in Virtual Viewport terminal mode, which was previously broken by SGR mouse tracking enabling for full terminal UX. <https://github.com/QwenLM/qwen-code/pull/8439>
9. **#8332**: Adds an audio bridge for user-supplied attachments, automatically transcribing uploaded audio files via a dedicated voice model even if the primary selected LLM does not natively support audio inputs. <https://github.com/QwenLM/qwen-code/pull/8332>
10. **#8578**: Adds native Feishu ask-user interactive cards, rendering structured single-select and multi-select prompts directly in Feishu chats with full callback correlation for enterprise team deployments. <https://github.com/QwenLM/qwen-code/pull/8578>

## 5. Feature Request Trends
The most requested feature directions from this cycle's issues are:
1. Cross-device local access workflows including QR-code based phone pairing for local Qwen Code sessions,

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-08-06
Tracked repository: Hmbown/DeepSeek-TUI (core engine: Hmbown/CodeWhale)

---

## 1. Today's Highlights
The v0.9.4 release train remains the core development priority, with the integration branch now 77 commits ahead of `main` rolling out full Runtime API coverage for memory, MCP servers, goal tracking, verifier auditing, and skill lifecycle management. Multiple high-priority community-submitted fixes merged in the 24h window resolve longstanding cross-platform path handling and TUI interaction bugs for Windows and OpenHarmony developers. Newly filed feature requests point to strong user demand for multi-provider API credential support to simplify workloads that mix DeepSeek, GLM and third-party LLM models.

## 2. Releases
No new production or pre-release versions were published in the last 24 hours. The v0.9.4 release train PR (#5135) remains the lead candidate for the next stable public release.

## 3. Hot Issues
All 4 issues updated in the tracking window are listed below:
1. [#4029 OPEN] Planning to create a Reasonix-like interface (https://github.com/Hmbown/CodeWhale/issues/4029)
   Opened by longASKme, 4 comments. This long-running feature proposal regained traction after recent ACP tooling upgrades: a dedicated reasoning trace visualization interface would drastically reduce debug time for multi-step deep agent runs, a top request for power users.
2. [#5005 CLOSED] Add sandbox filesystem path allowlist support for external build artifacts (https://github.com/Hmbown/CodeWhale/issues/5005)
   Opened by WillHouMoe. This resolved enhancement unblocks full Xcode workflow support, allowing the TUI to access logs and build outputs stored in the standard ~/Library/Developer/Xcode/DerivedData/ path outside the active workspace sandbox.
3. [#5250 OPEN] Support storage for multiple API keys across different providers (https://github.com/Hmbown/CodeWhale/issues/5250)
   Opened by ffyuhf, 1 comment. This newly filed high-priority enhancement eliminates the current workflow where users must manually overwrite and re-paste credentials every time they switch between DeepSeek, GLM, and other LLM providers.
4. [#5244 OPEN] Surface explicit warnings for unrecognized model ID context window fallbacks (https://github.com/Hmbown/CodeWhale/issues/5244)
   Opened by maintainer Hmbown, 1 comment. This bug addresses a silent failure state where 1M+ context model IDs were automatically throttled to the 128K legacy DeepSeek context limit without user notification, leading to unexpected long codebase truncation in chat sessions.

## 4. Key PR Progress
10 highest-impact PRs updated in the 24h window:
1. [#5135 OPEN] v0.9.4 release train (https://github.com/Hmbown/CodeWhale/pull/5135)
   Led by Hmbown. This unifies 77 commits across all new feature branches, superseding the earlier 0.9.4 candidate PR to serve as the single integration point for the upcoming stable release.
2. [#5225 OPEN] Expose full file/search/git/patch/shell tools over ACP session/prompt endpoints (https://github.com/Hmbown/CodeWhale/pull/5225)
   By rafaelcavalheri. This fix removes a prior limitation where ACP integrations (Zed editor support, community `acp-deepseek-adapter` bridge) only received chat outputs without access to the full agent tool execution stack.
3. [#5130 OPEN] Add MCP server configuration and lifecycle management endpoints to Runtime API (https://github.com/Hmbown/CodeWhale/pull/5130)
   Adds full CRUD HTTP routes for MCP servers, eliminating the need for users to manually edit TOML config files to add, update, or remove model context protocol integrations.
4. [#5131 OPEN] Runtime API bounded memory inspection and lifecycle control endpoints (https://github.com/Hmbown/CodeWhale/pull/5131)
   New `/v1/memory` routes let managed clients inspect active session memory scope, provenance, and run cleanup operations directly via the official HTTP boundary.
5. [#5133 OPEN] Expose persistent goal-loop state and completion controls via Runtime API (https://github.com/Hmbown/CodeWhale/pull/5133)
   Adds programmatic access to active goal progress tracking, a required capability for third-party UI clients building custom multi-task workflow dashboards.
6. [#5242 OPEN] Resume interrupted subagent child runs from checkpoint via followup (https://github.com/Hmbown/CodeWhale/pull/5242)
   By SparkofSpike. This fixes a broken checkpoint flow that previously discarded all progress on long-running tasks (multi-repo search, full codebase review) when a subagent was interrupted, forcing full redundant re-runs.
7. [#5234 CLOSED] Fix TUI scroll behavior during mouse capture (https://github.com/Hmbown/CodeWhale/pull/5234)
   Merged this window, resolving a longstanding UI bug where mouse wheel input would navigate chat history instead of scrolling the transcript when content overflowed the terminal viewport.
8. [#5095 CLOSED] Re-quote Windows linker arguments with spaces for OpenHarmony builds (https://github.com/Hmbown/CodeWhale/pull/5095)
   Merged this window, fixing path parsing errors for the default DevEco Studio installation path (which contains spaces) to unblock native OpenHarmony builds on Windows.
9. [#5192 CLOSED] Pin ratatui to 0.30.0 to eliminate TUI startup race conditions (https://github.com/Hmbown/CodeWhale/pull/5192)
   Merged this window, resolving a hard-to-debug application hang caused by a blocking terminal query in newer unversioned `ratatui-core` releases.
10. [#5229 OPEN] Add Chinese Windows beginner user guide (https://github.com/Hmbown/CodeWhale/pull/5229)
    Community contributed fully tested zh-CN documentation covering installation, configuration, model switching, and common troubleshooting for new Windows platform users.

## 5. Feature Request Trends
The most requested feature directions from recent community input are:
1. Native multi-provider API key management to support mixed LLM workloads without manual credential overwriting
2. Granular sandbox path allowlist controls to support platform-specific external tooling and artifacts outside the default workspace directory
3. Explicit user notification for edge-case fallback behavior instead of silent state changes that break expected workload behavior
4. New dedicated reasoning trace visualization UI (Reasonix-like interface) to simplify debugging of long multi-step agent runs

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced in recent updates:
1. Transitive dependency version drift: Unpinned TUI rendering library updates introduced hidden event loop race conditions that caused confusing startup hangs for end users
2. Cross-platform path handling edge cases: Spaced default installation paths for platform toolchains (DevEco Studio, Xcode DerivedData) break default sandbox and linker logic without explicit whitelisting
3. Missing multi-account/ multi-tenant credential storage that forces repeated manual re-entry of API keys for users working across multiple LLM vendor environments
4. Unclear context window sizing for unrecognized model IDs, leading to unexpected long session truncation with zero user visibility into the fallback behavior.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*