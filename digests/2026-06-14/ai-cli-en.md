# AI CLI Tools Community Digest 2026-06-14

> Generated: 2026-06-13 23:04 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Agent Ecosystem Comparison Report
*Data reference period: 2026-06-14 community digests for 8 leading AI developer CLI tools*

---

## 1. Ecosystem Overview
As of mid-June 2026, the global AI code CLI/agent tool landscape is shifting away from rapid, demo-focused feature expansion to prioritize production-grade reliability, cross-standard interoperability, and enterprise adoption hardening after 18 months of breakneck innovation. Nearly all major tools are converging on the Model Context Protocol (MCP) as a universal tool integration standard, resolving longstanding user pain points including unplanned cost overruns, unhandled runtime crashes, and cross-platform compatibility gaps. There is a clear market segmentation between big-tech backed offerings optimized for mass professional developer audiences, and independent community-led tools targeting self-hosted, region-specific, and power user segments. Recent 24-hour activity across the ecosystem shows far more resources allocated to bug fixes, security hardening, and UX polish than new high-profile experimental features, as vendors aim to turn early adopter excitement into long-term enterprise deployments.

---

## 2. Activity Comparison
| Tool Name | Active updated hot issues (24h) | Merged / active PRs (24h) | Releases published (24h) | Release notes |
|---|---|---|---|---|
| Claude Code | 10 | 4 | 1 Stable | v2.1.177 core stability patch |
| OpenAI Codex | 10 | 10 | 2 Alpha Pre-releases | Rust-native runtime v0.140.0-alpha.17/18 for sandbox and WSL compatibility |
| Gemini CLI | 10 | 10 | 1 Nightly | v0.48.0-nightly with MCP reliability fixes |
| GitHub Copilot CLI | 6 | 0 | 2 Stable | v1.0.62 series UX overhauls for diff navigation and plugin marketplace support (all recent PRs already shipped to production) |
| Kimi Code CLI | 2 | 5 | 0 | No public release, 4 critical bug fixes merged to main for next patch rollout |
| OpenCode | 10 | 10 | 2 Stable | v1.17.5/6 MCP spec compatibility and enterprise OIDC support patches |
| Pi | 10 | 10 | 1 Stable | v0.79.3 high-severity context window / billing hazard fix |
| Qwen Code | 10 | 10 | 0 | Failed nightly build v0.18.0, no user-facing artifacts released |
| DeepSeek TUI (CodeWhale) | 10 | 10 | 1 Stable | v0.8.59 official full project rebrand to CodeWhale |

---

## 3. Shared Feature Directions
The following cross-tool user requirements appear across 5+ community trackers, representing high-priority industry-wide demand:
1. **MCP reliability and full spec compliance**: All 8 tools are actively shipping fixes for MCP auto-reconnection, invalid third-party schema normalization, preload of tools on session startup (instead of lazy discovery), and alignment with the latest official MCP client capability standards.
2. **Transparent billing and user-controlled cost guardrails**: Multiple tools have recently addressed severe unplanned spend incidents (Claude Code's $1k unbounded fanout bug, Pi's broken Claude cache TTL that doubled inference costs), with widespread user demand for hard per-session spending caps.
3. **Cross-platform and remote workflow stability**: Teams are prioritizing fixes for WSL path translation, Linux ARM64 runtime panics, SSH session compatibility, and VS Code Remote SSH orphaned process leaks to support distributed developer environments.
4. **Exposed observability and context control hooks**: Power users across all communities are requesting native visibility into remaining token usage, unique session identifiers for custom logging, standardized ignore file semantics (`.gitignore`/`.copilotignore` equivalent), and AST-aware code parsing to reduce unnecessary token bloat for large codebases.
5. **Agent Client Protocol (ACP) alignment**: Multiple tools are adding official compliance with the ACP standard for seamless third-party IDE integration (Zed, Sublime, etc.) to break lock-in to VS Code.

---

## 4. Differentiation Analysis
Tools fall into three distinct clusters with divergent development priorities:
1. **Big Tech Backed Tier (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI)**: Feature focus on deep native integration with their parent vendor's existing ecosystem (GitHub repo access for Copilot, Vertex AI routing for Gemini, Anthropic model stack optimization for Claude). Target users are mass market professional developers and regulated enterprise teams. Technical approach prioritizes backwards compatibility, frequent regression patches, and authentication tied to existing platform enterprise accounts.
2. **Regional Chinese Independent Tier (Kimi Code CLI, Qwen Code, DeepSeek CodeWhale)**: Feature focus on broad native support for local domestic model providers (GLM, MiniMax, StepFun), low-cost hobbyist tiers, and full Chinese language localization. Target users are regional developers, price-sensitive startups, and self-hosted LLM power users. Technical approach prioritizes Bring Your Own Model (BYOM) flexibility over tight native model lock-in.
3. **Niche Independent Tier (Pi, OpenCode)**: Feature focus on self-hosted enterprise SSO support (OIDC), custom user-defined slash command automation, and advanced multi-agent orchestration for large-scale refactoring workloads. Target users are security-sensitive on-prem DevOps teams and power user tinkerers. Technical approach uses fully open, minimal lock-in architectures with no mandatory cloud account requirements for core functionality.

---

## 5. Community Momentum & Maturity
- **Highest maturity & largest active communities**: Claude Code, OpenAI Codex, and GitHub Copilot CLI have the broadest production user bases, with the highest volume of upvotes, bug reports, and feature requests from professional developers. All three have multi-year track records of stable, enterprise-ready releases.
- **Rapidly iterating high-growth momentum**: OpenCode, Pi, Qwen Code, and DeepSeek CodeWhale all have 10+ active/merged PRs in the 24-hour window, with fast roadmap execution and fast-growing contributor bases. Qwen Code recorded the highest single-thread engagement of the entire dataset, with 129 community comments on its proposed free tier policy adjustment, demonstrating extremely high user loyalty in its regional market.
- **Steady moderate activity**: Gemini CLI maintains a consistent, low-drama Google-backed development pace, focused on incremental reliability improvements without rushed feature launches.
- **Low public activity window**: Kimi Code CLI only reported 2 new community issues in the 24-hour period, with no public releases, indicating behind-the-scenes work on critical stability patches before its next public rollout.

---

## 6. Trend Signals
These observations deliver actionable reference value for technical decision-makers and developers:
1. MCP has fully emerged as the de facto universal open standard for AI agent tooling interoperability. Developers building custom third-party AI tools only need to implement the public MCP spec to get native compatibility across all 8 major AI CLI tools, with no per-tool integration work required.
2. Unbounded agent fanout without explicit user cost guardrails is no longer considered acceptable for production use. Teams evaluating AI CLI tools for enterprise deployment should prioritize solutions with configurable hard spending limits over raw new feature richness to avoid unexpected large billing incidents.
3. The ACP IDE integration standard is on track to deliver seamless cross-editor AI coding workflow compatibility across VS Code, Zed, and other popular editors within the next 3-6 months, eliminating the need for teams to rewrite custom automation for different developer environments.
4. Independent regional tools now offer fully competitive functionality to big-tech offerings for use cases requiring data residency, broad multi-model support, or full on-prem deployment, and no longer force teams to compromise on core agent functionality to meet compliance requirements.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-06-14)
---
## 1. Top Skills Ranking
Ranked by alignment with highest-activity community issue requests, contributor investment, and recency of maintenance (raw PR comment counts are not surfaced in the provided dataset):
1. **Agent-Creator Meta-Skill (PR #1140, Open)**: Adds a no-code skill building framework for creating task-specific dedicated agent sets, paired with fixes for multi-parallel tool call evaluation and native Windows path support. It directly addresses widely reported limitations of the existing skill-creator tooling, and references closed community feature request #1120. [anthropics/skills#1140](https://github.com/anthropics/skills/pull/1140)
2. **AURELION Skill Suite (PR #444, Open)**: Four connected cognitive skills including structured thinking templates, memory management, knowledge base mapping, and agent governance guardrails for professional enterprise knowledge work, filling a large unmet gap in the existing skills collection for high-stakes use cases. [anthropics/skills#444](https://github.com/anthropics/skills/pull/444)
3. **Testing-Patterns Skill (PR #723, Open)**: A full-stack testing reference skill that covers the complete testing trophy workflow, including unit testing, React component testing, end-to-end testing, and production observability best practices for engineering teams. [anthropics/skills#723](https://github.com/anthropics/skills/pull/723)
4. **ODT/OpenDocument Skill (PR #486, Open)**: Adds full support for reading, parsing, creating, and templating ISO-standard ODF files (.odt, .ods) natively used by LibreOffice and open source office suites, addressing longstanding user requests for non-Microsoft proprietary document format support. [anthropics/skills#486](https://github.com/anthropics/skills/pull/486)
5. **Document-Typography Skill (PR #514, Open)**: Automated typographic quality control tool that eliminates orphan line wraps, stranded section headers at page breaks, and auto-corrects numbering alignment for all generated documents, solving a near-universal pain point for users producing polished formal output. [anthropics/skills#514](https://github.com/anthropics/skills/pull/514)
6. **Codebase Inventory Audit Skill (PR #147, Open)**: A 10-step systematic workflow for scanning codebases to identify orphaned code, unused assets, documentation gaps, and infrastructure bloat, outputting a single standardized CODEBASE-STATUS.md audit report. [anthropics/skills#147](https://github.com/anthropics/skills/pull/147)
7. **Shodh Persistent Memory Skill (PR #154, Open)**: A persistent cross-conversation context management system that automatically surfaces relevant prior user memories for new interactions, eliminating the need for users to re-share context across separate Claude sessions. [anthropics/skills#154](https://github.com/anthropics/skills/pull/154)

---
## 2. Community Demand Trends
Distilled from the highest-comment, highest-upvote public issues:
1. **Team/Org Native Skill Sharing**: The top requested feature (Issue #228, 14 comments, 7 👍) is built-in organization-wide shared skill libraries, eliminating the current manual workflow of exporting, distributing, and re-uploading .skill files across team members.
2. **Skill Creator Tooling Reliability**: 3 separate high-engagement issues (combined 18 comments) report the critical bug where `run_eval.py` returns 0% recall for all test queries, breaking the entire automated skill description optimization loop for self-serve skill developers.
3. **Windows Native Support**: Multiple overlapping bug reports confirm that all core skill-creator scripts currently fail on native Windows environments due to unhandled Unix path assumptions, missing `PATHEXT` resolution, and incorrect encoding handling.
4. **Enterprise Ecosystem Interoperability**: Users are actively requesting compatibility for self-hosted deployment targets (AWS Bedrock), native SharePoint access, and exposure of existing skills via the Model Context Protocol (MCP) for seamless integration with external tools.
5. **Security Hardening**: The community is prioritizing fixes to prevent namespace impersonation attacks for community-distributed skills, and eliminate duplicate conflicting skills installed across the official plugin bundles.

---
## 3. High-Potential Pending Skills
These active PRs have multi-contributor iterative updates and no remaining open blockers, with very high likelihood of landing in the next stable release:
1. **Full `run_eval.py` 0% Recall Bug Fix (PR #1298, Open)**: A comprehensive end-to-end fix submitted 2026-06-10 that addresses all root causes of the broken evaluation loop, building on 4 prior incremental community PRs that resolved individual partial edge cases. [anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298)
2. **YAML Validation and UTF-8 Safety Hardening (PRs #361, #362, Open)**: Two paired PRs that add pre-parsing checks for unquoted special YAML characters, plus safe UTF-8 byte length validation to prevent CLI panics when processing non-ASCII characters in skill metadata. [anthropics/skills#361](https://github.com/anthropics/skills/pull/361), [anthropics/skills#362](https://github.com/anthropics/skills/pull/362)
3. **DOCX Skill Tracking Change Corruption Fix (PR #541, Open)**: A targeted minimal change fix that resolves document corruption when adding tracked changes to DOCX files with pre-existing bookmarks, caused by overlapping hardcoded OOXML w:id values. [anthropics/skills#541](https://github.com/anthropics/skills/pull/541)

---
## 4. Skills Ecosystem Insight
The Claude Code skills community’s most concentrated high-priority demand is production-grade, frictionless self-serve skill development tooling paired with native team sharing features, to allow enterprise and independent developer users to build, test, distribute, and run custom skills aligned with their existing local tech stacks without manual workarounds.

---

# Claude Code Community Digest | 2026-06-14
---
## 1. Today's Highlights
The latest stable v2.1.177 release rolled out over the last 24 hours alongside a batch of long-awaited bug fixes for core stability, MCP reliability, and stale issue automation workflows. Two high-severity unplanned regressions popped up for macOS users, including widespread invalid Claude Fable 5 model access errors, alongside a critical new reported bug that allowed workflow fan-out to generate ~$1k in unapproved charges with no user-configured cost caps. The community's top-voted 97-upvote request for GitHub Copilot-style diff review UI in the VS Code extension also received new activity this window.

## 2. Releases
- **v2.1.177**: [Latest official stable release](https://github.com/anthropics/claude-code/releases/tag/v2.1.177) following 2.1.176, shipping accumulated fixes for regressions identified in the prior version per user reports.

## 3. Hot Issues
Top 10 high-impact discussions from the last 24 hours:
1. [#33932: VS Code Diff Review UI parity with GitHub Copilot Edits](https://github.com/anthropics/claude-code/issues/33932): 97 👍, 21 comments, the highest-voted open feature request. Users are pushing for native side-by-side edit previews that let them approve, reject, or modify individual code changes before Claude writes to disk, a missing UX gap for production use in shared codebases.
2. [#68285: Uncapped workflow fan-out causing $1k in unexpected auto-charges](https://github.com/anthropics/claude-code/issues/68285): Critical severity new bug where multi-agent workflow defaults inherit premium tier access with no per-agent cost limits, alarming users building autonomous agent workflows who do not expect unbounded spending.
3. [#22632: Closed: Bun segfault after extended sessions](https://github.com/anthropics/claude-code/issues/22632): Long-running 4-month old bug finally resolved, fixing crashes that occurred after ~18 minutes of continuous Claude Code usage on Linux/macOS.
4. [#43177: Closed: MCP stdio auto-reconnect fix](https://github.com/anthropics/claude-code/issues/4317): Resolved 3-month old pain point where stdio MCP servers (like the popular Telegram plugin) would never recover after disconnecting, even as HTTP MCP connections already had built-in exponential backoff reconnection.
5. [#68121 + #68137: Widespread "invalid claude-fable-5 model" errors](https://github.com/anthropics/claude-code/issues/68121): Two separate new user reports from macOS terminal users on 2.1.170+ hitting access errors for the latest Fable model, indicating a post-update model routing regression affecting paid subscribers.
6. [#36678: Expose session ID and context window usage to the model](https://github.com/anthropics/claude-code/issues/36678): Open request with 7 comments from power users building custom observability and automation integrations, who want the Claude model itself to be aware of its current token remaining count and unique session identifier for logging and debugging.
7. [#42218: Closed: Plan Mode accidental execution fix](https://github.com/anthropics/claude-code/issues/42218): Resolved bug where Plan Mode would silently execute file edits instead of only generating plans, a high-impact fix that restores trust for users testing Claude on production repositories.
8. [#59498: Closed: Fix cd-prefixed command permission bypass](https://github.com/anthropics/claude-code/issues/59498): Critical security fix closing a gap where compound commands starting with `cd /path && <restricted command>` would slip past Claude's explicit bash allow/deny prompt system, preventing unintended writes or git pushes by sub-agents.
9. [#68311: Windows VS Code extension login failure](https://github.com/anthropics/claude-code/issues/68311): New open regression blocking all new Windows users from authenticating to the Claude Code VS Code extension post-update.
10. [#68316: macOS Desktop app freezing corruption](https://github.com/anthropics/claude-code/issues/68316): New bug causing the native macOS desktop app to lock up entirely, requiring users to perform a full app reset to restore functionality.

## 4. Key PR Progress
Only 4 PRs saw activity in the 24 hour window, all covered below:
1. [#26360 (Closed): Fix auto-closure of active issues](https://github.com/anthropics/claude-code/issues/26360): Claude Code-assisted merge that fixes the repo's stale triage bot, which was incorrectly auto-closing bug reports even when users were actively commenting and reproducing issues. The fix adds logic to remove stale labels when a human posts a new comment.
2. [#1 (Closed): Add formal SECURITY.md](https://github.com/anthropics/claude-code/pull/1): Long-running repo task merged to publish a public vulnerability disclosure policy, a required milestone for enterprise and regulated user adoption.
3. [#68239 (Open): Community contributed per-project theme plugin](https://github.com/anthropics/claude-code/pull/68239): New user-submitted feature that adds a SessionStart hook to read custom color/theme configuration from a project-local `.claude/settings.json` file, closing the long-standing request for workspace-specific UI customization.
4. [#58673 (Open): Draft WIP PR](https://github.com/anthropics/claude-code/pull/58673): Unfinished work-in-progress PR with no public description, marked as a placeholder draft as of this digest.

## 5. Feature Request Trends
The top requested functionality directions from recent issues are:
1. VS Code editor UX parity with competing AI coding tools, prioritizing inline diff review and granular edit approval flows
2. Expanded MCP ecosystem quality of life improvements, including full visibility of project-local MCP servers in the `/mcp` UI
3. Exposed observability hooks for power users, including native access to session identifiers, real-time context window usage metrics, and custom status line integrations
4. Explicit, user-configurable cost guardrails for multi-agent and workflow fan-out features to prevent unexpected spending
5. Persistent per-project configuration for UI themes, custom instructions, and model defaults

## 6. Developer Pain Points
Recurring high-frequency frustrations reported across recent issues:
1. Persistent Plan Mode unreliability: Multiple separate bug reports spanning 3+ months of Opus 4.x releases note that the model often ignores explicit Plan Mode constraints and silently executes unapproved edits, eroding trust for production usage.
2. MCP ecosystem instability: Historical gaps in auto-reconnection, hidden local server visibility, and idle process terminations make it hard to build stateful long-running plugins on the platform.
3. Post-update regressions: The recent 2.1.170+ rollout introduced multiple new unplanned regressions including model access failures, auth breaks, and desktop app corruption.
4. VS Code Remote SSH resource leaks: Orphaned Claude binary processes accumulate on remote servers after extension reload or network disconnect events, causing unmanaged memory bloat over long sessions.
5. No default cost guardrails: Multi-agent fan-out workflows have no built-in spending limits, leading to unexpected large charges that users did not consent to.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-14
---

## 1. Today's Highlights
Two new Rust-native pre-release builds of the Codex CLI runtime dropped overnight, alongside active development focused on cross-OS compatibility for WSL deployments and exec-server reliability. The highest-engagement long-running Windows sandbox bug affecting Codex CLI 0.133.0 was marked closed yesterday, following 51 comments of community debugging input. Multiple new Windows Desktop regressions impacting WSL agent functionality and Computer Use workflows are now top priority for both the community and OpenAI engineering teams.

## 2. Releases
Two alpha pre-releases for the Rust Codex CLI toolchain were published in the last 24 hours:
- [rust-v0.140.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.17)
- [rust-v0.140.0-alpha.18](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.18)
Both builds target sandbox stability, exec-server portability, and cross-OS execution functionality for early preview testers.

## 3. Hot Issues
1. [#24391 (CLOSED): Windows sandbox spawn setup refresh fails on Codex CLI 0.133.0](https://github.com/openai/codex/issues/24391) – The highest-engagement issue this cycle, with 51 comments and 26 upvotes, affecting all Windows Codex CLI users on version 0.133.0. Multiple community members confirmed the latest patch fixes the broken sandbox initialization workflow.
2. [#25243 (OPEN): macOS Codex relaunch loop exhausts syspolicyd file descriptors and blocks app launches](https://github.com/openai/codex/issues/25243) – A severe disruptive macOS bug with 25 comments that causes system-wide inability to launch any apps when triggered, affecting Pro tier users running the latest Codex desktop build.
3. [#24428 (OPEN): Codex responds too slowly when falling back to SSE from WebSocket](https://github.com/openai/codex/issues/24428) – A widespread performance complaint with 25 upvotes, impacting both native Codex CLI and third-party CLI integrations, with users reporting 5-10 second lag on all generations after WebSocket disconnections.
4. [#28103 (OPEN): Codex desktop 26.609.4994.0 MSIX missing Linux codex binary, breaks WSL agent mode](https://github.com/openai/codex/issues/28103) – A fresh high-impact regression from the latest Windows Store build, preventing thousands of WSL developers from using the native Linux agent execution workflow, with 3 comments and 2 upvotes from affected users.
5. [#27353 (OPEN): Project chat history disappeared after latest Codex app update](https://github.com/openai/codex/issues/27353) – A high-concern data loss bug for macOS users, with 6 comments reporting lost weeks of project session context immediately after the 26.608.12217 update rolled out.
6. [#25921 (OPEN): Codex Desktop continuously generates unlimited Crashpad pending dumps, growing +5GB per day](https://github.com/openai/codex/issues/25921) – An unpatched storage leak on macOS that can fill a user’s entire system drive in 48 hours of runtime, with 5 comments from users reporting 50k+ orphaned dump files.
7. [#25431 (OPEN): Expose settings for spellchecking in Windows Desktop app](https://github.com/openai/codex/issues/25431) – The top-voted Windows feature request with 13 upvotes, from developers frustrated by automatic spellcheck flagging valid variable names and code syntax in their prompts.
8. [#1624 (CLOSED): Reference Agent Rules Community Standard for AGENTS.md interoperability](https://github.com/openai/codex/issues/1624) – A long-requested documentation improvement that was merged yesterday, formalizing support for the cross-tool Agent Rules spec to make AGENTS.md files work seamlessly across all AI developer tools, with 7 comments of positive community feedback.
9. [#28112 (OPEN): Windows Computer Use fails to initialize, missing `computer_use_client_base.js` export from `@oai/sky` package](https://github.com/openai/codex/issues/28112) – A fresh post-update regression breaking all Windows Computer Use automation workflows, with users reporting zero ability to control desktop apps from their agents after the latest patch.
10. [#28116 (OPEN): TUI 100% freezes when pasting long multi-line text due to tokio-tungstenite WebSocket hang](https://github.com/openai/codex/issues/28116) – A major input UX break for CLI TUI power users, where pasting code blocks locks the entire interface indefinitely with no recovery option short of killing the process.

## 4. Key PR Progress
1. [#27258 (OPEN): core: cache the tool search handler per session](https://github.com/openai/codex/pull/27258) – A performance optimization that eliminates redundant BM25 index rebuilds on every sampling continuation, cutting ~113ms of latency per agent generation step.
2. [#28118 (OPEN): feat(tui): add rate-limit reset redemption to /usage](https://github.com/openai/codex/pull/28118) – Implements the community-requested feature that lets users directly view and redeem earned rate-limit reset credits from the Codex CLI `/usage` command.
3. [#27440 (OPEN): Fall back to manual approval when Guardian times out](https://github.com/openai/codex/pull/27440) – Fixes a reliability gap where automatic Guardian review timeouts incorrectly blocked otherwise valid agent commands, by redirecting users to manual approval instead of throwing a hard failure.
4. [#28032 (CLOSED): Carry exec-server cwd as PathUri](https://github.com/openai/codex/pull/28032) – Migrates the exec-server protocol to use the portable PathUri type as the working directory value, the foundational change required to support seamless cross-OS remote execution between host and WSL/Linux environments.
5. [#28126 (OPEN): exec-server: own portable sandbox permission wire types](https://github.com/openai/codex/pull/28126) – Decouples the exec-server filesystem API from the core codex_protocol library, removing dependencies on host-native path types to enable independent evolution of cross-platform sandbox rules.
6. [#28120 (OPEN): bazel: add hermetic PowerShell Wine shell coverage](https://github.com/openai/codex/pull/28120) – Adds first-class CI test support for PowerShell execution on non-Windows hosts, so Windows-specific shell regressions are caught before public release instead of after user updates.
7. [#27953 (OPEN): Load app-bundled internal hooks from Codex Desktop](https://github.com/openai/codex/pull/27953) – Marks all first-party bundled Codex hooks as trusted and hidden from the user-facing hook review UI, eliminating dozens of unnecessary repetitive approval prompts for built-in functionality.
8. [#25688 (CLOSED): Add managed per-app approval requirements](https://github.com/openai/codex/pull/25688) – Adds enterprise policy support for per-app reviewer constraints in `requirements.toml`, letting admin teams enforce mandatory human review for high-risk Computer Use actions targeting sensitive applications.
9. [#28125 (OPEN): build: run buildifier from just fmt](https://github.com/openai/codex/pull/28125) – Removes manual setup friction for contributors by shipping a pre-pinned cross-platform buildifier instance, that automatically formats all Bazel/Starlark files when running the standard `just fmt` command.
10. [#27369 (OPEN): Add dormant plugin script lifecycle state](https://github.com/openai/codex/pull/27369) – The base foundational PR for the FOO-574 telemetry project, adding hidden lifecycle state tracking for all plugin script executions behind a feature flag, to enable future observability improvements without breaking existing workflows.

## 5. Feature Request Trends
The top user-requested feature directions are:
1. **Interoperability standardization**: Full formal alignment of Codex's AGENTS.md implementation with the community Agent Rules spec for seamless portability across different AI developer tools.
2. **Session persistence upgrades**: Convert currently ephemeral Codex side chats to persistent nested child threads attached to main project worktrees.
3. **Multi-environment support**: Add user-configurable named local environment overlays, to let agents dynamically switch between multiple local dev toolchains (e.g. Python 3.10 vs 3.12, Node 18 vs 22) within a single chat thread.
4. **User-controlled UI customization**: Expose granular toggles for non-code-workflow features like spellchecking, to eliminate friction for developers writing code in their prompts.

## 6. Developer Pain Points
Three recurring high-frequency pain points are documented across yesterday's updates:
1. **Mass Windows Desktop regression wave**: The latest 26.609.x Windows builds have multiple overlapping broken WSL integration issues, including missing Linux CLI binaries, broken path translation from /home to Windows local paths, and Computer Use initialization failures, affecting a large share of Windows developer users.
2. **Cross-platform performance gaps**: Widespread reports of slow CLI responses during WebSocket to SSE fallback, unconstrained Crashpad dump storage leaks, and TUI full freezes on long multi-line input paste that degrade daily workflow reliability.
3. **macOS platform stability gaps**: Users report severe edge cases including system-wide app launch blocks from Codex relaunch loop file descriptor exhaustion, unexpected chat history loss after app updates, and persistent Computer Use permission failures even after full system reboots and permission re-grants.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-14
Repo: github.com/google-gemini/gemini-cli

---

## 1. Today's Highlights
The new v0.48.0 nightly release lands today with focused fixes for MCP (Model Context Protocol) reliability, long a top user pain point for third-party integration workflows. Core development work this 24-hour window prioritizes resolving the highest-voted agent stability bugs, including generalist subagent hangs and misreported task termination status. Multiple security hardening patches for the Auto Memory background system also moved forward, addressing gaps around sensitive data redaction and infinite retry loops.

## 2. Releases
### v0.48.0-nightly.20260613.g9e5599c32
Changes in this build:
- Implemented atomic updates for MCP tool discovery to prevent partial state breaks
- Fixed incorrect Vertex AI model mapping that broke API routing for custom model deployments
- Added new end-user documentation and an automated migration command for upgrading past config versions

## 3. Hot Issues
(Top 10 selected by comment count, user upvotes, and business impact)
1. **[#21409 Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**: 8 👍, 7 comments. The highest-voted open bug: users report the agent freezes even for trivial tasks like folder creation, with the only known workaround being explicitly disabling subagent deferral in prompts.
2. **[#24353 Component-level robust evaluations epic](https://github.com/google-gemini/gemini-cli/issues/24353)**: 7 comments. Tracks expansion of the repo's existing 76 behavioral eval tests to cover all 6 supported Gemini model variants, a core requirement for catching agent stability regressions before they reach end users.
3. **[#22745 AST-aware file read impact assessment](https://github.com/google-gemini/gemini-cli/issues/22745)**: 7 comments. Investigates using AST parsing to precisely retrieve method bounds in single tool calls, reducing wasted LLM turns and unnecessary token noise when exploring large codebases.
4. **[#22323 MAX_TURNS limit misreported as successful GOAL completion](https://github.com/google-gemini/gemini-cli/issues/22323)**: 2 👍, 6 comments. A critical UX bug that hides subagent interruptions, leading users to believe their full codebase investigation finished even when the subagent hit turn limits and did no analysis.
5. **[#25166 Shell execution stuck on "Awaiting user input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**: 3 👍, 4 comments. Breaks basic shell workflow: simple non-interactive commands leave the CLI hanging indefinitely waiting for input that will never come.
6. **[#26525 Deterministic redaction for Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)**: 5 comments. A P2 security issue: currently, user transcript content is sent to the background extraction agent's model before secret redaction runs, creating potential sensitive data exposure risk.
7. **[#26522 Stop Auto Memory from retrying low-signal sessions infinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**: 5 comments. Wasted background compute: low-value chat transcripts are never marked as processed, so the Auto Memory system repeatedly re-prioritizes them for extraction.
8. **[#21983 Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**: 1 👍, 4 comments. Blocks all Linux Wayland desktop users from accessing the browser automation subagent feature, a highly requested use case for web testing workflows.
9. **[#20079 Symlinked custom agents not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**: 4 comments. Breaks workflows for users who manage their custom subagent libraries via dotfile symlinks in `~/.gemini/agents`, as the CLI ignores non-regular files in the agents directory.
10. **[#24246 400 API error when more than 128 tools are enabled](https://github.com/google-gemini/gemini-cli/issues/24246)**: 3 comments. Users with many connected MCP integrations hit hard API limits, as the CLI currently does not dynamically scope active tools to match the current task context.

## 4. Key PR Progress
(Top 10 priority PRs merged / in active review):
1. **[#27889 Fix MCP OAuth refresh for auto-discovered servers](https://github.com/google-gemini/gemini-cli/pull/27889)**: P1 core fix that preserves the auto-discovered MCP server client ID in token metadata, preventing broken auth flows after the initial `/mcp auth` setup.
2. **[#27878 Add MCP image MIME type sniffing](https://github.com/google-gemini/gemini-cli/pull/27878)**: Resolves widespread Figma MCP integration 400 errors by inspecting base64 image signatures directly, rather than trusting the declared MIME type that often mislabels WebP assets as PNG.
3. **[#27888 Normalize MCP tool schemas to root `object` type](https://github.com/google-gemini/gemini-cli/pull/27888)**: Fixes Vertex AI strict JSON schema validation errors for non-compliant third-party MCP servers that omit a top-level `type: "object"` field from tool input schemas.
4. **[#27886 Respect .gitignore / .geminiignore in session context tree view](https://github.com/google-gemini/gemini-cli/pull/27886)**: Prevents accidentally exposing sensitive, ignored files in the auto-generated directory tree that appears in the CLI's internal context payload.
5. **[#27887 Honor custom `border.default` theme config for OSC 11 terminals](https://github.com/google-gemini/gemini-cli/pull/27887)**: Fixes broken custom theme styling for users on modern terminals that report background color via the OSC 11 escape sequence, where user-defined border colors were previously ignored.
6. **[#27870 Cap pending tool responses](https://github.com/google-gemini/gemini-cli/pull/27870)**: Prevents memory leaks and payload overflow by limiting the maximum size of outstanding function responses, resolving crashes triggered by extremely large tool output.
7. **[#27885 Fix VS Code IDE companion resource leak](https://github.com/google-gemini/gemini-cli/pull/27885)**: Registers all activation disposables in the IDE extension, eliminating orphaned background processes that caused performance bloat during long-running debug sessions.
8. **[#27568 Fall back to legacy grep when ripgrep fails](https://github.com/google-gemini/gemini-cli/pull/27568)**: Improves compatibility on systems where the `rg` binary is missing, misconfigured, or blocked by security policies, so code search workflows never fully break.
9. **[#27553 Add GATEWAY auth type to validation](https://github.com/google-gemini/gemini-cli/pull/27553)**: Fixes a recent regression that rejected valid auth methods for users running the CLI against custom Gemini base URLs set via the `GOOGLE_GEMINI_BASE_URL` environment variable.
10. **[#27694 Deduplicate home agent directories](https://github.com/google-gemini/gemini-cli/pull/27694)**: Eliminates duplicate agent loading errors when the project-level and global user agent directories resolve to the same path, preventing broken subagent behavior.

## 5. Feature Request Trends
Top requested feature directions distilled from open issues:
1. **AST-native code analysis tools**: The majority of new enhancement requests focus on rolling out AST-aware search, read, and codebase mapping utilities to cut down on token bloat and improve code analysis accuracy for large repositories.
2. **Auto Memory hardening**: Multiple related issues are prioritizing security and reliability improvements to the background memory system, including deterministic secret redaction and smarter session prioritization.
3. **Browser agent resilience**: Users are requesting persistent session lock recovery, full support for `settings.json` configuration overrides, and improved WebDriver compatibility for Linux Wayland systems.
4. **Advanced remote agents**: The P1 Remote Agents v2 epic is tracking user demand for task-level auth, background long-running operations, and 1P managed agent support for enterprise deployments.

## 6. Developer Pain Points
Recurring high-frequency frustrations from the community:
1. **Agent stability gaps**: Unprompted subagent execution even when disabled in config, hangs during simple tasks, and misreported success status are the top reported user issues.
2. **MCP ecosystem edge cases**: The rapid expansion of third-party MCP integrations has exposed widespread edge case failures including bad auth refresh, invalid schemas, and incorrect image encoding that cause unexpected 400 API errors.
3. **Terminal UX glitches**: Common complaints include shell history corruption, non-ASCII character handling issues in vim input mode, flicker-free terminal resize support gaps, and broken external editor exit workflows.
4. **Poor agent discoverability**: The CLI consistently fails to use user-defined custom skills and subagents even for highly relevant tasks, forcing users to explicitly prompt for their use every session.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-14
Source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. Today's Highlights
Today’s digest leads with two consecutive minor v1.0.62 series releases that deliver core UX overhauls, new plugin marketplace compatibility, and diff navigation quality-of-life upgrades. Maintainers resolved a 2+ month old model availability bug that left many officially listed Copilot models unselectable in the CLI `/model` picker, while a newly reported critical Linux ARM64 runtime panic after the latest point release is actively triaged. No pull requests were updated in the 24-hour window, confirming all recent changes have been merged to the main codebase.

## 2. Releases
Two new official builds were published in the last 24 hours:
1. **v1.0.62 (2026-06-13)**
   - Ask and elicitation dialogs now scroll inline with the full session timeline, no longer occupying the full screen to block prior agent output
   - Preserves blank line spacing between reasoning summary sections to improve readability
   *Note: The original changelog entry for "Show user-ty" was truncated at data collection time*
2. **v1.0.62-2 (2026-06-13)**
   - Plugins now support bundled extensions, enabling direct one-click installation from the official Copilot plugin marketplace
   - Added full-text search, match highlighting, and standard n/N keyboard navigation for the built-in diff view
   - New `/app` slash command to open the Copilot GitHub App, with a browser fallback for unconfigured desktop environments
   *Note: The original changelog entry for subagent model, reasoning effort, and context tuning configuration was truncated at data collection time*

## 3. Hot Issues
All 6 recently updated community issues are listed below:
1. [#2550 [CLOSED] Not all models are available from Copilot](https://github.com/github/copilot-cli/issues/2550): Long-running bug resolved, where the `/model` selector did not surface official supported models including all Gemini variants, Raptor mini, and Goldeneye. It received 6 upvotes from users who previously could not access their licensed model tiers directly from the CLI.
2. [#3788 [CLOSED] Invalid bug report](https://github.com/github/copilot-cli/issues/3788): Closed as invalid, the report contained no reproduction steps, version details, or description of expected behavior with no community engagement.
3. [#3784 [OPEN] Copilot CLI v1.0.62-1 aborts with Tokio reactor panic after sending first message on Linux ARM64](https://github.com/github/copilot-cli/issues/3784): High-priority triage bug affecting Linux ARM64 users, where the latest release throws a Tokio runtime panic immediately after a user submits their first prompt, exiting with code 134 during WebSocket connection initialization.
4. [#3789 [OPEN] Request: Ollama API Key return to Bring Your Own Model](https://github.com/github/copilot-cli/issues/3789): Triage feature request to add configurable `apiKeyEnv` support for Ollama BYOM deployments, enabling users to connect to remote, authenticated Ollama servers instead of only local unprotected instances.
5. [#3787 [OPEN] Preload MCP server tools into the initial agent function list (instead of lazy discovery)](https://github.com/github/copilot-cli/issues/3787): Triage feature request to switch Model Context Protocol (MCP) tool loading from lazy discovery to preload on session start, to prevent agents without built-in tool discovery logic from failing to surface registered custom MCP tools.
6. [#3785 [OPEN] Clarify/support .copilotignore semantics in Copilot CLI](https://github.com/github/copilot-cli/issues/3785): Triage configuration request to add explicit, documented support for nested `.copilotignore` files, standardizing behavior for excluding context files from session ingestion across local directories.

## 4. Key PR Progress
No pull requests were opened, updated, or merged in the 24-hour reporting window. This aligns with all changes from the recent v1.0.62 release batch having already been merged to main and shipped to production builds.

## 5. Feature Request Trends
Three clear high-priority community feature directions emerged from the latest open issue batch:
1. Enhanced Bring Your Own Model (BYOM) deployment flexibility, specifically for self-hosted local LLM runtimes like Ollama that require authenticated remote access
2. Improved MCP tooling reliability, to reduce friction for developers building custom third-party tool integrations for Copilot CLI sessions
3. Explicit, documented local context control rules, specifically around ignore file semantics, to give developers full control over which local files are ingested into Copilot session context.

## 6. Developer Pain Points
Recurring user frustrations identified in the latest update window include:
1. Unhandled runtime panics affecting niche architectures like Linux ARM64 immediately after new point releases, leading to hard session exits without graceful error messaging
2. Missing parity between official GitHub public documentation for supported Copilot models and the actual selectable model list in the CLI, blocking access to licensed model tiers for many users
3. Lack of standardized, documented support for common developer workflows including custom MCP tool registration, .copilotignore context exclusion, and authenticated remote Ollama access that forces users to build custom workarounds.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-14
Official repository: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
No new releases were published in the last 24 hours, but 4 high-priority bug fixes targeting MCP tool stability, Moonshot API tool call parsing, and custom OpenAI client timeout behavior were merged to resolve long-standing user workflow disruptions. Two new active bug reports were surfaced, covering unhandled recursive file read loops for custom 3rd-party endpoints and full TUI crashes on narrow terminal widths, both of which affect core user experience for v0.12.0 and 0.76 versions. The merged fixes are expected to roll out in the next upcoming patch release for end users.

## 2. Releases
No new stable, pre-release, or hotfix versions of Kimi Code CLI were published in the 24-hour reporting window.

## 3. Hot Issues
Only 2 issues were updated in the last 24 hours, both active open bug reports:
1. **[#640] Kimi CLI stuck in recursive file read loop**  
   URL: https://github.com/MoonshotAI/kimi-cli/issues/640  
   Affects users running custom Anthropic-derived endpoints (notably the mimo-v2-flash model on Arch Linux) on v0.76. It has 13 community comments with multiple independent user confirmations, breaking full-project context scanning workflows entirely. Community users have shared workarounds that limit the total number of files scanned during context build as a temporary mitigation.
2. **[#2450] Uncaught Pi TUI exception on narrow screen width**  
   URL: https://github.com/MoonshotAI/kimi-cli/issues/2450  
   Newly reported bug for v0.12.0 running on Debian with the k2.6 model. The Kimi interactive TUI crashes completely when terminal width drops below an undocumented minimum threshold, disrupting users running the CLI in narrow IDE split panes, low-res handheld terminal devices, or small SSH sessions.

## 4. Key PR Progress
5 total PRs were updated in the 24-hour window, all critical bug fixes:
1. **[#2324 (OPEN)] fix(web): handle BrokenPipeError in SessionProcess.send_message**  
   URL: https://github.com/MoonshotAI/kimi-cli/pull/2324  
   Adds guard logic to prevent unhandled pipe crashes when a web UI session subprocess exits between process startup and message delivery to stdin, improving reliability for self-hosted web deployments of Kimi CLI.
2. **[#2434 (CLOSED)] fix: suppress MCP connection errors and handle LLM double-serialization**  
   URL: https://github.com/MoonshotAI/kimi-cli/pull/2434  
   Merged fix that resolves three high-impact MCP tool stability issues, including graceful error handling for dropped Notion, code-index, and other 3rd-party MCP server connections, preventing uncaught event loop crashes during heavy tool usage.
3. **[#2407 (CLOSED)] fix: handle double-encoded JSON in tool call arguments (Moonshot API)**  
   URL: https://github.com/MoonshotAI/kimi-cli/pull/2407  
   Merged fix that addresses Pydantic validation failures caused by the Moonshot API returning double-encoded JSON for nested object/array tool outputs, restoring broken functionality for structured tools including SetTodoList and ExitPlanner.
4. **[#2409 (CLOSED)] fix(kosong): add default 120s timeout to create_openai_client**  
   URL: https://github.com/MoonshotAI/kimi-cli/pull/2409  
   Merged change that overrides the OpenAI SDK's default 600s no-timeout behavior to a 120s maximum request timeout, eliminating unneeded 5+ minute hangs when upstream proxies (such as the MiMo API proxy) terminate connections early.
5. **[#2449 (OPEN)] fix(string): strip newlines in shorten_middle before the length check**  
   URL: https://github.com/MoonshotAI/kimi-cli/pull/2449  
   UI rendering fix for the tool call summary helper function, ensuring the 50-character single-line truncation logic works correctly even when input argument text contains uncollapsed newlines, preventing misaligned TUI output for complex tool calls.

## 5. Feature Request Trends
From updated community issues and PR activity, the highest-priority requested feature directions are:
1. First-class official support for custom 3rd-party LLM endpoints beyond the base config.toml workaround, with full validation and optimized workflow support for popular alternatives to Moonshot native models
2. Graceful TUI UX degradation for non-standard terminal conditions (small screen width, non-standard aspect ratios) instead of uncaught crashes
3. Built-in MCP server health checks and automatic reconnection logic for users who rely on third-party MCP tools for development workflows

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced in the reporting window:
1. Unhandled edge case exceptions across subprocess, TUI, and event loop code paths that trigger full process crashes for non-critical failures such as a single dropped MCP server connection
2. Overly permissive default timeout settings for LLM client sessions that leave users waiting for 5+ minutes with no progress indicator after upstream proxies or APIs terminate requests early
3. Inconsistent API response parsing compatibility for custom and non-Moonshot endpoints, which break structured tool workflows out of the box for power users that self-host or integrate alternative LLMs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-14
---
## 1. Today's Highlights
Today’s top updates bring two consecutive v1.17.x patch releases focused on critical MCP (Model Context Protocol) compatibility and reliability fixes, alongside a merged batch of long-running community PRs that add enterprise OIDC authentication, a new low-eye-strain UI theme, and full Italian localization support. Active contributor work is resolving two of the most upvoted recent user pain points: missing native change review workflows for Zed editor integration, and the inability to @mention files in dot-prefixed hidden folders. Community feedback also shows high demand for expanded global payment options, new cutting-edge LLM support, and usability polish for the ongoing v2 UI rollout.

## 2. Releases
Two new stable patch versions were published in the last 24 hours:
- **v1.17.6**: Single core bugfix that improves cross-server MCP compatibility by properly declaring OpenCode’s full set of supported client capabilities per official MCP spec standards.
- **v1.17.5**: Two core improvements (added external browser OAuth flow for the Snowflake Cortex provider, improved project copy management and move-session flows for v2) plus two critical MCP bugfixes: automatic recovery of expired MCP sessions instead of leaving tools disconnected, and full cleanup of stale closed MCP client connections.

## 3. Hot Issues (Top 10 Notable Items)
| Issue ID | Status | Summary | Context & Community Reaction | GitHub Link |
|---|---|---|---|---|
| #4240 | Closed | Zed editor does not support native change review | Highest-comment issue (16 comments, 19 👍), a top priority integration pain point for Zed users that is now resolved via an open targeted PR. | [Link](https://github.com/anomalyco/opencode/issues/4240) |
| #23153 | Open | Add crypto payment support for Pay-as-you-go plans | Most upvoted new feature request (19 👍) from global users who cannot access standard fiat payment rails for regional regulatory reasons. | [Link](https://github.com/anomalyco/opencode/issues/23153) |
| #28957 | Open | Upstream idle timeout triggered by writing-plans skill on macOS Tahoe 26.5 | 12 active comments from Apple Silicon users on the latest macOS release, experiencing timeouts when running long agent planning workflows. | [Link](https://github.com/anomalyco/opencode/issues/28957) |
| #22129 | Closed | Custom skills do not appear in TUI autocomplete (work in web app) | 9 comments, 11 👍, a long-running parity gap between the web and CLI user experiences that has now been marked resolved. | [Link](https://github.com/anomalyco/opencode/issues/22129) |
| #167 | Closed | Shift+Enter keybinding to create new line does not work inside tmux | 9 comments from terminal power users, with full resolution shipped in recent patch builds. | [Link](https://github.com/anomalyco/opencode/issues/167) |
| #19473 | Open | Windows desktop app sends Windows UNC paths to WSL2-hosted server, breaking all bash tools | 6 comments from cross-environment developers, who have shared public workarounds pending an official upstream fix. | [Link](https://github.com/anomalyco/opencode/issues/19473) |
| #32172 | Open | Request support for newly released GLM-5.2 model from Z.AI provider | Timely feature request for the latest top-tier reasoning model released by Chinese AI provider Zhipu AI, already gathering 4 comments from regional users. | [Link](https://github.com/anomalyco/opencode/issues/32172) |
| #30360 | Open | Build/plan agent picker is missing in the new v2 layout | 3 👍 from v2 beta testers, a regression that blocks access to custom agent selection for users testing the new UI. | [Link](https://github.com/anomalyco/opencode/issues/30360) |
| #31815 | Open | `opencode web` throws unhandled ENOENT error for missing xdg-open in headless containers | 2 👍 from self-hosted and DevOps users running OpenCode in Docker/Podman environments with no desktop runtime. | [Link](https://github.com/anomalyco/opencode/issues/31815) |
| #17614 | Closed | No visibility into OpenAI GPT plan usage limits for pro subscribers | 9 comments from users requesting better usage telemetry, which has been addressed in recent releases. | [Link](https://github.com/anomalyco/opencode/issues/17614) |

## 4. Key PR Progress (Top 10 Important Items)
| PR ID | Status | Description | GitHub Link |
|---|---|---|---|
| #22674 | Open | Adds support for ACP `writeTextFile` client capability to fully resolve the missing Zed native change review workflow. | [Link](https://github.com/anomalyco/opencode/pull/22674) |
| #32193 | Open | Fixes missing file @mention functionality for files stored inside hidden dot-prefixed folders (e.g. `.agents/`, `.docs/`), closing issue #32126. | [Link](https://github.com/anomalyco/opencode/pull/32193) |
| #32230 | Open | Adds MCP client `roots` capability support to handle the latest MCP spec `roots/list` requests for broader third-party tool compatibility. | [Link](https://github.com/anomalyco/opencode/pull/32230) |
| #27324 | Closed | Ships new configurable OIDC server auth mode, adding enterprise-grade SSO support for self-hosted deployments alongside existing disabled and basic auth options. | [Link](https://github.com/anomalyco/opencode/pull/27324) |
| #27261 | Closed | Adds user-contributed warm "Coffee" theme, a low-eye-strain UI skin optimized for long coding sessions, available for both TUI and web interfaces. | [Link](https://github.com/anomalyco/opencode/pull/27261) |
| #27187 | Closed | Adds full complete Italian i18n translation for all UI, desktop, and CLI packages to expand language support for non-English users. | [Link](https://github.com/anomalyco/opencode/pull/27187) |
| #27377 + #27378 | Closed | Ships stacked prompt caching improvements: splits system prompts into stable/dynamic blocks for optimized Anthropic cache hits, and adds experimental cache stabilization under a feature flag. | [Link](https://github.com/anomalyco/opencode/pull/27377) |
| #32234 | Closed | Fixes v2 project copy and move-session flows, making them ignore unavailable project roots instead of failing when a referenced Git checkout directory is removed. | [Link](https://github.com/anomalyco/opencode/pull/32234) |
| #27341 | Closed | Updates the desktop app updater to respect custom autoupdate settings defined in `opencode.json`, instead of only following hardcoded build-time update flags. | [Link](https://github.com/anomalyco/opencode/pull/27341) |
| #32235 | Open | Prepares the upcoming Cedric multi-tab workspace release, a major feature adding multi-pane workspace surfaces for browsers, files, code, terminals, and side chat with persisted tabs and background task lifecycle visibility. | [Link](https://github.com/anomalyco/opencode/pull/32235) |

## 5. Feature Request Trends
The most requested new functionality this cycle falls into 4 clear buckets:
1. Global payment expansion: Highest-voted request is crypto payment support for Pay-as-you-go plans to remove regional access barriers.
2. New model & provider support: Timely asks for GLM-5.2 support for Z.AI, plus native TUI UI to configure OpenRouter Fusion presets without manual config edits.
3. V2 UI QoL improvements: Requests for tiled multi-session panel views, native WSL path handling for the Windows desktop app, and a built-in GUI to edit existing model/provider configs instead of requiring full re-entry.
4. DevOps/CI support: Add an optional version input parameter to

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-14
*Source: github.com/badlogic/pi-mono (earendil-works/pi)*

---

## 1. Today's Highlights
The Pi AI agent toolchain shipped a critical v0.79.3 release that blocks unexpected overbilling from OpenAI GPT-5.x / Codex context window misconfiguration, addressing a top-reported community issue. Core maintainers resolved a widely impactful silent bug that reduced Anthropic Claude's 1-hour prompt cache retention to just 5 minutes, which was driving unplanned excess API costs for hundreds of users. 11 merged pull requests also expanded provider support, added new workflow automation features, and fixed a dozen high-priority TUI and runtime bugs.

## 2. Releases
### v0.79.3
This patch release fixes incorrect inherited context window metadata for OpenAI GPT-5.4, GPT-5.5, Codex GPT-5.4, GPT-5.4 mini, and GPT-5.5 models. It updates values to match the observed 272k-token hard limit enforced by the Codex backend, eliminating a billing hazard from prompts that exceed Codex's actual accepted token count (reported by community contributor @trethore).

## 3. Hot Issues (10 Noteworthy Entries)
| Item | Details | Impact |
|------|---------|--------|
| [#289 (CLOSED)](https://github.com/earendil-works/pi/issues/289) | Custom slash commands for coding agent | Top-engagement enhancement (18 comments) that enables non-LLM hooks for custom UI, granular permission prompts, and arbitrary workflow logic, unlocking far more flexible agent automation than standard LLM-only slash commands. |
| [#5703 (CLOSED)](https://github.com/earendil-works/pi/issues/5703) | Claude 1h cache retention silently degraded to 5m, inflating API costs | High-severity cost bug that missed sending Anthropic's required extended cache beta header, causing user-configured 1-hour long cache TTLs to be silently dropped to the default 5-minute limit, resulting in unnecessary repeated prompt caching charges. |
| [#5653 (OPEN, inprogress)](https://github.com/earendil-works/pi/issues/5653) | Move off Shrinkwrap to eliminate duplicate pi-ai copies | Critical dependency resolution bug that creates two separate copies of the pi-ai package on disk for users installing multiple Pi packages, breaking the shared module-level API provider registry Map and leading to missing custom provider registrations. |
| [#5644 (CLOSED)](https://github.com/earendil-works/pi/issues/5644) | GPT 5.5 API/Codex incorrect context window size | Root cause behind the v0.79.3 release, where incorrectly advertised 400k/1M token context limits for Codex/API respectively caused oversize prompts to fail unexpectedly at OpenAI. |
| [#5571 (CLOSED)](https://github.com/earendil-works/pi/issues/5571) | `pi -p` hangs indefinitely with unauthenticated default provider instead of failing fast | Poor onboarding experience that confused new users during first setup, who waited multiple minutes for a response before realizing they had not configured valid LLM credentials. |
| [#5700 (OPEN)](https://github.com/earendil-works/pi/issues/5700) | Support multiple live agent sessions with TUI switching | Highly requested power user feature: today Pi tears down running sessions when switching, so users cannot run long-running background tasks while working on separate workstreams. |
| [#5671 (OPEN)](https://github.com/earendil-works/pi/issues/5671) | ~/.pi global and cwd/.pi project config directories overlap | Raised by prominent community developer @mitsuhiko, the overlapping folder structure causes unexpected config merging for users that store their global .pi folder in their home directory. |
| [#5463 (OPEN)](https://github.com/earendil-works/pi/issues/5463) | Auto-compaction after final turn throws unhandled error | High-impact runtime crash (5 👍 reactions) that occurs immediately after an agent completes a task, when automatic context compaction attempts to continue from a final assistant message. |
| [#5702 (CLOSED)](https://github.com/earendil-works/pi/issues/5702) | `prompt_cache_retention` sent to providers that reject it (OpenCode/Zen 400) | Causes failed API requests for niche/self-hosted providers that do not support Anthropic-style cache retention flags, while surfacing a maintainability gap in the model registry generation system. |
| [#5697 (CLOSED)](https://github.com/earendil-works/pi/issues/5697) | Tool argument validator does not coerce JSON strings to arrays/objects | Triggers intermittent failures for all MCP tools that use `string[]` or object parameters, breaking reliability for hundreds of users building on top of the MCP ecosystem. |

## 4. Key PR Progress (10 Important Entries)
| Item | Details |
|------|---------|
| [#5701 (CLOSED)](https://github.com/earendil-works/pi/pull/5701) | Updates the previously incorrect 1M token context window for Minimax-M3 to the actual enforced 524,288 token limit, preventing prompt oversize failures on OpenRouter and other hosted endpoints. |
| [#5704 (CLOSED)](https://github.com/earendil-works/pi/pull/5704) | Implements the auto-capture phase of the Veil context management system, automatically storing read/bash/web search tool results in a deduplicated warm cache with smart truncation to reduce redundant API tokens and speed up repeated queries. |
| [#5690 (CLOSED)](https://github.com/earendil-works/pi/pull/5690) | Adds a configurable `thinkingFormat: "chat-template"` option for OpenAI-compatible vLLM/LiteLLM hosted models, removing the need for hardcoded thinking formatting logic per model family. |
| [#5262 (OPEN)](https://github.com/earendil-works/pi/pull/5262) | Adds a full native built-in provider for accessing Claude models via Google Cloud Vertex AI, reusing all existing Anthropic streaming and tool handling logic for minimal maintenance overhead. |
| [#5688 (CLOSED)](https://github.com/earendil-works/pi/pull/5688) | Patches a transitive esbuild dependency vulnerability by forcing resolution to version ^0.28.1, and adds overrides for nested Vite esbuild copies to eliminate remaining vulnerable lockfile entries. |
| [#5640 (CLOSED)](https://github.com/earendil-works/pi/pull/

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-14
---
## 1. Today's Highlights
No new stable releases were published for Qwen Code in the past 24 hours, with a failed v0.18.0 nightly build logged in project CI pipelines. A high-visibility thread discussing proposed Qwen OAuth free tier policy adjustments drew 129 community comments, sparking widespread feedback from individual and small-team users. Core development teams prioritized critical fixes for long-running system leaks, unhandled edge cases, and cross-platform compatibility issues, pushing 20+ merged and open PRs alongside active debugging of frequently reported long-context task reliability problems.

## 2. Releases
No official stable or pre-release builds were launched in the last 24 hours. A single failed nightly v0.18.0.20260613.44627a24b release run was documented by the project automation workflow, with no public user-facing artifacts generated from the attempt:
> [Issue #5068: Failed 2026-06-13 nightly release](https://github.com/QwenLM/qwen-code/issues/5068)

## 3. Hot Issues (10 Noteworthy Entries)
| Issue Link | Details & Impact |
|---|---|
| [#3203 Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203) | The most active 129-comment community thread proposes cutting the free daily request quota from 1000 to 100 immediately, with full phase-out of the free OAuth entry scheduled for a future date. It has drawn heavy feedback from casual users and small teams concerned about increased operational costs for non-commercial use. |
| [#5083 TUI Freeze Caused By Unrecycled Zombie Child Processes](https://github.com/QwenLM/qwen-code/issues/5083) | High-impact P2 Linux performance bug that fully blocks workflow for CLI power users: orphaned MCP shell child processes are not reaped after execution, leaving Qwen Code TUI unresponsive even as the main process remains running. Multiple users have shared independent reproduction cases. |
| [#5055 Windows VSIX Installer Flagged As Trojan:JS/ShaiWorm.DBA!MTB](https://github.com/QwenLM/qwen-code/issues/5055) | P1 security issue that blocks adoption for enterprise Windows users running strict antivirus policies. The team is collecting user debug data to confirm if the detection is a false positive before issuing a patched installer. |
| [#5080 API Key Type Mismatch Triggers 401 Errors](https://github.com/QwenLM/qwen-code/issues/5080) | Common user pain point: users who configure Alibaba Cloud Standard API keys and then switch to a Token Plan model via the model selector get generic `401 Invalid API-key` errors with no clear troubleshooting prompt, leading to widespread confusion about valid auth pairing rules. |
| [#5018 Long-Running Task Attention Degradation & Memory Loss](https://github.com/QwenLM/qwen-code/issues/5018) | Top-reported bad case for power users running multi-step complex coding tasks: context forgetting becomes frequent after sessions exceed 10k tokens, breaking end-to-end workflow reliability. The team is collecting debug logs from affected users to identify root causes. |
| [#5019 Duplicate Tool Call Loops Terminate Sessions](https://github.com/QwenLM/qwen-code/issues/5019) | P2 core bug where consecutive identical repeated tool calls trigger platform-side 400 errors, killing fully automated long-running workflows before they finish. A targeted fix PR is already in active review. |
| [#4877 Model List Cannot Distinguish Identical Model Names Across Providers](https://github.com/QwenLM/qwen-code/issues/4877) | UX confusion bug for users with multiple custom model providers configured: same-named models (e.g. `glm-5`) from different providers appear identical in the selector, leading to accidental selection of the wrong provider and unexpected billing/routing issues. |
| [#4991 Qwen Code 0.16 Fails to Launch After VS Code 1.124.0 Update](https://github.com/QwenLM/qwen-code/issues/4991) | High-impact extension compatibility issue that broke Qwen Code for thousands of VS Code users after the 1.124.0 editor rollout. The issue is now marked closed after a backported patch was released. |
| [#5007 Custom Skills Not Exposed in ACP Mode](https://github.com/QwenLM/qwen-code/issues/5007) | Integration bug for users launching Qwen Code from third-party IDEs such as Zed: pre-configured custom skills stored in `~/.qwen/skills` are not visible when running via the ACP protocol, breaking pre-built automated workflows for non-VS Code users. |
| [#4672 Auto-Accept / YOLO Mode Fails to Sync Local Files On Read Errors](https://github.com/QwenLM/qwen-code/issues/4672) | Efficiency-breaking bug for power users relying on fully automated editing flows: edit changes fail to write to local disk if a read error occurs mid-operation, requiring users to send a second redundant prompt to sync changes. |

## 4. Key PR Progress (10 Critical Updates)
| PR Link | Feature / Fix Description |
|---|---|
| [#5036 Hard Stop Repeated Identical Tool Calls](https://github.com/QwenLM/qwen-code/pull/5036) | Moves duplicate tool call detection logic from TUI hooks to the core stream processing loop, fully resolving the infinite loop issue that triggers 400 session termination errors and closes #5019. |
| [#5020 Drop Pending Tool Calls After User Cancellation](https://github.com/QwenLM/qwen-code/pull/5020) | Fixes the long-standing bug where Qwen Code still executes tool operations even after the user sends a SIGINT interrupt, preventing unintended side effects from abandoned requests. |
| [#4929 Add OSC 52 Clipboard Fallback For SSH Environments](https://github.com/QwenLM/qwen-code/pull/4929) | Enables the `/copy` command and vim yank operations to work natively over SSH sessions without requiring X11/Wayland dependencies, vastly improving headless CLI user experience. |
| [#5089 Decouple Model Identity From Auth Type](https://github.com/QwenLM/qwen-code/pull/5089) | Refactors the core auth layer to extract a standalone `Protocol` enum, removing the hard binding between model providers and authentication types, and paving the way for support for different auth schemes for main and fast models. |
| [#5088 Improve Web Shell Tool Call Rendering](https://github.com/QwenLM/qwen-code/pull/5088) | Removes the 120-character hard cap for displayed tool call details, adds auto-collapse logic for completed tool calls, making the web session transcript far more usable for debugging long shell commands or multi-argument operations. |
| [#5082 Show Git Branch Directly In Desktop UI Badge](https://github.com/QwenLM/qwen-code/pull/5082) | Implements the widely requested feature from #4769, displaying the current working directory's git branch directly in the top bar instead of hiding it behind a hover tooltip to improve daily workflow visibility. |
| [#5051 Migrate Computer Use Tool to Cross-Platform cua-driver](https://github.com/QwenLM/qwen-code/pull/5051) | Replaces the old `open-computer-use` npm backend with the native Rust `cua-driver`, delivering no-focus-stealing cross-platform GUI automation capabilities for the experimental Computer Use feature. |
| [#5070 Fix Stale Agent Focus Navigation](https://github.com/QwenLM/qwen-code/pull/5070) | Resolves the UI bug where keyboard focus jumps could select hidden, expired terminal agents, eliminating phantom selection slots in the interactive agent panel. |
| [#5040 Add DaemonTransport Abstraction and ACP Compliance](https://github.com/QwenLM/qwen-code/pull/5040) | Implements pluggable transport support for the Qwen Code daemon, adds full ACP protocol standard compliance, enabling seamless integration with all ACP-compatible third-party IDEs. |
| [#5073 Add Over-Sized Context Instruction Warning](https://github.com/QwenLM/qwen-code/pull/5073) | Triggers a startup warning when the user's custom `QWEN.md` context file takes up more

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-14
---
## 1. Today's Highlights
The long-awaited full project rebrand from the legacy `deepseek-tui` npm package to the canonical CodeWhale naming formally shipped in v0.8.59, with explicit migration guidance for existing 0.8.x users. A wave of v0.8.60 pre-release work landed over the last 24 hours, including core architecture refactors for headless sub-agent runtime, new first-party model provider support for Z.ai GLM and StepFun, and dozens of TUI stability fixes. Community contributions accelerated sharply, with external PRs merged for accessibility improvements, keyboard shortcut additions, and third-party platform integrations.

## 2. Releases
### v0.8.59
The legacy `deepseek-tui` npm package is fully deprecated and will receive no further updates, with all new official releases distributed under the CodeWhale project name. Existing users migrating from legacy deepseek / deepseek-tui installs are directed to follow the public [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md) guide to avoid broken functionality.

## 3. Hot Issues (Top 10)
| # | Title | Context & Importance | Community Link |
|---|---|---|---|
| 2584 | [CLOSED] Bug: Cannot upload local images | 8-comment resolved issue that fixed a high-priority multi-modal usability gap, where the `/attach` command only passed local file paths instead of encoded base64 content to multi-modal models like Xiaomi Mimo-2.5. This resolves the most common complaint from users testing vision capabilities. | https://github.com/Hmbown/CodeWhale/issues/2584 |
| 3096 | [OPEN] v0.8.60: Split sub-agents into a headless worker runtime | Core architecture roadmap item for v0.8.60, proposing to move sub-agent work out of in-process UI-bound async tasks to a lightweight headless runtime that reduces overhead for large parallel agent fanout. It has already collected 6 comments from contributors aligning on implementation scope. | https://github.com/Hmbown/CodeWhale/issues/3096 |
| 1447 | [CLOSED] Add to ACP (Agent Client Protocol) registry | 3-upvoted completed task that adds CodeWhale to the official ACP registry, enabling native one-click installation and integration support for the Zed editor, a major distribution win for the project. | https://github.com/Hmbown/CodeWhale/issues/1447 |
| 3178 | [CLOSED] v0.8.60: Add /swarm dynamic multi-agent mode | Defines the new user-facing `/swarm` command as the entry point for distributed parallel agent work, backed by the new Whaleflow runtime. The design avoids past complexity from earlier abandoned multi-agent implementations. | https://github.com/Hmbown/CodeWhale/issues/3178 |
| 1310 | [CLOSED] v0.8.60: Add first-party MiniMax provider route | Resolves a highly requested feature from student users, adding a native out-of-the-box preset for the lower-cost MiniMax API to reduce inference spend for hobbyist developers. | https://github.com/Hmbown/CodeWhale/issues/1310 |
| 1722 | [CLOSED] Configurable auto-compact threshold with Ctrl+L binding | Fixes a critical TUI freeze bug that caused full UI unresponsiveness when context usage hit ~100%, allowing users to manually trigger context compaction with a familiar keyboard shortcut. | https://github.com/Hmbown/CodeWhale/issues/1722 |
| 3198 | [CLOSED] `cargo install codewhale-tui` fails | Resolves a recent Rust dependency trait conflict that blocked new users from installing the tool directly via crates.io, one of the first reported pain points post-rebrand. | https://github.com/Hmbown/CodeWhale/issues/3198 |
| 3154 | [OPEN] EPIC: Agent Fleet control plane for always-running verifiable work | High-level roadmap epic that aligns CodeWhale with Cursor Cloud Agents functionality, creating a control layer that manages worker agents, recovers from stuck tasks, and only escalates critical decisions to human users. | https://github.com/Hmbown/CodeWhale/issues/3154 |
| 3066 | [OPEN] Cost tracking broken for all non-DeepSeek models | Widespread UX gap that makes the TUI cost monitoring, cache savings readout, and spend tracking completely non-functional for users running Kimi, Qwen, GLM, OpenAI, or any non-DeepSeek model. | https://github.com/Hmbown/CodeWhale/issues/3066 |
| 1871 | [CLOSED] QoL: Taskbar progress, animated title spinner, completion sound | Popular power user feature that adds out-of-band visual and audio notifications, so users can track long-running job status even when they are alt-tabbed away from the TUI terminal. | https://github.com/Hmbown/CodeWhale/issues/1871 |

## 4. Key PR Progress (Top 10)
| # | Summary | Feature / Fix Details | Link |
|---|---|---|---|
| 3197 | Rebrand DeepSeek Blue consumers to Whale accent | Completes the UI color scheme rebrand, adding a new semantic `WHALE_ACCENT_PRIMARY` token while keeping legacy DeepSeek Blue values as backwards-compatible aliases for the migration window. | https://github.com/Hmbown/CodeWhale/pull/3197 |
| 3196 | Add Ctrl+P / Ctrl+N navigation for slash command autocomplete | Adds Vim-style keyboard shortcuts to navigate the slash command suggestion popup, with logic to avoid conflicting with the existing global Ctrl+P file picker, improving accessibility for power users. | https://github.com/Hmbown/CodeWhale/pull/3196 |
| 3191 | Add first-party Z.ai and StepFun provider routes | Ships native out-of-the-box support for Z.ai (GLM 5.1, 200K context) and StepFun/StepFlash models, expanding native model coverage for Chinese developer user bases. | https://github.com/Hmbown/CodeWhale/pull/3191 |
| 3199 | Add PUT /v1/sessions runtime API endpoint | Implements a dedicated endpoint to save current engine state as a persistent session, a core building block for future third-party GUI and custom integration support. | https://github.com/Hmbown/CodeWhale/pull/3199 |
| 3201 | Revive cost tracking for non-DeepSeek models | Expands the `pricing.rs` lookup table to include cost data for every popular supported model, fixing the broken spend monitoring functionality for all non-DeepSeek providers. | https://github.com/Hmbown/CodeWhale/pull/3201 |
| 3042 | Add hardening flags for `codewhale exec` | Adds 4 new CLI flags for headless mode: `--allowed-tools`, `--disallowed-tools`, `--max-turns`, and `--append-system-prompt`, making the runtime suitable for CI, benchmarking, and unattended automation use cases. | https://github.com/Hmbown/CodeWhale/pull/3042 |
| 3054 | Native Anthropic Messages API adapter | Ships full first-party Anthropic support, including native handling for cache control, thinking blocks, and tool streaming features, matching parity with Claude Code functionality. | https://github.com/Hmbown/CodeWhale/pull/3054 |
| 3035 | Throttle AgentProgress TUI redraws | Fixes a critical performance bug that caused full TUI freezes when running 4+ concurrent sub-agents, capping redraw frequency to prevent the render loop from being saturated. | https://github.com/Hmbown/CodeWhale/pull/3035 |
| 3040 | Add clickable sidebar rows for Tasks and Agents panels | Implements mouse input support for terminals that support it, letting users click to view running jobs or cancel tasks directly from the sidebar, lowering the learning curve for new users. | https://github.com/Hmbown/CodeWhale/pull/3040 |
| 3195 | Fix Telegram integration polling | Ensures the Telegram bot keeps polling for new incoming messages while LLM generations are streaming, preventing long-running sessions from timing out and going unresponsive. | https://github.com/Hmbown/CodeWhale/pull/3195 |

## 5. Feature Request Trends
1. **Multi-provider feature parity**: The top community request is for full functionality alignment across all supported model providers, not just DeepSeek, including support for cost tracking, reasoning block streaming, auto model routing, and subagent role model assignment.
2. **Advanced multi-agent orchestration**: Heavy demand for the new `/swarm` command, Agent Fleet control plane, and TypeScript Whaleflow workflow authoring tooling to enable large-scale parallel agent fanout for complex repository refactoring, testing, and debugging tasks.
3. **TUI UX polish**: A wave of requests for

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*