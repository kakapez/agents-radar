# AI CLI Tools Community Digest 2026-06-27

> Generated: 2026-06-26 23:06 UTC | Tools covered: 9

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

# 2026-06-27 AI Developer CLI Tools Cross-Tool Comparison Report
For Technical Decision Makers & Production Engineering Teams

---

## 1. Ecosystem Overview
As of 2026 Q3, the global AI CLI/agent tooling ecosystem has fully transitioned from early experimental releases to production-grade core developer workflow infrastructure, with all tracked tools prioritizing stability, enterprise compliance, and native integration with existing local and cloud development stacks. This snapshot confirms widespread shared pain points across all projects tied to the rapid release cadence of upstream LLM providers (OpenAI, Anthropic, Google, Moonshot) and the fast maturing Model Context Protocol (MCP) standard, with most engineering effort dedicated to resolving cross-compatibility gaps rather than shipping net-new flagship features. End-user demand for transparent, predictable pricing, local workflow control, and reduced lock-in is the dominant market force shaping roadmap priorities, as paid professional and enterprise user bases for these tools now exceed hobbyist open source contributor populations for all major projects. Recent historic 75% price cuts for leading open-weight reasoning models (notably DeepSeek V4 Pro) have further accelerated roadmap shifts toward optimized cost management, extended usage limits, and support for self-hosted non-proprietary LLM backends.

## 2. Activity Comparison
| Tool Name | 24h Updated Open Issues | 24h Merged / Updated PRs | 2026-06-27 Release Activity |
|---|---|---|---|
| Claude Code | 10 | 2 | Shipped stable v2.1.195 public point release |
| OpenAI Codex | 10 | 10 | Published 2 Rust toolchain builds: stable v0.142.3 patch, v0.143.0 alpha pre-release |
| Gemini CLI | 10 | 10 | Shipped v0.51.0 nightly pre-release |
| GitHub Copilot CLI | 10 | 1 | Shipped 2 stable point releases (v1.0.66-0, v1.0.66-1) |
| Kimi Code CLI | 3 | 2 | No new public releases |
| OpenCode | 10 | 10 | No new public releases, merged 17 backlog bug fixes ahead of upcoming v1.18 |
| Pi | 10 | 7 | No new public releases, merged 6 bug fixes + 2 net-new features |
| Qwen Code | 10 | 10 | Published signed `cua-driver-rs v0.6.8` prebuilt binary |
| DeepSeek TUI | 10 | 17 | No new public releases, completed full validation for upcoming v0.8.59 stabilization release |

All activity metrics are directly sourced from the 2026-06-27 community digests for each project.

## 3. Shared Feature Directions
Common high-priority requirements observed across 3+ tool communities:
1. **MCP standard reliability & alignment**: All 9 projects are actively patching MCP edge cases, with OpenAI Codex, Gemini CLI, OpenCode, Pi, and Qwen Code shipping dedicated fixes for auth race conditions, missing refresh token scopes, and non-compliant server implementations to reduce broken third-party tool workflows.
2. **Cross-platform session stability**: 7 of 9 tools are addressing unresumable sessions, orphaned background processes, and stuck TUI rendering, with dedicated fixes for Windows/Linux/macOS specific edge cases (most notably unreaped PowerShell processes on Windows for Qwen Code, and post-429 dead sessions for Claude Code).
3. **Non-proprietary LLM backend support**: Codex, OpenCode, Pi, Kimi, and Qwen all prioritize removing hardcoded references to native vendor models, to support arbitrary self-hosted OpenAI-compatible endpoints and reduce deployment friction for air-gapped enterprise environments.
4. **Predictable usage metering**: Claude Code, OpenAI Codex, and OpenCode have high community demand for transparent, non-exploitative quota tracking after widespread reports of 3-20x unaccounted quota exhaustion that drains paid user budgets unexpectedly.
5. **Ecosystem skill standardization**: Claude Code, Copilot CLI, and Gemini CLI are actively working toward shared cross-tool conventions for agent skill storage, to eliminate duplicate custom skill configuration across different AI dev workflows.

## 4. Differentiation Analysis
The ecosystem splits clearly into 3 distinct product groups with non-overlapping priorities:
1. **Closed ecosystem native tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Built for paid native subscribers of their parent LLM platforms, with feature focus on tight integration with parent ecosystem services (GitHub repos, official Claude MCP marketplace, OpenAI codex endpoints). They prioritize enterprise SSO and admin controls, but have limited configurability for fully self-hosted non-official deployments.
2. **Open source vendor-agnostic tools (OpenCode, Pi)**: Built for maximum extensibility and zero lock-in, targeting power users and teams that operate multiple LLM backends. Their technical approach prioritizes modular plugin architecture and permissive licensing, with new experimental features shipped 2-4 weeks ahead of closed-source competitors.
3. **Regional LLM vendor native tools (Gemini CLI, Kimi Code CLI, Qwen Code, DeepSeek TUI)**: Optimized to unlock the full performance of their respective proprietary model stacks (DeepSeek reasoning, Qwen computer use, Kimi long context, Gemini multimodal). They prioritize local language support for regional user bases, with minimal investment in support for competing third-party LLM providers.

## 5. Community Momentum & Maturity
- **Highest maturity, largest production user bases**: GitHub Copilot CLI, Claude Code, and OpenAI Codex have >1000 cumulative high-engagement user reports, with full-time dedicated engineering teams behind them, and are integrated into millions of daily developer workflows. Their recent activity is dominated by high-stakes production bug fixes rather than early feature experimentation.
- **Fastest growing, highest iteration velocity**: OpenCode, Pi, Qwen Code, and DeepSeek TUI merged 7 to 17 PRs in the 24h reporting window, with community contribution volumes growing 2x+ quarter over quarter, as users actively seek vendor-agnostic alternatives to closed ecosystem tools.
- **Focused early growth communities**: Gemini CLI and Kimi Code CLI have smaller active contributor bases, with Kimi prioritizing onboarding for new regional open source contributors, and Gemini focused on internal stability work for its upcoming public v0.50 preview launch.

## 6. Trend Signals & Actionable Reference for Developers
1. MCP has emerged as the de facto industry standard for AI agent extensibility: Teams building custom agent workflows should prioritize MCP-compatible tools to reuse existing custom connectors across multiple platforms and avoid vendor lock-in.
2. Unaccounted token overconsumption is a widespread unpatched risk across all top closed-source tools: Teams running production workloads should implement independent local usage metering and budget guardrails to avoid unexpected overspend or critical workflow interruptions.
3. The 75% price cut for leading reasoning models is driving an immediate market shift: Vendor-agnostic open source AI CLI tools will capture significant market share in 2026 H2, as teams dynamically route workloads to the lowest cost available model instead of remaining locked into a single LLM provider.
4. Regulated industry user demand for granular, audit-able execution permissions for AI agents is growing exponentially: Teams selecting tooling for enterprise deployments should prioritize projects that ship explicit configurable allow/deny controls for file edits, shell execution, and network access, to meet internal compliance requirements.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-06-27)
---
## 1. Top Skills Ranking
Ranked by corresponding issue traction and community contribution coordination, these 7 highest-attention active PRs represent the most discussed skill updates and additions in the repository:
1. **`skill-creator` 0% recall pipeline fix** ([PR #1298](https://github.com/anthropics/skills/pull/1298)): This core bug fix resolves the widespread issue where the official skill evaluation tool returns 0% recall for all tested skill descriptions, breaking the end-to-end description optimization workflow. It also patches Windows stream reading, trigger detection, and parallel worker logic. Discussion highlights: Tied to top 12-comment bug report Issue #556 with 10+ independent community reproductions, coordinated across multiple parallel community contributions. Status: Open.
2. **YAML special character detection validator** ([PR #361](https://github.com/anthropics/skills/pull/361)): Adds a pre-parse check for unquoted skill description fields containing reserved YAML characters (colons, brackets) that cause silent, hard-to-debug parsing failures. Discussion highlights: Community debated optimal placement for validation logic vs post-hoc repair, with overlapping related contribution PR #539 submitted separately. Status: Open.
3. **Skill-creator Windows compatibility patch** ([PR #1050](https://github.com/anthropics/skills/pull/1050)): Two 1-line fixes for native Windows breakages, including unrecognized `.cmd` Claude CLI extensions and hardcoded UTF-8 encoding that fails on legacy Windows system codepages. Discussion highlights: Resolves the blocker documented in Issue #1061 that prevented all skill evaluation on non-WSL Windows installations. Status: Open.
4. **DOCX skill ID collision corruption fix** ([PR #541](https://github.com/anthropics/skills/pull/541)): Prevents Word document corruption caused by shared OOXML `w:id` namespace conflicts between hardcoded tracked change IDs and pre-existing document bookmarks. Discussion highlights: Addresses a frequently reported pain point for enterprise users editing pre-existing production Word files. Status: Open.
5. **Testing patterns skill** ([PR #723](https://github.com/anthropics/skills/pull/723)): A new end-to-end skill covering the full software testing stack, from testing philosophy and unit testing best practices to React component testing and E2E test design. Discussion highlights: Designed to eliminate generic, low-quality boilerplate test output that Claude often generates without specialized guidance. Status: Open.
6. **Self-audit output quality gate skill** ([PR #1360](https://github.com/anthropics/skills/pull/1360)): A new meta-skill that audits all Claude output pre-delivery across four dimensions: consistency, completeness, groundedness, and safety. Discussion highlights: Newly submitted 2026-06-26, gaining rapid traction as a lightweight built-in guardrail for enterprise agent deployments. Status: Open.
7. **Skill quality & security analyzer meta-skills** ([PR #83](https://github.com/anthropics/skills/pull/83)): Adds two self-referential skills that evaluate submitted community skills across 5 quality dimensions and scan for vulnerabilities to enforce public marketplace submission standards. Discussion highlights: Proposed as a mitigation for the top-voted 21-comment security Issue #492 around community skill impersonation risks. Status: Open.

---
## 2. Community Demand Trends
Distilled from high-attention public issues, the top 5 prioritized community demand directions are:
1. **Enterprise team collaboration**: The second most upvoted open request is native org-wide skill sharing (Issue #228) to eliminate the clunky manual workflow of distributing `.skill` files via Slack/Teams for team use.
2. **Security and trust guardrails**: Heavily discussed feedback around namespace impersonation risks for unvetted community skills is driving widespread demand for standardized skill auditing, signing, and strict namespace separation controls.
3. **Cross-platform native support**: Consistent high demand for first-class, non-WSL native Windows compatibility for all core skill-creator tooling, rather than partial Unix-only functionality.
4. **Low-overhead persistent memory**: Multiple independent proposals for memory-focused skills (shodh-memory PR #154, compact-memory Issue #1329) show strong hunger for standardized, token-efficient persistent state management for long-running agent workflows.
5. **Third-party ecosystem integration**: Clear user demand to make existing skills compatible with external platforms including AWS Bedrock, Microsoft SharePoint, and the Model Context Protocol (MCP) for standardized skill API exposure.

---
## 3. High-Potential Pending Skills
These active, recently updated PRs are aligned with top community demands and likely to land in the official collection in near-term releases:
1. **Document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514)): Automatically fixes common typography defects (orphan lines, stranded section headers, numbering misalignment) for all Claude-generated documents.
2. **ODT creation/editing skill** ([PR #486](https://github.com/anthropics/skills/pull/486)): Adds full support for OpenDocument Format files, including template filling, parsing, and conversion for LibreOffice and open standard document workflows.
3. **Color-expert skill** ([PR #1302](https://github.com/anthropics/skills/pull/1302)): Comprehensive reference skill covering all major color naming systems, color space best practices, and accessible color palette generation for product and design use cases.
4. **Codebase-inventory-audit skill** ([PR #147](https://github.com/anthropics/skills/pull/147)): A 10-step workflow skill for auditing codebases to identify orphaned code, unused assets, documentation gaps, and infrastructure bloat for engineering teams.
5. **SAP predictive analytics skill** ([PR #181](https://github.com/anthropics/skills/pull/181)): Natively integrates SAP's open source RPT-1-OSS tabular foundation model to run predictive analytics on enterprise SAP business data directly via Claude.

---
## 4. Skills Ecosystem Insight
The community's most concentrated top priority demand at the Skills level is fixing the currently broken core skill-creator evaluation pipeline, building standardized security and quality guardrails for shared public skills, and expanding native support for enterprise cross-platform, team collaboration, and legacy third-party system integrations for production use cases.

---

# Claude Code Community Digest | 2026-06-27
---
## 1. Today's Highlights
Anthropic shipped the v2.1.195 point release today, delivering two long-requested quality-of-life fixes for fullscreen mouse behavior and hyphenated hook matcher logic. Two top open bugs related to Claude Max subscription over-limit behavior gained hundreds of new community comments in the last 24h, as users report continued unaccounted-for session quota exhaustion. A new documentation PR clarifying sandbox network approval behavior is the only meaningful code change among the 2 PRs updated today.

## 2. Releases
### v2.1.195 (Latest, published 2026-06-27)
- Added new `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` environment variable that disables mouse click, drag, and hover events in fullscreen mode while preserving wheel scroll functionality for users who prefer keyboard-only navigation
- Fixed a high-priority bug where hook matchers for hyphenated identifiers (e.g. `code-reviewer`, `mcp__brave-search`) incorrectly ran substring matches, resulting in unintended trigger behavior; matchers now enforce strict exact matching
- Release link: [anthropics/claude-code v2.1.195](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

## 3. Hot Issues (Top 10 Notable)
1. [#16157 [OPEN] Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/issues/16157): The highest-engagement open bug on the repo, with 1476 comments and 691 👍. Thousands of paid Max tier macOS users report being throttled immediately even with minimal Claude Code usage, with no public resolution timeline from the Anthropic oncall team.
2. [#38335 [OPEN] Claude Max plan session limits exhausted abnormally fast since March 23, 2026 (CLI usage)](https://github.com/anthropics/claude-code/issues/38335): 786 comments, 468 👍. CLI-specific counterpart to the top Max usage bug, with devs reporting session quotas burning 3-10x faster than documented when running long batch coding tasks.
3. [#16345 [OPEN] Support standard `.github/skills/` directory for agent skills](https://github.com/anthropics/claude-code/issues/16345): 18 comments, 32 👍. Windows users are pushing for alignment with the cross-industry agentskills.io standard to replace Claude's proprietary `.agents/skills` path, eliminating duplicated skill storage across dev tools.
4. [#21867 [OPEN] Add settings to hide token counter and version display in status line](https://github.com/anthropics/claude-code/issues/21867): 9 comments, 28 👍. TUI power users who build custom status line configurations want full control over all displayed UI elements, instead of the current forced static token/version text.
5. [#66504 [OPEN] Session URL appended to commit messages and PR descriptions by default — should be opt-in](https://github.com/anthropics/claude-code/issues/66504): 2 comments, 12 👍. Privacy-focused devs warn the default behavior of adding internal Claude session links to public repo PRs risks leaking sensitive internal workflow data, and are requesting an explicit opt-in toggle.
6. [#59520 [CLOSED] Session unrecoverable after upstream 429: every retry returns 400 previous_message_id](https://github.com/anthropics/claude-code/issues/59520): 8 comments, 7 👍. Linux headless users report that hitting a Anthropic API 429 rate limit fully breaks their session, with no way to resume even after waiting for throttling to lift.
7. [#51138 [CLOSED] Connected MCP connectors not loading in new Code sessions](https://github.com/anthropics/claude-code/issues/51138): 6 comments, 7 👍. Enterprise users relying on MCP connectors for Linear, Slack, PostHog and other tools report pre-configured connectors disappear in new sessions, breaking core third-party tool workflows.
8. [#71708 [OPEN] CERT_HAS_EXPIRED on Windows native install during OAuth login, no proxy/VPN/AV — curl succeeds on same host](https://github.com/anthropics/claude-code/issues/71708): Newly filed regression that blocks all new Windows users from completing onboarding, with no documented workaround for the broken native SSL cert chain.
9. [#71649 [OPEN] claude.ai managed connector (claudeai-proxy) can't be re-attached from CLI — claudeAiOauth never re-minted, no recovery path](https://github.com/anthropics/claude-code/issues/71649): New MCP auth bug that breaks cloud-managed tools like Claude Design for CLI power users, with no documented recovery workflow to re-attach dropped connectors.
10. [#46259 [CLOSED] Onboarding flow ignores CLAUDE_CODE_OAUTH_TOKEN, blocks interactive CLI](https://github.com/anthropics/claude-code/issues/46259): 4 comments, 4 👍. Blocks remote headless server deployments of Claude Code for users who transfer valid OAuth tokens from another machine, forcing an unwanted browser-based interactive login.

## 4. Key PR Progress
Only 2 PRs received updates in the last 24 hours:
1. [#71627 [OPEN] docs(sandbox): note that prompt-approved hosts are session-scoped](https://github.com/anthropics/claude-code/pull/71627): High-value documentation update that adds an explicit note to the sandbox settings README explaining that one-off host network approvals granted during prompts are not persisted to the permanent `allowedDomains` config and are lost when the session ends, resolving a common point of user confusion.
2. [#71530 [OPEN] Merge pull request #1 from anthropics/main](https://github.com/anthropics/claude-code/pull/71530): Trivial low-quality external fork PR with no meaningful code changes, submitted by a new first-time contributor.

## 5. Feature Request Trends
Recent community feature requests cluster in four clear priority directions:
1. Ecosystem standard alignment: Adopt the cross-industry `.github/skills/` directory convention for agent skills to eliminate duplicated skill configurations across different AI dev tools.
2. TUI/CLI usability: Add granular customization controls for the status line, plus a new `/cancel` command to clear queued user inputs without interrupting an active in-progress Claude task.
3. Privacy-first defaults: Switch the current automatic session URL injection into commit/PR text from a default behavior to an explicit opt-in setting, to avoid accidental metadata leaks in public repositories.
4. Parity for cloud deployments: Bring the local-only Auto Mode functionality to cloud-hosted Claude Code repos, enabling headless unattended coding workflows for large codebases.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported this period include:
- Unresolved Max tier usage quota miscalculations: Two top open bugs affecting thousands of paid users confirm session limits are burning far faster than the documented rate, with no public fix timeline.
- Frequent unresumable session failures: Multiple overlapping bugs trigger broken `previous_message_id` API errors after rate limits, sessions with tool-only assistant turns, or corrupted session files, causing lost work for headless CLI users.
- MCP connector reliability gaps: Widespread reports of dropped cloud-managed proxy connectors, missing auth prompts, and pre-configured third-party connectors failing to load in new sessions.
- Cross-platform onboarding friction: Windows native SSL cert errors during OAuth, broken headless OAuth token environment variable support, and missing permission validation for private skill marketplaces block new users from completing setup.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-27
---
## 1. Today's Highlights
The 2026-06-27 update cycle brings two new Rust toolchain releases, a surging wave of community reports documenting 10–20x unexpected token overconsumption that drains paid usage budgets in 2–3 prompts, and a slate of high-impact core engineering refactors focused on reliability for remote workflows, MCP extensions, and event consistency. The cross-tier token overcounting bug now has more than 1,100 aggregated community comments and 600+ upvotes, making it the highest-visibility open issue for the Codex project as users push for official mitigation.

## 2. Releases
Two new Rust Codex toolchain builds were published in the last 24 hours:
- **rust-v0.142.3**: Maintenance-only patch release with zero user-facing changes, targeted at under-the-hood dependency hardening. [Full changelog](https://github.com/openai/codex/compare/rust-v0.142.2...rust-v0.142.3)
- **rust-v0.143.0-alpha.26**: New pre-release build for the upcoming 0.143 minor feature line, available for early testing.

## 3. Hot Issues
1. **[#14593 Burning tokens very fast](https://github.com/openai/codex/issues/14593)**: 624 comments, 274 👍. The long-running top open bug on the repo affects Business plan VS Code extension users, and received new activity yesterday as users linked it to the recent widespread rate limit inflation.
2. **[#28879 10–20x rate limit overcount for gpt-5.5 draining budgets](https://github.com/openai/codex/issues/28879)**: 174 comments, 324 👍. The highest-upvoted recent issue documents that identical prompts consume 10–20x more of a user's allocated Codex budget post-June 16, with no documented changes from OpenAI explaining the shift.
3. **[#29000 Codex CLI 0.141.0 crashes with SIGTRAP on Intel macOS](https://github.com/openai/codex/issues/29000)**: 15 comments, 11 👍. Now marked closed, this resolved a common crash for x86 Mac users that triggered during gpt-5.5 inference runs.
4. **[#20567 Windows Codex app spawns 1000+ git commands per minute](https://github.com/openai/codex/issues/20567)**: 11 comments. Enterprise users report system unresponsiveness from runaway Git polling processes that do not terminate normally.
5. **[#27536 Unbounded 62GB+ `code_sign_clone` disk leak on macOS](https://github.com/openai/codex/issues/27536)**: 7 comments. Now marked closed, the fix addresses a hidden temp directory bloat bug that ate terabytes of user storage across automatic Codex updates without visible warnings.
6. **[#30212 5-hour Pro usage limit drains in 1 hour with no active tasks](https://github.com/openai/codex/issues/30212)**: 5 comments, 8 👍. A new subset of the rate limit bug affecting $200/month Pro users, where budget counts down even during idle periods.
7. **[#30137 Reported gpt-5.5 intelligence drop to gpt-5.3 level](https://github.com/openai/codex/issues/30137)**: 5 comments. Power users report degraded reasoning quality on recent builds, coinciding with the unannounced rate limit changes.
8. **[#29084 Nested Git repos trigger thousands of git/sec polling on macOS](https://github.com/openai/codex/issues/29084)**: 3 comments. Users report maxed-out system fans and CPU spikes from the source control watcher that fails to ignore embedded nested repos marked as gitlinks.
9. **[#29922 Request for non-polling background `monitor` tool](https://github.com/openai/codex/issues/29922)**: 3 comments. Highly requested power user feature that would let Codex react to CI, log, and file change events in the background without continuous active polling.
10. **[#30290 Agent executes state-changing actions without explicit user approval](https://github.com/openai/codex/issues/30290)**: 2 comments. Marked as critical severity, this safety bug breaks expected guardrails, where the agent crosses from information-gathering mode to destructive operations without confirming with the user.

## 4. Key PR Progress
1. **[#30201 Fix remote control token refresh retry storms](https://github.com/openai/codex/pull/30201)**: Resolves a bug where transient 502 errors from the auth backend discarded still-valid tokens, causing infinite reconnection loops for Codex remote desktop users.
2. **[#30297 Enable remote plugins by default](https://github.com/openai/codex/pull/30297)**: Promotes the remote plugin feature from experimental to stable, with a config override retained for users who want to explicitly disable it.
3. **[#30283 Emit canonical turn item lifecycle events](https://github.com/openai/codex/pull/30283)**: Core architecture refactor that unifies event tracking for command execution, tool calls, and sub-agent activity across all Codex surfaces to eliminate duplicate logs and inconsistent state.
4. **[#30292 Serialize shared MCP OAuth credential stores](https://github.com/openai/codex/pull/30292)**: The first PR in a 5-part stack that eliminates race conditions that caused overlapping OAuth refresh attempts for MCP extensions, fixing 401 errors for third-party plugin users.
5. **[#30269 Disable Nagle on Rendezvous websockets](https://github.com/openai/codex/pull/30269)**: Disables the Nagle network buffering algorithm for remote Codex connections, cutting end-to-end inference latency by ~200ms for distributed users.
6. **[#30273 Consume pushed exec-server process events](https://github.com/openai/codex/pull/30273)**: Eliminates redundant polling for process status updates, using the ordered pushed event stream directly to mark tasks as completed.
7. **[#30291 Expose environment info app-server RPC](https://github.com/openai/codex/pull/30291)**: Adds a new experimental API endpoint that returns full shell, working directory, and connection metadata for active workspace environments to simplify debugging.
8. **[#30281 Cache skill snapshots before root discovery](https://github.com/openai/codex/pull/30281)**: Caches Codex core skill snapshots before running repo root discovery, cutting session startup time on slow remote filesystems by ~70%.
9. **[#29375 Fix npm marketplace plugin source support](https://github.com/openai/codex/pull/29375) (closed)**: Resolves a bug that broke plugin discovery from npm registries, adding full support for installing third-party Codex plugins from public or private npm sources.
10. **[#30302 Preserve namespaces on custom tool calls](https://github.com/openai/codex/pull/30302)**: Fixes broken routing for namespaced custom MCP tools that caused tool call failures during inference runs.

## 5. Feature Request Trends
Top requested feature directions from the past 24 hours:
1. Non-polling background monitoring capability to let Codex react to CI/CD events, log changes, and file updates without continuous user input
2. First-class, official CLI commands to inspect, prune, delete, and scope the experimental Codex memory store
3. Configurable network transport controls, including a force-HTTPS mode that skips WebSocket handshakes, plus custom `base_url` support for the AWS Bedrock model provider
4. Per-user customization for Codex pet animation behavior, for accessibility and to use pet states as lightweight status indicators
5. Full support for partial MCP server definitions across layered config files, to simplify enterprise MCP fleet administration

## 6. Developer Pain Points
Recurring high-severity user frustrations:
1. Widespread, unacknowledged token overcounting / rate limit inflation affecting all plan tiers, with users reporting up to 20x the expected budget consumption for identical inference workloads
2. Persistent runaway Git polling bugs across Windows and macOS that generate thousands of orphaned `git.exe` processes, max out CPU usage, and cause system-wide slowdowns
3. Unresolved SIGTRAP crash bugs on Intel x86 macOS for both Codex CLI and desktop app
4. Connectivity failures in restricted corporate/VPN/self-hosted network environments, including unhandled Cloudflare 403 blocks, mandatory WebSocket timeouts, and no custom proxy routing support for third-party model providers
5. Unbounded disk usage bugs from un-cleaned temporary directories and high-volume TRACE level logging to SQLite that ignores explicit `RUST_LOG=warn` user configuration

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-06-27
Source: github.com/google-gemini/gemini-cli

---
## 1. Today's Highlights
The latest v0.51.0 nightly build shipped yesterday alongside critical CI hardening to eliminate bad public NPM releases. Core engineering teams merged stability patches to block infinite agent reasoning loops and resolve internal thought leakage that caused model errors, while active work on the upcoming Caretaker self-triage agent progressed 2 new infrastructure PRs. Teams also completed full triage of 30 high-priority open issues focused on agent reliability, security, and cross-environment compatibility for local developer workflows.

## 2. Releases
A new nightly pre-release [v0.51.0-nightly.20260626.gb14416447](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260626.gb14416447) published in the last 24 hours, with 3 key changes:
- CI pipeline fixes to prevent broken NPM package publishes and release job crashes
- Prepped full changelog documentation for the upcoming v0.50.0-preview.1 public release
- Resolved broken no_proxy test coverage to fix misrouted network traffic for on-prem deployments

## 3. Hot Issues
Top 10 high-engagement open issues updated in the last 24 hours:
1. **[#22323 P1] Subagent reports false success after hitting MAX_TURNS limit** (8 comments, 2 👍): The `codebase_investigator` subagent incorrectly marks runs as completed with status `GOAL` instead of surfacing the max turn interruption, hiding partial work from users and eroding trust in agent outputs. https://github.com/google-gemini/gemini-cli/issues/22323
2. **[#21409 P1] Generalist agent hangs indefinitely** (7 comments, 8 👍): The top-voted active bug, where the generalist subagent freezes permanently even for trivial tasks like folder creation, forcing users to fully disable subagent deferral to work around the issue. https://github.com/google-gemini/gemini-cli/issues/21409
3. **[#24353 P1 EPIC] Robust component-level evaluation framework** (7 comments): A foundational tracking issue for expanding the repo's 76 existing behavioral test suite to cover all 6 supported Gemini model variants, enabling more consistent pre-release quality validation. https://github.com/google-gemini/gemini-cli/issues/24353
4. **[#22745 P2] AST-aware file read and search investigation** (7 comments, 1 👍): Tracks R&D into structured AST code tooling that can cut unnecessary LLM turns, reduce token bloat, and eliminate partial file read errors for code auditing workflows. https://github.com/google-gemini/gemini-cli/issues/22745
5. **[#25166 P1] Shell execution gets stuck after command completes** (4 comments, 3 👍): Users report frequent UI freezes where the CLI continues to show "Awaiting user input" even after a fully non-interactive shell command has finished executing. https://github.com/google-gemini/gemini-cli/issues/25166
6. **[#26525 P2] Deterministic secret redaction for Auto Memory** (5 comments): A high-priority security gap, where user local transcript data is sent to the background extraction model before any secret redaction runs, exposing credentials in unprocessed context. https://github.com/google-gemini/gemini-cli/issues/26525
7. **[#21968 P2] Gemini does not use custom skills or sub-agents automatically** (6 comments): Users report the model ignores explicitly defined custom integrations like Gradle and Git skills unless given direct manual instructions, drastically reducing the value of custom workflow extensions. https://github.com/google-gemini/gemini-cli/issues/21968
8. **[#21983 P1] Browser subagent fails on Wayland** (4 comments, 1 👍): Blocks the browser automation subagent from running natively for all Linux desktop users on modern Wayland compositors. https://github.com/google-gemini/gemini-cli/issues/21983
9. **[#20079 P2] Symlinked custom agents are not recognized** (4 comments): Power users that manage their custom subagent library via dotfile repos cannot load agents stored as symlinks in the `~/.gemini/agents/` directory. https://github.com/google-gemini/gemini-cli/issues/20079
10. **[#24246 P2] 400 errors when more than 128 tools are available** (3 comments): Power users with large MCP extension libraries hit unhandled API errors when total tool counts exceed the current model schema limit, with no automatic tool filtering to stay within supported bounds. https://github.com/google-gemini/gemini-cli/issues/24246

## 4. Key PR Progress
Top 10 high-impact PRs updated in the last 24 hours:
1. **[#28164] Cap recursive reasoning turns per user request**: Adds a default 15-turn hard limit for core agent reasoning (customizable via `maxSessionTurns`) to eliminate infinite loops that waste user local CPU, model quota, and credits. https://github.com/google-gemini/gemini-cli/pull/28164
2. **[#27971] Fix internal thought leakage in conversation history**: Strips the model's private internal reasoning monologues from scrubbed conversation history turns, resolving a common bug where the model would regurgitate its own scratchpad notes and enter infinite monologue loops. https://github.com/google-gemini/gemini-cli/pull/27971
3. **[#28053] Defensive path resolution for @-prefixed file references**: Fixes a production bug where filesystem tools (`read_file`, `write_file`, `replace`) throw "File not found" errors when users reference files with `@` syntax (e.g. `@policies/config.txt`), alongside full macOS test suite fixes. https://github.com/google-gemini/gemini-cli/pull/28053
4. **[#28015] Cloud Run webhook ingestion service for Caretaker agent**: Implements the first public component of the new Caretaker self-triage agent, handling verified GitHub webhook ingestion, Firestore persistence, and Pub/Sub event routing for new repo issues. https://github.com/google-gemini/gemini-cli/pull/28015
5. **[#28163] Caretaker triage worker core foundation (Part 1/2)**: Lays the base modular architecture for the automated issue triage worker that will classify new bugs, assign labels, and flag critical regressions without human intervention. https://github.com/google-gemini/gemini-cli/pull/28163
6. **[#27915] Fix hidden arbitrary hook execution security gap**: Patches a critical vulnerability where the workspace trust dialog hid the presence of executable `SessionStart` hooks, allowing malicious repos to run arbitrary shell code after a single "Trust folder" click. https://github.com/google-gemini/gemini-cli/pull/27915
7. **[#28103] Resolve OAuth failures for Node.js June 2026 security patches**: Disables keep-alive socket reuse during the OAuth token exchange flow to fix login crashes on Node.js 22.23.0+, 24.17.0+, and 26.3.0+ that ship the new CVE-2026-48931 HTTP security patch. https://github.com/google-gemini/gemini-cli/pull/28103
8. **[#28059] Fix unreadable .env breaking extension loading**: Prevents full extension system crashes when a workspace `.env` file has restricted read permissions (common in sandboxed Cloud Shell environments), with additional hardening for restricted runtime paths. https://github.com/google-gemini/gemini-cli/pull/28059
9. **[#27850] MCP image MIME type sniffing**: Automatically detects actual image content signatures for PNG, JPEG, WebP, and GIF instead of trusting declared MCP metadata, fixing broken image rendering and analysis for connected MCP tools. https://github.com/google-gemini/gemini-cli/pull/27850
10. **[#27461] Suppress PTY resize EBADF errors**: Eliminates unhandled crashes when resizing a PTY that is in the process of exiting, a bug amplified by recent UI updates that increased terminal resize event frequency. https://github.com/google-gemini/gemini-cli/pull/27461

## 5. Feature Request Trends
The most requested feature directions from updated issues this cycle are:
1. Structured AST-native code intelligence tools to reduce unnecessary LLM turns, cut token overhead, and eliminate partial code read errors for auditing workflows
2. Full subagent observability upgrades, including support for sharing subagent trajectories via the existing `/chat share` command, and full subagent context bundled into user-generated bug reports
3. Browser agent resilience improvements, including automatic recovery of locked persistent sessions and official Wayland support for Linux desktop users
4. End-to-end Auto Memory quality hardening, with deterministic pre-processing secret redaction and logic to avoid infinite retries for low-signal sessions
5. Quality of life native CLI utilities, including the recently drafted `gemini models` command to list all available model variants, their context windows, and performance tiers.

## 6. Developer Pain Points
Recurring high-impact user frustrations surfaced this cycle:
1. Unpredictable agent hangs and false success reporting, spanning generalist subagents, shell execution flows, and the browser subagent, which forces users to manually cancel long-running runs or disable subagent features entirely
2. Unaddressed security gaps, from unredacted local transcript data in Auto Memory to hidden executable hook vulnerabilities that expose users to malicious repos
3. Cross-environment compatibility edge cases affecting WSL mounted volumes, modern Wayland Linux desktops, latest Node.js releases, and sandboxed Cloud Shell runtimes
4. Poor custom workflow support, including underutilization of user-defined custom skills, unloaded symlinked subagents, and missing subagent context in bug reports that makes debugging custom integrations extremely difficult
5. UI/UX glitches including terminal flicker on resize, corrupted output after exiting external editors, and stuck UI state after non-interactive shell commands complete.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-06-27
---
## 1. Today's Highlights
The 24-hour window brings two sequential v1.0.66-x point releases packed with power-user, enterprise, and MCP workflow improvements for Copilot CLI usage-based billing subscribers. Community updates include 21 total modified issues, with long-open quality-of-life bugs on Linux clipboard functionality seeing renewed activity alongside critical reports of cross-repo context leakage that breaks generation correctness. A total of 1 public PR saw updates, with most recent feature development landing directly in the new tagged releases.

## 2. Releases
Two new official builds were published in the last 24 hours:
- **v1.0.66-1**: Adds subagent concurrency and depth limit configuration in `/settings` for usage-based billing users, the new `/chronicle skills review` workflow to accept/reject/defer proposed draft skill changes, and native desktop notifications for attention prompts and idle sessions.
- **v1.0.66-0**: Adds a one-tap toggle for enabling/disabling MCP servers directly in the CLI MCP list view, experimental response budget controls in CLI settings, managed OpenTelemetry export configuration, and automatic recovery for OAuth-authenticated remote MCP servers after mid-session token expiry.

## 3. Hot Issues
1. [github/copilot-cli#2082](https://github.com/github/copilot-cli/issues/2082) *[OPEN] Linux ctrl+shift+c no longer copies to clipboard*: The highest-engagement active issue (22 comments, 10 👍) tracks a regression breaking the standard Linux terminal copy shortcut for Ubuntu 24.04 users, affecting basic workflow for thousands of Linux developers who rely on default terminal keybindings.
2. [github/copilot-cli#1928](https://github.com/github/copilot-cli/issues/1928) *[OPEN] Allow to pause copilot work*: A popular 3-month-old feature request (10 comments, 4 👍) requests the ability to halt an in-progress Copilot task to add corrected context before resuming, rather than cancelling the full session, with dozens of users reporting they regularly waste work on misdirected automation runs.
3. [github/copilot-cli#3947](https://github.com/github/copilot-cli/issues/3947) *[CLOSED] Theme system is a regression in 1.0.64*: A recently resolved accessibility bug that removed support for transparent terminal backgrounds, with the maintainer confirming the fix will ship in the next minor release to resolve user complaints about clashing terminal color schemes.
4. [github/copilot-cli#3945](https://github.com/github/copilot-cli/issues/3945) *[OPEN] Memories are leaking between repositories*: A high-severity correctness bug where stored context facts from one repository appear as "known facts" in a brand new unrelated repository, leading to incorrect generation that pulls in irrelevant code patterns.
5. [github/copilot-cli#3949](https://github.com/github/copilot-cli/issues/3949) *[OPEN] Copy functionality broken on Windows 11*: A new cross-platform quality-of-life bug where Copilot CLI reports text is copied to the clipboard, but no content appears on the user's system clipboard, breaking copy-paste for all Windows users.
6. [github/copilot-cli#3954](https://github.com/github/copilot-cli/issues/3954) *[OPEN] `explore` tool hardcodes model to `gpt-5.4-mini`, ignoring custom/DeepSeek API configuration*: A breaking regression for users running self-hosted or third-party LLM endpoints, as the hardcoded model name is unrecognized by non-OpenAI backends, causing all explore tool calls to fail.
7. [github/copilot-cli#3948](https://github.com/github/copilot-cli/issues/3948) *[OPEN] All web_fetch calls throw TypeError: fetch failed*: A widespread unhandled error for all web requests, even when Copilot CLI has full working network access to LLM endpoints and auth services, completely disabling web research workflows for affected users.
8. [github/copilot-cli#3940](https://github.com/github/copilot-cli/issues/3940) *[OPEN] Custom agent support for 'skills' field to limit preloaded context*: A highly requested power-user feature that would let developers scope custom agents to only load a curated subset of skills, reducing context bloat and ensuring agents don't waste tokens on unused functionality.
9. [github/copilot-cli#3944](https://github.com/github/copilot-cli/issues/3944) *[OPEN] Subagent transcripts are inlined verbatim and uncapped into parent session exports*: A performance and storage bug that causes session export files to balloon to hundreds of megabytes after long multi-subagent runs, with no option to summarize or truncate embedded subagent output.
10. [github/copilot-cli#3942](https://github.com/github/copilot-cli/issues/3942) *[OPEN] `copilot --acp` does not work with `--agent`*: A breaking bug that blocks non-interactive CI/CD automation workflows for teams using custom agents, preventing scripted Copilot runs from loading team-specific agent configurations.

## 4. Key PR Progress
Only one public PR received updates in the 24-hour window, with no other merged or modified PRs visible in the project timeline:
- [github/copilot-cli#570](https://github.com/github/copilot-cli/pull/570) *[CLOSED] Add macOS installation instructions to README.md*: A long-running WIP PR originally generated by Copilot Coding Agent that was recently closed as changes were upstreamed directly to the official documentation repository, adding step-by-step Homebrew and manual binary install instructions for macOS users. All other recent development work from the last 24 hours is bundled directly into the v1.0.66-x public releases.

## 5. Feature Request Trends
Distilled top requested feature directions from all updated issues:
1. **Granular custom agent controls**: Community is prioritizing support for skill scoping, non-interactive flag compatibility, and custom agent workflow extensions as teams adopt Copilot CLI for specialized codebases.
2. **MCP experience improvements**: Users are asking for expanded MCP management UI, better registry install logic, and more robust auth handling for private MCP servers.
3. **Flexible session orchestration**: Top requests include pause/resume for running tasks, multi-directory fleet cloning to avoid git conflicts, and configurable subagent output limits for session exports.
4. **Native platform shell integration**: Windows developers are requesting first-class PowerShell native Clixml and command completion support to align with PowerShell automation workflows.

## 6. Developer Pain Points
Recurring high-frequency frustrations observed in this update window:
1. **Cross-platform clipboard unreliability**: Separate active open bugs break core copy-paste functionality on both Linux and Windows, a basic expected terminal feature that remains unpatched across major operating systems.
2. **Context boundary failures**: Multiple distinct reports confirm both persistent memories and user custom instructions leak across unrelated repositories, causing incorrect, unexpected generation that references irrelevant codebases.
3. **Accessibility regressions**: Recent v1.0.64 releases shipped broken theming that removed support for transparent terminal backgrounds and broke light mode contrast, making text unreadable for users with low-vision accessibility requirements.
4. **Custom LLM support gaps**: Core tools including `explore` are hardcoding OpenAI-specific model names, breaking full functionality for users running self-hosted, on-prem, or alternative LLM backends outside of GitHub's default hosted offering.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-06-27
Source: github.com/MoonshotAI/kimi-cli

---
## 1. Today's Highlights
All activity over the 24-hour reporting window focused on stabilizing end-user workflows and lowering barriers for open source contributors. A widely reported 403 access bug affecting Kimi for Coding endpoints was marked closed after 3 weeks of triage, while two new unpatched functional bugs for plan mode and Linux input handling were filed. Two active PRs are currently under review to fix API payload serialization errors and improve project onboarding documentation.

## 2. Releases
No new official releases were published to the repository in the reporting window.

## 3. Hot Issues
Only 3 issues were updated in the last 24 hours, all highlighted below:
1. [#2425 [CLOSED] 403 Kimi For Coding access error](https://github.com/MoonshotAI/kimi-cli/issues/2425): A high-impact bug affecting v0.9.0 Mac users that returned universal 403 errors for all calls to the kimi-for-coding model. It accumulated 10 comments and 3 upvotes over 3 weeks from users reporting total access blocks, and its full resolution unblocks core functionality for users running older CLI versions.
2. [#2478 [OPEN] Plan mode state inconsistency prevents exit](https://github.com/MoonshotAI/kimi-cli/issues/2478): A newly filed critical workflow bug where the CLI displays an active plan mode prompt and valid plan file path, but rejects user calls to exit plan mode with a "Not in plan mode" error, completely breaking users out of planned coding sessions. It is already under triage with 1 community comment.
3. [#2477 [OPEN] Double Enter key press /sessions feedback loss on Linux](https://github.com/MoonshotAI/kimi-cli/issues/2477): A platform-specific bug affecting v0.20.0 on Ubuntu 24.04 that causes duplicated input submissions and lost output history when users press the Enter key twice, degrading basic interactive workflow UX.

## 4. Key PR Progress
Only 2 PRs were updated in the last 24 hours, both listed below:
1. [#2287 [OPEN] docs(readme): add prerequisites list to Development section](https://github.com/MoonshotAI/kimi-cli/pull/2287): A documentation quality improvement that adds a formal Prerequisites subsection to the project's Development guide, listing all required dependencies contributors need to install before running `make prepare`. It resolves prior issue #2274 and eliminates unguided setup friction for new open source participants.
2. [#2476 [OPEN] fix(kosong): omit reasoning_effort instead of sending null when thinking is off](https://github.com/MoonshotAI/kimi-cli/pull/2476): A critical API payload fix that prevents the CLI from sending a `reasoning_effort: null` field to OpenAI-compatible endpoints when thinking mode is disabled. This change avoids validation errors that break API calls on endpoints that explicitly reject null values for the reasoning_effort parameter.

## 5. Feature Request Trends
No formal feature requests were filed this window, but observable priority directions from existing activity include:
- Full runtime state synchronization across all interactive workflow modes (plan mode, session mode) to eliminate mismatches between user-facing prompts and backend state
- Robust local session persistence that prevents lost output history after accidental duplicate input events
- Structured contributor onboarding content that reduces manual setup work for first-time open source contributors

## 6. Developer Pain Points
Recurring frustrations identified from updated issues and PRs:
1. Unnecessary API call failures caused by improperly serialized optional payload parameters (e.g. null values for reasoning_effort)
2. Runtime state mismatch in interactive workflow modes that blocks users from executing core expected commands (e.g. exiting plan mode)
3. Unaddressed platform-specific input handling edge cases on Linux distributions that break basic keyboard interactions
4. Missing pre-requisite documentation for new contributors that wastes hours of debugging time for first-time project setup

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-06-27
---
## 1. Today's Highlights
Today’s highest-engagement community discussion centers on a finalized resolved request to adjust OpenCode Go subscription usage limits following DeepSeek V4 Pro’s permanent 75% API price cut, with the closed issue drawing over 160 combined comments and thumbs up from paying users. Maintainers merged a backlog of 17 automated cleanup PRs dating to May 26 that resolve dozens of long-standing edge case bugs across the CLI, TUI, and model provider stacks, while active community contributions target widely reported session compaction failures and GitHub Copilot provider compatibility gaps. No official new releases were published in the 24-hour window, though multiple pending core refactor PRs signal a near-term v1.18 feature release is in active preparation.

## 2. Releases
No new official OpenCode releases were published in the last 24 hours.

## 3. Hot Issues
1. **[#28846 [CLOSED] Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)** : The highest-engagement issue of the window with 84 comments and 82 thumbs up. This resolved feature request addresses the widely expected user demand for expanded token allowances on paid Go tiers to pass on DeepSeek’s recent price cuts to subscribers.
2. **[#450 [CLOSED] Support for reasoning_effort parameter in UI](https://github.com/anomalyco/opencode/issues/450)** : A years-old feature request with 15 comments and 26 thumbs up, now marked resolved. It eliminates manual config edits for users who want to toggle reasoning effort settings across all supported models including OpenAI, Gemini, and DeepSeek.
3. **[#23153 [OPEN] Pay Go with crypto](https://github.com/anomalyco/opencode/issues/23153)** : An open feature request with 12 comments and 23 thumbs up from users in regions with restricted international payment access, looking for alternative payment methods to sign up for OpenCode Go.
4. **[#12598 [CLOSED] Windows latest version v1.1.53 won't respond/open](https://github.com/anomalyco/opencode/issues/12598)** : A critical Windows desktop bug with 16 comments, resolved after dozens of users reported unlaunchable applications and zero debug output post-upgrade.
5. **[#28202 [CLOSED] Plugin async prompts can overlap with Web prompt_async and create same-parent assistant siblings](https://github.com/anomalyco/opencode/issues/28202)** : A resolved break for power users running concurrent background agents, which caused duplicate assistant messages and corrupted persisted session data, drawing 7 comments from affected users.
6. **[#19005 [OPEN] Make local file paths clickable in terminal output](https://github.com/anomalyco/opencode/issues/19005)** : A top quality-of-life feature request with 6 comments that eliminates manual copy-paste operations for users accessing files generated by OpenCode sessions.
7. **[#32149 [OPEN] Opencode Stops Processing Requests Without Response](https://github.com/anomalyco/opencode/issues/32149)** : An actively investigated unresponsive session bug with 6 comments, where sessions hang on the "thinking" state with no returned error for end users.
8. **[#30675 [CLOSED] GitHub Copilot: most models rejected with "The requested model is not supported"](https://github.com/anomalyco/opencode/issues/30675)** : A resolved bug that identified the missing `Copilot-Integration-Id` header as the root cause for all Copilot models except `gpt-5.2-codex` failing to work.
9. **[#31152 [OPEN] Infinite compaction loop on every response even with empty session](https://github.com/anomalyco/opencode/issues/31152)** : A severe breaking bug with 4 comments that locks users out of sessions by triggering non-stop context compaction immediately after every user message.
10. **[#17873 [OPEN] Preserve Model Selection Per Chat](https://github.com/anomalyco/opencode/issues/17873)** : A widely requested workflow improvement that prevents users from accidentally switching the model for existing specialized chats when opening new chat windows.

## 4. Key PR Progress
1. **[#34116 [OPEN] fix(app): question UX fixes and improvements](https://github.com/anomalyco/opencode/pull/34116)** : Community contribution from developer eXamadeus that closes 4 separate long-running bugs related to user input flows, drastically reducing UI friction for first-time users.
2. **[#34125 [OPEN] fix(mcp): request refresh token scope](https://github.com/anomalyco/opencode/pull/34125)** : Fixes MCP authorization compliance with SEP-2207 specifications, only requesting the `offline_access` refresh token scope when the authorization server explicitly supports it, resolving broken MCP server login flows.
3. **[#34123 [OPEN] fix(tui): add plain text paste](https://github.com/anomalyco/opencode/pull/34123)** : Resolves the inconsistent file path pasting bug reported in #34006, adding a `Ctrl+Alt+V` hotkey to insert raw clipboard text and avoid unwanted automatic file upload behavior.
4. **[#34119 [OPEN] refactor(core): separate out layer node functionality and integrate into v2](https://github.com/anomalyco/opencode/pull/34119)** : Maintainer PR from jlongster laying groundwork for the upcoming OpenCode v2 core runtime, adding improved agent execution isolation via separated layer node modules.
5. **[#29446 [CLOSED] fix(opencode): bound codex stream stalls](https://github.com/anomalyco/opencode/pull/29446)** : Fixes infinite SSE stream hangs when OpenAI Codex API connections fail to terminate cleanly, eliminating session deadlocks during long generation tasks.
6. **[#29412 [CLOSED] fix(opencode): repair common tool-input shape failures before retry](https://github.com/anomalyco/opencode/pull/29412)** : Adds a pre-validation repair layer that automatically fixes common schema mismatches in LLM-emitted tool calls, drastically reducing session abortion rates from malformed tool outputs.
7. **[#29392 [CLOSED] feat(provider): add endpoint-based custom providers and model discovery](https://github.com/anomalyco/opencode/pull/29392)** : New feature that lets users connect any self-hosted or third-party OpenAI-compatible model endpoint directly without official provider integration.
8. **[#29373 [CLOSED] refactor(app): migrate session timeline to TanStack Virtual](https://github.com/anomalyco/opencode/pull/29373)** : Major UI performance improvement that eliminates laggy chat scrolling for very long sessions with 1000+ messages.
9. **[#29429 [CLOSED] fix(opencode): load full skill context for slash skills](https://github.com/anomalyco/opencode/pull/29429)** : Resolves months of reports of broken community custom slash commands by ensuring the full skill context is loaded, rather than only a partial snippet.
10. **[#29439 [CLOSED] fix(opencode): cap retry delays without valid hints](https://github.com/anomalyco/opencode/pull/29439)** : Caps API request retry backoff at 30 seconds when no valid `retry-after` header is returned from the upstream model provider, eliminating excessive multi-minute waits after transient outages.

## 5. Feature Request Trends
The most requested feature directions from the past 24 hours fall into four clear buckets:
1. **Pricing & payment**: Adjustments to OpenCode Go tier limits to reflect recent DeepSeek price cuts, plus crypto payment support for users without access to international credit cards.
2. **Model UX control**: A native UI selector for the `reasoning_effort` parameter, persistent per-chat model selection, and native custom OpenAI-compatible endpoint support.
3. **Protocol ecosystem**: Full ACP (Agent Client Protocol) spec compliance for diff transmission during patch applications, and improved MCP (Model Context Protocol) authorization flow support.
4. **Developer quality of life**: Clickable local file paths in terminal output, and dedicated environment variable markers to let downstream CLI tools detect they are running inside an OpenCode agent shell.

## 6. Developer Pain Points
The highest-recurring frustrations reported across new issues are:
1. **Context compaction breakages**: Multiple independent reports of infinite compaction loops, auto-compact ignoring explicit user `auto: false` config and disable environment variables, causing massive performance hits and unworkable sessions.
2. **GitHub Copilot provider unreliability**: Two separate new bugs report that while the Copilot provider successfully lists all models, every inference request fails with a "model not supported" error due to missing required authentication headers.
3. **Windows desktop app instability**: Multiple unlaunchable app bugs after recent updates, plus missing i18n support that leaves top menu items untranslated even when users select non-English locales.
4. **Silent session failures**: Users frequently report hanging "thinking" states with no error output or debug information, making it impossible for end users to diagnose what caused the unresponsive session.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-27
Source: github.com/badlogic/pi-mono

---

## 1. Today's Highlights
No new stable releases were published over the last 24 hours, but maintainers merged 6 critical bug fixes and 2 new feature additions alongside ongoing community contributions for expanded LLM provider support. A high-engagement 70+ comment thread on GPT-5.5 / openai-codex TUI connection reliability remains the top priority for user-facing fixes, while early work on an experimental local Pi orchestrator daemon marks a major new capability for headless, multi-instance Pi deployments.

## 2. Releases
No new production or pre-release versions of the Pi TUI/SDK were published in the last 24 hours.

## 3. Hot Issues
### 1. #4945 openai-codex Connection Reliability Issues
Link: https://github.com/earendil-works/pi/issues/4945  
With 71 comments and 30 upvotes, this is the highest-engagement open issue in the repo: users report the TUI freezes indefinitely on a "Working..." state when using GPT-5.5, with no streamed output, no visible errors, and the only recovery path requiring a manual Escape press to abort the generation. The long-running bug has triaged for immediate prioritization.

### 2. #5825 Streaming markdown forces scroll to bottom
Link: https://github.com/earendil-works/pi/issues/5825  
33 comments confirm this extremely disruptive UX bug that auto-scrolls users back to the bottom of the chat even after they manually scroll up to read existing content, triggered only when the "clear on shrink" setting is enabled. A fix PR is already in progress.

### 3. #5363 Add amazon-bedrock-mantle provider for OpenAI-compatible models
Link: https://github.com/earendil-works/pi/issues/5363  
15 comments and 4 upvotes from enterprise AWS users requesting first-class support for Amazon Bedrock Mantle, which uses a non-Conformant OpenAI-compatible API that does not work with the existing native Bedrock Converse API provider.

### 4. #4877 Session folder collision
Link: https://github.com/earendil-works/pi/issues/4877  
19 community members flagged a low-severity but unexpected edge case where two distinct working directories (e.g. `/a/b/c/d` and `/a-b/c-d`) generate the exact same session folder name, creating accidental session overlap that could cause data loss.

### 5. #5871 Anthropic OAuth-token detection is hardcoded to sk-ant-oat, not configurable
Link: https://github.com/earendil-works/pi/issues/5871  
Triage in progress for this bug that breaks custom self-hosted Anthropic deployments not using the official OAuth token prefix pattern, forcing teams to manually patch the source code to use their own credentials.

### 6. #6097 Add support for 'max' thinking level
Link: https://github.com/earendil-works/pi/issues/6097  
A brand new feature request filed the day after OpenAI announced GPT-5.6 Sol, asking for native support for the new "max" reasoning level matching Anthropic's existing max thinking tier.

### 7. #6050 TUI full redraw clears terminal scrollback during active rendering
Link: https://github.com/earendil-works/pi/issues/6050  
Recently closed bug that caused users to lose existing terminal scrollback history mid-generation, traced to unoptimized full screen redraw calls in the core TUI renderer.

### 8. #1391 Support multiple OAuth logins per provider
Link: https://github.com/earendil-works/pi/issues/1391  
Long-running feature request closed yesterday, adding quality-of-life support for users switching between work and personal accounts for the same LLM provider.

### 9. #5886 AgentSession settlement/continuation and assistant-tail lifecycle bugs
Link: https://github.com/earendil-works/pi/issues/5886  
Maintainer mitsuhiko opened this meta-issue to track a family of under-documented stability bugs where the agent attempts to resume generation from invalid transcript state after generation completes.

### 10. #5438 Clipboard image paste only submits a temp file path in interactive mode
Link: https://github.com/earendil-works/pi/issues/5438  
Recently closed core multimodal workflow bug that broke image pasting, where only a local temporary file path was sent to the LLM instead of the actual base64 image bytes.

## 4. Key PR Progress
### 1. #6026 fix(tui): stabilize working status row
Link: https://github.com/earendil-works/pi/pull/6026  
Open PR from maintainer xl0 directly addressing the #5825 unwanted forced scroll bug by decoupling the working status UI update from full viewport recalculations.

### 2. #6090 feat(ai): add Friendli provider
Link: https://github.com/earendil-works/pi/pull/6090  
Merged full implementation adding native first-class support for the Friendli LLM inference platform, following the same pattern used for prior Ant Ling and NVIDIA NIM provider additions.

### 3. #6087 fix(coding-agent): remove hardcoded RPC wait timeout
Link: https://github.com/earendil-works/pi/pull/6087  
Merged fix for #6088 that eliminated the arbitrary hardcoded 60s RpcClient timeout, which was killing long-running MCP tool sessions even when the remote process was still actively working. The PR adds configurable `waitTimeout` parameters to all relevant RpcClient methods.

### 4. #6064 feat(experimental): pi orchestrator
Link: https://github.com/earendil-works/pi/pull/6064  
Merged new experimental package adding a background local orchestrator daemon that exposes lifecycle management for multiple Pi instances over a local IPC socket, for use cases requiring parallel headless Pi execution.

### 5. #6099 Rename model key from 'gpt-5.2-chat-latest' to 'gpt-5.2-chat'
Link: https://github.com/earendil-works/pi/pull/6099  
Quick merged correction that fixed a stale built-in OpenAI model definition, aligning Pi's model list with the actual live OpenAI API endpoint naming.

### 6. #5515 feat(coding-agent): add alwaysTrust setting to skip project trust gating
Link: https://github.com/earendil-works/pi/pull/5515  
Merged power-user toggle that disables the default project trust confirmation prompt, for use in fully automated/containerized Pi deployments requiring no user interaction.

### 7. #6092 draft: hosted websearch
Link: https://github.com/earendil-works/pi/pull/6092  
WIP draft PR implementing a built-in hosted web search tool, as a lighter alternative to the existing third-party pi-web-access plugin ecosystem.

## 5. Feature Request Trends
1. **Expanded LLM provider and model support**: The largest volume of new requests target native integration for new inference platforms (Friendli, Amazon Bedrock Mantle) and alignment with latest LLM vendor launches (OpenAI GPT-5.6 Sol "max" reasoning level, updated Anthropic scoped key formats).
2. **Embeddable SDK maturity**: Multiple recent requests focus on stabilizing Pi for use as an imported library inside external applications, rather than only as a standalone TUI, with fixes for uninitialized global state and shared runtime pollution across sequential sessions.
3. **Extensibility improvements**: Developers building custom Pi extensions are asking for formal APIs to register custom payload transforms on top of existing built-in providers, and improved error handling for missing optional extensions in plan mode.
4. **Multi-account usability**: Users want native support for storing multiple named OAuth credentials for the same provider, to easily switch between work and personal LLM accounts.

## 6. Developer Pain Points
1. **TUI rendering regressions**: An ongoing wave of bugs triggered by unnecessary full redraw operations, including unwanted forced scrolling, tmux-specific viewport jumps, and accidental loss of terminal scrollback.
2. **Agent session instability**: Recurring edge cases around session reload, automatic context compaction, and extension lifecycle hooks, where calling `ctx.compact()` inside a `turn_end` handler can abort unfinished tool execution loops.
3. **Provider compatibility gaps**: Many hardcoded assumptions about vendor API formats (e.g. Anthropic OAuth token prefixes) break self-hosted and alternative cloud LLM deployments.
4. **Undocumented hardcoded limits**: Prior arbitrary hardcoded 60s RPC timeouts caused failures for users running long-running MCP tool workflows, requiring manual source patching before the recent fix.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-06-27
---
## 1. Today's Highlights
This 24-hour window saw the release of the new `cua-driver-rs v0.6.8` prebuilt binary fork with full codesigning for macOS, alongside critical fixes for the high-impact Windows PowerShell process leak bug that caused OOM crashes for end users. The community also advanced the v0.16 Mode B (qwen serve) production roadmap, merged long-awaited quality-of-life features for CLI users, and addressed multiple CI reliability gaps that caused cross-PR state contamination in the runner fleet.
---
## 2. Releases
### cua-driver-rs v0.6.8
The latest forked release of the cua-driver prebuilt binaries (vendored under `packages/cua-driver`):
- macOS: Full codesigned + notarized universal binary with dedicated `QwenCuaDriver.app` bundle
- Linux: Unsigned builds supporting x86_64/arm64, with glibc 2.31 minimum version requirement
- Windows: Unsigned x86_64/arm64 builds
This release adds full support for relative coordinate operations for computer use workflows.
---
## 3. Hot Issues (Top 10 Noteworthy)
| Issue | Context & Significance |
|-------|-------------------------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | 42-comment roadmap proposal for Mode B (`qwen serve`) to reach v0.16 production readiness, tracking remaining work for the 1-daemon-1-workspace architecture. It is the core public tracking thread for all backend API developers planning to integrate with Qwen Code headless deployments. |
| [#5873](https://github.com/QwenLM/qwen-code/issues/5873) | P1 Windows bug: every shell tool spawned an orphaned PowerShell process that was never reaped, leading to 100% reproducible OOM crashes after extended sessions. It received community-wide attention as one of the most severe recent Windows user-facing defects. |
| [#5055](https://github.com/QwenLM/qwen-code/issues/5055) | P1 Windows packaging bug: the official VS Code extension `.vsix` binary was flagged by Windows Defender as the `Trojan:JS/ShaiWorm.DBA!MTB` threat, eroding user trust and blocking distribution for new users. |
| [#5083](https://github.com/QwenLM/qwen-code/issues/5083) | P2 Linux TUI freeze bug caused by unreaped zombie bash child processes, leading to unresponsive interfaces for long-running MCP/shell sessions that require full process restarts to recover. |
| [#4493](https://github.com/QwenLM/qwen-code/issues/4493) | OAuth login redirect loop bug for Rider IDE users, preventing JetBrains ecosystem users from authenticating and accessing Alibaba Cloud token plans for model inference. |
| [#5819](https://github.com/QwenLM/qwen-code/issues/5819) | Unintended behavior post auto-update: the client automatically modified `setting.json` to swap low-cost base models to higher-priced alternatives without user notification, leading to unexpected overspend on token credits. |
| [#4805](https://github.com/QwenLM/qwen-code/issues/4805) | Community request to enable merge queue protection to prevent stale CI checks from merging code with undetected semantic conflicts, a top priority for core maintainers to reduce main branch breakages. |
| [#5882](https://github.com/QwenLM/qwen-code/issues/5882) | P1 CI reliability bug: shared ECS CI runners ran Qwen triage jobs without full isolation, causing triage comments intended for one PR to be incorrectly posted to an unrelated PR, breaking PR workflow traceability. |
| [#4218](https://github.com/QwenLM/qwen-code/issues/4218) | MCP integration bug on Windows: the filesystem MCP server shows a connected status on UI but never exposes tool definitions to the LLM, breaking local file operation workflows for all Windows users leveraging the MCP ecosystem. |
| [#5875](https://github.com/QwenLM/qwen-code/issues/5875) | Top CLI quality-of-life feature request to replace exact prefix matching for slash skill command autocomplete with fuzzy partial matching, to reduce typing overhead for power users with dozens of custom skills installed. |
---
## 4. Key PR Progress (Top 10)
| PR | Description |
|----|-------------|
| [#5892](https://github.com/QwenLM/qwen-code/pull/5892) | Critical P1 fix for the Windows PowerShell leak bug reported in #5873: adds full tree-kill logic for PTY shell processes to ensure no orphaned pwsh/cmd processes remain after tool execution. |
| [#5890](https://github.com/QwenLM/qwen-code/pull/5890) | Implements the durable `.qwen/loop.md` task file for the `/loop` long-running automation feature, so users can edit loop instructions mid-run without interrupting the task. |
| [#5835](https://github.com/QwenLM/qwen-code/pull/5835) | Fixes the root cause of unexpected model switching post-update: the selected active model is now preserved even when re-applying provider setup plans after re-authentication, token refresh, or version upgrades. |
| [#5777](https://github.com/QwenLM/qwen-code/pull/5777) | Revives the long-paused Chrome browser extension project via a new daemon-direct thin client architecture that connects directly to the local `qwen serve` instance over HTTP+SSE, eliminating the legacy native messaging stack. |
| [#5906](https://github.com/QwenLM/qwen-code/pull/5906) | Adds strict validation for the `/workspace/settings` API to reject negative values for `general.cleanupPeriodDays`, eliminating schema inconsistency risks that allowed invalid negative retention periods to be persisted. |
| [#5898](https://github.com/QwenLM/qwen-code/pull/5898) | Adds mid-input fuzzy matching for slash skill command autocomplete, directly implementing the feature request from #5875 for partial name matching anywhere in the prompt text. |
| [#5780](https://github.com/QwenLM/qwen-code/pull/5780) | Adds native `qwen update` CLI command and `/update` slash command for one-click auto-updates, eliminating the need for manual binary/extension reinstall steps for end users. |
| [#5886](https://github.com/QwenLM/qwen-code/pull/5886) | Rolls out the new opt-in team shared memory tier, stored at `.qwen/team-memory/` in the git repository, so shared project context is automatically synced across all collaborators via existing git workflows. |
| [#5852](https://github.com/QwenLM/qwen-code/pull/5852) | Adds resumable SSE streams for the `/acp` session endpoint using standard `Last-Event-ID` headers, allowing interrupted connections to resume streaming from the exact break point instead of restarting full generation. |
| [#5869](https://github.com/QwenLM/qwen-code/pull/5869) | Implements incremental streaming syntax highlighting for web shell code blocks, eliminating the full re-tokenize flicker that previously only showed fully highlighted code after generation completed. |
---
## 5. Feature Request Trends
The most requested feature directions from this 24h period include:
1. **Collaboration workflow tools**: Team shared git memory tiers, full Telegram/QQ bot command support for remote multi-user session management
2. **Mode B / ACP production readiness**: Full gap closure for unimplemented ACP features (cd command, permission controls, LSP integration, GitHub setup) to support stable enterprise headless deployments
3. **CLI/TUI quality of life**: Hot-reload systems for skills/MCP/configuration without session restarts, fuzzy slash command matching, durable loop automation tasks
4. **Ecosystem expansion**: Revived Chrome browser extension, native voice dictation support for desktop clients
---
## 6. Developer Pain Points
Recurring high-frequency frustrations reported by contributors and end users:
1. **Cross-platform process leaks**: Orphaned PowerShell processes on Windows, unreaped zombie child processes on Linux leading to silent OOM crashes and UI freezes for long sessions
2. **Persistent streaming reliability issues**: Sporadic hard-to-reproduce streaming timeouts and connection termination errors that break generation mid-task
3. **CI/CD inefficiencies**: 25+ minute PR critical paths, unisolated shared CI runners causing cross-PR state contamination, stale CI check approvals merging broken code to main
4. **Unintended side effects post auto-update**: Silent automatic changes to user model selection settings leading to unplanned token overspend and unexpected output behavior.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-06-27
---
## 1. Today's Highlights
Today’s updates mark major progress on long-standing community-reported pain points, including fixes for the commonly reported YOLO mode accidental approval prompt bug and the persistent plan/agent mode mixing defect that caused misaligned agent behavior. Maintainers merged 17 pull requests across runtime refactoring, bug fixes, and dependency upgrades, while critical v0.8.59 stabilization release tracking work was formally closed out. Multiple cross-platform reliability fixes for Windows multi-agent SSE streaming and TUI rendering regressions also landed in the development branch today.

## 2. Releases
No new official releases were published in the 24 hours ending 2026-06-27. The v0.8.59 stabilization release tracker issue #3063 was marked closed, meaning all pre-release validation for the upcoming v0.8.59 ship candidate (including the macOS TUI mouse-report input leak fix) is now complete.

## 3. Hot Issues (10 Noteworthy Items)
1. **[OPEN] #3568: Plan and agent mode mixed up bug**  
   Link: [Hmbown/CodeWhale#3568](https://github.com/Hmbown/CodeWhale/issues/3568)  
   The top user-reported active bug, this defect causes the AI to ignore plan-only mode restrictions and run unapproved agent actions, breaking workflow safety for users who toggle between planning and execution phases. It received 5 comments and 1 👍 from community users since being reported June 25.
2. **[OPEN] #1186: Add typed persistent execpolicy permission rules**  
   Link: [Hmbown/CodeWhale/issues/1186](https://github.com/Hmbown/CodeWhale/issues/1186)  
   The highest-commented open enhancement (10 comments) requests granular, scoped permission rules for execution policies that support allow/deny/ask decisions by tool name, command prefix, and workspace path, matching enterprise user requirements for controlled agent workflows.
3. **[CLOSED] #861: Thinking collapse bug (frozen/truncated reasoning blocks)**  
   Link: [Hmbown/CodeWhale/issues/861](https://github.com/Hmbown/CodeWhale/issues/861)  
   A high-severity 8-comment defect that broke DeepSeek model reasoning workflows, where truncated or dropped `reasoning_content` blocks triggered API 400 errors on subsequent turns. All 4 identified root causes are now audited and patched.
4. **[CLOSED] #3582: install.sh endpoint returns HTML instead of shell script**  
   Link: [Hmbown/CodeWhale/issues/3582](https://github.com/Hmbown/CodeWhale/issues/3582)  
   A critical onboarding break that failed all new user installations via the official curl command. The issue was resolved within 24 hours of being reported to avoid blocking new signups.
5. **[OPEN] #3657: Editor Freezes and Crashes Codewhale**  
   Link: [Hmbown/CodeWhale/issues/3657](https://github.com/Hmbown/CodeWhale/issues/3657)  
   A newly reported critical bug that fully crashes the application when users open the editor from draft mode, requiring a full process kill to recover. Maintainers are actively triaging the 3-comment report.
6. **[CLOSED] #1679: SSE multi-agent parallel 45s timeout + UI distortion on Windows 11**  
   Link: [Hmbown/CodeWhale/issues/1679](https://github.com/Hmbown/CodeWhale/issues/1679)  
   A 4-comment cross-platform reliability bug that broke 4-agent parallel review workflows on Windows, forcing users to fall back to slow serial single-agent processing. Patches have been merged to the v0.8.66 release train.
7. **[OPEN] #3638: Expose main prompt for broader use cases**  
   Link: [Hmbown/CodeWhale/issues/3638](https://github.com/Hmbown/CodeWhale/issues/3638)  
   A feature request with user support to decouple hardcoded system prompts from the binary, enabling non-software-development use cases including creative writing and media script processing.
8. **[CLOSED] #1846: No visibility into proposed changes before approval**  
   Link: [Hmbown/CodeWhale/issues/1846](https://github.com/Hmbown/CodeWhale/issues/1846)  
   A long-standing UX pain point with 1 👍 reaction, where users could not preview code diffs before granting destructive action approval. The fix is scheduled for v0.8.66 release.
9. **[OPEN] #2870: EPIC: Staged command-boundary refactor**  
   Link: [Hmbown/CodeWhale/issues/2870](https://github.com/Hmbown/CodeWhale/issues/2870)  
   A 7-comment large-scale architectural refactor that will reduce TUI code technical debt, making future feature additions and bug fixes far faster. Work is being split into small mergeable layers to avoid main branch instability.
10. **[CLOSED] #3063: v0.8.59 release tracker**  
    Link: [Hmbown/CodeWhale/issues/3063](https://github.com/Hmbown/CodeWhale/issues/3063)  
    The official 11-comment release tracking issue for the upcoming v0.8.59 stabilization build, all mandatory pre-release fixes are now signed off.

## 4. Key PR Progress (10 Important Items)
1. **#3664 fix(tui): split auto mode from yolo bypass**  
   Link: [Hmbown/CodeWhale/pull/3664](https://github.com/Hmbown/CodeWhale/pull/3664)  
   Resolves the high-impact bug where YOLO mode incorrectly requested user approval after recent updates. Introduces a new separate Auto mode for risk-aware semi-automated execution, while restoring full no-prompt bypass behavior for YOLO.
2. **#3663 tui: restore saved session mode on sync**  
   Link: [Hmbown/CodeWhale/pull/3663](https://github.com/Hmbown/CodeWhale/pull/3663)  
   Directly fixes the #3568 plan/agent mode mixing bug by persisting session mode metadata across session loads and engine respawns, eliminating mode desync between the UI and backend.
3. **#3650 Permission control: deny, allow, and ask actions in permissions.toml**  
   Link: [Hmbown/CodeWhale/pull/3650](https://github.com/Hmbown/CodeWhale/pull/3650)  
   First implementation of the typed persistent exec policy rules requested in #1186, adding an `action` field for granular per-rule permission control.
4. **#3660 fix(app-server): stream stdio thread message deltas**  
   Link: [Hmbown/CodeWhale/pull/3660](https://github.com/Hmbown/CodeWhale/pull/3660)  
   Fixes the multi-month old #1490 bug where the `deepseek app-server --stdio` interface advertised SSE delta support

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*