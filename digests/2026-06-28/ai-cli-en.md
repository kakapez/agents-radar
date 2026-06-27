# AI CLI Tools Community Digest 2026-06-28

> Generated: 2026-06-27 23:02 UTC | Tools covered: 9

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
*Tracking Window: 2026-06-28*

---

## 1. Ecosystem Overview
The 2026 mid-year AI CLI tool landscape is defined by mature first-party vendor offerings paired with fast-moving independent open source alternatives, all prioritizing reduction of friction between raw large language model capability and day-to-day local developer workflows. Almost no tools launched new stable builds in the 24-hour reporting window, with the vast majority of engineering capacity allocated to regression fixes, security hardening, and long-requested quality-of-life improvements rather than headline new functionality. Cross-platform interop reliability, Model Context Protocol (MCP) hardening, and transparent cost guardrails are unifying high-priority workstreams across all active projects. Independent open source tools have now closed most core capability gaps against official vendor CLI offerings, with many exceeding first-party solutions in customization flexibility and multi-provider support.

## 2. Activity Comparison
| Tool Name | Updated Issues (24h) | Updated/Active PRs (24h) | Release Status (24h) |
|-----------|-----------------------|---------------------------|----------------------|
| Claude Code | 30 | 3 | No new public releases |
| OpenAI Codex | >100 aggregated community updates | 10 | 2 new Rust alpha pre-releases (rust-v0.143.0-alpha.27/.28) |
| Gemini CLI | 10 tracked high-priority issues | 10 | No new public releases |
| GitHub Copilot CLI | 16 | 3 | No new public releases |
| Kimi Code CLI | 0 | 0 | No new public releases, no recorded activity |
| OpenCode | 10 tracked high-priority issues | 10 | No new public releases |
| Pi | 26 | 9 | No new public releases |
| Qwen Code | 10 tracked high-priority issues | 10 | 1 new nightly pre-release (v0.19.2-nightly.20260627) |
| DeepSeek TUI (CodeWhale) | >20 aggregated community updates | 20+ merged PRs | No new public releases |

## 3. Shared Feature Directions
Four top requirements appear across multiple tool communities, representing widespread unmet user needs:
1. **Context efficiency and cost optimization**: Prioritized across Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, and DeepSeek TUI. Specific implementations under development include AST-aware code traversal, static repository graph injection, prompt cache reliability fixes, and cache-maximal context modes to reduce unnecessary token bloat and 2-3x inflated operating costs.
2. **MCP and auth reliability hardening**: Prioritized across 6 tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi). Teams are building explicit error messaging for auth failures, concurrent credential store locking, and graceful degradation logic for unresponsive MCP servers to eliminate session hangs caused by MCP disconnections or corrupted local config files.
3. **Transparent usage guardrails**: Requested across Claude Code, OpenAI Codex, GitHub Copilot CLI, and OpenCode. User demands include non-skippable billing warnings for high-cost features, visible session expiration/retention indicators, and explicit user confirmation for high-risk actions (unattended shell execution, bulk file edits) to avoid unexpected overcharges or unintended data loss.
4. **TUI presentation customization**: Requested across Pi, GitHub Copilot CLI, OpenCode, and DeepSeek TUI. Common requests include configurable chat padding, custom keyboard shortcuts, collapsed default tool output for successful operations, and persistent scroll position preservation during streaming markdown outputs.

## 4. Differentiation Analysis
Tools split clearly into four distinct groups with non-overlapping development priorities:
1. **First-party LLM native tools (Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, DeepSeek TUI)**: Feature focus is tightly optimized for the parent vendor’s flagship model. For example, DeepSeek TUI’s cache-maximal mode is built exclusively to leverage DeepSeek V4’s low cached input pricing, while Gemini CLI’s zero-dependency bash sandbox is designed to use Gemini 3’s native POSIX fluency. Target users are power developers who use the corresponding LLM as their primary daily model, with technical approaches leaning on closed core logic and limited extension APIs.
2. **Ecosystem-aligned tool (GitHub Copilot CLI)**: Unique roadmap focused entirely on deep integration with GitHub’s broader Copilot product ecosystem, with no independent feature roadmap outside of GitHub’s enterprise Copilot offering. Target users are individual and enterprise GitHub subscribers with existing Copilot plans.
3. **Independent open source tools (OpenCode, Pi)**: Differentiated by maximum provider agnosticism, extensible public extension APIs, and full support for custom third-party LLM deployments. Pi’s open RPC layer for third-party custom UIs, and OpenCode’s support for custom models attached to enterprise Copilot accounts, directly target users with multi-LLM stacks who reject vendor lock-in.
4. **Low-activity outlier (Kimi Code CLI)**: No public development updates recorded in the tracking window, indicating a minimal maintenance cadence far slower than all peer active tools.

## 5. Community Momentum & Maturity
- **Highest engagement base**: OpenAI Codex has the largest active user community, with 185+ comments on its top open issue, and a 648-upvote request for a native Linux desktop build that represents the highest upvote count across all tracked projects.
- **Fastest iteration velocity**: DeepSeek TUI (20+ merged PRs in 24 hours, active ACP editor compatibility roadmap), Pi (resolution of 8+ high-severity UX and security bugs in one tracking window), and OpenCode (merged 12+ long-stuck PRs that had been in review for months) are shipping new functionality significantly faster than most vendor-owned tools.
- **Stable mature phase tools**: Claude Code, Gemini CLI, and GitHub Copilot CLI have no new releases and minimal PR activity, indicating they are in a post-v1 stable lifecycle stage where engineering capacity is directed at regression triage and existing functionality hardening rather than rapid new feature expansion.
- **Low-maturity/ low-activity projects**: Kimi Code CLI has zero recorded updates in the 24-hour window, pointing to reduced maintenance bandwidth and minimal active community participation.

## 6. Trend Signals
The aggregated 2026-06-28 community data provides clear actionable insights for developer and technical decision-makers:
1. The era of headline new model integration as a core competitive selling point is over. The entire ecosystem now prioritizes workflow reliability, cost predictability, and UX polish as primary differentiators. Teams selecting AI CLI tooling should prioritize projects with active MCP and context efficiency development, as these features deliver far larger productivity gains than incremental marginal model performance improvements.
2. Independent open source AI CLI tools now offer a compelling alternative to first-party vendor offerings for organizations running multi-LLM strategies. Their cross-provider flexibility eliminates vendor lock-in, making them a strong candidate as a unified CLI layer for teams that use multiple LLM families across different workloads.
3. Security hardening is now a non-negotiable core requirement for enterprise deployments. Recent widely reported path traversal bugs, silent credential corruption, and unapproved agent scope creep have pushed all active development teams to fail-closed on high-risk operations, reducing the attack surface for production use cases.
4. WSL interop remains the most widespread unresolved cross-platform pain point for mixed Windows/Linux developer fleets. Organizations running WSL2 stacks should prioritize tools with proven, publicly documented WSL path conversion fixes to avoid widespread workflow breaks for their engineering teams.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-06-28)
## 1. Top Skills Ranking
Below are the 6 most high-attention open PRs aligned with the most-discussed community issues:
1. **PR #1298 (Open): fix(skill-creator): run_eval.py always reports 0% recall**  
   GitHub link: https://github.com/anthropics/skills/pull/1298  
   Functionality: Resolves the core bug that caused the entire automated skill description optimization pipeline to evaluate against random noise, with no valid recall measurements across test cases. It also patches Windows stream reading errors, trigger detection logic, and parallel worker performance. Discussion highlights: Addresses 10+ independent user reproductions of the broken evaluation workflow across H1 2026.
2. **PR #1323 (Open): fix(skill-creator): run_eval trigger detection misses real skill name**  
   GitHub link: https://github.com/anthropics/skills/pull/1323  
   Functionality: Fixes the root cause of run_eval.py failing to identify valid skill triggers, which caused the description optimization loop to return unmodified original skill descriptions even after successful full test runs. Discussion highlights: Directly resolves overlapping user reports from issues #556 and #1169.
3. **PR #1099 (Open): skill-creator: fix run_eval.py crash on Windows when reading from subprocess pipe**  
   GitHub link: https://github.com/anthropics/skills/pull/1099  
   Functionality: Eliminates the Windows-specific WinError 10038 crash that blocked all Windows users from running the skill evaluation script, marking a critical compatibility milestone for the broader Windows developer audience.
4. **PR #1050 (Open): skill-creator: fix Windows subprocess + encoding bugs**  
   GitHub link: https://github.com/anthropics/skills/pull/1050  
   Functionality: Two minimal 1-line fixes that resolve Windows PATHEXT resolution for the `claude.cmd` executable and incorrect default cp1252 encoding errors on Windows 11 systems.
5. **PR #539 (Open): fix(skill-creator): warn on unquoted description with YAML special characters**  
   GitHub link: https://github.com/anthropics/skills/pull/539  
   Functionality: Adds pre-parse validation in `quick_validate.py` to detect unquoted YAML description fields with reserved special characters (e.g. colons), preventing silent parsing failures that truncate or corrupt skill metadata.
6. **PR #361 (Open): Detect unquoted YAML special characters in description fields**  
   GitHub link: https://github.com/anthropics/skills/pull/361  
   Functionality: Extends YAML validation checks to both description and compatibility fields, covering all reserved YAML special characters including braces and brackets that break skill frontmatter loading.

## 2. Community Demand Trends
Based on top commented community issues, the highest-priority demand directions are:
- **Core skill-creator tooling maturity**: Over 35 total comments across related issues confirm fixing the broken 0% recall evaluation pipeline and full Windows cross-platform support is the top pain point for all skill contributors.
- **Ecosystem security hardening**: High-priority demand for namespace isolation to prevent malicious community skills from impersonating official Anthropic-branded skills and misusing elevated user permissions, tracked in the 23-comment top issue #492.
- **Enterprise team skill sharing**: 14 comments and 7 upvotes on issue #228 reflect strong user demand for native org-wide shared skill libraries, eliminating the current clunky workflow of manual .skill file distribution via third-party chat tools.
- **Domain-specific enterprise skills**: Clear unmet demand for functional skills covering persistent cross-conversation memory, AI agent governance/safety patterns, SAP predictive analytics, and open-standard document (ODF/ODT) processing.
- **Core skill quality fixes**: Users request resolution for widely encountered bugs including duplicate skill installation between overlapping plugin packages, DOCX file corruption, and case-sensitive PDF reference path failures.

## 3. High-Potential Pending Skills
These fully drafted, non-blocked PRs are high likelihood to merge in upcoming releases:
1. **PR #514 (Open): Add document-typography skill**  
   GitHub link: https://github.com/anthropics/skills/pull/514  
   Typographic quality control skill that eliminates universal flaws in AI-generated documents including orphan word wraps, stranded section headers (widows), and list numbering misalignment.
2. **PR #486 (Open): Add ODT skill — OpenDocument text creation and template filling**  
   GitHub link: https://github.com/anthropics/skills/pull/486  
   Full support for creating, parsing, and converting .odt/.ods OpenDocument/LibreOffice format files for open-standard ISO document workflows.
3. **PR #723 (Open): feat: add testing-patterns skill**  
   GitHub link: https://github.com/anthropics/skills/pull/723  
   Comprehensive full-stack testing guidance skill covering unit testing, React component testing, end-to-end testing, and testing best practices to help Claude generate production-grade test suites.
4. **PR #360 (Open): Added AppDeploy skill for deploying full-stack webapps directly from Claude**  
   GitHub link: https://github.com/anthropics/skills/pull/360  
   Integrates the AppDeploy.ai platform to let Claude push full-stack web app projects directly to public hosting with zero manual user intervention.
5. **PR #83 (Open): Add skill-quality-analyzer and skill-security-analyzer to marketplace**  
   GitHub link: https://github.com/anthropics/skills/pull/83  
   Two meta-skills that automatically audit submitted skills for documentation gaps, structural compliance, and security vulnerabilities, laying the foundation for scalable community skill curation.

## 4. Skills Ecosystem Insight
The community's most concentrated demand is stabilizing the core skill-creator developer pipeline (fixing the broken 0% recall evaluation bug, Windows cross-platform support, and input validation guardrails) to enable safe, scalable, high-volume community contribution of domain-specific, enterprise-grade custom skills.

---

# Claude Code Community Digest | 2026-06-28
---
## 1. Today's Highlights
Today’s digest covers 30 recently updated issues and 3 active pull requests, with no new official Claude Code releases published in the prior 24 hours. The largest wave of new reports centers on widespread cybersecurity safety filter false positives that fully block legitimate open-source drone firmware, ground station, and protocol development work for Linux users. The highest-activity ongoing bug remains the Windows 401 invalid authentication error, which has accumulated 21 comments and 10 upvotes over the past week, with multiple cross-platform duplicate auth corruption reports filed recently.
---
## 2. Releases
No new stable, beta, or pre-release versions of Claude Code were published in the last 24 hours.
---
## 3. Hot Issues (Top 10 Noteworthy)
1. **[#69706] Open Windows 401 Invalid Auth Bug** – The highest-engagement open bug affects Windows users with persistent, unexplained 401 credential errors even when using valid API keys. Community members report no confirmed consistent workarounds as of this update. 21 comments, 10 👍. [Link](https://github.com/anthropics/claude-code/issues/69706)
2. **[#57200] Open Linux Model Instruction Violation Bug** – Linux users report Claude is consistently ignoring explicit system prompts and pre-defined workflow rules, breaking structured, repeatable development tasks. 9 comments, 5 👍. [Link](https://github.com/anthropics/claude-code/issues/57200)
3. **[#71910] Open Safety Filter False Positive for Drone Firmware Work** – Part of a 10+ linked series of reports filed 2026-06-27, where overzealous security filters block legitimate consumer drone firmware USB protocol inspection, halting active development sessions entirely. 4 comments. [Link](https://github.com/anthropics/claude-code/issues/71910)
4. **[#70002] Open Cross-Platform Auth Corruption Bug** – A confirmed duplicate of the 401 auth bug that triggers corrupted `.claude.json` files with unexpected JSON input errors after failed auth attempts, impacting both Linux CLI and the VS Code extension. 3 comments. [Link](https://github.com/anthropics/claude-code/issues/70002)
5. **[#53224] Closed Static Analysis RAG Primitive Feature Request** – A community contributor shared A/B test data showing pre-prompt repository graph injection reduces first-turn token usage by 40.9%, cutting wait times for standard "find X in the codebase" prompts dramatically. 5 comments. [Link](https://github.com/anthropics/claude-code/issues/53224)
6. **[#71663] Open macOS SSL Validation Regression** – Post v2.1.190 update, the macOS Claude Code client no longer correctly identifies expired SSL certificates for on-premise self-hosted services, breaking corporate and air-gapped development workflows. 2 comments. [Link](https://github.com/anthropics/claude-code/issues/71663)
7. **[#71922] Open Windows MCP Chrome Session Hang Bug** – The Claude-in-Chrome MCP server floods the local CLI with unresponsive `set_permission_mode` calls when Chrome is not running, completely wedging the startup session with no way to recover short of launching the browser. Confirmed reproduction steps provided. 1 comment. [Link](https://github.com/anthropics/claude-code/issues/71922)
8. **[#57692] Closed Opus 4.7 xHigh Performance Degradation Bug** – High-power users report large performance drops for Opus 4.7 maximum reasoning effort workflows after the Colossus-1 capacity rollout on Linux. 4 comments, 3 👍. [Link](https://github.com/anthropics/claude-code/issues/57692)
9. **[#71913] Open CLI .worktreeinclude Enhancement Request** – Users want the existing worktree include system to properly handle files not tracked in .gitignore, improving support for non-repo assets that developers need Claude to access for build and configuration tasks. 2 comments. [Link](https://github.com/anthropics/claude-code/issues/71913)
10. **[#56782] Closed Fast Mode Billing Warning Enhancement** – Max plan users requested explicit UI warnings that the `/fast` toggle draws from premium pay-per-token credit rather than their included Max plan allocation, after multiple users reported unexpected overcharges. 2 comments, 4 👍. [Link](https://github.com/anthropics/claude-code/issues/56782)
---
## 4. Key PR Progress
Only 3 total PRs were updated in the last 24 hours, all tracked below:
1. **[#68787] Open: Fix error handling for label management script** – Improves the repo's internal CI utility `edit-issue-labels.sh` to return explicit stderr error messaging instead of a silent exit code 1 when no add/remove label arguments are provided, reducing CI workflow debugging time. [Link](https://github.com/anthropics/claude-code/pull/68787)
2. **[#71798] Closed: Minor community patch** – Merged minor community-submitted build or documentation patch 2026-06-27, no public functional summary provided. [Link](https://github.com/anthropics/claude-code/pull/71798)
3. **[#71530] Closed: Fork sync PR** – Standard upstream synchronization PR to merge main branch changes into a community fork of the repo, no production-facing functional changes. [Link](https://github.com/anthropics/claude-code/pull/71530)
---
## 5. Feature Request Trends
Distilled top requested feature directions from recently updated issues:
1. **Context efficiency improvements**: The top performance request is built-in static analysis repository graph injection to eliminate redundant glob/grep/file read steps and cut first-turn token bloat.
2. **Transparent billing guardrails**: Users are calling for explicit, non-skippable warnings for high-cost features (such as fast mode) that bypass included plan usage limits.
3. **Extended project scope control**: Requests for expanded `.worktreeinclude` functionality to support non-git-tracked and ignored assets in local project contexts.
4. **MCP reliability hardening**: Consistent calls for automated error handling and graceful degradation for disconnected MCP servers to prevent full session hangs.
---
## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. **Cross-platform auth failures**: Persistent unexplained 401 invalid credential errors across Windows, Linux, and VS Code surfaces, with secondary silent corruption of local `.claude.json` config files after auth failures.
2. **Overly aggressive safety blocks**: Widespread false positive cybersecurity and AUP blocks that fully halt legitimate engineering work including firmware analysis, protocol reverse engineering, and internal AD/IT troubleshooting.
3. **Recent version regressions**: Multiple broken core features post v2.1.190 including expired SSL certificate validation on macOS, Opus 4.7 xHigh reasoning performance drops, and unreported missing MCP servers from tool manifests.
4. **Silent uninformative failures**: Unclear hanging retry loops after tool calls, silent exits for utility scripts, and no visible error states that add unnecessary debugging overhead for developers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-28
---
## 1. Today's Highlights
The most active community conversation centers on a widely reported 10–20x spike in GPT-5.5 Codex rate-limit token costs, which leaves ChatGPT Plus users draining their full 5-hour usage quota in only 2–3 prompts. OpenAI shipped two new pre-release Rust alpha builds overnight, building on last week’s partial fix for excessive SQLite log writes that drastically reduced SSD endurance wear for local users. The engineering team also published a full stack of MCP OAuth hardening patches to resolve frequent concurrent auth failures that have been impacting enterprise and power users.

## 2. Releases
Two new alpha builds were published in the last 24 hours for the Rust-based Codex runtime:
- **rust-v0.143.0-alpha.27** and **rust-v0.143.0-alpha.28**: Pre-release builds on the 0.143 development train, following up on the 0.142 stable line’s patch that reduced excessive SQLite feedback log writes by 85% to mitigate SSD wear.
  https://github.com/openai/codex/releases

## 3. Hot Issues
1. **[#28879](https://github.com/openai/codex/issues/28879) 10–20x GPT-5.5 rate-limit cost spike for Plus plan users**  
   185 comments, 332 👍. The highest-activity active bug: users report no changes to their workflows but now exhaust quota that previously supported 20+ prompts in 2–3 turns. Community members are sharing token count logs to help OpenAI diagnose the unannounced rate limit change.
2. **[#11023](https://github.com/openai/codex/issues/11023) Native Codex desktop app for Linux**  
   130 comments, 648 👍. The most upvoted open feature request: developers facing severe power drain and usability bugs on Mac laptops are asking for a Linux-native build to run Codex on their desktop workstations.
3. **[#28224](https://github.com/openai/codex/issues/28224) Excessive SQLite feedback logging causes 640 TB/year SSD writes**  
   92 comments, 398 👍. Community users confirm the 3 recently merged patches have successfully eliminated 85% of the unnecessary write load, closing the longstanding endurance bug.
4. **[#2847](https://github.com/openai/codex/issues/2847) Sensitive file exclusion / `.codexignore` support**  
   79 comments, 414 👍. Developers want a repo-level and global ignore list to prevent Codex from reading local API keys, .env files, and other confidential data and sending it to model endpoints.
5. **[#9203](https://github.com/openai/codex/issues/9203) Restore the removed `/undo` TUI command**  
   50 comments, 300 👍. Users report repeated data loss incidents when Codex modifies untracked, uncommitted files, and the missing undo feature is a top requested recovery tool for the CLI workflow.
6. **[#29955](https://github.com/openai/codex/issues/29955) Instant quota drain for Pro 5 subscribers**  
   29 comments, 7 👍. Paralleling the top rate limit bug: high-tier Pro users report 100 credits being consumed after a single message, with their 5-hour usage counter resetting to 0% immediately.
7. **[#29072](https://github.com/openai/codex/issues/29072) Windows apply_patch sandbox launch failure**  
   22 comments, 19 👍. Core file editing workflows are fully broken for Windows app users, as the sandbox setup executable cannot launch from the default packaged app path.
8. **[#30224](https://github.com/openai/codex/issues/30224) Unsupported model error when using the `X-OpenAI-Internal-Codex-Responses-Lite` header**  
   51 comments, 18 👍. Advanced users building custom model integrations are blocked, as the undocumented internal API header now returns invalid model errors on latest Codex app builds.
9. **[#24389](https://github.com/openai/codex/issues/24389) `multi_agent_v1.close_agent` hangs for hours on unresponsive subagents**  
   14 comments, 0 👍. Multi-agent users report parent sessions becoming fully unresponsive for 8+ hours after a single child subagent crashes, with no built-in timeout mechanism.
10. **[#28672](https://github.com/openai/codex/issues/28672) US-region Business Codex users hit repeated 401 invalid OAuth token errors**  
    6 comments, 0 👍. Teams on ChatGPT Business plans with 2+ seats report their Codex instances become unusable after 2–3 messages due to forced token revocation and unexpected phone verification prompts.

## 4. Key PR Progress
1. **[#29691](https://github.com/openai/codex/pull/29691) Enforce marketplace plugin source policy at runtime**  
   Merged, code-reviewed: Adds enterprise controls to automatically block unapproved installed plugins, filtering all plugin discovery, list, and marketplace API endpoints to enforce organizational security policies.
2. **[#30384](https://github.com/openai/codex/pull/30384) Bump app-server read/currentTime timeout from 5s to 10s**  
   Open: Reduces false-positive timeouts for users on slow remote execution networks, or users running Codex against large local multi-repo workspaces.
3. **[#30269](https://github.com/openai/codex/pull/30269) Disable Nagle's algorithm on Rendezvous WebSockets**  
   Open: Eliminates TCP buffering latency for realtime agent execution streams, cutting down perceived lag for interactive Codex turns with no feature flags or breaking changes.
4. **[#30291](https://github.com/openai/codex/pull/30291) Expose environment info RPC endpoint**  
   Merged: Allows Codex clients to auto-discover an execution environment’s shell and working directory before spawning a thread, critical for cross-OS remote development workflows.
5. **[#30327](https://github.com/openai/codex/pull/30327) Stabilize synthesized call output IDs**  
   Merged: Fixes inconsistent session state on prompt retries, by assigning stable, non-random IDs to aborted synthesized tool calls to prevent broken conversation identity.
6. **[#30302](https://github.com/openai/codex/pull/30302) Preserve namespaces on custom tool calls**  
   Merged: Fixes broken dispatch for third-party custom tools that use namespaced identifiers, adding full regression tests for namespace handling across the app-server replay pipeline.
7. **[#30292](https://github.com/openai/codex/pull/30292) Serialize shared MCP OAuth credential stores**  
   Open (core of new MCP hardening stack): Prevents concurrent write corruption of shared MCP auth credential files, eliminating a top cause of random 401 auth errors.
8. **[#30226](https://github.com/openai/codex/pull/30226) Update Apps guidance to dynamically react to MCP availability**  
   Open: Moves app usage guidance out of static initial context, so the model receives correct tool instructions even if the MCP service recovers mid-turn after a temporary outage.
9. **[#30293](https://github.com/openai/codex/pull/30293) Serialize MCP OAuth refresh transactions**  
   Open: Adds transaction locking for parallel OAuth token refresh calls, eliminating race conditions that caused duplicate refresh attempts and expired session errors.
10. **[#30294](https://github.com/openai/codex/pull/30294) Route MCP OAuth recovery through Codex**  
    Open: Centralizes all MCP auth recovery logic inside the Codex backend, eliminating broken external login redirect flows for third-party MCP extensions.

## 5. Feature Request Trends
The most requested feature directions from active community discussions this week are:
1. Expanded cross-platform native support, with the Linux Codex desktop app remaining the highest upvoted outstanding feature across all open issues
2. Local workspace safety controls, including a formal `.codexignore` system and optional pre-edit confirmation prompts for all agent file changes
3. Restoration of the `/undo` TUI command removed in recent updates, for quick recovery of uncommitted file modifications
4. Usability improvements for multi-agent workflows, such as clickable UI chips that link directly to referenced subagent threads
5. New enterprise admin tools for plugin marketplace access control, to align with organizational security policies

## 6. Developer Pain Points
Recurring high-frequency frustrations observed across updated issues:
1. Widespread unannounced rate limit billing anomalies: 10–20x unexpected token cost increases affecting all subscription tiers, leading to near-instant quota drain for even simple prompts
2. Persistent Windows platform-specific sandbox bugs, including broken `apply_patch` execution, intermittent ARM64 sandbox spawn failures, and leaked stuck `git.exe` polling processes
3. Frequent unhandled MCP and OAuth auth failures: Concurrent credential write corruption, unexpected 401 token invalidation, and broken login flows for enterprise and Pro users
4. Partial resolution of excessive local log writes: Even after the 85% reduction patch, some power users on low-write-cycle NVMe drives still report elevated SQLite write overhead
5. No built-in timeout for multi-agent workflows: Unresponsive subagents cause parent sessions to hang for hours, with no way for users to terminate stuck background agents outside of full app restarts.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-28
Repository: github.com/google-gemini/gemini-cli
---
## 1. Today's Highlights
No new stable releases were published in the 24-hour tracking window, with all activity focused on agent stability fixes, security hardening, and roadmap feature planning. Standout updates include multiple high-priority patches to prevent unapproved agent scope creep, a new test coverage reporting tool for evaluation teams, and ongoing community triage of the widely reported generalist agent hang bug that has earned 8+ upvotes from end users. Maintainers are also advancing work on the zero-dependency sandbox architecture that will unlock full native Gemini 3 bash capabilities without security tradeoffs.
## 2. Releases
No new public releases of Gemini CLI were pushed in the last 24 hours.
## 3. Hot Issues
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent reports false success after hitting MAX_TURNS** (8 comments, 2 👍): The `codebase_investigator` subagent incorrectly returns a `GOAL` success status when it terminates after reaching maximum turn limits before completing analysis. This breaks user trust and makes debugging partial subagent failures nearly impossible for end users.
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely** (7 comments, 8 👍): One of the highest-voted open bugs, where the generalist agent hangs for hours after being invoked for trivial tasks like folder creation. Users report that manually disabling subagent deferral works around the issue, but no permanent fix is available yet.
3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Leverage Gemini 3 bash affinity via zero-dependency OS sandboxing** (8 comments, 1 👍): A long-running enhancement epic to build isolated POSIX execution that aligns with Gemini 3's native training for bash workflows, eliminating current friction where the model wastes turns generating script workarounds instead of using standard system tools safely.
4. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations** (7 comments): A test infrastructure epic tracking expansion of the 76 existing behavioral eval tests to support all 6 current Gemini model variants, to catch regression gaps before they reach end users.
5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess impact of AST-aware file reads and search** (7 comments, 1 👍): An investigation epic exploring AST-native codebase traversal that will reduce wasted LLM turns from imprecise file reads, cut prompt token bloat, and make large codebase exploration far more efficient.
6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell execution stuck on "Awaiting user input" after command completes** (4 comments, 3 👍): A frequent UX bug where non-interactive finished shell commands leave the agent hanging with no way to proceed, forcing users to restart their entire session.
7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Add deterministic redaction and reduce Auto Memory logging** (5 comments): A security hardening issue addressing the current flaw where user transcript data is sent to the memory extraction model before secret redaction runs, creating avoidable leak risks.
8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Stop Auto Memory from retrying low-signal sessions indefinitely** (5 comments): This bug causes wasted background compute and slowdowns, as low-value empty/short chat sessions are reprocessed forever by the background memory agent because they never get marked as processed.
9. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Agent rarely uses custom skills and sub-agents automatically** (6 comments): Users report that custom installed skills for tools like Gradle or Git are never invoked unless explicitly instructed, breaking workflow automation for power users who build custom subagent ecosystems.
10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland** (4 comments, 1 👍): A widely reported break for Linux desktop users running modern Wayland compositors, who cannot use the browser navigation agent at all.
## 4. Key PR Progress
1. **[#28178](https://github.com/google-gemini/gemini-cli/pull/28178) fix(security): Require approved bot patch artifacts**: Adds an explicit approval marker check before the Gemini CLI publish CI job consumes generated patches, making the reasoning-to-release boundary fail-closed and preventing unapproved patches from being deployed to end users.
2. **[#28175](https://github.com/google-gemini/gemini-cli/pull/28175) fix(policy): Require confirmation for shell parameter expansion**: Downgrades allowlisted shell commands containing parameter expansion to require explicit user approval in interactive mode, and blocks them entirely in non-interactive YOLO mode to eliminate shell injection attack surfaces.
3. **[#28169](https://github.com/google-gemini/gemini-cli/pull/28169) feat(evals): Add eval coverage report command**: New `npm run eval:coverage` CLI tool that cross-references the tool registry against the existing behavioral test inventory to automatically identify untested built-in tools, removing manual work for the evaluation team.
4. **[#27859](https://github.com/google-gemini/gemini-cli/pull/27859) feat(cli): Add native drag-and-drop and clipboard image pasting**: A now-merged closed PR that adds full multimodal parity for terminal users, allowing images to be dropped directly into the Gemini CLI window or pasted via Ctrl+V/Cmd+V without manual file path entry.
5. **[#28171](https://github.com/google-gemini/gemini-cli/pull/28171) fix(agent): Prevent silent scope expansion on task failure**: Fixes a critical issue where the agent would automatically expand its work scope to read full files or run unrelated scripts without user approval if its initial targeted review task failed, respecting the user's original requested scope boundaries.
6. **[#28094](https://github.com/google-gemini/gemini-cli/pull/28094) fix(a2a-server): Deep-merge user and workspace settings**: Resolves a bug where shallow spread merging overwrote entire nested config sections (tools, telemetry, file filtering) defined in workspace shared settings, fixing broken enterprise multi-user deployments.
7. **[#28068](https://github.com/google-gemini/gemini-cli/pull/28068) fix(core): Guard message inspectors against empty parts arrays**: Patches a classic JavaScript vacuous truth bug that caused empty model messages to be incorrectly classified as function call requests, triggering random unhandled crashes mid-session.
8. **[#28053](https://github.com/google-gemini/gemini-cli/pull/28053) fix(core-tools): Defensive path resolution for @-prefixed reference files**: Fixes a production bug where file operations failed with "File not found" for any user path prefixed with `@`, a common pattern for user reference files and note documents.
9. **[#28033](https://github.com/google-gemini/gemini-cli/pull/28033) fix(mcp): Longest-prefix matching for server names with underscores**: Resolves broken MCP tool routing for users with underscores in their MCP server names, preventing the tool name parser from incorrectly cutting off server names at the first underscore character.
10. **[#28167](https://github.com/google-gemini/gemini-cli/pull/28167) feat(caretaker): Egress Cloud Run service**: Implements the automated maintenance egress service that receives verified event messages via Cloud Pub/Sub to execute trusted GitHub operations, reducing manual repo maintenance work for maintainers.
## 5. Feature Request Trends
The most requested planned feature directions from recent issues fall into four core buckets:
1. AST-native codebase interaction: Multiple linked epics prioritizing AST-aware file reads, search, and mapping to reduce token waste and cut unnecessary agent turns for large codebase exploration.
2. Zero-trust sandboxed bash execution: Roadmap work to leverage Gemini 3's native POSIX fluency while maintaining strict security guardrails, eliminating current workarounds that waste model capacity.
3. Auto Memory robustness: Ongoing work to harden the background memory system with deterministic redaction, infinite retry blocking, and invalid patch quarantine to eliminate current data leak risks and performance overhead.
4. Subagent discoverability and UX: Requests to expose subagent trajectories via the existing `/chat share` command, add automatic browser session lock recovery, and improve the agent's self-awareness of its own CLI flags and hotkeys for better end user onboarding.
## 6. Developer Pain Points
Recurring high-frequency frustrations across open issues include:
1. Persistent agent hanging: The generalist agent crash, post-execution shell hang, and MAX_TURNS false success bugs are the top three user gripes, directly breaking workflow productivity.
2. Security and trust gaps: Users have flagged unguarded destructive git commands (--force, hard resets), pre-redaction Auto Memory transcript logging, and silent shell parameter expansion as avoidable high-risk attack surfaces.
3. Broken expected functionality: Symlinked custom agents not being recognized, browser subagent failures on Wayland, 400 errors when more than 128 tools are installed, and global setting.json overrides being ignored by the browser agent break common power user configurations.
4. Minor but consistent UX papercuts: Terminal flicker on resize, terminal buffer corruption after exiting external editors, and missing subagent context in `/bug` reports make debugging agent behavior unnecessarily difficult for both users and maintainers.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-28
Repo: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. Today's Highlights
No new Copilot CLI releases dropped in the last 24 hours, but 16 recently updated issues and 3 PRs signal a surge of post v1.0.65/v1.0.66 regression reports across Windows, macOS, and Linux platforms. The highest community attention is focused on a long-running broken Ubuntu authentication flow, a Windows MCP server startup regression, and user demands for explicit toggle controls for the recently launched alt-screen TUI feature.

## 2. Releases
No new stable, pre-release, or patch versions of GitHub Copilot CLI were published in the last 24 hours.

## 3. Hot Issues
Below are the 10 most noteworthy community-updated issues from the past 24 hours:
1.  **[#2165 Ubuntu keychain support is broken](https://github.com/github/copilot-cli/issues/2165) (20 👍, 2 comments)**: This high-vote critical bug breaks authentication for all Ubuntu users, and the official public Copilot CLI auth troubleshooting documentation is confirmed to have incorrect remediation steps for Linux users.
2.  **[#1799 How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799) (7 👍, 10 comments)**: One of the most active long-running feature requests, users report the new alt-screen TUI rendering causes multiple usability bugs and are asking for a toggle to revert to the original non-alt display mode.
3.  **[#3958 Windows: v1.0.66 fails to start stdio MCP servers for .bat/.cmd files](https://github.com/github/copilot-cli/issues/3958) (1 comment)**: Newly reported regression from v1.0.65 that breaks custom MCP server workflows for all Windows users who use batch files to launch their tools.
4.  **[#3949 Windows 11 copy to clipboard does not work](https://github.com/github/copilot-cli/issues/3949) (2 comments)**: Confirmed bug where Copilot CLI reports content is copied to the clipboard but no data is present, with a duplicate issue (#3961) filed to confirm multiple users are affected.
5.  **[#3944 Subagent transcripts are inlined uncapped into parent session exports](https://github.com/github/copilot-cli/issues/3944) (2 comments)**: Bug that causes session exports to bloat rapidly in size when using subagents, with no summarization or size limit applied to embedded subagent output.
6.  **[#3955 Drag and drop of files to attach no longer works on macOS](https://github.com/github/copilot-cli/issues/3955)**: Reported regression that breaks the common macOS workflow of dragging files from Finder to attach them to Copilot prompts.
7.  **[#3963 Feature Request: Show session retention/expiration date](https://github.com/github/copilot-cli/issues/3963)**: Users report sessions disappear unexpectedly, and are asking for a visible status indicator for session expiration dates and clear documentation of the retention policy.
8.  **[#3672 Add ability to customize keyboard shortcut for `/voice` dictation toggle](https://github.com/github/copilot-cli/issues/3672)**: Highly requested quality-of-life feature for the popular recently launched voice dictation tool.
9.  **[#3959 Visual ghost characters remain in TUI after deleting text](https://github.com/github/copilot-cli/issues/3959)**: Terminal rendering bug that leaves leftover deleted characters in the prompt line, breaking readability during active text input.
10. **[#3957 Unable to scroll through history using trackpad on MBP](https://github.com/github/copilot-cli/issues/3957)**: macOS-specific usability bug where trackpad scroll gestures select old prompts instead of scrolling the session view to see previous output.

## 4. Key PR Progress
Only 3 PRs saw updates in the last 24 hours, no new critical fixes or feature PRs were merged:
1.  **[#3928 Add .gitignore and settings configuration](https://github.com/github/copilot-cli/issues/3928) (Open)**: Proposed change to add better repo-level ignore rules and centralized user settings management for Copilot CLI sessions.
2.  **[#570 [WIP] Add macOS installation instructions to README.md](https://github.com/github/copilot-cli/pull/570) (Closed)**: Long-running documentation work to fill onboarding gaps for macOS users, recently updated but still marked work-in-progress with no final merge.
3.  **[#3737 Jigg empire ai](https://github.com/github/copilot-cli/pull/3737) (Open)**: Experimental unannotated PR testing new third-party AI integration workflows, no public implementation details shared.

## 5. Feature Request Trends
Distilled most requested feature directions from all recently updated issues:
1.  TUI and interaction customization: Users want fine-grained toggles for new UI features, custom keyboard shortcuts for core tools like `/voice`, and configurable terminal rendering behavior.
2.  Transparent session management: Clear visibility into session retention rules, size limits for exported session transcripts, and more context memory control.
3.  Parity with competing AI CLI tools: Top requested is support for the instant `/btw` context query feature from Claude Code that lets users ask ad-hoc questions without polluting active session context.
4.  Native workflow extensions: Support for drag-and-drop file attachments, and purpose-built chat functions to streamline native mobile (iOS) app generation workflows.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced this update window:
1.  Cross-platform regressions in recent v1.0.65/v1.0.66 releases, including broken MCP servers, clipboard failures, and broken drag-and-drop functionality across Windows, macOS, and Linux.
2.  Missing documentation and broken official guidance for Linux Ubuntu authentication, blocking onboarding for new users on the platform.
3.  No user-facing controls for new UI features like the alt-screen view that introduced multiple cascading rendering bugs and no way for users to revert to a working state.
4.  Broken expected integrations, including non-functional `preToolUse` VS Code agent hook denial that breaks custom permission and workflow guardrails.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-28
---
## 1. Today's Highlights
No new official releases landed in the last 24 hours, with the community focused on cross-platform compatibility fixes for WSL setups and high-visibility feature requests for payment flexibility and session management QoL. The maintainer team processed a batch of long-pending automated PR cleanups, resolving over a dozen accumulated bug fixes that had been stuck in review queues for months. Top user discussions center on per-model prompt cache reliability, enterprise Copilot third-party model access, and a widely supported request for crypto payment support for OpenCode Go's pay-as-you-go tier.
## 2. Releases
No new OpenCode versions were published in the 24-hour reporting window.
## 3. Hot Issues (Top 10 Notable)
1.  **Crypto Pay-as-you-Go support request** ([#23153](https://github.com/anomalyco/opencode/issues/23153)): The highest-engagement open feature request (13 comments, 24 thumbs up) asks to extend OpenCode Go payment options to cryptocurrency for users who cannot access standard fiat payment rails. The thread has drawn active discussion about self-custody payment flows and potential stablecoin integration.
2.  **TUI `/sessions` picker only displays recent sessions** ([#13877](https://github.com/anomalyco/opencode/issues/13877)): A long-running UX bug (9 comments, 6 thumbs up) hides older historical sessions from the TUI session browser even when full session data remains intact on disk, forcing users to manually navigate file paths to access older work.
3.  **Manual session renaming feature request** ([#25848](https://github.com/anomalyco/opencode/issues/25848)): A popular quality-of-life request (8 comments) asks for a built-in `/rename` command and CLI `opencode session rename` utility to manually label sessions, rather than relying on auto-generated titles from initial prompts.
4.  **Windows UNC paths breaking WSL hosted server tool calls** ([#19473](https://github.com/anomalyco/opencode/issues/19473)): A widely reported cross-platform bug (7 comments, 6 thumbs up) that breaks all bash tool execution when the Windows desktop app sends native Windows UNC paths to an OpenCode server running inside WSL 2. A user-submitted workaround is already published in the thread for affected users.
5.  **False positive OpenRouter credit limit error for Kimi 2.5 Free** ([#12219](https://github.com/anomalyco/opencode/issues/12219)): Users report that OpenCode incorrectly returns a "0 available credits" error even when using the free tier of Kimi 2.5 hosted on OpenRouter, despite their keys having sufficient monthly allowance (7 comments, 6 thumbs up).
6.  **Bun 1.3.14 SIGILL segfault on AMD EPYC Zen4 Linux** ([#33890](https://github.com/anomalyco/opencode/issues/33890)): A low-level runtime crash (6 comments, 5 thumbs up) hits OpenCode 1.17.10/1.17.9 on high-core-count AMD Zen4 enterprise servers, immediately terminating the TUI process after a short uptime.
7.  **Long-running `opencode serve` 26.8GB JS heap memory leak** ([#33213](https://github.com/anomalyco/opencode/issues/33213)): Production server mode accumulates 26.8GB of fragmented anonymous JS heap and swap usage after only 1.5 days of continuous operation, requiring regular service restarts to recover resources (5 comments).
8.  **Partial, unstable project skills exposed to connected AI models** ([#34228](https://github.com/anomalyco/opencode/issues/34228)): Users report that only a random subset of configured local project skills are passed to the LLM across sessions, breaking custom agent workflows that rely on 35+ local utility skills defined in project config (5 comments).
9.  **GLM-5.1 prompt cache randomly drops to 0 causing unexpected cost spikes** ([#31348](https://github.com/anomalyco/opencode/issues/31348)): OpenCode Go users see inconsistent prompt caching for the GLM-5.1 model, with cache hit rates falling to 0 arbitrarily even on identical long-running workflows that maintain 90%+ cache reliability for DeepSeek V4 Flash (4 comments, 2 thumbs up).
10. **No access to third-party models added to GitHub Copilot Enterprise** ([#34030](https://github.com/anomalyco/opencode/issues/34030)): Enterprise users with Copilot accounts that their org has provisioned custom third-party models for cannot see or select those models inside OpenCode's Copilot integration (4 comments).
## 4. Key PR Progress (Top 10)
1.  **Fix server foreign directory hint validation** ([#34256](https://github.com/anomalyco/opencode/pull/34256)): A core security and compatibility fix that blocks invalid cross-OS directory path hints before instance lookup, resolving root causes for the widely reported WSL path mismatch bugs #30895 and #19473.
2.  **V2 WSL UI for desktop app** ([#34233](https://github.com/anomalyco/opencode/pull/34233)): Introduces a redesigned WSL connection management interface, new loading state components, and dedicated status indicators for WSL-hosted server instances.
3.  **Prevent piped stdin from breaking TUI input** ([#34242](https://github.com/anomalyco/opencode/pull/34242)): Fixes a longstanding bug that broke TUI keyboard navigation and UI rendering when the process received piped standard input from external scripts, resolving 4 related open issues.
4.  **Preserve attachment filesystem paths** ([#34234](https://github.com/anomalyco/opencode/pull/34234)): Fixes behavior that previously only passed embedded file content to agents instead of the original full filesystem path, allowing agents to modify and save changes to pasted/dragged attachments natively.
5.  **Add sticky session list header** ([#34220](https://github.com/anomalyco/opencode/pull/34220)): Implements a persistent sticky header on the home page session browser, keeping the new session creation button visible even when scrolling through long lists of historical sessions.
6.  **Fix session structured output retry count and encoding** ([#29632](https://github.com/anomalyco/opencode/pull/29632)): A months-pending automated cleanup PR that resolves two bugs preventing the `format.retryCount` configuration from being respected for structured output tasks, and fixes corrupted encoding of generated output formats.
7.  **Add `tool_output_expanded_default` TUI config option** ([#34246](https://github.com/anomalyco/opencode/pull/34246)): Adds a new user configurable flag in `tui.json` that automatically expands all tool output panels by default for users who prefer not to manually expand each result.
8.  **Fix partial Stripe Zen refund accounting** ([#34227](https://github.com/anomalyco/opencode/pull/34227)): Corrects the payment webhook logic to only deduct the actual partial refund amount from user balances instead of the full original top-up value, and adds duplicate protection to prevent double deductions from retried webhook events.
9.  **Fix remote workspace session event replay** ([#29615](https://github.com/anomalyco/opencode/pull/29615)): Resolves a bug that broke syncing of serialized session events across distributed remote OpenCode instances, allowing full session history to be properly persisted and replayed across networked workspaces.
10. **Gracefully handle corrupted `auth.json` instead of crashing** ([#29562](https://github.com/anomalyco/opencode/pull/29562)): Prevents startup crashes caused by interrupted writes that leave the `auth.json` credentials file in a corrupted state, falling back to an empty credential store instead of hard exiting.
## 5. Feature Request Trends
Across all open issues updated in the last 24h, three clear top demand directions emerge:
1.  **Payment flexibility**: The highest-voted new feature is crypto payment support for the OpenCode Go pay-as-you-go tier, with strong user demand for alternative payment methods outside of standard fiat card processors.
2.  **Unified session management UX**: Users are requesting a full, consistent set of session organization tools, including manual renaming, displaying 100% of historical sessions in the browser, and porting the TUI `/sessions` picker functionality to IDE extensions that currently have no session management UI at all.
3.  **Full multi-model and enterprise provider parity**: Widespread requests to expand model support to cover missing NVIDIA NIM catalog entries (Minimax-M3, Kimi 2.6), expose custom third-party models attached to enterprise Copilot accounts, and implement consistent prompt caching behavior across all supported LLMs.
## 6. Developer Pain Points
Recurring high-frequency frustrations across the latest issues:
1.  **WSL interop reliability**: Cross-platform path conversion bugs between Windows desktop clients and WSL2-hosted OpenCode servers remain the most commonly reported breaking issue, with 3 separate open bug tickets related to path mismatches in the last 7 days alone.
2.  **Long-running instance resource bloat**: Users report excessive memory leaks for server mode (26.8GB after 1.5 days) and desktop sessions (110% CPU, 2GB RAM after 3 hours of work) even when context window utilization is under 20%.
3.  **New model compatibility edge cases**: Every release of a new top-tier non-OpenAI LLM exposes unhandled edge cases, including request hanging, schema validation failures, and missing function call support that requires per-provider custom sanitization logic to resolve.
4.  **TUI presentation glitches**: Multiple users report random UI corruption from external system messages (e.g. macOS NFS kernel logs) leaking into the terminal interface, empty session dialogs that never finish loading, and no persistent default state for tool output expansion.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-28
*Source: github.com/badlogic/pi-mono*

---

## 1. Today's Highlights
This 24-hour reporting window records 0 new official Pi releases, 26 updated issues, and 9 active pull requests across the Pi ecosystem. Merged core changes resolve high-priority silent failure bugs for extension installation, broken Azure OpenAI model references, and duplicate execution of extension dependency side effects on session reload. The community also advanced a long-pending fix for opaque provider HTTP error messages, and kicked off formal discussion for configurable TUI chat padding to address repeated widespread user UX feedback.

## 2. Releases
No new official Pi releases were published in the 24-hour reporting window.

## 3. Hot Issues
1. **#5825: Streaming markdown forces scroll to bottom** (34 comments, open) | https://github.com/earendil-works/pi/issues/5825  
   The most actively discussed open UX bug, this forces unwanted scroll jumps when users reading long agent outputs enable the "clear on shrink" setting, disrupting reading workflows for coding and research use cases.
2. **#5763: Providers swallow the HTTP error body for non-schema errors** (5 comments, in-progress) | https://github.com/earendil-works/pi/issues/5763  
   A major blocking pain point for enterprise users behind gateways/proxies, where error messages for common 403/429 status codes are hidden, leaving teams unable to debug permission and rate limit issues across different LLM provider integrations.
3. **#6129: Malicious package report for @hypabolic/pi-hypa** (closed, triaged) | https://github.com/earendil-works/pi/issues/6129  
   A critical ecosystem security alert for the official Pi extension registry, highlighting self-promoting install-gaming behavior that triggered immediate moderation review for third-party package submission policies.
4. **#6122: Feature request: add externalEditor setting for Ctrl+G** (closed) | https://github.com/earendil-works/pi/issues/6122  
   A highly requested quality-of-life fix for Windows users running Pi via Git Bash, where the `EDITOR`/`VISUAL` environment variables are frequently locked to unchangeable incorrect values.
5. **#4147: Make agent.state.tools mutations visible to the running agent loop** (closed after big refactor) | https://github.com/earendil-works/pi/issues/4147  
   A long-running core architecture issue resolved via full refactoring, enabling dynamic tool updates at runtime for advanced agent workflows without breaking public API contracts.
6. **#6105: User messages get incorrectly escaped** (closed) | https://github.com/earendil-works/pi/issues/6105  
   A high-severity rendering bug in the 0.80.2 release that broke backslash display for user input, with full reproducibility even with extensions disabled.
7. **#6124: Devnagri text breaks the Pi harness** (closed) | https://github.com/earendil-works/pi/issues/6124  
   A notable internationalization gap that prevented non-Latin script users (specifically users typing Devanagari characters) from using the Pi TUI entirely.
8. **#6118: Audio pass-through for the RPC** (closed) | https://github.com/earendil-works/pi/issues/6118  
   A feature request that unlocks the third-party Pi frontend ecosystem, explicitly supporting the open-source Qt-based `llm_thalamus` custom UI that uses Pi RPC as its backend.
9. **#6112: `pi install` reports success with no write permission to settings.json** (closed) | https://github.com/earendil-works/pi/issues/6112  
   A frustrating silent failure bug for new users, where extension installs appear to succeed but no new commands appear in the Pi session, with zero error messaging to explain the missing permission issue.
10. **#6108: Release binary re-evaluates extension dependency side effects on /reload** (closed) | https://github.com/earendil-works/pi/issues/6108  
    A widely reported bug that broke stateful extensions (including custom theme registrations) after a manual `/reload` command, causing duplicated theme entries and runtime crashes.

## 4. Key PR Progress
1. **#5735: Defer extension reload requests safely** (open, to-discuss) | https://github.com/earendil-works/pi/pull/5735  
   Adds a deferral mechanism to move extension reloads to safe runtime boundaries, exposing `ctx.reload()` to all extension contexts (not just slash commands) to eliminate race conditions on reload.
2. **#5678: Add excludeFromContext for custom messages** (open, to-discuss) | https://github.com/earendil-works/pi/pull/5678  
   Extends the extension API to support UI-only custom messages that are rendered and persisted normally, but excluded from the LLM context window and compaction logic to avoid wasting token space.
3. **#6123: Add externalEditor setting for Ctrl+G** (closed/merged) | https://github.com/earendil-works/pi/pull/6123  
   Implements the requested configurable `externalEditor` setting in `settings.json` to override unreliable environment variable detection for external editor launches, fully resolving the Windows Git Bash use case.
4. **#6119: Add reportUsage API for extensions to contribute session cost** (closed/merged) | https://github.com/earendil-works/pi/pull/6119  
   Exposes a new `pi.reportUsage()` extension API that lets third-party tools feed subagent token and cost tracking data back to the main Pi session totals, fixing missing cost visibility for popular subagent extensions.
5. **#5832: Surface provider HTTP error body instead of opaque SDK message** (open) | https://github.com/earendil-works/pi/pull/5832  
   Implements the fix for issue #5763, preserving and surfacing raw gateway/proxy error bodies from non-2xx LLM API responses instead of dropping them and returning generic `UnknownError` messages.
6. **#6115: Add configurable chat padding** (open, to-discuss) | https://github.com/earendil-works/pi/pull/6115  
   Proposes TUI-level configurable padding controls to address repeated user requests for more compact, information-dense layout options for the Pi terminal interface.
7. **#6099: Rename Azure OpenAI model key from `gpt-5.2-chat-latest` to `gpt-5.2-chat`** (closed/merged) | https://github.com/earendil-works/pi/pull/6099  
   Corrects the invalid hardcoded model reference for Azure OpenAI, restoring full access to Microsoft's latest GPT-5.2 model family for Azure users.
8. **#6111: Report settings write failures in install/remove** (closed/merged) | https://github.com/earendil-works/pi/pull/6111  
   Adds explicit permission and write success checks for `settings.json` during extension install/remove workflows, returning clear error messages instead of silent success statuses for read-only config files.
9. **#6109: Preserve dependency cache on extension reload** (closed/merged) | https://github.com/earendil-works/pi/pull/6109  
   Fixes the duplicate dependency re-evaluation bug on `/reload` by caching imported modules, preventing unintended duplicate execution of side effects like theme registrations for stateful extensions.

## 5. Feature Request Trends
The top requested feature directions from recent issues are:
1. **Extension API maturity**: Demands for formal hooks to enable extensions to execute registered core tools, access stable lifecycle events, and expose custom subagent usage tracking.
2. **TUI customization**: Widespread requests for configurable chat layout/padding, queued `/reload` execution during agent streaming, and persistent scroll position preservation for long markdown outputs.
3. **Third-party frontend support**: RPC layer improvements to enable full-featured custom UIs, including audio pass-through for speech-to-text and text-to-speech workflows.
4. **Extension install flexibility**: Custom package manager argument support for npm/pnpm to enforce safety policies (like minimum package release age) for self-hosted Pi deployments.

## 6. Developer Pain Points
Recurring high-frequency frustrations for Pi developers and power users include:
1. **Poor observability for enterprise deployments**: Opaque, unreadable error messages from LLM providers behind custom gateways that slow permission and network debugging to a crawl.
2. **Silent extension workflow failures**: Installs that report success but don't register, duplicated side effects after reload, and missing usage data for subagent tools that break observability for custom extension stacks.
3. **Platform-specific edge cases**: Broken Windows filesystem path handling, unreliable editor environment variable behavior, and non-Latin script rendering crashes that disproportionately impact non-US and non-Ubuntu users.
4. **TUI state race conditions**: Unwanted forced scroll jumps during streaming responses, and misordered extension event firing that breaks theme initialization for the Pi web UI.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-28
GitHub Source: https://github.com/QwenLM/qwen-code

---

## 1. Today's Highlights
Today’s update covers the first v0.19.2 nightly pre-release published in the last 24 hours, alongside a batch of resolved high-priority security vulnerabilities and long-overdue workflow quality-of-life fixes for power users. Core teams made major progress on two top community-requested feature lines: Telegram remote bot integration and the long-discussed Chrome extension revival built on a lightweight daemon-direct architecture. Multiple critical cost reduction and session state persistence bugs were also patched, resolving weeks-long pain points for enterprise teams and individual Windows users.

## 2. Releases
Only one new pre-release was published in the last 24 hours:
- **v0.19.2-nightly.20260627.d93bec905** ([Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260627.d93bec905)): Upcoming pre-release for the stable v0.19.2 drop, including the core fix for non-standard JSON fallback for the `web_fetch` tool, plus incremental daemon startup performance optimizations.

## 3. Hot Issues (Top 10 Noteworthy)
1. **#5834 [CLOSED] P1 Source deletion path traversal vulnerability** ([Link](https://github.com/QwenLM/qwen-code/issues/5834)): Critical CWE-22 path traversal flaw that allowed maliciously crafted source slugs to escape the intended sources directory during deletion operations. Triaged and patched within 3 days of filing, eliminating a remote local file deletion attack vector.
2. **#5922 [CLOSED] Windows `cua-driver.exe` persistent high CPU usage on idle** ([Link](https://github.com/QwenLM/qwen-code/issues/5922)): High-impact Windows user bug where the computer-use tool driver continued running at elevated CPU after agent tasks completed, draining laptop battery and background resources. Resolved same-day after reporting.
3. **#5756 [CLOSED] Default 8K output cap causes truncated `write_file` retry loops** ([Link](https://github.com/QwenLM/qwen-code/issues/5756)): A weeks-long pain point where a hardcoded default 8000 token output limit ignored model native output caps, causing large file generations to be cut mid-write, triggering infinite wasteful retry loops. Marked resolved after the max_tokens default logic update.
4. **#5942 [OPEN] Anthropic provider avoidable prompt cache misses inflate costs** ([Link](https://github.com/QwenLM/qwen-code/issues/5942)): P2 priority issue where Qwen Code’s current request structure leads to ~100% cache miss rate for Claude models, 2-3x higher running costs than official Claude Code on the exact same backend. Tagged `welcome-pr` for community contributions.
5. **#5836 [OPEN] Request to persist todos/plans/memories to project directory for cross-device sync** ([Link](https://github.com/QwenLM/qwen-code/issues/5836)): Top requested collaborative feature from Chinese users, asking for an option to store project-specific state files in the repo-tracked `.qwen/` directory instead of the local user home path, eliminating lost state when switching workstations.
6. **#5823 [OPEN] Hidden `/loop` cron tasks run silently with no listing/stop controls** ([Link](https://github.com/QwenLM/qwen-code/issues/5823)): Users report accidentally created background cron jobs that auto-unprompted start running on every new session open, with no way for users to list, inspect, or terminate hidden scheduled tasks.
7. **#5920 [CLOSED] `/rewind` records store null parentUuid breaking conversation history on resume** ([Link](https://github.com/QwenLM/qwen-code/issues/5920)): Critical session bug that erased all but the latest dialogue round after users executed a rewind operation, resolved same-day after reporting.
8. **#5626 [OPEN] Revive Chrome Extension via daemon + WebUI architecture** ([Link](https://github.com/QwenLM/qwen-code/issues/5626)): 3-month old popular proposal to replace the original 45K line heavy native-messaging Chrome extension with a thin daemon-connected client, reusing existing browser tooling without heavy stack maintenance overhead.
9. **#5867 [CLOSED] Add git-shared "team" tier to auto-memory** ([Link](https://github.com/QwenLM/qwen-code/issues/5867)): Team workflow feature request to add a shared project memory tier synced via Git, replacing the current private local-only project memory storage, marked as tracked for v0.19.2 stable.
10. **#5838 [OPEN] Allow users to adjust agent-initiated command timeouts** ([Link](https://github.com/QwenLM/qwen-code/issues/5838)): High-demand enterprise user request to expose a configurable timeout setting for shell commands spawned by the agent, to support long-running workloads such as full project builds and large test suite execution.

## 4. Key PR Progress (Top 10 Important Changes)
1. **#5660 [MERGED] fix(core): allow web_fetch JSON fallback** ([Link](https://github.com/QwenLM/qwen-code/pull/5660)): Core change included in the latest nightly, adds graceful fallback for web fetch responses with malformed non-standard JSON format, eliminating unnecessary network tool failures.
2. **#5777 [OPEN] feat(browser-ext): revive Chrome extension via daemon-direct architecture** ([Link](https://github.com/QwenLM/qwen-code/pull/5777)): Implements the thin Chrome extension client that connects directly to the local `qwen serve` daemon over HTTP+SSE, inheriting 27 existing browser tools without requiring a heavy native messaging host.
3. **#5919 [MERGED] feat(channels): register Telegram bot command menu** ([Link](https://github.com/QwenLM/qwen-code/pull/5919)): Core milestone for Telegram remote bot support, registers the official command menu via Telegram’s setMyCommands API, adds a shared `/cancel` command for all channel adapters.
4. **#5938 [MERGED] perf(cli): enable compile cache and defer getCliVersion for serve** ([Link](https://github.com/QwenLM/qwen-code/pull/5938)): Delivers a 30-40% faster startup time for the Qwen Code daemon, by enabling Node.js V8 bytecode compile cache and deferring non-critical version check logic to post-startup.
5. **#5944 [OPEN] fix(core): halt repeated shell inspection variants** ([Link](https://github.com/QwenLM/qwen-code/pull/5944)): Adds a new loop guard to stop the agent from spamming identical read-only git inspection commands (git status, git diff, etc.) that waste tokens and stall workflows during no-op work loops.
6. **#5856 [OPEN] feat(desktop): voice dictation in the desktop app** ([Link](https://github.com/QwenLM/qwen-code/pull/5856)): Ports the existing speech-to-text `/voice` dictation feature from CLI and Web Shell to the native desktop client, adding a microphone input button with live waveform recording feedback.
7. **#5903 [MERGED] feat(acp): support `/cd` command in ACP sessions** ([Link](https://

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-28
---
## 1. Today's Highlights
This 24-hour window sees no new public releases, but 20+ high-priority pull requests merged to upstream `main`, delivering long-awaited Agent Client Protocol (ACP) compatibility, locale-aware skill localization, and configurable context caching optimized for DeepSeek V4’s low-cost cached input. Key quality-of-life upgrades landed for Chinese-speaking users, custom non-software engineering workflow support, and robust tool failure fallback logic to reduce overall task failure rates. The project also activated a formal stale issue cleanup workflow to reduce maintenance backlog for its 14 tracked open issues.

## 2. Releases
No new public releases published between 2026-06-27 and 2026-06-28.

## 3. Hot Issues (10 Noteworthy Items)
1. **#3192 [OPEN] List project on the Agent Client Protocol registry** | https://github.com/Hmbown/CodeWhale/issues/3192  
   Highest-engagement open issue with 10 comments. ACP listing will let Zed editor users install DeepSeek TUI as a native extension without manual setup, and the community is pushing to accelerate editor integration.
2. **#2870 [OPEN] EPIC: Staged command-boundary refactor for v0.9.0** | https://github.com/Hmbown/CodeWhale/issues/2870  
   Maintainer-led tracking issue with 9 comments, this foundational refactor cleans up legacy TUI command routing to reduce bugs and speed up future feature delivery for the v0.9.0 milestone.
3. **#3568 [OPEN] Recurring plan/agent mode mixing bug** | https://github.com/Hmbown/CodeWhale/issues/3568  
   Widely reported user-facing bug with 6 comments and 1 👍. The glitch causes the agent to run full file modification attempts even when users explicitly intended to stay in read-only plan mode, leading to unintended changes to codebases.
4. **#3495 [OPEN] Adopt Moraine as external memory backend** | https://github.com/Hmbown/CodeWhale/issues/3495  
   v0.8.66 roadmap item with 4 comments. The Apache-2.0 Moraine library will enable lossless persistence of full conversation history and cross-session search via standardized MCP tools.
5. **#1641 [OPEN] Add fallback strategy for failed agent tool calls** | https://github.com/Hmbown/CodeWhale/issues/1641  
   User-reported pain point with 3 comments. Without fallback logic, the agent endlessly retries broken web search or API calls instead of switching to alternative methods, leading to total task failure.
6. **#528 [OPEN] Cache-maximal context mode for v0.9.0** | https://github.com/Hmbown/CodeWhale/issues/528  
   Popular power-user feature request with 3 comments. The mode leverages DeepSeek V4's cheap cached input to replace lossy context summarization and preserve full source accuracy during long codebase work sessions.
7. **#3638 [CLOSED] Expose main prompt for broader non-SWE use cases** | https://github.com/Hmbown/CodeWhale/issues/3638  
   Closed as complete this window with 2 comments. The feature lets users repurpose the TUI for literary writing, document review and other non-software workflows by overriding base system prompts.
8. **#3354 [CLOSED] Load locale-specific Chinese skills to reduce tokens** | https://github.com/Hmbown/CodeWhale/issues/3354  
   Resolved this window with 3 comments. This addresses the large Chinese user base's long-standing request to cut unnecessary English prompt bloat that wastes tokens for non-English sessions.
9. **#3256 [OPEN] Collapse successful tool-call output by default** | https://github.com/Hmbown/CodeWhale/issues/3256  
   Interface polish request with 1 comment. The change will cut visual clutter in the TUI scrollback by hiding verbose stdout for successful runs, only auto-expanding output for failed operations.
10. **#3358 [OPEN] Ship Playwright-backed browser automation tool** | https://github.com/Hmbown/CodeWhale/issues/3358  
   High-demand feature with 1 comment. Users working on end-to-end testing want full interaction with rendered JavaScript pages (not just static HTTP fetch) to click elements and inspect live DOM state.

## 4. Key PR Progress (10 Important Items)
1. **#3706 [CLOSED] Layer 4.2 command-boundary refactor completion** | https://github.com/Hmbown/CodeWhale/pull/3706  
   Delivers the final, validated layer of the v0.9.0 staged command architecture refactor, adding public documentation and cleanup for the new source-verified command routing system.
2. **#3696 [CLOSED] Allow overriding base prompts from config directory** | https://github.com/Hmbown/CodeWhale/pull/3696  
   Implements full custom prompt support for non-SWE use cases, replacing hardcoded embedded prompts with configurable files stored in the user's local config folder.
3. **#3702 [CLOSED] Stream ACP session deltas as incremental chunks** | https://github.com/Hmbown/CodeWhale/pull/3702  
   Critical ACP compatibility fix that eliminates full turn buffering, so Zed and other editor users see streamed incremental output instead of waiting for a full generation to finish.
4. **#3697 [CLOSED] Implement cache-maximal context mode** | https://github.com/Hmbown/CodeWhale/pull/3697  
   Core implementation of the v0.9.0 feature, injecting full contents of the top active user files directly into context instead of just

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*