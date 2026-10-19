# AI CLI Tools Weekly Digest 2026-10-19

> Generated: 2026-10-19 01:00 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem (2026-10-19)
---

## 1. Ecosystem Overview
The AI CLI developer tools ecosystem is in a phase of rapid maturity, with competing products converging on core agentic coding workflows while differentiating through platform support, model flexibility, and enterprise readiness. Across all major tools this week, development prioritized three universal themes: agent reliability (hangs, subagent correctness, permission safety), context/memory management (compaction controls, cross-session state, persistent memory), and platform parity (Windows stability, Linux TUI polish, remote/SSH support). The ecosystem is also seeing growing demand for open interoperability standards (MCP, ACP), multi-agent orchestration, and model provider flexibility, signaling a shift from single-vendor lock-in to composable, pluggable AI coding workflows. Open-source and community-driven tools are gaining traction via extensible plugin systems and third-party ecosystem integration, while incumbent vendors are racing to close gaps in enterprise administration, security guardrails, and usage transparency.

## 2. Activity Comparison
| Tool | Hot Issues (Tracked) | PR Activity (Tracked) | Discussions (Tracked) | Release Status (Last 7 Days) |
|------|----------------------|-----------------------|------------------------|-------------------------------|
| Claude Code | 10 open (enhancements + bugs) | 10 active PRs (core + plugin fixes) | N/A (no Discussions data provided) | 5 incremental releases (v2.1.299 → v2.1.303), all stable |
| OpenAI Codex | 10 open (bugs + feature requests) | 10 active PRs (9 closed, 1 open) | 14 active threads (Ideas, Q&A, Show and tell) | 1 stable release (rust-v0.163.0), 3 alpha builds (v0.164.0-alpha.1/2/3) |
| Gemini CLI | 10 open (P1 bugs + enhancements) | 10 active PRs (core fixes + UX) | N/A (no Discussions data provided) | 1 stable (v0.64.0), 1 preview (v0.65.0-preview.0), 5 nightly builds |
| GitHub Copilot CLI | 10 issues (6 open, 4 closed) | 1 open PR (maintenance only) | N/A (no Discussions data provided) | 10 incremental releases (v1.0.98 → v1.0.100-1), stable/patch |
| OpenCode | 10 issues (7 open, 3 closed) | 10 active PRs (features + bug fixes) | N/A (no Discussions data provided) | 3 stable 1.x line releases (v1.19.1 → v1.19.3) |
| Pi | 10 issues (6 open, 4 closed) | 12 active PRs (features + fixes) | 8 active threads (Ideas, Q&A, Show and tell) | 2 minor stable releases (v1.2.0, v1.3.0) |
| Qwen Code | 10 open (roadmap + bugs + features) | 10 active PRs (core + CI + managed agent) | N/A (no Discussions data provided) | 1 stable (v0.25.2 CLI/Desktop/TS SDK), 3 preview/nightly builds |

## 3. Shared Feature Directions
Requirements appearing across 3+ tool communities this cycle:
1. **Configurable context & compaction controls** (Claude Code, OpenAI Codex, Pi, Qwen Code): Users demand adjustable or disable-able auto-compaction thresholds, visibility into context usage, and server-side compaction support to reduce token waste and preserve long session state.
2. **Subagent & multi-agent orchestration improvements** (Claude Code, Gemini CLI, GitHub Copilot CLI, Qwen Code): Consistent requests for better subagent reliability, parallel execution, permission inheritance, reduced handoff latency, and shared memory between parent/child agents.
3. **Session lifecycle management** (Claude Code, OpenAI Codex, Gemini CLI, Qwen Code): Universal demand for session archiving/unarchiving, bulk deletion, persistent state across restarts, and auto-cleanup of idle/completed sessions.
4. **MCP (Model Context Protocol) interoperability** (Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi): All major tools are investing in MCP support, with shared pain points around authentication, server hang handling, cross-environment MCP routing, and RPC-based MCP orchestration.
5. **Terminal & platform UX polish** (all tools): Recurring requests for better TUI theming, reduced streaming flicker, improved keyboard navigation, clipboard support across WSL2/SSH/remote environments, and consistent Windows/Linux/macOS feature parity.
6. **Usage & quota transparency** (Claude Code, OpenAI Codex, Gemini CLI, OpenCode): Users want clearer visibility into token consumption, quota limits, and usage breakdowns by feature (subagents, cache, tools), plus better error handling for quota exhaustion.

## 4. Differentiation Analysis
| Tool | Core Focus | Target User | Technical Approach |
|------|------------|-------------|--------------------|
| Claude Code | Enterprise team workflows, Cowork project context, observability | Enterprise development teams, power users of Anthropic models | Tight integration with Anthropic’s model ecosystem, first-class MCP and OpenTelemetry support, plugin-based extensibility with security guardrails |
| OpenAI Codex | Computer Use/browser control, real-time response steering, community-driven extensibility | Generalist developers, power users of OpenAI models, tinkerers | Rust-based core for performance, deep integration with OpenAI’s latest model features, thriving third-party tool/agent ecosystem |
| Gemini CLI | Agent reliability, AST-aware code intelligence, Google ecosystem integration | Google Cloud users, developers focused on codebase investigation | Native integration with Gemini models, investment in agent correctness and code intelligence tooling, incremental nightly release cadence |
| GitHub Copilot CLI | GitHub ecosystem integration, enterprise policy management, sandboxed execution | Enterprise GitHub users, teams standardized on GitHub workflows | Deep GitHub platform integration (Skills, repo trust, admin policy), HydraFusion model routing, sandboxed shell execution |
| OpenCode | Open model flexibility, v2 TUI/permission hardening, browser automation | Open-source enthusiasts, users of free/self-hosted models | Community-driven open development, dual 1.x/2.x release tracks, MCP-based browser extension, experimental auto-model routing |
| Pi | Multi-provider support, durable agent execution, plugin/extensibility | Power users, self-hosted deployments, extension developers | Modular architecture (pi-ai, pi-durable, coding-agent), first-class OpenRouter support, durable execution primitives for long-running agents |
| Qwen Code | Managed-agent platform maturity, enterprise tenant isolation, SDK ecosystem | Enterprise teams building on Qwen models, self-hosted deployments | Staged managed-agent dual-path architecture, multi-language SDKs, fault-gate reliability testing for automation workflows |

## 5. Community Momentum & Maturity
- **Highest community activity**: OpenAI Codex and Pi lead in community engagement, with active Discussions channels showcasing third-party tools, feature ideas, and Q&A. Pi also has the highest PR-to-issue ratio, indicating rapid iteration and strong contributor momentum.
- **Fastest iteration cadence**: GitHub Copilot CLI shipped 10 releases in 7 days, though PR activity is minimal (1 maintenance PR this cycle), suggesting a closed core development model with frequent patch releases. Gemini CLI and Qwen Code also have fast release cadences with stable/preview/nightly channels.
- **Most mature enterprise readiness**: Claude Code and GitHub Copilot CLI lead in enterprise-focused features (org-level sharing, admin policy, security telemetry, sandboxing), with Qwen Code rapidly closing gaps via tenant isolation and managed-agent reliability work.
- **Rising open-source contenders**: Pi and OpenCode show strong community growth, with Pi differentiating on durable execution and multi-provider support, and OpenCode building an open ecosystem around v2 TUI and MCP browser automation.

## 6. Trend Signals
Key industry trends with actionable reference value for developers and decision-makers:
1. **Agent reliability is the new battleground**: Across every tool, subagent hangs, incorrect status reporting, and permission failures are top user complaints. The next phase of competition will shift from feature count to agent correctness, fault tolerance, and transparent execution tracking.
2. **Open model flexibility is becoming table stakes**: Demand for BYOK, local model support, and multi-provider switching (seen in Copilot CLI #3709, Pi’s OpenRouter integration, OpenCode’s auto-routing) signals growing user resistance to vendor lock-in. Tools with open provider ecosystems will gain share among enterprise and power users.
3. **Durable, long-running agents are emerging as a core primitive**: Pi’s durable execution work, Qwen Code’s managed-agent architecture, and community demand for pause/resume/human-in-the-loop workflows indicate a shift from short interactive sessions to persistent, background AI agents that handle multi-step, multi-hour tasks.
4. **Interoperability standards (MCP, ACP) are unifying the ecosystem**: MCP support is now a baseline requirement for all major AI CLI tools, with investment shifting from basic compliance to advanced features like RPC orchestration, browser control over MCP, and cross-tool session handoffs.
5. **Platform parity gaps remain a major adoption barrier**: Windows stability, Linux TUI polish, and remote/SSH feature consistency are consistent pain points across all tools. Teams evaluating AI CLI tools should prioritize platform-specific testing for their developer environment, as no tool has fully closed cross-platform gaps.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-10-19 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking
Ranking is based on community attention signals (PR recency, update frequency, and alignment with high-discussion issue themes; comment counts are marked `undefined` in the source dataset):

1. **[mcp-builder (MCP 2.0 compatibility fix)](https://github.com/anthropics/skills/pull/1742)**
   - Functionality: Fixes import paths and custom header configuration for the MCP Builder skill to support `mcp>=2.0.0`, aligning with the renamed `streamable_http_client` and new `create_mcp_http_client` API.
   - Discussion highlights: Addresses a widely reported breaking change for MCP tool developers, with follow-up fixes for edge cases in connection scripts.
   - Status: Open (updated 2026-10-08)

2. **[skill-creator (trigger eval isolation & cross-platform fix)](https://github.com/anthropics/skills/pull/1298)**
   - Functionality: Fixes false negative trigger evaluation scores, resolves Windows subprocess `select()` failures, and prevents unrelated tools from interrupting skill trigger scans.
   - Discussion highlights: Ties to multiple open issues about broken skill evaluation pipelines and Windows compatibility, a top pain point for skill authors.
   - Status: Open (updated 2026-09-16)

3. **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)**
   - Functionality: Transforms product/technical specs in Notion into structured, implementable tasks with acceptance criteria and progress tracking for Claude Code execution.
   - Discussion highlights: One of the most popular new workflow skill proposals, with iterative updates to refine spec parsing granularity.
   - Status: Open (updated 2026-10-15)

4. **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)**
   - Functionality: Web3-focused agent skill that performs static analysis of Solidity/Rust smart contracts and anchors audit proofs to the TON Blockchain via zero-storage Merkle protocol.
   - Discussion highlights: Standout niche domain skill, representing growing demand for specialized security and blockchain tooling.
   - Status: Open (updated 2026-09-16)

5. **[skill-creator eval viewer hardening](https://github.com/anthropics/skills/pull/1961)**
   - Functionality: Patches security vulnerabilities in the skill-creator eval viewer, including script breakout, DNS rebinding, cross-site POST, and HTML escaping flaws.
   - Discussion highlights: Directly addresses community concerns about skill-related security risks (see Issue #492) and untrusted model output handling.
   - Status: Open (updated 2026-10-11)

6. **[md2video-audio](https://github.com/anthropics/skills/pull/1703)**
   - Functionality: Zero-cost skill that converts Markdown documents into professional MP4 videos with human-like voiceovers, via Marp slide generation and audio synthesis.
   - Discussion highlights: High-demand creative/content generation skill, filling a gap in multimodal output capabilities.
   - Status: Open (updated 2026-09-15)

7. **[document-typography](https://github.com/anthropics/skills/pull/514)**
   - Functionality: Quality control skill for AI-generated documents, fixing orphan words, widow paragraphs, and numbering misalignment.
   - Discussion highlights: Long-standing popular proposal addressing a pervasive, under-requested pain point in Claude’s document output.
   - Status: Open (updated 2026-03-13)

---

## 2. Community Demand Trends
Distilled from top-commented issues, the most anticipated skill directions are:
1. **Security & Trust**: Clear demand for skill security auditing tools, trust boundary enforcement, and safe skill distribution (driven by [Issue #492: namespace trust abuse](https://github.com/anthropics/skills/issues/492), [Issue #1394: eval viewer XSS](https://github.com/anthropics/skills/issues/1394)).
2. **Enterprise Collaboration**: Org-wide skill sharing, team skill libraries, and access management to streamline internal skill deployment (driven by [Issue #228: org-wide skill sharing](https://github.com/anthropics/skills/issues/228)).
3. **Authoring & Evaluation Tooling**: Robust, cross-platform skill creation, testing, and benchmarking pipelines that work reliably on Windows and produce accurate trigger/performance scores (driven by [Issue #556: 0% trigger rate in evals](https://github.com/anthropics/skills/issues/556), [Issue #1383: silent benchmark failures](https://github.com/anthropics/skills/issues/1383)).
4. **Agent Governance & Quality Control**: Formal reasoning gates, adversarial review, and compliance patterns for agent-driven workflows (driven by [Issue #412: agent-governance proposal](https://github.com/anthropics/skills/issues/412), [Issue #1385: reasoning quality gate pipeline](https://github.com/anthropics/skills/issues/1385)).
5. **Document Tooling Reliability**: Bug fixes and expanded format support for document skills (DOCX, PDF, ODT) to handle edge cases like invalid XML generation and format compatibility (driven by [Issue #2018: docx merge_runs XML bug](https://github.com/anthropics/skills/issues/2018), [Issue #486: ODT skill proposal](https://github.com/anthropics/skills/issues/486)).

---

## 3. High-Potential Pending Skills
These actively maintained PRs are likely to land soon based on recent updates and alignment with core ecosystem priorities:
1. **[architecture-advisor](https://github.com/anthropics/skills/pull/2040)** – Pattern selection with written justification for software architecture decisions, part of the harness SDD suite (created 2026-10-16, actively updated).
2. **[harness SDD suite](https://github.com/anthropics/skills/pull/2039)** – Three process skills for spec-driven development, dispatch discipline, and adversarial review, battle-tested on real projects (created 2026-10-16, actively updated).
3. **[docx orphaned comment detection](https://github.com/anthropics/skills/pull/1734)** – Document quality tool that identifies orphaned comments in DOCX files, filling a gap in existing document skill capabilities (open, recently updated).
4. **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** – HPC cluster operation skill with profile-based SSH and Slurm workflow support, targeting high-performance computing users (open, complete scope).
5. **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** – Meta-skills for evaluating skill quality (structure, documentation, usability) and security, directly addressing top community trust concerns (long-standing open PR, high relevance).

---

## 4. Skills Ecosystem Insight
The community’s most concentrated demand is for **trustworthy, production-grade skill tooling and governance**—ranging from secure skill authoring/evaluation pipelines and clear official/community skill trust boundaries to formal quality and security review frameworks that enable safe, scalable skill adoption for teams.

---

# Claude Code Community Digest | 2026-10-19
*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

---

## 1. Last 7 Days' Highlights
This week delivered 5 incremental Claude Code releases (v2.1.299 → v2.1.303) focused on reliability, observability, and configurable runtime behavior—most notably idle conversation compaction, granular auto mode model control, and expanded OpenTelemetry tracing. Community attention concentrated on authentication bugs, session management gaps, and unexpected token usage from subagent workflows, with strong demand for better control over Cowork project context and session archiving.

---

## 2. Releases
5 versions shipped in the last 7 days, with the following cumulative changes:
- **v2.1.303**: General bug fixes and reliability improvements.
- **v2.1.302**: Added `CLAUDE_CODE_AUTO_MODE_MODEL` to select the model for client-side auto mode classification (no impact on server-side auto mode); added an *Idle compaction* toggle in `/config`.
- **v2.1.301**: Added `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS` to cap wait times for usage limit resets in unattended retry mode; added OpenTelemetry tracing guidance to the `claude-api` skill.
- **v2.1.300**: Added `virtualText` for mod prompt decorations (in-prompt text that never enters drafts or submissions); split cache write metrics into `cache_creation_5m_tokens` and `cache_creation_1h_tokens` in OpenTelemetry `api_request` events.
- **v2.1.299**: Added `CLAUDE_CODE_DISABLE_FILE_MENTIONS` (passes `@`-mentioned file paths only, not contents, to Claude); introduced terminal idle compaction for 200K+ token conversations left idle ~54 minutes.

---

## 3. Hot Issues
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| 1 | [#40043 Allow removal of local folders from a Cowork project's context](https://github.com/anthropics/claude-code/issues/40043) | Users cannot exclude unwanted local folders from Cowork context, leading to noise and token waste. | 104 👍, 33 comments — the most-upvoted open enhancement this week, active since March 2026. |
| 2 | [#98134 Active Apple Max 20x subscription still recognized as Pro](https://github.com/anthropics/claude-code/issues/98134) | macOS App Store subscribers with Max 20x plans are locked out of higher-tier features due to subscription tier misdetection. | 22 comments, active investigation — blocks paid feature access for Mac users. |
| 3 | [#61172 `/clear` inherits previous session name instead of resetting it](https://github.com/anthropics/claude-code/issues/61172) | Running `/clear` preserves the old session name, causing duplicate entries in `/resume` and broken session management. | 27 👍, 16 comments, reproduced and confirmed — impacts core session hygiene. |
| 4 | [#67835 Session archive is one-way: no unarchive tool, no Archived view in desktop](https://github.com/anthropics/claude-code/issues/67835) | Archived sessions become effectively inaccessible: there is no MCP `unarchive_session` method and no desktop UI for archived sessions. | 12 👍, 12 comments — highlighted as a data loss / workflow gap. |
| 5 | [#78537 Feature request: org-level default sharing for published artifacts](https://github.com/anthropics/claude-code/issues/78537) | Teams want default organization-wide sharing for published skills/routines instead of per-artifact manual sharing. | 27 👍, 10 comments — strong enterprise/team workflow demand. |
| 6 | [#88583 claudeAiOauth wiped from Keychain when concurrent Desktop sessions race refresh tokens](https://github.com/anthropics/claude-code/issues/88583) | A race condition in concurrent desktop sessions can blank OAuth tokens in the macOS Keychain, forcing re-login. Related prior fixes only covered MCP credentials. | 10 comments, 4 👍 — high-impact auth regression with confirmed root cause. |
| 7 | [#73837 Markdown inline code (codespans) ignore custom theme overrides on Linux TUI](https://github.com/anthropics/claude-code/issues/73837) | Inline code in markdown output uses a fixed base palette color, bypassing custom theme `overrides` — breaks accessibility and personalization. | 15 👍, 9 comments — long-standing TUI theming inconsistency. |
| 8 | [#103309 Max 20x: subagents waiting on long Bash commands lose 5-min prompt cache, burn 54% of weekly limit in <24h](https://github.com/anthropics/claude-code/issues/103309) | Subagents re-write full context after long-running Bash commands because the 5-minute prompt cache expires, causing invisible, extreme token overuse. | 1 comment but severe cost/transparency impact — surfaced as a critical regression for power users. |
| 9 | [#97729 Desktop: in-app Browser in SSH remote sessions](https://github.com/anthropics/claude-code/issues/97729) | Users want the in-app browser to work when connected to remote SSH sessions, not just local environments. | 8 👍, 5 comments — growing demand for remote-first desktop parity. |
| 10 | [#103308 memory: project subagent spawn creates empty `.claude/agent-memory/<agent>/` under parent session cwd](https://github.com/anthropics/claude-code/issues/103308) | Subagent memory initialization creates orphaned directories in the parent's working directory instead of the correct worktree location. | 1 comment, but points to a broader subagent isolation/state management bug class. |

---

## 4. Key PR Progress
| # | PR | Description |
|---|----|-------------|
| 1 | [#94847 diff: the first edit opens the pane only when it has a file to list](https://github.com/anthropics/claude-code/pull/94847) | Fixes the diff pane opening empty (e.g. for writes to ignored files or outside the repo) by delaying pane open until a tracked file change is confirmed. |
| 2 | [#89404 validate-agent.sh: don't abort at the first warning and stop false-flagging valid agents](https://github.com/anthropics/claude-code/pull/89404) | Fixes `set -euo pipefail` issues in the plugin-dev validator that caused premature aborts and false positives; resolves issue #83803. |
| 3 | [#97293 mods: declarations carry `process.run` truncation flags and list entries' `mtimeMs`](https://github.com/anthropics/claude-code/pull/97293) | Adds type declarations for `isStdoutTruncated`/`isStderrTruncated` on `$.process.run` results and `mtimeMs` on `$.fs.list` entries, with test fakes updated. |
| 4 | [#66416 fix(plugin-dev): validator scripts abort on first finding due to `set -e`](https://github.com/anthropics/claude-code/pull/66416) | Addresses the same validator abort issue as #89404 across three plugin-dev scripts (`validate-agent.sh`, `hook-linter.sh`, `validate-hook-schema.sh`). |
| 5 | [#27140 Add memory-bridge plugin for session context consolidation](https://github.com/anthropics/claude-code/pull/27140) | Introduces a `memory-bridge` plugin with a `/bridge` command to consolidate learnings into persistent memory (MEMORY.md, CLAUDE.md, skills), plus an advisory Stop hook near auto-compaction thresholds. |
| 6 | [#97688 sec-default: collector records continue past the user tier](https://github.com/anthropics/claude-code/pull/97688) | Prevents user-level plugins from dropping or rewriting security collector telemetry records in organizations with `sec-default` enabled, preserving audit integrity. |
| 7 | [#57888 Scope `child_process_exec` to JS/TS files (fix Python false-positive)](https://github.com/anthropics/claude-code/pull/57888) | Fixes a security reminder hook false positive where Python `asyncio.create_subprocess_exec(` matched the `exec(` rule intended for Node.js `child_process.exec()`. |
| 8 | [#95698 fix(plugins): run ralph-wiggum and output-style .sh hooks through bash with a quoted path](https://github.com/anthropics/claude-code/pull/95698) | Fixes hook execution failures for three bundled plugins by invoking their `.sh` hooks via `bash` with a properly quoted path (refs #95673, #78490). |
| 9 | [#98374 diff: the pane reads the diff again after a rebase that finished](https://github.com/anthropics/claude-code/pull/98374) | Ensures the diff pane refreshes correctly after a rebase completes instead of staying stuck on "Diff unavailable". |
| 10 | [#95423 diff: a shell command the tool held read-only fetches nothing](https://github.com/anthropics/claude-code/pull/95423) | Skips diff refetches after read-only shell commands (e.g. `ls`, `grep`, `cat`), matching the built-in panel's behavior and reducing unnecessary work. |

---

## 5. Hot Discussions
No GitHub Discussions data was provided for this period.

---

## 6. Feature Request Trends
From this week's issue activity, three clear feature directions emerge:
1. **Better context control & memory management**: Top requests include removing local folders from Cowork context (#40043), native multi-context visibility (#18027), and persistent memory bridging across sessions (#27140).
2. **Full session lifecycle management**: Users want bidirectional archiving with an archived sessions view (#67835), fixed session naming after `/clear` (#61172), and richer sidebar organization with subgroups and unread indicators (#102108).
3. **Remote & cross-device workflow expansion**: Demand is growing for in-app browsers in SSH remote sessions (#97729) and the ability to start desktop sessions from mobile via a device picker (#91815).
4. **Team/enterprise administration**: Org-level default sharing for published artifacts (#78537) and 1-hour prompt cache TTL support via the Claude apps gateway (#98793) are top enterprise asks.

---

## 7. Developer Pain Points
Recurring frustrations surfaced this week:
1. **Authentication instability across platforms**: macOS Keychain token races (#88583), Apple subscription tier misdetection (#98134), and GitHub Codespaces OAuth "Invalid code" errors (#91176) all cause forced re-logins and blocked access.
2. **Opaque and unexpected token usage**: Subagent workflows silently burn through usage limits due to prompt cache expiry on long commands (#103309), with no clear user visibility into cost drivers.
3. **Desktop/CLI feature parity gaps**: `immediate: true` plugin commands don't run immediately in desktop (#101863), prompt suggestions stopped working on macOS desktop (#103259), and Windows desktop remote control fails while CLI works (#103301).
4. **Plugin & agent tooling fragility**: Validator scripts abort on warnings (#89404, #66416), hooks fail on path edge cases (#95698), and subagent memory isolation leaks directories into parent workspaces (#103308).
5. **Theming and UX inconsistencies**: Inline markdown code ignores custom theme overrides in the Linux TUI (#73837), and the diff pane shows empty states or stale data in common scenarios (addressed by multiple PRs in flight).

---
*Digest generated 2026-10-19 from GitHub repository public data.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-10-19

---

## 1. Last 7 Days' Highlights
This week saw the stable release of **rust-v0.163.0** bringing a redesigned `/config` preferences hub and real-time mid-response steering, alongside three alpha builds for v0.164.0 signaling active iteration on the next version. Windows stability and Computer Use/browser control failures dominated community bug reports, while long-time feature requests for completion notifications and configurable context compaction continued to gain traction. The broader ecosystem also showcased a wave of community-built tools for task handoffs, session orchestration, and agent guardrails.

---

## 2. Releases
All releases are from the `openai/codex` Rust-based core:
- **[rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0)** (stable):
  - New `/config` interface for cross-category preference search, immediate setting changes, and visibility into which changes require a restart ([#52990](https://github.com/openai/codex/issues/52990), [#53429](https://github.com/openai/codex/issues/53429)).
  - Support for sending follow-up messages while Codex is responding to steer output mid-turn; interrupting a turn also stops active Code Mode cells.
- **[rust-v0.164.0-alpha.1 / alpha.2 / alpha.3](https://github.com/openai/codex/releases)** (prerelease): early v0.164 preview builds; detailed changelogs not yet published.
- Additional v0.163 alpha builds: `v0.163.0-alpha.8` through `alpha.11`, plus `alpha.10.1` and `alpha.10.2` (prerelease stabilization iterations).

---

## 3. Hot Issues
| Issue | Why It Matters | Community Reaction |
|-------|----------------|--------------------|
| [#25271 Computer Use cannot determine Chrome URL on Windows](https://github.com/openai/codex/issues/25271) | Breaks core Computer Use functionality on Windows — even baseline `chrome://newtab` URLs fail to parse. | 62 comments, 12 👍; highly active, first reported May 2026 and still unresolved. |
| [#3962 Play a sound when Codex finishes a prompt / task](https://github.com/openai/codex/issues/3962) | Top-voted feature request: users working across tabs/windows need an audible cue for long-running tasks. | 56 comments, 201 👍; one of the oldest and most popular open enhancement requests. |
| [#4106 Control over auto-compaction parameters](https://github.com/openai/codex/issues/4106) | Hardcoded ~220k token compaction thresholds disrupt long code-heavy sessions; Pro users want full control including an off switch. | 29 comments, 126 👍; strong demand from power users relying on persistent context. |
| [#52873 dot cannot read user-created Codex threads](https://github.com/openai/codex/issues/52873) | Core interoperability gap: `dot` CLI can discover local projects but fails to read native Codex threads with backend format/region errors. | 17 comments, 5 👍; active debugging ongoing. |
| [#40091 In-app browser Basic Auth dialog briefly appears then disappears](https://github.com/openai/codex/issues/40091) | macOS app cannot access HTTPS Basic Auth protected sites via the built-in browser, blocking many enterprise/internal workflows. | 11 comments, 2 👍. |
| [#25914 Document app-server client discovery of active Desktop thread](https://github.com/openai/codex/issues/25914) | Missing documentation for a foundational integration path: local tools have no supported way to attach to the currently open Codex Desktop session. | 10 comments, 2 👍; critical for extension and tooling developers. |
| [#45006 Codex Chrome Browser Control Failure](https://github.com/openai/codex/issues/45006) | macOS browser control fails for system-installed Chrome, limiting Computer Use capabilities on Apple Silicon. | 10 comments. |
| [#54841 Work mode blocks message submission in BYOK mode with local tools](https://github.com/openai/codex/issues/54847) | BYOK (Bring Your Own Key) users on Windows cannot use Work mode alongside local browser/computer tools — a significant regression for self-hosted/enterprise workflows. | 9 comments, 5 👍. |
| [#39839 Archived chats page has no delete option](https://github.com/openai/codex/issues/39839) | UX inconsistency: archived chats cannot be deleted from the archive view, conflicting with official help center documentation. | 6 comments, 9 👍; high user frustration relative to issue complexity. |
| [#50923 Windows concurrent turns end in workspace-routing timeouts + MCP stalls](https://github.com/openai/codex/issues/50923) | Windows desktop app repeatedly stalls during multi-chat concurrent work, affecting both MCP discovery and turn queue processing. | 6 comments; reproducible with clear observation data. |

---

## 4. Key PR Progress
All PRs below are from `openai/codex`:
1. **[#55149 Prune unused standalone releases after successful installation](https://github.com/openai/codex/pull/55149)** (closed): Cleans up older standalone releases post-install while retaining current/previous versions and releases used by running processes, reducing disk bloat.
2. **[#55144 Add observation-only model request lifecycle hooks](https://github.com/openai/codex/pull/55144)** (closed): Adds `PreModelRequest` / `PostModelRequest` hooks covering retries, with context for model, session, turn, subagent, and token usage — enables custom observability tooling.
3. **[#54961 Allow agent messages to wake idle root sessions behind a feature flag](https://github.com/openai/codex/pull/54961)** (closed): Enables worker agents that finish after their parent to wake idle sessions without requiring an outstanding durable sleep (disabled by default).
4. **[#54930 Add negotiated zstd compression to app-server WebSockets](https://github.com/openai/codex/pull/54930)** (closed): Adds zstd stream compression for TCP and Unix socket WebSockets, reducing bandwidth for large tool outputs and response streams.
5. **[#54754 Reduce memory overhead in tool JSON schemas](https://github.com/openai/codex/pull/54754)** (closed): Optimizes `JsonSchema` storage (strings/sequences in Arc, unused map capacity removed) to lower memory footprint for large tool catalogs.
6. **[#54742 Render slash command prefixes as composer prompt markers](https://github.com/openai/codex/pull/54742)** (closed): Moves the leading `/` of slash commands into a non-editable prompt marker, matching shell mode `!` behavior and preserving offset consistency across history.
7. **[#54741 Gate file-copy extension behind `multi_env_copy_file` feature flag](https://github.com/openai/codex/pull/54741)** (closed): Adds a disabled-by-default flag for the upcoming cross-environment file copy extension, signaling active development of multi-context file workflows.
8. **[#54761 Upgrade `zip` to 9.0.0 and update plugin archive extraction](https://github.com/openai/codex/pull/54761)** (closed): Upgrades the zip crate and ensures plugin archives preserve executable permissions while stripping setuid/setgid/sticky bits for security.
9. **[#54763 Stop applying macOS background priority to managed daemons](https://github.com/openai/codex/pull/54763)** (closed): Removes `taskpolicy -b` wrapping for managed app-server/updater processes on macOS, fixing performance throttling for background agent work.
10. **[#30866 fix(app-server): reconcile loaded thread history on resume](https://github.com/openai/codex/pull/30866)** (open): Reconciles idle loaded threads with their persisted rollout on `thread/resume`, serializing with rollback/history injection and preserving live overlays during active turns.

---

## 5. Hot Discussions
### Ideas
- **[#3962 (Issue) Completion sound notification](https://github.com/openai/codex/issues/3962)** — cross-referenced as the most requested UX improvement.
- **[#50754 Feature request: event delivery into an existing local Codex Desktop chat](https://github.com/openai/codex/discussions/50754)** — asks for a supported way for external apps to push async results back to an already-open Desktop conversation without polling (1 comment, 1 👍).
- **[#54124 Custom key binds in model selector](https://github.com/openai/codex/discussions/54124)** — requests keyboard shortcuts to switch models without navigating the selector (1 comment, 1 👍).
- **[#54390 Latest CLI version feels like a step backwards](https://github.com/openai/codex/discussions/54390)** — criticism that new session/thread features add unnecessary bloat for terminal users who already use tmux/zellij (2 comments, 1 👍).

### Q&A
- **[#2251 Codex Usage Limits](https://github.com/openai/codex/discussions/2251)** — ongoing question of whether Plus tier limits (3000 Thinking/week) are identical across ChatGPT app and Codex (59 comments, 57 👍).
- **[#8503 “usage limit reached” despite Code Review usage showing 100% remaining](https://github.com/openai/codex/discussions/8503)** — GitHub Code Review connector incorrectly reports limit exhaustion; active debugging (29 comments, 13 👍).
- **[#45938 PreToolUse can block/rewrite calls but cannot substitute tool results — deliberate boundary?](https://github.com/openai/codex/discussions/45938)** — exploration of hook API design limits for building custom "Experience" layers (5 comments, 1 👍).
- **[#52835 AI-assisted KPI management system: 4 months no working app — advice needed](https://github.com/openai/codex/discussions/52835)** — non-developer operations manager seeks practical guidance on building business apps with Codex (3 comments, 1 👍).

### Show and tell
- **[#49129 Codex CLI goes fullscreen](https://github.com/openai/codex/discussions/49129)** — official demo of the new fullscreen terminal UI with expandable diffs, pinned composer, and interactive copy (7 comments, 5 👍).
- **[#54335 agent-guard-checks: 4 MIT-licensed checks for coding-agent workflows](https://github.com/openai/codex/discussions/54335)** — lightweight Python CLIs for completion-claim reminders, irreversible command preflight, human correction handling, and existing material preflight (4 comments, 1 👍).
- **[#55086 KiraBridge + ThreadDesk: 7-tool voice-driven vibe coding stack](https://github.com/openai/codex/discussions/55086)** — community tooling for scoped task handoffs, budget limits, and cross-interruption project context (3 comments, 1 👍).
- **[#54976 ctx-kit: file-based task handoffs for Codex + Claude Code](https://github.com/openai/codex/discussions/54976)** — Markdown-based workflow to save task state in project files so another chat/agent can pick up work (2 comments, 1 👍).
- **[#54302 SWEGCA-VRS-FCC: Codex CLI fork replacing compaction with full-context assembly](https://github.com/openai/codex/discussions/54302)** — experimental Linux fork that eliminates compaction and uses `libvrs` to assemble model requests from raw session records (2 comments, 1 👍).
- **[#53200 Codex reset alert service (SMS/Telegram)](https://github.com/openai/codex/discussions/53200)** — community-built notification service for usage reset announcements, plus on-time percentage dashboards (1 comment, 2 👍).

---

## 6. Feature Request Trends
1. **Configurable context controls**: Strong demand for adjustable (or disable-able) auto-compaction thresholds, matching the 126-upvote #4106 and the experimental full-context CLI fork in #54302.
2. **Notification & awareness UX**: Audible/visual completion alerts (#3962, 201 👍) and cross-session status tracking tools remain a top user priority for long-running tasks.
3. **Interoperability & extensibility**:
   - Documented app-server APIs for attaching to active Desktop threads (#25914)
   - Event delivery into existing chats (#50754)
   - Expanded hook surfaces (e.g., tool result substitution in #45938)
4. **Multi-agent / cross-context workflows**: A booming ecosystem of handoff tools (ctx-kit, estafeta, Octuo) signals demand for native support for delegated tasks, cross-session state, and multi-agent orchestration.
5. **Customization**: Requests for custom keybinds (#54124), feature-flagged optional UI bloat (#54390), and BYOK mode feature parity (#54841).

---

## 7. Developer Pain Points
1. **Windows platform instability**: Recurring reports of process crashes (#55088 — 6 crashes in 20 hours), MCP/concurrency stalls (#50923), sandbox execution blocks (#51736), V8 OOM during dictation (#50236), and composer UI disappearances (#43274).
2. **Computer Use / browser control fragility**: Widespread failures across platforms: Windows Chrome URL detection (#25271), macOS Chrome control (#45006), macOS Computer Use service spawn failures (#52191), Windows CUA initialization exits (#54101), and Basic Auth dialog glitches (#40091).
3. **Usage limit inconsistency & opacity**: Confusion over whether ChatGPT Plus limits apply to Codex (#2251), false "limit reached" errors in Code Review (#8503), quota burn spikes from excessive auto-review calls (#49572), and unclear reset behavior (#55145).
4. **Dot / app-server interoperability gaps**: `dot` cannot read native Codex threads (#52873), cross-relay task follow-ups reject valid authorization (#50521), delegated task consent doesn't propagate properly (#51349, #51834), and cloud task creation fails intermittently (#52449).
5. **BYOK mode regressions**: Work mode + local tools combination is broken on Windows (#54841), blocking enterprise/self-hosted use cases.
6. **Session management UX flaws**: Project sessions cluttering global Recents (#44334), missing delete option in archived chats (#39839), and sync inconsistencies between mobile and desktop (#53489).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-10-19
*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

---

## 1. Last 7 Days' Highlights
The Gemini CLI project shipped the stable v0.64.0 release, a v0.65.0 preview build, and multiple nightly builds (up to v0.66.0-nightly.20261018) focused on UI stability, agent correctness, and workflow polish. Community attention remains heavily concentrated on agent reliability (hangs, incorrect status reporting, subagent limitations) and UX improvements for terminal interaction, quota handling, and settings persistence.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.64.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0) | Stable | Implemented A2A server V1→V2 settings migration; bridged `PromptResponse.usage` and added `usage_update` notifications for ACP |
| [v0.65.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0) | Preview | Enforced read-only workspace settings in untrusted folders; fixed duplicate tool response turns when resuming sessions |
| [v0.65.0-nightly.20261012 – v0.65.0-nightly.20261014](https://github.com/google-gemini/gemini-cli/releases) | Nightly | Fixed reverse search highlight index for expanding Unicode characters; treated whitespace-only UTF-16/UTF-32 files as empty; kept loading other extensions when one fails the allowlist check |
| [v0.66.0-nightly.20261016 – v0.66.0-nightly.20261018](https://github.com/google-gemini/gemini-cli/releases) | Nightly | Added banner noting Gemini CLI is not optimized for Gemini 4; cleaned up obsolete README content; UI synchronization fixes; CI cleanup for unsupported configurations |

---

## 3. Hot Issues (Top 10 by Impact & Community Engagement)
1. **[#22323: Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   Priority P1 bug: `codebase_investigator` returns `status: success` with `Termination Reason: GOAL` even when it hits the maximum turn limit before completing analysis, hiding interruptions from users. 13 comments, active as of 2026-10-19.

2. **[#21409: Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   Priority P1 bug with 8 👍 (highest engagement): The generalist agent hangs forever on simple tasks like folder creation; users report the only workaround is explicitly disabling subagent delegation. 8 comments.

3. **[#19873: Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   High-effort enhancement proposal: Leverage Gemini 3 models' native bash affinity by adding secure sandboxing for POSIX tool execution, balancing the model's preferred workflow with user safety. 9 comments.

4. **[#22745: Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   EPIC tracking investigations into AST-aware tooling to reduce token noise, cut turn counts from misaligned reads, and improve codebase navigation. 7 comments.

5. **[#21968: Gemini does not use skills and sub-agents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   User-reported behavioral gap: The model almost never invokes custom skills/sub-agents on its own, even for highly relevant tasks (e.g., gradle/git operations), requiring explicit user instruction. 7 comments.

6. **[#21983: Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   Priority P1 platform bug: The browser subagent crashes on Wayland Linux systems, blocking agent-based browser automation for a large user segment. 4 comments.

7. **[#22267: Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   Bug: The Browser Agent disregards global/project `settings.json` configs (e.g., `maxTurns`) despite the AgentRegistry correctly merging settings on initialization. 4 comments.

8. **[#24246: 400 error with > 128 tools available](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   Scalability bug: Gemini CLI returns a 400 error when more than 128 tools are enabled, requiring smarter tool scoping logic. 3 comments, marked needs-information.

9. **[#22672: Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   Safety feature request: The model occasionally uses destructive commands like `git reset --force` when safer alternatives exist; users want guardrails for high-risk operations. 3 comments, 1 👍.

10. **[#22465: CLI gets stuck at interactive prompts (e.g., Vite app creation)](https://github.com/google-gemini/gemini-cli/issues/22465)**  
    Workflow bug: The agent hangs when running tools with interactive prompts (e.g., `npm create vite`), failing to handle stdin prompts automatically. 2 comments.

---

## 4. Key PR Progress (Top 10 Notable Changes)
1. **[#29800: Fall back across model tiers only when Auto quota is exhausted](https://github.com/google-gemini/gemini-cli/pull/29800)**  
   Core fix: Rebuilds Auto-mode quota routing to switch between Pro/Flash tiers only on true quota exhaustion, fixing permanent session dead-ends and misclassified capacity failures.

2. **[#29762: Preserve disk edits when changing authentication](https://github.com/google-gemini/gemini-cli/pull/29762)**  
   Settings fix: Prevents overwriting user-modified `settings.json` content when saving auth changes; writes only the modified property path instead of rewriting the full startup snapshot.

3. **[#29629: Cap pending plain text height to reduce streaming flicker](https://github.com/google-gemini/gemini-cli/pull/29629)**  
   UX improvement: Limits the height of streaming plain text in `MarkdownDisplay` to fit the terminal, eliminating full-screen clear-redraw cycles on every streamed update.

4. **[#29799: Preserve quota-interrupted sessions and stop on Escape](https://github.com/google-gemini/gemini-cli/pull/29799)**  
   Reliability fix: Retains conversation history when a request stops for quota or cancellation, enabling resume; Escape key now closes the quota retry dialog immediately.

5. **[#29818: Improve /skill-name activation prompt and document manual activation](https://github.com/google-gemini/gemini-cli/pull/29818)**  
   Feature: Strengthens the default prompt for manual skill activation (previously just `Use the skill <name>`) and formalizes documentation for the `/<skill-name>` workflow.

6. **[#29801: Fix MCP proxy fetch pairing with Undici dispatcher](https://github.com/google-gemini/gemini-cli/pull/29801)**  
   Compatibility fix: Resolves HTTP MCP connection failures on Node 26 by pairing fetch with the correct Undici dispatcher, preserving auth headers for JSON/SSE initialization.

7. **[#29700: Synchronize workspace package.json versions with lockfile + enforce in CI](https://github.com/google-gemini/gemini-cli/pull/29700)**  
   Build infrastructure: Aligns workspace dependency versions with `package-lock.json` and extends CI checks to prevent desynchronization, supporting hermetic build tools like Nix.

8. **[#29621: Preserve subagent multimodal tool response parts](https://github.com/google-gemini/gemini-cli/pull/29621)**  
   Agent fix (closed/merged): Stops discarding image data emitted alongside function responses when local subagents return tool results to the parent model.

9. **[#29810: Keep alias generateContentConfig when model tier resolves to first choice](https://github.com/google-gemini/gemini-cli/pull/29810)**  
   Core fix: Prevents `customAliases` entries from silently losing custom `generateContentConfig` (temperature, max tokens, thinking level) when the resolved model matches the tier's first choice.

10. **[#29806: WSL2 clipboard fallbacks and non-PNG image format support](https://github.com/google-gemini/gemini-cli/pull/29806)**  
    Platform fix: Fixes image pasting (`Alt+V`) in WSL2 and minimal Linux environments by adding Wayland/X11 display server fallbacks and `image/bmp` support.

---

## 5. Hot Discussions
*Omitted: No GitHub Discussions data was provided in the dataset.*

---

## 6. Feature Request Trends
1. **Smarter agent tool & subagent orchestration**: Requests for automatic skill/subagent invocation, parallel subagent collaboration with shared memory, and subagent discovery via `settings.json`.
2. **AST-aware code intelligence**: Strong interest in AST-based file reading, search, and codebase mapping to reduce token usage and improve precision for codebase investigation tasks.
3. **Safety guardrails for destructive operations**: Demand for built-in protections against high-risk commands (force pushes, database modifications, destructive git operations) with confirmation prompts.
4. **Persistent file-based task tracking**: Push to replace in-context todo lists with a persistent file-based CRUD tracker to eliminate context rot and cross-session memory loss.
5. **Browser agent resilience**: Requests for automatic session takeover, lock recovery, and broader platform support (Wayland, custom profile configurations).
6. **Improved observability**: Want for easier access to subagent trajectories via `/chat share` and richer bug report context including subagent internal state.

---

## 7. Developer Pain Points
1. **Agent reliability regressions**: Hangs in the generalist agent, incorrect success status reporting for MAX_TURNS failures, and subagent execution bugs are the most frequently reported high-severity issues.
2. **Poor terminal UX**: Streaming flicker during responses, broken resize behavior, and focus management issues after dialog/cancellation flows are consistent sources of frustration.
3. **Quirky settings & auth behavior**: Settings being overwritten on auth changes, browser agent ignoring config overrides, and missing quota visibility degrade trust in configuration workflows.
4. **Platform compatibility gaps**: Wayland browser agent failures, WSL2 clipboard limitations, and symlink support gaps for agent files create friction for non-standard Linux setups.
5. **Tool scaling limits**: The 128-tool ceiling causing 400 errors blocks users with large custom tool/extension sets.
6. **Interactive prompt handling**: The agent cannot handle interactive CLI prompts (e.g., scaffolding tools), forcing manual user intervention for common developer workflows.
7. **Uncontrolled temporary file creation**: The model generates scattered tmp scripts across directories, creating cleanup overhead for users maintaining clean git worktrees.


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-10-19

---

## 1. Last 7 Days' Highlights
This week saw 10 incremental releases (v1.0.98 through v1.0.100-1) focused on session reliability, MCP stability, sandbox proxy improvements, and Gemini 4 Argon support, alongside fixes for MCP server hangs and credential trust failures. Community issues centered on model provider flexibility (BYOK/local model switching), session performance bottlenecks, and cross-environment compatibility gaps on Windows, macOS, and remote SSH setups. Only 1 new PR was opened, a template update to the feature request workflow.

---

## 2. Releases
A total of 10 versions shipped in the past 7 days, with key changes as follows:

- **v1.0.100-1**
  - Improved: Unified Sessions browser is now default for `/sessions`, `/session`, and `/resume`; account discovery capped at 500 records with `Retry-After` header support.
  - Fixed: Sandbox host-rule traffic now honors `HTTPS_PROXY` and `HTTP_PROXY` environment variables.
- **v1.0.100-0**
  - Improved: Prompt to update sandbox proxy CA when masked hosts change.
  - Fixed: Managed plugins update activation in existing sessions on policy changes; sessions no longer stall when an MCP server hangs during tool loading.
- **v1.0.99-3**
  - Added: `--disable-client-telemetry` flag to turn off client telemetry uploads.
  - Fixed: Sandboxed shell commands now explain credential-proxy certificate trust failures and offer an approved rerun outside the sandbox; saved `/diff` review comments are preserved when reopening an unsaved session.
- **v1.0.99-2**
  - Improved: Clear notice when administrator-managed settings override your selected model; semantic code search enabled by default for online sessions.
  - Fixed: Sandboxed commands on Linux start more reliably without intermittent loopback setup failures; navigation back from MCP resource details works correctly.
- **v1.0.99-1**
  - Added: `--trust-folder` flag for one-off prompt-mode sessions started with `-p` or piped stdin; install verified Skills/plugins from GitHub install links via `copilot plugin install "ghapp://air/install?..."`.
  - Improved: `/login` for Microsoft Entra supports cached account selection.
- **v1.0.99-0**
  - Added: `/share` without arguments opens a full-screen action menu for sharing the current session.
  - Improved: `/sandbox` can keep sandboxing enabled for the current session only (no global enable); trusted repository plugins install/update automatically before chat runs.
- **v1.0.98** (2026-10-14)
  - Added support for Gemini 4 Argon; fixed command hook reliability on Node child-exit signal loss; MCP status and `/mcp` commands stay synced after split-view session switches; session resume now skips abandoned pending-permission requests.
- **v1.0.98-2**
  - Improved: Expand `/ask` answers with `Ctrl+E`, copy full answers with `Ctrl+Y`, and reopen the last completed answer with `/ask` or `/btw`.
  - Fixed: Command hook reliability under Node child-exit signal loss.
- **v1.0.98-1**
  - Added support for Gemini 4 Argon; fixed MCP status sync after split-view switches and session resume permission handling.
- **v1.0.98-0**: General fixes and changes.

---

## 3. Hot Issues
The 10 most noteworthy issues from the past 7 days, ranked by community impact and engagement:

1. **#4998 [CLOSED] [area:mcp] Copilot CLI unusable after macOS update/reboot because `.mcp-writer.binding` persists stale filesystem device ID**  
   [Link](https://github.com/github/copilot-cli/issues/4998) | 11 comments | 11 👍  
   Why it matters: A critical macOS compatibility bug that completely blocked CLI functionality after system reboots, affecting MCP-based workflows. The fix addresses a platform-specific edge case in filesystem binding state management.

2. **#3709 [OPEN] [area:models] Allow `/model` to switch between multiple models, including BYOK/local providers, in one session**  
   [Link](https://github.com/github/copilot-cli/issues/3709) | 10 comments | 34 👍  
   Why it matters: The highest-voted open feature request this week. Users want seamless switching between GitHub-hosted models and self-hosted/BYOK models within a single session, a key gap for teams running custom model deployments.

3. **#3442 [CLOSED] [area:sessions, area:enterprise] v1.0.51 Remote sessions are not enabled. Contact your organization administrator to enable remote sessions.**  
   [Link](https://github.com/github/copilot-cli/issues/3442) | 8 comments | 11 👍  
   Why it matters: Resolved enterprise configuration confusion around remote session enablement, with clarification on admin policy requirements that impact many organizational rollouts.

4. **#4849 [OPEN] [triage] Reduce latency and review-loop overhead in subagent workflows**  
   [Link](https://github.com/github/copilot-cli/issues/4849) | 6 comments | 0 👍  
   Why it matters: Highlights a major performance pain point for agent-driven development: multi-minute round trips for subagent handoffs and review cycles make automated code changes slower than manual work for small tasks.

5. **#1436 [CLOSED] [area:platform-windows] Support PowerShell profile loading in shell mode**  
   [Link](https://github.com/github/copilot-cli/issues/1436) | 5 comments | 1 👍  
   Why it matters: A long-requested Windows usability fix. Shell mode previously launched PowerShell with `-NoProfile`, breaking user customizations, aliases, and environment configurations.

6. **#3100 [OPEN] [area:authentication, area:mcp] HTTP MCP server with Bearer token fails OAuth discovery instead of falling back to headers auth**  
   [Link](https://github.com/github/copilot-cli/issues/3100) | 2 comments | 11 👍  
   Why it matters: A high-priority MCP authentication bug: explicitly configured Bearer token headers are ignored while the CLI attempts (and fails at) OAuth discovery, breaking integration with many self-hosted MCP servers.

7. **#5042 [OPEN] [area:context-memory, area:models, area:tools] HydraFusion: after a 400 on the routed model, the session is re-routed to a small-context model that cannot load the static prompt; tool set changes mid-session**  
   [Link](https://github.com/github/copilot-cli/issues/5042) | 2 comments | 0 👍  
   Why it matters: Exposes a critical HydraFusion fallback flaw: when a primary model fails, the router silently switches to a smaller model that can’t handle existing session context, leading to broken tooling and unexpected behavior mid-session.

8. **#4576 [OPEN] [triage] `includeCoAuthoredBy: false` is not inherited by task subagents; their commits still get the Co-authored-by trailer**  
   [Link](https://github.com/github/copilot-cli/issues/4576) | 1 comment | 5 👍  
   Why it matters: A configuration consistency bug affecting privacy and attribution: user settings to disable Copilot co-author trailers are ignored by subagent tasks, causing unwanted commit metadata.

9. **#4714 [OPEN] [area:sessions] Resuming a session is extremely slow, does not display UI that would indicate loading**  
   [Link](https://github.com/github/copilot-cli/issues/4714) | 1 comment | 2 👍  
   Why it matters: Combines performance and UX gaps: session resume is unacceptably slow with no loading indicator, leaving users uncertain if the CLI is frozen or working.

10. **#5180 [OPEN] [triage] `web_fetch` rejects public domains resolved to Surge Fake-IP addresses on macOS (CLI 1.0.98)**  
    [Link](https://github.com/github/copilot-cli/issues/5180) | 1 comment | 0 👍  
    Why it matters: A network compatibility bug that breaks `web_fetch` for users of Surge proxy tools on macOS, a common setup for developers in regions with restricted network access.

---

## 4. Key PR Progress
Only 1 pull request was updated in the past 7 days:

- **#5186 [OPEN] Update feature_request.yml**  
  [Link](https://github.com/github/copilot-cli/pull/5186) | Author: Bilalabdulkadir  
  A maintenance update to the feature request issue template workflow, with CI validation for invalid PR auto-closing. No product-facing changes.

---

## 5. Hot Discussions
No discussion data was provided for this period. This section is omitted.

---

## 6. Feature Request Trends
Three core feature direction trends emerged from the week's issues:

1. **Open model provider flexibility**: Multiple requests (#3709, #2710) push for first-class support for BYOK, local, and third-party model providers, including in-session switching and standardized configuration surfaces, moving beyond GitHub-hosted model lock-in.
2. **Subagent workflow performance & observability**: Requests for reduced subagent latency (#4849) and OpenTelemetry tracing for HydraFusion routing decisions (#4825) reflect demand for better transparency and speed in multi-agent and model-routing workflows.
3. **Terminal & platform UX polish**: Requests for OS notifications for long-running tasks (#2616), OSC 7501 program status reporting (#5112), vi-style j/k menu navigation (#4152), Git Bash support on Windows (#508), and PowerShell profile loading (#1436) show demand for deeper terminal integration and platform-native usability.

---

## 7. Developer Pain Points
Recurring frustrations reported by developers this week:

- **HydraFusion routing instability**: Multiple bugs (#5042, #5097) show silent, unannounced model fallback that breaks context windows, changes tool sets, and reduces output quality without user consent or clear visibility.
- **MCP integration gaps**: Authentication failures (#3100), stale filesystem bindings (#4998), resource blob parsing bugs (#4916), and server hang-induced session stalls (fixed in v1.0.100-0) create consistent friction for users building on MCP ecosystems.
- **Session performance & UX**: Slow session resume (#4714), subagent workflow latency (#4849), and missing loading states leave users unable to gauge progress or trust that the CLI is functioning.
- **Cross-platform & environment compatibility**: Gaps include macOS Surge proxy conflicts (#5180), remote SSH clipboard failures on macOS (#4551), Windows Git Bash support gaps (#508), and Linux sandbox loopback setup failures (fixed in v1.0.99-2).
- **Configuration inconsistency**: Settings like `includeCoAuthoredBy: false` not propagating to subagents (#4576) and admin model overrides (improved in v1.0.99-2) create unexpected behavior that breaks user expectations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-10-19

---

## 1. Last 7 Days' Highlights
The OpenCode 1.x line received three patches to stabilize variant configuration, update targeting, and remove session sharing, while a wave of free-tier authentication bugs dominated user reports following the October 17 Console security breach. Core engineering advanced on TUI usability, permission system hardening, and plugin runtime parity, with 50 new issues and 50 PRs reflecting active v2 refinement and community contribution.

---

## 2. Releases
Three 1.x line releases shipped in the last 7 days:
- **v1.19.3** – Core improvement: model reasoning options now generate reasoning variants, replacing catalog variants while preserving user-configured variant overrides.
- **v1.19.2** – Core bugfix: 1.x installs now only check the `opencode-ai` npm `latest` tag for updates, ensuring 2.x builds are never offered as a regular upgrade; v2 upgrades remain an explicit choice via `/update`.
- **v1.19.1** – Core bugfix: session sharing is fully discontinued; existing share links, session-sharing commands, and import-from-URL functionality are no longer supported.

---

## 3. Hot Issues
1. **#56324** – `[OPEN] [severity:high]` Free models fail in official OpenCode TUI on Windows v2.0.32 with "free tier can only be used from within OpenCode".  
   *Why it matters:* Blocks core free-tier functionality for Windows TUI users; 66 comments and 30 👍 make it the most active issue this week, indicating broad impact.  
   🔗 [anomalyco/opencode#56324](https://github.com/anomalyco/opencode/issues/56324)

2. **#56442** – `[CLOSED]` Unable to log into OpenCode web console via GitHub OAuth.  
   *Why it matters:* Authentication outage affecting all web console users; 16 comments reflect immediate user disruption before resolution.  
   🔗 [anomalyco/opencode#56442](https://github.com/anomalyco/opencode/issues/56442)

3. **#50206** – `[OPEN]` Malformed XML/DSML tool-call output from OpenCode Go models breaks tool execution.  
   *Why it matters:* Core reliability issue for Go-model users using tool use; 12 comments and ongoing investigation signal it remains unresolved after a month.  
   🔗 [anomalyco/opencode#50206](https://github.com/anomalyco/opencode/issues/50206)

4. **#41763** – `[OPEN] [2.0]` ALSA errors flood and corrupt the Linux TUI during interaction on systems without a sound card.  
   *Why it matters:* Degrades v2 TUI experience on Linux; 12 comments and 3 👍 highlight persistent usability pain on headless or audio-less setups.  
   🔗 [anomalyco/opencode#41763](https://github.com/anomalyco/opencode/issues/41763)

5. **#34344** – `[CLOSED]` Unlimited usage exploit: free model rate limits tied to IP can be bypassed via VPN rotation.  
   *Why it matters:* Security and cost concern for the free tier; closure indicates the team has addressed the rate-limiting logic.  
   🔗 [anomalyco/opencode#34344](https://github.com/anomalyco/opencode/issues/34344)

6. **#33300** – `[OPEN] [FEATURE]` Voice/speech input support for the Desktop App.  
   *Why it matters:* Top-voted feature request this period (10 👍); reflects demand for hands-free interaction.  
   🔗 [anomalyco/opencode#33300](https://github.com/anomalyco/opencode/issues/33300)

7. **#56470** – `[OPEN]` Permissions `ask` effect is fail-open for shell commands: command runs immediately while client prompt returns 404.  
   *Why it matters:* Critical security gap—permission gating does not actually block execution; high severity for agent safety.  
   🔗 [anomalyco/opencode#56470](https://github.com/anomalyco/opencode/issues/56470)

8. **#51209** – `[OPEN] [FEATURE]` Expose the v2 TUI composer to plugins (v1 parity).  
   *Why it matters:* Blocks plugin ecosystem migration to v2; 7 comments and 3 👍 from plugin developers.  
   🔗 [anomalyco/opencode#51209](https://github.com/anomalyco/opencode/issues/51209)

9. **#51887** – `[OPEN] [2.0] [Bug]` OpenCode 2 CLI endlessly pops up windows on Windows, stealing focus.  
   *Why it matters:* Makes v2 CLI nearly unusable on Windows; 7 comments report severe workflow disruption.  
   🔗 [anomalyco/opencode#51887](https://github.com/anomalyco/opencode/issues/51887)

10. **#56833** – `[OPEN]` Go subscriber: API key revoked with no expiry after Oct 17 Console breach; no formal compensation policy published.  
    *Why it matters:* Post-breach trust and communication issue affecting paid users; signals demand for clearer incident response and remediation.  
    🔗 [anomalyco/opencode#56833](https://github.com/anomalyco/opencode/issues/56833)

---

## 4. Key PR Progress
1. **#56910** – `fix(tui): keep Home and End in the session prompt` (contributor: argszero)  
   Fixes #56890: ensures Home/End move the prompt cursor after submission instead of scrolling the transcript.  
   🔗 [anomalyco/opencode#56910](https://github.com/anomalyco/opencode/pull/56910)

2. **#56900** – `fix(tui): share host runtime with compiled plugin consumers` (moritzWa)  
   Fixes #55454 (npm TUI case), complementing the server-only fix in #56644; preserves OpenTUI/Solid imports on the compiled host runtime.  
   🔗 [anomalyco/opencode#56900](https://github.com/anomalyco/opencode/pull/56900)

3. **#56908** – `feat(core): route unpinned sessions by prompt complexity` (neony1027)  
   New feature: unpinned sessions auto-select a catalog model based on prompt complexity; adds an "Auto" option in the TUI model dialog, behind an `experimental` flag.  
   🔗 [anomalyco/opencode#56908](https://github.com/anomalyco/opencode/pull/56908)

4. **#56909** – `fix(app): keep permission actions visible for long commands` (HootRock)  
   Closes #49644 and addresses #56863: bounds permission dock height so approval buttons remain visible for long command resources.  
   🔗 [anomalyco/opencode#56909](https://github.com/anomalyco/opencode/pull/56909)

5. **#56659** – `feat(core): edit saved permissions` (rekram1-node)  
   Enables editing of saved "Always allow" permissions (previously only list/delete were supported), unlocking UI for reviewing and narrowing approvals.  
   🔗 [anomalyco/opencode#56659](https://github.com/anomalyco/opencode/pull/56659)

6. **#56897** – `feat(desktop): ship the CLI as opencode and put it on the Windows PATH` (Hona)  
   Renames the bundled CLI from `opencode-cli` to `opencode` across platforms and adds it to Windows PATH, enabling `opencode` commands from any terminal.  
   🔗 [anomalyco/opencode#56897](https://github.com/anomalyco/opencode/pull/56897)

7. **#52818** – `feat(browser-extension): add OpenCode Browser, an extension agents control over MCP` (R44VC0RP)  
   Introduces a Chromium extension giving AI agents browser control via `browse` MCP tools: tab management, screenshots, network capture, and Playwright integration.  
   🔗 [anomalyco/opencode#52818](https://github.com/anomalyco/opencode/pull/52818)

8. **#21111** – `fix(acp): forward session title updates to ACP clients via session_info_update` (kevinWangSheng, contributor)  
   Closes #21013: implements ACP protocol `session_info_update` emission so ACP clients receive session title and `updatedAt` changes.  
   🔗 [anomalyco/opencode#21111](https://github.com/anomalyco/opencode/pull/21111)

9. **#56905** – `fix(core): log providers removed by policy` (opencode-agent[bot], contributor)  
   Adds debug logging when a `provider.use` policy (e.g., "Managed providers only") removes a provider, making model-unavailable errors diagnosable.  
   🔗 [anomalyco/opencode#56905](https://github.com/anomalyco/opencode/pull/56905)

10. **#56896** – `feat(ui): open images from their place in the message` (kitlangton, contributor)  
    Adds a smooth in-place image preview animation (growing from the thumbnail) with dimming, matching the Claude desktop experience and preserving context.  
    🔗 [anomalyco/opencode#56896](https://github.com/anomalyco/opencode/pull/56896)

---

## 5. Hot Discussions
*Omitted — no discussion data provided in this week's dataset.*

---

## 6. Feature Request Trends
1. **Voice input**: Desktop app voice/speech input is the top-voted request (#33300), with consistent demand for hands-free prompting.
2. **Plugin platform parity**: v2 TUI composer access for plugins (#51209) and compiled plugin runtime sharing (#56900) are top developer requests to unblock plugin migration.
3. **Permission UX improvements**: Editing saved permissions (#56659), visible approval actions for long commands (#56909), and better subagent permission prompts (#56906) form a clear trend toward more granular, usable permission controls.
4. **Smarter model selection**: Automatic model routing based on prompt complexity (#56908) aligns with user requests to reduce manual model switching overhead.
5. **Browser automation integration**: The OpenCode Browser MCP extension (#52818) reflects growing interest in agent-controlled web browsing as a core capability.

---

## 7. Developer Pain Points
1. **Free-tier client authentication bugs**: A flood of reports (#56324, #56598, #56573, #56543, #56609, #56585) show the "free tier can only be used from within OpenCode" error incorrectly triggers in official clients, especially on Windows — the single most frequent user issue this cycle, exacerbated by the Oct 17 Console breach key revocations.
2. **Windows v2 stability**: Endless popup focus stealing (#51887) and installation path conflicts (#56904) make the v2 CLI/desktop experience unreliable on Windows.
3. **Linux TUI audio noise**: ALSA error spam corrupting the terminal on sound-card-less Linux systems (#41763) is a long-standing v2 TUI pain point with no fix yet shipped.
4. **Tool call reliability with Go models**: Malformed DSML/XML output from Go models (#50206) breaks tool execution, creating trust issues for agent workflows on those models.
5. **Permission system correctness and visibility**: The fail-open `ask` effect for shell commands (#56470) is a critical security gap, and policy-removed providers have zero logging (#56905), making debugging difficult.
6. **Post-breach communication and compensation**: Paid Go subscribers affected by the Oct 17 API key revocation (#56833) report missing clarity on remediation and formal compensation policies.
7. **ACP protocol gaps**: Missing `session_info_update` events (#21013) and broken ACP integrations like Zed session creation (#53799) hinder ecosystem compatibility.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest – 2026-10-19

---

## 1. Last 7 Days' Highlights
This week the Pi project shipped two minor releases (v1.2.0 and v1.3.0) that add per-key OpenRouter model listings and configurable `/share` upload destinations. The maintainer team also merged a wave of Windows/PowerShell fixes, improved RPC-mode MCP support, and introduced server-side compaction via the Responses API. Community activity remained high, with 50+ issues and PRs updated, plus several new third-party client and extension showcases.

---

## 2. Releases

### v1.3.0
- **Configurable `/share` destination:** New `sessionShareDestination` setting lets users choose `auto`, `gist`, or `radius` for session sharing.  
  Docs: [Sessions and context](https://github.com/earendil-works/pi/blob/v1.3.0/packages/coding-agent/docs/settings.md#sessions-and-context)

### v1.2.0
- **Per-key OpenRouter model lists:** Pi now shows only models your OpenRouter key can access, including key-specific context size, max output, pricing, and regional endpoints defined in `models.json`.  
  Docs: [OpenRouter](https://github.com/earendil-works/pi/blob/v1.2.0/packages/...)

---

## 3. Hot Issues

| # | Title | Status | Why it matters |
|---|-------|--------|----------------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | High CPU usage on Mac OS with long session | OPEN | Top-commented issue (20 comments, 11 👍). Users report 50–110% CPU and 600–800 MB memory during long sessions, likely tied to context size — a core performance concern. |
| [#10895](https://github.com/earendil-works/pi/issues/10895) | Support system-level configuration (MDM) at highest precedence | CLOSED (no-action) | 11 comments. Requested for enterprise/MDM security posture (`/etc/pi/models.json`). Marked no-action; signals current config hierarchy is intentional. |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | Anthropic tool calls: corrupted non-ASCII edit arguments silently accepted | OPEN | 10 comments. Korean (and other non-ASCII) text edits with Claude models frequently fail or corrupt files due to `\uXXXX` escaping bugs — a correctness issue for international users. |
| [#6167](https://github.com/earendil-works/pi/issues/6167) | `transformMessages` + model switching breaks thinking block normalization | OPEN | 9 comments. Switching models in mid-session can inline thinking content incorrectly when `requiresReasoningContentOnAssistantMessages` is set, causing compatibility issues across reasoning models. |
| [#8582](https://github.com/earendil-works/pi/issues/8582) | Built-in PowerShell tool uses PS 5.1 in interactive mode but pwsh in `-p` mode | CLOSED | 8 comments. Inconsistent PowerShell version selection on Windows caused user confusion; fix is merged. |
| [#9656](https://github.com/earendil-works/pi/issues/9656) | Mouse wheel scrolls prompt history instead of transcript in fullscreen on Windows + Zellij | OPEN | 8 comments, 4 👍. Terminal multiplexer interaction bug on Windows degrades fullscreen UX. |
| [#9409](https://github.com/earendil-works/pi/issues/9409) | Sessions wedge permanently at context ceiling on reasoning models | OPEN | 7 comments. Sessions get stuck in a “length” stop-reason loop even after auto-compaction retries — a serious reliability issue for long-running reasoning sessions. |
| [#10976](https://github.com/earendil-works/pi/issues/10976) | PowerShell tool falls back to PS 5.1 when pwsh 7 is the Microsoft Store build | OPEN | 7 comments. Store-installed pwsh uses app-execution aliases that `fs.existsSync` can’t detect; another Windows PowerShell detection edge case. |
| [#11033](https://github.com/earendil-works/pi/issues/11033) | Pi subscription login fails with `3p_delegated_access_policy_denied` | CLOSED (no-action) | 5 comments. Org policy blocks third-party app delegation for ChatGPT/Codex subscriptions; official Codex CLI works. Highlights OAuth policy friction in enterprise environments. |
| [#10956](https://github.com/earendil-works/pi/issues/10956) | `cacheWarming: "idle"` stops silently after extension handles `turn_end` | OPEN | 5 comments. Idle cache warming never fires in sessions with custom/compaction messages, silently degrading latency for extension users. |

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#11098](https://github.com/earendil-works/pi/pull/11098) | feat(ai,agent,coding-agent): server-side compaction via Responses API | CLOSED | Enables providers (e.g., OpenAI Responses `context_management`) to perform compaction server-side; Pi adopts the result as a normal session compaction entry. Reduces client-side token and compute overhead. |
| [#11082](https://github.com/earendil-works/pi/pull/11082) | feat(coding-agent): register per-session MCP servers over RPC | CLOSED | Closes #11067. Adds `register_mcp_server` / `unregister_mcp_server` / `get_mcp_servers` RPC commands, matching the extension API’s validation and namespace rules. Unblocks RPC-based MCP orchestration. |
| [#11079](https://github.com/earendil-works/pi/pull/11079) | feat(durable): inject a timer for task sleeps | CLOSED | Adds injectable timer support to `TaskRuntime.sleep()`, so durable hosts (e.g., Cloudflare Durable Objects) can avoid holding in-memory timers during long backoffs or polls. |
| [#1104](https://github.com/earendil-works/pi/pull/11104) | durable: add task-scoped model access for hosts | CLOSED | Introduces `HarnessOptions.taskModels(scope, models)` callback so hosts can grant model access per task (by task ID, conversation ID, kind, and abort signal). Useful for multi-tenant and fine-grained authorization scenarios. |
| [#11080](https://github.com/earendil-works/pi/pull/11080) | fix(powershell): accept Microsoft Store app-execution aliases in PATH resolution | CLOSED | Fixes #10976. Detects Store-installed `pwsh.exe` (app-execution aliases / zero-length reparse points) so the PowerShell tool correctly uses pwsh 7 instead of falling back to 5.1. |
| [#11077](https://github.com/earendil-works/pi/pull/11077) | fix(coding-agent): defer `sendMessage` `triggerTurn` until compaction ends | CLOSED | Fixes a race where `pi.sendMessage(..., { triggerTurn: true })` would run concurrently with an in-progress manual compaction, corrupting message order and context state. |
| [#11109](https://github.com/earendil-works/pi/pull/11109) | fix(durable): builtin read resolves images to image blocks in codemode | CLOSED | Fixes #11015. Code-mode `read()` on images returned an empty string because `textOf()` dropped image blocks; now `read` returns a union schema that preserves image blocks. |
| [#11108](https://github.com/earendil-works/pi/pull/11108) / [#11081](https://github.com/earendil-works/pi/pull/11081) | fix(tui): keep leading tilde in fullscreen double-click selection | CLOSED | Fixes #10980. Adds `~` to `TERMINAL_WORD_SELECTION_JOINERS` so double-clicking `~/path` selects the full path including the tilde. (Two independent fixes merged in the same week.) |
| [#11053](https://github.com/earendil-works/pi/pull/11053) / [#11054](https://github.com/earendil-works/pi/pull/11054) | Prefer PowerShell over bash on Windows; enable PowerShell by default | CLOSED | Fixes #11049 / #11051. On Windows, the model now prefers PowerShell over bash when both are enabled, and PowerShell is enabled by default — reducing path/encoding/quoting issues from Git Bash. |
| [#10914](https://github.com/earendil-works/pi/pull/10914) | docs: move documentation to the repository root | OPEN | Moves docs from `packages/coding-agent/docs` to repo-root `docs/` to reflect Pi’s expanded scope (pi-ai, pi-durable, etc.). Coding-agent build copies docs back for npm packaging. |

---

## 5. Hot Discussions

### Ideas
- **[#10632](https://github.com/earendil-works/pi/discussions/10632) – Pausing a run on a tool call until human approval or client-side results arrive (nothing kept in memory)**  
  3 comments, 1 👍. Proposes a durable, memory-free approval/interruption flow for tool calls — a natural fit for pi-durable and human-in-the-loop workflows.

- **[#10915](https://github.com/earendil-works/pi/discussions/10915) – Video input: a measurement that changes the implementation, and a 92-line reference**  
  1 👍. Contributes benchmarks and a reference implementation to the long-running video-input feature discussion (#3200), with the goal of shaping how Pi approaches video modalities.

- **[#10841](https://github.com/earendil-works/pi/discussions/10841) – Where should a package put a one-shot pre-turn routing decision?**  
  1 👍. From the MatPilot team: asks for best practice on adding a cheap pre-turn classification router (e.g., `semantic-router` under 100 ms) using `before_agent_start` with async I/O.

### Q&A
- **[#10950](https://github.com/earendil-works/pi/discussions/10950) – How do I access `typesafeSystemOneApi` for a custom native provider?**  
  0 comments, 4 👍. Developer wants to add self-hosted `kev` support to a custom native provider but can’t find the equivalent of `openAiCompletionsApi` from `@earendil-works/pi-ai/compat`. High 👍/low-comment ratio suggests broad interest.

### Show and tell
- **[#11068](https://github.com/earendil-works/pi/discussions/11068) – ColliePWA 1.22.0, the phone client for your Pi Durable agent**  
  Mobile PWA client for Pi Durable that lets users monitor and resume agents from a phone.

- **[#10974](https://github.com/earendil-works/pi/discussions/10974) – swe-mux: run pi sessions side by side and from your phone**  
  Terminal multiplexer with native Pi status detection (working/done/waiting), tabs/panes, dev-server previews, and phone access.

- **[#10927](https://github.com/earendil-works/pi/discussions/10927) – OpenLeo: a Trello-style board where pi-agent-core agents do the cards**  
  Kanban board where each list has a Pi agent that executes cards in a Linux sandbox and writes results back.

- **[#10921](https://github.com/earendil-works/pi/discussions/10921) – Pi Bridge — use the Chrome profiles you already have with Pi**  
  Chrome extension + Pi package that lets Pi interact with existing user Chrome profiles instead of a hosted browser.

---

## 6. Feature Request Trends
1. **Deeper durable / human-in-the-loop primitives** – Pause/resume on tool calls, external approval gates, and task-scoped model access (discussion #10632, PR #11104) are gaining traction as pi-durable adoption grows.
2. **Enterprise / security configuration** – System-level (MDM) config (#10895), per-model disabling (#10167), and cache retention settings (#11101) reflect increasing organizational use.
3. **Expanded RPC and extension APIs** – Per-session MCP registration over RPC (#11082), `onRetry` callbacks (#7649), context-usage breakdowns (#10802), and `prepareArguments` access to parse-failed tool calls (#11112) show the ecosystem wants more programmatic control.
4. **Provider & model flexibility** – Per-key OpenRouter listings (v1.2.0), Responses API server-side compaction (#11098), and custom native provider support (discussion #10950) point to demand for multi-provider, pluggable model infrastructure.
5. **Windows-first UX improvements** – Default PowerShell enablement, PowerShell-over-bash preference, and Store-install pwsh detection (#11053, #11054, #11080) signal an investment in smoothing Windows developer experience.

---

## 7. Developer Pain Points
- **Long-session resource usage on macOS** – #7730 remains the most-commented open issue, with CPU spiking to 100%+ and memory climbing to 600–800 MB as sessions grow.
- **Context-ceiling deadlocks on reasoning models** – #9409: sessions can get permanently stuck at the context window with `stopReason: "length"` even after compaction retries, effectively bricking the session.
- **Non-ASCII / encoding bugs in Anthropic tool calls** – #10074: corrupted escape sequences (`\uXXXX` dropping `u`) silently corrupt edits on Korean and other non-ASCII content, causing frequent retries and data loss.
- **PowerShell version detection on Windows** – Multiple issues (#8582, #10976) around inconsistent fallback to Windows PowerShell 5.1 instead of pwsh 7, especially for Microsoft Store installs.
- **Terminal multiplexer UX glitches** – Zellij/Windows mouse wheel misbehavior (#9656) and TUI selection quirks (tilde handling, cursor visibility on focus loss #10323) create rough edges in power-user setups.
- **Extension event and API gaps** – Missing `tool_result` events (#11100), cache warming silently stopping after extensions (#10956), and `waitForIdle()` resolving during compaction (#10704) frustrate extension authors building on top of Pi.
- **Provider-specific network/configuration limits** – Hardcoded 10 s connect timeout causing DeepSeek timeouts on Linux (#11106) and OAuth policy errors with enterprise Codex subscriptions (#11033) highlight deployment friction.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-10-19

---

## 1. Last 7 Days' Highlights
This week, the Qwen Code team shipped the stable `v0.25.2` release across CLI, Desktop, and TypeScript SDK, focused on managed-agent robustness and connector/broker reliability. Core work advanced on the staged Managed Agent dual-path architecture, while CI reliability and UI polish (Web Shell, terminal rendering) emerged as top community concerns, with multiple flaky test and UX defect fixes in active review.

---

## 2. Releases
| Product | Version | Key Changes |
|---------|---------|-------------|
| CLI (stable) | [v0.25.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2) | No breaking changes; adds managed-agent lead mailbox over Session messages (`#13892`); improves connector/broker robustness |
| CLI (preview) | [v0.25.3-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.3-preview.0) / [v0.25.2-preview.0/1](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2-preview.1) | Managed-agent fixes for team plan approval interrupted turns; connector/broker hardening from `#12692` R2 review |
| CLI (nightly) | v0.25.2-nightly.20261015/16/17 | Incremental managed-agent bug fixes, including `team_plan_approval` journal-only turn settle logic |
| Desktop | [desktop-v0.25.2](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.2) | Aligns with CLI v0.25.2: managed-agent robustness and mailbox feature |
| TypeScript SDK | [sdk-typescript-v0.1.20](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.20) | Bundles CLI v0.25.2 |

---

## 3. Hot Issues
1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** — *Managed Agent dual-path architecture proposal*  
   The highest-discussion thread (71 comments) defining the staged architecture for independent inference/tooling, durable Sessions, and recoverable executions. It is the north-star roadmap item for the multi-agent and platform distribution tracks, with active design iteration.

2. **[#14393](https://github.com/QwenLM/qwen-code/issues/14393)** — *Remaining tenant-guard gaps*  
   Follow-up to merged `#13918` addressing unbounded publication lanes, stale design text, and cleanup tasks (19 comments). Critical for tenant isolation correctness in hosted deployments.

3. **[#14596](https://github.com/QwenLM/qwen-code/issues/14596)** — *docs_only CI fast lane skips Prettier, breaking main*  
   A CI quality gap where documentation-only PRs merge green but later redden the main branch. High priority for maintainer workflow efficiency.

4. **[#14537](https://github.com/QwenLM/qwen-code/issues/14537)** — *User reports "supply chain poisoning" concern over built-in crawler / ripgrep dependency*  
   A notable user-experience and trust issue: the v0.25.2 Desktop client spawns `rg` for repo crawling, and falls back to `fdir` when ripgrep is missing, causing confusion and error noise.

5. **[#14600](https://github.com/QwenLM/qwen-code/issues/14600)** — *Desktop crash leaves live backend; relaunch cannot reconnect*  
   A P2 desktop reliability bug on Linux: crashes strand daemon processes and orphan conversations, with no recovery path on restart.

6. **[#14446](https://github.com/QwenLM/qwen-code/issues/14446)** — *FG11 fault gates for schedule/automation_run domains*  
   Stage F fault-gate work for automation reliability, part of the multi-agent/background-automation roadmap, currently blocked pending dependency work.

7. **[#14075](https://github.com/QwenLM/qwen-code/issues/14075)** — *Static terminal mode word-wrap orphans 1-2 characters*  
   A visible UI rendering defect in the non-virtualized terminal path that degrades readability for code and long lines.

8. **[#13184](https://github.com/QwenLM/qwen-code/issues/13184)** — *Unbounded growth in managed session stores/panel projection*  
   A performance/memory leak issue: managed-agent persistence and UI layers grow indefinitely over time, with no bounded retention policy.

9. **[#14566](https://github.com/QwenLM/qwen-code/issues/14566)** — *SDK Java self-hosted lock acquisition repeatedly times out at 40 min*  
   An infrastructure bottleneck causing PR lanes to fail before running tests, impacting Java SDK developer velocity.

10. **[#14616](https://github.com/QwenLM/qwen-code/issues/14616)** — *Native document generation and export (.docx/.xlsx/.pptx/.pdf)*  
    A popular feature request for built-in office/PDF document creation, complementing the existing artifact preview capability.

---

## 4. Key PR Progress
1. **[#14335](https://github.com/QwenLM/qwen-code/pull/14335)** — *feat(serve): auto-remove completed sub-sessions after configurable TTL*  
   Adds a `serve.subSessionCompletionTtlHours` setting to auto-cleanup finished sub-sessions in daemon mode (default: off, preserving current behavior).

2. **[#14628](https://github.com/QwenLM/qwen-code/pull/14628)** — *feat(managed-agent): raise attachment input budget to 8 MiB*  
   Increases canonical JSON input limit to ~8 MiB, supporting larger screenshots (with base64 overhead) and attachments, with IndexedDB-backed persistence across refreshes.

3. **[#14297](https://github.com/QwenLM/qwen-code/pull/14297)** — *feat(web-shell): delete selected message groups from session history*  
   Adds grouped message deletion (prompt + full reply group) to Web Shell, with non-contiguous selection support.

4. **[#14281](https://github.com/QwenLM/qwen-code/pull/14281)** — *feat(memory): add scoped external import jobs for CLI and HTTP*  
   Introduces a Qwen-owned external memory import service (starting with Codex), with preview, section selection, and durable background consolidation.

5. **[#14590](https://github.com/QwenLM/qwen-code/pull/14590)** — *fix(ci): repair main's Prettier step and deflake hook-cancel fence test*  
   Fixes the `#14596` CI failure and stabilizes a flaky hook-cancel fence test.

6. **[#14611](https://github.com/QwenLM/qwen-code/pull/14611)** — *fix(ci): size sdk-java host lock budget to current sibling holds*  
   Raises SDK Java self-hosted lock timeout from 40 to 90 minutes to mitigate `#14566` acquisition failures.

7. **[#14046](https://github.com/QwenLM/qwen-code/pull/14046)** — *feat(core): add a real PTY backend for the Bun runtime*  
   Enables POSIX PTY support for Bun, so shell tools and Web Terminal sessions get proper terminal output, resize, and exit signaling.

8. **[#14619](https://github.com/QwenLM/qwen-code/pull/14619)** — *fix(sdk): size session spawn deadlines from the advertised session budget*  
   Replaces the generic 30-second SDK wait for session creation/worktree reset with a deadline derived from the daemon's advertised session budget.

9. **[#14601](https://github.com/QwenLM/qwen-code/pull/14601)** — *test(managed-agent): add FG11c Harness-crash fault gates*  
   Implements FG11c SIGKILL fault-gate tests for `schedule` and `automation_run` domains (claim-before-dispatch, in-flight model call, post-write scenarios).

10. **[#13997](https://github.com/QwenLM/qwen-code/pull/13997)** — *fix(cli): hold pre-runtime /acp WebSocket upgrades instead of returning 406*  
    Prevents fast-path `qwen serve` boots from rejecting early ACP WebSocket connections before the runtime is initialized, improving connection reliability.

---

## 5. Hot Discussions
*No discussion data provided in this week's dataset; this section is omitted.*

---

## 6. Feature Request Trends
1. **Multi-agent & managed-agent platform maturity** — Top-of-mind across roadmap items: staged dual-path architecture (`#12380`), automation cancellation (`#14460`), durable imports (`#14281`), and fault-gate hardening (`#14446`, `#14601`).
2. **Session lifecycle & storage control** — Demand for bounded growth/retention (`#13184`), auto-cleanup of completed sub-sessions (`#14335`), and message history deletion (`#14297`).
3. **Native content creation** — Requests for built-in document/PDF export (`#14616`) to complement existing artifact preview.
4. **MCP (Model Context Protocol) upgrade** — Support for MCP 2026-07-28 spec and MCP Apps in daemon WebShell (`#8968`).
5. **Larger input/attachment support** — Higher budget for attachments and large inputs (`#14628`).

---

## 7. Developer Pain Points
1. **CI flakiness & reliability** — Recurring theme across multiple issues/PRs: Prettier fast-lane gaps (`#14596`), Java SDK lock timeouts (`#14566`), flaky managed-agent and CLI tests (`#14492`, `#14595`, `#14406`, `#14598`).
2. **Desktop crash & recovery gaps** — Orphaned daemons after crashes (`#14600`), blank preview states (`#14594`), split-view empty panes (`#14576`), and nested scrollbar UI glitches (`#14620`).
3. **Terminal / Web Shell UX defects** — Word-wrap orphans in static mode (`#14075`), VP alignment issues (`#9305`), and visual inconsistencies.
4. **Managed-agent edge-case failures** — Writer lease conflicts after Harness restarts (`#14591`), recovery blocks from overlapping reconcile runs (`#14538`), and unbounded session storage growth (`#13184`).
5. **Dependency / environment confusion** — User surprise at built-in crawler/ripgrep dependency and fallback behavior (`#14537`), highlighting a need for clearer documentation of bundled tools.
6. **Windows release infrastructure** — Blocking need for code-signing certificate provisioning for CUA releases (`#14539`).

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*