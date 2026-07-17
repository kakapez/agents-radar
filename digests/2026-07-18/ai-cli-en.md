# AI CLI Tools Community Digest 2026-07-18

> Generated: 2026-07-17 22:50 UTC | Tools covered: 9

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

# 2026-07-18 AI CLI Tools Cross-Tool Comparison Report
---
## 1. Ecosystem Overview
As of the reporting window, the global AI developer CLI tool ecosystem has moved past early rapid feature expansion to a refinement phase focused on stability, security hardening, power user experience, and extensibility. All tracked active projects are prioritizing closing long-tail cross-platform compatibility gaps, hardening plugin/MCP integration security, and reducing unnecessary user friction after validating core code assistant functionality for general production use. A large share of recent updates and community feature requests are centered on supporting fully self-hosted, local LLM workflows, a use case previously underserved by closed-source commercial vendors. No major breaking changes or overhauls were rolled out in the 24h window, with engineering teams prioritizing post-release stabilization for recently launched features.

## 2. Activity Comparison
| Tool Name | 24h Updated Hot Issues | 24h Active PRs | Release Activity (24h Window) |
|-----------|------------------------|----------------|--------------------------------|
| Claude Code | 10 | 8 | Shipped stable v2.1.212, with major rework of `/fork` and auto-mode management utilities |
| OpenAI Codex | 10 | 9 | Published 3 sequential Rust 0.145.0 alpha pre-releases as part of the full CLI runtime rewrite |
| Gemini CLI | 10 | 10 | No new public releases, merged multiple critical security patches and the foundational Issue-to-PR pipeline |
| GitHub Copilot CLI | 10 | 0 | Shipped stable v1.0.72-1 point release that fixed the long-running session wedging bug |
| Kimi Code CLI | 4 | 0 | No new public releases, no active PR changes recorded in the window |
| OpenCode | 10 | 10 | No user-facing stable releases, published automated validation builds for merged PRs |
| Pi (pi-mono) | 10 | 10 | No new public releases, merged 23 total feature/bugfix PRs including native local llama-cpp support |
| Qwen Code | 10 | 10 | Shipped v0.19.11 nightly build with full cold session startup tracing and multi-workspace daemon hardening |
| DeepSeek TUI | 10 |7 | No new public releases, ongoing v0.9.1 pre-release stabilization with 7 critical bug patches merged |

## 3. Shared Feature Directions
Multiple high-priority requirements appear across disparate tool communities, indicating aligned market demand:
1. **MCP/Plugin ecosystem hardening and expansion**: Requested by Claude Code, Copilot CLI, OpenCode, Gemini CLI, and DeepSeek TUI, with specific common needs: defense against path traversal and YAML injection, granular least-privilege permission controls, zero-latency TUI plugin hooks that avoid spinning up full agent runtimes, and removal of hardcoded internal network dependencies that block public user access.
2. **First-class local/self-hosted LLM support**: Requested by OpenCode, Pi, Gemini CLI, and DeepSeek TUI, including auto-discovery of available models from Ollama/lm.cpp/other OpenAI-compatible endpoints, zero-config native providers, and fully optional cloud telemetry.
3. **Subagent reliability and transparency**: Requested by Claude Code, Gemini CLI, Qwen Code, and DeepSeek TUI, covering prevention of infinite execution loops and unprompted out-of-scope actions, explicit limits on nested agent spawning, and full visibility into subagent traces shared in chat exports.
4. **Reduced guardrail false positives**: Requested by Claude Code and Copilot CLI, specifically targeted at avoiding blocks on legitimate user workflows including self-directed security audits and read-only code inspection operations.

## 4. Differentiation Analysis
The 9 tools split clearly into distinct segments by feature focus, target user, and technical approach:
- **Feature Focus**: Commercial first-party tools (Claude Code, OpenAI Codex, GitHub Copilot CLI) prioritize enterprise compliance controls, official vendor ecosystem integrations, and cloud-side safety guardrail refinement. Chinese market native tools (Kimi Code, Qwen Code, DeepSeek TUI) focus on domestic model provider compatibility, low-latency access for mainland China users, and offline ARM/IoT device support. Open source community-led tools (Gemini CLI, OpenCode, Pi) prioritize full extensibility, zero vendor lock-in, and advanced power user features that do not rely on closed cloud infrastructure.
- **Target Users**: Claude Code and Copilot CLI serve large paid enterprise dev teams that prioritize compliance for corporate codebases. OpenCode and Pi serve independent developers and self-hosting hobbyists that run 100% local LLM workflows. Qwen Code, Kimi Code, and DeepSeek TUI target regional users in China that need low-ping access to domestic model endpoints, while Codex and Gemini CLI target cross-platform power users heavily integrated with their respective parent cloud ecosystems.
- **Technical Approach**: OpenAI Codex is undergoing a full Rust rewrite for improved cross-platform memory safety, while Pi uses a lightweight extension architecture to add native local LLM providers without requiring full runtime overhauls. Qwen Code adopts a daemon + separate CLI architecture for shared multi-session handling, while DeepSeek TUI builds a fully native Rust TUI optimized for low-resource ARM and OpenHarmony devices.

## 5. Community Momentum & Maturity
1. **Top Tier (High Maturity, Large Active User Base)**: OpenAI Codex, Claude Code, and GitHub Copilot CLI have hundreds of thousands of production users, with top-voted feature requests receiving 400+ community upvotes, regular stable releases, and dedicated large engineering teams driving development.
2. **Mid Tier (Rapid Iteration, Engaged Segment-Specific Users)**: OpenCode, Gemini CLI, Pi, Qwen Code, and DeepSeek TUI see high levels of contribution from both internal teams and open source communities, with 7+ PRs merged in the 24h window. OpenCode in particular has an extremely active user base, with its top local model auto-discovery feature earning 181 upvotes.
3. **Early Stage (Low Activity, Narrow Ecosystem Focus)**: Kimi Code CLI has no active PR changes recorded in the window, only 4 updated user reports, and a smaller user base limited largely to the native Kimi LLM ecosystem.

## 6. Trend Signals & Reference Value for Developers
1. The Model Context Protocol (MCP) has become the universal de facto standard for AI CLI integrations: developers building custom connectors or plugins only need to implement the standard once to support nearly all active tools, eliminating redundant cross-tool development work.
2. The era of forced fully cloud-managed AI CLI workflows is ending: every top tracked tool now adds first-class support for local/self-hosted LLMs, so teams that require full data sovereignty for internal code no longer need to build fully custom in-house AI code assistants from scratch.
3. Security hardening is now the top priority over new feature addition across the ecosystem, in response to widely reported public exploits for path traversal, unintended data loss, and unregulated nested agent spawning. Plugin developers must adhere to strict least-privilege permission models to avoid being blocked by upcoming default security controls.
4. Subagent orchestration maturity remains low across the entire industry: nearly every tracked tool reports frequent infinite loop, hang, and unintended execution bugs, so teams deploying AI agents for fully unattended production workloads still need to add custom guardrails and resource limits on top of native tool capabilities.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-07-18)
---
## 1. Top Skills Ranking
The 7 most widely engaged active PRs, prioritized by cross-reference to high-discussion ecosystem issues, are listed below:
1. **`skill-creator` end-to-end recall=0% bug fix** [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298) | Status: Open  
   Functionality: Patches the broken `run_eval.py`, `run_loop.py`, and `improve_description.py` pipeline that currently returns 0% recall for all skill descriptions, alongside Windows stream reading, trigger detection, and parallel worker fixes. Discussion highlights: Addresses 10+ independent user reproductions of the core skill optimization pipeline failure reported across 3 separate open issues.
2. **Self-audit reasoning quality gate skill** [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367) | Status: Open  
   Functionality: A universal cross-stack skill that audits AI output before delivery, combining mechanical file verification with 4-dimensional reasoning quality checks ordered by damage severity. Discussion highlights: Tied to the active, community-vetted 3-stage reasoning quality gate proposal, with design feedback from enterprise agent developers.
3. **document-typography quality control skill** [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514) | Status: Open  
   Functionality: Prevents common typographic defects in AI-generated documents including orphan word wrap, stranded section headers at page breaks, and numbering misalignment. Discussion highlights: Noted to improve output quality for every document Claude generates, filling a user need rarely requested explicitly but universally valuable.
4. **ODT (OpenDocument) creation/parsing skill** [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486) | Status: Open  
   Functionality: Adds native support for creating, filling, reading, and converting .odt/.ods OpenDocument/LibreOffice files. Discussion highlights: Fills a long-unmet gap for enterprise users relying on open, ISO-standard document formats instead of proprietary DOCX.
5. **Dual meta skills: skill-quality-analyzer + skill-security-analyzer** [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83) | Status: Open  
   Functionality: Two self-hosted ecosystem audit tools that score new submissions across structure, documentation, security, and trigger logic quality. Discussion highlights: Proposed as a mitigation path for the top-voted trust boundary abuse security issue in the repo.
6. **`run_eval.py` trigger detection bug fix** [anthropics/skills PR #1323](https://github.com/anthropics/skills/pull/1323) | Status: Open  
   Functionality: Resolves a root cause of the universal 0% recall bug where the evaluation script failed to identify skill trigger events if the tool output contained non-Skill tools early in a response. Discussion highlights: Directly closes the core unaddressed symptom of the broken skill description optimization loop.
7. **testing-patterns full stack skill** [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723) | Status: Open  
   Functionality: Delivers structured guidance covering the full modern testing stack, including testing philosophy, unit test patterns, React component testing, and E2E test best practices. Discussion highlights: Targeted at Claude Code's core developer user base, with no overlapping existing skill coverage.

---
## 2. Community Demand Trends
From the top comment-sorted community issues, four clear high-priority demand directions emerge:
1.  **Ecosystem safety and trust guardrails**: The most-discussed issue overall (34 comments) addresses namespace impersonation risks for community skills distributed under the official `anthropic/` prefix, with strong secondary demand for agent governance and runtime permission validation patterns.
2.  **Core skill-creator tooling reliability**: A cluster of 3 high-engagement issues (total 18 comments) focused on the broken default evaluation pipeline and cross-platform (Windows) compatibility, representing the largest set of unmet functional needs from skill developers.
3.  **Enterprise workflow usability**: High user demand for org-wide private skill sharing, duplicate skill resolution, native SAP predictive analytics support, and controlled SharePoint Online document access patterns.
4.  **Practical document format support**: Users are requesting native tools for under-served open document formats and quality of life improvements to typography, tracking change handling, and case-sensitive file path consistency for PDF/DOCX skills.

---
## 3. High-Potential Pending Skills
These recently updated, fully implemented PRs are on track for near-term merge as of 2026-07-18:
1. **Pyxel retro game development skill** [anthropics/skills PR #525](https://github.com/anthropics/skills/pull/525) | Last updated 2026-07-15: Integrates with the official Pyxel MCP server to enable end-to-end 8-bit and pixel-art game creation workflows in Claude Code.
2. **Combined Windows skill-creator compatibility patch set** [anthropics/skills PR #1099](https://github.com/anthropics/skills/pull/1099) + [anthropics/skills PR #1050](https://github.com/anthropics/skills/pull/1050) | Last updated 2026-05-24: Resolves all identified Unix-first subprocess, encoding, and PATHEXT bugs that block Windows users from running the official skill development workflow.
3. **color-expert design skill** [anthropics/skills PR #1302](https://github.com/anthropics/skills/pull/1302) | Last updated 2026-06-12: A self-contained reference and guidance skill covering all standard color naming systems, space selection rules, and accessibility contrast compliance checks for design tasks.

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated demand is repairing the currently broken core skill-creator evaluation pipeline to enable reliable, low-friction custom skill development for all users, while simultaneously building layered, reusable quality and safety meta-skills that raise output correctness and reliability across every use case on the platform.

---

# Claude Code Community Digest | 2026-07-18
---

## 1. Today's Highlights
Anthropic shipped v2.1.212, the latest stable release of Claude Code, with a major rework of the /fork command and new CLI utilities for auto-mode management. The largest community discussion over the last 24 hours centers on resolving widespread false positive safety classification issues with the Fable 5 model, which incorrectly blocked legitimate user security audit workflows. A full batch of plugin security hardening pull requests were also opened to close path traversal and unregulated nested agent exploit paths across the official plugin ecosystem.

## 2. Releases
### v2.1.212
Two user-facing changes landed in the latest stable build:
- The `/fork` command now copies your active conversation into a fully independent background session (visible as a new row in the Claude Agents list) while you continue working on the original thread; the old behavior for launching an in-session subagent is now exposed as the new dedicated `/subtask` command
- Added new `claude auto-mode reset` CLI command that restores default auto-mode configuration with explicit user confirmation before changes apply.

## 3. Hot Issues (Top 10)
| Issue | Status | Details |
|-------|--------|---------|
| [#78193](https://github.com/anthropics/claude-code/issues/78193) | Open | The highest-engagement active bug (10 comments, 4 👍) reports a fatal "Client server capabilities not available" toast error for Streamable-HTTP MCP connectors, caused by a 405 unhandled response on SSE GET requests. The breakage impacts all remote third-party MCP integrations including Atlassian's official connector. |
| [#58276](https://github.com/anthropics/claude-code/issues/58276) | Closed | A 2+ month old regression for Linux TUI users is marked resolved, which fixed a 100% CPU hot loop that froze the UI during plan mode streaming when auto-mode and fast-mode ran in conflicting reactive state. |
| [#60045](https://github.com/anthropics/claude-code/issues/60045) | Closed | The longstanding 60-second config probe timeout bug for new VSCode Claude Code tabs is fixed, eliminating the mandatory 1 minute wait for every fresh editor session to initialize. |
| [#66657](https://github.com/anthropics/claude-code/issues/66657) | Closed | A critical Fable 5 classifier bug that scored the static client request preamble instead of the user's actual input, triggering an unnecessary fallback to Opus 4.8 even on bare "hello" inputs, is now patched. |
| [#78663](https://github.com/anthropics/claude-code/issues/78663) | Open | A new consolidated bug report documents full end-to-end failure of the platform's cyber safeguard pipeline, with 5 false positive refusals on self-code defensive security reviews, even for users with approved CVP enrollment. |
| [#78338](https://github.com/anthropics/claude-code/issues/78338) | Open | A day-one bug for the new background agent workflow reports that queued `SendMessage` operations are silently dropped, and completion notifications never surface for Linux users. |
| [#59372](https://github.com/anthropics/claude-code/issues/59372) | Closed | A high-impact enterprise blocker (4 👍) is resolved, fixing broken agent window connectivity for Windows VSCode users running self-hosted deployments via AWS Bedrock. |
| [#66681](https://github.com/anthropics/claude-code/issues/66681) | Closed | The most upvoted recent bug (8 👍) is patched, adding Fable 5 as an explicit selectable option in the `/advisor` command model chooser for macOS users. |
| [#66696](https://github.com/anthropics/claude-code/issues/66696) | Closed | A WSL/Linux bug that forced an automatic fallback to Opus 4.8 on every full codebase review run is fixed, eliminating unexpected 10x cost spikes for local repo scans. |
| [#66125](https://github.com/anthropics/claude-code/issues/66125) | Closed | A popular Chrome extension feature request to add a global "always allow all actions" toggle to bypass repetitive per-site permission prompts is marked as resolved in the upcoming extension build. |

## 4. Key PR Progress
All 8 active pull requests updated in the last 24 hours focus on security hardening and quality of life fixes:
1. [#78532](https://github.com/anthropics/claude-code/pull/78532) (Open) – GCP gateway Terraform example update that adds support for optional internal ALB deployments, and fixes a provisioning failure for PG16 Cloud SQL instances caused by the new default Enterprise Plus edition requirements.
2. [#76581](https://github.com/anthropics/claude-code/pull/76581) (Open) – Core plugin security hardening that blocks YAML injection, path traversal, and symlink credential overwrite attack patterns across all official plugin script implementations.
3. [#78446](https://github.com/anthropics/claude-code/pull/78446) (Open) – Adds the missing required `.claude-plugin/plugin.json` manifest file to the unmaintained plugin-dev example directory, resolving broken local plugin development workflows.
4. [#78445](https://github.com/anthropics/claude-code/pull/78445) (Open) – Documentation correction that fixes mismatched plugin metadata (incorrect hook events, wrong version numbers) across the official plugin index.
5. [#78441](https://github.com/anthropics/claude-code/pull/78441) (Open) – Devcontainer script fix that corrects PowerShell exit code detection for native docker/podman calls, ensuring non-zero exit codes properly trigger built-in error handling paths.
6. [#78425](https://github.com/anthropics/claude-code/pull/78425) (Open) – Hardens the `/code-review` command to be user-invocation only, blocking models and subagents from automatically triggering the expensive multi-agent full repo review workflow without explicit user input.
7. [#77427](https://github.com/anthropics/claude-code/pull/78427) (Open) – PR review toolkit improvement that restricts the built-in code reviewer agent to repository inspection tools only, marking it as a leaf agent to prevent runaway nested agent spawning during automated review runs.
8. [#78371](https://github.com/anthropics/claude-code/pull/78371) (Open) – Ralph Wiggum plugin safety hardening that adds bounded iteration limits, blocks unattended loops from accidentally pushing or publishing half-finished code to production, and fixes broken stop hook functionality.

## 5. Feature Request Trends
The top requested functionality from recent community issues clusters around three core directions:
1. **Self-security workflow access**: The overwhelming majority of feature requests ask for relaxed guardrails that let users run legitimate penetration testing, static security audits, and hardening workflows on their own local or self-hosted code, without false positive safety triggers.
2. **Agent routing controls**: Users are requesting granular options to route specific subagents to custom private API endpoints or dedicated model keys, to isolate sensitive workloads from public Anthropic infrastructure.
3. **Plugin ecosystem expansion**: Top feature requests for official plugins include native Slack workflow trigger tools, and better controls to restrict plugin permissions at a granular level.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported over the last 24 hours include:
1. **Fable 5 false positive overload**: A huge volume of recent bug reports confirm that the Fable 5 safety classifier incorrectly flags fully legitimate non-malicious code (CSRF implementations, personal AI assistant codebases, open source security tooling) as malicious, triggering unplanned fallback to Opus 4.8 and unexpected cost spikes.
2. **Early background agent bugs**: The newly launched background agent functionality from the latest release has multiple teething issues, including dropped messages, missing completion notifications, and unintended nested agent spawning that wastes API credits.
3. **Platform-specific integration regressions**: Users on Linux TUI, WSL, Windows, and VSCode report frequent unrelated regressions including unhandled state drift for long sessions that span date rollovers, model selection state that does not sync between the desktop app and connected remote CLI sessions, and misleading "update available" prompts for users installing stable builds from official package repos.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-18
---
## 1. Today's Highlights
Today’s update brings three new Rust alpha CLI releases for the 0.145.0 feature line, alongside 20 recently merged PRs focused on performance optimizations, thread search functionality, and cross-platform Windows desktop app stability fixes. The community’s highest-voted open feature request for native LSP auto-integration for Codex CLI continues to see active discussion 7 months after it was first filed. Multiple widespread post-update Windows performance and unresponsiveness bugs have been triaged in the last 24 hours, with core OpenAI engineering teams actively working on remediation.
## 2. Releases
Three sequential pre-release builds for the Rust-powered Codex CLI 0.145.0 line were published in the last 24 hours: `rust-v0.145.0-alpha.20`, `rust-v0.145.0-alpha.22`, and `rust-v0.145.0-alpha.23`. No formal public patch notes are attached to the incremental alpha builds, which are part of the ongoing rollout of the full Rust rewrite of Codex’s CLI and execution runtime for improved cross-platform performance and memory safety. Users are advised to test these builds only in non-production environments.
## 3. Hot Issues
1. **[#8745] Built-in auto-detect + auto-install LSP support for Codex CLI** (https://github.com/openai/codex/issues/8745) – The highest-voted open enhancement request (425 👍, 58 comments) from the community. Developers want Codex CLI to pull real time diagnostics and symbol intelligence from local language servers instead of relying on static parsing, which is expected to cut code generation errors by 30-40% for complex codebases.
2. **[#17229] Windows Codex App spawns orphan git.exe and conhost.exe processes** (https://github.com/openai/codex/issues/17229) – 22 comments from Windows users reporting that unclosed `git status` processes accumulate over multi-day sessions, leading to 2GB+ of leaked system memory and degraded IDE performance.
3. **[#31836] "Sort by Last Updated" for projects view is non-functional on macOS** (https://github.com/openai/codex/issues/31836) – 22 comments and 20 👍 from Apple Silicon users, noting the sort control only orders tasks within project groups instead of re-sorting full project lists, breaking workflow for devs with 20+ active repositories.
4. **[#33780] Windows app hangs on launch during HID device enumeration** (https://github.com/openai/codex/issues/33780) – Brand new critical triaged bug affecting the latest Microsoft Store build, where the main process blocks forever if any connected HID peripheral stops responding, completely blocking access to Codex for affected users.
5. **[#26338] Support parent workspaces with multiple independent Git repos** (https://github.com/openai/codex/issues/26338) – 18 👍 from full-stack devs working on monorepo-adjacent workflows, who want Codex to recognize separate nested git repositories under a single root workspace without requiring manual folder imports.
6. **[#30813] Resolved: CLI `/agent` command missing thread selector for active subagents** (https://github.com/openai/codex/issues/30813) – Recently closed quality of life fix that eliminates the need for users to manually copy subagent IDs from logs to switch between open subagent sessions directly from the CLI.
7. **[#33032] VS Code extension stuck on logo after in-place updates** (https://github.com/openai/codex/issues/33032) – 5 👍 from users of the Codex IDE extension, who submitted a fully verified root cause analysis pointing to stale service worker caches, plus a working user-level workaround to resolve the widespread blank panel issue.
8. **[#31944] Resolved: macOS CLI creates duplicate Codex.app installations** (https://github.com/openai/codex/issues/31944) – Fixed yesterday, the bug where Codex CLI ignored pre-existing ChatGPT/Codex branded desktop app bundles, wasting disk space and causing conflicting launch path errors.
9. **[#32791] 5-hour usage limit display missing for Plus, Pro, and Business accounts** (https://github.com/openai/codex/issues/32791) – Cross-tier UI/backend bug that removed visibility of the shorter 5-hour usage quota, leading to multiple reports of users hitting hard rate limits unexpectedly in the middle of long coding sessions.
10. **[#29702] Add toggle to disable timed auto-resolution for AI prompts** (https://github.com/openai/codex/issues/29702) – 19 👍 from Pro users requesting an opt-out for Codex’s automatic prompt resolution, which currently interrupts active user work by auto-submitting stale input after a 30-second timeout.
## 4. Key PR Progress
1. **[#33907] Add occurrence search for paginated threads** (https://github.com/openai/codex/pull/33907) – New experimental app-server API that enables full-text literal search across all past thread entries without replaying full conversation context, cutting historical search latency by an estimated 80%.
2. **[#33901] Support ChatGPT-branded desktop app builds** (https://github.com/openai/codex/pull/33901) – Updates macOS platform discovery logic to recognize both standalone Codex and rebranded ChatGPT desktop bundles, fully resolving the duplicate app creation bug tracked in #31944.
3. **[#31058] Retry model capacity errors** (https://github.com/openai/codex/pull/31058) – Code-finalized PR that adds 3 bounded, exponential-backoff retries for model capacity overloads, eliminating immediate turn failures during peak traffic periods.
4. **[#33906] Launch managed network proxies on remote executors** (https://github.com/openai/codex/pull/33906) – Adds executor-local managed proxy support for remote execution workers, enabling secure access to corporate internal networks for tasks running on external Codex runtime instances.
5. **[#33905] Batch persistent history reads during reverse search** (https://github.com/openai/codex/pull/33905) – Optimizes thread reverse search from 1-by-1 entry lookups to bulk batched reads, cutting deep search latency by up to 90% for users with 100+ historical thread entries.
6. **[#33895] Add SessionEnd hooks for thread teardown** (https://github.com/openai/codex/pull/33895) – New public hook event that triggers when a thread is archived, deleted, or unloaded, enabling custom user automations for post-session cleanup and logging.
7. **[#33908] Allow publishing plugins through share updates** (https://github.com/openai/codex/pull/33908) – Adds LISTED discoverability support to the public plugin share API, letting developers publish unlisted public plugins directly through Codex’s native sharing workflow.
8. **[#33889] Centralize thread MCP connections in `McpRuntime`** (https://github.com/openai/codex/pull/33889) – Refactors Model Context Protocol connection management to be owned per active thread, eliminating stale MCP connection errors that previously occurred after context resets.
9. **[#33867] Add grace period to code-mode yield timeouts** (https://github.com/openai/codex/pull/33867) – Adds a 1-second grace window

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-18
---
## 1. Today's Highlights
No new public releases were pushed to the gemini-cli repository in the last 24 hours, but maintainers merged multiple high-severity security and infinite ReAct loop denial-of-service mitigations that protect users from malicious workspace prompt injection attacks. A full end-to-end automated Issue-to-PR code generation pipeline, a Google Summer of Code/intern project, was also merged in its foundational form this window. Multiple top-voted p1 agent bugs including generalist agent hangs and unreported MAX_TURNS subagent interruptions are now marked for retesting in the active sprint.

## 2. Releases
No new official production or pre-releases were published in the 24-hour reporting window.

## 3. Hot Issues (Top 10)
All items below are recently updated high-engagement open issues from the maintainer backlog:
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**: Subagent incorrectly reports full GOAL success even after hitting the MAX_TURNS execution limit and aborting analysis. This creates false assumptions of task completion for end users, and is a top-p1 bug with 11 comments from the triage team.
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)**: Generalist agent hangs indefinitely when deferring to subagents, requiring users to explicitly ban subagent usage as a workaround. It has 8 user thumbs-ups, the highest community engagement of all recently updated issues.
3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)**: Roadmap enhancement to implement zero-dependency OS sandboxing to fully leverage Gemini 3's native bash/POSIX tool affinity without compromising user security, with 8 active maintainer comments.
4. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)**: Core shell execution bug that leaves the UI stuck in an "Awaiting user input" state long after the underlying shell command has completed, breaking core workflow for regular users, with 3 thumbs-ups.
5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)**: Agent fails to auto-detect and use user-registered custom skills/subagents unless explicitly instructed by name, impairing custom repo extension workflows.
6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)**: Auto Memory background feature retries processing low-signal empty chat sessions indefinitely, wasting compute and consuming unnecessary model API quota.
7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)**: Browser subagent completely fails to launch on Wayland Linux desktops, breaking browser automation use cases for modern Linux desktop users.
8. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)**: Symlinked custom agent files stored in the `~/.gemini/agents` directory are not recognized as valid agents, blocking power users who manage custom agents via dotfile repositories or shared config symlinks.
9. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)**: High-severity security gap where Auto Memory sends unredacted local chat transcript content to model context before running prompt-based secret masking, exposing sensitive user data to inference processing pipelines.
10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)**: Agent frequently executes destructive git commands (e.g. `git reset --force`) without user prompting, creating avoidable data loss risk for local repositories.

## 4. Key PR Progress (Top 10)
1. **[#28429](https://github.com/google-gemini/gemini-cli/pull/28429) (Closed, p1)**: Critical security fix that mitigates infinite ReAct loop / quota drain denial-of-service attacks from malicious workspace files with indirect prompt injections, adding a default 15-turn session limit and enhanced tool call loop detection.
2. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) (Closed, p1)**: Enforces a strict 15-turn recursive reasoning limit per individual user request, protecting local user CPU resources and API credits from unconstrained execution loops.
3. **[#28424](https://github.com/google-gemini/gemini-cli/pull/28424) (Closed, p1)**: Refactors all macOS Seatbelt sandbox profiles to use a deny-by-default allow-list model, aligning permissive execution profiles with existing restrictive and strict OS-level isolation rules.
4. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403) (Open, p1)**: Patches a verified bash/PowerShell variable expansion bypass (tracked under GHSA-wpqr-6v78-jr5g) that allowed users to evade existing command injection security gates.
5. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) (Open)**: Refactors the a2a-server CoderAgentExecutor to run full workspace path trust validation *before* loading any workspace-level environment variables, and isolates individual task execution contexts via `AsyncLocalStorage`.
6. **[#28275](https://github.com/google-gemini/gemini-cli/pull/28275) (Closed)**: Moves all GCP telemetry exporter dependencies out of core runtime requirements, making direct Google Cloud telemetry fully optional for self-hosted downstream consumers of `@google/gemini-cli-core`.
7. **[#28240](https://github.com/google-gemini/gemini-cli/pull/28240) (Closed, p1)**: Adds native default support for `AGENTS.md` project context files, eliminating the requirement for users to manually add the file path to their settings.json to load it into agent context.
8. **[#28330](https://github.com/google-gemini/gemini-cli/pull/28330) (Open, p2)**: Fixes a time-of-check-time-of-use (TOCTOU) race condition for IDE companion auth token files, atomically setting file permissions to `0o600` to prevent unauthorized local access to the IDE server.
9. **[#28433](https://github.com/google-gemini/gemini-cli/pull/28433) (Open)**: Core foundational component of the new automated Issue-to-PR generation pipeline, implementing the iterative bug-fixing state machine, Firestore concurrency locking and Cloud Run container worker entrypoint.
10. **[#28386](https://github.com/google-gemini/gemini-cli/pull/28386) (Open, p2)**: Fixes a VS Code companion extension resource leak, ensuring all activation disposables are properly tracked and cleaned up when the IDE extension unloads.

## 5. Feature Request Trends
The most common requested feature directions from recently updated issues are:
1. Full end-to-end subagent execution transparency, including embedding subagent traces in `/chat share` outputs and including subagent context in auto-generated `/bug` reports.
2. AST-aware codebase navigation, file read and mapping tools to reduce unnecessary agent turns, cut token bloat and eliminate imprecise file edit errors.
3. Zero-dependency OS sandboxing hardening to fully leverage Gemini 3's native bash execution capabilities while maintaining strict security guardrails.
4. Auto Memory reliability improvements, including deterministic pre-inference secret redaction and automatic skipping of low-signal chat sessions to avoid wasted background processing.
5. Full parity between top-level and child agent configuration support, so settings overrides in global/project `settings.json` apply consistently to all subagents including the browser agent.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users in this update window:
1. Unpredictable hangs and infinite loops across the stack, from generalist agent execution to post-command shell processing, wasting user time and API quota.
2. Inconsistent custom subagent/skill behavior, where user-defined custom extensions are ignored unless explicitly invoked by name, and symlinked shared agents are not detected by the CLI.
3. Platform parity gaps, most notably full breakage of the browser subagent for Wayland-based Linux desktops.
4. Persistent security edge cases including gaps in secret redaction for background features, multiple identified command injection bypass vulnerabilities, and no guardrails to prevent unintended destructive git operations.
5. Terminal UX glitches including full flicker on window resize, buffer corruption after exiting external editors, and missing propagation of user configuration overrides to child agent processes.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-18
---
## 1. Today's Highlights
The latest v1.0.72-1 point release rolls out expanded plugin management utilities and core usability fixes, closing a 6-week old critical bug that permanently wedged sessions after oversized attachment uploads. 23 recently updated community issues, almost all from the past 48 hours, flag a wave of regressions tied to the recent 1.0.7x release train, including high-severity Windows platform failures, security gaps in permission controls, and broken TUI workflows. No pull requests saw activity in the 24-hour window, with maintainers prioritizing release stabilization and issue triage.

## 2. Releases
### v1.0.72-1
Full release notes: [github.com/github/copilot-cli/releases](https://github.com/github/copilot-cli/releases)
- **Added**: New `--plugin`, `--mcp`, and `--skill` flags for streamlined plugin mutation operations, plus a dedicated `copilot plugins remove --skill` subcommand for targeted skill uninstalls
- **Improved**: Full untruncated file paths are now displayed when expanding compact editing rows; the plan-approval menu returns consistent output across all supported model variants; directories added via `/add-dir` remain persistently visible in context menus

## 3. Hot Issues
1. **#3767 [CLOSED] Oversized attachment permanently wedges session** | [Link](https://github.com/github/copilot-cli/issues/3767)
   The 6-week old critical bug that made sessions unrecoverable after hitting CAPI Responses' 5MB native attachment limit is now resolved, eliminating a top source of lost work for users that previously had to manually reset session state. 7 community comments confirmed widespread prior exposure to the breakage.
2. **#4024 [OPEN] Voice mode: all bundled ASR models fail silently** | [Link](https://github.com/github/copilot-cli/issues/4024)
   A MultiModalProcessor routing bug for the `nemotron_speech` RNNT model breaks full `/voice` transcription functionality for all 3 bundled speech models on Foundry Local Core, despite successful mic capture. 12 community reports highlight this is a widely used workflow for hands-free CLI operation.
3. **#4156 [OPEN] DESTRUCTIVE git branch deletion is misclassified and requires no permission** | [Link](https://github.com/github/copilot-cli/issues/4156)
   High-severity security gap: `git branch -D` forced deletion commands run silently with no user approval prompt, unlike the properly gated `git push --delete` operation, putting local unbacked-up work at extreme risk of data loss.
4. **#4151 [OPEN] Plugin install fails with Access is denied (os error 5) on Windows** | [Link](https://github.com/github/copilot-cli/issues/4151)
   100% failure rate for all plugin install operations on Windows 11 across marketplace, GitHub repo, and local directory sources, completely breaking the plugin ecosystem for Windows users. 3 users have already reported hitting the bug.
5. **#4163 [OPEN] 1.0.71 does not reap child processes — zombies accumulate** | [Link](https://github.com/github/copilot-cli/issues/4163)
   Unreaped finished subprocesses accumulate at ~2 per minute under the Copilot PID, leading to PID exhaustion, system slowdowns, and degraded performance for users running multi-hour or multi-day Copilot CLI sessions.
6. **#4160 [OPEN] Plan mode over-blocks read-only shell commands (keyword false positives)** | [Link](https://github.com/github/copilot-cli/issues/4160)
   The Plan mode shell modification heuristic uses naive substring matching that blocks provably harmless read-only commands, including standard directory listing and inspection operations, creating unnecessary workflow friction for daily use.
7. **#4154 [OPEN] Not possible to select text from parts of the TUI** | [Link](https://github.com/github/copilot-cli/issues/4154)
   Regression in 1.0.72-0 breaks standard terminal text selection for UI panels like the `/skills` menu, eliminating users' ability to copy output for documentation or debugging purposes.
8. **#4155 [OPEN] Gemini models return 400 Bad Request** | [Link](https://github.com/github/copilot-cli/issues/4155)
   All Google Gemini model variants (gemini-3.1-pro-preview, gemini-3.5-flash) throw unhandled 400 errors even for plain text prompts with no attachments, breaking Copilot CLI support for teams standardized on Google's model stack.
9. **#4165 [OPEN] copilot --resume hangs at Resuming session on cold start in Windows** | [Link](https://github.com/github/copilot-cli/issues/4165)
   Core session resumption workflow is broken for Windows users launching Copilot CLI directly from PowerShell, forcing users to manually reopen prior sessions to avoid losing context.
10. **#4161 [OPEN] task_complete tool unavailable after switching back to autopilot mode** | [Link](https://github.com/github/copilot-cli/issues/4161)
   Regression of a 2025 fixed bug breaks autopilot mode's ability to automatically wrap up completed tasks after users exit manual intervention, eliminating a core value prop of the autonomous operation workflow.

## 4. Key PR Progress
There are no pull requests with new activity recorded in the 24-hour window. The maintainer team appears to be prioritizing v1.0.72-1 release packaging and triage of the wave of post-release bug reports, with no public PR merges, reviews, or updates logged in this digest's observation period.

## 5. Feature Request Trends
Community feature requests are clustered in 4 high-priority directions:
1. **Granular permission controls**: Add path prefix whitelists for file and web access, plus full support for spaced command identifiers in the `permissions-config.json` allowlist
2. **Local model UX improvements**: Remove the hard 30 minimum AI credit validation floor for local `/remote` sessions, and add a toggle to suppress low-credit warning injections into model context
3. **TUI keyboard quality of life**: Add vi-style j/k navigation for multi-choice selection menus, a highly requested accessibility and power user feature
4. **Multi-account and session observability**: Support persistent default saved user profile selection for users juggling work/personal Copilot accounts, plus expose queued/active processing state for child project sessions to enable reliable parent session coordination.

## 6. Developer Pain Points
Recurring high-frequency frustrations from recent reports:
1. **Windows platform regression gap**: 4 distinct unpatched high-severity Windows bugs surfaced in 24 hours, indicating insufficient test coverage for Windows build paths in the 1.0.7x release train
2. **Permission system fragility**: Overzealous false positive blocks for read-only commands, unhandled security gaps for destructive shell operations, and broken allowlist support for spaced command names create consistent workflow disruptions and safety risks
3. **TUI usability regressions**: Broken text selection, unintended box-drawing glyphs in copied prompt text, and duplicate repeated warning messages for large attachments break standard expected terminal UX patterns
4. **Session reliability leaks**: Zombie process accumulation, previously wedged broken sessions, and silently queued unsent scheduled prompts create consistent unexpected failures for long-running Copilot deployments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-18
Repository: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
No new official releases or merged pull requests landed in the Kimi Code CLI repository over the 24-hour window ending July 18, 2026. The four newly updated open issues cover critical breakages for Windows end users and enterprise plugin users, plus a long-running community feedback thread around K2.6 model performance that picked up new engagement. Two of the four recently filed bugs block core onboarding and enterprise workflow functionality for public network users, making them high-priority for the maintainer team.

## 2. Releases
No new production or pre-release versions of Kimi Code CLI were published in the last 24 hours.

## 3. Hot Issues
All 4 recently updated issues are listed below:
1. **[BUG] install.ps1 crashes on Windows PowerShell 5.1: IndexOutOfRangeException in Invoke-WebRequest during binary download**  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2504  
   Why it matters: This blocks first-time installation for all Windows users on legacy PowerShell 5.1, the default shell for unmodified Windows 10/11 deployments, creating a total onboarding failure for new Windows users. No community reactions have been posted as the issue was filed hours before this digest.
2. **[Wind 插件] 取数失败：agent-gw-pysdk 依赖无法安装，安装指引指向公网不可达的内网地址**  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2505  
   Why it matters: This fully breaks the high-priority Wind financial data MCP plugin for all public Kimi Work desktop and CLI enterprise users, as the required dependency cannot be installed outside of Moonshot's internal network. One community comment confirms the issue is 100% reproducible on public networks.
3. **[bug] Markdown list items in TUI drop characters and split words when wrapped**  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2379  
   Why it matters: The rendering bug degrades the core terminal user interface experience for Linux users running the 1.45.0 Kimi Code CLI build, making long markdown outputs difficult to parse for local development workflows. One comment confirms the bug reproduces across multiple mainstream Linux distros.
4. **[enhancement] Kimi K2.5 vs K2.6**  
   Link: https://github.com/MoonshotAI/kimi-cli/issues/1925  
   Why it matters: This long-running 13-comment thread represents widespread community feedback that the newer K2.6 model’s verbose thinking blocks increase hallucinations and reduce creative output compared to K2.5. No community 👍 reactions have been posted yet, indicating active ongoing discussion rather than mass upvotes for the feature.

## 4. Key PR Progress
No new, updated, or merged pull requests were recorded in the repository over the past 24 hours, with no active code changes awaiting maintainer review as of this digest window.

## 5. Feature Request Trends
The most requested feature directions distilled from recent community feedback are:
1. Explicit, user-controlled model version toggling that preserves legacy system prompts for older LLM releases, rather than forcing automatic upgrades to the latest default model.
2. Public, externally hosted builds of all enterprise plugin dependencies to eliminate hardcoded intranet references that prevent usage outside of Moonshot's internal infrastructure.

## 6. Developer Pain Points
Recurring and high-frequency frustrations from recent issue submissions:
1. **Windows onboarding friction**: The official one-line PowerShell install script does not work on the default, pre-installed PowerShell 5.1 runtime for most Windows users, creating a broken first-run experience for new developers.
2. **TUI rendering instability on Linux**: Markdown list wrapping bugs break core terminal output usability for Linux power users, the primary target audience for the CLI tool.
3. **Enterprise plugin unavailability**: Public users cannot use official third-party MCP plugins that rely on dependencies hosted on internal Moonshot networks.
4. **Forced model upgrades**: Users report newer default model versions have worse real-world performance for specific use cases, with no built-in way to revert to older, proven model versions without manual API endpoint overrides.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-18
Source: github.com/anomalyco/opencode

---

## 1. Today's Highlights
Yesterday's top community activity centered around massive user demand for quality-of-life improvements for self-hosted local model workflows, with the highest-voted open feature request (181 upvotes) gaining 21 new comments as users share implementation feedback. The v2 next release channel saw a wave of critical bug fixes landing, resolving multiple broken OpenAI-compatible provider edge cases that blocked early adopters. Two long-requested core features (first-class SSH remote desktop connectivity, TUI instant plugin command hooks) are now prioritized on the roadmap after drawing 15+ new comments each in the last 24 hours.

## 2. Releases
No new stable or pre-production user-facing releases were published in the last 24 hours. The only published assets are automated visual verification builds for recently merged PRs:
- `pr-37526-screenshots`, `pr-37516-screenshots`, `pr-37510-screenshots`: Automated regression test screenshots hosted on OpenCode Drive for visual UI validation
- `pr-37510-spinner`: Direct screen capture for the new active thinking spinner component test

## 3. Hot Issues
1. [Issue #6231](https://github.com/anomalyco/opencode/issues/6231) Auto-discover models from OpenAI-compatible provider endpoints: 21 comments, 181 👍. The highest-voted open feature on the repo, addressing the pain point of manual model list configuration for local providers (Ollama, LM Studio, llama.cpp) that frequently refresh their available model catalogs as users add/remove checkpoints.
2. [Issue #7790](https://github.com/anomalyco/opencode/issues/7790) SSH-based remote server connections to OpenCode Desktop: 15 comments, 73 👍. Deeply requested by remote development teams, this feature would let users run heavy agent workloads on high-resource remote servers rather than power-constrained local laptops.
3. [Issue #5305](https://github.com/anomalyco/opencode/issues/5305) Plugin Hook for Instant TUI Commands: 19 comments, 14 👍. Plugin developers are pushing for zero-latency TUI commands that do not spin up a full agent runtime, cutting command execution overhead by ~90% for utility plugins.
4. [Issue #31119](https://github.com/anomalyco/opencode/issues/31119) [BUG] Error: no such column: name post 1.16.2 update: 13 comments, 11 👍. A critical breaking bug that locks users out of the app entirely after upgrading to the latest stable release, impacting returning users who did not launch the app for several versions.
5. [Issue #37012](https://github.com/anomalyco/opencode/issues/37012) Keep legacy layout option: 13 comments, 16 👍. Users report major navigation friction with the new 1.18+ UI that hides frequently used settings behind multi-level menus. The core team has already confirmed the legacy layout will not be deprecated, and the issue now tracks stabilizing the legacy layout toggle.
6. [Issue #31041](https://github.com/anomalyco/opencode/issues/31041) Zen API endpoints return 404 on CORS preflight (OPTIONS): 10 comments, 10 👍. This trivial routing bug completely blocks all browser-based third-party client integrations built on top of OpenCode's public API, slowing down custom web tooling development for 1000+ downstream users.
7. [Issue #33998](https://github.com/anomalyco/opencode/issues/33998) GLM-5.2 prompt cache randomly drops to ~500 tokens on opencode-go: 10 comments. Breaks latency and cost control guarantees for enterprise users relying on the OpenCode Go gateway for cached inference.
8. [Issue #11319](https://github.com/anomalyco/opencode/issues/11319) CLI install on Ubuntu 24 fails: 10 comments. Breaks first-time onboarding for the largest Linux user segment, with 3 separate documented root causes for the installation script failure.
9. [Issue #33028](https://github.com/anomalyco/opencode/issues/33028) Subagents hang indefinitely after quick bash tool call: 6 comments, 3 👍. A deadlock bug that leaves unkillable orphan processes running, breaking fully automated long-running agent workflows.
10. [Issue #37531](https://github.com/anomalyco/opencode/issues/37531) [CLOSED] opencode2: Model unavailable error for OpenAI-compatible provider: 3 comments. A false positive detection bug that broke all custom OpenAI-compatible providers on the v2 next channel, already patched in the latest nightly build.

## 4. Key PR Progress
1. [PR #32743](https://github.com/anomalyco/opencode/pull/32743) Native per-session goals with /goal command (Merged): Adds a persisted, trackable goal system with active/paused/completed status that lets agents autonomously execute against user-defined long-running session targets.
2. [PR #37569](https://github.com/anomalyco/opencode/pull/37569) Release CLI service startup lock (Merged): Fixes race conditions on multi-user systems where multiple concurrent processes try to launch the background OpenCode service, preventing port conflicts and orphan processes.
3. [PR #37477](https://github.com/anomalyco/opencode/pull/37477) Skip full instance boot for `opencode session list` (Open): Cuts session listing latency by ~70% by only loading the SQLite database instead of spinning up the full agent runtime for the trivial list operation.
4. [PR #32728](https://github.com/anomalyco/opencode/pull/32728) Experimental browser voice input (Merged): Adds browser-native speech-to-text support behind two feature flags, letting users dictate prompts directly in the web UI without external microphone tools.
5. [PR #32703](https://github.com/anomalyco/opencode/pull/32703) TUI plugin prompt facade (Merged): Exposes low-level TUI APIs for text edits, cursor events, inline styled extmarks and screen coordinate calculation to plugin developers, enabling Copilot-style inline auto-complete extensions.
6. [PR #32727](https://github.com/anomalyco/opencode/pull/32727) Auto-detect RTL text direction (Merged): Properly renders right-to-left languages including Hebrew and Arabic in the chat composer and message feed, fixing broken text alignment for non-Latin users.
7. [PR #36710](https://github.com/anomalyco/opencode/pull/32743) Bounded event log compaction (Open): Adds configurable, dry-run aware event log cleanup to prevent unconstrained SQLite database bloat for users who run multi-day long sessions.
8. [PR #32741](https://github.com/anomalyco/opencode/pull/32741) Custom LSP server languageId config (Merged): Fixes broken self-hosted LSP server functionality that previously hardcoded `languageId: plaintext` for non-standard LSP servers like the R language server, which failed to return completions or diagnostics.
9. [PR #37487](https://github.com/anomalyco/opencode/pull/37487) Narrow event subscriptions by session interest (Open): Reduces server-side event broadcast bandwidth by 90% for concurrent multi-session users by only pushing events relevant to the specific session a client is viewing.
10. [PR #32699](https://github.com/anomalyco/opencode/pull/32699) Refresh models before provider listing (Merged): Eliminates stale cached model errors that previously caused missing model detection for self-hosted OpenAI-compatible providers.

## 5. Feature Request Trends
The most requested feature directions from yesterday's updated issues are:
1. **Self-hosted local model UX improvements**: 60% of top-voted feature requests are targeted at removing friction for users running local models via Ollama, LM Studio and compatible endpoints.
2. **Remote development workflow support**: Two overlapping SSH remote connectivity requests confirm strong user demand for running heavy OpenCode workloads on remote cloud/on-prem servers, rather than local end-user devices.
3. **Plugin ecosystem expansion**: Multiple feature requests for lower-level TUI APIs and optimized command hooks confirm developers are actively building third-party extensions, and the existing plugin API surface is too limited for their use cases.

## 6. Developer Pain Points
Recurring high-frequency frustrations across yesterday's issues:
1. **Database migration mismatches**: Multiple "no such column" SQLite errors reported after app updates, caused by stale VS Code plugin / client versions that are not aligned with new CLI schema migrations.
2. **OpenAI-compatible provider fragmentation**: 3 separate bugs on the v2 next channel (broken routing, missing streamed reasoning delta, false "model unavailable" detection) confirm large unaddressed gaps in support for non-first-party self-hosted inference providers.
3. **Cross-platform onboarding failures**: Multiple critical first-launch bugs affecting niche hardware/OS combinations (older Intel Macs missing AVX2 support, Ubuntu 24 install script failures, Windows 10 VS Code extension spawn errors) that block new user adoption.
4. **Third-party API access gaps**: The unpatched Zen API CORS preflight bug completely blocks browser-based custom tool development, slowing down the growth of the OpenCode third-party developer ecosystem.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-18
Source: github.com/badlogic/pi-mono

---

## 1. Today's Highlights
There are no new official releases published in the 24-hour reporting window, but the Pi community merged 23 functional and bug-fix PRs spanning expanded model provider support, critical performance patches, and resolution of long-standing UX pain points that had been open for up to 3 months. Active in-progress work targets two high-impact user issues: incorrect GPT-5.6 Copilot cost tracking and full retry support for transient compaction failures that break long-running sessions.

## 2. Releases
No new stable or pre-release versions of `pi-mono` were published in the 24-hour window ending 2026-07-18.

## 3. Hot Issues
1. **[#6747] Open: API for enhancing agent message markdown** (Author: xl0)
   Lets extensions mutate rendered display of agent messages without modifying content sent to the LLM, enabling best-effort LaTeX formula rendering for research and education use cases. Link: https://github.com/earendil-works/pi/issues/6747
2. **[#6725] In Progress: Incorrect Copilot pricing for GPT-5.6 models** (Author: krzyk)
   Missing cache write cost calculations in Pi's billing tracker leave users seeing ~50% lower reported costs than their actual GitHub Copilot bills, a critical pain point for teams tracking LLM spend. Link: https://github.com/earendil-works/pi/issues/6725
3. **[#6755] Closed: Agent loop bloat causes multi-GB memory leaks** (Author: andrebreijao)
   The core agent loop was retaining every partial tool update in memory for the full duration of long-running operations, triggering multi-GB RSS growth and minute-long event loop freezes that broke file system automation workflows. Link: https://github.com/earendil-works/pi/issues/6755
4. **[#6665] In Progress: TUI pins 1 full CPU core during streaming** (Author: axelbaumlisto)
   Uncached `Intl.Segmenter` calls and per-chunk full markdown rebuilds cause 100% single-core utilization while the model generates output, drastically increasing laptop battery drain during long sessions. Link: https://github.com/earendil-works/pi/issues/6665
5. **[#3790] Closed: Backward shortcut for cycling thinking levels** (Author: LeonardoRick)
   3+ month old feature request resolved frustration for power users working with 5-6 thinking effort levels, who previously had to cycle forward through all levels to correct overshoots. Link: https://github.com/earendil-works/pi/issues/3790
6. **[#6214] Closed: `pi update --extensions` fails to sync packages across machines** (Author: lumenradley)
   Bug broke cross-workstation setups that synced `.pi` config directories via Git, a core requirement for team Pi deployments. Link: https://github.com/earendil-works/pi/issues/6214
7. **[#6647] In Progress: Compaction fails entirely on single transient stream drop** (Author: axelbaumlisto)
   Lack of retry logic for context summarization calls caused full session failures when mid-stream network interruptions occurred, with no recovery path for large long-running sessions. Link: https://github.com/earendil-works/pi/issues/6647
8. **[#6746] Closed: Slash command selectors instantly close under Kitty keyboard protocol** (Author: medeirosjoaquim)
   Critical workflow blocker for users of popular modern terminals (Kitty, WezTerm, VS Code integrated terminal) who could not open the `/model` picker or other core command menus. Link: https://github.com/earendil-works/pi/issues/6746
9. **[#6768] Closed: Compaction fails for Copilot Enterprise licenses** (Author: MojangPlsFix)
   421 Misdirected Request errors broke full context management for enterprise paid Copilot users, with 1 community 👍 indicating high demand for a fix. Link: https://github.com/earendil-works/pi/issues/6768
10. **[#6777] Open: Add env var overrides for default model and provider** (Author: ajanon)
   Widely requested feature for users managing per-project model defaults via direnv, to achieve parity with existing CLI flags for global settings. Link: https://github.com/earendil-works/pi/issues/6777

## 4. Key PR Progress
1. **[#6783] Closed: Add native StepFun providers** (Author: lit26)
   Adds 4 production-ready StepFun endpoints covering domestic China, global, and prepaid routing regions, expanding Pi's support for leading Chinese model ecosystems. Link: https://github.com/earendil-works/pi/pull/6783
2. **[#4823] Closed: Built-in native llama-cpp provider** (Author: julien-c)
   Zero-config local model support that auto-discovers models from running llama.cpp instances when `LLAMA_*` environment variables are set, no manual extension installation required. Link: https://github.com/earendil-works/pi/pull/4823
3. **[#6775] Open: Add retry logic for compaction transient failures** (Author: davidbrai)
   Directly resolves issue #6647, applying the same retry rules already used for regular assistant generation to context summarization calls to prevent unnecessary session failures. Link: https://github.com/earendil-works/pi/pull/6775
4. **[#6771] Closed: Speed up external editor launch** (Author: possibilities)
   Cuts latency for `Ctrl+G` editor opens for users with crowded large `/tmp` directories, by switching to private `mkdtemp` working directories instead of writing directly to the global temp root. Link: https://github.com/earendil-works/pi/pull/6771
5. **[#6779] Closed: Add freeform tool call support** (Author: t0ster)
   Adds typed JSON and unconstrained freeform tool definition support across the full Pi agent stack, enabling compatibility with new model families that do not follow strict OpenAI schema tool call formats. Link: https://github.com/earendil-works/pi/pull/6779
6. **[#6778] Closed: Preserve extension provider auth during availability refresh** (Author: mahdyarief)
   Eliminates the long recurring "Provider is not configured" error that broke custom third-party extensions after restarts or new session creation. Link: https://github.com/earendil-works/pi/pull/6778
7. **[#6770] Closed: Expose full low/high/max thinking levels for Kimi K3** (Author: FuryMartin)
   Resolves #6769, adding 3 full thinking effort controls for the Kimi K3 model family, up from only the max level that was previously available. Link: https://github.com/earendil-works/pi/pull/6770
8. **[#6765] Closed: Separate generated model data into standalone JSON files** (Author: mitsuhiko)
   Reduces repository churn by moving auto-generated model metadata out of TypeScript source files, cutting noisy unnecessary diffs for contributors working on non-model code paths. Link: https://github.com/earendil-works/pi/pull/6765
9. **[#6764] Closed: Add CRLF and CR line ending support for TUI rendering** (Author: xz-dev)
   Fixes text corruption and stray carriage return UI glitches when processing files from Windows or legacy systems that use non-LF line endings. Link: https://github.com/earendil-works/pi/pull/6764
10. **[#4824] Closed: Add new `model_selector_open` extension event** (Author: julien-c)
    Lets extensions dynamically refresh remote model lists when the user opens the `/model` picker, eliminating the need for background polling to check for updated model availability. Link: https://github

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-18
---
## 1. Today's Highlights
The new v0.19.11 nightly build landed today with core updates for multi-workspace daemon hardening and cold session startup tracing, marking major progress on two of the project's highest-priority performance and architecture roadmaps. Cross-component improvements for web shell UX, subagent reliability, and VS Code integration are merged or in active review, addressing a wave of recently reported user-facing bugs. High-visibility RFCs for single-daemon multi-workspace support and reliable auto-memory recall continue to gather cross-team input to align implementation plans with user requirements.

## 2. Releases
### v0.19.11-nightly.20260717.f8e6e8931
Released 2026-07-17, this incremental nightly update includes two core daemon changes:
- Added full tracing for cold first-session startup to support performance profiling
- Hardened multi-workspace ownership validation logic for the `qwen serve` service

## 3. Hot Issues
1. **[#6378 RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** | 29 comments: The top-engagement open issue, this proposed architecture shift would enable a single daemon process to host multiple independent workspaces while preserving full backward compatibility for existing clients. The community is actively debating edge-case ownership and session migration rules.
2. **[#4748 Optimize daemon cold start and qwen serve fast-path latency](https://github.com/QwenLM/qwen-code/issues/4748)** | 6 comments: This performance tracking issue targets the remaining 2.5s daemon cold boot gap, which is ~3x slower than native CLI initialization. Recent tracing work in the latest nightly is expected to identify remaining bottlenecks for further optimization.
3. **[#7040 RFC: Reliable auto-memory recall — timing, quality, and telemetry](https://github.com/QwenLM/qwen-code/issues/7040)** | 6 comments: Narrowed after core maintainer feedback, this feature request focuses on universal user-facing memory recall improvements rather than complex enterprise memory governance functionality, aligning with the 2026 H2 context performance roadmap.
4. **[#7051 VS Code sidebar plugin connection error](https://github.com/QwenLM/qwen-code/issues/7051)** | 6 comments (closed): A widely reported integration bug affecting Chinese VS Code users, where the ACP process exited unexpectedly with unrecognized Electron CLI flag warnings, breaking chat message delivery to the model.
5. **[#6809 Ctrl+S diff preview garbled for multi-line edits in permission dialog](https://github.com/QwenLM/qwen-code/issues/6809)** | 4 comments (closed): This UI bug broke the critical user permission review workflow, with unrelated lines being concatenated together in diff previews for bulk multi-line file edits.
6. **[#6806 Status line context usage percentage does not refresh after /compress or /compress-fast](https://github.com/QwenLM/qwen-code/issues/6806)** | 3 comments: A UX friction bug marked as welcome-for-PRs, where the footer token usage indicator stays stuck at the pre-compression value, confusing users tracking context limits during long sessions.
7. **[#7073 Triage re-run is silent when the conclusion is not approve](https://github.com/QwenLM/qwen-code/issues/7073)** | 3 comments (closed): A CI workflow bug that broke PR contributor notifications, leaving authors unaware that triage runs had completed with non-approve conclusions.
8. **[#6992 Chained MCP calls fail silently with "Server configuration not found" & Permission UI gets stuck on Windows](https://github.com/QwenLM/qwen-code/issues/6992)** | 3 comments: A high-severity cross-platform bug breaking Model Context Protocol workflows, where sequential MCP tool calls on Windows fail without explicit error messaging and lock up the permission dialog.
9. **[#7128 Web shell: Old sent messages are incorrectly concatenated to the input box after refresh](https://github.com/QwenLM/qwen-code/issues/7128)** | 2 comments (closed): A 100% reproducible bug for self-hosted web shell deployments, where previously submitted failed prompts get merged into a single corrupted string in the input box after page reload, causing accidental duplicate sends.
10. **[#7126 Explore subagent hangs forever — blocks multi-agent pipelines](https://github.com/QwenLM/qwen-code/issues/7126)** | 1 comment: A critical multi-agent blocker, where the read-only Explore subagent retains the `ask_user_question` tool and pauses indefinitely waiting for user input that cannot be delivered in non-interactive nested workflows.

## 4. Key PR Progress
1. **[#6907 feat(daemon): Trace cold first-session startup](https://github.com/QwenLM/qwen-code/pull/6907)**: Implements full instrumentation for daemon cold boot flows, enabling developers to profile unoptimized latency points for the ongoing performance roadmap tracked in issue #4748.
2. **[#6931 fix(cli): Tighten VP-mode controls footprint and fix shell tool indicator overlap](https://github.com/QwenLM/qwen-code/pull/6931)**: Resolves 5 distinct rendering bugs in viewport mode, preventing the sticky task panel and subagent roster from crowding out core conversation content.
3. **[#6984 feat(agents): Support per-model sub-agent concurrency limits](https://github.com/QwenLM/qwen-code/pull/6984)**: Adds a new granular configuration to cap background subagent concurrency by individual model ID, complementing the existing global concurrency rule to prevent unplanned resource exhaustion.
4. **[#7099 fix(core): Persist the subagent's resolved model in its meta sidecar](https://github.com/QwenLM/qwen-code/pull/7099)**: Fixes the bug where subagents incorrectly stored the parent session's model ID in their `.meta.json` file, ensuring custom subagent model overrides persist correctly across restarts.
5. **[#7133 fix(core): Remove ask_user_question from the Explore agent's toolset](https://github.com/QwenLM/qwen-code/pull/7133)**: Addresses the multi-agent pipeline hang reported in issue #7126, by removing user input request permissions from the read-only Explore worker to prevent unintended blocking.
6. **[#7054 feat(web-shell): Git status chip, visual working-tree diff, and sidebar git status](https://github.com/QwenLM/qwen-code/pull/7054)**: Adds full working-tree Git awareness to the browser-based Web Shell, including a live dirty state indicator and inline diff view for uncommitted changes, a long-requested IDE parity feature.
7. **[#7125 feat(web-shell): Add directory autocomplete to the Add Workspace dialog](https://github.com/QwenLM/qwen-code/pull/7125)**: Eliminates the tedious requirement for users to manually type full absolute paths when adding new workspaces, adding live directory lookup and keyboard navigation support in the dialog.
8. **[#7121 feat(vscode): Route logs to the Qwen Code Companion output channel](https://github.com/QwenLM/qwen-code/pull/7121)**: Centralizes all runtime logs from the VS Code extension host and webview into a dedicated standardized output channel, making it far easier for users to debug integration issues.
9. **[#7123 fix(acp): Resolve textual @ file references](https://github.com/QwenLM/qwen-code/pull/7123)**: Adds support for auto-resolving local file paths prefixed with `@` in chat messages, automatically loading referenced file content without requiring users to manually drag and drop files into the input box.
10. **[#7136 feat(web-shell): Persist the split view across refresh, per tab](https://github.com/QwenLM/qwen-code/pull/7136)**: Preserves users' multi-session split view layout to session storage, restoring it automatically after page reloads so users do not need to manually reconfigure multi-pane workspaces.

## 5. Feature Request Trends
1. **Multi-workspace daemon support** is the top architectural priority, with 3 interconnected active proposals for lightweight session summary APIs, cross-session cd ownership semantics, and backward compatible multi-workspace registration, targeted at teams deploying shared centralized `qwen serve` instances.
2. **Web shell UX parity with local desktop clients** is the most active user-facing feature area, with a wave of recent and in-progress requests for path autocomplete, keyboard navigation shortcuts, git integration, and layout persistence landing in rapid succession.
3. **Auto-memory and context performance optimizations** are the highest-priority core roadmap items, focused on eliminating manual context compression and file management overhead for long-running development sessions.
4. **Multi-agent reliability enhancements** are a fast-growing feature category, including per-model concurrency limits, read-only subagent guardrails, and workspace-scoped contact sync APIs for IM channel integration.

## 6. Developer Pain Points
1. Persistent daemon cold start latency remains the top performance frustration, with first session boot times still ~3x slower than native standalone CLI initialization for desktop users.
2. Cross-platform consistency gaps create unnecessary user friction, including Windows-specific MCP tool failures and Linux VS Code ACP launch bugs that break core workflows for subsets of users.
3. Recurring interactive UI rendering bugs (garbled diff previews, broken tall code block streaming, stale token usage indicators) degrade workflow reliability for power users running long sessions.
4. CLI terminal state cleanup issues, including garbled output after forced Ctrl+C exits and no restoration of cancelled prompts to the input box, create avoidable repetitive work for keyboard-first developers.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-07-18
---
## 1. Today's Highlights
This digest covers a full day of v0.9.1 release stabilization work, with no new official releases published in the past 24 hours. Maintainers landed 7 critical bugfix PRs addressing Windows process leaks, MCP adapter permission semantics, and OpenHarmony (OHOS) build compatibility, while opening PRs for long-requested new capabilities including native Windows ARM64 binary support and keyless onboarding workflows. Community issue updates spanned longstanding agent behavior regressions, cross-platform compatibility gaps, and new model/provider support asks.

## 2. Releases
No new official releases were published in the 24 hours preceding 2026-07-18. The project remains in the v0.9.1 pre-release stabilization phase.

## 3. Hot Issues (Top 10 Notable)
| Issue Link | Summary & Community Context |
|------------|------------------------------|
| [Hmbown/CodeWhale#4032](https://github.com/Hmbown/CodeWhale/issues/4032) | Highest-traffic open bug (35 comments) tracking a core agent behavior regression: CodeWhale consistently ignores user-provided pre-written scripts to generate new temporary code for requested tasks, even when directly challenged. The top community priority for improving agent predictability. |
| [Hmbown/CodeWhale#3275](https://github.com/Hmbown/CodeWhale/issues/3275) | 17-comment reported regression where the agent extends execution beyond explicitly defined user scope, running unprompted self-driven cycles of proposing, answering, and executing actions without confirmation. Creates unexpected execution risks and wasted compute. |
| [Hmbown/CodeWhale#3192](https://github.com/Hmbown/CodeWhale/issues/3192) | 12-comment community enhancement request to list the project on the public Agent Client Protocol Registry, which would enable one-click installation for Zed editor users and expand discoverability for the broader agent developer ecosystem. |
| [Hmbown/CodeWhale#1481](https://github.com/Hmbown/CodeWhale/issues/1481) | Well-received 9-comment request for native support for the low-cost OpenCode Go/Zen DeepSeek-V4 hosting provider, giving users a cheaper alternative to official DeepSeek API endpoints. |
| [Hmbown/CodeWhale#4236](https://github.com/Hmbown/CodeWhale/issues/4236) | Maintainer-led parent epic for full native Termux/Android arm64 compatibility, a long-requested feature that would let users run the full DeepSeek TUI directly on Android mobile devices without emulation. |
| [Hmbown/CodeWhale#4100](https://github.com/Hmbown/CodeWhale/issues/4100) | Critical Windows reliability bug (4 comments) causing `exec_shell` to catastrophically fail with exit code 2147483647 in long-running TUI sessions due to ConPTY resource exhaustion, breaking uninterrupted workflows for heavy Windows users. |
| [Hmbown/CodeWhale#4489](https://github.com/Hmbown/CodeWhale/issues/4489) | Newly reported Windows-specific bug (4 comments) where hook commands leave orphaned Node.js grandchild processes running indefinitely after shell timeouts, consuming system resources until the main TUI process exits. |
| [Hmbown/CodeWhale#4417](https://github.com/Hmbown/CodeWhale/issues/4417) | 5-comment enhancement to add native device OAuth login for Moonshot AI Kimi accounts, eliminating manual API key copying and providing automatic token refresh workflows for Kimi users. |
| [Hmbown/CodeWhale#4479](https://github.com/Hmbown/CodeWhale/issues/4479) | UX bug (3 comments) causing intermittent missing/extra spaces in TUI text on Windows 10/11 terminals that only resolves on mouse text selection, degrading usability for Windows power users. |
| [Hmbown/CodeWhale#4507](https://github.com/Hmbown/CodeWhale/issues/4507) | New release blocker surfaced via contributor feedback, requiring explicit user consent before the tool can scan or modify 3rd party AI CLI credential stores (such as OpenAI Codex auth files) to address critical trust boundary gaps. |

## 4. Key PR Progress (Top 10 Important Updates)
| PR Link | Description |
|---------|-------------|
| [Hmbown/CodeWhale#4505](https://github.com/Hmbown/CodeWhale/pull/4505) | Fixes the broken xAI device-code OAuth login flow by moving synchronous request handling to Tokio's blocking pool, resolving the widely reported "failed to parse xAI device-code response" error. |
| [Hmbown/CodeWhale#4498](https://github.com/Hmbown/CodeWhale/pull/4498) | Resolves both documented Ctrl+O pager bugs (truncated output, unexpected immediate closure) while moving external editor access to Ctrl+Shift+O to avoid workflow conflicts. |
| [Hmbown/CodeWhale#4504](https://github.com/Hmbown/CodeWhale/pull/4504) | Fixes the rigid DeepSeek-only onboarding gate by allowing users to skip API key setup entirely for local providers (SGLang, vLLM, Ollama) and select alternate providers directly in the first-run wizard. |
| [Hmbown/CodeWhale#4506](https://github.com/Hmbown/CodeWhale/pull/4506) | Adds full native Windows ARM64 binary support, including updated install scripts, npm packages, and built-in updater functionality for ARM-based Windows devices. |
| [Hmbown/CodeWhale#4500](https://github.com/Hmbown/CodeWhale/pull/4500) | Adds transparent per-turn routing receipts that show users which strong/fast model tier the auto-routing system selected, plus the reasoning behind the routing decision, eliminating black-box behavior for mixed model backends. |
| [Hmbown/CodeWhale#4501](https://github.com/Hmbown/CodeWhale/pull/4501) | Patches a security issue by removing the hardcoded Kimi client ID and automatic token refresh/credential write functionality, only allowing read-only use of pre-existing imported Kimi access tokens until users switch to the new official OAuth flow. |
| [Hmbown/CodeWhale#4470](https://github.com/Hmbown/CodeWhale/pull/4470) | Completes OpenHarmony build support by generating required QuickJS bindings for OHOS targets and disabling the unsupported portable-pty dependency while keeping core `exec_shell` functionality operational for OHOS devices. |
| [Hmbown/CodeWhale#4491](https://github.com/Hmbown/CodeWhale/pull/4491) | Resolves the Windows hook Node.js process leak bug from issue #4489,

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*