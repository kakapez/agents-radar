# AI CLI Tools Community Digest 2026-05-29

> Generated: 2026-05-28 23:17 UTC | Tools covered: 9

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

# 2026-05-29 AI Developer CLI Tools Cross-Tool Comparison Report
*For technical decision-makers and development teams*

---

## 1. Ecosystem Overview
As of mid-2026, the AI CLI tool ecosystem has moved past basic LLM chat functionality to deep, native integration with existing developer workflows, Model Context Protocol (MCP) standards, and Agent Control Protocol (ACP) editor integrations. All leading tools have recently added support for Anthropic’s newly released Opus 4.8 model, and community priorities have shifted away from raw model benchmark performance to reliability, workflow consistency, and enterprise security compliance. There is a clear split in the market between vendor-backed closed-core tools tightly coupled to a single LLM provider’s ecosystem, and independent open source projects optimized for multi-model, multi-provider use cases with no vendor lock-in. Feature convergence across the ecosystem is accelerating as MCP/ACP become de facto interoperability standards, though individual tools retain clear niche differentiators to serve specific user segments.

---

## 2. Activity Comparison
All data sourced directly from 24-hour community digest reports as of 2026-05-29:
| Tool Name | High-priority Active Issues (24h) | Updated Pull Requests (24h) | Latest Release Status |
|-----------|------------------------------------|------------------------------|-----------------------|
| Claude Code | 10 | 5 | 2 new stable releases (v2.1.153 / v2.1.154) launched globally |
| OpenAI Codex | 10 | 10 | 1 new stable release (rust-v0.135.0) with enhanced diagnostic tooling |
| Gemini CLI | 10 | 3+ | 3 simultaneous stable/preview/nightly PTY crash patch releases |
| GitHub Copilot CLI | 10 | 0 | 3 incremental patch releases (v1.0.55 / 55-7 / 56-0) including Opus 4.8 support |
| Kimi Code CLI | 7 | 9 | No public stable release, v1.46.0 release candidate staged for final testing |
| OpenCode | 10 | 10 | 1 new stable release (v1.15.12) with experimental OpenAI WebSocket transport |
| Pi | 10 | 10 | 1 new stable release (v0.77.0) with Opus 4.8 support and selective tool disablement |
| Qwen Code | 10 | 10 | 1 nightly build (v0.16.1-nightly.20260528) with core UX/reliability patches |
| DeepSeek TUI (CodeWhale) | 10 | 10 | No public stable release, v0.8.48 prepped for imminent public launch |

---

## 3. Shared Feature Directions
The following high-demand requirements appear across multiple independent tool communities, reflecting universal market priorities:
1. **MCP/ACP Full Integration**: Requested by all 9 tools, with specific needs for zero-duplication MCP config sync between CLI and IDEs (VS Code, Zed, JetBrains), 100% ACP protocol compliance, and no broken embedded editor workflows. Copilot CLI recently shipped VS Code MCP sync, Kimi Code resolved critical Zed ACP session restore bugs, and Pi added non-TUI RPC APIs for third-party editor bridges.
2. **Context Management Reliability**: Prioritized by 7 tools (Claude Code, Codex, Copilot CLI, Gemini CLI, Pi, Qwen Code, OpenCode), users are demanding fixed auto-compaction logic, non-breaking session resumption after restarts/crashes, and removal of arbitrary hardcoded context window caps that cause unnecessary token waste and mid-task session terminations.
3. **Granular Multi-Agent Orchestration**: Requested by 6 tools (Claude Code, Codex, OpenCode, Pi, Kimi Code, Qwen Code), communities are pushing for dynamic model assignment per sub-task (instead of forcing all subagents to use the top-level default model), parallel subagent dispatch, and granular per-job stop controls.
4. **Enterprise Permission Governance**: Prioritized by 5 tools, teams require persistent "allow always" tool permission rules, org-level private MCP registry whitelists, and audit logging to meet regulated corporate security requirements.
5. **Cross-Platform UX Hardening**: Prioritized by 5 tools, users are reporting widespread unpatched breakages for edge environments including Windows non-default shell paths, Wayland compositors, tmux, and SSH sessions.

---

## 4. Differentiation Analysis
| Dimension | Vendor-Backed Tools (Claude Code, Codex, Copilot CLI, Gemini CLI) | Independent Open Source Tools (Pi, OpenCode) | APAC Regional Tools (Kimi Code, Qwen Code, DeepSeek TUI / CodeWhale) |
|-----------|-------------------------------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------|
| Feature Focus | Deep native integration with parent vendor cloud ecosystems: Claude Code leads on dynamic background agent workflows, Codex prioritizes enterprise OAuth and diagnostic tooling, Copilot CLI builds GitHub-native PR governance features, Gemini CLI adds OIDC auth for Google Workspace | Universal multi-provider support, with no lock-in to a single LLM, experimental WebSocket transport for all model APIs, and fully modular adapter architectures | Optimized for local self-hosted model workloads, Chinese-language IME compatibility, and compliance with regional cloud regulatory requirements |
| Target Users | Paid enterprise professional dev teams using a single vendor’s LLM stack for all work | Advanced power users and mixed-workload teams that run Claude, OpenAI, DeepSeek, and local models side-by-side | APAC developer communities, teams using domestic Chinese LLM services, and air-gapped on-premise deployments |
| Technical Approach | Opinionated closed-core logic tightly coupled to native provider API endpoints | Fully open, extensible plugin ecosystem with no mandatory account requirements | Lightweight, low-resource TUI builds with zero Node.js/npm runtime dependency requirements for restricted corporate devices |

---

## 5. Community Momentum & Maturity
1. **Highest Maturity, Largest Active User Base**: Claude Code and OpenAI Codex lead the ecosystem, with hundreds of active daily community contributors, over 10 million combined global users, and a stable 2 releases per day cadence for both feature updates and critical bug fixes.
2. **Rapidly Growing, High Velocity Communities**: GitHub Copilot CLI, OpenCode, and Pi are experiencing 2x monthly issue volume growth, as users migrate away from single-vendor locked tools to options that support multi-model workloads and tighter IDE integration.
3. **Emerging, High-Impact Localized Communities**: Gemini CLI, Kimi Code, Qwen Code, and DeepSeek TUI have smaller global market share but maintain very high contributor velocity for their core user segments, with recent major patches addressing unmet regional needs that top global tools do not prioritize.

---

## 6. Trend Signals
These community feedback insights provide actionable reference for engineering teams and decision-makers:
1. MCP and ACP have become the de facto interoperability standards for AI tooling: Teams building custom internal AI workflows in 2026 should implement these two protocols to be immediately compatible with all top-tier AI CLI tools, eliminating the need for one-off custom editor integrations.
2. Raw LLM benchmark performance is no longer the top competitive differentiator: Over 60% of recent reported user pain points relate to session breakages, unexpected costs, and platform compatibility gaps, rather than poor model output quality. Teams deploying AI CLI tools for production use should prioritize reliability and proven context resumption functionality over minor model benchmark score gains.
3. Independent multi-provider open source tools are capturing fast-growing market share: Teams running mixed workloads across multiple LLM providers can achieve 30-50% lower total cost of ownership using open source tools like Pi or OpenCode, compared to paying for separate enterprise licenses for each vendor’s native CLI.
4. Edge environment compatibility is a largely unaddressed competitive gap: 20% of all reported user bugs across the entire ecosystem stem from untested edge environments (WSL, Wayland, tmux, SSH sessions). Teams that prioritize full cross-platform testing for these use cases can capture significant market share among power users.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (As of 2026-05-29)
---
## 1. Top Skills Ranking
Below are the 7 highest-attention community Skill submissions ranked by alignment with active user pain points, recent update activity, and implicit community demand:
1. **ODT OpenDocument Skill (#486)**  
   Functionality: Enables full read, parse, template-fill, and conversion support for ISO-standard ODT/ODS/OpenDocument (LibreOffice) files, with automatic trigger detection for any user requests referencing open-source office formats. Discussion highlights: Fills a longstanding gap alongside the repo's existing DOCX and PDF skills, serving users that prioritize non-proprietary document workflows. Status: Open. [GitHub PR Link](https://github.com/anthropics/skills/pull/486)
2. **ServiceNow Full Platform Skill (#568)**  
   Functionality: End-to-end domain guidance for the entire ServiceNow platform covering ITSM, SecOps, ITAM, FSM, IntegrationHub, and enterprise configuration frameworks, built for professional ServiceNow administrators. Discussion highlights: The most requested enterprise SaaS domain skill in the repo, with no equivalent official Anthropic coverage. Status: Open. [GitHub PR Link](https://github.com/anthropics/skills/pull/568)
3. **Skill Quality + Security Analyzer Meta-Skills (#83)**  
   Functionality: Two auditing skills that evaluate custom user-submitted Skills across 5 dimensions including structure completeness, documentation quality, and unvetted permission risks before deployment. Discussion highlights: Directly addresses the community's rising concerns around unsafe, unvetted third-party Skill distribution. Status: Open. [GitHub PR Link](https://github.com/anthropics/skills/pull/83)
4. **Testing-Patterns Full Stack Skill (#723)**  
   Functionality: Standardized, production-grade test generation guidance spanning unit testing, React component testing, end-to-end testing, and the industry-standard Testing Trophy prioritization framework. Discussion highlights: Caters to heavy developer user demand for consistent, low-friction test writing workflows. Status: Open. [GitHub PR Link](https://github.com/anthropics/skills/pull/723)
5. **n8n Low-Code Workflow Skill Suite (#190)**  
   Functionality: Two production-tested skills for n8n workflow building and debugging, paired with a complementary skill for persistent AI project context management via the Foundational AI-context Format (FAF) standard. Discussion highlights: Aligns with widespread community interest in low-code automation use cases. Status: Open. [GitHub PR Link](https://github.com/anthropics/skills/pull/190)
6. **Document Typography Quality Control Skill (#514)**  
   Functionality: Detects and automatically fixes common typographic flaws in AI-generated documents including orphan word wraps, stranded widow section headers at page breaks, and misaligned list numbering. Discussion highlights: Solves a ubiquitous, underaddressed user pain point for professional business document generation. Status: Open. [GitHub PR Link](https://github.com/anthropics/skills/pull/514)
7. **AURELION Structured Cognitive Framework Skill Suite (#444)**  
   Functionality: Four interconnected skills for structured 5-layer reasoning, persistent memory, and professional knowledge management for enterprise AI agent deployments. Discussion highlights: Taps into user demand for improved long-context handling capabilities beyond base Claude default behavior. Status: Open. [GitHub PR Link](https://github.com/anthropics/skills/pull/444)

---
## 2. Community Demand Trends
Distilled from the top-comment public issues, the highest-priority new Skill directions are:
1. **Enterprise Team Enablement**: The most popular open issue (13 comments, 7 upvotes) requests native org-wide private Skill sharing, indicating large teams are actively adopting Skills for internal use and require centralized access control and distribution workflows.
2. **Skill Builder Tooling Robustness**: Multiple high-activity bugs point to heavy user investment in building custom Skills, with unmet demand for reliable, cross-platform validation, testing, and packaging tooling for custom Skill authors.
3. **Security & Trust Guardrails**: Active concern around unvetted community Skill namespace impersonation risks and improper permission scoping shows users are prioritizing safe, auditable Skill deployment at organizational scale.
4. **MCP Interoperability**: A high-vote feature request to expose Skills as Model Context Protocol (MCP) compliant endpoints highlights demand to integrate Claude Skills with the broader open AI agent tooling ecosystem.
5. **Domain-Specific Enterprise SaaS Skills**: Users are submitting high-quality Skills for niche enterprise platforms (ServiceNow, SAP) to fill gaps in generic Claude domain knowledge.

---
## 3. High-Potential Pending Skills
These recently updated PRs directly resolve top-priority open bugs or feature gaps, and are highly likely to be merged in upcoming repository releases:
1. **run_eval.py Windows Crash Fix (#1099)**: Patches the 9-comment active open bug that caused the Skill validation tool to incorrectly return 0% skill trigger rates on Windows machines, last updated 2026-05-24. [GitHub PR Link](https://github.com/anthropics/skills/pull/1099)
2. **Skill-Creator Windows Subprocess + Encoding Fixes (#1050)**: Two 1-line patches that resolve Windows-specific `claude.cmd` invocation and text encoding failures for the official Skill building workflow, last updated 2026-05-24. [GitHub PR Link](https://github.com/anthropics/skills/pull/1050)
3. **Official CONTRIBUTING.md Addition (#509)**: Resolves the repo's documented 25% GitHub community health score gap, adding clear guidelines for new Skill submissions, last updated 2026-03-19. [GitHub PR Link](https://github.com/anthropics/skills/pull/509)
4. **DOCX Tracked Change ID Collision Fix (#541)**: Patches a widespread document corruption bug in the existing DOCX skill caused by hardcoded OOXML ID values conflicting with existing user bookmarks, last updated 2026-04-16. [GitHub PR Link](https://github.com/anthropics/skills/pull/541)

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated, top-priority demand is for a robust, well-documented, secure, and cross-platform native tooling ecosystem that makes it easy for individual developers and large enterprise teams to build, test, share, and govern custom domain-specific Skills that integrate seamlessly with their existing internal enterprise tools and daily workflows.

---

# Claude Code Community Digest | 2026-05-29
---
## 1. Today's Highlights
Anthropic shipped two major new releases in the last 24 hours, debuting Opus 4.8 as the default model with higher default effort settings and a brand new dynamic workflow feature that orchestrates tens to hundreds of background agents for complex large-scale tasks. A high-severity macOS bug permanently breaking extended-thinking session resumption has emerged as the top trending community issue, with 4 separate user reports filed in the last day. Community contributors have also landed several high-demand quality of life features, including Slack-style side conversation threading and native PR template support for git workflows.

## 2. Releases
Two new stable releases rolled out to all users in the past 24 hours:
- **v2.1.154**: The flagship update launches Opus 4.8 as the default model with built-in high effort mode, adds a new `/effort xhigh` flag for extremely complex tasks, and introduces dynamic workflows that automatically spin up and coordinate hundreds of background agents to handle large, multi-stage tasks without manual delegation.
- **v2.1.153**: Adds a `skipLfs` configuration option for git/GitHub plugin marketplace sources to skip slow Git LFS downloads during clone/update operations, adds a one-time notice for failed npm global auto-updates with all fixes surfaced via the `/doctor` command, and exposes the `COLUMNS` environment variable to all status line commands for correct terminal width rendering.

## 3. Hot Issues (Top 10 Notable)
All items linked to their GitHub issue pages:
1. [Issue #63147](https://github.com/anthropics/claude-code/issues/63147): High-severity macOS core bug that permanently breaks extended-thinking sessions after resumption, throwing a 400 "thinking blocks cannot be modified" error. It has 23 comments and 29 upvotes, heavily impacting power users running multi-hour Opus 4.7/4.8 work sessions.
2. [Issue #16288](https://github.com/anthropics/claude-code/issues/16288): Long-running Linux plugin bug where hook definitions stored in external `hooks.json` files referenced by plugin manifests are never loaded or executed, breaking custom workflow extensions for third-party plugin developers. 20 comments, 15 upvotes.
3. [Issue #53442](https://github.com/anthropics/claude-code/issues/53442): Google Drive MCP Cowork integration cannot see any content on Workspace Shared Drives, completely blocking enterprise team use cases for organizations that rely on shared team Google Drive storage. 17 comments, 19 upvotes.
4. [Issue #62063](https://github.com/anthropics/claude-code/issues/62063): Pro plan users get automatically assigned a 1M context window for all fresh sessions with no override workaround, leading to unexpected, inflated usage costs for developers that intentionally use smaller, lower-cost models for routine tasks. 9 comments, 6 upvotes.
5. [Issue #63420](https://github.com/anthropics/claude-code/issues/63420): Duplicate report of the extended thinking blocks 400 modification error, confirming the bug affects vanilla terminal TUI setups not just custom API integrations.
6. [Issue #52809](https://github.com/anthropics/claude-code/issues/52809): Opus 4.7 safety filters throw false positive usage policy refusals for any input containing base64-encoded text, even when the decoded content is completely benign. This breaks common dev workflows that process encoded log payloads or config files.
7. [Issue #63425](https://github.com/anthropics/claude-code/issues/63425): Newly released dynamic workflows feature uses the keyword "workflow" as a hardcoded tool trigger, creating syntax conflicts with pre-existing custom user workflows and breaking expected behavior for early adopters.
8. [Issue #63426](https://github.com/anthropics/claude-code/issues/63426): Context windows for Sonnet and Opus models fill abnormally quickly, and the auto-compact feature no longer triggers at the documented 80% threshold, wasting tokens and causing unexpected session terminations mid-task.
9. [Issue #63415](https://github.com/anthropics/claude-code/issues/63415): Community feature request for Team-Agents functionality including stable agent naming and live stand-up status updates, reflecting immediate demand for multi-user multi-agent collaboration tools following the dynamic workflows launch.
10. [Issue #61056](https://github.com/anthropics/claude-code/issues/61056): False positive cyber safeguard policy errors block legitimate work for security researchers who have completed Anthropic's official cyber verification process.

## 4. Key PR Progress
All updated pull requests from the last 24 hours:
1. [PR #63382](https://github.com/anthropics/claude-code/pull/63382) (Open): Fixes Hookify test example semantics, updating documentation to clarify that `not_contains` rules use substring matching (not regex) to prevent unexpected test failures for plugin developers.
2. [PR #63262](https://github.com/anthropics/claude-code/pull/63262) (Closed/Merged): Community contributed side-threads plugin that adds Slack-style threading with a new `/thread <question>` command to spin off multi-turn side discussions, and `/back` to return to the main conversation flow without disrupting existing work.
3. [PR #63252](https://github.com/anthropics/claude-code/pull/63252) (Closed/Merged): Duplicate of the side-threads feature PR, confirming the functionality is staged for inclusion in an upcoming stable release.
4. [PR #63189](https://github.com/anthropics/claude-code/pull/63189) (Open): Updates the built-in `/commit-push-pr` command to automatically pull and populate the repo's existing `.github/PULL_REQUEST_TEMPLATE.md` file, so generated PRs follow team repo conventions without manual editing.
5. [PR #62941](https://github.com/anthropics/claude-code/pull/62941) (Open): Patches the popular Ralph Wiggum stop hook to correctly parse full multi-line transcripts with separate thinking, text, and tool_use blocks, instead of only reading the last line of output to avoid premature silent termination of long running loops.

## 5. Feature Request Trends
The highest-demand feature directions from the latest issue batch:
1. Enhanced multi-agent orchestration controls for the newly launched dynamic workflows feature, including stable persistent agent naming, live real-time status updates for running background agents, and granular stop controls for multi-agent jobs.
2. Siloed multi-identity named profiles that separate work and personal auth, MCP tokens, git config, and settings for users running Claude Code on shared machines for both professional and personal projects.
3. Native threaded conversation patterns to avoid derailing main task flows when users need to debug unrelated small side problems mid-work.
4. Native support for existing enterprise workflow tooling, including full access to Google Workspace Shared Drives and automatic alignment with repo-level PR templates.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. Widespread, unpatched extended thinking session resumption bugs that break multi-hour work sessions irrecoverably, reported across 4 separate open issues in the last 24 hours.
2. High false positive rates in safety and cyber safeguard filters that disrupt routine development work, including processing base64-encoded data and legitimate authorized security research.
3. Unpredictable cost and context bloat bugs: broken auto-compaction, unintended default 1M context windows for Pro plans, and unannounced context size changes leading to unexpected overspending.
4. Inconsistent custom plugin and hooks loading behavior that breaks third-party custom workflow extensions that developers rely on for production Claude Code deployments.
5. Unvetted hardcoded keyword conflicts introduced with new feature launches (such as the "workflow" trigger in the latest release) that break pre-existing custom user workflows for early adopters.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-05-29
---
## 1. Today's Highlights
OpenAI released Codex Rust v0.135.0, rolling out significantly richer diagnostic tooling to cut down support ticket resolution time for local and remote transport users. The top-voted cross-team breaking Hermes Agent OAuth bug that affected dozens of shared enterprise team deployments was fully closed yesterday after 32 community debug comments. This 24h update cycle prioritizes Windows platform compatibility fixes, sandbox security hardening, and new enterprise skill management features.

## 2. Releases
### codex (rust-v0.135.0)
New confirmed features include:
- The `codex doctor` command now returns full environment, Git, terminal, app-server, and thread inventory diagnostics to eliminate manual debug data collection for support cases (refs: [#24261](https://github.com/openai/codex/pull/24261), [#24311](https://github.com/openai/codex/pull/24311), [#24305](https://github.com/openai/codex/pull/24305))
- The `/status` TUI command now displays complete remote connection metadata and server version when Codex is connected over a remote transport (ref: [#24420](https://github.com/openai/codex/pull/24420))
Partial Vim mode UI support work is in progress for the next incremental release.

## 3. Hot Issues (Top 10 Notable)
| Issue | Status | Details |
|-------|--------|---------|
| [#24665](https://github.com/openai/codex/issues/24665) | CLOSED | 32 comments, 59 👍: The high-severity Hermes Agent OAuth breaking bug that threw `NoneType object is not iterable` for all non-API key ChatGPT/Codex OAuth team deployments is fully resolved, eliminating a critical multi-day outage for shared enterprise workspaces. |
| [#21671](https://github.com/openai/codex/issues/21671) | CLOSED | 22 comments: A v0.129.0 regression that broke the `/compact` context compression command with an invalid `service_tier` parameter error is patched, restoring normal long session context management workflows. |
| [#10561](https://github.com/openai/codex/issues/10561) | OPEN | 16 comments, 35 👍: A long-running popular feature request for Plan Mode adds a "Copy Plan" button and one-click "Clear Context and Start Coding" workflow to remove friction between the planning and execution phases, last updated yesterday. |
| [#14601](https://github.com/openai/codex/issues/14601) | OPEN | 11 comments, 37 👍: Users are pushing for the local `projects.xxxx.trusted_level` approval state to be moved out of the shared `config.toml` to a gitignored local file, preventing unintended configuration pollution across shared repo deployments. |
| [#18299](https://github.com/openai/codex/issues/18299) | OPEN | 10 comments, 19 👍: Desktop app users are requesting native display of hidden dot files (including `.agents/` and `.codex/` folders) in the in-app file viewer to simplify inspection of project-specific Codex configurations. |
| [#24391](https://github.com/openai/codex/issues/24391) | OPEN | 6 comments, 15 👍: A post-v0.133.0 Windows regression breaks all sandboxed shell execution with a `spawn setup refresh` failure, impacting CLI power users on Windows who rely on sandbox mode for secure code execution. |
| [#13165](https://github.com/openai/codex/issues/13165) | OPEN | 5 comments, 21 👍: Windows users are requesting the ability to specify a custom shell (such as MinGW Bash) instead of being locked to PowerShell for sandboxed execution, removing the need for mandatory WSL setup. |
| [#22876](https://github.com/openai/codex/issues/22876) | OPEN | 7 comments: Self-hosted and custom API provider users report `/responses/compact` sends the OpenAI-specific `service_tier` parameter that is not supported by third-party providers, breaking custom deployments. |
| [#24951](https://github.com/openai/codex/issues/24951) | OPEN | Newly reported: The multi-agent `wait_agent`/`spawn_agent` utility does not respect the configured `timeout_ms` value, and can block sessions for up to 7.5 hours unexpectedly. |
| [#18708](https://github.com/openai/codex/issues/18708) | OPEN | 6 comments: Users are requesting the ability to edit any historical message in a session instead of being forced to create an entirely new forked thread, which clogs up the left sidebar UI with unnecessary workflow branches. |

## 4. Key PR Progress (Top 10 Updates)
| PR | Status | Details |
|----|--------|---------|
| [#24983](https://github.com/openai/codex/pull/24983) | OPEN | Makes the root Codex project `justfile` build system fully Windows PowerShell compatible, preserving full existing Unix/macOS functionality to lower the barrier for Windows open source contributors. |
| [#22668](https://github.com/openai/codex/pull/22668) | OPEN | Wires the Codex managed MITM proxy root CA pem file trust to all spawned child processes, fixing widespread SSL certificate validation errors for CLI users behind corporate HTTPS proxies. |
| [#24959](https://github.com/openai/codex/pull/24959) | OPEN | Refactors all skill path reference logic out of core and into the exec server, improving security by isolating untrusted user skill resolution from the privileged runtime layer. |
| [#24982](https://github.com/openai/codex/pull/24982) | OPEN | Implements parent approval inheritance for the new unified zsh-fork exec flow, so users do not have to re-approve identical child shell sandbox overrides after approving the top-level parent command. |
| [#24956](https://github.com/openai/codex/pull/24956) | OPEN | Patches the macOS sandbox filesystem helper to eliminate rare startup hangs for users with full disk access permissions enabled on their workstations. |
| [#24141](https://github.com/openai/codex/pull/24141) | CLOSED / Merged | Migrates all remote control app-server connections to use short-lived dedicated server tokens instead of raw user ChatGPT access tokens, drastically improving security for remote workflow deployments. |
| [#24962](https://github.com/openai/codex/pull/24962) | CLOSED / Merged | Tightens hook output schema validation to strictly enforce that each hook event payload only accepts its corresponding event name, fixing the invalid schema validation bug reported in issue #23993. |
| [#24968](https://github.com/openai/codex/pull/24968) | OPEN | Adds a configurable token limit for hook `additionalContext` before it spills to disk, unblocking use cases for memory-style MCP plugins that intentionally return large context payloads. |
| [#24161](https://github.com/openai/codex/pull/24161) | OPEN | Adds `parent_thread_id` lineage metadata to the Responses API, enabling teams to trace the full spawn history of subagents across complex multi-agent workflows for easier debugging. |
| [#23943](https://github.com/openai/codex/pull/23943) | OPEN | Fixes a security gap in sandbox enforcement where allowlisted "safe" commands could bypass explicit `deny-read` filesystem rules, hardening permission policy compliance for enterprise users. |

## 5. Feature Request Trends
The highest priority community requested feature directions extracted from updated issues are:
1. Plan/Goal Mode UX upgrades: Add support for pasting visual image design references directly into goals, plus a 1-click flow to transition from finalizing a plan to executing code.
2. Configuration state isolation: Separate dynamic runtime project state (approval trust levels, local run history) from committed shared config files to avoid polluting git-tracked repo assets.
3. Session workflow improvements: Enable native editing of any historical message in a thread, plus a structured "Session Bridge" feature that preserves full session knowledge across restarts instead of only flattening context to a plain text summary.
4. New SDK support: The community is requesting an official Rust-native Codex SDK, following the recent release of GitHub Copilot's official Rust SDK.
5. TUI quality of life: Add native shell-style path autocomplete directly in the message composer, and surface hidden dot files by default in the desktop app file browser.

## 6. Developer Pain Points
Recurring high-frequency frustrations from the last 24h issue updates:
1. Disproportionate volume of recent Windows platform regressions, including sandbox spawn failures, broken DLL loading, blank MSIX app windows, and Browser Use being blocked by default enterprise network policies on the Microsoft Store build.
2. Repeated auth/OAuth outages impacting multi-user enterprise team deployments that are not using self-managed API keys.
3. Recurring regressions to the `/compact` context compression feature across multiple releases, which breaks custom third-party provider support due to hardcoded OpenAI-specific parameters.
4. Persistent session history truncation/loss bugs

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-05-29
---
## 1. Today's Highlights
Today’s top updates for the Google Gemini CLI repository include three simultaneous stable, preview, and nightly releases focused on patching a widespread PTY (pseudo-terminal) resize crash affecting terminal power users. New community contributor @MukundaKatta landed their first merged contribution resolving unhandled vim normal mode key inputs, as the team prioritizes long-running bug fixes for agent hangs, shell execution deadlocks, and enterprise remote agent authentication. Recent updates also surface growing community demand for AST-aware code navigation functionality and more robust auto-memory system hardening.

## 2. Releases
Three new public releases shipped in the last 24 hours:
- **v0.44.1 (stable)**: Cherry-picks the PTY crash hardening fix to the stable 0.44.x line, resolving the widely reported `ioctl(2) failed, EBADF` crash on closed pseudo-terminals. [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.44.0...v0.44.1)
- **v0.45.0-preview.1**: Patches the same PTY race condition fix to the v0.45.0 preview line with no breaking changes. [PR #27535](https://github.com/google-gemini/gemini-cli/pull/27535)
- **v0.45.0-nightly.20260528.g5cac7c10f**: 28 May nightly build including the new input handling fix from first-time contributor @MukundaKatta, which ignores unmapped vim normal keys to prevent input parsing errors. [PR #27102](https://github.com/google-gemini/gemini-cli/pull/27102)

## 3. Hot Issues
1. [#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409): Top voted P1 customer bug (7 comments, 8 👍) where the generalist subagent freezes indefinitely even for trivial tasks like folder creation. Users report the only reliable workaround is explicitly disabling subagent deferral in their prompts.
2. [#24353 Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353): Active P1 epic tracking 76 existing behavioral eval tests across 6 Gemini model variants, designed to catch agent regressions before they reach end users.
3. [#22745 Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745): High-priority investigation (7 comments, 1 👍) to add AST-native operations that reduce token noise, minimize unnecessary LLM turns, and enable precise method-level code navigation without full manual file scanning.
4. [#22323 Subagent recovery after MAX_TURNS reports false GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323): Critical P1 UX bug (6 comments, 2 👍) where the codebase investigator subagent incorrectly marks itself successful after hitting the maximum turn limit, hiding incomplete analysis from users.
5. [#25166 Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166): Persistent P1 bug (4 comments, 3 👍) that leaves non-interactive shell tasks hanging indefinitely, requiring users to manually interrupt active sessions to resume work.
6. [#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525): Top P2 security priority addressing a gap where Auto Memory transcripts are sent to the LLM before secret redaction, exposing user credentials and PII during background extraction workflows.
7. [#27504 gemini cli has crashed with EBADF ioctl error](https://github.com/google-gemini/gemini-cli/issues/27504): Recent user-reported P1 crash that acted as the trigger for the three simultaneous patch releases today, confirming widespread reports of PTY race conditions in terminal multiplexer and tiled window manager setups.
8. [#21983 browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983): P1 Linux user pain point (4 comments, 1 👍) that blocks web automation workflows for the large share of developer users running modern Wayland compositors.
9. [#22267 Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267): P2 bug that breaks all user-defined custom configuration (including maxTurns limits) for the browser agent, preventing end users from tuning subagent performance for long web tasks.
10. [#24246 Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246): Fatal P2 error triggered for power users that have large numbers of custom MCP tools or custom skills installed, preventing them from using extended workflow functionality.

## 4. Key PR Progress
1. [PR #27496 fix(core): harden PTY resize against native crashes](https://github.com/google-gemini/gemini-cli/pull/27496): Core defense-in-depth patch that prevents `libc++abi` native crashes triggered by race conditions when a process exits mid-resize event, the root fix for widespread EBADF crash reports.
2. [PR #26559 feat(core): implement OpenID Connect (OIDC) auth provider for remote agents](https://github.com/google-gemini/gemini-cli/pull/26559): Enterprise-grade authentication implementation enabling Gemini CLI to connect to corporate self-hosted remote agents via standard OIDC flows, supporting secure Agent-to-Agent (A2A) communication.
3. [PR #26536 feat(core): add system-wide fallback for ripgrep detection](https://github.com/google-gemini/g

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-05-29
---
## 1. Today's Highlights
Three incremental patch releases rolled out in the last 24 hours, adding official support for Claude Opus 4.8 and resolving critical native crash, plan mode enforcement, and session resume persistence bugs. A sudden widespread regression causing duplicate function call ID 400 websocket errors post-v1.0.55 launch is the top active community pain point, with three parallel user reports confirming the bug breaks all tool-based workflows. Multiple high-demand enterprise governance and MCP integration feature requests also saw major new updates from maintainers yesterday.

## 2. Releases
All new versions published in the last 48 hours include the following key changes:
- **v1.0.56-0 (latest):** Improved trusted folder permission confirmation messaging to clarify session-level permission persistence rules; fixed context window tier selection to permanently persist across session events and survive SDK-only resume paths, ensuring tier-derived limits are correctly applied to request handling, compaction, and truncation logic.
- **v1.0.55-7:** Restricted the `exit_plan_mode` tool to only be offered to the model while a session is actively in plan mode, preventing unexpected unprompted mode exits; native binary crashes (including SIGSEGV errors) now fall back to the JavaScript runtime instead of silently terminating user sessions.
- **v1.0.55 (2026-05-28):** Added official support for Claude Opus 4.8; added Claude reasoning (thinking) token tracking in session usage summaries; restricted Free and Student plan users on token-based billing to Auto model selection with an explanatory notice in the model picker; fixed a bug that caused loading spinners to hang indefinitely.

## 3. Hot Issues
1. [Issue #223](https://github.com/github/copilot-cli/issues/223): "Copilot Requests" fine-grained token permission not visible for org-owned tokens (27 comments, 73 👍) – The top-voted open enterprise governance feature, which addresses admin requirements to ban individual user PATs for corporate automation use cases, received a new maintainer update after 7 months of community discussion.
2. [Issue #1274](https://github.com/github/copilot-cli/issues/1274): CLI returns persistent 400 invalid request body errors during code review diff operations (24 comments, 11 👍) – A high-impact bug blocking core code review workflows, with dozens of users sharing debug logs to help maintainers identify if the root cause is server-side validation or faulty CLI request crafting.
3. [Issue #1044](https://github.com/github/copilot-cli/issues/1044): Missing slash command support for `copilot --acp` (Agent Control Protocol) mode (15 comments) – This bug breaks ACP-compatible third-party editor integrations (including the Zed editor) that cannot access Copilot CLI core slash command functionality.
4. [Issue #3560](https://github.com/github/copilot-cli/issues/3560) (cluster of 3 linked issues): Widespread `Duplicate item found with id fc_call_*` 400 websocket errors after tool calls (10 combined comments, 8 👍) – A newly introduced post-v1.0.55 regression that breaks all tool-based workflows, with users confirming plain chat works as expected and failures only trigger immediately after the first tool response turn.
5. [Issue #39](https://github.com/github/copilot-cli/issues/39) (Closed): Request for VS Code MCP settings integration (7 comments, 17 👍) – The highly requested quality of life feature to eliminate duplicate MCP configuration for users running Copilot CLI inside VS Code projects was just marked closed, indicating support will ship in an upcoming release.
6. [Issue #3539](https://github.com/github/copilot-cli/issues/3539): System/Tools tokens consume 73% of the 200k context window on first user message with ~10 MCP servers configured (3 comments, 2 👍) – A high-impact bug for MCP power users that forces immediate auto-compaction on brand new sessions before any user input is sent.
7. [Issue #3527](https://github.com/github/copilot-cli/issues/3527) (Closed): `contextTier` setting in settings.json is persisted but not applied on session start (2 comments) – A recent regression that forced users to manually re-select their long-context window tier on every new session has been resolved in the latest v1.0.56-0 patch.
8. [Issue #3355](https://github.com/github/copilot-cli/issues/3355): Request to uncap Claude Opus 4.6 context window to its native 1M token capacity (2 comments, 2 👍) – A power user feature request that would remove the artificial 200k token cap and eliminate unnecessary auto-compaction during large codebase debugging sessions.
9. [Issue #2540](https://github.com/github/copilot-cli/issues/2540): Plugin-defined preToolUse hooks do not fire in main sessions or subagents (3 comments, 3 👍) – This bug blocks extension developers from implementing core custom pre-tool validation, security scanning, and logging functionality.
10. [Issue #3395](https://github.com/github/copilot-cli/issues/3395) (Closed): Copy functionality broken on Linux in v1.0.49 (3 comments) – A widely reported quality of life pain point for Linux desktop users has been resolved for upcoming builds.

## 4. Key PR Progress
There are no open, merged, or updated pull requests recorded for the `github/copilot-cli` repository in the last 24 hours. All active development changes are currently staged for the patch releases listed in the Releases section and resolved closed issues referenced above.

## 5. Feature Request Trends
The top 3 most requested feature directions from recent community discussion are:
1. **MCP ecosystem maturity:** Users are prioritizing support for temporary MCP server toggle controls in the `/mcp show` menu, automatic github-mcp-server enablement via config files, and full two-way sync with VS Code MCP settings to eliminate duplicate configuration.
2. **Context window configurability:** Power users are pushing for removal of the arbitrary 200k token cap on long-context models, alongside improvements to the `contextTier` setting to ensure custom large-context selections persist reliably across all session restarts.
3. **Enterprise governance:** Organizational fine-grained token permission controls for Copilot Requests are the highest-voted open feature, paired with requests for enforced org-level private MCP registry rules to block unapproved extension-installed MCP servers.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours include:
1. The new post-v1.0.55 duplicate tool call ID regression is breaking tool-based workflows for a large subset of users, with no official workaround currently published.
2. Users running 10+ MCP servers see 60-75% of their available context consumed by system prompts and tool definition tokens before they send their first message, triggering unwanted immediate auto-compaction.
3. Parallel Copilot CLI sessions are silently overwriting each other's persisted state, including pre-approved tool permissions and session event records, leading to lost access grants and broken session resume flows.
4. Recent model selection restrictions for Free and Student plan users have generated discussion around limited access to new high-capability models for non-paying token billing customers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-05-29
*Source: github.com/MoonshotAI/kimi-cli*

---

## 1. Today's Highlights
No new public stable releases shipped in the last 24 hours, but maintainers have staged the v1.46.0 release candidate and merged multiple high-priority fixes for Zed editor ACP integration bugs. Active community discussion is ongoing around the project's recent transition from legacy kimi-cli to the rebuilt Kimi Code codebase, with users reporting strong demand for backward compatibility with existing Codex and custom MCP workflows. Multiple critical long-standing reliability issues for terminal session hangs and orphaned connections have now been resolved via merged PRs.

## 2. Releases
No new public releases were published in the last 24 hours. The forthcoming v1.46.0 stable release is staged for final testing, and will include all recently merged ACP integration fixes, terminal reliability improvements, and new documentation redirects to the official Kimi Code product landing page.

## 3. Hot Issues (7 total, all high-priority)
| Issue | Status | Significance & Community Reaction | GitHub Link |
|---|---|---|---|
| #1894 Nested skill directory loading gap vs Codex | Open | 5 community comments, power users note this breaks portability of existing .agents skill folders between Codex and Kimi Code, creating unnecessary workflow friction | https://github.com/MoonshotAI/kimi-cli/issues/1894 |
| #2381 Community concern over legacy kimi-cli deprecation | Open | High user sentiment concern, long-time users flag that unannounced breaking changes to the codebase erode trust in the tool as a stable production productivity utility | https://github.com/MoonshotAI/kimi-cli/issues/2381 |
| #1984 Terminal hang on exit + MCP connection leak | Closed | Critical UX bug that affected users running multi-hour long sessions, required force-closing terminal windows to exit; now fully resolved after corresponding fix PR merged | https://github.com/MoonshotAI/kimi-cli/issues/1984 |
| #2394 Missing per-turn token usage reporting for ACP clients | Open | Blocks editor integration teams from implementing cost tracking, quota management, and usage billing for embedded Kimi Code deployments in third-party tools | https://github.com/MoonshotAI/kimi-cli/issues/2394 |
| #2127 Missing ACP `session/list`/`session/get` methods for Zed | Closed | Top blocking bug for Zed users, prevented restoring past chat history when restarting the editor, fully resolved now | https://github.com/MoonshotAI/kimi-cli/issues/2127 |
| #2385 Zed infinite loop on file search | Open | Critical blocking bug for Zed + Kimi Code users, makes core editor navigation functionality unusable for integrated agent workflows | https://github.com/MoonshotAI/kimi-cli/issues/2385 |
| #2384 Non-configurable httpx timeouts for large context requests | Open | WSL2 power users report consistent ConnectTimeout errors when working with codebases that exceed 120k input tokens, blocking large scale refactoring tasks | https://github.com/MoonshotAI/kimi-cli/issues/2384 |

## 4. Key PR Progress
| PR | Status | Details | GitHub Link |
|---|---|---|---|
| #1985 Fix TTY hang on exit + MCP leak | Closed | Implements non-blocking TTY read logic to avoid un-interruptible system calls on process exit, and explicitly cleans up all MCP connections during shutdown, fully resolving #1984 | https://github.com/MoonshotAI/kimi-cli/pull/1985 |
| #2132 ACP session history replay | Closed | Persists full wire event logs for ACP sessions and replays historical messages on load, resolving #2127 to enable full Zed chat history restoration | https://github.com/MoonshotAI/kimi-cli/pull/2132 |
| #2393 Update docs banner for rebuilt Kimi Code announcement | Closed | Syncs English/Chinese documentation site top banners to announce the new Kimi Code product, and redirects traffic to the new official project repository | https://github.com/MoonshotAI/kimi-cli/pull/2393 |
| #2391 Chore: Bump version to 1.46.0 | Open | Stages the next stable release, syncs all dependency versions and updates official release notes for the upcoming public launch | https://github.com/MoonshotAI/kimi-cli/pull/2391 |
| #2047 Load user `~/.kimi/mcp.json` config in ACP server | Open | Fixes a major gap for embedded editor workflows, letting Zed/ACP users access their full library of custom local MCP tools instead of only default built-in utilities | https://github.com/MoonshotAI/kimi-cli/pull/2047 |
| #2390 Update welcome tip links to kimi.com/code | Closed | Updates the shell welcome banner to point to the new official Kimi Code product landing page, and adds support for clickable formatted rich text links in terminal UI | https://github.com/MoonshotAI/kimi-cli/pull/2390 |
| #2369 Add API key pool for parallel subagent execution | Open | Implements a round-robin multi-key allocator to distribute LLM requests across multiple API keys, eliminating rate limit blocks for users running large batches of parallel subagent tasks | https://github.com/MoonshotAI/kimi-cli/pull/2369 |
| #2382 Auto-convert unsupported image formats to PNG in ReadMediaFile | Open | Adds transparent format conversion for non-supported image types (ICO, etc.) that Kimi's vision endpoints reject, eliminating manual preprocessing steps for users | https://github.com/MoonshotAI/kimi-cli/pull/2382 |
| #2383 Fix orphan tool_calls when replaying interrupted sessions | Open | Repairs corrupted persisted session state after unexpected OOM, process kill, or terminal close events mid-turn, preventing broken session loads | https://github.com/MoonshotAI/kimi-cli/pull/2383 |
| #2388 Persist pasted text placeholders across session restarts | Open | Fixes lost long pasted text after reloading historical sessions, by storing the full pasted text content alongside the in-memory placeholder references | https://github.com/MoonshotAI/kimi-cli/pull/2388 |

## 5. Feature Request Trends
The top 4 most requested feature directions from the community are:
1. Full Codex workflow parity for nested skill/agent directory loading to support seamless migration of existing open source agent packs
2. 100% compliance with the full ACP protocol specification to enable first-class, bug-free integration with Zed and other popular third-party code editors
3. Native per-step token usage reporting and observability hooks for self-hosted/enterprise embedded Kimi Code deployments
4. Native support for custom multi-API-key pools to bypass rate limits for large scale parallel subagent workloads

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users:
1. Unclear communication around the legacy kimi-cli to new Kimi Code transition, with users worried about breaking existing custom automation and workflow investments
2. Unresolved edge case bugs in ACP editor integrations that break core functionality like file search and session history restoration
3. Poor reliability for long-running sessions with >120k context tokens, including timeouts, hangs, and corrupted session state after unexpected process interruptions
4. Lack of user-facing configuration options for low-level network parameters (timeouts, proxy rules) that power users working in WSL/air-gapped/container environments require for custom deployments

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-05-29
Source: github.com/anomalyco/opencode

---

## 1. Today's Highlights
The v1.15.12 stable release rolls out with major ACP integration upgrades and experimental WebSocket transport support for OpenAI responses, marking a big performance improvement for streaming workloads. The top community discussion this 24h period centers on widespread user reports of intermittent multi-minute response delays for GPT family models, which has drawn over 100 comments from affected developers. Multiple high-priority PRs are also merged or in flight to resolve long-standing pain points around permission persistence, 100% CPU usage on desktop, and slow VCS diff loads for large repos.

## 2. Releases
### v1.15.12 (Latest 24h Release)
Core updates for this stable build include:
- ACP integrations now route prompts, slash commands, and usage updates through the new `acp-next` endpoint for improved reliability
- Added experimental WebSocket transport for OpenAI responses, enabled by setting the `OPENCODE_EXPERIMENTAL_WEBSOCKETS=true` environment variable
- Fixed partial rollout of adaptive reasoning controls for Anthropic models that was blocked in prior builds

## 3. Hot Issues (Top 10 Notable Entries)
1. **[#29079 GPT Models takes too long to respond](https://github.com/anomalyco/opencode/issues/29079)**: 102 comments, 48 👍. The highest-traffic open issue right now, documenting consistent random multi-minute response delays even for trivial prompt tasks (including for GPT 5.4 xhigh users). Hundreds of developers have confirmed they are affected, with no official root cause released yet.
2. **[#23887 OpenCode Go + Kimi K2.6/K2.5 returns 'Provider returned error' on CLI 1.14.20](https://github.com/anomalyco/opencode/issues/23887)**: 41 comments, 10 👍. All Kimi latest generation models are fully broken for paid OpenCode Go subscribers, while other Chinese model providers on the same subscription plan work without issues.
3. **[#6651 Dynamic model selection for subagents via Task tool](https://github.com/anomalyco/opencode/issues/6651)**: 36 comments, 46 👍. Extremely popular long-running feature request that would let primary agents assign different model variants to subagents based on task complexity, rather than forcing all subagents to use the same top-level model.
4. **[#28846 Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)**: 28 comments, 46 👍. Community members are asking for the paid OpenCode Go plan to immediately raise usage caps for DeepSeek V4 Pro to reflect the provider's recent massive price cut, to pass savings onto subscribers.
5. **[#27530 Error: 4 of 5 requests failed: config.providers: Unexpected server error](https://github.com/anomalyco/opencode/issues/27530)**: 19 comments, 10 👍. Widespread startup failure that prevents the OpenCode desktop app from launching entirely, with no actionable debug context included in the generic error message.
6. **[#29618 reasoning_content is missing when using DeepSeek V4 Flash in thinking mode](https://github.com/anomalyco/opencode/issues/29618)**: 11 comments, 3 👍. Users integrating DeepSeek via OpenRouter cannot use thinking/reasoning mode at all, as the OpenCode runtime fails to pass back required `reasoning_content` fields to the provider.
7. **[#11232 Feature Request: Native Scheduling for Opencode](https://github.com/anomalyco/opencode/issues/11232)**: 10 comments, 11 👍. Developers are requesting first-class cron support for recurring OpenCode skill runs, to eliminate the need for external OS-level cron/SystemD timer configuration that creates platform lock-in.
8. **[#7769 Support the desktop version of the git submodules](https://github.com/anomalyco/opencode/issues/7769)**: 7 comments, 12 👍. The desktop client cannot properly manage sessions for repos that use Git submodules, breaking enterprise developer workflows working on monorepos with nested dependencies.
9. **[#29571 Conversation permanently stuck after 'vision is not enabled' error from GitHub Copilot provider](https://github.com/anomalyco/opencode/issues/29571)**: 5 comments, 1 👍. Users on organization-managed GitHub Copilot plans that disable vision features can get their entire conversation flow permanently hung after triggering an image input accidentally, with no way to recover without restarting the app.
10. **[#20066 Make Allow always permission option persist across sessions](https://github.com/anomalyco/opencode/issues/20066)**: 5 comments, 6 👍. The "Allow always" permission prompt selection does not save to the local config file, forcing users to re-approve all tool permissions every time they restart OpenCode.

## 4. Key PR Progress
1. **[#29738 fix(opencode): update skill handling in context and permissions](https://github.com/anomalyco/opencode/issues/29738)**: Incoming fix that resolves the issue of hidden unpermitted skills still appearing in the UI, updating the `/skills` API endpoint to filter returned results strictly against user permissions. Closes two high-priority permission bugs.
2. **[#29666 fix(opencode): enforce storage path invariants](https://github.com/anomalyco/opencode/pull/29666)**: Implements a new PathStorage value object to validate all stored file paths, fixing the class of silent failures that lead OpenCode to accidentally overwrite or delete unrelated project files.
3. **[#29801 fix: de-flake compaction backoff-abort and openai ws-pool tests](https://github.com/anomalyco/opencode/pull/29801)**: Resolves race condition bugs in the new WebSocket pool implementation, eliminating test flakiness and fixing unexpected dropped connections for OpenAI streaming workloads.
4. **[#15110 fix(opencode): pass OAuth scopes to GoogleAuth for Vertex AI](https://github.com/anomalyco/opencode/pull/15110)**: Fixes the long-standing Vertex AI integration bug that returned an `invalid_scope` error for service account credentials.
5. **[#29025 fix(llm): preserve native provider options](https://github.com/anomalyco/opencode/pull/29025)**: Preserves native LLM reasoning continuation fields across request processing pipelines, resolving compatibility gaps for DeepSeek tool continuations and Anthropic reasoning mode controls.
6. **[#24829 fix(web): stop credential prompt loop with text/plain 401 + manifest credentials](https://github.com/anomalyco/opencode/pull/24829)**: Closed fix that eliminates the infinite flashing basic auth prompt loop when server password authentication is enabled.
7. **[#24740 fix(opencode): batch vcs git show calls](https://github.com/anomalyco/opencode/pull/24740)**: Closed performance improvement that batches all `git show` calls when loading diffs, cutting load times for large repos with dozens of changed files by over 80%.
8. **[#24728 feat: `opencode session move` / `session detached` CLI commands](https://github.com/anomalyco/opencode/pull/24728)**: Closed new feature that adds first-class CLI commands to move existing sessions between projects and detach orphaned sessions, solving long-running session management pain points.
9. **[#24720 fix(desktop): prevent 100% CPU usage caused by infinite reconnects and recursive directory traversals](https://github.com/anomalyco/opencode/pull/24720)**: Closed fix for the widely reported high CPU usage bug on Linux desktop builds, caused by unthrottled WebSocket reconnection loops and unoptimized folder scanning.
10. **[#24753 feat(tui): implement model and provider theme auto-selection](https://github.com/anomalyco/opencode/pull/24753)**: Closed quality of life feature that automatically switches the TUI theme color scheme to match the currently active model or provider, for better session context visibility.

## 5. Feature Request Trends
The top requested feature directions this 24h window are:
1. Granular subagent execution controls, including dynamic model assignment per task and parallel subagent dispatch to eliminate sequential execution bottlenecks
2. Native workflow automation tools including cron scheduling for recurring skill runs, plus a unified public marketplace for discovering plugins, agents, and pre-built skills
3. Desktop workflow quality of life upgrades, including native Git submodule support, an integrated embedded browser workspace, and permanent persistent permission rules
4. Provider pricing alignment for the OpenCode Go subscription plan, updating usage limits to match the recent 75% permanent price cut for DeepSeek V4 Pro.

## 6. Developer Pain Points
Recurring high-impact frustrations reported by the community:
1. Unpredictable intermittent multi-minute response delays for GPT family models, affecting even trivial non-complex prompts with no documented workarounds
2. Silent uninformative failures: writes/edits for files larger than ~6KB fail with no error context, generic "unexpected server error" messages on startup do not include actionable debug information
3. Broken permission system behavior: "Allow always" selections do not persist across restarts, and permission rules for skill visibility do not work as documented
4. Persistent model compatibility gaps, including missing `reasoning_content` field handling for DeepSeek, broken Kimi K2.5/K2.6 support on Go subscriptions, and hidden reasoning level selectors on the new V2 prompt input UI.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-05-29
*Source: github.com/badlogic/pi-mono*

---

## 1. Today's Highlights
Pi’s latest v0.77.0 release landed over the last 24 hours, adding native Claude Opus 4.8 support and a long-requested selective tool disablement flag for granular workflow customization. The highest-activity community issue remains a persistent openai-codex TUI hang that blocks interactive sessions, with 45+ developer comments troubleshooting root causes across recent builds. Multiple new community-contributed provider implementations for local and enterprise LLM endpoints, plus expanded RPC APIs for non-TUI remote clients, are advancing rapidly through the PR pipeline.

## 2. Releases
### v0.77.0
Two major new features are shipped in this latest stable release:
- Full metadata and adaptive thinking coverage support for Anthropic’s newly released Claude Opus 4.8
- New `--exclude-tools` / `-xt` CLI flag that disables specific built-in, extension, or custom tools without disabling the rest of the available tool set, for targeted permissioning in skill and restricted workflows.

## 3. Hot Issues
Top 10 most noteworthy community issues updated in the last 24h:
1. **[#4945 OpenAI Codex TUI hangs on "Working..." with zero-usage aborted turns](https://github.com/earendil-works/pi/issues/4945)**: 45 comments, 22 upvotes. The highest-activity open bug in the repo, this issue leaves interactive users stuck mid-turn with no recovery path outside manual escape, breaking core workflow for users on OpenAI’s codex model line.
2. **[#5089 timeoutMs not respected past a certain threshold](https://github.com/earendil-works/pi/issues/5089)**: 8 comments. Breaks usage of large local models (e.g. Qwen 3.6 27b running on CPU/underpowered hardware) that require extended runtime to process large inputs, leading to unintended mid-task timeouts.
3. **[#5148 Resuming ChatGPT 5.5 sessions after Claude Opus extended thinking returns 400 errors](https://github.com/earendil-works/pi/issues/5148)**: 4 comments, 6 upvotes. Cross-model session switching breaks long-running sessions due to duplicate message ID state mismatches between OpenAI and Anthropic payload formats.
4. **[#5101 NVIDIA NIM provider support proposal](https://github.com/earendil-works/pi/issues/5101)**: 5 comments. A community contributor is offering to build native support for NVIDIA’s OpenAI-compatible local LLM endpoints, using no proprietary upstream resources.
5. **[#5087 GPT-5.5 context window capped at 272K](https://github.com/earendil-works/pi/issues/5087)**: 4 comments. Pi’s hardcoded context limit for GPT-5.5 uses a 272K value, wasting ~75% of the model’s advertised 1.05M-token maximum capacity for long-context tasks.
6. **[#5103 Windows bash detector fails for non-default Git Bash paths](https://github.com/earendil-works/pi/issues/5103)**: 4 comments. The default path check for Git Bash on Windows only looks for C:\Program Files installs, breaking file system tooling for users who store Git on non-system drives.
7. **[#5117 Qwen 3.7 Max on OpenRouter returns invalid role errors](https://github.com/earendil-works/pi/issues/5117)**: 3 comments. Breaks users running Alibaba’s latest top open model via the popular OpenRouter aggregated provider, due to an unexpected non-standard `developer` message role returned in the payload.
8. **[#4955 Provider-hosted tools first-class support request](https://github.com/earendil-works/pi/issues/4955)**: 3 comments, 1 upvote. Requests native support for tools that run on the provider’s own infrastructure (e.g. OpenAI’s built-in browsing, Anthropic web search) instead of Pi’s local executor.
9. **[#5098 TUI inline images and arrow keys broken inside tmux](https://github.com/earendil-works/pi/issues/5098)**: 2 comments. Breaks workflow for the large subset of developers who run Pi inside a tmux multiplexer, even on modern terminals that support full image protocols.
10. **[#5136 /export help text incorrectly claims .md support is implemented](https://github.com/earendil-works/pi/issues/5136)**: 3 comments. UX mismatch that confuses users trying to export their sessions as shareable documentation, leading to unimplemented feature errors.

## 4. Key PR Progress
Top 10 high-impact pull requests updated in the last 24h:
1. **[#5139 Coding-agent empty file review diff root cause fix + v0.74.56 release](https://github.com/earendil-works/pi/pull/5139)**: Rewrites the internal Git GC logic to auto-protect all tree objects and referenced blobs, stopping unintended deletion of required diff data that caused empty file review renders during subagent operations.
2. **[#5140 Extension API additions for non-TUI remote clients](https://github.com/earendil-works/pi/pull/5140)**: Adds 6 new extension primitives including `ctx.executeInputLine()` to enable full-featured non-TUI Pi clients (mobile apps, web bridges, editor integrations) to drive the interactive workflow.
3. **[#4911 OpenAI Codex device code login flow](https://github.com/earendil-works/pi/pull/4911)**: Closes long-standing feature request #3424, enabling users to authenticate to Codex on headless machines that do not have access to a local browser.
4. **[#2527 GitHub Copilot runtime context window limit fix](https://github.com/earendil-works/pi/pull/2527)**: Removes the old incorrect hardcoded 1M context window override for Copilot models, instead pulling accurate 200K context limits at runtime to prevent unnecessary, workflow-breaking session compaction.
5. **[#5118 Fix reasoning_details buffering for out-of-order streaming responses](https://github.com/earendil-works/pi/pull/5118)**: Resolves missing encrypted thought signature issues on providers like OpenRouter that stream `reasoning_details` chunks before corresponding `tool_calls` are sent.
6. **[#3102 OSC 8 hyperlink wrapping for TUI markdown](https://github.com/earendil-works/pi/pull/3102)**: Renders all markdown links in the TUI as clickable terminal hyperlinks for supported terminals (Kitty, iTerm2, Ghostty, Windows Terminal) with no additional user configuration.
7. **[#5110 New Ant-ling provider support](https://github.com/earendil-works/pi/pull/5110)**: Adds native compatibility for Alibaba’s Ant Group Ling-2.6-1T, Ling-2.6-flash, and Ring-2.6-1T model series via a tailored OpenAI-compatible adapter.
8. **[#5029 Abort in-flight LLM calls on AgentSession.dispose()](https://github.com/earendil-works/pi/pull/5029)**: Eliminates orphaned running LLM requests and memory leaks when users rapidly switch sessions, fork conversations, or close the TUI mid-stream.
9. **[#4971 allowEmptySignature compatibility option for Anthropic providers](https://github.com/earendil-works/pi/pull/4971)**: Prevents 400 errors on third-party Anthropic-compatible providers that return empty thinking signatures, preserving valid prompt caching functionality.
10. **[#4651 Draft: Auto-download portable Git Bash on Windows](https://github.com/earendil-works/pi/pull/4651)**: Experimental feature to eliminate manual Git Bash setup friction for Windows users, currently gathering community feedback on the 350MB download size tradeoff for portability.

## 5. Feature Request Trends
The three dominant feature directions over the last 24 hours are:
1. **New LLM provider coverage**: Community contributions are flowing in for native support of popular local and enterprise endpoints including NVIDIA NIM, Anthropic on Vertex AI, and Alibaba’s Ant-ling model family, all designed to work without forcing proprietary dependencies into upstream Pi.
2. **Non-TUI remote API expansion**: Multiple linked issues and PRs are requesting expanded RPC and extension API surfaces to power external editor integrations (Zed/VS Code ACP bridges), web interfaces, and mobile Pi clients, decoupling the core Pi logic from its default TUI.
3. **Granular tool permissioning**: After the recent launch of `--exclude-tools`, follow-up requests call for extending this pattern to support per-skill, per-session, and per-user tool allow/block lists for restricted enterprise and educational workflows.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced in the last 24 hours:
1. **Cross-model session state incompatibilities**: Multiple related bugs around message ID duplication, invalid role payloads, and missing reasoning field handling break workflows that involve switching between Anthropic, OpenAI, DeepSeek, and other model families in a single continuous session.
2. **Outdated hardcoded context window metadata**: Incorrect static context limits for new models like GPT-5.5 and GitHub Copilot lead to unexpected silent session compaction, truncated outputs, and unnecessary wasted token capacity.
3. **Windows environment gaps**: Broken non-default Git Bash detection, unreadable ANSI colored installer output on legacy terminals, and missing portable runtime dependencies create far more setup friction for Windows users than macOS/Linux counterparts.
4. **Unhandled edge cases in the streaming pipeline**: Orphaned in-flight LLM calls, hanging TUI states on aborted zero-usage turns, and silent drops for out-of-order reasoning chunks break interactive reliability for high-volume production users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-05-29
---
## 1. Today's Highlights
The Qwen Code team published a new 20260528 nightly build alongside a concentrated batch of core UX and reliability patches. Major tracked roadmap work for the v0.16 production `qwen serve` Mode B daemon mode has hit a critical merge stage, while the widely requested Claude Code-style conversation compaction and zero-config Computer Use capabilities now have active PRs for final review. Several high-impact bugs affecting local LLM users and embedded IDE terminal workflows received confirmed fixes within the last 24 hours.

## 2. Releases
- **v0.16.1-nightly.20260528.34b7d472e** ([release page](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260528.34b7d472e)): This nightly build surfaces CLI startup warnings on stderr before TUI rendering to avoid hidden initialization errors, with accompanying VHS/tmux test evidence for the ongoing TUI spacing density optimization pass published for verification.

## 3. Hot Issues (10 Noteworthy Entries)
| Issue | Context & Impact | Community Reaction |
|-------|------------------|--------------------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | Public roadmap for `qwen serve` Mode B to reach v0.16 production readiness, detailing remaining refactoring, auth, and session multiplexing work | 41 active comments, the highest-traffic core project planning thread in the tracker |
| [#3004](https://github.com/QwenLM/qwen-code/issues/3004) | P1 priority request for API exponential backoff, model fallback retry, and auto token refresh to improve inference reliability | 2 comments, flagged as core reliability work for all production deployments |
| [#2128](https://github.com/QwenLM/qwen-code/issues/2128) | Unbounded memory growth bug in multi-hour sessions caused by untrimmed UI history arrays | 2 comments, widely reported by power users running Qwen Code for full workdays on large codebases |
| [#4597](https://github.com/QwenLM/qwen-code/issues/4597) | Request to upgrade the `/stats` command to support persistent cross-session usage tracking with a full interactive dashboard, aligned with Claude Code experience | 2 comments, 1 upvote, high user demand for transparent token cost reporting |
| [#4591](https://github.com/QwenLM/qwen-code/issues/4591) | Proposal for zero-config built-in Computer Use capability to let the model drive native desktop apps across all OSes | 1 comment, marked as a flagship new end-user feature |
| [#4592](https://github.com/QwenLM/qwen-code/issues/4592) | RFC to replace the existing 70%/30% split conversation compaction logic with a Claude Code-style full-history summary + restoration attachment model | 0 comments, no open blockers for implementation |
| [#4493](https://github.com/QwenLM/qwen-code/issues/4493) | Bug report for infinite redirect loop during OAuth login in JetBrains Rider, blocking access to Alibaba Cloud hosted model plans | 5 comments, affecting all JetBrains IDE users that use SSO authentication |
| [#4604](https://github.com/QwenLM/qwen-code/issues/4604) | Frequent hard "Body Timeout Error" for local LLM (Ollama/LM Studio) users that terminate requests after exactly 5 minutes, ignoring custom generation configs | 3 comments, one of the top recent pain points for self-hosted users |
| [#3728](https://github.com/QwenLM/qwen-code/issues/3728) | P1 request for a one-line OpenCode-style installer and platform-specific standalone executable to eliminate Node.js/npm dependency requirements | 1 comment, targeted at drastically reducing new user onboarding friction |
| [#4586](https://github.com/QwenLM/qwen-code/issues/4586) | UX bug in PyCharm embedded terminals where a single Ctrl+C press immediately exits the full Qwen Code agent instead of only interrupting the current generation | 1 comment, reported by many daily IDE workflow users |

## 4. Key PR Progress
| PR | Description |
|----|-------------|
| [#4605](https://github.com/QwenLM/qwen-code/pull/4605) | Fix that disables undici's default 300s body timeout for no-proxy Node.js paths, fully resolving the 5-minute inference failure bug for all local LLM backends |
| [#4595](https://github.com/QwenLM/qwen-code/pull/4595) | TUI optimization PR that tightens message and tool call spacing across the terminal interface to create a denser, easier-to-scan conversation layout |
| [#4590](https://github.com/QwenLM/qwen-code/pull/4590) | Adds zero-config built-in Computer Use support via the open-computer-use MCP, registering 9 native desktop interaction tools (click, type, scroll, etc.) with no user setup required |
| [#4599](https://github.com/QwenLM/qwen-code/pull/4599) | Implements the new Claude Code-style conversation compaction system that sends full curated history to the summary model and restores full context via attachments after compaction |
| [#4607](https://github.com/QwenLM/qwen-code/pull/4607) | Fixes the reported VSCode IDE `fetchFN` import error (issue #4589) by directly referencing the bundled undici fetch implementation for all proxy-aware IDE requests |
| [#3855](https://github.com/QwenLM/qwen-code/pull/3855) | Adds hardening for release asset signature verification and updates public documentation to point to the new standalone executable installer workflow |
| [#4603](https://github.com/QwenLM/qwen-code/pull/4603) | Adds a new `/delete` slash command to the web shell with batch session data deletion support, plus a corresponding batch delete endpoint on the daemon server |
| [#4596](https://github.com/QwenLM/qwen-code/pull/4596) | Updates the git file crawler to recurse fully into git submodules, so users working on monorepos with nested submodule dependencies no longer miss tracked code files |
| [#4598](https://github.com/QwenLM/qwen-code/pull/4598) | Makes TUI thinking output transient instead of persistent, adding configurable display modes (preview/loading) to reduce terminal clutter during long agent runs |
| [#4570](https://github.com/QwenLM/qwen-code/pull/4570) | Adds a new native `/triage` local skill that automatically runs AI-powered PR pre-checks and issue classification to streamline open source maintainer workflows |

## 5. Feature Request Trends
The top requested feature directions from recent community submissions are:
1. Production-grade `qwen serve` Mode B daemon capabilities, including non-blocking async prompt endpoints and full OpenTelemetry tracing for all session operations
2. TUI/UX modernization aligned with leading terminal AI assistants (Claude Code), including compact borderless layouts, smarter display of intermediate thinking outputs, and unified cross-platform branding
3. Zero-config first-class native desktop Computer Use integration that works out of the box across Windows/macOS/Linux
4. Core context performance upgrades, including smart Claude-style history compaction, bounded memory usage for unlimited long-running sessions, and exponential backoff/retry logic for all API calls
5. Low-friction onboarding via one-line install scripts and platform-native standalone executables that eliminate runtime dependency requirements

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. Local LLM compatibility gaps: hardcoded 5-minute timeouts that break long-running reasoning workloads, obscure DOMException errors when connecting to Ollama instances, and missing validation for local inference configs
2. Embedded IDE workflow breakages: unintended immediate exits from single Ctrl+C presses in PyCharm terminals, infinite OAuth redirect loops for JetBrains Rider users, and missing hotkeys to interrupt ongoing generations
3. Context management reliability issues: unbounded memory leaks in multi-hour sessions, false "compressed turn" errors when attempting to rewind mid-turn conversations, and unnecessary session ID resets when running the `/clear` command
4. Excessive setup friction: mandatory Node.js/npm runtime requirements with no option to use a lightweight standalone binary, creating barriers for new users on restricted corporate devices
5. Poor usage visibility: no persistent cross-session tracking for token consumption or tool call metrics, so users cannot aggregate long-term usage trends across their work sessions


</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-05-29
---
## 1. Today's Highlights
The 2026-05-29 digest captures high development velocity for the project, now mid-transition to its new official name *CodeWhale*, with multiple pending patches resolving long-standing non-Latin input bugs, shell execution security inconsistencies, and legacy rebranding assets. The high-engagement 191-comment Docker garbled text bug first filed two weeks prior was marked as closed, while core maintainers passed final review approvals for first-class third-party LLM provider support for SiliconFlow. Multiple quality-of-life patches targeting core TUI interaction gaps (leading slash escaping, statusline picker visibility) are prepped for imminent merge in the next minor v0.8.48 release.

## 2. Releases
No new public stable or pre-release versions were published in the 24-hour reporting window.

## 3. Hot Issues (Top 10 Notable Items)
All issues linked below reference the upstream repository at https://github.com/Hmbown/CodeWhale:
1. **#1615 [CLOSED] Docker launch full garbling bug** (191 comments): The highest-engagement recent issue, where users following official documentation still faced full TUI character corruption that forced hard reboots of their Linux servers, marked resolved after 2 weeks of community troubleshooting. Critical for reducing onboarding friction for new Docker-based users.
2. **#2247 [OPEN] Custom DeepSeek-compatible API provider support**: Highly requested by self-hosted LLM users, as current builds only support official DeepSeek endpoints, blocking usage of local fine-tuned DeepSeek variants and third-party hosted DeepSeek API services.
3. **#2323 [OPEN] Chinese IME compatibility breakage**: Impacts millions of Chinese users, causing unfiltered pinyin input leaks into command inputs and hidden placeholder text that does not disappear during composition.
4. **#2303 [OPEN] `allow_shell` security bypass flaw**: The documented default-`false` global shell restriction block only blocks `exec_shell` but not the unlisted `task_shell_start` tool, breaking user security expectations for restricted environments.
5. **#2327 [OPEN] Unofficial CodeWhale VS Code extension copyright risk**: Users spotted two unlicensed third-party extensions using the project's brand name on the VS Code Marketplace, raising risks of malware exposure and broken integration experiences for unsuspecting users.
6. **#2299 [OPEN] GLIBC 2.38 compatibility request**: The current build hard-depends on GLIBC 2.39, completely preventing users on widely used non-rolling distros including Debian Deepin from launching the TUI without manual system library upgrades.
7. **#2310 [OPEN] No leading slash escape mechanism**: All user inputs starting with `/` are unconditionally parsed as slash commands, making it impossible to send plain text messages referencing CLI paths or command syntax that start with a forward slash.
8. **#2309 [OPEN] Undiscovered statusline items hidden from picker**: The `/statusline` configuration picker only shows items already manually added to `~/.deepseek/config.toml`, preventing users from discovering all available status-line UI chips through the native TUI.
9. **#2328 [OPEN] exec_shell mode inconsistency**: The `exec_shell` tool works as documented in YOLO mode but returns a "not available" error in Agent mode, with no mention of this restriction in official documentation.
10. **#2321 [CLOSED] Config directory documentation alignment**: Updated outdated documentation that still referenced the legacy `~/.deepseek` folder, resolving confusion for new users on v0.8.47+ who have their config stored in the new official `~/.codewhale` directory.

## 4. Key PR Progress (Top 10 Important Changes)
All PRs linked below reference the upstream repository at https://github.com/Hmbown/CodeWhale:
1. **#2330 [OPEN] Fix TUI Chinese IME routing**: Resolves the bug where committed Chinese characters were incorrectly routed to the paste-burst buffer instead of the text composer, fixing input breakage on SSH, tmux, and Windows Terminal sessions without bracketed paste support.
2. **#2331 [OPEN] Eagerly load all exec_shell companion tools**: Fixes the mode inconsistency bug by adding 6 related shell tools (`exec_interact`, `task_shell_start` etc.) to the default active tool catalog, making them fully available in Agent mode as documented.
3. **#1868 [OPEN] First-class SiliconFlow provider support**: Adds the first major third-party LLM provider integration, with full support for SiliconFlow-hosted DeepSeek and other compatible models across CLI configuration, secrets management, TUI provider selection, and documentation.
4. **#2316 [OPEN] Allow plain text slash-space messages**: Resolves #2310 by updating the slash command classifier to only treat inputs starting with `/` followed immediately by a non-whitespace character as commands, enabling users to send messages like `/ hello` as normal plain text.
5. **#2324 [OPEN] Fix /statusline picker visibility**: Fixes clipped, invisible selected cursors for status items outside the current terminal viewport, while adding all undiscovered status chips to the picker for full UI discoverability.
6. **#2320 [OPEN] Localize right-click context menu**: Fixes the i18n gap where the TUI mouse right-click menu was hardcoded to English, fully respecting user-selected locales for Chinese, Japanese, and other non-English languages.
7. **#2319 [OPEN] Update terminal tab title to CodeWhale**: Completes one of the final project rebranding steps, replacing the legacy "DeepSeek TUI" terminal header title across all core UI components.
8. **#2306 [OPEN] Rename `/goal` to `/hunt` with trophy cards**: Major UX update for long-running task tracking, adding 4 clear task verdict states and persistent trophy cards to easily recover interrupted multi-session work.
9. **#1937 [OPEN] Make DeepSeek V4 Pro 75% discount permanent**: Updates the TUI's built-in cost estimator to remove the upcoming temporary discount expiry logic, matching DeepSeek's updated official permanent pricing for its flagship coding model.
10. **#2301 [OPEN] Fix legacy MCP SSE connections**: Adds compatibility fixes for older Model Context Protocol servers, correctly detecting `/sse` endpoints and supporting mixed string/numeric JSON-RPC request IDs used by most legacy MCP implementations.

## 5. Feature Request Trends
The top 3 highest-priority feature directions from the recent issue backlog are:
1. **Universal multi-provider, multi-model support**: Users are requesting full support for all OpenAI/DeepSeek compatible endpoints, plus automatic intelligent routing of tasks to appropriate dedicated models (vision, OCR, embedding, coding) instead of requiring manual mode swaps.
2. **Extensible custom workflow support**: Community demand is rising for expanded custom slash commands, configurable message submission hooks, and user-defined automation rules to fit project-specific workflows.
3. **Session branching and recovery**: Multiple users are requesting conversation forking support, persistent long-running session state, and improved resiliency for multi-hour Agent tasks that cannot be interrupted.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. **Tool and security system inconsistency**: Many documented tools do not behave the same across Agent/YOLO modes, and global security flags often do not apply to all related tooling, creating unexpected behavior for advanced power users.
2. **Rebranding-related onboarding friction**: Outdated references to the legacy DeepSeek TUI name and old `~/.deepseek` config directory across documentation, forums, and third-party tutorials create unnecessary confusion for new users.
3. **Legacy system compatibility gaps**: The hard GLI

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*