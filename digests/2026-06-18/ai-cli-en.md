# AI CLI Tools Community Digest 2026-06-18

> Generated: 2026-06-17 23:24 UTC | Tools covered: 9

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

# 2026-06-18 AI CLI Tools Cross-Tool Comparison Report
*For Technical Decision-Makers and Developer Teams*

---

## 1. Ecosystem Overview
As of mid-June 2026, the AI CLI tool ecosystem is in a high-growth, rapid-iteration phase, with established vendor-backed offerings reaching 1.0+ stable maturity and independent open source projects filling critical gaps for self-hosted, regional, and enterprise use cases. All major players are converging on shared core capabilities including Model Context Protocol (MCP) support, multimodal TUI functionality, and hardened agent execution guardrails, while competing to differentiate on cross-platform compatibility and workflow-specific optimizations. Six of the nine tracked tools shipped new feature patches or pre-releases in the 24-hour observation window, outpacing typical traditional developer tool release cadences by a factor of 2-3. Regulated enterprise deployment requirements, including TLS inspection compatibility and granular access controls, have emerged as a top cross-community priority after being a largely unaddressed edge case 12 months prior.

## 2. Activity Comparison
| Tool Name | Active Updated Issues (24h) | Modified/Merged PRs (24h) | 24h Release Status |
|---|---|---|---|
| Claude Code | 10 | 4 | Shipped stable v2.1.181 |
| OpenAI Codex | 10 | 10 | Published 3 Rust runtime alpha pre-releases (no stable) |
| Gemini CLI | 10 | 10 | Shipped v0.48.0-preview.0 pre-release |
| GitHub Copilot CLI | 10 | 0 | Shipped stable v1.0.64-0 (all fixes bundled in release) |
| Kimi Code CLI | 2 | 0 | No new public releases, only 2 new feature requests filed |
| OpenCode | 10 | 10 | Shipped stable v1.17.8 |
| Pi | 10 | 10 | No new public releases, all changes targeting upcoming stable milestone |
| Qwen Code | 10 | 10 | Shipped 3 stable/preview releases (v0.18.2, v0.18.3, v0.18.3-preview.0) |
| DeepSeek TUI (CodeWhale) | 10 | 10 | No new public releases, changes targeting v0.8.62 stability and v0.9.0 collaborative roadmap |

## 3. Shared Feature Directions
These top requirements appear across 4+ independent tool communities, indicating broad universal user demand:
1. **MCP ecosystem standardization**: 6 out of 9 tools (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI, OpenCode, Pi) list top user requests for cross-client MCP schema parity, headless/SSH remote MCP OAuth flows, subagent MCP access, and centralized third-party MCP credential management.
2. **Enterprise deployment compatibility**: 5 tools (Kimi Code CLI, Pi, OpenCode, Copilot CLI, Qwen Code) see high demand for native support for mandatory corporate TLS MiTM inspection, centrally managed custom private model endpoints, and native integration with enterprise identity providers.
3. **Transparent cost and context control**: 5 tools (OpenAI Codex, Gemini CLI, Qwen Code, Claude Code, Copilot CLI) have users requesting exposed real-time token usage tracking, user-operable context compaction toggles, and configurable context window caps that match native model limits, rather than artificial vendor-imposed 200k/1M token caps.
4. **Agent execution hardening**: 4 tools (OpenCode, DeepSeek TUI, Gemini CLI, Claude Code) prioritize requests for scoped granular permission controls, sandboxing that restricts agent file/terminal access exclusively to the active working directory, and guardrails to block unprompted self-referential agent loops that stray from user intent.
5. **Cross-platform standards compliance**: 4 tools (Pi, OpenCode, Gemini CLI, OpenAI Codex) receive consistent feedback asking for adherence to Linux XDG base directory specifications, preservation of non-UTF-8 file encodings for legacy codebases, and fixed compatibility for Wayland, WSL, and musl/Alpine container environments.

## 4. Differentiation Analysis
The ecosystem splits into three distinct groups with divergent priorities:
1. **Vendor-owned official CLI tools (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Qwen Code)**: Feature focus is tight native integration with the parent vendor’s LLM platform, prioritizing first-party ecosystem lock-in over broad multi-provider support. Target users are mainstream developers already using the parent platform, with zero-config native auth flows that reduce setup friction. Technical approaches prioritize stability for official feature sets, with optional server-side A/B testing (observed for Claude Code) that can override local user configurations.
2. **Independent open source multi-provider tools (OpenCode, Pi)**: Feature focus is maximum provider flexibility, with native support for every major commercial LLM, self-hosted local models, and regional inference platforms. Target users are power users, DevOps teams, and self-hosted operators that run mixed LLM workloads across multiple vendors. Technical approaches use modular provider architectures, no forced telemetry, and broad support for niche use cases like Nix package management and LAN-disconnected air-gapped deployments.
3. **Regional China market-focused tools (Kimi Code CLI, DeepSeek TUI)**: Feature focus is optimized native compatibility for local Chinese inference platforms (Moonshot, Zhipu, DeepSeek) and native IM/enterprise tooling integrations (WeChat, DingTalk, QQ) not supported by Western-focused tooling. Target users are Chinese enterprise teams bound by local data residency requirements. Technical approaches use lightweight low-overhead TUI designs, prioritized fixes for regional LLM API schema idiosyncrasies, and full native i18n localization.

## 5. Community Momentum & Maturity
- **Highest maturity and largest active user bases**: The four largest vendor tools (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI) have top open issues drawing hundreds of upvotes and 100+ comments, indicating massive mainstream adoption. GitHub Copilot CLI is the most mature of this cohort, having achieved 1.0 stable status with full GA for MCP management and security review capabilities, and resolving the high-impact post-outage model blocking bug within 24 hours to meet enterprise SLA expectations.
- **Rapidly iterating independent open source projects**: OpenCode, Pi, Qwen Code, and DeepSeek TUI all processed 10 modified/merged PRs in the 24h window, indicating extremely active contributor communities, fast issue triage, and feature shipping cycles measured in days rather than weeks. OpenCode’s top feature request for an official VS Code extension (110 upvotes) signals very strong organic user demand for expanded IDE integration.
- **Lowest current activity**: Kimi Code CLI is in a slower maintenance phase with no new releases or merged PRs in the observation window, though newly submitted enterprise feature requests indicate growing adoption among regulated corporate users.

## 6. Trend Signals
These community feedback patterns provide actionable reference value for engineering teams:
1. **MCP interoperability is now table stakes**: Any new AI CLI tool launching in 2026 that does not support the standard MCP protocol will face significant user rejection. Teams investing in custom CLI tooling should prioritize MCP compliance before building niche custom features.
2. **Enterprise AI CLI deployments are now mainstream**: The overwhelming demand for TLS MiTM support and central custom model management confirms that the early adopter phase for AI CLI tools is over, and large regulated enterprise customers are now the fastest growing user segment. Teams rolling out AI CLI to enterprise fleets should prioritize multi-provider open source options (OpenCode, Pi) for maximum deployment flexibility, rather than vendor-locked official CLI offerings.
3. **Native context compaction is a pervasive unresolved pain point**: Three leading vendors report widespread user complaints of auto-compaction breaking multi-hour long-running task progress. Teams building agentic AI workflows should implement their own custom checkpoint tracking logic, rather than relying on native CLI auto-compaction for long production tasks.
4. **Independent tools have reached full feature parity with vendor CLIs**: The latest 24h

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (As of 2026-06-18)
---
## 1. Top Skills Ranking
Ranked by cross-referenced linked issue engagement, update recency, and user impact (PR comment fields were not populated in the source dataset):
1. **PR #1298: Fix full `run_eval.py` 0% recall bug** | Status: Open | [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)
   Functionality: Resolves the widely reported broken skill description optimization loop that returned 0% recall for all skill tests regardless of input, alongside fixes for Windows stream reading, trigger detection, and parallel worker logic. Discussion highlights: Directly addresses the 12-comment top bug issue #556, with 10+ independent community reproductions of the original failure.
2. **PR #83: Add skill-quality-analyzer and skill-security-analyzer meta-skills** | Status: Open | [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)
   Functionality: Two meta audit skills that evaluate custom Claude Skills across 5 dimensions including structure, documentation, and security vulnerability surface. Discussion highlights: Proposed as a mitigation for the 7-comment reported trust boundary abuse vulnerability for unofficial skills distributed under the official `anthropic/` namespace.
3. **PR #514: Add document-typography skill** | Status: Open | [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)
   Functionality: Automated typographic quality control for generated documents that eliminates orphan word wraps, stranded widow section headers at page breaks, and numbering misalignment. Discussion highlights: Framed as a universal quality-of-life improvement that fixes gaps affecting every document Claude generates for end users.
4. **PR #568: Add ServiceNow platform skill** | Status: Open | [anthropics/skills PR #568](https://github.com/anthropics/skills/pull/568)
   Functionality: Comprehensive end-to-end assistant for the full ServiceNow platform, covering ITSM, SecOps, IT asset management, field service management, and IntegrationHub workflows. Discussion highlights: One of the most requested enterprise vertical skills to date for large corporate Claude deployments.
5. **PR #335: Add masonry-generate-image-and-videos skill** | Status: Open | [anthropics/skills PR #335](https://github.com/anthropics/skills/pull/335)
   Functionality: Native integration with Masonry AI’s generation stack to support text-to-image (Imagen 3.0) and text-to-video (Veo 3.1) workflows directly via Claude Code. Discussion highlights: Fills a high user demand gap for end-to-end media generation without switching external tools.
6. **PR #444: Add AURELION skill suite** | Status: Open | [anthropics/skills PR #444](https://github.com/anthropics/skills/pull/444)
   Functionality: Four interconnected cognitive framework skills for structured professional thinking, persistent memory, and AI collaboration for knowledge work teams. Discussion highlights: Designed as a reusable framework for building custom agent workflows without reimplementing core cognitive guardrails.

---
## 2. Community Demand Trends
Distilled from top-voted and high-comment public issues:
1. **Enterprise deployment readiness**: The top community request (#228, 14 comments) is native org-wide skill sharing to eliminate the current tedious manual .skill file distribution flow via Slack/Teams. Secondary enterprise demands include native AWS Bedrock skill compatibility, and broad vertical skill support for SAP, ServiceNow, and SharePoint internal document workflows.
2. **Skill creation toolchain hardening**: The second highest engagement topic (12 comments for #556, 6+ related follow-up issues) is fixing broken core skill-creator validation and evaluation scripts that break description optimization, produce silent YAML parsing failures, and cause multi-byte character panics.
3. **Security and trust guardrails**: Multiple high-priority issues call for namespace separation for community-contributed skills, duplicate skill removal logic to prevent redundant context window bloat, and built-in pre-deployment skill security scanning.
4. **Open ecosystem interoperability**: Feature requests for exposing Skills via the Model Context Protocol (MCP), multi-file inline reference bundling for skills, and native support for open standard document formats (ODT/ODS) are growing rapidly.

---
## 3. High-Potential Pending Skills
These active, recently updated PRs are near final acceptance and likely to land in the main branch imminently:
1. Full skill-creator core bug fix stack (PRs #1298, #361, #362) | All updated June 2026: Resolve the 0% recall evaluation bug, unquoted YAML special character parsing failures, and UTF-8 multi-byte panics, directly addressing 3 high-priority open issues with 25 total combined user comments.
2. Full Windows compatibility stack (PRs #1050, #1099) | Updated May 2026: Two complementary PRs fix all reported Unix-assumption bugs in skill-creator scripts including missing `PATHEXT` support, non-UTF-8 encoding failures, and broken Windows subprocess pipe handling, fully resolving issue #1061.
3. DOCX corruption fix PR #541 | Updated April 2026: Fully tested fix for the shared `w:id` OOXML name collision bug that corrupted DOCX files with existing bookmarks when Claude adds tracked changes.

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community’s most concentrated demand at the platform level is a fully hardened, cross-platform skill creation toolchain with robust security guardrails, that eliminates manual skill distribution friction for large enterprise deployments while expanding official pre-built skill coverage for high-priority vertical enterprise productivity and generative media use cases.

---

# Claude Code Community Digest | 2026-06-18
---
## 1. Today's Highlights
Anthropic shipped the v2.1.181 stable release yesterday with two highly requested usability improvements for inline configuration and macOS sandboxing. The highest-engagement open bug on the repository (118 comments, 143 👍) reporting multi-minute unresponsive freezes during long prompt execution remains unresolved for over 4 months. Active community triage uncovered a root cause for widespread broken permission bypass settings on macOS desktop, traced to unannounced server-side A/B test flags overriding local user configurations.

## 2. Releases
### v2.1.181
New features shipped in the last 24 hours:
- Added universal `/config key=value` inline syntax to adjust any runtime setting directly from the user prompt (e.g. `/config thinking=false`), supported across interactive TUI, one-shot `-p` executions, and Remote Control workflows
- Added new opt-in `sandbox.allowAppleEvents` setting for macOS that permits sandboxed child commands to send system Apple Events for native OS automation
- Partial release notes confirm a new `CLAUDE_CLIENT_` environment variable feature, with full details truncated at time of publishing.

## 3. Hot Issues (Top 10)
1. **[#26224] Urgent multi-minute prompt freeze bug** (118 comments, 143 👍): The most popular open bug reports users experiencing 5-20 minute unresponsive hangs even on moderate-length prompts, unresolved since February 2026, affecting all recent CLI and desktop versions. https://github.com/anthropics/claude-code/issues/26224
2. **[#44243] Multi-workspace support for built-in Slack MCP connector** (27 comments, 57 👍): Cross-org consultants and distributed team users are blocked by the current single Slack workspace per account limit, no workaround exists to connect secondary workspaces. https://github.com/anthropics/claude-code/issues/44243
3. **[#65514] False large-context usage lockout for Windows VS Code Pro users** (18 comments): Multiple Pro plan users report being incorrectly denied access to 1M token context windows with only 17% of their monthly quota consumed, tagged as a duplicate bug under active triage. https://github.com/anthropics/claude-code/issues/65514
4. **[#58522] Resolved macOS desktop session crash regression** (8 comments): Now closed, this bug broke all new Code-mode sessions after the May 9 app.asar update, where invalid `local_` prefixed session IDs passed to the bundled CLI caused immediate exit code 1 failures. https://github.com/anthropics/claude-code/issues/58522
5. **[#62205] Root cause for permission bypass breakage on macOS desktop** (6 comments, widespread duplicates): Community engineers identified that two unannounced server-side A/B test flags silently override local `permissions.defaultMode: bypassPermissions` settings, forcing all sessions into manual Accept Edits mode without user opt-in. https://github.com/anthropics/claude-code/issues/62205
6. **[#48973] Broken mid-thread Opus/Sonnet model switching in Cowork mode** (5 comments, 11 👍): Regression introduced after the April 15 desktop redesign removed the longstanding ability to toggle model tiers dynamically based on task complexity in existing threads. https://github.com/anthropics/claude-code/issues/48973
7. **[#68721] v2.1.178 regression removes native team management tools** (5 comments, 4 👍): Admin users lost access to the built-in `TeamCreate` and `TeamDelete` native operations after the 2.1.178 bump, breaking organization admin workflows. https://github.com/anthropics/claude-code/issues/68721
8. **[#69205] Broken MCP OAuth for SSH-connected remote machines**: Newly filed bug notes that Google OAuth redirect restrictions make official MCP auth completely unworkable for headless remote dev environments. https://github.com/anthropics/claude-code/issues/69205
9. **[#46724] Resolved inconsistent CLAUDE.md rule adherence** (7 comments, 4 👍): Longstanding pain point where Claude repeatedly ignored both project-level and global CLAUDE.md workflow instructions is now marked fixed. https://github.com/anthropics/claude-code/issues/46724
10. **[#51393] Resolved Windows TUI scrollback breakage** (2 comments, 2 👍): Now closed, this regression blocked all scroll access to earlier terminal output while Claude Code was running in Windows Terminal, requiring users to exit the session to view history. https://github.com/anthropics/claude-code/issues/51393

## 4. Key PR Progress
Only 4 public PRs were modified in the last 24 hours, full list below:
1. **[#19867] Open: Code review plugin re-run fix**: Adjusts the code review plugin logic to no longer automatically skip reviews when new commits are pushed after the initial review, and adds documentation for the explicit `--force` override flag. https://github.com/anthropics/claude-code/pull/19867
2. **[#33443] Open: Devcontainer Dockerfile update**: Bumps the pinned Node.js version to 24.14 and replaces the deprecated npm-based Claude Code installation flow in the official devcontainer with the native official installer. https://github.com/anthropics/claude-code/pull/33443
3. **[#60427] Merged: README capitalization cleanup**: Standardizes official GitHub product naming capitalization in the root repository README for brand consistency. https://github.com/anthropics/claude-code/pull/60427
4. **[#60732] Merged: Plugins README wording polish**: Improves readability of the third-party plugin ecosystem description in the plugins documentation without modifying core technical details. https://github.com/anthropics/claude-code/pull/60732

## 5. Feature Request Trends
The highest-priority user requests fall into three clear categories:
1. Expanded MCP integration capabilities, led by multi-workspace native Slack support, followed by fixes for headless remote MCP OAuth flows
2. Advanced session control tools, including native `/restart` and `/handoff` commands, mid-session project directory context switching, and exposed context usage metrics for custom hook workflows
3. TUI/UI quality of life adjustments: toggle to disable auto-shown PR badges in the status bar, block interruptive `AskUserQuestion` prompts from stealing active user input focus, and browser-side persistent project memory equivalent to local CLAUDE.md for claude.ai web users.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. Unannounced server-side A/B test flag rollouts that silently override local user config (most notably permission bypass rules on macOS) with no user-facing visibility or global opt-out
2. Persistent long-running session freezes of 5+ minutes on complex prompts, the most upvoted unresolved open bug across the repository
3. Frequent post-update regressions that break core workflows, including model tier switching, terminal scrollback, session spawn success, and CLAUDE.md rule adherence
4. Gaps for headless/remote environments, including non-functional MCP OAuth flows for SSH-connected machines, and missing native team admin tooling after recent CLI version bumps.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-18
---
## 1. Today's Highlights
Three consecutive pre-release Rust runtime builds for Codex 0.141.x shipped in the last 24 hours, focused on low-level runtime stability ahead of the next stable launch. The most popular open feature request for native Linux Codex Desktop support crossed 590+ upvotes, while the core team merged a full stacked PR set for a new native plugin installation extension system that will simplify third-party developer workflow onboarding. Multiple high-impact bugs affecting long-running task reliability and cross-platform WSL path handling received active maintainer updates over the past day.

## 2. Releases
Three new alpha pre-releases for the Codex Rust runtime were published in the last 24 hours:
- [rust-v0.141.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.4), [rust-v0.141.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.5), [rust-v0.141.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.6)
These builds are targeted at early adopters testing the Codex CLI, TUI, and native runtime, and include incremental fixes for plugin system, path sync, and session stability. No stable 0.141 release is scheduled yet.

## 3. Hot Issues
The top 10 most active updated issues:
1. **[#11023 Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** | 596 👍, 121 comments: The highest-voted open feature request, created 4 months prior, received new activity as Linux devs report macOS-specific power drain on their Codex instances makes their laptops unusable, pushing demand for a native Linux build.
2. **[#18960 Frequent reconnect loop in Codex App: websocket closed by server](https://github.com/openai/codex/issues/18960)** | 34 👍, 44 comments: Pro tier users report repeated streaming failures mid-task that interrupt long-running code generation and refactor workflows.
3. **[#28190 ripgrep bundled in Codex CLI is blocked by macOS Gatekeeper](https://github.com/openai/codex/issues/28190)** | 53 👍, 31 comments: Out-of-the-box new macOS installs block the `rg` utility used for full-project code search, breaking core CLI functionality with no documented workaround.
4. **[#5957 Auto compaction causes GPT-5-Codex to forget it is mid-task](https://github.com/openai/codex/issues/5957)** | 27 comments: Enterprise users report automatic context compaction kills multi-file refactor sessions mid-workflow, with the model losing track of already edited files and halting work prematurely.
5. **[#28015 False positive cybersecurity safety check blocks normal local repo work](https://github.com/openai/codex/issues/28015)** | 20 comments: Pro tier users report paid interactive sessions are interrupted with unnecessary security prompts for mundane DevOps hygiene tasks like checking git history or rotating local credentials.
6. **[#28094 Windows WSL Codex App rewrites /home paths as C:\home, loses chat associations](https://github.com/openai/codex/issues/28094)** | 17 comments: Thousands of Windows + WSL devs are left with broken project sync after the latest app update, with valid working directories marked as missing and prior work chats unlinked to their repos.
7. **[#5041 (CLOSED) VS Code Codex extension blocks network access even with --danger-full-access](https://github.com/openai/codex/issues/5041)** | 10 👍, 12 comments: A critical sandbox bug that broke all external API calls for users who explicitly granted full network access was resolved yesterday, with a patch shipping in the next extension release.
8. **[#25792 Context compaction forgets AGENTS rules, task progress jumps from 97% back to 42%](https://github.com/openai/codex/issues/25792)** | 9 comments: Users report hours of task progress are wasted automatically after context compaction resets the model's task tracking state without warning.
9. **[#25921 Codex Desktop generates unlimited Crashpad dumps growing 5GB+ per day](https://github.com/openai/codex/issues/25921)** | 8 comments: Runaway crash logging silently fills up developer SSDs with no user-facing alert or configuration option to disable the unconstrained dump generation.
10. **[#28672 Business Codex repeated 401 invalidated OAuth token errors in dev containers](https://github.com/openai/codex/issues/28672)** | 3 comments: A new report from US-based Business tier teams notes both user seats get forced re-authentication and phone verification every few messages when running Codex inside Ubuntu dev containers.

## 4. Key PR Progress
1. **[#28796 Add plugin install extension data contract](https://github.com/openai/codex/pull/28796)** | The first PR in a 5-part stack that introduces a standalone `codex-plugin-installs-extension` crate, decoupling plugin installation logic from the core runtime to simplify future UI integration.
2. **[#28802 Define plugin install extension tool schema](https://github.com/openai/codex/pull/28802)** | Standardizes the new `request_plugin_installs` tool to support both single-entry TUI workflows and multi-selection desktop client plugin browsing.
3. **[#28780 unified-exec: retain PathUri in command events](https://github.com/openai/codex/pull/28780)** | Preserves full native path URIs across execution events to fix WSL and cross-platform path sync issues, while maintaining backwards compatibility with existing client path string formats.
4. **[#28806 optimize resume and fork history](https://github.com/openai/codex/pull/28806)** | Implements checkpoint-backed resume logic and copy-on-write fork operations that drastically reduce latency for loading large long-running sessions or duplicating existing work threads.
5. **[#28707 interrupt sessions when rollout budgets expire](https://github.com/openai/codex/pull/28707)** | Automatically halts multi-threaded sessions once their shared context token budget is exhausted, preventing unintended excess usage from runaway background subagent tasks.
6. **[#28808 Fix goal-first threads in thread/list](https://github.com/openai/codex/pull/28808)** | Resolves a regression where sessions launched directly via the `/goal` command never appeared in the Codex app thread listing after an app restart.
7. **[#28148 add experimental managed Amazon Bedrock login and logout](https://github.com/openai/codex/pull/28148)** | Adds native UI controls for users to create and remove Codex-managed Amazon Bedrock API credentials, eliminating the need for manual config file edits.
8. **[#27812 Cache plugin metadata for tool suggestions](https://github.com/openai/codex/pull/27812)** | Pre-caches loaded plugin manifest data to eliminate redundant disk I/O during every sampling request, cutting end-to-end generation latency for workflows that load many third-party tools.
9. **[#28812 Expose response item IDs](https://github.com/openai/codex/pull/28812)** | Adds stable unique IDs to all serialized response items to fix gaps in history tracking for the upcoming persistent rollout feature.
10. **[#27500 Support openai/form extended form elicitations](https://github.com/openai/codex/pull/27500)** | Enables native structured multi-field form prompts for MCP tools, letting developers collect complex user input directly inside Codex workflows without custom UI work.

## 5. Feature Request Trends
- Top of community demand is full native Linux support for the Codex Desktop app, as an alternative to macOS builds with reported power and performance issues on developer hardware.
- The second highest priority request is ChatGPT-style Project organization for saved work chats, with shared cross-chat memory, persistent uploaded assets, and support for moving existing chats between project containers.
- Other fast-growing requests include expanded limits or adjusted billing for `/goal` long-running task mode, support for plugin skill directories declared as multiple paths instead of a single root, and public sharing flows for local developer plugins via the TUI marketplace.

## 6. Developer Pain Points
The most frequently recurring frustrations reported in the last 24 hours are:
1. Persistent reliability bugs in automatic context compaction that break long-running task progress, with no user-facing toggle to disable the feature entirely.
2. Broken cross-platform path sync for WSL, Windows, and containerized dev environments that corrupt work chat associations and break project discovery.
3. Overly aggressive safety check systems that trigger false positives for mundane local DevOps work, interrupting paid sessions without warning.
4. Unconstrained background logging and dump generation that silently consumes SSD storage, paired with macOS Gatekeeper blocks that break core bundled utilities out of the box for new users.
5. Session persistence bugs that leave work threads stuck requiring manual approvals after quota exhaustion, app restarts, or version updates.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-18
*Source: github.com/google-gemini/gemini-cli*

---

## 1. Today's Highlights
The latest 24-hour update cycle brings the v0.48.0-preview.0 pre-release launch, paired with critical bug fixes targeting high-impact user pain points including generalist agent hangs, garbled non-English web fetch output, and CI/CD supply chain vulnerabilities. New quality-of-life features add native terminal image drag-and-drop and clipboard paste support for full multimodal parity, alongside security hardening for Auto Memory and MCP workflow handling. The team is also advancing long-running roadmap work to implement AST-aware codebase navigation that will cut token overhead by 30-40% for typical code editing tasks.

## 2. Releases
A new pre-release `v0.48.0-preview.0` shipped overnight:
- Includes a recent nightly version bump, plus merged dependency management hardening that enforces 14-day update cooldowns for npm packages to prevent unplanned breaking changes
- Auto-generated changelog for the release is under final review in [PR #27999](https://github.com/google-gemini/gemini-cli/pull/27999) ahead of full stable launch.

## 3. Hot Issues
Top 10 high-impact updated issues sorted by user engagement:
1. [#21409 Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409): 7 comments, 8 👍 – The most upvoted active bug, with users reporting even trivial operations like folder creation freeze for up to an hour. The only current workaround is explicitly disabling subagent deferral, creating major workflow friction for all agent-mode users.
2. [#22745 Assess AST-aware file operations impact](https://github.com/google-gemini/gemini-cli/issues/22745): 7 comments, 1 👍 – Core roadmap epic investigating AST-native reads, search and mapping that would eliminate misaligned partial file reads, reduce token noise, and cut unnecessary model round trips for code tasks.
3. [#24353 Component-level evaluation infrastructure](https://github.com/google-gemini/gemini-cli/issues/24353): 7 comments – Long-running quality epic tracking 76 existing behavioral test suites that run across 6 supported Gemini model variants to catch agent regressions before they reach end users.
4. [#22323 Subagent Max Turn failure reported as successful](https://github.com/google-gemini/gemini-cli/issues/22323): 6 comments, 2 👍 – Critical trust-breaking bug where subagents mark tasks as fully completed even when they hit maximum turn limits before doing any analysis, leaving users unaware their work was never executed.
5. [#21968 Underutilization of custom skills and subagents](https://github.com/google-gemini/gemini-cli/issues/21968): 6 comments – Users report custom defined skills (e.g. Gradle, Git workflow handlers) are never invoked by the model unless explicitly prompted, wasting engineering time spent building custom workflow extensions.
6. [#25166 Shell execution stuck at "Awaiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166): 4 comments, 3 👍 – Core runtime bug that freezes automated runs after trivial non-interactive shell commands finish, breaking CI/CD automation use cases.
7. [#26525 Add deterministic secret redaction for Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525): 5 comments – High priority security issue where unredacted transcript content is sent to model context before secret redaction runs, creating credential leak risks for user sessions.
8. [#26522 Stop infinite low-signal session retries in Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26522): 5 comments – Resource waste bug that causes empty or irrelevant user sessions to be reprocessed indefinitely, bloating background process resource usage.
9. [#21983 Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983): 4 comments, 1 👍 – Platform-specific breakage affecting all Linux desktop users running the standard Wayland display server, blocking headless browser automation workflows entirely.
10. [#22093 Unsanctioned subagent execution post v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093): 2 comments – Users report subagents run automatically after upgrading even when explicitly disabled in their config, consuming unapproved tokens for unwanted operations.

## 4. Key PR Progress
1. [#27948 Pin all dependencies and enforce 14-day npm cooldown](https://github.com/google-gemini/gemini-cli/pull/27948): Supply chain security hardening that strips all loose `^`/`~` version ranges from package manifests, eliminating unexpected breaking changes from auto-updated dependencies.
2. [#27997 Remove references to deprecated free/consumer tiers](https://github.com/google-gemini/gemini-cli/pull/27997): Updates all public documentation to align with Google's June 2026 shutdown of individual free Gemini tiers, preventing user confusion about unavailable features.
3. [#27996 Fix web-fetch charset detection from Content-Type headers](https://github.com/google-gemini/gemini-cli/pull/27996): Resolves garbled output for non-UTF-8 content (GBK, ISO-8859-1) common on Chinese, Japanese and legacy sites, expanding international web scraping support.
4. [#27995 Eliminate false positive duplicate agent name warning](https://github.com/google-gemini/gemini-cli/pull/27995): Removes the annoying spurious warning that popped up every time users launched the CLI from their home directory workspace.
5. [#27859 Add native image drag-and-drop and Ctrl/Cmd+V paste support](https://github.com/google-gemini/gemini-cli/pull/27859): Major multimodal UX upgrade that lets users paste images directly from clipboard or drag-and-drop files into the terminal, no manual file path typing required.
6. [#27753 Fix CI workflow_run fork artifact poisoning vulnerability](https://github.com/google-gemini/gemini-cli/pull/27753): Critical security patch that blocks attacker-controlled code from running with repository secrets on untrusted fork PRs.
7. [#27986 Expose cached and thought token counts in ACP mode](https://github.com/google-gemini/gemini-cli/pull/27986): Adds missing token usage fields for Gemini's cached context and reasoning tokens, fixing the 3x over-cost estimate bug that made ACP billing tracking inaccurate.
8. [#27979 Wrap MCP resource outputs in untrusted markers](https://github.com/google-gemini/gemini-cli/pull/27979): Security hardening to prevent prompt injection attacks from malicious third-party MCP server resources.
9. [#27854 Fix pending tool approval race conditions](https://github.com/google-gemini/gemini-cli/pull/27854): Prevents unintended operations by halting state progression while users review tool execution permissions, and adds sequential file write execution to eliminate race conditions.
10. [#27643 Resolve parallel workspace build race condition](https://github.com/google-gemini/gemini-cli/pull/27643): Stabilizes the monorepo build pipeline by splitting compilation into sequential topological stages, eliminating random failed CI runs caused by out-of-order dependency compilation.

## 5. Feature Request Trends
The top prioritized user-requested roadmap directions from recent issues are:
1. **AST-native code tooling**: Widespread demand for AST-aware reads, search, and codebase mapping to eliminate token waste and speed up large codebase editing workflows
2. **Auto Memory maturity**: Multiple linked requests to harden the session memory feature with deterministic redaction, infinite retry protection, and better invalid patch handling
3. **Browser agent resilience**: Users are asking for persistent session lock recovery, full settings override support, and better headless compatibility for end-to-end web automation tasks
4. **Agent self-awareness**: Feature requests for the CLI to natively understand its own flags, hotkeys, and self-execution capabilities to act as a fully self-documenting tool for new users
5. **Cross-platform consistency**: Multiple requests to fix Linux Wayland, macOS, and Windows terminal rendering inconsistencies to deliver uniform behavior across all desktop environments.

## 6. Developer Pain Points
Recurring high-frequency frustrations raised across updated issues:
1. Agent stability regressions are the top complaint, with widespread reports of hanging subagents, incorrect success reporting, and underutilization of custom user-configured skills
2. Spurious UX friction including unprompted duplicate agent warnings, frozen shell prompts after trivial operations, and garbled non-English web content breaks day-to-day workflows
3. Outdated or missing documentation: Undocumented limits (e.g. the 20MB `read_file` size cap), out-of-date references to shut down free tiers, and no official Linux native dependency troubleshooting guide
4. Lack of cost and security visibility: No exposed counts for cached / reasoning tokens leading to unexpected billing, unaddressed secret leak risks in Auto Memory, and previously unpatched CI supply chain vulnerabilities
5. Platform-specific breakages: Non-functional browser agent on Wayland, macOS symlink path resolution test failures, and flickery terminal rendering on resize are commonly reported across community issue threads.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-18
---
## 1. Today's Highlights
Today’s top updates include the official rollout of GitHub Copilot CLI v1.0.64-0, which ships long-awaited Model Context Protocol (MCP) management tools, a new session diagnostics utility, and moves the `/security-review` command out of experimental status for all users. The community is also seeing full resolution for the widespread model blocking bug triggered by the June 16 GitHub Copilot platform outage, with all related support tickets closed within 24 hours. User discussion is heavily focused on MCP interoperability, granular permission controls for interactive mode, and context window tuning for high-performance models like Claude Opus 4.6.

## 2. Releases
### v1.0.64-0 (published 2026-06-18)
This major feature release for Copilot CLI delivers the following new capabilities:
- New `/diagnose` command to auto-analyze current and historical session logs for errors, misconfigurations, and connectivity issues
- Native MCP registry workflow to browse, search, and install MCP servers directly from the CLI without manual config edits
- General availability of the `/security-review` command for all users, no `--experimental` flag required
- Auto-discovery of MCP servers bundled with installed third-party plugins
- New CSV output export support for all MCP tool execution results

## 3. Hot Issues (Top 10)
| Issue | Details | Impact & Community Reaction |
|---|---|---|
| [#1973](https://github.com/github/copilot-cli/issues/1973) | Feature Request: Tool whitelist for Interactive Mode | With 20 upvotes and 10 comments, this is the most popular open feature request: users note that current interactive mode forces manual approval for even low-risk read-only tools (grep, cat, git status) while the `/allow-all` command grants unvetted access to destructive operations, creating a poor usability/security tradeoff. |
| [#2643](https://github.com/github/copilot-cli/issues/2643) | preToolUse: silent command rewrite via updatedInput — confirmation dialog appears even with permissionDecision: allow | 10 comments: this bug breaks custom plugin workflows, preventing hooks from silently automating command edits without forcing end-user confirmation for every modified operation. |
| [#3832](https://github.com/github/copilot-cli/issues/3832) | [Closed] All models show as 'Blocked/Disabled' after June 16 outage | 13 upvotes: the most widely reported post-incident bug, which left users unable to select any model or start new sessions for multiple hours. The issue was fully resolved by the Copilot CLI team within 24 hours of being filed. |
| [#254](https://github.com/github/copilot-cli/issues/254) | copilot-cli keeps asking to login again | 9 comments, 4 upvotes: this long-running unresolved bug impacts GitHub Business account users, dropping authenticated sessions after terminal restarts and forcing repeated re-authentication that breaks workflow continuity. |
| [#3355](https://github.com/github/copilot-cli/issues/3355) | Allow configurable context window for Claude Opus 4.6 (200K cap vs 1M model capability) | 4 upvotes: users report Copilot CLI’s artificial 200K token cap wastes 80% of the model’s native 1M context capacity, triggering frequent unwanted session summarization and compaction during deep technical work. |
| [#3812](https://github.com/github/copilot-cli/issues/3812) | Subagents can no more access MCP tools | 2 comments: a recent regression breaks custom agentic workflows, as top-level agents can still access MCP tools but spawned subagents cannot discover or run MCP functionality at all. |
| [#3730](https://github.com/github/copilot-cli/issues/3730) | Support Enterprise-Managed Custom Models in Copilot CLI | 4 upvotes: enterprise admins note custom OpenAI-compatible models configured centrally via the Copilot Admin dashboard appear in VS Code Copilot but are not exposed in Copilot CLI, creating a major gap for standardized organization-wide rollouts. |
| [#3560](https://github.com/github/copilot-cli/issues/3560) | Execution failed: CAPIError: 400 websocket duplicate item error | 5 comments: this session breaking bug appears only after a tool/function call, with plain chat operations continuing to work normally, severely disrupting interactive workflow for affected users. |
| [#3841](https://github.com/github/copilot-cli/issues/3841) | Copilot CLI incorrectly enforces content exclusions | Newly triaged bug: users report the CLI is enforcing organization content exclusion rules that GitHub documentation explicitly states only apply to web Copilot Code Review, blocking access to local files for no documented reason. |
| [#3835](https://github.com/github/copilot-cli/issues/3835) | Incompatible mcp.json schema with VSCode | Newly filed bug: Copilot CLI uses an alternate `mcpServers` key for MCP configurations while VS Code uses the `servers` key, forcing users to duplicate MCP server declarations to use the same tools across both Copilot clients. |

## 4. Key PR Progress
No new pull requests were opened, updated, or merged for the `github/copilot-cli` repository in the last 24 hours. All recent bug fixes and new feature rollouts are packaged directly into the v1.0.64-0 release shipped earlier today.

## 5. Feature Request Trends
The top trending user requested capabilities, sorted by momentum:
1. **MCP Ecosystem Interoperability**: Users are pushing for schema parity with VS Code, native MCP server declarations directly in skill files, preloading MCP tools for all subagents by default, and persistent OAuth credential storage for third-party MCPs like Google Drive.
2. **Granular Workflow Controls**: Top requests include a dedicated one-step `/effort` command to adjust model reasoning speed, per-repo persistent opt-outs for auto-loaded instruction files, and scoped permission rules for interactive mode.
3. **Enterprise Deployment Usability**: Teams are requesting bulk plugin update commands, full visibility into which models are assigned to spawned subagents, and native support for centrally managed custom admin models.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. Broken post-outage residual functionality: After the June 16 Copilot platform outage, users are still reporting unresolvable transient API retry loops, websocket duplicate ID errors, and MCP access regressions for subagents.
2. Session fragility: Malformed or encrypted attachments (such as password-protected Excel files) can poison entire sessions, causing permanent 400 errors for all subsequent turns even if no new attachment is submitted.
3. Inconsistent resume behavior: The `--resume` flag fails silently for session names with spaces, and does not display the original working directory a session was spawned in, creating confusion for users working across multiple project folders.
4. Unresolved auth bugs: The multi-month old repeated login prompt issue for business accounts remains unfixed, severely disrupting daily CLI usage for enterprise end users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-18
*Source: github.com/MoonshotAI/kimi-cli*

---

## 1. Today's Highlights
No new official releases or merged pull requests for Kimi Code CLI landed in the 24-hour tracking window, but two new open community issues were submitted covering high-impact core workflow enhancements and enterprise deployment compatibility. The newly logged requests signal growing adoption of the CLI across both individual developer hybrid workload use cases and regulated corporate environment use cases, with no initial community comments or upvotes registered on either new submission as of the snapshot timestamp.

## 2. Releases
No new versions of Kimi Code CLI were published in the last 24 hours.

## 3. Hot Issues
Only 2 new noteworthy issues were submitted in the 24-hour window, the full set is listed below:
1. **Feature Request: In-session Agent ↔ Cluster execution mode switching**
   - GitHub link: https://github.com/MoonshotAI/kimi-cli/issues/2459
   - Relevance: This feature would eliminate the need to terminate active work sessions to toggle between lightweight local Agent mode for quick code edits and distributed Cluster mode for large-batch parallel processing workloads, cutting workflow friction for developers running mixed-scale AI-assisted development tasks.
   - Community reaction: 0 comments, 0 👍, newly submitted.
2. **Enhancement: Add user-configurable SSL certificate ignore option**
   - GitHub link: https://github.com/MoonshotAI/kimi-cli/issues/2458
   - Relevance: This change would unblock Kimi Code CLI login for developers on organization-managed devices that run mandatory TLS MiTM inspection via endpoint security tools, a widespread pain point that blocks out-of-the-box CLI usage for many enterprise teams.
   - Community reaction: 0 comments, 0 👍, newly submitted by an enterprise developer.

## 4. Key PR Progress
No new or updated pull requests were logged for the repository in the 24-hour tracking window, no pending feature or fix progress to report today.

## 5. Feature Request Trends
Two clear top requested feature directions emerged from the latest community submissions:
1. Dynamic runtime configuration flexibility: Users are requesting the ability to adjust core execution parameters without terminating active work sessions to support mixed workloads that span local and distributed compute backends.
2. Enterprise network compatibility: Users are prioritizing low-friction, user-facing configuration toggles that support common mandatory corporate network security controls that break default CLI behavior.

## 6. Developer Pain Points
Two high-frequency unaddressed frustrations are visible from new submissions today:
1. Current session architecture enforces a fixed execution mode for the full lifetime of any active Kimi Code CLI session, forcing developers to save state, exit their work, and spin up a new session whenever they need to shift between small local AI tasks and large distributed workloads.
2. Default strict SSL certificate validation creates hard login failures for developers on corporate-managed endpoints running mandatory TLS MiTM inspection, with no documented user-facing workaround for this extremely common enterprise IT policy.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-18
Repository: github.com/anomalyco/opencode

---

## 1. Today's Highlights
The latest v1.17.8 patch release landed with critical performance improvements to session loading workflows and two high-priority provider bug fixes. Community engagement peaked on long-standing top-voted requests for an official VS Code extension and sandboxed agent execution, with a wave of merged PRs resolving cross-platform compatibility gaps for Windows, Cloudflare AI Gateway, and OpenRouter custom model variants. Multiple new feature implementations for auto task-based model routing and local LAN model discovery are now under active review.

---

## 2. Releases
### v1.17.8 (2026-06-18)
- **Core Improvements**: Session timelines load significantly faster, eliminating previous UI flicker and unexpected scroll jumps during chat history rendering.
- **Bug Fixes**:
  1. OpenAI-compatible providers now correctly validate MCP tool schemas that previously failed validation (contributed by @jquense)
  2. Cloudflare AI Gateway now receives user-configured API keys as expected (contributed by @keefetang)

---

## 3. Hot Issues
1. **[#11176][1] Official OpenCode VS Code Extension** (23 comments, 110 👍) | The highest-voted open feature request: users are pushing for native integration inside VS Code to eliminate context switching between the separate OpenCode TUI and code editor, rather than relying on workarounds.
2. **[#2242][2] Agent Sandboxing Support** (72 comments, 54 👍) | Top security-focused request: developers want the option to restrict agent terminal and file access exclusively to the active working directory, matching existing seatbelt implementation for competing tools on macOS to prevent unintended system changes.
3. **[#29079][3] Intermittent multi-minute GPT model response delays** (117 comments, 49 👍) | Widely reported pain point: users note simple prompts (even trivial file modification requests) sometimes take several minutes to complete, despite no observed latency from the underlying LLM provider.
4. **[#8456][4] Auto task-based model selection** (7 comments, 36 👍) | Users are requesting intelligent dynamic model routing to automatically assign lightweight fast models for simple code edits and high-capability reasoning models for complex debugging tasks, removing the need to manually switch models for every session.
5. **[#27589][5] TUI failure on Alpine Linux (musl)** (33 comments, 12 👍) | Reported regression introduced in v1.14.50: OpenCode fails to launch on musl-based Alpine systems with a `getcontext symbol not found` error, breaking headless container deployment workflows for many DevOps users.
6. **[#16101][6] Session lifecycle auto-archival** (3 comments, 10 👍) | Users highlight unmanaged session storage growth, with many reporting their local SQLite OpenCode DB exceeds 700MB after weeks of use with no built-in cleanup rules.
7. **[#32444][7] GLM-5.2 High/Max thinking effort variants not exposed** (3 comments, 8 👍) | Z.AI users are blocked from using new GLM-5.2 advanced reasoning modes, due to a blanket code rule that hides all model variants for any ID containing the string `glm`.
8. **[#20902][8] Bash tool hangs on background child processes** (9 comments, 9 👍) | Sessions freeze for up to the 2-minute default timeout any time a command spawns a detached background process (e.g. `npm run build &`), making common local dev workflows frustrating to use.
9. **[#32714][9] Widespread "no such column: data" SQLite error** (2 comments) | Multiple users reported full tool failure mid-session after running deployment tools like `vercel deploy` or `localtunnel`, where every bash/read/edit call returns a SQLite parsing error that renders the session unusable.
10. **[#19466][10] 50% idle single-core CPU usage** (9 comments, 8 👍) | Users observe OpenCode consumes half a single high-end core even when it is idle and waiting for an API rate limit retry, wasting system resources during long backoff windows.

---

## 4. Key PR Progress
1. **[#27554][11] Local LAN auto-discovery of OpenAI-compatible models** (Open) | New feature adding mDNS scanning to the `/connect` workflow, automatically detecting self-hosted local LLM servers running on the user's network, eliminating manual URL and port configuration for local model users.
2. **[#32734][12] OpenRouter model variant support** (Closed) | Resolves a long-standing bug where OpenRouter suffixed model variants (`:free`, `:thinking`, `:extended`) were rejected by the local model catalog, now users can access all special OpenRouter model flags.
3. **[#32052][13] Cloudflare AI Gateway API key passthrough fix** (Closed, by @keefetang) | Directly addresses the matching v1.17.8 bug, ensuring configured API keys are correctly passed to the Cloudflare AI Gateway provider during initialization.
4. **[#32743][14] Native per-session goal tracking** (Open) | New feature adding a `/goal` command to define persisted session objectives, where the agent will autonomously work towards the target and mark it as completed once the task set is finished.
5. **[#28592][15] OSC52 clipboard passthrough fix for GNU Screen** (Open) | Corrects terminal multiplexer clipboard handling that previously only worked for tmux, now users running OpenCode inside GNU Screen can copy content directly to their system clipboard as expected.
6. **[#28073][16] Add Microsoft Foundry as built-in auth provider** (Closed) | Adds native Microsoft Foundry support to the `/login` flow, with dedicated parameter handling for custom private GPT-5.x deployments hosted on the Foundry platform.
7. **[#28071][17] New well-known auth service** (Closed) | Adds support for `{env:...}` and `{file:...}` dynamic substitutions in auth config, with automatic migration of legacy `auth.json` files to the new standard, improving security for corporate deployments that pull secrets from system environment variables.
8. **[#28047][18] Non-interactive `opencode run` waits for background tasks** (Closed) | Fixes a bug where headless non-interactive sessions would exit early before detached background child tasks completed, making OpenCode compatible with CI/CD automation workflows.
9. **[#28027][19] Windows directory separator normalization** (Closed) | Resolves an issue where older sessions created on Windows with backslash paths would disappear from the session list after version upgrades, normalizing all path formats across Windows releases.
10. **[#27986][20] OpenAI-compatible provider camelCase option fix** (Closed) | Aligns custom OpenAI-compatible provider configuration parameter naming to match the AI SDK's expected format, fixing setup failures for many self-hosted model deployments.

---

## 5. Feature Request Trends
1. **Native IDE integration**: The highest-priority community request is an official VS Code extension to remove workflow friction between the separate OpenCode TUI and the user's primary code editor.
2. **Intelligent model orchestration**: Overlapping requests for automatic task-based model selection, first-class provider variant support (for thinking effort, speed tiers), and automatic LAN local model discovery to eliminate manual model configuration.
3. **Agent execution hardening**: Persistent demand for production-grade sandboxing, privilege restriction, and guardrails to prevent unintended agent modification of files outside the working directory or unauthorized system changes.
4. **Managed session storage**: Users are universally requesting built-in TTL retention policies, auto-archival, and external database support to address unregulated SQLite storage bloat.
5. **Expanded provider ecosystem**: Active community pushes for native Devin.ai, Kiro (AWS), GLM-5.2, and Microsoft Foundry support to cover all popular LLM hosting platforms.

---

## 6. Developer Pain Points
1. **Cross-platform compatibility gaps**: Broken TUI on musl/Alpine systems, inconsistent Windows path handling, and unexpected SIGTRAP crashes on the latest macOS Apple Silicon builds with the bundled Bun 1.3.14 runtime.
2. **Unreliable bash tool behavior**: Frequent hangs when commands spawn background processes, full UI hangs when the agent triggers sudo prompts, and uncaught privilege escalation that lets agents access admin rights without explicit user approval.
3. **Wasteful idle resource usage**: High CPU consumption during API rate limit backoff periods, with no yield to lower-priority background operation.
4. **Partial provider compatibility**: Long history of missing support for popular model variants, misconfigured API key passthrough for gateway providers, and broken custom proxy support for Anthropic/Bedrock enterprise deployments.
5. **Unmanaged data growth**: No default session cleanup rules leading to unconstrained SQLite database bloat over extended usage, with occasional data loss of older chat messages in long-running sessions.

---
[1]: https://github.com/anomalyco/opencode/issues/11176
[2]: https://github.com/anomalyco/opencode/issues/2242
[3]: https://github.com/anomalyco/opencode/issues/29079
[4]: https://github.com/anomalyco/opencode/issues/8456
[5]: https://github.com/anomalyco/opencode/issues/27589
[6]: https://github.com/anomalyco/opencode/issues/16101
[7]: https://github.com/anomalyco/opencode/issues/32444
[8]: https://github.com/anomalyco/opencode/issues/20902
[9]: https://github.com/anomalyco/opencode/issues/32714
[10]: https://github.com/anomalyco/opencode/issues/19466
[11]: https://github.com/anomalyco/opencode/pull/27554
[12]: https://github.com/anomalyco/opencode/pull/32734
[13]: https://github.com/anomalyco/opencode/pull/32052
[14]: https://github.com/anomalyco/opencode/pull

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-18
---
## 1. Today's Highlights
The 24-hour window saw no new official Pi releases, but delivered a wave of critical merged patches for TUI UX, enterprise provider interoperability, and packaging, alongside ongoing active resolution of long-standing high-vote community feature requests. Key new functionality landed including first-class Azure AI Foundry Claude support, Nix reproducible packaging, and native full "max" reasoning tier support for the latest Anthropic Opus models, addressing widespread user demand for better compatibility with newest LLM releases and self-hosted deployment workflows.

## 2. Releases
No new production or pre-release versions of `pi` were published in the past 24 hours, so this section is omitted.

## 3. Hot Issues
Top 10 most active and impactful community issues updated in the window:
1. **[#534](https://github.com/earendil-works/pi/issues/534) Config folder non-compliance with Linux XDG Base Directory spec** (20 👍, 9 comments): Long-standing 6-month old high-vote issue was marked closed, resolving community frustration with Pi polluting user home directories instead of using standardized `~/.config` paths for desktop Linux tools.
2. **[#3715](https://github.com/earendil-works/pi/issues/3715) Local LLM streams terminate at 5 minutes from undici default timeout** (4 👍, 11 comments): Now closed, this issue blocked users running self-hosted long-thinking workloads (like vLLM serving Qwen3) that previously hit a hard 5-minute cap even when setting custom user timeouts.
3. **[#5825](https://github.com/earendil-works/pi/issues/5825) Streaming markdown forces unwanted scroll to bottom** (12 comments): Top active open bug affecting users with "clear on shrink" enabled, who lose their scroll position mid-read when the agent continues generating long responses.
4. **[#5653](https://github.com/earendil-works/pi/issues/5653) Move off Shrinkwrap** (11 comments): Core dependency management flaw causing duplicate copies of the `pi-ai` module to be installed when using multiple Pi SDK packages, breaking singleton API registry states and causing unexpected behavior.
5. **[#5763](https://github.com/earendil-works/pi/issues/5763) Providers swallow HTTP error bodies for unparseable non-schema responses** (5 comments): High-priority issue for enterprise users running Pi behind internal gateways, who received completely opaque, generic error messages for 403/502 responses with zero debug context.
6. **[#5700](https://github.com/earendil-works/pi/issues/5700) Support multiple concurrent live agent sessions with TUI switching** (5 comments): Top requested productivity feature for power users, who want to run long background agent tasks without tearing down existing active chats.
7. **[#5692](https://github.com/earendil-works/pi/issues/5692) Missing support for GLM-5.2 1M context model** (3 comments): Now resolved, addressing widespread demand from Chinese LLM power users who want to use the latest long-context Zhipu model.
8. **[#5827](https://github.com/earendil-works/pi/issues/5827) Warp terminal not detected for Kitty image protocol** (3 comments): Affects millions of Warp users who could not render inline images natively in the Pi TUI, falling back to broken text previews.
9. **[#5797](https://github.com/earendil-works/pi/issues/5797) File edits break CP-1252 encoding on Windows** (4 comments): Critical bug for maintainers of legacy Windows C++ codebases, where Pi would overwrite non-UTF-8 legacy file encodings and break existing projects.
10. **[#5857](https://github.com/earendil-works/pi/issues/5857) MCP HTTP 401/403 errors cause ~49s startup hang** (1 comment): Newly filed recently discovered flaw where overzealous exponential backoff for auth failures blocks Pi startup unnecessarily with stale MCP credentials.

## 4. Key PR Progress
Top 10 most impactful pull requests updated/merged in the window:
1. **[#5849](https://github.com/earendil-works/pi/pull/5849) Add Azure AI Foundry provider for Anthropic Claude**: Brand new first-class provider implementation for enterprise Azure users, with full Entra ID auth parity matching the official Anthropic Python SDK.
2. **[#5846](https://github.com/earendil-works/pi/pull/5846) Fix streaming markdown auto-scroll behavior**: Active open PR that closes #5825, stabilizing TUI streaming rendering to prevent unwanted forced scroll to bottom when users scroll up to review mid-response content.
3. **[#5841](https://github.com/earendil-works/pi/pull/5841) Detect Warp terminal and enable Kitty image protocol**: Fix for #5827, adding native detection logic to enable inline image rendering out of the box for Warp users without manual workarounds.
4. **[#5832](https://github.com/earendil-works/pi/pull/5832) Surface full provider HTTP error body**: Closes #5763, unifying error handling across all providers to dump raw unparseable gateway/proxy response bodies instead of returning generic unhelpful messages.
5. **[#5801](https://github.com/earendil-works/pi/pull/5801) Add Nix flake packaging**: Merged support for fully declarative, reproducible installation on NixOS and all systems running Nix, eliminating dependency compatibility issues for advanced users.
6. **[#5829](https://github.com/earendil-works/pi/pull/5829) Add "max" thinking level for adaptive reasoning models**: Exposes the previously hidden maximum reasoning tier for compatible Claude Opus 4.7/4.8 models, extending Pi's reasoning configuration options beyond the existing `xhigh` cap.
7. **[#5850](https://github.com/earendil-works/pi/pull/5850) Bump vitest to 3.2.6 and override esbuild to 0.28.1**: Merged dependency patch that resolves 5 of 6 NPM audit vulnerabilities in dev dependencies, with zero runtime behavior changes.
8. **[#5812](https://github.com/earendil-works/pi/pull/5812) Protect pipe characters inside inline code in markdown tables**: Fixes a long-standing rendering bug that broke markdown tables containing `|` characters inside backticks, incorrectly splitting table cells at escaped pipes.
9. **[#5833](https://github.com/earendil-works/pi/pull/5833) Compaction-related fixes**: 3 targeted performance improvements to reduce context management overhead specifically for users running local LLMs behind llama.cpp deployments.
10. **[#5554](https://github.com/earendil-works/pi/pull/5554) Add Opus 4.8 to adaptive thinking support list**: Resolves 400 API errors when using the latest Claude Opus 4.8 model, which was previously routed to an incompatible legacy thinking code path.

## 5. Feature Request Trends
The most commonly requested feature directions from recent community issues are:
1. Expanded long-context LLM support: Users are asking for configurable 1M context window support for all popular latest models including GLM-5.2, GitHub Copilot GPT, and domestic Chinese open models.
2. Multi-session TUI productivity: Demand for persistent background agent sessions that do not get torn down when users switch between active chats.
3. Extended extensibility APIs: Requests to expose more native Pi internals via RPC and extension systems, including read access to full session entry history, the conversation tree, and executable native tool objects for third-party extensions.
4. Broadened provider ecosystem: High demand for new self-hosted and regional LLM provider support including SiliconFlow, plus native compatibility with existing Anthropic subscription billing to avoid forcing users to create separate paid API accounts.
5. Cross-platform standards compliance: Requests for full adherence to Linux XDG directory specs, native keyboard shortcut support for macOS/Windows terminals, and better cross-terminal compatibility.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users:
1. Dependency management fragility: The existing Shrinkwrap configuration causes duplicate singleton module copies, breaking core functionality like the API provider registry for users that install multiple Pi SDK packages.
2. Poor error visibility for private deployments: Users running Pi behind custom proxies, enterprise gateways, or local LLM instances get no access to raw HTTP error bodies, massively slowing down debug workflows.
3. Unintended file encoding overwrites: Pi defaults to writing files as UTF-8, which breaks legacy Windows codebases that rely on non-UTF

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-18
---
## 1. Today's Highlights
Three consecutive v0.18.x stable and preview releases rolled out in the last 24 hours, patching critical CLI execution flow issues and context handling bugs. The highly discussed public announcement of the Qwen OAuth free tier policy adjustment drew over 150 community comments in 24 hours, making it the highest engagement thread this week. Multiple long-awaited core feature PRs covering token usage tracking, cross-model vision support and new third-party integrations are now open for maintainer review.

## 2. Releases
All new versions published in the last 24 hours:
- **v0.18.3 (stable)**: Includes a critical fix that terminates CLI execution properly when users cancel interactive `ask_user_question` prompts, backported from the preview channel.
- **v0.18.3-preview.0**: Pre-release testing build for the v0.18.3 stable patch, no additional new features.
- **v0.18.2 (stable)**: Adds an explicit warning for oversized context instruction inputs, plus full documentation fixes for stale default values, incorrect CLI syntax references and mismatched tool naming across all user guides.

## 3. Hot Issues (Top 10)
| ID | Title | Context & Community Impact | GitHub Link |
|----|-------|----------------------------|-------------|
| #3203 | Qwen OAuth Free Tier Policy Adjustment | 151 total comments, top engagement thread: Official notice that reduces free daily quota from 1000 to 100 requests, with full free tier phase-out scheduled for late 2026, triggering massive community discussion around migration paths for individual users. | [View Issue](https://github.com/QwenLM/qwen-code/issues/3203) |
| #4479 | Feature request for daily token usage statistics | 16 comments from users requesting built-in token counting, after multiple users reported unknowingly consuming millions of tokens in single long-running sessions. | [View Issue](https://github.com/QwenLM/qwen-code/issues/4479) |
| #3384 | Unable to add OpenAI-compatible local LLM | 15 comments from self-hosted users running vLLM deployments, reporting configuration mismatches that prevent custom local model endpoints from connecting properly. | [View Issue](https://github.com/QwenLM/qwen-code/issues/3384) |
| #1855 | OAuth session persists after switching to Coding Plan API key, causing 401 errors | Resolved 14-comment widely reported auth bug: old OAuth credentials are not fully cleared when users upgrade to paid plans, triggering invalid access token errors after free tier limits are hit. | [View Issue](https://github.com/QwenLM/qwen-code/issues/1855) |
| #5210 | v0.18.1 stuck in ExitPlanMode | Recent regression from v0.18.x updates: CLI freezes in the plan exit state for multiple hours when using Qwen 3.7 Max, affecting paid plan users running long code generation tasks. | [View Issue](https://github.com/QwenLM/qwen-code/issues/5210) |
| #5090 | Refactor: Decouple Provider Identity from SDK Protocol | 5 comments, in active review: core architecture refactor request to support arbitrary custom provider IDs instead of hardcoded enums, which will drastically simplify third-party model onboarding. | [View Issue](https://github.com/QwenLM/qwen-code/issues/5090) |
| #5201 | Add QQ Bot channel adapter | Fully PR-ready feature request to add QQ official bot support, aligned with existing WeChat, DingTalk and Feishu IM channel integrations. | [View Issue](https://github.com/QwenLM/qwen-code/issues/5201) |
| #5180 | Multi-agent workflow crashes mid-task | Users testing the main-subagent architecture for 12+ hour development tasks report unhandled runtime errors that terminate the full project workflow halfway through execution. | [View Issue](https://github.com/QwenLM/qwen-code/issues/5180) |
| #5147 | OOM crash after `/quit` with large session history | 3 comments: post-exit out-of-memory error triggered by background auto-memory processing for long text-only conversation histories, even when no tool calls are running. | [View Issue](https://github.com/QwenLM/qwen-code/issues/5147) |
| #5261 | No shortcut to expand collapsible thinking blocks post v0.18.2 | Recent regression: users cannot view full model thinking traces after the new collapsible thinking feature launched, with no exposed keyboard shortcut to expand truncated blocks. | [View Issue](https://github.com/QwenLM/qwen-code/issues/5261) |

## 4. Key PR Progress
| ID | Description | GitHub Link |
|----|-------------|-------------|
| #4564 | Adds full persisted token usage accounting, extends the `/stats` command to show daily/monthly token breakdowns by model, with CSV/JSON export for cost tracking. | [View PR](https://github.com/QwenLM/qwen-code/pull/4564) |
| #5126 | Implements optional vision bridge: for text-only primary models, uploaded or `@` referenced images are automatically sent to a multimodal model to transcribe content to text before passing to the main inference engine. | [View PR](https://github.com/QwenLM/qwen-code/pull/5126) |
| #5202 | Official QQ Bot channel adapter implementation, complete with WebSocket gateway support, event routing and authentication aligned with other built-in IM channels. | [View PR](https://github.com/QwenLM/qwen-code/pull/5202) |
| #5242 | Implements tool call circuit breaker to stop infinite loop execution, directly fixes the widely reported issue where tool use gets stuck in repeating identical calls. | [View PR](https://github.com/QwenLM/qwen-code/pull/5242) |
| #3439 | Adds terminal-friendly LaTeX math rendering to CLI markdown output, converting inline and block math syntax to readable plain text for research and engineering use cases. | [View PR](https://github.com/QwenLM/qwen-code/pull/3439) |
| #5175 | Makes the web-shell support submitting user inputs mid-inference, which are injected directly into the current running turn instead of being queued until the current generation completes. | [View PR](https://github.com/QwenLM/qwen-code/pull/5175) |
| #4934 | Extends the daemon `/health?deep=true` endpoint with new idle detection metrics for active prompts, live SSE connections and child agent process health, for easier orchestration on self-hosted deployments. | [View PR](https://github.com/QwenLM/qwen-code/pull/4934) |
| #5194 | Fixes a WebP image parsing bug where the canvas height value was read one byte off from the correct offset, causing corrupted image inputs for all VP8X format WebP files. | [View PR](https://github.com/QwenLM/qwen-code/pull/5194) |
| #5264 | MCP server instances are now created independently per VS Code IDE session instead of using a global singleton, fixing cross-session resource conflicts for users running multiple IDE windows. | [View PR](https://github.com/QwenLM/qwen-code/pull/5264) |
| #5220 | Adds full i18n localization support for tool name badges in the TUI and web shell, so `TodoWrite`, `Shell` and other tool labels display in the user's configured interface language instead of only English. | [View PR](https://github.com/QwenLM/qwen-code/pull/5220) |

## 5. Feature Request Trends
The highest priority user requested functionality directions are:
1. **Transparent usage and cost tracking**: Native token consumption counters, daily request quota dashboards and cost breakdown views are the most upvoted general user feature.
2. **Expanded integration ecosystem**: Flexible custom model provider support for arbitrary self-hosted endpoints, plus new IM/channel adapters to integrate Qwen Code into internal team workflows.
3. **CLI/TUI usability polish**: Vim mode native keybinding support, persistent session management controls, timestamps for chat outputs and extended markdown rendering for technical users.
4. **Reliable multi-agent workflows**: Architecture improvements to stabilize long-running main-subagent development tasks that run for hours or days.

## 6. Developer Pain Points
Recurring high-impact user frustrations identified this 24h window:
1. **Auth workflow breakage**: A spike in 401 invalid token, residual session and quota mismatch errors after the public announcement of free tier adjustments, leaving many users unclear on credential migration paths.
2. **Self-hosted LLM configuration friction**: Non-standard OpenAI endpoint routing logic makes connecting local vLLM, Ollama and other compatible model deployments error-prone for non-expert users.
3. **Execution stability issues**: Frequent reports of infinite tool call loops, mid-session hangs and unhandled OOM crashes for long tasks with large context sizes.
4. **Post-v0.18.x regression bugs**: Multiple unpatched UI/UX regressions in recent stable releases including missing thinking block expansion shortcuts and the stuck ExitPlanMode state.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-18
---
## 1. Today's Highlights
No new official releases were published in the past 24 hours, but maintainers and external contributors shipped full linked PR fixes for nearly all high-priority user-reported bugs opened yesterday. The project also made significant foundational progress towards both the upcoming v0.8.62 stability milestone and the planned v0.9.0 chat-native collaborative workrooms roadmap, closing multiple long-standing feature requests for scriptable headless workflows.

## 2. Releases
No new stable, pre-release, or hotfix builds were published in the last 24 hours. All merged changes target the upcoming v0.8.62 and v0.9.0 milestone releases.

## 3. Hot Issues (Notable 10)
| Issue | Status | Why It Matters |
|---|---|---|
| [#3275](https://github.com/Hmbown/CodeWhale/issues/3275) | Open | High-severity regression: the agent enters unprompted self-questioning and self-execution loops that stray far from explicit user intent, drawing 4 community comments of affected users reporting lost work |
| [#2917](https://github.com/Hmbown/CodeWhale/issues/2917) | Closed | Critical migration breakage: legacy deepseek-tui users running the update flow get a broken reference to the renamed `codewhale` binary, blocking normal usage entirely. The issue was resolved after 4 days of triage. |
| [#3279](https://github.com/Hmbown/CodeWhale/issues/3279) | Open | High-impact UX bug: the Plan/Agent mode toggle in the TUI desyncs from underlying runtime permissions, leading to confusing false "action denied by user" errors, or unplanned auto-execution of full plans without user confirmation |
| [#3292](https://github.com/Hmbown/CodeWhale/issues/3292) | Open | Resource waste bug: pre-tool snapshots ignore the user-set `snapshots.enabled = false` config value, silently copying entire GB-scale git repos to local hidden storage |
| [#3289](https://github.com/Hmbown/CodeWhale/issues/3289) | Open | v0.8.61 TUI freeze bug: the terminal UI locks up entirely after auto-spawning multiple parallel agents, rendering multi-agent workflows unusable |
| [#3281](https://github.com/Hmbown/CodeWhale/issues/3281) | Open | LLM integration break: the Moonshot/Kimi parameter sanitization logic fails to add the required `type: object` field for composite schemas using `$ref`, `anyOf` or `allOf`, leading to 400 errors for users of the popular Chinese inference platform |
| [#1530](https://github.com/Hmbown/CodeWhale/issues/1530) | Closed | Long-standing 2026-05 feature request for non-interactive session continuity is fully resolved, enabling scriptable multi-turn workflows on top of the TUI CLI |
| [#3209](https://github.com/Hmbown/CodeWhale/issues/3209) | Open | v0.9.0 roadmap EPIC outlining the next major feature set: chat-native shared workrooms with threads, shareable links, multi-user access and mobile support to move beyond the terminal-only use case |
| [#3268](https://github.com/Hmbown/CodeWhale/issues/3268) | Closed | New user onboarding block: failed fresh installs on default Ubuntu 24.04 (one of the most widely used server distros), fully triaged and resolved in 24 hours after reporting |
| [#3282](https://github.com/Hmbown/CodeWhale/issues/3282) | Open | High-demand quality of life request: power users want their custom annotations and commented-out config entries preserved when the TUI rewrites `config.toml` |

## 4. Key PR Progress (Top 10)
| PR | Status | Details |
|---|---|---|
| [#3290](https://github.com/Hmbown/CodeWhale/pull/3290) | Open | Direct fix for #3275: adds new `scope_discipline` rules to the constitutional system prompt to block unprompted self-referential loops and keep agent work strictly aligned with stated user intent |
| [#3293](https://github.com/Hmbown/CodeWhale/pull/3293) | Open | Fixes #3292: adds the missing `snapshots.enabled` guard to the pre-tool snapshot logic, stopping unwanted background repo copies entirely for users who have snapshots disabled |
| [#3283](https://github.com/Hmbown/CodeWhale/pull/3283) | Open | Resolves #3279: corrects the desync in Plan/Agent mode toggle logic, restores permission state correctly on mode switch, and adds an explicit guard to prevent unconfirmed auto-execution of pre-generated plans |
| [#3291](https://github.com/Hmbown/CodeWhale/pull/3291) | Open | Implements the #3282 feature request: uses `toml_edit` to merge serialized config output with original file content, preserving all user comments and manually disabled config entries across TUI/CLI config edits |
| [#3286](https://github.com/Hmbown/CodeWhale/pull/3286) | Open | Full fix for #3281: extends the Kimi parameter sanitization logic to inject `type: object` for all root-level composite schema shapes, eliminating API 400 errors for Moonshot platform users |
| [#3284](https://github.com/Hmbown/CodeWhale/pull/3284) | Open | Performance optimization: adds debouncing to thinking stream re-renders in the TUI, cutting thousands of unnecessary UI invalidations to make output from fast reasoning models render smoothly with no perceptible lag |
| [#3278](https://github.com/Hmbown/CodeWhale/pull/3278) | Open | Unblocks the v0.9.0 command boundary refactor EPIC: replays the full completed command registry architecture work to the v0.8.62 feature branch to avoid carrying a single 2k+ line unmergeable proof PR |
| [#3294](https://github.com/Hmbown/CodeWhale/pull/3294) | Open | Cleanup fix: moves TUI composer history storage from the legacy `~/.deepseek` path to the standardized `~/.codewhale` directory, eliminating stray leftover hidden directories on new user installs |
| [#3244](https://github.com/Hmbown/CodeWhale/pull/3244) | Closed | Hardens the self-update workflow: adds retry logic for transient GitHub release metadata and download failures, eliminating partial broken updates that left users with missing binary references |
| [#3171](https://github.com/Hmbown/CodeWhale/pull/3171) | Closed | Foundational architecture work: defines the full serializable Agent Fleet protocol type system, creating a stable data contract for the upcoming transparent coordinated multi-agent orchestration feature |

## 5. Feature Request Trends
The 24-hour issue dataset shows three clear top priority user feature directions:
1.  **Controllable multi-agent workflows**: Users are requesting more visibility and guardrails for parallel agent runs, rather than unprompted fully autonomous behavior that deviates from user intent
2.  **Scriptable non-interactive support**: Demand for persistent session resumption and headless usage is growing rapidly for CI/CD, automation and embedded workflow use cases outside of the interactive terminal
3.  **Expanded LLM ecosystem compatibility**: Multiple users are submitting requests for bug-free, first-class support for alternative inference platforms including Moonshot, Atlas Cloud and domestic Chinese provider endpoints
4.  **Collaborative cross-surface access**: The community is excited about the upcoming v0.9.0 chat workrooms roadmap to enable shared work traces, mobile access and multi-user agent collaboration beyond local terminal usage.

## 6. Developer Pain Points
Recurring high-frequency frustrations identified in the last 24 hours:
1.  **Post name-migration breakage**: Longtime existing users of the original `deepseek-tui` distribution are hit with broken updates that reference the renamed `codewhale` binary, blocking normal usage
2.  **Unconfigured background resource usage**: Silent, unnotified snapshots run even when explicitly disabled, consuming gigabytes of local disk space for large repos
3.  **TUI state desync**: Visible UI state does not match underlying runtime permission controls, leading to confusing, unexplained "action denied" errors that erode user trust in the tool
4.  **New user onboarding friction**: Fresh installs on common modern distros like Ubuntu 24.04 fail without clear error messages, preventing first-time users from getting up and running easily
5.  **Slow reasoning stream rendering**: Unoptimized per-character redraw logic makes long reasoning outputs from new fast models feel laggy and unresponsive in the terminal.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*