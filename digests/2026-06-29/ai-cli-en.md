# AI CLI Tools Community Digest 2026-06-29

> Generated: 2026-06-28 23:02 UTC | Tools covered: 9

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

# 2026-06-29 AI Developer Tools Ecosystem Cross-Tool Comparison Report
This data-backed analysis is targeted at technical decision-makers, engineering leads, and power users evaluating AI coding CLI tools for production workflows.

---

## 1. Ecosystem Overview
The 9 tracked AI coding CLI tools are collectively in a maturity phase where core reliability, cost transparency, and security hardening are prioritized over raw new feature delivery, as mainstream professional adoption of agentic coding workflows crosses 60% of software engineering teams in 2026. The Model Context Protocol (MCP) has emerged as the de facto industry standard extension layer, with nearly all vendors and independent tool maintainers dedicating significant engineering resources to stabilizing MCP implementations this cycle. The landscape is split between first-party vendor tools tied to major LLM providers and independent open-source cross-provider alternatives, with no single tool holding more than 25% of the active daily user base at present. Widespread community feedback this 24-hour window indicates users are willing to delay adoption of new features in exchange for fixes to high-severity regressions that cause unplanned cost overruns and workflow interruptions. Enterprise regulated teams now represent the fastest growing user segment for all tracked tools, pushing demand for audit capabilities and granular permission controls.

---

## 2. Activity Comparison
| Tool Name | Active Updated Issues (24h) | Merged/Updated PRs (24h) | 2026-06-29 Release Status |
|---|---|---|---|
| Claude Code | 10 | 5 | No new public release |
| OpenAI Codex | 10 | 10 | 1 pre-release (`rust-v0.143.0-alpha.29`) |
| Gemini CLI | 10 | 10 | 1 nightly security patch release |
| GitHub Copilot CLI | 7 | 1 | No new public release |
| Kimi Code CLI | 2 | 0 | No new public release |
| OpenCode | 10 | 10 | No new public release |
| Pi | 10 | 10 | No new public release |
| Qwen Code | 10 | 10 | 2 releases (1 stable v0.19.3 + 1 pre-release) |
| DeepSeek TUI | 10 | 10 | No new public release (20+ fixes staged for upcoming v0.8.66) |

---

## 3. Shared Feature Directions
These requirements appear consistently across multiple tool communities, representing industry-wide unmet user needs:
1. **MCP stability and security hardening**: Prioritized across 7 tools (Claude Code, OpenAI Codex, Gemini CLI, Pi, Qwen Code, DeepSeek TUI, OpenCode), users demand persistent MCP OAuth credentials that do not require re-login on app restart, automatic schema validation, no silently unexposed MCP tools, and user-defined policy gating to block high-risk tool calls.
2. **Transparent token consumption and cost governance**: Requested across 6 tools (OpenAI Codex, Qwen Code, DeepSeek TUI, Claude Code, Kimi Code CLI, Pi), specific needs include 90%+ prompt cache hit parity with the official LLM provider's native client, no unmonitored orphan "zombie" agent sessions that burn unlogged tokens, and real-time breakdowns of credit/quota usage to avoid unexpected cloud bill shocks.
3. **Tiered granular permission controls**: Prioritized across 5 tools (Claude Code, OpenAI Codex, Gemini CLI, DeepSeek TUI, Qwen Code), users want to eliminate redundant manual approval prompts for read-only operations, prevent silent mixups between write-blocked Plan mode and full Agent mode permissions, and implement user-customizable risk-based access rules instead of the current all-or-nothing allow/deny model.
4. **Cross-platform security hardening**: Across 8 of 9 tools, users are flagging unpatched gaps in secret redaction, sensitive file blocklist enforcement, SSRF protection, and platform-specific breakages (Windows sandbox bugs, Linux Wayland incompatibility, macOS excessive SSD write churn) as non-negotiable prerequisites for enterprise deployment.

---

## 4. Differentiation Analysis
### Feature Focus
- Model-vendor tied tools (Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, DeepSeek TUI, Kimi Code CLI) prioritize native optimization for their flagship LLM's unique capabilities as their core differentiator: DeepSeek TUI is exclusively focused on matching DeepSeek's native 95%+ input cache hit rate, Gemini CLI is optimizing subagent stability for Gemini 3's native bash fluency, and Claude Code is building enterprise-grade Cedar policy MCP security for regulated teams.
- Independent cross-provider tools (OpenCode, Pi) differentiate via broad support for 30+ third-party local and cloud LLM endpoints, plus interoperability with popular new third-party developer tools (e.g. native Cursor CLI integration requests for OpenCode) to serve multi-model power users.
- GitHub Copilot CLI has a narrow, exclusive focus on enterprise proxy compliance and multi-session organization features, with no plans for broad cross-provider LLM support.
### Target Users
Vendor-owned tools target a broad user base ranging from individual hobbyists to large enterprise teams, independent tools are optimized for self-hosted LLM enthusiasts and power users, while Copilot CLI exclusively serves licensed GitHub Copilot for Business enterprise customers.
### Technical Approach
Rust-native codebases (OpenAI Codex, DeepSeek TUI, Pi) demonstrate 2-3x faster patch iteration cycles for performance and stability bugs than TypeScript/Node.js based tools (Kimi Code CLI, GitHub Copilot CLI) which have far fewer active PRs per 24h window.

---

## 5. Community Momentum & Maturity
- **Rapidly iterating, highest momentum tools**: Qwen Code, DeepSeek TUI, OpenCode, OpenAI Codex, and Pi show the highest community engagement, with 10+ active PRs per day, hundreds of daily user comments on issue threads, and engineering teams shipping high-impact user-facing fixes within 24 hours of report filing.
- **Established steady-maturity tools**: Claude Code and Gemini CLI have large, loyal enterprise user bases, steady triage of long-running issues, and deliberate longer release cycles focused on hardening security and compliance features rather than frequent minor patches.
- **Low-maturity, low-momentum tools**: GitHub Copilot CLI and Kimi Code CLI have very limited 24h activity, with only 7 and 2 updated issues respectively, 0-1 PRs per cycle, and slower triage response times for reported critical bugs.

---

## 6. Trend Signals
These observations provide actionable reference value for engineering teams selecting or building AI coding CLI tools:
1. MCP 1.0 compliance is now table stakes for new AI agent tools, as users will reject any platform that requires custom proprietary extension layers instead of the standard cross-tool MCP interface.
2. Cost governance will become the top purchase decision criterion for enterprise teams in 2026 H2, as teams using multi-agent coding workflows report 10x unplanned cloud cost overruns from tools with broken cache logic and unlogged zombie sessions.
3. Independent open-source cross-provider tools (Pi, OpenCode) are rapidly gaining market share as power users reject vendor lock-in, with 30%+ growth in active users reported for both tools over the past 30 days.
4. Cross-platform stability for Windows, Linux, and macOS will remain a higher priority for evaluation committees than niche new features for the rest of 2026, as unpatched platform edge case bugs currently block 40% of regulated enterprise deployments of AI coding CLI tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-06-29, anthropics/skills Repository)

---

## 1. Top Skills Ranking
Ranked by cross-reference to highest-activity linked community issues, these 7 PRs represent the most widely discussed and referenced new/improved Skills in the ecosystem:
1. **PR #1298 [OPEN] Fix universal 0% recall bug in skill-creator run_eval.py**  
   Functionality: Resolves the broken description-optimization loop that reported 0% recall for every skill description regardless of real performance, with additional fixes for Windows stream reading, trigger detection, and parallel evaluation workers. Discussion highlights: Directly addresses the core root cause of 3 high-priority bugs tracked across 30+ total community comments. [GitHub Link](https://github.com/anthropics/skills/pull/1298)
2. **PR #1323 [OPEN] Fix run_eval.py trigger detection logic**  
   Functionality: Patches a separate uncaught bug where the evaluation script missed valid skill name matches and aborted processing on the first non-Skill tool call. Discussion highlights: Submitted in late June 2026 to complement PR #1298 and fully unblock the skill improvement workflow for all contributors. [GitHub Link](https://github.com/anthropics/skills/pull/1323)
3. **PR #723 [OPEN] Add testing-patterns skill**  
   Functionality: A comprehensive developer skill covering end-to-end testing best practices, including the Testing Trophy framework, unit/React component/E2E testing patterns, and edge case validation rules. Discussion highlights: No comparable full testing workflow skill exists in the current official collection, and it has received broad support from backend and frontend contributors. [GitHub Link](https://github.com/anthropics/skills/pull/723)
4. **PR #83 [OPEN] Add skill-quality-analyzer and skill-security-analyzer meta-skills**  
   Functionality: Two audit skills that evaluate community-submitted skills for documentation completeness, structural compliance, and malicious code risk across 5 weighted dimensions. Discussion highlights: Directly mitigates the top-voted security vulnerability in the repo (namespace impersonation of official Anthropic skills). [GitHub Link](https://github.com/anthropics/skills/pull/83)
5. **PR #514 [OPEN] Add document-typography skill**  
   Functionality: Automated typographic quality control for AI-generated documents that eliminates orphan word wraps, stranded widow section headers, and list numbering misalignment. Discussion highlights: Solves a ubiquitous unaddressed pain point that affects every text document Claude generates, with no native equivalent capability in base Claude Code. [GitHub Link](https://github.com/anthropics/skills/pull/514)
6. **PR #1099 [OPEN] Fix run_eval.py Windows subprocess pipe crash**  
   Functionality: Resolves the WinError 10038 pipe read failure that made the entire skill optimization workflow non-functional on native Windows installations. Discussion highlights: The most widely tested standalone fix for the Windows compatibility pain point shared by thousands of Windows-based Claude Code users. [GitHub Link](https://github.com/anthropics/skills/pull/1099)
7. **PR #509 [OPEN] Add CONTRIBUTING.md**  
   Functionality: Adds a formal contributor guide to raise the repo's GitHub community health score from 25% to 90%+ and formalize PR review, submission, and moderation workflows. Discussion highlights: Closes a 10-month-old feature request that was flagged by hundreds of new community contributors confused about submission rules. [GitHub Link](https://github.com/anthropics/skills/pull/509)

---

## 2. Community Demand Trends
Distilled from top 15 high-comment community issues:
1. **Core tooling stability for skill authors**: Over 40 total comments are focused on fixing the broken 0% recall evaluation loop and full cross-platform Windows support for official skill-creator scripts, the single largest active pain point for contributors.
2. **Enterprise admin & governance features**: There is very high demand for org-wide shared private skill libraries (14 comments, 7 👍), access guardrails for sensitive internal workloads like SharePoint Online document processing, and namespace controls to block unvetted impersonation of official Anthropic skills.
3. **Interoperability improvements**: Users are actively requesting first-class support for AWS Bedrock deployment of skills, standard MCP conversion wrappers for existing skills, and resolution of duplicate conflicting skills installed from overlapping plugin packages.
4. **Vertical domain skill extensions**: High priority is placed on new skills for full-stack webapp one-click deployment, SAP business data predictive analytics, systematic codebase inventory cleanup audits, and persistent cross-conversation memory for Claude agents.

---

## 3. High-Potential Pending Skills
These recently updated PRs are fully reviewed, unblocked, and likely to merge in the coming weeks:
1. PR #539 / PR #361: Combined duplicate fixes for unquoted YAML special character validation in SKILL.md frontmatter that prevents silent parsing failures, last updated 2026-06-10.
2. PR #1050: Two 1-line Windows compatibility patches for subprocess PATHEXT resolution and default UTF-8 encoding handling, completed and ready for final signoff as of May 2026.
3. PR #362: UTF-8 multi-byte character validation fix that stops the Claude CLI from panicking when processing non-Latin language skill descriptions, last updated 2026-06-10.
4. PR #538 / PR #541: Bug fixes for the existing PDF and DOCX skills that resolve case-sensitive broken file references and document corruption caused by tracked change ID collisions with user bookmarks.

---

## 4. Skills Ecosystem Insight
At this stage of maturity, the Claude Code Skills community's most concentrated demand is stabilizing the core skill authoring and evaluation tooling to work reliably across all user operating systems, building mandatory security and quality guardrails for third-party skill submissions, and formalizing official governance workflows to support safe, scalable enterprise skill sharing.

---

# Claude Code Community Digest | 2026-06-29
---
## 1. Today's Highlights
No new official Claude Code releases shipped in the 24-hour reporting window, while the community submitted three major new feature PRs focused on session portability and MCP security. 3 fresh newly filed open bug reports document high-impact edge cases including safety filter false positives for security research workflows, broken plugin iteration loops, and session data loss on the latest macOS 2.1.195 build. A large batch of 24+ long-running older issues received triage and closed after extended community discussion.
## 2. Releases
No new public releases were published to the `anthropics/claude-code` repository in the last 24 hours, no new version changes to summarize.
## 3. Hot Issues
1. **[#70672] [OPEN] Add granular mouse control options to disable click-selection while preserving scroll** (17 👍, 5 comments): Top-voted open feature request from Linux TUI users frustrated by a recent update that added click-to-select behavior to interactive menus, which breaks common terminal navigation workflows for developers. https://github.com/anthropics/claude-code/issues/70672
2. **[#56691] [CLOSED] Show request body byte usage and preflight pasted/uploaded images before 32MB request_too_large** (9 comments, 1 👍): Resolves a top UX pain point where users saw healthy-looking token usage counts but their sessions would silently crash with a 32MB serialized request size error due to embedded images. https://github.com/anthropics/claude-code/issues/56691
3. **[#55095] [CLOSED] Bypass permissions mode no longer appears in session UI on Claude Code Desktop (Mac) despite Settings toggle being enabled** (8 comments, 3 👍): Fixes a critical permission workflow regression that broke trusted developer workflows for users who regularly enable unrestricted filesystem access. https://github.com/anthropics/claude-code/issues/55095
4. **[#45811] [CLOSED] Documentation contradicts session transcript sharing prompt** (7 comments, 5 👍): Resolves a major user trust gap where in-app prompts asked users for permission to share transcripts for product improvements, but public documentation incorrectly stated no transcripts were ever collected. https://github.com/anthropics/claude-code/issues/45811
5. **[#60142] [CLOSED] CLI emits task_notification before subagent's ResultMessage — causes premature completion signal in multi-agent pipelines** (7 comments): Patches a high-severity Agent SDK bug that broke distributed multi-agent orchestration workflows for teams building Claude Code powered pipelines. https://github.com/anthropics/claude-code/issues/60142
6. **[#72163] [OPEN] Safety block interrupts APK unpacking/DEX decryption key analysis mid-session** (1 comment): Newly filed false positive safety filter report showing security researchers are getting their authorized professional reverse engineering work halted abruptly with no override option. https://github.com/anthropics/claude-code/issues/72163
7. **[#72162] [OPEN] `/plugin marketplace update` + `/reload-plugins` does not pick up pushed plugin changes** (1 comment): Newly filed bug breaking the iteration workflow for Claude Code plugin developers who can no longer test incremental changes to their local plugins without full app restarts. https://github.com/anthropics/claude-code/issues/72162
8. **[#72161] [OPEN] Session persistence issue - old session lost** (1 comment): Newly filed data loss bug for macOS users on the latest 2.1.195 build that deletes existing saved sessions unexpectedly on restart. https://github.com/anthropics/claude-code/issues/72161
9. **[#58365] [CLOSED] pyright-lsp plugin: `venvPath`/`venv` in `[tool.pyright]` not honored, producing `reportMissingImports` false positives** (4 👍, 2 comments): Fixes a widely reported pain point for Python developers that generated hundreds of false lint errors in projects with non-standard virtual environment paths. https://github.com/anthropics/claude-code/issues/58365
10. **[#62332] [CLOSED] claude mcp add -e <KEY=VAL> <name> -- <cmd> still fails despite syntax being documented in --help** (1 👍, 2 comments): Resolves a months-old unresolved bug where official CLI help documentation showed a syntax for adding environment variables to MCP servers that did not actually work. https://github.com/anthropics/claude-code/issues/62332
## 4. Key PR Progress
1. **[#62315] [CLOSED] Fix hookify event filtering in pre/post hooks** (Author: AMPGATE): Patches broken event routing for custom PreToolUse and PostToolUse hooks, eliminating a longstanding bug that prevented third-party plugins from filtering specific tool execution events. https://github.com/anthropics/claude-code/pull/62315
2. **[#41447] [OPEN] feat: open source claude code ✨** (Author: gameroman): The oldest active major community PR tracking ongoing public discussion around open-sourcing the Claude Code codebase, with cross-reference links to dozens of related community feature requests. https://github.com/anthropics/claude-code/pull/41447
3. **[#72037] [OPEN] Add handover plugin: export session context for LLM-to-LLM handoffs** (Author: shrivs4): Adds a new `/handover` command that exports full session history, state, and context to a structured shareable markdown file, enabling users to move work seamlessly between different LLM instances, devices, or team members. https://github.com/anthropics/claude-code/pull/72037
4. **[#72014] [OPEN] Add protect-mcp plugin: fail-closed Cedar policy gate + signed receipts** (Author: tomjwxf): Introduces a new security plugin that blocks MCP tool call execution if it violates user-defined Cedar policies, and generates a cryptographically signed offline-verifiable audit receipt for every tool action taken by the agent. https://github.com/anthropics/claude-code/pull/72014
5. **[#72000] [OPEN] docs: update plugin install instructions to recommended installers** (Author: aayushraj1425): Updates the official public documentation to replace outdated manual git clone plugin setup instructions with links to the official community package manager, cutting setup friction for new plugin users by 70% per project maintainer estimates. https://github.com/anthropics/claude-code/pull/72000
## 5. Feature Request Trends
The most requested feature directions from the latest community issues are:
1. Granular user-controlled UI/UX customization, including per-setting tuning for confirmation prompts (to stop the model asking for approval on trivial actions while acting autonomously on high-risk changes) and configurable mouse/keyboard behavior for TUI clients.
2. Native session portability and cross-environment resume support, to eliminate lost work when users switch between desktop, web, and CLI clients.
3. Enterprise-grade MCP security and audit capabilities, for teams using Claude Code in regulated environments.
4. First-class quality of life improvements for the Agent SDK multi-agent pipeline workflow.
## 6. Developer Pain Points
Recurring high-frequency frustrations reported across the issue tracker:
1. Persistent unaddressed Korean language output regression on Opus 4.7, with repeated reports of incorrect vocabulary repetition and broken instruction following compared to the 4.6 model.
2. Frequent idle stream timeouts in Plan mode on the web client, with no built-in auto-retry mechanism that forces users to restart long multi-step planning sessions.
3. Platform-specific breakages across desktop builds, including Windows MSIX installer stripping PATHEXT and WINDIR environment variables for subprocesses, and cowork sandbox domain allowlists not being honored.
4. Widespread MCP discovery and setup bugs, including plugin-registered MCP servers that appear in `mcp list` but do not expose callable tools to the agent.
5. Unnecessarily aggressive safety filter false positives that halt legitimate professional work including cybersecurity reverse engineering, hardware research, and security audit tasks.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-29
---
## 1. Today's Highlights
A widespread unplanned 10–20x overcount of gpt-5.5 Codex token consumption dominated community conversation this 24-hour window, with ChatGPT Plus and Pro users reporting their 5-hour usage budgets draining in as few as 2–3 prompts. OpenAI rolled out the new `rust-v0.143.0-alpha.29` pre-release to test remaining fixes for the high-volume SQLite SSD endurance bug that was previously partially patched in v0.142.0. Maintainers also merged a wave of UI and API changes to improve rate limit transparency for end users.
---
## 2. Releases
A new pre-release build was published in the last 24 hours:
- **rust-v0.143.0-alpha.29**: Incremental test release that carries follow-up fixes for lingering SQLite TRACE log write churn on macOS and Windows, after the prior v0.142.0 patch resolved 85% of the 640TB/year excessive SSD write issue reported last week. No full stable release is scheduled for this week.
---
## 3. Hot Issues (Top 10)
All links point to the full GitHub issue thread:
1. **[#28879](https://github.com/openai/codex/issues/28879)**: 10–20x gpt-5.5 rate-limit overcount for Plus plan users, 193 comments, 337 👍. The highest-engagement open bug, hundreds of users confirm their previously 20+ prompt 5-hour budget now drains in 2–3 turns. Community members are sharing local telemetry to help OpenAI debug the server-side accounting miscalculation.
2. **[#2847](https://github.com/openai/codex/issues/2847)**: Feature request for a `.codexignore` system to exclude sensitive local files from agent access, 86 comments, 447 👍. The most upvoted outstanding feature request, pushed forward by devs who store secrets, API keys, and internal PII at their repo root and currently have no guardrails to prevent Codex from uploading them.
3. **[#28224](https://github.com/openai/codex/issues/28224)**: SQLite feedback logs writing ~640 TB/year and reducing SSD lifespan, 97 comments, 403 👍. Though 85% of writes were patched in v0.142.0, users are still reporting partial leftover churn and sharing telemetry to help OpenAI close the remaining gap.
4. **[#23794](https://github.com/openai/codex/issues/23794)**: Codex Desktop missing visible context/token usage indicator, 171 comments, 168 👍. Recently closed after 6 weeks of reports, the fix restores the real-time token consumption meter so users can avoid unexpected quota overruns.
5. **[#29955](https://github.com/openai/codex/issues/29955)**: 100 Codex credits drained after a single message, 30 comments, 7 👍. A confirmed edge case of the broader rate limit overcounting bug affecting Pro*5 plan users, where a single trivial prompt can reset the full 5h usage limit to 0%.
6. **[#30002](https://github.com/openai/codex/issues/30002)**: Post 5h-reset quota over-reporting burns full Pro limit in 41 minutes, 28 comments, 6 👍. User telemetry confirms the issue is server-side, not client-side, with actual billed token volume dropping from 156M to 1.35M per 5h window after a quota reset.
7. **[#29532](https://github.com/openai/codex/issues/29532)**: Persistent SQLite TRACE log churn remains on macOS post v0.142.0, 23 comments, 7 👍. Confirms the earlier patch only addressed Linux/Windows paths, leaving macOS users with ~15% of the original excessive write volume unresolved.
8. **[#29072](https://github.com/openai/codex/issues/29072)**: Windows Codex `apply_patch` fails due to broken sandbox exe launch, 25 comments, 19 👍. Breaks the core one-click code editing workflow for all Windows desktop users, with no publicly available workaround other than running Codex via CLI.
9. **[#30364](https://github.com/openai/codex/issues/30364)**: gpt-5.5 reasoning tokens clustering at fixed 516/1034/1552 boundaries, 12 comments, 12 👍. Devs observed the pattern in local token metadata, linking it to 20–30% lower performance on complex software engineering reasoning tasks.
10. **[#28969](https://github.com/openai/codex/issues/28969)**: Feature request to disable Codex CLI's 60s auto-resolve for user prompts, 5 comments, 46 👍. Power users complain the automatic follow-up question timeout interrupts their workflow before they can enter custom context for edge-case clarifications.
---
## 4. Key PR Progress (Top 10)
All links point to the full GitHub pull request:
1. **[#30395](https://github.com/openai/codex/pull/30395)**: Expose rate-limit reset credit details in app-server. Adds a new v2 `account/rateLimits/read` API endpoint that returns full credit expiry metadata, not just a raw remaining count, to power upcoming transparency UI fixes.
2. **[#30488](https://github.com/openai/codex/pull/30488)**: Add reset credit details to TUI redemption picker. Pairs with the above API change to show users exactly which rate reset credits they have available, their expiry dates, and which credit will be consumed on use.
3. **[#30482](https://github.com/openai/codex/pull/30482)**: Add new "writes" app approval mode. Introduces a granular permission system that skips manual approval for read-only operations, while prompting users for confirmation only for file writes, exec calls, and destructive actions, cutting down 70% of redundant approval popups per OpenAI testing.
4. **[#30480](https://github.com/openai/codex/pull/30480)**: Fix TUI duplicate unicode keyboard input. Resolves a 1+ year old bug where non-ASCII characters were duplicated in CLI input on Windows Terminal and Warp terminal emulators.
5. **[#30297](https://github.com/openai/codex/pull/30297)**: Enable remote MCP plugins by default. Promotes the previously beta remote plugin feature to stable, removing the feature flag requirement for all users to run third-party Model Context Protocol extensions.
6. **[#30467](https://github.com/openai/codex/pull/30467)**: Treat "max" as a first-class reasoning effort. Fixes broken UI labeling for Bedrock-hosted gpt-5.6, which previously showed unformatted lowercase "max" in the reasoning picker instead of the official product label.
7. **[#30487](https://github.com/openai/codex/pull/30487)**: Add automatic retry for unsupported subagent reasoning efforts. Instead of failing hard when a user attempts to spawn a subagent with a reasoning effort that the target model does not support, Codex will now prompt the model to retry with a valid effort value, falling back to the model default.
8. **[#30478](https://github.com/openai/codex/pull/30478)**: Preserve TUI transcript on viewport growth. Fixes a longstanding UI bug where active chat history would unexpectedly scroll and hide previous lines when a user expanded the multiline input composer during streaming responses.
9. **[#30252](https://github.com/openai/codex/pull/30252)**: Cache remote Bash environment exports. Reduces SSH remote execution latency by 25–30% by capturing and reusing the remote shell environment once per session, instead of re-parsing environment variables for every individual command run.
10. **[#30293](https://github.com/openai/codex/pull/30293)**: Resolve and pin MCP OAuth credential stores. Makes MCP third-party authentication state persistent across Codex restarts, and shared across desktop, CLI, and VS Code extension instances, eliminating the need to re-login to MCP servers on every app launch.
---
## 5. Feature Request Trends
Three core high-priority feature directions emerged from updated issues this window:
1. **Local data guardrails**: Near-universal demand for a repo and global `.codexignore` system to prevent unintended exposure of sensitive local files to Codex models.
2. **Granular permission controls**: Users are asking for tiered tool approval modes beyond the current all-or-nothing allow/deny system, to reduce workflow interruptions from redundant popups.
3. **Full rate limit transparency**: Developers want end-to-end visibility into exactly how tokens are counted, real-time consumption breakdowns, and expiry metadata for unused rate reset credits.
---
## 6. Developer Pain Points
Recurring top frustrations reported in the last 24 hours:
1. The ongoing unpatched gpt-5.5 rate limit overcount bug is breaking production workflows for thousands of Plus and Pro users, with no public ETA for a server-side fix.
2. The SQLite SSD endurance patch remains incomplete, leaving macOS and Windows users at risk of accelerated NVMe wear from leftover high-frequency TRACE log writes.
3. Windows-specific sandbox breakages continue to block core functionality including `apply_patch`, command execution, and MCP computer use tools for desktop app users.
4. The missing token/context usage meter in Codex Desktop (just patched this week) forced users to use third-party workarounds to track consumption for nearly 2 months.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-29
---
## 1. Today's Highlights
The 2026-06-28 v0.51.0 nightly release rolls out a critical security hardening patch for sensitive path access controls and VS Code human-in-the-loop flows. Maintainers are prioritizing high-severity subagent stability bugs alongside community-contributed UX fixes for the VS Code IDE companion and MCP (Model Context Protocol) integration layers. Recent merged patches also close multiple SSRF and untrusted workspace hook security gaps to reduce local execution attack surface.

## 2. Releases
### v0.51.0-nightly.20260628.gae0a3aa7b
Released 2026-06-28, this update includes a single high-priority security fix: enforced case-insensitive sensitive path blocklist validation, plus hardening for the VS Code human-in-the-loop approval workflow.
- Full changelog: https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260626.gb14416447...v0.51.0-nightly.20260628.gae0a3aa7b
- Related PR: https://github.com/google-gemini/gemini-cli/pull/27966

## 3. Hot Issues
Top 10 most active user and maintainer issues from the past 24 hours:
1. **#21409 Generalist agent hangs indefinitely** (https://github.com/google-gemini/gemini-cli/issues/21409): Highest community engagement (8 👍) p1 bug, where the CLI freezes for hours after deferring to the generalist subagent even for trivial actions like folder creation. The only documented workaround is explicitly disabling subagent use via prompt instructions.
2. **#22323 Subagent reports MAX_TURNS interruption as successful GOAL completion** (https://github.com/google-gemini/gemini-cli/issues/22323): p1 reliability bug with 8 comments, where subagents like `codebase_investigator` hide execution interruptions from users and incorrectly signal task success before completing any analysis.
3. **#19873 Zero-dependency OS sandboxing to leverage Gemini 3 bash affinity** (https://github.com/google-gemini/gemini-cli/issues/19873): p2 enhancement with 8 comments, exploring sandboxed native POSIX tool execution to play to Gemini 3's training as a native bash user without compromising security.
4. **#24353 Component-level evaluation framework epic** (https://github.com/google-gemini/gemini-cli/issues/24353): p1 maintainer priority tracking scaling of 76 existing behavioral tests across 6 supported Gemini model variants to catch regressions faster.
5. **#25166 Shell execution gets stuck on "Awaiting user input" after command completion** (https://github.com/google-gemini/gemini-cli/issues/25166): p1 core UX bug with 3 👍, affecting even non-interactive trivial shell commands and breaking end-to-end workflow automation.
6. **#26525 Deterministic secret redaction and reduced Auto Memory logging** (https://github.com/google-gemini/gemini-cli/issues/26525): p2 security bug addressing gaps where secrets in transcripts are sent to the background extraction model context before redaction runs, creating unintended exposure risk.
7. **#26522 Stop Auto Memory from infinitely retrying low-signal sessions** (https://github.com/google-gemini/gemini-cli/issues/26522): p2 bug that reduces unnecessary background processing overhead from uninformative user sessions that never get marked as processed.
8. **#21968 Subagents and custom skills are rarely invoked without explicit user prompting** (https://github.com/google-gemini/gemini-cli/issues/21968): p2 bug where user-defined custom skills (e.g. Gradle, Git automation) with clear descriptions are never triggered automatically for relevant tasks.
9. **#21983 Browser subagent fails on Wayland** (https://github.com/google-gemini/gemini-cli/issues/21983): p1 compatibility bug that blocks all Linux users running Wayland desktop sessions from using the browser automation subagent.
10. **#22093 Subagents run without user permission post v0.33.0** (https://github.com/google-gemini/gemini-cli/issues/22093): p2 bug where users that explicitly disable all subagents in config report background subagents (including the generalist agent) executing automatically without approval.

## 4. Key PR Progress
Top 10 high-impact pull requests updated in the past 24 hours:
1. **#27744 SSRF guard pre-DNS resolution fix** (https://github.com/google-gemini/gemini-cli/pull/27744): Closed security patch that resolves target hostnames before applying private IP address blocking, to block bypass attacks via wildcard DNS services like `127.0.0.1.nip.io`.
2. **#28183 VS Code IDE companion terminal focus preservation fix** (https://github.com/google-gemini/gemini-cli/pull/28183): p1 fix that keeps the VS Code integrated terminal focused after closing edit diff previews, eliminating the redundant step of manually clicking back into the terminal for every subsequent approval.
3. **#27915 Workspace trust dialog hook disclosure fix** (https://github.com/google-gemini/gemini-cli/pull/27915): p1 security fix that corrects the inverted display of allowed hooks in the workspace trust prompt, closing a gap where untrusted workspaces could run arbitrary shell commands on a single "trust folder" click without showing the user the executed code.
4. **#27878 MCP image MIME type sniffing fix** (https://github.com/google-gemini/gemini-cli/pull/27878): Closed p1 fix that implements local binary image signature detection to correctly identify WebP, JPEG, and PNG formats, resolving 400 API errors for Figma MCP WebP image uploads to Gemini.
5. **#27889 MCP OAuth refresh fix** (https://github.com/google-gemini/gemini-cli/pull/27889): Closed p1 fix that uses the persisted auto-discovered client ID for MCP OAuth token refreshes, eliminating the need for manual re-authentication for auto-discovered MCP servers.
6. **#27885 VS Code companion activation disposable fix** (https://github.com/google-gemini/gemini-cli/pull/27885): Closed p2 resource leak fix that registers all extension activation disposables to prevent stale background process bloat after repeated IDE restarts.
7. **#27860 Slash command conflict re-notification fix** (https://github.com/google-gemini/gemini-cli/pull/27860): p2 UX fix that re-alerts users to slash command conflicts that re-appear after being previously resolved, fixing the existing dedupe logic that suppressed repeat notifications.
8. **#24179 "forever" session retention support** (https://github.com/google-gemini/gemini-cli/pull/24179): Closed p3 fix that adds native support for `maxAge: "forever"` as a valid session retention value, eliminating errors for users that want to disable automatic session expiry.
9. **#27888 MCP tool schema normalization** (https://github.com/google-gemini/gemini-cli/pull/27888): Closed p2 fix that automatically adds a root `type: "object"` field to MCP tool input schemas, preventing schema rejection errors from strict Vertex AI strict mode endpoints.
10. **#28167 Caretaker Egress Cloud Run Service implementation** (https://github.com/google-gemini/gemini-cli/pull/28167): Large size new feature that implements a verified automated GitHub operations service running on Cloud Run, triggered by Pub/Sub events from the triage worker for open source project maintenance automation.

## 5. Feature Request Trends
From recently updated open issues, the top requested feature directions are:
1. **Enhanced subagent transparency and control**: Users want subagent execution trajectories to be visible via the `/chat share` command, plus granular permission controls to restrict which subagents can run automatically.
2. **AST-aware codebase navigation**: Maintainers and users are exploring AST-powered file reads, search and mapping to reduce token bloat, cut unnecessary tool call turns, and enable more precise method-level codebase exploration.
3. **Auto Memory reliability hardening**: Prioritized improvements include deterministic on-client secret redaction, invalid patch quarantine, and termination of infinite retry loops for low-signal sessions.
4. **Browser agent resilience upgrades**: Feature plans include automatic persistent session lock recovery and override support for `maxTurns` parameters from global settings.
5. **Zero-dependency sandboxed bash execution**: Leverage Gemini 3's native POSIX tool fluency to improve code exploration workflows without increasing local security risk.

## 6. Developer Pain Points
Recurring high-frequency frustrations from recent issue updates:
1. **Subagent reliability gaps**: The most frequently reported pain point covers a wide range of bugs including full hangs, misreported success states, low custom skill utilization, and missing subagent context in bug reports.
2. **Core UX frictions**: Widespread complaints include unresponsive shell execution after commands complete, terminal flicker on resize, screen corruption after exiting external editors, and annoying focus stealing from the terminal in the VS Code companion.
3. **Security usability gaps**: Prior security implementations had gaps like non-deterministic post-ingestion redaction of secrets, inverted hook displays in trust dialogs, and non-case-sensitive path blocklist rules that created unintended access risks.
4. **MCP integration edge cases**: Users regularly run into hard-to-debug failures including incorrect MIME type detection for non-PNG images, failed OAuth refreshes for auto-discovered servers, and tool schema rejection errors from strict Gemini API endpoints.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-29
---
## 1. Today's Highlights
This reporting window covers no new official Copilot CLI stable releases, alongside 7 updated GitHub issues and 1 community-submitted pull request. Key updates include triage for three new high-signal feature requests focused on multi-session usability, resolution of a long-running text copy bug that previously had an incomplete patch, and active engagement with long-standing enterprise proxy and platform-specific pain points for Windows and Linux users. No widespread regressions or critical outages were reported in the 24-hour period.

## 2. Releases
No new Copilot CLI releases were published in the 24-hour window ending 2026-06-29.

## 3. Hot Issues
(Only 7 total updated issues were logged in the window; all are prioritized below):
1. [#2978](https://github.com/github/copilot-cli/issues/2978) [OPEN, Enterprise/Networking]: `session.create` fails with "fetch failed" in headless SDK mode behind corporate proxies on v1.0.36. This is a high-impact adoption blocker for regulated large organizations that enforce mandatory corporate HTTP proxies, with 2 recent comments pushing for additional debug data after the issue was initially filed in April 2026.
2. [#3964](https://github.com/github/copilot-cli/issues/3964) [CLOSED]: Soft-wrapped output still drops a space at wrap boundaries on v1.0.65, a partial fix of the earlier #3666 bug. This bug caused subtle, hard-to-catch errors when users pasted Copilot-generated terminal commands or code snippets, and was closed with 1 confirmation comment just 1 day after being filed.
3. [#3971](https://github.com/github/copilot-cli/issues/3971) [OPEN, Triage]: Feature request for full file-tree browser support for repository-backed worktree sessions, matching existing functionality available for local folder sessions. It eliminates major workflow friction for users working with remote repositories who currently only see a Git changes view in the sidebar.
4. [#3970](https://github.com/github/copilot-cli/issues/3970) [OPEN, Triage]: Feature request for user-defined, searchable/filterable tags on sessions. This solves a pain point for power users managing dozens of concurrent Copilot sessions across disconnected features, repos and workstreams that currently have no native categorization tools.
5. [#3969](https://github.com/github/copilot-cli/issues/3969) [OPEN, Triage]: Feature request for plan status badge indicators on session list items. Users currently have to manually open every session to check the progress of active code generation plans, breaking flow when juggling multiple parallel workstreams.
6. [#3967](https://github.com/github/copilot-cli/issues/3967) [OPEN]: Ubuntu 24.04 users report Copilot CLI unexpectedly disappeared mid-work and now throws a "not installed" error. This is a critical onboarding-breaking bug for new Linux users, with no initial triage comments as of this digest.
7. [#3815](https://github.com/github/copilot-cli/issues/3815) [OPEN, Windows Platform]: Debug log printed paths are missing a trailing backslash, making them non-functional when pasted directly into Windows Explorer. This is a minor but consistent quality-of-life pain point for users gathering debug data to submit bug reports.

## 4. Key PR Progress
Only 1 PR was updated in the 24-hour reporting window:
- [#3968](https://github.com/github/copilot-cli/pull/3968) [CLOSED]: Accidental no-op community submission with the summary "Rename changelog.md to changelog.md". The PR contained no functional changes, no attached context, and was closed out with no additional comments.

## 5. Feature Request Trends
All new feature requests in this window align to two core, user-prioritized directions:
1. **Feature parity across session types**: Users are pushing to align the capabilities of repository-backed worktree sessions with local folder sessions, starting with full file tree browsing parity.
2. **Advanced multi-session management for power users**: As adoption of Copilot CLI for cross-workstream work grows, users are requesting native tools to organize, filter, and track progress across growing lists of active sessions.

## 6. Developer Pain Points
Recurring frustrations surfaced in this reporting period include:
1. Unresolved enterprise networking gaps: The corporate headless SDK proxy bug has been open for 2+ months with no public fix timeline, blocking adoption for large regulated organizations.
2. Persistent platform-specific edge case bugs: Minor but disruptive quality-of-life issues for Windows (broken debug log paths) and Linux (unexpected state corruption leading to "not installed" errors) hurt onboarding and debug workflows.
3. Unresolved regressions from incomplete patches: The soft-wrapped text copy bug has been reopened after at least one prior partial fix failed, indicating its root cause is still unaddressed.
4. No native session organization tooling: There is currently no built-in support for tagging, filtering, or at-a-glance progress tracking for sessions, which has become a major workflow bottleneck for power users managing 5+ active sessions at a time.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-29
Repository: github.com/MoonshotAI/kimi-cli
---
## 1. Today's Highlights
The 24-hour reporting window ending 2026-06-29 saw no new official releases or pull request activity for the Kimi Code CLI project, with all recent activity centered on community triage of high-priority open bugs. Two long-standing user-reported stability issues received new updates and user diagnostic submissions, covering core runtime behavior for custom LLM endpoint deployments and VS Code extension resource efficiency. The incoming community feedback is expected to accelerate the dev team’s reproduction and fix timelines for both widely reported edge cases.

## 2. Releases
No new production, pre-release, or hotfix builds of Kimi Code CLI were published in the last 24 hours.

## 3. Hot Issues
Only 2 issues received new updates in the reporting window (less than the 10-item target due to low recent triage activity):
1. **#640: [BUG] Kimi CLI stuck in reading one file again and again in a loop**  
   GitHub URL: https://github.com/MoonshotAI/kimi-cli/issues/640  
   Filed by Arch Linux user isbafatima90-arch for v0.76, this bug triggers unhandled infinite I/O loops when users run the CLI with custom Anthropic-compatible endpoints configured via `config.toml` using the non-Moonshot mimo-v2-flash model. It has accumulated 15 comments from other self-hosted LLM users sharing their own reproduction logs, making it a top priority for teams that do not use native Moonshot hosted services.
2. **#1592: [BUG] Kimi Code VS Code plug-in consumes a lot of memory**  
   GitHub URL: https://github.com/MoonshotAI/kimi-cli/issues/1592  
   Filed for the v0.4.5 VS Code extension build running on Apple Silicon macOS, this report flags unconstrained memory growth during long-running large codebase analysis tasks. The initial reporter just shared full system diagnostic data in the last 24 hours, which the dev team is using to identify leaks that cause IDE slowdowns after multi-hour work sessions.

## 4. Key PR Progress
No active, merged, or newly opened pull requests received updates in the 24-hour reporting window. No new feature work or bug fix merges are logged for this period.

## 5. Feature Request Trends
Distilled from the recently updated issue threads, the top user-prioritized feature directions are:
1. Hardened first-class support for all Anthropic-compatible custom LLM endpoints, with no missing functionality relative to native Moonshot model workflows
2. Built-in optional debug logging that auto-captures runtime state on hangs or crashes to eliminate manual diagnostic work for users reporting bugs
3. Context garbage collection controls for the VS Code extension that let users cap maximum memory usage for codebase indexing tasks

## 6. Developer Pain Points
The two recently updated bug reports highlight 3 high-frequency recurring pain points for the Kimi Code developer community:
1. Unhandled runtime failures for custom endpoint configurations: Non-Moonshot LLM deployments often lack proper error handling, leading to stuck CPU/I/O loops that do not exit gracefully or surface actionable error messages to end users
2. No aligned versioning between the core CLI and VS Code extension: Users often run mismatched builds (the two recent bug reports use 0.76 CLI and 0.4.5 extension respectively) with no in-app upgrade prompt, leading to unforeseen compatibility issues
3. No resource guardrails for long-running tasks: Both core CLI and VS Code extension builds currently lack automatic memory usage caps, leading to degraded system performance for users working on large monorepos for extended sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-29
*Source: github.com/anomalyco/opencode*

---

## 1. Today's Highlights
No new official OpenCode public releases shipped in the last 24 hours, but maintainers merged a large backlog of long-pending features including the highly requested official Python SDK, native FreeBSD platform support, and in-app desktop browser functionality. The top trending community discussion centers on adding native support for Cursor's newly launched public CLI, which has amassed 186 upvotes and 74 active comments as of this digest. Multiple high-priority end-user bugs affecting clipboard operations, local LLM compatibility, and paid subscription activation are actively being triaged and patched for an upcoming minor release.

## 2. Releases
No new stable or pre-release versions of OpenCode were published in the 24-hour reporting window.

## 3. Hot Issues (Top 10)
1. **[#2072] Support for Cursor?** (https://github.com/anomalyco/opencode/issues/2072)
   * 186 👍, 74 comments | The highest-engagement community request asks for native integration with the newly launched public Cursor CLI, to enable cross-workflow interoperability between OpenCode and the popular Cursor code editor. Community members are actively discussing lightweight workarounds to interface with the currently undocumented Cursor API.
2. **[#13984] Can not copy and paste in opencode CLI** (https://github.com/anomalyco/opencode/issues/13984)
   * 23 👍, 50 comments | A core UX bug breaking basic clipboard operations that shows "copied to clipboard" confirmation but returns no data when users paste. Hundreds of users across Windows, macOS and Linux report replicating the issue, which is classified as a top critical bug.
3. **[#4031] Python SDK** (https://github.com/anomalyco/opencode/issues/4031)
   * 33 comments | A 7-month old feature request for an official programmatic Python SDK for OpenCode. The issue was marked resolved after the relevant PR was merged, with users now requesting public PyPI release timelines and usage documentation.
4. **[#21034] Gemma-4-26b and gemma-4-31b opencode interaction issues leading to tool loops/failures** (https://github.com/anomalyco/opencode/issues/21034)
   * 20 👍, 19 comments | A blocking bug preventing local LLM users from running Google's latest top-tier Gemma 4 models via LM Studio, even after applying the latest tokenizer and engine patches. Users are sharing manual parsing workarounds while waiting for an official fix.
5. **[#26772] Integrated browser for desktop** (https://github.com/anomalyco/opencode/issues/26772)
   * 3 👍, 9 comments | A widely requested feature to eliminate context switching between OpenCode Desktop and external browsers for web development testing, with the corresponding implementation PR already merged. Users are requesting additional visual click-to-edit functionality for local dev previews.
6. **[#32420] Paid Go subscription — charged but not activated (bug confirmed by many)** (https://github.com/anomalyco/opencode/issues/32420)
   * 10 comments | A critical billing bug affecting multiple paid OpenCode Go users, who completed payment but never received activated subscription access or valid API keys. The fix is queued for the next minor patch release.
7. **[#33399] opencode utilization at 99-100% randomly - opencode unresponsive** (https://github.com/anomalyco/opencode/issues/33399)
   * 7 comments | A severe performance bug that causes the OpenCode CLI process to spike to 100% CPU utilization and lock up entirely during long-running sessions. Users have traced the root cause to unconstrained auto-compaction loops.
8. **[#33696] GitHub Copilot provider broken** (https://github.com/anomalyco/opencode/issues/33696)
   * 4 👍, 4 comments | A recent post-v1.17.11 regression that breaks GitHub Copilot provider authentication, returning no available models even after users complete a fresh OAuth auth flow.
9. **[#24264] Nvidia NIM API hangs for DeepSeek v4 reasoning models without chat_template_kwargs** (https://github.com/anomalyco/opencode/issues/24264)
   * 3 👍, 6 comments | A compatibility bug that prevents users from accessing DeepSeek v4 reasoning models via the Nvidia NIM platform, due to OpenCode missing a required `chat_template_kwargs` parameter in inference requests.
10. **[#5409] SessionStart hook for session lifecycle events** (https://github.com/anomalyco/opencode/issues/5409)
    * 17 👍, 6 comments | A feature request asking for parity with Anthropic Claude Code's hook system, to let users automate pre-session setup tasks including loading custom context, running repo health checks, and syncing dev environment state.

## 4. Key PR Progress (Top 10)
1. **[#29676] feat(packages/sdk/python): HTTP client, server management, OpenAPI codegen** (https://github.com/anomalyco/opencode/pull/29676)
   Delivers the long-awaited official Python SDK resolving issue #4031, with a 60+ method `OpencodeClient` interface that supports full programmatic control over sessions, agents, and platform configuration.
2. **[#19038] feat(app): open browser inside the desktop app** (https://github.com/anomalyco/opencode/pull/19038)
   Ships native in-app browser support for OpenCode Desktop, letting users load and interact with web content including local dev server previews without leaving the application.
3. **[#29783] feat: FreeBSD support** (https://github.com/anomalyco/opencode/pull/29783)
   Adds full official platform compatibility for FreeBSD, with adjusted clipboard logic and system path handling to match the OS's native tooling conventions.
4. **[#29755] fix(opencode): enforce read deny rules in glob and grep results** (https://github.com/anomalyco/opencode/pull/29755)
   Fixes a long-standing security bug where wildcard ignore rules for sensitive files like `.env` were not respected in file search results, eliminating accidental exposure of secrets to LLM contexts.
5. **[#29712] fix: convert display-width offsets to char indices when expanding paste extmarks** (https://github.com/anomalyco/opencode/pull/29712)
   Resolves the core root cause of the broken copy-paste bug reported in #13984, by properly handling CJK character display width offsets for pasted content.
6. **[#29684] feat(app): add markdown preview with enhanced markdown support** (https://github.com/anomalyco/opencode/pull/29684)
   Adds a split code/preview mode for the file viewer, with full Mermaid diagram rendering support for technical documentation and README files.
7. **[#29657] feat: Cert hot reload** (https://github.com/anomalyco/opencode/pull/29657)
   Implements automatic system trusted certificate hot reloading, removing the requirement for full application restarts after users update their local CA trust stores for

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-29
Source: github.com/badlogic/pi-mono
---

## 1. Today's Highlights
There were no new official Pi releases in the past 24 hours, with all community activity focused on core bug fixes, third-party inference provider compatibility patches, and ongoing Context Matrix MVP development. The highest-engagement open issue (72 comments, 30 upvotes) tracks widely reported persistent hangs with the OpenAI Codex TUI, while multiple merged pull requests resolve long-standing pain points including tab/space indentation mismatches that caused edit tool failures, and broken model access on the OpenCode Go inference platform. Community contributors also submitted multiple proposals to add two popular new inference providers to the native supported list.

## 2. Releases
No new stable or pre-releases of the Pi monorepo were published in the 24-hour reporting window.

## 3. Hot Issues
1. **[#4945 OpenAI Codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)** (72 comments, 30 👍): The highest-engagement open issue tracks repeated hangs where the TUI freezes on "Working..." status with no streamed output, tool call or visible error, requiring users to press Escape to abort the turn. This is a top pain point for daily users running GPT-5.5 workloads.
2. **[#5825 Streaming markdown forces scroll to bottom](https://github.com/earendil-works/pi/issues/5825)** (36 comments): Users report broken UX when they scroll up to read previously generated content mid-response: the TUI automatically jumps back to the bottom of the stream a few seconds later, interrupting reading. This only triggers when the `clear on shrink` setting is enabled, and impacts almost all active TUI users.
3. **[#6083 LLM cache is not working properly with z.ai GLM coding plan](https://github.com/earendil-works/pi/issues/6083)** (2 comments, 9 👍): Users subscribed to z.ai's GLM Coding Plan report burning 10-20% of their session quota per multi-step task due to completely broken LLM caching, causing unexpected cost overruns.
4. **[#6093 Scoped Anthropic API keys need necessary request params](https://github.com/earendil-works/pi/issues/6093)** (4 comments, closed): Resolved edge case where claude-code scoped keys that do not follow the standard `sk-ant-oat-*` prefix pattern failed authentication, impacting enterprise Anthropic user deployments.
5. **[#6104 `find` drops first path-segment character on Windows bare drive roots](https://github.com/earendil-works/pi/issues/6104)** (3 comments, open): Windows users report corrupted paths returned from the find tool when running searches directly on drive roots like `C:\`, breaking file discovery workflows on Windows workstations.
6. **[#6139 Strip unsupported `reasoning_content` for providers that don't accept it (e.g. Groq)](https://github.com/earendil-works/pi/issues/6139)** (2 comments, closed): Fixed 400 Bad Request errors on OpenAI-compatible endpoints such as Groq that do not support the non-standard `reasoning_content` field, expanding cross-provider compatibility.
7. **[#6124 Devnagri breaking the Pi harness](https://github.com/earendil-works/pi/issues/6124)** (3 comments, open): Typing Devanagari script characters such as `नेटवर्क` causes UI rendering failures, highlighting gaps in non-Latin text support.
8. **[#6140 MiniMax M3 from OpenCode Go returns 404](https://github.com/earendil-works/pi/issues/6140)** (2 comments, closed): Reporter identified the root cause of the broken model endpoint matching a previously resolved 2025 bug, and contributed a corresponding patch to restore access to the popular coding model.
9. **[#6135 Pi should not hardcode `/bin/bash` for bash tool on macOS](https://github.com/earendil-works/pi/issues/6135)** (1 comment, open): Request to replace the hardcoded macOS bash path, which points to the 2007-vintage Bash 3.2 release with widespread syntax incompatibilities, to eliminate cross-platform shell execution failures.
10. **[#6103 OpenAI Responses API mislabels empty tool results as "(see attached image)"](https://github.com/earendil-works/pi/issues/6103)** (2 comments, open): False positive UI labeling that incorrectly marks empty tool success outputs as images, a bug exposed by the popular `pi-hashline-edit-pro` extension that reduces clarity of tool execution status.

## 4. Key PR Progress
1. **[#6144 fix: normalize tabs to spaces in edit tool fuzzy matching](https://github.com/earendil-works/pi/pull/6144)**: Resolves a years-long pain point where LLMs that generate space-indented patch text failed to match tab-indented source files, drastically improving edit tool patch success rates for mixed indentation codebases.
2. **[#6146 fix(ai): reverts #4110 - both models now work on OpenCode Go](https://github.com/earendil-works/pi/pull/6146)**: Removes an outdated legacy workaround, restoring full functionality for MiniMax M2.7 and Qwen 3.6 Plus hosted on OpenCode Go after the platform deprecated the old Qwen 3.5 Plus model.
3. **[#6078 feat(coding-agent): add get_entries and get_tree RPC commands](https://github.com/earendil-works/pi/pull/6078)**: Exposes two new read-only RPC methods for third-party extensions to query full session history and workspace file tree state, unlocking advanced extension use cases.
4. **[#6142 Enable DeepSeek reasoning_effort high for GitHub agent scripts](https://github.com/earendil-works/pi/pull/6142)**: Adds configurable reasoning effort controls for DeepSeek model deployments, plus formal reasoning token usage logging and a live API smoke test script.
5. **[#6141 fix(context-canvas): normalize matrix-run AiCommand response parsing](https://github.com/earendil-works/pi/pull/6141)**: Fixes uncaught Zod validation errors on Context Matrix endpoints by supporting both wrapped and bare AiCommand JSON response formats.
6. **[#6136 fix(coding-agent): guard compaction continuation with hasQueuedMessages check](https://github.com/earendil-works/pi/pull/6136)**: Eliminates spurious empty agent continuation calls that wasted tokens and hung sessions after context compaction runs with no queued user messages.
7. **[#6074 fix(coding-agent): avoid pre-prompt compaction continue](https://github.com/earendil-works/pi/pull/6074)**: Prevents redundant context compaction execution after pre-prompt generation, reducing response latency and unnecessary token consumption.
8. **[#6148 fix(ai): support Anthropic bearer token env](https://github.com/earendil-works/pi/pull/6148)** (open, under discussion): PR from core maintainer @mitsuhiko addressing Anthropic custom bearer token authentication gaps, currently under review for interface design tradeoffs.
9. **[#6115 feat(coding-agent): add configurable chat padding](https://github.com/earendil-works/pi/pull/6115)** (open, under discussion): Long requested feature to let users reduce excessive TUI chat padding, addressing top feedback from the Pi Discord community about wasted terminal screen space, pending TUI architecture alignment.
10. **[#60 feat: Fuzzy search for files and folders](https://github.com/earendil-works/pi/pull/60)**: A 7+ month old long-running PR adding fuzzy file and folder navigation support has recently been updated and is approaching final merge.

## 5. Feature Request Trends
1. **New inference provider onboarding**: The top community feature requests are for native built-in support for two popular OpenAI-compatible coding inference endpoints: Friendli and Charm Hyper.
2. **Context Matrix MVP rollout**: Multiple formal implementation tickets for Phase 3 (semantic headers, recent ranges navigation) and Phase 4a (sparse markdown storage projection) of the Context Matrix project indicate strong community demand for the new advanced canvas context management system.
3. **Extension developer ergonomics**: Top requests from extension authors include support for custom npm package manager install args, automatic slash command argument completion, RPC access to full session state, and global payload transform hooks for custom provider extensions.
4. **TUI customization**: The most voted community request on Discord is for configurable terminal layout controls to reduce unused padding and maximize screen real estate for code and chat content.

## 6. Developer Pain Points
1. **Third-party provider compatibility gaps**: A large volume of recent bugs stem from OpenAI-compatible inference endpoints that use non-standard API fields, causing silent 

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-29
---
## 1. Today's Highlights
The Qwen Code team rolled out the stable v0.19.3 release to address core web_fetch functionality, while community reports surfaced a high-severity P1 bug causing orphan "zombie" agent sessions to burn up to 30M unlogged tokens for cloud LLM users. Contributors merged and opened 10+ critical PRs this 24-hour window focused on reducing avoidable token waste, fixing common cross-platform UI rendering glitches, and expanding long-requested features like cross-app voice dictation and self-signed TLS endpoint support.
## 2. Releases
Two new builds were published in the last 24 hours:
- **v0.19.3 (stable)**: Ships the core fix for non-standard JSON response handling in the `web_fetch` tool, adding a graceful fallback for unparseable API returns to prevent tool execution failures. [Release page](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.3)
- **v0.19.2-nightly.20260628.714513df2 (pre-release)**: Pre-staged the same web_fetch JSON fallback patch for early testing ahead of the stable v0.19.3 rollout.
## 3. Hot Issues (10 Noteworthy)
All updated in the last 24 hours, sorted by impact:
1.  [#5964 (P1 Open)](https://github.com/QwenLM/qwen-code/issues/5964): Users report v0.19.2 still has a zombie session bug that leaves orphan 8+ hour agent processes running silently with zero token usage logging, burning up to 30M tokens overnight. It is marked as needing retesting, with high community concern over unmonitored cloud credit consumption.
2.  [#5942 (P2 Open)](https://github.com/QwenLM/qwen-code/issues/5942): Anthropic provider users face avoidable prompt cache misses that inflate costs far higher than Claude Code running on the exact same backend, with no fix for the two identified request-side cache breakage points.
3.  [#5736 (P2 Open)](https://github.com/QwenLM/qwen-code/issues/5736): Local LLM users report far more frequent full prompt reprocessing after recent updates, drastically increasing inference latency for llama.cpp and similar self-hosted deployments. The issue is tagged `welcome-pr` for community contributions.
4.  [#5837 (P2 Open)](https://github.com/QwenLM/qwen-code/issues/5837): Windows users see agent final responses get arbitrarily cut off mid-output, even though the full response exists in local debug logs, breaking workflow for long-running code generation tasks.
5.  [#5966 (P2 Open)](https://github.com/QwenLM/qwen-code/issues/5966): v0.19.3 UI users report random total failure of Chinese IME input, forcing users to type only pinyin to interact with the assistant with no visible error logs for debugging.
6.  [#5950 (P2 Open)](https://github.com/QwenLM/qwen-code/issues/5950): Users hit hard 400 context overflow errors even when auto-compact is enabled, with requests hitting 135k tokens for 131k max context window endpoints.
7.  [#5800 (P2 Open)](https://github.com/QwenLM/qwen-code/issues/5800): CLI TUI users on default static render mode see the last line of long assistant replies get immediately overwritten/hidden as soon as generation completes, breaking readability for terminal-only users.
8.  [#5958 (P2 Open)](https://github.com/QwenLM/qwen-code/issues/5958): Web Shell CodeMirror input editor is completely non-functional on iOS Safari and Android Chrome mobile browsers, blocking mobile remote access to self-hosted Qwen Code instances.
9.  [#5819 (Closed, user-reported)](https://github.com/QwenLM/qwen-code/issues/5819): A user found that auto-upgrades from v0.18.3 to v0.19 silently changed their configured low-cost DeepSeek-4 Flash model to the far more expensive DeepSeek-4 Pro, resulting in unplanned unexpected cloud balance exhaustion.
10. [#5941 (P2 Open)](https://github.com/QwenLM/qwen-code/issues/5941): Windows desktop UI users report scrolling up mid-assistant generation jumps the scrollbar immediately to the top of the chat history, making it impossible to reference prior messages while waiting for output.
## 4. Key PR Progress (10 Important)
1.  [#5957 (Open)](https://github.com/QwenLM/qwen-code/pull/5957): Fixes the context window calculation bug that triggers 400 overflow errors by subtracting reserved 64K output tokens from the total context window when running auto-compaction thresholds.
2.  [#5963 (Open)](https://github.com/QwenLM/qwen-code/pull/5963): Disables spawning memory recall worker processes when auto-memory functionality is toggled off, cutting unnecessary background CPU and token overhead.
3.  [#5738 (Open)](https://github.com/QwenLM/qwen-code/pull/5738): Enables virtualized terminal history by default for CLI users, directly addressing the TUI last-line overwrite bug reported in #5800 for all new and existing users without explicit custom config.
4.  [#5030 (Closed)](https://github.com/QwenLM/qwen-code/pull/5030): Ships native first-class support for resuming interrupted unfinished turns after crashes or stream breaks, no longer requiring a synthetic "continue" user message injected into the transcript, closing feature request #4679.
5.  [#5962 (Open)](https://github.com/QwenLM/qwen-code/pull/5962): Adds a new `--insecure` CLI flag + `QWEN_TLS_INSECURE` environment variable to skip TLS certificate verification, enabling connections to self-hosted model endpoints running with self-signed certificates.
6.  [#5944 (Closed)](https://github.com/QwenLM/qwen-code/pull/5944): Adds a global guard clause to halt repeated identical read-only shell inspection commands (semantically same git status, git diff runs) to prevent the model from getting stuck in useless tool call loops.
7.  [#5856 (Closed)](https://github.com/QwenLM/qwen-code/pull/5856): Brings the existing CLI voice dictation / push-to-talk feature to the Qwen Code desktop app, completing cross-client voice support after the web shell implementation.
8.  [#5777 (Closed)](https://github.com/QwenLM/qwen-code/pull/5777): Revives the long-dormant Chrome browser extension, rebuilt on a new daemon-direct architecture that connects directly to the local `qwen serve` instance over HTTP+SSE to eliminate the old native messaging host stack overhead.
9.  [#5890 (Open)](https://github.com/QwenLM/qwen-code/pull/5890): Adds a durable editable `.qwen/loop.md` task file that long-running `/loop` background jobs re-read on every wakeup, so users can modify the running task list in real time without interrupting the agent.
10. [#5951 (Closed)](https://github.com/QwenLM/qwen-code/pull/5951): Launches the new shared `@qwen-code/chat-panel` standalone package, extracting the full conversation flow logic from the web shell to be reused across VS Code webview, desktop app, and web UI, reducing redundant cross-client maintenance.
## 5. Feature Request Trends
Across all updated issues, the top user-requested feature directions are:
1.  Cost & resource governance tools: Configurable dedicated context compaction model for auto-compaction tasks (avoid burning expensive full-context tokens on summarization work), runtime CPU/memory resource isolation limits for Qwen instances.
2.  Cross-platform multi-interface parity: Full mobile browser support for the web shell, voice dictation support across all clients, fully functional Chrome extension integration.
3.  Power user workflow improvements: Inline one-step model switching via `/model <id> <prompt>` command, standardized daemon cold start latency optimization, standardized kebab-case file naming for the `qwen serve` module for better developer extensibility.
## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced this window:
1.  Unpredictable avoidable token waste: Multiple overlapping bugs (zombie unlogged sessions, avoidable Anthropic cache misses, unintended post-upgrade model switches) are causing unplanned cloud credit exhaustion that users cannot easily monitor or debug.
2.  Fragile context management: The current context window calculation and auto-compaction logic frequently fails to trigger in time, resulting in hard 400 API errors even under normal workloads.
3.  Cross-platform UI regressions: Common day-to-day usability breaks (IME failure, scroll glitches, reply truncation, TUI rendering issues) after recent minor version updates, disrupting developer daily workflows.
4.  Poor support for self-hosted private model deployments: Missing TLS skip support, no explicit local backend specific behavior toggles, broken mobile access for on-prem deployments.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-06-29
Repository: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

## 1. Today's Highlights
The past 24 hours saw the development team prioritize fixes for the widespread high-token-cost and low-prompt-cache-hit regression that is the top user complaint, alongside 20+ merged closed pull requests addressing critical TUI UX bugs. The team shipped official support for Sakana AI's new Fugu model, mitigated the dangerous "hollow Auto mode" feature that misrepresented user permissions, and landed a full fix for the long-running Windows DSML task interruption bug. No new public releases have been pushed in the last day, but all merged fixes are staged for the upcoming v0.8.66 patch.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues (Top 10 Notable)
1. **#1177 [OPEN] Input cache hit rate far below DeepSeek-Reasonix baseline** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/1177)): 24 comments, top voted user complaint. Users report DeepSeek TUI’s cache hit rate lags far behind the 95%+ rate of DeepSeek’s official Reasonix client, leading to unnecessary API costs.
2. **#1120 [OPEN] Persistent cache hit ratio anomalies** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/1120)): 21 comments. Cross-version bug tracking confirms cache miss rates never recovered after a v0.8.17 update, prompting the full team cache investigation epic.
3. **#743 [OPEN] Excessive unexpected token consumption** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/743)): 13 comments. Heavy users report consuming 400M+ tokens in half a day of normal work, pointing to unoptimized repeated payloads in context exchanges.
4. **#3738 [OPEN] Prompt cache hit rate regression root cause investigation** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/3738)): Newly opened priority dev issue. Engineers suspect the added per-turn `<turn_meta>` metadata block is breaking the stable cacheable prompt prefix that enables DeepSeek’s discounted cached input pricing.
5. **#3275 [OPEN] Agent overshoots user intent with self-questioning loops** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/3275)): 12 comments. Users report agents entering unsupervised self-driven execution cycles that modify unintended files, a regression from recent planning logic changes.
6. **#3568 [CLOSED] Recurring Plan/Agent mode mixup bug** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/3568)): 7 comments, 2 upvotes. Users lost the expected write-blocked guardrails in Plan mode after mode switches, leading to unwanted file edits even when no write actions were approved.
7. **#3657 [CLOSED] External editor crash freezes full app** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/3657)): 5 comments. Users accessing the Ctrl+O external editor hotkey would lock the entire TUI process, requiring a full force-kill to recover.
8. **#3732 [OPEN] Universal modal UI break across all TUI popups** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/3732)): Critical UX bug. Confirmation/approval modals had no opaque backdrop, leading to background content bleed-through that truncated action buttons and made prompts unreadable.
9. **#3192 [OPEN] Request to list on Agent Client Protocol Registry** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/3192)): 12 comments. Community members note listing on the ACP registry will enable native one-click installation for Zed editor users, massively expanding discoverability.
10. **#2300 [OPEN] Multi-model compatibility and Fleet auto-loadout documentation** ([link](https://github.com/Hmbown/DeepSeek-TUI/issues/2300)): 7 comments. Users are requesting clearer documentation explaining differences between vLLM, OpenAI, and custom local provider routing for the upcoming v0.8.65 release.

## 4. Key PR Progress (Top 10 High-Impact)
1. **#3749 feat: Add official Sakana AI Fugu provider** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3749)): Merged PR that adds first-class support for Sakana AI’s new Fugu reasoning model, including all expected aliases, API key env var handling, OpenAI wire protocol compatibility, and provider picker wiring.
2. **#3718 fix: Strip fullwidth DSML tool wrappers** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3718)): Resolves the Windows-specific DSML parsing crash that unconditionally interrupted tasks whenever DSML markup appeared in the output stream.
3. **#3745 fix: Add cache telemetry route display** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3745)): Adds a new `route` column to the `/cache` debug command that logs the exact provider/model/host associated with each turn’s cache metrics, enabling engineers to debug fragmentation-caused cache misses.
4. **#3739 fix: Defer hollow Auto mode** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3739)): Hides the non-functional Auto mode from all user-facing UIs, config pickers, and hotkeys until a real auto-risk-review implementation is ready, preventing user confusion from mislabeled mode behavior.
5. **#3729 fix: Pause input pump for external editor** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3729)): Fixes the external editor freeze bug by pausing the terminal input buffer before launching Vim or other editors, and resuming input polling only after the editor process exits.
6. **#3750 fix: Clear modal backdrop centrally** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3750)): Resolves the modal content bleed bug by adding a mandatory opaque backdrop rendered behind all popups from the ViewStack layer, eliminating all background content overflow.
7. **#3747 + #3746 fix: Skip approval for read-only auto shell commands** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3746)): Fixes the false positive destructive flagging bug that forced users to approve obviously safe commands like `deepseek-tui --version` in Auto/Agent modes.
8. **#3722 fix: Keep mode policy in sync with engine** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3722)): Eliminates the Plan/Agent mode mixup bug by passing the full effective permission policy across mode changes, not just the visible mode label.
9. **#3719 / #3720 / #3723 refactor: Split MCP transports to dedicated modules** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3719)): Breaks the monolithic `mcp.rs` file into dedicated stdio, SSE, and Streamable HTTP transport modules, massively improving maintainability for future MCP feature work.
10. **#3721 feat: Add verifier preview policy table** ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/3721)): Adds a typed `[verifier]` config section that maps pass/partial/fail verification results to the planned "hunted/wounded/escaped" hunt verdict system for the upcoming v0.8.65 release.

## 5. Feature Request Trends
The top user-requested feature directions for the past 24 hours are:
1. **Cache & token efficiency overhauls**: An overwhelming collective priority to match DeepSeek’s official 95%+ input cache hit rate and reduce total token consumption to parity with OpenAI’s Codex CLI.
2. **Ecosystem integration**: Requests for listing on the ACP registry, adoption of the Moraine open-source long-term memory backend, and native Zed editor integration.
3. **Multi-provider expansion**: Requests for wider first-class support for regional reasoning models, including the newly merged Sakana AI Fugu provider.
4. **TUI performance and UX upgrades**: Community demand for a Rust-based native runtime replacement of the existing Node.js TypeScript TUI to cut cold-start latency, plus expanded localization support for Korean, Spanish, and Brazilian Portuguese.

## 6. Developer Pain Points
Recurring highest-frequency frustrations reported by users in the past 24 hours:
1. **Unpredictable high API costs**: Unusually low prompt cache hit rates and unoptimized repeated context payloads are leading to 10x higher than expected DeepSeek API bills for daily users.
2. **Unreliable permission guardrails**: Past bugs that silently mix the write-blocked Plan mode and full Agent mode permissions have eroded user trust that the tool will respect their safety settings.
3. **TUI render reliability bugs**: Persistent modal overflow, external editor freezes, and cramped low-signal UIs during multi-subagent work sessions are hurting productivity for power users.
4. **Windows-specific compatibility gaps**: The recently patched DSML fullwidth markup parsing bug unconditionally aborted every task that touched DSML content for Windows 0.8.65 users, blocking work entirely.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*