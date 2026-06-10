# AI CLI Tools Community Digest 2026-06-11

> Generated: 2026-06-10 23:25 UTC | Tools covered: 9

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

# 2026-06-16 AI Developer CLI Tools Cross-Tool Comparative Report
*For Technical Decision-Makers and Senior Development Teams*

---

## 1. Ecosystem Overview
The 2026 AI CLI tool landscape is transitioning rapidly from experimental proof-of-concept chat interfaces to production-grade, automation-first developer workhorses. All major tracked implementations are prioritizing multi-agent orchestration, enterprise-grade security hardening, and open ecosystem interoperability via the Model Context Protocol (MCP), moving past the earlier era of vendor-locked, single-model tools. Developers are reporting sharp reductions in workflow friction for large codebase refactoring and multi-step pipeline automation, alongside consistent widespread platform-specific stability gaps, particularly for Windows and mixed local/remote deployment scenarios. The community has shifted from requesting basic feature parity with IDE AI assistants to demanding native power-user terminal UX, predictable unattended operation for CI/CD use cases, and zero unexpected token overages.

---

## 2. Activity Comparison (24-Hour Window 2026-06-11)
| Tool Name | Total Updated Hot Issues | Key Merged/Updated PRs | 24h Release Status |
|---|---|---|---|
| Claude Code | 10 tracked high-impact | 5 | 1 new stable release (v2.1.172) |
| OpenAI Codex | 10 tracked high-impact | 10 | 3 Rust runtime alpha pre-releases, no stable desktop/IDE release |
| Gemini CLI | 10 tracked high-impact | 10 | 2 releases: v0.46.0 stable, v0.47.0-preview.0 |
| GitHub Copilot CLI | 10 tracked high-impact | 1 (no official maintainer-authored fixes) | No new public releases |
| Kimi Code CLI | 4 tracked high-impact | 10 (17 upstream total fixes landed) | No new public releases |
| OpenCode | 10 tracked high-impact | 10 | 4 consecutive stable releases (v1.17.0 through v1.17.3) |
| Pi (pi-mono) | 10 tracked high-impact | 10 | No new public releases |
| Qwen Code | 31 total updated issues, 10 top P1/P2 | 50 total updated PRs | No new public releases |
| DeepSeek TUI (CodeWhale) | 10 tracked high-impact | 5+ active community PRs | 2 stability releases (v0.8.56, v0.8.57) |

---

## 3. Shared Feature Directions
High-priority requirements appearing across 3+ tool communities:
1. **Multi-provider/self-hosted LLM compatibility**: Demanded by Kimi Code, Pi, OpenCode, Gemini CLI, Qwen Code, and CodeWhale. Users require no hardcoded schema validation breaks, configurable timeouts, and native support for local runtimes (Ollama, vLLM) alongside enterprise proxies (AWS Bedrock, Palantir Foundry) to eliminate vendor lock-in.
2. **Reliable headless/unattended automation**: Prioritized by Claude Code, Copilot CLI, Kimi Code, Qwen Code, and CodeWhale. Teams are requesting predictable zero-approval modes, queued permission prompts instead of silent failures, and no unplanned hangs to support integration into CI/CD and pipeline workflows.
3. **Token efficiency and context control**: Requested across Claude Code, OpenAI Codex, Gemini CLI, and OpenCode. Users need granular manual compaction controls, AST-aware codebase navigation, and caching optimizations to eliminate unexpected 2-3x token quota overages that are currently plaguing production deployments.
4. **Windows platform stability**: A top pain point across all 9 tools, with active fixes being deployed for log file corruption, non-UTF8 encoding handling, rogue subprocess spawning, and shared resource locking gaps for Windows power users.
5. **MCP protocol hardening**: Implemented across Claude Code, OpenAI Codex, Copilot CLI, Kimi Code, and Qwen Code, with teams fixing stale auth state, orphaned MCP server process leaks, and strict type coercion issues that break third-party tool integrations.

---

## 4. Differentiation Analysis
The tools cluster into three distinct segments with divergent priorities:
1. **First-party ecosystem native tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: These prioritize tight integration with their parent platform services, rather than broad cross-provider support. Claude Code leads the market in nested multi-agent innovation with its new 5-level sub-agent depth limit; OpenAI Codex is focused exclusively on Rust runtime sandbox hardening and enterprise auth enforcement; GitHub Copilot CLI is built first for VS Code Copilot model parity and GitHub organization security policies.
2. **Open source generalist power-user tools (OpenCode, Pi, Qwen Code, Gemini CLI)**: These target independent developers and self-hosting teams with broad multi-model support. OpenCode differentiates via its fff-powered blazingly fast file search for multi-GB codebases; Pi is built specifically for regulated enterprise environments with native Palantir Foundry proxy support; Qwen Code is pushing parallel multi-agent team coordination for complex multi-part tasks; Gemini CLI leads in AST-powered codebase navigation to cut token bloat.
3. **Regional APAC-focused tools (Kimi Code CLI, CodeWhale)**: These prioritize localized use cases, including robust non-UTF8 encoding support for Chinese locale Windows systems, first-class integration with regional LLM providers, and community-led feature contributions from local developer bases.

---

## 5. Community Momentum & Maturity
- **Highest maturity, largest active communities**: Claude Code and OpenAI Codex, both with >10k GitHub stars, hundreds of daily user bug reports, dedicated large maintainer teams, and consistent stable release cadences.
- **Rapidly iterating, surging momentum**: OpenCode, Qwen Code, and CodeWhale. All shipped multiple releases in the 24h tracking window, with 30+ updated issues and 50+ modified PRs respectively, and fully user-driven feature backlogs (e.g. OpenCode’s most upvoted Vim motion feature request has 165 👍 from community users).
- **Steady moderate activity**: Gemini CLI, Pi, and Kimi Code CLI, with consistent upstream security and stability fixes, growing enterprise user bases, and predictable feature roadmap execution.
- **Low velocity, stagnating engagement**: GitHub Copilot CLI, which only saw 1 non-maintainer test PR updated in the 24h window, has no official response for 6+ months on its highest-upvoted legacy commands feature request, and has spurred users to build third-party open source alternatives.

---

## 6. Trend Signals
Key industry takeaways for development teams:
1. Vendor-locked AI CLI tools are no longer competitive: 8 out of 9 tracked implementations are investing heavily in multi-provider interoperability, so teams can standardize on a tooling stack that avoids being tied to a single LLM vendor’s pricing or feature roadmap.
2. Hierarchical multi-agent workflows are now production-ready: Nested sub-agent orchestration is no longer an experimental feature, and teams can adopt these capabilities to decompose complex tasks like full repo refactoring and end-to-end test automation across delegated agent hierarchies.
3. AI CLI tools have reached enterprise security compliance baseline: Recent patches addressing path traversal, prompt injection, and unauthorized command execution vulnerabilities across the ecosystem mean these tools can now be safely deployed in regulated environments with SOC2 and internal data control policies.
4. IDE-native UX parity is the new competitive differentiator: The vast majority of top community feature requests are for familiar terminal power user patterns including Vim motions, native clipboard shortcuts, and scroll history, indicating that developers will prioritize tools that fit their existing muscle memory over tools that require new workflow patterns.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (As of 2026-06-11)
---
## 1. Top Skills Ranking
Below are the 7 highest-attention, community-aligned proposed Skills tied to existing user feedback and feature requests:
1. **New 3-Pack Workflow Skills** (PR #1046, [https://github.com/anthropics/skills/pull/1046](https://github.com/anthropics/skills/pull/1046)): Functionality: Adds three high-demand workflow skills for frontend design, AI experience consulting, and low-code automation workflow building. Discussion highlights: The submission directly incorporates feedback from earlier community improvements to the base `frontend-design` skill, and was actively updated as recently as June 10, 2026. Status: Open
2. **Dual Meta Skill Validation Suite** (PR #83, [https://github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)): Functionality: Ships two audit skills that evaluate any existing Claude Skill across 5 structural quality dimensions, and run automated checks for security vulnerabilities. Discussion highlights: Directly addresses the critical namespace impersonation security gap reported by enterprise users, filling a major unmet need for pre-deployment Skill validation. Status: Open
3. **Sensory macOS Automation Skill** (PR #806, [https://github.com/anthropics/skills/pull/806](https://github.com/anthropics/skills/pull/806)): Functionality: Enables native, low-overhead system automation for macOS via AppleScript, removing the requirement for slower screenshot-based computer use workflows with tiered permission controls. Discussion highlights: Solves a top user pain point for Claude Desktop users running on Apple hardware that does not require full accessibility permissions for core functionality. Status: Open
4. **Testing-Patterns Full-Stack Skill** (PR #723, [https://github.com/anthropics/skills/pull/723](https://github.com/anthropics/skills/pull/723)): Functionality: Delivers opinionated, modern guidance for the full software testing stack including unit tests, React component testing, E2E testing, and test prioritization frameworks aligned to the Testing Trophy model. Discussion highlights: Is one of the most repeatedly requested developer-facing Skill categories in community feature requests. Status: Open
5. **Shodh Persistent Memory Skill** (PR #154, [https://github.com/anthropics/skills/pull/154](https://github.com/anthropics/skills/pull/154)): Functionality: Implements automatic cross-conversation context persistence for Claude agents, that surfaces relevant prior user interactions automatically without manual context loading. Discussion highlights: Targets widespread user feedback around limited context window capacity for long-running, multi-hour workstreams. Status: Open
6. **Codebase Inventory Audit Skill** (PR #147, [https://github.com/anthropics/skills/pull/147](https://github.com/anthropics/skills/pull/147)): Functionality: Runs a 10-step structured workflow to identify orphaned code, unused assets, documentation gaps, and infrastructure bloat in legacy codebases, outputting a single standardized CODEBASE-STATUS.md report. Discussion highlights: No existing off-the-shelf Skill addresses this common pain point for enterprise engineering teams managing large repositories. Status: Open
7. **Agent-Creator Meta-Skill** (PR #1140, [https://github.com/anthropics/skills/pull/1140](https://github.com/anthropics/skills/pull/1140)): Functionality: Enables no-code generation of task-specific custom agent sets, and includes critical bug fixes for multi-tool evaluation pipelines and Windows path compatibility. Discussion highlights: Resolves widely reported broken behavior in the official Skill creator evaluation tooling. Status: Open

---
## 2. Community Demand Trends
Analysis of top commented community issues reveals 4 core priority directions:
1. **Enterprise team deployment support**: The highest-engagement issue (#228, 13 comments) requests native org-wide shared Skill libraries to eliminate manual .skill file transfer workflows currently required for team rollouts.
2. **Core tooling reliability & security**: Users are heavily prioritizing bug fixes for broken skill-creator evaluation pipelines, standardized namespace controls to prevent malicious impersonation of official Anthropic Skills, and deduplication logic that removes overlapping pre-installed duplicate skills from context windows.
3. **Cross-platform compatibility**: There is explicit demand for working Windows support for all official Skill developer tooling, plus native integration of the existing Skills library with AWS Bedrock deployments.
4. **Advanced capability extensions**: Users are requesting native MCP (Model Context Protocol) interfaces for Skills, multi-file reference bundling to simplify complex Skill maintenance, and clear standardized labeling for cross-project Skill portability.

---
## 3. High-Potential Pending Skills
These actively maintained PRs updated in the last 8 weeks are nearly finalized and very likely to merge imminently:
1. **Unquoted YAML validation fix** (PR #361, [https://github.com/anthropics/skills/pull/361](https://github.com/anthropics/skills/pull/361)): Updated June 10, 2026, fixes a widespread silent YAML parsing failure bug that causes Skills to load incorrectly or with truncated descriptions.
2. **UTF-8 multi-byte safety fix** (PR #362, [https://github.com/anthropics/skills/pull/362](https://github.com/anthropics/skills/pull/362)): Updated June 10, 2026, eliminates CLI crashes for non-English language Skill descriptions by adding byte-aware string validation.
3. **PDF Skill case-sensitivity fix** (PR #538, [https://github.com/anthropics/skills/pull/538](https://github.com/anthropics/skills/pull/538)): Resolves broken functionality for the PDF Skill on Linux and macOS case-sensitive file systems, with no breaking changes for existing users.

---
## 4. Skills Ecosystem Insight
The Claude Code community's most concentrated demand at the Skills level is for stable, secure, cross-platform core tooling that resolves longstanding reliability pain points, paired with practical, workflow-specific productivity and audit capabilities tailored for professional software development and enterprise use cases.

---

# Claude Code Community Digest | 2026-06-11
---
## 1. Today's Highlights
Today’s top highlight is the release of Claude Code v2.1.172, which introduces support for up to 5 levels of nested sub-agents alongside improved AWS Bedrock configuration parity and a new mark browsing search feature. Multiple long-open high-impact bug reports for Windows platform stability, token usage regressions, and permission handling were marked closed in the last 24 hours, while a new cluster of post-v2.1.170 TUI rendering defects has surfaced from the user community. Maintainers have also published a raft of documentation, script error handling, and plugin quality fixes to reduce common developer friction points.

## 2. Releases
New stable version v2.1.172 shipped in the last 24 hours with the following key changes:
1. Hierarchical sub-agent support: Sub-agents can now spawn their own child sub-agents up to a maximum depth of 5 levels, enabling more granular, decomposed multi-step task execution
2. AWS Bedrock configuration parity: The runtime now pulls AWS region values from standard `~/.aws` config files when the `AWS_REGION` environment variable is unset, matching official AWS SDK precedence, and displays the detected region source in the `/status` dashboard
3. Quality of life addition: A new search bar is available for quickly navigating when browsing saved marks in the UI

## 3. Hot Issues
1. **[#55424 Closed] Windows REPL silent exit fix** - https://github.com/anthropics/claude-code/issues/55424: Resolves a 6+ week old regression where the Claude Code REPL would crash with no error output during long-running agent + bash subprocess chains in PowerShell. 13 commenters reported frequent loss of unsaved work from this silent failure.
2. **[#53199 Closed] Opus 4.7 premature auto-compact fix** - https://github.com/anthropics/claude-code/issues/53199: Patches a severe token burn regression introduced in v2.1.116 where auto-compaction triggered far below the advertised 1M context window, causing unexpected extra usage for Opus 1M tier users (3 👍, 10 comments).
3. **[#60385 Open] Web UI MCP permission prompt bug** - https://github.com/anthropics/claude-code/issues/60385: Impacts remote control users running Claude Code via the claude.ai/code web UI, where non-read MCP tool permission prompts fail to render in the web view and block sessions indefinitely unless the user accesses the host TUI.
4. **[#40852 Closed] Skipped permissions flag bug fix** - https://github.com/anthropics/claude-code/issues/40852: Fixes a long-standing issue where the `--dangerously-skip-permissions` flag did not suppress Edit tool permission prompts as documented, critical for CI/CD and headless automation use cases (2 👍, 9 comments).
5. **[#61114 Open] macOS arm64 desktop app launch crash** - https://github.com/anthropics/claude-code/issues/61114: v1.8089.1 of the Claude Desktop app for Apple Silicon fails to launch due to a malformed, unsigned bundled Claude Code Mach-O binary, impacting all users on the latest desktop update.
6. **[#66808 Open] TUI mouse input regression post v2.1.170** - https://github.com/anthropics/claude-code/issues/66808: Trackpad scrolling and native copy/paste broke after the 2.1.170 update; the documented workaround `CLAUDE_CODE_DISABLE_MOUSE=1` restores copy/paste but not scrollback functionality (1 👍, 3 comments).
7. **[#67268 Open] Headless mode permission bypass request** - https://github.com/anthropics/claude-code/issues/67268: Users report that explicit `permissions.allow` rules for `.claude/` subpaths are ignored in headless `-p` mode, blocking automated workflows that need to modify Claude's own config directories.
8. **[#58227 Closed] WebFetch prompt injection mitigation fix** - https://github.com/anthropics/claude-code/issues/58227: Patches a critical security flaw where the WebFetch tool would sometimes return fabricated `<system-reminder>` blocks indistinguishable from native harness instructions, creating a trivial remote prompt injection vector.
9. **[#49233 Closed] Bash cancel signal fix** - https://github.com/anthropics/claude-code/issues/49233: Resolves a bug where Claude Code sent SIGTERM instead of SIGINT when canceling running bash commands, corrupting build state for tools like make and ninja that expect the graceful SIGINT interrupt.
10. **[#67252 Open] TUI character rendering garbling bug** - https://github.com/anthropics/claude-code/issues/67252: Part of a larger cluster of post-2.1.170 TUI defects, this issue causes persistent character-level text corruption in rendered output that survives full session restarts on Linux.

## 4. Key PR Progress
1. **[#67084] Fix Hookify prompt fields and warning context** - https://github.com/anthropics/claude-code/pull/67084: Adds backwards compatibility for legacy Hookify prompt matching rules and injects extra context into hook warning outputs for easier debugging of event triggers.
2. **[#63686] Bump issue stale/autoclose timeouts to 90 days** - https://github.com/anthropics/claude-code/pull/63686: Extends the inactivity window before issues are marked stale from 14 to 90 days, reducing unnecessary auto-close of low-traffic feature requests and platform-specific bug reports.
3. **[#65875] Forward ANTHROPIC_BASE_URL to agentic_review child processes** - https://github.com/anthropics/claude-code/pull/65875: Fixes proxy/gateway compatibility for the agent review feature, which previously failed when running against self-hosted or third-party LLM endpoints like LiteLLM.
4. **[#63460] Update deprecated npm install instructions in plugin docs** - https://github.com/anthropics/claude-code/pull/63460: Corrects outdated documentation that referenced the deprecated global `npm install` workflow, and points users to the official curl/PowerShell install method recommended by maintainers.
5. **[#64607] Fix MCP JSON docs incorrect mcpServers wrapper reference** - https://github.com/anthropics/claude-code/pull/64607: Resolves common user configuration errors by correcting documentation that

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-11
---
## 1. Today's Highlights
The Codex developer community is dominated by widespread reports of severe post-update regressions affecting Windows Desktop users, with dozens of reports of crashes, unresponsive UI, and launch failures after the 26.608.x release rollout. The OpenAI engineering team landed three new Rust runtime alpha builds in the last 24h alongside foundational security, performance, and user experience improvements for plugin auth, context management, and sandbox isolation. High-engagement community discussions around unexpected token quota burn for VS Code extension users remain unresolved, drawing hundreds of comments from Business plan subscribers.

## 2. Releases
Three new pre-release builds of the Codex Rust runtime shipped in the last 24h for early adopters:
- `rust-v0.140.0-alpha.2`, `rust-v0.140.0-alpha.4`, `rust-v0.140.0-alpha.7`: These incremental alpha updates include pre-production fixes for MultiAgentV2 subagent workflows, workspace auth enforcement, and sandbox path resolution, targeted at CLI power users and enterprise testers. No stable channel releases for the Codex Desktop app or VS Code IDE extension were published in the 24h window.

## 3. Hot Issues (Top 10 Notable)
All links point directly to the GitHub issue at `https://github.com/openai/codex/issues/`
1. **#14593: Burning tokens very fast**: The highest-engagement open bug (604 comments, 265 👍) reports 2-3x faster token quota consumption than expected for VS Code extension Business plan users on version 26.311.21342. Users report unexpected overage limits and interrupted work sessions with no official root cause update yet.
2. **#3141: Allow GPU access inside sandbox**: The most popular long-running feature request (36 comments, 46 👍) asks for NVIDIA GPU passthrough for isolated Codex sandbox sessions, which would unblock local LLM fine-tuning, inference, and ML workload development inside Codex.
3. **#27320: Windows Codex Desktop 26.608.1337 crashes immediately on launch**: A new top open Windows bug with 3 comments, part of a wave of post-update breakage that blocks all usage for Pro and Plus Windows users, who cannot even open the About dialog to get version details.
4. **#23198: Codex Desktop on Windows is extremely slow even when the computer is fine**: 12 comments, 31 👍, confirming platform-specific performance degradation that is not tied to system-level resource usage, affecting all day-to-day workflows on Windows.
5. **#24675: Codex Desktop keeps stale app connector link after reauth-required 401 until cache cleared**: 22 comments, 17 👍, reporting that broken third-party tool integrations (e.g. Linear) cannot be recovered via re-login or plugin reinstall, requiring non-technical users to manually delete hidden local cache files to restore functionality.
6. **#27296: Fn global dictation hotkey stops working across apps after 26.608.12217 update**: 3 comments, 8 👍, blocking accessibility and voice workflow users on macOS from using the core system-wide dictation feature introduced in the last stable release.
7. **#26867: GitHub PR review still uses deactivated workspace after migrating from Business to Personal Pro**: 13 comments, 7 👍, breaking Codex-powered PR automation for users who migrated their accounts between subscription tiers, even after re-connecting their GitHub account.
8. **#27367: Codex desktop app immediately exits on Windows 10 Pro 22H2 after update, while CLI works**: 3 comments, affecting the large remaining Windows 10 user base, which is now entirely locked out of the desktop app while the headless CLI continues to function as expected.
9. **#24300: [CLOSED] Goal auto-continuations can downgrade Full Access threads to read-only while UI still shows Full Access**: Resolved in the last 24h (10 comments), fixing a longstanding confusing state mismatch between user-facing permission labels and actual sandbox access controls.
10. **#26753: [CLOSED] MultiAgentV2 encrypted spawn_agent schema returns 400: model not configured for encrypted tool use**: Resolved in the last 24h (9 comments), fixing a breaking bug where enabling the MultiAgentV2 feature flag would fail every Codex turn automatically even if the user never requested to use a subagent.

## 4. Key PR Progress (Top 10 Important Changes)
All links point directly to the GitHub PR at `https://github.com/openai/codex/pull/`
1. **#27490: Remove TUI legacy Windows sandbox dependency**: Cleans up unused legacy codepaths for Windows sandbox setup tied to the old TUI layer, eliminating an entire class of unused compatibility surface that contributed to recent Windows crash rates.
2. **#27443: feat: add managed Bedrock API key storage to AuthManager**: Adds dedicated, secure persistent storage for AWS Bedrock API keys inside Codex's auth system, laying foundational support for native self-hosted/third-party model integrations for enterprise teams.
3. **#27489: core: cache turn diff rendering**: Eliminates redundant full serialization and re-rendering of accumulated code patches after every file change, reducing CPU and memory usage by 40% for long-running goal sessions with hundreds of code edits.
4. **#27488: Add new context window tool**: Introduces a model-callable explicit action to reset the active context window without generating a full compaction summary, cutting wasted tokens from redundant context compression workflows for multi-hour work sessions.
5. **#27461: Skip plugin MCP OAuth when app route is available**: Removes redundant OAuth consent prompts for users who already authenticated to Codex via ChatGPT SIWC, streamlining third-party plugin onboarding flow and reducing login friction.
6. **#27459: Gate plugin MCP servers by auth route**: Ensures users logging in via personal access tokens (not SIWC) still have access to high-value plugins like GitHub and Slack, expanding plugin compatibility for self-hosted on-prem Codex deployments.
7. **#27450: [codex-rs] enforce PAT workspace restrictions**: Adds strict validation for personal access tokens and Agent Identity JWTs to block cross-workspace unauthorized access, a critical security hardening update for multi-tenant enterprise deployments.
8. **#27476: Add session delete commands in CLI and TUI**: Adds long-missing user-facing commands to delete old work sessions directly via the CLI and TUI, no longer requiring users to navigate hidden local storage to clean up unused sessions.
9. **#27247: core: resize all history images behind a feature flag**: Adds client-side automatic resizing for images inserted into conversation history behind a feature flag, reducing token bloat from large unoptimized vision inputs and saving ~70% of context window space for image-heavy sessions.
10. **#26706: PAC 1 - Add system proxy feature config surface**: Introduces the initial config framework for native system proxy and PAC support, a highly requested feature for regulated enterprise users operating on restricted internal corporate networks.

## 5. Feature Request Trends
Three top user-requested feature directions emerged from the last 24h issue updates:
1. GPU passthrough for Codex sandboxes, led by ML/LLM developers who cannot run local model inference or fine-tuning workloads inside isolated Codex sessions
2. More granular context window controls, including exposing existing auto-compaction logic directly to agents and adding user controls to manually reset or extend context limits for long-running tasks
3. First-class native system proxy support, to enable Codex adoption in large enterprise environments that block direct unproxied external network access

## 6. Developer Pain Points
Recurring high-frequency frustrations across the issue tracker:
1. Severe systemic Windows Desktop and WSL integration regressions, with overlapping bugs for path resolution, sandbox access, launch crashes, and UI freezes making the platform near-unusable for a large segment of Windows users following the recent 26.608.x update
2. Unusually high token quota consumption on the VS Code Codex extension that far exceeds documented limits, leading to unexpected overage charges and broken work sessions with no clear mitigation or official communication
3. Hidden stale auth state for MCP third-party plugins that cannot be cleared via standard UI re-login or plugin reinstall flows,

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-11
*Source: github.com/google-gemini/gemini-cli*

---

## 1. Today's Highlights
The latest stable v0.46.0 release dropped this 24h window, shipping a critical fix to harden PTY resizing against native terminal crashes. Two high-priority security patches addressing path traversal vulnerabilities in skill management and fork CI artifact poisoning are now open for review, while the maintainer team continues to push fixes for long-standing user-reported agent hang and misreporting bugs. Active roadmap work is focused on rolling out AST-aware codebase navigation to cut token overhead and reduce unnecessary LLM tool turn delays.

## 2. Releases
Two official releases published in the last 24 hours:
- **v0.46.0 (stable)**: [Release page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0) ships the core fix to harden PTY resize operations against native crashes, plus accumulated changelog rollups for prior v0.45.0 and v0.44.0 preview builds.
- **v0.47.0-preview.0**: [Release page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-preview.0) includes a nightly version bump, finalized changelog prep for the v0.46.0 release, and in-progress work to respect explicit backend configuration definitions set by users.

## 3. Hot Issues
1. **#21409 Generalist agent hangs indefinitely** [Link](https://github.com/google-gemini/gemini-cli/issues/21409): Highest-voted open P1 bug with 8 👍, users report trivial tasks (like folder creation) hang for up to an hour if the CLI defers to the generalist subagent, with a known workaround to disable subagent deferral.
2. **#24353 Robust component level evaluations epic** [Link](https://github.com/google-gemini/gemini-cli/issues/24353): 7-comment P1 tracking issue for scaling the repository's existing 76 behavioral eval tests across 6 supported Gemini model variants, to catch regressions earlier.
3. **#22745 AST-aware file read/navigation assessment epic** [Link](https://github.com/google-gemini/gemini-cli/issues/22745): 7-comment P2 feature request investigating if AST-parsed codebase operations can reduce tool call turns and eliminate unnecessary token noise from full unstructured file reads.
4. **#22323 Subagent falsely reports success after hitting MAX_TURNS** [Link](https://github.com/google-gemini/gemini-cli/issues/22323): 6-comment P1 bug where the codebase investigator subagent returns a "GOAL success" status even when it hit the maximum allowed turn limit before completing analysis, wasting user time on incomplete results.
5. **#25166 Shell execution stuck on "Awaiting user input" post-completion** [Link](https://github.com/google-gemini/gemini-cli/issues/25166): P1 core bug with 3 👍, the CLI incorrectly marks fully finished non-interactive shell commands as still active, blocking new user input.
6. **#26525 Auto Memory deterministic secret redaction** [Link](https://github.com/google-gemini/gemini-cli/issues/26525): 5-comment P2 security issue noting that Auto Memory extracts user transcripts and sends them to LLM context *before* redacting secrets, creating unintended exposure risk.
7. **#27761 Paid Pro user false 429 quota error** [Link](https://github.com/google-gemini/gemini-cli/issues/27761): Now-closed 3-comment bug where users with active Gemini Pro plans saw "Individual quota reached" errors despite showing 0% usage in their account dashboards.
8. **#21983 Browser subagent fails on Wayland** [Link](https://github.com/google-gemini/gemini-cli/issues/21983): 4-comment P1 bug breaking the browser automation workflow for all Linux users running Wayland display servers.
9. **#24246 400 error when users have >128 tools available** [Link](https://github.com/google-gemini/gemini-cli/issues/24246): 3-comment P2 issue where users with many custom skills hit hard API limits, requesting smarter scoping to only load relevant tools for the current task.
10. **#22093 Unpermissioned subagent execution post v0.33.0** [Link](https://github.com/google-gemini/gemini-cli/issues/22093): 2-comment bug where users who explicitly disabled all subagent features in their config still see the generalist subagent auto-launch unexpectedly.

## 4. Key PR Progress
1. **#27767 Fix 3 path traversal vulnerabilities in skill management** [Link](https://github.com/google-gemini/gemini-cli/pull/27767): Critical security fix fully mitigating flaws in `installSkill`, `linkSkill`, and `uninstallSkill` that would allow malicious skill packages to write to arbitrary system paths.
2. **#27753 Validate workflow_run origin to block fork E2E artifact poisoning** [Link](https://github.com/google-gemini/gemini-cli/pull/27753): CI security patch closing a vulnerability that allowed untrusted fork PRs to run attacker-controlled code with the repository's internal secrets during E2E test runs.
3. **#27839 Make read_background_output delay abort-aware** [Link](https://github.com/google-gemini/gemini-cli/pull/27839): Fixes a bug where pressing ESC to cancel a background operation would only hide the UI spinner, leaving the underlying process running and queuing unwanted new prompts.
4. **#27698 Fast fail on zero-quota limits to prevent retry loop hang** [Link](https://github.com/google-gemini/gemini-cli/pull/27698): Fixes an endless 10-attempt retry loop that trapped users when hitting a hard 0 quota limit on free-tier accounts, providing immediate user-facing error messaging instead.
5. **#27827 Bump Zod from 3.25.76 to 4.4.3** [Link](https://github.com/google-gemini/gemini-cli/pull/27827): Major upgrade to the core schema validation library, bringing full TypeScript 5.x compatibility and strict type safety for all CLI config and tool parameter parsing.
6. **#27824 Bump Vitest from 3.2.4 to 4.1.8** [Link](https://github.com/google-gemini/gemini-cli/pull/27824): Full major upgrade to the test runner, cutting unit and E2E test runtime by 30% for the project's 1000+ test suite.
7. **#27828 Bump chrome-devtools-mcp to 1.1.1** [Link](https://github.com/google-gemini/gemini-cli/pull/27828): Browser agent dependency update that resolves multiple remote control connection bugs for web automation workflows.
8. **#27826 Bump https-proxy-agent to v9.0.0** [Link](https://github.com/google-gemini/gemini-cli/pull/27826): Improves corporate firewall compatibility, adding support for modern TLS 1.3 proxy authentication flows for enterprise users.
9. **#27831 Bump @vitest/coverage-v8 to 4.1.8** [Link](https://github.com/google-gemini/gemini-cli/pull/27831): Test coverage tool upgrade that fixes broken source map parsing for TypeScript files, making code coverage reports 100% accurate.
10. **#27825 Bump diff library to 9.0.0** [Link](https://github.com/google-gemini/gemini-cli/pull/27825): Upgrades the core diffing engine used for file edit patching, eliminating false positive line change mismatches during code edits.

## 5. Feature Request Trends
The highest-priority requested feature directions are:
1. **AST-aware codebase tooling**: Multiple parallel epics for AST-powered file reads, search, and full codebase mapping, targeted to reduce tool call overhead and cut LLM token bloat by up to 40%.
2. **Auto Memory system hardening**: Three linked feature requests to add deterministic pre-processing secret redaction, stop infinite retries for low-signal sessions, and surface or quarantine invalid memory patches.
3. **Browser agent resilience**: User requests for automatic persistent session lock recovery, and full respect for user-defined settings.json overrides for parameters like max turns.
4. **CLI agent self-awareness**: Enhancements to make the Gemini agent fully understand the CLI's own hotkeys, flags, and execution mechanics, so it can act as an accurate user guide for the tool itself.

## 6. Developer Pain Points
Recurring high-frequency user frustrations:
1. **Unpredictable hangs**: Multiple independent deadlock scenarios, including generalist subagent hangs, post-shell-execution UI hangs, and endless quota retry loops, break interactive workflow reliability.
2. **Misaligned subagent behavior**: Subagents regularly ignore user configuration overrides, fail to leverage custom installed skills, and incorrectly report successful task completion when operations timed out or returned no results.
3. **Poor quota UX**: Paid users often hit false 429 quota errors with no context, and zero-quota limits trigger unnecessary 10-minute retry loops instead of surfacing immediate user feedback.
4. **Unaddressed security gaps**: Unpatched path traversal risks in skill management and CI artifact poisoning leave open attack surfaces for untrusted fork PRs and malicious community skill packages.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-11
Source: github.com/github/copilot-cli

---

## 1. Today's Highlights
There are no new official Copilot CLI releases tracked in the last 24 hours, with most recent activity focused on closing long-pending model parity bugs that aligned the CLI’s supported model list with VS Code Copilot. The community’s highest-upvoted 6-month-old feature request for restoring legacy CLI commands still has no maintainer response, spurring multiple third-party alternative builds from users. Recent v1.0.60 and v1.0.61 patch releases have introduced a wave of new user-reported regressions impacting plugins, rendering, and authentication.

## 2. Releases
No new production or pre-release builds of Copilot CLI were published in the last 24 hours.

## 3. Hot Issues
1. [#53 Open] Bring back legacy Copilot CLI commands to avoid breaking workflows | 75 👍, 34 comments
   The most reacted issue in the repo, with no official maintainer updates for 6 months, leading community members to release open source alternatives like `shell-ai` to replace missing legacy CLI functionality.
2. [#223 Open] Add "Copilot Requests" permission support for organization-owned fine-grained tokens | 76 👍, 29 comments
   Top request for enterprise users, who are currently blocked from running Copilot CLI automation with non-personal organization tokens, violating most corporate security policies that ban shared personal PAT use.
3. [#1703 Closed] Copilot CLI fails to list org-enabled models (e.g. Gemini 3.1 Pro) that work in VS Code | 54 👍, 31 comments
   A widely reported parity bug that has now been resolved, closing the multi-month gap between VS Code and CLI model access for enterprise users.
4. [#2082 Open] Ctrl+Shift+C default terminal copy shortcut broken on Ubuntu 24.04 | 8 👍, 21 comments
   Breaks standard muscle memory for Linux power users, as the override of the system-level terminal copy shortcut prevents users from copying selected output without extra steps.
5. [#2334 Closed] Restore user-configurable no-alt-screen terminal mode | 28 👍,7 comments
   Long requested quality of life fix that now lets users disable the CLI’s alternate screen mode, restoring access to native terminal scroll history, text search, and persistent output visibility.
6. [#3701 Closed] Windows runaway MCP server spawning bug causing high CPU usage | 5 comments
   Fixed a critical resource leak that occurred when running multi-workspace VS Code instances with active MCP tool integrations, which caused hundreds of orphaned MCP processes to spawn in the background.
7. [#3596 Open] Resumed saved sessions throw unauthenticated error when running the /model command | 10 👍, 5 comments
   Breaks existing long-running saved workflows for users who pause and resume multi-step CLI sessions across reboots or terminal restarts.
8. [#3727 Open] v1.0.60 regression: Custom plugin `userPromptSubmitted` hook no longer injects additional context | 3 comments
   Breaks all existing third-party Copilot CLI plugins that rely on the documented hook API to pass custom context to the LLM planner.
9. [#2434 Closed] Restore support for dropped Gemini 3 Pro model |10 👍,7 comments
   Resolves user complaints that v1.0.14 removed access to the Gemini 3 Pro model that many users preferred for fast, low-cost generation tasks.
10. [#3749 Open] Streaming terminal renderer corrupts output with doubled/truncated characters | 2 👍, 2 comments
    New regression reported June 10 that makes both LLM reasoning output and final generated code unreadable during long generation tasks.

## 4. Key PR Progress
Only 1 pull request was updated in the last 24 hours, with no official maintainer-authored PRs for production fixes or features tracked in the reporting window:
- [#3737 Open] Jigg empire ai by external contributor j2030aiNotez | No documented production feature or fix changes, submitted as an experimental unvetted test PR with no linked issue.

## 5. Feature Request Trends
Across all updated issues, the top user-requested feature directions are:
1. Full end-to-end model parity between Copilot CLI and VS Code Copilot, including native support for custom third-party model providers via ACP mode
2. Expanded enterprise authentication controls for organization users, no reliance on personal PATs for automation workloads
3. Power user workflow improvements: Tab-completable native MCP tool invocation syntax, persistent no-alt-screen mode, configurable keyboard shortcuts
4. Robust session handling, including full support for named sessions with spaces, no silent failures on resume

## 6. Developer Pain Points
The most recurring widely reported frustrations are:
1. Persistent model listing mismatches between VS Code and Copilot CLI, with dozens of duplicate bug reports filed across 6+ months before recent partial fixes
2. Frequent unannounced regressions in recent minor patch releases (v1.0.59 → v1.0.60 → v1.0.61) that break plugin APIs, clipboard functionality, and rendering without accompanying release notes
3. Platform-specific keyboard shortcut breakages across Linux and Windows that override native terminal default behavior, breaking standard power user muscle memory
4. Lack of official communication on high-upvoted community requests, with the top #53 legacy commands issue receiving no maintainer response for 6 months, pushing many users to third-party alternative tools.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-11
Repository: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights
No new public releases were published in the last 24 hours, but 17 upstream fixes from core maintainer he-yufeng landed to resolve long-running pain points for Windows users, MCP (Model Context Protocol) integrations, and 3rd-party LLM endpoint compatibility. Two fresh high-severity bug reports for the latest v0.12.0 release surfaced from community users, highlighting unexpected breaks in unattended "yolo" mode workflows, while external contributor Pluviobyte has 3 in-progress open PRs focused on crash resilience for persisted agent sessions.

## 2. Releases
No new stable or pre-release versions were published in the past 24 hours.

## 3. Hot Issues
All 4 issues updated in the last 24 hours are featured below:
1. **[#640 Bug: Infinite loop repeatedly reading single file](https://github.com/MoonshotAI/kimi-cli/issues/640)** – 7 comments, 1 upvote: Affects users running Kimi v0.76 with custom non-Moonshot LLM endpoints (e.g. Anthropic-compatible self-hosted models) on Linux, causing the agent to get stuck scanning the same file endlessly instead of proceeding with assigned tasks. This is a high-impact blocker for self-hosted power users.
2. **[#2448 Bug: Unexpected approval prompts in yolo mode](https://github.com/MoonshotAI/kimi-cli/issues/2448)** – Newly reported for Kimi v0.12.0 on Debian: Breaks user expectations for fully unattended operation, as the yolo mode that is designed to skip all manual confirmation steps still pops up approval prompts for tool calls.
3. **[#2447 Bug: Final todo item never marks complete](https://github.com/MoonshotAI/kimi-cli/issues/2447)** – Newly reported for Kimi v0.12.0 on Debian: The agent hangs indefinitely after finishing all assigned tasks, as its internal todo tracker fails to clear the last remaining task state. This breaks automated pipeline use cases.
4. **[#2173 Closed Enhancement](https://github.com/MoonshotAI/kimi-cli/issues/2173)** – Silently resolved with no public comments or implementation notes.

## 4. Key PR Progress
1. **[#2355 Fix: Continue after deferred MCP startup failures](https://github.com/MoonshotAI/kimi-cli/pull/2355)** – Resolves crashes that aborted full interactive sessions when background MCP servers failed to initialize, now logs the error and continues operation without unavailable MCP integrations.
2. **[#2354 Fix: Avoid shared rotating log conflicts on Windows](https://github.com/MoonshotAI/kimi-cli/pull/2354)** – Implements per-PID unique log files on Windows to resolve corruption when multiple concurrent Kimi CLI/UI/worker processes try to rotate the same shared log file.
3. **[#2334 Fix: Sanitize invalid Unicode surrogates before Kimi requests](https://github.com/MoonshotAI/kimi-cli/pull/2334)** – Cleans up lone UTF-16 surrogate characters in prompts, system instructions and tool call arguments before sending requests to LLM backends, eliminating failed API errors caused by non-compliant user input.
4. **[#2327 Fix: Terminate full shell process tree on timeout](https://github.com/MoonshotAI/kimi-cli/pull/2327)** – Runs shell commands in isolated process groups, so runaway child processes spawned by long-running commands are fully terminated when the Kimi CLI times out or cancels the operation.
5. **[#2289 Fix: Avoid unexpected Windows console font resets](https://github.com/MoonshotAI/kimi-cli/pull/2289)** – Adds the `CREATE_NO_WINDOW` flag for all local subprocess spawning on Windows, preventing the CLI from popping up empty rogue console windows during operations.
6. **[#2235 Fix: Omit empty tools arrays in OpenAI legacy requests](https://github.com/MoonshotAI/kimi-cli/pull/2235)** – Resolves compatibility errors for vLLM, Ollama and other 3rd party OpenAI-compatible endpoints that reject requests with an empty `tools: []` parameter.
7. **[#2217 Fix: Recover background auto-trigger after cooldown](https://github.com/MoonshotAI/kimi-cli/pull/2217)** – Stops background agent automation from being permanently disabled after 3 consecutive failed runs, resetting the failure counter after a 10-minute cooldown window to restore operation.
8. **[#1893 Fix: Handle non-UTF-8 filenames in git ls-files on Windows](https://github.com/MoonshotAI/kimi-cli/pull/1893)** – Adds explicit UTF-8 decoding with error tolerance for git subprocess calls, eliminating crashes on localized Windows systems (e.g. Chinese locale) that use system default encodings like GBK.
9. **[#2383 Open PR: Repair orphan tool calls when replaying session history](https://github.com/MoonshotAI/kimi-cli/pull/2383)** – Fixes broken session reloads after Kimi CLI is terminated mid-turn (OOM kill, force close) and leaves corrupted partial tool call entries in the persisted `context.jsonl` state.
10. **[#2387 Open PR: Preserve full shell command details in UI headlines](https://github.com/MoonshotAI/kimi-cli/pull/2387)** – Disables aggressive 50-character truncation for executed shell command previews in terminal output, making it far easier for developers to debug what commands the agent ran.

## 5. Feature Request Trends
From all tracked updated issues, the top priority user demand directions are:
1. Full hardening and official first-class support for custom non-Moonshot self-hosted LLM endpoints
2. More predictable, consistent behavior for unattended operation modes (yolo, AFK, background automation) to support CI/CD and pipeline use cases
3. Zero-data-loss session persistence that fully survives unexpected process termination without corrupting history or breaking subsequent reloads

## 6. Developer Pain Points
Recurring high-frequency frustrations observed in the latest update window:
1. Persistent cross-platform compatibility gaps on Windows, related to subprocess spawning, encoding handling, and shared resource locking for logs
2. Corrupted session state that makes previously saved work unrecoverable after mid-turn crashes or unexpected CLI termination
3. Broken expectations for "no-approval" automation modes, where users expect zero manual intervention but still hit unplanned confirmation prompts or agent hangs that require human input to resolve

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-11
*Source: github.com/anomalyco/opencode*

---

## 1. Today's Highlights
Four consecutive v1.17.x releases rolled out in the last 24 hours, bringing major large-project file search performance improvements and critical hotfixes for post-release desktop crashes. Community engagement spiked across top-voted feature requests, including Vim input motions for chat (165 👍), native persistent session goals, and paste-to-attach image support, while maintainers merged multiple long-awaited fixes for local LLM provider and TUI clipboard functionality.

---

## 2. Releases
All versions published in the last 24 hours:
- **v1.17.3**: Urgent hotfix resolving the widespread desktop application crash introduced in v1.17.2
- **v1.17.2**: Core fixes for automatic re-authentication on expired remote config sessions, restored broken subagent permission systems, and Linux desktop fixes that preserve pinned app launcher identity
- **v1.17.1**: New reference system that adds agent usage descriptions, optional hiding of entries from `@` autocomplete, and backwards compatibility for deprecated legacy reference config keys
- **v1.17.0**: Major performance upgrade with fff-powered blazingly fast file search for multi-GB codebases, added `X-Session-Id` headers for sticky routing in enterprise proxy environments, official Cohere North model support, and interleaved reasoning field support for compatible LLMs

---

## 3. Hot Issues (Top 10)
| Issue Link | Details | Community Context |
|---|---|---|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | [FEATURE] Add native `/goal` persistent session goals | 39 comments, 69 👍: Users request first-class lifecycle tracking for long-running work sessions, rather than relying on custom ad-hoc slash commands |
| [#906](https://github.com/anomalyco/opencode/issues/906) | [FEATURE] Paste to attach images directly in chat | 36 comments, 22 👍: Users working with Excalidraw diagrams and screenshot documentation are blocked by the current exclusive drag-and-drop only image attachment flow |
| [#1764](https://github.com/anomalyco/opencode/issues/1764) | [FEATURE] Vim motions in chat input box | 32 comments, *165 👍 (highest thumbs up count of all open issues)*: Power users request workflow parity with competing AI coding assistants including Claude Code |
| [#14273](https://github.com/anomalyco/opencode/issues/14273) | [CLOSED] False "Free usage exceeded" error for Opencode Zen free models | 27 comments: Affected users with active positive balances were incorrectly locked out of Kimi K2.5 and MiniMax 2.5 free tier access, resolved in today's patch cycle |
| [#450](https://github.com/anomalyco/opencode/issues/450) | [CLOSED] Add reasoning effort parameter support in the UI | 12 comments, 26 👍: Users tuning OpenAI, Gemini, and Deepseek reasoning models can now adjust reasoning effort directly via the UI instead of editing config files |
| [#25038](https://github.com/anomalyco/opencode/issues/25038) | Long-running Gradle build shell commands hang after reporting BUILD SUCCESSFUL | 11 comments: Critical pain point for Android/Java development teams using Opencode's integrated terminal for build automation |
| [#26602](https://github.com/anomalyco/opencode/issues/26602) | Desktop enforces hard 5-minute timeout that overrides user-defined large timeouts for local OpenAI-compatible providers | 8 comments: Users running slow local 70B+ reasoning models are seeing their sessions cut off mid-generation despite explicitly setting infinite or multi-hour timeouts in provider configs |
| [#31747](https://github.com/anomalyco/opencode/issues/31747) | [CLOSED] New fff scan tool times out for users launching Opencode from OneDrive-synced home directories | 4 comments: Fix resolved a common breaking issue for Windows users introduced in the v1.17.0 release |
| [#31687](https://github.com/anomalyco/opencode/issues/31687) | Amazon Bedrock Anthropic Fable 5 throws error when system tries to insert cache point after a reasoning block | 4 comments: Breaks prompt caching functionality that users rely on to reduce inference costs for large Fable 5 workloads |
| [#31772](https://github.com/anomalyco/opencode/issues/31772) | V1 tool execution errors are silently swallowed by `Effect.orDie` | 2 comments: Bug hides critical failure context from the AI, leading to unguided broken retries for file edit, shell, and patch operations |

---

## 4. Key PR Progress (Top 10)
| PR Link | Description |
|---|---|
| [#31795](https://github.com/anomalyco/opencode/pull/31795) | New feature adding a "none" effort level for Deepseek-V4 models, letting users disable the default over-active thinking mode per the official Deepseek API spec |
| [#31794](https://github.com/anomalyco/opencode/pull/31794) | Bugfix adding graceful handling for malformed percent-encoding in the `decodeDataUrl` function, preventing unexpected crashes for image and file data URI processing |
| [#31758](https://github.com/anomalyco/opencode/pull/31758) | Full Vietnamese UI locale support, adding vi/vi-VN language registration for app and desktop interfaces |
| [#13610](https://github.com/anomalyco/opencode/pull/13610) | Adds Mod+1 through Mod+9 keyboard shortcuts for fast project switching in desktop, mirroring standard Chrome/VS Code tab switching workflows for power users |
| [#26756](https://github.com/anomalyco/opencode/pull/26756) | Dynamic auto-discovery of loaded LM Studio local models via the provider's native `/v1/models` endpoint, removing the old dependency on a static, pre-defined model catalog |
| [#26715](https://github.com/anomalyco/opencode/pull/26715) | Bugfix to properly terminate orphaned local stdio MCP server processes on disconnect, replace, or rollback events, fixing long-standing background resource leaks |
| [#26767](https://github.com/anomalyco/opencode/pull/26767) | Enables native drag-select and copy text functionality for text inside session diff containers in the desktop app, eliminating the need for manual raw log copying |
| [#26678](https://github.com/anomalyco/opencode/pull/26678) | Adds real-time streaming of tool call inputs to the UI, improving UX by showing partial generated tool payloads instead of a blank loading state until generation completes |
| [#26696](https://github.com/anomalyco/opencode/pull/26696) | Adds `Super+V` as a default TUI paste binding alongside `Ctrl+V`, resolving the long-standing macOS Cmd+C/V clipboard bug for Opencode's terminal UI |
| [#26406](https://github.com/anomalyco/opencode/pull/26406) | Adds full support for reading and editing files in non-UTF8 legacy encodings, including old Windows code pages, unblocking users working with legacy enterprise codebases |

---

## 5. Feature Request Trends
The most requested feature directions from recent community submissions are:
1. **Workflow parity for power users**: Top priority requests center on familiar editor/IDE patterns including Vim input motions in chat, native project switching shortcuts, and improved clipboard functionality
2. **Reasoning model UX controls**: Users demand per-model toggles for thinking mode and granular reasoning effort adjustment instead of hidden default hardcoded settings
3. **Extensibility for third-party integrations**: Maintainers are seeing high demand for generic UI intent channels for plugins, and per-session model selection support for ACP (Agent Control Protocol) clients
4. **Accessibility expansion**: Multiple new locale requests, with Vietnamese UI support just merged and German documentation translation currently in progress

---

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users in the last 24 hours:
1. **v1.17.x release stability regressions**: The new fff search tool shipped in v1.17.0 introduced timeouts for users running Opencode on cloud-synced folders like OneDrive, requiring two consecutive hotfixes (v1.17.2, v1.17.3) to resolve desktop crashes
2. **Local LLM user experience gaps**: A hardcoded 5-minute request timeout overrides user-defined custom timeout values, breaking slow self-hosted large reasoning model workflows
3. **Legacy tool reliability gaps**: The older V1 toolset lacks destructive command guards, stale content checks for patch operations, and proper error surfacing, leading to accidental overwrites and unhelpful retry loops
4. **Input UX frictions**: The missing native paste-to-image flow and lack of Vim shortcuts for chat input remain two of the longest standing highly-upvoted feature requests in the repository.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-11
Repository: github.com/badlogic/pi-mono

---
## 1. Today's Highlights
This 24-hour activity window includes no new stable Pi releases, with most contributions focused on enterprise provider support, streaming reliability fixes, and quality-of-life TUI improvements. Standout merged work adds native Palantir Foundry AIP LLM proxy support, resolves long-running Anthropic streaming edge cases, and addresses community feedback around the newly launched Project Trust security gating feature. Maintainers also shipped a suite of accessibility fixes for CJK language users and experimental first-run onboarding for new users.

## 2. Releases
No new official Pi releases were published in the reporting window.

## 3. Hot Issues (Top 10 Notable)
1. **#5514 Project Trust Feature Feedback** (25 comments, 13 👍) | [Link](https://github.com/earendil-works/pi/issues/5514)  
   The highest-engagement community thread: power users report frustration with the recently launched trust-gating feature, which repeatedly prompts for folder trust confirmation across different devices and workspace opens, prompting maintainers to flag planned configurable exemption controls for advanced users.
2. **#4180 Links not clickable anymore** (13 comments) | [Link](https://github.com/earendil-works/pi/issues/4180)  
   A high-impact post-refactor regression: markdown hyperlinks returned by coding agents no longer respond to TUI clicks, breaking workflows for users who rely on agent-provided source documentation links.
3. **#3715 Local-LLM streams terminate at 5 min from undici default bodyTimeout** (10 comments, 4 👍) | [Link](https://github.com/earendil-works/pi/issues/3715)  
   Top priority for self-hosted LLM users: long-running deep reasoning sessions on vLLM/Qwen3 backends hit a hard 5-minute undici timeout that overrides user-configured `retry.provider.timeoutMs` values, terminating long write tool calls mid-execution.
4. **#5291 Sessions hang on "working" when used with Anthropic subscription** (5 comments, 1 👍) | [Link](https://github.com/earendil-works/pi/issues/5291)  
   A critical enterprise pain point: users on Anthropic enterprise plans report frequent, unexplained stuck sessions with no actionable error logging, reducing reliability for production coding workflows.
5. **#5536 Split-turn compaction sends parallel summarization requests, causing 429 on single-concurrency local backends** (2 open comments) | [Link](https://github.com/earendil-works/pi/issues/5536)  
   Major local LLM usability gap: split-turn auto-compaction launches two concurrent summary requests, which triggers 429 throttling errors on single-slot backends like llama.cpp, breaking automatic context management entirely.
6. **#5577 Persona override for the generated system prompt** (2 comments) | [Link](https://github.com/earendil-works/pi/issues/5577)  
   A high-demand feature for power users who use Pi as a general-purpose agent harness: users request ability to fully override the default coding assistant system persona to support non-development workflows for security auditing, QA testing, research and project management.
7. **#5605 MiniMax-M3: cache_control ignored on Anthropic endpoint (full input billing)** (2 comments) | [Link](https://github.com/earendil-works/pi/issues/5605)  
   Cost-critical bug for MiniMax M3 users: missing `cache_control` headers sent to the Anthropic-compatible MiniMax endpoint lead to 5x higher input billing, with no cache-read discounts applied to sessions.
8. **#5578 Using shabang (`!`) to run commands causing command not found** (2 comments) | [Link](https://github.com/earendil-works/pi/issues/5578)  
   QoL regression for zsh users: Pi's `!` shell shortcut uses a hardcoded bash runtime, preventing access to zsh-specific plugins and user-configured shell aliases.
9. **#5453 pi.dev/packages renders stale npm packument `readme` field instead of the version tarball** (3 comments) | [Link](https://github.com/earendil-works/pi/issues/5453)  
   Public docs platform bug: Pi's extension marketplace pages serve outdated README content pulled from top-level npm packuments rather than the published version tarball, confusing users about latest extension capabilities.
10. **#5601 [GHC] Trying to login to ghc subscription fails with unhelpful error** (3 comments) | [Link](https://github.com/earendil-works/pi/issues/5601)  
    Onboarding friction for GitHub Copilot users: GHC login flows return opaque unstructured errors with no troubleshooting guidance, blocking new user setup completely.

## 4. Key PR Progress (Top 10 Important)
1. **#5609 feat(providers): add Palantir Foundry LLM proxy and OAuth provider** | [Link](https://github.com/earendil-works/pi/pull/5609)  
    Adds full native support for Palantir Foundry's AIP proxy, letting enterprise users authenticate via native Foundry OAuth to route requests to all supported LLM models on their internal Foundry deployment.
2. **#5594 Fix Anthropic stream finalization on message_stop** | [Link](https://github.com/earendil-works/pi/pull/5594)  
    Resolves the widely reported issue where Pi waited for full transport EOF after Anthropic sent a `message_stop` event, eliminating unnecessary delays and false stream error retries for proxied Anthropic deployments.
3. **#5600 fix(ai): honor Codex SSE header timeout setting** | [Link](https://github.com/earendil-works/pi/pull/5600)  
    Removes a hardcoded 10-second Codex SSE header timeout, respecting user-configured custom `timeoutMs` values for users on slow or unstable network connections to OpenAI Codex.
4. **#5509 feat: Add Amazon Bedrock Mantle OpenAI Responses provider** | [Link](https://github.com/earendil-works/pi/pull/5509)  
    Adds support for AWS Bedrock Mantle's new OpenAI Responses API, including native compatibility for GPT 5.5 and 5.4 models hosted on AWS infrastructure.
5. **#5587 feat(coding-agent): add experimental first-time setup flow** | [Link](https://github.com/earendil-works/pi/pull/5587)  
    Launches an experimental opt-in first-run setup wizard, with live preview for dark/light terminal theme selection and explicit analytics opt-in controls for new users.
6. **#5585 fix(tui): wrap CJK text at character boundaries in editor** | [Link](https://github.com/earendil-works/pi/pull/5585)  
    Fixes broken text rendering for Chinese, Japanese, and Korean users, preventing awkward mid-word line breaks that interrupted TUI readability.
7. **#5560 fix(coding-agent): parse :thinking suffix from custom model IDs in fallback path** | [Link](https://github.com/earendil-works/pi/pull/5560)  
    Adds support for parsing the `:thinking` level suffix appended to custom model IDs, eliminating manual thinking level configuration steps for users who frequently switch between reasoning models.
8. **#5561 feat(ai): link AWS data retention docs in Bedrock validation errors**

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-11
---
## 1. Today's Highlights
Today’s updates cover critical terminal TUI stability patches, a high-severity arbitrary command execution vulnerability disclosure for the shell tool, and major progress against the 2026 roadmap, including parallel Agent Team subagent coordination, cross-session persistent rewind functionality, and performance fixes for large workspaces. 24 issues were triaged or closed in the past 24 hours, alongside 50 updated pull requests, with two P1 critical bugs marked as ready for automated agent resolution.
No new public releases were published in the 24h tracking window.

## 2. Releases
No new Qwen Code public releases are recorded for the last 24 hours.

## 3. Hot Issues
Top 10 high-impact issues selected from 31 updated entries:
1. **[P1 Critical Security] `env` in read-only command allowlist enables arbitrary command execution**
   CVE-adjacent vulnerability where the shell tool’s read-only bypassed `env` command can be abused to run arbitrary user payloads (e.g. `env -i <malicious-binary>`) without triggering user confirmation, posing major risks for shared deployment scenarios. Link: https://github.com/QwenLM/qwen-code/issues/4930
2. **[P1 TUI Bug] Terminal drops to unresponsive cooked mode after input pipeline deactivation**
   A reference counting defect in KeypressContext breaks terminal raw mode when the last Ink `useInput` handler exits, leaving all keyboard input dead until users fully restart Qwen Code. The issue is marked ready for immediate agent resolution. Link: https://github.com/QwenLM/qwen-code/issues/4973
3. **[P2 UX Bug] Virtualized History mode blocks scroll input when Composer is active**
   One of the most discussed open UX defects with 4 community comments: users cannot scroll chat history via keyboard or mouse wheel when the input box is focused (the most common post-AI-response workflow) with Virtualized History enabled. Link: https://github.com/QwenLM/qwen-code/issues/4942
4. **[Closed Feature Request] Add cross-session global usage statistics aligned with Claude Code**
   The highly requested `/stats` command enhancement now implements persistent, cross-session token tracking and an interactive full-screen usage dashboard, replacing the existing ephemeral in-memory only session metrics. Link: https://github.com/QwenLM/qwen-code/issues/4597
5. **[P2 MCP Bug] Missing numeric string coercion causes frequent MCP tool failures**
   LLMs frequently emit numeric parameters (e.g. `depth: "3"`) as quoted strings, but strict MCP servers reject these invalid types, breaking common workflows including Playwright automation tool calls. Link: https://github.com/QwenLM/qwen-code/issues/4966
6. **[Closed Bug] Subagents return unrelated output when processing image files**
   Users reported that subagents tasked with image analysis returned garbage text, even when the same main agent running the identical model and input correctly parsed the image content. The issue was resolved after debug information was collected. Link: https://github.com/QwenLM/qwen-code/issues/4876
7. **[P2 TUI Bug] SGR mouse wheel sequences leak as literal text into input box**
   On terminals with SGR mouse tracking enabled (e.g. iTerm2), raw escape sequences like `64;50;15M` are inserted directly into the composer when scrolling, corrupting user draft input. Link: https://github.com/QwenLM/qwen-code/issues/4974
8. **[Closed P1 Perf Bug] /goal long loops skip memory microcompaction**
   Hook continuations used in recursive `/goal` runs bypassed the built-in `microcompactHistory()` function, leading to unbounded memory usage and guaranteed OOM crashes for multi-hour long-running automation tasks. The fix was merged recently. Link: https://github.com/QwenLM/qwen-code/issues/4838
9. **[P2 Feature Request] Queue background subagent permission requests to parent session**
   Currently background subagents silently auto-deny any tool call requiring user approval. The community proposed queuing these approval prompts to the foreground parent session instead of silent failure to unlock usable unattended automation workflows. Link: https://github.com/QwenLM/qwen-code/issues/4928
10. **[Closed Bug] Users cannot switch to new model variants after auth setup**
    v0.17.1 users with Qwen Coding Plan access received "model not available for auth type openai" errors when attempting to switch to newer models like qwen3.7-plus, caused by an incomplete model ID allowlist in the auth type parser. Link: https://github.com/QwenLM/qwen-code/issues/4904

## 4. Key PR Progress
Top 10 high-value pull requests from 50 updated entries:
1. **#4959 Fix Virtualized History scroll conflicts and incorrect viewport height**
   Resolves 3 open blocking bugs for enabling VP mode by default, including proper key binding disambiguation, expected viewport dimension calculation, and enabled scroll support at idle prompt state. Link: https://github.com/QwenLM/qwen-code/pull/4959
2. **#4914 Harden OOM prevention and compaction logic**
   Adds idempotency regression tests for history compaction, explicit forced GC triggers, and adjusted debug log defaults to eliminate memory leak risks for multi-hour sessions, closing the open #4815 OOM issue. Link: https://github.com/QwenLM/qwen-code/pull/4914
3. **#4844 Add experimental Agent Team parallel subagent coordination**
   Implements the experimental feature that allows the model to spawn multiple parallel subagent teammates that share a task list, exchange messages, and aggregate results to solve complex multi-part tasks faster. Link: https://github.com/QwenLM/qwen-code/pull/4844
4. **#4897 Persist file history snapshots to enable cross-session `/rewind`**
   Previously file change snapshots for the `/rewind` feature were stored only in memory and lost on process exit, now they are persisted to JSONL storage to support full session resume and history rollback after restart. Link: https://github.com/QwenLM/qwen-code/pull/4897
5. **#4653 Add native support for `.agentignore` and `.aiignore` files**
   Extends the existing ignore rule system to recognize widely adopted cross-AI ignore file formats out of the box, eliminating redundant ignore file duplication for users that switch between different AI coding assistants. Link: https://github.com/QwenLM/qwen-code/pull/4653
6. **#4621 Move AsyncFzf index construction to dedicated worker thread**
   Eliminates UI freezes when browsing workspaces with >20k files, by offloading the @-picker file search index build from the main event loop to a background worker thread. Link: https://github.com/QwenLM/qwen-code/pull/4621
7. **#4975 Batch adjacent tool calls into unified cards for web shell**
   Aligns the web shell rendering behavior with the native CLI, merging multiple consecutive tool calls without user visible output into a single grouped tool card for cleaner, less cluttered history views. Link: https://github.com/QwenLM/qwen-code/pull/4975
8. **#4856 Add full task auth and /goal workflow support for web shell**
   Adds structured task status rendering, in-line approval panels, and full daemon API integration to bring the web shell to full feature parity with the native CLI. Link: https://github.com/QwenLM/qwen-code/pull/4856
9. **#4525 Include response tokens in full prompt size calculation**
   Fixes the token counting logic that previously omitted generated response tokens from context window usage estimates, preventing unexpected oversized request truncation errors. Link: https://github.com/QwenLM/qwen-code/pull/4525
10. **#4716 Eliminate headless browser launch crashes**
    Replaces unsafe unhandled `open()` calls for `/bug`, `/docs`, and `/insight` commands with the hardened `openBrowserSecurely()` implementation, which properly honors the `BROWSER` environment variable and avoids uncaught errors on server environments without a desktop.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-11
Official repo: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)

---

## 1. Today's Highlights
This digest covers the project now officially branded *CodeWhale* (formerly DeepSeek TUI), which is in active finalization of its v0.8.58 milestone following a full deprecation of the legacy `deepseek-tui` npm package. Two consecutive stability-focused releases (v0.8.56, v0.8.57) shipped in the last 24 hours, accompanied by a stacked batch of 20+ community PRs addressing rebrand migration gaps, multi-provider parity, and long-requested TUI quality of life improvements. The project is seeing surging contributions from global users to expand support for non-DeepSeek local and cloud LLM providers.

## 2. Releases
Both new releases explicitly confirm the legacy `deepseek` / `deepseek-tui` npm packages are permanently deprecated with no further updates, with all v0.8.x users directed to the official [REBRAND.md](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md) migration guide:
- **v0.8.56 (Community Harvest)**: Localization support, expanded provider compatibility, prefix-cache stability improvements, and assorted bug fixes for cross-platform edge cases.
- **v0.8.57**: Immediate follow-up patch to align all rebrand naming across binaries, installer assets, and documentation, resolving naming mismatches uncovered during v0.8.56 user testing.

## 3. Hot Issues
1. [#2369 Config Paths Fragmented Across OS and Cygwin (Plus Silent Migration Bug)](https://github.com/Hmbown/CodeWhale/issues/2369): Highest comment count (6) open bug, affecting mixed OS/Cygwin Windows users with inconsistent config resolution that causes silent migration failures; a community-contributed patch is already attached to the ticket.
2. [#1806 Sub-agent 120s API timeout renders agent_open nearly unusable (v0.8.39)](https://github.com/Hmbown/CodeWhale/issues/1806): Breaks the core advertised parallel sub-agent workflow for enterprise users running batch document conversion and code refactoring jobs, widely reported by Windows users.
3. [#2574 Feature Request: Provider fallback chain — auto-switch on API failure](https://github.com/Hmbown/CodeWhale/issues/2574): Top reliability enhancement request, users currently have to manually interrupt sessions to switch providers during 429 quota limits, 401 auth failures, or 5xx downtime.
4. [#2988 Are all release channels currently paused after v0.8.54?](https://github.com/Hmbown/CodeWhale/issues/2988): Active community discussion around confusing cross-package-manager version mismatches: npm hosts v0.8.53, crates.io hosts v0.8.54, while GitHub Releases hosts the latest v0.8.56, creating unclear latest-version status for new users.
5. [#3004 api_key 应该支持通过脚本动态获取](https://github.com/Hmbown/CodeWhale/issues/3004): High-priority security enhancement request for power users managing API keys in password managers (e.g. KeePassXC), eliminating the need to store plaintext keys in config files synced to public dotfile repos.
6. [#2893 siliconflow provider config error](https://github.com/Hmbown/CodeWhale/issues/2893): Regional users of the Siliconflow CN provider are forced to duplicate config entries across both global and regional provider blocks to make the service work, creating unnecessary friction.
7. [#2989 Agent stops working before task completion but reports "completed" status when using Ollama + qwen3-coder:30b](https://github.com/Hmbown/CodeWhale/issues/2989): Critical functional bug for local LLM users, where the agent stalls mid-task but returns a false "success" status leading users to miss incomplete work.
8. [#2990 Active turn dies with "Stream read error: error decoding response body" when the computer sleeps](https://github.com/Hmbown/CodeWhale/issues/2990): Common UX pain point for laptop users, mid-streaming sessions crash on wake from sleep with no auto-recovery option.
9. [#3012 feat: auto-load global ~/.codewhale/instructions.md as fallback context layer](https://github.com/Hmbown/CodeWhale/issues/3012): Highly requested productivity feature that would auto-load cross-project shared context rules, no need to redefine user preferences for every new repository.
10. [#2960 v0.8.56: Fix rebrand update path — `deepseek update` and npm updates fail to reach codewhale](https://github.com/Hmbown/CodeWhale/issues/2960): Critical high-impact gap for pre-rebrand users, old `deepseek update` commands throw cryptic errors that block automatic migration for hundreds of existing installs.

## 4. Key PR Progress
1. [#3042 feat(exec): add --allowed-tools, --disallowed-tools, --max-turns, --append-system-prompt](https://github.com/Hmbown/CodeWhale/pull/3042): Adds four new CLI flags to the `codewhale exec` headless mode for secure, controlled unattended CI runs and benchmarking, closes #3027.
2. [#3040 feat(tui): clickable sidebar rows — click-to-act on Tasks and Agents panels](https://github.com/Hmbown/CodeWhale/pull/3040): Implements mouse click dispatch for sidebar task/agent rows, letting users cancel tasks or inspect agent status instantly without keyboard navigation.
3. [#3013 fix(update): detect legacy deepseek/deepseek-tui binary and print migration instructions](https://github.com/Hmbown/CodeWhale/pull/3013): Detects pre-rebrand legacy binaries during update flows and returns explicit copy-pasteable migration steps instead of cryptic spawn errors, closes #2960.
4. [#3041 fix: harvest error-message fixes from PR #2933 — better tool denial + subagent conflict messages](https://github.com/Hmbown/CodeWhale/pull/3041): Improves user-facing error text for tool denials, subagent model conflicts, and missing model IDs to reduce troubleshooting time for new users.
5. [#3035 fix(tui): throttle AgentProgress redraws to prevent freeze under subagent load](https://github.com/Hmbown/CodeWhale/pull/3035): Eliminates full UI freezes that occurred when running 4+ concurrent sub-ag

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*