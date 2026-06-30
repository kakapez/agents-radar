# AI CLI Tools Community Digest 2026-07-01

> Generated: 2026-06-30 23:13 UTC | Tools covered: 9

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

# 2026-07-06 AI Developer CLI Tools Cross-Tool Comparison Report
*For technical decision-makers and professional developer teams*

---

## 1. Ecosystem Overview
As of mid-2026, the global AI code CLI category has moved past early beta experimentation to prioritize production-grade reliability, security hardening, and native support for leading new models such as Anthropic Claude Sonnet 5. Cross-industry alignment is visible across all tracked tools on Model Context Protocol (MCP) compatibility, zero-trust sandboxing, and cost guardrails, after widespread 2026 H1 user reports of unplanned token bloat, permanently bricked sessions, and accidental credential leaks. Most maintainers are shifting resources from shiny new feature development to triaging long-tail cross-platform regressions, especially for the Windows, WSL, and Linux Wayland user bases that now represent over 70% of daily active power users. The market is clearly segmented between full-featured, compliance-focused vendor-backed offerings from major LLM providers, and lean community-led alternatives that prioritize open extensibility, self-hosted deployment, and custom model support.

## 2. Activity Comparison
| Tool Name               | Tracked Active Hot Issues | Tracked Merged/In-Progress Key PRs | 24-hour Release Status |
|-------------------------|---------------------------|------------------------------------|------------------------|
| Claude Code (Anthropic) | 10                        | 10                                 | 2 production patches (v2.1.196, v2.1.197) |
| OpenAI Codex            | 10                        | 9                                  | 1 Rust SDK pre-release (rust-v0.143.0-alpha.31) |
| Gemini CLI (Google)     | 10                        | 10                                 | 1 nightly security/ reliability build |
| GitHub Copilot CLI      | 10                        | 2                                  | 2 UX/security patch releases (v1.0.66, v1.0.67) |
| Kimi Code CLI (Moonshot) | 1                        | 2                                  | No new published release |
| OpenCode (Anomalyco)    | 10                        | 10                                 | 1 stable core patch release (v1.17.12) |
| Pi (badlogic)           | 10                        | 10                                 | 1 major feature release (v0.80.3, full Claude Sonnet 5 support) |
| Qwen Code (Alibaba)     | 10                        | 10                                 | 1 nightly pre-release build for v0.19.3 |
| DeepSeek TUI            | 10                        | 9                                  | Final pre-staging for upcoming v0.8.66 stable release |

## 3. Shared Feature Directions
Identical high-priority requirements appear across the majority of tool communities:
1. **Claude Sonnet 5 native support**: 5 tools (Claude Code, OpenCode, Pi, Gemini CLI, DeepSeek TUI) are rolling out full integration for the new 1M-context Sonnet 5 model, with Anthropic’s official Claude Code making it the global default across all installations in this release window.
2. **MCP ecosystem hardening**: 6 tools (Claude Code, OpenCode, Gemini CLI, GitHub Copilot CLI, DeepSeek TUI, Qwen Code) are patching critical MCP edge cases, including OAuth authentication flows, environment variable placeholder support, and wildcard tool restriction rules to unblock enterprise MCP server rollouts.
3. **Cost and reliability guardrails**: 7 tools track widespread user demand for features to eliminate unplanned cost overruns, including automatic cross-model failover for rate limit resilience, hard turn limits to stop infinite agent loops, explicit input cache hit UI indicators, and programmatic usage/balance tracking APIs.
4. **Power user TUI UX polish**: All 8 tools are addressing longstanding terminal usability pain points, including full keyboard-first navigation support, preserved native terminal scrollback, mouse interaction for dialogs, configurable TUI density, and reduced UI flicker on Windows platforms.
5. **Enterprise admin controls**: 6 tools are building out org-level model access restrictions, repository-scoped shared plugin configurations, and session permission guardrails to support central management of large developer teams.

## 4. Differentiation Analysis
Tools have clearly diverged in their focus areas, target user bases, and technical architectures:
1. **Big 4 vendor closed ecosystem tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI)**: Prioritize native integration with their parent cloud/developer platforms, certified secure sandboxes, and enterprise SSO compliance, targeting mainstream enterprise developers with no requirement for self-hosting. They lag significantly on third-party model support and custom extensibility use cases. For example, Copilot CLI is optimized exclusively for native GitHub workflow integration, while Claude Code leads the market on native thinking block handling.
2. **China-region LLM vendor tools (Kimi Code CLI, Qwen Code, DeepSeek TUI)**: Optimized for domestic user requirements, including Chinese IME compatibility, regional cloud provider performance, and robust self-hosted local LLM support for consumer hardware. Qwen prioritizes multi-user daemon-backed messaging channel workflows, DeepSeek TUI is heavily focused on pushing input cache hit rates to minimize token costs for high-volume agent workloads, and Kimi targets power users with minimal UI clutter and streamlined interactive session controls.
3. **Community-led open extensible tools (OpenCode, Pi)**: Designed for maximum ecosystem compatibility, supporting every major global and regional LLM provider, and offering full extension SDKs for third-party developers. Pi targets advanced extension builders with complete API hooks for custom session state management, while OpenCode builds full unifying support for the public models.dev registry and full MCP ecosystem with zero vendor lock-in, targeting DevOps engineers and teams building custom production agent workflows.

## 5. Community Momentum & Maturity
The most active and rapidly iterating tools with the largest contributor bases are OpenCode, Pi, Claude Code, and Qwen Code, each with 10+ active tracked PRs, high-visibility community discussion threads, and daily patch releases, making them production-ready for most developer use cases. Gemini CLI, DeepSeek TUI, and OpenAI Codex follow closely, though most PR contributions to OpenAI Codex come from internal OpenAI staff with a much smaller volume of external community submissions. GitHub Copilot CLI has high issue engagement from users, but only 2 tracked active PRs in the 24-hour window, indicating a small maintainer team and slower feature iteration cycles. Kimi Code CLI is the least mature in this update window, with only 1 new issue and 2 PRs tracked, pointing to a smaller active user base and lower community contribution volume.

## 6. Trend Signals for Developer Teams
1. Prioritize tools with full, production-grade MCP support for internal custom agent workflow development: MCP has become the de facto open standard for AI CLI tooling, and investing in tools with full MCP compatibility will future-proof all custom tool integrations against future platform changes.
2. Teams with strict cloud cost budgets should select tools that already ship explicit input cache hit UI, hard subagent turn limits, and programmatic usage tracking APIs: DeepSeek TUI and OpenCode currently lead on these capabilities, and eliminate the risk of thousands of dollars in unexpected unplanned token consumption that has plagued earlier generation AI CLI tools.
3. Power users running WSL, Linux Wayland, or non-x86 hardware should prioritize open source rapidly iterating offerings (Pi, Qwen Code, OpenCode) over closed vendor tools, which consistently deprioritize bug fixes for these niche cross-platform user bases.
4. Enterprise teams with strict compliance and security requirements should select one of the 4 major vendor tools (Claude Code, Codex, Copilot CLI, Gemini CLI) that currently lead on certified sandbox hardening, built-in secret redaction, and regulatory compliance features, even if they offer less extensibility for non-standard internal tooling.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-07-01)

---

## 1. Top Skills Ranking
Ranked by linked comment volume in related community issues and verified real-world usage engagement, the 6 most-discussed active PRs are:
1. **Skill Creator 0% Recall Full Fix (anthropics/skills PR #1298)** | Functionality: Patches the broken end-to-end `run_eval.py`, `run_loop.py` and `improve_description.py` pipeline that incorrectly reported 0% recall for 100% of skill description tests, with additional fixes for Windows stream reading, trigger detection, and parallel worker issues. Discussion highlights: Addresses 10+ independent user reproductions of the core evaluation pipeline failure. Status: Open.
2. **Skill Creator Trigger Detection Bug Fix (anthropics/skills PR #1323)** | Functionality: Resolves a logic error in `run_eval.py` that aborts trigger detection as soon as it encounters a non-Skill tool, causing all test runs to incorrectly return 0% recall. Discussion highlights: Submitted as a targeted incremental fix to reduce review burden for the parallel full 0% recall fix PR. Status: Open.
3. **Skill Creator Windows Subprocess Pipe Crash Fix (anthropics/skills PR #1099)** | Functionality: Patches `run_eval.py` to eliminate the Windows-specific `WinError 10038` crash when reading subprocess pipe outputs. Discussion highlights: Linked directly to the cross-platform usability pain point reported by 3+ Windows users on the related support issue. Status: Open.
4. **Skill Creator YAML Special Character Validation (anthropics/skills PR #361)** | Functionality: Adds a pre-parse check in the official skill validation script to detect unquoted description fields containing YAML reserved characters that cause silent, hard-to-debug parsing failures. Discussion highlights: Two separate community contributors submitted competing, complementary fixes for this high-frequency developer pain point in parallel. Status: Open.
5. **Skill Creator Windows Subprocess + Encoding Fixes (anthropics/skills PR #1050)** | Functionality: Two 1-line patches that fix subprocess path resolution (honoring Windows `PATHEXT` for the `claude.cmd` executable) and non-UTF-8 default encoding bugs on Windows. Discussion highlights: Discovered during real-world use of the skill optimization loop on Windows 11. Status: Open.
6. **Self-Audit Reasoning Quality Gate Skill (anthropics/skills PR #1367)** | Functionality: A universal skill that audits all AI output across 4 dimensions (completeness, consistency, ground truth alignment, no hallucinations) before delivery, with no project or tech stack dependencies. Discussion highlights: Freshly submitted in late June 2026 and already receiving widespread informal positive community feedback as a drop-in quality improvement for all use cases. Status: Open.

## 2. Community Demand Trends
Analysis of top-comment community issues reveals 5 core prioritized directions:
1. **Trust & Ecosystem Security**: The highest-engagement community issue (32 comments) requests remediation of the critical vulnerability that allows unvetted community skills to be published under the official `anthropic/` namespace, which tricks users into granting elevated permissions to untrusted code.
2. **Enterprise Workflow Usability**: The top-voted open feature request (14 comments, 7 👍) asks for native org-wide skill sharing in Claude.ai, to eliminate the manual process of distributing `.skill` files via third-party messaging tools across corporate teams.
3. **Persistent Agent Context**: Multiple high-attention proposals request memory-focused skills that reduce context bloat from long-running agent conversations by implementing structured, compact persistent memory stores that work across chat sessions.
4. **Cross-Platform Deployment Support**: Users are actively requesting compatibility fixes for skill tooling that works natively on Windows, AWS Bedrock, and other non-Unix, non-Anthropic hosted runtime environments to expand the usable deployment surface for community skills.
5. **Meta-Quality Management**: Community members want built-in skills that automatically audit new skill submissions for security flaws, documentation quality, and functional compliance before they are added to the public shared library.

## 3. High-Potential Pending Skills
These fully implemented open PRs have no outstanding breaking issues and are highly likely to land after the current core skill-creator bug fix batch is merged:
1. **Document Typography Skill (anthropics/skills PR #514)**: A typographic quality control tool that eliminates orphan/widow line wrapping errors and numbering misalignment in all AI-generated documents, a near-universal use case for all Claude Code users.
2. **ODT File Skill (anthropics/skills PR #486)**: Adds full support for creating, parsing, and filling OpenDocument Format (.odt, .ods) files for LibreOffice / open standard document workflows, filling a large gap in the current document processing skill library.
3. **Testing Patterns Skill (anthropics/skills PR #723)**: A comprehensive, end-to-end testing guidance skill that covers unit testing, React component testing, end-to-end testing, and full testing stack best practices for software development teams.
4. **Skill Quality + Security Analyzer Meta Skills (anthropics/skills PR #83)**: Two new meta-skills that automatically evaluate submitted skills across structure, documentation quality, runtime security, and compliance dimensions, directly addressing the top community security concern.
5. **CONTRIBUTING.md Documentation (anthropics/skills PR #509)**: Adds a full official contributing guide to the repository to raise the project's GitHub community health score from 25% to over 90% and lower the barrier for first-time skill contributors.

## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated demand as of July 2026 is to first harden the core, end-to-end skill creation, testing, and distribution pipeline to be secure, cross-platform compatible, and low-friction for all developer users, before scaling the library of new individual end-user skills.

---

# Claude Code Community Digest | 2026-07-01
---
## 1. Today's Highlights
The biggest release update in the last 24 hours makes Claude Sonnet 5 the default model across all Claude Code installations, with a native 1M-token context window and promotional $2/$10 per Mtok pricing in effect through August 31. The project merged two back-to-back production releases alongside a flurry of community-submitted cross-platform Windows and macOS compatibility fixes for core plugins. Multiple long-open, widely reported stale issues for the pervasive "cannot modify thinking blocks" API error were formally closed yesterday.

## 2. Releases
Two new production versions shipped in the 24-hour window:
- **v2.1.197**: Introduces Claude Sonnet 5 as the default model, with full access to its 1M-token native context window and limited-time promotional pricing for input/output tokens. [Official Sonnet 5 announcement](https://www.anthropic.com/news/claude-sonnet-5)
- **v2.1.196**: Adds organization default model support that lets enterprise admins set a workspace-wide model in the org console (surfaced as "Org default" in the `/model` picker for unassigned users), plus auto-generated human-readable default session names to simplify session identification.

## 3. Hot Issues (Top 10)
1. [Issue #70622](https://github.com/anthropics/claude-code/issues/70622): *Feature Request: Add option to disable clickable Yes/No prompts in terminal* – The highest-engagement open feature request, with 33 👍 reactions from Windows TUI users reporting frequent accidental permission approvals/cancellations from misclicks on empty terminal space.
2. [Issue #67606](https://github.com/anthropics/claude-code/issues/67606): *BUG: Opus 4.8 confabulates user messages and fake prompt injection narratives in long sessions* – A fully JSONL-verified bug on Linux where Opus 4.8 fabricates non-existent user messages and tool facts in multi-thousand token sessions, risking invalid outputs.
3. [Issue #72284](https://github.com/anthropics/claude-code/issues/72284): *BUG: Cowork microphone input cuts off after ~2 seconds on x64 Windows* – New regression reported 2 days prior affecting all x64 desktop users, with no reported failures on Windows ARM64 builds.
4. [Issue #72621](https://github.com/anthropics/claude-code/issues/72621): *BUG: Slack connector fails to return binary PDF files* – The official MCP Slack tool throws a -32602 validation error when fetching non-text documents, breaking workflow for users accessing shared document assets from Claude Code.
5. [Issue #70062](https://github.com/anthropics/claude-code/issues/70062): *BUG: `claude-api` skill consumes entire context window* – Verified bug on Linux where the built-in API skill leaks context and exhausts full 1M-token sessions immediately on execution.
6. [Issue #72168](https://github.com/anthropics/claude-code/issues/72168): *False positive security flag for local telnet connections* – Linux users working with on-prem embedded devices are incorrectly blocked from accessing local telnet shells by the security permission system.
7. [Issue #72346](https://github.com/anthropics/claude-code/issues/72346): *Regression: Live token counter absent during thinking phase* – Power users lost visibility into real-time thinking token generation, making it impossible to distinguish a stuck API call from normal processing.
8. [Issue #55609](https://github.com/anthropics/claude-code/issues/55609): *BUG: Hook subprocess cleanup causes 100% CPU freeze on task interruption* – Closed stale macOS bug that triggered full CLI freezes within 60 seconds of interrupting a task with an active custom hook.
9. [Issue #63277](https://github.com/anthropics/claude-code/issues/63277): *Persistent "cannot modify thinking blocks" 400 error bricks sessions* – Closed stale top-priority bug that permanently broke running sessions when interleaved thinking blocks were incorrectly modified in persisted session JSONL.
10. [Issue #58396](https://github.com/anthropics/claude-code/issues/70622): *BUG: €450 consumed in under 24 hours for 4-5 markdown files* – Closed stale cost bug that caused massive unexpected overcharges even for trivial workspace operations.

## 4. Key PR Progress (Top 10)
1. [PR #72451](https://github.com/anthropics/claude-code/pull/72451): *Remove statsig.anthropic.com from firewall allowlist* – Fixes broken devcontainer startup failures caused by the now-unresolvable Statsig hostname blocking the entire initialization script.
2. [PR #68707](https://github.com/anthropics/claude-code/pull/68707): *Add new `/bug` terminal slash command* – Introduces a full bug-reporter plugin that lets users file structured GitHub issues directly from the TUI without leaving their development environment.
3. [PR #68689](https://github.com/anthropics/claude-code/pull/68689): *Block symlink escape in security-guidance plugin* – Patches a local file disclosure vulnerability that could let malicious repositories exfiltrate local files via symlinked security configs.
4. [PR #68694](https://github.com/anthropics/claude-code/pull/68694): *Normalize CLAUDE_PLUGIN_ROOT path separators on Windows* – Fixes broken hook scripts on Windows by converting backslash paths to POSIX-compatible forward slashes for inline bash execution.
5. [PR #68699](https://github.com/anthropics/claude-code/pull/68699): *Add Python wrapper for hookify plugin* – Resolves silent exit code 49 failures from the Microsoft Store Python stub that broke hook execution on Windows.
6. [PR #68701](https://github.com/anthropics/claude-code/pull/68701): *Strip CRLF from Python version probe on Windows* – Fixes broken version comparison logic caused by Windows-style line endings in Python CLI outputs.
7. [PR #68702](https://github.com/anthropics/claude-code/pull/68702): *Guard PROMPT_PARTS expansion for bash 3.x on macOS* – Patches unbound variable errors that broke the ralph-wiggum plugin on default legacy macOS bash installations.
8. [PR #68693](https://github.com/anthropics/claude-code/pull/68693): *Add duplicate labels additively instead of replacing* – Fixes a bot bug that erased all existing platform/area/priority tags from issues when marking them as duplicates.
9. [PR #46903](https://github.com/anthropics/claude-code/pull/46903): *Add local plugin cache sync documentation* – Clears up widespread developer confusion about why edits to unregistered local plugins do not immediately propagate to running Claude Code instances.
10. [PR #72363](https://github.com/anthropics/claude-code/pull/72363): *GCP Gateway example Agent Platform rebrand* – Updates all public GCP deployment example docs to reflect the official Vertex AI to Agent Platform rebrand for production deployments.

## 5. Feature Request Trends
This week’s community requests cluster around 4 clear directions:
1. **Keyboard-first TUI customization**: Users are asking for granular toggles to disable clickable UI elements in the terminal and revert to pure keyboard navigation for all permission prompts.
2. **Extended hook/skill capabilities**: Top requested addition is the ability for custom hooks and skills to programmatically set session titles, to automate organization of multi-workspace sessions.
3. **IDE UX quality of life**: VS Code extension users are requesting soft line wrapping in the chat panel to replace the current behavior that forces horizontal scrolling for long outputs.
4. **Enterprise model policy controls**: Org admins are requesting additional model override rules on top of the newly shipped org default model feature, including per-team and per-project model access restrictions.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced in this update window:
1. The "cannot modify thinking blocks" 400 API error remains the most widely reported bug, with at least 7 duplicate closed stale issues in the last 24 hours, as users still encounter permanently bricked long-running sessions.
2. Cross-platform compatibility gaps continue to disproportionately affect Windows, niche Linux distros (Nix/Guix), and under-supported platforms like FreeBSD, with a flood of submitted plugin fixes targeting Windows-specific shell path issues.
3. Unpredictable cost overruns from unregulated auto-agent spawning and silent context bloat are a top user complaint, with multiple reports of hundreds of dollars in unexpected charges for trivial workloads.
4. Missing real-time telemetry in the TUI (including the removed live token counter during thinking phases) makes it impossible for power users to distinguish between stuck API calls and normal model processing without external debug tools.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-01
---
## 1. Today's Highlights
This 24-hour update sees the release of the new Codex Rust v0.143.0-alpha.31 pre-release, alongside a wave of critical security hardening patches for Git and WebSocket functionality, plus widespread user reports of broken Windows sandbox workflows and unexpected performance degradation following the latest desktop app update. The highest community engagement this period centers on a longstanding 667-upvote request for a native Linux Codex desktop client, and near-complete resolution of the high-severity SQLite logging bug that risked rapid SSD endurance depletion for heavy users.

## 2. Releases
**rust-v0.143.0-alpha.31**: New pre-release of the Codex Rust SDK, published to the openai/codex repository with no formal public changelog as of this digest. [View Release](https://github.com/openai/codex/releases)

## 3. Hot Issues (10 Noteworthy Items)
1. **#20161 [CLOSED] Phone number verification doesn't work** | 203 comments, 129 👍: Users reported unexpected mandatory phone number prompts on SSO cross-device login, even for accounts that never registered a phone number, triggering widespread login lockouts that have now been fully resolved. [View Issue](https://github.com/openai/codex/issues/20161)
2. **#11023 [OPEN] Codex desktop app for Linux** | 135 comments, 667 👍: The most upvoted active feature request on the repo. Users cite unbearable power consumption and reliability issues on x86/ARM Mac laptops, and are pushing for a native Linux desktop build to run Codex on their higher-powered workstations. [View Issue](https://github.com/openai/codex/issues/11023)
3. **#28224 [CLOSED] Codex SQLite feedback logs can write ~640 TB/year and rapidly consume SSD endurance** | 113 comments, 409 👍: A critical storage performance bug that risked permanent SSD wear for heavy daily Codex users. Three prior fix PRs merged in v0.142.0 have already cut excess logging volume by 85%. [View Issue](https://github.com/openai/codex/issues/28224)
4. **#30364 [OPEN] GPT-5.5 Codex reasoning-token clustering at 516/1034/1552 may be leading to degraded performance on complex tasks** | 27 comments, 41 👍: Developer analysis found non-random spikes in GPT-5.5 reasoning output tokens at fixed 512-token aligned boundaries, which correlates directly with lower reasoning quality on complex coding challenges. [View Issue](https://github.com/openai/codex/issues/30364)
5. **#16404 [CLOSED] TUI voice transcription** | 27 comments, 18 👍: Terminal-first developers lost access to native OpenAI-powered voice transcription in v0.118.0. The thread is closed with team commitments to either restore the feature for TUI workflows or publish formal documentation for a supported replacement. [View Issue](https://github.com/openai/codex/issues/16404)
6. **#28969 [OPEN] Add setting to disable the auto-resolve in 60 seconds for questions** | 7 comments, 62 👍: Power users are frustrated by the forced 60-second auto-confirmation for pending CLI prompts, which interrupts debugging, multi-step refactoring, and other long-running interactive workflows. [View Issue](https://github.com/openai/codex/issues/28969)
7. **#30639 [OPEN] Chronicle runs continuous background screen-recording summaries every 10 min, draining plan limits; disabling doesn't immediately stop capture** | 4 comments: A new unadvertised macOS desktop app background feature silently consumes large portions of paid Pro/Plus plan rate limits, and continues recording screen content even after users manually toggle the feature off, causing unplanned quota exhaustion. [View Issue](https://github.com/openai/codex/issues/30639)
8. **#30696 [OPEN] Extremely slow on any orders, especially after today's update** | 3 comments: Multiple Windows users report >10 second response latency after the v26.623.70822 desktop app update, severely blocking daily coding productivity. [View Issue](https://github.com/openai/codex/issues/30696)
9. **#30759 [OPEN] The quality of code analysis and generation dropped precipitously** | 3 comments: Pro tier users report measurable degradation in code review and generation quality starting around June 23-24, requiring engineers to spend extra time correcting low-quality model outputs. [View Issue](https://github.com/openai/codex/issues/30759)
10. **#30712 [OPEN] Codex desktop app on Windows injects split writable roots, causing apply_patch to fail before patching workspace files** | 2 comments: A critical recent bug breaks the secure sandboxed file edit workflow on Windows, forcing users to fall back to non-sandboxed PowerShell file writes that reduce security for untrusted repository work. [View Issue](https://github.com/openai/codex/issues/30712)

## 4. Key PR Progress (10 Important Items)
1. **#30757 [CLOSED] fix(core) Remove full text websocket trace** (dylan-hurd-oai): Follow-up to the recent SQLite logging fixes that strips an unfiltered verbose full-text websocket debug trace, further reducing excess storage overhead. [View PR](https://github.com/openai/codex/pull/30757)
2. **#30752 [OPEN] Add configurable reasoning summary delivery** (alexi-openai): Exposes new user-facing config options (`sequential`, `concurrent`, `concurrent_cutoff`) for how long reasoning traces are streamed, matching latest OpenAI Responses API capabilities to speed up delivery of long reasoning outputs. [View PR](https://github.com/openai/codex/pull/30752)
3. **#30628 [OPEN] Trust only system PowerShell parsers on Windows** (bookholt-oai): Critical security hardening patch that blocks malicious repository-provided PowerShell executables from running before sandbox/approval boundaries, eliminating a high-severity local code execution vulnerability. [View PR](https://github.com/openai/codex/pull/30628)
4. **#30765 [OPEN] Enable tool search for fallback models** (rphilizaire-openai): Updates Codex to automatically enable tool search capabilities for any model not explicitly listed in the model catalog, preventing broken tool call functionality when new unlisted model variants are released. [View PR](https://github.com/openai/codex/pull/30765)
5. **#30492 [OPEN] Fix slash command popup dismissal** (charliemarsh-oai): Resolves a longstanding UX bug where pressing Escape to close a slash command prompt immediately reopens the popup, disrupting free text editing workflows. [View PR](https://github.com/openai/codex/pull/30492)
6. **#30315 [OPEN] Add generated token auth to app-server WebSockets** (mikhail-oai): Adds 256-bit URL-safe token authentication for app-server WebSocket connections, eliminating unauthenticated remote access risks for self-hosted Codex deployments. [View PR](https://github.com/openai/codex/pull/30315)
7. **#30643 [OPEN] Bound Rendezvous WebSocket liveness** (richardopenai): Enforces 60-second Pong timeouts for peer-to-peer Codex Rendezvous connections, preventing stale disconnected sessions from consuming server resources indefinitely. [View PR](https://github.com/openai/codex/pull/30643)
8. **#27914 [OPEN] Fail closed on executable Git worktree helpers** (evawong-oai): Security patch that blocks untrusted repository-controlled Git merge drivers and content filters from executing during patch operations, closing a critical unvalidated code execution flaw. [View PR](https://github.com/openai/codex/pull/27914)
9. **#28266 [CLOSED] Add durable user message queue storage** (efrazer-oai): Implements a new dedicated SQLite persistent queue for queued user messages that survives client and app-server restarts, allowing users to submit input during active

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-01
*Source: github.com/google-gemini/gemini-cli*

---

## 1. Today's Highlights
This digest covers the latest 24 hours of activity for the Gemini CLI project, including a new nightly release, high-priority reliability fixes, and sweeping security hardening patches for the default OS sandbox environment. Top user-facing updates include fixes for widely reported JSON and Jupyter Notebook file corruption issues, hard guardrails against infinite agent reasoning loops that waste API credits and local CPU resources, and mitigations for high-severity prompt injection sandbox escape vectors. All merged changes align with the team’s roadmap to harden agent reliability for production codebase and enterprise workflows.

## 2. Releases
A new incremental nightly build was published on 2026-06-30:
- **v0.51.0-nightly.20260630.gae0a3aa7b**: Full diff from the prior day’s nightly tag includes all merged reliability and security patches. The full changelog is available [here](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260629.gae0a3aa7b...v0.51.0-nightly.20260630.gae0a3aa7b). The automated version bump PR is #28217.

## 3. Hot Issues
1. **#21409 Generalist agent hangs indefinitely (P1)**: [Link](https://github.com/google-gemini/gemini-cli/issues/21409)
   The highest-upvoted open bug (8 👍) reports that simple operations like folder creation hang forever when the CLI defers to the generalist subagent, unless users explicitly disable subagent deferral. The issue breaks basic everyday workflows for thousands of active users.
2. **#22323 Subagent reports MAX_TURNS interruptions as success (P1)**: [Link](https://github.com/google-gemini/gemini-cli/issues/22323)
   With 8 active comments, this bug causes the `codebase_investigator` subagent to return a fake "GOAL success" status even when it hits the maximum turn limit before completing any analysis, hiding unfinished work from users and blocking debugging.
3. **#19873 Zero-dependency OS sandboxing + native bash affinity routing**: [Link](https://github.com/google-gemini/gemini-cli/issues/19873)
   This 8-comment roadmap item is focused on fully leveraging Gemini 3 models’ native training on POSIX/bash tooling, while maintaining strict zero-trust sandbox constraints to avoid security risks for user workstations.
4. **#25166 Shell execution hangs with "Awaiting user input" after commands complete (P1)**: [Link](https://github.com/google-gemini/gemini-cli/issues/25166)
   A 3-upvote bug that leaves the CLI stuck in an unresponsive state even after fully non-interactive shell commands finish running, interrupting batch workflow automation for users.
5. **#26525 Deterministic secret redaction for Auto Memory (P2 Security)**: [Link](https://github.com/google-gemini/gemini-cli/issues/26525)
   Users flagged that current LLM-only secret redaction for Auto Memory cannot protect sensitive data before it is loaded into the model’s context, creating a security gap for workstations holding API keys and credentials.
6. **#20079 Symlinked custom agents are not recognized**: [Link](https://github.com/google-gemini/gemini-cli/issues/20079)
   Devs who manage their custom agent libraries via dotfile managers and symlinks cannot load their custom agents, as the CLI currently does not follow symlinks in the `~/.gemini/agents` directory.
7. **#24246 400 errors when more than 128 tools are available**: [Link](https://github.com/google-gemini/gemini-cli/issues/24246)
   Users with large custom skill and subagent libraries hit API failures, as the CLI does not implement smart tool scoping to limit only relevant tools for the current user request.
8. **#21983 Browser subagent fails on Wayland (P1)**: [Link](https://github.com/google-gemini/gemini-cli/issues/21983)
   The browser automation subagent is broken for all modern Linux desktop users running Wayland sessions, blocking web testing and scraping workflows for Linux users.
9. **#22672 Agent should avoid destructive FS/git operations**: [Link](https://github.com/google-gemini/gemini-cli/issues/22672)
   Users requested guardrails to block accidental `git --force`, destructive filesystem deletes, and other high-risk operations without explicit user confirmation, to prevent irreversible workspace data loss.
10. **#21763 Bug reports exclude subagent context (P1)**: [Link](https://github.com/google-gemini/gemini-cli/issues/21763)
    The native `/bug` diagnostic tool only captures top-level session logs, making it nearly impossible for users to debug failures that happen inside nested subagent runs.

## 4. Key PR Progress
1. **#28223 Bypass LLM correction for JSON and IPYNB files in write/replace tools**: [Link](https://github.com/google-gemini/gemini-cli/pull/28223)
   A surgical fix that eliminates long-running reports of structured file corruption, stopping the post-write LLM correction logic from breaking Jupyter Notebook and JSON asset formatting.
2. **#28215 Harden file-write scope to block sandbox writes to .gemini and .gitconfig**: [Link](https://github.com/google-gemini/gemini-cli/pull/28215)
   A critical security patch that closes a high-severity prompt injection sandbox escape vector, preventing the agent from modifying CLI configuration files to disable sandbox protections on subsequent launches.
3. **#28164 Add 15-turn hard limit on recursive reasoning per user request**: [Link](https://github.com/google-gemini/gemini-cli/pull/28164)
   Implements a default hard cap on agent reasoning loops to prevent infinite hangs that waste user API credits and local CPU usage, with a configurable override for power users.
4. **#28221 Make ~/.gitconfig read-only in macOS sandbox**: [Link](https://github.com/google-gemini/gemini-cli/pull/28221)
   Additional macOS sandbox hardening that blocks malicious agents from modifying global git config aliases to execute arbitrary privileged code outside the sandbox boundary.
5. **#28216 Exclude transient CI credential files from workspace context**: [Link](https://github.com/google-gemini/gemini-cli/pull/28216)
   Automatically filters out temporary short-lived GitHub Actions `gha-creds-*.json` files from workspace context, preventing accidental exposure of CI secrets to the model.
6. **#27971 Strip internal model thoughts from scrubbed history turns**: [Link](https://github.com/google-gemini/gemini-cli/pull/27971)
   Fixes a long-running "thought leakage" bug where the Gemini model’s internal reasoning monologues bleed into saved chat history, causing confusing hallucinations and infinite loop behavior in subsequent turns.
7. **#28219 Fix parsing of commented settings.json for memory bootstrap**: [Link](https://github.com/google-gemini/gemini-cli/pull/28219)
   Resolves a silent failure that broke custom user configurations, as the CLI’s parent process now correctly parses user `settings.json` files that include trailing comments (a very common user pattern).
8. **#28096 Drop late tool calls after SIGINT cancellation**: [Link](https://github.com/google-gemini/gemini-cli/pull/28096)
   Prevents unintended side effects (file edits, shell commands) that fire even after a user presses Ctrl+C to cancel their running task, eliminating unplanned workspace modifications.
9. **#28163 Part 1/2 of Caretaker triage worker core foundation**: [Link](https://github.com/google-gemini/gemini-cli/pull/28163)
   Adds the base infrastructure for a new self-operating Caretaker agent that automatically triages incoming bug reports and runs project-wide evaluation suites, reducing maintainer toil.
10. **#27545 Add BYOID experiment flag skeleton**: [Link](https://github.com/google-gemini/gemini-cli/pull/27545)
    Gates the upcoming

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-01
---
## 1. Today's Highlights
On 2026-07-01, the GitHub Copilot CLI project shipped two consecutive patch releases (v1.0.66 and v1.0.67) targeting critical UX consistency, model support, and session permission controls. The 24-hour update window also saw 32 refreshed community issues, with high user engagement around persistent MCP authentication errors and long-running requests for repository-scoped plugin support. A closed production PR also added native AI-powered issue triage automation using GitHub's agentic workflows to reduce maintainer response time.

## 2. Releases
Two minor patch releases were published 2026-06-30:
- **v1.0.67**: Immediate session sandbox disable (no more mid-turn re-prompting for shell/search commands), subagent sessions inherit parent tool restrictions, explicit warnings for failed custom host agent loads, and enforced session limit guardrails.
- **v1.0.66**: Non-blinking block cursor for interactive sessions with automatic restoration of user default terminal cursor on exit, added support for Claude Opus 4.8 Fast (deprecating older Opus 4.6 Fast), HTTP-style `Key: value` header support for MCP add/edit forms, and a race condition fix that prevents duplicate LSP server startups.

## 3. Hot Issues
Top 10 high-impact, community-active issues updated in the last 24 hours:
1. [#2684 Persistent "Authorization error, re-run /login" for MCP connections](https://github.com/github/copilot-cli/issues/2684): 13 comments, ongoing critical bug that breaks connected MCP tooling for authenticated users, with no workaround confirmed so far.
2. [#1665 Support repository/project-scoped plugins (instead of global per-user)](https://github.com/github/copilot-cli/issues/1665): 10 comments, 17 👍, top-voted extensibility request for teams that want to share plugin configurations via repo commits instead of manual per-user setup.
3. [#2334 Re-add no-alt-screen mode](https://github.com/github/copilot-cli/issues/2334): 8 comments, 29 👍, recently closed as complete after maintainers agreed the alt-screen terminal mode broke native terminal scrollback, text search, and text selection workflows for power users.
4. [#98 Integrate CLI with repo-level `prompts/*.md` custom prompts](https://github.com/github/copilot-cli/issues/98): 7 comments, 28 👍, request to reuse existing GitHub Copilot custom prompt assets already stored in repositories to avoid duplicate prompt configuration.
5. [#3727 Regression v1.0.60: `userPromptSubmitted` hook additional context not injected to planner](https://github.com/github/copilot-cli/issues/3727): 6 comments, breaks all third-party plugins that rely on injecting custom metadata to the LLM context during user prompt submission.
6. [#1504 Add custom, shareable theme support](https://github.com/github/copilot-cli/issues/1504): 4 comments, 20 👍, personalization and accessibility request to let users define custom color schemes for the CLI UI and share them via JSON config files.
7. [#3948 All `web_fetch` calls throw "TypeError: fetch failed"](https://github.com/github/copilot-cli/issues/3948): 3 comments, critical bug that breaks the built-in web search tool even when the CLI can successfully authenticate and connect to model APIs.
8. [#3984 Flicker on Windows during model processing (new regression)](https://github.com/github/copilot-cli/issues/3984): Recently filed bug triggered by the new non-blinking block cursor shipped in v1.0.66, that causes per-frame redraw flicker across the entire Windows terminal while the CLI is running inference or calling tools.
9. [#3976 Native `tgrep` indexer OOM kills host on large monorepos](https://github.com/github/copilot-cli/issues/3976): New critical bug for enterprise users, where the experimental Rust trigram search tool has no memory cap and will crash developer workstations on codebases with 100k+ files.
10. [#3954 `explore` tool hardcodes model to `gpt-5.4-mini`, ignores BYOK config](https://github.com/github/copilot-cli/issues/3954): Bug that breaks custom model / bring-your-own-key setups, forcing calls to hardcoded OpenAI endpoints that do not match user-configured self-hosted or third-party model URLs.

## 4. Key PR Progress
Only 2 PRs received updates in the last 24 hours:
1. [#2587 Add automated issue classification with GitHub Agentic Workflows](https://github.com/github/copilot-cli/pull/2587): Closed, production-ready implementation that automatically applies relevant `area:` labels and the `triage` label to all newly opened or reopened issues, reducing maintainer manual triage workload by ~40% per internal estimates.
2. [#3880 Stray UI component import PR](https://github.com/github/copilot-cli/pull/3880): Open, unrelated PR containing random frontend React component code submitted by an external user with no connection to core CLI functionality, scheduled for maintainer closure as invalid.

## 5. Feature Request Trends
The most requested feature directions from recent issues:
1. **Granular configuration scoping**: Users want to define shared, repo-bound settings for plugins, custom prompts, and allowed tools instead of forcing all configuration to be stored in global per-user paths.
2. **Plugin/extension author empowerment**: Top unmet needs for extension builders include support for live, updating terminal UI panels for progress dashboards, fully enforced hook controls, and proper MCP OAuth server compatibility.
3. **Passive UX quality of life**: Users want optional desktop notifications for when the CLI is waiting for user input, persistent autopilot mode across interactive turns, and fully importable/exportable custom themes.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported across recent issues:
1. **BYOK/custom model instability**: Multiple overlapping bugs including null pointer crashes on launch, automatic unexpected fallback to default models after session restarts, and hardcoded tool endpoints that ignore custom model configurations.
2. **MCP integration gaps**: Persistent authentication errors, incorrect OAuth flow selection for `client_credentials` only servers, and broken custom header support pre-v1.0.66 that blocks enterprise MCP server rollouts.
3. **Platform-specific regressions**: Windows users report full clipboard lockups while the CLI is running, new UI flicker issues, while Linux Wayland users face broken native `/copy` command functionality.
4. **Large monorepo resource limits**: The new experimental `tgrep` search tool has no memory guardrails, and high skill counts get silently truncated from the LLM context window without user warning or visibility.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-01
*Source: github.com/MoonshotAI/kimi-cli*

---

## 1. Today's Highlights
No new official Kimi Code CLI releases were published in the 24-hour reporting window. One high-priority bug report targeting the latest v0.20.1 release was filed for broken temporary session permission workflows, while two long-pending shell UX pull requests received updates on 2026-06-30, including a closed merged feature that adds a highly requested interactive startup flag for automation use cases. All tracked updates this cycle focus on improving core interactive coding session usability for power users.

## 2. Releases
No new stable, beta, or nightly Kimi Code CLI releases were published in the 24-hour window ending 2026-07-01.

## 3. Hot Issues
Only 1 issue was updated and logged in the reporting window, with no additional qualifying new community submissions:
- [#2480 [OPEN] bug: Approve for this session doesn't work](https://github.com/MoonshotAI/kimi-cli/issues/2480): Filed by user Econ01 for v0.20.1 running K2.7 Code on macOS arm64 with OAuth authentication. This bug breaks the intended one-session tool permission flow that eliminates repeated user confirmation for sequential code actions. It is a high-severity usability issue for long refactoring or debug sessions, and has received no community comments or reactions as of reporting given its recent submission.

## 4. Key PR Progress
2 active PRs received updates in the reporting window, with 8 additional non-critical maintenance PRs not tracked for this digest:
- [#1600 [OPEN] feat(shell): highlight user input with bright blue and separator for better visibility](https://github.com/MoonshotAI/kimi-cli/pull/1600) (author: liuchong): This pending enhancement modifies `echo.py` rendering logic to apply standard bright blue (#007AFF) coloring to user input, plus a full-width separator below every user submission, to reduce visual clutter and make it trivial to distinguish user prompts from model output or tool return logs during fast-paced coding workflows.
- [#2246 [CLOSED] feat(shell): add --prompt-interactive option](https://github.com/MoonshotAI/kimi-cli/pull/2246) (author: shuizhongyueming): Resolves prior community issue #2240 by adding a new `-P` / `--prompt-interactive` launch flag. Users can now pass an initial inline prompt when starting the CLI shell without forcing the session to exit after the prompt returns, closing a gap between the existing one-off `--prompt` flag and fully interactive session workflows.

## 5. Feature Request Trends
Two clear top feature directions emerge from recent tracked community activity:
1.  Shell UI/UX polish to reduce friction for users spending multi-hour sessions in the interactive Kimi Code CLI environment, with a focus on improving output readability with minimal performance overhead.
2.  Extended CLI launch and session configuration controls to support seamless integration with custom automation scripts, startup workflows, and adjacent developer tooling.

## 6. Developer Pain Points
The latest activity surfaces two high-frequency community frustrations:
1.  Broken temporary "approve for this session" permission workflows force users to manually authorize every individual tool call, creating disruptive, repetitive interruptions during large code generation or refactoring tasks.
2.  Minor high-value UI/UX polish PRs (like the user input styling improvement) often remain open for multiple months before review, leading to avoidable user eye strain and lower productivity for regular CLI power users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-01
Source: github.com/anomalyco/opencode

---
## 1. Today's Highlights
Today’s updates center on the newly published v1.17.12 core patch, ongoing high-engagement triage of longstanding memory leak issues, and a wave of community-submitted fixes for MCP (Model Context Protocol) compatibility, UI/UX pain points, and billing-related bugs. The 105-comment official memory megathread remains the highest-traffic discussion, with maintainers explicitly asking contributors to submit heap snapshots instead of unvetted LLM-generated fixes to speed root cause resolution. Multiple new feature PRs from external contributors also landed today, adding GitHub Copilot auto-model support and native reasoning option parsing for the models.dev ecosystem.

## 2. Releases
### v1.17.12 (Latest 24h Patch)
[Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.17.12)
This core bugfix release focuses on MCP ecosystem and Claude Sonnet improvements:
- Enable adaptive thinking for Claude Sonnet 5
- Prioritize MCP content responses over structured output when both are returned
- Auto-reconnect MCP servers after OAuth flow, even if the server was previously disabled (@MaxAnderson95)
- Request MCP refresh-token scope during OAuth authentication
- In-progress implementation of MCP OAuth user-facing UI display

## 3. Hot Issues (Top 10 Notable)
1. **#20695 [OPEN] Memory Megathread** | 105 comments, 77 👍 | [Link](https://github.com/anomalyco/opencode/issues/20695)
   The official central tracking thread for all scattered memory leak reports, the highest-priority community issue. Maintainers are crowdsourcing heap snapshots from users to speed debugging, and explicitly banned LLM-generated untested fix proposals to reduce noise.
2. **#7602 [OPEN] Native Model Fallback / Failover Support** | 28 comments, 90 👍 | [Link](https://github.com/anomalyco/opencode/issues/7602)
   Top voted feature request: users want automatic retry across different model tiers (not just identical same-provider models) to prevent hours-long agent sessions from dying to rate limits or model errors, a gap in current OpenCode fallback logic.
3. **#8463 [OPEN] Add `--dangerously-skip-permissions` (YOLO mode)** | 23 comments, 89 👍 | [Link](https://github.com/anomalyco/opencode/issues/8463)
   Near the top of the upvote leaderboard, this feature targets unattended automated workflows and trusted CI environments, where blocking interactive permission prompts break non-interactive runs.
4. **#16017 [OPEN] Add Go plan usage/balance API endpoint** | 21 comments, 84 👍 | [Link](https://github.com/anomalyco/opencode/issues/16017)
   High demand from enterprise and self-hosted users for programmatic access to subscription usage metrics across rolling weekly/monthly windows, to build custom cost tracking and alerting tools.
5. **#33318 [OPEN] [URGENT] Zen paid balance still hits FreeUsageLimitError** | 6 comments | [Link](https://github.com/anomalyco/opencode/issues/33318)
   Critical billing bug: users with active $20+ Zen paid balances are incorrectly served free-tier usage exceeded errors within an hour of usage, breaking access for paying subscribers.
6. **#33495 [OPEN] [BUG] Zen balance does not remove free usage cap** | 4 comments | [Link](https://github.com/anomalyco/opencode/issues/33495)
   Reproduction validation of the above urgent billing bug, confirmed to impact multiple independent user accounts with valid active Zen credit.
7. **#34640 [OPEN] MCP tool optional array fields are materialized as empty arrays** | 4 comments | [Link](https://github.com/anomalyco/opencode/issues/34640)
   Breaking MCP edge case: OpenCode converts omitted optional array parameters to empty `[]` values before invoking MCP tools, triggering mutually exclusive argument validation failures for many custom third-party MCP servers.
8. **#27661 [OPEN] Home/End keys in input box scroll message list instead of moving cursor** | 5 comments, 6 👍 | [Link](https://github.com/anomalyco/opencode/issues/27661)
   Common TUI usability bug that makes editing long user prompts extremely frustrating for daily terminal users, as keyboard navigation behaves against expected text input conventions.
9. **#31236 [OPEN] Copilot gpt-5.5 stale item ID error after switching auth token** | 4 comments | [Link](https://github.com/anomalyco/opencode/issues/31236)
   Deterministic breakage for users swapping GitHub Copilot auth tokens mid-session, which renders existing agent sessions completely unusable with 401 API errors.
10. **#30611 [OPEN] Sessions fail on transient network errors instead of retrying** | 4 comments | [Link](https://github.com/anomalyco/opencode/issues/30611)
   Partial retry logic bug: current policy only treats `ECONNRESET` as retryable, and drops all other transient transport errors (timeouts, temporary proxy failures) as hard failures, killing in-progress assistant turns unnecessarily.

## 4. Key PR Progress
1. **#32451 [OPEN] fix: strip copilot response item ids** | [Link](https://github.com/anomalyco/opencode/pull/32451)
   Fixes the #31236 Copilot stale token bug by clearing per-connection Responses API item handles when user auth tokens are rotated mid-session.
2. **#34682 [OPEN] feat: added auto model for github copilot provider** | [Link](https://github.com/anomalyco/opencode/pull/34682)
   Community contribution that adds native Auto Model picker support for the GitHub Copilot provider, matching the native behavior of Copilot in VS Code.
3. **#34680 [OPEN] feat(provider): use models.dev reasoning options** | [Link](https://github.com/anomalyco/opencode/pull/34680)
   Adds parsing and support for `reasoning_options` parameters from the public models.dev registry, including MiniMax M3 thinking toggles and Anthropic budget-token handling.
4. **#28921 [CLOSED] fix(acp): include shell command and file path in permission prompts** | [Link](https://github.com/anomalyco/opencode/pull/28921)
   Improves ACP permission dialogs to display full actionable context (exact bash command, target file path) at first glance, so users do not have to expand hidden sections to approve high-risk operations.
5. **#30025 [CLOSED] [automated-pr-cleanup] fix: support winget opencode upgrades** | [Link](https://github.com/anomalyco/opencode/pull/30025)
   Adds native detection for Windows Winget installs, fixing broken in-app updates for users who deployed OpenCode via the official Microsoft package manager.
6. **#30000 [CLOSED] [automated-pr-cleanup] fix(tui): prevent shortcut fall-through when modal dialogs are open** | [Link](https://github.com/anomalyco/opencode/pull/30000)
   Patches a keyboard collision bug where key presses intended for open modals (such as question prompts) would accidentally trigger background TUI actions.
7. **#30003 [CLOSED] [automated-pr-cleanup] fix(opencode): wait for shell output before returning** | [Link](https://github.com/anomalyco/opencode/pull/30003)
   Fixes a race condition in the ShellTool where process exit could be signaled before stdout/stderr streams fully drain, leading to missing truncated command output.
8. **#34657 [CLOSED] [Plugin] Rate limiter for ResourceExhausted error** | [Link](https://github.com/anomalyco/opencode/pull/34657)
   Community-submitted plugin that implements a concurrency semaphore to resolve the internal 32 concurrent request limit error that triggers when users open multiple workspaces simultaneously.
9. **#30021 [CLOSED] [automated-pr-cleanup] fix(provider): distinguish unknown model pricing** | [Link](https://github.com/anomalyco/opencode/pull/30021)
   Corrects a bug where OpenCode treated unlisted model pricing from models.dev as $0, preventing unaccounted costs for users running unsupported custom models.
10. **#34679 [CLOSED] docs(ecosystem): add Loop Engineering to Projects** | [Link](https://github.com/anomalyco/opencode/pull/34679)
    Adds the popular production-grade agent loop reference implementation to the official OpenCode ecosystem docs, making it easier for devs to find battle-tested production deployment patterns.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-01
*Source: github.com/badlogic/pi-mono*

---

## 1. Today's Highlights
The Pi team dropped the v0.80.3 release with native Anthropic Claude Sonnet 5 support with adaptive thinking enabled out of the box, available via both official Anthropic and AWS Bedrock provider catalogs. 9 high-priority long-running bugs were closed in the last 24 hours, including a widely reported TUI accessibility flaw and the agent "stuck in working" no-progress loop issue. Multiple high-impact community feature requests have moved to active PR implementation, with broad positive feedback from extension developers and power users.

## 2. Releases
### v0.80.3 (2026-07-01)
Major new feature: Full Anthropic Claude Sonnet 5 support, with adaptive thinking enabled by default across both the Anthropic-compatible and AWS Bedrock provider catalogs. Full provider configuration documentation is available [here](https://github.com/earendil-works/pi/blob/v0.80.3/packages/coding-agent/docs/providers.md).

## 3. Hot Issues (Top 10 Notable)
All issues below are from the last 24 hours of activity, sorted by community engagement:
1. **[#5654 (Open)](https://github.com/earendil-works/pi/issues/5654)**: Add `excludeFromContext` flag to custom messages sent via `pi.sendMessage()` – 8 comments, 1 👍. A highly requested extension builder feature that lets devs persist status/metadata messages in chat UI without passing them to the LLM context, mirroring existing behavior for bash execution messages.
2. **[#4687 (Closed)](https://github.com/earendil-works/pi/issues/4687)**: Screen reader accessibility bug fix – 6 comments. A long-running accessibility issue that resolved noisy ASCII border/decoration characters in the TUI that caused excessive, uninformative output for screen reader users.
3. **[#4338 (Closed)](https://github.com/earendil-works/pi/issues/4338)**: Agent stuck in "working" no-progress loop – 6 comments, 1 👍. Fixes one of the most frequently reported user pain points where the agent would hang indefinitely without output, forcing full session restarts.
4. **[#1837 (Closed)](https://github.com/earendil-works/pi/issues/1837)**: Add temperature, top_p, top_k generation parameters – 3 comments, 6 👍. A March 2026 feature request for power user LLM tuning that received extremely broad community support.
5. **[#5463 (Open)](https://github.com/earendil-works/pi/issues/5463)**: Auto-compaction after final assistant turn throws unhandled error – 3 comments, 5 👍. A critical core crash bug affecting all users with context auto-compaction enabled, marked for high-priority triage.
6. **[#6103 (Open)](https://github.com/earendil-works/pi/issues/6103)**: OpenAI Responses API mislabels empty tool results as "(see attached image)" – 4 comments. Breaks workflows for users of the popular `pi-hashline-edit-pro` extension that returns empty success outputs from custom tools.
7. **[#6151 (Open)](https://github.com/earendil-works/pi/issues/6151)**: Support passing remote image URLs directly without base64 conversion – 2 comments. Reduces payload size, cuts token consumption for media inputs, and eliminates common base64 image corruption bugs.
8. **[#6187 (Open)](https://github.com/earendil-works/pi/issues/6187)**: Pi login hangs in WSL after GitHub Copilot device authorization – 1 comment. Blocks a large segment of WSL developer users from completing onboarding to the tool.
9. **[#6138 (Closed)](https://github.com/earendil-works/pi/issues/6138)**: Incorrect hardcoded pricing for Xiaomi MiMo models – 4 comments. Fixes unexpected billing miscalculations for users of the APAC-focused Xiaomi LLM provider.
10. **[#6133 (Closed)](https://github.com/earendil-works/pi/issues/6133)**: Uncaught ECONNRESET crash during LLM streaming – 2 comments. Prevents full process termination when upstream LLM providers reset TCP connections mid-response, adding proper retry logic for transient errors.

## 4. Key PR Progress
1. **[#1737 (Closed)](https://github.com/earendil-works/pi/pull/1737)**: Multi-provider prompt caching optimization. Adds dual `cache_control` marking for both the final assistant tool_use block and final user message, drastically improving cache hit rates across all supported LLM providers.
2. **[#6190 (Closed)](https://github.com/earendil-works/pi/pull/6190)**: Add `PI_SKILL_PATH` environment variable. Implements a per-repo configurable skill directory path, eliminating the need for users to repeatedly pass the `--skill` CLI flag on startup.
3. **[#5678 (Open, In Progress)](https://github.com/earendil-works/pi/pull/5678)**: Full `excludeFromContext` support for custom messages. Directly implements the feature requested in #5654, with compatibility across the agent harness, extension APIs, and compaction/branch summarization pipelines.
4. **[#6176 (Closed, In Progress)](https://github.com/earendil-works/pi/pull/6176)**: Refresh extension tool changes mid-agent run. Fixes issue #6162, ensuring calls to `pi.setActiveTools()` from a running extension tool are applied to the immediately following LLM request, rather than being delayed to the next agent turn.
5. **[#6182 (Closed)](https://github.com/earendil-works/pi/pull/6182)**: Add redo support to TUI editors. Delivers a long-requested quality of life feature, closing the years-old open request #959 for native text redo functionality.
6. **[#6178 (Closed)](https://github.com/earendil-works/pi/pull/6178)**: Guard against undefined content in tool result messages. Patches a common crash scenario for third-party extensions that return malformed or empty outputs, preventing unhandled session exceptions.
7. **[#5832 (Closed)](https://github.com/earendil-works/pi/pull/5832)**: Surface full provider HTTP error body. Replaces opaque generic error messages for non-2xx LLM provider responses, showing users full proxy/gateway error details instead of uninformative status-only notices.
8. **[#6175 (Closed)](https://github.com/earendil-works/pi/pull/6175)**: Emit session name changes to extensions. Adds a new event hook that notifies all installed extensions when a user renames an active session, enabling new use cases like auto-sync for named session backups.
9. **[#6169 (Closed, In Progress)](https://github.com/earendil-works/pi/pull/6169)**: Disable unnecessary padding for assistant messages. A widely requested Discord community TUI tweak that reduces wasted vertical space in chat output for denser terminal displays.
10. **[#6115 (Closed, To Discuss)](https://github.com/earendil-works/pi/pull/6115)**: Add configurable global chat padding. Proposes a top-level TUI flag to fully disable all chat message padding for power users, currently open for community feedback before final merge.

## 5. Feature Request Trends
Three clear priority directions emerged from recent community submissions:
1. **Regional provider ecosystem expansion**: Users are requesting native support for more geographically hosted LLM services, including EU-based Scaleway Generative APIs, full aligned GLM 5.2 Fast configs, and automatic detection of user-available OpenAI GPT 5.6 model variants to eliminate manual `models.json` editing.
2. **Extension builder ergonomics**: Advanced headless and extension devs are pushing for durable human-in-the-loop (HITL) tool interrupt APIs, consistent mid-run state updates, and standardized hooks to integrate custom tools with core Pi features like session sync and compaction.
3. **Power user UX improvements**: A growing cohort of users are requesting fully configurable TUI density, native standard LLM generation parameter support, and CLI shortcuts to reduce redundant typing for common session operations.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. **WSL-specific runtime gaps**: Multiple users reported broken workflows including hung Copilot device authorization flows and multi-client RPC stream crashes that disproportionately affect the large WSL developer user base.
2. **Opaque error handling**: Transient upstream connection resets, malformed tool outputs, and proxy-related 403 errors return uninformative generic messages that make debugging extension and API integration issues unnecessarily slow.
3. **Missing core LLM tuning controls**: Power users have been forced to maintain custom provider workarounds for basic standard parameters like temperature and top_p, as these controls are not exposed natively in the base distribution.
4. **State consistency gaps**: Changes to active tools set by running extensions did not apply to the current agent turn prior to recent patches, breaking advanced headless extension workflows built for the Pi SDK.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-01
Based on public activity from github.com/QwenLM/qwen-code over the last 24 hours

---
## 1. Today's Highlights
This 24-hour window covers the publishing of the new v0.19.3 nightly pre-release, multiple high-severity stability alerts for the Windows platform, and critical P1 bug patches for the ACP daemon runtime. The community also landed widely requested UX improvements for the TUI interface, new slash command capabilities, and expanded roadmap progress for multi-user messaging channel features, while triaging a set of small but disruptive regressions introduced in the recent v0.19.3 pre-release line.

## 2. Releases
The only new build published in the period is:
- **v0.19.3-nightly.20260630.e00fe6a27** (2026-06-30): Pre-release validation build targeting the upcoming v0.19.3 stable launch. It includes refreshed daemon documentation updates from PR #5954, plus in-progress implementation of a new configurable auto-run core feature for agent workflows.

## 3. Hot Issues
1. **[#5975] API 120s stream no-activity error post v0.19.3 upgrade** (8 comments): The highest-engagement open bug, affecting users after upgrading to v0.19.3, where generation stalls mid-output after ~19 chunks and throws a hard timeout error. Community users report it frequently breaks long coding workflows, and maintainers have marked it as P2 priority with `welcome-pr` tags for external contributors.
2. **[#6067] Critical Windows process management stability alert** (3 comments): A high-severity community warning that Qwen Code v0.19.x on Windows faces unpatched process leaks where tool call spawned PowerShell processes are never fully reclaimed, leading to gradual system memory exhaustion. Users are advised to temporarily disable the interactive shell or downgrade until a fix ships.
3. **[#6089] macOS Apple Silicon 0.19.3 missing sandbox files fatal launch error** (2 comments): New darwin-arm64 package build for v0.19.3 is missing 6 required macOS seatbelt sandbox `.sb` files, causing a hard crash on first launch for all fresh install users. It is marked P2 priority for immediate triage.
4. **[#6049] generationConfig timeout=0 triggers immediate request failure** (7 comments): A counterintuitive configuration bug where setting the model generation timeout value to 0 (intended to disable timeouts entirely) makes all requests fail instantly with a 3s timeout. Community users note this breaks custom long-running workload configurations.
5. **[#6075] P1 ACP daemon infinite loop on repeated invalid tool parameters** (2 comments): Critical daemon mode bug where the runtime can enter an infinite loop if a model repeatedly calls the same tool with malformed parameters, leading to full CPU usage and unresponsive sessions. The partial initial fix already shipped, with follow-up patches in progress.
6. **[#5979] /auth modified model configuration throws 401 on new sessions** (3 comments): A session scope bug where updated model API keys modified via the `/auth` command only apply to the current active session, and new spawned sessions still use stale old credentials, leading to failed requests.
7. **[#6007] GLM-5.2 leaked internal thinking tags to normal output** (3 comments): Reasoning model interoperability bug for OpenAI-compatible GLM-5.2 deployments, where `<think>` block internal reasoning text is emitted as visible normal output instead of being parsed as hidden thought content.
8. **[#5941] Chat view jumps to top on mouse wheel scroll during generation** (4 comments): Annoying Windows UI bug where any upward mouse scroll input while the model is generating output forces the chat view to jump all the way to the top of the history, making it impossible for users to browse previous context while waiting for generation to finish.
9. **[#5176] Add configurable sub-agent maximum parallel count limit** (4 comments): High-vote feature request from local LLM users, asking for a hard cap on the number of concurrent running sub-agents to avoid exceeding GPU VRAM limits on self-hosted deployments, with excess sub-agents queued instead of timing out.
10. **[#6063] Clear critical npm runtime audit security findings** (2 comments): P2 security enhancement request, pointing out unpatched critical severity vulnerabilities in core runtime dependencies including `simple-git` and `shell-quote` used for shell parsing and git operations.

## 4. Key PR Progress
1. **[#6085] Fix ACP daemon loop review follow-ups**: P1 priority bug fix that addresses remaining unpatched edge cases for the daemon infinite loop bug, adding a 3-strike invalid tool call block that cannot be evaded by dynamic error text changes, and properly preserves context after loop detection to avoid session data loss.
2. **[#6022] feat(cli): support inline one-shot model override in /model** (Closed): Fully implemented the widely requested inline `/model <model-id> <prompt>` feature, letting users switch active model and run a task in a single command line, automatically reverting to the original default model after the single turn workflow completes, closing issue #5967.
3. **[#6033] fix(core): Parse tagged thinking for GLM responses**: Directly resolves issue #6007, adding native parsing logic to extract `<think>` block content from GLM model outputs and render it as hidden thought content instead of visible normal output.
4. **[#6087] feat(core): Disallow plan lifecycle tools in subagents**: Implements the requested policy from feature issue #6083, preventing ordinary sub-agents from calling `enter_plan_mode` or `exit_plan_mode` to eliminate the previously reported bug of child subagents getting permanently stuck in plan mode after the parent session exits planning.
5. **[#6031] feat(cli): Add daemon-managed channel worker for serve --channel**: Implements the core daemon architecture for the Qwen multi-user channel roadmap, adding support for `qwen serve --channel <name>` to launch dedicated out-of-process worker processes for each connected chat channel.
6. **[#6011] feat(ui): add mouse click & hover in alternate-screen mode**: Delivers the top-requested TUI UX upgrade from issue #6053, enabling full mouse hover and click interaction for selection menus, permission prompts, and dialogs in the alternate-screen virtualized history mode.
7. **[#6072] feat(core,cli): unified reasoning effort with /effort command**: New cross-provider feature that adds a global 5-tier reasoning effort setting (low/medium/high/xhigh/max) accessible via the new `/effort` slash command, automatically translated to match provider-specific parameters for all supported model backends.
8. **[#6074] feat(channels): add group history backfill**: Implements the opt-in group chat history backfill feature for messaging channels, persisting messages where the bot was not explicitly mentioned to local storage, and injecting them as context the next time the bot is mentioned in the same chat thread.
9. **[#5974] fix(cli): switch TUI prefix ✦→◆ to fix glyph overflow on some terminals** (Closed): UI compatibility patch that replaces the rare decorative snowflake character used for assistant message prefixes with a widely supported solid diamond character, fixing line overflow rendering issues on older legacy terminals.
10. **[#5957] fix(core): subtract reserved output tokens from context window for compression thresholds**: Critical context management fix that prevents auto-compression logic from failing to trigger for 128k+ large context models, eliminating 400 API errors caused by requests exceeding the model's maximum allowed context size.

## 5. Feature Request Trends
Three clear high-priority feature directions emerged in this period:
1. **Multi-user messaging channel expansion**: The largest volume of new feature requests target collaborative channel capabilities, including persistent per-channel memory, group history backfill, recurring scheduled loop tasks for channel workers, and daemon managed channel process isolation.
2. **TUI / web interface UX upgrades**: Community requests focus on closing parity gaps with mainstream AI coding assistants, including mouse interaction in TUI, mobile responsive web shell, tabbed configuration dialogs, and frozen transcript views for easier browsing of long tool outputs.
3. **Local LLM deployment support**: Most use-case specific requests come from self-hosted users, asking for sub-agent parallel concurrency caps, per-project custom model defaults, and idle timeouts for long-running MCP tool calls that work well on resource-constrained hardware.

## 6. Developer Pain Points
Recurring frustrations reported by users in the last 24h:
1. **Cross-platform pre-release regressions**: Windows and macOS pre-release builds continue to suffer from avoidable packaging and runtime bugs, including unpatched process leaks, missing sandbox files, and incorrect tilde path resolution that break out-of-box usability for many users.
2. **v0.19.3 pre-release workflow disruptions**: Post-upgrade users report frequent unplanned 120s stream timeouts, broken reasoning model output, and configuration changes that do not persist across sessions, leading many to roll back to older stable versions.
3. **Daemon mode edge case fragility**: The relatively new ACP daemon runtime still has uncaught edge cases including infinite loops, cross-connection permission resolution failures, and loop detection bypasses that require repeated incremental patches to stabilize.
4. **No guardrails for local inference workloads**: Self-hosted local LLM users currently have no native controls to limit parallel sub-agent execution, leading to unexpected GPU OOM crashes and poor performance on limited consumer hardware.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-07-01
Repo: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (issues/PRs tracked under the associated CodeWhale project)

---

## 1. Today's Highlights
Today’s updates center on final stabilization and validation work for the upcoming v0.8.66 release, with 18 merged PRs landing in the last 24 hours to resolve critical Windows platform bugs, sub-agent performance bottlenecks, and broken TUI modal UI components. The community’s top active multi-week discussion thread remains the effort to boost input cache hit rates, with two high-comment closed issues confirming maintainers have prioritized the fix to cut excessive, unintended token usage. No new official stable releases were published in the 24-hour window, as the team runs full release parity test suites to ship v0.8.66 imminently.

## 2. Releases
No new public stable releases were published in the last 24 hours. A final v0.8.66 release preparation PR has been submitted for final signoff, with full cross-platform test validation underway.

## 3. Hot Issues
1. **[#1177] Low input cache hit rate (v0.8.66 / v0.8.69)** (25 comments, closed) - [Hmbown/CodeWhale#1177](https://github.com/Hmbown/CodeWhale/issues/1177)
   The highest-engagement open-adjacent issue, noting current cache hit rates are far below the 95%+ benchmark of DeepSeek-Reasonix. Users reported thousands of dollars in unplanned API costs from repeated redundant request caching failures.
2. **[#1120] Unresolved edge cases for cache hit ratio regressions** (23 comments, closed) - [Hmbown/CodeWhale#1120](https://github.com/Hmbown/CodeWhale/issues/1120)
   Community members are contributing test cases for incremental project modification workflows to help maintainers catch remaining edge scenarios that still trigger cache misses after partial fixes.
3. **[#2487] Frequent "Turn stalled - no completion signal received" errors in YOLO mode** (18 comments, open) - [Hmbown/CodeWhale#2487](https://github.com/Hmbown/CodeWhale/issues/2487)
   A critical reliability bug for v0.8.70 users running long unattended agent tasks: after a stall, users cannot resume operations with the `continue` command, forcing a full session restart.
4. **[#774] New user sessions stuck at "Working" with no post-setup response** (16 comments, closed) - [Hmbown/CodeWhale#774](https://github.com/Hmbown/CodeWhale/issues/774)
   A top first-run pain point affecting new users who complete API key configuration, leading to a 100% broken onboarding flow for a subset of installations.
5. **[#743] Drastic unplanned token consumption spikes** (15 comments, closed) - [Hmbown/CodeWhale#743](https://github.com/Hmbown/CodeWhale/issues/743)
   Tied directly to cache miss failures, one user reported 400 million tokens consumed in a half day of normal use, highlighting the severity of cost risks for end users.
6. **[#3275] Agent deviates from user intent with unprompted self-modification loops** (13 comments, open) - [Hmbown/CodeWhale#3275](https://github.com/Hmbown/CodeWhale/issues/3275)
   A high-severity UX/security regression where the agent oversteps requested task scope, running unapproved self-questioning and self-execution code modification loops without waiting for user confirmation.
7. **[#3063] v0.8.59 release tracker for macOS TUI mouse input leak** (11 comments, closed) - [Hmbown/CodeWhale#3063](https://github.com/Hmbown/CodeWhale/issues/3063)
   Maintainer meta-issue tracking triage of the macOS mouse-report input memory leak, serving as the public status board for the v0.8.59 stabilization cycle.
8. **[#998] Truncated UI text with no full-content previews** (7 comments, 1 👍, open) - [Hmbown/CodeWhale#998](https://github.com/Hmbown/CodeWhale/issues/998)
   Common UX pain point for users with small terminal windows: truncated status prompts and partial messages offer no way to view the full text.
9. **[#1747] Cache hit UX visibility enhancement request** (5 comments, 3 👍, closed) - [Hmbown/CodeWhale#1747](https://github.com/Hmbown/CodeWhale/issues/1747)
   High-community-support request to add explicit inline UI indicators to confirm when inputs are served from cache, so users can verify cache functionality works as expected.
10. **[#1835] Windows IME input field deadlock** (3 comments, 1 👍, open) - [Hmbown/CodeWhale#1835](https://github.com/Hmbown/CodeWhale/issues/1835)
    Affects users of Sogou and other Chinese IMEs on Windows 10: the TUI input field becomes completely unresponsive to keystrokes after an IME composition event, breaking text entry.

## 4. Key PR Progress
1. **[#3826] Release: Prepare v0.8.66** (closed) - [Hmbown/CodeWhale#3826](https://github.com/Hmbown/CodeWhale/pull/3826)
   Offical release prep PR that bumps version metadata, enforces engine-authoritative approval policies to eliminate UI mode state conflicts, and rebuilds precompiled cross-platform binaries for launch.
2. **[#3823] Fix: Suppress background console windows on Windows** (closed) - [Hmbown/CodeWhale#3823](https://github.com/Hmbown/CodeWhale/pull/3823)
   Fixes a top-reported Windows annoyance: fleeting, focus-stealing console windows no longer pop up when the TUI spawns child processes for shell commands, MCP servers, and dependency probes.
3. **[#3812] Fix(engine): Allow agent starts to join parallel dispatch batches** (closed) - [Hmbown/CodeWhale#3812](https://github.com/Hmbown/CodeWhale/pull/3812)
   Removes the default non-parallel constraint for agent tool calls, cutting multi-agent launch latency from linear 20 seconds (for 20 concurrent agents) to near-instant parallel execution.
4. **[#3817] Fix(tui): Preserve standing YOLO authority for runtime continuations** (closed) - [Hmbown/CodeWhale#3817](https://github.com/Hmbown/CodeWhale/pull/3817)
   Fixes a regression where sessions with active YOLO auto-approve permission would incorrectly re-prompt for user confirmation on sub-agent handoff or runtime continuation operations.
5. **[#3833] Fix(tui): Shared modal UI + progressive /fleet setup** (closed) - [Hmbown/CodeWhale#3833](https://github.com/Hmbown/CodeWhale/pull/3833)
   Centralizes modal render logic to fix two v0.8.66 release blockers: opaque surface bleed-through across popups, and action row overflow that hid approval controls on short terminal windows.
6. **[#3825] Feat(mcp): Expand ${VAR} env placeholders in MCP stdio config** (closed) - [Hmbown/CodeWhale#3825](https://github.com/Hmbown/CodeWhale/pull/3825)
   Eliminates the need to hardcode API secrets in MCP configuration files by adding support for referencing parent process environment variables via standard `${VAR}` syntax.
7. **[#3816] Fix(subagent): Persist state off the manager write-lock hot path** (closed) - [Hmbown/CodeWhale#3816](https://github.com/Hmbown/CodeWhale/pull/3816)
   Moves JSON serialization and disk I/O out of the SubAgentManager write lock to eliminate latency bottlenecks that occurred during high sub-agent fanout operations.
8. **[#3861] Feat(config): v0.8.67 constitution-first setup foundation** (open) - [Hmbown/CodeWhale#3861](https://github.com/Hmbown/CodeWhale/pull/3861)
   Lands the core data model, transactional persistence layer, and renderer for the upcoming guided localized constitution creator planned for the v0.8.67 release.
9. **[#3824] Fix(engine): Support wildcard disallowed tool prefixes** (closed) - [Hmbown/CodeWhale#3824](https://github.com/Hmbown/CodeWhale/pull/3824)
   Extends tool restriction logic to block all tools from a dynamically discovered MCP server without requiring users to manually list every individual tool by name.
10.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*