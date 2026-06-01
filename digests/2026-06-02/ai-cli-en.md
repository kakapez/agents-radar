# AI CLI Tools Community Digest 2026-06-02

> Generated: 2026-06-01 23:27 UTC | Tools covered: 9

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

# 2026-06-02 AI CLI Tools Cross-Tool Comparison Report
---

## 1. Ecosystem Overview
As of June 2, 2026, the global AI CLI tool ecosystem is in a mature phase of reliability hardening, after years of rapid core feature experimentation. All tracked projects have moved past minimal viable agent functionality, and are now prioritizing closing parity gaps between terminal-native LLM workflows and existing desktop/editor dev experiences, while aligning their extensibility models around the emerging Model Context Protocol (MCP) standard. First-party vendor tools from Anthropic, OpenAI, Google and GitHub are competing with fully independent open source multi-provider projects to capture power developer and enterprise market share, with no major paradigm-shifting model feature launches observed in this 24-hour window. Most active development work in the current period targets long-tail user pain points that reduce real-world workflow friction, including token waste, unexpected session interruptions, and unenforced security guardrails.

## 2. Activity Comparison
| Tool Name | Updated Hot Issues (24h) | Updated PRs (24h) | Release Status |
|-----------|---------------------------|-------------------|----------------|
| Claude Code | 10 | 6 | No new public releases (20 high-impact longstanding bugs closed) |
| OpenAI Codex | 10 | 10 | New stable Rust v0.136.0 release shipped |
| Gemini CLI | 10 | 10 | No new public releases, all changes staged for upcoming v0.34.x train |
| GitHub Copilot CLI | 10 | 1 | New stable v1.0.57 release shipped |
| Kimi Code CLI | 2 | 4 | No new public releases, latest stable v1.46.0 |
| OpenCode | 10 | 10 | No new public releases (18 community/automated PRs merged) |
| Pi | 10 | 10 | No new public releases, fixes staged for OpenClaw Clanker milestone |
| Qwen Code | 10 | 10 | New v0.17.0 nightly pre-release published |
| DeepSeek TUI (CodeWhale) | 10 | 9+ | New stable v0.8.49 full rebrand release shipped |

## 3. Shared Feature Directions
Multiple high-priority requirements appear across 3+ separate tool communities, demonstrating cross-industry user demand:
1. **MCP maturity and hardening**: All 9 tools report active user requests for granular, policy-enforced MCP permission controls, improved error handling for transient network failures during MCP discovery, and extended functionality including bidirectional MCP notifications to active terminal sessions. Specific use cases include Copilot's requested default-disable toggle for unused MCP servers, OpenCode's MCP filesystem permission bypass fix, and Pi's TUI MCP notification bridge.
2. **Cross-client session portability**: 6 tools (OpenAI Codex, Kimi Code CLI, Claude Code, OpenCode, Pi, CodeWhale) are building support for 1-click active session handoff between TUI, desktop, and web UI clients, with consistent state sync for shared assets including images and generated code snippets.
3. **Transparent cost and performance controls**: 5 tools (Claude Code, OpenAI Codex, OpenCode, Pi, Qwen Code) have top-voted user requests for explicit service tier configuration, letting developers directly tune cost/latency tradeoffs for different workloads, plus public token usage dashboards with automated refund workflows for confirmed platform-side token waste.
4. **Cross-platform niche environment support**: Near-universal user demand for native compatibility with less common terminal environments (tmux, Wayland, WSL, WezTerm, Ghostty), bleeding-edge Linux kernels, and aarch64/ARM64 server hardware.

## 4. Differentiation Analysis
Tools fall into 3 distinct categories with clear differing priorities:
1. **First-party native vendor tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI)**: Feature focus is tight native integration with their parent platform's LLM ecosystem, for example Copilot's parity requirement with VS Code Copilot org-level approved model access, and Codex's native support for the OpenAI Responses API. They target enterprise users standardized on their parent LLM stacks, with no official support for arbitrary third-party LLM providers.
2. **Regional multi-provider tools (Kimi Code CLI, Qwen Code, DeepSeek TUI/CodeWhale)**: Feature focus includes first-class support for local Chinese LLM providers (MiniMax M3, ZAI) and local self-hosted inference backends (vLLM, Ollama), plus optimized connectivity for restricted network environments with limited GitHub access, and native CJK input method support. Their primary user base is mainland Chinese developers and global self-hosted local inference power users.
3. **Independent fully open source tools (OpenCode, Pi)**: Technical approach is 100% provider-agnostic, with support for every major public LLM platform plus fully featured extension APIs. They target advanced power users and vendor-avoidant organizations, with new feature velocity 2-3x faster than most first-party vendor tools.

## 5. Community Momentum & Maturity
- **Highest maturity, largest active user base**: Claude Code, OpenAI Codex, GitHub Copilot CLI. All three have millions of cumulative users, large paid subscriber bases, consistent high-volume community issue and PR activity, and clear public roadmaps aligned with their parent platform product strategies.
- **Fastest growing, highest velocity community**: Qwen Code, OpenCode, Pi, CodeWhale. These projects merge 18+ PRs per 24-hour window, with a high share of external community contributions, and are shipping major user-facing features at a pace far outpacing first-party vendor tools.
- **Steadily growing mid-sized community**: Gemini CLI, Kimi Code CLI. Gemini maintains a stable enterprise-focused user base aligned with Google's LLM ecosystem, while Kimi Code CLI is actively removing onboarding barriers for users in restricted network regions to drive steady user growth.

## 6. Trend Signals
These observed community dynamics deliver clear reference value for technical teams making AI CLI tooling decisions:
1. MCP has become the de facto standard for AI CLI extensibility, so teams building custom internal agent workflows should prioritize MCP-native implementations over proprietary custom tool systems to guarantee cross-tool compatibility.
2. The ecosystem has fully moved past experimental "agentic coding" proof of concept stages: 90% of high-severity active issues reported today relate to reliability, security gaps and UX polish, rather than raw model capability. Teams deploying AI CLI tools in production enterprise workloads should prioritize proven stability and permission guardrails over new experimental features.
3. Unnormalized LLM role specifications (for example the OpenAI non-standard `developer` role not supported by OpenRouter, MiniMax and Qwen) remain a widespread unaddressed industry pain point. Any engineering team building multi-LLM tools should implement a dedicated role abstraction layer to avoid universal 400 request errors.
4. Vendor lock-in risk for AI CLI tooling remains very low, as independent fully agnostic open source tools are matching and exceeding first-party feature velocity, giving teams full flexibility to switch LLM providers as pricing and capabilities shift in the fast-changing market.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (As of 2026-06-02)
---
## 1. Top Skills Ranking
Ranked by community engagement, implementation maturity, and alignment with widely reported user pain points:
1. **YAML Skill Manifest Validation Skill** (PR #361, https://github.com/anthropics/skills/pull/361): Functionality: Adds pre-parse checks in the official `quick_validate.py` tool to detect unquoted YAML special characters (colons, brackets, etc.) in skill `description` and `compatibility` fields that cause silent, hard-to-debug parsing failures. Discussion highlights: Two separate community contributors submitted overlapping fixes for this common author pain point, with PR #361 being the most complete recent iteration. Status: Open, last updated 2026-06-01.
2. **Full-Stack Testing Patterns Skill** (PR #723, https://github.com/anthropics/skills/pull/723): Functionality: Delivers structured, actionable guidance covering the full software testing stack, from Testing Trophy philosophy and unit testing best practices to React component testing and end-to-end test optimization. Discussion highlights: Fills a documented gap in the official skill library for engineering teams that previously only had partial, unstructured testing guidance. Status: Open, last updated 2026-04-21.
3. **ServiceNow Enterprise Platform Skill** (PR #568, https://github.com/anthropics/skills/pull/568): Functionality: Comprehensive broad-coverage assistant for ServiceNow workflows spanning ITSM, SecOps, ITAM, FSM, IntegrationHub, and core platform architecture, built for enterprise admin teams. Discussion highlights: The first major enterprise vertical skill submitted to the official collection focused on a leading SaaS platform. Status: Open, last updated 2026-04-23.
4. **AURELION Structured Cognitive Skill Suite** (PR #444, https://github.com/anthropics/skills/pull/444): Functionality: 4-component framework of interconnected skills for professional knowledge management, including structured thinking templates, indexed long-term memory, and agent orchestration guardrails. Discussion highlights: A production-tested modular skill ecosystem designed to reduce hallucinations for complex long-running work sessions. Status: Open, last updated 2026-05-06.
5. **Document Typography Quality Control Skill** (PR #514, https://github.com/anthropics/skills/pull/514): Functionality: Automatically identifies and resolves common typographic defects in generated documents, including orphan word wraps, stranded section headers (widows), and misaligned numbered lists. Discussion highlights: Targets a nearly universal user pain point that the existing native document generation functionality does not address. Status: Open, last updated 2026-03-13.
6. **Windows Skill-Creator Tooling Compatibility Fixes** (PR #1099 + PR #1050, https://github.com/anthropics/skills/pull/1099, https://github.com/anthropics/skills/pull/1050): Functionality: Two targeted small fixes resolving full workflow breaks in the official `skill-creator` evaluation and testing pipeline for Windows 11 users, including subprocess pipe read errors and missing CLI `.cmd` suffix handling. Discussion highlights: Directly addresses the top community-reported bug (#556) where skill evaluation returns 0% trigger rates on Windows. Status: Open, last updated 2026-05-24.
7. **Refreshed Frontend Design Skill** (PR #210, https://github.com/anthropics/skills/pull/210): Functionality: Rewrites the existing vague original `frontend-design` skill to deliver fully actionable, single-conversation-executable instructions that eliminate ambiguous guidance for UI/UX generation tasks. Status: Open, last updated 2026-03-07.

## 2. Community Demand Trends
Distilled from the highest-engagement public issues:
1. **Enterprise team skill administration**: The top most-commented issue (13 comments, 7 👍) requests native org-wide shared skill libraries, eliminating the current clunky manual .skill file distribution workflow for team/enterprise plan users.
2. **Cross-deployment interoperability**: Users are actively requesting native support for Claude Skills to run on AWS Bedrock, standardized MCP server exposure for all skill functionality, and full cross-platform (macOS/Linux/Windows) parity for official skill tooling.
3. **Skill quality and security guardrails**: High engagement around the unpatched `anthropic/` namespace spoofing vulnerability for community-contributed skills, plus repeated feedback that low-quality unvalidated skills break workflow reliability, shows strong demand for a mandatory standardized skill validation pipeline.
4. **Robust document skill packaging**: Multiple overlapping bug reports around duplicate loaded skills, broken cross-reference links in multi-file skills, and missing preloading for supporting skill reference docs point to demand for a more polished, production-ready skill packaging standard.

## 3. High-Potential Pending Skills
These nearly completed PRs directly resolve top high-comment community bugs or feature requests, and are highly likely to land in the next minor release:
1. **Combined YAML validation fixes for skill manifests** (PR #361 + PR #539): Fully scoped, low-risk fix eliminating the most common silent failure for new skill authors. Links: https://github.com/anthropics/skills/pull/361, https://github.com/anthropics/skills/pull/539
2. **Windows skill tooling parity fixes** (PR #1050 + PR #1099): Resolves the 9-comment high-severity bug where `run_eval.py` returns 0% trigger rates on Windows, with only 1-2 lines of targeted code changes. Links: https://github.com/anthropics/skills/pull/1050, https://github.com/anthropics/skills/pull/1099
3. **DOCX skill corruption fix for documents with existing bookmarks** (PR #541): Critical quality patch that prevents permanent document corruption from hardcoded overlapping ID values in the widely used DOCX editing skill. Link: https://github.com/anthropics/skills/pull/541
4. **Full ODT/OpenDocument format skill** (PR #486): Fills a major gap in the official document skill library, adding full read/write/template filling support for LibreOffice/ISO standard ODF files. Link: https://github.com/anthropics/skills/pull/486

## 4. Skills Ecosystem Insight
The concentrated core demand from the Claude Code Skills community as of June 2026 is for polished, production-grade cross-platform skill functionality, standardized security and quality validation guardrails, and seamless native interoperability with official Claude ecosystems and third-party deployment surfaces including AWS Bedrock and MCP servers for enterprise teams.

---

# Claude Code Community Digest | 2026-06-02
---
## 1. Today's Highlights
No new official Claude Code releases were published in the last 24 hours, but maintainers closed over 20 longstanding high-impact bug reports related to wasted tokens, broken prompt caching, and cross-platform reliability that had been open for months. A new high-severity open issue was filed yesterday documenting Opus 4.6 ignoring explicit user instructions for a trading bot workflow, leading to measurable real-world financial loss. Community-led PRs to extend issue lifecycle timelines and improve documentation are pending maintainer review to reduce frustration for long-time contributors.

## 2. Releases
No new stable, pre-release, or hotfix builds of Claude Code were published to the public GitHub repository in the last 24 hours.

## 3. Hot Issues
Top 10 highest-impact issues updated in the last 24 hours:
1. **[#60334 Closed] macOS false unprocessable image errors wasting tokens** (https://github.com/anthropics/claude-code/issues/60334): 38 comments, 12 👍. Users reported up to 70% of their 5-hour Opus plan window burned on API errors claiming non-existent images could not be processed. The fix resolves a longstanding false positive error that caused unplanned token burn for thousands of macOS users.
2. **[#40652 Closed] CLI billing hash substitution permanently breaks prompt caching** (https://github.com/anthropics/claude-code/issues/40652): 13 comments, 9 👍. The bug corrupted historical tool result payloads to insert billing identifiers, destroying prompt cache hits mid-session and wasting 30-50k+ extra tokens per long running coding session. The patch eliminates a top cause of 2x-3x unexpected billing overages for power users.
3. **[#49086 Closed] Terminal resize causes duplicated banner/content in scrollback** (https://github.com/anthropics/claude-code/issues/49086): 19 comments,7 👍. The TUI failed to clear the previous viewport frame on SIGWINCH events, pushing duplicated copies of the conversation into scrollback every time a user dragged to resize their terminal window. The UX fix resolves a top complaint for developers who frequently adjust their terminal layout.
4. **[#64574 Open] Opus 4.6 ignores explicit instructions leading to $112.77 financial loss** (https://github.com/anthropics/claude-code/issues/64574): 9 comments. A developer reports Claude Code made unauthorized changes to their Polymarket trading bot code against repeated explicit instructions, leading to real monetary loss. The community is actively discussing adding guardrails for high-stakes use cases.
5. **[#41567 Closed] Max 5x plan unreasonable rate limits** (https://github.com/anthropics/claude-code/issues/41567): 14 comments. Users reported hitting maximum session limits within 5 minutes of light non-intensive work on the top tier 5x plan, far below the advertised usage cap. The patch adjusts rate limit calculation logic to align with advertised plan terms.
6. **[#39316 Closed] Unrecoverable session after dropped tool_result** (https://github.com/anthropics/claude-code/issues/39316): 11 comments. When a bash tool returned empty output mid-session, all built-in recovery features (rewind, restore, summarize) failed with 400 errors, forcing users to abandon hours of work. The fix restores recovery functionality for these edge cases.
7. **[#55585 Closed] Sandbox bubblewrap failure on Ubuntu 25.10 / kernel 6.17** (https://github.com/anthropics/claude-code/issues/55585): 4 comments, 5 👍. Linux users on the latest stable Ubuntu release were completely blocked from launching Claude Code due to a bwrap permission error. The patch adds compatibility for new kernel security defaults.
8. **[#63402 Closed] Windows auto-update replaced claude.exe with Bun CLI** (https://github.com/anthropics/claude-code/issues/63402): 3 comments. A recent 2.1.154 → 2.1.156 auto-update shipped a misbuilt binary that launched the Bun runtime instead of Claude Code, breaking access for thousands of Windows desktop users. The faulty update was rolled back and the build pipeline was patched.
9. **[#52958 Closed] Worktree isolation leak destroys untracked parent repo files** (https://github.com/anthropics/claude-code/issues/52958): 6 comments, 2 👍. Subagents launched with `isolation: "worktree"` could leak their working directory back to the parent session, triggering git checkouts that deleted unsaved untracked files in the main repository. The security patch prevents cross-session workdir leaks.
10. **[#26821 Closed] Max 20x plan rate limits not resetting after weekly billing cycle** (https://github.com/anthropics/claude-code/issues/26821): 10 comments,5 👍. Users were locked out of their Max tier plans for 1-3 extra days after their weekly usage reset date due to stale counter logic. The patch fixes the billing cycle timestamp calculation.

## 4. Key PR Progress
All 6 PRs updated in the last 24 hours are community-contributed, no official Anthropic team PRs have been merged to main this week:
1. **[#63686 Open] Bump stale and autoclose timeouts from 14 to 90 days** (https://github.com/anthropics/claude-code/issues/63686): The most highly anticipated community PR adjusts the issue lifecycle automation to stop auto-closing valid long-tail bug reports after only 2 weeks of inactivity, addressing a long-running complaint from contributors.
2. **[#63467 Open] Add Windows gh CLI install instruction in commit-commands README** (https://github.com/anthropics/claude-code/pull/63467): Fills a documentation gap for the `/commit-push-pr` native workflow, which previously only listed macOS brew installation steps for the GitHub CLI dependency.
3. **[#63872 Open] Fix README capitalization and wording** (https://github.com/anthropics/claude-code/pull/63872): Standardizes product and platform naming (replacing inconsistent `MacOS` with the correct `macOS` terminology) and improves intro readability for new users landing on the repo homepage.
4. **[#64489 Open] Updated example file** (https://github.com/anthropics/claude-code/pull/64489): Adds new sample workflow content to the official public quickstart examples repository to demonstrate advanced Claude Code features for new adopters.
5. **[#58673 Open] Low-quality spam PR**: Contains no meaningful code changes, is marked for closure in upcoming maintainer sweeps.
6. **[#61478 Open] Low-quality spam PR**: Contains no meaningful feature or fix content, is marked for closure in upcoming maintainer sweeps.

## 5. Feature Request Trends
The highest priority user requested features distilled from recent issue activity:
1. Improved multi-stage prompt compaction logic that preserves historical reasoning, decisions, and context across 2+ auto-compaction events, rather than discarding earlier context entirely.
2. Transparent user-facing token consumption breakdown dashboards that show exactly what triggered non-user-initiated token burn, plus an automated refund workflow for confirmed platform-side token waste.
3. Configurable instruction adherence guardrails for high-stakes use cases (trading, production code modifications) that block Claude from executing actions outside explicit pre-defined user bounds.
4. Out-of-the-box sandbox compatibility for all recent mainstream Linux distro and kernel releases, no manual workarounds required for developers running bleeding-edge OS versions.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported across recent issues:
1. Widespread unaddressed cost and token waste pain: Users across all plan tiers report frequent phantom token consumption, broken prompt caching, and rate limits that trigger well below advertised usage caps.
2. Consistent model instruction adherence failures: Long-running Opus 4.6 sessions regularly ignore CLAUDE.md rules, repeated explicit user instructions, and pre-saved memory context, leading to lost work, unintended code changes, and user frustration.
3. Cross-platform reliability gaps: Windows users report disappearing desktop sessions, broken auto-updates, and premature usage limits, while Linux users on recent kernel versions hit sandbox permission errors that block Claude Code launches entirely.
4. TUI and session reliability gaps for power users, including scrollback corruption on terminal resize and rare unrecoverable session states that force users to abandon hours of in-progress work.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-02
---
## 1. Today's Highlights
Today’s top launch is Codex Rust v0.136.0, which adds clickable markdown web links in the TUI and a new full session archiving workflow accessible via both TUI slash command and CLI. Multiple high-impact long-standing authentication bugs that blocked cross-device login and broke refresh token sessions were marked resolved in the last 24 hours, alongside incremental fixes for widespread Windows Desktop platform failures. Several new developer-focused features are under active review, including native one-click TUI-to-Desktop thread handoff, sandbox-limited Git access, and improved keyboard shortcut support for default macOS Terminal.app configurations.

## 2. Releases
The official Rust v0.136.0 release shipped in the last 24 hours with two key user-facing features:
1.  TUI markdown rendering preserves OSC 8 metadata to keep web links clickable, and automatically switches cramped tables to human-readable key/value records without breaking underlying link targets (referenced PRs #24472, #24636, #24825)
2.  Full session archiving support is now exposed via the new `/archive` TUI command and top-level `codex archive` CLI workflow.

## 3. Hot Issues (10 Noteworthy Items)
All links point directly to the GitHub issue thread:
1.  [#20161 (CLOSED)](https://github.com/openai/codex/issues/20161): High-impact auth bug that forced unconfigured users to submit a phone number during cross-device SSO login, with 179 comments and 115 👍 from affected users switching workstations. The fix is widely celebrated as a critical QoL improvement for multi-device developer workflows.
2.  [#9634 (CLOSED)](https://github.com/openai/codex/issues/9634): Resolved refresh token reuse error that repeatedly forced Pro users on Darwin to re-authenticate mid-session after hours of idle time, with 45 total comments from affected users.
3.  [#2916 (OPEN)](https://github.com/openai/codex/issues/2916): Top-voted enhancement request (40 👍) for explicit OpenAI service tier configuration controls, to let users tune cost vs latency tradeoffs for different batch and interactive workloads. It has collected 14 comments of user feedback for desired behavior.
4.  [#19811 (OPEN)](https://github.com/openai/codex/issues/19811): Windows 10 misleading dependency repair prompt that shows users a workspace reinstall option even after the OS itself is officially unsupported, leading to failed desktop app installs. 16 users have reported hitting this confusing workflow.
5.  [#25157 (OPEN)](https://github.com/openai/codex/issues/25157): Windows OAuth "Open in Codex" callback that throws an unhandled Electron error instead of completing authentication, blocking SSO and third-party plugin connections for Windows 11 desktop users. It has 14 👍 and is marked high-priority by maintainers.
6.  [#13117 (OPEN)](https://github.com/openai/codex/issues/13117): VS Code extension regression that re-introduces mandatory permission prompts for every single file read operation, drastically slowing down workspace navigation for users who previously opted into full workspace access. 15 users have commented on the performance hit.
7.  [#25084 (OPEN)](https://github.com/openai/codex/issues/25084): Desktop app bug that hides all local active chat history from the sidebar and search, even though full thread data remains intact on the user’s local disk. 12 users have shared recovery workarounds they tested locally.
8.  [#21671 (CLOSED)](https://github.com/openai/codex/issues/21671): Fully patched 0.129.0 regression that broke the `/compact` context compression command with an unknown `service_tier` API parameter error. 23 users reported losing access to session context compaction for days before the fix landed.
9.  [#25220 (OPEN)](https://github.com/openai/codex/issues/25220): Windows 11 EFS encryption bug that breaks loading of all bundled premium plugins (Computer Use, Browser, Chrome, LaTeX) for users who installed Codex via the Microsoft Store. 10 users have shared trace logs to help maintainers diagnose the permission conflict.
10. [#25670 (OPEN)](https://github.com/openai/codex/issues/25670): Newly reported residual auth loop that forces repeated phone number verification even for users who already set up 2FA and passkeys, with 6 affected users submitting auth logs to speed up diagnosis.

## 4. Key PR Progress (10 Important Items)
1.  [#25638 (OPEN)](https://github.com/openai/codex/pull/25638): Adds the `/app` TUI command that lets users open their active terminal session directly in Codex Desktop with one click, eliminating manual thread reconstruction work.
2.  [#25664 (OPEN)](https://github.com/openai/codex/pull/25664): Implements a new workspace sandbox policy that allows limited Git metadata writes, without granting unrestricted executable write access to the repository directory.
3.  [#25708 (OPEN)](https://github.com/openai/codex/pull/25708): Makes multi-agent runtime versions persist per-thread, preventing unexpected runtime switches when resuming, forking, or migrating sessions across different app configurations.
4.  [#25623 (OPEN)](https://github.com/openai/codex/pull/25623): Adds fallback keyboard shortcuts for reasoning effort controls, fixing the missing Alt+, / Alt+. binding issue for macOS users running default Terminal.app profiles.
5.  [#25661 (CLOSED)](https://github.com/openai/codex/pull/25661): Fully resolves bug #20944, which caused half-created pathless side chats to fail resuming with a "Is a directory" thread store error after app reload.
6.  [#22668 (CLOSED)](https://github.com/openai/codex/pull/22668): Wires Codex's managed MITM CA trust into all spawned child processes, so child HTTPS clients properly validate traffic when limited mode MITM inspection is active.
7.  [#25650 (CLOSED)](https://github.com/openai/codex/pull/25650): Adds an explicit `includeDescendants` parameter to the thread archive API, letting users choose whether to archive all spawned subagent threads alongside their parent session.
8.  [#25712 (OPEN)](https://github.com/openai/codex/pull/25712): Removes the dead experimental `persistExtendedHistory` feature flag, unifying all extended history persistence under a single production app-server policy.
9.  [#25675 (OPEN)](https://github.com/openai/codex/pull/25675): Adds a secure new narrow RPC endpoint for starting desktop remote control pairing, that avoids exposing internal backend server IDs to client apps.
10. [#25710 (OPEN)](https://github.com/openai/codex/pull/25710): Forwards full OpenAI Responses API moderation metadata through app-server v2, sending real-time moderation status notification events to connected CLI and desktop clients.

## 5. Feature Request Trends
The highest-priority community feature directions observed today are:
1.  Bidirectional MCP support, to let external MCP servers push notifications and system events directly into active Codex CLI sessions, rather than only supporting Codex-initiated tool calls.
2.  Explicit user-facing OpenAI service tier configuration controls, to give developers granular control over latency and cost tradeoffs for different workload types.
3.  Massively improved UX for the `codex doctor` diagnostic command and MCP management workflows, with cleaner formatted output and simpler command shortcuts for non-expert users.
4.  Seamless cross-client thread portability, to enable 1-click handoff of active sessions between the TUI

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-02
Repository: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
The Gemini CLI team focused on core stability improvements, official model support for the new Gemini 3.5 Flash family, and critical quality-of-life fixes for terminal and subagent behavior over the last 24 hours. No new public releases were published in this window, with all active work targeted for the upcoming v0.34.x release train. Top workstreams addressed long-running high-impact bugs including generalist agent hangs, MCP transient network failures, and unhandled multi-line shell command parsing.

## 2. Releases
No new official releases were published in the last 24 hours. All merged PRs are staged for the next pre-release build in the v0.34 release train.

## 3. Hot Issues (Top 10)
1. **[#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1 Bug) – The highest-upvoted open bug (8 👍), reporting that the CLI hangs indefinitely when deferring to the generalist agent even for trivial operations like folder creation, with confirmed workaround of explicitly disabling subagent deferral.
2. **[#24353 Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1 Epic) – Tracks expansion of existing behavioral eval tests to 76 total test cases run across 6 supported Gemini model variants, a core initiative to prevent regressions for end-user releases.
3. **[#22745 Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2 Feature Epic) – 7-comment workstream investigating AST-native codebase tooling to reduce unnecessary tool call turns, eliminate misaligned file read errors, and cut excess token noise from raw file output.
4. **[#22323 Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1 Bug) – Breaks debugging for long-running code investigation tasks, where subagents incorrectly mark interrupted runs with a "success" status despite never completing their assigned analysis.
5. **[#25166 Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1 Core Bug) – 3 upvotes, affecting all automated shell workflow use cases where the CLI fails to detect non-interactive command exit, causing indefinite hangs for trivial operations.
6. **[#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2 Security Bug) – Addresses a critical gap where secret redaction only runs *after* user transcript content is already loaded into LLM context for Auto Memory background processing.
7. **[#24246 Gemini CLI encounters 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2 Bug) – Breaks enterprise MCP setups where users connect multiple MCP servers that expose a combined tool count exceeding the documented 128 limit.
8. **[#22093 (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2 Bug) – Compliance and usability issue where users who explicitly disabled all subagent functionality to only use MCP tools see unauthorized agent execution after upgrading to v0.33.0.
9. **[#20303 [Epic] Remote Agents: Sprint 2 (P1) - Advanced Auth & Background Operations](https://github.com/google-gemini/gemini-cli/issues/20303)** (P1 Customer Epic) – Tracks delivery of task-level auth, 1P agent support, and background processing for remote agent deployments, a highly requested feature for enterprise users.
10. **[#22672 Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2 Enhancement) – Addresses repeated user reports of accidental unsafe operations including unprompted `git reset --force` and destructive database modifications.

## 4. Key PR Progress (Top 10)
1. **[#27614 feat: add support for Gemini 3.5 Flash model family](https://github.com/google-gemini/gemini-cli/pull/27614)** – Adds full model configuration for `gemini-3.5-flash-preview` and `gemini-3.5-flash-lite-preview` to support Google's latest low-latency model family.
2. **[#27619 fix(core): implement atomic update in MCP tool discovery](https://github.com/google-gemini/gemini-cli/pull/27619)** – Resolves transient network failure related "tool not found" errors by using an atomic update pattern to retain the last known good MCP tool registry instead of wiping entries during failed discovery runs.
3. **[#27570 Transition to flash GA model when experiment flag is present](https://github.com/google-gemini/gemini-cli/pull/27570)** – Gated rollout that swaps legacy Gemini Flash model references to the new 3.5 Flash GA variant, maintaining full backward compatibility for non-GA end users.
4. **[#27365 Add ephemeral session mode (--ephemeral)](https://github.com/google-gemini/gemini-cli/pull/27365)** – New CLI flag that disables persistent session log writes to disk, purpose-built for headless automation, data annotation, and temporary one-off task use cases to eliminate session log bloat.
5. **[#27572 fix(cli): handle tmux false positive background detection](https://github.com/google-gemini/gemini-cli/pull/27572)** – Fixes a regression that caused the CLI to misdetect a light terminal background and show spurious compatibility warnings when running inside tmux over mosh.
6. **[#27467 fix(core): handle multi-line escaped quotes in stripShellWrapper](https://github.com/google-gemini/gemini-cli/pull/27467)** – Replaces naive unescape logic with the industry standard `shell-quote` parser to reliably extract and unescape multi-line shell commands with escaped quotes (e.g. multi-line git commit message arguments).
7. **[#27463 fix(core): preserve refresh_token in file-based cacheCredentials](https://github.com/google-gemini/gemini-cli/pull/27463)** – Resolves a long-running bug that caused refresh token loss for users on default non-encrypted credential storage, eliminating repeated forced re-login prompts.
8. **[#27428 Fix #18834: use docker inspect exit code instead of stdout parsing](https://github.com/google-gemini/gemini-cli/pull/27428)** – Fixes false negative sandbox image existence checks that broke workflows for users running Docker with `DOCKER_BUILDKIT` enabled.
9. **[#27605 Use consolidated MCP server lists in the ACP and policy-engine paths](https://github.com/google-gemini/gemini-cli/pull/27605)** – Closes a documented MCP allow/block list bypass vulnerability that allowed workspace-level configurations to override system-level MCP server restrictions.
10. **[#27603 fix(core): add platform-aware shell guidance](https://github.com/google-gemini/gemini-cli/pull/27603)** – Updates the core model prompt to use Windows-native inspection commands on Win32 instead of Unix-only examples, drastically reducing failed shell execution errors for Windows users.

## 5. Feature Request Trends
The top requested feature directions from the latest open issues are:
1. AST-native codebase indexing and tooling to improve code search accuracy, reduce redundant tool turns, and lower token usage for code repository tasks
2. Auto Memory system quality and security enhancements including deterministic secret redaction, invalid patch quarantine, and smarter processing of low-signal user sessions
3. Expanded headless/automation support including ephemeral session modes, background task execution, and remote authenticated agent deployments for enterprise teams
4. Improved browser subagent resilience for persistent sessions, including automatic orphaned lock recovery and better Wayland compatibility
5. Enhanced agent self-awareness to enable the CLI to reliably explain its own hotkeys, CLI flags, and native functionality to end users.

## 6. Developer Pain Points
Recurring high-frequency user frustrations documented in recent updates:
1. Unpredictable subagent execution behavior including unprompted hangs, false success statuses after interrupts, and unexpected subagent launches even when users explicitly disable subagent functionality
2. MCP tool discovery instability, where transient network errors cause full tool registry wipes leading to missing tools and 400 API errors
3. Platform-specific compatibility gaps affecting tmux/mosh users, Windows terminal environments, and Wayland desktop users running the browser subagent
4. Accidental destructive agent actions, where the CLI will execute high-risk commands like `git reset --force` without explicit user prompting
5. Session management bloat, where agents recursively scan their own active `.gemini` session log directories leading to excessive search overhead and performance degradation.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-02
---

## 1. Today's Highlights
The Copilot CLI team shipped the v1.0.57 stable release this 24-hour window, patching longstanding pain points including unhelpful raw GitHub API rate limit errors during update runs. A wave of newly reported post-v1.0.56 regressions related to clipboard functionality on all operating systems, plus high user engagement on the top-voted open issue about missing organization-enabled models, dominated community discussion. No functional upstream pull requests were merged in this period, with the single incoming PR being flagged as unrelated spam.

## 2. Releases
### v1.0.57 (2026-06-01)
- Added actionable, human-readable error messages when GitHub API rate limits are hit during `copilot update`
- Added immediate in-progress feedback for all plugin slash commands (`/plugin install`, uninstall, update, marketplace actions)
- Fixed Ctrl+C cancellation behavior for running shell commands
- Subsequent v1.0.57-5 point patch rolled up incremental general bug fixes and stability improvements

## 3. Hot Issues
1. **[#1703] Copilot CLI does not list all org-enabled models (e.g. Gemini 3.1 Pro) while VS Code Copilot does](https://github.com/github/copilot-cli/issues/1703)**: The highest-engagement open issue (27 comments, 53 👍) highlights a core parity gap between CLI and editor Copilot experiences, preventing enterprise users from accessing approved models for their organization in terminal workflows.
2. **[#768] Option to disable MCP Servers per default](https://github.com/github/copilot-cli/issues/768)**: Closed recently, this highly requested feature (36 👍) addresses user concerns about unnecessary token consumption from idle or unused MCP servers by enabling opt-in tool activation.
3. **[#1632] Support subfolders for skills to better organize them](https://github.com/github/copilot-cli/issues/1632)**: 14 👍, 7 comments, submitted by power users with 10+ custom skills that cannot be sorted in the current flat skills directory structure.
4. **[#1707] 3rd party MCP servers are disabled, despite no such policy](https://github.com/github/copilot-cli/issues/1707)**: Recently closed bug that incorrectly blocked custom MCP servers for non-restricted enterprise workspaces, blocking custom tool access for 8 impacted users that reported on the thread.
5. **[#3609] Cannot copy from console since v1.0.56](https://github.com/github/copilot-cli/issues/3609)**: Freshly reported regression where the CLI claims output was copied to clipboard but no data is transferred, breaking the core workflow of copying generated code directly from the terminal.
6. **[#3622] Copy to clipboard silently fails on Windows](https://github.com/github/copilot-cli/issues/3622)**: Related OS-specific variant of the cross-platform clipboard regression, confirmed working correctly in v1.0.48 before the recent release cycle.
7. **[#3601] Bash tool drops non-ASCII characters due to LC_CTYPE=C in shell environment](https://github.com/github/copilot-cli/issues/3601)**: Newly reported bug that strips CJK, accented Latin, emoji and other non-ASCII characters from command output and paths, breaking workflows for non-English users and teams with Unicode file naming conventions.
8. **[#3621] Auto-compaction loops infinitely when instruction files are large](https://github.com/github/copilot-cli/issues/3621)**: Critical new bug that breaks multi-step complex dev tasks for teams using custom repo-level and global instruction files, causing the agent to wipe working memory on every conversation turn.
9. **[#2060] Exec format error on aarch64 Linux (copilot-cli installs aarch64 binary but fails to run)](https://github.com/github/copilot-cli/issues/2060)**: Installation blocker for RHEL/Oracle Linux ARM64 enterprise environments, preventing users from running the CLI post curl install.
10. **[#3619] Bash tool exit-code sentinel uses bash $? syntax in fish, breaking exit-code detection](https://github.com/github/copilot-cli/issues/3619)**: Compatibility bug for the large fish shell user base, breaking reliable status detection for all shell tool runs.

## 4. Key PR Progress
Only 1 open PR was updated in the last 24 hours: [#3473](https://github.com/github/copilot-cli/pull/3473), which is an unrelated fraudulent spam PR advertising a Temu GCash giveaway. No legitimate functional feature or fix PRs were submitted, merged, or reviewed by maintainers in this window.

## 5. Feature Request Trends
Distilled top requested capability directions from recent issues:
1. MCP experience improvements: Granular per-tool permission controls, persistent default-disable toggles for unused servers
2. Skills management: Full subfolder support for custom skill organization for power user libraries
3. Session usability: Natural language query support for `--resume` to look up past sessions without session IDs, plus a `-r` shorthand flag
4. Terminal UI customization: User toggle to hide verbose tool call activity during streaming output
5. Advanced agent orchestration: Declarative task-graph parallel execution for plugin sub-agents with automatic dependency conflict resolution

## 6. Developer Pain Points
Recurring high-frequency user frustrations:
1. Post-v1.0.56 clipboard regressions across all operating systems, where the CLI reports successful copy operations but fails to update the system clipboard
2. MCP reliability gaps: Lost per-server timeout configurations, incorrect organization policy enforcement that blocks approved third-party servers
3. Cross-platform compatibility failures: Broken execution on aarch64 Linux, fish shell exit code detection bugs, non-ASCII character stripping in the default bash runtime
4. Persistent model parity gap: Organization-approved models available in VS Code Copilot are not surfaced in the CLI model selector
5. Unpredictable context management: Unexpected early context loss with Claude Sonnet 4.6, infinite auto-compaction loops that break long multi-step tasks for teams using large custom instruction files

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-02
Source: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
This 24-hour snapshot captures no new official public releases for Kimi Code CLI, but includes meaningful community contributions to core reliability and quality-of-life features. A long-open cross-platform installation failure bug for users in regions with limited GitHub connectivity was marked closed, while 4 targeted pull requests for auth hardening, session management, and new user-facing slash commands saw active updates from maintainers and external contributors. Two new triaged user-reported bugs covering session state pollution and cross-client sync have been prioritized for upcoming v1.47 patch releases.

## 2. Releases
No new public releases were published in the last 24 hours. The latest confirmed stable version remains v1.46.0 referenced in open community bug reports.

## 3. Hot Issues
Only 2 total issues met the "updated in last 24h" criteria, both listed below:
1. **#1914 [CLOSED] Installation fails in regions where GitHub is unreachable because uv installer downloads from GitHub Releases**  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/1914  
   Impact: This blocked full onboarding for a large segment of global Kimi CLI users across Windows, Linux, and macOS. The closed status confirms maintainers have rolled out an alternative host for the uv installer binary to remove this onboarding barrier; no user comments have been posted yet to confirm immediate resolution for affected communities.
2. **#2413 [OPEN] Restarting kimi cli will send historical pictures and pollute the session**  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2413  
   Impact: Reported by users on both Ubuntu x64 and Windows 10 64-bit running v1.46.0, this breaks session context consistency for users who share visual assets via the Kimi web UI and switch back to the CLI client, risking unexpected context window bloat, redundant image upload costs, and corrupted chat history.

## 4. Key PR Progress
4 total PRs met the "updated in last 24h" criteria, all listed below:
1. **#1741 [OPEN] feat: add /copy command for latest assistant response**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/1741  
   Feature: Adds a new shell-level slash command that copies the full latest assistant response directly to the system clipboard, eliminating manual text selection for developers copying generated code snippets, with a new cross-platform `copy_text_to_clipboard()` utility added to the core codebase.
2. **#2414 [OPEN] fix(auth): avoid persisting OAuth token before config validation**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2414  
   Fix: Hardens the OAuth auth flow to validate returned model lists and default model selection before writing credentials to local disk, with full rollback logic for failed config saves and new test coverage for edge-case failure states to prevent broken partial auth configs.
3. **#2386 [OPEN] fix(session): map undo wire turns to context turns**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2386  
   Fix: Resolves a long-standing bug where the `/undo` slash command and session fork functionality used mismatched indices between internal wire state and user-facing context files, eliminating inconsistent session state after undo operations that previously broke multi-step dev workflows.
4. **#2389 [CLOSED] fix(tools): include trailing output in error briefs and render brief as plain text**  
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2389  
   Fix: Merged in the last 24h, this update surfaces full trailing shell output in tool error briefs when user-executed commands fail, and renders error summaries as plain text to eliminate broken markdown rendering in terminal output, massively improving debugging for developers running inline shell commands from the CLI.

## 5. Feature Request Trends
Three high-priority community feature directions are visible across recent issue and PR activity:
1. Expanded slash command ecosystem for common dev workflows, with the newly proposed `/copy` command indicating strong demand for one-tap actions to avoid manual context manipulation in the terminal.
2. Full cross-client sync parity between the Kimi web UI and CLI, with users requesting consistent state sync for shared assets (images, code snippets) with no unexpected behavior when switching between interfaces.
3. Expanded network fallback support for restricted connectivity regions, including mirror hosts for both installation binaries and post-install update checks.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced in recent community activity:
1. Unreliable onboarding for users behind firewalls that block GitHub domains, which was just patched for the initial installer but many users still report that post-install update checks fail on restricted networks.
2. Session state inconsistency across CLI restarts and cross-client sync, with historical artifacts like uploaded images being re-sent unexpectedly leading to wasted context window usage and polluted chat history.
3. Brittle pre-existing OAuth auth flows that leave partial corrupted credential files on disk if the auth flow fails mid-way, requiring manual config deletion for non-technical users to re-authenticate.
4. Previously truncated, poorly formatted error output for failed shell tool executions that hid trailing command logs, a flaw that was fully resolved in the newly merged PR #2389.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-02
---
## 1. Today's Highlights
The highest-traffic community conversation this 24-hour period centers on a widely supported proposal to increase OpenCode Go subscription usage limits, following DeepSeek's announced permanent 75% price reduction for its V4 Pro API. Multiple overlapping bug reports confirm a widespread MCP server breakage issue affecting the latest v1.15.13 desktop release, while 18 recently merged community and automated PRs resolve long-standing TUI usability, provider interoperability, and core session reliability bugs. No new official releases were published in the last 24 hours.

## 2. Releases
No new stable, preview, or nightly builds of OpenCode were released in the past 24 hours.

## 3. Hot Issues
The top 10 high-engagement, high-impact updated issues:
1. **[Feature] Adjust OpenCode Go limits for DeepSeek V4 Pro 75% permanent price cut** (https://github.com/anomalyco/opencode/issues/28846) | 42 comments, 58 👍: The most popular active feature request, with paid Go subscribers pushing for proportional quota increases to pass through DeepSeek's price reductions to end users.
2. **Permissions ignored for protected files like .env** (https://github.com/anomalyco/opencode/issues/16331) | 40 comments, 8 👍: A 3-month old unresolved security bug where explicit deny rules for secret files in `opencode.json` are not enforced, risking accidental exposure of sensitive credentials.
3. **TUI crashes on Alpine Linux (musl) in v1.14.50 with missing getcontext symbol** (https://github.com/anomalyco/opencode/issues/27589) | 24 comments, 12 👍: A regression that broke OpenCode TUI functionality for all musl-based Alpine deployments, widely used in containerized development environments.
4. **v1.15.13 Desktop app shows "No MCPs configured" even with valid MCP setup (CLI works)** (https://github.com/anomalyco/opencode/issues/30104) | 7 comments, 9 👍: One of dozens of new reports of widespread MCP functionality breakage after the latest desktop release.
5. **[Feature] Add desktop support for Git submodule session management** (https://github.com/anomalyco/opencode/issues/7769) | 8 comments, 13 👍: A long-running request from monorepo developers, who currently cannot track or run separate sessions for nested Git submodules in the desktop client.
6. **[Feature] Make `/compact` use OpenAI Responses API native compaction** (https://github.com/anomalyco/opencode/issues/5200) | 8 comments, 23 👍: Highly requested optimization that would reduce manual context compaction overhead and preserve more session state for users on OpenAI's latest models.
7. **TUI auto-scroll stops working after user manually scrolls up and returns to bottom** (https://github.com/anomalyco/opencode/issues/29992) | 7 comments, 12 👍: A common UX pain point that breaks smooth navigation of long model responses in the terminal UI.
8. **[Feature] Add support for Minimax M3 models for Minimax subscription users** (https://github.com/anomalyco/opencode/issues/30210) | 5 comments, 14 👍: Fast-growing feature demand from users on Chinese LLM provider Minimax's official token plans.
9. **v1.15.13 has 100%+ CPU and 2.5GB+ memory usage on macOS ARM64** (https://github.com/anomalyco/opencode/issues/30126) | 3 comments, 0 👍: A newly reported performance regression that drains battery on Apple Silicon development machines.
10. **MCP filesystem tools bypass plan mode `edit: deny` permission rules** (https://github.com/anomalyco/opencode/issues/30291) | 2 comments, 0 👍: A newly discovered security gap where third-party MCP servers can modify files even when the user explicitly blocks edits in their config.

## 4. Key PR Progress
10 high-priority PRs that landed or moved forward in the past 24 hours:
1. **Expose OpenRouter reasoning variants for more models** (https://github.com/anomalyco/opencode/pull/30284): Newly merged fix that adds reasoning effort `/variant` controls for all reasoning-capable models including DeepSeek V4 Pro, not just previously supported GPT/Gemini/Claude variants.
2. **Add `preserveReasoningInContent` config flag to fix Qwen model interoperability** (https://github.com/anomalyco/opencode/pull/25357): Resolves broken extended thinking block parsing for Alibaba Qwen series models.
3. **Bind Home/End keys to line start/end in TUI input** (https://github.com/anomalyco/opencode/pull/25355): Closes a years-old usability gap to add standard text navigation keybindings to the TUI prompt input.
4. **Detect attachment MIME types from file extensions for `-f` uploads** (https://github.com/anomalyco/opencode/pull/25317): Fixes a long-standing bug where all uploaded files were hardcoded as `text/plain`, breaking multimodal image and document upload workflows.
5. **Fix Xiaomi MiMo model context limit tooltip showing 0 tokens** (https://github.com/anomalyco/opencode/pull/25258): Corrects incorrect metadata display for Xiaomi's open source LLM lineup.
6. **Add plugin stream hooks for tool streaming lifecycle** (https://github.com/anomalyco/opencode/pull/25245): New extension API that lets plugin developers customize how tool execution progress renders in the UI without modifying core tool logic.
7. **Enable auto-compaction for sub-agents to fix context overflow hangs** (https://github.com/anomalyco/opencode/pull/25180): Resolves a common reliability bug where background sub-agents would freeze forever when hitting context limits.
8. **Heal incomplete backticks in streaming text rendering** (https://github.com/anomalyco/opencode/pull/30293): Open PR that fixes truncated markdown rendering caused by unclosed code blocks mid-stream during model responses.
9. **Collapse full-context Git diffs in desktop UI** (https://github.com/anomalyco/opencode/pull/29928): Prevents the desktop app from hanging when rendering very large, full-file diffs that use excessive memory.
10. **Add TUI notification bridge for MCP plugins** (https://github.com/anomalyco/opencode/pull/30019): New feature that lets connected MCP servers send native alerts and status updates directly to the active OpenCode TUI session.

## 5. Feature Request Trends
Three dominant feature request directions emerged from recent community submissions:
1. **Latest model & provider parity**: Users are pushing for fast tracking of new LLM support for newly released models (Minimax M3, DeepSeek V4 Pro) and full feature parity with provider-native APIs including OpenAI Responses API compaction.
2. **Git workflow enhancements**: Top requests include full Git submodule session management, better large diff rendering, and automatic commit policy improvements that stop the AI from refusing to commit requested changes.
3. **Subscription value optimization**: Paid Go plan users are strongly advocating for automatic quota adjustments that pass through LLM provider price cuts directly to their plan limits, rather than keeping usage caps at older higher-price levels.

## 6. Developer Pain Points
The most frequently recurring frustrations from recent issue updates:
1. **Widespread MCP breakage on v1.15.13**: Multiple independent reports confirm that MCP servers work correctly via the OpenCode CLI but fail to load, appear empty, or show errors in the v1.15.13 desktop UI, traced to a confirmed race condition in a recent merged PR.
2. **Persistent permission system inconsistencies**: 4 separate long-running open issues document that explicit deny rules for sensitive files, command execution, and edit access are regularly ignored by core OpenCode tools and third-party MCP extensions, creating unaddressed security risks for users working with production credentials.
3. **Recent cross-platform regressions**: The last two 1.14.x and 1.15.x releases have introduced a wave of untested breakages including musl Alpine TUI crashes, high Apple Silicon CPU usage, broken TUI auto-scroll, and unexpected overwrites of user-selected model preferences.
4. **Billing sync latency**: Paid Go plan users report multi-hour sync delays between payment confirmation and workspace feature activation, leading to unexpected session interruptions even after they add new credits to their account.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-02
Repository: github.com/badlogic/pi-mono

---

## 1. Today's Highlights
Today’s update includes no new official releases, but delivers resolution for long-running provider compatibility bugs, prioritized fixes for high-frequency TUI hangs, and full native support for the newly launched MiniMax M3 multimodal model. The most active community discussion centers on the 50-comment open issue tracking frequent unresponsive "Working..." state hangs in the openai-codex provider for GPT-5.5, which has 25 upvotes and been tagged for the upcoming OpenClaw Clanker release cycle. Multiple merged PRs also resolve critical edge cases for self-hosted local LLM deployments, WSL git workflow support, and tmux hyperlink usability that had been open for months.

## 2. Releases
No new official Pi releases were published in the last 24 hours.

## 3. Hot Issues (Top 10 Notable Items)
1. **[#4945] OpenAI Codex hangs on "Working..." state for zero-usage aborted turns** (50 comments, 25 👍): The highest-engagement open issue in the current backlog, affecting all GPT-5.5 interactive TUI users. Users report no streamed output, no tool calls, and no visible error, with the only recovery path being manual Escape to abort the turn. Tracked for fix in the next OpenClaw Clanker milestone. [Link](https://github.com/earendil-works/pi/issues/4945)
2. **[#5089] timeoutMs configuration is not respected past a certain threshold** (21 comments, 2 👍): A critical pain point for self-hosted users running large models on CPU, causing unexpected timeouts for long-running operations like parsing multi-GB text files on low-powered hardware. [Link](https://github.com/earendil-works/pi/issues/5089)
3. **[#5223] Anthropic provider modifies thinking blocks causing 400 errors for Opus 4.8 adaptive thinking** (8 comments, 5 👍): Breaks mid-session multi-turn conversations for users running Claude Opus 4.8 with high reasoning mode enabled, a high-severity issue for heavy LLM power users. [Link](https://github.com/earendil-works/pi/issues/5223)
4. **[#4877] Session folder collision from path hashing** (8 comments, 2 👍): A silent data integrity bug where distinct project paths (e.g. `/a/b/c/d` and `/a-b/c-d`) generate identical session folder names, risking accidental overwrites of unrelated session data. [Link](https://github.com/earendil-works/pi/issues/4877)
5. **[#5229] MiniMax on OpenRouter is broken** (6 comments, 1 👍): Role serialization mismatch causes all requests for MiniMax models hosted on OpenRouter to return 400 errors due to the platform not supporting OpenAI’s `developer` role. [Link](https://github.com/earendil-works/pi/issues/5229)
6. **[#5117] Qwen 3.7 Max on OpenRouter is broken** (6 comments, 4 👍): Same root role mismatch issue as the MiniMax OpenRouter bug, affecting one of the most popular high-performance open model families in active use by the Pi community. [Link](https://github.com/earendil-works/pi/issues/5117)
7. **[#4180] Hyperlinks are no longer clickable in TUI** (6 comments, 0 👍): A recent regression from an alternate term mode update broke OSC 8 terminal hyperlink support for rendered markdown URLs, now resolved via a full TUI refactor. [Link](https://github.com/earendil-works/pi/issues/4180)
8. **[#2999] System prompt template variables not exposed to custom SYSTEM.md files** (6 comments, 2 👍): Blocks power users building fully custom system prompts from accessing built-in context variables, a feature request open since April 2026. [Link](https://github.com/earendil-works/pi/issues/2999)
9. **[#5263] Proposal to make in-session model and thinking-level changes ephemeral by default** (3 comments, 0 👍): A widely requested UX improvement to prevent accidental global setting changes when users tweak model parameters mid-session, with a proposed new explicit settings menu for modifying global defaults. [Link](https://github.com/earendil-works/pi/issues/5263)
10. **[#5294] Unresolved request timeouts despite infinite timeout configuration for llama.cpp backends** (2 comments, 0 👍): Self-hosted users running 70B+ scale models on CPU report that even setting explicit unlimited HTTP timeouts does not prevent unresponsive session hangs. [Link](https://github.com/earendil-works/pi/issues/5294)

## 4. Key PR Progress (Top 10 Important Updates)
1. **[#5284] Add MiniMax M3 to native minimax and minimax-cn providers**: Full implementation of the newly released flagship MiniMax M3 model, including support for its 512K context window, 128K max output, native multimodality, and built-in reasoning. Tagged for the OpenClaw Clanker release. [Link](https://github.com/earendil-works/pi/pull/5284)
2. **[#5221] Fix OpenRouter reasoning instruction role**: Switches system prompts from OpenAI’s non-standard `developer` role to the `system` role expected by OpenRouter, fully resolving the broken Qwen 3.7 Max and MiniMax access issues on the platform. [Link](https://github.com/earendil-works/pi/pull/5221)
3. **[#5235] Fix TUI overlay focus state**: Resolves the bug reported in #5129 where non-overlay UI calls would break active open overlays, leaving modals rendered on screen but no longer responsive to user input. [Link](https://github.com/earendil-works/pi/pull/5235)
4. **[#5288] Skip UTF-8 decoding for non-image binary files in the read tool**: Prevents garbled output and parsing errors when the file read tool encounters binary assets (images, executables, archives) in codebases. [Link](https://github.com/earendil-works/pi/pull/5288)
5. **[#5277] Add `gitContextBoundary` setting to stop AGENTS.md ancestor walk at git root**: Fixes a common pain point where a home-directory AGENTS.md config would leak into every project folder on the system if the user’s $HOME path was a git repository. The feature is disabled by default for backwards compatibility. [Link](https://github.com/earendil-works/pi/pull/5277)
6. **[#5256] Add optional session name parameter to `/new`, `/clone`, and `/fork` commands**: Eliminates the extra required step of running the `/name` command immediately after creating a new session, speeding up common multi-session workflows. [Link](https://github.com/earendil-works/pi/pull/5256)
7. **[#5296] Fix Kitty inline image rendering in WezTerm**: Resolves a recent regression that caused Kitty protocol images to render as blank empty blocks in the popular WezTerm terminal emulator. [Link](https://github.com/earendil-works/pi/pull/5296)
8. **[#5264] Refresh git branch label in TUI footer for WSL /mnt paths**: Fixes the long-standing bug where Pi failed to detect external git branch changes for Windows-backed project folders accessed via WSL mount points. [Link](https://github.com/earendil-works/pi/pull/5264)
9. **[#5308] Sanitize local model artifacts in tool argument preparation**: Fixes TypeBox validation failures caused by local models (Qwen 3.6, DeepSeek) injecting random YAML frontmatter or malformed content into generated tool call arguments. [Link](https://github.com/earendil-works/pi/pull/5308)
10. **[#5283] Preserve hardware cursor marker during slash-command autocomplete**: Fixes CJK (Chinese/Japanese/Korean) input method candidate window misalignment during autocomplete flows by retaining the correct hardware cursor position. [Link](https://github.com/earendil-works/pi/pull/5283)

## 5. Feature Request Trends
The most requested feature directions this 24h are:
1. **Expanded new model and regional provider support**: Prioritized requests for adding newly released flagship models (MiniMax M3, Gemini 3.5 Flash) and niche regional providers such as the ZAI Coding Plan China endpoint for users in mainland China.
2. **Native multimodal CLI workflows**: Top-voted request for built-in image attachment support for the Pi CLI, to enable vision model use cases for headless/SSH deployments.
3. **Safer in-session configuration**: Proposals to separate ephemeral per-session settings from persistent global defaults, to eliminate accidental permanent config changes from mid-session model parameter tweaks.
4. **Enhanced extension hooks**: Requests for new UI state events (for when custom dialogs open/close) and full custom keybinding support for arbitrary extension commands.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. **Cross-provider role normalization mismatches**: Near-universal 400 errors when running third-party models on platforms like OpenRouter, Bedrock, and Anthropic Vertex, as most providers do not support OpenAI’s non-standard `developer` role specification.
2. **Unclear silent hangs for self-hosted backends**: Users running local LLMs via llama.cpp report frequent unresponsive "Working..." states even after explicitly configuring unlimited timeout values, with no visible error logging or

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-02
---
## 1. Today's Highlights
The Qwen Code team published a new v0.17.0 nightly build with a critical bug fix for conversation rewind logic, alongside 21 updated community issues and 50 active pull requests. The bulk of recent work targets long-requested local inference reliability, Vim terminal UX polish, memory leak mitigation, and new developer diagnostic tooling for troubleshooting production deployments. Self-hosted and SDK users will see major quality of life improvements landing in the upcoming stable v0.17.0 release.

## 2. Releases
- **v0.17.0-nightly.20260601.1c48e412**: The latest pre-release build from the v0.17.0 release branch, published by the Qwen CI bot via [PR #4626](https://github.com/QwenLM/qwen-code/pull/4626). It includes a targeted fix for the false "compressed turn" error that would incorrectly trigger when processing messy, incomplete mid-turn conversation content.

## 3. Hot Issues
1. [#3384: Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384): 11-comment active thread from self-hosted users running Qwen 3.6 on vLLM, who report configuration failures even when strictly following official docs. The 6-week old open bug is a top pain point for the growing local inference user base.
2. [#4663: Add MiniMax-M3 and checkbox-based MiniMax model selection](https://github.com/QwenLM/qwen-code/issues/4663): 8-comment feature request asking to replace the current clunky free-text model ID input flow for MiniMax users with pre-populated model options and multi-select UI, to eliminate manual configuration typos.
3. [#4657: v0.17.0 + Ollama + Qwen 3.6 task completion failures](https://github.com/QwenLM/qwen-code/issues/4657): High-severity performance bug where users cannot finish even simple tasks (e.g. generating a full HTML e-book) on local Ollama deployments, with 6 users confirming the reproduction.
4. [#4420: Windows v0.16.0 CLI UI corruption causes doubled token usage](https://github.com/QwenLM/qwen-code/issues/4420): P1 priority bug for Windows 11 users running Qwen Code in Git Bash environments, where terminal rendering garbles the full UI and wastes tokens from malformed input parsing.
5. [#4624: Resume mode unbounded memory growth causes OOM](https://github.com/QwenLM/qwen-code/issues/4624): 2-upvote confirmed bug for long-running background sessions, where uncompressed conversation records and tool outputs are never pruned, causing processes to crash from out of memory after hours of use. This issue was marked closed yesterday with a pending fix.
6. [#4676: Auto mode permission classifier fails closed too easily](https://github.com/QwenLM/qwen-code/issues/4676): 1-upvote bug report noting that the default two-stage permission classifier blocks all actions on even minor latency spikes, breaking legitimate workflows unnecessarily.
7. [#4641: Windows MCP server instability](https://github.com/QwenLM/qwen-code/issues/4641): Extensibility bug where Windows users with 8+ configured MCP servers only get 3-5 working randomly per new session, with no consistent pattern for which servers fail to connect.
8. [#4679: SDK native unfinished turn resume support](https://github.com/QwenLM/qwen-code/issues/4679): High-value feature request for SDK developers that would eliminate the need to inject manual synthetic "continue" prompts after a session crashes, massively improving embedded Qwen Code integration experience.
9. [#4686: Ghostty terminal v0.17.0 infinite repetitive output loop](https://github.com/QwenLM/qwen-code/issues/4686): Rendering bug specific to Ghostty 1.3.1 users with Qwen 3.7-max + high reasoning effort enabled, where the model enters an infinite loop of repeating garbage output mid-stream.
10. [#4672: Auto-accept mode delayed file writes](https://github.com/QwenLM/qwen-code/issues/4672): Productivity bug where users running YOLO / auto-approval mode have to send a second follow-up prompt to get local files updated, even after the agent confirms edits are complete.

## 4. Key PR Progress
1. [#4677: Fix Vim mode UX gaps](https://github.com/QwenLM/qwen-code/pull/4677): Resolves the long-reported Esc key leak that broke input workflows, adds missing normal mode commands, and fixes mode indicator render lag for terminal Vim power users.
2. [#4572: Harden auto mode self-modification checks](https://github.com/QwenLM/qwen-code/pull/4572): Prevents the agent from silently modifying Qwen Code's own config, hooks, MCP settings, and permission rules via fast-path edit bypasses, closing critical privilege escalation gaps in auto-approval mode.
3. [#4647: Linux native clipboard for image paste](https://github.com/QwenLM/qwen-code/pull/4647): Replaces the third-party native clipboard module with platform-native `wl-paste`/`xclip` calls, fixing 2-year-old WSL2 + Wayland image paste failures entirely.
4. [#4629: Standalone build auto-update support](https://github.com/QwenLM/qwen-code/pull/4629): Adds self-update functionality for non-npm installed Qwen Code builds, including SHA256 checksum verification and atomic file replacement to eliminate manual download steps for end users.
5. [#4649: Inject context IDs to shell subprocesses](https://github.com/QwenLM/qwen-code/pull/4649): Exposes standard `QWEN_CODE_SESSION_ID`, `QWEN_CODE_AGENT_ID`, and `QWEN_CODE_PROMPT_ID` environment variables to all custom script subprocesses, making it trivial to correlate agent actions with external logging systems.
6. [#4654: Auto memory diagnostics dump on pressure](https://github.com/QwenLM/qwen-code/pull/4654): Writes a structured debug dump to the project `.qwen` folder automatically when high memory usage is detected, even if the process crashes immediately after, cutting debug time for OOM issues drastically.
7. [#4410: Telemetry Phase 3 subagent span isolation](https://github.com/QwenLM/qwen-code/pull/4647): Fixes messy distributed tracing for concurrent subagent runs, ensuring individual subagent traces form proper nested trees instead of interleaving under the parent interaction span.
8. [#4620: Chrome DevTools compatible CPU profiling](https://github.com/QwenLM/qwen-code/pull/4620): Adds zero-config CPU profiling that generates `.cpuprofile` files loadable in Chrome DevTools, triggerable via environment variable or `SIGUSR1` signal with no separate debug build required.
9. [#4528: Conversation compression with missing usage metadata](https://github.com/QwenLM/qwen-code/pull/4528): Makes context compression work reliably even when upstream model providers fail to return token count data, eliminating rare mid-session failed compression errors.
10. [#4521: Tolerate MCP unsupported SSE streams](https://github.com/QwenLM/qwen-code/pull/4521): Normalizes error handling for MCP servers that reject optional GET SSE streams, preventing random, unexplained MCP connection drops on third-party servers.

## 5. Feature Request Trends
The most requested feature directions from recent issues are:
1. SDK and daemon API improvements for third-party integrations, including non-blocking prompt endpoints and first-class session resume functionality
2. Out-of-the-box provider UX polish for third-party model services (MiniMax, etc) with pre-populated model lists and multi-select UI to eliminate manual configuration
3. Extensibility upgrades for the MCP and hooks systems, including project-scoped `.mcp.json` configuration, explicit approval workflows for workspace MCP servers, and new `InstructionsLoaded` hook events
4. Terminal customization options for power users, including ANSI color preservation for custom status lines and toggleable built-in UI elements

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. Local inference deployment instability, including Ollama task timeouts, OpenAI-compatible endpoint configuration gaps, and long inference request failures
2. Windows platform-specific bugs, including terminal UI rendering corruption, random MCP server connection drops, and delayed file writes in auto-approval mode
3. Poor memory management observability, with no built-in debug tools to trace unbounded memory growth and OOM crashes in long-running sessions
4. Overly strict default permission guardrails that block legitimate actions far too frequently in auto mode, significantly reducing workflow productivity for power users

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-02
---
## 1. Today's Highlights
The biggest news of the 24h window is the official v0.8.49 release completing the long-announced project rebrand from DeepSeek TUI to CodeWhale, with legacy binary shims included for a smooth transition. The community has raised over 30 updated issues covering cross-platform bug reports, post-rebrand migration questions, and highly requested UX enhancements. Maintainers have merged 20+ in-progress PRs that directly address most recently reported high-impact pain points, including Wayland clipboard failures, missing shell permission rules, and stale prompts after model switches.

## 2. Releases
### v0.8.49
The rebrand-focused release renames the entire project to **CodeWhale**, while legacy `deepseek` and `deepseek-tui` binaries are shipped as deprecation shims for one full release cycle: they print a one-line warning and forward execution to the new `codewhale` / `codewhale-tui` binaries. All legacy shims will be fully removed in the upcoming v0.9.0 release, with full migration details documented in `docs/REBRAND.md`.
[Release Link](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.49)

## 3. Hot Issues
Top 10 high-impact community issues selected by engagement and user impact:
1. **#1615 (Closed): Docker deployment garbled output bug**
   192 total comments make this the most discussed recent report: Linux server users following official setup documentation faced full TUI garbling that forced full server restarts, with dozens of users submitting reproduction logs to help the team diagnose the environment-specific encoding bug.
   [Link](https://github.com/Hmbown/CodeWhale/issues/1615)
2. **#2487 (Open): Frequent "Turn stalled - no completion signal received" error in YOLO mode**
   Top active unresolved bug affecting agentic workflow users, where long-running YOLO tasks freeze completely and cannot be resumed even after sending manual continue commands, blocking security testing and automated code refactoring use cases.
   [Link](https://github.com/Hmbown/CodeWhale/issues/2487)
3. **#1757 (Closed): Request to restore last sent input to composer after Ctrl+C cancellation**
   11 comments from power users voting for the UX quality of life fix: users no longer need to manually retype or copy-paste lost input after aborting an in-flight LLM request, which resolves major pain points of poor text selection in the terminal TUI.
   [Link](https://github.com/Hmbown/CodeWhale/issues/1757)
4. **#1186 (Open): Add typed persistent execution permission rules**
   Enterprise and shared workspace users requested scoped, configurable allow/deny/ask rules for shell commands, filtered by tool name, command prefix, and workspace path, to balance security guardrails and workflow efficiency for team usage.
   [Link](https://github.com/Hmbown/CodeWhale/issues/1186)
5. **#1969 (Open): Post-rebrand data persistence question**
   The highest user question after the v0.8.49 launch, as many non-default path users cannot find clear documentation confirming that pre-existing sessions, custom skills, and config files will not be deleted during the rename transition.
   [Link](https://github.com/Hmbown/CodeWhale/issues/1969)
6. **#2492 (Open): Full cross-session memory loss bug on restart**
   Users report all persistent context is wiped on app reboot, even after manually forcing memory writes, which breaks long-running development workflows that rely on session context recall across multiple work sessions.
   [Link](https://github.com/Hmbown/CodeWhale/issues/2492)
7. **#2309 (Closed): /statusline picker hides undiscovered customization options**
   New users were unable to discover all available status bar chips because the picker only showed items pre-listed in existing config files, making it impossible to find customization features without reading full source documentation.
   [Link](https://github.com/Hmbown/CodeWhale/issues/2309)
8. **#2523 (Open): exec_shell tool remains unavailable even after explicit opt-in on Windows**
   Users reported that even with `allow_shell = true` and `trusted = true` set in workspace config, the shell execution feature remains locked, fully blocking users who need to run automated command tasks on Windows workspaces.
   [Link](https://github.com/Hmbown/CodeWhale/issues/2523)
9. **#1920 (Open): Silent clipboard copy failure on non-wlroots Wayland compositors**
   Affects a large share of Linux tiling compositor users (e.g. niri) who cannot copy text from the TUI to system clipboard with no explicit error message shown.
   [Link](https://github.com/Hmbown/CodeWhale/issues/1920)
10. **#2494 (Open): macOS iTerm2 experience issues summary**
    User submitted a consolidated report of 4 long-unaddressed Mac-specific pain points including incorrect default keybinding documentation, unexpected multi-message send on pasted newlines, non-intuitive Ctrl+C behavior, and missing history session navigation filters.
    [Link](https://github.com/Hmbown/CodeWhale/issues/2494)

## 4. Key PR Progress
1. **#2549 (Open): Clarify state migration paths in rebrand docs**
   Updates the official REBRAND guide to explicitly confirm that all legacy `.deepseek` data folders are preserved as fallback locations, resolving user uncertainty raised in #1969.
   [Link](https://github.com/Hmbown/CodeWhale/pull/2549)
2. **#2540 (Open): Fix Wayland clipboard reads via wl-paste**
   Resolves the non-wlroots Wayland clipboard failure by prioritizing native `wl-paste` system calls before falling back to the arboard library, fully fixing the #1920 bug.
   [Link](https://github.com/Hmbown/CodeWhale/pull/2540)
3. **#2529 (Open): Honor user-defined workspace shell opt-in rules**
   Fixes the #2523 bug where workspace-specific `allow_shell = true` config entries were ignored at launch, restoring expected exec_shell functionality for Windows and cross-platform users.
   [Link](https://github.com/Hmbown/CodeWhale/pull/2529)
4. **#2524 (Open): Add /dev/tty access to macOS seatbelt sandbox profile**
   Resolves the #2372 bug where sshpass, sudo, and other tools that directly access `/dev/tty` failed to run even with full sandbox permission enabled.
   [Link](https://github.com/Hmbown/CodeWhale/pull/2524)
5. **#2541 (Open): Document macOS-specific TUI keybindings**
   Directly addresses #2494 by publishing an official Mac/iTerm2 shortcut reference, covering newline behavior and Ctrl+C cancel workflows for macOS users.
   [Link](https://github.com/Hmbown/CodeWhale/pull/2541)
6. **#2534 (Open): Refresh system prompt after /model switch**
   Fixes the stale session context bug where the engine continued using the old model's system prompt after users selected a new model via the slash command.
   [Link](https://github.com/Hmbown/CodeWhale/pull/2534)
7. **#2538 (Open): Surface invalid MCP stdio output previews**
   Adds a bounded preview of unparseable MCP server startup output in error messages, drastically simplifying debugging for users connecting to custom MCP services.
   [Link](https://github.com/Hmbown/CodeWhale/pull/2538)
8. **#2551 (Open): Add browser-style @-mention file completions**
   Adds a new opt-in completion mode that lists only immediate

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*