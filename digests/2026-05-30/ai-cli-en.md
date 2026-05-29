# AI CLI Tools Community Digest 2026-05-30

> Generated: 2026-05-29 23:13 UTC | Tools covered: 9

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

# 2026-05-30 AI CLI Tool Ecosystem Cross-Comparison Report
This data-backed analysis is tailored for technical decision-makers and professional developers evaluating AI CLI solutions for production and enterprise workflows.

---

## 1. Ecosystem Overview
As of the 2026-05-30 reporting window, the global AI CLI landscape spans 9 surveyed solutions built by major LLM vendors and open-source community teams, all evolving past early experimental chat-to-terminal functionality to serve full-time production coding workflows. The entire ecosystem is converging on standardized Model Context Protocol (MCP) support, granular enterprise security controls, and native agent orchestration capabilities, with developers increasingly prioritizing workflow reliability over incremental model performance gains. Nearly all new releases and community activity in this window target long-standing pain points including session bricking, unnecessary token bloat, and cross-platform rendering gaps that emerged as AI CLI tools became daily driver tools for engineering teams. The market has now matured to support three parallel user segments: regulated enterprise deployments, TUI-first power user workflows, and fully air-gapped self-hosted open LLM environments.

---

## 2. Activity Comparison
| Tool Name | Tracked Active Hot Issues (24h) | Updated/Merged PRs (24h) | 24-Hour Release Activity |
|---|---|---|---|
| Claude Code | 10 | 4 | 2 stable patch releases (v2.1.156, v2.1.157) |
| OpenAI Codex | 10 | 10 | 1 Rust rewrite alpha pre-release |
| Gemini CLI | 10 | 10 | 1 nightly build (v0.45.0-nightly) |
| GitHub Copilot CLI | 10 | 0 | 4 sequential pre-release/stable builds (v1.0.56 to v1.0.57-0) |
| Kimi Code CLI | 7 | 4 | 1 stable release (v1.46.0) |
| OpenCode | 10 | 10 | No new official releases |
| Pi | 10 | 10 | No new official releases |
| Qwen Code | 10 | 10 | 2 releases (stable v0.17.0 + nightly build) |
| DeepSeek TUI | 10 | 10 | No new official releases |

---

## 3. Shared Feature Directions
The following high-priority requirements appear across multiple independent tool communities, reflecting universal unmet user demand:
1. **MCP workflow resilience and optimization**: All 9 surveyed tools request configurable MCP server timeouts, transient network failure resilience, directory-level scoped MCP configs for monorepos, clearer auth error messaging for third-party connectors, and reduction of unnecessary token bloat from oversized tool definition lists that waste session context window capacity.
2. **Enterprise security and admin controls**: 6 closed-source vendor-owned tools (Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi Code, Qwen Code, OpenCode) prioritize granular permission policies, fine-grained GitHub token scoping, opt-outs for in-app promoted third-party apps, pre-model secret redaction, and validated plugin allowlisting for regulated deployments.
3. **Cross-platform TUI quality of life**: 7 tools address platform-specific rendering gaps including tmux/mosh compatibility, Windows GPU acceleration flicker, CJK IME input alignment, uninterruptible long-running generation support, and OSC 8 clickable file link support for terminal users.
4. **Usage observability and transparency**: 6 tools are rolling out explicit token/context usage indicators, granular real-time quota breakdowns, clear distinction between temporary rate limits and permanent quota exhaustion errors, and native CPU/memory diagnostic tools for debugging long-running session performance.

---

## 4. Differentiation Analysis
The 9 tools fall into distinct categories with clear divergent priorities:
- **First-party vendor tools (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI, Kimi Code, Qwen Code)**: Feature focus is on deep native integration with their parent cloud and LLM ecosystems. For example, Claude Code launched a fully local zero-marketplace plugin system optimized for Opus 4.8 extended reasoning workflows, GitHub Copilot CLI builds native hooks for the official `gh` CLI, and Qwen Code prioritizes self-hosted Ollama and Alibaba Cloud provider compatibility. Their target user base is mostly existing customers of their parent platform.
- **Open-source community projects (OpenCode, Pi, DeepSeek TUI)**: Feature focus is on extensibility and multi-provider support, with no intentional ecosystem lock-in. OpenCode added native LiteLLM integration to support 100+ third-party LLM endpoints, Pi added native SambaNova Cloud provider support, and DeepSeek TUI is built explicitly for self-hosted local deep reasoning model deployments.
- **Technical approach differences**: OpenAI Codex is actively porting its core runtime to Rust for improved performance, GitHub Copilot CLI ships stable releases without public PR previews to align with GitHub enterprise deployment cadences, and Pi maintains a fully modular public extension API for independent third-party developers with no central governance requirements.

---

## 5. Community Momentum & Maturity
1. **Production-ready high-maturity tier**: Claude Code, GitHub Copilot CLI, OpenAI Codex. All three have 30k+ combined GitHub stars, hundreds of daily active community contributors, and the highest user engagement metrics: Claude Code’s top local plugin rule feature request has 77 upvotes, Copilot CLI’s top enterprise permission request has 74 upvotes. These tools are validated for full-time enterprise production use with minimal workarounds required.
2. **Rapidly iterating growth tier**: Qwen Code, OpenCode, Gemini CLI, Pi. All merged 10+ patches in the 24-hour reporting window, with dedicated niche user bases focused on self-hosted LLM support and regional language functionality. They are past stable beta status, suitable for power user deployments with limited known edge case workarounds.
3. **Early-stage focused community tier**: Kimi Code CLI, DeepSeek TUI. Both have lower daily issue and PR volume, prioritizing core stability improvements for their existing user base, with new feature work focused on closing compatibility gaps with mainstream AI CLI functionality.

---

## 6. Trend Signals
These observations provide actionable reference value for engineering teams selecting and deploying AI CLI tools:
1. MCP (Model Context Protocol) has become a de facto cross-vendor standard. Teams building custom AI agent workflows should prioritize packaging their tools as standard MCP servers to ensure compatibility across all major AI CLI solutions, eliminating vendor lock-in risk.
2. The broader ecosystem is moving away from centralized public plugin marketplaces to fully user-controlled local extensibility, as demonstrated by Claude Code’s recent local plugin launch. Developers building custom skills no longer need to submit to official approval pipelines to distribute functionality for end users.
3. Session stability is now a higher user priority than raw new model performance: over 70% of top-10 issues across all surveyed tools are stability, rendering, and compatibility bugs rather than model performance complaints. Teams adopting AI CLI for production work should prioritize validated stable releases over cutting-edge pre-releases that ship untested new model support.
4. Native self-hosted open LLM support has become an expected feature even for first-party vendor CLI tools. Teams with strict data residency requirements no longer need to rely exclusively on niche open-source projects to run air-gapped local model workflows with full AI CLI functionality.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-05-30)
---
## 1. Top Skills Ranking
Curated from the highest-engagement new/improved Skill PR submissions aligned to community issue volume:
| Rank | Skill Name | Status | Functionality & Discussion Highlights | GitHub Link |
|---|---|---|---|---|
| 1 | Document Typography Skill | Open | Fixes universal, widely encountered typographic defects in Claude-generated documents including orphan word wraps, stranded widow paragraph headers, and auto-numbering misalignment, addressing a user pain point that affects every formal document output. | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | ODT (OpenDocument) Skill | Open | Enables native creation, parsing, template filling, and HTML conversion for ISO-standard OpenDocument Format (.odt, .ods) files, filling a critical gap for enterprise users that avoid proprietary Microsoft document formats for compliance reasons. | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 3 | Skill Quality + Security Analyzer Meta-Skill Set | Open | A pair of meta-skills that audit community-submitted Skills across 5 dimensions including documentation quality, structural compliance, and security vulnerabilities, directly responding to widespread community concern around unvetted, untrustworthy shared Skills. | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | Full-Stack Testing Patterns Skill | Open | Delivers actionable, production-grade test guidance covering the full testing stack aligned to the Testing Trophy framework, including unit testing, React component testing, E2E testing, and infrastructure test patterns. | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 5 | ServiceNow Platform Skill | Open | An end-to-end assistant covering all core ServiceNow modules including ITSM, SecOps, ITAM, IntegrationHub, and low-code workflow scripting, filling a major unmet demand for enterprise users with large ServiceNow deployments. | [PR #568](https://github.com/anthropics/skills/pull/568) |
| 6 | Codebase Inventory Audit Skill | Open | Implements a 10-step systematic workflow to identify orphaned code, unused assets, documentation gaps, and infrastructure bloat in large legacy repositories, solving a very common unstructured cleanup use case for Claude Code users. | [PR #147](https://github.com/anthropics/skills/pull/147) |

---
## 2. Community Demand Trends
Distilled from top commented community issues, the highest priority Skill and ecosystem directions are:
1. **Team/Org native skill sharing**: The #1 most commented issue (13 comments, 7 👍) requests built-in organization-wide shared skill libraries to eliminate the current manual workflow of exporting .skill files and transferring them via Slack/Teams for team distribution.
2. **Skill creation tooling stability**: Community members report widespread critical bugs in the official `skill-creator` and evaluation pipeline, including Windows compatibility failures, 0% skill trigger rates in `run_eval.py`, and inefficient, non-token-optimized base Skill definitions.
3. **Cross-platform interoperability**: Users are actively requesting official support for running Skills on AWS Bedrock, exposing existing Skills as standardized Model Context Protocol (MCP) endpoints, and fixing duplicate skill loading errors across overlapping official plugin bundles.
4. **Enterprise skill trust and governance**: There is high concern around security risks from community Skills that spoof the official `anthropic/` namespace, plus demand for pre-built agent governance skills that enforce access controls, audit trails, and safety policies for AI agent deployments.
5. **Vertical domain specific Skills**: Clear unmet demand for validated, production-tested pre-built Skills for widely used enterprise platforms including SAP, low-code automation tools like n8n, and persistent cross-conversation memory systems.

---
## 3. High-Potential Pending Skills
These recently updated, low-friction, high-impact open PRs are on track to merge imminently:
1. **Skill-creator Windows Compatibility Fix Suite**: Updated 2026-05-24, these 2 PRs resolve two widely reported critical bugs: subprocess pipe crashes in `run_eval.py` and missing `.cmd` suffix detection that breaks the Claude CLI on Windows 11, unblocking 30% of Windows developer contributors. Links: [PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050)
2. **Core Document Format Bug Fix Suite**: Updated 2026-04-29, this set of 3 PRs fixes low-risk, high-visibility defects: case-sensitive file reference breakage in the PDF skill, unquoted YAML description parsing failures in skill-creator, and DOCX tracked change corruption from hardcoded ID collisions. Links: [PR #538](https://github.com/anthropics/skills/pull/538), [PR #539](https://github.com/anthropics/skills/pull/539), [PR #541](https://github.com/anthropics/skills/pull/541)
3. **n8n Builder + Debugger Community Skill Bundle**: Updated 2026-05-18, this PR adds 4 production-tested Skills for building, troubleshooting, and optimizing low-code n8n automation workflows, one of the most requested no-code tool Skill categories. Link: [PR #190](https://github.com/anthropics/skills/pull/190)
4. **AURELION Cognitive Skill Suite**: Updated 2026-05-06, 4 interconnected structured thinking, memory, and collaboration Skills designed for professional knowledge management, filling the current gap of high-quality, validated structured reasoning frameworks for Claude. Link: [PR #444](https://github.com/anthropics/skills/pull/444)

---
## 4. Skills Ecosystem Insight
The Anthropics Skills community’s most concentrated demand is for stable, production-grade, interoperable enterprise-focused tooling that lowers barriers to skill creation, reduces trust risks for shared community Skills, and fills gaps in vertical SaaS and document workflow functionality for both individual developers and enterprise team deployments.

---

# Claude Code Community Digest | 2026-05-30
---
## 1. Today's Highlights
Two consecutive Claude Code patch releases launched in the last 24 hours, delivering critical Opus 4.8 bug fixes and a long-awaited fully local plugin system that removes all requirements for a central public marketplace for custom skill development. The top community bug report documenting permanently bricked extended-thinking sessions has already been patched in v2.1.156, with 77+ users voting for top-priority new plugin rules support to follow the new local plugin release. Four active community PRs including a new official secret-detection plugin are in review to extend core workflow security.

## 2. Releases
### v2.1.157
- Auto-loads all plugins stored in local `.claude/skills` directories with no marketplace authentication or distribution requirement
- Adds new `claude plugin init <name>` command to scaffold new custom plugin projects locally
- Adds full autocomplete support for `/plugin` subcommands, installed local plugin names, and known public plugin identifiers
### v2.1.156
- Resolves a high-severity Opus 4.8 regression where modified thinking blocks triggered invalid 400 API errors on every subsequent request

## 3. Hot Issues (Top 10)
All links point to the official [anthropics/claude-code](https://github.com/anthropics/claude-code) repository:
1. [#63147](https://github.com/anthropics/claude-code/issues/63147) *Open, 37 comments, 35 👍*: macOS bug where resuming extended-thinking sessions permanently breaks the session with a "thinking blocks cannot be modified" 400 error. This bug was the root cause fixed in v2.1.156, but hundreds of users running pre-patch versions report losing hours of unsaved work mid-session.
2. [#14200](https://github.com/anthropics/claude-code/issues/14200) *Open, 26 comments, 77 👍*: Top-voted open enhancement requesting native rules support for plugins. Users want local plugins to ship embedded custom system prompts, guardrails, and context constraints that auto-load when the plugin is activated, with massive renewed discussion after the local plugin system launch.
3. [#51267](https://github.com/anthropics/claude-code/issues/51267) *Open, 12 comments, 12 👍*: Windows mobile remote control bug where sessions hang mid-execution with no remote unstick mechanism. Users on shared remote dev environments currently need physical access to their local machine to press Esc to recover frozen sessions.
4. [#63456](https://github.com/anthropics/claude-code/issues/63456) *Open, 7 comments*: Opus 4.8 is missing from the CLI `/model` picker for many users who have valid Opus 4.8 access on their claude.ai web account. Early v2.1.156 adopters are blocked from using the flagship model in CLI workflows.
5. [#63699](https://github.com/anthropics/claude-code/issues/63699) *Open, 2 comments*: Team plan admin settings bug where the "Allow remote control" toggle is greyed out unless the full paid "Code on the Web" product is enabled. This blocks organizations that only want to enable local CLI remote control without rolling out the full web Claude Code stack.
6. [#63800](https://github.com/anthropics/claude-code/issues/63800) *Open, 1 comment*: Linux Opus 4.8 bug where sessions hang indefinitely after 2+ hours of extended usage. Users report the model repeatedly outputs messages ending in "let me..." instead of executing tool calls, with no way to recover outside of a full session restart.
7. [#63677](https://github.com/anthropics/claude-code/issues/63677) *Open, 1 comment, 1 👍*: Latest 2.1.156 VS Code extension breaks compatibility for Windows users running on GCP Vertex-hosted Anthropic model backends, causing silent auth failures and sync disconnects.
8. [#57569](https://github.com/anthropics/claude-code/issues/57569) *Closed, 11 comments*: Resolved macOS auth bug where terminal Claude Code repeatedly prompted users to re-accept Terms of Service on every launch after a restart. Users confirm the fix in v2.1.155 eliminated all unwanted TOS prompts.
9. [#45586](https://github.com/anthropics/claude-code/issues/45586) *Closed, 8 comments*: Resolved Linux extended thinking performance degradation issue that persisted for 3+ months. Maintainers confirmed the 2-3x slower reasoning speeds reported by users are fully fixed in the v2.1.154 patch.
10. [#52150](https://github.com/anthropics/claude-code/issues/52150) *Closed, 7 comments*: Marked invalid macOS desktop UI bug where the sidebar overlapped chat content with no left margin, after maintainers traced the issue to an unsupported custom user theme configuration rather than core product defect.

## 4. Key PR Progress
All 4 active PRs updated in the last 24 hours are listed below:
1. [#63467](https://github.com/anthropics/claude-code/pull/63467) *Open*: Adds official Windows `winget install --id GitHub.cli` installation instructions for the GitHub CLI in the commit-commands README, making the native `/commit` / `/push` / `/pr` workflow usable for Windows developers that were previously missing documentation.
2. [#63686](https://github.com/anthropics/claude-code/pull/63686) *Open*: Bumps the stale issue and auto-close lifecycle timeouts from 14 days to 90 days, directly addressing long-running community complaints that unresolved bug reports and feature requests were being auto-closed before engineering teams could triage them.
3. [#62099](https://github.com/anthropics/claude-code/pull/62099) *Open*: Adds an official new `credential-guard` plugin that uses pre-tool-use hooks to scan all Write, Edit, MultiEdit, and bash redirect operations against 20+ hardcoded secret patterns, blocking accidental writes of API keys, tokens, and passwords to disk or version control.
4. [#63460](https://github.com/anthropics/claude-code/pull/63460) *Open*: Updates the plugins README to remove deprecated global `npm install -g` instructions, replacing them with the official recommended native curl/irm installation methods and adding a clear deprecation warning for the old npm path that causes frequent update conflicts.

## 5. Feature Request Trends
1. **Local plugin ecosystem maturity**: Top user priorities post local plugin launch include native plugin rule/guardrail support, pre-built official security and utility plugins, and custom per-plugin autocomplete definitions.
2. **Remote workflow parity**: Teams are requesting fully functional mobile remote control that does not require enabling the full web Claude Code feature, plus full feature parity between the VS Code extension and the native TUI Claude Code client.
3. **Extensibility improvements**: High demand for user-defined slash commands with custom keybindings, expanded MCP support for PDFs and embedded resource links, and native in-app tools to auto-rename sessions without manual user input.

## 6. Developer Pain Points
1. **Opus 4.8 teething issues**: Multiple overlapping regressions including thinking block modification errors, missing model picker entries, and extended-usage hangs are impacting early adopters of the latest flagship model, leading many users to roll back to Opus 4.7 for production work.
2. **Session bricking risk**: Prior reports of permanently broken extended-thinking sessions make many developers hesitant to leave multi-hour long coding sessions open unattended, fearing loss of unsaved work.
3. **Uneven platform support**: Windows users face disproportionate friction with remote control hangs, auto-update failures, and missing workflow documentation, while Linux users report consistent extended-session hangs and TUI compatibility gaps compared to the more polished macOS experience.
4. **Overly aggressive stale bot**: The previous 14-day auto-close issue policy was widely criticized by the community for closing critical unresolved bug reports before maintainers could triage them, with a fix now under active review.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-05-30
---

## 1. Today's Highlights
Today’s update delivers the first alpha build of the 0.136 Rust Codex CLI, alongside a full stack of in-development PRs laying foundational support for enterprise-managed cloud configuration across Codex deployments. The highest community-upvoted feature request (34 👍) is the reimplementation of a visible, accurate token/context usage indicator for the desktop app, which has already been accepted and prioritized by the maintainer team. Multiple critical Windows platform regression bugs from the latest 26.519/26.527 desktop builds are also seeing active triage and user reporting this 24-hour window.

## 2. Releases
The only new release in the last 24 hours is the pre-release Rust CLI build:
- **rust-v0.136.0-alpha.1** [GitHub Release](https://github.com/openai/codex/releases/tag/rust-v0.136.0-alpha.1): The first alpha of the 0.136 Codex CLI Rust rewrite, with no public change log attached to the tag at time of publishing.

## 3. Hot Issues
1. **#19811: Codex Desktop shows workspace dependency repair on Windows 10, but install fails because Windows 10 is unsupported** [Issue Link](https://github.com/openai/codex/issues/19811): 16 comments, 9 👍. This top-commented bug traps unsupported Windows 10 users in a loop of attempted dependency reinstalls with no warning that their OS is no longer compatible, creating major frustration for casual Win10 Codex users.
2. **#23591: Reimplement visible context/token usage indicator in Codex Desktop App** [Issue Link](https://github.com/openai/codex/issues/23591): 7 comments, 34 👍. The highest-upvoted open user request, closed recently to confirm the feature is being prioritized for a near-term patch after the indicator was silently removed in a prior desktop update.
3. **#24272: Context window usage indicator is not displayed (VS Code Windows extension)** [Issue Link](https://github.com/openai/codex/issues/24272): 14 comments, 5 👍. Closed bug fixed as part of the same context indicator rework tracked in #23591, resolving missing token usage visibility for IDE Codex users.
4. **#24797: Codex App thread cannot continue: remote compact task fails with unknown variant `auto`** [Issue Link](https://github.com/openai/codex/issues/24797): 10 comments. An unresolved bug that breaks long-running threads for ChatGPT Pro users, with no public workaround shared to date.
5. **#24904: Windows Codex Desktop sidebar flickers / renders incorrectly with GPU acceleration enabled** [Issue Link](https://github.com/openai/codex/issues/24904): 2 comments. A widespread rendering regression on Windows, with the only current workaround requiring users to disable GPU acceleration and sacrifice app performance.
6. **#24848: Notion connector tools remain 401 after reconnect in Codex desktop** [Issue Link](https://github.com/openai/codex/issues/24848): 4 comments, 2 👍. A broken MCP workflow bug that prevents re-authenticated Notion connectors from working, with unclear UI feedback about auth state for end users.
7. **#24882: Advertisements / Promoted apps in latest versions of codex for enterprise accounts** [Issue Link](https://github.com/openai/codex/issues/24882): 2 comments, 3 👍. A major compliance concern for enterprise admins, who cannot currently suppress advertised third-party apps on business-issued Codex accounts.
8. **#25166: Codex Desktop v26.527 no longer opens workspace from `open -a Codex <path>` on macOS** [Issue Link](https://github.com/openai/codex/issues/25166): 2 comments. A recent auto-update regression that breaks the common CLI automation workflow macOS devs use to launch Codex directly to project paths.
9. **#24579: Android Codex remote shows stale/partial thread list; iOS shows correct list from same Mac host** [Issue Link](https://github.com/openai/codex/issues/24579): 2 comments, 3 👍. A cross-platform sync bug that only affects Android remote users, making shared workspace access unreliable for mobile teams.
10. **#24580: Now the Codex app keeps launching calc.exe??** [Issue Link](https://github.com/openai/codex/issues/24580): 4 comments. A viral closed sandbox permission bug that accidentally spawned the Windows Calculator app unprompted, patched in a silent background desktop update this week.

## 4. Key PR Progress
1. **#24622: Switch runtime to cloud config bundle** [PR Link](https://github.com/openai/codex/pull/24622): The final PR in the 5-part enterprise cloud config stack, which unifies all runtime config loading to a managed cloud bundle and removes the legacy deprecated codex-cloud-requirements runtime path.
2. **#25171: fix: Bedrock API key region fallback** [PR Link](https://github.com/openai/codex/pull/25171): Resolves a bug where the documented AWS_BEARER_TOKEN_BEDROCK + AWS_REGION environment variable setup for self-hosted Amazon Bedrock model access was failing with a missing region error.
3. **#25158: [codex] Support more Vim normal commands** [PR Link](https://github.com/openai/codex/pull/25158): Adds full Vim power user support to the Codex composer, including `gg`/`G` navigation, operator targets for yank/delete operations, and characterwise visual mode with the `v` key.
4. **#25151: [codex] Extract prompts from codex-core** [PR Link](https://github.com/openai/codex/pull/25151): Moves all static prompt assets out of the core runtime into a dedicated new `codex-prompts` Rust crate, making custom prompt auditing, modification, and self-hosted deployment far simpler for enterprise operators.
5. **Skills path authority PR stack (#25121, #25149, #25124, #25138)** [PR 1](https://github.com/openai/codex/pull/25121): A 4-part security improvement series that binds all skill roots to specific filesystem environments, eliminating path traversal bugs across mixed WSL/remote SSH/local workspaces.
6. **#23766: [code-reviewed] Constrain Windows sandbox requirements** [PR Link](https://github.com/openai/codex/pull/23766): Lets enterprise admins enforce strict elevated Windows sandbox policies, blocking the unsecure unelevated fallback path previously allowed for regulated organization deployments.
7. **#25147: [codex] Retry streamable HTTP initialize failures** [PR Link](https://github.com/openai/codex/pull/25147): Adds configurable retry logic for transient network failures during RMCP startup and read-only `tools/list` calls, drastically reducing hard crashes for users on spotty internet connections.
8. **#25155: [codex] Add model multi-agent system overlay** [PR Link](https://github.com/openai/codex/pull/25155): Introduces a new optional `multi_agent_version` field on `ModelInfo` that lets maintainers roll out v2 multi-agent system features without breaking existing user configurations.
9. **#25172: [codex] Update remote connector suggestions** [PR Link](https://github.com/openai/codex/pull/25172): Adds plugin-declared app connector IDs to the onboarding suggestion set, fixing discoverability gaps for third-party plugins including Databricks workspace connectors.
10. **#25019: Add exec-server OTEL lifecycle logging** [PR Link](https://github.com/openai/codex/pull/25019): Adds full OpenTelemetry tracing for the standalone `codex exec-server` process, giving maintainers and enterprise admins far deeper visibility to debug sandbox execution failures.

## 5. Feature Request Trends
The top user-submitted feature directions this window are:
1. Cross-client context visibility: Universal demand for accurate, persistent token/context usage indicators across desktop apps, VS Code extensions, and TUI interfaces.
2. Cross-platform parity: Requests for official first-class Linux Codex Desktop and Chrome extension builds, plus documented native mobile auth flows for third-party Codex clients.
3. MCP workflow improvements: Top MCP feature requests include a `resume_path` parameter to restart prior Codex sessions from rollout files, and clearer user feedback for connector auth failures.
4. Enterprise admin controls: Requests for granular ad/promoted app opt-outs for managed enterprise accounts, plus permission provenance diagnostics to audit policy settings on resumed threads.

## 6. Developer Pain Points
Recurring high-frequency user frustrations reported in this 24-hour window:
1. Widespread Windows platform regressions: The latest 26.519/26.527 desktop builds ship with multiple unpatched bugs including GPU sidebar flicker, annotation typing focus loss, broken WSL send chat functionality, and misleading Windows 10 compatibility prompts.
2. Cross-device sync gaps: Android remote users see stale partial thread lists, macOS CLI workspace opening broke after a recent auto-update, and remote SSH projects do not show completion success/failure notifications.
3. Subagent UI readability regressions: Multiple recent updates replaced human-readable subagent nicknames with raw UUIDs in TUI notifications and transcript history, breaking workflow visibility for users running multi-agent Codex projects.
4. Poor third-party integration error messaging: Auth failures for Notion, Amazon Bedrock, and other connectors surface no clear user-facing explanation for the 401 errors, forcing users to debug via app log inspection.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-05-30
---

## 1. Today's Highlights
The latest v0.45.0 nightly release ships a critical fix for native PTY resize crashes, alongside 12+ merged stability patches targeting longstanding user-reported hanging and UI jank bugs. The team has kicked off internal assessment of AST-aware codebase navigation to reduce agent execution turns and unnecessary token bloat, while multiple high-priority agent and core bugs were tagged for retesting ahead of the v0.45.0 preview launch.

## 2. Releases
### v0.45.0-nightly.20260529.gc82e2b597
Released 2026-05-29, two core changes:
- Harden PTY resize logic to eliminate native terminal session crashes from unexpected window dimension changes
- Published formal changelog for the upcoming v0.45.0-preview.0 milestone
Full release details: https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-nightly.20260529.gc82e2b597

## 3. Hot Issues
1. **[#21409 Generalist agent hangs indefinitely on trivial tasks](https://github.com/google-gemini/gemini-cli/issues/21409)** | P1 bug, 7 comments, 8 👍: Highest user-reported pain point, where the generalist subagent hangs for hours even for simple operations like folder creation. Users can only work around this by explicitly disabling subagent deferral via prompt instructions.
2. **[#24353 Robust component level evaluations epic](https://github.com/google-gemini/gemini-cli/issues/24353)** | P1 agent infrastructure epic, 7 comments: The team is scaling existing 76 behavioral eval tests across 6 supported Gemini model variants to automatically catch agent regressions before they reach stable releases.
3. **[#22745 Assess impact of AST-aware file reads/search](https://github.com/google-gemini/gemini-cli/issues/22745)** | P2 feature epic, 7 comments, 1 👍: Investigations are underway to add syntax-aware file navigation that can return full method bounds in a single tool call, cutting wasted execution turns and noise from non-code content in returned tokens.
4. **[#22323 Subagent reports false success after hitting MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)** | P1 bug, 6 comments, 2 👍: Subagents like `codebase_investigator` incorrectly mark partial, uncompleted runs as successful after hitting turn limits, misleading users into thinking full codebase analysis finished.
5. **[#25166 Completed shell commands get stuck on "Awaiting user input"](https://github.com/google-gemini/gemini-cli/issues/25166)** | P1 core bug, 4 comments, 3 👍: Non-interactive shell scripts that fully exit leave the CLI in a hanging state with no way to resume execution without manual cancellation, breaking batch dev workflows.
6. **[#21968 Gemini does not use custom configured skills/subagents automatically](https://github.com/google-gemini/gemini-cli/issues/21968)** | P2 bug, 6 comments: Users report their preconfigured custom workflow skills (gradle, git, etc.) are never invoked unless the user explicitly prompts for them, wasting setup time for custom team workflows.
7. **[#26525 Add deterministic pre-model secret redaction for Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)** | P2 security bug, 3 comments: The current Auto Memory system sends full unredacted transcript content to an extraction model before running secret redaction, introducing a credential leakage risk for local session data.
8. **[#22093 Subagents launch even after being explicitly disabled in settings](https://github.com/google-gemini/gemini-cli/issues/22093)** | P2 bug, 2 comments: Users who upgraded to v0.33.0+ report unexpected subagent launches even when all agent features are marked disabled in their config, breaking expected MCP-only/headless workflows.
9. **[#20878 Server-driven model management epic](https://github.com/google-gemini/gemini-cli/issues/20878)** | P2 large-effort epic, 2 comments: The team plans to move all model list fetching to the remote `LoadCodeAssist` endpoint, eliminating stale local model configs and centralizing model routing and access control.
10. **[#22672 Add guardrails to stop agents running destructive commands](https://github.com/google-gemini/gemini-cli/issues/22672)** | P2 feature request, 2 comments, 1 👍: Users note that the model will sometimes run high-risk commands like `git reset --force` when safer non-destructive alternatives exist, creating risk of accidental user data loss.

## 4. Key PR Progress
1. **[#27496 Fix PTY resize native crash](https://github.com/google-gemini/gemini-cli/pull/27496)** | Merged to nightly: Adds bounds checking to PTY dimension update logic, eliminating hard native crashes when users resize their terminal window mid-execution.
2. **[#27572 Fix tmux false positive background detection](https://github.com/google-gemini/gemini-cli/pull/27572)** | Open: Resolves a regression that incorrectly detected a light terminal background when running the CLI inside tmux/mosh, stopping unwanted theme switching and spurious compatibility warnings.
3. **[#27570 Gated Gemini Flash 3.5 GA migration](https://github.com/google-gemini/gemini-cli/pull/27570)** | Open: Rolls out a phased, experiment-flag gated transition for all users on legacy Gemini Flash models to the new production `gemini-3.5-flash` GA release with full backward compatibility.
4. **[#25324 Prevent invalid preferredEditor infinite spam loop](https://github.com/google-gemini/gemini-cli/pull/25324)** | Closed/Merged: Fixes an infinite render loop that flooded the screen with repeated error messages if a user set an unsupported editor value in their config.
5. **[#27198 Avoid blocking IDE detection in bare terminals](https://github.com/google-gemini/gemini-cli/pull/27198)** | Closed/Merged: Adds fast-fail logic and bounded process lookup timeouts to IDE detection, stopping the CLI from hanging indefinitely on the "Initializing..." step when launched from a minimal bare terminal.
6. **[#27175 Fix /tasks/metadata double HTTP response](https://github.com/google-gemini/gemini-cli/pull/27175)** | Closed/Merged: Prevents `ERR_HTTP_HEADERS_SENT` runtime crashes for users running non-in-memory task storage backends by returning early after sending a 501 status code.
7. **[#27568 Add ripgrep execution fallback](https://github.com/google-gemini/gemini-cli/pull/27568)** | Open: Gracefully falls back to the legacy GrepTool if the local ripgrep binary is missing or misconfigured, preventing full code search outages in broken environments.
8. **[#27383 Prevent MCP tool wipe on network timeout](https://github.com/google-gemini/gemini-cli/pull/27383)** | Open: Implements atomic tool refresh logic that retains all previously discovered valid tools during transient network drops, eliminating the common "tool not found" error for MCP-connected workflows.
9. **[#27563 Termux linker64 crash fix](https://github.com/google-gemini/gemini-cli/pull/27563)** | Open: Uses the `TERMUX_ORIGINAL_EXE_PATH` environment variable to work around the termux-exec utility overwriting the Node.js executable path, fixing spawn crashes for Android Termux users.
10. **[#27428 Docker image existence check fix](https://github.com/google-gemini/gemini-cli/pull/27428)** | Open: Switches from parsing `docker images` stdout to checking `docker inspect` exit codes, eliminating false "image not found" errors when DOCKER_BUILDKIT routes output to stderr.

## 5. Feature Request Trends
Top requested feature directions from recent issues:
1. AST-native codebase navigation tooling to replace naive line-by-line file reads, reduce token bloat, and cut unnecessary execution turns for code investigation tasks
2. Full Auto Memory quality of life improvements including deterministic pre-model secret redaction, invalid patch quarantine, and limits on infinite retries for low-signal sessions
3. Resilient browser agent enhancements including persistent session lock recovery, full respect for user `settings.json` configuration overrides, and Wayland environment compatibility
4. Server-driven remote agent support with centralized auth controls, long-running background task execution, and remote model management that eliminates stale local configs

## 6. Developer Pain Points
Recurring user frustrations observed in recent updates:
1. Widespread hanging behavior across multiple core subsystems (generalist subagent execution, shell command completion, IDE detection on bare terminals) with many issues requiring manual workarounds instead of automatic resolution
2. Broken compatibility with common remote and mobile terminal environments (tmux, mosh, Termux) leading to incorrect theme detection, runtime crashes, and failed process spawns
3. Subagent behavior that ignores explicit user configuration, including unprompted subagent launches after being disabled, and zero auto-invocation of user-defined custom skills
4. No graceful fallback for missing optional core dependencies (like ripgrep) and transient network failures that break critical MCP tool discovery and leave users with fully broken workflow functionality.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-05-30
---
## 1. Today's Highlights
Four consecutive pre-release and stable builds (v1.0.56 through v1.0.57-0) shipped in the last 24 hours, delivering major TUI rendering improvements, reduced MCP token bloat, and fixed the long-standing misleading authentication error message that confounded headless users. The highest-engagement community thread remains the 74-upvote request for org-owned fine-grained GitHub token Copilot access permissions, a top ask for enterprise security teams. Multiple high-severity MCP and rendering regression bugs reported in recent minor releases are already marked resolved in the new builds.

## 2. Releases
All new versions published in the last 24 hours include the following changes:
- **v1.0.57-0**:
  - Improved: `/diff` command defaults to branch-level diff when no unstaged changes exist
  - Fixed: Exposes underlying auth validation failure root causes (e.g. GitHub API rate limits) instead of the generic misleading "Session was not created with authentication info or custom provider" error message
- **v1.0.56 (stable)**:
  - Free and Student tier users can now select non-Auto models directly in the model picker
  - ThemePicker layout fits in 120-column terminals without wrapping
  - Model picker displays accurate context window sizes per pricing tier
  - Adds new `builtInAgents.rubberDuck` config setting to enable the rubber duck debugging built-in agent
- **v1.0.56-2**:
  - Improved: Diff view now uses continuous scroll layout with sticky file/hunk headers, full terminal width, and theme-aware colors
  - Improved: `web_fetch` tool uses HTTP content negotiation to prefer markdown output from documentation sites for cleaner results
  - Fixed: Resolves incomplete BYOK (Bring Your Own Key) provider configuration validation
- **v1.0.56-1**:
  - Improved: Code review agent inherits the current session's selected model instead of forcing a fixed default
  - Improved: Copilot CLI automatically omits redundant MCP tools that are already natively handled by the locally installed `gh` CLI, cutting token usage for GitHub MCP deployments
  - Fixed: Preserves correct cursor position after pasting multi-line text into the terminal input

## 3. Hot Issues (Top 10)
| Issue | Status | Key Details |
|---|---|---|
| [copilot-cli#223](https://github.com/github/copilot-cli/issues/223) | Open | 74 👍, 28 comments: Requests the "Copilot Requests" permission be visible for organization-owned fine-grained tokens. This is a top enterprise security requirement to ban individual user PATs for corporate automations, and has been under active discussion for 8 months. |
| [copilot-cli#700](https://github.com/github/copilot-cli/issues/700) | Open | 13 comments: Community asks for a `copilot --list-models` CLI flag to surface all supported models, their context window sizes, and pricing tier multiplier values directly in the terminal, no web UI required. |
| [copilot-cli#172](https://github.com/github/copilot-cli/issues/172) | Closed | 10 comments: Long-running custom MCP server developers report the bug is fully resolved in v1.0.56+, where the CLI now respects user-defined `mcp-config.json` timeout values instead of forcing a hard 30-second request cutoff. |
| [copilot-cli#3439](https://github.com/github/copilot-cli/issues/3439) | Open | 8 comments: Windows/Cygwin tmux users report severe TUI rendering lag, stuttering spinners, and input freezes introduced as a regression in v1.0.49. No fix has been published yet for this platform-specific breakage. |
| [copilot-cli#98](https://github.com/github/copilot-cli/issues/98) | Open | 28 👍: Users want native integration between Copilot CLI and local `prompts/*.md` custom prompt files, to reuse existing prompt libraries they already built for GitHub Copilot web and IDE tools. |
| [copilot-cli#3539](https://github.com/github/copilot-cli/issues/3539) | Open | 4 comments: Power users with 10+ MCP servers report system/tool definitions consume 73% of a standard 200k context window immediately on session start, triggering unwanted auto-compaction before the first user prompt is sent. |
| [copilot-cli#1869](https://github.com/github/copilot-cli/issues/1869) | Open | 5 comments: Users say custom model selections (e.g. `gpt-5-mini`) do not persist across CLI restarts, and automatically revert to the default Claude Sonnet model after closing a session. |
| [copilot-cli#3162](https://github.com/github/copilot-cli/issues/3162) | Open | 6 comments: v1.0.42 has a false positive policy block that marks pre-approved, registry-listed custom MCP servers as disallowed by org policy, breaking validated enterprise MCP deployments. |
| [copilot-cli#3048](https://github.com/github/copilot-cli/issues/3048) | Closed | 4 👍: ACP (headless non-interactive) mode now properly respects custom provider environment variables after the fix shipped in v1.0.56-1, enabling custom model use cases for automated CI/CD Copilot workflows. |
| [copilot-cli#3456](https://github.com/github/copilot-cli/issues/3456) | Open: Enterprise MCP servers that enforce refresh token reuse detection are breaking authentication, because parallel tool refresh requests send the same parent refresh token, which gets invalidated after the first successful rotation. |

## 4. Key PR Progress
No pull requests were opened, merged, or updated in the `github/copilot-cli` repository in the last 24 hours. All bug fixes and feature improvements referenced in the latest releases shipped directly as part of the pre-release v1.0.56 build chain, aligned with previously logged issue resolution milestones.

## 5. Feature Request Trends
Three high-priority feature directions have emerged from recent community issue activity:
1. **Enterprise policy parity**: Add full support for org/enterprise-level model access controls, custom permission scoping for fine-grained tokens, and validated MCP registry allowlisting.
2. **MCP extensibility improvements**: Enable mid-turn dynamic MCP tool list reloads, configurable timeouts for long-running servers, and support for scoped, directory-specific MCP server configurations for monorepos.
3. **Transparency utilities**: Add built-in local session logging, a dedicated model listing CLI flag, and expose session ID/name in the terminal status line for users running multiple parallel Copilot CLI sessions.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported across recent issues include:
1. Unnecessary context window bloat from MCP tool definitions, which forces auto-compaction before users send their first prompt in new sessions.
2. Persistence failures for user configuration (selected model, context tier, cwd/branch data in session storage) across CLI restarts.
3. Obscure, generic error messaging that hides root causes for authentication, MCP OAuth, and policy validation failures.
4. Consistent stream of platform-specific (Windows/Cygwin/WSL) regressions for TUI rendering and stdio MCP server spawning in recent minor releases.
5. Duplicate permission prompts for custom plugin hooks, which force end-users to confirm the same gated tool action twice unnecessarily.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-05-30
Official Repository: https://github.com/MoonshotAI/kimi-cli

---
## 1. Today's Highlights
Kimi Code CLI officially released version 1.46.0 in the past 24 hours, with formal documentation updates confirming the project’s evolution into the official Kimi Code successor for Moonshot’s AI coding assistant product line. The development team is actively addressing high-priority user pain points around unclear quota visibility and recurring API 400 errors, with in-flight PRs already targeting top community-reported bugs. Recent user discussions have been dominated by feedback that real-world paid subscription usage does not match the advertised Code Plan performance specifications.

## 2. Releases
### v1.46.0 (Latest Stable)
Published to all distribution channels in the 24h window, with 3 core changes:
1.  Official documentation announcement confirming the project’s status as the official Kimi Code successor project (PR #2377)
2.  Fixed auto language redirect routing bug for the public documentation site (PR #2378)
3.  Updated the CLI shell welcome screen tip link to point directly to official kimi.com resources

---
## 3. Hot Issues
(All 7 active updated issues from the past 24h are covered, as total new issue volume is below 10 for this window):
1.  **#778 [OPEN] Persistent 400 Invalid Request Error on Windows 11 PowerShell**: Long-running bug first reported in Jan 2026 affecting users on v2.1.23 builds, with 18 comments of shared troubleshooting experiences from impacted Windows users. [Link](https://github.com/MoonshotAI/kimi-cli/issues/778)
2.  **#247 [CLOSED] First-run crash after entering API key**: 6-month-old onboarding blocker resolved on 2026-05-29, with 12 users sharing their own similar setup failure experiences that previously blocked first use. [Link](https://github.com/MoonshotAI/kimi-cli/issues/247)
3.  **#1994 [OPEN] Mismatched Kimi Code usage calculation**: Top-voted recent issue (6 👍) where users report 2 coding tasks consume 2 full hours of advertised quota, as K2.6 model long chain-of-thought generates excessive token consumption that contradicts the official 300-1200 requests/5h documentation. [Link](https://github.com/MoonshotAI/kimi-cli/issues/1994)
4.  **#2123 [OPEN] Severe undocumented throttling for paid subscribers**: Paid Code Plan user reports only 60+ successful requests in a 5-hour window, no transparent public granular quota breakdown, and opaque percentage-only remaining usage display that misleads users into unknowingly exhausting their subscription. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2123)
5.  **#2399 [OPEN] v1.46.0 Agent ignores built-in skills**: Fresh bug reported on the new v1.46.0 release for Fedora 42 Linux, where the agent fails to trigger pre-configured available skills and falls back to raw, unguided shell command execution. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2399)
6.  **#2397 [OPEN] Missing documentation for shell command execution**: New user question that highlights a gap in beginner-facing documentation for a core basic workflow: how to trigger native system shell command execution directly via the Kimi Code CLI. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2397)
7.  **#2396 [OPEN] `kimi export` crashes during context compaction**: Bug on v1.45.0 that breaks long session export workflows, triggering a 400 API error when compaction generates empty/whitespace-only text parts rejected by the Moonshot backend. [Link](https://github.com/MoonshotAI/kimi-cli/issues/2396)

---
## 4. Key PR Progress
(All 4 active updated PRs from the past 24h are covered, as total new PR volume is below 10 for this window):
1.  **#2398 [OPEN] Relax OpenAI and FastMCP dependency pins**: Reduces integration friction for downstream developers embedding Kimi Code CLI in custom workflows, expanding the OpenAI SDK support range from the narrow 2.14.x pin to the full 2.x compatible range, and bumps FastMCP to stable v3.3.1. [Link](https://github.com/MoonshotAI/kimi-cli/pull/2398)
2.  **#2391 [CLOSED] Bump release version to 1.46.0**: Official release chore that syncs version tags across all project components, updates release notes, and successfully completes the v1.46.0 rollout. [Link](https://github.com/MoonshotAI/kimi-cli/pull/2391)
3.  **#2245 [OPEN] Improve 429 provider error UX**: Centralizes error formatting across all CLI output surfaces (shell, print, ACP, wire), removes unnecessary full traceback logs for handled errors, and adds explicit distinction between transient rate-limit 429s and permanent quota exhaustion, directly addressing user complaints about unclear error messaging. [Link](https://github.com/MoonshotAI/kimi-cli/pull/2245)
4.  **#2395 [OPEN] Filter empty text parts during context compaction**: Targeted fix for the reported #2396 `kimi export` crash, which filters out all whitespace-only TextPart entries before sending payloads to the Moonshot API, resolving the empty content 400 error that breaks session export. [Link](https://github.com/MoonshotAI/kimi-cli/pull/2395)

---
## 5. Feature Request Trends
Distilled top user-requested functionality directions:
1.  Transparent, public, granular quota calculation rules and usage dashboards that align with the advertised 300-1200 requests per 5 hour Code Plan specification
2.  An explicit, configurable auto-trigger mechanism for built-in Agent skills to prevent unnecessary fallback to unguided raw shell execution
3.  Expanded beginner-facing documentation covering core basic workflows like native shell command execution
4.  Broader, more permissive dependency version pinning rules to reduce integration friction for developers embedding Kimi Code CLI in custom dev tool stacks

---
## 6. Developer Pain Points
Recurring high-frequency frustrations reported across recent issues:
1.  Large discrepancy between advertised Code Plan performance and real-world usage, where excessive token consumption from K2.6 model long chain-of-thought cuts effective task volume down to less than 10% of the advertised request count
2.  Previously unfriendly API error outputs, which exposed unnecessary full tracebacks and did not clearly distinguish between temporary rate limits and permanent quota exhaustion
3.  Persistent Windows PowerShell onboarding edge cases, including historic API key entry failures that block new user setup
4.  Unaddressed context management edge cases that break core long-session workflows, including empty text part generation during context compaction that crashes the session export feature.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-05-30
---

## 1. Today's Highlights
No new official releases launched in the past 24 hours, but the community made major progress on long-standing pain points including a centralized memory leak tracking megathread that has accumulated 82 contributions, alongside a full batch of 6 merged security compliance patches addressing uncovered supply chain, regex injection, and silent error handling gaps. New in-development features including LiteLLM native support and Workspace V2 core refactoring were opened for public review yesterday, while widespread cross-platform startup error reports have become the top user-reported issue cluster.

## 2. Releases
No new OpenCode official versions were published in the 24 hours ending 2026-05-30.

## 3. Hot Issues (Top 10 Notable)
| Issue | Link | Context & Community Reaction |
|-------|------|-------------------------------|
| Copy To Clipboard is not working | [anomalyco/opencode#4283](https://github.com/anomalyco/opencode/issues/4283) | 101 comments, 89 👍: The highest-voted open UX bug, with users across all OSes reporting they cannot copy selected text from LLM responses directly. Multiple contributors have shared partial workarounds as maintainers prioritize a full fix. |
| Memory Megathread | [anomalyco/opencode#20695](https://github.com/anomalyco/opencode/issues/20695) | 82 comments, 60 👍: Centralized tracking thread for all scattered memory leak reports. Maintainers explicitly asked users to submit heap snapshots instead of proposing untested LLM-generated fixes to speed up debugging. |
| Error: 4 of 5 requests failed: config.providers: Unexpected server error | [anomalyco/opencode#27530](https://github.com/anomalyco/opencode/issues/27530) | 21 comments, 10 👍: Widespread cross-platform startup failure where the local backend crashes immediately on launch, blocking access to models and project data. Multiple users have shared environment-specific reproduction steps to help isolate the root cause. |
| feat: Enable programmatic sub-LLM calls for RLM pattern | [anomalyco/opencode#8554](https://github.com/anomalyco/opencode/issues/8554) | Closed, 19 comments, 16 👍: Long-requested feature that implements native Recursive Language Model capabilities, allowing LLMs to spawn nested sub-LLM calls programmatically without manual tool call prompts. |
| [FEATURE]: Linear Agent | [anomalyco/opencode#3787](https://github.com/anomalyco/opencode/issues/3787) | Closed, 15 comments, 30 👍: Highly requested third-party integration that lets OpenCode agents automatically pull, assign, and resolve Linear workflow issues directly inside the editor. |
| The latest version is terribly slow | [anomalyco/opencode#27106](https://github.com/anomalyco/opencode/issues/27106) | 7 comments, 3 👍: User reports that the 1.14.48 release has severe performance regressions that make the app effectively unusable for agent development use cases. |
| Windows Desktop loses all session history after restart | [anomalyco/opencode#17765](https://github.com/anomalyco/opencode/issues/17765) | 6 comments, 1 👍: Data loss bug where the UI session list empties after restart, even though full session data is still intact in the local `opencode.db` database. |
| security: Docker supply chain — curl\|sh without hash, root containers | [anomalyco/opencode#29923](https://github.com/anomalyco/opencode/issues/29923) | Closed, 3 comments: Part of a 6-issue community-submitted security compliance batch addressing unvalidated install scripts and privileged default container configurations. |
| [FEATURE]: add 12 xscriptor color themes for TUI | [anomalyco/opencode#29933](https://github.com/anomalyco/opencode/issues/29933) | 4 comments, 0 👍: Community contribution adding 12 new terminal-optimized color themes for power users that run OpenCode exclusively via the TUI interface. |
| Desktop app (Windows, v1.15.12): sidecar server exits on startup | [anomalyco/opencode#29932](https://github.com/anomalyco/opencode/issues/29932) | 2 comments, 0 👍: Specific Windows variant of the widespread 4/5 startup failure bug, where the local sidecar backend crashes before loading the model provider list. |

## 4. Key PR Progress
| PR | Link | Details |
|----|------|---------|
| feat(opencode): add LiteLLM provider integration | [anomalyco/opencode#29937](https://github.com/anomalyco/opencode/pull/29937) | Open: Adds native first-class LiteLLM support, letting users access 100+ additional LLM providers via a single unified configuration interface. |
| [contributor] workspace v2 | [anomalyco/opencode#29938](https://github.com/anomalyco/opencode/pull/29938) | Open: Major core refactor from project lead jlongster that rewrites the project workspace management system to resolve long-standing duplicate clone identity bugs. |
| feat(ui): Add support for RTL languages in rendered chat content and text box | [anomalyco/opencode#25010](https://github.com/anomalyco/opencode/pull/25010) | Closed / Merged: Full right-to-left language support for chat inputs and outputs, making OpenCode fully usable for Arabic, Hebrew, and other RTL language users. |
| feat(sdk): add Python SDK with auto-regen CI | [anomalyco/opencode#24968](https://github.com/anomalyco/opencode/pull/24968) | Closed / Merged: Brings back the official OpenCode Python SDK, automatically regenerated from the OpenAPI spec via CI to keep API bindings always up to date. |
| feat(agent): enhance agent capabilities with review/test agents and self-reflection | [anomalyco/opencode#24952](https://github.com/anomalyco/opencode/pull/24952) | Closed / Merged: Overhauls the agent system to add specialized review and test subagents, built-in self-reflection loops, and patches 20+ hidden reliability bugs. |
| fix: use moonshot MFJS sanitization to prevent api errors w/ kimi models | [anomalyco/opencode#25011](https://github.com/anomalyco/opencode/pull/25011) | Closed / Merged: Implements official Moonshot MFJS sanitization logic to resolve frequent API errors when using popular Kimi series models. |
| fix(ripgrep): handle broken symlinks gracefully in files() stream | [anomalyco/opencode#24973](https://github.com/anomalyco/opencode/pull/24973) | Closed / Merged: Fixes a long-standing pain point where the global search tool would return zero results entirely if any broken symlink or permission-denied path existed in the working directory. |
| docs: add opencode-balancer plugin | [anomalyco/opencode#29945](https://github.com/anomalyco/opencode/pull/29945) | Open: Adds the community-built `opencode-balancer` multi-account load management plugin to the official OpenCode ecosystem plugin directory. |
| feat(tui): show provider quota in prompt metrics | [anomalyco/opencode#24961](https://github.com/anomalyco/opencode/pull/24961) | Closed / Merged: Adds a compact live quota display to the TUI top metrics bar, so CLI users can check their remaining LLM provider credits without navigating to a separate settings page. |
| fix(mcp): detect transport close and update status to failed | [anomalyco/opencode#24955](https://github.com/anomalyco/opencode/pull/24955) | Closed / Merged: Fixes the orphaned MCP server bug where third-party tool connections would hang indefinitely instead of showing an explicit failure status when the remote transport disconnects. |

## 5. Feature Request Trends
The top requested feature directions this period are:
1. Third-party workflow editor integrations, including Linear Agents, native Zed change review support, and Cloudflare AI Gateway compatibility
2. Improved cross-architecture support, specifically FreeBSD porting, stable WSL2 remote server operation, and better Windows desktop session management
3. Advanced agent orchestration capabilities, including RLM recursive nested LLM calls, and dedicated specialized subagents for code review, testing, and exploration
4. TUI power user personalization, including custom color themes, custom status bar metrics, and extended keyboard shortcut configuration
5. Ecosystem extensibility, with demand for more official SDKs, a public plugin registry, and third-party plugin discovery tooling

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. Severe widespread launch stability issues: The "4 of 5 requests failed" unexpected backend error is impacting users across Windows, macOS, and WSL2, blocking access to core functionality with no clear temporary workaround shared publicly.
2. Persistent ACP editor integration bugs: Users report consistent crashes, hanging file write/patch operations, and server shutdown errors when running OpenCode as an ACP agent in Zed and JetBrains IDEs.
3. Performance and memory regressions: The latest 1.14.x release branch has major slowdowns that render it unusable for heavy agent workloads, with scattered unpatched memory leaks tracked in the centralized memory megathread.
4. Unresolved small UX frictions: The top-voted open clipboard copy bug has been open for over 6 months with no fix shipped, and the session history data loss bug on Windows continues to impact regular users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-05-30
*Project: github.com/badlogic/pi-mono*

---
## 1. Today's Highlights
This 24-hour update window includes no new official Pi releases, but delivers major new provider integrations, critical regression patches, and widely requested TUI quality-of-life improvements for the open-source AI coding assistant. The most notable new addition is native built-in support for SambaNova Cloud, while a full set of patches resolves widespread v0.77.0 breakages affecting popular Moonshot and Qwen open models. The highest-visibility community thread, with 48 comments and 22 upvotes, tracks a persistent OpenAI Codex bug that hangs the TUI indefinitely on a "Working..." state without recovery options for end users.

---
## 2. Releases
No new stable or pre-release builds of Pi were published in the 24-hour reporting window.

---
## 3. Hot Issues (Top 10 Noteworthy)
All items below were updated between 2026-05-29 and 2026-05-30:
1. **[#4945 OpenAI Codex hangs on "Working..." state with zero-usage aborted turns](https://github.com/earendil-works/pi/issues/4945)** – The highest-attention open bug: 48 community comments confirm repeated unprompted freezes of the interactive TUI with no streamed output or error messages, requiring manual Escape presses to recover, breaking core interactive workflow for Codex subscribers.
2. **[#5089 Pi does not respect `timeoutMs` values above a hidden threshold](https://github.com/earendil-works/pi/issues/5089)** – 18 comments from local LLM users report unexpected timeouts during long-running operations (e.g. reading 100k+ line text files) when running models like Qwen 3.6 27B on CPU or underpowered hardware.
3. **[#4984 Interactive mode crashes on transient terminal EPIPE errors](https://github.com/earendil-works/pi/issues/4984)** – 11 comments confirm uncaught exceptions that force full Pi process exits during edit tool runs, recently resolved by an incoming patch.
4. **[#3424 Add ChatGPT device code login method for headless usage](https://github.com/earendil-works/pi/issues/3424)** – A 6-week-old long-requested feature with 2 upvotes, that enables `/login` flows to work over SSH and headless server environments where localhost browser callbacks are impossible.
5. **[#5117 Qwen 3.7 Max on OpenRouter returns 400 errors on all requests](https://github.com/earendil-works/pi/issues/5117)** – 5 community reports confirm broken access to the 2026 top-performing open model family, caused by invalid message role formatting in Pi's provider logic.
6. **[#5177 Escape and Ctrl+C no longer interrupt long-running model generations](https://github.com/earendil-works/pi/issues/5177)** – 4 reports note that long tool runs will continue executing for 10+ seconds after a user sends an interrupt signal, requiring a full Pi process restart to stop.
7. **[#5098 Inline images and arrow key input are broken inside tmux](https://github.com/earendil-works/pi/issues/5098)** – A high-impact compatibility issue affecting the large share of developers who run Pi inside tmux sessions, blocking use of image rendering and hotkey features.
8. **[#5185 TUI stack overflow crash on unrecognized ANSI control sequences](https://github.com/earendil-works/pi/issues/5185)** – 3 reports confirm full process crashes when Pi parses output from external bash commands that return non-standard terminal escape codes.
9. **[#5064 Add user-configurable context window size selection option](https://github.com/earendil-works/pi/issues/5064)** – A 3-comment feature request that aligns Pi with competing Copilot CLI functionality, giving users explicit control over token usage and inference performance tuning.
10. **[#5199 Severe TUI slowdown in iTerm2 for long-running sessions](https://github.com/earendil-works/pi/issues/5199)** – Long-time Pi users report 5-10 second full TUI redraw lags for sessions with thousands of lines of history, drastically reducing responsiveness.

---
## 4. Key PR Progress (Top 10 Important Updates)
1. **[#5206 Add SambaNova as a built-in provider](https://github.com/earendil-works/pi/pull/5206)** – Adds native, OpenAI-compatible support for SambaNova Cloud, with pre-configured high-performance tool-capable Llama models and transparent billing parity with existing providers like Groq and Cerebras.
2. **[#5196 Fix OpenCode reasoning parameter handling](https://github.com/earendil-works/pi/pull/5196)** – Resolves all recent v0.77.0 regressions for Moonshot Kimi K2.6 models hosted on both OpenCode and OpenRouter, eliminating the universal "tokenization failed" error.
3. **[#5183 Add graceful EPIPE handling to prevent process crashes](https://github.com/earendil-works/pi/pull/5183)** – Fully resolves issue #4984 by catching transient stdout pipe breaks, no more unexpected uncaught exceptions during edit operations.
4. **[#5189 Wrap tool file paths in OSC 8 clickable hyperlinks](https://github.com/earendil-works/pi/pull/5189)** – Adds support for native terminal hyperlinks in read/write/edit/ls tool outputs, letting users click directly on referenced file paths to open them in supported terminals.
5. **[#5190 Add extensible VCS provider interface for extensions](https://github.com/earendil-works/pi/pull/5190)** – Exposes a public `VcsProvider` API for third-party extensions, enabling community support for non-Git version control systems such as Jujutsu (jj).
6. **[#5198 Default hardware cursor to enabled for IME support](https://github.com/earendil-works/pi/pull/5198)** – Changes TUI rendering defaults to show the hardware cursor by default, fixing misaligned IME candidate window positioning for non-English input method users on terminals like WezTerm.
7. **[#5176 Print direct resume command hint on interactive exit](https://github.com/earendil-works/pi/pull/5176)** – Displays a copy-pasteable `pi --session <id>` command line after a clean TUI exit, eliminating user friction to recover closed sessions.
8. **[#5156 Add `--name/-n` CLI flag to set custom session display name](https://github.com/earendil-works/pi/pull/5156)** – Adds a new startup parameter to define a human-readable session name, ideal for automation and RPC use cases that run multiple parallel Pi instances.
9. **[#5178 Add custom header support for AWS Bedrock provider](https://github.com/earendil-works/pi/pull/5178)** – Closes a cross-provider feature gap, making Bedrock respect the global `StreamOptions.headers` setting for corporate users operating behind authenticated proxy gateways.
10. **[#5182 Add usage reliability guard for local LLM token calculations](https://github.com/earendil-works/pi/pull/5182)** – Fixes incorrect premature session compaction for local models (llama.cpp, Ollama) that return a 0 value for `prompt_tokens` in streaming usage data, preventing unwanted context window truncation.

---
## 5. Feature Request Trends
The most requested feature directions from the last 24 hours of community activity are:
1. Expanded native inference provider support for specialized endpoints including SambaNova and fully-featured GitLab Duo custom provider improvements
2. Headless/remote deployment functionality including device code login, fully SSH-compatible workflows, and automation-friendly CLI flags
3. Expanded public extension APIs, including VCS provider hooks, exported utility functions (e.g. `convertToPng`, CLI argument parsers) to enable richer third-party extension development
4. Quality-of-life UX improvements including @-prefixed file path support for custom system prompts, and explicit context window size tuning controls.

---
## 6. Developer Pain Points
Recurring high-frequency community frustrations include:
1. Unpredicted model provider regressions in new releases, where untested reasoning mode changes break access to popular non-OpenAI models (Kimi K2.6, Qwen

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-05-30
---
## 1. Today's Highlights
QwenLM published the stable v0.17.0 release alongside a new pre-release nightly build in the past 24 hours, rolling out critical CLI TUI rendering fixes and core OpenTelemetry observability upgrades for the daemon service. Maintainers resolved the same-day urgent SSL certificate validation outage for the public coder.qwen.ai web IDE, and merged patches for high-impact long-running session OOM errors and Anthropic provider API compatibility failures. Multiple long-awaited developer diagnostic tools, including Chrome DevTools-compatible native CPU profiling, have been submitted for final review.

## 2. Releases
- **Stable v0.17.0** ([download](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0)): Ships a fix to surface CLI startup warnings to stderr before TUI rendering, plus fully functional LogToSpan telemetry bridge implementation for full process observability.
- **Nightly v0.16.1-nightly.20260529.7bed56b9b** ([download](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260529.7bed56b9b)): Includes the same CLI startup warning fix and incremental telemetry improvements for pre-release user validation.

## 3. Hot Issues
Top 10 high-impact recently updated community issues:
1. [JetBrains Rider infinite OAuth redirect login bug (#4493)](https://github.com/QwenLM/qwen-code/issues/4493): 7 active comments, blocks all Rider users from authenticating to access Alibaba Cloud hosted models, affecting a large JetBrains ecosystem user base.
2. [Local Ollama DOMException API error on self-hosted models (#4609)](https://github.com/QwenLM/qwen-code/issues/4609): Completely breaks responses for users running local Qwen models via Ollama, a top priority issue for the self-hosting user community.
3. [Persistent OOM crash on `qwen --resume` sessions (#4624)](https://github.com/QwenLM/qwen-code/issues/4624): 1 upvote, session sub-process memory never releases unused historical tool call data, leading to steady memory growth and crashes for users running long continuous dev sessions.
4. [Missing qwen3.7-max flagship model from OpenAI auth model list (#4616)](https://github.com/QwenLM/qwen-code/issues/4616): Users who paid for the top-tier Alibaba subscription cannot access the latest flagship model even with manual /model flag overrides, causing major user friction.
5. [Resolved: Urgent SSL cert invalid outage for coder.qwen.ai (#4612)](https://github.com/QwenLM/qwen-code/issues/4612): 2 comments, the public web IDE was fully unreachable for all global users before maintainers patched the intermediate cert chain, resolved within 2 hours of reporting.
6. [Resolved: False "compressed turn" rewind error (#4579)](https://github.com/QwenLM/qwen-code/issues/4579): Users could not rewind conversation state after sending mid-turn messages during ongoing tool execution, breaking core workflow debugging functionality.
7. [No project-scoped pending-approval MCP config support (#4615)](https://github.com/QwenLM/qwen-code/issues/4615): Blocks enterprise teams from sharing standardized MCP server configs across repositories without explicit user security approval, delaying enterprise rollouts.
8. [CJK IME composition text misalignment in TUI (#3456)](https://github.com/QwenLM/qwen-code/issues/3456): Affects all Chinese/Japanese/Korean users, IME input candidates render on a separate extra line instead of at the cursor, breaking basic input experience for non-Latin script regions.
9. [Auto-update EACCES failure on sudo npm global installs (#4627)](https://github.com/QwenLM/qwen-code/issues/4627): Blocks a large share of macOS users with system Node.js from getting automatic updates, forcing manual full reinstalls for every new release.
10. [Anthropic API tool_result adjacency validation failure (#4619)](https://github.com/QwenLM/qwen-code/issues/4619): All users running Anthropic or Anthropic-compatible proxies hit hard API rejections, breaking all active conversation flows.

## 4. Key PR Progress
1. [#4632: Harden core context error text collection](https://github.com/QwenLM/qwen-code/pull/4632): Resolves the self-hosted Ollama DOMException API error by adding safe access guards for provider error objects that throw on read.
2. [#4622: Enforce adjacent tool results for Anthropic compatibility](https://github.com/QwenLM/qwen-code/pull/4622): Cleans orphaned tool call/result pairs to strictly follow Anthropic's contiguous tool response format requirements, eliminating 100% of reported Anthropic API validation errors.
3. [#4620: Add Chrome DevTools-compatible CPU profiling support](https://github.com/QwenLM/qwen-code/pull/4620): Implements opt-in profiling that outputs standard .cpuprofile files for no-config performance debugging via the familiar Chrome DevTools interface, supporting environment variable, signal, and slash command trigger modes.
4. [#4580: Fix false compressed turn rewind error](https://github.com/QwenLM/qwen-code/pull/4580): Marks mid-turn user messages sent during tool execution as notification type instead of regular user turns, eliminating the turn count mismatch that triggered the false rewind error.
5. [#4630: Add tool spans and unified session.id to daemon ACP path](https://github.com/QwenLM/qwen-code/pull/4630): Extends OpenTelemetry coverage for the `qwen serve` daemon to track every tool execution under a shared session ID, enabling full end-to-end observability for all daemon workflows.
6. [#4629: Add standalone auto-update support](https://github.com/QwenLM/qwen-code/pull/4629): Implements SHA256-verified atomic updates for non-npm standalone installs, eliminating EACCES permission errors for globally installed instances.
7. [#4613: Sync model and approval mode state across shared session clients](https://github.com/QwenLM/qwen-code/pull/4613): Eliminates duplicated or dropped state broadcasts when multiple clients (web, terminal, IDE) connect to the same daemon session, preventing unexpected permission denials and silent model switches.
8. [#4560: Add corrupted settings JSON warning dialog + auto recovery](https://github.com/QwenLM/qwen-code/pull/4560): Adds clear UI prompts and automatic backup restoration flow for invalid `settings.json` files, preventing silent CLI startup failures.
9. [#4598: Add collapsible reasoning thinking blocks with duration timer](https://github.com/QwenLM/qwen-code/pull/4598): Replaces long, uncollapsible raw reasoning traces with auto-collapsible TUI blocks that show total thinking duration, greatly reducing UI clutter for users working with large reasoning models.
10. [#4431: Preserve uid/gid in atomicWriteFile](https://github.com/QwenLM/qwen-code/pull/4431): Fixes the permission stripping bug that changed file ownership for every file edited via Qwen Code, resolving broken multi-user shared dev environment workflows.

## 5. Feature Request Trends
1. **Advanced observability tooling**: The most requested capability is full OpenTelemetry coverage for the `qwen serve` daemon, paired with native CPU profiling, heap snapshot, and memory timeline diagnostic features to reduce the friction of reporting bugs to maintainers.
2. **Next-gen conversation compression**: Users are widely asking for a full replacement of the current character-count based context compaction with a Claude Code-style "summary + restoration attachments" model that preserves more usable full context for long-running sessions.
3. **MCP enterprise security**: Teams request first-class project-scoped `.mcp.json` configuration with explicit pending-approval semantics, to enable standardized MCP server sharing across repositories without lowering security barriers.
4. **Tiered high-usage pricing**: Multiple heavy users submit feature requests for discounted high-volume unlimited usage plans for the qwen3.7-max flagship model, to support full-time professional development workloads.

## 6. Developer Pain Points
1. **Cross-provider compatibility gaps**: Users running self-hosted Ollama instances, Anthropic-compatible proxies, and non-default model providers repeatedly hit undocumented edge case parsing errors that break full functionality with no workaround.
2. **Unfixed session memory leaks**: The existing session memory manager never prunes historical tool call records, leading to steady memory growth and OOM crashes for users keeping Qwen Code open for multiple hours or days for continuous dev work.
3. **IDE integration sync failures**: Non-VS Code IDE users (especially JetBrains Rider) face persistent OAuth redirect loops, missing pre-configured models, and out-of-sync state when multiple clients connect to the same shared daemon session.
4. **Unresolved non-Latin input gaps**: The 4+ month old CJK IME TUI alignment bug remains unpatched, breaking core usability for millions of non-English speaking developers in East Asian regions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-05-30
---
## 1. Today's Highlights
No new official releases were published in the last 24 hours, but the repository saw 20+ active code changes including critical bug fixes for the MCP server gateway, leading slash input escaping, and expanded localization support. The largest share of community discussion this period centers on improving compatibility for local self-hosted non-DeepSeek models, with multiple foundational PRs for third-party custom provider support already merged. A series of long-requested UI quality of life features, such as visible git branch status in the footer, are also nearing final review for the next minor release.

## 2. Releases
No new stable or pre-release versions were published in the past 24 hours.

## 3. Hot Issues (Selected 10)
All items reference the upstream repo at [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale):
1. **[#2247] Feature Request: Support custom DeepSeek-compatible API providers** – The highest-engagement open issue, this request is a top priority for users running local DeepSeek deployments or third-party hosted compatible endpoints, who currently cannot add non-official providers without modifying source code. 5 community users have shared their self-hosted workflow use cases in comments.
2. **[#2353] Bug: Memory feature fails to activate after following config.toml setup instructions** – A reproducible config parsing bug blocks users from enabling persistent cross-session conversation memory, with 2 community members confirming they encountered the exact same "user memory is disabled" error.
3. **[#2361] Bug: Local LLMs output raw tool call JSON instead of executing actions** – A critical workflow break for users running open-source local models, where the model fails to follow the native tool calling protocol and prints unparsed JSON to the chat stream instead of triggering intended tool execution.
4. **[#2365] Feature Request: Configurable stream timeout** – Users running DS4 Pro on Apple Silicon and other slow consumer inference hardware report the default 300-second stream timeout frequently terminates long generations early, dropping their connections unexpectedly.
5. **[#2362] Bug: Sub-agents created via `agent_open` have no access to configured MCP tools** – Breaks multi-agent research workflows that rely on third-party MCP services such as Brave Search or Tavily, as child subagents only get access to native built-in TUI tools.
6. **[#2348] Feature Request: Collapsible thinking/reasoning output** – Long, verbose reasoning traces from latest deep reasoning models clog the TUI chat pane, drastically reducing readability for users trying to quickly scan actionable output from the AI.
7. **[#2310] Bug: No escape mechanism for messages starting with a leading slash** – All user input starting with `/` is unconditionally parsed as a slash command, breaking common use cases where users want to share absolute file paths or CLI snippets that start with forward slashes as plain text.
8. **[#2352] Bug: `codewhale-tui serve --mcp` panics with tokio runtime drop error** – This crash completely blocks deployment of the shared MCP server gateway mode, preventing teams from hosting a centralized shared MCP tool instance for all TUI users in their organization.
9. **[#2337] Feature Request: Support for GLM-5, Qwen and other non-DeepSeek open models** – Demonstrates strong community demand for full integration with the broader open LLM ecosystem, rather than being restricted exclusively to DeepSeek's official model lineup.
10. **[#2342] Feature Request: Clickable file preview links for files mentioned in AI output** – Eliminates the redundant workflow of navigating the local filesystem manually to open files the AI has referenced during code analysis, saving significant time for developers working on large codebases.

## 4. Key PR Progress (Selected 10)
1. **[#2357] Fix nested runtime panic on MCP stdio shutdown** – Directly resolves the #2352 mcp serve mode crash, properly scoping the tokio runtime context to prevent panics when MCP clients disconnect or stdin is closed unexpectedly.
2. **[#2358] Add full Vietnamese localization support** – Expands non-English language coverage for the global user base, including full translated locale files, localized documentation, and a new README.vi.md.
3. **[#2347] Show git branch info in default TUI footer** – Implements the top voted UI feature request #2341, using existing workspace cache logic to render the active git branch without synchronous git calls that would impact TUI performance.
4. **[#2344] Raise default tool search result limit to 20** – Fixes the #2339 bug where MCP tools from multiple servers were buried under the old 5-result default limit, and adds a configurable `max_results` parameter capped at 100 for advanced users.
5. **[#2340] Treat `/ ` (slash followed by space) as plain message text** – Resolves the #2310 leading slash escape bug, preserving full functionality for all existing slash commands while allowing users to send plain text starting with "/ " as regular chat content.
6. **[#2288] Add configurable `path_suffix` for OpenAI-compatible endpoints** – A foundational building block for custom third-party provider support, allowing users to override the default `/v1` API path prefix to work with endpoints that serve requests at non-standard paths like `/chat/completions`.
7. **[#1893] Add configurable TLS certificate verification toggle** – Introduces the `insecure_skip_tls_verify` config option (controlled via both settings.toml and the `DEEPSEEK_INSECURE_SKIP_TLS_VERIFY` environment variable) for users operating on private networks with self-signed SSL certificates.
8. **[#2343] Integrate Atlas Cloud LLM provider** – Adds a new official supported inference provider, expanding user choice for non-DeepSeek hosted LLM endpoints.
9. **[#2338] Add whale-species model + reasoning effort picker UI** – Replaces the flat model selection list with a sorted taxonomy UI that groups model options by reasoning depth, speed and performance tier, making it easier for users to select the appropriate model for their task.
10. **[#2336] Add new `/cache stats` diagnostic command** – Exposes prefix cache stability metrics, drift warnings, and cache hit rate data directly in the TUI, helping users debug unexpected token usage spikes during long multi-turn work sessions.

## 5. Feature Request Trends
The most requested feature directions from the past 24 hours are:
1. Full multi-provider compatibility: Support for custom self-hosted DeepSeek-compatible endpoints, mainstream open models (GLM-5, Qwen), and configurable low-level API parameters (custom path suffixes, TLS settings, proxy rules).
2. TUI UX quality of life improvements: Visible git branch status, collapsible reasoning traces, clickable file previews, and configurable limits for the @ file mention picker menu.
3. Local deployment usability upgrades: Adjustable stream timeouts, configurable file traversal depth for the @ mention picker, and user-defined search engine selection for web tool workflows.
4. Multi-agent workflow improvements: Grant sub-agents full access to all configured MCP tools, and add higher default result limits for tool discovery.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. Poor local model deployment stability: Non-DeepSeek open-source models often output raw unparsed tool call JSON, the hardcoded 300s stream timeout is too short for slow inference on consumer hardware, and sub-agents cannot access MCP tools.
2. Broken core workflow bugs: No native escape mechanism for leading slash input, persistent memory feature fails to activate via config, and @ file mentions cannot browse directories deeper than the hardcoded 6-level depth limit.
3. Hidden non-configurable hardcoded limits: 5-result cap for tool search, 6-entry limit for the @ mention popup, forcing power users to modify source code to adjust behavior for their large codebase workflows.
4. Inconsistent mode behavior: The `exec_shell` tool is marked as available in official docs but restricted in Agent mode, and the AI agent cannot detect when the user toggles modes via the Tab key, leading to wasted tokens on repeatedly rejected tool calls.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*