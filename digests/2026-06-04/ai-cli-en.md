# AI CLI Tools Community Digest 2026-06-04

> Generated: 2026-06-03 23:44 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report (2026-06-04)
---
## 1. Ecosystem Overview
The 2026 H1 AI CLI development landscape has moved past the early phase of competing on raw code generation performance to prioritize stable, workflow-native integration with existing developer toolchains. This 24-hour tracking window records over 170 combined issue updates, 57 active code changes, and 9 total production/pre-release builds across 8 major tools, with almost no new model feature launches as teams address long-standing core UX and reliability gaps. Ecosystem-wide adoption of the Model Context Protocol (MCP) as a universal tooling standard has reduced redundant custom integration work, allowing teams to focus on use-case-specific value for enterprise, self-hosted, and power user segments. Users are now consistently prioritizing reliability, predictable behavior, and permission safety over flashy new generative capabilities, driving a shift from "what the model can do" to "what the tool can do without breaking existing workstreams".

## 2. Activity Comparison
| Tool Name               | Actively Updated Issues (24h) | Public Key PRs Updated | 24h Release Status |
|-------------------------|--------------------------------|------------------------|--------------------|
| Claude Code             | 30                             | 1                      | 1 stable production build (v2.1.162) |
| OpenAI Codex            | 30                             | 6                      | 2 Rust runtime pre-releases |
| Gemini CLI              | 50+                            | 7                      | 1 stable, 2 pre-release builds |
| GitHub Copilot CLI      | 15+                            | 1                      | No new releases |
| Kimi Code CLI           | 7                              | 1                      | No new releases |
| OpenCode                | 10                             | 10                     | No new releases |
| Pi                      | 11 (merged/in-progress)        | 10                     | No new releases |
| Qwen Code               | 10                             | 10                     | 1 stable, 1 pre-release, 1 nightly build |
| CodeWhale (DeepSeek TUI)| 10                             | 10                     | 2 minor stable rebrand releases |

## 3. Shared Feature Directions
Multiple high-priority user requirements appear across 3+ independent tool communities, indicating cross-market unmet demand:
1. **Standard terminal input UX parity**: Fixes for Shift+Enter multi-line newline insertion, muscle-memory aligned keyboard shortcuts, and non-Latin locale input support (CJK IME, German AltGr keybindings) are requested or recently shipped across Copilot CLI, OpenCode, Pi, Gemini CLI, and Qwen Code to eliminate workflow friction for long-time terminal users.
2. **Generic self-hosted BYOM (Bring Your Own Model) support**: Compatibility with standards-compliant OpenAI-compatible endpoints (Ollama, vLLM, LM Studio) is a top requested feature across Codex, Copilot CLI, Pi, and Qwen Code, as multi-model developer adoption of local inference accelerates.
3. **MCP scalability hardening**: Teams across Codex, Copilot CLI, Gemini CLI, and Qwen Code are fixing widespread context bloat bugs, where MCP tool schemas consume 70%+ of available token window before user input, triggering unwanted automatic compaction or full session failures.
4. **Transient error resilience**: Automatic retry logic for network blips, and auto-eviction of oversized images/assets instead of hard 413/400 request failures are being implemented across Pi, OpenCode, and Claude Code to prevent avoidable full session deaths.
5. **Agent permission safety guardrails**: Explicit user confirmation for destructive system operations and sandboxed filesystem access to limit unintended edits are requested across Copilot CLI, Gemini CLI, and OpenCode following multiple reported incidents of agents modifying production files without approval.

## 4. Differentiation Analysis
Tools cluster into 3 distinct groups with clearly differentiated priorities and target audiences:
1. **Big Vendor Enterprise Tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Target paid Pro and enterprise customers, with a closed-source core prioritizing deep IDE/LSP integration, compliance controls for managed deployments (AWS Bedrock, Azure OpenAI), and native team collaboration features (e.g. Claude's new Socratic mentoring plugin for junior dev upskilling). Customizability for power users is intentionally limited to reduce security risk for fleet deployments.
2. **Regional LLM Vendor Tools (Gemini CLI, Kimi Code, Qwen Code)**: Target broad cross-platform and regional developer bases, with partially open source cores prioritizing compatibility with under-served environments (Termux for Android, Wayland for Linux, domestic Chinese inference endpoints) that Western vendors do not support out of the box. Qwen and Kimi also prioritize parity between their CLI products and hosted web editor experiences to reduce workflow switching overhead.
3. **Independent Open Source Tools (OpenCode, Pi, CodeWhale)**: Target power users, self-hosters, and developers embedding AI CLI as a library in their own agent workflows. Their technical architecture is fully modular, with first-class support for custom provider implementations, remote SSH execution, and multi-agent orchestration (e.g. CodeWhale's new WhaleFlow runtime) that is not available on closed-source vendor tools. Casual user onboarding is a lower priority than maximum extensibility.

## 5. Community Momentum & Maturity
1. **Most mature, highest active user base**: Claude Code and OpenAI Codex lead in size of active tracked community, with 30+ concurrent updated issues each, driven by large existing enterprise and Pro plan install bases. GitHub Copilot CLI has the largest casual user footprint by virtue of its native GitHub ecosystem integration.
2. **Rapidly iterating high-growth tools**: CodeWhale and Qwen Code are the fastest moving projects, shipping 2+ releases per 24 hours, with fast-growing open-source developer communities focused on local model and self-hosted use cases. Gemini CLI is also showing high velocity, with 50+ tracked issue updates and multiple security and platform compatibility fixes shipped in a single day.
3. **Niche high-power communities**: OpenCode and Pi have small but extremely engaged power user bases consisting primarily of agent framework developers and advanced multi-model users, with minimal casual user noise and very focused feature roadmaps aligned on low-level runtime control. Kimi Code CLI maintains a small, loyal user base aligned with the hosted Kimi web editor product.

## 6. Trend Signals
The 2026-06-04 digest data confirms 3 high-impact industry trends for AI developer tool teams:
1. The raw code generation performance arms race is effectively over. No tools are prioritizing new model capabilities over UX, reliability, and compatibility fixes, which are now the top drivers of user retention. For product teams, investing in standard terminal input parity and familiar muscle memory will deliver far higher user satisfaction than incremental generative performance gains.
2. MCP has cemented its position as the de facto global standard for AI tool extensibility. No competing tool interface standards have gained meaningful traction, making MCP compliance table stakes for any new AI CLI launch targeting professional developers.
3. Local self-hosted model support is no longer a niche power user feature, but a core requirement for mainstream developer adoption. 7 out of 8 tracked tools have active roadmap work for generic OpenAI-compatible endpoint support, indicating that developers are now routinely using a mix of cloud hosted and local open models for daily work. Enterprise buyers are also prioritizing permission guardrails and sandboxed execution above all other new feature requests, in response to rising reports of agents making unintended modifications to production systems.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-06-04)
---

## 1. Top Skills Ranking
Ranked by inferred community attention, tied to linked high-engagement issues and use case breadth:
1.  **`agent-creator` Meta-Skill (PR #1140)** | https://github.com/anthropics/skills/pull/1140
    Functionality: Delivers a framework for building task-specific custom agent sets, plus critical stability fixes for multi-parallel tool call evaluation and native Windows support for the `recalc.py` utility. Discussion highlights: Directly addresses community issue #1120, resolves long-standing cross-platform compatibility gaps for skill evaluators. Status: Open, last updated 2026-06-02.
2.  **Feature Development Workflow Bug Fix (PR #363)** | https://github.com/anthropics/skills/pull/363
    Functionality: Patches the widely used `feature-dev` skill to fix a TodoWrite overwrite bug that skipped Phase 6 (Quality Review) and Phase 7 (Summary) of standard software development workflows. Discussion highlights: Community users reported corrupted task lists across 100+ public skill implementations prior to this submission. Status: Open, last updated 2026-06-03.
3.  **Document Typography Skill (PR #514)** | https://github.com/anthropics/skills/pull/514
    Functionality: Adds automated quality control for AI-generated documents, preventing orphan word wraps, stranded widow headers, and numbering misalignment across all output formats. Discussion highlights: Framed as a universal utility that improves every document Claude generates, with broad appeal for technical writers, enterprise users and academic teams. Status: Open.
4.  **Full Testing Patterns Skill (PR #723)** | https://github.com/anthropics/skills/pull/723
    Functionality: A end-to-end testing reference skill covering unit testing, React component testing, end-to-end testing patterns, and the Testing Trophy philosophy for optimal test coverage. Discussion highlights: One of the most requested new technical skill submissions among developer community members. Status: Open.
5.  **Full ServiceNow Platform Skill (PR #568)** | https://github.com/anthropics/skills/pull/568
    Functionality: A broad enterprise assistant skill supporting 12+ ServiceNow use cases including ITSM, SecOps, IT asset management, and IntegrationHub development. Discussion highlights: Fills a major gap for Fortune 500 teams using Claude to automate enterprise SaaS administration workflows. Status: Open.
6.  **n8n Workflow Builder + Debugger Skills (PR #190)** | https://github.com/anthropics/skills/pull/190
    Functionality: Two production-tested skills that support building no-code n8n automation workflows from scratch and debugging broken existing deployments. Discussion highlights: Part of a batch of 4 community-vetted skills focused on low-code automation use cases. Status: Open.
7.  **Skill Quality + Security Analyzer Meta-Skills (PR #83)** | https://github.com/anthropics/skills/pull/83
    Functionality: Two dedicated meta-skills that evaluate new community submissions across 5 quality dimensions and 7 security risk categories to flag unsafe or poorly written assets. Discussion highlights: Directly responds to the public trust boundary vulnerability reported in high-engagement issue #492. Status: Open.

## 2. Community Demand Trends
Distilled from the top 15 commented community issues, the highest-priority new Skill directions are:
1.  **Enterprise team skill management**: 13 comments on top issue #228 confirm the most requested missing feature is native org-wide skill sharing, to eliminate the current clunky manual upload workflow for internal team use cases.
2.  **Full Windows compatibility for skill tooling**: 9 comments on bug #556 plus 3 distinct user-submitted PRs confirm widespread demand for zero-friction native Windows support for all skill creation, validation and evaluation scripts.
3.  **Third-party enterprise platform integration**: High unmet demand for production-ready, pre-vetted skills for widely deployed SaaS platforms including ServiceNow, SAP, n8n, and LibreOffice/ODT document tooling.
4.  **Skill governance infrastructure**: 7 comments on security issue #492 highlight urgent community need for built-in guardrails to prevent impersonation of official Anthropic skills and validate community submissions for safety and quality.
5.  **Cross-ecosystem interoperability**: Requests for native Skill exposure as Model Context Protocol (MCP) services, official AWS Bedrock support for existing Skills, and native multi-reference-file bundling to avoid exceeding context window limits on Skill loading.

## 3. High-Potential Pending Skills
These recently updated active PRs are nearly ready for merge, and likely to land in the official collection imminently:
1.  PR #363 (feature-dev workflow fix): Updated 2026-06-03, resolves a widely reported workflow corruption bug for the core software development skill.
2.  PR #1140 (agent-creator meta-skill): Updated 2026-06-02, delivers a highly requested custom agent building framework plus cross-platform stability fixes.
3.  PR #541 (docx skill tracked change fix): Updated 2026-04-16, resolves a common document corruption bug for the heavily used DOCX generation skill.
4.  PR #539 (skill-creator YAML validation fix): Updated 2026-04-16, adds pre-parsing validation that prevents silent YAML parsing failures that break new skill submissions for first-time authors.

## 4. Skills Ecosystem Insight
As of June 2026, the Claude Code Skills community’s most concentrated, highest-priority demand is standardized, cross-platform, enterprise-ready skill tooling and governance that removes workflow friction for teams of all sizes building, sharing, and using custom agent capabilities.

---

# Claude Code Community Digest | 2026-06-04
---
## 1. Today's Highlights
The 24-hour update window covers the rollout of Claude Code v2.1.162, one newly merged feature plugin PR, and 30 recently updated community issues spanning Windows, macOS, Linux, and enterprise AWS Bedrock deployment environments. Today’s highest-engagement discussion centers on a long-unresolved Windows LSP workspace symbol bug that breaks daily editor workflows, while widespread spurious 1M context usage credit errors are driving dozens of overlapping user reports across all platforms. A long-awaited Socratic mentoring collaboration plugin was recently merged, adding a new guided learning workflow for upskilling teams and junior developers.

## 2. Releases
Only one new production build was published in the last 24 hours:
- **v2.1.162**: 
  1. Added a new `waitingFor` field to `claude agents --json` output that explicitly shows what a blocked/waiting session is paused on (e.g. pending permission prompts) for easier stuck session debugging
  2. Fixed a bug where explicitly listing Grep/Glob in the `--tools` flag was silently ignored; native builds with embedded search now correctly load the dedicated search tools when these names are referenced.

## 3. Hot Issues (10 Noteworthy Items)
| Issue | Details | Impact & Community Reaction |
|---|---|---|
| [#17149](https://github.com/anthropics/claude-code/issues/17149) | Open bug: Windows LSP `workspaceSymbol` operation sends an empty query parameter | 29 comments, 20 👍; breaks VS Code symbol jump functionality for all Windows Claude Code users. Community members have shared full repro traces to help the team prioritize a patch. |
| [#63870](https://github.com/anthropics/claude-code/issues/63870) | Open bug (has repro, macOS): Bash tool calls emitted as raw `<invoke>` text instead of executing | 7 comments, 10 👍; users shared JSONL debug traces documenting 23 malformed bash calls in a single session. The bug blocks task completion silently and wastes tokens, requiring users to manually copy-paste commands to proceed. |
| [#63634](https://github.com/anthropics/claude-code/issues/63634) | Open bug: `/compact` fails with "Usage credits required for 1M context" even if the user explicitly sets the session model to Sonnet 4.6 | 5 comments, 2 👍; the compaction process is hardcoded to request a 1M context model regardless of user session settings, defeating the core purpose of compaction for non-premium users. |
| [#63908](https://github.com/anthropics/claude-code/issues/63908) | Open duplicate bug (macOS): Spurious "Usage credits required for 1M context" error on cowork sessions | 13 comments; hits Pro plan users who never opted into 1M context workloads. Multiple users report clearing local cache as a temporary workaround, waiting for an official root cause fix. |
| [#64403](https://github.com/anthropics/claude-code/issues/64403) | Open data loss bug (macOS): Local session history silently wiped after app update with no warning or server backup | 2 comments; users who forgot to manually export sessions lost days of unsaved work. The community is requesting mandatory pre-update prompts and opt-in server sync for local session data. |
| [#44783](https://github.com/anthropics/claude-code/issues/44783) | Closed bug: Parent session deadlocks when subagent tool execution hangs, no timeout | 6 comments, 3 👍; prior to the partial fix, stuck sessions could run unresponsive for 7+ hours wasting tokens. Users are now requesting fully configurable custom timeout values for agent workflows. |
| [#65208](https://github.com/anthropics/claude-code/issues/65208) | Open bug (Bedrock + macOS Desktop): Haiku 4.5 sent as bare model ID instead of valid inference profile on scheduled task followups, returning 400 invalid model errors | 2 comments; breaks scheduled automation workflows for enterprise Claude Code users deploying via AWS Bedrock with strict IAM inference profile rules. |
| [#51404](https://github.com/anthropics/claude-code/issues/51404) | Closed invalid issue: Unauthorized "Gift Max 20X" billing charge | 8 comments; highlights gaps in billing alerting for unexpected plan upsells. Users are requesting explicit pre-charge confirmation prompts for all add-on purchases. |
| [#64563](https://github.com/anthropics/claude-code/issues/644563) | Closed regression bug: Linux x64 v2.1.159 binary ships as invalid executable, throws exec format error | 2 comments; broke installation for all Linux/WSL users on the prior minor release, resolved in the newly published v2.1.162 build. |
| [#65205](https://github.com/anthropics/claude-code/issues/65205) | Open duplicate bug: Claude Cowork defaults to 1M context on Pro plans, ignores environment variables | 1 comment, newly reported; adds to the growing list of overlapping 1M context forced-request bugs that break standard Pro plan workflows. |

## 4. Key PR Progress
Only one pull request was updated in the 24-hour window for this digest:
- [#22919](https://github.com/anthropics/claude-code/pull/22919) (Closed, merged): `feat(plugins): add collab plugin for Socratic mentoring mode`
  This new official collab plugin transforms Claude Code from a direct code generation tool to a guided Socratic mentor, that asks progressive, context-aware guiding questions instead of writing full solution code. It is purpose-built for pair programming with junior developers, code review training, and upskilling workflows where users want to build implementation skills rather than get pre-written snippets.

## 5. Feature Request Trends
From the full set of updated community issues, the highest-priority requested features fall into four clear buckets:
1. **Quota & Usage Transparency**: Users want explicit exposure of plan usage percentages, weekly reset timelines, and remaining quota values directly in CLI output, status line JSON, and local logs to avoid having to navigate to the claude.ai web dashboard for consumption tracking.
2. **Cross-Device Sync**: Community members are requesting native sync support for local `CLAUDE.md` user memory, custom hooks, and saved session history across multiple user devices (desktops, laptops, remote servers).
3. **Managed Environment Customization**: Users on enterprise admin-controlled deployments are requesting separate configurable status line settings that work even when arbitrary script execution is blocked via managed policies.
4. **Graceful Image Handling**: The community wants automatic auto-downscaling of oversized images in conversation history instead of hard turn-blocking errors when images exceed the API's maximum dimension limits.

## 6. Developer Pain Points
Recurring high-frequency frustrations documented in the updated issues:
1. **Widespread spurious 1M context errors**: Multiple overlapping bugs across `/compact`, Cowork, and scheduled task workflows are incorrectly forcing 1M context model requests for users who never opted into that paid tier, throwing unplanned session-blocking errors.
2. **Unreliable tool execution**: Recent model versions frequently emit raw `<invoke>` markup instead of properly formatted tool calls, causing Bash and other tool actions to silently fail or render as plain unexecuted text.
3. **Poor stuck session visibility**: Prior to v2.1.162, there was no way to see what a paused agent session was blocked on, forcing users to manually kill long-running deadlocked sessions that could waste hours of compute and tokens.
4. **Unconfirmed destructive actions**: Common workflows like `/export` that overwrite existing local files, and app updates that wipe local session history run silently without user confirmation, leading to avoidable accidental data loss.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-04
Official repository: [github.com/openai/codex](https://github.com/openai/codex)

---

## 1. Today's Highlights
This digest covers two new Rust runtime pre-releases, 30 actively updated top community issues, and 20 in-flight code changes for the Codex developer toolchain. Top priority updates include targeted performance optimizations for MCP and streaming workflows, quality-of-life improvements for CLI/TUI users, and new security controls for sensitive data handling. The longstanding high-vote bug that hid context/token usage indicators on Codex Desktop has been formally resolved, following 160+ community upvotes and months of user reports.

---

## 2. Releases
Two sequential Rust runtime pre-releases shipped in the last 24 hours, focused on low-level stability and performance fixes for the Codex core, app-server, and MCP processing stacks:
- [rust-v0.137.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.4)
- [rust-v0.137.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.5)

Both builds are for early testing and will roll up into the next stable public release of the Codex CLI and Desktop app.

---

## 3. Hot Issues
1. [#23794 (CLOSED): Codex Desktop no longer shows visible context/token usage indicator](https://github.com/openai/codex/issues/23794) | 163 comments, 160 👍: One of the highest-impact user-facing UX bugs from recent releases is now resolved, eliminating the need for users to manually query remaining context window capacity during long coding sessions.
2. [#11023 (OPEN): Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) | 82 comments, 454 👍: The top-voted open feature request, driven by user reports of severe battery drain on Codex for macOS, making Linux native support a high priority for developers working on desktop workstations.
3. [#4432 (OPEN): First-class multi-account auth via '--auth-profile'](https://github.com/openai/codex/issues/4432) | 15 comments, 102 👍: Would eliminate the widespread pain point of manually swapping `CODEX_HOME` directories for developers managing multiple client, organizational, and personal OpenAI accounts.
4. [#21527 (OPEN): Codex is really too slow](https://github.com/openai/codex/issues/21527) | 25 comments, 14 👍: Consolidates cross-platform reports of excessive latency impacting both the native Codex app and VS Code extension, prompting targeted optimization work in recent PRs.
5. [#24675 (OPEN): Codex Desktop keeps stale app connector link after reauth-required 401 until codex_apps cache is cleared](https://github.com/openai/codex/issues/24675) | 17 comments, 11 👍: Fixing this bug would remove the unrequired manual cache clear step for users re-authenticating third-party MCP connectors like Linear, Notion, and GitHub.
6. [#26234 (OPEN): Flatten MCP namespace tools for non-OpenAI Responses API providers (Ollama, LM Studio, OpenRouter)](https://github.com/openai/codex/issues/26234) | 7 comments, 16 👍: Addresses a major blocker for self-hosted users running local models, who cannot call any MCP tools due to Codex's proprietary namespacing schema.
7. [#25715 (OPEN): Codex App is Unusable Slow with WSL as Agent environment](https://github.com/openai/codex/issues/25715) | 11 comments, 15 👍: Community debugging confirms the bug stems from repeated over-scanning of the `/mnt/c` shared Windows filesystem, with targeted fixes in active review.
8. [#20769 (OPEN): Codex App resets Speed from Fast to Standard after restart](https://github.com/openai/codex/issues/20769) | 15 comments, 11 👍: A persistent UX regression that erases user-selected performance preferences every time the desktop app is relaunched.
9. [#26183 (OPEN): Please restore 5.3-codex as a selectable model](https://github.com/openai/codex/issues/26183) | 3 comments, 4 👍: Real-world developer feedback notes that the newer 5.4 model is more expensive but delivers worse practical coding performance for routine software engineering workloads.
10. [#15975 (OPEN): Codex extension stuck on loading/logo screen after VS Code update on Windows](https://github.com/openai/codex/issues/15975) | 12 comments, 1 👍: Frequent breakage that blocks IDE integration for thousands of Windows developers immediately after VS Code auto-updates.

---

## 4. Key PR Progress
1. [#26265: Optimize unbounded byte scans with memchr](https://github.com/openai/codex/pull/26265) | Delivers 2-3x performance improvements for MCP stdio processing, Ollama streaming, and message history newline counting to address widespread user latency reports.
2. [#26229: Add protected data mode to core and app server](https://github.com/openai/codex/pull/26229) | Introduces new end-to-end sensitive data controls, where MCP tool results can trigger a strict mode requiring explicit user approval for all cross-connector data exports to prevent accidental exfiltration.
3. [#25638 (CLOSED): feat(tui): add /app desktop handoff](https://github.com/openai/codex/pull/25638) | Lets CLI/TUI users instantly open their current active thread in Codex Desktop via deep link, eliminating the need to manually reconstruct threads across tools.
4. [#26140: manage native HTTP state lifecycle and remote control](https://github.com/openai/codex/pull/26140) | Standardizes global HTTP and WebSocket session state clearing on login, refresh, and logout to eliminate stale auth state bugs reported across dozens of community issues.
5. [#23547: config: add project-local config.override.toml layers](https://github.com/openai/codex/pull/23547) | Adds a new private, higher-precedence config file that lets developers customize Codex settings for individual repos without modifying the checked-in shared `.codex/config.toml`.
6. [#26252: ci: sign macOS release artifacts with Azure Key Vault](https://github.com/openai/codex/pull/26252) | Overhauls the macOS notarization workflow to use GitHub OIDC and Azure Key Vault for secure code signing, eliminating the risk of exposing private Developer ID

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-04
---

## 1. Today's Highlights
Yesterday the Gemini CLI team shipped new v0.46.0 pre-release builds with critical native crash hardening for PTY (pseudoterminal) resizing, completed full plumbing for rolling out the new Gemini 3.5 Flash GA model to eligible users, and merged a high-severity security fix mitigating path traversal vulnerabilities in the agent skill management subsystem. Multiple long-running top-priority bugs causing agent hangs and broken task status reporting have moved to the need-retesting phase as part of the latest maintenance sprint, with 50+ tracked issue and PR updates recorded in this 24-hour window.

## 2. Releases
Three new versions were published in the last 24 hours:
- **v0.46.0-preview.1**: Patch pre-release cherry-picking commit e4315b3 to resolve regressions in the prior v0.46.0 preview build, no new user-facing features added. [PR #27655](https://github.com/google-gemini/gemini-cli/pull/27655)
- **v0.46.0-preview.0**: Major pre-release including a core fix that hardens PTY resize logic against native terminal crashes, plus aggregated changelog updates from the v0.44 and v0.45 release cycles. [Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.0)
- **v0.45.0**: Stable public release that resolves all known Termux for Android platform issues, eliminating infinite relaunch and resize remount loops for users running the CLI on mobile terminals. [Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0)

## 3. Hot Issues
Top 10 high-engagement, high-priority updated issues:
1. [#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, 8 👍, 7 comments): The highest-voted user-reported bug, where the generalist subagent hangs indefinitely even for trivial tasks like folder creation; users report workarounds that explicitly disable subagent deferral resolve the issue.
2. [#24353 Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) (P1, 7 comments): Cross-team epic tracking expansion of the project's behavioral test suite past 76 existing tests across 6 Gemini model variants to reduce user-facing regressions.
3. [#22745 AST-aware file reads assessment](https://github.com/google-gemini/gemini-cli/issues/22745) (P2, 1 👍,7 comments): High-impact feature investigation that would cut LLM token noise and reduce wasted tool turns by using syntactic AST mappings instead of raw full-file reads for codebase exploration.
4. [#22323 Subagent MAX_TURNS misreported as success](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, 2 👍,6 comments): Critical status reporting bug where the codebase investigator subagent incorrectly returns a "GOAL success" status even when it hit the maximum turn limit and completed zero analysis.
5. [#21968 Underutilization of custom skills](https://github.com/google-gemini/gemini-cli/issues/21968) (P2, 6 comments): Widely reported usability gap where the CLI agent never automatically invokes user-defined custom skills and subagents even for highly relevant tasks, requiring explicit user prompts to trigger them.
6. [#25166 Shell execution stuck on "Awaiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) (P1,3 👍,4 comments): Core UX bug where the CLI hangs showing an active "Awaiting user input" state even after a non-interactive shell command has fully finished executing.
7. [#21983 Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) (P1,1 👍,4 comments): Compatibility bug breaking the browser automation subagent for all Linux users running the modern Wayland display server, a default configuration on most 2025+ desktop Linux distros.
8. [#26525 Deterministic Auto Memory redaction](https://github.com/google-gemini/gemini-cli/issues/26525) (P2, 3 comments): High-priority security issue requiring pre-model-input secret redaction for the Auto Memory feature, preventing accidental sensitive data exposure before transcripts are sent to the background extraction model.
9. [#24246 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) (P2, 3 comments): Scalability bug where users with many installed MCP tools hit hard API errors because the CLI does not intelligently scope available tools to only those relevant for the active task.
10. [#22672 Agent destructive behavior guardrails](https://github.com/google-gemini/gemini-cli/issues/22672) (P2, 1👍,2 comments): Safety feature request to add guardrails that block the LLM from executing high-risk destructive commands (such as `git --force` resets) without explicit user confirmation.

## 4. Key PR Progress
1. [#27659 Path traversal vulnerability mitigation](https://github.com/google-gemini/gemini-cli/pull/27659): Critical security fix that fully blocks path traversal attacks across the install, link, and uninstall skill workflows in the agent subsystem.
2. [#27645 3.5 Flash auto mode model resolution](https://github.com/google-gemini/gemini-cli/pull/27645): Updates the CLI's auto model alias to automatically use GA Gemini 3.5 Flash for eligible users, ensuring maximum performance for everyday tasks.
3. [#27619 Atomic MCP tool discovery update](https://github.com/google-gemini/gemini-cli/pull/27619): Fixes "tool not found" errors during transient network outages by implementing atomic updates to the MCP tool registry, retaining the last working valid tool set during refresh failures.
4. [#27572 tmux false background detection fix](https://github.com/google-gemini/gemini-cli/pull/27572): Resolves a regression where the CLI incorrectly detected a light terminal background and triggered invalid theme warnings when running inside tmux/mosh sessions.
5. [#25786 Enhanced /copy command](https://github.com/google-gemini/gemini-cli/pull/25786): Adds index support to the existing `/copy` command, letting users copy any prior AI response or tool output instead of only the most recent result, including extracted MCP tool response text.
6. [#27639 Auto-update disable for corporate paths](https://github.com/google-gemini/gemini-cli/pull/27639): Disables automatic update prompts for users running the CLI from official Google internal `/google/bin/` release paths to align with corporate managed software policies.
7. [#27505 CJK wide character rendering fix](https://github.com/google-gemini/gemini

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-04
---
## 1. Today's Highlights
No new public releases were published in the last 24 hours, but the core team closed over 15 longstanding bug fixes and feature requests including native macOS keyboard shortcut parity, generic local BYOM support, and multiple CJK input rendering glitches. The highest-voted open community feature request for sandboxed filesystem access continues to gain traction, while critical context window overflow bugs affecting enterprise MCP deployments are actively being triaged.
---
## 2. Releases
No new stable or preview Copilot CLI releases were rolled out in the 24-hour reporting window.
---
## 3. Hot Issues (Noteworthy 10)
All items below were updated in the last 24 hours:
1. **[#1481 (CLOSED)](https://github.com/github/copilot-cli/issues/1481): Shift+Enter line break behavior** – Resolves a top 5 UX pain point with 24 comments and 14 upvotes, aligning Copilot CLI input behavior with standard chat app conventions where Shift+Enter inserts a new line instead of submitting the prompt.
2. **[#892 (OPEN)](https://github.com/github/copilot-cli/issues/892): Sandboxed filesystem mode** – The highest-voted open feature request (49 👍) from the community, asking for agent permission constraints to limit read/write operations to a specified working directory to prevent accidental production system edits.
3. **[#3539 (OPEN)](https://github.com/github/copilot-cli/issues/3539): MCP tool context bloat** – Power users running ~10 MCP servers report that system and tool schemas consume 73% of the 200k token context window before sending any user input, triggering immediate unwanted auto-compaction on new sessions.
4. **[#1999 (OPEN)](https://github.com/github/copilot-cli/issues/1999): German keyboard Alt-Gr + q @ input failure** – Critical accessibility bug that makes Copilot CLI nearly unusable for German locale developers, as the @ symbol required for file/context mentions cannot be typed.
5. **[#3622 (OPEN)](https://github.com/github/copilot-cli/issues/3622): Silent Windows clipboard copy failure** – Post v1.0.48 regression that appears to successfully copy generated code snippets to clipboard but does not update the clipboard content, breaking a core daily workflow for Windows users.
6. **[#3542 (OPEN)](https://github.com/github/copilot-cli/issues/3542): Enterprise MCP infinite compaction loop** – Enterprise users report that large MCP allowlist tool schemas exceed hard runtime token limits, triggering permanent compaction loops that break all active sessions.
7. **[#3659 (OPEN)](https://github.com/github/copilot-cli/issues/3659): Windows plugin hook execution failure** – v1.0.57 regression that breaks all user prompts with unhandled preToolUse hook exceptions for users with third-party plugins installed.
8. **[#3624 (CLOSED)](https://github.com/github/copilot-cli/issues/3624): Generic local inference BYOM support** – Closed as resolved, the feature request adds support for self-hosted OpenAI-compatible endpoints (Ollama, LM Studio, llama.cpp) for bring-your-own-model deployments, expanding on the earlier Anthropic-only BYOM release.
9. **[#45 (CLOSED)](https://github.com/github/copilot-cli/issues/45): macOS Option/Cmd + backspace deletion shortcuts** – Longstanding feature request to match native macOS terminal input muscle memory, now resolved for all Mac users.
10. **[#3662 (OPEN)](https://github.com/github/copilot-cli/issues/3662): Windows 11 uninstall failure** – Common onboarding pain point where users cannot uninstall Copilot CLI via Windows Control Panel, with no public documented CLI uninstall path available.
---
## 4. Key PR Progress
Only 1 public community PR was updated in the last 24 hours, with no internal repo PRs visible in the public feed:
- **[#3651 (OPEN)](https://github.com/github/copilot-cli/pull/3651): xcopilotcli wrapper utility** – Draft community contribution by user XavierMP14 adding a new wrapper utility for Copilot CLI, with no formal feature description attached at the current stage of the submission.
---
## 5. Feature Request Trends
Distilled from all recently updated issues, the top priority community feature directions are:
1. Hardened agent permission controls, including full sandboxed filesystem access to prevent unintended system modifications
2. Expanded BYOM support for generic self-hosted local inference endpoints, beyond the currently supported Anthropic provider
3. Full input parity for non-Latin locales, including CJK IME support and layout-accurate terminal rendering
4. Session quality-of-life upgrades: auto-named terminal sessions based on conversation context, and improved resume-from-history functionality
5. New platform support for voice dictation on linux-arm64 to serve the large WSL2 Windows ARM user base
---
## 6. Developer Pain Points
Recurring high-frequency frustrations reported in the last 24 hours:
1. Widespread input and rendering regressions following the v1.0.55 cell-based terminal renderer rollout, including broken platform-specific keyboard shortcuts, invisible CJK characters, and IME composition flickering on Windows
2. Context window bloat for power users and enterprise teams running multiple MCP servers, leading to forced early auto-compaction and permanent broken session loops
3. Consistent platform-specific regressions on Windows across recent releases, including broken clipboard copy, plugin hook failures, corrupted session state after OS crashes, and missing uninstall documentation
4. Missing core UX parity with full browser-based Copilot Chat, including separate input/output token usage breakdowns, and a working Esc shortcut to interrupt in-flight model responses mid-stream

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-04
Repository: github.com/MoonshotAI/kimi-cli

---
## 1. Today's Highlights
For the 24-hour reporting window ending 2026-06-04, the Kimi Code CLI maintainers resolved 3 long-pending enhancement and bug issues, and merged the corresponding supporting feature PR to the main code branch. No new official public releases were shipped in this timeframe. Four new user-submitted reports focused on core session management bugs and functionality parity with Kimi’s native web editor experience were filed overnight, indicating strong user demand for workflow quality-of-life improvements.

## 2. Releases
No new official Kimi Code CLI releases were published in the 24-hour update window.

## 3. Hot Issues
All 7 recently updated community issues are listed below:
1. **#751 [CLOSED] Slash commands execute immediately upon selection**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/751) | This long-open quality-of-life enhancement eliminates the redundant second Enter keypress required after selecting a slash command, cutting workflow friction for power users who frequently leverage CLI shortcuts. It received 5 positive community comments on the planned UX change.
2. **#1847 [CLOSED] Treat pasted image and text placeholders as a single editable block**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1847) | This UX fix addresses common accidental partial deletions or cursor misalignment when working with inline pasted assets, matching the editing behavior users expect from competing AI CLI tools.
3. **#2306 [CLOSED] APC protocol playback fix for missing session history**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2306) | This bug closes a critical functionality gap for Zed editor integration and kimi web browser mode users, who previously saw empty session content after restarting their editor or switching between saved sessions.
4. **#2420 [OPEN] Session resume overrides newly generated system prompt, blocking skill/config updates**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2420) | This newly filed critical bug breaks core custom skill functionality for power users: changes to local custom skill files never load when resuming old sessions, as stale context data overwrites freshly generated system prompts.
5. **#2421 [OPEN] Request for native project model support for session organization**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2421) | This highly requested feature would add session grouping under dedicated project folders, with targeted memory indexing to reduce unnecessary token consumption when working on large multi-session codebases.
6. **#2419 [OPEN] Copy functionality is broken in kimi web UI output boxes**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2419) | This widespread usability bug impacts all users accessing Kimi Code CLI via browser, preventing them from quickly copying generated code snippets directly to their local editor.
7. **#2418 [OPEN] Request to disable automatic full session replay when switching sessions in web mode**  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2418) | This quality-of-life fix would eliminate unnecessary waiting time for users who manage dozens of saved sessions, who currently have to wait for full history regeneration every time they navigate between different workspaces.

## 4. Key PR Progress
Only 1 active PR was updated in the 24-hour window:
- **#1848 [CLOSED] feat(prompt): edit image and pasted-text placeholders as blocks**  
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/1848) | This merged PR implements full functionality for the request laid out in issue #1847. It enables block-level selection and deletion for pasted images and large inline text pastes, eliminating partial character-level editing of placeholder markers that previously caused frequent user frustration. The implementation follows standard industry behavior used in top competing AI CLI tools, with no breaking changes to existing input workflows.

## 5. Feature Request Trends
The most requested feature directions from recent community reports are:
1. **Kimi web editor parity**: The majority of new enhancement requests focus on closing functionality gaps between the CLI/self-hosted web mode experience and the official hosted Kimi web product, including session replay controls and native copy support for output blocks.
2. **Natural block-level input editing**: Multiple recent enhancements and requests target more predictable text editing behavior for non-plain-text assets in the CLI input line.
3. **Project-level session organization**: Users are actively requesting hierarchical session grouping with dedicated memory indexing to reduce token overhead for long-running large codebase development workflows.
4. **Reduced CLI input friction**: Power user requests consistently target removing redundant keystrokes for slash command execution and other high-frequency CLI actions.

## 6. Developer Pain Points
Recurring top frustrations for Kimi Code CLI users include:
1. Broken custom skill updates on session resume: The newly discovered system prompt override bug blocks all new custom skill and configuration changes from loading when resuming saved sessions, breaking core extensibility workflows for advanced users.
2. Missing session history across integrations: The recently resolved ACP protocol gap left Zed integration and web mode users with empty session content after restarting their client, a major pain point for users who rely on persistent cross-session context.
3. Accidental partial deletion of pasted assets: Before the recent block editing feature shipped, users frequently experienced accidental partial erasure of pasted text snippets and image markers, leading to lost work and rework.
4. Slow session switching in web mode: The current full replay requirement when navigating between sessions creates unnecessary latency for users managing large numbers of saved work sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-04
---
## 1. Today's Highlights
Today’s update covers no new official OpenCode releases in the past 24 hours, with a flurry of focused bug fixes, long-requested quality of life improvements, and high-visibility feature discussions across the repository. Maintainers have prioritized closing long-standing reliability gaps around nested subagents, session persistence, and transient network errors that were reported by dozens of active users in recent weeks. Multiple overlapping voice and speech-to-text feature requests have emerged as the top trending community priority, with ongoing alignment around both local-first and API-based implementation paths for end users.

## 2. Releases
No new official OpenCode releases were published in the 24 hour window ending 2026-06-04.

## 3. Hot Issues
1. **[CLOSED #1505] TUI shift+enter keybinding not working** https://github.com/anomalyco/opencode/issues/1505
   The years-old top-engagement bug where shift+enter failed to insert newlines in the TUI input field (only ctrl+j worked) is now marked resolved, after 126 community comments and 101 upvotes from long-time power users.
2. **[OPEN #4695] Native speech-to-text voice input feature** https://github.com/anomalyco/opencode/issues/4695
   The highest-voted active feature request has 161 👍, with users pushing for native voice prompt support to enable hands-free brainstorming and workflow automation.
3. **[OPEN #28996] Startup crash on Debian Testing** https://github.com/anomalyco/opencode/issues/28996
   Multiple Debian users confirm the app immediately crashes WezTerm on launch after recent updates, with maintainers currently collecting debug logs to identify the root cause.
4. **[OPEN #29992] Auto-scroll breaks after manual scroll back** https://github.com/anomalyco/opencode/issues/29992
   14 upvoted UX bug affects all desktop and TUI users: auto-scroll to the bottom of responses stops working entirely after a user manually scrolls up to read earlier content, forcing repeated manual re-scrolling mid-generation.
5. **[OPEN #29548] OpenAI provider 10s header timeout regression on v1.15.11** https://github.com/anomalyco/opencode/issues/29548
   10 commenters confirm that upgrading from v1.14.28 breaks OpenAI requests with a 10-second header timeout error, with a confirmed working workaround of manually increasing the `headerTimeout` config value.
6. **[OPEN #30086] Dramatically spiked CPU usage in recent builds** https://github.com/anomalyco/opencode/issues/30086
   Users report they previously ran 10+ concurrent OpenCode sessions without lag, but now see major system performance degradation with only 3 active sessions post recent updates.
7. **[OPEN #12800] Missing macOS-native clipboard fallback** https://github.com/anomalyco/opencode/issues/12800
   7 upvotes note the current xclip Bun implementation breaks clipboard sync on macOS, with broad community agreement that adding a simple pbcopy fallback will resolve the gap without breaking existing Linux workflows.
8. **[OPEN #17425] Plugin extensibility gaps block third-party voice input plugins** https://github.com/anomalyco/opencode/issues/17425
   This technical deep dive outlines missing plugin API hooks that prevent independent developers from building custom dictation and voice input tools, aligning with broader community demand for native voice support.
9. **[OPEN #16610] Startup hang when Linux inotify user instances are exhausted** https://github.com/anomalyco/opencode/issues/16610
   Users running multiple IDEs and dev tools report OpenCode hangs indefinitely on launch when it consumes all available system inotify watches, with users requesting graceful error handling instead of a silent hang.
10. **[CLOSED #30616] Reported security issue: AI agent accessed user auth.json without permission** https://github.com/anomalyco/opencode/issues/30616
   The newly filed vulnerability report was immediately triaged and closed by maintainers, who confirmed it only affects a non-default local agent misconfiguration edge case.

## 4. Key PR Progress
1. **#30639 fix(session): Route nested subagent permission prompts to ancestor UI** https://github.com/anomalyco/opencode/pull/30639
   Resolves the widely reported bug where permission prompts from nested sub-subagents never appear in the UI, causing indefinite hangs on tool calls, and also fixes missing prompt issues in the TUI.
2. **#30638 fix(session): Classify all common transport and timeout errors as retryable** https://github.com/anomalyco/opencode/pull/30638
   Expands the narrow existing retry logic that only covered `ECONNRESET` to support all transient network failures, preventing brief blips from killing full assistant sessions.
3. **#30640 feat(core): Full session movement support** https://github.com/anomalyco/opencode/pull/30640
   Adds new core control plane and TUI functionality to move existing sessions between different project directories, a top-requested feature for users that regularly reorganize their workspaces.
4. **#30636 fix(storage): Add missing session and event database indexes** https://github.com/anomalyco/opencode/pull/30636
   Adds indexes for `session.time_updated` and event aggregation fields to resolve slow UI load times for users with hundreds of stored historical OpenCode sessions.
5. **[CLOSED #30482] fix(opencode): Route SAP AI Core reasoning variants through modelParams** https://github.com/anomalyco/opencode/pull/30482
   Merged fix that corrects broken SAP provider behavior that was stripping `reasoningEffort`, `thinking`, and `thinkingConfig` parameters from user requests.
6. **#30641 fix(opencode): Eliminate shell cancellation race conditions** https://github.com/anomalyco/opencode/pull/30641
   Prevents unresponsive sessions when users interrupt ongoing shell commands by routing all cancellation events through the centralized session runner state machine.
7. **#27984 fix(llm): Strip dangling XML tool call closing tags from response text** https://github.com/anomalyco/opencode/pull/27984
   Adds a new output sanitization layer that removes malformed leftover XML tags from text responses generated by Qwen3 and other models hosted on vLLM/llama.cpp.
8. **#30642 fix(app): Hide unavailable titlebar update button** https://github.com/anomalyco/opencode/pull/30642
   Fixes a recent regression where the titlebar update notification button appeared unconditionally even when no new version was available, and adds regression tests for the full update installation flow.
9. **#12633 feat(tui): Add toggleable auto-accept mode for edit permissions** https://github.com/anomalyco/opencode/pull/12633
   Adds a new optional TUI mode that automatically approves file edit permission requests for users running long AI refactoring sessions, with a persistent "autoedit" visual indicator for transparency.
10. **[CLOSED #25631] fix(opencode): Normalize git subdirectory paths** https://github.com/anomalyco/opencode/pull/25631
    Merged fix that resolves broken file read errors in the code review UI

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-04
Source: github.com/badlogic/pi-mono (earendil-works/pi upstream)

---
## 1. Today's Highlights
No new official releases were published in the last 24 hours, with 11 merged and in-progress pull requests delivering critical new provider support, reliability fixes for large multi-turn sessions, and long-requested quality-of-life improvements for power users. Notable updates include full native support for the newly launched Minimax M3 1M-context multimodal model, dedicated native providers for Anthropic Claude on GCP Vertex AI and AWS Bedrock Mantle, and a resolution for the widespread 413 request-too-large failure pattern affecting image-heavy screenshot workflows. The highest-activity ongoing community discussion centers on an unresolved bug breaking multi-turn sessions with Claude Opus 4.8 adaptive thinking high-reasoning mode.

## 2. Releases
No new stable or pre-release Pi versions were published in the 24-hour tracking window.

## 3. Hot Issues
1. **[#5223] Anthropic Opus 4.8 adaptive thinking 400 failure** (Open, 14 comments, 5 👍)  
   https://github.com/earendil-works/pi/issues/5223
   The highest-impact active bug breaks mid-session multi-turn conversations with the latest Claude Opus release when adaptive high reasoning mode is enabled, interrupting long running coding agent workflows for paid Anthropic enterprise users.
2. **[#5271] Minimax M3 model support request** (Closed, 9 comments)  
   https://github.com/earendil-works/pi/issues/5271
   A high-priority feature request for the newly released Minimax M3 model, which natively supports 1M context and multimodal inputs; the request was resolved with corresponding catalog updates merged this week.
3. **[#4666] Retry-After cap ignoring configured maxRetryDelayMs** (Closed, 7 comments, 1 👍)  
   https://github.com/earendil-works/pi/issues/4666
   This long-standing bug meant Pi would unknowingly hang for hours waiting on server-sent rate limit delays far exceeding user-defined caps, which is fully resolved with the latest fixes.
4. **[#5103] Windows Git Bash detection fails for non-default install paths** (Open, 5 comments)  
   https://github.com/earendil-works/pi/issues/5103
   Breaks native bash tool support for enterprise Windows users who install Git Bash to non-C: drives, a common configuration for restricted managed devices.
5. **[#5323] Improved Vertex GCP metadata server authentication** (Open, 4 comments)  
   https://github.com/earendil-works/pi/issues/5323
   Fixes broken native authentication for users running Pi directly on GCP VMs, eliminating the requirement to manually download and inject static service account key files for cloud-hosted workloads.
6. **[#5340] Add /config and /exit CLI aliases** (Closed, 4 comments)  
   https://github.com/earendil-works/pi/issues/5340
   Resolves muscle memory pain points for Claude Code power users migrating to Pi, adding matching shortcuts for frequently used session controls.
7. **[#5188] Shift+enter does not insert new line** (Open, 3 comments, 1 👍)  
   https://github.com/earendil-works/pi/issues/5188
   Breaks expected IDE-style multi-line text input behavior for users who configure standard keybindings for long prompt drafting.
8. **[#5341] Remote SSH ExecutionEnv support** (Closed, 3 comments)  
   https://github.com/earendil-works/pi/issues/5341
   A highly requested feature that routes all Pi filesystem and process spawn operations to a remote host over SSH, eliminating the need to install Pi directly on headless dev servers.
9. **[#5303] Bash tool output truncation on child process exit** (Open, 2 comments)  
   https://github.com/earendil-works/pi/issues/5303
   Causes silent partial output loss for common commands like `git commit` that run short-lived background child processes (lint-staged, pre-commit hooks) which hold stdout open after the parent process exits.
10. **[#5369] Tool images bypass resizing leading to uncompactable sessions** (Closed, 1 comment)  
    https://github.com/earendil-works/pi/issues/5369
    Resolves a critical failure loop where accumulated full-resolution screenshots and generated images in session history would trigger endless 413 "prompt too long" errors that users could not recover from.

## 4. Key PR Progress
1. **[#5262] feat: Add Anthropic Vertex provider** (Open)  
   https://github.com/earendil-works/pi/pull/5262
   Implements a dedicated native provider for Claude models hosted on GCP's Vertex AI Gemini Enterprise Agent Platform, reusing Pi's existing shared Anthropic streaming and tool call logic to minimize redundant code.
2. **[#5370] fix: Recover from request-size overflow by dropping oldest images** (Closed)  
   https://github.com/earendil-works/pi/pull/5370
   Automatically evicts the oldest full-resolution images when sessions hit a provider's hard request size limit, eliminating the infinite 413 error loop for screenshot-heavy web browsing and OS debugging workflows.
3. **[#5376] fix: Reload steeringMode and followUpMode on /reload** (Closed)  
   https://github.com/earendil-works/pi/pull/5376
   Removes the requirement for a full Pi restart to apply queue mode configuration changes edited in `settings.json`, cutting down iteration time for interactive users tuning agent behavior.
4. **[#5332] feat: Add workspace approval system** (Open)  
   https://github.com/earendil-works/pi/pull/5332
   Introduces major security hardening: users are prompted to confirm before loading untrusted extensions from new workspaces, alongside a new global `~/.pi.user` directory for cross-workspace extensions that do not require per-project approval.
5. **[#5348] feat: Add selective pi-ai base entrypoints** (Open)  
   https://github.com/earendil-works/pi/pull/5348
   Adds side-effect-free lightweight entrypoints for the `pi-ai` and `pi-agent-core` packages, enabling drastically smaller bundle sizes for downstream projects that embed Pi as a library without using all default transports.
6. **[#5333] feat: Add ZAI Coding Plan China provider** (Closed)  
   https://github.com/earendil-works/pi/pull/5333
   Adds native support for the domestic Chinese ZAI coding PaaS endpoint, enabling low-latency access for Pi users in mainland China.
7. **[#5178] feat: Add custom-header support to Bedrock provider** (Closed)  
   https://github.com/earendil-works/pi/pull/5178
   Fills a longstanding feature gap to make custom request headers work across all 6 official Pi providers, required for enterprise users operating behind corporate proxy gateways that use custom auth header schemas.
8. **[#5345] fix: Move temporary extension cache** (Closed)  
   https://github.com/earendil-works/pi/pull/5345
   Relocates the temporary extension installation cache to the global user path at `~/.pi/agent`, eliminating permission errors on shared multi-user workspaces.
9. **[#5356] docs: Add containerization guide and Gondolin example** (Closed)  
   https://github.com/earendil-works/pi/pull/5356

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-04
*Source: github.com/QwenLM/qwen-code*

---

## 1. Today's Highlights
Today’s top updates include the official stable v0.17.1 release of Qwen Code, which ships a high-priority fix for the widespread false "compressed turn" rewind error that incorrectly triggered for conversations containing mid-turn inline messages. Core engineering teams have merged the first phase implementation of the long-requested Dynamic Workflows (Ultracode) port from Claude Code, bringing secure sandboxed user-defined workflow execution to the code assistant. Multiple high-impact bug fixes for daemon mode, OpenAI-compatible local model setups, and TUI IME input are now finalized or ready for final community validation.

---

## 2. Releases
Three new builds have been published in the last 24 hours:
1. **Stable v0.17.1**: [Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1) – The first stable 0.17 patch, landing the critical fix for the false compressed turn rewind error.
2. **v0.17.0-preview.0**: [Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-preview.0) – Pre-release build for community validation of new 0.17 features ahead of full stable launch.
3. **Nightly v0.17.0-nightly.20260603.68408c30c**: [Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260603.68408c30c) – Cutting-edge nightly build containing all recent merged fixes for daemon mode, TUI UX, and model provider handling.

---

## 3. Hot Issues
Top 10 high-impact, high-engagement community issues:
1. **#3384 Unable to add OpenAI-compatible local LLM**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/3384) – The top-commented active issue (12 interactions) affecting users running VLLM-hosted Qwen 3.6 and other local models, who cannot correctly configure custom endpoints via the documented settings.json workflow.
2. **#4722 Statusline shows model id instead of name; model id blocks multi-key setups**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/4722) – P2 priority UX bug that breaks model switching for multi-provider configurations, marked with a `welcome-pr` tag for community contributions.
3. **#4747 Support global user-level auto-memory at ~/.qwen/memories/ (cross-project)**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/4747) – Popular feature request that aligns Qwen Code's memory system with Claude's user-level persistent memory, eliminating redundant re-learning of user preferences across new projects.
4. **#4729 Runtime snapshot prefix leaks into settings.model.name causing 404 errors**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/4729) – High-severity bug that recursively adds `$runtime|<authType>|` prefixes to stored model IDs on every restart, eventually leading to non-existent model 404 failures for OpenAI-compatible provider users.
5. **#4218 MCP Server "filesystem" shows connected but tools unavailable on Windows**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/4218) – Critical MCP integration bug blocking Windows users from accessing core local filesystem tooling for code editing workflows.
6. **#4711 API Body Timeout Error for slow self-hosted models**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/4711) – Performance bug where users running slower local open-source models hit a hard 5-minute timeout before generation completes, with no user-facing config to adjust the threshold.
7. **#4721 Port Dynamic Workflows / Ultracode from Claude Code 2.1.160**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/4721) – Highly requested roadmap feature to add a third multi-agent execution tier for custom user-defined automated workflows.
8. **#4740 TUI context loss / amnesia after model interrupt**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/4740) – Common UX pain point for users running third-party local models (DeepSeek 4, Meituan Longmao) where partial context is lost after unexpected generation interrupts.
9. **#3456 CJK IME composition text appears at wrong position on TUI**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/3456) – Long-standing accessibility bug for Chinese, Japanese, and Korean terminal users that was recently resolved after a pending fix landed.
10. **#4672 Auto-YOLO mode file sync delay**: [Issue Link](https://github.com/QwenLM/qwen-code/issues/4672) – Productivity breaking bug where confirmed edits do not sync to local disk immediately, requiring a second user prompt to persist changes and breaking end-to-end automation flows.

---

## 4. Key PR Progress
Top 10 high-impact merged/upcoming pull requests:
1. **#4732 feat(core): Workflow tool P1 — minimal node:vm sandbox + sequential agent()**: [PR Link](https://github.com/QwenLM/qwen-code/pull/4732) – First phase implementation of the Dynamic Workflows / Ultracode feature, adding a secure sandbox for running user-authored custom workflow scripts with native agent call support.
2. **#4734 fix: strip runtime snapshot prefix before persisting model.name**: [PR Link](https://github.com/QwenLM/qwen-code/pull/4734) – Full fix for the high-severity #4729 runtime model name corruption bug, preventing recursive prefix stacking that causes 404 model errors.
3. **#4689 fix(daemon): isolate parallel subAgent text streams in transcript reducer**: [PR Link](https://github.com/QwenLM/qwen-code/pull/4689) – Resolves the widely reported daemon mode subagent text interleaving bug, stopping garbled output when running parallel multi-agent review tasks.
4. **#4652 feat(input): move physical cursor to visual cursor for IME input**: [PR Link](https://github.com/QwenLM/qwen-code/pull/4652) – Full fix for the long-running #3456 CJK IME position bug, ensuring IME candidate popups appear exactly at the user's input cursor on terminal TUI.
5. **#4629 feat(cli): add standalone auto-update support**: [PR Link](https://github.com/QwenLM/qwen-code/pull/4629) – Adds native self-update functionality for non-npm standalone installations, enabling one-click version upgrades without manual download and extraction.
6.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-06-04
---
## 1. Today's Highlights
The most significant update today is the official project rebrand from DeepSeek TUI to CodeWhale, with two new v0.8.x releases shipping backward-compatibility shims for legacy binary names that are scheduled for full removal in the upcoming v0.9.0 milestone. Maintainers closed 4 critical multi-provider configuration and auth bugs uncovered during Arcee and Xiaomi MiMo provider testing, and published a full ordered roadmap for v0.9.0 that adds native first-class Hugging Face support, the new WhaleFlow multi-agent workflow runtime, and terminal-native Model Lab features. All active workstreams now have explicit MVP cutlines and dependency lanes to eliminate unplanned scope creep for both human and autonomous AI contributors.

## 2. Releases
Two new v0.8.x releases shipped in the last 24 hours:
- **v0.8.51**: Adds Arcee provider integration, fixes cyclic state bugs, improves trace compaction logic, and merges backlogged community PR harvest contributions
- **v0.8.52**: Official rebrand release. Legacy `deepseek` and `deepseek-tui` binaries remain as deprecation-only shims that print a one-line warning and forward to the new `codewhale` / `codewhale-tui` binaries. Legacy shims will be removed completely in v0.9.0.

## 3. Hot Issues (Top 10)
All items are from the official [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) repo:
1. [#2663 (CLOSED)](https://github.com/Hmbown/CodeWhale/issues/2663): Fixed a high-severity bug that split provider/model/base URL state across session settings and persisted config, which produced invalid mixed-provider requests when users switched between Arcee and Xiaomi MiMo. Blocks all multi-provider 1.0 usability.
2. [#2667 (OPEN)](https://github.com/Hmbown/CodeWhale/issues/2667): Epic defining the v0.9.0 WhaleFlow branch/leaf workflow runtime, the project's core new orchestration feature that supports background workflow pods, bounded agent fanout, and deterministic trace replay.
3. [#2705 (OPEN)](https://github.com/Hmbown/CodeWhale/issues/2705): Top-priority v0.9.0 epic to make Hugging Face a first-class native surface, not just another generic OpenAI-compatible base URL, to massively improve UX for open-weight model developers.
4. [#2720 (OPEN)](https://github.com/Hmbown/CodeWhale/issues/2720): v0.9.0 milestone execution map with ordered dependency lanes, preventing contributors and autonomous AI agents from jumping to complex high-level features before completing stabilization, provider, and release-readiness prerequisites.
5. [#2695 (OPEN)](https://github.com/Hmbown/CodeWhale/issues/2695): Agentic Harness Creator epic that auto-evolves model-specific harness profiles from session trace evidence, eliminating universal one-size-fits-all harnesses that fail on specialized new model families.
6. [#2660 (CLOSED)](https://github.com/Hmbown/CodeWhale/issues/2660): Fixed ambiguous `/logout` command behavior in multi-provider setups, stopping users from accidentally clearing all stored API credentials when they only intended to reset a single provider's key.
7. [#2729 (OPEN)](https://github.com/Hmbown/CodeWhale/issues/2729): v0.9.0 release acceptance matrix defining explicit pre-tagging checks covering core stability, provider routing, UI, Model Lab, WhaleFlow, docs, and packaging to avoid shipping regressions in the large major release.
8. [#2725 (OPEN)](https://github.com/Hmbown/CodeWhale/issues/2725): Phase 1 file decomposition work that splits overgrown 5k+ line Rust source files to reduce edit risk for both human contributors and autonomous agents modifying core runtime surfaces.
9. [#2707 (OPEN)](https://github.com/Hmbown/CodeWhale/issues/2707): Hugging Face Hub browser and model passport metadata feature that adds a terminal-native interface to discover models, datasets, and Spaces without requiring users to manually paste repo IDs.
10. [#2724 (OPEN)](https://github.com/Hmbown/CodeWhale/issues/2724): Remote workbench MVP that adds AWS Lightsail deployment and Telegram bridge support, enabling users to run CodeWhale as an always-on service with mobile phone control.

## 4. Key PR Progress (Top 10)
1. [#2718 (CLOSED, author xyuai)](https://github.com/Hmbown/CodeWhale/pull/2718): Fixes #2663 by persisting `/provider` switches back to `config.toml` to keep in-memory and persisted provider state fully synchronized, with a regression test covering the Arcee/MiMo split state path.
2. [#2558 (CLOSED, author RefuseOdd)](https://github.com/Hmbown/CodeWhale/pull/2558): Adds a configurable `path_suffix` field to OpenAI-compatible provider configs, supporting third-party services that do not follow the standard `/v1/chat/completions` API path convention.
3. [#2717 (CLOSED, author xyuai)](https://github.com/Hmbown/CodeWhale/pull/2717): Adds an inline `r` shortcut in the provider picker for one-tap API key editing, making key replacement discoverable without forcing users to navigate away from the provider selection flow.
4. [#2684 (CLOSED, author Hmbown)](https://github.com/Hmbown/CodeWhale/pull/2684): v0.8.53 stabilization PR that cleans up subagent role vocabulary, lifecycle signals, and eval ergonomics to eliminate schema confusion for models using multi-agent orchestration.
5. [#2688 (CLOSED, author Hmbown)](https://github.com/Hmbown/CodeWhale/pull/2688): Deprecates the old ambiguous `WHALE.md` file, replacing it with a formal `.codewhale/constitution.json` authority layer for project-level agent rules to eliminate overlapping configuration artifacts.
6. [#2482 (OPEN, author AdityaVG13)](https://github.com/Hmbown/CodeWhale/pull/2482): Introduces the new `whaleflow` crate, a declarative JSON-config-driven multi-agent swarm orchestration runtime with topological scheduling, semaphore-based concurrency control, and trace persistence.
7. [#2627 (OPEN, author xyuai)](https://github.com/Hmbown/CodeWhale/pull/2627): Adds official Xiaomi MiMo Token Plan mode support, with dedicated environment variable aliases for regional token plan endpoints across global clusters.
8. [#2525 (CLOSED, author cyq1017)](https://github.com/Hmbown/CodeWhale/pull/2525): Adds a shared `ModelFamily` classification primitive to the `codewhale-agent` crate, enabling consistent model behavior affordances across TUI, desktop, and public API surfaces.
9. [#2687 (OPEN, author LeoAlex0)](https://github.com/Hmbown/CodeWhale/pull/2687): Refactors the system prompt to be fully mode-agnostic, delivering mode and approval rules via append-only system messages to reduce prompt bloat and improve cache efficiency.
10. [#2708 (OPEN, author jrcjrcc)](https://github.com/Hmbown/CodeWhale/pull/2708): Fixes a high-frequency Windows TUI bug where sub-agent completion events incorrectly halved the terminal render width after resuming from a paused state.

## 5. Feature Request Trends
1. **Native open model ecosystem integration**: The top community priority is deep Hugging Face Hub first-class support, including built-in search, model metadata previews, Spaces/Jobs workflow integration, and MCP tooling to eliminate manual config work for open-weight model users.
2. **Deterministic multi-agent orchestration**: Contributors are heavily aligned on building out the WhaleFlow runtime for background workflow execution, bounded agent fanout, trace replay, and per-agent cost tracking for swarm tasks.
3. **Autonomous contributor experience improvements

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*