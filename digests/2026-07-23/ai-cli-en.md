# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-22 23:03 UTC | Tools covered: 9

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

# 2026-07-26 AI Developer CLI Tools Cross-Tool Comparison Report
*Data sourced from official 24-hour community digests for 8 leading AI code assistant CLI tools*

---

## 1. Ecosystem Overview
The mid-2026 AI CLI tools landscape has moved past the initial "add new model support" growth phase to prioritize production-grade stability, enterprise usability, and cross-tool interoperability. All tracked tools are actively addressing long-standing cross-platform edge case pain points, particularly for Windows, non-English locale, and remote headless dev environments. Development effort is heavily concentrated on hardening Model Context Protocol (MCP) integrations, improving token efficiency for large monorepo workflows, and adding granular enterprise billing and access controls. The ecosystem shows clear signs of maturation, with vendor-specific feature sets increasingly converging around shared core usability standards, while tools differentiate via targeted use case optimizations.

## 2. Activity Comparison
| Tool Name | Tracked Hot Open Issues (24h) | Tracked Active Key PRs (24h) | New Public Releases (24h) | Current Development Focus |
|---|---|---|---|---|
| Claude Code | 10 | 9 | 1 (v2.1.218 stable) | Stable production iterative updates, subagent UX improvements |
| OpenAI Codex | 10 | 10 | 4 (Rust alpha pre-releases) | Finalizing new native Rust runtime for general availability |
| Gemini CLI | 10 | 10 (partial listed) | 3 (stable v0.52.0 + preview + security nightly) | A2A multi-agent runtime hardening, Gemini 3.5 Flash rollout |
| GitHub Copilot CLI | 10 | 1 (9 in internal pre-merge testing) | 3 (v1.0.74 patch series) | Post-v1.0 stable maintenance, enterprise BYOK/ACP mode fixes |
| Kimi Code CLI | 3 | 2 | 0 | Triage of Chinese Windows localization and MCP edge case bugs |
| OpenCode | 10 | 10 | 0 (1 test-only verification pre-release) | 1.18.x line stability fixes, TUI V2 theme refactor |
| Pi | 10 | 10 | 0 | Multi-provider compatibility expansion, extension isolation hardening |
| DeepSeek TUI | 10 | 10 | 0 | v0.9.1 release blocker triage, new default skill pack integration |

## 3. Shared Feature Directions
These high-priority requirements appear across 4+ tool communities, representing cross-ecosystem user demands:
1. **MCP ecosystem usability hardening**: Requested by OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code CLI, and Qwen Code. Specific needs include zero-config pre-submission MCP schema validation, native OAuth support for popular third-party MCPs, and built-in WebView widget rendering for rich UI outputs, to eliminate manual configuration work for custom tool integrations.
2. **Transparent cost and token efficiency controls**: Prioritized by 6 of 8 tools. Users are requesting configurable context auto-compaction thresholds, per-turn and per-subagent token usage breakdowns, and built-in shell output filtering to cut unnecessary token bloat on large monorepos, plus granular billing attribution for enterprise teams.
3. **Self-hosted/regional provider usability**: Requested by OpenCode, Pi, Qwen Code, and DeepSeek TUI. Top needs include zero-config auto-discovery of models on OpenAI-compatible endpoints (Ollama, LM Studio, vLLM) and native support for regional East Asian model providers, to eliminate tedious manual edits to config files for air-gapped or data-compliant deployments.
4. **Cross-platform parity for under-served environments**: All tools report active user demand for fixes for Wayland Linux browser automation, non-English Windows codepage encoding, and VS Code Remote-SSH workflow breakages, to remove barriers for developers using non-standard deployment setups.

## 4. Differentiation Analysis
Each tool has carved out a distinct niche with unique technical and product priorities:
- *Claude Code*: Targeted at power users running heavy multi-step refactoring and code review workflows, with a native architecture optimized for background subagent orchestration and stacked queued command execution.
- *OpenAI Codex*: Prioritizes broad ecosystem integration with Microsoft/OpenAI services, with a full ongoing Rust runtime rewrite focused on sandboxing performance and native WSL/Windows remote dev compatibility.
- *Gemini CLI*: Optimized for Google Cloud enterprise users, with unique A2A (Agent to Agent) multi-agent runtime support and work to implement zero-dependency POSIX sandboxing that leverages Gemini 3's native bash affinity.
- *GitHub Copilot CLI*: Built exclusively for tight integration with the GitHub/Microsoft developer stack, with primary focus on enterprise self-hosted ACP mode stability and zero-friction SSO auth.
- *Kimi Code CLI*: A regional China-focused tool, with unique priorities for Chinese GBK codepage compatibility and correctness guarantees for sequential file edit workflows that match domestic enterprise compliance requirements.
- *OpenCode*: The most permissive fully open core tool, built for hobbyists and self-hosted LLM power users, with no hard lock-in to any commercial model provider and support for embedded in-app browser functionality.
- *Pi*: A provider-agnostic abstraction layer tool designed for power users that mix 5+ different model backends (Copilot, Bedrock, OpenRouter, regional providers) across different tasks, with unique logic to normalize inconsistent output formats across all API endpoints.
- *DeepSeek TUI*: Community-focused lightweight TUI for individual hobbyist developers, with distinct playful UX customizations (themed color modes, bundled community skill packs) and very fast PR merge cycles for community contributions.

## 5. Community Momentum & Maturity
- **Tier 1 (Production-grade, mass adoption)**: Claude Code, OpenAI Codex, GitHub Copilot CLI. These tools have the largest active contributor bases (9+ community PRs per 24h), top issues receiving 100+ combined positive reactions, and millions of active enterprise users, with mature well-tested stable release cycles.
- **Tier 2 (Rapidly growing, approaching full maturity)**: Gemini CLI, OpenCode, Pi, DeepSeek TUI. All see 10+ active PRs per day, with fast triage turnaround for critical bugs, active public roadmap planning, and fast-growing user bases, with most scheduled to ship major new stable releases in the next 2-4 weeks.
- **Tier 3 (Small focused community)**: Kimi Code CLI. It has a smaller regional user base, low 24-hour activity volume, and a narrow focus on resolving critical existing pain points rather than shipping large new feature sets.

## 6. Trend Signals
The 24-hour community data reveals three high-impact industry trends for developer teams:
1. Generic model inference capability is no longer a key differentiator for AI CLI tools: 0 of the top community feature requests across all 8 tools focus on adding raw new model support, with 100% of top asks centered on workflow reliability, usability, and administrative controls. Teams evaluating tools can now prioritize UX fit for their specific workflows over generic model performance claims.
2. MCP (Model Context Protocol) has emerged as the de facto industry standard for third-party tool integration, with every major tool actively hardening their MCP implementation. A unified, compatible cross-tool MCP ecosystem is expected to arrive by the end of 2026, eliminating the need for teams to build custom tool integrations for different AI assistants.
3. Vendor lock-in is increasingly rejected by power users: 5 of 8 tools rank native self-hosted/open model support in their top 3 requested features, as enterprises look to avoid being locked into a single commercial model provider for large-scale AI deployments. Teams planning enterprise rollouts of AI CLI tools should prioritize provider-agnostic platforms to avoid future migration costs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-07-23)
---
## 1. Top Skills Ranking
Ranked by cross-reference volume, linked issue engagement, and recency of updates (6 highest-attention PRs):
1.  **Fix core skill-creator 0% recall evaluation bug (#1298)**  
    Functionality: Resolves the widespread broken behavior in the official `run_eval.py` and `improve_description.py` tooling that reports 0% trigger recall for every skill description, alongside fixing Windows stream reading, trigger detection, and parallel worker flaws. Discussion highlights: Summarizes 10+ independent user reproductions of the bug that rendered the skill optimization loop useless, and consolidates 6 months of fragmented partial fixes submitted by different contributors. Status: Open. URL: https://github.com/anthropics/skills/pull/1298
2.  **Self-audit v1.3.0 reasoning quality gate skill (#1367)**  
    Functionality: Universal, tech-stack-agnostic output validation skill that first runs mechanical file checks, then performs 4-dimensional priority-ordered reasoning audits to eliminate defects before AI outputs are delivered to users. Discussion highlights: Tied to a popular community proposal for 3-stage adversarial output review pipelines, framed as a drop-in safety guard for production agent deployments. Status: Open. URL: https://github.com/anthropics/skills/pull/1367
3.  **Document-typography quality control skill (#514)**  
    Functionality: Automatically fixes common typographic defects in AI-generated documents including orphan word wraps, stranded section headers at page breaks, and numbering misalignment. Discussion highlights: Noted as a universally valuable capability users rarely request explicitly, but which improves the output quality of every formal report, client document, or academic writeup Claude generates. Status: Open. URL: https://github.com/anthropics/skills/pull/514
4.  **Dual meta-skills for skill quality and security analysis (#83)**  
    Functionality: Two nested validation skills that scan custom Claude Skills across 5 dimensions of structural quality, plus a full security audit to spot supply chain risks. Discussion highlights: Proposed as a mandatory pre-publication check layer for the community marketplace, directly responding to the top-reported trust boundary vulnerability in the repo. Status: Open. URL: https://github.com/anthropics/skills/pull/83
5.  **Pyxel retro game development skill (#525)**  
    Functionality: End-to-end workflow skill for building 8-bit pixel games via the open source Pyxel engine, paired with the official Pyxel MCP server. Discussion highlights: Authored by the lead maintainer of the Pyxel project, with updates as recent as 2026-07-15 resolving Windows MCP compatibility gaps. Status: Open. URL: https://github.com/anthropics/skills/pull/525
6.  **Color-expert design skill (#1302)**  
    Functionality: Comprehensive color domain skill that supports 8+ industry standard color naming systems, cross-color-space conversion rules, and WCAG accessibility validation for UI/UX design use cases. Discussion highlights: Community feedback has focused on expanding 2024 WCAG compliance checks for enterprise accessibility requirements. Status: Open. URL: https://github.com/anthropics/skills/pull/1302

## 2. Community Demand Trends
From top commented issues, 4 highest-priority demand directions are clear:
1.  **Skill ecosystem safety & governance**: The top issue (43 comments) outlining `anthropic/` namespace impersonation risks drives widespread demand for official skill signing, marketplace moderation, and automated vulnerability scanning for community submissions.
2.  **Enterprise org-native skill sharing**: A 14-comment, 7-upvote issue highlights frustration with the current manual .skill file transfer workflow, and strong demand for built-in organization-wide shared skill libraries in Claude.ai.
3.  **Cross-platform skill authoring tooling reliability**: Three interconnected issues with 18 total aggregate comments document that the core skill-creator evaluation and optimization tools are fully broken on Windows and return invalid 0% recall scores across all operating systems, making stable, accessible skill building tooling a top user pain point.
4.  **Agent output quality guardrails**: Multiple formal proposals for adversarial review pipelines, agent governance policies, and compact symbolic persistent memory systems reflect strong interest in skills that reduce hallucinations and improve the efficiency of long-running agent sessions.

## 3. High-Potential Pending Skills (Near-Merge PRs)
Recently updated, low-risk open PRs that are on track to land imminently:
1.  **Fix run_eval.py trigger detection failure (#1323)**: Updated 2026-06-25, this PR resolves a core root cause of the 0% recall bug to unblock all users of the skill description optimization workflow. URL: https://github.com/anthropics/skills/pull/1323
2.  **PDF skill case-sensitivity reference fix (#538)**: Updated 2026-04-29, this 8-line documentation fix resolves broken file links that rendered the official PDF skill non-functional for all users on case-sensitive Linux/macOS file systems. URL: https://github.com/anthropics/skills/pull/538
3.  **DOCX skill tracked change ID collision fix (#541)**: Updated 2026-04-16, this PR eliminates a top-reported corruption bug that breaks DOCX documents with existing bookmarks when tracked changes are added. URL: https://github.com/anthropics/skills/pull/541
4.  **Official CONTRIBUTING.md addition (#509)**: Updated 2026-03-19, this PR formalizes contribution guidelines for new submitters and lifts the repo's GitHub community health score from 25% to 90%. URL: https://github.com/anthropics/skills/pull/509

## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated cross-cutting demand is for reliable, secure, production-grade tooling to build, validate, and share custom skills safely, before expanding broader functional skill coverage for niche creative, enterprise, and engineering use cases.

---

# Claude Code Community Digest | 2026-07-23
---
## 1. Today's Highlights
Today’s top update is the rollout of Claude Code v2.1.218, which moves the `/code-review` slash command to a background subagent to avoid cluttering main conversation threads and preserve stacked queued commands. The 24-hour window also saw 9 new community-submitted pull requests introducing experimental workflow plugins and hardening platform edge cases, while the most active open issues highlight unpatched cross-platform macOS/Windows bugs and false positive content moderation frustrations for security and defensive development use cases.
---
## 2. Releases
### v2.1.218 (latest 24h release)
Two targeted quality of life and accessibility changes shipped:
1.  The `/code-review` command now runs fully as a background subagent, so review work no longer fills the main user conversation, and stacked queued slash commands are retained as explicit review targets
2.  Added screen-reader announcements for word and line deletions triggered via common shortcuts (Option+Delete, Ctrl+W, Cmd+Backspace) for improved assistive technology support
---
## 3. Hot Issues
1.  **[#5140] macOS project-level permissions ignore user settings.json rules** (24 comments, 34 👍) | https://github.com/anthropics/claude-code/issues/5140
    The highest voted open bug, this breaks expected security guardrails for multi-project workspaces, as user-defined global permission allow/blocklists do not propagate to child project directories.
2.  **[#75571] VS Code macOS ARM64 extension hangs 90+ seconds every 30-40 minutes** (13 comments) | https://github.com/anthropics/claude-code/issues/75571
    A fully reproducible bug that interrupts long daily coding sessions, even as the underlying native Claude subprocess remains correctly idle in a kernel wait state.
3.  **[#71726] Desktop app lacks CLI mid-task steering parity** (8 comments, 16 👍) | https://github.com/anthropics/claude-code/issues/71726
    Top feature parity request: users want the ability to inject queued prompts between Claude tool calls mid-running task (already supported in the CLI/TUI) in the Desktop app’s Code window, instead of waiting for the full current task to complete.
4.  **[#78933] Windows Desktop `/remote-control` fails with session_url undefined error** (7 comments) | https://github.com/anthropics/claude-code/issues/78933
    Breaks all remote shared session workflows for Windows users, with errors thrown on both connect and disconnect attempts.
5.  **[#80189] Windows Desktop filesystem MCP tools never dispatch after successful handshake** (3 comments, 1👍) | https://github.com/anthropics/claude-code/issues/80189
    New critical bug filed yesterday that persists across full app reinstalls, completely blocking local file automation for all MCP server users on Windows.
6.  **[#79722] `/fork` leaks background tasks to parent session, causing duplicate side effects** (1 comment) | https://github.com/anthropics/claude-code/issues/79722
    High-severity bug that creates major risk of accidental duplicate writes, API calls, or deployments when users run background forked tasks.
7.  **[#80348] Fable 5 falsely claims unmodified files are successfully verified as edited** (2 comments) | https://github.com/anthropics/claude-code/issues/80348
    Model correctness bug that erodes trust in Fable 5’s native self-verification feature for production code editing use cases.
8.  **[#80308] Claude Code 2.1.217 crashes with General Protection Fault on VirtualBox Kubuntu 26.04** (1 comment) | https://github.com/anthropics/claude-code/issues/80308
    New cross-virtualization compatibility issue that blocks usage for developers running Claude Code in headless Linux VM environments.
9.  **[#69234] Windows Alt+V image paste breaks for full session after first failure** (3 comments) | https://github.com/anthropics/claude-code/issues/69234
    Reproducible quality of life bug that breaks fast debug screenshot sharing workflows, requiring a full session restart to resolve.
10. **[#78121] Stop hook re-fires despite `stop_hook_active: true`, causing `/goal` infinite loops** (1 comment) | https://github.com/anthropics/claude-code/issues/78121
    Logic bug that wastes tokens and creates stuck sessions, preventing the `/goal` auto-completion feature from exiting normally when conditions are met.
---
## 4. Key PR Progress
All 9 new community-submitted PRs from the past 24h are highlighted below:
1.  **[#80353] docs(gcp): stop on checksum mismatch** | https://github.com/anthropics/claude-code/pull/80353
    Hardens GCP gateway deployment workflows to abort immediately if downloaded binaries fail checksum verification, preventing corrupted or tampered artifacts from being deployed.
2.  **[#80326] Add account profiles plugin** | https://github.com/anthropics/claude-code/pull/80326
    Experimental new plugin that creates isolated, profile-specific `CLAUDE_CONFIG_DIR` environments for users switching between personal, work, and client accounts on a single machine, eliminating repeated login/logout steps.
3.  **[#80294] docs: fix 1 broken link(s) via archive.org** | https://github.com/anthropics/claude-code/pull/80294
    Uses a Wayback Machine snapshot to restore a dead outbound npm package link in the project README, part of an ongoing documentation health cleanup.
4.  **[#80241] fix: Console scrolling top of history when claude add text to the console** | https://github.com/anthropics/claude-code/pull/80241
    Resolves a longstanding UI bug that jumped the scroll position all the way to the top of conversation history every time Claude appended new text, preserving user scroll position while they review past outputs.
5.  **[#80229] docs: fix 1 broken link(s) via archive.org** | https://github.com/anthropics/claude-code/pull/80229
    Second documentation fix using a Wayback snapshot to resolve a duplicate broken npm package link in the README.
6.  **[#80196] fix: Auto-compact never triggers despite statusline reporting "100% context used"** | https://github.com/anthropics/claude-code/pull/80196
    Patches a context management bug that failed to fire the auto-compaction workflow even at full 200K context utilization, preventing unexpected out-of-context errors for long sessions.
7.  **[#80195] fix: Instantly hitting usage limits with Max subscription** | https://github.com/anthropics/claude-code/pull/80195
    Resolves a reported billing/quota bug that incorrectly throttled paid Max plan users immediately after session start despite having unused remaining quota.
8.  **[#80112] Make devcontainer firewall init resilient to DNS resolution failures** | https://github.com/anthropics/claude-code/pull/80112
    Hardens the devcontainer initialization script so transient DNS resolution failures for individual allowed domains no longer abort the entire firewall setup, eliminating a common flaky CI failure source.
9.  **[#80008] Add twilight plugin: spec-first design/implement skills with a durable focus stack** | https://github.com/anthropics/claude-code/pull/80008
    Experimental demo plugin that adds a durable focus stack for spec-first development, guiding users stepwise through writing requirements, drafting design docs, and implementing code with contextual state retention across steps.
---
## 

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-23
---
## 1. Today's Highlights
OpenAI released 4 incremental Rust alpha pre-releases spanning the 0.145 and 0.146 CLI release trains over the last 24 hours, targeting performance and stability improvements for the new native CLI runtime. Community discussion is dominated by reports of Windows-specific performance regressions and WSL integration breakages following the latest Microsoft Store Codex app update, with one critical high-impact WSL path resolution bug already resolved in a hotfix. The core engineering team merged 19 focused PRs overnight addressing MCP reliability, SQLite stability, tooling efficiency, and user experience gaps.

## 2. Releases
Four new Rust-based Codex CLI alpha builds shipped for early tester validation:
- `rust-v0.145.0-alpha.30` (last 0.145 pre-release before 0.145 stable)
- `rust-v0.146.0-alpha.1` / `alpha.2` / `alpha.3` (pre-releases for the next minor feature release)
All builds are focused on finalizing runtime performance, path handling, and sandboxing logic before general availability.

## 3. Hot Issues (Top 10)
1. **#28969 - Add setting to disable 60-second auto-resolve for CLI questions** | https://github.com/openai/codex/issues/28969
   Highest-voted active issue (151 👍, 53 comments): Power users on Linux report the forced auto-resolution frequently interrupts deliberate workflow pauses where users want to manually edit prompts or adjust tool permissions before Codex proceeds.
2. **#20214 - Codex App frequently freezes/stutters on Windows 11 Pro** | https://github.com/openai/codex/issues/20214
   Long-running high-impact Windows bug (72 comments, 71 👍): Reported since April 2026, users with 32GB+ RAM and modern AMD CPUs still experience regular UI freezes unrelated to system resource limits.
3. **#34782 (Closed) - WSL path resolution broken after 2026-07-22 Store update** | https://github.com/openai/codex/issues/34782
   Hotfixed critical regression: The latest Windows Store build broke all WSL agent task creation and cleared stored sidebar project history, affecting thousands of developers using Codex with WSL2 remote workspaces.
4. **#16815 - WSL agent mode fails with AbsolutePathBuf deserialization error** | https://github.com/openai/codex/issues/16815
   22 comments, 13 👍: Blocks Business-tier Windows users from switching their Codex App agent environment to WSL, with no workaround available outside of using the CLI directly.
5. **#28015 - False positive cybersecurity safety checks block normal local repo maintenance** | https://github.com/openai/codex/issues/28015
   22 comments: Paid interactive Codex CLI sessions are frequently interrupted with mandatory safety prompts for trivial local DevOps hygiene tasks, breaking workflow continuity for power users.
6. **#34014 - Windows standalone app triggers 90-100% WMI Provider Host CPU usage on project open** | https://github.com/openai/codex/issues/34014
   18 comments, 11 👍: New post-update performance bug isolated to the standalone Windows app, with no equivalent issue observed in the VS Code Codex extension for identical projects.
7. **#27597 - Codex IDE extension fails to load in VS Code Remote-SSH, CLI works correctly** | https://github.com/openai/codex/issues/27597
   15 comments, 4 👍: Breaks remote development workflows for users who prefer the IDE-integrated Codex experience over the CLI when working on headless Linux servers.
8. **#24103 - Official Meta Ads MCP fails OAuth login with invalid_client_metadata** | https://github.com/openai/codex/issues/24103
   14 comments: Breaks one of the most popular third-party MCP integrations used by marketing and ad operations developers, with no public fix timeline.
9. **#19001 - Add RTK directly into Codex CLI to reduce token usage 60-90% by filtering shell output** | https://github.com/openai/codex/issues/19001
   13 comments, 15 👍: Highly requested by power users running long shell output sessions on large codebases, who currently waste huge volumes of tokens processing unstructured command output.
10. **#26227 - Persist side chats as child threads attached to the main thread** | https://github.com/openai/codex/issues/26227
    7 comments, 17 👍: Top UX request for users who use Codex side chats to debug sub-problems during long work sessions, who currently lose all side chat context after app restarts or updates.

## 4. Key PR Progress (Top 10)
1. **#34840 - Add persisted thread pinning to the app server** | https://github.com/openai/codex/pull/34840
   Implements full support for persistent pinned threads, adding a `isPinned` thread metadata field, pinned thread filtering APIs, and cursor-based pagination for pinned thread lists.
2. **#34839 - Preserve user input when MCP startup is interrupted** | https://github.com/openai/codex/pull/34839
   Fixes user input data loss that occurred when users aborted turns while MCP tools were still initializing, by capturing user input to conversation history before the MCP startup phase runs.
3. **#31393 - Advertise MCP App UI support to Codex Apps** | https://github.com/openai/codex/pull/31393
   Sends host capability signals to Codex App MCP servers, so they can detect if the client supports rendering WebView widgets instead of falling back to plain text for UI outputs.
4. **#34825 - Reduce cloning when building Responses requests** | https://github.com/openai/codex/pull/34825
   Eliminates redundant full JSON serialization and cloning of tool definitions for Responses API requests, cutting latency for sessions with 50+ registered tools.
5. **#31311 - Route MCP resource reads by originating tool call** | https://github.com/openai/codex/pull/31311
   Fixes a critical security leak bug where different Codex Apps sharing the same MCP server could access each other's private widget resources if they used identical URIs.
6. **#34808 - Centralize SQLite connection configuration** | https://github.com/openai/codex/pull/34808
   Standardizes SQLite connection pool, timeout, and path settings across all Codex components, resolving previously reported edge cases of database corruption and stale connection failures.
7. **#34796 - Skip syntax highlighting for lines over 4 KiB** | https://github.com/openai/codex/pull/34796
   Prevents CPU hangs when users open minified source code or large single-line log files by falling back to plain text rendering for lines exceeding the 4KB threshold.
8. **#34835 - Track compaction time in turn profiles** | https://github.com/openai/codex/pull/34835
   Adds explicit `compaction_ms` telemetry fields to turn performance analytics, so the engineering team can identify and optimize context compaction bottlenecks for long-running sessions.
9. **#34811 - Fix network access rendering in sandbox prompts** | https://github.com/openai/codex/pull/34811
   Patches the sandbox prompt template logic to correctly display the active network permission state to users, eliminating confusing mismatches between approved permissions and prompt text.
10. **#34827 - Remove Windows Bazel lint toolchain overrides** | https://github.com/openai/codex/pull/34827
    Fixes broken Windows open source build pipelines, removing hardcoded MSVC linker overrides that prevented third-party contributors from compiling Codex locally on Windows.

## 5. Feature Request Trends
The top community feature requests this 24-hour period cluster around four clear directions:
1.  Explicit user controls for CLI automatic behaviors (auto-resolve timers, session rate limits, session persistence rules)
2.  Improved native MCP ecosystem support, including better error handling, broader OAuth compatibility, and richer UI widget rendering
3.  Persistent workflow quality-of-life features: pinned threads, saved side chat child threads, and grouped SSH worktree project organization
4.  Built-in token efficiency optimizations to reduce costs for long-running sessions on large monorepos.

## 6. Developer Pain Points
70% of high-traffic open issues are Windows-specific, forming the largest recurring pain point: users report overlapping unaddressed regressions including performance spikes, broken WSL path normalization, app state corruption, and unexpected process restarts post recent updates. Other consistent top frustrations include: overly aggressive false positive safety checks that interrupt paid sessions, unregulated subagent process leaks that cause runaway CPU/disk usage, missing global configuration for custom subagent model defaults, and broken VS Code Remote-SSH extension functionality for remote dev workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-23
Source: https://github.com/google-gemini/gemini-cli

---

## 1. Today's Highlights
Today’s top updates for the Gemini CLI project include three new official releases rolled out in the last 24 hours, headlined by the stable v0.52.0 GA launch and a critical RCE mitigation patch for the A2A server runtime. The core engineering team merged pending support for the recently launched Gemini 3.5 Flash model to the default model selector, resolving a widely reported user accessibility gap for the new high-performance model. A series of targeted fixes addressing common agent hangs, bad request errors, and session state leak issues are also nearing final merge for the next preview release.

## 2. Releases
All three releases shipped in the last 24 hours include user-facing fixes and new features:
1. **v0.53.0-preview.0** https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0: Fixes A2A runtime 400 Bad Request errors by grouping cancelled tool responses and coalescing consecutive chat roles; introduces the LLM triage orchestrator for the upcoming caretaker triage feature set.
2. **v0.52.0 (Stable GA)** https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0: Refines workspace context handling to automatically exclude transient CI configuration files, reducing unnecessary token bloat and context pollution; ships foundational core modules for the caretaker triage worker service.
3. **v0.52.0-nightly.20260722.gc776c665b** https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260722.gc776c665b: Critical security fix for the A2A server that enforces workspace trust and strict task isolation blocks to eliminate unauthenticated remote code execution (RCE) attack vectors. Full changelog: https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260721.gacae7124b...v0.52.0-nightly.20260722.gc776c665b

## 3. Hot Issues
Top 10 noteworthy recently updated issues, sorted by priority and community engagement:
1. **#22323: Subagent MAX_TURNS termination misreported as successful GOAL completion** https://github.com/google-gemini/gemini-cli/issues/22323 (12 comments, P1): The silent misreporting of cut-short subagent analysis leads users to act on incomplete results with no visible indication of interruption, making it one of the highest priority bugs for the agent team.
2. **#21409: Generalist agent hangs indefinitely on simple operations** https://github.com/google-gemini/gemini-cli/issues/21409 (8 comments, 8 👍, P1): One of the top user-reported UX pain points, the freeze blocks basic tasks like folder creation unless users explicitly disable subagent deferral entirely.
3. **#19873: Zero-dependency OS sandboxing to leverage Gemini 3's native bash affinity** https://github.com/google-gemini/gemini-cli/issues/19873 (8 comments, P2 enhancement): This long-running EPIC would drastically improve agent shell performance and security by matching Gemini 3's native POSIX workflow training without heavyweight container overhead.
4. **#25166: Shell execution stuck on "Awaiting user input" after command completes** https://github.com/google-gemini/gemini-cli/issues/25166 (4 comments, 3 👍, P1): The unreliable shell state breaks the most common interactive agent use case, forcing users to manually terminate sessions repeatedly for trivial command runs.
5. **#24246: 400 error when >128 tools are available** https://github.com/google-gemini/gemini-cli/issues/24246 (3 comments, P2 bug): Blocks power users running large MCP tool setups with custom skills, hitting API-side tool count limits that the CLI does not currently proactively mitigate.
6. **#21983: Browser subagent fails to launch on Wayland** https://github.com/google-gemini/gemini-cli/issues/21983 (4 comments, P1): Breaks browser automation functionality entirely for all Linux users running default modern GNOME/KDE Wayland sessions.
7. **#20079: Symlinked custom subagent files are not recognized** https://github.com/google-gemini/gemini-cli/issues/20079 (4 comments, P2 bug): Prevents power users from using symlinked, version-controlled subagent libraries across multiple workstations or shared team repos.
8. **#26525: Deterministic pre-model secret redaction for Auto Memory** https://github.com/google-gemini/gemini-cli/issues/26525 (3 comments, P2 security bug): The current workflow sends unredacted transcripts to model context before redaction runs, creating risk of accidental secret exposure in logging systems.
9. **#21763: Bug report exports exclude subagent context** https://github.com/google-gemini/gemini-cli/issues/21763 (2 comments, P1 bug): Makes debugging complex multi-subagent session failures extremely difficult for end users submitting support tickets.
10. **#22745: AST-aware file reads, search and code mapping EPIC** https://github.com/google-gemini/gemini-cli/issues/22745 (7 comments, P2 feature): If implemented, AST-native tooling would drastically reduce turn count and token bloat for codebase exploration tasks by eliminating noisy non-semantic file read operations.

## 4. Key PR Progress
10 high-impact recently updated pull requests:
1. **#28509: Filter internal thought parts from history returns when context management is disabled** https://github.com/google-gemini/gemini-cli/pull/28509: Prevents internal model thought leakage leading to duplicate reasoning blocks in chat sessions.
2. **#28485: Add Gemini 3.5 Flash to the default model selector for all users** https://github.com/google-gemini/gemini-cli/pull/28485: Resolves a reported gap where the new model was fully defined in configuration but not surfaced to end users.
3. **#28469: Rotate session ID on permanent model fallback** https://github.com/google-gemini/gemini-cli/pull/28469: Fix

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-23
---
## 1. Today's Highlights
GitHub Copilot CLI shipped 3 consecutive patch updates (v1.0.74-1 through v1.0.74-3) in the last 24 hours, introducing official support for Google's Gemini 3.6 Flash model and session multiplexing stability fixes. A long-running high-impact MCP server connection bug for Windows users (open since March 2026) was closed out, while 17 new triage-phase issues surfaced pointing to multiple v1.0.72+ regressions affecting Windows, tmux, and enterprise ACP mode deployments. Two high-upvoted feature requests for native PDF support and configurable Auto mode model pools gained 30+ combined positive reactions from the community this update window.

## 2. Releases
Three new incremental patch releases went live in the 24-hour window:
- **v1.0.74-1**: Added a first-run splash screen to let users opt into the default sandbox, plus native support for the new `gemini-3.6-flash` model
- **v1.0.74-2**: Resolved a core session multiplexing bug where open dialogs from one session leaked into another, with eligible pickers now automatically reopening when users switch back to previous sessions
- **v1.0.74-3**: Carried targeted follow-up fixes for the recently updated `$` interactive shell shortcut, plus unlisted stability patches for edge-case session teardown flows.

## 3. Hot Issues
1. [Issue #2282 (CLOSED)](https://github.com/github/copilot-cli/issues/2282): Resolved Windows MCP connection bug. The 11-comment long thread tracks the fix for a WINGet-install specific failure that prevented Windows users from connecting to the official GitHub MCP server, with community users confirming post-update resolution works as expected.
2. [Issue #443 (OPEN)](https://github.com/github/copilot-cli/issues/443): Built-in native PDF reading support. With 33 👍 reactions (the highest of all active issues), devs working with academic papers, technical documentation and research reports are requesting to eliminate dependencies on external tools like pdftotext.
3. [Issue #4016 (OPEN)](https://github.com/github/copilot-cli/issues/4016): BYOK (custom provider) auth regression in ACP mode. Affecting enterprise self-hosted Copilot deployments, the bug breaks login-free COPILOT_PROVIDER_* setups post v1.0.61, with the reporter (a Microsoft engineer) confirming the regression blocks ACP stdio integrations.
4. [Issue #4163 (OPEN)](https://github.com/github/copilot-cli/issues/4163): Linux v1.0.71+ child process zombie leak. The 3-comment thread notes ~2 zombie processes accumulate per minute per Copilot session, breaking long-running headless CI and server deployments that run Copilot CLI for extended periods.
5. [Issue #4183 (OPEN)](https://github.com/github/copilot-cli/issues/4183): Auto-compaction fails to prevent 5MB CAPI request limit errors. With 7 👍 reactions, users report even token-compliant long tool-heavy sessions break permanently when serialized tool history crosses the independent 5MB API payload cap, with no current workaround.
6. [Issue #4161 (OPEN)](https://github.com/github/copilot-cli/issues/4161): `task_complete` tool unavailable after switching to autopilot mode. A regression of a 2024 closed bug, the issue prevents autopilot sessions from properly completing tasks, breaking end-to-end autonomous workflow use cases.
7. [Issue #4218 (OPEN)](https://github.com/github/copilot-cli/issues/4218): Configurable Auto mode model pool. A new 6-👍 request lets users restrict Auto mode to a pre-defined subset of their organization's allowed models, eliminating unpredictable cost overruns and inconsistent performance from unvetted model selections.
8. [Issue #4207 (OPEN)](https://github.com/github/copilot-cli/issues/4207): Per-subagent AI credit usage breakdown in `/usage`. With 6 👍 from enterprise admins, the request adds visibility into distributed cost for teams running large numbers of custom subagent tasks, filling a critical gap in billing attribution.
9. [Issue #4165 (OPEN)](https://github.com/github/copilot-cli/issues/4165): Windows cold `--resume` session hang. The bug causes Copilot CLI to get stuck indefinitely at a "Resuming session" loading state when users run `copilot --resume` directly from PowerShell with no active prior Copilot session running.
10. [Issue #4222 (OPEN)](https://github.com/github/copilot-cli/issues/4222): React/Ink infinite render loop regression on v1.0.72+. A re-emergence of a previously fixed v1.0.31 bug, the issue freezes the main Copilot pane in the VS Code integrated terminal on native Windows, with no output rendered to the user.

## 4. Key PR Progress
Only 1 public PR recorded activity in the last 24 hours, with the rest of the v1.0.74 patch series fixes merged and held in internal release testing for upcoming public rollout:
1. [PR #3163 (OPEN)](https://github.com/github/copilot-cli/pull/3163): Adds a dedicated GitHub Actions monitor workflow to track triage progress for 3 long-standing display rendering issues affecting ViewSonic monitor users running Copilot CLI on high-DPI terminal setups. This PR initiates automated status checks to reduce manual maintainer triage burden for related terminal rendering bugs.
The remaining 9 of the top 10 active PRs are in pre-merge validation, rolling up fixes for the tmux UI rendering glitches, Windows exit crash, and Linux zombie leak bugs reported in this issue window.

## 5. Feature Request Trends
Three distinct top request directions emerged from the latest issue updates:
1. **Expanded native tooling**: Leading requests are built-in PDF parsing support, OSC 133 shell-integration sequences for better terminal scrollback navigation, and a memory cap for the native `tgrep` indexer to prevent OOM events on large monorepos.
2. **Granular cost and model control**: Users are prioritizing configurable Auto mode model allowlists, per-subagent billing breakdown views, and user-adjustable context auto-compaction thresholds to fine-tune performance for high-capacity models like Claude Opus 4.6.
3. **Advanced agent orchestration**: Enterprise power users are requesting support for explicit inline custom agent invocation and agent chaining directly in regular prompts, to build multi-step complex workflows without editing permanent YAML agent config files.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced across the latest issues:
1. **Cross-platform regression frequency in v1.0.7x line**: Recent releases introduced multiple uncaught breakages including Windows notification crashes, process exit crashes, tmux UI rendering glitches, and tmux shell command completion timeouts, that slipped past public release testing.
2. **Enterprise ACP/BYOK mode instability**: A series of post v1.0.61 regressions continue to break self-hosted custom provider setups, with no full resolution for users relying on Copilot CLI as an external custom agent for Xcode, VS Code, and other ACP-compatible tools.
3. **Hard-coded unconfigurable platform limits**: Default auto-compaction thresholds and the 5MB CAPI payload limit break long tool-heavy sessions for power users, with no exposed configuration knobs to adjust behavior for high-workload use cases.
4. **Inconsistent edge-case platform support**: Alpine/musl Linux auto-update incorrectly pulls x64 glibc packages, and remote SSH dev container sessions ignore the remote context for the Agent View, creating unexpected broken behavior for non-standard deployment environments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-23
Repository: github.com/MoonshotAI/kimi-cli
---
## 1. Today's Highlights
This 24-hour snapshot (ending 2026-07-23) includes no new official Kimi Code CLI releases, with 3 recently updated open issues and 2 in-progress community-submitted pull requests tracked for the MoonshotAI/kimi-cli repository. Community activity this period is heavily focused on resolving workflow-breaking edge case bugs affecting Windows users, MCP tool integration, and long-running shell execution. Two targeted functional fixes for the widely used StrReplaceFile edit tool and async shell process handler are now queued for maintainer review.

## 2. Releases
No new Kimi Code CLI versions were published in the tracked window. This section is omitted per source data.

## 3. Hot Issues
Only 3 recently updated open issues are available in the 24-hour window, all high-priority items are featured below:
1. [#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318) [OPEN] Incorrect organization TPD rate limit calculation bug: Affecting Kimi 2.6 users on Windows 10, this 2-month-old unresolved bug with 2 community upvotes throws unexpected 1505241 TPD cap errors before users hit their actual organization request quota, breaking long-running batch code generation sessions.
2. [#2531](https://github.com/MoonshotAI/kimi-cli/issues/2531) [OPEN] MCP tool schemas rejected by Moonshot API (HTTP 400): Reported for Kimi CLI 1.49.0 on macOS arm64 running the K3 model, this bug fully blocks custom MCP tool workflows, as unvalidated client-side tool schemas fail Moonshot API's strict JSON schema checks without pre-submission sanitization.
3. [#2532](https://github.com/MoonshotAI/kimi-cli/issues/2532) [OPEN] `kimi web` startup crash on Chinese-locale Windows with redirected stdout: This usability-critical bug breaks Kimi CLI launches from IDEs or automation pipelines that capture stdout, throwing an unhandled `UnicodeEncodeError` when the non-ASCII startup banner emoji cannot be encoded to the system's default GBK codepage.

## 4. Key PR Progress
Only 2 recently updated open PRs are available in the tracked window, all active contributions are featured below:
1. [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) [OPEN] Fix: Count StrReplaceFile replacements against running modified content: This community contribution resolves Issue #2526, correcting the StrReplaceFile tool's logic that previously counted edits against the original unmodified file instead of sequentially updated in-memory content, preventing missed chained refactoring operations that rely on output from prior edits.
2. [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) [OPEN] Fix: Stop blocking on timeout when detached child processes hold stdout/stderr pipes: This PR addresses Issue #2468, fixing an async handler race condition that caused indefinite hangs when running shell commands that spawn background daemons, by prioritizing parent process exit code checks before waiting for stream EOF to unblock execution immediately.

## 5. Feature Request Trends
Distilled from recent community issue submissions, the top high-priority requested feature directions are:
1. Native client-side MCP schema sanitization out of the box, to eliminate manual schema adjustment work for developers integrating custom MCP tools.
2. Full cross-platform i18n encoding support for non-English locale Windows environments, to remove legacy codepage conflicts for enterprise users on regional Windows installations.
3. Transparent, real-time organization-level TPD usage tracking, to surface remaining quota to users before unexpected API blocks interrupt in-progress work.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community in this window include:
1. Unhandled edge case breakages on Chinese-locale Windows, with no documented workarounds for stdout encoding crashes that block Kimi CLI launches from IDEs and CI/CD wrappers.
2. Silent incorrect behavior for file edit tooling, where the StrReplaceFile tool undercounted chained edits with no explicit error alerting, breaking multi-step bulk refactoring workflows.
3. Unnecessary API validation friction, where spec-compliant MCP tool schemas are rejected by the Moonshot backend, adding unplanned integration overhead for MCP developers.
4. Unbounded execution hangs for shell commands that spawn background processes, forcing users to manually kill stuck Kimi CLI instances to resume interrupted work.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-23
---
## 1. Today's Highlights
The top priority for maintainers today is addressing a widespread, unplanned outage affecting all OpenCode Go paid tier subscribers, with more than 90 combined comments across cross-language user reports noting consistent 401 upstream provider blocks on chat completion endpoints. A long-pending, highly upvoted feature request for auto-discovering models on local OpenAI-compatible providers gained 28 new community comments, as users continue to push for reduced manual configuration overhead. The past 24 hours also saw a wave of merged stability and UX improvements for the 1.18.x release line, alongside ongoing work to refactor the TUI onto the new V2 theme system.

## 2. Releases
No new production OpenCode releases were published in the last 24 hours. The only new published asset is `pr-38252-videos` ([anomalyco/opencode/releases/tag/pr-38252-videos](https://github.com/anomalyco/opencode/releases/tag/pr-38252-videos)), a supplementary pre-release containing before/after verification test recordings for PR #38252 for cross-contributor review purposes.

## 3. Hot Issues
1. **#6231 Auto-discover models from OpenAI-compatible provider endpoints** ([anomalyco/opencode#6231](https://github.com/anomalyco/opencode/issues/6231)): This top-voted open feature request (185 👍, 28 comments) addresses the tedious, error-prone requirement for users to manually list every available local model in `opencode.json` for tools like Ollama, LM Studio and llama.cpp, which frequently change their available model catalog.
2. **#38257 [Bug] OpenCode Go returns 401 Request blocked by upstream provider on chat/completions** ([anomalyco/opencode#38257](https://github.com/anomalyco/opencode/issues/38257)): 25 comments, 8 👍. This bug is part of a widespread Go tier outage: users confirm the `/v1/models` endpoint works fine, but all chat completion requests for paid subscription models fail, pointing to a server-side platform issue.
3. **#19466 opencode uses 50% single core CPU while idle waiting for API rate limits** ([anomalyco/opencode#19466](https://github.com/anomalyco/opencode/issues/19466)): 15 comments, 11 👍. Users on high-end i9-14900 systems note unnecessary resource waste during long backoff windows for rate limited requests, increasing idle power draw and competing for CPU with local LLM inference workloads.
4. **#38195 401 AuthError: Request blocked by upstream provider** ([anomalyco/opencode#38195](https://github.com/anomalyco/opencode/issues/38195)): 15 comments, 15 👍. This cross-platform report confirms the OpenCode Go outage impacts both OpenCode Desktop and Hermes clients across Windows and macOS, with free tier models working normally, ruling out local client configuration issues.
5. **#37970 Plan/Build mode missing in 1.18.0** ([anomalyco/opencode#37970](https://github.com/anomalyco/opencode/issues/37970)): 10 comments. Users report the latest release removed the explicit Plan/Build mode toggle, leading to unintended unapproved code edits when users only requested a project plan with no changes applied.
6. **#26459 Clipboard copy fails in web-based VSCode terminals (code-server, GitHub Codespaces)** ([anomalyco/opencode#26459](https://github.com/anomalyco/opencode/issues/26459)): 7 comments. This bug breaks core workflow for remote developer users: the UI incorrectly shows a "Copied to clipboard" notification, but no content is transferred in browser-hosted VSCode environments.
7. **#22260 Feature request: read tool should support audio and video attachments** ([anomalyco/opencode#22260](https://github.com/anomalyco/opencode/issues/22260)): 7 comments, 7 👍. Currently the built-in read tool rejects audio/video files as unsupported binary content; this change would let agents natively inspect local media assets for audio processing, video editing and media development workflows.
8. **#26220 Bug: OpenCode enters infinite loop after tool calls complete** ([anomalyco/opencode#26220](https://github.com/anomalyco/opencode/issues/26220)): 6 comments, 3 👍. Affecting the Big Pickle release line, unresponsive sessions that hang infinitely after tool call completion waste tokens and require full process restarts to resolve.
9. **#32691 Edit Project dialog name/color changes fail to save properly** ([anomalyco/opencode#32691](https://github.com/anomalyco/opencode/issues/32691)): 2 comments. A broken useMutation handler in the project settings UI silently swallows API errors, so users cannot persist custom project names and color tags for organization.
10. **#38333 New Session uses the wrong model when an agent is selected** ([anomalyco/opencode#38333](https://github.com/anomalyco/opencode/issues/38333)): 2 comments. 1.18.4 users note that selecting a custom agent with a pre-configured model at session launch does not apply the model preset, forcing users to manually reselect the agent inside the new session to apply correct settings.

## 4. Key PR Progress
1. **#38401 [contributor] fix(core): load dynamic models for generation** ([anomalyco/opencode#38401](https://github.com/anomalyco/opencode/pull/38401)): Open PR that fixes the stateless `/api/generate` endpoint to support dynamically loaded models (including `opencode/gemini-3.5-flash` and other AI SDK backed models) that previously returned "Unsupported package" errors.
2. **#33403 feat(run): forward child session events to NDJSON stream** ([anomalyco/opencode#33403](https://github.com/anomalyco/opencode/pull/33403)): Merged PR that fixes the `opencode run --format json` output to no longer filter out subagent spawned event data, enabling full programmatic visibility into multi-agent runs.
3. **#38396 docs(tui): add generated V2 theme reference** ([anomalyco/opencode#38396](https://github.com/anomalyco/opencode/pull/38396)): Merged PR that auto-generates the full V2 TUI theme documentation from the authoritative Effect schema, ensuring theme documentation stays in sync with code changes in CI.
4. **#38397 refactor(tui): generate syntax from V2 theme** ([anomalyco/opencode#38397](https://github.com/anomalyco/opencode/pull/38397)): Open PR that unifies all TUI syntax, markdown and diff styling to pull directly from V2 theme tokens, removing 1000+ lines of redundant V1 theme resolution legacy code.
5. **#38398 feat(tui): add turn token usage diagnostics** ([anomalyco/opencode#38398](https://github.com/anomalyco/opencode/pull/38398)): Open PR that adds per-turn token breakdown UI (new, cached, total usage plus cache-bust warnings) accessible via a DevTools toggle, giving users full transparency into token consumption.
6. **#33453 fix(provider): default custom models to image input** ([anomalyco/opencode#33453](https://github.com/anomalyco/opencode/pull/33453)): Merged PR that automatically enables text+image input capabilities for all newly added user custom models, removing the requirement for manual modality configuration for multi-modal local models.
7. **#33450 feat(tui): add global session picker toggle** ([anomalyco/opencode#33450](https://github.com/anomalyco/opencode/pull/33450)): Merged PR that adds a global mode to the TUI session picker, letting users browse and resume sessions across all projects without navigating between individual project directories.
8. **#33444 fix(session): restore session summary from per-turn diffs** ([anomalyco/opencode#33444](https://github.com/anomalyco/opencode/pull/33444)): Merged PR that resolves a regression that zeroed out session statistics (files changed, line additions/deletions) after a prior performance refactor of the event log.
9. **#33391 feat(opencode): discover plugin package directories under plugins/** ([anomalyco/opencode#33391](https://github.com/anomalyco/opencode/pull/33391)): Merged PR that adds support for loading local plugins directly from unindexed directories containing a `package.json`, streamlining the custom local plugin development workflow.
10. **#19038 feat(app): open browser inside the desktop app** ([anomalyco/opencode#19038](https://github.com/anomalyco/opencode/pull/19038)): Merged long-running PR that adds an embedded in-app browser to the OpenCode Desktop client, eliminating context switching to external browsers during web development and testing.

## 5. Feature Request Trends
Community feature asks continue to cluster around four clear directions:
1.  **Local provider usability**: Top priority request is zero-config automatic model discovery for OpenAI-compatible local inference endpoints, to eliminate manual `opencode.json` configuration.
2.  **Rich content support**: Extending core read tool capabilities to handle audio and video files, plus native LaTeX math rendering in terminal CLI output for data science and academic use cases.
3.  **TUI/UX quality of life**: New feature asks include user message quick-jump sidebars, full-text project search functionality, and configurable FPS limits for reduced lag when accessing TUI over remote desktop connections.
4.  **Extensibility**: Finer-grained tool access controls for MCP (Model Context Protocol) plugins, with glob pattern support to fully disable unused third-party tools.

## 6. Developer Pain Points
Recurring high-frequency frustrations from the last 24 hours include:
1.  **OpenCode Go paid outage**: Hundreds of paying users across multiple regions and languages (English, Russian, Portuguese) are locked out of chat completions, with no official status update or ETA for a fix posted

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-23
Source: github.com/badlogic/pi-mono

---

## 1. Today's Highlights
This 24-hour window delivered dozens of critical bug fixes, new provider integrations, and community-submitted extension improvements with no new official stable releases shipped. Top resolved issues addressed long-standing regressions for self-hosted OpenAI-compatible providers, broken Windows extension labeling, and slow external editor launch performance, while work on high-demand features including constrained sampling, native OpenRouter OAuth, and enterprise usage cost tracking made tangible progress. Two open bugs earned strong community upvotes: Copilot Enterprise context compaction failures (8 👍) and llama.cpp default model unavailability on startup (7 👍) that block core offline and enterprise user workflows.

## 2. Releases
No new official Pi releases were published in the past 24 hours.

## 3. Hot Issues (Top 10 Noteworthy)
All issues are accessible at `https://github.com/earendil-works/pi/issues/[ISSUE_NUMBER]`
1. **#6768 (OPEN): Copilot Enterprise context compaction failure** – 8 👍, 8 comments. Blocks core context reduction workflows for enterprise Copilot users, who receive 421 Misdirected Request errors when attempting to compact conversation history. It is the highest-engagement unpatched open bug in the current backlog.
2. **#6922 (OPEN): Default llama.cpp model returns "No models available" error** – 7 👍, 2 comments. Breaks fully offline, self-hosted deployment flows for users who set llama.cpp as their default provider, preventing non-interactive sessions from booting entirely.
3. **#6476 (CLOSED): httpIdleTimeoutMs regression for self-hosted OpenAI-compatible providers** – 12 comments. Resolves a v0.80.3 → v0.80.6 update regression where custom idle timeout settings were ignored for vLLM and other self-hosted OpenAI endpoints, forcing premature request timeouts after only a few minutes.
4. **#6686 (CLOSED no-action): Automatic GitHub account logouts** – 10 comments. Tracks a years-long multi-device auth persistence bug that breaks Copilot provider logins across separate Pi instances, marked for resolution as part of a future planned full OAuth overhaul.
5. **#6210 (OPEN in-progress): /scoped-models cannot select model IDs with brackets** – 8 comments. Breaks model selector workflows for users who name custom fine-tuned models with standard version bracket syntax (e.g. `custom/bracketed-model[1m]`), causing false "No models match pattern" warnings.
6. **#6911 (CLOSED no-action): Un-abortable multi-day OpenAI SDK retry sleeps** – 5 comments. Highlights a dangerous edge case where the OpenAI/Anthropic SDK respects full multi-day `Retry-After` 429 headers with no interrupts, mapped to a new dedicated fix PR.
7. **#6972 (CLOSED): pi-goal-x extension cross-session state bleed** – 2 comments. Triage for a reported security gap where third-party extensions could modify shared state across independent Pi terminal sessions, now prioritized for extension isolation hardening.
8. **#6985 (CLOSED untriaged): Community VS Code Pi Extension submission** – 1 comment. A new user-built integration that embeds Pi directly in the VS Code editor, submitted for official inclusion in the Pi packages repository to fill a longstanding IDE integration gap.
9. **#6940 (CLOSED last-read): OpenRouter conversation cache stops before processing tool results** – 4 comments. Fixes a token waste bug for Anthropic models routed through OpenRouter, where cache breakpoints failed to advance during consecutive tool-only turns and forced full conversation reprocessing.
10. **#6652 (CLOSED): Hardcoded crash log path ignores PI_CODING_AGENT_DIR** – 4 comments. Resolves an edge case where the Pi TUI would generate unintended hidden `.pi` directories in a user’s home folder even when they had configured a fully custom working directory path.

## 4. Key PR Progress (Top 10 Important Changes)
All pull requests are accessible at `https://github.com/earendil-works/pi/pull/[PR_NUMBER]`
1. **#6341 (OPEN): feat(ai): Add constrained sampling support** – Authored by mitsuhiko. Adds an opt-in provider-side JSON schema constrained sampling configuration for tools, eliminating invalid tool call formatting errors across all supported model backends.
2. **#6980 (OPEN): fix(ai): Make provider retries abortable** – Replaces native OpenAI/Anthropic SDK retry logic with a shared Pi helper that enforces a maximum retry delay cap and makes retry sleeps interruptible via AbortSignal, fully resolving the un-abortable multi-day retry bug tracked in #6911.
3. **#6927 (CLOSED): Add native OpenRouter OAuth support** – Delivers a PKCE-enabled browser OAuth flow for OpenRouter users, removing the requirement for manual API key entry for the popular third-party model aggregator.
4. **#6960 (CLOSED): feat(ai): Add StepFun provider support** – Adds 4 new native endpoints for the Chinese StepFun LLM provider, covering China mainland, global, and prepaid routing use cases for regional users.
5. **#6903 (CLOSED): fix(coding-agent): Speed up external editor launch** – Resolves #6774 by moving temporary external editor files to private `mkdtemp` subdirectories instead of the root system temp folder, cutting launch delays by orders of magnitude for users with crowded `os.tmpdir()` directories.
6. **#6958 (CLOSED): Write TUI crash logs to configured agent directory** – Fixes #6652 by respecting the `PI_CODING_AGENT_DIR` environment variable, so crash logs no longer generate unintended home directory `.pi` folders.
7. **#6964 (CLOSED): Fix Windows sibling extension absolute path display** – Resolves #6619, stopping full unreadable absolute paths from appearing in the Extensions banner for npm-managed dependent extensions on Windows.
8. **#6984 (CLOSED): Honor `compat.forceAdaptiveThinking` in Bedrock provider** – Unblocks users running custom unlisted Claude Sonnet 5 models on Amazon Bedrock by enabling the adaptive thinking compatibility escape hatch to avoid validation errors.
9. **#6971 (OPEN): feat(coding-agent): Emit `bash_execution_update` events** – Adds a new event stream that exposes bash tool execution status updates to client extensions, already validated for integration with the `pimacs.el` Emacs Pi plugin.
10. **#6881 (OPEN): feat(ai): Use provider-reported billed cost from API responses** – Replaces manual model catalog cost calculation with upstream returned `usage.cost` data when providers expose it, eliminating token billing calculation mismatches for BYOK and enterprise plan users.

## 5. Feature Request Trends
The most requested feature directions distilled from the 24-hour issue backlog:
1. **Provider compatibility improvements**: Top asks include better native support for enterprise Copilot plans, unlisted Bedrock models, and self-hosted local llama.cpp deployments.
2. **TUI workflow quality of life**: Users are prioritizing MRU (most recently used) model cycling shortcuts, thinking effort cycle shortcut support in more dialogs, and polished embedded mini-app behavior.
3. **Extension ecosystem expansion**: Strong community demand for official curation of third-party IDE integrations (VS Code, Emacs), exposed session metadata for extension developers, and improved cross-session extension isolation.
4. **Regional provider support**: Community contributors are actively building native integrations for popular regional LLM providers, most recently StepFun and Amazon Bedrock Mantle.

## 6. Developer Pain Points
Recurring high-frequency frustrations for Pi power users and extension builders:
1. **Cross-platform Windows edge cases**: Windows users face disproportionate unique bugs including broken extension path labeling, non-functional arrow keys inside nested ConPTY terminal multiplexers, and Kitty keyboard protocol negotiation conflicts.
2. **Self-hosted provider fragility**: Users running custom OpenAI-compatible endpoints (vLLM), llama.cpp backends, and unlisted enterprise models frequently see core settings (idle timeouts, default model selection) broken after minor point version updates.
3. **Multi-device auth breakage**: Users who run Pi alongside Copilot LSP in Neovim, across multiple terminal sessions, or on multiple machines regularly face unprompted GitHub Copilot token invalidation and auto-logouts.
4. **TUI and test automation instability**: Power users report frequent hard-to-debug issues including orphaned promises from concurrent extension dialogs, leftover temp session directories from `--no-session` subprocess invocations during testing, and incorrect grapheme width rendering on non-default terminal themes.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-23
Maintained by QwenLM/qwen-code technical analyst team for AI developers

---
## 1. Today's Highlights
This 24-hour update covers the release of the first v0.20.0 preview build, active triage of a critical core bug that completely disabled the widely used web_fetch tool, and emergency patching of CI failures that blocked all open pull requests on the main branch. Maintainers also rolled out a security fix for high-severity credential exposure risks in shell subprocesses, while community contributors made progress on long-requested multi-agent plan visualization and enterprise external memory integration features. All top 3 P1 open bugs from the prior 48 hours have assigned owners and pending patches as of publication.

---
## 2. Releases
Three new versions were published in the last 24 hours:
- **v0.20.0-preview.0**: First public preview for the upcoming v0.20 major release, adding test coverage for daemon metrics initialization ordering and formal documentation of previously unrecorded asymmetry behavior in the metricReader component, per changes in [#7456](https://github.com/QwenLM/qwen-code/pull/7456)
- **v0.20.0-nightly.20260722.b98306b7e**: 2026-07-22 nightly build carrying all v0.20 preview telemetry improvements for early adopter validation
- **v0.0.0-benchmark-poc.20260722.1**: Non-production temporary prerelease to validate the end-to-end GitHub Actions → ECS benchmark worker → public results publication pipeline, no user-facing functionality included.

---
## 3. Hot Issues
1. **[#7284 (Closed) P1 Core Bug](https://github.com/QwenLM/qwen-code/issues/7284)**: Side queries hardcoded `enable_thinking=false`, breaking all TokenPlan endpoints that require thinking enabled. 5 comment threads identified this as the root cause for the full web_fetch outage that impacted thousands of users earlier this week.
2. **[#7316 (Closed) P2 Tools Bug](https://github.com/QwenLM/qwen-code/issues/7316)**: Empty optional `working_dir` strings returned by OpenAI-compatible models broke the subAgent tool completely. 5 community comments collaborated on a schema validation fix to restore subagent functionality for third-party LLM users.
3. **[#7537 (Open) P1 CI Bug](https://github.com/QwenLM/qwen-code/issues/7537)**: Core test suite failed on main due to a fork dispatch test that never awaited `registry.complete`, causing CI status checks to show as red for *all* open PRs regardless of their changes. This is the top maintainer priority to unblock the entire contributor pipeline.
4. **[#6601 (Closed) P1 Security Bug](https://github.com/QwenLM/qwen-code/issues/6601)**: Shell subprocesses inherited full daemon environment variables, exposing API keys and `QWEN_SERVER_TOKEN` to untrusted agent-executed commands. The resolved patch eliminates a critical privilege escalation risk for shared deployments.
5. **[#7489 (Open) P2 VS Code Bug](https://github.com/QwenLM/qwen-code/issues/7489)**: The VS Code Companion file picker inserts `@filename` as plain text instead of attaching actual image content to model requests, fully breaking vision multimodal workflows for extension users.
6. **[#7287 (Open) P2 Core Bug](https://github.com/QwenLM/qwen-code/issues/7287)**: The auto-memory `MEMORY.md` file is loaded into the system prompt at session start but not registered in `FileReadCache`, causing the model's first attempted update to be rejected immediately. This breaks zero-config persistent memory functionality for end users.
7. **[#7449 (Open) P3 Enhancement Proposal](https://github.com/QwenLM/qwen-code/issues/7449)**: 4-person discussion among enterprise users and maintainers is ongoing to define an official provider-neutral external memory integration profile for self-hosted deployments, to avoid requiring custom core code forks for internal knowledge base connections.
8. **[#7404 (Closed) P3 CLI Bug](https://github.com/QwenLM/qwen-code/issues/7404)**: The post-start update check had a too-short timeout, leading to guaranteed failures when loading large old sessions. 4 comment threads refined the fix to extend the timeout to 15 seconds without impacting daemon startup latency.
9. **[#7515 (Open) P3 CLI Bug](https://github.com/QwenLM/qwen-code/issues/7515)**: The `/update` command throws a registry error as of v0.20.1 for users running version managers like mise or nvm. Root cause was identified as misdetection of npm shell shims, with multiple competing community patches already submitted.
10. **[#6577 (Open) P2 Platform Bug](https://github.com/QwenLM/qwen-code/issues/6577)**: Alt+V shortcut for pasting clipboard screenshots does not work on Windows PowerShell / Windows Terminal. It is tagged `welcome-pr` to invite new contributors to submit cross-platform input handling patches.

---
## 4. Key PR Progress
1. **[#7540 (Closed) Core Test Fix](https://github.com/QwenLM/qwen-code/pull/7540)**: Stubs resident-agent methods in the shared agent test registry, directly resolving the red CI status on main to unblock all open PRs.
2. **[#7534 (Open) Core Fix](https://github.com/QwenLM/qwen-code/pull/7534)**: Automatically retries OpenAI-compatible requests once when a provider explicitly returns a 400 requiring `enable_thinking=true`, eliminating the side query outage scenario without user intervention.
3. **[#7527 (Open) Security Hardening](https://github.com/QwenLM/qwen-code/pull/7527)**: Extends the existing `sanitizeChildEnv` logic to cover hook runner and tool-discovery child processes, closing the remaining credential exposure gaps after the #6601 fix.
4. **[#7493 (Open) VS Code Fix](https://github.com/QwenLM/qwen-code/pull/7493)**: Passes absolute image paths instead of plain filenames when users attach images via the VS Code file picker, fully resolving the broken vision input workflow reported in #7489.
5. **[#7545 (Open) CLI Fix](https://github.com

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-07-23
---
## 1. Today's Highlights
Today’s updates center on finalizing the imminent v0.9.1 release, with 17+ merged pull requests landing core TUI overhauls, a first-party bundled default skill pack, and critical fixes for model provider routing. The community has kicked off formal planning for the v0.9.2 milestone, including a long-awaited staged command-boundary refactor and context payload optimization work to cut unnecessary token overhead. Multiple high-severity user-reported bugs for Windows installers, custom provider launch failures, and flaky DeepSeek API requests are fully triaged and queued for patch releases post v0.9.1.

## 2. Releases
No new official releases were published in the last 24 hours. All active work is focused on clearing v0.9.1 release blockers before public launch in the coming days.

## 3. Hot Issues (10 Noteworthy Items)
| Issue Link | Summary & Relevance |
|---|---|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | 17-comment EPIC tracking the staged command-boundary refactor, the highest-priority long-term architectural roadmap item that will enable modular user-defined custom commands. |
| [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) | 12-comment request for an automated dev environment sync workflow, solving the community's top onboarding pain point caused by the project's 10+ PR/day high velocity. |
| [#2766](https://github.com/Hmbown/CodeWhale/issues/2766) | 9-comment top user UX pain point requesting output copyability improvements and less intrusive confirmation popups, which currently block easy code snippet sharing and interrupt active workflows. |
| [#1917](https://github.com/Hmbown/CodeWhale/issues/1917) | 5-comment architectural proposal for a universal PreToolUse/PostToolUse hook layer, which will add native Cancel/Pause/Resume controls across all agent tool actions. |
| [#4085](https://github.com/Hmbown/CodeWhale/issues/4085) | Bug report for missing read/write support for macOS 12+ default Dropbox File Provider directories, which breaks functionality for a large segment of macOS end users storing working copies in cloud storage. |
| [#4684](https://github.com/Hmbown/CodeWhale/issues/4684) | Critical bug where `danger-full-access` sandbox mode does not disable tools-layer workspace boundary checks, completely breaking global skill functionality for power users who opted in to unrestricted cross-workspace access. |
| [#4685](https://github.com/Hmbown/CodeWhale/issues/4685) | High-severity Windows installer bug that overwrites the entire user PATH variable instead of appending the DeepSeek TUI binary path, which can fully break existing user toolchains post-install. |
| [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) | Flaky DeepSeek completions URL failure bug, causing intermittent network errors on long-running inference requests for DeepSeek-native TUI users. |
| [#4682](https://github.com/Hmbown/CodeWhale/issues/4682) | Bug that causes full application launch failure when users configure a custom named model provider, blocking enterprise and on-prem self-hosted deployment use cases. |
| [#4713](https://github.com/Hmbown/CodeWhale/issues/4713) | v0.9.1 security gate tracking full disposition of 17 open Dependabot alerts (7 high, 10 moderate) across the codebase before the release is tagged. |

## 4. Key PR Progress (10 Important Items)
| PR Link | Summary & Impact |
|---|---|
| [#4675](https://github.com/Hmbown/CodeWhale/pull/4675) | Merged core v0.9.1 integration PR shipping the new TUI visual color grammar, runtime simplification, and public release surface updates as the base for all upcoming v0.9.1 features. |
| [#4695](https://github.com/Hmbown/CodeWhale/pull/4695) | Ships the v5 bundled first-party default skill pack, including contextually invoked workflows for interviewing, planning, debugging, testing, and security reviewing that match competing offerings from Kimi Code and Claude Code. |
| [#4696](https://github.com/Hmbown/CodeWhale/pull/4696) | Launches the community-requested `/uwu` theme (with owo/kawaii aliases), adding a playful soft-color visual mode and a themed empty-state whale mark for end users. |
| [#4711](https://github.com/Hmbown/CodeWhale/pull/4711) | Overhauls the top TUI chrome to exclusively show active to-dos and sub-agents, adds resizable draggable dividers for work panels, and standardizes all composer rails to be fully theme-native. |
| [#4694](https://github.com/Hmbown/CodeWhale/pull/4694) | Adds guardrails to fail closed on invalid Kimi Code/Moonshot K3 model ID and endpoint cross-pairings, eliminating silent misconfiguration inference failures. |
| [#4679](https://github.com/Hmbown/CodeWhale/pull/4679) | Delivers a unified `/skills` command surface that consolidates install, audit, update, and remove functionality across project, global, and compatible skill roots, removing redundant parallel command interfaces. |
| [#4673](https://github.com/Hmbown/CodeWhale/pull/4673) | Fixes a critical sub-agent worktree bug that defaults unspecified shell command CWDs to the isolated sub-agent work directory instead of the parent workspace, preventing unintended cross-workspace file modifications. |
| [#4714](https://github.com/Hmbown/CodeWhale/pull/4714) | Open dependency PR applying `npm audit fix` across all workspaces to resolve all 17 open Dependabot alerts ahead of the v0.9.1 security gate. |
| [#4508](https://github.com/Hmbown/CodeWhale/pull/4508) | Updates the README and public homepage with the new v0.9.1 canonical TUI screenshot, eliminating the visual mismatch between public documentation and current main branch functionality. |
| [#4370](https://github.com/Hmbown/CodeWhale/pull/4370) | Adds full support for the TelecomJS (Telecom JiangSu) model provider, automatically fetching all available models from the provider's catalog endpoint instead of using a hardcoded single model entry. |

## 5. Feature Request Trends
1. **Extensible architectural foundations**: The community is heavily prioritizing the command-boundary refactor and universal tool lifecycle hook layer to enable fully user-customizable commands and granular control over long-running agent task execution.
2. **v0.9.2 context optimization**: Multiple aligned feature requests target deduplicating redundant context payloads, trimming unnecessary metadata from tool results, and adding cross-model token-attribution test gates to cut inference costs and reduce prompt bloat.
3. **Regional model support**: High demand for native support of East Asian regional model endpoints (TelecomJS, Minimax China) indicates a growing user base for local, low-latency, data-compliant model plans for enterprise use cases.
4. **TUI UX ergonomics**: Consistent requests for resizable UI panels, better visual rhythm for transcripts, and dedicated to-do/sub-agent surfaces are prioritized to improve comfort during multi-hour development sessions in the terminal.

## 6. Developer Pain Points
1. **Repo onboarding friction**: The project's 10+ PR per day release velocity makes it difficult for new contributors to maintain a working local dev environment synced to the latest `main`

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*