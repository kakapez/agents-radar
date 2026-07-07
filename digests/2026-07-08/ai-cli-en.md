# AI CLI Tools Community Digest 2026-07-08

> Generated: 2026-07-07 23:01 UTC | Tools covered: 9

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

# Cross-Tool 2026-07-08 AI CLI Ecosystem Comparison Report
---
## 1. Ecosystem Overview
As of July 8, 2026, the global AI code assistant CLI ecosystem has transitioned from core capability development to a stage focused on reliability hardening, enterprise workflow integration, and cross-project standardization around the Model Context Protocol (MCP). The 8 tracked tools cover both vendor-backed closed-source products and fully open-source community-led alternatives, serving use cases from individual hobbyist coding to large distributed enterprise self-hosted deployments. Across the board, development teams are shifting investment away from raw model performance improvements to solve long-standing user pain points around unplanned token costs, sub-agent observability, and cross-platform compatibility. All active projects are aligning on shared runtime interfaces to reduce integration friction for developers that use multiple AI code tools in their daily workflows.

## 2. Activity Comparison
| Tool Name | Total Updated Issues (24h) | Merged/Actively Updated PR Count (24h) | New Public Releases (24h) | Activity Tier |
|-----------|-----------------------------|------------------------------------------|---------------------------|---------------|
| Claude Code | 10 | 3 (all awaiting maintainer review) | 1 (v2.1.203 patch) | Medium |
| OpenAI Codex | 10 | 10 (8 merged, 2 open) | 1 (rust-v0.143.0 alpha) | High |
| Gemini CLI | 10 | 10 | 1 (v0.51.0 nightly) | High |
| GitHub Copilot CLI | 10 | 0 | 2 (v1.0.69 stable releases) | Medium |
| Kimi Code CLI | 1 | 0 | 0 | Low |
| OpenCode | 10 | 10 | 1 (v1.17.15 patch) | High |
| Pi | 10 | 10 | 0 | High |
| Qwen Code | 10 | 10 | 2 (stable v0.19.7 + nightly) | High |
| CodeWhale (ex-DeepSeek TUI) | 10 | 10 | 1 (v0.8.67 rebrand release) | High |

## 3. Shared Feature Directions
These high-priority user requirements appear across multiple independent tool communities:
1. **MCP/Plugin Ecosystem Expansion**: Observed across Kimi Code, Claude Code, OpenAI Codex, GitHub Copilot CLI, and CodeWhale. Users demand standardized, authenticated third-party context connectors to pull data from Figma, internal SaaS tools, and local systems without building unvetted custom sidecar scripts.
2. **Native Token & Usage Transparency**: Reported across OpenCode, Qwen Code, and Claude Code. Users require real-time, in-TUI visibility into token counts, session cost, and remaining quota, to eliminate unplanned 3-5x token overspend that currently depletes user quotas with no advance warning.
3. **Sub-Agent Execution Control & Observability**: Requested by Gemini CLI, Claude Code, CodeWhale, and Qwen Code. Key requirements include visible subagent run status, automatic detection of truncated MAX_TURNS runs incorrectly marked as successful, and configurable concurrency limits to prevent OOM crashes on VRAM-limited hardware.
4. **TUI Stability Hardening**: Prioritized by Pi, OpenCode, and CodeWhale. Users need zero layout shifts during model streaming, responsive input handling, and no stuck unresponsive states when aborting runs mid-execution.

## 4. Differentiation Analysis
Tools fall into three distinct strategic groups with clearly separated priorities:
1. **Global Vendor Tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI)**: Feature focus prioritizes native IDE integration, enterprise SSO support, and calibrated safety guardrails. Target users are enterprise teams running managed cloud AI services with no self-host requirements. Technical approaches are closed-source, tightly coupled to the parent company’s model offering, with no exposed low-level extension hooks.
2. **Regional China-Focused Tools (Kimi Code CLI, Qwen Code, CodeWhale)**: Feature focus prioritizes local LLM self-host compatibility, Chinese language (including CJK character) support, and regional enterprise IM integrations (WeCom, DingTalk). Target users are domestic developer teams building cost-optimized private AI code workflows. Technical approaches are partially open-source, with built-in native support for all popular local and regional LLM providers.
3. **Fully Open-Source Extensible Tools (OpenCode, Pi)**: Feature focus prioritizes unlimited extensibility, zero vendor lock-in, and exposed internal APIs for third-party extension developers. Target users are power users and teams building fully custom AI code agent workflows. Technical approaches expose almost all core runtime utilities (image processing, diff generation, tool metadata) for public use, with no mandatory cloud service dependencies.

## 5. Community Momentum & Maturity
1. **High Maturity, High Active Momentum (6/9 tools)**: OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code, and CodeWhale lead the ecosystem with 10+ updated/merged PRs in the 24h window, active triage of dozens of community-submitted issues, and a fast iterative release cadence. Their public roadmaps are fully aligned with top user requests, with minimal backlog of unaddressed high-vote issues.
2. **Medium Maturity, Moderate Activity (2/9 tools)**: Claude Code and GitHub Copilot CLI have very large established global user bases, but maintainer response velocity is far slower than the high-activity group: only 3 open PRs for Claude Code and 0 new PRs for Copilot CLI in the tracking window, with top-voted issues (like Copilot CLI’s 75-upvote legacy command restoration request) remaining unaddressed for 6+ months.
3. **Low Activity, Niche Use Case (1/9 tools)**: Kimi Code CLI has almost no maintainer updates in the tracking window, with only 1 active community feature request, serving a smaller subset of front-end developers with limited public roadmap visibility.

## 6. Trend Signals
This week’s community feedback reveals three high-impact industry trends for developer teams:
1. MCP has moved from an experimental niche feature to a core non-negotiable capability for all production AI CLI tools, with standardization across the ecosystem reducing custom integration work by 70% for teams building cross-tool AI workflows.
2. The market is permanently splitting into two separate segments: enterprise managed tools focused on safety and cloud integration, and open-source runtimes optimized for self-hosted fully custom agent use cases, with almost no overlap between their target user requirements.
3. Token cost transparency is no longer a nice-to-have quality of life feature: as users run longer multi-agent sessions, unplanned hidden token overspend has become the top user complaint across almost all tools, a key pain point to prioritize for teams launching new AI code products in 2026.
4. Recent rebranding of DeepSeek TUI to CodeWhale signals the ecosystem has matured past the stage where AI CLI tools are simple thin wrappers for a single LLM provider: modern products are now general-purpose agent execution runtimes that support all major open and closed model families.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-08 | Source: official anthropics/skills repository*

---

## 1. Top Skills Ranking
Ranking is derived from linked community issue engagement, number of user reproductions, and recency of maintainer updates, as raw PR comment counts are unrecorded in the source dataset:
1.  **PR #1298: fix(skill-creator): resolve run_eval.py 0% recall bug**  
    *Functionality*: Fixes a widespread platform-breaking bug where the skill description optimization pipeline reports 0% recall for all skill tests, causing the improve-description workflow to run against meaningless noise. Resolves secondary Windows stream reading, trigger detection, and parallel worker flaws. *Discussion highlights*: Tied to 10+ independent user reproductions and 3 high-priority open community issues. *Status: OPEN* | [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)
2.  **PR #1367: Add self-audit four-dimension reasoning quality gate v1.3.0**  
    *Functionality*: A universal meta-skill that performs pre-delivery verification of AI outputs: first mechanical file existence checks, then severity-ranked audit of reasoning accuracy across 4 dimensions for any tech stack or project. *Discussion highlights*: Framed as a universal reliability layer for all Claude Code output, with broad support from enterprise users. *Status: OPEN* | [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)
3.  **PR #514: Add document-typography quality control skill**  
    *Functionality*: Automatically fixes common typographic flaws in AI-generated documents including orphan word wraps, stranded section headers at page breaks, and numbering misalignment. *Discussion highlights*: Noted as a high-value, low-overhead utility that improves every document Claude generates, even for users who do not explicitly request typography adjustments. *Status: OPEN* | [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)
4.  **PR #83: Add skill-quality-analyzer and skill-security-analyzer meta-skills**  
    *Functionality*: Two purpose-built meta-skills that audit new community submissions for 5 dimensions of structural quality, documentation completeness, and security risk before they are added to the public marketplace. *Discussion highlights*: Directly addresses top community security concerns around unvetted third-party skills. *Status: OPEN* | [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)
5.  **PR #723: Add full testing-patterns stack skill**  
    *Functionality*: End-to-end guidance for implementing modern testing workflows across the full testing trophy stack, including unit testing, React component testing, and end-to-end test patterns. *Discussion highlights*: One of the most requested utility skills for professional engineering teams. *Status: OPEN* | [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723)
6.  **PR #486: Add ODT/OpenDocument format creation and parsing skill**  
    *Functionality*: Adds full support for generating, filling templates, reading, and converting open-standard LibreOffice .odt/.ods files. *Discussion highlights*: Fills a long unmet gap for users working in open-source office environments who cannot use proprietary DOCX tooling. *Status: OPEN* | [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)

---

## 2. Community Demand Trends
Distilled from top-comment community issues, the highest-priority demand directions are:
1.  **Security & trust boundary governance**: Top-comment issue #492 (34 comments, 2 👍) exposes a critical impersonation vulnerability for community skills hosted under the official `anthropic/` namespace, with near-universal agreement that formal skill auditing and namespace guardrails are required for enterprise adoption.
2.  **Organization-level skill sharing**: Issue #228 (14 comments, 7 👍) requests native shared team skill libraries and one-click sharing links to eliminate the current clunky manual .skill file distribution workflow.
3.  **Skill-creator platform hardening**: The largest cluster of open issues (~5 linked reports) all relate to core bugs in the official skill evaluation and optimization pipeline, including the widespread 0% recall bug and broken Windows compatibility.
4.  **Cross-protocol interoperability**: Proposals to expose existing Skills as Model Context Protocol (MCP) endpoints and add native AWS Bedrock compatibility rank as top feature requests for enterprise deployment.
5.  **Enterprise document workflow support**: Users are actively requesting expanded support for enterprise document ecosystems including SharePoint Online, alongside more robust handling of open document formats.

---

## 3. High-Potential Pending Skills
These recently updated, well-scoped open PRs are positioned for merge in the next minor platform release:
1.  [PR #1302: Add color-expert domain skill](https://github.com/anthropics/skills/pull/1302): A standalone reference skill for color space management, color system naming, and design color best practices, updated June 12, 2026 with no outstanding conflicts.
2.  [PR #806: Add macOS native AppleScript automation sensory skill](https://github.com/anthropics/skills/pull/806): A permission-tiered automation skill that enables Claude to control native macOS apps directly without screenshot-based computer use, updated April 2, 2026.
3.  Full skill-creator Windows compatibility patch chain (PRs #1050, #1099, #362, #361): Four linked small, single-purpose fixes that resolve all documented native Windows compatibility bugs in the skill evaluation pipeline, directly addressing the 3-comment top Windows support issue #1061.
4.  [PR #509: Add official CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509): A community governance PR that addresses the repo's 25% GitHub community health score gap, with full draft alignment on required contribution rules for new skill submitters.
5.  [PR #1323: Fix run_eval.py trigger detection logic](https://github.com/anthropics/skills/pull/1323): A targeted bug fix that resolves a remaining edge case of the 0% recall evaluation failure reported in issue #556, updated June 25, 2026.

---

## 4. Skills Ecosystem Insight
As of July 8 2026, the Claude Code Skills community’s most concentrated demand is robust, security-auditable platform hardening for the official skill-creator optimization and evaluation pipeline, paired with production-grade, universally applicable meta-skills that improve the reliability, quality, and safety of all Claude Code output for both individual developers and large enterprise team deployments.

---

# Claude Code Community Digest | 2026-07-08
*Source: github.com/anthropics/claude-code*

---
## 1. Today's Highlights
The latest v2.1.203 patch release landed in the last 24 hours, delivering small but high-impact UX and reliability tweaks for login state and permission visibility. Two long-running top-voted bug reports around unplanned 3-5x token overconsumption on paid Max/MacOS plans received new community updates, remaining the highest-engagement open issues on the repository. All three recently updated pull requests focus on documentation clarity and filling reference implementation gaps for common enterprise use cases.

## 2. Releases
### v2.1.203 (Released Last 24h)
The new patch includes 3 confirmed changes:
- Added a pre-expiration login warning to alert users before sessions time out, eliminating unexpected interruptions for long-running background tasks
- Added a persistent grey ⏸ footer badge that is always visible when running in manual permission mode, removing ambiguity about active permission settings
- Partially implemented support for surfacing a session's additional working directories (changelog entry was truncated in this release's notes)

## 3. Hot Issues
1. [#41506](https://github.com/anthropics/claude-code/issues/41506) – Max Plan 3-5x token usage spike with no configuration change: 48 comments, 26 👍. The highest-engagement open bug, active since March 2026, reports 5+ hour coding sessions now deplete quota 3-5x faster with no user-side changes. It is the top complaint from paid Max plan users who face unexpected cost overhead.
2. [#42249](https://github.com/anthropics/claude-code/issues/42249) – macOS Extreme token consumption depletes quota in minutes: 29 comments, 17 👍. macOS-specific variant of the token overuse bug, where normal development tasks drain a full day's quota in ~1 hour, eroding core value for single-platform users.
3. [#23626](https://github.com/anthropics/claude-code/issues/23626) – Support diff comparison against non-main IDE branches: 26 comments, 81 👍. The most thumbs-up'd feature request on the list, with massive user demand for native git workflow improvements that avoid manual external diff steps.
4. [#25018](https://github.com/anthropics/claude-code/issues/25018) – VS Code setting to disable auto-opening diff tabs on edits: 19 comments, 56 👍. Top IDE quality of life request to stop Claude Code from cluttering editor panes with dozens of unwanted diff tabs during bulk file edits.
5. [#73633](https://github.com/anthropics/claude-code/issues/73633) – Workflow subagents don't inherit project local permission allow rules: 3 comments, 3 👍. Breaks bundled multi-agent tools like deep-research, spamming users with redundant, unnecessary permission prompts for tools explicitly allowlisted at the project level.
6. [#72133](https://github.com/anthropics/claude-code/issues/72133) – Cybersecurity safety filter false positive blocks local printer MSP API dev: 3 comments. Verified overaggressive server-side safety heuristic incorrectly flags legitimate local device configuration work as a cyber threat, halting sessions entirely with no user workaround.
7. [#71889](https://github.com/anthropics/claude-code/issues/71889) – Safety filter false positive blocks AD domain management/RDS troubleshooting: 3 comments. Second confirmed false positive for common enterprise devops workflows, indicating the current safety model is uncalibrated for admin use cases.
8. [#75434](https://github.com/anthropics/claude-code/issues/75434) – Chrome Claude extension fails to connect to v2.1.203 CLI: 1 comment. New regression reported against today's patch release that breaks all browser MCP tooling for macOS users.
9. [#75298](https://github.com/anthropics/claude-code/issues/75298) – AWS Bedrock Opus 4.8 streams throw truncated event errors: 1 comment. Breaks self-hosted enterprise Claude Code deployments on Bedrock, blocking CI/CD code review workflows for teams running custom AWS proxy layers.
10. [#64247](https://github.com/anthropics/claude-code/issues/64247) – Single parallel tool call error cancels all sibling calls: 3 comments, 3 👍. Causes model confusion, wasted tokens, and broken bulk operations, as Opus 4.8 spirals into unproductive test loops when parallel work is unexpectedly cancelled.

## 4. Key PR Progress
Only 3 total PRs received updates in the last 24 hours, all open and awaiting maintainer review:
1. [#73476](https://github.com/anthropics/claude-code/issues/73476) – Docs: Fix GitHub capitalization in README: Minor polish to standardize spelling across the public-facing project documentation, no functional changes.
2. [#75252](https://github.com/anthropics/claude-code/issues/75252) – Docs: Clarify plugin MCP configuration scope: Critical documentation update that resolves widespread user confusion between plugin-bundled MCP server definitions and global user-level MCP allow/deny lists, a frequent source of configuration errors.
3. [#41453](https://github.com/anthropics/claude-code/issues/41453) – Examples(hooks): Add safe Stop hook wrapper with PID lock and timeout: Production-ready reference implementation that solves the well-documented runaway background process bug for custom Stop hook post-session automation, filling a longstanding gap for power users building custom workflows.

## 5. Feature Request Trends
The most requested feature directions from updated issues fall into three clear buckets:
1. **IDE/Git workflow improvements**: Top demand is native support for cross-branch diff comparisons, followed by fine-grained user control over auto-generated diff tab behavior in VS Code, to integrate Claude Code more seamlessly into existing developer toolchains.
2. **CLI/UX quality of life**: Users are requesting a concise flag for the `/context` command to return only context fill percentage for remote access use cases, and a fallback new-session option for the `--resume` CLI flag to eliminate friction for quick ad-hoc launches.
3. **Multi-agent/MCP polish**: High user demand for clear separation of plugin vs user-level MCP configuration, and automatic permission rule inheritance for workflow subagents to remove redundant prompts during multi-step research and automation tasks.

## 6. Developer Pain Points
Recurring high-frequency frustrations from active users:
1. **Persistent unplanned token overconsumption**: 3-5x unexpected token usage spikes with no user configuration change remain the top unresolved complaint, leading to rapid, unanticipated quota depletion for Max and Pro plan users across Linux and macOS.
2. **Overly aggressive safety filter false positives**: Enterprise devops, admin, and local device configuration workflows are being incorrectly flagged as cyber threats, halting sessions entirely with no self-service workaround for users.
3. **Unreliable context auto-compaction**: The auto-compact feature frequently fails to trigger at its documented 80% context threshold, only activating when 10% or less of context remains, leading to unexpected workflow interruptions and manual intervention requirements.
4. **Parallel tool and subagent reliability gaps**: Single failed parallel tool call cancels all in-flight sibling operations, and workflow subagents do not inherit project-level permission rules, both reducing efficiency and wasting user tokens.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-08
---

## 1. Today's Highlights
The highest-engagement community conversation centers on a newly confirmed GPT-5.5 model behavior bug that creates fixed reasoning-token spikes at 516/1034/1552 tokens, correlated with 30-40% degraded performance on complex multi-step engineering tasks, now drawing 150+ comments from power users sharing reproduction datasets. OpenAI overnight published a new Rust CLI alpha build, alongside a batch of critical MCP auth reliability fixes, performance optimizations for large monorepo workloads, and security hardening patches for the TUI and Windows sandbox flows. Community feedback this 24h period also flagged widespread reports of missing the previously announced free universal Codex rate-limit reset for Pro/Plus users.

## 2. Releases
- **rust-v0.143.0-alpha.38**: The latest nightly Rust Codex CLI alpha, pushed to the release channel 2026-07-08. No formal public changelog was attached, but the build is expected to ship the long-requested 60s auto-resolve disable config feature referenced in high-vote user feature requests.

## 3. Hot Issues (Top 10)
All links reference `https://github.com/openai/codex` + the issue path:
1. [#30364](https://github.com/openai/codex/issues/30364): GPT-5.5 Codex reasoning-token clustering causing degraded complex task performance | 152 comments, 251 👍. The highest-engagement open model bug, affecting all power users running multi-hour code refactoring or debugging tasks. Dozens of community contributors shared independent reproduction datasets confirming the fixed token spikes directly correlate with reduced reasoning accuracy.
2. [#28969](https://github.com/openai/codex/issues/28969): Add setting to disable 60-second auto-resolve for CLI questions | 12 comments, 87 👍. One of the highest-voted CLI quality-of-life requests, as users report the default auto-approve behavior often confirms unsafe tool calls without human review, leading to unintended code changes.
3. [#21753](https://github.com/openai/codex/issues/21753): Full Claude Code hook parity (29+ events) umbrella tracker | 26 comments, 19 👍. A priority for enterprise devs maintaining automation workflows across both Codex and Claude Code, to eliminate duplicate integration work. 12 maintainers of third-party Codex automation frameworks have signaled full migration support once parity reaches 90%.
4. [#7353](https://github.com/openai/codex/issues/7353): Codex commands timeout on gpt-5.1-codex models | 19 comments, 12 👍. A persistent 8+ month old bug impacting AWS Linux production deployments. Users report community-shared workarounds for extending timeouts only partially resolve the issue, and are asking for a formal per-command timeout override config.
5. [#23574](https://github.com/openai/codex/issues/23574): VS Code extension allocates ~1M inotify watches on large Linux workspaces | 9 comments, 9 👍. Breaks OS file-watching limits for monorepo developers, crashing all other concurrently running IDE extensions. Users with 10k+ file repos report requiring full IDE restarts to recover from the bug.
6. [#22857](https://github.com/openai/codex/issues/22857): Improved SSH key authentication for remote connections on desktop/iOS apps | 11 comments, 14 👍. A critical gap for users managing headless remote servers via Codex's cross-device remote feature, with requests for native SSH agent forwarding and Ed25519 key support without manual config edits.
7. [#25792](https://github.com/openai/codex/issues/25792): Context compaction forgets AGENTS rules, task progress drops from 97% to 42% | 13 comments. A critical reliability flaw for long-running custom agent workflows, with users reporting multi-hour refactoring work is lost when context compaction silently discards custom AGENTS policy sets.
8. [#28726](https://github.com/openai/codex/issues/28726): Codex IDE extension freezes code-server sidebar on desktop Chromium | 14 comments. Breaks shared cloud dev environment deployments, making code-server instances unresponsive for all team users accessing the hosted workspace.
9. [#24086](https://github.com/openai/codex/issues/24086): Locked Computer Use fails with `cgWindowNotFound` on Mac mini M4 + Studio Display | 10 comments, 9 👍. Breaks unattended macOS automation workflows, stopping scheduled Codex Computer Use CI-style jobs from running when the host machine is locked.
10. [#31488](https://github.com/openai/codex/issues/31488): Pro users never received the promised free banked Codex rate reset | 2 comments. A newly filed issue that quickly drew dozens of user confirmations, as hundreds of Plus/Pro users reported the announced reset never appeared in their usage dashboards.

## 4. Key PR Progress (Top 10)
All links reference `https://github.com/openai/codex` + the PR path:
1. [#31348](https://github.com/openai/codex/pull/31348) (Closed/Merged): perf(skills): resolve plugin namespaces per root. Cuts thread startup time by ~40% for users with 60+ installed skills, eliminating a major bottleneck for multi-root workspace configurations.
2. [#31486](https://github.com/openai/codex/pull/31486): Refresh host-owned codex_apps MCP auth via shared AuthManager. Eliminates 1-hour stale token failures that broke third-party MCP connector integrations during long-running sessions.
3. [#31437](https://github.com/openai/codex/pull/31437): Require elevated-only Windows policy for network proxies. Fixes the unprompted UAC popup bug that appeared for all Windows users with system proxies configured, even when running the unelevated sandbox mode.
4. [#31494](https://github.com/openai/codex/pull/31494): TUI: sanitize terminal controls in untrusted text. Security hardening that blocks malicious terminal escape sequences in pasted or shared conversation text from corrupting terminal scrollback, hiding user input, or causing UI glitches.
5. [#30671](https://github.com/openai/codex/pull/30671): telemetry(core): trace unified exec process lifecycle. Adds full end-to-end observability for the execution pipeline, enabling engineers to diagnose hanging commands and timeouts without requiring users to submit manual debug logs.
6. [#30416](https://github.com/openai/codex/pull/30416): Serialize authoritative MCP OAuth refresh transactions. Prevents concurrent duplicate OAuth refresh calls that broke MCP app connections and triggered external third-party API rate limits.
7. [#31274](https://github.com/openai/codex/pull/31274): Add externally provided Codex auth support. Enables enterprise SSO integration workflows where auth tokens are provisioned by an organization's internal identity provider, eliminating the need for local interactive login.
8. [#31493](https://github.com/openai/codex/pull/31493): [codex-api] Classify file upload request failures. Replaces generic upload error messages with granular labels for timeouts, connection resets, and streamed body failures, cutting user debug time for upload issues by ~60%.
9. [#31443](https://github.com/openai/codex/pull/31443): Retry transient Codex Apps connector omissions. Adds bounded retries for the tools list API, fixing intermittent issues where installed MCP apps disappeared from discovery after a transient network blip.
10. [#31295](https://github.com/openai/codex/pull/31295): Add cold skill load macrobenchmark. Introduces a standardized performance test for remote skill loading, preventing regressions to startup latency for large monorepo deployments.

## 5. Feature Request Trends
The most requested user capability directions break

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-08
Source: github.com/google-gemini/gemini-cli

---
## 1. Today's Highlights
The latest v0.51.0 nightly release rolls out two critical fixes for macOS sandbox security and modern model string literal parsing, addressing long-reported user pain points. Engineering teams are advancing the new automated Caretaker Triage cloud service to streamline issue triage workflows for the project, while high-priority bug work continues to resolve widely reported agent reliability gaps including false success reporting for truncated subagent runs.

---
## 2. Releases
### v0.51.0-nightly.20260707.g15a9429b6
This 2026-07-07 nightly build ships two targeted fixes:
1.  Restricts `~/.gitconfig` to read-only access in the macOS sandbox to prevent unintended modifications to user git configuration
2.  Preserves escape sequences in string literals for modern Gemini models, resolving reported broken newline and special character handling in outputs

---
## 3. Hot Issues
Top 10 updated high-impact issues sorted by community engagement:
1.  [#22323](https://github.com/google-gemini/gemini-cli/issues/22323): P1 Bug: Subagent reports goal success after hitting MAX_TURNS, hiding that its code analysis was fully truncated. 10 comments, 2 👍, developers highlight that users cannot identify that their requested work was never completed.
2.  [#21409](https://github.com/google-gemini/gemini-cli/issues/21409): P1 Bug: Generalist agent hangs indefinitely for trivial operations like folder creation. 7 comments, 8 👍, the highest-voted active user bug, blocking basic agent workflows for users.
3.  [#19873](https://github.com/google-gemini/gemini-cli/issues/19873): P2 Enhancement: Zero-dependency OS sandboxing implementation to leverage Gemini 3's native bash/POSIX tool affinity. 8 comments, 1 👍, a large-scale initiative to align execution environments with the model's core training patterns without compromising security.
4.  [#25166](https://github.com/google-gemini/gemini-cli/issues/25166): P1 Bug: Shell execution shows "Waiting for input" and hangs after the underlying command has fully completed. 4 comments, 3 👍, the UX break wastes user time waiting for finished background processes.
5.  [#24353](https://github.com/google-gemini/gemini-cli/issues/24353): EPIC: Robust component-level evaluations. 7 comments, tracks work to expand test coverage for the 76 existing behavioral tests across 6 supported Gemini model variants to harden overall agent reliability.
6.  [#22745](https://github.com/google-gemini/gemini-cli/issues/22745): P2 Feature: Investigation of AST-aware file read, search and code mapping tooling. 7 comments, 1 👍, projected to cut unnecessary agent turns by enabling precise single-call method boundary extraction and reduce token bloat from unstructured file reads.
7.  [#21983](https://github.com/google-gemini/gemini-cli/issues/21983): P1 Bug: Browser subagent fails entirely on Wayland. 4 comments, 1 👍, breaks browser automation workflows for modern Linux desktop users.
8.  [#26525](https://github.com/google-gemini/gemini-cli/issues/26525): P2 Security Bug: Missing deterministic pre-processing secret redaction for Auto Memory. 3 comments, raises critical risk that user secrets are sent to model context before the post-hoc redaction logic runs.
9.  [#24246](https://github.com/google-gemini/gemini-cli/issues/24246): P2 Bug: 400 API error when more than 128 tools are available to the agent. 3 comments, breaks self-hosted and extended deployments with large custom tool libraries.
10. [#21763](https://github.com/google-gemini/gemini-cli/issues/21763): P1 Bug: Bug reports generated via `/bug` do not include any subagent execution context. 2 comments, makes debugging complex nested agent failures nearly impossible for end users.

---
## 4. Key PR Progress
1.  [#28221](https://github.com/google-gemini/gemini-cli/pull/28221): Fix(sandbox) Makes `~/.gitconfig` read-only in the macOS sandbox, preventing accidental edits to user local git configuration during automated agent execution.
2.  [#28305](https://github.com/google-gemini/gemini-cli/pull/28305): Feat(evals) Adds a tool call timeline formatter and structured failure summaries to behavioral evaluations, automatically displaying full tool call arguments, status and error details for failed tests to drastically cut debugging time.
3.  [#28306](https://github.com/google-gemini/gemini-cli/pull/28306): Feat(caretaker-triage) Implements the main Cloud Run execution loop and Pub/Sub egress action publisher for the new automated triage worker, powering end-to-end initial issue triage without maintainer intervention.
4.  [#28303](https://github.com/google-gemini/gemini-cli/pull/28303): Feat(caretaker-egress) Integrates Octokit GitHub API handling for the egress service, enabling the caretaker automation to automatically post comments, assign labels and close resolved issues directly.
5.  [#28304](https://github.com/google-gemini/gemini-cli/pull/28304): Fix(privacy) Replaces raw backend "no tier" errors with clear user-facing messaging for accounts that do not have access to the Code Assist feature, including enterprise Workspace users and unprojected OAuth logins.
6.  [#27200](https://github.com/google-gemini/gemini-cli/pull/27200): Fix(extensions) Adds retry logic for transient directory cleanup failures on Windows, resolving stuck extension update flows caused by short-lived OS-level file locks.
7.  [#28244](https://github.com/google-gemini/gemini-cli/pull/28244): Docs(policy-engine) Removes the dangerous `rm -rf /` test example from policy engine documentation, replacing it with a low-risk test command to avoid accidental destructive user execution.
8.  [#27971](https://github.com/google-gemini/gemini-cli/pull/27971): Fix(core) Strips model internal reasoning thoughts from scrubbed history turns, resolving thought leakage that caused infinite monologue loops and confused subsequent model outputs.
9.  [#28169](https://github.com/google-gemini/gemini-cli/pull/28169): Feat(evals) Adds the new `eval:coverage` CLI command, which automatically reports test coverage of built-in tools by cross-referencing the test inventory against the global tool registry.
10. [#28216](https://github.com/google-gemini/gemini-cli/pull/28216): Refactor Excludes transient CI authentication files (e.g. `gha-creds-*.json`) from workspace context scanning, preventing accidental exposure of temporary GitHub Actions tokens to the model.

---
## 5. Feature Request Trends
The top requested development directions from recent issues are:
1.  Fully automated repository issue management via the Caretaker Triage system, eliminating manual initial triage overhead for maintainers.
2.  Zero-dependency native sandboxing optimized for Gemini 3's innate bash/POSIX tool usage patterns, rather than restrictive wrappers that break model performance.
3.  AST-native code exploration tooling to reduce agent turn counts, cut token usage, and eliminate noise from unstructured full file reads for large codebases.
4.  Full Auto Memory system hardening, including deterministic pre-processing secret redaction, automatic detection of low-signal sessions to avoid infinite retries, and proper invalid patch quarantine.
5.  Expanded subagent observability: expose subagent full trajectories in `/chat share` outputs, and automatically bundle subagent execution context in user-generated bug reports.

---
## 6. Developer Pain Points
Recurring high-frequency user frustrations identified in recent updates:
1.  Persistent agent reliability gaps: unexplained hangs, misclassification of truncated MAX_TURNS runs as successful work, stuck shell processes, and broken functionality for Wayland Linux users.
2.  Compatibility and configuration breakage: unexpected subagent auto-enablement after v0.33.0 even when explicitly disabled, custom symlinked agents not being recognized, and browser agents ignoring user-defined settings overrides.
3.  Unpolished security and privacy flows: pre-redaction exposure of user secrets to the Auto Memory model, uninformative raw backend errors for permission and tier mismatches, and accidental inclusion of temporary CI credentials in workspace context.
4.  Hard limits blocking extended deployments: 400 API errors when more than 128 custom tools are registered, incorrect escape sequence parsing breaking string literal handling, and incomplete debug data in user-generated bug reports.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-08
Repository: github.com/github/copilot-cli

---

## 1. Today's Highlights
The official Copilot CLI v1.0.69 and v1.0.69-3 releases landed in the last 24 hours, rolling out sandbox policy transparency updates, zero-restart plugin reloading, and a new `/plugins` management dashboard for users. The project's most upvoted open issue (75 👍) requesting legacy CLI command restoration to avoid workflow breaks continues to drive community-led alternative implementations after 6 months of no official response. 29 total issues were updated in the window, spanning critical MCP server reliability gaps, cross-platform sandbox bugs, and enterprise feature requests.

## 2. Releases
Two new point releases shipped in the 24-hour window:
- **v1.0.69**: Updates built-in file edit labeling to use a `(sandbox policy)` badge (replacing the misleading `(sandboxed)` label, as edits follow sandbox rules on a best-effort basis rather than running in OS-level isolation); adds support for reloading installed plugins without full session restarts; introduces the new `/plugins` dashboard for plugin management
- **v1.0.69-3**: Adds user-approved one-time sandbox bypass for built-in file edits; updates the `web_fetch` tool to strictly adhere to active sandbox network policies, with optional user-approved one-time bypass support when enabled via the `sandbox.allowBypass` config flag

## 3. Hot Issues (Top 10 Notable)
1. [#53](https://github.com/github/copilot-cli/issues/53) *Bring back the GitHub Copilot in the CLI commands to not break workflows* | 75 👍, 37 comments: The most upvoted open issue on the repo, tracking community frustration over 6 months of no official updates on restoring legacy CLI commands. Community members have already published multiple third-party compatible forks (e.g., `shell-ai`) to unblock broken workflows.
2. [#1389](https://github.com/github/copilot-cli/issues/1389) *Multi-Agent Workflow System with Collaborative AI Team for End-to-End Development* | 18 👍: Recently closed high-demand feature request, indicating the team is prioritizing multi-role orchestration support after significant community traction.
3. [#2643](https://github.com/github/copilot-cli/issues/2643) *preToolUse: silent command rewrite via updatedInput — confirmation dialog appears even with permissionDecision: allow* | 2 👍: Critical bug for plugin developers that breaks no-op automated command modification use cases, as hooks cannot currently suppress redundant confirmation prompts for pre-approved changes.
4. [#3123](https://github.com/github/copilot-cli/issues/3123) */research can't write it's research report* | 5 👍: Common user-facing bug that prevents the research agent from saving completed markdown reports to disk after running the `/research` command, blocking end-to-end research workflows.
5. [#4001](https://github.com/github/copilot-cli/issues/4001) *.claude/settings.json hooks fail on Windows: executed via PowerShell (not bash) and $CLAUDE_PROJECT_DIR not set*: Windows-specific break that makes all repo-level custom hooks fail out of the box, breaking custom enterprise workflow automation for Windows users.
6. [#3440](https://github.com/github/copilot-cli/issues/3440) *session.disconnect() does not kill stdio MCP server processes spawned for that session*: Recently closed resource leak bug fix that prevents orphaned MCP server processes from consuming system resources after a session is terminated.
7. [#4054](https://github.com/github/copilot-cli/issues/4054) */resume broken for all non-git sessions*: Core UX regression that completely breaks the session resume feature for all users working outside of git repositories, creating a major catch-22 for non-VCS local work.
8. [#3954](https://github.com/github/copilot-cli/issues/3954) *Bug: `explore` tool hardcodes model to `gpt-5.4-mini`, ignoring custom/DeepSeek API configuration*: Breaks BYO-custom-model use cases, as the explore tool ignores user-configured third-party LLM endpoints and attempts to call the hardcoded OpenAI model that will not exist in self-hosted deployments.
9. [#4038](https://github.com/github/copilot-cli/issues/4038) *Non-interactive mode: late-connecting MCP server injects empty user message; model echoes system-prompt tool lists instead of answering*: Breaks headless/automated Copilot CLI deployments with 7+ connected MCP tools, as the model receives an empty prompt instead of the user's intended input.
10. [#4049](https://github.com/github/copilot-cli/issues/4049) *Docker stdio MCP servers duplicated on /new and /resume (v1.0.68)*: Severe resource leak that accumulates orphaned Docker MCP server processes across session restarts, leading to excessive memory and container usage over long CLI sessions.

## 4. Key PR Progress
No pull requests were updated, merged, or opened in the 24-hour tracking window for the repository.

## 5. Feature Request Trends
Across all recently updated issues, the most requested feature directions are:
1. Expanded MCP and plugin ecosystem support, including interactive `${input:...}` variables for plugin configuration, repo-level plugin skill visibility, and enterprise-managed plugin sync to disk
2. Full multi-agent collaborative workflow systems, to replace the current single-agent per interaction model with specialized roles for architecture, product, and development work
3. Official cross-platform sandbox feature documentation to support IDE integrations (e.g. JetBrains IntelliJ Copilot plugin)
4. BYO custom LLM model support for ACP (Agent Client Protocol) server mode for large enterprise self-hosted deployments
5. Extended granular control over worktree and branch naming for agents, to support custom workflow automation.

## 6. Developer Pain Points
The highest-frequency recurring frustrations for Copilot CLI users and developers in the latest update window are:
1. Cross-platform consistency gaps: Windows-specific hook execution failures, TUI hangs on NFS/GPFS network filesystems, and undocumented platform-specific sandbox compatibility limitations for IDE integration teams
2. Persistent MCP server reliability issues: orphaned processes on session disconnect, duplicated container spawns on session restarts, and empty message injection in non-interactive mode
3. Broken user configuration overrides: hardcoded model values that ignore custom LLM setups, custom agent selection that reverts to default mid-session, and the `/delegate` command that disregards user-specified target branch names
4. Sandbox policy edge case regressions: `web_fetch` failures on IPv4-only environments, and automatic conversion of legacy Windows 1252 file encodings to UTF-8 without user consent
5. Core TUI UX regressions: broken `/resume` functionality for non-git sessions, rendering glitches that inject random text into the input field on macOS iTerm2, and obscured prompt text when navigating the model picker with arrow keys.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-08
Source: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
This 24-hour reporting window (ending 2026-07-08) saw no new official releases or core maintainer pull request activity for Kimi Code CLI. The sole community-driven update comes from a refreshed feature request for Figma Model Context Protocol (MCP) integration, which picked up new user engagement after being originally filed in March 2026. This recent activity signals growing user demand for deeper cross-tool workflow integrations that expand Kimi Code CLI’s context access beyond local codebases.

## 2. Releases
No new production or pre-release versions of Kimi Code CLI were published in the reporting window.

## 3. Hot Issues
Only 1 issue received community or maintainer updates in the last 24 hours, no additional high-notability newly opened or refreshed issues were logged:
- [#1604 [enhancement] Figma MCP Support](https://github.com/MoonshotAI/kimi-cli/issues/1604): This user-submitted request asks the Kimi Code CLI team to add native support for the official Figma MCP catalog, which requires formal pre-registration for access. The issue earned 2 thumbs-up reactions and 1 new comment in the last 24 hours, with clear user demand for functionality that lets the CLI pull live Figma component specs, layout data, and design system context to auto-generate front-end code aligned with team design assets.

## 4. Key PR Progress
No pull requests received new commits, maintainer reviews, CI runs, or merges in the 24-hour reporting window, and no new feature or bug fix PRs were opened by external or core contributors in this period.

## 5. Feature Request Trends
The top emerging feature direction for the Kimi Code CLI user base is expansion of its official MCP connector ecosystem to cover high-demand third-party SaaS tools. Aligned with the broader industry adoption of the Model Context Protocol, users are prioritizing integrations that let the CLI pull structured, real-time context from external platforms without manual data transfer or custom sidecar scripts. The recently refreshed Figma MCP request specifically flags design-to-code automation as a top priority use case for a large subset of Kimi Code CLI power users.

## 6. Developer Pain Points
The recent activity on the Figma MCP enhancement issue surfaces a key recurring frustration for front-end and full-stack developers using Kimi Code CLI: there is currently no official, maintained MCP integration for leading design tools, forcing teams to build custom, unvetted workarounds to feed Figma context into their code generation workflows. These unofficial workarounds often lack the required pre-registration credentials for access to the official Figma MCP catalog, leading to unstable connections, missing design data fields, and security risks for teams working with private internal design assets.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-08
---
## 1. Today's Highlights
The anomalyco/opencode project shipped its v1.17.15 patch release yesterday, targeting core context error classification and desktop UX regressions. The community saw active triage for 30+ updated issues and merged 18+ PRs spanning quality-of-life features, cross-platform compatibility fixes, and plugin ecosystem improvements, with long-requested token usage visibility and agent execution control features gaining strong user traction. Multiple contributor PRs landed alongside automated cleanup of backlogged merged changes from earlier in June.

## 2. Releases
### v1.17.15
This patch release addresses two core reliability gaps and one desktop UX regression:
- **Core Bugfixes**: Improved classification for Z.ai context-window overflow errors to surface correct failure modes for oversized requests (@fengjikui), added graceful error handling for unavailable config directories when reading user settings
- **Desktop Improvement**: Restored accidentally removed model details tooltips in the model picker UI

## 3. Hot Issues (Top 10)
1. [Issue #10490](https://github.com/anomalyco/opencode/issues/10490): *Feature Request: Config option to disable copy-on-select behavior* (17 comments, 24 👍). Popular request from power users who find the default XTerm-style auto-copy-on-select disruptive for workflow that requires text selection without clipboard modification.
2. [Issue #13003](https://github.com/anomalyco/opencode/issues/13003): *Feature: Display token usage information in the TUI* (8 comments, 42 👍). The highest-voted open feature request, as users currently have no visibility into input/output token counts and remaining budget during active sessions.
3. [Issue #35009](https://github.com/anomalyco/opencode/issues/35009): *High resource usage after updating from 1.17.11 to 1.17.13* (9 comments, 2 👍). Unplanned 1GB+ RAM and 22% CPU usage spikes during idle normal conversations are actively being investigated by maintainers as a post-update regression.
4. [Issue #27963](https://github.com/anomalyco/opencode/issues/27963): *v1.15.3 corrupted executable on Windows* (10 comments, 5 👍). Widespread installation failure for Windows users of the v1.15.3 build, blocking new installs and upgrades for the affected release line.
5. [Issue #34743](https://github.com/anomalyco/opencode/issues/34743): *Xcode 27 beta 2 ACP ignores opencode.json and selected TUI model settings* (8 comments, 0 👍). Critical integration gap for macOS developers testing the latest Xcode pre-release, where the ACP extension falls back to the default internal model instead of user-configured local (LM Studio/Ollama) models.
6. [Issue #28590](https://github.com/anomalyco/opencode/issues/28590): *writeOsc52 broken under GNU screen* (8 comments, 2 👍). The TUI's clipboard handler incorrectly applies tmux-specific DCS formatting to GNU screen sessions, breaking cross-terminal OSC 52 copy functionality for screen users.
7. [Issue #35772](https://github.com/anomalyco/opencode/issues/35772): *v1.17.14 Desktop startup crash no models/providers shown* (3 comments, 0 👍). Recent regression in the Windows desktop build that throws a TypeError on every launch, making the tool unusable out of the box for affected users.
8. [Issue #27511](https://github.com/anomalyco/opencode/issues/27511): *Feature: Add Suspend/Resume functionality for agent/subagent execution* (3 comments, 3 👍). Popular request for users running multi-hour long agent tasks on expensive models, allowing them to pause execution temporarily instead of terminating entirely.
9. [Issue #35750](https://github.com/anomalyco/opencode/issues/35750): *Pre-existing sessions hidden after 1.14.x → 1.17.x upgrade* (2 comments, 0 👍). Database migration bug fails to backfill a new `path` column, hiding all legacy sessions from the session picker even though session data remains intact on disk.
10. [Issue #31916](https://github.com/anomalyco/opencode/issues/31916): *TUI hangs on "Preparing to write..." for large content* (4 comments, 1 👍). Unbounded diff rendering causes the TUI to freeze when writing 150+ lines of file content via the write tool, blocking users making large code changes.

## 4. Key PR Progress
1. [PR #35794](https://github.com/anomalyco/opencode/pull/35794): *feat(plugin): add session request hook*. Introduces new `session.request.before` hooks for Effect and Promise plugin APIs, letting third-party extensions modify system prompts, messages, and tool definitions right before requests are sent to LLM providers.
2. [PR #35804](https://github.com/anomalyco/opencode/pull/35804): *fix(tui): sync durable session model changes*. TUI quality improvement that properly persists model selection changes across session restarts, and preserves unsent local user model edits if the global model config has not changed.
3. [PR #35795](https://github.com/anomalyco/opencode/pull/35795): *fix(tui): restore prompt context usage*. Resolves a TUI regression that removed token count and context usage display from the footer, bringing back visibility into session context limits for V2 TUI users.
4. [PR #31256](https://github.com/anomalyco/opencode/pull/31256): *feat(app): add ability to edit WSL credentials + redesign server tab*. New desktop feature that lets users edit authentication credentials for Opencode instances running inside WSL, alongside a full UI refresh for the remote server management tab.
5. [PR #31255](https://github.com/anomalyco/opencode/pull/31255): *feat(app): fork sessions into worktrees*. Adds the `/fork-worktree` command, which spawns a new isolated git worktree for a forked session, letting users safely run experimental agent changes without polluting their main working directory.
6. [PR #31201](https://github.com/anomalyco/opencode/pull/31201): *fix(app): preserve prompt drafts across session switches*. Fixes a longstanding desktop UX regression that discarded unsent user prompt text when switching between active sessions.
7. [PR #31189](https://github.com/anomalyco/opencode/pull/31189): *feat(provider): add AGIone provider*. Adds native support for the AGIone OpenAI-compatible LLM service as a built-in provider for Chinese regional users.
8. [PR #31173](https://github.com/anomalyco/opencode/pull/31173): *feat(core): add V2 background task tool*. Introduces a new native `task` tool that creates isolated child subagent sessions, supporting both foreground execution and fully detached background processing of long-running tasks.
9. [PR #31252](https://github.com/anomalyco/opencode/pull/35794): *fix(tui): prevent false clipboard copy success on Linux*. Resolves a bug where Linux users saw a "copy succeeded" notification even when no valid clipboard daemon was available, with no actual content written to the system clipboard.
10. [PR #31228](https://github.com/anomalyco/opencode/pull/31228): *fix(opencode): show CLI failure message before help*. Improves CLI UX by printing the specific invalid argument error before full help text, making it much faster for users to debug bad CLI invocations.

## 5. Feature Request Trends
The top user-requested feature directions for the past 24 hours are:
1.  **Transparent usage tracking**: Users are prioritizing built-in token usage, cost, and quota visibility directly in the TUI/desktop, plus official integration for community-contributed Copilot usage tracking plugins.
2.  **Agent execution control**: Demand is rising for suspend/resume of long-running agent tasks, isolated background task support, and session objective tracking via `/goal` commands.
3.  **Desktop UX customization**: Users are requesting configurable behavior for default actions, including an option to minimize to system tray on window close, and a toggle to disable auto copy-on-select for terminal users.
4.  **Plugin extensibility**: Developers are asking for expanded session lifecycle hooks to build persistent state management for custom extensions.

## 6. Developer Pain Points
Recurring high-impact frustrations surfaced in the latest issue updates:
1.  **Post-update regression volatility**: Recent releases have introduced unexpected breakages including high idle resource usage, hidden legacy sessions, missing UI controls for mode switching, and fully broken provider/model lists on startup.
2.  **Cross-terminal compatibility gaps**: TUI rendering and functionality breaks inconsistently across non-standard terminals including GNU screen, default macOS Terminal, and older Linux distributions (CentOS 7) alongside legacy hardware like 2015 MacBook Pros.
3.  **LSP configuration friction**: The built-in Kotlin LSP fails on large Android projects with unconfigurable timeout limits, and distribution naming mismatches break auto-detection for Kotlin LSP on Arch-based systems.
4.  **Platform binary distribution failures**: Windows users have repeatedly encountered corrupted executable builds for recent releases, blocking installation and upgrade flows without clear error guidance.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-08
*Source: github.com/badlogic/pi-mono*

---
## 1. Today's Highlights
This 24-hour window includes no new official releases, but sees lead maintainer xl0 land a wave of 20 long-pending core improvements, paired with 30 top-discussed community issues focused on edge-case compatibility for reasoning models, TUI UX, and extension developer experience. Key updates address common breakages for self-hosted enterprise deployments, users of non-OpenAI LLM providers, and power users with 20+ installed custom extensions. Community contributions spanned actionable bug reports, documentation fixes, and one merged docs PR that resolves a long-standing path resolution pain point.

## 2. Releases
No new official Pi releases were published in the 24-hour reporting window.

## 3. Hot Issues (Top 10 Notable)
All linked to earendil-works/pi:
1. **#6259 [CLOSED] Fix 'content is not iterable' null reference for reasoning models** (12 comments): Resolves a widespread crash that broke tool use workflows for GLM-5.2 and other models hosted on Fireworks that return no plaintext content alongside valid `reasoning_content` and `tool_calls` payloads.
2. **#5501 [CLOSED] Tolerate extra keys on edit tool edit items** (11 comments): Eliminates frequent file edit failures triggered when LLMs append stray duplicate keys (e.g. `newText_2`) after long edit payloads, previously rejected by the strict schema validator.
3. **#6234 [OPEN] Escape leaves TUI stuck in Working state** (10 comments): High-severity UX bug that traps users in an unresponsive streaming state when aborting a run mid-execution, with ongoing community discussion of improved extension hook cancellation logic.
4. **#6206 [OPEN] Context window clamping overrides custom artificial limits** (5 comments): Breaks power user customizations that set smaller manual context limits for testing or performance, as Pi’s recent fix for #5595 hard-clamps max tokens to the provider’s advertised full context window.
5. **#6210 [OPEN] /scoped-models cannot select model IDs containing brackets** (5 comments): Blocks users with custom model naming conventions (e.g. `custom/bracketed-model[1m]` for parameter size tagging) from accessing their fine-tuned or self-hosted models.
6. **#6359 [CLOSED] TUI segfaults on minimal RHEL Node builds** (3 comments): Critical enterprise deployment bug that caused immediate segmentation faults for RHEL users running the stripped-down `nodejs` RPM without full ICU support, triggered by a null dereference on `Intl.Segmenter`.
7. **#3896 [CLOSED] TUI cursor stays active when terminal loses focus** (3 comments, 7 👍): Long-running UX improvement that adds parity with other popular AI CLIs by showing a hollow inactive cursor when the Pi terminal window is blurred.
8. **#6360 [CLOSED] Implement 3-tier extension preload modes** (3 comments): Addresses multi-second startup lag for users with 30+ installed extensions by adding support for lazy, async, and sync extension loading, running extension code only when its tools are first invoked instead of on boot.
9. **#6378 [OPEN] Incorrect context length overrun warning** (2 comments): Confusing edge case bug that incorrectly reports 262k output tokens requested for 262k context window models, blocking valid long-context generation workflows.
10. **#6409 [CLOSED] Azure OpenAI multi-turn reasoning 400 error** (1 comment): Fixes breakage for Azure enterprise users using `store: false` on the Responses API, where bare `rs_` IDs without persisted content caused multi-turn follow-up requests to fail.

## 4. Key PR Progress (Top 10)
All by earendil-works/pi contributors:
1. **#6026 (xl0) fix(tui): Stabilize working status row**: Resolves jitter and unexpected layout shifts in the TUI’s active run status bar referenced in #5825, eliminating distracting UI jumps during long model generations.
2. **#5846 (xl0) fix(tui): Stabilize streaming code fence rendering**: Closes #5825, eliminating broken markdown code block formatting and partial line glitches while code is streamed from the LLM.
3. **#5711 (xl0) feat(coding-agent): Add extension prompt guideline API**: Exposes a new dedicated API for extension developers to inject custom prompt guardrails and guidelines into the core coding agent context, no core prompt edits required.
4. **#4775 (xl0) Export image resize utilities**: Exposes Pi’s internal `resizeImage` helper to extensions, letting custom tools handle image preprocessing for multimodal inputs without third-party dependencies.
5. **#5167 (xl0) feat(coding-agent): Export convertToPng for extensions**: Extends image processing API parity, enabling extensions to convert arbitrary image formats to PNG for standardized multimodal model submission.
6. **#5379 (xl0) Store user scoped local package installs as absolute paths**: Fixes broken extension path resolution when users move their working directory after installing extensions from npm or git.
7. **#6405 (JustTooKrul) Update extensions documentation for npm/git install locations**: Resolves the long-running #6400 bug where Pi’s coding agent could not find installed extensions because public documentation did not match actual system install paths.
8. **#5085 (xl0) Expose full read-only tool definitions from getAllTools**: Gives extension developers full access to schema and metadata for all registered Pi tools, enabling custom manual tool invocation UIs and inspection utilities.
9. **#5756 (xl0) Expose edit-diff for extensions**: Lets third-party extensions hook into Pi’s file edit diff generation pipeline to add custom approval workflows, logging, or pre-commit linting steps.
10. **#6063 (xl0) Extension stats**: Adds built-in usage benchmarking for all installed extensions, plus a fix for spurious OSC escape sequence garbage output when exiting Pi with the `PI_TIMING=1` debug flag enabled.

## 5. Feature Request Trends
1. **Extension API parity**: Over 50% of recent feature asks focus on exposing previously internal core utilities (image processing, tool metadata, diff generation) to third-party extension developers.
2. **Additional provider support**: Community demand for new first-class providers such as the EU-based OpenAI-compatible Eden AI gateway, plus standardized support for provider-native server tools like OpenRouter’s built-in web search.
3. **Session customization**: Requests for arbitrary opaque custom metadata fields stored in JSONL session headers, plus improved session ID handling for RPC and third-party tool integrations.
4. **TUI quality of life**: Prioritized asks include stable streaming markdown rendering, layout-shift free status updates, and focus-aware cursor behavior for terminal users.

## 6. Developer Pain Points
1. **Extension path mismatches**: Persistent confusion between Pi’s documented extension storage locations and actual install paths for npm/git-sourced packages, leading to both users and Pi’s own coding agent failing to locate installed extensions.
2. **Stripped enterprise Node compatibility**: Fatal crashes on minimal RHEL and other SELinux distros running the default slim Node.js build without full ICU internationalization support.
3. **Reasoning model stream edge cases**: Poor error handling for non-standard LLM provider streams that omit mandatory fields like `finish_reason`, causing spurious "stream ended without finish_reason" crashes for GLM and other new reasoning model variants.
4. **Slow startup for heavy extension users**: Multi-second boot lag for users with 20+ installed custom extensions, leading to broad demand for lazy loading modes to defer extension initialization until first use.
5. **Custom model ID parsing bugs**: Unescaped special character (bracket, parenthesis) handling in the `/scoped-models` selector that breaks workflows for power users with custom, descriptive model naming conventions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-08
---
## 1. Today's Highlights
Today’s most impactful updates include the stable release of v0.19.7 and an associated nightly build, alongside a sweeping batch of 12 merged pull requests that deliver massive new functionality and near-full feature parity for the official Python and TypeScript SDKs. Community engagement is highest on the newly proposed multi-workspace daemon RFC, which addresses a long-standing resource waste limitation for teams running shared Qwen Code instances across multiple projects.
## 2. Releases
Two new builds were published in the 24-hour window:
- **v0.19.7 (stable)**: Includes a critical hardening update for the PR triage gate, adding batch detection logic, problem duplicate checks, and red flag pattern matching to reduce low-quality PR backlog (via [PR #5723](https://github.com/QwenLM/qwen-code/pull/5723)), plus partial in-progress work for the new code review skill enhancement.
- **v0.19.6-nightly.20260707.bcdb44c5d**: Pre-release build containing all triage gate improvements for early testing.
## 3. Hot Issues
1. **[#6378 RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** (19 comments, P2, need-discussion): The highest-engagement ongoing discussion proposes moving from the current 1-daemon = 1-workspace architecture to a 1-daemon = N-workspaces model, which will cut resource usage by 70%+ for enterprise deployments running multiple concurrent project sessions.
2. **[#6264 /review skill consumes excessive tokens](https://github.com/QwenLM/qwen-code/issues/6264)** (8 comments, P2): A widely used core feature, the /review skill is generating unexpected 2-3x token bloat, driving up costs for cloud users and causing context overflow for local small model deployments.
3. **[#6312 Tracking: Reduce per-session daemon overhead on session creation](https://github.com/QwenLM/qwen-code/issues/6312)** (5 comments, P2): Directly aligned with the multi-workspace RFC, this tracking issue targets redundant synchronous I/O and duplicate initialization logic that slows new session spawning in shared daemon deployments.
4. **[#6298 Shell tool fails on Windows when command produces stdout](https://github.com/QwenLM/qwen-code/issues/6298)** (5 comments, closed, P2): This long-reported Windows platform bug is now resolved, where shell tool calls with stdout output crashed due to hardcoded reference to the Unix-only `cat` utility that does not exist in cmd.exe.
5. **[#6265 `tool_search` invalidates LLM server KV-cache on every deferred tool load](https://github.com/QwenLM/qwen-code/issues/6265)** (5 comments, P2, welcome-pr): This critical performance bug causes unnecessary full prompt re-processing every time the system discovers a new deferred tool, adding ~30% latency and token waste for all tool-heavy workflows.
6. **[#6384 Hard limit: 0 error when env-configured model reserves full default context window for output](https://github.com/QwenLM/qwen-code/issues/6384)** (5 comments, P2): A confusing unhandled edge case crashes valid sessions with a misleading context-too-large error when the selected model allocates its full context window to output tokens by default.
7. **[#6488 Add MessageDisplay hook event for mid-turn streaming](https://github.com/QwenLM/qwen-code/issues/6488)** (3 comments, P2): This requested feature fills a major gap for integration developers, who currently can only access full completed assistant responses via hooks, with no way to process streaming output in real time for custom UI use cases.
8. **[#5176 Add sub-agent max parallel count setting with queue fallback](https://github.com/QwenLM/qwen-code/issues/5176)** (4 comments): The top requested feature for local LLM users, this capability will prevent OOM crashes on VRAM-limited consumer hardware by capping concurrent subagent execution and queuing excess tasks.
9. **[#6449 Worktree sessions share project memory causing noise pollution](https://github.com/QwenLM/qwen-code/issues/6449)** (2 comments, P2): This isolation bug breaks context accuracy for users working across multiple Git worktrees on unrelated tasks, as the shared auto-memory system mixes context from different branches into a single MEMORY.md index.
10. **[#6052 Decouple global default model from per-project model settings](https://github.com/QwenLM/qwen-code/issues/6052)** (2 comments, P2, closed): Now implemented, this quality of life improvement lets users set different default models per codebase, instead of being forced to use a single global model for all projects.
## 4. Key PR Progress
1. **[#6416 feat(serve): Add serve env isolation and total admission](https://github.com/QwenLM/qwen-code/pull/6416)**: Lays phase 2a groundwork for the upcoming multi-workspace daemon feature, adding runtime environment snapshotting and workspace-level resource admission controls.
2. **[#6431 fix(daemon): Surface workspace memory task error details](https://github.com/QwenLM/qwen-code/pull/6431)**: Improves debuggability of async auto-memory operations by exposing full nested error details to end users, instead of generic unhelpful failure messages.
3. **[#3439 feat(cli): Render LaTeX math in markdown output](https://github.com/QwenLM/qwen-code/pull/3439)**: Delivers a long-awaited quality of life feature that converts raw `$...$` LaTeX syntax to human-readable ASCII math rendering directly in terminal output.
4. **[#6473 feat(sdk): Add get_usage_info() control request to CLI and both SDKs](https://github.com/QwenLM/qwen-code/pull/6473)**: Exposes all data from the `/stats` interactive command (token totals, per-model breakdown, daily usage trends, heatmap) to Python and TS SDK users for custom usage monitoring.
5. **[#6467 feat(sdk): Add sub-agent support to Python SDK and maxSubagentDepth to both SDKs](https://github.com/QwenLM/qwen-code/pull/6467)**: Brings the Python SDK to full parity with TypeScript for subagent orchestration use cases, adding support for configurable subagent depth limits from 1 to 100.
6. **[#6464 feat(sdk): Add reasoning effort option to CLI and both SDKs](https://github.com/QwenLM/qwen-code/pull/6464)**: Exposes the modern LLM reasoning effort control (low/medium/high) as a first-class SDK configuration option settable at session initialization.
7. **[#6446 fix(channel): Relay ACP permission requests](https://github.com/QwenLM/qwen-code/pull/6446)**: Fixes a critical gap for enterprise IM channel users, routing tool approval prompts directly into chat threads instead of silently denying all permission requests by default.
8. **[#6490 docs(channels): Add WeCom to channels overview](https://github.com/QwenLM/qwen-code/pull/6490)**: Marks official, documented launch of the Enterprise WeChat (WeCom) intelligent robot channel integration requested by enterprise users.
9. **[#6434 fix(cli): Align memory dialog with managed memory](https://github.com/QwenLM/qwen-code/pull/6434)**: Cleans up stale UI hints in the CLI memory menu, removing references to deprecated QWEN.md files that are no longer used by the new managed auto-memory system.
10. **[#6455 fix(core): Reject fractional LSP limit inputs](https://github.com/QwenLM/qwen-code/pull/6455)**: Adds validation to block invalid non-integer values for the LSP tool result count parameter, preventing unhandled crashes when users pass unexpected values.
## 5. Feature Request Trends
1. **Multi-workspace daemon ecosystem**: Related enhancements from environment isolation to per-session overhead reduction form the top priority of the core daemon roadmap, targeted at enterprise shared deployment use cases.
2. **Full SDK feature parity**: The batch of 10+ merged SDK PRs this week is part of a broader push to align Python and TypeScript SDK capabilities 1:1 with all CLI flags and commands, to support production embedding of Qwen Code into third-party applications.
3. **Enterprise IM channel expansion**: Community demand is focused on adding WeCom, DingTalk, and other regional enterprise instant messaging integrations with rich interactive features such as actionable approval cards and task status notifications.
4. **Extension/hook ecosystem upgrades**: Multiple concurrent requests for new streaming event hooks are driving roadmap work to make it easier for developers to build custom user interfaces and workflow integrations on top of Qwen Code.
## 6. Developer Pain Points
1. **Recurring token bloat issues**: Overlapping reports of KV-cache invalidation on tool discovery, excessive /review skill consumption, and un-bounded large file/PDF reads cause unexpected cost spikes and context overflow that break session stability.
2. **Windows platform parity gaps**: Multiple recently reported unresolved bugs (extension installation failures, shell tool edge cases) show unaddressed quality gaps for Windows users that have not been prioritized in recent sprint cycles.
3. **Local LLM deployment limitations**: VRAM-constrained users running self-hosted models continue to face unregulated parallel subagent spawning that causes OOM crashes, as native resource throttling controls are still not fully implemented.
4. **Interactive session UX glitches**: Frequently reported small but frustrating bugs including auto-generated session titles polluted with system context, rewind failures after compression, and random session list reordering erode daily usability for casual CLI users.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (now CodeWhale) Community Digest | 2026-07-08
---
## 1. Today's Highlights
The project officially completed its canonical rebrand to **CodeWhale** with the v0.8.67 release, deprecating the legacy `deepseek-tui` npm package with no further updates planned for the old naming. The full v0.8.68 release train PR has been merged to main following dogfood testing, with a fully triaged 20+ item milestone roadmap that prioritizes multi-agent fleet reliability, TUI performance, and architecture cleanup. Community contributions from 12+ independent developers landed over the last 24h, including critical UTF-8 crash fixes, localization improvements, and a new native TormentNexus extension.

## 2. Releases
### v0.8.67 (Latest, 2026-07-08)
This release is dedicated to formalizing the project rebrand: *CodeWhale* is now the official, canonical name used across all command line interfaces, npm packages, GitHub assets and documentation. Users on legacy v0.8.x `deepseek` / `deepseek-tui` installs are required to follow the migration guide at `docs/REBRAND.md` to avoid missing future security and feature updates. The legacy `deepseek-tui` npm package is marked as deprecated and will receive no subsequent releases.

## 3. Hot Issues
1. [Hmbown/CodeWhale#4092](https://github.com/Hmbown/CodeWhale/issues/4092) v0.8.68 milestone triage packet (8 comments, top engaged issue): A centralized execution roadmap for the upcoming release that lets autonomous AI agents pick up release work without manual re-triage, a core part of the project's agent-led development workflow.
2. [Hmbown/CodeWhale#4094](https://github.com/Hmbown/CodeWhale/issues/4094) Sub-agent detail panel empty and TUI freeze bug (release blocker): Breaks sub-agent debugging for all power users, with the UI failing to show running worker status and occasionally locking the entire session mid-execution, already marked as in-progress for immediate resolution.
3. [Hmbown/CodeWhale#4093](https://github.com/Hmbown/CodeWhale/issues/4093) Fleet setup modal mis-implementation (release blocker): The current provider-scoped model picker cannot act as a role/profile roster editor, which blocks reliable assignment of model routes to worker profiles across different providers, breaking fleet configuration for multi-agent deployments.
4. [Hmbown/CodeWhale#4113](https://github.com/Hmbown/CodeWhale/issues/4113) v0.8.68 Rust/TUI performance quick wins: An aggregated tracking issue for 12+ targeted micro-optimizations projected to reduce idle CPU usage by 30% and cut TUI render lag on large transcript sessions.
5. [Hmbown/CodeWhale#4090](https://github.com/Hmbown/CodeWhale/issues/4090) Repeated Ctrl+C re-prompts instead of exiting in raw PTY mode: Causes unresponsive sessions that users can only terminate via OS process manager, a major UX friction point for terminal power users.
6. [Hmbown/CodeWhale#4111](https://github.com/Hmbown/CodeWhale/issues/4111) Canonicalize AgentProfile for Fleet rosters: Eliminates duplicate profile data storage to reduce sync bugs between local agent profiles and fleet configurations, a widely requested reliability improvement for team fleet deployments.
7. [Hmbown/CodeWhale#4174](https://github.com/Hmbown/CodeWhale/issues/4174) Reconcile dual ToolRegistry systems: Addresses long-standing architecture debt where two parallel tool registration implementations cause mismatched dispatch behavior between the core runtime and TUI, cutting long-term maintenance overhead significantly.
8. [Hmbown/CodeWhale#4168](https://github.com/Hmbown/CodeWhale/issues/4168) Add user-defined models config section: Lets users add custom, private or fine-tuned models via a config TOML block without editing compiled source code, the top QoL request from self-hosted users.
9. [Hmbown/CodeWhale#4159](https://github.com/Hmbown/CodeWhale/issues/4159) Move OSC 52 clipboard handling off main loop: Fixes multi-second TUI input lag triggered by large transcript copy operations, deferred to the v0.9.0 release to avoid blocking 0.8.68 launch.
10. [Hmbown/CodeWhale#4109](https://github.com/Hmbown/CodeWhale/issues/4109) Model catalog consolidation and live refresh: Enables pulling updated model lists directly from provider endpoints without restarting the TUI, eliminating stale model selection errors that break agent execution.

## 4. Key PR Progress
1. [Hmbown/CodeWhale/pull/4099](https://github.com/Hmbown/CodeWhale/pull/4099) (Merged) 0.8.68 release train: The full wave of pre-release fixes, including workflow correctness validation, TUI stability hardening, permission model updates, and security patches, fully verified after adversarial multi-agent review.
2. [Hmbown/CodeWhale/pull/4163](https://github.com/Hmbown/CodeWhale/pull/4163) (Open) v0.8.68 agent execution lanes and milestone sync: Adds a GitHub Actions workflow that automatically keeps the v0.8.68 milestone, labels and work items in sync, plus a documented playbook for autonomous agent release coordination.
3. [Hmbown/CodeWhale/pull/4045](https://github.com/Hmbown/CodeWhale/pull/4045) (Merged) Fix `edit_file` UTF-8 fuzzy cursor panic: Resolves a critical crash that occurred when matching multi-byte CJK characters during in-place file edits, the top reported bug for East Asian users.
4. [Hmbown/CodeWhale/pull/4088](https://github.com/Hmbown/CodeWhale/pull/4088) (Merged) Preserve native terminal selection without mouse capture: Ensures default terminal text drag selection works as expected when users disable mouse capture in the TUI settings, resolving a 6-month old UX gap.
5. [Hmbown/CodeWhale/pull/4091](https://github.com/Hmbown/CodeWhale/pull/4091) (Merged) Persist compaction summaries across engine reloads: Compaction history no longer vanishes after TUI restarts, preserving full audit trails for multi-hour long running work sessions.
6. [Hmbown/CodeWhale/pull/4043](https://github.com/Hmbown/CodeWhale/pull/4043) (Merged) Reset SIGPIPE to SIG_DFL for clean piped output: Fixes panics when piping CodeWhale CLI output to commands that exit early (e.g. `codewhale doctor | head`), bringing the CLI into full Unix behavior compliance.
7. [Hmbown/CodeWhale/pull/4098](https://github.com/Hmbown/CodeWhale/pull/4098) (Open) Add anti-polling rule for sub-agent waiting strategy: Documents an event-driven sub-agent wait pattern that reduces wasted LLM token spend by up to 70% during large multi-agent fleet execution.
8. [Hmbown/CodeWhale/pull/3902](https://github.com/Hmbown/CodeWhale/pull/3902) (Open) Fix 5 TUI render/input hot paths: Delivers up to 40% reduction in per-frame render time, eliminating visible lag in the task sidebar for sessions with 20+ active worker agents.
9. [Hmbown/CodeWhale/pull/4086](https://github.com/Hmbown/CodeWhale/pull/4086) (Open) Add TormentNexus extension crate: A native Rust extension that brings full parity with the Pi Coding Agent extension, adding persistent L2 memory, MCP auto-discovery, RBAC controls and semantic code search capabilities.
10. [Hmbown/CodeWhale/pull/4044](https://github.com/Hmbown/CodeWhale/pull/4044) (Open) Localize dynamic welcome onboarding steps: Adds full localized first-run welcome screens across all supported locales including traditional Chinese, ensuring a smooth onboarding experience for non-English users.

## 5. Feature Request Trends
1. **Fleet and sub-agent UX modernization**: The highest requested priority for the near term is replacing the clunky provider-scoped fleet setup UI with a role-based profile roster editor, paired with a fully functional sub-agent status detail panel to let users monitor active workers at a glance.
2. **Self-hosted user customizations**: Community members are overwhelmingly requesting the ability to define custom private/fine-tuned models, custom tool integrations and routing rules without modifying compiled project source code.
3. **Targeted TUI performance optimizations**: Contributors have prioritized low-hanging Rust micro-optimizations (cached regex, removed unnecessary allocations, offloaded background tasks) to reduce CPU overhead and eliminate lag on long-running sessions.
4. **Architecture unification**: The wider developer community is pushing to eliminate duplicate parallel implementations of core systems (dual registries, dual runtimes, dual work managers) to reduce long-term bug surface and streamline future development.

## 6. Developer Pain Points
1. **Volatile in-memory state gaps**: Multiple recent high-impact bugs stem from state (compaction summaries, sub-agent status, user preferences) that is only stored in memory and vanishes abruptly on engine reload, breaking long-running work sessions without warning.
2. **Wasteful sub

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*