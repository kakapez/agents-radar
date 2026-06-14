# AI CLI Tools Community Digest 2026-06-15

> Generated: 2026-06-14 23:09 UTC | Tools covered: 9

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

# 2026-06-15 AI Developer CLI Tools Cross-Tool Comparison Report
For technical decision-makers and professional development teams

---

## 1. Ecosystem Overview
The global AI developer CLI tool ecosystem is rapidly maturing out of experimental early-adopter phase to prioritize production-grade reliability, enterprise compliance, and vendor neutrality over the past 24-hour tracking window. No paradigm-shifting new feature launches were recorded, with all major vendors and independent open source projects focused on resolving long-standing unpatched pain points, hardening Model Context Protocol (MCP) integrations, and aligning roadmaps to top user requests. The segment is split evenly between big-vendor native offerings, regional regional LLM provider tools, and fully open source extensible alternatives, with no single tool dominating market share for all developer use cases. Cross-tool migration features and multi-provider support are eroding historic vendor lock-in for custom AI coding workflows.

## 2. Activity Comparison
| Tool Name | Updated Active Issues | Updated / Merged PRs | 24h Release Status |
|-----------|-----------------------|----------------------|--------------------|
| Claude Code | 10 | 5 | No new stable/pre-release builds published |
| OpenAI Codex | 10 | 8 | New Rust runtime alpha pre-release `rust-v0.140.0-alpha.19` published |
| Gemini CLI | 10 | 10 | No new builds published |
| GitHub Copilot CLI | 5 (valid non-spam) | 0 | No new builds or public PR activity recorded |
| Kimi Code CLI | 2 | 4 | No new builds published |
| OpenCode | 10 | 10 | New stable patch release `v1.17.7` published |
| Pi (pi-mono) | 10 | 10 | No new builds published |
| CodeWhale (DeepSeek TUI) | 10 | 10 | Rebranded stable release `v0.8.60` published, marking end of legacy `deepseek-tui` package support |
| Qwen Code | 10 | 10 | No new builds published |

## 3. Shared Feature Directions
Multiple overlapping high-priority requirements appear across 8+ tool communities, indicating universal user demand:
1. **MCP/Plugin ecosystem maturity**: All 9 tracked tools are actively working to resolve existing MCP integration bugs and expand extensible plugin APIs, addressing common pain points including duplicate plugin spawns, large tool limits, schema parsing mismatches, and non-portable custom skill packs.
2. **Cost and usage transparency**: 6 tools (OpenAI Codex, Claude Code, Kimi Code CLI, Pi, OpenCode, Qwen Code) are shipping fixes for hidden unbounded token burn, unclear quota disclosures, and broken billing logic, with users consistently demanding real-time granular usage metrics instead of vague percentage remaining indicators.
3. **Cross-platform parity for non-macOS systems**: 7 tools are prioritizing long-overdue fixes for Windows, WSL, and Linux specific breakages, from broken WSL path mapping to non-default Git Bash detection, eliminating multi-year platform-specific blockers that previously left non-macOS developer teams underserved.
4. **Cross-tool workflow portability**: 4 tools (Codex, Pi, Qwen Code, Gemini CLI) now support partial or full import of custom configurations, MCP server definitions, and custom agent rules from competing tools, to reduce onboarding friction for users switching between coding assistants.
5. **TUI terminal state reliability**: 5 independent tools are shipping fixes for broken post-exit terminal state, uncopyable OAuth links, TUI freezes on long sessions, and runaway streaming output, addressing persistent usability gaps that break regular developer terminal workflows.

## 4. Differentiation Analysis
Tools fall into 3 distinct clusters with clear divergent priorities:
1. **Big-vendor native tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI)**: Feature focus prioritizes tight alignment with their respective parent company ecosystems, with Copilot CLI targeting GitHub/Azure DevOps native integration, Claude Code optimizing for Anthropic subagent workflows, and Gemini CLI prioritizing Google enterprise security hardening. Target users are mainstream professional devs and large regulated organizations, with technical roadmaps controlled internally rather than fully community-driven.
2. **Regional Chinese LLM provider tools (Kimi Code CLI, Qwen Code)**: Feature focus prioritizes native integration with domestic Chinese LLM endpoints, fast resolution of Windows platform bugs, and low-cost entry pricing tiers. Target users are mainland China development teams using domestic cloud LLM services, with technical approaches that prioritize regional user pain points before global feature rollouts.
3. **Independent open source tools (OpenCode, Pi, CodeWhale)**: Feature focus prioritizes maximum extensibility, multi-provider support, and custom workflow orchestration (including CodeWhale's WhaleFlow swarm system, OpenCode's external context store, and Pi's full extension API). Target users are power users, self-hosted teams, and advanced agent workflow builders that require full control over their stack, with fully open development processes and community-led feature roadmaps.

## 5. Community Momentum & Maturity
- **Highest activity, fastest iteration**: Pi, OpenCode, Gemini CLI, and CodeWhale rank top in active community engagement, with 10+ active PRs per tool in the 24-hour window, large volumes of community-submitted bug fixes and feature contributions. CodeWhale is completing a full rebrand and 28-commit feature sprint for its upcoming v0.8.61 release, while Pi is rolling out new extension APIs and xAI Grok native support at a steady pace.
- **Mid-tier steady activity**: OpenAI Codex, Claude Code, Qwen Code, and Kimi Code CLI have very large user bases (Codex's 50x token burn bug drew 607 comments alone) but follow controlled internal product timelines with slower feature iteration, focused on targeted bug triage and bounty-backed fixes.
- **Most mature, lowest churn**: GitHub Copilot CLI is the most stable production-ready offering, with no public PR updates in the tracking window and only 5 new actionable issues, targeted almost exclusively at enterprise users who prioritize reliability over new feature releases.

## 6. Trend Signals
These community feedback patterns deliver actionable reference value for development teams:
1. MCP has emerged as the universal de facto standard for third-party AI tool integration across the entire ecosystem, with zero competing alternatives gaining traction. Teams building custom AI coding tooling only need to implement the MCP spec once to deploy their work across all major AI CLI tools, eliminating redundant engineering work.
2. Vendor lock-in for AI coding workflows is rapidly collapsing: all major tools now support custom OpenAI-compatible endpoints, multi-provider fallback chains, and cross-tool config import, so teams no longer need to rebuild their entire custom agent stack if they switch LLM providers.
3. Cost control is now a top non-functional requirement for enterprise AI CLI deployments, after early adopter experiences of unbounded subagent recursion and silent cache TTL reductions leading to 50x unexpected overspend. Teams selecting AI CLI tools for large team use should prioritize built-in token burn rate caps and real-time usage alerting as core evaluation criteria.
4. Non-macOS developer segments are now a priority for all vendors, after years of being treated as afterthoughts. The current wave of cross-platform bug fixes means AI CLI tools are now production-ready for Windows and Linux enterprise teams, with no remaining critical platform blockers for large-scale rollouts.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-06-15)
---
## 1. Top Skills Ranking
Ranked by cross-referenced issue comment volume, recent activity, and community attention priority:
1. **PR #1298: Full run_eval.py pipeline overhaul**  
   Functionality: Resolves the widespread 0% recall bug in the official skill-creator evaluation loop, fixes Windows stream reading, trigger detection, and parallel worker support for accurate skill performance measurement. Discussion highlights: Addresses 10+ independent community bug reproductions across related issues #556 and #1169, which blocked all reliable skill description optimization workflows. Status: OPEN, last updated 2026-06-11 | https://github.com/anthropics/skills/pull/1298
2. **PR #361: Unquoted YAML special character detection**  
   Functionality: Adds pre-parse validation in quick_validate.py to catch unquoted YAML values with reserved special characters that cause silent parsing failures for all skill submissions. Discussion highlights: Aligns with widely requested skill-creator best practice improvements raised in 8-comment Issue #202. Status: OPEN, last updated 2026-06-10 | https://github.com/anthropics/skills/pull/361
3. **PR #362: UTF-8 multi-byte character panic fix**  
   Functionality: Replaces character-length checks with UTF-8 byte-aware validation in skill-creator tooling to prevent Claude CLI Rust panics when processing non-ASCII characters in skill metadata. Discussion highlights: Companion fix to PR #361, closes a long-standing pain point for non-English skill creators. Status: OPEN, last updated 2026-06-10 | https://github.com/anthropics/skills/pull/362
4. **PR #1140: Agent-creator meta-skill + multi-tool evaluation fixes**  
   Functionality: Adds a new meta-skill for building task-specific custom agent sets, fixes parallel multi-tool call evaluation logic, and adds Windows %APPDATA% path support for native Windows skill workflow. Discussion highlights: Resolves popular feature request Issue #1120 for reusable agent assembly tooling. Status: OPEN, last updated 2026-06-02 | https://github.com/anthropics/skills/pull/1140
5. **PR #1099: Windows run_eval.py subprocess crash fix**  
   Functionality: Patches the WinError 10038 pipe operation crash that made the skill-creator evaluation workflow completely unusable on Windows. Discussion highlights: One of three high-priority Windows compatibility patches requested in Issue #1061. Status: OPEN, last updated 2026-05-24 | https://github.com/anthropics/skills/pull/1099
6. **PR #1050: Windows subprocess + encoding bug fixes**  
   Functionality: Adds support for Windows `claude.cmd` executable resolution and correct cp1252 to UTF-8 encoding handling for subprocess output on Windows 11. Discussion highlights: Second of the three top Windows compatibility patches from community developer testing. Status: OPEN, last updated 2026-05-24 | https://github.com/anthropics/skills/pull/1050
7. **PR #83: skill-quality-analyzer + skill-security-analyzer meta-skills**  
   Functionality: Adds two purpose-built auditing skills that evaluate submitted community skills across structural, documentation, and security risk dimensions. Discussion highlights: Directly addresses the top security concern of unvetted community skills running in production environments. Status: OPEN, last updated 2026-01-07 | https://github.com/anthropics/skills/pull/83

## 2. Community Demand Trends
Distilled from top commented community issues:
1. **Enterprise team skill management**: The highest-voted request (14 comments, 7 👍 in Issue #228) is native org-wide skill sharing, to eliminate the current manual workflow of distributing .skill files via third-party chat tools and requiring manual user uploads.
2. **Skill creator tooling maturity**: 4 of the top 15 public issues focus on broken core skill building workflows, including the widely reported 0% recall evaluation bug and missing native Windows support, indicating most community members are self-service skill builders rather than passive end users.
3. **Enterprise system integration**: High demand for Skills support for AWS Bedrock deployment, native ODF/ODT document handling, SAP business data predictive analytics, and granular SharePoint Online access controls to connect Claude Code to existing on-prem and cloud enterprise stacks.
4. **Skills security hardening**: Growing concern over impersonation attacks via community skills hosted under the official `anthropic/` namespace, plus requests for built-in agent governance and audit trail skills to enforce compliance in regulated environments.

## 3. High-Potential Pending Skills
Low-risk, high-value active PRs that are nearly production-ready and likely to land imminently:
- PR #538: Official PDF skill case sensitivity reference fix that resolves broken linked resource loads on case-sensitive Unix filesystems | https://github.com/anthropics/skills/pull/538
- PR #541: DOCX skill tracked change ID collision fix that eliminates document corruption when modifying DOCX files with existing bookmarks | https://github.com/anthropics/skills/pull/541
- PR #509: New CONTRIBUTING.md file that lifts the repo's 25% GitHub community health score to meet open source maintenance best practices | https://github.com/anthropics/skills/pull/509
- PR #723: Full-stack testing-patterns skill that provides actionable, testable guidance for unit, component, and end-to-end test generation aligned to the Testing Trophy framework | https://github.com/anthropics/skills/pull/723
- PR #514: document-typography skill that automatically prevents common orphan/widow line wrap and document numbering misalignment errors in all AI-generated output | https://github.com/anthropics/skills/pull/514

## 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is mature, cross-platform, enterprise-grade skill building tooling that eliminates broken core evaluation workflows, cuts administrative friction for team shared skill management, and adds clear security guardrails to support safe, large-scale Skills deployment across organizational technical stacks.

---

# Claude Code Community Digest | 2026-06-15
Targeted for AI developer tool practitioners, based on official github.com/anthropics/claude-code activity data.

---

## 1. Today's Highlights
No official new Claude Code releases shipped in the 24-hour reporting window, with all activity concentrated on triage of long-pending stale bugs, community-submitted bounty-backed fixes, and newly filed high-severity execution edge cases. The top community concern this period is a newly surfaced unpatched subagent recursion bug that causes catastrophic, unbounded token consumption in multi-agent workflows. Contributors have also submitted critical fixes for broken billing logic and a misconfigured stale bot that was automatically closing assigned, in-progress issues.

## 2. Releases
No new stable, beta, or pre-release versions of Claude Code were published in the last 24 hours.

## 3. Hot Issues
1. [Issue #45612](https://github.com/anthropics/claude-code/issues/45612): Feature request to make the temporary /buddy adversarial code reviewer skill a permanent opt-in feature. It earned 19 upvotes (the highest of all active issues) after users reported the April Easter egg implementation caught far more subtle code vulnerabilities than standard Claude Code review workflows.
2. [Issue #68430](https://github.com/anthropics/claude-code/issues/68430): Newly filed high-severity bug where subagent spawning logic causes infinite 50+ level deep recursion, ignores the `CLAUDE_CODE_FORK_SUBAGENT=0` disable flag, triggers uncontrolled token burn, and deletes accumulated subagent work. It was filed and drew 4 developer comments the same day.
3. [Issue #53340](https://github.com/anthropics/claude-code/issues/53340): Closed regression bug affecting Windows Claude Desktop that removed visibility of project-level folders in the workspace browser. It has 15 comments and 9 upvotes from Windows developers who lost full project navigation functionality after a recent app update.
4. [Issue #36800](https://github.com/anthropics/claude-code/issues/36800): Long-running open MCP bug on macOS where duplicate plugin instances spawn mid-session with no preceding crash, triggering 409 Conflict errors and permanent loss of access to connected third-party tools. It has 15 comments from MCP integration developers.
5. [Issue #56895](https://github.com/anthropics/claude-code/issues/56895): Open critical billing bug where Claude Max users are fully charged and show a paid invoice, but their accounts are automatically reverted to the Free plan. It has 14 comments from affected paying subscribers.
6. [Issue #68425](https://github.com/anthropics/claude-code/issues/68425): Newly filed bug where the `/clear` slash command does not wipe conversation context on iOS and Android mobile clients, leaving full prior thread data accessible and maintaining high token utilization.
7. [Issue #33539](https://github.com/anthropics/claude-code/issues/33539): Unresolved TUI bug where OAuth login URLs are rendered inside decorative tables with pipe characters and padding, making them unclickable and uncopyable and breaking login for Pro/Max CLI users with no documented workaround. It has 8 comments and 7 upvotes.
8. [Issue #45880](https://github.com/anthropics/claude-code/issues/45880): macOS memory leak bug where concurrent Claude Code sessions spawn a multiplicative N×M number of MCP server processes with no V8 heap limit, triggering full system kernel panics even on 64GB MacBook Pro hardware.
9. [Issue #66130](https://github.com/anthropics/claude-code/issues/66130): Model behavior enhancement request where Claude Code completes individual local task instructions correctly, but fails to verify final artifacts against top-level project rules (especially checking for explicitly forbidden content), leading to shipping broken or non-compliant code.
10. [Issue #51222](https://github.com/anthropics/claude-code/issues/51222): UI bug where the weekly usage reset time displayed to Pro plan users is offset by multiple hours, leading to unexpected, unplanned mid-week workflow interruptions when developers run out of credits early. It has 12 comments from affected Pro subscribers.

## 4. Key PR Progress
All 5 PRs updated in the last 24 hours are detailed below:
1. [PR #68423](https://github.com/anthropics/claude-code/pull/68423): Open fix for the repo's stale sweep automation script, adding logic to skip auto-closing issues that have assigned active maintainers, resolving a long-running pain point where in-progress work items were incorrectly marked stale and closed.
2. [PR #67699](https://github.com/anthropics/claude-code/pull/67699): $29 community bounty fix that prevents Claude Code from autonomously running unapproved background scripts that call paid external APIs, eliminating unexpected unbudgeted third-party charges for end users.
3. [PR #67409](https://github.com/anthropics/claude-code/pull/67409): $200 community bounty fix for the high-priority billing error that incorrectly downgrades paid Max/Pro accounts to Free, directly resolving 14+ user-reported billing complaints.
4. [PR #67722](https://github.com/anthropics/claude-code/pull/67722): Approved, closed PR implementing a new GitHub Actions workflow for automatic duplicate issue deduplication, cutting down manual issue triage overhead for Anthropic maintainers by an estimated 30%.
5. [PR #1](https://github.com/anthropics/claude-code/pull/1): The repo's original first PR, updated and finalized to 2026 standards to formalize the project's public SECURITY.md vulnerability disclosure policy for external contributors.

## 5. Feature Request Trends
The most requested feature directions from recent community issue submissions are:
1. Permanent opt-in access to the viral /buddy adversarial code review skill that ran as a limited-time April Easter egg
2. Native cross-surface session sync, to share conversation history and workspace state seamlessly across Claude Code CLI, desktop, web, and mobile clients instead of using isolated storage per platform
3. Local-only session bridging transport that eliminates Anthropic cloud relay hops for local automation workflows interacting with running Claude Code instances
4. Native pure-exec slash commands for deterministic, discoverable aliases of common bash operations, eliminating manual mode-switching overhead for routine terminal tasks

## 6. Developer Pain Points
Recurring high-frequency frustrations across all recent issues:
1. Persistent platform-specific regressions across Windows, macOS, WSL, iOS, and Android that break core user-facing workflows, from missing project folders on Windows to broken `/clear` on mobile
2. Unbounded resource leaks including zombie subprocesses, multiplying MCP server processes, and unconstrained subagent recursion that cause unexpected token burn, total system crashes, and lost work
3. MCP integration reliability failures including duplicate plugin instance spawns mid-session that cause 409 conflicts and total loss of access to connected third-party tools
4. Usability gaps in core workflow features: incorrect usage limit reset time displays, malformed permission rule generation that breaks automation, and no workaround for uncopyable OAuth login URLs in the TUI.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-15
---
## 1. Today's Highlights
This 24-hour window brings a new pre-release Rust Codex CLI alpha build, alongside active community outcry over a months-old unpatched rate limit bug that burns paid user tokens far faster than advertised. OpenAI engineering teams merged a full stacked PR set enabling fully asynchronous custom MCP hooks for the first time, while cross-platform filesystem permissioning work lays foundational groundwork for the highly requested native Linux desktop app. Multiple critical post-update regressions including Windows app launch failures, excessive SSD wear from local logging, and broken WSL path mapping are now seeing active triage from the core team.

## 2. Releases
A new pre-release build of the Rust implementation of the Codex CLI was published in the last 24 hours:
- **rust-v0.140.0-alpha.19**: No public changelog is attached to this pre-release at time of writing, and it is intended for early testing of the rewritten Rust CLI runtime. [GitHub Release Link](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.19)

## 3. Hot Issues
1. [Issue #14593: Burning tokens very fast](https://github.com/openai/codex/issues/14593) | 607 comments, 268 👍: The highest-traffic open bug on the repo, affecting Business-tier Windows VS Code users, reports that paid token allocations are being consumed up to 50x faster than advertised, with many users blowing through their full monthly 1M token grant in under 48 hours with no resolution for 3+ months.
2. [Issue #11023: Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) | 107 comments, 568 👍: The most upvoted open feature request, filed by power users who currently can only use Codex via the CLI on Linux, and are unable to run the full native app to reduce Mac laptop power drain.
3. [Issue #14331: GPT-5.3-Codex model not working in paid accounts](https://github.com/openai/codex/issues/14331) | 53 comments: Recently closed bug where Plus-tier Linux VS Code users were fully locked out of access to the latest GPT-5.3 Codex model, the fix rolled out publicly in the last 24 hours.
4. [Issue #21527: Codex is really too slow](https://github.com/openai/codex/issues/21527) | 29 comments: Cross-platform performance regression in recent v26 app builds where response latency for code generation workflows increased 3-10x across both the desktop app and VS Code extension.
5. [Issue #10823: Unable to compact context in very long running sessions](https://github.com/openai/codex/issues/10823) | 29 comments: Power users running multi-day refactoring sessions lose full access to their work when the remote context compaction task fails under high server load, with no fallback option to manually compact context locally.
6. [Issue #27915: Linux Codex users cannot access or redeem banked usage resets](https://github.com/openai/codex/issues/27915) | 16 👍: Directly tied to the missing native Linux desktop app, the new flexible rate limit reset management UI is only shipped inside the desktop GUI, locking Linux CLI users out of the new feature entirely.
7. [Issue #25807: Codex Desktop latest Windows version opens then exits immediately](https://github.com/openai/codex/issues/25807) | 8 comments: Mass post-update regression affecting thousands of Windows 10/11 users after the June 2026 app update, where the full GUI app crashes instantly on launch while the CLI continues to work normally.
8. [Issue #28224: Codex SQLite feedback logs can write ~640 TB/year and rapidly consume SSD endurance](https://github.com/openai/codex/issues/28224) | Brand new high-severity bug posted 2026-06-14, where unthrottled local logging is writing absurd volumes of data that can cause premature hardware failure for users running Codex on low-durability consumer NVMe drives.
9. [Issue #28174: Codex App on Windows + WSL incorrectly maps /mnt/e/... to C:\mnt\e\...](https://github.com/openai/codex/issues/28174) | Broken path translation in the latest v26.609 build completely breaks WSL development workflows for Windows users, pointing WSL file paths to non-existent locations on the host Windows drive.
10. [Issue #20840: GPU usage still high, battery killer](https://github.com/openai/codex/issues/20840) | 4 comments: Long-running bug where the Codex desktop app uses 2-3x idle GPU resources on macOS laptops, cutting mobile development runtime by multiple hours even when running in the background.

## 4. Key PR Progress
1. [PR Stack #27771 → #27452 → #27772: Async custom hooks implementation](https://github.com/openai/codex/pull/27771) | Full 3-PR feature launch that adds bounded runtime for non-blocking custom MCP hooks, enables async hook execution that runs independently of active model requests, and adds UI visibility for the hook execution mode in both the app GUI and TUI.
2. [PR #28165: Use PathUri in filesystem permission paths for exec-server](https://github.com/openai/codex/pull/28165) | Adds generalized cross-platform path handling that lets the app server and execution server run on completely different operating systems (e.g. Windows host with WSL runtime), directly resolving the broken WSL path mapping bug reported by users.
3. [PR #27640: Support multi-tool install requests](https://github.com/openai/codex/pull/27640) | Expands the MCP plugin installation API to support bulk multi-tool installation in a single request, removing the requirement for sequential per-plugin installation prompts.
4. [PR #28008 + #28009: External agent import accounting and telemetry](https://github.com/openai/codex/pull/28008) | Adds full progress tracking and granular error reporting for users migrating custom agent configurations from competing tools like Cursor, reducing debug overhead for failed imports.
5. [PR #27917: Add explicit realtime speech and silent context APIs](https://github.com/openai/codex/pull/27917) | Adds user-facing controls for voice mode to define which Codex system messages are read aloud, eliminating excessive, unconfigurable chatty voice output during long code generation workflows.
6. [PR #27794: Remove terminal resize reflow flag gates](https://github.com/openai/codex/pull/27794) | Prompts the dynamic TUI terminal resizing feature to stable, removing all broken legacy fallback paths that caused garbled output when users resized their terminal mid-workflow.
7. [PR #27666: Add managed field support to requirements.toml](https://github.com/openai/codex/pull/27666) | Enables enterprise teams to enforce organization-wide Codex configuration rules for authentication, sandbox permissions, and telemetry, eliminating manual local config drift across developer machines.
8. [PR #27953: Load app-bundled internal hooks from Codex Desktop](https://github.com/openai/codex/pull/27953) | Speeds up load times for first-party MCP plugins by loading hook logic

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-15
---
## 1. Today's Highlights
No new public releases shipped in the tracking window, with all active engineering work focused on critical P1 security hardening, agent reliability fixes, and session persistence quality improvements. The most notable update is the merge-ready PR for native terminal drag-and-drop and clipboard image pasting, delivering long-requested multimodal UX parity between the CLI and browser Gemini experiences. Teams are also actively progressing on their roadmap to roll out AST-aware code navigation tooling to cut token waste and reduce unnecessary LLM turns for codebase tasks.

## 2. Releases
No new stable, pre-release, or patch versions of `google-gemini/gemini-cli` were published in the last 24 hours.

## 3. Hot Issues
1. **[#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 upvotes): The highest-upvoted open user bug, this issue causes the generalist subagent to hang indefinitely even for trivial tasks like folder creation. Users report workarounds that disable subagent deferral fully resolve the issue, and the issue is currently marked for retest.
2. **[#24353 Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (7 comments): Core test infrastructure epic tracking scaling the repo's behavioral evaluation suite to 76 tests across 6 supported Gemini model variants to catch regressions before release.
3. **[#22745 Assess AST-aware file reads, search, and mapping impact](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments, 1 upvote): High-priority investigation into using AST-powered tooling to reduce token bloat from unstructured file reads and cut the number of LLM turns required for code navigation tasks.
4. **[#22323 Subagent MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (6 comments, 2 upvotes): Critical UX bug that masks when subagents hit maximum turn limits without completing work, incorrectly reporting full task success to the end user.
5. **[#25166 Shell execution stuck with "Awaiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 3 upvotes): Frequent workflow-breaking bug that leaves executed non-interactive shell commands marked as active, hanging the chat session with no path to resume.
6. **[#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, security area): Security hardening issue that addresses the gap where transcript content is sent to the background Auto Memory extraction model before LLM-powered secret redaction runs.
7. **[#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (6 comments): Widely reported user complaint that custom defined skills and subagents are never automatically invoked, even for highly relevant matching tasks, requiring explicit user prompting every time.
8. **[#20079 Symlinked custom agent files are not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (4 comments): Power user pain point that blocks shared config setups for dev teams that symlink their custom agent directories across machines.
9. **[#22093 Subagents running without permission post v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2): Regression in v0.33.0 that auto-launches subagents even when users explicitly disable all agents in their global config.
10. **[#24246 400 errors with > 128 tools available](https://github.com/google-gemini/gemini-cli/issues/24246)** (3 comments): Users with large numbers of custom MCP tools hit hard API limits, requiring dynamic tool scoping logic to only surface relevant tools for each task.

## 4. Key PR Progress
1. **[#27915 Fix: Trust dialog disclosures hidden unshown hook shapes](https://github.com/google-gemini/gemini-cli/issues/27915)** (P1, security): Critical bug fix that closes a security vulnerability where nested `SessionStart` hooks could execute arbitrary shell code without appearing in the folder trust confirmation dialog.
2. **[#27910 Fix: Bound web search tool latency to 120s](https://github.com/google-gemini/gemini-cli/issues/27910)** (P1): Adds a hard local timeout to the Google Web Search tool that aborts outstanding Gemini requests and returns a clear error to the user, eliminating infinite hangs during web research tasks.
3. **[#27859 Feat: Native drag-and-drop and Cmd/Ctrl+V image pasting](https://github.com/google-gemini/gemini-cli/issues/27859)** (P3, core): Delivers long-requested multimodal UX that lets users drop images directly into the terminal or paste them from the system clipboard without manual file path inputs.
4. **[#27914 Fix: Do not offer to resume unsaved sessions](https://github.com/google-gemini/gemini-cli/issues/27914)**: Resolves the broken resume prompt edge case that showed invalid `--resume` commands when the chat recorder auto-disables after hitting disk full (ENOSPC) errors.
5. **[#27904 Fix: Load JSONL sessions even if projectHash metadata is missing](https://github.com/google-gemini/gemini-cli/issues/27904)**: Fixes session loading failures for legacy chat records that lack the optional `projectHash` field, eliminating unnecessary conversation data loss.
6. **[#27912 Fix: Recover sessions with corrupt or missing metadata lines](https://github.com/google-gemini/gemini-cli/issues/27912)**: Adds graceful error handling for damaged chat history files, so users do not lose full conversation records if a single metadata line is corrupted.
7. **[#27580 Fix: Prevent @ command regex stack overflow on large inputs](https://github.com/google-gemini/gemini-cli/issues/27580)**: Replaces the buggy backtracking `@` command parser regex with an iterative scanner, eliminating crashes when users paste very large text snippets into the CLI.
8. **[#27575 Security fix: Eliminate command injection in findCommand utility](https://github.com/google-gemini/gemini-cli/issues/27575)**: Replaces unsafe shell-executed `execSync` calls with non-interpolated `spawnSync` calls across the IDE installer and editor detection paths to block command injection risks.
9. **[#27887 Fix: Honor custom theme border.default for OSC 11 terminals](https://github.com/google-gemini/gemini-cli/issues/27887)**: Resolves a bug that prevented user-defined custom theme border colors from rendering correctly on terminals that report background color via the OSC 11 escape sequence.
10. **[#27885 Fix: Register all VS Code IDE Companion activate() disposables](https://github.com/google-gemini/gemini-cli/issues/27885)**: Patches a long-running resource leak that caused slow memory bloat in the VS Code extension after multi-hour working sessions.

## 5. Feature Request Trends
1. **AST-powered code navigation**: The team is prioritizing investigation of AST grep and AST-aware codebase mapping tools to drastically reduce token overhead and cut unnecessary LLM turns during code exploration tasks.
2. **Auto Memory hardening**: Multiple open issues are targeted at improving the reliability and security of the Auto Memory feature, eliminating infinite retries on low-signal sessions, adding deterministic secret redaction, and quarantining invalid memory patches.
3. **Subagent resilience upgrades**: Top requested enhancements include automatic browser session lock recovery, proper propagation of user config overrides to subagents, and transparent reporting of all task statuses.
4. **Multimodal UX parity**: The new drag-and-drop image pasting feature is part of a broader roadmap to close gaps between the terminal Gemini CLI and browser-based Gemini multimodal functionality.

## 6. Developer Pain Points
1. **Frequent unhandled agent hangs**: Multiple high-upvoted P1 bugs cover scenarios where the generalist subagent, web search tool, or post-shell-execution flow hangs indefinitely mid-task, blocking work without clear error feedback.
2. **Low custom skill discoverability**: Users consistently report that their custom defined skills and subagents are never automatically invoked even for fully matching tasks, breaking custom workflow integrations.
3. **Session persistence fragility**: A cluster of overlapping bugs cause lost chat history, invalid resume links, and race conditions during session listing for users with moderate to long usage history.
4. **Unintended permission bypasses**: Users are reporting unexpected behavior where subagents launch even when explicitly disabled in config, and security gaps that hide pre-configured hooks from folder trust confirmation prompts.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-15
---
## 1. Today's Highlights
Today’s 24-hour tracked window includes no new official releases or active pull request updates for Copilot CLI. A long-running high-impact context memory bug received new community activity and user reports, alongside four actionable new triage-stage submissions from enterprise and power users. Two low-quality unsubstantiated issue reports were filed, with one immediately marked closed as invalid by maintainers.
## 2. Releases
No new GitHub Copilot CLI versions were published in the 24-hour window ending 2026-06-15.
## 3. Hot Issues
Only 5 valid, non-spam actionable issues are featured from today’s 7 total updated items, ordered by community engagement:
1. **Duplicate Item Errors (#3558)**: 7 👍, 4 comments. A high-severity bug affecting context memory and model processing that throws unresolvable 400 websocket errors mid-workflow, breaking long-running agent sessions with no documented user workaround. Link: [github/copilot-cli#3558](https://github.com/github/copilot-cli/issues/3558)
2. **Agent skills scripts executed in wrong folder (#956)**: 2 👍, 6 comments. A long-open bug that breaks compliance with the official Agent Skills specification, causing relative path references to script assets in SKILLS.md to fail and making custom shared skill packs non-portable across environments. Link: [github/copilot-cli#956](https://github.com/github/copilot-cli/issues/956)
3. **Feature request: opt-in model discovery for BYOK / custom providers (#3795)**: New enterprise-facing feature request that eliminates the manual requirement to set `COPILOT_MODEL` or pass a `--model` flag on every session for teams using custom self-hosted or third-party model providers. Link: [github/copilot-cli#3795](https://github.com/github/copilot-cli/issues/3795)
4. **Add Azure DevOps work items to Up next (#3794)**: Cross-toolchain feature request that extends the existing Up next unified task inbox to surface ADO work items alongside GitHub items, a gap for teams that already use Copilot CLI with ADO-hosted repos. Link: [github/copilot-cli/issues/3794](https://github.com/github/copilot-cli/issues/3794)
5. **Malformed attachment poisons session; all subsequent turns fail with 400 (#3791)**: Severe usability bug where a single bad input (e.g. password-protected encrypted Excel file) breaks the entire rest of a Copilot session, even if the user stops sending attachments in later prompts. Link: [github/copilot-cli#3791](https://github.com/github/copilot-cli/issues/3791)

The remaining 2 updated issues are a spam hex identifier submission (#3793) and an empty unsubstantiated report (#3796, marked closed as invalid) with no actionable content.
## 4. Key PR Progress
No pull requests received new updates (opened, reviewed, or merged) in the tracked 24-hour window. No new feature work or bug fixes are marked as in active public PR review at this time.
## 5. Feature Request Trends
Three clear high-priority feature directions emerged from recently submitted user requests:
1. Expanded cross-platform inbox integration, to turn the Copilot CLI Up next panel into a single unified task view for developers using mixed GitHub + Azure DevOps toolchains
2. Reduced configuration overhead for BYOK/custom model deployments, adding automatic model discovery to eliminate manual model ID configuration on every session launch
3. Full, verified alignment with the public agentskills.io specification to support fully portable, shareable custom agent skill packs with relative asset path resolution
## 6. Developer Pain Points
Three recurring high-frustration issues surfaced in updated reports:
1. Unhandled session poisoning: A single malformed input (bad attachment, context processing error) permanently breaks an active session, forcing users to discard all accumulated context and restart completely
2. Unresolvable CAPI duplicate ID errors: Context memory logic generates duplicate call IDs during long-running agent workflows, throwing 400 bad request errors with no documented user workaround
3. Non-compliant skill path resolution: Agent skill script references do not follow the official documented spec, making pre-built shared skill packs fail to run out of the box for end users

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-15
Source Repository: github.com/MoonshotAI/kimi-cli

---
## 1. Today's Highlights
No new official releases were published in the 24-hour tracking window, but 4 long-dormant pending pull requests were closed, 3 of which resolve months-old Windows platform compatibility gaps for Kimi Code CLI users. Two high-priority user issues were updated or filed, including a public complaint from a paid Code Plan subscriber about untransparent rate limiting, and a newly reported system prompt conflict bug affecting v0.12.0 users running custom workflow rules.
All merged fixes this cycle target quality of life improvements for cross-platform developer workflows, with no breaking changes included.

## 2. Releases
No new stable, pre-release, or patch versions of Kimi Code CLI were published in the 24 hours prior to 2026-06-15.

## 3. Hot Issues
Only 2 total issues received updates in the tracking window, both listed below:
1. [#2123] Paid Code Plan rate limit and quota disclosure complaint (https://github.com/MoonshotAI/kimi-cli/issues/2123)
    Why it matters: A paid subscriber reports actual 5-hour API call limits top out at ~60 requests, 80% lower than the advertised 300-1200 range, with no public, explicit published quota values for the Code Plan tier. The issue already has 2 community comments from other users confirming similar under-delivery of promised limits, representing a core trust and service transparency concern for the paid user base.
2. [#2451] System prompt conflicts with custom user workflow rules (https://github.com/MoonshotAI/kimi-cli/issues/2451)
    Why it matters: Newly filed for Kimi Code v0.12.0 running on Debian with the open API key flow, the bug reports that the CLI's hardcoded base system prompt overrides custom user-defined development guidelines, breaking custom agent configurations and strict workflow enforcement setups for power users.

## 4. Key PR Progress
Only 4 total PRs received updates in the tracking window, all listed below:
1. [#2452] fix(tools): fail StrReplaceFile when a multi-edit hunk is unmatched (https://github.com/MoonshotAI/kimi-cli/pull/2452)
    Open pending review: The patch fixes the existing StrReplaceFile tool logic that only threw an error if zero total edits across all hunks were applied, instead explicitly failing the tool call immediately when any individual edit hunk does not match target file content, preventing partial, incomplete file modifications.
2. [#2018] feat: add Alt+V paste support for Windows Terminal (https://github.com/MoonshotAI/kimi-cli/pull/2018)
    Closed/merged: Resolves a long-standing pain point where Windows Terminal intercepts the native Ctrl+V paste shortcut, preventing the Kimi CLI from receiving the event. The PR adds Alt+V as a fully functional fallback media paste binding matching existing Ctrl+V functionality for other platforms.
3. [#2020] fix: use per-process log filenames to prevent rotation lock on Windows (https://github.com/MoonshotAI/kimi-cli/pull/2020)
    Closed/merged: Eliminates the WinError 32 permission error that occurred when running multiple concurrent Kimi CLI instances, by appending the running process ID to log filenames to remove contention on shared `kimi.log` during rotation.
4. [#839] feat(shell): add configurable shell support for Windows (https://github.com/MoonshotAI/kimi-cli/pull/839)
    Closed/merged: Overhauls Windows shell integration to add user-selectable support for PowerShell, WSL, and native Cmd, removing the previous hard-coded default shell that broke workflows for users running non-default Windows terminal environments.

## 5. Feature Request Trends
Distilled from all tracked issues and recent community activity:
1. Top request: Fully public, real-time, granular quota and rate limit disclosures for all paid Kimi Code Plan tiers, replacing the current vague percentage-only usage metric.
2. Second highest demand: Exposed system prompt customization controls that do not overwrite or interfere with user-defined custom workflow guidelines and custom agent rules.
3. Ongoing trend: Full feature parity for Windows platform users to match existing Linux/macOS native functionality, after years of unaddressed Windows-specific breakages.

## 6. Developer Pain Points
1. Paid Code Plan users face drastically under-delivery of advertised API call limits, with no transparent quota breakdowns leading to unexpected service disruptions mid-workflow.
2. Windows users historically encountered multiple unaddressed quality of life bugs, including missing paste shortcuts, multi-instance log permission locks, and limited shell integration, most of which were only patched this month after lingering for 4+ months.
3. Power users building custom automated development workflows report that the CLI's fixed, non-configurable base system prompt regularly overrides their strict custom task rules, leading to non-compliant generated code outputs that do not match internal style and process requirements.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-15
---

## 1. Today's Highlights
The official v1.17.7 patch release landed today with core fixes for plugin reliability, shell workflow visibility, and PTY environment handling. The highest-engagement community feature request (adjusting OpenCode Go subscription limits to reflect DeepSeek V4 Pro's permanent 75% price cut) was formally closed after 77 comments and 79 upvotes, unlocking drastically more coding compute value for paid users. A wave of merged PRs also delivered long-awaited reliability improvements for TUI workflows, plugin extensibility, and multi-provider support.

## 2. Releases
### v1.17.7
This core patch release ships with 3 targeted bug fixes:
- Plugin client requests now reuse the active connected server instead of hardcoding a default local port, eliminating connection failures for remote/daemon deployments
- ACP shell tool calls display the target command and working directory immediately on execution, removing ambiguous loading states during agent runs
- Plugin-provided custom shell environment variables now correctly propagate to PTY sessions
- Partial in-progress improvements for the MCP (Model Context Protocol) subsystem are included as a preview.

## 3. Hot Issues (Top 10 Notable)
1. **[#28846 CLOSED] Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price cut](https://github.com/anomalyco/opencode/issues/28846)** | 77 comments, 79 👍: The highest-voted recent community request has been resolved, with paid OpenCode Go subscribers set to receive 4x their original allocated DeepSeek V4 Pro usage at no additional cost.
2. **[#25832 OPEN] OpenCode can no longer read images** | 12 comments, 4 👍: Users report a post-April 2026 regression that breaks vision model workflows, where uploaded screenshots/UI mockups throw invalid format errors despite the recent launch of native image input support.
3. **[#5305 OPEN] Plugin Hook for Instant TUI Commands** | 18 comments, 13 👍: 18 developers are collaborating on a spec for a new plugin API that lets extensions register zero-agent TUI commands for fast utility actions, removing mandatory LLM dispatch for trivial operations like syntax validation or git status checks.
4. **[#11829 OPEN] Recursive Language Model Context Management (Context as External Environment)** | 6 comments, 11 👍: A proposal built on MIT 2026 RLM research is gaining traction, which replaces manual context window compaction with a programmatic queryable external context store that the model can pull relevant snippets from on demand.
5. **[#31901 OPEN] Add SSH remote directory references** | 4 comments: Devs working on remote bare-metal servers are requesting native support for direct SSH-linked workspaces, eliminating the need to sync files locally for OpenCode to access the codebase.
6. **[#26412 OPEN] Custom OpenAI-compatible provider: "Expected 'function.name' to be a string" error on streaming tool calls** | 5 comments: Self-hosted users running vLLM and Llama.cpp backends are facing broken tool use functionality due to a schema parsing mismatch for streaming chunks.
7. **[#32336 OPEN] TUI incomplete terminal teardown on exit** | 3 comments: Power users report that exiting the OpenCode TUI leaves mouse tracking, bracketed paste, and alternate screen modes enabled, breaking their default terminal shell state.
8. **[#31526 OPEN] SQLite auto_vacuum is disabled, database files grow indefinitely** | 2 comments: Long-running OpenCode instances accumulate multiple GBs of unused SQLite space over months of use due to disabled garbage collection, leading to degraded startup performance.
9. **[#20953 CLOSED] TUI freezes when used via SSH at 70k tokens** | 3 comments: Remote headless dev users report session hangs on long-running coding sessions over SSH, traced to unhandled TCP idle timeout events for large context payloads.
10. **[#30763 OPEN] TUI user-defined session status flags/labels** | 4 comments: Multi-tasking developers want lightweight custom tags (todo/doing/debugging) to organize dozens of concurrent work sessions without navigating to an external management UI.

## 4. Key PR Progress
1. **[#32075 OPEN] feat(core): add configurable plan reminders](https://github.com/anomalyco/opencode/pull/32075)** : This PR lets users fully customize the default plan mode system prompts, closing two 6+ month old feature requests for workflow-specific planning behavior.
2. **[#32349 CLOSED] feat(plan): enable plan mode by default](https://github.com/anomalyco/opencode/pull/32349)** : The experimental plan mode feature is being promoted to default enabled for all new users, shifting the product's default workflow to the structured plan-then-execute model.
3. **[#27461 CLOSED] feat(plugin): add sidebar panel API for plugin-contributed UI panels](https://github.com/anomalyco/opencode/pull/27461)** : A massive plugin ecosystem expansion that lets extensions add custom persistent status UI panels to the desktop app sidebar, no hacks required for cost trackers, CI integrations, and VCS tools.
4. **[#27597 CLOSED] cli: fix question recovery matching wrong session](https://github.com/anomalyco/opencode/pull/27597)** : Resolves a widespread bug that caused stuck processes when the CLI accidentally routed stale user confirmation prompts to new active sessions.
5. **[#27581 CLOSED] fix(mcp): normalize hyphenated tool ids](https://github.com/anomalyco/opencode/pull/27581)** : Fixes MCP tool failures caused by a naming mismatch between the hyphenated IDs used in the MCP spec and underscored names exposed to the LLM.
6. **[#27469 CLOSED] fix(desktop): remap base64 workspace store names during Tauri to Electron migration](https://github.com/anomalyco/opencode/pull/27469)** : Prevents full loss of historical session data for users upgrading from the old Tauri-based desktop app to the new Electron release.
7. **[#27535 CLOSED] fix(opencode): auto-exit plan mode when user asks to implement](https://github.com/anomalyco/opencode/pull/27535)** : Eliminates a widely reported bug where the agent got stuck in read-only plan mode after users explicitly requested to start implementing their outlined plan.
8. **[#27460 CLOSED] feat(plugin): add MiniMax Token Plan OAuth provider](https://github.com/anomalyco/opencode/pull/27460)** : Adds official native authentication support for the popular Chinese LLM provider's paid coding plans, expanding regional multi-provider coverage.
9. **[#27502 CLOSED] fix: connect auto-approve permissions toggle to settings store](https://github.com/anomalyco/opencode/pull/27502)** : Resolves a long standing UX bug where the auto-approve permission toggle in settings did not persist, forcing users to manually confirm every bash command.
10. **[#27513 CLOSED] docs: add @artem-kuprin/opencode-toolcost to ecosystem](https://github.com/anomalyco/opencode/pull/27513)** : Adds the community-built real-time LLM cost tracking plugin to the official ecosystem catalog, making it easily discoverable for teams monitoring their OpenCode spend.

## 5. Feature Request Trends
The highest-demand feature directions from the past 24 hours are:
1. **Extended remote environment access**: Proposals for native SSH directory references and WSL runtime integration for the Windows desktop app to eliminate local file sync friction.
2. **Plugin ecosystem expansion**: Developers are pushing for expanded plugin APIs including instant TUI command hooks, custom sidebar panels, and third-party OAuth provider registration.
3. **Advanced workflow organization**: Requests for user-defined session tags, saved prompt templates, and persistent thread bookmarking for multi-project teams.
4. **Native multi-model orchestration**: Early community interest in built-in model fusion functionality that combines outputs from multiple LLMs to reduce coding hallucinations and boost performance.

## 6. Developer Pain Points
Recurring high-priority frustrations reported today:
1. TUI reliability gaps for remote use cases: Users running OpenCode over SSH report session freezes, and post-exit broken terminal state that requires full terminal restarts.
2. Vision workflow regressions: The recent full rollout of image input support introduced unhandled errors that break all local image upload use cases, affecting designers and frontend devs heavily.
3. Self-hosted provider compatibility gaps: Users running custom OpenAI-compatible backends (vLLM, Llama.cpp) are facing broken streaming tool use due to missing schema normalization logic.
4. Database bloat: Unpatched SQLite auto_vacuum defaults cause unbounded storage growth that can lead to multi-GB database files for instances running for 6+ months.
5. Persistence bugs: Multiple users report repeated authentication drops, lost session history, and broken permission state resets after app restarts.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-15
Repository: github.com/badlogic/pi-mono

---
## 1. Today's Highlights
Today's updates center on high-priority cost control fixes for LLM API usage, major quality-of-life improvements to the Pi extension ecosystem, and native first-class support for xAI Grok accounts. A critical unpatched bug that silently reduced Anthropic 1-hour cache retention to 5 minutes (causing 20-30% unexpected cost inflation for many users) has been marked as resolved, alongside long-awaited fixes for process hangs, local LLM workflow breaks, and Windows compatibility gaps. No new stable or pre-release versions were published in the last 24 hours.

## 2. Releases
No new public stable, pre-release, or nightly builds of pi-mono were released in the 24-hour reporting window.

## 3. Hot Issues
1. **[#5103 Windows bash detector fails for non-default Git Bash paths](https://github.com/earendil-works/pi/issues/5103)** (17 comments): A widely reported Windows compatibility bug that breaks bash detection for users who install Git for Windows on non-C drives. It is the highest-activity open user-reported issue from the past 24 hours, with multiple community members sharing their non-standard install paths to help debug.
2. **[#5653 Move off Shrinkwrap](https://github.com/earendil-works/pi/issues/5653)** (9 comments): Fixes a root cause bug that creates duplicate copies of `pi-ai` when multiple Pi packages are installed as dependencies, breaking module-level shared state for the API provider registry. Multiple extension authors have noted this bug is responsible for random unregistered provider errors in production.
3. **[#5703 1h Claude cache retention silently degraded to 5m, inflating Anthropic costs](https://github.com/earendil-works/pi/issues/5703)** (8 comments, closed): A critical resolved bug where Pi failed to send Anthropic's required beta cache header, silently dropping 1-hour cache TTLs to 5 minutes. Users shared screenshots of unexpected cost spikes confirming the impact, and the fix will ship in the next minor release.
4. **[#5654 Add `excludeFromContext` to custom `sendMessage()` payloads](https://github.com/earendil-works/pi/issues/5654)** (6 comments, 1 👍): Highly requested by extension developers building status and telemetry tooling, who want to inject UI-only messages that do not bloat the LLM context window.
5. **[#5687 `pi list` / `pi update` never exit when extensions run MCP servers](https://github.com/earendil-works/pi/issues/5687)** (6 comments, closed): A resolved process leak bug that made Pi's package management commands completely hang for any user with an MCP extension installed.
6. **[#3627 Expose timeout and retry settings for OpenAI providers](https://github.com/earendil-works/pi/issues/3627)** (6 comments, 2 👍): A 2-month old long-running issue now near resolution, which will unblock usage of Pi with slow local self-hosted LLM backends that exceed the default 10-minute client timeout.
7. **[#5644 GPT 5.5 has incorrect context window size configuration](https://github.com/earendil-works/pi/issues/5644)** (6 comments, closed): A resolved misconfiguration that would cause prompt truncation or unnecessary token waste for OpenAI's newly released GPT-5.5 API and Codex endpoints.
8. **[#5706 Tasks hang indefinitely at summary approval with local LLM backends](https://github.com/earendil-works/pi/issues/5706)** (5 comments): A recently triaged bug that breaks full workflow execution for all users running Pi against self-hosted OpenAI-compatible LLMs, with no impact to public cloud providers.
9. **[#5671 Global `~/.pi` and project-local `.pi` directories overlap](https://github.com/earendil-works/pi/issues/5671)** (5 comments, 3 👍): A UX pain point for power users that causes unexpected config conflicts when running Pi directly inside their home directory, as global and project-local settings folders collide.
10. **[#5718 Cache control TTL ordering causes 400 errors behind enterprise proxies](https://github.com/earendil-works/pi/issues/5718)** (4 comments, closed): A resolved 0.79.0 regression that breaks traffic routed through enterprise LLM proxies that rewrite system-block TTL values, affecting large enterprise Pi deployments.

## 4. Key PR Progress
1. **[#5678 Add `excludeFromContext` for custom messages](https://github.com/earendil-works/pi/pull/5678)**: Implements the requested feature from issue #5654, adding full support across the agent harness, extension API, and context compaction logic to mark custom messages as UI-only and exclude them from LLM context.
2. **[#5735 Defer extension reload requests safely](https://github.com/earendil-works/pi/pull/5735)**: Adds a deferral mechanism that makes `ctx.reload()` usable from all extension contexts (not just slash commands), preventing crashes from mid-execution extension reloads.
3. **[#5732 Add `allowCommands` option to `sendUserMessage`](https://github.com/earendil-works/pi/pull/5732)** (merged): Enables extension-injected messages to trigger Pi slash commands, a critical required feature for IDE and external workflow bridge integrations.
4. **[#5731 Add tool instrumentation for execution profiling](https://github.com/earendil-works/pi/pull/5731)** (merged): Adds built-in telemetry hooks to track execution time for all Pi tools, allowing users to debug slow bash runs and bottlenecked workflows.
5. **[#5714 Add xAI Grok account OAuth login](https://github.com/earendil-works/pi/pull/5714)** (merged): Delivers native first-class Grok support, with OIDC device-code login, refresh tokens, and native integration with Grok's official subscription API, no manual API key required.
6. **[#5711 Add extension prompt guideline API](https://github.com/earendil-works/pi/pull/5711)**: Implements the new `pi.setPromptGuidelines()` API requested in #5710, allowing extensions to inject global custom rules that apply to all agent runs.
7. **[#5385 Detect terminal theme on first run](https://github.com/earendil-works/pi/pull/5385)** (merged): Automatically detects the user's terminal light/dark theme via OSC query on first launch, eliminating the manual theme configuration step for new users.
8. **[#2331 Add vim-like modal editor extension](https://github.com/earendil-works/pi/pull/2331)** (merged): A long-running PR that adds full Vim motion, operator, and ex-command support directly inside Pi's TUI, removing the need to launch an external editor for small code edits.
9. **[#5526 Require terminal events for OpenAI Responses streams](https://github.com/earendil-works/pi/pull/5526)**: Fixes the widely reported bug where OpenAI streams randomly hang mid-generation, removing the frequent need for users to manually type `continue` to unblock execution.
10. **[#5708 Wrap question extension text instead of truncating](https://github.com/earendil-works/pi/pull/5708)** (merged): Fixes the unreadable non-wrapping help text for commands like `/tree` reported in #5055, drastically improving TUI documentation readability.

## 5. Feature Request Trends
The top priority user and contributor feature directions for recent updates are:
1.  **Extension ecosystem maturity**: Leading request volume, with asks for raw provider response exposure in hooks, extension-level prompt guidelines, enhanced sendMessage controls, and official marketplace categorization with ratings for community extensions.
2.  **Multi-session TUI support**: The top user-facing feature request, for the ability to run multiple concurrent background agent sessions and seamlessly switch between them in the Pi terminal UI.
3.  **Full local/self-hosted LLM compatibility**: Requests for configurable timeouts, better hang detection, and workflow parity between public cloud and self-hosted OpenAI-compatible LLM backends.
4.  **Extended provider configuration**: Support for storing non-API-key provider settings (like Cloudflare AI Gateway account and gateway IDs) in Pi's native `auth.json` config, rather than requiring manual environment variable setup.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1.  **Unplanned LLM API cost overruns**: Multiple recent bugs (including the recently fixed Claude cache TTL issue) that silently break API cost controls, leading to unexpected, unbudgeted spend for teams running Pi at scale.
2.  **TUI reliability gaps**: Frequent reports of command hangs after execution, escape keys failing to cancel running subagents, broken raw terminal state after SIGTERM, and chat view jumping to the top during streaming output.
3.  **Windows compatibility gaps**: The long-running Git Bash non-default path detection bug remains a major unpatched blocker for Windows users with non-standard install configurations.
4.  **Shared state breakage from duplicate nested dependencies**: Duplicate copies of Pi core packages installed as transitive dependencies cause shared module-level state (like the provider registry) to split, leading to random inconsistent runtime errors that are hard to debug.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-15
*Source: https://github.com/QwenLM/qwen-code*

---

## 1. Today's Highlights
Today’s highest-engagement discussion centers on the proposed Qwen OAuth free tier policy adjustment, which has accumulated 135+ community comments from developers reacting to the planned 90% cut to daily free request limits and full phase-out of the no-cost access point. The repository saw a rush of 20+ merged and open PRs targeting high-priority stability issues, including memory leaks, TUI freezes, broken MCP integrations, and incorrect 401 authentication errors across all supported platforms. Multiple community contributions are also advancing to add one-click config migration for users switching over from competing coding assistants.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues
1. **#3203 Qwen OAuth Free Tier Policy Adjustment**: 135 total comments, the most active thread in the repository. Developers are reacting to the announced cut of free daily requests from 1000 to 100, followed by a full shutdown of the free access point, with many users requesting low-cost entry-level paid plans to avoid disruption. [Link](https://github.com/QwenLM/qwen-code/issues/3203)
2. **#5055 P1 Windows VS Code Extension False Positive Trojan Alert**: Windows 11 users report that Microsoft Defender flags the latest v0.18.0 VS Code companion .vsix file as `Trojan:JS/ShaiWorm.DBA!MTB`, fully blocking installation for new Windows users. [Link](https://github.com/QwenLM/qwen-code/issues/5055)
3. **#4218 Windows MCP Filesystem Integration Bug**: Users report that configured MCP filesystem servers show as connected on the UI, but no tool definitions are passed to the LLM, fully breaking all file system automation workflows for Windows users. [Link](https://github.com/QwenLM/qwen-code/issues/4218)
4. **#5080 Aliyun API Key 401 Mismatch Bug**: Users get generic invalid 401 errors when switching between standard Aliyun API keys and Token Plan model endpoints, breaking model switching functionality without clear troubleshooting guidance. [Link](https://github.com/QwenLM/qwen-code/issues/5080)
5. **#5083 Linux TUI Freeze Due To Unreaped Zombie Processes**: Long-running TUI sessions become completely unresponsive, traced to unreaped zombie bash child processes that are never reclaimed by the parent Qwen process. [Link](https://github.com/QwenLM/qwen-code/issues/5083)
6. **#5102 Non-Interactive Permission Probe Bypass Bug**: Qwen Code executes unapproved side effects on user files during the security permission contract probe, breaking the no-side-effects guarantee for headless automation runs. [Link](https://github.com/QwenLM/qwen-code/issues/5102)
7. **#4845 One-Click Claude Code Config Migration Feature Request**: Highly requested feature to import existing MCP server configs, custom instructions, and permissions from Claude Code directly into Qwen Code to reduce switching friction. [Link](https://github.com/QwenLM/qwen-code/issues/4845)
8. **#3272 Missing Paid Pro Plan Availability**: Multiple users report that the paid Pro tier is permanently marked "sold out", forcing power users who outgrew the existing free tier limits to look for alternative tools. [Link](https://github.com/QwenLM/qwen-code/issues/3272)
9. **#5101 Repeated Large Tool Result Context Bloat Bug**: Qwen Code echoes identical large tool outputs repeatedly back to the model in conversation history, rapidly inflating context size until the request exceeds the model's maximum context window. [Link](https://github.com/QwenLM/qwen-code/issues/5101)
10. **#4723 Custom Global Instructions Support Request**: Users ask for native support for persistent cross-session custom rules similar to GitHub Copilot instructions or Claude Code system rules to enforce consistent coding styles across sessions. [Link](https://github.com/QwenLM/qwen-code/issues/4723)

## 4. Key PR Progress
1. **#5097 Fix Memory Monitor Starvation During Autonomous Agent Loops**: Resolves an OOM bug where zero-idle agent loops block the event loop, preventing memory monitoring background tasks from running and leading to unconstrained UI history growth. [Link](https://github.com/QwenLM/qwen-code/pull/5097)
2. **#5111 Bound Active Tool Result History**: Adds a configurable character limit for tool results, automatically compacting older non-critical outputs through the existing microcompaction system to prevent runaway context bloat. [Link](https://github.com/QwenLM/qwen-code/pull/5111)
3. **#4894 Fix Dual-Output TUI FIFO Startup Block**: Patches the reported #4727 bug where the dual-output named pipe mode hangs indefinitely on startup if no reader is connected to the FIFO. [Link](https://github.com/QwenLM/qwen-code/pull/4894)
4. **#5089 Decouple Provider Identity From SDK Protocol**: Implements the requested refactor, converting provider IDs from fixed enums to free-form strings and adding a standalone Protocol enum to support custom third-party model providers with any OpenAI/Gemini/Anthropic compatible API. [Link](https://github.com/QwenLM/qwen-code/pull/5089)
5. **#4967 Add Numeric String Coercion For MCP Schema Validation**: Fixes broken MCP tool invocation failures where number/integer parameters passed as strings from the LLM get rejected by the schema validator, resolving the root cause of many reported Windows filesystem MCP failures. [Link](https://github.com/QwenLM/qwen-code/pull/4967)
6. **#5115 Fix Broken /review Skill For Agent Team Workflows**: Resolves issue #5100 where the bundled PR review skill fails after the recent multi-agent feature updates, eliminating infinite turn loops caused by unrecognized agent name parameters. [Link](https://github.com/QwenLM/qwen-code/pull/5115)
7. **#5073 Add Oversized Context Instruction Warning**: Shows a startup warning if the user's global QWEN.md custom context file takes up more than 15% of the active model's context window, helping users avoid silent context truncation. [Link](https://github.com/QwenLM/qwen-code/pull/5073)
8. **#4909 Support Extension Installation From Archive Files**: Adds support for installing custom Qwen Code extensions directly from local .zip/.tar.gz archives and remote hosted archive URLs, streamlining self-hosted extension distribution for enterprise teams. [Link](https://github.com/QwenLM/qwen-code/pull/4909)
9. **#4525 Include Model Response Tokens In Prompt Size Estimation**: Fixes undercounting of total conversation payload size during context limit checks, preventing oversized API requests that get rejected by model providers. [Link](https://github.com/QwenLM/qwen-code/pull/4525)
10. **#4989 Add Scheduled Auto-Fix Workflow For Stale Bugs**: Launches a new CI pipeline that runs daily to automatically triage and attempt to resolve unattended stale bug reports using Qwen Code's own agentic capabilities. [Link](https://github.com/QwenLM/qwen-code/pull/4989)

## 5. Feature Request Trends
1. **Cross-tool migration support**: The top requested feature is native import of full configurations, MCP server definitions, and custom rules from Claude Code and GitHub Copilot to drastically reduce onboarding friction for users switching between coding assistants.
2. **Multi

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-15
*Official project rebranded from `deepseek-tui` to CodeWhale as of this digest*

---

## 1. Today's Highlights
The project formally announced its full rebrand to CodeWhale with the v0.8.60 stable release, marking the end of updates for the legacy deprecated `deepseek-tui` npm package. Core maintainers have shared a 28-commit work-in-progress PR for v0.8.61 that targets top user-reported TUI freezes, multi-agent reliability fixes, and the foundational layer for the upcoming WhaleFlow swarm orchestration system. The community has also landed a wave of contributed features including provider fallback chain support, VSCode extension scaffolding, and Hugging Face ecosystem integrations over the last 24 hours.

## 2. Releases
### v0.8.60
The first official rebranded release, with CodeWhale as the canonical project, command, npm package, and release asset name. All existing v0.8.x users of the legacy `deepseek-tui` package are required to follow the [REBRAND.md migration guide](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md) to avoid broken update paths and missing binary errors. The legacy `deepseek-tui` npm package will receive no further patches or feature releases.

## 3. Hot Issues
| Issue Link | Details & Community Context |
|------------|------------------------------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | 12-comment top open bug causing frequent "Turn stalled - no completion signal received" failures in YOLO automation mode, with no way to resume interrupted tasks via the `continue` command. It is the highest-priority reliability fix targeted for v0.8.61. |
| [#1186](https://github.com/Hmbown/CodeWhale/issues/1186) | 8-comment core security feature request for typed persistent execution permission rules scoped to tool name, command prefix, and workspace path, with explicit `allow`/`deny`/`ask` decision controls. This is a required feature for enterprise deployments using CodeWhale in shared team workspaces. |
| [#3147](https://github.com/Hmbown/CodeWhale/issues/3147) | 7-comment recently closed bug fix that resolves MSBuild FileTracker initialization failures, unblocking CMake + Visual Studio 2022 build workflows for Windows C++ and .NET developers using CodeWhale-managed shells. |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | 5-comment top Windows reliability bug describing intermittent full TUI unresponsiveness caused by crossterm poll hangs, with no keyboard input or screen updates while the host process remains alive. |
| [#2574](https://github.com/Hmbown/CodeWhale/issues/2574) | 3-comment highly requested feature for auto-switching provider fallback chains, eliminating the need for manual `/provider` reconfiguration when primary providers hit quota limits, 429 rate limits, or 5xx outages. |
| [#3207](https://github.com/Hmbown/CodeWhale/issues/3207) | 2-comment installation blocker for Ubuntu 22.04 LTS users, as current release binaries are compiled against GLIBC 2.39 (Ubuntu 24.04) and throw missing symbol errors on the widely deployed 2.35 GLIBC version. Users are requesting separate 22.04-targeted static builds. |
| [#3012](https://github.com/Hmbown/CodeWhale/issues/3012) | Newly closed enhancement adding automatic loading of a global `~/.codewhale/instructions.md` context file, letting users define cross-project default prompt rules without manually editing per-workspace project instruction files. |
| [#2924](https://github.com/Hmbown/CodeWhale/issues/2924) | Top post-rebrand migration pain point: users on the legacy `deepseek-tui` npm package cannot update to new versions via standard npm workflows, with 1 upvote from affected community members. |
| [#3192](https://github.com/Hmbown/CodeWhale/issues/3192) | Request to list CodeWhale on the public Agent Client Protocol Registry, which would make the tool natively discoverable and installable directly from the Zed code editor, expanding its IDE ecosystem footprint. |
| [#3230](https://github.com/Hmbown/CodeWhale/issues/3230) | Core missing WhaleFlow swarm orchestration feature: a synthesis/reduce pass that combines outputs from dozens of parallel worker agents into one coherent final result, a required capability for large multi-agent code generation tasks. |

## 4. Key PR Progress
| PR Link | Feature / Fix Summary |
|---------|------------------------|
| [#3225](https://github.com/Hmbown/CodeWhale/pull/3225) | WIP draft v0.8.61 release PR rolling up 28 community contributions, top TUI freeze fixes, and WhaleFlow foundational layer work, currently in review before final merge. |
| [#2811](https://github.com/Hmbown/CodeWhale/pull/2811) | Official phase 0 VSCode extension scaffold that adds native commands to launch CodeWhale, manage local runtime state, and display CodeWhale status in the VSCode status bar. |
| [#2779](https://github.com/Hmbown/CodeWhale/pull/2779) | Implements full data model and parsing support for the requested `fallback_providers` config field, laying the groundwork for runtime automatic provider switching on API errors. |
| [#2770](https://github.com/Hmbown/CodeWhale/pull/2770) | Adds support for loading project-local `.codewhale/mcp.json` MCP server definitions in trusted workspaces, eliminating redundant global MCP configuration for shared open-source repositories. |
| [#2795](https://github.com/Hmbown/CodeWhale/pull/2795) | Upgrades authentication error messages to include redacted API key fingerprints, target provider, base URL, and model context, cutting debugging time for 401 failures on third-party OpenAI-compatible endpoints. |
| [#2102](https://github.com/Hmbown/CodeWhale/pull/2102) | Reduces TUI startup latency by deferring load of low-frequency native tools by default, with a new `[tools] always_load` config option to opt specific tools back into the active catalog. |
| [#2805](https://github.com/Hmbown/CodeWhale/pull/2805) | MVP deterministic response cache for non-streaming zero-temperature chat requests, eliminating redundant API calls and reducing costs for repeated identical agent queries. |
| [#2646](https://github.com/Hmbown/CodeWhale/pull/2646) | Hardens release tooling by enforcing correct workspace dependency order during crates.io publishes, fixing broken partial package rollouts that affected earlier v0.8.x releases. |
| [#2771](https://github.com/Hmbown/CodeWhale/pull/2771) | Upgrades the `/init` command to automatically generate custom `AGENTS.md` role definitions based on auto-detected project tech stacks, no manual template editing required. |
| [#2802](https://github.com/Hmbown/CodeWhale/pull/2802) | Adds native Hugging Face slash commands to verify MCP setup, search model concepts, and validate provider configuration, streamlining integration with the Hugging Face ecosystem. |

## 5. Feature Request Trends
The most requested development directions from the community are:
1.  **WhaleFlow multi-agent orchestration**: Priority requests for shared fleet task ledgers, synthesis reduce passes, subagent checkpoint/resume across turns, and per-agent role-based tool filtering.
2.  **Third-party provider usability**: Auto fallback chains on API errors, expanded multi-model cost tracking for non-DeepSeek providers, and native reasoning parsing support for Qwen, GLM, MiniMax, and other local model formats.
3.  **IDE ecosystem expansion**: Official VSCode and Zed editor integration for native in-editor CodeWhale runtime control.
4.  **TUI UX for long tasks**: Real-time token usage telemetry, native modal user clarification prompts instead of hidden chat messages, and persistent sidebar state customization.

## 6. Developer Pain Points
Recurring high-impact frustrations reported by the community:
1.  **Post-rebrand migration friction**: The deprecation of the legacy `deepseek-tui` npm package has broken existing update flows, leading to `codewhale not found in PATH` errors for users running legacy update commands.
2.  **Windows platform reliability gaps**: Frequent intermittent TUI freezes, SSE multi-agent 45s timeouts, and UI rendering glitches that force users to fall back to single-agent serial workflows.
3.  **Multi-agent workflow bottlenecks**: Hard 120s API timeouts for sub-agent tasks, clipped subagent outputs that the model misinterprets as complete full results, and no way to resume partial subagent work after interruptions.
4.  **Linux compatibility gaps**: Current release binaries do not support Ubuntu 22.04 LTS (the most widely deployed server distribution) due to a hard GLIBC 2.39 requirement, blocking on-premises self-hosted deployments.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*