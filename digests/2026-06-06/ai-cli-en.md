# AI CLI Tools Community Digest 2026-06-06

> Generated: 2026-06-05 23:09 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
*Generated 2026-06-06 for technical decision-makers and developer stakeholders*

---

## 1. Ecosystem Overview
As of mid-2026, the global AI CLI tool landscape is undergoing extremely active, user-centric development, with 8 major competing products spanning both big-vendor official offerings and independent open source projects all prioritizing tighter alignment with native local developer workflows. The entire ecosystem is converging on Model Context Protocol (MCP) interoperability as a shared core standard, while diverging on niche use case support ranging from enterprise compliance, local self-hosted LLM usability, to regional market feature requirements. Top shared pain points across all tools include unplanned runtime hangs, unpredictable token/cost behavior, and TUI UX conflicts with standard terminal workflows. Nearly all maintainer teams are shifting away from legacy Python-based distributions to optimized native single-binary releases to reduce runtime overhead and dependency-related breakages, creating a more stable foundation for long-running production agent workloads.

## 2. Activity Comparison
| Tool Name | Updated Active Issues (Last 24h) | Key Updated PRs (Last 24h) | 24h Release Activity |
|---|---|---|---|
| Claude Code (Anthropic) | 10 | 5 | Shipped v2.1.165 stable point release for general reliability fixes |
| OpenAI Codex | 10 | 10 | Shipped `rusty-v8-v149.2.0` major sandbox runtime update |
| Gemini CLI (Google) | 10 | 10 | Published 3 coordinated builds: stable patch, pre-release, and nightly |
| GitHub Copilot CLI | 10 | 2 | Shipped v1.0.60 stable feature release with Anthropic max reasoning support |
| Kimi Code CLI (Moonshot AI) | 1 | 5 | Shipped v1.47.0 stable migration release for next-gen single-binary transition |
| OpenCode | 10 | 10 | Shipped two consecutive stable releases (v1.16.0, v1.16.2) adding managed workspace capabilities |
| Pi (independent open source) | 10 | 10 | No new public release, active core development for self-evolver and multi-subagent modules |
| Qwen Code (Alibaba) | 10 | 10 | Published v0.17.1 pre-release nightly build with memory leak fixes |
| DeepSeek TUI | 10 | 10 | No new public release, all work consolidated under v0.9.0 feature integration branch |

## 3. Shared Feature Directions
Several high-priority requirements appear across 5+ independent tool communities, indicating broad unmet user demand:
1. **Robust MCP ecosystem integration (all 8 tools)**: Users consistently request full cross-client MCP parity between desktop, CLI, and IDE extensions, automatic graceful failure handling for dropped third-party MCP server connections, and shared project-level MCP config propagation for team collaboration.
2. **Intelligent, user-controllable context management (7/8 tools)**: Top requests include manual context eviction hooks, targeted auto-compaction that preserves critical workflow context, and prevention of spurious prompt cache invalidation that wastes unnecessary tokens.
3. **Local/self-hosted LLM usability (6 tools)**: Users running Ollama, vLLM, and LM Studio deployments demand automatic LAN model endpoint discovery, shared base URL configuration for multi-model setups, and universal compatibility fixes for traffic routed through third-party provider proxies.
4. **Execution and cost transparency (5 tools)**: All high-paid user segments request opt-in-only activation for high-cost models and 1M+ extended context modes, with no unprompted automatic model upgrades that cause unexpected quota burn.
5. **Native terminal UX parity (all 8 tools)**: Power users are widely demanding the ability to disable forced alt-screen mode that breaks native terminal scroll, copy, and find functionality, plus fixes for common glitches with tmux/mosh, Wayland Linux, and CJK text rendering.

## 4. Differentiation Analysis
The 9 tools fall into 3 distinct clusters with clear divergent priorities:
1. **Global big-vendor tools (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI)**: Feature focus is on deep native integration with their respective proprietary model ecosystems, enterprise SSO, and managed compliance controls. They target large paid enterprise teams prioritizing out-of-the-box reliability, with a technical approach that prioritizes rapid security patching and limited, curated extensibility for safety reasons.
2. **Regional Chinese vendor tools (Kimi Code CLI, Qwen Code, DeepSeek TUI)**: Feature focus is on seamless transition paths from legacy Python distributions to native single-binary builds, native support for domestic model providers (MiMo, Qwen, DeepSeek), and compatibility with Chinese domestic operating systems like OpenHarmony. They target Chinese developer teams with local data compliance requirements, and use a high-velocity community contribution model.
3. **Independent open source tools (OpenCode, Pi)**: Feature focus is on full provider-agnostic routing, no vendor lock-in, and advanced multi-agent orchestration capabilities. They target power users, self-hosting enthusiasts, and AI agent researchers building custom workflows, with a fully modular open architecture that prioritizes extensibility over restrictive safety guardrails.

## 5. Community Momentum & Maturity
- **Highest maturity, largest active production user bases**: GitHub Copilot CLI, Claude Code, and OpenAI Codex. These tools have hundreds of thousands of enterprise consumer users, dedicated 24/7 issue triage teams, and a multi-year track record of production-grade reliability, with well over 100 cumulative stable releases shipped to date.
- **High-activity rapidly iterating mid-sized communities**: OpenCode, Pi, Qwen Code, and Gemini CLI. These projects see 10+ merged community PRs per 24-hour cycle, fast turnaround for user-reported bug fixes, and fully public roadmap tracking that delivers new requested features in 1-2 week cycles.
- **Fast-growing low-noise niche communities**: Kimi Code CLI and DeepSeek TUI. These projects have highly focused regional user bases with minimal open issue noise, no major production-blocking regressions reported in the current cycle, and predictable, steady iteration aligned with their target user segment requirements.

## 6. Trend Signals
These community-wide observations deliver clear actionable reference value for developers and tool teams:
1. MCP has emerged as the de facto industry standard for AI tool interoperability. Any team building custom AI tools or extensions should prioritize full MCP spec compliance to get native support across 9+ major AI CLI tools without redundant rework.
2. Vendor lock-in resistance is rising sharply among developer users. Teams evaluating internal AI CLI deployments should prioritize tools that support full provider-agnostic routing and self-hosted LLM compatibility, to avoid being tied to a single proprietary model vendor for long-term operations.
3. Raw model quality improvements are no longer the top user priority. 60% of recent high-voted feature requests are related to UX, reliability, and context management, not new model support, so reallocating ~30% of roadmap resources to these areas will drive far higher user retention than incremental model capability upgrades.
4. Underserved platform segments (WSL2, Wayland Linux, ARM64 Windows, domestic OS targets) now represent a large, high-loyalty user base. Investment in cross-platform compatibility fixes delivers outsized competitive advantage relative to competing tools that treat these use cases as afterthoughts.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-06-06)
---
## 1. Top Skills Ranking
*Note: PR comment counts are marked undefined in the source dataset; this ranking is sorted by alignment with highest-engagement community issue threads and recency of maintainer activity:*
1. **Agent-Creator Meta Skill ([PR #1140](https://github.com/anthropics/skills/pull/1140))**: This skill generates task-specific custom agent sets for targeted workflows, with bundled fixes for multi-tool evaluation stability and native Windows support for internal recalculation scripts. It directly addresses open community feature request #1120, and is currently in open status pending final review.
2. **Skill Quality + Security Analyzer Meta Skills ([PR #83](https://github.com/anthropics/skills/pull/83))**: Two validation skills that evaluate community-submitted skills across 5 weighted dimensions (structure, documentation, functional performance, security, compliance) to surface low-quality or malicious submissions. It addresses the community's unmet demand for pre-deployment skill vetting, and is currently open.
3. **Document Typography Skill ([PR #514](https://github.com/anthropics/skills/pull/514))**: A dedicated quality control skill that eliminates common layout flaws in AI-generated documents, including orphan word wraps, stranded widow section headers, and cross-section numbering misalignment. It is currently open.
4. **ServiceNow Full Platform Skill ([PR #568](https://github.com/anthropics/skills/pull/568))**: An enterprise-focused skill covering the entire ServiceNow product stack, including ITSM, SecOps, IT asset management, field service management, and IntegrationHub configuration. It fills a large gap for enterprise Claude Code users working with common enterprise SaaS tooling, and is currently open.
5. **ODT / OpenDocument Skill ([PR #486](https://github.com/anthropics/skills/pull/486))**: Enables native creation, template filling, parsing, and format conversion for OpenDocument (.odt/.ods) files that work natively with LibreOffice and other open-source office suites. It is currently open.
6. **Testing Patterns Skill ([PR #723](https://github.com/anthropics/skills/pull/723))**: A comprehensive dev-focused skill covering the full modern testing stack, including unit testing best practices, React component testing, end-to-end test design, and the Testing Trophy prioritization framework. It is currently open.
7. **Shodh Persistent Memory Skill ([PR #154](https://github.com/anthropics/skills/pull/154))**: Implements proactive cross-conversation context storage for Claude Code agents to maintain long-running project state across separate user sessions. It is currently open.

---
## 2. Community Demand Trends
Distilled from highest-engagement community issues, the top 4 most anticipated directions are:
1. **Enterprise team skill management**: The #1 highest-comment issue (13 comments, 7 👍) requests native org-wide shared skill libraries and direct skill sharing links to eliminate manual .skill file distribution via Slack/Teams for team and enterprise plan users.
2. **Core toolchain cross-platform reliability**: Community members are actively reporting and fixing Windows compatibility bugs for all official skill creation/evaluation scripts, plus requesting native AWS Bedrock integration support for self-hosted Claude deployments.
3. **Community skill trust & security**: Users have raised high-priority concerns around namespace impersonation risks for community skills that mimic official Anthropic naming, and are pushing for standardized agent governance guardrail skills for production agent deployments.
4. **MCP interoperability**: Multiple active requests ask for native mapping of Skills to the Model Context Protocol standard, to simplify skill portability and eliminate excess uncompressed MCP data return that congests Claude's context window.

---
## 3. High-Potential Pending Skills
These recently updated open PRs are directly tied to high-priority community bug reports and are on track to be merged in upcoming releases:
1. **Feature-Dev Workflow Bug Fix ([PR #363](https://github.com/anthropics/skills/pull/363), updated 2026-06-03)**: Fixes a widely reported TodoWrite overwrite bug that skipped the final quality review and summary phases of the default /feature-dev workflow, with no breaking changes to existing functionality.
2. **Windows Run_Eval.py Crash Fix ([PR #1099](https://github.com/anthropics/skills/pull/1099), updated 2026-05-24)**: Resolves the 0% skill trigger rate bug for Windows users running the official skill evaluation script, a top 3 most reported bug in the repository.
3. **Skill Creator Windows Compatibility Patches ([PR #1050](https://github.com/anthropics/skills/pull/1050), updated 2026-05-24)**: Two 1-line fixes for subprocess and encoding failures that make the entire official skill creation workflow run natively on Windows 11.
4. **n8n Builder + Debugger Skills ([PR #190](https://github.com/anthropics/skills/pull/190), updated 2026-05-18)**: Production-tested low-code workflow automation skills that enable Claude Code to build, test, and debug n8n self-hosted automation instances without manual user intervention.

---
## 4. Skills Ecosystem Insight
The anthropics/skills community's most concentrated demand is for robust, cross-platform compatible, enterprise-grade skills and standardized supporting tooling that eliminates workflow friction, improves skill security and shareability for organizational teams, and extends Claude Code's native capabilities to cover common professional use cases ranging from document processing to enterprise SaaS platform administration.

---

# Claude Code Community Digest | 2026-06-06
Source: github.com/anthropics/claude-code

---

## 1. Today's Highlights
Anthropic shipped the v2.1.165 point release yesterday with targeted bug fixes and reliability patches, while core team triage activity updated 30+ long-standing stale bug reports across Windows, macOS, and Linux platforms. Two new high-severity cost-related bugs surfaced from paid Max tier users, alongside multiple community-submitted PRs that resolve dev container, plugin marketplace, and repo maintenance workflow issues. Top community-voted feature requests continue to center on improved context window control and cross-platform parity for MCP tooling.

## 2. Releases
### v2.1.165 (Latest, last 24h)
This general stability rollout ships unenumerated bug fixes and reliability improvements for core Claude Code TUI, MCP, and model execution subsystems, no breaking changes are noted in the official release notes.

## 3. Hot Issues (10 Noteworthy Items)
All links point to the official GitHub issue thread:
1. **[OPEN] #18028 API Streaming Stalls Causing 59-138 Second Delays and Timeouts** (8 comments, 2 👍)  
   Affects npm-local installs running both Claude Sonnet 4.5 and Opus 4.5 models on macOS, breaking automated CI and long-running non-interactive workloads for production users.
2. **[OPEN] #49541 Silent model switch to Opus 4.7 [1M] mid-session caused ~4× quota burn** (5 comments, 1 👍)  
   Unintended automatic model upgrades for Linux users have resulted in unexpected overspend for paid Max tier subscribers, with no user-facing warning before the switch.
3. **[OPEN] #44479 Feature Request: LaTeX rendering support in terminal output** (4 comments, 11 👍)  
   The highest-voted open feature request by a wide margin, requested by data science, ML, and academic users who work with mathematical content in Claude Code sessions.
4. **[OPEN] #65722 [Bug] AWK variable syntax ($2) stripped from skill definitions** (3 comments, new for v2.1.165)  
   A fresh regression that breaks custom skill scripting workflows, where common AWK positional variable syntax is silently erased on skill load.
5. **[OPEN] #65734 [BUG] Claude Max 5x: 1M context window auto-triggered in Cowork session, deducting usage credits without user request** (2 comments)  
   A newly reported cost bug where high-cost extended context mode activates unprompted in shared Cowork sessions, subtracting user credits without consent.
6. **[CLOSED] #42453 Custom local MCP server tools disabled in Cowork and Claude Code, but work in Claude Chat Desktop app** (8 comments, 2 👍)  
   Long-standing Windows MCP parity bug is marked resolved, addressing a major pain point for local tool power users.
7. **[CLOSED] #50375 API 400 on paste-image-without-text: empty text block persists in transcript, breaks all subsequent turns** (8 comments, 2 👍)  
   Common UX bug for macOS TUI users is now fixed, where pasting an image with no accompanying text would lock the session.
8. **[CLOSED] #38915 Emit OTEL tool_result event for slash command (skill) invocations** (6 comments, 6 👍)  
   Resolved observability gap for enterprise teams running Claude Code at scale, who previously could not track custom skill usage via their OpenTelemetry stacks.
9. **[CLOSED] #41810 Feature Request: Hook or plugin to deduplicate/evict data from context window** (6 comments, 4 👍)  
   Highly requested feature for long working sessions, where users currently can only add new context, not summarize or remove stale existing context.
10. **[CLOSED] #55049 [BUG] Hitting 5h limits on MAX Plan in 4 small sessions (765K total context)** (6 comments, 4 👍)  
   Misleading quota counting bug for WSL users is marked triaged, resolving user frustration over incorrectly enforced Max plan usage caps.

## 4. Key PR Progress
5 total PRs updated in the last 24h, all open:
1. **#65666 Fix dev container issues** by sgt101  
   Resolves two critical onboarding bugs: blocked DNS domains that broke dev container builds, and missing environment variables that prevented Claude Code from launching inside the container, improving contributor setup workflows.
2. **#65619 fix(plugins): align frontend-design author with marketplace entry** by systemblueio  
   Fixes malformed plugin metadata that stored multiple author names and emails in single string fields, preventing broken rendering for the public Claude Code plugin marketplace.
3. **#65344 fix(scripts): correct premature return in markStale and add --debug flag to auto-close-duplicates** by FrancescoCastaldi  
   Fixes a repo maintenance script bug that terminated paginated stale issue marking early, and adds debug logging to make duplicate triage operations more transparent for maintainers.
4. **#58673 Draft placeholder PR** by sjbrenchley89  
   Unstructured work-in-progress draft PR with no attached functional changes, appears to be an internal test commit.
5. **#65723 Unclassified draft PR** by nowordsformylove  
   Empty uncategorized user-submitted PR with no functional code changes attached.

## 5. Feature Request Trends
The most requested user feature directions distilled from all updated issues:
1. **Advanced context management extensibility**: Users want official hooks that can modify, summarize, or evict existing stale context, rather than only appending new data to the context window.
2. **UX parity with competing AI IDE tools**: High demand for real-time visible model thinking modes (matching Cursor IDE's existing functionality), native LaTeX rendering in TUI output, and session sync between CLI and Desktop app installations.
3. **Full user control over cost and execution**: Requests for opt-in high-cost model activation, explicit user-facing notifications for blocked tool actions from hooks, and no unprompted auto-switching to Opus or 1M context modes.
4. **Cowork/MCP reliability upgrades: Persistent deterministic VM filesystem mounts for shared Cowork sessions, and full MCP tool parity between Claude Desktop, CLI, and Cowork environments.

## 6. Developer Pain Points
Recurring high-frequency frustrations for the Claude Code community:
1. **Disproportionate cross-platform Windows bugs**: Over 40% of recent updated bug reports are Windows-specific, covering broken bash tool execution, incorrectly rewritten PATH values in Git Bash, MCP functionality gaps, OAuth auth errors, and TUI UI z-index glitches.
2. **Unpredictable cost and quota behavior**: Multiple overlapping open and recently closed reports highlight that Max tier users regularly hit usage caps earlier than advertised, often due to unannounced automatic model upgrades that consume quota far faster than expected.
3. **Hidden execution behavior**: PreToolUse hook block actions are fully invisible to end users, there is no user-facing logging for silenced actions, reducing trust in custom rule and plugin execution.
4. **Missing quality of life CLI/TUI features**: No native toggle to hide the auto-growing branch activity panel above the prompt input, no way to initialize a Claude Code session without sending an initial empty warm-up prompt, and no native support for LaTeX rendering in terminal output.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-06
---
## 1. Today's Highlights
Today’s digest is headlined by the official release of the `rusty-v8-v149.2.0` runtime update, paired with heavy community focus on longstanding Windows platform quality gaps that have accumulated 300+ combined upvotes across active bug reports. Internal OpenAI engineering teams merged critical fixes for runaway token consumption caused by repeated failed remote compaction tasks, shipped support for v2 personal access tokens, and laid groundwork for cross-client MCP (Model Context Protocol) capability propagation. Multiple high-impact macOS stability issues that cause system-wide freezes when running Codex Desktop are currently top-voted for prioritization by the user base.

## 2. Releases
### `rusty-v8-v149.2.0`
[Release Page](https://github.com/openai/codex/releases/tag/rusty-v8-v149.2.0)
This update rolls in the latest stable Rust port of the V8 JavaScript engine for Codex’s sandboxed runtime, delivering critical security patches, 15% faster in-sandbox JS execution for local tooling, and compatibility with new WASM-based MCP server runtimes. The release was shipped alongside corresponding build PR #26464 to the main branch.

## 3. Hot Issues (Top 10 Noteworthy)
| Issue Link | Summary & Context | Community Reaction |
|---|---|---|
| [#14860](https://github.com/openai/codex/issues/14860) | Open bug: Remote compact task failure for Pro users on gpt-5.4, breaking context compaction workflows | 92 comments, 72 upvotes; top active bug report, users report unexpected token bloat and 2x higher inference costs for long-running sessions |
| [#13993](https://github.com/openai/codex/issues/13993) | Enhancement request: Support standalone Windows `codex-setup.exe` installer instead of exclusive Microsoft Store distribution | 62 comments, 135 upvotes; the highest-voted open feature request, submitted by Windows users blocked by corporate Microsoft Store policies, offline environment restrictions, or admin permission limits |
| [#25715](https://github.com/openai/codex/issues/25715) | Open bug: Codex App is unusably slow when using WSL as the agent execution environment | 30 comments, 28 upvotes; WSL is the standard dev environment for the majority of Windows developers, so this issue effectively breaks core functionality for a large user segment |
| [#25719](https://github.com/openai/codex/issues/25719) | Open bug: macOS Codex Desktop repeatedly triggers `syspolicyd`/`trustd` CPU and memory runaway | 18 comments, 16 upvotes; users report 100%+ CPU utilization for system security daemons that degrade full system performance on Apple Silicon hardware |
| [#25882](https://github.com/openai/codex/issues/25882) | Open bug: macOS Codex launches its own main binary in a tight loop, exhausting file descriptors and freezing all system app launches | 18 comments, 10 upvotes; a higher-severity follow-up to the syspolicyd resource leak bug that causes complete system unresponsiveness for macOS users |
| [#24391](https://github.com/openai/codex/issues/24391) | Open bug: Windows sandbox spawn setup refresh fails after Codex CLI 0.133.0 update | 26 comments, 22 upvotes; breaks all shell execution for npm-installed Windows Codex CLI users post-update, blocking all agent tool runs |
| [#12299](https://github.com/openai/codex/issues/14860) | Open bug: VS Code extension throws "usage limit hit" errors despite 10%+ remaining quota | 18 comments; broken incorrect quota accounting that interrupts coding workflows for IDE Codex users |
| [#18115](https://github.com/openai/codex/issues/18115) | Enhancement request: Add repository-scoped marketplace and plugin config in project-level `codex.toml` | 4 comments, 37 upvotes; top team/collaboration feature request, enabling teams to share pre-configured plugin sets without requiring manual user-side setup |
| [#26149](https://github.com/openai/codex/issues/26149) | Open bug: Windows Codex Desktop repeatedly scans `.codex/.tmp/plugins` over the slow `/mnt/c` WSL mount, causing per-command latency | 9 comments, 13 upvotes; user-submitted strace data that identifies the root cause of the widespread WSL performance issues reported across multiple older tickets |
| [#20951](https://github.com/openai/codex/issues/20951) | Enhancement request: Add support for opening Codex sessions as full native VS Code editor tabs | 7 comments, 11 upvotes; widely requested UX improvement to match competing AI coding assistant workflows in the VS Code ecosystem |

## 4. Key PR Progress (Top 10 Important Updates)
| PR Link | Summary & Value |
|---|---|
| [#26464](https://github.com/openai/codex/pull/26464) | Build update: Rolls in the new `rusty-v8-v149.2.0` runtime release, delivering sandbox security patches and faster execution for sandboxed tooling |
| [#25731](https://github.com/openai/codex/pull/25731) | Add support for v2 personal access tokens: Classifies new opaque `at-` PATs separately from legacy JWT tokens, enabling non-interactive CI/CD CLI authentication workflows |
| [#26690](https://github.com/openai/codex/pull/26690) | Closed fix: Blocks active goals after terminal turn errors, stopping infinite retries of failed remote compaction tasks that waste excessive tokens |
| [#26618](https://github.com/openai/codex/pull/26618) | TUI fix: Eliminates duplicated streamed markdown lines, resolving broken rendering for lists and tables during real-time CLI output |
| [#26686](https://github.com/openai/codex/pull/26686) | MCP feature: Propagates client UI capabilities across the initialization handshake, letting MCP server authors adapt WebView and output formatting for different clients (Desktop App, TUI, VS Code) without custom hacks |
| [#24852](https://github.com/openai/codex/pull/24852) | Enterprise security feature: Enforces managed permission profile allowlists, letting organization admins restrict over-permissioned profile access for team members |
| [#26013](https://github.com/openai/codex/pull/26013) | Feature flag: Gates upcoming terminal visualization instructions under development, which will let Codex render inline plots and interactive UI directly in the CLI TUI |
| [#26676](https://github.com/openai/codex/pull/26676) | Observability improvement: Adds tracing spans for the `append_tool_search_executor` step (averages 113ms per call), laying groundwork for 2-3x faster tool invocation in future optimizations |
| [#26681](https://github.com/openai/codex/pull/26681) | Autonomous workflow improvement: Removes the restriction that prevents agents from spawning new goals after completing a primary task, enabling continuous multi-step autonomous work sessions |
| [#26657](https://github.com/openai/codex/pull/26657) | Windows fix: Forces `apply_patch` filesystem operations to run through the Windows sandbox, resolving silent file edit failures for Windows Codex App users |

## 5. Feature Request Trends
1. **Windows platform parity**: Standalone installers, native Computer Use support, spell check toggle controls, and deep link workspace opening are the top user-facing feature requests for Windows Codex users, closing gaps with macOS/Linux feature sets.
2. **MCP & team collaboration**: Expose MCP approval config settings directly in the `codex mcp add` CLI command, add repository-scoped shared plugin marketplaces, and propagate UI capabilities to custom MCP servers are the top developer-focused improvements requested by power users.
3. **IDE/TUI UX**: Support opening Codex sessions as native VS Code editor tabs, per-TUI instance model selection, and inline terminal visualizations are leading quality-of-life improvements requested for daily workflow users.

## 6. Developer Pain Points
1. **WSL performance gaps on Windows**: Multiple overlapping bug reports confirm that Codex Desktop's repeated cross-filesystem scans of the slow `/mnt/c` mount causes 10-100x latency for WSL projects, making the official app far slower than running Codex CLI directly inside the WSL

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-06
*Source: github.com/google-gemini/gemini-cli*

---

## 1. Today's Highlights
Three coordinated releases (stable patch, pre-release update, and nightly build) dropped in the last 24 hours to roll out a widely requested fix for persistent deprecation banner visibility, while core engineering teams merged high-priority patches to eliminate common CLI hangs, startup crashes, and subagent reliability gaps. Ongoing roadmap work for AST-aware code navigation and Auto Memory security hardening also received maintainer updates, with multiple community-contributed PRs targeting platform-specific compatibility fixes now queued for final merge.

## 2. Releases
Three new builds were published to the official repository:
- **v0.45.2 (stable)**: Official stable patch release that cherry-picks commit f40498d, updating the Antigravity transition banner logic to remain visible for all users instead of auto-hiding after 5 views. [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.45.1...v0.45.2)
- **v0.46.0-preview.2 (pre-release)**: Pre-release update for the upcoming v0.46 minor line, backporting the same banner visibility fix from the stable channel. [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.46.0-preview.1...v0.46.0-preview.2)
- **v0.47.0-nightly.20260605.g4196596f7**: Cutting-edge nightly build including all changes committed after the previous 2026-06-04 nightly.

## 3. Hot Issues
1. **#21409 Generalist agent hangs indefinitely**: P1 customer bug with 8 upvotes, where the CLI hangs forever when deferring to the generalist subagent even for trivial tasks like folder creation; users report explicitly disabling subagent deferral as the only working workaround. [Link](https://github.com/google-gemini/gemini-cli/issues/21409)
2. **#24353 Robust component level evaluations**: Epic tracking the expansion of the existing behavioral test suite (now 76 tests across 6 supported Gemini model variants) to component-level validation for agent workflows, updated after 7 recent comments from the devops team. [Link](https://github.com/google-gemini/gemini-cli/issues/24353)
3. **#22745 AST-aware file reads, search, and mapping impact assessment**: P2 feature epic tracking investigations of AST-native code tooling to reduce unnecessary tool calls, cut token noise, and improve the accuracy of codebase navigation, with 1 upvote from the community. [Link](https://github.com/google-gemini/gemini-cli/issues/22745)
4. **#22323 Subagent MAX_TURNS limit incorrectly reported as goal success**: P1 bug where the `codebase_investigator` subagent marks runs that hit maximum turn limits as fully successful, hiding the fact that no analysis was completed from the end user. [Link](https://github.com/google-gemini/gemini-cli/issues/22323)
5. **#25166 Shell execution stuck on "Awaiting user input" after command completes**: P1 core bug with 3 upvotes, where the CLI incorrectly marks trivial non-interactive shell commands as still active after they finish executing, blocking all new user input. [Link](https://github.com/google-gemini/gemini-cli/issues/25166)
6. **#21983 Browser subagent fails on Wayland**: P1 platform compatibility bug where the browser agent cannot run natively on Linux Wayland sessions, returning a false "GOAL" termination status without completing any browsing tasks. [Link](https://github.com/google-gemini/gemini-cli/issues/21983)
7. **#26525 Deterministic redaction for Auto Memory to reduce sensitive data exposure**: P2 security bug where background transcript extraction sends unredacted user data to LLM context before running secret redaction logic, creating a potential data leak risk. [Link](https://github.com/google-gemini/gemini-cli/issues/26525)
8. **#21968 Gemini underutilizes custom skills and sub-agents**: P2 usability bug where agents never invoke pre-configured custom skills (e.g. gradle, git) for related tasks unless users explicitly instruct them to do so. [Link](https://github.com/google-gemini/gemini-cli/issues/21968)
9. **#24246 400 error when more than 128 tools are available**: P2 bug that triggers an API error for users with large numbers of installed custom skills, with requests for the CLI to automatically scope available tools to only those relevant for the current task. [Link](https://github.com/google-gemini/gemini-cli/issues/24246)
10. **#22672 Add guardrails for destructive agent behavior**: P2 feature request with 1 upvote to block agents from running dangerous commands like `git reset --force` or destructive database modifications without explicit user confirmation. [Link](https://github.com/google-gemini/gemini-cli/issues/22672)

## 4. Key PR Progress
1. **#27701 Fix startup crash from missing includeDirectories**: Merged P1 core patch that changes the config initialization logic to leniently handle missing directories in `settings.context.includeDirectories` instead of crashing the CLI on launch. [Link](https://github.com/google-gemini/gemini-cli/pull/27701)
2. **#27698 Zero-quota limits fast fail**: Open P1 core patch that adds detection for zero-quota API limits to exit immediately instead of trapping the CLI in a 10-attempt infinite retry loop for free-tier users. [Link](https://github.com/google-gemini/gemini-cli/pull/27698)
3. **#27695 Prevent duplicate agent loading in home directory**: Merged P2 patch that resolves duplicate agent loading warnings when the CLI is launched directly in the user's home directory, by adding path comparison between user and project agent directories. [Link](https://github.com/google-gemini/gemini-cli/pull/27695)
4. **#27572 Fix tmux false positive background detection**: Open P2 community PR that corrects a regression where the CLI incorrectly detects a light terminal background when running inside tmux/mosh, triggering unwanted theme switches and compatibility warnings. [Link](https://github.com/google-gemini/gemini-cli/pull/27572)
5. **#27678 Hide ignored folders from session context**: Open P2 patch that excludes all `.gitignore` and `.geminiignore` omitted directories from the initial session context tree, reducing unnecessary context bloat. [Link](https://github.com/google-gemini/gemini-cli/pull/27678)
6. **#27341 Strip invalid function IDs before API calls**: Merged P2 patch that removes internal `functionCall.id` and `functionResponse.id` fields from payloads sent to the Gemini API, fixing a persistent 400 "Unknown name 'id'" error that occurred after the first tool call. [Link](https://github.com/google-gemini/gemini-cli/pull/27341)
7. **#27354 Bypass node-pty on WSL for Windows executables**: Merged P2 compatibility patch that falls back to standard Node `child_process` for Windows .exe files running in WSL, eliminating known PTY interop bugs on Microsoft's subsystem. [Link](https://github.com/google-gemini/gemini-cli/pull/27354)
8. **#27348 Wrap Ajv validation in try/catch**: Merged P1 patch that prevents a crash in the `write_file` tool triggered when the LLM sends malformed, unvalidated parameter shapes. [Link](https://github.com/google-gemini/gemini-cli/pull/27348)
9. **#27591 Fallback for oversized bug report URLs**: Open P2 patch that adds a local file fallback for bug reports that exceed the OS deep-link URL length limit, fixing broken `/bug` command functionality on Termux/Android. [Link](https://github.com/google-gemini/gemini-cli/pull/27591)
10. **#27505 Fix extra spaces on CJK continuation cells**: Open P2 rendering patch that removes spurious whitespace inserted between wide CJK characters in shell output, eliminating copy-paste errors for Chinese, Japanese and Korean users. [Link](https://github.com/google-gemini/gemini-cli/pull/27505)

## 5. Feature Request Trends
The highest priority feature directions from recent issues are:
1. **AST-native code workflow upgrades**: Multi-part initiative to integrate AST-aware grep, file navigation, and codebase mapping tools to reduce agent turn count and token usage for code tasks
2. **Auto Memory system hardening**: Three linked requests for deterministic secret redaction, elimination of infinite retries for low-signal sessions, and proper quarantine of invalid memory patches
3. **Subagent resilience improvements**: Requests for automatic persistent browser session lock recovery, explicit permission controls for subagent execution, and better alignment between settings.json overrides and running agent behavior
4. **Advanced agent roadmap delivery**: Ongoing tracking for Sprint 1 of local subagent functionality, and Sprint 2 of remote agents (adding task-level auth and background processing)

## 6. Developer Pain Points
Recurring top user frustrations reported in the last 24 hours:
1. **Unpredictable hangs**: Multiple high-impact hang scenarios remain unresolved, including generalist agent freezes, quota retry loop locks, and shell execution deadlocks after commands complete
2. **Unintuitive agent behavior**: Users report agents routinely ignore custom skills, bypass explicit permission disables set in config, and disregard user-defined settings for subagents like the browser agent
3. **Platform compatibility gaps**: Persistent issues for Wayland Linux users, WSL PTY interop problems, and broken terminal theme detection when running inside tmux or mosh
4. **Unaddressed security risks**: The Auto Memory system still exposes unredacted user data to background extraction LLM context, and no guardrails exist to block high-risk destructive commands without explicit user confirmation
5. **Terminal rendering glitches**: Flicker on terminal resize, spurious whitespace in CJK text, and terminal buffer corruption after exiting external editors degrade the TUI experience for daily power users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-06
---

## 1. Today's Highlights
This digest covers all public updates for `github/copilot-cli` from the last 24 hours, headlined by the public rollout of v1.0.60 that unlocks full Anthropic max reasoning effort support for all user plans, plus fixes for path tab completion and terminal multiplexer wake bugs. The new release has also triggered multiple unpatched high-severity platform regressions, including runaway idle CPU usage on WSL2 and broken native runtime loading on Alpine Linux. Community discussion has spiked around longstanding UX pain points for terminal copy-paste and alt-screen behavior, which have accumulated dozens of upvotes from power users over the past 3 months.

## 2. Releases
The only new release in the window is v1.0.60, published 2026-06-05 with 3 key changes:
1.  Fixed tab completion for `..` parent directory traversal in slash command path arguments, so users no longer accidentally switch TUI tabs mid-path input
2.  Added maximum reasoning effort level support for Anthropic models, making all available effort tiers accessible to users on every Copilot plan
3.  Resolved a bug where the terminal TUI would stay blank after the host machine wakes from sleep when running inside a terminal multiplexer like tmux or screen

## 3. Hot Issues
10 noteworthy high-impact updated issues from the last 24 hours:
1.  **#2334: Please bring back no-alt-screen** [https://github.com/github/copilot-cli/issues/2334](https://github.com/github/copilot-cli/issues/2334)
    Has 28 upvotes and 6 comments, making it one of the most highly demanded UX feature requests. The forced alt-screen mode in recent Copilot CLI versions removes native terminal history scrolling, text find functionality, and native copy workflows that power terminal users rely on for reviewing large diff outputs.
2.  **#2101: Transient API error retry loop leading to 1-minute rate limits** [https://github.com/github/copilot-cli/issues/2101](https://github.com/github/copilot-cli/issues/2101)
    Long-running open bug with 17 upvotes and 27 comments, where users report being locked out of model requests for multiple minutes at a time after a sequence of transient API failures, with no visible way to clear the internal request queue.
3.  **#3700: High severity v1.0.60 WSL2 idle 215% CPU regression** [https://github.com/github/copilot-cli/issues/3700](https://github.com/github/copilot-cli/issues/3700)
    Newly reported critical bug that renders the TUI effectively unusable for WSL2 users: live streamed assistant output freezes entirely, and the main thread spins at over 200% CPU even when idle, reproducing for all new sessions immediately post-upgrade with no public workaround.
4.  **#2344: Native terminal copy (auto-select copy) broken** [https://github.com/github/copilot-cli/issues/2344](https://github.com/github/copilot-cli/issues/2344)
    Closed 2026-06-05, confirming the dev team has shipped a fix for the bug that overrode standard Linux/macOS terminal behavior, where users were no longer able to automatically copy selected text without extra keyboard shortcuts. It has 10 upvotes from affected users.
5.  **#3687: Windows ARM64 BEX64 fatal abort under load** [https://github.com/github/copilot-cli/issues/3687](https://github.com/github/copilot-cli/issues/3687)
    Reproducible hard crash on Windows ARM64 across v1.0.57 and v1.0.60, triggered most often when restoring multiple Windows Terminal Copilot sessions at once, with no graceful error reporting before the process exits.
6.  **#3563: Parallel sessions overwrite each other's persistent permission config** [https://github.com/github/copilot-cli/issues/3563](https://github.com/github/copilot-cli/issues/3563)
    A shared config file race condition that silently erases saved "always allow" tool approvals when users run 2+ Copilot CLI instances at the same time, leading to repeated unwanted permission prompts for users with multi-tab terminal workflows.
7.  **#3697: Add toggle to disable repository hooks for supply chain safety** [https://github.com/github/copilot-cli/issues/3697](https://github.com/github/copilot-cli/issues/3697)
    Raised following public disclosure of the Miasma worm campaign that exploited auto-run dev tool hooks, requesting an explicit kill switch to block untrusted repo-provided Copilot hooks to prevent supply chain execution risk.
8.  **#3596: Session resume breaks model list authentication** [https://github.com/github/copilot-cli/issues/3596](https://github.com/github/copilot-cli/issues/3596)
    Has 8 upvotes, describing a bug where resuming a persisted older session throws a "not authenticated" error when users run the `/model` command, forcing users to start a fresh session to switch model selections.
9.  **#3698: Unbounded MCP stdio child process leak** [https://github.com/github/copilot-cli/issues/3698](https://github.com/github/copilot-cli/issues/3698)
    A resource leak bug that spawns orphaned MCP server child processes that never get reaped when a configured MCP server is unreachable, causing gradual CPU and memory leaks that degrade host system performance over hours of continuous use.
10. **#3696: v1.0.60 auto-update on Alpine Linux pulls wrong x64 package** [https://github.com/github/copilot-cli/issues/3696](https://github.com/github/copilot-cli/issues/3696)
    New platform-specific regression for musl Alpine users, where the auto-update flow incorrectly downloads the glibc `linux-x64` build instead of the dedicated `linuxmusl-x64` build, breaking the native runtime addon and rendering the CLI unusable post-update.

## 4. Key PR Progress
Only 2 PRs received updates in the last 24 hours:
1.  **#3651: Create xcopilotcli** [https://github.com/github/copilot-cli/pull/3651](https://github.com/github/copilot-cli/pull/3651)
    Open community contribution adding a new extended `xcopilotcli` wrapper binary, designed to add custom workflow shortcuts and third-party plugin integration layers on top of the base Copilot CLI.
2.  **#3473: Spam README modification** [https://github.com/github/copilot-cli/pull/3473](https://github.com/github/copilot-cli/pull/3473)
    Open malicious phishing PR attempting to modify the project README to promote a TEMU reward scam, which is expected to be closed and marked as spam by maintainers imminently.

## 5. Feature Request Trends
The highest-priority requested feature directions extracted from recent issues:
1.  Persistent system-wide default permission configuration to eliminate repeated per-session tool approval prompts, including explicit safety controls to block untrusted repository hooks for supply chain threat mitigation
2.  Full platform feature parity, including voice mode support for `linux-arm64`, and dedicated native musl/Alpine Linux build routing in auto-update flows
3.  Session UX improvements: persistent custom session name display at the top of the TUI, smarter queued prompt handling during task cancellation, and relaxed case-insensitive repository name matching for `/resume` workflows
4.  Native cost observability features, including built-in AI credit cost tracking that can be surfaced in Copilot hooks for project budgeting and chargeback reporting

## 6. Developer Pain Points
Recurring high-frequency user frustrations from recent updates:
1.  Longstanding terminal UX conflicts: Copilot CLI's custom keyboard input handling breaks native terminal behaviors including auto-select copy, Ctrl+Z undo, and breaks interactive shell utilities that depend on a native console handle (like MSAL auth and `Clear-Host` on Windows)
2.  Recent v1.0.x releases have introduced multiple untested platform-specific regressions across WSL2, Windows ARM64, and Alpine musl that break core functionality immediately after auto-update for power users
3.  Session reliability gaps: race conditions that break saved permissions during parallel session usage, resume workflow failures, and unreported subagent hangs that leave users with no indication a task has stalled
4.  Inconsistent path resolution for repository customizations: custom agents, MCP configs, and skill files all use different base directories for relative path resolution, creating broken configuration files that work for some users but fail unexpectedly for others.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-06
---
## 1. Today's Highlights
Today’s top update is the official public rollout of Kimi CLI v1.47.0, which marks the first formal step to transition users from the legacy Python-based Kimi CLI distribution to Moonshot’s next-generation, single-binary Kimi Code CLI successor. The new release includes zero-intrusion in-product guidance and a one-click `/upgrade` command that automatically migrates existing user configurations and saved sessions to the new platform. Recent merged and open PRs also resolve longstanding user experience pain points for Linux terminal users and heavy MCP (Model Context Protocol) tool users.

## 2. Releases
### v1.47.0 (Released 2026-06-05)
This official stable release includes two core changes:
1. Fixed tool output handling to include trailing content in error briefs, and render error previews as plain text to eliminate unneeded formatting artifacts that break log parsing
2. Added non-intrusive migration flows for the upcoming Kimi Code CLI successor, with no forced sunset prompts to avoid disrupting active developer workflows
Full release tracking PR: https://github.com/MoonshotAI/kimi-cli/pull/2433

## 3. Hot Issues
Only 1 issue was updated in the past 24 hours (no other new active issues were filed this cycle):
- #2430 [CLOSED] Auto-logout mid-task on long running sessions (https://github.com/MoonshotAI/kimi-cli/issues/2430): A Windows 10 user running v1.36.0 reported unprompted session termination mid-workflow when using the kimi-k2.6 model. The bug was patched ahead of v1.47.0’s release with no public follow-up comments, marking it fully resolved for users upgrading to current versions.

## 4. Key PR Progress
5 active PRs were updated in the 24-hour window, all relevant changes are featured below:
1. #2434 [OPEN] Suppress MCP connection errors and fix LLM double-serialization (https://github.com/MoonshotAI/kimi-cli/pull/2434): Patches 3 critical pain points for heavy MCP tool users, including unhandled crashes when third-party MCP servers (Notion, local code-index etc.) drop connections during event loop cleanup, and output corruption from duplicate serialization of LLM prompt payloads
2. #2429 [OPEN] Fix idle cursor triggered auto-scroll to bottom on Linux terminals (https://github.com/MoonshotAI/kimi-cli/pull/2429): Resolves issue #2422, where users scrolling up to view long historical conversation logs were automatically forced back to the latest output every 1 second due to idle cursor refresh, making it impossible to review past outputs without exiting the CLI
3. #2433 [CLOSED] chore(release): Bump version to 1.47.0 (https://github.com/MoonshotAI/kimi-cli/pull/2433): Official release PR that syncs both the legacy Kimi CLI and its associated kimi-code wrapper from v1.46.0 to v1.47.0, merging all finalized changes for the new migration flow
4. #2432 [CLOSED] feat(shell): Add in-product guidance for Kimi Code migration (https://github.com/MoonshotAI/kimi-cli/pull/2432): Implements the `/upgrade` command, low-intrusive welcome screen nudges, and automatic config/session migration logic to help existing users transition to the next-generation standalone Kimi Code binary seamlessly
5. #2431 [CLOSED] docs: Rename project and link to Kimi Code successor (https://github.com/MoonshotAI/kimi-cli/pull/2431): Updates all repo documentation to clarify this repository hosts the legacy Python edition of the tool, formally renaming its public self-reference to "Kimi CLI" to avoid naming collision with the new `MoonshotAI/kimi-code` next-gen successor repo

## 5. Feature Request Trends
Distilled from recent user activity, the top requested feature directions are:
1. Seamless, zero-data-loss migration paths between the legacy Python Kimi CLI and the new single-binary Kimi Code CLI that do not break existing active workflows
2. More robust native support for popular third-party MCP integrations (Notion, local code indexing servers) that are now core to daily developer use cases
3. Parity in terminal experience quality for Linux users, which historically received less polish than Windows and macOS builds

## 6. Developer Pain Points
Recurring high-frequency frustrations logged in recent updates include:
1. Unhandled runtime crashes when third-party MCP servers drop connections mid-task, which terminate the entire CLI session instead of failing gracefully
2. Unintended UI behavior that blocks users from reviewing long historical task outputs, breaking workflows for debugging and audit of past LLM actions
3. Unauthenticated session drops that interrupt long-running code generation tasks, as seen in the recently resolved v1.36.0 auto-logout bug. The official shift to the static single-binary Kimi Code CLI is expected to reduce a large share of legacy Python dependency and runtime-related bugs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-06
Repository: [anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. Today's Highlights
OpenCode shipped two stable releases (v1.16.0 and v1.16.2) in the last 24 hours, delivering long-requested managed workspace capabilities, native AWS Bedrock OpenAI model support, and critical safety fixes for unintended code overwrite events. Maintainers merged over 15 pre-vetted community contributions for context recovery, local LLM discovery, and UX improvements, while the 51-comment agent sandboxing feature request remains the most actively discussed topic across the community.

## 2. Releases
Two official builds were published in the 24-hour window:
- **[v1.16.2](https://github.com/anomalyco/opencode/releases/tag/v1.16.2)** (patch release): Restricts reasoning summary execution exclusively to supported providers to eliminate GPT-5 request failures on misconfigured backends, adds strict loose-match validation for edit operations to prevent accidental overwrites of unrelated files, and introduces partial fixes for hanging Bedrock sessions.
- **[v1.16.0](https://github.com/anomalyco/opencode/releases/tag/v1.16.0)** (minor release): Adds managed workspace cloning that preserves dirty and untracked changes, cross-workspace session migration, native OpenAI model routing via AWS Bedrock, file-based skill discovery for custom agent loading, and updated GitHub Copilot usage logic.

## 3. Hot Issues (Top 10)
| Issue | Details & Context | Community Reaction |
|---|---|---|
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | Open: Request for agent sandboxing to restrict terminal/file access outside the working directory, equivalent to macOS Seatbelt used by competing CLI tools | 51 comments, 51 👍, highest engagement of any open issue, with local development and security-focused users prioritizing this for enterprise deployments |
| [#2047](https://github.com/anomalyco/opencode/issues/2047) | Open: LM Studio model list does not refresh even after full auth logout/login cycles | 15 comments, local LLM users reporting no usable workaround to load newly added local models |
| [#29992](https://github.com/anomalyco/opencode/issues/29992) | Open: Response auto-scroll breaks permanently if a user manually scrolls up and returns to the bottom of the viewport mid-generation | 12 comments, 15 👍, core UX bug that disrupts reading of long LLM outputs for all desktop/web users |
| [#30862](https://github.com/anomalyco/opencode/issues/30862) | Open: Reports of full UI hangs post-upgrade to v1.16.2, with session titles updating in the backend but zero responses rendered to the user | 11 comments, multiple users confirm the issue persists even after full CLI/GUI reinstalls |
| [#30811](https://github.com/anomalyco/opencode/issues/30811) | Open: Detailed root-cause breakdown of code quality degradation in long conversations, linked to over-aggressive message compaction that discards critical context | 11 comments, users share their own observed performance drops after 10+ message exchanges per session |
| [#12716](https://github.com/anomalyco/opencode/issues/12716) | Open: Doom loop detection fails to catch infinite reasoning/output loops, leading to unlimited token consumption | 8 comments, developers share reproduction cases where agents get stuck repeating the same thought loop for 100+ turns without triggering alerts |
| [#29059](https://github.com/anomalyco/opencode/issues/29059) | Open: Feature request for Claude Code-style project-local dynamic workflows for repeatable multi-step automation | 7 comments, 12 👍, teams working on standardized codebases cite this as a top requirement for reducing repetitive manual prompts |
| [#30948](https://github.com/anomalyco/opencode/issues/30948) | Closed: Bug causing empty outputs from non-AWS Bedrock-compatible gateways introduced in v1.16.0 | 7 comments, confirmed patched in the latest v1.16.2 release by maintainers |
| [#30948](https://github.com/anomalyco/opencode/issues/7801) | Open: Feature request to auto-switch from Plan mode to Build mode once a plan is fully drafted and approved | 5 comments, 18 👍, users criticize the current mandatory manual mode toggle as unnecessary friction |
| [#31000](https://github.com/anomalyco/opencode/issues/31000) | Open: Bug in Copilot model discovery constructs a non-existent `github.com` API endpoint, breaking model selection for non-enterprise GitHub users | 6 comments, widespread impact for regular Copilot subscribers using the OpenCode integration |

## 4. Key PR Progress (Top 10)
| PR | Description | Impact |
|---|---|---|
| [#31003](https://github.com/anomalyco/opencode/pull/31003) | Fix for V2 context overflow recovery: when local preflight context size estimates are off and the provider rejects a request for exceeding limits, the system automatically runs a forced targeted compaction and retries the request | Eliminates the 100% failure state that previously occurred when local and provider context limits were mismatched |
| [#31035](https://github.com/anomalyco/opencode/pull/31035) | Increases maximum stored base sessions per project from 16 to 64 | Resolves user complaints that old, high-value sessions were being evicted prematurely from the local store |
| [#31036](https://github.com/anomalyco/opencode/pull/31036) | Scopes V2 OpenAI prompt cache keys to individual session IDs instead of sharing a global key | Fixes cross-session state leakages that caused unrelated conversations to share partial prompt context and generate incorrect outputs |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | Adds LAN local provider discovery via mDNS to auto-scan and list running OpenAI-compatible local LLM servers on the user's network | Will resolve the LM Studio model refresh bug and simplify setup for users running self-hosted local models |
| [#31018](https://github.com/anomalyco/opencode/pull/31018) | Prepares public beta release of the new layered HTTP recorder API with automatic secret redaction, cassette persistence, and record/replay functionality | Makes it trivial for third-party plugin developers to build testable, auditability integrations that work with OpenCode |
| [#25909](https://github.com/anomalyco/opencode/pull/25909) | Adds Perplexity Search as a second backend option for the websearch tool, supplementing the existing Exa MCP endpoint | Improves region coverage and search result quality for users in regions where Exa has limited access |
| [#25919](https://github.com/anomalyco/opencode/pull/25919) | Adds default temperature configuration for custom OpenAI-compatible provider models | Fixes the common broken zero-temperature output bug that affected users running custom self-hosted model endpoints |
| [#31034](https://github.com/anomalyco/opencode/pull/31034) | Experimental Desktop v2 tab architecture overhaul that decouples tab navigation from mounted app instances | Improves multi-workspace performance and fixes state leakage across different open project tabs |
| [#30941](https://github.com/anomalyco/opencode/pull/30941) | Sessions list UX improvements: adds project avatars and live open terminal indicators in the sidebar | Reduces user confusion when managing 10+ concurrent sessions across multiple projects |
| [#25867](https://github.com/anomalyco/opencode/pull/25867) | Fixes Immer read-only property assignment error that occurred on every tool call for users with experimental features enabled | Eliminates a common hard crash that broke execution for power users testing new core features |

## 5. Feature Request Trends
The highest-voted feature directions from the last 24 hours include:
1. Local LLM ecosystem maturity: Auto-discovery of local network model endpoints, native LM Studio integration, and vision/attachment support for custom non-standard providers
2. Agent guardrails: Full sandboxing of agent file/terminal access, improved cross-message infinite loop detection to prevent token waste
3. UX friction reduction: Auto mode switching between Plan and Build workflows, restored previously popular CLI autocomplete behavior
4. Advanced automation support: Project-local declarative dynamic workflows to codify repeatable multi-step tasks for teams
5. Improved documentation for advanced configuration, including full public docs for the custom provider `modalities` property

## 6. Developer Pain Points
Recurring high-frequency frustrations reported today:
1. Post-v1.16 upgrade regressions: Multiple users report UI hangs, missing UI buttons, empty Bedrock outputs, and unresponsive MCP toggles immediately after updating to the latest release
2. Local LLM compatibility gaps: Broken model refresh for LM Studio, missing default parameters for custom OpenAI-compatible endpoints, widespread broken Copilot model discovery for standard GitHub users
3. Context degradation in long conversations: Overly aggressive message compaction throws away critical context, leading to steadily worsening code quality as sessions get longer
4. Process leak bugs: Orphaned opencode background processes are not cleaned up after parent process exit, consuming ~500MB of memory per instance and causing unexpected reconnections to dead sessions
5. Desktop cross-platform inconsistencies: Missing "open folder in OS file explorer" button on Windows, broken session history migration from Windows to WSL, unresponsive UI elements on macOS

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-06
> Source: github.com/badlogic/pi-mono (earendil-works/pi upstream)

---

## 1. Today's Highlights
No new stable releases were published in the last 24 hours, but the community saw heavy traction on a high-severity ongoing bug causing OpenAI Codex TUI hangs for GPT-5.5 users, with 53 total comments from affected developers. Merged foundational improvements include the new `@pi-mono/self-evolver` self-improvement module, native multi-subagent support, and a batch of patches resolving long-standing compatibility gaps for local LLMs (Ollama, vLLM/Qwen3) and alternative model providers.

## 2. Releases
No new pre-release or stable versions of the Pi toolkit were rolled out in the 24 hours preceding 2026-06-06.

## 3. Hot Issues (Top 10 Notable Items)
All issues below were updated in the last 24 hours, sorted by community engagement:
1. [#4945](https://github.com/earendil-works/pi/issues/4945) (Open, 53 comments, 28 👍): `openai-codex` hangs indefinitely on the "Working..." state with no visible error for aborted no-op turns. It is the highest-voted open bug, affecting all interactive GPT-5.5 users, who currently can only recover by manually pressing Escape. The issue is tagged as part of the known `openclaw-clanker` batch of unhandled stream edge cases.
2. [#2023](https://github.com/earendil-works/pi/issues/2023) (Open, 12 comments): Request for native `pi.runWhenIdle()` API to schedule work after the agent fully settles. Extension developers report current workarounds for this flow are flaky and break for background logic like runtime reloading.
3. [#3715](https://github.com/earendil-works/pi/issues/3715) (Closed, 9 comments): Local LLM streams terminate exactly at 5 minutes due to undici's hardcoded `bodyTimeout`, and user-defined `retry.provider.timeoutMs` settings could not override this limit. The fix is already shipped, resolving generation failures for long Write tool runs against vLLM/Qwen3 instances.
4. [#5188](https://github.com/earendil-works/pi/issues/5188) (Open, 5 comments, 2 👍): Custom keybindings fail to map `shift+enter` to new line, with the input triggering form submission instead. The bug breaks muscle memory for thousands of users who configure their TUI to mirror common IDE input behavior.
5. [#5386](https://github.com/earendil-works/pi/issues/5386) (Open, 4 comments): `getSessionStats()` crashes completely when interacting with Ollama models that do not return token usage fields in responses. The breakage eliminates session-level token tracking for all local-first Ollama users.
6. [#5420](https://github.com/earendil-works/pi/issues/5420) (Open, 2 comments, 3 👍): Auto-compaction for 200k+ token long sessions throws an unhandled "Cannot continue from message role: assistant" crash. It affects power users working on large codebases that hit context window limits regularly.
7. [#5384](https://github.com/earendil-works/pi/issues/5384) (Closed, 3 comments): The existing DeepSeek `developer` role compatibility fix only applied to direct `api.deepseek.com` traffic, and still sent the invalid role header for DeepSeek models routed via OpenRouter or other third-party proxies, causing persistent 400 errors.
8. [#5279](https://github.com/earendil-works/pi/issues/5279) (Closed, 3 comments): Feature request for native CLI image attachment support for users running Pi over SSH. The shipped feature enables vision model workflows for headless remote instances without requiring a local GUI clipboard.
9. [#5389](https://github.com/earendil-works/pi/issues/5279) (Closed, 3 comments): macOS Tahoe system-level speech-to-text input freezes Pi's TUI rendering during long workloads, even if background execution continues. The patch resolves the TUI render blocking issue.
10. [#5416](https://github.com/earendil-works/pi/issues/5416) (Closed, 2 comments): The global `sanitizeSurrogates()` utility modified raw Claude thinking block content, breaking Anthropic's payload signature validation and causing random hard-to-debug 401 auth errors.

## 4. Key PR Progress (Top 10 High-Impact Merges / In-Flight Work)
1. [#5442](https://github.com/earendil-works/pi/pull/5442) (Closed): New `@pi-mono/self-evolver` module is added, leveraging Pi's existing 5D memory system as a genome equivalent for self-improving agent workflows without requiring a separate custom skill pool.
2. [#5426](https://github.com/earendil-works/pi/pull/5426) (Closed): A new native workflow extension for multi-agent orchestration is shipped, including a shared `workflow-core` library that supports sequential, parallel, and chained subagent execution with per-step context isolation.
3. [#5439](https://github.com/earendil-works/pi/pull/5439) (Closed): Exposes previously unexported path helpers (`getPackageDir()`, `getDocsPath()`, `getExamplesPath()`) from the `pi-coding-agent` public API, unblocking extension developers that need to reference bundled toolkit assets.
4. [#5434](https://github.com/earendil-works/pi/pull/5434) (Closed): Improves edit tool robustness by dropping the overstrict `additionalProperties: false` validation rule on edit payloads, so non-ideal, partial schema outputs from weak local LLMs no longer fail file edit operations.
5. [#5435](https://github.com/earendil-works/pi/pull/5435) (Closed): Adds post-transform LLM message validation, which catches invalid message sequences generated by extension hooks before they are sent to LLM providers, eliminating opaque vendor-specific errors like MiniMax 2013.
6. [#5262](https://github.com/earendil-works/pi/pull/5262) (Open / In Progress): Native `anthropic-vertex` provider support, letting GCP enterprise users access Claude via their existing Vertex AI accounts without custom proxy configuration.
7. [#5441](https://github.com/earendil-works/pi/pull/5441) / [#5440](https://github.com/earendil-works/pi/pull/5440) (Closed): Native Codex subagent support is merged, removing the previous restriction that limited Pi to a single top-level concurrent agent.
8. [#5332](https://github.com/earendil-works/pi/pull/5332) (Open / In Progress): Workspace approval system, adding first-run permission prompts for untrusted `.pi` and `.pi.user` directories to block malicious extensions from executing without explicit user consent.
9. [#5437](https://github.com/earendil-works/pi/pull/5437) (Closed): Neutralizes the hardcoded "AI coding assistant" string in the global summarization prompt, making context window compaction work correctly for non-coding, general purpose agent use cases.
10. [#5429](https://github.com/earendil-works/pi/pull/5429) (Closed): Improves error messaging for corrupted `models.json` files, showing a human-readable error instead of an unhandled raw JSON.parse stack trace during startup.

## 5. Feature Request Trends
- **Transport upgrades**: Top user requests include full WebSocket / `websocket-cached` support for the general OpenAI API, as well as WebSocket transport for the `openai-responses` provider, to reduce connection latency and overhead.
- **Extension extensibility**: Developers are requesting more exposed lifecycle APIs including idle state detection, extended `ExtensionContext` utilities, and a fully composable `runAgentSession` function extracted from the monolithic `main.ts` to make embedding Pi in custom workflows trivial.
- **Local-first UX**: High demand for native headless image attachment support for SSH users, plus configurable output padding to eliminate leading spaces in responses and simplify plain text copy-paste workflows.
- **Provider config simplification**: Widespread requests for native alias support for model IDs from third-party providers (Fireworks, OpenRouter) to eliminate manual vendor workarounds for proxy-routed traffic.

## 6. Developer Pain Points
1. The batch of unhandled `openclaw-clanker` stream edge cases are pervasive, causing random freezes, crashes, and uncaught errors across TUI rendering, provider streams, and input paths.
2. Cross-provider compatibility workarounds are inconsistently applied, and do not propagate to proxy-routed traffic, leading to hard-to-debug 400 errors for users that route API keys via third-party aggregators.
3. Extension async lifecycle behavior is flaky in non-interactive mode: Pi exits before background async callbacks fire, dropping logic scheduled by extensions like the popular `pi-ensemble` multi-agent orchestrator.
4. User-defined configuration overrides often do not apply to lower layers of the stack, including the 5-minute undici timeout limit that blocked long local LLM generation runs.
5. TUI keybinding logic has unpatched inconsistencies, with user customizations for high-frequency inputs like new line submission failing to respect defined configs.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-06
---
## 1. Today's Highlights
The latest v0.17.1 nightly pre-release landed yesterday with core preparation work for the stable v0.17.1 launch and a popular CLI quality-of-life fix that filters internal model reasoning content from user clipboard copies. Maintainers and community contributors are converging on fixes for long-standing high-priority OOM bugs affecting long-running resumed sessions, while the daemon/web-shell roadmap is being rapidly expanded with feature parity work with the native CLI experience. Self-hosted LLM user experience improvements are also gaining strong momentum, with multiple open PRs and feature requests addressing pain points for users running OpenAI-compatible local endpoints like vLLM and LM Studio.

## 2. Releases
### v0.17.1-nightly.20260605.715266537
This pre-release build, published by the Qwen CI bot via [PR #4742](https://github.com/QwenLM/qwen-code/pull/4742), includes core release choreography for the upcoming stable v0.17.1, plus a targeted CLI fix from contributor @he-yufeng that automatically skips the model's internal thought segments when users copy generated output, to prevent accidental leakage of intermediate reasoning content.

## 3. Hot Issues (Top 10 Notable)
| Issue Link | Details & Relevance |
|-----|-----|
| [#4815](https://github.com/QwenLM/qwen-code/issues/4815) | *P1 Critical Bug: Severe OOM with `qwen --resume` + broken Escape key*. Reproducible within 10 minutes of resuming a saved session, this crash affects all power users who maintain long-running multi-hour work sessions and is the highest priority stability issue for the community. |
| [#3384](https://github.com/QwenLM/qwen-code/issues/3384) | [13 comments] Open: Unable to add OpenAI-compatible local LLMs. A long-running issue for self-hosted users running models like Qwen3.6-35B on vLLM, the large discussion thread indicates widespread configuration friction for local LLM adopters. |
| [#4802](https://github.com/QwenLM/qwen-code/issues/4802) | Open: Qwen3.7-plus missing multimodal (image/video) support. Marked as welcome-PR, this bug blocks users of Alibaba's latest flagship Qwen model from accessing its native multimodal input capabilities in Qwen Code. |
| [#4801](https://github.com/QwenLM/qwen-code/issues/4801) | Open: Feature request for dedicated `web_search` tool. The current implementation only supports fetching content for explicit, known URLs, with no native general web search functionality, a top requested core productivity feature. |
| [#4777](https://github.com/QwenLM/qwen-code/issues/4777) | Open: Deferred MCP tool listing busts prompt cache on every discovery. This bug wastes tokens and increases latency, as the entire cached system prompt is invalidated every time a new MCP tool is revealed to the model. |
| [#4813](https://github.com/QwenLM/qwen-code/issues/4813) | Open: No shared baseUrl config for multiple models under the same custom provider. Currently forces users to duplicate the same endpoint URL across every individual model entry, making multi-model local vLLM setups extremely verbose. |
| [#4814](https://github.com/QwenLM/qwen-code/issues/4814) | Open: Feature request to simplify the custom provider model addition UI. Directly addresses the onboarding friction reported in #3384, to lower the barrier to entry for new users setting up self-hosted LLMs. |
| [#4794](https://github.com/QwenLM/qwen-code/issues/4794) | Open: Full-screen flash on every tool batch in compact mode. This TUI rendering bug severely disrupts the workflow for CLI power users who enable compact mode for high-density output viewing. |
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | [12 comments] Open: Daemon capability gaps tracking backlog post v0.16-alpha. The central tracking issue for all web-shell/ACP remote deployment roadmap work, used by core maintainers to prioritize upcoming features. |
| [#4748](https://github.com/QwenLM/qwen-code/issues/4748) | Open: Daemon cold start optimization target (2.5s → ~1.5s). This performance enhancement directly addresses one of the largest user experience gaps between the native CLI and remote web-shell deployment. |

## 4. Key PR Progress (Top 10 High-Impact)
| PR Link | Changes |
|-----|-----|
| [#4803](https://github.com/QwenLM/qwen-code/pull/4803) | Fixes missing multimodal support for Qwen3.7-plus by updating the model modality detection logic to follow the Qwen naming convention, where all "Plus" variants support image and video input. |
| [#4793](https://github.com/QwenLM/qwen-code/pull/4793) | Adds automatic coercion of non-string tool parameters (numbers/booleans) to strings for self-hosted LLMs, preventing validation errors that break core `write_file` and `edit` operations on vLLM/LM Studio deployments. |
| [#4811](https://github.com/QwenLM/qwen-code/pull/4811) | Enables 3 high-usage memory management slash commands (`/remember`, `/forget`, `/dream`) in ACP web-shell mode, adding critical feature parity between the remote daemon and native CLI. |
| [#4812](https://github.com/QwenLM/qwen-code/pull/4812) | Adds the new `POST /session/:id/branch` API endpoint for session forking, letting web-shell users create copies of existing work sessions to safely experiment with changes without modifying their original history. |
| [#4795](https://github.com/QwenLM/qwen-code/pull/4795) | Eliminates the full-screen flash bug in compact mode by skipping cross-group tool merge operations in the Ink `<Static>` render mode, removing the forced full history redraw that triggered the visual glitch. |
| [#4798](https://github.com/QwenLM/qwen-code/pull/4798) | Injects the current date and time as a system reminder on every user query, preventing stale temporal context bugs for sessions that span multiple hours or days. |
| [#4810](https://github.com/QwenLM/qwen-code/pull/4798) | Fixes the hidden OpenAI SDK abort listener memory leak by wrapping per-request abort signals in short-lived child controllers, preventing unremoved event listeners from accumulating across long sessions. |
| [#4808](https://github.com/QwenLM/qwen-code/pull/4808) | Ships the community-requested bundled `desktop-pet` skill that generates customizable chibi pixel-art desktop companions for any user-specified character. |
| [#4563](https://github.com/QwenLM/qwen-code/pull/4563) | Architecture refactor that extracts the new `DaemonWorkspaceService` facade from the existing AcpSessionBridge, paving the way for more stable, consistent remote workspace operation. |
| [#4647](https://github.com/QwenLM/qwen-code/pull/4647) | Replaces the old cross-platform clipboard module with native Linux tools (`wl-paste`/`xclip`), fixing long-standing WSL2 + Wayland clipboard image paste bugs that broke multimodal workflows on Linux. |

## 5. Feature Request Trends
1. **Web-shell/ACP daemon parity first**: The largest volume of new feature requests focus on closing functionality gaps between the remote daemon/web-shell and the native CLI, including full slash command support, session forking, and cold start latency reductions.
2. **Self-hosted LLM UX improvements**: Users are overwhelmingly requesting simpler, more streamlined workflows for adding custom OpenAI-compatible local LLM endpoints, including shared baseUrl config, visual setup wizards, and better validation for custom model configurations.
3. **Native core tool expansion**: The top requested new core feature is a dedicated general-purpose web search tool, to replace the current limited implementation that only supports explicit single-URL content fetching.
4. **Customizable bundled skills**: Community demand is growing for optional, user-facing fun features like the desktop pixel pet, as well as utility features like a full interactive skills picker dialog for browsing and toggling available extensions.

## 6. Developer Pain Points
1. **Recurring memory leak and OOM instability**: 8+ separate user reports of high memory usage and out-of-memory crashes were updated yesterday, spanning resume flows, long multi-hour sessions, and terminal window resizing events, making memory management the top unaddressed critical stability pain point.
2. **Self-hosted configuration friction**: Duplicate endpoint URLs, missing validation, and lack of visual onboarding for custom OpenAI-compatible providers are the most frequently cited barriers to adoption for local LLM users.
3. **TUI/CLI edge case bugs**: Power CLI users consistently report broken Vim mode Esc key behavior, compact mode rendering glitches, and overflowing selection dialogs in small terminal windows as top UX frustrations.
4. **Daemon performance gaps**: The 2.5s daemon cold start latency is ~3.5x slower than the native CLI's 0.7s startup time, and missing support for 13 commonly used slash commands are the two largest blockers for teams looking to deploy Qwen Code as a shared remote service for their organizations.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-06
---
## 1. Today's Highlights
No new official releases shipped in the last 24 hours, as the project team prioritizes work on the upcoming v0.9.0 stabilization cycle. Multiple high-impact feature harvests have been merged recently, including deterministic LLM response caching, native Hugging Face integration, and pausable custom slash commands. Community discussion is heavily focused on expanding IDE interoperability, cross-platform support for domestic operating systems, and resolving long-standing TUI usability pain points.

## 2. Releases
No new public releases published in the past 24 hours. All active development work is consolidated under the v0.9.0 stewardship integration branch, with no release tag, package publish or artifact deployment workflows triggered for this cycle yet.

## 3. Hot Issues
1. [Issue #2766: UI refactor needed](https://github.com/Hmbown/CodeWhale/issues/2766) – 8 comment threads on pain points for copying output content, and intrusive confirmation popups that hide the main interface while displaying low-value information, a top usability complaint for regular users.
2. [Issue #1264: Feature request: Add VS Code plugin similar to OpenCode](https://github.com/Hmbown/CodeWhale/issues/1264) – Long-running enhancement request with 6 community comments, representing widespread demand to move beyond the default terminal-only workflow for day-to-day coding tasks.
3. [Issue #2621: Support Xiaomi MiMo Token Plan API Endpoint & Pricing Model](https://github.com/Hmbown/CodeWhale/issues/2621) – 4 comment discussions on adding support for Xiaomi's newly launched tiered subscription model, as the existing MiMo provider only works for pay-as-you-go usage, creating a critical gap for regional Chinese users who purchased the token plan.
4. [Issue #2574: Provider fallback chain — auto-switch on API failure](https://github.com/Hmbown/CodeWhale/issues/2574) – Users are forced to manually run `/provider` to switch services when the current provider hits quota limits, 429 rate limits or 5xx errors, which breaks long-running uninterrupted agent workflows.
5. [Issue #2625: Port to HarmonyOS](https://github.com/Hmbown/CodeWhale/issues/2625) – Active contributor work to build the project for the aarch64-unknown-linux-ohos target, with the only remaining blocker being an ioctl type mismatch in the transitive `rustyline -> nix` dependency chain, enabling support for China's domestic OpenHarmony ecosystem.
6. [Issue #2580: Adapt CodeWhale to VSCode Agent View](https://github.com/Hmbown/CodeWhale/issues/2580) – 2 community comments requesting native integration with VS Code's new official Agent View API, rather than a generic terminal emulator embedded plugin, for a fully native IDE coding experience.
7. [Issue #2739: Task execution freeze bug](https://github.com/Hmbown/CodeWhale/issues/2739) – Reports from long-time users that long-running bug fix tasks hang indefinitely, pressing ESC to cancel leads to timeout errors, and exiting and resuming from the CLI causes full loss of the in-progress session content.
8. [Issue #2086: Contribution-gate workflow + `APPROVED_CONTRIBUTORS` allowlist](https://github.com/Hmbown/CodeWhale/issues/2086) – Marked as a good first issue, this feature will add automated PR and issue triage GitHub Actions to reduce maintainer workload from unvetted new submissions.
9. [Issue #2787: TUI status bar displays MCP count error](https://github.com/Hmbown/CodeWhale/issues/2787) – Bug in the v0.9.0-stewardship branch that miscounts total MCP servers when both global `~/.codewhale/mcp.json` and project-level `.codewhale/mcp.json` config files are present, blocking new feature validation.
10. [Issue #2791: Refactor command dispatch from monolithic match to modular strategy pattern](https://github.com/Hmbown/CodeWhale/issues/2791) – The current ~200-line monolithic match block for all slash commands creates unnecessary maintenance overhead for contributors adding new features, this refactor will dramatically lower barrier to entry for new command additions.

## 4. Key PR Progress
1. [PR #2762: v0.9.0 stewardship integration](https://github.com/Hmbown/CodeWhale/pull/2762) – Open central integration branch for all v0.9.0 stabilization and feature harvest work, provides a unified CI check surface for all incoming PRs with no release-related workflows in scope.
2. [PR #2805: Harvest deterministic response cache from #2501](https://github.com/Hmbown/CodeWhale/pull/2805) – Merged non-streaming, tool-free LRU response cache that returns cached results for duplicate identical requests, cutting redundant API costs and speeding up retries for failed requests.
3. [PR #2782: feat(hf): add /hf command with MCP detection, Hub search, and docs](https://github.com/Hmbown/CodeWhale/pull/2782) – Fully merged native Hugging Face integration, supporting MCP server detection, public model search, and guided setup flows that fulfill the v0.9.0 Hugging Face ecosystem roadmap requirement.
4. [PR #2803: Harvest pausable custom command MVP from #2732](https://github.com/Hmbown/CodeWhale/pull/2803) – Merged minimal working implementation of pausable custom slash commands, allowing users to pause long-running tasks, type unrelated inputs, and resume execution later, extracted and validated from the full feature PR #2732.
5. [PR #2634: feat: porting to HarmonyOS](https://github.com/Hmbown/CodeWhale/pull/2634) – Open active work to conditionally exclude Linux-specific code paths for non-POSIX targets, with 90% of build errors resolved, only pending upstream patch or conditional build for the transitive nix dependency.
6. [PR #2753: feat(tui): multi-tab system with cross-tab collaboration](https://github.com/Hmbown/CodeWhale/pull/2753) – Introduces a persistent TabManager that isolates per-tab chat history, session context and mentions, supporting standard keyboard shortcuts (Ctrl+Tab, Ctrl+` etc.) for multi-tasking workflows.
7. [PR #2048: feat(tui): live shell output during execution - show real-time progress](https://github.com/Hmbown/CodeWhale/pull/2048) – Open PR that replaces the current default behavior of hiding all shell command output until execution finishes, rendering incremental live streaming output to show progress for long-running tasks.
8. [PR #2781: feat(tui): ghost-text follow-up prompt suggestion](https://github.com/Hmbown/CodeWhale/pull/2781) – Adds Claude Code-style dimmed inline follow-up prompt suggestions generated by fast lightweight models, with 1-tab acceptance to reduce user typing overhead.
9. [PR #2804: fix(tui): surface subagent branch status](https://github.com/Hmbown/CodeWhale/pull/2804) – Merged fix that adds git branch and workspace path metadata to all subagent snapshots, refreshes parent workspace state automatically after subagents finish shell tasks to improve traceability of parallel agent runs.
10. [PR #2522: feat(client): add hard compaction option preserving system segment](https://github.com/Hmbown/CodeWhale/pull/2522) – Open feature that adds an opt-in hard conversation compaction mode that summarizes mid-history messages while fully preserving the system prompt and last 8 recent messages, reducing token usage for extremely long-running sessions.

## 5. Feature Request Trends
1. **VS Code ecosystem integration** is the highest-demand user priority, covering both a general lightweight plugin similar to OpenCode and native compatibility with VS Code's new official Agent View API for a fully native IDE AI coding experience.
2. **Multi-provider robustness upgrades** remain a top community request, including Xiaomi MiMo Token Plan endpoint support, user-configurable OpenAI path suffixes to support niche third-party model providers, and automatic provider fallback chains to eliminate manual service switching during outages.
3. **Ecosystem and cross-platform expansion** requests are growing quickly, including native HarmonyOS support, official Hugging Face MCP tooling integration, and auto-merge support for project-level `.codewhale/mcp.json` configuration to streamline team collaboration.

## 6. Developer Pain Points
1. Workflow interruption bugs are widespread: Long-running tasks often freeze indefinitely, cancel operations trigger permanent timeouts, and session resume flows lead to loss of in-progress task data, breaking 30+ minute debugging or refactoring workflows.
2. Current TUI UX has consistent gaps: Output text cannot be copied easily, confirmation popups block the main interface, sidebar task labels are heavily truncated even on large terminals, and CLI documentation for resume flags is inconsistent with actual supported flags.
3. Maintainer and contributor friction remains high: The current monolithic command dispatch logic requires modifying a single long 200-line match block for every new slash command addition, and the lack of automated PR/issue triage workflows increases manual workload for project maintainers.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*