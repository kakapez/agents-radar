# AI CLI Tools Community Digest 2026-06-09

> Generated: 2026-06-08 23:12 UTC | Tools covered: 9

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

# Cross-Tool AI Agent CLI Comparison Report | 2026-06-09
For technical decision makers and developer teams evaluating AI coding assistant CLI solutions.

---

## 1. Ecosystem Overview
As of mid-2026, the AI code agent CLI space has reached a new level of maturity, with core baseline capabilities converging across all major vendors while teams compete to deliver differentiated security, enterprise compatibility, and seamless cross-tool workflow integration. The 24-hour observation window shows nearly all active projects prioritizing critical vulnerability patches (path traversal, SSRF, symlink tampering) after recent waves of public exploit reports for untrusted project configurations. The market splits clearly between big-tech backed closed-source tools optimized for out-of-the-box productivity, and independent open source projects built for maximum customizability and self-hosted use cases. Standardization around common extensibility frameworks including the Model Context Protocol (MCP) and Agent Client Protocol (ACP) is eliminating the need for teams to maintain duplicate custom integrations across multiple AI tools.

## 2. Activity Comparison
| Tool Name | Tracked Active Hot Issues (24h) | 24h Updated/ Merged PRs | New Releases Shipped | 24h Contribution Velocity |
|---|---|---|---|---|
| Claude Code (Anthropic) | 10 | 2 | 1 (v2.1.169 stable) | High |
| OpenAI Codex | 10 | 10 | 3 (2 stable/alpha) | Very High |
| Gemini CLI (Google) | 10 | 10 | 0 | High |
| GitHub Copilot CLI | 10 | 1 | 0 | Low-Medium |
| Kimi Code CLI (Moonshot) | 4 | 0 | 0 | Low |
| OpenCode (Anomaly) | 10 | 17 | 0 | Very High |
| Pi | 10 | 10 | 1 (v0.79.0 stable) | Very High |
| Qwen Code | 10 | 10 | 1 (nightly build) | Very High |
| CodeWhale (DeepSeek TUI) | 10 | 10 | 1 (full v0.8.54 rebrand) | Very High |

## 3. Shared Feature Directions
Multiple high-priority user requirements appear across 6+ tool communities:
1. **Native, no-workaround session management**: Requested by Codex, Copilot CLI, OpenCode, Pi, and CodeWhale. Users want explicit CLI commands to list, delete, export, and resume active sessions, eliminating the current requirement to manually edit hidden local JSON config files to manage workflow history.
2. **Universal security hardening**: Seen across 7/9 tracked tools, all teams are patching local execution vulnerabilities, adding explicit trust gating for untrusted project configuration files (CLAUDE.md, .codex/config.toml), and eliminating silent failure error states that waste developer debug time.
3. **Cross-product workflow parity**: Requested across almost all competing tools. Users migrating between platforms demand native import support for custom agents, MCP server configurations, and custom prompts to match Claude Code’s widely adopted extensibility model, eliminating duplicate setup work.
4. **Enterprise provider compatibility**: Prioritized by Codex, OpenCode, Pi, and Qwen Code, with common asks for native support for airgapped private networks, PAC/proxy rules, AWS Bedrock Mantle, Azure OpenAI, and self-hosted MCP registries for regulated industries.
5. **Context efficiency improvements**: Requested by 7 tools, including AST-aware code navigation, automatic non-intrusive memory compaction, KV cache reuse, and reduced token bloat to cut inference costs and prevent out-of-memory crashes for long multi-hour coding sessions.

## 4. Differentiation Analysis
The tools split into distinct strategic segments with clear user and technical alignment:
- **Big tech mainstream tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code)**: Prioritize first-party model optimization, zero-config onboarding, and native IDE sync for professional enterprise developers. They ship fewer breaking changes and focus on admin controls for team deployments, though Kimi Code is currently in a recovery phase after shipping two unannounced breaking changes in its v0.11 release that broke core user workflows.
- **Independent open source tools (OpenCode, Pi, Qwen Code, CodeWhale)**: Built for power users and self-hosted workflows, with native support for 10+ third-party model providers, custom backend routing, and fully configurable execution policies. Key differentiators include Pi’s Project Trust local security system, Qwen Code’s full ACP implementation for zero-adapter editor integration, and CodeWhale’s new WhaleFlow multi-agent orchestration framework.

## 5. Community Momentum & Maturity
- **Tier 1 (High maturity, large active user base)**: Claude Code and OpenAI Codex have the largest global developer install bases, stable core feature sets, and active engineering teams addressing hundreds of open issues per month. They are the default choice for most production enterprise AI agent deployments today.
- **Tier 2 (Rapid iteration, fast growing communities)**: OpenCode, Pi, Qwen Code, and CodeWhale are delivering 10+ merged PRs per day, rolling out long-requested features at a far faster pace than big tech counterparts, and attracting heavy adoption from power users who prioritize customizability over official vendor support.
- **Tier 3 (Mid maturity, steady iteration)**: Gemini CLI and GitHub Copilot CLI have large established user bases but slower release cadences, prioritizing stability and backwards compatibility over new feature development.
- **Tier 4 (Recovery phase)**: Kimi Code CLI has no active PR updates in the 24h window, and the team is focused on resolving widespread user confusion between its legacy Python and new TypeScript builds, with temporarily muted community engagement.

## 6. Trend Signals
1. The era of un-audited local agent execution is over: All active projects are prioritizing security hardening, so teams rolling out AI CLI tools at scale should prioritize validated stable builds with public vulnerability disclosures, rather than unvetted nightly pre-releases.
2. MCP and ACP are de facto open standards: Teams can now standardize on a single set of custom agents, MCP servers, and configuration files that work across every major AI CLI tool, eliminating redundant custom integration work.
3. Context efficiency is the next major competitive battleground: As core functionality matures, tools that deliver 70% lower token usage, no OOM crashes, and optimized local model support will capture market share from power developers sensitive to inference cost and workflow downtime.
4. Avoid tools with unannounced breaking change policies: Teams selecting AI CLI vendors should explicitly evaluate change notification policies to avoid widespread workflow disruptions similar to the Kimi v0.11 release that broke authentication and core file reference features with zero advance warning.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (As of 2026-06-09)
---
## 1. Top Skills Ranking
Below are the 6 highest-priority, most widely aligned active skill PRs sorted by recent update activity and alignment to top community pain points:
1.  **Agent-Creator Meta-Skill** [#1140](https://github.com/anthropics/skills/pull/1140)
    Functionality: Adds a reusable meta-skill for building task-specific custom agent sets, plus fixes for multi-tool parallel evaluation logic and native Windows support for the `recalc.py` utility. Status: Open. Ties to multiple unmet feature requests for no-code custom agent building from community users.
2.  **Fixed Feature-Dev Workflow Skill** [#363](https://github.com/anthropics/skills/pull/363)
    Functionality: Patches the widely used `feature-dev` skill to resolve a long-running TodoWrite overwrite bug that caused automated workflow cycles to skip quality review and final summary phases. Status: Open. Updated as recently as 2026-06-03, tied to multiple user bug reports for broken end-to-end development workflows.
3.  **Full ServiceNow Platform Skill** [#568](https://github.com/anthropics/skills/pull/568)
    Functionality: Comprehensive skill covering every major ServiceNow module including ITSM, SecOps, IT asset management, CSDM, and IntegrationHub, designed for enterprise admin and developer use cases. Status: Open.
4.  **Testing-Patterns Skill** [#723](https://github.com/anthropics/skills/pull/723)
    Functionality: End-to-end testing guidance spanning the full testing stack, from testing philosophy (Testing Trophy model) to unit testing, React component testing, and end-to-end test automation. Status: Open.
5.  **AURELION Cognitive Skill Suite** [#444](https://github.com/anthropics/skills/pull/444)
    Functionality: Four interconnected skills for professional use cases: structured thinking templates, persistent memory management, and automated knowledge organization for long-running complex tasks. Status: Open.
6.  **Masonry AI Media Generation Skill** [#335](https://github.com/anthropics/skills/pull/335)
    Functionality: Native integration for Masonry AI’s Imagen 3 (image) and Veo 3.1 (video) generation APIs, including job tracking, history management, and local download workflows. Status: Open.

---
## 2. Community Demand Trends
Drawn from top comment-sorted issues, the highest priority unmet community needs fall into 6 clear categories:
1.  **Organizational skill sharing**: The #1 most popular issue (13 comments, 7 upvotes) requests native shared team skill libraries for Claude. org, eliminating the current manual workflow of sharing `.skill` files via Slack/Teams and requiring individual user uploads.
2.  **100% cross-platform compatibility**: A large volume of bug reports focus on missing native Windows support for all core skill creation, validation, and evaluation tooling, plus requested native deployment support for AWS Bedrock.
3.  **Reliable skill evaluation tooling**: Multiple high-activity bug reports flag that the official `run_eval.py` test harness currently reports 0% skill trigger rate even for explicit slash command inputs, breaking the skill description optimization workflow for all new contributors.
4.  **Enterprise SaaS full-stack skills**: There is outsized demand for production-ready skills for widely used enterprise platforms including ServiceNow, SAP, and low-code automation tools like n8n.
5.  **Formal skill security guardrails**: The community has raised critical risks from unvetted community skills impersonating official `anthropic/` namespace entries, and requests for official skill signing, permission scoping, and tiering for verified vs third-party skills.
6.  **Simplified multi-file skill packaging**: Users are requesting native preloading of all reference documents bundled with a skill, rather than only delivering the root `SKILL.md` to the agent context.

---
## 3. High-Potential Pending Skills
These recently updated PRs directly resolve top community pain points and are highly likely to be merged imminently:
1.  Core document skill bugfix trio from contributor Lubrsy706: [#538](https://github.com/anthropics/skills/pull/538) (PDF skill case sensitivity reference fix), [#539](https://github.com/anthropics/skills/pull/539) (YAML validation for unquoted skill descriptions), [#541](https://github.com/anthropics/skills/pull/541) (DOCX tracked change ID collision fix) all resolve broken functionality in the official pre-bundled document handling skills.
2.  Windows compatibility fix chain: [#1050](https://github.com/anthropics/skills/pull/1050) (subprocess/encoding fixes for skill-creator) and [#1099](https://github.com/anthropics/skills/pull/1099) (run_eval.py Windows crash fix) fully resolve cross-platform gaps for Windows users, aligned with the recently proposed agent-creator skill's Windows support additions.
3.  [#509](https://github.com/anthropics/skills/pull/509) Official CONTRIBUTING.md addition: Fixes the repo's 25% GitHub community health score gap, and removes onboarding friction for new community contributors.
4.  [#486](https://github.com/anthropics/skills/pull/486) ODT Skill: Adds full native support for OpenDocument format read/write and template filling workflows for LibreOffice users, filling a longstanding gap between existing DOCX and PDF official skills.

---
## 4. Skills Ecosystem Insight
The Claude Code skills community’s most concentrated demand is for production-grade, cross-platform compatible skills that solve unmet enterprise workflow pain points, paired with robust, easy-to-use tooling that removes friction for creating, testing, sharing, and safely deploying custom skills across individual and organizational teams.

---

# Claude Code Community Digest | 2026-06-09
---
## 1. Today's Highlights
Today’s update is anchored by the newly released v2.1.169 build, which ships two long-requested workflow and debugging features for power users. The community reported 7 brand new untriaged bugs in the 24-hour window, including severe cost leak edge cases, auto-update daemon orphaning, and an unconfirmed potential prompt injection vulnerability tied to custom plugins. Two active public PRs focus on security hardening and better guardrails for CLAUDE.md configuration to reduce silent failures.

## 2. Releases
Only one new build shipped in the reporting window:
- **v2.1.169**: Adds two core features:
  1. `--safe-mode` CLI flag (paired with the `CLAUDE_CODE_SAFE_MODE` environment variable) to launch Claude Code with all user customizations (CLAUDE.md, plugins, skills, hooks, MCP servers) fully disabled for fast troubleshooting of broken sessions.
  2. `/cd` slash command that moves an active session to a new working directory without invalidating the existing prompt cache, eliminating redundant context reloads when switching projects mid-session.

## 3. Hot Issues (Top 10)
| Issue Link | Context & Community Impact |
|------------|-----------------------------|
| [#40450](https://github.com/anthropics/claude-code/issues/40450) | The highest-engagement recent bug: macOS desktop Code mode crashes immediately with exit code 1, while the same binary runs perfectly from native CLI. It was marked closed in the last 24 hours, with the fix shipped in v2.1.169. (15 comments, 6 👍) |
| [#61828](https://github.com/anthropics/claude-code/issues/61828) | Widespread false "Usage limit reached" error on Windows, with users seeing blocks at just 2% session usage and 32% weekly quota. Marked duplicate, pointing to a systemic cost-accounting bug across multiple clients. (12 comments, 4 👍) |
| [#66339](https://github.com/anthropics/claude-code/issues/66339) | New open high-severity bug: Unstoppable Claude Code web background agents continue running after users manually hit stop, burning 160k+ tokens over 21 hours against user intent with no visibility or cancellation controls. |
| [#33944](https://github.com/anthropics/claude-code/issues/33944) | Recently resolved bug where the system prompt’s "avoid `cd`" instruction made the model omit working directory prefixes on SSH remote commands, breaking all remote execution workflows for devs working on headless servers. (8 comments, 4 👍) |
| [#66359](https://github.com/anthropics/claude-code/issues/66359) | New open macOS security report: Users detected unattributable prompt injection instructions in their sessions immediately after installing third-party plugins, with no clear source to trace the malicious payload. |
| [#66358](https://github.com/anthropics/claude-code/issues/66358) | Post-auto-update edge case for the new v2.1.169 build on macOS: The agents daemon orphans old background workers after in-place upgrade, throwing an `EAUTH: attach rejected` control key mismatch error when users try to open the agents window mid-session. |
| [#57759](https://github.com/anthropics/claude-code/issues/57759) | Fixed regression that broke CJK IME input in the TUI: Number keys 1-9 used to select Chinese/Japanese/Korean IME candidates were intercepted by Claude Code shortcuts, making text entry impossible for non-Latin users. |
| [#57413](https://github.com/anthropics/claude-code/issues/57413) | Resolved Windows-specific bug: Orphaned `claude.exe` zombie processes held the global `.claude.json.lock` file, causing new Claude Code sessions to hang indefinitely on the loading animation. |
| [#66357](https://github.com/anthropics/claude-code/issues/66357) | New open VS Code bug (duplicate of #61828): Extension blocks usage even when `/usage` reports only 17% session usage and 1% weekly quota consumed. |
| [#57760](https://github.com/anthropics/claude-code/issues/57760) | Closed model behavior bug: Opus 4.7 ignored CLAUDE.md project instructions, forcing excessive token bloat and reducing output quality for long-running code projects. (3 comments, 4 👍) |

## 4. Key PR Progress
Only 2 public PRs were updated in the 24-hour reporting window:
1. [#26914 (Closed)](https://github.com/anthropics/claude-code/pull/26914): Documentation PR that adds validated CLAUDE.md rules frontmatter syntax examples and a new post-tool-use hook that detects invalid `paths:` configuration syntax, eliminating the common silent failure mode where misconfigured CLAUDE.md files are not applied with no user-facing error.
2. [#66171 (Open)](https://github.com/anthropics/claude-code/pull/66171): Security hardening PR addressing a symlink traversal vulnerability in `extensibility.py` that allowed untrusted project code to follow arbitrary symlinks outside the working directory. It includes full vulnerability analysis, reproduction guide, secure implementation, test coverage, and updated security best practices documentation.

## 5. Feature Request Trends
The most requested new capability directions from recent issues:
1. **Cross-device settings sync**: Top new community ask for syncing the full `~/.claude/` configuration (skills, plugins, MCP servers, customizations) across all user machines via their Anthropic account to eliminate duplicate setup work.
2. **Hot reloading for custom assets**: Users want auto-detection of newly created custom agents, skills, and plugin updates without requiring full session restarts that discard conversation context.
3. **UI/UX quality of life upgrades**: Requests for custom VS Code session tab naming, reorderable project sidebars, and slash command dropdown menu triggering anywhere in the prompt (not just at the first character).
4. **Extensibility expansions**: Asks to extend CLAUDE.md's `@include` markdown syntax to plugin SKILL.md files, and add path-scoped Unix socket support in the sandbox for local IPC workflows.

## 6. Developer Pain Points
Recurring high-frequency frustrations across recent issues:
1. **Cost accounting inaccuracies**: Multiple overlapping reports of false usage limit blocks, unkillable background agents burning unexpected tokens, and deceptive usage metric displays across web, desktop, and VS Code clients.
2. **In-place auto-update breakage**: Recent edge cases after auto-upgrades leave orphaned daemon processes, broken TUI input handling, and configuration loading failures that interrupt active workflows.
3. **Silent failure modes**: Invalid CLAUDE.md syntax, unexpected MCP memory resets, and misconfigured system prompts frequently return no visible user error, leading to hours of wasted debugging time.
4. **Platform-specific legacy gaps**: Windows-specific zombie process lock contention, macOS desktop Code mode startup crashes, and Chrome extension connectivity failures remain high-frequency unresolved issues.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-09
---
## 1. Today's Highlights
The new stable `rust-v0.138.0` release launched with native cross-platform thread handoff between Codex CLI and Desktop for macOS and Windows, eliminating manual workspace launch prompts on Windows. A widespread unplanned outage for gpt-5.5 model access is currently trending, with users across global regions reporting that local metadata marks the model as available while all API requests return a 404 "model not found" error. OpenAI engineering teams are actively landing native system PAC/proxy support for both desktop OSes, in parallel with shipping critical security hardening fixes for path traversal risks.
---
## 2. Releases
Three new Rust-based codex releases rolled out in the last 24 hours:
- **`rust-v0.138.0` (stable)**: Adds native `/app` CLI thread handoff that moves active sessions directly into Codex Desktop on macOS and native Windows, removes the manual workspace launch prompt for Windows users, and introduces partial support for local image attachments and standalone image generation.
- **`rust-v0.138.0-alpha.7` / `rust-v0.138.0-alpha.8`**: Pre-release builds for early validation of upcoming platform-specific fixes and new automation features.
---
## 3. Hot Issues (Top 10)
| Issue | Details |
|-------|---------|
| [#26892](https://github.com/openai/codex/issues/26892) | *75 comments, 27 👍*: Top trending cross-platform bug, where gpt-5.5 is listed as available locally but all requests fail with 404 for both Desktop and CLI. Users report gpt-5.4 works normally, indicating a model rollout metadata sync failure that is breaking production developer workflows across most regions. |
| [#25144](https://github.com/openai/codex/issues/25144) | *51 comments, 65 👍*: High-demand feature request to add a toggle disabling automatic conversion of long pasted prompts to attached `.txt` files. Users report the current auto-conversion breaks formatting for structured code snippets, config templates, and markdown system prompts. |
| [#8784](https://github.com/openai/codex/issues/8784) | *30 comments, 102 👍*: Long-standing top-upvoted feature request for a native `codex delete <session>` CLI/TUI command. Right now users have to manually navigate hidden local directories to remove unwanted sessions. |
| [#13018](https://github.com/openai/codex/issues/13018) | *24 comments, 103 👍, CLOSED*: Previously requested feature to add native thread delete functionality to Codex Desktop, now marked closed indicating the team will ship the capability in an upcoming release. Users no longer need to manually edit archived session JSON files to remove unwanted threads. |
| [#8758](https://github.com/openai/codex/issues/8758) | *23 comments, 55 👍, CLOSED*: Native image generation support from Codex, now resolved and aligned with the new v0.138.0 release's partial image feature. Developers building CLI tools and documentation will be able to generate README banners, UI mockups, and assets without leaving the Codex workflow. |
| [#24675](https://github.com/openai/codex/issues/24675) | *21 comments, 16 👍*: Bug where Codex Desktop keeps stale third-party connector links after 401 reauth errors, even after restarting the app or removing/re-adding the plugin. Users are forced to manually clear the hidden Codex app cache to restore functionality for tools like Linear. |
| [#21128](https://github.com/openai/codex/issues/26892) | *21 comments, 16 👍*: Critical usability bug that silently hides project conversations that fall outside the global "recent 50" conversation window, breaking long-running developer projects that are not accessed frequently and erasing expected working memory for users. |
| [#22185](https://github.com/openai/codex/issues/22185) | *11 comments, 7 👍*: Common WSL2 workflow bug for Windows users, where the unified execution engine incorrectly tries to launch `/bin/bash` directly on the Windows host instead of routing to the WSL workspace, throwing an ENOENT failure. |
| [#21753](https://github.com/openai/codex/issues/21753) | *11 comments, 15 👍*: Umbrella tracker to bring Codex event hooks to full parity with Claude Code, with 29+ planned lifecycle hooks for custom automation pipelines. Power users building self-hosted workflows currently rely on third-party wrappers to implement custom triggers. |
| [#27021](https://github.com/openai/codex/issues/27021) | *5 comments, 1 👍*: Independent macOS report of the same gpt-5.5 404 outage, confirming the bug is not platform-specific and affecting users across multiple account tiers (ChatGPT Plus, Pro). |
---
## 4. Key PR Progress (Top 10)
| PR | Details |
|----|---------|
| [#26706](https://github.com/openai/codex/pull/26706) | Adds the opt-in feature config surface for native system PAC/proxy support, no functionality is enabled yet so the team can safely roll out and validate cross-platform proxy resolution for restricted enterprise networks. |
| [#26709](https://github.com/openai/codex/pull/26709) | Adds the native macOS system proxy resolver, using the platform's SystemConfiguration and CFNetwork APIs to pull OS-level proxy/PAC/WPAD rules for all Codex auth and network calls. |
| [#26708](https://github.com/openai/codex/pull/26708) | Adds the native Windows system proxy resolver, using WinHTTP APIs to fetch OS-defined proxy routing for specific auth URLs, matching the full Windows system network behavior. |
| [#27039](https://github.com/openai/codex/pull/27039) | Implements detached async command hooks, allowing custom configured hooks to run in non-blocking mode outside the main agent execution flow without delaying user turn times. |
| [#27017](https://github.com/openai/codex/pull/27017) | Critical security fix that closes a gap where Windows `deny_read` file permission restrictions were not enforced for shell execution paths, preventing unauthorized access to restricted local files. |
| [#25956](https://github.com/openai/codex/pull/25956) | Hardens the `--output-last-message` CLI flag to reject all symlinked paths, blocking path traversal attacks that could exploit symlinks to write content to arbitrary locations on the host system. |
| [#15730](https://github.com/openai/codex/pull/15730) | Adds symlink protection for project-level `.codex/config.toml` files, rejecting symlinked config loads and writes to prevent tampering in shared developer and CI environments. |
| [#27062](https://github.com/openai/codex/pull/27062) | Implements automatic retries for transient failures in the Guardian auto-review system for permission prompts, reducing unnecessary manual approval interruptions for end users. |
| [#27086](https://github.com/openai/codex/pull/27086) | Adds a yield floor for the Windows unified execution engine, fixing a 20.7% regression in per-turn tool call counts that degraded performance for all Windows workspace users. |
| [#27081](https://github.com/openai/codex/pull/27081, CLOSED) | Adds editor and pager environment reporting to the `codex doctor` diagnostic utility, giving support teams faster visibility into CLI environment misconfigurations that cause edge case bugs. |
---
## 5. Feature Request Trends
The most requested user feature directions for the last 24 hours are:
1. Full native session/thread management controls: Native delete functionality for CLI, TUI, and Desktop, replacing the current workaround of manually editing hidden local session files.
2. Complete media workflow support: Full standalone image generation and local image attachment handling, partially shipping in the latest v0.138.0 release.
3. Power user automation parity: Full Claude Code equivalent event hook system to support custom CI/CD, workflow, and alert automation without third-party wrapper tools.
4. Modular instruction support: An `@include` directive for composable `AGENTS.md` files, so engineering teams can share reusable shared instruction libraries instead of maintaining monolithic single-file configurations.
---
## 6. Developer Pain Points
Recurring high-impact frustrations reported across issues:
1. Global regional gpt-5.5 404 outages affecting North America, Brazil, and multiple other zones across all client types, breaking production dev workflows with no public status update from the OpenAI team as of press time.
2. Persistent platform-specific execution bugs including WSL2 path resolution failures, inconsistent permission enforcement on Windows, and stale cached auth tokens that require manual cache clears to resolve.
3. Unintended hidden data loss risks, where long-running project conversations are silently removed from the Desktop UI when they fall outside the 50-recent window, with no built-in discoverability tools.
4. Unwanted automatic formatting breaks from the default behavior that converts long pasted structured prompts, code snippets, and config templates to attached `.txt` files.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-09
Repository: github.com/google-gemini/gemini-cli

---
## 1. Today's Highlights
No new official releases were published in the 24-hour observation window. The highest-priority updates of the day are two critical SSRF hardening patches for the built-in web-fetch tool, alongside a fix that eliminates the common 10-attempt retry loop hang for users that hit zero quota limits on free-tier accounts. Maintainers also triaged 30 high-impact open issues, prioritizing the widely reported generalist agent hang bug that has 8 community upvotes.

## 2. Releases
No new stable or pre-release versions of the Gemini CLI were released between 2026-06-08 and 2026-06-09.

## 3. Hot Issues (Top 10 Notable)
| Issue | Summary & Community Context |
|-------|------------------------------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | *Generalist agent hangs*: The most upvoted open user bug (8 👍, 7 comments), users report the agent freezes indefinitely even for trivial tasks like folder creation. The current user workaround is to explicitly instruct the model not to defer to sub-agents, significantly breaking default workflows. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | *Robust component level evaluations*: Core engineering epic (7 comments) to scale the existing behavioral eval framework that already runs 76 tests across 6 supported Gemini models, to improve granular component reliability tracking. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | *Assess impact of AST-aware file reads, search, and mapping*: Roadmap epic (7 comments, 1 👍) investigating AST-powered tools to reduce unnecessary tool turns, cut token noise from unaligned file reads, and improve codebase navigation efficiency for code use cases. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | *Subagent MAX_TURNS reported as GOAL success hiding interruption*: High-impact bug (6 comments, 2 👍) where subagents incorrectly report full success after hitting maximum turn limits, leaving users with false confidence that their investigation or task completed fully. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | *Shell command execution gets stuck with "Waiting input" after command completes*: Common UX break (4 comments, 3 👍) where finished non-interactive shell commands incorrectly remain marked as active and await user input, forcing users to manually cancel the task. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | *Add deterministic redaction and reduce Auto Memory logging*: Critical security bug (5 comments) where user secrets are sent to model context before the Auto Memory feature runs redaction, putting sensitive user data at accidental risk of being logged. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | *Stop Auto Memory from retrying low-signal sessions indefinitely*: Performance bug (5 comments) where background Auto Memory processes waste CPU endlessly re-processing sessions the agent already determined have no useful signal to extract. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | *Gemini does not use skills and sub-agents enough*: Power user pain point (6 comments) where users report the CLI will never invoke their custom-defined skills or sub-agents automatically, even for highly relevant tasks, and requires explicit manual prompting to activate them. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | *Browser subagent fails in Wayland*: Platform compatibility bug (4 comments, 1 👍) that breaks the browser agent for all Linux users running the common Wayland display server, preventing web automation workflows on modern Linux desktop environments. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | *Agent should stop/discourage destructive behavior*: Community requested safety improvement (2 comments, 1 👍) where the model often defaults to dangerous operations like `git reset --force` even when safer non-destructive alternatives are available, raising risk of unintended data loss. |

## 4. Key PR Progress (Top 10)
| PR | Description |
|----|-------------|
| [#27744](https://github.com/google-gemini/gemini-cli/pull/27744) | Security fix that adds DNS resolution to the web-fetch SSRF guard, blocking bypasses that use wildcard DNS services (e.g. `127.0.0.1.nip.io`) to redirect requests to private internal IP addresses. |
| [#27739](https://github.com/google-gemini/gemini-cli/pull/27739) | Complementary SSRF hardening for web-fetch that blocks access to private IPs via redirects, closing all known gaps in the existing private host protection logic. |
| [#27698](https://github.com/google-gemini/gemini-cli/pull/27698) | Critical user-facing fix that adds fail-fast behavior for zero-quota limits, preventing the CLI from being trapped in a futile 10-attempt retry loop that hangs the session for minutes for free-tier users. |
| [#27747](https://github.com/google-gemini/gemini-cli/pull/27747) | Edge case bug fix that stops infinite ghost text wrapping loops, preventing full CLI freezes when the terminal window is narrower than 2 columns and displaying wide characters like emojis during `@filename:line` completions. |
| [#27619](https://github.com/google-gemini/gemini-cli/pull/27619) | Implements atomic updates for MCP tool discovery, retaining the last working set of registered MCP tools during transient network failures to eliminate frequent "tool not found" errors for third-party integrations. |
| [#27749](https://github.com/google-gemini/gemini-cli/pull/27749) | Refactors Vertex AI model mapping logic to use shared constants instead of hardcoded values, improving configuration consistency and reducing future model mapping mismatch bugs. |
| [#27428](https://github.com/google-gemini/gemini-cli/pull/27428) | Fixes sandbox Docker image detection by switching from stdout parsing to using `docker inspect` exit codes, resolving false negative image missing errors for users with DOCKER_BUILDKIT enabled. |
| [#27412](https://github.com/google-gemini/gemini-cli/pull/27412) | Prevents model hallucination when `read_file` returns binary content (e.g. PDFs, executables) by injecting an explicit status message that stops the model from attempting to analyze unreadable binary data. |
| [#27746](https://github.com/google-gemini/gemini-cli/pull/27746) | Removes "experimental" labeling from the browser agent documentation, marking the feature as stable for general production use. |
| [#27743](https://github.com/google-gemini/gemini-cli/pull/27743) | Adds a 7-day cooldown period for npm dependency updates in Dependabot, reducing noisy CI runs and unexpected breaking changes from unvetted automated dependency upgrades. |

## 5. Feature Request Trends
The highest-demand feature directions across open issues are:
1. **AST-aware codebase intelligence**: A multi-part roadmap effort to ship AST-powered file reads, AST grep search, and full syntax-aware codebase mapping that reduces token bloat and unnecessary tool turns for code engineering workflows.
2. **Auto Memory system overhauls**: Prioritized security and reliability improvements for the background context extraction feature, including deterministic secret redaction, infinite retry blocking, and invalid memory patch quarantine.
3. **Custom agent/skill resilience**: Enhancements to make the model automatically detect and use user-defined custom skills and sub-agents without explicit manual prompting, alongside better permission controls for subagent execution.
4. **Cross-machine session portability**: Ongoing work to support the `/teleport` command that lets users move active full Gemini CLI engineering sessions between local laptops, remote servers, and other devices.

## 6. Developer Pain Points
The most frequently reported recurring user frustrations are:
1. Unpredictable agent hangs, including generalist agent freezes, post-execution shell command hangs, and multi-minute retry loop hangs from zero-quota limits that leave users waiting for no actionable result.
2. Broken custom agent/skill workflows: Users investing time to build custom subagents and skills report the model ignores them by default, symlinked agent files are not recognized, and subagents run unexpectedly without user permission after the v0.33.0 release.
3. Trust gaps with the Auto Memory feature, with community concern that secrets are exposed in model context before redaction, and background processes waste system resources on unproductive retries.
4. Platform-specific edge case breakage, including browser agent failures on Wayland Linux, flicker during terminal resize, and terminal buffer corruption after exiting external editors.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-09
Source: github.com/github/copilot-cli

---

## 1. Today's Highlights
This digest covers activity from the last 24 hours, with no new official stable releases, 33 updated open issues, and one merged critical installation workflow improvement. Multiple high-impact bug reports for Windows platform stability, MCP registry functionality, and post-quota model access received new community engagement, while a longstanding top-voted Vim input mode feature request continues to gain traction from power users. A closed pull request adds native `GITHUB_TOKEN` support to the public install script to resolve frequent rate limit blocks for CI/CD and enterprise airgapped deployments.

## 2. Releases
No new Copilot CLI versions were published in the 24-hour tracking window.

## 3. Hot Issues
1. **Vim/Vi input mode for interactive CLI prompts** ([#13](https://github.com/github/copilot-cli/issues/13)): The highest-upvoted open feature request in the repo (63 👍, 7 comments) addresses missing modal keyboard navigation for Vim power users, who currently cannot edit their prompts efficiently without mouse or basic arrow key inputs.
2. **gpt-5.5 background sub-agent indefinite hang at total_turns=0** ([#3547](https://github.com/github/copilot-cli/issues/3547)): A critical new bug affecting users testing GitHub's latest GPT model for multi-agent automation workflows, breaking unattended background task runs entirely after successful agent dispatch.
3. **Custom MCP registry search constructs missing /v0.1/ path segment** ([#3436](https://github.com/github/copilot-cli/issues/3436)): Breaks all org-level self-hosted MCP deployments, generating 404 errors for enterprise users that cannot use public MCP registries.
4. **40-80 second Copilot Chat startup delay on WSL** ([#3652](https://github.com/github/copilot-cli/issues/3652)): A top usability pain point for Windows + WSL developers, caused by a slow `listSessions` call in the CopilotCLIChatSessionContentProvider, making the CLI nearly unresponsive on launch.
5. **Closed runaway MCP server spawning bug on Windows multi-workspace VS Code** ([#3701](https://github.com/github/copilot-cli/issues/3701)): Resolved recently, this bug caused hundreds of orphaned MCP processes to spawn from an IDE lock-file watcher re-init loop, causing 100% CPU and memory leaks for users with multiple open VS Code workspaces.
6. **1.0.60 function call regression for MoonShot-flavored JSON schemas** ([#3716](https://github.com/github/copilot-cli/issues/3716)): A fresh breaking regression in the latest stable release that completely blocks tool usage for all users running non-GitHub, MoonShot-compatible model providers via BYOK mode.
7. **Allow switching between BYOK/local and GitHub-hosted models mid-session** ([#3709](https://github.com/github/copilot-cli/issues/3709)): A high-priority quality of life request for self-hosted model users, who are currently locked to a single model per session when using custom BYOK providers.
8. **Claude Opus 4.6 (high) returns "model not supported" post-quota reset for Pro+ users** ([#2867](https://github.com/github/copilot-cli/issues/2867)): A broken user flow for paid Copilot Pro+ subscribers, where users who wait out their quota limit as instructed are blocked from accessing the model entirely after the reset window ends.
9. **Official install script incorrectly flags FreeBSD as Windows** ([#3710](https://github.com/github/copilot-cli/issues/3710)): Blocks native installation for BSD power users, with the public curl-to-bash installer incorrectly searching for WinGet on BSD systems and failing immediately.
10. **First-class tools to manage multiple concurrent CLI sessions** ([#2966](https://github.com/github/copilot-cli/issues/2966)): A requested feature for autopilot power users who run 10+ background `--yolo` sessions across separate repos and branches, who have no native CLI controls to list, resume, or terminate sessions today.

## 4. Key PR Progress
Only one pull request received updates in the 24-hour tracking window:
1. **Add GITHUB_TOKEN support to the install script** ([#1960](https://github.com/github/copilot-cli/pull/1960)): This merged improvement passes a user-provided `GITHUB_TOKEN` as an authorization header for all GitHub API calls, package downloads, and git remote operations, eliminating public GitHub rate limit blocks for high-traffic CI/CD environments, and enabling installation from private, airgapped enterprise Copilot CLI mirrors. No other public PRs received new commits, reviews, or merges in the reporting window.

## 5. Feature Request Trends
The highest-volume requested feature directions from the recent issue backlog are:
1. Terminal UX power user enhancements: Native Vim modal input mode, keyboard shortcuts to stash half-written prompts to history, and consistent interaction patterns across all CLI prompts.
2. Expanded model flexibility: Full BYOK/local model support in the `/model` picker, native in-session model switching, support for low-cost open-weight models, and expanded higher-tier Claude model access for free plan users.
3. Enterprise customization parity: Full enforcement of agent-level tool whitelists, expanded plugin hook functionality (including the ability to modify user prompts before they are sent to models), and mTLS support for OpenTelemetry exporters.
4. Native session orchestration: First-class CLI tools to manage, track, and resume multiple parallel background autopilot sessions.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. Windows platform edge cases: A wave of recent unaddressed bugs including massive WSL startup delays, broken uninstall flows, a broken copy-on-select Windows Terminal integration, inconsistent path handling for home directory `~` references, and the recently fixed runaway MCP process leak.
2. Version-specific regressions: The 1.0.60 stable release introduced a critical function call parsing bug that breaks tool usage for all non-GitHub BYOK providers.
3. Enterprise deployment gaps: Broken custom MCP registry URL generation, ignored `--available-tools`/`--excluded-tools` flags in ACP mode, and missing mTLS support for self-hosted OTel endpoints.
4. Inconsistent interactive UX: Mixed arrow-key vs numeric input patterns across the `/model` selection flow, broken multi-line text rendering for long user inputs, and missing common keyboard shortcuts that power users expect from standard terminal tools.
5. Platform detection gaps: The official public install script fails for niche operating systems including FreeBSD, with no native package available for BSD distributions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-09
Repository: github.com/MoonshotAI/kimi-cli
---

## 1. Today's Highlights
No new official releases or merged pull requests landed in the 24-hour tracking window, as the MoonshotAI engineering team appears to prioritize addressing post-upgrade user pain points following the recent v0.11.0 version rollout. A long-running documentation maintenance issue was formally closed to deploy deprecation banners for legacy Python-based `kimi-cli` docs, reducing widespread user confusion between the deprecated legacy tool and the actively maintained TypeScript rewrite of Kimi Code CLI. Three new critical bug reports from cross-platform users surfaced in the window, all reporting broken core functionality that interrupts established developer workflows.

## 2. Releases
No new official Kimi Code CLI releases were published in the past 24 hours.

## 3. Hot Issues
Only 4 qualifying issues were updated in the 24-hour window, all are featured below:
1. [Closed] #2376: [Docs] Add deprecation banner on GitHub Pages redirecting users to the TypeScript rewrite of Kimi Code CLI
   - Why it matters: Eliminates a major source of user confusion by alerting visitors to legacy `kimi-cli` docs that the Python-based original tool is no longer maintained, cutting down on mismatched version troubleshooting and avoidable support tickets.
   - Link: https://github.com/MoonshotAI/kimi-cli/issues/2376
2. [Open] #2442: Broken workflow regression (v0.11.0, MacOS) where API key authentication was silently removed
   - Why it matters: This unannounced breaking change breaks all pre-existing authenticated integrations set up by developers for Kimi Code CLI, with no migration path or advance notice shared before the update went live.
   - Link: https://github.com/MoonshotAI/kimi-cli/issues/2442
3. [Open] #2441: v0.11.0 dropped support for the widely used `@filename` inline local file reference syntax
   - Why it matters: The `@filename` shorthand is a core power-user feature that lets developers inject local code and config file content into prompts without manual copy-paste, so its removal disrupts daily prompt workflows for a large portion of the active user base.
   - Link: https://github.com/MoonshotAI/kimi-cli/issues/2441
4. [Open] #2436: Installation failure for v1.47.0 legacy Python build
   - Why it matters: The bug blocks first-time onboarding for new users who accidentally attempt to install the legacy unmaintained `kimi-cli` version.
   - Link: https://github.com/MoonshotAI/kimi-cli/issues/2436

## 4. Key PR Progress
No open or merged pull requests received any updates in the 24-hour tracking window. No new feature work, bug fixes, or dependency changes were landed via PR during this period.

## 5. Feature Request Trends
From all tracked issues in the window, the top requested feature directions are:
1. Full, clearly signposted migration guidance for users moving from the legacy Python `kimi-cli` to the new TypeScript-based Kimi Code CLI rewrite
2. Formal pre-release change notification workflows that alert users 1-2 release cycles in advance before removing or modifying core existing functionality
3. Consolidated version numbering and unified documentation for the entire Kimi Code CLI product line to eliminate confusion between parallel legacy and new product builds

## 6. Developer Pain Points
The top recurring user frustrations surfaced in the latest window:
1. Unannounced breaking changes in the recent v0.11.0 release that removed two core workflow features (API key authentication, `@filename` reference syntax) with zero advance notice
2. Severe version confusion between the legacy v1.47.x Python CLI and the new v0.11.x TypeScript CLI that leads users to download mismatched builds and hit hard installation failures
3. Lack of basic pre-release validation for high-impact core features that results in production regressions immediately after public version bumps

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-09
---
## 1. Today's Highlights
No official new releases shipped in the last 24 hours for the OpenCode repository, but maintainers merged 17 closed pull requests and resolved 12 long-outstanding bug and feature requests dating back months. Top priority work included a critical fix for AWS Bedrock Mantle OpenAI Responses API signature mismatches, while the most active community discussion centered on a proposed native `/goal` command for persistent session goal tracking, which has earned 63 upvotes and 36 comments to date. Several high-impact regressions introduced in the recent 1.15.11 and 1.16.x releases are also seeing targeted fixes from both maintainers and external contributors.

## 2. Releases
No new official releases were published in the last 24 hours on the `anomalyco/opencode` repository.

## 3. Hot Issues
1. **#27167 Add native session goals with /goal** (36 comments, 63 👍) | [Link](https://github.com/anomalyco/opencode/issues/27167)
   The highest-engagement open feature request, this proposal would fill a major workflow gap for developers by adding a native persistent task tracking system for sessions, removing the need for manual external notes to keep agent work aligned with top-level project goals.
2. **#20995 Gemma 4 (e4b) tool calling fails via Ollama OpenAI-compatible API** (28 comments, 47 👍) | [Link](https://github.com/anomalyco/opencode/issues/20995)
   A high-impact bug blocking local LLM users from running the popular new Google Gemma 4 model for tool use workloads, even though the model itself returns correctly formatted tool call payloads.
3. **#29548 OpenAI provider headers timeout after 10000ms on 1.15.11** (11 comments) | [Link](https://github.com/anomalyco/opencode/issues/29548)
   A widespread regression introduced in the recent 1.15.11 Homebrew release, that breaks default OpenAI provider connections on higher latency networks, requiring manual `headerTimeout` tuning to unblock.
4. **#9387 `opencode session export` to markdown or json** (11 comments, 8 👍) | [Link](https://github.com/anomalyco/opencode/issues/9387)
   A long-requested CLI feature that would enable easy sharing of session context, audit trails, and generated work output without manual copy-pasting of chat history.
5. **#30948 amazon-bedrock provider returns empty output against Bedrock-compatible gateway in 1.16.0** (8 comments, 4 👍) | [Link](https://github.com/anomalyco/opencode/issues/30948)
   Now resolved, this bug broke custom self-hosted Bedrock-compatible gateway deployments used by thousands of enterprise OpenCode users after upgrading to 1.16.0.
6. **#15161 Noisy "unknown format google-duration" warnings from Firebase MCP tool schemas** (5 comments, 12 👍) | [Link](https://github.com/anomalyco/opencode/issues/15161)
   A persistent UI clutter bug that prints hundreds of irrelevant validation warnings on startup for users of the official Firebase MCP integration, obscuring agent output and actionable errors.
7. **#31204 `session_message.seq` NOT NULL constraint failed on agent-switched sessions** (4 comments, 2 👍) | [Link](https://github.com/anomalyco/opencode/issues/31204)
   A critical 1.16.x SQLite regression that crashes active sessions mid-execution every time an automatic agent switch is triggered, breaking multi-agent workflows entirely.
8. **#31349 API requests to Bedrock Mantle's OpenAI Responses API endpoint fail because of a signature mismatch** (5 comments) | [Link](https://github.com/anomalyco/opencode/issues/31349)
   Now resolved, this bug broke AWS SigV4 authenticated access to new GPT 5.5/5.4 models hosted on AWS Bedrock Mantle for security-compliant enterprise users.
9. **#16960 Compaction loses AGENTS.md/CLAUDE.md instruction context** (5 comments, 2 👍) | [Link](https://github.com/anomalyco/opencode/issues/16960)
   A hard to debug issue that causes long-running sessions to lose project-specific custom agent rules after automatic context compaction, leading to inconsistent and non-compliant agent behavior.
10. **#31247 Opus 4.8 via GitHub Copilot leaks repeated literal tool-call text** (7 comments) | [Link](https://github.com/anomalyco/opencode/issues/31247)
    A breakage for users running Anthropic's latest Opus 4.8 model via Copilot, that leaks raw tool call markup into regular chat messages, eventually triggering 400 errors from the assistant prefill guardrail to crash sessions.

## 4. Key PR Progress
1. **#31429 fix: adjust item id stripping to happen prior to request signing** | [Link](https://github.com/anomalyco/opencode/pull/31429)
   Closed critical fix that resolves the Bedrock Mantle signature mismatch bug by stopping mutation of serialized request bodies after SigV4 signing completes.
2. **#31392 feat(acp): stage edits for native review in ACP clients** | [Link](https://github.com/anomalyco/opencode/pull/31392)
   New open feature PR that adds support for native file review workflows for ACP integrations with Zed, Devin, and other external IDE clients.
3. **#31357 feat(opencode): respect provider/model `streaming: false` to disable response streaming** | [Link](https://github.com/anomalyco/opencode/pull/31357)
   New open feature PR that adds explicit non-streaming mode support for self-hosted and custom OpenAI-compatible backends that do not implement or break the streaming protocol.
4. **#26398 feat: add CircleCI language server support** | [Link](https://github.com/anomalyco/opencode/pull/26398)
   Merged feature that adds built-in LSP support for CircleCI config files, eliminating manual LSP setup work for CI/CD pipeline authoring workflows.
5. **#26387 tui: optimistically render submitted prompts** | [Link](https://github.com/anomalyco/opencode/pull/26387)
   Merged UX improvement that immediately renders user-submitted prompts in the TUI instead of waiting for a full server round-trip, cutting perceived chat latency significantly.
6. **#26347 fix(opencode): do not fail write tool when post-write side-effects throw** | [Link](https://github.com/anomalyco/opencode/pull/26347)
   Merged bug fix that stops the file write tool from incorrectly marking operations as failed when post-write formatting, BOM sync, or LSP diagnostic steps throw errors after a successful disk write.
7. **#26369 fix(session): cap retry schedule at RETRY_MAX_ATTEMPTS = 3** | [Link](https://github.com/anomalyco/opencode/pull/26369)
   Merged fix that prevents infinite retry loops on failed LLM calls, stopping unnecessary credit waste and hanging sessions.
8. **#26389 fix: flush `debug skill` stdout** | [Link](https://github.com/anomalyco/opencode/pull/26389)
   Merged fix that resolves truncated JSON output from the `opencode debug skill` command, which previously broke piping output to jq and other CLI processing tools.
9. **#26355 fix(tui): respect current model config when continuing a session** | [Link](https://github.com/anomalyco/opencode/pull/26355)
   Merged bug fix that stops resumed old sessions from reverting to an outdated

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-09
Source: github.com/badlogic/pi-mono

---
## 1. Today's Highlights
Pi v0.79.0 launched today with the new Project Trust security feature, triggering immediate community feedback and a fast-following official patch to add a toggle for users who prefer to disable gating for local trusted directories. The 24h update cycle also includes a wave of high-priority bug fixes for performance regressions in large sessions, provider compatibility issues across AWS Bedrock, Azure OpenAI, local Ollama deployments, and long-requested quality of life features like file restore on conversation rewind.

## 2. Releases
### v0.79.0
The latest stable release introduces **Project Trust for local inputs**: Pi now prompts users before loading project-local settings, resources, instructions, and packages, with persisted trust decisions and `--approve`/`--no-approve` flags for non-interactive CI/automation workflows. Full documentation is available in the official Project Trust guidelines.

## 3. Hot Issues
1. **[#5514] Project Trust Feature Feedback (14 comments, 3 👍)** - https://github.com/earendil-works/pi/issues/5514  
   The top community discussion on the newly launched trust feature, where power users report frustration with repeated cross-machine trust prompts for their own known working directories, pushing demand for a global disable toggle.
2. **[#4180] Links not clickable anymore (10 comments)** - https://github.com/earendil-works/pi/issues/4180  
   A long-standing regression after the recent alternate term mode update that breaks hyperlink navigation in the TUI, marked closed via the massive ongoing refactor.
3. **[#5464] Local models: 3-5 minute "Working" status latency on basic messages mid-session (6 comments)** - https://github.com/earendil-works/pi/issues/5464  
   High-severity pain point for self-hosted users running Ollama models like `ministral3:8b`, where even trivial prompts trigger multi-minute unresponsive delays mid-session.
4. **[#5363] Add amazon-bedrock-mantle provider for OpenAI-compatible models (6 comments, 3 👍)** - https://github.com/earendil-works/pi/issues/5363  
   Top enterprise AWS feature request to add support for Bedrock Mantle’s OpenAI-native API, which is incompatible with the existing Converse-based Bedrock provider.
5. **[#5427] Openai Codex transport issues (3 comments, 4 👍)** - https://github.com/earendil-works/pi/issues/5427  
   Critical session-breaking bug where users hit persistent 10+ second SSE response timeouts after a transient error, blocking all further interactions with Codex models.
6. **[#5492] High CPU in interactive TUI on large sessions due to quadratic session branch traversal (3 comments)** - https://github.com/earendil-works/pi/issues/5492  
   Performance regression for power users with 62k+ message sessions that cause 100% idle CPU usage from inefficient session context calculation logic.
7. **[#5478] cwd bridge captures shell directory changes but never propagates them (3 comments)** - https://github.com/earendil-works/pi/issues/5478  
   Long standing UX bug where `cd` commands executed in the Pi bash tool do not persist across tool invocations, leading to broken relative path references for file operations.
8. **[#5530] `azure-openai-responses` missing `store: false` unlike `openai-responses` (2 comments)** - https://github.com/earendil-works/pi/issues/5530  
   Provider bug that forces Azure OpenAI into stateful server-side mode, causing unexpected reasoning object drops and broken API responses.
9. **[#5511] Error: context shift is disabled (2 comments)** - https://github.com/earendil-works/pi/issues/5511  
   Context management failure where manual compaction fails at 51% context usage, blocking users from continuing work on long coding sessions.
10. **[#5531] kimi.com: Thinking enabled despite using `thinking off` (2 comments)** - https://github.com/earendil-works/pi/issues/5531  
    Misconfiguration for the Moonshot Kimi provider that ignores the user’s toggle to disable extended thinking, wasting unnecessary model tokens.

## 4. Key PR Progress
1. **[#5515] feat(coding-agent): add alwaysTrust setting to skip project trust gating** - https://github.com/earendil-works/pi/pull/5515  
   Directly addresses top community feedback on the v0.79.0 Project Trust feature, adding an optional flag to fully disable all trust prompts for local environments.
2. **[#5524] fix(ai): send store: false on Azure OpenAI Responses requests** - https://github.com/earendil-works/pi/pull/5524  
   3-line patch that resolves the Azure stateful mode bug by aligning Azure OpenAI behavior with the standard public OpenAI responses implementation.
3. **[#5521] feat(coding-agent): restore files on rewind (checkpoints)** - https://github.com/earendil-works/pi/pull/5521  
   Implements a years-long requested feature: when users trigger a double-ESC conversation rewind, Pi now gives the option to roll back corresponding on-disk file edits to match the conversation state.
4. **[#5493] Avoid quadratic session branch traversal** - https://github.com/earendil-works/pi/pull/5493  
   Fixes the 100% idle CPU regression for large 60k+ message sessions by replacing the inefficient O(n²) session traversal logic.
5. **[#5509] feat: Add Amazon Bedrock Mantle OpenAI Responses provider** - https://github.com/earendil-works/pi/pull/5509  
   Implements the enterprise AWS feature request, adding full support for Bedrock Mantle’s OpenAI-compatible API and GPT 5.4/5.5 model entries.
6. **[#5513] Enforce context window mid-turn via shouldStopAfterTurn** - https://github.com/earendil-works/pi/pull/5513  
   Adds a mid-turn context guard to stop long tool loops from overshooting the configured context window, auto-triggering compaction before resuming execution.
7. **[#5518] feat(coding-agent): configurable clipboard image storage path** - https://github.com/earendil-works/pi/pull/5518  
   Adds a `settings.json` option to set a persistent custom storage directory for pasted clipboard images, eliminating data loss when the OS automatically cleans up the temporary folder.
8. **[#5486] fix: include day of week in Current date system prompt** - https://github.com/earendil-works/pi/pull/5486  
   Reduces common calendar hallucinations on small LLMs by appending the day of the week to the system prompt’s date string, instead of only providing a raw YYYY-MM-DD value.
9. **[#5505] Update models for together.ai** - https://github.com/earendil-works/pi/pull/5505  
   Removes the deprecated non-serverless `MiniMaxAI/MiniMax-M2.5` model entry from the Together.ai provider, eliminating 400 access errors for users that accidentally select it.
10. **[#5479] perf(coding-agent): reuse services on same-cwd session switch** - https://github.com/earendil-works/pi/pull/5479  
   Improves session switch performance by reusing existing initialized cwd-bound services (settings manager, model registry) instead of recreating them from scratch every time.

## 5. Feature Request Trends
- **Enterprise provider ecosystem expansion**: Top asks include native Amazon Bedrock Mantle support, Azure Cognitive Services endpoint compatibility, Wafer.ai provider integration, multiple account/key support per provider, and Claude OAuth session login for users without direct API key access.
- **Project trust extensibility**: Users are pushing for exposed trust status APIs for extensions, on top of the recently landed global disable toggle.
- **Session reliability improvements**: High demand for automatic file checkpoints tied to conversation history, to avoid broken state mismatches between chat history and on-disk files after rewinds.
- **Flexible configuration**: The community is asking for a clear split between Pi-managed system storage (sessions, logs, binaries) and user-editable config files (settings, prompts, themes) for easier backup and migration.

## 6. Developer Pain Points
1. Unwanted frequent trust prompts from the newly launched v0.79.0 Project Trust feature for local, known-working developer directories.
2. Severe multi-minute latency regressions for local Ollama model deployments on recent Pi updates.
3. Context management failures: context window overshoot during long tool loops, broken compaction at 50%+ context usage that blocks workflow.
4. Persistent edge case compatibility bugs across 3rd party providers (Azure OpenAI, Codex, Kimi, Together.ai) that break uniform API behavior.
5. Slow cold start (~2.4s) caused by eager loading of 138MB of provider SDK dependencies, plus regressions of Windows terminal popups during child process spawn.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-09
Official source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. Today's Highlights
The top priority P1 OOM and broken Escape key bug affecting sessions launched with `--resume` has been fully resolved, eliminating the critical 10-minute memory exhaustion issue for long-running workloads. Major progress on Agent Client Protocol (ACP) implementation now enables native, zero-adapter connectivity with popular editors including Zed, JetBrains, and Goose, expanding Qwen Code's cross-editor ecosystem support. The team also hardened core stability controls and CI guardrails to prevent broken builds from being merged to the main branch after a recent unapproved failing merge incident.

## 2. Releases
**v0.17.1-nightly.20260608.aea34fa2c**
This nightly release includes the official v0.17.1 version bump from the CI automation bot ([PR #4742](https://github.com/QwenLM/qwen-code/pull/4742)) and a CLI quality-of-life fix that automatically strips internal model thought blocks from `/copy` output, preventing unintended sensitive internal text from leaking into user pastes.

## 3. Hot Issues (10 Noteworthy Picks)
| Issue # | Status | Details | Impact |
|---------|--------|---------|--------|
| [#4815](https://github.com/QwenLM/qwen-code/issues/4815) | Closed P1 | Severe reproducible OOM within 10 minutes of using `qwen --resume`, alongside fully non-functional Escape key interrupt | The highest-urgency user-facing bug with 9 community comments affecting all users working on multi-hour code tasks, fully resolved as of this release window |
| [#4782](https://github.com/QwenLM/qwen-code/issues/4782) | Open | Tracking issue for ACP Streamable HTTP transport implementation for the Qwen Code daemon | Major ecosystem milestone: once complete, ACP-native editors can connect directly to `qwen serve` without any custom adapter code, no third-party plugin required |
| [#4821](https://github.com/QwenLM/qwen-code/issues/4821) | Open P2 | Feature request for declarative custom agent definitions via Markdown files with YAML frontmatter | 6 community comments, high user demand to match the popular Claude Code custom agent workflow, eliminating the need to hardcode agent logic in TypeScript |
| [#4864](https://github.com/QwenLM/qwen-code/issues/4864) | Open P2 | Request to enable required CI status checks on main branch protection | Filed after a PR with all failing Lint/Test checks was merged, breaking the global `tsc --build` typecheck for all downstream users |
| [#4845](https://github.com/QwenLM/qwen-code/issues/4845) | Open P2 | Feature request for `/import-config` command to migrate Claude Code user settings | Reduces onboarding friction for developers switching from Claude Code, automatically importing MCP servers, custom instructions, permissions and custom commands |
| [#1388](https://github.com/QwenLM/qwen-code/issues/4813) | Closed | 6-month old bug where copy-paste of code blocks in read-only CLI mode included line numbers and separator characters | Long-standing UX pain point for all CLI users, now marked resolved so pasted code no longer requires manual line-by-line cleanup |
| [#4838](https://github.com/QwenLM/qwen-code/issues/4838) | Open P1 | Bug where `/goal` loops skip history microcompaction logic | Root cause of OOMs during extended multi-step goal execution, tagged `welcome-pr` to invite community contributions |
| [#4801](https://github.com/QwenLM/qwen-code/issues/4801) | Closed P2 | Feature request for a dedicated `web_search` tool | Fills the last major capability gap relative to competing code agent CLIs, eliminating the prior limitation that forced users to rely on manual explicit URL fetching only |
| [#4854](https://github.com/QwenLM/qwen-code/issues/4854) | Open P3 | Feature request to run the Qwen Code process from a separate runtime path | Prevents the agent from accidentally killing its own running session when it executes a command to restart the project's local development server |
| [#4869](https://github.com/QwenLM/qwen-code/issues/4869) | Open P2 | Bug where YAML block scalar syntax (`>` / `|`) in skill frontmatter parses as literal `>` characters instead of multiline text | Blocks adoption of the user-defined custom skills ecosystem by breaking all long multiline skill descriptions |

## 4. Key PR Progress
1. [#4827](https://github.com/QwenLM/qwen-code/pull/4827) `feat(serve): ACP/REST parity — 29 new _qwen/* methods + production hardening`: Adds 935 lines of new dispatch logic to achieve full ACP feature parity, exposing all native Qwen Code commands for connected editor clients.
2. [#4824](https://github.com/QwenLM/qwen-code/pull/4824) `fix(core): prevent OOM by compacting API history, UI history, and triggering under memory pressure`: Fully resolves the P1 #4815 bug by extending microcompaction logic to hook/goal mode continuations and adding automatic compaction triggers when memory pressure thresholds are hit.
3. [#4871](https://github.com/QwenLM/qwen-code/pull/4871) `refactor(core): remove GitService, migrate /restore to FileHistoryService`: Eliminates duplicate parallel file recovery systems, unifying `/restore` and `/rewind` functionality under a single maintained backend to reduce tech debt.
4. [#4773](https://github.com/QwenLM/qwen-code/pull/4773) `feat(serve): ACP WebSocket transport`: Delivers Phase 2 of the ACP RFD, adding low-latency WebSocket transport support that coexists with existing SSE connections for faster editor sync.
5. [#4870](https://github.com/QwenLM/qwen-code/pull/4870) `fix(skills): use full YAML parser for frontmatter to support block scalars`: Replaces the custom partial YAML parser with the official full `yaml` npm package to resolve the #4869 multiline description bug for custom skills.
6. [#4847](https://github.com/QwenLM/qwen-code/pull/4847) `fix(ci): acknowledge queued qwen review requests`: Adds an immediate public comment on PRs when a user triggers a `@qwen-code /review` workflow, eliminating user confusion from un-notified queued self-hosted runner jobs.
7. [#4868](https://github.com/QwenLM/qwen-code/pull/4868) `feat(telemetry): add runtime memory/CPU sampling with OTel metric reporting`: Adds a ring buffer sampler for RSS, heap usage and CPU metrics, with OpenTelemetry export enabled for production deployments to simplify debugging of session crashes.
8. [#4713](https://github.com/QwenLM/qwen-code/pull/4713) `feat(mcp): project .mcp.json + workspace approval gating with aligned scope precedence`: Adds security boundaries for untrusted checked-in MCP server configurations, aligning behavior with Claude Code to prevent permission escalation.
9. [#4841](https://github.com/QwenLM/qwen-code/pull/4841) `fix(cli): close @path completion dropdown on Enter accept`: Resolves the long-standing UI bug where the @-mention file path dropdown stayed open after a user confirmed a selection with the Enter key.
10. [#4833](https://github.com/QwenLM/qwen-code/pull/4833) `feat(daemon): session idle reaper for automatic cleanup`: Adds automatic garbage collection for unused daemon sessions that have no active clients or prompts for longer than the default 30 minute idle TTL, preventing long-running daemon instances from accumulating memory bloat.

## 5. Feature Request Trends
Three top priority user-requested capability directions emerged in the past 24 hours:
1. **Cross-product parity**: Align feature behavior with Claude Code including custom declarative agents, MCP config support, and one-click migration tools to lower barriers for users switching from competing tools.
2. **ACP ecosystem expansion**: Full implementation of the ACP standard to enable native support for all popular code editors, no custom plugins required.
3. **Extensibility for custom workflows**: Native support for user-defined custom skills, custom ignore file formats (`.agentignore`, `.aiignore`), and background fork agents for parallel multi-task execution.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. Unpredictable OOM and memory leaks during long-running sessions, which the team is actively addressing with multiple layered compaction and memory pressure protection patches.
2. Minor but pervasive CLI UX friction including leaked line numbers on copy, broken Escape key behavior, and leftover UI dropdowns that create unnecessary manual cleanup work for users.
3. CI/CD fragility: Missing mandatory status checks on the main branch and no user feedback for queued automated PR review jobs, leading to preventable broken builds and poor contributor experience.
4. Accidental self-sabotage risk: No guardrails preventing the agent from terminating its own running process when executing commands that restart local development servers.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# CodeWhale (Formerly DeepSeek TUI) Community Digest | 2026-06-09
Canonical repo: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)

---

## 1. Today's Highlights
The official v0.8.54 release marks the full formal rebrand of the project from legacy `deepseek-tui` to CodeWhale, with the old npm package fully deprecated for all future development. Maintainers merged a batch of critical bug fixes for security, concurrency, and silent failure handling yesterday, alongside foundational work for the upcoming v0.9.0 WhaleFlow multi-agent orchestration feature. Community traction for long-running agent workflow quality of life improvements reached new highs, with top-voted feature proposals targeting persistent session state and KV cache reuse.

## 2. Releases
### v0.8.54 CodeWhale
The first canonical CodeWhale release was published yesterday:
- Legacy `deepseek-tui` npm package is permanently deprecated, no further updates will be shipped
- Official install flow now requires two mandatory Cargo crates: `codewhale-cli` and `codewhale-tui`
- Included highlights: SWE-bench / Terminal-Bench benchmark harnesses, native MiMo v2.5 Pro benchmark routing, and all stable bug fixes from the v0.9.0 stewardship branch
- Full release merge PR: [#2902](https://github.com/Hmbown/CodeWhale/pull/2902)

## 3. Hot Issues
1. [#1177](https://github.com/Hmbown/CodeWhale/issues/1177): Input cache hit ratio <10% (24 comments) – Users report cache performance is drastically worse than peer project DeepSeek-Reasonix (95%+ hit rate), creating unnecessary token waste and latency for repeated prompts. This is the top open priority for the core team.
2. [#743](https://github.com/Hmbown/CodeWhale/issues/743): Unusually high token consumption (13 comments) – Multiple users report 400 million+ tokens used in half a day of casual usage, pointing to unoptimized context attachment logic that resends full conversation history on every request.
3. [#1969](https://github.com/Hmbown/CodeWhale/issues/1969): Migration uncertainty post CodeWhale rebrand (8 comments) – No official documentation confirms if existing sessions, custom skills, and configs are preserved after updating from legacy deepseek-tui builds, creating hesitation for users to upgrade.
4. [#1620](https://github.com/Hmbown/CodeWhale/issues/1620): Extremely slow thinking process streaming (5 comments) – Users report the model outputs reasoning text one character at a time with multi-second lag, making long debugging sessions unusable.
5. [#2492](https://github.com/Hmbown/CodeWhale/issues/2492): Missing cross-session memory (5 comments) – The TUI forgets all context on restart, and does not auto-load past session history even if users manually enable persistent storage.
6. [#2328](https://github.com/Hmbown/CodeWhale/issues/2328): exec_shell availability mismatch (4 comments) – The documented shell execution tool only works in YOLO mode, and throws unhelpful errors when invoked in Agent mode, breaking expected automated workflows.
7. [#2641](https://github.com/Hmbown/CodeWhale/issues/2641): Full PDF read without `pages` parameter hangs TUI (3 comments) – Users processing 2-100 page text-only PDFs hit indefinite hangs when trying to extract full document content, requiring full process restart.
8. [#2261](https://github.com/Hmbown/CodeWhale/issues/2261): TUI crash leaks input to PowerShell (3 comments) – On Windows, when the TUI process crashes mid-conversation, all unsubmitted user input is passed directly to the host shell, with a risk of unintended command execution.
9. [#2739](https://github.com/Hmbown/CodeWhale/issues/2739): Long-running tasks time out and lose session progress (2 comments) – Users executing multi-hour code refactoring or bug fix tasks report tasks hang indefinitely after the 300s timeout threshold, and all unpersisted progress is lost even after using the `--continue` launch flag.
10. [#2904](https://github.com/Hmbown/CodeWhale/issues/2904): Persistent agent state and compressed KV cache capsules proposal (1 comment, maintainer tagged) – A high-priority feature request that would reduce token usage by 70%+ for long coding sessions by reusing server-side signed KV caches across restarts.

## 4. Key PR Progress
1. [#2482](https://github.com/Hmbown/CodeWhale/pull/2482): Closed – WhaleFlow declarative multi-agent workflow orchestration (v0.9.0 milestone) – A new dedicated crate adds JSON-config driven sub-agent swarm management, a topological scheduler with semaphore concurrency control, and file-scoped task isolation inspired by Claude Code's dynamic workflows.
2. [#2869](https://github.com/Hmbown/CodeWhale/pull/2869): Closed – Fixed `/model` picker to list all custom models across configured providers – Resolves the long-standing bug where custom models added to non-active providers (e.g. Kimi on Moonshot while active provider is DeepSeek) were completely hidden from the TUI model selector, fixing issue [#2596](https://github.com/Hmbown/CodeWhale/issues/2596).
3. [#2881](https://github.com/Hmbown/CodeWhale/pull/2881): Closed – Fixed 11 silent error swallowing bugs – Removed all instances of discarded errors via `let _ =`, `.ok()`, and unhandled `Err` cases across the codebase, eliminating hidden failures that caused unreported config loss and session corruption.
4. [#2883](https://github.com/Hmbown/CodeWhale/pull/2883): Closed – Fixed 5 concurrency bugs – Patched mutex poisoning, unconstrained thread spawning, and resource leak issues that caused cascading panics, thread exhaustion, and Windows native compilation failures.
5. [#2903](https://github.com/Hmbown/CodeWhale/pull/2903): Open – Build fully static Linux x64 binaries via musl target – Eliminates runtime dependencies on glibc and libdbus, making prebuilt binaries compatible with every Linux distribution including lightweight distros like Alpine.
6. [#2898](https://github.com/Hmbown/CodeWhale/pull/2898): Open – Fixed PDF read hang bug – Routes all full-document PDF extraction requests through the existing tested per-page extraction codepath instead of the buggy full-load codepath, resolving the issue of TUI hangs on malformed PDF cross-reference tables.
7. [#2895](https://github.com/Hmbown/CodeWhale/pull/2895): Open – Fixed SiliconFlow China region config bug – Properly maps the `siliconflow-CN` TOML config section to the domestic China region provider, removing the user requirement to duplicate API keys across two config entries to use the domestic endpoint, fixing issue [#2893](https://github.com/Hmbown/CodeWhale/issues/2893).
8. [#2781](https://github.com/Hmbown/CodeWhale/pull/2781): Closed – Added ghost text follow-up prompt suggestions – After every completed model turn, the TUI generates a short suggested follow-up question rendered as dimmed ghost text that users can accept with a single Tab press, mirroring Claude Code's UX to reduce typing overhead.
9. [#2882](https://github.com/Hmbown/CodeWhale/pull/2882): Closed – Fixed 5 execution security bugs – Patches command bypass vulnerabilities in the execution policy engine, hardens API approval mapping, and adds strict input validation for all tool calls.
10. [#2905](https://github.com/Hmbown/CodeWhale/pull/2905): Open – Fixed missing diagnostic for disabled shell tools – Adds clear error messaging that explicitly points users to the `allow_shell = true` config flag when the exec_shell tool is blocked, instead of throwing unhelpful generic missing tool errors.

## 5. Feature Request Trends
The highest-priority requested feature directions from recent community activity are:
1. Persistent agent state management and server-signed compressed KV cache reuse to drastically cut token usage and improve long session continuity
2. Native multi-tab TUI system with cross-tab task delegation, so users can run multiple independent agent workflows in parallel without launching separate TUI instances
3. Full end-to-end i18n localization support for all 7 official supported locales (English, Japanese, Simplified Chinese, Traditional Chinese, Brazilian Portuguese, Latin American Spanish, Vietnamese) across all TUI surfaces
4. Structured sidebar inspection UI that displays at-a-glance status for all running workflows, tasks, and sub-agents
5. Configurable provider fallback chains that automatically route requests to backup providers if the primary provider returns rate limit or downtime errors

## 6. Developer Pain Points
Recurring top frustrations reported by users in the last 24 hours:
1. Unoptimized context management leading to extremely low input cache hit rates and excessive token consumption that inflates API costs
2. Unhandled TUI crashes that leak unsubmitted user input to the host shell and cause irreversible loss of hours of agent workflow progress
3. Missing post-rebrand migration documentation that leaves legacy deepseek-tui users uncertain if their existing sessions, custom skills, and configs are safe after upgrading
4. Persistent platform-specific compatibility bugs across FreeBSD, macOS, WSL2, and niche terminals (Ghostty) that do not appear in core dev test environments
5. Inconsistent documented vs actual tool behavior across different TUI operating modes that breaks user expected automated agent workflows.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*