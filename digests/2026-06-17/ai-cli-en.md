# AI CLI Tools Community Digest 2026-06-17

> Generated: 2026-06-16 23:24 UTC | Tools covered: 9

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

# 2026-06-17 AI CLI Tools Cross-Tool Comparison Report
---
## 1. Ecosystem Overview
As of mid-June 2026, the global AI developer tools CLI ecosystem has shifted its priority from raw LLM capability expansion to stability hardening, enterprise governance, and workflow unification after two years of rapid feature iteration. Most active development teams are resolving long-standing user pain points including opaque quota consumption, unhandled agent hangs, and cross-platform compatibility gaps that have slowed enterprise adoption for regulated workloads. Core feature roadmaps now largely prioritize native workflow utilities such as persistent session tracking and iterative automation, to reduce unnecessary overhead from verbose manual natural language prompting for repetitive coding tasks. While the ecosystem continues to converge on the open Model Context Protocol (MCP) as a shared extensibility standard, notable gaps remain across tools in implementation quality, platform support, and maturity for production use cases.

## 2. Activity Comparison
| Tool Name | Total Updated Hot Issues | Active PR Count (24h window) | Latest 24h Release Status |
|---|---|---|---|
| Claude Code (Anthropic) | 10 | 10 | 1 rolling priority bugfix release (v2.1.179) |
| OpenAI Codex | 10 | 10 | 3 sequential Rust alpha pre-releases (v0.141.0-alpha.1/2/3) |
| Gemini CLI (Google) | 10 | 10 | No new releases |
| GitHub Copilot CLI | 10 | 0 | No new releases (last stable v1.0.63 published June 15) |
| Kimi Code CLI (Moonshot) | 5 | 1 | No new releases |
| OpenCode | 10 | 10 | No new releases |
| Pi | 10 | 9 | 2 stable patch releases (v0.79.5, v0.79.6) |
| Qwen Code | 10 | 10 | 2 pre-releases (v0.18.1-nightly, v0.18.1-preview.0) |
| DeepSeek TUI (CodeWhale) | 10 | 7 | 1 major rebrand release (v0.8.61) |

## 3. Shared Feature Directions
Multiple overlapping high-priority requirements appear across 6+ tool communities:
1. **MCP workflow hardening**: 6 tools (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi, Pi) share user demand for persistent one-time approval for trusted MCP servers, automatic cleanup of stale MCP entries, and security controls to prevent supply chain attacks via colliding MCP resource URIs and partial credential writes.
2. **Full usage & quota transparency**: 6 tools (Claude Code, Codex, Copilot, Kimi, Pi, Qwen) prioritize end-to-end token counting that includes sub-agent and MCP call spend, explicit quota breakdowns, and guardrails to block hidden unannounced reasoning effort downgrades that degrade performance without user notification.
3. **Native slash command workflow utilities**: 5 tools (OpenCode, Pi, Qwen, Codex, Claude Code) see high user demand for dedicated non-natural-language commands for iterative loop execution (`/loop`), persistent session goal tracking (`/goal`), and queued batch tasks, to eliminate verbose prompt overhead for repetitive dev operations.
4. **Cross-platform edge case compatibility**: 7 tools report widespread user requests to resolve long-standing breakages including WSL2 scroll support, removal of macOS Gatekeeper false positives, Wayland browser agent support for Linux users, and preservation of legacy non-UTF8 file encodings for Windows enterprise workloads.

## 4. Differentiation Analysis
### Feature Focus
- Big vendor offerings (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI) prioritize enterprise governance features: team-shared project rule enforcement, admin-managed custom models, secure internal enterprise MCP connectors, and audit logging for regulated teams.
- Independent open source offerings (OpenCode, Pi, CodeWhale) focus on extensibility: native local LLM runtime support, custom third-party UI embedding, dynamic fallback model routing, and broad integration support for 10+ different LLM provider ecosystems.
- China-native regional tools (Kimi Code CLI, Qwen Code) are optimized for local user pain points: legacy CentOS 7 compatibility, CJK text rendering fixes, native QQ/WeChat/DingTalk bot integration, and pre-configured support for domestic self-hosted model endpoints.
### Target Users
- Claude Code and OpenAI Codex target enterprise teams standardized on their respective parent company LLM backends for regulated coding workflows.
- Gemini CLI prioritizes Linux open source power users and GCP enterprise customers.
- GitHub Copilot CLI is built for GitHub ecosystem users with deep native integration with GitHub repositories and Copilot admin policies.
- Pi and OpenCode target multi-provider power users and self-hosted local LLM operators with zero vendor lock-in requirements.
### Technical Approach
- OpenAI Codex is executing a full ground-up Rust rewrite of its CLI, TUI and core runtime to improve stability.
- Claude Code ships iterative rolling patch releases to resolve user-reported regressions as fast as possible.
- Pi is built around a fully provider-agnostic auth abstraction layer to support every major LLM provider with no manual config changes required.

## 5. Community Momentum & Maturity
Tools fall into three distinct maturity tiers based on the latest 24h activity metrics:
1. **Tier 1 (Mature, largest active community)**: Claude Code and OpenAI Codex. Both track thousands of active community issues, top high-priority bugs have hundreds of user comments and upvotes, and both maintain steady high-volume PR and release cadences built on 6+ years of accumulated ecosystem development.
2. **Tier 2 (Rapidly iterating, fast-growing user base)**: Pi, Qwen Code, OpenCode, and Gemini CLI. All four tools ship 1+ releases per day, merge 8+ high-impact PRs daily, and are actively expanding their user bases beyond initial core target audiences.
3. **Tier 3 (Steady growth, focused activity)**: GitHub Copilot CLI, Kimi Code CLI, CodeWhale. Copilot CLI has paused new feature work in the reporting window to triage critical stability bugs. Kimi and CodeWhale operate as smaller regional projects with focused community activity targeting their respective Chinese-speaking developer user bases.

## 6. Trend Signals & Developer Reference Value
1. MCP has become the de facto global standard for AI tool extensibility: Engineering teams building custom AI dev workflows can safely standardize on MCP servers for cross-tool integration, eliminating redundant work building separate plugins for different CLI platforms.
2. User priorities have moved past raw LLM performance differentiation: Teams selecting an AI CLI tool should prioritize products with demonstrated track records of stability, transparent billing, and consistent cross-platform behavior, rather than tools that only advertise superior underlying model performance.
3. Provider-agnostic open CLI tools are gaining rapid market share: Power users are increasingly rejecting vendor-locked tools that only work with their parent company's LLM, in favor of offerings like Pi and OpenCode that support local models and flexible third-party provider configurations.
4. Native unattended agent automation is the next mainstream workflow shift: Widespread cross-tool rollout of `/loop` dynamic execution, persistent `/goal` tracking, and scheduled automation features will soon allow developers to fully offload multi-hour repetitive coding tasks to unattended CLI agents, drastically reducing manual toil for long-running refactoring and validation workloads.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (As of 2026-06-17)
---
## 1. Top Skills Ranking
The 7 highest-profile, community-aligned submitted skills, all currently open for review:
1. **skill-quality-analyzer + skill-security-analyzer (PR #83)**  
   GitHub link: https://github.com/anthropics/skills/pull/83  
   Functionality: Two meta-skills that evaluate new community-submitted skills across 5 dimensions (structure, documentation, security, trigger clarity, utility) to catch low-quality or malicious submissions. Discussion highlights: Community widely requested these guardrail skills to address the reported `anthropic/` namespace impersonation trust vulnerability.
2. **document-typography skill (PR #514)**  
   GitHub link: https://github.com/anthropics/skills/pull/514  
   Functionality: Automated typographic quality control for AI-generated documents, preventing orphan word wraps, stranded section headers at page breaks, and numbered list alignment errors. Discussion highlights: Addresses a universal unmet pain point for all users generating formal reports, contracts, or academic documents with Claude.
3. **ODT / OpenDocument skill (PR #486)**  
   GitHub link: https://github.com/anthropics/skills/pull/486  
   Functionality: Full support for creating, parsing, template-filling, and converting .odt/.ods OpenDocument (LibreOffice) files to/from HTML. Discussion highlights: Fills a gap in existing document processing skills that only support DOCX and PDF, catering to enterprise users that use open ISO standard document formats.
4. **ServiceNow platform skill (PR #568)**  
   GitHub link: https://github.com/anthropics/skills/pull/568  
   Functionality: End-to-end guidance for the full ServiceNow workflow stack including ITSM, SecOps, ITAM, FSM, IntegrationHub, and CSDM. Discussion highlights: One of the most requested enterprise platform integration skills for operations teams using Claude to automate ServiceNow administrative tasks.
5. **testing-patterns skill (PR #723)**  
   GitHub link: https://github.com/anthropics/skills/pull/723  
   Functionality: Comprehensive testing framework guidance covering unit testing, React component testing, end-to-end testing, and production test philosophy aligned with the Testing Trophy model. Discussion highlights: Targets developer users that want Claude to generate production-ready, test-covered code rather than unvetted snippets.
6. **SAP-RPT-1-OSS predictor skill (PR #181)**  
   GitHub link: https://github.com/anthropics/skills/pull/181  
   Functionality: Integrates SAP’s 2025 open source tabular foundation model for predictive analytics natively on SAP business data. Discussion highlights: Built specifically for the large global enterprise base of SAP users that want to run local, compliant analytics on their ERP data via Claude.
7. **masonry-generate-image-and-videos skill (PR #335)**  
   GitHub link: https://github.com/anthropics/skills/pull/335  
   Functionality: Native integration for Masonry CLI to generate Imagen 3.0 images and Veo 3.1 videos directly from Claude Code workflows. Discussion highlights: Extends Claude Code’s existing text/code capabilities to cover full multi-modal creative asset generation.

---
## 2. Community Demand Trends
Distilled from top-voted, highest-comment open issues:
1. **Team/enterprise collaboration features**: The #1 most requested feature is native org-wide skill sharing (14 comments, Issue #228) to eliminate the manual workflow of sending .skill files via Slack/Teams for distribution across enterprise teams.
2. **Skill creation workflow hardening**: Overlapping high-comment issues confirm the broken `run_eval.py` 0% recall bug (12 comments, Issue #556) and missing Windows compatibility for skill creator scripts are the highest priority pain points for community skill contributors.
3. **Security and ecosystem hygiene**: High demand for fixes to namespace impersonation risks, duplicate conflicting skill installations, 404 skill loading errors, and multi-file reference bundling to expand skill capabilities beyond single SKILL.md files.
4. **Cross-platform interoperability**: Community is actively requesting official support for Skills running on AWS Bedrock, export of skills as standard MCPs, and integration with enterprise productivity platforms including SharePoint, ServiceNow and SAP.

---
## 3. High-Potential Pending Skills
Active, recently updated PRs directly resolving top open community issues that are likely to merge imminently:
1. **Run_eval.py full bugfix PR #1298**: https://github.com/anthropics/skills/pull/1298, updated 2026-06-11, fully resolves the 0% recall bug that broke the entire skill description optimization loop, addressing top open issues #556 and #1169.
2. **Overlapping YAML validation PRs #361 and #539**: https://github.com/anthropics/skills/pull/361, https://github.com/anthropics/skills/pull/539, both fix silent YAML parsing failures for skill description fields with special characters, with community agreed consolidation of the two pending Anthropic review.
3. **Windows compatibility fix PRs #1050 and #1099**: https://github.com/anthropics/skills/pull/1050, https://github.com/anthropics/skills/pull/1099, resolve all three documented Windows skill-creator blockers (subprocess path handling, cp1252 encoding errors, pipe reading crashes) reported in Issue #1061.
4. **CONTRIBUTING.md addition PR #509**: https://github.com/anthropics/skills/pull/509, closes open Issue #452, increases the repository’s GitHub community health score from 25% to full compliance, and will lower barriers for new first-time contributors.

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community’s most concentrated demand is for hardened, cross-platform, enterprise-grade skill creation and sharing tooling that eliminates current workflow friction, paired with targeted platform-specific integration skills that solve high-frequency, unmet pain points for professional and business users.

---

# Claude Code Community Digest | 2026-06-17
---
## 1. Today's Highlights
Anthropic rolled out v2.1.179, a priority bugfix release that resolves mid-stream connection drop data loss and a widely reported WSL2 scrolling regression, closing out dozens of long-open platform and rule-reliability issues updated in the last 24 hours. The community submitted 18 merged or in-flight PRs focused on security hardening, cross-platform compatibility, and quality-of-life improvements for plugin developers, while the most active user discussions centered on persistent context compaction edge cases and unexpected usage quota behavior.
---
## 2. Releases
### v2.1.179 (Latest Rolling Update)
Key published changes include:
- Fixed partial response loss during mid-stream connection drops: incomplete outputs are now preserved locally instead of throwing unstructured raw errors, and the stuck "running tool" spinner state is eliminated
- Resolved mouse-wheel scrolling regression for WSL2 under Windows Terminal and VS Code, introduced in v2.1.172
- Partially published fix for sandbox `denyR` permission rule enforcement (full change details truncated in release notes)
---
## 3. Hot Issues
1. **[#19471](https://github.com/anthropics/claude-code/issues/19471): CLAUDE.md instructions completely ignored after context compaction (Closed)**
   - 27 comments, 9 upvotes: One of the longest-running high-priority bug reports affecting Windows users, this closure signals Anthropic has addressed a top complaint for teams that rely on custom project conventions defined in CLAUDE.md files.
2. **[#48806](https://github.com/anthropics/claude-code/issues/48806): Chrome control failures in Cowork Mode on macOS (Closed)**
   - 27 comments: Resolves broken browser automation use cases for users running Claude in Chrome, a core workflow for the MCP-enabled cowork feature.
3. **[#65514](https://github.com/anthropics/claude-code/issues/65514): Pro plan 1M context access blocked at only 17% reported usage (Open)**
   - 14 comments, 2 upvotes: Duplicate open bug affecting VS Code / Windows users that restricts access to advertised Pro tier capabilities despite far below quota consumption, currently triaged for a future patch.
4. **[#52135](https://github.com/anthropics/claude-code/issues/52135): Max tier 20x weekly quota depletes disproportionately fast (Closed)**
   - 14 comments, 4 upvotes: Addresses user complaints that the top-tier plan usage counters were consuming allocation 3-4x faster than the documented 20x baseline.
5. **[#59309](https://github.com/anthropics/claude-code/issues/59309): CLAUDE.md rules not propagated to Agent subagents (Closed)**
   - 12 comments: Fixes a gap where nested sub-agents launched by the main Claude process would ignore team-defined project rules entirely.
6. **[#32508](https://github.com/anthropics/claude-code/issues/32508): System prompt "output efficiency" section causes poor code quality (Closed)**
   - 11 comments, 9 upvotes: Highly popular user report noting the model was biased to take un-researched action prematurely instead of reading full context before making edits.
7. **[#68933](https://github.com/anthropics/claude-code/issues/68933): Skill creator MCP process leaks cause full system memory exhaustion (Open)**
   - 3 comments: New open bug affecting macOS plugin developers, where unclosed `claude -p` child processes accumulate during skill benchmarking until the system forces a hard reboot.
8. **[#55121](https://github.com/anthropics/claude-code/issues/55121): Token counter undercounts subagent spend by up to 10x (Closed)**
   - 6 comments: Resolves a major visibility gap where the UI's running usage counter completely omitted tokens consumed by nested sub-agent runs.
9. **[#43755](https://github.com/anthropics/claude-code/issues/43755): Per-prompt rewind/undo feature for desktop app (Closed / Triage Complete)**
   - 5 comments, 4 upvotes: Popular user feature request targeted for a near-future desktop release.
10. **[#68940](https://github.com/anthropics/claude-code/issues/68940): Unplanned server-side rate limit 500 errors (Open)**
    - 2 comments: Ongoing incident affecting macOS users on v2.1.172, caused by Anthropic's backend infrastructure hitting temporary capacity limits unrelated to individual user quota.
---
## 4. Key PR Progress
1. **[#46351](https://github.com/anthropics/claude-code/pull/46351): Enable PowerShell tool on macOS and Linux if `pwsh` is available**
   - Closed, pending merge: Removes the Windows-only hard gate for the native PowerShell execution tool, enabling cross-platform script workflows for DevOps teams that use PowerShell across environments.
2. **[#68786](https://github.com/anthropics/claude-code/pull/68786): Fix shell injection vulnerability in plugin dev `test-hook.sh`**
   - Open: Critical security hardening patch for the plugin developer toolkit that eliminates unvalidated user input escaping in the hook test runner.
3. **[#68689](https://github.com/anthropics/claude-code/pull/68689): Block symlink escape in extensibility config reads**
   - Open: Security fix that prevents path traversal attacks via malicious symlinks placed in the CLAUDE plugins configuration directory.
4. **[#68707](https://github.com/anthropics/claude-code/pull/68707): Add `/bug` command to file GitHub issues directly from the TUI**
   - Open: New quality-of-life feature that auto-populates bug reports with local environment metadata from the running session, reducing user friction for reporting issues.
5. **[#68785](https://github.com/anthropics/claude-code/pull/68785): Fix broken reference hook scripts in plugin-dev docs**
   - Open: Resolves bugs in the official example implementation for custom hooks that were incorrectly printing response JSON to stderr instead of stdout.
6. **[#68694](https://github.com/anthropics/claude-code/pull/68694): Normalize `CLAUDE_PLUGIN_ROOT` path separators on Windows**
   - Open: Cross-platform compatibility fix that eliminates broken plugin loading on Windows caused by mismatched forward/backward slash path formatting.
7. **[#68678](https://github.com/anthropics/claude-code/pull/68678): Prevent auto-triage from marking Claude Desktop issues as invalid**
   - Open: Fix for the repository's automated issue classifier that was incorrectly flagging legitimate desktop app bug reports as non-actionable spam.
8. **[#68686](https://github.com/anthropics/claude-code/pull/68686): Fix hookify variable shadowing and inline dict comma parsing**
   - Open: Resolves two long-standing parsing bugs in the hookify plugin build tool that broke custom hook definition files with nested dictionary structures.
9. **[#68787](https://github.com/anthropics/claude-code/pull/68787): Add missing error messaging for empty label edit CI script calls**
   - Open: Improves debugging for repository maintainers by adding explicit stderr output for misused label management workflows that previously exited silently.
10. **[#68699](https://github.com/anthropics/claude-code/pull/68699): Add Python wrapper for hookify, normalize Windows plugin paths**
    - Open: Makes the hookify tool accessible to teams using Python plugin workflows, while adding additional cross-platform path normalization for Windows.
---
## 5. Feature Request Trends
1. **Project rule hardening: The top requested feature direction is full exemption of CLAUDE.md and shared .claude/rules configuration files from context compaction, to prevent team-defined conventions from being lost or distorted mid-session.**
2. **Usage transparency: High demand for fully accurate, end-to-end token counting that includes all sub-agent and MCP call spend, plus clear breakdowns of quota consumption to avoid unexpected blocks.**
3. **TUI/Desktop UX quality of life: Most requested workflow improvements include per-prompt undo/rewind, auto-accept for long-running multi-step plans that take 10+ minutes to generate, and clearer visual indicators for blocked actions.**
4. **Cross-platform shell parity: Community momentum for native PowerShell support on non-Windows operating systems to unify DevOps automation workflows across macOS, Linux, and Windows.
---
## 6. Developer Pain Points
1. Context compaction edge cases remain the highest-impact recurring frustration: Teams that invest heavily in custom CLAUDE.md rules and shared project conventions regularly report that their instructions are lost, distorted, or ignored entirely after automatic compaction triggers mid-session.
2. Hidden cost and quota discrepancies: Multiple high-upvoted reports confirm that advertised usage limits are not enforced consistently, with Max tier users seeing 3-4x faster quota depletion than documented, and the UI counter routinely omitting subagent token spend.
3. Unaddressed platform regressions: Users report consistent issues including unstopped Windows PATH polling that hangs connected removable drives, broken ripgrep colored output that mangles results on macOS, and leaked MCP child processes that exhaust system memory without warning.
4. Undocumented product changes: The recent unannounced Statsig rollout that replaced the Agent tool's synchronous execution mode with always-fork background subagent behavior broke existing enterprise production workflows with zero prior notice or documentation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-17
---
## 1. Today's Highlights
Three sequential pre-release builds for the Codex Rust core (v0.141.0-alpha.1 through alpha.3) launched in the last 24 hours, advancing the full Rust port of Codex CLI and TUI to near-stable readiness. OpenAI engineering teams landed a full stacked PR suite of 12 new components for Codex's upcoming native Automations background service, the largest single feature batch merged this month. The community’s top active concern remains persistent unplanned token burn and unexpected capacity errors for paid high-tier subscribers, with the lead tracking issue surpassing 600 user comments.
---
## 2. Releases
Three new Rust alpha pre-releases were published for the Codex codebase in the last 24 hours:
- `rust-v0.141.0-alpha.1`, `rust-v0.141.0-alpha.2`, `rust-v0.141.0-alpha.3`: Iterative test builds for the full rewrite of Codex CLI, TUI and core runtime components, focused on fixing edge-case stability bugs ahead of the public v0.141.0 stable launch.
---
## 3. Hot Issues
1. **[#14593] Burning tokens very fast** (https://github.com/openai/codex/issues/14593): The highest-activity active bug (612 comments, 269 👍) affecting VS Code Codex extension Business plan users, who report unexplained 2-10x faster quota consumption with no visible usage breakdown, leading to unexpected early rate limits.
2. **[#23794] Codex Desktop no longer shows visible context/token usage indicator** (https://github.com/openai/codex/issues/23794): Now closed, this 169-comment, 168-upvoted issue tracked the recent regression that removed the real-time token counter from Desktop builds, a top complaint tied to the unplanned token burn problem.
3. **[#28190] rg is blocked by macOS** (https://github.com/openai/codex/issues/28190): Affecting all v0.139.0+ Codex CLI users on macOS, the bundled ripgrep binary is flagged as unnotarized by Gatekeeper, breaking native workspace code search out of the box (26 comments, 39 👍).
4. **[#14630] Voice transcription for TUI** (https://github.com/openai/codex/issues/14630): The most-upvoted new TUI feature request (17 comments, 44 👍) where users ask for parity with Codex Desktop’s native high-accuracy OpenAI Whisper voice input, instead of limited OS-level dictation.
5. **[#28507] Selected model is at capacity. Please try a different model** (https://github.com/openai/codex/issues/28507): New 13-comment issue tracking widespread GPT-5.5 capacity errors hitting top-tier Pro 5x users, even when they have unused remaining quota in their billing cycle.
6. **[#21211] Thread navigation/loading slows from unbounded metadata and eager large-history hydration** (https://github.com/openai/codex/issues/21211): 11-comment performance bug affecting long-time users with thousands of saved chat threads, where SQLite thread metadata bloat makes navigation load 10-20x slower than fresh installs.
7. **[#27353] Project chat history disappeared after latest Codex app update** (https://github.com/openai/codex/issues/27353): High-severity 9-comment issue for macOS users on v26.608 builds, where local project-bound chat history is erased silently after an over-the-air app update.
8. **[#25154] Codex Desktop App Windows Full Screen Issue** (https://github.com/openai/codex/issues/25154): 20-upvote QoL bug that prevents the Windows Desktop app from entering true full screen mode, blocking screen capture for Computer Use workflows.
9. **[#16911] Constant ask for MCP Tool approvals** (https://github.com/openai/codex/issues/16911): 9-comment pain point for users self-hosting custom MCP servers, where Codex prompts for re-approval of the same trusted tool on every new session, breaking uninterrupted workflows.
10. **[#28524] Codex Desktop 26.609.71450 fails to hydrate existing local session and RAM reaches 99–100%** (https://github.com/openai/codex/issues/28524): New critical regression for Windows Pro users, where the latest June 16 release hangs on app launch and uses 100% system RAM when loading existing large project sessions.
---
## 4. Key PR Progress
1. **[#28598] bazel: right-size Rust test targets** (https://github.com/openai/codex/pull/28598): Optimizes CI test sizing for all Rust codex crates, removing blanket overly long timeouts that were hiding real test failures behind verbose timeout warning noise.
2. **[#28152] core: render remote environment cwd natively** (https://github.com/openai/codex/pull/28152): Merged closed PR that fixes a long-running path context bug where Codex would incorrectly show Windows-style paths for WSL/Linux remote executors, confusing the model during file editing.
3. **[#28403] [4/4] Simplify recommended plugin install schema** (https://github.com/openai/codex/pull/28403): Final PR in the plugin recommendation series that simplifies the MCP install flow to require only a `plugin_id` and user-facing reason, removing redundant manual config fields for end users.
4. **[#28591] Reject network proxy with unelevated Windows sandbox** (https://github.com/openai/codex/pull/28591): Adds a safety check that blocks users from applying system-level network proxies to unelevated Codex sandboxes, preventing unwanted data exfiltration that bypasses isolation controls.
5. **[#28148] add experimental managed Amazon Bedrock login and logout** (https://github.com/openai/codex/pull/28148): Adds native UI flows for users to connect and revoke Codex-managed AWS Bedrock credentials directly in the settings panel, no manual environment variable edits required.
6. **[#27500] Support `openai/form` extended form elicitations** (https://github.com/openai/codex/pull/27500): Adds support for structured multi-field form input prompts for MCP tools, replacing clunky step-by-step text input for tools that require multiple configuration parameters.
7. **[#28602] Force offline standalone web search after connector use** (https://github.com/openai/codex/pull/28602): Implements a sticky security policy that automatically disables public internet web search for a thread once a user connects any internal enterprise MCP connector, preventing accidental data leaks to public search engines.
8. **[#28609] automations: add service groundwork and overview** (https://github.com/openai/codex/pull/28609): The foundational PR for Codex's new native scheduled Automations feature, adding top-level service scaffolding for background task execution.
9. **[#28613] automations: add app-server protocol** (https://github.com/openai/codex/pull/28613): Adds the public gRPC protocol spec that will let users create, view and edit automation rules via the Codex App and CLI.
10. **[#28615] automations: add agent automation_update tool** (https://github.com/openai/codex/pull/28615): Adds a native MCP tool for Codex's code agent to create and modify automation rules directly from natural language user prompts.
---
## 5. Feature Request Trends
1. **CLI/TUI parity**: Power users are prioritizing feature alignment between the Desktop app and text-only TUI, with voice transcription and full session export as the top two requested missing capabilities.
2. **MCP workflow quality of life**: The community is pushing for persistent one-time approvals for trusted custom MCP tools, plus even simpler one-click plugin installation flows.
3. **Paid plan user experience**: Subscribers are widely requesting benevolent quota resets following the recent multi-hour GPT-5.5 capacity outage that wasted large portions of their monthly high-limit credits.
4. **Local data control**: Users are asking for safer app update guardrails to prevent silent local chat history loss, plus native full session export to open formats for offline backup.
---
## 6. Developer Pain Points
1. Unpredictable, unreported token/quota overconsumption remains the #1 pain point, amplified by the recent regression that removed the visible real-time token usage counter from Codex Desktop.
2. Fragmented Computer Use breakage across every platform: separate independent bugs on Windows, macOS and WSL all prevent the feature from initializing for a large share of users, with no universal workaround available.
3. Severe post-update regressions in recent v26.60x Desktop builds: reports of tasks slowing from <5 minutes to 30-50 minutes, 100% RAM spikes on session load, broken Git compatibility with libgit2 clients, and silent project chat history loss.
4. Out-of-the-box broken core functionality on macOS: Gatekeeper false positives block bundled first-party utilities including ripgrep, breaking native workspace code search for all new CLI users before they can run manual bypass commands.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-17
Repository: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
No new stable or pre-release versions shipped in the last 24 hours. The 2026-06-17 activity is dominated by critical P1 security hardening PRs, triage updates for high-impact agent functionality bugs, and early work to add native multimodal input support to the terminal CLI. Maintainers also rolled out a new dependency pinning policy to eliminate unexpected breaking changes from loose semver ranges across the project.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues
1. [#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, 7 comments, 8 👍): The highest-voted open bug, users report the generalist agent hangs indefinitely even for trivial tasks like folder creation, requiring a workaround of explicit instructions to disable subagent deferral.
2. [#24353 Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) (P1, 7 comments): Core engineering epic tracking maturing the project's evaluation infrastructure, which already runs 76 behavioral test cases across 6 supported Gemini model variants.
3. [#22745 Assess AST-aware file reads, search and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) (P2, 7 comments, 1 👍): Exploration epic for AST-native code operations that could cut unnecessary LLM turns, reduce token noise from misaligned file reads, and improve agent codebase navigation efficiency.
4. [#22323 Subagent reports false success after hitting MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, 6 comments, 2 👍): Critical bug where the `codebase_investigator` subagent marks tasks as completed with "GOAL achieved" status even if it hit maximum turn limits and performed zero analysis, hiding interrupted work from users.
5. [#25166 Shell execution gets stuck on "Awaiting input" after command completion](https://github.com/google-gemini/gemini-cli/issues/25166) (P1, 4 comments, 3 👍): Frequent UX bug where CLI hangs incorrectly after running non-interactive shell commands, forcing users to restart their sessions.
6. [#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) (P2, 5 comments): Security issue addressing unredacted transcript content being sent to the background extraction model before secret sanitization runs, creating accidental credential exposure risk.
7. [#21983 Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) (P1, 4 comments, 1 👍): Compatibility bug blocking Linux desktop users (the majority of open source Gemini CLI power users) from accessing the browser automation agent feature.
8. [#22093 Subagents run without permission post v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093) (P2, 2 comments): Users who explicitly disabled all agents in their config report that generalist subagents activate unprompted, violating their expected workflow guardrails.
9. [#20079 Symlinked custom agents are not recognized](https://github.com/google-gemini/gemini-cli/issues/20079) (P2, 4 comments): Power users who version control their custom agent directories via symlinks in `~/.gemini/agents/` cannot load their custom subagent definitions.
10. [#22672 Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672) (P2, 3 comments, 1 👍): Feature request to add guardrails that block or prompt for confirmation on high-risk operations including `git --force` resets and destructive database modifications.

## 4. Key PR Progress
1. [#27971 fix(core): strip thoughts from scrubbed history turns and resolve thought leakage](https://github.com/google-gemini/gemini-cli/pull/27971): Patches a long-running bug where the model's internal reasoning scratchpad content leaks into conversation history, causing infinite loops and confused output in subsequent turns.
2. [#27966 fix(security): enforce case-insensitive sensitive path blocklist and VS Code HITL](https://github.com/google-gemini/gemini-cli/pull/27966): Production-grade security fix eliminating case-insensitivity bypasses for protected paths including `.git`, `.env` and `node_modules`, adding mandatory human-in-the-loop prompts for edits to high-risk files.
3. [#27956 feat(core): Support GDC air-gapped Service Identity](https://github.com/google-gemini/gemini-cli/pull/27956): Adds full authentication compatibility for regulated Google Distributed Cloud air-gapped deployments, expanding enterprise use case support.
4. [#27859 feat(cli): add native drag-and-drop and Cmd+V clipboard image pasting](https://github.com/google-gemini/gemini-cli/pull/27859): Delivers full multimodal input parity, letting users drag image files or paste from their system clipboard directly into terminal prompts without manual path entry.
5. [#27948 chore(deps): pin dependencies and enforce 14-day update cooldown](https://github.com/google-gemini/gemini-cli/pull/27948): New stability policy that removes all loose `^`/`~` semver ranges and enforces a 14-day waiting period for automated dependency updates to eliminate unexpected CI/CD breakages.
6. [#27664 fix(core): write MCP OAuth tokens atomically](https://github.com/google-gemini/gemini-cli/pull/27664): P1 security fix that writes auth tokens via temp file + atomic rename, preventing partial corrupted token writes that exposed credential snippets on disk.
7. [#27964 fix(mcp): scope resource resolution to prevent cross-server URI confusion](https://github.com/google-gemini/gemini-cli/pull/27964): Hardens MCP security by blocking untrusted servers from shadowing trusted MCP resources via colliding URIs, closing a supply chain attack vector.
8. [#27572 fix(cli): handle tmux false positive background detection](https://github.com/google-gemini/gemini-cli/pull/27572): Resolves a common UX bug where Gemini CLI misdetects light terminal backgrounds inside tmux/mosh sessions, triggering incorrect dark theme switching and unnecessary compatibility warnings.
9. [#27915 fix(core): trust dialog discloses the hook shape that never runs](https://github.com/google-gemini/gemini-cli/pull/27915): Critical security patch that fixes the workspace trust dialog, which previously hid the actual configured pre-session hooks that run immediately after a user approves folder access.
10. [#27959 fix(core): preserve newlines when truncating multi-line text](https://github.com/google-gemini/gemini-cli/pull/27959): Patches the string truncation utility that was stripping all newlines from long multi-line log and shell output, rendering truncated content unreadable.

## 5. Feature Request Trends
The most requested feature directions from the latest updated issues are:
1. AST-native code exploration tooling to reduce unnecessary LLM turns and cut token bloat for codebase navigation work.
2. Maturing the Auto Memory system to resolve infinite retries, properly surface invalid memory patches, and implement zero-trust deterministic secret redaction.
3. Browser agent resilience improvements, including automatic persistent session lock recovery and full respect of user-defined configuration overrides.
4. Quality of life improvements for custom local agents, including symlink support and automatic smart invocation of user-defined skills/subagents for matching task types.

## 6. Developer Pain Points
Recurring high-frequency frustrations among users:
1. Unhandled agent hangs for core workflows (generalist agent, post-shell-execution) that force users to restart their full session mid-task.
2. Subagent status reporting gaps that mask uncompleted work after hitting maximum turn limits, leading users to believe partial tasks are fully finished.
3. Persistent security gaps around memory handling, path traversal, and hook disclosure that create unintended credential exposure and supply chain risks.
4. Missing Wayland support for the browser agent feature that blocks the full Gemini CLI workflow for open source Linux desktop developers.
5. Configuration drift introduced in v0.33.0 where explicitly disabled subagents activate unprompted, breaking custom workflow setups defined by power users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-17
Source: github.com/github/copilot-cli

---

## 1. Today's Highlights
This 24-hour digest covers 19 recently updated community issues alongside the recent v1.0.63 stable release for Copilot CLI. Top unresolved critical bugs include reproducible Windows ARM64 fatal crashes under load, TUI freezes triggered by over-permissive launch flags, and broken MCP tool access for spawned subagents. No new pull requests were merged or updated in the reporting window, with all active development progress currently tracked via public issue threads.

## 2. Releases
The latest stable release v1.0.63 (published 2026-06-15) includes two user-facing improvements:
- Blocked image attachments no longer show generic confusing errors, and instead surface actionable guidance: enable vision via the "Editor preview features" policy, switch to a vision-capable model, or test a different image file
- All options in `--help` output now sort alphabetically for improved discoverability

## 3. Hot Issues (10 Noteworthy Items)
| Issue | Link | Summary & Impact | Community Reaction |
|---|---|---|---|
| #3687 | https://github.com/github/copilot-cli/issues/3687 | Copilot.exe triggers fatal BEX64/0xc0000409 hard aborts on Windows ARM64 under load, most reliably during Windows Terminal tab restore under memory pressure, with no graceful shutdown fallback. | 5 comments, 1 👍, confirmed reproducible across v1.0.57 and v1.0.60, affecting Windows power users' core workflow reliability |
| #1168 | https://github.com/github/copilot-cli/issues/1168 | Copilot CLI prompts for authorization more than a dozen separate times during a single high-level request, creating "authorization fatigue" that fully breaks flow for complex tasks like full PR failure investigation. | 2 comments, 2 👍, open since Jan 2026, marked as a high-priority permission UX gap |
| #3813 | https://github.com/github/copilot-cli/issues/3813 | Copied non-Latin output (e.g. Japanese) from Copilot CLI running in the VS Code embedded terminal renders as garbled text, even though output copies correctly in native iTerm2. | Closed 2026-06-16, triaged as a follow-up fix to prior unicode rendering bug #3776 |
| #3730 | https://github.com/github/copilot-cli/issues/3730 | Copilot CLI does not surface enterprise-managed custom models and OpenAI-compatible endpoints configured centrally via the Copilot Admin dashboard, even though these models are fully supported in VS Code. | 4 👍, highest-voted active feature request, blocking full enterprise Copilot CLI rollouts |
| #3812 | https://github.com/github/copilot-cli/issues/3812 | Recent regression breaks MCP tool access for custom subagents, while MCP tools remain fully accessible to the top-level default agent. | 1 comment, Copilot maintainers confirmed the root cause is deferred loading of MCP tools |
| #3821 | https://github.com/github/copilot-cli/issues/3821 | Running `/update` from an active resumed session leaves conflicting `--session-id` and `--resume` flags that cause the session to crash after the update completes, losing unsaved work context. | 1 comment, filed by a core Copilot CLI team member, marked for immediate patch |
| #3518 | https://github.com/github/copilot-cli/issues/3518 | No native functionality to unarchive/restore accidentally archived long-running project sessions, forcing users to lose hundreds of turns of accumulated context for orchestrator workflows. | 3 👍, top user request for session lifecycle improvements |
| #3825 | https://github.com/github/copilot-cli/issues/3825 | Read permissions set via the `--allow-all` flag leak to the UI dispatcher during resume or non-interactive startup, fully wedging the TUI and hiding the input box with no recovery path. | Filed 2026-06-16, marked as a critical launch flag regression |
| #3823 | https://github.com/github/copilot-cli/issues/3823 | The "xhigh" reasoning effort level is silently downgraded to default "medium" (not the maximum supported effort level) on models that do not advertise xhigh capability (e.g. Claude Opus 4.6), delivering worse performance with no user warning. | Filed 2026-06-16, flagged as a high-priority transparency bug |
| #2790 | https://github.com/github/copilot-cli/issues/2790 | HTTP-type MCP servers (e.g. Figma Desktop MCP) are incorrectly classified as SSE endpoints, returning a 400 SSE error on connection even though the same endpoint works in Codex CLI and other Copilot clients. | 1 comment, open since April 2026, blocking third-party design workflow integrations |

## 4. Key PR Progress
No new pull requests were opened, updated, or merged in the 24-hour reporting window. All active bug and feature work is currently tracked publicly via the Copilot CLI issue tracker.

## 5. Feature Request Trends
Distilled from all recently updated issues, the top requested feature directions are:
1. **Enterprise parity**: Native CLI support for centrally managed admin-defined custom models and OpenAI-compatible endpoints to match existing VS Code client capabilities
2. **Session lifecycle controls**: Unarchive/restore functionality for persistent archived sessions to prevent accidental loss of long-running work context
3. **Slash command usability**: Migrate read-only utility commands including `/mcp show` and `/plugin list` to run asynchronously mid-agent turn, matching existing behavior for the `/tasks` command
4. **Plugin/skill configuration flexibility**: Add repo-level support for the `skillDirectories` setting to simplify monorepo and multi-repo custom skill management, plus full public documentation of matcher support for command hooks
5. **Model transparency**: Explicitly surface and show users the active model assigned to spawned subagents, rather than relying on hidden unannounced defaults that differ from the main session's configured model

## 6. Developer Pain Points
Recurring high-impact frustrations reported in the last 24h:
1. Windows platform stability gaps: Unresolved fatal hard crashes under load on Windows ARM64 that skip all graceful shutdown logic
2. Severe permission friction: Excessive repeated authorization prompts that completely break flow during multi-step complex tasks
3. Hidden silent behavior: Unannounced downgrades to reasoning effort levels, hidden mismatches between main session and subagent model selections, and missing timezone context for rate limit reset timings that leave users with no clear visibility into when they can resume work
4. Recent MCP/subagent regressions: Lost MCP tool access for custom subagents and broken connectivity for non-SSE HTTP MCP servers that worked correctly in prior releases
5. TUI rendering bugs: Garbled non-Latin text output when copied from the VS Code terminal, and permission flag leaks that fully disable TUI input functionality with no workaround.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-17
Source: github.com/MoonshotAI/kimi-cli
---
## 1. Today's Highlights
This digest covers all repository activity updated in the 24-hour window ending 2026-06-17, with no new official stable or pre-release versions published in the period. A 3-upvote popular feature request for optional hidden reasoning process output for thinking models has been marked closed, confirming the quality-of-life improvement is either merged or scheduled for immediate release. Three unpatched new bugs were filed in the last 24 hours, impacting fresh installs, MCP server workflows, and Windows context compaction for end users.
## 2. Releases
No new Kimi Code CLI releases were published in the trailing 24-hour window.
## 3. Hot Issues
All 5 recently updated community issues are featured below:
1. [#1632 [CLOSED] Feature Request: Option to hide thinking content while using thinking models](https://github.com/MoonshotAI/kimi-cli/issues/1632): The highest-voted recent issue (3 👍) resolves a common pain point for users running reasoning models in production terminal environments, who previously had no way to suppress verbose internal thinking output while retaining high reasoning quality. The closed status confirms the feature will be available in the next upcoming release.
2. [#1327 [OPEN] [enhancement] More Steps per turn By Default](https://github.com/MoonshotAI/kimi-cli/issues/1327): Users consistently hit the 100-step hard execution limit mid-workflow even when <35% of their allocated context window is in use, interrupting long-running multi-file refactoring tasks. The 3 existing community comments confirm multiple users have encountered the same arbitrary hard cap.
3. [#2402 [OPEN] [bug] Error: [compaction.failed] APIStatusError: 400 The request was rejected because it was considered high risk](https://github.com/MoonshotAI/kimi-cli/issues/2402): Affects v0.6.0 Windows users running Kimi-k2.6, breaks automatic context compaction that is critical for extending long development sessions. No public workaround has been posted in the 2 existing issue comments.
4. [#2457 [OPEN] [bug] Kimi Code CLI auto-discovers MCP server after user deleted it, causing unfixable 400 errors](https://github.com/MoonshotAI/kimi-cli/issues/2457): Newly reported zero-reply bug for v0.15.0 Windows 10 users, where the automatic MCP server scanning feature does not garbage collect stale entries after a user uninstalls a third-party MCP tool, leading to persistent request failures that cannot be resolved via standard config edits.
5. [#2456 [OPEN] Bug: Fresh install reports "LLM not set" with no guidance to run login](https://github.com/MoonshotAI/kimi-cli/issues/2456): Impacts new users installing via the widely used Homebrew package manager, creates immediate first-run friction with zero onboarding guidance for new users who are unaware they need to run authentication flows.
## 4. Key PR Progress
Only 1 PR was updated in the 24-hour window:
1. [#1771 [OPEN] fix: always stringify tool message content in Chat Completions provider](https://github.com/MoonshotAI/kimi-cli/pull/1771): Submitted by contributor he-yufeng, this PR fixes longstanding compatibility issue #1762: the OpenAI Chat Completions API strictly requires all `role: "tool"` message content to be a string, but the prior Kimi CLI implementation passed ContentPart arrays when tool outputs included appended system reminder text. The fix will eliminate 400 Bad Request errors for all custom OpenAI-compatible LLM provider integrations.
## 5. Feature Request Trends
The two highest-priority user-requested feature directions emerged clearly in the latest activity:
1. UX optimization for reasoning model workflows, specifically giving users full control over visibility of internal thinking process output for different terminal use cases
2. More permissive default runtime limits, specifically increasing the default maximum execution steps per turn to avoid unnecessary workflow interruptions when users have large amounts of unused remaining context window capacity.
## 6. Developer Pain Points
Recurring high-impact frustrations documented in the latest updates include:
1. Severe new user onboarding friction, with zero guidance after fresh installs pointing users to required first-run authentication steps
2. Broken stale local state management, with no automatic cleanup for deleted MCP server entries leading to persistent unresolvable request errors
3. Context management regressions, with both artificially low step caps and false positive "high risk" compaction failures breaking long-running coding sessions
4. Third-party provider compatibility gaps that break standard OpenAI-spec API integrations with non-Moonshot LLM endpoints.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-17
---
## 1. Today's Highlights
Today’s 24-hour activity for the OpenCode repository sees no new official releases, but significant movement on high-engagement feature discussions and a large batch of pre-vetted community PRs merged via the project’s automated maintenance workflow. Top voted feature requests including native persistent session goals and iterative `/loop` command execution continue to gain strong community support, while maintainers triage newly reported bugs impacting the latest v1.17.6 and v1.17.7 desktop and TUI distributions. Multiple critical fixes for model context handling, Windows platform compatibility, and frontend/backend performance are already queued for the next patch release.

## 2. Releases
No new official OpenCode releases were published in the last 24 hours.

## 3. Hot Issues
1. **Native /goal persistent session tracking (#27167)** | 50 comments, 87 👍 | [Link](https://github.com/anomalyco/opencode/issues/27167)
   The highest-traffic open feature request: users are asking for native support to define, track and update long-running session objectives via a dedicated `/goal` slash command, to avoid losing state across long multi-hour coding sessions that currently rely on manual context management.
2. **Delayed queue feature for codex workflows (#5408)** | 19 comments, 25 👍 | [Link](https://github.com/anomalyco/opencode/issues/5408)
   Power users running repeated batch automated tasks are requesting a native queue system to schedule runs, persist learnings between iterations, and avoid manually triggering duplicate workflow executions.
3. **Native `/loop` command for iterative task execution (#18001)** | 9 comments, 27 👍 | [Link](https://github.com/anomalyco/opencode/issues/18001)
   The second highest-voted open feature, designed to eliminate the need for verbose natural language prompts for repetitive operations like bulk refactoring, test reruns, and incremental validation tasks.
4. **OpenCode core is heavily CPU-bound (#21470)** | 11 comments, 10 👍 | [Link](https://github.com/anomalyco/opencode/issues/21470)
   Users report that up to 70% of their total runtime is spent processing inside OpenCode itself rather than waiting for external model API responses, driving large unexpected performance overhead even for mid-sized 300k token sessions.
5. **LM Studio local model list fails to refresh (#2047)** | 17 comments, 4 👍 | [Link](https://github.com/anomalyco/opencode/issues/2047)
   A long-running pain point for local LLM users: adding/removing models in LM Studio does not update OpenCode's model picker, even after full authentication logout/login cycles.
6. **Upstream idle timeout on writing-plans skill (#28957)** | 15 comments | [Link](https://github.com/anomalyco/opencode/issues/28957)
   New bug reported for macOS Tahoe 26.5 users that blocks long-form planning workflows, with idle connections between OpenCode and model services getting terminated unexpectedly mid-operation.
7. **Intel macOS x64 build throws illegal hardware instruction error (#8345)** | 15 comments, 6 👍 | [Link](https://github.com/anomalyco/opencode/issues/8345)
   Blocks all users running older Intel-based Macs from launching v1.1.19 and newer OpenCode builds, with no documented workaround available for this distribution.
8. **GLM-5.2 support for Z.AI provider marked resolved (#32172)** | 8 comments | [Link](https://github.com/anomalyco/opencode/issues/32172)
   The feature request to add support for Z.AI's newly released top-tier GLM-5.2 reasoning model was closed today, confirming official integration is shipping in an upcoming build.
9. **GLM-5.2 thinking effort variants not exposed (#32444)** | 2 comments, 6 👍 | [Link](https://github.com/anomalyco/opencode/issues/32444)
   Post-integration bug: a blanket `glm` string filter in the provider transform logic hides the official High/Max reasoning effort settings that GLM-5.2 natively supports.
10. **Windows PowerShell Expand-Archive module fails for Bun builds (#24291)** | 5 comments, 5 👍 | [Link](https://github.com/anomalyco/opencode/issues/24291)
    Breaks all archiving, file extraction and unzip workflows on Windows, since OpenCode's Bun-compiled binary cannot properly auto-load the built-in PowerShell archiving utility.

## 4. Key PR Progress
1. **Fix OpenAI OAuth path system context flattening (#32592)** | Closed | [Link](https://github.com/anomalyco/opencode/pull/32592)
   Resolves the bug where the Codex OAuth authentication path was converting structured system prompts into flat unstructured instruction strings, breaking compatibility with advanced model reasoning features.
2. **Add configurable fallback model chain (#27939)** | Closed | [Link](https://github.com/anomalyco/opencode/pull/27939)
   New feature that automatically routes requests to a pre-defined sequence of backup models if the primary model fails, eliminates broken sessions caused by temporary model provider outages.
3. **Add provider and per-model concurrency limits (#27938)** | Closed | [Link](https://github.com/anomalyco/opencode/pull/27938)
   Prevents accidental rate limit bans by enforcing user-configurable caps on parallel outbound requests for providers that have strict concurrent request restrictions.
4. **Add service worker for cache-first static asset loading (#27936)** | Closed | [Link](https://github.com/anomalyco/opencode/pull/27936)
   Frontend performance optimization that cuts web UI load times by ~60% for returning users via persistent local caching of static assets.
5. **Add zstd HTTP compression with gzip fallback (#27935)** | Closed | [Link](https://github.com/anomalyco/opencode/pull/27935)
   Server-side enhancement that reduces API response payload sizes by ~40% to lower bandwidth usage and speed up streaming output over slow connections.
6. **Break infinite context compaction loop (#27919)** | Closed | [Link](https://github.com/anomalyco/opencode/pull/27919)
   Critical bug fix that stops sessions from entering an infinite spinning loop that wastes API credits when context cannot be compressed below the target model's maximum token limit.
7. **Allow ESC session interrupt when dialogs are open in TUI (#27917)** | Closed | [Link](https://github.com/anomalyco/opencode/pull/27917)
   Resolves the long-standing issue where users could not kill stuck sessions when a permission prompt was active in the terminal UI, creating unresponsive application states.
8. **Implement lazy scroll loading for old TUI messages (#26861)** | Open | [Link](https://github.com/anomalyco/opencode/pull/26861)
   Eliminates massive UI lag in sessions with thousands of messages by loading historical chat content on demand as the user scrolls up, instead of rendering the full message list on launch.
9. **Preserve reasoning part type on model switch (#32604)** | Open | [Link](https://github.com/anomalyco/opencode/pull/32604)
   Fixes unnecessary full prefix cache invalidation when users swap between models mid-session, cutting wait times for model switches from multiple seconds to under 500ms for most workflows.
10. **Fix @ file mentions for files in hidden folders (#32193)** | Open | [Link](https://github.com/anomalyco/opencode/pull/32193)
    Removes the filter that blocked users from referencing files inside dot-prefixed hidden directories (like `.github` or `.config`) via the @ file mention feature.

## 5. Feature Request Trends
1. **Native slash command workflow utilities**: The top requested feature category includes dedicated commands for persistent session tracking (`/goal`), iterative task execution (`/loop`), and delayed queued batch runs, all designed to reduce reliance on verbose natural language prompts for repetitive tasks.
2. **Enhanced model usability**: Users are asking for automatic model routing that swaps models dynamically based on input type (e.g. auto-select vision models when images are uploaded), plus full unfiltered access to all native model variants like reasoning effort levels.
3. **Flexible billing tiers**: Multiple recent requests for higher-usage predictable monthly Pro tier plans, to avoid unpredictable over-spending on pay-as-you-go model usage that breaks budget tracking for power users.
4. **UI/UX customization**: Widespread demand for configurable layout options (including left/right panel swap controls) and user-defined TUI behavior like adjustable session picker limits.

## 6. Developer Pain Points
1. **Cross-platform compatibility gaps**: Windows-specific bugs (broken PowerShell module loading, missing @ file mentions, corrupted terminal state after force-killing the TUI) and unmaintained Intel macOS builds are the most frequently reported unresolved platform issues.
2. **Performance bottlenecks**: Excessive CPU overhead inside the OpenCode core (not related to waiting for model API responses), slow loading of long chat histories, and unnecessary cache invalidation during model switches create unnecessary workflow delays for power users.
3. **Local LLM integration friction**: Users running local model runtimes like LM Studio cannot refresh their model list without a full app restart, and default support for custom llama.cpp prompt templates is missing.
4. **Edge case reliability failures**: Idle timeouts during long planning tasks, multi-turn tool call failures after 3-4 interactions in stateless API modes, and infinite context compaction loops that waste API credits break production agent workflows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-17
---
## 1. Today's Highlights
Two sequential v0.79.x patch releases rolled out in the last 24 hours, delivering the highly requested provider-scoped auth configuration feature alongside critical fixes for fetch override handling and DeepSeek V4 compatibility. Recent merged PRs resolve long-standing pain points including opaque proxy error messages, unclosed CLI process hangs, and add official Nix packaging support, with 19 total bugs and features closed across the 30 highest-activity community issues.
---
## 2. Releases
Two new stable builds were published in the last 24 hours:
- **v0.79.5**: Major new feature adding [provider-scoped API key environments](https://github.com/earendil-works/pi/issues/5728), allowing `auth.json` entries to define per-provider overrides for Cloudflare AI Gateway, Azure OpenAI, Google Vertex, Amazon Bedrock, cache retention, and proxy settings without modifying global shell environment variables.
- **v0.79.6**: Targeted bug fixes: 1) Preserves user-defined custom `fetch` overrides in the HTTP dispatcher instead of forcibly overwriting with the undici global fetch, and 2) Patches OpenCode-hosted DeepSeek V4 requests to send the required `thinking: { type: "disabled" }` parameter for non-thinking mode workflows.
---
## 3. Hot Issues
1. [#4945 openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945): The highest-activity open issue with 59 comments and 30 upvotes, describing frequent TUI freezes on the `Working...` state for GPT-5.5 / OpenAI Codex interactions with no visible error output, requiring users to manually abort sessions via Escape. Many power users report this breaking multi-hour coding workflows.
2. [#4877 Session folder collision](https://github.com/earendil-works/pi/issues/4877): 19 comments of community discussion around a path-hashing edge case that maps different project directory paths to identical session storage folders, risking cross-project session data leakage or overwrites for users with similar directory naming structures.
3. [#5763 Providers swallow the HTTP error body](https://github.com/earendil-works/pi/issues/5763): A widely reported pain point (4 comments) for enterprise users running Pi behind custom gateways or proxies, where non-2xx error responses return generic useless messages with no context to diagnose access, routing, or rate limit failures.
4. [#5556 Session listing still keeps full transcript text in allMessagesText](https://github.com/earendil-works/pi/issues/5556): An unresolved memory bloat bug that causes slow TUI launch times and high RAM usage for power users with 100+ stored historical sessions.
5. [#5810 RPC: expose session entries and tree (`get_entries`, `get_tree`)](https://github.com/earendil-works/pi/issues/5810): A high-priority feature request from developers building custom third-party Pi frontends, who currently lack programmatic access to full session metadata via the public RPC interface.
6. [#5372 Allow custom OAuth callback page rendering](https://github.com/earendil-works/pi/issues/5372): Requested by SDK developers who embed Pi in white-label products, who cannot replace the default generic OAuth success/error pages with their own branded flows today.
7. [#5670 Tab completion grabs first item after typing to narrow a still-ambiguous menu](https://github.com/earendil-works/pi/issues/5670): 5 comments of user reports of broken core file navigation workflows, where tab completion incorrectly selects the first result instead of re-opening the filtered match menu after partial text input.
8. [#4029 Endpoint error on fireworks models](https://github.com/earendil-works/pi/issues/4029): A critical unpatched bug that breaks all Fireworks-hosted model usage due to a duplicate URL prefix being appended to provider endpoints.
9. [#5797 File edits break encoding of CP-1252 stored files in windows](https://github.com/earendil-works/pi/issues/5797): 3 reports from enterprise devs working on legacy Windows C++ codebases, where Pi automatically converts non-UTF-8 CP-1252 encoded files to UTF-8 on edit, breaking pre-existing compile workflows for unported legacy projects.
10. [#5571 pi -p hangs indefinitely when stdin is a non-TTY pipe that never closes](https://github.com/earendil-works/pi/issues/5571): A breaking bug for CI/CD automation use cases, where headless non-TTY invocations of Pi hang indefinitely instead of failing fast if no provider credentials are configured.
---
## 4. Key PR Progress
All 9 PRs updated in the last 24 hours are high-impact changes:
1. [#5807 feat: add provider-scoped environment overrides](https://github.com/earendil-works/pi/pull/5807): Implements the core new feature shipped in v0.79.5, adding support for per-API-key `env` overrides directly in the `auth.json` credential store.
2. [#5820 fix: Preserve raw HTTP error status and bodies for non-schema errors](https://github.com/earendil-works/pi/pull/5820): Resolves #5763 by adding a shared error formatting helper that surfaces full raw HTTP status codes and response bodies for unparseable gateway/proxy errors.
3. [#5801 Nixify pi](https://github.com/earendil-works/pi/pull/5801): Adds official Nix flake packaging support, resolving the long-standing issue where Nix-managed Pi installs cannot run `pi update` self-upgrades.
4. [#5809 feat: add durationMs and timeToFirstTokenMs to Usage, display tokens/sec in footer](https://github.com/earendil-works/pi/pull/5809): Adds long-requested LLM performance metrics, surfacing time-to-first-token and total generation duration in the TUI footer with a live tokens-per-second throughput counter.
5. [#5803 fix: reject malformed OpenAI tool calls](https://github.com/earendil-works/pi/pull/5803): Prevents incomplete streamed tool calls with missing IDs or function names from being persisted to session history, eliminating hangs caused by unresolvable partial tool execution states.
6. [#5812 fix(tui): protect pipe characters inside inline code in markdown tables](https://github.com/earendil-works/pi/pull/5812): Fixes a markdown rendering bug where `|` delimiters inside backtick-wrapped inline code incorrectly split table columns and discard content.
7. [#5798 feat(coding-agent): add Vercel AI Gateway attribution](https://github.com/earendil-works/pi/pull/5798): Adds the required `http-referer` and `x-title` headers for native compatibility with Vercel's AI Gateway proxy service.
8. [#5789 fix(tui): restore cursorUp line-start jump before history browsing](https://github.com/earendil-works/pi/pull/5789): Reverts a recent regression to restore expected shell-like behavior, where pressing Up on the first line of user input jumps to the line start before entering prompt history navigation.
9. [#5796 chore: bump TS target and lib to ES2024, use Promise.withResolvers()](https://github.com/earendil-works/pi/pull/5796): Modernizes the codebase, eliminates all hand-rolled custom promise resolver boilerplate, and reduces surface area for concurrency bugs.
---
## 5. Feature Request Trends
Across all active issues, the top priority community feature directions are:
1. Expanded provider ecosystem support, including new official provider integrations for ZhipuAI, Gemini 3.5 Flash, and Moonshot Kimi, alongside native `settings.json` HTTP proxy configuration.
2. Extended public RPC API functionality to support third-party custom UI and embedding use cases, with expanded session metadata access.
3. Improved cross-platform packaging options including official Nix distribution and better support for legacy non-UTF-8 file encodings on Windows.
4. Native observability tools to surface generation latency, throughput, and cost metrics directly in the TUI without requiring external telemetry.
---
## 6. Developer Pain Points
The highest-frequency recurring frustrations reported in recent updates are:
1. Unhandled indefinite hangs across multiple CLI surfaces: package commands that do not exit after completing if MCP server extensions leave active event loop handles, LLM streams that drop connections without closing the iterator and wedge the agent loop, and non-TTY pipe invocations that hang instead of failing fast.
2. Near-unusable error reporting for proxy and gateway deployments, where providers strip raw HTTP error bodies leaving no actionable context for troubleshooting access issues.
3. Cross-platform terminal edge case breakages, including double backspace/enter input on the Kitty terminal, broken long URL rendering in Warp due to missing OSC 8 link support, and incorrect file encoding conversion on legacy Windows projects.
4. Persistent compatibility gaps for non-OpenAI LLM providers, including conflicting reasoning parameter validation errors for DeepSeek models and invalid JSON tool schema definitions that cause 400 errors for Moonshot and Fireworks hosted models.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-17
---
## 1. Today's Highlights
Two new v0.18.1 pre-release builds shipped in the last 24 hours, including context handling safety warnings and documentation updates, alongside multiple critical bug patches resolving high-priority user reports around cross-platform packaging, security false positives, and core state machine failures. The community also made significant progress on the staged /loop workflow alignment roadmap, delivering initial implementations of self-paced background automation fully compatible with legacy enterprise Linux deployments.
---
## 2. Releases
Two new 0.18.1 preview builds were published in the past 24 hours:
- **v0.18.1-nightly.20260616.a68b2e1e7**: Includes core bug fixes for oversized context prompt safety and documentation corrections
- **v0.18.1-preview.0**: Adds a user warning for oversized context instructions that exceed configured processing limits, and fixes stale default values, incorrect CLI syntax references, and mismatched tool naming drift across official docs
---
## 3. Hot Issues (Top 10)
All items are linked to their GitHub issue pages:
1. **#3203 Qwen OAuth Free Tier Policy Adjustment** (136 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/3203): The highest-engagement recent issue announces an immediate reduction of free daily requests from 1000 to 100, with full free tier phaseout scheduled in the near future. Community members are actively discussing migration paths to self-hosted model providers and custom API setups.
2. **#5055 P1 VS Code Extension Windows Security False Positive** (6 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/5055): Windows Defender flags the official 0.18.0 Win x64 VSIX package as *Trojan:JS/ShaiWorm.DBA!MTB*. The core team is investigating signature mismatches to push a rebuild that eliminates the false positive for all Windows users.
3. **#4615 Project-scoped .mcp.json with Approval Flow** (6 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/4615): A security-focused feature request for workspace-level MCP server configuration that adds explicit pending approval prompts before any untrusted repo-defined MCP server can connect. The full community aligns this as a critical hardening measure to block local data exfiltration via malicious repo configs.
4. **#5206 CentOS 7 Auto-Update Failure** (2 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/5206): A P2 regression blocks users on legacy RHEL 7 systems with glibc < 2.28 from upgrading past 0.18.0, after a recent change silently migrated existing sudo-required npm installs to standalone builds that bundle Node 22 requiring newer system libraries. Enterprise teams running on-prem legacy hardware are waiting eagerly for a fix.
5. **#5124 /Loop Alignment Roadmap Tracking** (3 comments, 1 upvote) | [Link](https://github.com/QwenLM/qwen-code/issues/5124): The parent roadmap issue for staged rollout of dynamic, self-paced background automation workflows aligned with industry-leading competing implementations, with multiple child features already in active development by external contributors.
6. **#5177 Empty Plan Parameter Causes Exit Plan Failures** (1 comment, 1 upvote, closed) | [Link](https://github.com/QwenLM/qwen-code/issues/5177): A common edge case bug where the model calls the `exit_plan_mode` tool with an empty plan string, triggering unnecessary wasted inference retries that increase cost and delay task completion.
7. **#5180 Multi-Agent Task Crashes Mid-Workflow** (2 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/5180): Users running 12+ hour, 100k+ token multi-agent dev sprints on Qwen 3.7 Max report unexpected mid-task crashes after extended runtime. The core team is investigating memory leak issues for long-running orchestration workloads.
8. **#5210 ExitPlanMode Hang Regression** (2 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/5210): A new 0.18.1 regression that hangs users in planning state for multiple hours instead of proceeding to code execution, tagged for high-priority root cause analysis of the state machine logic.
9. **#5201 QQ Bot Channel Adapter PR-Ready Feature Request** (3 comments) | [Link](https://github.com/QwenLM/qwen-code/issues/5201): A full pre-written feature implementation for native QQ open platform bot integration, matching existing official support for WeChat, DingTalk and Feishu channels, very popular among Chinese developer teams running internal community devops bots.
10. **#5176 Sub-Agent Parallel Limit Configuration** (0 comments, high local LLM community demand) | [Link](https://github.com/QwenLM/qwen-code/issues/5176): A widely requested feature for self-hosted users running on limited GPU VRAM, to cap concurrent sub-agent execution and queue excess tasks to avoid out-of-memory crashes that exhaust hardware resources.
---
## 4. Key PR Progress (Top 10)
1. **#5167 fix(cli): Hide unconfigured discontinued OAuth model** | [Link](https://github.com/QwenLM/qwen-code/pull/5167): Merged fix that removes the deprecated Qwen OAuth model from the `/model` picker for users who never configured OAuth authentication, eliminating UI clutter and confusing broken entries for non-Qwen hosted users.
2. **#5207 fix(cli): Preserve sudo-required npm installs** | [Link](https://github.com/QwenLM/qwen-code/pull/5207): Resolves the CentOS 7 auto-update failure regression, skipping the silent forced migration to standalone builds that require newer glibc, allowing existing global npm installations on legacy Linux systems to update normally.
3. **#5197 feat(loop): Wire prompt-only /loop to self-paced wakeups** | [Link](https://github.com/QwenLM/qwen-code/pull/5197): Step 2 of the /loop alignment roadmap, replaces fixed cron schedules with model-managed self-paced task continuation after the initial run, enabling fully dynamic background automation workflows.
4. **#5202 feat(channel): Add QQ Bot channel adapter** | [Link](https://github.com/QwenLM/qwen-code/pull/5202): Full production-ready implementation of the requested QQ integration, adding the `@qwen-code/channel-qqbot` package with complete WebSocket gateway support for official QQ open platform bots.
5. **#5209 fix(core): Correct big-endian TIFF dimension parsing** | [Link](https://github.com/QwenLM/qwen-code/pull/5209): Fixes broken image tokenizer handling of TIFF files with MM (big-endian) encoding, resolving visual parsing failures for raw camera TIFF assets used in image-to-code workflows.
6. **#5194 fix(core): Fix VP8X WebP height offset reading** | [Link](https://github.com/QwenLM/qwen-code/pull/5194): Patches the broken WebP dimension parser that returned garbage heights for extended-format VP8X WebP images, closing a long-standing vision processing edge case.
7. **#5188 fix(core): Strengthen exit_plan_mode schema validation** | [Link](https://github.com/QwenLM/qwen-code/pull/5188

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-17
Formal tracking for the rebranded project formerly known as `deepseek-tui`

---

## 1. Today's Highlights
The v0.8.61 release formally finalized the long-awaited full project rebrand from the legacy `deepseek-tui` name to CodeWhale, marking the full deprecation of the old npm package and redirecting existing users to an official migration guide. Multiple core architecture changes for a unified model metadata registry were merged yesterday, eliminating scattered hardcoded model facts across the codebase, while active community triage is ongoing for post-release stability and installation bugs reported by new Ubuntu 22.04/24.04 users. TUI usability patches for common pain points like large paste handling and hotkey conflicts have also been merged for the upcoming v0.8.62 release.

## 2. Releases
### v0.8.61 (New, last 24h)
Full project rebrand rollout: CodeWhale is now the canonical name for the project, CLI command, and official npm package. The legacy `deepseek-tui` package is fully deprecated and will receive no further updates. Existing users migrating from v0.8.x legacy naming are directed to the official breaking change guide at `docs/REBRAND.md`.

## 3. Hot Issues (10 Noteworthy Items)
| Issue | Details |
|-------|---------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) (Open) | High-severity runtime stability bug causing "Turn stalled - no completion signal" errors in unassisted `yolo` mode. 14 community comments confirm workflows cannot be resumed after the stall, making it the top open stability bug for the 0.8.61 release. |
| [#3192](https://github.com/Hmbown/CodeWhale/issues/3192) (Open) | Request to list CodeWhale on the public `agentclientprotocol/registry`. 6 community members support the change, as it will enable one-click native installation inside the Zed editor and other LLM tool ecosystems. |
| [#3268](https://github.com/Hmbown/CodeWhale/issues/3268) (Open) | Fresh installation failure on bare Ubuntu 24.04 via `cargo install`. 4 active comments confirm missing build dependencies block compilation for new users, one of the most commonly reported post-rebrand friction points. |
| [#2739](https://github.com/Hmbown/CodeWhale/issues/2739) (Open) | Persistent long-running task freezes that cause total session data loss after timeout cancellation. 4 users confirm the bug still exists in 0.8.61/0.8.64, even after a prior 300-second auto-cancel fix for unresponsive sub-processes. |
| [#3264](https://github.com/Hmbown/CodeWhale/issues/3264) (Open) | Request to add a config flag restricting skill scanning exclusively to the `~/.codewhale/skills/` directory. 3 monorepo users note the current global scan behavior causes unwanted discovery of irrelevant skill files across large project directories. |
| [#3240](https://github.com/Hmbown/CodeWhale/issues/3240) (Open) | Post-rebrand cleanup bug that creates duplicate `.deepseek` and `.codewhale` configuration directories on user systems, most prominently reported on Windows. 2 users confirm the duplicate folders cause unexpected config loading conflicts. |
| [#3238](https://github.com/Hmbown/CodeWhale/issues/3238) (Open) | Installation failure on Ubuntu 22.04 LTS due to GLIBC version mismatch. The official npm build targets a newer GLIBC release not bundled with the 22.04 LTS distribution, blocking new user onboarding. |
| [#3266](https://github.com/Hmbown/CodeWhale/issues/3266) (Closed) | Critical concurrency bug causing TUI deadlocks when running multiple subagents with `block=True` `agent_eval` calls. Users were forced to force-kill their terminal to exit, and the bug has now been resolved for the upcoming patch release. |
| [#3255](https://github.com/Hmbown/CodeWhale/issues/3255) (Closed) | Full breakage for all Novita AI provider users, caused by a missing `/openai` path segment in the default base URL that returns 404 for every chat completion request. The root cause was identified and patched within 24 hours of reporting. |
| [#3243](https://github.com/Hmbown/CodeWhale/issues/3243) (Closed) | TUI usability regression where bare 1-8 digit keys hijack input when the composer is empty, preventing users from starting messages with numeric characters. The bug was patched within hours of being reported. |

## 4. Key PR Progress
| PR | Details |
|----|---------|
| [#3267](https://github.com/Hmbown/CodeWhale/pull/3267) (Merged) | TUI fix for #3263: Large pasted text over 16KB now stays fully editable in the composer with in-line truncation and auto-expansion, instead of being forcibly converted to an external `@file` mention that users cannot edit directly. |
| [#3005](https://github.com/Hmbown/CodeWhale/pull/3005) (Merged) | v0.8.62 architecture refactor: All provider metadata is now extracted to a unified data-driven registry, eliminating ~100 scattered hardcoded match arms across the codebase and adding first-class support for per-provider aliases and centralized default configuration. |
| [#3236](https://github.com/Hmbown/CodeWhale/pull/3236) (Merged) | Full first-class DeepInfra model provider support, fixing #3231. The PR completes missing runtime, TUI, CLI, and TOML configuration wiring for DeepInfra, building on prior draft community PRs. |
| [#3270](https://github.com/Hmbown/CodeWhale/pull/3270) (Open) | Docs update: Adds explicit Linux system dependency instructions to the official cargo install guide, noting that bare Ubuntu 24.04 users must pre-install `libdbus-1-dev` and `pkg-config` to avoid build failures. |
| [#3269](https://github.com/Hmbown/CodeWhale/pull/3269) (Open

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*