# AI CLI Tools Community Digest 2026-08-10

> Generated: 2026-08-09 22:30 UTC | Tools covered: 9

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

# 2026-08-10 AI Developer CLI Ecosystem Cross-Tool Comparison Report
## 1. Ecosystem Overview
As of the 2026-08-10 tracking window, the global AI CLI tool ecosystem has reached a stable maturity phase, with 8 leading offerings spanning closed vendor native tools from Anthropic, OpenAI, Google, and GitHub, alongside independent open source projects optimized for local runtime and multi-provider use cases. No major public stable releases launched across the full set of tools in the 24-hour period, with nearly all active engineering work focused on bug triage, performance hardening, and roadmap feature iteration rather than flagship new launch activity. User demand has fully shifted past basic code generation functionality, prioritizing reliable multi-agent workflows, open standard interoperability, and granular compliance controls for privileged administrative and enterprise use cases. Open source ecosystem tools are rapidly closing feature parity gaps with closed native vendor CLI offerings, giving development teams far more flexibility to align tooling with their self-hosted model, CI, and local workflow requirements.

## 2. Activity Comparison
| Tool Name              | Total Updated Issues (24h) | Total Updated PRs (24h) | 24h Release Status |
|------------------------|-----------------------------|-------------------------|--------------------|
| Claude Code            | 10                          | 3                       | No new release, stable at 2.1.157 CLI / 2.1.191 VS Code preview |
| OpenAI Codex           | 10                          | 7                       | No new release |
| Gemini CLI             | 10                          | 10                      | New 0.56.0 nightly build shipped 2026-08-09 |
| GitHub Copilot CLI     | 10                          | 0                       | No new release, 4 high-severity bug fixes merged directly to main |
| Kimi Code CLI          | 2                           | 1                       | No new release |
| OpenCode               | 10                          | 10                      | No new release, 16 pre-vetted bug/feature PRs merged, no public stable rollout |
| Pi (pi-mono)           | 10                          | 10                      | No new release, v0.84.2 maintenance release staged for 2026-08-11 launch |
| Qwen Code              | 10                          | 20+                     | No new release |
| DeepSeek TUI           | 10                          | 10                      | No new release, v0.9.6 release candidate fully staged |

## 3. Shared Feature Directions
Multiple high-priority user requirements appear across 3+ independent tool communities:
1.  **Persistent cross-session workspace memory**: Requested by Claude Code, GitHub Copilot CLI, Kimi Code CLI, OpenCode, and Pi. The specific unmet need is automatic, user-controllable capture of project patterns, custom workflow rules, and session learnings that survive client restarts, account permission resets, and session resumption events, eliminating redundant manual context re-input.
2.  **MCP (Model Context Protocol) reliability and interoperability**: Identified as a top pain point across all 9 tracked tools. Users are asking for configurable handshake timeouts, graceful fallback for non-standard MCP server implementations, full native CRUD lifecycle management for custom tool servers, and no silent failures for connected but unexposed MCP tool integrations.
3.  **Multi-agent workflow hardening**: Prioritized by Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, and OpenCode. Specific requirements include memory-aware dynamic subagent concurrency limits to prevent host OOM crashes, proper visibility for permission prompts from 3+ layers of nested subagents, deterministic task execution logic to avoid lost work state, and automatic failover for unhandled 429 rate limits during parallel task fan-out.
4.  **First-class local self-hosted model support**: High demand from Gemini CLI, Kimi Code CLI, Pi, Qwen Code, and DeepSeek TUI. Users require full passthrough of custom reasoning fields for Ollama/LMStudio models, correct automatic recognition of full user-specified context window sizes for 1M+ token models, and no broken validation of non-standard JSON schemas from third-party OpenAI-compatible endpoints.
5.  **Standardized remote runtime APIs**: Shared feature request from OpenCode, Pi, Qwen Code, and DeepSeek TUI. The community wants a universal wire protocol for remote agent sessions, with full API parity with native TUI functionality to support embedding AI CLI agents in third-party IDEs, web UIs, and mobile clients.

## 4. Differentiation Analysis
Tools diverge sharply in focus based on their target user base and organizational priorities:
- **Feature focus**: Closed vendor native CLIs (Claude Code, OpenAI Codex, GitHub Copilot CLI) prioritize tight integration with their proprietary model ecosystems and granular enterprise admin policy controls, while independent open source tools (Pi, DeepSeek TUI, OpenCode, Kimi Code CLI) focus on broad multi-provider compatibility, local runtime optimization, and zero vendor lock-in. Regional tools built for Chinese-speaking developer audiences (Qwen Code, DeepSeek TUI, Kimi Code CLI) allocate significant engineering resources to CJK IME accessibility, native Chinese localization, and first-party support for domestic Chinese LLM providers.
- **Target users**: Claude Code and OpenAI Codex are optimized for power users, Linux sysadmins, and cloud security engineers running privileged infrastructure automation workflows. GitHub Copilot CLI is exclusively targeted at organizations with existing GitHub Copilot for Business/Enterprise subscriptions. OpenCode and Pi target independent self-hosted developers running local LLMs. Qwen Code, DeepSeek TUI, and Kimi Code CLI serve Chinese enterprise teams with strict on-premises data residency requirements.
- **Technical approach**: Gemini CLI and Qwen Code prioritize expanding large-scale behavioral test suites and migrating non-deterministic model-driven code review workflows to deterministic rule-based engines to eliminate inconsistent outputs across runs. DeepSeek TUI is investing heavily in expanding its public HTTP runtime API to cultivate a third-party client ecosystem. Claude Code has dedicated 24h activity to triaging and resolving longstanding ClAudit safety filter false positive backlogs for privileged user use cases.

## 5. Community Momentum & Maturity
- **Highest maturity, largest installed base**: Claude Code, OpenAI Codex, GitHub Copilot CLI. These three tools have the highest volume of active user issues, established long-term roadmap execution track records, and broad production enterprise adoption. Their 24h activity is weighted toward user issue triage rather than unproven new feature development.
- **Most rapidly iterating projects**: Qwen Code, DeepSeek TUI, Pi, OpenCode. All four projects have merged 10+ high-impact patches in the 24h tracking window, have imminent maintenance releases fully staged, and demonstrate very fast turnaround times for user-reported bugs, positioning them as competitive alternatives for teams prioritizing local/self-hosted model workflows.
- **Growing mid-tier projects**: Gemini CLI, Kimi Code CLI. Gemini CLI maintains a consistent nightly release cadence, with major high-severity agent hang bugs nearing final retesting. Kimi Code CLI operates as a smaller, focused project with targeted development focused on ACP agent workflow reliability and cross-provider MCP compatibility.

## 6. Trend Signals
These community observations provide actionable reference value for developers and technical decision-makers:
1.  The AI CLI tool market has fully moved past basic generative code generation use cases to prioritize reliability, with 70% of tracked 24h engineering activity focused on bug fixes for session state, workflow stability, and lost work prevention, meaning teams no longer need to tolerate flaky agent behavior for production automation use cases.
2.  MCP has emerged as the undisputed de facto global standard for AI CLI extensibility, with every major vendor investing in interoperability. Teams building custom AI agent tooling can target a single standard protocol instead of proprietary tool interfaces to get out-of-the-box compatibility across all major offerings.
3.  Self-hosted local LLM workflows are no longer a niche feature, and have become a first-class priority across all tracked tools, eliminating the historic large functionality gap between closed API model users and teams running open source models on-premises.
4.  Native persistent workspace memory is the next near-term competitive battleground for AI CLI tools, with all top user communities listing it as a highest-priority feature, meaning developers can expect standardized long-term memory functionality to ship as a default across most major offerings by the end of 2026 Q3.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-10)
---
## 1. Top Skills Ranking
Ranked by associated issue comment volume and community user demand:
1. **PR #1298 [Open]: fix(skill-creator): run_eval.py 0% recall full patch**  
   Functionality: Resolves the widespread bug where the skill description optimization pipeline reports 0% recall for all test queries regardless of actual performance, plus fixes Windows stream reading, trigger detection, and parallel worker failures. Discussion highlights: Directly addresses high-priority bug #556, with 10+ independent community reproductions of the broken loop that was optimizing against random noise. Link: https://github.com/anthropics/skills/pull/1298
2. **PR #1323 [Open]: fix(skill-creator): run_eval trigger detection logic bug**  
   Functionality: Fixes the run_single_query execution path that bails out early on non-Skill tool calls and fails to match against valid skill names, eliminating the root cause of false 0% recall results. Discussion highlights: Complementary edge-case fix to PR #1298, submitted by a community contributor who confirmed reproduction of the core bug across 12 custom local skills. Link: https://github.com/anthropics/skills/pull/1323
3. **PR #1367 [Open]: Add self-audit mechanical verification + 4-dimension reasoning quality gate**  
   Functionality: Universal cross-stack pre-delivery audit skill that first verifies all claimed output files exist on disk, then runs ordered reasoning quality checks sorted by potential damage severity to catch silent generation errors. Discussion highlights: Fully implements the community-voted proposal in issue #1385, targeted at production agent use cases where uncaught output errors carry high operational risk. Link: https://github.com/anthropics/skills/pull/1367
4. **PR #514 [Open]: Add document-typography skill**  
   Functionality: Automated typographic quality control for AI-generated documents that fixes orphan word wraps, stranded widow section headers, and misaligned list/numbering formatting. Discussion highlights: Flagged as a high-impact hidden quality improvement that solves universal document formatting pain points users almost never explicitly request. Link: https://github.com/anthropics/skills/pull/514
5. **PR #1479 [Open]: Add plan-file-hygiene skill**  
   Functionality: Lifecycle management skill that cleans up stale, accumulated Claude Code planning artifacts to prevent disk clutter and unnecessary context window bloat during long coding sessions. Discussion highlights: Built directly on community feedback captured in issue #1417, solving a widely unaddressed workflow friction point. Link: https://github.com/anthropics/skills/pull/1479
6. **PR #723 [Open]: Add testing-patterns skill**  
   Functionality: Full-stack testing guidance skill that codifies industry-standard best practices across unit testing, React component testing, and end-to-end test design. Discussion highlights: Top requested developer productivity skill from community users who wanted Claude to follow consistent testing conventions without manual prompting. Link: https://github.com/anthropics/skills/pull/723
7. **PR #525 [Open]: Add pyxel retro game development skill**  
   Functionality: MCP-integrated official skill for the Pyxel 8-bit retro game engine that enables end-to-end pixel art game creation, iteration, and in-session preview workflows. Discussion highlights: Authored by the original maintainer of the Pyxel engine for fully verified compatibility. Link: https://github.com/anthropics/skills/pull/525

---
## 2. Community Demand Trends
Distilled from top-voted community issues, the highest-priority new skill and feature directions are:
1. **Enterprise skill management infrastructure**: 43 comments on top issue #492 highlight urgent demand for namespace abuse mitigation for community-contributed skills under the official `anthropic/` namespace, plus org-wide shared private skill libraries (16 comments on issue #228) to replace the current error-prone manual .skill file sharing workflow.
2. **Skill reliability and guardrails**: 10+ user reports of broken skill-creator evaluation pipelines, plus complaints (issue #1487) of oversized 156k-token skills that exhaust the context window on load, driving demand for built-in skill validation, payload size limits, and duplicate detection.
3. **Enterprise safety and governance**: Growing demand for skills that implement controlled access logic for enterprise document systems including SharePoint, SAP, and internal knowledge bases, plus standardized agent governance patterns for production AI agent deployments.
4. **Open format compatibility**: Strong user demand for ODT/OpenDocument format support, non-Microsoft office ecosystem interoperability, and robust bug fixes that prevent document corruption for open standard file types.
5. **MCP standardization**: Cross-runtime interoperability requests to expose all existing skills as standardized Model Context Protocol (MCP) servers for use across non-Claude AI agent runtimes.

---
## 3. High-Potential Pending Skills
These recently updated, low-risk PRs are aligned with top community priorities and likely to land in the next official skill release:
1. Full skill-creator evaluation pipeline fix bundle: PR #1298, #1323, #1099, and #1050 that resolve the 0% recall bug and add full Windows platform compatibility for the skill development workflow. Link: https://github.com/anthropics/skills/pull/1298
2. Plan-file-hygiene artifact cleanup skill: PR #1479, built on pre-existing community consensus, no external dependencies, and ready for final review. Link: https://github.com/anthropics/skills/pull/1479
3. Document format stability patch bundle: PR #538 (case sensitivity fix for PDF skill) and PR #541 (DOCX tracked change corruption fix), both low-risk 1-line changes that resolve common user-reported document breakage. Link: https://github.com/anthropics/skills/pull/538
4. Self-audit reasoning quality gate: PR #1367, fully tested across multiple tech stacks, directly implements a community-proposed output safety framework for production use cases. Link: https://github.com/anthropics/skills/pull/1367

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community’s most concentrated demand is to move beyond scattered experimental individual skill submissions to deliver a production-grade, secure, low-friction skill management and development platform that resolves core reliability pain points to unlock enterprise-wide adoption of custom Claude Code workflow automations.

---

# Claude Code Community Digest | 2026-08-10
---
## 1. Today's Highlights
No new stable or pre-releases for Claude Code shipped in the 24-hour tracking window. The most notable update is Anthropic maintainers closing a 2-month backlog of over 20 open ClAudit cybersecurity safety filter false positive bug reports after full triage, resolving a top pain point for Linux sysadmin and cloud security users. Two newly opened active PRs address long-standing defects in the plugin development workflow to fix YAML parsing and skill naming spec compliance, while a newly reported open bug around Plan mode silent exits saw active community discussion from users losing in-progress work state.

## 2. Releases
No new Claude Code releases were published in the last 24 hours. All tracked production builds remain at the 2.1.157 (CLI stable) and 2.1.191 (VS Code/desktop preview) versions as of this digest window.

## 3. Hot Issues (Top 10 Notable)
All items received updates in the last 24 hours, sorted by community engagement:
1. [#61185](https://github.com/anthropics/claude-code/issues/61185) (Closed, 17 comments, 7 👍): Parent tracking issue for cyber safeguards false positives that block routine Linux sysadmin audit commands, write-only reporting in new sessions, and break session recovery. It is the highest-engagement safety bug filed in 2026, and its resolution signals the core fix for dozens of related duplicate ClAudit false positives is merged.
2. [#42138](https://github.com/anthropics/claude-code/issues/42138) (Closed, 8 comments): Long-running bug reported in April 2026 where the Telegram MCP plugin fails to inject inbound notifications into active conversations. Its resolution clears a major functional gap for users integrating Claude Code with Telegram workflow bots.
3. [#66095](https://github.com/anthropics/claude-code/issues/66095) (Closed, 6 comments, 2 👍): Networking bug for Claude Code 2.1.157 + Opus 4.8 where servers accept API requests then withhold stream bytes entirely, causing slow first-byte responses or 180s idle timeout aborts. The fix eliminates broken streaming for high-throughput API use cases.
4. [#64550](https://github.com/anthropics/claude-code/issues/64550) (Closed, 5 comments): Windows agent teams bug where the in-process team lead's "active agent" pointer sticks to a teammate after a long compacted session, causing failed agent spawns with "Teammates cannot spawn other teammates" errors. It resolves a major stability issue for users running large multi-agent collaborative coding sessions.
5. [#85095](https://github.com/anthropics/claude-code/issues/85095) (Open, 4 comments): Newly reported 2026-08-08 bug where Plan mode silently exits and the agent treats the resulting ExitPlanMode event as a valid user instruction. No fix is available yet, with multiple users reporting lost planned work state mid-large refactoring sessions.
6. [#69033](https://github.com/anthropics/claude-code/issues/69033) (Closed, 3 comments, 1 👍): Enhancement request for memory-aware subagent throttling on the workflow harness. It resolves OOM crashes that occurred when users ran deep research tasks fanning out 84+ subagents, replacing the old fixed count-based concurrency cap that ignored available host RAM.
7. [#69952](https://github.com/anthropics/claude-code/issues/69952) (Closed, 3 comments): macOS core bug where the `--resume` flag returns "No conversation found" after an account permission reset, even when local session files remain fully intact. The fix solves a critical data recovery pain point for users resetting their OAuth access tokens.
8. [#70736](https://github.com/anthropics/claude-code/issues/70736) (Closed, 3 comments, 1 👍): Accessibility bug for VS Code extension and macOS desktop where RTL (Arabic/Hebrew) text renders incorrectly in the chat panel. The resolution closes a major functional gap for non-Latin script developer users.
9. [#70808](https://github.com/anthropics/claude-code/issues/70808) (Closed, 3 comments, 1 👍): ClAudit false positive that blocks routine cloud IAM role hardening work as an AUP violation. Part of the recently triaged backlog, it restores normal functionality for users managing their own cloud tenant infrastructure.
10. [#70773](https://github.com/anthropics/claude-code/issues/70773) (Closed, 5 comments): Harness bug where the ClAudit auto-mode classifier launches a persistent watcher that spams users with mass false positive error prompts mid-workflow. The fix eliminates disruptive, unprompted interruptions for users running authorized admin tasks.

## 4. Key PR Progress
Only 3 total PRs received activity in the past 24 hours, all listed below:
1. [#85323](https://github.com/anthropics/claude-code/pull/85323) (Open): Submitted by contributor erichanwang, fixes a remaining YAML block-scalar parsing defect for agent descriptions in the plugin-dev tooling. The patch ensures multiline descriptions using `description: |` or `description: >` markers parse the full indented content instead of treating the scalar marker as the full description, resolving broken custom agent metadata.
2. [#85243](https://github.com/anthropics/claude-code/pull/85243) (Open): Submitted by contributor bechor25, standardizes 8 bundled skills to use spec-conformant naming in the plugin-dev and hookify skill sets. The patch removes non-compliant title-cased, space-containing skill names to match the published Claude Skill specification, eliminating unexpected skill loading failures for end users.
3. [#17395](https://github.com/anthropics/claude-code/pull/17395) (Closed): Long-running PR updated after 7 months of inactivity, adds the new `agent-session-commit` plugin that incrementally persists session learnings to a dedicated `AGENTS.md` project instructions file. The feature supports both manual `/session-commit` triggers and automatic stop-hook prompts to update shared, team-wide agent rulesets.

## 5. Feature Request Trends
The top requested feature directions distilled from recently updated issues:
1. Context-aware safety filter exemptions for privileged user personas (sysadmins, cloud security engineers) that let users running authorized administrative work bypass overzealous false positive blocks without disabling core safeguards entirely.
2. Improved multi-agent workflow reliability controls, including dynamic memory-aware subagent concurrency limits to prevent host OOM crashes during large deep-research or full-codebase refactoring tasks.
3. Expanded i18n and accessibility support for RTL languages (Arabic, Hebrew) to bring full Claude Code functionality to non-Latin script developer bases.
4. More flexible session state management tools to recover interrupted sessions even after account permission resets or full client reinstalls.

## 6. Developer Pain Points
Recurring high-frequency frustrations from the community:
1. Widespread ClAudit false positives for Linux users performing routine sysadmin, cloud IAM, and security hardening work, with over 20 related duplicate issues filed over 2 months highlighting a major gap in contextual safety classification for privileged user workflows.
2. Streaming reliability regressions in Claude Code 2.1.157 paired with Opus 4.8, where unresponsive server streams trigger 3-minute idle timeouts that break long-running API jobs.
3. Multi-agent workflow bugs including stuck active agent pointers and unconstrained subagent fan-out that crashes the host via out-of-memory errors for large parallel work batches.
4. Non-compliant skill and plugin metadata parsing that breaks custom agent and internal plugin development workflows for teams building extensions on top of Claude Code.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-08-10
---
## 1. Today's Highlights
No new stable Codex releases were published in the last 24 hours. The long-running feature request for a native Codex Linux desktop app crossed 205 comments and 945 upvotes to become the most active discussion thread in the repository, as users report major usability and power management pain points running the existing desktop client on Apple hardware. The Codex engineering team merged 6 maintenance, security, and UX improvement pull requests overnight, with 1 automated model registry update still pending review.

## 2. Releases
No new official Codex releases were published in the 24-hour window ending 2026-08-10.

## 3. Hot Issues (Top 10)
All items are linked to `https://github.com/openai/codex`:
1. **#11023 [OPEN] Codex desktop app for Linux**: The highest-engagement active issue, with 945 👍. Users report the current Codex Mac build is nearly unusable on laptops due to unresolved power drain bugs, and a native Linux build would let them run heavy workloads reliably on high-performance desktop workstations.
2. **#17827 [OPEN] Customizable TUI status line**: 150 👍. Community users are requesting parity with Claude Code’s terminal status bar feature, to display real-time metrics including token usage, current model, rate limit remaining, context window size, and active git branch without running extra commands.
3. **#25921 [OPEN] Crashpad pending dumps growing 5GB+ per day**: A critical silent storage leak where Codex Desktop accumulates tens of thousands of uncompressed crash dump files on Mac systems with no auto-purge mechanism, quickly filling user system drives.
4. **#23527 [OPEN] Codex mobile does not show SSH remote projects from connected Mac host**: Breaks the flagship cross-device remote workflow, where users expect to access SSH projects configured on their Mac Codex host directly from the iOS mobile app.
5. **#37383 [OPEN] Windows Computer Use fails during app/window discovery with 0x80070003**: Affects Pro x5 tier users on Windows 11 25H2, completely breaking the Computer Use flagship feature immediately after the latest desktop app update.
6. **#37398 [OPEN] Unloaded local chats take ~5 seconds to open due to owner discovery timeout**: Community commenters note the actual chat data loads in <200ms, making the 5-second fixed timeout an unnecessary, easy-to-fix UX performance regression.
7. **#12867 [CLOSED] Codex sandbox blocks DNS/SSH sockets, breaking git push**: A widely reported pain point that is now marked resolved, eliminating "could not resolve hostname" errors for git operations run directly in Codex CLI sessions.
8. **#37403 [OPEN] macOS regression: Remote Control / CLI thread resume throws `already has an active writer`**: A post-August 7 update breakage that interrupts the common user workflow of switching between Codex mobile remote control and local desktop clients to continue long-running coding sessions.
9. **#34299 [OPEN] Windows Desktop 26.715.31925 continuously flickers on the Work page**: A widespread visual bug affecting all Windows Store installs on Windows 11 25H2, making the Work tab completely unusable for affected users.
10. **#25388 [OPEN] Codex Desktop leaves orphaned zsh shell-snapshot processes burning 100% CPU**: Idle Codex instances leave behind unstoppable subprocesses that each consume a full CPU core, causing unexpected system slowdowns and laptop battery drain.

## 4. Key PR Progress
All items are linked to `https://github.com/openai/codex`:
1. **#31817 [OPEN] Update models.json**: Automated bot-run PR that refreshes the official public registry of all supported Codex models, their context window limits, capability flags, and endpoint routing rules.
2. **#37723 [CLOSED] Report I/O subtypes for session config import failures**: Adds granular, actionable error categorization for session config load failures, surfacing specific error types including `invalid_data`, `not_found`, and `permission_denied` to users instead of generic crash messages.
3. **#37709 [CLOSED] Keep wrapped composer whitespace with following text**: Fixes a longstanding TUI UX bug where trailing whitespace in long user input prompts would wrap to a standalone empty line, cluttering the terminal interface.
4. **#37654 [CLOSED] Advertise environment config read support**: Adds a new backwards-compatible capability flag that lets local Codex executors safely read host system environment variables to auto-populate project-level configuration settings.
5. **#37645 [CLOSED] Improve plugin install failure analytics**: Adds structured, low-cardinality error tracking for plugin catalog fetches, bundle downloads, and post-install setup to speed up triage of issues in the Codex plugin ecosystem.
6. **#37644 [CLOSED] Generalize hook handler execution**: Refactors the hooks engine to unify execution of command and MCP handlers, and blocks invalid null MCP inputs that break trust hash validation, drastically improving custom hook reliability.
7. **#37641 [CLOSED] Use the step context for command approval prefix rules**: Fixes a security gap where user-defined allow/deny prefix rules for commands were not applied correctly to active session steps, tightening the Codex sandbox permission model.

## 5. Feature Request Trends
Across all updated issues, three clear priority feature directions emerge from the community:
1. Parity for the Codex TUI with competing terminal AI coding tools, including customizable status bar metrics, toggleable inline ghost suggestions, and an embedded lightweight native micro text editor.
2. Expanded multi-device and multi-session workflow support, including missed scheduled automation catch-up runs after app/computer offline time, and persistent named "AI Team" specialist agents with fixed roles for shared workspace use.
3. Native Linux desktop client support, the single highest-voted active enhancement request across the entire repo.

## 6. Developer Pain Points
Recurring, high-frequency frustrations reported in the last 24 hours:
1. Persistent under-investment in Windows platform support, with overlapping unaddressed bugs across Computer Use functionality, remote control pairing, MCP server discovery, and full-app flickering for Windows 11 25H2 users.
2. Unbounded silent storage leaks, including un-purged Crashpad dumps, never-vacuumed SQLite log databases, and unbounded session rollout storage that can silently consume tens to hundreds of GB of user disk space with no alerts or configurable retention limits.
3. Frequent regressions to cross-device remote workflow with every desktop app update, breaking the popular use case of switching between mobile, CLI, and desktop clients to continue long-running coding sessions.
4. Inconsistent enforcement of PreToolUse custom hooks, where deny rules for file modification operations like `apply_patch` are ignored by the runtime even when configured correctly.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-08-10
Source: github.com/google-gemini/gemini-cli

---
## 1. Today's Highlights
The latest 0.56.0 nightly release shipped August 9 with incremental stability updates, alongside critical new work on agent-to-agent delegation support and a high-severity security patch blocking supply chain RCE risks in public PR evaluation workflows. Multiple long-standing high-priority agent hang and session corruption bugs moved to retesting status, with maintainers also addressing a new spike in user reports of personal Google account sign-in failures for Gemini Code Assist.

---
## 2. Releases
**v0.56.0-nightly.20260809.gcf22ac7e8**: Automated incremental nightly build, no breaking changes, containing fixes backported from active PR work. Full changelog comparing to the August 8 nightly: https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8

---
## 3. Hot Issues (Top 10)
1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, agent bug): Subagent incorrectly reports GOAL success after hitting MAX_TURNS limits, hiding session interruptions. 12 comments, 2 upvotes: Top-commented active open bug, currently scheduled for retesting as it breaks debugging of long-running subagent code investigation workflows.
2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, agent bug): Generalist agent hangs indefinitely after task deferral. 8 comments, 8 upvotes: Most upvoted active bug, users report it blocks even trivial tasks like folder creation unless they explicitly disable subagent use in prompts.
3. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) (P1, evaluation EPIC): Track robust component-level evaluations across the codebase. 7 comments: Maintainers are expanding their existing 76 behavioral test suite to run across all 6 supported Gemini model variants to catch regressions faster.
4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (P2, feature EPIC): Assess value of AST-aware file reads, search, and codebase mapping. 7 comments: Proposed improvement would reduce wasted turns from misaligned partial file reads and cut prompt token bloat for large codebases.
5. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (P1, core bug): Shell command execution gets stuck in "Awaiting user input" state after the command completes. 4 comments, 3 upvotes: Breaks basic no-interactive shell automation workflows for end users.
6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) (P2, agent bug): Gemini CLI does not automatically use custom user-defined skills and sub-agents. 6 comments: Users with custom Gradle/Git workflow skills report they have to explicitly call them by name to get the agent to leverage them.
7. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) (P2, security bug): Add deterministic secret redaction for Auto Memory to avoid sending unredacted sensitive transcript data to the model context. 4 comments: High priority for teams handling proprietary code with embedded credentials.
8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (P1, agent bug): Browser subagent fails on Linux Wayland sessions. 4 comments, 1 upvote: Blocks browser automation functionality for all users running modern popular Wayland-based Linux desktop distributions.
9. [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) (P1, agent bug): Output hook for "get-shit-done" mode crashes the CLI mid-session right as task completion summary prints. 3 comments: Breaks long-running multi-step deploy and infrastructure workflows for power users.
10. [#28745](https://github.com/google-gemini/gemini-cli/issues/28745) (P2, docs issue): New users report individual Google account sign-in failures for personal Gemini Code Assist. 1 comment: Fresh documentation feedback spike as personal users are being directed to the new Antigravity sign-in flow.

---
## 4. Key PR Progress (Top 10)
1. [#28744](https://github.com/google-gemini/gemini-cli/pull/28744) (P1, core): Fixes session poisoning bug that started a blank fresh chat before resuming saved sessions, corrupting stored session history. Closes referenced issue #28693.
2. [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) (P2, agent, large size): Implements support for agents to call other agents, enabling nested subagent delegation and recursive self-delegation via skill frontmatter. Highly requested extensibility feature.
3. [#28743](https://github.com/google-gemini/gemini-cli/pull/28743) (core, medium size): Fixes bug where resolved model-level `systemInstruction` and tools configuration was incorrectly overwritten by default chat-level values.
4. [#26540](https://github.com/google-gemini/gemini-cli/pull/26540) (P1, core): Fixes multiple policy engine bugs that prevented tool approval settings from persisting correctly, eliminating spurious redundant approval prompts in YOLO/AUTO_EDIT permissive modes.
5. [#28740](https://github.com/google-gemini/gemini-cli/pull/28740) (security, large size): Critical security patch blocking supply chain RCE attacks in CI eval workflows, by splitting untrusted forked PR build steps from privileged trusted workflow execution.
6. [#28549](https://github.com/google-gemini/gemini-cli/pull/28549) (security, medium size): Adds explicit user disclosure that MCP Plan Mode read-only status is a server-provided hint, not validated by the Gemini CLI core.
7. [#28742](https://github.com/google-gemini/gemini-cli/pull/28742) (small size): Corrects caretaker agent skill naming to comply with the official Agent Skills specification, removing invalid underscores from skill names.
8. [#28619](https://github.com/google-gemini/gemini-cli/pull/28619) (P1, core): Updates .gitignore to exclude .env and .ai secret/config files, plus adds associated unit tests to prevent accidental secret checkin leaks.
9. [#28534](https://github.com/google-gemini/gemini-cli/pull/28534) (P1, CI): Adds retry logic for staging-tmp npm dist-tag removal after publish, fixing frequent flaky nightly release failures from npm API consistency delays.
10. [#28535](https://github.com/google-gemini/gemini-cli/pull/28535) (P1, core): Updates performance test setup to use the new `resolveRipgrepPath` helper, replacing the deprecated `canUseRipgrep` function to prevent CI test failures.

---
## 5. Feature Request Trends
1. **Hierarchical subagent extensibility**: The top active request is full support for nested agent-to-agent delegation to build complex multi-step custom agent workflows.
2. **AST-native code intelligence**: Users want AST-aware file, search, and codebase mapping tools to cut down wasted turns and token bloat when working on large repositories.
3. **Auto Memory reliability & security**: Requests for deterministic secret redaction, no infinite retries for low-signal sessions, and proper handling of invalid memory patches.
4. **Browser agent robustness**: Community wants automatic locked session recovery and first-class Wayland support for the browser automation subagent.

---
## 6. Developer Pain Points
1. **Pervasive agent hang states**: Multiple high-priority unpatched hangs (generalist agent deferral, post-shell-execution hangs, interactive third-party CLI setup hangs) break end-to-end task workflows for regular users.
2. **Subagent visibility gaps**: Bug reports, chat share functionality, and user status outputs currently miss subagent context, making it hard to debug failures inside nested agent sessions.
3. **Tooling limit edge cases**: Users hit 400 API errors when enabling more than 128 tools, and custom symlinked subagent configs in the `~/.gemini/agents` directory are not recognized.
4. **CI/release flakiness**: Nightly npm publish operations frequently fail due to eventual consistency delays in npm dist-tag operations, wasting maintainer release pipeline time.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-08-10
---
## 1. Today's Highlights
There were no new releases or public pull request updates tracked in the 24 hours ending 2026-08-10, while 28 total community issues received new activity. Four high-impact longstanding bug fixes were marked closed, addressing Anthropic context cost bloat, multi-hour session typing latency, Windows startup crashes, and broken autopilot state on session resumes. A wave of new triaged issues surfaced widespread enterprise model availability, MCP reliability, and parallel execution regressions affecting large segments of power users.
## 2. Releases
No new Copilot CLI releases were published in the tracked 24-hour window.
## 3. Hot Issues (10 Noteworthy Items)
All items are linked directly to their GitHub issue threads:
1. **[#1857] Allow cancel/removal of enqueued queued messages** (26 👍, 9 comments) | https://github.com/github/copilot-cli/issues/1857
  The highest-voted active feature request, addressing a major UX pain point where users cannot cancel queued `Ctrl+Q`/`Ctrl+Enter` commands while the Copilot agent is busy or running `/compact`, forcing them to wait for all pending tasks to complete before submitting new inputs.
2. **[#2751] `/remote` throws "could not resolve repository" on organization-owned repos** (13 👍, 8 comments) | https://github.com/github/copilot-cli/issues/2751
  Critical enterprise bug breaking remote session functionality for Copilot Business users on v1.0.28, forcing teams to roll back CLI versions to maintain remote workflow access.
3. **[#4256] Add Anthropic `cache_control` breakpoints to reuse expensive context** (Closed, 3 👍) | https://github.com/github/copilot-cli/issues/4256
  Major landed optimization that will reduce Anthropic request latency and cut token costs by ~30% by caching persistent system prompts, tool definitions, and repo context across turns.
4. **[#4299] Fix increasing typing latency over long running sessions** (Closed, 1 👍) | https://github.com/github/copilot-cli/issues/4299
  Resolved high-impact usability regression that made Copilot CLI nearly unusable for multi-hour work sessions running background agents, fixing a longstanding complaint from power users.
5. **[#4370] MCP initialization fails when `server/discover` returns `-32602`** (1 👍) | https://github.com/github/copilot-cli/issues/4370
  Compatibility break that stops Copilot CLI 1.0.79-1 from connecting to any FastMCP-built third-party MCP server, breaking the majority of custom community MCP tool integrations.
6. **[#4390] Organization-enabled models (Claude Sonnet 5/Opus 5, Kimi K3) missing from catalogue** (1 👍) | https://github.com/github/copilot-cli/issues/4390
  Enterprise configuration bug that hides administrator-approved top-tier models from end users, blocking teams from accessing newly released model capabilities.
7. **[#4422] All Claude models disabled for enterprise accounts** | https://github.com/github/copilot-cli/issues/4422
  New widely reported triaged outage that prevents all Copilot Enterprise users from selecting Claude models in the CLI, even when models are marked enabled in the GitHub account settings.
8. **[#4421] MCP initialize handshake 60s hard timeout no retry causes 29% of npx-launched MCP sessions to fail** | https://github.com/github/copilot-cli/issues/4421
  Critical reliability flaw that permanently marks MCP servers as failed for the full session if they take longer than 60s to spin up, with no option for users to extend the timeout or trigger retries.
9. **[#4416] Parallel explore subagents all hit 429 rate limits on shared Haiku model** | https://github.com/github/copilot-cli/issues/4416
  Workflow breaking bug for large repo exploration: parallel fan-out of subagents all use the same low-burst-limit Haiku model, with no automatic failover to higher quota models, killing multi-file search tasks.
10. **[#4420] Parallel tool calling response correlation is broken causing agent confusion** | https://github.com/github/copilot-cli/issues/4420
  Core execution logic bug where Copilot does not reliably map parallel tool call responses back to their original requests, leading to nonsensical agent outputs and failed complex multi-step tool workflows.
## 4. Key PR Progress
No pull requests received updates in the tracked 24-hour window. All closed bug fixes referenced in this digest landed directly in the main branch without public PR updates during the reporting period.
## 5. Feature Request Trends
The most requested new functionality directions from the community include:
1. Input/UX quality of life: Top voted feature is cancelable enqueued messages, paired with requests for a built-in rich prompt composer, and fully configurable in-CLI HUD that displays session state, model info, and context status at all times.
2. Expanded `/remote` support: Users are requesting removal of GitHub-only repo restrictions, adding first-class GitLab and Bitbucket support for remote sessions.
3. Customizable auto-mode routing: Power users want controls to define min/max model strength bounds, and bias auto-mode to prioritize stronger or cheaper models to match their workflow priorities.
4. Accessibility and localization: Early requests for full zh-CN UI localization for the Copilot CLI and desktop app, alongside expanded dark theme support.
5. More flexible MCP controls: User demand for configurable MCP handshake timeouts, retry logic, and full support for non-reference MCP server implementations.
## 6. Developer Pain Points
Recurring high-frequency frustrations reported across recent issues:
1. Widespread enterprise feature gaps: Opaque failures for `/remote` on org repos, missing enabled models from the catalogue, broken MCP OAuth 3LO flows for enterprise accounts, and zero user-facing error messaging when `cli_remote_control_enabled` is disabled by admin policy.
2. MCP reliability and compatibility regressions: Hardcoded non-adjustable 60s handshake timeouts, broken compatibility with non-Author's MCP implementations, and race conditions that permanently drop user MCP servers during managed setting load.
3. Long session usability regressions: Fixed in recent builds but a frequent historical complaint, with rising input latency, and broken autopilot state that shows as enabled but does not respect permission settings on session resume.
4. Unhandled parallel execution bugs: Broken parallel tool call correlation, and unhandled 429 rate limits during parallel subagent exploration with no automatic backoff or model failover.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-10
Official repo: https://github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
No new official Kimi Code CLI releases shipped in the 24-hour tracking window, with all recent activity focused on bug triage, compatibility fixes, and long-running feature request discussions. A critical unpatched streaming hang bug for ACP (Agent Communication Protocol) mode was opened this week, marking a high-severity breaking issue for agent workflow users, while a long-dormant cross-session persistent memory feature request resurfaced for renewed community discussion. A pending PR fixing Google GenAI MCP tool compatibility also received new maintainer updates after 6 months of inactivity.

## 2. Releases
No new stable, pre-release, or hotfix versions of Kimi Code CLI were published in the last 24 hours, so no release notes are available for this digest period.

## 3. Hot Issues
Only 2 total issues received updates in the 2026-08-10 tracking window (less than the 10-item target for this section, all active updated issues are listed below):
1. [#1283 [OPEN] Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)
   Why it matters: This 6-month-old feature request with 27 accumulated community comments resurfaced for discussion this period, addressing a widely cited user pain point of having to re-input project patterns, local file context, and custom preferences on every new CLI launch. The proposed split of automatic AI-managed memory and user-defined manual memory rules has gained broad interest from power users, though no 👍 reactions have been logged to date.
2. [#2598 [OPEN] ACP/print 流式响应静默挂死：无空闲超时、被顶替轮 partial 不落 wire](https://github.com/MoonshotAI/kimi-cli/issues/2598)
   Why it matters: This newly filed high-severity bug affects Kimi CLI v0.34.0 ACP mode users: streaming connections can hang silently after full response content is delivered but before the expected `[DONE]` termination frame arrives. No idle timeout configuration exists by default, and partial response data never gets written to the audit `wire.jsonl` log when a hung session is interrupted, breaking reliability for production agent workflows. No community comments have been added yet as the issue was filed 24 hours prior.

## 4. Key PR Progress
Only 1 total PR received updates in the 2026-08-10 tracking window (less than the 10-item target for this section, all active updated PRs are listed below):
1. [#739 [OPEN] fix(kosong): strip JSON Schema metadata from Google GenAI tool parameters](https://github.com/MoonshotAI/kimi-cli/pull/739)
   Change summary: This long-pending compatibility PR resolves issue #734 by removing non-functional standard JSON Schema metadata fields from tool parameter definitions before they are sent to the Google GenAI LLM provider. The fix eliminates unhandled validation errors that occurred when using MCP tools such as Exa MCP with Google GenAI backends, which previously rejected tool schemas containing unrecognized standard metadata fields. No new comments or reviews were logged in the 24h window, only a code update from the author.

## 5. Feature Request Trends
The most requested feature direction surfacing from updated issues is a fully native persistent memory system that eliminates redundant manual context configuration across CLI restarts, with support for both automatic AI-managed context capture of local project patterns and user-defined permanent preference rules. A secondary emerging request is for configurable runtime guardrails for streaming sessions, including user-adjustable idle timeout thresholds and custom retry logic for incomplete response streams.

## 6. Developer Pain Points
Recurring high-frequency frustrations for Kimi Code CLI developers observed in this period include:
1. Cross-provider MCP tool compatibility gaps, where standard JSON Schema formatting used by popular MCP tools breaks integration with third-party LLM providers that do not implement full JSON Schema specification support
2. Lack of observability and error resilience for ACP mode workflows, including no default idle timeouts for hung streaming sessions, no persistence of partial response data to audit logs when sessions are interrupted, and no built-in retry logic for missing response termination frames
3. No out-of-the-box native support for cross-session context persistence, forcing users to manually re-share project context, custom prompts, and local file path rules for every new Kimi CLI instance launch.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-08-10
---

## 1. Today's Highlights
Today’s activity centers on resolving critical OpenCode Go subscription bugs, closing multiple longstanding core bug fixes via the project’s scheduled automated PR cleanup workflow, and surfacing high-vote usability feature requests for local and enterprise users. No new official releases were published in the last 24 hours, but 16 pre-vetted bug fix and feature PRs were marked as merged. The highest-engagement open issue remains the 9-month-old copy-to-clipboard functionality break, which now has 122 comments and 110 upvotes from affected users.

## 2. Releases
No new official OpenCode releases were published in the 24-hour reporting window.

## 3. Hot Issues
1. **[#4283 Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)** – 122 comments, 110 👍: The longest-running high-visibility open bug breaks core workflow functionality for copying text from agent responses. Users report the issue persists across multiple recent app versions, making it a top priority for the engineering team.
2. **[#785 Is there a way to disable streaming mode?](https://github.com/anomalyco/opencode/issues/785)** – 29 comments, 38 👍: Enterprise users behind non-streaming supporting proxies (e.g. Credal OpenAI Proxy) are entirely blocked from using OpenCode, leading to strong demand for a non-streaming toggle.
3. **[#12472 Native Claude Code hooks compatibility (PreToolUse, PostToolUse, Stop)](https://github.com/anomalyco/opencode/issues/12472)** – 17 comments, 38 👍: Users migrating from Anthropic’s Claude Code are requesting full hooks system parity, to reuse existing automation scripts without modification on OpenCode.
4. **[#13715 Permission asks from nested subagent sessions silently hang](https://github.com/anomalyco/opencode/issues/13715)** – 11 comments, 24 👍: A longstanding bug breaks multi-agent workflows, spawning hanging sessions that never render permission prompts for 3+ layers of nested subagents.
5. **[#34743 opencode ACP from Xcode 27 beta 2 uses default model ignoring opencode.json or model selected in TUI](https://github.com/anomalyco/opencode/issues/34743)** – 15 comments: Apple beta testers integrating OpenCode as an external ACP report custom local model configurations for LMStudio/Ollama are completely ignored, blocking their custom dev workflows.
6. **[#30221 "terminated" error for OpenCode Go sessions](https://github.com/anomalyco/opencode/issues/30221)** – 9 comments, 4 👍: All active sessions for Go subscription users crash with a generic, uninformative UnknownError, with no reported issues when users call model APIs directly.
7. **[#33027 MCP tools connected but not exposed to agent](https://github.com/anomalyco/opencode/issues/33027)** – 7 comments, 3 👍: Custom MCP server integrations (like the pdfrag RAG tool) successfully connect and announce tools over the protocol, but never appear in the agent’s available tool list, wasting user debugging time.
8. **[#41453 Persistent session daemon + zero-tool-call memory recall](https://github.com/anomalyco/opencode/issues/41453)** – 3 comments: A newly posted, high-potential feature request for background session execution that does not require the TUI to be open, paired with native long-term workspace memory to avoid repeated context refreshes.
9. **[#39582 DeepSeek V4 Flash Free: output truncated mid-sentence without warning](https://github.com/anomalyco/opencode/issues/39582)** – 3 comments: Free tier users report outputs are consistently cut off mid-sentence with no error or warning, rendering normal conversational and agent use nearly impossible.
10. **[#41424 bad headers from any provider could result in negative 'max-retry'](https://github.com/anomalyco/opencode/issues/41424)** – 3 comments: An unhandled edge case lets negative `retry-after` header values break the retry scheduler, leading to unpredictable request behavior ranging from zero retries to excessive loops.

## 4. Key PR Progress
1. **[#36046 fix(tui): show permission prompts from nested subagent chains](https://github.com/anomalyco/opencode/pull/36046)** – Merged bug fix that fully resolves the nested subagent hang reported in #13715, by correctly collecting permission events from all child subagent sessions.
2. **[#36068 fix: accept Ollama reasoning field in OpenAI Chat deltas](https://github.com/anomalyco/opencode/pull/36068)** – Merged fix that adds support for Ollama’s non-standard `reasoning` delta field, so local users no longer lose access to the visible thought process output from reasoning models.
3. **[#36052 feat(core): worktree-based workspace switching with stash-based warp](https://github.com/anomalyco/opencode/pull/36052)** – New core feature that adds native CLI commands to create, list, and switch between git worktrees without manual directory navigation, streamlining multi-repo local workflows.
4. **[#36051 fix: preserve clipboard image paths for path-based MCP tools](https://github.com/anomalyco/opencode/pull/36051)** – Merged fix that retains file paths for pasted clipboard images, unlocking support for MCP tools that require local file access to process screenshots and images.
5. **[#36023 fix(runtime): upgrade Bun to canary to fix NAPI crash on exit](https://github.com/anomalyco/opencode/pull/36023)** – Merged runtime update that resolves 3 separate cross-platform exit crash reports affecting Windows, macOS, and Linux users.
6. **[#35976 fix(opencode): add --dir option to web/serve; use directory as worktree](https://github.com/anomalyco/opencode/pull/35976)** – New feature + bug fix that adds an explicit directory flag for the web UI, resolving 5 separate reported path-related bugs for workspace root detection.
7. **[#35982 fix(provider): improve prompt caching](https://github.com/anomalyco/opencode/pull/35982)** – Refactor that makes prompt caching behavior consistent across all AI SDK providers, eliminating lost cost savings and cache misses when users switch between model backends.
8. **[#36139 docs: expand LM Studio local provider guidance](https://github.com/anomalyco/opencode/pull/36139)** – Updated documentation that adds a dedicated reliability tips section for users running models locally via LM Studio, including troubleshooting steps for common connection issues.
9. **[#41452 fix(core): align Copilot response continuation](https://github.com/anomalyco/opencode/pull/41452)** – Open PR that aligns OpenCode’s VS Code Copilot behavior to match the official GitHub Copilot client, for a seamless transition for users switching between tools.
10. **[#40845 [beta] feat(app): redesign non-modal settings](https://github.com/anomalyco/opencode/pull/40845)** – Open beta PR that reworks the desktop app settings UI to be non-modal, with new dedicated Projects and Extensions views for simplified MCP and multi-server management.

## 5. Feature Request Trends
The highest-priority user feature directions for this period are:
1. Full Claude Code ecosystem parity, including the requested hooks system support, to reduce migration friction for users moving from competing tools
2. Expanded local model workflow support, including drag-and-drop/paste of images in the structured question tool UI, full reasoning parameter passthrough for Ollama/LMStudio, and clearer documentation for self-hosted model setups
3. Power user UX quality of life improvements, including a configurable prompt submission toggle to avoid accidental sends on enter, and persistent background session daemons with long-term memory recall
4. Greater transparency for the OpenCode Go subscription plan, including explicit public documentation of which models are hosted natively by OpenCode vs proxied from third-party providers.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community in the last 24 hours are:
1. OpenCode Go subscription instability, including multiple confirmed bugs introducing leading spaces in DeepSeek V4 Flash model IDs that cause 400 errors, un-synced Stripe payments that leave users with inactive subscriptions, and generic uninformative "terminated" session errors with no debug context
2. Widespread clipboard and copy-paste breakages across multiple surfaces (TUI, VS Code Mac extension, main desktop app) that break core daily workflow functionality
3. Persistent configuration gaps for custom OpenAI-compatible providers, where reasoning parameters like `reasoning.effort` are still silently dropped in headless mode despite multiple prior reported fixes
4. Silent failure edge cases for subagent execution, MCP tool exposure, and retry logic that leave users hanging with no visible error logs to debug root causes.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-08-10
Source: github.com/badlogic/pi-mono

---

## 1. Today's Highlights
This 24-hour update delivers resolutions for multiple long-standing local runtime and TUI stability bugs, alongside major progress on the official remote session wire protocol for Pi agent integrations. No new stable releases were published, but 10+ high-impact fixes (including the 2+ week old llama.cpp default model startup failure) are queued for the upcoming v0.84.2 maintenance release. The community also contributed a full batch of quality-of-life patches for extension developers and enterprise Copilot users, with zero critical unpatched open issues remaining for the current v0.84.1 release.

## 2. Releases
No new official Pi releases were published in the last 24 hours. All merged patches included in this digest will ship in the forthcoming v0.84.2 maintenance update targeted for 2026-08-11.

## 3. Hot Issues (10 Noteworthy Items)
1. **#6922 [CLOSED] Default llama.cpp model triggers "No models available" startup error** (https://github.com/earendil-works/pi/issues/6922): The highest-vote local runtime bug (14 👍, 9 comments) impacting all users that set llama.cpp as their default provider, now resolved after two weeks of active debugging.
2. **#7730 [OPEN] Excessive 50-110% CPU usage on macOS for long sessions** (https://github.com/earendil-works/pi/issues/7730): Top open UX bug with 6 👍, 6 comments, linked to long session context processing; maintainers are actively profiling the root cause with community-submitted crash traces.
3. **#7720 [OPEN] Request toggle to disable select-to-copy in fullscreen TUI mode** (https://github.com/earendil-works/pi/issues/7720): 4 comments from TUI power users, who report accidental text selection routinely overwrites active clipboard content.
4. **#7740 [OPEN] Broken custom tool render callbacks after `/reload` for session_start-registered MCP tools** (https://github.com/earendil-works/pi/issues/7740): 3 comments, a critical extension developer pain point that breaks UI rendering for MCP third-party tools.
5. **#7870 [CLOSED] z-ai/glm-5.2 context window incorrectly capped at 262k instead of 1M** (https://github.com/earendil-works/pi/issues/7870): Resolved within hours of reporting, allowing users of the popular Chinese GLM model to leverage its full 1M token context capacity.
6. **#7868 [CLOSED] TUI renderer hard crashes entire agent session when a line exceeds terminal width** (https://github.com/earendil-works/pi/issues/7868): High-severity stability bug that killed in-progress agent work mid-session, now patched to gracefully truncate overflow lines.
7. **#7864 [CLOSED] Extension exec timeout fails to force-kill SIGTERM-ignoring child processes** (https://github.com/earendil-works/pi/issues/7864): Patched to escalate to SIGKILL after the initial SIGTERM, eliminating orphaned background processes left hanging after extension execution timeouts.
8. **#7850 [CLOSED] GitHub Copilot login 429 rate limit failure for large organizations** (https://github.com/earendil-works/pi/issues/7850): Enterprise adoption blocker for orgs with 20+ licensed Copilot models, fully resolved by updated throttling logic.
9. **#7846 [CLOSED] Pi v0.84.x fails to start under Bun runtime** (https://github.com/earendil-works/pi/issues/7846): Compatibility fix for the ~20% of Pi users running on Bun, resolving a missing zlib dependency error.
10. **#7323 [CLOSED] `pi update --models` fails full refresh on transient network stalls** (https://github.com/earendil-works/pi/issues/7323): Patched with per-request retry logic, so individual failed catalog requests no longer break the entire model update workflow.

## 4. Key PR Progress (10 Important Items)
1. **#7072 [CLOSED] fix(coding-agent): cache llama.cpp model catalog** (https://github.com/earendil-works/pi/pull/7072): Resolves the race condition between async model refresh and startup config loading, ensuring default llama.cpp models load correctly on boot.
2. **#7866 [CLOSED] feat(tui): add `copyOnSelect` option to TuiAltScreen** (https://github.com/earendil-works/pi/pull/7866): Implements the requested select-to-copy toggle for TUI mode, defaulting to true for backwards compatibility.
3. **#7865 [CLOSED] fix(tui): add pageUp/pageDown handling to base SelectList** (https://github.com/earendil-works/pi/pull/7865): Adds missing keyboard navigation for long dropdown menus, eliminating the need to scroll line-by-line through 100+ model entries.
4. **#7344 [CLOSED] feat(protocol): add remote session wire protocol** (https://github.com/earendil-works/pi/pull/7344): Introduces a new transport-neutral `pi-protocol` package with CBOR framing for standardized remote agent session communication, enabling future official desktop and mobile Pi clients.
5. **#7858 [CLOSED] fix(coding-agent): route extension commands regardless of expandPromptTemplates** (https://github.com/earendil-works/pi/pull/7858): Fixes the broken documented extension API pattern that previously prevented `pi.sendUserMessage()` from triggering registered extension commands.
6. **#7857 [OPEN] feat(agent): expose `expandPromptTemplates` in `sendUserMessage`** (https://github.com/earendil-works/pi/pull/7857): Follow-up feature that gives extension developers full control over prompt template processing for queued user messages.
7. **#7856 [CLOSED] fix(ai): repair JSON-serialized structured tool arguments during validation** (https://github.com/earendil-works/pi/pull/7856): Adds automatic deserialization for double-serialized nested tool parameters from non-standard OpenAI-compatible providers, reducing tool execution failures by ~30% for self-hosted model users.
8. **#7851 [CLOSED] fix(provider): enable GitHub Copilot model policies sequentially** (https://github.com/earendil-works/pi/pull/7851): Replaces concurrent model enable requests with sequential calls to avoid 429 rate limits, supporting Copilot organizations with up to 100 available models.
9. **#7844 [CLOSED] Prevent bulk policy updates during Copilot login** (https://github.com/earendil-works/pi/pull/7844): Complementary fix that removes unnecessary bulk model enable calls from the login flow entirely, cutting Copilot login latency by 70%.
10. **#7840 [CLOSED] docs: add Aliyun Model Studio CLI (bailian-cli) to Related Tools** (https://github.com/earendil-works/pi/pull/7840): Expands official documentation to highlight ecosystem tooling optimized for Chinese-language AI developer workflows.

## 5. Feature Request Trends
1. **TUI UX Modernization**: Top community requests focus on full mouse support in fullscreen mode (including click-to-position in the input textarea), configurable scroll lock during streaming output, and granular control over auto-copy behavior.
2. **Local Runtime & Provider Expansion**: High demand for adding the Qwen China Individual Token Plan built-in provider, full first-class Bun runtime support, and automated catalog updates for models with 1M+ context windows.
3. **Core Extension System Enhancements**: Community proposals to port four widely used capabilities from the popular `oh-my-pi` fork into mainline: time-travel stream rules, subagent task/review tools, secondary-model advisor, and cross-session persistent memory.
4. **External Client Integration**: Following the new remote wire protocol merge, developers are requesting official bindings to embed Pi agents directly into third-party IDE

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-08-10
---
## 1. Today's Highlights
This 24-hour tracking window includes no new official Qwen Code releases, but sees strong momentum across core roadmap priorities, critical platform bug resolution, and CI/CD reliability improvements. Multiple P1 severity bugs for Windows desktop runtime crashes, improper `<think>` reasoning tag parsing for Qwen 3.7 Max, and session restore data loss have been addressed with merged early patches, while two high-impact RFCs for native multi-agent session coordination and deterministic workflow-based code review kicked off active architecture discussion from contributors. The core team pushed 20+ active pull requests focused on eliminating test flakiness, hardening shell command security, and expanding new user-facing features including cross-device local session control and browser WebBridge integration.

## 2. Releases
No new stable, pre-release, or nightly builds of Qwen Code were published in the 24-hour window ending 2026-08-10.

## 3. Hot Issues (10 Noteworthy Items)
1. **#8718 RFC: Native coordination for independent Qwen sessions** (P2, multi-agent roadmap): This high-priority roadmap proposal lets a lead interactive Qwen Code session dispatch 2-3 self-contained worker sessions, monitor correlated task states, and collect structured results without interrupting the user's active workflow. It is the core foundation feature for the upcoming multi-agent release, and has collected 8 comments from architecture contributors. https://github.com/QwenLM/qwen-code/issues/8718
2. **#7118 Windows standalone installer fails when PowerShell cannot resolve Get-FileHash** (P2, welcome-pr): This user-facing installation bug has 3 community upvotes, affecting Windows users on restricted corporate systems where PowerShell execution policies block access to the `Get-FileHash` cmdlet during SHA-256 archive verification. Maintainers have tagged it for external PR contributions to expand Windows installer compatibility. https://github.com/QwenLM/qwen-code/issues/7118
3. **#7585 Proposal: Add a direct external context provider profile** (P3, MCP/extensions scope): This integration proposal defines a provider-agnostic dual profile (on-demand / auto-recall) for private monorepo access, allowing Qwen CLI processes to retrieve shared repository context from administrator-managed external sources. It has 12 active comment threads discussing implementation constraints. https://github.com/QwenLM/qwen-code/issues/7585
4. **#8784 Streamable HTTP MCP optional SSE probe 404 kills full MCP connection** (P2, MCP scope): This interoperability bug breaks compatibility with MCP servers that do not implement the optional SSE notification endpoint, throwing a fatal connection failure instead of gracefully falling back to POST-only operation. 5 MCP ecosystem developers have weighed in on expected graceful degradation behavior. https://github.com/QwenLM/qwen-code/issues/8784
5. **#7449 Proposal: Define an enterprise external-memory integration profile** (P3, memory/extensions scope): This documentation-first enterprise design targets a standardized, zero-core-breaking-changes persistent external memory interface for self-hosted enterprise deployments, with incremental compatibility testing requirements. It has 7 comments from enterprise use case contributors. https://github.com/QwenLM/qwen-code/issues/7449
6. **#8769 Proposal: Rebuild /review Step 3–5 orchestration on the workflow engine** (P2, multi-agent roadmap): This enhancement plans to migrate the existing non-deterministic model-driven code review fan-out, verification, and reverse audit workflow to the official deterministic workflow engine, eliminating inconsistent code review outputs across runs. It has drawn 4 early comments from the workflow team. https://github.com/QwenLM/qwen-code/issues/8769
7. **#8823 Bug: Hidden unrecognized diagnostics mutate and evict transcript state** (P2, core/SDK scope): This core daemon bug causes unrecognized daemon events and session update types to corrupt user conversation history when normalized to debug events, leading to missing or garbled transcript data for Web Shell and CLI users. The issue is triaged for immediate patch work. https://github.com/QwenLM/qwen-code/issues/8823
8. **#8678 Fix: Preserve current session when a large restore times out** (P1, session management): This high-severity latency/memory bug fix has landed its first PR implementing configurable session restore timeouts and observability, preventing total session data loss when users load large, long-running conversation sessions across daemon restarts. https://github.com/QwenLM/qwen-code/issues/8678
9. **#8775 Proposal: Unify session reasoning loops on a Turn-based SessionRuntime** (P2, core session enhancement): This long-term architecture improvement aims to eliminate 6 separate independent reasoning loop implementations across TUI, headless, ACP bridge, and subagent surfaces, reducing technical debt and making cross-surface session behavior fully consistent. https://github.com/QwenLM/qwen-code/issues/8775
10. **#7167 Fleet Shepherd Dashboard** (auto-maintained CI/CD): The official auto-updated workflow dashboard tracks all auto-dispatch agent PR workloads across the main branch, showing real-time idle PR status and CI dispatch activity as of the 2026-08-09 nightly sync. https://github.com/QwenLM/qwen-code/issues/7167

## 4. Key PR Progress
1. **#8403 feat(audit): Add legacy code audit workflow**: This new user-facing feature adds a `/audit <directory> [--effort low|medium|high]` slash command, letting users run full standalone legacy codebase audits without attaching the scan to an existing PR or diff, using deterministic filesystem planning to avoid non-deterministic scan scope. https://github.com/QwenLM/qwen-code/pull/8403
2. **#8818 fix(core): Catch content-only thinking-tag leaks on all OpenAI-compatible providers**: This core fix extends existing Qwen 3.7 Max `<think>` tag parsing defense to all OpenAI-compatible LLM endpoints, preventing raw reasoning content from leaking into user visible output when third

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-08-10
---
## 1. Today's Highlights
The last 24 hours saw active finalization work for the imminent v0.9.6 runtime release, with 12 total updates to the core repository including a community-contributed new provider integration and a massive expansion of the official runtime HTTP API surface to support third-party client development. Community discussions focused on resolving longstanding UX pain points for CJK language users, context compaction transparency, and localization consistency for Chinese language interfaces, with multiple high-impact bug fixes merged to address top user complaints. No new full stable release was published publicly, but the v0.9.6 release branch has been fully staged for rollout.
---
## 2. Releases
No new public stable releases were issued in the 24-hour window. The v0.9.6 release candidate has been finalized and staged for deployment per [PR #5313](https://github.com/Hmbown/DeepSeek-TUI/pull/5313), defined as a subtractive runtime release that removes unnecessary runtime obstructions while preserving all existing functionality for budgets, deadlines, task cancellation, and provider state tracking.
---
## 3. Hot Issues (Top 10 Notable)
All items are sorted by community engagement volume:
1.  **[#4949](https://github.com/Hmbown/DeepSeek-TUI/issues/4949) Discussion: Chinese translation of "Constitution" — "宪法", "协作准则", or other options** (8 comments)
    This active localization discussion among Chinese-speaking contributors aims to select a semantically accurate, contextually appropriate translation of the core system governance document name, avoiding unintended ambiguity or semantic issues for the 30%+ Chinese user base of the project.
2.  **[#576](https://github.com/Hmbown/DeepSeek-TUI/issues/576) Feature Request: Improve Fork UX** (6 comments, closed after implementation)
    Users flagged the highly fragmented existing workflow that requires exiting the TUI to run CLI commands to fork sessions, with no native TUI entry point. The accepted resolution adds an interactive `/fork` command inside the TUI to browse and select historical sessions directly.
3.  **[#5293](https://github.com/Hmbown/DeepSeek-TUI/issues/5293) TUI: Make deny-by-default approval selection configurable and clearly explained** (4 comments, 1 👍)
    Users noted the v0.9.4 changed default selection on permission dialogs breaks established interaction muscle memory, leading to accidental denials of intentional actions. The open discussion is balancing security hardening goals with existing UX expectations to avoid usability regressions.
4.  **[#5096](https://github.com/Hmbown/DeepSeek-TUI/issues/5096) Compaction gain not visible** (3 comments)
    Users running `/compact` report the token counter status does not update after compaction completes, eroding user trust in context management functionality for local OpenAI-compatible endpoint deployments.
5.  **[#5034](https://github.com/Hmbown/DeepSeek-TUI/issues/5034) Switching providers can retain an unrelated default model** (3 comments)
    This widely reported bug causes silent failed inference calls: when users switch active providers, the default model field sometimes stays tied to the previous provider (e.g. leftover `gpt-5.5` value when switching to DeepSeek) leading to uncaught API errors.
6.  **[#5250](https://github.com/Hmbown/DeepSeek-TUI/issues/5250) Support saving multiple API keys across different providers** (2 comments)
    Power users working with multiple model vendors (DeepSeek, GLM, OpenAI) currently have to manually overwrite their single stored API key on every provider switch, a top-reported quality of life pain point.
7.  **[#5023](https://github.com/Hmbown/DeepSeek-TUI/issues/5023) IME Candidate Window Jumps / Unstable Position During Input** (2 comments)
    Critical accessibility bug for CJK users on Windows 11: the IME composition window shifts unexpectedly during fast text input in the TUI, severely interrupting daily writing workflows.
8.  **[#5314](https://github.com/Hmbown/DeepSeek-TUI/issues/5314) Copy message from context menu includes rail decorations** (1 comment)
    This small but annoying UX bug adds extra UI glyphs (role markers, line prefixes) to copied message content, requiring users to manually clean up pasted text after every use.
9.  **[#5047](https://github.com/Hmbown/DeepSeek-TUI/issues/5047) API keys silently persist only in the working repo plaintext** (1 comment)
    High-priority security flaw: API keys are occasionally saved in plaintext in the local working directory config instead of the global encrypted secret store, risking accidental exposure if the repository is pushed to a public remote.
10. **[#5239](https://github.com/Hmbown/DeepSeek-TUI/issues/5239) 1M context models trigger compaction only at 128K** (1 comment)
    Top user support question for users with access to 1M+ context window models: the hardcoded fallback context window limit ignores larger model capabilities, forcing unnecessary frequent context resummarization.
---
## 4. Key PR Progress (Top 10 High-Impact Updates)
1.  **[#5313](https://github.com/Hmbown/DeepSeek-TUI/pull/5313) chore(release): prepare v0.9.6**
    Staged the full v0.9.6 runtime release build, rebuilding the compaction system around a provider-aligned summary and handoff workflow to eliminate previous mailbox freezing issues.
2.  **[#5295](https://github.com/Hmbown/DeepSeek-TUI/pull/5295) feat: add Mistral AI as a first-class provider route**
    First-time contributor PR adding full native support for Mistral's official model platform, with default `mistral-code-latest` model support, accessible via CLI flag, environment variable, and config file.
3.  **[#5133](https://github.com/Hmbown/DeepSeek-TUI/pull/5133) feat(runtime-api): expose persistent goal-loop state and completion controls**
    Added new `/v1/threads/{id}/goal` endpoint to the runtime HTTP API, allowing managed clients (web/desktop apps) to read active session goal state and control its lifecycle directly.
4.  **[#5132](https://github.com/Hmbown/DeepSeek-TUI/pull/5132) Runtime API: expose verifier receipts and evidence beyond the aggregate counter**
    Added 3 new fleet run endpoints returning task-level verifier failure evidence, instead of only a generic failure counter, to simplify debugging of distributed fleet workflows.
5.  **[#5131](https://github.com/Hmbown/DeepSeek-TUI/pull/5131) feat: Runtime API memory endpoints — bounded inspection and lifecycle controls**
    Added `/v1/memory` routes for authorized clients to inspect active session memory, view provenance metadata, and apply lifecycle controls without requiring a separate external memory store.
6.  **[#5130](https://github.com/Hmbown/DeepSeek-TUI/pull/5130) feat(runtime-api): bounded MCP server configuration and lifecycle management**
    Added full CRUD endpoints for MCP server integrations, eliminating the need for users to manually edit TOML config files to add, remove, or modify tool servers.
7.  **[#5129](https://github.com/Hmbown/DeepSeek-TUI/pull/5129) feat(runtime-api): add skill lifecycle endpoints**
    Extended the runtime API to fully match all TUI skill management functionality, with endpoints for install, update, uninstall, trust marking, and audit of custom skills.
8.  **[#5301](https://github.com/Hmbown/DeepSeek-TUI/pull/5301) fix(tui): make compaction live and pressure-aware**
    Rewrote the compaction workflow to make manual `/compact` operations non-blocking, serialize operations with unique lifecycle IDs, and align auto-compaction thresholds for 128K, 272K, and 1M context window sizes.
9.  **[#5205](https://github.com/Hmbown/DeepSeek-TUI/pull/5205) Stabilize IME candidate positioning in Tabby**
    Fixed the jumping IME window bug for Tabby terminal users by detecting the `TERM_PROGRAM` environment variable, enabling low-motion rendering, and capping redraw cadence to avoid cursor position sampling errors.
10. **[#5306](https://github.com/Hmbown/DeepSeek-TUI/pull/5306) fix(release): validate crate publication order**
    Added a pre-flight release check that validates the 20 Rust crate publication order against locked Cargo metadata, to prevent version mismatches, duplicate publishes, and dependency inversion errors during deployment.
---
## 5. Feature Request Trends
1.  **TUI UX parity with CLI workflows**: Top requested native in-TUI implementations of existing CLI-only features, including interactive session forking, multi-session browsing, and permission dialog customization.
2.  **Full runtime API parity**: The community is driving completion of the runtime HTTP API surface to match all native TUI functionality, to support third-party cloud, web, and desktop managed client development.
3.  **Multi-provider usability polish**: Requests for native multi-API key storage, automatic per-provider model resolution, and user-configurable custom context window limits for non-standard self-hosted model endpoints.
4.  **Accessibility and localization polish**: High demand for stable IME support for CJK input methods, consistent cross-language term translation, and clean UI-text-free copy functionality for transcript content.
---
## 6. Developer Pain Points
1.  **Compaction black box behavior**: Users cannot see clear indicators of compaction success or token size gains, and the default 128K context window fallback ignores the capabilities of modern 1M+ context models, leading to wasted model capacity.
2.  **Fragmented multi-provider setup**: Single shared API key storage, broken provider-model sync on switch, and no native UI for common operations add unnecessary overhead for developers working across multiple LLM vendors.
3.  **Tool unreliability**: The file edit tool silently accepts invalid parameters and returns fake success states, and interrupted assistant outputs do not persist to the authoritative session storage, leading to lost work and 3-5x redundant edits for common code modification tasks.
4.  **Pipeline flakiness**: 12+ untriaged ignored tests in the codebase, flaky background verifier tests, and a permanently broken Claude PR review

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*