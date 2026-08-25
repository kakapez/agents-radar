# AI CLI Tools Community Digest 2026-08-26

> Generated: 2026-08-25 22:26 UTC | Tools covered: 9

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
*Report Date: 2026-08-26 | Source: Public GitHub community digests for all major AI CLI tools*

---

## 1. Ecosystem Overview
As of late August 2026, the AI CLI tool landscape has moved past initial core feature delivery to prioritize production-grade reliability, enterprise compliance, and standardized extensibility for agentic developer workflows. All major projects are now investing heavily in support for long-running unattended automation use cases including monorepo refactoring, multi-agent code review, and scheduled devops tasks, having solved basic LLM call and file I/O functionality. Regional APAC developer communities and domestic Chinese model providers have emerged as a high-priority, fast-growing segment, driving new investment in full provider-agnostic architecture and native localization. Security hardening for credential handling, plugin sandboxing, and MCP access controls is a top shared priority after recent disclosures of accidental credential leak vectors and unvetted plugin attack surfaces.

---

## 2. Activity Comparison
| Tool Name | Active Tracked Hot Issues (24h window) | Updated/Merged PRs (24h window) | 24h Release Activity |
|---|---|---|---|
| Claude Code | 10 | 1 | 1 stable hotfix (v2.1.245) |
| OpenAI Codex | 10 | 10 | 3 Rust core alpha pre-releases (v0.150.0-alpha.9/10/11) |
| Gemini CLI | 10 | 8 | 4 releases (stable v0.57.0 + 2 previews + nightly build) |
| GitHub Copilot CLI | 10 | 0 | 1 stable pre-release (v1.0.81-10) |
| Kimi Code CLI | 2 (high-priority regressions only) | 0 | No new public releases |
| OpenCode | 10 | 10 | 1 stable patch (v1.18.23) |
| Pi (pi-mono) | 10 | 10 | No new stable releases (patches merged to main branch) |
| Qwen Code | 10 | 10 | 1 signed nightly build (v0.22.0-nightly) |
| DeepSeek TUI | 10 | 10 | No public release (v0.9.12 cycle code-complete, pending RC validation) |

---

## 3. Shared Feature Directions
Four high-demand requirements appear across the majority of tracked tool communities:
1. **Governed MCP extensibility**: 7 of 9 tools (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, OpenCode, Pi, Qwen Code) request expanded MCP controls including a no-code native setup UI, automatic credential redaction for MCP metadata, global opt-out for unvetted repository-shipped MCPs, and enterprise SSO OAuth flows to eliminate manual configuration steps and reduce attack surface.
2. **Unattended long-session reliability**: All 9 communities prioritize fixes for idle session timeouts, OOM errors for multi-week runtime sessions, transparent granular token usage breakdowns (including subagent billing attributes), and explicit context compaction survival guarantees to eliminate silent data truncation and unplanned token waste.
3. **Native cross-platform parity**: 8 of 9 tools are prioritizing first-class Windows/Linux support, replacing legacy WSL workarounds for Windows users, fixing Wayland browser automation gaps for Linux users, and resolving platform-specific bugs for file locks, symlink resolution, and path traversal protection.
4. **Seamless session portability**: 6 tools (Claude Code, Codex, Copilot CLI, OpenCode, Pi, Qwen Code) request automatic conversation recaps, one-click session resumption, and cross-instance session transfer functionality to cut down manual context resumption friction between work machines, local runtimes, and cloud instances.

---

## 4. Differentiation Analysis
Projects segment clearly along target user and technical priority lines:
1. **Western commercial closed-core tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Target large enterprise dev teams, with core focus on ecosystem integration (e.g. GitHub Copilot IDE sync, Anthropic enterprise OTel auditing), mandatory compliance controls, and polished production UX at the cost of limited public contribution pathways.
2. **Regional APAC open-source tools (Qwen Code, DeepSeek TUI, Kimi Code CLI)**: Prioritize full provider neutrality to support popular domestic Chinese model platforms (SiliconFlow, Zhipu GLM, MiniMax), native Simplified Chinese localization, and unique devops features including Debug Adapter Protocol (DAP) integration and WebShell dashboard support for self-hosted multi-agent fleets.
3. **Independent open-source generalist tools (OpenCode, Pi)**: Target power users and tinkerers, prioritizing maximum ecosystem compatibility for every major OpenAI-compatible endpoint, extreme TUI performance optimizations (e.g. 1800x faster image pasting), and modular decomposable codebase architecture to lower barriers for third-party contributions.

---

## 5. Community Momentum & Maturity
- **Highest velocity, most active communities**: OpenAI Codex, OpenCode, Pi, Qwen Code, and DeepSeek TUI all recorded 10+ PR updates/merges in the 24h window, with hundreds of upvotes on high-priority feature requests. Codex in particular demonstrated strong roadmap execution by resolving its 2+ year top-voted Linux desktop app feature request this cycle.
- **Moderate, stability-focused iteration**: Claude Code and Gemini CLI show lower PR throughput, with engineering teams prioritizing critical breakage patches and hardening for enterprise rollouts rather than shipping new capabilities, consistent with their status as mature widely deployed products.
- **Temporary development bottlenecks**: GitHub Copilot CLI and Kimi Code CLI recorded zero PR activity in the tracked window, with high-severity post-release regressions (Copilot broken MCP token injection, Kimi silent file write no-ops) still pending triage, indicating active backlog management delays.

---

## 6. Trend Signals & Developer Reference Value
1. MCP has cemented itself as the de facto industry standard for AI CLI extensibility. Teams building internal agent tooling should prioritize MCP server development over custom native tool integrations to get out-of-the-box compatibility across all 9 leading CLI tools.
2. Long-running unattended automation is now a first-class supported use case across the ecosystem. Teams evaluating tooling for devops workloads should prioritize products with documented idle keepalive support, explicit context compaction guarantees, and OTel cost auditing capabilities to avoid unplanned downtime or unexpected token cost overruns.
3. Vendor lock-in is no longer a requirement for high-performance AI CLI workflows. Open source, provider-agnostic regional alternatives now offer feature parity with Western commercial products at lower cost, with full support for self-hosted and domestic model deployments.
4. Non-macOS platforms are no longer treated as afterthoughts. Maintainers are actively crowdsourcing Windows and Linux user pain points to deliver native first-class support, eliminating the historical requirement for WSL compatibility workarounds for dev teams running on non-Apple hardware.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
Data as of 2026-08-26, sourced from official `anthropics/skills` repository

---

## 1. Top Skills Ranking (7 highest-attention active PRs)
All listed PRs are open as of report date, linked to high-traffic community discussions:
1.  **Skill Creator Evaluation Pipeline Fix PR #1298**
    * Functionality: Resolves the long-standing `run_eval.py` 0% recall bug that broke the skill description optimization loop, alongside Windows stream reading, trigger detection, and parallel worker compatibility fixes.
    * Discussion highlights: Addresses 10+ independent user bug reproductions first logged in issue #556, unblocks all community skill submission quality validation workflows.
    * Link: https://github.com/anthropics/skills/pull/1298
2.  **Hivemind Zero-Cost Multi-Agent Orchestration Skill PR #1628**
    * Functionality: Lets Claude Code delegate repetitive mechanical work to free-model opencode.ai workers, reserving high-cost model context exclusively for planning, review, and code merging tasks.
    * Discussion highlights: Proposes a novel cost-reduction pattern for Claude Code deployments that has not been previously formalized in the skill ecosystem.
    * Link: https://github.com/anthropics/skills/pull/1628
3.  **Dual Meta Audit Skills (skill-quality-analyzer + skill-security-analyzer) PR #83**
    * Functionality: Two bundled meta-skills that evaluate new Claude Skill submissions across 5 quality dimensions and full security scanning, to validate safety and compliance before marketplace publication.
    * Discussion highlights: Directly addresses the top-voted security vulnerability logged in issue #492 around unvetted community skills being published under the official `anthropic/` namespace.
    * Link: https://github.com/anthropics/skills/pull/83
4.  **Self-Audit Reasoning Quality Gate Skill PR #1367**
    * Functionality: A stack-agnostic universal audit skill that first verifies all user-claimed output files exist, then runs a 4-dimension damage-prioritized reasoning check to eliminate hallucinations before delivery.
    * Discussion highlights: Implements the community-proposed 3-stage reasoning quality pipeline first outlined in issue #1385.
    * Link: https://github.com/anthropics/skills/pull/1367
5.  **Full Testing Patterns Skill PR #723**
    * Functionality: A comprehensive dev workflow skill covering the full testing stack, from Testing Trophy philosophy guidance, AAA unit testing patterns, React component testing, to E2E test best practices for all tech stacks.
    * Discussion highlights: Fills a major gap in the existing skill library for production software development use cases.
    * Link: https://github.com/anthropics/skills/pull/723
6.  **Full ServiceNow Platform Skill PR #568**
    * Functionality: A broad enterprise-grade skill covering all ServiceNow product modules including ITSM, SecOps, ITAM, FSM, CSDM, and IntegrationHub automation workflows.
    * Discussion highlights: One of the longest-running community collaborative skill projects, with updates refined over 5 months of feedback from enterprise users.
    * Link: https://github.com/anthropics/skills/pull/568
7.  **ODT (OpenDocument Format) Skill PR #486**
    * Functionality: Adds full support for creating, filling templates, parsing, and converting .odt/.ods ISO-standard open document files, complementing the existing DOCX and PDF processing skills.
    * Discussion highlights: Delivers highly requested open-standard document support for users working with LibreOffice and non-Microsoft document ecosystems.
    * Link: https://github.com/anthropics/skills/pull/486

---

## 2. Community Demand Trends
Distilled from top-voted, highest-comment community issues:
1.  **Security and trust hardening**: The highest community priority is fixes for the `anthropic/` namespace impersonation vulnerability, built-in automated skill security scanning, and explicit permission boundary controls to prevent users from granting overprivileged access to unvetted community skills.
2.  **Enterprise collaboration capabilities**: Users are heavily demanding native org-wide private skill sharing functionality to eliminate the friction of manual .skill file distribution across team workspaces.
3.  **Skill developer productivity**: The community is pushing for full cross-platform (Windows/macOS/Linux) compatibility for official skill creation tooling, standardized validation checks, and a fully functional skill evaluation pipeline to reduce failed submissions.
4.  **Context efficiency optimization**: Multiple proposals focus on reducing unnecessary token bloat (e.g. the compact-memory symbolic state skill) to avoid exhausting Claude Code's context window during long-running sessions.
5.  **Edge-case robustness for existing document skills**: High demand for fixes to rare corruption bugs in DOCX, PDF, and other existing document processing skills that break files generated by enterprise productivity tools.

---

## 3. High-Potential Pending Skills (Active August 2026 updates, near merge)
1.  **scnet-hpc Skill PR #1615 (last updated 2026-08-24)**: A specialized skill for operating SCNet academic/research high performance clusters via profile-based SSH and standardized Slurm workflow automation. Link: https://github.com/anthropics/skills/pull/1615
2.  **Skill Evaluation Pipeline Stability Patch PR #1602 (last updated 2026-08-24)**: A full patch that fixes remaining serialization, benchmark metric calculation, and encoding bugs in the core skill evaluation stack, which will unblock hundreds of pending skill submissions. Link: https://github.com/anthropics/skills/pull/1602
3.  **UIZZE Anti-UI-Slop Partner Skill PR #1595 (last updated 2026-08-23)**: A validated interface generation skill that grounds all web and iOS UI output against a dataset of 800,000+ real production screens to eliminate broken, non-standard generated UI. Link: https://github.com/anthropics/skills/pull/1595

---

## 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is building secure, cross-platform, enterprise-optimized tooling that cuts Claude Code operational costs, eliminates wasteful context bloat, and enforces consistent, verifiable output quality for both individual developers and large organizational deployments.

---

# Claude Code Community Digest | 2026-08-26
---
## 1. Today's Highlights
Anthropic shipped a critical hotfix release yesterday patching a common startup crash for Linux users running glibc 2.44 on popular rolling distributions. The highest-engagement open issue in the repo, tracking idle remote control session timeouts that ignore keepalive pings, remains unaddressed with 83 upvotes from affected developers. The single active updated PR from the last 24 hours resolves a broken agent validation script that was incorrectly flagging valid custom agents as non-compliant.
---
## 2. Releases
### v2.1.245
- Critical bug fix: Resolves a startup crash on all Linux distributions shipping glibc 2.44, including Arch Linux, CachyOS, and Fedora Rawhide.
- GitHub link: https://github.com/anthropics/claude-code/releases/tag/v2.1.245
---
## 3. Hot Issues
1. **#32982 (Open): Remote Control sessions die after ~20 min idle — server TTL ignores keepalives**  
   18 comments, 83 👍. The most upvoted active open bug breaks unattended long-running CLI, auto-RC, and agent workflows across macOS and Linux, forcing developers to restart interrupted remote jobs. Link: https://github.com/anthropics/claude-code/issues/32982
2. **#73639 (Open): [FEATURE] Transfer session to another claude code instance**  
   3 comments, 3 👍. Highly requested functionality would eliminate manual sync of session state for developers moving work between work and personal machines, or local and cloud runtime instances. Link: https://github.com/anthropics/claude-code/issues/73639
3. **#69453 (Open): Windows: worktree creation leaves a junk dev/null/ directory of git-lfs hooks**  
   3 comments, 3 👍. Windows-only file system clutter bug follows a cluster of prior unresolved git worktree configuration issues, causing unplanned repo bloat. Link: https://github.com/anthropics/claude-code/issues/69453
4. **#86491 (Open): With /usage open, first Escape goes to the conversation (rejects pending tool call); second Escape closes the overlay**  
   1 comment, regression on Linux TUI. Breaks expected navigation workflows, forcing users to accidentally cancel pending tool permissions when attempting to close the usage stats overlay. Link: https://github.com/anthropics/claude-code/issues/86491
5. **#89483 (Open): Cowork remote-surface OTel events missing user identity attributes (user.email, organization.id)**  
   1 comment. Blocks enterprise admins from auditing shared cowork sessions for compliance and access tracking, a critical gap for large rollouts. Link: https://github.com/anthropics/claude-code/issues/89483
6. **#58239 (Closed): MCPB extension Calendar/Reminders access regression**  
   10 comments. A macOS regression broke EventKit write access for all MCP servers distributed as .mcpb bundles, blocking productivity tooling that integrates with Apple native apps, marked stale after no fix progress. Link: https://github.com/anthropics/claude-code/issues/58239
7. **#63186 (Closed): CLAUDE_AUTOCOMPACT_PCT_OVERRIDE in settings.json env block silently ignored by autocompact logic**  
   6 comments, 2 👍. Blocks power users from customizing context compaction thresholds for large monorepo workloads, marked duplicate of an existing untracked bug. Link: https://github.com/anthropics/claude-code/issues/63186
8. **#72852 (Closed): New safeguards are unreasonably strict and prevents me from working on reasonable use cases + typeform for exemption not working**  
   4 comments, 1 👍. High community frustration from developers working on security auditing and research use cases that were incorrectly flagged by recent model safety updates. Link: https://github.com/anthropics/claude-code/issues/72852
9. **#73710 (Closed): Subagent context % display uses 200k denominator for 1M-context models — pins at 100% while real usage is ~20-60%**  
   3 comments. Confuses users tracking context capacity for large 1M-token workloads, with no visibility into remaining usable context window. Link: https://github.com/anthropics/claude-code/issues/73710
10. **#73491 (Closed): Claude Desktop 1.17377.2 (Windows MSIX): event-loop-stall explosion after auto-update — session switching freezes UI for tens of seconds**  
    4 comments. Breaks multi-session workflows for developers working across 10+ parallel project workspaces on Windows, marked stale. Link: https://github.com/anthropics/claude-code/issues/73491
---
## 4. Key PR Progress
Only 1 PR was updated in the 24h tracking window:
- **#89404 (Open, Author: bcherny): validate-agent.sh: don't abort at the first warning (set -e + ((x++))) and stop false-flagging valid agents**  
  This fix resolves a shell script edge case that caused the plugin validation tool to incorrectly reject valid custom agent definitions, including the Anthropic-maintained plugin-dev skill's own agent files. It references open issue #83803. Link: https://github.com/anthropics/claude-code/pull/89404
---
## 5. Feature Request Trends
Recent issues surface four prioritized community feature directions:
1.  Cross-instance session portability to move in-progress work between Claude Code runtimes with no manual export/import steps
2.  Expanded official MCP plugin capabilities, most notably adding mark-as-read functionality to the Slack MCP for automated inbox triage workflows
3.  Restoration of deprecated model skill weightings (such as the "Impeccable" web design tuning) that users relied on for specialized creative and frontend development work
4.  Improved native image manipulation support for complex compositing and edit use cases
---
## 6. Developer Pain Points
Recurring high-frequency frustrations across the issue tracker:
1.  Unreliable remote control operation: Idle timeouts that ignore keepalive pings break unattended long-running jobs, the single most upvoted open bug in the repo
2.  Frequent unexpected model switches: Multiple reports confirm selected Fable 5 models revert to Opus mid-session, plus overzealous safety safeguards incorrectly block legitimate computational biology, security auditing, and research use cases
3.  Persistent cross-platform edge case bugs: WMI overload high CPU usage on Windows, broken keyboard navigation on Linux TUI, git worktree file system clutter on Windows, and missing 1M-token context usage metrics remain unpatched
4.  Silent misconfiguration: Advanced power user flags such as custom autocompaction threshold environment variables are often not respected by core Claude Code logic, with no visible warning to end users.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-08-26
---
## 1. Today's Highlights
This 24-hour window marks the long-awaited closure of the 2+ year top-voted community request for an official Codex Linux desktop app, alongside three sequential Rust core v0.150.0 alpha pre-releases for CLI/TUI testing. Engineering teams shipped 20+ security, quality of life, and feature PRs, including support for automatic conversation recaps to speed up context resumption for long-running tasks. A cluster of high-severity post-update Windows app breakage reports emerged, alongside confirmed edge cases that cause hundreds of millions of unplanned token consumption for multi-agent workflows.
## 2. Releases
Three sequential pre-release builds for the Codex Rust core runtime were published in the last 24 hours:
- `rust-v0.150.0-alpha.9`, `rust-v0.150.0-alpha.10`, `rust-v0.150.0-alpha.11`
These unstable preview builds are intended for community testing of upcoming v0.150.0 features, with no formal public changelog published as of yet.
## 3. Hot Issues (Top 10)
All items are sorted by community engagement and impact:
1. **[#11023 CLOSED] Codex desktop app for Linux** | 953 👍, 209 comments | https://github.com/openai/codex/issues/11023  
   The highest-voted open Codex feature request to date is now marked resolved, confirming official Linux desktop app support is rolling out to users who previously complained about poor performance and battery drain running the macOS app on Linux hardware.
2. **[#13018 CLOSED] Allow full thread deletion instead of only archiving** | 105 👍, 29 comments | https://github.com/openai/codex/issues/13018  
   The 6-month old QoL request closes a pain point that previously forced users to manually browse hidden system directories to delete unwanted archived session data.
3. **[#38350 OPEN] Recurring scheduled automation tasks disable themselves post-run** | 40 comments | https://github.com/openai/codex/issues/38350  
   A high-severity automation bug breaks production scheduled workflows like code syncs and report generation for web Codex users, as tasks unprompted pause after successful runs with no user action.
4. **[#39903 OPEN] Add config to disable "Ran N commands" auto-collapse in TUI/CLI** | 43 👍, 25 comments | https://github.com/openai/codex/issues/39903  
   Power users who run frequent terminal operations are demanding full persistent visibility into executed commands, rather than having to manually expand collapsed output for debugging.
5. **[#31868 OPEN] Enable 1M context support for GPT-5.6 across all Codex clients** | 22 👍, 8 comments | https://github.com/openai/codex/issues/31868  
   Developers working on large monorepo codebases are requesting full access to GPT-5.6's 1M token context window, which is currently restricted to select web ChatGPT users and disabled for desktop, CLI and IDE extension clients.
6. **[#27117 OPEN] Windows updates fail with broken Get-FileHash from PSModulePath inheritance** | 15 👍, 22 comments | https://github.com/openai/codex/issues/27117  
   A widespread Windows admin pain point breaks standalone Codex updates for users running PowerShell 7, due to cross-contamination of path variables between modern pwsh and legacy PowerShell 5.
7. **[#35005 OPEN] Add toggle for in-place prompt edits instead of mandatory forking** | 17 👍,7 comments | https://github.com/openai/codex/issues/35005  
   After the v0.145.0 update made all prompt edits create new branched threads, users are requesting the option to choose between branching and in-place edits for quick small corrections.
8. **[#40036 OPEN] Windows 11 Codex app stuck in infinite login loop** | 12 comments | https://github.com/openai/codex/issues/40036  
   The latest 26.818 Windows update broke authentication for thousands of Plus subscribers, completely blocking app access for affected users.
9. **[#17598 OPEN] Native subagent orchestration fails for non-OpenAI custom providers** | 14 comments | https://github.com/openai/codex/issues/17598  
   Enterprise teams using self-hosted or third-party custom models are blocked from using Codex's native multi-agent workflows, a major adoption barrier for teams that do not exclusively use OpenAI-hosted models.
10. **[#39854 OPEN] 678M unexpected tokens consumed editing 3 resume versions** | 3 comments | https://github.com/openai/codex/issues/39854  
    A severe edge case with parallel `wait_agent` polling caused a user to incur massive unplanned costs, raising widespread concern about lack of usage guardrails for parallel subagent tasks.
## 4. Key PR Progress (Top 10)
1. **[#40705 CLOSED] Generate automatic and manual conversation recaps** | https://github.com/openai/codex/pull/40705  
   New feature adds auto-generated structured summaries of progress for idle long-running conversations, plus a new `/recap` slash command for users to manually pull up task overviews, drastically improving context resumption.
2. **[#40722 CLOSED] Add enterprise ID-JAG exchange for MCP OAuth** | https://github.com/openai/codex/pull/40722  
   Enterprise SSO security feature adds a non-interactive identity exchange flow that lets organizations use their existing identity providers to issue resource-bound MCP bearer tokens without manual user login.
3. **[#40716 CLOSED] Add thread ownership metadata for managed worktrees** | https://github.com/openai/codex/pull/40716  
   Resolves the longstanding bug where project-level `.codex/hooks.json` files are silently ignored in Git worktrees, by binding threads directly to worktree metadata stored in the Git repository itself.
4. **[#40713 CLOSED] Sanitize credentials from Git remote metadata** | https://github.com/openai/codex/pull/40713  
   Security hardening strips embedded usernames, passwords and API tokens from Git remote URLs before they are stored in thread metadata or transmitted to OpenAI servers, eliminating a major accidental credential leak vector.
5. **[#40691 CLOSED] Harden MCP OAuth callback handling** | https://github.com/openai/codex/pull/40691  
   Patches a potential MCP access vulnerability that could have associated OAuth authorization responses to the wrong registered server in multi-server MCP deployments.
6. **[#40720 CLOSED] Preserve composer hyperlinks across wrapped lines** | https://github.com/openai/codex/pull/40720  
   UI QoL fix ensures long URLs that wrap across multiple lines in the chat input composer remain fully clickable, even when part of the URL is scrolled offscreen.
7. **[#40706 CLOSED] Redact Bedrock API keys from debug output** | https://github.com/openai/codex/pull/40706  
   Fixes a recently discovered vulnerability where Amazon Bedrock custom provider API keys were exposed in plaintext debug logs, implementing custom redaction that preserves region metadata for troubleshooting.
8. **[#40692 CLOSED] Remove WebSocket transport from code-mode hosts** | https://github.com/openai/codex/pull/40692  
   Deprecates the legacy unsecure Web

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-08-26
Source: github.com/google-gemini/gemini-cli

---
## 1. Today's Highlights
The Gemini CLI team shipped 4 new builds over the last 24 hours, including the stable v0.57.0 release, with key fixes for OAuth Cloud Workstations flows, symlink path consistency, and stale cancellation errors in the A2A server. A wave of high-priority security patches addressing SSRF risks, unauthenticated A2A endpoints, and MCP extension consent bypasses are currently under active review. Top user-facing P1 agent bugs including generalist agent indefinite hangs and subagent false success reporting after hitting max turn limits are now queued for retesting as part of the official release rollup workstream.

---
## 2. Releases
Four new versions were published in the last 24 hours:
1. **v0.57.0 (stable)** ([link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0)): Fixes dynamic Cloud Workstations proxy redirect URI resolution for OAuth flows, and resolves a swallowed directory mismatch error for IDE connections.
2. **v0.57.0-preview.1** ([link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.1)): Cherry-picked critical core fixes to patch the earlier v0.57.0-preview.0 pre-release build.
3. **v0.58.0-preview.0** ([link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0-preview.0)): Implements consistent symlink evaluation for ignore path handling, plus auto-generated changelog updates for prior previews.
4. **v0.56.0-nightly.20260825.g812f7a2bc** ([link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260825.g812f7a2bc)): 2026-08-25 nightly with fixes for stale cancellation errors in the A2A server, and top-level safety checker declaration in write policy configuration.

---
## 3. Hot Issues
Top 10 most engaged recently updated issues:
1. **#22323 P1 Bug** ([link](https://github.com/google-gemini/gemini-cli/issues/22323)): Subagent reports `GOAL` success after hitting MAX_TURNS, hiding interruption (13 comments, 2 👍). Critical reliability gap that leaves users unaware their code analysis tasks were cut off early.
2. **#21409 P1 Bug** ([link](https://github.com/google-gemini/gemini-cli/issues/21409)): Generalist agent hangs indefinitely when delegating to subagents (8 comments, 8 👍). Highly upvoted UX blocker, requiring users to manually instruct the model to skip subagents as a workaround.
3. **#19873 P2 Enhancement** ([link](https://github.com/google-gemini/gemini-cli/issues/19873)): Leverage Gemini's native bash affinity via zero-dependency OS sandboxing (8 comments). Major roadmap item designed to boost shell execution performance and security by matching the model's native POSIX tool training.
4. **#22745 P2 Epic** ([link](https://github.com/google-gemini/gemini-cli/issues/22745)): Assess impact of AST-aware file reads, search, and codebase mapping (7 comments). Aims to reduce token bloat and wasted LLM turns by targeting only relevant code sections instead of reading full files.
5. **#25166 P1 Bug** ([link](https://github.com/google-gemini/gemini-cli/issues/25166)): Shell execution gets stuck at "Waiting input" after command completes (4 comments, 3 👍). Breaks core shell workflow, forcing users to manually interrupt the CLI after every finished non-interactive command.
6. **#21983 P1 Bug** ([link](https://github.com/google-gemini/gemini-cli/issues/21983)): Browser subagent fails on Wayland (4 comments). Blocks all Linux Wayland users from accessing the browser automation feature, a key accessibility gap for desktop Linux developers.
7. **#20079 P2 Bug** ([link](https://github.com/google-gemini/gemini-cli/issues/20079)): Symlinked custom agent files in `~/.gemini/agents/` are not recognized (4 comments). Breaks dotfile and shared configuration workflows for power users, targeted for resolution by the recent symlink path evaluation fix.
8. **#26525 P2 Security Bug** ([link](https://github.com/google-gemini/gemini-cli/issues/26525)): Add deterministic redaction and reduce Auto Memory logging (4 comments). Addresses a privacy gap where secret content could be sent to model context before redaction runs.
9. **#21968 P2 Bug** ([link](https://github.com/google-gemini/gemini-cli/issues/21968)): Gemini CLI does not automatically use custom skills and sub-agents (6 comments). Wastes user setup effort, requiring explicit manual calls to custom tools instead of contextual automatic use.
10. **#22267 P2 Bug** ([link](https://github.com/google-gemini/gemini-cli/issues/22267)): Browser Agent ignores `settings.json` `maxTurns` and other config overrides (3 comments). Prevents power users from tuning browser agent behavior via documented global/project configurations.

---
## 4. Key PR Progress
1. **#29081** ([link](https://github.com/google-gemini/gemini-cli/pull/29081)): Fixes SSRF vulnerabilities in MCP OAuth metadata discovery and authentication, enforcing HTTPS rules per IETF RFC standards to block malicious MCPs from making unauthorized internal network requests.
2. **#29087** ([link](https://github.com/google-gemini/gemini-cli/pull/29087)): Prevents concurrent extension install races, using existing file locking to eliminate corrupted extension installs when multiple Gemini CLI processes run in parallel.
3. **#2908

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-08-26
---
## 1. Today's Highlights
The latest v1.0.81-10 release rolls out the long-awaited plugins dashboard to all users, marking a major milestone for extensibility workflows in Copilot CLI. The top-voted open feature request for native Vim/Vi input mode support crossed 74 upvotes after renewed community discussion this window. Multiple new high-severity bug triages related to MCP authentication and BYOK (bring-your-own-key) multimodal support were filed immediately after the latest release went live.
---
## 2. Releases
One new stable pre-release build shipped in the last 24 hours:
### v1.0.81-10
- **New**: Full rollout of the plugins dashboard, accessible via `/plugin`, `/mcp`, or `/skills` commands. Users can opt out entirely by setting the `PLUGINS_DASHBOARD=false` environment variable to disable both the dashboard and `copilot plugins` CLI commands.
- **Improved**: The `x` key now functions as a uniform delete shortcut across all interactive UI surfaces, including sandbox config, settings, MCP menus, session dialogs, and the diff viewer.
---
## 3. Hot Issues
1. **[#13 CLI input should have a vi/vim input mode](https://github.com/github/copilot-cli/issues/13)**: The most popular open feature request with 74 upvotes and 8 comments, addressing a top pain point for power users who prefer keyboard-driven modal editing for CLI text workflows.
2. **[#4542 Workspace .mcp.json detected by `mcp list` but not connected in agent sessions](https://github.com/github/copilot-cli/issues/4542)**: Recent regression that breaks onboarding for repository-shared MCP servers, with no current workaround confirmed; 1 upvote and 2 active discussion threads.
3. **[#4035 Voice installer fails with 401 trying to pull packages from private Azure Artifacts feed](https://github.com/github/copilot-cli/issues/4035)**: Blocks voice mode setup entirely for all users not inside the Microsoft internal org, even though the required runtime packages are publicly hosted on NuGet.
4. **[#4224 OTel spans for subagent calls omit billing attributes](https://github.com/github/copilot-cli/issues/4224)**: Breaks enterprise self-hosted cost tracking workflows by undercounting AI credit consumption for delegated subagent task execution, with 3 active comments from enterprise admins.
5. **[#4272 New models are greyed out and cannot be selected for enterprise users](https://github.com/github/copilot-cli/issues/4272)**: 3 upvotes from enterprise users reporting no documented path for org admins to enable newly released models via the Copilot policy dashboard.
6. **[#4604 User-configured api.githubcopilot.com/mcp server loses injected Copilot token on v1.0.81-10](https://github.com/github/copilot-cli/issues/4604)**: New post-release regression that breaks official GitHub MCP endpoints, with no usable recovery path available to end users.
7. **[#3380 Add `--disable-repo-mcps` flag to skip loading MCPs from repository config files](https://github.com/github/copilot-cli/issues/3380)**: Security-focused feature request that would let users run Copilot CLI without automatically executing unvetted MCP servers shipped in third-party repositories.
8. **[#4593 Archiving worktree sessions fails on Windows with os error 32](https://github.com/github/copilot-cli/issues/4593)**: Blocks Windows developers from cleaning up old session state, caused by the CLI failing to terminate the active session process tree before deleting the worktree directory.
9. **[#4492 Desktop app WebView2 renderer self-aborts with STATUS_BREAKPOINT](https://github.com/github/copilot-cli/issues/4492)**: Unresolved crash that causes full blank window state and lost unsaved canvas work, with 23 confirmed reproduction events on a single affected user machine.
10. **[#4600 Images returned from MCP tool results are silently dropped when using a BYOK provider](https://github.com/github/copilot-cli/issues/4600)**: Breaks multimodal MCP workflows for teams using self-hosted or custom model endpoints, with no user-facing error surfaced to indicate media content was not delivered to the model.
---
## 4. Key PR Progress
No pull requests were updated, merged, or opened across the `github/copilot-cli` repository in the 24-hour reporting window.
---
## 5. Feature Request Trends
Community feature requests continue to cluster around 5 high-priority directions:
1. Native Vim/modal editor input support for all CLI interactive text fields
2. Cross-machine and cross-team session sharing and cloud sync for collaborative debugging use cases
3. Expanded MCP configuration controls, including global opt-out of repository-shipped MCP definitions to reduce attack surface
4. Extensibility hooks for programmatic session management, most notably support for custom script-based session renaming
5. UX enhancements for the `ask_user` tool that combine suggested enum choices with a freeform "other" custom input escape hatch
---
## 6. Developer Pain Points
Recurring high-frequency frustrations reported this window include:
1. Post-v1.0.8x MCP regressions spanning broken workspace config loading, missing injected authentication tokens, and lingering rendering bugs for failed tool result UI
2. Enterprise operational gaps: no full visibility into subagent call billing metrics, no public documentation for enabling newly released models via organizational policy
3. Cross-platform stability gaps specific to Windows, including file lock errors for worktree session cleanup, and frequent unprompted WebView2 crashes on the desktop build
4. False positive file permission blocks, where the CLI incorrectly flags valid relative-path parent directory access for subfolder project directories as unsafe out-of-scope access

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-26
Repository: github.com/MoonshotAI/kimi-cli

---
## 1. Today's Highlights
No new releases or merged pull requests landed for the Kimi Code CLI project in the 24-hour reporting window. The highest-priority user report this period is a critical regression in the latest v0.38.0 macOS build, where core Edit and Write file tools falsely report successful completion without persisting changes to local disk, breaking primary AI-assisted file editing workflows. A 37-day-old open context compaction bug affecting Windows users also received new updates from the original reporter, who submitted additional debug data to help maintainers triage the issue.

## 2. Releases
No new official Kimi Code CLI versions were published in the 24-hour window ending 2026-08-26.

## 3. Hot Issues
Only 2 recently updated issues were tracked for this period, both classified as high-priority user-facing bugs:
1.  **#2617: Edit/Write tools report success but never write to disk (0.38.0, macOS)**
    * Why it matters: This 100% reproducible regression breaks the core file modification functionality that serves as the primary use case for Kimi Code CLI. Silent no-op failures mean users cannot trust returned success signals, and will lose expected work unless they manually verify every edited file after tool execution.
    * Community reaction: 2 user comments confirm secondary reproduction of the bug, with active requests for an immediate hotfix patch.
    * Link: https://github.com/MoonshotAI/kimi-cli/issues/2617
2.  **#2523: Context compaction bug — Kimi Code reopens an already completed and deleted task**
    * Why it matters: This session state bug affects Windows users running v0.6.3 with the K2.7 coding model, disrupting active workstreams by unexpectedly resurrecting old, finished, deleted tasks during context optimization runs. This can trigger unintended modifications to archived work and waste user processing resources.
    * Community reaction: The original reporter provided new debug attachments in the last 24 hours to accelerate maintainer triage after 37 days of inactivity on the issue.
    * Link: https://github.com/MoonshotAI/kimi-cli/issues/2523

## 4. Key PR Progress
No open, merged, or closed pull requests received any updates in the 24-hour reporting window. No new feature submissions, security patches, or refactoring changes were opened for review in this period.

## 5. Feature Request Trends
From the full set of recently updated user issues, two high-priority feature directions are emerging for the active community:
1.  Explicit post-write confirmation and verification flows for all file modification tools, including user-accessible change previews and checksum validation to eliminate silent failure modes
2.  User-controlled granularity settings for context compaction, letting end users explicitly define rules for retaining, archiving, or purging completed historical tasks to avoid unwanted resurrection of old work

## 6. Developer Pain Points
Two recurring high-impact frustrations were surfaced in recent user reports:
1.  Lack of transparent, actionable error reporting for core file I/O operations, with tools returning misleading success status even when no changes are persisted to local disk
2.  Cross-platform and cross-version consistency gaps, where macOS users on the latest stable release face distinct breakages that do not affect Windows users on older v0.6.x builds, with no centralized public list of platform-specific known bugs for users to reference before upgrading.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-08-26
---

## 1. Today's Highlights
The latest v1.18.23 patch release resolves critical Cloudflare AI Gateway routing and Anthropic model compatibility bugs, while the community is rallying around a widespread ongoing outage of the free Ox Alpha model tier that breaks all tool-enabled requests. Recent merged pull requests deliver major performance and quality of life upgrades, including a 1800x speedup for TUI image pasting and full Italian localization support.

## 2. Releases
### v1.18.23
- Core bugfix for Cloudflare AI Gateway routing: all third-party non-Workers models now work as expected via the gateway REST API
- Compatibility fix for Anthropic models: dotted model IDs such as `claude-haiku-4.5` are now automatically converted to valid Anthropic-standard dashed slugs to eliminate routing failures

## 3. Hot Issues (Top 10)
1. [#8345](https://github.com/anomalyco/opencode/issues/8345) [OPEN] macOS x64 zsh "illegal hardware instruction" crash: 23 comments, 7 👍. A 7-month old unresolved bug affecting Intel Mac users running v1.1.19 that blocks launch entirely, with dozens of affected users sharing workarounds in the thread.
2. [#12405](https://github.com/anomalyco/opencode/issues/12405) [CLOSED] Connection reset by server with Zhipu GLM4.7: 19 comments. A recently resolved pain point for Chinese users running local GLM models behind proxies on Windows 10.
3. [#44300](https://github.com/anomalyco/opencode/issues/44300) [OPEN] Ox Alpha Free tool requests return endpoint unavailable: 13 comments, 5 👍. The flagship widespread ongoing outage, confirming all tool-bearing chat completion requests fail across both Zen and OpenCode Go routes for the free model tier.
4. [#19143](https://github.com/anomalyco/opencode/issues/19143) [OPEN] Desktop app Cmd+F/Ctrl+F message search: 9 comments, 8 👍. The most upvoted active feature request, addressing the lack of ability to quickly locate content in long chat sessions.
5. [#35434](https://github.com/anomalyco/opencode/issues/35434) [CLOSED] TUI multi-question tool calls fail silently: 7 comments. A resolved v1.17.13 regression that broke multi-step user question workflows for TUI power users.
6. [#44850](https://github.com/anomalyco/opencode/issues/44850) [OPEN] Ox Alpha Free tool execution endpoint failure: 7 comments, 2 👍. A duplicate cross-report confirming the outage impacts active agent workflows for projects like NVGT development.
7. [#7712](https://github.com/anomalyco/opencode/issues/7712) [OPEN] Context editing to delete individual messages: 4 comments, 12 👍. One of the highest-rated feature requests, asking for a way to prune dead-end conversation context to avoid wasted token usage.
8. [#43277](https://github.com/anomalyco/opencode/issues/43277) [OPEN] Permanently stuck sessions that survive reboots: 5 comments. A critical data loss bug where sessions refuse new messages and cannot be recovered even after full system restarts.
9. [#39632](https://github.com/anomalyco/opencode/issues/39632) [OPEN] IME composition breaks on first v2 prompt keystroke: 3 comments, 2 👍. A UX breakage for CJK and non-Latin users that prevents proper input of non-ASCII text in the new v2 input interface.
10. [#40335](https://github.com/anomalyco/opencode/issues/40335) [OPEN] Native MCP server setup UI in Desktop app: 3 comments, 2 👍. A high-priority feature that eliminates the need for manual JSON config or CLI edits to connect MCP (Model Context Protocol) servers.

## 4. Key PR Progress (Top 10)
1. [#44971](https://github.com/anomalyco/opencode/pull/44971) [OPEN] feat(tui): Add persistent session terminals (author jlongster): Introduces a clean split-pane layout with chat on the left and dedicated persistent terminal on the right, removing the complexity of arbitrary recursive pane trees.
2. [#45085](https://github.com/anomalyco/opencode/pull/45085) [OPEN] fix(ai): Send response instructions at top level: Cleans up synthetic system prompt handling to use the official top-level `instructions` field, eliminating model compatibility breakages caused by misplaced system messages.
3. [#45079](https://github.com/anomalyco/opencode/pull/45079) [OPEN] feat(opencode): Support Azure CLI authentication: Adds Microsoft Entra ID auth via existing logged-in Azure CLI sessions, removing the need to manually provision and input API keys for enterprise Azure users.
4. [#43498](https://github.com/anomalyco/opencode/pull/43498) [CLOSED] fix(ai): Preserve Vertex Anthropic tool continuations: Resolves a Google Cloud Vertex endpoint HTTP 404 bug that broke Claude tool continuation flows after returning local tool results.
5. [#45075](https://github.com/anomalyco/opencode/pull/45075) [CLOSED] fix(ai): Require reasoning fields for DeepSeek assistants: Fixes the DeepSeek V4 thinking mode option mismatch, automatically inferring valid reasoning parameters from model IDs and endpoint configurations.
6. [#45002](https://github.com/anomalyco/opencode/pull/45002) [OPEN] feat(core): Repair malformed tool arguments before validation: Adds an internal pre-processing layer that fixes common model output errors (bad JSON, stringified numbers/booleans) before schema validation to avoid unnecessary tool call failures.
7. [#44423](https://github.com/anomalyco/opencode/pull/44423) [OPEN] fix(app): Enable touch scroll for project picker: Adds proper touch event forwarding to support OpenCode usage on tablet and hybrid touch-first devices.
8. [#38880](https://github.com/anomalyco/opencode/pull/38880) [CLOSED] fix(tui): 1800x image pasting performance improvement: Eliminates legacy slow shell subprocess calls for image paste operations, cutting pasting latency from multiple seconds to near-instant.
9. [#38878](https://github.com/anomalyco/opencode/pull/38878) [CLOSED] feat(opencode): Add `--resume` session picker: Introduces a CLI native interactive picker to find and resume old sessions, massively reducing friction for users restoring prior workspaces.
10. [#38841](https://github.com/anomalyco/opencode/pull/38841) [CLOSED] feat(i18n): Add Italian language translation: Delivers a full native Italian locale pack for end users in Italian-speaking regions.

## 5. Feature Request Trends
Three distinct high-priority feature directions emerged this cycle:
1. **Chat workflow quality of life**: Top requested items include in-session message search, individual message context editing, and permanent session/project deletion controls to manage long-running workspaces.
2. **Ecosystem and localization support: High user demand for a no-code native UI to configure MCP servers, plus expanded locale support (Hebrew is currently in active development following Italian localization release).
3. **Enterprise and platform usability: Native Azure CLI Entra ID authentication for organizational deployments, plus a persistent split-pane terminal for TUI power users.

## 6. Developer Pain Points
1. **Widespread free tier outage**: The unaddressed Ox Alpha free model tool failure outage is generating dozens of duplicate reports, blocking new and casual users who rely on the free tier for testing.
2. **Model compatibility edge cases**: Multiple recurring breakages from misaligned system message ordering (for strict chat template models like Qwen 3.8-27B on SGLang), mismatched inference parameters (DeepSeek thinking modes), and third-party gateway routing rules.
3. **Long-standing platform bugs**: Unresolved multi-month platform-specific breakages including Intel macOS x64 launch crashes, Windows console flash on subprocess spawn in v2 builds, and broken IME input for non-ASCII users.
4. **Large context stability issues**: Users report major latency spikes for sessions with over 90k tokens, plus unrecoverable stuck sessions that persist across full system restarts with no documented recovery path.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-08-26
---
## 1. Today's Highlights
Today’s activity centers on prioritizing Windows platform support workflows, alongside over 20 merged bug fixes and feature improvements targeted at provider compatibility, TUI UX, and agent session stability. No new official stable releases were published in the last 24 hours, but multiple high-severity regressions from the recent 0.84.3 release have already been patched in the main branch. The community also welcomed two new open source built-in model provider contributions, plus a long-awaited opt-in eager tool execution feature that cuts code workflow latency by ~20%.

## 2. Releases
No new Pi releases were published in the 24 hours leading up to 2026-08-26.

## 3. Hot Issues (Top 10 Notable)
| Issue | Link | Context & Community Reaction |
|-------|------|-------------------------------|
| Windows Usage Feedback Triage | [#7547](https://github.com/earendil-works/pi/issues/7547) | The highest-engagement open thread (49 comments) where core maintainers crowdsource real-world Windows user pain points to prioritize native first-class support, instead of relying on WSL hackarounds. Hundreds of Windows devs are sharing broken configuration edge cases across different Pi installation methods. |
| AgentSession Lifecycle Meta Bug | [#5886](https://github.com/earendil-works/pi/issues/5886) | Filed by core maintainer mitsuhiko, this aggregates a class of hard-to-reproduce session hang and continuation failures for power users. 9 commenters have reported their own matching edge cases to help narrow down root cause. |
| TUI Word-Per-Line Streaming Corruption | [#8584](https://github.com/earendil-works/pi/issues/8584) | A high-visibility UX bug that garbled assistant output after long tool calls that returned wide source file content. Now closed, 5 users confirmed the patch resolves their repeated corruption issues. |
| Unhandled Truncated Response Errors | [#7855](https://github.com/earendil-works/pi/issues/7855) | A pervasive bug affecting all OpenAI-compatible local deployments (VLLM etc.) that forced users to manually resume mid-task after random truncation. Marked no-action yesterday after an upstream adapter fix was shipped. |
| SiliconFlow Provider Addition | [#4742](https://github.com/earendil-works/pi/issues/4742) | A 3+ month old feature request widely demanded by Chinese developers, now closed with full support for both international and China regional endpoints merged to main. |
| 0.84.3 Extension Load Regression | [#8620](https://github.com/earendil-works/pi/issues/8620) | A critical recent stable release regression that broke all third-party extensions importing Pi core modules. Triage was completed within hours of user reports, with the fix queued for the next patch release. |
| Extension Update Breakage on npm 11.16.0 | [#6600](https://github.com/earendil-works/pi/issues/6600) | In-progress fix addressing new default script-blocking behavior in the latest npm release that breaks `pi update --extensions` for all users on npm 11.16+. Maintainers are testing transparent flag passing to avoid confusing end-user prompts. |
| Vision Session Media Budget Brick | [#8636](https://github.com/earendil-works/pi/issues/8636) | A widespread pain point for Gemini/Claude vision users where accumulated image payloads across long sessions exceed per-request patch limits and break the entire workflow. Multiple users have shared their workarounds for the team to prioritize a proper fix. |
| Node.js 24 taskkill ENOENT Bug | [#6596](https://github.com/earendil-works/pi/issues/6596) | Open in-progress bug that crashes process tree termination for users running the new Node.js 24 runtime. Testers are validating the proposed absolute System32 path resolution fix. |
| Codex Image File Reference Optimization | [#8617](https://github.com/earendil-works/pi/issues/8617) | A proposed optimization to avoid re-sending base64 image bytes across every Codex request, cutting token usage by 30%+ for long sessions with many vision assets. The author’s working prototype has received positive initial feedback from maintainers. |

## 4. Key PR Progress (Top 10 Important)
1. **Add Opper Provider** [#8639](https://github.com/earendil-works/pi/pull/8639): Merged, adds full official built-in support for the Opper OpenAI-compatible model platform, including complete test coverage and user documentation.
2. **Implement Eager Tool Execution** [#8629](https://github.com/earendil-works/pi/pull/8629): New opt-in feature that starts execution of safe `read` tool calls before the model’s full response finishes, reducing latency for code-heavy workflows by ~20%.
3. **Fix Read Tool Off-by-One Line Count** [#8623](https://github.com/earendil-works/pi/pull/8623): Resolves a years-old bug that added a phantom extra line entry in file metadata for all files ending with a trailing newline.
4. **TUI Click-to-Move Cursor** [#8547](https://github.com/earendil-works/pi/pull/8547): Open quality-of-life PR that adds standard terminal mouse UX, letting users click anywhere in the input prompt to reposition the text cursor instead of only using keyboard navigation.
5. **Omit tool_choice When No Tools Are Defined** [#8633](https://github.com/earendil-works/pi/pull/8633): Compatibility fix that prevents third-party LLM providers from rejecting requests that send an explicit empty tool_choice value alongside zero configured tools.
6. **Use ExtensionContext Cwd For Registered Tools** [#8627](https://github.com/earendil-works/pi/pull/8627): Critical extension compatibility fix that ensures all custom tools resolve file paths against the active session working directory instead of the static path set at tool registration time.
7. **Preserve Codex Thread Affinity Headers** [#8570](https://github.com/earendil-works/pi/pull/8570): Restores missing `thread-id` headers for OpenAI Codex requests, improving prompt cache hit rates and consistency for long-running Codex sessions.
8. **Hoist Bedrock Tool Result Images Out Of ToolResult Blocks** [#8642](https://github.com/earendil-works/pi/pull/8642): Fixes a hard compatibility issue that made OpenAI models hosted on AWS Bedrock reject any request with image content nested inside tool result payloads.
9. **Preserve Aborted Stop Reason During Lazy Setup** [#8635](https://github.com/earendil-works/pi/pull/8635): Open PR that correctly propagates user-initiated abort signals through the lazy stream setup flow, so canceled requests show up as aborted instead of generic unhandled failures.
10. **Auto-Derive OpenRouter Reasoning Controls** [#8614](https://github.com/earendil-works/pi/pull/8614): Merged fix that automatically maps Pi’s native thinking level settings to OpenRouter-specific reasoning parameters, eliminating manual config steps for models with adjustable reasoning budgets.

## 5. Feature Request Trends
1. **Expanded regional provider support**: Top requested new providers are regionally hosted open model platforms like SiliconFlow, to avoid manual custom provider setup for non-US developers.
2. **Long session performance optimization**: Users are prioritizing changes that cut token waste, including deduplicating repeated image payloads and adding eager execution for low-risk tools.
3. **TUI mouse UX parity**: Quality of life requests for standard terminal mouse interactions to reduce over-reliance on keyboard navigation for interactive workflows.
4. **First-class Windows native support**: The single highest-requested platform improvement, to eliminate the current inconsistent experience across PowerShell versions, WSL, and different Node.js runtimes.

## 6. Developer Pain Points
1. Uncaught compatibility regressions in stable releases, most recently the 0.84.3 extension load breakage that impacted thousands of users immediately after upgrade.
2. Fragmented Windows runtime behavior, with no single validated supported configuration that works across all common Windows 10/11 setups.
3. Incomplete transient error handling for OpenAI-compatible third-party providers, where intermittent backend failures that succeed on immediate retry are incorrectly surfaced as terminal fatal errors.
4. Unhandled breaking changes in upstream dependencies, such as the new npm 11.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-08-26
Repository: github.com/QwenLM/qwen-code

---

## 1. Today's Highlights
This 24-hour cycle opens with the release of the v0.22.0 nightly build, alongside the resolution of the critical P1 bug that bricked sessions for all OpenAI-compatible providers when users set `/effort max`. The community advanced 20 active pull requests spanning multi-agent workflow hardening, WebShell UX improvements, CI stability fixes, and foundational support for Debug Adapter Protocol (DAP) integration for agentic debugging. Recent updates prioritize reducing context bloat, eliminating hidden state, and improving the reliability of unattended long-running automation workloads.

## 2. Releases
### v0.22.0-nightly.20260825.22bb5e8b9f
[Official Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260825.22bb5e8b9f)
The first signed nightly build for the v0.22 release cycle ships with a core WebShell fix that correctly passes the session workspace current working directory when opening new sessions from the overview panel, resolving broken path resolution for users launching workspaces from the WebShell dashboard.

## 3. Hot Issues
Top 10 highest-impact updated issues from the past 24 hours:
1. **#9459 [CLOSED] P1: `/effort max` bricks sessions on OpenAI-compatible providers** [Link](https://github.com/QwenLM/qwen-code/issues/9459)
   With 10 comments, this critical bug was patched after users reported that the UI-exposed `/effort max` setting was not clamped by the validation function, causing all subsequent requests in a session to return 400 errors until manually reset. All sessions affected by this bug are now recoverable.
2. **#8097 [OPEN] P2: Background agent coordination gaps** [Link](https://github.com/QwenLM/qwen-code/issues/8097)
   8 community comments highlight a core pain point for multi-agent roadmap users: parallel background Explore subagents frequently duplicate work, signal premature completion, and break non-interactive `send_message` calls mid-execution.
3. **#6762 [OPEN] P2: Skill Context Lifecycle Management Feature Request** [Link](https://github.com/QwenLM/qwen-code/issues/6762)
   Voted top context-performance priority with 6 comments, this request adds mechanisms to unload, compress, or archive old SKILL.md content from conversation history that currently persists permanently and bloats session token counts.
4. **#9198 [OPEN] P2: Long-running sessions hit OOM after 1+ week of runtime** [Link](https://github.com/QwenLM/qwen-code/issues/9198)
   6 users confirmed that even 1TB RAM servers run out of memory with unattended multi-week Qwen Code sessions, breaking terminal interactivity and corrupting input state post-OOM.
5. **#9827 [CLOSED] P2: Tool allowlist settings do not restrict schemas sent to LLMs** [Link](https://github.com/QwenLM/qwen-code/issues/9827)
   This 4-comment security bug reported that explicit `permissions.allow` rules only filtered visible tools in the CLI, but sent the full unredacted tool schema set to the underlying LLM, creating unexpected permission escalation risks.
6. **#9733 [OPEN] P2: Loop detection false positives kill unattended verification cycles** [Link](https://github.com/QwenLM/qwen-code/issues/9733)
   4 users noted that the built-in infinite loop detector incorrectly flags legitimate sequential write-run-edit verification cycles as stuck, terminating automation runs with no option to resume without human intervention.
7. **#10051 [OPEN] P3: Native Debug Adapter Protocol (DAP) Integration Request** [Link](https://github.com/QwenLM/qwen-code/issues/10051)
   A high-popularity feature request with 4 comments that would let Qwen Code interact directly with debugger runtimes programmatically, instead of relying only on terminal output and static source analysis for debugging tasks.
8. **#9230 [CLOSED] P2: Follow-up side queries defeat server-side prefix caching** [Link](https://github.com/QwenLM/qwen-code/issues/9230)
   This 4-comment performance bug caused ~0% prompt cache reuse for self-hosted llama.cpp deployments, forcing full prompt reprefills for every session turn and drastically increasing inference costs.
9. **#9784 [OPEN] P0: Run full `/review` pipeline in isolated fork subagent context** [Link](https://github.com/QwenLM/qwen-code/issues/9784)
   A core roadmap priority with 3 comments that moves the resource-heavy 95k-token full PR review workflow out of the user's main chat session, preventing review crashes from corrupting primary user state.
10. **#8227 [OPEN] P2: Windows @-file reads lack symlink protection** [Link](https://github.com/QwenLM/qwen-code/issues/8227)
    This 5-comment security gap notes that the existing TOCTOU / symlink hardening for `@` file references is not implemented for Windows (O_NOFOLLOW does not exist natively), leaving Windows users exposed to path traversal risks. Maintainers have tagged this issue as welcome for external PR contributions.

## 4. Key PR Progress
Top 10 highest-priority active PRs updated in the past 24 hours:
1. **#10011 feat(web-shell): Persist reasoning effort settings** [Link](https://github.com/QwenLM/qwen-code/pull/10011)
   Fixes the broken reasoning controls for lazy pre-daemon WebShell sessions, syncs user reasoning effort selections to global config, and persists across daemon restarts.
2. **#9974 fix(core): Resolve 3 run-lifecycle defects that waste LLM credits** [Link](https://github.com/QwenLM/qwen-code/pull/9974)
   Patches unhandled edge cases: abandoned workflow runs now properly terminate, failed session swaps no longer double-count token usage, and orphaned run context is automatically garbage collected.
3. **#10049 feat(skills): Namespace extension skill registry keys by extension name** [Link](https://github.com/QwenLM/qwen-code/pull/10049)
   Adds full protection against skill name collisions for third-party extension ecosystems, routing all skill lookup, slash command registration, and disable list matching through the new qualified `<extension>:<skill-name>` naming schema.
4. **#10053 fix(cli): Show active scheduled tasks at session start** [Link](https://github.com/QwenLM/qwen-code/pull/10053)
   Resolves the longstanding "hidden cron task" pain point by displaying a startup notification that counts all active durable `/loop` tasks, and surfaces the new `\loop list` command for users to inspect and manage scheduled work.
5. **#9717 feat(review): Add prose-execution audit and counter-frame audit** [Link](https://github.com/QwenLM/qwen-code/pull/9717)
   Extends the PR review skill to catch defects in modified SKILL.md, agent definition files, and test assertion count mismatches that were missed in earlier review passes.
6. **#10036 fix(ci): Route release pipeline Linux jobs to dedicated ECS runner pool** [Link](https://github.com/QwenLM/qwen-code/pull/10036)
   Eliminates transient ENOSPC "no space left on device" failures on high-concurrency self-hosted CI runners for release pipeline jobs, cutting release flakiness by ~70% per maintainer estimates.
7. **#9636 feat: Add native advisor model tool** [Link](https://github.com/QwenLM/qwen-code/pull/9636)
   New opt-in feature that lets users configure a separate secondary LLM to generate independent second opinions on task execution, with zero extra context bloat for the primary task flow.
8. **#9441 fix(core): Show full edit/exec diffs when PreToolUse hook returns approval request** [Link](https://github.com/QwenLM/qwen-code/pull/9441)
   Overhauls the manual approval UX to display full previews of pending file edits and shell command outputs, instead of only raw hook reasoning text that provided no context for users to approve or reject.
9. **#9987 feat(core): Add trusted generated-scripts root for workflow loads** [Link](https://github.com/QwenLM/qwen-code/pull/9987)
   Automatically whitelists `<projectDir>/workflows/generated` as a safe location for agent-authored workflow scripts, eliminating the requirement for users to manually approve every new agent-generated workflow.
10. **#9771 feat(autofix): Add live status heartbeat for long-running autofix rounds** [Link](https://github.com/QwenLM/qwen-code/pull/9771)
    Updates the PR status comment every 5 minutes for multi-hour autofix review runs, so users can distinguish between healthy slow execution and stuck crashed jobs from the GitHub UI.

## 5. Feature Request Trends
Distilled top requested feature directions from this cycle's issues:
1. **Context performance optimization**: The highest-priority ask for long-running workloads is full skill context lifecycle management, paired with transparent context usage breakdown telemetry and improvements to server-side prefix caching to reduce inference costs.
2. **Agent debugging tooling**: Community momentum is building for DAP integration and the experimental session workflow cockpit to visualize step-by-step agent execution, replacing ad-hoc terminal log parsing for complex automation tasks.
3. **Cross-platform WebShell UX parity**: Multiple requests focus on making WebShell preferences (reasoning effort, sidebar layout) persist across reloads and work reliably in narrow embedded viewports for IDE integration use cases.
4. **

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-08-26
---
## 1. Today's Highlights
This 24-hour update marks full code completion for the v0.9.12 release cycle, with all critical release blockers merged into the dedicated integration branch ahead of final RC validation. Core shipped improvements include the long-requested TUI transcript block action shortcut set, automatic session relaunch after binary updates, and full resolution of the widely reported `git index.lock` contention bug that interfered with user workspace git operations. The project also advanced its Chinese localization roadmap to support its fast-growing APAC user base, alongside critical security hardening for sandbox access controls and fleet-level cost governance.

## 2. Releases
No new official stable/preview releases were published in the last 24 hours. The v0.9.12 release cycle is currently code-complete and undergoing pre-RC validation for version number bump, changelog generation, and release gate checks.

## 3. Hot Issues (Top 10 Notable)
| Issue | Summary & Relevance | GitHub Link |
|---|---|---|
| #5316 | Epic-level tracking ticket for full TUI crate decomposition, the most actively discussed architecture roadmap item (16 comments) that will split the current monolithic TUI codebase into smaller, maintainable modular components for easier third-party contributions. | https://github.com/Hmbown/CodeWhale/issues/5316 |
| #5588 | Provider neutrality audit identifying 18 DeepSeek-exclusive hardcoded behavior gates. Fixing these gates will make the TUI fully vendor-agnostic, a top requirement for enterprise users running multi-provider LLM fleets. | https://github.com/Hmbown/CodeWhale/issues/5588 |
| #4394 | Request to publish a formal structured context compaction survival contract. This will give users explicit guarantees of what data persists across long agent runs, eliminating unexpected silent context truncation during extended workloads. | https://github.com/Hmbown/CodeWhale/issues/4394 |
| #5617 | Widely reported bug where background CodeWhale git probes hold `.git/index.lock` and block users' own manual `git commit` operations, the top daily pain point for active developer users. | https://github.com/Hmbown/CodeWhale/issues/5617 |
| #5601 | Critical UX break report from Chinese users: fresh installs throw 404 errors for MiniMax and Xiaomi LLM provider configuration due to hardcoded incorrect endpoint URLs, exposing gaps in non-DeepSeek domestic LLM setup flows. | https://github.com/Hmbown/CodeWhale/issues/5601 |
| #5482 | Epic tracking full review and Simplified Chinese localization for all project documentation, addressing the language barrier for the project's 100k+ fast-growing Chinese user base. | https://github.com/Hmbown/CodeWhale/issues/5482 |
| #5533 | Feature request for a per-session control surface for supervised operation, allowing external automation harnesses to monitor and control unattended TUI sessions for overnight multi-agent fleet workloads. | https://github.com/Hmbown/CodeWhale/issues/5533 |
| #5618 | Long-term architecture plan to replace all internal `git` CLI shell-out calls with the pure Rust `gix` (gitoxide) library, eliminating git process spawn overhead and lock contention entirely. | https://github.com/Hmbown/CodeWhale/issues/5618 |
| #5581 | Audit of UI surfaces that freeze for long periods at turn boundaries during multi-step model runs, a common user complaint that makes large workloads appear unresponsive. | https://github.com/Hmbown/CodeWhale/issues/5581 |
| #5562 | High-severity reliability bug: stale write claims permanently lock sub-agents out of command execution, breaking multi-agent sessions after hours of runtime and wasting compute resources. | https://github.com/Hmbown/CodeWhale/issues/5562 |

## 4. Key PR Progress (Top 10)
| PR | Summary of Feature/Fix | GitHub Link |
|---|---|---|
| #5576 | v0.9.12 integration work-in-progress branch: all 72 release blocker commits are now code-complete, pending final pre-merge checks for the upcoming RC release. | https://github.com/Hmbown/CodeWhale/pull/5576 |
| #5616 | Fix that moves blocking `git_status`/`git_diff` calls off the async tokio executor thread, eliminating session hangs caused by stalling worker pool threads and the first step to resolve git lock contention. | https://github.com/Hmbown/CodeWhale/pull/5616 |
| #5608 | Implements focused transcript block actions, adding requested `y` (copy content), `Y` (copy metadata), `Enter` (fullscreen view), `r` (raw markdown) keybinds for TUI transcript entries. | https://github.com/Hmbown/CodeWhale/pull/5608 |
| #5593 | Adds the long-requested `/relaunch` command, letting users switch an active running session to a newly installed binary in one step, eliminating the required manual restart after running `/update`. | https://github.com/Hmbown/CodeWhale/pull/5593 |
| #5592 | Ships the opt-in local lifecycle event outbox feature, outputting structured JSONL lifecycle events (turn stalled, turn failed) to a local file or webhook for external monitoring. | https://github.com/Hmbown/CodeWhale/pull/5592 |
| #5594 | Implements the per-session Unix control socket for supervised operation, exposing a newline-framed JSON-RPC API for external tools to send interrupt, status check, and relaunch commands to running TUI instances. | https://github.com/Hmbown/CodeWhale/pull/5594 |
| #5611 | Updates the `/context` inspector to display token cost breakdowns for individual tool definitions and MCP server catalogs, letting users easily debug and trim unexpected context bloat. | https://github.com/Hmbown/CodeWhale/pull/5611 |
| #5613 | Documentation improvement PR that fixes inaccuracies in English source docs and adds the first batch of Tier-2 Simplified Chinese translations aligned with actual codebase behavior. | https://github.com/Hmbown/CodeWhale/pull/5613 |
| #5610 | Fixes Windows verbatim path handling in POSIX word split logic, resolving two long-standing Windows CI test failures and unblocking full Windows support for v0.9.12. | https://github.com/Hmbown/CodeWhale/pull/5610 |
| #5544 | Moves the high-traffic subagent and MCP documentation sections onto the project's i18n dictionary spine, laying the groundwork for seamless automatic localization for all supported languages. | https://github.com/Hmbown/CodeWhale/pull/5544 |

## 5. Feature Request Trends
1. **Full provider neutrality**: Users are pushing to fully decouple the TUI from DeepSeek-specific hardcoded logic to support seamless workflows across all mainstream LLMs, including popular domestic Chinese models for local use cases.
2. **Unattended fleet operation**: Power users running multi-agent fleets for overnight workloads are prioritizing end-to-end control surfaces, event webhooks, and lifecycle monitoring to remove the requirement for manual human oversight.
3. **New user onboarding UX**: Requested quality-of-life features include a guided `/tutorial` flow that maps TUI concepts for users migrating from competing tools (Claude Code, Cursor, Codex) to reduce the steep learning curve.
4. **Context observability**: Users want more granular breakdowns of token cost contributions from tool catalogs, MCP servers, and hidden system prompts to avoid unexpected context window exceedance.

## 6. Developer Pain Points
1. **Git operation contention**: Background internal git probes spawn shelled git processes that frequently hold the `index.lock` file, blocking users' own manual git operations and interrupting local development workflows.
2. **Subagent runtime unreliability**: Stale write claim locks and non-unique approval IDs after supervisor restarts often break multi-agent runs after hours of execution, wasting significant

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*