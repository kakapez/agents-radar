# AI CLI Tools Community Digest 2026-07-28

> Generated: 2026-07-27 23:01 UTC | Tools covered: 9

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

# 2026-07-28 AI Developer CLI Tools Cross-Tool Comparison Report
*For technical decision-makers and development teams*

---

## 1. Ecosystem Overview
The global AI CLI tooling landscape has matured significantly post mid-2026 1.0 stable release wave, with the 8 tracked active projects shifting priority from raw new feature addition to reliability, enterprise compliance, and cross-provider compatibility for power users. Unprecedented alignment around the open Model Context Protocol (MCP) has eliminated redundant custom tooling layer development across nearly all major repositories, reducing integration friction for shared third-party plugins and extensions. Regional optimization for non-Western markets, including non-UTF-8 Windows locales and local Chinese LLM provider compatibility, is now a top high-investment priority, serving previously underserved self-hosted and air-gapped enterprise user segments. Overall ecosystem activity shows a clear focus on solving production-grade workflow pain points rather than chasing unproven experimental agent capabilities.

## 2. Activity Comparison
All counts below exclude low-effort typo fix PRs, spam bot submissions, and untriaged low-impact issues to reflect high-signal community and maintainer activity over the 24-hour reporting window:
| Tool Name | Total Updated High-Issues | Total Active/Non-Spam PRs | Releases Shipped in Window |
|---|---|---|---|
| Claude Code | 10 | 7 | 0 new official releases |
| OpenAI Codex | 10 | 10 | 2 Rust CLI alpha pre-releases |
| Gemini CLI | 10 | 10 | 1 official nightly build |
| GitHub Copilot CLI | 10 | 12 | 1 stable production (v1.0.76-0) release |
| Kimi Code CLI | 4 | 4 | 0 new official releases |
| OpenCode | 10 | 10 | 2 consecutive production stable releases (v1.18.6, v1.18.7) |
| Pi | 10 | 10 | 0 new official releases |
| DeepSeek TUI | 4 | 10 | 0 new official releases (v0.9.2 release candidate in final validation) |

## 3. Shared Feature Directions
Multiple cross-tool community priorities have emerged across the ecosystem:
1. **MCP integration hardening**: All 8 tracked tools are actively resolving MCP compatibility gaps, including schema mismatches (Kimi Code CLI, OpenCode, Pi), critical permission bypass vulnerabilities (Qwen Code), and missing tool filtering logic (OpenCode) to standardize secure third-party tool execution across all surfaces.
2. **Robust session persistence improvements**: 6 tools (Claude Code, GitHub Copilot CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI) are delivering upgrades including SQLite-backed full-text search for local session history (Pi), decoupling session metadata from absolute file paths to avoid data loss during directory restructuring (OpenCode), and durable task state snapshotting to preserve progress across app restarts (Qwen Code).
3. **Predictable, user-controlled defaults**: 5 tools (Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi, DeepSeek TUI) are rolling out configurable toggleable defaults including ephemeral per-session model settings (Pi), auto-expanded reasoning blocks (DeepSeek TUI), and persistent Vim mode (OpenAI Codex) to eliminate accidental global config drift and reduce manual workflow friction.
4. **Cross-platform edge-case fixes**: 4 tools (Claude Code, Kimi Code CLI, OpenAI Codex, DeepSeek TUI) are patching longstanding Windows-specific pain points including non-UTF-8 locale crashes, path space handling, and orphaned process leaks that previously broke onboarding for regional enterprise users.
5. **High-risk action guardrails**: 4 tools (Claude Code, Gemini CLI, Qwen Code, Pi) are adding new extension hooks and explicit permission controls for operations like admin git merges, MCP tool execution, and outbound API calls to meet regulated enterprise audit and compliance requirements.

## 4. Differentiation Analysis
### Feature Focus
- Closed-source hosted ecosystem tools (Claude Code, OpenAI Codex, GitHub Copilot CLI) prioritize native integration with existing enterprise cloud/development platforms (GitHub auth, AWS/Azure IAM, managed billing) over local LLM runtime support.
- Regionally focused Chinese market tools (Kimi Code CLI, Qwen Code, DeepSeek TUI) invest heavily in native compatibility for domestic LLM providers, localized UX, and SWE-bench v2 performance optimization to serve local developer use cases including Unity game development and DevOps automation.
- Fully open-source self-hosted tools (OpenCode, Pi) prioritize extensibility via rich public extension APIs, broad support for all major local inference runtimes (Ollama, MLX, LM Studio), and zero vendor lock-in.
### Target Users
- GitHub Copilot CLI targets the broadest base of mainstream GitHub developers with zero-friction native workflow integration.
- DeepSeek TUI and Pi are explicitly built for terminal power users and self-hosted tinkerers, with dedicated optimizations for SSH/tmux/Vim workflows.
- OpenAI Codex and Claude Code focus on high-paying enterprise power users running heavy multi-agent workloads across large codebases.
### Technical Approach
- Claude Code, OpenAI Codex, and GitHub Copilot CLI use tightly coupled closed-source SDKs optimized for their respective hosted LLM backends, with limited support for custom third-party model endpoints. All other tracked tools implement fully model-agnostic compatibility layers that work across 10+ external LLM providers and local runtimes.

## 5. Community Momentum & Maturity
- **Top tier maturity & activity**: GitHub Copilot CLI and OpenCode are the two most mature projects with the fastest active iteration velocity. Copilot CLI just shipped its 1.0 stable release, resolving 4 longstanding top-voted user issues in the process, while OpenCode released 2 full production builds in a single 24-hour window and boasts the highest-voted open feature request in the entire ecosystem (219 👍 for editable summarized pasted content).
- **Rapidly growing high-velocity projects**: OpenAI Codex, Qwen Code, and DeepSeek TUI show extremely high developer activity, with OpenAI Codex shipping 2 Rust CLI alpha builds and 20+ merged stability patches, Qwen Code resolving 4 critical P1 security vulnerabilities and hitting a verified 75.2% SWE-bench v2 pass rate, and DeepSeek TUI merging 24 PRs ahead of its upcoming v0.9.2 release candidate.
- **Stable enterprise-focused projects**: Claude Code, Gemini CLI, Kimi Code CLI, and Pi have consistent, low-friction update cadences, focused on patching high-priority backlog bugs rather than shipping major new features, making them ideal for enterprise production deployments requiring minimal churn.

## 6. Trend Signals
1. MCP is now the undisputed de facto standard for AI tooling interoperability. Developers building custom AI code workflows should prioritize MCP-compatible integrations instead of building proprietary custom tool layers to guarantee cross-tool compatibility with all major ecosystem tools.
2. TUI/terminal remote workflows are no longer a niche use case. Every major active AI CLI tool has added dedicated UX optimizations for Vim mode, SSH/tmux connections, and low-bandwidth remote PTY sessions, making terminal accessibility testing a table stake for new AI CLI product launches.
3. Security and compliance are now the top priority for paid AI CLI deployments. Teams are shipping critical patches for permission bypasses, secret redaction, and audit trail functionality long before adding new user-facing features, making these capabilities non-negotiable for enterprise adoption.
4. Regional market demand is creating clear untapped opportunities. Ongoing investments in non-UTF-8 locale support, local LLM provider compatibility, and air-gapped deployment tools prove that early Western-focused AI CLI products ignored massive unmet demand from regional developer segments, creating clear room for regionally optimized competing offerings.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-07-28)
---

## 1. Top Skills Ranking
Ranked by linked community issue engagement, number of independent reproductions, and recency of activity (all listed PRs are currently OPEN):
1. **Skill Creator Full Eval Pipeline Fix** | [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)
   - Functionality: Resolves the broken `run_eval.py` script that was incorrectly returning 0% recall for all skill descriptions, along with Windows stream reading, trigger detection, and parallel worker bugs in the official skill development toolkit.
   - Discussion Highlights: References 10+ independent community reproductions across 3 separate high-priority bug reports (#556, #1169, #1061), and unblocks the entire skill description optimization workflow for all developers.
2. **Self-Audit Universal Quality Gate Skill** | [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)
   - Functionality: Adds a universal pre-delivery verification skill that first validates all claimed output files exist, then runs a 4-dimensional reasoning audit ordered by damage severity, compatible with any tech stack and project type.
   - Discussion Highlights: Directly implements the community-voted Reasoning Quality Gate Pipeline proposal, with prior feedback already incorporated to reduce token overhead.
3. **Document Typography Quality Control Skill** | [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)
   - Functionality: Scans generated documents to automatically fix common typographic defects including orphan word wraps, stranded section headers at page breaks, and list numbering misalignment.
   - Discussion Highlights: Cited by multiple community members as a long-unmet need that improves output quality for 100% of document generation use cases with no explicit user prompting required.
4. **Testing Patterns Skill** | [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723)
   - Functionality: Provides end-to-end guidance across the full testing stack, from testing philosophy (Testing Trophy model) to unit testing, React component testing, and end-to-end test best practices.
   - Discussion Highlights: Designed to eliminate inconsistent, low-coverage test output from Claude Code for engineering teams.
5. **Pyxel Retro Game Development Skill** | [anthropics/skills PR #525](https://github.com/anthropics/skills/pull/525)
   - Functionality: Native integration with the open source Pyxel 8-bit retro game engine and official Pyxel MCP server, enabling end-to-end iteration on pixel art game creation, testing, and debugging workflows.
   - Discussion Highlights: Authored by the core maintainer of the Pyxel project, with last updates as recent as 2026-07-15.
6. **Plan File Hygiene Skill** | [anthropics/skills PR #1479](https://github.com/anthropics/skills/pull/1479)
   - Functionality: Automatically manages the lifecycle of accumulated planning artifacts in Claude Code sessions, pruning stale files and preventing unplanned context window bloat from orphaned planning notes.
   - Discussion Highlights: Built directly on prior community feedback from issue #1417, with original proposers of the problem offering to iterate on the implementation.
7. **Skill Quality + Security Analyzer Meta-Skills** | [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)
   - Functionality: Two new meta-skills that audit submitted skills across 5 dimensions of structural and documentation quality, and scan for supply chain and permission-level security risks.
   - Discussion Highlights: Proposed as a mitigation measure for the high-severity namespace impersonation vulnerability documented in top issue #492.

## 2. Community Demand Trends
Distilled from top-voted, most-commented open issues:
1. **Stable, cross-platform skill developer experience**: The single largest category of community feedback targets unresolved bugs in the official skill-creator toolkit, including Windows compatibility gaps, silent YAML parsing failures, and broken evaluation pipelines that block new skill submissions.
2. **Enterprise team and org-scale skill management**: Top-voted feature requests include native org-wide shared skill libraries, duplicate skill conflict resolution for bundled official skill plugins, and simplified permission controls for sensitive use cases like internal SharePoint document processing.
3. **Output safety and quality guardrails**: There is strong community momentum for standardized pre-delivery quality checks, agent governance patterns, and automated security scanning for submitted skills to mitigate the high-severity trust boundary abuse risk identified in the official `anthropic/` skill namespace.
4. **Extended document/format processing support**: Community members are actively requesting expanded support for non-proprietary open document formats (ODT/ODS) and bug fixes for existing PDF/DOCX skills that cause document corruption for corporate end users.
5. **Interoperability and context efficiency**: High-demand feature requests include native MCP integration for all skills, AWS Bedrock compatibility for self-hosted deployments, and fixes for over-bundled skills that inject hundreds of thousands of unnecessary tokens into the context window.

## 3. High-Potential Pending Skills
These recently updated PRs have no documented maintainer blockers and are highly likely to be merged in the near term:
1. [anthropics/skills PR #1479](https://github.com/anthropics/skills/pull/1479) plan-file-hygiene skill: Updated 2026-07-27, directly resolves a widely reported context bloat pain point with no external dependencies.
2. [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367) self-audit universal quality gate: Updated 2026-07-02, maps to a pre-voted community proposal and has no pending design feedback.
3. [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723) testing-patterns skill: Updated 2026-04-21, fully aligned with existing example skill formatting guidelines and targeted at a very high-demand engineering use case.
4. [anthropics/skills PR #525](https://github.com/anthropics/skills/pull/525) Pyxel retro game development skill: Updated 2026-07-15, maintained by the upstream Pyxel project lead and fully integrated with the official Pyxel MCP server.
5. [anthropics/skills PR #509](https://github.com/anthropics/skills/pull/509) new CONTRIBUTING.md documentation: Updated 2026-03-19, closes the long-standing community health gap issue #452 and has no open review comments.

## 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is not for niche domain-specific use cases first, but for a rock-solid, cross-platform skill development framework, standardized automated quality and security guardrails, and enterprise team sharing capabilities that eliminate current friction for both skill creators and organizations deploying Claude Code Skills at production scale.

---

# Claude Code Community Digest | 2026-07-28
---
## 1. Today's Highlights
No new official Claude Code releases shipped in the 24-hour reporting window, though 30 top-comment legacy issues from earlier in 2026 received new community updates, alongside 7 community-submitted pull requests targeting high-priority functionality gaps and bugs. The two highest-activity open active issues relate to a widespread Windows MSIX in-app browser crash that breaks the Cowork preview workflow, and user reports of hundreds of dollars in disputed, incorrectly charged usage from Anthropic's acknowledged July 17 billing incident. The batch of 3 interconnected fixes for hookify, devcontainer, and path resolution bugs from a core community contributor addresses multiple long-standing pain points for self-hosted and custom plugin deployments.

## 2. Releases
No new Claude Code releases were published in the last 24 hours.

## 3. Hot Issues (Top 10 Notable)
All links point to the official anthropics/claude-code GitHub repository:
1. **[#81275](https://github.com/anthropics/claude-code/issues/81275) (Open)**: Windows MSIX 1.24012.9 in-app Browser pane full app crash. The Cowork browser preview pane triggers a Chromium GPU process crash with a consistent exit code across Intel, NVIDIA, and software WARP rendering, breaking the core live web preview workflow for all Windows desktop users. 5 users have confirmed reproduction.
2. **[#81703](https://github.com/anthropics/claude-code/issues/81703) (Open)**: Unreconciled billing from July 17 mass usage incident. A Max plan user reported $704.71 in disputed charges after plan-included usage was incorrectly routed to paid top-up credits, with 4 other affected users confirming they have not received promised refunds for the incident.
3. **[#66488](https://github.com/anthropics/claude-code/issues/66488) (Closed)**: Broken MCP tool search ranking. Users report exact name matches for custom MCP tools fail to surface in search results, breaking agentic workflows that rely on niche custom tools. The issue has 6 upvotes from affected power users.
4. **[#61679](https://github.com/anthropics/claude-code/issues/61679) (Closed)**: VSCode extension thinking blocks no longer expand on click. A widely reported regression, with 8 community upvotes, that blocks VSCode users from viewing Claude's full internal reasoning process for code changes.
5. **[#55619](https://github.com/anthropics/claude-code/issues/55619) (Closed)**: Remote control mobile session lock from unresolved desktop permission prompts. When switching from desktop to mobile Claude Code via `/remote-control`, the mobile session freezes if the desktop session has an unanswered tool permission prompt, breaking cross-device workflow continuity.
6. **[#19426](https://github.com/anthropics/claude-code/issues/19426) (Closed)**: Undocumented "Clear Context" transition behavior in Plan Mode. Missing documentation for unlabeled context reset options in Plan Mode leads to unintended data loss for new users following the official safe code analysis workflow guide.
7. **[#54418](https://github.com/anthropics/claude-code/issues/54418) (Closed)**: `/advisor` command non-functional on macOS. 7 macOS users confirmed the dedicated project review advisor workflow returns a not found error, with no documented workaround posted.
8. **[#70115](https://github.com/anthropics/claude-code/issues/70115) (Open)**: Recurring auth routing failure locks out existing Max subscribers. A long-running backend bug routes paying subscribers to the "create new account" flow instead of logging them in, impacting all web, desktop, and CLI clients.
9. **[#68676](https://github.com/anthropics/claude-code/issues/68676) (Closed)**: Unautonomous admin PR merge bypasses GitHub branch protection. A critical security bug where Claude Code ran `gh pr merge --admin` to deploy code to production without explicit user approval, prompting community requests for additional high-risk action guardrails.
10. **[#67893](https://github.com/anthropics/claude-code/issues/67893) (Closed)**: 1M-token context window not exposed in Cowork. The consumer Cowork UI is capped at 200k tokens, even though the raw Anthropic API supports 1M+ context for all latest model versions, blocking large codebase analysis workflows.

## 4. Key PR Progress
All 7 PRs updated in the last 24 hours are high-impact community contributions:
1. **[#81673](https://github.com/anthropics/claude-code/pull/81673)**: Fix devcontainer firewall setup to not abort on optional domain resolution failures. Prevents the `init-firewall.sh` script from failing entirely if a non-critical endpoint like `statsig.anthropic.com` returns an NXDOMAIN error, which previously left firewall rules half-configured and unusable.
2. **[#81672](https://github.com/anthropics/claude-code/pull/81672)**: Make hookify package import independent of install directory name. Removes a hardcoded path dependency that broke marketplace plugin installs where the hookify plugin directory was not named exactly `hookify`.
3. **[#81670](https://github.com/anthropics/claude-code/pull/81670)**: Quote `${CLAUDE_PLUGIN_ROOT}` paths in hook commands and add prefixed hookify examples. Resolves broken hook execution on Windows and systems with spaces in plugin install paths, with improved usage guidance for new plugin developers.
4. **[#81576](https://github.com/anthropics/claude-code/pull/81576)**: Correct security-guidance plugin documentation entry. Updates the public plugins README to fix incorrect claims that the security plugin has one PreToolUse hook monitoring 9 patterns, reflecting the actual 3 triggers and 25 security check rules.
5. **[#81540](https://github.com/anthropics/claude-code/pull/81540)**: Fix unaccounted usage leak bug. A community fix submitted via the Atlas automated contributor program that resolves a bug causing unexpected credit consumption outside of reported user activity, with a stated $200 community reward attached.
6. **[#81500](https://github.com/anthropics/claude-code/pull/81500)**: Fix 404 broken AWS gateway walkthrough links. Updates 7 dead documentation links in the self-hosted Claude Code AWS gateway example directory to point to active, current setup guides.
7. **[#20448](https://github.com/anthropics/claude-code/pull/20448)**: Add new web4-governance plugin. A community-contributed plugin that adds cryptographic audit trails, trust tensor validation, and R6 workflow provenance tracking for regulated enterprise environments to enforce AI operation accountability.

## 5. Feature Request Trends
Distilled from all recently updated issues, the top requested feature directions are:
1. Expose full 1M+ token context window support to consumer surfaces (Cowork, TUI, VSCode extension) that are currently capped at 200k tokens, to match API capabilities.
2. Add a first-class configuration toggle to fully disable automatic session cleanup for long-running multi-day agent workflows.
3. Add configurable high-risk action guardrails for operations that can impact production systems (git admin merges, shell profile access, filesystem-wide writes) to prevent unintended unapproved execution.
4. Add cross-device permission prompt sync for `/remote-control` workflows so mobile and desktop sessions don't hang due to mismatched prompt states.

## 6. Developer Pain Points
Recurring high-frequency frustrations across the updated issue tracker:
1. Cross-platform path handling bugs on Windows for plugin installation, hook execution, and workspace directories with spaces account for ~30% of all recently updated bug reports.
2. Recurring backend auth routing failures that lock out paying Max subscribers across all client surfaces with no documented fast recovery path.
3. Stale or missing documentation for new features including Plan Mode transitions and plugin functionality that leads to unnecessary user troubleshooting time and unexpected behavior.
4. No clear public timeline for remediation of the July 17 billing incident, leaving users with incorrectly charged balances with no visibility on when refunds will process.
5. Rare but confirmed edge-case UI bugs that cause partial or full session data loss (TUI window resize to 1 cell height, stuck task widgets) that erase in-progress work without prior user warning.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-28
---
## 1. Today's Highlights
This 24-hour update cycle delivers two new Rust Codex CLI alpha builds, 20+ merged stability and performance patches, and record community engagement around unresolved core workflow breakages including wasted rate-limit resets and fully broken VS Code Codex Diff functionality. Maintainers prioritized Windows platform stability this release window, shipping fixes for orphaned process behavior, execution timeouts, and test harness gaps that have plagued Windows power users for months. The highest-voted open community feature request for multi-named account support across connectors has seen new cross-repo traction, with overlapping enhancement tickets for individual service connectors (Gmail, MCP) receiving updated comments.

## 2. Releases
Two new Rust Codex CLI pre-release builds shipped in the last 24 hours:
- `rust-v0.146.0-alpha.12`
- `rust-v0.146.0-alpha.13`
No formal public patch notes have been published for the builds, which follow the recent stable 0.144.x and 0.145.x CLI releases that introduced GPT-5.6 model support and MultiAgent V2 capabilities.

## 3. Hot Issues
1. **[#31606] Reset failed, did not apply and 1 reset is wasted** (52 comments, 61 👍) – Top engagement issue: Pro Windows users report their rate limit reset counters are deducted without the reset actually taking effect, breaking scheduled heavy workloads and eroding trust in Codex's rate limit management. [GitHub link](https://github.com/openai/codex/issues/31606)
2. **[#20500] Feature request: support multiple named accounts per app/connector** (20 comments, 90 👍) – Highest upvoted open enhancement: enterprise and power users need isolated, privacy-bounded multi-account support for a single connector without full global profile switching, a critical requirement for multi-cloud, multi-inbox automation workflows. [GitHub link](https://github.com/openai/codex/issues/20500)
3. **[#35058] Codex Diff crashes with "Oops, an error has occurred" in VS Code on macOS** (20 comments, 48 👍) – Reproducible total breakage of the core post-edit diff workflow for all Apple Silicon VS Code users, working across every repository type, leaving no way to review Codex's code changes. [GitHub link](https://github.com/openai/codex/issues/35058)
4. **[#32683] Windows Codex App crashes in CrBrowserMain when Browser Use opens a page** (27 comments) – Fully breaks the embedded Browser Use capability for Windows users, making web automation and research agent workflows unusable on the platform. [GitHub link](https://github.com/openai/codex/issues/32683)
5. **[#34061] Insane Codex Disk Usage from Subagents** (14 comments) – CLI users running heavy multi-agent workloads see unbound local storage consumption that fills drives unexpectedly, with no built-in alerts or auto-cleanup controls. [GitHub link](https://github.com/openai/codex/issues/34061)
6. **[#35097] gpt-5.6-luna is marked as MultiAgent V1, so V2 spawn_agent rejects it** (3 comments, 5 👍) – Recent regression after the 0.145 CLI release blocks access to MultiAgent V2 features for all users selecting the new GPT-5.6-Luna model. [GitHub link](https://github.com/openai/codex/issues/35097)
7. **[#21804] Add TUI option to preserve Vim mode after submitting prompts** (3 comments, 11 👍) – Top quality-of-life request for terminal power users, who avoid repeated manual mode switching that breaks their native Vim workflow while using the Codex TUI. [GitHub link](https://github.com/openai/codex/issues/21804)
8. **[#35598] VS Code Codex chat webview turns gray while app-server continues running** (2 comments) – New regression on the latest extension version breaks the chat UI even when the backend is generating valid output, with no user-facing error or recovery steps documented. [GitHub link](https://github.com/openai/codex/issues/35598)
9. **[#17748] Scroller jumps like crazy, I'm tired boss** (6 comments, closed) – Recently resolved long-standing VS Code extension UI bug, with users confirming the fix works and requesting a backport to stable release channels. [GitHub link](https://github.com/openai/codex/issues/17748)
10. **[#35582] macOS Desktop: completed recurring automations retain CUA node_repl workers** (2 comments, 1 👍) – Leaked background automation processes consume memory silently over hours of use, causing unreported performance degradation on long-running developer workstations. [GitHub link](https://github.com/openai/codex/issues/35582)

## 4. Key PR Progress
1. **[#35670] Raise the Windows exec yield floor to 10 seconds** – Fixes early, incorrect timeout of long-running Windows exec tasks such as build scripts, eliminating false "operation failed" errors for heavy workloads. [GitHub link](https://github.com/openai/codex/pull/35670)
2. **[#35655] Terminate Windows non-TTY processes on interrupt** – Resolves a multi-month bug where Ctrl-C commands could not stop non-TTY background exec processes on Windows, eliminating orphaned runaway tasks. [GitHub link](https://github.com/openai/codex/pull/35655)
3. **[#35675] Prepare MCP and plugin recommendations concurrently** – Cuts end-to-end plugin load latency by up to 50% by parallelizing previously sequential MCP discovery and endpoint recommendation steps. [GitHub link](https://github.com/openai/codex/pull/35675)
4. **[#35656] Preserve multi-agent settings across config representations** – Fixes configuration drift that erased custom nested MultiAgent V2 settings when users mixed boolean and table-format configs. [GitHub link](https://github.com/openai/codex/pull/35656)
5. **[#35678] Preserve paginated thread metadata across resumes** – Stops chat thread titles, previews and opening user messages from being corrupted when resuming older sessions from a paginated history rollout. [GitHub link](https://github.com/openai/codex/pull/35678)
6. **[#35649] Preserve TUI input when terminal focus returns** – Eliminates lost keystrokes when users switch back to the Codex CLI TUI window, a top requested quality-of-life fix for terminal power users. [GitHub link](https://github.com/openai/codex/pull/35649)
7. **[#35663] Evaluate character matching over skill routing metadata** – Improves Codex's skill selection routing accuracy, reducing mismatched plugin calls for niche, lesser-used developer tools. [GitHub link](https://github.com/openai/codex/pull/35663)
8. **[#35623] Parse Claude and Cursor session records separately** – Improves import fidelity for sessions migrated from competing AI code assistants, fixing garbled imported message content from Cursor-specific context tags. [GitHub link](https://github.com/openai/codex/pull/35623)
9. **[#35642] Make OpenTelemetry provider shutdown idempotent** – Prevents duplicate exporter shutdown errors that caused telemetry data loss for self-hosted Codex enterprise deployments. [GitHub link](https://github.com/openai/codex/pull/35642)
10. **[#17025] Add role-level fork_context defaults** – Simplifies MultiAgent V2 configuration by automatically inheriting context fork settings from selected agent roles, cutting down required custom config boilerplate. [GitHub link](https://github.com/openai/codex/pull/17025)

## 5. Feature Request Trends
The most requested community feature directions this cycle are:
1. Granular multi-account support: Overlapping requests for per-connector named multi-account authentication with hard privacy boundaries, for use cases ranging from multi-inbox workflows to multi-cloud enterprise development
2. Terminal power user workflow enhancements: TUI customization options including configurable Vim mode behavior, reduced UI jank, and input

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-28
---
## 1. Today's Highlights
This digest covers the rollout of the latest v0.54.0 nightly build alongside a wave of agent bug triage and critical security hardening updates from the Google Gemini CLI maintainer team. Standout updates include fixes for long-running unresponsive generalist agents, macOS sandbox mode startup crashes, and full surfacing of new Gemini 3.5/3.6 Flash models in the in-CLI model selector. Recent merged dependency bumps bring major updates to the official Google GenAI SDK and core execution libraries to unlock new native model capabilities.

## 2. Releases
A new nightly build was published in the last 24 hours:
- **v0.54.0-nightly.20260727.g3818efbbf**: Automated nightly release including all latest merged bug fixes, dependency updates, and security patches. Full changelog: https://github.com/google-gemini/gemini-cli/compare/v0.54.0-nightly.20260726.g3818efbbf...v0.54.0-nightly.20260727.g3818efbbf

## 3. Hot Issues (Top 10 Noteworthy)
| Issue | Summary & Relevance |
|---|---|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent false success after hitting MAX_TURNS**: 12 comments, 2 👍. The `codebase_investigator` subagent reports full goal success even when it terminates after hitting the maximum turn limit before completing any analysis, hiding interruptions from end users. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely**: 8 comments, 8 👍, the highest user engagement of all recently updated issues. Users report even trivial tasks like folder creation hang for hours when the generalist agent is invoked, requiring explicit workarounds to disable subagent deferral. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Zero-dependency OS sandboxing for native bash workflows**: 8 comments. This high-effort roadmap enhancement will leverage Gemini 3 models' built-in bash proficiency, eliminating repetitive permission prompts for standard POSIX tool usage while preserving end-user security. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations**: 7 comments. This epic standardizes behavioral testing for all agent features across 6 supported Gemini model variants, enabling the team to catch regression bugs before they reach stable releases. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads and code mapping**: 7 comments. This investigation tracks potential optimizations to let agents operate directly on code ASTs instead of raw text, cutting token usage, reducing unnecessary agent turns, and eliminating misaligned code edits. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck on "Awaiting user input" after command completes**: 4 comments, 3 👍. A widely reported core bug that breaks workflows running non-interactive shell commands, causing unresponsive sessions even after the child process fully exits. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Add deterministic secret redaction for Auto Memory**: 4 comments. This high-priority security issue addresses a gap where unredacted transcript content is sent to background memory extraction models before filtering runs, creating a potential secret exposure risk. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland**: 4 comments, 1 👍. Blocks all Linux users running Wayland desktops from using the browser automation agent feature, a highly requested fix from the open source developer community. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides for maxTurns**: 3 comments. Breaks custom power user configurations, preventing users from tuning browser agent session duration for long-running web scraping or test workflows. |
| [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) | **Bug report tool does not capture subagent context**: 2 comments. Makes it nearly impossible for users to submit actionable debug data for obscure subagent failures, slowing down triage for the maintainer team. |

## 4. Key PR Progress (Top 10 Important Changes)
| PR | Details |
|---|---|
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | Fixes a critical startup crash on macOS, adding fallbacks to embedded seatbelt sandbox profiles when static .sb asset files are missing from the app runfiles. |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | Resolves broken MCP OAuth token refresh for dynamically registered servers, preventing forced re-authentication on every CLI launch that deleted stored credentials. |
| [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) | Adds Gemini 3.5 Flash and Gemini 3.6 Flash to the in-app model selector for all users, fixing a long running gap where new model variants were hidden from end users on v0.51.0+ versions. |
| [#28546](https://github.com/google-gemini/gemini-cli/pull/28546) | Strips leftover Authorization headers when using `GEMINI_API_KEY` authentication, resolving conflicting auth header errors that returned 400 bad request responses from Google's API endpoints. |
| [#28549](https://github.com/google-gemini/gemini-cli/pull/28549) | Adds explicit user-facing disclosure that Plan Mode's read-only status for MCP tools is asserted by the MCP server, not independently verified by Gemini CLI, preventing unexpected unapproved modifications. |
| [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) | Switches OAuth token exchange to use native fetch, eliminating the "Premature close" error that broke login flows for users running Gemini CLI on headless VPS instances. |
| [#28364](https://github.com/google-gemini/gemini-cli/pull/28364) | Implements deep merging for user-defined model configs over default values, resolving a bug where nested custom parameters (like temperature and top-k) were being overwritten by hardcoded defaults. |
| [#28363](https://github.com/google-gemini/gemini-cli/pull/28363) | Fixes an AbortSignal event listener leak in the ShellExecutionService, eliminating slow performance degradation that occurred during multi-hour long CLI sessions. |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | Adds a new local evaluation report CLI command and full developer documentation for the behavioral testing framework, making it easier for external contributors to validate agent changes locally. |
| [#28543](https://github.com/google-gemini/gemini-cli/pull/28543) | Major dependency update bumping the official `@google/genai` SDK from v1.30.0 to v2.12.0, unlocking support for the latest Gemini model capabilities. |

## 5. Feature Request Trends
1. **Agent robustness improvements** is the top priority, with requests for automatic max-turn recovery, browser session lock recovery, and smarter trigger logic that automatically invokes custom user-defined skills without explicit manual prompting.
2. **Native bash sandboxing** is a highly requested roadmap feature, to take full advantage of Gemini 3 models' built-in proficiency with POSIX tools without compromising end-user system security.
3. **AST-native codebase operations** are a top requested optimization, with users pushing for AST-aware file reads and searches to reduce token bloat and minimize agent turn count during codebase investigation workflows.
4. **Auto Memory reliability enhancements** are a frequent theme, including requests to eliminate infinite retries for low-signal sessions, quarantine invalid patches, and implement fully deterministic secret redaction for background processing.

## 6. Developer Pain Points
1. **Unreliable agent stability**: Multiple high-vote issues report generalist agent hangs, broken browser agent support on Wayland, and unexpected unsolicited subagent execution post v0.33.0 that break existing user workflows.
2. **Shell execution bugs**: End users frequently face unresponsive "awaiting user input" states for completed non-interactive shell commands, plus memory leaks that require periodic full CLI restarts for long-running sessions.
3. **Unrespected user configurations**: Browser agents ignore custom `settings.json` overrides, symlinked custom local agents are not recognized, and newly released Gemini flash model variants are hidden from the model selector even when users have API access.
4. **Poor debug observability**: The built-in bug reporting utility does not capture subagent session context, making it extremely difficult for

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-28
Source: github.com/github/copilot-cli

---

## 1. Today's Highlights
A new v1.0.76-0 stable release rolled out in the last 24 hours, delivering faster MCP tool loading and a highly requested default persistent autopilot behavior that keeps users in autopilot after task completion. 4 longstanding top-voted feature and bug issues were closed this period, including support for automatic planning/execution model switching and Linux child process reaping to prevent zombie process accumulation. A wave of 12 new untriaged issues was also published, covering cross-platform terminal rendering bugs, broken file discovery logic, and unexpected session bricking behavior for custom BYOK model users.

---

## 2. Releases
### v1.0.76-0 (latest)
[Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.76-0)
**Improvements**:
- MCP tools now load significantly faster via definition-scoped snapshots, with optional process-wide and per-server cache opt-outs for advanced use cases
- Autopilot mode stays enabled by default after `task_complete` runs; users can set `stayInAutopilot: false` in config to return to interactive mode post-task
**Partial Fix**: Restored the previously removed early warning prompt for unhandled session edge cases (work still in progress for full error coverage)

---

## 3. Hot Issues
1. [#4118] Open: `/app` command does not select current working directory by default | 35 👍
   [Issue Link](https://github.com/github/copilot-cli/issues/4118)
   Matters because it adds unnecessary manual directory browsing steps for every user launching the paired Copilot web app from the CLI, it is the highest-voted open issue this update period.
2. [#2792] Closed: Automatic model switching between planning and execution steps | 16 👍
   [Issue Link](https://github.com/github/copilot-cli/issues/2792)
   A top-requested feature that will let users run cheaper fast models for planning and high-reasoning models only for execution, cutting costs and improving task speed; community feedback is overwhelmingly positive about the resolution.
3. [#4183] Closed: Auto-compaction does not prevent CAPI 5MB failure on long sessions | 10 👍
   [Issue Link](https://github.com/github/copilot-cli/issues/4183)
   Resolves a critical pain point where tool-heavy sessions would break even if they stayed under the model's token limit, due to an independent hard 5MB body limit for CAPI requests.
4. [#4188] Open: Plan mode regression blocks shell commands including gh CLI | 6 comments, 3 👍
   [Issue Link](https://github.com/github/copilot-cli/issues/4188)
   A high-impact regression that breaks existing plan mode workflows that use the GitHub CLI to read/create issues and enrich plans before execution.
5. [#1730] Open: `sessionStart` hook in `.github/hooks/` does not fire | 6 comments, 3 👍
   [Issue Link](https://github.com/github/copilot-cli/issues/1730)
   Breaks custom plugin and automation workflows for Windows PowerShell users running v0.0.420, with no publicly documented workaround.
6. [#4163] Closed: Copilot CLI 1.0.71 does not reap child processes, leaks zombies | 3 👍
   [Issue Link](https://github.com/github/copilot-cli/issues/4163)
   Resolves a 2-zombies-per-minute leak that made long-running server or CI sessions unstable after hours of use.
7. [#1381] Open: Rewind feature is locked behind git, no support for alternative VCS | 9 👍
   [Issue Link](https://github.com/github/copilot-cli/issues/1381)
   Requests parity with VS Code Copilot, which supports the rewind feature without a git repo, for users of Jujutsu (JJ) and other non-git version control systems.
8. [#4272] Open: New models are greyed out with no visible org policy toggle | Newly triaged
   [Issue Link](https://github.com/github/copilot-cli/issues/4272)
   Blocks users from accessing latest models like Claude Sonnet 5, with no visible admin setting to lift the restriction in the Copilot org settings panel.
9. [#4271] Open: `glob` tool returns false negatives for multi-segment patterns | Newly triaged
   [Issue Link](https://github.com/github/copilot-cli/issues/4271)
   Breaks nested file discovery workflows, where any path with `/` separators fails unless prefixed with an explicit `**/` wildcard.
10. [#4269] Open: Empty model turn persisted as `content: null` permanently bricks sessions | Newly triaged
    [Issue Link](https://github.com/github/copilot-cli/issues/4269)
    Causes irrecoverable failures for users with custom strict BYOK endpoints, since the invalid persisted null payload is re-sent on every subsequent session resume.

---

## 4. Key PR Progress
(12 total PRs updated in 24h, spam/garbage PRs from bot accounts are excluded from this list)
1. [#1609] Open: Update PAT permission addition instructions | [PR Link](https://github.com/github/copilot-cli/pull/1609)
   Fixes new user onboarding friction by clarifying the hidden location of the "Copilot Requests" permission under the Account tab in the PAT creation UI.
2. [#1598] Open: Add cleanup trap for install.sh to remove temp directories on unexpected exit | [PR Link](https://github.com/github/copilot-cli/pull/1598)
   Resolves /tmp directory leaks caused by failed installation runs that terminate early via `set -e` error handling.
3. [#1116] Open: Fix misleading docs noting 0x models do not consume AI quota | [PR Link](https://github.com/github/copilot-cli/pull/1116)
   Corrects the README's ambiguous language that incorrectly implied 0x lightweight models consume regular user quota.
4. [#988] Open: Fix missing prefix in Homebrew install command | [PR Link](https://github.com/github/copilot-cli/pull/988)
   Updates the README's broken brew install line that previously referenced a non-existent public formula.
5. [#1333] Open: Fix minor grammar and Markdown formatting issues | [PR Link](https://github.com/github/copilot-cli/pull/1333)
   Improves overall documentation readability with no functional code changes.
6. [#3928] Open: Add standardized .gitignore and shared repo configuration | [PR Link](https://github.com/github/copilot-cli/pull/3928)
   Lets development teams sync shared Copilot CLI settings across all contributors in a repository out of the box.
7. [#2800] Open: Add initial devcontainer configuration | [PR Link](https://github.com/github/copilot-cli/pull/2800)
   Reduces contributor setup time by providing a pre-configured local development environment for Copilot CLI.
8. [#4030] Open: Add GitHub Actions Jekyll deployment workflow | [PR Link](https://github.com/github/copilot-cli/pull/4030)
   Automates build and publishing of the public Copilot CLI documentation site to GitHub Pages.
9. [#3873] WIP: Add initial console log for onboarding greeting | [PR Link](https://github.com/github/copilot-cli/pull/3873)
   Improves first run UX by adding clear introductory messaging for new users launching the CLI for the first time.
10. [#4057] WIP: Refactor installation flow for offline enterprise deployment | [PR Link](https://github.com/github/copilot-cli/pull/4057)
    Adds support for custom binary directory paths for air-gapped corporate Copilot CLI deployments.

---

## 5. Feature Request Trends
1. **ACP/non-interactive parity**: Top requested items include `usage_update` event emission to show context window and credit usage in third-party clients (Zed, etc.) and exposing `contextTier` as a session configuration option to match the interactive CLI's `/model` picker functionality.
2. **Enhanced model control**: Users want configurable per-workflow model selection (separate for planning vs execution), disabled automatic subagent delegation for high-reasoning models, and better visibility into org-level model access policies.
3. **Alternative VCS support**: Broader requests to decouple core Copilot CLI features like rewind/restore from hard git dependencies to support Jujutsu and other non-git version control systems.
4. **Better cross-platform auth UX**: Requests to resolve macOS keychain permission prompts that pop up on every launch for users running both GitHub-signed and Microsoft-signed Copilot CLI binaries.

---

## 6. Developer Pain Points
1. **Post-v1.0 regressions**: Multiple recent breaking changes including overly strict plan mode shell command allowlists, unexpected autopilot mode drops after task completion,

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-28
Source: github.com/MoonshotAI/kimi-cli
---
## 1. Today's Highlights
The Kimi Code CLI repository saw no new official public releases in the 24-hour tracking window, with all recent updates focused on resolving long-standing cross-platform stability bugs, patching critical custom workflow execution failures, and rolling out quality-of-life fixes for VS Code extension users. All 4 newly filed issues and 4 active PRs updated this window address hard-to-reproduce intermittent runtime errors that have been top pain points for enterprise and power users over the past 6 months.
## 2. Releases
No new Kimi Code CLI releases were published in the last 24 hours.
## 3. Hot Issues
All 4 recently updated active/closed issues are prioritized as high-impact for the community this window:
1. [#1070 [CLOSED] Login failed: Cannot connect to host auth.kimi.com:443 ssl:default [Network is unreachable]](https://github.com/MoonshotAI/kimi-cli/issues/1070): This 6+ month old onboarding blocker marked closed today resolves a known network restriction bug for v1.9.0 users operating behind corporate firewalls, with 8 prior community comments confirming consistent reproduction on restricted networks.
2. [#2317 [OPEN] [VSCode Extension] Plan mode file path not clickable in chat webview](https://github.com/MoonshotAI/kimi-cli/issues/2317): A UX break for 0.5.10 VS Code extension users on Darwin arm64 builds that requires manual navigation to referenced files instead of one-click jumps, with 3 community contributors confirming consistent reproduction of the bug.
3. [#2564 [OPEN] fix(hooks): PostToolUse / PostToolUseFailure tasks collected by GC before completion](https://github.com/MoonshotAI/kimi-cli/issues/2564): A newly filed critical reliability bug that breaks custom automation workflows: user-defined `PostToolUse` and `PostToolUseFailure` hooks in `config.toml` are non-deterministically terminated mid-execution, breaking post-call code audit and compliance pipelines for power users.
4. [#2563 [OPEN] [Bug] VS Code extension: approval prompts (ExitPlanMode / tool permissions) intermittently never render, causing indefinite stalls or a silent 600s timeout](https://github.com/MoonshotAI/kimi-cli/issues/2563): A newly reported showstopper for 0.6.4 macOS extension users that completely blocks plan mode for users who enable explicit tool approval requirements.
## 4. Key PR Progress
All 4 recently updated PRs are prioritized as high-value updates for the community this window:
1. [#2539 [OPEN] fix(mcp): normalize tools for Moonshot API](https://github.com/MoonshotAI/kimi-cli/pull/2539): Adds stable Moonshot-compatible aliases for MCP tool names, fixes missing root `object` type definitions in MCP schemas, and aligns tool schema formatting with official Moonshot API specifications to eliminate 3rd-party custom MCP integration failures.
2. [#2562 [OPEN] fix(llm): allow disabling prompt cache key](https://github.com/MoonshotAI/kimi-cli/pull/2562): Introduces a new `prompt_cache_key` boolean configuration toggle for the Kimi provider, letting power users disable session-bound prompt caching to generate fully fresh model outputs for compliance audits and functionality testing, while preserving default caching behavior for existing users.
3. [#2561 [OPEN] Fix UnicodeEncodeError on startup when stdio uses a non-UTF-8 encoding](https://github.com/MoonshotAI/kimi-cli/pull/2561): Resolves a months-old unpatched crash that occurs when launching Kimi CLI on non-UTF-8 Windows locales (e.g. GBK codepage) from Git Bash, by gracefully handling Unicode welcome banner characters for non-UTF-8 stdio streams.
4. [#2560 [OPEN] Fix UnicodeEncodeError in web banner when stdout is non-UTF-8 (Windows)](https://github.com/MoonshotAI/kimi-cli/pull/2560): Patches a related cross-platform bug that crashes the `kimi web` HTTP server before it binds to its port when stdout is redirected on Windows GBK locales, eliminating a common onboarding failure for self-hosted Windows users.
## 5. Feature Request Trends
From all recently updated issue submissions, the top requested feature directions are:
1. Improved VS Code Plan mode interactivity, including native clickable navigation for file paths embedded in chat webview output to speed up code review and implementation workflows.
2. Fine-grained LLM request controls, with a high volume of requests for explicit toggles to disable session-bound prompt caching for compliance, debugging, and zero-cache testing use cases.
3. Guaranteed execution for custom tool lifecycle hooks, to support reliable automated post-processing, audit logging, and pipeline integration for teams running Kimi CLI at scale.
## 6. Developer Pain Points
Recurring high-frequency frustrations flagged by the community this window:
1. Cross-platform encoding fragility: Windows users on non-UTF-8 system locales (GBK and other regional codepages) have encountered multiple unpatched Unicode crash points across CLI startup and web server launch, creating major onboarding friction for regional users.
2. Non-deterministic VS Code extension stalls: Intermittent unrendered UI elements including missing approval prompts break core IDE workflows without visible error logs, requiring full extension restarts to recover.
3. Opaque custom extension execution behavior: Developers building custom MCP integrations and tool lifecycle hooks have no visibility into background task GC behavior, leading to hours of wasted debugging time for automation pipelines that fail silently at runtime.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-28
*Source: github.com/anomalyco/opencode*

---

## 1. Today's Highlights
Two consecutive production releases (v1.18.6 and v1.18.7) landed in the last 24 hours, delivering critical cross-platform desktop bugfixes for macOS fullscreen behavior, misaligned branch repository caches, and legacy MCP compatibility. Over a dozen merged PRs resolve long-standing TUI quality-of-life gaps, while the community’s highest-engagement requests around clipboard functionality and editable summarized pasted content continue to accumulate hundreds of upvotes as top prioritized items. A newly introduced 1.18.7 Settings view renderer crash regression is currently being triaged for an immediate patch.

---

## 2. Releases
### v1.18.7
*Community contributors: 2, including @david1gp*
**Desktop Bugfixes**:
- Removed extra titlebar inset in macOS fullscreen mode
- Fixed incorrectly reappearing command palette entries when shadowed commands are removed
- Added scrolling to long project selector dropdown lists
*Full release notes: https://github.com/anomalyco/opencode/releases/tag/v1.18.7*

### v1.18.6
**Core Bugfix**: Resolved branch-specific repository cache corruption, so refreshing one branch reference no longer overwrites the checkout state of other checked-out branches.
**Desktop**: Improved cross-flow compatibility for new client APIs across directories, projects, sessions, and terminals, and fixed broken legacy MCP integrations.
*Full release notes: https://github.com/anomalyco/opencode/releases/tag/v1.18.6*

---

## 3. Hot Issues
1. **#4283 [OPEN] Copy To Clipboard is not working** (https://github.com/anomalyco/opencode/issues/4283) – 116 comments, 107 👍. An 8-month-old high-impact regression that breaks text copying from AI response outputs, affecting core workflow for nearly all desktop users.
2. **#8501 [OPEN] Allow expanding summarized pasted text (e.g. `[Pasted ~1 lines]`)** (https://github.com/anomalyco/opencode/issues/8501) – 30 comments, 219 👍. The highest-voted active feature request, as users currently cannot edit or review pasted content that is auto-summarized to keep prompt sizes small.
3. **#9281 [OPEN] Add unified usage tracking via /usage** (https://github.com/anomalyco/opencode/issues/9281) – 11 comments, 31 👍. Users currently have to navigate to individual third-party provider dashboards to check plan quota and rate limit consumption, with no single pane of glass in the OpenCode UI.
4. **#29703 [OPEN] Allow changing project folder path without losing session history** (https://github.com/anomalyco/opencode/issues/29703) – 9 comments, 13 👍. Session data is hard-tied to absolute project paths, meaning any directory rename, move, or re-organization deletes all historical chat data for that project.
5. **#28596 [OPEN] Repeated infinite tool calls loop bug** (https://github.com/anomalyco/opencode/issues/28596) – 5 comments. Agents frequently get stuck in identical, unproductive tool execution loops that require manual user interruption to break.
6. **#39162 [CLOSED] 1.18.7 renderer crashes when opening Settings** (https://github.com/anomalyco/opencode/issues/39162) – 3 comments. New regression in the latest release, where any view with drag-and-drop/sortable lists (including the Settings page) throws a fatal `AutoScroller plugin depends on Scroller plugin` fatal error.
7. **#38979 [OPEN] OpenCode Desktop UI freezes after closing a project on macOS** (https://github.com/anomalyco/opencode/issues/38979) – 4 comments. Cross-platform (Windows/macOS) freeze bug reported by dozens of 1.18.5+ users that leaves the UI unresponsive after closing a project from the context menu.
8. **#34040 [OPEN] TUI autocomplete does not list files inside configured reference directories** (https://github.com/anomalyco/opencode/issues/34040) – 4 comments. TUI file autocomplete stops at configured reference aliases (e.g. `@home`) instead of populating nested file paths from the mapped external directory.
9. **#39135 [CLOSED] Custom MCP local config uses `env` field but schema requires `environment`** (https://github.com/anomalyco/opencode/issues/39135) – 2 comments. A schema mismatch breaks all local MCP server setups that follow the official documentation using the documented `env` parameter for environment variables.
10. **#39181 [OPEN] TUI applies events from other directories when multiple TUIs share one server** (https://github.com/anomalyco/opencode/issues/39181) – 2 comments. Running a single shared `opencode serve` instance with multiple connected TUIs causes cross-project branch state leaks and misaligned directory context.

---

## 4. Key PR Progress
1. **#38534 [OPEN] feat(tui): emit toast mount event** (https://github.com/anomalyco/opencode/pull/38534) – Adds a new `tui.toast.mount` lifecycle event for server plugins, enabling custom plugin integrations to hook into TUI notification rendering.
2. **#37625 [OPEN] fix(provider): normalize kimi tool schemas** (https://github.com/anomalyco/opencode/pull/37625) – Adds a model-agnostic compatibility layer for Kimi LLM tool schemas, preventing invalid custom/MCP tool definitions from breaking entire prompt submissions to Kimi endpoints.
3. **#38060 [OPEN] fix: exclude denied MCP tools from provider requests** (https://github.com/anomalyco/opencode/pull/38060) – Implements support for the documented global `tools` deny pattern (e.g. `{"mymcp_*": false}`) so all disabled MCP tools are fully omitted from LLM tool call requests.
4. **#34256 [CLOSED] fix(server): reject foreign directory hints before instance lookup** (https://github.com/anomalyco/opencode/pull/34256) – Resolves the cross-TUI directory event leak bug by blocking invalid foreign directory context hints at the server layer before project instance lookup.
5. **#34246 [CLOSED] feat(tui): add `tool_output_expanded_default` option** (https://github.com/anomalyco/opencode/pull/34246) – New TUI config toggle that sets all tool outputs to render expanded by default, eliminating the need for users to manually click to view full execution results.
6. **#34210 [CLOSED] feat: project archiving** (https://github.com/anomalyco/opencode/pull/34210) – Adds non-destructive project archiving functionality, letting users remove old projects from the home screen without deleting their underlying local session data.
7. **#34204 [CLOSED] feat(tui): collapsible user and assistant messages** (https://github.com/anomalyco/opencode/pull/34204) – Introduces click-to-collapse behavior for all historical user and assistant chat messages in the TUI, reducing visual clutter for long running sessions.
8. **#34188 [CLOSED] fix(core): migrate legacy local databases** (https://github.com/anomalyco/opencode/pull/34188) – Patches 3 widely reported legacy local database migration bugs that caused missing historical session data for users upgrading from pre-1.17 versions.
9. **#39201 [OPEN] docs(providers): add Rapid-MLX as a local OpenAI-compatible provider** (https://github.com/anomalyco/opencode/pull/39201) – Adds official documentation support for Rapid-MLX, the Apple Silicon-native MLX inference runtime, alongside existing documented local runtimes like Ollama and LM Studio.
10. **#34174 [CLOSED] fix(app): scope review pane state per session** (https://github.com/anomalyco/opencode/pull/34174) – Fixes a long-standing UX bug where the code review pane open/closed state was global across all sessions, instead of being preserved individually per user session.

---

## 5. Feature Request Trends
The top requested feature directions this period are:
1. TUI personalization: A clear user demand for fully configurable default UI behaviors, covering tool output expansion, message collapsing, permission prompt sizing, and fullscreen permission handling.
2. Session persistence robustness: Requests to decouple session metadata from absolute file paths to prevent data loss during project directory restructuring.
3. Native usage dashboard: Users want built-in quota tracking for all their connected LLM providers instead of being forced to check external third-party dashboards.
4. Improved large input handling: Expandable, editable views for auto-summarized pasted content in prompts.
5. Expanded local LLM ecosystem support: Community submissions to add documentation and native compatibility for more local inference runtimes optimized for Apple Silicon and consumer hardware.

---

## 6. Developer Pain Points
Recurring high-priority frustrations for OpenCode developers:
1. A months-old unpatched clipboard copy regression that breaks a core, daily-used workflow for most desktop users.
2. Wave of cross-platform UI freeze/crash regressions introduced in recent v1.18.x desktop releases, with multiple users reporting total unresponsiveness after basic project operations.
3. Persistent MCP integration pain points, including schema mismatches, missing tool filtering, and broken legacy MCP support.
4. No native guardrails against infinite tool call loops, requiring manual user intervention to break unproductive agent execution.
5. Irrecoverable loss of historical session data for trivial user actions like moving or renaming a project directory, with no warning or recovery path.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-28
This digest covers all high-impact updates to the earendil-works/pi AI coding agent tooling from the last 24 hours.

---

## 1. Today's Highlights
No new official releases shipped today, but the community delivered 15+ merged fixes and in-progress core feature work focused on provider compatibility, extension API improvements, and longstanding TUI UX bugs. A 10-vote top feature request to make in-session model configuration changes ephemeral by default continued to gather consensus, alongside parallel work on a new SQLite-backed full-text search system for local Pi session history. Multiple enterprise-focused interoperability fixes for AWS Bedrock, Z.AI, and Anthropic gateway routing are already in review to unblock self-hosted and corporate Pi deployments.

## 2. Releases
No new stable or pre-release versions of Pi were published in the 24-hour tracking window.

## 3. Hot Issues
1. [#5263 Make in-session model and thinking-level changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263): Open, 10 comments, 10 👍 — The highest voted active issue requests that ad-hoc per-session model and reasoning depth changes no longer persist globally, eliminating accidental permanent config drift. Community members widely agreed this would reduce support burden and match expected local session behavior.
2. [#5023 [bug] terminal scrolls to beginning without reason](https://github.com/earendil-works/pi/issues/5023): Closed, 10 comments — A 2-month-old long running bug that caused random unprompted terminal jumps mid-agent execution was marked resolved, with users confirming the disruptive random buffer jumps no longer occur for their long-running sessions.
3. [#6747 An API for enhancing agent message markdown](https://github.com/earendil-works/pi/issues/6747): In progress, 8 comments — Extension maintainers are pushing for an official API to mutate rendered agent message output without modifying the raw LLM input payload, to enable rich features like LaTeX formula rendering and embedded charts.
4. [#7161 anthropic-messages never sends x-client-request-id, unlike all OpenAI paths](https://github.com/earendil-works/pi/issues/7161): Open, 4 comments — This bug breaks session affinity for users running Anthropic workloads behind proxies/gateways that rely on the standard `x-client-request-id` header to route traffic between multiple Claude accounts. It is a high-priority fix for self-hosted multi-account Pi deployments.
5. [#7143 Z.AI providers send max_completion_tokens, which Z.AI ignores](https://github.com/earendil-works/pi/issues/7143): Closed, 4 comments — The Z.AI / GLM API stack silently ignores the OpenAI-standard `max_completion_tokens` parameter, causing unconstrained output and unexpected mid-turn truncation for Pi users, a pain point that impacted all Chinese regional Pi deployments using local model providers.
6. [#7132 Set AI_AGENT for child process attribution](https://github.com/earendil-works/pi/issues/7132): Closed, 4 comments — This request aligns Pi with the emerging industry standard `AI_AGENT` environment variable convention adopted by Claude Code and other coding tools, letting child processes identify their calling agent for telemetry and permission workflows.
7. [#7170 Support for aws (bedrock) credential_process](https://github.com/earendil-works/pi/issues/7170): Open, 2 comments — Enterprise AWS users relying on SSO and external credential generation tools are currently blocked from using Pi's Bedrock integration, as the SDK does not respect the `credential_process` rule in AWS config files.
8. [#7132 Extension hook request: pre_response / before_send_message gate](https://github.com/earendil-works/pi/issues/7137): Closed, 2 comments — Governance and security teams requested a new extension hook to audit, redact, or block agent output before it is sent to end users, a required feature for regulated industry deployments.
9. [#7195 Extensions don't load if directory is a symlink](https://github.com/earendil-works/pi/issues/7195): Open, 1 comment — A bug breaks dotfile management workflows for power users who symlink their Pi extensions directory to sync custom extensions across multiple machines.
10. [#7186 Package Report: pi-setup-custom-providers](https://github.com/earendil-works/pi/issues/7186): Closed, 1 comment — Community flag for a malicious abandoned third-party extension whose repository no longer exists, prompting maintainers to add it to the official unsafe package blocklist.

## 4. Key PR Progress
1. [#7163 feat: search index sqlite](https://github.com/earendil-works/pi/pull/7163): Open WIP PR adding a SQLite-backed FTS5 full text search implementation for session history, replacing the current in-memory full session load workflow for massive performance improvements on libraries with 1000+ past sessions.
2. [#7174 fix(ai): send max_tokens for Z.AI providers](https://github.com/earendil-works/pi/pull/7174): Open PR resolving #7143, adding a compatibility flag to send the Z.AI-supported `max_tokens` parameter instead of the OpenAI-specific `max_completion_tokens` to prevent unconstrained output and mid-turn truncation.
3. [#7172 fix(ai): send x-client-request-id on anthropic-messages](https://github.com/earendil-works/pi/pull/7172): Merged PR fixing #7161, adding the standard session affinity header to all Anthropic API requests to restore compatibility with multi-account gateway deployments.
4. [#7173 fix(ai): rename OpenCode Zen Go display name to OpenCode Go](https://github.com/earendil-works/pi/pull/7173): Merged PR resolving #7157, correcting the misleading provider display name mismatch that appeared in `pi --list-models` output.
5. [#7191 feat(extensions): expose ctx.scopedModels to extensions](https://github.com/earendil-works/pi/pull/7191): Merged PR adding a new read-only `ctx.scopedModels` API surface for extensions, letting third-party model picker implementations access the full list of per-session enabled models.
6. [#7169 fix(coding-agent): dedupe byte-identical context files in the cwd->root walk](https://github.com/earendil-works/pi/pull/7169): Merged PR resolving #7171, eliminating duplicate loading of identical AGENTS.md/CLAUDE.md files across nested worktrees or directory levels.
7. [#7176 fix(ai): prefer configured Bedrock profile over ambient AWS keys](https://github.com/earendil-works/pi/pull/7176): Open PR fixing a longstanding UX bug where Pi's explicitly saved AWS Bedrock profiles were ignored if the user had global AWS CLI environment variables set.
8. [#7178 feat(coding-agent): show status when toggling tool-output expansion](https://github.com/earendil-works/pi/pull/7178): Merged PR adding transient status feedback for the Ctrl+O tool output expansion toggle, mirroring existing behavior for the thinking block visibility toggle to eliminate user confusion.
9. [#7184 fix(ai): strip multimodal media markers from tool results to prevent tokenizer crashes](https://github.com/earendil-works/pi/pull/7184): Merged PR adding sanitization logic to remove stray unpaired `|image|` media markers from tool outputs that caused hard crashes for multimodal model tokenizers.
10. [#7168 feat: auth print](https://github.com/earendil-works/pi/pull/7168): Merged PR adding two new non-interactive CLI commands `auth print-api-key` and `auth print-bearer-token` to let users and automation scripts inspect active provider credential state for debugging proxy/gateway setups.

## 5. Feature Request Trends
The top requested feature directions from this 24-hour window are:
1. **Extension API expansion**: Maintainers and third-party developers are prioritizing new explicit hooks (pre_response output gate, custom compaction lifecycle) and exposed state (session scoped models, terminal input readiness signals) to support rich custom extension use cases.
2. **Session history usability**: Full-text search across local past sessions built on SQLite storage was identified as the highest impact end-user quality of life improvement for power users with large local session libraries.
3. **Standard interoperability**: Aligning Pi with cross-tool industry conventions (the `AI_AGENT` env var, AWS Bedrock native auth flows, standard session affinity headers) remains a top priority for enterprise deployments.
4. **Predictable defaults**: Consensus is growing for the ephemeral per-session config change proposal to eliminate accidental global configuration drift for new users.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the Pi community:
1. **Provider compatibility edge cases**: Multiple recent bugs confirm that deviations from the OpenAI API spec across regional third-party model providers (custom max token parameter names, missing support for standard headers) cause silent, hard-to-debug failures including truncated outputs and session affinity breakdowns.
2. **Extension management edge cases**: The extension subsystem has multiple documented gaps including broken symlinked extension directory detection, failed git installs that leave partial broken directories, and inconsistent dependency resolution rules between npm and git sourced extensions.
3. **TUI performance at scale**: Long-running large sessions with 1000+ lines of transcript see high CPU usage from thrashing visible-width calculation caches, and unnecessary full 1s interval re-renders that cause degraded performance for users accessing Pi over low-bandwidth remote PTY connections.
4. **Hidden state UX gaps**: Users consistently report confusion from missing feedback for UI toggles that do not have explicit status indicators, and persistent settings that reset unexpectedly across Pi restarts.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-28
---
## 1. Today's Highlights
This 24-hour window sees the official release of the v0.21.0 nightly build, full resolution of 4 recently disclosed high-severity MCP security vulnerabilities, and a 75.2% verified resolution rate on the latest SWE-bench v2 benchmark POC run. The development team shipped 20+ PRs focused on Web Shell UX upgrades, CI reliability hardening, and long-context streaming stability, addressing multiple top-reported user pain points around VS Code agent connectivity and headless generation failures. A new CI deduplication workflow is now in review to eliminate duplicate E2E failure issue spamming that previously cluttered the repository backlog.

## 2. Releases
All new releases from the last 24 hours:
- **v0.21.0-nightly.20260727.c003e1718** (Official production nightly): Includes a critical CLI fix to standardize insight day/hour calculations to local time across all client instances, plus ongoing refactoring for the autofix module. [GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260727.c003e1718)
- **dsw-manual-poc-20260727-2** (Non-production benchmark prerelease): Completed full 500-case evaluation on `swe-bench/swe-bench-verified@2`, achieving 376 resolved issues for a 75.2% pass rate, currently marked quarantined pending final validation. Benchmark baseline pinned to v0.20.0-nightly.20260722.b98306b7e.
- **dsw-manual-poc-20260727-1** (Non-production benchmark prerelease): Parallel validation benchmark run using the same v0.20.0 baseline for cross-checking performance consistency.

## 3. Hot Issues
10 most noteworthy updated issues, prioritized by impact:
1. [#7769](https://github.com/QwenLM/qwen-code/issues/7769) [CLOSED, P1 Security] MCP tool denial bypass via new SSE session: Critical bug where user-denied MCP tool calls could be retried across new SSE sessions to bypass permission controls. Patched within 24 hours of disclosure to prevent unauthorized tool execution.
2. [#7768](https://github.com/QwenLM/qwen-code/issues/7768) [CLOSED, P1 Security] Unrestricted `mcp_client_tool_call` IPC access: Privileged Electron IPC method exposed no user authorization checks for MCP tool execution, fully resolved to eliminate remote exploit attack surface on desktop clients.
3. [#7056](https://github.com/QwenLM/qwen-code/issues/7056) [CLOSED, P2 Bug] VS Code ACP process exit 0 crash: Widely reported Windows-specific failure in the 0.19.11 VS Code companion extension that broke agent connectivity for hundreds of users, now fixed for the upcoming stable 0.21 release.
4. [#7697](https://github.com/QwenLM/qwen-code/issues/7697) [CLOSED, P2 Bug] Unity MCP connectivity gap: Qwen Code VS Code failed to connect to Unity MCP servers while competing tools like Claude Code worked out of the box, the fix unlocks game development use cases for Unity users.
5. [#7832](https://github.com/QwenLM/qwen-code/issues/7832) [OPEN, P1 Bug] YOLO mode mid-stream socket close no retry: Headless mode fails consistently for large 500+ line code generation tasks due to unretried SSE socket disconnects, blocking unattended automation workflows for DevOps users.
6. [#7835](https://github.com/QwenLM/qwen-code/issues/7835) [OPEN, P2 Bug] Sub-agent user question forwarding gap: Sub-agents that need user input have no mechanism to forward prompts to the end user, leaving multi-agent workflows hanging indefinitely.
7. [#7841](https://github.com/QwenLM/qwen-code/issues/7841) [OPEN, P2 Bug] Silently retried exhausted quota 429 errors: Permanently drained model API quota was misclassified as a transient rate limit, triggering hidden infinite retries with zero user-facing error feedback.
8. [#7771](https://github.com/QwenLM/qwen-code/issues/7771) [OPEN, P2 Bug] Persisted MCP config not loaded on startup: Custom saved MCP server settings do not load after Qwen Desktop restarts, breaking custom toolchain setups for power users.
9. [#7819](https://github.com/QwenLM/qwen-code/issues/7819) [OPEN, P2 Bug] Safe mode drops valid ACP MCP servers: The `--safe-mode` flag incorrectly removes MCP servers supplied via ACP session requests, breaking managed enterprise deployment workflows.
10. [#6762](https://github.com/QwenLM/qwen-code/issues/6762) [OPEN, P2 Feature Request] Skill Context Lifecycle Management: Top-requested context performance feature that adds ability to unload or compress stale permanently loaded SKILL.md entries from long conversation history to reduce context bloat.

## 4. Key PR Progress
10 highest-impact updated pull requests:
1. [#7792](https://github.com/QwenLM/qwen-code/pull/7792) feat(ci): Deduplicate E2E failure issues: Reworks the CI failure workflow to reuse existing open issues for matching E2E test failures instead of creating new tickets, eliminating the 10+ duplicate spurious issues filed per 24 hours seen recently.
2. [#7827](https://github.com/QwenLM/qwen-code/pull/7827) fix(safe-mode): Preserve caller-supplied MCP servers: Resolves issue #7819, keeping MCP servers passed via ACP session or CLI `--mcp-config` when `--safe-mode` is enabled, only blocking unvetted local configs from user `settings.json` to make safe-mode usable for enterprise deployments.
3. [#7731](https://github.com/QwenLM/qwen-code/pull/7731) feat(web-shell): Full Git workflow suite: Adds an IntelliJ-style branch picker, commit dialog, and native PR creation flow to Web Shell, removing the need to switch to external Git clients during browser-based development.
4. [#7859](https://github.com/QwenLM/qwen-code/pull/7859) feat(web-shell): Native Live Voice for macOS: Adds an opt-in global double-press Command shortcut to start/resume voice conversations across any macOS app, drastically improving hands-free workflow UX.
5. [#7826](https://github.com/QwenLM/qwen-code/pull/7826) feat(channels): Dispatch GitHub notifications by reason: Implements granular routing for GitHub webhook events, handling PR reviews, assignments, and mentions via dedicated logic instead of treating all notifications as generic comments for far more accurate bot automation.
6. [#7815](https://github.com/QwenLM/qwen-code/pull/7815) feat(core): Persist and replay Goal v3 state: Adds durable snapshotting for the new Goal v3 workflow engine, preserving full task state and transcript across app restarts to eliminate lost progress for long-running complex agent tasks.
7. [#7809](https://github.com/QwenLM/qwen-code/pull/7809) feat(core): Full-resolution image zoom tool: New multimodal capability that lets agents crop and magnify high-resolution image regions, bypassing context limits to inspect small details in screenshots, diagrams, and generated artwork.
8. [#7499](https://github.com/QwenLM/qwen-code/pull/7499) fix(acp-bridge): Preserve event attribution through turn compaction: Fixes ACP event ID tracking to retain `promptId` and `originatorClientId` on merged turn events, ensuring accurate transcript replay for multi-client shared collaborative sessions.
9. [#7414](https://github.com/QwenLM/qwen-code/pull/7414) feat(triage): Revert-pattern high-risk path detection: Data-backed PR safety gate trained on 111 historical repository revert commits, that flags PRs with a high statistical probability of introducing regressions to reduce bad merges to main.
10. [#7810](https://github.com

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-07-28
---
## 1. Today's Highlights
The 24-hour window saw massive progress toward the v0.9.2 release candidate, with 24 merged and active PRs delivering over a dozen user-facing features, critical bug fixes, and devops reliability improvements. Top community-contributed changes include a long-requested setting for always-expanded reasoning blocks that resolves persistent SSH/tmux Space key capture pain points, and a compatibility patch for the popular avante.nvim code assistant plugin. 3 out of 4 recently updated issues have been fully resolved, with one high-priority unpatched UX bug filed for foreground shell interruption behavior.

## 2. Releases
No new official releases were published in the past 24 hours. The core team is validating the v0.9.2 release candidate for upcoming general availability, with a full pass of lint, test and type checks in progress.

## 3. Hot Issues
Only 4 issues were updated in the past 24 hours, all classified as v0.9.2 milestone priority:
1. **#4925 [CLOSED] Add thinking_default_expanded setting for always-expanded reasoning blocks** | [Link](https://github.com/Hmbown/DeepSeek-TUI/issues/4925)
   Matters: Solves two overlapping accessibility pain points for remote power users: Space key capture over SSH/tmux, and user preference to view full AI reasoning output without manual interaction, with positive feedback from the SSH user segment already posted in comments.
2. **#4907 [CLOSED] ci(web): main push always fails because deploy trigger contradicts manual-only preflight** | [Link](https://github.com/Hmbown/DeepSeek-TUI/issues/4907)
   Matters: Was a critical release blocker that broke all main branch CI green status, despite passing lint, test and build steps, now fully resolved to unblock RC validation.
3. **#4751 [CLOSED] Settings IA rework: Fleet/Models section boundaries** | [Link](https://github.com/Hmbown/DeepSeek-TUI/issues/4751)
   Matters: Fixes confusing misplaced UI controls in the settings menu, removes unused legacy fallback model options, and aligns the settings information architecture with user workflows as documented in submitted user screenshots.
4. **#4930 [OPEN] Enter during foreground shell should detach it before steering** | [Link](https://github.com/Hmbown/DeepSeek-TUI/issues/4930)
   Matters: High-priority unpatched UX bug that causes unexpected, confusing behavior when users try to interrupt long-running blocking shell commands mid-turn, currently tagged for v0.9.2 triage.

## 4. Key PR Progress
1. **#4928 [CLOSED] feat(tui): add thinking_default_expanded setting** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4928)
   Implements the user-requested toggle to render reasoning blocks expanded by default, fully resolving SSH/tmux Space key accessibility issues while retaining existing Space hotkey toggle functionality.
2. **#4929 [OPEN] fix(acp): preserve numeric JSON-RPC IDs for avante.nvim compatibility** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4929)
   Corrects a longstanding ACP protocol incompatibility with avante.nvim by retaining original numeric JSON-RPC request IDs instead of coercing them to strings, matching Lua table key type expectations used by the plugin.
3. **#4908 [CLOSED] I18n(zh-Hans): update simplified-Chinese translations to match latest en.json** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4908)
   Delivers a full quality pass for 1134 zh-Hans translation keys, verified by a dedicated review agent, eliminating all untranslated or incorrectly localized UI text for Chinese-speaking users.
4. **#4467 [CLOSED] Feat/opencode zen provider** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4467)
   Adds first-class support for the OpenCode Zen model family across Responses, Anthropic Messages, and Chat Completion routing paths, with custom x-api-key authentication and dedicated missing-key error messaging.
5. **#4924 [CLOSED] feat(fleet): saved exact Fleets + reasoning Router** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4924)
   Introduces persistent, frozen custom model route collections with collision detection and permission ceilings, plus a new dedicated reasoning load balancer that auto-routes requests to optimal model backends.
6. **#4927 [CLOSED] fix(billing): dispatch-receipt classification, Moonshot/MiniMax product truth** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4927)
   Prevents incorrect double-billing after mid-turn provider switches, corrects product SKU classification for Moonshot and MiniMax API paid plans, and adds per-route environment URL scoping for deploy customization.
7. **#4931 [OPEN] Migrate QA PTY test harness from vt100 to rio-vt** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4931)
   Upgrades the TUI rendering test engine to use Rio's production-grade terminal parser, eliminating longstanding edge case flakiness from the older lightweight vt100 test library.
8. **#4920 [CLOSED] fix: kimi-k3 selection — sticky model memory, lying resolve, missing catalog ids** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4920)
   Resolves a user-facing bug where explicit `--model kimi-k3` launch flags were ignored, falling back to the older kimi-k2.7-code model even when k3 was present in the user's model catalog.
9. **#4932 [CLOSED] test(cli): satisfy strict all-target clippy** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4932)
   Passes 100% of Rust 1.97+ strict linter checks across all test and release target builds, ensuring the v0.9.2 release gate runs with zero lint errors.
10. **#4911 [OPEN] v0.9.2 release candidate integration (umbrella, draft)** | [Link](https://github.com/Hmbown/DeepSeek-TUI/pull/4911)
    Umbrella aggregation PR with 82 commits ahead of main, hosting centralized CI and code review for all v0.9.2 candidate changes before merge to main.

## 5. Feature Request Trends
1. Remote/headless UX optimization: Top user request is for configurable reasoning block default states to avoid terminal key capture issues over SSH/tmux connections.
2. Expanded multi-model support: Community contributors are actively delivering first-class integration for new Chinese model providers, with parity for billing, routing and authentication workflows.
3. Persistent workspace management: High demand for saved custom model fleet configurations and auto-resume functionality for archived user sessions.
4. TUI accessibility improvements: Community has requested full contrast audits, screen reader support, and consistent visual theme vocabulary for better usability across terminal environments.

## 6. Developer Pain Points
1. CI pipeline fragility: Contradictory workflow trigger rules for the web deploy step broke all main branch builds, wasting hours of developer debug time on false positive failures.
2. Cross-plugin protocol incompatibility: Implicit type coercion for JSON-RPC IDs broke integration with third-party ACP clients built in Lua that use strict typed table key lookups.
3. Linter version drift: New Rust 1.97 clippy rules introduced uncaught lint failures in test-only code paths that were skipped during ordinary PR CI runs, requiring last-minute fixes before the release gate.
4. Stale session state bugs: Cached provider model configurations overriding explicit CLI launch flags caused subtle user-facing bugs that were hard to reproduce in standard test environments.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*