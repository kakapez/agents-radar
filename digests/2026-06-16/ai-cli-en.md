# AI CLI Tools Community Digest 2026-06-16

> Generated: 2026-06-15 23:45 UTC | Tools covered: 9

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

# 2026-06-16 AI Developer CLI Tools Cross-Tool Comparison Report
*For technical decision-makers and developer teams evaluating production-grade AI agent tooling*

---

## 1. Ecosystem Overview
As of mid-June 2026, the AI developer CLI ecosystem has moved past early-stage demo functionality to focus on production-grade, workflow-aligned features for professional engineering teams. The 9 tracked tools are converging on shared interoperability standards, with Model Context Protocol (MCP) integration now a baseline requirement for new releases. Active development has shifted away from incremental chat UX tweaks to resolving long-standing pain points for unattended multi-agent execution, cross-platform compatibility, and enterprise compliance. Both closed-source ecosystem-native tools and fully open source alternative distributions are seeing equal high user adoption, with clear segmentation across regional use cases, self-hosted workloads, and regulated enterprise deployment requirements. Current release cadences indicate the category is rapidly maturing beyond experimental status for mainstream developer team use.

---

## 2. Activity Comparison
| Tool Name               | Updated Issues in 24h Window | Updated PRs in 24h Window | Release Status Today |
|-------------------------|-------------------------------|---------------------------|----------------------|
| Claude Code (Anthropic) | 10                            | 10                        | v2.1.178 stable released |
| OpenAI Codex            | 10                            | 10                        | Rust v0.140.0 stable released |
| Gemini CLI (Google)     | 10                            | 10                        | No new public release |
| GitHub Copilot CLI      | 10                            | 1 (draft test PR excluded) | v1.0.63-0 stable released |
| Kimi Code CLI (Moonshot) | 3                            | 2                         | No new public release |
| OpenCode (Anomalyco)    | 10                            | 10                        | No new public release |
| Pi (badlogic/earendil)  | 10                            | 8                         | v0.79.4 stable released |
| Qwen Code (Alibaba)     | 10                            | 10                        | v0.18.1 Core CLI + desktop-v0.0.4 stable released |
| DeepSeek TUI            | 10                            | 10                        | No new public release (upcoming v0.8.59 stabilization) |

---

## 3. Shared Feature Directions
High-priority user requirements observed across 3+ tool communities:
1. **Granular least-privilege execution policies**: Requested by Claude Code, DeepSeek TUI, OpenAI Codex, and Copilot CLI. Teams are asking for typed, scoped permission rules for subagents that eliminate repeated confirmation prompts, enforce enterprise compliance for regulated environments, and restrict agents from accessing files outside the active working directory.
2. **MCP standard parity and hardening**: Required by all 9 tracked tools, with specific pain points including broken MCP OAuth flows for enterprise IDPs (Entra ID), missing alignment to the 2026 MCP official specification, and support for persistent MCP tooling even when global search mode is enabled.
3. **Cross-platform WSL interoperability**: A top pain point for Claude Code, OpenAI Codex, Pi, Kimi CLI, and DeepSeek TUI. Users report widespread path mangling, broken symlink handling, and incorrect sandbox permission logic that breaks workflow continuity for teams running mixed Windows + WSL 2 deployments.
4. **Unattended multi-agent reliability**: Prioritized by Claude Code, Gemini CLI, Qwen Code, Codex, and DeepSeek TUI. Core requirements include checkpoint/resume support for long-running tasks, no silent session restarts after context compaction, and bounded, user-visible retry logic for transient network failures.
5. **Expanded BYOK (Bring Your Own Key) support**: Requested by Copilot CLI, Pi, Qwen Code, and DeepSeek TUI. Users want native in-TUI switching between multiple custom self-hosted LLM endpoints, no hardcoded max token limits that ignore native model context windows, and support for custom auth headers for private inference deployments.
6. **Deep native IDE integration**: A top request for Claude Code, Codex, Copilot CLI, and OpenCode. Users are asking for native VS Code / Visual Studio 2026 integration, side-by-side diff previews for agent edits, and full parity with GitHub Copilot's inline editing UX.

---

## 4. Differentiation Analysis
Tools fall into three clear strategic segments with distinct priorities:
1. **Ecosystem-native closed-source tools (Claude Code, Codex, Copilot CLI)**: Feature focus is first-class enterprise SSO, official first-party MCP support, and deep native integration with parent platform ecosystems (Anthropic Opus models, OpenAI GPT series, GitHub Copilot chat). Target users are large enterprise engineering teams, with a technical approach tightly coupled to parent backend model stacks, prioritizing security fixes and reliability over customizability.
2. **Regional user-focused tools (Kimi Code CLI, Qwen Code, DeepSeek TUI)**: Feature focus is broad support for regional domestic inference platforms (Zhipu AI, SiliconFlow, DeepInfra), simplified self-hosted deployment, and localized UX for Chinese language users. Technical approach is lightweight, TUI-first builds optimized for low resource usage, with fast turnaround for regional user-reported bugs.
3. **Independent open source tools (Gemini CLI, OpenCode, Pi)**: Feature focus is maximum extensibility, fully transparent agent runtime behavior, and sandboxing hardening for security sensitive use cases. Target users are open source developers and power users who heavily customize their agent workflows, with technical design supporting 10+ third party LLM providers and dedicated pipelines for community contributed features.

---

## 5. Community Momentum & Maturity
- **Highest maturity and largest active user bases**: Claude Code, OpenAI Codex, Qwen Code. Top feature requests for these tools attract >350 upvotes, with 10+ active PR/issue updates per 24h window and regular stable release cadences. They have well-established enterprise user feedback loops and broad adoption among professional engineering teams.
- **Fast-growing mid-maturity communities**: GitHub Copilot CLI, OpenCode, DeepSeek TUI. Copilot CLI leverages GitHub's existing 10M+ developer install base for rapid adoption, OpenCode's 96-comment memory leak megathread demonstrates extremely high power user engagement, and DeepSeek TUI is gaining rapid traction among regional Chinese developer communities with high rates of external community contributions.
- **Lean high-velocity teams with focused roadmaps**: Gemini CLI, Pi, Kimi Code CLI. Gemini CLI prioritizes security hardening and stability over new feature rollouts, Pi has seen community contributed provider implementations for AWS Bedrock Mantle and Zhipu AI in the last 24 hours demonstrating strong open source momentum, and Kimi Code CLI shows industry-leading 24-hour turnaround time for resolving filed user bugs despite a smaller overall tracker volume.

---

## 6. Trend Signals
Key industry insights and actionable reference value for developer teams:
1. The MCP standard has reached critical mass as the default interoperability layer for agent tool integrations across the entire ecosystem. Teams building custom tooling or internal extensions should prioritize 2026 MCP spec compliance to gain native support across all major AI CLI tools without redundant custom implementation work.
2. All major vendors have deprioritized consumer-facing demo features to focus on reliability for unattended batch agent workloads. Teams can now move experimental long-running tasks (bulk code migration, large codebase refactoring, full repo audit) from prototype status to production pipelines using mid-2026 stable releases.
3. Widespread focus on Windows + WSL 2 interoperability indicates that AI CLI tooling is no longer targeted exclusively at macOS/Linux open source developers, and is now being optimized for the 70%+ of professional developer workstations that run Windows.
4. Enterprise compliance features (granular permission controls, MDM managed configuration, structured audit logging) are no longer premium add-ons, and are being rolled into core stable release trains across all major tools, removing the final major barrier to mass adoption for regulated enterprise environments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-06-16)
---
## 1. Top Skills Ranking
Ranked by tied high-volume community issue engagement and recent update velocity, aligned with the repo’s top-comment PR sort order:
1. **Full Skill-Creator Evaluation Loop Fix** (PR #1298, https://github.com/anthropics/skills/pull/1298): A complete overhaul of the broken `run_eval.py` utility that resolves the widely reported 0% recall bug which made skill description optimization return untrustworthy results. Discussion highlights include alignment with 10+ independent user reproductions of the core bug, plus fixes for parallel worker operation, trigger detection, and Windows stream reading. Current status: Open, last updated 2026-06-11.
2. **YAML Special Character Validation for Skill Metadata** (PR #361, https://github.com/anthropics/skills/pull/361): Adds pre-parse checks to the official skill validation script to catch unquoted YAML special characters in description fields that cause silent, hard-to-debug parsing failures. Discussion highlights include parallel contributions from 3 separate developers working on overlapping fixes for the same common failure mode. Current status: Open, last updated 2026-06-10.
3. **Agent-Creator Meta-Skill + Multi-Tool Evaluation Fix** (PR #1140, https://github.com/anthropics/skills/pull/1140): Introduces a new meta-skill to generate task-specific agent collections, alongside fixes for multi-parallel tool call handling in the evaluation suite and native Windows path support for core utility scripts. Discussion highlights include resolution for previously unaddressed gaps in orchestrating multi-skill agent workflows. Current status: Open, last updated 2026-06-02.
4. **Full-Stack Testing Patterns Skill** (PR #723, https://github.com/anthropics/skills/pull/723): A comprehensive workflow skill covering the entire testing stack from unit test best practices, React component testing, to end-to-end test design aligned with the Testing Trophy framework. Discussion highlights include widespread user requests for production-ready testing guidance that removes the need to source external, disjointed testing documentation. Current status: Open, last updated 2026-04-21.
5. **Dual Skill Quality & Security Analyzer Meta-Skills** (PR #83, https://github.com/anthropics/skills/pull/83): Adds two new auditing meta-skills that evaluate existing submitted skills against a 5-dimension quality rubric, and scan for common security vulnerabilities in community-submitted skills. Discussion highlights include alignment with growing user concerns around unvetted community skill safety. Current status: Open, last updated 2026-01-07.
6. **Document Typography Quality Control Skill** (PR #514, https://github.com/anthropics/skills/pull/514): A dedicated skill that automatically fixes common typography defects in Claude-generated documents, including orphan word wraps, stranded header widows, and list numbering misalignment. Discussion highlights include near-universal agreement that this gap impacts almost all document generation use cases. Current status: Open, last updated 2026-03-13.
7. **ODT/OpenDocument Processing Skill** (PR #486, https://github.com/anthropics/skills/pull/486): Adds native support for parsing, generating, filling templates, and converting OpenDocument Format (ODT/ODS) files used by LibreOffice and other open productivity tools. Discussion highlights include community demand for alternatives to proprietary DOCX-only processing workflows. Current status: Open, last updated 2026-04-14.

## 2. Community Demand Trends
Distilled from the top 15 highest-comment community issues:
1. **Enterprise Organizational Skill Sharing**: The most upvoted and commented feature request (Issue #228, 14 comments, 7 👍) calls for native org-wide shared skill libraries, to eliminate the clunky manual workflow of distributing .skill files and requiring team members to manually upload them.
2. **Core Skill Authoring Toolchain Hardening**: 3 separate high-activity issues (18 combined comments) report widespread reliability failures in the official `skill-creator` utility, including the 0% recall evaluation bug, Windows compatibility blockers, and silent YAML parsing failures that block new skill creation for thousands of community authors.
3. **Ecosystem Security Guardrails**: Issue #492 (7 comments, 2 👍) raised a high-severity vulnerability around unvetted community skills impersonating official `anthropic/` namespace skills, driving clear demand for built-in namespace validation and automated skill scanning tools.
4. **Cross-Platform & Third-Party Integration**: Users are actively requesting native support for running skills on AWS Bedrock, exposing skills as Model Context Protocol (MCP) endpoints, and pre-built integration workflows for enterprise tools including SAP, SharePoint, and open-source office suites.
5. **Duplicate Skill Resolution**: Issue #189 (6 comments, 9 👍) flags a common pain point where pre-installed skill bundles ship overlapping identical skills that waste valuable context window space, driving demand for built-in deduplication logic.

## 3. High-Potential Pending Skills
These recently updated, issue-aligned PRs are prioritized for imminent merge to unblock the broader community:
- PR #1298 (Full run_eval.py evaluation loop fix, https://github.com/anthropics/skills/pull/1298): The definitive resolution for the core skill-creator reliability bug that blocked automated skill description optimization for all users, last updated 2026-06-11.
- PR #361 + PR #362 (YAML validation and UTF-8 safety for skill metadata, https://github.com/anthropics/skills/pull/361, https://github.com/anthropics/skills/pull/362): Complementary fixes that eliminate two of the most common silent failure modes when authoring new skills, actively maintained and last updated 2026-06-10.
- PR #1050 (Windows subprocess and encoding bug fixes, https://github.com/anthropics/skills/pull/1050): Minimal 1-line changes that resolve two critical Windows 11 compatibility blockers for running the core skill authoring

---

# Claude Code Community Digest | 2026-06-16
---

## 1. Today's Highlights
The v2.1.178 stable release landed today with two major quality-of-life improvements for permission management and custom skill workflows. The top community feature request for Visual Studio 2026 native integration crossed 350+ upvotes and 137 active comments, making it the most-discussed open enhancement in the repo. Anthropic engineers also merged a batch of core platform fixes resolving long-standing Windows compatibility gaps, multi-agent runtime edge cases, and MCP authentication breaks for enterprise users.

## 2. Releases
### v2.1.178 (latest stable)
- Added new `Tool(param:value)` permission rule syntax with `*` wildcard support to match tool input parameters directly, e.g. `Agent(model:opus)` to block Opus-powered subagent execution without disabling the full Agent tool
- Fixed nested `.claude/skills` directory loading: custom skills stored in subfolders of the project skill root now load automatically when working on files in those directories, with nested skills taking precedence in the case of name clashes

## 3. Hot Issues
1. **[#15942] Visual Studio 2026 Integration Support** (Open, 137 comments, 356 👍)  
   https://github.com/anthropics/claude-code/issues/15942 – The highest-voted open feature request, from users seeking the same deep Claude Code native editing, agent, and skill support that exists for VS Code for the new Visual Studio 2026 IDE on Windows.
2. **[#52871] MCP OAuth trailing slash breaks Entra ID authentication** (Open, 24 comments, 18 👍)  
   https://github.com/anthropics/claude-code/issues/52871 – A critical enterprise-facing bug where the MCP auth flow appends an unwanted trailing slash to the `resource` parameter, throwing AADSTS9010010 errors that block all Azure Entra ID connected MCP workflows.
3. **[#65796] Multi-agent workflow restarts from scratch after auto-compaction** (Open, 6 comments)  
   https://github.com/anthropics/claude-code/issues/65796 – A high-severity bug that causes completed subagent runs to be silently re-executed when users resume a workflow after automatic context compaction, breaking long unattended multi-step pipelines.
4. **[#53610] 9 multi-agent runtime enforcement gaps for unattended operations** (Closed, 28 comments)  
   https://github.com/anthropics/claude-code/issues/53610 – A comprehensive feature request that was marked resolved today, confirming all gaps preventing reliable overnight batch agent execution have been patched in recent releases.
5. **[#45717] Bash timeout kills full Claude Code process instead of just the child command** (Closed, 7 comments)  
   https://github.com/anthropics/claude-code/issues/45717 – A widely reported regression fixed today, where SIGTERM propagation after a Bash tool timeout would terminate the entire Claude Code session instead of just the hung command.
6. **[#67540] Claude GitHub bot reacts with 👀 but never posts a PR code review** (Open, 2 comments, 3 👍)  
   https://github.com/anthropics/claude-code/issues/67540 – A breakage to the team managed GitHub integration, where the bot acknowledges review requests but never creates the required GitHub check run or publishes review results.
7. **[#68590] Enter key no longer sends messages on Claude Code Web** (Open, 2 comments)  
   https://github.com/anthropics/claude-code/issues/68590 – A basic UX regression reported earlier today that blocks web users from submitting chat inputs via the standard Enter shortcut.
8. **[#67547] Windows MSIX installation fails with error 0x80073CF6** (Open, 2 comments)  
   https://github.com/anthropics/claude-code/issues/67547 – A new blocker for new Windows users attempting to install the latest Claude Code Desktop build via the official MSIX distribution channel.
9. **[#68677] 50% of user-defined skill descriptions missing from system reminders** (Open, 2 comments)  
   https://github.com/anthropics/claude-code/issues/68677 – A bug that degrades custom skill discoverability, where half of locally defined skills do not surface their frontmatter description to the agent in the system prompt.
10. **[#68484] Claude Code Desktop extension install silently fails on macOS Tahoe 26.5** (Open, 3 comments)  
    https://github.com/anthropics/claude-code/issues/68484 – A compatibility issue for macOS beta users that returns no error feedback when the filesystem extension fails to install.

## 4. Key PR Progress
1. **[#68707] Add `/bug` terminal command to file GitHub issues directly** (Open)  
   https://github.com/anthropics/claude-code/pull/68707 – A new built-in bug reporter plugin that auto-collects environment version and system data, lets users submit complete Claude Code bug reports without leaving the terminal or opening an external browser.
2. **[#68678] Fix triage bot incorrectly marking Claude Desktop issues as invalid** (Closed)  
   https://github.com/anthropics/claude-code/pull/68678 – Patched the internal automated issue triage workflow, which was incorrectly flagging all valid Claude Desktop bug reports as unrelated to the repo and auto-closing them.
3. **[#68679] Strip control characters before ralph-wiggum promise comparison** (Closed)  
   https://github.com/anthropics/claude-code/pull/68679 – Fixed the `/loop` stop hook that failed to detect valid task completion tokens when the transcript contained embedded terminal escape control characters, preventing stuck infinite auto-loops.
4. **[#68671] Fix PostToolUse hooks cannot return `permissionDecision: deny`** (Closed)  
   https://github.com/anthropics/claude-code/pull/68671 – Unlocked full custom permission control for Hookify users, who previously could not block post-execution actions via post-tool hooks.
5. **[#68699] Full Windows compatibility fix for Hookify plugin** (Open)  
   https://github.com/anthropics/claude-code/pull/68699 – Normalizes Windows backslash paths for plugin roots, adds a dedicated Python wrapper that bypasses the empty Microsoft Store Python stub that breaks hook execution on default Windows setups.
6. **[#68689] Add symlink escape protection to security-guidance plugin** (Open)  
   https://github.com/anthropics/claude-code/pull/68689 – Critical security hardening that blocks path traversal attacks via maliciously constructed custom security rule config files in the project `.claude` directory.
7. **[#68672] Fix hookify to load only event:all rules for unknown tool types** (Closed)  
   https://github.com/anthropics/claude-code/pull/68672 – Reduces unnecessary permission prompts for niche custom MCP tools that were triggering all active permission rules instead of only global fallback rules.
8. **[#68702] Fix ralph-wiggum unbound variable error on macOS bash 3.x** (Open)  
   https://github.com/anthropics/claude-code/pull/68702 – Resolves a universal bug for all macOS users, who run the legacy bash 3.2 shell that threw an unbound array error during `/loop` command setup.
9. **[#68673] Fix GitHub API pagination break logic across internal scripts** (Open)  
   https://github.com/anthropics/claude-code/pull/68673 – Patched 3 core internal automation scripts that incorrectly terminated API scans early when result pages were not fully populated, causing missing issue/PR entries in triage workflows.
10. **[#68701] Strip CRLF newlines from Python version probe on Windows** (Open)  
    https://github.com/anthropics/claude-code/pull/68701 – Fixes the security guidance workflow that failed to detect valid Python 3 installations when running via Git Bash on Windows, due to leftover carriage return characters in stdout output.

## 5. Feature Request Trends
1. **Expanded native IDE integration**: Following the success of the VS Code Claude Code extension, the highest-priority user request is full first-class native integration for Visual Studio 2026, with secondary requests for JetBrains IDE family support.
2. **Team-scoped agent permissioning**: Users are requesting per-teammate custom working directory and granular permission scoping for Agent Teams, so orchestrator agents can spawn subagents with limited, least-privilege access to project resources.
3. **Non-destructive session management**: Top requested UX improvement for the Agent View dashboard, to add an archive action that hides completed sessions without permanently deleting work data or git branches.
4. **Enterprise MCP parity**: Teams using enterprise identity providers are requesting first-class, out-of-the-box OAuth support for Entra ID and other corporate SSO systems for MCP integrations.

## 6. Developer Pain Points
1. **Persistent Windows cross-platform gaps**: A disproportionate share of active bugs affect Windows users, including installation failures, path handling issues in plugins, MCP auth breaks, and missing feature parity with macOS/Linux.
2. **Unreliable unattended multi-agent runs**: Multiple outstanding edge cases break long-running unattended agent workflows, including broken resume after compaction, silently dropped async subagents, and unexpected permission prompts that halt execution.
3. **Uninformative silent failures**: Multiple recent bugs return no visible error feedback to end users, including failed MCP OAuth flows, silent desktop extension install failures, and GitHub code review bot actions that never complete.
4. **Custom skill discoverability issues**: Recurring bugs cause duplicate skill entries in autocomplete lists, missing skill descriptions in system prompts, and duplicated skill registrations on WSL setups, reducing the value of custom skill ecosystems for power users.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-16
---
## 1. Today's Highlights
The stable Rust-based Codex v0.140.0 release landed today, adding long-requested token usage tracking and improved cross-session media persistence for remote app-server deployments. The most popular community feature request for a native Linux Codex desktop app crossed 580 upvotes this 24-hour window, reflecting massive unmet demand from open source and self-hosted developer audiences. A critical wave of improperly signed macOS update blocks impacted thousands of users, while core engineering teams pushed multiple security and enterprise manageability improvements to the codebase.
---
## 2. Releases
### rust-v0.140.0 (Stable)
The first full stable 0.140 release rolls out three key new features:
1.  New `/usage` TUI views for daily, weekly, and cumulative account token activity tracking
2.  Updated `/goal` endpoint that preserves oversized pasted text blocks and image attachments, even for remote app-server sessions
3.  Partial implementation for permanent session deletion (full feature rollout pending)
Three preceding alpha builds (0.140.0-alpha.20 through 0.140.0-alpha.22) that were used for pre-stable validation are now marked deprecated for production use.
---
## 3. Hot Issues
1.  **[#11023 Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**: The highest-engagement open feature request with 582 👍 and 110 comments. Linux devs report the macOS build suffers from severe power drain issues on laptops, making a native Linux client their preferred deployment target for desktop work.
2.  **[#18960 Frequent reconnect loop in Codex App: websocket closed by server before response.completed](https://github.com/openai/codex/issues/18960)**: 33 👍, 42 comments. Pro tier macOS users report repeated streaming failures mid-task that break long-running code execution sessions.
3.  **[#24675 Codex Desktop keeps stale app connector link after reauth-required 401 until codex_apps cache is cleared](https://github.com/openai/codex/issues/24675)**: 17 👍, 23 comments. Users with third-party plugin integrations (e.g. Linear) report broken auth cannot be fixed via app restart or plugin re-add, requiring manual cache deletion for resolution.
4.  **[#24098 Windows elevated sandbox fails with “spawn setup refresh” after Codex CLI update; unelevated sandbox works](https://github.com/openai/codex/issues/24098)**: 6 👍, 20 comments, recently closed. This widely reported sandbox bug for Windows power users running elevated sessions has been resolved in the latest CLI patch.
5.  **[#27817 False positive cybersecurity flag on authorized finance tax filing work](https://github.com/openai/codex/issues/27817)**: 17 comments. Users running normal personal finance and tax filing workflows are incorrectly flagged for cybersecurity risk and blocked mid-chat by safety systems.
6.  **[#28094 Codex Desktop rewrites WSL /home project paths as C:\home, loses project chat associations](https://github.com/openai/codex/issues/28094)**: 13 comments. Windows + WSL 2 devs report path mangling breaks all existing saved project mappings after the latest 26.609 app update.
7.  **[#28369 App update is improperly signed and could not be validated on macOS](https://github.com/openai/codex/issues/28369)**: 4 👍, 6 comments, with 3 duplicate open issues. The latest stable macOS app update fails code signature validation, blocking all users from upgrading.
8.  **[#15367 VS Code extension should show exact in-editor change locations like Copilot](https://github.com/openai/codex/issues/15367)**: 8 👍, 4 comments. Devs report the Codex IDE editing experience lags far behind GitHub Copilot, with no inline change diff indicators and unreliable undo functionality.
9.  **[#16551 Codex does not inherit zsh aliases from .zshrc during command execution](https://github.com/openai/codex/issues/16551)**: 3 👍, 4 comments. Power users with custom shell configurations lose expected alias functionality during Codex automated command runs, breaking established workflow shortcuts.
10. **[#28349 Cannot login to work Codex enterprise account anymore after update](https://github.com/openai/codex/issues/28349)**: 3 comments. Enterprise users are locked out of their work-licensed Codex instances on macOS after the latest app update.
---
## 4. Key PR Progress
1.  **[#27945 Seed session pickers from the state DB](https://github.com/openai/codex/pull/27945)**: Cuts load time for session resume and fork screens by serving an indexed first page of results from the State DB immediately, before the full filesystem session scan completes.
2.  **[#26242 exec-server: add Noise relay transport](https://github.com/openai/codex/pull/26242) (Closed)**: Implements post-quantum end-to-end encryption for all remote orchestrator-to-executor connections using X25519 + ML-KEM-768, ensuring no plaintext workflow data is exposed to the intermediate rendezvous server.
3.  **[#28409 Enforce exact managed config values](https://github.com/openai/codex/pull/28409)**: Extends `requirements.toml` support for enterprise MDM deployments, letting admins lock core settings including update behavior, log storage paths, and sandbox configuration across all managed endpoints.
4.  **[#28154 feat(tui): add rate-limit reset redemption to /usage](https://github.com/openai/codex/pull/28154)**: Adds functionality to the new `/usage` TUI view that lets users directly view and redeem earned rate-limit reset credits without navigating to a separate web dashboard.
5.  **[#28268 Expose the User Message Queue app-server API](https://github.com/openai/codex/pull/28268)**: Adds a durable, thread-scoped public API for clients to queue user messages that are dispatched only at idle turn boundaries, eliminating race conditions when users submit new prompts mid-long-running task.
6.  **[#28146 app-server: preserve remote environment cwd](https://github.com/openai/codex/pull/28146)**: Fixes cross-OS path rewriting bugs, ensuring Windows exec-servers running behind a non-Windows app-server receive their native platform working directory paths instead of incorrectly rewritten host paths.
7.  **[#28383 Load API curated marketplace by auth](https://github.com/openai/codex/pull/28383)**: Serves separate plugin marketplace manifests based on user auth type, with dedicated support for Bedrock direct API auth and native OpenAI Codex backend auth.
8.  **[#28396 Record external agent import results](https://github.com/openai/codex/pull/28396)**: Adds structured audit logging for all external agent configuration imports, with per-item success/failure tracking to simplify debugging of partial import failures.
9.  **[#28414 Enforce managed shell environment policy](https://github.com/openai/codex/pull/28414)**: Adds enterprise-managed environment variable rule support, letting admins define include/exclude patterns (e.g. allow all `CORP_*` prefixed variables, exclude all variables with `SECRET` in their name) for all Codex shell execution sessions.
10. **[#28367 Use ApiPathString in app-server filesystem permission paths](https://github.com/openai/codex/pull/28367)**: Introduces a universal cross-platform path representation format, letting users define sandbox permissions for foreign-OS executors without manual path escaping hacks.
---
## 5. Feature Request Trends
The highest-priority community feature directions identified in the last 24 hours are:
1.  Native first-class Linux desktop Codex client support, the most upvoted open feature request in the repo
2.  Official functionality for Codex Desktop to connect directly to arbitrary remote Codex hosts for distributed multi-machine workflow management
3.  A declarative dynamic workflow foundation for the Codex CLI to support reusable, configurable subagent execution pipelines
4.  VS Code extension parity with GitHub Copilot, including visible inline code change diffs and 100% reliable undo/revert functionality
---
## 6. Developer Pain Points
Recurring high-frequency frustrations reported across updated issues:
1.  Widespread broken macOS 26.609 app updates due to invalid code signatures, impacting all Mac user segments including Pro, Business, and Enterprise accounts
2.  High volume of false positive cybersecurity safety checks blocking normal non-security workflows including local repo maintenance and personal financial tasks
3.  Persistent cross-platform path mangling bugs for Windows + WSL mixed environments that break saved project associations and bundled CLI resolution
4.  Frequent websocket reconnect loops and indefinite "Thinking" UI hangs on macOS that interrupt long-running code execution tasks
5.  Poor enterprise managed configuration UX, with stale plugin connector links requiring manual local cache clears instead of automatic re-generation after reauth events

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-16
Source: github.com/google-gemini/gemini-cli

---

## 1. Today's Highlights
No new public releases shipped in the last 24 hours, with all recent updates focused on critical bug fixes, security hardening, and long-term stability improvements for the agent subsystem. Maintainers rolled up priority workstreams around subagent reliability, Auto Memory system hardening, and dependency supply chain security, with multiple high-severity vulnerability patches merged for the CI pipeline and skill management subsystems. Active community feedback continues to highlight pain points with unexpected agent hangs and underutilization of user-created custom skills.

## 2. Releases
No new versions of Gemini CLI were published between 2026-06-15 and 2026-06-16.

## 3. Hot Issues (Top 10 Notable)
All recently updated issues are tracked under official maintainer workstreams:
1. **[#21409 Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**: P1 bug with 8 community upvotes, where the generalist subagent never completes even trivial tasks like folder creation. Users report forcing the CLI to disable subagent deferral fully resolves the issue, making it one of the most impactful reported user pain points.
2. **[#25166 Shell execution stuck after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**: P1 core bug with 3 upvotes, where the CLI incorrectly displays "awaiting user input" even after simple non-interactive shell commands finish executing, breaking routine script execution workflows.
3. **[#22323 Subagent MAX_TURNS interruption misreported as success](https://github.com/google-gemini/gemini-cli/issues/22323)**: P1 bug with 2 upvotes, where the `codebase_investigator` subagent reports full task success even when it hit its maximum turn limit and completed zero analysis work, wasting user time on incomplete results.
4. **[#22745 Assess AST-aware file read/search impact](https://github.com/google-gemini/gemini-cli/issues/22745)**: P2 feature epic with 1 upvote, exploring the use of AST parsing to reduce tool call turns, eliminate irrelevant token noise, and allow the agent to directly read method/function bounds in a single operation to dramatically improve code work efficiency.
5. **[#24353 Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**: P1 tracking epic that builds on the existing 76 behavioral eval tests across 6 supported Gemini model variants, to formalize component-level validation for agent changes and reduce uncaught regressions.
6. **[#26525 Add deterministic Auto Memory redaction](https://github.com/google-gemini/gemini-cli/issues/26525)**: P2 security bug, where the current Auto Memory system sends local transcript data (potentially including secrets) to the background extraction model before performing redaction, creating an unmitigated data exposure risk.
7. **[#21968 Agents rarely use custom user-defined skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)**: P2 bug, where the model never invokes user-created custom skills (e.g. Gradle, Git workflow helpers) unless explicitly instructed to, eroding the value of time invested in custom extension development.
8. **[#26522 Block Auto Memory infinite retries on low-signal sessions](https://github.com/google-gemini/gemini-cli/issues/26522)**: P2 bug, where low-value sessions the agent chooses not to process remain in the unprocessed queue forever, causing unnecessary background resource consumption and growing backlogs.
9. **[#22672 Discourage destructive agent operations](https://github.com/google-gemini/gemini-cli/issues/22672)**: P2 feature request with 1 upvote, asking the CLI to block or prompt for confirmation for high-risk operations like `git --force` / `git reset` and unconstrained database modifications, to prevent accidental user data loss.
10. **[#20079 Symlinked custom agents not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**: P2 bug, which breaks the common developer workflow of storing shared subagent definitions in a dotfiles repo and symlinking them to the `~/.gemini/agents` directory.

## 4. Key PR Progress (Top 10 Updates)
1. **[#27939 ci: use internal environment for scheduled nightly releases](https://github.com/google-gemini/gemini-cli/issues/27939) (Closed)**: Fixes the long-running nightly release workflow stall by removing unnecessary manual approval requirements for cron-triggered scheduled runs, unblocking regular public nightly builds.
2. **[#27948 Pin all dependencies + enforce 14-day update cooldown](https://github.com/google-gemini/gemini-cli/issues/27948) (Open)**: Supply chain hardening PR that removes all `^`/`~` version ranges to pin exact dependency versions, preventing unexpected breaking changes from unvetted auto-updates.
3. **[#27767 Fix 3 path traversal vulnerabilities in skill management](https://github.com/google-gemini/gemini-cli/issues/27767) (Closed)**: Fully mitigates high-severity path traversal flaws in the `installSkill`, `linkSkill` and `uninstallSkill` subsystems, eliminating arbitrary file write risks for malicious skill packages.
4. **[#27854 Fix pending tools and trust overrides race conditions](https://github.com/google-gemini/gemini-cli/issues/27854) (Closed)**: Prevents premature state progression while waiting for user tool approval, and forces all file write operations to run sequentially to eliminate concurrent edit corruption.
5. **[#27943 Resolve @-reference path resolution bugs](https://github.com/google-gemini/gemini-cli/issues/27943) (Open)**: Fixes the filesystem bug that caused `read_file`, `replace` and `write_file` operations to fail on files a user initially referenced via the CLI `@filename` mention syntax.
6. **[#27753 Fix fork PR E2E artifact poisoning vulnerability](https://github.com/google-gemini/gemini-cli/issues/27753) (Open, P1 Security)**: Blocks the vulnerable `workflow_run` trigger that allowed external fork PRs to inject malicious attacker-controlled code with repository CI secrets, a critical pipeline hardening patch.
7. **[#27889 Fix MCP OAuth refresh with stored client ID](https://github.com/google-gemini/gemini-cli/issues/27889) (Open, P1)**: Corrects the broken OAuth refresh flow for auto-discovered MCP servers that do not have a pre-configured static OAuth client ID in settings.
8. **[#27572 Fix tmux false positive light background detection](https://github.com/google-gemini/gemini-cli/issues/27572) (Open)**: Resolves a long-running regression where the CLI incorrectly detected a light theme and threw unnecessary compatibility warnings when running inside tmux over mosh.
9. **[#27947 Migrate deprecated coreTools config to new tools.core schema](https://github.com/google-gemini/gemini-cli/issues/27947) (Open)**: Cleans up legacy configuration fields across all GitHub Actions workflows and the A2A server to align with the current stable settings schema.
10. **[#27942 Fix camelToSpace leading space rendering bug](https://github.com/google-gemini/gemini-cli/issues/27942) (Open, P1)**: Resolves the label rendering issue where capitalized keys like "HTTPStatus" were incorrectly displayed as " HTTPStatus" with an erroneous leading space.

## 5. Feature Request Trends
The highest-priority requested feature directions from the latest issue backlog are:
1. AST-native code intelligence to reduce agent turn counts, trim unnecessary token noise, and speed up large codebase investigation workflows
2. End-to-end quality improvements and hardening for the Auto Memory background system, including deterministic redaction and infinite retry protection
3. Resilience upgrades for the browser agent, including automatic orphaned session takeover and persistent lock recovery
4. Advanced auth support and background operation capabilities for the upcoming Remote Agents sprint
5. Improved agent self-awareness to enable the CLI to accurately explain its own native flags, hotkeys, and execution mechanics to users.

## 6. Developer Pain Points
Recurring high-frequency user frustrations observed in recent updates:
1. Unpredictable hard hangs in multiple core paths, including the generalist subagent execution flow and post-completion shell command handling
2. Misleading subagent status reporting that hides task interruptions, failures, or partial completions from end users
3. Poor discoverability of custom user-created extensions, including unrecognized symlinked subagent definitions and agents refusing to invoke custom pre-built skills
4. Unaddressed security gaps across the stack including missing pre-processing secret redaction, path traversal risks, and vulnerable CI pipeline triggers
5. Unbounded background processing backlogs caused by unprocessed low-signal sessions that Auto Memory never marks as completed.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-16
*Source: github.com/github/copilot-cli*

---

## 1. Today's Highlights
This digest covers the launch of the new stable v1.0.63-0 release, a wave of patched critical regressions from the 1.0.60+ release train, and 30+ recently updated community submissions focused on enterprise compliance, custom LLM flexibility, and power-user session management. The new release introduces two long-requested quality of life upgrades: whitespace filtering for the `/diff` view, and configurable MCP server tool persistence for users with global tool search enabled. Multiple high-severity platform-specific crashes for Linux ARM64 and infinite MCP server respawn bugs were marked as fully resolved in the past 24 hours, with community feedback showing very strong demand for expanded Bring Your Own Key (BYOK) model configuration for self-hosted LLM deployments.

## 2. Releases
### v1.0.63-0 (Released last 24h)
**Added**
- New hotkey: Press `w` in the `/diff` interface to toggle hiding whitespace-only changes, streamlining code review workflows
- New `deferTools` configuration option for MCP server configs that pins a server's tooling to always remain available, even when global tool search is enabled
**Improved**
- Significantly boosted request reliability for OpenAI, Anthropic, and Azure OpenAI model endpoints, reducing unnecessary transient 4xx/5xx error retries
- Partial experimental rollout of updated `/rewind` workflow (full implementation still in active development)

## 3. Hot Issues (10 Noteworthy Selections)
1. [#953 Over excessive permissions Request](https://github.com/github/copilot-cli/issues/953) (OPEN, 7 comments, 3 👍): Long-running top enterprise feature request that asks for granular, scoped repo/area access controls for Copilot CLI authentication, instead of the current default full account read/write permission scope that creates compliance risks for regulated organizations.
2. [#3282 Add multiple BYOK model capability in copilot cli](https://github.com/github/copilot-cli/issues/3282) (OPEN, 3 comments, 8 👍): Top-voted active feature request that would let users switch between multiple custom self-hosted BYOK models directly in the TUI, no session restarts or manual env var edits required for teams running multiple fine-tuned LLM variants.
3. [#3727 Regression in v1.0.60: userPromptSubmitted hook additionalContext no longer injected into planner](https://github.com/github/copilot-cli/issues/3727) (OPEN, 4 comments): Confirmed active regression breaking custom plugin workflows for Copilot CLI plugin developers, after the feature worked reliably in v1.0.59.
4. [#3781 Session enters unrecoverable 400 error when pasting image with non-multimodal model](https://github.com/github/copilot-cli/issues/3781) (CLOSED, 3 comments): Recently resolved critical bug that permanently wedged sessions after a user attached an image while running a non-multimodal model, previously requiring manual editing of the local `events.jsonl` session store to fix.
5. [#3782 MCP stdio server respawned in an unbounded tight loop (no backoff / no max-retry) in 1.0.61](https://github.com/github/copilot-cli/issues/3782) (CLOSED, 1 comment): Patched high-severity resource leak bug that spawned thousands of child MCP server processes in an infinite loop with no backoff caps, causing extreme CPU and memory exhaustion on user machines.
6. [#3784 Copilot CLI v1.0.62-1 aborts with Tokio reactor panic after sending first message on Linux ARM64](https://github.com/github/copilot-cli/issues/3784) (CLOSED, 2 comments): Resolved platform-specific crash that broke all functionality for Linux ARM64 users after the v1.0.62 release, caused by a Tokio async runtime panic that exited the process immediately after the first user prompt submission.
7. [#3808 Enhance the prompt caching for Claude Sonnet model to reduce latency and token costs](https://github.com/github/copilot-cli/issues/3808) (OPEN, 1 comment): High-impact cost optimization feature request that would natively leverage Anthropic's built-in prompt caching for long context sessions, cutting token costs and latency by up to 90% for users running long workloads on Claude Sonnet.
8. [#3776 copilot-cli copied UTF-8 text becomes mojibake when pasted from WSL/Ubuntu terminal to Windows](https://github.com/github/copilot-cli/issues/3776) (OPEN, 2 comments, 1 👍): Active cross-platform bug affecting non-English language users working across WSL and Windows, breaking copied output for Eastern European, East Asian, and other non-ASCII character sets.
9. [#3812 Subagents can no more access MCP tools](https://github.com/github/copilot-cli/issues/3812) (OPEN, 0 comments): Newly reported regression linked to the new MCP `deferTools` feature, where custom user subagents can no longer access configured MCP tools even if the top-level main agent has full access, breaking custom agent workflows.
10. [#2966 Built-in tooling for managing multiple concurrent CLI sessions](https://github.com/github/copilot-cli/issues/2966) (OPEN, 3 comments, 1 👍): Long-requested power-user feature for users running the CLI with `--autopilot`, who frequently maintain dozens of concurrent sessions across multiple repos and branches with no native management UI today.

## 4. Key PR Progress
Only 1 public pull request was updated in the 24h tracking window, with no production-focused feature or fix PRs merged as the repository team prioritized backporting critical fixes into the v1.0.63-0 stable release build:
- [#3817 kCreate "#"](https://github.com/github/copilot-cli/pull/3817): Unfinished malformed draft PR, authored by new external contributor edge500 with no functional feature or fix content, submitted as a test contribution.

## 5. Feature Request Trends
The highest-priority user-submitted feature directions from recent issues are:
1. **Enterprise granular permissions**: Scoped, repo-specific access controls for Copilot CLI authentication to replace the current broad full-account permission scope for regulated organizations
2. **Expanded BYOK support**: Native in-TUI switching between multiple custom self-hosted models, plus configurable custom HTTP headers for private LLM endpoints that require tenant or organization identification metadata
3. **Unified session management**: Full text content search for resume functionality, native tools for managing multiple concurrent autopilot sessions, and unified history indexing that merges Copilot CLI sessions with VS Code Copilot Chat history
4. **Native model optimization**: First-class support for vendor-specific model features like Anthropic prompt caching to reduce long-context latency and token costs.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. **Post-release regressions**: Multiple recent 1.0.60/1.0.61/1.0.62 releases introduced unexpected breakages for core plugin, MCP, and function call workflows that force power users to pin older working versions
2. **Persistent cross-platform rendering bugs**: Recurring non-ASCII mojibake copy-paste issues, duplicated characters during streaming response output, and mangled concurrent rendering that breaks copying of generated code or text
3. **Unrecoverable session edge cases**: Multiple reported scenarios where bad attachments, incompatible model/feature combinations, or minor mismatched repo names cause permanent 4xx errors that can only be resolved by manually editing local session store files, with no built-in recovery flow
4. **Unbounded resource leaks**: Past releases shipped infinite retry loops for MCP server respawns, OAuth reconnects, and failed model requests that cause excessive CPU usage, unaccounted AIC token consumption, and unexpected rate limits with no user visibility or kill switch.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-16
Repository: github.com/MoonshotAI/kimi-cli

---
## 1. Today's Highlights
No new official releases were pushed in the last 24 hours, but core maintainers published two targeted bug fixes that directly resolve two long-standing open user issues related to custom hook behavior and session resumption. A new high-priority connectivity bug was also submitted by the user community, pointing out that the Kimi CLI core network module does not respect system proxy configurations, blocking access for developers in restricted network environments including WSL2 deployments. All newly merged/opened PRs this window reference existing reported user issues, indicating fast turnaround on high-impact bug triage from the dev team.

## 2. Releases
No new stable, pre-release, or patch versions of Kimi Code CLI were published in the 24-hour reporting window.

## 3. Hot Issues
Only 3 total issues were updated in the last 24 hours, all listed below:
1. [#2303 [OPEN] Bug: UserPromptSubmit hook receives empty prompt when input comes from shell UI](https://github.com/MoonshotAI/kimi-cli/issues/2303)
   Why it matters: Breaks core extensibility workflows for power users who build automation on top of Kimi CLI's hook API, as all regex-based custom prompt detection rules fail silently for interactive shell input. 1 community comment confirms reproduction on Apple Silicon Macs running v1.44.0.
2. [#2222 [OPEN] Bug: `kimi --continue` reports "No previous session found" even when valid history exists for the working directory](https://github.com/MoonshotAI/kimi-cli/issues/2222)
   Why it matters: Destroys workflow continuity for Windows users, who are forced to re-paste full coding context to restart interrupted sessions even though plain `kimi` command loads local history normally. 1 user confirmed the bug reproduced after upgrading from v1.39 to v1.41.
3. [#2455 [OPEN] Bug: FetchURL does not read system proxy, fails to access external networks in restricted environments while shell/curl works normally](https://github.com/MoonshotAI/kimi-cli/issues/2455)
   Why it matters: Blocks usage of Kimi CLI's public web fetch, documentation indexing, and dependency lookup features entirely for developers running the tool in WSL2 or regions with regulated internet access. Submitted less than 24 hours prior, no public community reactions as of publishing.

## 4. Key PR Progress
Only 2 total PRs were updated in the last 24 hours, all listed below:
1. [#2454 [OPEN] fix(hooks): pass prompt text to UserPromptSubmit from structured input](https://github.com/MoonshotAI/kimi-cli/pull/2454)
   Fixes the root cause of Issue #2303, by correcting broken input text derivation logic in the `KimiSoul._turn` runtime, ensuring full user prompt strings are passed to the UserPromptSubmit hook instead of empty values for all interactive shell inputs.
2. [#2453 [OPEN] fix(session): resume latest session when last_session_id is missing](https://github.com/MoonshotAI/kimi-cli/pull/2453)
   Resolves the `kimi --continue` failure documented in Issue #2222, adding a fallback logic that scans local session history for the active working directory if the stored `last_session_id` reference is missing or corrupted, eliminating false "no previous session" errors.

## 5. Feature Request Trends
No explicit new feature requests were submitted in the reporting window, but implicit high-priority feature directions derived from updated issues are:
1. Full native system proxy support for all Kimi CLI network modules to unblock connectivity for users in restricted network environments
2. Built-in payload validation for all public hook endpoints to guarantee complete expected data is delivered to custom automation integrations
3. More robust, forward-compatible local session storage logic that avoids broken resumption after cross-version upgrades

## 6. Developer Pain Points
1. **Connectivity inconsistency**: Core network utilities like the FetchURL module do not inherit system proxy settings, creating different network behavior compared to native OS CLI tools like curl, a top blocker for WSL2 and developers in regions with internet access restrictions.
2. **Broken extensibility**: The public UserPromptSubmit hook API returns empty payloads for interactive shell input, breaking custom automation workflows built by power users on top of Kimi CLI's extension system.
3. **Session unreliability**: The widely used `--continue` session resumption flag fails on Windows for sessions with corrupted missing `last_session_id` references, forcing users to manually re-enter full coding context for long interrupted workstreams.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-16
---

## 1. Today's Highlights
No new official OpenCode releases shipped in the last 24 hours, but 20+ automated cleanup and community-submitted PRs landed, delivering key UX, performance and cross-platform bug fixes for the AI developer tool. Top community conversations centered on the 96-comment ongoing memory leak investigation megathread, long-requested agent sandboxing capabilities, and urgent triage for recently surfaced subscription billing glitches affecting paid OpenCode Go users. Two widely upvoted feature requests for native VS Code diff previews and full latest MCP standard support are gaining strong developer traction this week.

## 2. Releases
No new public OpenCode versions were published in the 24-hour reporting window.

## 3. Hot Issues (Top 10 Notable)
| Issue | Link | Details & Community Context |
|---|---|---|
| Memory Megathread | https://github.com/anomalyco/opencode/issues/20695 | 96 comments, 65 👍. Central tracking thread for all scattered OpenCode memory leak reports. Maintainers explicitly request users submit collected heap snapshots instead of unvetted AI-generated fixes, as this long-running pain point impacts hundreds of CLI and desktop users. |
| Agent Sandbox Capabilities | https://github.com/anomalyco/opencode/issues/2242 | 69 comments, 53 👍. 10-month-old feature request asking for macOS Seatbelt/equivalent cross-platform sandboxing to restrict agents from accessing files outside the active working directory, preventing accidental data loss or credential exfiltration matching existing implementations in Gemini CLI and Codex CLI. |
| VS Code Diff Preview Integration | https://github.com/anomalyco/opencode/issues/8003 | 15 comments, 68 👍 (highest upvote count for non-megathread issues). Users report that reviewing hundreds-of-line code changes in the TUI is unusable, making native VS Code side-by-side diff previews for OpenCode agent edits the top requested UX upgrade this quarter. |
| Anthropic OAuth ToS Violation Risk | https://github.com/anomalyco/opencode/issues/6930 | 22 comments, 14 👍. Recently resolved bug addressing reports that OpenCode's native Anthropic OAuth login flow violated Claude's terms of service, resulting in unexpected account bans for power users after upgrading to higher-tier Claude plans. |
| Paid Go Subscription Not Activated | https://github.com/anomalyco/opencode/issues/32420 | 3 comments, multiple linked duplicate reports. Urgent user-facing bug where multiple users who paid for the $10 OpenCode Go plan had their accounts never activated post-payment with no support response, creating critical friction for paying customers. |
| Full Modern MCP Client Support | https://github.com/anomalyco/opencode/issues/28567 | 13 comments, 22 👍. Request pointing out that OpenCode's Model Context Protocol implementation is significantly out of date with the 2026 official spec, missing features that block integration with hundreds of new MCP tools launched in the last 3 months. |
| Stale LSP Errors Post-Fix | https://github.com/anomalyco/opencode/issues/2156 | 22 comments. Resolved bug that caused agents to keep seeing outdated pre-fix LSP diagnostics after correcting a code error, leading to wasted rework and redundant fix attempts. |
| False Trojan Detection on Windows | https://github.com/anomalyco/opencode/issues/32350 | 3 comments, multiple user reports. Kaspersky antivirus is flagging the OpenCode Windows executable as a trojan, leading to automatic CLI deletion and failed installations for new users. |
| Unbilled Token Usage Post Tab Close | https://github.com/anomalyco/opencode/issues/32471 | 2 comments, confirmed bug. OpenCode desktop does not terminate active model sessions when users close a tab, leading to hours of unintended token usage and overbilling for Qwen model sessions. |
| Custom Provider Max Token Hardcode | https://github.com/anomalyco/opencode/issues/1735 | 17 comments, 11 👍. Resolved bug where custom LLM providers configured via an OpenAI-compatible gateway were forced to a hardcoded 32k max token limit, ignoring the actual context window size of self-hosted or third-party model deployments. |

## 4. Key PR Progress (Top 10 Important)
| PR | Link | Feature / Fix Description |
|---|---|---|
| Windows TUI Image Paste Fix | https://github.com/anomalyco/opencode/pull/32479 | Resolves the longstanding bug where Ctrl+Shift+V image pasting did not work in the Windows TUI, as screenshots were stored in the FileDrop clipboard format that the previous implementation did not support. |
| WSL Local Workspace Detection | https://github.com/anomalyco/opencode/pull/27673 | Corrects logic that incorrectly treated local WSL-hosted OpenCode servers as remote workspaces, resolving configuration errors for users running the CLI backend in WSL and connecting via the Windows desktop client. |
| Configurable Local Cost Currency | https://github.com/anomalyco/opencode/pull/32487 | New feature that adds user-configurable settings for `display.currency`, `display.cost_currency` and custom exchange rates, letting non-USD users view their model usage costs in their local fiat currency. |
| Temperature Priority Logic Fix | https://github.com/anomalyco/opencode/pull/27797 | Corrects the bug where global agent temperature overrides were prioritized over per-model custom temperature settings, letting users set fine-grained generation parameters for individual models correctly. |
| TUI Visible Scrollbar | https://github.com/anomalyco/opencode/pull/27795 | UX improvement that adds a clearly visible high-contrast white scrollbar to the TUI session chat pane, eliminating confusion around navigating long chat histories. |
| Working LSP Symbol Search Endpoint | https://github.com/anomalyco/opencode/pull/27773 | Replaces the previously stubbed empty `findSymbol` handler with a real implementation that queries active LSP servers via the `workspaceSymbol` API, enabling symbol search for the VS Code extension and third-party integrations. |
| iTerm OSC 1337 Image Support | https://github.com/anomalyco/opencode/pull/27729 | Adds native support for rendering inline images directly in iTerm2, eliminating the need to open external files to view AI-generated visual outputs. |
| Built-in StyLua Formatter | https://github.com/anomalyco/opencode/pull/27728 | Ships native PATH detection and support for the popular StyLua Lua code formatter, enabling automatic formatting for Lua projects without manual user configuration. |
| MCP Auth Flow Fix | https://github.com/anomalyco/opencode/pull/27704 | Corrects the broken workflow where users pressing space on a MCP that required authentication in the `/mcps` picker would loop endlessly, now it properly launches the full OAuth flow. |
| Lazy CLI Command Loading | https://github.com/anomalyco/opencode/pull/27800 | Performance refactor that defers loading non-critical CLI command modules when running `--help`, `--version` or shell tab completion, reducing startup latency for these operations by ~70% per internal tests. |

## 5. Feature Request Trends
1. **IDE Ecosystem Integration**: Top priority requests focus on deep VS Code interoper

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-16
*For the open-source AI developer tool monorepo at [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)*

---

## 1. Today's Highlights
Today’s top updates include the release of Pi v0.79.4, which debuts automatic terminal theme detection for new users alongside critical stability patches for LLM streaming and TUI interactions. Maintainers merged over 15 bug fixes addressing common pain points including truncated bash command output, non-functional Escape interrupts, and stuck UI states after LLM stream timeouts. The open community also delivered two fully featured new LLM provider implementations for AWS Bedrock Mantle and Zhipu AI (ZAI-CN) to expand regional enterprise model support.

## 2. Releases
- **v0.79.4 (latest stable)**: Rolls up incremental stability patches and launches the flagship automatic first-run theme detection feature. Pi now scans the user’s terminal background color on initial launch to default to a light or dark theme, eliminating manual configuration for new users. Full theme customization documentation is available in the [Selecting a Theme](https://github.com/earendil-works/pi/blob/v0.79.4/packages/coding-agent/docs/themes.md#selecting-a-theme) guide.

## 3. Hot Issues (Top 10, sorted by engagement)
| Issue | Details |
|-------|---------|
| [#4945 openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945) | Highest engagement issue with 57 comments and 30 upvotes: users report the TUI frequently gets stuck on an infinite `Working...` spinner when the OpenAI Codex/GPT-5.5 stream hangs without closing. No errors are surfaced, and the only recovery method is manually pressing Escape to abort the turn, making this the top critical UX pain for daily power users. |
| [#5103 Windows Git Bash PATH Detection Failure](https://github.com/earendil-works/pi/issues/5103) | 21 comments: Windows users running unpacked release builds report the built-in bash tool cannot detect a pre-installed Git Bash even when it is added to the system PATH, breaking core shell execution workflows for all Windows end users. |
| [#4877 Session Folder Collision](https://github.com/earendil-works/pi/issues/4877) | 15 comments: Pi’s session path sanitization logic maps distinct project directories (e.g. `/a/b/c/d` and `/a-b/c-d`) to identical storage folder names, creating a low but non-zero risk of cross-project session leaks that can cause unexpected context bleed between unrelated workspaces. |
| [#5363 Add amazon-bedrock-mantle provider for OpenAI-compatible models](https://github.com/earendil-works/pi/issues/5363) | 13 comments: AWS enterprise users requested a dedicated native provider for Bedrock Mantle, which uses a unique OpenAI-compatible API endpoint that is incompatible with the existing AWS Bedrock Converse API provider. |
| [#5653 Move off Shrinkwrap](https://github.com/earendil-works/pi/issues/5653) | 10 comments: Post-Shrinkwrap dependency changes cause duplicate copies of the `pi-ai` package to be installed for dependent modules, breaking singleton shared state including the AI provider registry and causing hard-to-debug runtime errors across the codebase. |
| [#3214 Cloud Code Assist 400 errors from unfiltered MCP tool params](https://github.com/earendil-works/pi/issues/3214) | 10 comments: Google Cloud Code Assist rejects MCP tool calls containing unfiltered `$schema` meta-fields from popular MCP servers, breaking enterprise adoption of Pi for Google Cloud customers. |
| [#5728 Provider-specific config support in auth.json](https://github.com/earendil-works/pi/issues/5728) | 6 comments: Users requested the ability to store non-API-key provider credentials (e.g. Cloudflare AI Gateway account IDs and gateway IDs) in Pi’s native `auth.json` storage, removing the requirement to manage sensitive values via environment variables for multi-user deployments. |
| [#5303 Bash tool truncates output on late child process writes](https://github.com/earendil-works/pi/issues/5303) | 6 comments: Pi’s 100ms post-exit timeout for shell processes cuts off output from long-running child processes like pre-commit hooks during `git commit`, leading to missing critical error context returned to the agent. |
| [#5739 Add SHA256SUMS and provenance attestations for binary releases](https://github.com/earendil-works/pi/issues/5739) | 5 comments: Security-focused enterprise users requested signed integrity checksums and SLSA provenance for standalone Pi binaries, to harden releases against tampering and meet internal supply chain compliance requirements. |
| [#5755 Export diff utility functions to extensions](https://github.com/earendil-works/pi/issues/5755) | 5 comments: Extension developers requested access to Pi’s core native diff generation utilities to build custom patch workflows optimized for GPT-5.5’s native `apply_patch` feature, eliminating redundant reimplementation of diff logic. |

## 4. Key PR Progress
| PR | Details |
|----|---------|
| [#5587 Experimental first-time setup flow](https://github.com/earendil-works/pi/pull/5587) | Adds a behind-flag (`PI_EXPERIMENTAL=1`) onboarding flow for new users that pre-selects auto-detected theme preferences and presents an explicit opt-in for usage analytics, aligning with v0.79.4’s new theme detection feature. |
| [#5509 Amazon Bedrock Mantle provider](https://github.com/earendil-works/pi/pull/5509) | Fully implements the feature requested in #5363, adding native support for AWS Bedrock Mantle OpenAI Responses API for GPT 5.4 and 5.5 workloads hosted on AWS. |
| [#5753 Fix bash output truncation on late child writes](https://github.com/earendil-works/pi/pull/5753) | Resolves issue #5303, extending the post-exit grace period for shell process stdout/stderr draining to prevent truncation of late output from child processes like lint-staged pre-commit hooks. |
| [#2331 Vim-like modal editor extension](https://github.com/earendil-works/pi/pull/2331) | Merges a long-running community contribution adding a full native modal editor for the Pi TUI with Normal/Insert/Visual modes, full motion support, and ex commands, for power users who prefer vim workflows. |
| [#5743 Refactor generate-models.ts to data-driven system](https://github.com/earendil-works/pi/pull/5743) | Addresses the maintainability concern raised in #5702, decomposing the messy ad-hoc model registry build script into a declarative data-driven system to reduce future hard-to-catch provider compatibility bugs. |
| [#5752 Fix extension API promise return](https://github.com/earendil-works/pi/pull/5752) | Resolves #5751, updating `pi.sendUserMessage()` and `pi.sendMessage()` to return proper awaited promises instead of resolving immediately, eliminating broken fire-and-forget behavior for extensions running in print mode. |
| [#5756 Expose edit diff utilities to extensions](https://github.com/earendil-works/pi/pull/5756) | Closes feature request #5755, exporting Pi’s native `generateDiffString` and `generateUnifiedPatch` functions for third-party extension developers to build custom patch workflows. |
| [#5779 XML-structured /review command responses](https://github.com/earendil-works/pi/pull/5779) | Converts Pi’s code review workflow to use XML-structured prompt envelopes, drastically

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-16
---
## 1. Today's Highlights
Today’s top updates bring two new official releases for Qwen Code core CLI and desktop client, landing critical quality-of-life fixes for MCP persistence and multi-provider model configuration. The team also kicked off the phased rollout of the highly requested self-paced background `/loop` automation feature, with 8 associated feature issues already merged in the last 24 hours. Multiple high-priority memory leak, OOM, and cross-terminal rendering bug fixes are also in active PR review to address longstanding UX pain points for macOS and tmux power users.

## 2. Releases
All builds published in the last 24 hours:
- **v0.18.1 (Core CLI)**: Introduces a security hardening change that gates direct session shell access behind explicit user opt-in to reduce unintended code execution risks, built on the v0.18.0 baseline. A transient release workflow failure was tracked and resolved in [Issue #5150](https://github.com/QwenLM/qwen-code/issues/5150), with the final production build now live.
- **desktop-v0.0.4 (Desktop Client)**: Ships two key fixes: MCP server removal states are now persisted across app restarts, and raw model-derived configuration defaults are automatically refreshed on launch to eliminate stale setting mismatches. The corresponding `desktop-latest` auto-update feed is active to push the new version to all existing desktop users.

## 3. Hot Issues (10 Noteworthy Items)
1. **[#5142](https://github.com/QwenLM/qwen-code/issues/5142) Virtualized History Mode rendering bug**: Conversation history is completely invisible unless the user presses the slash key, with the input box misaligned away from its expected bottom position. Tagged `welcome-pr` for external contributors to pick up, impacting all users on the v0.18.0 baseline.
2. **[#5160](https://github.com/QwenLM/qwen-code/issues/5160) Deprecated OAuth model UI clutter**: The discontinued Qwen OAuth coder model appears as the top entry in the `/model` picker even when no OAuth provider is configured, confusing new users. Prioritized as P2 for immediate triage.
3. **[#5173](https://github.com/QwenLM/qwen-code/issues/5173) Multi-provider model disambiguation failure**: When multiple OpenAI-compatible providers (Token Plan, IdeaLab, BFF) share the same model ID e.g. `qwen3.7-max`, user selected models do not persist across restarts, breaking enterprise multi-provider workflows.
4. **[#4966](https://github.com/QwenLM/qwen-code/issues/4966) MCP schema validation failures**: Missing numeric string coercion in the SchemaValidator causes widespread breakage for MCP tools like Playwright, where LLMs frequently emit numeric parameters as quoted strings. Now marked closed as fully resolved.
5. **[#5147](https://github.com/QwenLM/qwen-code/issues/5147) Post-quit OOM crashes**: The managed auto-memory background process rebuilds full transcripts from very large text-only histories after the user runs `/quit`, triggering JavaScript heap out of memory errors for power users with multi-hour sessions.
6. **[#5159](https://github.com/QwenLM/qwen-code/issues/5159) Tmux trackpad scroll misbehavior**: On macOS, trackpad scroll inside tmux sessions incorrectly cycles through prompt history instead of scrolling the conversation viewport, breaking expected terminal UX for tmux power users.
7. **[#5101](https://github.com/QwenLM/qwen-code/issues/5101) Repeated tool result context bloat**: Large identical tool outputs are repeatedly appended to the provider history, rapidly bloating the context window and causing out-of-context errors for long-running tasks. Marked as P1 and now resolved.
8. **[#5119](https://github.com/QwenLM/qwen-code/issues/5119) No sudo command whitelisting**: The agent cannot be granted permission to run sudo commands directly, forcing users to manually copy-paste every privileged execution request. Now closed as a completed feature request.
9. **[#3979](https://github.com/QwenLM/qwen-code/issues/3979) Ghostty plan mode screen flickering**: Qwen Code enters an infinite redraw loop and flickers non-stop after completing responses in plan mode when run on the Ghostty macOS terminal emulator.
10. **[#3153](https://github.com/QwenLM/qwen-code/issues/3153) Infinite retry for rejected commands**: The agent automatically retries running a previously user-rejected command with no way to stop execution, a longstanding 1+ year old bug reported by community users.

## 4. Key PR Progress (10 Important Items)
1. **[#5148](https://github.com/QwenLM/qwen-code/pull/5148) /loop phase 1 implementation**: Delivers the first slice of the self-paced background automation stack, implementing the full command surface and project/user level loop task file reader.
2. **[#5167](https://github.com/QwenLM/qwen-code/pull/5167) Hidden deprecated OAuth model**: Hides the discontinued Qwen OAuth model from the `/model` picker for non-OAuth users, while retaining the migration warning banner for existing active OAuth users.
3. **[#4793](https://github.com/QwenLM/qwen-code/pull/4793) Self-hosted LLM tool parameter coercion**: Automatically converts non-string tool parameters (numbers, booleans) to expected string types for self-hosted deployments running on LMStudio, sglang or vLLM, eliminating widespread edit/write_file failures.
4. **[#5174](https://github.com/QwenLM/qwen-code/pull/5174) Daemon status API**: Adds a new read-only `GET /daemon/status` endpoint for `qwen serve`, exposing runtime telemetry including session counts, permission pressure, transport metrics and rate limit rejection stats for operators.
5. **[#5171](https://github.com/QwenLM/qwen-code/pull/5171) Transient stream error auto-retry**: Implements bounded automatic retries for network stream drops that occur before the first model response chunk is returned, removing unnecessary user-facing failures from temporary network interruptions.
6. **[#4564](https://github.com/QwenLM/qwen-code/pull/4564) Token usage accounting**: Adds persisted token consumption tracking, extending the `/stats` command to display daily/monthly usage, per-model breakdowns, and CSV/JSON export functionality for full cost visibility.
7. **[#4598](https://github.com/QwenLM/qwen-code/pull/4598) Collapsible TUI thinking blocks**: Replaces permanently expanded reasoning output with a collapsible view, including a fixed-height real-time streaming reasoning window and built-in generation duration timer to reduce post-response UI clutter.
8. **[#5141](https://github.com/QwenLM/qwen-code/pull/5141) Sed edit file history tracking**: Treats narrow, safe `sed -i` single-file substitution commands as native tracked edits instead of opaque shell executions, generating previews and preserving changes in the existing file history system.
9. **[#5145](https://github.com/QwenLM/qwen-code/pull/5145) Follow-up suggestions in input placeholder**: Displays AI-generated next prompt suggestions directly in the input placeholder, generated via the fast model tier to eliminate the need for extra suggestion UI chips below the input box.
10. **[#5157](https://github.com/QwenLM/qwen-code/pull/5157) Node 

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-06-16
Source: github.com/Hmbown/DeepSeek-TUI

---

## 1. Today's Highlights
No new official releases were tracked in the last 24 hours, as maintainers focus on finalizing the v0.8.59 stabilization release. The team has landed critical performance overhauls for sub-agent runtime and TUI resource usage, while community contributors merged support for the DeepInfra inference provider, plus usability improvements for skill activation workflows. 30 updated issues and 20 pull requests were triaged, with strong prioritization of Windows platform reliability fixes and multi-provider UX upgrades.

## 2. Releases
No new public releases were published in the past 24 hours. The upcoming v0.8.59 stabilization release is on track, with all pre-requisite fixes for macOS TUI mouse-report input leaks and PR/issue triage work tracked at [#3063](https://github.com/Hmbown/DeepSeek-TUI/issues/3063).

## 3. Hot Issues (Top 10 Noteworthy)
| Issue # | Status | Details | Why It Matters |
|---------|--------|---------|----------------|
| [#2487](https://github.com/Hmbown/DeepSeek-TUI/issues/2487) | Open | 13-comment v0.8.61 bug: Frequent YOLO mode stall with "Turn stalled - no completion signal received" error, no resume path even after sending `continue`. | Affects the project's highest-privilege execution mode, with consistent reports from power users running long unattended tasks. |
| [#1186](https://github.com/Hmbown/DeepSeek-TUI/issues/1186) | Open | 9-comment v0.8.61/v0.9.0 enhancement request: Add typed persistent execution permission rules scoped to tool name, command prefix, and workspace path. | Solves the most common UX friction point of repeated permission prompts for recurring trusted tool operations. |
| [#3192](https://github.com/Hmbown/DeepSeek-TUI/issues/3192) | Open | 5-comment enhancement: Request to list DeepSeek TUI on the Agent Client Protocol public registry. | Will enable native one-click installation and first-class integration with Zed editor and other ecosystem agent tools. |
| [#1812](https://github.com/Hmbown/DeepSeek-TUI/issues/1812) | Open | 6-comment v0.8.61 bug: Intermittent TUI freezes on Windows 11 caused by crosstalk input poll logic, with no keyboard input or screen updates despite the process remaining alive. | One of the most frequently reported Windows reliability issues impacting a large segment of the user base. |
| [#2574](https://github.com/Hmbown/DeepSeek-TUI/issues/2574) | Open | 4-comment feature request: Add configurable provider fallback chains that automatically switch to a backup inference backend on 429, 5xx, or quota-exhaustion errors. | Eliminates the need for users to manually interrupt workflows and run the `/provider` command when their primary API fails. |
| [#2629](https://github.com/Hmbown/DeepSeek-TUI/issues/2629) | Open | 4-comment v0.8.61 bug: Persistent 401 invalid API key errors when connecting to popular regional providers SiliconFlow and Tencent Cloud TokenHub. | Blocks access for thousands of Chinese users running self-hosted and domestic inference workloads. |
| [#3004](https://github.com/Hmbown/DeepSeek-TUI/issues/3004) | Open | 4-comment enhancement: Support dynamically fetching API keys via user-defined shell scripts instead of storing them in plaintext config files. | Solves critical security pain points for users managing secrets with password managers like KeePassXC and syncing dotfiles across devices. |
| [#2739](https://github.com/Hmbown/DeepSeek-TUI/issues/2739) | Open | 3-comment bug: Long-running tasks hang indefinitely, with users reporting full session state loss after forcing cancellation and resuming with `--continue`. | Breaks trust in the tool for multi-step work like large refactoring and cross-file bug fixing. |
| [#1679](https://github.com/Hmbown/DeepSeek-TUI/issues/1679) | Open | 3-comment v0.8.61 bug: SSE multi-agent parallel workflows hit 45s timeouts and cause UI rendering corruption on Windows 11. | Breaks the advertised parallel sub-agent feature, forcing users to manually fall back to slow serial execution for batch tasks. |
| [#874](https://github.com/Hmbown/DeepSeek-TUI/issues/874) | Open | 1-comment v0.8.61 feature gap: User inputs typed mid-turn during Agent mode are queued and not processed until all pending todo items complete. | Removes granular user control for correcting agent mistakes or pausing execution mid-long task. |

## 4. Key PR Progress (Top 10)
| PR # | Status | Details |
|------|--------|---------|
| [#3244](https://github.com/Hmbown/DeepSeek-TUI/pull/3244) | Closed | Fix for the built-in self-updater: Adds retry logic for transient GitHub release metadata and asset download failures, reducing update failure rates on unstable network connections. |
| [#3235](https://github.com/Hmbown/DeepSeek-TUI/pull/3235) | Closed | New feature: Adds full first-class support for DeepInfra, the OpenAI-compatible inference platform hosting 100+ open source models including DeepSeek V4. |
| [#3241](https://github.com/Hmbown/DeepSeek-TUI/pull/3241) | Closed | UX improvement: Adds `$skill-name` direct alias syntax in the chat composer for activating skills, alongside full autocompletion support, to replace the longer existing `/skill <name>` flow. |
| [#3233](https://github.com/Hmbown/DeepSeek-TUI/pull/3233) | Closed | Infrastructure change: Implements atomic persistent storage for ask-only execution permission rules, laying the foundational backend for the full typed execution policy system requested in #1186. |
| [#3206](https://github.com/Hmbown/DeepSeek-TUI/pull/3206) | Closed | New community feature: WeChat bridge built on top of the existing Feishu bridge and Tencent OpenClaw, enabling users to interact with DeepSeek TUI directly from their WeChat workflow. |
| [#3257](https://github.com/Hmbown/DeepSeek-TUI/pull/3257) | Closed | Runtime refactor: Makes `app-server --http` / `--mobile` the canonical runtime API entrypoint, standardizing the remote control surface for 3rd party mobile and desktop integrations. |
| [#3242](https://github.com/Hmbown/DeepSeek-TUI/pull/3242) | Open | New configurable feature: Adds a `workspace_follow_symlinks` toggle that makes directory traversal and search tools follow symbolic links, solving workflow friction for monorepo power users. |
| [#2239](https://github.com/Hmbown/DeepSeek-TUI/pull/2239) | Open | Full localization PR: Wires Phase 1-4b i18n message IDs across 47 UI files, fixing 109 upstream compile errors to enable upcoming multi-language support including Simplified Chinese. |
| [#3236](https://github.com/Hmbown/DeepSeek-TUI/pull/3236) | Open | Codex mode follow-up: Completes DeepInfra provider integration for the long-running goal mode, adding missing TUI, CLI and TOML alias wiring not covered in the initial #3235 PR. |
| [#3239](https://github.com/Hmbown/DeepSeek-TUI/pull/3239) | Open | Documentation update: Adds full getting-started guidance for Atlas Cloud, the OpenAI-compatible inference platform hosting 59+ open source models, no code changes required. |

## 5. Feature Request Trends
The most requested feature directions from the past 24 hours are:
1. **Multi-provider usability upgrades**: Auto fallback logic for API failures, expanded official support for regional inference platforms (DeepInfra, SiliconFlow, Atlas Cloud, Tencent TokenHub)
2. **Execution policy hardening**: Persistent typed permission rules for tool operations, dynamic API key fetching to eliminate plaintext secret storage, auto permission sanitization for dispatched sub-agents
3. **Agent control UX improvements**: First-class dedicated UI for agent clarification questions, mid-turn user intervention support, a persistent goal mode workflow surface instead of the narrow `/goal` command
4. **Ecosystem integration**: Listing on the Agent Client Protocol public registry, new WeChat bridge support, native Zed editor integration

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. **Windows platform reliability gaps**: Persistent UI freezes, SSE parallel sub-agent timeouts, and UI rendering corruption that break core advertised features on Windows 11
2. **Sub-agent workflow instability**: Hard 120s API response ceilings that kill long-running sub-tasks, no checkpoint/resume support for child tasks, TUI resource saturation during high sub-agent fanout
3. **YOLO mode reliability issues**: Unintended task interruptions from MCP prompt leaks, no recoverable state after common stall errors that force full workflow restarts
4. **Legacy environment compatibility**: Missing glibc 2.38+ dependency that blocks execution on widely used Ubuntu 22.04 (glibc 2.35) server deployments


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*