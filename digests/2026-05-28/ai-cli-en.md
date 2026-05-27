# AI CLI Tools Community Digest 2026-05-28

> Generated: 2026-05-27 23:18 UTC | Tools covered: 9

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

# 2026-05-26 AI Developer CLI Ecosystem Cross-Tool Comparison Report
Target audience: Technical decision-makers, AI workflow engineers, and platform engineering teams

---

## 1. Ecosystem Overview
The global AI code CLI ecosystem has reached a major inflection point in mid-2026, with all flagship tools graduating past basic chat and file-editing functionality to prioritize production reliability, enterprise compliance, and standardized cross-tool interoperability. First-party tools from Anthropic, OpenAI, and GitHub are iterating rapidly on security controls for custom agent workflows, while independent and regional vendors are aggressively closing feature parity gaps for self-hosted and air-gapped deployment use cases. The Model Context Protocol (MCP) has emerged as a de facto universal standard for tool integration across the entire ecosystem, eliminating the prior fragmentation of custom plugin ecosystems. Over the 24-hour reporting window, all tracked tools shipped at least one new release, with a combined 75+ high-priority bug fixes and new feature merges across the 9 projects. Regional AI vendors based in China have demonstrated faster iteration on user-submitted quality of life requests and locale-specific compatibility optimizations for local developer communities.

## 2. Activity Comparison
| Tool Name | Total Hot Issues Updated Today | Total Key PRs Modified Today | 2026-05-28 Release Activity |
|---|---|---|---|
| Claude Code (Anthropic) | 10 | 5 | 1 stable release (v2.1.152) |
| OpenAI Codex | 10 | 10 | 2 Rust alpha pre-releases (v0.135.0-alpha.1/2) |
| Gemini CLI (Google) | 10 | 10 | 3 builds (stable v0.44.0, nightly, preview) |
| GitHub Copilot CLI | 10 | 0 (all changes shipped internally) | 5 sequential stable patch releases (1.0.55 series) |
| Kimi Code CLI (Moonshot AI) | 6 | 7 | 1 stable release (v1.45.0) |
| OpenCode (anomalyco) | 10 | 10 | 1 stable release (v1.15.11) |
| Pi (badlogic/earendil-works) | 10 | 10 | 1 stable release (v0.76.0) |
| Qwen Code (QwenLM) | 10 | 10 | 3 builds (stable v0.16.2, preview, nightly) |
| CodeWhale (DeepSeek TUI) | 10 | 10 | 1 major rebrand feature release (v0.8.47) |

## 3. Shared Feature Directions
Multiple high-priority requirements appear across 7+ tool communities, with coordinated parallel development efforts across independent teams:
1. **MCP ecosystem parity**: All 9 tools are investing in MCP compatibility, with shared requirements including persistent scoped tool approval rules, unified MCP config sync between CLI and IDE, real-time MCP server health visibility, and zero-downtime dynamic MCP registration without daemon restarts. OpenAI Codex, Qwen Code, and Claude Code lead implementation efforts in this area.
2. **Cross-terminal TUI compatibility hardening**: 8/9 tools are resolving long-standing gaps for terminal multiplexers (tmux, Zellij), niche emulators (WezTerm, Kitty), and JetBrains embedded terminals, including consistent Shift+Enter newline muscle memory alignment, non-breaking multi-line paste, and prevention of raw keystroke leaks to the underlying shell after a TUI crash.
3. **Context and cost optimization**: 7 tools are building capabilities to cut unnecessary token consumption and inference costs, including local prompt caching, deduplication of redundant tool calls, selective exclusion of non-critical shell output from the LLM context, and hybrid two-tier model routing to use low-cost fast models for tool execution work and high-reasoning premium models only for planning phases, delivering 50-70% cost reduction without quality loss.
4. **Enterprise deployment readiness**: 6 tools are rolling out IT admin-focused features including native corporate SSL MITM inspection support, organization-owned fine-grained PAT permission controls, pre-built sandbox provisioning scripts for non-admin end-user devices, and air-gapped on-prem deployment workflows.
5. **Parallel subagent reliability**: 5 tools (Claude Code, Kimi Code, Pi, OpenCode, CodeWhale) are implementing shared improvements including API key pool rate limit isolation for concurrent tasks, non-cooperative instant cancellation for stuck generations, and transparent subagent failure state reporting that never masks errors as successful completions.

## 4. Differentiation Analysis
Tools have clearly diverged into distinct categories with targeted user bases and technical priorities:
1. **Feature Focus Differences**:
   - Closed first-party US tools (Claude Code, OpenAI Codex, GitHub Copilot CLI) prioritize deep native integration with their parent model and product ecosystems, with Claude Code leading in custom skill security controls, Copilot CLI building exclusive GitHub workflow integrations, and Codex targeting enterprise SSO and admin policy management.
   - Open multi-provider agnostic tools (OpenCode, Pi, Gemini CLI) focus on support for 20+ third-party and self-hosted LLM endpoints, with unique capabilities including native NVIDIA NIM inference provider support for Pi, and dynamic LM Studio local model list auto-discovery for OpenCode.
   - Regional Chinese vendor tools (Kimi Code, Qwen Code, CodeWhale) prioritize region-specific optimizations including non-UTF8 locale encoding tolerance for Windows, native domestic LLM endpoint integration, and aggressive cost reduction features such as CodeWhale's 99%+ prefix caching architecture.
2. **Target User Differences**:
   - Claude Code / OpenAI Codex serve high-volume enterprise power users running production multi-agent workflows.
   - GitHub Copilot CLI targets mass market existing GitHub/Copilot users with zero-config setup requiring no manual API key management.
   - OpenCode / Pi target self-hosting enthusiasts and open source extension developers who require full control over their LLM provider configuration.
   - Regional vendor tools cater to local developer communities operating under domestic data residency requirements and cost-sensitive use cases.
3. **Technical Approach Differences**:
   - Closed first-party tools ship all changes via opaque binary patch releases with no public PR review, prioritizing backwards compatibility and stability over experimental feature rollouts.
   - Open multi-provider tools operate a community-first contribution model, with the majority of new features submitted by external open source contributors.
   - Regional vendor tools run extremely agile release cycles, often resolving user-reported bugs within hours of public issue filing.

## 5. Community Momentum & Maturity
1. **Highest Maturity, Largest Active Communities**: Claude Code, OpenAI Codex, and GitHub Copilot CLI top the rankings with >100k active users, extensive plugin ecosystems, and multi-year track records of stable production releases. Copilot CLI's zero public PR activity confirms it is backed by a large dedicated internal engineering team with no open source contribution pipeline.
2. **Rapidly Growing High-Activity Communities**: OpenCode, Pi, Gemini CLI, and CodeWhale all closed 10+ high-priority PRs on the reporting day, resolving top-voted 10+ month old long-standing UX pain points, with thousands of active open source contributors submitting fixes and features on a regular cadence.
3. **Agile Fast-Iterating Regional Upstarts**: Kimi Code CLI and Qwen Code have smaller but extremely engaged local user bases, recently completing full rewrites from legacy Python stacks to modern TypeScript codebases, and demonstrating far faster response times to user feature requests than older first-party tools.

## 6. Trend Signals
These community observations deliver high reference value for AI workflow developers:
1. MCP is now the universal standard for tool integration across the entire ecosystem: teams building new AI tools or extensions should prioritize MCP native compatibility first to reach all users across 9+ major CLI platforms without building custom per-tool integrations.
2. TUI has displaced web and desktop interfaces as the preferred environment for AI code workflows: teams must add cross-terminal compatibility testing for niche terminals and multiplexers as a core QA requirement, as broken input

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data Snapshot: 2026-05-28)
---
## 1. Top Skills Ranking
Below are the 7 highest-attention community-submitted Skills, ranked by implicit user engagement tied to cross-issue demand and PR update frequency:
1. **ServiceNow Platform Skill (PR #568)**  
   Functionality: End-to-end platform assistant covering all core ServiceNow modules including ITSM, SecOps, ITAM, FSM, and IntegrationHub, far more comprehensive than narrow existing scripting helpers. Discussion highlights: Enterprise admin users have requested this skill be pre-vetted for internal deployments to cut ServiceNow workflow development time by 70%. Status: Open. [GitHub Link](https://github.com/anthropics/skills/pull/568)
2. **Testing Patterns Skill (PR #723)**  
   Functionality: Full-stack standardized testing guidance covering the Testing Trophy framework, unit test AAA patterns, React component testing, and end-to-end test best practices. Discussion highlights: The community is pushing to integrate this skill natively into the official skill-creator evaluation pipeline to auto-generate consistent test suites for all new submitted skills. Status: Open. [GitHub Link](https://github.com/anthropics/skills/pull/723)
3. **AURELION Cognitive Memory Skill Suite (PR #444)**  
   Functionality: Four interconnected skills delivering a structured 5-layer thinking framework, persistent cross-conversation memory, knowledge management, and agent orchestration tools for professional teams. Discussion highlights: Users are pushing for alignment between the suite and upcoming MCP skill standards to make stored memories shareable across organization-wide skill instances. Status: Open. [GitHub Link](https://github.com/anthropics/skills/pull/444)
4. **Document Typography Skill (PR #514)**  
   Functionality: Automatic quality control for AI-generated documents that fixes common typographic defects including orphan word wraps, stranded widow section headers, and list numbering misalignment. Discussion highlights: Users requested post-generation automatic integration with existing DOCX/ODT/PDF skills to eliminate manual typography cleanup work. Status: Open. [GitHub Link](https://github.com/anthropics/skills/pull/514)
5. **Codebase Inventory Audit Skill (PR #147)**  
   Functionality: 10-step systematic workflow to scan repositories for orphaned code, unused assets, documentation gaps, and infrastructure bloat, outputting a single unified CODEBASE-STATUS.md audit document. Discussion highlights: DevOps teams have requested git integration to support scheduled automated codebase hygiene audits. Status: Open. [GitHub Link](https://github.com/anthropics/skills/pull/147)
6. **n8n Builder + Debugger Skills (PR #190)**  
   Functionality: Two paired production-tested skills that guide Claude to build full low-code automation workflows from scratch and troubleshoot broken n8n deployments, paired with a related faf-expert skill for persistent project context management. Discussion highlights: Low-code developers requested compatibility with the official n8n MCP plugin to let Claude deploy generated workflows directly. Status: Open, last updated 2026-05-18. [GitHub Link](https://github.com/anthropics/skills/pull/190)
7. **Skill Quality + Security Analyzer Meta-Skills (PR #83)**  
   Functionality: Two meta-skills that evaluate custom Claude Skills across 5 dimensions for structural compliance, documentation quality, and hidden security vulnerabilities. Discussion highlights: Stakeholders are advocating for this to be added to the official marketplace pre-submission validation pipeline. Status: Open. [GitHub Link](https://github.com/anthropics/skills/pull/83)

---
## 2. Community Demand Trends
Distilled from top comment-sorted community issues, the highest-anticipated directions are:
1. **Native organization-wide skill sharing libraries (top issue, 13 comments, 7 👍)**: Users are actively frustrated with the current work-around of manually sharing .skill files via Slack/Teams and uploading individually, and want a hosted shared skill library for enterprise teams.
2. **Full Windows compatibility for official skill tooling**: Multiple high-engagement reports confirm the skill-creator suite’s core evaluation scripts (run_eval.py, run_loop.py) are non-functional on Windows, blocking half the developer community from testing custom skills.
3. **Standardized MCP exposure for all Skills**: Users want every skill packaged as a compliant Model Context Protocol interface to eliminate duplicated logic and enable cross-runtime interoperability across different AI agent deployments.
4. **Anti-impersonation namespace controls (6 comments, 2 👍)**: Community security researchers flagged a critical unpatched vulnerability where unvetted community skills can be published under the `anthropic/` namespace, tricking users into granting elevated permissions to untrusted code.
5. **AWS Bedrock native skill support (4 comments)**: Enterprise users running Claude on Amazon Bedrock currently have no supported path to import and use the official open-source skills collection.
6. **Duplicate skill deduplication (6 comments, 8 👍)**: Users that install multiple official skill plugins (document-skills + example-skills) currently get duplicate copies of identical skills that waste valuable context window space.

---
## 3. High-Potential Pending Skills
These recently updated, fully reviewed open PRs are very likely to be merged and land in the official collection in the near term:
1. **Windows Skill Creator Compatibility Fix Bundle (PR #1099, PR #1050)**: Two 1-line targeted fixes resolving the WinError 10038 subprocess pipe crash and missing `claude.cmd` path detection on Windows 11. Both were last updated 2026-05-24, and directly resolve the high-priority #556 bug that caused 0% skill trigger rates during evaluation. [Links: #1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)
2. **Official CONTRIBUTING.md Documentation Add (PR #509)**: This addition lifts the repo’s GitHub community health score from 25% to ~75% by publishing clear, step-by-step guidance for new community skill submitters, addressing a long-standing feature request. It is pending final maintainer review. [GitHub Link](https://github.com/anthropics/skills/pull/509)
3. **Core Document Skill Bug Fix Bundle (PR #538, PR #539, PR #541)**: Three fully tested, low-risk fixes resolving case-sensitive file reference breaks in the PDF skill, silent YAML parsing failures from unquoted description fields, and DOCX document corruption caused by conflicting tracked change IDs and bookmarks. All were updated mid-April 2026, pending merge. [Links: #538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541)
4. **Masonry AI Image + Video Generation Skill (PR #335)**: Production-ready integration with the Masonry CLI that lets Claude Code generate Imagen 3.0 images and Veo 3.1 videos directly within workflows. It is pending final security review before merge. [GitHub Link](https://github.com/anthropics/skills/pull/335)

---
## 4. Skills Ecosystem Insight
At the 2026-05-28 snapshot, the Claude Code Skills community's most concentrated, high-priority demand is for polished, interoperable, enterprise-grade skill tooling that eliminates cross-platform compatibility gaps, supports org-wide central skill management, adds standardized automated security validation for user-submitted skills, and natively integrates with common enterprise SaaS and MCP tooling.

---

# Claude Code Community Digest | 2026-05-28
Source: github.com/anthropics/claude-code

---

## 1. Today's Highlights
The new v2.1.152 release rolls out a highly requested auto-apply code review workflow and new tool restriction controls for custom skills. Two high-severity open bugs are gaining community traction: a macOS data loss issue that deletes saved chat history on client restarts, and a cross-client Windows socket disconnect pattern correlated with Anthropic platform outages. Multiple community-contributed fixes for the popular Ralph Wiggum developer plugin were submitted overnight, addressing Windows path compatibility and transcript parsing gaps.

## 2. Releases
### v2.1.152 (Latest stable, released 2026-05-28)
Two core feature updates shipped:
1. The new `/code-review --fix` flag now automatically applies review findings (including code reuse, simplification, and efficiency suggestions) directly to your local working tree. The existing `/simplify` command now maps directly to this new auto-apply workflow.
2. Custom Skills and slash commands now support a new `disallowed-tools` frontmatter property that lets creators explicitly remove unwanted tools from their command's execution context for tighter security and workflow focus.
Release page: https://github.com/anthropics/claude-code/releases/tag/v2.1.152

## 3. Hot Issues (Top 10 Noteworthy)
| Issue | Details | Impact | Link |
|---|---|---|---|
| #62272 (OPEN) | macOS data loss bug: Chat JSONL files in `~/.claude/projects/` are being deleted even with a high `cleanupPeriodDays` configuration, triggered by client updates or restarts. A community member has published a Time Machine recovery script for affected users. | Critical for users that rely on local saved chat history for audit trails and work resumption. | https://github.com/anthropics/claude-code/issues/62272 |
| #62146 (OPEN) | Windows Node SDK recurring fetch() socket disconnects, documented with an 81-case data corpus correlated with Anthropic status page "elevated errors" events, affecting both CLI and desktop clients simultaneously. | Breaks long-running production workflows and cross-device sessions for Windows power users. | https://github.com/anthropics/claude-code/issues/62146 |
| #49748 (CLOSED) | Resolved Windows 11 bug where the Cowork tab disappeared entirely after a recent client update. 9 comments, 4 upvotes. | One of the top-voted recent desktop UI platform-specific bugs. | https://github.com/anthropics/claude-code/issues/49748 |
| #39764 (CLOSED) | macOS TUI paste regression: `cmd+v` typed a literal "v" instead of pasting content starting in v2.1.84, breaking basic CLI workflow. 7 comments, 3 upvotes. | High frustration for daily CLI-only users. | https://github.com/anthropics/claude-code/issues/39764 |
| #51609 (CLOSED) | Opus 4.7 delegation bug: The model ignored explicit project rules to offload mechanical work (file renames, bulk prop migrations) to cheaper Haiku/Sonnet sub-agents, leading to excess and unexpected quota burn. | Directly impacts cost predictability for teams with large agent fleets. | https://github.com/anthropics/claude-code/issues/51609 |
| #62947 (OPEN) | Windows stale git status bug: The client captures a `gitStatus` snapshot at process launch, not when the user submits their first prompt, so it works off outdated repo state if other team members commit changes before user input. | Leads to Claude generating incorrect changes based on old repository context. | https://github.com/anthropics/claude-code/issues/62947 |
| #52534 (CLOSED) | Opus 4.7 effort level override bug: Sessions always launched at `xhigh` effort, ignoring the `CLAUDE_CODE_EFFORT_LEVEL` environment variable and `settings.json` configs, breaking autonomous multi-agent restart workflows. | Breaks headless agent automation pipelines. | https://github.com/anthropics/claude-code/issues/52534 |
| #51440 (CLOSED) | Opus 4.7 quality regression report: Professional VS Code extension users reported worse coding output quality paired with higher token costs compared to Opus 4.6 for production workloads. 2 comments, 3 upvotes. | High relevance for power users on $200/month Claude Max plans. | https://github.com/anthropics/claude-code/issues/51440 |
| #62950 (OPEN) | v2.1.152 Linux auto-update failure: Newly updated Linux users are getting unprompted auto-update errors that prompt users to run `/doctor`, despite already being on the latest version. | First post-release platform-specific bug report for the new stable. | https://github.com/anthropics/claude-code/issues/62950 |
| #48078 (CLOSED) | Windows desktop "Run on Startup" toggle bug that could not be disabled, leading to unwanted background resource usage after system boot. 5 comments, 2 upvotes. | Common quality-of-life complaint for desktop users. | https://github.com/anthropics/claude-code/issues/48078 |

## 4. Key PR Progress
All 5 recently updated public PRs are high-priority community contributions:
1. **#62941** Fix for the popular Ralph Wiggum stop hook plugin: Correctly parses the full last assistant transcript instead of only reading the final line of the log, resolving silent premature loop termination bugs. https://github.com/anthropics/claude-code/pull/62941
2. **#62906** Windows path compatibility fix for Ralph Wiggum: Prefixes the stop hook script call with a bash interpreter to support Windows Git Bash / MSYS environments where file paths contain spaces. https://github.com/anthropics/claude-code/pull/62906
3. **#61742** Documentation PR: Explicitly documents the TUI Agent View limitation that dispatched sub-agents inherit the main session's working directory (no custom path support), with recommended workarounds using separate tmux panes. Closes #61546. https://github.com/anthropics/claude-code/pull/61742
4. **#62821** Plugin developer documentation: Outlines the existing env-bridge workaround pattern for passing session IDs to MCP servers, while native `CLAUDE_CODE_SESSION_ID` environment variable support remains in development. Closes #61752. https://github.com/anthropics/claude-code/pull/62821
5. **#41447** Long-running open feature PR: "Open Source Claude Code" updated after months of inactivity, referencing 6 top community requests and issues that will be resolved by open sourcing the core tool. https://github.com/anthropics/claude-code/pull/41447

## 5. Feature Request Trends
The most requested user-facing improvements this week are:
1. Decoupled memory controls: Separate independent toggles for `CLAUDE.md` (project rules) and `MEMORY.md` (persistent cross-session context) instead of the current single shared `autoMemoryEnabled` toggle.
2. Contextual UI filtering: Hide or grey out `/effort` command options that are incompatible with the currently selected model (e.g. Opus-only effort levels when using Sonnet) to reduce user confusion.
3. Multi-account visibility: Add logged-in email and organization labels to the TUI header for teams users that regularly juggle multiple personal and work accounts.
4. Subsystem failure isolation: Enforce process-level separation between cloud skills, remote control sessions, and local client processes to prevent cascading crashes when one subsystem fails.

## 6. Developer Pain Points
Recurring high-frequency frustrations from recent issue reports:
1. Cross-platform TUI input regressions: Widespread overlapping bugs for single-line and multi-line paste functionality across macOS, Windows, and Linux CLI environments in recent builds.
2. Cost and quota unpredictability: Reports of Opus 4.7 ignoring explicit workload delegation rules, token overconsumption for trivial tasks, and broken weekly usage limit tracking that resets incorrectly for regional users.
3. Windows path and permission fragility: Recurring EPERM rename errors for plugin installs, broken path resolution for Windows usernames with accented non-ASCII characters, and failure to apply enterprise HKLM managed policy settings.
4. Unreliable session persistence: Reports of lost conversation history on session resume, accidental deletion of chat logs on client update, and broken account re-authentication that incorrectly applies personal account limits to team plan users.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-05-28
---

## 1. Today's Highlights
Today’s top updates include two sequential Rust Codex v0.135.0 alpha pre-releases published in the last 24 hours, and the resolution of a widely reported Hermes Agent OAuth TypeError that impacted dozens of enterprise teams using ChatGPT/Codex SSO. OpenAI also merged core changes to launch independent beta cycles for the official Python Codex SDK, alongside planned enterprise-friendly Windows sandbox setup tools for IT admins deploying Codex at scale.

## 2. Releases
Two new Rust core pre-releases rolled out consecutively for the Codex CLI/app stack:
- `rust-v0.135.0-alpha.1` and `rust-v0.135.0-alpha.2` follow the recent stable 0.133.x line, with no public full changelog published as of this digest. Early community testing confirms the alphas target recently reported sandbox execution and auth regression fixes.

## 3. Hot Issues
1. [#24665 (CLOSED)](https://github.com/openai/codex/issues/24665) Hermes Agent OAuth `NoneType` not iterable failure: The highest-engagement recent bug with 31 comments and 50 👍, this widespread auth outage broke Codex SSO access across multiple entire teams before an overnight fix was pushed.
2. [#7727 (OPEN)](https://github.com/openai/codex/issues/7727) Add Delete option to VS Code Codex Task context menu: The most upvoted open feature request (93 👍) addresses a long-standing pain point where users have no native way to permanently remove old, clutter tasks from their IDE workspace.
3. [#24260 (OPEN)](https://github.com/openai/codex/issues/24260) GPT-5.5 xhigh reasoning turn stalls 30+ minutes before first output: Affects Pro users running heavy, long reasoning workloads on Codex Desktop, with no official root cause published as of today.
4. [#24373 (OPEN)](https://github.com/openai/codex/issues/24373) Google Sheets connector fails to write after plugin reinstall: Breaks no-code automation workflows for teams relying on the official MCP Google Drive integration, with shared read endpoints also returning unintended 429 rate limits.
5. [#24269 (OPEN)](https://github.com/openai/codex/issues/24269) Native `/Goal` agent command consistently fails: The newly launched automated goal-setting agent feature is completely non-functional for many Pro desktop users running the latest 26.519 build.
6. [#16911 (OPEN)](https://github.com/openai/codex/issues/16911) Repeated MCP tool approval prompts: With 9 👍, this bug destroys workflow efficiency for power users, forcing manual user confirmation for every single call to connected self-hosted MCP servers.
7. [#23952 (OPEN)](https://github.com/openai/codex/issues/23952) iOS Codex Mobile only displays projects with recent chats: Remote control users cannot access older projects via the ChatGPT mobile app, with the only known workaround being a full logout and re-login.
8. [#24388 (OPEN)](https://github.com/openai/codex/issues/24388) CLI remote compaction deadlocks on input image payloads: Breaks long-running gpt-5.5 xhigh sessions that process large image assets, hanging the entire Codex process unexpectedly.
9. [#22723 (OPEN)](https://github.com/openai/codex/issues/22723) macOS Codex Desktop crashes on upper-left area right-click: Reproducible UI crash on macOS Tahoe 26.5 builds that triggers during regular workspace navigation.
10. [#11806 (OPEN)](https://github.com/openai/codex/issues/11806) Severe Codex extension slowdown on WSL 2: A 3+ month old unresolved bug that causes multi-second latency for all editor interactions for devs running the Codex VS Code plugin on Windows WSL 2.

## 4. Key PR Progress
1. [#24828 (OPEN)](https://github.com/openai/codex/pull/24828) Add independent Python SDK beta release lifecycle: Enables OpenAI to ship new Python SDK betas to the community without requiring a full update to the core Codex runtime, drastically reducing testing friction for new SDK features.
2. [#24831 (OPEN)](https://github.com/openai/codex/pull/24831) Add Windows sandbox provisioning setup command: Lets IT admins pre-configure Codex sandbox permissions via automated deployment scripts for non-admin end-user devices, solving a top enterprise adoption blocker.
3. [#17931 (OPEN)](https://github.com/openai/codex/pull/17931) Fix encrypted local secrets support for Windows keyring: Resolves the 2560-byte Windows Credential Manager hard limit that previously broke auth persistence for large MCP OAuth and ChatGPT SSO tokens on Windows.
4. [#24800 (CLOSED)](https://github.com/openai/codex/pull/24800) Rename Python SDK `AppServerConfig` to `CodexConfig`: Removes internal App Server transport naming from the public user-facing SDK API, improving ergonomics for new Codex Python users.
5. [#24805 (OPEN)](https://github.com/openai/codex/pull/24805) Add `CODEX_ENV_FILE` support for SessionStart hooks: Lets session hooks persist shell state such as modified `PATH` values, virtual environment activation, and conda setup across all subsequent tool calls without modifying permanent user config files.
6. [#24698 (OPEN)](https://github.com/openai/codex/pull/24698) Expose MCP server info in App Server status: Enables richer native UI support for displaying MCP server connection health, version, and tool list directly inside the Codex desktop/mobile app.
7. [#24830 (OPEN)](https://github.com/openai/codex/pull/24830) Fix refresh token reuse classification: Patches a hidden auth logic bug that could incorrectly flag valid refresh token usage as unauthorized, triggering unnecessary account logouts for connected remote control clients.
8. [#24723 (OPEN)](https://github.com/openai/codex/pull/24723) Add feature-gated standalone image generation extension: Implements an independent, air-gapped image generation path that runs outside OpenAI's hosted Responses API for disconnected on-prem deployments.
9. [#24801 (OPEN)](https://github.com/openai/codex/pull/24801) Add outbound network diagnostics scaffolding: Introduces opt-in sanitized network logging that outputs redacted OAuth and proxy failure details to help users debug connectivity issues without exposing sensitive credentials.
10. [#15730 (OPEN)](https://github.com/openai/codex/pull/15730) Harden symlinked output and project config writes: Prevents symlink traversal attacks in the Codex CLI sandbox by rejecting symlinked config and output paths using the `O_NOFOLLOW` system call.

## 5. Feature Request Trends
The most requested community feature directions this week are:
1. Core UX quality of life updates for the VS Code Codex extension and desktop app, including native controls to permanently delete old tasks and hidden projects.
2. Extended Vim workflow support for the CLI/TUI, following the recent launch of Vim composer mode (a closed update for inner-word text object support was merged today).
3. MCP usability upgrades, including persistent user-configured tool approval exemptions, richer MCP server status visibility, and support for custom UI visibility metadata for registered tools.
4. Enterprise deployment tooling for Windows, including pre-built IT deployment workflows for non-admin end user environments.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1. Persistent cross-platform auth failures across desktop, iOS remote control, and enterprise agent SSO, highlighted by yesterday's widespread Hermes Agent OAuth outage.
2. Frequent sandbox execution regressions in the recent 0.131-0.133 CLI releases for Linux and WSL 2, including broken `exec_command` behavior and unexpected permission errors.
3. Excessive repeated MCP tool approval prompts that break workflow productivity for power users running 10+ tool calls per session.
4. Mismatched context limits: Codex enforces a hard 1,048,576 character input cap that translates to ~300k tokens, far under GPT-5.5's advertised 922k token maximum input, leading to unexpected session truncation.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-05-28
---

## 1. Today's Highlights
The long-awaited stable v0.44.0 release has landed, accompanied by urgent stability patches for the widely reported PTY terminal resize crash that impacted Unix users. Recent merged PRs deliver a new local prompt replay cache to cut redundant API token consumption, while multiple high-priority fixes resolve long-standing UX pain points including hanging generalist subagents and false success reports when subagents hit maximum turn limits.

## 2. Releases
Three new builds were published in the last 24 hours:
- **v0.44.0 (Stable)**: [Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0)  The official stable release concluding the v0.43 preview cycle, including full changelog support for all prior v0.43 features.
- **v0.45.0-nightly.20260527.g41c9260ca**: [Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-nightly.20260527.g41c9260ca)  Bundles a fix for devtools package bundling that resolves common npm resolution errors for new installs.
- **v0.45.0-preview.0**: [Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-preview.0)  Ships the highly requested fix for infinite relaunch and resize remount loops on Termux Android environments.

## 3. Hot Issues (Top 10)
| Issue | Details | Community Impact |
|-------|---------|------------------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | P1 bug where deferring to the generalist agent causes indefinite hangs even for trivial tasks like folder creation, resolved only by explicitly disabling sub-agent deferral. | 7 comments, 8 👍: Top-voted open bug from end users reporting blocked core workflows. |
| [#27499](https://github.com/google-gemini/gemini-cli/issues/27499) v0.44.0 UnixTerminal.resize EBADF crash | Newly reported regression in the stable 0.44 release triggering hard crashes via invalid ioctl calls during terminal resizing. | 2 comments: Fresh post-launch regression impacting all Unix desktop users. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations | Epic tracking expansion of existing behavioral eval test coverage from 76 to full coverage across all 6 supported Gemini model variants. | 7 comments: Core infrastructure priority for the engineering team to catch regressions before release. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file read/search investigation | Exploration epic to evaluate syntax-aware code navigation tools that reduce unnecessary LLM turns and cut prompt token noise by directly pulling method-level code bounds. | 7 comments, 1 👍: Widely cited proposed efficiency improvement for codebase investigation workflows. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent MAX_TURNS reported as success | P1 bug where codebase investigator reports full `GOAL` success even after exhausting allowed execution turns without completing any analysis. | 6 comments, 2 👍: Users waste time trusting incomplete subagent results. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell execution stuck at "Awaiting input" | Core bug where the CLI continues to show a running shell task state after a non-interactive command fully completes. | 4 comments, 3 👍: Frustrating UX that forces users to manually kill the session. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | Bug that breaks the browser automation subagent for Linux users running Wayland display servers. | 4 comments, 1 👍: Blocks browser tooling for millions of modern Linux desktop users. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Deterministic Auto Memory redaction | Security issue where unredacted local transcript data including secrets is passed to the background extraction model before redaction runs. | 3 comments: High-priority security hardening workstream. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error with >128 tools | Bug that throws API failures when users enable more than 128 custom tools, with no smart tool scoping to limit in-scope tool sets for specific tasks. | 3 comments: Breaks advanced MCP multi-tool workflows. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent destructive behavior guardrails | Feature request to block or warn against the model running high-risk commands like `git reset --force` or destructive database modifications when safer alternatives exist. | 2 comments, 1 👍: Highly requested safety feature for production workspace use. |

## 4. Key PR Progress
1. [#27497](https://github.com/google-gemini/gemini-cli/pull/27497) Prompt Replay Cache: New feature introducing a local `CachingContentGenerator` to cache LLM responses for duplicate prompt calls, cutting redundant token usage and speeding up repeated operations.
2. [#27496](https://github.com/google-gemini/gemini-cli/pull/27496) PTY Resize Crash Hardening: P1 core fix implementing defense-in-depth logic to prevent native libc++ crashes from race conditions where a child process exits mid-terminal-resize operation.
3. [#27467](https://github.com/google-gemini/gemini-cli/pull/27467) Multi-line Escaped Quote Shell Handling: Fixes the shell wrapper unescaping logic to correctly parse multi-line commands containing escaped quotes (e.g. multi-line git commit messages).
4. [#23236](https://github.com/google-gemini/gemini-cli/pull/23236) Browser Agent Wayland/Headless Fallback: Automatically detects missing X11/Wayland display servers and falls back to headless browser mode, resolving crashes for SSH and headless Linux users.
5. [#27215](https://github.com/google-gemini/gemini-cli/pull/27215) Non-Interactive MCP Security Hardening: Implements default-deny policy for MCP tools in headless/automated mode, requiring explicit user opt-in for auto-approved tools to prevent unvalidated execution.
6. [#22325](https://github.com/google-gemini/gemini-cli/pull/22325) Surface Subagent Termination Reasons: Preserves and reports original subagent failure states (e.g. MAX_TURNS) instead of masking them as clean successful `GOAL` completions.
7. [#23113](https://github.com/google-gemini/gemini-cli/pull/23113) Codebase Investigator Infinite Loop Fix: Adds pre-validation and a 3-turn maximum limit for schema validation errors, preventing infinite retry loops that exhaust API quota.
8. [#27101](https://github.com/google-gemini/gemini-cli/pull/27101) A2A Unsupport Metadata Listing Stop: Returns immediately when the A2A server receives a 501 error for unsupported non-in-memory task store metadata endpoints, avoiding unhandled crashes.
9. [#25605](https://github.com/google-gemini/gemini-cli/pull/25605) Termination Signal Forwarding: Adds signal handlers in the parent bootstrap process to forward SIGTERM/SIGHUP to relaunched child processes, ensuring clean process shutdown for systemd/ACP supervised deployments.
10. [#26088](https://github.com/google-gemini/gemini-cli/pull/26088) F10 Approval Mode Fallback: Adds F10 as an alternative keybind for cycling approval modes, fixing broken workflows for Windows/WezTerm users where Shift+Tab sequences are incorrectly parsed.

## 5. Feature Request Trends
The top requested feature directions from the latest open issues are:
1. **AST-Native Codebase Tooling**: Syntax-aware file reads, search, and code mapping to reduce LLM turns, cut token overhead and improve code navigation accuracy.
2. **Auto Memory Maturity**: Fixes to eliminate silent invalid patch drops, infinite low-signal session retries, and deterministic secret redaction for the background memory extraction system.
3. **Browser Agent Resilience**: Support for persistent locked session takeover, automatic orphan process cleanup, and full respect for user-defined settings.json configuration overrides.
4. **Backgroundable Local Subagents**: Allow users to send non-blocking exploration, linting and build subagents to run in the background via a Ctrl+B hotkey without interrupting their main CLI workflow.
5. **Server-Driven Model Management**: Centralize remote model list fetching via the LoadCodeAssist endpoint to eliminate local config churn, enable dynamic model routing and roll out new model capabilities faster.

## 6. Developer Pain Points
Recurring high-impact frustrations reported by users:
1. **Frequent Unplanned Hangs & Crashes**: Race condition triggered PTY resize crashes, indefinite generalist subagent hangs, and stuck "awaiting user input" states after shell commands complete are the top reported stability issues.
2. **Agent Capability Gaps**: The model rarely invokes user-defined custom skills or sub-agents automatically, ignoring obvious use cases unless users explicitly prompt it to do so.
3. **Unreliable State Reporting**: Subagents mask failure states as successful completions, leading users to waste hours acting on incomplete or incorrect output.
4. **Edge Case Compatibility Gaps**: Broken core workflows on Wayland, Termux, and inconsistent keyboard binding behavior for Windows/WezTerm users break workflows for a large subset of the user base.
5. **Unaddressed Security Risks**: No built-in guardrails to prevent high-risk destructive commands like force git operations or database modifications from running without explicit user confirmation.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-05-28
---
## 1. Today's Highlights
Five consecutive 1.0.55-series patch releases rolled out in the last 24 hours, most notably enabling the new cell-based terminal renderer for all users by default and launching the new `/autopilot <objective>` (alias `/goal`) command to lock autopilot workflows to explicit user-defined targets. Multiple long-standing Linux input/clipboard regressions were marked resolved, while enterprise requests for organization-owned PAT permission controls and corporate SSL inspection support gained record community traction. No new public pull request activity was logged in the 24-hour reporting window.

## 2. Releases
All new 1.0.55-series releases are live on the public distribution channel:
- **v1.0.55-6**: Adds the `/autopilot <objective>` focused workflow command, enables the cell-based terminal renderer globally, adds visible warnings when organization policy blocks remote-controlled sessions, and delivers persistent extension log file capture.
- **v1.0.55-5**: Moves MCP configuration to its own dedicated full-screen UI, with scrollable server and tool lists for long content that previously would overflow the visible viewport.
- **v1.0.55-3**: Adds real-time progress streaming for long-running hooks in the session timeline, exposes the `pluginDirectories` parameter on the `session.create`/`session.resume` RPC for SDK clients to mount Open Plugins-format directories per session, and adds one-tap remote session deletion directly from the session picker.
- **v1.0.55-2 + v1.0.55-4**: Deliver underlying stability, parsing, and edge-case bug fixes.

## 3. Hot Issues
Top 10 high-impact updated community issues (sorted by engagement):
1. [Issue #223](https://github.com/github/copilot-cli/issues/223) (Open): "Copilot Requests" permission missing from org-owned fine-grained token creation flows. 72 👍, 22 comments. This is the highest-voted enterprise feature request, blocking organizations that ban user-owned PATs for Copilot automation use cases.
2. [Issue #2205](https://github.com/github/copilot-cli/issues/2205) (Open): Terminator terminal mouse scroll navigates input history instead of output history. 12 👍, 11 comments. Affects all new users after the default cell-based renderer rollout, breaking standard terminal output navigation workflows.
3. [Issue #3439](https://github.com/github/copilot-cli/issues/3439) (Open): 1.0.49 TUI rendering lag in tmux on Cygwin/mintty for Windows. 7 comments. The regression causes frozen sessions and stuttering spinners for Windows power users running Copilot CLI in WSL/Cygwin terminals.
4. [Issue #146](https://github.com/github/copilot-cli/issues/146) (Open): Copilot CLI should respect native VS Code configuration including shared mcp.json settings. 10 👍, 6 comments. Top quality-of-life request to eliminate duplicate config setup between the editor and CLI.
5. [Issue #333](https://github.com/github/copilot-cli/issues/333) (Open): "fetch failed" connection errors in corporate environments with SSL inspection. 4 comments, 4 👍. Blocks adoption for thousands of enterprise users that run MITM SSL inspection on all internal traffic, even when corporate certs are installed in system keychains.
6. [Issue #1826](https://github.com/github/copilot-cli/issues/1826) (Open): Multi-root workspace support via .code-workspace files. 11 👍, 3 comments. Fills a major gap for developers using Copilot CLI alongside VS Code linked sessions with multi-folder workspaces.
7. [Issue #3483](https://github.com/github/copilot-cli/issues/3483) (Closed): Copy to clipboard broken on Ubuntu GNOME. 5 👍, 3 comments. Recently resolved 1.0.49 regression affecting native Linux input workflows.
8. [Issue #3543](https://github.com/github/copilot-cli/issues/3543) (Open): 15-30 second startup freeze caused by unbounded recursive glob over directories set in `COPILOT_CUSTOM_INSTRUCTIONS_DIRS`. Breaks startup performance for users who point the variable at top-level directories such as their home folder.
9. [Issue #3539](https://github.com/github/copilot-cli/issues/3539) (Open): System/tools MCP schemas consume 73% of the 200k default context window, triggering immediate auto-compaction on new sessions. Breaks usable context capacity for users with ~10+ MCP servers configured.
10. [Issue #3544](https://github.com/github/copilot-cli/issues/3544) (Closed): Non-interactive `-p` mode does not write assistant response text to stdout. Recently fixed regression that broke CI/CD and headless automation workflows relying on programmatic Copilot CLI output.

## 4. Key PR Progress
No public pull requests received new updates, merges, or review activity in the 24-hour reporting window. All recent engineering changes are shipped directly as public patch releases in the 1.0.55 release train, as listed in the Releases section.

## 5. Feature Request Trends
The most consistent requested feature directions from recent community issues:
1. Enterprise authentication parity: Full support for organization-owned fine-grained Copilot Requests permissions, and native corporate SSL proxy certificate handling.
2. MCP/Plugin ecosystem improvements: Auto-update functionality for installed plugins, Claude-compatible schema support for shared agent profiles, and expanded per-session plugin mounting for SDKs.
3. IDE configuration parity: Unify Copilot CLI settings with existing VS Code Copilot configurations to eliminate duplicate setup steps.
4. Multi-root workspace support: Add parsing of .code-workspace files to pull context from all linked workspace folders.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. Post new renderer regressions: Multiple terminal-specific mouse scroll, TUI lag, and viewport overflow bugs after the global cell-based renderer rollout.
2. Context window bloat: Moderate numbers of MCP servers cause tool schemas to eat 70%+ of the default 200k context window immediately on session start, triggering unnecessary auto-compaction.
3. Platform input regressions: Spate of 1.0.49+ copy/paste regressions across Linux GNOME Wayland, WSL2 ARM64, and alternate terminal emulators.
4. Startup performance: Unbounded recursive directory scanning for custom instruction directories causes multi-second freezes for users with large root directories in scope.
5. Non-interactive mode breakages: Multiple bugs that prevent raw response output from being written to stdout, breaking headless automation and pipeline use cases.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-05-28
---
## 1. Today's Highlights
Overnight, the MoonshotAI team shipped the 1.45.0 stable release with two targeted quality-of-life fixes for core CLI workflows. Community contributors have already submitted aligned PRs to resolve the newly reported TUI markdown rendering bug, alongside a long-awaited API key pool feature to eliminate 429 rate limit failures for parallel subagent runs. The project also rolled out official documentation updates to announce the official transition from the legacy Python-based kimi-cli to the newer TypeScript Kimi Code rewrite.

## 2. Releases
### v1.45.0 (newly published in last 24h)
Two key changes included in this release:
1. Fixed a misleading error state that incorrectly showed "Quota exceeded" for every 403 shell response, not just actual quota depletion ([PR #2342](https://github.com/MoonshotAI/kimi-cli/pull/2342))
2. Upgraded the toolset deduplication logic with sparse reminder prompts and standardized canonical argument handling to avoid redundant duplicate tool calls ([PR #23](https://github.com/MoonshotAI/kimi-cli/pull/23))

## 3. Hot Issues (6 total recently updated items)
All 6 issues modified in the last 24h are high-priority for active developers:
1. [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) (Open, 5 comments): Intermittent full page refresh bug for Kimi Web users on Windows 11, which interrupts long-running coding sessions and unsaved input. Reported by 1 user with 1 community upvote, no fix is currently scheduled.
2. [#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) (Closed): Resolved @mention file path resolution failure for users referencing files inside their home `~` directory on macOS x86, eliminating confusing "file not found" errors.
3. [#2368](https://github.com/MoonshotAI/kimi-cli/issues/2368) (Open): Rate limit contention bug for concurrent subagents, where 3-4 parallel coder/explore tasks sharing a single root API key trigger 429 errors and hanging sessions. This is a top pain point for multi-task agent workflow users.
4. [#2379](https://github.com/MoonshotAI/kimi-cli/issues/2379) (Open): TUI markdown list wrapping bug on Linux for v1.45.0, which drops characters and splits words incorrectly when list items wrap to new lines, breaking output readability.
5. [#2376](https://github.com/MoonshotAI/kimi-cli/issues/2376) (Open): Documentation enhancement request to add a clear deprecation banner on the legacy GitHub Pages site, to redirect new users to the actively maintained TypeScript `kimi-code` rewrite instead of the superseded Python codebase.
6. [#2375](https://github.com/MoonshotAI/kimi-cli/issues/2375) (Open): Feature request for native abort signal propagation to the HTTP fetch layer, to replace the current cooperative-only cancellation system that can take multiple seconds to terminate stuck generation streams.

## 4. Key PR Progress (7 total recently updated items)
All 7 active PRs modified in the last 24h target critical bug fixes and workflow improvements:
1. [#2380](https://github.com/MoonshotAI/kimi-cli/issues/2380) (Open): Community-submitted TUI fix that prevents character loss and word splitting when wrapping markdown lists, directly resolving the recently reported #2379 bug.
2. [#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) (Open): New API key pool feature implementing a round-robin allocation system for parallel subagent runs, fully closing the rate limit contention issue #2368.
3. [#2378](https://github.com/MoonshotAI/kimi-cli/pull/2378) (Closed): Docs fix for broken auto language redirect logic, that correctly routes users to locale-specific docs pages under the GitHub Pages subpath instead of failing on root level navigation.
4. [#2377](https://github.com/MoonshotAI/kimi-cli/pull/2377) (Closed): Official documentation update adding a dismissible top-of-site banner and migration copy across the README, homepage, and getting started guides, notifying all users of the transition to the new TypeScript Kimi Code successor project.
5. [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) (Open): Fix routing all MCP server log notifications to loguru instead of dumping them directly to the terminal TUI, to prevent noisy logs from tools like SearXNG from polluting active coding session output.
6. [#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) (Open): Tolerance fix for non-UTF8 worker output, which prevents hard UnicodeDecodeError crashes on Windows when child processes return locale-encoded bytes (e.g. cp1252 smart punctuation).
7. [#2335](https://github.com/MoonshotAI/kimi-cli/pull/2335) (Open): Docs fix for broken Notification hook matcher examples, replacing the non-functional `permission_prompt` sample with valid background task notification types to eliminate developer confusion.

## 5. Feature Request Trends
The highest priority feature directions from recent community submissions are:
1. Multi-agent execution reliability: Native rate limit isolation for parallel subagent workflows to avoid shared API key contention.
2. Responsive control UX: Immediate, non-cooperative stream cancellation to stop long-running generations instantly instead of waiting for await boundaries.
3. Smooth project transition: Official deprecation tooling for legacy documentation to direct new users to the actively maintained TypeScript Kimi Code codebase.
4. TUI rendering polish: Consistent, bug-free line wrapping for long markdown outputs to improve readability of large code generation results.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced from recent updates:
1. Platform-specific hard crashes on Windows: Non-UTF8 locale encoded output from child processes triggers unexpected Unicode decode errors that hide actual worker failure context.
2. Unreliable parallel subagent runs: Shared single API keys for concurrent tasks cause unplanned 429 rate limits and hanging sessions that break batch multi-task coding workflows.
3. Unresponsive cancellation: The current cooperative cancel system is too slow for users who need to stop erroneous or stuck generations immediately.
4. Outdated public documentation: Search engines still heavily index the legacy Python CLI documentation, leading new users to land on unmaintained, deprecated resources instead of the current Kimi Code project.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-05-28
---
## 1. Today's Highlights
OpenCode shipped the v1.15.11 release today with core reliability improvements for LLM provider requests and a major performance update for experimental background agents, eliminating the need for client-side polling of task state. Two of the most long-standing, highest-voted community bugs — the TUI Shift+Enter newline failure and DeepSeek V4 Pro reasoning content handling error — were formally resolved in the last 24 hours, alongside nearly 20 merged quality-of-life PRs targeting TUI UX, multi-provider compatibility and startup stability.
---
## 2. Releases
### v1.15.11
The latest stable release rolls out 3 key core improvements:
1. Added configurable `headerTimeout` for provider requests, with a 10s default for standard OpenAI setups
2. Experimental background agents now push real-time state updates to clients instead of requiring repeated polling
3. Users may now define only `modalities.input` or `modalities.output` in config, instead of requiring both fields (community contribution from @robposch)
A partial remote-backed feature remains in active unfinished development.
---
## 3. Hot Issues (Top 10 Notable)
All issue links follow the format: `https://github.com/anomalyco/opencode/issues/[ID]`
1. [#1505](https://github.com/anomalyco/opencode/issues/1505) [CLOSED] Shift+Enter keybinding not working in opentui: With 125 comments and 100 upvotes, this 10-month old bug affecting terminal power users was the most complained about UX issue in the codebase, with the non-intuitive `ctrl+j` newline workaround widely reported as a barrier for new TUI users.
2. [#29079](https://github.com/anomalyco/opencode/issues/29079) [OPEN] GPT models take multi-minutes to respond intermittently: 96 comments, 46 upvotes, with hundreds of users reporting random extreme latency even for trivial code modification prompts. The community is submitting debug logs to narrow down root cause between provider-side throttling and OpenCode request routing logic.
3. [#24569](https://github.com/anomalyco/opencode/issues/24569) [CLOSED] DeepSeek V4 Pro (OpenRouter) reasoning_content error on v1.14.27: 28 comments, 12 upvotes, a critical breaking issue that prevented all use of DeepSeek's high-performance reasoning code models. The formal fix was merged and released in v1.15.11.
4. [#27906](https://github.com/anomalyco/opencode/issues/27906) [OPEN] v1.15.1+ breaks Bun installs: 16 comments, 9 upvotes, new required postinstall lifecycle scripts conflict with Bun's default security policy that blocks postinstall execution for global packages, leaving many Bun users unable to upgrade to latest stable builds.
5. [#20802](https://github.com/anomalyco/opencode/issues/20802) [OPEN] Image attachments fail to reach vision models on custom OpenAI-compatible providers: 12 comments, breaks vision workflows for self-hosted and third-party providers following the OpenAI API schema, forcing users to manually convert images to base64 as a workaround.
6. [#14891](https://github.com/anomalyco/opencode/issues/14891) [CLOSED] Add OpenAI Realtime WebSocket API support: 8 comments, 20 upvotes, long-awaited feature to replace legacy REST-based realtime interactions that will drastically cut voice and streaming response latency, scheduled to ship in the next minor release.
7. [#28945](https://github.com/anomalyco/opencode/issues/28945) [OPEN] DeepSeek reasoning_content not preserved across tool calls: 5 comments, 7 upvotes, remaining unresolved DeepSeek compatibility bug that throws fatal HTTP 400 errors during multi-step tool calls (e.g. LSP sessions) for reasoning model users.
8. [#29548](https://github.com/anomalyco/opencode/issues/29548) [OPEN] Default 10s OpenAI header timeout causes failures on v1.15.11: 5 comments, new regression reported immediately after the latest release, affecting users on high-latency geographically distant connections to OpenAI endpoints, resolved temporarily by manually increasing the `headerTimeout` config value.
9. [#12156](https://github.com/anomalyco/opencode/issues/12156) [CLOSED] Native Kimi (Moonshot AI) authentication support: 5 comments, 2 upvotes, popular regional feature request resolved this 24h, removing the requirement for users to manually set up Kimi as a custom OpenAI-compatible provider.
10. [#17796](https://github.com/anomalyco/opencode/issues/17796) [OPEN] TUI copy via selection no longer works: 15 comments, broken core UX that shows a false "text copied to clipboard" message without actually moving selected text to the system clipboard, no public fix ETA as of this digest.
---
## 4. Key PR Progress (Top 10 High-Impact)
All PR links follow the format: `https://github.com/anomalyco/opencode/pull/[ID]`
1. [#26090](https://github.com/anomalyco/opencode/pull/26090) [OPEN] Expose LLM response headers on assistant messages: New feature that surfaces metadata headers like `x-litellm-model` from LiteLLM auto-router proxies directly in conversation history, letting users verify exactly which model served their request when using dynamic routing.
2. [#29635](https://github.com/anomalyco/opencode/pull/29635) [OPEN] Report invalid agent/mode configs instead of crashing: Critical reliability fix that changes startup behavior to throw non-blocking warnings for malformed custom agent configs, instead of aborting full platform startup due to a single broken user configuration.
3. [#24674](https://github.com/anomalyco/opencode/pull/24674) [CLOSED] Preserve terminal selection when copy-on-select is disabled: TUI UX fix that fully resolves the broken copy-via-selection issue (#17796) for users who opted out of the automatic copy on text selection flag.
4. [#24666](https://github.com/anomalyco/opencode/pull/24666) [CLOSED] Add model.before plugin hook: New public plugin API that lets third-party extensions rewrite provider and model IDs before a chat completion is dispatched, enabling use cases including smart model routing, dynamic cost caps, and enterprise compliance checks.
5. [#24612](https://github.com/anomalyco/opencode/pull/24612) [CLOSED] Dynamically load full model list from LM Studio: Removes the old hardcoded 3-model static list for LM Studio users, now automatically pulling the full inventory of locally running models directly from the LM Studio API.
6. [#24659](https://github.com/anomalyco/opencode/pull/24659) [CLOSED] Add SIGINT/SIGTERM graceful shutdown handling for TUI: Prevents corrupted session state and orphaned file watcher processes when users close TUI sessions via terminal interrupt signals or OS system shutdowns.
7. [#27654](https://github.com/anomalyco/opencode/pull/27654) [OPEN] Fix subagent permission override logic: Resolves the multi-version bug where explicit `edit:allow` permissions defined for custom subagents were incorrectly overridden by parent agent `edit:deny` rules, breaking custom subagent workflows.
8. [#24678](https://github.com/anomalyco/opencode/pull/24678) [CLOSED] Disable in-app updater for non-AppImage Linux installs: Prevents the broken silent update flow for DEB/RPM distribution builds on Linux that previously attempted to restart the app without actually applying new updates.
9. [#29631](https://github.com/anomalyco/opencode/pull/29631) [CLOSED] Add MCP prompt notification handling for TUI: Brings TUI feature parity with the desktop app for MCP native prompts and auto-submit flows, a long requested update for terminal-only MCP power users.
10. [#24572](https://github.com/anomalyco/opencode/pull/24572) [CLOSED] Prevent negative cost display in TUI sidebar: Fixes the widely reported cosmetic bug where cached tokens exceeding input token count would lead to negative dollar values in the TUI cost tracking UI.
---
## 5. Feature Request Trends
The 24h issue pipeline highlights 4 core priority directions for the community:
1. Expanded regional and niche provider ecosystem support, including native auth for popular local coding models (Kimi, DeepSeek) and new specialist providers (CommandCode

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-05-28
---
## 1. Today's Highlights
Today’s lead update is the launch of Pi v0.76.0, which delivers two long-awaited automation features: explicit user-defined session IDs for scripted workflows, and an RPC flag to exclude bash command output from the model’s context window to cut token bloat. Merged PRs include critical compatibility fixes for Windows, tmux, and JetBrains terminal environments, alongside official support for the NVIDIA NIM LLM inference provider. Top community discussions are focused on a persistent OpenAI Codex hanging bug, a proposed official native local LLM provider, and high-impact TUI usability improvements for power users.

## 2. Releases
### [v0.76.0](https://github.com/badlogic/pi-mono/releases/tag/v0.76.0) (published 2026-05-28)
The new release adds two core features:
1.  Explicit project-local session IDs via the `--session-id <id>` CLI flag, letting automation scripts create, resume, or reference predefined sessions without relying on auto-generated naming conventions
2.  A new `excludeFromContext` parameter for the RPC `bash` command, enabling RPC clients to run shell operations without injecting full command output into the agent’s model context.

## 3. Hot Issues (Top 10 Notable)
All linked issues are from the official [earendil-works/pi](https://github.com/earendil-works/pi) repo:
1.  [#4945](https://github.com/earendil-works/pi/issues/4945): *OpenAI Codex hangs on "Working..." with zero-usage aborted turns* (37 comments, 21 👍) — The highest-engagement open bug, impacting thousands of Codex users who get stuck in unresponsive TUI states requiring a forced Escape exit. Community members have validated that recent websocket timeout improvements resolve partial edge cases, with a full root cause still under investigation.
2.  [#3357](https://github.com/earendil-works/pi/issues/3357): *Official local LLM provider extension* (22 comments, 33 👍) — The most upvoted feature request, asking for a native provider that dynamically fetches the model list from the standard `{baseUrl}/models` endpoint to natively support Ollama, llama.cpp, LM Studio and other self-hosted inference runtimes.
3.  [#3259](https://github.com/earendil-works/pi/issues/3259): *Regression: Shift+Enter no longer inserts newline inside Zellij* (16 comments) — A high-impact UX break for power users running Pi inside the popular Zellij terminal multiplexer, with multiple iterations of fixes being iterated on by core contributors.
4.  [#2023](https://github.com/earendil-works/pi/issues/2023): *Add pi.runWhenIdle() to schedule work after the agent has fully settled* (11 comments) — Extension developers are requesting a formal API to queue background tasks after the agent finishes processing a turn, eliminating the hacky workaround of sending follow-up user messages via the internal API.
5.  [#5023](https://github.com/earendil-works/pi/issues/5023): *Terminal scrolls to beginning without reason* (7 comments) — An annoying unprompted UX bug that randomly jumps the terminal viewport during model generation, marked resolved after a recent TUI refactor.
6.  [#4160](https://github.com/earendil-works/pi/issues/4160): *Pi extensions do not play nice with Bun* (7 comments) — A major compatibility gap for users who run Bun as their only JS runtime without Node/npm installed, leading to failed extension installs. Closed as part of a large ongoing runtime refactor.
7.  [#5089](https://github.com/earendil-works/pi/issues/5089): *Doesn't respect timeoutMs past a certain value* (5 comments) — Users running large local LLMs on low-power CPU hardware cannot set long enough operation timeouts, leading to unexpected mid-generation timeouts for 20B+ parameter models.
8.  [#5040](https://github.com/earendil-works/pi/issues/5040): *PI_CODING_AGENT_SESSION_DIR forces flat storage* (3 comments) — Users who customize their session storage location are experiencing cross-project session leaks, as the cwd-scoped nested session folder logic is disabled when the custom env var is set.
9.  [#5065](https://github.com/earendil-works/pi/issues/5065): */exit command leaves terminal in broken Kitty keyboard protocol state* (1 comment) — High-severity TUI bug that leaves the parent terminal unusable after exiting Pi, with all subsequent keypresses outputting raw escape sequences.
10. [#5044](https://github.com/earendil-works/pi/issues/5044): *OOM for pi --resume on large sessions* (1 comment) — Users with months-long 200MB+ JSONL session files experience out-of-memory crashes when loading the session list, as Pi currently loads the full file into memory instead of streaming it.

## 4. Key PR Progress
1.  [#5076](https://github.com/earendil-works/pi/pull/5076) (Closed): *feat(session): Explicit session id naming* — Implements the new v0.76.0 `--session-id` flag as requested in #4874, letting users create or resume sessions with a user-defined string ID.
2.  [#5090](https://github.com/earendil-works/pi/pull/5090) (Closed): *feat: add NVIDIA NIM provider* — Adds official first-class support for NVIDIA's OpenAI-compatible hosted inference endpoint, enabling users to run DeepSeek V4, Llama 3 and other NVIDIA-hosted models without custom config workarounds.
3.  [#5086](https://github.com/earendil-works/pi/pull/5086) (Closed): *Fix OpenAI GPT-5.5 context window* — Updates the hardcoded GPT-5.5 context size from the temporary 272K value to the official OpenAI 1.05M token context window, resolving unexpected context truncation for large workloads.
4.  [#5093](https://github.com/earendil-works/pi/pull/5093) (Closed): *fix: resolveConfigValue corrupts literal API keys via case-insensitive env var on Windows* — Patches the Windows-specific bug where `process.env["public"]` matched the system PUBLIC user path, corrupting literal string configuration values and breaking OpenAI free tier auth.
5.  [#5097](https://github.com/earendil-works/pi/pull/5097) (Closed): *fix(tui): support inline images and arrow keys inside tmux* — Adds proper tmux capability detection and CSI-u arrow key parsing, fixing broken inline image rendering and unrecognized navigation inputs for tmux power users.
6.  [#5091](https://github.com/earendil-works/pi/pull/5091) (Open): *fix(tui): harden keyboard protocol negotiation* — Core maintainer's latest attempt to resolve the long-running Shift+Enter newline regression inside Zellij.
7.  [#5060](https://github.com/earendil-works/pi/pull/5060) (Closed): *feat(ai): add custom fetch hook to StreamOptions and ImagesOptions* — Exposes a configurable custom fetch function across all major LLM providers, letting users inject custom proxies, auth layers, or telemetry for all model requests, resolving feature request #3987.
8.  [#5072](https://github.com/earendil-works/pi/pull/5072) (Closed): *fix(coding-agent): save enabledModels to project settings instead of global* — Fixes the cross-project leak of model enable/disable settings, letting different codebases maintain fully isolated model configuration profiles.
9.  [#5037](https://github.com/earendil-works/pi/pull/5037) (Closed): *fix(tui): provide the JetBrains terminal capabilities* — Adds proper true color support flags for WebStorm and other JetBrains IDE embedded terminals, fixing broken syntax highlighting and rendering issues.
10. [#4911](https://github.com/earendil-works/pi/pull/4911) (Open): *feat(ai): add Codex device code login* — Implements a browser-based device flow login for OpenAI Codex, eliminating the need for new users to manually copy-paste API keys.

## 5. Feature Request Trends
The top requested feature directions from the community are:
1.  **First-class local LLM support**: A native, zero-config local LLM provider that auto-discovers models from standard OpenAI-compatible self-hosted endpoints (Ollama, llama.cpp, LM Studio)
2.  **Extension API expansions**: New low-level APIs for extension developers including idle task scheduling hooks, native multi-select UI components, and custom HTTP request injection
3.  **TUI quality of life upgrades**: Sticky pinned prompt footers, standard emacs-style Ctrl-P/Ctrl-N navigation in selection menus, and broader compatibility across niche terminals
4.  **Native multi-agent orchestration**: Built-in support for routing tasks to separate specialized agents with isolated system prompts, tool sets, and session context for complex multi-step workloads.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by the community:
1.  Persistent TUI compatibility gaps across multiplexers (Zellij, tmux) and niche terminal emulators (Kitty, JetBrains) leading to broken keyboard input, unresponsive UI, and corrupted terminal state after Pi exits
2.  Subpar local LLM workflow experience:

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-05-28
---
## 1. Today's Highlights
QwenLM released three sequential builds (stable v0.16.2, v0.16.1-preview.0, and 2026-05-27 nightly) in the past 24 hours, all patching the long-recurring TS5055 TypeScript build break caused by stale intermediate compilation outputs. The maintainer team landed a batch of high-impact daemon mode features that extend remote API capabilities, shell execution support, and observability for self-hosted deployments. The community submitted 30 updated issues covering critical authentication edge cases, Windows shell compatibility gaps, and creative third-party integration proposals.

## 2. Releases
All 3 new releases published in the last 24 hours carry the same core build fix from contributor @doudouOUC:
- **v0.16.2 (Stable)**: Official stable build for general users, pre-installation build error eliminated
- **v0.16.1-preview.0**: Pre-release build for early testers
- **v0.16.1-nightly.20260527.641a1a739**: Nightly rolling build for development validation
Full change set: https://github.com/QwenLM/qwen-code/pull/4453

## 3. Hot Issues
| Issue # | Status | Description & Community Impact | GitHub Link |
|---------|--------|--------------------------------|-------------|
| #4276 | Closed | Resolved high-severity OOM memory crash that affected users running multi-hour coding sessions, with 10 user comments confirming they faced unexpected full session exits due to unmanaged memory usage. | https://github.com/QwenLM/qwen-code/issues/4276 |
| #656 | Open (P1) | Critical long-running bug that causes 100% of user requests to return 400 `InternalError.Algo.InvalidParameter` errors, even when zero configuration changes were made mid-coding session, affecting 10+ reported users. | https://github.com/QwenLM/qwen-code/issues/656 |
| #299 | Closed | Highly upvoted (3 👍) UX bug requesting alignment of new line shortcut from Alt+Enter to Shift+Enter to match common IDE muscle memory, alongside fixes for broken multi-line text pasting, now fully resolved. | https://github.com/QwenLM/qwen-code/issues/299 |
| #4493 | Open | JetBrains Rider users are completely blocked from logging into Qwen Code due to a persistent OAuth web redirect loop that breaks Alibaba Cloud token plan binding flows. | https://github.com/QwenLM/qwen-code/issues/4493 |
| #4317 | Open | Users experience 504 gateway timeouts during Google SSO device token polling, blocking all access to Qwen Code features for affected accounts after login expiry. | https://github.com/QwenLM/qwen-code/issues/4317 |
| #4537 | Closed | Fixed dangerous edge case where the AI agent kills the Qwen Code Node.js CLI process when executing `taskkill /F /IM node.exe` to stop Vite dev servers, leading to full loss of unsaved session progress. | https://github.com/QwenLM/qwen-code/issues/4537 |
| #4566 | Open | Community proposed integration with the open-source WinkTerm terminal, which shares the same PTY session between AI and user to enable native human-in-the-loop remote SSH operation workflows. | https://github.com/QwenLM/qwen-code/issues/4566 |
| #4579 | Open | Core session management bug that throws a false "compressed turn" error when users try to rewind conversations after sending ad-hoc mid-task messages, even when no actual session compression was performed. | https://github.com/QwenLM/qwen-code/issues/4579 |
| #4568 | Open | Monorepo users cannot access files inside Git submodules via the `@` file reference autocomplete feature, only root repository files are visible in suggestions, significantly reducing productivity for large codebase users. | https://github.com/QwenLM/qwen-code/issues/4568 |
| #4561 | Open | Windows users face severe frequent UI screen flickering when running tasks in the compact "hide thinking process" mode, making long interactive sessions unusable. | https://github.com/QwenLM/qwen-code/issues/4561 |

## 4. Key PR Progress
| PR # | Feature / Fix Summary | GitHub Link |
|------|-----------------------|-------------|
| #4560 | Adds explicit UI warning + automatic settings recovery for corrupted/invalid `settings.json` files, fixing the previously silent failure that dropped users unexpectedly into the first-time setup wizard. | https://github.com/QwenLM/qwen-code/pull/4560 |
| #4552 | Implements new runtime MCP server add/remove HTTP routes for daemon mode, allowing users to register/unregister new tool integrations dynamically without restarting the daemon process. | https://github.com/QwenLM/qwen-code/pull/4552 |
| #4576 | Adds dedicated server-side shell execution API for daemon mode, running `!` (bang) prefixed commands directly and bypassing the LLM entirely for faster, more reliable remote terminal execution. | https://github.com/QwenLM/qwen-code/pull/4576 |
| #4570 | Adds new built-in `/triage` AI skill that automates PR and open issue triage workflows, drastically reducing manual maintenance overhead for open source projects using Qwen Code. | https://github.com/QwenLM/qwen-code/pull/4570 |
| #4520 | Implements automatic truncation for oversized tool execution outputs, preventing unbounded results from overflowing the model context window while saving the full uncropped log to an accessible temporary file. | https://github.com/QwenLM/qwen-code/pull/4520 |
| #4564 | Adds full persisted token usage accounting, extending the `/stats` command to show daily/monthly token usage breakdown by model, with CSV/JSON export support for full cost visibility. | https://github.com/QwenLM/qwen-code/pull/4564 |
| #4555 | Builds a standard MCP bridge layer for the `qwen serve` daemon, making Qwen Code fully compatible with all MCP-native clients including Claude Desktop, Cursor, and Qoder. | https://github.com/QwenLM/qwen-code/pull/4555 |
| #4573 | Launches full context token usage visibility API for the web shell, modularizes the web UI provider architecture, and improves dialog UX for browser-based Qwen Code deployments. | https://github.com/QwenLM/qwen-code/pull/4573 |
| #4431 | Fixes a long-unnoticed bug where atomic file writes overwrote the original UID/GID of modified files, breaking file permission rules in multi-user shared development environments. | https://github.com/QwenLM/qwen-code/pull/4431 |
| #4549 | Adds an automated CI PR review workflow that runs the bundled `/review` skill to perform AI-powered code reviews on new PRs, triggered by comment commands or on PR open. | https://github.com/QwenLM/qwen-code/pull/4549 |

## 5. Feature Request Trends
1. **Daemon mode top priority**: Users are heavily requesting a persistent background daemon runtime with web UI access, supporting remote SSH/terminal operation and no-restart dynamic tool management for 24/7 self-hosted deployments.
2. **Ecosystem interoperability**: The community is pushing for deeper compatibility with the MCP protocol, GitHub Actions native integration, and third-party terminal platforms to extend Qwen Code's tool reach far beyond local CLI usage.
3. **Built-in productivity skills**: Maintainers and developers are asking for out-of-the-box workflow skills including the `/simplify` code refactoring skill and AI PR/issue triage skill to eliminate repetitive manual work.
4. **Windows

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest | 2026-05-28
---
## 1. Today's Highlights
Today’s top announcement is the official v0.8.47 release that formally rebrands the project from DeepSeek TUI to **CodeWhale**, with backwards-compatible deprecation shims for legacy binaries to avoid breaking existing user installations. The past 24 hours have seen 10+ stacked PRs merged or staged, laying foundational work for cross-platform shell agnosticism, new third-party LLM provider support, and persistent granular permission controls. Multiple high-severity, long-running user-reported bugs spanning Windows, macOS, and Homebrew distribution pipelines were resolved in the v0.8.47 release window.

## 2. Releases
### v0.8.47 (Verification Gate, Goal Tools, DuckDuckGo Default)
Full rebrand of the project to CodeWhale, with backwards-compatible `deepseek` and `deepseek-tui` legacy shims that print a deprecation warning and forward calls to the new `codewhale` / `codewhale-tui` binaries. These legacy aliases will be fully removed in v0.9.0, with full rebrand documentation published at `docs/REBRAND.md`. Additional new features include an output verification gate for AI-generated code, built-in goal tracking tools, and DuckDuckGo set as the default web search provider for unauthenticated users.

## 3. Hot Issues (10 Noteworthy Entries)
| Issue Link | Status | Summary & Significance |
|---|---|---|
| [#1615](https://github.com/Hmbown/CodeWhale/issues/1615) | Closed | Highest-volume bug thread (190 comments) resolving the full Docker PTY locale mapping failure that caused garbled TUI output and required forced full Linux server restarts for Docker users. |
| [#1757](https://github.com/Hmbown/CodeWhale/issues/1757) | Open | Highly requested UX feature that automatically restores the last canceled request text to the TUI input box when users press Ctrl+C mid-request, eliminating the pain of manually copying text from tool output panes. |
| [#1676](https://github.com/Hmbown/CodeWhale/issues/1676) | Open | User-proposed "Dual" dual-model routing mode, which uses DeepSeek V4-Pro for reasoning/planning and 6x cheaper DeepSeek V4-Flash for all tool execution tasks to cut total inference costs without major quality loss. |
| [#2104](https://github.com/Hmbown/CodeWhale/issues/2104) | Closed | Critical post-rebrand Homebrew distribution bug that broke upgrades for all macOS users, resolved just prior to v0.8.47 launch. |
| [#2261](https://github.com/Hmbown/CodeWhale/issues/2261) | Open | High-severity Windows bug where TUI process crashes or lost input focus leaks user keystrokes directly to PowerShell, which can accidentally run arbitrary unplanned commands on the user’s host system. |
| [#2052](https://github.com/Hmbown/CodeWhale/issues/2052) | Closed | macOS gatekeeper untrusted binary warning that blocked all standalone binary users from launching CodeWhale, fixed with a new official binary notarization workflow for v0.8.47. |
| [#2247](https://github.com/Hmbown/CodeWhale/issues/2247) | Open | Top request from self-hosted LLM users: add native support for arbitrary DeepSeek-compatible third-party API providers and local self-deployed DeepSeek instances, rather than only supporting official DeepSeek API endpoints. |
| [#2264](https://github.com/Hmbown/CodeWhale/issues/2264) | Open | Maintainer-endorsed proposal for a system-wide enforced prefix caching invariant targeting >99% cache hit rates, which would drastically reduce user inference costs and latency. |
| [#2211](https://github.com/Hmbown/CodeWhale/issues/2211) | Open | Release-blocker bug that causes full TUI saturation and UI freezes during complex multi-agent parallel sub-workflow tasks, marked high-priority for the next point release. |
| [#1224](https://github.com/Hmbown/CodeWhale/issues/1224) | Open | Long-running quality of life request to consolidate all scattered config files across the filesystem to a single unified `~/.deepseek/` top-level directory. |

## 4. Key PR Progress (10 Important Entries)
| PR Link | Status | Feature / Fix Description |
|---|---|---|
| [#2290](https://github.com/Hmbown/CodeWhale/pull/2290) | Open | First entry in the stacked cross-platform shell refactor, adding a standalone ShellDispatcher abstraction that eliminates the old hardcoded `cmd.exe` Windows default, with native support for PowerShell, pwsh, WSL, and custom user shells. |
| [#2242](https://github.com/Hmbown/CodeWhale/pull/2242) | Open | Full end-to-end implementation of typed persistent tool permission rules requested in #1186, letting users set permanent `allow`/`deny`/`ask` rules scoped to tool names, command prefixes, or workspace relative paths. |
| [#2240](https://github.com/Hmbown/CodeWhale/pull/2240) | Open | Adds first-class native support for Xiaomi’s new MiMo family of open reasoning models, a popular low-latency alternative for users in mainland China. |
| [#2113](https://github.com/Hmbown/CodeWhale/pull/2113) | Open | Splits the TUI view into two fully independent scroll regions for chat/transcript history and tool execution output, eliminating the pain of losing view of conversation context when scrolling long debug logs. |
| [#2267](https://github.com/Hmbown/CodeWhale/pull/2267) | Open | Adds a 9th official preset UI theme aligned with Claude Code’s product color palette for users who prefer that visual style. |
| [#2257](https://github.com/Hmbown/CodeWhale/pull/2257) | Open | Adds an opt-in footer status bar chip that displays real-time DeepSeek API account balance, removing the need for users to open a browser tab to check remaining credits. |
| [#2295](https://github.com/Hmbown/CodeWhale/pull/2295) | Open | Rebased fix for the long-standing Windows alt-screen bug where verbose debug logging leaks to the terminal and corrupts TUI rendering. |
| [#2283](https://github.com/Hmbown/CodeWhale/pull/2283) | Open | Adds a 5-minute watchdog timeout for stalled model inference turns, automatically unsticking sessions stuck in permanent "loading" state without requiring a full TUI restart. |
| [#1836](https://github.com/Hmbown/CodeWhale/pull/1836) | Closed | Adds a non-destructive `update --check` diagnostic to the existing `codewhale doctor` workflow, making it trivial for users to verify if their installed version is out of date. |
| [#1968](https://github.com/Hmbown/CodeWhale/pull/1968) | Open | Implements the `codewhale serve --mobile` command, exposing a lightweight web LAN control interface for users to manage their CodeWhale session directly from a mobile phone. |

## 5. Feature Request Trends
The most requested user feature directions for this period are:
1.  **Cost Optimization**: Massive user demand for granular token spend controls, including the proposed Dual two-model routing mode, systematic 99%+ prefix caching architecture, and real-time usage tracking.
2.  **Ecosystem Extensibility**: Top priority is support for arbitrary third-party and self-hosted DeepSeek-compatible API providers, with accompanying official documentation to list all compatible model providers and their capabilities.
3.  **Power User UX Workflows**: Users are pushing for global persistent agent rules that apply across all projects, Ctrl+C prompt restore, and independent scroll panes to support longer development sessions.
4.  **Mobile & Remote Workflows**: Growing request for global US-hosted remote workbench infrastructure outside of the existing

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*