# AI CLI Tools Community Digest 2026-06-22

> Generated: 2026-06-21 23:13 UTC | Tools covered: 9

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

# Cross-Tool 2026-06-26 AI CLI Agent Comparison Report
*For technical decision makers and developer teams*

---

## 1. Ecosystem Overview
The 2026-06-22 24-hour activity snapshot of the 8 leading AI code CLI tools shows a mature, fast-maturing ecosystem that has shifted focus from baseline chat and code generation functionality to full end-to-end agent workflow orchestration. Across all projects, reliability and unaddressed historical user pain points are prioritized over flagship new capabilities this reporting window, with strong alignment around standardization of the Model Context Protocol (MCP) for third-party tool integrations. There is a clear split between closed commercial vendor offerings, China-origin regional tools optimized for domestic LLM deployments, and fully open-source community projects built for maximum vendor lock-in avoidance. Self-hosted local LLM support is no longer a niche experimental feature, and has become a top-3 priority across almost all active projects.

## 2. Activity Comparison
| Tool Name | Total Updated Issues (24h) | Merged/Updated PRs (24h) | 24h Release Status |
|-----------|------------------------------|---------------------------|--------------------|
| Claude Code | 10 | 2 | No new stable release |
| OpenAI Codex | 10 | 10 | 3 Rust alpha pre-releases |
| Gemini CLI | 10 | 10 | No new public release |
| GitHub Copilot CLI | 9 | 1 | No new release |
| Kimi Code CLI | 1 | 0 | No new release |
| OpenCode | 10 | 10 | 1 stable release (v1.17.9) |
| Pi | 10 | 6 | No new release |
| Qwen Code | 27 | 46 | 1 stable (v0.18.5) + 1 nightly pre-release |
| DeepSeek TUI (CodeWhale) | 10 | 10+ | 1 milestone stable rebrand release (v0.8.63) |

## 3. Shared Feature Directions
These high-priority requirements appear across 3+ separate project communities:
1. **MCP ecosystem compatibility (Claude Code, Codex, Gemini CLI, OpenCode, Qwen Code)**: Users demand standardized schema handling, native automatic MCP server OAuth refresh, logic to gracefully degrade when >128 tools are loaded, and fixed CORS support for browser-based MCP integrations.
2. **Local session management upgrades (Codex, OpenCode, Pi, Copilot CLI, Qwen Code)**: Teams need project-local (not global) session storage to eliminate cross-project context pollution, concurrent multi-session switching, customizable storage paths to offload large datasets from small boot SSDs, and session forking at arbitrary message points.
3. **Agent safety and reliability guardrails (all 8 tools)**: Users require explicit pre-execution warnings for destructive operations such as unprompted `git reset --force`, automatic detection of infinite execution loops, and no unreported silent failures after agent crashes that break unattended workflows.
4. **Native local LLM support (Gemini CLI, Pi, OpenCode, Qwen Code)**: Self-hosting teams want automatic dynamic model list sync for Ollama/LM Studio/vLLM deployments, no manual JSON editing for custom endpoints, and dedicated error handling for local provider-specific edge cases such as unique context overflow formatting.
5. **TUI power user QoL (all terminal-native tools)**: Common requests include out-of-the-box shell auto-completion, no forced scroll jumps during streaming output, visible real-time context window usage stats, and one-click persistent permission rules to avoid repeated identical approval prompts.

## 4. Differentiation Analysis
Projects split clearly along 3 distinct development trajectories:
1. **Closed commercial enterprise tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Feature focus is prioritized on native IDE integration, enterprise admin controls, and structured billing telemetry for centralized usage tracking. Target users are large paid enterprise developer teams, and the technical approach uses limited public PR visibility, prioritizing production stability over fast iteration on community feature requests.
2. **China-origin regional tools (Kimi Code CLI, Qwen Code, CodeWhale)**: Feature focus prioritizes full native Chinese language/RTL support, broad compatibility with domestic open-weight LLM deployments, and low-friction onboarding. Target users are regional developer teams working with local self-hosted model stacks, and the technical approach uses very fast release cadences, with 20-30% of all PRs contributed by the local community.
3. **Fully open-source agnostic tools (OpenCode, Pi)**: Feature focus is 100% on maximum vendor lock-in avoidance, moddable extension APIs, and support for every possible third-party LLM provider. Target users are power users, tinkerers, and small self-hosted teams, and the technical approach uses fully public PR review, with feature prioritization directly aligned to community upvote counts (e.g. OpenCode delivered the 30-upvote top-requested YOLO auto-approve mode this window).

## 5. Community Momentum & Maturity
- **Highest rapid iteration and active community contribution**: Qwen Code leads all tools with 46 active PRs and 27 updated issues in 24 hours, followed closely by CodeWhale, OpenCode, and OpenAI Codex all with 10+ public PRs merged this window and high external community contribution rates.
- **Mature, stable but slower public activity**: Claude Code and GitHub Copilot CLI show low visible public activity this window, prioritizing internal triage of long-pending bugs over public feature launches, consistent with their large existing enterprise user bases and strict SLA requirements.
- **Lowest public activity**: Kimi Code CLI logged zero PR updates and only 1 resolved feature request this window, aligned with a smaller focused development team targeting incremental improvements for their existing user base rather than fast public expansion.

## 6. Trend Signals
Three high-impact industry signals are derived from this 24-hour community dataset:
1. Basic LLM inference capabilities are no longer a differentiator for AI CLI tools, as all leading projects have shifted R&D investment to workflow friction reduction, reliability, and guardrails. For enterprise teams, 2026 releases of these tools are far more production-ready for unattended CI use cases than 2025 versions, eliminating common pain points such as unannounced cost hikes, excessive SSD wear from unthrottled logging, and silent agent failures.
2. MCP has become the de facto cross-standard for third-party tool integration across all major vendors. Teams building custom internal agent tools can prioritize MCP compatibility to ensure their integrations work out of the box for every leading AI CLI agent, no custom adapter development required.
3. First-class local LLM support is on track to ship across all major mainstream AI CLI tools by the end of 2026, removing the last major barrier for teams that want full control of their code agent stack with no data exfiltration to third-party vendor endpoints.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-06-22)
---
## 1. Top Skills Ranking
Ranked by cross-reference alignment to high-engagement public issues, recency of activity, and overlapping community contributor traction (raw PR comment fields returned undefined per source data):
1. **Skill-Creator 0% Recall Pipeline Fix** (PR #1298, [https://github.com/anthropics/skills/pull/1298](https://github.com/anthropics/skills/pull/1298)): Functionality fully resolves the broken `run_eval.py` skill optimization pipeline that returned 0% recall for every skill regardless of content, addressing 10+ independent community reproductions, Windows stream reading errors, incorrect trigger detection, and broken parallel worker logic. Discussion highlights: Tied to two of the top 5 most-commented community issues (#556, #1169) around non-functional skill evaluation tooling. Status: Open, last updated 2026-06-21.
2. **Unquoted YAML Special Character Validation** (PR #361, [https://github.com/anthropics/skills/pull/361](https://github.com/anthropics/skills/pull/361)): Functionality adds pre-parse checks in `quick_validate.py` to catch unquoted `description` and `compatibility` fields containing reserved YAML characters that cause silent, hard-to-debug skill parsing failures. Discussion highlights: Competing overlapping implementation submitted independently by multiple contributors, targets a top reported pain point for first-time skill authors. Status: Open, last updated 2026-06-10.
3. **Windows run_eval.py Crash Fix** (PR #1099, [https://github.com/anthropics/skills/pull/1099](https://github.com/anthropics/skills/pull/1099)): Functionality resolves the `[WinError 10038]` crash that rendered the skill optimization pipeline completely unusable for Windows users. Discussion highlights: Directly tied to high-visibility Windows compatibility issue #1061, one of three coordinated community fixes for Windows developer workflows. Status: Open, last updated 2026-05-24.
4. **Windows Subprocess + Encoding Bug Fixes** (PR #1050, [https://github.com/anthropics/skills/pull/1050](https://github.com/anthropics/skills/pull/1050)): Functionality delivers two 1-line patches that fix unrecognized `claude.cmd` execution on Windows and default CP1252 encoding errors that break non-ASCII skill metadata processing. Discussion highlights: Complementary to PR #1099, unblocks full end-to-end skill development for the large population of Windows-based Claude Code users. Status: Open, last updated 2026-05-24.
5. **Official CONTRIBUTING.md Guide** (PR #509, [https://github.com/anthropics/skills/pull/509](https://github.com/anthropics/skills/pull/509)): Functionality adds a full contributor playbook to raise the repo's 25% GitHub community health score, outlining submission rules, skill testing requirements, and PR review SLAs. Discussion highlights: Resolves unmet community demand for clear submission expectations, closes previously filed issue #452. Status: Open, last updated 2026-03-19.
6. **Testing Patterns Reference Skill** (PR #723, [https://github.com/anthropics/skills/pull/723](https://github.com/anthropics/skills/pull/723)): Functionality delivers a production-grade skill covering the full modern software testing stack, from test philosophy and unit testing to React component testing, E2E testing and accessibility validation. Discussion highlights: Addresses repeated community feedback that generic test guidance from Claude lacks actionable, standard-compliant steps that teams can directly adopt. Status: Open, last updated 2026-04-21.

## 2. Community Demand Trends
Distilled from top engagement issues:
1. Top priority workflow demand: Native org-wide skill sharing functionality to eliminate the current clunky manual workflow of distributing .skill files via Slack/Teams, and build centralized shared team skill libraries.
2. Core tooling reliability demand: Massive unmet demand for fully working, cross-platform skill-creator tooling that eliminates silent parsing failures, broken evaluation loops, and Windows compatibility blockers.
3. Enterprise line-of-business skill demand: Strong interest in production-ready pre-built skills for widely used corporate platforms including ServiceNow, SAP, OpenDocument workflows, and controlled document typography quality checks.
4. Ecosystem interoperability demand: Public requests for native Skills support on AWS Bedrock, and standardizing Skills as Model Context Protocol (MCP) compatible endpoints for broader ecosystem integration.
5. Security hardening demand: Widespread support for skill provenance tracking to block namespace impersonation attacks where unvetted community skills are mislabeled as official Anthropic releases, plus stricter permission scoping for shared skills.
6. Bloat reduction demand: User requests to eliminate duplicate default skills that unnecessarily bloat the Claude Code context window and cause conflicting behavior.

## 3. High-Potential Pending Skills
These low-risk, widely requested open PRs are on track for near-term merge:
1. **PDF Skill Case-Sensitivity Fix** (PR #538, [https://github.com/anthropics/skills/pull/538](https://github.com/anthropics/skills/pull/538)): Patches 8 broken uppercase file references in the PDF skill's documentation that cause loading failures on case-sensitive Unix filesystems, last updated 2026-04-29.
2. **DOCX Tracked Change Corruption Fix** (PR #541, [https://github.com/anthropics/skills/pull/541](https://github.com/anthropics/skills/pull/541)): Resolves a widely reported bug that corrupts DOCX files when adding tracked changes to documents with pre-existing bookmarks, last updated 2026-04-16.
3. **Skill-Creator UTF-8 Panic Fix** (PR #362, [https://github.com/anthropics/skills/pull/362](https://github.com/anthropics/skills/pull/362)): Adds safe UTF-8 byte validation to prevent CLI crashes when processing non-ASCII characters in skill metadata, unblocking non-English skill authors, last updated 2026-06-10.
4. **Full ServiceNow Platform Skill** (PR #568, [https://github.com/anthropics/skills/pull/568](https://github.com/anthropics/skills/pull/568)): A complete, production-ready skill covering all core ServiceNow modules including ITSM, SecOps, FSM, ITAM and IntegrationHub, one of the most requested enterprise LOB skills.

## 4. Skills Ecosystem Insight
The most concentrated community demand at the Skills level is not for experimental demo capabilities, but for immediate reliability fixes to the core skill development tooling, reduced friction for team and organizational skill distribution, and production-verified, security-hardened pre-built skills for widely adopted enterprise line-of-business platforms.

---

# Claude Code Community Digest | 2026-06-22
---
## 1. Today's Highlights
This 24-hour update for the Claude Code repository includes no official new stable releases, with most activity focused on maintainer triage of long-pending bug reports, plus fresh community discussion for the highest-voted open feature request. Two new community-submitted pull requests landed yesterday covering shell auto-completion support and improvements to the repository's internal issue triage tooling. Several long-standing Windows, Linux, and macOS platform-specific edge case bugs related to auth flows, sandbox behavior, and installation workflows were marked as resolved or duplicate during the daily triage pass.

## 2. Releases
No new official Claude Code releases were published in the past 24 hours.

## 3. Hot Issues
1. **#18435: Multi-account profile switching for Claude Desktop** | [Link](https://github.com/anthropics/claude-code/issues/18435)
   The highest-voted open feature request (601 👍, 118 comments) addresses major workflow friction for developers juggling personal, work, and paid team accounts, who currently have to manually log out and re-authenticate to switch between different Claude accounts.
2. **#61912: Linux OAuth refresh corrupts credentials after transient 5xx errors** | [Link](https://github.com/anthropics/claude-code/issues/61912)
   Open unpatched bug that causes permanent 401 authentication loops across all user sessions after a brief Anthropic API outage, breaking Claude Code entirely for affected Linux users with no automatic recovery path.
3. **#50694: Auto Dream permanently disabled after child agent crash on Windows** | [Link](https://github.com/anthropics/claude-code/issues/50694)
   Resolved bug that left behind a stale `.consolidate-lock` file after an Auto Dream process was force-killed, silently disabling the experimental auto-agent feature indefinitely with zero user-facing error messaging.
4. **#46740: Native non-WSL sandbox support for Windows** | [Link](https://github.com/anthropics/claude-code/issues/46740)
   9-upvote resolved feature request that targets a critical security gap, where Windows Claude Code users currently get no process isolation equivalent to the macOS Seatbelt and Linux bubblewrap sandbox implementations.
5. **#61401: Sandbox blocks writes to IDE config folders inside node_modules** | [Link](https://github.com/anthropics/claude-code/issues/61401)
   Resolved bug that broke `pnpm install` workflows for JavaScript/TypeScript developers, as the sandbox incorrectly restricted writes to `.vscode/` and `.idea/` hidden folders nested inside the node_modules directory.
6. **#69936: Independent language setting for VS Code voice dictation** | [Link](https://github.com/anthropics/claude-code/issues/69936)
   Newly opened enhancement request for multilingual developers, who want to configure speech-to-text language separately from the global app UI and Claude response language to support taking notes in their native language while writing code in English.
7. **#44654: Cowork stuck on infinite "Authenticating" screen on M-series macOS** | [Link](https://github.com/anthropics/claude-code/issues/44654)
   Resolved bug that left users running local Cowork VMs stuck in an unresolvable loading state after a failed OAuth exchange, with no actionable error details shown in-app.
8. **#60059: Mobile tool approval modals pop up over on-screen keyboard** | [Link](https://github.com/anthropics/claude-code/issues/60059)
   Resolved UX bug that caused unintended "Deny" action triggers when users were actively typing on their mobile device, introducing unexpected friction for developers editing code on the go.
9. **#69932: Spurious broken binary warning for Homebrew macOS installs** | [Link](https://github.com/anthropics/claude-code/issues/69932)
   Resolved false positive error that incorrectly flagged working Homebrew-managed Claude CLI installations as corrupt, confusing package manager users on macOS.
10. **#53959: Missing active time telemetry in --print output mode on Windows** | [Link](https://github.com/anthropics/claude-code/issues/53959)
    Resolved bug that broke custom logging and automation setups for power users, as the `claude_code.active_time.total` metric was no longer emitted in non-interactive CLI output on v2.1.119.

## 4. Key PR Progress
Only 2 pull requests received updates in the past 24 hours, as no internal active feature development PRs are currently public in this repository:
1. **PR #69916: Fix silent exit behavior in issue triage script** | [Link](https://github.com/anthropics/claude-code/pull/69916)
   This open contribution adds explicit error messaging to the `edit-issue-labels.sh` internal automation script, resolving a previously unreported silent failure case when no required add/remove label arguments are passed, improving the reliability of the public issue triage workflow.
2. **PR #4943: Add shell auto-completion scripts for bash, zsh, and fish** | [Link](https://github.com/anthropics/claude-code/pull/69916)
   The long-running PR originally opened in August 2025 received new maintainer review activity yesterday, adding native tab completion support for all Claude CLI commands and flags across major shells, a long-requested quality of life feature for terminal power users.

## 5. Feature Request Trends
1. Top priority productivity feature: One-click multi-account profile switching for Claude Desktop, to eliminate repeated logout/re-authentication cycles for users managing multiple unrelated accounts.
2. Security parity focus: Native non-WSL sandbox implementation for Windows to close the process isolation gap between Windows users and their macOS/Linux peers.
3. UX quality of life improvements: Customizable TUI status labels for the model thinking phase, read/unread tracking for completed sessions in Agent View, and independent speech-to-text language configuration for the VS Code extension.
4. Extensibility enhancement: Dynamic MCP server header updates mid-session for the Claude Agent SDK, to support multi-user hosted agent deployment use cases.

## 6. Developer Pain Points
1. Unhandled transient API errors: OAuth refresh flows on Linux do not properly recover from temporary upstream 5xx errors, leading to permanent broken authentication states that require manual cache reset.
2. Silent failures for experimental features: Auto Dream and other advanced agent capabilities break permanently with zero user notification after a crash, leaving developers unaware their workflows are no longer running as expected.
3. Persistent Windows platform gaps: Native Windows users face the largest volume of unpatched edge cases, including missing sandbox functionality, broken installation workflows, missing Pro user feature flags, and incorrectly restricted dependency installation operations.
4. Missing CLI basics: No out-of-the-box shell tab completion support remains a top requested quality of life improvement for power users running Claude in terminal-only automated workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-22
---
## 1. Today's Highlights
Over the last 24 hours, 3 new pre-release Rust alpha builds of the Codex CLI were published, alongside a surge of community reports around an unannounced 10–20x gpt-5.5 rate limit cost spike that has degraded Plus plan experience for thousands of users. OpenAI’s engineering team also landed 20+ targeted PRs focused on resolving long-standing thread performance bottlenecks for Codex Desktop, plus refactoring for the code-mode runtime to support future cross-transport deployment.

## 2. Releases
Three new pre-release builds for the Codex Rust CLI implementation were published within the 24-hour window:
- `rust-v0.142.0-alpha.8`, `rust-v0.142.0-alpha.9`, `rust-v0.142.0-alpha.10`: Iterative pre-releases with incremental bug fixes, sandbox subsystem refinements, and performance updates leading up to the stable v0.142.0 launch.
Source: https://github.com/openai/codex/releases

## 3. Hot Issues
1. **10–20x rate limit cost jump for gpt-5.5 Plus plan users** (#28879): 95 comments, 185 👍. Community reports confirm that starting June 16, Codex gpt-5.5 sessions drain a 5-hour Plus plan budget in 2–3 prompts, with no public notification of adjusted rate limit pricing. Users are asking for immediate rollback and transparent billing disclosures. https://github.com/openai/codex/issues/28879
2. **IDE-native integrated diff/approval flow** (#2998): 62 comments, 197 👍. The highest voted open enhancement request, asking to port Codex CLI’s existing terminal red/green diff approval workflow directly into IDE Codex extensions instead of forcing users to switch to a separate terminal window. https://github.com/openai/codex/issues/2998
3. **Bidirectional Codex ↔ ChatGPT session interoperability** (#2153): 37 comments, 149 👍. Users want to move in-progress Codex sessions to the ChatGPT web UI to leverage web search and brainstorming tools, then port the context back to Codex CLI for code execution. https://github.com/openai/codex/issues/2153
4. **Local SQLite logs generate ~640 TB/year of writes, eroding SSD endurance** (#28224): 10 comments, 28 👍. Users measured excessive unthrottled write traffic to the Codex feedback log database, which can reduce the lifespan of consumer NVMe SSDs for active developers. https://github.com/openai/codex/issues/28224
5. **Codex Desktop hides older project conversations outside the 50-entry global recent list** (#21128): 29 comments, 17 👍. Long-running project sessions are effectively lost from the UI once they fall outside the hard-coded recent conversation window, breaking working memory for multi-day workstreams. https://github.com/openai/codex/issues/21128
6. **GitHub PR code review fails after workspace migration** (#26867): 23 comments, 12 👍. Users who migrated from a Business Codex workspace to a Personal Pro account are unable to run PR reviews, as the app retains reference to the deactivated old workspace. https://github.com/openai/codex/issues/26867
7. **Codex Desktop for macOS crashes on resume** (#29361): 6 comments, 0 👍. Newly reported June 21 bug causes total SIGKILL crashes when resuming existing threads, triggered by a feature flag mismatch where the app sends an unsupported `thread_tools` parameter to the bundled CLI. https://github.com/openai/codex/issues/29361
8. **v0.141.0 CLI crashes on Intel macOS with SIGTRAP** (#29047): 6 comments, 2 👍. The latest stable CLI release is broken for Intel Mac users, crashing inside the embedded V8 engine when any tool call is invoked, with rollback to 0.140.0 confirmed as the workaround. https://github.com/openai/codex/issues/29047
9. **Codex Desktop for Windows repeatedly launches PowerShell processes flagged by Bitdefender** (#28971): 17 comments, 8 👍. Security suite users see repeated false positive blocks for Codex background system calls, with no option to whitelist the behavior in-app. https://github.com/openai/codex/issues/28971
10. **Codex Cloud auto code review shows mismatched quota status** (#15477): 6 comments, 3 👍. The Codex Cloud dashboard reports available review quota, but actual review executions return a "limit reached" error due to stale cached auth data. https://github.com/openai/codex/issues/15477

## 4. Key PR Progress
1. **Thread store separation for names and ownership tracking** (#29352): Refactors the Codex Desktop thread database to move explicit thread names out of derived history titles, enabling a new lightweight SQLite projection that speeds up all list and query operations. https://github.com/openai/codex/pull/29352
2. **Speed up thread list with lightweight SQLite rows** (#29355): Reduces the overhead of the local thread list endpoint by using narrow SQLite projections instead of full thread materialization, cutting load times for users with 1000+ saved sessions by ~90%. https://github.com/openai/codex/pull/29355
3. **Speed up thread resume without deferred repair** (#29357): Optimizes the thread resume flow to parse rollout files on dedicated blocking workers and reuse loaded history, eliminating duplicate I/O that caused multi-second resume waits for long threads. https://github.com/openai/codex/pull/29357
4. **Expose transport-neutral session runtime for code-mode** (#29292): Refactors the code-mode subsystem to decouple core runtime logic from the in-process protocol service, enabling future hosting of the same code-mode runtime over external remote transports without changes to core behavior. https://github.com/openai/codex/pull/29292
5. **Allow Codex sandbox to consume MCP sandbox state** (#29358): Adds native support for passing pre-generated sandbox metadata directly from MCP servers to the Codex sandbox executor, eliminating redundant permission configuration steps for third-party tool integrations. https://github.com/openai/codex/pull/29358
6. **Updated Plan Mode prompt** (#29301): Merged change that automatically renders the full implementation plan to users during follow-up interactions, eliminating the need for users to manually exit plan mode to review or execute the proposed work. https://github.com/openai/codex/pull/29301
7. **Optimize thread resume and fork operations** (#29367): Adds checkpoint-bounded rollout reconstruction and reverse recent-turn reads to avoid full materialization of very long threads, cutting fork times for 10,000+ turn sessions by over 80%. https://github.com/openai/codex/pull/29367
8. **Avoid redundant rollout reads for history** (#29109): Eliminates duplicate parsing of thread rollout files in the LocalThreadStore, removing redundant I/O for thread read, resume, and fork operations. https://github.com/openai/codex/pull/29109
9. **Optimize filesystem thread listing** (#29035): Rewrites the fallback filesystem thread listing flow to avoid pre-loading full thread summaries for entries that will be filtered out, making the UI usable even for users with thousands of subagent rollouts stored locally. https://github.com/openai/codex/pull/29035
10. **Linearize code-mode cell terminal state** (#29286): Introduces a single atomic state machine for code-mode cell completion and termination, eliminating race conditions that caused partial or corrupted stored value commits if a thread was terminated mid-execution. https://github.com/openai/codex/pull/29286

## 5. Feature Request Trends
The highest-demand feature directions from the community are:
1. Full parity between Codex CLI’s native diff approval workflow and all IDE extensions, to avoid context switching away from editor windows.
2. Bidirectional session sync between Codex CLI/Desktop and ChatGPT web to leverage ChatGPT’s built-in web search, data analysis, and brainstorming tools for pre-code planning.
3. Configurable custom storage paths for Codex Desktop session data, to allow users to move large thread and log datasets off small boot SSDs to higher capacity secondary drives.
4. Persistent private live plan files for Plan Mode, matching the popular implementation from Claude Code, that let users view, edit, and track progress against implementation plans in real time on disk.
5. A toggle to disable the accidental hover-triggered right sidebar on Codex Desktop, which currently interrupts text selection and copy/paste operations near the window edge.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. Widespread regressions in the latest Windows 26.616 Codex Desktop release, including unwanted visible PowerShell popups, broken patch application when system proxies are enabled, and excessive SQLite I/O that causes full system stalls even on high-end workstations.
2. Unannounced 10–20x token cost increases for gpt-5.5 on Plus plans, that have made the 5-hour daily rate limit budget effectively unusable for many casual users with no public explanation from OpenAI.
3. Extremely high write throughput to local Codex SQLite log files that can generate up to 640 TB of annual disk writes, rapidly reducing SSD lifespan for heavy users.
4. Multiple platform-specific recent crashes: Intel macOS CLI SIGTRAP failures on v0.141.0, and universal macOS Desktop crashes on resume due to mismatched feature flag support in bundled CLI binaries.
5. Permanent loss of access to older project conversations that fall outside the hard-coded 50-entry global recent history window, breaking long-running project working memory for users who do not manually export sessions regularly.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-22
---
## 1. Today's Highlights
This digest covers 24 hours of updates for the `google-gemini/gemini-cli` repository, with no new public releases published in the window, and all work focused on bug hardening, security patches, and MCP ecosystem compatibility. 4 critical core fixes were merged and closed in the last day, addressing ripgrep registration failures, VS Code companion UX, and broken error URL formatting. Multiple high-voted P1 agent hang bugs were triaged for retesting as part of the ongoing agent reliability workstream.

## 2. Releases
No new public Gemini CLI releases were published in the 24 hour window ending 2026-06-22.

## 3. Hot Issues (10 Noteworthy Items)
All items are sorted by user engagement and business impact:
1. **[#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**: P1 bug affecting all users that defer to the generalist subagent for even simple tasks like folder creation, with users reporting hangs lasting an hour or more. It is the highest upvoted active bug (8 👍), with a confirmed workaround of explicitly disabling subagent deferral, and is now tagged for retesting.
2. **[#22323 Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**: P1 bug that misrepresents interrupted subagent execution as fully successful, leading users to waste time assuming their analysis task completed before hitting the turn limit. 7 community comments are logged on the issue, and it is marked for retesting.
3. **[#24353 Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**: Core maintainer EPIC expanding existing behavioral test coverage (76 tests already deployed across 6 Gemini models) to granular component-level evaluations, to drastically reduce regressions in agent functionality.
4. **[#22745 Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**: High-priority investigation that would add AST-native code operations to the CLI, cutting down unnecessary tool call turns, reducing token noise from misaligned file reads, and improving codebase exploration accuracy for developer users.
5. **[#25166 Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**: P1 core bug where even non-interactive simple shell commands (e.g. directory creation) hang indefinitely after finishing execution, confirmed by 3 upvotes from end users.
6. **[#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**: P2 security issue highlighting that Auto Memory sends unredacted user transcript data to the background extraction model before any secret redaction logic runs, creating a critical local secret leak risk.
7. **[#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**: Widely reported user pain point where custom user-defined skills (e.g. Gradle, Git execution helpers) are never invoked unless users explicitly instruct the agent to do so, defeating the purpose of preconfigured custom skill setup.
8. **[#24246 Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: Bug for power users with large MCP integrations stacks, where exceeding ~128 total available tools triggers a hard Gemini API 400 error, with no smart dynamic tool scoping logic implemented in the CLI today.
9. **[#22672 Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**: 1-upvoted user request to add guardrails that block or warn before the agent runs destructive operations like unprompted `git reset --force` that can delete uncommitted user work.
10. **[#21983 browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**: P1 Linux compatibility bug that completely breaks the browser subagent functionality for all users running Wayland display servers, tagged for retesting after recent browser runtime updates.

## 4. Key PR Progress (10 Important Items)
1. **[#28071 fix(core): perform spawn check on ripgrep before registration](https://github.com/google-gemini/gemini-cli/pull/28071) (Closed)**: Fixes a hard startup failure for users where the ripgrep binary is missing or not executable, by checking runtime availability before registering the search tool.
2. **[#27744 fix(web-fetch): resolve DNS before SSRF guard to block hostname-to-private-IP bypass](https://github.com/google-gemini/gemini-cli/pull/27744)**: Critical security patch that blocks SSRF attacks via wildcard DNS services (e.g. `127.0.0.1.nip.io`) that resolve public hostnames to private local IP addresses.
3. **[#27878 fix(core): sniff MCP image MIME types](https://github.com/google-gemini/gemini-cli/pull/27878)**: Resolves widespread Figma MCP integration 400 errors by detecting actual image MIME types from binary signatures, instead of trusting user-provided labels that misclassify WebP files as PNG.
4. **[#27889 fix(core): refresh MCP OAuth with stored client ID](https://github.com/google-gemini/gemini-cli/pull/27889)**: Fixes broken OAuth refresh flows for auto-discovered MCP servers, eliminating repeated manual login prompts for users of third-party MCP integrations.
5. **[#28059 fix(cli): don't let an unreadable .env (EACCES) break extension loading](https://github.com/google-gemini/gemini-cli/pull/28059)**: Hardens extension loading for sandboxed environments like Cloud Shell, where restricted permissions on workspace `.env` files previously caused total extension system failure.
6. **[#28068 fix(core): guard message inspectors against empty parts arrays](https://github.com/google-gemini/gemini-cli/pull/28068)**: Fixes a JavaScript vacuous truth bug that misclassified empty model messages as valid function calls, eliminating silent agent execution crashes.
7. **[#28070 fix(vscode-ide-companion): restore terminal focus when closing diff](https://github.com/google-gemini/gemini-cli/pull/28070) (Closed)**: Fixes a longstanding UX bug where the VS Code terminal lost active focus after users closed a CLI-generated code diff view.
8. **[#27888 fix(core): normalize MCP tool schemas to root type object](https://github.com/google-gemini/gemini-cli/pull/27888)**: Resolves Vertex AI strict mode validation errors for third-party MCP tools that advertise input schemas missing a required top-level `type: "object"` field.
9. **[#27886 fix(core): respect .gitignore and .geminiignore in session_context directory tree](https://github.com/google-gemini/gemini-cli/pull/27886)**: Ensures sensitive user-ignored files are never accidentally included in the CLI's session context prompt, reducing token bloat and unintended data leak risks.
10. **[#28063 fix: resolve workspace publish failures and scheduler event loop starvation](https://github.com/google-gemini/gemini-cli/pull/28063) (Closed)**: Fixes CI NPM publish failures for the Gemini CLI monorepo by adding a `--ignore-scripts` flag to release workflows, preventing broken public package deployments.

## 5. Feature Request Trends
The most requested feature directions from recent issue activity are:
1. AST-native codebase navigation workflows to reduce tool call turns and token bloat during code exploration tasks
2. Major Auto Memory system improvements including deterministic pre-processing secret redaction, infinite low-signal session retry prevention, and invalid memory patch quarantine
3. Subagent quality of life upgrades: publicly shareable subagent trajectories, automatic browser session lock recovery, and built-in CLI self-awareness for accurate flag/hotkey user guidance
4. Built-in agent safety guardrails that warn or block high-risk destructive operations before they run on user workspaces

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by end users:
1. **Agent reliability gaps**: Frequent unprovoked generalist subagent hangs, Wayland browser subagent failures, shell commands that hang after completion, and subagents that misreport successful execution after hitting turn limits
2. **MCP

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-22
Repository: github.com/github/copilot-cli

---

## 1. Today's Highlights
No new Copilot CLI releases were published in the 24-hour reporting window. The long-running, 17-👍 community top-voted feature request for repository-scoped plugins was marked closed, alongside 3 other high-impact UX fixes for terminal state leaks, missing hook discoverability, and silent context compaction. Newly filed open issues this period cover critical Windows platform stability gaps, misaligned sandbox documentation, and broken custom permission hook functionality for VS Code integrations.

## 2. Releases
There are no new published releases for Copilot CLI in the last 24 hours. This section is omitted per update parameters.

## 3. Hot Issues
All 9 issues updated in the reporting window are featured below:
1. [Issue #1665 (Closed)](https://github.com/github/copilot-cli/issues/1665): 17-upvote top community request for project/repo-scoped plugins (instead of global per-user installs) marked resolved. Enables teams to share plugin configurations per repository without manual user setup.
2. [Issue #3687 (Open)](https://github.com/github/copilot-cli/issues/3687): Report of reproducible fatal BEX64 hard crash for Windows ARM64 users running 1.0.57 / 1.0.60, triggered under load during terminal tab restore or mid-session high memory usage, with no graceful error handling.
3. [Issue #3871 (Closed)](https://github.com/github/copilot-cli/issues/3871): Resolved gap where no CLI equivalent of `copilot mcp list` existed for enumerating installed plugin hooks, improving plugin developer UX for auditing hook sets.
4. [Issue #3861 (Open)](https://github.com/github/copilot-cli/issues/3861): Report that documented local sandbox features including per-host network filtering and cross-platform execution isolation do not function, creating trust gaps for teams enforcing secure untrusted code execution.
5. [Issue #3867 (Closed)](https://github.com/github/copilot-cli/issues/3867): Resolved missing UX functionality where users had no visibility into context window usage and no notification when automatic context compaction ran, eliminating unexpected token limit surprises.
6. [Issue #3874 (Open)](https://github.com/github/copilot-cli/issues/3874): Bug report that the VS Code Copilot Chat `preToolUse` custom agent hook permission denial does not work, breaking team-customized access control workflows for agent tool use.
7. [Issue #3778 (Open)](https://github.com/github/copilot-cli/issues/3778): Feature request to add cost and premium billing metrics to existing OpenTelemetry exports, matching Claude Code's `claude_code.cost.usage` telemetry for enterprise usage tracking.
8. [Issue #3876 (Closed)](https://github.com/github/copilot-cli/issues/3876): Resolved terminal state leak where Copilot CLI incorrectly disabled native mouse scrolling on exit, forcing users to manually reset their terminal session to regain normal functionality.
9. [Issue #3879 (Open)](https://github.com/github/copilot-cli/issues/3879): UX bug where the status bar conflates active LLM generation with idle background subagent/process work, making it impossible for users to tell when it is fully safe to type input without conflicts.

## 4. Key PR Progress
Only 1 PR was updated in the reporting window:
- [PR #3880 (Open)](https://github.com/github/copilot-cli/pull/3880): An unrelated, invalid stray submission containing unmodified frontend UI component code that does not target any core Copilot CLI functionality. No core feature or bug fix PRs were merged or updated in the last 24 hours.

## 5. Feature Request Trends
Across all updated issues, the top requested feature directions are:
1. Plugin ecosystem maturity: Standardized repo-level plugin management and improved discoverability tooling for custom hooks
2. Enterprise observability: Native cost and billing metric exports via OpenTelemetry for centralized usage reporting
3. Session transparency: User-facing context window token usage tracking and explicit notifications for automatic context compaction
4. Terminal UX polish: Full reset of all modified terminal state on CLI exit to avoid breaking default native terminal behavior

## 6. Developer Pain Points
Recurring high-impact frustrations surfaced this window:
1. Cross-platform stability gaps for Windows ARM64 users, with unhandled fatal crashes under high session load
2. Feature documentation misalignment, where advertised sandbox security features do not work as described
3. Hidden functionality gaps for custom permission workflows, where preToolUse hooks fail to enforce access controls for VS Code integrated sessions
4. Ambiguous session status signaling, where users cannot distinguish between active LLM generation and idle background work via the current status bar
5. Missing discoverability tooling for plugin hooks, requiring fully manual audits of installed custom rule sets

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-22
Repository: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
The 24-hour activity window for the Kimi Code CLI project centers on the formal resolution of a two-week-old community feature request focused on improving in-chat code navigation for local development workflows. No new official releases or active pull request updates were logged in this period. The closed issue confirms a highly requested quality-of-life improvement has been rolled out to end users, eliminating a common pain point for developers navigating large codebases via the CLI assistant.

## 2. Releases
No new stable, pre-release, or nightly builds of Kimi Code CLI were published in the 2026-06-22 observation window.

## 3. Hot Issues
Only 1 issue received status updates in the past 24 hours, no additional modified community issues were logged for this window:
- #2440 [CLOSED] Clickable symbol / line references in Kimi Code chat panel: https://github.com/MoonshotAI/kimi-cli/issues/2440
  Submitted by community developer ElPrg on June 7, 2026, this request was marked closed to confirm full implementation completion. Previously, the Kimi chat panel only supported click navigation for full file paths, but lacked support for jumping directly to the definition of inline-named functions, classes, or variables mentioned in AI output. The shipped feature removes redundant manual search work from code exploration workflows, and saw positive early feedback from users who followed the original feature thread prior to closure.

## 4. Key PR Progress
No pull requests received new reviews, merges, status updates, or author revisions in the 2026-06-22 24-hour window, so no active PR progress is available to highlight for this digest.

## 5. Feature Request Trends
From recently tracked community requests, the dominant emerging feature direction is deep semantic integration between Kimi chat output and native IDE/code editor navigation systems. Users are no longer requesting basic file reference support, and are pushing for more granular, context-aware interaction that turns raw conversational code references into directly actionable navigation links, rather than requiring users to manually look up referenced assets. This trend aligns with broader user demand to evolve Kimi Code CLI from a standalone chat tool into a fully integrated code exploration layer for local projects.

## 6. Developer Pain Points
The only formally resolved pain point recorded in this observation window is excessive context switching during code exploration: prior to the latest feature rollout, even when Kimi explicitly identified a target function or variable definition in its response, developers were forced to manually open the corresponding file, then search for the target symbol via separate editor navigation tools. This added 2-3 extra steps per navigation action for teams working on large multi-file codebases, a friction point that has now been eliminated with the shipped clickable symbol reference support. No new unaddressed pain points were logged in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-22
---
## 1. Today's Highlights
Today’s updates for the AI dev tool OpenCode roll out stable patch v1.17.9, which resolves the widely reported mid-chat loop failure affecting popular models Qwen3 and Kimi K2. Two top-voted community feature requests (YOLO auto-approve permission mode, project-local session storage) are now marked closed after months of discussion, while active development picks up pace for the upcoming TUI 2.0 flagship refresh. The project also merged a wave of long-pending security hardening and third-party provider compatibility fixes over the last 24 hours.

## 2. Releases
### v1.17.9 (Stable)
This patch release targets core runtime reliability:
- **Bugfixes**: Honors configured agent step limits to force a final text response instead of failing mid-run, fixes case-insensitive Devstral model detection (contributed by community member @Robin1987China), and correctly passes user-configured custom headers to all Copilot model requests.
- The improvements section of the original release note was partially truncated in the source data, with full change logs published on GitHub.

## 3. Hot Issues (Top 10)
1. [#1522 Qwen3/Kimi K2 stop mid-chat looping](https://github.com/anomalyco/opencode/issues/1522) | Closed, 10 comments, 7 👍: The root cause of the reported infinite loop for OpenRouter-hosted Qwen3 and Kimi K2 models has been patched in v1.17.9, resolving a critical pain point for users of popular open-weight models.
2. [#14292 Save sessions to project folder instead of global ~/.opencode](https://github.com/anomalyco/opencode/issues/14292) | Closed, 10 comments, 16 👍: A long-requested feature that eliminates cross-project session pollution for developers working across multiple codebases, now shipped to stable.
3. [#11831 YOLO Mode: Auto-Approve All Permission Prompts](https://github.com/anomalyco/opencode/issues/11831) | Closed, 9 comments, 30 👍: The highest-upvoted feature of the last 6 months, designed for power users who want to skip disruptive workflow interruptions from repeated permission prompts while still respecting explicit deny rules.
4. [#10908 Full RTL support for Arabic, Hebrew, Persian and Urdu](https://github.com/anomalyco/opencode/issues/10908) | Closed, 9 comments, 7 👍: Resolves accessibility gaps for 100M+ RTL-language users, building on top of existing partial Arabic localization.
5. [#30192 "No provider available" error for Claude Opus on OpenCode Zen](https://github.com/anomalyco/opencode/issues/30192) | Open, 8 comments, 3 👍: An ongoing outage affecting paid OpenCode Black subscribers using the managed Zen service's top-tier Claude model, with no public ETA for a fix yet.
6. [#31041 Zen API CORS preflight requests return 404](https://github.com/anomalyco/opencode/issues/31041) | Open, 6 comments, 2 👍: A trivial routing bug that blocks all browser-based third-party integrations with the OpenCode Zen API, halting ecosystem development for custom web clients.
7. [#31247 Copilot Claude Opus 4.8 outputs pseudo text instead of structured tool calls](https://github.com/anomalyco/opencode/issues/31247) | Open, 6 comments: A model-specific bug for GitHub Copilot-hosted Claude 4.8 that breaks native tool usage, preventing the agent from running file edits or command executions as expected.
8. [#32829 $ref/$defs in MCP tool schemas throws AttributeError for Deepseek provider](https://github.com/anomalyco/opencode/issues/32829) | Open, 3 comments: Breaks popular third-party MCP integrations including official Asana and Notion MCP servers for users on the Deepseek model provider.
9. [#32375 Session rename support](https://github.com/anomalyco/opencode/issues/32375) | Closed, 3 comments, 1 👍: A small quality-of-life feature that lets users label saved sessions for easy navigation, instead of relying on auto-generated titles.
10. [#33229 OpenCode Zen lists Claude 4.7/4.8 but fails to run them](https://github.com/anomalyco/opencode/issues/33229) | Open, 2 comments: A new regression for paid subscribers that prevents access to Anthropic's latest flagship model versions despite them being visible in the model list.

## 4. Key PR Progress (Top 10)
1. [#33279 feat(tui): add YOLO permission mode](https://github.com/anomalyco/opencode/pull/33279): Implements the top-voted YOLO feature, adding a `--yolo` flag for both `opencode run` and the base TUI command to auto-approve non-explicit-deny permission prompts.
2. [#33281 feat(cli): add standalone v2 session flow](https://github.com/anomalyco/opencode/pull/33281): The foundational PR for TUI 2.0 that introduces a standalone authenticated child process server for the TUI, creates sessions via the new v2 API, and loads session-specific data via a dedicated DataProvider.
3. [#31796 tui 2.0](https://github.com/anomalyco/opencode/pull/31796): The flagship full TUI refresh PR currently under final review, set to ship in the next minor stable release.
4. [#28689 fix(permission): adjust wildcard matching, add ** globstar support](https://github.com/anomalyco/opencode/pull/28689): Fixes a longstanding security gap where wildcard rules like `*.env` would not match nested files such as `src/.env`, while adding standard globstar path support for permission policies.
5. [#28721 feat(referral): notify referrer via email when their referral code is redeemed](https://github.com/anomalyco/opencode/pull/28721): Improves the existing referral program UX to give users immediate confirmation of successful new signups they referred.
6. [#28668 feat(provider): add NEAR AI Cloud support](https://github.com/anomalyco/opencode/pull/28668): Adds a new low-cost open-weight model provider to the official catalog, with full documentation for NEARAI_API_KEY configuration.
7. [#28670 feat(session): support forking sessions at last assistant message](https://github.com/anomalyco/opencode/pull/28670): Adds a highly requested workflow feature that lets users branch a session right after an agent's output, instead of only being able to fork from prior user prompts.
8. [#28707 fix: prevent unrecoverable "Failed to fetch" errors on long sessions](https://github.com/anomalyco/opencode/pull/28707): Resolves a common pain point where multi-hour coding sessions would freeze permanently on a network error, losing unsaved progress.
9. [#28685 fix(desktop): restore v2 UI controls](https://github.com/anomalyco/opencode/pull/28685): Restores missing model selection and agent configuration UI that was accidentally removed from the desktop app in a prior update.
10. [#28645 fix(core): restrict global directory permissions](https://github.com/anomalyco/opencode/pull/28645): Hardens security on Unix-like systems by removing world-readable access to OpenCode's local user data, cache, and config directories that store secrets and API keys.

## 5. Feature Request Trends
1. **Workflow optimization**: The most requested capabilities focus on reducing interruptions, including auto-approve YOLO mode, project-local session storage, and smart automatic long prompt truncation to cut context bloat.
2. **Global accessibility**: Users in non-Latin script regions are pushing aggressively for full RTL language support and expanded i18n coverage for Persian, Hebrew, Arabic, and other under-supported languages.
3. **Third-party ecosystem extensibility**: High demand for browser-compatible Zen API endpoints, native new model provider support, and full MCP schema compatibility for popular third-party tools.
4. **Power user session controls**: Multiple feature requests target session management quality of life, including session rename, forking at any message point, and bulk session export functionality.

## 6. Developer Pain Points
1. **New model compatibility gaps**: There is a pattern of unhandled edge cases for latest generation models, including broken structured tool call outputs, invalid 400 prefill errors, and uncaught loop failures for Claude 4.7/4.8, Qwen3, Kimi K2, and GLM-5.2.
2. **OpenCode Zen paid service instability**: Multiple concurrent outages are impacting paid subscribers, including missing Claude model access, broken CORS support, and frequent credit card processing failures for new OpenCode Go signups.
3. **Session data loss risks**: Recurring reports of TUI crashes on startup, lost full session history after restarts on Windows, and broken state that freezes long multi-hour coding sessions.
4. **Unpatched security gaps**: Users flagged that OpenCode will blindly copy secret-bearing files (`.env`, private keys) to world-readable public directories during bulk sync tasks, in addition to previously unrestricted global directory permissions on Unix systems.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi (earendil-works/pi) Community Digest | 2026-06-22
---
## 1. Today's Highlights
Today’s updates for the Pi AI coding agent project focus heavily on hardening core agent loop reliability, closing long-pending feature gaps for local LLM users, and expanding public extension API functionality. Maintainers merged 6 high-impact pull requests overnight, addressing everything from undetected vLLM context overflow errors to missing compaction event metadata for extension developers. Top trending community discussions center on resolving persistent OpenAI Codex connection reliability issues and advancing the 36-upvote long-awaited official local LLM provider extension.
## 2. Releases
No new official Pi releases were published in the 24-hour reporting window.
## 3. Hot Issues (10 Noteworthy Items)
All links point to https://github.com/earendil-works/pi/
1. **#4945 OpenAI-Codex Connection Reliability Issues** – The project's highest-priority open bug with 64 comments and 30 upvotes. Users report GPT-5.5/Codex streams frequently stall on the "Working..." state with no output, no tool calls, and no visible error, forcing users to press Escape to abort turns. Community members are actively sharing debug logs to help the team narrow down root causes.
2. **#3357 Official local LLM provider extension** – The most requested feature with 36 upvotes and 26 comments. Users want native dynamic model list fetching from configurable base URLs to enable seamless integration with llama.cpp, Ollama, LM Studio, and other self-hosted LLM backends, no manual `models.json` editing required.
3. **#5825 Streaming markdown forces scroll to bottom** – High-impact UX pain affecting 100% of users with the `clear on shrink` setting enabled. Users reading back generated content by scrolling up are un-expectantly snapped back to the bottom of the stream mid-read, breaking normal reading workflows.
4. **#4180 Links not clickable anymore** – Closed regression tied to the recent term mode refactor, with 14 comments. Clickable markdown and raw URLs in agent output stopped working for most users, breaking workflows that require opening cited documentation and external resources directly from the TUI.
5. **#5778 pi-agent-core hangs indefinitely on unresponsive streams or tool execution deadlocks** – Critical stability bug exposing a wedge in the agent loop, with 7 comments. The core agent will hang indefinitely if an LLM stream drops without closing the iterator, or a tool execution promise fails to resolve, requiring full process termination to recover.
6. **#5700 Support multiple live agent sessions with TUI switching** – Popular feature request from power users, asking to enable concurrent background agent sessions instead of tearing down active sessions when switching. Developers running multiple parallel coding tasks requested the ability to monitor long-running tasks in the background while working on other sessions.
7. **#5930 vLLM context overflow errors not detected by auto-compaction** – Critical bug for self-hosted LLM users, where vLLM's unique context length exceeded error format did not match Pi's existing overflow patterns, causing infinite 400 error loops instead of triggering automatic context compaction.
8. **#5932 Exposing ctx.navigateTree() to agents** – Active discussion from a community extension developer building a custom /goal workflow, asking to expose the existing `navigateTree()` utility that is currently only available on `ExtensionCommandContext` to regular event/tool extension contexts, unblocks dozens of custom file exploration use cases.
9. **#5927 WSL2 Support dangerous working directory change** – Severe WSL2 user bug where launching Pi from a `\\wsl.localhost` Windows path would drop the agent into the protected `C:\WINDOWS\` directory instead of the user's project path, risking accidental modification of system files. The issue was marked resolved within 2 hours of being filed.
10. **#5921 Pi creates toolResult for empty/malformed tool calls, causing 400 error spiral** – Severe failure scenario: when an LLM generates a tool call with empty name and ID fields, Pi creates an invalid tool result that poisons the entire conversation thread, forcing users to start an entirely new session to resolve persistent API 400 errors.
## 4. Key PR Progress
All 6 PRs updated in the 24-hour window are high-priority, no additional active PRs hit the update threshold:
1. **#5950 fix: use OpenRouter's actual cost from API response in footer** – Removes Pi's static per-token cost estimates for OpenRouter usage, and uses the real `usage.cost` billing value returned directly from the OpenRouter API, fixing inaccurate pricing displays for custom OpenRouter models.
2. **#5942 fix(coding-agent): add required reason and willRetry to compaction events** – Completes the public extension API by exposing the compaction trigger source values (`manual` / `threshold` / `overflow`) and retry flag that were previously only available via the internal RPC protocol, unblocks new custom context management use cases for extension developers.
3. **#5938 feat(tui): sync d-pi tui components to clients** – Major distributed agent feature: adds `defineTuiComponent` declarations for d-pi agents, so custom TUI renderers are automatically synced to connected Pi clients with no manual component installation required.
4. **#5937 Harden opt-in auto-compaction at between-turn checkpoint** – Ships the widely requested opt-in auto-compaction behavior that runs safely after all tool execution completes and before the next LLM request, preventing context corruption during long sequential tool loops.
5. **#5929 fix: add vLLM context overflow error patterns to OVERFLOW_PATTERNS** – Directly resolves #5930, adding vLLM's unique context length exceeded error formatting to Pi's detection logic, enabling auto-compaction to trigger correctly for all vLLM users.
6. **#5941 fix(coding-agent): add required reason and willRetry to compaction events** – Duplicate staging PR for #5942, closed to avoid redundant test runs, no user-facing changes shipped from this PR.
## 5. Feature Request Trends
The most requested feature directions from the past 24 hours fall into three distinct buckets:
1. **Local LLM ecosystem maturity**: Top priority includes official native provider extensions for Ollama/LLM Studio/vLLM, user-configurable tool output truncation limits for lower-spec local hardware, and per-model thinking level overrides to avoid wasting compute on lightweight models.
2. **TUI productivity upgrades**: Users are asking for proper multi concurrent session switch support, non-intrusive markdown streaming that doesn't force scroll jumps, and improved copy-paste that strips TUI line wrap artifacts by default.
3. **Extension API access expansion**: Community developers are pushing for more internal utility functions (like `navigateTree`) to be exposed to non-command extension contexts to reduce custom extension boilerplate.
## 6. Developer Pain Points
Recurring high-frequency frustrations reported across issues:
1. **Agent loop reliability gaps**: Multiple unaddressed wedge/hang scenarios remain, including streams that don't terminate, post-completion non-exit in print mode, and non-TTY stdin hangs that require manual process kills instead of fast failure.
2. **Self-hosted LLM compatibility gaps**: Hardcoded values optimized for cloud models break local deployments, missing error detection for local provider-specific overflow messages, and no one-click model list sync require extensive manual config.
3. **TUI post-refactor regressions**: Recent term mode updates broke well-established expected behavior, including broken clickable links, forced scroll jumps mid-read, IME preedit erasure, and broken standard shortcuts like double-Escape to open `/tree`.
4. **Extension developer experience friction**: Missing context metadata in public events, inconsistent UI notification rendering, and broken CJS package resolution in the embedded Bun runtime create unnecessary extra work for custom extension authors.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-22
---
## 1. Today's Highlights
This digest covers the release of the new stable v0.18.5 build, a batch of merged critical UX and security patches, and several high-impact in-development feature PRs targeting IDE integration, session reliability, and offline CI testing infrastructure. Over the past 24 hours, 27 issues were updated (16 closed, 11 remaining open) alongside 46 active PRs, with full resolution shipped for multiple long-reported terminal rendering, path traversal, and Windows compatibility bugs. New roadmap-aligned work launched this period includes support for revivable background sub-agents, automated VS Code companion publishing, and zero-AK integration test support for PR pipelines.

## 2. Releases
- **v0.18.5 (Stable)**: [Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.5)
  Core change adds explicit user opt-in for the plan mode prompt to eliminate unintended automatic activation, paired with test suite cleanup to remove duplicate gitdiff untracked count test cases, all shipped from PR #5433.
- **v0.18.3-nightly.20260621.6b2f800ab**: [Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.3-nightly.20260621.6b2f800ab)
  Pre-release build carrying the same plan mode opt-in fix alongside unvetted experimental changes for upcoming path handling and CLI rendering improvements.

## 3. Hot Issues (10 Noteworthy)
1. **#4888: IDEA plugin user question input broken** [Link](https://github.com/QwenLM/qwen-code/issues/4888)
   Open P2 bug affecting JetBrains IDEA users, where user prompt dialogs show no question text and block text input, breaking interactive workflows for Java/Android developer users. 10 total comments confirm widespread impact for IDE plugin adopters.
2. **#5019 Long context task duplicate tool call termination** [Link](https://github.com/QwenLM/qwen-code/issues/5019)
   P2 open bug where long-running sessions trigger repetitive consecutive tool calls that cause the upstream API to terminate the full conversation, blocking completion of large refactoring and multi-file tasks for power users.
3. **#5559 No-AK fake model responses for integration tests** [Link](https://github.com/QwenLM/qwen-code/issues/5559)
   P2 feature request that will enable all PR CI runs to execute E2E tests without valid OpenAI/Qwen API keys, drastically cutting CI costs and eliminating blocked PRs caused by key quota limits.
4. **#5540 Resume completed background sub-agents** [Link](https://github.com/QwenLM/qwen-code/issues/5540)
   Open roadmap-aligned feature request to extend background automation capabilities, letting users revive already finished sub-agent tasks and send follow-up instructions instead of restarting the full task from scratch.
5. **#5552 Bare fastModel triggers unintended Qwen OAuth under OpenAI auth** [Link](https://github.com/QwenLM/qwen-code/issues/5552)
   P2 core bug where users who configured custom OpenAI-compatible endpoints get forced to Qwen's OAuth flow unexpectedly, breaking self-hosted model deployment workflows.
6. **#5219 Integration tests do not run on PR/merge** [Link](https://github.com/QwenLM/qwen-code/issues/5219)
   P2 CI enhancement gap where full integration tests only run during nightly releases, letting regressions slip into the main branch undetected for up to 24 hours.
7. **#5563 MCP `--scope` documentation mismatch** [Link](https://github.com/QwenLM/qwen-code/issues/5563)
   P3 documentation bug that mismarked the `mcp add` command `--scope` default value as `project` when production code uses `user`, causing unexpected permission scope changes for users following official MCP setup guides.
8. **#5512 Workspace image RPC follows symlinks outside workspace** [Link](https://github.com/QwenLM/qwen-code/issues/5512)
   Closed critical P2 security bug that could allow maliciously placed symlinks to read/write files outside the user's declared workspace root, a now fully merged path traversal patch.
9. **#5546 Show current project and active model in TUI** [Link](https://github.com/QwenLM/qwen-code/issues/5546)
   Closed community UX feature request asking to mirror CodeWhale's header that displays active project and model, reducing user confusion when switching between multiple workspaces and model configurations.
10. **#5570 Auto VS Code companion release** [Link](https://github.com/QwenLM/qwen-code/issues/5570)
    Closed feature request that eliminates the manual step for publishing the VS Code plugin after every stable CLI release, cutting maintainer release toil and ensuring IDE plugins stay version-aligned with the core Qwen Code runtime.

## 4. Key PR Progress (10 High-Impact)
1. **#5560 Add fake OpenAI server for no-AK integration tests** [Link](https://github.com/QwenLM/qwen-code/pull/5560)
   Adds a lightweight local OpenAI-compatible mock server that supports streaming/non-streaming responses, tool call mocking, and usage metadata tracking, enabling zero-API-key CI runs as requested in #5559.
2. **#5502 Native voice dictation support** [Link](https://github.com/QwenLM/qwen-code/pull/5502)
   Adds full voice input functionality to the prompt bar, with hold-to-talk, tap-to-toggle modes, and configurable transcription model selection via the `/voice` command as a major new UX feature.
3. **#5557 Artifact tool for interactive HTML publishing** [Link](https://github.com/QwenLM/qwen-code/pull/5557)
   Ships an experimental built-in tool that lets the model generate self-contained HTML interactive pages directly from sessions, saving outputs locally and auto-opening them in the user's default browser.
4. **#5556 Revivable background sub-agents** [Link](https://github.com/QwenLM/qwen-code/pull/5556)
   Implements the requested background sub-agent resume capability from #5540, allowing users to send new messages to completed sub-agent sessions instead of restarting tasks, plus adds auto-TTL cleanup for old sub-agent transcripts.
5. **#5572 Auto-publish VS Code companion after stable releases** [Link](https://github.com/QwenLM/qwen-code/pull/5572)
   Merged fix for #5570 that adds an official release trigger to the VS Code companion publishing workflow, automatically queuing VSIX builds and publication the moment a new stable CLI tag is created.
6

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-22
*Project repo: https://github.com/Hmbown/CodeWhale (formerly legacy `Hmbown/DeepSeek-TUI`)*

---

## 1. Today's Highlights
The official v0.8.63 release marks the full official rebrand of the legacy `deepseek-tui` project to CodeWhale, with the old NPM package fully deprecated and existing v0.8.x users directed to the project’s REBRAND migration guide to avoid broken installations. Core maintainers are now actively staging work for the upcoming v0.8.64 release, including sweeping Rust monolith refactoring, targeted reliability fixes for high-frequency TUI freeze errors, and new user-facing features for custom model and subagent extensibility. Over 20 merged community PRs, dependency updates, and bug fixes were landed in the last 24 hours as part of the v0.8.63 release train.

---

## 2. Releases
### v0.8.63
This is the milestone rebrand release that formalizes "CodeWhale" as the official project name, command name, and NPM package identifier. All future releases will be published exclusively under the `codewhale` NPM package, with the legacy `deepseek-tui` package permanently deprecated and no further updates planned. Existing migrating users are instructed to follow the `docs/REBRAND.md` guide to update their configurations and install paths.

---

## 3. Hot Issues (Top 10 Notable)
| Issue Link | Details & Community Impact |
|------------|-----------------------------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | Highest engagement issue (17 comments): Users report a frequent fatal "Turn stalled - no completion signal received" error in YOLO fully autonomous mode that breaks sessions permanently, with the `continue` command failing to resume operations. This is the top tracked reliability pain point for power users running long unattended workflows. |
| [#3275](https://github.com/Hmbown/CodeWhale/issues/3275) | Critical regression (8 comments): CodeWhale enters unprompted self-questioning, self-executing loops that deviate far from explicit user requirements, skipping confirmation steps to make unapproved changes. The issue is flagged as a high-priority security and UX blocker for v0.8.64. |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | Widespread Windows reliability bug (8 comments): The TUI intermittently freezes completely on Windows 11 due to an unhandled `crossterm` poll logic issue, with no keyboard input or UI updates possible even as the background process remains active. |
| [#3222](https://github.com/Hmbown/CodeWhale/issues/3222) | Model parsing bug (6 comments): Reasoning content blocks for popular Chinese models including MiniMax M3, Qwen, and GLM are incorrectly parsed on OpenAI-compatible endpoints, breaking visibility into native model thinking traces for regional users. |
| [#3289](https://github.com/Hmbown/CodeWhale/issues/3289) | Multi-agent workflow bug (5 comments): The TUI freezes after auto-spawning multiple sub-agents in planning mode, with no public workaround published as of today. |
| [#2608](https://github.com/Hmbown/CodeWhale/issues/2608) | Core developer friction issue (4 comments): The shared config files across the codebase have ballooned to 14,000+ lines total, requiring 15-30 synchronized edits across multiple locations to add a single new LLM provider. Maintainers have prioritized a full refactor of the provider registry to resolve this. |
| [#3144](https://github.com/Hmbown/CodeWhale/issues/3144) | Highly requested new feature (4 comments): A proposed natural language auto-review policy and pre-push review gate, aligned with competing IDE assistant functionality, to reduce accidental unvetted code changes. |
| [#2900](https://github.com/Hmbown/CodeWhale/issues/2900) | Hard-to-reproduce protocol bug (3 comments): The model sometimes outputs raw DSML control characters as plain text for minutes at a time, bloating the session context window and breaking agent control flows irreparably. |
| [#3355](https://github.com/Hmbown/CodeWhale/issues/3355) | Newly filed sandbox limitation issue (2 comments): The default security sandbox blocks Git write operations for users working with Git worktree setups, forcing users to disable the trust safety mode to run normal `git add` and commit operations. |
| [#3367](https://github.com/Hmbown/CodeWhale/issues/3367) | Core roadmap feature: Maintainers propose support for user-defined local subagent personas stored in the project `.codewhale/agents` directory, letting teams define custom roles without waiting for upstream additions to the project. |

---

## 4. Key PR Progress (Top 10 High-Impact Merges)
| PR Link | Feature / Fix Details |
|---------|------------------------|
| [#3347](https://github.com/Hmbown/CodeWhale/pull/3347) | Official v0.8.63 release train integration PR: Merges 52 non-merge commits including subagent budget controls, command extraction refactoring, reliability fixes, and dependency updates to main, marking full release readiness. |
| [#3356](https://github.com/Hmbown/CodeWhale/pull/3356) | Fixes the Git worktree sandbox write permission limitation, detecting linked worktree `.git` pointer files to allow normal Git operations without forcing users to disable the security sandbox. |
| [#3332](https://github.com/Hmbown/CodeWhale/pull/3332) | App server security hardening: Enforces mandatory authentication for all non-loopback binds, preventing accidental unauthenticated public exposure of the CodeWhale API out of the box, with no breaking changes for local-only usage. |
| [#3321](https://github.com/Hmbown/CodeWhale/pull/3321) | New token budget regulator for high fan-out subagent workflows, adding strict enforcement of token and step limits to prevent runaway token consumption and context bloat during distributed agent runs. |
| [#3301](https://github.com/Hmbown/CodeWhale/pull/3301) | New UX feature: Adds a one-click option in shell approval dialogs to persist custom permission rules to the local `permissions.toml` file, eliminating repeated approval prompts for trusted recurring operations. |
| [#3345](https://github.com/Hmbown/CodeWhale/pull/3345) | Refactor that moves inline test suites out of the bloated production config file into a separate dedicated test module, reducing file size and lowering merge conflict risk for future changes. |
| [#3344](https://github.com/Hmbown/CodeWhale/pull/3344) | Adds automatic retry logic for Codex Responses streaming requests, recovering from transient network and recoverable HTTP errors without breaking active sessions. |
| [#3331](https://github.com/Hmbown/CodeWhale/pull/3331) | Fixes proxy environment variable propagation for the JavaScript execution runtime, mirroring system proxy values to the Node.js child process to restore network access for users behind corporate firewalls. |
| [#3302](https://github.com/Hmbown/CodeWhale/pull/3302) | Migration fix for the rebrand, preserving legacy `.deepseek/.onboarded` markers for users migrating from the old `deepseek-tui` package, preventing forced re-onboarding after upgrade. |
| [#3346](https://github.com/Hmbown/CodeWhale/pull/3

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*